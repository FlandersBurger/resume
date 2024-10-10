var defaultDiacriticsRemovalMap = [{
    base: "A",
    letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
  }, {
    base: "AA",
    letters: /[\uA732]/g
  }, {
    base: "AE",
    letters: /[\u00C6\u01FC\u01E2]/g
  }, {
    base: "AO",
    letters: /[\uA734]/g
  }, {
    base: "AU",
    letters: /[\uA736]/g
  }, {
    base: "AV",
    letters: /[\uA738\uA73A]/g
  }, {
    base: "AY",
    letters: /[\uA73C]/g
  }, {
    base: "B",
    letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g
  }, {
    base: "C",
    letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g
  }, {
    base: "D",
    letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
  }, {
    base: "DZ",
    letters: /[\u01F1\u01C4]/g
  }, {
    base: "Dz",
    letters: /[\u01F2\u01C5]/g
  }, {
    base: "E",
    letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
  }, {
    base: "F",
    letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g
  }, {
    base: "G",
    letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
  }, {
    base: "H",
    letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
  }, {
    base: "I",
    letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
  }, {
    base: "J",
    letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g
  }, {
    base: "K",
    letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
  }, {
    base: "L",
    letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
  }, {
    base: "LJ",
    letters: /[\u01C7]/g
  }, {
    base: "Lj",
    letters: /[\u01C8]/g
  }, {
    base: "M",
    letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
  }, {
    base: "N",
    letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
  }, {
    base: "NJ",
    letters: /[\u01CA]/g
  }, {
    base: "Nj",
    letters: /[\u01CB]/g
  }, {
    base: "O",
    letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
  }, {
    base: "OI",
    letters: /[\u01A2]/g
  }, {
    base: "OO",
    letters: /[\uA74E]/g
  }, {
    base: "OU",
    letters: /[\u0222]/g
  }, {
    base: "P",
    letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g
  }, {
    base: "Q",
    letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
  }, {
    base: "R",
    letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
  }, {
    base: "S",
    letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
  }, {
    base: "T",
    letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
  }, {
    base: "TZ",
    letters: /[\uA728]/g
  }, {
    base: "U",
    letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
  }, {
    base: "V",
    letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g
  }, {
    base: "VY",
    letters: /[\uA760]/g
  }, {
    base: "W",
    letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g
  }, {
    base: "X",
    letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g
  }, {
    base: "Y",
    letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
  }, {
    base: "Z",
    letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
  }, {
    base: "a",
    letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
  }, {
    base: "aa",
    letters: /[\uA733]/g
  }, {
    base: "ae",
    letters: /[\u00E6\u01FD\u01E3]/g
  }, {
    base: "ao",
    letters: /[\uA735]/g
  }, {
    base: "au",
    letters: /[\uA737]/g
  }, {
    base: "av",
    letters: /[\uA739\uA73B]/g
  }, {
    base: "ay",
    letters: /[\uA73D]/g
  }, {
    base: "b",
    letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g
  }, {
    base: "c",
    letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
  }, {
    base: "d",
    letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
  }, {
    base: "dz",
    letters: /[\u01F3\u01C6]/g
  }, {
    base: "e",
    letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
  }, {
    base: "f",
    letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g
  }, {
    base: "g",
    letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
  }, {
    base: "h",
    letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
  }, {
    base: "hv",
    letters: /[\u0195]/g
  }, {
    base: "i",
    letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
  }, {
    base: "j",
    letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g
  }, {
    base: "k",
    letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
  }, {
    base: "l",
    letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
  }, {
    base: "lj",
    letters: /[\u01C9]/g
  }, {
    base: "m",
    letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g
  }, {
    base: "n",
    letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
  }, {
    base: "nj",
    letters: /[\u01CC]/g
  }, {
    base: "o",
    letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
  }, {
    base: "oi",
    letters: /[\u01A3]/g
  }, {
    base: "ou",
    letters: /[\u0223]/g
  }, {
    base: "oo",
    letters: /[\uA74F]/g
  }, {
    base: "p",
    letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g
  }, {
    base: "q",
    letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
  }, {
    base: "r",
    letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
  }, {
    base: "s",
    letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
  }, {
    base: "t",
    letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
  }, {
    base: "tz",
    letters: /[\uA729]/g
  }, {
    base: "u",
    letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
  }, {
    base: "v",
    letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g
  }, {
    base: "vy",
    letters: /[\uA761]/g
  }, {
    base: "w",
    letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g
  }, {
    base: "x",
    letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g
  }, {
    base: "y",
    letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
  }, {
    base: "z",
    letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
  }],
  domains = [".com", ".org", ".net", ".ac", ".ad", ".ae", ".af", ".ag", ".ai", ".al", ".am", ".ao", ".aq", ".ar", ".as", ".at", ".au", ".aw", ".ax", ".az", ".ba", ".bb", ".bd", ".be", ".bf", ".bg", ".bh", ".bi", ".bj", ".bm", ".bn", ".bo", ".bq", ".br", ".bs", ".bt", ".bw", ".by", ".bz", ".ca", ".cc", ".cd", ".cf", ".cg", ".ch", ".ci", ".ck", ".cl", ".cm", ".cn", ".co", ".cr", ".cu", ".cv", ".cw", ".cx", ".cy", ".cz", ".de", ".dj", ".dk", ".dm", ".do", ".dz", ".ec", ".ee", ".eg", ".eh", ".er", ".es", ".et", ".eu", ".fi", ".fj", ".fk", ".fm", ".fo", ".fr", ".ga", ".gd", ".ge", ".gf", ".gg", ".gh", ".gi", ".gl", ".gm", ".gn", ".gp", ".gq", ".gr", ".gs", ".gt", ".gu", ".gw", ".gy", ".hk", ".hm", ".hn", ".hr", ".ht", ".hu", ".id", ".ie", ".il", ".im", ".in", ".io", ".iq", ".ir", ".is", ".it", ".je", ".jm", ".jo", ".jp", ".ke", ".kg", ".kh", ".ki", ".km", ".kn", ".kp", ".kr", ".kw", ".ky", ".kz", ".la", ".lb", ".lc", ".li", ".lk", ".lr", ".ls", ".lt", ".lu", ".lv", ".ly", ".ma", ".mc", ".md", ".me", ".mg", ".mh", ".mk", ".ml", ".mm", ".mn", ".mo", ".mp", ".mq", ".mr", ".ms", ".mt", ".mu", ".mv", ".mw", ".mx", ".my", ".mz", ".na", ".nc", ".ne", ".nf", ".ng", ".ni", ".nl", ".no", ".np", ".nr", ".nu", ".nz", ".om", ".pa", ".pe", ".pf", ".pg", ".ph", ".pk", ".pl", ".pm", ".pn", ".pr", ".ps", ".pt", ".pw", ".py", ".qa", ".re", ".ro", ".rs", ".ru", ".rw", ".sa", ".sb", ".sc", ".sd", ".se", ".sg", ".sh", ".si", ".sk", ".sl", ".sm", ".sn", ".so", ".sr", ".ss", ".st", ".su", ".sv", ".sx", ".sy", ".sz", ".tc", ".td", ".tf", ".tg", ".th", ".tj", ".tk", ".tl", ".tm", ".tn", ".to", ".tr", ".tt", ".tv", ".tw", ".tz", ".ua", ".ug", ".uk", ".us", ".uy", ".uz", ".va", ".vc", ".ve", ".vg", ".vi", ".vn", ".vu", ".wf", ".ws", ".ye", ".yt", ".za", ".zm", ".zw"];
