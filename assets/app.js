var defaultDiacriticsRemovalMap = [
    {
      base: "A",
      letters:
        /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g,
    },
    {
      base: "AA",
      letters: /[\uA732]/g,
    },
    {
      base: "AE",
      letters: /[\u00C6\u01FC\u01E2]/g,
    },
    {
      base: "AO",
      letters: /[\uA734]/g,
    },
    {
      base: "AU",
      letters: /[\uA736]/g,
    },
    {
      base: "AV",
      letters: /[\uA738\uA73A]/g,
    },
    {
      base: "AY",
      letters: /[\uA73C]/g,
    },
    {
      base: "B",
      letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g,
    },
    {
      base: "C",
      letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g,
    },
    {
      base: "D",
      letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g,
    },
    {
      base: "DZ",
      letters: /[\u01F1\u01C4]/g,
    },
    {
      base: "Dz",
      letters: /[\u01F2\u01C5]/g,
    },
    {
      base: "E",
      letters:
        /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g,
    },
    {
      base: "F",
      letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g,
    },
    {
      base: "G",
      letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g,
    },
    {
      base: "H",
      letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g,
    },
    {
      base: "I",
      letters:
        /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g,
    },
    {
      base: "J",
      letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g,
    },
    {
      base: "K",
      letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g,
    },
    {
      base: "L",
      letters:
        /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g,
    },
    {
      base: "LJ",
      letters: /[\u01C7]/g,
    },
    {
      base: "Lj",
      letters: /[\u01C8]/g,
    },
    {
      base: "M",
      letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g,
    },
    {
      base: "N",
      letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g,
    },
    {
      base: "NJ",
      letters: /[\u01CA]/g,
    },
    {
      base: "Nj",
      letters: /[\u01CB]/g,
    },
    {
      base: "O",
      letters:
        /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g,
    },
    {
      base: "OI",
      letters: /[\u01A2]/g,
    },
    {
      base: "OO",
      letters: /[\uA74E]/g,
    },
    {
      base: "OU",
      letters: /[\u0222]/g,
    },
    {
      base: "P",
      letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g,
    },
    {
      base: "Q",
      letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g,
    },
    {
      base: "R",
      letters:
        /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g,
    },
    {
      base: "S",
      letters:
        /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g,
    },
    {
      base: "T",
      letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g,
    },
    {
      base: "TZ",
      letters: /[\uA728]/g,
    },
    {
      base: "U",
      letters:
        /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g,
    },
    {
      base: "V",
      letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g,
    },
    {
      base: "VY",
      letters: /[\uA760]/g,
    },
    {
      base: "W",
      letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g,
    },
    {
      base: "X",
      letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g,
    },
    {
      base: "Y",
      letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g,
    },
    {
      base: "Z",
      letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g,
    },
    {
      base: "a",
      letters:
        /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g,
    },
    {
      base: "aa",
      letters: /[\uA733]/g,
    },
    {
      base: "ae",
      letters: /[\u00E6\u01FD\u01E3]/g,
    },
    {
      base: "ao",
      letters: /[\uA735]/g,
    },
    {
      base: "au",
      letters: /[\uA737]/g,
    },
    {
      base: "av",
      letters: /[\uA739\uA73B]/g,
    },
    {
      base: "ay",
      letters: /[\uA73D]/g,
    },
    {
      base: "b",
      letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g,
    },
    {
      base: "c",
      letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g,
    },
    {
      base: "d",
      letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g,
    },
    {
      base: "dz",
      letters: /[\u01F3\u01C6]/g,
    },
    {
      base: "e",
      letters:
        /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g,
    },
    {
      base: "f",
      letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g,
    },
    {
      base: "g",
      letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g,
    },
    {
      base: "h",
      letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g,
    },
    {
      base: "hv",
      letters: /[\u0195]/g,
    },
    {
      base: "i",
      letters:
        /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g,
    },
    {
      base: "j",
      letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g,
    },
    {
      base: "k",
      letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g,
    },
    {
      base: "l",
      letters:
        /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g,
    },
    {
      base: "lj",
      letters: /[\u01C9]/g,
    },
    {
      base: "m",
      letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g,
    },
    {
      base: "n",
      letters:
        /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g,
    },
    {
      base: "nj",
      letters: /[\u01CC]/g,
    },
    {
      base: "o",
      letters:
        /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g,
    },
    {
      base: "oi",
      letters: /[\u01A3]/g,
    },
    {
      base: "ou",
      letters: /[\u0223]/g,
    },
    {
      base: "oo",
      letters: /[\uA74F]/g,
    },
    {
      base: "p",
      letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g,
    },
    {
      base: "q",
      letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g,
    },
    {
      base: "r",
      letters:
        /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g,
    },
    {
      base: "s",
      letters:
        /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g,
    },
    {
      base: "t",
      letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g,
    },
    {
      base: "tz",
      letters: /[\uA729]/g,
    },
    {
      base: "u",
      letters:
        /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g,
    },
    {
      base: "v",
      letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g,
    },
    {
      base: "vy",
      letters: /[\uA761]/g,
    },
    {
      base: "w",
      letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g,
    },
    {
      base: "x",
      letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g,
    },
    {
      base: "y",
      letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g,
    },
    {
      base: "z",
      letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g,
    },
  ],
  domains = [
    ".com",
    ".org",
    ".net",
    ".ac",
    ".ad",
    ".ae",
    ".af",
    ".ag",
    ".ai",
    ".al",
    ".am",
    ".ao",
    ".aq",
    ".ar",
    ".as",
    ".at",
    ".au",
    ".aw",
    ".ax",
    ".az",
    ".ba",
    ".bb",
    ".bd",
    ".be",
    ".bf",
    ".bg",
    ".bh",
    ".bi",
    ".bj",
    ".bm",
    ".bn",
    ".bo",
    ".bq",
    ".br",
    ".bs",
    ".bt",
    ".bw",
    ".by",
    ".bz",
    ".ca",
    ".cc",
    ".cd",
    ".cf",
    ".cg",
    ".ch",
    ".ci",
    ".ck",
    ".cl",
    ".cm",
    ".cn",
    ".co",
    ".cr",
    ".cu",
    ".cv",
    ".cw",
    ".cx",
    ".cy",
    ".cz",
    ".de",
    ".dj",
    ".dk",
    ".dm",
    ".do",
    ".dz",
    ".ec",
    ".ee",
    ".eg",
    ".eh",
    ".er",
    ".es",
    ".et",
    ".eu",
    ".fi",
    ".fj",
    ".fk",
    ".fm",
    ".fo",
    ".fr",
    ".ga",
    ".gd",
    ".ge",
    ".gf",
    ".gg",
    ".gh",
    ".gi",
    ".gl",
    ".gm",
    ".gn",
    ".gp",
    ".gq",
    ".gr",
    ".gs",
    ".gt",
    ".gu",
    ".gw",
    ".gy",
    ".hk",
    ".hm",
    ".hn",
    ".hr",
    ".ht",
    ".hu",
    ".id",
    ".ie",
    ".il",
    ".im",
    ".in",
    ".io",
    ".iq",
    ".ir",
    ".is",
    ".it",
    ".je",
    ".jm",
    ".jo",
    ".jp",
    ".ke",
    ".kg",
    ".kh",
    ".ki",
    ".km",
    ".kn",
    ".kp",
    ".kr",
    ".kw",
    ".ky",
    ".kz",
    ".la",
    ".lb",
    ".lc",
    ".li",
    ".lk",
    ".lr",
    ".ls",
    ".lt",
    ".lu",
    ".lv",
    ".ly",
    ".ma",
    ".mc",
    ".md",
    ".me",
    ".mg",
    ".mh",
    ".mk",
    ".ml",
    ".mm",
    ".mn",
    ".mo",
    ".mp",
    ".mq",
    ".mr",
    ".ms",
    ".mt",
    ".mu",
    ".mv",
    ".mw",
    ".mx",
    ".my",
    ".mz",
    ".na",
    ".nc",
    ".ne",
    ".nf",
    ".ng",
    ".ni",
    ".nl",
    ".no",
    ".np",
    ".nr",
    ".nu",
    ".nz",
    ".om",
    ".pa",
    ".pe",
    ".pf",
    ".pg",
    ".ph",
    ".pk",
    ".pl",
    ".pm",
    ".pn",
    ".pr",
    ".ps",
    ".pt",
    ".pw",
    ".py",
    ".qa",
    ".re",
    ".ro",
    ".rs",
    ".ru",
    ".rw",
    ".sa",
    ".sb",
    ".sc",
    ".sd",
    ".se",
    ".sg",
    ".sh",
    ".si",
    ".sk",
    ".sl",
    ".sm",
    ".sn",
    ".so",
    ".sr",
    ".ss",
    ".st",
    ".su",
    ".sv",
    ".sx",
    ".sy",
    ".sz",
    ".tc",
    ".td",
    ".tf",
    ".tg",
    ".th",
    ".tj",
    ".tk",
    ".tl",
    ".tm",
    ".tn",
    ".to",
    ".tr",
    ".tt",
    ".tv",
    ".tw",
    ".tz",
    ".ua",
    ".ug",
    ".uk",
    ".us",
    ".uy",
    ".uz",
    ".va",
    ".vc",
    ".ve",
    ".vg",
    ".vi",
    ".vn",
    ".vu",
    ".wf",
    ".ws",
    ".ye",
    ".yt",
    ".za",
    ".zm",
    ".zw",
  ];
Object.defineProperty(String.prototype, "removeDiacritics", {
  value: function () {
    return defaultDiacriticsRemovalMap.reduce((result, letter) => result.replace(letter.letters, letter.base), this);
  },
});
const SPECIAL_CHARACTERS = "\\\\/ !?@#$%^&*()_+:.{},;\\-'``’‘\"";
Object.defineProperty(String.prototype, "removeSpecialCharacters", {
  value: function () {
    return this.replace(new RegExp(`[${SPECIAL_CHARACTERS}]`, "gi"), "");
  },
}),
  Object.defineProperty(String.prototype, "removeAllButLetters", {
    value: function () {
      return this.toLowerCase().removeDiacritics().removeSpecialCharacters();
    },
  }),
  Object.defineProperty(String.prototype, "conceal", {
    value: function (extra) {
      return this.replace(new RegExp(`[^${SPECIAL_CHARACTERS}${extra}]`, "gi"), "⁎");
    },
  }),
  Object.defineProperty(String.prototype, "capitalize", {
    value: function () {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
  }),
  Object.defineProperty(String.prototype, "removeHTML", {
    value: function () {
      return this.replace(">", "≻").replace("<", "≺");
    },
  }),
  Object.defineProperty(String.prototype, "angleBrackets", {
    value: function () {
      return this.replace("<", "&lt;").replace(">", "&gt;");
    },
  }),
  Object.defineProperty(String.prototype, "replaceArray", {
    value: function (find, replace) {
      for (var replaceString = this, i = 0; i < find.length; i++)
        replaceString = replaceString.replace(find[i], replace[i]);
      return replaceString;
    },
  }),
  Object.defineProperty(String.prototype, "maskURLs", {
    value: function () {
      return this.replaceArray(["https://", "http://"], "nope://").replaceArray(domains, ".nope");
    },
  }),
  Object.defineProperty(Number.prototype, "makeReadable", {
    value: function () {
      return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  }),
  Object.defineProperty(Number.prototype, "makePercentage", {
    value: function (decimals) {
      return decimals || (decimals = 2), `${(100 * this).toFixed(decimals)}%`;
    },
  });
const sortObject = (obj, direction) => {
  let arr = [];
  for (const key in obj) arr.push([key, obj[key]]);
  arr.sort((a, b) => (direction ? a[1] - b[1] : b[1] - a[1]));
  let objSorted = {};
  return arr.forEach((item) => (objSorted[item[0]] = item[1])), objSorted;
};
angular.module("app", [
  "ui.router",
  "ui.bootstrap",
  "ngAnimate",
  "ngSanitize",
  "ngDragDrop",
  "ngTagsInput",
  "vcRecaptcha",
  "chart.js",
  "tc.chartjs",
]),
  angular.module("app").config([
    "$stateProvider",
    "$urlRouterProvider",
    "$urlServiceProvider",
    "$locationProvider",
    function ($stateProvider, $urlRouterProvider, $urlServiceProvider, $locationProvider) {
      $urlRouterProvider.otherwise("/home"),
        $urlServiceProvider.config.strictMode(!1),
        $stateProvider
          .state("home", {
            url: "/home",
            templateUrl: "/home.html",
          })
          .state("policy", {
            url: "/policy",
            templateUrl: "/policy.html",
          })
          .state("print", {
            url: "/print",
            templateUrl: "/print.html",
          })
          .state("experience", {
            url: "/experience",
            controller: "ExperienceCtrl",
            templateUrl: "/experience.html",
          })
          .state("skills", {
            url: "/skills",
            controller: "SkillsCtrl",
            templateUrl: "/skills.html",
          })
          .state("hobbies", {
            url: "/hobbies",
            controller: "HobbiesCtrl",
            templateUrl: "/hobbies.html",
          })
          .state("contact", {
            url: "/contact",
            controller: "ContactCtrl",
            templateUrl: "/contact.html",
          })
          .state("workout", {
            url: "/workout",
            controller: "WorkoutCtrl",
            templateUrl: "/workout.html",
          })
          .state("posts", {
            url: "/posts",
            controller: "PostsCtrl",
            templateUrl: "/posts.html",
          })
          .state("profile", {
            url: "/profile",
            controller: "ProfileCtrl",
            templateUrl: "/profile.html",
          })
          .state("lists", {
            url: "/lists",
            controller: "ListsCtrl",
            templateUrl: "lists.html",
          })
          .state("prioritize", {
            url: "/prioritize",
            controller: "PrioritizeCtrl",
            templateUrl: "prioritize.html",
          })
          .state("bubbles", {
            url: "/bubbles",
            controller: "BubblesCtrl",
            templateUrl: "bubbles.html",
          })
          .state("asteroids", {
            url: "/asteroids",
            controller: "AsteroidsCtrl",
            templateUrl: "asteroids.html",
          })
          .state("lemmings", {
            url: "/lemmings",
            controller: "LemmingsCtrl",
            templateUrl: "lemmings.html",
          })
          .state("bots", {
            url: "/bots",
            controller: "TenThingsCtrl",
            templateUrl: "tenthings.html",
          })
          .state("tenthings", {
            url: "/tenthings",
            controller: "TenThingsCtrl",
            templateUrl: "tenthings.html",
          })
          .state("tenthings-admin", {
            url: "/tenthings-admin",
            controller: "TenThingsAdminCtrl",
            templateUrl: "tenthings-admin.html",
          })
          .state("tenthings-curate", {
            url: "/tenthings-curate",
            controller: "TenThingsCurateCtrl",
            templateUrl: "tenthings-curate.html",
          })
          .state("tenthings-game", {
            url: "/tenthings/:game",
            controller: "TenThingsGameCtrl",
            templateUrl: "tenthings-game.html",
          })
          .state("quiz-google", {
            url: "/google",
            controller: "QuizGoogleCtrl",
            templateUrl: "quizzes/google.html",
          })
          .state("quiz-logos", {
            url: "/logos",
            controller: "QuizLogosCtrl",
            templateUrl: "quizzes/logos.html",
          })
          .state("quiz-animals", {
            url: "/animals",
            controller: "QuizAnimalsCtrl",
            templateUrl: "quizzes/animals.html",
          })
          .state("quiz-skeletons", {
            url: "/skeletons",
            controller: "QuizSkeletonsCtrl",
            templateUrl: "quizzes/skeletons.html",
          })
          .state("quiz-movies", {
            url: "/movies",
            controller: "QuizMoviesCtrl",
            templateUrl: "quizzes/movies.html",
          })
          .state("charades", {
            url: "/charades",
            controller: "CharadesCtrl",
            templateUrl: "/charades.html",
          }),
        $locationProvider.html5Mode({
          enabled: !0,
          requireBase: !1,
        });
    },
  ]),
  angular
    .module("app")
    .service("WebSocketSvc", [
      "$rootScope",
      "$timeout",
      function ($rootScope, $timeout) {
        var connection,
          connect = function () {
            ((connection = new WebSocket(
              "https:" === window.location.protocol ? "wss://" + window.location.host : "ws://" + window.location.host
            )).onopen = function () {
              console.log("Websocket connected");
            }),
              (connection.onclose = function (e) {
                console.log("Websocket closed. Reconnecting..."), $timeout(connect, 1e3);
              }),
              (connection.onerror = function (e) {
                console.log("Error: " + e + " - State: " + connection.readyState);
              }),
              (connection.onmessage = function (e) {
                var payload = JSON.parse(e.data);
                $rootScope.$broadcast("ws:" + payload.topic, payload.data);
              });
          };
        (this.send = function (topic, data) {
          var json = JSON.stringify({
            topic,
            data,
          });
          connection.send(json);
        }),
          (this.connect = connect);
      },
    ])
    .run([
      "WebSocketSvc",
      function (WebSocketSvc) {
        WebSocketSvc.connect();
      },
    ]),
  angular.module("app").controller("AppCtrl", [
    "$scope",
    "$location",
    "LanguageSvc",
    "UserSvc",
    function ($scope, $location, LanguageSvc, UserSvc) {
      function login(user) {
        $scope.loggedIn ||
          ((window.localStorage.user = user._id),
          ($scope.loggedIn = !0),
          ($scope.currentUser = user),
          $scope.$broadcast("login"));
      }
      console.log(
        "%cYou sneaky bugger!",
        "font: 2em sans-serif; color: DodgerBlue; text-shadow: 2px 0 0 #444, -2px 0 0 #444, 0 2px 0 #444, 0 -2px 0 #444, 1px 1px #444, -1px -1px 0 #444, 1px -1px 0 #444, -1px 1px 0 #444;"
      ),
        console.log(
          "I'm glad you're curious whether something is popping up in here. I'm a bit of a stickler when it comes to messages in the console so I try to make sure only things I want are visible. That being said, if there is a big error here, I would really appreciate you telling me so I can get rid of it!"
        ),
        console.log(
          "The code for my resume is hosted on Github if you really want to go into all this! => https://github.com/FlandersBurger/resume"
        ),
        $(window).load(function () {
          $(".loading").fadeOut("slow"), $(".content").fadeIn("slow");
        }),
        ($scope.themeCounter = 6),
        ($scope.today = new Date()),
        ($scope.year = $scope.today.getFullYear()),
        ($scope.random = Math.floor(1e6 * Math.random())),
        ($scope.flipTheme = function () {
          $(".loading").show(),
            $(".content").hide(),
            setTimeout(function () {
              $(".loading").fadeOut("slow"), $(".content").fadeIn("slow");
            }, 800),
            ($scope.themeCounter = $scope.themeCounter < 6 ? $scope.themeCounter + 1 : ($scope.themeCounter = 1));
        }),
        $.getJSON("/skills.json", function (data) {
          $scope.skills = data.filter(function (skill) {
            return skill.enabled;
          });
        }),
        $.getJSON("/hobbies.json", function (data) {
          $scope.hobbies = data;
        }),
        $.getJSON("/experience.json", function (data) {
          ($scope.jobs = data),
            $scope.jobs.forEach(function (job) {
              (job.startDate = new Date(job.startDate)), job.endDate && (job.endDate = new Date(job.endDate));
            });
        }),
        $.getJSON("/charades.json", function (data) {
          $scope.charades = data;
        }),
        ($scope.getTimeSpan = function (job) {
          return job.startDate.getFullYear() + (job.endDate ? " - " + job.endDate.getFullYear() : " - Today");
        }),
        ($scope.languages = LanguageSvc.languages),
        ($scope.selectedLanguage = LanguageSvc.getLanguage()),
        ($scope.selectLanguage = function (language) {
          $scope.selectedLanguage = LanguageSvc.setLanguage(language);
        }),
        ($scope.hoverdiv = function (e, divid) {
          var left = e.clientX + "px",
            top = e.clientY + 20 + "px";
          document.getElementById(divid);
          return $("#" + divid).css("left", left), $("#" + divid).css("top", top), $("#" + divid).toggle(), !1;
        }),
        ($scope.socialMedia = [
          {
            name: "instagram",
            url: "https://www.instagram.com/flandersburger/",
            icon: "fa-instagram",
          },
          {
            name: "linkedin",
            url: "https://www.linkedin.com/in/laurent-debacker-1633a916",
            icon: "fa-linkedin",
          },
          {
            name: "github",
            url: "https://github.com/FlandersBurger",
            icon: "fa-github",
          },
          {
            name: "jsfiddle",
            url: "https://jsfiddle.net/user/BelgoCanadian/fiddles/",
            icon: "fa-jsfiddle",
          },
          {
            name: "stackoverflow",
            url: "http://stackoverflow.com/users/1083923/belgocanadian",
            icon: "fa-stack-overflow",
          },
          {
            name: "goodreads",
            url: "https://www.goodreads.com/user/show/17070010-laurent",
            icon: "fa-goodreads",
          },
        ]),
        window.localStorage.user &&
          UserSvc.login(window.localStorage.user).then(function (response) {
            login(response.data);
          }),
        $scope.$on("login", function (_, user) {
          login(user);
        }),
        $scope.$on("update", function (_, user) {
          ($scope.currentUser = user),
            ($scope.currentUser.birthDate = new Date($scope.currentUser.birthDate)),
            ($scope.loading = !1),
            setTimeout(function () {
              $("#loading-icon").fadeOut("slow");
            }, 1e3);
        }),
        $scope.$on("loading", function (_, user) {
          ($scope.loading = !0), $("#loading-icon").show();
        }),
        $scope.$on("loaded", function (_, user) {
          ($scope.loading = !1),
            setTimeout(function () {
              $("#loading-icon").fadeOut("slow");
            }, 1e3);
        }),
        ($scope.logout = function () {
          firebase
            .auth()
            .signOut()
            .then(function () {
              ($scope.loggedIn = !1), window.localStorage.clear(), $scope.$broadcast("logout");
            })
            .catch(function (error) {});
        }),
        ($scope.formatDate = function (date) {
          return (
            (date = new Date(date)).getDate() +
            "-" +
            ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()] +
            "-" +
            date.getFullYear()
          );
        }),
        (String.prototype.capitalize = function () {
          return this.charAt(0).toUpperCase() + this.slice(1);
        });
    },
  ]),
  angular.module("app").controller("AsteroidsCtrl", [
    "$scope",
    "GameSvc",
    function ($scope, GameSvc) {
      $scope.announce = !1;
      var canvas = document.getElementById("asteroids-page"),
        ctx = canvas.getContext("2d");
      (ctx.font = "30px Comic Sans MS"), (ctx.fillStyle = "red"), (ctx.textAlign = "center");
      var shots = {},
        asteroids = {},
        powerups = {},
        explosions = {},
        map = {},
        spacepics = 10,
        space = Math.floor(Math.random() * spacepics),
        powerupTypes = [
          {
            name: "speed",
            announcement: "Max Speed ⇧",
            cycle: {
              rows: 1,
              columns: 4,
              size: [14, 35],
              i: 0,
              direction: !0,
            },
            img: new Image(),
            activate: function (spaceship) {
              spaceship.maxSpeed += 100;
            },
          },
          {
            name: "cooldown",
            announcement: "Cooldown ⇩",
            cycle: {
              rows: 1,
              columns: 3,
              size: [17, 17],
              i: 0,
              direction: !0,
            },
            img: new Image(),
            activate: function (spaceship) {
              spaceship.cooldown > 0 && (spaceship.cooldownTime -= 1);
            },
          },
          {
            name: "range",
            announcement: "Firing Range ⇧",
            cycle: {
              rows: 4,
              columns: 1,
              size: [30, 8],
              i: 0,
              direction: !0,
            },
            img: new Image(),
            activate: function (spaceship) {
              spaceship.range += 5;
            },
          },
          {
            name: "shield",
            announcement: "Shield",
            cycle: {
              rows: 5,
              columns: 1,
              size: [19, 19],
              i: 0,
              direction: !0,
            },
            img: new Image(),
            activate: function (spaceship) {
              spaceship.shield = !0;
            },
          },
          {
            name: "nuke",
            announcement: "Nuke",
            cycle: {
              rows: 1,
              columns: 8,
              size: [15, 15],
              i: 0,
              direction: !0,
            },
            img: new Image(),
            activate: function (spaceship) {
              for (var i in asteroids) asteroids[i].explode();
              spawnAsteroids(5);
            },
          },
        ];
      powerupTypes.forEach(function (powerup, i, array) {
        array[i].img.src = "asteroids/" + powerup.name + ".png";
      });
      var spaceship,
        explosionImage = new Image();
      function evaluateKeys() {
        $scope.playing
          ? (map[32] && 0 === spaceship.cooldown && spaceship.shoot(),
            map[37] && (0 === spaceship.rotation ? (spaceship.rotation = 360) : (spaceship.rotation -= 3)),
            map[39] && (360 === spaceship.rotation ? (spaceship.rotation = 0) : (spaceship.rotation += 3)),
            map[38]
              ? spaceship.speed <= spaceship.maxSpeed && (spaceship.speed += 5)
              : spaceship.speed > 0 && spaceship.speed--,
            map[40] && spaceship.speed > 0 && (spaceship.speed -= 2))
          : map[32] &&
            (($scope.playing = !0),
            ($scope.score = 0),
            (space = Math.floor(Math.random() * spacepics)),
            $scope.$apply(),
            (spaceship = new Spaceship()),
            ($scope.score = 0),
            spawnAsteroids(5),
            autoSpawn());
      }
      function Spaceship() {
        (this.width = 50),
          (this.height = 50),
          (this.shield = !1),
          (this.range = 80),
          (this.cannon = {
            x: this.width / 2 - 4.5,
            y: this.height / 2 - 0.078125 * this.height,
          }),
          (this.cooldown = 0),
          (this.cooldownTime = 20),
          (this.position = [canvas.width / 2 - this.width / 2, canvas.height / 2 - this.height / 2]),
          (this.img = new Image()),
          (this.img.src = "asteroids/spaceship.png"),
          (this.speed = 0),
          (this.maxSpeed = 1e3),
          (this.angle = 0),
          (this.rotation = 0),
          (this.shoot = function () {
            this.cooldown = this.cooldownTime;
            var id = Math.round(1e8 * Math.random());
            shots[id] = new Shot(id, this);
          }),
          (this.move = function () {
            for (var i in (this.shield &&
              (ctx.beginPath(),
              ctx.arc(this.position[0] + this.width / 2, this.position[1] + this.height / 2, 30, 0, 2 * Math.PI),
              (ctx.fillStyle = "rgb(35, 237, 86, 0.5)"),
              (ctx.strokeStyle = "rgb(66, 168, 36, 0.8)"),
              (ctx.lineWidth = 5),
              ctx.stroke(),
              ctx.fill()),
            asteroids)) {
              var asteroid = asteroids[i];
              if (hit(asteroid, this)) {
                if (!this.shield) return gameOver();
                (this.shield = !1), asteroid.explode();
              }
            }
            (this.angle = this.rotation), this.cooldown > 0 && this.cooldown--, move(this);
          });
      }
      function Shot(id, spaceship) {
        (this.id = id),
          (this.position = [
            spaceship.position[0] +
              spaceship.cannon.x +
              spaceship.cannon.x * Math.cos(((spaceship.rotation - 90) * Math.PI) / 180),
            spaceship.position[1] +
              spaceship.cannon.y +
              spaceship.cannon.y * Math.sin(((spaceship.rotation - 90) * Math.PI) / 180),
          ]),
          (this.width = 9),
          (this.height = 15),
          (this.angle = spaceship.angle),
          (this.rotation = spaceship.rotation),
          (this.speed = spaceship.speed + 500),
          (this.lifespan = spaceship.range),
          (this.img = new Image()),
          (this.img.src = "asteroids/shot.png"),
          (this.move = function () {
            this.lifespan--, move(this);
          });
      }
      function Asteroid(id) {
        (this.id = id),
          (this.width = 50 * Math.random() + 20),
          (this.height = this.width),
          (this.position = getEntryPosition(this.width, this.height)),
          (this.angle = 360 * Math.random()),
          (this.rotation = 360 * Math.random()),
          (this.rotationSpeed = 6 * Math.random() - 3),
          (this.speed = 300 * Math.random() + 2),
          (this.img = new Image()),
          (this.img.src = "asteroids/asteroid" + (Math.round(6 * Math.random()) + 1) + ".png"),
          (this.explode = function () {
            return (explosions[this.id] = new Explosion(this)), delete asteroids[this.id];
          }),
          (this.move = function () {
            for (var i in ((this.rotation += this.rotationSpeed),
            this.rotation > 360
              ? (this.rotation = this.rotation - 360)
              : this.rotation < 0 && (this.rotation = 360 + this.rotation),
            shots)) {
              var shot = shots[i];
              if (hit(shot, this)) {
                this.explode();
                var points = Math.floor((shot.speed - 500) / 10 + 70 - this.width);
                Math.floor((points + $scope.score) / 100) > Math.floor($scope.score / 100) && spawnPowerup(),
                  ($scope.score += points),
                  $scope.$apply(),
                  delete shots[i];
              }
            }
            move(this);
          });
      }
      function Explosion(object) {
        (this.position = [object.position[0], object.position[1]]),
          (this.width = object.width),
          (this.height = object.height),
          (this.speed = 0),
          (this.angle = 360 * Math.random()),
          (this.cycle = {
            rows: 6,
            columns: 8,
            size: [256, 256],
            i: 0,
            direction: !0,
          }),
          (this.lifespan = 47),
          (this.img = explosionImage),
          (this.move = function () {
            this.lifespan--, move(this), this.cycle.direction ? this.cycle.i++ : this.cycle.i--;
          });
      }
      function Powerup(id) {
        (this.id = id),
          (this.powerup = powerupTypes[Math.floor(Math.random() * powerupTypes.length)]),
          (this.cycle = this.powerup.cycle),
          (this.lifespan = 1e3),
          this.cycle.size[1] > this.cycle.size[0]
            ? ((this.height = 40), (this.width = Math.round((this.height / this.cycle.size[1]) * this.cycle.size[0])))
            : ((this.width = 40), (this.height = Math.round((this.width / this.cycle.size[0]) * this.cycle.size[1]))),
          (this.position = getEntryPosition(this.width, this.height)),
          (this.img = this.powerup.img),
          (this.angle = 360 * Math.random()),
          (this.speed = 150 * Math.random() + 50);
        var delay = 5;
        this.move = function () {
          return this.lifespan <= 0
            ? delete powerups[this.id]
            : hit(spaceship, this)
            ? (($scope.announce = !0),
              ($scope.announcement = this.powerup.announcement),
              $scope.$apply(),
              setTimeout(function () {
                ($scope.announce = !1), $scope.$apply();
              }, 1e3),
              this.powerup.activate(spaceship),
              delete powerups[this.id])
            : (this.lifespan--,
              move(this),
              void (delay <= 0 ? (this.cycle.direction ? this.cycle.i++ : this.cycle.i--, (delay = 5)) : delay--));
        };
      }
      function move(object) {
        if (
          ((object.position[0] += (object.speed / 100) * Math.cos(((object.angle - 90) * Math.PI) / 180)),
          (object.position[1] += (object.speed / 100) * Math.sin(((object.angle - 90) * Math.PI) / 180)),
          object.position[0] > canvas.width
            ? (object.position[0] = -object.width)
            : object.position[0] < -object.width && (object.position[0] = canvas.width),
          object.position[1] > canvas.height
            ? (object.position[1] = -object.height)
            : object.position[1] < -object.height && (object.position[1] = canvas.height),
          ctx.save(),
          ctx.translate(object.position[0], object.position[1]),
          ctx.translate(object.width / 2, object.height / 2),
          ctx.rotate((object.rotation * Math.PI) / 180),
          object.cycle)
        ) {
          var column = object.cycle.i % object.cycle.columns,
            row = Math.floor(object.cycle.i / object.cycle.columns);
          ctx.drawImage(
            object.img,
            object.cycle.size[0] * column,
            object.cycle.size[1] * row,
            object.cycle.size[0],
            object.cycle.size[1],
            -object.width / 2,
            -object.height / 2,
            object.width,
            object.height
          ),
            object.cycle.i <= 0
              ? ((object.cycle.i = 0), (object.cycle.direction = !0))
              : object.cycle.i >= object.cycle.columns * object.cycle.rows &&
                ((object.cycle.i = object.cycle.columns * object.cycle.rows - 1), (object.cycle.direction = !1));
        } else ctx.drawImage(object.img, -object.width / 2, -object.height / 2, object.width, object.height);
        ctx.restore();
      }
      function getEntryPosition(width, height) {
        var x,
          gridX = 2 * Math.random(),
          gridY = 2 * Math.random(),
          y = 0;
        return (
          gridX >= 1
            ? ((x = Math.random() * canvas.width), (y = y >= 1 ? 0 - height : canvas.height))
            : ((y = Math.random() * canvas.height), (x = gridY >= 1 ? 0 - width : canvas.width)),
          [x, y]
        );
      }
      function hit(object1, object2) {
        return (
          object1.position[0] < object2.position[0] + object2.width &&
          object2.position[0] < object1.position[0] + object1.width &&
          object1.position[1] < object2.position[1] + object2.height &&
          object2.position[1] < object1.position[1] + object1.height
        );
      }
      function autoSpawn() {
        if (Object.keys(asteroids).length < 200) {
          var id = Math.round(1e8 * Math.random());
          asteroids[id] = new Asteroid(id);
        }
        $scope.playing &&
          setTimeout(
            function () {
              autoSpawn();
            },
            $scope.score < 1e3
              ? 1e3
              : $scope.score < 2e3
              ? 900
              : $scope.score < 3e3
              ? 800
              : $scope.score < 4e3
              ? 700
              : $scope.score < 5e3
              ? 600
              : $scope.score < 6e3
              ? 500
              : $scope.score < 7e3
              ? 400
              : $scope.score < 8e3
              ? 300
              : 200
          );
      }
      function spawnAsteroids(amount) {
        var i = 0;
        do {
          var id = Math.round(1e8 * Math.random());
          asteroids[id] = new Asteroid(id);
        } while (i++ <= amount);
      }
      function spawnPowerup() {
        if (Object.keys(powerups).length < 3) {
          var id = Math.round(1e8 * Math.random());
          powerups[id] = new Powerup(id);
        }
      }
      function gameOver() {
        for (var i in (($scope.playing = !1), asteroids)) asteroids[i].explode();
        (shots = {}),
          $scope.loggedIn
            ? $scope.currentUser.highscore.asteroids < $scope.score &&
              (($scope.currentUser.highscore.asteroids = $scope.score),
              GameSvc.setHighscore("asteroids", $scope.currentUser._id, $scope.score))
            : $scope.highscore < $scope.score && ($scope.highscore = $scope.score);
      }
      function resizeCanvas() {
        console.log(window.innerWidth),
          (canvas.width = window.innerWidth),
          (canvas.height = window.innerHeight - (canvas.width <= 768 ? 50 : 105));
      }
      (explosionImage.src = "asteroids/explosion.png"),
        window.addEventListener(
          "keydown",
          function (e) {
            map[e.keyCode || e.which] = !0;
          },
          !0
        ),
        window.addEventListener(
          "keyup",
          function (e) {
            map[e.keyCode || e.which] = !1;
          },
          !0
        ),
        ($scope.highscore = 0),
        window.addEventListener("resize", resizeCanvas, !1),
        resizeCanvas(),
        requestAnimationFrame(function draw() {
          for (var i in (ctx.clearRect(0, 0, canvas.width, canvas.height), shots))
            shots[i].lifespan <= 0 ? delete shots[i] : shots[i].move();
          for (i in asteroids) asteroids[i].move();
          for (i in powerups) powerups[i].move();
          for (i in explosions) explosions[i].lifespan <= 0 ? delete explosions[i] : explosions[i].move();
          if ((evaluateKeys(), $scope.playing)) spaceship.move();
          else {
            var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop(
              "0",
              "rgb(" +
                Math.floor(256 - (256 * tally) / 100) +
                "," +
                Math.floor(0 + (256 * tally) / 100) +
                "," +
                Math.floor(0 + (256 * tally) / 100) +
                ")"
            ),
              gradient.addColorStop(
                "0.25",
                "rgb(" +
                  Math.floor(0 + (256 * tally) / 100) +
                  "," +
                  Math.floor(256 - (256 * tally) / 100) +
                  "," +
                  Math.floor(0 + (256 * tally) / 100) +
                  ")"
              ),
              gradient.addColorStop(
                "0.5",
                "rgb(" +
                  Math.floor(0 + (256 * tally) / 100) +
                  "," +
                  Math.floor(0 + (256 * tally) / 100) +
                  "," +
                  Math.floor(256 - (256 * tally) / 100) +
                  ")"
              ),
              gradient.addColorStop(
                "0.75",
                "rgb(" +
                  Math.floor(0 + (256 * tally) / 100) +
                  "," +
                  Math.floor(256 - (256 * tally) / 100) +
                  "," +
                  Math.floor(0 + (256 * tally) / 100) +
                  ")"
              ),
              gradient.addColorStop(
                "1.0",
                "rgb(" +
                  Math.floor(256 - (256 * tally) / 100) +
                  "," +
                  Math.floor(0 + (256 * tally) / 100) +
                  "," +
                  Math.floor(0 + (256 * tally) / 100) +
                  ")"
              ),
              (ctx.fillStyle = gradient),
              (ctx.font = "60px Monoton"),
              ctx.fillText("Asteroids", canvas.width / 2 - ctx.measureText("Asteroids").width / 2, canvas.height / 2),
              (ctx.font = "20px Aldrich"),
              ctx.fillText(
                "Press space to start",
                canvas.width / 2 - ctx.measureText("Press space to start").width / 2,
                canvas.height / 2 + 20
              ),
              ctx.fillText(
                "Designed and developed by Laurent Debacker",
                canvas.width / 2 - ctx.measureText("Designed and developed by Laurent Debacker").width / 2,
                canvas.height - 30
              );
          }
          (tally += direction ? 1 : -1) > 100
            ? ((tally = 100), (direction = !1))
            : tally < 0 && ((tally = 0), (direction = !0));
          requestAnimationFrame(draw);
        });
      var tally = 0,
        direction = !0;
      $scope.space = function () {
        return {
          backgroundImage: 'url("asteroids/space' + space + '.jpg")',
        };
      };
    },
  ]),
  angular.module("app").controller("BubblesCtrl", [
    "$scope",
    function ($scope) {
      var canvas = document.getElementById("bubbles-page"),
        ctx = canvas.getContext("2d"),
        bubbles = [],
        colors = ["#ffc300", "#ff5733", "#c70039", "#900c3e", "#571845"];
      function Bubble() {
        (this.lifespan = 0),
          (this.radius = 1),
          (this.expanding = !0),
          (this.speed = Math.round(3 * Math.random())),
          (this.circumference = Math.round(50 * Math.random()) + 5),
          (this.maxRadius = Math.round(200 * Math.random()) + 20),
          (this.x = Math.round(Math.random() * canvas.width)),
          (this.y = Math.round(Math.random() * canvas.height)),
          (this.vx = Math.random() >= 0.5 ? 1 : -1),
          (this.vy = Math.random() >= 0.5 ? 1 : -1);
      }
      requestAnimationFrame(function filterBubbles() {
        bubbles.push(new Bubble()),
          (bubbles = bubbles.filter(function (bubble) {
            return (
              bubble.radius === bubble.maxRadius && (bubble.expanding = !1),
              (bubble.x += bubble.vx * bubble.speed),
              (bubble.y += bubble.vy * bubble.speed),
              (bubble.radius += bubble.expanding ? 1 : -1),
              bubble.radius > 0
            );
          })),
          ctx.clearRect(0, 0, canvas.width, canvas.height),
          bubbles.forEach(function (bubble) {
            colors[Math.round((colors.length * bubble.radius) / bubble.maxRadius)],
              ctx.beginPath(),
              ctx.arc(bubble.x, bubble.y, bubble.radius, 0, 2 * Math.PI),
              (ctx.fillStyle = colors[Math.round((colors.length * bubble.radius) / bubble.maxRadius)]),
              ctx.fill(),
              (ctx.strokeStyle =
                colors[colors.length - Math.round((colors.length * bubble.radius) / bubble.maxRadius)]),
              (ctx.lineWidth = (bubble.circumference * bubble.radius) / bubble.maxRadius),
              ctx.stroke();
          }),
          requestAnimationFrame(filterBubbles);
      }),
        (function () {
          function resizeCanvas() {
            (canvas.width = window.innerWidth), (canvas.height = window.innerHeight - (canvas.width <= 768 ? 55 : 111));
          }
          window.addEventListener("resize", resizeCanvas, !1), resizeCanvas();
        })();
    },
  ]),
  angular.module("app").controller("CharadesCtrl", [
    "$scope",
    function ($scope) {
      $scope.selectWord = (category) => {
        ($scope.word = $scope.charades[category][Math.floor(Math.random() * $scope.charades[category].length)]),
          console.log($scope.word);
      };
    },
  ]),
  angular.module("app").controller("ContactCtrl", [
    "$scope",
    "EmailSvc",
    function ($scope, EmailSvc) {
      ($scope.options = [
        {
          name: "Spam",
          text: "I am a spam bot and automatically check the first option I find!",
        },
        {
          name: "Opportunity",
          text: "You seem to have the skills I seek, I'd like to talk about some opportunities.",
        },
        {
          name: "Resume",
          text: "I dig the resume, how did you make it?",
        },
        {
          name: "Other",
          text: "Sumtin else!",
        },
      ]),
        ($scope.contact = {
          email: "",
          name: "",
          phone: "",
          about: "",
          message: "",
        }),
        ($scope.send = function () {
          ($scope.sending = !0),
            console.log("here"),
            EmailSvc.send({
              email: $scope.contact.email,
              name: $scope.contact.name,
              phone: $scope.contact.phone,
              about: $scope.contact.about,
              message: $scope.contact.message,
            }).then(
              function (response) {
                ($scope.sent = !0),
                  console.log("SUCCESS. status=%d, text=%s", response.status, response.text),
                  console.log(response);
              },
              function (err) {
                ($scope.sending = !1), console.log("FAILED. error=", err);
              }
            );
        });
    },
  ]),
  angular.module("app").controller("ExperienceCtrl", [
    "$scope",
    function ($scope) {
      $scope.getSkill = function (skillCode) {
        if ($scope.skills)
          return $scope.skills.find(function (skill) {
            return skill.code === skillCode;
          });
      };
    },
  ]),
  angular.module("app").controller("HobbiesCtrl", [
    "$scope",
    "$window",
    function ($scope, $window) {
      ($scope.hobbySelectorVisible = !1),
        $.getJSON("https://www.reddit.com/user/belgocanadian/about/.json", function (response) {}),
        ($scope.selectedHobby = $scope.hobbies[0]),
        ($scope.selectHobby = function (hobby) {
          ($scope.selectedHobby = hobby), ($scope.hobbySelectorVisible = !1);
        }),
        ($scope.showHobby = function (value, index, array) {
          return !!value.images && value.images.length > 0;
        });
    },
  ]),
  angular.module("app").controller("LemmingsCtrl", [
    "$scope",
    "GameSvc",
    function ($scope, GameSvc) {
      var LEFT = 0,
        RIGHT = 1,
        canvas = document.getElementById("lemmings-page"),
        ctx = canvas.getContext("2d"),
        lemmingsImage = new Image();
      lemmingsImage.src = "lemmings/lemmings.png";
      var decorImage = new Image();
      decorImage.src = "lemmings/decor.png";
      var lemmings = {},
        started = !1,
        actions = {
          walk: {
            start: [0, 0],
            end: [320, 20],
            columns: 8,
            rows: 1,
            reverse: !1,
          },
          huh: {
            start: [320, 0],
            end: [640, 20],
            columns: 8,
            rows: 1,
            reverse: !0,
          },
          fall: {
            start: [0, 80],
            end: [160, 100],
            columns: 4,
            rows: 1,
            reverse: !1,
          },
          fly: {
            start: [160, 80],
            end: [480, 110],
            columns: 8,
            rows: 1,
            reverse: !1,
          },
          stop: {
            start: [0, 120],
            end: [640, 140],
            columns: 16,
            rows: 1,
            reverse: !1,
          },
          climb: {
            start: [0, 160],
            end: [640, 185],
            columns: 16,
            rows: 1,
            reverse: !1,
          },
          build: {
            start: [0, 200],
            end: [640, 225],
            columns: 16,
            rows: 1,
            reverse: !1,
          },
          punch: {
            start: [0, 240],
            end: [640, 300],
            columns: 16,
            rows: 2,
            reverse: !1,
          },
          dig: {
            start: [0, 320],
            end: [320, 345],
            columns: 8,
            rows: 1,
            reverse: !1,
          },
        };
      function Lemming(init) {
        (this.position = [
          Math.floor(Math.random() * (canvas.width - 200)) + 100,
          Math.floor(Math.random() * (canvas.height - 200)) + 100,
        ]),
          (this.direction = 2 * Math.random() > 1 ? LEFT : RIGHT),
          (this.act = function (action) {
            (this.action = actions[action]),
              (this.cycle = 0),
              (this.width = (this.action.end[0] - this.action.start[0]) / this.action.columns),
              (this.height =
                (this.action.end[1] - this.action.start[1] - 20 * (this.action.rows - 1)) / this.action.rows),
              (this.animation = !0);
          }),
          this.act(init),
          (this.move = function () {
            ctx.save(),
              ctx.translate(this.position[0], this.position[1]),
              ctx.translate(this.width / 2, this.height / 2),
              this.direction === LEFT && ctx.scale(-1, 1);
            var column = this.cycle % this.action.columns,
              row = Math.floor(this.cycle / this.action.columns);
            ctx.drawImage(
              lemmingsImage,
              this.width * column + this.action.start[0],
              (this.height + 20) * row + this.action.start[1],
              this.width,
              this.height,
              0,
              0,
              2 * this.width,
              2 * this.height
            ),
              ctx.restore(),
              this.action.reverse
                ? this.animation
                  ? (this.cycle++,
                    this.cycle >= this.action.columns * this.action.rows &&
                      ((this.animation = !this.animation), this.cycle--))
                  : (this.cycle--, this.cycle < 0 && ((this.animation = !this.animation), (this.cycle = 0)))
                : (this.cycle++, this.cycle >= this.action.columns * this.action.rows && (this.cycle = 0));
          });
      }
      function resizeCanvas() {
        (canvas.width = window.innerWidth), (canvas.height = window.innerHeight - (canvas.width <= 768 ? 50 : 105));
      }
      window.addEventListener("resize", resizeCanvas, !1),
        resizeCanvas(),
        Object.keys(actions).forEach(function (action) {
          lemmings[Math.round(1e8 * Math.random())] = new Lemming(action);
        });
      let hatch = new (function () {
        (this.position = [20, 20]),
          (this.action = {
            start: [0, 0],
            end: [82, 500],
            columns: 1,
            rows: 10,
          }),
          (this.width = (this.action.end[0] - this.action.start[0]) / this.action.columns),
          (this.height = (this.action.end[1] - this.action.start[1]) / this.action.rows),
          (this.cycle = 0),
          (this.open = function () {
            var column, row;
            ctx.save(),
              ctx.translate(this.position[0], this.position[1]),
              ctx.translate(this.width / 2, this.height / 2),
              started
                ? ((column = this.cycle % this.action.columns),
                  (row = Math.floor(this.cycle / this.action.columns)),
                  this.cycle < 9 && this.cycle++)
                : ((column = 0), (row = 0)),
              ctx.drawImage(
                decorImage,
                this.width * column + this.action.start[0],
                this.height * row + this.action.start[1] - 1,
                this.width,
                this.height,
                0,
                0,
                2 * this.width,
                2 * this.height
              ),
              ctx.restore();
          });
      })();
      !(function draw() {
        if ((ctx.clearRect(0, 0, canvas.width, canvas.height), started)) for (var i in lemmings) lemmings[i].move();
        else
          ctx.beginPath(),
            (ctx.font = "40px Monoton"),
            (ctx.lineWidth = "10"),
            (ctx.strokeStyle = "blue"),
            ctx.rect(
              15,
              canvas.height - 45,
              ctx.measureText("Start").width + 20,
              ctx.measureText("Start").height + canvas.height - 45
            ),
            ctx.fill(),
            ctx.fillText("Start", 20, canvas.height - 50);
        hatch.open(),
          (started = !0),
          setTimeout(function () {
            draw();
          }, 150);
      })();
    },
  ]),
  angular.module("app").controller("ListsCtrl", [
    "$scope",
    "$location",
    "CategoriesSvc",
    function ($scope, $location, CategoriesSvc) {
      ($scope.showCategory = !0),
        ($scope.init = function () {
          CategoriesSvc.getCategories().then(function (response) {
            for (var i in (($scope.categories = response.data), ($scope.tasks = []), $scope.categories))
              for (var j in $scope.categories[i].tasks)
                $scope.tasks.push({
                  category: $scope.categories[i].name,
                  task: $scope.categories[i].tasks[j].name,
                });
          });
        }),
        ($scope.selectCategory = function (category) {
          for (var i in (($scope.selectedCategory = category),
          ($scope.selectedTasks = []),
          ($scope.selectableTasks = []),
          $scope.selectedCategory.tasks))
            $scope.selectableTasks.push($scope.selectedCategory.tasks[i]);
          ($scope.showCategory = !1), ($scope.enteredCategory = "");
        }),
        ($scope.newCategory = function (category) {
          for (var found = !1, i = 0; i < $scope.categories.length; i++)
            $scope.categories[i].name === category && ($scope.selectCategory($scope.categories[i]), (found = !0));
          found ||
            CategoriesSvc.addCategory({
              category,
            }).then(function (category) {
              $scope.init(), $scope.selectCategory(category);
            }),
            ($scope.enteredCategory = "");
        }),
        ($scope.newTask = function (task) {
          var found = !1;
          for (var i in $scope.selectedCategory.tasks)
            $scope.selectedCategory.tasks[i].name === task &&
              ((found = !0), $scope.selectTask($scope.selectedCategory.tasks[i]));
          found ||
            CategoriesSvc.addTask($scope.selectedCategory.name, {
              task,
            }).then(function () {
              $scope.selectedCategory.tasks.push({
                name: task,
              }),
                $scope.addTask(
                  $scope.selectedTasks,
                  $scope.selectedCategory.tasks[$scope.selectedCategory.tasks.length - 1]
                );
            }),
            ($scope.enteredTask = "");
        }),
        ($scope.selectTask = function (task) {
          $scope.addTask($scope.selectedTasks, task),
            $scope.removeTask($scope.selectableTasks, task),
            ($scope.enteredTask = "");
        }),
        ($scope.unselectTask = function (task) {
          $scope.addTask($scope.selectableTasks, task), $scope.removeTask($scope.selectedTasks, task);
        }),
        ($scope.addTask = function (taskList, task) {
          taskList.push(task);
        }),
        ($scope.removeTask = function (taskList, task) {
          taskList.splice(taskList.indexOf(task), 1);
        }),
        ($scope.startPrioritizing = function () {
          CategoriesSvc.setPriorityList($scope.selectedTasks), $location.path("/prioritize");
        }),
        ($scope.getQuestions = function () {
          if (!$scope.selectedTasks) return "";
          for (var counter = 0, i = $scope.selectedTasks.length - 1; i > 0; i--) counter += i;
          return counter;
        });
    },
  ]),
  angular.module("app").controller("LoginCtrl", [
    "$scope",
    "$location",
    "UserSvc",
    function ($scope, $location, UserSvc) {
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      function startUI() {
        ui.start("#firebaseui-auth-container", {
          callbacks: {
            signInSuccess: function (currentUser, credential, redirectUrl) {
              return (
                firebase
                  .auth()
                  .currentUser.getIdToken(!0)
                  .then(function (idToken) {
                    UserSvc.authenticate({
                      displayName: currentUser.displayName,
                      email: currentUser.email,
                      photoURL: currentUser.photoURL,
                      emailVerified: currentUser.emailVerified,
                      idToken,
                    }).then(
                      function (response) {
                        $scope.$emit("login", response.data), $("#modal-login").modal("hide");
                      },
                      function () {
                        $scope.$emit("popup", {
                          message: "Login Failed",
                          type: "alert-danger",
                        });
                      }
                    );
                  })
                  .catch(function (error) {
                    console.error(error);
                  }),
                !1
              );
            },
            signInFailure: function (error) {
              if ("firebaseui/anonymous-upgrade-merge-conflict" != error.code) return Promise.resolve();
              var cred = error.credential;
              return firebase.auth().signInWithCredential(cred);
            },
            uiShown: function () {
              document.getElementById("loader").style.display = "none";
            },
          },
          signInSuccessUrl: "/home",
          signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.FacebookAuthProvider.PROVIDER_ID],
          signInFlow: "popup",
        });
      }
      $scope.$on("logout", function (event) {
        ui.reset(), startUI();
      }),
        startUI();
    },
  ]),
  angular.module("app").controller("PostsCtrl", [
    "$scope",
    "$filter",
    "PostsSvc",
    function ($scope, $filter, PostsSvc) {
      ($scope.addPost = function () {
        $scope.postBody &&
          PostsSvc.create({
            body: $scope.postBody,
          }).then(function (post) {
            $scope.postBody = null;
          });
      }),
        PostsSvc.fetch().then(function (response) {
          $scope.posts = response.data;
        }),
        $scope.$on("ws:new_post", function (_, post) {
          $scope.$apply(function () {
            PostsSvc.getPost(post).then(function (response) {
              $scope.posts.unshift(response.data);
            });
          });
        });
    },
  ]),
  angular.module("app").controller("PrioritizeCtrl", [
    "$scope",
    "$location",
    "CategoriesSvc",
    function ($scope, $location, CategoriesSvc) {
      ($scope.priorityList = CategoriesSvc.getPriorityList()),
        $scope.priorityList
          ? (($scope.selectedQuestion = 1), ($scope.currentQuestion = 1), ($scope.done = !1))
          : $location.path("/lists"),
        ($scope.makeChoice = function (choice) {
          for (var i in $scope.priorityList)
            $scope.priorityList[i].id === $scope.selectedQuestion &&
              ($scope.priorityList[i].choice =
                1 === choice ? $scope.priorityList[i].firstChoice : $scope.priorityList[i].secondChoice);
          $scope.selectedQuestion === $scope.currentQuestion &&
            ($scope.currentQuestion =
              $scope.currentQuestion === $scope.priorityList.length ? 1 : $scope.currentQuestion + 1),
            ($scope.selectedQuestion = $scope.currentQuestion);
          var found = !1;
          for (i in $scope.priorityList)
            if ("" === $scope.priorityList[i].choice) {
              found = !0;
              break;
            }
          found || ($("#prioritizeChoices").hide(300), ($scope.done = !0));
        }),
        ($scope.getButtonValue = function (choice) {
          if (!$scope.priorityList) return "";
          for (var i = 0; i < $scope.priorityList.length; i++)
            if ($scope.priorityList[i].id === $scope.selectedQuestion)
              return 1 === choice ? $scope.priorityList[i].firstChoice : $scope.priorityList[i].secondChoice;
        }),
        ($scope.selectQuestion = function (question) {
          $scope.selectedQuestion = question;
        }),
        ($scope.getFilteredPriorityList = function () {
          return $scope.priorityList
            ? $scope.priorityList
                .sort(function (a, b) {
                  return a.id - b.id;
                })
                .filter(function (question) {
                  return "" !== question.choice || question.id === $scope.currentQuestion;
                })
            : [];
        }),
        ($scope.getChoicesMade = function () {
          if (!$scope.priorityList) return "";
          var choicesMade = 0;
          for (var i in $scope.priorityList) "" !== $scope.priorityList[i].choice && choicesMade++;
          return choicesMade;
        }),
        ($scope.getButtonClass = function (choice) {
          if (!$scope.priorityList) return "";
          for (var i in $scope.priorityList)
            if ($scope.priorityList[i].id === $scope.selectedQuestion)
              return "" === $scope.priorityList[i].choice
                ? "btn-primary"
                : 1 === choice
                ? $scope.priorityList[i].firstChoice === $scope.priorityList[i].choice
                  ? "btn-success"
                  : "btn-danger"
                : $scope.priorityList[i].secondChoice === $scope.priorityList[i].choice
                ? "btn-success"
                : "btn-danger";
        }),
        ($scope.showChoices = function () {
          $("#prioritizeChoices").show(1e3), $("#reviewChoices").hide();
        }),
        ($scope.chartClick = function (event) {
          $scope.chart && console.log($scope.chart.getSegmentsAtEvent(event));
        }),
        ($scope.showResults = function () {
          for (var i in (($scope.data = []),
          ($scope.options = {
            responsive: !0,
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            percentageInnerCutout: 0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            legendTemplate:
              '<h3 class="tc-chart-js-legend" style="padding:5px"><% for (var i=0; i<segments.length; i++){%><div class="label" style="float:left;margin:5px;background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></div><%}%></h3>',
          }),
          CategoriesSvc.choices))
            for (var j in ((CategoriesSvc.choices[i].votes = 0), $scope.priorityList))
              CategoriesSvc.choices[i].name === $scope.priorityList[j].choice && CategoriesSvc.choices[i].votes++;
          for (i in (CategoriesSvc.choices.sort(function (a, b) {
            return a.votes < b.votes;
          }),
          CategoriesSvc.choices))
            $scope.data.push({
              value: CategoriesSvc.choices[i].votes,
              label: CategoriesSvc.choices[i].name,
            });
          $("#prioritizeResult").hide(), $("#prioritizeChoices").hide(), $("#priorityResults").show(1e3);
        });
    },
  ]),
  angular.module("app").controller("ProfileCtrl", [
    "$scope",
    "$location",
    "UserSvc",
    function ($scope, $location, UserSvc) {
      $scope.currentUser
        ? ($("#sex-indicator").offset({
            left: ($scope.currentUser.gender.sex / 200) * $("#sex").width() + $("#sex").offset().left,
          }),
          $("#identity-indicator").offset({
            left: ($scope.currentUser.gender.identity / 200) * $("#identity").width() + $("#identity").offset().left,
          }))
        : $location.path("/"),
        ($scope.sexes = ["Male", "FtM Male", "Intersex", "MtF Female", "Female"]),
        ($scope.identities = [
          "Man",
          "Bigender",
          "Pangender",
          "Agender",
          "Polygender",
          "Genderfluid",
          "Genderqueer",
          "Queer",
          "Woman",
        ]),
        ($scope.dateOptions = {
          maxDate: new Date(),
          minDate: new Date(1900, 1, 1),
          initDate: new Date(2e3, 1, 1),
          datepickerMode: "year",
        }),
        ($scope.gender = function (array, percentage) {
          return array[Math.round((percentage / 200) * (array.length - 1))];
        }),
        ($scope.startSlider = function () {}),
        ($scope.dragSlider = function (event, ui, type) {
          ($scope.currentUser.gender[type] = Math.round(
            (($("#" + type + "-indicator").offset().left - $("#" + type).offset().left) /
              ($("#" + type).width() - $("#" + type + "-indicator").width())) *
              200
          )),
            $scope.$apply();
        }),
        ($scope.stopSlider = function () {}),
        ($scope.usernameToggle = !0),
        ($scope.passwordToggle = !0),
        ($scope.toggleUsername = function () {
          ($scope.usernameToggle = !$scope.usernameToggle), ($scope.newUsername = $scope.currentUser.username);
        }),
        ($scope.togglePassword = function () {
          ($scope.newPassword = null),
            ($scope.confirmPassword = null),
            ($scope.passwordToggle = !$scope.passwordToggle);
        }),
        ($scope.checkPassword = function (password) {
          if (password) {
            var user = $scope.currentUser._id;
            UserSvc.checkPassword(user, password).then(
              function (response) {
                $scope.togglePassword();
              },
              function () {
                var originalBg = $(".password").css("backgroundColor");
                $(".password")
                  .animate(
                    {
                      backgroundColor: "#FFB6C1",
                    },
                    200
                  )
                  .animate(
                    {
                      backgroundColor: originalBg,
                    },
                    200
                  );
              }
            );
          }
        }),
        ($scope.changePassword = function (oldPassword, newPassword, confirmPassword) {
          if (newPassword)
            if (newPassword == confirmPassword) {
              var user = $scope.currentUser._id;
              UserSvc.changePassword(user, oldPassword, newPassword).then(
                function (response) {
                  $scope.$emit("popup", {
                    message: "Password Changed",
                    type: "alert-success",
                  }),
                    ($scope.oldPassword = null),
                    $scope.togglePassword();
                },
                function () {
                  $scope.$emit("popup", {
                    message: "Password Change Failed",
                    type: "alert-danger",
                  });
                }
              );
            } else {
              var originalBg = $(".password").css("backgroundColor");
              $(".password")
                .animate(
                  {
                    backgroundColor: "#FFB6C1",
                  },
                  200
                )
                .animate(
                  {
                    backgroundColor: originalBg,
                  },
                  200
                );
            }
        }),
        ($scope.changeUsername = function (username) {
          $scope.$emit("loading"),
            UserSvc.changeUsername($scope.currentUser._id, username).then(
              function (response) {
                $scope.$emit("update", response.data);
              },
              function (response) {
                $scope.$emit("popup", {
                  message: username + " already in use",
                  type: "alert-danger",
                });
              }
            );
        }),
        ($scope.updateUser = function () {
          $scope.currentUser &&
            ($scope.$emit("loading"),
            UserSvc.updateUser($scope.currentUser).then(function (response) {
              $scope.$emit("update", response.data);
            }));
        }),
        $scope.$watch("currentUser.flags.length", function (length) {
          $scope.updateUser();
        }),
        ($scope.loadCountries = function ($query) {
          return [
            {
              name: "Andorra",
              flag: "flag-ad",
              tidbit: "",
            },
            {
              name: "United Arab Emirates",
              flag: "flag-ae",
            },
            {
              name: "Afghanistan",
              flag: "flag-af",
            },
            {
              name: "Antigua and Barbuda",
              flag: "flag-ag",
            },
            {
              name: "Anguilla",
              flag: "flag-ai",
            },
            {
              name: "Albania",
              flag: "flag-al",
            },
            {
              name: "Armenia",
              flag: "flag-am",
            },
            {
              name: "Angola",
              flag: "flag-ao",
            },
            {
              name: "Antarctica",
              flag: "flag-aq",
            },
            {
              name: "Argentina",
              flag: "flag-ar",
            },
            {
              name: "American Somoa",
              flag: "flag-as",
            },
            {
              name: "Austria",
              flag: "flag-at",
            },
            {
              name: "Australia",
              flag: "flag-au",
            },
            {
              name: "Aruba",
              flag: "flag-aw",
            },
            {
              name: "Åland Islands",
              flag: "flag-ax",
            },
            {
              name: "Azerbaijan",
              flag: "flag-az",
            },
            {
              name: "Bosnia and Herzegovina",
              flag: "flag-ba",
            },
            {
              name: "Barbados",
              flag: "flag-bb",
            },
            {
              name: "Bangladesh",
              flag: "flag-bd",
            },
            {
              name: "Belgium",
              flag: "flag-be",
            },
            {
              name: "Burkina Faso",
              flag: "flag-bf",
            },
            {
              name: "Bulgaria",
              flag: "flag-bg",
            },
            {
              name: "Bahrain",
              flag: "flag-bh",
            },
            {
              name: "Burundi",
              flag: "flag-bi",
            },
            {
              name: "Benin",
              flag: "flag-bj",
            },
            {
              name: "Saint Barthélemy",
              flag: "flag-bl",
            },
            {
              name: "Bermuda",
              flag: "flag-bm",
            },
            {
              name: "Brunei ",
              flag: "flag-bn",
            },
            {
              name: "Bolivia, Plurinational State of",
              flag: "flag-bo",
            },
            {
              name: "Bonaire, Sint Eustatius and Saba",
              flag: "flag-bq",
            },
            {
              name: "Brazil",
              flag: "flag-br",
            },
            {
              name: "Bahamas",
              flag: "flag-bs",
            },
            {
              name: "Bhutan",
              flag: "flag-bt",
            },
            {
              name: "Bouvet Island",
              flag: "flag-bv",
            },
            {
              name: "Botswana",
              flag: "flag-bw",
            },
            {
              name: "Belarus",
              flag: "flag-by",
            },
            {
              name: "Belize",
              flag: "flag-bz",
            },
            {
              name: "Canada",
              flag: "flag-ca",
            },
            {
              name: "Cocos (Keeling) Islands",
              flag: "flag-cc",
            },
            {
              name: "Congo, the Democratic Republic of the",
              flag: "flag-cd",
            },
            {
              name: "Central African Republic",
              flag: "flag-cf",
            },
            {
              name: "Congo",
              flag: "flag-cg",
            },
            {
              name: "Switzerland",
              flag: "flag-ch",
            },
            {
              name: "Côte d'Ivoire",
              flag: "flag-ci",
            },
            {
              name: "Cook Islands",
              flag: "flag-ck",
            },
            {
              name: "Chile",
              flag: "flag-cl",
            },
            {
              name: "Cameroon",
              flag: "flag-cm",
            },
            {
              name: "China",
              flag: "flag-cn",
            },
            {
              name: "Colombia",
              flag: "flag-co",
            },
            {
              name: "Costa Rica",
              flag: "flag-cr",
            },
            {
              name: "Cuba",
              flag: "flag-cu",
            },
            {
              name: "Cabo Verde",
              flag: "flag-cv",
            },
            {
              name: "Curaçao",
              flag: "flag-cw",
            },
            {
              name: "Christmas Island",
              flag: "flag-cx",
            },
            {
              name: "Cyprus",
              flag: "flag-cy",
            },
            {
              name: "Czech Republic",
              flag: "flag-cz",
            },
            {
              name: "Germany",
              flag: "flag-de",
            },
            {
              name: "Djibouti",
              flag: "flag-dj",
            },
            {
              name: "Denmark",
              flag: "flag-dk",
            },
            {
              name: "Dominica",
              flag: "flag-dm",
            },
            {
              name: "Dominican Republic",
              flag: "flag-do",
            },
            {
              name: "Algeria",
              flag: "flag-dz",
            },
            {
              name: "Ecuador",
              flag: "flag-ec",
            },
            {
              name: "Estonia",
              flag: "flag-ee",
            },
            {
              name: "Egypt",
              flag: "flag-eg",
            },
            {
              name: "Western Sahara",
              flag: "flag-eh",
            },
            {
              name: "Eritrea",
              flag: "flag-er",
            },
            {
              name: "Spain",
              flag: "flag-es",
            },
            {
              name: "Ethiopia",
              flag: "flag-et",
            },
            {
              name: "Finland",
              flag: "flag-fi",
            },
            {
              name: "Fiji",
              flag: "flag-fj",
            },
            {
              name: "Falkland Islands (Malvinas)",
              flag: "flag-fk",
            },
            {
              name: "Micronesia, Federated States of",
              flag: "flag-fm",
            },
            {
              name: "Faroe Islands",
              flag: "flag-fo",
            },
            {
              name: "France",
              flag: "flag-fr",
            },
            {
              name: "Gabon",
              flag: "flag-ga",
            },
            {
              name: "United Kingdom of Great Britain and Northern Ireland",
              flag: "flag-gb",
            },
            {
              name: "Grenada",
              flag: "flag-gd",
            },
            {
              name: "Georgia",
              flag: "flag-ge",
            },
            {
              name: "French Guiana",
              flag: "flag-gf",
            },
            {
              name: "Guernsey",
              flag: "flag-gg",
            },
            {
              name: "Ghana",
              flag: "flag-gh",
            },
            {
              name: "Gibraltar",
              flag: "flag-gi",
            },
            {
              name: "Greenland",
              flag: "flag-gl",
            },
            {
              name: "Gambia",
              flag: "flag-gm",
            },
            {
              name: "Guinea",
              flag: "flag-gn",
            },
            {
              name: "Guadeloupe",
              flag: "flag-gp",
            },
            {
              name: "Equatorial Guinea",
              flag: "flag-gq",
            },
            {
              name: "Greece",
              flag: "flag-gr",
            },
            {
              name: "South Georgia and the South Sandwich Islands",
              flag: "flag-gs",
            },
            {
              name: "Guatemala",
              flag: "flag-gt",
            },
            {
              name: "Guam",
              flag: "flag-gu",
            },
            {
              name: "Guinea-Bissau",
              flag: "flag-gw",
            },
            {
              name: "Guyana",
              flag: "flag-gy",
            },
            {
              name: "Hong Kong",
              flag: "flag-hk",
            },
            {
              name: "Heard Island and McDonald Islands",
              flag: "flag-hm",
            },
            {
              name: "Honduras",
              flag: "flag-hn",
            },
            {
              name: "Croatia",
              flag: "flag-hr",
            },
            {
              name: "Haiti",
              flag: "flag-ht",
            },
            {
              name: "Hungary",
              flag: "flag-hu",
            },
            {
              name: "Indonesia",
              flag: "flag-id",
            },
            {
              name: "Ireland",
              flag: "flag-ie",
            },
            {
              name: "Israel",
              flag: "flag-il",
            },
            {
              name: "Isle of Man",
              flag: "flag-im",
            },
            {
              name: "India",
              flag: "flag-in",
            },
            {
              name: "British Indian Ocean Territory",
              flag: "flag-io",
            },
            {
              name: "Iraq",
              flag: "flag-iq",
            },
            {
              name: "Iran, Islamic Republic of",
              flag: "flag-ir",
            },
            {
              name: "Iceland",
              flag: "flag-is",
            },
            {
              name: "Italy",
              flag: "flag-it",
            },
            {
              name: "Jersey",
              flag: "flag-je",
            },
            {
              name: "Jamaica",
              flag: "flag-jm",
            },
            {
              name: "Jordan",
              flag: "flag-jo",
            },
            {
              name: "Japan",
              flag: "flag-jp",
            },
            {
              name: "Kenya",
              flag: "flag-ke",
            },
            {
              name: "Kyrgyzstan",
              flag: "flag-kg",
            },
            {
              name: "Cambodia",
              flag: "flag-kh",
            },
            {
              name: "Kiribati",
              flag: "flag-ki",
            },
            {
              name: "Comoros",
              flag: "flag-km",
            },
            {
              name: "Saint Kitts and Nevis",
              flag: "flag-kn",
            },
            {
              name: "Korea, Democratic People's Republic of",
              flag: "flag-kp",
            },
            {
              name: "Korea, Republic of",
              flag: "flag-kr",
            },
            {
              name: "Kuwait",
              flag: "flag-kw",
            },
            {
              name: "Cayman Islands",
              flag: "flag-ky",
            },
            {
              name: "Kazakhstan",
              flag: "flag-kz",
            },
            {
              name: "Lao People's Democratic Republic",
              flag: "flag-la",
            },
            {
              name: "Lebanon",
              flag: "flag-lb",
            },
            {
              name: "Saint Lucia",
              flag: "flag-lc",
            },
            {
              name: "Liechtenstein",
              flag: "flag-li",
            },
            {
              name: "Sri Lanka",
              flag: "flag-lk",
            },
            {
              name: "Liberia",
              flag: "flag-lr",
            },
            {
              name: "Lesotho",
              flag: "flag-ls",
            },
            {
              name: "Lithuania",
              flag: "flag-lt",
            },
            {
              name: "Luxembourg",
              flag: "flag-lu",
            },
            {
              name: "Latvia",
              flag: "flag-lv",
            },
            {
              name: "Libya",
              flag: "flag-ly",
            },
            {
              name: "Morocco",
              flag: "flag-ma",
            },
            {
              name: "Monaco",
              flag: "flag-mc",
            },
            {
              name: "Moldova, Republic of",
              flag: "flag-md",
            },
            {
              name: "Montenegro",
              flag: "flag-me",
            },
            {
              name: "Saint Martin (French part)",
              flag: "flag-mf",
            },
            {
              name: "Madagascar",
              flag: "flag-mg",
            },
            {
              name: "Marshall Islands",
              flag: "flag-mh",
            },
            {
              name: "Macedonia, the former Yugoslav Republic of",
              flag: "flag-mk",
            },
            {
              name: "Mali",
              flag: "flag-ml",
            },
            {
              name: "Myanmar",
              flag: "flag-mm",
            },
            {
              name: "Mongolia",
              flag: "flag-mn",
            },
            {
              name: "Macao",
              flag: "flag-mo",
            },
            {
              name: "Northern Mariana Islands",
              flag: "flag-mp",
            },
            {
              name: "Martinique",
              flag: "flag-mq",
            },
            {
              name: "Mauritania",
              flag: "flag-mr",
            },
            {
              name: "Montserrat",
              flag: "flag-ms",
            },
            {
              name: "Malta",
              flag: "flag-mt",
            },
            {
              name: "Mauritius",
              flag: "flag-mu",
            },
            {
              name: "Maldives",
              flag: "flag-mv",
            },
            {
              name: "Malawi",
              flag: "flag-mw",
            },
            {
              name: "Mexico",
              flag: "flag-mx",
            },
            {
              name: "Malaysia",
              flag: "flag-my",
            },
            {
              name: "Mozambique",
              flag: "flag-mz",
            },
            {
              name: "Namibia",
              flag: "flag-na",
            },
            {
              name: "New Caledonia",
              flag: "flag-nc",
            },
            {
              name: "Niger",
              flag: "flag-ne",
            },
            {
              name: "Norfolk Island",
              flag: "flag-nf",
            },
            {
              name: "Nigeria",
              flag: "flag-ng",
            },
            {
              name: "Nicaragua",
              flag: "flag-ni",
            },
            {
              name: "Netherlands",
              flag: "flag-nl",
            },
            {
              name: "Norway",
              flag: "flag-no",
            },
            {
              name: "Nepal",
              flag: "flag-np",
            },
            {
              name: "Nauru",
              flag: "flag-nr",
            },
            {
              name: "Niue",
              flag: "flag-nu",
            },
            {
              name: "New Zealand",
              flag: "flag-nz",
            },
            {
              name: "Oman",
              flag: "flag-om",
            },
            {
              name: "Panama",
              flag: "flag-pa",
            },
            {
              name: "Peru",
              flag: "flag-pe",
            },
            {
              name: "French Polynesia",
              flag: "flag-pf",
            },
            {
              name: "Papua New Guinea",
              flag: "flag-pg",
            },
            {
              name: "Philippines",
              flag: "flag-ph",
            },
            {
              name: "Pakistan",
              flag: "flag-pk",
            },
            {
              name: "Poland",
              flag: "flag-pl",
            },
            {
              name: "Saint Pierre and Miquelon",
              flag: "flag-pm",
            },
            {
              name: "Pitcairn",
              flag: "flag-pn",
            },
            {
              name: "Puerto Rico",
              flag: "flag-pr",
            },
            {
              name: "Palestine, State of",
              flag: "flag-ps",
            },
            {
              name: "Portugal",
              flag: "flag-pt",
            },
            {
              name: "Palau",
              flag: "flag-pw",
            },
            {
              name: "Paraguay",
              flag: "flag-py",
            },
            {
              name: "Qatar",
              flag: "flag-qa",
            },
            {
              name: "Réunion",
              flag: "flag-re",
            },
            {
              name: "Romania",
              flag: "flag-ro",
            },
            {
              name: "Serbia",
              flag: "flag-rs",
            },
            {
              name: "Russian Federation",
              flag: "flag-ru",
            },
            {
              name: "Rwanda",
              flag: "flag-rw",
            },
            {
              name: "Saudi Arabia",
              flag: "flag-sa",
            },
            {
              name: "Solomon Islands",
              flag: "flag-sb",
            },
            {
              name: "Seychelles",
              flag: "flag-sc",
            },
            {
              name: "Sudan",
              flag: "flag-sd",
            },
            {
              name: "Sweden",
              flag: "flag-se",
            },
            {
              name: "Singapore",
              flag: "flag-sg",
            },
            {
              name: "Saint Helena, Ascension and Tristan da Cunha",
              flag: "flag-sh",
            },
            {
              name: "Slovenia",
              flag: "flag-si",
            },
            {
              name: "Svalbard and Jan Mayen",
              flag: "flag-sj",
            },
            {
              name: "Slovakia",
              flag: "flag-sk",
            },
            {
              name: "Sierra Leone",
              flag: "flag-sl",
            },
            {
              name: "San Marino",
              flag: "flag-sm",
            },
            {
              name: "Senegal",
              flag: "flag-sn",
            },
            {
              name: "Somalia",
              flag: "flag-so",
            },
            {
              name: "Suriname",
              flag: "flag-sr",
            },
            {
              name: "South Sudan",
              flag: "flag-ss",
            },
            {
              name: "Sao Tome and Principe",
              flag: "flag-st",
            },
            {
              name: "El Salvador",
              flag: "flag-sv",
            },
            {
              name: "Sint Maarten (Dutch part)",
              flag: "flag-sx",
            },
            {
              name: "Syrian Arab Republic",
              flag: "flag-sy",
            },
            {
              name: "Swaziland",
              flag: "flag-sz",
            },
            {
              name: "Turks and Caicos Islands",
              flag: "flag-tc",
            },
            {
              name: "Chad",
              flag: "flag-td",
            },
            {
              name: "French Southern Territories",
              flag: "flag-tf",
            },
            {
              name: "Togo",
              flag: "flag-tg",
            },
            {
              name: "Thailand",
              flag: "flag-th",
            },
            {
              name: "Tajikistan",
              flag: "flag-tj",
            },
            {
              name: "Tokelau",
              flag: "flag-tk",
            },
            {
              name: "Timor-Leste",
              flag: "flag-tl",
            },
            {
              name: "Turkmenistan",
              flag: "flag-tm",
            },
            {
              name: "Tunisia",
              flag: "flag-tn",
            },
            {
              name: "Tonga",
              flag: "flag-to",
            },
            {
              name: "Turkey",
              flag: "flag-tr",
            },
            {
              name: "Trinidad and Tobago",
              flag: "flag-tt",
            },
            {
              name: "Tuvalu",
              flag: "flag-tv",
            },
            {
              name: "Taiwan, Province of China",
              flag: "flag-tw",
            },
            {
              name: "Tanzania, United Republic of",
              flag: "flag-tz",
            },
            {
              name: "Ukraine",
              flag: "flag-ua",
            },
            {
              name: "Uganda",
              flag: "flag-ug",
            },
            {
              name: "United States Minor Outlying Islands",
              flag: "flag-um",
            },
            {
              name: "United States of America",
              flag: "flag-us",
            },
            {
              name: "Uruguay",
              flag: "flag-uy",
            },
            {
              name: "Uzbekistan",
              flag: "flag-uz",
            },
            {
              name: "Holy See",
              flag: "flag-va",
            },
            {
              name: "Saint Vincent and the Grenadines",
              flag: "flag-vc",
            },
            {
              name: "Venezuela, Bolivarian Republic of",
              flag: "flag-ve",
            },
            {
              name: "Virgin Islands, British",
              flag: "flag-vg",
            },
            {
              name: "Virgin Islands, U.S.",
              flag: "flag-vi",
            },
            {
              name: "Viet Nam",
              flag: "flag-vn",
            },
            {
              name: "Vanuatu",
              flag: "flag-vu",
            },
            {
              name: "Wallis and Futuna",
              flag: "flag-wf",
            },
            {
              name: "Samoa",
              flag: "flag-ws",
            },
            {
              name: "Yemen",
              flag: "flag-ye",
            },
            {
              name: "Mayotte",
              flag: "flag-yt",
            },
            {
              name: "South Africa",
              flag: "flag-za",
            },
            {
              name: "Zambia",
              flag: "flag-zm",
            },
            {
              name: "Zimbabwe",
              flag: "flag-zw",
            },
          ].filter(function (country) {
            return -1 != country.name.toLowerCase().indexOf($query.toLowerCase());
          });
        });
    },
  ]),
  angular.module("app").controller("SkillsCtrl", [
    "$scope",
    "$window",
    function ($scope, $window) {
      ($scope.selectedSkill = 0),
        ($scope.skillsVisible = !1),
        ($scope.projects = []),
        ($scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"]),
        ($scope.data = [300, 500, 100]),
        $.getJSON("/experience.json", function (data) {
          $scope.projects = data.reduce(
            (projects, employer) => (employer.projects ? employer.projects.concat(projects) : projects),
            {}
          );
        }),
        ($scope.filteredProjects = () =>
          $scope.projects.filter((project) => project.skills && project.skills.includes($scope.selectedSkill.code))),
        $.getJSON("/skills.json", function (data) {
          const skills = data.filter((skill) => skill.enabled);
          ($scope.categories = skills.reduce(function (categories, skill) {
            return (
              categories[skill.category]
                ? categories[skill.category].push(skill)
                : (categories[skill.category] = [skill]),
              categories
            );
          }, {})),
            ($scope.setSelectedSkill = function (skill) {
              ($scope.selectedSkill = skill),
                ($scope.selectedSkill.chartOptions = {
                  cutoutPercentage: 80,
                  circumference: 2 * Math.PI,
                  maintainAspectRatio: !0,
                  tooltips: {
                    enabled: !1,
                  },
                }),
                ($scope.selectedSkill.chartStyle = {
                  "background-image": "url(/skills/" + $scope.selectedSkill.image + ")",
                  "background-repeat": "no-repeat",
                  "background-size": "60%",
                  "background-position": "50% 50%",
                });
            }),
            $scope.setSelectedSkill($scope.skills[0]),
            $scope.$apply();
        });
    },
  ]),
  angular.module("app").controller("TenThingsCtrl", [
    "$scope",
    "$location",
    "TenThingsSvc",
    function ($scope, $location, TenThingsSvc) {
      function flash(element) {
        const color = $(element).css("background-color");
        $(element).animate(
          {
            backgroundColor: "#FA8072",
          },
          100,
          () => {
            $(element).animate(
              {
                backgroundColor: color,
              },
              100
            );
          }
        );
      }
      ($scope.search = {
        name: "",
        values: "",
      }),
        ($scope.keyDown = (e) => {
          switch ((e = e || window.event).keyCode) {
            case 9:
              $("#new-blurb").is(":focus") &&
                setTimeout(() => {
                  $scope.addValue();
                }, 100);
              break;
            case 13:
              $("#new-blurb").is(":focus")
                ? $scope.addValue()
                : $("#new-value").is(":focus") && $("#new-blurb").focus();
          }
        }),
        ($scope.searchName = ""),
        ($scope.newItem = {}),
        ($scope.setCategoryFilter = (category) => ($scope.categoryFilter = category)),
        ($scope.setUserFilter = (user) => ($scope.userFilter = user)),
        ($scope.setUpdateFilter = (type) => ($scope.updateFilter = type)),
        ($scope.setLanguageFilter = (language) => ($scope.languageFilter = language)),
        ($scope.filteredLists = () =>
          $scope.lists
            ? $scope.lists
                .filter(
                  ({ isDynamic }) =>
                    "all" === $scope.updateFilter ||
                    !(
                      ("static" === $scope.updateFilter && !0 === isDynamic) ||
                      ("dynamic" === $scope.updateFilter && !1 === isDynamic)
                    )
                )
                .filter(
                  ({ categories }) =>
                    "All" === $scope.categoryFilter ||
                    (categories.length > 0
                      ? categories.indexOf($scope.categoryFilter) >= 0
                      : "Blank" === $scope.categoryFilter)
                )
                .filter(({ creator }) => "All" === $scope.userFilter || creator === $scope.userFilter)
                .filter(
                  ({ language }) => "all" === $scope.languageFilter.code || language === $scope.languageFilter.code
                )
            : []),
        $scope.$on("login", (_) => {
          $scope.getLists(),
            TenThingsSvc.getCategories().then((response) => {
              ($scope.categories = response.data),
                ($scope.categoryFilters = $scope.categories.map((category) => category)),
                $scope.categoryFilters.push("All"),
                $scope.categoryFilters.push("Blank"),
                ($scope.categoryFilter = "All"),
                ($scope.updateFilter = "all");
            }),
            TenThingsSvc.getLanguages().then((response) => {
              ($scope.languages = response.data),
                ($scope.languageFilters = $scope.languages.map((language) => language)),
                $scope.languageFilters.push({
                  name: "All",
                  code: "all",
                }),
                ($scope.languageFilter = {
                  name: "All",
                  code: "all",
                });
            }),
            $location.search().list &&
              $scope.selectList({
                _id: $location.search().list,
              });
        }),
        ($scope.listOrder = {
          field: "date",
          direction: !0,
          label: "Creation Date",
        }),
        ($scope.valueOrder = {
          field: "value",
          direction: !1,
          label: "Value",
        }),
        ($scope.sort = (sorter, sortField, sortLabel) => {
          ($scope[sorter].label = sortLabel),
            $scope[sorter].field === sortField
              ? ($scope[sorter].direction = !$scope[sorter].direction)
              : (($scope[sorter].field = sortField), ($scope[sorter].direction = !0));
        }),
        ($scope.getLanguageCount = (language) => {
          if (!$scope.lists) return 0;
          const count = $scope.lists.filter(
            (list) =>
              ("All" === $scope.categoryFilter || list.categories.includes($scope.categoryFilter)) &&
              ("all" === language.code || list.language === language.code) &&
              ("All" === $scope.userFilter || list.creator === $scope.userFilter) &&
              ("all" === $scope.updateFilter || list.isDynamic === ("dynamic" === $scope.updateFilter))
          ).length;
          return `${count} - ${Math.round((count / $scope.lists.length) * 100)}%`;
        }),
        ($scope.getCategoryCount = (category) => {
          if (!$scope.lists) return 0;
          const count = $scope.lists.filter(
            (list) =>
              !(
                !("All" === category || list.categories.indexOf(category) >= 0) ||
                ("all" !== $scope.languageFilter.code && list.language !== $scope.languageFilter.code) ||
                ("All" !== $scope.userFilter && list.creator !== $scope.userFilter) ||
                ("all" !== $scope.updateFilter && list.isDynamic !== ("dynamic" === $scope.updateFilter))
              )
          ).length;
          return `${count} - ${Math.round((count / $scope.lists.length) * 100)}%`;
        }),
        ($scope.getUpdateCount = (type) => {
          if (!$scope.lists) return 0;
          const count = $scope.lists.filter(
            (list) => "all" === type || (list.isDynamic && "dynamic" === type) || (!list.isDynamic && "static" === type)
          ).length;
          return `${count} - ${Math.round((count / $scope.lists.length) * 100)}%`;
        }),
        ($scope.getLists = () => {
          $scope.loading ||
            (($scope.loading = !0),
            TenThingsSvc.getLists().then(({ data }) => {
              ($scope.lists = data),
                ($scope.userFilters = {}),
                ($scope.userFilters.All = $scope.lists.length),
                ($scope.userFilters = $scope.lists
                  .sort((list1, list2) => list1.creator > list2.creator)
                  .reduce(
                    (users, { creator }) => (users[creator] || (users[creator] = 0), users[creator]++, users),
                    $scope.userFilters
                  )),
                ($scope.userCount = Object.keys($scope.userFilters).length),
                ($scope.userFilters = sortObject($scope.userFilters, !1)),
                ($scope.userFilter = "All"),
                ($scope.loading = !1);
            }));
        }),
        ($scope.selectList = (list) => {
          TenThingsSvc.getList(list)
            .then(({ data }) => {
              ($scope.selectedList = data), $location.search("list", data._id);
            })
            .catch((err) => console.error(err));
        }),
        ($scope.selectCategory = (category) => {
          ($scope.selectedList.category = category), $("#category-select").hide();
        }),
        ($scope.getCategoryClass = (category) =>
          $scope.selectedList && $scope.selectedList.categories.indexOf(category) >= 0 ? "btn-success" : "btn-default"),
        ($scope.toggleCategory = (category) => {
          const categoryIndex = $scope.selectedList.categories.indexOf(category);
          categoryIndex >= 0
            ? $scope.selectedList.categories.splice(categoryIndex, 1)
            : $scope.selectedList.categories.push(category);
        }),
        ($scope.selectLanguage = (language) => {
          $scope.selectedList.language = language.code;
          const nonEnglishIndex = $scope.selectedList.categories.indexOf("Non-English");
          "EN" !== language.code && nonEnglishIndex < 0
            ? $scope.selectedList.categories.push("Non-English")
            : "EN" === language.code &&
              nonEnglishIndex >= 0 &&
              $scope.selectedList.categories.splice(nonEnglishIndex, 1);
        }),
        ($scope.addList = () => {
          const currentLanguage = $scope.selectedList ? $scope.selectedList.language : "EN";
          $location.search("list", ""),
            ($scope.selectedList = {
              name: "",
              creator: $scope.currentUser._id,
              date: new Date(),
              values: [],
              answers: 0,
              isDynamic: !0,
              category: "",
              categories: [],
              language: currentLanguage,
            });
        }),
        ($scope.hasDuplicate = () =>
          $scope.selectedList &&
          $scope.newItem.value &&
          _.some(
            $scope.selectedList.values,
            (answer) => answer.value.removeAllButLetters() == $scope.newItem.value.removeAllButLetters()
          )),
        ($scope.addValue = () => {
          $scope.newItem.value &&
            (_.some(
              $scope.selectedList.values,
              (answer) => answer.value.removeAllButLetters() == $scope.newItem.value.removeAllButLetters()
            )
              ? alert(`${$scope.newItem.value} is already in the list`)
              : (($scope.newItem.creator = $scope.currentUser._id),
                $scope.selectedList.values.unshift(JSON.parse(JSON.stringify($scope.newItem))),
                $scope.selectedList.answers++,
                ($scope.newItem.value = ""),
                ($scope.newItem.blurb = ""),
                $scope.selectedList.values.length >= 10 &&
                  $scope.selectedList.name &&
                  $scope.selectedList.categories.length > 0 &&
                  $scope.saveList($scope.selectedList))),
            $("#new-value").focus();
        }),
        ($scope.reportList = (list) => {
          (list.reported = !0), TenThingsSvc.reportList($scope.currentUser, list);
        }),
        ($scope.saveList = (list) => {
          $scope.saving ||
            ((list.values = list.values.filter(({ value }) => value)),
            list.values.length >= 10 && list.name && list.categories.length > 0
              ? (($scope.saving = !0),
                TenThingsSvc.saveList($scope.currentUser, list).then(
                  ({ data }) => {
                    if ($scope.selectedList._id) {
                      for (let i = 0; i < $scope.lists.length; i++)
                        if ($scope.lists[i]._id === data._id) {
                          $scope.lists[i] = data;
                          break;
                        }
                      $scope.selectList(list);
                    } else $scope.lists.unshift(data), $scope.selectList(data);
                    $scope.saving = !1;
                  },
                  (err) => {
                    console.error(err), ($scope.saving = !1);
                  }
                ))
              : list.values.length < 10
              ? alert("Lists must contain 10 or more values!")
              : list.name
              ? flash(".list-category")
              : flash("#list-name"));
        }),
        ($scope.deleteList = (list) => {
          list._id
            ? confirm("Are you sure you want to delete this list?") &&
              TenThingsSvc.deleteList(list).then((response) => {
                $scope.getLists(), ($scope.selectedList = null);
              })
            : (($scope.lists = $scope.lists.filter(({ _id }) => _id)), ($scope.selectedList = null));
        }),
        ($scope.listButtonClass = (list) => {
          const values = list.values.length,
            blurbs = list.blurbs;
          return values === blurbs && list.description
            ? "btn-default"
            : 0 !== blurbs || list.description
            ? 0 === blurbs && list.description
              ? "btn-info"
              : "btn-primary"
            : "btn-warning";
        }),
        ($scope.getBlurbs = (type) => {
          ($scope.gettingBlurbs = !0),
            TenThingsSvc.getBlurbs($scope.selectedList, type)
              .then(() => {
                $scope.selectList($scope.selectedList), ($scope.gettingBlurbs = !1);
              })
              .catch((err) => {
                console.error(err), ($scope.gettingBlurbs = !1);
              });
        });
    },
  ]),
  angular.module("app").controller("TenThingsAdminCtrl", [
    "$scope",
    "TenThingsSvc",
    "UserSvc",
    function ($scope, TenThingsSvc, UserSvc) {
      $scope.$on("login", (_) => {
        $scope.currentUser.admin && getUsers();
      }),
        ($scope.order = {
          field: "username",
          reverse: !1,
        }),
        ($scope.orderBy = (field) => {
          $scope.order.field === field
            ? ($scope.order.reverse = !$scope.order.reverse)
            : ($scope.order = {
                field,
                reverse: !1,
              });
        }),
        ($scope.getQueue = () => {
          ($scope.loading = !0),
            TenThingsSvc.getQueue().then((response) => {
              ($scope.queue = response.data.replace("/n", "<br/>")), ($scope.loading = !1);
            });
        }),
        $scope.getQueue(),
        TenThingsSvc.getPause().then((response) => {
          ($scope.paused = response.data), console.log($scope.paused);
        });
      const getUsers = () => {
        ($scope.loading = !0),
          UserSvc.getUsers().then((response) => {
            ($scope.users = response.data.filter((user) => !user.admin)), ($scope.loading = !1);
          });
      };
      ($scope.toggleBan = (user) => {
        ($scope.loading = !0),
          UserSvc.toggleBan(user._id).then((response) => {
            getUsers();
          });
      }),
        ($scope.togglePause = (user) => {
          TenThingsSvc.togglePause().then((response) => {
            ($scope.paused = response.data), console.log($scope.paused);
          });
        });
    },
  ]),
  angular.module("app").controller("TenThingsCurateCtrl", [
    "$scope",
    "TenThingsSvc",
    function ($scope, TenThingsSvc) {
      $scope.$on("login", (_) => {
        $scope.getLists(),
          TenThingsSvc.getLanguages().then((response) => {
            $scope.languages = response.data;
          });
      }),
        ($scope.order = {
          field: "name",
          reverse: !1,
        }),
        ($scope.orderBy = (field) => {
          $scope.order.field === field
            ? ($scope.order.reverse = !$scope.order.reverse)
            : ($scope.order = {
                field,
                reverse: !1,
              });
        }),
        ($scope.getLists = () => {
          ($scope.loading = !0),
            TenThingsSvc.getLists().then(({ data }) => {
              ($scope.lists = data), ($scope.loading = !1);
            });
        }),
        ($scope.setDifficulty = (list, difficulty) => {
          (list.difficulty = difficulty),
            TenThingsSvc.updateList({
              _id: list._id,
              difficulty,
            });
        });
    },
  ]),
  angular.module("app").controller("TenThingsGameCtrl", [
    "$scope",
    "$stateParams",
    "TenThingsSvc",
    function ($scope, $stateParams, TenThingsSvc) {
      $scope.$on("login", (_) => {
        $scope.currentUser.admin && getUsers();
      }),
        $stateParams.game &&
          TenThingsSvc.getGame($stateParams.game).then((response) => {
            ($scope.game = response.data), console.log($scope.game);
          });
    },
  ]),
  angular.module("app").controller("WorkoutCtrl", [
    "$scope",
    function ($scope) {
      ($scope.timeRemaining = 0), ($scope.timeExercising = 30), ($scope.timeResting = 10), ($scope.rest = !1);
      var exercising,
        sounds = {
          on: new Audio("on.wav"),
          off: new Audio("off.wav"),
          switch: new Audio("switch.wav"),
        },
        exercises = [
          {
            name: "Jumping Jacks",
            split: !1,
          },
          {
            name: "Wall Sit",
            split: !1,
          },
          {
            name: "Push-Up",
            split: !1,
          },
          {
            name: "Crunch",
            split: !1,
          },
          {
            name: "Step-Up",
            split: !0,
          },
          {
            name: "Squat",
            split: !1,
          },
          {
            name: "Triceps Dip",
            split: !1,
          },
          {
            name: "Plank",
            split: !1,
          },
          {
            name: "High Knees",
            split: !1,
          },
          {
            name: "Lunge",
            split: !1,
          },
          {
            name: "Push-Up with Rotation",
            split: !1,
          },
          {
            name: "Side Plank",
            split: !0,
          },
        ];
      ($scope.progress = function () {
        return (
          exercises.length -
          Math.floor($scope.timeRemaining / ($scope.timeExercising + $scope.timeResting)) +
          "/" +
          exercises.length
        );
      }),
        ($scope.workout = function () {
          var excerciseTime = $scope.timeExercising + $scope.timeResting;
          $scope.timeRemaining
            ? (clearInterval(exercising),
              ($scope.timer = ""),
              ($scope.timeRemaining = 0),
              ($scope.rest = !1),
              ($scope.exercise = {
                name: "",
                split: !1,
              }))
            : (($scope.timeRemaining = exercises.length * excerciseTime),
              (exercising = setInterval(function () {
                if (($scope.timeRemaining--, 0 === $scope.timeRemaining))
                  return (
                    ($scope.exercise = {
                      name: "Finished! Congrats!",
                      split: !1,
                    }),
                    ($scope.timer = ""),
                    ($scope.timeRemaining = 0),
                    ($scope.rest = !1),
                    $scope.$apply(),
                    clearInterval(exercising)
                  );
                var currentExercise = Math.floor($scope.timeRemaining / excerciseTime),
                  timer = $scope.timeRemaining - currentExercise * excerciseTime;
                ($scope.timer = timer > $scope.timeExercising ? timer - $scope.timeExercising : timer),
                  timer > $scope.timeExercising ? ($scope.rest = !0) : ($scope.rest = !1),
                  ($scope.exercise = exercises[exercises.length - currentExercise - 1]),
                  timer === $scope.timeExercising
                    ? sounds.on.play()
                    : 0 === timer
                    ? sounds.off.play()
                    : $scope.exercise.split && timer === Math.floor($scope.timeExercising / 2) && sounds.switch.play(),
                  $scope.$apply();
              }, 1e3)));
        });
    },
  ]),
  angular.module("app").directive("head", [
    "$rootScope",
    "$state",
    "$compile",
    "$interpolate",
    function ($rootScope, $state, $compile, $interpolate) {
      var getStyle = function (templateStyleUrl) {
        var style = {
          href: templateStyleUrl,
          rel: "stylesheet",
        };
        return style.href.match(/\.less$/) && (style.rel = "stylesheet/less"), style;
      };
      return {
        restrict: "E",
        link: function (scope, elem) {
          scope.templateStyles = [];
          var html = '<link ng-attr-rel="{{style.rel}}" ng-repeat="style in templateStyles" ng-href="{{style.href}}">';
          (html = (html = html.replace(/\{\{/g, $interpolate.startSymbol())).replace(
            /\}\}/g,
            $interpolate.endSymbol()
          )),
            elem.append($compile(html)(scope)),
            $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
              scope.templateStyles = (function (state) {
                for (var states = {}; "" !== state.name; ) {
                  var parent = $state.get("^", state);
                  states[parent.name] || (states[parent.name] = {}),
                    state.templateStyleUrl &&
                      (states[parent.name][""] || (states[parent.name][""] = getStyle(state.templateStyleUrl))),
                    state.views &&
                      _.forEach(state.views, function (view, key) {
                        if (view.templateStyleUrl)
                          return (key = key.split("@"))[1]
                            ? (states[key[1]] || (states[key[1]] = {}),
                              void (
                                states[key[1]][key[0]] || (states[key[1]][key[0]] = getStyle(view.templateStyleUrl))
                              ))
                            : void (states[parent.name][key[0]] = getStyle(view.templateStyleUrl));
                      }),
                    (state = parent);
                }
                var flat = [];
                return (
                  _.forEach(states, function (views) {
                    _.forEach(views, function (style) {
                      _.includes(flat, style) || flat.push(style);
                    });
                  }),
                  flat.reverse(),
                  flat
                );
              })(toState);
            });
        },
      };
    },
  ]),
  angular.module("app").service("CategoriesSvc", [
    "$http",
    function ($http) {
      var svc = this;
      (svc.getCategories = function () {
        return $http.get("/api/categories");
      }),
        (svc.getTasks = function (category) {
          return $http.get("/api/categories/" + category);
        }),
        (svc.addCategory = function (category) {
          return $http.post("/api/categories/", category);
        }),
        (svc.addTask = function (category, task) {
          return $http.post("/api/categories/" + category + "/tasks", task);
        }),
        (svc.setPriorityList = function (list) {
          (svc.choices = list), (svc.priorityList = []);
          for (var i = 0; i < list.length; i++)
            for (var j = i + 1; j < list.length; j++) {
              var random = Math.round(Math.random());
              svc.priorityList.push({
                id: 0,
                firstChoice: list[0 === random ? i : j].name,
                secondChoice: list[0 === random ? j : i].name,
                choice: "",
              });
            }
          for (i in ((function (array) {
            var t,
              i,
              m = array.length;
            for (; m; ) (i = Math.floor(Math.random() * m--)), (t = array[m]), (array[m] = array[i]), (array[i] = t);
          })(svc.priorityList),
          svc.priorityList))
            svc.priorityList[i].id = i + 1;
        }),
        (svc.getPriorityList = function (list) {
          return svc.priorityList;
        });
    },
  ]),
  angular.module("app").service("EmailSvc", [
    "$http",
    function ($http) {
      this.send = function (email) {
        return console.log(email), $http.post("/api/email", email);
      };
    },
  ]),
  angular.module("app").service("FileSvc", [
    "$http",
    function ($http) {
      (this.getImages = function (folder) {
        return $http.get("/api/files/images/" + folder);
      }),
        (this.getSounds = function (folder) {
          return $http.get("/api/files/sounds/" + folder);
        });
    },
  ]),
  angular.module("app").service("GameSvc", [
    "$http",
    function ($http) {
      (this.getHighscore = function (game, user) {
        return $http.get("/api/games/" + game + "/" + user + "/highscore");
      }),
        (this.setHighscore = function (game, user, score) {
          return $http.post("/api/games/" + game + "/" + user + "/highscore", {
            score,
          });
        });
    },
  ]),
  angular.module("app").service("LanguageSvc", function () {
    var svc = this;
    (svc.languages = [
      {
        code: "EN",
        name: "English",
        flag: "flag-icon-gb",
      },
      {
        code: "NL",
        name: "Nederlands",
        flag: "flag-icon-nl",
      },
      {
        code: "FR",
        name: "Français",
        flag: "flag-icon-fr",
      },
    ]),
      (svc.text = [
        {
          code: "EN",
        },
        {
          code: "NL",
        },
        {
          code: "FR",
        },
      ]),
      (svc.selectedLanguage = svc.languages[0]),
      (svc.setLanguage = function (language) {
        return (svc.selectedLanguage = language), language;
      }),
      (svc.getLanguage = function () {
        return svc.selectedLanguage;
      });
  }),
  angular.module("app").service("PostsSvc", [
    "$http",
    function ($http) {
      (this.fetch = function () {
        return $http.get("/api/posts");
      }),
        (this.create = function (post) {
          return $http.post("/api/posts", post);
        }),
        (this.getPost = function (post) {
          return $http.get("/api/posts/" + post._id);
        });
    },
  ]),
  angular.module("app").service("TenThingsSvc", [
    "$http",
    function ($http) {
      var svc = this;
      (svc.getQueue = function () {
        return $http.get("/bots/tenthings/queue");
      }),
        (svc.getLists = function () {
          return $http.get("/api/tenthings/lists");
        }),
        (svc.getCategories = () => $http.get("/api/tenthings/categories")),
        (svc.getLanguages = () => $http.get("/api/tenthings/languages")),
        (svc.getList = function (list) {
          return $http.get("/api/tenthings/lists/" + list._id);
        }),
        (svc.updateList = function (list) {
          return $http.post("/api/tenthings/lists/" + list._id, list);
        }),
        (svc.saveList = function (user, list) {
          return $http.put("/api/tenthings/lists", {
            user,
            list,
          });
        }),
        (svc.reportList = function (user, list) {
          $http.get("/api/tenthings/lists/" + list._id + "/report/" + user._id);
        }),
        (svc.deleteList = function (list) {
          return $http.delete("/api/tenthings/lists/" + list._id);
        }),
        (svc.getBlurbs = function (list, type) {
          return $http.post(`/api/tenthings/lists/${list._id}/blurbs/${type}`);
        }),
        (svc.getPause = function () {
          return $http.get("/api/tenthings/pause");
        }),
        (svc.togglePause = function () {
          return $http.post("/api/tenthings/pause");
        }),
        (svc.getGame = function (id) {
          return $http.get(`/api/tenthings/game/${id}`);
        });
    },
  ]),
  angular.module("app").service("UserSvc", [
    "$http",
    function ($http) {
      var svc = this;
      (svc.getUser = function () {
        return $http.get("/api/users");
      }),
        (svc.getUsers = function () {
          return $http.get("/api/users/all");
        }),
        (svc.toggleBan = function (id) {
          return $http.get(`/api/users/ban/${id}`);
        }),
        (svc.setToken = function (token) {
          return ($http.defaults.headers.common["X-Auth"] = token), svc.getUser();
        }),
        (svc.authenticate = function (user) {
          return $http
            .post("/api/users/authenticate", {
              user,
            })
            .then(function (response) {
              return (window.localStorage.token = response.data), svc.setToken(response.data);
            });
        }),
        (svc.login = function (user) {
          return $http.get("/api/users/" + user + "/login").then(function (response) {
            return (window.localStorage.token = response.data), svc.setToken(response.data);
          });
        }),
        (svc.updateUser = function (user) {
          return $http
            .post("/api/users/" + user._id, {
              user,
            })
            .then(function () {
              return svc.getUser();
            });
        }),
        (svc.checkPassword = function (user, password) {
          return $http.post("/api/users/" + user + "/verification", {
            password,
          });
        }),
        (svc.changePassword = function (user, oldPassword, newPassword) {
          return $http.post("/api/users/" + user + "/password", {
            oldPassword,
            newPassword,
          });
        }),
        (svc.changeUsername = function (user, newUsername) {
          return $http
            .post("/api/users/" + user + "/username", {
              newUsername,
            })
            .then(function () {
              return svc.getUser();
            });
        }),
        (svc.logout = function () {
          window.localStorage.clear(), ($http.defaults.headers.common["X-Auth"] = "");
        }),
        (svc.createUser = function (username, password) {
          return $http
            .post("/api/users", {
              username,
              password,
            })
            .then(function () {
              return svc.login(username, password);
            });
        });
    },
  ]),
  angular.module("app").controller("QuizAnimalsCtrl", [
    "$scope",
    "FileSvc",
    function ($scope, FileSvc) {
      FileSvc.getSounds("animals").then(function (response) {
        $scope.animals = _.shuffle(
          response.data.map((animal) => ({
            sound: animal,
            name: animal.substring(0, animal.indexOf(".")).replace("_", " ").capitalize(),
          }))
        );
        for (let animal of $scope.animals) animal.answers = _.shuffle([animal.name, ...getRandomAnimals(animal.name)]);
        console.log($scope.animals);
      }),
        ($scope.guess = (animal, guess) => {
          animal.guess = guess;
        });
      const getRandomAnimals = (name) =>
        _.shuffle($scope.animals.filter((animal) => name !== animal.name).map((animal) => animal.name)).slice(0, 5);
      ($scope.getScore = () =>
        `${$scope.animals.filter((animal) => animal.name === animal.guess).length}/${$scope.animals.length}`),
        ($scope.isScoreVisible = () =>
          $scope.animals.filter((animal) => animal.guess).length === $scope.animals.length);
    },
  ]),
  angular.module("app").controller("QuizGoogleCtrl", [
    "$scope",
    "FileSvc",
    function ($scope, FileSvc) {
      FileSvc.getImages("google").then(function (response) {
        $scope.images = response.data;
      });
    },
  ]),
  angular.module("app").controller("QuizLogosCtrl", [
    "$scope",
    "FileSvc",
    function ($scope, FileSvc) {
      FileSvc.getImages("logos").then(function (response) {
        $scope.images = response.data;
      });
    },
  ]),
  angular.module("app").controller("QuizMoviesCtrl", [
    "$scope",
    "FileSvc",
    function ($scope, FileSvc) {
      FileSvc.getImages("movies").then(function (response) {
        $scope.images = response.data;
      });
    },
  ]),
  angular.module("app").controller("QuizSkeletonsCtrl", [
    "$scope",
    "FileSvc",
    function ($scope, FileSvc) {
      FileSvc.getImages("skeletons").then(function (response) {
        $scope.animals = _.shuffle(
          response.data.map((animal) => ({
            image: animal,
            name: animal.substring(0, animal.indexOf(".")).replace("_", " ").capitalize(),
          }))
        );
        for (let animal of $scope.animals) animal.answers = _.shuffle([animal.name, ...getRandomAnimals(animal.name)]);
        console.log($scope.animals);
      }),
        ($scope.guess = (animal, guess) => {
          animal.guess = guess;
        });
      const getRandomAnimals = (name) =>
        _.shuffle($scope.animals.filter((animal) => name !== animal.name).map((animal) => animal.name)).slice(0, 10);
      ($scope.getScore = () =>
        `${$scope.animals.filter((animal) => animal.name === animal.guess).length}/${$scope.animals.length}`),
        ($scope.isScoreVisible = () =>
          $scope.animals.filter((animal) => animal.guess).length === $scope.animals.length);
    },
  ]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJhcHAuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiY29udHJvbGxlcnMvYXBwLmN0cmwuanMiLCJjb250cm9sbGVycy9hc3Rlcm9pZHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2J1YmJsZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NoYXJhZGVzLmN0cmwuanMiLCJjb250cm9sbGVycy9jb250YWN0LmN0cmwuanMiLCJjb250cm9sbGVycy9leHBlcmllbmNlLmN0cmwuanMiLCJjb250cm9sbGVycy9ob2JiaWVzLmN0cmwuanMiLCJjb250cm9sbGVycy9sZW1taW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbGlzdHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xvZ2luLmN0cmwuanMiLCJjb250cm9sbGVycy9wb3N0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJpb3JpdGl6ZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJvZmlsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvc2tpbGxzLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3MuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2FkbWluLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NjdXJhdGUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2dhbWUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3dvcmtvdXQuY3RybC5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJzZXJ2aWNlcy9jYXRlZ29yaWVzLnN2Yy5qcyIsInNlcnZpY2VzL2VtYWlsLnN2Yy5qcyIsInNlcnZpY2VzL2ZpbGUuc3ZjLmpzIiwic2VydmljZXMvZ2FtZS5zdmMuanMiLCJzZXJ2aWNlcy9sYW5ndWFnZS5zdmMuanMiLCJzZXJ2aWNlcy9wb3N0cy5zdmMuanMiLCJzZXJ2aWNlcy90ZW50aGluZ3Muc3ZjLmpzIiwic2VydmljZXMvdXNlci5zdmMuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2FuaW1hbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvZ29vZ2xlLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2xvZ29zLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL21vdmllcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9za2VsZXRvbnMuY3RybC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRvbWFpbnMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0cmluZyIsInByb3RvdHlwZSIsInZhbHVlIiwicmVkdWNlIiwicmVzdWx0IiwibGV0dGVyIiwicmVwbGFjZSIsInRoaXMiLCJTUEVDSUFMX0NIQVJBQ1RFUlMiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZURpYWNyaXRpY3MiLCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyIsImV4dHJhIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImZpbmQiLCJyZXBsYWNlU3RyaW5nIiwiaSIsImxlbmd0aCIsInJlcGxhY2VBcnJheSIsIk51bWJlciIsInRvU3RyaW5nIiwiZGVjaW1hbHMiLCJ0b0ZpeGVkIiwiQXJyYXkiLCJuIiwibGVuIiwidGFrZW4iLCJ4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic29ydE9iamVjdCIsIm9iaiIsImRpcmVjdGlvbiIsImFyciIsImtleSIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJvYmpTb3J0ZWQiLCJmb3JFYWNoIiwiaXRlbSIsImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25maWciLCIkc3RhdGVQcm92aWRlciIsIiR1cmxSb3V0ZXJQcm92aWRlciIsIiR1cmxTZXJ2aWNlUHJvdmlkZXIiLCIkbG9jYXRpb25Qcm92aWRlciIsIm90aGVyd2lzZSIsInN0cmljdE1vZGUiLCJzdGF0ZSIsInVybCIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlciIsImh0bWw1TW9kZSIsImVuYWJsZWQiLCJyZXF1aXJlQmFzZSIsInNlcnZpY2UiLCIkcm9vdFNjb3BlIiwiJHRpbWVvdXQiLCJjb25uZWN0aW9uIiwiY29ubmVjdCIsIldlYlNvY2tldCIsIndpbmRvdyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0Iiwib25vcGVuIiwiY29uc29sZSIsImxvZyIsIm9uY2xvc2UiLCJlIiwib25lcnJvciIsInJlYWR5U3RhdGUiLCJvbm1lc3NhZ2UiLCJwYXlsb2FkIiwiSlNPTiIsInBhcnNlIiwiZGF0YSIsIiRicm9hZGNhc3QiLCJ0b3BpYyIsInNlbmQiLCJqc29uIiwic3RyaW5naWZ5IiwicnVuIiwiV2ViU29ja2V0U3ZjIiwiJHNjb3BlIiwiJGxvY2F0aW9uIiwiTGFuZ3VhZ2VTdmMiLCJVc2VyU3ZjIiwibG9naW4iLCJ1c2VyIiwibG9nZ2VkSW4iLCJsb2NhbFN0b3JhZ2UiLCJfaWQiLCJjdXJyZW50VXNlciIsIiQiLCJsb2FkIiwiZmFkZU91dCIsImZhZGVJbiIsInRoZW1lQ291bnRlciIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsImZsaXBUaGVtZSIsInNob3ciLCJoaWRlIiwic2V0VGltZW91dCIsImdldEpTT04iLCJza2lsbHMiLCJmaWx0ZXIiLCJza2lsbCIsImhvYmJpZXMiLCJqb2JzIiwiam9iIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImNoYXJhZGVzIiwiZ2V0VGltZVNwYW4iLCJsYW5ndWFnZXMiLCJzZWxlY3RlZExhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJzZWxlY3RMYW5ndWFnZSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJob3ZlcmRpdiIsImRpdmlkIiwibGVmdCIsImNsaWVudFgiLCJ0b3AiLCJjbGllbnRZIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNzcyIsInRvZ2dsZSIsInNvY2lhbE1lZGlhIiwibmFtZSIsImljb24iLCJ0aGVuIiwicmVzcG9uc2UiLCIkb24iLCJfIiwiYmlydGhEYXRlIiwibG9hZGluZyIsImxvZ291dCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJjbGVhciIsImNhdGNoIiwiZXJyb3IiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImNhcGl0YWxpemUiLCJHYW1lU3ZjIiwiYW5ub3VuY2UiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZm9udCIsImZpbGxTdHlsZSIsInRleHRBbGlnbiIsInNob3RzIiwiYXN0ZXJvaWRzIiwicG93ZXJ1cHMiLCJleHBsb3Npb25zIiwibWFwIiwic3BhY2VwaWNzIiwic3BhY2UiLCJwb3dlcnVwVHlwZXMiLCJhbm5vdW5jZW1lbnQiLCJjeWNsZSIsInJvd3MiLCJjb2x1bW5zIiwic2l6ZSIsImltZyIsIkltYWdlIiwiYWN0aXZhdGUiLCJzcGFjZXNoaXAiLCJtYXhTcGVlZCIsImNvb2xkb3duIiwiY29vbGRvd25UaW1lIiwicmFuZ2UiLCJzaGllbGQiLCJleHBsb2RlIiwic3Bhd25Bc3Rlcm9pZHMiLCJwb3dlcnVwIiwiYXJyYXkiLCJzcmMiLCJleHBsb3Npb25JbWFnZSIsImV2YWx1YXRlS2V5cyIsInBsYXlpbmciLCJzaG9vdCIsInJvdGF0aW9uIiwic3BlZWQiLCJzY29yZSIsIiRhcHBseSIsIlNwYWNlc2hpcCIsImF1dG9TcGF3biIsIndpZHRoIiwiaGVpZ2h0IiwiY2Fubm9uIiwieSIsInBvc2l0aW9uIiwiYW5nbGUiLCJpZCIsInJvdW5kIiwiU2hvdCIsIm1vdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZmlsbCIsImFzdGVyb2lkIiwiaGl0IiwiZ2FtZU92ZXIiLCJjb3MiLCJzaW4iLCJsaWZlc3BhbiIsIkFzdGVyb2lkIiwiZ2V0RW50cnlQb3NpdGlvbiIsInJvdGF0aW9uU3BlZWQiLCJFeHBsb3Npb24iLCJzaG90IiwicG9pbnRzIiwic3Bhd25Qb3dlcnVwIiwib2JqZWN0IiwiUG93ZXJ1cCIsImRlbGF5Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImNvbHVtbiIsInJvdyIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJncmlkWCIsImdyaWRZIiwib2JqZWN0MSIsIm9iamVjdDIiLCJrZXlzIiwiYW1vdW50IiwiaGlnaHNjb3JlIiwic2V0SGlnaHNjb3JlIiwicmVzaXplQ2FudmFzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleUNvZGUiLCJ3aGljaCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXciLCJjbGVhclJlY3QiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwidGFsbHkiLCJmaWxsVGV4dCIsIm1lYXN1cmVUZXh0IiwiYmFja2dyb3VuZEltYWdlIiwiYnViYmxlcyIsImNvbG9ycyIsIkJ1YmJsZSIsInJhZGl1cyIsImV4cGFuZGluZyIsImNpcmN1bWZlcmVuY2UiLCJtYXhSYWRpdXMiLCJ2eCIsInZ5IiwiZmlsdGVyQnViYmxlcyIsImJ1YmJsZSIsInNlbGVjdFdvcmQiLCJjYXRlZ29yeSIsIndvcmQiLCJFbWFpbFN2YyIsIm9wdGlvbnMiLCJ0ZXh0IiwiY29udGFjdCIsImVtYWlsIiwicGhvbmUiLCJhYm91dCIsIm1lc3NhZ2UiLCJzZW5kaW5nIiwic2VudCIsInN0YXR1cyIsImVyciIsImdldFNraWxsIiwic2tpbGxDb2RlIiwiY29kZSIsIiR3aW5kb3ciLCJob2JieVNlbGVjdG9yVmlzaWJsZSIsInNlbGVjdGVkSG9iYnkiLCJzZWxlY3RIb2JieSIsImhvYmJ5Iiwic2hvd0hvYmJ5IiwiaW5kZXgiLCJpbWFnZXMiLCJMRUZUIiwiUklHSFQiLCJsZW1taW5nc0ltYWdlIiwiZGVjb3JJbWFnZSIsImxlbW1pbmdzIiwic3RhcnRlZCIsImFjdGlvbnMiLCJ3YWxrIiwic3RhcnQiLCJlbmQiLCJyZXZlcnNlIiwiaHVoIiwiZmFsbCIsImZseSIsInN0b3AiLCJjbGltYiIsImJ1aWxkIiwicHVuY2giLCJkaWciLCJMZW1taW5nIiwiaW5pdCIsImFjdCIsImFjdGlvbiIsImFuaW1hdGlvbiIsInNjYWxlIiwiaGF0Y2giLCJvcGVuIiwicmVjdCIsIkNhdGVnb3JpZXNTdmMiLCJzaG93Q2F0ZWdvcnkiLCJnZXRDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsInRhc2tzIiwiaiIsInRhc2siLCJzZWxlY3RDYXRlZ29yeSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWxlY3RlZFRhc2tzIiwic2VsZWN0YWJsZVRhc2tzIiwiZW50ZXJlZENhdGVnb3J5IiwibmV3Q2F0ZWdvcnkiLCJmb3VuZCIsImFkZENhdGVnb3J5IiwibmV3VGFzayIsInNlbGVjdFRhc2siLCJhZGRUYXNrIiwiZW50ZXJlZFRhc2siLCJyZW1vdmVUYXNrIiwidW5zZWxlY3RUYXNrIiwidGFza0xpc3QiLCJzcGxpY2UiLCJpbmRleE9mIiwic3RhcnRQcmlvcml0aXppbmciLCJzZXRQcmlvcml0eUxpc3QiLCJwYXRoIiwiZ2V0UXVlc3Rpb25zIiwiY291bnRlciIsInVpIiwiZmlyZWJhc2V1aSIsIkF1dGhVSSIsInN0YXJ0VUkiLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzIiwiY3JlZGVudGlhbCIsInJlZGlyZWN0VXJsIiwiZ2V0SWRUb2tlbiIsImlkVG9rZW4iLCJhdXRoZW50aWNhdGUiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWxWZXJpZmllZCIsIiRlbWl0IiwibW9kYWwiLCJ0eXBlIiwic2lnbkluRmFpbHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY3JlZCIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwidWlTaG93biIsInN0eWxlIiwiZGlzcGxheSIsInNpZ25JblN1Y2Nlc3NVcmwiLCJzaWduSW5PcHRpb25zIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiUFJPVklERVJfSUQiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsInNpZ25JbkZsb3ciLCJldmVudCIsInJlc2V0IiwiJGZpbHRlciIsIlBvc3RzU3ZjIiwiYWRkUG9zdCIsInBvc3RCb2R5IiwiY3JlYXRlIiwiYm9keSIsInBvc3QiLCJmZXRjaCIsInBvc3RzIiwiZ2V0UG9zdCIsInVuc2hpZnQiLCJwcmlvcml0eUxpc3QiLCJnZXRQcmlvcml0eUxpc3QiLCJzZWxlY3RlZFF1ZXN0aW9uIiwiY3VycmVudFF1ZXN0aW9uIiwiZG9uZSIsIm1ha2VDaG9pY2UiLCJjaG9pY2UiLCJmaXJzdENob2ljZSIsInNlY29uZENob2ljZSIsImdldEJ1dHRvblZhbHVlIiwic2VsZWN0UXVlc3Rpb24iLCJxdWVzdGlvbiIsImdldEZpbHRlcmVkUHJpb3JpdHlMaXN0IiwiZ2V0Q2hvaWNlc01hZGUiLCJjaG9pY2VzTWFkZSIsImdldEJ1dHRvbkNsYXNzIiwic2hvd0Nob2ljZXMiLCJjaGFydENsaWNrIiwiY2hhcnQiLCJnZXRTZWdtZW50c0F0RXZlbnQiLCJzaG93UmVzdWx0cyIsInJlc3BvbnNpdmUiLCJzZWdtZW50U2hvd1N0cm9rZSIsInNlZ21lbnRTdHJva2VDb2xvciIsInNlZ21lbnRTdHJva2VXaWR0aCIsInBlcmNlbnRhZ2VJbm5lckN1dG91dCIsImFuaW1hdGlvblN0ZXBzIiwiYW5pbWF0aW9uRWFzaW5nIiwiYW5pbWF0ZVJvdGF0ZSIsImFuaW1hdGVTY2FsZSIsImxlZ2VuZFRlbXBsYXRlIiwiY2hvaWNlcyIsInZvdGVzIiwibGFiZWwiLCJvZmZzZXQiLCJnZW5kZXIiLCJzZXgiLCJpZGVudGl0eSIsInNleGVzIiwiaWRlbnRpdGllcyIsImRhdGVPcHRpb25zIiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJpbml0RGF0ZSIsImRhdGVwaWNrZXJNb2RlIiwicGVyY2VudGFnZSIsInN0YXJ0U2xpZGVyIiwiZHJhZ1NsaWRlciIsInN0b3BTbGlkZXIiLCJ1c2VybmFtZVRvZ2dsZSIsInBhc3N3b3JkVG9nZ2xlIiwidG9nZ2xlVXNlcm5hbWUiLCJuZXdVc2VybmFtZSIsInVzZXJuYW1lIiwidG9nZ2xlUGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImNoZWNrUGFzc3dvcmQiLCJwYXNzd29yZCIsIm9yaWdpbmFsQmciLCJhbmltYXRlIiwiYmFja2dyb3VuZENvbG9yIiwiY2hhbmdlUGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsImNoYW5nZVVzZXJuYW1lIiwidXBkYXRlVXNlciIsIiR3YXRjaCIsImxvYWRDb3VudHJpZXMiLCIkcXVlcnkiLCJmbGFnIiwidGlkYml0IiwiY291bnRyeSIsInNlbGVjdGVkU2tpbGwiLCJza2lsbHNWaXNpYmxlIiwicHJvamVjdHMiLCJsYWJlbHMiLCJlbXBsb3llciIsImNvbmNhdCIsImZpbHRlcmVkUHJvamVjdHMiLCJwcm9qZWN0IiwiaW5jbHVkZXMiLCJzZXRTZWxlY3RlZFNraWxsIiwiY2hhcnRPcHRpb25zIiwiY3V0b3V0UGVyY2VudGFnZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJ0b29sdGlwcyIsImNoYXJ0U3R5bGUiLCJpbWFnZSIsIlRlblRoaW5nc1N2YyIsImZsYXNoIiwiZWxlbWVudCIsImNvbG9yIiwic2VhcmNoIiwidmFsdWVzIiwia2V5RG93biIsImlzIiwiYWRkVmFsdWUiLCJmb2N1cyIsInNlYXJjaE5hbWUiLCJuZXdJdGVtIiwic2V0Q2F0ZWdvcnlGaWx0ZXIiLCJjYXRlZ29yeUZpbHRlciIsInNldFVzZXJGaWx0ZXIiLCJ1c2VyRmlsdGVyIiwic2V0VXBkYXRlRmlsdGVyIiwidXBkYXRlRmlsdGVyIiwic2V0TGFuZ3VhZ2VGaWx0ZXIiLCJsYW5ndWFnZUZpbHRlciIsImZpbHRlcmVkTGlzdHMiLCJsaXN0cyIsImlzRHluYW1pYyIsImNyZWF0b3IiLCJnZXRMaXN0cyIsImNhdGVnb3J5RmlsdGVycyIsImdldExhbmd1YWdlcyIsImxhbmd1YWdlRmlsdGVycyIsImxpc3QiLCJzZWxlY3RMaXN0IiwibGlzdE9yZGVyIiwiZmllbGQiLCJ2YWx1ZU9yZGVyIiwic29ydGVyIiwic29ydEZpZWxkIiwic29ydExhYmVsIiwiZ2V0TGFuZ3VhZ2VDb3VudCIsImNvdW50IiwiZ2V0Q2F0ZWdvcnlDb3VudCIsImdldFVwZGF0ZUNvdW50IiwidXNlckZpbHRlcnMiLCJBbGwiLCJsaXN0MSIsImxpc3QyIiwidXNlcnMiLCJ1c2VyQ291bnQiLCJnZXRMaXN0Iiwic2VsZWN0ZWRMaXN0IiwiZ2V0Q2F0ZWdvcnlDbGFzcyIsInRvZ2dsZUNhdGVnb3J5IiwiY2F0ZWdvcnlJbmRleCIsIm5vbkVuZ2xpc2hJbmRleCIsImFkZExpc3QiLCJjdXJyZW50TGFuZ3VhZ2UiLCJhbnN3ZXJzIiwiaGFzRHVwbGljYXRlIiwic29tZSIsImFuc3dlciIsInJlbW92ZUFsbEJ1dExldHRlcnMiLCJhbGVydCIsImJsdXJiIiwic2F2ZUxpc3QiLCJyZXBvcnRMaXN0IiwicmVwb3J0ZWQiLCJzYXZpbmciLCJkZWxldGVMaXN0IiwiY29uZmlybSIsImxpc3RCdXR0b25DbGFzcyIsImJsdXJicyIsImRlc2NyaXB0aW9uIiwiZ2V0Qmx1cmJzIiwiZ2V0dGluZ0JsdXJicyIsImFkbWluIiwiZ2V0VXNlcnMiLCJvcmRlciIsIm9yZGVyQnkiLCJnZXRRdWV1ZSIsInF1ZXVlIiwiZ2V0UGF1c2UiLCJwYXVzZWQiLCJ0b2dnbGVCYW4iLCJ0b2dnbGVQYXVzZSIsInNldERpZmZpY3VsdHkiLCJkaWZmaWN1bHR5IiwidXBkYXRlTGlzdCIsIiRzdGF0ZVBhcmFtcyIsImdhbWUiLCJnZXRHYW1lIiwidGltZVJlbWFpbmluZyIsInRpbWVFeGVyY2lzaW5nIiwidGltZVJlc3RpbmciLCJyZXN0IiwiZXhlcmNpc2luZyIsInNvdW5kcyIsIm9uIiwiQXVkaW8iLCJvZmYiLCJzd2l0Y2giLCJleGVyY2lzZXMiLCJzcGxpdCIsInByb2dyZXNzIiwid29ya291dCIsImV4Y2VyY2lzZVRpbWUiLCJjbGVhckludGVydmFsIiwidGltZXIiLCJleGVyY2lzZSIsInNldEludGVydmFsIiwiY3VycmVudEV4ZXJjaXNlIiwicGxheSIsImRpcmVjdGl2ZSIsIiRzdGF0ZSIsIiRjb21waWxlIiwiJGludGVycG9sYXRlIiwiZ2V0U3R5bGUiLCJ0ZW1wbGF0ZVN0eWxlVXJsIiwiaHJlZiIsInJlbCIsIm1hdGNoIiwicmVzdHJpY3QiLCJsaW5rIiwic2NvcGUiLCJlbGVtIiwidGVtcGxhdGVTdHlsZXMiLCJodG1sIiwic3RhcnRTeW1ib2wiLCJlbmRTeW1ib2wiLCJhcHBlbmQiLCJ0b1N0YXRlIiwidG9QYXJhbXMiLCJmcm9tU3RhdGUiLCJmcm9tUGFyYW1zIiwic3RhdGVzIiwicGFyZW50IiwiZ2V0Iiwidmlld3MiLCJ2aWV3IiwiZmxhdCIsImdldFN0eWxlcyIsIiRodHRwIiwic3ZjIiwiZ2V0VGFza3MiLCJ0IiwibSIsInNodWZmbGUiLCJnZXRJbWFnZXMiLCJmb2xkZXIiLCJnZXRTb3VuZHMiLCJnZXRIaWdoc2NvcmUiLCJwdXQiLCJkZWxldGUiLCJnZXRVc2VyIiwic2V0VG9rZW4iLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImNyZWF0ZVVzZXIiLCJGaWxlU3ZjIiwiYW5pbWFscyIsImFuaW1hbCIsInNvdW5kIiwic3Vic3RyaW5nIiwiZ2V0UmFuZG9tQW5pbWFscyIsImd1ZXNzIiwiZ2V0U2NvcmUiLCJpc1Njb3JlVmlzaWJsZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQUEsMkJBQUFBLEdBQUEsQ0FDQTtJQUNBQyxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQTtFQUdBQyxPQUFBQSxHQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxDQUFBO0FBR0FDLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsa0JBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFSLDJCQUFBQSxDQUFBUyxNQUFBQSxDQUFBLENBQUFDLE1BQUFBLEVBQUFDLE1BQUFBLEtDQ2FELE1BQUFBLENBQU9FLE9BQUFBLENBQVFELE1BQUFBLENBQU9ULE9BQUFBLEVBQVNTLE1BQUFBLENBQU9WLElBQUFBLENBQUFBLEVEQ25EWSxJQUFBQSxDQ0NFO0VBQUE7QUFBQSxDQUFBLENBQUE7QURHRixNQUFBQyxrQkFBQUEsR0FBQSxxQ0FBQTtBQUVBVixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLHlCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBRCxPQUFBQSxDQUFBLElBQUFHLE1BQUFBLENBQUEsSUFBQUQsa0JBQUFBLEdBQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsRUFBQSxDQ0NFO0VBQUE7QUFBQSxDQUFBLENBQUEsRURHRlYsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxxQkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUcsV0FBQUEsRUFBQUEsQ0FBQUMsZ0JBQUFBLEVBQUFBLENBQUFDLHVCQUFBQSxFQ0NFO0VBQUE7QUFBQSxDQUFBLENBQUEsRURHRmQsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxTQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBVyxLQUFBQSxFQUFBQTtJQUNBLE9BQUFOLElBQUFBLENBQUFELE9BQUFBLENBQUEsSUFBQUcsTUFBQUEsQ0FBQSxLQUFBRCxrQkFBQUEsR0FBQUssS0FBQUEsR0FBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxHQUFBLENDQ0U7RUFBQTtBQUFBLENBQUEsQ0FBQSxFREdGZixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFlBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFPLE1BQUFBLENBQUEsQ0FBQSxDQUFBLENBQUFDLFdBQUFBLEVBQUFBLEdBQUFSLElBQUFBLENBQUFTLEtBQUFBLENBQUEsQ0FBQSxDQ0NFO0VBQUE7QUFBQSxDQUFBLENBQUEsRURHRmxCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsWUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLENBQUFBLE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0NDRTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVER0ZSLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFB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QUFBLEVBQ0FDLGtCQUFBQSxFQUNBQyxtQkFBQUEsRUFDQUMsaUJBQUFBLEVBQUFBO0VBRUFGLGtCQUFBQSxDQUFBRyxTQUFBQSxDQUFBLE9BQUEsQ0FBQSxFQUNBRixtQkFBQUEsQ0FBQUgsTUFBQUEsQ0FBQU0sVUFBQUEsQ0FBQUEsQ0FBQSxDQUFBLENBQUEsRUFFQUwsY0FBQUEsQ0FDQU0sS0FBQUEsQ0FBQSxNQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxPQUFBO0lBQ0FDLFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxRQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FDLFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FDLFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxhQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUUsVUFBQUEsRUFBQSxZQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxXQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxhQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsVUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsV0FBQTtJQUNBRSxVQUFBQSxFQUFBLGNBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE1BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLE9BQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsaUJBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsb0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGtCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxtQkFBQTtJQUNBRSxVQUFBQSxFQUFBLHFCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxtQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsY0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGlCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxhQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFB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QTJDLEtBQUFBLEVBQUEsQ0FBQSxDQUFBO01BQ0F5RCxRQUFBQSxDQUFBRSxZQUFBQSxDQUFBLEdBQUEsRUFBQSxNQUFBLEdBQUEzTyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUEyTyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTVPLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTJPLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBNU8sSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBMk8sS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFDQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FBQSxNQUFBLEVBQUEsTUFBQSxHQUFBM08sSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBMk8sS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE1TyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUEyTyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTVPLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTJPLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FILFFBQUFBLENBQUFFLFlBQUFBLENBQUEsS0FBQSxFQUFBLE1BQUEsR0FBQTNPLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTJPLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBNU8sSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBMk8sS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE1TyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUEyTyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUFBLE1BQUEsRUFBQSxNQUFBLEdBQUEzTyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEyTyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTVPLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQTJPLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBNU8sSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBMk8sS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFDQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQSxHQUFBM08sSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBMk8sS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE1TyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEyTyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTVPLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTJPLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0F0RyxHQUFBQSxDQUFBRyxTQUFBQSxHQUFBZ0csUUFBQUEsRUFDQW5HLEdBQUFBLENBQUFFLElBQUFBLEdBQUEsY0FBQSxFQUNBRixHQUFBQSxDQUFBdUcsUUFBQUEsQ0FBQSxXQUFBLEVBQUF4RyxNQUFBQSxDQUFBMkMsS0FBQUEsR0FBQSxDQUFBLEdBQUExQyxHQUFBQSxDQUFBd0csV0FBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQTlELEtBQUFBLEdBQUEsQ0FBQSxFQUFBM0MsTUFBQUEsQ0FBQTRDLE1BQUFBLEdBQUEsQ0FBQSxDQUFBLEVBQ0EzQyxHQUFBQSxDQUFBRSxJQUFBQSxHQUFBLGNBQUEs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QUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0F4SSxPQUFBQSxFQUFBLENBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EwSSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBQyxHQUFBQSxFQUFBO1FBQ0FILEtBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0F4SSxPQUFBQSxFQUFBLENBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EwSSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBRSxJQUFBQSxFQUFBO1FBQ0FKLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F4SSxPQUFBQSxFQUFBLENBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EwSSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBRyxHQUFBQSxFQUFBO1FBQ0FMLEtBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F4SSxPQUFBQSxFQUFBLENBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EwSSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBSSxJQUFBQSxFQUFBO1FBQ0FOLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F4SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EwSSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBSyxLQUFBQSxFQUFBO1FBQ0FQLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F4SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EwSSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBTSxLQUFBQSxFQUFBO1FBQ0FSLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F4SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EwSSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBTyxLQUFBQSxFQUFBO1FBQ0FULEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F4SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EwSSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBUSxHQUFBQSxFQUFBO1FBQ0FWLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F4SSxPQUFBQSxFQUFBLENBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EwSSxPQUFBQSxFQUFBQSxDQUFBO01BQUE7SUFBQSxDQUFBO0VBSUEsU0FBQVMsT0FBQUEsQ0FBQUMsSUFBQUEsRUFBQUE7SUFDQWpVLElBQUFBLENBQUE0TSxRQUFBQSxHQUFBLENBQUFwTCxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRSxNQUFBQSxFQUFBQSxJQUFBbUksTUFBQUEsQ0FBQTJDLEtBQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEVBQUFoTCxJQUFBQSxDQUFBQyxLQUFBQSxDQUFB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SUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxZQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLHdCQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFVBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsWUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxTQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLGNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsVUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxTQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsT0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxrQkFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxTQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsaUNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsa0NBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsUUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxTQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFFBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsZUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxVQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsUUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxRQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLHlCQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLHVDQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLDBCQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLE9BQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsYUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxlQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLGNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsT0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxVQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLE9BQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsVUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxZQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLE1BQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsWUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxTQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLGtCQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFFBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsZ0JBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsU0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxVQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsVUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxvQkFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxTQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsU0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxPQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLGdCQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsT0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxVQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsTUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSw2QkFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxpQ0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxlQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFFBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsT0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxzREFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxTQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsZUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxVQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLE9BQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsV0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxXQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFFBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsUUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxZQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLG1CQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFFBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsOENBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsV0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxNQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLGVBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsUUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxXQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLG1DQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFVBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsU0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxPQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsV0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxTQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFFBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsYUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxPQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLGdDQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLE1BQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsMkJBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsU0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxPQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFFBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsU0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxRQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLE9BQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsT0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxZQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFVBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsVUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxTQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLHVCQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLHdDQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLG9CQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFFBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsZ0JBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsWUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxrQ0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxTQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLGFBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsZUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxXQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsU0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxXQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFlBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsUUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxPQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsUUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxzQkFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxZQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLDRCQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFlBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsa0JBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsNENBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsTUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxTQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFVBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsT0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSwwQkFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxZQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFlBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsWUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxPQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFdBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsVUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxRQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFFBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsVUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxZQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsZUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxPQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLGdCQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsV0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxhQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFFBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsT0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxPQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLE1BQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsYUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxNQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFFBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsTUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxrQkFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxrQkFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxhQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFVBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsUUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSwyQkFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxVQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLGFBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEscUJBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsVUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxPQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFVBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsT0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxTQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsUUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxvQkFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxRQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLGNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsaUJBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsWUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxPQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFFBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsV0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSw4Q0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxVQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLHdCQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFVBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsY0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxZQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsU0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxVQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLGFBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsdUJBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsYUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSwyQkFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxzQkFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxXQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLDBCQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLE1BQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsNkJBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsTUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxVQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFlBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsU0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxhQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLGNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsU0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxPQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFFBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEscUJBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsUUFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSwyQkFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSw4QkFBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxTQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFFBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsc0NBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsMEJBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsU0FBQTtNQUFBZ1YsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBaFYsSUFBQUEsRUFBQSxZQUFBO01BQUFnVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoVixJQUFBQSxFQUFBLFVBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsa0NBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEsbUNBQUE7TUFBQWdWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhWLElBQUFBLEVBQUEseUJBQUE7TUFBQWdWLElBQUFB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QUFBQSxDQUFBaWYsSUFBQUEsR0FBQUEsQ0FBQSxDQUFBO0VBRUEsSUFzQkFDLFVBQUFBO0lBdEJBQyxNQUFBQSxHQUFBO01BQ0FDLEVBQUFBLEVBQUEsSUFBQUMsS0FBQUEsQ0FBQSxRQUFBLENBQUE7TUFDQUMsR0FBQUEsRUFBQSxJQUFBRCxLQUFBQSxDQUFBLFNBQUEsQ0FBQTtNQUNBRSxNQUFBQSxFQUFBLElBQUFGLEtBQUFBLENBQUEsWUFBQTtJQUFBLENBQUE7SUFJQUcsU0FBQUEsR0FBQSxDQUNBO01BQUFyYyxJQUFBQSxFQUFBLGVBQUE7TUFBQXNjLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQXRjLElBQUFBLEVBQUEsVUFBQTtNQUFBc2MsS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBdGMsSUFBQUEsRUFBQSxTQUFBO01BQUFzYyxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUF0YyxJQUFBQSxFQUFBLFFBQUE7TUFBQXNjLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQXRjLElBQUFBLEVBQUEsU0FBQTtNQUFBc2MsS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBdGMsSUFBQUEsRUFBQSxPQUFBO01BQUFzYyxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUF0YyxJQUFBQSxFQUFBLGFBQUE7TUFBQXNjLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQXRjLElBQUFBLEVBQUEsT0FBQTtNQUFBc2MsS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBdGMsSUFBQUEsRUFBQSxZQUFBO01BQUFzYyxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUF0YyxJQUFBQSxFQUFBLE9BQUE7TUFBQXNjLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQXRjLElBQUFBLEVBQUEsdUJBQUE7TUFBQXNjLEtBQUFBLEVBQUFBLENBQUE7SUFB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QUFBQSxHQUFBLE1BQUEsR0FBQTFqQixNQUFBQSxDQUFBb2pCLE9BQUFBLENBQUEzaEIsTUFBQUEsQ0FBQTRoQixNQUFBQSxJQUFBQSxNQUFBQSxDQUFBbGdCLElBQUFBLEtBQUFrZ0IsTUFBQUEsQ0FBQUksS0FBQUEsQ0FBQUEsQ0FBQWhvQixNQUFBQSxJQUFBdUUsTUFBQUEsQ0FBQW9qQixPQUFBQSxDQUFBM25CLE1BQUFBLEVBQUFBLEVBRUF1RSxNQUFBQSxDQUFBMmpCLGNBQUFBLEdBQUEsTUFBQTNqQixNQUFBQSxDQUFBb2pCLE9BQUFBLENBQUEzaEIsTUFBQUEsQ0FBQTRoQixNQUFBQSxJQUFBQSxNQUFBQSxDQUFBSSxLQUFBQSxDQUFBQSxDQUFBaG9CLE1BQUFBLEtBQUF1RSxNQUFBQSxDQUFBb2pCLE9BQUFBLENBQUEzbkIsTXBDbTZIRTtBQUFBLENBQUEsQ0FBQSxDQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAgPSBbXHJcbiAge1xyXG4gICAgYmFzZTogXCJBXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDFcXHUyNEI2XFx1RkYyMVxcdTAwQzBcXHUwMEMxXFx1MDBDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHUwMEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHUwMEM0XFx1MDFERVxcdTFFQTJcXHUwMEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFBXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFFXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwQzZcXHUwMUZDXFx1MDFFMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQU9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOFxcdUE3M0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0MlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJDXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDNcXHUyNEI4XFx1RkYyM1xcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMEM3XFx1MUUwOFxcdTAxODdcXHUwMjNCXFx1QTczRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ0XFx1MjRCOVxcdUZGMjRcXHUxRTBBXFx1MDEwRVxcdTFFMENcXHUxRTEwXFx1MUUxMlxcdTFFMEVcXHUwMTEwXFx1MDE4QlxcdTAxOEFcXHUwMTg5XFx1QTc3OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMVxcdTAxQzRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjJcXHUwMUM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJFXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDVcXHUyNEJBXFx1RkYyNVxcdTAwQzhcXHUwMEM5XFx1MDBDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHUwMENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ2XFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0N1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJIXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJJXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDlcXHUyNEJFXFx1RkYyOVxcdTAwQ0NcXHUwMENEXFx1MDBDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHUwMENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJKXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEFcXHUyNEJGXFx1RkYyQVxcdTAxMzRcXHUwMjQ4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJLXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNENcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTEpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDREXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRFXFx1MjRDM1xcdUZGMkVcXHUwMUY4XFx1MDE0M1xcdTAwRDFcXHUxRTQ0XFx1MDE0N1xcdTFFNDZcXHUwMTQ1XFx1MUU0QVxcdTFFNDhcXHUwMjIwXFx1MDE5RFxcdUE3OTBcXHVBN0E0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNEZcXHUyNEM0XFx1RkYyRlxcdTAwRDJcXHUwMEQzXFx1MDBENFxcdTFFRDJcXHUxRUQwXFx1MUVENlxcdTFFRDRcXHUwMEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx1MDBENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHUwMEQ4XFx1MDFGRVxcdTAxODZcXHUwMTlGXFx1QTc0QVxcdUE3NENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9JXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9PXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NEVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9VXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAyMjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlBcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1MFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUxXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlJcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1MlxcdTI0QzdcXHVGRjMyXFx1MDE1NFxcdTFFNThcXHUwMTU4XFx1MDIxMFxcdTAyMTJcXHUxRTVBXFx1MUU1Q1xcdTAxNTZcXHUxRTVFXFx1MDI0Q1xcdTJDNjRcXHVBNzVBXFx1QTdBNlxcdUE3ODJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlNcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1M1xcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJUWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJVXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTVcXHUyNENBXFx1RkYzNVxcdTAwRDlcXHUwMERBXFx1MDBEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx1MDBEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIldcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1N1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU4XFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU5XFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx1MDBERFxcdTAxNzZcXHUxRUY4XFx1MDIzMlxcdTFFOEVcXHUwMTc4XFx1MUVGNlxcdTFFRjRcXHUwMUIzXFx1MDI0RVxcdTFFRkVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1QVxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2MVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxcdTAwRTBcXHUwMEUxXFx1MDBFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHUwMEUzXFx1MDEwMVxcdTAxMDNcXHUxRUIxXFx1MUVBRlxcdTFFQjVcXHUxRUIzXFx1MDIyN1xcdTAxRTFcXHUwMEU0XFx1MDFERlxcdTFFQTNcXHUwMEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFhXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFlXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwRTZcXHUwMUZEXFx1MDFFM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYW9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOVxcdUE3M0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0RdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2MlxcdTI0RDFcXHVGRjQyXFx1MUUwM1xcdTFFMDVcXHUxRTA3XFx1MDE4MFxcdTAxODNcXHUwMjUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJjXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjNcXHUyNEQyXFx1RkY0M1xcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHUwMEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjNcXHUwMUM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJlXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjVcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJnXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjdcXHUyNEQ2XFx1RkY0N1xcdTAxRjVcXHUwMTFEXFx1MUUyMVxcdTAxMUZcXHUwMTIxXFx1MDFFN1xcdTAxMjNcXHUwMUU1XFx1MDI2MFxcdUE3QTFcXHUxRDc5XFx1QTc3Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY4XFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImh2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxOTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImlcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2OVxcdTI0RDhcXHVGRjQ5XFx1MDBFQ1xcdTAwRURcXHUwMEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx1MDBFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QVxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJrXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkJcXHUyNERBXFx1RkY0QlxcdTFFMzFcXHUwMUU5XFx1MUUzM1xcdTAxMzdcXHUxRTM1XFx1MDE5OVxcdTJDNkFcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBN0EzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJsXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkNcXHUyNERCXFx1RkY0Q1xcdTAxNDBcXHUwMTNBXFx1MDEzRVxcdTFFMzdcXHUxRTM5XFx1MDEzQ1xcdTFFM0RcXHUxRTNCXFx1MDE3RlxcdTAxNDJcXHUwMTlBXFx1MDI2QlxcdTJDNjFcXHVBNzQ5XFx1QTc4MVxcdUE3NDddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm1cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2RFxcdTI0RENcXHVGRjREXFx1MUUzRlxcdTFFNDFcXHUxRTQzXFx1MDI3MVxcdTAyNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RVxcdTI0RERcXHVGRjRFXFx1MDFGOVxcdTAxNDRcXHUwMEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RlxcdTI0REVcXHVGRjRGXFx1MDBGMlxcdTAwRjNcXHUwMEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxcdTAwRjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHUwMEY2XFx1MDIyQlxcdTFFQ0ZcXHUwMTUxXFx1MDFEMlxcdTAyMERcXHUwMjBGXFx1MDFBMVxcdTFFRERcXHUxRURCXFx1MUVFMVxcdTFFREZcXHUxRUUzXFx1MUVDRFxcdTFFRDlcXHUwMUVCXFx1MDFFRFxcdTAwRjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib2lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib3VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib29cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwicFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDcwXFx1MjRERlxcdUZGNTBcXHUxRTU1XFx1MUU1N1xcdTAxQTVcXHUxRDdEXFx1QTc1MVxcdUE3NTNcXHVBNzU1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJxXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiclwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDcyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwic1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDczXFx1MjRFMlxcdUZGNTNcXHUwMERGXFx1MDE1QlxcdTFFNjVcXHUwMTVEXFx1MUU2MVxcdTAxNjFcXHUxRTY3XFx1MUU2M1xcdTFFNjlcXHUwMjE5XFx1MDE1RlxcdTAyM0ZcXHVBN0E5XFx1QTc4NVxcdTFFOUJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTcyOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDc1XFx1MjRFNFxcdUZGNTVcXHUwMEY5XFx1MDBGQVxcdTAwRkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxcdTAwRkNcXHUwMURDXFx1MDFEOFxcdTAxRDZcXHUwMURBXFx1MUVFN1xcdTAxNkZcXHUwMTcxXFx1MDFENFxcdTAyMTVcXHUwMjE3XFx1MDFCMFxcdTFFRUJcXHUxRUU5XFx1MUVFRlxcdTFFRURcXHUxRUYxXFx1MUVFNVxcdTFFNzNcXHUwMTczXFx1MUU3N1xcdTFFNzVcXHUwMjg5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2eVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzYxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ3XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzdcXHUyNEU2XFx1RkY1N1xcdTFFODFcXHUxRTgzXFx1MDE3NVxcdTFFODdcXHUxRTg1XFx1MUU5OFxcdTFFODlcXHUyQzczXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ4XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzhcXHUyNEU3XFx1RkY1OFxcdTFFOEJcXHUxRThEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzlcXHUyNEU4XFx1RkY1OVxcdTFFRjNcXHUwMEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxcdTAwRkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3QVxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjNdL2csXHJcbiAgfSxcclxuXTtcclxudmFyIGRvbWFpbnMgPSBbXHJcbiAgXCIuY29tXCIsXHJcbiAgXCIub3JnXCIsXHJcbiAgXCIubmV0XCIsXHJcbiAgXCIuYWNcIixcclxuICBcIi5hZFwiLFxyXG4gIFwiLmFlXCIsXHJcbiAgXCIuYWZcIixcclxuICBcIi5hZ1wiLFxyXG4gIFwiLmFpXCIsXHJcbiAgXCIuYWxcIixcclxuICBcIi5hbVwiLFxyXG4gIFwiLmFvXCIsXHJcbiAgXCIuYXFcIixcclxuICBcIi5hclwiLFxyXG4gIFwiLmFzXCIsXHJcbiAgXCIuYXRcIixcclxuICBcIi5hdVwiLFxyXG4gIFwiLmF3XCIsXHJcbiAgXCIuYXhcIixcclxuICBcIi5helwiLFxyXG4gIFwiLmJhXCIsXHJcbiAgXCIuYmJcIixcclxuICBcIi5iZFwiLFxyXG4gIFwiLmJlXCIsXHJcbiAgXCIuYmZcIixcclxuICBcIi5iZ1wiLFxyXG4gIFwiLmJoXCIsXHJcbiAgXCIuYmlcIixcclxuICBcIi5ialwiLFxyXG4gIFwiLmJtXCIsXHJcbiAgXCIuYm5cIixcclxuICBcIi5ib1wiLFxyXG4gIFwiLmJxXCIsXHJcbiAgXCIuYnJcIixcclxuICBcIi5ic1wiLFxyXG4gIFwiLmJ0XCIsXHJcbiAgXCIuYndcIixcclxuICBcIi5ieVwiLFxyXG4gIFwiLmJ6XCIsXHJcbiAgXCIuY2FcIixcclxuICBcIi5jY1wiLFxyXG4gIFwiLmNkXCIsXHJcbiAgXCIuY2ZcIixcclxuICBcIi5jZ1wiLFxyXG4gIFwiLmNoXCIsXHJcbiAgXCIuY2lcIixcclxuICBcIi5ja1wiLFxyXG4gIFwiLmNsXCIsXHJcbiAgXCIuY21cIixcclxuICBcIi5jblwiLFxyXG4gIFwiLmNvXCIsXHJcbiAgXCIuY3JcIixcclxuICBcIi5jdVwiLFxyXG4gIFwiLmN2XCIsXHJcbiAgXCIuY3dcIixcclxuICBcIi5jeFwiLFxyXG4gIFwiLmN5XCIsXHJcbiAgXCIuY3pcIixcclxuICBcIi5kZVwiLFxyXG4gIFwiLmRqXCIsXHJcbiAgXCIuZGtcIixcclxuICBcIi5kbVwiLFxyXG4gIFwiLmRvXCIsXHJcbiAgXCIuZHpcIixcclxuICBcIi5lY1wiLFxyXG4gIFwiLmVlXCIsXHJcbiAgXCIuZWdcIixcclxuICBcIi5laFwiLFxyXG4gIFwiLmVyXCIsXHJcbiAgXCIuZXNcIixcclxuICBcIi5ldFwiLFxyXG4gIFwiLmV1XCIsXHJcbiAgXCIuZmlcIixcclxuICBcIi5malwiLFxyXG4gIFwiLmZrXCIsXHJcbiAgXCIuZm1cIixcclxuICBcIi5mb1wiLFxyXG4gIFwiLmZyXCIsXHJcbiAgXCIuZ2FcIixcclxuICBcIi5nZFwiLFxyXG4gIFwiLmdlXCIsXHJcbiAgXCIuZ2ZcIixcclxuICBcIi5nZ1wiLFxyXG4gIFwiLmdoXCIsXHJcbiAgXCIuZ2lcIixcclxuICBcIi5nbFwiLFxyXG4gIFwiLmdtXCIsXHJcbiAgXCIuZ25cIixcclxuICBcIi5ncFwiLFxyXG4gIFwiLmdxXCIsXHJcbiAgXCIuZ3JcIixcclxuICBcIi5nc1wiLFxyXG4gIFwiLmd0XCIsXHJcbiAgXCIuZ3VcIixcclxuICBcIi5nd1wiLFxyXG4gIFwiLmd5XCIsXHJcbiAgXCIuaGtcIixcclxuICBcIi5obVwiLFxyXG4gIFwiLmhuXCIsXHJcbiAgXCIuaHJcIixcclxuICBcIi5odFwiLFxyXG4gIFwiLmh1XCIsXHJcbiAgXCIuaWRcIixcclxuICBcIi5pZVwiLFxyXG4gIFwiLmlsXCIsXHJcbiAgXCIuaW1cIixcclxuICBcIi5pblwiLFxyXG4gIFwiLmlvXCIsXHJcbiAgXCIuaXFcIixcclxuICBcIi5pclwiLFxyXG4gIFwiLmlzXCIsXHJcbiAgXCIuaXRcIixcclxuICBcIi5qZVwiLFxyXG4gIFwiLmptXCIsXHJcbiAgXCIuam9cIixcclxuICBcIi5qcFwiLFxyXG4gIFwiLmtlXCIsXHJcbiAgXCIua2dcIixcclxuICBcIi5raFwiLFxyXG4gIFwiLmtpXCIsXHJcbiAgXCIua21cIixcclxuICBcIi5rblwiLFxyXG4gIFwiLmtwXCIsXHJcbiAgXCIua3JcIixcclxuICBcIi5rd1wiLFxyXG4gIFwiLmt5XCIsXHJcbiAgXCIua3pcIixcclxuICBcIi5sYVwiLFxyXG4gIFwiLmxiXCIsXHJcbiAgXCIubGNcIixcclxuICBcIi5saVwiLFxyXG4gIFwiLmxrXCIsXHJcbiAgXCIubHJcIixcclxuICBcIi5sc1wiLFxyXG4gIFwiLmx0XCIsXHJcbiAgXCIubHVcIixcclxuICBcIi5sdlwiLFxyXG4gIFwiLmx5XCIsXHJcbiAgXCIubWFcIixcclxuICBcIi5tY1wiLFxyXG4gIFwiLm1kXCIsXHJcbiAgXCIubWVcIixcclxuICBcIi5tZ1wiLFxyXG4gIFwiLm1oXCIsXHJcbiAgXCIubWtcIixcclxuICBcIi5tbFwiLFxyXG4gIFwiLm1tXCIsXHJcbiAgXCIubW5cIixcclxuICBcIi5tb1wiLFxyXG4gIFwiLm1wXCIsXHJcbiAgXCIubXFcIixcclxuICBcIi5tclwiLFxyXG4gIFwiLm1zXCIsXHJcbiAgXCIubXRcIixcclxuICBcIi5tdVwiLFxyXG4gIFwiLm12XCIsXHJcbiAgXCIubXdcIixcclxuICBcIi5teFwiLFxyXG4gIFwiLm15XCIsXHJcbiAgXCIubXpcIixcclxuICBcIi5uYVwiLFxyXG4gIFwiLm5jXCIsXHJcbiAgXCIubmVcIixcclxuICBcIi5uZlwiLFxyXG4gIFwiLm5nXCIsXHJcbiAgXCIubmlcIixcclxuICBcIi5ubFwiLFxyXG4gIFwiLm5vXCIsXHJcbiAgXCIubnBcIixcclxuICBcIi5uclwiLFxyXG4gIFwiLm51XCIsXHJcbiAgXCIubnpcIixcclxuICBcIi5vbVwiLFxyXG4gIFwiLnBhXCIsXHJcbiAgXCIucGVcIixcclxuICBcIi5wZlwiLFxyXG4gIFwiLnBnXCIsXHJcbiAgXCIucGhcIixcclxuICBcIi5wa1wiLFxyXG4gIFwiLnBsXCIsXHJcbiAgXCIucG1cIixcclxuICBcIi5wblwiLFxyXG4gIFwiLnByXCIsXHJcbiAgXCIucHNcIixcclxuICBcIi5wdFwiLFxyXG4gIFwiLnB3XCIsXHJcbiAgXCIucHlcIixcclxuICBcIi5xYVwiLFxyXG4gIFwiLnJlXCIsXHJcbiAgXCIucm9cIixcclxuICBcIi5yc1wiLFxyXG4gIFwiLnJ1XCIsXHJcbiAgXCIucndcIixcclxuICBcIi5zYVwiLFxyXG4gIFwiLnNiXCIsXHJcbiAgXCIuc2NcIixcclxuICBcIi5zZFwiLFxyXG4gIFwiLnNlXCIsXHJcbiAgXCIuc2dcIixcclxuICBcIi5zaFwiLFxyXG4gIFwiLnNpXCIsXHJcbiAgXCIuc2tcIixcclxuICBcIi5zbFwiLFxyXG4gIFwiLnNtXCIsXHJcbiAgXCIuc25cIixcclxuICBcIi5zb1wiLFxyXG4gIFwiLnNyXCIsXHJcbiAgXCIuc3NcIixcclxuICBcIi5zdFwiLFxyXG4gIFwiLnN1XCIsXHJcbiAgXCIuc3ZcIixcclxuICBcIi5zeFwiLFxyXG4gIFwiLnN5XCIsXHJcbiAgXCIuc3pcIixcclxuICBcIi50Y1wiLFxyXG4gIFwiLnRkXCIsXHJcbiAgXCIudGZcIixcclxuICBcIi50Z1wiLFxyXG4gIFwiLnRoXCIsXHJcbiAgXCIudGpcIixcclxuICBcIi50a1wiLFxyXG4gIFwiLnRsXCIsXHJcbiAgXCIudG1cIixcclxuICBcIi50blwiLFxyXG4gIFwiLnRvXCIsXHJcbiAgXCIudHJcIixcclxuICBcIi50dFwiLFxyXG4gIFwiLnR2XCIsXHJcbiAgXCIudHdcIixcclxuICBcIi50elwiLFxyXG4gIFwiLnVhXCIsXHJcbiAgXCIudWdcIixcclxuICBcIi51a1wiLFxyXG4gIFwiLnVzXCIsXHJcbiAgXCIudXlcIixcclxuICBcIi51elwiLFxyXG4gIFwiLnZhXCIsXHJcbiAgXCIudmNcIixcclxuICBcIi52ZVwiLFxyXG4gIFwiLnZnXCIsXHJcbiAgXCIudmlcIixcclxuICBcIi52blwiLFxyXG4gIFwiLnZ1XCIsXHJcbiAgXCIud2ZcIixcclxuICBcIi53c1wiLFxyXG4gIFwiLnllXCIsXHJcbiAgXCIueXRcIixcclxuICBcIi56YVwiLFxyXG4gIFwiLnptXCIsXHJcbiAgXCIuendcIixcclxuXTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZURpYWNyaXRpY3NcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwLnJlZHVjZSgocmVzdWx0LCBsZXR0ZXIpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKGxldHRlci5sZXR0ZXJzLCBsZXR0ZXIuYmFzZSk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IFNQRUNJQUxfQ0hBUkFDVEVSUyA9IFwiXFxcXFxcXFwvICE/QCMkJV4mKigpXys6Lnt9LDtcXFxcLSdgYOKAmeKAmFxcXCJcIjtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbJHtTUEVDSUFMX0NIQVJBQ1RFUlN9XWAsIFwiZ2lcIiksIFwiXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlQWxsQnV0TGV0dGVyc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlKCkucmVtb3ZlRGlhY3JpdGljcygpLnJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzKCk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjb25jZWFsXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGV4dHJhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFteJHtTUEVDSUFMX0NIQVJBQ1RFUlN9JHtleHRyYX1dYCwgXCJnaVwiKSwgXCLigY5cIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjYXBpdGFsaXplXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnNsaWNlKDEpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlSFRNTFwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoXCI+XCIsIFwiXFx1MjI3QlwiKS5yZXBsYWNlKFwiPFwiLCBcIlxcdTIyN0FcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJhbmdsZUJyYWNrZXRzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShcIjxcIiwgXCImbHQ7XCIpLnJlcGxhY2UoXCI+XCIsIFwiJmd0O1wiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlcGxhY2VBcnJheVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChmaW5kLCByZXBsYWNlKSB7XHJcbiAgICB2YXIgcmVwbGFjZVN0cmluZyA9IHRoaXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcmVwbGFjZVN0cmluZyA9IHJlcGxhY2VTdHJpbmcucmVwbGFjZShmaW5kW2ldLCByZXBsYWNlW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXBsYWNlU3RyaW5nO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwibWFza1VSTHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlQXJyYXkoW1wiaHR0cHM6Ly9cIiwgXCJodHRwOi8vXCJdLCBcIm5vcGU6Ly9cIikucmVwbGFjZUFycmF5KGRvbWFpbnMsIFwiLm5vcGVcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJtYWtlUmVhZGFibGVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VQZXJjZW50YWdlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGRlY2ltYWxzKSB7XHJcbiAgICBpZiAoIWRlY2ltYWxzKSBkZWNpbWFscyA9IDI7XHJcbiAgICByZXR1cm4gYCR7KHRoaXMgKiAxMDApLnRvRml4ZWQoZGVjaW1hbHMpfSVgO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSwgXCJnZXRSYW5kb21cIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAobikge1xyXG4gICAgaWYgKG4gPiB0aGlzLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheShuKTtcclxuICAgIGxldCBsZW4gPSB0aGlzLmxlbmd0aDtcclxuICAgIGNvbnN0IHRha2VuID0gbmV3IEFycmF5KGxlbik7XHJcbiAgICB3aGlsZSAobi0tKSB7XHJcbiAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW4pO1xyXG4gICAgICByZXN1bHRbbl0gPSB0aGlzW3ggaW4gdGFrZW4gPyB0YWtlblt4XSA6IHhdO1xyXG4gICAgICB0YWtlblt4XSA9IC0tbGVuIGluIHRha2VuID8gdGFrZW5bbGVuXSA6IGxlbjtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzb3J0T2JqZWN0ID0gKG9iaiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgbGV0IGFyciA9IFtdO1xyXG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgYXJyLnB1c2goW2tleSwgb2JqW2tleV1dKTtcclxuICB9XHJcbiAgYXJyLnNvcnQoKGEsIGIpID0+IChkaXJlY3Rpb24gPyBhWzFdIC0gYlsxXSA6IGJbMV0gLSBhWzFdKSk7XHJcbiAgbGV0IG9ialNvcnRlZCA9IHt9O1xyXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiAob2JqU29ydGVkW2l0ZW1bMF1dID0gaXRlbVsxXSkpO1xyXG4gIC8vYXJyLnNvcnQoZnVuY3Rpb24oYSwgYikgeyBhLnZhbHVlLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLnZhbHVlLnRvTG93ZXJDYXNlKCkpOyB9KTsgLy91c2UgdGhpcyB0byBzb3J0IGFzIHN0cmluZ3NcclxuICByZXR1cm4gb2JqU29ydGVkOyAvLyByZXR1cm5zIGFycmF5XHJcbn07XHJcbiIsInZhciBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXA9W3tiYXNlOlwiQVwiLGxldHRlcnM6L1tcXHUwMDQxXFx1MjRCNlxcdUZGMjFcXHUwMEMwXFx1MDBDMVxcdTAwQzJcXHUxRUE2XFx1MUVBNFxcdTFFQUFcXHUxRUE4XFx1MDBDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx1MDBDNFxcdTAxREVcXHUxRUEyXFx1MDBDNVxcdTAxRkFcXHUwMUNEXFx1MDIwMFxcdTAyMDJcXHUxRUEwXFx1MUVBQ1xcdTFFQjZcXHUxRTAwXFx1MDEwNFxcdTAyM0FcXHUyQzZGXS9nfSx7YmFzZTpcIkFBXCIsbGV0dGVyczovW1xcdUE3MzJdL2d9LHtiYXNlOlwiQUVcIixsZXR0ZXJzOi9bXFx1MDBDNlxcdTAxRkNcXHUwMUUyXS9nfSx7YmFzZTpcIkFPXCIsbGV0dGVyczovW1xcdUE3MzRdL2d9LHtiYXNlOlwiQVVcIixsZXR0ZXJzOi9bXFx1QTczNl0vZ30se2Jhc2U6XCJBVlwiLGxldHRlcnM6L1tcXHVBNzM4XFx1QTczQV0vZ30se2Jhc2U6XCJBWVwiLGxldHRlcnM6L1tcXHVBNzNDXS9nfSx7YmFzZTpcIkJcIixsZXR0ZXJzOi9bXFx1MDA0MlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXS9nfSx7YmFzZTpcIkNcIixsZXR0ZXJzOi9bXFx1MDA0M1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXS9nfSx7YmFzZTpcIkRcIixsZXR0ZXJzOi9bXFx1MDA0NFxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEJcXHUwMThBXFx1MDE4OVxcdUE3NzldL2d9LHtiYXNlOlwiRFpcIixsZXR0ZXJzOi9bXFx1MDFGMVxcdTAxQzRdL2d9LHtiYXNlOlwiRHpcIixsZXR0ZXJzOi9bXFx1MDFGMlxcdTAxQzVdL2d9LHtiYXNlOlwiRVwiLGxldHRlcnM6L1tcXHUwMDQ1XFx1MjRCQVxcdUZGMjVcXHUwMEM4XFx1MDBDOVxcdTAwQ0FcXHUxRUMwXFx1MUVCRVxcdTFFQzRcXHUxRUMyXFx1MUVCQ1xcdTAxMTJcXHUxRTE0XFx1MUUxNlxcdTAxMTRcXHUwMTE2XFx1MDBDQlxcdTFFQkFcXHUwMTFBXFx1MDIwNFxcdTAyMDZcXHUxRUI4XFx1MUVDNlxcdTAyMjhcXHUxRTFDXFx1MDExOFxcdTFFMThcXHUxRTFBXFx1MDE5MFxcdTAxOEVdL2d9LHtiYXNlOlwiRlwiLGxldHRlcnM6L1tcXHUwMDQ2XFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JdL2d9LHtiYXNlOlwiR1wiLGxldHRlcnM6L1tcXHUwMDQ3XFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VdL2d9LHtiYXNlOlwiSFwiLGxldHRlcnM6L1tcXHUwMDQ4XFx1MjRCRFxcdUZGMjhcXHUwMTI0XFx1MUUyMlxcdTFFMjZcXHUwMjFFXFx1MUUyNFxcdTFFMjhcXHUxRTJBXFx1MDEyNlxcdTJDNjdcXHUyQzc1XFx1QTc4RF0vZ30se2Jhc2U6XCJJXCIsbGV0dGVyczovW1xcdTAwNDlcXHUyNEJFXFx1RkYyOVxcdTAwQ0NcXHUwMENEXFx1MDBDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHUwMENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XS9nfSx7YmFzZTpcIkpcIixsZXR0ZXJzOi9bXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhdL2d9LHtiYXNlOlwiS1wiLGxldHRlcnM6L1tcXHUwMDRCXFx1MjRDMFxcdUZGMkJcXHUxRTMwXFx1MDFFOFxcdTFFMzJcXHUwMTM2XFx1MUUzNFxcdTAxOThcXHUyQzY5XFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTdBMl0vZ30se2Jhc2U6XCJMXCIsbGV0dGVyczovW1xcdTAwNENcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MF0vZ30se2Jhc2U6XCJMSlwiLGxldHRlcnM6L1tcXHUwMUM3XS9nfSx7YmFzZTpcIkxqXCIsbGV0dGVyczovW1xcdTAxQzhdL2d9LHtiYXNlOlwiTVwiLGxldHRlcnM6L1tcXHUwMDREXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q10vZ30se2Jhc2U6XCJOXCIsbGV0dGVyczovW1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRdL2d9LHtiYXNlOlwiTkpcIixsZXR0ZXJzOi9bXFx1MDFDQV0vZ30se2Jhc2U6XCJOalwiLGxldHRlcnM6L1tcXHUwMUNCXS9nfSx7YmFzZTpcIk9cIixsZXR0ZXJzOi9bXFx1MDA0RlxcdTI0QzRcXHVGRjJGXFx1MDBEMlxcdTAwRDNcXHUwMEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxcdTAwRDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHUwMEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xcdTAwRDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q10vZ30se2Jhc2U6XCJPSVwiLGxldHRlcnM6L1tcXHUwMUEyXS9nfSx7YmFzZTpcIk9PXCIsbGV0dGVyczovW1xcdUE3NEVdL2d9LHtiYXNlOlwiT1VcIixsZXR0ZXJzOi9bXFx1MDIyMl0vZ30se2Jhc2U6XCJQXCIsbGV0dGVyczovW1xcdTAwNTBcXHUyNEM1XFx1RkYzMFxcdTFFNTRcXHUxRTU2XFx1MDFBNFxcdTJDNjNcXHVBNzUwXFx1QTc1MlxcdUE3NTRdL2d9LHtiYXNlOlwiUVwiLGxldHRlcnM6L1tcXHUwMDUxXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEFdL2d9LHtiYXNlOlwiUlwiLGxldHRlcnM6L1tcXHUwMDUyXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4Ml0vZ30se2Jhc2U6XCJTXCIsbGV0dGVyczovW1xcdTAwNTNcXHUyNEM4XFx1RkYzM1xcdTFFOUVcXHUwMTVBXFx1MUU2NFxcdTAxNUNcXHUxRTYwXFx1MDE2MFxcdTFFNjZcXHUxRTYyXFx1MUU2OFxcdTAyMThcXHUwMTVFXFx1MkM3RVxcdUE3QThcXHVBNzg0XS9nfSx7YmFzZTpcIlRcIixsZXR0ZXJzOi9bXFx1MDA1NFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2XS9nfSx7YmFzZTpcIlRaXCIsbGV0dGVyczovW1xcdUE3MjhdL2d9LHtiYXNlOlwiVVwiLGxldHRlcnM6L1tcXHUwMDU1XFx1MjRDQVxcdUZGMzVcXHUwMEQ5XFx1MDBEQVxcdTAwREJcXHUwMTY4XFx1MUU3OFxcdTAxNkFcXHUxRTdBXFx1MDE2Q1xcdTAwRENcXHUwMURCXFx1MDFEN1xcdTAxRDVcXHUwMUQ5XFx1MUVFNlxcdTAxNkVcXHUwMTcwXFx1MDFEM1xcdTAyMTRcXHUwMjE2XFx1MDFBRlxcdTFFRUFcXHUxRUU4XFx1MUVFRVxcdTFFRUNcXHUxRUYwXFx1MUVFNFxcdTFFNzJcXHUwMTcyXFx1MUU3NlxcdTFFNzRcXHUwMjQ0XS9nfSx7YmFzZTpcIlZcIixsZXR0ZXJzOi9bXFx1MDA1NlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVdL2d9LHtiYXNlOlwiVllcIixsZXR0ZXJzOi9bXFx1QTc2MF0vZ30se2Jhc2U6XCJXXCIsbGV0dGVyczovW1xcdTAwNTdcXHUyNENDXFx1RkYzN1xcdTFFODBcXHUxRTgyXFx1MDE3NFxcdTFFODZcXHUxRTg0XFx1MUU4OFxcdTJDNzJdL2d9LHtiYXNlOlwiWFwiLGxldHRlcnM6L1tcXHUwMDU4XFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q10vZ30se2Jhc2U6XCJZXCIsbGV0dGVyczovW1xcdTAwNTlcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHUwMEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRV0vZ30se2Jhc2U6XCJaXCIsbGV0dGVyczovW1xcdTAwNUFcXHUyNENGXFx1RkYzQVxcdTAxNzlcXHUxRTkwXFx1MDE3QlxcdTAxN0RcXHUxRTkyXFx1MUU5NFxcdTAxQjVcXHUwMjI0XFx1MkM3RlxcdTJDNkJcXHVBNzYyXS9nfSx7YmFzZTpcImFcIixsZXR0ZXJzOi9bXFx1MDA2MVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxcdTAwRTBcXHUwMEUxXFx1MDBFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHUwMEUzXFx1MDEwMVxcdTAxMDNcXHUxRUIxXFx1MUVBRlxcdTFFQjVcXHUxRUIzXFx1MDIyN1xcdTAxRTFcXHUwMEU0XFx1MDFERlxcdTFFQTNcXHUwMEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBdL2d9LHtiYXNlOlwiYWFcIixsZXR0ZXJzOi9bXFx1QTczM10vZ30se2Jhc2U6XCJhZVwiLGxldHRlcnM6L1tcXHUwMEU2XFx1MDFGRFxcdTAxRTNdL2d9LHtiYXNlOlwiYW9cIixsZXR0ZXJzOi9bXFx1QTczNV0vZ30se2Jhc2U6XCJhdVwiLGxldHRlcnM6L1tcXHVBNzM3XS9nfSx7YmFzZTpcImF2XCIsbGV0dGVyczovW1xcdUE3MzlcXHVBNzNCXS9nfSx7YmFzZTpcImF5XCIsbGV0dGVyczovW1xcdUE3M0RdL2d9LHtiYXNlOlwiYlwiLGxldHRlcnM6L1tcXHUwMDYyXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNdL2d9LHtiYXNlOlwiY1wiLGxldHRlcnM6L1tcXHUwMDYzXFx1MjREMlxcdUZGNDNcXHUwMTA3XFx1MDEwOVxcdTAxMEJcXHUwMTBEXFx1MDBFN1xcdTFFMDlcXHUwMTg4XFx1MDIzQ1xcdUE3M0ZcXHUyMTg0XS9nfSx7YmFzZTpcImRcIixsZXR0ZXJzOi9bXFx1MDA2NFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FdL2d9LHtiYXNlOlwiZHpcIixsZXR0ZXJzOi9bXFx1MDFGM1xcdTAxQzZdL2d9LHtiYXNlOlwiZVwiLGxldHRlcnM6L1tcXHUwMDY1XFx1MjRENFxcdUZGNDVcXHUwMEU4XFx1MDBFOVxcdTAwRUFcXHUxRUMxXFx1MUVCRlxcdTFFQzVcXHUxRUMzXFx1MUVCRFxcdTAxMTNcXHUxRTE1XFx1MUUxN1xcdTAxMTVcXHUwMTE3XFx1MDBFQlxcdTFFQkJcXHUwMTFCXFx1MDIwNVxcdTAyMDdcXHUxRUI5XFx1MUVDN1xcdTAyMjlcXHUxRTFEXFx1MDExOVxcdTFFMTlcXHUxRTFCXFx1MDI0N1xcdTAyNUJcXHUwMUREXS9nfSx7YmFzZTpcImZcIixsZXR0ZXJzOi9bXFx1MDA2NlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXS9nfSx7YmFzZTpcImdcIixsZXR0ZXJzOi9bXFx1MDA2N1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXS9nfSx7YmFzZTpcImhcIixsZXR0ZXJzOi9bXFx1MDA2OFxcdTI0RDdcXHVGRjQ4XFx1MDEyNVxcdTFFMjNcXHUxRTI3XFx1MDIxRlxcdTFFMjVcXHUxRTI5XFx1MUUyQlxcdTFFOTZcXHUwMTI3XFx1MkM2OFxcdTJDNzZcXHUwMjY1XS9nfSx7YmFzZTpcImh2XCIsbGV0dGVyczovW1xcdTAxOTVdL2d9LHtiYXNlOlwiaVwiLGxldHRlcnM6L1tcXHUwMDY5XFx1MjREOFxcdUZGNDlcXHUwMEVDXFx1MDBFRFxcdTAwRUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHUwMEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMV0vZ30se2Jhc2U6XCJqXCIsbGV0dGVyczovW1xcdTAwNkFcXHUyNEQ5XFx1RkY0QVxcdTAxMzVcXHUwMUYwXFx1MDI0OV0vZ30se2Jhc2U6XCJrXCIsbGV0dGVyczovW1xcdTAwNkJcXHUyNERBXFx1RkY0QlxcdTFFMzFcXHUwMUU5XFx1MUUzM1xcdTAxMzdcXHUxRTM1XFx1MDE5OVxcdTJDNkFcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBN0EzXS9nfSx7YmFzZTpcImxcIixsZXR0ZXJzOi9bXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N10vZ30se2Jhc2U6XCJsalwiLGxldHRlcnM6L1tcXHUwMUM5XS9nfSx7YmFzZTpcIm1cIixsZXR0ZXJzOi9bXFx1MDA2RFxcdTI0RENcXHVGRjREXFx1MUUzRlxcdTFFNDFcXHUxRTQzXFx1MDI3MVxcdTAyNkZdL2d9LHtiYXNlOlwiblwiLGxldHRlcnM6L1tcXHUwMDZFXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxcdTAwRjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNV0vZ30se2Jhc2U6XCJualwiLGxldHRlcnM6L1tcXHUwMUNDXS9nfSx7YmFzZTpcIm9cIixsZXR0ZXJzOi9bXFx1MDA2RlxcdTI0REVcXHVGRjRGXFx1MDBGMlxcdTAwRjNcXHUwMEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxcdTAwRjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHUwMEY2XFx1MDIyQlxcdTFFQ0ZcXHUwMTUxXFx1MDFEMlxcdTAyMERcXHUwMjBGXFx1MDFBMVxcdTFFRERcXHUxRURCXFx1MUVFMVxcdTFFREZcXHUxRUUzXFx1MUVDRFxcdTFFRDlcXHUwMUVCXFx1MDFFRFxcdTAwRjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NV0vZ30se2Jhc2U6XCJvaVwiLGxldHRlcnM6L1tcXHUwMUEzXS9nfSx7YmFzZTpcIm91XCIsbGV0dGVyczovW1xcdTAyMjNdL2d9LHtiYXNlOlwib29cIixsZXR0ZXJzOi9bXFx1QTc0Rl0vZ30se2Jhc2U6XCJwXCIsbGV0dGVyczovW1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVdL2d9LHtiYXNlOlwicVwiLGxldHRlcnM6L1tcXHUwMDcxXFx1MjRFMFxcdUZGNTFcXHUwMjRCXFx1QTc1N1xcdUE3NTldL2d9LHtiYXNlOlwiclwiLGxldHRlcnM6L1tcXHUwMDcyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M10vZ30se2Jhc2U6XCJzXCIsbGV0dGVyczovW1xcdTAwNzNcXHUyNEUyXFx1RkY1M1xcdTAwREZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5Ql0vZ30se2Jhc2U6XCJ0XCIsbGV0dGVyczovW1xcdTAwNzRcXHUyNEUzXFx1RkY1NFxcdTFFNkJcXHUxRTk3XFx1MDE2NVxcdTFFNkRcXHUwMjFCXFx1MDE2M1xcdTFFNzFcXHUxRTZGXFx1MDE2N1xcdTAxQURcXHUwMjg4XFx1MkM2NlxcdUE3ODddL2d9LHtiYXNlOlwidHpcIixsZXR0ZXJzOi9bXFx1QTcyOV0vZ30se2Jhc2U6XCJ1XCIsbGV0dGVyczovW1xcdTAwNzVcXHUyNEU0XFx1RkY1NVxcdTAwRjlcXHUwMEZBXFx1MDBGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx1MDBGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODldL2d9LHtiYXNlOlwidlwiLGxldHRlcnM6L1tcXHUwMDc2XFx1MjRFNVxcdUZGNTZcXHUxRTdEXFx1MUU3RlxcdTAyOEJcXHVBNzVGXFx1MDI4Q10vZ30se2Jhc2U6XCJ2eVwiLGxldHRlcnM6L1tcXHVBNzYxXS9nfSx7YmFzZTpcIndcIixsZXR0ZXJzOi9bXFx1MDA3N1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNdL2d9LHtiYXNlOlwieFwiLGxldHRlcnM6L1tcXHUwMDc4XFx1MjRFN1xcdUZGNThcXHUxRThCXFx1MUU4RF0vZ30se2Jhc2U6XCJ5XCIsbGV0dGVyczovW1xcdTAwNzlcXHUyNEU4XFx1RkY1OVxcdTFFRjNcXHUwMEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxcdTAwRkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZdL2d9LHtiYXNlOlwielwiLGxldHRlcnM6L1tcXHUwMDdBXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M10vZ31dLGRvbWFpbnM9W1wiLmNvbVwiLFwiLm9yZ1wiLFwiLm5ldFwiLFwiLmFjXCIsXCIuYWRcIixcIi5hZVwiLFwiLmFmXCIsXCIuYWdcIixcIi5haVwiLFwiLmFsXCIsXCIuYW1cIixcIi5hb1wiLFwiLmFxXCIsXCIuYXJcIixcIi5hc1wiLFwiLmF0XCIsXCIuYXVcIixcIi5hd1wiLFwiLmF4XCIsXCIuYXpcIixcIi5iYVwiLFwiLmJiXCIsXCIuYmRcIixcIi5iZVwiLFwiLmJmXCIsXCIuYmdcIixcIi5iaFwiLFwiLmJpXCIsXCIuYmpcIixcIi5ibVwiLFwiLmJuXCIsXCIuYm9cIixcIi5icVwiLFwiLmJyXCIsXCIuYnNcIixcIi5idFwiLFwiLmJ3XCIsXCIuYnlcIixcIi5ielwiLFwiLmNhXCIsXCIuY2NcIixcIi5jZFwiLFwiLmNmXCIsXCIuY2dcIixcIi5jaFwiLFwiLmNpXCIsXCIuY2tcIixcIi5jbFwiLFwiLmNtXCIsXCIuY25cIixcIi5jb1wiLFwiLmNyXCIsXCIuY3VcIixcIi5jdlwiLFwiLmN3XCIsXCIuY3hcIixcIi5jeVwiLFwiLmN6XCIsXCIuZGVcIixcIi5kalwiLFwiLmRrXCIsXCIuZG1cIixcIi5kb1wiLFwiLmR6XCIsXCIuZWNcIixcIi5lZVwiLFwiLmVnXCIsXCIuZWhcIixcIi5lclwiLFwiLmVzXCIsXCIuZXRcIixcIi5ldVwiLFwiLmZpXCIsXCIuZmpcIixcIi5ma1wiLFwiLmZtXCIsXCIuZm9cIixcIi5mclwiLFwiLmdhXCIsXCIuZ2RcIixcIi5nZVwiLFwiLmdmXCIsXCIuZ2dcIixcIi5naFwiLFwiLmdpXCIsXCIuZ2xcIixcIi5nbVwiLFwiLmduXCIsXCIuZ3BcIixcIi5ncVwiLFwiLmdyXCIsXCIuZ3NcIixcIi5ndFwiLFwiLmd1XCIsXCIuZ3dcIixcIi5neVwiLFwiLmhrXCIsXCIuaG1cIixcIi5oblwiLFwiLmhyXCIsXCIuaHRcIixcIi5odVwiLFwiLmlkXCIsXCIuaWVcIixcIi5pbFwiLFwiLmltXCIsXCIuaW5cIixcIi5pb1wiLFwiLmlxXCIsXCIuaXJcIixcIi5pc1wiLFwiLml0XCIsXCIuamVcIixcIi5qbVwiLFwiLmpvXCIsXCIuanBcIixcIi5rZVwiLFwiLmtnXCIsXCIua2hcIixcIi5raVwiLFwiLmttXCIsXCIua25cIixcIi5rcFwiLFwiLmtyXCIsXCIua3dcIixcIi5reVwiLFwiLmt6XCIsXCIubGFcIixcIi5sYlwiLFwiLmxjXCIsXCIubGlcIixcIi5sa1wiLFwiLmxyXCIsXCIubHNcIixcIi5sdFwiLFwiLmx1XCIsXCIubHZcIixcIi5seVwiLFwiLm1hXCIsXCIubWNcIixcIi5tZFwiLFwiLm1lXCIsXCIubWdcIixcIi5taFwiLFwiLm1rXCIsXCIubWxcIixcIi5tbVwiLFwiLm1uXCIsXCIubW9cIixcIi5tcFwiLFwiLm1xXCIsXCIubXJcIixcIi5tc1wiLFwiLm10XCIsXCIubXVcIixcIi5tdlwiLFwiLm13XCIsXCIubXhcIixcIi5teVwiLFwiLm16XCIsXCIubmFcIixcIi5uY1wiLFwiLm5lXCIsXCIubmZcIixcIi5uZ1wiLFwiLm5pXCIsXCIubmxcIixcIi5ub1wiLFwiLm5wXCIsXCIubnJcIixcIi5udVwiLFwiLm56XCIsXCIub21cIixcIi5wYVwiLFwiLnBlXCIsXCIucGZcIixcIi5wZ1wiLFwiLnBoXCIsXCIucGtcIixcIi5wbFwiLFwiLnBtXCIsXCIucG5cIixcIi5wclwiLFwiLnBzXCIsXCIucHRcIixcIi5wd1wiLFwiLnB5XCIsXCIucWFcIixcIi5yZVwiLFwiLnJvXCIsXCIucnNcIixcIi5ydVwiLFwiLnJ3XCIsXCIuc2FcIixcIi5zYlwiLFwiLnNjXCIsXCIuc2RcIixcIi5zZVwiLFwiLnNnXCIsXCIuc2hcIixcIi5zaVwiLFwiLnNrXCIsXCIuc2xcIixcIi5zbVwiLFwiLnNuXCIsXCIuc29cIixcIi5zclwiLFwiLnNzXCIsXCIuc3RcIixcIi5zdVwiLFwiLnN2XCIsXCIuc3hcIixcIi5zeVwiLFwiLnN6XCIsXCIudGNcIixcIi50ZFwiLFwiLnRmXCIsXCIudGdcIixcIi50aFwiLFwiLnRqXCIsXCIudGtcIixcIi50bFwiLFwiLnRtXCIsXCIudG5cIixcIi50b1wiLFwiLnRyXCIsXCIudHRcIixcIi50dlwiLFwiLnR3XCIsXCIudHpcIixcIi51YVwiLFwiLnVnXCIsXCIudWtcIixcIi51c1wiLFwiLnV5XCIsXCIudXpcIixcIi52YVwiLFwiLnZjXCIsXCIudmVcIixcIi52Z1wiLFwiLnZpXCIsXCIudm5cIixcIi52dVwiLFwiLndmXCIsXCIud3NcIixcIi55ZVwiLFwiLnl0XCIsXCIuemFcIixcIi56bVwiLFwiLnp3XCJdO09iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLFwicmVtb3ZlRGlhY3JpdGljc1wiLHt2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAucmVkdWNlKCgocmVzdWx0LGxldHRlcik9PnJlc3VsdC5yZXBsYWNlKGxldHRlci5sZXR0ZXJzLGxldHRlci5iYXNlKSksdGhpcyl9fSk7Y29uc3QgU1BFQ0lBTF9DSEFSQUNURVJTPVwiXFxcXFxcXFwvICE/QCMkJV4mKigpXys6Lnt9LDtcXFxcLSdgYOKAmeKAmFxcXCJcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSxcInJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzXCIse3ZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbJHtTUEVDSUFMX0NIQVJBQ1RFUlN9XWAsXCJnaVwiKSxcIlwiKX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSxcInJlbW92ZUFsbEJ1dExldHRlcnNcIix7dmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50b0xvd2VyQ2FzZSgpLnJlbW92ZURpYWNyaXRpY3MoKS5yZW1vdmVTcGVjaWFsQ2hhcmFjdGVycygpfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLFwiY29uY2VhbFwiLHt2YWx1ZTpmdW5jdGlvbihleHRyYSl7cmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbXiR7U1BFQ0lBTF9DSEFSQUNURVJTfSR7ZXh0cmF9XWAsXCJnaVwiKSxcIuKBjlwiKX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSxcImNhcGl0YWxpemVcIix7dmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt0aGlzLnNsaWNlKDEpfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLFwicmVtb3ZlSFRNTFwiLHt2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJlcGxhY2UoXCI+XCIsXCLiibtcIikucmVwbGFjZShcIjxcIixcIuKJulwiKX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSxcImFuZ2xlQnJhY2tldHNcIix7dmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZXBsYWNlKFwiPFwiLFwiJmx0O1wiKS5yZXBsYWNlKFwiPlwiLFwiJmd0O1wiKX19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSxcInJlcGxhY2VBcnJheVwiLHt2YWx1ZTpmdW5jdGlvbihmaW5kLHJlcGxhY2Upe2Zvcih2YXIgcmVwbGFjZVN0cmluZz10aGlzLGk9MDtpPGZpbmQubGVuZ3RoO2krKylyZXBsYWNlU3RyaW5nPXJlcGxhY2VTdHJpbmcucmVwbGFjZShmaW5kW2ldLHJlcGxhY2VbaV0pO3JldHVybiByZXBsYWNlU3RyaW5nfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLFwibWFza1VSTHNcIix7dmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZXBsYWNlQXJyYXkoW1wiaHR0cHM6Ly9cIixcImh0dHA6Ly9cIl0sXCJub3BlOi8vXCIpLnJlcGxhY2VBcnJheShkb21haW5zLFwiLm5vcGVcIil9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsXCJtYWtlUmVhZGFibGVcIix7dmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csXCIsXCIpfX0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLFwibWFrZVBlcmNlbnRhZ2VcIix7dmFsdWU6ZnVuY3Rpb24oZGVjaW1hbHMpe3JldHVybiBkZWNpbWFsc3x8KGRlY2ltYWxzPTIpLGAkeygxMDAqdGhpcykudG9GaXhlZChkZWNpbWFscyl9JWB9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSxcImdldFJhbmRvbVwiLHt2YWx1ZTpmdW5jdGlvbihuKXtpZihuPnRoaXMubGVuZ3RoKXJldHVybiB0aGlzO2NvbnN0IHJlc3VsdD1uZXcgQXJyYXkobik7bGV0IGxlbj10aGlzLmxlbmd0aDtjb25zdCB0YWtlbj1uZXcgQXJyYXkobGVuKTtmb3IoO24tLTspe2NvbnN0IHg9TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKmxlbik7cmVzdWx0W25dPXRoaXNbeCBpbiB0YWtlbj90YWtlblt4XTp4XSx0YWtlblt4XT0tLWxlbiBpbiB0YWtlbj90YWtlbltsZW5dOmxlbn1yZXR1cm4gcmVzdWx0fX0pO2NvbnN0IHNvcnRPYmplY3Q9KG9iaixkaXJlY3Rpb24pPT57bGV0IGFycj1bXTtmb3IoY29uc3Qga2V5IGluIG9iailhcnIucHVzaChba2V5LG9ialtrZXldXSk7YXJyLnNvcnQoKChhLGIpPT5kaXJlY3Rpb24/YVsxXS1iWzFdOmJbMV0tYVsxXSkpO2xldCBvYmpTb3J0ZWQ9e307cmV0dXJuIGFyci5mb3JFYWNoKChpdGVtPT5vYmpTb3J0ZWRbaXRlbVswXV09aXRlbVsxXSkpLG9ialNvcnRlZH07YW5ndWxhci5tb2R1bGUoXCJhcHBcIixbXCJ1aS5yb3V0ZXJcIixcInVpLmJvb3RzdHJhcFwiLFwibmdBbmltYXRlXCIsXCJuZ1Nhbml0aXplXCIsXCJuZ0RyYWdEcm9wXCIsXCJuZ1RhZ3NJbnB1dFwiLFwidmNSZWNhcHRjaGFcIixcImNoYXJ0LmpzXCIsXCJ0Yy5jaGFydGpzXCJdKSxhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb25maWcoW1wiJHN0YXRlUHJvdmlkZXJcIixcIiR1cmxSb3V0ZXJQcm92aWRlclwiLFwiJHVybFNlcnZpY2VQcm92aWRlclwiLFwiJGxvY2F0aW9uUHJvdmlkZXJcIixmdW5jdGlvbigkc3RhdGVQcm92aWRlciwkdXJsUm91dGVyUHJvdmlkZXIsJHVybFNlcnZpY2VQcm92aWRlciwkbG9jYXRpb25Qcm92aWRlcil7JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcIi9ob21lXCIpLCR1cmxTZXJ2aWNlUHJvdmlkZXIuY29uZmlnLnN0cmljdE1vZGUoITEpLCRzdGF0ZVByb3ZpZGVyLnN0YXRlKFwiaG9tZVwiLHt1cmw6XCIvaG9tZVwiLHRlbXBsYXRlVXJsOlwiL2hvbWUuaHRtbFwifSkuc3RhdGUoXCJwb2xpY3lcIix7dXJsOlwiL3BvbGljeVwiLHRlbXBsYXRlVXJsOlwiL3BvbGljeS5odG1sXCJ9KS5zdGF0ZShcInByaW50XCIse3VybDpcIi9wcmludFwiLHRlbXBsYXRlVXJsOlwiL3ByaW50Lmh0bWxcIn0pLnN0YXRlKFwiZXhwZXJpZW5jZVwiLHt1cmw6XCIvZXhwZXJpZW5jZVwiLGNvbnRyb2xsZXI6XCJFeHBlcmllbmNlQ3RybFwiLHRlbXBsYXRlVXJsOlwiL2V4cGVyaWVuY2UuaHRtbFwifSkuc3RhdGUoXCJza2lsbHNcIix7dXJsOlwiL3NraWxsc1wiLGNvbnRyb2xsZXI6XCJTa2lsbHNDdHJsXCIsdGVtcGxhdGVVcmw6XCIvc2tpbGxzLmh0bWxcIn0pLnN0YXRlKFwiaG9iYmllc1wiLHt1cmw6XCIvaG9iYmllc1wiLGNvbnRyb2xsZXI6XCJIb2JiaWVzQ3RybFwiLHRlbXBsYXRlVXJsOlwiL2hvYmJpZXMuaHRtbFwifSkuc3RhdGUoXCJjb250YWN0XCIse3VybDpcIi9jb250YWN0XCIsY29udHJvbGxlcjpcIkNvbnRhY3RDdHJsXCIsdGVtcGxhdGVVcmw6XCIvY29udGFjdC5odG1sXCJ9KS5zdGF0ZShcIndvcmtvdXRcIix7dXJsOlwiL3dvcmtvdXRcIixjb250cm9sbGVyOlwiV29ya291dEN0cmxcIix0ZW1wbGF0ZVVybDpcIi93b3Jrb3V0Lmh0bWxcIn0pLnN0YXRlKFwicG9zdHNcIix7dXJsOlwiL3Bvc3RzXCIsY29udHJvbGxlcjpcIlBvc3RzQ3RybFwiLHRlbXBsYXRlVXJsOlwiL3Bvc3RzLmh0bWxcIn0pLnN0YXRlKFwicHJvZmlsZVwiLHt1cmw6XCIvcHJvZmlsZVwiLGNvbnRyb2xsZXI6XCJQcm9maWxlQ3RybFwiLHRlbXBsYXRlVXJsOlwiL3Byb2ZpbGUuaHRtbFwifSkuc3RhdGUoXCJsaXN0c1wiLHt1cmw6XCIvbGlzdHNcIixjb250cm9sbGVyOlwiTGlzdHNDdHJsXCIsdGVtcGxhdGVVcmw6XCJsaXN0cy5odG1sXCJ9KS5zdGF0ZShcInByaW9yaXRpemVcIix7dXJsOlwiL3ByaW9yaXRpemVcIixjb250cm9sbGVyOlwiUHJpb3JpdGl6ZUN0cmxcIix0ZW1wbGF0ZVVybDpcInByaW9yaXRpemUuaHRtbFwifSkuc3RhdGUoXCJidWJibGVzXCIse3VybDpcIi9idWJibGVzXCIsY29udHJvbGxlcjpcIkJ1YmJsZXNDdHJsXCIsdGVtcGxhdGVVcmw6XCJidWJibGVzLmh0bWxcIn0pLnN0YXRlKFwiYXN0ZXJvaWRzXCIse3VybDpcIi9hc3Rlcm9pZHNcIixjb250cm9sbGVyOlwiQXN0ZXJvaWRzQ3RybFwiLHRlbXBsYXRlVXJsOlwiYXN0ZXJvaWRzLmh0bWxcIn0pLnN0YXRlKFwibGVtbWluZ3NcIix7dXJsOlwiL2xlbW1pbmdzXCIsY29udHJvbGxlcjpcIkxlbW1pbmdzQ3RybFwiLHRlbXBsYXRlVXJsOlwibGVtbWluZ3MuaHRtbFwifSkuc3RhdGUoXCJib3RzXCIse3VybDpcIi9ib3RzXCIsY29udHJvbGxlcjpcIlRlblRoaW5nc0N0cmxcIix0ZW1wbGF0ZVVybDpcInRlbnRoaW5ncy5odG1sXCJ9KS5zdGF0ZShcInRlbnRoaW5nc1wiLHt1cmw6XCIvdGVudGhpbmdzXCIsY29udHJvbGxlcjpcIlRlblRoaW5nc0N0cmxcIix0ZW1wbGF0ZVVybDpcInRlbnRoaW5ncy5odG1sXCJ9KS5zdGF0ZShcInRlbnRoaW5ncy1hZG1pblwiLHt1cmw6XCIvdGVudGhpbmdzLWFkbWluXCIsY29udHJvbGxlcjpcIlRlblRoaW5nc0FkbWluQ3RybFwiLHRlbXBsYXRlVXJsOlwidGVudGhpbmdzLWFkbWluLmh0bWxcIn0pLnN0YXRlKFwidGVudGhpbmdzLWN1cmF0ZVwiLHt1cmw6XCIvdGVudGhpbmdzLWN1cmF0ZVwiLGNvbnRyb2xsZXI6XCJUZW5UaGluZ3NDdXJhdGVDdHJsXCIsdGVtcGxhdGVVcmw6XCJ0ZW50aGluZ3MtY3VyYXRlLmh0bWxcIn0pLnN0YXRlKFwidGVudGhpbmdzLWdhbWVcIix7dXJsOlwiL3RlbnRoaW5ncy86Z2FtZVwiLGNvbnRyb2xsZXI6XCJUZW5UaGluZ3NHYW1lQ3RybFwiLHRlbXBsYXRlVXJsOlwidGVudGhpbmdzLWdhbWUuaHRtbFwifSkuc3RhdGUoXCJxdWl6LWdvb2dsZVwiLHt1cmw6XCIvZ29vZ2xlXCIsY29udHJvbGxlcjpcIlF1aXpHb29nbGVDdHJsXCIsdGVtcGxhdGVVcmw6XCJxdWl6emVzL2dvb2dsZS5odG1sXCJ9KS5zdGF0ZShcInF1aXotbG9nb3NcIix7dXJsOlwiL2xvZ29zXCIsY29udHJvbGxlcjpcIlF1aXpMb2dvc0N0cmxcIix0ZW1wbGF0ZVVybDpcInF1aXp6ZXMvbG9nb3MuaHRtbFwifSkuc3RhdGUoXCJxdWl6LWFuaW1hbHNcIix7dXJsOlwiL2FuaW1hbHNcIixjb250cm9sbGVyOlwiUXVpekFuaW1hbHNDdHJsXCIsdGVtcGxhdGVVcmw6XCJxdWl6emVzL2FuaW1hbHMuaHRtbFwifSkuc3RhdGUoXCJxdWl6LXNrZWxldG9uc1wiLHt1cmw6XCIvc2tlbGV0b25zXCIsY29udHJvbGxlcjpcIlF1aXpTa2VsZXRvbnNDdHJsXCIsdGVtcGxhdGVVcmw6XCJxdWl6emVzL3NrZWxldG9ucy5odG1sXCJ9KS5zdGF0ZShcInF1aXotbW92aWVzXCIse3VybDpcIi9tb3ZpZXNcIixjb250cm9sbGVyOlwiUXVpek1vdmllc0N0cmxcIix0ZW1wbGF0ZVVybDpcInF1aXp6ZXMvbW92aWVzLmh0bWxcIn0pLnN0YXRlKFwiY2hhcmFkZXNcIix7dXJsOlwiL2NoYXJhZGVzXCIsY29udHJvbGxlcjpcIkNoYXJhZGVzQ3RybFwiLHRlbXBsYXRlVXJsOlwiL2NoYXJhZGVzLmh0bWxcIn0pLCRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7ZW5hYmxlZDohMCxyZXF1aXJlQmFzZTohMX0pfV0pLGFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJXZWJTb2NrZXRTdmNcIixbXCIkcm9vdFNjb3BlXCIsXCIkdGltZW91dFwiLGZ1bmN0aW9uKCRyb290U2NvcGUsJHRpbWVvdXQpe3ZhciBjb25uZWN0aW9uLGNvbm5lY3Q9ZnVuY3Rpb24oKXsoY29ubmVjdGlvbj1uZXcgV2ViU29ja2V0KFwiaHR0cHM6XCI9PT13aW5kb3cubG9jYXRpb24ucHJvdG9jb2w/XCJ3c3M6Ly9cIit3aW5kb3cubG9jYXRpb24uaG9zdDpcIndzOi8vXCIrd2luZG93LmxvY2F0aW9uLmhvc3QpKS5vbm9wZW49ZnVuY3Rpb24oKXtjb25zb2xlLmxvZyhcIldlYnNvY2tldCBjb25uZWN0ZWRcIil9LGNvbm5lY3Rpb24ub25jbG9zZT1mdW5jdGlvbihlKXtjb25zb2xlLmxvZyhcIldlYnNvY2tldCBjbG9zZWQuIFJlY29ubmVjdGluZy4uLlwiKSwkdGltZW91dChjb25uZWN0LDFlMyl9LGNvbm5lY3Rpb24ub25lcnJvcj1mdW5jdGlvbihlKXtjb25zb2xlLmxvZyhcIkVycm9yOiBcIitlK1wiIC0gU3RhdGU6IFwiK2Nvbm5lY3Rpb24ucmVhZHlTdGF0ZSl9LGNvbm5lY3Rpb24ub25tZXNzYWdlPWZ1bmN0aW9uKGUpe3ZhciBwYXlsb2FkPUpTT04ucGFyc2UoZS5kYXRhKTskcm9vdFNjb3BlLiRicm9hZGNhc3QoXCJ3czpcIitwYXlsb2FkLnRvcGljLHBheWxvYWQuZGF0YSl9fTt0aGlzLnNlbmQ9ZnVuY3Rpb24odG9waWMsZGF0YSl7dmFyIGpzb249SlNPTi5zdHJpbmdpZnkoe3RvcGljLGRhdGF9KTtjb25uZWN0aW9uLnNlbmQoanNvbil9LHRoaXMuY29ubmVjdD1jb25uZWN0fV0pLnJ1bihbXCJXZWJTb2NrZXRTdmNcIixmdW5jdGlvbihXZWJTb2NrZXRTdmMpe1dlYlNvY2tldFN2Yy5jb25uZWN0KCl9XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkFwcEN0cmxcIixbXCIkc2NvcGVcIixcIiRsb2NhdGlvblwiLFwiTGFuZ3VhZ2VTdmNcIixcIlVzZXJTdmNcIixmdW5jdGlvbigkc2NvcGUsJGxvY2F0aW9uLExhbmd1YWdlU3ZjLFVzZXJTdmMpe2Z1bmN0aW9uIGxvZ2luKHVzZXIpeyRzY29wZS5sb2dnZWRJbnx8KHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcj11c2VyLl9pZCwkc2NvcGUubG9nZ2VkSW49ITAsJHNjb3BlLmN1cnJlbnRVc2VyPXVzZXIsJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dpblwiKSl9Y29uc29sZS5sb2coXCIlY1lvdSBzbmVha3kgYnVnZ2VyIVwiLFwiZm9udDogMmVtIHNhbnMtc2VyaWY7IGNvbG9yOiBEb2RnZXJCbHVlOyB0ZXh0LXNoYWRvdzogMnB4IDAgMCAjNDQ0LCAtMnB4IDAgMCAjNDQ0LCAwIDJweCAwICM0NDQsIDAgLTJweCAwICM0NDQsIDFweCAxcHggIzQ0NCwgLTFweCAtMXB4IDAgIzQ0NCwgMXB4IC0xcHggMCAjNDQ0LCAtMXB4IDFweCAwICM0NDQ7XCIpLGNvbnNvbGUubG9nKFwiSSdtIGdsYWQgeW91J3JlIGN1cmlvdXMgd2hldGhlciBzb21ldGhpbmcgaXMgcG9wcGluZyB1cCBpbiBoZXJlLiBJJ20gYSBiaXQgb2YgYSBzdGlja2xlciB3aGVuIGl0IGNvbWVzIHRvIG1lc3NhZ2VzIGluIHRoZSBjb25zb2xlIHNvIEkgdHJ5IHRvIG1ha2Ugc3VyZSBvbmx5IHRoaW5ncyBJIHdhbnQgYXJlIHZpc2libGUuIFRoYXQgYmVpbmcgc2FpZCwgaWYgdGhlcmUgaXMgYSBiaWcgZXJyb3IgaGVyZSwgSSB3b3VsZCByZWFsbHkgYXBwcmVjaWF0ZSB5b3UgdGVsbGluZyBtZSBzbyBJIGNhbiBnZXQgcmlkIG9mIGl0IVwiKSxjb25zb2xlLmxvZyhcIlRoZSBjb2RlIGZvciBteSByZXN1bWUgaXMgaG9zdGVkIG9uIEdpdGh1YiBpZiB5b3UgcmVhbGx5IHdhbnQgdG8gZ28gaW50byBhbGwgdGhpcyEgPT4gaHR0cHM6Ly9naXRodWIuY29tL0ZsYW5kZXJzQnVyZ2VyL3Jlc3VtZVwiKSwkKHdpbmRvdykubG9hZCgoZnVuY3Rpb24oKXskKFwiLmxvYWRpbmdcIikuZmFkZU91dChcInNsb3dcIiksJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIil9KSksJHNjb3BlLnRoZW1lQ291bnRlcj02LCRzY29wZS50b2RheT1uZXcgRGF0ZSwkc2NvcGUueWVhcj0kc2NvcGUudG9kYXkuZ2V0RnVsbFllYXIoKSwkc2NvcGUucmFuZG9tPU1hdGguZmxvb3IoMWU2Kk1hdGgucmFuZG9tKCkpLCRzY29wZS5mbGlwVGhlbWU9ZnVuY3Rpb24oKXskKFwiLmxvYWRpbmdcIikuc2hvdygpLCQoXCIuY29udGVudFwiKS5oaWRlKCksc2V0VGltZW91dCgoZnVuY3Rpb24oKXskKFwiLmxvYWRpbmdcIikuZmFkZU91dChcInNsb3dcIiksJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIil9KSw4MDApLCRzY29wZS50aGVtZUNvdW50ZXI9JHNjb3BlLnRoZW1lQ291bnRlcjw2PyRzY29wZS50aGVtZUNvdW50ZXIrMTokc2NvcGUudGhlbWVDb3VudGVyPTF9LCQuZ2V0SlNPTihcIi9za2lsbHMuanNvblwiLChmdW5jdGlvbihkYXRhKXskc2NvcGUuc2tpbGxzPWRhdGEuZmlsdGVyKChmdW5jdGlvbihza2lsbCl7cmV0dXJuIHNraWxsLmVuYWJsZWR9KSl9KSksJC5nZXRKU09OKFwiL2hvYmJpZXMuanNvblwiLChmdW5jdGlvbihkYXRhKXskc2NvcGUuaG9iYmllcz1kYXRhfSkpLCQuZ2V0SlNPTihcIi9leHBlcmllbmNlLmpzb25cIiwoZnVuY3Rpb24oZGF0YSl7JHNjb3BlLmpvYnM9ZGF0YSwkc2NvcGUuam9icy5mb3JFYWNoKChmdW5jdGlvbihqb2Ipe2pvYi5zdGFydERhdGU9bmV3IERhdGUoam9iLnN0YXJ0RGF0ZSksam9iLmVuZERhdGUmJihqb2IuZW5kRGF0ZT1uZXcgRGF0ZShqb2IuZW5kRGF0ZSkpfSkpfSkpLCQuZ2V0SlNPTihcIi9jaGFyYWRlcy5qc29uXCIsKGZ1bmN0aW9uKGRhdGEpeyRzY29wZS5jaGFyYWRlcz1kYXRhfSkpLCRzY29wZS5nZXRUaW1lU3Bhbj1mdW5jdGlvbihqb2Ipe3JldHVybiBqb2Iuc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkrKGpvYi5lbmREYXRlP1wiIC0gXCIram9iLmVuZERhdGUuZ2V0RnVsbFllYXIoKTpcIiAtIFRvZGF5XCIpfSwkc2NvcGUubGFuZ3VhZ2VzPUxhbmd1YWdlU3ZjLmxhbmd1YWdlcywkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZT1MYW5ndWFnZVN2Yy5nZXRMYW5ndWFnZSgpLCRzY29wZS5zZWxlY3RMYW5ndWFnZT1mdW5jdGlvbihsYW5ndWFnZSl7JHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2U9TGFuZ3VhZ2VTdmMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpfSwkc2NvcGUuaG92ZXJkaXY9ZnVuY3Rpb24oZSxkaXZpZCl7dmFyIGxlZnQ9ZS5jbGllbnRYK1wicHhcIix0b3A9ZS5jbGllbnRZKzIwK1wicHhcIjtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZpZCk7cmV0dXJuICQoXCIjXCIrZGl2aWQpLmNzcyhcImxlZnRcIixsZWZ0KSwkKFwiI1wiK2RpdmlkKS5jc3MoXCJ0b3BcIix0b3ApLCQoXCIjXCIrZGl2aWQpLnRvZ2dsZSgpLCExfSwkc2NvcGUuc29jaWFsTWVkaWE9W3tuYW1lOlwiaW5zdGFncmFtXCIsdXJsOlwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9mbGFuZGVyc2J1cmdlci9cIixpY29uOlwiZmEtaW5zdGFncmFtXCJ9LHtuYW1lOlwibGlua2VkaW5cIix1cmw6XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbGF1cmVudC1kZWJhY2tlci0xNjMzYTkxNlwiLGljb246XCJmYS1saW5rZWRpblwifSx7bmFtZTpcImdpdGh1YlwiLHVybDpcImh0dHBzOi8vZ2l0aHViLmNvbS9GbGFuZGVyc0J1cmdlclwiLGljb246XCJmYS1naXRodWJcIn0se25hbWU6XCJqc2ZpZGRsZVwiLHVybDpcImh0dHBzOi8vanNmaWRkbGUubmV0L3VzZXIvQmVsZ29DYW5hZGlhbi9maWRkbGVzL1wiLGljb246XCJmYS1qc2ZpZGRsZVwifSx7bmFtZTpcInN0YWNrb3ZlcmZsb3dcIix1cmw6XCJodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vdXNlcnMvMTA4MzkyMy9iZWxnb2NhbmFkaWFuXCIsaWNvbjpcImZhLXN0YWNrLW92ZXJmbG93XCJ9LHtuYW1lOlwiZ29vZHJlYWRzXCIsdXJsOlwiaHR0cHM6Ly93d3cuZ29vZHJlYWRzLmNvbS91c2VyL3Nob3cvMTcwNzAwMTAtbGF1cmVudFwiLGljb246XCJmYS1nb29kcmVhZHNcIn1dLHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlciYmVXNlclN2Yy5sb2dpbih3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpLnRoZW4oKGZ1bmN0aW9uKHJlc3BvbnNlKXtsb2dpbihyZXNwb25zZS5kYXRhKX0pKSwkc2NvcGUuJG9uKFwibG9naW5cIiwoZnVuY3Rpb24oXyx1c2VyKXtsb2dpbih1c2VyKX0pKSwkc2NvcGUuJG9uKFwidXBkYXRlXCIsKGZ1bmN0aW9uKF8sdXNlcil7JHNjb3BlLmN1cnJlbnRVc2VyPXVzZXIsJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZT1uZXcgRGF0ZSgkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlKSwkc2NvcGUubG9hZGluZz0hMSxzZXRUaW1lb3V0KChmdW5jdGlvbigpeyQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpfSksMWUzKX0pKSwkc2NvcGUuJG9uKFwibG9hZGluZ1wiLChmdW5jdGlvbihfLHVzZXIpeyRzY29wZS5sb2FkaW5nPSEwLCQoXCIjbG9hZGluZy1pY29uXCIpLnNob3coKX0pKSwkc2NvcGUuJG9uKFwibG9hZGVkXCIsKGZ1bmN0aW9uKF8sdXNlcil7JHNjb3BlLmxvYWRpbmc9ITEsc2V0VGltZW91dCgoZnVuY3Rpb24oKXskKFwiI2xvYWRpbmctaWNvblwiKS5mYWRlT3V0KFwic2xvd1wiKX0pLDFlMyl9KSksJHNjb3BlLmxvZ291dD1mdW5jdGlvbigpe2ZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCkudGhlbigoZnVuY3Rpb24oKXskc2NvcGUubG9nZ2VkSW49ITEsd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpLCRzY29wZS4kYnJvYWRjYXN0KFwibG9nb3V0XCIpfSkpLmNhdGNoKChmdW5jdGlvbihlcnJvcil7fSkpfSwkc2NvcGUuZm9ybWF0RGF0ZT1mdW5jdGlvbihkYXRlKXtyZXR1cm4oZGF0ZT1uZXcgRGF0ZShkYXRlKSkuZ2V0RGF0ZSgpK1wiLVwiK1tcIkphblwiLFwiRmViXCIsXCJNYXJcIixcIkFwclwiLFwiTWF5XCIsXCJKdW5cIixcIkp1bFwiLFwiQXVnXCIsXCJTZXBcIixcIk9jdFwiLFwiTm92XCIsXCJEZWNcIl1bZGF0ZS5nZXRNb250aCgpXStcIi1cIitkYXRlLmdldEZ1bGxZZWFyKCl9LFN0cmluZy5wcm90b3R5cGUuY2FwaXRhbGl6ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3RoaXMuc2xpY2UoMSl9fV0pLGFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJBc3Rlcm9pZHNDdHJsXCIsW1wiJHNjb3BlXCIsXCJHYW1lU3ZjXCIsZnVuY3Rpb24oJHNjb3BlLEdhbWVTdmMpeyRzY29wZS5hbm5vdW5jZT0hMTt2YXIgY2FudmFzPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXN0ZXJvaWRzLXBhZ2VcIiksY3R4PWNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7Y3R4LmZvbnQ9XCIzMHB4IENvbWljIFNhbnMgTVNcIixjdHguZmlsbFN0eWxlPVwicmVkXCIsY3R4LnRleHRBbGlnbj1cImNlbnRlclwiO3ZhciBzaG90cz17fSxhc3Rlcm9pZHM9e30scG93ZXJ1cHM9e30sZXhwbG9zaW9ucz17fSxtYXA9e30sc3BhY2VwaWNzPTEwLHNwYWNlPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpzcGFjZXBpY3MpLHBvd2VydXBUeXBlcz1be25hbWU6XCJzcGVlZFwiLGFubm91bmNlbWVudDpcIk1heCBTcGVlZCDih6dcIixjeWNsZTp7cm93czoxLGNvbHVtbnM6NCxzaXplOlsxNCwzNV0saTowLGRpcmVjdGlvbjohMH0saW1nOm5ldyBJbWFnZSxhY3RpdmF0ZTpmdW5jdGlvbihzcGFjZXNoaXApe3NwYWNlc2hpcC5tYXhTcGVlZCs9MTAwfX0se25hbWU6XCJjb29sZG93blwiLGFubm91bmNlbWVudDpcIkNvb2xkb3duIOKHqVwiLGN5Y2xlOntyb3dzOjEsY29sdW1uczozLHNpemU6WzE3LDE3XSxpOjAsZGlyZWN0aW9uOiEwfSxpbWc6bmV3IEltYWdlLGFjdGl2YXRlOmZ1bmN0aW9uKHNwYWNlc2hpcCl7c3BhY2VzaGlwLmNvb2xkb3duPjAmJihzcGFjZXNoaXAuY29vbGRvd25UaW1lLT0xKX19LHtuYW1lOlwicmFuZ2VcIixhbm5vdW5jZW1lbnQ6XCJGaXJpbmcgUmFuZ2Ug4oenXCIsY3ljbGU6e3Jvd3M6NCxjb2x1bW5zOjEsc2l6ZTpbMzAsOF0saTowLGRpcmVjdGlvbjohMH0saW1nOm5ldyBJbWFnZSxhY3RpdmF0ZTpmdW5jdGlvbihzcGFjZXNoaXApe3NwYWNlc2hpcC5yYW5nZSs9NX19LHtuYW1lOlwic2hpZWxkXCIsYW5ub3VuY2VtZW50OlwiU2hpZWxkXCIsY3ljbGU6e3Jvd3M6NSxjb2x1bW5zOjEsc2l6ZTpbMTksMTldLGk6MCxkaXJlY3Rpb246ITB9LGltZzpuZXcgSW1hZ2UsYWN0aXZhdGU6ZnVuY3Rpb24oc3BhY2VzaGlwKXtzcGFjZXNoaXAuc2hpZWxkPSEwfX0se25hbWU6XCJudWtlXCIsYW5ub3VuY2VtZW50OlwiTnVrZVwiLGN5Y2xlOntyb3dzOjEsY29sdW1uczo4LHNpemU6WzE1LDE1XSxpOjAsZGlyZWN0aW9uOiEwfSxpbWc6bmV3IEltYWdlLGFjdGl2YXRlOmZ1bmN0aW9uKHNwYWNlc2hpcCl7Zm9yKHZhciBpIGluIGFzdGVyb2lkcylhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO3NwYXduQXN0ZXJvaWRzKDUpfX1dO3Bvd2VydXBUeXBlcy5mb3JFYWNoKChmdW5jdGlvbihwb3dlcnVwLGksYXJyYXkpe2FycmF5W2ldLmltZy5zcmM9XCJhc3Rlcm9pZHMvXCIrcG93ZXJ1cC5uYW1lK1wiLnBuZ1wifSkpO3ZhciBzcGFjZXNoaXAsZXhwbG9zaW9uSW1hZ2U9bmV3IEltYWdlO2Z1bmN0aW9uIGV2YWx1YXRlS2V5cygpeyRzY29wZS5wbGF5aW5nPyhtYXBbMzJdJiYwPT09c3BhY2VzaGlwLmNvb2xkb3duJiZzcGFjZXNoaXAuc2hvb3QoKSxtYXBbMzddJiYoMD09PXNwYWNlc2hpcC5yb3RhdGlvbj9zcGFjZXNoaXAucm90YXRpb249MzYwOnNwYWNlc2hpcC5yb3RhdGlvbi09MyksbWFwWzM5XSYmKDM2MD09PXNwYWNlc2hpcC5yb3RhdGlvbj9zcGFjZXNoaXAucm90YXRpb249MDpzcGFjZXNoaXAucm90YXRpb24rPTMpLG1hcFszOF0/c3BhY2VzaGlwLnNwZWVkPD1zcGFjZXNoaXAubWF4U3BlZWQmJihzcGFjZXNoaXAuc3BlZWQrPTUpOnNwYWNlc2hpcC5zcGVlZD4wJiZzcGFjZXNoaXAuc3BlZWQtLSxtYXBbNDBdJiZzcGFjZXNoaXAuc3BlZWQ+MCYmKHNwYWNlc2hpcC5zcGVlZC09MikpOm1hcFszMl0mJigkc2NvcGUucGxheWluZz0hMCwkc2NvcGUuc2NvcmU9MCxzcGFjZT1NYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqc3BhY2VwaWNzKSwkc2NvcGUuJGFwcGx5KCksc3BhY2VzaGlwPW5ldyBTcGFjZXNoaXAsJHNjb3BlLnNjb3JlPTAsc3Bhd25Bc3Rlcm9pZHMoNSksYXV0b1NwYXduKCkpfWZ1bmN0aW9uIFNwYWNlc2hpcCgpe3RoaXMud2lkdGg9NTAsdGhpcy5oZWlnaHQ9NTAsdGhpcy5zaGllbGQ9ITEsdGhpcy5yYW5nZT04MCx0aGlzLmNhbm5vbj17eDp0aGlzLndpZHRoLzItNC41LHk6dGhpcy5oZWlnaHQvMi0uMDc4MTI1KnRoaXMuaGVpZ2h0fSx0aGlzLmNvb2xkb3duPTAsdGhpcy5jb29sZG93blRpbWU9MjAsdGhpcy5wb3NpdGlvbj1bY2FudmFzLndpZHRoLzItdGhpcy53aWR0aC8yLGNhbnZhcy5oZWlnaHQvMi10aGlzLmhlaWdodC8yXSx0aGlzLmltZz1uZXcgSW1hZ2UsdGhpcy5pbWcuc3JjPVwiYXN0ZXJvaWRzL3NwYWNlc2hpcC5wbmdcIix0aGlzLnNwZWVkPTAsdGhpcy5tYXhTcGVlZD0xZTMsdGhpcy5hbmdsZT0wLHRoaXMucm90YXRpb249MCx0aGlzLnNob290PWZ1bmN0aW9uKCl7dGhpcy5jb29sZG93bj10aGlzLmNvb2xkb3duVGltZTt2YXIgaWQ9TWF0aC5yb3VuZCgxZTgqTWF0aC5yYW5kb20oKSk7c2hvdHNbaWRdPW5ldyBTaG90KGlkLHRoaXMpfSx0aGlzLm1vdmU9ZnVuY3Rpb24oKXtmb3IodmFyIGkgaW4gdGhpcy5zaGllbGQmJihjdHguYmVnaW5QYXRoKCksY3R4LmFyYyh0aGlzLnBvc2l0aW9uWzBdK3RoaXMud2lkdGgvMix0aGlzLnBvc2l0aW9uWzFdK3RoaXMuaGVpZ2h0LzIsMzAsMCwyKk1hdGguUEkpLGN0eC5maWxsU3R5bGU9XCJyZ2IoMzUsIDIzNywgODYsIDAuNSlcIixjdHguc3Ryb2tlU3R5bGU9XCJyZ2IoNjYsIDE2OCwgMzYsIDAuOClcIixjdHgubGluZVdpZHRoPTUsY3R4LnN0cm9rZSgpLGN0eC5maWxsKCkpLGFzdGVyb2lkcyl7dmFyIGFzdGVyb2lkPWFzdGVyb2lkc1tpXTtpZihoaXQoYXN0ZXJvaWQsdGhpcykpe2lmKCF0aGlzLnNoaWVsZClyZXR1cm4gZ2FtZU92ZXIoKTt0aGlzLnNoaWVsZD0hMSxhc3Rlcm9pZC5leHBsb2RlKCl9fXRoaXMuYW5nbGU9dGhpcy5yb3RhdGlvbix0aGlzLmNvb2xkb3duPjAmJnRoaXMuY29vbGRvd24tLSxtb3ZlKHRoaXMpfX1mdW5jdGlvbiBTaG90KGlkLHNwYWNlc2hpcCl7dGhpcy5pZD1pZCx0aGlzLnBvc2l0aW9uPVtzcGFjZXNoaXAucG9zaXRpb25bMF0rc3BhY2VzaGlwLmNhbm5vbi54K3NwYWNlc2hpcC5jYW5ub24ueCpNYXRoLmNvcygoc3BhY2VzaGlwLnJvdGF0aW9uLTkwKSpNYXRoLlBJLzE4MCksc3BhY2VzaGlwLnBvc2l0aW9uWzFdK3NwYWNlc2hpcC5jYW5ub24ueStzcGFjZXNoaXAuY2Fubm9uLnkqTWF0aC5zaW4oKHNwYWNlc2hpcC5yb3RhdGlvbi05MCkqTWF0aC5QSS8xODApXSx0aGlzLndpZHRoPTksdGhpcy5oZWlnaHQ9MTUsdGhpcy5hbmdsZT1zcGFjZXNoaXAuYW5nbGUsdGhpcy5yb3RhdGlvbj1zcGFjZXNoaXAucm90YXRpb24sdGhpcy5zcGVlZD1zcGFjZXNoaXAuc3BlZWQrNTAwLHRoaXMubGlmZXNwYW49c3BhY2VzaGlwLnJhbmdlLHRoaXMuaW1nPW5ldyBJbWFnZSx0aGlzLmltZy5zcmM9XCJhc3Rlcm9pZHMvc2hvdC5wbmdcIix0aGlzLm1vdmU9ZnVuY3Rpb24oKXt0aGlzLmxpZmVzcGFuLS0sbW92ZSh0aGlzKX19ZnVuY3Rpb24gQXN0ZXJvaWQoaWQpe3RoaXMuaWQ9aWQsdGhpcy53aWR0aD01MCpNYXRoLnJhbmRvbSgpKzIwLHRoaXMuaGVpZ2h0PXRoaXMud2lkdGgsdGhpcy5wb3NpdGlvbj1nZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsdGhpcy5oZWlnaHQpLHRoaXMuYW5nbGU9MzYwKk1hdGgucmFuZG9tKCksdGhpcy5yb3RhdGlvbj0zNjAqTWF0aC5yYW5kb20oKSx0aGlzLnJvdGF0aW9uU3BlZWQ9NipNYXRoLnJhbmRvbSgpLTMsdGhpcy5zcGVlZD0zMDAqTWF0aC5yYW5kb20oKSsyLHRoaXMuaW1nPW5ldyBJbWFnZSx0aGlzLmltZy5zcmM9XCJhc3Rlcm9pZHMvYXN0ZXJvaWRcIisoTWF0aC5yb3VuZCg2Kk1hdGgucmFuZG9tKCkpKzEpK1wiLnBuZ1wiLHRoaXMuZXhwbG9kZT1mdW5jdGlvbigpe3JldHVybiBleHBsb3Npb25zW3RoaXMuaWRdPW5ldyBFeHBsb3Npb24odGhpcyksZGVsZXRlIGFzdGVyb2lkc1t0aGlzLmlkXX0sdGhpcy5tb3ZlPWZ1bmN0aW9uKCl7Zm9yKHZhciBpIGluIHRoaXMucm90YXRpb24rPXRoaXMucm90YXRpb25TcGVlZCx0aGlzLnJvdGF0aW9uPjM2MD90aGlzLnJvdGF0aW9uPXRoaXMucm90YXRpb24tMzYwOnRoaXMucm90YXRpb248MCYmKHRoaXMucm90YXRpb249MzYwK3RoaXMucm90YXRpb24pLHNob3RzKXt2YXIgc2hvdD1zaG90c1tpXTtpZihoaXQoc2hvdCx0aGlzKSl7dGhpcy5leHBsb2RlKCk7dmFyIHBvaW50cz1NYXRoLmZsb29yKChzaG90LnNwZWVkLTUwMCkvMTArNzAtdGhpcy53aWR0aCk7TWF0aC5mbG9vcigocG9pbnRzKyRzY29wZS5zY29yZSkvMTAwKT5NYXRoLmZsb29yKCRzY29wZS5zY29yZS8xMDApJiZzcGF3blBvd2VydXAoKSwkc2NvcGUuc2NvcmUrPXBvaW50cywkc2NvcGUuJGFwcGx5KCksZGVsZXRlIHNob3RzW2ldfX1tb3ZlKHRoaXMpfX1mdW5jdGlvbiBFeHBsb3Npb24ob2JqZWN0KXt0aGlzLnBvc2l0aW9uPVtvYmplY3QucG9zaXRpb25bMF0sb2JqZWN0LnBvc2l0aW9uWzFdXSx0aGlzLndpZHRoPW9iamVjdC53aWR0aCx0aGlzLmhlaWdodD1vYmplY3QuaGVpZ2h0LHRoaXMuc3BlZWQ9MCx0aGlzLmFuZ2xlPTM2MCpNYXRoLnJhbmRvbSgpLHRoaXMuY3ljbGU9e3Jvd3M6Nixjb2x1bW5zOjgsc2l6ZTpbMjU2LDI1Nl0saTowLGRpcmVjdGlvbjohMH0sdGhpcy5saWZlc3Bhbj00Nyx0aGlzLmltZz1leHBsb3Npb25JbWFnZSx0aGlzLm1vdmU9ZnVuY3Rpb24oKXt0aGlzLmxpZmVzcGFuLS0sbW92ZSh0aGlzKSx0aGlzLmN5Y2xlLmRpcmVjdGlvbj90aGlzLmN5Y2xlLmkrKzp0aGlzLmN5Y2xlLmktLX19ZnVuY3Rpb24gUG93ZXJ1cChpZCl7dGhpcy5pZD1pZCx0aGlzLnBvd2VydXA9cG93ZXJ1cFR5cGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpwb3dlcnVwVHlwZXMubGVuZ3RoKV0sdGhpcy5jeWNsZT10aGlzLnBvd2VydXAuY3ljbGUsdGhpcy5saWZlc3Bhbj0xZTMsdGhpcy5jeWNsZS5zaXplWzFdPnRoaXMuY3ljbGUuc2l6ZVswXT8odGhpcy5oZWlnaHQ9NDAsdGhpcy53aWR0aD1NYXRoLnJvdW5kKHRoaXMuaGVpZ2h0L3RoaXMuY3ljbGUuc2l6ZVsxXSp0aGlzLmN5Y2xlLnNpemVbMF0pKToodGhpcy53aWR0aD00MCx0aGlzLmhlaWdodD1NYXRoLnJvdW5kKHRoaXMud2lkdGgvdGhpcy5jeWNsZS5zaXplWzBdKnRoaXMuY3ljbGUuc2l6ZVsxXSkpLHRoaXMucG9zaXRpb249Z2V0RW50cnlQb3NpdGlvbih0aGlzLndpZHRoLHRoaXMuaGVpZ2h0KSx0aGlzLmltZz10aGlzLnBvd2VydXAuaW1nLHRoaXMuYW5nbGU9MzYwKk1hdGgucmFuZG9tKCksdGhpcy5zcGVlZD0xNTAqTWF0aC5yYW5kb20oKSs1MDt2YXIgZGVsYXk9NTt0aGlzLm1vdmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5saWZlc3Bhbjw9MD9kZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF06aGl0KHNwYWNlc2hpcCx0aGlzKT8oJHNjb3BlLmFubm91bmNlPSEwLCRzY29wZS5hbm5vdW5jZW1lbnQ9dGhpcy5wb3dlcnVwLmFubm91bmNlbWVudCwkc2NvcGUuJGFwcGx5KCksc2V0VGltZW91dCgoZnVuY3Rpb24oKXskc2NvcGUuYW5ub3VuY2U9ITEsJHNjb3BlLiRhcHBseSgpfSksMWUzKSx0aGlzLnBvd2VydXAuYWN0aXZhdGUoc3BhY2VzaGlwKSxkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF0pOih0aGlzLmxpZmVzcGFuLS0sbW92ZSh0aGlzKSx2b2lkKGRlbGF5PD0wPyh0aGlzLmN5Y2xlLmRpcmVjdGlvbj90aGlzLmN5Y2xlLmkrKzp0aGlzLmN5Y2xlLmktLSxkZWxheT01KTpkZWxheS0tKSl9fWZ1bmN0aW9uIG1vdmUob2JqZWN0KXtpZihvYmplY3QucG9zaXRpb25bMF0rPW9iamVjdC5zcGVlZC8xMDAqTWF0aC5jb3MoKG9iamVjdC5hbmdsZS05MCkqTWF0aC5QSS8xODApLG9iamVjdC5wb3NpdGlvblsxXSs9b2JqZWN0LnNwZWVkLzEwMCpNYXRoLnNpbigob2JqZWN0LmFuZ2xlLTkwKSpNYXRoLlBJLzE4MCksb2JqZWN0LnBvc2l0aW9uWzBdPmNhbnZhcy53aWR0aD9vYmplY3QucG9zaXRpb25bMF09LW9iamVjdC53aWR0aDpvYmplY3QucG9zaXRpb25bMF08LW9iamVjdC53aWR0aCYmKG9iamVjdC5wb3NpdGlvblswXT1jYW52YXMud2lkdGgpLG9iamVjdC5wb3NpdGlvblsxXT5jYW52YXMuaGVpZ2h0P29iamVjdC5wb3NpdGlvblsxXT0tb2JqZWN0LmhlaWdodDpvYmplY3QucG9zaXRpb25bMV08LW9iamVjdC5oZWlnaHQmJihvYmplY3QucG9zaXRpb25bMV09Y2FudmFzLmhlaWdodCksY3R4LnNhdmUoKSxjdHgudHJhbnNsYXRlKG9iamVjdC5wb3NpdGlvblswXSxvYmplY3QucG9zaXRpb25bMV0pLGN0eC50cmFuc2xhdGUob2JqZWN0LndpZHRoLzIsb2JqZWN0LmhlaWdodC8yKSxjdHgucm90YXRlKG9iamVjdC5yb3RhdGlvbipNYXRoLlBJLzE4MCksb2JqZWN0LmN5Y2xlKXt2YXIgY29sdW1uPW9iamVjdC5jeWNsZS5pJW9iamVjdC5jeWNsZS5jb2x1bW5zLHJvdz1NYXRoLmZsb29yKG9iamVjdC5jeWNsZS5pL29iamVjdC5jeWNsZS5jb2x1bW5zKTtjdHguZHJhd0ltYWdlKG9iamVjdC5pbWcsb2JqZWN0LmN5Y2xlLnNpemVbMF0qY29sdW1uLG9iamVjdC5jeWNsZS5zaXplWzFdKnJvdyxvYmplY3QuY3ljbGUuc2l6ZVswXSxvYmplY3QuY3ljbGUuc2l6ZVsxXSwtb2JqZWN0LndpZHRoLzIsLW9iamVjdC5oZWlnaHQvMixvYmplY3Qud2lkdGgsb2JqZWN0LmhlaWdodCksb2JqZWN0LmN5Y2xlLmk8PTA/KG9iamVjdC5jeWNsZS5pPTAsb2JqZWN0LmN5Y2xlLmRpcmVjdGlvbj0hMCk6b2JqZWN0LmN5Y2xlLmk+PW9iamVjdC5jeWNsZS5jb2x1bW5zKm9iamVjdC5jeWNsZS5yb3dzJiYob2JqZWN0LmN5Y2xlLmk9b2JqZWN0LmN5Y2xlLmNvbHVtbnMqb2JqZWN0LmN5Y2xlLnJvd3MtMSxvYmplY3QuY3ljbGUuZGlyZWN0aW9uPSExKX1lbHNlIGN0eC5kcmF3SW1hZ2Uob2JqZWN0LmltZywtb2JqZWN0LndpZHRoLzIsLW9iamVjdC5oZWlnaHQvMixvYmplY3Qud2lkdGgsb2JqZWN0LmhlaWdodCk7Y3R4LnJlc3RvcmUoKX1mdW5jdGlvbiBnZXRFbnRyeVBvc2l0aW9uKHdpZHRoLGhlaWdodCl7dmFyIHgsZ3JpZFg9MipNYXRoLnJhbmRvbSgpLGdyaWRZPTIqTWF0aC5yYW5kb20oKSx5PTA7cmV0dXJuIGdyaWRYPj0xPyh4PU1hdGgucmFuZG9tKCkqY2FudmFzLndpZHRoLHk9eT49MT8wLWhlaWdodDpjYW52YXMuaGVpZ2h0KTooeT1NYXRoLnJhbmRvbSgpKmNhbnZhcy5oZWlnaHQseD1ncmlkWT49MT8wLXdpZHRoOmNhbnZhcy53aWR0aCksW3gseV19ZnVuY3Rpb24gaGl0KG9iamVjdDEsb2JqZWN0Mil7cmV0dXJuIG9iamVjdDEucG9zaXRpb25bMF08b2JqZWN0Mi5wb3NpdGlvblswXStvYmplY3QyLndpZHRoJiZvYmplY3QyLnBvc2l0aW9uWzBdPG9iamVjdDEucG9zaXRpb25bMF0rb2JqZWN0MS53aWR0aCYmb2JqZWN0MS5wb3NpdGlvblsxXTxvYmplY3QyLnBvc2l0aW9uWzFdK29iamVjdDIuaGVpZ2h0JiZvYmplY3QyLnBvc2l0aW9uWzFdPG9iamVjdDEucG9zaXRpb25bMV0rb2JqZWN0MS5oZWlnaHR9ZnVuY3Rpb24gYXV0b1NwYXduKCl7aWYoT2JqZWN0LmtleXMoYXN0ZXJvaWRzKS5sZW5ndGg8MjAwKXt2YXIgaWQ9TWF0aC5yb3VuZCgxZTgqTWF0aC5yYW5kb20oKSk7YXN0ZXJvaWRzW2lkXT1uZXcgQXN0ZXJvaWQoaWQpfSRzY29wZS5wbGF5aW5nJiZzZXRUaW1lb3V0KChmdW5jdGlvbigpe2F1dG9TcGF3bigpfSksJHNjb3BlLnNjb3JlPDFlMz8xZTM6JHNjb3BlLnNjb3JlPDJlMz85MDA6JHNjb3BlLnNjb3JlPDNlMz84MDA6JHNjb3BlLnNjb3JlPDRlMz83MDA6JHNjb3BlLnNjb3JlPDVlMz82MDA6JHNjb3BlLnNjb3JlPDZlMz81MDA6JHNjb3BlLnNjb3JlPDdlMz80MDA6JHNjb3BlLnNjb3JlPDhlMz8zMDA6MjAwKX1mdW5jdGlvbiBzcGF3bkFzdGVyb2lkcyhhbW91bnQpe3ZhciBpPTA7ZG97dmFyIGlkPU1hdGgucm91bmQoMWU4Kk1hdGgucmFuZG9tKCkpO2FzdGVyb2lkc1tpZF09bmV3IEFzdGVyb2lkKGlkKX13aGlsZShpKys8PWFtb3VudCl9ZnVuY3Rpb24gc3Bhd25Qb3dlcnVwKCl7aWYoT2JqZWN0LmtleXMocG93ZXJ1cHMpLmxlbmd0aDwzKXt2YXIgaWQ9TWF0aC5yb3VuZCgxZTgqTWF0aC5yYW5kb20oKSk7cG93ZXJ1cHNbaWRdPW5ldyBQb3dlcnVwKGlkKX19ZnVuY3Rpb24gZ2FtZU92ZXIoKXtmb3IodmFyIGkgaW4gJHNjb3BlLnBsYXlpbmc9ITEsYXN0ZXJvaWRzKWFzdGVyb2lkc1tpXS5leHBsb2RlKCk7c2hvdHM9e30sJHNjb3BlLmxvZ2dlZEluPyRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzPCRzY29wZS5zY29yZSYmKCRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzPSRzY29wZS5zY29yZSxHYW1lU3ZjLnNldEhpZ2hzY29yZShcImFzdGVyb2lkc1wiLCRzY29wZS5jdXJyZW50VXNlci5faWQsJHNjb3BlLnNjb3JlKSk6JHNjb3BlLmhpZ2hzY29yZTwkc2NvcGUuc2NvcmUmJigkc2NvcGUuaGlnaHNjb3JlPSRzY29wZS5zY29yZSl9ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCl7Y29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpLGNhbnZhcy53aWR0aD13aW5kb3cuaW5uZXJXaWR0aCxjYW52YXMuaGVpZ2h0PXdpbmRvdy5pbm5lckhlaWdodC0oY2FudmFzLndpZHRoPD03Njg/NTA6MTA1KX1leHBsb3Npb25JbWFnZS5zcmM9XCJhc3Rlcm9pZHMvZXhwbG9zaW9uLnBuZ1wiLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLChmdW5jdGlvbihlKXttYXBbZS5rZXlDb2RlfHxlLndoaWNoXT0hMH0pLCEwKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsKGZ1bmN0aW9uKGUpe21hcFtlLmtleUNvZGV8fGUud2hpY2hdPSExfSksITApLCRzY29wZS5oaWdoc2NvcmU9MCx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHJlc2l6ZUNhbnZhcywhMSkscmVzaXplQ2FudmFzKCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKChmdW5jdGlvbiBkcmF3KCl7Zm9yKHZhciBpIGluIGN0eC5jbGVhclJlY3QoMCwwLGNhbnZhcy53aWR0aCxjYW52YXMuaGVpZ2h0KSxzaG90cylzaG90c1tpXS5saWZlc3Bhbjw9MD9kZWxldGUgc2hvdHNbaV06c2hvdHNbaV0ubW92ZSgpO2ZvcihpIGluIGFzdGVyb2lkcylhc3Rlcm9pZHNbaV0ubW92ZSgpO2ZvcihpIGluIHBvd2VydXBzKXBvd2VydXBzW2ldLm1vdmUoKTtmb3IoaSBpbiBleHBsb3Npb25zKWV4cGxvc2lvbnNbaV0ubGlmZXNwYW48PTA/ZGVsZXRlIGV4cGxvc2lvbnNbaV06ZXhwbG9zaW9uc1tpXS5tb3ZlKCk7aWYoZXZhbHVhdGVLZXlzKCksJHNjb3BlLnBsYXlpbmcpc3BhY2VzaGlwLm1vdmUoKTtlbHNle3ZhciBncmFkaWVudD1jdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwwLGNhbnZhcy53aWR0aCwwKTtncmFkaWVudC5hZGRDb2xvclN0b3AoXCIwXCIsXCJyZ2IoXCIrTWF0aC5mbG9vcigyNTYtMjU2KnRhbGx5LzEwMCkrXCIsXCIrTWF0aC5mbG9vcigwKzI1Nip0YWxseS8xMDApK1wiLFwiK01hdGguZmxvb3IoMCsyNTYqdGFsbHkvMTAwKStcIilcIiksZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFwiMC4yNVwiLFwicmdiKFwiK01hdGguZmxvb3IoMCsyNTYqdGFsbHkvMTAwKStcIixcIitNYXRoLmZsb29yKDI1Ni0yNTYqdGFsbHkvMTAwKStcIixcIitNYXRoLmZsb29yKDArMjU2KnRhbGx5LzEwMCkrXCIpXCIpLGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjAuNVwiLFwicmdiKFwiK01hdGguZmxvb3IoMCsyNTYqdGFsbHkvMTAwKStcIixcIitNYXRoLmZsb29yKDArMjU2KnRhbGx5LzEwMCkrXCIsXCIrTWF0aC5mbG9vcigyNTYtMjU2KnRhbGx5LzEwMCkrXCIpXCIpLGdyYWRpZW50LmFkZENvbG9yU3RvcChcIjAuNzVcIixcInJnYihcIitNYXRoLmZsb29yKDArMjU2KnRhbGx5LzEwMCkrXCIsXCIrTWF0aC5mbG9vcigyNTYtMjU2KnRhbGx5LzEwMCkrXCIsXCIrTWF0aC5mbG9vcigwKzI1Nip0YWxseS8xMDApK1wiKVwiKSxncmFkaWVudC5hZGRDb2xvclN0b3AoXCIxLjBcIixcInJnYihcIitNYXRoLmZsb29yKDI1Ni0yNTYqdGFsbHkvMTAwKStcIixcIitNYXRoLmZsb29yKDArMjU2KnRhbGx5LzEwMCkrXCIsXCIrTWF0aC5mbG9vcigwKzI1Nip0YWxseS8xMDApK1wiKVwiKSxjdHguZmlsbFN0eWxlPWdyYWRpZW50LGN0eC5mb250PVwiNjBweCBNb25vdG9uXCIsY3R4LmZpbGxUZXh0KFwiQXN0ZXJvaWRzXCIsY2FudmFzLndpZHRoLzItY3R4Lm1lYXN1cmVUZXh0KFwiQXN0ZXJvaWRzXCIpLndpZHRoLzIsY2FudmFzLmhlaWdodC8yKSxjdHguZm9udD1cIjIwcHggQWxkcmljaFwiLGN0eC5maWxsVGV4dChcIlByZXNzIHNwYWNlIHRvIHN0YXJ0XCIsY2FudmFzLndpZHRoLzItY3R4Lm1lYXN1cmVUZXh0KFwiUHJlc3Mgc3BhY2UgdG8gc3RhcnRcIikud2lkdGgvMixjYW52YXMuaGVpZ2h0LzIrMjApLGN0eC5maWxsVGV4dChcIkRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlclwiLGNhbnZhcy53aWR0aC8yLWN0eC5tZWFzdXJlVGV4dChcIkRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlclwiKS53aWR0aC8yLGNhbnZhcy5oZWlnaHQtMzApfSh0YWxseSs9ZGlyZWN0aW9uPzE6LTEpPjEwMD8odGFsbHk9MTAwLGRpcmVjdGlvbj0hMSk6dGFsbHk8MCYmKHRhbGx5PTAsZGlyZWN0aW9uPSEwKTtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyl9KSk7dmFyIHRhbGx5PTAsZGlyZWN0aW9uPSEwOyRzY29wZS5zcGFjZT1mdW5jdGlvbigpe3JldHVybntiYWNrZ3JvdW5kSW1hZ2U6J3VybChcImFzdGVyb2lkcy9zcGFjZScrc3BhY2UrJy5qcGdcIiknfX19XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkJ1YmJsZXNDdHJsXCIsW1wiJHNjb3BlXCIsZnVuY3Rpb24oJHNjb3BlKXt2YXIgY2FudmFzPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnViYmxlcy1wYWdlXCIpLGN0eD1jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLGJ1YmJsZXM9W10sY29sb3JzPVtcIiNmZmMzMDBcIixcIiNmZjU3MzNcIixcIiNjNzAwMzlcIixcIiM5MDBjM2VcIixcIiM1NzE4NDVcIl07ZnVuY3Rpb24gQnViYmxlKCl7dGhpcy5saWZlc3Bhbj0wLHRoaXMucmFkaXVzPTEsdGhpcy5leHBhbmRpbmc9ITAsdGhpcy5zcGVlZD1NYXRoLnJvdW5kKDMqTWF0aC5yYW5kb20oKSksdGhpcy5jaXJjdW1mZXJlbmNlPU1hdGgucm91bmQoNTAqTWF0aC5yYW5kb20oKSkrNSx0aGlzLm1heFJhZGl1cz1NYXRoLnJvdW5kKDIwMCpNYXRoLnJhbmRvbSgpKSsyMCx0aGlzLng9TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKmNhbnZhcy53aWR0aCksdGhpcy55PU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSpjYW52YXMuaGVpZ2h0KSx0aGlzLnZ4PU1hdGgucmFuZG9tKCk+PS41PzE6LTEsdGhpcy52eT1NYXRoLnJhbmRvbSgpPj0uNT8xOi0xfXJlcXVlc3RBbmltYXRpb25GcmFtZSgoZnVuY3Rpb24gZmlsdGVyQnViYmxlcygpe2J1YmJsZXMucHVzaChuZXcgQnViYmxlKSxidWJibGVzPWJ1YmJsZXMuZmlsdGVyKChmdW5jdGlvbihidWJibGUpe3JldHVybiBidWJibGUucmFkaXVzPT09YnViYmxlLm1heFJhZGl1cyYmKGJ1YmJsZS5leHBhbmRpbmc9ITEpLGJ1YmJsZS54Kz1idWJibGUudngqYnViYmxlLnNwZWVkLGJ1YmJsZS55Kz1idWJibGUudnkqYnViYmxlLnNwZWVkLGJ1YmJsZS5yYWRpdXMrPWJ1YmJsZS5leHBhbmRpbmc/MTotMSxidWJibGUucmFkaXVzPjB9KSksY3R4LmNsZWFyUmVjdCgwLDAsY2FudmFzLndpZHRoLGNhbnZhcy5oZWlnaHQpLGJ1YmJsZXMuZm9yRWFjaCgoZnVuY3Rpb24oYnViYmxlKXtjb2xvcnNbTWF0aC5yb3VuZChjb2xvcnMubGVuZ3RoKmJ1YmJsZS5yYWRpdXMvYnViYmxlLm1heFJhZGl1cyldLGN0eC5iZWdpblBhdGgoKSxjdHguYXJjKGJ1YmJsZS54LGJ1YmJsZS55LGJ1YmJsZS5yYWRpdXMsMCwyKk1hdGguUEkpLGN0eC5maWxsU3R5bGU9Y29sb3JzW01hdGgucm91bmQoY29sb3JzLmxlbmd0aCpidWJibGUucmFkaXVzL2J1YmJsZS5tYXhSYWRpdXMpXSxjdHguZmlsbCgpLGN0eC5zdHJva2VTdHlsZT1jb2xvcnNbY29sb3JzLmxlbmd0aC1NYXRoLnJvdW5kKGNvbG9ycy5sZW5ndGgqYnViYmxlLnJhZGl1cy9idWJibGUubWF4UmFkaXVzKV0sY3R4LmxpbmVXaWR0aD1idWJibGUuY2lyY3VtZmVyZW5jZSpidWJibGUucmFkaXVzL2J1YmJsZS5tYXhSYWRpdXMsY3R4LnN0cm9rZSgpfSkpLHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKX0pKSxmdW5jdGlvbigpe2Z1bmN0aW9uIHJlc2l6ZUNhbnZhcygpe2NhbnZhcy53aWR0aD13aW5kb3cuaW5uZXJXaWR0aCxjYW52YXMuaGVpZ2h0PXdpbmRvdy5pbm5lckhlaWdodC0oY2FudmFzLndpZHRoPD03Njg/NTU6MTExKX13aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHJlc2l6ZUNhbnZhcywhMSkscmVzaXplQ2FudmFzKCl9KCl9XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkNoYXJhZGVzQ3RybFwiLFtcIiRzY29wZVwiLGZ1bmN0aW9uKCRzY29wZSl7JHNjb3BlLnNlbGVjdFdvcmQ9Y2F0ZWdvcnk9Pnskc2NvcGUud29yZD0kc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSokc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldLmxlbmd0aCldLGNvbnNvbGUubG9nKCRzY29wZS53b3JkKX19XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkNvbnRhY3RDdHJsXCIsW1wiJHNjb3BlXCIsXCJFbWFpbFN2Y1wiLGZ1bmN0aW9uKCRzY29wZSxFbWFpbFN2Yyl7JHNjb3BlLm9wdGlvbnM9W3tuYW1lOlwiU3BhbVwiLHRleHQ6XCJJIGFtIGEgc3BhbSBib3QgYW5kIGF1dG9tYXRpY2FsbHkgY2hlY2sgdGhlIGZpcnN0IG9wdGlvbiBJIGZpbmQhXCJ9LHtuYW1lOlwiT3Bwb3J0dW5pdHlcIix0ZXh0OlwiWW91IHNlZW0gdG8gaGF2ZSB0aGUgc2tpbGxzIEkgc2VlaywgSSdkIGxpa2UgdG8gdGFsayBhYm91dCBzb21lIG9wcG9ydHVuaXRpZXMuXCJ9LHtuYW1lOlwiUmVzdW1lXCIsdGV4dDpcIkkgZGlnIHRoZSByZXN1bWUsIGhvdyBkaWQgeW91IG1ha2UgaXQ/XCJ9LHtuYW1lOlwiT3RoZXJcIix0ZXh0OlwiU3VtdGluIGVsc2UhXCJ9XSwkc2NvcGUuY29udGFjdD17ZW1haWw6XCJcIixuYW1lOlwiXCIscGhvbmU6XCJcIixhYm91dDpcIlwiLG1lc3NhZ2U6XCJcIn0sJHNjb3BlLnNlbmQ9ZnVuY3Rpb24oKXskc2NvcGUuc2VuZGluZz0hMCxjb25zb2xlLmxvZyhcImhlcmVcIiksRW1haWxTdmMuc2VuZCh7ZW1haWw6JHNjb3BlLmNvbnRhY3QuZW1haWwsbmFtZTokc2NvcGUuY29udGFjdC5uYW1lLHBob25lOiRzY29wZS5jb250YWN0LnBob25lLGFib3V0OiRzY29wZS5jb250YWN0LmFib3V0LG1lc3NhZ2U6JHNjb3BlLmNvbnRhY3QubWVzc2FnZX0pLnRoZW4oKGZ1bmN0aW9uKHJlc3BvbnNlKXskc2NvcGUuc2VudD0hMCxjb25zb2xlLmxvZyhcIlNVQ0NFU1MuIHN0YXR1cz0lZCwgdGV4dD0lc1wiLHJlc3BvbnNlLnN0YXR1cyxyZXNwb25zZS50ZXh0KSxjb25zb2xlLmxvZyhyZXNwb25zZSl9KSwoZnVuY3Rpb24oZXJyKXskc2NvcGUuc2VuZGluZz0hMSxjb25zb2xlLmxvZyhcIkZBSUxFRC4gZXJyb3I9XCIsZXJyKX0pKX19XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkV4cGVyaWVuY2VDdHJsXCIsW1wiJHNjb3BlXCIsZnVuY3Rpb24oJHNjb3BlKXskc2NvcGUuZ2V0U2tpbGw9ZnVuY3Rpb24oc2tpbGxDb2RlKXtpZigkc2NvcGUuc2tpbGxzKXJldHVybiAkc2NvcGUuc2tpbGxzLmZpbmQoKGZ1bmN0aW9uKHNraWxsKXtyZXR1cm4gc2tpbGwuY29kZT09PXNraWxsQ29kZX0pKX19XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkhvYmJpZXNDdHJsXCIsW1wiJHNjb3BlXCIsXCIkd2luZG93XCIsZnVuY3Rpb24oJHNjb3BlLCR3aW5kb3cpeyRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZT0hMSwkLmdldEpTT04oXCJodHRwczovL3d3dy5yZWRkaXQuY29tL3VzZXIvYmVsZ29jYW5hZGlhbi9hYm91dC8uanNvblwiLChmdW5jdGlvbihyZXNwb25zZSl7fSkpLCRzY29wZS5zZWxlY3RlZEhvYmJ5PSRzY29wZS5ob2JiaWVzWzBdLCRzY29wZS5zZWxlY3RIb2JieT1mdW5jdGlvbihob2JieSl7JHNjb3BlLnNlbGVjdGVkSG9iYnk9aG9iYnksJHNjb3BlLmhvYmJ5U2VsZWN0b3JWaXNpYmxlPSExfSwkc2NvcGUuc2hvd0hvYmJ5PWZ1bmN0aW9uKHZhbHVlLGluZGV4LGFycmF5KXtyZXR1cm4hIXZhbHVlLmltYWdlcyYmdmFsdWUuaW1hZ2VzLmxlbmd0aD4wfX1dKSxhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiTGVtbWluZ3NDdHJsXCIsW1wiJHNjb3BlXCIsXCJHYW1lU3ZjXCIsZnVuY3Rpb24oJHNjb3BlLEdhbWVTdmMpe3ZhciBMRUZUPTAsUklHSFQ9MSxjYW52YXM9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZW1taW5ncy1wYWdlXCIpLGN0eD1jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpLGxlbW1pbmdzSW1hZ2U9bmV3IEltYWdlO2xlbW1pbmdzSW1hZ2Uuc3JjPVwibGVtbWluZ3MvbGVtbWluZ3MucG5nXCI7dmFyIGRlY29ySW1hZ2U9bmV3IEltYWdlO2RlY29ySW1hZ2Uuc3JjPVwibGVtbWluZ3MvZGVjb3IucG5nXCI7dmFyIGxlbW1pbmdzPXt9LHN0YXJ0ZWQ9ITEsYWN0aW9ucz17d2Fsazp7c3RhcnQ6WzAsMF0sZW5kOlszMjAsMjBdLGNvbHVtbnM6OCxyb3dzOjEscmV2ZXJzZTohMX0saHVoOntzdGFydDpbMzIwLDBdLGVuZDpbNjQwLDIwXSxjb2x1bW5zOjgscm93czoxLHJldmVyc2U6ITB9LGZhbGw6e3N0YXJ0OlswLDgwXSxlbmQ6WzE2MCwxMDBdLGNvbHVtbnM6NCxyb3dzOjEscmV2ZXJzZTohMX0sZmx5OntzdGFydDpbMTYwLDgwXSxlbmQ6WzQ4MCwxMTBdLGNvbHVtbnM6OCxyb3dzOjEscmV2ZXJzZTohMX0sc3RvcDp7c3RhcnQ6WzAsMTIwXSxlbmQ6WzY0MCwxNDBdLGNvbHVtbnM6MTYscm93czoxLHJldmVyc2U6ITF9LGNsaW1iOntzdGFydDpbMCwxNjBdLGVuZDpbNjQwLDE4NV0sY29sdW1uczoxNixyb3dzOjEscmV2ZXJzZTohMX0sYnVpbGQ6e3N0YXJ0OlswLDIwMF0sZW5kOls2NDAsMjI1XSxjb2x1bW5zOjE2LHJvd3M6MSxyZXZlcnNlOiExfSxwdW5jaDp7c3RhcnQ6WzAsMjQwXSxlbmQ6WzY0MCwzMDBdLGNvbHVtbnM6MTYscm93czoyLHJldmVyc2U6ITF9LGRpZzp7c3RhcnQ6WzAsMzIwXSxlbmQ6WzMyMCwzNDVdLGNvbHVtbnM6OCxyb3dzOjEscmV2ZXJzZTohMX19O2Z1bmN0aW9uIExlbW1pbmcoaW5pdCl7dGhpcy5wb3NpdGlvbj1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihjYW52YXMud2lkdGgtMjAwKSkrMTAwLE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooY2FudmFzLmhlaWdodC0yMDApKSsxMDBdLHRoaXMuZGlyZWN0aW9uPTIqTWF0aC5yYW5kb20oKT4xP0xFRlQ6UklHSFQsdGhpcy5hY3Q9ZnVuY3Rpb24oYWN0aW9uKXt0aGlzLmFjdGlvbj1hY3Rpb25zW2FjdGlvbl0sdGhpcy5jeWNsZT0wLHRoaXMud2lkdGg9KHRoaXMuYWN0aW9uLmVuZFswXS10aGlzLmFjdGlvbi5zdGFydFswXSkvdGhpcy5hY3Rpb24uY29sdW1ucyx0aGlzLmhlaWdodD0odGhpcy5hY3Rpb24uZW5kWzFdLXRoaXMuYWN0aW9uLnN0YXJ0WzFdLTIwKih0aGlzLmFjdGlvbi5yb3dzLTEpKS90aGlzLmFjdGlvbi5yb3dzLHRoaXMuYW5pbWF0aW9uPSEwfSx0aGlzLmFjdChpbml0KSx0aGlzLm1vdmU9ZnVuY3Rpb24oKXtjdHguc2F2ZSgpLGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSx0aGlzLnBvc2l0aW9uWzFdKSxjdHgudHJhbnNsYXRlKHRoaXMud2lkdGgvMix0aGlzLmhlaWdodC8yKSx0aGlzLmRpcmVjdGlvbj09PUxFRlQmJmN0eC5zY2FsZSgtMSwxKTt2YXIgY29sdW1uPXRoaXMuY3ljbGUldGhpcy5hY3Rpb24uY29sdW1ucyxyb3c9TWF0aC5mbG9vcih0aGlzLmN5Y2xlL3RoaXMuYWN0aW9uLmNvbHVtbnMpO2N0eC5kcmF3SW1hZ2UobGVtbWluZ3NJbWFnZSx0aGlzLndpZHRoKmNvbHVtbit0aGlzLmFjdGlvbi5zdGFydFswXSwodGhpcy5oZWlnaHQrMjApKnJvdyt0aGlzLmFjdGlvbi5zdGFydFsxXSx0aGlzLndpZHRoLHRoaXMuaGVpZ2h0LDAsMCwyKnRoaXMud2lkdGgsMip0aGlzLmhlaWdodCksY3R4LnJlc3RvcmUoKSx0aGlzLmFjdGlvbi5yZXZlcnNlP3RoaXMuYW5pbWF0aW9uPyh0aGlzLmN5Y2xlKyssdGhpcy5jeWNsZT49dGhpcy5hY3Rpb24uY29sdW1ucyp0aGlzLmFjdGlvbi5yb3dzJiYodGhpcy5hbmltYXRpb249IXRoaXMuYW5pbWF0aW9uLHRoaXMuY3ljbGUtLSkpOih0aGlzLmN5Y2xlLS0sdGhpcy5jeWNsZTwwJiYodGhpcy5hbmltYXRpb249IXRoaXMuYW5pbWF0aW9uLHRoaXMuY3ljbGU9MCkpOih0aGlzLmN5Y2xlKyssdGhpcy5jeWNsZT49dGhpcy5hY3Rpb24uY29sdW1ucyp0aGlzLmFjdGlvbi5yb3dzJiYodGhpcy5jeWNsZT0wKSl9fWZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpe2NhbnZhcy53aWR0aD13aW5kb3cuaW5uZXJXaWR0aCxjYW52YXMuaGVpZ2h0PXdpbmRvdy5pbm5lckhlaWdodC0oY2FudmFzLndpZHRoPD03Njg/NTA6MTA1KX13aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLHJlc2l6ZUNhbnZhcywhMSkscmVzaXplQ2FudmFzKCksT2JqZWN0LmtleXMoYWN0aW9ucykuZm9yRWFjaCgoZnVuY3Rpb24oYWN0aW9uKXtsZW1taW5nc1tNYXRoLnJvdW5kKDFlOCpNYXRoLnJhbmRvbSgpKV09bmV3IExlbW1pbmcoYWN0aW9uKX0pKTtsZXQgaGF0Y2g9bmV3IGZ1bmN0aW9uKCl7dGhpcy5wb3NpdGlvbj1bMjAsMjBdLHRoaXMuYWN0aW9uPXtzdGFydDpbMCwwXSxlbmQ6WzgyLDUwMF0sY29sdW1uczoxLHJvd3M6MTB9LHRoaXMud2lkdGg9KHRoaXMuYWN0aW9uLmVuZFswXS10aGlzLmFjdGlvbi5zdGFydFswXSkvdGhpcy5hY3Rpb24uY29sdW1ucyx0aGlzLmhlaWdodD0odGhpcy5hY3Rpb24uZW5kWzFdLXRoaXMuYWN0aW9uLnN0YXJ0WzFdKS90aGlzLmFjdGlvbi5yb3dzLHRoaXMuY3ljbGU9MCx0aGlzLm9wZW49ZnVuY3Rpb24oKXt2YXIgY29sdW1uLHJvdztjdHguc2F2ZSgpLGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSx0aGlzLnBvc2l0aW9uWzFdKSxjdHgudHJhbnNsYXRlKHRoaXMud2lkdGgvMix0aGlzLmhlaWdodC8yKSxzdGFydGVkPyhjb2x1bW49dGhpcy5jeWNsZSV0aGlzLmFjdGlvbi5jb2x1bW5zLHJvdz1NYXRoLmZsb29yKHRoaXMuY3ljbGUvdGhpcy5hY3Rpb24uY29sdW1ucyksdGhpcy5jeWNsZTw5JiZ0aGlzLmN5Y2xlKyspOihjb2x1bW49MCxyb3c9MCksY3R4LmRyYXdJbWFnZShkZWNvckltYWdlLHRoaXMud2lkdGgqY29sdW1uK3RoaXMuYWN0aW9uLnN0YXJ0WzBdLHRoaXMuaGVpZ2h0KnJvdyt0aGlzLmFjdGlvbi5zdGFydFsxXS0xLHRoaXMud2lkdGgsdGhpcy5oZWlnaHQsMCwwLDIqdGhpcy53aWR0aCwyKnRoaXMuaGVpZ2h0KSxjdHgucmVzdG9yZSgpfX07IWZ1bmN0aW9uIGRyYXcoKXtpZihjdHguY2xlYXJSZWN0KDAsMCxjYW52YXMud2lkdGgsY2FudmFzLmhlaWdodCksc3RhcnRlZClmb3IodmFyIGkgaW4gbGVtbWluZ3MpbGVtbWluZ3NbaV0ubW92ZSgpO2Vsc2UgY3R4LmJlZ2luUGF0aCgpLGN0eC5mb250PVwiNDBweCBNb25vdG9uXCIsY3R4LmxpbmVXaWR0aD1cIjEwXCIsY3R4LnN0cm9rZVN0eWxlPVwiYmx1ZVwiLGN0eC5yZWN0KDE1LGNhbnZhcy5oZWlnaHQtNDUsY3R4Lm1lYXN1cmVUZXh0KFwiU3RhcnRcIikud2lkdGgrMjAsY3R4Lm1lYXN1cmVUZXh0KFwiU3RhcnRcIikuaGVpZ2h0K2NhbnZhcy5oZWlnaHQtNDUpLGN0eC5maWxsKCksY3R4LmZpbGxUZXh0KFwiU3RhcnRcIiwyMCxjYW52YXMuaGVpZ2h0LTUwKTtoYXRjaC5vcGVuKCksc3RhcnRlZD0hMCxzZXRUaW1lb3V0KChmdW5jdGlvbigpe2RyYXcoKX0pLDE1MCl9KCl9XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkxpc3RzQ3RybFwiLFtcIiRzY29wZVwiLFwiJGxvY2F0aW9uXCIsXCJDYXRlZ29yaWVzU3ZjXCIsZnVuY3Rpb24oJHNjb3BlLCRsb2NhdGlvbixDYXRlZ29yaWVzU3ZjKXskc2NvcGUuc2hvd0NhdGVnb3J5PSEwLCRzY29wZS5pbml0PWZ1bmN0aW9uKCl7Q2F0ZWdvcmllc1N2Yy5nZXRDYXRlZ29yaWVzKCkudGhlbigoZnVuY3Rpb24ocmVzcG9uc2Upe2Zvcih2YXIgaSBpbiAkc2NvcGUuY2F0ZWdvcmllcz1yZXNwb25zZS5kYXRhLCRzY29wZS50YXNrcz1bXSwkc2NvcGUuY2F0ZWdvcmllcylmb3IodmFyIGogaW4gJHNjb3BlLmNhdGVnb3JpZXNbaV0udGFza3MpJHNjb3BlLnRhc2tzLnB1c2goe2NhdGVnb3J5OiRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUsdGFzazokc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrc1tqXS5uYW1lfSl9KSl9LCRzY29wZS5zZWxlY3RDYXRlZ29yeT1mdW5jdGlvbihjYXRlZ29yeSl7Zm9yKHZhciBpIGluICRzY29wZS5zZWxlY3RlZENhdGVnb3J5PWNhdGVnb3J5LCRzY29wZS5zZWxlY3RlZFRhc2tzPVtdLCRzY29wZS5zZWxlY3RhYmxlVGFza3M9W10sJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpJHNjb3BlLnNlbGVjdGFibGVUYXNrcy5wdXNoKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTskc2NvcGUuc2hvd0NhdGVnb3J5PSExLCRzY29wZS5lbnRlcmVkQ2F0ZWdvcnk9XCJcIn0sJHNjb3BlLm5ld0NhdGVnb3J5PWZ1bmN0aW9uKGNhdGVnb3J5KXtmb3IodmFyIGZvdW5kPSExLGk9MDtpPCRzY29wZS5jYXRlZ29yaWVzLmxlbmd0aDtpKyspJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZT09PWNhdGVnb3J5JiYoJHNjb3BlLnNlbGVjdENhdGVnb3J5KCRzY29wZS5jYXRlZ29yaWVzW2ldKSxmb3VuZD0hMCk7Zm91bmR8fENhdGVnb3JpZXNTdmMuYWRkQ2F0ZWdvcnkoe2NhdGVnb3J5fSkudGhlbigoZnVuY3Rpb24oY2F0ZWdvcnkpeyRzY29wZS5pbml0KCksJHNjb3BlLnNlbGVjdENhdGVnb3J5KGNhdGVnb3J5KX0pKSwkc2NvcGUuZW50ZXJlZENhdGVnb3J5PVwiXCJ9LCRzY29wZS5uZXdUYXNrPWZ1bmN0aW9uKHRhc2spe3ZhciBmb3VuZD0hMTtmb3IodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0ubmFtZT09PXRhc2smJihmb3VuZD0hMCwkc2NvcGUuc2VsZWN0VGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSkpO2ZvdW5kfHxDYXRlZ29yaWVzU3ZjLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSx7dGFza30pLnRoZW4oKGZ1bmN0aW9uKCl7JHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MucHVzaCh7bmFtZTp0YXNrfSksJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MubGVuZ3RoLTFdKX0pKSwkc2NvcGUuZW50ZXJlZFRhc2s9XCJcIn0sJHNjb3BlLnNlbGVjdFRhc2s9ZnVuY3Rpb24odGFzayl7JHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsdGFzayksJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcyx0YXNrKSwkc2NvcGUuZW50ZXJlZFRhc2s9XCJcIn0sJHNjb3BlLnVuc2VsZWN0VGFzaz1mdW5jdGlvbih0YXNrKXskc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLHRhc2spLCRzY29wZS5yZW1vdmVUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLHRhc2spfSwkc2NvcGUuYWRkVGFzaz1mdW5jdGlvbih0YXNrTGlzdCx0YXNrKXt0YXNrTGlzdC5wdXNoKHRhc2spfSwkc2NvcGUucmVtb3ZlVGFzaz1mdW5jdGlvbih0YXNrTGlzdCx0YXNrKXt0YXNrTGlzdC5zcGxpY2UodGFza0xpc3QuaW5kZXhPZih0YXNrKSwxKX0sJHNjb3BlLnN0YXJ0UHJpb3JpdGl6aW5nPWZ1bmN0aW9uKCl7Q2F0ZWdvcmllc1N2Yy5zZXRQcmlvcml0eUxpc3QoJHNjb3BlLnNlbGVjdGVkVGFza3MpLCRsb2NhdGlvbi5wYXRoKFwiL3ByaW9yaXRpemVcIil9LCRzY29wZS5nZXRRdWVzdGlvbnM9ZnVuY3Rpb24oKXtpZighJHNjb3BlLnNlbGVjdGVkVGFza3MpcmV0dXJuXCJcIjtmb3IodmFyIGNvdW50ZXI9MCxpPSRzY29wZS5zZWxlY3RlZFRhc2tzLmxlbmd0aC0xO2k+MDtpLS0pY291bnRlcis9aTtyZXR1cm4gY291bnRlcn19XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkxvZ2luQ3RybFwiLFtcIiRzY29wZVwiLFwiJGxvY2F0aW9uXCIsXCJVc2VyU3ZjXCIsZnVuY3Rpb24oJHNjb3BlLCRsb2NhdGlvbixVc2VyU3ZjKXt2YXIgdWk9bmV3IGZpcmViYXNldWkuYXV0aC5BdXRoVUkoZmlyZWJhc2UuYXV0aCgpKTtmdW5jdGlvbiBzdGFydFVJKCl7dWkuc3RhcnQoXCIjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lclwiLHtjYWxsYmFja3M6e3NpZ25JblN1Y2Nlc3M6ZnVuY3Rpb24oY3VycmVudFVzZXIsY3JlZGVudGlhbCxyZWRpcmVjdFVybCl7cmV0dXJuIGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlci5nZXRJZFRva2VuKCEwKS50aGVuKChmdW5jdGlvbihpZFRva2VuKXtVc2VyU3ZjLmF1dGhlbnRpY2F0ZSh7ZGlzcGxheU5hbWU6Y3VycmVudFVzZXIuZGlzcGxheU5hbWUsZW1haWw6Y3VycmVudFVzZXIuZW1haWwscGhvdG9VUkw6Y3VycmVudFVzZXIucGhvdG9VUkwsZW1haWxWZXJpZmllZDpjdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkLGlkVG9rZW59KS50aGVuKChmdW5jdGlvbihyZXNwb25zZSl7JHNjb3BlLiRlbWl0KFwibG9naW5cIixyZXNwb25zZS5kYXRhKSwkKFwiI21vZGFsLWxvZ2luXCIpLm1vZGFsKFwiaGlkZVwiKX0pLChmdW5jdGlvbigpeyRzY29wZS4kZW1pdChcInBvcHVwXCIse21lc3NhZ2U6XCJMb2dpbiBGYWlsZWRcIix0eXBlOlwiYWxlcnQtZGFuZ2VyXCJ9KX0pKX0pKS5jYXRjaCgoZnVuY3Rpb24oZXJyb3Ipe2NvbnNvbGUuZXJyb3IoZXJyb3IpfSkpLCExfSxzaWduSW5GYWlsdXJlOmZ1bmN0aW9uKGVycm9yKXtpZihcImZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3RcIiE9ZXJyb3IuY29kZSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7dmFyIGNyZWQ9ZXJyb3IuY3JlZGVudGlhbDtyZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhDcmVkZW50aWFsKGNyZWQpfSx1aVNob3duOmZ1bmN0aW9uKCl7ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkZXJcIikuc3R5bGUuZGlzcGxheT1cIm5vbmVcIn19LHNpZ25JblN1Y2Nlc3NVcmw6XCIvaG9tZVwiLHNpZ25Jbk9wdGlvbnM6W2ZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSURdLHNpZ25JbkZsb3c6XCJwb3B1cFwifSl9JHNjb3BlLiRvbihcImxvZ291dFwiLChmdW5jdGlvbihldmVudCl7dWkucmVzZXQoKSxzdGFydFVJKCl9KSksc3RhcnRVSSgpfV0pLGFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJQb3N0c0N0cmxcIixbXCIkc2NvcGVcIixcIiRmaWx0ZXJcIixcIlBvc3RzU3ZjXCIsZnVuY3Rpb24oJHNjb3BlLCRmaWx0ZXIsUG9zdHNTdmMpeyRzY29wZS5hZGRQb3N0PWZ1bmN0aW9uKCl7JHNjb3BlLnBvc3RCb2R5JiZQb3N0c1N2Yy5jcmVhdGUoe2JvZHk6JHNjb3BlLnBvc3RCb2R5fSkudGhlbigoZnVuY3Rpb24ocG9zdCl7JHNjb3BlLnBvc3RCb2R5PW51bGx9KSl9LFBvc3RzU3ZjLmZldGNoKCkudGhlbigoZnVuY3Rpb24ocmVzcG9uc2UpeyRzY29wZS5wb3N0cz1yZXNwb25zZS5kYXRhfSkpLCRzY29wZS4kb24oXCJ3czpuZXdfcG9zdFwiLChmdW5jdGlvbihfLHBvc3QpeyRzY29wZS4kYXBwbHkoKGZ1bmN0aW9uKCl7UG9zdHNTdmMuZ2V0UG9zdChwb3N0KS50aGVuKChmdW5jdGlvbihyZXNwb25zZSl7JHNjb3BlLnBvc3RzLnVuc2hpZnQocmVzcG9uc2UuZGF0YSl9KSl9KSl9KSl9XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlByaW9yaXRpemVDdHJsXCIsW1wiJHNjb3BlXCIsXCIkbG9jYXRpb25cIixcIkNhdGVnb3JpZXNTdmNcIixmdW5jdGlvbigkc2NvcGUsJGxvY2F0aW9uLENhdGVnb3JpZXNTdmMpeyRzY29wZS5wcmlvcml0eUxpc3Q9Q2F0ZWdvcmllc1N2Yy5nZXRQcmlvcml0eUxpc3QoKSwkc2NvcGUucHJpb3JpdHlMaXN0Pygkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbj0xLCRzY29wZS5jdXJyZW50UXVlc3Rpb249MSwkc2NvcGUuZG9uZT0hMSk6JGxvY2F0aW9uLnBhdGgoXCIvbGlzdHNcIiksJHNjb3BlLm1ha2VDaG9pY2U9ZnVuY3Rpb24oY2hvaWNlKXtmb3IodmFyIGkgaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmlkPT09JHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24mJigkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZT0xPT09Y2hvaWNlPyRzY29wZS5wcmlvcml0eUxpc3RbaV0uZmlyc3RDaG9pY2U6JHNjb3BlLnByaW9yaXR5TGlzdFtpXS5zZWNvbmRDaG9pY2UpOyRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uPT09JHNjb3BlLmN1cnJlbnRRdWVzdGlvbiYmKCRzY29wZS5jdXJyZW50UXVlc3Rpb249JHNjb3BlLmN1cnJlbnRRdWVzdGlvbj09PSRzY29wZS5wcmlvcml0eUxpc3QubGVuZ3RoPzE6JHNjb3BlLmN1cnJlbnRRdWVzdGlvbisxKSwkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbj0kc2NvcGUuY3VycmVudFF1ZXN0aW9uO3ZhciBmb3VuZD0hMTtmb3IoaSBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KWlmKFwiXCI9PT0kc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSl7Zm91bmQ9ITA7YnJlYWt9Zm91bmR8fCgkKFwiI3ByaW9yaXRpemVDaG9pY2VzXCIpLmhpZGUoMzAwKSwkc2NvcGUuZG9uZT0hMCl9LCRzY29wZS5nZXRCdXR0b25WYWx1ZT1mdW5jdGlvbihjaG9pY2Upe2lmKCEkc2NvcGUucHJpb3JpdHlMaXN0KXJldHVyblwiXCI7Zm9yKHZhciBpPTA7aTwkc2NvcGUucHJpb3JpdHlMaXN0Lmxlbmd0aDtpKyspaWYoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5pZD09PSRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uKXJldHVybiAxPT09Y2hvaWNlPyRzY29wZS5wcmlvcml0eUxpc3RbaV0uZmlyc3RDaG9pY2U6JHNjb3BlLnByaW9yaXR5TGlzdFtpXS5zZWNvbmRDaG9pY2V9LCRzY29wZS5zZWxlY3RRdWVzdGlvbj1mdW5jdGlvbihxdWVzdGlvbil7JHNjb3BlLnNlbGVjdGVkUXVlc3Rpb249cXVlc3Rpb259LCRzY29wZS5nZXRGaWx0ZXJlZFByaW9yaXR5TGlzdD1mdW5jdGlvbigpe3JldHVybiAkc2NvcGUucHJpb3JpdHlMaXN0PyRzY29wZS5wcmlvcml0eUxpc3Quc29ydCgoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5pZC1iLmlkfSkpLmZpbHRlcigoZnVuY3Rpb24ocXVlc3Rpb24pe3JldHVyblwiXCIhPT1xdWVzdGlvbi5jaG9pY2V8fHF1ZXN0aW9uLmlkPT09JHNjb3BlLmN1cnJlbnRRdWVzdGlvbn0pKTpbXX0sJHNjb3BlLmdldENob2ljZXNNYWRlPWZ1bmN0aW9uKCl7aWYoISRzY29wZS5wcmlvcml0eUxpc3QpcmV0dXJuXCJcIjt2YXIgY2hvaWNlc01hZGU9MDtmb3IodmFyIGkgaW4gJHNjb3BlLnByaW9yaXR5TGlzdClcIlwiIT09JHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UmJmNob2ljZXNNYWRlKys7cmV0dXJuIGNob2ljZXNNYWRlfSwkc2NvcGUuZ2V0QnV0dG9uQ2xhc3M9ZnVuY3Rpb24oY2hvaWNlKXtpZighJHNjb3BlLnByaW9yaXR5TGlzdClyZXR1cm5cIlwiO2Zvcih2YXIgaSBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KWlmKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uaWQ9PT0kc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbilyZXR1cm5cIlwiPT09JHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2U/XCJidG4tcHJpbWFyeVwiOjE9PT1jaG9pY2U/JHNjb3BlLnByaW9yaXR5TGlzdFtpXS5maXJzdENob2ljZT09PSRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlP1wiYnRuLXN1Y2Nlc3NcIjpcImJ0bi1kYW5nZXJcIjokc2NvcGUucHJpb3JpdHlMaXN0W2ldLnNlY29uZENob2ljZT09PSRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlP1wiYnRuLXN1Y2Nlc3NcIjpcImJ0bi1kYW5nZXJcIn0sJHNjb3BlLnNob3dDaG9pY2VzPWZ1bmN0aW9uKCl7JChcIiNwcmlvcml0aXplQ2hvaWNlc1wiKS5zaG93KDFlMyksJChcIiNyZXZpZXdDaG9pY2VzXCIpLmhpZGUoKX0sJHNjb3BlLmNoYXJ0Q2xpY2s9ZnVuY3Rpb24oZXZlbnQpeyRzY29wZS5jaGFydCYmY29uc29sZS5sb2coJHNjb3BlLmNoYXJ0LmdldFNlZ21lbnRzQXRFdmVudChldmVudCkpfSwkc2NvcGUuc2hvd1Jlc3VsdHM9ZnVuY3Rpb24oKXtmb3IodmFyIGkgaW4gJHNjb3BlLmRhdGE9W10sJHNjb3BlLm9wdGlvbnM9e3Jlc3BvbnNpdmU6ITAsc2VnbWVudFNob3dTdHJva2U6ITAsc2VnbWVudFN0cm9rZUNvbG9yOlwiI2ZmZlwiLHNlZ21lbnRTdHJva2VXaWR0aDoyLHBlcmNlbnRhZ2VJbm5lckN1dG91dDowLGFuaW1hdGlvblN0ZXBzOjEwMCxhbmltYXRpb25FYXNpbmc6XCJlYXNlT3V0Qm91bmNlXCIsYW5pbWF0ZVJvdGF0ZTohMCxhbmltYXRlU2NhbGU6ITEsbGVnZW5kVGVtcGxhdGU6JzxoMyBjbGFzcz1cInRjLWNoYXJ0LWpzLWxlZ2VuZFwiIHN0eWxlPVwicGFkZGluZzo1cHhcIj48JSBmb3IgKHZhciBpPTA7IGk8c2VnbWVudHMubGVuZ3RoOyBpKyspeyU+PGRpdiBjbGFzcz1cImxhYmVsXCIgc3R5bGU9XCJmbG9hdDpsZWZ0O21hcmdpbjo1cHg7YmFja2dyb3VuZC1jb2xvcjo8JT1zZWdtZW50c1tpXS5maWxsQ29sb3IlPlwiPjwlaWYoc2VnbWVudHNbaV0ubGFiZWwpeyU+PCU9c2VnbWVudHNbaV0ubGFiZWwlPjwlfSU+PC9kaXY+PCV9JT48L2gzPid9LENhdGVnb3JpZXNTdmMuY2hvaWNlcylmb3IodmFyIGogaW4gQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLnZvdGVzPTAsJHNjb3BlLnByaW9yaXR5TGlzdClDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0ubmFtZT09PSRzY29wZS5wcmlvcml0eUxpc3Rbal0uY2hvaWNlJiZDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0udm90ZXMrKztmb3IoaSBpbiBDYXRlZ29yaWVzU3ZjLmNob2ljZXMuc29ydCgoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS52b3RlczxiLnZvdGVzfSkpLENhdGVnb3JpZXNTdmMuY2hvaWNlcykkc2NvcGUuZGF0YS5wdXNoKHt2YWx1ZTpDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0udm90ZXMsbGFiZWw6Q2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLm5hbWV9KTskKFwiI3ByaW9yaXRpemVSZXN1bHRcIikuaGlkZSgpLCQoXCIjcHJpb3JpdGl6ZUNob2ljZXNcIikuaGlkZSgpLCQoXCIjcHJpb3JpdHlSZXN1bHRzXCIpLnNob3coMWUzKX19XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlByb2ZpbGVDdHJsXCIsW1wiJHNjb3BlXCIsXCIkbG9jYXRpb25cIixcIlVzZXJTdmNcIixmdW5jdGlvbigkc2NvcGUsJGxvY2F0aW9uLFVzZXJTdmMpeyRzY29wZS5jdXJyZW50VXNlcj8oJChcIiNzZXgtaW5kaWNhdG9yXCIpLm9mZnNldCh7bGVmdDokc2NvcGUuY3VycmVudFVzZXIuZ2VuZGVyLnNleC8yMDAqJChcIiNzZXhcIikud2lkdGgoKSskKFwiI3NleFwiKS5vZmZzZXQoKS5sZWZ0fSksJChcIiNpZGVudGl0eS1pbmRpY2F0b3JcIikub2Zmc2V0KHtsZWZ0OiRzY29wZS5jdXJyZW50VXNlci5nZW5kZXIuaWRlbnRpdHkvMjAwKiQoXCIjaWRlbnRpdHlcIikud2lkdGgoKSskKFwiI2lkZW50aXR5XCIpLm9mZnNldCgpLmxlZnR9KSk6JGxvY2F0aW9uLnBhdGgoXCIvXCIpLCRzY29wZS5zZXhlcz1bXCJNYWxlXCIsXCJGdE0gTWFsZVwiLFwiSW50ZXJzZXhcIixcIk10RiBGZW1hbGVcIixcIkZlbWFsZVwiXSwkc2NvcGUuaWRlbnRpdGllcz1bXCJNYW5cIixcIkJpZ2VuZGVyXCIsXCJQYW5nZW5kZXJcIixcIkFnZW5kZXJcIixcIlBvbHlnZW5kZXJcIixcIkdlbmRlcmZsdWlkXCIsXCJHZW5kZXJxdWVlclwiLFwiUXVlZXJcIixcIldvbWFuXCJdLCRzY29wZS5kYXRlT3B0aW9ucz17bWF4RGF0ZTpuZXcgRGF0ZSxtaW5EYXRlOm5ldyBEYXRlKDE5MDAsMSwxKSxpbml0RGF0ZTpuZXcgRGF0ZSgyZTMsMSwxKSxkYXRlcGlja2VyTW9kZTpcInllYXJcIn0sJHNjb3BlLmdlbmRlcj1mdW5jdGlvbihhcnJheSxwZXJjZW50YWdlKXtyZXR1cm4gYXJyYXlbTWF0aC5yb3VuZChwZXJjZW50YWdlLzIwMCooYXJyYXkubGVuZ3RoLTEpKV19LCRzY29wZS5zdGFydFNsaWRlcj1mdW5jdGlvbigpe30sJHNjb3BlLmRyYWdTbGlkZXI9ZnVuY3Rpb24oZXZlbnQsdWksdHlwZSl7JHNjb3BlLmN1cnJlbnRVc2VyLmdlbmRlclt0eXBlXT1NYXRoLnJvdW5kKCgkKFwiI1wiK3R5cGUrXCItaW5kaWNhdG9yXCIpLm9mZnNldCgpLmxlZnQtJChcIiNcIit0eXBlKS5vZmZzZXQoKS5sZWZ0KS8oJChcIiNcIit0eXBlKS53aWR0aCgpLSQoXCIjXCIrdHlwZStcIi1pbmRpY2F0b3JcIikud2lkdGgoKSkqMjAwKSwkc2NvcGUuJGFwcGx5KCl9LCRzY29wZS5zdG9wU2xpZGVyPWZ1bmN0aW9uKCl7fSwkc2NvcGUudXNlcm5hbWVUb2dnbGU9ITAsJHNjb3BlLnBhc3N3b3JkVG9nZ2xlPSEwLCRzY29wZS50b2dnbGVVc2VybmFtZT1mdW5jdGlvbigpeyRzY29wZS51c2VybmFtZVRvZ2dsZT0hJHNjb3BlLnVzZXJuYW1lVG9nZ2xlLCRzY29wZS5uZXdVc2VybmFtZT0kc2NvcGUuY3VycmVudFVzZXIudXNlcm5hbWV9LCRzY29wZS50b2dnbGVQYXNzd29yZD1mdW5jdGlvbigpeyRzY29wZS5uZXdQYXNzd29yZD1udWxsLCRzY29wZS5jb25maXJtUGFzc3dvcmQ9bnVsbCwkc2NvcGUucGFzc3dvcmRUb2dnbGU9ISRzY29wZS5wYXNzd29yZFRvZ2dsZX0sJHNjb3BlLmNoZWNrUGFzc3dvcmQ9ZnVuY3Rpb24ocGFzc3dvcmQpe2lmKHBhc3N3b3JkKXt2YXIgdXNlcj0kc2NvcGUuY3VycmVudFVzZXIuX2lkO1VzZXJTdmMuY2hlY2tQYXNzd29yZCh1c2VyLHBhc3N3b3JkKS50aGVuKChmdW5jdGlvbihyZXNwb25zZSl7JHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCl9KSwoZnVuY3Rpb24oKXt2YXIgb3JpZ2luYWxCZz0kKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTskKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoe2JhY2tncm91bmRDb2xvcjpcIiNGRkI2QzFcIn0sMjAwKS5hbmltYXRlKHtiYWNrZ3JvdW5kQ29sb3I6b3JpZ2luYWxCZ30sMjAwKX0pKX19LCRzY29wZS5jaGFuZ2VQYXNzd29yZD1mdW5jdGlvbihvbGRQYXNzd29yZCxuZXdQYXNzd29yZCxjb25maXJtUGFzc3dvcmQpe2lmKG5ld1Bhc3N3b3JkKWlmKG5ld1Bhc3N3b3JkPT1jb25maXJtUGFzc3dvcmQpe3ZhciB1c2VyPSRzY29wZS5jdXJyZW50VXNlci5faWQ7VXNlclN2Yy5jaGFuZ2VQYXNzd29yZCh1c2VyLG9sZFBhc3N3b3JkLG5ld1Bhc3N3b3JkKS50aGVuKChmdW5jdGlvbihyZXNwb25zZSl7JHNjb3BlLiRlbWl0KFwicG9wdXBcIix7bWVzc2FnZTpcIlBhc3N3b3JkIENoYW5nZWRcIix0eXBlOlwiYWxlcnQtc3VjY2Vzc1wifSksJHNjb3BlLm9sZFBhc3N3b3JkPW51bGwsJHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCl9KSwoZnVuY3Rpb24oKXskc2NvcGUuJGVtaXQoXCJwb3B1cFwiLHttZXNzYWdlOlwiUGFzc3dvcmQgQ2hhbmdlIEZhaWxlZFwiLHR5cGU6XCJhbGVydC1kYW5nZXJcIn0pfSkpfWVsc2V7dmFyIG9yaWdpbmFsQmc9JChcIi5wYXNzd29yZFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIik7JChcIi5wYXNzd29yZFwiKS5hbmltYXRlKHtiYWNrZ3JvdW5kQ29sb3I6XCIjRkZCNkMxXCJ9LDIwMCkuYW5pbWF0ZSh7YmFja2dyb3VuZENvbG9yOm9yaWdpbmFsQmd9LDIwMCl9fSwkc2NvcGUuY2hhbmdlVXNlcm5hbWU9ZnVuY3Rpb24odXNlcm5hbWUpeyRzY29wZS4kZW1pdChcImxvYWRpbmdcIiksVXNlclN2Yy5jaGFuZ2VVc2VybmFtZSgkc2NvcGUuY3VycmVudFVzZXIuX2lkLHVzZXJuYW1lKS50aGVuKChmdW5jdGlvbihyZXNwb25zZSl7JHNjb3BlLiRlbWl0KFwidXBkYXRlXCIscmVzcG9uc2UuZGF0YSl9KSwoZnVuY3Rpb24ocmVzcG9uc2UpeyRzY29wZS4kZW1pdChcInBvcHVwXCIse21lc3NhZ2U6dXNlcm5hbWUrXCIgYWxyZWFkeSBpbiB1c2VcIix0eXBlOlwiYWxlcnQtZGFuZ2VyXCJ9KX0pKX0sJHNjb3BlLnVwZGF0ZVVzZXI9ZnVuY3Rpb24oKXskc2NvcGUuY3VycmVudFVzZXImJigkc2NvcGUuJGVtaXQoXCJsb2FkaW5nXCIpLFVzZXJTdmMudXBkYXRlVXNlcigkc2NvcGUuY3VycmVudFVzZXIpLnRoZW4oKGZ1bmN0aW9uKHJlc3BvbnNlKXskc2NvcGUuJGVtaXQoXCJ1cGRhdGVcIixyZXNwb25zZS5kYXRhKX0pKSl9LCRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlci5mbGFncy5sZW5ndGhcIiwoZnVuY3Rpb24obGVuZ3RoKXskc2NvcGUudXBkYXRlVXNlcigpfSkpLCRzY29wZS5sb2FkQ291bnRyaWVzPWZ1bmN0aW9uKCRxdWVyeSl7cmV0dXJuW3tuYW1lOlwiQW5kb3JyYVwiLGZsYWc6XCJmbGFnLWFkXCIsdGlkYml0OlwiXCJ9LHtuYW1lOlwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIixmbGFnOlwiZmxhZy1hZVwifSx7bmFtZTpcIkFmZ2hhbmlzdGFuXCIsZmxhZzpcImZsYWctYWZcIn0se25hbWU6XCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsZmxhZzpcImZsYWctYWdcIn0se25hbWU6XCJBbmd1aWxsYVwiLGZsYWc6XCJmbGFnLWFpXCJ9LHtuYW1lOlwiQWxiYW5pYVwiLGZsYWc6XCJmbGFnLWFsXCJ9LHtuYW1lOlwiQXJtZW5pYVwiLGZsYWc6XCJmbGFnLWFtXCJ9LHtuYW1lOlwiQW5nb2xhXCIsZmxhZzpcImZsYWctYW9cIn0se25hbWU6XCJBbnRhcmN0aWNhXCIsZmxhZzpcImZsYWctYXFcIn0se25hbWU6XCJBcmdlbnRpbmFcIixmbGFnOlwiZmxhZy1hclwifSx7bmFtZTpcIkFtZXJpY2FuIFNvbW9hXCIsZmxhZzpcImZsYWctYXNcIn0se25hbWU6XCJBdXN0cmlhXCIsZmxhZzpcImZsYWctYXRcIn0se25hbWU6XCJBdXN0cmFsaWFcIixmbGFnOlwiZmxhZy1hdVwifSx7bmFtZTpcIkFydWJhXCIsZmxhZzpcImZsYWctYXdcIn0se25hbWU6XCLDhWxhbmQgSXNsYW5kc1wiLGZsYWc6XCJmbGFnLWF4XCJ9LHtuYW1lOlwiQXplcmJhaWphblwiLGZsYWc6XCJmbGFnLWF6XCJ9LHtuYW1lOlwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLGZsYWc6XCJmbGFnLWJhXCJ9LHtuYW1lOlwiQmFyYmFkb3NcIixmbGFnOlwiZmxhZy1iYlwifSx7bmFtZTpcIkJhbmdsYWRlc2hcIixmbGFnOlwiZmxhZy1iZFwifSx7bmFtZTpcIkJlbGdpdW1cIixmbGFnOlwiZmxhZy1iZVwifSx7bmFtZTpcIkJ1cmtpbmEgRmFzb1wiLGZsYWc6XCJmbGFnLWJmXCJ9LHtuYW1lOlwiQnVsZ2FyaWFcIixmbGFnOlwiZmxhZy1iZ1wifSx7bmFtZTpcIkJhaHJhaW5cIixmbGFnOlwiZmxhZy1iaFwifSx7bmFtZTpcIkJ1cnVuZGlcIixmbGFnOlwiZmxhZy1iaVwifSx7bmFtZTpcIkJlbmluXCIsZmxhZzpcImZsYWctYmpcIn0se25hbWU6XCJTYWludCBCYXJ0aMOpbGVteVwiLGZsYWc6XCJmbGFnLWJsXCJ9LHtuYW1lOlwiQmVybXVkYVwiLGZsYWc6XCJmbGFnLWJtXCJ9LHtuYW1lOlwiQnJ1bmVpIFwiLGZsYWc6XCJmbGFnLWJuXCJ9LHtuYW1lOlwiQm9saXZpYSwgUGx1cmluYXRpb25hbCBTdGF0ZSBvZlwiLGZsYWc6XCJmbGFnLWJvXCJ9LHtuYW1lOlwiQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmFcIixmbGFnOlwiZmxhZy1icVwifSx7bmFtZTpcIkJyYXppbFwiLGZsYWc6XCJmbGFnLWJyXCJ9LHtuYW1lOlwiQmFoYW1hc1wiLGZsYWc6XCJmbGFnLWJzXCJ9LHtuYW1lOlwiQmh1dGFuXCIsZmxhZzpcImZsYWctYnRcIn0se25hbWU6XCJCb3V2ZXQgSXNsYW5kXCIsZmxhZzpcImZsYWctYnZcIn0se25hbWU6XCJCb3Rzd2FuYVwiLGZsYWc6XCJmbGFnLWJ3XCJ9LHtuYW1lOlwiQmVsYXJ1c1wiLGZsYWc6XCJmbGFnLWJ5XCJ9LHtuYW1lOlwiQmVsaXplXCIsZmxhZzpcImZsYWctYnpcIn0se25hbWU6XCJDYW5hZGFcIixmbGFnOlwiZmxhZy1jYVwifSx7bmFtZTpcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzXCIsZmxhZzpcImZsYWctY2NcIn0se25hbWU6XCJDb25nbywgdGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlXCIsZmxhZzpcImZsYWctY2RcIn0se25hbWU6XCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIixmbGFnOlwiZmxhZy1jZlwifSx7bmFtZTpcIkNvbmdvXCIsZmxhZzpcImZsYWctY2dcIn0se25hbWU6XCJTd2l0emVybGFuZFwiLGZsYWc6XCJmbGFnLWNoXCJ9LHtuYW1lOlwiQ8O0dGUgZCdJdm9pcmVcIixmbGFnOlwiZmxhZy1jaVwifSx7bmFtZTpcIkNvb2sgSXNsYW5kc1wiLGZsYWc6XCJmbGFnLWNrXCJ9LHtuYW1lOlwiQ2hpbGVcIixmbGFnOlwiZmxhZy1jbFwifSx7bmFtZTpcIkNhbWVyb29uXCIsZmxhZzpcImZsYWctY21cIn0se25hbWU6XCJDaGluYVwiLGZsYWc6XCJmbGFnLWNuXCJ9LHtuYW1lOlwiQ29sb21iaWFcIixmbGFnOlwiZmxhZy1jb1wifSx7bmFtZTpcIkNvc3RhIFJpY2FcIixmbGFnOlwiZmxhZy1jclwifSx7bmFtZTpcIkN1YmFcIixmbGFnOlwiZmxhZy1jdVwifSx7bmFtZTpcIkNhYm8gVmVyZGVcIixmbGFnOlwiZmxhZy1jdlwifSx7bmFtZTpcIkN1cmHDp2FvXCIsZmxhZzpcImZsYWctY3dcIn0se25hbWU6XCJDaHJpc3RtYXMgSXNsYW5kXCIsZmxhZzpcImZsYWctY3hcIn0se25hbWU6XCJDeXBydXNcIixmbGFnOlwiZmxhZy1jeVwifSx7bmFtZTpcIkN6ZWNoIFJlcHVibGljXCIsZmxhZzpcImZsYWctY3pcIn0se25hbWU6XCJHZXJtYW55XCIsZmxhZzpcImZsYWctZGVcIn0se25hbWU6XCJEamlib3V0aVwiLGZsYWc6XCJmbGFnLWRqXCJ9LHtuYW1lOlwiRGVubWFya1wiLGZsYWc6XCJmbGFnLWRrXCJ9LHtuYW1lOlwiRG9taW5pY2FcIixmbGFnOlwiZmxhZy1kbVwifSx7bmFtZTpcIkRvbWluaWNhbiBSZXB1YmxpY1wiLGZsYWc6XCJmbGFnLWRvXCJ9LHtuYW1lOlwiQWxnZXJpYVwiLGZsYWc6XCJmbGFnLWR6XCJ9LHtuYW1lOlwiRWN1YWRvclwiLGZsYWc6XCJmbGFnLWVjXCJ9LHtuYW1lOlwiRXN0b25pYVwiLGZsYWc6XCJmbGFnLWVlXCJ9LHtuYW1lOlwiRWd5cHRcIixmbGFnOlwiZmxhZy1lZ1wifSx7bmFtZTpcIldlc3Rlcm4gU2FoYXJhXCIsZmxhZzpcImZsYWctZWhcIn0se25hbWU6XCJFcml0cmVhXCIsZmxhZzpcImZsYWctZXJcIn0se25hbWU6XCJTcGFpblwiLGZsYWc6XCJmbGFnLWVzXCJ9LHtuYW1lOlwiRXRoaW9waWFcIixmbGFnOlwiZmxhZy1ldFwifSx7bmFtZTpcIkZpbmxhbmRcIixmbGFnOlwiZmxhZy1maVwifSx7bmFtZTpcIkZpamlcIixmbGFnOlwiZmxhZy1malwifSx7bmFtZTpcIkZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKVwiLGZsYWc6XCJmbGFnLWZrXCJ9LHtuYW1lOlwiTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcyBvZlwiLGZsYWc6XCJmbGFnLWZtXCJ9LHtuYW1lOlwiRmFyb2UgSXNsYW5kc1wiLGZsYWc6XCJmbGFnLWZvXCJ9LHtuYW1lOlwiRnJhbmNlXCIsZmxhZzpcImZsYWctZnJcIn0se25hbWU6XCJHYWJvblwiLGZsYWc6XCJmbGFnLWdhXCJ9LHtuYW1lOlwiVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZFwiLGZsYWc6XCJmbGFnLWdiXCJ9LHtuYW1lOlwiR3JlbmFkYVwiLGZsYWc6XCJmbGFnLWdkXCJ9LHtuYW1lOlwiR2VvcmdpYVwiLGZsYWc6XCJmbGFnLWdlXCJ9LHtuYW1lOlwiRnJlbmNoIEd1aWFuYVwiLGZsYWc6XCJmbGFnLWdmXCJ9LHtuYW1lOlwiR3Vlcm5zZXlcIixmbGFnOlwiZmxhZy1nZ1wifSx7bmFtZTpcIkdoYW5hXCIsZmxhZzpcImZsYWctZ2hcIn0se25hbWU6XCJHaWJyYWx0YXJcIixmbGFnOlwiZmxhZy1naVwifSx7bmFtZTpcIkdyZWVubGFuZFwiLGZsYWc6XCJmbGFnLWdsXCJ9LHtuYW1lOlwiR2FtYmlhXCIsZmxhZzpcImZsYWctZ21cIn0se25hbWU6XCJHdWluZWFcIixmbGFnOlwiZmxhZy1nblwifSx7bmFtZTpcIkd1YWRlbG91cGVcIixmbGFnOlwiZmxhZy1ncFwifSx7bmFtZTpcIkVxdWF0b3JpYWwgR3VpbmVhXCIsZmxhZzpcImZsYWctZ3FcIn0se25hbWU6XCJHcmVlY2VcIixmbGFnOlwiZmxhZy1nclwifSx7bmFtZTpcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsZmxhZzpcImZsYWctZ3NcIn0se25hbWU6XCJHdWF0ZW1hbGFcIixmbGFnOlwiZmxhZy1ndFwifSx7bmFtZTpcIkd1YW1cIixmbGFnOlwiZmxhZy1ndVwifSx7bmFtZTpcIkd1aW5lYS1CaXNzYXVcIixmbGFnOlwiZmxhZy1nd1wifSx7bmFtZTpcIkd1eWFuYVwiLGZsYWc6XCJmbGFnLWd5XCJ9LHtuYW1lOlwiSG9uZyBLb25nXCIsZmxhZzpcImZsYWctaGtcIn0se25hbWU6XCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIixmbGFnOlwiZmxhZy1obVwifSx7bmFtZTpcIkhvbmR1cmFzXCIsZmxhZzpcImZsYWctaG5cIn0se25hbWU6XCJDcm9hdGlhXCIsZmxhZzpcImZsYWctaHJcIn0se25hbWU6XCJIYWl0aVwiLGZsYWc6XCJmbGFnLWh0XCJ9LHtuYW1lOlwiSHVuZ2FyeVwiLGZsYWc6XCJmbGFnLWh1XCJ9LHtuYW1lOlwiSW5kb25lc2lhXCIsZmxhZzpcImZsYWctaWRcIn0se25hbWU6XCJJcmVsYW5kXCIsZmxhZzpcImZsYWctaWVcIn0se25hbWU6XCJJc3JhZWxcIixmbGFnOlwiZmxhZy1pbFwifSx7bmFtZTpcIklzbGUgb2YgTWFuXCIsZmxhZzpcImZsYWctaW1cIn0se25hbWU6XCJJbmRpYVwiLGZsYWc6XCJmbGFnLWluXCJ9LHtuYW1lOlwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCIsZmxhZzpcImZsYWctaW9cIn0se25hbWU6XCJJcmFxXCIsZmxhZzpcImZsYWctaXFcIn0se25hbWU6XCJJcmFuLCBJc2xhbWljIFJlcHVibGljIG9mXCIsZmxhZzpcImZsYWctaXJcIn0se25hbWU6XCJJY2VsYW5kXCIsZmxhZzpcImZsYWctaXNcIn0se25hbWU6XCJJdGFseVwiLGZsYWc6XCJmbGFnLWl0XCJ9LHtuYW1lOlwiSmVyc2V5XCIsZmxhZzpcImZsYWctamVcIn0se25hbWU6XCJKYW1haWNhXCIsZmxhZzpcImZsYWctam1cIn0se25hbWU6XCJKb3JkYW5cIixmbGFnOlwiZmxhZy1qb1wifSx7bmFtZTpcIkphcGFuXCIsZmxhZzpcImZsYWctanBcIn0se25hbWU6XCJLZW55YVwiLGZsYWc6XCJmbGFnLWtlXCJ9LHtuYW1lOlwiS3lyZ3l6c3RhblwiLGZsYWc6XCJmbGFnLWtnXCJ9LHtuYW1lOlwiQ2FtYm9kaWFcIixmbGFnOlwiZmxhZy1raFwifSx7bmFtZTpcIktpcmliYXRpXCIsZmxhZzpcImZsYWcta2lcIn0se25hbWU6XCJDb21vcm9zXCIsZmxhZzpcImZsYWcta21cIn0se25hbWU6XCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIixmbGFnOlwiZmxhZy1rblwifSx7bmFtZTpcIktvcmVhLCBEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mXCIsZmxhZzpcImZsYWcta3BcIn0se25hbWU6XCJLb3JlYSwgUmVwdWJsaWMgb2ZcIixmbGFnOlwiZmxhZy1rclwifSx7bmFtZTpcIkt1d2FpdFwiLGZsYWc6XCJmbGFnLWt3XCJ9LHtuYW1lOlwiQ2F5bWFuIElzbGFuZHNcIixmbGFnOlwiZmxhZy1reVwifSx7bmFtZTpcIkthemFraHN0YW5cIixmbGFnOlwiZmxhZy1relwifSx7bmFtZTpcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljXCIsZmxhZzpcImZsYWctbGFcIn0se25hbWU6XCJMZWJhbm9uXCIsZmxhZzpcImZsYWctbGJcIn0se25hbWU6XCJTYWludCBMdWNpYVwiLGZsYWc6XCJmbGFnLWxjXCJ9LHtuYW1lOlwiTGllY2h0ZW5zdGVpblwiLGZsYWc6XCJmbGFnLWxpXCJ9LHtuYW1lOlwiU3JpIExhbmthXCIsZmxhZzpcImZsYWctbGtcIn0se25hbWU6XCJMaWJlcmlhXCIsZmxhZzpcImZsYWctbHJcIn0se25hbWU6XCJMZXNvdGhvXCIsZmxhZzpcImZsYWctbHNcIn0se25hbWU6XCJMaXRodWFuaWFcIixmbGFnOlwiZmxhZy1sdFwifSx7bmFtZTpcIkx1eGVtYm91cmdcIixmbGFnOlwiZmxhZy1sdVwifSx7bmFtZTpcIkxhdHZpYVwiLGZsYWc6XCJmbGFnLWx2XCJ9LHtuYW1lOlwiTGlieWFcIixmbGFnOlwiZmxhZy1seVwifSx7bmFtZTpcIk1vcm9jY29cIixmbGFnOlwiZmxhZy1tYVwifSx7bmFtZTpcIk1vbmFjb1wiLGZsYWc6XCJmbGFnLW1jXCJ9LHtuYW1lOlwiTW9sZG92YSwgUmVwdWJsaWMgb2ZcIixmbGFnOlwiZmxhZy1tZFwifSx7bmFtZTpcIk1vbnRlbmVncm9cIixmbGFnOlwiZmxhZy1tZVwifSx7bmFtZTpcIlNhaW50IE1hcnRpbiAoRnJlbmNoIHBhcnQpXCIsZmxhZzpcImZsYWctbWZcIn0se25hbWU6XCJNYWRhZ2FzY2FyXCIsZmxhZzpcImZsYWctbWdcIn0se25hbWU6XCJNYXJzaGFsbCBJc2xhbmRzXCIsZmxhZzpcImZsYWctbWhcIn0se25hbWU6XCJNYWNlZG9uaWEsIHRoZSBmb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2ZcIixmbGFnOlwiZmxhZy1ta1wifSx7bmFtZTpcIk1hbGlcIixmbGFnOlwiZmxhZy1tbFwifSx7bmFtZTpcIk15YW5tYXJcIixmbGFnOlwiZmxhZy1tbVwifSx7bmFtZTpcIk1vbmdvbGlhXCIsZmxhZzpcImZsYWctbW5cIn0se25hbWU6XCJNYWNhb1wiLGZsYWc6XCJmbGFnLW1vXCJ9LHtuYW1lOlwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsZmxhZzpcImZsYWctbXBcIn0se25hbWU6XCJNYXJ0aW5pcXVlXCIsZmxhZzpcImZsYWctbXFcIn0se25hbWU6XCJNYXVyaXRhbmlhXCIsZmxhZzpcImZsYWctbXJcIn0se25hbWU6XCJNb250c2VycmF0XCIsZmxhZzpcImZsYWctbXNcIn0se25hbWU6XCJNYWx0YVwiLGZsYWc6XCJmbGFnLW10XCJ9LHtuYW1lOlwiTWF1cml0aXVzXCIsZmxhZzpcImZsYWctbXVcIn0se25hbWU6XCJNYWxkaXZlc1wiLGZsYWc6XCJmbGFnLW12XCJ9LHtuYW1lOlwiTWFsYXdpXCIsZmxhZzpcImZsYWctbXdcIn0se25hbWU6XCJNZXhpY29cIixmbGFnOlwiZmxhZy1teFwifSx7bmFtZTpcIk1hbGF5c2lhXCIsZmxhZzpcImZsYWctbXlcIn0se25hbWU6XCJNb3phbWJpcXVlXCIsZmxhZzpcImZsYWctbXpcIn0se25hbWU6XCJOYW1pYmlhXCIsZmxhZzpcImZsYWctbmFcIn0se25hbWU6XCJOZXcgQ2FsZWRvbmlhXCIsZmxhZzpcImZsYWctbmNcIn0se25hbWU6XCJOaWdlclwiLGZsYWc6XCJmbGFnLW5lXCJ9LHtuYW1lOlwiTm9yZm9sayBJc2xhbmRcIixmbGFnOlwiZmxhZy1uZlwifSx7bmFtZTpcIk5pZ2VyaWFcIixmbGFnOlwiZmxhZy1uZ1wifSx7bmFtZTpcIk5pY2FyYWd1YVwiLGZsYWc6XCJmbGFnLW5pXCJ9LHtuYW1lOlwiTmV0aGVybGFuZHNcIixmbGFnOlwiZmxhZy1ubFwifSx7bmFtZTpcIk5vcndheVwiLGZsYWc6XCJmbGFnLW5vXCJ9LHtuYW1lOlwiTmVwYWxcIixmbGFnOlwiZmxhZy1ucFwifSx7bmFtZTpcIk5hdXJ1XCIsZmxhZzpcImZsYWctbnJcIn0se25hbWU6XCJOaXVlXCIsZmxhZzpcImZsYWctbnVcIn0se25hbWU6XCJOZXcgWmVhbGFuZFwiLGZsYWc6XCJmbGFnLW56XCJ9LHtuYW1lOlwiT21hblwiLGZsYWc6XCJmbGFnLW9tXCJ9LHtuYW1lOlwiUGFuYW1hXCIsZmxhZzpcImZsYWctcGFcIn0se25hbWU6XCJQZXJ1XCIsZmxhZzpcImZsYWctcGVcIn0se25hbWU6XCJGcmVuY2ggUG9seW5lc2lhXCIsZmxhZzpcImZsYWctcGZcIn0se25hbWU6XCJQYXB1YSBOZXcgR3VpbmVhXCIsZmxhZzpcImZsYWctcGdcIn0se25hbWU6XCJQaGlsaXBwaW5lc1wiLGZsYWc6XCJmbGFnLXBoXCJ9LHtuYW1lOlwiUGFraXN0YW5cIixmbGFnOlwiZmxhZy1wa1wifSx7bmFtZTpcIlBvbGFuZFwiLGZsYWc6XCJmbGFnLXBsXCJ9LHtuYW1lOlwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwiLGZsYWc6XCJmbGFnLXBtXCJ9LHtuYW1lOlwiUGl0Y2Fpcm5cIixmbGFnOlwiZmxhZy1wblwifSx7bmFtZTpcIlB1ZXJ0byBSaWNvXCIsZmxhZzpcImZsYWctcHJcIn0se25hbWU6XCJQYWxlc3RpbmUsIFN0YXRlIG9mXCIsZmxhZzpcImZsYWctcHNcIn0se25hbWU6XCJQb3J0dWdhbFwiLGZsYWc6XCJmbGFnLXB0XCJ9LHtuYW1lOlwiUGFsYXVcIixmbGFnOlwiZmxhZy1wd1wifSx7bmFtZTpcIlBhcmFndWF5XCIsZmxhZzpcImZsYWctcHlcIn0se25hbWU6XCJRYXRhclwiLGZsYWc6XCJmbGFnLXFhXCJ9LHtuYW1lOlwiUsOpdW5pb25cIixmbGFnOlwiZmxhZy1yZVwifSx7bmFtZTpcIlJvbWFuaWFcIixmbGFnOlwiZmxhZy1yb1wifSx7bmFtZTpcIlNlcmJpYVwiLGZsYWc6XCJmbGFnLXJzXCJ9LHtuYW1lOlwiUnVzc2lhbiBGZWRlcmF0aW9uXCIsZmxhZzpcImZsYWctcnVcIn0se25hbWU6XCJSd2FuZGFcIixmbGFnOlwiZmxhZy1yd1wifSx7bmFtZTpcIlNhdWRpIEFyYWJpYVwiLGZsYWc6XCJmbGFnLXNhXCJ9LHtuYW1lOlwiU29sb21vbiBJc2xhbmRzXCIsZmxhZzpcImZsYWctc2JcIn0se25hbWU6XCJTZXljaGVsbGVzXCIsZmxhZzpcImZsYWctc2NcIn0se25hbWU6XCJTdWRhblwiLGZsYWc6XCJmbGFnLXNkXCJ9LHtuYW1lOlwiU3dlZGVuXCIsZmxhZzpcImZsYWctc2VcIn0se25hbWU6XCJTaW5nYXBvcmVcIixmbGFnOlwiZmxhZy1zZ1wifSx7bmFtZTpcIlNhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhXCIsZmxhZzpcImZsYWctc2hcIn0se25hbWU6XCJTbG92ZW5pYVwiLGZsYWc6XCJmbGFnLXNpXCJ9LHtuYW1lOlwiU3ZhbGJhcmQgYW5kIEphbiBNYXllblwiLGZsYWc6XCJmbGFnLXNqXCJ9LHtuYW1lOlwiU2xvdmFraWFcIixmbGFnOlwiZmxhZy1za1wifSx7bmFtZTpcIlNpZXJyYSBMZW9uZVwiLGZsYWc6XCJmbGFnLXNsXCJ9LHtuYW1lOlwiU2FuIE1hcmlub1wiLGZsYWc6XCJmbGFnLXNtXCJ9LHtuYW1lOlwiU2VuZWdhbFwiLGZsYWc6XCJmbGFnLXNuXCJ9LHtuYW1lOlwiU29tYWxpYVwiLGZsYWc6XCJmbGFnLXNvXCJ9LHtuYW1lOlwiU3VyaW5hbWVcIixmbGFnOlwiZmxhZy1zclwifSx7bmFtZTpcIlNvdXRoIFN1ZGFuXCIsZmxhZzpcImZsYWctc3NcIn0se25hbWU6XCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIixmbGFnOlwiZmxhZy1zdFwifSx7bmFtZTpcIkVsIFNhbHZhZG9yXCIsZmxhZzpcImZsYWctc3ZcIn0se25hbWU6XCJTaW50IE1hYXJ0ZW4gKER1dGNoIHBhcnQpXCIsZmxhZzpcImZsYWctc3hcIn0se25hbWU6XCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLGZsYWc6XCJmbGFnLXN5XCJ9LHtuYW1lOlwiU3dhemlsYW5kXCIsZmxhZzpcImZsYWctc3pcIn0se25hbWU6XCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIixmbGFnOlwiZmxhZy10Y1wifSx7bmFtZTpcIkNoYWRcIixmbGFnOlwiZmxhZy10ZFwifSx7bmFtZTpcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllc1wiLGZsYWc6XCJmbGFnLXRmXCJ9LHtuYW1lOlwiVG9nb1wiLGZsYWc6XCJmbGFnLXRnXCJ9LHtuYW1lOlwiVGhhaWxhbmRcIixmbGFnOlwiZmxhZy10aFwifSx7bmFtZTpcIlRhamlraXN0YW5cIixmbGFnOlwiZmxhZy10alwifSx7bmFtZTpcIlRva2VsYXVcIixmbGFnOlwiZmxhZy10a1wifSx7bmFtZTpcIlRpbW9yLUxlc3RlXCIsZmxhZzpcImZsYWctdGxcIn0se25hbWU6XCJUdXJrbWVuaXN0YW5cIixmbGFnOlwiZmxhZy10bVwifSx7bmFtZTpcIlR1bmlzaWFcIixmbGFnOlwiZmxhZy10blwifSx7bmFtZTpcIlRvbmdhXCIsZmxhZzpcImZsYWctdG9cIn0se25hbWU6XCJUdXJrZXlcIixmbGFnOlwiZmxhZy10clwifSx7bmFtZTpcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIixmbGFnOlwiZmxhZy10dFwifSx7bmFtZTpcIlR1dmFsdVwiLGZsYWc6XCJmbGFnLXR2XCJ9LHtuYW1lOlwiVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYVwiLGZsYWc6XCJmbGFnLXR3XCJ9LHtuYW1lOlwiVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZlwiLGZsYWc6XCJmbGFnLXR6XCJ9LHtuYW1lOlwiVWtyYWluZVwiLGZsYWc6XCJmbGFnLXVhXCJ9LHtuYW1lOlwiVWdhbmRhXCIsZmxhZzpcImZsYWctdWdcIn0se25hbWU6XCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIixmbGFnOlwiZmxhZy11bVwifSx7bmFtZTpcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLGZsYWc6XCJmbGFnLXVzXCJ9LHtuYW1lOlwiVXJ1Z3VheVwiLGZsYWc6XCJmbGFnLXV5XCJ9LHtuYW1lOlwiVXpiZWtpc3RhblwiLGZsYWc6XCJmbGFnLXV6XCJ9LHtuYW1lOlwiSG9seSBTZWVcIixmbGFnOlwiZmxhZy12YVwifSx7bmFtZTpcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsZmxhZzpcImZsYWctdmNcIn0se25hbWU6XCJWZW5lenVlbGEsIEJvbGl2YXJpYW4gUmVwdWJsaWMgb2ZcIixmbGFnOlwiZmxhZy12ZVwifSx7bmFtZTpcIlZpcmdpbiBJc2xhbmRzLCBCcml0aXNoXCIsZmxhZzpcImZsYWctdmdcIn0se25hbWU6XCJWaXJnaW4gSXNsYW5kcywgVS5TLlwiLGZsYWc6XCJmbGFnLXZpXCJ9LHtuYW1lOlwiVmlldCBOYW1cIixmbGFnOlwiZmxhZy12blwifSx7bmFtZTpcIlZhbnVhdHVcIixmbGFnOlwiZmxhZy12dVwifSx7bmFtZTpcIldhbGxpcyBhbmQgRnV0dW5hXCIsZmxhZzpcImZsYWctd2ZcIn0se25hbWU6XCJTYW1vYVwiLGZsYWc6XCJmbGFnLXdzXCJ9LHtuYW1lOlwiWWVtZW5cIixmbGFnOlwiZmxhZy15ZVwifSx7bmFtZTpcIk1heW90dGVcIixmbGFnOlwiZmxhZy15dFwifSx7bmFtZTpcIlNvdXRoIEFmcmljYVwiLGZsYWc6XCJmbGFnLXphXCJ9LHtuYW1lOlwiWmFtYmlhXCIsZmxhZzpcImZsYWctem1cIn0se25hbWU6XCJaaW1iYWJ3ZVwiLGZsYWc6XCJmbGFnLXp3XCJ9XS5maWx0ZXIoKGZ1bmN0aW9uKGNvdW50cnkpe3JldHVybi0xIT1jb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCRxdWVyeS50b0xvd2VyQ2FzZSgpKX0pKX19XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlNraWxsc0N0cmxcIixbXCIkc2NvcGVcIixcIiR3aW5kb3dcIixmdW5jdGlvbigkc2NvcGUsJHdpbmRvdyl7JHNjb3BlLnNlbGVjdGVkU2tpbGw9MCwkc2NvcGUuc2tpbGxzVmlzaWJsZT0hMSwkc2NvcGUucHJvamVjdHM9W10sJHNjb3BlLmxhYmVscz1bXCJEb3dubG9hZCBTYWxlc1wiLFwiSW4tU3RvcmUgU2FsZXNcIixcIk1haWwtT3JkZXIgU2FsZXNcIl0sJHNjb3BlLmRhdGE9WzMwMCw1MDAsMTAwXSwkLmdldEpTT04oXCIvZXhwZXJpZW5jZS5qc29uXCIsKGZ1bmN0aW9uKGRhdGEpeyRzY29wZS5wcm9qZWN0cz1kYXRhLnJlZHVjZSgoKHByb2plY3RzLGVtcGxveWVyKT0+ZW1wbG95ZXIucHJvamVjdHM/ZW1wbG95ZXIucHJvamVjdHMuY29uY2F0KHByb2plY3RzKTpwcm9qZWN0cykse30pfSkpLCRzY29wZS5maWx0ZXJlZFByb2plY3RzPSgpPT4kc2NvcGUucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0PT5wcm9qZWN0LnNraWxscyYmcHJvamVjdC5za2lsbHMuaW5jbHVkZXMoJHNjb3BlLnNlbGVjdGVkU2tpbGwuY29kZSkpKSwkLmdldEpTT04oXCIvc2tpbGxzLmpzb25cIiwoZnVuY3Rpb24oZGF0YSl7Y29uc3Qgc2tpbGxzPWRhdGEuZmlsdGVyKChza2lsbD0+c2tpbGwuZW5hYmxlZCkpOyRzY29wZS5jYXRlZ29yaWVzPXNraWxscy5yZWR1Y2UoKGZ1bmN0aW9uKGNhdGVnb3JpZXMsc2tpbGwpe3JldHVybiBjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XT9jYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XS5wdXNoKHNraWxsKTpjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XT1bc2tpbGxdLGNhdGVnb3JpZXN9KSx7fSksJHNjb3BlLnNldFNlbGVjdGVkU2tpbGw9ZnVuY3Rpb24oc2tpbGwpeyRzY29wZS5zZWxlY3RlZFNraWxsPXNraWxsLCRzY29wZS5zZWxlY3RlZFNraWxsLmNoYXJ0T3B0aW9ucz17Y3V0b3V0UGVyY2VudGFnZTo4MCxjaXJjdW1mZXJlbmNlOjIqTWF0aC5QSSxtYWludGFpbkFzcGVjdFJhdGlvOiEwLHRvb2x0aXBzOntlbmFibGVkOiExfX0sJHNjb3BlLnNlbGVjdGVkU2tpbGwuY2hhcnRTdHlsZT17XCJiYWNrZ3JvdW5kLWltYWdlXCI6XCJ1cmwoL3NraWxscy9cIiskc2NvcGUuc2VsZWN0ZWRTa2lsbC5pbWFnZStcIilcIixcImJhY2tncm91bmQtcmVwZWF0XCI6XCJuby1yZXBlYXRcIixcImJhY2tncm91bmQtc2l6ZVwiOlwiNjAlXCIsXCJiYWNrZ3JvdW5kLXBvc2l0aW9uXCI6XCI1MCUgNTAlXCJ9fSwkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCgkc2NvcGUuc2tpbGxzWzBdKSwkc2NvcGUuJGFwcGx5KCl9KSl9XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlRlblRoaW5nc0N0cmxcIixbXCIkc2NvcGVcIixcIiRsb2NhdGlvblwiLFwiVGVuVGhpbmdzU3ZjXCIsZnVuY3Rpb24oJHNjb3BlLCRsb2NhdGlvbixUZW5UaGluZ3NTdmMpe2Z1bmN0aW9uIGZsYXNoKGVsZW1lbnQpe2NvbnN0IGNvbG9yPSQoZWxlbWVudCkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiKTskKGVsZW1lbnQpLmFuaW1hdGUoe2JhY2tncm91bmRDb2xvcjpcIiNGQTgwNzJcIn0sMTAwLCgoKT0+eyQoZWxlbWVudCkuYW5pbWF0ZSh7YmFja2dyb3VuZENvbG9yOmNvbG9yfSwxMDApfSkpfSRzY29wZS5zZWFyY2g9e25hbWU6XCJcIix2YWx1ZXM6XCJcIn0sJHNjb3BlLmtleURvd249ZT0+e3N3aXRjaCgoZT1lfHx3aW5kb3cuZXZlbnQpLmtleUNvZGUpe2Nhc2UgOTokKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSYmc2V0VGltZW91dCgoKCk9Pnskc2NvcGUuYWRkVmFsdWUoKX0pLDEwMCk7YnJlYWs7Y2FzZSAxMzokKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKT8kc2NvcGUuYWRkVmFsdWUoKTokKFwiI25ldy12YWx1ZVwiKS5pcyhcIjpmb2N1c1wiKSYmJChcIiNuZXctYmx1cmJcIikuZm9jdXMoKX19LCRzY29wZS5zZWFyY2hOYW1lPVwiXCIsJHNjb3BlLm5ld0l0ZW09e30sJHNjb3BlLnNldENhdGVnb3J5RmlsdGVyPWNhdGVnb3J5PT4kc2NvcGUuY2F0ZWdvcnlGaWx0ZXI9Y2F0ZWdvcnksJHNjb3BlLnNldFVzZXJGaWx0ZXI9dXNlcj0+JHNjb3BlLnVzZXJGaWx0ZXI9dXNlciwkc2NvcGUuc2V0VXBkYXRlRmlsdGVyPXR5cGU9PiRzY29wZS51cGRhdGVGaWx0ZXI9dHlwZSwkc2NvcGUuc2V0TGFuZ3VhZ2VGaWx0ZXI9bGFuZ3VhZ2U9PiRzY29wZS5sYW5ndWFnZUZpbHRlcj1sYW5ndWFnZSwkc2NvcGUuZmlsdGVyZWRMaXN0cz0oKT0+JHNjb3BlLmxpc3RzPyRzY29wZS5saXN0cy5maWx0ZXIoKCh7aXNEeW5hbWljfSk9PlwiYWxsXCI9PT0kc2NvcGUudXBkYXRlRmlsdGVyfHwhKFwic3RhdGljXCI9PT0kc2NvcGUudXBkYXRlRmlsdGVyJiYhMD09PWlzRHluYW1pY3x8XCJkeW5hbWljXCI9PT0kc2NvcGUudXBkYXRlRmlsdGVyJiYhMT09PWlzRHluYW1pYykpKS5maWx0ZXIoKCh7Y2F0ZWdvcmllc30pPT5cIkFsbFwiPT09JHNjb3BlLmNhdGVnb3J5RmlsdGVyfHwoY2F0ZWdvcmllcy5sZW5ndGg+MD9jYXRlZ29yaWVzLmluZGV4T2YoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKT49MDpcIkJsYW5rXCI9PT0kc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpKSkuZmlsdGVyKCgoe2NyZWF0b3J9KT0+XCJBbGxcIj09PSRzY29wZS51c2VyRmlsdGVyfHxjcmVhdG9yPT09JHNjb3BlLnVzZXJGaWx0ZXIpKS5maWx0ZXIoKCh7bGFuZ3VhZ2V9KT0+XCJhbGxcIj09PSRzY29wZS5sYW5ndWFnZUZpbHRlci5jb2RlfHxsYW5ndWFnZT09PSRzY29wZS5sYW5ndWFnZUZpbHRlci5jb2RlKSk6W10sJHNjb3BlLiRvbihcImxvZ2luXCIsKF89Pnskc2NvcGUuZ2V0TGlzdHMoKSxUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpLnRoZW4oKHJlc3BvbnNlPT57JHNjb3BlLmNhdGVnb3JpZXM9cmVzcG9uc2UuZGF0YSwkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJzPSRzY29wZS5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnk9PmNhdGVnb3J5KSksJHNjb3BlLmNhdGVnb3J5RmlsdGVycy5wdXNoKFwiQWxsXCIpLCRzY29wZS5jYXRlZ29yeUZpbHRlcnMucHVzaChcIkJsYW5rXCIpLCRzY29wZS5jYXRlZ29yeUZpbHRlcj1cIkFsbFwiLCRzY29wZS51cGRhdGVGaWx0ZXI9XCJhbGxcIn0pKSxUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCkudGhlbigocmVzcG9uc2U9Pnskc2NvcGUubGFuZ3VhZ2VzPXJlc3BvbnNlLmRhdGEsJHNjb3BlLmxhbmd1YWdlRmlsdGVycz0kc2NvcGUubGFuZ3VhZ2VzLm1hcCgobGFuZ3VhZ2U9Pmxhbmd1YWdlKSksJHNjb3BlLmxhbmd1YWdlRmlsdGVycy5wdXNoKHtuYW1lOlwiQWxsXCIsY29kZTpcImFsbFwifSksJHNjb3BlLmxhbmd1YWdlRmlsdGVyPXtuYW1lOlwiQWxsXCIsY29kZTpcImFsbFwifX0pKSwkbG9jYXRpb24uc2VhcmNoKCkubGlzdCYmJHNjb3BlLnNlbGVjdExpc3Qoe19pZDokbG9jYXRpb24uc2VhcmNoKCkubGlzdH0pfSkpLCRzY29wZS5saXN0T3JkZXI9e2ZpZWxkOlwiZGF0ZVwiLGRpcmVjdGlvbjohMCxsYWJlbDpcIkNyZWF0aW9uIERhdGVcIn0sJHNjb3BlLnZhbHVlT3JkZXI9e2ZpZWxkOlwidmFsdWVcIixkaXJlY3Rpb246ITEsbGFiZWw6XCJWYWx1ZVwifSwkc2NvcGUuc29ydD0oc29ydGVyLHNvcnRGaWVsZCxzb3J0TGFiZWwpPT57JHNjb3BlW3NvcnRlcl0ubGFiZWw9c29ydExhYmVsLCRzY29wZVtzb3J0ZXJdLmZpZWxkPT09c29ydEZpZWxkPyRzY29wZVtzb3J0ZXJdLmRpcmVjdGlvbj0hJHNjb3BlW3NvcnRlcl0uZGlyZWN0aW9uOigkc2NvcGVbc29ydGVyXS5maWVsZD1zb3J0RmllbGQsJHNjb3BlW3NvcnRlcl0uZGlyZWN0aW9uPSEwKX0sJHNjb3BlLmdldExhbmd1YWdlQ291bnQ9bGFuZ3VhZ2U9PntpZighJHNjb3BlLmxpc3RzKXJldHVybiAwO2NvbnN0IGNvdW50PSRzY29wZS5saXN0cy5maWx0ZXIoKGxpc3Q9PihcIkFsbFwiPT09JHNjb3BlLmNhdGVnb3J5RmlsdGVyfHxsaXN0LmNhdGVnb3JpZXMuaW5jbHVkZXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKSkmJihcImFsbFwiPT09bGFuZ3VhZ2UuY29kZXx8bGlzdC5sYW5ndWFnZT09PWxhbmd1YWdlLmNvZGUpJiYoXCJBbGxcIj09PSRzY29wZS51c2VyRmlsdGVyfHxsaXN0LmNyZWF0b3I9PT0kc2NvcGUudXNlckZpbHRlcikmJihcImFsbFwiPT09JHNjb3BlLnVwZGF0ZUZpbHRlcnx8bGlzdC5pc0R5bmFtaWM9PT0oXCJkeW5hbWljXCI9PT0kc2NvcGUudXBkYXRlRmlsdGVyKSkpKS5sZW5ndGg7cmV0dXJuYCR7Y291bnR9IC0gJHtNYXRoLnJvdW5kKGNvdW50LyRzY29wZS5saXN0cy5sZW5ndGgqMTAwKX0lYH0sJHNjb3BlLmdldENhdGVnb3J5Q291bnQ9Y2F0ZWdvcnk9PntpZighJHNjb3BlLmxpc3RzKXJldHVybiAwO2NvbnN0IGNvdW50PSRzY29wZS5saXN0cy5maWx0ZXIoKGxpc3Q9PiEoIShcIkFsbFwiPT09Y2F0ZWdvcnl8fGxpc3QuY2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KT49MCl8fFwiYWxsXCIhPT0kc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZSYmbGlzdC5sYW5ndWFnZSE9PSRzY29wZS5sYW5ndWFnZUZpbHRlci5jb2RlfHxcIkFsbFwiIT09JHNjb3BlLnVzZXJGaWx0ZXImJmxpc3QuY3JlYXRvciE9PSRzY29wZS51c2VyRmlsdGVyfHxcImFsbFwiIT09JHNjb3BlLnVwZGF0ZUZpbHRlciYmbGlzdC5pc0R5bmFtaWMhPT0oXCJkeW5hbWljXCI9PT0kc2NvcGUudXBkYXRlRmlsdGVyKSkpKS5sZW5ndGg7cmV0dXJuYCR7Y291bnR9IC0gJHtNYXRoLnJvdW5kKGNvdW50LyRzY29wZS5saXN0cy5sZW5ndGgqMTAwKX0lYH0sJHNjb3BlLmdldFVwZGF0ZUNvdW50PXR5cGU9PntpZighJHNjb3BlLmxpc3RzKXJldHVybiAwO2NvbnN0IGNvdW50PSRzY29wZS5saXN0cy5maWx0ZXIoKGxpc3Q9PlwiYWxsXCI9PT10eXBlfHxsaXN0LmlzRHluYW1pYyYmXCJkeW5hbWljXCI9PT10eXBlfHwhbGlzdC5pc0R5bmFtaWMmJlwic3RhdGljXCI9PT10eXBlKSkubGVuZ3RoO3JldHVybmAke2NvdW50fSAtICR7TWF0aC5yb3VuZChjb3VudC8kc2NvcGUubGlzdHMubGVuZ3RoKjEwMCl9JWB9LCRzY29wZS5nZXRMaXN0cz0oKT0+eyRzY29wZS5sb2FkaW5nfHwoJHNjb3BlLmxvYWRpbmc9ITAsVGVuVGhpbmdzU3ZjLmdldExpc3RzKCkudGhlbigoKHtkYXRhfSk9Pnskc2NvcGUubGlzdHM9ZGF0YSwkc2NvcGUudXNlckZpbHRlcnM9e30sJHNjb3BlLnVzZXJGaWx0ZXJzLkFsbD0kc2NvcGUubGlzdHMubGVuZ3RoLCRzY29wZS51c2VyRmlsdGVycz0kc2NvcGUubGlzdHMuc29ydCgoKGxpc3QxLGxpc3QyKT0+bGlzdDEuY3JlYXRvcj5saXN0Mi5jcmVhdG9yKSkucmVkdWNlKCgodXNlcnMse2NyZWF0b3J9KT0+KHVzZXJzW2NyZWF0b3JdfHwodXNlcnNbY3JlYXRvcl09MCksdXNlcnNbY3JlYXRvcl0rKyx1c2VycykpLCRzY29wZS51c2VyRmlsdGVycyksJHNjb3BlLnVzZXJDb3VudD1PYmplY3Qua2V5cygkc2NvcGUudXNlckZpbHRlcnMpLmxlbmd0aCwkc2NvcGUudXNlckZpbHRlcnM9c29ydE9iamVjdCgkc2NvcGUudXNlckZpbHRlcnMsITEpLCRzY29wZS51c2VyRmlsdGVyPVwiQWxsXCIsJHNjb3BlLmxvYWRpbmc9ITF9KSkpfSwkc2NvcGUuc2VsZWN0TGlzdD1saXN0PT57VGVuVGhpbmdzU3ZjLmdldExpc3QobGlzdCkudGhlbigoKHtkYXRhfSk9Pnskc2NvcGUuc2VsZWN0ZWRMaXN0PWRhdGEsJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIixkYXRhLl9pZCl9KSkuY2F0Y2goKGVycj0+Y29uc29sZS5lcnJvcihlcnIpKSl9LCRzY29wZS5zZWxlY3RDYXRlZ29yeT1jYXRlZ29yeT0+eyRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcnk9Y2F0ZWdvcnksJChcIiNjYXRlZ29yeS1zZWxlY3RcIikuaGlkZSgpfSwkc2NvcGUuZ2V0Q2F0ZWdvcnlDbGFzcz1jYXRlZ29yeT0+JHNjb3BlLnNlbGVjdGVkTGlzdCYmJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpPj0wP1wiYnRuLXN1Y2Nlc3NcIjpcImJ0bi1kZWZhdWx0XCIsJHNjb3BlLnRvZ2dsZUNhdGVnb3J5PWNhdGVnb3J5PT57Y29uc3QgY2F0ZWdvcnlJbmRleD0kc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSk7Y2F0ZWdvcnlJbmRleD49MD8kc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuc3BsaWNlKGNhdGVnb3J5SW5kZXgsMSk6JHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpfSwkc2NvcGUuc2VsZWN0TGFuZ3VhZ2U9bGFuZ3VhZ2U9Pnskc2NvcGUuc2VsZWN0ZWRMaXN0Lmxhbmd1YWdlPWxhbmd1YWdlLmNvZGU7Y29uc3Qgbm9uRW5nbGlzaEluZGV4PSRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5pbmRleE9mKFwiTm9uLUVuZ2xpc2hcIik7XCJFTlwiIT09bGFuZ3VhZ2UuY29kZSYmbm9uRW5nbGlzaEluZGV4PDA/JHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLnB1c2goXCJOb24tRW5nbGlzaFwiKTpcIkVOXCI9PT1sYW5ndWFnZS5jb2RlJiZub25FbmdsaXNoSW5kZXg+PTAmJiRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5zcGxpY2Uobm9uRW5nbGlzaEluZGV4LDEpfSwkc2NvcGUuYWRkTGlzdD0oKT0+e2NvbnN0IGN1cnJlbnRMYW5ndWFnZT0kc2NvcGUuc2VsZWN0ZWRMaXN0PyRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2U6XCJFTlwiOyRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsXCJcIiksJHNjb3BlLnNlbGVjdGVkTGlzdD17bmFtZTpcIlwiLGNyZWF0b3I6JHNjb3BlLmN1cnJlbnRVc2VyLl9pZCxkYXRlOm5ldyBEYXRlLHZhbHVlczpbXSxhbnN3ZXJzOjAsaXNEeW5hbWljOiEwLGNhdGVnb3J5OlwiXCIsY2F0ZWdvcmllczpbXSxsYW5ndWFnZTpjdXJyZW50TGFuZ3VhZ2V9fSwkc2NvcGUuaGFzRHVwbGljYXRlPSgpPT4kc2NvcGUuc2VsZWN0ZWRMaXN0JiYkc2NvcGUubmV3SXRlbS52YWx1ZSYmXy5zb21lKCRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLChhbnN3ZXI9PmFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCk9PSRzY29wZS5uZXdJdGVtLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSkpLCRzY29wZS5hZGRWYWx1ZT0oKT0+eyRzY29wZS5uZXdJdGVtLnZhbHVlJiYoXy5zb21lKCRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLChhbnN3ZXI9PmFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCk9PSRzY29wZS5uZXdJdGVtLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSkpP2FsZXJ0KGAkeyRzY29wZS5uZXdJdGVtLnZhbHVlfSBpcyBhbHJlYWR5IGluIHRoZSBsaXN0YCk6KCRzY29wZS5uZXdJdGVtLmNyZWF0b3I9JHNjb3BlLmN1cnJlbnRVc2VyLl9pZCwkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy51bnNoaWZ0KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoJHNjb3BlLm5ld0l0ZW0pKSksJHNjb3BlLnNlbGVjdGVkTGlzdC5hbnN3ZXJzKyssJHNjb3BlLm5ld0l0ZW0udmFsdWU9XCJcIiwkc2NvcGUubmV3SXRlbS5ibHVyYj1cIlwiLCRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmxlbmd0aD49MTAmJiRzY29wZS5zZWxlY3RlZExpc3QubmFtZSYmJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLmxlbmd0aD4wJiYkc2NvcGUuc2F2ZUxpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCkpKSwkKFwiI25ldy12YWx1ZVwiKS5mb2N1cygpfSwkc2NvcGUucmVwb3J0TGlzdD1saXN0PT57bGlzdC5yZXBvcnRlZD0hMCxUZW5UaGluZ3NTdmMucmVwb3J0TGlzdCgkc2NvcGUuY3VycmVudFVzZXIsbGlzdCl9LCRzY29wZS5zYXZlTGlzdD1saXN0PT57JHNjb3BlLnNhdmluZ3x8KGxpc3QudmFsdWVzPWxpc3QudmFsdWVzLmZpbHRlcigoKHt2YWx1ZX0pPT52YWx1ZSkpLGxpc3QudmFsdWVzLmxlbmd0aD49MTAmJmxpc3QubmFtZSYmbGlzdC5jYXRlZ29yaWVzLmxlbmd0aD4wPygkc2NvcGUuc2F2aW5nPSEwLFRlblRoaW5nc1N2Yy5zYXZlTGlzdCgkc2NvcGUuY3VycmVudFVzZXIsbGlzdCkudGhlbigoKHtkYXRhfSk9PntpZigkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCl7Zm9yKGxldCBpPTA7aTwkc2NvcGUubGlzdHMubGVuZ3RoO2krKylpZigkc2NvcGUubGlzdHNbaV0uX2lkPT09ZGF0YS5faWQpeyRzY29wZS5saXN0c1tpXT1kYXRhO2JyZWFrfSRzY29wZS5zZWxlY3RMaXN0KGxpc3QpfWVsc2UgJHNjb3BlLmxpc3RzLnVuc2hpZnQoZGF0YSksJHNjb3BlLnNlbGVjdExpc3QoZGF0YSk7JHNjb3BlLnNhdmluZz0hMX0pLChlcnI9Pntjb25zb2xlLmVycm9yKGVyciksJHNjb3BlLnNhdmluZz0hMX0pKSk6bGlzdC52YWx1ZXMubGVuZ3RoPDEwP2FsZXJ0KFwiTGlzdHMgbXVzdCBjb250YWluIDEwIG9yIG1vcmUgdmFsdWVzIVwiKTpsaXN0Lm5hbWU/Zmxhc2goXCIubGlzdC1jYXRlZ29yeVwiKTpmbGFzaChcIiNsaXN0LW5hbWVcIikpfSwkc2NvcGUuZGVsZXRlTGlzdD1saXN0PT57bGlzdC5faWQ/Y29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBsaXN0P1wiKSYmVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3QobGlzdCkudGhlbigocmVzcG9uc2U9Pnskc2NvcGUuZ2V0TGlzdHMoKSwkc2NvcGUuc2VsZWN0ZWRMaXN0PW51bGx9KSk6KCRzY29wZS5saXN0cz0kc2NvcGUubGlzdHMuZmlsdGVyKCgoe19pZH0pPT5faWQpKSwkc2NvcGUuc2VsZWN0ZWRMaXN0PW51bGwpfSwkc2NvcGUubGlzdEJ1dHRvbkNsYXNzPWxpc3Q9Pntjb25zdCB2YWx1ZXM9bGlzdC52YWx1ZXMubGVuZ3RoLGJsdXJicz1saXN0LmJsdXJicztyZXR1cm4gdmFsdWVzPT09Ymx1cmJzJiZsaXN0LmRlc2NyaXB0aW9uP1wiYnRuLWRlZmF1bHRcIjowIT09Ymx1cmJzfHxsaXN0LmRlc2NyaXB0aW9uPzA9PT1ibHVyYnMmJmxpc3QuZGVzY3JpcHRpb24/XCJidG4taW5mb1wiOlwiYnRuLXByaW1hcnlcIjpcImJ0bi13YXJuaW5nXCJ9LCRzY29wZS5nZXRCbHVyYnM9dHlwZT0+eyRzY29wZS5nZXR0aW5nQmx1cmJzPSEwLFRlblRoaW5nc1N2Yy5nZXRCbHVyYnMoJHNjb3BlLnNlbGVjdGVkTGlzdCx0eXBlKS50aGVuKCgoKT0+eyRzY29wZS5zZWxlY3RMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpLCRzY29wZS5nZXR0aW5nQmx1cmJzPSExfSkpLmNhdGNoKChlcnI9Pntjb25zb2xlLmVycm9yKGVyciksJHNjb3BlLmdldHRpbmdCbHVyYnM9ITF9KSl9fV0pLGFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NBZG1pbkN0cmxcIixbXCIkc2NvcGVcIixcIlRlblRoaW5nc1N2Y1wiLFwiVXNlclN2Y1wiLGZ1bmN0aW9uKCRzY29wZSxUZW5UaGluZ3NTdmMsVXNlclN2Yyl7JHNjb3BlLiRvbihcImxvZ2luXCIsKF89Pnskc2NvcGUuY3VycmVudFVzZXIuYWRtaW4mJmdldFVzZXJzKCl9KSksJHNjb3BlLm9yZGVyPXtmaWVsZDpcInVzZXJuYW1lXCIscmV2ZXJzZTohMX0sJHNjb3BlLm9yZGVyQnk9ZmllbGQ9Pnskc2NvcGUub3JkZXIuZmllbGQ9PT1maWVsZD8kc2NvcGUub3JkZXIucmV2ZXJzZT0hJHNjb3BlLm9yZGVyLnJldmVyc2U6JHNjb3BlLm9yZGVyPXtmaWVsZCxyZXZlcnNlOiExfX0sJHNjb3BlLmdldFF1ZXVlPSgpPT57JHNjb3BlLmxvYWRpbmc9ITAsVGVuVGhpbmdzU3ZjLmdldFF1ZXVlKCkudGhlbigocmVzcG9uc2U9Pnskc2NvcGUucXVldWU9cmVzcG9uc2UuZGF0YS5yZXBsYWNlKFwiL25cIixcIjxici8+XCIpLCRzY29wZS5sb2FkaW5nPSExfSkpfSwkc2NvcGUuZ2V0UXVldWUoKSxUZW5UaGluZ3NTdmMuZ2V0UGF1c2UoKS50aGVuKChyZXNwb25zZT0+eyRzY29wZS5wYXVzZWQ9cmVzcG9uc2UuZGF0YSxjb25zb2xlLmxvZygkc2NvcGUucGF1c2VkKX0pKTtjb25zdCBnZXRVc2Vycz0oKT0+eyRzY29wZS5sb2FkaW5nPSEwLFVzZXJTdmMuZ2V0VXNlcnMoKS50aGVuKChyZXNwb25zZT0+eyRzY29wZS51c2Vycz1yZXNwb25zZS5kYXRhLmZpbHRlcigodXNlcj0+IXVzZXIuYWRtaW4pKSwkc2NvcGUubG9hZGluZz0hMX0pKX07JHNjb3BlLnRvZ2dsZUJhbj11c2VyPT57JHNjb3BlLmxvYWRpbmc9ITAsVXNlclN2Yy50b2dnbGVCYW4odXNlci5faWQpLnRoZW4oKHJlc3BvbnNlPT57Z2V0VXNlcnMoKX0pKX0sJHNjb3BlLnRvZ2dsZVBhdXNlPXVzZXI9PntUZW5UaGluZ3NTdmMudG9nZ2xlUGF1c2UoKS50aGVuKChyZXNwb25zZT0+eyRzY29wZS5wYXVzZWQ9cmVzcG9uc2UuZGF0YSxjb25zb2xlLmxvZygkc2NvcGUucGF1c2VkKX0pKX19XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlRlblRoaW5nc0N1cmF0ZUN0cmxcIixbXCIkc2NvcGVcIixcIlRlblRoaW5nc1N2Y1wiLGZ1bmN0aW9uKCRzY29wZSxUZW5UaGluZ3NTdmMpeyRzY29wZS4kb24oXCJsb2dpblwiLChfPT57JHNjb3BlLmdldExpc3RzKCksVGVuVGhpbmdzU3ZjLmdldExhbmd1YWdlcygpLnRoZW4oKHJlc3BvbnNlPT57JHNjb3BlLmxhbmd1YWdlcz1yZXNwb25zZS5kYXRhfSkpfSkpLCRzY29wZS5vcmRlcj17ZmllbGQ6XCJuYW1lXCIscmV2ZXJzZTohMX0sJHNjb3BlLm9yZGVyQnk9ZmllbGQ9Pnskc2NvcGUub3JkZXIuZmllbGQ9PT1maWVsZD8kc2NvcGUub3JkZXIucmV2ZXJzZT0hJHNjb3BlLm9yZGVyLnJldmVyc2U6JHNjb3BlLm9yZGVyPXtmaWVsZCxyZXZlcnNlOiExfX0sJHNjb3BlLmdldExpc3RzPSgpPT57JHNjb3BlLmxvYWRpbmc9ITAsVGVuVGhpbmdzU3ZjLmdldExpc3RzKCkudGhlbigoKHtkYXRhfSk9Pnskc2NvcGUubGlzdHM9ZGF0YSwkc2NvcGUubG9hZGluZz0hMX0pKX0sJHNjb3BlLnNldERpZmZpY3VsdHk9KGxpc3QsZGlmZmljdWx0eSk9PntsaXN0LmRpZmZpY3VsdHk9ZGlmZmljdWx0eSxUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7X2lkOmxpc3QuX2lkLGRpZmZpY3VsdHl9KX19XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlRlblRoaW5nc0dhbWVDdHJsXCIsW1wiJHNjb3BlXCIsXCIkc3RhdGVQYXJhbXNcIixcIlRlblRoaW5nc1N2Y1wiLGZ1bmN0aW9uKCRzY29wZSwkc3RhdGVQYXJhbXMsVGVuVGhpbmdzU3ZjKXskc2NvcGUuJG9uKFwibG9naW5cIiwoXz0+eyRzY29wZS5jdXJyZW50VXNlci5hZG1pbiYmZ2V0VXNlcnMoKX0pKSwkc3RhdGVQYXJhbXMuZ2FtZSYmVGVuVGhpbmdzU3ZjLmdldEdhbWUoJHN0YXRlUGFyYW1zLmdhbWUpLnRoZW4oKHJlc3BvbnNlPT57JHNjb3BlLmdhbWU9cmVzcG9uc2UuZGF0YSxjb25zb2xlLmxvZygkc2NvcGUuZ2FtZSl9KSl9XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIldvcmtvdXRDdHJsXCIsW1wiJHNjb3BlXCIsZnVuY3Rpb24oJHNjb3BlKXskc2NvcGUudGltZVJlbWFpbmluZz0wLCRzY29wZS50aW1lRXhlcmNpc2luZz0zMCwkc2NvcGUudGltZVJlc3Rpbmc9MTAsJHNjb3BlLnJlc3Q9ITE7dmFyIGV4ZXJjaXNpbmcsc291bmRzPXtvbjpuZXcgQXVkaW8oXCJvbi53YXZcIiksb2ZmOm5ldyBBdWRpbyhcIm9mZi53YXZcIiksc3dpdGNoOm5ldyBBdWRpbyhcInN3aXRjaC53YXZcIil9LGV4ZXJjaXNlcz1be25hbWU6XCJKdW1waW5nIEphY2tzXCIsc3BsaXQ6ITF9LHtuYW1lOlwiV2FsbCBTaXRcIixzcGxpdDohMX0se25hbWU6XCJQdXNoLVVwXCIsc3BsaXQ6ITF9LHtuYW1lOlwiQ3J1bmNoXCIsc3BsaXQ6ITF9LHtuYW1lOlwiU3RlcC1VcFwiLHNwbGl0OiEwfSx7bmFtZTpcIlNxdWF0XCIsc3BsaXQ6ITF9LHtuYW1lOlwiVHJpY2VwcyBEaXBcIixzcGxpdDohMX0se25hbWU6XCJQbGFua1wiLHNwbGl0OiExfSx7bmFtZTpcIkhpZ2ggS25lZXNcIixzcGxpdDohMX0se25hbWU6XCJMdW5nZVwiLHNwbGl0OiExfSx7bmFtZTpcIlB1c2gtVXAgd2l0aCBSb3RhdGlvblwiLHNwbGl0OiExfSx7bmFtZTpcIlNpZGUgUGxhbmtcIixzcGxpdDohMH1dOyRzY29wZS5wcm9ncmVzcz1mdW5jdGlvbigpe3JldHVybiBleGVyY2lzZXMubGVuZ3RoLU1hdGguZmxvb3IoJHNjb3BlLnRpbWVSZW1haW5pbmcvKCRzY29wZS50aW1lRXhlcmNpc2luZyskc2NvcGUudGltZVJlc3RpbmcpKStcIi9cIitleGVyY2lzZXMubGVuZ3RofSwkc2NvcGUud29ya291dD1mdW5jdGlvbigpe3ZhciBleGNlcmNpc2VUaW1lPSRzY29wZS50aW1lRXhlcmNpc2luZyskc2NvcGUudGltZVJlc3Rpbmc7JHNjb3BlLnRpbWVSZW1haW5pbmc/KGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyksJHNjb3BlLnRpbWVyPVwiXCIsJHNjb3BlLnRpbWVSZW1haW5pbmc9MCwkc2NvcGUucmVzdD0hMSwkc2NvcGUuZXhlcmNpc2U9e25hbWU6XCJcIixzcGxpdDohMX0pOigkc2NvcGUudGltZVJlbWFpbmluZz1leGVyY2lzZXMubGVuZ3RoKmV4Y2VyY2lzZVRpbWUsZXhlcmNpc2luZz1zZXRJbnRlcnZhbCgoZnVuY3Rpb24oKXtpZigkc2NvcGUudGltZVJlbWFpbmluZy0tLDA9PT0kc2NvcGUudGltZVJlbWFpbmluZylyZXR1cm4gJHNjb3BlLmV4ZXJjaXNlPXtuYW1lOlwiRmluaXNoZWQhIENvbmdyYXRzIVwiLHNwbGl0OiExfSwkc2NvcGUudGltZXI9XCJcIiwkc2NvcGUudGltZVJlbWFpbmluZz0wLCRzY29wZS5yZXN0PSExLCRzY29wZS4kYXBwbHkoKSxjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO3ZhciBjdXJyZW50RXhlcmNpc2U9TWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZy9leGNlcmNpc2VUaW1lKSx0aW1lcj0kc2NvcGUudGltZVJlbWFpbmluZy1jdXJyZW50RXhlcmNpc2UqZXhjZXJjaXNlVGltZTskc2NvcGUudGltZXI9dGltZXI+JHNjb3BlLnRpbWVFeGVyY2lzaW5nP3RpbWVyLSRzY29wZS50aW1lRXhlcmNpc2luZzp0aW1lcix0aW1lcj4kc2NvcGUudGltZUV4ZXJjaXNpbmc/JHNjb3BlLnJlc3Q9ITA6JHNjb3BlLnJlc3Q9ITEsJHNjb3BlLmV4ZXJjaXNlPWV4ZXJjaXNlc1tleGVyY2lzZXMubGVuZ3RoLWN1cnJlbnRFeGVyY2lzZS0xXSx0aW1lcj09PSRzY29wZS50aW1lRXhlcmNpc2luZz9zb3VuZHMub24ucGxheSgpOjA9PT10aW1lcj9zb3VuZHMub2ZmLnBsYXkoKTokc2NvcGUuZXhlcmNpc2Uuc3BsaXQmJnRpbWVyPT09TWF0aC5mbG9vcigkc2NvcGUudGltZUV4ZXJjaXNpbmcvMikmJnNvdW5kcy5zd2l0Y2gucGxheSgpLCRzY29wZS4kYXBwbHkoKX0pLDFlMykpfX1dKSxhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5kaXJlY3RpdmUoXCJoZWFkXCIsW1wiJHJvb3RTY29wZVwiLFwiJHN0YXRlXCIsXCIkY29tcGlsZVwiLFwiJGludGVycG9sYXRlXCIsZnVuY3Rpb24oJHJvb3RTY29wZSwkc3RhdGUsJGNvbXBpbGUsJGludGVycG9sYXRlKXt2YXIgZ2V0U3R5bGU9ZnVuY3Rpb24odGVtcGxhdGVTdHlsZVVybCl7dmFyIHN0eWxlPXtocmVmOnRlbXBsYXRlU3R5bGVVcmwscmVsOlwic3R5bGVzaGVldFwifTtyZXR1cm4gc3R5bGUuaHJlZi5tYXRjaCgvXFwubGVzcyQvKSYmKHN0eWxlLnJlbD1cInN0eWxlc2hlZXQvbGVzc1wiKSxzdHlsZX07cmV0dXJue3Jlc3RyaWN0OlwiRVwiLGxpbms6ZnVuY3Rpb24oc2NvcGUsZWxlbSl7c2NvcGUudGVtcGxhdGVTdHlsZXM9W107dmFyIGh0bWw9JzxsaW5rIG5nLWF0dHItcmVsPVwie3tzdHlsZS5yZWx9fVwiIG5nLXJlcGVhdD1cInN0eWxlIGluIHRlbXBsYXRlU3R5bGVzXCIgbmctaHJlZj1cInt7c3R5bGUuaHJlZn19XCI+JztodG1sPShodG1sPWh0bWwucmVwbGFjZSgvXFx7XFx7L2csJGludGVycG9sYXRlLnN0YXJ0U3ltYm9sKCkpKS5yZXBsYWNlKC9cXH1cXH0vZywkaW50ZXJwb2xhdGUuZW5kU3ltYm9sKCkpLGVsZW0uYXBwZW5kKCRjb21waWxlKGh0bWwpKHNjb3BlKSksJHJvb3RTY29wZS4kb24oXCIkc3RhdGVDaGFuZ2VTdGFydFwiLChmdW5jdGlvbihldmVudCx0b1N0YXRlLHRvUGFyYW1zLGZyb21TdGF0ZSxmcm9tUGFyYW1zKXtzY29wZS50ZW1wbGF0ZVN0eWxlcz1mdW5jdGlvbihzdGF0ZSl7Zm9yKHZhciBzdGF0ZXM9e307XCJcIiE9PXN0YXRlLm5hbWU7KXt2YXIgcGFyZW50PSRzdGF0ZS5nZXQoXCJeXCIsc3RhdGUpO3N0YXRlc1twYXJlbnQubmFtZV18fChzdGF0ZXNbcGFyZW50Lm5hbWVdPXt9KSxzdGF0ZS50ZW1wbGF0ZVN0eWxlVXJsJiYoc3RhdGVzW3BhcmVudC5uYW1lXVtcIlwiXXx8KHN0YXRlc1twYXJlbnQubmFtZV1bXCJcIl09Z2V0U3R5bGUoc3RhdGUudGVtcGxhdGVTdHlsZVVybCkpKSxzdGF0ZS52aWV3cyYmXy5mb3JFYWNoKHN0YXRlLnZpZXdzLChmdW5jdGlvbih2aWV3LGtleSl7aWYodmlldy50ZW1wbGF0ZVN0eWxlVXJsKXJldHVybihrZXk9a2V5LnNwbGl0KFwiQFwiKSlbMV0/KHN0YXRlc1trZXlbMV1dfHwoc3RhdGVzW2tleVsxXV09e30pLHZvaWQoc3RhdGVzW2tleVsxXV1ba2V5WzBdXXx8KHN0YXRlc1trZXlbMV1dW2tleVswXV09Z2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKSkpKTp2b2lkKHN0YXRlc1twYXJlbnQubmFtZV1ba2V5WzBdXT1nZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpKX0pKSxzdGF0ZT1wYXJlbnR9dmFyIGZsYXQ9W107cmV0dXJuIF8uZm9yRWFjaChzdGF0ZXMsKGZ1bmN0aW9uKHZpZXdzKXtfLmZvckVhY2godmlld3MsKGZ1bmN0aW9uKHN0eWxlKXtfLmluY2x1ZGVzKGZsYXQsc3R5bGUpfHxmbGF0LnB1c2goc3R5bGUpfSkpfSkpLGZsYXQucmV2ZXJzZSgpLGZsYXR9KHRvU3RhdGUpfSkpfX19XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIkNhdGVnb3JpZXNTdmNcIixbXCIkaHR0cFwiLGZ1bmN0aW9uKCRodHRwKXt2YXIgc3ZjPXRoaXM7c3ZjLmdldENhdGVnb3JpZXM9ZnVuY3Rpb24oKXtyZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS9jYXRlZ29yaWVzXCIpfSxzdmMuZ2V0VGFza3M9ZnVuY3Rpb24oY2F0ZWdvcnkpe3JldHVybiAkaHR0cC5nZXQoXCIvYXBpL2NhdGVnb3JpZXMvXCIrY2F0ZWdvcnkpfSxzdmMuYWRkQ2F0ZWdvcnk9ZnVuY3Rpb24oY2F0ZWdvcnkpe3JldHVybiAkaHR0cC5wb3N0KFwiL2FwaS9jYXRlZ29yaWVzL1wiLGNhdGVnb3J5KX0sc3ZjLmFkZFRhc2s9ZnVuY3Rpb24oY2F0ZWdvcnksdGFzayl7cmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL2NhdGVnb3JpZXMvXCIrY2F0ZWdvcnkrXCIvdGFza3NcIix0YXNrKX0sc3ZjLnNldFByaW9yaXR5TGlzdD1mdW5jdGlvbihsaXN0KXtzdmMuY2hvaWNlcz1saXN0LHN2Yy5wcmlvcml0eUxpc3Q9W107Zm9yKHZhciBpPTA7aTxsaXN0Lmxlbmd0aDtpKyspZm9yKHZhciBqPWkrMTtqPGxpc3QubGVuZ3RoO2orKyl7dmFyIHJhbmRvbT1NYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO3N2Yy5wcmlvcml0eUxpc3QucHVzaCh7aWQ6MCxmaXJzdENob2ljZTpsaXN0WzA9PT1yYW5kb20/aTpqXS5uYW1lLHNlY29uZENob2ljZTpsaXN0WzA9PT1yYW5kb20/ajppXS5uYW1lLGNob2ljZTpcIlwifSl9Zm9yKGkgaW4gZnVuY3Rpb24oYXJyYXkpe3ZhciB0LGksbT1hcnJheS5sZW5ndGg7Zm9yKDttOylpPU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSptLS0pLHQ9YXJyYXlbbV0sYXJyYXlbbV09YXJyYXlbaV0sYXJyYXlbaV09dH0oc3ZjLnByaW9yaXR5TGlzdCksc3ZjLnByaW9yaXR5TGlzdClzdmMucHJpb3JpdHlMaXN0W2ldLmlkPWkrMX0sc3ZjLmdldFByaW9yaXR5TGlzdD1mdW5jdGlvbihsaXN0KXtyZXR1cm4gc3ZjLnByaW9yaXR5TGlzdH19XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIkVtYWlsU3ZjXCIsW1wiJGh0dHBcIixmdW5jdGlvbigkaHR0cCl7dGhpcy5zZW5kPWZ1bmN0aW9uKGVtYWlsKXtyZXR1cm4gY29uc29sZS5sb2coZW1haWwpLCRodHRwLnBvc3QoXCIvYXBpL2VtYWlsXCIsZW1haWwpfX1dKSxhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiRmlsZVN2Y1wiLFtcIiRodHRwXCIsZnVuY3Rpb24oJGh0dHApe3RoaXMuZ2V0SW1hZ2VzPWZ1bmN0aW9uKGZvbGRlcil7cmV0dXJuICRodHRwLmdldChcIi9hcGkvZmlsZXMvaW1hZ2VzL1wiK2ZvbGRlcil9LHRoaXMuZ2V0U291bmRzPWZ1bmN0aW9uKGZvbGRlcil7cmV0dXJuICRodHRwLmdldChcIi9hcGkvZmlsZXMvc291bmRzL1wiK2ZvbGRlcil9fV0pLGFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJHYW1lU3ZjXCIsW1wiJGh0dHBcIixmdW5jdGlvbigkaHR0cCl7dGhpcy5nZXRIaWdoc2NvcmU9ZnVuY3Rpb24oZ2FtZSx1c2VyKXtyZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS9nYW1lcy9cIitnYW1lK1wiL1wiK3VzZXIrXCIvaGlnaHNjb3JlXCIpfSx0aGlzLnNldEhpZ2hzY29yZT1mdW5jdGlvbihnYW1lLHVzZXIsc2NvcmUpe3JldHVybiAkaHR0cC5wb3N0KFwiL2FwaS9nYW1lcy9cIitnYW1lK1wiL1wiK3VzZXIrXCIvaGlnaHNjb3JlXCIse3Njb3JlfSl9fV0pLGFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJMYW5ndWFnZVN2Y1wiLChmdW5jdGlvbigpe3ZhciBzdmM9dGhpcztzdmMubGFuZ3VhZ2VzPVt7Y29kZTpcIkVOXCIsbmFtZTpcIkVuZ2xpc2hcIixmbGFnOlwiZmxhZy1pY29uLWdiXCJ9LHtjb2RlOlwiTkxcIixuYW1lOlwiTmVkZXJsYW5kc1wiLGZsYWc6XCJmbGFnLWljb24tbmxcIn0se2NvZGU6XCJGUlwiLG5hbWU6XCJGcmFuw6dhaXNcIixmbGFnOlwiZmxhZy1pY29uLWZyXCJ9XSxzdmMudGV4dD1be2NvZGU6XCJFTlwifSx7Y29kZTpcIk5MXCJ9LHtjb2RlOlwiRlJcIn1dLHN2Yy5zZWxlY3RlZExhbmd1YWdlPXN2Yy5sYW5ndWFnZXNbMF0sc3ZjLnNldExhbmd1YWdlPWZ1bmN0aW9uKGxhbmd1YWdlKXtyZXR1cm4gc3ZjLnNlbGVjdGVkTGFuZ3VhZ2U9bGFuZ3VhZ2UsbGFuZ3VhZ2V9LHN2Yy5nZXRMYW5ndWFnZT1mdW5jdGlvbigpe3JldHVybiBzdmMuc2VsZWN0ZWRMYW5ndWFnZX19KSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlBvc3RzU3ZjXCIsW1wiJGh0dHBcIixmdW5jdGlvbigkaHR0cCl7dGhpcy5mZXRjaD1mdW5jdGlvbigpe3JldHVybiAkaHR0cC5nZXQoXCIvYXBpL3Bvc3RzXCIpfSx0aGlzLmNyZWF0ZT1mdW5jdGlvbihwb3N0KXtyZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvcG9zdHNcIixwb3N0KX0sdGhpcy5nZXRQb3N0PWZ1bmN0aW9uKHBvc3Qpe3JldHVybiAkaHR0cC5nZXQoXCIvYXBpL3Bvc3RzL1wiK3Bvc3QuX2lkKX19XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlRlblRoaW5nc1N2Y1wiLFtcIiRodHRwXCIsZnVuY3Rpb24oJGh0dHApe3ZhciBzdmM9dGhpcztzdmMuZ2V0UXVldWU9ZnVuY3Rpb24oKXtyZXR1cm4gJGh0dHAuZ2V0KFwiL2JvdHMvdGVudGhpbmdzL3F1ZXVlXCIpfSxzdmMuZ2V0TGlzdHM9ZnVuY3Rpb24oKXtyZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHNcIil9LHN2Yy5nZXRDYXRlZ29yaWVzPSgpPT4kaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9jYXRlZ29yaWVzXCIpLHN2Yy5nZXRMYW5ndWFnZXM9KCk9PiRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL2xhbmd1YWdlc1wiKSxzdmMuZ2V0TGlzdD1mdW5jdGlvbihsaXN0KXtyZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIrbGlzdC5faWQpfSxzdmMudXBkYXRlTGlzdD1mdW5jdGlvbihsaXN0KXtyZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiK2xpc3QuX2lkLGxpc3QpfSxzdmMuc2F2ZUxpc3Q9ZnVuY3Rpb24odXNlcixsaXN0KXtyZXR1cm4gJGh0dHAucHV0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHNcIix7dXNlcixsaXN0fSl9LHN2Yy5yZXBvcnRMaXN0PWZ1bmN0aW9uKHVzZXIsbGlzdCl7JGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIrbGlzdC5faWQrXCIvcmVwb3J0L1wiK3VzZXIuX2lkKX0sc3ZjLmRlbGV0ZUxpc3Q9ZnVuY3Rpb24obGlzdCl7cmV0dXJuICRodHRwLmRlbGV0ZShcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiK2xpc3QuX2lkKX0sc3ZjLmdldEJsdXJicz1mdW5jdGlvbihsaXN0LHR5cGUpe3JldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9saXN0cy8ke2xpc3QuX2lkfS9ibHVyYnMvJHt0eXBlfWApfSxzdmMuZ2V0UGF1c2U9ZnVuY3Rpb24oKXtyZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvcGF1c2VcIil9LHN2Yy50b2dnbGVQYXVzZT1mdW5jdGlvbigpe3JldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvcGF1c2VcIil9LHN2Yy5nZXRHYW1lPWZ1bmN0aW9uKGlkKXtyZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9nYW1lLyR7aWR9YCl9fV0pLGFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJVc2VyU3ZjXCIsW1wiJGh0dHBcIixmdW5jdGlvbigkaHR0cCl7dmFyIHN2Yz10aGlzO3N2Yy5nZXRVc2VyPWZ1bmN0aW9uKCl7cmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnNcIil9LHN2Yy5nZXRVc2Vycz1mdW5jdGlvbigpe3JldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzL2FsbFwiKX0sc3ZjLnRvZ2dsZUJhbj1mdW5jdGlvbihpZCl7cmV0dXJuICRodHRwLmdldChgL2FwaS91c2Vycy9iYW4vJHtpZH1gKX0sc3ZjLnNldFRva2VuPWZ1bmN0aW9uKHRva2VuKXtyZXR1cm4gJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl09dG9rZW4sc3ZjLmdldFVzZXIoKX0sc3ZjLmF1dGhlbnRpY2F0ZT1mdW5jdGlvbih1c2VyKXtyZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvYXV0aGVudGljYXRlXCIse3VzZXJ9KS50aGVuKChmdW5jdGlvbihyZXNwb25zZSl7cmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW49cmVzcG9uc2UuZGF0YSxzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSl9KSl9LHN2Yy5sb2dpbj1mdW5jdGlvbih1c2VyKXtyZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9cIit1c2VyK1wiL2xvZ2luXCIpLnRoZW4oKGZ1bmN0aW9uKHJlc3BvbnNlKXtyZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZS50b2tlbj1yZXNwb25zZS5kYXRhLHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKX0pKX0sc3ZjLnVwZGF0ZVVzZXI9ZnVuY3Rpb24odXNlcil7cmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3VzZXJzL1wiK3VzZXIuX2lkLHt1c2VyfSkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gc3ZjLmdldFVzZXIoKX0pKX0sc3ZjLmNoZWNrUGFzc3dvcmQ9ZnVuY3Rpb24odXNlcixwYXNzd29yZCl7cmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3VzZXJzL1wiK3VzZXIrXCIvdmVyaWZpY2F0aW9uXCIse3Bhc3N3b3JkfSl9LHN2Yy5jaGFuZ2VQYXNzd29yZD1mdW5jdGlvbih1c2VyLG9sZFBhc3N3b3JkLG5ld1Bhc3N3b3JkKXtyZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIrdXNlcitcIi9wYXNzd29yZFwiLHtvbGRQYXNzd29yZCxuZXdQYXNzd29yZH0pfSxzdmMuY2hhbmdlVXNlcm5hbWU9ZnVuY3Rpb24odXNlcixuZXdVc2VybmFtZSl7cmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3VzZXJzL1wiK3VzZXIrXCIvdXNlcm5hbWVcIix7bmV3VXNlcm5hbWV9KS50aGVuKChmdW5jdGlvbigpe3JldHVybiBzdmMuZ2V0VXNlcigpfSkpfSxzdmMubG9nb3V0PWZ1bmN0aW9uKCl7d2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpLCRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiWC1BdXRoXCJdPVwiXCJ9LHN2Yy5jcmVhdGVVc2VyPWZ1bmN0aW9uKHVzZXJuYW1lLHBhc3N3b3JkKXtyZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnNcIix7dXNlcm5hbWUscGFzc3dvcmR9KS50aGVuKChmdW5jdGlvbigpe3JldHVybiBzdmMubG9naW4odXNlcm5hbWUscGFzc3dvcmQpfSkpfX1dKSxhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUXVpekFuaW1hbHNDdHJsXCIsW1wiJHNjb3BlXCIsXCJGaWxlU3ZjXCIsZnVuY3Rpb24oJHNjb3BlLEZpbGVTdmMpe0ZpbGVTdmMuZ2V0U291bmRzKFwiYW5pbWFsc1wiKS50aGVuKChmdW5jdGlvbihyZXNwb25zZSl7JHNjb3BlLmFuaW1hbHM9Xy5zaHVmZmxlKHJlc3BvbnNlLmRhdGEubWFwKChhbmltYWw9Pih7c291bmQ6YW5pbWFsLG5hbWU6YW5pbWFsLnN1YnN0cmluZygwLGFuaW1hbC5pbmRleE9mKFwiLlwiKSkucmVwbGFjZShcIl9cIixcIiBcIikuY2FwaXRhbGl6ZSgpfSkpKSk7Zm9yKGxldCBhbmltYWwgb2YgJHNjb3BlLmFuaW1hbHMpYW5pbWFsLmFuc3dlcnM9Xy5zaHVmZmxlKFthbmltYWwubmFtZSwuLi5nZXRSYW5kb21BbmltYWxzKGFuaW1hbC5uYW1lKV0pO2NvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKX0pKSwkc2NvcGUuZ3Vlc3M9KGFuaW1hbCxndWVzcyk9PnthbmltYWwuZ3Vlc3M9Z3Vlc3N9O2NvbnN0IGdldFJhbmRvbUFuaW1hbHM9bmFtZT0+Xy5zaHVmZmxlKCRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsPT5uYW1lIT09YW5pbWFsLm5hbWUpKS5tYXAoKGFuaW1hbD0+YW5pbWFsLm5hbWUpKSkuc2xpY2UoMCw1KTskc2NvcGUuZ2V0U2NvcmU9KCk9PmAkeyRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsPT5hbmltYWwubmFtZT09PWFuaW1hbC5ndWVzcykpLmxlbmd0aH0vJHskc2NvcGUuYW5pbWFscy5sZW5ndGh9YCwkc2NvcGUuaXNTY29yZVZpc2libGU9KCk9PiRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsPT5hbmltYWwuZ3Vlc3MpKS5sZW5ndGg9PT0kc2NvcGUuYW5pbWFscy5sZW5ndGh9XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlF1aXpHb29nbGVDdHJsXCIsW1wiJHNjb3BlXCIsXCJGaWxlU3ZjXCIsZnVuY3Rpb24oJHNjb3BlLEZpbGVTdmMpe0ZpbGVTdmMuZ2V0SW1hZ2VzKFwiZ29vZ2xlXCIpLnRoZW4oKGZ1bmN0aW9uKHJlc3BvbnNlKXskc2NvcGUuaW1hZ2VzPXJlc3BvbnNlLmRhdGF9KSl9XSksYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlF1aXpMb2dvc0N0cmxcIixbXCIkc2NvcGVcIixcIkZpbGVTdmNcIixmdW5jdGlvbigkc2NvcGUsRmlsZVN2Yyl7RmlsZVN2Yy5nZXRJbWFnZXMoXCJsb2dvc1wiKS50aGVuKChmdW5jdGlvbihyZXNwb25zZSl7JHNjb3BlLmltYWdlcz1yZXNwb25zZS5kYXRhfSkpfV0pLGFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJRdWl6TW92aWVzQ3RybFwiLFtcIiRzY29wZVwiLFwiRmlsZVN2Y1wiLGZ1bmN0aW9uKCRzY29wZSxGaWxlU3ZjKXtGaWxlU3ZjLmdldEltYWdlcyhcIm1vdmllc1wiKS50aGVuKChmdW5jdGlvbihyZXNwb25zZSl7JHNjb3BlLmltYWdlcz1yZXNwb25zZS5kYXRhfSkpfV0pLGFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJRdWl6U2tlbGV0b25zQ3RybFwiLFtcIiRzY29wZVwiLFwiRmlsZVN2Y1wiLGZ1bmN0aW9uKCRzY29wZSxGaWxlU3ZjKXtGaWxlU3ZjLmdldEltYWdlcyhcInNrZWxldG9uc1wiKS50aGVuKChmdW5jdGlvbihyZXNwb25zZSl7JHNjb3BlLmFuaW1hbHM9Xy5zaHVmZmxlKHJlc3BvbnNlLmRhdGEubWFwKChhbmltYWw9Pih7aW1hZ2U6YW5pbWFsLG5hbWU6YW5pbWFsLnN1YnN0cmluZygwLGFuaW1hbC5pbmRleE9mKFwiLlwiKSkucmVwbGFjZShcIl9cIixcIiBcIikuY2FwaXRhbGl6ZSgpfSkpKSk7Zm9yKGxldCBhbmltYWwgb2YgJHNjb3BlLmFuaW1hbHMpYW5pbWFsLmFuc3dlcnM9Xy5zaHVmZmxlKFthbmltYWwubmFtZSwuLi5nZXRSYW5kb21BbmltYWxzKGFuaW1hbC5uYW1lKV0pO2NvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKX0pKSwkc2NvcGUuZ3Vlc3M9KGFuaW1hbCxndWVzcyk9PnthbmltYWwuZ3Vlc3M9Z3Vlc3N9O2NvbnN0IGdldFJhbmRvbUFuaW1hbHM9bmFtZT0+Xy5zaHVmZmxlKCRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsPT5uYW1lIT09YW5pbWFsLm5hbWUpKS5tYXAoKGFuaW1hbD0+YW5pbWFsLm5hbWUpKSkuc2xpY2UoMCwxMCk7JHNjb3BlLmdldFNjb3JlPSgpPT5gJHskc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbD0+YW5pbWFsLm5hbWU9PT1hbmltYWwuZ3Vlc3MpKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWAsJHNjb3BlLmlzU2NvcmVWaXNpYmxlPSgpPT4kc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbD0+YW5pbWFsLmd1ZXNzKSkubGVuZ3RoPT09JHNjb3BlLmFuaW1hbHMubGVuZ3RofV0pOyIsIi8qXHJcbiQgPSBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxudmFyIGJvb3RzdHJhcCA9IHJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxudmFyIGFuZ3VsYXJTYW5pdGl6ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItc2FuaXRpemUnKTtcclxudmFyIGFuZ3VsYXJBbmltYXRlID0gcmVxdWlyZSgnYW5ndWxhci1hbmltYXRlJyk7XHJcbiovXHJcbmFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXHJcbiAgJ3VpLnJvdXRlcicsXHJcbiAgJ3VpLmJvb3RzdHJhcCcsXHJcbiAgJ25nQW5pbWF0ZScsXHJcbiAgJ25nU2FuaXRpemUnLFxyXG4gICduZ0RyYWdEcm9wJyxcclxuICAnbmdUYWdzSW5wdXQnLFxyXG4gICd2Y1JlY2FwdGNoYScsXHJcbiAgJ2NoYXJ0LmpzJyxcclxuICAndGMuY2hhcnRqcydcclxuXSk7XHJcbiIsImFuZ3VsYXJcclxuXHQubW9kdWxlKCdhcHAnKVxyXG5cdC5jb25maWcoZnVuY3Rpb24gKFxyXG5cdFx0JHN0YXRlUHJvdmlkZXIsXHJcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIsXHJcblx0XHQkdXJsU2VydmljZVByb3ZpZGVyLFxyXG5cdFx0JGxvY2F0aW9uUHJvdmlkZXJcclxuXHQpIHtcclxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9ob21lJyk7XHJcblx0XHQkdXJsU2VydmljZVByb3ZpZGVyLmNvbmZpZy5zdHJpY3RNb2RlKGZhbHNlKTtcclxuXHJcblx0XHQkc3RhdGVQcm92aWRlclxyXG5cdFx0XHQuc3RhdGUoJ2hvbWUnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2hvbWUnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL2hvbWUuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgncG9saWN5Jywge1xyXG5cdFx0XHRcdHVybDogJy9wb2xpY3knLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3BvbGljeS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdwcmludCcsIHtcclxuXHRcdFx0XHR1cmw6ICcvcHJpbnQnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3ByaW50Lmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ2V4cGVyaWVuY2UnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2V4cGVyaWVuY2UnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdFeHBlcmllbmNlQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvZXhwZXJpZW5jZS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdza2lsbHMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3NraWxscycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1NraWxsc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3NraWxscy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdob2JiaWVzJywge1xyXG5cdFx0XHRcdHVybDogJy9ob2JiaWVzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnSG9iYmllc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL2hvYmJpZXMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnY29udGFjdCcsIHtcclxuXHRcdFx0XHR1cmw6ICcvY29udGFjdCcsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ0NvbnRhY3RDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9jb250YWN0Lmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3dvcmtvdXQnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3dvcmtvdXQnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdXb3Jrb3V0Q3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvd29ya291dC5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdwb3N0cycsIHtcclxuXHRcdFx0XHR1cmw6ICcvcG9zdHMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdQb3N0c0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3Bvc3RzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3Byb2ZpbGUnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3Byb2ZpbGUnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdQcm9maWxlQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvcHJvZmlsZS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdsaXN0cycsIHtcclxuXHRcdFx0XHR1cmw6ICcvbGlzdHMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdMaXN0c0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnbGlzdHMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgncHJpb3JpdGl6ZScsIHtcclxuXHRcdFx0XHR1cmw6ICcvcHJpb3JpdGl6ZScsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1ByaW9yaXRpemVDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3ByaW9yaXRpemUuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnYnViYmxlcycsIHtcclxuXHRcdFx0XHR1cmw6ICcvYnViYmxlcycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ0J1YmJsZXNDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2J1YmJsZXMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnYXN0ZXJvaWRzJywge1xyXG5cdFx0XHRcdHVybDogJy9hc3Rlcm9pZHMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdBc3Rlcm9pZHNDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2FzdGVyb2lkcy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdsZW1taW5ncycsIHtcclxuXHRcdFx0XHR1cmw6ICcvbGVtbWluZ3MnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdMZW1taW5nc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnbGVtbWluZ3MuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnYm90cycsIHtcclxuXHRcdFx0XHR1cmw6ICcvYm90cycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1RlblRoaW5nc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAndGVudGhpbmdzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3RlbnRoaW5ncycsIHtcclxuXHRcdFx0XHR1cmw6ICcvdGVudGhpbmdzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnVGVuVGhpbmdzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW50aGluZ3MuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgndGVudGhpbmdzLWFkbWluJywge1xyXG5cdFx0XHRcdHVybDogJy90ZW50aGluZ3MtYWRtaW4nLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdUZW5UaGluZ3NBZG1pbkN0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAndGVudGhpbmdzLWFkbWluLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3RlbnRoaW5ncy1jdXJhdGUnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3RlbnRoaW5ncy1jdXJhdGUnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdUZW5UaGluZ3NDdXJhdGVDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbnRoaW5ncy1jdXJhdGUuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgndGVudGhpbmdzLWdhbWUnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3RlbnRoaW5ncy86Z2FtZScsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1RlblRoaW5nc0dhbWVDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbnRoaW5ncy1nYW1lLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3F1aXotZ29vZ2xlJywge1xyXG5cdFx0XHRcdHVybDogJy9nb29nbGUnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdRdWl6R29vZ2xlQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdxdWl6emVzL2dvb2dsZS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdxdWl6LWxvZ29zJywge1xyXG5cdFx0XHRcdHVybDogJy9sb2dvcycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1F1aXpMb2dvc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAncXVpenplcy9sb2dvcy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdxdWl6LWFuaW1hbHMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2FuaW1hbHMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdRdWl6QW5pbWFsc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAncXVpenplcy9hbmltYWxzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3F1aXotc2tlbGV0b25zJywge1xyXG5cdFx0XHRcdHVybDogJy9za2VsZXRvbnMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdRdWl6U2tlbGV0b25zQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdxdWl6emVzL3NrZWxldG9ucy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdxdWl6LW1vdmllcycsIHtcclxuXHRcdFx0XHR1cmw6ICcvbW92aWVzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnUXVpek1vdmllc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAncXVpenplcy9tb3ZpZXMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnY2hhcmFkZXMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2NoYXJhZGVzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnQ2hhcmFkZXNDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9jaGFyYWRlcy5odG1sJyxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHtcclxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0cmVxdWlyZUJhc2U6IGZhbHNlLFxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnV2ViU29ja2V0U3ZjJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICR0aW1lb3V0KSB7XHJcbiAgZnVuY3Rpb24gd2Vic29ja2V0SG9zdCgpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonKSB7XHJcbiAgICAgIHJldHVybiBcIndzczovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJ3czovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgY29ubmVjdGlvbjtcclxuICB2YXIgY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KHdlYnNvY2tldEhvc3QoKSk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY29ubmVjdGVkJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY2xvc2VkLiBSZWNvbm5lY3RpbmcuLi4nKTtcclxuICAgICAgJHRpbWVvdXQoY29ubmVjdCwgMTAwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlICsgXCIgLSBTdGF0ZTogXCIgKyBjb25uZWN0aW9uLnJlYWR5U3RhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBwYXlsb2FkID0gSlNPTi5wYXJzZShlLmRhdGEpO1xyXG4gICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3dzOicgKyBwYXlsb2FkLnRvcGljLCBwYXlsb2FkLmRhdGEpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICB0aGlzLnNlbmQgPSBmdW5jdGlvbiAodG9waWMsIGRhdGEpIHtcclxuICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoe3RvcGljOiB0b3BpYywgZGF0YTogZGF0YX0pO1xyXG4gICAgY29ubmVjdGlvbi5zZW5kKGpzb24pO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuY29ubmVjdCA9IGNvbm5lY3Q7XHJcblxyXG59KS5ydW4oZnVuY3Rpb24gKFdlYlNvY2tldFN2Yykge1xyXG4gIFdlYlNvY2tldFN2Yy5jb25uZWN0KCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignQXBwQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgTGFuZ3VhZ2VTdmMsIFVzZXJTdmMpIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgICclY1lvdSBzbmVha3kgYnVnZ2VyIScsXHJcbiAgICAnZm9udDogMmVtIHNhbnMtc2VyaWY7IGNvbG9yOiBEb2RnZXJCbHVlOyB0ZXh0LXNoYWRvdzogMnB4IDAgMCAjNDQ0LCAtMnB4IDAgMCAjNDQ0LCAwIDJweCAwICM0NDQsIDAgLTJweCAwICM0NDQsIDFweCAxcHggIzQ0NCwgLTFweCAtMXB4IDAgIzQ0NCwgMXB4IC0xcHggMCAjNDQ0LCAtMXB4IDFweCAwICM0NDQ7J1xyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIkknbSBnbGFkIHlvdSdyZSBjdXJpb3VzIHdoZXRoZXIgc29tZXRoaW5nIGlzIHBvcHBpbmcgdXAgaW4gaGVyZS4gSSdtIGEgYml0IG9mIGEgc3RpY2tsZXIgd2hlbiBpdCBjb21lcyB0byBtZXNzYWdlcyBpbiB0aGUgY29uc29sZSBzbyBJIHRyeSB0byBtYWtlIHN1cmUgb25seSB0aGluZ3MgSSB3YW50IGFyZSB2aXNpYmxlLiBUaGF0IGJlaW5nIHNhaWQsIGlmIHRoZXJlIGlzIGEgYmlnIGVycm9yIGhlcmUsIEkgd291bGQgcmVhbGx5IGFwcHJlY2lhdGUgeW91IHRlbGxpbmcgbWUgc28gSSBjYW4gZ2V0IHJpZCBvZiBpdCFcIlxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICAnVGhlIGNvZGUgZm9yIG15IHJlc3VtZSBpcyBob3N0ZWQgb24gR2l0aHViIGlmIHlvdSByZWFsbHkgd2FudCB0byBnbyBpbnRvIGFsbCB0aGlzISA9PiBodHRwczovL2dpdGh1Yi5jb20vRmxhbmRlcnNCdXJnZXIvcmVzdW1lJ1xyXG4gICk7XHJcblxyXG4gIC8qXHJcbiAgICAkKGRvY3VtZW50KS5iaW5kKFwia2V5dXAga2V5ZG93blwiLCBmdW5jdGlvbihlKXtcclxuICAgICAgaWYoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PSA4MCl7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgKi9cclxuXHJcbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLmxvYWRpbmcnKS5mYWRlT3V0KCdzbG93Jyk7XHJcbiAgICAkKCcuY29udGVudCcpLmZhZGVJbignc2xvdycpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUudGhlbWVDb3VudGVyID0gNjtcclxuICAkc2NvcGUudG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICRzY29wZS55ZWFyID0gJHNjb3BlLnRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgJHNjb3BlLnJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xyXG5cclxuICAkc2NvcGUuZmxpcFRoZW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLmxvYWRpbmcnKS5zaG93KCk7XHJcbiAgICAkKCcuY29udGVudCcpLmhpZGUoKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKCcubG9hZGluZycpLmZhZGVPdXQoJ3Nsb3cnKTtcclxuICAgICAgJCgnLmNvbnRlbnQnKS5mYWRlSW4oJ3Nsb3cnKTtcclxuICAgIH0sIDgwMCk7XHJcbiAgICAkc2NvcGUudGhlbWVDb3VudGVyID1cclxuICAgICAgJHNjb3BlLnRoZW1lQ291bnRlciA8IDYgPyAkc2NvcGUudGhlbWVDb3VudGVyICsgMSA6ICgkc2NvcGUudGhlbWVDb3VudGVyID0gMSk7XHJcbiAgfTtcclxuXHJcbiAgJC5nZXRKU09OKCcvc2tpbGxzLmpzb24nLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLnNraWxscyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuZW5hYmxlZDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oJy9ob2JiaWVzLmpzb24nLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmhvYmJpZXMgPSBkYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oJy9leHBlcmllbmNlLmpzb24nLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmpvYnMgPSBkYXRhO1xyXG4gICAgJHNjb3BlLmpvYnMuZm9yRWFjaChmdW5jdGlvbiAoam9iKSB7XHJcbiAgICAgIGpvYi5zdGFydERhdGUgPSBuZXcgRGF0ZShqb2Iuc3RhcnREYXRlKTtcclxuICAgICAgaWYgKGpvYi5lbmREYXRlKSBqb2IuZW5kRGF0ZSA9IG5ldyBEYXRlKGpvYi5lbmREYXRlKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oJy9jaGFyYWRlcy5qc29uJywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5jaGFyYWRlcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5nZXRUaW1lU3BhbiA9IGZ1bmN0aW9uIChqb2IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGpvYi5zdGFydERhdGUuZ2V0RnVsbFllYXIoKSArIChqb2IuZW5kRGF0ZSA/ICcgLSAnICsgam9iLmVuZERhdGUuZ2V0RnVsbFllYXIoKSA6ICcgLSBUb2RheScpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5sYW5ndWFnZXMgPSBMYW5ndWFnZVN2Yy5sYW5ndWFnZXM7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdExhbmd1YWdlID0gZnVuY3Rpb24gKGxhbmd1YWdlKSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IExhbmd1YWdlU3ZjLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuaG92ZXJkaXYgPSBmdW5jdGlvbiAoZSwgZGl2aWQpIHtcclxuICAgIHZhciBsZWZ0ID0gZS5jbGllbnRYICsgJ3B4JztcclxuICAgIHZhciB0b3AgPSBlLmNsaWVudFkgKyAyMCArICdweCc7XHJcblxyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdmlkKTtcclxuXHJcbiAgICAkKCcjJyArIGRpdmlkKS5jc3MoJ2xlZnQnLCBsZWZ0KTtcclxuICAgICQoJyMnICsgZGl2aWQpLmNzcygndG9wJywgdG9wKTtcclxuXHJcbiAgICAkKCcjJyArIGRpdmlkKS50b2dnbGUoKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc29jaWFsTWVkaWEgPSBbXHJcbiAgICAvKlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJmYWNlYm9va1wiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9mbGFuZGVyc2J1cmdlclwiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJmYS1mYWNlYm9vay1mXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcInR3aXR0ZXJcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3R3aXR0ZXIuY29tL0JlbGdvQ2FuYWRpYW5cIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiZmEtdHdpdHRlclwiXHJcbiAgICAgICAgICB9LCovXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxyXG4gICAgICB1cmw6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2ZsYW5kZXJzYnVyZ2VyLycsXHJcbiAgICAgIGljb246ICdmYS1pbnN0YWdyYW0nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2xpbmtlZGluJyxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2xhdXJlbnQtZGViYWNrZXItMTYzM2E5MTYnLFxyXG4gICAgICBpY29uOiAnZmEtbGlua2VkaW4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2dpdGh1YicsXHJcbiAgICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9GbGFuZGVyc0J1cmdlcicsXHJcbiAgICAgIGljb246ICdmYS1naXRodWInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2pzZmlkZGxlJyxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9qc2ZpZGRsZS5uZXQvdXNlci9CZWxnb0NhbmFkaWFuL2ZpZGRsZXMvJyxcclxuICAgICAgaWNvbjogJ2ZhLWpzZmlkZGxlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdzdGFja292ZXJmbG93JyxcclxuICAgICAgdXJsOiAnaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3VzZXJzLzEwODM5MjMvYmVsZ29jYW5hZGlhbicsXHJcbiAgICAgIGljb246ICdmYS1zdGFjay1vdmVyZmxvdycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnZ29vZHJlYWRzJyxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuZ29vZHJlYWRzLmNvbS91c2VyL3Nob3cvMTcwNzAwMTAtbGF1cmVudCcsXHJcbiAgICAgIGljb246ICdmYS1nb29kcmVhZHMnLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS51c2VyKSB7XHJcbiAgICBVc2VyU3ZjLmxvZ2luKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgbG9naW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICRzY29wZS4kb24oJ2xvZ2luJywgZnVuY3Rpb24gKF8sIHVzZXIpIHtcclxuICAgIGxvZ2luKHVzZXIpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBsb2dpbih1c2VyKSB7XHJcbiAgICBpZiAoISRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIgPSB1c2VyLl9pZDtcclxuICAgICAgJHNjb3BlLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ2xvZ2luJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuJG9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoXywgdXNlcikge1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUgPSBuZXcgRGF0ZSgkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlKTtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCgnI2xvYWRpbmctaWNvbicpLmZhZGVPdXQoJ3Nsb3cnKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKCdsb2FkaW5nJywgZnVuY3Rpb24gKF8sIHVzZXIpIHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICQoJyNsb2FkaW5nLWljb24nKS5zaG93KCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oJ2xvYWRlZCcsIGZ1bmN0aW9uIChfLCB1c2VyKSB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoJyNsb2FkaW5nLWljb24nKS5mYWRlT3V0KCdzbG93Jyk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgIC5hdXRoKClcclxuICAgICAgLnNpZ25PdXQoKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ2xvZ291dCcpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5mb3JtYXREYXRlID0gZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgIHZhciBtb250aHMgPSBbXHJcbiAgICAgICdKYW4nLFxyXG4gICAgICAnRmViJyxcclxuICAgICAgJ01hcicsXHJcbiAgICAgICdBcHInLFxyXG4gICAgICAnTWF5JyxcclxuICAgICAgJ0p1bicsXHJcbiAgICAgICdKdWwnLFxyXG4gICAgICAnQXVnJyxcclxuICAgICAgJ1NlcCcsXHJcbiAgICAgICdPY3QnLFxyXG4gICAgICAnTm92JyxcclxuICAgICAgJ0RlYycsXHJcbiAgICBdO1xyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpICsgJy0nICsgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0gKyAnLScgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgfTtcclxuXHJcbiAgU3RyaW5nLnByb3RvdHlwZS5jYXBpdGFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnNsaWNlKDEpO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0FzdGVyb2lkc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBHYW1lU3ZjKSB7XHJcblxyXG4gICRzY29wZS5hbm5vdW5jZSA9IGZhbHNlO1xyXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXN0ZXJvaWRzLXBhZ2UnKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgY3R4LmZvbnQgPSBcIjMwcHggQ29taWMgU2FucyBNU1wiO1xyXG4gIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIHZhciBzaG90cyA9IHt9O1xyXG4gIHZhciBhc3Rlcm9pZHMgPSB7fTtcclxuICB2YXIgcG93ZXJ1cHMgPSB7fTtcclxuICB2YXIgZXhwbG9zaW9ucyA9IHt9O1xyXG4gIHZhciBtYXAgPSB7fTtcclxuICB2YXIgc3BhY2VwaWNzID0gMTA7XHJcbiAgdmFyIHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICB2YXIgcG93ZXJ1cFR5cGVzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnc3BlZWQnLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6ICdNYXggU3BlZWQg4oenJyxcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgICAgc2l6ZTogWzE0LCAzNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWVcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5tYXhTcGVlZCArPSAxMDA7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdjb29sZG93bicsXHJcbiAgICAgIGFubm91bmNlbWVudDogJ0Nvb2xkb3duIOKHqScsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiAzLFxyXG4gICAgICAgIHNpemU6IFsxNywgMTddLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbihzcGFjZXNoaXApIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLmNvb2xkb3duVGltZSAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3JhbmdlJyxcclxuICAgICAgYW5ub3VuY2VtZW50OiAnRmlyaW5nIFJhbmdlIOKHpycsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogNCxcclxuICAgICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICAgIHNpemU6IFszMCwgOF0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWVcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5yYW5nZSArPSA1O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnc2hpZWxkJyxcclxuICAgICAgYW5ub3VuY2VtZW50OiAnU2hpZWxkJyxcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA1LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzE5LCAxOV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWVcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5zaGllbGQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnbnVrZScsXHJcbiAgICAgIGFubm91bmNlbWVudDogJ051a2UnLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogOCxcclxuICAgICAgICBzaXplOiBbMTUsIDE1XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICAgIGFzdGVyb2lkc1tpXS5leHBsb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYXduQXN0ZXJvaWRzKDUpO1xyXG4gICAgICB9XHJcbiAgICB9LC8qXHJcbiAgICAnc2lkZV9jYW5ub25zJyxcclxuICAgICdsYXNlcicsXHJcbiAgICAnc2hpZWxkJyxcclxuICAgICdsaWZlJyxcclxuICAgICdtaXNzaWxlcycsXHJcbiAgICAnbnVrZSdcclxuICAgICovXHJcbiAgXTtcclxuICBwb3dlcnVwVHlwZXMuZm9yRWFjaChmdW5jdGlvbihwb3dlcnVwLCBpLCBhcnJheSkge1xyXG4gICAgYXJyYXlbaV0uaW1nLnNyYyA9ICdhc3Rlcm9pZHMvJyArIHBvd2VydXAubmFtZSArICcucG5nJztcclxuICB9KTtcclxuXHJcbiAgdmFyIGV4cGxvc2lvbkltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgZXhwbG9zaW9uSW1hZ2Uuc3JjID0gJ2FzdGVyb2lkcy9leHBsb3Npb24ucG5nJztcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSB0cnVlO1xyXG4gIH0sdHJ1ZSk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBtYXBbZS5rZXlDb2RlIHx8IGUud2hpY2hdID0gZmFsc2U7XHJcbiAgfSx0cnVlKTtcclxuXHJcbiAgJHNjb3BlLmhpZ2hzY29yZSA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGV2YWx1YXRlS2V5cygpIHtcclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBpZiAobWFwWzMyXSkge1xyXG4gICAgICAgIC8vU3BhY2VcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLmNvb2xkb3duID09PSAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc2hvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszN10pIHtcclxuICAgICAgICAvL0xlZnQgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnJvdGF0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gPSAzNjA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiAtPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM5XSkge1xyXG4gICAgICAgIC8vUmlnaHQgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnJvdGF0aW9uID09PSAzNjApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiArPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM4XSkge1xyXG4gICAgICAgIC8vVXAgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkIDw9IHNwYWNlc2hpcC5tYXhTcGVlZCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkICs9IDU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQtLTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFs0MF0pIHtcclxuICAgICAgICAvL0Rvd24gQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkIC09IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobWFwWzMyXSkge1xyXG4gICAgICAgIHN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNwYWNlc2hpcCgpIHtcclxuICAgIHRoaXMud2lkdGggPSA1MDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gNTA7XHJcbiAgICB0aGlzLnNoaWVsZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yYW5nZSA9IDgwO1xyXG4gICAgdGhpcy5jYW5ub24gPSB7XHJcbiAgICAgIHg6IHRoaXMud2lkdGggLyAyIC0gNC41LFxyXG4gICAgICB5OiB0aGlzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAqIDAuMDc4MTI1XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb29sZG93biA9IDA7XHJcbiAgICB0aGlzLmNvb2xkb3duVGltZSA9IDIwO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtcclxuICAgICAgY2FudmFzLndpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyLFxyXG4gICAgICBjYW52YXMuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0IC8gMlxyXG4gICAgXTtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSAnYXN0ZXJvaWRzL3NwYWNlc2hpcC5wbmcnO1xyXG4gICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB0aGlzLm1heFNwZWVkID0gMTAwMDtcclxuICAgIHRoaXMuYW5nbGUgPSAwO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcblxyXG4gICAgdGhpcy5zaG9vdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmNvb2xkb3duID0gdGhpcy5jb29sZG93blRpbWU7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIHNob3RzW2lkXSA9IG5ldyBTaG90KGlkLCB0aGlzKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguYXJjKHRoaXMucG9zaXRpb25bMF0gKyB0aGlzLndpZHRoIC8gMiwgdGhpcy5wb3NpdGlvblsxXSArIHRoaXMuaGVpZ2h0IC8gMiwgMzAsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMzUsIDIzNywgODYsIDAuNSlcIjtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYig2NiwgMTY4LCAzNiwgMC44KVwiO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgICAgdmFyIGFzdGVyb2lkID0gYXN0ZXJvaWRzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoYXN0ZXJvaWQsIHRoaXMpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zaGllbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYXN0ZXJvaWQuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdhbWVPdmVyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICBpZiAodGhpcy5jb29sZG93biA+IDApIHtcclxuICAgICAgICB0aGlzLmNvb2xkb3duLS07XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTaG90KGlkLCBzcGFjZXNoaXApIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbXHJcbiAgICAgIHNwYWNlc2hpcC5wb3NpdGlvblswXSArIHNwYWNlc2hpcC5jYW5ub24ueCArIHNwYWNlc2hpcC5jYW5ub24ueCAqIE1hdGguY29zKChzcGFjZXNoaXAucm90YXRpb24gLSA5MCkgKiBNYXRoLlBJIC8gMTgwKSxcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzFdICsgc3BhY2VzaGlwLmNhbm5vbi55ICsgc3BhY2VzaGlwLmNhbm5vbi55ICogTWF0aC5zaW4oKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkgLyAxODApXHJcbiAgICBdO1xyXG4gICAgdGhpcy53aWR0aCA9IDk7XHJcbiAgICB0aGlzLmhlaWdodCA9IDE1O1xyXG4gICAgdGhpcy5hbmdsZSA9IHNwYWNlc2hpcC5hbmdsZTtcclxuICAgIHRoaXMucm90YXRpb24gPSBzcGFjZXNoaXAucm90YXRpb247XHJcbiAgICB0aGlzLnNwZWVkID0gc3BhY2VzaGlwLnNwZWVkICsgNTAwO1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IHNwYWNlc2hpcC5yYW5nZTtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSAnYXN0ZXJvaWRzL3Nob3QucG5nJztcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEFzdGVyb2lkKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLndpZHRoID0gTWF0aC5yYW5kb20oKSAqIDUwICsgMjA7XHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMud2lkdGg7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RW50cnlQb3NpdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5yb3RhdGlvblNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDYgLSAzO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAzMDAgKyAyO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9ICdhc3Rlcm9pZHMvYXN0ZXJvaWQnICsgKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDYpICsgMSkgKyAnLnBuZyc7XHJcblxyXG4gICAgdGhpcy5leHBsb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGV4cGxvc2lvbnNbdGhpcy5pZF0gPSBuZXcgRXhwbG9zaW9uKHRoaXMpO1xyXG4gICAgICByZXR1cm4gZGVsZXRlIGFzdGVyb2lkc1t0aGlzLmlkXTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xyXG4gICAgICBpZiAodGhpcy5yb3RhdGlvbiA+IDM2MCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSB0aGlzLnJvdGF0aW9uIC0gMzYwO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucm90YXRpb24gPCAwKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDM2MCArIHRoaXMucm90YXRpb247XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSBpbiBzaG90cykge1xyXG4gICAgICAgIHZhciBzaG90ID0gc2hvdHNbaV07XHJcbiAgICAgICAgaWYgKGhpdChzaG90LCB0aGlzKSkge1xyXG4gICAgICAgICAgdGhpcy5leHBsb2RlKCk7XHJcbiAgICAgICAgICB2YXIgcG9pbnRzID0gTWF0aC5mbG9vcigoc2hvdC5zcGVlZCAtIDUwMCkgLyAxMCArIDcwIC0gdGhpcy53aWR0aCk7XHJcbiAgICAgICAgICBpZiAoTWF0aC5mbG9vcigocG9pbnRzICsgJHNjb3BlLnNjb3JlKSAvIDEwMCkgPiBNYXRoLmZsb29yKCRzY29wZS5zY29yZSAvIDEwMCkpIHtcclxuICAgICAgICAgICAgc3Bhd25Qb3dlcnVwKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkc2NvcGUuc2NvcmUgKz0gcG9pbnRzO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgZGVsZXRlIHNob3RzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEV4cGxvc2lvbihvYmplY3QpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbb2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV1dO1xyXG4gICAgdGhpcy53aWR0aCA9IG9iamVjdC53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gb2JqZWN0LmhlaWdodDtcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLmN5Y2xlID0ge1xyXG4gICAgICByb3dzOiA2LFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICBzaXplOiBbMjU2LCAyNTZdLFxyXG4gICAgICBpOiAwLFxyXG4gICAgICBkaXJlY3Rpb246IHRydWVcclxuICAgIH07XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gNDc7XHJcbiAgICB0aGlzLmltZyA9IGV4cGxvc2lvbkltYWdlO1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuY3ljbGUuaSsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gUG93ZXJ1cChpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wb3dlcnVwID0gcG93ZXJ1cFR5cGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvd2VydXBUeXBlcy5sZW5ndGgpXTtcclxuICAgIHRoaXMuY3ljbGUgPSB0aGlzLnBvd2VydXAuY3ljbGU7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gMTAwMDtcclxuICAgIGlmICh0aGlzLmN5Y2xlLnNpemVbMV0gPiB0aGlzLmN5Y2xlLnNpemVbMF0pIHtcclxuICAgICAgdGhpcy5oZWlnaHQgPSA0MDtcclxuICAgICAgdGhpcy53aWR0aCA9IE1hdGgucm91bmQodGhpcy5oZWlnaHQgLyB0aGlzLmN5Y2xlLnNpemVbMV0gKiB0aGlzLmN5Y2xlLnNpemVbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53aWR0aCA9IDQwO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IE1hdGgucm91bmQodGhpcy53aWR0aCAvIHRoaXMuY3ljbGUuc2l6ZVswXSAqIHRoaXMuY3ljbGUuc2l6ZVsxXSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RW50cnlQb3NpdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmltZyA9IHRoaXMucG93ZXJ1cC5pbWc7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMTUwICsgNTA7XHJcbiAgICB2YXIgZGVsYXkgPSA1O1xyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gZGVsZXRlIHBvd2VydXBzW3RoaXMuaWRdO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChoaXQoc3BhY2VzaGlwLCB0aGlzKSkge1xyXG4gICAgICAgICRzY29wZS5hbm5vdW5jZSA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLmFubm91bmNlbWVudCA9IHRoaXMucG93ZXJ1cC5hbm5vdW5jZW1lbnQ7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB0aGlzLnBvd2VydXAuYWN0aXZhdGUoc3BhY2VzaGlwKTtcclxuICAgICAgICByZXR1cm4gZGVsZXRlIHBvd2VydXBzW3RoaXMuaWRdO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKGRlbGF5IDw9IDApIHtcclxuICAgICAgICBpZiAodGhpcy5jeWNsZS5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLmktLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsYXkgPSA1O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGF5LS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlKG9iamVjdCkge1xyXG4gICAgIG9iamVjdC5wb3NpdGlvblswXSArPSBvYmplY3Quc3BlZWQgLyAxMDAgKiBNYXRoLmNvcygob2JqZWN0LmFuZ2xlIC0gOTApICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgb2JqZWN0LnBvc2l0aW9uWzFdICs9IG9iamVjdC5zcGVlZCAvIDEwMCAqIE1hdGguc2luKChvYmplY3QuYW5nbGUgLSA5MCkgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICBpZiAob2JqZWN0LnBvc2l0aW9uWzBdID4gY2FudmFzLndpZHRoKSB7XHJcbiAgICAgICBvYmplY3QucG9zaXRpb25bMF0gPSAtb2JqZWN0LndpZHRoO1xyXG4gICAgIH0gZWxzZSBpZiAob2JqZWN0LnBvc2l0aW9uWzBdIDwgLW9iamVjdC53aWR0aCkge1xyXG4gICAgICAgb2JqZWN0LnBvc2l0aW9uWzBdID0gY2FudmFzLndpZHRoO1xyXG4gICAgIH1cclxuICAgICBpZiAob2JqZWN0LnBvc2l0aW9uWzFdID4gY2FudmFzLmhlaWdodCkge1xyXG4gICAgICAgb2JqZWN0LnBvc2l0aW9uWzFdID0gLW9iamVjdC5oZWlnaHQ7XHJcbiAgICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMV0gPCAtb2JqZWN0LmhlaWdodCkge1xyXG4gICAgICAgb2JqZWN0LnBvc2l0aW9uWzFdID0gY2FudmFzLmhlaWdodDtcclxuICAgICB9XHJcbiAgICAgY3R4LnNhdmUoKTtcclxuICAgICBjdHgudHJhbnNsYXRlKG9iamVjdC5wb3NpdGlvblswXSwgb2JqZWN0LnBvc2l0aW9uWzFdKTtcclxuICAgICBjdHgudHJhbnNsYXRlKG9iamVjdC53aWR0aCAvIDIsIG9iamVjdC5oZWlnaHQgLyAyKTtcclxuICAgICBjdHgucm90YXRlKG9iamVjdC5yb3RhdGlvbiAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgIGlmIChvYmplY3QuY3ljbGUpIHtcclxuICAgICAgIHZhciBjb2x1bW4gPSBvYmplY3QuY3ljbGUuaSAlIG9iamVjdC5jeWNsZS5jb2x1bW5zO1xyXG4gICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3Iob2JqZWN0LmN5Y2xlLmkgLyBvYmplY3QuY3ljbGUuY29sdW1ucyk7XHJcbiAgICAgICBjdHguZHJhd0ltYWdlKG9iamVjdC5pbWcsIG9iamVjdC5jeWNsZS5zaXplWzBdICogY29sdW1uLCBvYmplY3QuY3ljbGUuc2l6ZVsxXSAqIHJvdywgb2JqZWN0LmN5Y2xlLnNpemVbMF0sIG9iamVjdC5jeWNsZS5zaXplWzFdLCAtb2JqZWN0LndpZHRoIC8gMiwgLW9iamVjdC5oZWlnaHQgLyAyLCBvYmplY3Qud2lkdGgsIG9iamVjdC5oZWlnaHQpO1xyXG5cclxuICAgICAgIGlmIChvYmplY3QuY3ljbGUuaSA8PSAwKSB7XHJcbiAgICAgICAgIG9iamVjdC5jeWNsZS5pID0gMDtcclxuICAgICAgICAgb2JqZWN0LmN5Y2xlLmRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICAgICB9IGVsc2UgaWYgKG9iamVjdC5jeWNsZS5pID49IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MpIHtcclxuICAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSBvYmplY3QuY3ljbGUuY29sdW1ucyAqIG9iamVjdC5jeWNsZS5yb3dzIC0gMTtcclxuICAgICAgICAgb2JqZWN0LmN5Y2xlLmRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgfVxyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICBjdHguZHJhd0ltYWdlKG9iamVjdC5pbWcsIC1vYmplY3Qud2lkdGggLyAyLCAtb2JqZWN0LmhlaWdodCAvIDIsIG9iamVjdC53aWR0aCwgb2JqZWN0LmhlaWdodCk7XHJcbiAgICAgfVxyXG4gICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgc3BhY2VzaGlwO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgICRzY29wZS5wbGF5aW5nID0gdHJ1ZTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGFjZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwYWNlcGljcyk7XHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICBzcGFjZXNoaXAgPSBuZXcgU3BhY2VzaGlwKCk7XHJcbiAgICAkc2NvcGUuc2NvcmUgPSAwO1xyXG4gICAgc3Bhd25Bc3Rlcm9pZHMoNSk7XHJcbiAgICBhdXRvU3Bhd24oKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEVudHJ5UG9zaXRpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIGdyaWRYID0gTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICB2YXIgZ3JpZFkgPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciB4LCB5ID0gMDtcclxuICAgIGlmIChncmlkWCA+PSAxKSB7XHJcbiAgICAgIHggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xyXG4gICAgICBpZiAoeSA+PSAxKSB7XHJcbiAgICAgICAgeSA9IDAgLSBoZWlnaHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeSA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcclxuICAgICAgaWYgKGdyaWRZID49IDEpIHtcclxuICAgICAgICB4ID0gMCAtIHdpZHRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHggPSBjYW52YXMud2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbeCwgeV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoaXQob2JqZWN0MSwgb2JqZWN0Mikge1xyXG4gICAgcmV0dXJuIChvYmplY3QxLnBvc2l0aW9uWzBdIDwgb2JqZWN0Mi5wb3NpdGlvblswXSArIG9iamVjdDIud2lkdGgpICYmXHJcbiAgICAgICAgICAgKG9iamVjdDIucG9zaXRpb25bMF0gPCBvYmplY3QxLnBvc2l0aW9uWzBdICsgb2JqZWN0MS53aWR0aCkgJiZcclxuICAgICAgICAgICAob2JqZWN0MS5wb3NpdGlvblsxXSA8IG9iamVjdDIucG9zaXRpb25bMV0gKyBvYmplY3QyLmhlaWdodCkgJiZcclxuICAgICAgICAgICAob2JqZWN0Mi5wb3NpdGlvblsxXSA8IG9iamVjdDEucG9zaXRpb25bMV0gKyBvYmplY3QxLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhdXRvU3Bhd24oKSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoYXN0ZXJvaWRzKS5sZW5ndGggPCAyMDApIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgYXN0ZXJvaWRzW2lkXSA9IG5ldyBBc3Rlcm9pZChpZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBhdXRvU3Bhd24oKTtcclxuICAgICAgfSwgc3Bhd25JbnRlcnZhbCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduSW50ZXJ2YWwoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnNjb3JlIDwgMTAwMCkge1xyXG4gICAgICByZXR1cm4gMTAwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgMjAwMCkge1xyXG4gICAgICByZXR1cm4gOTAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCAzMDAwKSB7XHJcbiAgICAgIHJldHVybiA4MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDQwMDApIHtcclxuICAgICAgcmV0dXJuIDcwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNTAwMCkge1xyXG4gICAgICByZXR1cm4gNjAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA2MDAwKSB7XHJcbiAgICAgIHJldHVybiA1MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDcwMDApIHtcclxuICAgICAgcmV0dXJuIDQwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgODAwMCkge1xyXG4gICAgICByZXR1cm4gMzAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDIwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduQXN0ZXJvaWRzKGFtb3VudCkge1xyXG4gICAgdmFyIGkgPSAwO1xyXG4gICAgZG8ge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH0gd2hpbGUgKGkrKyA8PSBhbW91bnQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25Qb3dlcnVwKCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHBvd2VydXBzKS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIHBvd2VydXBzW2lkXSA9IG5ldyBQb3dlcnVwKGlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdhbWVPdmVyKCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgIGFzdGVyb2lkc1tpXS5leHBsb2RlKCk7XHJcbiAgICB9XHJcbiAgICBzaG90cyA9IHt9O1xyXG4gICAgaWYgKCRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmhpZ2hzY29yZS5hc3Rlcm9pZHMgPCAkc2NvcGUuc2NvcmUpIHtcclxuICAgICAgICAkc2NvcGUuY3VycmVudFVzZXIuaGlnaHNjb3JlLmFzdGVyb2lkcyA9ICRzY29wZS5zY29yZTtcclxuICAgICAgICBHYW1lU3ZjLnNldEhpZ2hzY29yZSgnYXN0ZXJvaWRzJywgJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCwgJHNjb3BlLnNjb3JlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdoc2NvcmUgPCAkc2NvcGUuc2NvcmUpIHtcclxuICAgICAgICAkc2NvcGUuaGlnaHNjb3JlID0gJHNjb3BlLnNjb3JlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHQvLyBTdGFydCBsaXN0ZW5pbmcgdG8gcmVzaXplIGV2ZW50cyBhbmRcclxuXHQvLyBkcmF3IGNhbnZhcy5cclxuXHJcblx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcblx0XHQvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuXHRcdC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcblxyXG5cdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdHJlc2l6ZUNhbnZhcygpO1xyXG5cdH1cclxuXHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0Ly8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcblx0Ly8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcblx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpO1xyXG5cdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1MCA6IDEwNSk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG5cclxuICB2YXIgdGFsbHkgPSAwO1xyXG4gIHZhciBkaXJlY3Rpb24gPSB0cnVlO1xyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgZm9yICh2YXIgaSBpbiBzaG90cykge1xyXG4gICAgICBpZiAoc2hvdHNbaV0ubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBzaG90c1tpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG90c1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgYXN0ZXJvaWRzW2ldLm1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBwb3dlcnVwcykge1xyXG4gICAgICBwb3dlcnVwc1tpXS5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gZXhwbG9zaW9ucykge1xyXG4gICAgICBpZiAoZXhwbG9zaW9uc1tpXS5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIGV4cGxvc2lvbnNbaV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXhwbG9zaW9uc1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGV2YWx1YXRlS2V5cygpO1xyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIHNwYWNlc2hpcC5tb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgY2FudmFzLndpZHRoLCAwKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKCcwJywgJ3JnYignICsgTWF0aC5mbG9vcigyNTYgLSAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnKScpO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoJzAuMjUnLCAncmdiKCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDI1NiAtIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcpJyk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgnMC41JywgJ3JnYignICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigyNTYgLSAyNTYgKiB0YWxseSAvIDEwMCkgKyAnKScpO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoJzAuNzUnLCAncmdiKCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDI1NiAtIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcpJyk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgnMS4wJywgJ3JnYignICsgTWF0aC5mbG9vcigyNTYgLSAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnKScpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICAgIGN0eC5mb250PSc2MHB4IE1vbm90b24nO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ0FzdGVyb2lkcycsIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoJ0FzdGVyb2lkcycpLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpO1xyXG4gICAgICBjdHguZm9udD0nMjBweCBBbGRyaWNoJztcclxuICAgICAgY3R4LmZpbGxUZXh0KCdQcmVzcyBzcGFjZSB0byBzdGFydCcsIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoJ1ByZXNzIHNwYWNlIHRvIHN0YXJ0Jykud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiArIDIwKTtcclxuICAgICAgY3R4LmZpbGxUZXh0KCdEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5IExhdXJlbnQgRGViYWNrZXInLCBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KCdEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5IExhdXJlbnQgRGViYWNrZXInKS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLSAzMCk7XHJcbiAgICB9XHJcbiAgICB0YWxseSArPSBkaXJlY3Rpb24gPyAxIDogLTE7XHJcbiAgICBpZiAodGFsbHkgPiAxMDApIHtcclxuICAgICAgdGFsbHkgPSAxMDA7XHJcbiAgICAgIGRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICh0YWxseSA8IDApIHtcclxuICAgICAgdGFsbHkgPSAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLnNwYWNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJhc3Rlcm9pZHMvc3BhY2UnICsgc3BhY2UgKyAnLmpwZ1wiKSdcclxuICAgIH07XHJcbiAgfTtcclxuXHJcblxyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignQnViYmxlc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlcy1wYWdlJyk7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIHZhciBidWJibGVzID0gW107XHJcbiAgdmFyIGNvbG9ycyA9IFsnI2ZmYzMwMCcsJyNmZjU3MzMnLCcjYzcwMDM5JywnIzkwMGMzZScsJyM1NzE4NDUnXTtcclxuXHJcbiAgZnVuY3Rpb24gQnViYmxlKCkge1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDA7XHJcbiAgICB0aGlzLnJhZGl1cyA9IDE7XHJcbiAgICB0aGlzLmV4cGFuZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICB0aGlzLmNpcmN1bWZlcmVuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA1MCkgKyA1O1xyXG4gICAgdGhpcy5tYXhSYWRpdXMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyMDApICsgMjA7XHJcbiAgICB0aGlzLnggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGgpO1xyXG4gICAgdGhpcy55ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodCk7XHJcbiAgICB0aGlzLnZ4ID0gKE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xKTtcclxuICAgIHRoaXMudnkgPSAoTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGJ1YmJsZXMuZm9yRWFjaChmdW5jdGlvbihidWJibGUpIHtcclxuICAgICAgdmFyIGNvbG9yID0gY29sb3JzW01hdGgucm91bmQoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyhidWJibGUueCwgYnViYmxlLnksIGJ1YmJsZS5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yc1tNYXRoLnJvdW5kKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcnNbY29sb3JzLmxlbmd0aCAtIE1hdGgucm91bmQoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSBidWJibGUuY2lyY3VtZmVyZW5jZSAqIGJ1YmJsZS5yYWRpdXMgLyBidWJibGUubWF4UmFkaXVzO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbHRlckJ1YmJsZXMoKSB7XHJcbiAgICBidWJibGVzLnB1c2gobmV3IEJ1YmJsZSgpKTtcclxuICAgIGJ1YmJsZXMgPSBidWJibGVzLmZpbHRlcihmdW5jdGlvbiAoYnViYmxlKSB7XHJcbiAgICAgIGlmIChidWJibGUucmFkaXVzID09PSBidWJibGUubWF4UmFkaXVzKSB7XHJcbiAgICAgICAgYnViYmxlLmV4cGFuZGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1YmJsZS54ICs9IGJ1YmJsZS52eCAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnkgKz0gYnViYmxlLnZ5ICogYnViYmxlLnNwZWVkO1xyXG4gICAgICBidWJibGUucmFkaXVzICs9IChidWJibGUuZXhwYW5kaW5nID8gMSA6IC0xKTtcclxuICAgICAgcmV0dXJuIGJ1YmJsZS5yYWRpdXMgPiAwO1xyXG4gICAgfSk7XHJcbiAgICBkcmF3KCk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmlsdGVyQnViYmxlcyk7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmlsdGVyQnViYmxlcyk7XHJcblxyXG5cclxuXHQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0Ly8gU3RhcnQgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgYW5kXHJcblx0XHQvLyBkcmF3IGNhbnZhcy5cclxuXHRcdGluaXRpYWxpemUoKTtcclxuXHJcblx0XHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0XHQvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG5cdFx0XHQvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuXHRcdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG5cdFx0XHQvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG5cdFx0XHRyZXNpemVDYW52YXMoKTtcclxuXHRcdH1cclxuXHRcdC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuXHRcdC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG5cdFx0Ly8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcblx0XHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcblx0XHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1NSA6IDExMSk7XHJcblx0XHR9XHJcblxyXG5cdH0pKCk7XHJcblxyXG5cclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignQ2hhcmFkZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cdCRzY29wZS5zZWxlY3RXb3JkID0gY2F0ZWdvcnkgPT4ge1xyXG5cdFx0JHNjb3BlLndvcmQgPVxyXG5cdFx0XHQkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldW1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICRzY29wZS5jaGFyYWRlc1tjYXRlZ29yeV0ubGVuZ3RoKVxyXG5cdFx0XHRdO1xyXG5cdFx0Y29uc29sZS5sb2coJHNjb3BlLndvcmQpO1xyXG5cdH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQ29udGFjdEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRW1haWxTdmMpIHtcclxuICAkc2NvcGUub3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTcGFtXCIsXHJcbiAgICAgIHRleHQ6IFwiSSBhbSBhIHNwYW0gYm90IGFuZCBhdXRvbWF0aWNhbGx5IGNoZWNrIHRoZSBmaXJzdCBvcHRpb24gSSBmaW5kIVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPcHBvcnR1bml0eVwiLFxyXG4gICAgICB0ZXh0OiBcIllvdSBzZWVtIHRvIGhhdmUgdGhlIHNraWxscyBJIHNlZWssIEknZCBsaWtlIHRvIHRhbGsgYWJvdXQgc29tZSBvcHBvcnR1bml0aWVzLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZXN1bWVcIixcclxuICAgICAgdGV4dDogXCJJIGRpZyB0aGUgcmVzdW1lLCBob3cgZGlkIHlvdSBtYWtlIGl0P1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPdGhlclwiLFxyXG4gICAgICB0ZXh0OiBcIlN1bXRpbiBlbHNlIVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICAkc2NvcGUuY29udGFjdCA9IHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gICAgYWJvdXQ6IFwiXCIsXHJcbiAgICBtZXNzYWdlOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnNlbmRpbmcgPSB0cnVlO1xyXG4gICAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xyXG4gICAgRW1haWxTdmMuc2VuZCh7XHJcbiAgICAgIGVtYWlsOiAkc2NvcGUuY29udGFjdC5lbWFpbCxcclxuICAgICAgbmFtZTogJHNjb3BlLmNvbnRhY3QubmFtZSxcclxuICAgICAgcGhvbmU6ICRzY29wZS5jb250YWN0LnBob25lLFxyXG4gICAgICBhYm91dDogJHNjb3BlLmNvbnRhY3QuYWJvdXQsXHJcbiAgICAgIG1lc3NhZ2U6ICRzY29wZS5jb250YWN0Lm1lc3NhZ2UsXHJcbiAgICB9KS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuc2VudCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTLiBzdGF0dXM9JWQsIHRleHQ9JXNcIiwgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS50ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAkc2NvcGUuc2VuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRkFJTEVELiBlcnJvcj1cIiwgZXJyKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdFeHBlcmllbmNlQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLmdldFNraWxsID0gZnVuY3Rpb24oc2tpbGxDb2RlKSB7XHJcbiAgICBpZiAoISRzY29wZS5za2lsbHMpIHJldHVybjtcclxuICAgIHJldHVybiAkc2NvcGUuc2tpbGxzLmZpbmQoZnVuY3Rpb24oc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIHNraWxsLmNvZGUgPT09IHNraWxsQ29kZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdIb2JiaWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR3aW5kb3cpIHtcclxuXHJcbiAgJHNjb3BlLmhvYmJ5U2VsZWN0b3JWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICQuZ2V0SlNPTignaHR0cHM6Ly93d3cucmVkZGl0LmNvbS91c2VyL2JlbGdvY2FuYWRpYW4vYWJvdXQvLmpzb24nLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gJHNjb3BlLmhvYmJpZXNbMF07XHJcblxyXG4gICRzY29wZS5zZWxlY3RIb2JieSA9IGZ1bmN0aW9uIChob2JieSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkSG9iYnkgPSBob2JieTtcclxuICAgICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zaG93SG9iYnkgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnJheSkge1xyXG4gICAgaWYgKCF2YWx1ZS5pbWFnZXMpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB2YWx1ZS5pbWFnZXMubGVuZ3RoID4gMDtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMZW1taW5nc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBHYW1lU3ZjKSB7XHJcblxyXG4gIHZhciBMRUZUID0gMDtcclxuICB2YXIgUklHSFQgPSAxO1xyXG5cclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlbW1pbmdzLXBhZ2UnKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgdmFyIGxlbW1pbmdzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBsZW1taW5nc0ltYWdlLnNyYyA9ICdsZW1taW5ncy9sZW1taW5ncy5wbmcnO1xyXG4gIHZhciBkZWNvckltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgZGVjb3JJbWFnZS5zcmMgPSAnbGVtbWluZ3MvZGVjb3IucG5nJztcclxuICB2YXIgbGVtbWluZ3MgPSB7fTtcclxuICB2YXIgc3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICB2YXIgYWN0aW9ucyA9IHtcclxuICAgIHdhbGs6IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbMzIwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgaHVoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMzIwLCAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IHRydWVcclxuICAgIH0sXHJcbiAgICBmYWxsOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgODBdLFxyXG4gICAgICBlbmQ6IFsxNjAsIDEwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZmx5OiB7XHJcbiAgICAgIHN0YXJ0OiBbMTYwLCA4MF0sXHJcbiAgICAgIGVuZDogWzQ4MCwgMTEwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzdG9wOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMTIwXSxcclxuICAgICAgZW5kOiBbNjQwLCAxNDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBjbGltYjoge1xyXG4gICAgICBzdGFydDogWzAsIDE2MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTg1XSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgc3RhcnQ6IFswLCAyMDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDIyNV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHB1bmNoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjQwXSxcclxuICAgICAgZW5kOiBbNjQwLCAzMDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMixcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBkaWc6IHtcclxuICAgICAgc3RhcnQ6IFswLCAzMjBdLFxyXG4gICAgICBlbmQ6IFszMjAsIDM0NV0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIExlbW1pbmcoaW5pdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLndpZHRoIC0gMjAwKSkgKyAxMDAsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjYW52YXMuaGVpZ2h0IC0gMjAwKSkgKyAxMDBdO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogMiA+IDEgPyBMRUZUIDogUklHSFQ7XHJcbiAgICB0aGlzLmFjdCA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbnNbYWN0aW9uXTtcclxuICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgdGhpcy5oZWlnaHQgPSAodGhpcy5hY3Rpb24uZW5kWzFdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAoMjAgKiAodGhpcy5hY3Rpb24ucm93cyAtIDEpKSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5hY3QoaW5pdCk7XHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBMRUZUKSB7XHJcbiAgICAgICAgY3R4LnNjYWxlKC0xLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHZhciByb3cgPSBNYXRoLmZsb29yKHRoaXMuY3ljbGUgLyB0aGlzLmFjdGlvbi5jb2x1bW5zKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZShsZW1taW5nc0ltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKCh0aGlzLmhlaWdodCArIDIwKSAqIHJvdykgKyB0aGlzLmFjdGlvbi5zdGFydFsxXSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICBpZiAodGhpcy5hY3Rpb24ucmV2ZXJzZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPj0gdGhpcy5hY3Rpb24uY29sdW1ucyAqIHRoaXMuYWN0aW9uLnJvd3MpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSAhdGhpcy5hbmltYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS0tO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBIYXRjaCgpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbMjAsIDIwXTtcclxuICAgIHRoaXMuYWN0aW9uID0ge1xyXG4gICAgICBzdGFydDogWzAsIDBdLFxyXG4gICAgICBlbmQ6IFs4MiwgNTAwXSxcclxuICAgICAgY29sdW1uczogMSxcclxuICAgICAgcm93czogMTBcclxuICAgIH1cclxuICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdKSAvIHRoaXMuYWN0aW9uLnJvd3M7XHJcbiAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgIHRoaXMub3BlbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25bMF0sIHRoaXMucG9zaXRpb25bMV0pO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICB2YXIgY29sdW1uLCByb3c7XHJcbiAgICAgIGlmIChzdGFydGVkKSB7XHJcbiAgICAgICAgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgICAgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCA5KSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbHVtbiA9IDA7XHJcbiAgICAgICAgcm93ID0gMDtcclxuICAgICAgfVxyXG4gICAgICBjdHguZHJhd0ltYWdlKGRlY29ySW1hZ2UsICh0aGlzLndpZHRoICogY29sdW1uKSArIHRoaXMuYWN0aW9uLnN0YXJ0WzBdLCAodGhpcy5oZWlnaHQgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAxLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkxlbW1pbmcoKSB7XHJcbiAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICBsZW1taW5nc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApXSA9IG5ldyBMZW1taW5nKGFjdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHQvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG5cdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHQvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblx0XHQvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG5cdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0fVxyXG5cdC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuXHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcblx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogMTA1KTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxuICBzcGF3bkxlbW1pbmcoKTtcclxuICBsZXQgaGF0Y2ggPSBuZXcgSGF0Y2goKVxyXG4gIGRyYXcoKTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGlmICghc3RhcnRlZCkge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5mb250PSc0MHB4IE1vbm90b24nO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gJzEwJztcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xyXG4gICAgICBjdHgucmVjdCgxNSwgY2FudmFzLmhlaWdodCAtIDQ1LCBjdHgubWVhc3VyZVRleHQoJ1N0YXJ0Jykud2lkdGggKyAyMCwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLmhlaWdodCArIGNhbnZhcy5oZWlnaHQgLSA0NSk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnU3RhcnQnLCAyMCwgY2FudmFzLmhlaWdodCAtIDUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAodmFyIGkgaW4gbGVtbWluZ3MpIHtcclxuICAgICAgICBsZW1taW5nc1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGhhdGNoLm9wZW4oKTtcclxuICAgIHN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgZHJhdygpO1xyXG4gICAgfSwgMTUwKTtcclxuICB9XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xpc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgQ2F0ZWdvcmllc1N2Yykge1xyXG5cclxuICAkc2NvcGUuc2hvd0NhdGVnb3J5ID0gdHJ1ZTtcclxuXHJcbiAgJHNjb3BlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLmdldENhdGVnb3JpZXMoKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgJHNjb3BlLnRhc2tzID0gW107XHJcbiAgICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICBmb3IgKHZhciBqIGluICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzKSB7XHJcbiAgICAgICAgICAkc2NvcGUudGFza3MucHVzaCh7XHJcbiAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSxcclxuICAgICAgICAgICAgXCJ0YXNrXCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzW2pdLm5hbWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdENhdGVnb3J5ID0gZnVuY3Rpb24oY2F0ZWdvcnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRUYXNrcyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLnB1c2goJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY2F0ZWdvcmllc1tpXS5uYW1lID09PSBjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeSgkc2NvcGUuY2F0ZWdvcmllc1tpXSk7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuYWRkQ2F0ZWdvcnkoe1xyXG4gICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5pbml0KCk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZENhdGVnb3J5ID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLm5ld1Rhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXS5uYW1lID09PSB0YXNrKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSwge1xyXG4gICAgICAgIHRhc2s6IHRhc2tcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MucHVzaCh7IG5hbWU6IHRhc2sgfSk7XHJcbiAgICAgICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzWyRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5lbnRlcmVkVGFzayA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS51bnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmFkZFRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3QucHVzaCh0YXNrKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUucmVtb3ZlVGFzayA9IGZ1bmN0aW9uKHRhc2tMaXN0LCB0YXNrKSB7XHJcbiAgICB0YXNrTGlzdC5zcGxpY2UodGFza0xpc3QuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnN0YXJ0UHJpb3JpdGl6aW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLnNldFByaW9yaXR5TGlzdCgkc2NvcGUuc2VsZWN0ZWRUYXNrcyk7XHJcbiAgICAkbG9jYXRpb24ucGF0aCgnL3ByaW9yaXRpemUnKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0UXVlc3Rpb25zID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoISRzY29wZS5zZWxlY3RlZFRhc2tzKSByZXR1cm4gJyc7XHJcbiAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gJHNjb3BlLnNlbGVjdGVkVGFza3MubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICBjb3VudGVyICs9IGk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY291bnRlcjtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFVzZXJTdmMpIHtcclxuICAvLyBJbml0aWFsaXplIHRoZSBGaXJlYmFzZVVJIFdpZGdldCB1c2luZyBGaXJlYmFzZS5cclxuICB2YXIgdWkgPSBuZXcgZmlyZWJhc2V1aS5hdXRoLkF1dGhVSShmaXJlYmFzZS5hdXRoKCkpO1xyXG5cclxuICAkc2NvcGUuJG9uKCdsb2dvdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHVpLnJlc2V0KCk7XHJcbiAgICBzdGFydFVJKCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0VUkoKSB7XHJcbiAgICB1aS5zdGFydCgnI2ZpcmViYXNldWktYXV0aC1jb250YWluZXInLCB7XHJcbiAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgIHNpZ25JblN1Y2Nlc3M6IGZ1bmN0aW9uIChjdXJyZW50VXNlciwgY3JlZGVudGlhbCwgcmVkaXJlY3RVcmwpIHtcclxuICAgICAgICAgIC8vIE5vIHJlZGlyZWN0LlxyXG4gICAgICAgICAgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmF1dGgoKVxyXG4gICAgICAgICAgICAuY3VycmVudFVzZXIuZ2V0SWRUb2tlbih0cnVlKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoaWRUb2tlbikge1xyXG4gICAgICAgICAgICAgIFVzZXJTdmMuYXV0aGVudGljYXRlKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBjdXJyZW50VXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBjdXJyZW50VXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHBob3RvVVJMOiBjdXJyZW50VXNlci5waG90b1VSTCxcclxuICAgICAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IGN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQsXHJcbiAgICAgICAgICAgICAgICBpZFRva2VuOiBpZFRva2VuLFxyXG4gICAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KCdsb2dpbicsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcjbW9kYWwtbG9naW4nKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAvLyRsb2NhdGlvbi5wYXRoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoJ3BvcHVwJywge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdMb2dpbiBGYWlsZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhbGVydC1kYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIHNpZ25JbkZhaWx1cmUgY2FsbGJhY2sgbXVzdCBiZSBwcm92aWRlZCB0byBoYW5kbGUgbWVyZ2UgY29uZmxpY3RzIHdoaWNoXHJcbiAgICAgICAgLy8gb2NjdXIgd2hlbiBhbiBleGlzdGluZyBjcmVkZW50aWFsIGlzIGxpbmtlZCB0byBhbiBhbm9ueW1vdXMgdXNlci5cclxuICAgICAgICBzaWduSW5GYWlsdXJlOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgIC8vIEZvciBtZXJnZSBjb25mbGljdHMsIHRoZSBlcnJvci5jb2RlIHdpbGwgYmVcclxuICAgICAgICAgIC8vICdmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0Jy5cclxuICAgICAgICAgIGlmIChlcnJvci5jb2RlICE9ICdmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBUaGUgY3JlZGVudGlhbCB0aGUgdXNlciB0cmllZCB0byBzaWduIGluIHdpdGguXHJcbiAgICAgICAgICB2YXIgY3JlZCA9IGVycm9yLmNyZWRlbnRpYWw7XHJcbiAgICAgICAgICAvLyBDb3B5IGRhdGEgZnJvbSBhbm9ueW1vdXMgdXNlciB0byBwZXJtYW5lbnQgdXNlciBhbmQgZGVsZXRlIGFub255bW91c1xyXG4gICAgICAgICAgLy8gdXNlci5cclxuICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgLy8gRmluaXNoIHNpZ24taW4gYWZ0ZXIgZGF0YSBpcyBjb3BpZWQuXHJcbiAgICAgICAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhDcmVkZW50aWFsKGNyZWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdWlTaG93bjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy8gVGhlIHdpZGdldCBpcyByZW5kZXJlZC5cclxuICAgICAgICAgIC8vIEhpZGUgdGhlIGxvYWRlci5cclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpZ25JblN1Y2Nlc3NVcmw6ICcvaG9tZScsXHJcbiAgICAgIHNpZ25Jbk9wdGlvbnM6IFtcclxuICAgICAgICAvL2ZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgXSxcclxuXHJcbiAgICAgIC8vIFdpbGwgdXNlIHBvcHVwIGZvciBJRFAgUHJvdmlkZXJzIHNpZ24taW4gZmxvdyBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0LCByZWRpcmVjdC5cclxuICAgICAgc2lnbkluRmxvdzogJ3BvcHVwJyxcclxuICAgICAgLy8gT3RoZXIgY29uZmlnIG9wdGlvbnMuLi5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRVSSgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkZmlsdGVyLCBQb3N0c1N2Yykge1xyXG5cclxuICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkc2NvcGUucG9zdEJvZHkpIHtcclxuICAgICAgUG9zdHNTdmMuY3JlYXRlKHtcclxuICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBvc3RzU3ZjLmZldGNoKClcclxuICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5wb3N0cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oJ3dzOm5ld19wb3N0JywgZnVuY3Rpb24gKF8sIHBvc3QpIHtcclxuICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICBQb3N0c1N2Yy5nZXRQb3N0KHBvc3QpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5wb3N0cy51bnNoaWZ0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUHJpb3JpdGl6ZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIENhdGVnb3JpZXNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLnByaW9yaXR5TGlzdCA9IENhdGVnb3JpZXNTdmMuZ2V0UHJpb3JpdHlMaXN0KCk7XHJcblxyXG4gIGlmICghJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy9saXN0cycpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbiA9IDE7XHJcbiAgICAkc2NvcGUuY3VycmVudFF1ZXN0aW9uID0gMTtcclxuICAgICRzY29wZS5kb25lID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUubWFrZUNob2ljZSA9IGZ1bmN0aW9uKGNob2ljZSkge1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmlkID09PSAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbikge1xyXG4gICAgICAgICRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlID0gY2hvaWNlID09PSAxID8gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5maXJzdENob2ljZSA6ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uc2Vjb25kQ2hvaWNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24gPT09ICRzY29wZS5jdXJyZW50UXVlc3Rpb24pIHtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRRdWVzdGlvbiA9ICRzY29wZS5jdXJyZW50UXVlc3Rpb24gPT09ICRzY29wZS5wcmlvcml0eUxpc3QubGVuZ3RoID8gMSA6ICRzY29wZS5jdXJyZW50UXVlc3Rpb24gKyAxO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24gPSAkc2NvcGUuY3VycmVudFF1ZXN0aW9uO1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKGkgaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgPT09ICcnKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgICQoJyNwcmlvcml0aXplQ2hvaWNlcycpLmhpZGUoMzAwKTtcclxuICAgICAgJHNjb3BlLmRvbmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRCdXR0b25WYWx1ZSA9IGZ1bmN0aW9uKGNob2ljZSkge1xyXG4gICAgaWYgKCEkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLnByaW9yaXR5TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5pZCA9PT0gJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gY2hvaWNlID09PSAxID8gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5maXJzdENob2ljZSA6ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uc2Vjb25kQ2hvaWNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdFF1ZXN0aW9uID0gZnVuY3Rpb24ocXVlc3Rpb24pIHtcclxuICAgICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uID0gcXVlc3Rpb247XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldEZpbHRlcmVkUHJpb3JpdHlMaXN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICRzY29wZS5wcmlvcml0eUxpc3RcclxuICAgICAgLnNvcnQoZnVuY3Rpb24oYSwgYil7IHJldHVybiBhLmlkLWIuaWQ7IH0pXHJcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24ocXVlc3Rpb24pIHsgcmV0dXJuIHF1ZXN0aW9uLmNob2ljZSAhPT0gJycgfHwgcXVlc3Rpb24uaWQgPT09ICRzY29wZS5jdXJyZW50UXVlc3Rpb247IH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRDaG9pY2VzTWFkZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCEkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHZhciBjaG9pY2VzTWFkZSA9IDA7XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlICE9PSAnJykge1xyXG4gICAgICAgIGNob2ljZXNNYWRlKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjaG9pY2VzTWFkZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0QnV0dG9uQ2xhc3MgPSBmdW5jdGlvbihjaG9pY2UpIHtcclxuICAgIGlmICghJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uaWQgPT09ICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlID09PSAnJykge1xyXG4gICAgICAgICAgcmV0dXJuICdidG4tcHJpbWFyeSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaG9pY2UgPT09IDEpIHtcclxuICAgICAgICAgIHJldHVybiAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmZpcnN0Q2hvaWNlID09PSAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA/ICdidG4tc3VjY2VzcycgOiAnYnRuLWRhbmdlcic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLnNlY29uZENob2ljZSA9PT0gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgPyAnYnRuLXN1Y2Nlc3MnIDogJ2J0bi1kYW5nZXInO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zaG93Q2hvaWNlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnI3ByaW9yaXRpemVDaG9pY2VzJykuc2hvdygxMDAwKTtcclxuICAgICQoJyNyZXZpZXdDaG9pY2VzJykuaGlkZSgpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGFydENsaWNrID0gZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgaWYgKCAkc2NvcGUuY2hhcnQgKSB7XHJcbiAgICAgIC8vIERpZmZlcmVudCBtZXRob2RzIGRlcGVuZGluZyBvbiBjaGFydCB0eXBlXHJcbiAgICAgIC8vY29uc29sZS5sb2coICRzY29wZS5jaGFydC5nZXRQb2ludHNBdEV2ZW50KCBldmVudCApICk7IC8vIGZvciBQb2ludHNcclxuICAgICAgY29uc29sZS5sb2coICRzY29wZS5jaGFydC5nZXRTZWdtZW50c0F0RXZlbnQoIGV2ZW50ICkgKTsgLy8gZm9yIFNlZ21lbnRzXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNob3dSZXN1bHRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgJHNjb3BlLmRhdGEgPSBbXTtcclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAvLyBTZXRzIHRoZSBjaGFydCB0byBiZSByZXNwb25zaXZlXHJcbiAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcblxyXG4gICAgICAvL0Jvb2xlYW4gLSBXaGV0aGVyIHdlIHNob3VsZCBzaG93IGEgc3Ryb2tlIG9uIGVhY2ggc2VnbWVudFxyXG4gICAgICBzZWdtZW50U2hvd1N0cm9rZSA6IHRydWUsXHJcblxyXG4gICAgICAvL1N0cmluZyAtIFRoZSBjb2xvdXIgb2YgZWFjaCBzZWdtZW50IHN0cm9rZVxyXG4gICAgICBzZWdtZW50U3Ryb2tlQ29sb3IgOiAnI2ZmZicsXHJcblxyXG4gICAgICAvL051bWJlciAtIFRoZSB3aWR0aCBvZiBlYWNoIHNlZ21lbnQgc3Ryb2tlXHJcbiAgICAgIHNlZ21lbnRTdHJva2VXaWR0aCA6IDIsXHJcblxyXG4gICAgICAvL051bWJlciAtIFRoZSBwZXJjZW50YWdlIG9mIHRoZSBjaGFydCB0aGF0IHdlIGN1dCBvdXQgb2YgdGhlIG1pZGRsZVxyXG4gICAgICBwZXJjZW50YWdlSW5uZXJDdXRvdXQgOiAwLCAvLyBUaGlzIGlzIDAgZm9yIFBpZSBjaGFydHNcclxuXHJcbiAgICAgIC8vTnVtYmVyIC0gQW1vdW50IG9mIGFuaW1hdGlvbiBzdGVwc1xyXG4gICAgICBhbmltYXRpb25TdGVwcyA6IDEwMCxcclxuXHJcbiAgICAgIC8vU3RyaW5nIC0gQW5pbWF0aW9uIGVhc2luZyBlZmZlY3RcclxuICAgICAgYW5pbWF0aW9uRWFzaW5nIDogJ2Vhc2VPdXRCb3VuY2UnLFxyXG5cclxuICAgICAgLy9Cb29sZWFuIC0gV2hldGhlciB3ZSBhbmltYXRlIHRoZSByb3RhdGlvbiBvZiB0aGUgRG91Z2hudXRcclxuICAgICAgYW5pbWF0ZVJvdGF0ZSA6IHRydWUsXHJcblxyXG4gICAgICAvL0Jvb2xlYW4gLSBXaGV0aGVyIHdlIGFuaW1hdGUgc2NhbGluZyB0aGUgRG91Z2hudXQgZnJvbSB0aGUgY2VudHJlXHJcbiAgICAgIGFuaW1hdGVTY2FsZSA6IGZhbHNlLFxyXG5cclxuICAgICAgLy9TdHJpbmcgLSBBIGxlZ2VuZCB0ZW1wbGF0ZVxyXG4gICAgICBsZWdlbmRUZW1wbGF0ZSA6ICc8aDMgY2xhc3M9XCJ0Yy1jaGFydC1qcy1sZWdlbmRcIiBzdHlsZT1cInBhZGRpbmc6NXB4XCI+PCUgZm9yICh2YXIgaT0wOyBpPHNlZ21lbnRzLmxlbmd0aDsgaSsrKXslPjxkaXYgY2xhc3M9XCJsYWJlbFwiIHN0eWxlPVwiZmxvYXQ6bGVmdDttYXJnaW46NXB4O2JhY2tncm91bmQtY29sb3I6PCU9c2VnbWVudHNbaV0uZmlsbENvbG9yJT5cIj48JWlmKHNlZ21lbnRzW2ldLmxhYmVsKXslPjwlPXNlZ21lbnRzW2ldLmxhYmVsJT48JX0lPjwvZGl2PjwlfSU+PC9oMz4nXHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIgaSBpbiBDYXRlZ29yaWVzU3ZjLmNob2ljZXMpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLnZvdGVzID0gMDtcclxuICAgICAgZm9yICh2YXIgaiBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgICAgaWYgKENhdGVnb3JpZXNTdmMuY2hvaWNlc1tpXS5uYW1lID09PSAkc2NvcGUucHJpb3JpdHlMaXN0W2pdLmNob2ljZSkge1xyXG4gICAgICAgICAgQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLnZvdGVzKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBDYXRlZ29yaWVzU3ZjLmNob2ljZXMuc29ydChmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhLnZvdGVzIDwgYi52b3RlczsgfSk7XHJcbiAgICBmb3IgKGkgaW4gQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzKSB7XHJcbiAgICAgICRzY29wZS5kYXRhLnB1c2goe1xyXG4gICAgICAgIHZhbHVlOiBDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0udm90ZXMsXHJcbiAgICAgICAgbGFiZWw6IENhdGVnb3JpZXNTdmMuY2hvaWNlc1tpXS5uYW1lXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJCgnI3ByaW9yaXRpemVSZXN1bHQnKS5oaWRlKCk7XHJcbiAgICAkKCcjcHJpb3JpdGl6ZUNob2ljZXMnKS5oaWRlKCk7XHJcbiAgICAkKCcjcHJpb3JpdHlSZXN1bHRzJykuc2hvdygxMDAwKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUHJvZmlsZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFVzZXJTdmMpIHtcclxuXHJcbiAgaWYgKCEkc2NvcGUuY3VycmVudFVzZXIpIHtcclxuICAgICRsb2NhdGlvbi5wYXRoKCcvJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgICQoJyNzZXgtaW5kaWNhdG9yJykub2Zmc2V0KHsgbGVmdDogKCRzY29wZS5jdXJyZW50VXNlci5nZW5kZXIuc2V4IC8gMjAwICogJCgnI3NleCcpLndpZHRoKCkpICsgJCgnI3NleCcpLm9mZnNldCgpLmxlZnQgfSk7XHJcbiAgICAkKCcjaWRlbnRpdHktaW5kaWNhdG9yJykub2Zmc2V0KHsgbGVmdDogKCRzY29wZS5jdXJyZW50VXNlci5nZW5kZXIuaWRlbnRpdHkgLyAyMDAgKiAkKCcjaWRlbnRpdHknKS53aWR0aCgpKSArICQoJyNpZGVudGl0eScpLm9mZnNldCgpLmxlZnQgfSk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuc2V4ZXMgPSBbXHJcbiAgICAnTWFsZScsXHJcbiAgICAnRnRNIE1hbGUnLFxyXG4gICAgJ0ludGVyc2V4JyxcclxuICAgICdNdEYgRmVtYWxlJyxcclxuICAgICdGZW1hbGUnXHJcbiAgXTtcclxuICAkc2NvcGUuaWRlbnRpdGllcyA9IFtcclxuICAgICdNYW4nLFxyXG4gICAgJ0JpZ2VuZGVyJyxcclxuICAgICdQYW5nZW5kZXInLFxyXG4gICAgJ0FnZW5kZXInLFxyXG4gICAgJ1BvbHlnZW5kZXInLFxyXG4gICAgJ0dlbmRlcmZsdWlkJyxcclxuICAgICdHZW5kZXJxdWVlcicsXHJcbiAgICAnUXVlZXInLFxyXG4gICAgJ1dvbWFuJ1xyXG4gIF07XHJcblxyXG4gICRzY29wZS5kYXRlT3B0aW9ucyA9IHtcclxuICAgIG1heERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZSgxOTAwLCAxLCAxKSxcclxuICAgIGluaXREYXRlOiBuZXcgRGF0ZSgyMDAwLCAxLCAxKSxcclxuICAgIGRhdGVwaWNrZXJNb2RlOiAneWVhcidcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2VuZGVyID0gZnVuY3Rpb24oYXJyYXksIHBlcmNlbnRhZ2UpIHtcclxuICAgIHJldHVybiBhcnJheVtNYXRoLnJvdW5kKHBlcmNlbnRhZ2UgLyAyMDAgKiAoYXJyYXkubGVuZ3RoIC0gMSkpXTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc3RhcnRTbGlkZXIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgfTtcclxuICAkc2NvcGUuZHJhZ1NsaWRlciA9IGZ1bmN0aW9uKGV2ZW50LCB1aSwgdHlwZSkge1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyLmdlbmRlclt0eXBlXSA9IE1hdGgucm91bmQoKCQoJyMnICsgdHlwZSArICctaW5kaWNhdG9yJykub2Zmc2V0KCkubGVmdCAtICQoJyMnICsgdHlwZSkub2Zmc2V0KCkubGVmdCkgLyAoJCgnIycgKyB0eXBlKS53aWR0aCgpIC0gJCgnIycgKyB0eXBlICsgJy1pbmRpY2F0b3InKS53aWR0aCgpKSAqIDIwMCk7XHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgfTtcclxuICAkc2NvcGUuc3RvcFNsaWRlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICB9O1xyXG5cclxuICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSB0cnVlO1xyXG4gICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9IHRydWU7XHJcblxyXG4gICRzY29wZS50b2dnbGVVc2VybmFtZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgJHNjb3BlLnVzZXJuYW1lVG9nZ2xlID0gISRzY29wZS51c2VybmFtZVRvZ2dsZTtcclxuICAgICRzY29wZS5uZXdVc2VybmFtZSA9ICRzY29wZS5jdXJyZW50VXNlci51c2VybmFtZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQgPSBmdW5jdGlvbigpIHtcclxuICAgICRzY29wZS5uZXdQYXNzd29yZCA9IG51bGw7XHJcbiAgICAkc2NvcGUuY29uZmlybVBhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9ICEkc2NvcGUucGFzc3dvcmRUb2dnbGU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAocGFzc3dvcmQpIHtcclxuICAgIGlmIChwYXNzd29yZCkge1xyXG4gICAgICB2YXIgdXNlciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgIFVzZXJTdmMuY2hlY2tQYXNzd29yZCh1c2VyLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3JpZ2luYWxCZyA9ICQoXCIucGFzc3dvcmRcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIpO1xyXG4gICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uIChvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgaWYgKG5ld1Bhc3N3b3JkKSB7XHJcbiAgICAgIGlmIChuZXdQYXNzd29yZCA9PSBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICB2YXIgdXNlciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgICAgVXNlclN2Yy5jaGFuZ2VQYXNzd29yZCh1c2VyLCBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAkc2NvcGUuJGVtaXQoJ3BvcHVwJywge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGFzc3dvcmQgQ2hhbmdlZCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdhbGVydC1zdWNjZXNzJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkc2NvcGUub2xkUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgICAgICAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJHNjb3BlLiRlbWl0KCdwb3B1cCcsIHtcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkIENoYW5nZSBGYWlsZWQnLFxyXG4gICAgICAgICAgICB0eXBlOiAnYWxlcnQtZGFuZ2VyJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAkKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjZDMVwiIH0sIDIwMCkuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogb3JpZ2luYWxCZyB9LCAyMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXJuYW1lKSB7XHJcbiAgICAkc2NvcGUuJGVtaXQoJ2xvYWRpbmcnKTtcclxuICAgIFVzZXJTdmMuY2hhbmdlVXNlcm5hbWUoJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCwgdXNlcm5hbWUpXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgJHNjb3BlLiRlbWl0KCd1cGRhdGUnLCByZXNwb25zZS5kYXRhKTtcclxuICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICRzY29wZS4kZW1pdCgncG9wdXAnLCB7XHJcbiAgICAgICAgbWVzc2FnZTogdXNlcm5hbWUgKyAnIGFscmVhZHkgaW4gdXNlJyxcclxuICAgICAgICB0eXBlOiAnYWxlcnQtZGFuZ2VyJ1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS51cGRhdGVVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCRzY29wZS5jdXJyZW50VXNlcikgeyAgXHJcbiAgICAgICRzY29wZS4kZW1pdCgnbG9hZGluZycpO1xyXG4gICAgICBVc2VyU3ZjLnVwZGF0ZVVzZXIoJHNjb3BlLmN1cnJlbnRVc2VyKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoJ3VwZGF0ZScsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgJHNjb3BlLiR3YXRjaCgnY3VycmVudFVzZXIuZmxhZ3MubGVuZ3RoJywgZnVuY3Rpb24obGVuZ3RoKSB7XHJcbiAgICAkc2NvcGUudXBkYXRlVXNlcigpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUubG9hZENvdW50cmllcyA9IGZ1bmN0aW9uKCRxdWVyeSkge1xyXG4gICAgdmFyIGNvdW50cmllcyA9IFtcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbmRvcnJhXCIsIFwiZmxhZ1wiOiBcImZsYWctYWRcIiwgXCJ0aWRiaXRcIjogXCJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlVuaXRlZCBBcmFiIEVtaXJhdGVzXCIsIFwiZmxhZ1wiOiBcImZsYWctYWVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFmZ2hhbmlzdGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctYWZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQW5ndWlsbGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1haVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQWxiYW5pYVwiLCBcImZsYWdcIjogXCJmbGFnLWFsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBcm1lbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctYW1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFuZ29sYVwiLCBcImZsYWdcIjogXCJmbGFnLWFvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbnRhcmN0aWNhXCIsIFwiZmxhZ1wiOiBcImZsYWctYXFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFyZ2VudGluYVwiLCBcImZsYWdcIjogXCJmbGFnLWFyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbWVyaWNhbiBTb21vYVwiLCBcImZsYWdcIjogXCJmbGFnLWFzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBdXN0cmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctYXRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkF1c3RyYWxpYVwiLCBcImZsYWdcIjogXCJmbGFnLWF1XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBcnViYVwiLCBcImZsYWdcIjogXCJmbGFnLWF3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCLDhWxhbmQgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLWF4XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBemVyYmFpamFuXCIsIFwiZmxhZ1wiOiBcImZsYWctYXpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1iYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmFyYmFkb3NcIiwgXCJmbGFnXCI6IFwiZmxhZy1iYlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmFuZ2xhZGVzaFwiLCBcImZsYWdcIjogXCJmbGFnLWJkXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCZWxnaXVtXCIsIFwiZmxhZ1wiOiBcImZsYWctYmVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJ1cmtpbmEgRmFzb1wiLCBcImZsYWdcIjogXCJmbGFnLWJmXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCdWxnYXJpYVwiLCBcImZsYWdcIjogXCJmbGFnLWJnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCYWhyYWluXCIsIFwiZmxhZ1wiOiBcImZsYWctYmhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJ1cnVuZGlcIiwgXCJmbGFnXCI6IFwiZmxhZy1iaVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmVuaW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1ialwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FpbnQgQmFydGjDqWxlbXlcIiwgXCJmbGFnXCI6IFwiZmxhZy1ibFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmVybXVkYVwiLCBcImZsYWdcIjogXCJmbGFnLWJtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCcnVuZWkgXCIsIFwiZmxhZ1wiOiBcImZsYWctYm5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJvbGl2aWEsIFBsdXJpbmF0aW9uYWwgU3RhdGUgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1ib1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1icVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQnJhemlsXCIsIFwiZmxhZ1wiOiBcImZsYWctYnJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJhaGFtYXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1ic1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmh1dGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctYnRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJvdXZldCBJc2xhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1idlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQm90c3dhbmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1id1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmVsYXJ1c1wiLCBcImZsYWdcIjogXCJmbGFnLWJ5XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCZWxpemVcIiwgXCJmbGFnXCI6IFwiZmxhZy1ielwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2FuYWRhXCIsIFwiZmxhZ1wiOiBcImZsYWctY2FcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctY2NcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNvbmdvLCB0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGVcIiwgXCJmbGFnXCI6IFwiZmxhZy1jZFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCIsIFwiZmxhZ1wiOiBcImZsYWctY2ZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNvbmdvXCIsIFwiZmxhZ1wiOiBcImZsYWctY2dcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlN3aXR6ZXJsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctY2hcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkPDtHRlIGQnSXZvaXJlXCIsIFwiZmxhZ1wiOiBcImZsYWctY2lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNvb2sgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLWNrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDaGlsZVwiLCBcImZsYWdcIjogXCJmbGFnLWNsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDYW1lcm9vblwiLCBcImZsYWdcIjogXCJmbGFnLWNtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDaGluYVwiLCBcImZsYWdcIjogXCJmbGFnLWNuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDb2xvbWJpYVwiLCBcImZsYWdcIjogXCJmbGFnLWNvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDb3N0YSBSaWNhXCIsIFwiZmxhZ1wiOiBcImZsYWctY3JcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkN1YmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1jdVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2FibyBWZXJkZVwiLCBcImZsYWdcIjogXCJmbGFnLWN2XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDdXJhw6dhb1wiLCBcImZsYWdcIjogXCJmbGFnLWN3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDaHJpc3RtYXMgSXNsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctY3hcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkN5cHJ1c1wiLCBcImZsYWdcIjogXCJmbGFnLWN5XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDemVjaCBSZXB1YmxpY1wiLCBcImZsYWdcIjogXCJmbGFnLWN6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHZXJtYW55XCIsIFwiZmxhZ1wiOiBcImZsYWctZGVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkRqaWJvdXRpXCIsIFwiZmxhZ1wiOiBcImZsYWctZGpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkRlbm1hcmtcIiwgXCJmbGFnXCI6IFwiZmxhZy1ka1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRG9taW5pY2FcIiwgXCJmbGFnXCI6IFwiZmxhZy1kbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRG9taW5pY2FuIFJlcHVibGljXCIsIFwiZmxhZ1wiOiBcImZsYWctZG9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFsZ2VyaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1kelwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRWN1YWRvclwiLCBcImZsYWdcIjogXCJmbGFnLWVjXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJFc3RvbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctZWVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkVneXB0XCIsIFwiZmxhZ1wiOiBcImZsYWctZWdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIldlc3Rlcm4gU2FoYXJhXCIsIFwiZmxhZ1wiOiBcImZsYWctZWhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkVyaXRyZWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1lclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3BhaW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1lc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRXRoaW9waWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1ldFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRmlubGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWZpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGaWppXCIsIFwiZmxhZ1wiOiBcImZsYWctZmpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKVwiLCBcImZsYWdcIjogXCJmbGFnLWZrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctZm1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkZhcm9lIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1mb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRnJhbmNlXCIsIFwiZmxhZ1wiOiBcImZsYWctZnJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdhYm9uXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2FcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlVuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1nYlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3JlbmFkYVwiLCBcImZsYWdcIjogXCJmbGFnLWdkXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHZW9yZ2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2VcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkZyZW5jaCBHdWlhbmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1nZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3Vlcm5zZXlcIiwgXCJmbGFnXCI6IFwiZmxhZy1nZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR2hhbmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1naFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR2licmFsdGFyXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdyZWVubGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWdsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHYW1iaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1nbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3VpbmVhXCIsIFwiZmxhZ1wiOiBcImZsYWctZ25cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkd1YWRlbG91cGVcIiwgXCJmbGFnXCI6IFwiZmxhZy1ncFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRXF1YXRvcmlhbCBHdWluZWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1ncVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3JlZWNlXCIsIFwiZmxhZ1wiOiBcImZsYWctZ3JcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctZ3NcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkd1YXRlbWFsYVwiLCBcImZsYWdcIjogXCJmbGFnLWd0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHdWFtXCIsIFwiZmxhZ1wiOiBcImZsYWctZ3VcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkd1aW5lYS1CaXNzYXVcIiwgXCJmbGFnXCI6IFwiZmxhZy1nd1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3V5YW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctZ3lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkhvbmcgS29uZ1wiLCBcImZsYWdcIjogXCJmbGFnLWhrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1obVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSG9uZHVyYXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1oblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ3JvYXRpYVwiLCBcImZsYWdcIjogXCJmbGFnLWhyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJIYWl0aVwiLCBcImZsYWdcIjogXCJmbGFnLWh0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJIdW5nYXJ5XCIsIFwiZmxhZ1wiOiBcImZsYWctaHVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkluZG9uZXNpYVwiLCBcImZsYWdcIjogXCJmbGFnLWlkXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJcmVsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctaWVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIklzcmFlbFwiLCBcImZsYWdcIjogXCJmbGFnLWlsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJc2xlIG9mIE1hblwiLCBcImZsYWdcIjogXCJmbGFnLWltXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJbmRpYVwiLCBcImZsYWdcIjogXCJmbGFnLWluXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnlcIiwgXCJmbGFnXCI6IFwiZmxhZy1pb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSXJhcVwiLCBcImZsYWdcIjogXCJmbGFnLWlxXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJcmFuLCBJc2xhbWljIFJlcHVibGljIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctaXJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkljZWxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1pc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSXRhbHlcIiwgXCJmbGFnXCI6IFwiZmxhZy1pdFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSmVyc2V5XCIsIFwiZmxhZ1wiOiBcImZsYWctamVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkphbWFpY2FcIiwgXCJmbGFnXCI6IFwiZmxhZy1qbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSm9yZGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctam9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkphcGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctanBcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIktlbnlhXCIsIFwiZmxhZ1wiOiBcImZsYWcta2VcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkt5cmd5enN0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1rZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2FtYm9kaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1raFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiS2lyaWJhdGlcIiwgXCJmbGFnXCI6IFwiZmxhZy1raVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29tb3Jvc1wiLCBcImZsYWdcIjogXCJmbGFnLWttXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1rblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1rcFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiS29yZWEsIFJlcHVibGljIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWcta3JcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkt1d2FpdFwiLCBcImZsYWdcIjogXCJmbGFnLWt3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDYXltYW4gSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLWt5XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJLYXpha2hzdGFuXCIsIFwiZmxhZ1wiOiBcImZsYWcta3pcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljXCIsIFwiZmxhZ1wiOiBcImZsYWctbGFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxlYmFub25cIiwgXCJmbGFnXCI6IFwiZmxhZy1sYlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FpbnQgTHVjaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1sY1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGllY2h0ZW5zdGVpblwiLCBcImZsYWdcIjogXCJmbGFnLWxpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTcmkgTGFua2FcIiwgXCJmbGFnXCI6IFwiZmxhZy1sa1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGliZXJpYVwiLCBcImZsYWdcIjogXCJmbGFnLWxyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMZXNvdGhvXCIsIFwiZmxhZ1wiOiBcImZsYWctbHNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxpdGh1YW5pYVwiLCBcImZsYWdcIjogXCJmbGFnLWx0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMdXhlbWJvdXJnXCIsIFwiZmxhZ1wiOiBcImZsYWctbHVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxhdHZpYVwiLCBcImZsYWdcIjogXCJmbGFnLWx2XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMaWJ5YVwiLCBcImZsYWdcIjogXCJmbGFnLWx5XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNb3JvY2NvXCIsIFwiZmxhZ1wiOiBcImZsYWctbWFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vbmFjb1wiLCBcImZsYWdcIjogXCJmbGFnLW1jXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNb2xkb3ZhLCBSZXB1YmxpYyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLW1kXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNb250ZW5lZ3JvXCIsIFwiZmxhZ1wiOiBcImZsYWctbWVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhaW50IE1hcnRpbiAoRnJlbmNoIHBhcnQpXCIsIFwiZmxhZ1wiOiBcImZsYWctbWZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hZGFnYXNjYXJcIiwgXCJmbGFnXCI6IFwiZmxhZy1tZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFyc2hhbGwgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLW1oXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWNlZG9uaWEsIHRoZSBmb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1ta1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFsaVwiLCBcImZsYWdcIjogXCJmbGFnLW1sXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNeWFubWFyXCIsIFwiZmxhZ1wiOiBcImZsYWctbW1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vbmdvbGlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbW5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hY2FvXCIsIFwiZmxhZ1wiOiBcImZsYWctbW9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLW1wXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYXJ0aW5pcXVlXCIsIFwiZmxhZ1wiOiBcImZsYWctbXFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hdXJpdGFuaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1tclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTW9udHNlcnJhdFwiLCBcImZsYWdcIjogXCJmbGFnLW1zXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWx0YVwiLCBcImZsYWdcIjogXCJmbGFnLW10XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYXVyaXRpdXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1tdVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFsZGl2ZXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1tdlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFsYXdpXCIsIFwiZmxhZ1wiOiBcImZsYWctbXdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1leGljb1wiLCBcImZsYWdcIjogXCJmbGFnLW14XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWxheXNpYVwiLCBcImZsYWdcIjogXCJmbGFnLW15XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNb3phbWJpcXVlXCIsIFwiZmxhZ1wiOiBcImZsYWctbXpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5hbWliaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1uYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmV3IENhbGVkb25pYVwiLCBcImZsYWdcIjogXCJmbGFnLW5jXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOaWdlclwiLCBcImZsYWdcIjogXCJmbGFnLW5lXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOb3Jmb2xrIElzbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLW5mXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOaWdlcmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbmdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5pY2FyYWd1YVwiLCBcImZsYWdcIjogXCJmbGFnLW5pXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOZXRoZXJsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLW5sXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOb3J3YXlcIiwgXCJmbGFnXCI6IFwiZmxhZy1ub1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmVwYWxcIiwgXCJmbGFnXCI6IFwiZmxhZy1ucFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmF1cnVcIiwgXCJmbGFnXCI6IFwiZmxhZy1uclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTml1ZVwiLCBcImZsYWdcIjogXCJmbGFnLW51XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOZXcgWmVhbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLW56XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJPbWFuXCIsIFwiZmxhZ1wiOiBcImZsYWctb21cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBhbmFtYVwiLCBcImZsYWdcIjogXCJmbGFnLXBhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQZXJ1XCIsIFwiZmxhZ1wiOiBcImZsYWctcGVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkZyZW5jaCBQb2x5bmVzaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1wZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGFwdWEgTmV3IEd1aW5lYVwiLCBcImZsYWdcIjogXCJmbGFnLXBnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQaGlsaXBwaW5lc1wiLCBcImZsYWdcIjogXCJmbGFnLXBoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQYWtpc3RhblwiLCBcImZsYWdcIjogXCJmbGFnLXBrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQb2xhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1wbFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwiLCBcImZsYWdcIjogXCJmbGFnLXBtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQaXRjYWlyblwiLCBcImZsYWdcIjogXCJmbGFnLXBuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQdWVydG8gUmljb1wiLCBcImZsYWdcIjogXCJmbGFnLXByXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQYWxlc3RpbmUsIFN0YXRlIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctcHNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBvcnR1Z2FsXCIsIFwiZmxhZ1wiOiBcImZsYWctcHRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBhbGF1XCIsIFwiZmxhZ1wiOiBcImZsYWctcHdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBhcmFndWF5XCIsIFwiZmxhZ1wiOiBcImZsYWctcHlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlFhdGFyXCIsIFwiZmxhZ1wiOiBcImZsYWctcWFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlLDqXVuaW9uXCIsIFwiZmxhZ1wiOiBcImZsYWctcmVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlJvbWFuaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1yb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2VyYmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctcnNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlJ1c3NpYW4gRmVkZXJhdGlvblwiLCBcImZsYWdcIjogXCJmbGFnLXJ1XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJSd2FuZGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1yd1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2F1ZGkgQXJhYmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctc2FcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNvbG9tb24gSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLXNiXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTZXljaGVsbGVzXCIsIFwiZmxhZ1wiOiBcImZsYWctc2NcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlN1ZGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctc2RcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlN3ZWRlblwiLCBcImZsYWdcIjogXCJmbGFnLXNlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTaW5nYXBvcmVcIiwgXCJmbGFnXCI6IFwiZmxhZy1zZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1zaFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2xvdmVuaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1zaVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3ZhbGJhcmQgYW5kIEphbiBNYXllblwiLCBcImZsYWdcIjogXCJmbGFnLXNqXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTbG92YWtpYVwiLCBcImZsYWdcIjogXCJmbGFnLXNrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTaWVycmEgTGVvbmVcIiwgXCJmbGFnXCI6IFwiZmxhZy1zbFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FuIE1hcmlub1wiLCBcImZsYWdcIjogXCJmbGFnLXNtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTZW5lZ2FsXCIsIFwiZmxhZ1wiOiBcImZsYWctc25cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNvbWFsaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1zb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3VyaW5hbWVcIiwgXCJmbGFnXCI6IFwiZmxhZy1zclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU291dGggU3VkYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1zc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FvIFRvbWUgYW5kIFByaW5jaXBlXCIsIFwiZmxhZ1wiOiBcImZsYWctc3RcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkVsIFNhbHZhZG9yXCIsIFwiZmxhZ1wiOiBcImZsYWctc3ZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIiwgXCJmbGFnXCI6IFwiZmxhZy1zeFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3lyaWFuIEFyYWIgUmVwdWJsaWNcIiwgXCJmbGFnXCI6IFwiZmxhZy1zeVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3dhemlsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctc3pcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLXRjXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDaGFkXCIsIFwiZmxhZ1wiOiBcImZsYWctdGRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllc1wiLCBcImZsYWdcIjogXCJmbGFnLXRmXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUb2dvXCIsIFwiZmxhZ1wiOiBcImZsYWctdGdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRoYWlsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctdGhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRhamlraXN0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy10alwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVG9rZWxhdVwiLCBcImZsYWdcIjogXCJmbGFnLXRrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUaW1vci1MZXN0ZVwiLCBcImZsYWdcIjogXCJmbGFnLXRsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUdXJrbWVuaXN0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy10bVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVHVuaXNpYVwiLCBcImZsYWdcIjogXCJmbGFnLXRuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUb25nYVwiLCBcImZsYWdcIjogXCJmbGFnLXRvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUdXJrZXlcIiwgXCJmbGFnXCI6IFwiZmxhZy10clwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wiLCBcImZsYWdcIjogXCJmbGFnLXR0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUdXZhbHVcIiwgXCJmbGFnXCI6IFwiZmxhZy10dlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYVwiLCBcImZsYWdcIjogXCJmbGFnLXR3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctdHpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlVrcmFpbmVcIiwgXCJmbGFnXCI6IFwiZmxhZy11YVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVWdhbmRhXCIsIFwiZmxhZ1wiOiBcImZsYWctdWdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLXVtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIiwgXCJmbGFnXCI6IFwiZmxhZy11c1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVXJ1Z3VheVwiLCBcImZsYWdcIjogXCJmbGFnLXV5XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVemJla2lzdGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctdXpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkhvbHkgU2VlXCIsIFwiZmxhZ1wiOiBcImZsYWctdmFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsIFwiZmxhZ1wiOiBcImZsYWctdmNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlZlbmV6dWVsYSwgQm9saXZhcmlhbiBSZXB1YmxpYyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLXZlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJWaXJnaW4gSXNsYW5kcywgQnJpdGlzaFwiLCBcImZsYWdcIjogXCJmbGFnLXZnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJWaXJnaW4gSXNsYW5kcywgVS5TLlwiLCBcImZsYWdcIjogXCJmbGFnLXZpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJWaWV0IE5hbVwiLCBcImZsYWdcIjogXCJmbGFnLXZuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJWYW51YXR1XCIsIFwiZmxhZ1wiOiBcImZsYWctdnVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIldhbGxpcyBhbmQgRnV0dW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctd2ZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhbW9hXCIsIFwiZmxhZ1wiOiBcImZsYWctd3NcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlllbWVuXCIsIFwiZmxhZ1wiOiBcImZsYWcteWVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1heW90dGVcIiwgXCJmbGFnXCI6IFwiZmxhZy15dFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU291dGggQWZyaWNhXCIsIFwiZmxhZ1wiOiBcImZsYWctemFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlphbWJpYVwiLCBcImZsYWdcIjogXCJmbGFnLXptXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJaaW1iYWJ3ZVwiLCBcImZsYWdcIjogXCJmbGFnLXp3XCIgfSxcclxuICAgIF07XHJcbiAgICByZXR1cm4gY291bnRyaWVzLmZpbHRlcihmdW5jdGlvbihjb3VudHJ5KSB7XHJcbiAgICAgIHJldHVybiBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCRxdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignU2tpbGxzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR3aW5kb3cpIHtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkU2tpbGwgPSAwO1xyXG4gICRzY29wZS5za2lsbHNWaXNpYmxlID0gZmFsc2U7XHJcbiAgJHNjb3BlLnByb2plY3RzID0gW107XHJcblxyXG4gICRzY29wZS5sYWJlbHMgPSBbXCJEb3dubG9hZCBTYWxlc1wiLCBcIkluLVN0b3JlIFNhbGVzXCIsIFwiTWFpbC1PcmRlciBTYWxlc1wiXTtcclxuICAkc2NvcGUuZGF0YSA9IFszMDAsIDUwMCwgMTAwXTtcclxuXHJcbiAgJC5nZXRKU09OKCcvZXhwZXJpZW5jZS5qc29uJywgZnVuY3Rpb24oIGRhdGEgKSB7XHJcbiAgICAkc2NvcGUucHJvamVjdHMgPSBkYXRhLnJlZHVjZSgocHJvamVjdHMsIGVtcGxveWVyKSA9PiB7XHJcbiAgICAgIGlmIChlbXBsb3llci5wcm9qZWN0cykgcmV0dXJuIGVtcGxveWVyLnByb2plY3RzLmNvbmNhdChwcm9qZWN0cyk7XHJcbiAgICAgIGVsc2UgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgfSwge30pO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZmlsdGVyZWRQcm9qZWN0cyA9ICgpID0+ICRzY29wZS5wcm9qZWN0c1xyXG4gICAgLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5za2lsbHMgJiYgcHJvamVjdC5za2lsbHMuaW5jbHVkZXMoJHNjb3BlLnNlbGVjdGVkU2tpbGwuY29kZSkpXHJcblxyXG4gICQuZ2V0SlNPTignL3NraWxscy5qc29uJywgZnVuY3Rpb24oIGRhdGEgKSB7XHJcblxyXG4gICAgY29uc3Qgc2tpbGxzID0gZGF0YVxyXG4gICAgLmZpbHRlcigoc2tpbGwpID0+IHNraWxsLmVuYWJsZWQpXHJcblxyXG4gICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBza2lsbHNcclxuICAgIC5yZWR1Y2UoZnVuY3Rpb24oY2F0ZWdvcmllcywgc2tpbGwpIHtcclxuICAgICAgaWYgKCFjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldID0gW3NraWxsXVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldLnB1c2goc2tpbGwpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwgPSBmdW5jdGlvbiAoc2tpbGwpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwgPSBza2lsbDtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwuY2hhcnRPcHRpb25zID0ge1xyXG4gICAgICAgIGN1dG91dFBlcmNlbnRhZ2UgOiA4MCxcclxuICAgICAgICBjaXJjdW1mZXJlbmNlOiAyICogTWF0aC5QSSxcclxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwuY2hhcnRTdHlsZSA9IHtcclxuICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoL3NraWxscy8nICsgJHNjb3BlLnNlbGVjdGVkU2tpbGwuaW1hZ2UgKyAnKScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICc2MCUnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJzUwJSA1MCUnXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZFNraWxsKCRzY29wZS5za2lsbHNbMF0pO1xyXG5cclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFRlblRoaW5nc1N2Yykge1xyXG4gICAgJHNjb3BlLnNlYXJjaCA9IHtcclxuICAgICAgbmFtZTogXCJcIixcclxuICAgICAgdmFsdWVzOiBcIlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUua2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICBpZiAoJChcIiNuZXctYmx1cmJcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLmFkZFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5hZGRWYWx1ZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICgkKFwiI25ldy12YWx1ZVwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkKFwiI25ldy1ibHVyYlwiKS5mb2N1cygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgfVxyXG4gICAgICAvLyB1c2UgZS5rZXlDb2RlXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZWFyY2hOYW1lID0gXCJcIjtcclxuICAgICRzY29wZS5uZXdJdGVtID0ge307XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5RmlsdGVyID0gKGNhdGVnb3J5KSA9PiAoJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0gY2F0ZWdvcnkpO1xyXG4gICAgJHNjb3BlLnNldFVzZXJGaWx0ZXIgPSAodXNlcikgPT4gKCRzY29wZS51c2VyRmlsdGVyID0gdXNlcik7XHJcbiAgICAkc2NvcGUuc2V0VXBkYXRlRmlsdGVyID0gKHR5cGUpID0+ICgkc2NvcGUudXBkYXRlRmlsdGVyID0gdHlwZSk7XHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAobGFuZ3VhZ2UpID0+ICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSBsYW5ndWFnZSk7XHJcblxyXG4gICAgJHNjb3BlLmZpbHRlcmVkTGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxpc3RzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiAkc2NvcGUubGlzdHNcclxuICAgICAgICAuZmlsdGVyKCh7IGlzRHluYW1pYyB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoJHNjb3BlLnVwZGF0ZUZpbHRlciAhPT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwic3RhdGljXCIgJiYgaXNEeW5hbWljID09PSB0cnVlKSB8fFxyXG4gICAgICAgICAgICAgICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImR5bmFtaWNcIiAmJiBpc0R5bmFtaWMgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKCh7IGNhdGVnb3JpZXMgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCRzY29wZS5jYXRlZ29yeUZpbHRlciA9PT0gXCJBbGxcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICByZXR1cm4gY2F0ZWdvcmllcy5pbmRleE9mKCRzY29wZS5jYXRlZ29yeUZpbHRlcikgPj0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyID09PSBcIkJsYW5rXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoKHsgY3JlYXRvciB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoJHNjb3BlLnVzZXJGaWx0ZXIgPT09IFwiQWxsXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRvciA9PT0gJHNjb3BlLnVzZXJGaWx0ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKCh7IGxhbmd1YWdlIH0pID0+IHtcclxuICAgICAgICAgIGlmICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZSA9PT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsYW5ndWFnZSA9PT0gJHNjb3BlLmxhbmd1YWdlRmlsdGVyLmNvZGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kb24oXCJsb2dpblwiLCAoXykgPT4ge1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJzID0gJHNjb3BlLmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcnMucHVzaChcIkFsbFwiKTtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJzLnB1c2goXCJCbGFua1wiKTtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSBcIkFsbFwiO1xyXG4gICAgICAgICRzY29wZS51cGRhdGVGaWx0ZXIgPSBcImFsbFwiO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExhbmd1YWdlcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVycyA9ICRzY29wZS5sYW5ndWFnZXMubWFwKChsYW5ndWFnZSkgPT4gbGFuZ3VhZ2UpO1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcnMucHVzaCh7IG5hbWU6IFwiQWxsXCIsIGNvZGU6IFwiYWxsXCIgfSk7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0geyBuYW1lOiBcIkFsbFwiLCBjb2RlOiBcImFsbFwiIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0TGlzdCh7IF9pZDogJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5saXN0T3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcImRhdGVcIixcclxuICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICBsYWJlbDogXCJDcmVhdGlvbiBEYXRlXCIsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS52YWx1ZU9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJ2YWx1ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgICBsYWJlbDogXCJWYWx1ZVwiLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc29ydCA9IChzb3J0ZXIsIHNvcnRGaWVsZCwgc29ydExhYmVsKSA9PiB7XHJcbiAgICAgICRzY29wZVtzb3J0ZXJdLmxhYmVsID0gc29ydExhYmVsO1xyXG4gICAgICBpZiAoJHNjb3BlW3NvcnRlcl0uZmllbGQgPT09IHNvcnRGaWVsZCkge1xyXG4gICAgICAgICRzY29wZVtzb3J0ZXJdLmRpcmVjdGlvbiA9ICEkc2NvcGVbc29ydGVyXS5kaXJlY3Rpb247XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlW3NvcnRlcl0uZmllbGQgPSBzb3J0RmllbGQ7XHJcbiAgICAgICAgJHNjb3BlW3NvcnRlcl0uZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGFuZ3VhZ2VDb3VudCA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5saXN0cykgcmV0dXJuIDA7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gJHNjb3BlLmxpc3RzLmZpbHRlcihcclxuICAgICAgICAobGlzdCkgPT5cclxuICAgICAgICAgICgkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPT09IFwiQWxsXCIgfHwgbGlzdC5jYXRlZ29yaWVzLmluY2x1ZGVzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikpICYmXHJcbiAgICAgICAgICAobGFuZ3VhZ2UuY29kZSA9PT0gXCJhbGxcIiB8fCBsaXN0Lmxhbmd1YWdlID09PSBsYW5ndWFnZS5jb2RlKSAmJlxyXG4gICAgICAgICAgKCRzY29wZS51c2VyRmlsdGVyID09PSBcIkFsbFwiIHx8IGxpc3QuY3JlYXRvciA9PT0gJHNjb3BlLnVzZXJGaWx0ZXIpICYmXHJcbiAgICAgICAgICAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJhbGxcIiB8fCBsaXN0LmlzRHluYW1pYyA9PT0gKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiZHluYW1pY1wiKSlcclxuICAgICAgKS5sZW5ndGg7XHJcbiAgICAgIHJldHVybiBgJHtjb3VudH0gLSAke01hdGgucm91bmQoKGNvdW50IC8gJHNjb3BlLmxpc3RzLmxlbmd0aCkgKiAxMDApfSVgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Q2F0ZWdvcnlDb3VudCA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5saXN0cykgcmV0dXJuIDA7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gJHNjb3BlLmxpc3RzLmZpbHRlcihcclxuICAgICAgICAobGlzdCkgPT5cclxuICAgICAgICAgIChjYXRlZ29yeSA9PT0gXCJBbGxcIiB8fCBsaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSkgPj0gMCkgJiZcclxuICAgICAgICAgICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZSA9PT0gXCJhbGxcIiB8fCBsaXN0Lmxhbmd1YWdlID09PSAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZSkgJiZcclxuICAgICAgICAgICgkc2NvcGUudXNlckZpbHRlciA9PT0gXCJBbGxcIiB8fCBsaXN0LmNyZWF0b3IgPT09ICRzY29wZS51c2VyRmlsdGVyKSAmJlxyXG4gICAgICAgICAgKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiYWxsXCIgfHwgbGlzdC5pc0R5bmFtaWMgPT09ICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImR5bmFtaWNcIikpXHJcbiAgICAgICkubGVuZ3RoO1xyXG4gICAgICByZXR1cm4gYCR7Y291bnR9IC0gJHtNYXRoLnJvdW5kKChjb3VudCAvICRzY29wZS5saXN0cy5sZW5ndGgpICogMTAwKX0lYDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldFVwZGF0ZUNvdW50ID0gKHR5cGUpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubGlzdHMpIHJldHVybiAwO1xyXG4gICAgICBjb25zdCBjb3VudCA9ICRzY29wZS5saXN0cy5maWx0ZXIoXHJcbiAgICAgICAgKGxpc3QpID0+IHR5cGUgPT09IFwiYWxsXCIgfHwgKGxpc3QuaXNEeW5hbWljICYmIHR5cGUgPT09IFwiZHluYW1pY1wiKSB8fCAoIWxpc3QuaXNEeW5hbWljICYmIHR5cGUgPT09IFwic3RhdGljXCIpXHJcbiAgICAgICkubGVuZ3RoO1xyXG4gICAgICByZXR1cm4gYCR7Y291bnR9IC0gJHtNYXRoLnJvdW5kKChjb3VudCAvICRzY29wZS5saXN0cy5sZW5ndGgpICogMTAwKX0lYDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExpc3RzID0gKCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5sb2FkaW5nKSB7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdHMgPSBkYXRhO1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXJzID0ge307XHJcbiAgICAgICAgICAkc2NvcGUudXNlckZpbHRlcnMuQWxsID0gJHNjb3BlLmxpc3RzLmxlbmd0aDtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVycyA9ICRzY29wZS5saXN0c1xyXG4gICAgICAgICAgICAuc29ydCgobGlzdDEsIGxpc3QyKSA9PiBsaXN0MS5jcmVhdG9yID4gbGlzdDIuY3JlYXRvcilcclxuICAgICAgICAgICAgLnJlZHVjZSgodXNlcnMsIHsgY3JlYXRvciB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCF1c2Vyc1tjcmVhdG9yXSkgdXNlcnNbY3JlYXRvcl0gPSAwO1xyXG4gICAgICAgICAgICAgIHVzZXJzW2NyZWF0b3JdKys7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXJzO1xyXG4gICAgICAgICAgICB9LCAkc2NvcGUudXNlckZpbHRlcnMpO1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJDb3VudCA9IE9iamVjdC5rZXlzKCRzY29wZS51c2VyRmlsdGVycykubGVuZ3RoO1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXJzID0gc29ydE9iamVjdCgkc2NvcGUudXNlckZpbHRlcnMsIGZhbHNlKTtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVyID0gXCJBbGxcIjtcclxuICAgICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgJChcIiNjYXRlZ29yeS1zZWxlY3RcIikuaGlkZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Q2F0ZWdvcnlDbGFzcyA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICByZXR1cm4gJHNjb3BlLnNlbGVjdGVkTGlzdCAmJiAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSkgPj0gMFxyXG4gICAgICAgID8gXCJidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgOiBcImJ0bi1kZWZhdWx0XCI7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeUluZGV4ID0gJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpO1xyXG4gICAgICBpZiAoY2F0ZWdvcnlJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLnNwbGljZShjYXRlZ29yeUluZGV4LCAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdExhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICBjb25zdCBub25FbmdsaXNoSW5kZXggPSAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICBpZiAobGFuZ3VhZ2UuY29kZSAhPT0gXCJFTlwiICYmIG5vbkVuZ2xpc2hJbmRleCA8IDApIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMucHVzaChcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGxhbmd1YWdlLmNvZGUgPT09IFwiRU5cIiAmJiBub25FbmdsaXNoSW5kZXggPj0gMCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5zcGxpY2Uobm9uRW5nbGlzaEluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWRkTGlzdCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudExhbmd1YWdlID0gJHNjb3BlLnNlbGVjdGVkTGlzdCA/ICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2UgOiBcIkVOXCI7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIFwiXCIpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgY3JlYXRvcjogJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHZhbHVlczogW10sXHJcbiAgICAgICAgYW5zd2VyczogMCxcclxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGN1cnJlbnRMYW5ndWFnZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmhhc0R1cGxpY2F0ZSA9ICgpID0+XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgJiZcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgJiZcclxuICAgICAgXy5zb21lKFxyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgIChhbnN3ZXIpID0+IGFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCkgPT0gJHNjb3BlLm5ld0l0ZW0udmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpXHJcbiAgICAgICk7XHJcblxyXG4gICAgJHNjb3BlLmFkZFZhbHVlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm5ld0l0ZW0udmFsdWUpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBfLnNvbWUoXHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgICAgICAoYW5zd2VyKSA9PiBhbnN3ZXIudmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpID09ICRzY29wZS5uZXdJdGVtLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgYWxlcnQoYCR7JHNjb3BlLm5ld0l0ZW0udmFsdWV9IGlzIGFscmVhZHkgaW4gdGhlIGxpc3RgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0uY3JlYXRvciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy51bnNoaWZ0KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoJHNjb3BlLm5ld0l0ZW0pKSk7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmFuc3dlcnMrKztcclxuICAgICAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICRzY29wZS5uZXdJdGVtLmJsdXJiID0gXCJcIjtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMubGVuZ3RoID49IDEwICYmXHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QubmFtZSAmJlxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zYXZlTGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJChcIiNuZXctdmFsdWVcIikuZm9jdXMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnJlcG9ydExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBsaXN0LnJlcG9ydGVkID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLnJlcG9ydExpc3QoJHNjb3BlLmN1cnJlbnRVc2VyLCBsaXN0KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNhdmVMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuc2F2aW5nKSB7XHJcbiAgICAgICAgbGlzdC52YWx1ZXMgPSBsaXN0LnZhbHVlcy5maWx0ZXIoKHsgdmFsdWUgfSkgPT4gdmFsdWUpO1xyXG4gICAgICAgIGlmIChsaXN0LnZhbHVlcy5sZW5ndGggPj0gMTAgJiYgbGlzdC5uYW1lICYmIGxpc3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5zYXZlTGlzdCgkc2NvcGUuY3VycmVudFVzZXIsIGxpc3QpLnRoZW4oXHJcbiAgICAgICAgICAgICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5saXN0cy51bnNoaWZ0KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdExpc3QoZGF0YSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJHNjb3BlLmxpc3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUubGlzdHNbaV0uX2lkID09PSBkYXRhLl9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5saXN0c1tpXSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RMaXN0KGxpc3QpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobGlzdC52YWx1ZXMubGVuZ3RoIDwgMTApIHtcclxuICAgICAgICAgIGFsZXJ0KFwiTGlzdHMgbXVzdCBjb250YWluIDEwIG9yIG1vcmUgdmFsdWVzIVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFsaXN0Lm5hbWUpIHtcclxuICAgICAgICAgIGZsYXNoKFwiI2xpc3QtbmFtZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmxhc2goXCIubGlzdC1jYXRlZ29yeVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZmxhc2goZWxlbWVudCkge1xyXG4gICAgICBjb25zdCBjb2xvciA9ICQoZWxlbWVudCkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiKTtcclxuICAgICAgJChlbGVtZW50KS5hbmltYXRlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkE4MDcyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMDAsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgJChlbGVtZW50KS5hbmltYXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAwXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICghbGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUubGlzdHMgPSAkc2NvcGUubGlzdHMuZmlsdGVyKCh7IF9pZCB9KSA9PiBfaWQpO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGxpc3Q/XCIpKSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZGVsZXRlTGlzdChsaXN0KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmxpc3RCdXR0b25DbGFzcyA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGxpc3QudmFsdWVzLmxlbmd0aDtcclxuICAgICAgY29uc3QgYmx1cmJzID0gbGlzdC5ibHVyYnM7XHJcbiAgICAgIGlmICh2YWx1ZXMgPT09IGJsdXJicyAmJiBsaXN0LmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiYnRuLWRlZmF1bHRcIjtcclxuICAgICAgfSBlbHNlIGlmIChibHVyYnMgPT09IDAgJiYgIWxpc3QuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gXCJidG4td2FybmluZ1wiO1xyXG4gICAgICB9IGVsc2UgaWYgKGJsdXJicyA9PT0gMCAmJiBsaXN0LmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiYnRuLWluZm9cIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJidG4tcHJpbWFyeVwiO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRCbHVyYnMgPSAodHlwZSkgPT4ge1xyXG4gICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRCbHVyYnMoJHNjb3BlLnNlbGVjdGVkTGlzdCwgdHlwZSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0TGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiIsIi8qanNsaW50IGVzdmVyc2lvbjogNiovXHJcbmFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NBZG1pbkN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgVGVuVGhpbmdzU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8pID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5hZG1pbikge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcclxuICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLnJldmVyc2UgPSAhJHNjb3BlLm9yZGVyLnJldmVyc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0UXVldWUgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldFF1ZXVlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucXVldWUgPSByZXNwb25zZS5kYXRhLnJlcGxhY2UoXCIvblwiLCBcIjxici8+XCIpO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgICRzY29wZS5nZXRRdWV1ZSgpO1xyXG5cclxuICAgIFRlblRoaW5nc1N2Yy5nZXRQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICRzY29wZS5wYXVzZWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZygkc2NvcGUucGF1c2VkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdldFVzZXJzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMuZ2V0VXNlcnMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS51c2VycyA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKCh1c2VyKSA9PiAhdXNlci5hZG1pbik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVCYW4gPSAodXNlcikgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMudG9nZ2xlQmFuKHVzZXIuX2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlUGF1c2UgPSAodXNlcikgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMudG9nZ2xlUGF1c2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5wYXVzZWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5wYXVzZWQpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NDdXJhdGVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIFRlblRoaW5nc1N2Yykge1xyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcIm5hbWVcIixcclxuICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLnJldmVyc2UgPSAhJHNjb3BlLm9yZGVyLnJldmVyc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAkc2NvcGUubGlzdHMgPSBkYXRhO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0RGlmZmljdWx0eSA9IChsaXN0LCBkaWZmaWN1bHR5KSA9PiB7XHJcbiAgICAgIGxpc3QuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy51cGRhdGVMaXN0KHtcclxuICAgICAgICBfaWQ6IGxpc3QuX2lkLFxyXG4gICAgICAgIGRpZmZpY3VsdHk6IGRpZmZpY3VsdHksXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG5cdC5tb2R1bGUoJ2FwcCcpXHJcblx0Ly9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcblx0LmNvbnRyb2xsZXIoXHJcblx0XHQnVGVuVGhpbmdzR2FtZUN0cmwnLFxyXG5cdFx0ZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlUGFyYW1zLCBUZW5UaGluZ3NTdmMpIHtcclxuXHRcdFx0JHNjb3BlLiRvbignbG9naW4nLCBfID0+IHtcclxuXHRcdFx0XHRpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcblx0XHRcdFx0XHRnZXRVc2VycygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoJHN0YXRlUGFyYW1zLmdhbWUpIHtcclxuXHRcdFx0XHRUZW5UaGluZ3NTdmMuZ2V0R2FtZSgkc3RhdGVQYXJhbXMuZ2FtZSkudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0XHQkc2NvcGUuZ2FtZSA9IHJlc3BvbnNlLmRhdGE7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygkc2NvcGUuZ2FtZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHQpO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1dvcmtvdXRDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgJHNjb3BlLnRpbWVFeGVyY2lzaW5nID0gMzA7XHJcbiAgJHNjb3BlLnRpbWVSZXN0aW5nID0gMTA7XHJcbiAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuXHJcbiAgdmFyIHNvdW5kcyA9IHtcclxuICAgIG9uOiBuZXcgQXVkaW8oJ29uLndhdicpLFxyXG4gICAgb2ZmOiBuZXcgQXVkaW8oJ29mZi53YXYnKSxcclxuICAgIHN3aXRjaDogbmV3IEF1ZGlvKCdzd2l0Y2gud2F2JyksXHJcbiAgfTtcclxuXHJcblxyXG4gIHZhciBleGVyY2lzZXMgPSBbXHJcbiAgICB7bmFtZTogJ0p1bXBpbmcgSmFja3MnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdXYWxsIFNpdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1B1c2gtVXAnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdDcnVuY2gnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTdGVwLVVwJywgc3BsaXQ6IHRydWV9LFxyXG4gICAge25hbWU6ICdTcXVhdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1RyaWNlcHMgRGlwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUGxhbmsnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdIaWdoIEtuZWVzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnTHVuZ2UnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwIHdpdGggUm90YXRpb24nLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTaWRlIFBsYW5rJywgc3BsaXQ6IHRydWV9XHJcbiAgXTtcclxuXHJcbiAgdmFyIGV4ZXJjaXNpbmc7XHJcblxyXG4gICRzY29wZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChleGVyY2lzZXMubGVuZ3RoIC0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvICgkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3RpbmcpKSkgKyAnLycgKyBleGVyY2lzZXMubGVuZ3RoO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS53b3Jrb3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZXhjZXJjaXNlVGltZSA9ICRzY29wZS50aW1lRXhlcmNpc2luZyArICRzY29wZS50aW1lUmVzdGluZztcclxuICAgIGlmICghJHNjb3BlLnRpbWVSZW1haW5pbmcpIHtcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSBleGVyY2lzZXMubGVuZ3RoICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgZXhlcmNpc2luZyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS50aW1lUmVtYWluaW5nLS07XHJcbiAgICAgICAgaWYgKCRzY29wZS50aW1lUmVtYWluaW5nID09PSAwKSB7XHJcbiAgICAgICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJ0ZpbmlzaGVkISBDb25ncmF0cyEnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdXJyZW50RXhlcmNpc2UgPSBNYXRoLmZsb29yKCRzY29wZS50aW1lUmVtYWluaW5nIC8gZXhjZXJjaXNlVGltZSk7XHJcbiAgICAgICAgdmFyIHRpbWVyID0gJHNjb3BlLnRpbWVSZW1haW5pbmcgLSBjdXJyZW50RXhlcmNpc2UgKiBleGNlcmNpc2VUaW1lO1xyXG4gICAgICAgICRzY29wZS50aW1lciA9IHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nID8gdGltZXIgLSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgOiB0aW1lcjtcclxuICAgICAgICBpZiAodGltZXIgPiAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0gZXhlcmNpc2VzW2V4ZXJjaXNlcy5sZW5ndGggLSBjdXJyZW50RXhlcmNpc2UgLSAxXTtcclxuICAgICAgICBpZiAodGltZXIgPT09ICRzY29wZS50aW1lRXhlcmNpc2luZykge1xyXG4gICAgICAgICAgc291bmRzLm9uLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRpbWVyID09PSAwKSB7XHJcbiAgICAgICAgICBzb3VuZHMub2ZmLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRzY29wZS5leGVyY2lzZS5zcGxpdCAmJiB0aW1lciA9PT0gTWF0aC5mbG9vcigkc2NvcGUudGltZUV4ZXJjaXNpbmcgLyAyKSkge1xyXG4gICAgICAgICAgc291bmRzLnN3aXRjaC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAkc2NvcGUudGltZXIgPSAnJztcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJycsIHNwbGl0OiBmYWxzZX07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuXHQuZGlyZWN0aXZlKCdoZWFkJywgW1xyXG5cdFx0JyRyb290U2NvcGUnLFxyXG5cdFx0JyRzdGF0ZScsXHJcblx0XHQnJGNvbXBpbGUnLFxyXG5cdFx0JyRpbnRlcnBvbGF0ZScsXHJcblx0XHRmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkY29tcGlsZSwgJGludGVycG9sYXRlKSB7XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGUgPSBmdW5jdGlvbiBnZXRTdHlsZSh0ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdHlsZSA9IHtcclxuXHRcdFx0XHRcdGhyZWY6IHRlbXBsYXRlU3R5bGVVcmwsXHJcblx0XHRcdFx0XHRyZWw6ICdzdHlsZXNoZWV0J1xyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmIChzdHlsZS5ocmVmLm1hdGNoKC9cXC5sZXNzJC8pKSB7XHJcblx0XHRcdFx0XHRzdHlsZS5yZWwgPSAnc3R5bGVzaGVldC9sZXNzJztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBzdHlsZTtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gZ2V0U3R5bGVzKHN0YXRlKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdGF0ZXMgPSB7fTtcclxuXHJcblx0XHRcdFx0Ly9DaGVjayBzdGF0ZSBmb3Igc3R5bGVzXHJcblx0XHRcdFx0d2hpbGUgKHN0YXRlLm5hbWUgIT09ICcnKSB7XHJcblx0XHRcdFx0XHR2YXIgcGFyZW50ID0gJHN0YXRlLmdldCgnXicsIHN0YXRlKTtcclxuXHJcblx0XHRcdFx0XHQvL0luaXRpYXRlIG91ciB2aWV3IGxpc3RcclxuXHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXSkge1xyXG5cdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdID0ge307XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB0aGUgdGVtcGxhdGVTdHlsZVxyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSkge1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1bJyddID0gZ2V0U3R5bGUoc3RhdGUudGVtcGxhdGVTdHlsZVVybCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NoZWNrIHZpZXdzXHJcblx0XHRcdFx0XHRpZiAoc3RhdGUudmlld3MpIHtcclxuXHRcdFx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlLnZpZXdzLCBmdW5jdGlvbiAodmlldywga2V5KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgaGF2ZSBhIHN0eWxlXHJcblx0XHRcdFx0XHRcdFx0aWYgKCF2aWV3LnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgYXJlIHRhcmdldGluZyBzb21lIHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdGlmICgoa2V5ID0ga2V5LnNwbGl0KCdAJykpWzFdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgc3R5bGVzIGZvciB0aGF0IHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXSA9IHt9O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIHNvbWUgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXVtrZXlbMF1dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlc1trZXlbMV1dW2tleVswXV0gPSBnZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIG91ciBwYXJlbnQncyB2aWV3XHJcblx0XHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ29udGludWUgd2l0aCB0aGUgcGFyZW50XHJcblx0XHRcdFx0XHRzdGF0ZSA9IHBhcmVudDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vRmxhdHRlbiB0aGUgbGlzdFxyXG5cdFx0XHRcdHZhciBmbGF0ID0gW107XHJcblx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlcywgZnVuY3Rpb24gKHZpZXdzKSB7XHJcblxyXG5cdFx0XHRcdFx0Xy5mb3JFYWNoKHZpZXdzLCBmdW5jdGlvbiAoc3R5bGUpIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghXy5pbmNsdWRlcyhmbGF0LCBzdHlsZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRmbGF0LnB1c2goc3R5bGUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvL1JldmVyc2UgaXQgc28gd2UgaGF2ZSBhIHByb3BlciBoaWVyYXJjaHlcclxuXHRcdFx0XHRmbGF0LnJldmVyc2UoKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGZsYXQ7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0XHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSkge1xyXG5cclxuXHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gW107XHJcblxyXG5cdFx0XHRcdFx0dmFyIGh0bWwgPSAnPGxpbmsgbmctYXR0ci1yZWw9XCJ7e3N0eWxlLnJlbH19XCIgbmctcmVwZWF0PVwic3R5bGUgaW4gdGVtcGxhdGVTdHlsZXNcIiBuZy1ocmVmPVwie3tzdHlsZS5ocmVmfX1cIj4nO1xyXG5cclxuXHRcdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xce1xcey9nLCAkaW50ZXJwb2xhdGUuc3RhcnRTeW1ib2woKSk7XHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXH1cXH0vZywgJGludGVycG9sYXRlLmVuZFN5bWJvbCgpKTtcclxuXHJcblx0XHRcdFx0XHRlbGVtLmFwcGVuZCgkY29tcGlsZShodG1sKShzY29wZSkpO1xyXG5cclxuXHRcdFx0XHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykge1xyXG5cclxuXHRcdFx0XHRcdFx0c2NvcGUudGVtcGxhdGVTdHlsZXMgPSBnZXRTdHlsZXModG9TdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHR9XHJcblx0XSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnQ2F0ZWdvcmllc1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0Q2F0ZWdvcmllcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcycpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRUYXNrcyA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9jYXRlZ29yaWVzLycgKyBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZENhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9jYXRlZ29yaWVzLycsIGNhdGVnb3J5KTtcclxuICB9O1xyXG5cclxuICBzdmMuYWRkVGFzayA9IGZ1bmN0aW9uIChjYXRlZ29yeSwgdGFzaykge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkgKyAnL3Rhc2tzJywgdGFzayk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHN2Yy5jaG9pY2VzID0gbGlzdDtcclxuICAgIHN2Yy5wcmlvcml0eUxpc3QgPSBbXTtcclxuICAgIC8vTWFrZSBhIG5ldyBjaG9pY2UgbGlzdFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IGxpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICBzdmMucHJpb3JpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICBmaXJzdENob2ljZTogbGlzdFtyYW5kb20gPT09IDAgPyBpIDogal0ubmFtZSxcclxuICAgICAgICAgIHNlY29uZENob2ljZTogbGlzdFtyYW5kb20gPT09IDAgPyBqIDogaV0ubmFtZSxcclxuICAgICAgICAgIGNob2ljZTogJydcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2h1ZmZsZShzdmMucHJpb3JpdHlMaXN0KTtcclxuICAgIGZvciAoaSBpbiBzdmMucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHN2Yy5wcmlvcml0eUxpc3RbaV0uaWQgPSBpICsgMTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UHJpb3JpdHlMaXN0ID0gZnVuY3Rpb24obGlzdCkge1xyXG4gICAgcmV0dXJuIHN2Yy5wcmlvcml0eUxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xyXG4gICAgdmFyIG0gPSBhcnJheS5sZW5ndGgsIHQsIGk7XHJcbiAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZeKAplxyXG4gICAgd2hpbGUgKG0pIHtcclxuICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW504oCmXHJcbiAgICAgIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtLS0pO1xyXG4gICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcbiAgICAgIC8vYXJyYXlbbV0uZmlyc3RDaG9pY2U7XHJcbiAgICAgIHQgPSBhcnJheVttXTtcclxuICAgICAgYXJyYXlbbV0gPSBhcnJheVtpXTtcclxuICAgICAgYXJyYXlbaV0gPSB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0VtYWlsU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5zZW5kID0gZnVuY3Rpb24gKGVtYWlsKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9lbWFpbCcsIGVtYWlsKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5zZXJ2aWNlKCdGaWxlU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgICBzdmMuZ2V0SW1hZ2VzID0gZnVuY3Rpb24oZm9sZGVyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZmlsZXMvaW1hZ2VzLycgKyBmb2xkZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdmMuZ2V0U291bmRzID0gZnVuY3Rpb24oZm9sZGVyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZmlsZXMvc291bmRzLycgKyBmb2xkZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdHYW1lU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgICBzdmMuZ2V0SGlnaHNjb3JlID0gZnVuY3Rpb24gKGdhbWUsIHVzZXIpIHtcclxuICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9nYW1lcy8nICsgZ2FtZSArICcvJyArIHVzZXIgKyAnL2hpZ2hzY29yZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdmMuc2V0SGlnaHNjb3JlID0gZnVuY3Rpb24gKGdhbWUsIHVzZXIsIHNjb3JlKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2dhbWVzLycgKyBnYW1lICsgJy8nICsgdXNlciArICcvaGlnaHNjb3JlJywge1xyXG4gICAgICAgIHNjb3JlOiBzY29yZVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdMYW5ndWFnZVN2YycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmxhbmd1YWdlcyA9IFtcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRU5cIixcclxuICAgICAgXCJuYW1lXCI6IFwiRW5nbGlzaFwiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tZ2JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiTkxcIixcclxuICAgICAgXCJuYW1lXCI6IFwiTmVkZXJsYW5kc1wiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tbmxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRlJcIixcclxuICAgICAgXCJuYW1lXCI6IFwiRnJhbsOnYWlzXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1mclwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgc3ZjLnRleHQgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkVOXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIk5MXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkZSXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBzdmMuc2VsZWN0ZWRMYW5ndWFnZSA9IHN2Yy5sYW5ndWFnZXNbMF07XHJcblxyXG4gIHN2Yy5zZXRMYW5ndWFnZSA9IGZ1bmN0aW9uIChsYW5ndWFnZSkge1xyXG4gICAgc3ZjLnNlbGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgIHJldHVybiBsYW5ndWFnZTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gc3ZjLnNlbGVjdGVkTGFuZ3VhZ2U7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ1Bvc3RzU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5mZXRjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlID0gZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgcG9zdCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBvc3QgPSBmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cy8nICsgcG9zdC5faWQpO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlRlblRoaW5nc1N2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFF1ZXVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2JvdHMvdGVudGhpbmdzL3F1ZXVlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3RzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvbGlzdHNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2NhdGVnb3JpZXNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGFuZ3VhZ2VzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvbGFuZ3VhZ2VzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCwgbGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNhdmVMaXN0ID0gZnVuY3Rpb24gKHVzZXIsIGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wdXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0c1wiLCB7XHJcbiAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIGxpc3Q6IGxpc3QsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMucmVwb3J0TGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvcmVwb3J0L1wiICsgdXNlci5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5kZWxldGVMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0Qmx1cmJzID0gZnVuY3Rpb24gKGxpc3QsIHR5cGUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9saXN0cy8ke2xpc3QuX2lkfS9ibHVyYnMvJHt0eXBlfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnRvZ2dsZVBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEdhbWUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2dhbWUvJHtpZH1gKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLnNlcnZpY2UoJ1VzZXJTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICAgIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICAgIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvdXNlcnMnKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLmdldFVzZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvdXNlcnMvYWxsJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy50b2dnbGVCYW4gPSBmdW5jdGlvbihpZCkge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3VzZXJzL2Jhbi8ke2lkfWApO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdmMuc2V0VG9rZW4gPSBmdW5jdGlvbih0b2tlbikge1xyXG4gICAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1BdXRoJ10gPSB0b2tlbjtcclxuICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3VzZXJzL2F1dGhlbnRpY2F0ZScsIHtcclxuICAgICAgICB1c2VyOiB1c2VyXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICByZXR1cm4gc3ZjLnNldFRva2VuKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLmxvZ2luID0gZnVuY3Rpb24odXNlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3VzZXJzLycgKyB1c2VyICsgJy9sb2dpbicpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3VzZXJzLycgKyB1c2VyLl9pZCwge1xyXG4gICAgICAgIHVzZXI6IHVzZXJcclxuICAgICAgfSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy5jaGVja1Bhc3N3b3JkID0gZnVuY3Rpb24odXNlciwgcGFzc3dvcmQpIHtcclxuICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvdXNlcnMvJyArIHVzZXIgKyAnL3ZlcmlmaWNhdGlvbicsIHtcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy5jaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uKHVzZXIsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCkge1xyXG4gICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS91c2Vycy8nICsgdXNlciArICcvcGFzc3dvcmQnLCB7XHJcbiAgICAgICAgb2xkUGFzc3dvcmQ6IG9sZFBhc3N3b3JkLFxyXG4gICAgICAgIG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24odXNlciwgbmV3VXNlcm5hbWUpIHtcclxuICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvdXNlcnMvJyArIHVzZXIgKyAnL3VzZXJuYW1lJywge1xyXG4gICAgICAgIG5ld1VzZXJuYW1lOiBuZXdVc2VybmFtZVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLmxvZ291dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUF1dGgnXSA9ICcnO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdmMuY3JlYXRlVXNlciA9IGZ1bmN0aW9uKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS91c2VycycsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5jb250cm9sbGVyKCdRdWl6QW5pbWFsc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIEZpbGVTdmMpIHtcclxuXHJcbiAgICBGaWxlU3ZjLmdldFNvdW5kcygnYW5pbWFscycpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLmFuaW1hbHMgPSBfLnNodWZmbGUocmVzcG9uc2UuZGF0YS5tYXAoYW5pbWFsID0+ICh7XHJcbiAgICAgICAgICBzb3VuZDogYW5pbWFsLFxyXG4gICAgICAgICAgbmFtZTogYW5pbWFsLnN1YnN0cmluZygwLCBhbmltYWwuaW5kZXhPZignLicpKS5yZXBsYWNlKCdfJywgJyAnKS5jYXBpdGFsaXplKClcclxuICAgICAgICB9KSkpO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW1hbCBvZiAkc2NvcGUuYW5pbWFscykge1xyXG4gICAgICAgICAgYW5pbWFsLmFuc3dlcnMgPSBfLnNodWZmbGUoW2FuaW1hbC5uYW1lLCAuLi5nZXRSYW5kb21BbmltYWxzKGFuaW1hbC5uYW1lKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuYW5pbWFscyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5ndWVzcyA9IChhbmltYWwsIGd1ZXNzKSA9PiB7XHJcbiAgICAgIGFuaW1hbC5ndWVzcyA9IGd1ZXNzO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRSYW5kb21BbmltYWxzID0gbmFtZSA9PiBfLnNodWZmbGUoJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBuYW1lICE9PSBhbmltYWwubmFtZSkubWFwKGFuaW1hbCA9PiBhbmltYWwubmFtZSkpLnNsaWNlKDAsIDUpO1xyXG5cclxuICAgICRzY29wZS5nZXRTY29yZSA9ICgpID0+IGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAgICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxuICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1F1aXpHb29nbGVDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdnb29nbGUnKVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpekxvZ29zQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnbG9nb3MnKVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpek1vdmllc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ21vdmllcycpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmNvbnRyb2xsZXIoJ1F1aXpTa2VsZXRvbnNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBGaWxlU3ZjKSB7XHJcblxyXG4gICAgRmlsZVN2Yy5nZXRJbWFnZXMoJ3NrZWxldG9ucycpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLmFuaW1hbHMgPSBfLnNodWZmbGUocmVzcG9uc2UuZGF0YS5tYXAoYW5pbWFsID0+ICh7XHJcbiAgICAgICAgICBpbWFnZTogYW5pbWFsLFxyXG4gICAgICAgICAgbmFtZTogYW5pbWFsLnN1YnN0cmluZygwLCBhbmltYWwuaW5kZXhPZignLicpKS5yZXBsYWNlKCdfJywgJyAnKS5jYXBpdGFsaXplKClcclxuICAgICAgICB9KSkpO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW1hbCBvZiAkc2NvcGUuYW5pbWFscykge1xyXG4gICAgICAgICAgYW5pbWFsLmFuc3dlcnMgPSBfLnNodWZmbGUoW2FuaW1hbC5uYW1lLCAuLi5nZXRSYW5kb21BbmltYWxzKGFuaW1hbC5uYW1lKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuYW5pbWFscyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5ndWVzcyA9IChhbmltYWwsIGd1ZXNzKSA9PiB7XHJcbiAgICAgIGFuaW1hbC5ndWVzcyA9IGd1ZXNzO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRSYW5kb21BbmltYWxzID0gbmFtZSA9PiBfLnNodWZmbGUoJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBuYW1lICE9PSBhbmltYWwubmFtZSkubWFwKGFuaW1hbCA9PiBhbmltYWwubmFtZSkpLnNsaWNlKDAsIDEwKTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0U2NvcmUgPSAoKSA9PiBgJHskc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IGFuaW1hbC5uYW1lID09PSBhbmltYWwuZ3Vlc3MpLmxlbmd0aH0vJHskc2NvcGUuYW5pbWFscy5sZW5ndGh9YDtcclxuXHJcbiAgICAkc2NvcGUuaXNTY29yZVZpc2libGUgPSAoKSA9PiAkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IGFuaW1hbC5ndWVzcykubGVuZ3RoID09PSAkc2NvcGUuYW5pbWFscy5sZW5ndGg7XHJcbiAgfSk7Il19
