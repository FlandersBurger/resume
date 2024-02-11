const oldCategoryHelperDictionary = {
  Music: "music",
  Television: "television",
  Movies: "movies",
  Culture: "culture",
  Geography: "science.geography",
  Politics: "society.politics",
  Celebrities: "culture.celebrities",
  Challenging: "",
  Mathematics: "science.mathematics",
  History: "history",
  Science: "science",
  Gaming: "gaming",
  Sports: "sports",
  Religion: "culture.religion",
  Objects: "misc.things",
  Transportation: "society.transportation",
  Adult: "culture.adult",
  Art: "culture.visual_arts",
  Literature: "literature",
  Misc: "misc",
  Funny: "misc.funny",
  "Food and Drink": "culture.food_drink",
  Society: "society",
  Nature: "nature",
  Technology: "technology",
  Language: "language",
  Business: "society.business",
  Internet: "technology.internet",
  "K-pop": "music.k_pop",
  "K-drama": "television.k_drama",
  Entertainment: "culture.entertainment",
  Animation: "movies.animation",
  "Anime/Manga": "movies.anime",
  "Non-English": "",
  Chemistry: "science.chemistry",
  Biology: "science.biology",
  Medicine: "science.medicine",
  Telenovelas: "television.telenovelas",
};

exports.convertCategory = (oldCategory) => oldCategoryHelperDictionary[oldCategory];

exports.categories = {
  music: [
    "albums",
    "artists",
    "awards",
    "bands",
    "discography",
    "electronic",
    "festivals",
    "instruments",
    "k_pop",
    "lyrics",
    "musicals",
    "rap",
    "rock",
    "songs",
    "soundtracks",
  ],
  television: [
    "animation",
    "anime",
    "cast",
    "characters",
    "details",
    "k_drama",
    "reality",
    "seasons",
    "streaming",
    "telenovelas",
    "titles",
  ],
  movies: [
    "actors",
    "animation",
    "anime",
    "awards",
    "cast",
    "characters",
    "details",
    "filmography",
    "marvel_dc",
    "star_wars",
    "titles",
  ],
  culture: [
    "adult",
    "astrology",
    "celebrations",
    "entertainment",
    "fashion",
    "food_drink",
    "mythology",
    "performing_arts",
    "religion",
    "tradition",
    "visual_arts",
  ],
  region: [
    "africa",
    "antarctica",
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
    "east_africa",
    "egypt",
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
    "north_africa",
    "north_america",
    "oceania",
    "pacific_ocean",
    "russia",
    "scandinavia",
    "spain",
    "southeast_asia",
    "southern_africa",
    "south_africa",
    "south_america",
    "sub_saharan_africa",
    "united_kingdom",
    "united_states",
    "west_africa",
  ],
  history: [
    "ancient_civilizations",
    "artifacts",
    "conflict",
    "epochs",
    "historic_events",
    "historic_figures",
    "historic_places",
    "inventions",
    "monuments",
    "ottoman_empire",
    "prehistory",
    "renaissance",
    "roman_empire",
    "russian_empire",
    "world_wars",
  ],
  science: ["astronomy", "biology", "chemistry", "geography", "mathematics", "medicine", "physics", "social_sciences"],
  gaming: [
    "card_games",
    "consoles",
    "content",
    "fps",
    "gaming_series",
    "indie_gaming",
    "minecraft",
    "mmo",
    "mobile_gaming",
    "open_world",
    "pokemon",
    "retro_gaming",
    "rpg",
    "rts",
    "survival",
    "tabletop_gaming",
    "vr",
  ],
  sports: ["athletes", "bar_sports", "brain_sports", "championships", "olympic_games", "racing", "teams", "venues"],
  literature: [
    "authors",
    "awards",
    "bibliography",
    "book_series",
    "books",
    "characters",
    "classic",
    "comics",
    "graphic_novels",
    "harry_potter",
    "manga",
    "middle_earth",
    "non_fiction",
    "shakespeare",
  ],
  misc: ["colours", "fictional", "funny", "memes", "meta", "names", "telegram", "things"],
  society: [
    "automotive",
    "business",
    "capitals",
    "celebrities",
    "cities",
    "countries",
    "crime",
    "education",
    "human_rights",
    "infrastructure",
    "leaders",
    "politics",
    "social_movements",
    "transportation",
  ],
  language: ["euphemisms", "foreign", "grammar", "idioms", "loanwords", "synonyms", "terms", "words"],
  nature: ["animals", "biomes", "disasters", "plants", "weather"],
  technology: [
    "ai",
    "data_science",
    "hardware",
    "internet",
    "operating_systems",
    "programming",
    "robotics",
    "software",
  ],
};
