// Merges movies.marvel + movies.dc into movies.superheroes, folds African subregions into region.africa,
// and tags superhero lists with movies.superheroes / television.superheroes.
// Run with --eval "var DRY=true" first; DRY=false writes. Run backup first.
if (typeof DRY === "undefined") throw new Error("set DRY");

var RENAME = {
  "movies.marvel": "movies.superheroes",
  "movies.dc": "movies.superheroes",
  "region.east_africa": "region.africa",
  "region.egypt": "region.africa",
  "region.north_africa": "region.africa",
  "region.south_africa": "region.africa",
  "region.southern_africa": "region.africa",
  "region.west_africa": "region.africa",
};
var OLD = Object.keys(RENAME);
var AFRICA_OLD = OLD.filter(function (k) {
  return k.indexOf("region.") === 0;
});
var HERO_OLD = ["movies.marvel", "movies.dc"];

// Reviewed superhero lists (name-matched, false positives removed); only tagged under a main category they already have.
var TV_HEROES = [
  "5f1a897b23e73b592bfa4db7",
  "5ee66f287e5ead4af2bc8158",
  "5ee128d5444cc0710fdf2c7b",
  "5f108b8fb048ec64c0df14a8",
  "5f02a5a4a4b95a63bb2e2710",
  "5dd2da722d7461079e275121",
  "5cc7c7b22e33e64425af60d8",
  "5faef60293650335dbde88bc",
  "5dfa78cf7ae4760a5c36a2ca",
  "5f68dd9194ab886349d211a0",
  "5ebecc5c75eadb1faf172b79",
  "5f8b5687a7bc130e7dc7f855",
  "5f8e5c1db8108541b9ef67a4",
  "61d0452e6e44a1438e3f177a",
  "62368e3e52ddf713da32921c",
  "600aee250332a709541743ed",
  "602f812734e15137a84395b0",
  "60462ad13c3c3b6e5aeeb014",
  "605281673c3c3b6e5ac45c23",
  "6077972075a27603f52b2216",
  "607f6d9bdb59db56bafe0369",
  "60a17e30afae72274ed3b8ec",
  "60a1df7dafae72274eea12da",
  "60a1e4f8afae72274eea2195",
  "60a1e669afae72274eea252c",
  "60a1e79fafae72274eea27d0",
  "60d874f3a07e706b6d83f9e1",
  "60eb3608a07e706b6d171b2a",
  "60f4a0cca07e706b6dfadbf8",
  "606174e48f6e89349c82db58",
  "606378b168c38c54b5a381d6",
  "67e606ff0112233ec5c04532",
  "67f605de0112233ec550f6e4",
  "681b42a3ca7474b997a00cd4",
  "68214a8f8de0d90ed6014f23",
  "682559428de0d90ed67af6db",
  "682946b8a63662df608b4c09",
  "634e0b554c99fe0455962c56",
  "636c2905db93aa25a9eeb906",
];
var MOVIE_HEROES = [
  "5f1a897b23e73b592bfa4db7",
  "5f108b8fb048ec64c0df14a8",
  "5ee651247e5ead4af2bc02f8",
  "5cf82bee2b139c4c6bd5074d",
  "5faf324b5635d56aaa562036",
  "5f526c03da0b234997392c66",
  "5ebecc5c75eadb1faf172b79",
  "612edde5cad4ec3b7d3ffd22",
  "61632f8905456811ac348e3a",
  "6163307005456811ac3490bd",
  "61c13b636e44a1438e278ba7",
  "61d31b5b6e44a1438e4351b6",
  "62957664219b50706daa04e3",
  "602b6fbd34e15137a805fe7a",
  "602b755534e15137a8061301",
  "60462ad13c3c3b6e5aeeb014",
  "6077972075a27603f52b2216",
  "607ac005ab17c91e7522c8bc",
  "607ad10eab17c91e7523070c",
  "607ae5fcab17c91e752350cd",
  "60a17e30afae72274ed3b8ec",
  "60cde36010fb4a1ea64580c1",
  "606174e48f6e89349c82db58",
  "636c2905db93aa25a9eeb906",
  "663abc80467695ba1b2ccc47",
];