Object.defineProperty(String.prototype, "removeDiacritics", {
  value: function () {
    return defaultDiacriticsRemovalMap.reduce((result, letter) => result.replace(letter.letters, letter.base), this);
  }
});
const SPECIAL_CHARACTERS = "\\\\/ !?@#$%^&*()_+:.{},;\\-'``’‘\"";
Object.defineProperty(String.prototype, "removeSpecialCharacters", {
  value: function () {
    return this.replace(new RegExp(`[${SPECIAL_CHARACTERS}]`, "gi"), "");
  }
}), Object.defineProperty(String.prototype, "removeAllButLetters", {
  value: function () {
    return this.toLowerCase().removeDiacritics().removeSpecialCharacters();
  }
}), Object.defineProperty(String.prototype, "conceal", {
  value: function (extra) {
    return this.replace(new RegExp(`[^${SPECIAL_CHARACTERS}${extra}]`, "gi"), "⁎");
  }
}), Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
}), Object.defineProperty(String.prototype, "removeHTML", {
  value: function () {
    return this.replace(">", "≻").replace("<", "≺");
  }
}), Object.defineProperty(String.prototype, "parseSymbols", {
  value: function () {
    return this.replaceAll("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replaceAll("#", "&num;");
  }
}), Object.defineProperty(String.prototype, "replaceArray", {
  value: function (find, replace) {
    for (var replaceString = this, i = 0; i < find.length; i++) replaceString = replaceString.replace(find[i], replace[i]);
    return replaceString;
  }
}), Object.defineProperty(String.prototype, "maskURLs", {
  value: function () {
    return this.replaceArray(["https://", "http://"], "nope://").replaceArray(domains, ".nope");
  }
}), Object.defineProperty(Number.prototype, "makeReadable", {
  value: function () {
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}), Object.defineProperty(Number.prototype, "makePercentage", {
  value: function (decimals) {
    return void 0 === decimals && (decimals = 2), `${(100 * this).toFixed(decimals)}%`;
  }
});
const sortObject = (obj, direction) => {
  let arr = [];
  for (const key in obj) arr.push([key, obj[key]]);
  arr.sort((a, b) => direction ? a[1] - b[1] : b[1] - a[1]);
  let objSorted = {};
  return arr.forEach(item => objSorted[item[0]] = item[1]), objSorted;
};
angular.module("app", ["ui.router", "ui.bootstrap", "ngAnimate", "ngSanitize", "ngDragDrop", "ngTagsInput", "vcRecaptcha", "chart.js", "tc.chartjs", "infinite-scroll"]), angular.module("app").config(function ($stateProvider, $urlRouterProvider, $urlServiceProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/home"), $urlServiceProvider.config.strictMode(!1), $stateProvider.state("home", {
    url: "/home",
    templateUrl: "/home.html"
  }).state("policy", {
    url: "/policy",
    templateUrl: "/policy.html"
  }).state("print", {
    url: "/print",
    templateUrl: "/print.html"
  }).state("experience", {
    url: "/experience",
    controller: "ExperienceCtrl",
    templateUrl: "/experience.html"
  }).state("skills", {
    url: "/skills",
    controller: "SkillsCtrl",
    templateUrl: "/skills.html"
  }).state("hobbies", {
    url: "/hobbies",
    controller: "HobbiesCtrl",
    templateUrl: "/hobbies.html"
  }).state("contact", {
    url: "/contact",
    controller: "ContactCtrl",
    templateUrl: "/contact.html"
  }).state("workout", {
    url: "/workout",
    controller: "WorkoutCtrl",
    templateUrl: "/workout.html"
  }).state("posts", {
    url: "/posts",
    controller: "PostsCtrl",
    templateUrl: "/posts.html"
  }).state("profile", {
    url: "/profile",
    controller: "ProfileCtrl",
    templateUrl: "/profile.html"
  }).state("lists", {
    url: "/lists",
    controller: "ListsCtrl",
    templateUrl: "lists.html"
  }).state("bubbles", {
    url: "/bubbles",
    controller: "BubblesCtrl",
    templateUrl: "bubbles.html"
  }).state("asteroids", {
    url: "/asteroids",
    controller: "AsteroidsCtrl",
    templateUrl: "asteroids.html"
  }).state("lemmings", {
    url: "/lemmings",
    controller: "LemmingsCtrl",
    templateUrl: "lemmings.html"
  }).state("bots", {
    url: "/bots",
    controller: "TenThingsCtrl",
    templateUrl: "tenthings.html"
  }).state("tenthings", {
    url: "/tenthings",
    controller: "TenThingsCtrl",
    templateUrl: "tenthings.html"
  }).state("tenthings-admin", {
    url: "/tenthings-admin",
    controller: "TenThingsAdminCtrl",
    templateUrl: "tenthings-admin.html"
  }).state("tenthings-game", {
    url: "/tenthings/:game",
    controller: "TenThingsGameCtrl",
    templateUrl: "tenthings-game.html"
  }).state("tenthings-stats", {
    url: "/tenthings-stats",
    controller: "TenThingsStatsCtrl",
    templateUrl: "tenthings-stats.html"
  }).state("quiz-google", {
    url: "/google",
    controller: "QuizGoogleCtrl",
    templateUrl: "quizzes/google.html"
  }).state("quiz-logos", {
    url: "/logos",
    controller: "QuizLogosCtrl",
    templateUrl: "quizzes/logos.html"
  }).state("quiz-animals", {
    url: "/animals",
    controller: "QuizAnimalsCtrl",
    templateUrl: "quizzes/animals.html"
  }).state("quiz-skeletons", {
    url: "/skeletons",
    controller: "QuizSkeletonsCtrl",
    templateUrl: "quizzes/skeletons.html"
  }).state("quiz-movies", {
    url: "/movies",
    controller: "QuizMoviesCtrl",
    templateUrl: "quizzes/movies.html"
  }).state("charades", {
    url: "/charades",
    controller: "CharadesCtrl",
    templateUrl: "/charades.html"
  }), $locationProvider.html5Mode({
    enabled: !0,
    requireBase: !1
  });
}), angular.module("app").service("WebSocketSvc", function ($rootScope, $timeout) {
  var connection,
    connect = function () {
      (connection = new WebSocket("https:" === window.location.protocol ? "wss://" + window.location.host : "ws://" + window.location.host)).onopen = function () {
        console.log("Websocket connected");
      }, connection.onclose = function (e) {
        console.log("Websocket closed. Reconnecting..."), $timeout(connect, 1e3);
      }, connection.onerror = function (e) {
        console.log("Error: " + e + " - State: " + connection.readyState);
      }, connection.onmessage = function (e) {
        var payload = JSON.parse(e.data);
        $rootScope.$broadcast("ws:" + payload.topic, payload.data);
      };
    };
  this.send = function (topic, data) {
    var json = JSON.stringify({
      topic,
      data
    });
    connection.send(json);
  }, this.connect = connect;
}).run(function (WebSocketSvc) {
  WebSocketSvc.connect();
}), angular.module("app").directive("clickOutside", function ($document) {
  return {
    restrict: "A",
    scope: {
      clickOutside: "&"
    },
    link: function (scope, el, attr) {
      $document.on("click", function (e) {
        el === e.target || el[0].contains(e.target) || scope.$apply(function () {
          scope.$eval(scope.clickOutside);
        });
      });
    }
  };
}), angular.module("app").directive("head", ["$rootScope", "$state", "$compile", "$interpolate", function ($rootScope, $state, $compile, $interpolate) {
  var getStyle = function (templateStyleUrl) {
    var style = {
      href: templateStyleUrl,
      rel: "stylesheet"
    };
    return style.href.match(/\.less$/) && (style.rel = "stylesheet/less"), style;
  };
  return {
    restrict: "E",
    link: function (scope, elem) {
      scope.templateStyles = [];
      var html = '<link ng-attr-rel="{{style.rel}}" ng-repeat="style in templateStyles" ng-href="{{style.href}}">';
      html = (html = html.replace(/\{\{/g, $interpolate.startSymbol())).replace(/\}\}/g, $interpolate.endSymbol()), elem.append($compile(html)(scope)), $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
        scope.templateStyles = function (state) {
          for (var states = {}; "" !== state.name;) {
            var parent = $state.get("^", state);
            states[parent.name] || (states[parent.name] = {}), state.templateStyleUrl && (states[parent.name][""] || (states[parent.name][""] = getStyle(state.templateStyleUrl))), state.views && _.forEach(state.views, function (view, key) {
              if (view.templateStyleUrl) return (key = key.split("@"))[1] ? (states[key[1]] || (states[key[1]] = {}), void (states[key[1]][key[0]] || (states[key[1]][key[0]] = getStyle(view.templateStyleUrl)))) : void (states[parent.name][key[0]] = getStyle(view.templateStyleUrl));
            }), state = parent;
          }
          var flat = [];
          return _.forEach(states, function (views) {
            _.forEach(views, function (style) {
              _.includes(flat, style) || flat.push(style);
            });
          }), flat.reverse(), flat;
        }(toState);
      });
    }
  };
}]), angular.module("app").controller("AppCtrl", function ($scope, LanguageSvc, UserSvc) {
  console.log("%cYou sneaky bugger!", "font: 2em sans-serif; color: DodgerBlue; text-shadow: 2px 0 0 #444, -2px 0 0 #444, 0 2px 0 #444, 0 -2px 0 #444, 1px 1px #444, -1px -1px 0 #444, 1px -1px 0 #444, -1px 1px 0 #444;"), console.log("I'm glad you're curious whether something is popping up in here. I'm a bit of a stickler when it comes to messages in the console so I try to make sure only things I want are visible. That being said, if there is a big error here, I would really appreciate you telling me so I can get rid of it!"), console.log("The code for my resume is hosted on Github if you really want to go into all this! => https://github.com/FlandersBurger/resume"), $(window).load(function () {
    $(".loading").fadeOut("slow"), $(".content").fadeIn("slow");
  }), $(".checkbox-menu").on("change", "input[type='checkbox']", function () {
    $(this).closest("li").toggleClass("active", this.checked);
  }), $(document).on("click", ".allow-focus", function (e) {
    e.stopPropagation();
  }), $scope.themeCounter = 6, $scope.today = new Date(), $scope.year = $scope.today.getFullYear(), $scope.random = Math.floor(1e6 * Math.random()), $scope.flipTheme = () => {
    $(".loading").show(), $(".content").hide(), setTimeout(() => {
      $(".loading").fadeOut("slow"), $(".content").fadeIn("slow");
    }, 800), $scope.themeCounter = $scope.themeCounter < 6 ? $scope.themeCounter + 1 : $scope.themeCounter = 1;
  }, $.getJSON("/skills.json", function (data) {
    $scope.skills = data.filter(function (skill) {
      return skill.enabled;
    });
  }), $.getJSON("/hobbies.json", function (data) {
    $scope.hobbies = data;
  }), $.getJSON("/experience.json", function (data) {
    $scope.jobs = data, $scope.jobs.forEach(job => {
      job.startDate = new Date(job.startDate), job.endDate && (job.endDate = new Date(job.endDate));
    });
  }), $.getJSON("/charades.json", function (data) {
    $scope.charades = data;
  }), $scope.getTimeSpan = job => job.startDate.getFullYear() + (job.endDate ? " - " + job.endDate.getFullYear() : " - Today"), $scope.languages = LanguageSvc.languages, $scope.selectedLanguage = LanguageSvc.getLanguage(), $scope.selectLanguage = language => {
    $scope.selectedLanguage = LanguageSvc.setLanguage(language);
  }, $scope.hoverdiv = (e, divid) => {
    var left = e.clientX + "px",
      top = e.clientY + 20 + "px";
    document.getElementById(divid);
    return $("#" + divid).css("left", left), $("#" + divid).css("top", top), $("#" + divid).toggle(), !1;
  }, window.localStorage.user && UserSvc.login(window.localStorage.user).then(response => {
    login(response.data);
  }), $scope.$on("login", (_, user) => {
    login(user);
  });
  const login = user => {
    $scope.loggedIn || (window.localStorage.user = user._id, $scope.loggedIn = !0, $scope.currentUser = user, $scope.currentUser.birthDate = new Date($scope.currentUser.birthDate), $scope.$broadcast("login"));
  };
  $scope.$on("update", (_, user) => {
    $scope.currentUser = user, $scope.currentUser.birthDate = new Date($scope.currentUser.birthDate), $scope.loading = !1, setTimeout(() => {
      $("#loading-icon").fadeOut("slow");
    }, 1e3);
  }), $scope.$on("loading", (_, user) => {
    $scope.loading = !0, $("#loading-icon").show();
  }), $scope.$on("loaded", (_, user) => {
    $scope.loading = !1, setTimeout(function () {
      $("#loading-icon").fadeOut("slow");
    }, 1e3);
  }), $scope.logout = () => {
    firebase.auth().signOut().then(() => {
      $scope.loggedIn = !1, window.localStorage.clear(), $scope.$broadcast("logout");
    }).catch(error => {
      console.error(error);
    });
  }, $scope.formatDate = date => (date = new Date(date)).getDate() + "-" + ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()] + "-" + date.getFullYear();
}), angular.module("app").controller("AsteroidsCtrl", function ($location, $scope, GameSvc) {
  $scope.announce = !1;
  const canvas = document.getElementById("asteroids-page");
  if (!canvas) return $location.path("/home"), alert("");
  const ctx = canvas.getContext("2d");
  ctx.font = "30px Comic Sans MS", ctx.fillStyle = "red", ctx.textAlign = "center";
  const shots = {},
    asteroids = {},
    powerups = {},
    explosions = {},
    map = {},
    spacepics = 10,
    space = Math.floor(Math.random() * spacepics),
    powerupTypes = [{
      name: "speed",
      announcement: "Max Speed ⇧",
      cycle: {
        rows: 1,
        columns: 4,
        size: [14, 35],
        i: 0,
        direction: !0
      },
      img: new Image(),
      activate: function (spaceship) {
        spaceship.maxSpeed += 100;
      }
    }, {
      name: "cooldown",
      announcement: "Cooldown ⇩",
      cycle: {
        rows: 1,
        columns: 3,
        size: [17, 17],
        i: 0,
        direction: !0
      },
      img: new Image(),
      activate: function (spaceship) {
        spaceship.cooldown > 0 && (spaceship.cooldownTime -= 1);
      }
    }, {
      name: "range",
      announcement: "Firing Range ⇧",
      cycle: {
        rows: 4,
        columns: 1,
        size: [30, 8],
        i: 0,
        direction: !0
      },
      img: new Image(),
      activate: function (spaceship) {
        spaceship.range += 5;
      }
    }, {
      name: "shield",
      announcement: "Shield",
      cycle: {
        rows: 5,
        columns: 1,
        size: [19, 19],
        i: 0,
        direction: !0
      },
      img: new Image(),
      activate: function (spaceship) {
        spaceship.shield = !0;
      }
    }, {
      name: "nuke",
      announcement: "Nuke",
      cycle: {
        rows: 1,
        columns: 8,
        size: [15, 15],
        i: 0,
        direction: !0
      },
      img: new Image(),
      activate: function (spaceship) {
        for (var i in asteroids) asteroids[i].explode();
        spawnAsteroids(5);
      }
    }];
  powerupTypes.forEach(function (powerup, i, array) {
    array[i].img.src = "asteroids/" + powerup.name + ".png";
  });
  var spaceship,
    explosionImage = new Image();
  function evaluateKeys() {
    $scope.playing ? (map[32] && 0 === spaceship.cooldown && spaceship.shoot(), map[37] && (0 === spaceship.rotation ? spaceship.rotation = 360 : spaceship.rotation -= 3), map[39] && (360 === spaceship.rotation ? spaceship.rotation = 0 : spaceship.rotation += 3), map[38] ? spaceship.speed <= spaceship.maxSpeed && (spaceship.speed += 5) : spaceship.speed > 0 && spaceship.speed--, map[40] && spaceship.speed > 0 && (spaceship.speed -= 2)) : map[32] && ($scope.playing = !0, $scope.score = 0, space = Math.floor(Math.random() * spacepics), $scope.$apply(), spaceship = new Spaceship(), $scope.score = 0, spawnAsteroids(5), autoSpawn());
  }
  function Spaceship() {
    this.width = 50, this.height = 50, this.shield = !1, this.range = 80, this.cannon = {
      x: this.width / 2 - 4.5,
      y: this.height / 2 - .078125 * this.height
    }, this.cooldown = 0, this.cooldownTime = 20, this.position = [canvas.width / 2 - this.width / 2, canvas.height / 2 - this.height / 2], this.img = new Image(), this.img.src = "asteroids/spaceship.png", this.speed = 0, this.maxSpeed = 1e3, this.angle = 0, this.rotation = 0, this.shoot = function () {
      this.cooldown = this.cooldownTime;
      var id = Math.round(1e8 * Math.random());
      shots[id] = new Shot(id, this);
    }, this.move = function () {
      for (var i in this.shield && (ctx.beginPath(), ctx.arc(this.position[0] + this.width / 2, this.position[1] + this.height / 2, 30, 0, 2 * Math.PI), ctx.fillStyle = "rgb(35, 237, 86, 0.5)", ctx.strokeStyle = "rgb(66, 168, 36, 0.8)", ctx.lineWidth = 5, ctx.stroke(), ctx.fill()), asteroids) {
        var asteroid = asteroids[i];
        if (hit(asteroid, this)) {
          if (!this.shield) return gameOver();
          this.shield = !1, asteroid.explode();
        }
      }
      this.angle = this.rotation, this.cooldown > 0 && this.cooldown--, move(this);
    };
  }
  function Shot(id, spaceship) {
    this.id = id, this.position = [spaceship.position[0] + spaceship.cannon.x + spaceship.cannon.x * Math.cos((spaceship.rotation - 90) * Math.PI / 180), spaceship.position[1] + spaceship.cannon.y + spaceship.cannon.y * Math.sin((spaceship.rotation - 90) * Math.PI / 180)], this.width = 9, this.height = 15, this.angle = spaceship.angle, this.rotation = spaceship.rotation, this.speed = spaceship.speed + 500, this.lifespan = spaceship.range, this.img = new Image(), this.img.src = "asteroids/shot.png", this.move = function () {
      this.lifespan--, move(this);
    };
  }
  function Asteroid(id) {
    this.id = id, this.width = 50 * Math.random() + 20, this.height = this.width, this.position = getEntryPosition(this.width, this.height), this.angle = 360 * Math.random(), this.rotation = 360 * Math.random(), this.rotationSpeed = 6 * Math.random() - 3, this.speed = 300 * Math.random() + 2, this.img = new Image(), this.img.src = "asteroids/asteroid" + (Math.round(6 * Math.random()) + 1) + ".png", this.explode = function () {
      return explosions[this.id] = new Explosion(this), delete asteroids[this.id];
    }, this.move = function () {
      for (var i in this.rotation += this.rotationSpeed, this.rotation > 360 ? this.rotation = this.rotation - 360 : this.rotation < 0 && (this.rotation = 360 + this.rotation), shots) {
        var shot = shots[i];
        if (hit(shot, this)) {
          this.explode();
          var points = Math.floor((shot.speed - 500) / 10 + 70 - this.width);
          Math.floor((points + $scope.score) / 100) > Math.floor($scope.score / 100) && spawnPowerup(), $scope.score += points, $scope.$apply(), delete shots[i];
        }
      }
      move(this);
    };
  }
  function Explosion(object) {
    this.position = [object.position[0], object.position[1]], this.width = object.width, this.height = object.height, this.speed = 0, this.angle = 360 * Math.random(), this.cycle = {
      rows: 6,
      columns: 8,
      size: [256, 256],
      i: 0,
      direction: !0
    }, this.lifespan = 47, this.img = explosionImage, this.move = function () {
      this.lifespan--, move(this), this.cycle.direction ? this.cycle.i++ : this.cycle.i--;
    };
  }
  function Powerup(id) {
    this.id = id, this.powerup = powerupTypes[Math.floor(Math.random() * powerupTypes.length)], this.cycle = this.powerup.cycle, this.lifespan = 1e3, this.cycle.size[1] > this.cycle.size[0] ? (this.height = 40, this.width = Math.round(this.height / this.cycle.size[1] * this.cycle.size[0])) : (this.width = 40, this.height = Math.round(this.width / this.cycle.size[0] * this.cycle.size[1])), this.position = getEntryPosition(this.width, this.height), this.img = this.powerup.img, this.angle = 360 * Math.random(), this.speed = 150 * Math.random() + 50;
    var delay = 5;
    this.move = () => this.lifespan <= 0 ? delete powerups[this.id] : hit(spaceship, this) ? ($scope.announce = !0, $scope.announcement = this.powerup.announcement, $scope.$apply(), setTimeout(() => {
      $scope.announce = !1, $scope.$apply();
    }, 1e3), this.powerup.activate(spaceship), delete powerups[this.id]) : (this.lifespan--, move(this), void (delay <= 0 ? (this.cycle.direction ? this.cycle.i++ : this.cycle.i--, delay = 5) : delay--));
  }
  function move(object) {
    if (object.position[0] += object.speed / 100 * Math.cos((object.angle - 90) * Math.PI / 180), object.position[1] += object.speed / 100 * Math.sin((object.angle - 90) * Math.PI / 180), object.position[0] > canvas.width ? object.position[0] = -object.width : object.position[0] < -object.width && (object.position[0] = canvas.width), object.position[1] > canvas.height ? object.position[1] = -object.height : object.position[1] < -object.height && (object.position[1] = canvas.height), ctx.save(), ctx.translate(object.position[0], object.position[1]), ctx.translate(object.width / 2, object.height / 2), ctx.rotate(object.rotation * Math.PI / 180), object.cycle) {
      var column = object.cycle.i % object.cycle.columns,
        row = Math.floor(object.cycle.i / object.cycle.columns);
      ctx.drawImage(object.img, object.cycle.size[0] * column, object.cycle.size[1] * row, object.cycle.size[0], object.cycle.size[1], -object.width / 2, -object.height / 2, object.width, object.height), object.cycle.i <= 0 ? (object.cycle.i = 0, object.cycle.direction = !0) : object.cycle.i >= object.cycle.columns * object.cycle.rows && (object.cycle.i = object.cycle.columns * object.cycle.rows - 1, object.cycle.direction = !1);
    } else ctx.drawImage(object.img, -object.width / 2, -object.height / 2, object.width, object.height);
    ctx.restore();
  }
  function getEntryPosition(width, height) {
    var x,
      gridX = 2 * Math.random(),
      gridY = 2 * Math.random(),
      y = 0;
    return gridX >= 1 ? (x = Math.random() * canvas.width, y = y >= 1 ? 0 - height : canvas.height) : (y = Math.random() * canvas.height, x = gridY >= 1 ? 0 - width : canvas.width), [x, y];
  }
  function hit(object1, object2) {
    return object1.position[0] < object2.position[0] + object2.width && object2.position[0] < object1.position[0] + object1.width && object1.position[1] < object2.position[1] + object2.height && object2.position[1] < object1.position[1] + object1.height;
  }
  function autoSpawn() {
    if (Object.keys(asteroids).length < 200) {
      var id = Math.round(1e8 * Math.random());
      asteroids[id] = new Asteroid(id);
    }
    $scope.playing && setTimeout(function () {
      autoSpawn();
    }, $scope.score < 1e3 ? 1e3 : $scope.score < 2e3 ? 900 : $scope.score < 3e3 ? 800 : $scope.score < 4e3 ? 700 : $scope.score < 5e3 ? 600 : $scope.score < 6e3 ? 500 : $scope.score < 7e3 ? 400 : $scope.score < 8e3 ? 300 : 200);
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
    for (var i in $scope.playing = !1, asteroids) asteroids[i].explode();
    shots = {}, $scope.loggedIn ? $scope.currentUser.highscore.asteroids < $scope.score && ($scope.currentUser.highscore.asteroids = $scope.score, GameSvc.setHighscore("asteroids", $scope.currentUser._id, $scope.score)) : $scope.highscore < $scope.score && ($scope.highscore = $scope.score);
  }
  function resizeCanvas() {
    console.log(window.innerWidth), canvas.width = window.innerWidth, canvas.height = window.innerHeight - (canvas.width <= 768 ? 50 : 105);
  }
  explosionImage.src = "asteroids/explosion.png", window.addEventListener("keydown", function (e) {
    map[e.keyCode || e.which] = !0;
  }, !0), window.addEventListener("keyup", function (e) {
    map[e.keyCode || e.which] = !1;
  }, !0), $scope.highscore = 0, window.addEventListener("resize", resizeCanvas, !1), resizeCanvas(), requestAnimationFrame(function draw() {
    for (var i in ctx.clearRect(0, 0, canvas.width, canvas.height), shots) shots[i].lifespan <= 0 ? delete shots[i] : shots[i].move();
    for (i in asteroids) asteroids[i].move();
    for (i in powerups) powerups[i].move();
    for (i in explosions) explosions[i].lifespan <= 0 ? delete explosions[i] : explosions[i].move();
    if (evaluateKeys(), $scope.playing) spaceship.move();else {
      var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop("0", "rgb(" + Math.floor(256 - 256 * tally / 100) + "," + Math.floor(0 + 256 * tally / 100) + "," + Math.floor(0 + 256 * tally / 100) + ")"), gradient.addColorStop("0.25", "rgb(" + Math.floor(0 + 256 * tally / 100) + "," + Math.floor(256 - 256 * tally / 100) + "," + Math.floor(0 + 256 * tally / 100) + ")"), gradient.addColorStop("0.5", "rgb(" + Math.floor(0 + 256 * tally / 100) + "," + Math.floor(0 + 256 * tally / 100) + "," + Math.floor(256 - 256 * tally / 100) + ")"), gradient.addColorStop("0.75", "rgb(" + Math.floor(0 + 256 * tally / 100) + "," + Math.floor(256 - 256 * tally / 100) + "," + Math.floor(0 + 256 * tally / 100) + ")"), gradient.addColorStop("1.0", "rgb(" + Math.floor(256 - 256 * tally / 100) + "," + Math.floor(0 + 256 * tally / 100) + "," + Math.floor(0 + 256 * tally / 100) + ")"), ctx.fillStyle = gradient, ctx.font = "60px Monoton", ctx.fillText("Asteroids", canvas.width / 2 - ctx.measureText("Asteroids").width / 2, canvas.height / 2), ctx.font = "20px Aldrich", ctx.fillText("Press space to start", canvas.width / 2 - ctx.measureText("Press space to start").width / 2, canvas.height / 2 + 20), ctx.fillText("Designed and developed by Laurent Debacker", canvas.width / 2 - ctx.measureText("Designed and developed by Laurent Debacker").width / 2, canvas.height - 30);
    }
    (tally += direction ? 1 : -1) > 100 ? (tally = 100, direction = !1) : tally < 0 && (tally = 0, direction = !0);
    requestAnimationFrame(draw);
  });
  var tally = 0,
    direction = !0;
  $scope.space = function () {
    return {
      backgroundImage: 'url("asteroids/space' + space + '.jpg")'
    };
  };
}), angular.module("app").controller("BubblesCtrl", function ($scope) {
  var canvas = document.getElementById("bubbles-page"),
    ctx = canvas.getContext("2d"),
    bubbles = [],
    colors = ["#ffc300", "#ff5733", "#c70039", "#900c3e", "#571845"];
  function Bubble() {
    this.lifespan = 0, this.radius = 1, this.expanding = !0, this.speed = Math.round(3 * Math.random()), this.circumference = Math.round(50 * Math.random()) + 5, this.maxRadius = Math.round(200 * Math.random()) + 20, this.x = Math.round(Math.random() * canvas.width), this.y = Math.round(Math.random() * canvas.height), this.vx = Math.random() >= .5 ? 1 : -1, this.vy = Math.random() >= .5 ? 1 : -1;
  }
  requestAnimationFrame(function filterBubbles() {
    bubbles.push(new Bubble()), bubbles = bubbles.filter(function (bubble) {
      return bubble.radius === bubble.maxRadius && (bubble.expanding = !1), bubble.x += bubble.vx * bubble.speed, bubble.y += bubble.vy * bubble.speed, bubble.radius += bubble.expanding ? 1 : -1, bubble.radius > 0;
    }), ctx.clearRect(0, 0, canvas.width, canvas.height), bubbles.forEach(function (bubble) {
      colors[Math.round(colors.length * bubble.radius / bubble.maxRadius)], ctx.beginPath(), ctx.arc(bubble.x, bubble.y, bubble.radius, 0, 2 * Math.PI), ctx.fillStyle = colors[Math.round(colors.length * bubble.radius / bubble.maxRadius)], ctx.fill(), ctx.strokeStyle = colors[colors.length - Math.round(colors.length * bubble.radius / bubble.maxRadius)], ctx.lineWidth = bubble.circumference * bubble.radius / bubble.maxRadius, ctx.stroke();
    }), requestAnimationFrame(filterBubbles);
  }), function () {
    function resizeCanvas() {
      canvas.width = window.innerWidth, canvas.height = window.innerHeight - (canvas.width <= 768 ? 55 : 111);
    }
    window.addEventListener("resize", resizeCanvas, !1), resizeCanvas();
  }();
}), angular.module("app").controller("CharadesCtrl", function ($scope) {
  $scope.selectWord = category => {
    $scope.word = $scope.charades[category][Math.floor(Math.random() * $scope.charades[category].length)];
  };
}), angular.module("app").controller("ContactCtrl", function ($scope, EmailSvc) {
  $scope.options = [{
    name: "Spam",
    text: "I am a spam bot and automatically check the first option I find!"
  }, {
    name: "Opportunity",
    text: "You seem to have the skills I seek, I'd like to talk about some opportunities."
  }, {
    name: "Resume",
    text: "I dig the resume, how did you make it?"
  }, {
    name: "Other",
    text: "Sumtin else!"
  }], $scope.contact = {
    email: "",
    name: "",
    phone: "",
    about: "",
    message: ""
  }, $scope.send = function () {
    $scope.sending = !0, EmailSvc.send({
      email: $scope.contact.email,
      name: $scope.contact.name,
      phone: $scope.contact.phone,
      about: $scope.contact.about,
      message: $scope.contact.message
    }).then(function (response) {
      $scope.sent = !0, console.log("SUCCESS. status=%d, text=%s", response.status, response.text), console.log(response);
    }, function (err) {
      $scope.sending = !1, console.log("FAILED. error=", err);
    });
  };
}), angular.module("app").controller("ExperienceCtrl", function ($scope) {
  $scope.getSkill = function (skillCode) {
    if ($scope.skills) return $scope.skills.find(function (skill) {
      return skill.code === skillCode;
    });
  };
}), angular.module("app").controller("HobbiesCtrl", function ($scope, $window) {
  $scope.hobbySelectorVisible = !1, $.getJSON("https://www.reddit.com/user/belgocanadian/about/.json", function (response) {}), $scope.selectedHobby = $scope.hobbies[0], $scope.selectHobby = function (hobby) {
    $scope.selectedHobby = hobby, $scope.hobbySelectorVisible = !1;
  }, $scope.showHobby = function (value, index, array) {
    return !!value.images && value.images.length > 0;
  };
}), angular.module("app").controller("LemmingsCtrl", function ($scope, GameSvc) {
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
        reverse: !1
      },
      huh: {
        start: [320, 0],
        end: [640, 20],
        columns: 8,
        rows: 1,
        reverse: !0
      },
      fall: {
        start: [0, 80],
        end: [160, 100],
        columns: 4,
        rows: 1,
        reverse: !1
      },
      fly: {
        start: [160, 80],
        end: [480, 110],
        columns: 8,
        rows: 1,
        reverse: !1
      },
      stop: {
        start: [0, 120],
        end: [640, 140],
        columns: 16,
        rows: 1,
        reverse: !1
      },
      climb: {
        start: [0, 160],
        end: [640, 185],
        columns: 16,
        rows: 1,
        reverse: !1
      },
      build: {
        start: [0, 200],
        end: [640, 225],
        columns: 16,
        rows: 1,
        reverse: !1
      },
      punch: {
        start: [0, 240],
        end: [640, 300],
        columns: 16,
        rows: 2,
        reverse: !1
      },
      dig: {
        start: [0, 320],
        end: [320, 345],
        columns: 8,
        rows: 1,
        reverse: !1
      }
    };
  function Lemming(init) {
    this.position = [Math.floor(Math.random() * (canvas.width - 200)) + 100, Math.floor(Math.random() * (canvas.height - 200)) + 100], this.direction = 2 * Math.random() > 1 ? LEFT : RIGHT, this.act = function (action) {
      this.action = actions[action], this.cycle = 0, this.width = (this.action.end[0] - this.action.start[0]) / this.action.columns, this.height = (this.action.end[1] - this.action.start[1] - 20 * (this.action.rows - 1)) / this.action.rows, this.animation = !0;
    }, this.act(init), this.move = function () {
      ctx.save(), ctx.translate(this.position[0], this.position[1]), ctx.translate(this.width / 2, this.height / 2), this.direction === LEFT && ctx.scale(-1, 1);
      var column = this.cycle % this.action.columns,
        row = Math.floor(this.cycle / this.action.columns);
      ctx.drawImage(lemmingsImage, this.width * column + this.action.start[0], (this.height + 20) * row + this.action.start[1], this.width, this.height, 0, 0, 2 * this.width, 2 * this.height), ctx.restore(), this.action.reverse ? this.animation ? (this.cycle++, this.cycle >= this.action.columns * this.action.rows && (this.animation = !this.animation, this.cycle--)) : (this.cycle--, this.cycle < 0 && (this.animation = !this.animation, this.cycle = 0)) : (this.cycle++, this.cycle >= this.action.columns * this.action.rows && (this.cycle = 0));
    };
  }
  function resizeCanvas() {
    canvas.width = window.innerWidth, canvas.height = window.innerHeight - (canvas.width <= 768 ? 50 : 105);
  }
  window.addEventListener("resize", resizeCanvas, !1), resizeCanvas(), Object.keys(actions).forEach(function (action) {
    lemmings[Math.round(1e8 * Math.random())] = new Lemming(action);
  });
  let hatch = new function () {
    this.position = [20, 20], this.action = {
      start: [0, 0],
      end: [82, 500],
      columns: 1,
      rows: 10
    }, this.width = (this.action.end[0] - this.action.start[0]) / this.action.columns, this.height = (this.action.end[1] - this.action.start[1]) / this.action.rows, this.cycle = 0, this.open = function () {
      var column, row;
      ctx.save(), ctx.translate(this.position[0], this.position[1]), ctx.translate(this.width / 2, this.height / 2), started ? (column = this.cycle % this.action.columns, row = Math.floor(this.cycle / this.action.columns), this.cycle < 9 && this.cycle++) : (column = 0, row = 0), ctx.drawImage(decorImage, this.width * column + this.action.start[0], this.height * row + this.action.start[1] - 1, this.width, this.height, 0, 0, 2 * this.width, 2 * this.height), ctx.restore();
    };
  }();
  !function draw() {
    if (ctx.clearRect(0, 0, canvas.width, canvas.height), started) for (var i in lemmings) lemmings[i].move();else ctx.beginPath(), ctx.font = "40px Monoton", ctx.lineWidth = "10", ctx.strokeStyle = "blue", ctx.rect(15, canvas.height - 45, ctx.measureText("Start").width + 20, ctx.measureText("Start").height + canvas.height - 45), ctx.fill(), ctx.fillText("Start", 20, canvas.height - 50);
    hatch.open(), started = !0, setTimeout(function () {
      draw();
    }, 150);
  }();
}), angular.module("app").controller("ListsCtrl", function ($scope, $location, CategoriesSvc) {
  $scope.showCategory = !0, $scope.init = function () {
    CategoriesSvc.getCategories().then(function (response) {
      for (var i in $scope.categories = response.data, $scope.tasks = [], $scope.categories) for (var j in $scope.categories[i].tasks) $scope.tasks.push({
        category: $scope.categories[i].name,
        task: $scope.categories[i].tasks[j].name
      });
    });
  }, $scope.selectCategory = function (category) {
    for (var i in $scope.selectedCategory = category, $scope.selectedTasks = [], $scope.selectableTasks = [], $scope.selectedCategory.tasks) $scope.selectableTasks.push($scope.selectedCategory.tasks[i]);
    $scope.showCategory = !1, $scope.enteredCategory = "";
  }, $scope.newCategory = function (category) {
    for (var found = !1, i = 0; i < $scope.categories.length; i++) $scope.categories[i].name === category && ($scope.selectCategory($scope.categories[i]), found = !0);
    found || CategoriesSvc.addCategory({
      category
    }).then(function (category) {
      $scope.init(), $scope.selectCategory(category);
    }), $scope.enteredCategory = "";
  }, $scope.newTask = function (task) {
    var found = !1;
    for (var i in $scope.selectedCategory.tasks) $scope.selectedCategory.tasks[i].name === task && (found = !0, $scope.selectTask($scope.selectedCategory.tasks[i]));
    found || CategoriesSvc.addTask($scope.selectedCategory.name, {
      task
    }).then(function () {
      $scope.selectedCategory.tasks.push({
        name: task
      }), $scope.addTask($scope.selectedTasks, $scope.selectedCategory.tasks[$scope.selectedCategory.tasks.length - 1]);
    }), $scope.enteredTask = "";
  }, $scope.selectTask = function (task) {
    $scope.addTask($scope.selectedTasks, task), $scope.removeTask($scope.selectableTasks, task), $scope.enteredTask = "";
  }, $scope.unselectTask = function (task) {
    $scope.addTask($scope.selectableTasks, task), $scope.removeTask($scope.selectedTasks, task);
  }, $scope.addTask = function (taskList, task) {
    taskList.push(task);
  }, $scope.removeTask = function (taskList, task) {
    taskList.splice(taskList.indexOf(task), 1);
  }, $scope.startPrioritizing = function () {
    CategoriesSvc.setPriorityList($scope.selectedTasks), $location.path("/prioritize");
  }, $scope.getQuestions = function () {
    if (!$scope.selectedTasks) return "";
    for (var counter = 0, i = $scope.selectedTasks.length - 1; i > 0; i--) counter += i;
    return counter;
  };
}), angular.module("app").controller("LoginCtrl", function ($scope, $location, UserSvc) {
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  function startUI() {
    ui.start("#firebaseui-auth-container", {
      callbacks: {
        signInSuccess: function (currentUser, credential, redirectUrl) {
          return firebase.auth().currentUser.getIdToken(!0).then(function (idToken) {
            UserSvc.authenticate({
              displayName: currentUser.displayName,
              email: currentUser.email,
              photoURL: currentUser.photoURL,
              emailVerified: currentUser.emailVerified,
              idToken
            }).then(function (response) {
              $scope.$emit("login", response.data), $("#modal-login").modal("hide");
            }, function () {
              $scope.$emit("popup", {
                message: "Login Failed",
                type: "alert-danger"
              });
            });
          }).catch(function (error) {
            console.error(error);
          }), !1;
        },
        signInFailure: function (error) {
          if ("firebaseui/anonymous-upgrade-merge-conflict" != error.code) return Promise.resolve();
          var cred = error.credential;
          return firebase.auth().signInWithCredential(cred);
        },
        uiShown: function () {
          document.getElementById("loader").style.display = "none";
        }
      },
      signInSuccessUrl: "/home",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.FacebookAuthProvider.PROVIDER_ID],
      signInFlow: "popup"
    });
  }
  $scope.$on("logout", function (event) {
    ui.reset(), startUI();
  }), startUI();
}), angular.module("app").controller("PostsCtrl", function ($scope, $filter, PostsSvc) {
  $scope.addPost = function () {
    $scope.postBody && PostsSvc.create({
      body: $scope.postBody
    }).then(function (post) {
      $scope.postBody = null;
    });
  }, PostsSvc.fetch().then(function (response) {
    $scope.posts = response.data;
  }), $scope.$on("ws:new_post", function (_, post) {
    $scope.$apply(function () {
      PostsSvc.getPost(post).then(function (response) {
        $scope.posts.unshift(response.data);
      });
    });
  });
}), angular.module("app").controller("ProfileCtrl", function ($scope, $location, UserSvc) {
  const countries = [{
    name: "Andorra",
    flag: "flag-ad",
    tidbit: ""
  }, {
    name: "United Arab Emirates",
    flag: "flag-ae"
  }, {
    name: "Afghanistan",
    flag: "flag-af"
  }, {
    name: "Antigua and Barbuda",
    flag: "flag-ag"
  }, {
    name: "Anguilla",
    flag: "flag-ai"
  }, {
    name: "Albania",
    flag: "flag-al"
  }, {
    name: "Armenia",
    flag: "flag-am"
  }, {
    name: "Angola",
    flag: "flag-ao"
  }, {
    name: "Antarctica",
    flag: "flag-aq"
  }, {
    name: "Argentina",
    flag: "flag-ar"
  }, {
    name: "American Somoa",
    flag: "flag-as"
  }, {
    name: "Austria",
    flag: "flag-at"
  }, {
    name: "Australia",
    flag: "flag-au"
  }, {
    name: "Aruba",
    flag: "flag-aw"
  }, {
    name: "Åland Islands",
    flag: "flag-ax"
  }, {
    name: "Azerbaijan",
    flag: "flag-az"
  }, {
    name: "Bosnia and Herzegovina",
    flag: "flag-ba"
  }, {
    name: "Barbados",
    flag: "flag-bb"
  }, {
    name: "Bangladesh",
    flag: "flag-bd"
  }, {
    name: "Belgium",
    flag: "flag-be"
  }, {
    name: "Burkina Faso",
    flag: "flag-bf"
  }, {
    name: "Bulgaria",
    flag: "flag-bg"
  }, {
    name: "Bahrain",
    flag: "flag-bh"
  }, {
    name: "Burundi",
    flag: "flag-bi"
  }, {
    name: "Benin",
    flag: "flag-bj"
  }, {
    name: "Saint Barthélemy",
    flag: "flag-bl"
  }, {
    name: "Bermuda",
    flag: "flag-bm"
  }, {
    name: "Brunei ",
    flag: "flag-bn"
  }, {
    name: "Bolivia, Plurinational State of",
    flag: "flag-bo"
  }, {
    name: "Bonaire, Sint Eustatius and Saba",
    flag: "flag-bq"
  }, {
    name: "Brazil",
    flag: "flag-br"
  }, {
    name: "Bahamas",
    flag: "flag-bs"
  }, {
    name: "Bhutan",
    flag: "flag-bt"
  }, {
    name: "Bouvet Island",
    flag: "flag-bv"
  }, {
    name: "Botswana",
    flag: "flag-bw"
  }, {
    name: "Belarus",
    flag: "flag-by"
  }, {
    name: "Belize",
    flag: "flag-bz"
  }, {
    name: "Canada",
    flag: "flag-ca"
  }, {
    name: "Cocos (Keeling) Islands",
    flag: "flag-cc"
  }, {
    name: "Congo, the Democratic Republic of the",
    flag: "flag-cd"
  }, {
    name: "Central African Republic",
    flag: "flag-cf"
  }, {
    name: "Congo",
    flag: "flag-cg"
  }, {
    name: "Switzerland",
    flag: "flag-ch"
  }, {
    name: "Côte d'Ivoire",
    flag: "flag-ci"
  }, {
    name: "Cook Islands",
    flag: "flag-ck"
  }, {
    name: "Chile",
    flag: "flag-cl"
  }, {
    name: "Cameroon",
    flag: "flag-cm"
  }, {
    name: "China",
    flag: "flag-cn"
  }, {
    name: "Colombia",
    flag: "flag-co"
  }, {
    name: "Costa Rica",
    flag: "flag-cr"
  }, {
    name: "Cuba",
    flag: "flag-cu"
  }, {
    name: "Cabo Verde",
    flag: "flag-cv"
  }, {
    name: "Curaçao",
    flag: "flag-cw"
  }, {
    name: "Christmas Island",
    flag: "flag-cx"
  }, {
    name: "Cyprus",
    flag: "flag-cy"
  }, {
    name: "Czech Republic",
    flag: "flag-cz"
  }, {
    name: "Germany",
    flag: "flag-de"
  }, {
    name: "Djibouti",
    flag: "flag-dj"
  }, {
    name: "Denmark",
    flag: "flag-dk"
  }, {
    name: "Dominica",
    flag: "flag-dm"
  }, {
    name: "Dominican Republic",
    flag: "flag-do"
  }, {
    name: "Algeria",
    flag: "flag-dz"
  }, {
    name: "Ecuador",
    flag: "flag-ec"
  }, {
    name: "Estonia",
    flag: "flag-ee"
  }, {
    name: "Egypt",
    flag: "flag-eg"
  }, {
    name: "Western Sahara",
    flag: "flag-eh"
  }, {
    name: "Eritrea",
    flag: "flag-er"
  }, {
    name: "Spain",
    flag: "flag-es"
  }, {
    name: "Ethiopia",
    flag: "flag-et"
  }, {
    name: "Finland",
    flag: "flag-fi"
  }, {
    name: "Fiji",
    flag: "flag-fj"
  }, {
    name: "Falkland Islands (Malvinas)",
    flag: "flag-fk"
  }, {
    name: "Micronesia, Federated States of",
    flag: "flag-fm"
  }, {
    name: "Faroe Islands",
    flag: "flag-fo"
  }, {
    name: "France",
    flag: "flag-fr"
  }, {
    name: "Gabon",
    flag: "flag-ga"
  }, {
    name: "United Kingdom of Great Britain and Northern Ireland",
    flag: "flag-gb"
  }, {
    name: "Grenada",
    flag: "flag-gd"
  }, {
    name: "Georgia",
    flag: "flag-ge"
  }, {
    name: "French Guiana",
    flag: "flag-gf"
  }, {
    name: "Guernsey",
    flag: "flag-gg"
  }, {
    name: "Ghana",
    flag: "flag-gh"
  }, {
    name: "Gibraltar",
    flag: "flag-gi"
  }, {
    name: "Greenland",
    flag: "flag-gl"
  }, {
    name: "Gambia",
    flag: "flag-gm"
  }, {
    name: "Guinea",
    flag: "flag-gn"
  }, {
    name: "Guadeloupe",
    flag: "flag-gp"
  }, {
    name: "Equatorial Guinea",
    flag: "flag-gq"
  }, {
    name: "Greece",
    flag: "flag-gr"
  }, {
    name: "South Georgia and the South Sandwich Islands",
    flag: "flag-gs"
  }, {
    name: "Guatemala",
    flag: "flag-gt"
  }, {
    name: "Guam",
    flag: "flag-gu"
  }, {
    name: "Guinea-Bissau",
    flag: "flag-gw"
  }, {
    name: "Guyana",
    flag: "flag-gy"
  }, {
    name: "Hong Kong",
    flag: "flag-hk"
  }, {
    name: "Heard Island and McDonald Islands",
    flag: "flag-hm"
  }, {
    name: "Honduras",
    flag: "flag-hn"
  }, {
    name: "Croatia",
    flag: "flag-hr"
  }, {
    name: "Haiti",
    flag: "flag-ht"
  }, {
    name: "Hungary",
    flag: "flag-hu"
  }, {
    name: "Indonesia",
    flag: "flag-id"
  }, {
    name: "Ireland",
    flag: "flag-ie"
  }, {
    name: "Israel",
    flag: "flag-il"
  }, {
    name: "Isle of Man",
    flag: "flag-im"
  }, {
    name: "India",
    flag: "flag-in"
  }, {
    name: "British Indian Ocean Territory",
    flag: "flag-io"
  }, {
    name: "Iraq",
    flag: "flag-iq"
  }, {
    name: "Iran, Islamic Republic of",
    flag: "flag-ir"
  }, {
    name: "Iceland",
    flag: "flag-is"
  }, {
    name: "Italy",
    flag: "flag-it"
  }, {
    name: "Jersey",
    flag: "flag-je"
  }, {
    name: "Jamaica",
    flag: "flag-jm"
  }, {
    name: "Jordan",
    flag: "flag-jo"
  }, {
    name: "Japan",
    flag: "flag-jp"
  }, {
    name: "Kenya",
    flag: "flag-ke"
  }, {
    name: "Kyrgyzstan",
    flag: "flag-kg"
  }, {
    name: "Cambodia",
    flag: "flag-kh"
  }, {
    name: "Kiribati",
    flag: "flag-ki"
  }, {
    name: "Comoros",
    flag: "flag-km"
  }, {
    name: "Saint Kitts and Nevis",
    flag: "flag-kn"
  }, {
    name: "Korea, Democratic People's Republic of",
    flag: "flag-kp"
  }, {
    name: "Korea, Republic of",
    flag: "flag-kr"
  }, {
    name: "Kuwait",
    flag: "flag-kw"
  }, {
    name: "Cayman Islands",
    flag: "flag-ky"
  }, {
    name: "Kazakhstan",
    flag: "flag-kz"
  }, {
    name: "Lao People's Democratic Republic",
    flag: "flag-la"
  }, {
    name: "Lebanon",
    flag: "flag-lb"
  }, {
    name: "Saint Lucia",
    flag: "flag-lc"
  }, {
    name: "Liechtenstein",
    flag: "flag-li"
  }, {
    name: "Sri Lanka",
    flag: "flag-lk"
  }, {
    name: "Liberia",
    flag: "flag-lr"
  }, {
    name: "Lesotho",
    flag: "flag-ls"
  }, {
    name: "Lithuania",
    flag: "flag-lt"
  }, {
    name: "Luxembourg",
    flag: "flag-lu"
  }, {
    name: "Latvia",
    flag: "flag-lv"
  }, {
    name: "Libya",
    flag: "flag-ly"
  }, {
    name: "Morocco",
    flag: "flag-ma"
  }, {
    name: "Monaco",
    flag: "flag-mc"
  }, {
    name: "Moldova, Republic of",
    flag: "flag-md"
  }, {
    name: "Montenegro",
    flag: "flag-me"
  }, {
    name: "Saint Martin (French part)",
    flag: "flag-mf"
  }, {
    name: "Madagascar",
    flag: "flag-mg"
  }, {
    name: "Marshall Islands",
    flag: "flag-mh"
  }, {
    name: "Macedonia, the former Yugoslav Republic of",
    flag: "flag-mk"
  }, {
    name: "Mali",
    flag: "flag-ml"
  }, {
    name: "Myanmar",
    flag: "flag-mm"
  }, {
    name: "Mongolia",
    flag: "flag-mn"
  }, {
    name: "Macao",
    flag: "flag-mo"
  }, {
    name: "Northern Mariana Islands",
    flag: "flag-mp"
  }, {
    name: "Martinique",
    flag: "flag-mq"
  }, {
    name: "Mauritania",
    flag: "flag-mr"
  }, {
    name: "Montserrat",
    flag: "flag-ms"
  }, {
    name: "Malta",
    flag: "flag-mt"
  }, {
    name: "Mauritius",
    flag: "flag-mu"
  }, {
    name: "Maldives",
    flag: "flag-mv"
  }, {
    name: "Malawi",
    flag: "flag-mw"
  }, {
    name: "Mexico",
    flag: "flag-mx"
  }, {
    name: "Malaysia",
    flag: "flag-my"
  }, {
    name: "Mozambique",
    flag: "flag-mz"
  }, {
    name: "Namibia",
    flag: "flag-na"
  }, {
    name: "New Caledonia",
    flag: "flag-nc"
  }, {
    name: "Niger",
    flag: "flag-ne"
  }, {
    name: "Norfolk Island",
    flag: "flag-nf"
  }, {
    name: "Nigeria",
    flag: "flag-ng"
  }, {
    name: "Nicaragua",
    flag: "flag-ni"
  }, {
    name: "Netherlands",
    flag: "flag-nl"
  }, {
    name: "Norway",
    flag: "flag-no"
  }, {
    name: "Nepal",
    flag: "flag-np"
  }, {
    name: "Nauru",
    flag: "flag-nr"
  }, {
    name: "Niue",
    flag: "flag-nu"
  }, {
    name: "New Zealand",
    flag: "flag-nz"
  }, {
    name: "Oman",
    flag: "flag-om"
  }, {
    name: "Panama",
    flag: "flag-pa"
  }, {
    name: "Peru",
    flag: "flag-pe"
  }, {
    name: "French Polynesia",
    flag: "flag-pf"
  }, {
    name: "Papua New Guinea",
    flag: "flag-pg"
  }, {
    name: "Philippines",
    flag: "flag-ph"
  }, {
    name: "Pakistan",
    flag: "flag-pk"
  }, {
    name: "Poland",
    flag: "flag-pl"
  }, {
    name: "Saint Pierre and Miquelon",
    flag: "flag-pm"
  }, {
    name: "Pitcairn",
    flag: "flag-pn"
  }, {
    name: "Puerto Rico",
    flag: "flag-pr"
  }, {
    name: "Palestine, State of",
    flag: "flag-ps"
  }, {
    name: "Portugal",
    flag: "flag-pt"
  }, {
    name: "Palau",
    flag: "flag-pw"
  }, {
    name: "Paraguay",
    flag: "flag-py"
  }, {
    name: "Qatar",
    flag: "flag-qa"
  }, {
    name: "Réunion",
    flag: "flag-re"
  }, {
    name: "Romania",
    flag: "flag-ro"
  }, {
    name: "Serbia",
    flag: "flag-rs"
  }, {
    name: "Russian Federation",
    flag: "flag-ru"
  }, {
    name: "Rwanda",
    flag: "flag-rw"
  }, {
    name: "Saudi Arabia",
    flag: "flag-sa"
  }, {
    name: "Solomon Islands",
    flag: "flag-sb"
  }, {
    name: "Seychelles",
    flag: "flag-sc"
  }, {
    name: "Sudan",
    flag: "flag-sd"
  }, {
    name: "Sweden",
    flag: "flag-se"
  }, {
    name: "Singapore",
    flag: "flag-sg"
  }, {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    flag: "flag-sh"
  }, {
    name: "Slovenia",
    flag: "flag-si"
  }, {
    name: "Svalbard and Jan Mayen",
    flag: "flag-sj"
  }, {
    name: "Slovakia",
    flag: "flag-sk"
  }, {
    name: "Sierra Leone",
    flag: "flag-sl"
  }, {
    name: "San Marino",
    flag: "flag-sm"
  }, {
    name: "Senegal",
    flag: "flag-sn"
  }, {
    name: "Somalia",
    flag: "flag-so"
  }, {
    name: "Suriname",
    flag: "flag-sr"
  }, {
    name: "South Sudan",
    flag: "flag-ss"
  }, {
    name: "Sao Tome and Principe",
    flag: "flag-st"
  }, {
    name: "El Salvador",
    flag: "flag-sv"
  }, {
    name: "Sint Maarten (Dutch part)",
    flag: "flag-sx"
  }, {
    name: "Syrian Arab Republic",
    flag: "flag-sy"
  }, {
    name: "Swaziland",
    flag: "flag-sz"
  }, {
    name: "Turks and Caicos Islands",
    flag: "flag-tc"
  }, {
    name: "Chad",
    flag: "flag-td"
  }, {
    name: "French Southern Territories",
    flag: "flag-tf"
  }, {
    name: "Togo",
    flag: "flag-tg"
  }, {
    name: "Thailand",
    flag: "flag-th"
  }, {
    name: "Tajikistan",
    flag: "flag-tj"
  }, {
    name: "Tokelau",
    flag: "flag-tk"
  }, {
    name: "Timor-Leste",
    flag: "flag-tl"
  }, {
    name: "Turkmenistan",
    flag: "flag-tm"
  }, {
    name: "Tunisia",
    flag: "flag-tn"
  }, {
    name: "Tonga",
    flag: "flag-to"
  }, {
    name: "Turkey",
    flag: "flag-tr"
  }, {
    name: "Trinidad and Tobago",
    flag: "flag-tt"
  }, {
    name: "Tuvalu",
    flag: "flag-tv"
  }, {
    name: "Taiwan, Province of China",
    flag: "flag-tw"
  }, {
    name: "Tanzania, United Republic of",
    flag: "flag-tz"
  }, {
    name: "Ukraine",
    flag: "flag-ua"
  }, {
    name: "Uganda",
    flag: "flag-ug"
  }, {
    name: "United States Minor Outlying Islands",
    flag: "flag-um"
  }, {
    name: "United States of America",
    flag: "flag-us"
  }, {
    name: "Uruguay",
    flag: "flag-uy"
  }, {
    name: "Uzbekistan",
    flag: "flag-uz"
  }, {
    name: "Holy See",
    flag: "flag-va"
  }, {
    name: "Saint Vincent and the Grenadines",
    flag: "flag-vc"
  }, {
    name: "Venezuela, Bolivarian Republic of",
    flag: "flag-ve"
  }, {
    name: "Virgin Islands, British",
    flag: "flag-vg"
  }, {
    name: "Virgin Islands, U.S.",
    flag: "flag-vi"
  }, {
    name: "Viet Nam",
    flag: "flag-vn"
  }, {
    name: "Vanuatu",
    flag: "flag-vu"
  }, {
    name: "Wallis and Futuna",
    flag: "flag-wf"
  }, {
    name: "Samoa",
    flag: "flag-ws"
  }, {
    name: "Yemen",
    flag: "flag-ye"
  }, {
    name: "Mayotte",
    flag: "flag-yt"
  }, {
    name: "South Africa",
    flag: "flag-za"
  }, {
    name: "Zambia",
    flag: "flag-zm"
  }, {
    name: "Zimbabwe",
    flag: "flag-zw"
  }];
  $scope.dateOptions = {
    maxDate: new Date(),
    minDate: new Date(1900, 1, 1),
    initDate: new Date(2e3, 1, 1),
    datepickerMode: "year"
  }, $scope.usernameToggle = !0, $scope.passwordToggle = !0, $scope.toggleUsername = function () {
    $scope.usernameToggle = !$scope.usernameToggle, $scope.newUsername = $scope.currentUser.username;
  }, $scope.togglePassword = function () {
    $scope.newPassword = null, $scope.confirmPassword = null, $scope.passwordToggle = !$scope.passwordToggle;
  }, $scope.checkPassword = function (password) {
    if (password) {
      var user = $scope.currentUser._id;
      UserSvc.checkPassword(user, password).then(function () {
        $scope.togglePassword();
      }, function () {
        var originalBg = $(".password").css("backgroundColor");
        $(".password").animate({
          backgroundColor: "#FFB6C1"
        }, 200).animate({
          backgroundColor: originalBg
        }, 200);
      });
    }
  }, $scope.changePassword = function (oldPassword, newPassword, confirmPassword) {
    if (newPassword) if (newPassword == confirmPassword) {
      var user = $scope.currentUser._id;
      UserSvc.changePassword(user, oldPassword, newPassword).then(function () {
        $scope.$emit("popup", {
          message: "Password Changed",
          type: "alert-success"
        }), $scope.oldPassword = null, $scope.togglePassword();
      }, function () {
        $scope.$emit("popup", {
          message: "Password Change Failed",
          type: "alert-danger"
        });
      });
    } else {
      var originalBg = $(".password").css("backgroundColor");
      $(".password").animate({
        backgroundColor: "#FFB6C1"
      }, 200).animate({
        backgroundColor: originalBg
      }, 200);
    }
  }, $scope.changeUsername = function (username) {
    $scope.$emit("loading"), UserSvc.changeUsername($scope.currentUser._id, username).then(function (response) {
      $scope.$emit("update", response.data);
    }, function () {
      $scope.$emit("popup", {
        message: username + " already in use",
        type: "alert-danger"
      });
    });
  }, $scope.updateUser = function () {
    $scope.$emit("loading"), UserSvc.updateUser({
      ...$scope.currentUser,
      flags: $scope.userFlags.map(({
        flag
      }) => flag)
    }).then(function (response) {
      $scope.$emit("update", response.data);
    });
  }, $scope.loadCountries = function ($query) {
    return countries.filter(function (country) {
      return -1 != country.name.toLowerCase().indexOf($query.toLowerCase());
    });
  }, $scope.$watch("currentUser", () => {
    $scope.userFlags = $scope.currentUser?.flags ? countries.filter(function (country) {
      return $scope.currentUser.flags.includes(country.flag);
    }) : [];
  });
}), angular.module("app").controller("SkillsCtrl", function ($scope, $window) {
  $scope.selectedSkill = 0, $scope.skillsVisible = !1, $scope.projects = [], $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"], $scope.data = [300, 500, 100], $.getJSON("/experience.json", function (data) {
    $scope.projects = data.reduce((projects, employer) => employer.projects ? employer.projects.concat(projects) : projects, {});
  }), $scope.filteredProjects = () => $scope.projects.filter(project => project.skills && project.skills.includes($scope.selectedSkill.code)), $.getJSON("/skills.json", function (data) {
    const skills = data.filter(skill => skill.enabled);
    $scope.categories = skills.reduce(function (categories, skill) {
      return categories[skill.category] ? categories[skill.category].push(skill) : categories[skill.category] = [skill], categories;
    }, {}), $scope.setSelectedSkill = function (skill) {
      $scope.selectedSkill = skill, $scope.selectedSkill.chartOptions = {
        cutoutPercentage: 80,
        circumference: 2 * Math.PI,
        maintainAspectRatio: !0,
        tooltips: {
          enabled: !1
        }
      }, $scope.selectedSkill.chartStyle = {
        "background-image": "url(/skills/" + $scope.selectedSkill.image + ")",
        "background-repeat": "no-repeat",
        "background-size": "60%",
        "background-position": "50% 50%"
      };
    }, $scope.setSelectedSkill($scope.skills[0]), $scope.$apply();
  });
}), angular.module("app").controller("TenThingsCtrl", function ($scope, $sce, $location, TenThingsSvc) {
  let page = 1;
  $scope.lists = [], $scope.search = "", $scope.newItem = {}, $scope.languageFilter = {}, $scope.categoryFilter = {}, $scope.selectedList = void 0, $scope.selectedLanguage = "EN", $scope.highlightedListIds = [], $scope.listIdsToDelete = [], $scope.confirmed = !1;
  let exhausted = !1;
  const objectCategories = ["Art", "Culture", "Food and Drink", "Nature", "Objects", "Religion", "Society", "Sports", "Transportation"];
  $scope.blurbTypes = [{
    api: "movies",
    categories: ["Movies"],
    text: "Get movie posters",
    adminOnly: !1
  }, {
    api: "tv",
    categories: ["Television"],
    text: "Get tv posters",
    adminOnly: !1
  }, {
    api: "actors",
    categories: ["Movies", "Television"],
    text: "Get actor pics",
    adminOnly: !1
  }, {
    api: "books",
    categories: ["Literature"],
    text: "Get book covers",
    adminOnly: !1
  }, {
    api: "musicvideos",
    categories: ["Music"],
    text: "Get music videos",
    adminOnly: !0
  }, {
    api: "unsplash",
    categories: objectCategories,
    text: "Get Unsplash pics",
    adminOnly: !1
  }, {
    api: "pexels",
    categories: objectCategories,
    text: "Get Pexels pics",
    adminOnly: !1
  }, {
    api: "wiki",
    categories: objectCategories,
    text: "Get Wiki pics",
    adminOnly: !1
  }], $scope.haveCommonItems = (arr1, arr2) => arr1?.some(item => arr2.includes(item)), $scope.keyDown = e => {
    if (9 === e.keyCode) $("#new-blurb").is(":focus") ? $scope.createValue() : $("#new-value").is(":focus") && setTimeout(() => {
      $("#new-blurb").trigger("focus");
    });
  }, $scope.addList = () => {
    $location.search("list", "new"), $scope.selectedList = {
      name: "",
      creator: $scope.currentUser._id,
      date: new Date(),
      values: [],
      answers: 0,
      isDynamic: !0,
      category: "",
      categories: [],
      language: $scope.selectedLanguage
    };
  }, $scope.setSelectedItem = item => {
    $scope.selectedItem = item;
  }, $scope.setSelectedList = list => {
    $scope.search = $location.search().search, list ? "new" === list._id ? $scope.addList() : TenThingsSvc.getList(list).then(({
      data
    }) => {
      $scope.selectedList = data, $location.search("list", data._id), $scope.selectedLanguage = $scope.selectedList.language, $scope.readOnly = !$scope.selectedList || !$scope.currentUser.admin && $scope.selectedList.creator._id !== $scope.currentUser._id && $scope.selectedList._id;
    }).catch(err => console.error(err)) : ($scope.selectedList = void 0, $location.search("list", null));
  };
  $scope.searchLists = async viewValue => {
    if (viewValue.length >= 3) {
      const {
        data
      } = await TenThingsSvc.searchLists(viewValue);
      return data;
    }
    return [];
  }, $scope.highlightedSearchText = text => {
    if ($scope.search) {
      const regex = new RegExp(`(${$scope.search})`, "gi");
      return text.replace(regex, "<span class='highlight'>$1</span>");
    }
    return text;
  }, $scope.valueOrder = {
    field: "value",
    direction: !1
  }, $scope.order = {
    field: $location.search().sort || "date",
    direction: !$location.search().order || "desc" === $location.search().order
  }, $scope.orderBy = field => {
    $scope.order.field === field ? $scope.order.direction = !$scope.order.direction : $scope.order = {
      field,
      direction: !1
    }, $location.search("sort", field), $location.search("order", $scope.order.direction ? "desc" : "asc"), $scope.getLists();
  }, $scope.getMoreLists = async () => {
    0 !== $scope.lists.length && getLists().then(lists => {
      $scope.lists = $scope.lists.concat(lists);
    });
  }, $scope.getLists = () => {
    $scope.lists = [], $scope.highlightedListIds = [], page = 1, exhausted = !1, getLists().then(lists => {
      $scope.lists = lists, $scope.$apply();
    });
  }, $scope.setLanguageFilter = language => {
    $scope.languageFilter[language.code] ? $scope.languageFilter[language.code] = !$scope.languageFilter[language.code] : $scope.languageFilter[language.code] = !0, $scope.getLists();
  }, $scope.setCategoryFilter = category => {
    $scope.categoryFilter[category] ? $scope.categoryFilter[category] = !$scope.categoryFilter[category] : $scope.categoryFilter[category] = !0, $scope.getLists();
  }, $scope.toggleCategoryFilter = () => {
    const categories = Object.keys($scope.categoryFilter),
      allCategories = categories.length === categories.filter(category => $scope.categoryFilter[category]).length;
    $scope.categoryFilter = $scope.categories.reduce((filter, category) => (filter[category] = !allCategories, filter), {}), $scope.getLists();
  };
  const getLists = async () => {
    if ($scope.loading || exhausted) return [];
    $scope.loading = !0, $location.search().search !== $scope.search && $location.search("search", $scope.search ? $scope.search : null);
    const {
      data
    } = await TenThingsSvc.getLists({
      page,
      sortBy: $scope.order.field,
      orderBy: $scope.order.direction ? -1 : 1,
      limit: 100,
      search: $scope.search,
      languages: Object.keys($scope.languageFilter).filter(language => $scope.languageFilter[language]),
      categories: Object.keys($scope.categoryFilter).filter(category => $scope.categoryFilter[category])
    });
    return $scope.count = data.count, data.result.length < 100 ? exhausted = !0 : page = data.nextPage, $scope.loading = !1, console.log(data.result.slice(0, 10)), data.result;
  };
  $scope.getListName = listId => $scope.lists.find(({
    _id
  }) => _id === listId)?.name, $scope.updateValue = async item => {
    if (item.value) {
      const updatedItemResponse = await TenThingsSvc.updateListValue($scope.selectedList, item);
      item.blurbType = updatedItemResponse.data.blurbType, $scope.$apply();
    } else $scope.deleteValue(item);
  }, $scope.createValue = async () => {
    if ($scope.newItem.value) {
      if ($scope.hasDuplicate()) return alert(`${$scope.newItem.value} is already in the list`);
      if ($scope.selectedList._id) {
        const createdItemResponse = await TenThingsSvc.createListValue($scope.selectedList, $scope.newItem);
        $scope.selectedList.values.push(createdItemResponse.data);
      } else $scope.selectedList.values.push({
        ...$scope.newItem
      }), $scope.selectedList.values.length >= 10 && (await $scope.upsertList($scope.selectedList));
      $scope.newItem.value = "", $scope.newItem.blurb = "", setTimeout(() => {
        $("#new-value").trigger("focus");
      }), $scope.$apply();
    }
  }, $scope.deleteValue = item => {
    TenThingsSvc.deleteListValue($scope.selectedList, item).then(response => {
      $scope.selectedList.values = $scope.selectedList.values.filter(value => value._id !== item._id);
    });
  }, $scope.updateList = (list, updates) => {
    list._id && "new" !== list._id && TenThingsSvc.updateList({
      ...updates,
      _id: list._id
    }).then(({
      data
    }) => {
      $scope.saving = !1;
      const listIndex = $scope.lists.findIndex(list => list._id === data._id);
      $scope.lists[listIndex] = data;
    }, console.error);
  }, $scope.upsertList = (list, updates) => {
    if ($scope.saving = !0, list.values.length >= 10 && list.name && list.categories.length > 0) {
      if (list._id && "new" !== list._id) {
        let changes = updates || list;
        delete changes._id, TenThingsSvc.updateList({
          ...changes,
          _id: list._id
        }).then(({
          data
        }) => {
          $scope.saving = !1;
          const listIndex = $scope.lists.findIndex(list => list._id === data._id);
          $scope.lists[listIndex] = data, $scope.selectedList = data;
        }, console.error);
      } else TenThingsSvc.createList($scope.currentUser, $scope.selectedList).then(({
        data
      }) => {
        "new" === $location.search().list && $location.search("list", data._id), $scope.selectedList._id = data._id, $scope.getLists(), $scope.saving = !1;
      }, console.error);
    } else Object.assign($scope.selectedList, updates);
  }, $scope.deleteList = list => {
    list._id ? ($scope.confirmed = !1, $scope.highlightedListIds.includes(list._id) ? $scope.listIdsToDelete = $scope.highlightedListIds : $scope.listIdsToDelete = [list._id], $("#modal-delete-lists").modal("show")) : $scope.selectedList = null;
  }, $scope.deleteLists = () => {
    $scope.listIdsToDelete = $scope.highlightedListIds, $scope.confirmed = !1, $("#modal-delete-lists").modal("show");
  }, $scope.confirmMergeLists = async () => {
    const response = await TenThingsSvc.mergeLists($scope.highlightedListIds);
    $scope.getLists(), $scope.setSelectedList(response.data), $scope.highlightedListIds = [], $scope.confirmed = !1, $("#modal-merge-lists").modal("hide");
  }, $scope.confirmDeleteLists = async () => {
    for (const listId of $scope.listIdsToDelete) await TenThingsSvc.deleteList(listId);
    $scope.getLists(), $scope.selectedList = null, $scope.listIdsToDelete = [], $scope.highlightedListIds = [], $scope.confirmed = !1, $("#modal-delete-lists").modal("hide");
  }, $scope.toggleHighlightedList = list => {
    $scope.highlightedListIds.includes(list._id) ? $scope.highlightedListIds = $scope.highlightedListIds.filter(highlightedListId => highlightedListId !== list._id) : $scope.highlightedListIds.push(list._id);
  }, $scope.setLanguage = (list, language) => {
    list.language = language.code, $scope.selectedLanguage = language.code, $scope.upsertList(list, {
      categories: list.categories,
      language: language.code
    });
  }, $scope.setDifficulty = (list, difficulty) => {
    list.difficulty = difficulty, $scope.upsertList(list, {
      difficulty
    });
  }, $scope.setFrequency = (list, frequency) => {
    list.frequency = frequency, $scope.upsertList(list, {
      frequency
    });
  }, $scope.setCategory = (list, category) => {
    const categoryIndex = list.categories.indexOf(category);
    categoryIndex >= 0 ? list.categories.splice(categoryIndex, 1) : list.categories.push(category), $scope.upsertList(list, {
      categories: list.categories
    });
  }, $scope.hasDuplicate = () => $scope.selectedList && $scope.newItem.value && _.some($scope.selectedList.values, answer => answer.value.removeAllButLetters() == $scope.newItem.value.removeAllButLetters()), $scope.getBlurbs = type => {
    $scope.gettingBlurbs = !0, TenThingsSvc.getBlurbs($scope.selectedList, type).then(() => {
      $scope.setSelectedList($scope.selectedList), $scope.gettingBlurbs = !1;
    }).catch(err => {
      console.error(err), $scope.gettingBlurbs = !1;
    });
  }, $scope.getEmbedUrl = url => {
    if (url.includes("youtube.com")) {
      const videoId = url.match(/[?&]v=([^&]+)/)[1].trim();
      return $sce.trustAsResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    }
    if (url.includes("youtu.be")) {
      const videoId = url.match(/youtu\.be\/([^&?]+)/)[1].trim();
      return $sce.trustAsResourceUrl(`https://www.youtube.com/embed/${videoId}`);
    }
    if (url.includes("vimeo.com")) {
      const videoId = url.match(/vimeo\.com\/(\d+)/)[1].trim();
      return $sce.trustAsResourceUrl(`https://player.vimeo.com/video/${videoId}`);
    }
    if (url.includes("open.spotify")) {
      const videoId = url.match(/track\/([^&?]+)/)[1].trim();
      return $sce.trustAsResourceUrl(`https://open.spotify.com/embed/track/${videoId}`);
    }
    return $sce.trustAsResourceUrl(url);
  }, $scope.$watch("currentUser", async () => {
    if (!$scope.currentUser) return;
    const {
      data: languages
    } = await TenThingsSvc.getLanguages();
    $scope.languages = languages, $scope.languageFilter = {};
    const {
      data: categories
    } = await TenThingsSvc.getCategories();
    $scope.categories = categories, $scope.categoryFilter = {};
    const {
      data: languageStats
    } = await TenThingsSvc.getListLanguageStats();
    $scope.languageStats = languageStats.reduce((result, {
      _id,
      count
    }) => (result[_id.language] = (result[_id.language] || 0) + count, result), {});
    const {
      data: categoryStats
    } = await TenThingsSvc.getListCategoryStats();
    $scope.categoryStats = categoryStats.reduce((result, {
      _id,
      count
    }) => (result[_id] = count, result), {}), $location.search().list && $scope.setSelectedList({
      _id: $location.search().list
    }), $scope.search = $location.search().search || "", $scope.getLists();
  });
}), angular.module("app").controller("TenThingsAdminCtrl", function ($scope, TenThingsSvc, UserSvc) {
  $scope.$on("login", _ => {
    $scope.currentUser.admin && getUsers();
  }), $scope.order = {
    field: "username",
    reverse: !1
  }, $scope.orderBy = field => {
    $scope.order.field === field ? $scope.order.reverse = !$scope.order.reverse : $scope.order = {
      field,
      reverse: !1
    };
  }, $scope.getQueue = () => {
    $scope.loading = !0, TenThingsSvc.getQueue().then(response => {
      $scope.queue = response.data.replace("/n", "<br/>"), $scope.loading = !1;
    });
  }, $scope.getQueue(), TenThingsSvc.getPause().then(response => {
    $scope.paused = response.data;
  });
  const getUsers = () => {
    $scope.loading = !0, UserSvc.getUsers().then(response => {
      $scope.users = response.data.filter(user => !user.admin), $scope.loading = !1;
    });
  };
  $scope.toggleBan = user => {
    $scope.loading = !0, UserSvc.toggleBan(user._id).then(response => {
      getUsers();
    });
  }, $scope.togglePause = user => {
    TenThingsSvc.togglePause().then(response => {
      $scope.paused = response.data, console.log($scope.paused);
    });
  };
}), angular.module("app").controller("TenThingsGameCtrl", function ($scope, $stateParams, TenThingsSvc, UserSvc) {
  $scope.$on("login", () => {
    $scope.currentUser.admin && ($scope.loading = !0, UserSvc.getUsers().then(response => {
      $scope.users = response.data.filter(user => !user.admin), $scope.loading = !1;
    }), $stateParams.game && TenThingsSvc.getGame($stateParams.game).then(response => {
      $scope.game = response.data, console.log($scope.game);
    }));
  });
}), angular.module("app").controller("TenThingsStatsCtrl", function ($scope, TenThingsSvc) {
  $scope.languageStats = [], $scope.categoryStats = {
    labels: [],
    datasets: []
  };
  const lineChartOptions = {
    responsive: !0,
    plugins: {
      legend: {
        display: !0,
        position: "top"
      },
      title: {
        display: !0,
        text: "Chart.js Line Chart"
      }
    }
  };
  $scope.$watch("currentUser", () => {
    $scope.currentUser && ($scope.languageStats = [], TenThingsSvc.getLanguages().then(response => {
      $scope.languages = response.data;
    }), TenThingsSvc.getCategories().then(response => {
      $scope.categories = response.data;
    }), TenThingsSvc.getPlayStats().then(({
      data
    }) => {
      const years = _.uniq(data.map(({
          year
        }) => year)).sort(),
        months = _.times(12, i => i + 1);
      $scope.playStats = {
        labels: months,
        series: years,
        data: years.map(year => months.map(month => data.find(item => item.month === month && item.year === year)?.uniquePlayers || 0)),
        options: lineChartOptions
      };
    }), TenThingsSvc.getListLanguageStats().then(({
      data
    }) => {
      const years = _.uniq(data.map(({
          _id
        }) => _id.year)).sort(),
        languages = _.uniq(data.map(({
          _id
        }) => _id.language)).sort();
      $scope.languageStats = {
        labels: years,
        series: languages,
        data: languages.map(language => years.map(year => data.find(({
          _id
        }) => _id.language === language && _id.year === year)?.count || 0)),
        options: lineChartOptions
      };
    }), TenThingsSvc.getGameStats().then(({
      data
    }) => {
      const years = _.uniq(data.map(({
          _id
        }) => _id.year)).sort(),
        languages = _.uniq(data.map(({
          _id
        }) => _id.language)).sort();
      $scope.gameStats = {
        labels: years,
        series: languages,
        data: languages.map(language => years.map(year => data.find(({
          _id
        }) => _id.language === language && _id.year === year)?.count || 0)),
        options: lineChartOptions
      };
    }), TenThingsSvc.getListCategoryStats().then(({
      data
    }) => {
      const sortedData = _.sortBy(data, ({
        count
      }) => -count);
      $scope.categoryStats = {
        labels: sortedData.map(({
          _id
        }) => _id),
        data: [sortedData.map(({
          count
        }) => count)]
      };
    }));
  });
}), angular.module("app").controller("WorkoutCtrl", function ($scope) {
  $scope.timeRemaining = 0, $scope.timeExercising = 30, $scope.timeResting = 10, $scope.rest = !1;
  var exercising,
    sounds = {
      on: new Audio("on.wav"),
      off: new Audio("off.wav"),
      switch: new Audio("switch.wav")
    },
    exercises = [{
      name: "Jumping Jacks",
      split: !1
    }, {
      name: "Wall Sit",
      split: !1
    }, {
      name: "Push-Up",
      split: !1
    }, {
      name: "Crunch",
      split: !1
    }, {
      name: "Step-Up",
      split: !0
    }, {
      name: "Squat",
      split: !1
    }, {
      name: "Triceps Dip",
      split: !1
    }, {
      name: "Plank",
      split: !1
    }, {
      name: "High Knees",
      split: !1
    }, {
      name: "Lunge",
      split: !1
    }, {
      name: "Push-Up with Rotation",
      split: !1
    }, {
      name: "Side Plank",
      split: !0
    }];
  $scope.progress = function () {
    return exercises.length - Math.floor($scope.timeRemaining / ($scope.timeExercising + $scope.timeResting)) + "/" + exercises.length;
  }, $scope.workout = function () {
    var excerciseTime = $scope.timeExercising + $scope.timeResting;
    $scope.timeRemaining ? (clearInterval(exercising), $scope.timer = "", $scope.timeRemaining = 0, $scope.rest = !1, $scope.exercise = {
      name: "",
      split: !1
    }) : ($scope.timeRemaining = exercises.length * excerciseTime, exercising = setInterval(function () {
      if ($scope.timeRemaining--, 0 === $scope.timeRemaining) return $scope.exercise = {
        name: "Finished! Congrats!",
        split: !1
      }, $scope.timer = "", $scope.timeRemaining = 0, $scope.rest = !1, $scope.$apply(), clearInterval(exercising);
      var currentExercise = Math.floor($scope.timeRemaining / excerciseTime),
        timer = $scope.timeRemaining - currentExercise * excerciseTime;
      $scope.timer = timer > $scope.timeExercising ? timer - $scope.timeExercising : timer, timer > $scope.timeExercising ? $scope.rest = !0 : $scope.rest = !1, $scope.exercise = exercises[exercises.length - currentExercise - 1], timer === $scope.timeExercising ? sounds.on.play() : 0 === timer ? sounds.off.play() : $scope.exercise.split && timer === Math.floor($scope.timeExercising / 2) && sounds.switch.play(), $scope.$apply();
    }, 1e3));
  };
}), angular.module("app").service("CategoriesSvc", function ($http) {
  var svc = this;
  svc.getCategories = function () {
    return $http.get("/api/categories");
  }, svc.getTasks = function (category) {
    return $http.get("/api/categories/" + category);
  }, svc.addCategory = function (category) {
    return $http.post("/api/categories/", category);
  }, svc.addTask = function (category, task) {
    return $http.post("/api/categories/" + category + "/tasks", task);
  }, svc.setPriorityList = function (list) {
    svc.choices = list, svc.priorityList = [];
    for (var i = 0; i < list.length; i++) for (var j = i + 1; j < list.length; j++) {
      var random = Math.round(Math.random());
      svc.priorityList.push({
        id: 0,
        firstChoice: list[0 === random ? i : j].name,
        secondChoice: list[0 === random ? j : i].name,
        choice: ""
      });
    }
    for (i in function (array) {
      var t,
        i,
        m = array.length;
      for (; m;) i = Math.floor(Math.random() * m--), t = array[m], array[m] = array[i], array[i] = t;
    }(svc.priorityList), svc.priorityList) svc.priorityList[i].id = i + 1;
  }, svc.getPriorityList = function (list) {
    return svc.priorityList;
  };
}), angular.module("app").service("EmailSvc", function ($http) {
  this.send = function (email) {
    return console.log(email), $http.post("/api/email", email);
  };
}), angular.module("app").service("FileSvc", function ($http) {
  this.getImages = function (folder) {
    return $http.get("/api/files/images/" + folder);
  }, this.getSounds = function (folder) {
    return $http.get("/api/files/sounds/" + folder);
  };
}), angular.module("app").service("GameSvc", function ($http) {
  this.getHighscore = function (game, user) {
    return $http.get("/api/games/" + game + "/" + user + "/highscore");
  }, this.setHighscore = function (game, user, score) {
    return $http.post("/api/games/" + game + "/" + user + "/highscore", {
      score
    });
  };
}), angular.module("app").service("LanguageSvc", function () {
  var svc = this;
  svc.languages = [{
    code: "EN",
    name: "English",
    flag: "flag-icon-gb"
  }, {
    code: "NL",
    name: "Nederlands",
    flag: "flag-icon-nl"
  }, {
    code: "FR",
    name: "Français",
    flag: "flag-icon-fr"
  }], svc.text = [{
    code: "EN"
  }, {
    code: "NL"
  }, {
    code: "FR"
  }], svc.selectedLanguage = svc.languages[0], svc.setLanguage = function (language) {
    return svc.selectedLanguage = language, language;
  }, svc.getLanguage = function () {
    return svc.selectedLanguage;
  };
}), angular.module("app").service("PostsSvc", function ($http) {
  this.fetch = function () {
    return $http.get("/api/posts");
  }, this.create = function (post) {
    return $http.post("/api/posts", post);
  }, this.getPost = function (post) {
    return $http.get("/api/posts/" + post._id);
  };
}), angular.module("app").service("TenThingsSvc", function ($http) {
  var svc = this;
  svc.getQueue = function () {
    return $http.get("/bots/tenthings/queue");
  }, svc.getLists = function (options = {}) {
    var url = "/api/tenthings/lists?" + (options.limit ? `&limit=${options.limit}` : "") + (options.page ? `&page=${options.page}` : "") + (options.sortBy ? `&sort_by=${options.sortBy}` : "") + (options.orderBy ? `&order_by=${options.orderBy}` : "") + (options.languages && options.languages.length > 0 ? `&language=${options.languages.join(",")}` : "") + (options.categories && options.categories.length > 0 ? `&categories=${options.categories.join(",")}` : "") + (options.search ? `&search=${options.search}` : "");
    return $http.get(url);
  }, svc.searchLists = name => $http.get(`/api/tenthings/search/list-names/${name}`), svc.getCategories = () => $http.get("/api/tenthings/categories"), svc.getLanguages = () => $http.get("/api/tenthings/languages"), svc.getList = function (list) {
    return $http.get("/api/tenthings/lists/" + list._id);
  }, svc.updateList = function (list) {
    return $http.put("/api/tenthings/lists/" + list._id, list);
  }, svc.createList = function (user, list) {
    return $http.post("/api/tenthings/lists", {
      user,
      list
    });
  }, svc.mergeLists = function (lists) {
    return $http.post("/api/tenthings/lists/merge", {
      lists
    });
  }, svc.deleteList = function (listId) {
    return $http.delete("/api/tenthings/lists/" + listId);
  }, svc.updateListValue = function (list, value) {
    return $http.put("/api/tenthings/lists/" + list._id + "/values/" + value._id, value);
  }, svc.createListValue = function (list, value) {
    return $http.post("/api/tenthings/lists/" + list._id + "/values", value);
  }, svc.deleteListValue = function (list, value) {
    return $http.delete("/api/tenthings/lists/" + list._id + "/values/" + value._id);
  }, svc.reportList = function (user, list) {
    $http.get("/api/tenthings/lists/" + list._id + "/report/" + user._id);
  }, svc.getListCategoryStats = function () {
    return $http.get("/api/tenthings/stats/categories");
  }, svc.getListLanguageStats = function () {
    return $http.get("/api/tenthings/stats/languages");
  }, svc.getPlayStats = function () {
    return $http.get("/api/tenthings/stats/play");
  }, svc.getGameStats = function () {
    return $http.get("/api/tenthings/stats/games");
  }, svc.getBlurbs = function (list, type) {
    return $http.post(`/api/tenthings/lists/${list._id}/blurbs/${type}`);
  }, svc.getPause = function () {
    return $http.get("/api/tenthings/pause");
  }, svc.togglePause = function () {
    return $http.post("/api/tenthings/pause");
  }, svc.getGame = function (id) {
    return $http.get(`/api/tenthings/games/${id}`);
  };
}), angular.module("app").service("UserSvc", function ($http) {
  var svc = this;
  svc.getUser = function () {
    return $http.get("/api/users");
  }, svc.getUsers = function () {
    return $http.get("/api/users/all");
  }, svc.toggleBan = function (id) {
    return $http.post(`/api/users/ban/${id}`);
  }, svc.setToken = function (token) {
    return $http.defaults.headers.common["X-Auth"] = token, svc.getUser();
  }, svc.authenticate = function (user) {
    return $http.post("/api/users/authenticate", {
      user
    }).then(function (response) {
      return window.localStorage.token = response.data, svc.setToken(response.data);
    });
  }, svc.login = function (user) {
    return $http.get("/api/users/" + user + "/login").then(function (response) {
      return window.localStorage.token = response.data, svc.setToken(response.data);
    });
  }, svc.updateUser = function (user) {
    return $http.post("/api/users/" + user._id, {
      user
    }).then(function () {
      return svc.getUser();
    });
  }, svc.checkPassword = function (user, password) {
    return $http.post("/api/users/" + user + "/verification", {
      password
    });
  }, svc.changePassword = function (user, oldPassword, newPassword) {
    return $http.post("/api/users/" + user + "/password", {
      oldPassword,
      newPassword
    });
  }, svc.changeUsername = function (user, newUsername) {
    return $http.post("/api/users/" + user + "/username", {
      newUsername
    }).then(function () {
      return svc.getUser();
    });
  }, svc.logout = function () {
    window.localStorage.clear(), $http.defaults.headers.common["X-Auth"] = "";
  }, svc.createUser = function (username, password) {
    return $http.post("/api/users", {
      username,
      password
    }).then(function () {
      return svc.login(username, password);
    });
  };
}), angular.module("app").controller("QuizAnimalsCtrl", function ($scope, FileSvc) {
  FileSvc.getSounds("animals").then(function (response) {
    $scope.animals = _.shuffle(response.data.map(animal => ({
      sound: animal,
      name: animal.substring(0, animal.indexOf(".")).replace("_", " ").capitalize()
    })));
    for (let animal of $scope.animals) animal.answers = _.shuffle([animal.name, ...getRandomAnimals(animal.name)]);
    console.log($scope.animals);
  }), $scope.guess = (animal, guess) => {
    animal.guess = guess;
  };
  const getRandomAnimals = name => _.shuffle($scope.animals.filter(animal => name !== animal.name).map(animal => animal.name)).slice(0, 5);
  $scope.getScore = () => `${$scope.animals.filter(animal => animal.name === animal.guess).length}/${$scope.animals.length}`, $scope.isScoreVisible = () => $scope.animals.filter(animal => animal.guess).length === $scope.animals.length;
}), angular.module("app").controller("QuizGoogleCtrl", function ($scope, FileSvc) {
  FileSvc.getImages("google").then(function (response) {
    $scope.images = response.data;
  });
}), angular.module("app").controller("QuizLogosCtrl", function ($scope, FileSvc) {
  FileSvc.getImages("logos").then(function (response) {
    $scope.images = response.data;
  });
}), angular.module("app").controller("QuizMoviesCtrl", function ($scope, FileSvc) {
  FileSvc.getImages("movies").then(function (response) {
    $scope.images = response.data;
  });
}), angular.module("app").controller("QuizSkeletonsCtrl", function ($scope, FileSvc) {
  FileSvc.getImages("skeletons").then(function (response) {
    $scope.animals = _.shuffle(response.data.map(animal => ({
      image: animal,
      name: animal.substring(0, animal.indexOf(".")).replace("_", " ").capitalize()
    })));
    for (let animal of $scope.animals) animal.answers = _.shuffle([animal.name, ...getRandomAnimals(animal.name)]);
    console.log($scope.animals);
  }), $scope.guess = (animal, guess) => {
    animal.guess = guess;
  };
  const getRandomAnimals = name => _.shuffle($scope.animals.filter(animal => name !== animal.name).map(animal => animal.name)).slice(0, 10);
  $scope.getScore = () => `${$scope.animals.filter(animal => animal.name === animal.guess).length}/${$scope.animals.length}`, $scope.isScoreVisible = () => $scope.animals.filter(animal => animal.guess).length === $scope.animals.length;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJjb250cm9sbGVycy9hcHAuY3RybC5qcyIsImNvbnRyb2xsZXJzL2FzdGVyb2lkcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvYnViYmxlcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvY2hhcmFkZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3QuY3RybC5qcyIsImNvbnRyb2xsZXJzL2V4cGVyaWVuY2UuY3RybC5qcyIsImNvbnRyb2xsZXJzL2hvYmJpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xlbW1pbmdzLmN0cmwuanMiLCJjb250cm9sbGVycy9saXN0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbG9naW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3Bvc3RzLmN0cmwuanMiLCJjb250cm9sbGVycy9wcm9maWxlLmN0cmwuanMiLCJjb250cm9sbGVycy9za2lsbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvdGVudGhpbmdzYWRtaW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2dhbWUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc3N0YXRzLmN0cmwuanMiLCJjb250cm9sbGVycy93b3Jrb3V0LmN0cmwuanMiLCJzZXJ2aWNlcy9jYXRlZ29yaWVzLnN2Yy5qcyIsInNlcnZpY2VzL2VtYWlsLnN2Yy5qcyIsInNlcnZpY2VzL2ZpbGUuc3ZjLmpzIiwic2VydmljZXMvZ2FtZS5zdmMuanMiLCJzZXJ2aWNlcy9sYW5ndWFnZS5zdmMuanMiLCJzZXJ2aWNlcy9wb3N0cy5zdmMuanMiLCJzZXJ2aWNlcy90ZW50aGluZ3Muc3ZjLmpzIiwic2VydmljZXMvdXNlci5zdmMuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2FuaW1hbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvZ29vZ2xlLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2xvZ29zLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL21vdmllcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9za2VsZXRvbnMuY3RybC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRvbWFpbnMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0cmluZyIsInByb3RvdHlwZSIsInZhbHVlIiwicmVkdWNlIiwicmVzdWx0IiwibGV0dGVyIiwicmVwbGFjZSIsInRoaXMiLCJTUEVDSUFMX0NIQVJBQ1RFUlMiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZURpYWNyaXRpY3MiLCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyIsImV4dHJhIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInJlcGxhY2VBbGwiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidW5kZWZpbmVkIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsImRpcmVjdGl2ZSIsIiRkb2N1bWVudCIsInJlc3RyaWN0Iiwic2NvcGUiLCJjbGlja091dHNpZGUiLCJsaW5rIiwiZWwiLCJhdHRyIiwib24iLCJ0YXJnZXQiLCJjb250YWlucyIsIiRhcHBseSIsIiRldmFsIiwiJHN0YXRlIiwiJGNvbXBpbGUiLCIkaW50ZXJwb2xhdGUiLCJnZXRTdHlsZSIsInRlbXBsYXRlU3R5bGVVcmwiLCJzdHlsZSIsImhyZWYiLCJyZWwiLCJtYXRjaCIsImVsZW0iLCJ0ZW1wbGF0ZVN0eWxlcyIsImh0bWwiLCJzdGFydFN5bWJvbCIsImVuZFN5bWJvbCIsImFwcGVuZCIsIiRvbiIsImV2ZW50IiwidG9TdGF0ZSIsInRvUGFyYW1zIiwiZnJvbVN0YXRlIiwiZnJvbVBhcmFtcyIsInN0YXRlcyIsIm5hbWUiLCJwYXJlbnQiLCJnZXQiLCJ2aWV3cyIsIl8iLCJ2aWV3Iiwic3BsaXQiLCJmbGF0IiwiaW5jbHVkZXMiLCJyZXZlcnNlIiwiZ2V0U3R5bGVzIiwiJHNjb3BlIiwiTGFuZ3VhZ2VTdmMiLCJVc2VyU3ZjIiwiJCIsImxvYWQiLCJmYWRlT3V0IiwiZmFkZUluIiwiY2xvc2VzdCIsInRvZ2dsZUNsYXNzIiwiY2hlY2tlZCIsImRvY3VtZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidGhlbWVDb3VudGVyIiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiZmxpcFRoZW1lIiwic2hvdyIsImhpZGUiLCJzZXRUaW1lb3V0IiwiZ2V0SlNPTiIsInNraWxscyIsImZpbHRlciIsInNraWxsIiwiaG9iYmllcyIsImpvYnMiLCJqb2IiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiY2hhcmFkZXMiLCJnZXRUaW1lU3BhbiIsImxhbmd1YWdlcyIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInNlbGVjdExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImhvdmVyZGl2IiwiZGl2aWQiLCJsZWZ0IiwiY2xpZW50WCIsInRvcCIsImNsaWVudFkiLCJnZXRFbGVtZW50QnlJZCIsImNzcyIsInRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsInVzZXIiLCJsb2dpbiIsInRoZW4iLCJyZXNwb25zZSIsImxvZ2dlZEluIiwiX2lkIiwiY3VycmVudFVzZXIiLCJiaXJ0aERhdGUiLCJsb2FkaW5nIiwibG9nb3V0IiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsImNsZWFyIiwiY2F0Y2giLCJlcnJvciIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiJGxvY2F0aW9uIiwiR2FtZVN2YyIsImFubm91bmNlIiwiY2FudmFzIiwicGF0aCIsImFsZXJ0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZvbnQiLCJmaWxsU3R5bGUiLCJ0ZXh0QWxpZ24iLCJzaG90cyIsImFzdGVyb2lkcyIsInBvd2VydXBzIiwiZXhwbG9zaW9ucyIsIm1hcCIsInNwYWNlcGljcyIsInNwYWNlIiwicG93ZXJ1cFR5cGVzIiwiYW5ub3VuY2VtZW50IiwiY3ljbGUiLCJyb3dzIiwiY29sdW1ucyIsInNpemUiLCJpbWciLCJJbWFnZSIsImFjdGl2YXRlIiwic3BhY2VzaGlwIiwibWF4U3BlZWQiLCJjb29sZG93biIsImNvb2xkb3duVGltZSIsInJhbmdlIiwic2hpZWxkIiwiZXhwbG9kZSIsInNwYXduQXN0ZXJvaWRzIiwicG93ZXJ1cCIsImFycmF5Iiwic3JjIiwiZXhwbG9zaW9uSW1hZ2UiLCJldmFsdWF0ZUtleXMiLCJwbGF5aW5nIiwic2hvb3QiLCJyb3RhdGlvbiIsInNwZWVkIiwic2NvcmUiLCJTcGFjZXNoaXAiLCJhdXRvU3Bhd24iLCJ3aWR0aCIsImhlaWdodCIsImNhbm5vbiIsIngiLCJ5IiwicG9zaXRpb24iLCJhbmdsZSIsImlkIiwicm91bmQiLCJTaG90IiwibW92ZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJmaWxsIiwiYXN0ZXJvaWQiLCJoaXQiLCJnYW1lT3ZlciIsImNvcyIsInNpbiIsImxpZmVzcGFuIiwiQXN0ZXJvaWQiLCJnZXRFbnRyeVBvc2l0aW9uIiwicm90YXRpb25TcGVlZCIsIkV4cGxvc2lvbiIsInNob3QiLCJwb2ludHMiLCJzcGF3blBvd2VydXAiLCJvYmplY3QiLCJQb3dlcnVwIiwiZGVsYXkiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiY29sdW1uIiwicm93IiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImdyaWRYIiwiZ3JpZFkiLCJvYmplY3QxIiwib2JqZWN0MiIsImtleXMiLCJhbW91bnQiLCJoaWdoc2NvcmUiLCJzZXRIaWdoc2NvcmUiLCJyZXNpemVDYW52YXMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5Q29kZSIsIndoaWNoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsImNsZWFyUmVjdCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJ0YWxseSIsImZpbGxUZXh0IiwibWVhc3VyZVRleHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJidWJibGVzIiwiY29sb3JzIiwiQnViYmxlIiwicmFkaXVzIiwiZXhwYW5kaW5nIiwiY2lyY3VtZmVyZW5jZSIsIm1heFJhZGl1cyIsInZ4IiwidnkiLCJmaWx0ZXJCdWJibGVzIiwiYnViYmxlIiwic2VsZWN0V29yZCIsImNhdGVnb3J5Iiwid29yZCIsIkVtYWlsU3ZjIiwib3B0aW9ucyIsInRleHQiLCJjb250YWN0IiwiZW1haWwiLCJwaG9uZSIsImFib3V0IiwibWVzc2FnZSIsInNlbmRpbmciLCJzZW50Iiwic3RhdHVzIiwiZXJyIiwiZ2V0U2tpbGwiLCJza2lsbENvZGUiLCJjb2RlIiwiJHdpbmRvdyIsImhvYmJ5U2VsZWN0b3JWaXNpYmxlIiwic2VsZWN0ZWRIb2JieSIsInNlbGVjdEhvYmJ5IiwiaG9iYnkiLCJzaG93SG9iYnkiLCJpbmRleCIsImltYWdlcyIsIkxFRlQiLCJSSUdIVCIsImxlbW1pbmdzSW1hZ2UiLCJkZWNvckltYWdlIiwibGVtbWluZ3MiLCJzdGFydGVkIiwiYWN0aW9ucyIsIndhbGsiLCJzdGFydCIsImVuZCIsImh1aCIsImZhbGwiLCJmbHkiLCJzdG9wIiwiY2xpbWIiLCJidWlsZCIsInB1bmNoIiwiZGlnIiwiTGVtbWluZyIsImluaXQiLCJhY3QiLCJhY3Rpb24iLCJhbmltYXRpb24iLCJzY2FsZSIsImhhdGNoIiwib3BlbiIsInJlY3QiLCJDYXRlZ29yaWVzU3ZjIiwic2hvd0NhdGVnb3J5IiwiZ2V0Q2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJ0YXNrcyIsImoiLCJ0YXNrIiwic2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2VsZWN0ZWRUYXNrcyIsInNlbGVjdGFibGVUYXNrcyIsImVudGVyZWRDYXRlZ29yeSIsIm5ld0NhdGVnb3J5IiwiZm91bmQiLCJhZGRDYXRlZ29yeSIsIm5ld1Rhc2siLCJzZWxlY3RUYXNrIiwiYWRkVGFzayIsImVudGVyZWRUYXNrIiwicmVtb3ZlVGFzayIsInVuc2VsZWN0VGFzayIsInRhc2tMaXN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInN0YXJ0UHJpb3JpdGl6aW5nIiwic2V0UHJpb3JpdHlMaXN0IiwiZ2V0UXVlc3Rpb25zIiwiY291bnRlciIsInVpIiwiZmlyZWJhc2V1aSIsIkF1dGhVSSIsInN0YXJ0VUkiLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzIiwiY3JlZGVudGlhbCIsInJlZGlyZWN0VXJsIiwiZ2V0SWRUb2tlbiIsImlkVG9rZW4iLCJhdXRoZW50aWNhdGUiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWxWZXJpZmllZCIsIiRlbWl0IiwibW9kYWwiLCJ0eXBlIiwic2lnbkluRmFpbHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY3JlZCIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwidWlTaG93biIsImRpc3BsYXkiLCJzaWduSW5TdWNjZXNzVXJsIiwic2lnbkluT3B0aW9ucyIsIkdvb2dsZUF1dGhQcm92aWRlciIsIlBST1ZJREVSX0lEIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJzaWduSW5GbG93IiwicmVzZXQiLCIkZmlsdGVyIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJjcmVhdGUiLCJib2R5IiwicG9zdCIsImZldGNoIiwicG9zdHMiLCJnZXRQb3N0IiwidW5zaGlmdCIsImNvdW50cmllcyIsImZsYWciLCJ0aWRiaXQiLCJkYXRlT3B0aW9ucyIsIm1heERhdGUiLCJtaW5EYXRlIiwiaW5pdERhdGUiLCJkYXRlcGlja2VyTW9kZSIsInVzZXJuYW1lVG9nZ2xlIiwicGFzc3dvcmRUb2dnbGUiLCJ0b2dnbGVVc2VybmFtZSIsIm5ld1VzZXJuYW1lIiwidXNlcm5hbWUiLCJ0b2dnbGVQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwib3JpZ2luYWxCZyIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiY2hhbmdlVXNlcm5hbWUiLCJ1cGRhdGVVc2VyIiwiZmxhZ3MiLCJ1c2VyRmxhZ3MiLCJsb2FkQ291bnRyaWVzIiwiJHF1ZXJ5IiwiY291bnRyeSIsIiR3YXRjaCIsInNlbGVjdGVkU2tpbGwiLCJza2lsbHNWaXNpYmxlIiwicHJvamVjdHMiLCJsYWJlbHMiLCJlbXBsb3llciIsImNvbmNhdCIsImZpbHRlcmVkUHJvamVjdHMiLCJwcm9qZWN0Iiwic2V0U2VsZWN0ZWRTa2lsbCIsImNoYXJ0T3B0aW9ucyIsImN1dG91dFBlcmNlbnRhZ2UiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidG9vbHRpcHMiLCJjaGFydFN0eWxlIiwiaW1hZ2UiLCIkc2NlIiwiVGVuVGhpbmdzU3ZjIiwicGFnZSIsImxpc3RzIiwic2VhcmNoIiwibmV3SXRlbSIsImxhbmd1YWdlRmlsdGVyIiwiY2F0ZWdvcnlGaWx0ZXIiLCJzZWxlY3RlZExpc3QiLCJoaWdobGlnaHRlZExpc3RJZHMiLCJsaXN0SWRzVG9EZWxldGUiLCJjb25maXJtZWQiLCJleGhhdXN0ZWQiLCJvYmplY3RDYXRlZ29yaWVzIiwiYmx1cmJUeXBlcyIsImFwaSIsImFkbWluT25seSIsImhhdmVDb21tb25JdGVtcyIsImFycjEiLCJhcnIyIiwic29tZSIsImtleURvd24iLCJpcyIsImNyZWF0ZVZhbHVlIiwidHJpZ2dlciIsImFkZExpc3QiLCJjcmVhdG9yIiwidmFsdWVzIiwiYW5zd2VycyIsImlzRHluYW1pYyIsInNldFNlbGVjdGVkSXRlbSIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkTGlzdCIsImxpc3QiLCJnZXRMaXN0IiwicmVhZE9ubHkiLCJhZG1pbiIsInNlYXJjaExpc3RzIiwiYXN5bmMiLCJ2aWV3VmFsdWUiLCJoaWdobGlnaHRlZFNlYXJjaFRleHQiLCJyZWdleCIsInZhbHVlT3JkZXIiLCJmaWVsZCIsIm9yZGVyIiwib3JkZXJCeSIsImdldExpc3RzIiwiZ2V0TW9yZUxpc3RzIiwic2V0TGFuZ3VhZ2VGaWx0ZXIiLCJzZXRDYXRlZ29yeUZpbHRlciIsInRvZ2dsZUNhdGVnb3J5RmlsdGVyIiwiYWxsQ2F0ZWdvcmllcyIsInNvcnRCeSIsImxpbWl0IiwiY291bnQiLCJuZXh0UGFnZSIsImdldExpc3ROYW1lIiwibGlzdElkIiwidXBkYXRlVmFsdWUiLCJ1cGRhdGVkSXRlbVJlc3BvbnNlIiwidXBkYXRlTGlzdFZhbHVlIiwiYmx1cmJUeXBlIiwiZGVsZXRlVmFsdWUiLCJoYXNEdXBsaWNhdGUiLCJjcmVhdGVkSXRlbVJlc3BvbnNlIiwiY3JlYXRlTGlzdFZhbHVlIiwidXBzZXJ0TGlzdCIsImJsdXJiIiwiZGVsZXRlTGlzdFZhbHVlIiwidXBkYXRlTGlzdCIsInVwZGF0ZXMiLCJzYXZpbmciLCJsaXN0SW5kZXgiLCJmaW5kSW5kZXgiLCJjaGFuZ2VzIiwiY3JlYXRlTGlzdCIsImFzc2lnbiIsImRlbGV0ZUxpc3QiLCJkZWxldGVMaXN0cyIsImNvbmZpcm1NZXJnZUxpc3RzIiwibWVyZ2VMaXN0cyIsImNvbmZpcm1EZWxldGVMaXN0cyIsInRvZ2dsZUhpZ2hsaWdodGVkTGlzdCIsImhpZ2hsaWdodGVkTGlzdElkIiwic2V0RGlmZmljdWx0eSIsImRpZmZpY3VsdHkiLCJzZXRGcmVxdWVuY3kiLCJmcmVxdWVuY3kiLCJzZXRDYXRlZ29yeSIsImNhdGVnb3J5SW5kZXgiLCJhbnN3ZXIiLCJyZW1vdmVBbGxCdXRMZXR0ZXJzIiwiZ2V0Qmx1cmJzIiwiZ2V0dGluZ0JsdXJicyIsImdldEVtYmVkVXJsIiwidmlkZW9JZCIsInRyaW0iLCJ0cnVzdEFzUmVzb3VyY2VVcmwiLCJnZXRMYW5ndWFnZXMiLCJsYW5ndWFnZVN0YXRzIiwiZ2V0TGlzdExhbmd1YWdlU3RhdHMiLCJjYXRlZ29yeVN0YXRzIiwiZ2V0TGlzdENhdGVnb3J5U3RhdHMiLCJnZXRVc2VycyIsImdldFF1ZXVlIiwicXVldWUiLCJnZXRQYXVzZSIsInBhdXNlZCIsInVzZXJzIiwidG9nZ2xlQmFuIiwidG9nZ2xlUGF1c2UiLCIkc3RhdGVQYXJhbXMiLCJnYW1lIiwiZ2V0R2FtZSIsImRhdGFzZXRzIiwibGluZUNoYXJ0T3B0aW9ucyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwidGl0bGUiLCJnZXRQbGF5U3RhdHMiLCJ5ZWFycyIsInVuaXEiLCJtb250aHMiLCJ0aW1lcyIsInBsYXlTdGF0cyIsInNlcmllcyIsIm1vbnRoIiwidW5pcXVlUGxheWVycyIsImdldEdhbWVTdGF0cyIsImdhbWVTdGF0cyIsInNvcnRlZERhdGEiLCJ0aW1lUmVtYWluaW5nIiwidGltZUV4ZXJjaXNpbmciLCJ0aW1lUmVzdGluZyIsInJlc3QiLCJleGVyY2lzaW5nIiwic291bmRzIiwiQXVkaW8iLCJvZmYiLCJzd2l0Y2giLCJleGVyY2lzZXMiLCJwcm9ncmVzcyIsIndvcmtvdXQiLCJleGNlcmNpc2VUaW1lIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVyIiwiZXhlcmNpc2UiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRFeGVyY2lzZSIsInBsYXkiLCIkaHR0cCIsInN2YyIsImdldFRhc2tzIiwiY2hvaWNlcyIsInByaW9yaXR5TGlzdCIsImZpcnN0Q2hvaWNlIiwic2Vjb25kQ2hvaWNlIiwiY2hvaWNlIiwidCIsIm0iLCJzaHVmZmxlIiwiZ2V0UHJpb3JpdHlMaXN0IiwiZ2V0SW1hZ2VzIiwiZm9sZGVyIiwiZ2V0U291bmRzIiwiZ2V0SGlnaHNjb3JlIiwiam9pbiIsInB1dCIsImRlbGV0ZSIsInJlcG9ydExpc3QiLCJnZXRVc2VyIiwic2V0VG9rZW4iLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImNyZWF0ZVVzZXIiLCJGaWxlU3ZjIiwiYW5pbWFscyIsImFuaW1hbCIsInNvdW5kIiwic3Vic3RyaW5nIiwiY2FwaXRhbGl6ZSIsImdldFJhbmRvbUFuaW1hbHMiLCJndWVzcyIsImdldFNjb3JlIiwiaXNTY29yZVZpc2libGUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUFBLDJCQUFBQSxHQUFBLENBQ0E7SUFDQUMsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLENBQUE7RUFHQUMsT0FBQUEsR0FBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsTUFBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsQ0FBQTtBQUdBQyxNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGtCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBUiwyQkFBQUEsQ0FBQVMsTUFBQUEsQ0FBQSxDQUFBQyxNQUFBQSxFQUFBQyxNQUFBQSxLQUNBRCxNQUFBQSxDQUFBRSxPQUFBQSxDQUFBRCxNQUFBQSxDQUFBVCxPQUFBQSxFQUFBUyxNQUFBQSxDQUFBVixJQUFBQSxDQUFBQSxFQUNBWSxJQUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUE7QUFHQSxNQUFBQyxrQkFBQUEsR0FBQSxxQ0FBQTtBQUVBVixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLHlCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBRCxPQUFBQSxDQUFBLElBQUFHLE1BQUFBLENBQUEsSUFBQUQsa0JBQUFBLEdBQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsRUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQVYsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxxQkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUcsV0FBQUEsRUFBQUEsQ0FBQUMsZ0JBQUFBLEVBQUFBLENBQUFDLHVCQUFBQSxFQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWQsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxTQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBVyxLQUFBQSxFQUFBQTtJQUNBLE9BQUFOLElBQUFBLENBQUFELE9BQUFBLENBQUEsSUFBQUcsTUFBQUEsQ0FBQSxLQUFBRCxrQkFBQUEsR0FBQUssS0FBQUEsR0FBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxHQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBZixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFlBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFPLE1BQUFBLENBQUEsQ0FBQSxDQUFBLENBQUFDLFdBQUFBLEVBQUFBLEdBQUFSLElBQUFBLENBQUFTLEtBQUFBLENBQUEsQ0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWxCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsWUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLENBQUFBLE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsY0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQVUsVUFBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxDQUFBLENBQUFYLE9BQUFBLENBQUEsR0FBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBQSxPQUFBQSxDQUFBLEdBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQVcsVUFBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQW5CLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsY0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQWdCLElBQUFBLEVBQUFaLE9BQUFBLEVBQUFBO0lBRUEsS0FEQSxJQUFBYSxhQUFBQSxHQUFBWixJQUFBQSxFQUNBYSxDQUFBQSxHQUFBLENBQUEsRUFBQUEsQ0FBQUEsR0FBQUYsSUFBQUEsQ0FBQUcsTUFBQUEsRUFBQUQsQ0FBQUEsRUFBQUEsRUFDQUQsYUFBQUEsR0FBQUEsYUFBQUEsQ0FBQWIsT0FBQUEsQ0FBQVksSUFBQUEsQ0FBQUUsQ0FBQUEsQ0FBQUEsRUFBQWQsT0FBQUEsQ0FBQWMsQ0FBQUEsQ0FBQUEsQ0FBQUE7SUFFQSxPQUFBRCxhQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQXJCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsVUFBQSxFQUFBO0VBQ0FDLEtBQUFB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Q0FDLEdBQUFBLEVBQUEsYUFBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxRQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsWUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFdBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxVQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxXQUFBO0lBQ0FFLFVBQUFBLEVBQUEsY0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsTUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsT0FBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFdBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxpQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxvQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsZ0JBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsbUJBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGlCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG9CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxhQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFlBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxl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QUFBQSxDQUFBQTtJQUNBRSxZQUFBQSxHQUFBLENBQ0E7TUFDQXBHLElBQUFBLEVBQUEsT0FBQTtNQUNBcUcsWUFBQUEsRUFBQSxhQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBN00sQ0FBQUEsRUFBQSxDQUFBO1FBQ0FVLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFvTSxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUMsUUFBQUEsSUFBQSxHQUNBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQTlHLElBQUFBLEVBQUEsVUFBQTtNQUNBcUcsWUFBQUEsRUFBQSxZQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBN00sQ0FBQUEsRUFBQSxDQUFBO1FBQ0FVLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFvTSxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUUsUUFBQUEsR0FBQSxDQUFBLEtBQ0FGLFNBQUFBLENBQUFHLFlBQUFBLElBQUEsQ0FBQSxDQUVBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQWhILElBQUFBLEVBQUEsT0FBQTtNQUNBcUcsWUFBQUEsRUFBQSxnQkFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7UUFDQTdNLENBQUFBLEVBQUEsQ0FBQTtRQUNBVSxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBb00sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0FBLFNBQUFBLENBQUFJLEtBQUFBLElBQUEsQ0FDQTtNQUFBO0lBQUEsQ0FBQSxFQUVBO01BQ0FqSCxJQUFBQSxFQUFBLFFBQUE7TUFDQXFHLFlBQUFBLEVBQUEsUUFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7UUFDQTdNLENBQUFBLEVBQUEsQ0FBQTtRQUNBVSxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBb00sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0FBLFNBQUFBLENBQUFLLE1BQUFBLEdBQUFBLENBQUEsQ0FDQTtNQUFBO0lBQUEsQ0FBQSxFQUVBO01BQ0FsSCxJQUFBQSxFQUFBLE1BQUE7TUFDQXFHLFlBQUFBLEVBQUEsTUFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7UUFDQTdNLENBQUFBLEVBQUEsQ0FBQTtRQUNBVSxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBb00sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0EsS0FBQSxJQUFBak4sQ0FBQUEsSUFBQWtNLFNBQUFBLEVBQ0FBLFNBQUFBLENBQUFsTSxDQUFBQSxDQUFBQSxDQUFBdU4sT0FBQUEsRUFBQUE7UUFFQUMsY0FBQUEsQ0FBQSxDQUFBLENBQ0E7TUFBQTtJQUFBLENB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QUNBLE1BQUEsR0FDQWhLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQWdLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBakssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBZ0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FqSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUFnSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEdBQ0FoSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFnSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQWpLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQWdLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBakssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBZ0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FDQSxLQUFBLEVBQ0EsTUFBQSxHQUNBaEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBZ0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FqSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFnSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQWpLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQWdLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxDQUFBLEVBRUF0RyxHQUFBQSxDQUFBRyxTQUFBQSxHQUFBZ0csUUFBQUEsRUFD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LENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxnQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFdBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxlQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsd0JBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsY0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGtCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxpQ0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxrQ0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxlQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEseUJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsdUNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsMEJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxhQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsY0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsTUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsa0JBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxnQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLG9CQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxNQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLDZCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGlDQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLHNEQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxlQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxXQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFdBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsbUJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSw4Q0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxXQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE1BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsZUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFdBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsbUNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxXQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxhQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsZ0NBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsTUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSwyQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsdUJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsd0NBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsb0JBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxnQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGtDQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsYUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxlQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFdBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFdBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsWUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLHNCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsNEJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsWUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxrQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSw0Q0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxNQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLDBCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsWUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsV0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxlQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxXQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsTUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxhQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE1BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxNQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGtCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGtCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLDJCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsYUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxxQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLG9CQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsY0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxpQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxXQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLDhDQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsd0JBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxjQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsYUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSx1QkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxhQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLDJCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLHNCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFdBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsMEJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsTUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSw2QkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxNQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsWUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsY0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxxQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLDJCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLDhCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxzQ0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSwwQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxrQ0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxtQ0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSx5QkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxzQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsbUJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsY0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUE7RUFXQTlULE1BQUFBLENBQUFnVSxXQUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUEsSUFB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QSxDQUFBbWhCLE9BQUFBLENBQUE1Z0IsTUFBQUEsQ0FBQThoQixPQUFBQSxDQUFBcGdCLE1BQUFBLENBQUFxZ0IsTUFBQUEsSUFBQTFpQixJQUFBQSxLQUFBMGlCLE1BQUFBLENBQUExaUIsSUFBQUEsQ0FBQUEsQ0FBQWlHLEdBQUFBLENBQUF5YyxNQUFBQSxJQUFBQSxNQUFBQSxDQUFBMWlCLElBQUFBLENBQUFBLENBQUFBLENBQUF4RyxLQUFBQSxDQUFBLENBQUEsRUFBQSxFQUFBLENBQUE7RUFFQW1ILE1BQUFBLENBQUFxaUIsUUFBQUEsR0FBQSxNQUFBLEdBQUFyaUIsTUFBQUEsQ0FBQThoQixPQUFBQSxDQUFBcGdCLE1BQUFBLENBQUFxZ0IsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQTFpQixJQUFBQSxLQUFBMGlCLE1BQUFBLENBQUFLLEtBQUFBLENBQUFBLENBQUFscEIsTUFBQUEsSUFBQThHLE1BQUFBLENBQUE4aEIsT0FBQUEsQ0FBQTVvQixNQUFBQSxFQUFBQSxFQUVBOEcsTUFBQUEsQ0FBQXNpQixjQUFBQSxHQUFBLE1BQUF0aUIsTUFBQUEsQ0FBQThoQixPQUFBQSxDQUFBcGdCLE1BQUFBLENBQUFxZ0IsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQUssS0FBQUEsQ0FBQUEsQ0FBQWxwQixNQUFBQSxLQUFBOEcsTUFBQUEsQ0FBQThoQixPQUFBQSxDQUFBNW9CLE1BQ0E7QUFBQSxDQUFBLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcCA9IFtcclxuICB7XHJcbiAgICBiYXNlOiBcIkFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0MVxcdTI0QjZcXHVGRjIxXFx1MDBDMFxcdTAwQzFcXHUwMEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxcdTAwQzNcXHUwMTAwXFx1MDEwMlxcdTFFQjBcXHUxRUFFXFx1MUVCNFxcdTFFQjJcXHUwMjI2XFx1MDFFMFxcdTAwQzRcXHUwMURFXFx1MUVBMlxcdTAwQzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBDNlxcdTAxRkNcXHUwMUUyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBT1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM4XFx1QTczQV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQyXFx1MjRCN1xcdUZGMjJcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUwMjQzXFx1MDE4MlxcdTAxODFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0M1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYxXFx1MDFDNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMlxcdTAxQzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0NVxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJGXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDZcXHUyNEJCXFx1RkYyNlxcdTFFMUVcXHUwMTkxXFx1QTc3Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiR1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ3XFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0OFxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIklcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0OVxcdTI0QkVcXHVGRjI5XFx1MDBDQ1xcdTAwQ0RcXHUwMENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxcdTAwQ0ZcXHUxRTJFXFx1MUVDOFxcdTAxQ0ZcXHUwMjA4XFx1MDIwQVxcdTFFQ0FcXHUwMTJFXFx1MUUyQ1xcdTAxOTddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIktcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QlxcdTI0QzBcXHVGRjJCXFx1MUUzMFxcdTAxRThcXHUxRTMyXFx1MDEzNlxcdTFFMzRcXHUwMTk4XFx1MkM2OVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3QTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0Q1xcdTI0QzFcXHVGRjJDXFx1MDEzRlxcdTAxMzlcXHUwMTNEXFx1MUUzNlxcdTFFMzhcXHUwMTNCXFx1MUUzQ1xcdTFFM0FcXHUwMTQxXFx1MDIzRFxcdTJDNjJcXHUyQzYwXFx1QTc0OFxcdUE3NDZcXHVBNzgwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJNXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNERcXHUyNEMyXFx1RkYyRFxcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTJDNkVcXHUwMTlDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5KXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0RlxcdTI0QzRcXHVGRjJGXFx1MDBEMlxcdTAwRDNcXHUwMEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxcdTAwRDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHUwMEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xcdTAwRDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT0lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT09cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT1VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUwXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJRXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTFcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUlwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUyXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiU1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUzXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU0XFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MjhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1NVxcdTI0Q0FcXHVGRjM1XFx1MDBEOVxcdTAwREFcXHUwMERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHUwMERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU2XFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVllcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc2MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiV1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU3XFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJYXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNThcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTlcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHUwMEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDVBXFx1MjRDRlxcdUZGM0FcXHUwMTc5XFx1MUU5MFxcdTAxN0JcXHUwMTdEXFx1MUU5MlxcdTFFOTRcXHUwMUI1XFx1MDIyNFxcdTJDN0ZcXHUyQzZCXFx1QTc2Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDYxXFx1MjREMFxcdUZGNDFcXHUxRTlBXFx1MDBFMFxcdTAwRTFcXHUwMEUyXFx1MUVBN1xcdTFFQTVcXHUxRUFCXFx1MUVBOVxcdTAwRTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxcdTAwRTRcXHUwMURGXFx1MUVBM1xcdTAwRTVcXHUwMUZCXFx1MDFDRVxcdTAyMDFcXHUwMjAzXFx1MUVBMVxcdTFFQURcXHUxRUI3XFx1MUUwMVxcdTAxMDVcXHUyQzY1XFx1MDI1MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBFNlxcdTAxRkRcXHUwMUUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM5XFx1QTczQl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczRF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDYyXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2M1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxcdTAwRTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY0XFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGM1xcdTAxQzZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2NVxcdTI0RDRcXHVGRjQ1XFx1MDBFOFxcdTAwRTlcXHUwMEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xcdTAwRUJcXHUxRUJCXFx1MDExQlxcdTAyMDVcXHUwMjA3XFx1MUVCOVxcdTFFQzdcXHUwMjI5XFx1MUUxRFxcdTAxMTlcXHUxRTE5XFx1MUUxQlxcdTAyNDdcXHUwMjVCXFx1MDFERF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY2XFx1MjRENVxcdUZGNDZcXHUxRTFGXFx1MDE5MlxcdUE3N0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2N1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJoXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaHZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDE5NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDY5XFx1MjREOFxcdUZGNDlcXHUwMEVDXFx1MDBFRFxcdTAwRUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHUwMEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwialwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZBXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImtcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QlxcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZEXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiblwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZFXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxcdTAwRjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibmpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZGXFx1MjRERVxcdUZGNEZcXHUwMEYyXFx1MDBGM1xcdTAwRjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx1MDBGNVxcdTFFNERcXHUwMjJEXFx1MUU0RlxcdTAxNERcXHUxRTUxXFx1MUU1M1xcdTAxNEZcXHUwMjJGXFx1MDIzMVxcdTAwRjZcXHUwMjJCXFx1MUVDRlxcdTAxNTFcXHUwMUQyXFx1MDIwRFxcdTAyMEZcXHUwMUExXFx1MUVERFxcdTFFREJcXHUxRUUxXFx1MUVERlxcdTFFRTNcXHUxRUNEXFx1MUVEOVxcdTAxRUJcXHUwMUVEXFx1MDBGOFxcdTAxRkZcXHUwMjU0XFx1QTc0QlxcdUE3NERcXHUwMjc1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvaVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUEzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMjIzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzRGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJwXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3MVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJyXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJzXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzNcXHUyNEUyXFx1RkY1M1xcdTAwREZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ0elwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ1XCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzVcXHUyNEU0XFx1RkY1NVxcdTAwRjlcXHUwMEZBXFx1MDBGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx1MDBGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIndcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3N1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OVxcdTI0RThcXHVGRjU5XFx1MUVGM1xcdTAwRkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx1MDBGRlxcdTFFRjdcXHUxRTk5XFx1MUVGNVxcdTAxQjRcXHUwMjRGXFx1MUVGRl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwielwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDdBXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M10vZyxcclxuICB9LFxyXG5dO1xyXG52YXIgZG9tYWlucyA9IFtcclxuICBcIi5jb21cIixcclxuICBcIi5vcmdcIixcclxuICBcIi5uZXRcIixcclxuICBcIi5hY1wiLFxyXG4gIFwiLmFkXCIsXHJcbiAgXCIuYWVcIixcclxuICBcIi5hZlwiLFxyXG4gIFwiLmFnXCIsXHJcbiAgXCIuYWlcIixcclxuICBcIi5hbFwiLFxyXG4gIFwiLmFtXCIsXHJcbiAgXCIuYW9cIixcclxuICBcIi5hcVwiLFxyXG4gIFwiLmFyXCIsXHJcbiAgXCIuYXNcIixcclxuICBcIi5hdFwiLFxyXG4gIFwiLmF1XCIsXHJcbiAgXCIuYXdcIixcclxuICBcIi5heFwiLFxyXG4gIFwiLmF6XCIsXHJcbiAgXCIuYmFcIixcclxuICBcIi5iYlwiLFxyXG4gIFwiLmJkXCIsXHJcbiAgXCIuYmVcIixcclxuICBcIi5iZlwiLFxyXG4gIFwiLmJnXCIsXHJcbiAgXCIuYmhcIixcclxuICBcIi5iaVwiLFxyXG4gIFwiLmJqXCIsXHJcbiAgXCIuYm1cIixcclxuICBcIi5iblwiLFxyXG4gIFwiLmJvXCIsXHJcbiAgXCIuYnFcIixcclxuICBcIi5iclwiLFxyXG4gIFwiLmJzXCIsXHJcbiAgXCIuYnRcIixcclxuICBcIi5id1wiLFxyXG4gIFwiLmJ5XCIsXHJcbiAgXCIuYnpcIixcclxuICBcIi5jYVwiLFxyXG4gIFwiLmNjXCIsXHJcbiAgXCIuY2RcIixcclxuICBcIi5jZlwiLFxyXG4gIFwiLmNnXCIsXHJcbiAgXCIuY2hcIixcclxuICBcIi5jaVwiLFxyXG4gIFwiLmNrXCIsXHJcbiAgXCIuY2xcIixcclxuICBcIi5jbVwiLFxyXG4gIFwiLmNuXCIsXHJcbiAgXCIuY29cIixcclxuICBcIi5jclwiLFxyXG4gIFwiLmN1XCIsXHJcbiAgXCIuY3ZcIixcclxuICBcIi5jd1wiLFxyXG4gIFwiLmN4XCIsXHJcbiAgXCIuY3lcIixcclxuICBcIi5jelwiLFxyXG4gIFwiLmRlXCIsXHJcbiAgXCIuZGpcIixcclxuICBcIi5ka1wiLFxyXG4gIFwiLmRtXCIsXHJcbiAgXCIuZG9cIixcclxuICBcIi5kelwiLFxyXG4gIFwiLmVjXCIsXHJcbiAgXCIuZWVcIixcclxuICBcIi5lZ1wiLFxyXG4gIFwiLmVoXCIsXHJcbiAgXCIuZXJcIixcclxuICBcIi5lc1wiLFxyXG4gIFwiLmV0XCIsXHJcbiAgXCIuZXVcIixcclxuICBcIi5maVwiLFxyXG4gIFwiLmZqXCIsXHJcbiAgXCIuZmtcIixcclxuICBcIi5mbVwiLFxyXG4gIFwiLmZvXCIsXHJcbiAgXCIuZnJcIixcclxuICBcIi5nYVwiLFxyXG4gIFwiLmdkXCIsXHJcbiAgXCIuZ2VcIixcclxuICBcIi5nZlwiLFxyXG4gIFwiLmdnXCIsXHJcbiAgXCIuZ2hcIixcclxuICBcIi5naVwiLFxyXG4gIFwiLmdsXCIsXHJcbiAgXCIuZ21cIixcclxuICBcIi5nblwiLFxyXG4gIFwiLmdwXCIsXHJcbiAgXCIuZ3FcIixcclxuICBcIi5nclwiLFxyXG4gIFwiLmdzXCIsXHJcbiAgXCIuZ3RcIixcclxuICBcIi5ndVwiLFxyXG4gIFwiLmd3XCIsXHJcbiAgXCIuZ3lcIixcclxuICBcIi5oa1wiLFxyXG4gIFwiLmhtXCIsXHJcbiAgXCIuaG5cIixcclxuICBcIi5oclwiLFxyXG4gIFwiLmh0XCIsXHJcbiAgXCIuaHVcIixcclxuICBcIi5pZFwiLFxyXG4gIFwiLmllXCIsXHJcbiAgXCIuaWxcIixcclxuICBcIi5pbVwiLFxyXG4gIFwiLmluXCIsXHJcbiAgXCIuaW9cIixcclxuICBcIi5pcVwiLFxyXG4gIFwiLmlyXCIsXHJcbiAgXCIuaXNcIixcclxuICBcIi5pdFwiLFxyXG4gIFwiLmplXCIsXHJcbiAgXCIuam1cIixcclxuICBcIi5qb1wiLFxyXG4gIFwiLmpwXCIsXHJcbiAgXCIua2VcIixcclxuICBcIi5rZ1wiLFxyXG4gIFwiLmtoXCIsXHJcbiAgXCIua2lcIixcclxuICBcIi5rbVwiLFxyXG4gIFwiLmtuXCIsXHJcbiAgXCIua3BcIixcclxuICBcIi5rclwiLFxyXG4gIFwiLmt3XCIsXHJcbiAgXCIua3lcIixcclxuICBcIi5relwiLFxyXG4gIFwiLmxhXCIsXHJcbiAgXCIubGJcIixcclxuICBcIi5sY1wiLFxyXG4gIFwiLmxpXCIsXHJcbiAgXCIubGtcIixcclxuICBcIi5sclwiLFxyXG4gIFwiLmxzXCIsXHJcbiAgXCIubHRcIixcclxuICBcIi5sdVwiLFxyXG4gIFwiLmx2XCIsXHJcbiAgXCIubHlcIixcclxuICBcIi5tYVwiLFxyXG4gIFwiLm1jXCIsXHJcbiAgXCIubWRcIixcclxuICBcIi5tZVwiLFxyXG4gIFwiLm1nXCIsXHJcbiAgXCIubWhcIixcclxuICBcIi5ta1wiLFxyXG4gIFwiLm1sXCIsXHJcbiAgXCIubW1cIixcclxuICBcIi5tblwiLFxyXG4gIFwiLm1vXCIsXHJcbiAgXCIubXBcIixcclxuICBcIi5tcVwiLFxyXG4gIFwiLm1yXCIsXHJcbiAgXCIubXNcIixcclxuICBcIi5tdFwiLFxyXG4gIFwiLm11XCIsXHJcbiAgXCIubXZcIixcclxuICBcIi5td1wiLFxyXG4gIFwiLm14XCIsXHJcbiAgXCIubXlcIixcclxuICBcIi5telwiLFxyXG4gIFwiLm5hXCIsXHJcbiAgXCIubmNcIixcclxuICBcIi5uZVwiLFxyXG4gIFwiLm5mXCIsXHJcbiAgXCIubmdcIixcclxuICBcIi5uaVwiLFxyXG4gIFwiLm5sXCIsXHJcbiAgXCIubm9cIixcclxuICBcIi5ucFwiLFxyXG4gIFwiLm5yXCIsXHJcbiAgXCIubnVcIixcclxuICBcIi5uelwiLFxyXG4gIFwiLm9tXCIsXHJcbiAgXCIucGFcIixcclxuICBcIi5wZVwiLFxyXG4gIFwiLnBmXCIsXHJcbiAgXCIucGdcIixcclxuICBcIi5waFwiLFxyXG4gIFwiLnBrXCIsXHJcbiAgXCIucGxcIixcclxuICBcIi5wbVwiLFxyXG4gIFwiLnBuXCIsXHJcbiAgXCIucHJcIixcclxuICBcIi5wc1wiLFxyXG4gIFwiLnB0XCIsXHJcbiAgXCIucHdcIixcclxuICBcIi5weVwiLFxyXG4gIFwiLnFhXCIsXHJcbiAgXCIucmVcIixcclxuICBcIi5yb1wiLFxyXG4gIFwiLnJzXCIsXHJcbiAgXCIucnVcIixcclxuICBcIi5yd1wiLFxyXG4gIFwiLnNhXCIsXHJcbiAgXCIuc2JcIixcclxuICBcIi5zY1wiLFxyXG4gIFwiLnNkXCIsXHJcbiAgXCIuc2VcIixcclxuICBcIi5zZ1wiLFxyXG4gIFwiLnNoXCIsXHJcbiAgXCIuc2lcIixcclxuICBcIi5za1wiLFxyXG4gIFwiLnNsXCIsXHJcbiAgXCIuc21cIixcclxuICBcIi5zblwiLFxyXG4gIFwiLnNvXCIsXHJcbiAgXCIuc3JcIixcclxuICBcIi5zc1wiLFxyXG4gIFwiLnN0XCIsXHJcbiAgXCIuc3VcIixcclxuICBcIi5zdlwiLFxyXG4gIFwiLnN4XCIsXHJcbiAgXCIuc3lcIixcclxuICBcIi5zelwiLFxyXG4gIFwiLnRjXCIsXHJcbiAgXCIudGRcIixcclxuICBcIi50ZlwiLFxyXG4gIFwiLnRnXCIsXHJcbiAgXCIudGhcIixcclxuICBcIi50alwiLFxyXG4gIFwiLnRrXCIsXHJcbiAgXCIudGxcIixcclxuICBcIi50bVwiLFxyXG4gIFwiLnRuXCIsXHJcbiAgXCIudG9cIixcclxuICBcIi50clwiLFxyXG4gIFwiLnR0XCIsXHJcbiAgXCIudHZcIixcclxuICBcIi50d1wiLFxyXG4gIFwiLnR6XCIsXHJcbiAgXCIudWFcIixcclxuICBcIi51Z1wiLFxyXG4gIFwiLnVrXCIsXHJcbiAgXCIudXNcIixcclxuICBcIi51eVwiLFxyXG4gIFwiLnV6XCIsXHJcbiAgXCIudmFcIixcclxuICBcIi52Y1wiLFxyXG4gIFwiLnZlXCIsXHJcbiAgXCIudmdcIixcclxuICBcIi52aVwiLFxyXG4gIFwiLnZuXCIsXHJcbiAgXCIudnVcIixcclxuICBcIi53ZlwiLFxyXG4gIFwiLndzXCIsXHJcbiAgXCIueWVcIixcclxuICBcIi55dFwiLFxyXG4gIFwiLnphXCIsXHJcbiAgXCIuem1cIixcclxuICBcIi56d1wiLFxyXG5dO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlRGlhY3JpdGljc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAucmVkdWNlKChyZXN1bHQsIGxldHRlcikgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzdWx0LnJlcGxhY2UobGV0dGVyLmxldHRlcnMsIGxldHRlci5iYXNlKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgU1BFQ0lBTF9DSEFSQUNURVJTID0gXCJcXFxcXFxcXC8gIT9AIyQlXiYqKClfKzoue30sO1xcXFwtJ2Bg4oCZ4oCYXFxcIlwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFske1NQRUNJQUxfQ0hBUkFDVEVSU31dYCwgXCJnaVwiKSwgXCJcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVBbGxCdXRMZXR0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9Mb3dlckNhc2UoKS5yZW1vdmVEaWFjcml0aWNzKCkucmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMoKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNvbmNlYWxcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZXh0cmEpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChgW14ke1NQRUNJQUxfQ0hBUkFDVEVSU30ke2V4dHJhfV1gLCBcImdpXCIpLCBcIuKBjlwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNhcGl0YWxpemVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc2xpY2UoMSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVIVE1MXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShcIj5cIiwgXCJcXHUyMjdCXCIpLnJlcGxhY2UoXCI8XCIsIFwiXFx1MjI3QVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInBhcnNlU3ltYm9sc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2VBbGwoXCImXCIsIFwiJmFtcDtcIikucmVwbGFjZShcIjxcIiwgXCImbHQ7XCIpLnJlcGxhY2UoXCI+XCIsIFwiJmd0O1wiKS5yZXBsYWNlQWxsKFwiI1wiLCBcIiZudW07XCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVwbGFjZUFycmF5XCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGZpbmQsIHJlcGxhY2UpIHtcclxuICAgIHZhciByZXBsYWNlU3RyaW5nID0gdGhpcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmluZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICByZXBsYWNlU3RyaW5nID0gcmVwbGFjZVN0cmluZy5yZXBsYWNlKGZpbmRbaV0sIHJlcGxhY2VbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcGxhY2VTdHJpbmc7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJtYXNrVVJMc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2VBcnJheShbXCJodHRwczovL1wiLCBcImh0dHA6Ly9cIl0sIFwibm9wZTovL1wiKS5yZXBsYWNlQXJyYXkoZG9tYWlucywgXCIubm9wZVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VSZWFkYWJsZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwibWFrZVBlcmNlbnRhZ2VcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZGVjaW1hbHMpIHtcclxuICAgIGlmIChkZWNpbWFscyA9PT0gdW5kZWZpbmVkKSBkZWNpbWFscyA9IDI7XHJcbiAgICByZXR1cm4gYCR7KHRoaXMgKiAxMDApLnRvRml4ZWQoZGVjaW1hbHMpfSVgO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc29ydE9iamVjdCA9IChvYmosIGRpcmVjdGlvbikgPT4ge1xyXG4gIGxldCBhcnIgPSBbXTtcclxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgIGFyci5wdXNoKFtrZXksIG9ialtrZXldXSk7XHJcbiAgfVxyXG4gIGFyci5zb3J0KChhLCBiKSA9PiAoZGlyZWN0aW9uID8gYVsxXSAtIGJbMV0gOiBiWzFdIC0gYVsxXSkpO1xyXG4gIGxldCBvYmpTb3J0ZWQgPSB7fTtcclxuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4gKG9ialNvcnRlZFtpdGVtWzBdXSA9IGl0ZW1bMV0pKTtcclxuICAvL2Fyci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgYS52YWx1ZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi52YWx1ZS50b0xvd2VyQ2FzZSgpKTsgfSk7IC8vdXNlIHRoaXMgdG8gc29ydCBhcyBzdHJpbmdzXHJcbiAgcmV0dXJuIG9ialNvcnRlZDsgLy8gcmV0dXJucyBhcnJheVxyXG59O1xyXG4iLCIvKlxyXG4kID0galF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbnZhciBib290c3RyYXAgPSByZXF1aXJlKCdib290c3RyYXAnKTtcclxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XHJcbnZhciBhbmd1bGFyU2FuaXRpemUgPSByZXF1aXJlKCdhbmd1bGFyLXNhbml0aXplJyk7XHJcbnZhciBhbmd1bGFyQW5pbWF0ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItYW5pbWF0ZScpO1xyXG4qL1xyXG5hbmd1bGFyLm1vZHVsZShcImFwcFwiLCBbXHJcbiAgXCJ1aS5yb3V0ZXJcIixcclxuICBcInVpLmJvb3RzdHJhcFwiLFxyXG4gIFwibmdBbmltYXRlXCIsXHJcbiAgXCJuZ1Nhbml0aXplXCIsXHJcbiAgXCJuZ0RyYWdEcm9wXCIsXHJcbiAgXCJuZ1RhZ3NJbnB1dFwiLFxyXG4gIFwidmNSZWNhcHRjaGFcIixcclxuICBcImNoYXJ0LmpzXCIsXHJcbiAgXCJ0Yy5jaGFydGpzXCIsXHJcbiAgXCJpbmZpbml0ZS1zY3JvbGxcIixcclxuXSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJHVybFNlcnZpY2VQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcclxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwiL2hvbWVcIik7XHJcbiAgJHVybFNlcnZpY2VQcm92aWRlci5jb25maWcuc3RyaWN0TW9kZShmYWxzZSk7XHJcblxyXG4gICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAuc3RhdGUoXCJob21lXCIsIHtcclxuICAgICAgdXJsOiBcIi9ob21lXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9ob21lLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwb2xpY3lcIiwge1xyXG4gICAgICB1cmw6IFwiL3BvbGljeVwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcG9saWN5Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwcmludFwiLCB7XHJcbiAgICAgIHVybDogXCIvcHJpbnRcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3ByaW50Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJleHBlcmllbmNlXCIsIHtcclxuICAgICAgdXJsOiBcIi9leHBlcmllbmNlXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiRXhwZXJpZW5jZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2V4cGVyaWVuY2UuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInNraWxsc1wiLCB7XHJcbiAgICAgIHVybDogXCIvc2tpbGxzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiU2tpbGxzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvc2tpbGxzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJob2JiaWVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9ob2JiaWVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiSG9iYmllc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2hvYmJpZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImNvbnRhY3RcIiwge1xyXG4gICAgICB1cmw6IFwiL2NvbnRhY3RcIixcclxuICAgICAgY29udHJvbGxlcjogXCJDb250YWN0Q3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvY29udGFjdC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwid29ya291dFwiLCB7XHJcbiAgICAgIHVybDogXCIvd29ya291dFwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIldvcmtvdXRDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi93b3Jrb3V0Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwb3N0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvcG9zdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJQb3N0c0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3Bvc3RzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwcm9maWxlXCIsIHtcclxuICAgICAgdXJsOiBcIi9wcm9maWxlXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUHJvZmlsZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3Byb2ZpbGUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImxpc3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9saXN0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkxpc3RzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJsaXN0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYnViYmxlc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYnViYmxlc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkJ1YmJsZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImJ1YmJsZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImFzdGVyb2lkc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYXN0ZXJvaWRzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQXN0ZXJvaWRzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJhc3Rlcm9pZHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImxlbW1pbmdzXCIsIHtcclxuICAgICAgdXJsOiBcIi9sZW1taW5nc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkxlbW1pbmdzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJsZW1taW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYm90c1wiLCB7XHJcbiAgICAgIHVybDogXCIvYm90c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3NcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5nc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3MtYWRtaW5cIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy1hZG1pblwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0FkbWluQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MtYWRtaW4uaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1nYW1lXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3MvOmdhbWVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NHYW1lQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MtZ2FtZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLXN0YXRzXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3Mtc3RhdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NTdGF0c0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLXN0YXRzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWdvb2dsZVwiLCB7XHJcbiAgICAgIHVybDogXCIvZ29vZ2xlXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekdvb2dsZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9nb29nbGUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotbG9nb3NcIiwge1xyXG4gICAgICB1cmw6IFwiL2xvZ29zXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekxvZ29zQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL2xvZ29zLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWFuaW1hbHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2FuaW1hbHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6QW5pbWFsc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9hbmltYWxzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LXNrZWxldG9uc1wiLCB7XHJcbiAgICAgIHVybDogXCIvc2tlbGV0b25zXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpelNrZWxldG9uc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9za2VsZXRvbnMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotbW92aWVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9tb3ZpZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6TW92aWVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL21vdmllcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiY2hhcmFkZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2NoYXJhZGVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQ2hhcmFkZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9jaGFyYWRlcy5odG1sXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHtcclxuICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICByZXF1aXJlQmFzZTogZmFsc2UsXHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ1dlYlNvY2tldFN2YycsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkdGltZW91dCkge1xyXG4gIGZ1bmN0aW9uIHdlYnNvY2tldEhvc3QoKSB7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6Jykge1xyXG4gICAgICByZXR1cm4gXCJ3c3M6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwid3M6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGNvbm5lY3Rpb247XHJcbiAgdmFyIGNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25uZWN0aW9uID0gbmV3IFdlYlNvY2tldCh3ZWJzb2NrZXRIb3N0KCkpO1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25vcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnV2Vic29ja2V0IGNvbm5lY3RlZCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9uY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnV2Vic29ja2V0IGNsb3NlZC4gUmVjb25uZWN0aW5nLi4uJyk7XHJcbiAgICAgICR0aW1lb3V0KGNvbm5lY3QsIDEwMDApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZSArIFwiIC0gU3RhdGU6IFwiICsgY29ubmVjdGlvbi5yZWFkeVN0YXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgcGF5bG9hZCA9IEpTT04ucGFyc2UoZS5kYXRhKTtcclxuICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCd3czonICsgcGF5bG9hZC50b3BpYywgcGF5bG9hZC5kYXRhKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5zZW5kID0gZnVuY3Rpb24gKHRvcGljLCBkYXRhKSB7XHJcbiAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KHt0b3BpYzogdG9waWMsIGRhdGE6IGRhdGF9KTtcclxuICAgIGNvbm5lY3Rpb24uc2VuZChqc29uKTtcclxuICB9O1xyXG5cclxuICB0aGlzLmNvbm5lY3QgPSBjb25uZWN0O1xyXG5cclxufSkucnVuKGZ1bmN0aW9uIChXZWJTb2NrZXRTdmMpIHtcclxuICBXZWJTb2NrZXRTdmMuY29ubmVjdCgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuZGlyZWN0aXZlKFwiY2xpY2tPdXRzaWRlXCIsIGZ1bmN0aW9uICgkZG9jdW1lbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVzdHJpY3Q6IFwiQVwiLFxyXG4gICAgc2NvcGU6IHtcclxuICAgICAgY2xpY2tPdXRzaWRlOiBcIiZcIixcclxuICAgIH0sXHJcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRyKSB7XHJcbiAgICAgICRkb2N1bWVudC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGVsICE9PSBlLnRhcmdldCAmJiAhZWxbMF0uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL3Njb3BlLiRwYXJlbnQuc2V0U2VsZWN0ZWRMaXN0KCk7XHJcbiAgICAgICAgICAgIHNjb3BlLiRldmFsKHNjb3BlLmNsaWNrT3V0c2lkZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcblx0LmRpcmVjdGl2ZSgnaGVhZCcsIFtcclxuXHRcdCckcm9vdFNjb3BlJyxcclxuXHRcdCckc3RhdGUnLFxyXG5cdFx0JyRjb21waWxlJyxcclxuXHRcdCckaW50ZXJwb2xhdGUnLFxyXG5cdFx0ZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgJGNvbXBpbGUsICRpbnRlcnBvbGF0ZSkge1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlID0gZnVuY3Rpb24gZ2V0U3R5bGUodGVtcGxhdGVTdHlsZVVybCkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3R5bGUgPSB7XHJcblx0XHRcdFx0XHRocmVmOiB0ZW1wbGF0ZVN0eWxlVXJsLFxyXG5cdFx0XHRcdFx0cmVsOiAnc3R5bGVzaGVldCdcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRpZiAoc3R5bGUuaHJlZi5tYXRjaCgvXFwubGVzcyQvKSkge1xyXG5cdFx0XHRcdFx0c3R5bGUucmVsID0gJ3N0eWxlc2hlZXQvbGVzcyc7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIGdldFN0eWxlcyhzdGF0ZSkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3RhdGVzID0ge307XHJcblxyXG5cdFx0XHRcdC8vQ2hlY2sgc3RhdGUgZm9yIHN0eWxlc1xyXG5cdFx0XHRcdHdoaWxlIChzdGF0ZS5uYW1lICE9PSAnJykge1xyXG5cdFx0XHRcdFx0dmFyIHBhcmVudCA9ICRzdGF0ZS5nZXQoJ14nLCBzdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0Ly9Jbml0aWF0ZSBvdXIgdmlldyBsaXN0XHJcblx0XHRcdFx0XHRpZiAoIXN0YXRlc1twYXJlbnQubmFtZV0pIHtcclxuXHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXSA9IHt9O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ2hlY2sgdGhlIHRlbXBsYXRlU3R5bGVcclxuXHRcdFx0XHRcdGlmIChzdGF0ZS50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXVsnJ10pIHtcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSA9IGdldFN0eWxlKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB2aWV3c1xyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnZpZXdzKSB7XHJcblx0XHRcdFx0XHRcdF8uZm9yRWFjaChzdGF0ZS52aWV3cywgZnVuY3Rpb24gKHZpZXcsIGtleSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgYSBzdHlsZVxyXG5cdFx0XHRcdFx0XHRcdGlmICghdmlldy50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGFyZSB0YXJnZXRpbmcgc29tZSBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRpZiAoKGtleSA9IGtleS5zcGxpdCgnQCcpKVsxXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBoYXZlIHN0eWxlcyBmb3IgdGhhdCBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGVzW2tleVsxXV0gPSB7fTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBzb21lIHBhcmVudCdzIHZpZXdcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV1ba2V5WzBdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBvdXIgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1ba2V5WzBdXSA9IGdldFN0eWxlKHZpZXcudGVtcGxhdGVTdHlsZVVybCk7XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NvbnRpbnVlIHdpdGggdGhlIHBhcmVudFxyXG5cdFx0XHRcdFx0c3RhdGUgPSBwYXJlbnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL0ZsYXR0ZW4gdGhlIGxpc3RcclxuXHRcdFx0XHR2YXIgZmxhdCA9IFtdO1xyXG5cdFx0XHRcdF8uZm9yRWFjaChzdGF0ZXMsIGZ1bmN0aW9uICh2aWV3cykge1xyXG5cclxuXHRcdFx0XHRcdF8uZm9yRWFjaCh2aWV3cywgZnVuY3Rpb24gKHN0eWxlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIV8uaW5jbHVkZXMoZmxhdCwgc3R5bGUpKSB7XHJcblx0XHRcdFx0XHRcdFx0ZmxhdC5wdXNoKHN0eWxlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly9SZXZlcnNlIGl0IHNvIHdlIGhhdmUgYSBwcm9wZXIgaGllcmFyY2h5XHJcblx0XHRcdFx0ZmxhdC5yZXZlcnNlKCk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBmbGF0O1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdFx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0pIHtcclxuXHJcblx0XHRcdFx0XHRzY29wZS50ZW1wbGF0ZVN0eWxlcyA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdHZhciBodG1sID0gJzxsaW5rIG5nLWF0dHItcmVsPVwie3tzdHlsZS5yZWx9fVwiIG5nLXJlcGVhdD1cInN0eWxlIGluIHRlbXBsYXRlU3R5bGVzXCIgbmctaHJlZj1cInt7c3R5bGUuaHJlZn19XCI+JztcclxuXHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXHtcXHsvZywgJGludGVycG9sYXRlLnN0YXJ0U3ltYm9sKCkpO1xyXG5cdFx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvXFx9XFx9L2csICRpbnRlcnBvbGF0ZS5lbmRTeW1ib2woKSk7XHJcblxyXG5cdFx0XHRcdFx0ZWxlbS5hcHBlbmQoJGNvbXBpbGUoaHRtbCkoc2NvcGUpKTtcclxuXHJcblx0XHRcdFx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpIHtcclxuXHJcblx0XHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gZ2V0U3R5bGVzKHRvU3RhdGUpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0fVxyXG5cdF0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQXBwQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBMYW5ndWFnZVN2YywgVXNlclN2Yykge1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCIlY1lvdSBzbmVha3kgYnVnZ2VyIVwiLFxyXG4gICAgXCJmb250OiAyZW0gc2Fucy1zZXJpZjsgY29sb3I6IERvZGdlckJsdWU7IHRleHQtc2hhZG93OiAycHggMCAwICM0NDQsIC0ycHggMCAwICM0NDQsIDAgMnB4IDAgIzQ0NCwgMCAtMnB4IDAgIzQ0NCwgMXB4IDFweCAjNDQ0LCAtMXB4IC0xcHggMCAjNDQ0LCAxcHggLTFweCAwICM0NDQsIC0xcHggMXB4IDAgIzQ0NDtcIixcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCJJJ20gZ2xhZCB5b3UncmUgY3VyaW91cyB3aGV0aGVyIHNvbWV0aGluZyBpcyBwb3BwaW5nIHVwIGluIGhlcmUuIEknbSBhIGJpdCBvZiBhIHN0aWNrbGVyIHdoZW4gaXQgY29tZXMgdG8gbWVzc2FnZXMgaW4gdGhlIGNvbnNvbGUgc28gSSB0cnkgdG8gbWFrZSBzdXJlIG9ubHkgdGhpbmdzIEkgd2FudCBhcmUgdmlzaWJsZS4gVGhhdCBiZWluZyBzYWlkLCBpZiB0aGVyZSBpcyBhIGJpZyBlcnJvciBoZXJlLCBJIHdvdWxkIHJlYWxseSBhcHByZWNpYXRlIHlvdSB0ZWxsaW5nIG1lIHNvIEkgY2FuIGdldCByaWQgb2YgaXQhXCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiVGhlIGNvZGUgZm9yIG15IHJlc3VtZSBpcyBob3N0ZWQgb24gR2l0aHViIGlmIHlvdSByZWFsbHkgd2FudCB0byBnbyBpbnRvIGFsbCB0aGlzISA9PiBodHRwczovL2dpdGh1Yi5jb20vRmxhbmRlcnNCdXJnZXIvcmVzdW1lXCIsXHJcbiAgKTtcclxuXHJcbiAgLypcclxuICAgICQoZG9jdW1lbnQpLmJpbmQoXCJrZXl1cCBrZXlkb3duXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBpZihlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09IDgwKXtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAqL1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICAkKHdpbmRvdykubG9hZChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLmxvYWRpbmdcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAkKFwiLmNvbnRlbnRcIikuZmFkZUluKFwic2xvd1wiKTtcclxuICB9KTtcclxuXHJcbiAgJChcIi5jaGVja2JveC1tZW51XCIpLm9uKFwiY2hhbmdlXCIsIFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoXCJsaVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiLCB0aGlzLmNoZWNrZWQpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmFsbG93LWZvY3VzXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUudGhlbWVDb3VudGVyID0gNjtcclxuICAkc2NvcGUudG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICRzY29wZS55ZWFyID0gJHNjb3BlLnRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgJHNjb3BlLnJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xyXG5cclxuICAkc2NvcGUuZmxpcFRoZW1lID0gKCkgPT4ge1xyXG4gICAgJChcIi5sb2FkaW5nXCIpLnNob3coKTtcclxuICAgICQoXCIuY29udGVudFwiKS5oaWRlKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIi5sb2FkaW5nXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgICAkKFwiLmNvbnRlbnRcIikuZmFkZUluKFwic2xvd1wiKTtcclxuICAgIH0sIDgwMCk7XHJcbiAgICAkc2NvcGUudGhlbWVDb3VudGVyID0gJHNjb3BlLnRoZW1lQ291bnRlciA8IDYgPyAkc2NvcGUudGhlbWVDb3VudGVyICsgMSA6ICgkc2NvcGUudGhlbWVDb3VudGVyID0gMSk7XHJcbiAgfTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL3NraWxscy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuc2tpbGxzID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKHNraWxsKSB7XHJcbiAgICAgIHJldHVybiBza2lsbC5lbmFibGVkO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9ob2JiaWVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5ob2JiaWVzID0gZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2V4cGVyaWVuY2UuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmpvYnMgPSBkYXRhO1xyXG4gICAgJHNjb3BlLmpvYnMuZm9yRWFjaCgoam9iKSA9PiB7XHJcbiAgICAgIGpvYi5zdGFydERhdGUgPSBuZXcgRGF0ZShqb2Iuc3RhcnREYXRlKTtcclxuICAgICAgaWYgKGpvYi5lbmREYXRlKSBqb2IuZW5kRGF0ZSA9IG5ldyBEYXRlKGpvYi5lbmREYXRlKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvY2hhcmFkZXMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmNoYXJhZGVzID0gZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmdldFRpbWVTcGFuID0gKGpvYikgPT4ge1xyXG4gICAgcmV0dXJuIGpvYi5zdGFydERhdGUuZ2V0RnVsbFllYXIoKSArIChqb2IuZW5kRGF0ZSA/IFwiIC0gXCIgKyBqb2IuZW5kRGF0ZS5nZXRGdWxsWWVhcigpIDogXCIgLSBUb2RheVwiKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUubGFuZ3VhZ2VzID0gTGFuZ3VhZ2VTdmMubGFuZ3VhZ2VzO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IExhbmd1YWdlU3ZjLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICRzY29wZS5zZWxlY3RMYW5ndWFnZSA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBMYW5ndWFnZVN2Yy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmhvdmVyZGl2ID0gKGUsIGRpdmlkKSA9PiB7XHJcbiAgICB2YXIgbGVmdCA9IGUuY2xpZW50WCArIFwicHhcIjtcclxuICAgIHZhciB0b3AgPSBlLmNsaWVudFkgKyAyMCArIFwicHhcIjtcclxuXHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2aWQpO1xyXG5cclxuICAgICQoXCIjXCIgKyBkaXZpZCkuY3NzKFwibGVmdFwiLCBsZWZ0KTtcclxuICAgICQoXCIjXCIgKyBkaXZpZCkuY3NzKFwidG9wXCIsIHRvcCk7XHJcblxyXG4gICAgJChcIiNcIiArIGRpdmlkKS50b2dnbGUoKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS51c2VyKSB7XHJcbiAgICBVc2VyU3ZjLmxvZ2luKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgbG9naW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2dpblwiLCAoXywgdXNlcikgPT4ge1xyXG4gICAgbG9naW4odXNlcik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcclxuICAgIGlmICghJHNjb3BlLmxvZ2dlZEluKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlciA9IHVzZXIuX2lkO1xyXG4gICAgICAkc2NvcGUubG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgICAkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlID0gbmV3IERhdGUoJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSk7XHJcbiAgICAgICRzY29wZS4kYnJvYWRjYXN0KFwibG9naW5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLiRvbihcInVwZGF0ZVwiLCAoXywgdXNlcikgPT4ge1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUgPSBuZXcgRGF0ZSgkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlKTtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIiNsb2FkaW5nLWljb25cIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbihcImxvYWRpbmdcIiwgKF8sIHVzZXIpID0+IHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICQoXCIjbG9hZGluZy1pY29uXCIpLnNob3coKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbihcImxvYWRlZFwiLCAoXywgdXNlcikgPT4ge1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUubG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgZmlyZWJhc2VcclxuICAgICAgLmF1dGgoKVxyXG4gICAgICAuc2lnbk91dCgpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyBTaWduLW91dCBzdWNjZXNzZnVsLlxyXG4gICAgICAgICRzY29wZS5sb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdChcImxvZ291dFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vIEFuIGVycm9yIGhhcHBlbmVkLlxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZm9ybWF0RGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICBjb25zdCBtb250aHMgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XHJcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICByZXR1cm4gZGF0ZS5nZXREYXRlKCkgKyBcIi1cIiArIG1vbnRoc1tkYXRlLmdldE1vbnRoKCldICsgXCItXCIgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJBc3Rlcm9pZHNDdHJsXCIsIGZ1bmN0aW9uICgkbG9jYXRpb24sICRzY29wZSwgR2FtZVN2Yykge1xyXG4gICRzY29wZS5hbm5vdW5jZSA9IGZhbHNlO1xyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXN0ZXJvaWRzLXBhZ2VcIik7XHJcbiAgaWYgKCFjYW52YXMpIHtcclxuICAgICRsb2NhdGlvbi5wYXRoKFwiL2hvbWVcIik7XHJcbiAgICByZXR1cm4gYWxlcnQoXCJcIik7XHJcbiAgfVxyXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgY3R4LmZvbnQgPSBcIjMwcHggQ29taWMgU2FucyBNU1wiO1xyXG4gIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGNvbnN0IHNob3RzID0ge307XHJcbiAgY29uc3QgYXN0ZXJvaWRzID0ge307XHJcbiAgY29uc3QgcG93ZXJ1cHMgPSB7fTtcclxuICBjb25zdCBleHBsb3Npb25zID0ge307XHJcbiAgY29uc3QgbWFwID0ge307XHJcbiAgY29uc3Qgc3BhY2VwaWNzID0gMTA7XHJcbiAgY29uc3Qgc3BhY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFjZXBpY3MpO1xyXG4gIGNvbnN0IHBvd2VydXBUeXBlcyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJzcGVlZFwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiTWF4IFNwZWVkIOKHp1wiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogNCxcclxuICAgICAgICBzaXplOiBbMTQsIDM1XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAubWF4U3BlZWQgKz0gMTAwO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJjb29sZG93blwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiQ29vbGRvd24g4oepXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiAzLFxyXG4gICAgICAgIHNpemU6IFsxNywgMTddLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuY29vbGRvd25UaW1lIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJyYW5nZVwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiRmlyaW5nIFJhbmdlIOKHp1wiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDQsXHJcbiAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICBzaXplOiBbMzAsIDhdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5yYW5nZSArPSA1O1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJzaGllbGRcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIlNoaWVsZFwiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDUsXHJcbiAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICBzaXplOiBbMTksIDE5XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAuc2hpZWxkID0gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwibnVrZVwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiTnVrZVwiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogOCxcclxuICAgICAgICBzaXplOiBbMTUsIDE1XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bhd25Bc3Rlcm9pZHMoNSk7XHJcbiAgICAgIH0sXHJcbiAgICB9IC8qXHJcbiAgICAnc2lkZV9jYW5ub25zJyxcclxuICAgICdsYXNlcicsXHJcbiAgICAnc2hpZWxkJyxcclxuICAgICdsaWZlJyxcclxuICAgICdtaXNzaWxlcycsXHJcbiAgICAnbnVrZSdcclxuICAgICovLFxyXG4gIF07XHJcbiAgcG93ZXJ1cFR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHBvd2VydXAsIGksIGFycmF5KSB7XHJcbiAgICBhcnJheVtpXS5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvXCIgKyBwb3dlcnVwLm5hbWUgKyBcIi5wbmdcIjtcclxuICB9KTtcclxuXHJcbiAgdmFyIGV4cGxvc2lvbkltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgZXhwbG9zaW9uSW1hZ2Uuc3JjID0gXCJhc3Rlcm9pZHMvZXhwbG9zaW9uLnBuZ1wiO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwia2V5ZG93blwiLFxyXG4gICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgbWFwW2Uua2V5Q29kZSB8fCBlLndoaWNoXSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgdHJ1ZSxcclxuICApO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJrZXl1cFwiLFxyXG4gICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgbWFwW2Uua2V5Q29kZSB8fCBlLndoaWNoXSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHRydWUsXHJcbiAgKTtcclxuXHJcbiAgJHNjb3BlLmhpZ2hzY29yZSA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGV2YWx1YXRlS2V5cygpIHtcclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBpZiAobWFwWzMyXSkge1xyXG4gICAgICAgIC8vU3BhY2VcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLmNvb2xkb3duID09PSAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc2hvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszN10pIHtcclxuICAgICAgICAvL0xlZnQgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnJvdGF0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gPSAzNjA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiAtPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM5XSkge1xyXG4gICAgICAgIC8vUmlnaHQgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnJvdGF0aW9uID09PSAzNjApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiArPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM4XSkge1xyXG4gICAgICAgIC8vVXAgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkIDw9IHNwYWNlc2hpcC5tYXhTcGVlZCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkICs9IDU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQtLTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFs0MF0pIHtcclxuICAgICAgICAvL0Rvd24gQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkIC09IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobWFwWzMyXSkge1xyXG4gICAgICAgIHN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNwYWNlc2hpcCgpIHtcclxuICAgIHRoaXMud2lkdGggPSA1MDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gNTA7XHJcbiAgICB0aGlzLnNoaWVsZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yYW5nZSA9IDgwO1xyXG4gICAgdGhpcy5jYW5ub24gPSB7XHJcbiAgICAgIHg6IHRoaXMud2lkdGggLyAyIC0gNC41LFxyXG4gICAgICB5OiB0aGlzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAqIDAuMDc4MTI1LFxyXG4gICAgfTtcclxuICAgIHRoaXMuY29vbGRvd24gPSAwO1xyXG4gICAgdGhpcy5jb29sZG93blRpbWUgPSAyMDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbY2FudmFzLndpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0IC8gMl07XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvc3BhY2VzaGlwLnBuZ1wiO1xyXG4gICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB0aGlzLm1heFNwZWVkID0gMTAwMDtcclxuICAgIHRoaXMuYW5nbGUgPSAwO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcblxyXG4gICAgdGhpcy5zaG9vdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5jb29sZG93biA9IHRoaXMuY29vbGRvd25UaW1lO1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBzaG90c1tpZF0gPSBuZXcgU2hvdChpZCwgdGhpcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHRoaXMuc2hpZWxkKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5hcmModGhpcy5wb3NpdGlvblswXSArIHRoaXMud2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uWzFdICsgdGhpcy5oZWlnaHQgLyAyLCAzMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigzNSwgMjM3LCA4NiwgMC41KVwiO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiKDY2LCAxNjgsIDM2LCAwLjgpXCI7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICB2YXIgYXN0ZXJvaWQgPSBhc3Rlcm9pZHNbaV07XHJcbiAgICAgICAgaWYgKGhpdChhc3Rlcm9pZCwgdGhpcykpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNoaWVsZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBhc3Rlcm9pZC5leHBsb2RlKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2FtZU92ZXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmdsZSA9IHRoaXMucm90YXRpb247XHJcbiAgICAgIGlmICh0aGlzLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgIHRoaXMuY29vbGRvd24tLTtcclxuICAgICAgfVxyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNob3QoaWQsIHNwYWNlc2hpcCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzBdICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnggK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueCAqIE1hdGguY29zKCgoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSkgLyAxODApLFxyXG4gICAgICBzcGFjZXNoaXAucG9zaXRpb25bMV0gK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueSArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi55ICogTWF0aC5zaW4oKChzcGFjZXNoaXAucm90YXRpb24gLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCksXHJcbiAgICBdO1xyXG4gICAgdGhpcy53aWR0aCA9IDk7XHJcbiAgICB0aGlzLmhlaWdodCA9IDE1O1xyXG4gICAgdGhpcy5hbmdsZSA9IHNwYWNlc2hpcC5hbmdsZTtcclxuICAgIHRoaXMucm90YXRpb24gPSBzcGFjZXNoaXAucm90YXRpb247XHJcbiAgICB0aGlzLnNwZWVkID0gc3BhY2VzaGlwLnNwZWVkICsgNTAwO1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IHNwYWNlc2hpcC5yYW5nZTtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBcImFzdGVyb2lkcy9zaG90LnBuZ1wiO1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEFzdGVyb2lkKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLndpZHRoID0gTWF0aC5yYW5kb20oKSAqIDUwICsgMjA7XHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMud2lkdGg7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RW50cnlQb3NpdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5yb3RhdGlvblNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDYgLSAzO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAzMDAgKyAyO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL2FzdGVyb2lkXCIgKyAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNikgKyAxKSArIFwiLnBuZ1wiO1xyXG5cclxuICAgIHRoaXMuZXhwbG9kZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgZXhwbG9zaW9uc1t0aGlzLmlkXSA9IG5ldyBFeHBsb3Npb24odGhpcyk7XHJcbiAgICAgIHJldHVybiBkZWxldGUgYXN0ZXJvaWRzW3RoaXMuaWRdO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xyXG4gICAgICBpZiAodGhpcy5yb3RhdGlvbiA+IDM2MCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSB0aGlzLnJvdGF0aW9uIC0gMzYwO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucm90YXRpb24gPCAwKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDM2MCArIHRoaXMucm90YXRpb247XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSBpbiBzaG90cykge1xyXG4gICAgICAgIHZhciBzaG90ID0gc2hvdHNbaV07XHJcbiAgICAgICAgaWYgKGhpdChzaG90LCB0aGlzKSkge1xyXG4gICAgICAgICAgdGhpcy5leHBsb2RlKCk7XHJcbiAgICAgICAgICB2YXIgcG9pbnRzID0gTWF0aC5mbG9vcigoc2hvdC5zcGVlZCAtIDUwMCkgLyAxMCArIDcwIC0gdGhpcy53aWR0aCk7XHJcbiAgICAgICAgICBpZiAoTWF0aC5mbG9vcigocG9pbnRzICsgJHNjb3BlLnNjb3JlKSAvIDEwMCkgPiBNYXRoLmZsb29yKCRzY29wZS5zY29yZSAvIDEwMCkpIHtcclxuICAgICAgICAgICAgc3Bhd25Qb3dlcnVwKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkc2NvcGUuc2NvcmUgKz0gcG9pbnRzO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgZGVsZXRlIHNob3RzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEV4cGxvc2lvbihvYmplY3QpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbb2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV1dO1xyXG4gICAgdGhpcy53aWR0aCA9IG9iamVjdC53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gb2JqZWN0LmhlaWdodDtcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLmN5Y2xlID0ge1xyXG4gICAgICByb3dzOiA2LFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICBzaXplOiBbMjU2LCAyNTZdLFxyXG4gICAgICBpOiAwLFxyXG4gICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDQ3O1xyXG4gICAgdGhpcy5pbWcgPSBleHBsb3Npb25JbWFnZTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBQb3dlcnVwKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvd2VydXAgPSBwb3dlcnVwVHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG93ZXJ1cFR5cGVzLmxlbmd0aCldO1xyXG4gICAgdGhpcy5jeWNsZSA9IHRoaXMucG93ZXJ1cC5jeWNsZTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAxMDAwO1xyXG4gICAgaWYgKHRoaXMuY3ljbGUuc2l6ZVsxXSA+IHRoaXMuY3ljbGUuc2l6ZVswXSkge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IDQwO1xyXG4gICAgICB0aGlzLndpZHRoID0gTWF0aC5yb3VuZCgodGhpcy5oZWlnaHQgLyB0aGlzLmN5Y2xlLnNpemVbMV0pICogdGhpcy5jeWNsZS5zaXplWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSA0MDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLnJvdW5kKCh0aGlzLndpZHRoIC8gdGhpcy5jeWNsZS5zaXplWzBdKSAqIHRoaXMuY3ljbGUuc2l6ZVsxXSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RW50cnlQb3NpdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmltZyA9IHRoaXMucG93ZXJ1cC5pbWc7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMTUwICsgNTA7XHJcbiAgICB2YXIgZGVsYXkgPSA1O1xyXG4gICAgdGhpcy5tb3ZlID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBwb3dlcnVwc1t0aGlzLmlkXTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaGl0KHNwYWNlc2hpcCwgdGhpcykpIHtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2UgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5hbm5vdW5jZW1lbnQgPSB0aGlzLnBvd2VydXAuYW5ub3VuY2VtZW50O1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5hbm5vdW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHRoaXMucG93ZXJ1cC5hY3RpdmF0ZShzcGFjZXNoaXApO1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAoZGVsYXkgPD0gMCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxheSA9IDU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsYXktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmUob2JqZWN0KSB7XHJcbiAgICBvYmplY3QucG9zaXRpb25bMF0gKz0gKG9iamVjdC5zcGVlZCAvIDEwMCkgKiBNYXRoLmNvcygoKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIG9iamVjdC5wb3NpdGlvblsxXSArPSAob2JqZWN0LnNwZWVkIC8gMTAwKSAqIE1hdGguc2luKCgob2JqZWN0LmFuZ2xlIC0gOTApICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgaWYgKG9iamVjdC5wb3NpdGlvblswXSA+IGNhbnZhcy53aWR0aCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMF0gPSAtb2JqZWN0LndpZHRoO1xyXG4gICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMF0gPCAtb2JqZWN0LndpZHRoKSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IGNhbnZhcy53aWR0aDtcclxuICAgIH1cclxuICAgIGlmIChvYmplY3QucG9zaXRpb25bMV0gPiBjYW52YXMuaGVpZ2h0KSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblsxXSA9IC1vYmplY3QuaGVpZ2h0O1xyXG4gICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMV0gPCAtb2JqZWN0LmhlaWdodCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMV0gPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV0pO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShvYmplY3Qud2lkdGggLyAyLCBvYmplY3QuaGVpZ2h0IC8gMik7XHJcbiAgICBjdHgucm90YXRlKChvYmplY3Qucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBpZiAob2JqZWN0LmN5Y2xlKSB7XHJcbiAgICAgIHZhciBjb2x1bW4gPSBvYmplY3QuY3ljbGUuaSAlIG9iamVjdC5jeWNsZS5jb2x1bW5zO1xyXG4gICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcihvYmplY3QuY3ljbGUuaSAvIG9iamVjdC5jeWNsZS5jb2x1bW5zKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICBvYmplY3QuaW1nLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzBdICogY29sdW1uLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzFdICogcm93LFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzBdLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzFdLFxyXG4gICAgICAgIC1vYmplY3Qud2lkdGggLyAyLFxyXG4gICAgICAgIC1vYmplY3QuaGVpZ2h0IC8gMixcclxuICAgICAgICBvYmplY3Qud2lkdGgsXHJcbiAgICAgICAgb2JqZWN0LmhlaWdodCxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChvYmplY3QuY3ljbGUuaSA8PSAwKSB7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSAwO1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKG9iamVjdC5jeWNsZS5pID49IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MpIHtcclxuICAgICAgICBvYmplY3QuY3ljbGUuaSA9IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MgLSAxO1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3R4LmRyYXdJbWFnZShvYmplY3QuaW1nLCAtb2JqZWN0LndpZHRoIC8gMiwgLW9iamVjdC5oZWlnaHQgLyAyLCBvYmplY3Qud2lkdGgsIG9iamVjdC5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHZhciBzcGFjZXNoaXA7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIHNwYWNlc2hpcCA9IG5ldyBTcGFjZXNoaXAoKTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgIGF1dG9TcGF3bigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RW50cnlQb3NpdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB2YXIgZ3JpZFggPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciBncmlkWSA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIHgsXHJcbiAgICAgIHkgPSAwO1xyXG4gICAgaWYgKGdyaWRYID49IDEpIHtcclxuICAgICAgeCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XHJcbiAgICAgIGlmICh5ID49IDEpIHtcclxuICAgICAgICB5ID0gMCAtIGhlaWdodDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeSA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICBpZiAoZ3JpZFkgPj0gMSkge1xyXG4gICAgICAgIHggPSAwIC0gd2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFt4LCB5XTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpdChvYmplY3QxLCBvYmplY3QyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBvYmplY3QxLnBvc2l0aW9uWzBdIDwgb2JqZWN0Mi5wb3NpdGlvblswXSArIG9iamVjdDIud2lkdGggJiZcclxuICAgICAgb2JqZWN0Mi5wb3NpdGlvblswXSA8IG9iamVjdDEucG9zaXRpb25bMF0gKyBvYmplY3QxLndpZHRoICYmXHJcbiAgICAgIG9iamVjdDEucG9zaXRpb25bMV0gPCBvYmplY3QyLnBvc2l0aW9uWzFdICsgb2JqZWN0Mi5oZWlnaHQgJiZcclxuICAgICAgb2JqZWN0Mi5wb3NpdGlvblsxXSA8IG9iamVjdDEucG9zaXRpb25bMV0gKyBvYmplY3QxLmhlaWdodFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGF1dG9TcGF3bigpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhhc3Rlcm9pZHMpLmxlbmd0aCA8IDIwMCkge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH1cclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhdXRvU3Bhd24oKTtcclxuICAgICAgfSwgc3Bhd25JbnRlcnZhbCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduSW50ZXJ2YWwoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnNjb3JlIDwgMTAwMCkge1xyXG4gICAgICByZXR1cm4gMTAwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgMjAwMCkge1xyXG4gICAgICByZXR1cm4gOTAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCAzMDAwKSB7XHJcbiAgICAgIHJldHVybiA4MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDQwMDApIHtcclxuICAgICAgcmV0dXJuIDcwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNTAwMCkge1xyXG4gICAgICByZXR1cm4gNjAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA2MDAwKSB7XHJcbiAgICAgIHJldHVybiA1MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDcwMDApIHtcclxuICAgICAgcmV0dXJuIDQwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgODAwMCkge1xyXG4gICAgICByZXR1cm4gMzAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDIwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduQXN0ZXJvaWRzKGFtb3VudCkge1xyXG4gICAgdmFyIGkgPSAwO1xyXG4gICAgZG8ge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH0gd2hpbGUgKGkrKyA8PSBhbW91bnQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25Qb3dlcnVwKCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHBvd2VydXBzKS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIHBvd2VydXBzW2lkXSA9IG5ldyBQb3dlcnVwKGlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdhbWVPdmVyKCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgIGFzdGVyb2lkc1tpXS5leHBsb2RlKCk7XHJcbiAgICB9XHJcbiAgICBzaG90cyA9IHt9O1xyXG4gICAgaWYgKCRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmhpZ2hzY29yZS5hc3Rlcm9pZHMgPCAkc2NvcGUuc2NvcmUpIHtcclxuICAgICAgICAkc2NvcGUuY3VycmVudFVzZXIuaGlnaHNjb3JlLmFzdGVyb2lkcyA9ICRzY29wZS5zY29yZTtcclxuICAgICAgICBHYW1lU3ZjLnNldEhpZ2hzY29yZShcImFzdGVyb2lkc1wiLCAkc2NvcGUuY3VycmVudFVzZXIuX2lkLCAkc2NvcGUuc2NvcmUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hzY29yZSA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5oaWdoc2NvcmUgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG4gIC8vIGRyYXcgY2FudmFzLlxyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgLy8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuICAgIC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG4gICAgLy8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuICAgIHJlc2l6ZUNhbnZhcygpO1xyXG4gIH1cclxuICAvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcbiAgLy8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcbiAgLy8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcbiAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1MCA6IDEwNSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplKCk7XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG5cclxuICB2YXIgdGFsbHkgPSAwO1xyXG4gIHZhciBkaXJlY3Rpb24gPSB0cnVlO1xyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgZm9yICh2YXIgaSBpbiBzaG90cykge1xyXG4gICAgICBpZiAoc2hvdHNbaV0ubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBzaG90c1tpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG90c1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgYXN0ZXJvaWRzW2ldLm1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBwb3dlcnVwcykge1xyXG4gICAgICBwb3dlcnVwc1tpXS5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gZXhwbG9zaW9ucykge1xyXG4gICAgICBpZiAoZXhwbG9zaW9uc1tpXS5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIGV4cGxvc2lvbnNbaV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXhwbG9zaW9uc1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGV2YWx1YXRlS2V5cygpO1xyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIHNwYWNlc2hpcC5tb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgY2FudmFzLndpZHRoLCAwKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMFwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjAuMjVcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjVcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjc1XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMS4wXCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgICBjdHguZm9udCA9IFwiNjBweCBNb25vdG9uXCI7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcIkFzdGVyb2lkc1wiLCBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KFwiQXN0ZXJvaWRzXCIpLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpO1xyXG4gICAgICBjdHguZm9udCA9IFwiMjBweCBBbGRyaWNoXCI7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICBcIlByZXNzIHNwYWNlIHRvIHN0YXJ0XCIsXHJcbiAgICAgICAgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIlByZXNzIHNwYWNlIHRvIHN0YXJ0XCIpLndpZHRoIC8gMixcclxuICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMiArIDIwLFxyXG4gICAgICApO1xyXG4gICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgXCJEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5IExhdXJlbnQgRGViYWNrZXJcIixcclxuICAgICAgICBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KFwiRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyXCIpLndpZHRoIC8gMixcclxuICAgICAgICBjYW52YXMuaGVpZ2h0IC0gMzAsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0YWxseSArPSBkaXJlY3Rpb24gPyAxIDogLTE7XHJcbiAgICBpZiAodGFsbHkgPiAxMDApIHtcclxuICAgICAgdGFsbHkgPSAxMDA7XHJcbiAgICAgIGRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICh0YWxseSA8IDApIHtcclxuICAgICAgdGFsbHkgPSAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLnNwYWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiYXN0ZXJvaWRzL3NwYWNlJyArIHNwYWNlICsgJy5qcGdcIiknLFxyXG4gICAgfTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdCdWJibGVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWJibGVzLXBhZ2UnKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgdmFyIGJ1YmJsZXMgPSBbXTtcclxuICB2YXIgY29sb3JzID0gWycjZmZjMzAwJywnI2ZmNTczMycsJyNjNzAwMzknLCcjOTAwYzNlJywnIzU3MTg0NSddO1xyXG5cclxuICBmdW5jdGlvbiBCdWJibGUoKSB7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gMDtcclxuICAgIHRoaXMucmFkaXVzID0gMTtcclxuICAgIHRoaXMuZXhwYW5kaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgIHRoaXMuY2lyY3VtZmVyZW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDUwKSArIDU7XHJcbiAgICB0aGlzLm1heFJhZGl1cyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDIwMCkgKyAyMDtcclxuICAgIHRoaXMueCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aCk7XHJcbiAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0KTtcclxuICAgIHRoaXMudnggPSAoTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTEpO1xyXG4gICAgdGhpcy52eSA9IChNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgYnViYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGJ1YmJsZSkge1xyXG4gICAgICB2YXIgY29sb3IgPSBjb2xvcnNbTWF0aC5yb3VuZChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKGJ1YmJsZS54LCBidWJibGUueSwgYnViYmxlLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3JzW01hdGgucm91bmQoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1tjb2xvcnMubGVuZ3RoIC0gTWF0aC5yb3VuZChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9IGJ1YmJsZS5jaXJjdW1mZXJlbmNlICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXM7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmlsdGVyQnViYmxlcygpIHtcclxuICAgIGJ1YmJsZXMucHVzaChuZXcgQnViYmxlKCkpO1xyXG4gICAgYnViYmxlcyA9IGJ1YmJsZXMuZmlsdGVyKGZ1bmN0aW9uIChidWJibGUpIHtcclxuICAgICAgaWYgKGJ1YmJsZS5yYWRpdXMgPT09IGJ1YmJsZS5tYXhSYWRpdXMpIHtcclxuICAgICAgICBidWJibGUuZXhwYW5kaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgYnViYmxlLnggKz0gYnViYmxlLnZ4ICogYnViYmxlLnNwZWVkO1xyXG4gICAgICBidWJibGUueSArPSBidWJibGUudnkgKiBidWJibGUuc3BlZWQ7XHJcbiAgICAgIGJ1YmJsZS5yYWRpdXMgKz0gKGJ1YmJsZS5leHBhbmRpbmcgPyAxIDogLTEpO1xyXG4gICAgICByZXR1cm4gYnViYmxlLnJhZGl1cyA+IDA7XHJcbiAgICB9KTtcclxuICAgIGRyYXcoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuXHJcblxyXG5cdChmdW5jdGlvbigpIHtcclxuXHJcblx0XHQvLyBTdGFydCBsaXN0ZW5pbmcgdG8gcmVzaXplIGV2ZW50cyBhbmRcclxuXHRcdC8vIGRyYXcgY2FudmFzLlxyXG5cdFx0aW5pdGlhbGl6ZSgpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHRcdC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcblx0XHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0XHQvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcblx0XHRcdC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcblx0XHRcdHJlc2l6ZUNhbnZhcygpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG5cdFx0Ly8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcblx0XHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRcdGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuXHRcdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDU1IDogMTExKTtcclxuXHRcdH1cclxuXHJcblx0fSkoKTtcclxuXHJcblxyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJDaGFyYWRlc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gICRzY29wZS5zZWxlY3RXb3JkID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAkc2NvcGUud29yZCA9ICRzY29wZS5jaGFyYWRlc1tjYXRlZ29yeV1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogJHNjb3BlLmNoYXJhZGVzW2NhdGVnb3J5XS5sZW5ndGgpXTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkNvbnRhY3RDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEVtYWlsU3ZjKSB7XHJcbiAgJHNjb3BlLm9wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU3BhbVwiLFxyXG4gICAgICB0ZXh0OiBcIkkgYW0gYSBzcGFtIGJvdCBhbmQgYXV0b21hdGljYWxseSBjaGVjayB0aGUgZmlyc3Qgb3B0aW9uIEkgZmluZCFcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiT3Bwb3J0dW5pdHlcIixcclxuICAgICAgdGV4dDogXCJZb3Ugc2VlbSB0byBoYXZlIHRoZSBza2lsbHMgSSBzZWVrLCBJJ2QgbGlrZSB0byB0YWxrIGFib3V0IHNvbWUgb3Bwb3J0dW5pdGllcy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUmVzdW1lXCIsXHJcbiAgICAgIHRleHQ6IFwiSSBkaWcgdGhlIHJlc3VtZSwgaG93IGRpZCB5b3UgbWFrZSBpdD9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiT3RoZXJcIixcclxuICAgICAgdGV4dDogXCJTdW10aW4gZWxzZSFcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgJHNjb3BlLmNvbnRhY3QgPSB7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBwaG9uZTogXCJcIixcclxuICAgIGFib3V0OiBcIlwiLFxyXG4gICAgbWVzc2FnZTogXCJcIixcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS5zZW5kaW5nID0gdHJ1ZTtcclxuICAgIEVtYWlsU3ZjLnNlbmQoe1xyXG4gICAgICBlbWFpbDogJHNjb3BlLmNvbnRhY3QuZW1haWwsXHJcbiAgICAgIG5hbWU6ICRzY29wZS5jb250YWN0Lm5hbWUsXHJcbiAgICAgIHBob25lOiAkc2NvcGUuY29udGFjdC5waG9uZSxcclxuICAgICAgYWJvdXQ6ICRzY29wZS5jb250YWN0LmFib3V0LFxyXG4gICAgICBtZXNzYWdlOiAkc2NvcGUuY29udGFjdC5tZXNzYWdlLFxyXG4gICAgfSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbnQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTUy4gc3RhdHVzPSVkLCB0ZXh0PSVzXCIsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UudGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZBSUxFRC4gZXJyb3I9XCIsIGVycik7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0V4cGVyaWVuY2VDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUuZ2V0U2tpbGwgPSBmdW5jdGlvbihza2lsbENvZGUpIHtcclxuICAgIGlmICghJHNjb3BlLnNraWxscykgcmV0dXJuO1xyXG4gICAgcmV0dXJuICRzY29wZS5za2lsbHMuZmluZChmdW5jdGlvbihza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuY29kZSA9PT0gc2tpbGxDb2RlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0hvYmJpZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xyXG5cclxuICAkc2NvcGUuaG9iYnlTZWxlY3RvclZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgJC5nZXRKU09OKCdodHRwczovL3d3dy5yZWRkaXQuY29tL3VzZXIvYmVsZ29jYW5hZGlhbi9hYm91dC8uanNvbicsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkSG9iYnkgPSAkc2NvcGUuaG9iYmllc1swXTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdEhvYmJ5ID0gZnVuY3Rpb24gKGhvYmJ5KSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRIb2JieSA9IGhvYmJ5O1xyXG4gICAgJHNjb3BlLmhvYmJ5U2VsZWN0b3JWaXNpYmxlID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNob3dIb2JieSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICBpZiAoIXZhbHVlLmltYWdlcykgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHZhbHVlLmltYWdlcy5sZW5ndGggPiAwO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xlbW1pbmdzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEdhbWVTdmMpIHtcclxuXHJcbiAgdmFyIExFRlQgPSAwO1xyXG4gIHZhciBSSUdIVCA9IDE7XHJcblxyXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVtbWluZ3MtcGFnZScpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB2YXIgbGVtbWluZ3NJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGxlbW1pbmdzSW1hZ2Uuc3JjID0gJ2xlbW1pbmdzL2xlbW1pbmdzLnBuZyc7XHJcbiAgdmFyIGRlY29ySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBkZWNvckltYWdlLnNyYyA9ICdsZW1taW5ncy9kZWNvci5wbmcnO1xyXG4gIHZhciBsZW1taW5ncyA9IHt9O1xyXG4gIHZhciBzdGFydGVkID0gZmFsc2U7XHJcblxyXG4gIHZhciBhY3Rpb25zID0ge1xyXG4gICAgd2Fsazoge1xyXG4gICAgICBzdGFydDogWzAsIDBdLFxyXG4gICAgICBlbmQ6IFszMjAsIDIwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBodWg6IHtcclxuICAgICAgc3RhcnQ6IFszMjAsIDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDIwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZhbGw6IHtcclxuICAgICAgc3RhcnQ6IFswLCA4MF0sXHJcbiAgICAgIGVuZDogWzE2MCwgMTAwXSxcclxuICAgICAgY29sdW1uczogNCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBmbHk6IHtcclxuICAgICAgc3RhcnQ6IFsxNjAsIDgwXSxcclxuICAgICAgZW5kOiBbNDgwLCAxMTBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHN0b3A6IHtcclxuICAgICAgc3RhcnQ6IFswLCAxMjBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDE0MF0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGNsaW1iOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMTYwXSxcclxuICAgICAgZW5kOiBbNjQwLCAxODVdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBzdGFydDogWzAsIDIwMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMjI1XSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgcHVuY2g6IHtcclxuICAgICAgc3RhcnQ6IFswLCAyNDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDMwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAyLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGRpZzoge1xyXG4gICAgICBzdGFydDogWzAsIDMyMF0sXHJcbiAgICAgIGVuZDogWzMyMCwgMzQ1XSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gTGVtbWluZyhpbml0KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggLSAyMDApKSArIDEwMCwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNhbnZhcy5oZWlnaHQgLSAyMDApKSArIDEwMF07XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAyID4gMSA/IExFRlQgOiBSSUdIVDtcclxuICAgIHRoaXMuYWN0ID0gZnVuY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uc1thY3Rpb25dO1xyXG4gICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgdGhpcy53aWR0aCA9ICh0aGlzLmFjdGlvbi5lbmRbMF0gLSB0aGlzLmFjdGlvbi5zdGFydFswXSkgLyB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICB0aGlzLmhlaWdodCA9ICh0aGlzLmFjdGlvbi5lbmRbMV0gLSB0aGlzLmFjdGlvbi5zdGFydFsxXSAtICgyMCAqICh0aGlzLmFjdGlvbi5yb3dzIC0gMSkpKSAvIHRoaXMuYWN0aW9uLnJvd3M7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICB0aGlzLmFjdChpbml0KTtcclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25bMF0sIHRoaXMucG9zaXRpb25bMV0pO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IExFRlQpIHtcclxuICAgICAgICBjdHguc2NhbGUoLTEsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBjb2x1bW4gPSB0aGlzLmN5Y2xlICUgdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3IodGhpcy5jeWNsZSAvIHRoaXMuYWN0aW9uLmNvbHVtbnMpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKGxlbW1pbmdzSW1hZ2UsICh0aGlzLndpZHRoICogY29sdW1uKSArIHRoaXMuYWN0aW9uLnN0YXJ0WzBdLCAoKHRoaXMuaGVpZ2h0ICsgMjApICogcm93KSArIHRoaXMuYWN0aW9uLnN0YXJ0WzFdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgIGlmICh0aGlzLmFjdGlvbi5yZXZlcnNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgICBpZiAodGhpcy5jeWNsZSA+PSB0aGlzLmFjdGlvbi5jb2x1bW5zICogdGhpcy5hY3Rpb24ucm93cykge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICF0aGlzLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZS0tO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLS07XHJcbiAgICAgICAgICBpZiAodGhpcy5jeWNsZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSAhdGhpcy5hbmltYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPj0gdGhpcy5hY3Rpb24uY29sdW1ucyAqIHRoaXMuYWN0aW9uLnJvd3MpIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEhhdGNoKCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFsyMCwgMjBdO1xyXG4gICAgdGhpcy5hY3Rpb24gPSB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMF0sXHJcbiAgICAgIGVuZDogWzgyLCA1MDBdLFxyXG4gICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICByb3dzOiAxMFxyXG4gICAgfVxyXG4gICAgdGhpcy53aWR0aCA9ICh0aGlzLmFjdGlvbi5lbmRbMF0gLSB0aGlzLmFjdGlvbi5zdGFydFswXSkgLyB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAodGhpcy5hY3Rpb24uZW5kWzFdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMV0pIC8gdGhpcy5hY3Rpb24ucm93cztcclxuICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgdGhpcy5vcGVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSwgdGhpcy5wb3NpdGlvblsxXSk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIHZhciBjb2x1bW4sIHJvdztcclxuICAgICAgaWYgKHN0YXJ0ZWQpIHtcclxuICAgICAgICBjb2x1bW4gPSB0aGlzLmN5Y2xlICUgdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgICByb3cgPSBNYXRoLmZsb29yKHRoaXMuY3ljbGUgLyB0aGlzLmFjdGlvbi5jb2x1bW5zKTtcclxuICAgICAgICBpZiAodGhpcy5jeWNsZSA8IDkpIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29sdW1uID0gMDtcclxuICAgICAgICByb3cgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoZGVjb3JJbWFnZSwgKHRoaXMud2lkdGggKiBjb2x1bW4pICsgdGhpcy5hY3Rpb24uc3RhcnRbMF0sICh0aGlzLmhlaWdodCAqIHJvdykgKyB0aGlzLmFjdGlvbi5zdGFydFsxXSAtIDEsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduTGVtbWluZygpIHtcclxuICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2goZnVuY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgIGxlbW1pbmdzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCldID0gbmV3IExlbW1pbmcoYWN0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcblx0XHQvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuXHRcdC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHRcdC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcblx0XHRyZXNpemVDYW52YXMoKTtcclxuXHR9XHJcblx0Ly8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG5cdC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG5cdC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG5cdGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuXHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTAgOiAxMDUpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG4gIHNwYXduTGVtbWluZygpO1xyXG4gIGxldCBoYXRjaCA9IG5ldyBIYXRjaCgpXHJcbiAgZHJhdygpO1xyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgaWYgKCFzdGFydGVkKSB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmZvbnQ9JzQwcHggTW9ub3Rvbic7XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSAnMTAnO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XHJcbiAgICAgIGN0eC5yZWN0KDE1LCBjYW52YXMuaGVpZ2h0IC0gNDUsIGN0eC5tZWFzdXJlVGV4dCgnU3RhcnQnKS53aWR0aCArIDIwLCBjdHgubWVhc3VyZVRleHQoJ1N0YXJ0JykuaGVpZ2h0ICsgY2FudmFzLmhlaWdodCAtIDQ1KTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LmZpbGxUZXh0KCdTdGFydCcsIDIwLCBjYW52YXMuaGVpZ2h0IC0gNTApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yICh2YXIgaSBpbiBsZW1taW5ncykge1xyXG4gICAgICAgIGxlbW1pbmdzW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGF0Y2gub3BlbigpO1xyXG4gICAgc3RhcnRlZCA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBkcmF3KCk7XHJcbiAgICB9LCAxNTApO1xyXG4gIH1cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignTGlzdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBDYXRlZ29yaWVzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5zaG93Q2F0ZWdvcnkgPSB0cnVlO1xyXG5cclxuICAkc2NvcGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIENhdGVnb3JpZXNTdmMuZ2V0Q2F0ZWdvcmllcygpXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAkc2NvcGUudGFza3MgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuY2F0ZWdvcmllcykge1xyXG4gICAgICAgIGZvciAodmFyIGogaW4gJHNjb3BlLmNhdGVnb3JpZXNbaV0udGFza3MpIHtcclxuICAgICAgICAgICRzY29wZS50YXNrcy5wdXNoKHtcclxuICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiAkc2NvcGUuY2F0ZWdvcmllc1tpXS5uYW1lLFxyXG4gICAgICAgICAgICBcInRhc2tcIjogJHNjb3BlLmNhdGVnb3JpZXNbaV0udGFza3Nbal0ubmFtZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkgPSBmdW5jdGlvbihjYXRlZ29yeSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICRzY29wZS5zZWxlY3RlZFRhc2tzID0gW107XHJcbiAgICAkc2NvcGUuc2VsZWN0YWJsZVRhc2tzID0gW107XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzKSB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RhYmxlVGFza3MucHVzaCgkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuc2hvd0NhdGVnb3J5ID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuZW50ZXJlZENhdGVnb3J5ID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLm5ld0NhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUgPT09IGNhdGVnb3J5KSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5KCRzY29wZS5jYXRlZ29yaWVzW2ldKTtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5hZGRDYXRlZ29yeSh7XHJcbiAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5XHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgJHNjb3BlLmluaXQoKTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICRzY29wZS5lbnRlcmVkQ2F0ZWdvcnkgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUubmV3VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpIHtcclxuICAgICAgaWYgKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldLm5hbWUgPT09IHRhc2spIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdFRhc2soJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS5uYW1lLCB7XHJcbiAgICAgICAgdGFzazogdGFza1xyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcy5wdXNoKHsgbmFtZTogdGFzayB9KTtcclxuICAgICAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MubGVuZ3RoIC0gMV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICRzY29wZS5lbnRlcmVkVGFzayA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5yZW1vdmVUYXNrKCRzY29wZS5zZWxlY3RhYmxlVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLmVudGVyZWRUYXNrID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVuc2VsZWN0VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5yZW1vdmVUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCB0YXNrKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuYWRkVGFzayA9IGZ1bmN0aW9uKHRhc2tMaXN0LCB0YXNrKSB7XHJcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2spO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5yZW1vdmVUYXNrID0gZnVuY3Rpb24odGFza0xpc3QsIHRhc2spIHtcclxuICAgIHRhc2tMaXN0LnNwbGljZSh0YXNrTGlzdC5pbmRleE9mKHRhc2spLCAxKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc3RhcnRQcmlvcml0aXppbmcgPSBmdW5jdGlvbigpIHtcclxuICAgIENhdGVnb3JpZXNTdmMuc2V0UHJpb3JpdHlMaXN0KCRzY29wZS5zZWxlY3RlZFRhc2tzKTtcclxuICAgICRsb2NhdGlvbi5wYXRoKCcvcHJpb3JpdGl6ZScpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRRdWVzdGlvbnMgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghJHNjb3BlLnNlbGVjdGVkVGFza3MpIHJldHVybiAnJztcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAkc2NvcGUuc2VsZWN0ZWRUYXNrcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgIGNvdW50ZXIgKz0gaTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb3VudGVyO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG4gIC8vIEluaXRpYWxpemUgdGhlIEZpcmViYXNlVUkgV2lkZ2V0IHVzaW5nIEZpcmViYXNlLlxyXG4gIHZhciB1aSA9IG5ldyBmaXJlYmFzZXVpLmF1dGguQXV0aFVJKGZpcmViYXNlLmF1dGgoKSk7XHJcblxyXG4gICRzY29wZS4kb24oJ2xvZ291dCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdWkucmVzZXQoKTtcclxuICAgIHN0YXJ0VUkoKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRVSSgpIHtcclxuICAgIHVpLnN0YXJ0KCcjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lcicsIHtcclxuICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgc2lnbkluU3VjY2VzczogZnVuY3Rpb24gKGN1cnJlbnRVc2VyLCBjcmVkZW50aWFsLCByZWRpcmVjdFVybCkge1xyXG4gICAgICAgICAgLy8gTm8gcmVkaXJlY3QuXHJcbiAgICAgICAgICBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuYXV0aCgpXHJcbiAgICAgICAgICAgIC5jdXJyZW50VXNlci5nZXRJZFRva2VuKHRydWUpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChpZFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgVXNlclN2Yy5hdXRoZW50aWNhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGN1cnJlbnRVc2VyLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IGN1cnJlbnRVc2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGhvdG9VUkw6IGN1cnJlbnRVc2VyLnBob3RvVVJMLFxyXG4gICAgICAgICAgICAgICAgZW1haWxWZXJpZmllZDogY3VycmVudFVzZXIuZW1haWxWZXJpZmllZCxcclxuICAgICAgICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW4sXHJcbiAgICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNtb2RhbC1sb2dpbicpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgIC8vJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdCgncG9wdXAnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0xvZ2luIEZhaWxlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FsZXJ0LWRhbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gc2lnbkluRmFpbHVyZSBjYWxsYmFjayBtdXN0IGJlIHByb3ZpZGVkIHRvIGhhbmRsZSBtZXJnZSBjb25mbGljdHMgd2hpY2hcclxuICAgICAgICAvLyBvY2N1ciB3aGVuIGFuIGV4aXN0aW5nIGNyZWRlbnRpYWwgaXMgbGlua2VkIHRvIGFuIGFub255bW91cyB1c2VyLlxyXG4gICAgICAgIHNpZ25JbkZhaWx1cmU6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgLy8gRm9yIG1lcmdlIGNvbmZsaWN0cywgdGhlIGVycm9yLmNvZGUgd2lsbCBiZVxyXG4gICAgICAgICAgLy8gJ2ZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3QnLlxyXG4gICAgICAgICAgaWYgKGVycm9yLmNvZGUgIT0gJ2ZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFRoZSBjcmVkZW50aWFsIHRoZSB1c2VyIHRyaWVkIHRvIHNpZ24gaW4gd2l0aC5cclxuICAgICAgICAgIHZhciBjcmVkID0gZXJyb3IuY3JlZGVudGlhbDtcclxuICAgICAgICAgIC8vIENvcHkgZGF0YSBmcm9tIGFub255bW91cyB1c2VyIHRvIHBlcm1hbmVudCB1c2VyIGFuZCBkZWxldGUgYW5vbnltb3VzXHJcbiAgICAgICAgICAvLyB1c2VyLlxyXG4gICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAvLyBGaW5pc2ggc2lnbi1pbiBhZnRlciBkYXRhIGlzIGNvcGllZC5cclxuICAgICAgICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aENyZWRlbnRpYWwoY3JlZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1aVNob3duOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvLyBUaGUgd2lkZ2V0IGlzIHJlbmRlcmVkLlxyXG4gICAgICAgICAgLy8gSGlkZSB0aGUgbG9hZGVyLlxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2lnbkluU3VjY2Vzc1VybDogJy9ob21lJyxcclxuICAgICAgc2lnbkluT3B0aW9uczogW1xyXG4gICAgICAgIC8vZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICBdLFxyXG5cclxuICAgICAgLy8gV2lsbCB1c2UgcG9wdXAgZm9yIElEUCBQcm92aWRlcnMgc2lnbi1pbiBmbG93IGluc3RlYWQgb2YgdGhlIGRlZmF1bHQsIHJlZGlyZWN0LlxyXG4gICAgICBzaWduSW5GbG93OiAncG9wdXAnLFxyXG4gICAgICAvLyBPdGhlciBjb25maWcgb3B0aW9ucy4uLlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGFydFVJKCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRmaWx0ZXIsIFBvc3RzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5hZGRQb3N0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCRzY29wZS5wb3N0Qm9keSkge1xyXG4gICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xyXG4gICAgICAgIGJvZHk6ICRzY29wZS5wb3N0Qm9keVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUG9zdHNTdmMuZmV0Y2goKVxyXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLnBvc3RzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbignd3M6bmV3X3Bvc3QnLCBmdW5jdGlvbiAoXywgcG9zdCkge1xyXG4gICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIFBvc3RzU3ZjLmdldFBvc3QocG9zdClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RzLnVuc2hpZnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlByb2ZpbGVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG4gIGNvbnN0IGNvdW50cmllcyA9IFtcclxuICAgIHsgbmFtZTogXCJBbmRvcnJhXCIsIGZsYWc6IFwiZmxhZy1hZFwiLCB0aWRiaXQ6IFwiXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgQXJhYiBFbWlyYXRlc1wiLCBmbGFnOiBcImZsYWctYWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFmZ2hhbmlzdGFuXCIsIGZsYWc6IFwiZmxhZy1hZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLCBmbGFnOiBcImZsYWctYWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFuZ3VpbGxhXCIsIGZsYWc6IFwiZmxhZy1haVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWxiYW5pYVwiLCBmbGFnOiBcImZsYWctYWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFybWVuaWFcIiwgZmxhZzogXCJmbGFnLWFtXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbmdvbGFcIiwgZmxhZzogXCJmbGFnLWFvXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbnRhcmN0aWNhXCIsIGZsYWc6IFwiZmxhZy1hcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXJnZW50aW5hXCIsIGZsYWc6IFwiZmxhZy1hclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW1lcmljYW4gU29tb2FcIiwgZmxhZzogXCJmbGFnLWFzXCIgfSxcclxuICAgIHsgbmFtZTogXCJBdXN0cmlhXCIsIGZsYWc6IFwiZmxhZy1hdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXVzdHJhbGlhXCIsIGZsYWc6IFwiZmxhZy1hdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXJ1YmFcIiwgZmxhZzogXCJmbGFnLWF3XCIgfSxcclxuICAgIHsgbmFtZTogXCLDhWxhbmQgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctYXhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF6ZXJiYWlqYW5cIiwgZmxhZzogXCJmbGFnLWF6XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsIGZsYWc6IFwiZmxhZy1iYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFyYmFkb3NcIiwgZmxhZzogXCJmbGFnLWJiXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYW5nbGFkZXNoXCIsIGZsYWc6IFwiZmxhZy1iZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVsZ2l1bVwiLCBmbGFnOiBcImZsYWctYmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1cmtpbmEgRmFzb1wiLCBmbGFnOiBcImZsYWctYmZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1bGdhcmlhXCIsIGZsYWc6IFwiZmxhZy1iZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFocmFpblwiLCBmbGFnOiBcImZsYWctYmhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1cnVuZGlcIiwgZmxhZzogXCJmbGFnLWJpXCIgfSxcclxuICAgIHsgbmFtZTogXCJCZW5pblwiLCBmbGFnOiBcImZsYWctYmpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEJhcnRow6lsZW15XCIsIGZsYWc6IFwiZmxhZy1ibFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVybXVkYVwiLCBmbGFnOiBcImZsYWctYm1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJydW5laSBcIiwgZmxhZzogXCJmbGFnLWJuXCIgfSxcclxuICAgIHsgbmFtZTogXCJCb2xpdmlhLCBQbHVyaW5hdGlvbmFsIFN0YXRlIG9mXCIsIGZsYWc6IFwiZmxhZy1ib1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmFcIiwgZmxhZzogXCJmbGFnLWJxXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcmF6aWxcIiwgZmxhZzogXCJmbGFnLWJyXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYWhhbWFzXCIsIGZsYWc6IFwiZmxhZy1ic1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmh1dGFuXCIsIGZsYWc6IFwiZmxhZy1idFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm91dmV0IElzbGFuZFwiLCBmbGFnOiBcImZsYWctYnZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvdHN3YW5hXCIsIGZsYWc6IFwiZmxhZy1id1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVsYXJ1c1wiLCBmbGFnOiBcImZsYWctYnlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGl6ZVwiLCBmbGFnOiBcImZsYWctYnpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbmFkYVwiLCBmbGFnOiBcImZsYWctY2FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1jY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29uZ28sIHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZVwiLCBmbGFnOiBcImZsYWctY2RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctY2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbmdvXCIsIGZsYWc6IFwiZmxhZy1jZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dpdHplcmxhbmRcIiwgZmxhZzogXCJmbGFnLWNoXCIgfSxcclxuICAgIHsgbmFtZTogXCJDw7R0ZSBkJ0l2b2lyZVwiLCBmbGFnOiBcImZsYWctY2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvb2sgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctY2tcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoaWxlXCIsIGZsYWc6IFwiZmxhZy1jbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FtZXJvb25cIiwgZmxhZzogXCJmbGFnLWNtXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGluYVwiLCBmbGFnOiBcImZsYWctY25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbG9tYmlhXCIsIGZsYWc6IFwiZmxhZy1jb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29zdGEgUmljYVwiLCBmbGFnOiBcImZsYWctY3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN1YmFcIiwgZmxhZzogXCJmbGFnLWN1XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYWJvIFZlcmRlXCIsIGZsYWc6IFwiZmxhZy1jdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3VyYcOnYW9cIiwgZmxhZzogXCJmbGFnLWN3XCIgfSxcclxuICAgIHsgbmFtZTogXCJDaHJpc3RtYXMgSXNsYW5kXCIsIGZsYWc6IFwiZmxhZy1jeFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3lwcnVzXCIsIGZsYWc6IFwiZmxhZy1jeVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3plY2ggUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWN6XCIgfSxcclxuICAgIHsgbmFtZTogXCJHZXJtYW55XCIsIGZsYWc6IFwiZmxhZy1kZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGppYm91dGlcIiwgZmxhZzogXCJmbGFnLWRqXCIgfSxcclxuICAgIHsgbmFtZTogXCJEZW5tYXJrXCIsIGZsYWc6IFwiZmxhZy1ka1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRG9taW5pY2FcIiwgZmxhZzogXCJmbGFnLWRtXCIgfSxcclxuICAgIHsgbmFtZTogXCJEb21pbmljYW4gUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWRvXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbGdlcmlhXCIsIGZsYWc6IFwiZmxhZy1kelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWN1YWRvclwiLCBmbGFnOiBcImZsYWctZWNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVzdG9uaWFcIiwgZmxhZzogXCJmbGFnLWVlXCIgfSxcclxuICAgIHsgbmFtZTogXCJFZ3lwdFwiLCBmbGFnOiBcImZsYWctZWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIldlc3Rlcm4gU2FoYXJhXCIsIGZsYWc6IFwiZmxhZy1laFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXJpdHJlYVwiLCBmbGFnOiBcImZsYWctZXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNwYWluXCIsIGZsYWc6IFwiZmxhZy1lc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXRoaW9waWFcIiwgZmxhZzogXCJmbGFnLWV0XCIgfSxcclxuICAgIHsgbmFtZTogXCJGaW5sYW5kXCIsIGZsYWc6IFwiZmxhZy1maVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmlqaVwiLCBmbGFnOiBcImZsYWctZmpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKVwiLCBmbGFnOiBcImZsYWctZmtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2ZcIiwgZmxhZzogXCJmbGFnLWZtXCIgfSxcclxuICAgIHsgbmFtZTogXCJGYXJvZSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1mb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJhbmNlXCIsIGZsYWc6IFwiZmxhZy1mclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2Fib25cIiwgZmxhZzogXCJmbGFnLWdhXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kXCIsIGZsYWc6IFwiZmxhZy1nYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3JlbmFkYVwiLCBmbGFnOiBcImZsYWctZ2RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdlb3JnaWFcIiwgZmxhZzogXCJmbGFnLWdlXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggR3VpYW5hXCIsIGZsYWc6IFwiZmxhZy1nZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3Vlcm5zZXlcIiwgZmxhZzogXCJmbGFnLWdnXCIgfSxcclxuICAgIHsgbmFtZTogXCJHaGFuYVwiLCBmbGFnOiBcImZsYWctZ2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdpYnJhbHRhclwiLCBmbGFnOiBcImZsYWctZ2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZWVubGFuZFwiLCBmbGFnOiBcImZsYWctZ2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdhbWJpYVwiLCBmbGFnOiBcImZsYWctZ21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1aW5lYVwiLCBmbGFnOiBcImZsYWctZ25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YWRlbG91cGVcIiwgZmxhZzogXCJmbGFnLWdwXCIgfSxcclxuICAgIHsgbmFtZTogXCJFcXVhdG9yaWFsIEd1aW5lYVwiLCBmbGFnOiBcImZsYWctZ3FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZWVjZVwiLCBmbGFnOiBcImZsYWctZ3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1nc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VhdGVtYWxhXCIsIGZsYWc6IFwiZmxhZy1ndFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VhbVwiLCBmbGFnOiBcImZsYWctZ3VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1aW5lYS1CaXNzYXVcIiwgZmxhZzogXCJmbGFnLWd3XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdXlhbmFcIiwgZmxhZzogXCJmbGFnLWd5XCIgfSxcclxuICAgIHsgbmFtZTogXCJIb25nIEtvbmdcIiwgZmxhZzogXCJmbGFnLWhrXCIgfSxcclxuICAgIHsgbmFtZTogXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWhtXCIgfSxcclxuICAgIHsgbmFtZTogXCJIb25kdXJhc1wiLCBmbGFnOiBcImZsYWctaG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNyb2F0aWFcIiwgZmxhZzogXCJmbGFnLWhyXCIgfSxcclxuICAgIHsgbmFtZTogXCJIYWl0aVwiLCBmbGFnOiBcImZsYWctaHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkh1bmdhcnlcIiwgZmxhZzogXCJmbGFnLWh1XCIgfSxcclxuICAgIHsgbmFtZTogXCJJbmRvbmVzaWFcIiwgZmxhZzogXCJmbGFnLWlkXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmVsYW5kXCIsIGZsYWc6IFwiZmxhZy1pZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXNyYWVsXCIsIGZsYWc6IFwiZmxhZy1pbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXNsZSBvZiBNYW5cIiwgZmxhZzogXCJmbGFnLWltXCIgfSxcclxuICAgIHsgbmFtZTogXCJJbmRpYVwiLCBmbGFnOiBcImZsYWctaW5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwiLCBmbGFnOiBcImZsYWctaW9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIklyYXFcIiwgZmxhZzogXCJmbGFnLWlxXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmFuLCBJc2xhbWljIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1pclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSWNlbGFuZFwiLCBmbGFnOiBcImZsYWctaXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkl0YWx5XCIsIGZsYWc6IFwiZmxhZy1pdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSmVyc2V5XCIsIGZsYWc6IFwiZmxhZy1qZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSmFtYWljYVwiLCBmbGFnOiBcImZsYWctam1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkpvcmRhblwiLCBmbGFnOiBcImZsYWctam9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkphcGFuXCIsIGZsYWc6IFwiZmxhZy1qcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2VueWFcIiwgZmxhZzogXCJmbGFnLWtlXCIgfSxcclxuICAgIHsgbmFtZTogXCJLeXJneXpzdGFuXCIsIGZsYWc6IFwiZmxhZy1rZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FtYm9kaWFcIiwgZmxhZzogXCJmbGFnLWtoXCIgfSxcclxuICAgIHsgbmFtZTogXCJLaXJpYmF0aVwiLCBmbGFnOiBcImZsYWcta2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbW9yb3NcIiwgZmxhZzogXCJmbGFnLWttXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIiwgZmxhZzogXCJmbGFnLWtuXCIgfSxcclxuICAgIHsgbmFtZTogXCJLb3JlYSwgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWcta3BcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktvcmVhLCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWcta3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkt1d2FpdFwiLCBmbGFnOiBcImZsYWcta3dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNheW1hbiBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1reVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2F6YWtoc3RhblwiLCBmbGFnOiBcImZsYWcta3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1sYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGViYW5vblwiLCBmbGFnOiBcImZsYWctbGJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEx1Y2lhXCIsIGZsYWc6IFwiZmxhZy1sY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGllY2h0ZW5zdGVpblwiLCBmbGFnOiBcImZsYWctbGlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNyaSBMYW5rYVwiLCBmbGFnOiBcImZsYWctbGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpYmVyaWFcIiwgZmxhZzogXCJmbGFnLWxyXCIgfSxcclxuICAgIHsgbmFtZTogXCJMZXNvdGhvXCIsIGZsYWc6IFwiZmxhZy1sc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGl0aHVhbmlhXCIsIGZsYWc6IFwiZmxhZy1sdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTHV4ZW1ib3VyZ1wiLCBmbGFnOiBcImZsYWctbHVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxhdHZpYVwiLCBmbGFnOiBcImZsYWctbHZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpYnlhXCIsIGZsYWc6IFwiZmxhZy1seVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9yb2Njb1wiLCBmbGFnOiBcImZsYWctbWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbmFjb1wiLCBmbGFnOiBcImZsYWctbWNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbGRvdmEsIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1tZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9udGVuZWdyb1wiLCBmbGFnOiBcImZsYWctbWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IE1hcnRpbiAoRnJlbmNoIHBhcnQpXCIsIGZsYWc6IFwiZmxhZy1tZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFkYWdhc2NhclwiLCBmbGFnOiBcImZsYWctbWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hcnNoYWxsIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLW1oXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWNlZG9uaWEsIHRoZSBmb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLW1rXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxpXCIsIGZsYWc6IFwiZmxhZy1tbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTXlhbm1hclwiLCBmbGFnOiBcImZsYWctbW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbmdvbGlhXCIsIGZsYWc6IFwiZmxhZy1tblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFjYW9cIiwgZmxhZzogXCJmbGFnLW1vXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLW1wXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXJ0aW5pcXVlXCIsIGZsYWc6IFwiZmxhZy1tcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWF1cml0YW5pYVwiLCBmbGFnOiBcImZsYWctbXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbnRzZXJyYXRcIiwgZmxhZzogXCJmbGFnLW1zXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWx0YVwiLCBmbGFnOiBcImZsYWctbXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hdXJpdGl1c1wiLCBmbGFnOiBcImZsYWctbXVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGRpdmVzXCIsIGZsYWc6IFwiZmxhZy1tdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsYXdpXCIsIGZsYWc6IFwiZmxhZy1td1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWV4aWNvXCIsIGZsYWc6IFwiZmxhZy1teFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsYXlzaWFcIiwgZmxhZzogXCJmbGFnLW15XCIgfSxcclxuICAgIHsgbmFtZTogXCJNb3phbWJpcXVlXCIsIGZsYWc6IFwiZmxhZy1telwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmFtaWJpYVwiLCBmbGFnOiBcImZsYWctbmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5ldyBDYWxlZG9uaWFcIiwgZmxhZzogXCJmbGFnLW5jXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWdlclwiLCBmbGFnOiBcImZsYWctbmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcmZvbGsgSXNsYW5kXCIsIGZsYWc6IFwiZmxhZy1uZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmlnZXJpYVwiLCBmbGFnOiBcImZsYWctbmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pY2FyYWd1YVwiLCBmbGFnOiBcImZsYWctbmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5ldGhlcmxhbmRzXCIsIGZsYWc6IFwiZmxhZy1ubFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9yd2F5XCIsIGZsYWc6IFwiZmxhZy1ub1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmVwYWxcIiwgZmxhZzogXCJmbGFnLW5wXCIgfSxcclxuICAgIHsgbmFtZTogXCJOYXVydVwiLCBmbGFnOiBcImZsYWctbnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pdWVcIiwgZmxhZzogXCJmbGFnLW51XCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXcgWmVhbGFuZFwiLCBmbGFnOiBcImZsYWctbnpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk9tYW5cIiwgZmxhZzogXCJmbGFnLW9tXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYW5hbWFcIiwgZmxhZzogXCJmbGFnLXBhXCIgfSxcclxuICAgIHsgbmFtZTogXCJQZXJ1XCIsIGZsYWc6IFwiZmxhZy1wZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIFBvbHluZXNpYVwiLCBmbGFnOiBcImZsYWctcGZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhcHVhIE5ldyBHdWluZWFcIiwgZmxhZzogXCJmbGFnLXBnXCIgfSxcclxuICAgIHsgbmFtZTogXCJQaGlsaXBwaW5lc1wiLCBmbGFnOiBcImZsYWctcGhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBha2lzdGFuXCIsIGZsYWc6IFwiZmxhZy1wa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUG9sYW5kXCIsIGZsYWc6IFwiZmxhZy1wbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwiLCBmbGFnOiBcImZsYWctcG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBpdGNhaXJuXCIsIGZsYWc6IFwiZmxhZy1wblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUHVlcnRvIFJpY29cIiwgZmxhZzogXCJmbGFnLXByXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWxlc3RpbmUsIFN0YXRlIG9mXCIsIGZsYWc6IFwiZmxhZy1wc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUG9ydHVnYWxcIiwgZmxhZzogXCJmbGFnLXB0XCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWxhdVwiLCBmbGFnOiBcImZsYWctcHdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhcmFndWF5XCIsIGZsYWc6IFwiZmxhZy1weVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUWF0YXJcIiwgZmxhZzogXCJmbGFnLXFhXCIgfSxcclxuICAgIHsgbmFtZTogXCJSw6l1bmlvblwiLCBmbGFnOiBcImZsYWctcmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlJvbWFuaWFcIiwgZmxhZzogXCJmbGFnLXJvXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZXJiaWFcIiwgZmxhZzogXCJmbGFnLXJzXCIgfSxcclxuICAgIHsgbmFtZTogXCJSdXNzaWFuIEZlZGVyYXRpb25cIiwgZmxhZzogXCJmbGFnLXJ1XCIgfSxcclxuICAgIHsgbmFtZTogXCJSd2FuZGFcIiwgZmxhZzogXCJmbGFnLXJ3XCIgfSxcclxuICAgIHsgbmFtZTogXCJTYXVkaSBBcmFiaWFcIiwgZmxhZzogXCJmbGFnLXNhXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb2xvbW9uIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLXNiXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZXljaGVsbGVzXCIsIGZsYWc6IFwiZmxhZy1zY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3VkYW5cIiwgZmxhZzogXCJmbGFnLXNkXCIgfSxcclxuICAgIHsgbmFtZTogXCJTd2VkZW5cIiwgZmxhZzogXCJmbGFnLXNlXCIgfSxcclxuICAgIHsgbmFtZTogXCJTaW5nYXBvcmVcIiwgZmxhZzogXCJmbGFnLXNnXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwiLCBmbGFnOiBcImZsYWctc2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNsb3ZlbmlhXCIsIGZsYWc6IFwiZmxhZy1zaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3ZhbGJhcmQgYW5kIEphbiBNYXllblwiLCBmbGFnOiBcImZsYWctc2pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNsb3Zha2lhXCIsIGZsYWc6IFwiZmxhZy1za1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2llcnJhIExlb25lXCIsIGZsYWc6IFwiZmxhZy1zbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FuIE1hcmlub1wiLCBmbGFnOiBcImZsYWctc21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNlbmVnYWxcIiwgZmxhZzogXCJmbGFnLXNuXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb21hbGlhXCIsIGZsYWc6IFwiZmxhZy1zb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3VyaW5hbWVcIiwgZmxhZzogXCJmbGFnLXNyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBTdWRhblwiLCBmbGFnOiBcImZsYWctc3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLCBmbGFnOiBcImZsYWctc3RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVsIFNhbHZhZG9yXCIsIGZsYWc6IFwiZmxhZy1zdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KVwiLCBmbGFnOiBcImZsYWctc3hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN5cmlhbiBBcmFiIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1zeVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dhemlsYW5kXCIsIGZsYWc6IFwiZmxhZy1zelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy10Y1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hhZFwiLCBmbGFnOiBcImZsYWctdGRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllc1wiLCBmbGFnOiBcImZsYWctdGZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRvZ29cIiwgZmxhZzogXCJmbGFnLXRnXCIgfSxcclxuICAgIHsgbmFtZTogXCJUaGFpbGFuZFwiLCBmbGFnOiBcImZsYWctdGhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhamlraXN0YW5cIiwgZmxhZzogXCJmbGFnLXRqXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb2tlbGF1XCIsIGZsYWc6IFwiZmxhZy10a1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGltb3ItTGVzdGVcIiwgZmxhZzogXCJmbGFnLXRsXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXJrbWVuaXN0YW5cIiwgZmxhZzogXCJmbGFnLXRtXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdW5pc2lhXCIsIGZsYWc6IFwiZmxhZy10blwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9uZ2FcIiwgZmxhZzogXCJmbGFnLXRvXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXJrZXlcIiwgZmxhZzogXCJmbGFnLXRyXCIgfSxcclxuICAgIHsgbmFtZTogXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsIGZsYWc6IFwiZmxhZy10dFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHV2YWx1XCIsIGZsYWc6IFwiZmxhZy10dlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYVwiLCBmbGFnOiBcImZsYWctdHdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLXR6XCIgfSxcclxuICAgIHsgbmFtZTogXCJVa3JhaW5lXCIsIGZsYWc6IFwiZmxhZy11YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVWdhbmRhXCIsIGZsYWc6IFwiZmxhZy11Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy11bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIsIGZsYWc6IFwiZmxhZy11c1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVXJ1Z3VheVwiLCBmbGFnOiBcImZsYWctdXlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlV6YmVraXN0YW5cIiwgZmxhZzogXCJmbGFnLXV6XCIgfSxcclxuICAgIHsgbmFtZTogXCJIb2x5IFNlZVwiLCBmbGFnOiBcImZsYWctdmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsIGZsYWc6IFwiZmxhZy12Y1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmVuZXp1ZWxhLCBCb2xpdmFyaWFuIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy12ZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlyZ2luIElzbGFuZHMsIEJyaXRpc2hcIiwgZmxhZzogXCJmbGFnLXZnXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaXJnaW4gSXNsYW5kcywgVS5TLlwiLCBmbGFnOiBcImZsYWctdmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpZXQgTmFtXCIsIGZsYWc6IFwiZmxhZy12blwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmFudWF0dVwiLCBmbGFnOiBcImZsYWctdnVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIldhbGxpcyBhbmQgRnV0dW5hXCIsIGZsYWc6IFwiZmxhZy13ZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2Ftb2FcIiwgZmxhZzogXCJmbGFnLXdzXCIgfSxcclxuICAgIHsgbmFtZTogXCJZZW1lblwiLCBmbGFnOiBcImZsYWcteWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1heW90dGVcIiwgZmxhZzogXCJmbGFnLXl0XCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBBZnJpY2FcIiwgZmxhZzogXCJmbGFnLXphXCIgfSxcclxuICAgIHsgbmFtZTogXCJaYW1iaWFcIiwgZmxhZzogXCJmbGFnLXptXCIgfSxcclxuICAgIHsgbmFtZTogXCJaaW1iYWJ3ZVwiLCBmbGFnOiBcImZsYWctendcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVVzZXJGbGFncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS51c2VyRmxhZ3MgPSAkc2NvcGUuY3VycmVudFVzZXI/LmZsYWdzXHJcbiAgICAgID8gY291bnRyaWVzLmZpbHRlcihmdW5jdGlvbiAoY291bnRyeSkge1xyXG4gICAgICAgICAgcmV0dXJuICRzY29wZS5jdXJyZW50VXNlci5mbGFncy5pbmNsdWRlcyhjb3VudHJ5LmZsYWcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIDogW107XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmRhdGVPcHRpb25zID0ge1xyXG4gICAgbWF4RGF0ZTogbmV3IERhdGUoKSxcclxuICAgIG1pbkRhdGU6IG5ldyBEYXRlKDE5MDAsIDEsIDEpLFxyXG4gICAgaW5pdERhdGU6IG5ldyBEYXRlKDIwMDAsIDEsIDEpLFxyXG4gICAgZGF0ZXBpY2tlck1vZGU6IFwieWVhclwiLFxyXG4gIH07XHJcblxyXG4gICRzY29wZS51c2VybmFtZVRvZ2dsZSA9IHRydWU7XHJcbiAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gdHJ1ZTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVVzZXJuYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnVzZXJuYW1lVG9nZ2xlID0gISRzY29wZS51c2VybmFtZVRvZ2dsZTtcclxuICAgICRzY29wZS5uZXdVc2VybmFtZSA9ICRzY29wZS5jdXJyZW50VXNlci51c2VybmFtZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUubmV3UGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLmNvbmZpcm1QYXNzd29yZCA9IG51bGw7XHJcbiAgICAkc2NvcGUucGFzc3dvcmRUb2dnbGUgPSAhJHNjb3BlLnBhc3N3b3JkVG9nZ2xlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGVja1Bhc3N3b3JkID0gZnVuY3Rpb24gKHBhc3N3b3JkKSB7XHJcbiAgICBpZiAocGFzc3dvcmQpIHtcclxuICAgICAgdmFyIHVzZXIgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICBVc2VyU3ZjLmNoZWNrUGFzc3dvcmQodXNlciwgcGFzc3dvcmQpLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgb3JpZ2luYWxCZyA9ICQoXCIucGFzc3dvcmRcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIpO1xyXG4gICAgICAgICAgJChcIi5wYXNzd29yZFwiKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNGRkI2QzFcIiB9LCAyMDApLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG9yaWdpbmFsQmcgfSwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uIChvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgaWYgKG5ld1Bhc3N3b3JkKSB7XHJcbiAgICAgIGlmIChuZXdQYXNzd29yZCA9PSBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICB2YXIgdXNlciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgICAgVXNlclN2Yy5jaGFuZ2VQYXNzd29yZCh1c2VyLCBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQpLnRoZW4oXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzY29wZS4kZW1pdChcInBvcHVwXCIsIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBhc3N3b3JkIENoYW5nZWRcIixcclxuICAgICAgICAgICAgICB0eXBlOiBcImFsZXJ0LXN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICRzY29wZS5vbGRQYXNzd29yZCA9IG51bGw7XHJcbiAgICAgICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwicG9wdXBcIiwge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGFzc3dvcmQgQ2hhbmdlIEZhaWxlZFwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiYWxlcnQtZGFuZ2VyXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBvcmlnaW5hbEJnID0gJChcIi5wYXNzd29yZFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIik7XHJcbiAgICAgICAgJChcIi5wYXNzd29yZFwiKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNGRkI2QzFcIiB9LCAyMDApLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG9yaWdpbmFsQmcgfSwgMjAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VybmFtZSkge1xyXG4gICAgJHNjb3BlLiRlbWl0KFwibG9hZGluZ1wiKTtcclxuICAgIFVzZXJTdmMuY2hhbmdlVXNlcm5hbWUoJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCwgdXNlcm5hbWUpLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS4kZW1pdChcInVwZGF0ZVwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS4kZW1pdChcInBvcHVwXCIsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IHVzZXJuYW1lICsgXCIgYWxyZWFkeSBpbiB1c2VcIixcclxuICAgICAgICAgIHR5cGU6IFwiYWxlcnQtZGFuZ2VyXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS51cGRhdGVVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLiRlbWl0KFwibG9hZGluZ1wiKTtcclxuICAgIFVzZXJTdmMudXBkYXRlVXNlcih7IC4uLiRzY29wZS5jdXJyZW50VXNlciwgZmxhZ3M6ICRzY29wZS51c2VyRmxhZ3MubWFwKCh7IGZsYWcgfSkgPT4gZmxhZykgfSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwidXBkYXRlXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUubG9hZENvdW50cmllcyA9IGZ1bmN0aW9uICgkcXVlcnkpIHtcclxuICAgIHJldHVybiBjb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChjb3VudHJ5KSB7XHJcbiAgICAgIHJldHVybiBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCRxdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCAoKSA9PiB7XHJcbiAgICB1cGRhdGVVc2VyRmxhZ3MoKTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignU2tpbGxzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR3aW5kb3cpIHtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkU2tpbGwgPSAwO1xyXG4gICRzY29wZS5za2lsbHNWaXNpYmxlID0gZmFsc2U7XHJcbiAgJHNjb3BlLnByb2plY3RzID0gW107XHJcblxyXG4gICRzY29wZS5sYWJlbHMgPSBbXCJEb3dubG9hZCBTYWxlc1wiLCBcIkluLVN0b3JlIFNhbGVzXCIsIFwiTWFpbC1PcmRlciBTYWxlc1wiXTtcclxuICAkc2NvcGUuZGF0YSA9IFszMDAsIDUwMCwgMTAwXTtcclxuXHJcbiAgJC5nZXRKU09OKCcvZXhwZXJpZW5jZS5qc29uJywgZnVuY3Rpb24oIGRhdGEgKSB7XHJcbiAgICAkc2NvcGUucHJvamVjdHMgPSBkYXRhLnJlZHVjZSgocHJvamVjdHMsIGVtcGxveWVyKSA9PiB7XHJcbiAgICAgIGlmIChlbXBsb3llci5wcm9qZWN0cykgcmV0dXJuIGVtcGxveWVyLnByb2plY3RzLmNvbmNhdChwcm9qZWN0cyk7XHJcbiAgICAgIGVsc2UgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgfSwge30pO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZmlsdGVyZWRQcm9qZWN0cyA9ICgpID0+ICRzY29wZS5wcm9qZWN0c1xyXG4gICAgLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5za2lsbHMgJiYgcHJvamVjdC5za2lsbHMuaW5jbHVkZXMoJHNjb3BlLnNlbGVjdGVkU2tpbGwuY29kZSkpXHJcblxyXG4gICQuZ2V0SlNPTignL3NraWxscy5qc29uJywgZnVuY3Rpb24oIGRhdGEgKSB7XHJcblxyXG4gICAgY29uc3Qgc2tpbGxzID0gZGF0YVxyXG4gICAgLmZpbHRlcigoc2tpbGwpID0+IHNraWxsLmVuYWJsZWQpXHJcblxyXG4gICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBza2lsbHNcclxuICAgIC5yZWR1Y2UoZnVuY3Rpb24oY2F0ZWdvcmllcywgc2tpbGwpIHtcclxuICAgICAgaWYgKCFjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldID0gW3NraWxsXVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldLnB1c2goc2tpbGwpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwgPSBmdW5jdGlvbiAoc2tpbGwpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwgPSBza2lsbDtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwuY2hhcnRPcHRpb25zID0ge1xyXG4gICAgICAgIGN1dG91dFBlcmNlbnRhZ2UgOiA4MCxcclxuICAgICAgICBjaXJjdW1mZXJlbmNlOiAyICogTWF0aC5QSSxcclxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwuY2hhcnRTdHlsZSA9IHtcclxuICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoL3NraWxscy8nICsgJHNjb3BlLnNlbGVjdGVkU2tpbGwuaW1hZ2UgKyAnKScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICc2MCUnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJzUwJSA1MCUnXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZFNraWxsKCRzY29wZS5za2lsbHNbMF0pO1xyXG5cclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkc2NlLCAkbG9jYXRpb24sIFRlblRoaW5nc1N2Yykge1xyXG4gICAgbGV0IHBhZ2UgPSAxO1xyXG4gICAgJHNjb3BlLmxpc3RzID0gW107XHJcbiAgICAkc2NvcGUuc2VhcmNoID0gXCJcIjtcclxuICAgICRzY29wZS5uZXdJdGVtID0ge307XHJcbiAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSB7fTtcclxuICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9IHt9O1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHVuZGVmaW5lZDtcclxuICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gXCJFTlwiO1xyXG4gICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9IFtdO1xyXG4gICAgJHNjb3BlLmNvbmZpcm1lZCA9IGZhbHNlO1xyXG4gICAgbGV0IGV4aGF1c3RlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IG9iamVjdENhdGVnb3JpZXMgPSBbXHJcbiAgICAgIFwiQXJ0XCIsXHJcbiAgICAgIFwiQ3VsdHVyZVwiLFxyXG4gICAgICBcIkZvb2QgYW5kIERyaW5rXCIsXHJcbiAgICAgIFwiTmF0dXJlXCIsXHJcbiAgICAgIFwiT2JqZWN0c1wiLFxyXG4gICAgICBcIlJlbGlnaW9uXCIsXHJcbiAgICAgIFwiU29jaWV0eVwiLFxyXG4gICAgICBcIlNwb3J0c1wiLFxyXG4gICAgICBcIlRyYW5zcG9ydGF0aW9uXCIsXHJcbiAgICBdO1xyXG4gICAgJHNjb3BlLmJsdXJiVHlwZXMgPSBbXHJcbiAgICAgIHsgYXBpOiBcIm1vdmllc1wiLCBjYXRlZ29yaWVzOiBbXCJNb3ZpZXNcIl0sIHRleHQ6IFwiR2V0IG1vdmllIHBvc3RlcnNcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJ0dlwiLCBjYXRlZ29yaWVzOiBbXCJUZWxldmlzaW9uXCJdLCB0ZXh0OiBcIkdldCB0diBwb3N0ZXJzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwiYWN0b3JzXCIsIGNhdGVnb3JpZXM6IFtcIk1vdmllc1wiLCBcIlRlbGV2aXNpb25cIl0sIHRleHQ6IFwiR2V0IGFjdG9yIHBpY3NcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJib29rc1wiLCBjYXRlZ29yaWVzOiBbXCJMaXRlcmF0dXJlXCJdLCB0ZXh0OiBcIkdldCBib29rIGNvdmVyc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcIm11c2ljdmlkZW9zXCIsIGNhdGVnb3JpZXM6IFtcIk11c2ljXCJdLCB0ZXh0OiBcIkdldCBtdXNpYyB2aWRlb3NcIiwgYWRtaW5Pbmx5OiB0cnVlIH0sXHJcbiAgICAgIHsgYXBpOiBcInVuc3BsYXNoXCIsIGNhdGVnb3JpZXM6IG9iamVjdENhdGVnb3JpZXMsIHRleHQ6IFwiR2V0IFVuc3BsYXNoIHBpY3NcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJwZXhlbHNcIiwgY2F0ZWdvcmllczogb2JqZWN0Q2F0ZWdvcmllcywgdGV4dDogXCJHZXQgUGV4ZWxzIHBpY3NcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJ3aWtpXCIsIGNhdGVnb3JpZXM6IG9iamVjdENhdGVnb3JpZXMsIHRleHQ6IFwiR2V0IFdpa2kgcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICBdO1xyXG5cclxuICAgICRzY29wZS5oYXZlQ29tbW9uSXRlbXMgPSAoYXJyMSwgYXJyMikgPT4ge1xyXG4gICAgICByZXR1cm4gYXJyMT8uc29tZSgoaXRlbSkgPT4gYXJyMi5pbmNsdWRlcyhpdGVtKSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5rZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAvLyBUYWJcclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICBpZiAoJChcIiNuZXctYmx1cmJcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmNyZWF0ZVZhbHVlKCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCQoXCIjbmV3LXZhbHVlXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICQoXCIjbmV3LWJsdXJiXCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICB9XHJcbiAgICAgIC8vIHVzZSBlLmtleUNvZGVcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmFkZExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIFwibmV3XCIpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgY3JlYXRvcjogJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHZhbHVlczogW10sXHJcbiAgICAgICAgYW5zd2VyczogMCxcclxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICRzY29wZS5zZWxlY3RlZExhbmd1YWdlLFxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2VhcmNoID0gJGxvY2F0aW9uLnNlYXJjaCgpLnNlYXJjaDtcclxuICAgICAgaWYgKGxpc3QpIHtcclxuICAgICAgICBpZiAobGlzdC5faWQgPT09IFwibmV3XCIpIHtcclxuICAgICAgICAgICRzY29wZS5hZGRMaXN0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0KGxpc3QpXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIGRhdGEuX2lkKTtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9ICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnJlYWRPbmx5ID1cclxuICAgICAgICAgICAgICAgICEkc2NvcGUuc2VsZWN0ZWRMaXN0IHx8XHJcbiAgICAgICAgICAgICAgICAoISRzY29wZS5jdXJyZW50VXNlci5hZG1pbiAmJlxyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNyZWF0b3IuX2lkICE9PSAkc2NvcGUuY3VycmVudFVzZXIuX2lkICYmXHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuX2lkKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzZXRMYW5ndWFnZUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0ge307XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9IHt9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5jdXJyZW50VXNlcikgcmV0dXJuO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGxhbmd1YWdlcyB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldExhbmd1YWdlcygpO1xyXG4gICAgICAkc2NvcGUubGFuZ3VhZ2VzID0gbGFuZ3VhZ2VzO1xyXG4gICAgICByZXNldExhbmd1YWdlRmlsdGVyKCk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogY2F0ZWdvcmllcyB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKTtcclxuICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xyXG4gICAgICByZXNldENhdGVnb3J5RmlsdGVyKCk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogbGFuZ3VhZ2VTdGF0cyB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldExpc3RMYW5ndWFnZVN0YXRzKCk7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZVN0YXRzID0gbGFuZ3VhZ2VTdGF0cy5yZWR1Y2UoKHJlc3VsdCwgeyBfaWQsIGNvdW50IH0pID0+IHtcclxuICAgICAgICByZXN1bHRbX2lkLmxhbmd1YWdlXSA9IChyZXN1bHRbX2lkLmxhbmd1YWdlXSB8fCAwKSArIGNvdW50O1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBjYXRlZ29yeVN0YXRzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMoKTtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSBjYXRlZ29yeVN0YXRzLnJlZHVjZSgocmVzdWx0LCB7IF9pZCwgY291bnQgfSkgPT4ge1xyXG4gICAgICAgIHJlc3VsdFtfaWRdID0gY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSwge30pO1xyXG4gICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QpIHtcclxuICAgICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KHsgX2lkOiAkbG9jYXRpb24uc2VhcmNoKCkubGlzdCB9KTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuc2VhcmNoID0gJGxvY2F0aW9uLnNlYXJjaCgpLnNlYXJjaCB8fCBcIlwiO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaExpc3RzID0gYXN5bmMgKHZpZXdWYWx1ZSkgPT4ge1xyXG4gICAgICBpZiAodmlld1ZhbHVlLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuc2VhcmNoTGlzdHModmlld1ZhbHVlKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmhpZ2hsaWdodGVkU2VhcmNoVGV4dCA9ICh0ZXh0KSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuc2VhcmNoKSB7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGAoJHskc2NvcGUuc2VhcmNofSlgLCBcImdpXCIpO1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UocmVnZXgsIFwiPHNwYW4gY2xhc3M9J2hpZ2hsaWdodCc+JDE8L3NwYW4+XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS52YWx1ZU9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJ2YWx1ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiAkbG9jYXRpb24uc2VhcmNoKCkuc29ydCB8fCBcImRhdGVcIixcclxuICAgICAgZGlyZWN0aW9uOiAkbG9jYXRpb24uc2VhcmNoKCkub3JkZXIgPyAkbG9jYXRpb24uc2VhcmNoKCkub3JkZXIgPT09IFwiZGVzY1wiIDogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyQnkgPSAoZmllbGQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5vcmRlci5maWVsZCA9PT0gZmllbGQpIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIuZGlyZWN0aW9uID0gISRzY29wZS5vcmRlci5kaXJlY3Rpb247XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgZGlyZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJzb3J0XCIsIGZpZWxkKTtcclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcIm9yZGVyXCIsICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPyBcImRlc2NcIiA6IFwiYXNjXCIpO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldE1vcmVMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5saXN0cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgZ2V0TGlzdHMoKS50aGVuKChsaXN0cykgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9ICRzY29wZS5saXN0cy5jb25jYXQobGlzdHMpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExpc3RzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGlzdHMgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICBwYWdlID0gMTtcclxuICAgICAgZXhoYXVzdGVkID0gZmFsc2U7XHJcbiAgICAgIGdldExpc3RzKCkudGhlbigobGlzdHMpID0+IHtcclxuICAgICAgICAkc2NvcGUubGlzdHMgPSBsaXN0cztcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0pIHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9ICEkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV07XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeUZpbHRlciA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0pIHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID0gISRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV07XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVDYXRlZ29yeUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcik7XHJcbiAgICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPVxyXG4gICAgICAgIGNhdGVnb3JpZXMubGVuZ3RoID09PSBjYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0pLmxlbmd0aDtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0gJHNjb3BlLmNhdGVnb3JpZXMucmVkdWNlKChmaWx0ZXIsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgZmlsdGVyW2NhdGVnb3J5XSA9ICFhbGxDYXRlZ29yaWVzO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldExpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxvYWRpbmcgfHwgZXhoYXVzdGVkKSByZXR1cm4gW107XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2ggIT09ICRzY29wZS5zZWFyY2gpIHtcclxuICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwic2VhcmNoXCIsICRzY29wZS5zZWFyY2ggPyAkc2NvcGUuc2VhcmNoIDogbnVsbCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdHMoe1xyXG4gICAgICAgIHBhZ2UsXHJcbiAgICAgICAgc29ydEJ5OiAkc2NvcGUub3JkZXIuZmllbGQsXHJcbiAgICAgICAgb3JkZXJCeTogJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA/IC0xIDogMSxcclxuICAgICAgICBsaW1pdDogMTAwLFxyXG4gICAgICAgIHNlYXJjaDogJHNjb3BlLnNlYXJjaCxcclxuICAgICAgICBsYW5ndWFnZXM6IE9iamVjdC5rZXlzKCRzY29wZS5sYW5ndWFnZUZpbHRlcikuZmlsdGVyKChsYW5ndWFnZSkgPT4gJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlXSksXHJcbiAgICAgICAgY2F0ZWdvcmllczogT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKS5maWx0ZXIoKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldKSxcclxuICAgICAgfSk7XHJcbiAgICAgICRzY29wZS5jb3VudCA9IGRhdGEuY291bnQ7XHJcbiAgICAgIGlmIChkYXRhLnJlc3VsdC5sZW5ndGggPCAxMDApIGV4aGF1c3RlZCA9IHRydWU7XHJcbiAgICAgIGVsc2UgcGFnZSA9IGRhdGEubmV4dFBhZ2U7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0LnNsaWNlKDAsIDEwKSk7XHJcbiAgICAgIHJldHVybiBkYXRhLnJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExpc3ROYW1lID0gKGxpc3RJZCkgPT4gJHNjb3BlLmxpc3RzLmZpbmQoKHsgX2lkIH0pID0+IF9pZCA9PT0gbGlzdElkKT8ubmFtZTtcclxuXHJcbiAgICAkc2NvcGUudXBkYXRlVmFsdWUgPSBhc3luYyAoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoIWl0ZW0udmFsdWUpIHtcclxuICAgICAgICAkc2NvcGUuZGVsZXRlVmFsdWUoaXRlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW1SZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy51cGRhdGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgaXRlbSk7XHJcbiAgICAgICAgaXRlbS5ibHVyYlR5cGUgPSB1cGRhdGVkSXRlbVJlc3BvbnNlLmRhdGEuYmx1cmJUeXBlO1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlVmFsdWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLm5ld0l0ZW0udmFsdWUpIHJldHVybjtcclxuICAgICAgaWYgKCRzY29wZS5oYXNEdXBsaWNhdGUoKSkge1xyXG4gICAgICAgIHJldHVybiBhbGVydChgJHskc2NvcGUubmV3SXRlbS52YWx1ZX0gaXMgYWxyZWFkeSBpbiB0aGUgbGlzdGApO1xyXG4gICAgICB9IGVsc2UgaWYgKCEkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnB1c2goeyAuLi4kc2NvcGUubmV3SXRlbSB9KTtcclxuICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMubGVuZ3RoID49IDEwKSB7XHJcbiAgICAgICAgICBhd2FpdCAkc2NvcGUudXBzZXJ0TGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlZEl0ZW1SZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5jcmVhdGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgJHNjb3BlLm5ld0l0ZW0pO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnB1c2goY3JlYXRlZEl0ZW1SZXNwb25zZS5kYXRhKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICRzY29wZS5uZXdJdGVtLmJsdXJiID0gXCJcIjtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgJChcIiNuZXctdmFsdWVcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlVmFsdWUgPSAoaXRlbSkgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZGVsZXRlTGlzdFZhbHVlKCRzY29wZS5zZWxlY3RlZExpc3QsIGl0ZW0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5faWQgIT09IGl0ZW0uX2lkKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS51cGRhdGVMaXN0ID0gKGxpc3QsIHVwZGF0ZXMpID0+IHtcclxuICAgICAgaWYgKGxpc3QuX2lkICYmIGxpc3QuX2lkICE9PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgLi4udXBkYXRlcyxcclxuICAgICAgICAgIF9pZDogbGlzdC5faWQsXHJcbiAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGNvbnN0IGxpc3RJbmRleCA9ICRzY29wZS5saXN0cy5maW5kSW5kZXgoKGxpc3QpID0+IGxpc3QuX2lkID09PSBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdHNbbGlzdEluZGV4XSA9IGRhdGE7XHJcbiAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwc2VydExpc3QgPSAobGlzdCwgdXBkYXRlcykgPT4ge1xyXG4gICAgICAkc2NvcGUuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKGxpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCAmJiBsaXN0Lm5hbWUgJiYgbGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAobGlzdC5faWQgJiYgbGlzdC5faWQgIT09IFwibmV3XCIpIHtcclxuICAgICAgICAgIGxldCBjaGFuZ2VzID0gdXBkYXRlcyA/IHVwZGF0ZXMgOiBsaXN0O1xyXG4gICAgICAgICAgZGVsZXRlIGNoYW5nZXMuX2lkO1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgICAuLi5jaGFuZ2VzLFxyXG4gICAgICAgICAgICBfaWQ6IGxpc3QuX2lkLFxyXG4gICAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0SW5kZXggPSAkc2NvcGUubGlzdHMuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0Ll9pZCA9PT0gZGF0YS5faWQpO1xyXG4gICAgICAgICAgICAkc2NvcGUubGlzdHNbbGlzdEluZGV4XSA9IGRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5jcmVhdGVMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgJHNjb3BlLnNlbGVjdGVkTGlzdCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0ID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuX2lkID0gZGF0YS5faWQ7XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbigkc2NvcGUuc2VsZWN0ZWRMaXN0LCB1cGRhdGVzKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICghbGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMobGlzdC5faWQpKSB7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9IFtsaXN0Ll9pZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjbW9kYWwtZGVsZXRlLWxpc3RzXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICQoXCIjbW9kYWwtZGVsZXRlLWxpc3RzXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNvbmZpcm1NZXJnZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5tZXJnZUxpc3RzKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMpO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICQoXCIjbW9kYWwtbWVyZ2UtbGlzdHNcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY29uZmlybURlbGV0ZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IGxpc3RJZCBvZiAkc2NvcGUubGlzdElkc1RvRGVsZXRlKSB7XHJcbiAgICAgICAgYXdhaXQgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3QobGlzdElkKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICQoXCIjbW9kYWwtZGVsZXRlLWxpc3RzXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUhpZ2hsaWdodGVkTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmluY2x1ZGVzKGxpc3QuX2lkKSkge1xyXG4gICAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmZpbHRlcihcclxuICAgICAgICAgIChoaWdobGlnaHRlZExpc3RJZCkgPT4gaGlnaGxpZ2h0ZWRMaXN0SWQgIT09IGxpc3QuX2lkLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5wdXNoKGxpc3QuX2lkKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2UgPSAobGlzdCwgbGFuZ3VhZ2UpID0+IHtcclxuICAgICAgbGlzdC5sYW5ndWFnZSA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwge1xyXG4gICAgICAgIGNhdGVnb3JpZXM6IGxpc3QuY2F0ZWdvcmllcyxcclxuICAgICAgICBsYW5ndWFnZTogbGFuZ3VhZ2UuY29kZSxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXREaWZmaWN1bHR5ID0gKGxpc3QsIGRpZmZpY3VsdHkpID0+IHtcclxuICAgICAgbGlzdC5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwge1xyXG4gICAgICAgIGRpZmZpY3VsdHk6IGRpZmZpY3VsdHksXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0RnJlcXVlbmN5ID0gKGxpc3QsIGZyZXF1ZW5jeSkgPT4ge1xyXG4gICAgICBsaXN0LmZyZXF1ZW5jeSA9IGZyZXF1ZW5jeTtcclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwge1xyXG4gICAgICAgIGZyZXF1ZW5jeTogZnJlcXVlbmN5LFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5ID0gKGxpc3QsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3J5SW5kZXggPSBsaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSk7XHJcbiAgICAgIGlmIChjYXRlZ29yeUluZGV4ID49IDApIHtcclxuICAgICAgICBsaXN0LmNhdGVnb3JpZXMuc3BsaWNlKGNhdGVnb3J5SW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7XHJcbiAgICAgICAgY2F0ZWdvcmllczogbGlzdC5jYXRlZ29yaWVzLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmhhc0R1cGxpY2F0ZSA9ICgpID0+XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgJiZcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgJiZcclxuICAgICAgXy5zb21lKFxyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgIChhbnN3ZXIpID0+IGFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCkgPT0gJHNjb3BlLm5ld0l0ZW0udmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpLFxyXG4gICAgICApO1xyXG5cclxuICAgICRzY29wZS5nZXRCbHVyYnMgPSAodHlwZSkgPT4ge1xyXG4gICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRCbHVyYnMoJHNjb3BlLnNlbGVjdGVkTGlzdCwgdHlwZSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0RW1iZWRVcmwgPSAodXJsKSA9PiB7XHJcbiAgICAgIGlmICh1cmwuaW5jbHVkZXMoXCJ5b3V0dWJlLmNvbVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL1s/Jl12PShbXiZdKykvKVsxXS50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsLmluY2x1ZGVzKFwieW91dHUuYmVcIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC95b3V0dVxcLmJlXFwvKFteJj9dKykvKVsxXS50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsLmluY2x1ZGVzKFwidmltZW8uY29tXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvdmltZW9cXC5jb21cXC8oXFxkKykvKVsxXS50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGBodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHVybC5pbmNsdWRlcyhcIm9wZW4uc3BvdGlmeVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL3RyYWNrXFwvKFteJj9dKykvKVsxXS50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGBodHRwczovL29wZW4uc3BvdGlmeS5jb20vZW1iZWQvdHJhY2svJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybCh1cmwpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybiBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfT9hdXRvcGxheT0xYDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsIGdldERhdGEpO1xyXG4gIH0pO1xyXG4iLCIvKmpzbGludCBlc3ZlcnNpb246IDYqL1xyXG5hbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzQWRtaW5DdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIFRlblRoaW5nc1N2YywgVXNlclN2Yykge1xyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4pIHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInVzZXJuYW1lXCIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5yZXZlcnNlID0gISRzY29wZS5vcmRlci5yZXZlcnNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldFF1ZXVlID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRRdWV1ZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnF1ZXVlID0gcmVzcG9uc2UuZGF0YS5yZXBsYWNlKFwiL25cIiwgXCI8YnIvPlwiKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICAkc2NvcGUuZ2V0UXVldWUoKTtcclxuXHJcbiAgICBUZW5UaGluZ3NTdmMuZ2V0UGF1c2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAkc2NvcGUucGF1c2VkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdldFVzZXJzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMuZ2V0VXNlcnMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS51c2VycyA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKCh1c2VyKSA9PiAhdXNlci5hZG1pbik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVCYW4gPSAodXNlcikgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMudG9nZ2xlQmFuKHVzZXIuX2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlUGF1c2UgPSAodXNlcikgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMudG9nZ2xlUGF1c2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5wYXVzZWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5wYXVzZWQpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NHYW1lQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGVQYXJhbXMsIFRlblRoaW5nc1N2YywgVXNlclN2Yykge1xyXG4gICAgY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy5nZXRVc2VycygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKHVzZXIpID0+ICF1c2VyLmFkbWluKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5hZG1pbikge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgICAgaWYgKCRzdGF0ZVBhcmFtcy5nYW1lKSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0R2FtZSgkc3RhdGVQYXJhbXMuZ2FtZSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLmdhbWUgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuZ2FtZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzU3RhdHNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIFRlblRoaW5nc1N2Yykge1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBbXTtcclxuICAgICRzY29wZS5jYXRlZ29yeVN0YXRzID0geyBsYWJlbHM6IFtdLCBkYXRhc2V0czogW10gfTtcclxuXHJcbiAgICBjb25zdCBsaW5lQ2hhcnRPcHRpb25zID0ge1xyXG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgIHRleHQ6IFwiQ2hhcnQuanMgTGluZSBDaGFydFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmN1cnJlbnRVc2VyKSByZXR1cm47XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZVN0YXRzID0gW107XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRQbGF5U3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IHllYXIgfSkgPT4geWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBtb250aHMgPSBfLnRpbWVzKDEyLCAoaSkgPT4gaSArIDEpO1xyXG4gICAgICAgICRzY29wZS5wbGF5U3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IG1vbnRocyxcclxuICAgICAgICAgIHNlcmllczogeWVhcnMsXHJcbiAgICAgICAgICBkYXRhOiB5ZWFycy5tYXAoKHllYXIpID0+XHJcbiAgICAgICAgICAgIG1vbnRocy5tYXAoKG1vbnRoKSA9PiBkYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubW9udGggPT09IG1vbnRoICYmIGl0ZW0ueWVhciA9PT0geWVhcik/LnVuaXF1ZVBsYXllcnMgfHwgMCksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgb3B0aW9uczogbGluZUNoYXJ0T3B0aW9ucyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RMYW5ndWFnZVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFycyA9IF8udW5pcShkYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkLnllYXIpKS5zb3J0KCk7XHJcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UpKS5zb3J0KCk7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IHllYXJzLFxyXG4gICAgICAgICAgc2VyaWVzOiBsYW5ndWFnZXMsXHJcbiAgICAgICAgICBkYXRhOiBsYW5ndWFnZXMubWFwKChsYW5ndWFnZSkgPT5cclxuICAgICAgICAgICAgeWVhcnMubWFwKCh5ZWFyKSA9PiBkYXRhLmZpbmQoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2UgJiYgX2lkLnllYXIgPT09IHllYXIpPy5jb3VudCB8fCAwKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBvcHRpb25zOiBsaW5lQ2hhcnRPcHRpb25zLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0R2FtZVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFycyA9IF8udW5pcShkYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkLnllYXIpKS5zb3J0KCk7XHJcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UpKS5zb3J0KCk7XHJcbiAgICAgICAgJHNjb3BlLmdhbWVTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogeWVhcnMsXHJcbiAgICAgICAgICBzZXJpZXM6IGxhbmd1YWdlcyxcclxuICAgICAgICAgIGRhdGE6IGxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlKSA9PlxyXG4gICAgICAgICAgICB5ZWFycy5tYXAoKHllYXIpID0+IGRhdGEuZmluZCgoeyBfaWQgfSkgPT4gX2lkLmxhbmd1YWdlID09PSBsYW5ndWFnZSAmJiBfaWQueWVhciA9PT0geWVhcik/LmNvdW50IHx8IDApLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIG9wdGlvbnM6IGxpbmVDaGFydE9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBfLnNvcnRCeShkYXRhLCAoeyBjb3VudCB9KSA9PiAtY291bnQpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiBzb3J0ZWREYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkKSxcclxuICAgICAgICAgIGRhdGE6IFtzb3J0ZWREYXRhLm1hcCgoeyBjb3VudCB9KSA9PiBjb3VudCldLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgKCkgPT4ge1xyXG4gICAgICBnZXREYXRhKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdXb3Jrb3V0Q3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICRzY29wZS50aW1lRXhlcmNpc2luZyA9IDMwO1xyXG4gICRzY29wZS50aW1lUmVzdGluZyA9IDEwO1xyXG4gICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcblxyXG4gIHZhciBzb3VuZHMgPSB7XHJcbiAgICBvbjogbmV3IEF1ZGlvKCdvbi53YXYnKSxcclxuICAgIG9mZjogbmV3IEF1ZGlvKCdvZmYud2F2JyksXHJcbiAgICBzd2l0Y2g6IG5ldyBBdWRpbygnc3dpdGNoLndhdicpLFxyXG4gIH07XHJcblxyXG5cclxuICB2YXIgZXhlcmNpc2VzID0gW1xyXG4gICAge25hbWU6ICdKdW1waW5nIEphY2tzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnV2FsbCBTaXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnQ3J1bmNoJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU3RlcC1VcCcsIHNwbGl0OiB0cnVlfSxcclxuICAgIHtuYW1lOiAnU3F1YXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdUcmljZXBzIERpcCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1BsYW5rJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnSGlnaCBLbmVlcycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0x1bmdlJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUHVzaC1VcCB3aXRoIFJvdGF0aW9uJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU2lkZSBQbGFuaycsIHNwbGl0OiB0cnVlfVxyXG4gIF07XHJcblxyXG4gIHZhciBleGVyY2lzaW5nO1xyXG5cclxuICAkc2NvcGUucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoZXhlcmNpc2VzLmxlbmd0aCAtIE1hdGguZmxvb3IoJHNjb3BlLnRpbWVSZW1haW5pbmcgLyAoJHNjb3BlLnRpbWVFeGVyY2lzaW5nICsgJHNjb3BlLnRpbWVSZXN0aW5nKSkpICsgJy8nICsgZXhlcmNpc2VzLmxlbmd0aDtcclxuICB9O1xyXG5cclxuICAkc2NvcGUud29ya291dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGV4Y2VyY2lzZVRpbWUgPSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3Rpbmc7XHJcbiAgICBpZiAoISRzY29wZS50aW1lUmVtYWluaW5nKSB7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gZXhlcmNpc2VzLmxlbmd0aCAqIGV4Y2VyY2lzZVRpbWU7XHJcbiAgICAgIGV4ZXJjaXNpbmcgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZy0tO1xyXG4gICAgICAgIGlmICgkc2NvcGUudGltZVJlbWFpbmluZyA9PT0gMCkge1xyXG4gICAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICdGaW5pc2hlZCEgQ29uZ3JhdHMhJywgc3BsaXQ6IGZhbHNlfTtcclxuICAgICAgICAgICRzY29wZS50aW1lciA9ICcnO1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VycmVudEV4ZXJjaXNlID0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvIGV4Y2VyY2lzZVRpbWUpO1xyXG4gICAgICAgIHZhciB0aW1lciA9ICRzY29wZS50aW1lUmVtYWluaW5nIC0gY3VycmVudEV4ZXJjaXNlICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgICAkc2NvcGUudGltZXIgPSB0aW1lciA+ICRzY29wZS50aW1lRXhlcmNpc2luZyA/IHRpbWVyIC0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nIDogdGltZXI7XHJcbiAgICAgICAgaWYgKHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nKSB7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS5leGVyY2lzZSA9IGV4ZXJjaXNlc1tleGVyY2lzZXMubGVuZ3RoIC0gY3VycmVudEV4ZXJjaXNlIC0gMV07XHJcbiAgICAgICAgaWYgKHRpbWVyID09PSAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgIHNvdW5kcy5vbi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aW1lciA9PT0gMCkge1xyXG4gICAgICAgICAgc291bmRzLm9mZi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkc2NvcGUuZXhlcmNpc2Uuc3BsaXQgJiYgdGltZXIgPT09IE1hdGguZmxvb3IoJHNjb3BlLnRpbWVFeGVyY2lzaW5nIC8gMikpIHtcclxuICAgICAgICAgIHNvdW5kcy5zd2l0Y2gucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChleGVyY2lzaW5nKTtcclxuICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICcnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdDYXRlZ29yaWVzU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRDYXRlZ29yaWVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9jYXRlZ29yaWVzJyk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFRhc2tzID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5KTtcclxuICB9O1xyXG5cclxuICBzdmMuYWRkQ2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJywgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRUYXNrID0gZnVuY3Rpb24gKGNhdGVnb3J5LCB0YXNrKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9jYXRlZ29yaWVzLycgKyBjYXRlZ29yeSArICcvdGFza3MnLCB0YXNrKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2V0UHJpb3JpdHlMaXN0ID0gZnVuY3Rpb24obGlzdCkge1xyXG4gICAgc3ZjLmNob2ljZXMgPSBsaXN0O1xyXG4gICAgc3ZjLnByaW9yaXR5TGlzdCA9IFtdO1xyXG4gICAgLy9NYWtlIGEgbmV3IGNob2ljZSBsaXN0XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgbGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHZhciByYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHN2Yy5wcmlvcml0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgIGZpcnN0Q2hvaWNlOiBsaXN0W3JhbmRvbSA9PT0gMCA/IGkgOiBqXS5uYW1lLFxyXG4gICAgICAgICAgc2Vjb25kQ2hvaWNlOiBsaXN0W3JhbmRvbSA9PT0gMCA/IGogOiBpXS5uYW1lLFxyXG4gICAgICAgICAgY2hvaWNlOiAnJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzaHVmZmxlKHN2Yy5wcmlvcml0eUxpc3QpO1xyXG4gICAgZm9yIChpIGluIHN2Yy5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgc3ZjLnByaW9yaXR5TGlzdFtpXS5pZCA9IGkgKyAxO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICByZXR1cm4gc3ZjLnByaW9yaXR5TGlzdDtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBzaHVmZmxlKGFycmF5KSB7XHJcbiAgICB2YXIgbSA9IGFycmF5Lmxlbmd0aCwgdCwgaTtcclxuICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxl4oCmXHJcbiAgICB3aGlsZSAobSkge1xyXG4gICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnTigKZcclxuICAgICAgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG0tLSk7XHJcbiAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cclxuICAgICAgLy9hcnJheVttXS5maXJzdENob2ljZTtcclxuICAgICAgdCA9IGFycmF5W21dO1xyXG4gICAgICBhcnJheVttXSA9IGFycmF5W2ldO1xyXG4gICAgICBhcnJheVtpXSA9IHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnRW1haWxTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLnNlbmQgPSBmdW5jdGlvbiAoZW1haWwpIHtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2VtYWlsJywgZW1haWwpO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLnNlcnZpY2UoJ0ZpbGVTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICAgIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICAgIHN2Yy5nZXRJbWFnZXMgPSBmdW5jdGlvbihmb2xkZXIpIHtcclxuICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9maWxlcy9pbWFnZXMvJyArIGZvbGRlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy5nZXRTb3VuZHMgPSBmdW5jdGlvbihmb2xkZXIpIHtcclxuICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9maWxlcy9zb3VuZHMvJyArIGZvbGRlcik7XHJcbiAgICB9O1xyXG5cclxuICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0dhbWVTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICAgIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICAgIHN2Yy5nZXRIaWdoc2NvcmUgPSBmdW5jdGlvbiAoZ2FtZSwgdXNlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2dhbWVzLycgKyBnYW1lICsgJy8nICsgdXNlciArICcvaGlnaHNjb3JlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy5zZXRIaWdoc2NvcmUgPSBmdW5jdGlvbiAoZ2FtZSwgdXNlciwgc2NvcmUpIHtcclxuICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZ2FtZXMvJyArIGdhbWUgKyAnLycgKyB1c2VyICsgJy9oaWdoc2NvcmUnLCB7XHJcbiAgICAgICAgc2NvcmU6IHNjb3JlXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0xhbmd1YWdlU3ZjJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMubGFuZ3VhZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJFbmdsaXNoXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1nYlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJOZWRlcmxhbmRzXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1ubFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJGcmFuw6dhaXNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWZyXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBzdmMudGV4dCA9IFtcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRU5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiTkxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRlJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gc3ZjLmxhbmd1YWdlc1swXTtcclxuXHJcbiAgc3ZjLnNldExhbmd1YWdlID0gZnVuY3Rpb24gKGxhbmd1YWdlKSB7XHJcbiAgICBzdmMuc2VsZWN0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBzdmMuc2VsZWN0ZWRMYW5ndWFnZTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnUG9zdHNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmZldGNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cycpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGUgPSBmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCBwb3N0KTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UG9zdCA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzLycgKyBwb3N0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiVGVuVGhpbmdzU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0UXVldWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYm90cy90ZW50aGluZ3MvcXVldWVgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdHMgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7XHJcbiAgICB2YXIgdXJsID1cclxuICAgICAgYC9hcGkvdGVudGhpbmdzL2xpc3RzP2AgK1xyXG4gICAgICAob3B0aW9ucy5saW1pdCA/IGAmbGltaXQ9JHtvcHRpb25zLmxpbWl0fWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnBhZ2UgPyBgJnBhZ2U9JHtvcHRpb25zLnBhZ2V9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuc29ydEJ5ID8gYCZzb3J0X2J5PSR7b3B0aW9ucy5zb3J0Qnl9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMub3JkZXJCeSA/IGAmb3JkZXJfYnk9JHtvcHRpb25zLm9yZGVyQnl9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMubGFuZ3VhZ2VzICYmIG9wdGlvbnMubGFuZ3VhZ2VzLmxlbmd0aCA+IDAgPyBgJmxhbmd1YWdlPSR7b3B0aW9ucy5sYW5ndWFnZXMuam9pbihcIixcIil9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuY2F0ZWdvcmllcyAmJiBvcHRpb25zLmNhdGVnb3JpZXMubGVuZ3RoID4gMCA/IGAmY2F0ZWdvcmllcz0ke29wdGlvbnMuY2F0ZWdvcmllcy5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zZWFyY2ggPyBgJnNlYXJjaD0ke29wdGlvbnMuc2VhcmNofWAgOiBcIlwiKTtcclxuICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2VhcmNoTGlzdHMgPSAobmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3Mvc2VhcmNoL2xpc3QtbmFtZXMvJHtuYW1lfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvY2F0ZWdvcmllc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9sYW5ndWFnZXNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnB1dChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQsIGxpc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGVMaXN0ID0gZnVuY3Rpb24gKHVzZXIsIGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHNcIiwge1xyXG4gICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICBsaXN0OiBsaXN0LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLm1lcmdlTGlzdHMgPSBmdW5jdGlvbiAobGlzdHMpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvbWVyZ2VcIiwgeyBsaXN0czogbGlzdHMgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmRlbGV0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdElkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0SWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wdXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzL1wiICsgdmFsdWUuX2lkLCB2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzXCIsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBzdmMuZGVsZXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3ZhbHVlcy9cIiArIHZhbHVlLl9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnJlcG9ydExpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3JlcG9ydC9cIiArIHVzZXIuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvY2F0ZWdvcmllc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvbGFuZ3VhZ2VzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQbGF5U3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvcGxheVwiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0R2FtZVN0YXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL3N0YXRzL2dhbWVzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRCbHVyYnMgPSBmdW5jdGlvbiAobGlzdCwgdHlwZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL2xpc3RzLyR7bGlzdC5faWR9L2JsdXJicy8ke3R5cGV9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvcGF1c2VgKTtcclxuICB9O1xyXG5cclxuICBzdmMudG9nZ2xlUGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvcGF1c2VgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0R2FtZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvZ2FtZXMvJHtpZH1gKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlVzZXJTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFVzZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnMvYWxsXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVCYW4gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3VzZXJzL2Jhbi8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSB0b2tlbjtcclxuICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hdXRoZW50aWNhdGVcIiwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9sb2dpblwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyLl9pZCwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi92ZXJpZmljYXRpb25cIiwge1xyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvcGFzc3dvcmRcIiwge1xyXG4gICAgICBvbGRQYXNzd29yZDogb2xkUGFzc3dvcmQsXHJcbiAgICAgIG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VyLCBuZXdVc2VybmFtZSkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi91c2VybmFtZVwiLCB7XHJcbiAgICAgICAgbmV3VXNlcm5hbWU6IG5ld1VzZXJuYW1lLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmNvbnRyb2xsZXIoJ1F1aXpBbmltYWxzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgRmlsZVN2Yykge1xyXG5cclxuICAgIEZpbGVTdmMuZ2V0U291bmRzKCdhbmltYWxzJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIHNvdW5kOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgNSk7XHJcblxyXG4gICAgJHNjb3BlLmdldFNjb3JlID0gKCkgPT4gYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwubmFtZSA9PT0gYW5pbWFsLmd1ZXNzKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWA7XHJcblxyXG4gICAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwuZ3Vlc3MpLmxlbmd0aCA9PT0gJHNjb3BlLmFuaW1hbHMubGVuZ3RoO1xyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpekdvb2dsZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ2dvb2dsZScpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TG9nb3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdsb2dvcycpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TW92aWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnbW92aWVzJylcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuY29udHJvbGxlcignUXVpelNrZWxldG9uc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIEZpbGVTdmMpIHtcclxuXHJcbiAgICBGaWxlU3ZjLmdldEltYWdlcygnc2tlbGV0b25zJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIGltYWdlOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgMTApO1xyXG5cclxuICAgICRzY29wZS5nZXRTY29yZSA9ICgpID0+IGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAgICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxuICB9KTsiXX0=
