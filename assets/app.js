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
    return decimals || (decimals = 2), `${(100 * this).toFixed(decimals)}%`;
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
    list.language = language.code, $scope.selectedLanguage = language.code;
    const nonEnglishIndex = list.categories.indexOf("Non-English");
    "EN" !== language.code && nonEnglishIndex < 0 ? list.categories.push("Non-English") : "EN" === language.code && nonEnglishIndex >= 0 && list.categories.splice(nonEnglishIndex, 1), $scope.upsertList(list, {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJjb250cm9sbGVycy9hcHAuY3RybC5qcyIsImNvbnRyb2xsZXJzL2FzdGVyb2lkcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvYnViYmxlcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvY2hhcmFkZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3QuY3RybC5qcyIsImNvbnRyb2xsZXJzL2V4cGVyaWVuY2UuY3RybC5qcyIsImNvbnRyb2xsZXJzL2hvYmJpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xlbW1pbmdzLmN0cmwuanMiLCJjb250cm9sbGVycy9saXN0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbG9naW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3Bvc3RzLmN0cmwuanMiLCJjb250cm9sbGVycy9wcm9maWxlLmN0cmwuanMiLCJjb250cm9sbGVycy9za2lsbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvdGVudGhpbmdzYWRtaW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2dhbWUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc3N0YXRzLmN0cmwuanMiLCJjb250cm9sbGVycy93b3Jrb3V0LmN0cmwuanMiLCJzZXJ2aWNlcy9jYXRlZ29yaWVzLnN2Yy5qcyIsInNlcnZpY2VzL2VtYWlsLnN2Yy5qcyIsInNlcnZpY2VzL2ZpbGUuc3ZjLmpzIiwic2VydmljZXMvZ2FtZS5zdmMuanMiLCJzZXJ2aWNlcy9sYW5ndWFnZS5zdmMuanMiLCJzZXJ2aWNlcy9wb3N0cy5zdmMuanMiLCJzZXJ2aWNlcy90ZW50aGluZ3Muc3ZjLmpzIiwic2VydmljZXMvdXNlci5zdmMuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2FuaW1hbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvZ29vZ2xlLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2xvZ29zLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL21vdmllcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9za2VsZXRvbnMuY3RybC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRvbWFpbnMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0cmluZyIsInByb3RvdHlwZSIsInZhbHVlIiwicmVkdWNlIiwicmVzdWx0IiwibGV0dGVyIiwicmVwbGFjZSIsInRoaXMiLCJTUEVDSUFMX0NIQVJBQ1RFUlMiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZURpYWNyaXRpY3MiLCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyIsImV4dHJhIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInJlcGxhY2VBbGwiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsImRpcmVjdGl2ZSIsIiRkb2N1bWVudCIsInJlc3RyaWN0Iiwic2NvcGUiLCJjbGlja091dHNpZGUiLCJsaW5rIiwiZWwiLCJhdHRyIiwib24iLCJ0YXJnZXQiLCJjb250YWlucyIsIiRhcHBseSIsIiRldmFsIiwiJHN0YXRlIiwiJGNvbXBpbGUiLCIkaW50ZXJwb2xhdGUiLCJnZXRTdHlsZSIsInRlbXBsYXRlU3R5bGVVcmwiLCJzdHlsZSIsImhyZWYiLCJyZWwiLCJtYXRjaCIsImVsZW0iLCJ0ZW1wbGF0ZVN0eWxlcyIsImh0bWwiLCJzdGFydFN5bWJvbCIsImVuZFN5bWJvbCIsImFwcGVuZCIsIiRvbiIsImV2ZW50IiwidG9TdGF0ZSIsInRvUGFyYW1zIiwiZnJvbVN0YXRlIiwiZnJvbVBhcmFtcyIsInN0YXRlcyIsIm5hbWUiLCJwYXJlbnQiLCJnZXQiLCJ2aWV3cyIsIl8iLCJ2aWV3Iiwic3BsaXQiLCJmbGF0IiwiaW5jbHVkZXMiLCJyZXZlcnNlIiwiZ2V0U3R5bGVzIiwiJHNjb3BlIiwiTGFuZ3VhZ2VTdmMiLCJVc2VyU3ZjIiwiJCIsImxvYWQiLCJmYWRlT3V0IiwiZmFkZUluIiwiY2xvc2VzdCIsInRvZ2dsZUNsYXNzIiwiY2hlY2tlZCIsImRvY3VtZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidGhlbWVDb3VudGVyIiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiZmxpcFRoZW1lIiwic2hvdyIsImhpZGUiLCJzZXRUaW1lb3V0IiwiZ2V0SlNPTiIsInNraWxscyIsImZpbHRlciIsInNraWxsIiwiaG9iYmllcyIsImpvYnMiLCJqb2IiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiY2hhcmFkZXMiLCJnZXRUaW1lU3BhbiIsImxhbmd1YWdlcyIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInNlbGVjdExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImhvdmVyZGl2IiwiZGl2aWQiLCJsZWZ0IiwiY2xpZW50WCIsInRvcCIsImNsaWVudFkiLCJnZXRFbGVtZW50QnlJZCIsImNzcyIsInRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsInVzZXIiLCJsb2dpbiIsInRoZW4iLCJyZXNwb25zZSIsImxvZ2dlZEluIiwiX2lkIiwiY3VycmVudFVzZXIiLCJiaXJ0aERhdGUiLCJsb2FkaW5nIiwibG9nb3V0IiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsImNsZWFyIiwiY2F0Y2giLCJlcnJvciIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiJGxvY2F0aW9uIiwiR2FtZVN2YyIsImFubm91bmNlIiwiY2FudmFzIiwicGF0aCIsImFsZXJ0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZvbnQiLCJmaWxsU3R5bGUiLCJ0ZXh0QWxpZ24iLCJzaG90cyIsImFzdGVyb2lkcyIsInBvd2VydXBzIiwiZXhwbG9zaW9ucyIsIm1hcCIsInNwYWNlcGljcyIsInNwYWNlIiwicG93ZXJ1cFR5cGVzIiwiYW5ub3VuY2VtZW50IiwiY3ljbGUiLCJyb3dzIiwiY29sdW1ucyIsInNpemUiLCJpbWciLCJJbWFnZSIsImFjdGl2YXRlIiwic3BhY2VzaGlwIiwibWF4U3BlZWQiLCJjb29sZG93biIsImNvb2xkb3duVGltZSIsInJhbmdlIiwic2hpZWxkIiwiZXhwbG9kZSIsInNwYXduQXN0ZXJvaWRzIiwicG93ZXJ1cCIsImFycmF5Iiwic3JjIiwiZXhwbG9zaW9uSW1hZ2UiLCJldmFsdWF0ZUtleXMiLCJwbGF5aW5nIiwic2hvb3QiLCJyb3RhdGlvbiIsInNwZWVkIiwic2NvcmUiLCJTcGFjZXNoaXAiLCJhdXRvU3Bhd24iLCJ3aWR0aCIsImhlaWdodCIsImNhbm5vbiIsIngiLCJ5IiwicG9zaXRpb24iLCJhbmdsZSIsImlkIiwicm91bmQiLCJTaG90IiwibW92ZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJmaWxsIiwiYXN0ZXJvaWQiLCJoaXQiLCJnYW1lT3ZlciIsImNvcyIsInNpbiIsImxpZmVzcGFuIiwiQXN0ZXJvaWQiLCJnZXRFbnRyeVBvc2l0aW9uIiwicm90YXRpb25TcGVlZCIsIkV4cGxvc2lvbiIsInNob3QiLCJwb2ludHMiLCJzcGF3blBvd2VydXAiLCJvYmplY3QiLCJQb3dlcnVwIiwiZGVsYXkiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiY29sdW1uIiwicm93IiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImdyaWRYIiwiZ3JpZFkiLCJvYmplY3QxIiwib2JqZWN0MiIsImtleXMiLCJhbW91bnQiLCJoaWdoc2NvcmUiLCJzZXRIaWdoc2NvcmUiLCJyZXNpemVDYW52YXMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5Q29kZSIsIndoaWNoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsImNsZWFyUmVjdCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJ0YWxseSIsImZpbGxUZXh0IiwibWVhc3VyZVRleHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJidWJibGVzIiwiY29sb3JzIiwiQnViYmxlIiwicmFkaXVzIiwiZXhwYW5kaW5nIiwiY2lyY3VtZmVyZW5jZSIsIm1heFJhZGl1cyIsInZ4IiwidnkiLCJmaWx0ZXJCdWJibGVzIiwiYnViYmxlIiwic2VsZWN0V29yZCIsImNhdGVnb3J5Iiwid29yZCIsIkVtYWlsU3ZjIiwib3B0aW9ucyIsInRleHQiLCJjb250YWN0IiwiZW1haWwiLCJwaG9uZSIsImFib3V0IiwibWVzc2FnZSIsInNlbmRpbmciLCJzZW50Iiwic3RhdHVzIiwiZXJyIiwiZ2V0U2tpbGwiLCJza2lsbENvZGUiLCJjb2RlIiwiJHdpbmRvdyIsImhvYmJ5U2VsZWN0b3JWaXNpYmxlIiwic2VsZWN0ZWRIb2JieSIsInNlbGVjdEhvYmJ5IiwiaG9iYnkiLCJzaG93SG9iYnkiLCJpbmRleCIsImltYWdlcyIsIkxFRlQiLCJSSUdIVCIsImxlbW1pbmdzSW1hZ2UiLCJkZWNvckltYWdlIiwibGVtbWluZ3MiLCJzdGFydGVkIiwiYWN0aW9ucyIsIndhbGsiLCJzdGFydCIsImVuZCIsImh1aCIsImZhbGwiLCJmbHkiLCJzdG9wIiwiY2xpbWIiLCJidWlsZCIsInB1bmNoIiwiZGlnIiwiTGVtbWluZyIsImluaXQiLCJhY3QiLCJhY3Rpb24iLCJhbmltYXRpb24iLCJzY2FsZSIsImhhdGNoIiwib3BlbiIsInJlY3QiLCJDYXRlZ29yaWVzU3ZjIiwic2hvd0NhdGVnb3J5IiwiZ2V0Q2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJ0YXNrcyIsImoiLCJ0YXNrIiwic2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2VsZWN0ZWRUYXNrcyIsInNlbGVjdGFibGVUYXNrcyIsImVudGVyZWRDYXRlZ29yeSIsIm5ld0NhdGVnb3J5IiwiZm91bmQiLCJhZGRDYXRlZ29yeSIsIm5ld1Rhc2siLCJzZWxlY3RUYXNrIiwiYWRkVGFzayIsImVudGVyZWRUYXNrIiwicmVtb3ZlVGFzayIsInVuc2VsZWN0VGFzayIsInRhc2tMaXN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInN0YXJ0UHJpb3JpdGl6aW5nIiwic2V0UHJpb3JpdHlMaXN0IiwiZ2V0UXVlc3Rpb25zIiwiY291bnRlciIsInVpIiwiZmlyZWJhc2V1aSIsIkF1dGhVSSIsInN0YXJ0VUkiLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzIiwiY3JlZGVudGlhbCIsInJlZGlyZWN0VXJsIiwiZ2V0SWRUb2tlbiIsImlkVG9rZW4iLCJhdXRoZW50aWNhdGUiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWxWZXJpZmllZCIsIiRlbWl0IiwibW9kYWwiLCJ0eXBlIiwic2lnbkluRmFpbHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY3JlZCIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwidWlTaG93biIsImRpc3BsYXkiLCJzaWduSW5TdWNjZXNzVXJsIiwic2lnbkluT3B0aW9ucyIsIkdvb2dsZUF1dGhQcm92aWRlciIsIlBST1ZJREVSX0lEIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJzaWduSW5GbG93IiwicmVzZXQiLCIkZmlsdGVyIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJjcmVhdGUiLCJib2R5IiwicG9zdCIsImZldGNoIiwicG9zdHMiLCJnZXRQb3N0IiwidW5zaGlmdCIsImNvdW50cmllcyIsImZsYWciLCJ0aWRiaXQiLCJkYXRlT3B0aW9ucyIsIm1heERhdGUiLCJtaW5EYXRlIiwiaW5pdERhdGUiLCJkYXRlcGlja2VyTW9kZSIsInVzZXJuYW1lVG9nZ2xlIiwicGFzc3dvcmRUb2dnbGUiLCJ0b2dnbGVVc2VybmFtZSIsIm5ld1VzZXJuYW1lIiwidXNlcm5hbWUiLCJ0b2dnbGVQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwib3JpZ2luYWxCZyIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiY2hhbmdlVXNlcm5hbWUiLCJ1cGRhdGVVc2VyIiwiZmxhZ3MiLCJ1c2VyRmxhZ3MiLCJsb2FkQ291bnRyaWVzIiwiJHF1ZXJ5IiwiY291bnRyeSIsIiR3YXRjaCIsInNlbGVjdGVkU2tpbGwiLCJza2lsbHNWaXNpYmxlIiwicHJvamVjdHMiLCJsYWJlbHMiLCJlbXBsb3llciIsImNvbmNhdCIsImZpbHRlcmVkUHJvamVjdHMiLCJwcm9qZWN0Iiwic2V0U2VsZWN0ZWRTa2lsbCIsImNoYXJ0T3B0aW9ucyIsImN1dG91dFBlcmNlbnRhZ2UiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidG9vbHRpcHMiLCJjaGFydFN0eWxlIiwiaW1hZ2UiLCIkc2NlIiwiVGVuVGhpbmdzU3ZjIiwicGFnZSIsImxpc3RzIiwic2VhcmNoIiwibmV3SXRlbSIsImxhbmd1YWdlRmlsdGVyIiwiY2F0ZWdvcnlGaWx0ZXIiLCJzZWxlY3RlZExpc3QiLCJ1bmRlZmluZWQiLCJoaWdobGlnaHRlZExpc3RJZHMiLCJsaXN0SWRzVG9EZWxldGUiLCJjb25maXJtZWQiLCJleGhhdXN0ZWQiLCJvYmplY3RDYXRlZ29yaWVzIiwiYmx1cmJUeXBlcyIsImFwaSIsImFkbWluT25seSIsImhhdmVDb21tb25JdGVtcyIsImFycjEiLCJhcnIyIiwic29tZSIsImtleURvd24iLCJpcyIsImNyZWF0ZVZhbHVlIiwidHJpZ2dlciIsImFkZExpc3QiLCJjcmVhdG9yIiwidmFsdWVzIiwiYW5zd2VycyIsImlzRHluYW1pYyIsInNldFNlbGVjdGVkSXRlbSIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkTGlzdCIsImxpc3QiLCJnZXRMaXN0IiwicmVhZE9ubHkiLCJhZG1pbiIsInNlYXJjaExpc3RzIiwiYXN5bmMiLCJ2aWV3VmFsdWUiLCJoaWdobGlnaHRlZFNlYXJjaFRleHQiLCJyZWdleCIsInZhbHVlT3JkZXIiLCJmaWVsZCIsIm9yZGVyIiwib3JkZXJCeSIsImdldExpc3RzIiwiZ2V0TW9yZUxpc3RzIiwic2V0TGFuZ3VhZ2VGaWx0ZXIiLCJzZXRDYXRlZ29yeUZpbHRlciIsInRvZ2dsZUNhdGVnb3J5RmlsdGVyIiwiYWxsQ2F0ZWdvcmllcyIsInNvcnRCeSIsImxpbWl0IiwiY291bnQiLCJuZXh0UGFnZSIsImdldExpc3ROYW1lIiwibGlzdElkIiwidXBkYXRlVmFsdWUiLCJ1cGRhdGVkSXRlbVJlc3BvbnNlIiwidXBkYXRlTGlzdFZhbHVlIiwiYmx1cmJUeXBlIiwiZGVsZXRlVmFsdWUiLCJoYXNEdXBsaWNhdGUiLCJjcmVhdGVkSXRlbVJlc3BvbnNlIiwiY3JlYXRlTGlzdFZhbHVlIiwidXBzZXJ0TGlzdCIsImJsdXJiIiwiZGVsZXRlTGlzdFZhbHVlIiwidXBkYXRlTGlzdCIsInVwZGF0ZXMiLCJzYXZpbmciLCJsaXN0SW5kZXgiLCJmaW5kSW5kZXgiLCJjaGFuZ2VzIiwiY3JlYXRlTGlzdCIsImFzc2lnbiIsImRlbGV0ZUxpc3QiLCJkZWxldGVMaXN0cyIsImNvbmZpcm1NZXJnZUxpc3RzIiwibWVyZ2VMaXN0cyIsImNvbmZpcm1EZWxldGVMaXN0cyIsInRvZ2dsZUhpZ2hsaWdodGVkTGlzdCIsImhpZ2hsaWdodGVkTGlzdElkIiwibm9uRW5nbGlzaEluZGV4Iiwic2V0RGlmZmljdWx0eSIsImRpZmZpY3VsdHkiLCJzZXRGcmVxdWVuY3kiLCJmcmVxdWVuY3kiLCJzZXRDYXRlZ29yeSIsImNhdGVnb3J5SW5kZXgiLCJhbnN3ZXIiLCJyZW1vdmVBbGxCdXRMZXR0ZXJzIiwiZ2V0Qmx1cmJzIiwiZ2V0dGluZ0JsdXJicyIsImdldEVtYmVkVXJsIiwidmlkZW9JZCIsInRyaW0iLCJ0cnVzdEFzUmVzb3VyY2VVcmwiLCJnZXRMYW5ndWFnZXMiLCJsYW5ndWFnZVN0YXRzIiwiZ2V0TGlzdExhbmd1YWdlU3RhdHMiLCJjYXRlZ29yeVN0YXRzIiwiZ2V0TGlzdENhdGVnb3J5U3RhdHMiLCJnZXRVc2VycyIsImdldFF1ZXVlIiwicXVldWUiLCJnZXRQYXVzZSIsInBhdXNlZCIsInVzZXJzIiwidG9nZ2xlQmFuIiwidG9nZ2xlUGF1c2UiLCIkc3RhdGVQYXJhbXMiLCJnYW1lIiwiZ2V0R2FtZSIsImRhdGFzZXRzIiwibGluZUNoYXJ0T3B0aW9ucyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwidGl0bGUiLCJnZXRQbGF5U3RhdHMiLCJ5ZWFycyIsInVuaXEiLCJtb250aHMiLCJ0aW1lcyIsInBsYXlTdGF0cyIsInNlcmllcyIsIm1vbnRoIiwidW5pcXVlUGxheWVycyIsImdldEdhbWVTdGF0cyIsImdhbWVTdGF0cyIsInNvcnRlZERhdGEiLCJ0aW1lUmVtYWluaW5nIiwidGltZUV4ZXJjaXNpbmciLCJ0aW1lUmVzdGluZyIsInJlc3QiLCJleGVyY2lzaW5nIiwic291bmRzIiwiQXVkaW8iLCJvZmYiLCJzd2l0Y2giLCJleGVyY2lzZXMiLCJwcm9ncmVzcyIsIndvcmtvdXQiLCJleGNlcmNpc2VUaW1lIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVyIiwiZXhlcmNpc2UiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRFeGVyY2lzZSIsInBsYXkiLCIkaHR0cCIsInN2YyIsImdldFRhc2tzIiwiY2hvaWNlcyIsInByaW9yaXR5TGlzdCIsImZpcnN0Q2hvaWNlIiwic2Vjb25kQ2hvaWNlIiwiY2hvaWNlIiwidCIsIm0iLCJzaHVmZmxlIiwiZ2V0UHJpb3JpdHlMaXN0IiwiZ2V0SW1hZ2VzIiwiZm9sZGVyIiwiZ2V0U291bmRzIiwiZ2V0SGlnaHNjb3JlIiwiam9pbiIsInB1dCIsImRlbGV0ZSIsInJlcG9ydExpc3QiLCJnZXRVc2VyIiwic2V0VG9rZW4iLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImNyZWF0ZVVzZXIiLCJGaWxlU3ZjIiwiYW5pbWFscyIsImFuaW1hbCIsInNvdW5kIiwic3Vic3RyaW5nIiwiY2FwaXRhbGl6ZSIsImdldFJhbmRvbUFuaW1hbHMiLCJndWVzcyIsImdldFNjb3JlIiwiaXNTY29yZVZpc2libGUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUFBLDJCQUFBQSxHQUFBLENBQ0E7SUFDQUMsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLENBQUE7RUFHQUMsT0FBQUEsR0FBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsTUFBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsQ0FBQTtBQUdBQyxNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGtCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBUiwyQkFBQUEsQ0FBQVMsTUFBQUEsQ0FBQSxDQUFBQyxNQUFBQSxFQUFBQyxNQUFBQSxLQUNBRCxNQUFBQSxDQUFBRSxPQUFBQSxDQUFBRCxNQUFBQSxDQUFBVCxPQUFBQSxFQUFBUyxNQUFBQSxDQUFBVixJQUFBQSxDQUFBQSxFQUNBWSxJQUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUE7QUFHQSxNQUFBQyxrQkFBQUEsR0FBQSxxQ0FBQTtBQUVBVixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLHlCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBRCxPQUFBQSxDQUFBLElBQUFHLE1BQUFBLENBQUEsSUFBQUQsa0JBQUFBLEdBQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsRUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQVYsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxxQkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUcsV0FBQUEsRUFBQUEsQ0FBQUMsZ0JBQUFBLEVBQUFBLENBQUFDLHVCQUFBQSxFQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWQsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxTQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBVyxLQUFBQSxFQUFBQTtJQUNBLE9BQUFOLElBQUFBLENBQUFELE9BQUFBLENBQUEsSUFBQUcsTUFBQUEsQ0FBQSxLQUFBRCxrQkFBQUEsR0FBQUssS0FBQUEsR0FBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxHQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBZixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFlBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFPLE1BQUFBLENBQUEsQ0FBQSxDQUFBLENBQUFDLFdBQUFBLEVBQUFBLEdBQUFSLElBQUFBLENBQUFTLEtBQUFBLENBQUEsQ0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWxCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsWUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLENBQUFBLE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsY0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQVUsVUFBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxDQUFBLENBQUFYLE9BQUFBLENBQUEsR0FBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBQSxPQUFBQSxDQUFBLEdBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQVcsVUFBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQW5CLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsY0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQWdCLElBQUFBLEVBQUFaLE9BQUFBLEVBQUFBO0lBRUEsS0FEQSxJQUFBYSxhQUFBQSxHQUFBWixJQUFBQSxFQUNBYSxDQUFBQSxHQUFBLENBQUEsRUFBQUEsQ0FBQUEsR0FBQUYsSUFBQUEsQ0FBQUcsTUFBQUEsRUFBQUQsQ0FBQUEsRUFBQUEsRUFDQUQsYUFBQUEsR0FBQUEsYUFBQUEsQ0FBQWIsT0FBQUEsQ0FBQVksSUFBQUEsQ0FBQUUsQ0FBQUEsQ0FBQUEsRUFBQWQsT0FBQUEsQ0FBQWMsQ0FBQUEsQ0FBQUEsQ0FBQUE7SUFFQSxPQUFBRCxhQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQXJCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsVUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQWUsWUFBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQSxTQUFBLENBQUEsRUFBQSxTQUFBLENBQUEsQ0FBQUEsWUFBQUEsQ0FBQXpCLE9BQUFBLEVBQUEsT0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQUMsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQXdCLE1BQUFBLENBQUF0QixTQUFBQSxFQUFBLGNBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFpQixRQUFBQSxFQUFBQSxDQUFBbEIsT0FBQUEsQ0FBQSx1QkFBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUF3QixNQUFBQSxDQUFBdEIsU0FBQUEsRUFBQSxnQkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQXVCLFFBQUFBLEVBQUFBO0lBRUEsT0FEQUEsUUFBQUEsS0FBQUEsUUFBQUEsR0FBQSxDQUFBLENBQUEsRUFDQSxHQUFBLENBQUEsR0FBQSxHQUFBbEIsSUFBQUEsRUFBQW1CLE9BQUFBLENBQUFELFFBQUFBLENBQUFBLEdBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQTtBQUdBLE1BQUFFLFVBQUFBLEdBQUFBLENBQUFDLEdBQUFBLEVBQUFDLFNBQUFBLEtBQUFBO0VBQ0EsSUFBQUMsR0FBQUEsR0FBQSxFQUFBO0VBQ0EsS0FBQSxNQUFBQyxHQUFBQSxJQUFBSCxHQUFBQSxFQUNBRSxHQUFBQSxDQUFBRSxJQUFBQSxDQUFBLENBQUFELEdBQUFBLEVBQUFILEdBQUFBLENBQUFHLEdBQUFBLENBQUFBLENBQUFBLENBQUFBO0VBRUFELEdBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQUMsQ0FBQUEsRUFBQUMsQ0FBQUEsS0FBQU4sU0FBQUEsR0FBQUssQ0FBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQUMsQ0FBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQUEsQ0FBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQUQsQ0FBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtFQUNBLElBQUFFLFNBQUFBLEdBQUEsQ0FBQSxDQUFBO0VBR0EsT0FGQU4sR0FBQUEsQ0FBQU8sT0FBQUEsQ0FBQUMsSUFBQUEsSUFBQUYsU0FBQUEsQ0FBQUUsSUFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBQSxJQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBRUFGLFNBQUE7QUFBQSxDQUFBO0FDN3FCQUcsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLEVBQUEsQ0FDQSxXQUFBLEVBQ0EsY0FBQSxFQUNBLFdBQUEsRUFDQSxZQUFBLEVBQ0EsWUFBQSxFQUNBLGFBQUEsRUFDQSxhQUFBLEVBQ0EsVUFBQSxFQUNBLFlBQUEsRUFDQSxpQkFBQSxDQUFBLENBQUEsRUNqQkFELE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQUFDLE1BQUFBLENBQUEsVUFBQUMsY0FBQUEsRUFBQUMsa0JBQUFBLEVBQUFDLG1CQUFBQSxFQUFBQyxpQkFBQUEsRUFBQUE7RUFDQUYsa0JBQUFBLENBQUFHLFNBQUFBLENBQUEsT0FBQSxDQUFBLEVBQ0FGLG1CQUFBQSxDQUFBSCxNQUFBQSxDQUFBTSxVQUFBQSxDQUFBQSxDQUFBLENBQUEsQ0FBQSxFQUVBTCxjQUFBQSxDQUNBTSxLQUFBQSxDQUFBLE1BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLE9BQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFlBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGFBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsUUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLFlBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxXQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsVUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsV0FBQTtJQUNBRSxVQUFBQSxFQUFBLGNBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE1BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLE9BQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsaUJBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsb0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGdCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxpQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxvQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEs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U0FBQUEsQ0FBQUE7SUFDQUUsWUFBQUEsR0FBQSxDQUNBO01BQ0FwRyxJQUFBQSxFQUFBLE9BQUE7TUFDQXFHLFlBQUFBLEVBQUEsYUFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7UUFDQTVNLENBQUFBLEVBQUEsQ0FBQTtRQUNBUyxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBb00sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0FBLFNBQUFBLENBQUFDLFFBQUFBLElBQUEsR0FDQTtNQUFBO0lBQUEsQ0FBQSxFQUVBO01BQ0E5RyxJQUFBQSxFQUFBLFVBQUE7TUFDQXFHLFlBQUFBLEVBQUEsWUFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7UUFDQTVNLENBQUFBLEVBQUEsQ0FBQTtRQUNBUyxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBb00sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0FBLFNBQUFBLENBQUFFLFFBQUFBLEdBQUEsQ0FBQSxLQUNBRixTQUFBQSxDQUFBRyxZQUFBQSxJQUFBLENBQUEsQ0FFQTtNQUFBO0lBQUEsQ0FBQSxFQUVBO01BQ0FoSCxJQUFBQSxFQUFBLE9BQUE7TUFDQXFHLFlBQUFBLEVBQUEsZ0JBQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBO1FBQ0E1TSxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQW9NLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBQSxTQUFBQSxDQUFBSSxLQUFBQSxJQUFBLENBQ0E7TUFBQTtJQUFBLENBQUEsRUFFQTtNQUNBakgsSUFBQUEsRUFBQSxRQUFBO01BQ0FxRyxZQUFBQSxFQUFBLFFBQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0E1TSxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQW9NLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBQSxTQUFBQSxDQUFBSyxNQUFBQSxHQUFBQSxDQUFBLENBQ0E7TUFBQTtJQUFBLENBQUEsRUFFQTtNQUNBbEgsSUFBQUEsRUFBQSxNQUFBO01BQ0FxRyxZQUFBQSxFQUFBLE1BQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0E1TSxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQW9NLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBLEtBQUEsSUFBQWhOLENBQUFBLElBQUFpTSxTQUFBQSxFQUNBQSxTQUFBQSxDQUFBak0sQ0FBQUEsQ0FBQUEsQ0FBQXNOLE9BQUFBLEVBQUFBO1FBRUFDLGNBQUFBLENBQUEsQ0FBQSxDQUNBO01BQUE7SUFBQSxDQUFBLENBQUE7RUFVQWhCLFlBQUFBLENBQUF0TCxPQUFBQSxDQUFBLFVBQUF1TSxPQUFBQSxFQUFBeE4sQ0FBQUEsRUFBQXlOLEtBQUFBLEVBQUFBO0lBQ0FBLEtBQUFBLENBQUF6TixDQUFBQSxDQUFBQSxDQUFBNk0sR0FBQUEsQ0FBQWEsR0FBQUEsR0FBQSxZQUFBLEdBQUFGLE9BQUFBLENBQUFySCxJQUFBQSxHQUFBLE1BQ0E7RUFBQSxDQUFBLENBQUE7RUFFQSxJQWtUQTZHLFNBQUFBO0lBbFRBVyxjQUFBQSxHQUFBLElBQUFiLEtBQUFBO0VBb0JBLFNBQUFjLFlBQUFBLENBQUFBLEVBQUFBO0lBQ0E5RyxNQUFBQSxDQUFBK0csT0FBQUEsSUFDQXpCLEdBQUFBLENBQUEsRUFBQSxDQUFBLElBRUEsQ0FBQSxLQUFBWSxTQUFBQSxDQUFBRSxRQUFBQSxJQUNBRixTQUFBQSxDQUFBYyxLQUFBQSxFQUFBQSxFQUdBMUIsR0FBQUEsQ0FBQSxFQUFBLENBQUEsS0FFQSxDQUFBLEtBQUFZLFNBQUFBLENBQUFlLFFBQUFBLEdBQ0FmLFNBQUFBLENBQUFlLFFBQUFBLEdBQUEsR0FBQSxHQUVBZixTQUFBQSxDQUFBZSxRQUFBQSxJQUFBLENBQUEsQ0FBQSxFQUdBM0IsR0FBQUEsQ0FBQSxFQUFBLENBQUEsS0FFQSxHQUFBLEtBQUFZLFNBQUFBLENBQUFlLFFBQUFBLEdBQ0FmLFNBQUFBLENBQUFlLFFBQUFBLEdBQUEsQ0FBQSxHQUVBZixTQUFBQSxDQUFBZSxRQUFBQSxJQUFBLENBQUEsQ0FBQSxFQUdBM0IsR0FBQUEsQ0FBQSxFQUFBLENBQUEsR0FFQVksU0FBQUEsQ0FBQWdCLEtBQUFBLElBQUFoQixTQUFBQSxDQUFBQyxRQUFBQSxLQUNBRCxTQUFBQSxDQUFBZ0IsS0FBQUEsSUFBQSxDQUFBLENBQUEsR0FHQWhCLFNBQUFBLENBQUFnQixLQUFBQSxHQUFBLENBQUEsSUFDQWhCLFNBQUFBLENBQUFnQixLQUFBQSxFQUFBQSxFQUdBNUIsR0FBQUEsQ0FBQSxFQUFBLENBQUEsSUFFQVksU0FBQUEsQ0FBQWdCLEtBQUFBLEdBQUEsQ0FBQSxLQUNBaEIsU0FBQUEsQ0FBQWdCLEtBQUFBLElBQUEsQ0FBQSxDQUFBLElBSUE1QixHQUFBQSxDQUFBLEVBQUEsQ0FBQSxLQXdQQXRGLE1BQUFBLENBQUErRyxPQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQS9HLE1BQUFBLENBQUFtSCxLQUFBQSxHQUFBLENBQUEsRUFDQTNCLEtBQUFBLEdBQUF0RSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBc0UsU0FBQUEsQ0FBQUEsRUFDQXZGLE1BQUFBLENBQUFuQyxNQUFBQSxFQUFBQSxFQUNBcUksU0FBQUEsR0FBQSxJQUFBa0IsU0FBQUEsSUFDQXBILE1BQUFBLENBQUFtSCxLQUFBQSxHQUFBLENBQUEsRUFDQVYsY0FBQUEsQ0FBQSxDQUFBLENBQUEsRUFDQVksU0FBQUEsRUFBQUEsQ0EzUEE7RUFBQTtFQUVBLFNBQUFELFNBQUFBLENBQUFBLEVBQUFBO0lBQ0EvTyxJQUFBQSxDQUFBaVAsS0FBQUEsR0FBQSxFQUFBLEVBQ0FqUCxJQUFBQSxDQUFBa1AsTUFBQUEsR0FBQSxFQUFBLEVBQ0FsUCxJQUFBQSxDQUFBa08sTUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0FsTyxJQUFBQSxDQUFBaU8sS0FBQUEsR0FBQSxFQUFBLEVBQ0FqTyxJQUFBQSxDQUFBbVAsTUFBQUEsR0FBQTtNQUNBQyxDQUFBQSxFQUFBcFAsSUFBQUEsQ0FBQWlQLEtBQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUE7TUFDQUksQ0FBQUEsRUFBQXJQLElBQUFBLENBQUFrUCxNQUFBQSxHQUFBLENBQUEsR0FBQSxPQUFBLEdBQUFsUCxJQUFBQSxDQUFBa1A7SUFBQUEsQ0FBQUEsRUFFQWxQLElBQUFBLENBQUErTixRQUFBQSxHQUFBLENBQUEsRUFDQS9OLElBQUFBLENBQUFnTyxZQUFBQSxHQUFBLEVBQUEsRUFDQWhPLElBQUFBLENBQUFzUCxRQUFBQSxHQUFBLENBQUFqRCxNQUFBQSxDQUFBNEMsS0FBQUEsR0FBQSxDQUFBLEdBQUFqUCxJQUFBQSxDQUFBaVAsS0FBQUEsR0FBQSxDQUFBLEVBQUE1QyxNQUFBQSxDQUFBNkMsTUFBQUEsR0FBQSxDQUFBLEdBQUFsUCxJQUFBQSxDQUFBa1AsTUFBQUEsR0FBQSxDQUFBLENBQUEsRUFDQWxQLElBQUFBLENBQUEwTixHQUFBQSxHQUFBLElBQUFDLEtBQUFBLElBQ0EzTixJQUFBQSxDQUFBME4sR0FBQUEsQ0FBQWEsR0FBQUEsR0FBQSx5QkFBQSxFQUNBdk8sSUFBQUEsQ0FBQTZPLEtBQUFBLEdBQUEsQ0FBQSxFQUNBN08sSUFBQUEsQ0FBQThOLFFBQUFBLEdBQUEsR0FBQSxFQUNBOU4sSUFBQUEsQ0FBQXVQLEtBQUFBLEdBQUEsQ0FBQSxFQUNBdlAsSUFBQUEsQ0FBQTRPLFFBQUFBLEdBQUEsQ0FBQSxFQUVBNU8sSUFBQUEsQ0FBQTJPLEtBQUFBLEdBQUEsWUFBQTtNQUNBM08sSUFBQUEsQ0FBQStOLFFBQUFBLEdBQUEvTixJQUFBQSxDQUFBZ08sWUFBQUE7TUFDQSxJQUFBd0IsRUFBQUEsR0FBQTNHLElBQUFBLENBQUE0RyxLQUFBQSxDQUFBLEdBQUEsR0FBQTVHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLENBQUFBO01BQ0FpRSxLQUFBQSxDQUFBMkMsRUFBQUEsQ0FBQUEsR0FBQSxJQUFBRSxJQUFBQSxDQUFBRixFQUFBQSxFQUFBeFAsSUFBQUEsQ0FDQTtJQUFBLENBQUEsRUFFQUEsSUFBQUEsQ0FBQTJQLElBQUFBLEdBQUEsWUFBQTtNQVVBLEtBQUEsSUFBQTlPLENBQUFBLElBVEFiLElBQUFBLENBQUFrTyxNQUFBQSxLQUNBMUIsR0FBQUEsQ0FBQW9ELFNBQUFBLEVBQUFBLEVBQ0FwRCxHQUFBQSxDQUFBcUQsR0FBQUEsQ0FBQTdQLElBQUFBLENBQUFzUCxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdFAsSUFBQUEsQ0FBQWlQLEtBQUFBLEdBQUEsQ0FBQSxFQUFBalAsSUFBQUEsQ0FBQXNQLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUF0UCxJQUFBQSxDQUFBa1AsTUFBQUEsR0FBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEdBQUFyRyxJQUFBQSxDQUFBaUgsRUFBQUEsQ0FBQUEsRUFDQXRELEdBQUFBLENBQUFHLFNBQUFBLEdBQUEsdUJBQUEsRUFDQUgsR0FBQUEsQ0FBQXVELFdBQUFBLEdBQUEsdUJBQUEsRUFDQXZELEdBQUFBLENBQUF3RCxTQUFBQSxHQUFBLENBQUEsRUFDQXhELEdBQUFBLENBQUF5RCxNQUFBQSxFQUFBQSxFQUNBekQsR0FBQUEsQ0FBQTBELElBQUFBLEVBQUFBLENBQUFBLEVBRUFwRCxTQUFBQSxFQUFBO1FBQ0EsSUFBQXFELFFBQUFBLEdBQUFyRCxTQUFBQSxDQUFBak0sQ0FBQUEsQ0FBQUE7UUFDQSxJQUFBdVAsR0FBQUEsQ0FBQUQsUUFBQUEsRUFBQW5RLElBQUFBLENBQUFBLEVBQUE7VUFDQSxJQUFBLENBQUFBLElBQUFBLENBQUFrTyxNQUFBQSxFQUlBLE9BQUFtQyxRQUFBQSxFQUFBQTtVQUhBclEsSUFBQUEsQ0FBQWtPLE1BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBaUMsUUFBQUEsQ0FBQWhDLE9BQUFBLEVBSUE7UUFBQTtNQUNBO01BQ0FuTyxJQUFBQSxDQUFBdVAsS0FBQUEsR0FBQXZQLElBQUFBLENBQUE0TyxRQUFBQSxFQUNBNU8sSUFBQUEsQ0FBQStOLFFBQUFBLEdBQUEsQ0FBQSxJQUNBL04sSUFBQUEsQ0FBQStOLFFBQUFBLEVBQUFBLEVBRUE0QixJQUFBQSxDQUFBM1AsSUFBQUEsQ0FDQTtJQUFBLENBQ0E7RUFBQTtFQUVBLFNBQUEwUCxJQUFBQSxDQUFBRixFQUFBQSxFQUFBM0IsU0FBQUEsRUFBQUE7SUFDQTdOLElBQUFBLENBQUF3UCxFQUFBQSxHQUFBQSxFQUFBQSxFQUNBeFAsSUFBQUEsQ0FBQXNQLFFBQUFBLEdBQUEsQ0FDQXpCLFNBQUFBLENBQUF5QixRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUNBekIsU0FBQUEsQ0FBQXNCLE1BQUFBLENBQUFDLENBQUFBLEdBQ0F2QixTQUFBQSxDQUFBc0IsTUFBQUEsQ0FBQUMsQ0FBQUEsR0FBQXZHLElBQUFBLENBQUF5SCxHQUFBQSxDQUFBQSxDQUFBekMsU0FBQUEsQ0FBQWUsUUFBQUEsR0FBQSxFQUFBLElBQUEvRixJQUFBQSxDQUFBaUgsRUFBQUEsR0FBQSxHQUFBLENBQUEsRUFDQWpDLFNBQUFBLENBQUF5QixRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUNBekIsU0FBQUEsQ0FBQXNCLE1BQUFBLENBQUFFLENBQUFBLEdBQ0F4QixTQUFBQSxDQUFBc0IsTUFBQUEsQ0FBQUUsQ0FBQUEsR0FBQXhHLElBQUFBLENBQUEwSCxHQUFBQSxDQUFBQSxDQUFBMUMsU0FBQUEsQ0FBQWUsUUFBQUEsR0FBQSxFQUFBLElBQUEvRixJQUFBQSxDQUFBaUgsRUFBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxFQUVBOVAsSUFBQUEsQ0FBQWlQLEtBQUFBLEdBQUEsQ0FBQSxFQUNBalAsSUFBQUEsQ0FBQWtQLE1BQUFBLEdBQUEsRUFBQSxFQUNBbFAsSUFBQUEsQ0FBQXVQLEtBQUFBLEdBQUExQixTQUFBQSxDQUFBMEIsS0FBQUEsRUFDQXZQLElBQUFBLENBQUE0TyxRQUFBQSxHQUFBZixTQUFBQSxDQUFBZSxRQUFBQSxFQUNBNU8sSUFBQUEsQ0FBQTZPLEtBQUFBLEdBQUFoQixTQUFBQSxDQUFBZ0IsS0FBQUEsR0FBQSxHQUFBLEVBQ0E3TyxJQUFBQSxDQUFBd1EsUUFBQUEsR0FBQTNDLFNBQUFBLENBQUFJLEtBQUFBLEVBQ0FqTyxJQUFBQSxDQUFBME4sR0FBQUEsR0FBQSxJQUFBQyxLQUFBQSxJQUNBM04sSUFBQUEsQ0FBQTBOLEdBQUFBLENBQUFhLEdBQUFBLEdBQUEsb0JBQUEsRUFFQXZPLElBQUFBLENBQUEyUCxJQUFBQSxHQUFBLFlBQUE7TUFDQTNQLElBQUFBLENBQUF3USxRQUFBQSxFQUFBQSxFQUNBYixJQUFBQSxDQUFBM1AsSUFBQUEsQ0FDQTtJQUFBLENBQ0E7RUFBQTtFQUVBLFNBQUF5USxRQUFBQSxDQUFBakIsRUFBQUEsRUFBQUE7SUFDQXhQLElBQUFBLENBQUF3UCxFQUFBQSxHQUFBQSxFQUFBQSxFQUNBeFAsSUFBQUEsQ0FBQWlQLEtBQUFBLEdBQUEsRUFBQSxHQUFBcEcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQSxFQUFBLEVBQ0E1SSxJQUFBQSxDQUFBa1AsTUFBQUEsR0FBQWxQLElBQUFBLENBQUFpUCxLQUFBQSxFQUNBalAsSUFBQUEsQ0FBQXNQLFFBQUFBLEdBQUFvQixnQkFBQUEsQ0FBQTFRLElBQUFBLENBQUFpUCxLQUFBQSxFQUFBalAsSUFBQUEsQ0FBQWtQLE1BQUFBLENBQUFBLEVBQ0FsUCxJQUFBQSxDQUFBdVAsS0FBQUEsR0FBQSxHQUFBLEdBQUExRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxFQUNBNUksSUFBQUEsQ0FBQTRPLFFBQUFBLEdBQUEsR0FBQSxHQUFBL0YsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsRUFDQTVJLElBQUFBLENBQUEyUSxhQUFBQSxHQUFBLENBQUEsR0FBQTlILElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUEsQ0FBQSxFQUNBNUksSUFBQUEsQ0FBQTZPLEtBQUFBLEdBQUEsR0FBQSxHQUFBaEcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQSxDQUFBLEVBQ0E1SSxJQUFBQSxDQUFBME4sR0FBQUEsR0FBQSxJQUFBQyxLQUFBQSxJQUNBM04sSUFBQUEsQ0FBQTBOLEdBQUFBLENBQUFhLEdBQUFBLEdBQUEsb0JBQUEsSUFBQTFGLElBQUFBLENBQUE0RyxLQUFBQSxDQUFBLENBQUEsR0FBQTVHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLENBQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsTUFBQSxFQUVBNUksSUFBQUEsQ0FBQW1PLE9BQUFBLEdBQUEsWUFBQTtNQUVBLE9BREFuQixVQUFBQSxDQUFBaE4sSUFBQUEsQ0FBQXdQLEVBQUFBLENBQUFBLEdBQUEsSUFBQW9CLFNBQUFBLENBQUE1USxJQUFBQSxDQUFBQSxFQUFBQSxPQUNBOE0sU0FBQUEsQ0FBQTlNLElBQUFBLENBQUF3UCxFQUFBQSxDQUNBO0lBQUEsQ0FBQSxFQUVBeFAsSUFBQUEsQ0FBQTJQLElBQUFBLEdBQUEsWUFBQTtNQU9BLEtBQUEsSUFBQTlPLENBQUFBLElBTkFiLElBQUFBLENBQUE0TyxRQUFBQSxJQUFBNU8sSUFBQUEsQ0FBQTJRLGFBQUFBLEVBQ0EzUSxJQUFBQSxDQUFBNE8sUUFBQUEsR0FBQSxHQUFBLEdBQ0E1TyxJQUFBQSxDQUFBNE8sUUFBQUEsR0FBQTVPLElBQUFBLENBQUE0TyxRQUFBQSxHQUFBLEdBQUEsR0FDQTVPLElBQUFBLENBQUE0TyxRQUFBQSxHQUFBLENBQUEsS0FDQTVPLElBQUFBLENBQUE0TyxRQUFBQSxHQUFBLEdBQUEsR0FBQTVPLElBQUFBLENBQUE0TyxRQUFBQSxDQUFBQSxFQUVBL0IsS0FBQUEsRUFBQTtRQUNBLElBQUFnRSxJQUFBQSxHQUFBaEUsS0FBQUEsQ0FBQWhNLENBQUFBLENBQUFBO1FBQ0EsSUFBQXVQLEdBQUFBLENBQUFTLElBQUFBLEVBQUE3USxJQUFBQSxDQUFBQSxFQUFBO1VBQ0FBLElBQUFBLENBQUFtTyxPQUFBQSxFQUFBQTtVQUNBLElBQUEyQyxNQUFBQSxHQUFBakksSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQUEsQ0FBQStILElBQUFBLENBQUFoQyxLQUFBQSxHQUFBLEdBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxHQUFBN08sSUFBQUEsQ0FBQWlQLEtBQUFBLENBQUFBO1VBQ0FwRyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBQSxDQUFBZ0ksTUFBQUEsR0FBQW5KLE1BQUFBLENBQUFtSCxLQUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBakcsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQW5CLE1BQUFBLENBQUFtSCxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxJQUNBaUMsWUFBQUEsRUFBQUEsRUFFQXBKLE1BQUFBLENBQUFtSCxLQUFBQSxJQUFBZ0MsTUFBQUEsRUFDQW5KLE1BQUFBLENBQUFuQyxNQUFBQSxFQUFBQSxFQUFBQSxPQUNBcUgsS0FBQUEsQ0FBQWhNLENBQUFBLENBQ0E7UUFBQTtNQUNBO01BQ0E4TyxJQUFBQSxDQUFBM1AsSUFBQUEsQ0FDQTtJQUFBLENBQ0E7RUFBQTtFQUVBLFNBQUE0USxTQUFBQSxDQUFBSSxNQUFBQSxFQUFBQTtJQUNBaFIsSUFBQUEsQ0FBQXNQLFFBQUFBLEdBQUEsQ0FBQTBCLE1BQUFBLENBQUExQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBMEIsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFDQXRQLElBQUFBLENBQUFpUCxLQUFBQSxHQUFBK0IsTUFBQUEsQ0FBQS9CLEtBQUFBLEVBQ0FqUCxJQUFBQSxDQUFBa1AsTUFBQUEsR0FBQThCLE1BQUFBLENBQUE5QixNQUFBQSxFQUNBbFAsSUFBQUEsQ0FBQTZPLEtBQUFBLEdBQUEsQ0FBQSxFQUNBN08sSUFBQUEsQ0FBQXVQLEtBQUFBLEdBQUEsR0FBQSxHQUFBMUcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsRUFDQTVJLElBQUFBLENBQUFzTixLQUFBQSxHQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7TUFDQTVNLENBQUFBLEVBQUEsQ0FBQTtNQUNBUyxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUVBdEIsSUFBQUEsQ0FBQXdRLFFBQUFBLEdBQUEsRUFBQSxFQUNBeFEsSUFBQUEsQ0FBQTBOLEdBQUFBLEdBQUFjLGNBQUFBLEVBRUF4TyxJQUFBQSxDQUFBMlAsSUFBQUEsR0FBQSxZQUFBO01BQ0EzUCxJQUFBQSxDQUFBd1EsUUFBQUEsRUFBQUEsRUFDQWIsSUFBQUEsQ0FBQTNQLElBQUFBLENBQUFBLEVBQ0FBLElBQUFBLENBQUFzTixLQUFBQSxDQUFBaE0sU0FBQUEsR0FDQXRCLElBQUFBLENBQUFzTixLQUFBQSxDQUFBek0sQ0FBQUEsRUFBQUEsR0FFQWIsSUFBQUEsQ0FBQXNOLEtBQUFBLENBQUF6TSxDQUFBQSxFQUVBO0lBQUEsQ0FDQTtFQUFBO0VBRUEsU0FBQW9RLE9BQUFBLENBQUF6QixFQUFBQSxFQUFBQTtJQUNBeFAsSUFBQUEsQ0FBQXdQLEVBQUFBLEdBQUFBLEVBQUFBLEVBQ0F4UCxJQUFBQSxDQUFBcU8sT0FBQUEsR0FBQWpCLFlBQUFBLENBQUF2RSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBd0UsWUFBQUEsQ0FBQXRNLE1BQUFBLENBQUFBLENBQUFBLEVBQ0FkLElBQUFBLENBQUFzTixLQUFBQSxHQUFBdE4sSUFBQUEsQ0FBQXFPLE9BQUFBLENBQUFmLEtBQUFBLEVBQ0F0TixJQUFBQSxDQUFBd1EsUUFBQUEsR0FBQSxHQUFBLEVBQ0F4USxJQUFBQSxDQUFBc04sS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXpOLElBQUFBLENBQUFzTixLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxJQUNBek4sSUFBQUEsQ0FBQWtQLE1BQUFBLEdBQUEsRUFBQSxFQUNBbFAsSUFBQUEsQ0FBQWlQLEtBQUFBLEdBQUFwRyxJQUFBQSxDQUFBNEcsS0FBQUEsQ0FBQXpQLElBQUFBLENBQUFrUCxNQUFBQSxHQUFBbFAsSUFBQUEsQ0FBQXNOLEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUF6TixJQUFBQSxDQUFBc04sS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUVBek4sSUFBQUEsQ0FBQWlQLEtBQUFBLEdBQUEsRUFBQSxFQUNBalAsSUFBQUEsQ0FBQWtQLE1BQUFBLEdBQUFyRyxJQUFBQSxDQUFBNEcsS0FBQUEsQ0FBQXpQLElBQUFBLENBQUFpUCxLQUFBQSxHQUFBalAsSUFBQUEsQ0FBQXNOLEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUF6TixJQUFBQSxDQUFBc04sS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBRUF6TixJQUFBQSxDQUFBc1AsUUFBQUEsR0FBQW9CLGdCQUFBQSxDQUFBMVEsSUFBQUEsQ0FBQWlQLEtBQUFBLEVBQUFqUCxJQUFBQSxDQUFBa1AsTUFBQUEsQ0FBQUEsRUFDQWxQLElBQUFBLENBQUEwTixHQUFBQSxHQUFBMU4sSUFBQUEsQ0FBQXFPLE9BQUFBLENBQUFYLEdBQUFBLEVBQ0ExTixJQUFBQSxDQUFBdVAsS0FBQUEsR0FBQSxHQUFBLEdBQUExRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxFQUNBNUksSUFBQUEsQ0FBQTZPLEtBQUFBLEdBQUEsR0FBQSxHQUFBaEcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQSxFQUFBO0lBQ0EsSUFBQXNJLEtBQUFBLEdBQUEsQ0FBQTtJQUNBbFIsSUFBQUEsQ0FBQTJQLElBQUFBLEdBQUEsTUFDQTNQLElBQUFBLENBQUF3USxRQUFBQSxJQUFBLENBQUEsR0FBQSxPQUNBekQsUUFBQUEsQ0FBQS9NLElBQUFBLENBQUF3UCxFQUFBQSxDQUFBQSxHQUVBWSxHQUFBQSxDQUFBdkMsU0FBQUEsRUFBQTdOLElBQUFBLENBQUFBLElBQ0EySCxNQUFBQSxDQUFBeUUsUUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0F6RSxNQUFBQSxDQUFBMEYsWUFBQUEsR0FBQXJOLElBQUFBLENBQUFxTyxPQUFBQSxDQUFBaEIsWUFBQUEsRUFDQTFGLE1BQUFBLENBQUFuQyxNQUFBQSxFQUFBQSxFQUNBMEQsVUFBQUEsQ0FBQSxNQUFBO01BQ0F2QixNQUFBQSxDQUFBeUUsUUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0F6RSxNQUFBQSxDQUFBbkMsTUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQSxHQUFBLENBQUEsRUFDQXhGLElBQUFBLENBQUFxTyxPQUFBQSxDQUFBVCxRQUFBQSxDQUFBQyxTQUFBQSxDQUFBQSxFQUFBQSxPQUNBZCxRQUFBQSxDQUFBL00sSUFBQUEsQ0FBQXdQLEVBQUFBLENBQUFBLEtBRUF4UCxJQUFBQSxDQUFBd1EsUUFBQUEsRUFBQUEsRUFDQWIsSUFBQUEsQ0FBQTNQLElBQUFBLENBQUFBLEVBQUFBLE1BQ0FrUixLQUFBQSxJQUFBLENBQUEsSUFDQWxSLElBQUFBLENBQUFzTixLQUFBQSxDQUFBaE0sU0FBQUEsR0FDQXRCLElBQUFBLENBQUFzTixLQUFBQSxDQUFBek0sQ0FBQUEsRUFBQUEsR0FFQWIsSUFBQUEsQ0FBQXNOLEtBQUFBLENBQUF6TSxDQUFBQSxFQUFBQSxFQUVBcVEsS0FBQUEsR0FBQSxDQUFBLElBRUFBLEtBQUFBLEVBQUFBLENBQUFBLENBR0E7RUFBQTtFQUVBLFNBQUF2QixJQUFBQSxDQUFBcUIsTUFBQUEsRUFBQUE7SUFpQkEsSUFoQkFBLE1BQUFBLENBQUExQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBMEIsTUFBQUEsQ0FBQW5DLEtBQUFBLEdBQUEsR0FBQSxHQUFBaEcsSUFBQUEsQ0FBQXlILEdBQUFBLENBQUFBLENBQUFVLE1BQUFBLENBQUF6QixLQUFBQSxHQUFBLEVBQUEsSUFBQTFHLElBQUFBLENBQUFpSCxFQUFBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBa0IsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEwQixNQUFBQSxDQUFBbkMsS0FBQUEsR0FBQSxHQUFBLEdBQUFoRyxJQUFBQSxDQUFBMEgsR0FBQUEsQ0FBQUEsQ0FBQVMsTUFBQUEsQ0FBQXpCLEtBQUFBLEdBQUEsRUFBQSxJQUFBMUcsSUFBQUEsQ0FBQWlILEVBQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FrQixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQWpELE1BQUFBLENBQUE0QyxLQUFBQSxHQUNBK0IsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQTBCLE1BQUFBLENBQUEvQixLQUFBQSxHQUNBK0IsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQTBCLE1BQUFBLENBQUEvQixLQUFBQSxLQUNBK0IsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUFqRCxNQUFBQSxDQUFBNEMsS0FBQUEsQ0FBQUEsRUFFQStCLE1BQUFBLENBQUExQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBakQsTUFBQUEsQ0FBQTZDLE1BQUFBLEdBQ0E4QixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBMEIsTUFBQUEsQ0FBQTlCLE1BQUFBLEdBQ0E4QixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBMEIsTUFBQUEsQ0FBQTlCLE1BQUFBLEtBQ0E4QixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQWpELE1BQUFBLENBQUE2QyxNQUFBQSxDQUFBQSxFQUVBMUMsR0FBQUEsQ0FBQTJFLElBQUFBLEVBQUFBLEVBQ0EzRSxHQUFBQSxDQUFBNEUsU0FBQUEsQ0FBQUosTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEwQixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNBOUMsR0FBQUEsQ0FBQTRFLFNBQUFBLENBQUFKLE1BQUFBLENBQUEvQixLQUFBQSxHQUFBLENBQUEsRUFBQStCLE1BQUFBLENBQUE5QixNQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBMUMsR0FBQUEsQ0FBQTZFLE1BQUFBLENBQUFMLE1BQUFBLENBQUFwQyxRQUFBQSxHQUFBL0YsSUFBQUEsQ0FBQWlILEVBQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FrQixNQUFBQSxDQUFBMUQsS0FBQUEsRUFBQTtNQUNBLElBQUFnRSxNQUFBQSxHQUFBTixNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQXpNLENBQUFBLEdBQUFtUSxNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQUUsT0FBQUE7UUFDQStELEdBQUFBLEdBQUExSSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBa0ksTUFBQUEsQ0FBQTFELEtBQUFBLENBQUF6TSxDQUFBQSxHQUFBbVEsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUFFLE9BQUFBLENBQUFBO01BQ0FoQixHQUFBQSxDQUFBZ0YsU0FBQUEsQ0FDQVIsTUFBQUEsQ0FBQXRELEdBQUFBLEVBQ0FzRCxNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQTZELE1BQUFBLEVBQ0FOLE1BQUFBLENBQUExRCxLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBOEQsR0FBQUEsRUFDQVAsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLEVBQ0F1RCxNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxDQUNBdUQsTUFBQUEsQ0FBQS9CLEtBQUFBLEdBQUEsQ0FBQSxFQUFBLENBQ0ErQixNQUFBQSxDQUFBOUIsTUFBQUEsR0FBQSxDQUFBLEVBQ0E4QixNQUFBQSxDQUFBL0IsS0FBQUEsRUFDQStCLE1BQUFBLENBQUE5QixNQUFBQSxDQUFBQSxFQUdBOEIsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUF6TSxDQUFBQSxJQUFBLENBQUEsSUFDQW1RLE1BQUFBLENBQUExRCxLQUFBQSxDQUFBek0sQ0FBQUEsR0FBQSxDQUFBLEVBQ0FtUSxNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQWhNLFNBQUFBLEdBQUFBLENBQUEsQ0FBQSxJQUNBMFAsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUF6TSxDQUFBQSxJQUFBbVEsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUFFLE9BQUFBLEdBQUF3RCxNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQUMsSUFBQUEsS0FDQXlELE1BQUFBLENBQUExRCxLQUFBQSxDQUFBek0sQ0FBQUEsR0FBQW1RLE1BQUFBLENBQUExRCxLQUFBQSxDQUFBRSxPQUFBQSxHQUFBd0QsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUFDLElBQUFBLEdBQUEsQ0FBQSxFQUNBeUQsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUFoTSxTQUFBQSxHQUFBQSxDQUFBLENBQUEsQ0FFQTtJQUFBLENBQUEsTUFDQWtMLEdBQUFBLENBQUFnRixTQUFBQSxDQUFBUixNQUFBQSxDQUFBdEQsR0FBQUEsRUFBQUEsQ0FBQXNELE1BQUFBLENBQUEvQixLQUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBK0IsTUFBQUEsQ0FBQTlCLE1BQUFBLEdBQUEsQ0FBQSxFQUFBOEIsTUFBQUEsQ0FBQS9CLEtBQUFBLEVBQUErQixNQUFBQSxDQUFBOUIsTUFBQUEsQ0FBQUE7SUFFQTFDLEdBQUFBLENBQUFpRixPQUFBQSxFQUNBO0VBQUE7RUFlQSxTQUFBZixnQkFBQUEsQ0FBQXpCLEtBQUFBLEVBQUFDLE1BQUFBLEVBQUFBO0lBQ0EsSUFFQUUsQ0FBQUE7TUFGQXNDLEtBQUFBLEdBQUEsQ0FBQSxHQUFBN0ksSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUE7TUFDQStJLEtBQUFBLEdBQUEsQ0FBQSxHQUFBOUksSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUE7TUFFQXlHLENBQUFBLEdBQUEsQ0FBQTtJQWdCQSxPQWZBcUMsS0FBQUEsSUFBQSxDQUFBLElBQ0F0QyxDQUFBQSxHQUFBdkcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQXlELE1BQUFBLENBQUE0QyxLQUFBQSxFQUVBSSxDQUFBQSxHQURBQSxDQUFBQSxJQUFBLENBQUEsR0FDQSxDQUFBLEdBQUFILE1BQUFBLEdBRUE3QyxNQUFBQSxDQUFBNkMsTUFBQUEsS0FHQUcsQ0FBQUEsR0FBQXhHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUF5RCxNQUFBQSxDQUFBNkMsTUFBQUEsRUFFQUUsQ0FBQUEsR0FEQXVDLEtBQUFBLElBQUEsQ0FBQSxHQUNBLENBQUEsR0FBQTFDLEtBQUFBLEdBRUE1QyxNQUFBQSxDQUFBNEMsS0FBQUEsQ0FBQUEsRUFHQSxDQUFBRyxDQUFBQSxFQUFBQyxDQUFBQSxDQUNBO0VBQUE7RUFFQSxTQUFBZSxHQUFBQSxDQUFBd0IsT0FBQUEsRUFBQUMsT0FBQUEsRUFBQUE7SUFDQSxPQUNBRCxPQUFBQSxDQUFBdEMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXVDLE9BQUFBLENBQUF2QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdUMsT0FBQUEsQ0FBQTVDLEtBQUFBLElBQ0E0QyxPQUFBQSxDQUFBdkMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXNDLE9BQUFBLENBQUF0QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBc0MsT0FBQUEsQ0FBQTNDLEtBQUFBLElBQ0EyQyxPQUFBQSxDQUFBdEMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXVDLE9BQUFBLENBQUF2QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdUMsT0FBQUEsQ0FBQTNDLE1BQUFBLElBQ0EyQyxPQUFBQSxDQUFBdkMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXNDLE9BQUFBLENBQUF0QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBc0MsT0FBQUEsQ0FBQTFDLE1BRUE7RUFBQTtFQUVBLFNBQUFGLFNBQUFBLENBQUFBLEVBQUFBO0lBQ0EsSUFBQXpQLE1BQUFBLENBQUF1UyxJQUFBQSxDQUFBaEYsU0FBQUEsQ0FBQUEsQ0FBQWhNLE1BQUFBLEdBQUEsR0FBQSxFQUFBO01BQ0EsSUFBQTBPLEVBQUFBLEdBQUEzRyxJQUFBQSxDQUFBNEcsS0FBQUEsQ0FBQSxHQUFBLEdBQUE1RyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxDQUFBQTtNQUNBa0UsU0FBQUEsQ0FBQTBDLEVBQUFBLENBQUFBLEdBQUEsSUFBQWlCLFFBQUFBLENBQUFqQixFQUFBQSxDQUNBO0lBQUE7SUFDQTdILE1BQUFBLENBQUErRyxPQUFBQSxJQUNBeEYsVUFBQUEsQ0FBQSxZQUFBO01BQ0E4RixTQUFBQSxFQUNBO0lBQUEsQ0FBQSxFQUtBckgsTUFBQUEsQ0FBQW1ILEtBQUFBLEdBQUEsR0FBQSxHQUNBLEdBQUEsR0FDQW5ILE1BQUFBLENBQUFtSCxLQUFBQSxHQUFBLEdBQUEsR0FDQSxHQUFBLEdBQ0FuSCxNQUFBQSxDQUFBbUgsS0FBQUEsR0FBQSxHQUFBLEdBQ0EsR0FBQSxHQUNBbkgsTUFBQUEsQ0FBQW1ILEtBQUFBLEdBQUEsR0FBQSxHQUNBLEdBQUEsR0FDQW5ILE1BQUFBLENBQUFtSCxLQUFBQSxHQUFBLEdBQUEsR0FDQSxHQUFBLEdBQ0FuSCxNQUFBQSxDQUFBbUgsS0FBQUEsR0FBQSxHQUFBLEdBQ0EsR0FBQSxHQUNBbkgsTUFBQUEsQ0FBQW1ILEtBQUFBLEdBQUEsR0FBQSxHQUNBLEdBQUEsR0FDQW5ILE1BQUFBLENBQUFtSCxLQUFBQSxHQUFBLEdBQUEsR0FDQSxHQUFBLEdBRUEsR0FBQSxDQXBCQTtFQUFBO0VBd0JBLFNBQUFWLGNBQUFBLENBQUEyRCxNQUFBQSxFQUFBQTtJQUNBLElBQUFsUixDQUFBQSxHQUFBLENBQUE7SUFDQSxHQUFBO01BQ0EsSUFBQTJPLEVBQUFBLEdBQUEzRyxJQUFBQSxDQUFBNEcsS0FBQUEsQ0FBQSxHQUFBLEdBQUE1RyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxDQUFBQTtNQUNBa0UsU0FBQUEsQ0FBQTBDLEVBQUFBLENBQUFBLEdBQUEsSUFBQWlCLFFBQUFBLENBQUFqQixFQUFBQSxDQUNBO0lBQUEsQ0FBQSxRQUFBM08sQ0FBQUEsRUFBQUEsSUFBQWtSLE1BQUFBO0VBQ0E7RUFFQSxTQUFBaEIsWUFBQUEsQ0FBQUEsRUFBQUE7SUFDQSxJQUFBeFIsTUFBQUEsQ0FBQXVTLElBQUFBLENBQUEvRSxRQUFBQSxDQUFBQSxDQUFBak0sTUFBQUEsR0FBQSxDQUFBLEVBQUE7TUFDQSxJQUFBME8sRUFBQUEsR0FBQTNHLElBQUFBLENBQUE0RyxLQUFBQSxDQUFBLEdBQUEsR0FBQTVHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLENBQUFBO01BQ0FtRSxRQUFBQSxDQUFBeUMsRUFBQUEsQ0FBQUEsR0FBQSxJQUFBeUIsT0FBQUEsQ0FBQXpCLEVBQUFBLENBQ0E7SUFBQTtFQUNBO0VBRUEsU0FBQWEsUUFBQUEsQ0FBQUEsRUFBQUE7SUFFQSxLQUFBLElBQUF4UCxDQUFBQSxJQURBOEcsTUFBQUEsQ0FBQStHLE9BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBNUIsU0FBQUEsRUFDQUEsU0FBQUEsQ0FBQWpNLENBQUFBLENBQUFBLENBQUFzTixPQUFBQSxFQUFBQTtJQUVBdEIsS0FBQUEsR0FBQSxDQUFBLENBQUEsRUFDQWxGLE1BQUFBLENBQUF1RCxRQUFBQSxHQUNBdkQsTUFBQUEsQ0FBQXlELFdBQUFBLENBQUE0RyxTQUFBQSxDQUFBbEYsU0FBQUEsR0FBQW5GLE1BQUFBLENBQUFtSCxLQUFBQSxLQUNBbkgsTUFBQUEsQ0FBQXlELFdBQUFBLENBQUE0RyxTQUFBQSxDQUFBbEYsU0FBQUEsR0FBQW5GLE1BQUFBLENBQUFtSCxLQUFBQSxFQUNBM0MsT0FBQUEsQ0FBQThGLFlBQUFBLENBQUEsV0FBQSxFQUFBdEssTUFBQUEsQ0FBQXlELFdBQUFBLENBQUFELEdBQUFBLEVBQUF4RCxNQUFBQSxDQUFBbUgsS0FBQUEsQ0FBQUEsQ0FBQUEsR0FHQW5ILE1BQUFBLENBQUFxSyxTQUFBQSxHQUFBckssTUFBQUEsQ0FBQW1ILEtBQUFBLEtBQ0FuSCxNQUFBQSxDQUFBcUssU0FBQUEsR0FBQXJLLE1BQUFBLENBQUFtSCxLQUFBQSxDQUdBO0VBQUE7RUFpQkEsU0FBQW9ELFlBQUFBLENBQUFBLEVBQUFBO0lBQ0F2TyxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBTixNQUFBQSxDQUFBNk8sVUFBQUEsQ0FBQUEsRUFDQTlGLE1BQUFBLENBQUE0QyxLQUFBQSxHQUFBM0wsTUFBQUEsQ0FBQTZPLFVBQUFBLEVBQ0E5RixNQUFBQSxDQUFBNkMsTUFBQUEsR0FBQTVMLE1BQUFBLENBQUE4TyxXQUFBQSxJQUFBL0YsTUFBQUEsQ0FBQTRDLEtBQUFBLElBQUEsR0FBQSxHQUFBLEVBQUEsR0FBQSxHQUFBLENBQ0E7RUFBQTtFQXBiQVQsY0FBQUEsQ0FBQUQsR0FBQUEsR0FBQSx5QkFBQSxFQUVBakwsTUFBQUEsQ0FBQStPLGdCQUFBQSxDQUNBLFNBQUEsRUFDQSxVQUFBdk8sQ0FBQUEsRUFBQUE7SUFDQW1KLEdBQUFBLENBQUFuSixDQUFBQSxDQUFBd08sT0FBQUEsSUFBQXhPLENBQUFBLENBQUF5TyxLQUFBQSxDQUFBQSxHQUFBQSxDQUFBLENBQ0E7RUFBQSxDQUFBLEVBQUEsQ0FDQSxDQUFBLENBQUEsRUFFQWpQLE1BQUFBLENBQUErTyxnQkFBQUEsQ0FDQSxPQUFBLEVBQ0EsVUFBQXZPLENBQUFBLEVBQUFBO0lBQ0FtSixHQUFBQSxDQUFBbkosQ0FBQUEsQ0FBQXdPLE9BQUFBLElBQUF4TyxDQUFBQSxDQUFBeU8sS0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxFQUFBLENBQ0EsQ0FBQSxDQUFBLEVBR0E1SyxNQUFBQSxDQUFBcUssU0FBQUEsR0FBQSxDQUFBLEVBdVpBMU8sTUFBQUEsQ0FBQStPLGdCQUFBQSxDQUFBLFFBQUEsRUFBQUgsWUFBQUEsRUFBQUEsQ0FBQSxDQUFBLENBQUEsRUFHQUEsWUFBQUEsRUFBQUEsRUFZQU0scUJBQUFBLENBS0EsU0FBQUMsSUFBQUEsQ0FBQUEsRUFBQUE7SUFFQSxLQUFBLElBQUE1UixDQUFBQSxJQURBMkwsR0FBQUEsQ0FBQWtHLFNBQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQXJHLE1BQUFBLENBQUE0QyxLQUFBQSxFQUFBNUMsTUFBQUEsQ0FBQTZDLE1BQUFBLENBQUFBLEVBQ0FyQyxLQUFBQSxFQUNBQSxLQUFBQSxDQUFBaE0sQ0FBQUEsQ0FBQUEsQ0FBQTJQLFFBQUFBLElBQUEsQ0FBQSxHQUFBLE9BQ0EzRCxLQUFBQSxDQUFBaE0sQ0FBQUEsQ0FBQUEsR0FFQWdNLEtBQUFBLENBQUFoTSxDQUFBQSxDQUFBQSxDQUFBOE8sSUFBQUEsRUFBQUE7SUFHQSxLQUFBOU8sQ0FBQUEsSUFBQWlNLFNBQUFBLEVBQ0FBLFNBQUFBLENBQUFqTSxDQUFBQSxDQUFBQSxDQUFBOE8sSUFBQUEsRUFBQUE7SUFFQSxLQUFBOU8sQ0FBQUEsSUFBQWtNLFFBQUFBLEVBQ0FBLFFBQUFBLENBQUFsTSxDQUFBQSxDQUFBQSxDQUFBOE8sSUFBQUEsRUFBQUE7SUFFQSxLQUFBOU8sQ0FBQUEsSUFBQW1NLFVBQUFBLEVBQ0FBLFVBQUFBLENBQUFuTSxDQUFBQSxDQUFBQSxDQUFBMlAsUUFBQUEsSUFBQSxDQUFBLEdBQUEsT0FDQXhELFVBQUFBLENBQUFuTSxDQUFBQSxDQUFBQSxHQUVBbU0sVUFBQUEsQ0FBQW5NLENBQUFBLENBQUFBLENBQUE4TyxJQUFBQSxFQUFBQTtJQUlBLElBREFsQixZQUFBQSxFQUFBQSxFQUNBOUcsTUFBQUEsQ0FBQStHLE9BQUFBLEVBQ0FiLFNBQUFBLENBQUE4QixJQUFBQSxFQUFBQSxDQUFBQSxLQUNBO01BQ0EsSUFBQWdELFFBQUFBLEdBQUFuRyxHQUFBQSxDQUFBb0csb0JBQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQXZHLE1BQUFBLENBQUE0QyxLQUFBQSxFQUFBLENBQUEsQ0FBQTtNQUNBMEQsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FDQSxHQUFBLEVBQ0EsTUFBQSxHQUNBaEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBZ0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FqSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFnSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQWpLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQWdLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxDQUFBLEVBRUFILFFBQUFBLENBQUFFLFlBQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsR0FDQWhLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQWdLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBakssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBZ0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FqSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFnSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLEtBQUEsRUFDQSxNQUFBLEdBQ0FoSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFnSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQWpLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQWdLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBakssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBZ0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FDQSxNQUFBLEVBQ0EsTUFBQSxHQUNBaEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBZ0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FqSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUFnSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQWpLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQWdLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxDQUFBLEVBRUFILFFBQUFBLENBQUFFLFlBQUFBLENBQ0EsS0FBQSxFQUNBLE1BQUEsR0FDQWhLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQWdLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBakssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBZ0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FqSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFnSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBdEcsR0FBQUEsQ0FBQUcsU0FBQUEsR0FBQWdHLFFBQUFBLEVB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QUFBLENBQUFILElBQUFBLENBQUFBLENBQ0FuUSxJQUFBQSxDQUFBLFVBQUFDLFFBQUFBLEVBQUFBO1FBQ0F0RCxNQUFBQSxDQUFBMFQsS0FBQUEsQ0FBQUUsT0FBQUEsQ0FBQXRRLFFBQUFBLENBQUE1RyxJQUFBQSxDQUNBO01BQUEsQ0FBQSxDQUNBO0lBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDM0JBckMsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQVcsVUFBQUEsQ0FBQSxhQUFBLEVBQUEsVUFBQStFLE1BQUFBLEVBQUF1RSxTQUFBQSxFQUFBckUsT0FBQUEsRUFBQUE7RUFDQSxNQUFBMlQsU0FBQUEsR0FBQSxDQUNBO0lBQUF4VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUEsU0FBQTtJQUFBQyxNQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUExVSxJQUFBQSxFQUFBLHNCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEscUJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFdBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxXQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsZUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLHdCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsWUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxrQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsaUNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsa0NBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsZUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLHlCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLHVDQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLDBCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsYUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxlQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE1BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsWUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGtCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxvQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGdCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsTUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSw2QkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxpQ0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxlQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxzREFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsZUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsV0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxXQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLG1CQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsOENBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsV0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxNQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxXQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLG1DQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsV0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsYUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGdDQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE1BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsMkJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLHVCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLHdDQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLG9CQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsWUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxrQ0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsZUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxXQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxXQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxzQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLDRCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsa0JBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsNENBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsTUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSwwQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsWUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFdBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsZUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGdCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsV0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxhQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE1BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsYUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxNQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsTUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxrQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxrQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxhQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSwyQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEscUJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxvQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsaUJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsWUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsV0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSw4Q0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLHdCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsY0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsdUJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsYUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSwyQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxzQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxXQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLDBCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE1BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsNkJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsTUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxhQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEscUJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSwyQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSw4QkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsc0NBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsMEJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsa0NBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsbUNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEseUJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsc0JBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLG1CQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBO0VBV0E5VCxNQUFBQSxDQUFBZ1UsV0FBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBLElB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QixPQUFBQSxDQUFBN29CLE1BQ0E7QUFBQSxDQUFBLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcCA9IFtcclxuICB7XHJcbiAgICBiYXNlOiBcIkFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0MVxcdTI0QjZcXHVGRjIxXFx1MDBDMFxcdTAwQzFcXHUwMEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxcdTAwQzNcXHUwMTAwXFx1MDEwMlxcdTFFQjBcXHUxRUFFXFx1MUVCNFxcdTFFQjJcXHUwMjI2XFx1MDFFMFxcdTAwQzRcXHUwMURFXFx1MUVBMlxcdTAwQzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBDNlxcdTAxRkNcXHUwMUUyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBT1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM4XFx1QTczQV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQyXFx1MjRCN1xcdUZGMjJcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUwMjQzXFx1MDE4MlxcdTAxODFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0M1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYxXFx1MDFDNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMlxcdTAxQzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0NVxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJGXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDZcXHUyNEJCXFx1RkYyNlxcdTFFMUVcXHUwMTkxXFx1QTc3Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiR1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ3XFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0OFxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIklcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0OVxcdTI0QkVcXHVGRjI5XFx1MDBDQ1xcdTAwQ0RcXHUwMENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxcdTAwQ0ZcXHUxRTJFXFx1MUVDOFxcdTAxQ0ZcXHUwMjA4XFx1MDIwQVxcdTFFQ0FcXHUwMTJFXFx1MUUyQ1xcdTAxOTddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIktcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QlxcdTI0QzBcXHVGRjJCXFx1MUUzMFxcdTAxRThcXHUxRTMyXFx1MDEzNlxcdTFFMzRcXHUwMTk4XFx1MkM2OVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3QTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0Q1xcdTI0QzFcXHVGRjJDXFx1MDEzRlxcdTAxMzlcXHUwMTNEXFx1MUUzNlxcdTFFMzhcXHUwMTNCXFx1MUUzQ1xcdTFFM0FcXHUwMTQxXFx1MDIzRFxcdTJDNjJcXHUyQzYwXFx1QTc0OFxcdUE3NDZcXHVBNzgwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJNXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNERcXHUyNEMyXFx1RkYyRFxcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTJDNkVcXHUwMTlDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5KXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0RlxcdTI0QzRcXHVGRjJGXFx1MDBEMlxcdTAwRDNcXHUwMEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxcdTAwRDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHUwMEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xcdTAwRDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT0lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT09cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT1VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUwXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJRXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTFcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUlwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUyXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiU1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUzXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU0XFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MjhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1NVxcdTI0Q0FcXHVGRjM1XFx1MDBEOVxcdTAwREFcXHUwMERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHUwMERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU2XFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVllcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc2MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiV1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU3XFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJYXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNThcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTlcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHUwMEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDVBXFx1MjRDRlxcdUZGM0FcXHUwMTc5XFx1MUU5MFxcdTAxN0JcXHUwMTdEXFx1MUU5MlxcdTFFOTRcXHUwMUI1XFx1MDIyNFxcdTJDN0ZcXHUyQzZCXFx1QTc2Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDYxXFx1MjREMFxcdUZGNDFcXHUxRTlBXFx1MDBFMFxcdTAwRTFcXHUwMEUyXFx1MUVBN1xcdTFFQTVcXHUxRUFCXFx1MUVBOVxcdTAwRTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxcdTAwRTRcXHUwMURGXFx1MUVBM1xcdTAwRTVcXHUwMUZCXFx1MDFDRVxcdTAyMDFcXHUwMjAzXFx1MUVBMVxcdTFFQURcXHUxRUI3XFx1MUUwMVxcdTAxMDVcXHUyQzY1XFx1MDI1MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBFNlxcdTAxRkRcXHUwMUUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM5XFx1QTczQl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczRF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDYyXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2M1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxcdTAwRTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY0XFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGM1xcdTAxQzZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2NVxcdTI0RDRcXHVGRjQ1XFx1MDBFOFxcdTAwRTlcXHUwMEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xcdTAwRUJcXHUxRUJCXFx1MDExQlxcdTAyMDVcXHUwMjA3XFx1MUVCOVxcdTFFQzdcXHUwMjI5XFx1MUUxRFxcdTAxMTlcXHUxRTE5XFx1MUUxQlxcdTAyNDdcXHUwMjVCXFx1MDFERF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY2XFx1MjRENVxcdUZGNDZcXHUxRTFGXFx1MDE5MlxcdUE3N0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2N1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJoXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaHZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDE5NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDY5XFx1MjREOFxcdUZGNDlcXHUwMEVDXFx1MDBFRFxcdTAwRUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHUwMEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwialwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZBXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImtcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QlxcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZEXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiblwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZFXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxcdTAwRjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibmpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZGXFx1MjRERVxcdUZGNEZcXHUwMEYyXFx1MDBGM1xcdTAwRjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx1MDBGNVxcdTFFNERcXHUwMjJEXFx1MUU0RlxcdTAxNERcXHUxRTUxXFx1MUU1M1xcdTAxNEZcXHUwMjJGXFx1MDIzMVxcdTAwRjZcXHUwMjJCXFx1MUVDRlxcdTAxNTFcXHUwMUQyXFx1MDIwRFxcdTAyMEZcXHUwMUExXFx1MUVERFxcdTFFREJcXHUxRUUxXFx1MUVERlxcdTFFRTNcXHUxRUNEXFx1MUVEOVxcdTAxRUJcXHUwMUVEXFx1MDBGOFxcdTAxRkZcXHUwMjU0XFx1QTc0QlxcdUE3NERcXHUwMjc1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvaVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUEzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMjIzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzRGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJwXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3MVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJyXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJzXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzNcXHUyNEUyXFx1RkY1M1xcdTAwREZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ0elwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ1XCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzVcXHUyNEU0XFx1RkY1NVxcdTAwRjlcXHUwMEZBXFx1MDBGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx1MDBGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIndcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3N1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OVxcdTI0RThcXHVGRjU5XFx1MUVGM1xcdTAwRkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx1MDBGRlxcdTFFRjdcXHUxRTk5XFx1MUVGNVxcdTAxQjRcXHUwMjRGXFx1MUVGRl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwielwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDdBXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M10vZyxcclxuICB9LFxyXG5dO1xyXG52YXIgZG9tYWlucyA9IFtcclxuICBcIi5jb21cIixcclxuICBcIi5vcmdcIixcclxuICBcIi5uZXRcIixcclxuICBcIi5hY1wiLFxyXG4gIFwiLmFkXCIsXHJcbiAgXCIuYWVcIixcclxuICBcIi5hZlwiLFxyXG4gIFwiLmFnXCIsXHJcbiAgXCIuYWlcIixcclxuICBcIi5hbFwiLFxyXG4gIFwiLmFtXCIsXHJcbiAgXCIuYW9cIixcclxuICBcIi5hcVwiLFxyXG4gIFwiLmFyXCIsXHJcbiAgXCIuYXNcIixcclxuICBcIi5hdFwiLFxyXG4gIFwiLmF1XCIsXHJcbiAgXCIuYXdcIixcclxuICBcIi5heFwiLFxyXG4gIFwiLmF6XCIsXHJcbiAgXCIuYmFcIixcclxuICBcIi5iYlwiLFxyXG4gIFwiLmJkXCIsXHJcbiAgXCIuYmVcIixcclxuICBcIi5iZlwiLFxyXG4gIFwiLmJnXCIsXHJcbiAgXCIuYmhcIixcclxuICBcIi5iaVwiLFxyXG4gIFwiLmJqXCIsXHJcbiAgXCIuYm1cIixcclxuICBcIi5iblwiLFxyXG4gIFwiLmJvXCIsXHJcbiAgXCIuYnFcIixcclxuICBcIi5iclwiLFxyXG4gIFwiLmJzXCIsXHJcbiAgXCIuYnRcIixcclxuICBcIi5id1wiLFxyXG4gIFwiLmJ5XCIsXHJcbiAgXCIuYnpcIixcclxuICBcIi5jYVwiLFxyXG4gIFwiLmNjXCIsXHJcbiAgXCIuY2RcIixcclxuICBcIi5jZlwiLFxyXG4gIFwiLmNnXCIsXHJcbiAgXCIuY2hcIixcclxuICBcIi5jaVwiLFxyXG4gIFwiLmNrXCIsXHJcbiAgXCIuY2xcIixcclxuICBcIi5jbVwiLFxyXG4gIFwiLmNuXCIsXHJcbiAgXCIuY29cIixcclxuICBcIi5jclwiLFxyXG4gIFwiLmN1XCIsXHJcbiAgXCIuY3ZcIixcclxuICBcIi5jd1wiLFxyXG4gIFwiLmN4XCIsXHJcbiAgXCIuY3lcIixcclxuICBcIi5jelwiLFxyXG4gIFwiLmRlXCIsXHJcbiAgXCIuZGpcIixcclxuICBcIi5ka1wiLFxyXG4gIFwiLmRtXCIsXHJcbiAgXCIuZG9cIixcclxuICBcIi5kelwiLFxyXG4gIFwiLmVjXCIsXHJcbiAgXCIuZWVcIixcclxuICBcIi5lZ1wiLFxyXG4gIFwiLmVoXCIsXHJcbiAgXCIuZXJcIixcclxuICBcIi5lc1wiLFxyXG4gIFwiLmV0XCIsXHJcbiAgXCIuZXVcIixcclxuICBcIi5maVwiLFxyXG4gIFwiLmZqXCIsXHJcbiAgXCIuZmtcIixcclxuICBcIi5mbVwiLFxyXG4gIFwiLmZvXCIsXHJcbiAgXCIuZnJcIixcclxuICBcIi5nYVwiLFxyXG4gIFwiLmdkXCIsXHJcbiAgXCIuZ2VcIixcclxuICBcIi5nZlwiLFxyXG4gIFwiLmdnXCIsXHJcbiAgXCIuZ2hcIixcclxuICBcIi5naVwiLFxyXG4gIFwiLmdsXCIsXHJcbiAgXCIuZ21cIixcclxuICBcIi5nblwiLFxyXG4gIFwiLmdwXCIsXHJcbiAgXCIuZ3FcIixcclxuICBcIi5nclwiLFxyXG4gIFwiLmdzXCIsXHJcbiAgXCIuZ3RcIixcclxuICBcIi5ndVwiLFxyXG4gIFwiLmd3XCIsXHJcbiAgXCIuZ3lcIixcclxuICBcIi5oa1wiLFxyXG4gIFwiLmhtXCIsXHJcbiAgXCIuaG5cIixcclxuICBcIi5oclwiLFxyXG4gIFwiLmh0XCIsXHJcbiAgXCIuaHVcIixcclxuICBcIi5pZFwiLFxyXG4gIFwiLmllXCIsXHJcbiAgXCIuaWxcIixcclxuICBcIi5pbVwiLFxyXG4gIFwiLmluXCIsXHJcbiAgXCIuaW9cIixcclxuICBcIi5pcVwiLFxyXG4gIFwiLmlyXCIsXHJcbiAgXCIuaXNcIixcclxuICBcIi5pdFwiLFxyXG4gIFwiLmplXCIsXHJcbiAgXCIuam1cIixcclxuICBcIi5qb1wiLFxyXG4gIFwiLmpwXCIsXHJcbiAgXCIua2VcIixcclxuICBcIi5rZ1wiLFxyXG4gIFwiLmtoXCIsXHJcbiAgXCIua2lcIixcclxuICBcIi5rbVwiLFxyXG4gIFwiLmtuXCIsXHJcbiAgXCIua3BcIixcclxuICBcIi5rclwiLFxyXG4gIFwiLmt3XCIsXHJcbiAgXCIua3lcIixcclxuICBcIi5relwiLFxyXG4gIFwiLmxhXCIsXHJcbiAgXCIubGJcIixcclxuICBcIi5sY1wiLFxyXG4gIFwiLmxpXCIsXHJcbiAgXCIubGtcIixcclxuICBcIi5sclwiLFxyXG4gIFwiLmxzXCIsXHJcbiAgXCIubHRcIixcclxuICBcIi5sdVwiLFxyXG4gIFwiLmx2XCIsXHJcbiAgXCIubHlcIixcclxuICBcIi5tYVwiLFxyXG4gIFwiLm1jXCIsXHJcbiAgXCIubWRcIixcclxuICBcIi5tZVwiLFxyXG4gIFwiLm1nXCIsXHJcbiAgXCIubWhcIixcclxuICBcIi5ta1wiLFxyXG4gIFwiLm1sXCIsXHJcbiAgXCIubW1cIixcclxuICBcIi5tblwiLFxyXG4gIFwiLm1vXCIsXHJcbiAgXCIubXBcIixcclxuICBcIi5tcVwiLFxyXG4gIFwiLm1yXCIsXHJcbiAgXCIubXNcIixcclxuICBcIi5tdFwiLFxyXG4gIFwiLm11XCIsXHJcbiAgXCIubXZcIixcclxuICBcIi5td1wiLFxyXG4gIFwiLm14XCIsXHJcbiAgXCIubXlcIixcclxuICBcIi5telwiLFxyXG4gIFwiLm5hXCIsXHJcbiAgXCIubmNcIixcclxuICBcIi5uZVwiLFxyXG4gIFwiLm5mXCIsXHJcbiAgXCIubmdcIixcclxuICBcIi5uaVwiLFxyXG4gIFwiLm5sXCIsXHJcbiAgXCIubm9cIixcclxuICBcIi5ucFwiLFxyXG4gIFwiLm5yXCIsXHJcbiAgXCIubnVcIixcclxuICBcIi5uelwiLFxyXG4gIFwiLm9tXCIsXHJcbiAgXCIucGFcIixcclxuICBcIi5wZVwiLFxyXG4gIFwiLnBmXCIsXHJcbiAgXCIucGdcIixcclxuICBcIi5waFwiLFxyXG4gIFwiLnBrXCIsXHJcbiAgXCIucGxcIixcclxuICBcIi5wbVwiLFxyXG4gIFwiLnBuXCIsXHJcbiAgXCIucHJcIixcclxuICBcIi5wc1wiLFxyXG4gIFwiLnB0XCIsXHJcbiAgXCIucHdcIixcclxuICBcIi5weVwiLFxyXG4gIFwiLnFhXCIsXHJcbiAgXCIucmVcIixcclxuICBcIi5yb1wiLFxyXG4gIFwiLnJzXCIsXHJcbiAgXCIucnVcIixcclxuICBcIi5yd1wiLFxyXG4gIFwiLnNhXCIsXHJcbiAgXCIuc2JcIixcclxuICBcIi5zY1wiLFxyXG4gIFwiLnNkXCIsXHJcbiAgXCIuc2VcIixcclxuICBcIi5zZ1wiLFxyXG4gIFwiLnNoXCIsXHJcbiAgXCIuc2lcIixcclxuICBcIi5za1wiLFxyXG4gIFwiLnNsXCIsXHJcbiAgXCIuc21cIixcclxuICBcIi5zblwiLFxyXG4gIFwiLnNvXCIsXHJcbiAgXCIuc3JcIixcclxuICBcIi5zc1wiLFxyXG4gIFwiLnN0XCIsXHJcbiAgXCIuc3VcIixcclxuICBcIi5zdlwiLFxyXG4gIFwiLnN4XCIsXHJcbiAgXCIuc3lcIixcclxuICBcIi5zelwiLFxyXG4gIFwiLnRjXCIsXHJcbiAgXCIudGRcIixcclxuICBcIi50ZlwiLFxyXG4gIFwiLnRnXCIsXHJcbiAgXCIudGhcIixcclxuICBcIi50alwiLFxyXG4gIFwiLnRrXCIsXHJcbiAgXCIudGxcIixcclxuICBcIi50bVwiLFxyXG4gIFwiLnRuXCIsXHJcbiAgXCIudG9cIixcclxuICBcIi50clwiLFxyXG4gIFwiLnR0XCIsXHJcbiAgXCIudHZcIixcclxuICBcIi50d1wiLFxyXG4gIFwiLnR6XCIsXHJcbiAgXCIudWFcIixcclxuICBcIi51Z1wiLFxyXG4gIFwiLnVrXCIsXHJcbiAgXCIudXNcIixcclxuICBcIi51eVwiLFxyXG4gIFwiLnV6XCIsXHJcbiAgXCIudmFcIixcclxuICBcIi52Y1wiLFxyXG4gIFwiLnZlXCIsXHJcbiAgXCIudmdcIixcclxuICBcIi52aVwiLFxyXG4gIFwiLnZuXCIsXHJcbiAgXCIudnVcIixcclxuICBcIi53ZlwiLFxyXG4gIFwiLndzXCIsXHJcbiAgXCIueWVcIixcclxuICBcIi55dFwiLFxyXG4gIFwiLnphXCIsXHJcbiAgXCIuem1cIixcclxuICBcIi56d1wiLFxyXG5dO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlRGlhY3JpdGljc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAucmVkdWNlKChyZXN1bHQsIGxldHRlcikgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzdWx0LnJlcGxhY2UobGV0dGVyLmxldHRlcnMsIGxldHRlci5iYXNlKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgU1BFQ0lBTF9DSEFSQUNURVJTID0gXCJcXFxcXFxcXC8gIT9AIyQlXiYqKClfKzoue30sO1xcXFwtJ2Bg4oCZ4oCYXFxcIlwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFske1NQRUNJQUxfQ0hBUkFDVEVSU31dYCwgXCJnaVwiKSwgXCJcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVBbGxCdXRMZXR0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9Mb3dlckNhc2UoKS5yZW1vdmVEaWFjcml0aWNzKCkucmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMoKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNvbmNlYWxcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZXh0cmEpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChgW14ke1NQRUNJQUxfQ0hBUkFDVEVSU30ke2V4dHJhfV1gLCBcImdpXCIpLCBcIuKBjlwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNhcGl0YWxpemVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc2xpY2UoMSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVIVE1MXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShcIj5cIiwgXCJcXHUyMjdCXCIpLnJlcGxhY2UoXCI8XCIsIFwiXFx1MjI3QVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInBhcnNlU3ltYm9sc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2VBbGwoXCImXCIsIFwiJmFtcDtcIikucmVwbGFjZShcIjxcIiwgXCImbHQ7XCIpLnJlcGxhY2UoXCI+XCIsIFwiJmd0O1wiKS5yZXBsYWNlQWxsKFwiI1wiLCBcIiZudW07XCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVwbGFjZUFycmF5XCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGZpbmQsIHJlcGxhY2UpIHtcclxuICAgIHZhciByZXBsYWNlU3RyaW5nID0gdGhpcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmluZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICByZXBsYWNlU3RyaW5nID0gcmVwbGFjZVN0cmluZy5yZXBsYWNlKGZpbmRbaV0sIHJlcGxhY2VbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcGxhY2VTdHJpbmc7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJtYXNrVVJMc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2VBcnJheShbXCJodHRwczovL1wiLCBcImh0dHA6Ly9cIl0sIFwibm9wZTovL1wiKS5yZXBsYWNlQXJyYXkoZG9tYWlucywgXCIubm9wZVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VSZWFkYWJsZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwibWFrZVBlcmNlbnRhZ2VcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZGVjaW1hbHMpIHtcclxuICAgIGlmICghZGVjaW1hbHMpIGRlY2ltYWxzID0gMjtcclxuICAgIHJldHVybiBgJHsodGhpcyAqIDEwMCkudG9GaXhlZChkZWNpbWFscyl9JWA7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzb3J0T2JqZWN0ID0gKG9iaiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgbGV0IGFyciA9IFtdO1xyXG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgYXJyLnB1c2goW2tleSwgb2JqW2tleV1dKTtcclxuICB9XHJcbiAgYXJyLnNvcnQoKGEsIGIpID0+IChkaXJlY3Rpb24gPyBhWzFdIC0gYlsxXSA6IGJbMV0gLSBhWzFdKSk7XHJcbiAgbGV0IG9ialNvcnRlZCA9IHt9O1xyXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiAob2JqU29ydGVkW2l0ZW1bMF1dID0gaXRlbVsxXSkpO1xyXG4gIC8vYXJyLnNvcnQoZnVuY3Rpb24oYSwgYikgeyBhLnZhbHVlLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLnZhbHVlLnRvTG93ZXJDYXNlKCkpOyB9KTsgLy91c2UgdGhpcyB0byBzb3J0IGFzIHN0cmluZ3NcclxuICByZXR1cm4gb2JqU29ydGVkOyAvLyByZXR1cm5zIGFycmF5XHJcbn07XHJcbiIsIi8qXHJcbiQgPSBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxudmFyIGJvb3RzdHJhcCA9IHJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxudmFyIGFuZ3VsYXJTYW5pdGl6ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItc2FuaXRpemUnKTtcclxudmFyIGFuZ3VsYXJBbmltYXRlID0gcmVxdWlyZSgnYW5ndWxhci1hbmltYXRlJyk7XHJcbiovXHJcbmFuZ3VsYXIubW9kdWxlKFwiYXBwXCIsIFtcclxuICBcInVpLnJvdXRlclwiLFxyXG4gIFwidWkuYm9vdHN0cmFwXCIsXHJcbiAgXCJuZ0FuaW1hdGVcIixcclxuICBcIm5nU2FuaXRpemVcIixcclxuICBcIm5nRHJhZ0Ryb3BcIixcclxuICBcIm5nVGFnc0lucHV0XCIsXHJcbiAgXCJ2Y1JlY2FwdGNoYVwiLFxyXG4gIFwiY2hhcnQuanNcIixcclxuICBcInRjLmNoYXJ0anNcIixcclxuICBcImluZmluaXRlLXNjcm9sbFwiLFxyXG5dKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkdXJsU2VydmljZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xyXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvaG9tZVwiKTtcclxuICAkdXJsU2VydmljZVByb3ZpZGVyLmNvbmZpZy5zdHJpY3RNb2RlKGZhbHNlKTtcclxuXHJcbiAgJHN0YXRlUHJvdmlkZXJcclxuICAgIC5zdGF0ZShcImhvbWVcIiwge1xyXG4gICAgICB1cmw6IFwiL2hvbWVcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2hvbWUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInBvbGljeVwiLCB7XHJcbiAgICAgIHVybDogXCIvcG9saWN5XCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wb2xpY3kuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInByaW50XCIsIHtcclxuICAgICAgdXJsOiBcIi9wcmludFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcHJpbnQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImV4cGVyaWVuY2VcIiwge1xyXG4gICAgICB1cmw6IFwiL2V4cGVyaWVuY2VcIixcclxuICAgICAgY29udHJvbGxlcjogXCJFeHBlcmllbmNlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvZXhwZXJpZW5jZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwic2tpbGxzXCIsIHtcclxuICAgICAgdXJsOiBcIi9za2lsbHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJTa2lsbHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9za2lsbHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImhvYmJpZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2hvYmJpZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJIb2JiaWVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvaG9iYmllcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiY29udGFjdFwiLCB7XHJcbiAgICAgIHVybDogXCIvY29udGFjdFwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkNvbnRhY3RDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9jb250YWN0Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ3b3Jrb3V0XCIsIHtcclxuICAgICAgdXJsOiBcIi93b3Jrb3V0XCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiV29ya291dEN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3dvcmtvdXQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInBvc3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9wb3N0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlBvc3RzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcG9zdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInByb2ZpbGVcIiwge1xyXG4gICAgICB1cmw6IFwiL3Byb2ZpbGVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJQcm9maWxlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcHJvZmlsZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibGlzdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2xpc3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiTGlzdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImxpc3RzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJidWJibGVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9idWJibGVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQnViYmxlc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiYnViYmxlcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYXN0ZXJvaWRzXCIsIHtcclxuICAgICAgdXJsOiBcIi9hc3Rlcm9pZHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJBc3Rlcm9pZHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImFzdGVyb2lkcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibGVtbWluZ3NcIiwge1xyXG4gICAgICB1cmw6IFwiL2xlbW1pbmdzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiTGVtbWluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImxlbW1pbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJib3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9ib3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5nc1wiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1hZG1pblwiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLWFkbWluXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzQWRtaW5DdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1hZG1pbi5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLWdhbWVcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy86Z2FtZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0dhbWVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1nYW1lLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3Mtc3RhdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy1zdGF0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc1N0YXRzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3Mtc3RhdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotZ29vZ2xlXCIsIHtcclxuICAgICAgdXJsOiBcIi9nb29nbGVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6R29vZ2xlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL2dvb2dsZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1sb2dvc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbG9nb3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6TG9nb3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvbG9nb3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotYW5pbWFsc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYW5pbWFsc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpBbmltYWxzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL2FuaW1hbHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotc2tlbGV0b25zXCIsIHtcclxuICAgICAgdXJsOiBcIi9za2VsZXRvbnNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6U2tlbGV0b25zQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL3NrZWxldG9ucy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1tb3ZpZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL21vdmllc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpNb3ZpZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvbW92aWVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJjaGFyYWRlc1wiLCB7XHJcbiAgICAgIHVybDogXCIvY2hhcmFkZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJDaGFyYWRlc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2NoYXJhZGVzLmh0bWxcIixcclxuICAgIH0pO1xyXG5cclxuICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoe1xyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIHJlcXVpcmVCYXNlOiBmYWxzZSxcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnV2ViU29ja2V0U3ZjJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICR0aW1lb3V0KSB7XHJcbiAgZnVuY3Rpb24gd2Vic29ja2V0SG9zdCgpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonKSB7XHJcbiAgICAgIHJldHVybiBcIndzczovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJ3czovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgY29ubmVjdGlvbjtcclxuICB2YXIgY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KHdlYnNvY2tldEhvc3QoKSk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY29ubmVjdGVkJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY2xvc2VkLiBSZWNvbm5lY3RpbmcuLi4nKTtcclxuICAgICAgJHRpbWVvdXQoY29ubmVjdCwgMTAwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlICsgXCIgLSBTdGF0ZTogXCIgKyBjb25uZWN0aW9uLnJlYWR5U3RhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBwYXlsb2FkID0gSlNPTi5wYXJzZShlLmRhdGEpO1xyXG4gICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3dzOicgKyBwYXlsb2FkLnRvcGljLCBwYXlsb2FkLmRhdGEpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICB0aGlzLnNlbmQgPSBmdW5jdGlvbiAodG9waWMsIGRhdGEpIHtcclxuICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoe3RvcGljOiB0b3BpYywgZGF0YTogZGF0YX0pO1xyXG4gICAgY29ubmVjdGlvbi5zZW5kKGpzb24pO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuY29ubmVjdCA9IGNvbm5lY3Q7XHJcblxyXG59KS5ydW4oZnVuY3Rpb24gKFdlYlNvY2tldFN2Yykge1xyXG4gIFdlYlNvY2tldFN2Yy5jb25uZWN0KCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5kaXJlY3RpdmUoXCJjbGlja091dHNpZGVcIiwgZnVuY3Rpb24gKCRkb2N1bWVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICByZXN0cmljdDogXCJBXCIsXHJcbiAgICBzY29wZToge1xyXG4gICAgICBjbGlja091dHNpZGU6IFwiJlwiLFxyXG4gICAgfSxcclxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgJGRvY3VtZW50Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZWwgIT09IGUudGFyZ2V0ICYmICFlbFswXS5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vc2NvcGUuJHBhcmVudC5zZXRTZWxlY3RlZExpc3QoKTtcclxuICAgICAgICAgICAgc2NvcGUuJGV2YWwoc2NvcGUuY2xpY2tPdXRzaWRlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuXHQuZGlyZWN0aXZlKCdoZWFkJywgW1xyXG5cdFx0JyRyb290U2NvcGUnLFxyXG5cdFx0JyRzdGF0ZScsXHJcblx0XHQnJGNvbXBpbGUnLFxyXG5cdFx0JyRpbnRlcnBvbGF0ZScsXHJcblx0XHRmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkY29tcGlsZSwgJGludGVycG9sYXRlKSB7XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGUgPSBmdW5jdGlvbiBnZXRTdHlsZSh0ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdHlsZSA9IHtcclxuXHRcdFx0XHRcdGhyZWY6IHRlbXBsYXRlU3R5bGVVcmwsXHJcblx0XHRcdFx0XHRyZWw6ICdzdHlsZXNoZWV0J1xyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmIChzdHlsZS5ocmVmLm1hdGNoKC9cXC5sZXNzJC8pKSB7XHJcblx0XHRcdFx0XHRzdHlsZS5yZWwgPSAnc3R5bGVzaGVldC9sZXNzJztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBzdHlsZTtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gZ2V0U3R5bGVzKHN0YXRlKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdGF0ZXMgPSB7fTtcclxuXHJcblx0XHRcdFx0Ly9DaGVjayBzdGF0ZSBmb3Igc3R5bGVzXHJcblx0XHRcdFx0d2hpbGUgKHN0YXRlLm5hbWUgIT09ICcnKSB7XHJcblx0XHRcdFx0XHR2YXIgcGFyZW50ID0gJHN0YXRlLmdldCgnXicsIHN0YXRlKTtcclxuXHJcblx0XHRcdFx0XHQvL0luaXRpYXRlIG91ciB2aWV3IGxpc3RcclxuXHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXSkge1xyXG5cdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdID0ge307XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB0aGUgdGVtcGxhdGVTdHlsZVxyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSkge1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1bJyddID0gZ2V0U3R5bGUoc3RhdGUudGVtcGxhdGVTdHlsZVVybCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NoZWNrIHZpZXdzXHJcblx0XHRcdFx0XHRpZiAoc3RhdGUudmlld3MpIHtcclxuXHRcdFx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlLnZpZXdzLCBmdW5jdGlvbiAodmlldywga2V5KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgaGF2ZSBhIHN0eWxlXHJcblx0XHRcdFx0XHRcdFx0aWYgKCF2aWV3LnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgYXJlIHRhcmdldGluZyBzb21lIHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdGlmICgoa2V5ID0ga2V5LnNwbGl0KCdAJykpWzFdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgc3R5bGVzIGZvciB0aGF0IHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXSA9IHt9O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIHNvbWUgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXVtrZXlbMF1dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlc1trZXlbMV1dW2tleVswXV0gPSBnZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIG91ciBwYXJlbnQncyB2aWV3XHJcblx0XHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ29udGludWUgd2l0aCB0aGUgcGFyZW50XHJcblx0XHRcdFx0XHRzdGF0ZSA9IHBhcmVudDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vRmxhdHRlbiB0aGUgbGlzdFxyXG5cdFx0XHRcdHZhciBmbGF0ID0gW107XHJcblx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlcywgZnVuY3Rpb24gKHZpZXdzKSB7XHJcblxyXG5cdFx0XHRcdFx0Xy5mb3JFYWNoKHZpZXdzLCBmdW5jdGlvbiAoc3R5bGUpIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghXy5pbmNsdWRlcyhmbGF0LCBzdHlsZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRmbGF0LnB1c2goc3R5bGUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvL1JldmVyc2UgaXQgc28gd2UgaGF2ZSBhIHByb3BlciBoaWVyYXJjaHlcclxuXHRcdFx0XHRmbGF0LnJldmVyc2UoKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGZsYXQ7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0XHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSkge1xyXG5cclxuXHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gW107XHJcblxyXG5cdFx0XHRcdFx0dmFyIGh0bWwgPSAnPGxpbmsgbmctYXR0ci1yZWw9XCJ7e3N0eWxlLnJlbH19XCIgbmctcmVwZWF0PVwic3R5bGUgaW4gdGVtcGxhdGVTdHlsZXNcIiBuZy1ocmVmPVwie3tzdHlsZS5ocmVmfX1cIj4nO1xyXG5cclxuXHRcdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xce1xcey9nLCAkaW50ZXJwb2xhdGUuc3RhcnRTeW1ib2woKSk7XHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXH1cXH0vZywgJGludGVycG9sYXRlLmVuZFN5bWJvbCgpKTtcclxuXHJcblx0XHRcdFx0XHRlbGVtLmFwcGVuZCgkY29tcGlsZShodG1sKShzY29wZSkpO1xyXG5cclxuXHRcdFx0XHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykge1xyXG5cclxuXHRcdFx0XHRcdFx0c2NvcGUudGVtcGxhdGVTdHlsZXMgPSBnZXRTdHlsZXModG9TdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHR9XHJcblx0XSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJBcHBDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIExhbmd1YWdlU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIiVjWW91IHNuZWFreSBidWdnZXIhXCIsXHJcbiAgICBcImZvbnQ6IDJlbSBzYW5zLXNlcmlmOyBjb2xvcjogRG9kZ2VyQmx1ZTsgdGV4dC1zaGFkb3c6IDJweCAwIDAgIzQ0NCwgLTJweCAwIDAgIzQ0NCwgMCAycHggMCAjNDQ0LCAwIC0ycHggMCAjNDQ0LCAxcHggMXB4ICM0NDQsIC0xcHggLTFweCAwICM0NDQsIDFweCAtMXB4IDAgIzQ0NCwgLTFweCAxcHggMCAjNDQ0O1wiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIkknbSBnbGFkIHlvdSdyZSBjdXJpb3VzIHdoZXRoZXIgc29tZXRoaW5nIGlzIHBvcHBpbmcgdXAgaW4gaGVyZS4gSSdtIGEgYml0IG9mIGEgc3RpY2tsZXIgd2hlbiBpdCBjb21lcyB0byBtZXNzYWdlcyBpbiB0aGUgY29uc29sZSBzbyBJIHRyeSB0byBtYWtlIHN1cmUgb25seSB0aGluZ3MgSSB3YW50IGFyZSB2aXNpYmxlLiBUaGF0IGJlaW5nIHNhaWQsIGlmIHRoZXJlIGlzIGEgYmlnIGVycm9yIGhlcmUsIEkgd291bGQgcmVhbGx5IGFwcHJlY2lhdGUgeW91IHRlbGxpbmcgbWUgc28gSSBjYW4gZ2V0IHJpZCBvZiBpdCFcIixcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCJUaGUgY29kZSBmb3IgbXkgcmVzdW1lIGlzIGhvc3RlZCBvbiBHaXRodWIgaWYgeW91IHJlYWxseSB3YW50IHRvIGdvIGludG8gYWxsIHRoaXMhID0+IGh0dHBzOi8vZ2l0aHViLmNvbS9GbGFuZGVyc0J1cmdlci9yZXN1bWVcIixcclxuICApO1xyXG5cclxuICAvKlxyXG4gICAgJChkb2N1bWVudCkuYmluZChcImtleXVwIGtleWRvd25cIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGlmKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT0gODApe1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgICovXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gICQod2luZG93KS5sb2FkKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICQoXCIuY29udGVudFwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLmNoZWNrYm94LW1lbnVcIikub24oXCJjaGFuZ2VcIiwgXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuY2xvc2VzdChcImxpXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIsIHRoaXMuY2hlY2tlZCk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuYWxsb3ctZm9jdXNcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS50aGVtZUNvdW50ZXIgPSA2O1xyXG4gICRzY29wZS50b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgJHNjb3BlLnllYXIgPSAkc2NvcGUudG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAkc2NvcGUucmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XHJcblxyXG4gICRzY29wZS5mbGlwVGhlbWUgPSAoKSA9PiB7XHJcbiAgICAkKFwiLmxvYWRpbmdcIikuc2hvdygpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmhpZGUoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLmxvYWRpbmdcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAgICQoXCIuY29udGVudFwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gICAgfSwgODAwKTtcclxuICAgICRzY29wZS50aGVtZUNvdW50ZXIgPSAkc2NvcGUudGhlbWVDb3VudGVyIDwgNiA/ICRzY29wZS50aGVtZUNvdW50ZXIgKyAxIDogKCRzY29wZS50aGVtZUNvdW50ZXIgPSAxKTtcclxuICB9O1xyXG5cclxuICAkLmdldEpTT04oXCIvc2tpbGxzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5za2lsbHMgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIHNraWxsLmVuYWJsZWQ7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2hvYmJpZXMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmhvYmJpZXMgPSBkYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvZXhwZXJpZW5jZS5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuam9icyA9IGRhdGE7XHJcbiAgICAkc2NvcGUuam9icy5mb3JFYWNoKChqb2IpID0+IHtcclxuICAgICAgam9iLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGpvYi5zdGFydERhdGUpO1xyXG4gICAgICBpZiAoam9iLmVuZERhdGUpIGpvYi5lbmREYXRlID0gbmV3IERhdGUoam9iLmVuZERhdGUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9jaGFyYWRlcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuY2hhcmFkZXMgPSBkYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZ2V0VGltZVNwYW4gPSAoam9iKSA9PiB7XHJcbiAgICByZXR1cm4gam9iLnN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpICsgKGpvYi5lbmREYXRlID8gXCIgLSBcIiArIGpvYi5lbmREYXRlLmdldEZ1bGxZZWFyKCkgOiBcIiAtIFRvZGF5XCIpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5sYW5ndWFnZXMgPSBMYW5ndWFnZVN2Yy5sYW5ndWFnZXM7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdExhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IExhbmd1YWdlU3ZjLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuaG92ZXJkaXYgPSAoZSwgZGl2aWQpID0+IHtcclxuICAgIHZhciBsZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xyXG4gICAgdmFyIHRvcCA9IGUuY2xpZW50WSArIDIwICsgXCJweFwiO1xyXG5cclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZpZCk7XHJcblxyXG4gICAgJChcIiNcIiArIGRpdmlkKS5jc3MoXCJsZWZ0XCIsIGxlZnQpO1xyXG4gICAgJChcIiNcIiArIGRpdmlkKS5jc3MoXCJ0b3BcIiwgdG9wKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLnRvZ2dsZSgpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpIHtcclxuICAgIFVzZXJTdmMubG9naW4od2luZG93LmxvY2FsU3RvcmFnZS51c2VyKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBsb2dpbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICBsb2dpbih1c2VyKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xyXG4gICAgaWYgKCEkc2NvcGUubG9nZ2VkSW4pIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS51c2VyID0gdXNlci5faWQ7XHJcbiAgICAgICRzY29wZS5sb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAgICRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUgPSBuZXcgRGF0ZSgkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlKTtcclxuICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dpblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuJG9uKFwidXBkYXRlXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUpO1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKFwibG9hZGluZ1wiLCAoXywgdXNlcikgPT4ge1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgJChcIiNsb2FkaW5nLWljb25cIikuc2hvdygpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKFwibG9hZGVkXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5sb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBmaXJlYmFzZVxyXG4gICAgICAuYXV0aCgpXHJcbiAgICAgIC5zaWduT3V0KClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXHJcbiAgICAgICAgJHNjb3BlLmxvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICRzY29wZS4kYnJvYWRjYXN0KFwibG9nb3V0XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5mb3JtYXREYXRlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IG1vbnRocyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIHJldHVybiBkYXRlLmdldERhdGUoKSArIFwiLVwiICsgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0gKyBcIi1cIiArIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkFzdGVyb2lkc0N0cmxcIiwgZnVuY3Rpb24gKCRsb2NhdGlvbiwgJHNjb3BlLCBHYW1lU3ZjKSB7XHJcbiAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc3Rlcm9pZHMtcGFnZVwiKTtcclxuICBpZiAoIWNhbnZhcykge1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoXCIvaG9tZVwiKTtcclxuICAgIHJldHVybiBhbGVydChcIlwiKTtcclxuICB9XHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICBjdHguZm9udCA9IFwiMzBweCBDb21pYyBTYW5zIE1TXCI7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY29uc3Qgc2hvdHMgPSB7fTtcclxuICBjb25zdCBhc3Rlcm9pZHMgPSB7fTtcclxuICBjb25zdCBwb3dlcnVwcyA9IHt9O1xyXG4gIGNvbnN0IGV4cGxvc2lvbnMgPSB7fTtcclxuICBjb25zdCBtYXAgPSB7fTtcclxuICBjb25zdCBzcGFjZXBpY3MgPSAxMDtcclxuICBjb25zdCBzcGFjZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwYWNlcGljcyk7XHJcbiAgY29uc3QgcG93ZXJ1cFR5cGVzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInNwZWVkXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJNYXggU3BlZWQg4oenXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICAgIHNpemU6IFsxNCwgMzVdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5tYXhTcGVlZCArPSAxMDA7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImNvb2xkb3duXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJDb29sZG93biDih6lcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDMsXHJcbiAgICAgICAgc2l6ZTogWzE3LCAxN10sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5jb29sZG93blRpbWUgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInJhbmdlXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJGaXJpbmcgUmFuZ2Ug4oenXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogNCxcclxuICAgICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICAgIHNpemU6IFszMCwgOF0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnJhbmdlICs9IDU7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInNoaWVsZFwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiU2hpZWxkXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogNSxcclxuICAgICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICAgIHNpemU6IFsxOSwgMTldLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5zaGllbGQgPSB0cnVlO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJudWtlXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJOdWtlXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICAgIHNpemU6IFsxNSwgMTVdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgICAgICBhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgICAgfSxcclxuICAgIH0gLypcclxuICAgICdzaWRlX2Nhbm5vbnMnLFxyXG4gICAgJ2xhc2VyJyxcclxuICAgICdzaGllbGQnLFxyXG4gICAgJ2xpZmUnLFxyXG4gICAgJ21pc3NpbGVzJyxcclxuICAgICdudWtlJ1xyXG4gICAgKi8sXHJcbiAgXTtcclxuICBwb3dlcnVwVHlwZXMuZm9yRWFjaChmdW5jdGlvbiAocG93ZXJ1cCwgaSwgYXJyYXkpIHtcclxuICAgIGFycmF5W2ldLmltZy5zcmMgPSBcImFzdGVyb2lkcy9cIiArIHBvd2VydXAubmFtZSArIFwiLnBuZ1wiO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgZXhwbG9zaW9uSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBleHBsb3Npb25JbWFnZS5zcmMgPSBcImFzdGVyb2lkcy9leHBsb3Npb24ucG5nXCI7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJrZXlkb3duXCIsXHJcbiAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBtYXBbZS5rZXlDb2RlIHx8IGUud2hpY2hdID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICB0cnVlLFxyXG4gICk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImtleXVwXCIsXHJcbiAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBtYXBbZS5rZXlDb2RlIHx8IGUud2hpY2hdID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdHJ1ZSxcclxuICApO1xyXG5cclxuICAkc2NvcGUuaGlnaHNjb3JlID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gZXZhbHVhdGVLZXlzKCkge1xyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgLy9TcGFjZVxyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zaG9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM3XSkge1xyXG4gICAgICAgIC8vTGVmdCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiA9IDM2MDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uIC09IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzldKSB7XHJcbiAgICAgICAgLy9SaWdodCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDM2MCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uICs9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzhdKSB7XHJcbiAgICAgICAgLy9VcCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPD0gc3BhY2VzaGlwLm1heFNwZWVkKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgKz0gNTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzQwXSkge1xyXG4gICAgICAgIC8vRG93biBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgLT0gMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgc3RhcnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU3BhY2VzaGlwKCkge1xyXG4gICAgdGhpcy53aWR0aCA9IDUwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSA1MDtcclxuICAgIHRoaXMuc2hpZWxkID0gZmFsc2U7XHJcbiAgICB0aGlzLnJhbmdlID0gODA7XHJcbiAgICB0aGlzLmNhbm5vbiA9IHtcclxuICAgICAgeDogdGhpcy53aWR0aCAvIDIgLSA0LjUsXHJcbiAgICAgIHk6IHRoaXMuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0ICogMC4wNzgxMjUsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb29sZG93biA9IDA7XHJcbiAgICB0aGlzLmNvb2xkb3duVGltZSA9IDIwO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtjYW52YXMud2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgLyAyXTtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBcImFzdGVyb2lkcy9zcGFjZXNoaXAucG5nXCI7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMubWF4U3BlZWQgPSAxMDAwO1xyXG4gICAgdGhpcy5hbmdsZSA9IDA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuXHJcbiAgICB0aGlzLnNob290ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmNvb2xkb3duID0gdGhpcy5jb29sZG93blRpbWU7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIHNob3RzW2lkXSA9IG5ldyBTaG90KGlkLCB0aGlzKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodGhpcy5zaGllbGQpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmFyYyh0aGlzLnBvc2l0aW9uWzBdICsgdGhpcy53aWR0aCAvIDIsIHRoaXMucG9zaXRpb25bMV0gKyB0aGlzLmhlaWdodCAvIDIsIDMwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDM1LCAyMzcsIDg2LCAwLjUpXCI7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2IoNjYsIDE2OCwgMzYsIDAuOClcIjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICAgIHZhciBhc3Rlcm9pZCA9IGFzdGVyb2lkc1tpXTtcclxuICAgICAgICBpZiAoaGl0KGFzdGVyb2lkLCB0aGlzKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2hpZWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpZWxkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGFzdGVyb2lkLmV4cGxvZGUoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnYW1lT3ZlcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFuZ2xlID0gdGhpcy5yb3RhdGlvbjtcclxuICAgICAgaWYgKHRoaXMuY29vbGRvd24gPiAwKSB7XHJcbiAgICAgICAgdGhpcy5jb29sZG93bi0tO1xyXG4gICAgICB9XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU2hvdChpZCwgc3BhY2VzaGlwKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW1xyXG4gICAgICBzcGFjZXNoaXAucG9zaXRpb25bMF0gK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueCArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi54ICogTWF0aC5jb3MoKChzcGFjZXNoaXAucm90YXRpb24gLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCksXHJcbiAgICAgIHNwYWNlc2hpcC5wb3NpdGlvblsxXSArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi55ICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnkgKiBNYXRoLnNpbigoKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKSxcclxuICAgIF07XHJcbiAgICB0aGlzLndpZHRoID0gOTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMTU7XHJcbiAgICB0aGlzLmFuZ2xlID0gc3BhY2VzaGlwLmFuZ2xlO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IHNwYWNlc2hpcC5yb3RhdGlvbjtcclxuICAgIHRoaXMuc3BlZWQgPSBzcGFjZXNoaXAuc3BlZWQgKyA1MDA7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gc3BhY2VzaGlwLnJhbmdlO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL3Nob3QucG5nXCI7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQXN0ZXJvaWQoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMud2lkdGggPSBNYXRoLnJhbmRvbSgpICogNTAgKyAyMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy53aWR0aDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSBNYXRoLnJhbmRvbSgpICogNiAtIDM7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDMwMCArIDI7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvYXN0ZXJvaWRcIiArIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA2KSArIDEpICsgXCIucG5nXCI7XHJcblxyXG4gICAgdGhpcy5leHBsb2RlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBleHBsb3Npb25zW3RoaXMuaWRdID0gbmV3IEV4cGxvc2lvbih0aGlzKTtcclxuICAgICAgcmV0dXJuIGRlbGV0ZSBhc3Rlcm9pZHNbdGhpcy5pZF07XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XHJcbiAgICAgIGlmICh0aGlzLnJvdGF0aW9uID4gMzYwKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMucm90YXRpb24gLSAzNjA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5yb3RhdGlvbiA8IDApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMzYwICsgdGhpcy5yb3RhdGlvbjtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgICAgdmFyIHNob3QgPSBzaG90c1tpXTtcclxuICAgICAgICBpZiAoaGl0KHNob3QsIHRoaXMpKSB7XHJcbiAgICAgICAgICB0aGlzLmV4cGxvZGUoKTtcclxuICAgICAgICAgIHZhciBwb2ludHMgPSBNYXRoLmZsb29yKChzaG90LnNwZWVkIC0gNTAwKSAvIDEwICsgNzAgLSB0aGlzLndpZHRoKTtcclxuICAgICAgICAgIGlmIChNYXRoLmZsb29yKChwb2ludHMgKyAkc2NvcGUuc2NvcmUpIC8gMTAwKSA+IE1hdGguZmxvb3IoJHNjb3BlLnNjb3JlIC8gMTAwKSkge1xyXG4gICAgICAgICAgICBzcGF3blBvd2VydXAoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICRzY29wZS5zY29yZSArPSBwb2ludHM7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRXhwbG9zaW9uKG9iamVjdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtvYmplY3QucG9zaXRpb25bMF0sIG9iamVjdC5wb3NpdGlvblsxXV07XHJcbiAgICB0aGlzLndpZHRoID0gb2JqZWN0LndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvYmplY3QuaGVpZ2h0O1xyXG4gICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMuY3ljbGUgPSB7XHJcbiAgICAgIHJvd3M6IDYsXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHNpemU6IFsyNTYsIDI1Nl0sXHJcbiAgICAgIGk6IDAsXHJcbiAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgIH07XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gNDc7XHJcbiAgICB0aGlzLmltZyA9IGV4cGxvc2lvbkltYWdlO1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAodGhpcy5jeWNsZS5kaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmN5Y2xlLmkrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN5Y2xlLmktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFBvd2VydXAoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucG93ZXJ1cCA9IHBvd2VydXBUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3dlcnVwVHlwZXMubGVuZ3RoKV07XHJcbiAgICB0aGlzLmN5Y2xlID0gdGhpcy5wb3dlcnVwLmN5Y2xlO1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDEwMDA7XHJcbiAgICBpZiAodGhpcy5jeWNsZS5zaXplWzFdID4gdGhpcy5jeWNsZS5zaXplWzBdKSB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gNDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSBNYXRoLnJvdW5kKCh0aGlzLmhlaWdodCAvIHRoaXMuY3ljbGUuc2l6ZVsxXSkgKiB0aGlzLmN5Y2xlLnNpemVbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53aWR0aCA9IDQwO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IE1hdGgucm91bmQoKHRoaXMud2lkdGggLyB0aGlzLmN5Y2xlLnNpemVbMF0pICogdGhpcy5jeWNsZS5zaXplWzFdKTtcclxuICAgIH1cclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuaW1nID0gdGhpcy5wb3dlcnVwLmltZztcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAxNTAgKyA1MDtcclxuICAgIHZhciBkZWxheSA9IDU7XHJcbiAgICB0aGlzLm1vdmUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gZGVsZXRlIHBvd2VydXBzW3RoaXMuaWRdO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChoaXQoc3BhY2VzaGlwLCB0aGlzKSkge1xyXG4gICAgICAgICRzY29wZS5hbm5vdW5jZSA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLmFubm91bmNlbWVudCA9IHRoaXMucG93ZXJ1cC5hbm5vdW5jZW1lbnQ7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgdGhpcy5wb3dlcnVwLmFjdGl2YXRlKHNwYWNlc2hpcCk7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBwb3dlcnVwc1t0aGlzLmlkXTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICAgIGlmIChkZWxheSA8PSAwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLmkrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGF5ID0gNTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWxheS0tO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZShvYmplY3QpIHtcclxuICAgIG9iamVjdC5wb3NpdGlvblswXSArPSAob2JqZWN0LnNwZWVkIC8gMTAwKSAqIE1hdGguY29zKCgob2JqZWN0LmFuZ2xlIC0gOTApICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgb2JqZWN0LnBvc2l0aW9uWzFdICs9IChvYmplY3Quc3BlZWQgLyAxMDApICogTWF0aC5zaW4oKChvYmplY3QuYW5nbGUgLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBpZiAob2JqZWN0LnBvc2l0aW9uWzBdID4gY2FudmFzLndpZHRoKSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IC1vYmplY3Qud2lkdGg7XHJcbiAgICB9IGVsc2UgaWYgKG9iamVjdC5wb3NpdGlvblswXSA8IC1vYmplY3Qud2lkdGgpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzBdID0gY2FudmFzLndpZHRoO1xyXG4gICAgfVxyXG4gICAgaWYgKG9iamVjdC5wb3NpdGlvblsxXSA+IGNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzFdID0gLW9iamVjdC5oZWlnaHQ7XHJcbiAgICB9IGVsc2UgaWYgKG9iamVjdC5wb3NpdGlvblsxXSA8IC1vYmplY3QuaGVpZ2h0KSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblsxXSA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShvYmplY3QucG9zaXRpb25bMF0sIG9iamVjdC5wb3NpdGlvblsxXSk7XHJcbiAgICBjdHgudHJhbnNsYXRlKG9iamVjdC53aWR0aCAvIDIsIG9iamVjdC5oZWlnaHQgLyAyKTtcclxuICAgIGN0eC5yb3RhdGUoKG9iamVjdC5yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIGlmIChvYmplY3QuY3ljbGUpIHtcclxuICAgICAgdmFyIGNvbHVtbiA9IG9iamVjdC5jeWNsZS5pICUgb2JqZWN0LmN5Y2xlLmNvbHVtbnM7XHJcbiAgICAgIHZhciByb3cgPSBNYXRoLmZsb29yKG9iamVjdC5jeWNsZS5pIC8gb2JqZWN0LmN5Y2xlLmNvbHVtbnMpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIG9iamVjdC5pbWcsXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMF0gKiBjb2x1bW4sXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMV0gKiByb3csXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMF0sXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMV0sXHJcbiAgICAgICAgLW9iamVjdC53aWR0aCAvIDIsXHJcbiAgICAgICAgLW9iamVjdC5oZWlnaHQgLyAyLFxyXG4gICAgICAgIG9iamVjdC53aWR0aCxcclxuICAgICAgICBvYmplY3QuaGVpZ2h0LFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKG9iamVjdC5jeWNsZS5pIDw9IDApIHtcclxuICAgICAgICBvYmplY3QuY3ljbGUuaSA9IDA7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAob2JqZWN0LmN5Y2xlLmkgPj0gb2JqZWN0LmN5Y2xlLmNvbHVtbnMgKiBvYmplY3QuY3ljbGUucm93cykge1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5pID0gb2JqZWN0LmN5Y2xlLmNvbHVtbnMgKiBvYmplY3QuY3ljbGUucm93cyAtIDE7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdHguZHJhd0ltYWdlKG9iamVjdC5pbWcsIC1vYmplY3Qud2lkdGggLyAyLCAtb2JqZWN0LmhlaWdodCAvIDIsIG9iamVjdC53aWR0aCwgb2JqZWN0LmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHNwYWNlc2hpcDtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAkc2NvcGUucGxheWluZyA9IHRydWU7XHJcbiAgICAkc2NvcGUuc2NvcmUgPSAwO1xyXG4gICAgc3BhY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFjZXBpY3MpO1xyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgc3BhY2VzaGlwID0gbmV3IFNwYWNlc2hpcCgpO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYXduQXN0ZXJvaWRzKDUpO1xyXG4gICAgYXV0b1NwYXduKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRFbnRyeVBvc2l0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBncmlkWCA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIGdyaWRZID0gTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICB2YXIgeCxcclxuICAgICAgeSA9IDA7XHJcbiAgICBpZiAoZ3JpZFggPj0gMSkge1xyXG4gICAgICB4ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgaWYgKHkgPj0gMSkge1xyXG4gICAgICAgIHkgPSAwIC0gaGVpZ2h0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHkgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIGlmIChncmlkWSA+PSAxKSB7XHJcbiAgICAgICAgeCA9IDAgLSB3aWR0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB4ID0gY2FudmFzLndpZHRoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3gsIHldO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGl0KG9iamVjdDEsIG9iamVjdDIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIG9iamVjdDEucG9zaXRpb25bMF0gPCBvYmplY3QyLnBvc2l0aW9uWzBdICsgb2JqZWN0Mi53aWR0aCAmJlxyXG4gICAgICBvYmplY3QyLnBvc2l0aW9uWzBdIDwgb2JqZWN0MS5wb3NpdGlvblswXSArIG9iamVjdDEud2lkdGggJiZcclxuICAgICAgb2JqZWN0MS5wb3NpdGlvblsxXSA8IG9iamVjdDIucG9zaXRpb25bMV0gKyBvYmplY3QyLmhlaWdodCAmJlxyXG4gICAgICBvYmplY3QyLnBvc2l0aW9uWzFdIDwgb2JqZWN0MS5wb3NpdGlvblsxXSArIG9iamVjdDEuaGVpZ2h0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXV0b1NwYXduKCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGFzdGVyb2lkcykubGVuZ3RoIDwgMjAwKSB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIGFzdGVyb2lkc1tpZF0gPSBuZXcgQXN0ZXJvaWQoaWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGF1dG9TcGF3bigpO1xyXG4gICAgICB9LCBzcGF3bkludGVydmFsKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25JbnRlcnZhbCgpIHtcclxuICAgIGlmICgkc2NvcGUuc2NvcmUgPCAxMDAwKSB7XHJcbiAgICAgIHJldHVybiAxMDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCAyMDAwKSB7XHJcbiAgICAgIHJldHVybiA5MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDMwMDApIHtcclxuICAgICAgcmV0dXJuIDgwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNDAwMCkge1xyXG4gICAgICByZXR1cm4gNzAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA1MDAwKSB7XHJcbiAgICAgIHJldHVybiA2MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDYwMDApIHtcclxuICAgICAgcmV0dXJuIDUwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNzAwMCkge1xyXG4gICAgICByZXR1cm4gNDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA4MDAwKSB7XHJcbiAgICAgIHJldHVybiAzMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25Bc3Rlcm9pZHMoYW1vdW50KSB7XHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICBkbyB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIGFzdGVyb2lkc1tpZF0gPSBuZXcgQXN0ZXJvaWQoaWQpO1xyXG4gICAgfSB3aGlsZSAoaSsrIDw9IGFtb3VudCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3blBvd2VydXAoKSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMocG93ZXJ1cHMpLmxlbmd0aCA8IDMpIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgcG93ZXJ1cHNbaWRdID0gbmV3IFBvd2VydXAoaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XHJcbiAgICAkc2NvcGUucGxheWluZyA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgIH1cclxuICAgIHNob3RzID0ge307XHJcbiAgICBpZiAoJHNjb3BlLmxvZ2dlZEluKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuaGlnaHNjb3JlLmFzdGVyb2lkcyA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzID0gJHNjb3BlLnNjb3JlO1xyXG4gICAgICAgIEdhbWVTdmMuc2V0SGlnaHNjb3JlKFwiYXN0ZXJvaWRzXCIsICRzY29wZS5jdXJyZW50VXNlci5faWQsICRzY29wZS5zY29yZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaHNjb3JlIDwgJHNjb3BlLnNjb3JlKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hzY29yZSA9ICRzY29wZS5zY29yZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU3RhcnQgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgYW5kXHJcbiAgLy8gZHJhdyBjYW52YXMuXHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgICAvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG4gICAgLy8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcbiAgICAvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcbiAgICAvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG4gICAgcmVzaXplQ2FudmFzKCk7XHJcbiAgfVxyXG4gIC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuICAvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuICAvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogMTA1KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemUoKTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcblxyXG4gIHZhciB0YWxseSA9IDA7XHJcbiAgdmFyIGRpcmVjdGlvbiA9IHRydWU7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgIGlmIChzaG90c1tpXS5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIHNob3RzW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3RzW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIHBvd2VydXBzKSB7XHJcbiAgICAgIHBvd2VydXBzW2ldLm1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBleHBsb3Npb25zKSB7XHJcbiAgICAgIGlmIChleHBsb3Npb25zW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgZXhwbG9zaW9uc1tpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBleHBsb3Npb25zW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZhbHVhdGVLZXlzKCk7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgc3BhY2VzaGlwLm1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBjYW52YXMud2lkdGgsIDApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwXCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMC4yNVwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjAuNVwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjAuNzVcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIxLjBcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICAgIGN0eC5mb250ID0gXCI2MHB4IE1vbm90b25cIjtcclxuICAgICAgY3R4LmZpbGxUZXh0KFwiQXN0ZXJvaWRzXCIsIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoXCJBc3Rlcm9pZHNcIikud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGN0eC5mb250ID0gXCIyMHB4IEFsZHJpY2hcIjtcclxuICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgIFwiUHJlc3Mgc3BhY2UgdG8gc3RhcnRcIixcclxuICAgICAgICBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KFwiUHJlc3Mgc3BhY2UgdG8gc3RhcnRcIikud2lkdGggLyAyLFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyICsgMjAsXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICBcIkRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlclwiLFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoXCJEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5IExhdXJlbnQgRGViYWNrZXJcIikud2lkdGggLyAyLFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgLSAzMCxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRhbGx5ICs9IGRpcmVjdGlvbiA/IDEgOiAtMTtcclxuICAgIGlmICh0YWxseSA+IDEwMCkge1xyXG4gICAgICB0YWxseSA9IDEwMDtcclxuICAgICAgZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHRhbGx5IDwgMCkge1xyXG4gICAgICB0YWxseSA9IDA7XHJcbiAgICAgIGRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuc3BhY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJhc3Rlcm9pZHMvc3BhY2UnICsgc3BhY2UgKyAnLmpwZ1wiKScsXHJcbiAgICB9O1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0J1YmJsZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZXMtcGFnZScpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB2YXIgYnViYmxlcyA9IFtdO1xyXG4gIHZhciBjb2xvcnMgPSBbJyNmZmMzMDAnLCcjZmY1NzMzJywnI2M3MDAzOScsJyM5MDBjM2UnLCcjNTcxODQ1J107XHJcblxyXG4gIGZ1bmN0aW9uIEJ1YmJsZSgpIHtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAwO1xyXG4gICAgdGhpcy5yYWRpdXMgPSAxO1xyXG4gICAgdGhpcy5leHBhbmRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgdGhpcy5jaXJjdW1mZXJlbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNTApICsgNTtcclxuICAgIHRoaXMubWF4UmFkaXVzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjAwKSArIDIwO1xyXG4gICAgdGhpcy54ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoKTtcclxuICAgIHRoaXMueSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGhpcy52eCA9IChNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSk7XHJcbiAgICB0aGlzLnZ5ID0gKE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBidWJibGVzLmZvckVhY2goZnVuY3Rpb24oYnViYmxlKSB7XHJcbiAgICAgIHZhciBjb2xvciA9IGNvbG9yc1tNYXRoLnJvdW5kKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMoYnViYmxlLngsIGJ1YmJsZS55LCBidWJibGUucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbTWF0aC5yb3VuZChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3JzW2NvbG9ycy5sZW5ndGggLSBNYXRoLnJvdW5kKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gYnViYmxlLmNpcmN1bWZlcmVuY2UgKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cztcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWx0ZXJCdWJibGVzKCkge1xyXG4gICAgYnViYmxlcy5wdXNoKG5ldyBCdWJibGUoKSk7XHJcbiAgICBidWJibGVzID0gYnViYmxlcy5maWx0ZXIoZnVuY3Rpb24gKGJ1YmJsZSkge1xyXG4gICAgICBpZiAoYnViYmxlLnJhZGl1cyA9PT0gYnViYmxlLm1heFJhZGl1cykge1xyXG4gICAgICAgIGJ1YmJsZS5leHBhbmRpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBidWJibGUueCArPSBidWJibGUudnggKiBidWJibGUuc3BlZWQ7XHJcbiAgICAgIGJ1YmJsZS55ICs9IGJ1YmJsZS52eSAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnJhZGl1cyArPSAoYnViYmxlLmV4cGFuZGluZyA/IDEgOiAtMSk7XHJcbiAgICAgIHJldHVybiBidWJibGUucmFkaXVzID4gMDtcclxuICAgIH0pO1xyXG4gICAgZHJhdygpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG5cclxuXHJcblx0KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG5cdFx0Ly8gZHJhdyBjYW52YXMuXHJcblx0XHRpbml0aWFsaXplKCk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHRcdC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuXHRcdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0XHR9XHJcblx0XHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0XHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHRcdC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG5cdFx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG5cdFx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdFx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTUgOiAxMTEpO1xyXG5cdFx0fVxyXG5cclxuXHR9KSgpO1xyXG5cclxuXHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkNoYXJhZGVzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgJHNjb3BlLnNlbGVjdFdvcmQgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICRzY29wZS53b3JkID0gJHNjb3BlLmNoYXJhZGVzW2NhdGVnb3J5XVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldLmxlbmd0aCldO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQ29udGFjdEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRW1haWxTdmMpIHtcclxuICAkc2NvcGUub3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTcGFtXCIsXHJcbiAgICAgIHRleHQ6IFwiSSBhbSBhIHNwYW0gYm90IGFuZCBhdXRvbWF0aWNhbGx5IGNoZWNrIHRoZSBmaXJzdCBvcHRpb24gSSBmaW5kIVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPcHBvcnR1bml0eVwiLFxyXG4gICAgICB0ZXh0OiBcIllvdSBzZWVtIHRvIGhhdmUgdGhlIHNraWxscyBJIHNlZWssIEknZCBsaWtlIHRvIHRhbGsgYWJvdXQgc29tZSBvcHBvcnR1bml0aWVzLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZXN1bWVcIixcclxuICAgICAgdGV4dDogXCJJIGRpZyB0aGUgcmVzdW1lLCBob3cgZGlkIHlvdSBtYWtlIGl0P1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPdGhlclwiLFxyXG4gICAgICB0ZXh0OiBcIlN1bXRpbiBlbHNlIVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICAkc2NvcGUuY29udGFjdCA9IHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gICAgYWJvdXQ6IFwiXCIsXHJcbiAgICBtZXNzYWdlOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnNlbmRpbmcgPSB0cnVlO1xyXG4gICAgRW1haWxTdmMuc2VuZCh7XHJcbiAgICAgIGVtYWlsOiAkc2NvcGUuY29udGFjdC5lbWFpbCxcclxuICAgICAgbmFtZTogJHNjb3BlLmNvbnRhY3QubmFtZSxcclxuICAgICAgcGhvbmU6ICRzY29wZS5jb250YWN0LnBob25lLFxyXG4gICAgICBhYm91dDogJHNjb3BlLmNvbnRhY3QuYWJvdXQsXHJcbiAgICAgIG1lc3NhZ2U6ICRzY29wZS5jb250YWN0Lm1lc3NhZ2UsXHJcbiAgICB9KS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuc2VudCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTLiBzdGF0dXM9JWQsIHRleHQ9JXNcIiwgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS50ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAkc2NvcGUuc2VuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRkFJTEVELiBlcnJvcj1cIiwgZXJyKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignRXhwZXJpZW5jZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICRzY29wZS5nZXRTa2lsbCA9IGZ1bmN0aW9uKHNraWxsQ29kZSkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2tpbGxzKSByZXR1cm47XHJcbiAgICByZXR1cm4gJHNjb3BlLnNraWxscy5maW5kKGZ1bmN0aW9uKHNraWxsKSB7XHJcbiAgICAgIHJldHVybiBza2lsbC5jb2RlID09PSBza2lsbENvZGU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignSG9iYmllc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAkLmdldEpTT04oJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vdXNlci9iZWxnb2NhbmFkaWFuL2Fib3V0Ly5qc29uJywgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRIb2JieSA9ICRzY29wZS5ob2JiaWVzWzBdO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0SG9iYnkgPSBmdW5jdGlvbiAoaG9iYnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gaG9iYnk7XHJcbiAgICAkc2NvcGUuaG9iYnlTZWxlY3RvclZpc2libGUgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd0hvYmJ5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpIHtcclxuICAgIGlmICghdmFsdWUuaW1hZ2VzKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdmFsdWUuaW1hZ2VzLmxlbmd0aCA+IDA7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignTGVtbWluZ3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgR2FtZVN2Yykge1xyXG5cclxuICB2YXIgTEVGVCA9IDA7XHJcbiAgdmFyIFJJR0hUID0gMTtcclxuXHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZW1taW5ncy1wYWdlJyk7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIHZhciBsZW1taW5nc0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgbGVtbWluZ3NJbWFnZS5zcmMgPSAnbGVtbWluZ3MvbGVtbWluZ3MucG5nJztcclxuICB2YXIgZGVjb3JJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGRlY29ySW1hZ2Uuc3JjID0gJ2xlbW1pbmdzL2RlY29yLnBuZyc7XHJcbiAgdmFyIGxlbW1pbmdzID0ge307XHJcbiAgdmFyIHN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgdmFyIGFjdGlvbnMgPSB7XHJcbiAgICB3YWxrOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMF0sXHJcbiAgICAgIGVuZDogWzMyMCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGh1aDoge1xyXG4gICAgICBzdGFydDogWzMyMCwgMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZmFsbDoge1xyXG4gICAgICBzdGFydDogWzAsIDgwXSxcclxuICAgICAgZW5kOiBbMTYwLCAxMDBdLFxyXG4gICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGZseToge1xyXG4gICAgICBzdGFydDogWzE2MCwgODBdLFxyXG4gICAgICBlbmQ6IFs0ODAsIDExMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc3RvcDoge1xyXG4gICAgICBzdGFydDogWzAsIDEyMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTQwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgY2xpbWI6IHtcclxuICAgICAgc3RhcnQ6IFswLCAxNjBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDE4NV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMjVdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwdW5jaDoge1xyXG4gICAgICBzdGFydDogWzAsIDI0MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMzAwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZGlnOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMzIwXSxcclxuICAgICAgZW5kOiBbMzIwLCAzNDVdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBMZW1taW5nKGluaXQpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNhbnZhcy53aWR0aCAtIDIwMCkpICsgMTAwLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLmhlaWdodCAtIDIwMCkpICsgMTAwXTtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSAqIDIgPiAxID8gTEVGVCA6IFJJR0hUO1xyXG4gICAgdGhpcy5hY3QgPSBmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb25zW2FjdGlvbl07XHJcbiAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gKDIwICogKHRoaXMuYWN0aW9uLnJvd3MgLSAxKSkpIC8gdGhpcy5hY3Rpb24ucm93cztcclxuICAgICAgdGhpcy5hbmltYXRpb24gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuYWN0KGluaXQpO1xyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSwgdGhpcy5wb3NpdGlvblsxXSk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gTEVGVCkge1xyXG4gICAgICAgIGN0eC5zY2FsZSgtMSwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UobGVtbWluZ3NJbWFnZSwgKHRoaXMud2lkdGggKiBjb2x1bW4pICsgdGhpcy5hY3Rpb24uc3RhcnRbMF0sICgodGhpcy5oZWlnaHQgKyAyMCkgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgaWYgKHRoaXMuYWN0aW9uLnJldmVyc2UpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlLS07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICF0aGlzLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICBpZiAodGhpcy5jeWNsZSA+PSB0aGlzLmFjdGlvbi5jb2x1bW5zICogdGhpcy5hY3Rpb24ucm93cykge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGF0Y2goKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gWzIwLCAyMF07XHJcbiAgICB0aGlzLmFjdGlvbiA9IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbODIsIDUwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgIHJvd3M6IDEwXHJcbiAgICB9XHJcbiAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICB0aGlzLmhlaWdodCA9ICh0aGlzLmFjdGlvbi5lbmRbMV0gLSB0aGlzLmFjdGlvbi5zdGFydFsxXSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICB0aGlzLm9wZW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgdmFyIGNvbHVtbiwgcm93O1xyXG4gICAgICBpZiAoc3RhcnRlZCkge1xyXG4gICAgICAgIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3IodGhpcy5jeWNsZSAvIHRoaXMuYWN0aW9uLmNvbHVtbnMpO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgOSkge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb2x1bW4gPSAwO1xyXG4gICAgICAgIHJvdyA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgY3R4LmRyYXdJbWFnZShkZWNvckltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKHRoaXMuaGVpZ2h0ICogcm93KSArIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gMSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25MZW1taW5nKCkge1xyXG4gICAgT2JqZWN0LmtleXMoYWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgbGVtbWluZ3NbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKV0gPSBuZXcgTGVtbWluZyhhY3Rpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdHJlc2l6ZUNhbnZhcygpO1xyXG5cdH1cclxuXHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0Ly8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcblx0Ly8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcblx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG5cdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1MCA6IDEwNSk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbiAgc3Bhd25MZW1taW5nKCk7XHJcbiAgbGV0IGhhdGNoID0gbmV3IEhhdGNoKClcclxuICBkcmF3KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBpZiAoIXN0YXJ0ZWQpIHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguZm9udD0nNDBweCBNb25vdG9uJztcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9ICcxMCc7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcclxuICAgICAgY3R4LnJlY3QoMTUsIGNhbnZhcy5oZWlnaHQgLSA0NSwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLndpZHRoICsgMjAsIGN0eC5tZWFzdXJlVGV4dCgnU3RhcnQnKS5oZWlnaHQgKyBjYW52YXMuaGVpZ2h0IC0gNDUpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ1N0YXJ0JywgMjAsIGNhbnZhcy5oZWlnaHQgLSA1MCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKHZhciBpIGluIGxlbW1pbmdzKSB7XHJcbiAgICAgICAgbGVtbWluZ3NbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYXRjaC5vcGVuKCk7XHJcbiAgICBzdGFydGVkID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGRyYXcoKTtcclxuICAgIH0sIDE1MCk7XHJcbiAgfVxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMaXN0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIENhdGVnb3JpZXNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IHRydWU7XHJcblxyXG4gICRzY29wZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5nZXRDYXRlZ29yaWVzKClcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICRzY29wZS50YXNrcyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpIGluICRzY29wZS5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaiBpbiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrcykge1xyXG4gICAgICAgICAgJHNjb3BlLnRhc2tzLnB1c2goe1xyXG4gICAgICAgICAgICBcImNhdGVnb3J5XCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUsXHJcbiAgICAgICAgICAgIFwidGFza1wiOiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrc1tqXS5uYW1lXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RDYXRlZ29yeSA9IGZ1bmN0aW9uKGNhdGVnb3J5KSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkVGFza3MgPSBbXTtcclxuICAgICRzY29wZS5zZWxlY3RhYmxlVGFza3MgPSBbXTtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcy5wdXNoKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgIH1cclxuICAgICRzY29wZS5zaG93Q2F0ZWdvcnkgPSBmYWxzZTtcclxuICAgICRzY29wZS5lbnRlcmVkQ2F0ZWdvcnkgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUubmV3Q2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSA9PT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkoJHNjb3BlLmNhdGVnb3JpZXNbaV0pO1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZENhdGVnb3J5KHtcclxuICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuaW5pdCgpO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0ubmFtZSA9PT0gdGFzaykge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0VGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5Lm5hbWUsIHtcclxuICAgICAgICB0YXNrOiB0YXNrXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLnB1c2goeyBuYW1lOiB0YXNrIH0pO1xyXG4gICAgICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1skc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRUYXNrID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUudW5zZWxlY3RUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RhYmxlVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5hZGRUYXNrID0gZnVuY3Rpb24odGFza0xpc3QsIHRhc2spIHtcclxuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnJlbW92ZVRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3Quc3BsaWNlKHRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zdGFydFByaW9yaXRpemluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5zZXRQcmlvcml0eUxpc3QoJHNjb3BlLnNlbGVjdGVkVGFza3MpO1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy9wcmlvcml0aXplJyk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldFF1ZXN0aW9ucyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2VsZWN0ZWRUYXNrcykgcmV0dXJuICcnO1xyXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9ICRzY29wZS5zZWxlY3RlZFRhc2tzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgY291bnRlciArPSBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignTG9naW5DdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgRmlyZWJhc2VVSSBXaWRnZXQgdXNpbmcgRmlyZWJhc2UuXHJcbiAgdmFyIHVpID0gbmV3IGZpcmViYXNldWkuYXV0aC5BdXRoVUkoZmlyZWJhc2UuYXV0aCgpKTtcclxuXHJcbiAgJHNjb3BlLiRvbignbG9nb3V0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB1aS5yZXNldCgpO1xyXG4gICAgc3RhcnRVSSgpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydFVJKCkge1xyXG4gICAgdWkuc3RhcnQoJyNmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyJywge1xyXG4gICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBzaWduSW5TdWNjZXNzOiBmdW5jdGlvbiAoY3VycmVudFVzZXIsIGNyZWRlbnRpYWwsIHJlZGlyZWN0VXJsKSB7XHJcbiAgICAgICAgICAvLyBObyByZWRpcmVjdC5cclxuICAgICAgICAgIGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5hdXRoKClcclxuICAgICAgICAgICAgLmN1cnJlbnRVc2VyLmdldElkVG9rZW4odHJ1ZSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGlkVG9rZW4pIHtcclxuICAgICAgICAgICAgICBVc2VyU3ZjLmF1dGhlbnRpY2F0ZSh7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogY3VycmVudFVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogY3VycmVudFVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwaG90b1VSTDogY3VycmVudFVzZXIucGhvdG9VUkwsXHJcbiAgICAgICAgICAgICAgICBlbWFpbFZlcmlmaWVkOiBjdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkLFxyXG4gICAgICAgICAgICAgICAgaWRUb2tlbjogaWRUb2tlbixcclxuICAgICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdCgnbG9naW4nLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgJCgnI21vZGFsLWxvZ2luJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgLy8kbG9jYXRpb24ucGF0aCgnLycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KCdwb3B1cCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTG9naW4gRmFpbGVkJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYWxlcnQtZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBzaWduSW5GYWlsdXJlIGNhbGxiYWNrIG11c3QgYmUgcHJvdmlkZWQgdG8gaGFuZGxlIG1lcmdlIGNvbmZsaWN0cyB3aGljaFxyXG4gICAgICAgIC8vIG9jY3VyIHdoZW4gYW4gZXhpc3RpbmcgY3JlZGVudGlhbCBpcyBsaW5rZWQgdG8gYW4gYW5vbnltb3VzIHVzZXIuXHJcbiAgICAgICAgc2lnbkluRmFpbHVyZTogZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBGb3IgbWVyZ2UgY29uZmxpY3RzLCB0aGUgZXJyb3IuY29kZSB3aWxsIGJlXHJcbiAgICAgICAgICAvLyAnZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdCcuXHJcbiAgICAgICAgICBpZiAoZXJyb3IuY29kZSAhPSAnZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gVGhlIGNyZWRlbnRpYWwgdGhlIHVzZXIgdHJpZWQgdG8gc2lnbiBpbiB3aXRoLlxyXG4gICAgICAgICAgdmFyIGNyZWQgPSBlcnJvci5jcmVkZW50aWFsO1xyXG4gICAgICAgICAgLy8gQ29weSBkYXRhIGZyb20gYW5vbnltb3VzIHVzZXIgdG8gcGVybWFuZW50IHVzZXIgYW5kIGRlbGV0ZSBhbm9ueW1vdXNcclxuICAgICAgICAgIC8vIHVzZXIuXHJcbiAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgIC8vIEZpbmlzaCBzaWduLWluIGFmdGVyIGRhdGEgaXMgY29waWVkLlxyXG4gICAgICAgICAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoQ3JlZGVudGlhbChjcmVkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVpU2hvd246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vIFRoZSB3aWRnZXQgaXMgcmVuZGVyZWQuXHJcbiAgICAgICAgICAvLyBIaWRlIHRoZSBsb2FkZXIuXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzaWduSW5TdWNjZXNzVXJsOiAnL2hvbWUnLFxyXG4gICAgICBzaWduSW5PcHRpb25zOiBbXHJcbiAgICAgICAgLy9maXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICAvLyBXaWxsIHVzZSBwb3B1cCBmb3IgSURQIFByb3ZpZGVycyBzaWduLWluIGZsb3cgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCwgcmVkaXJlY3QuXHJcbiAgICAgIHNpZ25JbkZsb3c6ICdwb3B1cCcsXHJcbiAgICAgIC8vIE90aGVyIGNvbmZpZyBvcHRpb25zLi4uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0VUkoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUG9zdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGZpbHRlciwgUG9zdHNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XHJcbiAgICAgIFBvc3RzU3ZjLmNyZWF0ZSh7XHJcbiAgICAgICAgYm9keTogJHNjb3BlLnBvc3RCb2R5XHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgICAgICAkc2NvcGUucG9zdEJvZHkgPSBudWxsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBQb3N0c1N2Yy5mZXRjaCgpXHJcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUucG9zdHMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKCd3czpuZXdfcG9zdCcsIGZ1bmN0aW9uIChfLCBwb3N0KSB7XHJcbiAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgUG9zdHNTdmMuZ2V0UG9zdChwb3N0KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUucG9zdHMudW5zaGlmdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUHJvZmlsZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcbiAgY29uc3QgY291bnRyaWVzID0gW1xyXG4gICAgeyBuYW1lOiBcIkFuZG9ycmFcIiwgZmxhZzogXCJmbGFnLWFkXCIsIHRpZGJpdDogXCJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBBcmFiIEVtaXJhdGVzXCIsIGZsYWc6IFwiZmxhZy1hZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWZnaGFuaXN0YW5cIiwgZmxhZzogXCJmbGFnLWFmXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsIGZsYWc6IFwiZmxhZy1hZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW5ndWlsbGFcIiwgZmxhZzogXCJmbGFnLWFpXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbGJhbmlhXCIsIGZsYWc6IFwiZmxhZy1hbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXJtZW5pYVwiLCBmbGFnOiBcImZsYWctYW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFuZ29sYVwiLCBmbGFnOiBcImZsYWctYW9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFudGFyY3RpY2FcIiwgZmxhZzogXCJmbGFnLWFxXCIgfSxcclxuICAgIHsgbmFtZTogXCJBcmdlbnRpbmFcIiwgZmxhZzogXCJmbGFnLWFyXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbWVyaWNhbiBTb21vYVwiLCBmbGFnOiBcImZsYWctYXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF1c3RyaWFcIiwgZmxhZzogXCJmbGFnLWF0XCIgfSxcclxuICAgIHsgbmFtZTogXCJBdXN0cmFsaWFcIiwgZmxhZzogXCJmbGFnLWF1XCIgfSxcclxuICAgIHsgbmFtZTogXCJBcnViYVwiLCBmbGFnOiBcImZsYWctYXdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIsOFbGFuZCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1heFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXplcmJhaWphblwiLCBmbGFnOiBcImZsYWctYXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIiwgZmxhZzogXCJmbGFnLWJhXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYXJiYWRvc1wiLCBmbGFnOiBcImZsYWctYmJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhbmdsYWRlc2hcIiwgZmxhZzogXCJmbGFnLWJkXCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxnaXVtXCIsIGZsYWc6IFwiZmxhZy1iZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnVya2luYSBGYXNvXCIsIGZsYWc6IFwiZmxhZy1iZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnVsZ2FyaWFcIiwgZmxhZzogXCJmbGFnLWJnXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYWhyYWluXCIsIGZsYWc6IFwiZmxhZy1iaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnVydW5kaVwiLCBmbGFnOiBcImZsYWctYmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbmluXCIsIGZsYWc6IFwiZmxhZy1ialwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgQmFydGjDqWxlbXlcIiwgZmxhZzogXCJmbGFnLWJsXCIgfSxcclxuICAgIHsgbmFtZTogXCJCZXJtdWRhXCIsIGZsYWc6IFwiZmxhZy1ibVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJ1bmVpIFwiLCBmbGFnOiBcImZsYWctYm5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvbGl2aWEsIFBsdXJpbmF0aW9uYWwgU3RhdGUgb2ZcIiwgZmxhZzogXCJmbGFnLWJvXCIgfSxcclxuICAgIHsgbmFtZTogXCJCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYVwiLCBmbGFnOiBcImZsYWctYnFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJyYXppbFwiLCBmbGFnOiBcImZsYWctYnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhaGFtYXNcIiwgZmxhZzogXCJmbGFnLWJzXCIgfSxcclxuICAgIHsgbmFtZTogXCJCaHV0YW5cIiwgZmxhZzogXCJmbGFnLWJ0XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3V2ZXQgSXNsYW5kXCIsIGZsYWc6IFwiZmxhZy1idlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm90c3dhbmFcIiwgZmxhZzogXCJmbGFnLWJ3XCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxhcnVzXCIsIGZsYWc6IFwiZmxhZy1ieVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVsaXplXCIsIGZsYWc6IFwiZmxhZy1ielwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FuYWRhXCIsIGZsYWc6IFwiZmxhZy1jYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb25nbywgdGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlXCIsIGZsYWc6IFwiZmxhZy1jZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1jZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29uZ29cIiwgZmxhZzogXCJmbGFnLWNnXCIgfSxcclxuICAgIHsgbmFtZTogXCJTd2l0emVybGFuZFwiLCBmbGFnOiBcImZsYWctY2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkPDtHRlIGQnSXZvaXJlXCIsIGZsYWc6IFwiZmxhZy1jaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29vayBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1ja1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hpbGVcIiwgZmxhZzogXCJmbGFnLWNsXCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW1lcm9vblwiLCBmbGFnOiBcImZsYWctY21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoaW5hXCIsIGZsYWc6IFwiZmxhZy1jblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29sb21iaWFcIiwgZmxhZzogXCJmbGFnLWNvXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb3N0YSBSaWNhXCIsIGZsYWc6IFwiZmxhZy1jclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3ViYVwiLCBmbGFnOiBcImZsYWctY3VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhYm8gVmVyZGVcIiwgZmxhZzogXCJmbGFnLWN2XCIgfSxcclxuICAgIHsgbmFtZTogXCJDdXJhw6dhb1wiLCBmbGFnOiBcImZsYWctY3dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNocmlzdG1hcyBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLWN4XCIgfSxcclxuICAgIHsgbmFtZTogXCJDeXBydXNcIiwgZmxhZzogXCJmbGFnLWN5XCIgfSxcclxuICAgIHsgbmFtZTogXCJDemVjaCBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctY3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdlcm1hbnlcIiwgZmxhZzogXCJmbGFnLWRlXCIgfSxcclxuICAgIHsgbmFtZTogXCJEamlib3V0aVwiLCBmbGFnOiBcImZsYWctZGpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRlbm1hcmtcIiwgZmxhZzogXCJmbGFnLWRrXCIgfSxcclxuICAgIHsgbmFtZTogXCJEb21pbmljYVwiLCBmbGFnOiBcImZsYWctZG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRvbWluaWNhbiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctZG9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFsZ2VyaWFcIiwgZmxhZzogXCJmbGFnLWR6XCIgfSxcclxuICAgIHsgbmFtZTogXCJFY3VhZG9yXCIsIGZsYWc6IFwiZmxhZy1lY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXN0b25pYVwiLCBmbGFnOiBcImZsYWctZWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVneXB0XCIsIGZsYWc6IFwiZmxhZy1lZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiV2VzdGVybiBTYWhhcmFcIiwgZmxhZzogXCJmbGFnLWVoXCIgfSxcclxuICAgIHsgbmFtZTogXCJFcml0cmVhXCIsIGZsYWc6IFwiZmxhZy1lclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3BhaW5cIiwgZmxhZzogXCJmbGFnLWVzXCIgfSxcclxuICAgIHsgbmFtZTogXCJFdGhpb3BpYVwiLCBmbGFnOiBcImZsYWctZXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZpbmxhbmRcIiwgZmxhZzogXCJmbGFnLWZpXCIgfSxcclxuICAgIHsgbmFtZTogXCJGaWppXCIsIGZsYWc6IFwiZmxhZy1malwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpXCIsIGZsYWc6IFwiZmxhZy1ma1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcyBvZlwiLCBmbGFnOiBcImZsYWctZm1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZhcm9lIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWZvXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmFuY2VcIiwgZmxhZzogXCJmbGFnLWZyXCIgfSxcclxuICAgIHsgbmFtZTogXCJHYWJvblwiLCBmbGFnOiBcImZsYWctZ2FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmRcIiwgZmxhZzogXCJmbGFnLWdiXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVuYWRhXCIsIGZsYWc6IFwiZmxhZy1nZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2VvcmdpYVwiLCBmbGFnOiBcImZsYWctZ2VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBHdWlhbmFcIiwgZmxhZzogXCJmbGFnLWdmXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWVybnNleVwiLCBmbGFnOiBcImZsYWctZ2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdoYW5hXCIsIGZsYWc6IFwiZmxhZy1naFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2licmFsdGFyXCIsIGZsYWc6IFwiZmxhZy1naVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3JlZW5sYW5kXCIsIGZsYWc6IFwiZmxhZy1nbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2FtYmlhXCIsIGZsYWc6IFwiZmxhZy1nbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1nblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VhZGVsb3VwZVwiLCBmbGFnOiBcImZsYWctZ3BcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVxdWF0b3JpYWwgR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1ncVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3JlZWNlXCIsIGZsYWc6IFwiZmxhZy1nclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWdzXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWF0ZW1hbGFcIiwgZmxhZzogXCJmbGFnLWd0XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWFtXCIsIGZsYWc6IFwiZmxhZy1ndVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VpbmVhLUJpc3NhdVwiLCBmbGFnOiBcImZsYWctZ3dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1eWFuYVwiLCBmbGFnOiBcImZsYWctZ3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhvbmcgS29uZ1wiLCBmbGFnOiBcImZsYWctaGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctaG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhvbmR1cmFzXCIsIGZsYWc6IFwiZmxhZy1oblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3JvYXRpYVwiLCBmbGFnOiBcImZsYWctaHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhhaXRpXCIsIGZsYWc6IFwiZmxhZy1odFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSHVuZ2FyeVwiLCBmbGFnOiBcImZsYWctaHVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkluZG9uZXNpYVwiLCBmbGFnOiBcImZsYWctaWRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklyZWxhbmRcIiwgZmxhZzogXCJmbGFnLWllXCIgfSxcclxuICAgIHsgbmFtZTogXCJJc3JhZWxcIiwgZmxhZzogXCJmbGFnLWlsXCIgfSxcclxuICAgIHsgbmFtZTogXCJJc2xlIG9mIE1hblwiLCBmbGFnOiBcImZsYWctaW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkluZGlhXCIsIGZsYWc6IFwiZmxhZy1pblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCIsIGZsYWc6IFwiZmxhZy1pb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJhcVwiLCBmbGFnOiBcImZsYWctaXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWlyXCIgfSxcclxuICAgIHsgbmFtZTogXCJJY2VsYW5kXCIsIGZsYWc6IFwiZmxhZy1pc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXRhbHlcIiwgZmxhZzogXCJmbGFnLWl0XCIgfSxcclxuICAgIHsgbmFtZTogXCJKZXJzZXlcIiwgZmxhZzogXCJmbGFnLWplXCIgfSxcclxuICAgIHsgbmFtZTogXCJKYW1haWNhXCIsIGZsYWc6IFwiZmxhZy1qbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSm9yZGFuXCIsIGZsYWc6IFwiZmxhZy1qb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSmFwYW5cIiwgZmxhZzogXCJmbGFnLWpwXCIgfSxcclxuICAgIHsgbmFtZTogXCJLZW55YVwiLCBmbGFnOiBcImZsYWcta2VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkt5cmd5enN0YW5cIiwgZmxhZzogXCJmbGFnLWtnXCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW1ib2RpYVwiLCBmbGFnOiBcImZsYWcta2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktpcmliYXRpXCIsIGZsYWc6IFwiZmxhZy1raVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29tb3Jvc1wiLCBmbGFnOiBcImZsYWcta21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLCBmbGFnOiBcImZsYWcta25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIktvcmVhLCBEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1rcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS29yZWEsIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1rclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS3V3YWl0XCIsIGZsYWc6IFwiZmxhZy1rd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2F5bWFuIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWt5XCIgfSxcclxuICAgIHsgbmFtZTogXCJLYXpha2hzdGFuXCIsIGZsYWc6IFwiZmxhZy1relwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWxhXCIgfSxcclxuICAgIHsgbmFtZTogXCJMZWJhbm9uXCIsIGZsYWc6IFwiZmxhZy1sYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgTHVjaWFcIiwgZmxhZzogXCJmbGFnLWxjXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWVjaHRlbnN0ZWluXCIsIGZsYWc6IFwiZmxhZy1saVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3JpIExhbmthXCIsIGZsYWc6IFwiZmxhZy1sa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGliZXJpYVwiLCBmbGFnOiBcImZsYWctbHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxlc290aG9cIiwgZmxhZzogXCJmbGFnLWxzXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaXRodWFuaWFcIiwgZmxhZzogXCJmbGFnLWx0XCIgfSxcclxuICAgIHsgbmFtZTogXCJMdXhlbWJvdXJnXCIsIGZsYWc6IFwiZmxhZy1sdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGF0dmlhXCIsIGZsYWc6IFwiZmxhZy1sdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGlieWFcIiwgZmxhZzogXCJmbGFnLWx5XCIgfSxcclxuICAgIHsgbmFtZTogXCJNb3JvY2NvXCIsIGZsYWc6IFwiZmxhZy1tYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9uYWNvXCIsIGZsYWc6IFwiZmxhZy1tY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9sZG92YSwgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLW1kXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb250ZW5lZ3JvXCIsIGZsYWc6IFwiZmxhZy1tZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIiwgZmxhZzogXCJmbGFnLW1mXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWRhZ2FzY2FyXCIsIGZsYWc6IFwiZmxhZy1tZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFyc2hhbGwgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctbWhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hY2Vkb25pYSwgdGhlIGZvcm1lciBZdWdvc2xhdiBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctbWtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGlcIiwgZmxhZzogXCJmbGFnLW1sXCIgfSxcclxuICAgIHsgbmFtZTogXCJNeWFubWFyXCIsIGZsYWc6IFwiZmxhZy1tbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9uZ29saWFcIiwgZmxhZzogXCJmbGFnLW1uXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWNhb1wiLCBmbGFnOiBcImZsYWctbW9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctbXBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hcnRpbmlxdWVcIiwgZmxhZzogXCJmbGFnLW1xXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXVyaXRhbmlhXCIsIGZsYWc6IFwiZmxhZy1tclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9udHNlcnJhdFwiLCBmbGFnOiBcImZsYWctbXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbHRhXCIsIGZsYWc6IFwiZmxhZy1tdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWF1cml0aXVzXCIsIGZsYWc6IFwiZmxhZy1tdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsZGl2ZXNcIiwgZmxhZzogXCJmbGFnLW12XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxhd2lcIiwgZmxhZzogXCJmbGFnLW13XCIgfSxcclxuICAgIHsgbmFtZTogXCJNZXhpY29cIiwgZmxhZzogXCJmbGFnLW14XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxheXNpYVwiLCBmbGFnOiBcImZsYWctbXlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vemFtYmlxdWVcIiwgZmxhZzogXCJmbGFnLW16XCIgfSxcclxuICAgIHsgbmFtZTogXCJOYW1pYmlhXCIsIGZsYWc6IFwiZmxhZy1uYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV3IENhbGVkb25pYVwiLCBmbGFnOiBcImZsYWctbmNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pZ2VyXCIsIGZsYWc6IFwiZmxhZy1uZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9yZm9sayBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLW5mXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWdlcmlhXCIsIGZsYWc6IFwiZmxhZy1uZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmljYXJhZ3VhXCIsIGZsYWc6IFwiZmxhZy1uaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV0aGVybGFuZHNcIiwgZmxhZzogXCJmbGFnLW5sXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3J3YXlcIiwgZmxhZzogXCJmbGFnLW5vXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXBhbFwiLCBmbGFnOiBcImZsYWctbnBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hdXJ1XCIsIGZsYWc6IFwiZmxhZy1uclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTml1ZVwiLCBmbGFnOiBcImZsYWctbnVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5ldyBaZWFsYW5kXCIsIGZsYWc6IFwiZmxhZy1uelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiT21hblwiLCBmbGFnOiBcImZsYWctb21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhbmFtYVwiLCBmbGFnOiBcImZsYWctcGFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBlcnVcIiwgZmxhZzogXCJmbGFnLXBlXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggUG9seW5lc2lhXCIsIGZsYWc6IFwiZmxhZy1wZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFwdWEgTmV3IEd1aW5lYVwiLCBmbGFnOiBcImZsYWctcGdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBoaWxpcHBpbmVzXCIsIGZsYWc6IFwiZmxhZy1waFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFraXN0YW5cIiwgZmxhZzogXCJmbGFnLXBrXCIgfSxcclxuICAgIHsgbmFtZTogXCJQb2xhbmRcIiwgZmxhZzogXCJmbGFnLXBsXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCIsIGZsYWc6IFwiZmxhZy1wbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGl0Y2Fpcm5cIiwgZmxhZzogXCJmbGFnLXBuXCIgfSxcclxuICAgIHsgbmFtZTogXCJQdWVydG8gUmljb1wiLCBmbGFnOiBcImZsYWctcHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhbGVzdGluZSwgU3RhdGUgb2ZcIiwgZmxhZzogXCJmbGFnLXBzXCIgfSxcclxuICAgIHsgbmFtZTogXCJQb3J0dWdhbFwiLCBmbGFnOiBcImZsYWctcHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhbGF1XCIsIGZsYWc6IFwiZmxhZy1wd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFyYWd1YXlcIiwgZmxhZzogXCJmbGFnLXB5XCIgfSxcclxuICAgIHsgbmFtZTogXCJRYXRhclwiLCBmbGFnOiBcImZsYWctcWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlLDqXVuaW9uXCIsIGZsYWc6IFwiZmxhZy1yZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUm9tYW5pYVwiLCBmbGFnOiBcImZsYWctcm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNlcmJpYVwiLCBmbGFnOiBcImZsYWctcnNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlJ1c3NpYW4gRmVkZXJhdGlvblwiLCBmbGFnOiBcImZsYWctcnVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlJ3YW5kYVwiLCBmbGFnOiBcImZsYWctcndcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhdWRpIEFyYWJpYVwiLCBmbGFnOiBcImZsYWctc2FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvbG9tb24gSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctc2JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNleWNoZWxsZXNcIiwgZmxhZzogXCJmbGFnLXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJTdWRhblwiLCBmbGFnOiBcImZsYWctc2RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3ZWRlblwiLCBmbGFnOiBcImZsYWctc2VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpbmdhcG9yZVwiLCBmbGFnOiBcImZsYWctc2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhXCIsIGZsYWc6IFwiZmxhZy1zaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2xvdmVuaWFcIiwgZmxhZzogXCJmbGFnLXNpXCIgfSxcclxuICAgIHsgbmFtZTogXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCIsIGZsYWc6IFwiZmxhZy1zalwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2xvdmFraWFcIiwgZmxhZzogXCJmbGFnLXNrXCIgfSxcclxuICAgIHsgbmFtZTogXCJTaWVycmEgTGVvbmVcIiwgZmxhZzogXCJmbGFnLXNsXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW4gTWFyaW5vXCIsIGZsYWc6IFwiZmxhZy1zbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2VuZWdhbFwiLCBmbGFnOiBcImZsYWctc25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvbWFsaWFcIiwgZmxhZzogXCJmbGFnLXNvXCIgfSxcclxuICAgIHsgbmFtZTogXCJTdXJpbmFtZVwiLCBmbGFnOiBcImZsYWctc3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvdXRoIFN1ZGFuXCIsIGZsYWc6IFwiZmxhZy1zc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FvIFRvbWUgYW5kIFByaW5jaXBlXCIsIGZsYWc6IFwiZmxhZy1zdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWwgU2FsdmFkb3JcIiwgZmxhZzogXCJmbGFnLXN2XCIgfSxcclxuICAgIHsgbmFtZTogXCJTaW50IE1hYXJ0ZW4gKER1dGNoIHBhcnQpXCIsIGZsYWc6IFwiZmxhZy1zeFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3lyaWFuIEFyYWIgUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLXN5XCIgfSxcclxuICAgIHsgbmFtZTogXCJTd2F6aWxhbmRcIiwgZmxhZzogXCJmbGFnLXN6XCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLXRjXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGFkXCIsIGZsYWc6IFwiZmxhZy10ZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzXCIsIGZsYWc6IFwiZmxhZy10ZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9nb1wiLCBmbGFnOiBcImZsYWctdGdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRoYWlsYW5kXCIsIGZsYWc6IFwiZmxhZy10aFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGFqaWtpc3RhblwiLCBmbGFnOiBcImZsYWctdGpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRva2VsYXVcIiwgZmxhZzogXCJmbGFnLXRrXCIgfSxcclxuICAgIHsgbmFtZTogXCJUaW1vci1MZXN0ZVwiLCBmbGFnOiBcImZsYWctdGxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmttZW5pc3RhblwiLCBmbGFnOiBcImZsYWctdG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1bmlzaWFcIiwgZmxhZzogXCJmbGFnLXRuXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb25nYVwiLCBmbGFnOiBcImZsYWctdG9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmtleVwiLCBmbGFnOiBcImZsYWctdHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIiwgZmxhZzogXCJmbGFnLXR0XCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXZhbHVcIiwgZmxhZzogXCJmbGFnLXR2XCIgfSxcclxuICAgIHsgbmFtZTogXCJUYWl3YW4sIFByb3ZpbmNlIG9mIENoaW5hXCIsIGZsYWc6IFwiZmxhZy10d1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctdHpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVrcmFpbmVcIiwgZmxhZzogXCJmbGFnLXVhXCIgfSxcclxuICAgIHsgbmFtZTogXCJVZ2FuZGFcIiwgZmxhZzogXCJmbGFnLXVnXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLXVtXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIiwgZmxhZzogXCJmbGFnLXVzXCIgfSxcclxuICAgIHsgbmFtZTogXCJVcnVndWF5XCIsIGZsYWc6IFwiZmxhZy11eVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVXpiZWtpc3RhblwiLCBmbGFnOiBcImZsYWctdXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhvbHkgU2VlXCIsIGZsYWc6IFwiZmxhZy12YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIiwgZmxhZzogXCJmbGFnLXZjXCIgfSxcclxuICAgIHsgbmFtZTogXCJWZW5lenVlbGEsIEJvbGl2YXJpYW4gUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLXZlXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaXJnaW4gSXNsYW5kcywgQnJpdGlzaFwiLCBmbGFnOiBcImZsYWctdmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzLCBVLlMuXCIsIGZsYWc6IFwiZmxhZy12aVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlldCBOYW1cIiwgZmxhZzogXCJmbGFnLXZuXCIgfSxcclxuICAgIHsgbmFtZTogXCJWYW51YXR1XCIsIGZsYWc6IFwiZmxhZy12dVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiV2FsbGlzIGFuZCBGdXR1bmFcIiwgZmxhZzogXCJmbGFnLXdmXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW1vYVwiLCBmbGFnOiBcImZsYWctd3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlllbWVuXCIsIGZsYWc6IFwiZmxhZy15ZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWF5b3R0ZVwiLCBmbGFnOiBcImZsYWcteXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvdXRoIEFmcmljYVwiLCBmbGFnOiBcImZsYWctemFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlphbWJpYVwiLCBmbGFnOiBcImZsYWctem1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlppbWJhYndlXCIsIGZsYWc6IFwiZmxhZy16d1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVXNlckZsYWdzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnVzZXJGbGFncyA9ICRzY29wZS5jdXJyZW50VXNlcj8uZmxhZ3NcclxuICAgICAgPyBjb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChjb3VudHJ5KSB7XHJcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLmN1cnJlbnRVc2VyLmZsYWdzLmluY2x1ZGVzKGNvdW50cnkuZmxhZyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgOiBbXTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZGF0ZU9wdGlvbnMgPSB7XHJcbiAgICBtYXhEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgbWluRGF0ZTogbmV3IERhdGUoMTkwMCwgMSwgMSksXHJcbiAgICBpbml0RGF0ZTogbmV3IERhdGUoMjAwMCwgMSwgMSksXHJcbiAgICBkYXRlcGlja2VyTW9kZTogXCJ5ZWFyXCIsXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVzZXJuYW1lVG9nZ2xlID0gdHJ1ZTtcclxuICAkc2NvcGUucGFzc3dvcmRUb2dnbGUgPSB0cnVlO1xyXG5cclxuICAkc2NvcGUudG9nZ2xlVXNlcm5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSAhJHNjb3BlLnVzZXJuYW1lVG9nZ2xlO1xyXG4gICAgJHNjb3BlLm5ld1VzZXJuYW1lID0gJHNjb3BlLmN1cnJlbnRVc2VyLnVzZXJuYW1lO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS50b2dnbGVQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS5uZXdQYXNzd29yZCA9IG51bGw7XHJcbiAgICAkc2NvcGUuY29uZmlybVBhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9ICEkc2NvcGUucGFzc3dvcmRUb2dnbGU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAocGFzc3dvcmQpIHtcclxuICAgIGlmIChwYXNzd29yZCkge1xyXG4gICAgICB2YXIgdXNlciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgIFVzZXJTdmMuY2hlY2tQYXNzd29yZCh1c2VyLCBwYXNzd29yZCkudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBvcmlnaW5hbEJnID0gJChcIi5wYXNzd29yZFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIik7XHJcbiAgICAgICAgICAkKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjZDMVwiIH0sIDIwMCkuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogb3JpZ2luYWxCZyB9LCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVBhc3N3b3JkID0gZnVuY3Rpb24gKG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCwgY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICBpZiAobmV3UGFzc3dvcmQpIHtcclxuICAgICAgaWYgKG5ld1Bhc3N3b3JkID09IGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgICBVc2VyU3ZjLmNoYW5nZVBhc3N3b3JkKHVzZXIsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCkudGhlbihcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwicG9wdXBcIiwge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGFzc3dvcmQgQ2hhbmdlZFwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiYWxlcnQtc3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJHNjb3BlLm9sZFBhc3N3b3JkID0gbnVsbDtcclxuICAgICAgICAgICAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuJGVtaXQoXCJwb3B1cFwiLCB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJQYXNzd29yZCBDaGFuZ2UgRmFpbGVkXCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJhbGVydC1kYW5nZXJcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAkKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjZDMVwiIH0sIDIwMCkuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogb3JpZ2luYWxCZyB9LCAyMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXJuYW1lKSB7XHJcbiAgICAkc2NvcGUuJGVtaXQoXCJsb2FkaW5nXCIpO1xyXG4gICAgVXNlclN2Yy5jaGFuZ2VVc2VybmFtZSgkc2NvcGUuY3VycmVudFVzZXIuX2lkLCB1c2VybmFtZSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwidXBkYXRlXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwicG9wdXBcIiwge1xyXG4gICAgICAgICAgbWVzc2FnZTogdXNlcm5hbWUgKyBcIiBhbHJlYWR5IGluIHVzZVwiLFxyXG4gICAgICAgICAgdHlwZTogXCJhbGVydC1kYW5nZXJcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUuJGVtaXQoXCJsb2FkaW5nXCIpO1xyXG4gICAgVXNlclN2Yy51cGRhdGVVc2VyKHsgLi4uJHNjb3BlLmN1cnJlbnRVc2VyLCBmbGFnczogJHNjb3BlLnVzZXJGbGFncy5tYXAoKHsgZmxhZyB9KSA9PiBmbGFnKSB9KS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoXCJ1cGRhdGVcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5sb2FkQ291bnRyaWVzID0gZnVuY3Rpb24gKCRxdWVyeSkge1xyXG4gICAgcmV0dXJuIGNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGNvdW50cnkpIHtcclxuICAgICAgcmV0dXJuIGNvdW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsICgpID0+IHtcclxuICAgIHVwZGF0ZVVzZXJGbGFncygpO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdTa2lsbHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IDA7XHJcbiAgJHNjb3BlLnNraWxsc1Zpc2libGUgPSBmYWxzZTtcclxuICAkc2NvcGUucHJvamVjdHMgPSBbXTtcclxuXHJcbiAgJHNjb3BlLmxhYmVscyA9IFtcIkRvd25sb2FkIFNhbGVzXCIsIFwiSW4tU3RvcmUgU2FsZXNcIiwgXCJNYWlsLU9yZGVyIFNhbGVzXCJdO1xyXG4gICRzY29wZS5kYXRhID0gWzMwMCwgNTAwLCAxMDBdO1xyXG5cclxuICAkLmdldEpTT04oJy9leHBlcmllbmNlLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuICAgICRzY29wZS5wcm9qZWN0cyA9IGRhdGEucmVkdWNlKChwcm9qZWN0cywgZW1wbG95ZXIpID0+IHtcclxuICAgICAgaWYgKGVtcGxveWVyLnByb2plY3RzKSByZXR1cm4gZW1wbG95ZXIucHJvamVjdHMuY29uY2F0KHByb2plY3RzKTtcclxuICAgICAgZWxzZSByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9LCB7fSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5maWx0ZXJlZFByb2plY3RzID0gKCkgPT4gJHNjb3BlLnByb2plY3RzXHJcbiAgICAuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNraWxscyAmJiBwcm9qZWN0LnNraWxscy5pbmNsdWRlcygkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jb2RlKSlcclxuXHJcbiAgJC5nZXRKU09OKCcvc2tpbGxzLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuXHJcbiAgICBjb25zdCBza2lsbHMgPSBkYXRhXHJcbiAgICAuZmlsdGVyKChza2lsbCkgPT4gc2tpbGwuZW5hYmxlZClcclxuXHJcbiAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHNraWxsc1xyXG4gICAgLnJlZHVjZShmdW5jdGlvbihjYXRlZ29yaWVzLCBza2lsbCkge1xyXG4gICAgICBpZiAoIWNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0gPSBbc2tpbGxdXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0ucHVzaChza2lsbClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2F0ZWdvcmllcztcclxuICAgIH0sIHt9KTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCA9IGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IHNraWxsO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydE9wdGlvbnMgPSB7XHJcbiAgICAgICAgY3V0b3V0UGVyY2VudGFnZSA6IDgwLFxyXG4gICAgICAgIGNpcmN1bWZlcmVuY2U6IDIgKiBNYXRoLlBJLFxyXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXHJcbiAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydFN0eWxlID0ge1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgvc2tpbGxzLycgKyAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5pbWFnZSArICcpJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJzYwJScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnNTAlIDUwJSdcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwoJHNjb3BlLnNraWxsc1swXSk7XHJcblxyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRzY2UsICRsb2NhdGlvbiwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICBsZXQgcGFnZSA9IDE7XHJcbiAgICAkc2NvcGUubGlzdHMgPSBbXTtcclxuICAgICRzY29wZS5zZWFyY2ggPSBcIlwiO1xyXG4gICAgJHNjb3BlLm5ld0l0ZW0gPSB7fTtcclxuICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHt9O1xyXG4gICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBcIkVOXCI7XHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW107XHJcbiAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICBsZXQgZXhoYXVzdGVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3Qgb2JqZWN0Q2F0ZWdvcmllcyA9IFtcclxuICAgICAgXCJBcnRcIixcclxuICAgICAgXCJDdWx0dXJlXCIsXHJcbiAgICAgIFwiRm9vZCBhbmQgRHJpbmtcIixcclxuICAgICAgXCJOYXR1cmVcIixcclxuICAgICAgXCJPYmplY3RzXCIsXHJcbiAgICAgIFwiUmVsaWdpb25cIixcclxuICAgICAgXCJTb2NpZXR5XCIsXHJcbiAgICAgIFwiU3BvcnRzXCIsXHJcbiAgICAgIFwiVHJhbnNwb3J0YXRpb25cIixcclxuICAgIF07XHJcbiAgICAkc2NvcGUuYmx1cmJUeXBlcyA9IFtcclxuICAgICAgeyBhcGk6IFwibW92aWVzXCIsIGNhdGVnb3JpZXM6IFtcIk1vdmllc1wiXSwgdGV4dDogXCJHZXQgbW92aWUgcG9zdGVyc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcInR2XCIsIGNhdGVnb3JpZXM6IFtcIlRlbGV2aXNpb25cIl0sIHRleHQ6IFwiR2V0IHR2IHBvc3RlcnNcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJhY3RvcnNcIiwgY2F0ZWdvcmllczogW1wiTW92aWVzXCIsIFwiVGVsZXZpc2lvblwiXSwgdGV4dDogXCJHZXQgYWN0b3IgcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcImJvb2tzXCIsIGNhdGVnb3JpZXM6IFtcIkxpdGVyYXR1cmVcIl0sIHRleHQ6IFwiR2V0IGJvb2sgY292ZXJzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwibXVzaWN2aWRlb3NcIiwgY2F0ZWdvcmllczogW1wiTXVzaWNcIl0sIHRleHQ6IFwiR2V0IG11c2ljIHZpZGVvc1wiLCBhZG1pbk9ubHk6IHRydWUgfSxcclxuICAgICAgeyBhcGk6IFwidW5zcGxhc2hcIiwgY2F0ZWdvcmllczogb2JqZWN0Q2F0ZWdvcmllcywgdGV4dDogXCJHZXQgVW5zcGxhc2ggcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcInBleGVsc1wiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBQZXhlbHMgcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcIndpa2lcIiwgY2F0ZWdvcmllczogb2JqZWN0Q2F0ZWdvcmllcywgdGV4dDogXCJHZXQgV2lraSBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgIF07XHJcblxyXG4gICAgJHNjb3BlLmhhdmVDb21tb25JdGVtcyA9IChhcnIxLCBhcnIyKSA9PiB7XHJcbiAgICAgIHJldHVybiBhcnIxPy5zb21lKChpdGVtKSA9PiBhcnIyLmluY2x1ZGVzKGl0ZW0pKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIC8vIFRhYlxyXG4gICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuY3JlYXRlVmFsdWUoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoJChcIiNuZXctdmFsdWVcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgJChcIiNuZXctYmx1cmJcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIH1cclxuICAgICAgLy8gdXNlIGUua2V5Q29kZVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWRkTGlzdCA9ICgpID0+IHtcclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgXCJuZXdcIik7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBjcmVhdG9yOiAkc2NvcGUuY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgdmFsdWVzOiBbXSxcclxuICAgICAgICBhbnN3ZXJzOiAwLFxyXG4gICAgICAgIGlzRHluYW1pYzogdHJ1ZSxcclxuICAgICAgICBjYXRlZ29yeTogXCJcIixcclxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgICBsYW5ndWFnZTogJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UsXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWFyY2ggPSAkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoO1xyXG4gICAgICBpZiAobGlzdCkge1xyXG4gICAgICAgIGlmIChsaXN0Ll9pZCA9PT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgJHNjb3BlLmFkZExpc3QoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3QobGlzdClcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gJHNjb3BlLnNlbGVjdGVkTGlzdC5sYW5ndWFnZTtcclxuICAgICAgICAgICAgICAkc2NvcGUucmVhZE9ubHkgPVxyXG4gICAgICAgICAgICAgICAgISRzY29wZS5zZWxlY3RlZExpc3QgfHxcclxuICAgICAgICAgICAgICAgICghJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluICYmXHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY3JlYXRvci5faWQgIT09ICRzY29wZS5jdXJyZW50VXNlci5faWQgJiZcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldExhbmd1YWdlRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzZXRDYXRlZ29yeUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0ge307XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmN1cnJlbnRVc2VyKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogbGFuZ3VhZ2VzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCk7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZXMgPSBsYW5ndWFnZXM7XHJcbiAgICAgIHJlc2V0TGFuZ3VhZ2VGaWx0ZXIoKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBjYXRlZ29yaWVzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XHJcbiAgICAgIHJlc2V0Q2F0ZWdvcnlGaWx0ZXIoKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBsYW5ndWFnZVN0YXRzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMoKTtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBsYW5ndWFnZVN0YXRzLnJlZHVjZSgocmVzdWx0LCB7IF9pZCwgY291bnQgfSkgPT4ge1xyXG4gICAgICAgIHJlc3VsdFtfaWQubGFuZ3VhZ2VdID0gKHJlc3VsdFtfaWQubGFuZ3VhZ2VdIHx8IDApICsgY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSwge30pO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3J5U3RhdHMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cygpO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0cyA9IGNhdGVnb3J5U3RhdHMucmVkdWNlKChyZXN1bHQsIHsgX2lkLCBjb3VudCB9KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W19pZF0gPSBjb3VudDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCkge1xyXG4gICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoeyBfaWQ6ICRsb2NhdGlvbi5zZWFyY2goKS5saXN0IH0pO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5zZWFyY2ggPSAkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoIHx8IFwiXCI7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoTGlzdHMgPSBhc3luYyAodmlld1ZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2aWV3VmFsdWUubGVuZ3RoID49IDMpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5zZWFyY2hMaXN0cyh2aWV3VmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRTZWFyY2hUZXh0ID0gKHRleHQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5zZWFyY2gpIHtcclxuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCgkeyRzY29wZS5zZWFyY2h9KWAsIFwiZ2lcIik7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShyZWdleCwgXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz4kMTwvc3Bhbj5cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnZhbHVlT3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInZhbHVlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6ICRsb2NhdGlvbi5zZWFyY2goKS5zb3J0IHx8IFwiZGF0ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246ICRsb2NhdGlvbi5zZWFyY2goKS5vcmRlciA/ICRsb2NhdGlvbi5zZWFyY2goKS5vcmRlciA9PT0gXCJkZXNjXCIgOiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPSAhJHNjb3BlLm9yZGVyLmRpcmVjdGlvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcInNvcnRcIiwgZmllbGQpO1xyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwib3JkZXJcIiwgJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA/IFwiZGVzY1wiIDogXCJhc2NcIik7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TW9yZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxpc3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gJHNjb3BlLmxpc3RzLmNvbmNhdChsaXN0cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgIHBhZ2UgPSAxO1xyXG4gICAgICBleGhhdXN0ZWQgPSBmYWxzZTtcclxuICAgICAgZ2V0TGlzdHMoKS50aGVuKChsaXN0cykgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9IGxpc3RzO1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZUZpbHRlciA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSkge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID0gISRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5RmlsdGVyID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSkge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSAhJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUNhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKTtcclxuICAgICAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9XHJcbiAgICAgICAgY2F0ZWdvcmllcy5sZW5ndGggPT09IGNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSkubGVuZ3RoO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSAkc2NvcGUuY2F0ZWdvcmllcy5yZWR1Y2UoKGZpbHRlciwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICBmaWx0ZXJbY2F0ZWdvcnldID0gIWFsbENhdGVnb3JpZXM7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgICAgfSwge30pO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0TGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubG9hZGluZyB8fCBleGhhdXN0ZWQpIHJldHVybiBbXTtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLnNlYXJjaCAhPT0gJHNjb3BlLnNlYXJjaCkge1xyXG4gICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJzZWFyY2hcIiwgJHNjb3BlLnNlYXJjaCA/ICRzY29wZS5zZWFyY2ggOiBudWxsKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0cyh7XHJcbiAgICAgICAgcGFnZSxcclxuICAgICAgICBzb3J0Qnk6ICRzY29wZS5vcmRlci5maWVsZCxcclxuICAgICAgICBvcmRlckJ5OiAkc2NvcGUub3JkZXIuZGlyZWN0aW9uID8gLTEgOiAxLFxyXG4gICAgICAgIGxpbWl0OiAxMDAsXHJcbiAgICAgICAgc2VhcmNoOiAkc2NvcGUuc2VhcmNoLFxyXG4gICAgICAgIGxhbmd1YWdlczogT2JqZWN0LmtleXMoJHNjb3BlLmxhbmd1YWdlRmlsdGVyKS5maWx0ZXIoKGxhbmd1YWdlKSA9PiAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2VdKSxcclxuICAgICAgICBjYXRlZ29yaWVzOiBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpLmZpbHRlcigoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0pLFxyXG4gICAgICB9KTtcclxuICAgICAgJHNjb3BlLmNvdW50ID0gZGF0YS5jb3VudDtcclxuICAgICAgaWYgKGRhdGEucmVzdWx0Lmxlbmd0aCA8IDEwMCkgZXhoYXVzdGVkID0gdHJ1ZTtcclxuICAgICAgZWxzZSBwYWdlID0gZGF0YS5uZXh0UGFnZTtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5yZXN1bHQuc2xpY2UoMCwgMTApKTtcclxuICAgICAgcmV0dXJuIGRhdGEucmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdE5hbWUgPSAobGlzdElkKSA9PiAkc2NvcGUubGlzdHMuZmluZCgoeyBfaWQgfSkgPT4gX2lkID09PSBsaXN0SWQpPy5uYW1lO1xyXG5cclxuICAgICRzY29wZS51cGRhdGVWYWx1ZSA9IGFzeW5jIChpdGVtKSA9PiB7XHJcbiAgICAgIGlmICghaXRlbS52YWx1ZSkge1xyXG4gICAgICAgICRzY29wZS5kZWxldGVWYWx1ZShpdGVtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkSXRlbVJlc3BvbnNlID0gYXdhaXQgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKTtcclxuICAgICAgICBpdGVtLmJsdXJiVHlwZSA9IHVwZGF0ZWRJdGVtUmVzcG9uc2UuZGF0YS5ibHVyYlR5cGU7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGVWYWx1ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubmV3SXRlbS52YWx1ZSkgcmV0dXJuO1xyXG4gICAgICBpZiAoJHNjb3BlLmhhc0R1cGxpY2F0ZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KGAkeyRzY29wZS5uZXdJdGVtLnZhbHVlfSBpcyBhbHJlYWR5IGluIHRoZSBsaXN0YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoISRzY29wZS5zZWxlY3RlZExpc3QuX2lkKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMucHVzaCh7IC4uLiRzY29wZS5uZXdJdGVtIH0pO1xyXG4gICAgICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5sZW5ndGggPj0gMTApIHtcclxuICAgICAgICAgIGF3YWl0ICRzY29wZS51cHNlcnRMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVkSXRlbVJlc3BvbnNlID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmNyZWF0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCAkc2NvcGUubmV3SXRlbSk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMucHVzaChjcmVhdGVkSXRlbVJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlID0gXCJcIjtcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0uYmx1cmIgPSBcIlwiO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkKFwiI25ldy12YWx1ZVwiKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVWYWx1ZSA9IChpdGVtKSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5kZWxldGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgaXRlbSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyA9ICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLl9pZCAhPT0gaXRlbS5faWQpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwZGF0ZUxpc3QgPSAobGlzdCwgdXBkYXRlcykgPT4ge1xyXG4gICAgICBpZiAobGlzdC5faWQgJiYgbGlzdC5faWQgIT09IFwibmV3XCIpIHtcclxuICAgICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAuLi51cGRhdGVzLFxyXG4gICAgICAgICAgX2lkOiBsaXN0Ll9pZCxcclxuICAgICAgICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgY29uc3QgbGlzdEluZGV4ID0gJHNjb3BlLmxpc3RzLmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5faWQgPT09IGRhdGEuX2lkKTtcclxuICAgICAgICAgICRzY29wZS5saXN0c1tsaXN0SW5kZXhdID0gZGF0YTtcclxuICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudXBzZXJ0TGlzdCA9IChsaXN0LCB1cGRhdGVzKSA9PiB7XHJcbiAgICAgICRzY29wZS5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAobGlzdC52YWx1ZXMubGVuZ3RoID49IDEwICYmIGxpc3QubmFtZSAmJiBsaXN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmIChsaXN0Ll9pZCAmJiBsaXN0Ll9pZCAhPT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgbGV0IGNoYW5nZXMgPSB1cGRhdGVzID8gdXBkYXRlcyA6IGxpc3Q7XHJcbiAgICAgICAgICBkZWxldGUgY2hhbmdlcy5faWQ7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAgIC4uLmNoYW5nZXMsXHJcbiAgICAgICAgICAgIF9pZDogbGlzdC5faWQsXHJcbiAgICAgICAgICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJbmRleCA9ICRzY29wZS5saXN0cy5maW5kSW5kZXgoKGxpc3QpID0+IGxpc3QuX2lkID09PSBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgICRzY29wZS5saXN0c1tsaXN0SW5kZXhdID0gZGF0YTtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmNyZWF0ZUxpc3QoJHNjb3BlLmN1cnJlbnRVc2VyLCAkc2NvcGUuc2VsZWN0ZWRMaXN0KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QgPT09IFwibmV3XCIpIHtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQgPSBkYXRhLl9pZDtcclxuICAgICAgICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKCRzY29wZS5zZWxlY3RlZExpc3QsIHVwZGF0ZXMpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCFsaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhsaXN0Ll9pZCkpIHtcclxuICAgICAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW2xpc3QuX2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0cyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHM7XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY29uZmlybU1lcmdlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgVGVuVGhpbmdzU3ZjLm1lcmdlTGlzdHMoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyk7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJChcIiNtb2RhbC1tZXJnZS1saXN0c1wiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jb25maXJtRGVsZXRlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgbGlzdElkIG9mICRzY29wZS5saXN0SWRzVG9EZWxldGUpIHtcclxuICAgICAgICBhd2FpdCBUZW5UaGluZ3NTdmMuZGVsZXRlTGlzdChsaXN0SWQpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMobGlzdC5faWQpKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuZmlsdGVyKFxyXG4gICAgICAgICAgKGhpZ2hsaWdodGVkTGlzdElkKSA9PiBoaWdobGlnaHRlZExpc3RJZCAhPT0gbGlzdC5faWQsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLnB1c2gobGlzdC5faWQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZSA9IChsaXN0LCBsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBsaXN0Lmxhbmd1YWdlID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICBjb25zdCBub25FbmdsaXNoSW5kZXggPSBsaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICBpZiAobGFuZ3VhZ2UuY29kZSAhPT0gXCJFTlwiICYmIG5vbkVuZ2xpc2hJbmRleCA8IDApIHtcclxuICAgICAgICBsaXN0LmNhdGVnb3JpZXMucHVzaChcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGxhbmd1YWdlLmNvZGUgPT09IFwiRU5cIiAmJiBub25FbmdsaXNoSW5kZXggPj0gMCkge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5zcGxpY2Uobm9uRW5nbGlzaEluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7XHJcbiAgICAgICAgY2F0ZWdvcmllczogbGlzdC5jYXRlZ29yaWVzLFxyXG4gICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZS5jb2RlLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldERpZmZpY3VsdHkgPSAobGlzdCwgZGlmZmljdWx0eSkgPT4ge1xyXG4gICAgICBsaXN0LmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7XHJcbiAgICAgICAgZGlmZmljdWx0eTogZGlmZmljdWx0eSxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRGcmVxdWVuY3kgPSAobGlzdCwgZnJlcXVlbmN5KSA9PiB7XHJcbiAgICAgIGxpc3QuZnJlcXVlbmN5ID0gZnJlcXVlbmN5O1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7XHJcbiAgICAgICAgZnJlcXVlbmN5OiBmcmVxdWVuY3ksXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnkgPSAobGlzdCwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcnlJbmRleCA9IGxpc3QuY2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KTtcclxuICAgICAgaWYgKGNhdGVnb3J5SW5kZXggPj0gMCkge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5zcGxpY2UoY2F0ZWdvcnlJbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdC5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHtcclxuICAgICAgICBjYXRlZ29yaWVzOiBsaXN0LmNhdGVnb3JpZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaGFzRHVwbGljYXRlID0gKCkgPT5cclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCAmJlxyXG4gICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSAmJlxyXG4gICAgICBfLnNvbWUoXHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMsXHJcbiAgICAgICAgKGFuc3dlcikgPT4gYW5zd2VyLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSA9PSAkc2NvcGUubmV3SXRlbS52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCksXHJcbiAgICAgICk7XHJcblxyXG4gICAgJHNjb3BlLmdldEJsdXJicyA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldEJsdXJicygkc2NvcGUuc2VsZWN0ZWRMaXN0LCB0eXBlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCk7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRFbWJlZFVybCA9ICh1cmwpID0+IHtcclxuICAgICAgaWYgKHVybC5pbmNsdWRlcyhcInlvdXR1YmUuY29tXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvWz8mXXY9KFteJl0rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJ5b3V0dS5iZVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL3lvdXR1XFwuYmVcXC8oW14mP10rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJ2aW1lby5jb21cIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC92aW1lb1xcLmNvbVxcLyhcXGQrKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsLmluY2x1ZGVzKFwib3Blbi5zcG90aWZ5XCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvdHJhY2tcXC8oW14mP10rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9lbWJlZC90cmFjay8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKHVybCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuIGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9P2F1dG9wbGF5PTFgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgZ2V0RGF0YSk7XHJcbiAgfSk7XHJcbiIsIi8qanNsaW50IGVzdmVyc2lvbjogNiovXHJcbmFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NBZG1pbkN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgVGVuVGhpbmdzU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8pID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5hZG1pbikge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcclxuICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLnJldmVyc2UgPSAhJHNjb3BlLm9yZGVyLnJldmVyc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0UXVldWUgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldFF1ZXVlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucXVldWUgPSByZXNwb25zZS5kYXRhLnJlcGxhY2UoXCIvblwiLCBcIjxici8+XCIpO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgICRzY29wZS5nZXRRdWV1ZSgpO1xyXG5cclxuICAgIFRlblRoaW5nc1N2Yy5nZXRQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICRzY29wZS5wYXVzZWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy5nZXRVc2VycygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKHVzZXIpID0+ICF1c2VyLmFkbWluKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUJhbiA9ICh1c2VyKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy50b2dnbGVCYW4odXNlci5faWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVQYXVzZSA9ICh1c2VyKSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy50b2dnbGVQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLnBhdXNlZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0dhbWVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZVBhcmFtcywgVGVuVGhpbmdzU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgICBjb25zdCBnZXRVc2VycyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLmdldFVzZXJzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUudXNlcnMgPSByZXNwb25zZS5kYXRhLmZpbHRlcigodXNlcikgPT4gIXVzZXIuYWRtaW4pO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLmdhbWUpIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5nZXRHYW1lKCRzdGF0ZVBhcmFtcy5nYW1lKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ2FtZSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5nYW1lKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NTdGF0c0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IFtdO1xyXG4gICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSB7IGxhYmVsczogW10sIGRhdGFzZXRzOiBbXSB9O1xyXG5cclxuICAgIGNvbnN0IGxpbmVDaGFydE9wdGlvbnMgPSB7XHJcbiAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgdGV4dDogXCJDaGFydC5qcyBMaW5lIENoYXJ0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY3VycmVudFVzZXIpIHJldHVybjtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBbXTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExhbmd1YWdlcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldFBsYXlTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeWVhcnMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgeWVhciB9KSA9PiB5ZWFyKSkuc29ydCgpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRocyA9IF8udGltZXMoMTIsIChpKSA9PiBpICsgMSk7XHJcbiAgICAgICAgJHNjb3BlLnBsYXlTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogbW9udGhzLFxyXG4gICAgICAgICAgc2VyaWVzOiB5ZWFycyxcclxuICAgICAgICAgIGRhdGE6IHllYXJzLm1hcCgoeWVhcikgPT5cclxuICAgICAgICAgICAgbW9udGhzLm1hcCgobW9udGgpID0+IGRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5tb250aCA9PT0gbW9udGggJiYgaXRlbS55ZWFyID09PSB5ZWFyKT8udW5pcXVlUGxheWVycyB8fCAwKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBvcHRpb25zOiBsaW5lQ2hhcnRPcHRpb25zLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQueWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBsYW5ndWFnZXMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSkpLnNvcnQoKTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogeWVhcnMsXHJcbiAgICAgICAgICBzZXJpZXM6IGxhbmd1YWdlcyxcclxuICAgICAgICAgIGRhdGE6IGxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlKSA9PlxyXG4gICAgICAgICAgICB5ZWFycy5tYXAoKHllYXIpID0+IGRhdGEuZmluZCgoeyBfaWQgfSkgPT4gX2lkLmxhbmd1YWdlID09PSBsYW5ndWFnZSAmJiBfaWQueWVhciA9PT0geWVhcik/LmNvdW50IHx8IDApLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIG9wdGlvbnM6IGxpbmVDaGFydE9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRHYW1lU3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQueWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBsYW5ndWFnZXMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSkpLnNvcnQoKTtcclxuICAgICAgICAkc2NvcGUuZ2FtZVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiB5ZWFycyxcclxuICAgICAgICAgIHNlcmllczogbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgZGF0YTogbGFuZ3VhZ2VzLm1hcCgobGFuZ3VhZ2UpID0+XHJcbiAgICAgICAgICAgIHllYXJzLm1hcCgoeWVhcikgPT4gZGF0YS5maW5kKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UgPT09IGxhbmd1YWdlICYmIF9pZC55ZWFyID09PSB5ZWFyKT8uY291bnQgfHwgMCksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgb3B0aW9uczogbGluZUNoYXJ0T3B0aW9ucyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IF8uc29ydEJ5KGRhdGEsICh7IGNvdW50IH0pID0+IC1jb3VudCk7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IHNvcnRlZERhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQpLFxyXG4gICAgICAgICAgZGF0YTogW3NvcnRlZERhdGEubWFwKCh7IGNvdW50IH0pID0+IGNvdW50KV0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCAoKSA9PiB7XHJcbiAgICAgIGdldERhdGEoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1dvcmtvdXRDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgJHNjb3BlLnRpbWVFeGVyY2lzaW5nID0gMzA7XHJcbiAgJHNjb3BlLnRpbWVSZXN0aW5nID0gMTA7XHJcbiAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuXHJcbiAgdmFyIHNvdW5kcyA9IHtcclxuICAgIG9uOiBuZXcgQXVkaW8oJ29uLndhdicpLFxyXG4gICAgb2ZmOiBuZXcgQXVkaW8oJ29mZi53YXYnKSxcclxuICAgIHN3aXRjaDogbmV3IEF1ZGlvKCdzd2l0Y2gud2F2JyksXHJcbiAgfTtcclxuXHJcblxyXG4gIHZhciBleGVyY2lzZXMgPSBbXHJcbiAgICB7bmFtZTogJ0p1bXBpbmcgSmFja3MnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdXYWxsIFNpdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1B1c2gtVXAnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdDcnVuY2gnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTdGVwLVVwJywgc3BsaXQ6IHRydWV9LFxyXG4gICAge25hbWU6ICdTcXVhdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1RyaWNlcHMgRGlwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUGxhbmsnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdIaWdoIEtuZWVzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnTHVuZ2UnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwIHdpdGggUm90YXRpb24nLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTaWRlIFBsYW5rJywgc3BsaXQ6IHRydWV9XHJcbiAgXTtcclxuXHJcbiAgdmFyIGV4ZXJjaXNpbmc7XHJcblxyXG4gICRzY29wZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChleGVyY2lzZXMubGVuZ3RoIC0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvICgkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3RpbmcpKSkgKyAnLycgKyBleGVyY2lzZXMubGVuZ3RoO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS53b3Jrb3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZXhjZXJjaXNlVGltZSA9ICRzY29wZS50aW1lRXhlcmNpc2luZyArICRzY29wZS50aW1lUmVzdGluZztcclxuICAgIGlmICghJHNjb3BlLnRpbWVSZW1haW5pbmcpIHtcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSBleGVyY2lzZXMubGVuZ3RoICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgZXhlcmNpc2luZyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS50aW1lUmVtYWluaW5nLS07XHJcbiAgICAgICAgaWYgKCRzY29wZS50aW1lUmVtYWluaW5nID09PSAwKSB7XHJcbiAgICAgICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJ0ZpbmlzaGVkISBDb25ncmF0cyEnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdXJyZW50RXhlcmNpc2UgPSBNYXRoLmZsb29yKCRzY29wZS50aW1lUmVtYWluaW5nIC8gZXhjZXJjaXNlVGltZSk7XHJcbiAgICAgICAgdmFyIHRpbWVyID0gJHNjb3BlLnRpbWVSZW1haW5pbmcgLSBjdXJyZW50RXhlcmNpc2UgKiBleGNlcmNpc2VUaW1lO1xyXG4gICAgICAgICRzY29wZS50aW1lciA9IHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nID8gdGltZXIgLSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgOiB0aW1lcjtcclxuICAgICAgICBpZiAodGltZXIgPiAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0gZXhlcmNpc2VzW2V4ZXJjaXNlcy5sZW5ndGggLSBjdXJyZW50RXhlcmNpc2UgLSAxXTtcclxuICAgICAgICBpZiAodGltZXIgPT09ICRzY29wZS50aW1lRXhlcmNpc2luZykge1xyXG4gICAgICAgICAgc291bmRzLm9uLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRpbWVyID09PSAwKSB7XHJcbiAgICAgICAgICBzb3VuZHMub2ZmLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRzY29wZS5leGVyY2lzZS5zcGxpdCAmJiB0aW1lciA9PT0gTWF0aC5mbG9vcigkc2NvcGUudGltZUV4ZXJjaXNpbmcgLyAyKSkge1xyXG4gICAgICAgICAgc291bmRzLnN3aXRjaC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAkc2NvcGUudGltZXIgPSAnJztcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJycsIHNwbGl0OiBmYWxzZX07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0NhdGVnb3JpZXNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VGFza3MgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nLCBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZFRhc2sgPSBmdW5jdGlvbiAoY2F0ZWdvcnksIHRhc2spIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5ICsgJy90YXNrcycsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICBzdmMuY2hvaWNlcyA9IGxpc3Q7XHJcbiAgICBzdmMucHJpb3JpdHlMaXN0ID0gW107XHJcbiAgICAvL01ha2UgYSBuZXcgY2hvaWNlIGxpc3RcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKHZhciBqID0gaSArIDE7IGogPCBsaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgc3ZjLnByaW9yaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgZmlyc3RDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaSA6IGpdLm5hbWUsXHJcbiAgICAgICAgICBzZWNvbmRDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaiA6IGldLm5hbWUsXHJcbiAgICAgICAgICBjaG9pY2U6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNodWZmbGUoc3ZjLnByaW9yaXR5TGlzdCk7XHJcbiAgICBmb3IgKGkgaW4gc3ZjLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBzdmMucHJpb3JpdHlMaXN0W2ldLmlkID0gaSArIDE7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHJldHVybiBzdmMucHJpb3JpdHlMaXN0O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcclxuICAgIHZhciBtID0gYXJyYXkubGVuZ3RoLCB0LCBpO1xyXG4gICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGXigKZcclxuICAgIHdoaWxlIChtKSB7XHJcbiAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudOKAplxyXG4gICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbS0tKTtcclxuICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAvL2FycmF5W21dLmZpcnN0Q2hvaWNlO1xyXG4gICAgICB0ID0gYXJyYXlbbV07XHJcbiAgICAgIGFycmF5W21dID0gYXJyYXlbaV07XHJcbiAgICAgIGFycmF5W2ldID0gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdFbWFpbFN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuc2VuZCA9IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZW1haWwnLCBlbWFpbCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuc2VydmljZSgnRmlsZVN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gICAgc3ZjLmdldEltYWdlcyA9IGZ1bmN0aW9uKGZvbGRlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2ZpbGVzL2ltYWdlcy8nICsgZm9sZGVyKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLmdldFNvdW5kcyA9IGZ1bmN0aW9uKGZvbGRlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2ZpbGVzL3NvdW5kcy8nICsgZm9sZGVyKTtcclxuICAgIH07XHJcblxyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnR2FtZVN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gICAgc3ZjLmdldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZ2FtZXMvJyArIGdhbWUgKyAnLycgKyB1c2VyICsgJy9oaWdoc2NvcmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLnNldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyLCBzY29yZSkge1xyXG4gICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9nYW1lcy8nICsgZ2FtZSArICcvJyArIHVzZXIgKyAnL2hpZ2hzY29yZScsIHtcclxuICAgICAgICBzY29yZTogc2NvcmVcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnTGFuZ3VhZ2VTdmMnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5sYW5ndWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkVOXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkVuZ2xpc2hcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWdiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIk5MXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIk5lZGVybGFuZHNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLW5sXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkZSXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkZyYW7Dp2Fpc1wiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tZnJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy50ZXh0ID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgc3ZjLnNlbGVjdGVkTGFuZ3VhZ2UgPSBzdmMubGFuZ3VhZ2VzWzBdO1xyXG5cclxuICBzdmMuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcclxuICAgIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICByZXR1cm4gbGFuZ3VhZ2U7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHN2Yy5zZWxlY3RlZExhbmd1YWdlO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZmV0Y2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJyk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQb3N0ID0gZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMvJyArIHBvc3QuX2lkKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJUZW5UaGluZ3NTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9ib3RzL3RlbnRoaW5ncy9xdWV1ZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0cyA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgIHZhciB1cmwgPVxyXG4gICAgICBgL2FwaS90ZW50aGluZ3MvbGlzdHM/YCArXHJcbiAgICAgIChvcHRpb25zLmxpbWl0ID8gYCZsaW1pdD0ke29wdGlvbnMubGltaXR9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMucGFnZSA/IGAmcGFnZT0ke29wdGlvbnMucGFnZX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zb3J0QnkgPyBgJnNvcnRfYnk9JHtvcHRpb25zLnNvcnRCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5vcmRlckJ5ID8gYCZvcmRlcl9ieT0ke29wdGlvbnMub3JkZXJCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5sYW5ndWFnZXMgJiYgb3B0aW9ucy5sYW5ndWFnZXMubGVuZ3RoID4gMCA/IGAmbGFuZ3VhZ2U9JHtvcHRpb25zLmxhbmd1YWdlcy5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5jYXRlZ29yaWVzICYmIG9wdGlvbnMuY2F0ZWdvcmllcy5sZW5ndGggPiAwID8gYCZjYXRlZ29yaWVzPSR7b3B0aW9ucy5jYXRlZ29yaWVzLmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnNlYXJjaCA/IGAmc2VhcmNoPSR7b3B0aW9ucy5zZWFyY2h9YCA6IFwiXCIpO1xyXG4gICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZWFyY2hMaXN0cyA9IChuYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9zZWFyY2gvbGlzdC1uYW1lcy8ke25hbWV9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9jYXRlZ29yaWVzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2xhbmd1YWdlc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucHV0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCwgbGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZUxpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0c1wiLCB7XHJcbiAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIGxpc3Q6IGxpc3QsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMubWVyZ2VMaXN0cyA9IGZ1bmN0aW9uIChsaXN0cykge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9tZXJnZVwiLCB7IGxpc3RzOiBsaXN0cyB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuZGVsZXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0SWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3RJZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnB1dChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXMvXCIgKyB2YWx1ZS5faWQsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXNcIiwgdmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5kZWxldGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzL1wiICsgdmFsdWUuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMucmVwb3J0TGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvcmVwb3J0L1wiICsgdXNlci5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9jYXRlZ29yaWVzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0TGFuZ3VhZ2VTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9sYW5ndWFnZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBsYXlTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9wbGF5XCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRHYW1lU3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvZ2FtZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEJsdXJicyA9IGZ1bmN0aW9uIChsaXN0LCB0eXBlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvbGlzdHMvJHtsaXN0Ll9pZH0vYmx1cmJzLyR7dHlwZX1gKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRHYW1lID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9nYW1lcy8ke2lkfWApO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiVXNlclN2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vyc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VXNlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9hbGxcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnRvZ2dsZUJhbiA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdXNlcnMvYmFuLyR7aWR9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNldFRva2VuID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IHRva2VuO1xyXG4gICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmF1dGhlbnRpY2F0ZSA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzL2F1dGhlbnRpY2F0ZVwiLCB7XHJcbiAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS50b2tlbiA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmxvZ2luID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL2xvZ2luXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICByZXR1cm4gc3ZjLnNldFRva2VuKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIuX2lkLCB7XHJcbiAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uICh1c2VyLCBwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL3ZlcmlmaWNhdGlvblwiLCB7XHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uICh1c2VyLCBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9wYXNzd29yZFwiLCB7XHJcbiAgICAgIG9sZFBhc3N3b3JkOiBvbGRQYXNzd29yZCxcclxuICAgICAgbmV3UGFzc3dvcmQ6IG5ld1Bhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXIsIG5ld1VzZXJuYW1lKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL3VzZXJuYW1lXCIsIHtcclxuICAgICAgICBuZXdVc2VybmFtZTogbmV3VXNlcm5hbWUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiWC1BdXRoXCJdID0gXCJcIjtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlVXNlciA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnNcIiwge1xyXG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuY29udHJvbGxlcignUXVpekFuaW1hbHNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBGaWxlU3ZjKSB7XHJcblxyXG4gICAgRmlsZVN2Yy5nZXRTb3VuZHMoJ2FuaW1hbHMnKVxyXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5hbmltYWxzID0gXy5zaHVmZmxlKHJlc3BvbnNlLmRhdGEubWFwKGFuaW1hbCA9PiAoe1xyXG4gICAgICAgICAgc291bmQ6IGFuaW1hbCxcclxuICAgICAgICAgIG5hbWU6IGFuaW1hbC5zdWJzdHJpbmcoMCwgYW5pbWFsLmluZGV4T2YoJy4nKSkucmVwbGFjZSgnXycsICcgJykuY2FwaXRhbGl6ZSgpXHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICBmb3IgKGxldCBhbmltYWwgb2YgJHNjb3BlLmFuaW1hbHMpIHtcclxuICAgICAgICAgIGFuaW1hbC5hbnN3ZXJzID0gXy5zaHVmZmxlKFthbmltYWwubmFtZSwgLi4uZ2V0UmFuZG9tQW5pbWFscyhhbmltYWwubmFtZSldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmFuaW1hbHMpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuZ3Vlc3MgPSAoYW5pbWFsLCBndWVzcykgPT4ge1xyXG4gICAgICBhbmltYWwuZ3Vlc3MgPSBndWVzcztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0UmFuZG9tQW5pbWFscyA9IG5hbWUgPT4gXy5zaHVmZmxlKCRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gbmFtZSAhPT0gYW5pbWFsLm5hbWUpLm1hcChhbmltYWwgPT4gYW5pbWFsLm5hbWUpKS5zbGljZSgwLCA1KTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0U2NvcmUgPSAoKSA9PiBgJHskc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IGFuaW1hbC5uYW1lID09PSBhbmltYWwuZ3Vlc3MpLmxlbmd0aH0vJHskc2NvcGUuYW5pbWFscy5sZW5ndGh9YDtcclxuXHJcbiAgICAkc2NvcGUuaXNTY29yZVZpc2libGUgPSAoKSA9PiAkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IGFuaW1hbC5ndWVzcykubGVuZ3RoID09PSAkc2NvcGUuYW5pbWFscy5sZW5ndGg7XHJcbiAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6R29vZ2xlQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnZ29vZ2xlJylcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1F1aXpMb2dvc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ2xvZ29zJylcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1F1aXpNb3ZpZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdtb3ZpZXMnKVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5jb250cm9sbGVyKCdRdWl6U2tlbGV0b25zQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgRmlsZVN2Yykge1xyXG5cclxuICAgIEZpbGVTdmMuZ2V0SW1hZ2VzKCdza2VsZXRvbnMnKVxyXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5hbmltYWxzID0gXy5zaHVmZmxlKHJlc3BvbnNlLmRhdGEubWFwKGFuaW1hbCA9PiAoe1xyXG4gICAgICAgICAgaW1hZ2U6IGFuaW1hbCxcclxuICAgICAgICAgIG5hbWU6IGFuaW1hbC5zdWJzdHJpbmcoMCwgYW5pbWFsLmluZGV4T2YoJy4nKSkucmVwbGFjZSgnXycsICcgJykuY2FwaXRhbGl6ZSgpXHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICBmb3IgKGxldCBhbmltYWwgb2YgJHNjb3BlLmFuaW1hbHMpIHtcclxuICAgICAgICAgIGFuaW1hbC5hbnN3ZXJzID0gXy5zaHVmZmxlKFthbmltYWwubmFtZSwgLi4uZ2V0UmFuZG9tQW5pbWFscyhhbmltYWwubmFtZSldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmFuaW1hbHMpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuZ3Vlc3MgPSAoYW5pbWFsLCBndWVzcykgPT4ge1xyXG4gICAgICBhbmltYWwuZ3Vlc3MgPSBndWVzcztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0UmFuZG9tQW5pbWFscyA9IG5hbWUgPT4gXy5zaHVmZmxlKCRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gbmFtZSAhPT0gYW5pbWFsLm5hbWUpLm1hcChhbmltYWwgPT4gYW5pbWFsLm5hbWUpKS5zbGljZSgwLCAxMCk7XHJcblxyXG4gICAgJHNjb3BlLmdldFNjb3JlID0gKCkgPT4gYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwubmFtZSA9PT0gYW5pbWFsLmd1ZXNzKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWA7XHJcblxyXG4gICAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwuZ3Vlc3MpLmxlbmd0aCA9PT0gJHNjb3BlLmFuaW1hbHMubGVuZ3RoO1xyXG4gIH0pOyJdfQ==