// Subcategory keys per main, after the change (must match the deployed en/categories.json).
var SUBS = {
  // gaming/society/history also gained a subcategory, but only these three mains change disabled-state handling below.
  movies: [
    "actors",
    "animation",
    "anime",
    "awards",
    "cast",
    "characters",
    "details",
    "filmography",
    "star_wars",
    "superheroes",
    "titles",
  ],
  television: [
    "animation",
    "anime",
    "awards",
    "cast",
    "characters",
    "details",
    "k_drama",
    "reality",
    "seasons",
    "streaming",
    "superheroes",
    "telenovelas",
    "titles",
  ],
  region: [
    "africa",
    "antarctica",
    "arctic",
    "asia",
    "atlantic_ocean",
    "australia",
    "brazil",
    "canada",
    "caribbean",
    "central_america",
    "central_asia",
    "china",
    "commonwealth",
    "europe",
    "european_union",
    "france",
    "germany",
    "greece",
    "india",
    "indian_ocean",
    "indonesia",
    "italy",
    "mediterranean",
    "mexico",
    "middle_east",
    "north_america",
    "oceania",
    "pacific_ocean",
    "russia",
    "scandinavia",
    "spain",
    "southeast_asia",
    "south_america",
    "united_kingdom",
    "united_states",
  ],
};

function uniq(a) {
  var s = {};
  return a.filter(function (x) {
    return s[x] ? false : (s[x] = true);
  });
}
function renamed(cats) {
  return uniq(
    cats.map(function (c) {
      return RENAME[c] || c;
    }),
  );
}
function same(a, b) {
  return (
    a.length === b.length &&
    a.every(function (x, i) {
      return x === b[i];
    })
  );
}

var stats = {};
function bump(k) {
  stats[k] = (stats[k] || 0) + 1;
}
function save(coll, id, set, label) {
  bump(label);
  if (!DRY) db.getCollection(coll).updateOne({ _id: id }, { $set: set });
}

// 1. Lists: rename keys, then add superheroes tags.
db.lists
  .find(
    {
      $or: [
        { categories: { $in: OLD } },
        {
          _id: {
            $in: TV_HEROES.concat(MOVIE_HEROES).map(function (i) {
              return ObjectId(i);
            }),
          },
        },
      ],
    },
    { categories: 1 },
  )
  .forEach(function (l) {
    var id = l._id.str;
    var c = renamed(l.categories || []);
    if (TV_HEROES.indexOf(id) >= 0 && c.indexOf("television") >= 0) c.push("television.superheroes");
    if (MOVIE_HEROES.indexOf(id) >= 0 && c.indexOf("movies") >= 0) c.push("movies.superheroes");
    c = uniq(c);
    if (!same(c, l.categories)) save("lists", l._id, { categories: c }, "lists");
  });

// 1b. New subcategories, name-matched and reviewed; excluded names are false positives.
var NEW_TAGS = [
  {
    main: "gaming",
    sub: "gaming.characters",
    re: /characters?\b|personagens?|personajes|karakter|tokoh|champions|brawlers|\bagents\b|heroes|villagers|bosses|playable|fighters|villains|ninjas|companions|\bnpcs?\b|operators|legends\b|survivors|killers/i,
    exclude: /\bclasses\b|equipment|spells|specialties|factions|playable races|perks/i,
  },
  {
    main: "society",
    sub: "society.people",
    re: /famous|\bpeople\b|celebrit|notable|personalit|\bpessoas\b|\bfigures\b|\bwomen\b|\bmen who\b|ians\b|\bswedes|\bdanes|\bdutch\b|\bfilipinos\b|\bbillionaires|\bpersons\b|laureates|named after|\bwho\b/i,
    excludeNames: [
      "Nations with more than 10 million people and less than 2,000 reported cases of COVID-19",
      "First Countries to Elect Women Leaders",
      "Countries with the Most Overseas Filipinos",
      "Famous Prisons",
      "Famous Bridges",
      "Country Subdivisions Named After People",
      "Famous Brown Brand Logos",
      "Province Capitals of the People's Republic of China",
      "Famous Dark Blue Brand Logos",
      "International Beauty Pageants for Women",
      "Famous Speeches",
      "Countries with the most the Brazilian people outside Brazil",
      "Countries with the Most Blue-Eyed People",
      "Countries with more than 100 million people",
      "Countries and Territories With The Most Billionaires",
      "Famous Streets and Roads",
      "Famous Walls",
      "Famous Hoaxes/Scams",
      "Famous Violet Brand Logos",
      "Countries with the most vegetarians",
      "Cities that keep Van Gogh's famous paintings",
      "Car companies that aren't named after their founders",
      "Bands Named After Cities",
      "Famous Ships and Boats",
      "Famous Buildings and Ruins in Italy",
      "Famous Canals",
      'Ideologies, movements, and trends ending with "ism" and named after people',
      "Universities producing the most Nobel Prize laureates",
      "Famous Newspapers in the US",
      "Famous Newspapers in the UK",
      "Capitol Riots - Far Right Groups Who Took Part in It",
      "Famous newspapers of the world",
      "Notable International NGOs",
      "Famous tripartite mottos",
      "Countries that execute the most people by capital punishment",
      "Famous men’s clothing brands",
      "Top Countries where Women outnumber Men",
      "Top Countries where Men outnumber Women",
      "Commercial Banks in the People's Republic of China",
      "Titles for people who commit crimes",
      "Famous Temples in India",
      "Ações que a maioria das pessoas geralmente faz todos os dias",
    ],
  },
  {
    main: "history",
    sub: "history.former_countries",
    re: /former|puppet|empires?\b|defunct|no longer|kingdoms|dynast|\bussr\b|soviet|historical (states|countries)|states in \d|countries in the \d|sovereign states|country names in|colonies|caliphate|principalit|duchies|confedera/i,
    excludeNames: [
      "Countries that have claimed to be successors of the Roman Empire",
      "Emperors of the Qing Dynasty",
      "Defunct NBA Teams",
      "US Cities - Former names",
      "Cities that no longer exist",
      "Countries that formerly used peso as currency",
      "Capitals of the Ming Dynasty",
      "Hero Cities of the Soviet Union",
      "Current sovereign states that acquired sovereignty before 1800",
      "Umayyad Caliphate - Countries",
      "Leaders who opposed the Roman Empire",
      "Current countries that once were under complete control of the Roman Empire",
      "Former Names of Beijing",
    ],
  },
];
NEW_TAGS.forEach(function (t) {
  db.lists.find({ categories: t.main }, { name: 1, categories: 1 }).forEach(function (l) {
    if (!t.re.test(l.name)) return;
    if (t.exclude && t.exclude.test(l.name)) return;
    if (t.excludeNames && t.excludeNames.indexOf(l.name) >= 0) return;
    if (l.categories.indexOf(t.sub) >= 0) return;
    bump(t.sub);
    if (!DRY) db.lists.updateOne({ _id: l._id }, { $addToSet: { categories: t.sub } });
  });
});

// 2. Snapshots: minigames, rounds, games' current list. Rename only.
[
  ["minigames", "categories"],
  ["tenthingsrounds", "categories"],
  ["tenthings", "list.categories"],
].forEach(function (p) {
  var q = {};
  q[p[1]] = { $in: OLD };
  var proj = {};
  proj[p[1]] = 1;
  db.getCollection(p[0])
    .find(q, proj)
    .forEach(function (d) {
      var cur = p[1] === "categories" ? d.categories : d.list.categories;
      var set = {};
      set[p[1]] = renamed(cur);
      save(p[0], d._id, set, p[0] + "." + p[1]);
    });
});

// 3. Games' disabled categories.
//    - superheroes disabled if Marvel or DC was (respect the opt-out)
//    - African subregions dropped (region.africa keeps whatever state the chat chose)
//    - each new subcategory disabled where its whole main category was disabled
//    - main key added where every subcategory of that main is now disabled
// New subcategories under a main: a chat with the whole main disabled gets the new one disabled too.
var NEW_UNDER_MAIN = {
  television: "television.superheroes",
  movies: "movies.superheroes",
  gaming: "gaming.characters",
  society: "society.people",
  history: "history.former_countries",
};
db.tenthings
  .find(
    {
      $or: [
        { disabledCategories: { $in: OLD } },
        { disabledCategories: { $in: Object.keys(NEW_UNDER_MAIN).concat(["region"]) } },
      ],
    },
    { disabledCategories: 1 },
  )
  .forEach(function (g) {
    var d = g.disabledCategories.slice();
    var hadHero = HERO_OLD.some(function (k) {
      return d.indexOf(k) >= 0;
    });
    var mainsOff = Object.keys(NEW_UNDER_MAIN).filter(function (m) {
      return d.indexOf(m) >= 0;
    });
    d = d.filter(function (k) {
      return OLD.indexOf(k) < 0;
    });
    if (hadHero) d.push("movies.superheroes");
    mainsOff.forEach(function (m) {
      d.push(NEW_UNDER_MAIN[m]);
    });
    Object.keys(SUBS).forEach(function (m) {
      // Add-only: never drop an existing main key, which would re-enable that category's untagged lists.
      if (
        SUBS[m].every(function (s) {
          return d.indexOf(m + "." + s) >= 0;
        })
      )
        d.push(m);
    });
    d = uniq(d);
    var a = g.disabledCategories.slice().sort(),
      b = d.slice().sort();
    if (!same(a, b)) save("tenthings", g._id, { disabledCategories: d }, "games.disabledCategories");
  });

printjson({ DRY: DRY, updated: stats });
if (DRY) {
  print("leftover old keys would be: 0 (dry run)");
} else {
  var left = {};
  [
    ["lists", "categories"],
    ["minigames", "categories"],
    ["tenthingsrounds", "categories"],
    ["tenthings", "disabledCategories"],
    ["tenthings", "list.categories"],
  ].forEach(function (p) {
    var q = {};
    q[p[1]] = { $in: OLD };
    left[p[0] + "." + p[1]] = db.getCollection(p[0]).countDocuments(q);
  });
  printjson({ leftoverOldKeys: left });
}
