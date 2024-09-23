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
    }));
  }), $stateParams.game && TenThingsSvc.getGame($stateParams.game).then(response => {
    $scope.game = response.data, console.log($scope.game);
  });
}), angular.module("app").controller("TenThingsStatsCtrl", function ($scope, TenThingsSvc) {
  $scope.languageStats = [], $scope.categoryStats = {
    labels: [],
    datasets: []
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
        options: {
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
        }
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
        labels: languages,
        series: years,
        data: years.map(year => languages.map(language => data.find(({
          _id
        }) => _id.language === language && _id.year === year)?.count || 0))
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
  }, svc.getBlurbs = function (list, type) {
    return $http.post(`/api/tenthings/lists/${list._id}/blurbs/${type}`);
  }, svc.getPause = function () {
    return $http.get("/api/tenthings/pause");
  }, svc.togglePause = function () {
    return $http.post("/api/tenthings/pause");
  }, svc.getGame = function (id) {
    return $http.get(`/api/tenthings/game/${id}`);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJjb250cm9sbGVycy9hcHAuY3RybC5qcyIsImNvbnRyb2xsZXJzL2FzdGVyb2lkcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvYnViYmxlcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvY2hhcmFkZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3QuY3RybC5qcyIsImNvbnRyb2xsZXJzL2V4cGVyaWVuY2UuY3RybC5qcyIsImNvbnRyb2xsZXJzL2hvYmJpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xlbW1pbmdzLmN0cmwuanMiLCJjb250cm9sbGVycy9saXN0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbG9naW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3Bvc3RzLmN0cmwuanMiLCJjb250cm9sbGVycy9wcm9maWxlLmN0cmwuanMiLCJjb250cm9sbGVycy9za2lsbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvdGVudGhpbmdzYWRtaW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2dhbWUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc3N0YXRzLmN0cmwuanMiLCJjb250cm9sbGVycy93b3Jrb3V0LmN0cmwuanMiLCJzZXJ2aWNlcy9jYXRlZ29yaWVzLnN2Yy5qcyIsInNlcnZpY2VzL2VtYWlsLnN2Yy5qcyIsInNlcnZpY2VzL2ZpbGUuc3ZjLmpzIiwic2VydmljZXMvZ2FtZS5zdmMuanMiLCJzZXJ2aWNlcy9sYW5ndWFnZS5zdmMuanMiLCJzZXJ2aWNlcy9wb3N0cy5zdmMuanMiLCJzZXJ2aWNlcy90ZW50aGluZ3Muc3ZjLmpzIiwic2VydmljZXMvdXNlci5zdmMuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2FuaW1hbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvZ29vZ2xlLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2xvZ29zLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL21vdmllcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9za2VsZXRvbnMuY3RybC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRvbWFpbnMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0cmluZyIsInByb3RvdHlwZSIsInZhbHVlIiwicmVkdWNlIiwicmVzdWx0IiwibGV0dGVyIiwicmVwbGFjZSIsInRoaXMiLCJTUEVDSUFMX0NIQVJBQ1RFUlMiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZURpYWNyaXRpY3MiLCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyIsImV4dHJhIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInJlcGxhY2VBbGwiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsImRpcmVjdGl2ZSIsIiRkb2N1bWVudCIsInJlc3RyaWN0Iiwic2NvcGUiLCJjbGlja091dHNpZGUiLCJsaW5rIiwiZWwiLCJhdHRyIiwib24iLCJ0YXJnZXQiLCJjb250YWlucyIsIiRhcHBseSIsIiRldmFsIiwiJHN0YXRlIiwiJGNvbXBpbGUiLCIkaW50ZXJwb2xhdGUiLCJnZXRTdHlsZSIsInRlbXBsYXRlU3R5bGVVcmwiLCJzdHlsZSIsImhyZWYiLCJyZWwiLCJtYXRjaCIsImVsZW0iLCJ0ZW1wbGF0ZVN0eWxlcyIsImh0bWwiLCJzdGFydFN5bWJvbCIsImVuZFN5bWJvbCIsImFwcGVuZCIsIiRvbiIsImV2ZW50IiwidG9TdGF0ZSIsInRvUGFyYW1zIiwiZnJvbVN0YXRlIiwiZnJvbVBhcmFtcyIsInN0YXRlcyIsIm5hbWUiLCJwYXJlbnQiLCJnZXQiLCJ2aWV3cyIsIl8iLCJ2aWV3Iiwic3BsaXQiLCJmbGF0IiwiaW5jbHVkZXMiLCJyZXZlcnNlIiwiZ2V0U3R5bGVzIiwiJHNjb3BlIiwiTGFuZ3VhZ2VTdmMiLCJVc2VyU3ZjIiwiJCIsImxvYWQiLCJmYWRlT3V0IiwiZmFkZUluIiwiY2xvc2VzdCIsInRvZ2dsZUNsYXNzIiwiY2hlY2tlZCIsImRvY3VtZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidGhlbWVDb3VudGVyIiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiZmxpcFRoZW1lIiwic2hvdyIsImhpZGUiLCJzZXRUaW1lb3V0IiwiZ2V0SlNPTiIsInNraWxscyIsImZpbHRlciIsInNraWxsIiwiaG9iYmllcyIsImpvYnMiLCJqb2IiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiY2hhcmFkZXMiLCJnZXRUaW1lU3BhbiIsImxhbmd1YWdlcyIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInNlbGVjdExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImhvdmVyZGl2IiwiZGl2aWQiLCJsZWZ0IiwiY2xpZW50WCIsInRvcCIsImNsaWVudFkiLCJnZXRFbGVtZW50QnlJZCIsImNzcyIsInRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsInVzZXIiLCJsb2dpbiIsInRoZW4iLCJyZXNwb25zZSIsImxvZ2dlZEluIiwiX2lkIiwiY3VycmVudFVzZXIiLCJiaXJ0aERhdGUiLCJsb2FkaW5nIiwibG9nb3V0IiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsImNsZWFyIiwiY2F0Y2giLCJlcnJvciIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiJGxvY2F0aW9uIiwiR2FtZVN2YyIsImFubm91bmNlIiwiY2FudmFzIiwicGF0aCIsImFsZXJ0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZvbnQiLCJmaWxsU3R5bGUiLCJ0ZXh0QWxpZ24iLCJzaG90cyIsImFzdGVyb2lkcyIsInBvd2VydXBzIiwiZXhwbG9zaW9ucyIsIm1hcCIsInNwYWNlcGljcyIsInNwYWNlIiwicG93ZXJ1cFR5cGVzIiwiYW5ub3VuY2VtZW50IiwiY3ljbGUiLCJyb3dzIiwiY29sdW1ucyIsInNpemUiLCJpbWciLCJJbWFnZSIsImFjdGl2YXRlIiwic3BhY2VzaGlwIiwibWF4U3BlZWQiLCJjb29sZG93biIsImNvb2xkb3duVGltZSIsInJhbmdlIiwic2hpZWxkIiwiZXhwbG9kZSIsInNwYXduQXN0ZXJvaWRzIiwicG93ZXJ1cCIsImFycmF5Iiwic3JjIiwiZXhwbG9zaW9uSW1hZ2UiLCJldmFsdWF0ZUtleXMiLCJwbGF5aW5nIiwic2hvb3QiLCJyb3RhdGlvbiIsInNwZWVkIiwic2NvcmUiLCJTcGFjZXNoaXAiLCJhdXRvU3Bhd24iLCJ3aWR0aCIsImhlaWdodCIsImNhbm5vbiIsIngiLCJ5IiwicG9zaXRpb24iLCJhbmdsZSIsImlkIiwicm91bmQiLCJTaG90IiwibW92ZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJmaWxsIiwiYXN0ZXJvaWQiLCJoaXQiLCJnYW1lT3ZlciIsImNvcyIsInNpbiIsImxpZmVzcGFuIiwiQXN0ZXJvaWQiLCJnZXRFbnRyeVBvc2l0aW9uIiwicm90YXRpb25TcGVlZCIsIkV4cGxvc2lvbiIsInNob3QiLCJwb2ludHMiLCJzcGF3blBvd2VydXAiLCJvYmplY3QiLCJQb3dlcnVwIiwiZGVsYXkiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiY29sdW1uIiwicm93IiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImdyaWRYIiwiZ3JpZFkiLCJvYmplY3QxIiwib2JqZWN0MiIsImtleXMiLCJhbW91bnQiLCJoaWdoc2NvcmUiLCJzZXRIaWdoc2NvcmUiLCJyZXNpemVDYW52YXMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5Q29kZSIsIndoaWNoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsImNsZWFyUmVjdCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJ0YWxseSIsImZpbGxUZXh0IiwibWVhc3VyZVRleHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJidWJibGVzIiwiY29sb3JzIiwiQnViYmxlIiwicmFkaXVzIiwiZXhwYW5kaW5nIiwiY2lyY3VtZmVyZW5jZSIsIm1heFJhZGl1cyIsInZ4IiwidnkiLCJmaWx0ZXJCdWJibGVzIiwiYnViYmxlIiwic2VsZWN0V29yZCIsImNhdGVnb3J5Iiwid29yZCIsIkVtYWlsU3ZjIiwib3B0aW9ucyIsInRleHQiLCJjb250YWN0IiwiZW1haWwiLCJwaG9uZSIsImFib3V0IiwibWVzc2FnZSIsInNlbmRpbmciLCJzZW50Iiwic3RhdHVzIiwiZXJyIiwiZ2V0U2tpbGwiLCJza2lsbENvZGUiLCJjb2RlIiwiJHdpbmRvdyIsImhvYmJ5U2VsZWN0b3JWaXNpYmxlIiwic2VsZWN0ZWRIb2JieSIsInNlbGVjdEhvYmJ5IiwiaG9iYnkiLCJzaG93SG9iYnkiLCJpbmRleCIsImltYWdlcyIsIkxFRlQiLCJSSUdIVCIsImxlbW1pbmdzSW1hZ2UiLCJkZWNvckltYWdlIiwibGVtbWluZ3MiLCJzdGFydGVkIiwiYWN0aW9ucyIsIndhbGsiLCJzdGFydCIsImVuZCIsImh1aCIsImZhbGwiLCJmbHkiLCJzdG9wIiwiY2xpbWIiLCJidWlsZCIsInB1bmNoIiwiZGlnIiwiTGVtbWluZyIsImluaXQiLCJhY3QiLCJhY3Rpb24iLCJhbmltYXRpb24iLCJzY2FsZSIsImhhdGNoIiwib3BlbiIsInJlY3QiLCJDYXRlZ29yaWVzU3ZjIiwic2hvd0NhdGVnb3J5IiwiZ2V0Q2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJ0YXNrcyIsImoiLCJ0YXNrIiwic2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2VsZWN0ZWRUYXNrcyIsInNlbGVjdGFibGVUYXNrcyIsImVudGVyZWRDYXRlZ29yeSIsIm5ld0NhdGVnb3J5IiwiZm91bmQiLCJhZGRDYXRlZ29yeSIsIm5ld1Rhc2siLCJzZWxlY3RUYXNrIiwiYWRkVGFzayIsImVudGVyZWRUYXNrIiwicmVtb3ZlVGFzayIsInVuc2VsZWN0VGFzayIsInRhc2tMaXN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInN0YXJ0UHJpb3JpdGl6aW5nIiwic2V0UHJpb3JpdHlMaXN0IiwiZ2V0UXVlc3Rpb25zIiwiY291bnRlciIsInVpIiwiZmlyZWJhc2V1aSIsIkF1dGhVSSIsInN0YXJ0VUkiLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzIiwiY3JlZGVudGlhbCIsInJlZGlyZWN0VXJsIiwiZ2V0SWRUb2tlbiIsImlkVG9rZW4iLCJhdXRoZW50aWNhdGUiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWxWZXJpZmllZCIsIiRlbWl0IiwibW9kYWwiLCJ0eXBlIiwic2lnbkluRmFpbHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY3JlZCIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwidWlTaG93biIsImRpc3BsYXkiLCJzaWduSW5TdWNjZXNzVXJsIiwic2lnbkluT3B0aW9ucyIsIkdvb2dsZUF1dGhQcm92aWRlciIsIlBST1ZJREVSX0lEIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJzaWduSW5GbG93IiwicmVzZXQiLCIkZmlsdGVyIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJjcmVhdGUiLCJib2R5IiwicG9zdCIsImZldGNoIiwicG9zdHMiLCJnZXRQb3N0IiwidW5zaGlmdCIsImNvdW50cmllcyIsImZsYWciLCJ0aWRiaXQiLCJkYXRlT3B0aW9ucyIsIm1heERhdGUiLCJtaW5EYXRlIiwiaW5pdERhdGUiLCJkYXRlcGlja2VyTW9kZSIsInVzZXJuYW1lVG9nZ2xlIiwicGFzc3dvcmRUb2dnbGUiLCJ0b2dnbGVVc2VybmFtZSIsIm5ld1VzZXJuYW1lIiwidXNlcm5hbWUiLCJ0b2dnbGVQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwib3JpZ2luYWxCZyIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiY2hhbmdlVXNlcm5hbWUiLCJ1cGRhdGVVc2VyIiwiZmxhZ3MiLCJ1c2VyRmxhZ3MiLCJsb2FkQ291bnRyaWVzIiwiJHF1ZXJ5IiwiY291bnRyeSIsIiR3YXRjaCIsInNlbGVjdGVkU2tpbGwiLCJza2lsbHNWaXNpYmxlIiwicHJvamVjdHMiLCJsYWJlbHMiLCJlbXBsb3llciIsImNvbmNhdCIsImZpbHRlcmVkUHJvamVjdHMiLCJwcm9qZWN0Iiwic2V0U2VsZWN0ZWRTa2lsbCIsImNoYXJ0T3B0aW9ucyIsImN1dG91dFBlcmNlbnRhZ2UiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidG9vbHRpcHMiLCJjaGFydFN0eWxlIiwiaW1hZ2UiLCIkc2NlIiwiVGVuVGhpbmdzU3ZjIiwicGFnZSIsImxpc3RzIiwic2VhcmNoIiwibmV3SXRlbSIsImxhbmd1YWdlRmlsdGVyIiwiY2F0ZWdvcnlGaWx0ZXIiLCJzZWxlY3RlZExpc3QiLCJ1bmRlZmluZWQiLCJoaWdobGlnaHRlZExpc3RJZHMiLCJsaXN0SWRzVG9EZWxldGUiLCJjb25maXJtZWQiLCJleGhhdXN0ZWQiLCJvYmplY3RDYXRlZ29yaWVzIiwiYmx1cmJUeXBlcyIsImFwaSIsImFkbWluT25seSIsImhhdmVDb21tb25JdGVtcyIsImFycjEiLCJhcnIyIiwic29tZSIsImtleURvd24iLCJpcyIsImNyZWF0ZVZhbHVlIiwidHJpZ2dlciIsImFkZExpc3QiLCJjcmVhdG9yIiwidmFsdWVzIiwiYW5zd2VycyIsImlzRHluYW1pYyIsInNldFNlbGVjdGVkSXRlbSIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkTGlzdCIsImxpc3QiLCJnZXRMaXN0IiwicmVhZE9ubHkiLCJhZG1pbiIsInNlYXJjaExpc3RzIiwiYXN5bmMiLCJ2aWV3VmFsdWUiLCJoaWdobGlnaHRlZFNlYXJjaFRleHQiLCJyZWdleCIsInZhbHVlT3JkZXIiLCJmaWVsZCIsIm9yZGVyIiwib3JkZXJCeSIsImdldExpc3RzIiwiZ2V0TW9yZUxpc3RzIiwic2V0TGFuZ3VhZ2VGaWx0ZXIiLCJzZXRDYXRlZ29yeUZpbHRlciIsInRvZ2dsZUNhdGVnb3J5RmlsdGVyIiwiYWxsQ2F0ZWdvcmllcyIsInNvcnRCeSIsImxpbWl0IiwiY291bnQiLCJuZXh0UGFnZSIsImdldExpc3ROYW1lIiwibGlzdElkIiwidXBkYXRlVmFsdWUiLCJ1cGRhdGVkSXRlbVJlc3BvbnNlIiwidXBkYXRlTGlzdFZhbHVlIiwiYmx1cmJUeXBlIiwiZGVsZXRlVmFsdWUiLCJoYXNEdXBsaWNhdGUiLCJjcmVhdGVkSXRlbVJlc3BvbnNlIiwiY3JlYXRlTGlzdFZhbHVlIiwidXBzZXJ0TGlzdCIsImJsdXJiIiwiZGVsZXRlTGlzdFZhbHVlIiwidXBkYXRlcyIsInNhdmluZyIsImNoYW5nZXMiLCJ1cGRhdGVMaXN0IiwibGlzdEluZGV4IiwiZmluZEluZGV4IiwiY3JlYXRlTGlzdCIsImFzc2lnbiIsImRlbGV0ZUxpc3QiLCJkZWxldGVMaXN0cyIsImNvbmZpcm1NZXJnZUxpc3RzIiwibWVyZ2VMaXN0cyIsImNvbmZpcm1EZWxldGVMaXN0cyIsInRvZ2dsZUhpZ2hsaWdodGVkTGlzdCIsImhpZ2hsaWdodGVkTGlzdElkIiwibm9uRW5nbGlzaEluZGV4Iiwic2V0RGlmZmljdWx0eSIsImRpZmZpY3VsdHkiLCJzZXRGcmVxdWVuY3kiLCJmcmVxdWVuY3kiLCJzZXRDYXRlZ29yeSIsImNhdGVnb3J5SW5kZXgiLCJhbnN3ZXIiLCJyZW1vdmVBbGxCdXRMZXR0ZXJzIiwiZ2V0Qmx1cmJzIiwiZ2V0dGluZ0JsdXJicyIsImdldEVtYmVkVXJsIiwidmlkZW9JZCIsInRyaW0iLCJ0cnVzdEFzUmVzb3VyY2VVcmwiLCJnZXRMYW5ndWFnZXMiLCJsYW5ndWFnZVN0YXRzIiwiZ2V0TGlzdExhbmd1YWdlU3RhdHMiLCJjYXRlZ29yeVN0YXRzIiwiZ2V0TGlzdENhdGVnb3J5U3RhdHMiLCJnZXRVc2VycyIsImdldFF1ZXVlIiwicXVldWUiLCJnZXRQYXVzZSIsInBhdXNlZCIsInVzZXJzIiwidG9nZ2xlQmFuIiwidG9nZ2xlUGF1c2UiLCIkc3RhdGVQYXJhbXMiLCJnYW1lIiwiZ2V0R2FtZSIsImRhdGFzZXRzIiwiZ2V0UGxheVN0YXRzIiwieWVhcnMiLCJ1bmlxIiwibW9udGhzIiwidGltZXMiLCJwbGF5U3RhdHMiLCJzZXJpZXMiLCJtb250aCIsInVuaXF1ZVBsYXllcnMiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInRpdGxlIiwic29ydGVkRGF0YSIsInRpbWVSZW1haW5pbmciLCJ0aW1lRXhlcmNpc2luZyIsInRpbWVSZXN0aW5nIiwicmVzdCIsImV4ZXJjaXNpbmciLCJzb3VuZHMiLCJBdWRpbyIsIm9mZiIsInN3aXRjaCIsImV4ZXJjaXNlcyIsInByb2dyZXNzIiwid29ya291dCIsImV4Y2VyY2lzZVRpbWUiLCJjbGVhckludGVydmFsIiwidGltZXIiLCJleGVyY2lzZSIsInNldEludGVydmFsIiwiY3VycmVudEV4ZXJjaXNlIiwicGxheSIsIiRodHRwIiwic3ZjIiwiZ2V0VGFza3MiLCJjaG9pY2VzIiwicHJpb3JpdHlMaXN0IiwiZmlyc3RDaG9pY2UiLCJzZWNvbmRDaG9pY2UiLCJjaG9pY2UiLCJ0IiwibSIsInNodWZmbGUiLCJnZXRQcmlvcml0eUxpc3QiLCJnZXRJbWFnZXMiLCJmb2xkZXIiLCJnZXRTb3VuZHMiLCJnZXRIaWdoc2NvcmUiLCJqb2luIiwicHV0IiwiZGVsZXRlIiwicmVwb3J0TGlzdCIsImdldFVzZXIiLCJzZXRUb2tlbiIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiY3JlYXRlVXNlciIsIkZpbGVTdmMiLCJhbmltYWxzIiwiYW5pbWFsIiwic291bmQiLCJzdWJzdHJpbmciLCJjYXBpdGFsaXplIiwiZ2V0UmFuZG9tQW5pbWFscyIsImd1ZXNzIiwiZ2V0U2NvcmUiLCJpc1Njb3JlVmlzaWJsZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQUEsMkJBQUFBLEdBQUEsQ0FDQTtJQUNBQyxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQTtFQUdBQyxPQUFBQSxHQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxDQUFBO0FBR0FDLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsa0JBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFSLDJCQUFBQSxDQUFBUyxNQUFBQSxDQUFBLENBQUFDLE1BQUFBLEVBQUFDLE1BQUFBLEtBQ0FELE1BQUFBLENBQUFFLE9BQUFBLENBQUFELE1BQUFBLENBQUFULE9BQUFBLEVBQUFTLE1BQUFBLENBQUFWLElBQUFBLENBQUFBLEVBQ0FZLElBQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQTtBQUdBLE1BQUFDLGtCQUFBQSxHQUFBLHFDQUFBO0FBRUFWLE1BQUFBLENBQUFD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Q0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxRQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsWUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFdBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxVQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxXQUFBO0lBQ0FFLFVBQUFBLEVBQUEsY0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsTUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsT0FBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFdBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxpQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxvQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsZ0JBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsbUJBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGlCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG9CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxhQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFlBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FB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LEVBQUEsT0FBQTtNQUNBcUcsWUFBQUEsRUFBQSxhQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBNU0sQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFvTSxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUMsUUFBQUEsSUFBQSxHQUNBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQTlHLElBQUFBLEVBQUEsVUFBQTtNQUNBcUcsWUFBQUEsRUFBQSxZQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBNU0sQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFvTSxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUUsUUFBQUEsR0FBQSxDQUFBLEtBQ0FGLFNBQUFBLENBQUFHLFlBQUFBLElBQUEsQ0FBQSxDQUVBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQWhILElBQUFBLEVBQUEsT0FBQTtNQUNBcUcsWUFBQUEsRUFBQSxnQkFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7UUFDQTVNLENBQUFBLEVBQUEsQ0FBQTtRQUNBUyxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBb00sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0FBLFNBQUFBLENBQUFJLEtBQUFBLElBQUEsQ0FDQTtNQUFBO0lBQUEsQ0FBQSxFQUVBO01BQ0FqSCxJQUFBQSxFQUFBLFFBQUE7TUFDQXFHLFlBQUFBLEVBQUEsUUFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7UUFDQTVNLENBQUFBLEVBQUEsQ0FBQTtRQUNBUyxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBb00sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0FBLFNBQUFBLENBQUFLLE1BQUFBLEdBQUFBLENBQUEsQ0FDQTtNQUFBO0lBQUEsQ0FBQSxFQUVBO01BQ0FsSCxJQUFBQSxFQUFBLE1BQUE7TUFDQXFHLFlBQUFBLEVBQUEsTUFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7UUFDQTVNLENBQUFBLEVBQUEsQ0FBQTtRQUNBUyxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBb00sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0EsS0FBQSxJQUFBaE4sQ0FBQUEsSUFBQWlNLFNBQUFBLEVBQ0FBLFNBQUFBLENBQUFqTSxDQUFBQSxDQUFBQSxDQUFBc04sT0FBQUEsRUFBQUE7UUFFQUMsY0FBQUEsQ0FBQSxDQUFBLENBQ0E7TUFBQTtJQUFBLENBQUEsQ0FBQTtFQVVBaEIsWUFBQUEsQ0FBQXRMLE9BQUFBLENBQUEsVUFBQXVN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QUFBLEdBQUEsR0FBQWdLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBakssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBZ0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FqSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUFnSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEdBQ0FoSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFnSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQWpLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQWdLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBakssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBZ0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FDQSxLQUFBLEVBQ0EsTUFBQSxHQUNBaEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBZ0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FqSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFnSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQWpLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQWdLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxDQUFBLEVBRUF0RyxHQUFBQSxDQUFBRyxTQUFBQSxHQUFBZ0csUUFBQUEsRUFDQW5HLEdBQUFBLENBQUFFLElBQUFBLEdBQUEsY0FBQSxFQUNBRixHQUFBQSxD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QUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFdBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxlQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsd0JBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsY0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGtCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxpQ0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxrQ0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxlQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEseUJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsdUNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsMEJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxhQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsY0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsTUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsa0JBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxnQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLG9CQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxNQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLDZCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGlDQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLHNEQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxlQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxXQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFdBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsbUJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSw4Q0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxXQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE1BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsZUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFdBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsbUNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxXQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxhQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsZ0NBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsTUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSwyQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsdUJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsd0NBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsb0JBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxnQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGtDQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsYUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxlQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFdBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFdBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsWUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLHNCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsNEJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsWUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxrQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSw0Q0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxNQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLDBCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsWUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsV0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxlQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxXQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsTUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxhQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE1BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxNQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGtCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGtCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLDJCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsYUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxxQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLG9CQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsY0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxpQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxZQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxXQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLDhDQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsd0JBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxjQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsU0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsYUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSx1QkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxhQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLDJCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLHNCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFdBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsMEJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsTUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSw2QkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxNQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsWUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLGFBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsY0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLE9BQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxxQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLDJCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLDhCQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsUUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxzQ0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSwwQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxTQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFlBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsVUFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxrQ0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxtQ0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSx5QkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxzQkFBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxVQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsbUJBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsT0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxPQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFNBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpVLElBQUFBLEVBQUEsY0FBQTtJQUFBeVUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBelUsSUFBQUEsRUFBQSxRQUFBO0lBQUF5VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6VSxJQUFBQSxFQUFBLFVBQUE7SUFBQXlVLElBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUE7RUFXQTlULE1BQUFBLENBQUFnVSxXQUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUEsSUFBQW5ULElBQUFBO0lBQ0FvVCxPQUFBQSxFQUFBLElBQUFwVCxJQUFBQSxDQUFB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QixNQUFBQSxJQUFBQSxNQUFBQSxDQUFBemlCLElBQUFBLEtBQUF5aUIsTUFBQUEsQ0FBQUssS0FBQUEsQ0FBQUEsQ0FBQWhwQixNQUFBQSxJQUFBNkcsTUFBQUEsQ0FBQTZoQixPQUFBQSxDQUFBMW9CLE1BQUFBLEVBQUFBLEVBRUE2RyxNQUFBQSxDQUFBcWlCLGNBQUFBLEdBQUEsTUFBQXJpQixNQUFBQSxDQUFBNmhCLE9BQUFBLENBQUFuZ0IsTUFBQUEsQ0FBQW9nQixNQUFBQSxJQUFBQSxNQUFBQSxDQUFBSyxLQUFBQSxDQUFBQSxDQUFBaHBCLE1BQUFBLEtBQUE2RyxNQUFBQSxDQUFBNmhCLE9BQUFBLENBQUExb0IsTUFDQTtBQUFBLENBQUEsQ0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwID0gW1xyXG4gIHtcclxuICAgIGJhc2U6IFwiQVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQxXFx1MjRCNlxcdUZGMjFcXHUwMEMwXFx1MDBDMVxcdTAwQzJcXHUxRUE2XFx1MUVBNFxcdTFFQUFcXHUxRUE4XFx1MDBDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx1MDBDNFxcdTAxREVcXHUxRUEyXFx1MDBDNVxcdTAxRkFcXHUwMUNEXFx1MDIwMFxcdTAyMDJcXHUxRUEwXFx1MUVBQ1xcdTFFQjZcXHUxRTAwXFx1MDEwNFxcdTAyM0FcXHUyQzZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBQVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzMyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBRVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMEM2XFx1MDFGQ1xcdTAxRTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFPXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFVXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFWXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzhcXHVBNzNBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzNDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJCXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgyXFx1MDE4MV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQ1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQzXFx1MjRCOFxcdUZGMjNcXHUwMTA2XFx1MDEwOFxcdTAxMEFcXHUwMTBDXFx1MDBDN1xcdTFFMDhcXHUwMTg3XFx1MDIzQlxcdUE3M0VdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0NFxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEJcXHUwMThBXFx1MDE4OVxcdUE3NzldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkRaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjFcXHUwMUM0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEelwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYyXFx1MDFDNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQ1XFx1MjRCQVxcdUZGMjVcXHUwMEM4XFx1MDBDOVxcdTAwQ0FcXHUxRUMwXFx1MUVCRVxcdTFFQzRcXHUxRUMyXFx1MUVCQ1xcdTAxMTJcXHUxRTE0XFx1MUUxNlxcdTAxMTRcXHUwMTE2XFx1MDBDQlxcdTFFQkFcXHUwMTFBXFx1MDIwNFxcdTAyMDZcXHUxRUI4XFx1MUVDNlxcdTAyMjhcXHUxRTFDXFx1MDExOFxcdTFFMThcXHUxRTFBXFx1MDE5MFxcdTAxOEVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0NlxcdTI0QkJcXHVGRjI2XFx1MUUxRVxcdTAxOTFcXHVBNzdCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJHXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDdcXHUyNEJDXFx1RkYyN1xcdTAxRjRcXHUwMTFDXFx1MUUyMFxcdTAxMUVcXHUwMTIwXFx1MDFFNlxcdTAxMjJcXHUwMUU0XFx1MDE5M1xcdUE3QTBcXHVBNzdEXFx1QTc3RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ4XFx1MjRCRFxcdUZGMjhcXHUwMTI0XFx1MUUyMlxcdTFFMjZcXHUwMjFFXFx1MUUyNFxcdTFFMjhcXHUxRTJBXFx1MDEyNlxcdTJDNjdcXHUyQzc1XFx1QTc4RF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQ5XFx1MjRCRVxcdUZGMjlcXHUwMENDXFx1MDBDRFxcdTAwQ0VcXHUwMTI4XFx1MDEyQVxcdTAxMkNcXHUwMTMwXFx1MDBDRlxcdTFFMkVcXHUxRUM4XFx1MDFDRlxcdTAyMDhcXHUwMjBBXFx1MUVDQVxcdTAxMkVcXHUxRTJDXFx1MDE5N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRBXFx1MjRCRlxcdUZGMkFcXHUwMTM0XFx1MDI0OF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiS1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRCXFx1MjRDMFxcdUZGMkJcXHUxRTMwXFx1MDFFOFxcdTFFMzJcXHUwMTM2XFx1MUUzNFxcdTAxOThcXHUyQzY5XFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTdBMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTFwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDRDXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxKXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk1cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0RFxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0RVxcdTI0QzNcXHVGRjJFXFx1MDFGOFxcdTAxNDNcXHUwMEQxXFx1MUU0NFxcdTAxNDdcXHUxRTQ2XFx1MDE0NVxcdTFFNEFcXHUxRTQ4XFx1MDIyMFxcdTAxOURcXHVBNzkwXFx1QTdBNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTkpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTmpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDRGXFx1MjRDNFxcdUZGMkZcXHUwMEQyXFx1MDBEM1xcdTAwRDRcXHUxRUQyXFx1MUVEMFxcdTFFRDZcXHUxRUQ0XFx1MDBENVxcdTFFNENcXHUwMjJDXFx1MUU0RVxcdTAxNENcXHUxRTUwXFx1MUU1MlxcdTAxNEVcXHUwMjJFXFx1MDIzMFxcdTAwRDZcXHUwMjJBXFx1MUVDRVxcdTAxNTBcXHUwMUQxXFx1MDIwQ1xcdTAyMEVcXHUwMUEwXFx1MUVEQ1xcdTFFREFcXHUxRUUwXFx1MUVERVxcdTFFRTJcXHUxRUNDXFx1MUVEOFxcdTAxRUFcXHUwMUVDXFx1MDBEOFxcdTAxRkVcXHUwMTg2XFx1MDE5RlxcdUE3NEFcXHVBNzRDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPSVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUEyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPT1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzRFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPVVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMjIyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJQXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTBcXHUyNEM1XFx1RkYzMFxcdTFFNTRcXHUxRTU2XFx1MDFBNFxcdTJDNjNcXHVBNzUwXFx1QTc1MlxcdUE3NTRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1MVxcdTI0QzZcXHVGRjMxXFx1QTc1NlxcdUE3NThcXHUwMjRBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJSXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJTXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTNcXHUyNEM4XFx1RkYzM1xcdTFFOUVcXHUwMTVBXFx1MUU2NFxcdTAxNUNcXHUxRTYwXFx1MDE2MFxcdTFFNjZcXHUxRTYyXFx1MUU2OFxcdTAyMThcXHUwMTVFXFx1MkM3RVxcdUE3QThcXHVBNzg0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJUXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTRcXHUyNEM5XFx1RkYzNFxcdTFFNkFcXHUwMTY0XFx1MUU2Q1xcdTAyMUFcXHUwMTYyXFx1MUU3MFxcdTFFNkVcXHUwMTY2XFx1MDFBQ1xcdTAxQUVcXHUwMjNFXFx1QTc4Nl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVFpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTcyOF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDU1XFx1MjRDQVxcdUZGMzVcXHUwMEQ5XFx1MDBEQVxcdTAwREJcXHUwMTY4XFx1MUU3OFxcdTAxNkFcXHUxRTdBXFx1MDE2Q1xcdTAwRENcXHUwMURCXFx1MDFEN1xcdTAxRDVcXHUwMUQ5XFx1MUVFNlxcdTAxNkVcXHUwMTcwXFx1MDFEM1xcdTAyMTRcXHUwMjE2XFx1MDFBRlxcdTFFRUFcXHUxRUU4XFx1MUVFRVxcdTFFRUNcXHUxRUYwXFx1MUVFNFxcdTFFNzJcXHUwMTcyXFx1MUU3NlxcdTFFNzRcXHUwMjQ0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJWXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTZcXHUyNENCXFx1RkYzNlxcdTFFN0NcXHUxRTdFXFx1MDFCMlxcdUE3NUVcXHUwMjQ1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJWWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzYwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJXXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTdcXHUyNENDXFx1RkYzN1xcdTFFODBcXHUxRTgyXFx1MDE3NFxcdTFFODZcXHUxRTg0XFx1MUU4OFxcdTJDNzJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1OFxcdTI0Q0RcXHVGRjM4XFx1MUU4QVxcdTFFOENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIllcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1OVxcdTI0Q0VcXHVGRjM5XFx1MUVGMlxcdTAwRERcXHUwMTc2XFx1MUVGOFxcdTAyMzJcXHUxRThFXFx1MDE3OFxcdTFFRjZcXHUxRUY0XFx1MDFCM1xcdTAyNEVcXHUxRUZFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNUFcXHUyNENGXFx1RkYzQVxcdTAxNzlcXHUxRTkwXFx1MDE3QlxcdTAxN0RcXHUxRTkyXFx1MUU5NFxcdTAxQjVcXHUwMjI0XFx1MkM3RlxcdTJDNkJcXHVBNzYyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjFcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHUwMEUwXFx1MDBFMVxcdTAwRTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx1MDBFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx1MDBFNFxcdTAxREZcXHUxRUEzXFx1MDBFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhYVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzMzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhZVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMEU2XFx1MDFGRFxcdTAxRTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFvXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF1XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzlcXHVBNzNCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJheVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzNEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJiXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjJcXHUyNEQxXFx1RkY0MlxcdTFFMDNcXHUxRTA1XFx1MUUwN1xcdTAxODBcXHUwMTgzXFx1MDI1M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiY1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDYzXFx1MjREMlxcdUZGNDNcXHUwMTA3XFx1MDEwOVxcdTAxMEJcXHUwMTBEXFx1MDBFN1xcdTFFMDlcXHUwMTg4XFx1MDIzQ1xcdUE3M0ZcXHUyMTg0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJkXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjRcXHUyNEQzXFx1RkY0NFxcdTFFMEJcXHUwMTBGXFx1MUUwRFxcdTFFMTFcXHUxRTEzXFx1MUUwRlxcdTAxMTFcXHUwMThDXFx1MDI1NlxcdTAyNTdcXHVBNzdBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJkelwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYzXFx1MDFDNl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDY1XFx1MjRENFxcdUZGNDVcXHUwMEU4XFx1MDBFOVxcdTAwRUFcXHUxRUMxXFx1MUVCRlxcdTFFQzVcXHUxRUMzXFx1MUVCRFxcdTAxMTNcXHUxRTE1XFx1MUUxN1xcdTAxMTVcXHUwMTE3XFx1MDBFQlxcdTFFQkJcXHUwMTFCXFx1MDIwNVxcdTAyMDdcXHUxRUI5XFx1MUVDN1xcdTAyMjlcXHUxRTFEXFx1MDExOVxcdTFFMTlcXHUxRTFCXFx1MDI0N1xcdTAyNUJcXHUwMUREXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJmXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjZcXHUyNEQ1XFx1RkY0NlxcdTFFMUZcXHUwMTkyXFx1QTc3Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZ1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY3XFx1MjRENlxcdUZGNDdcXHUwMUY1XFx1MDExRFxcdTFFMjFcXHUwMTFGXFx1MDEyMVxcdTAxRTdcXHUwMTIzXFx1MDFFNVxcdTAyNjBcXHVBN0ExXFx1MUQ3OVxcdUE3N0ZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2OFxcdTI0RDdcXHVGRjQ4XFx1MDEyNVxcdTFFMjNcXHUxRTI3XFx1MDIxRlxcdTFFMjVcXHUxRTI5XFx1MUUyQlxcdTFFOTZcXHUwMTI3XFx1MkM2OFxcdTJDNzZcXHUwMjY1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJodlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMTk1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJpXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjlcXHUyNEQ4XFx1RkY0OVxcdTAwRUNcXHUwMEVEXFx1MDBFRVxcdTAxMjlcXHUwMTJCXFx1MDEyRFxcdTAwRUZcXHUxRTJGXFx1MUVDOVxcdTAxRDBcXHUwMjA5XFx1MDIwQlxcdTFFQ0JcXHUwMTJGXFx1MUUyRFxcdTAyNjhcXHUwMTMxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkFcXHUyNEQ5XFx1RkY0QVxcdTAxMzVcXHUwMUYwXFx1MDI0OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwia1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZCXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibFwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZDXFx1MjREQlxcdUZGNENcXHUwMTQwXFx1MDEzQVxcdTAxM0VcXHUxRTM3XFx1MUUzOVxcdTAxM0NcXHUxRTNEXFx1MUUzQlxcdTAxN0ZcXHUwMTQyXFx1MDE5QVxcdTAyNkJcXHUyQzYxXFx1QTc0OVxcdUE3ODFcXHVBNzQ3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJsalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJtXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkRcXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJuXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkVcXHUyNEREXFx1RkY0RVxcdTAxRjlcXHUwMTQ0XFx1MDBGMVxcdTFFNDVcXHUwMTQ4XFx1MUU0N1xcdTAxNDZcXHUxRTRCXFx1MUU0OVxcdTAxOUVcXHUwMjcyXFx1MDE0OVxcdUE3OTFcXHVBN0E1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJualwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkZcXHUyNERFXFx1RkY0RlxcdTAwRjJcXHUwMEYzXFx1MDBGNFxcdTFFRDNcXHUxRUQxXFx1MUVEN1xcdTFFRDVcXHUwMEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx1MDBGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHUwMEY4XFx1MDFGRlxcdTAyNTRcXHVBNzRCXFx1QTc0RFxcdTAyNzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9pXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm91XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAyMjNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9vXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NEZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInBcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3MFxcdTI0REZcXHVGRjUwXFx1MUU1NVxcdTFFNTdcXHUwMUE1XFx1MUQ3RFxcdUE3NTFcXHVBNzUzXFx1QTc1NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwicVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDcxXFx1MjRFMFxcdUZGNTFcXHUwMjRCXFx1QTc1N1xcdUE3NTldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInJcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3MlxcdTI0RTFcXHVGRjUyXFx1MDE1NVxcdTFFNTlcXHUwMTU5XFx1MDIxMVxcdTAyMTNcXHUxRTVCXFx1MUU1RFxcdTAxNTdcXHUxRTVGXFx1MDI0RFxcdTAyN0RcXHVBNzVCXFx1QTdBN1xcdUE3ODNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInNcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3M1xcdTI0RTJcXHVGRjUzXFx1MDBERlxcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ0XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzRcXHUyNEUzXFx1RkY1NFxcdTFFNkJcXHUxRTk3XFx1MDE2NVxcdTFFNkRcXHUwMjFCXFx1MDE2M1xcdTFFNzFcXHUxRTZGXFx1MDE2N1xcdTAxQURcXHUwMjg4XFx1MkM2NlxcdUE3ODddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MjldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3NVxcdTI0RTRcXHVGRjU1XFx1MDBGOVxcdTAwRkFcXHUwMEZCXFx1MDE2OVxcdTFFNzlcXHUwMTZCXFx1MUU3QlxcdTAxNkRcXHUwMEZDXFx1MDFEQ1xcdTAxRDhcXHUwMUQ2XFx1MDFEQVxcdTFFRTdcXHUwMTZGXFx1MDE3MVxcdTAxRDRcXHUwMjE1XFx1MDIxN1xcdTAxQjBcXHUxRUVCXFx1MUVFOVxcdTFFRUZcXHUxRUVEXFx1MUVGMVxcdTFFRTVcXHUxRTczXFx1MDE3M1xcdTFFNzdcXHUxRTc1XFx1MDI4OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc2XFx1MjRFNVxcdUZGNTZcXHUxRTdEXFx1MUU3RlxcdTAyOEJcXHVBNzVGXFx1MDI4Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidnlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc2MV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwid1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc3XFx1MjRFNlxcdUZGNTdcXHUxRTgxXFx1MUU4M1xcdTAxNzVcXHUxRTg3XFx1MUU4NVxcdTFFOThcXHUxRTg5XFx1MkM3M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwieFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc4XFx1MjRFN1xcdUZGNThcXHUxRThCXFx1MUU4RF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwieVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc5XFx1MjRFOFxcdUZGNTlcXHUxRUYzXFx1MDBGRFxcdTAxNzdcXHUxRUY5XFx1MDIzM1xcdTFFOEZcXHUwMEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwN0FcXHUyNEU5XFx1RkY1QVxcdTAxN0FcXHUxRTkxXFx1MDE3Q1xcdTAxN0VcXHUxRTkzXFx1MUU5NVxcdTAxQjZcXHUwMjI1XFx1MDI0MFxcdTJDNkNcXHVBNzYzXS9nLFxyXG4gIH0sXHJcbl07XHJcbnZhciBkb21haW5zID0gW1xyXG4gIFwiLmNvbVwiLFxyXG4gIFwiLm9yZ1wiLFxyXG4gIFwiLm5ldFwiLFxyXG4gIFwiLmFjXCIsXHJcbiAgXCIuYWRcIixcclxuICBcIi5hZVwiLFxyXG4gIFwiLmFmXCIsXHJcbiAgXCIuYWdcIixcclxuICBcIi5haVwiLFxyXG4gIFwiLmFsXCIsXHJcbiAgXCIuYW1cIixcclxuICBcIi5hb1wiLFxyXG4gIFwiLmFxXCIsXHJcbiAgXCIuYXJcIixcclxuICBcIi5hc1wiLFxyXG4gIFwiLmF0XCIsXHJcbiAgXCIuYXVcIixcclxuICBcIi5hd1wiLFxyXG4gIFwiLmF4XCIsXHJcbiAgXCIuYXpcIixcclxuICBcIi5iYVwiLFxyXG4gIFwiLmJiXCIsXHJcbiAgXCIuYmRcIixcclxuICBcIi5iZVwiLFxyXG4gIFwiLmJmXCIsXHJcbiAgXCIuYmdcIixcclxuICBcIi5iaFwiLFxyXG4gIFwiLmJpXCIsXHJcbiAgXCIuYmpcIixcclxuICBcIi5ibVwiLFxyXG4gIFwiLmJuXCIsXHJcbiAgXCIuYm9cIixcclxuICBcIi5icVwiLFxyXG4gIFwiLmJyXCIsXHJcbiAgXCIuYnNcIixcclxuICBcIi5idFwiLFxyXG4gIFwiLmJ3XCIsXHJcbiAgXCIuYnlcIixcclxuICBcIi5ielwiLFxyXG4gIFwiLmNhXCIsXHJcbiAgXCIuY2NcIixcclxuICBcIi5jZFwiLFxyXG4gIFwiLmNmXCIsXHJcbiAgXCIuY2dcIixcclxuICBcIi5jaFwiLFxyXG4gIFwiLmNpXCIsXHJcbiAgXCIuY2tcIixcclxuICBcIi5jbFwiLFxyXG4gIFwiLmNtXCIsXHJcbiAgXCIuY25cIixcclxuICBcIi5jb1wiLFxyXG4gIFwiLmNyXCIsXHJcbiAgXCIuY3VcIixcclxuICBcIi5jdlwiLFxyXG4gIFwiLmN3XCIsXHJcbiAgXCIuY3hcIixcclxuICBcIi5jeVwiLFxyXG4gIFwiLmN6XCIsXHJcbiAgXCIuZGVcIixcclxuICBcIi5kalwiLFxyXG4gIFwiLmRrXCIsXHJcbiAgXCIuZG1cIixcclxuICBcIi5kb1wiLFxyXG4gIFwiLmR6XCIsXHJcbiAgXCIuZWNcIixcclxuICBcIi5lZVwiLFxyXG4gIFwiLmVnXCIsXHJcbiAgXCIuZWhcIixcclxuICBcIi5lclwiLFxyXG4gIFwiLmVzXCIsXHJcbiAgXCIuZXRcIixcclxuICBcIi5ldVwiLFxyXG4gIFwiLmZpXCIsXHJcbiAgXCIuZmpcIixcclxuICBcIi5ma1wiLFxyXG4gIFwiLmZtXCIsXHJcbiAgXCIuZm9cIixcclxuICBcIi5mclwiLFxyXG4gIFwiLmdhXCIsXHJcbiAgXCIuZ2RcIixcclxuICBcIi5nZVwiLFxyXG4gIFwiLmdmXCIsXHJcbiAgXCIuZ2dcIixcclxuICBcIi5naFwiLFxyXG4gIFwiLmdpXCIsXHJcbiAgXCIuZ2xcIixcclxuICBcIi5nbVwiLFxyXG4gIFwiLmduXCIsXHJcbiAgXCIuZ3BcIixcclxuICBcIi5ncVwiLFxyXG4gIFwiLmdyXCIsXHJcbiAgXCIuZ3NcIixcclxuICBcIi5ndFwiLFxyXG4gIFwiLmd1XCIsXHJcbiAgXCIuZ3dcIixcclxuICBcIi5neVwiLFxyXG4gIFwiLmhrXCIsXHJcbiAgXCIuaG1cIixcclxuICBcIi5oblwiLFxyXG4gIFwiLmhyXCIsXHJcbiAgXCIuaHRcIixcclxuICBcIi5odVwiLFxyXG4gIFwiLmlkXCIsXHJcbiAgXCIuaWVcIixcclxuICBcIi5pbFwiLFxyXG4gIFwiLmltXCIsXHJcbiAgXCIuaW5cIixcclxuICBcIi5pb1wiLFxyXG4gIFwiLmlxXCIsXHJcbiAgXCIuaXJcIixcclxuICBcIi5pc1wiLFxyXG4gIFwiLml0XCIsXHJcbiAgXCIuamVcIixcclxuICBcIi5qbVwiLFxyXG4gIFwiLmpvXCIsXHJcbiAgXCIuanBcIixcclxuICBcIi5rZVwiLFxyXG4gIFwiLmtnXCIsXHJcbiAgXCIua2hcIixcclxuICBcIi5raVwiLFxyXG4gIFwiLmttXCIsXHJcbiAgXCIua25cIixcclxuICBcIi5rcFwiLFxyXG4gIFwiLmtyXCIsXHJcbiAgXCIua3dcIixcclxuICBcIi5reVwiLFxyXG4gIFwiLmt6XCIsXHJcbiAgXCIubGFcIixcclxuICBcIi5sYlwiLFxyXG4gIFwiLmxjXCIsXHJcbiAgXCIubGlcIixcclxuICBcIi5sa1wiLFxyXG4gIFwiLmxyXCIsXHJcbiAgXCIubHNcIixcclxuICBcIi5sdFwiLFxyXG4gIFwiLmx1XCIsXHJcbiAgXCIubHZcIixcclxuICBcIi5seVwiLFxyXG4gIFwiLm1hXCIsXHJcbiAgXCIubWNcIixcclxuICBcIi5tZFwiLFxyXG4gIFwiLm1lXCIsXHJcbiAgXCIubWdcIixcclxuICBcIi5taFwiLFxyXG4gIFwiLm1rXCIsXHJcbiAgXCIubWxcIixcclxuICBcIi5tbVwiLFxyXG4gIFwiLm1uXCIsXHJcbiAgXCIubW9cIixcclxuICBcIi5tcFwiLFxyXG4gIFwiLm1xXCIsXHJcbiAgXCIubXJcIixcclxuICBcIi5tc1wiLFxyXG4gIFwiLm10XCIsXHJcbiAgXCIubXVcIixcclxuICBcIi5tdlwiLFxyXG4gIFwiLm13XCIsXHJcbiAgXCIubXhcIixcclxuICBcIi5teVwiLFxyXG4gIFwiLm16XCIsXHJcbiAgXCIubmFcIixcclxuICBcIi5uY1wiLFxyXG4gIFwiLm5lXCIsXHJcbiAgXCIubmZcIixcclxuICBcIi5uZ1wiLFxyXG4gIFwiLm5pXCIsXHJcbiAgXCIubmxcIixcclxuICBcIi5ub1wiLFxyXG4gIFwiLm5wXCIsXHJcbiAgXCIubnJcIixcclxuICBcIi5udVwiLFxyXG4gIFwiLm56XCIsXHJcbiAgXCIub21cIixcclxuICBcIi5wYVwiLFxyXG4gIFwiLnBlXCIsXHJcbiAgXCIucGZcIixcclxuICBcIi5wZ1wiLFxyXG4gIFwiLnBoXCIsXHJcbiAgXCIucGtcIixcclxuICBcIi5wbFwiLFxyXG4gIFwiLnBtXCIsXHJcbiAgXCIucG5cIixcclxuICBcIi5wclwiLFxyXG4gIFwiLnBzXCIsXHJcbiAgXCIucHRcIixcclxuICBcIi5wd1wiLFxyXG4gIFwiLnB5XCIsXHJcbiAgXCIucWFcIixcclxuICBcIi5yZVwiLFxyXG4gIFwiLnJvXCIsXHJcbiAgXCIucnNcIixcclxuICBcIi5ydVwiLFxyXG4gIFwiLnJ3XCIsXHJcbiAgXCIuc2FcIixcclxuICBcIi5zYlwiLFxyXG4gIFwiLnNjXCIsXHJcbiAgXCIuc2RcIixcclxuICBcIi5zZVwiLFxyXG4gIFwiLnNnXCIsXHJcbiAgXCIuc2hcIixcclxuICBcIi5zaVwiLFxyXG4gIFwiLnNrXCIsXHJcbiAgXCIuc2xcIixcclxuICBcIi5zbVwiLFxyXG4gIFwiLnNuXCIsXHJcbiAgXCIuc29cIixcclxuICBcIi5zclwiLFxyXG4gIFwiLnNzXCIsXHJcbiAgXCIuc3RcIixcclxuICBcIi5zdVwiLFxyXG4gIFwiLnN2XCIsXHJcbiAgXCIuc3hcIixcclxuICBcIi5zeVwiLFxyXG4gIFwiLnN6XCIsXHJcbiAgXCIudGNcIixcclxuICBcIi50ZFwiLFxyXG4gIFwiLnRmXCIsXHJcbiAgXCIudGdcIixcclxuICBcIi50aFwiLFxyXG4gIFwiLnRqXCIsXHJcbiAgXCIudGtcIixcclxuICBcIi50bFwiLFxyXG4gIFwiLnRtXCIsXHJcbiAgXCIudG5cIixcclxuICBcIi50b1wiLFxyXG4gIFwiLnRyXCIsXHJcbiAgXCIudHRcIixcclxuICBcIi50dlwiLFxyXG4gIFwiLnR3XCIsXHJcbiAgXCIudHpcIixcclxuICBcIi51YVwiLFxyXG4gIFwiLnVnXCIsXHJcbiAgXCIudWtcIixcclxuICBcIi51c1wiLFxyXG4gIFwiLnV5XCIsXHJcbiAgXCIudXpcIixcclxuICBcIi52YVwiLFxyXG4gIFwiLnZjXCIsXHJcbiAgXCIudmVcIixcclxuICBcIi52Z1wiLFxyXG4gIFwiLnZpXCIsXHJcbiAgXCIudm5cIixcclxuICBcIi52dVwiLFxyXG4gIFwiLndmXCIsXHJcbiAgXCIud3NcIixcclxuICBcIi55ZVwiLFxyXG4gIFwiLnl0XCIsXHJcbiAgXCIuemFcIixcclxuICBcIi56bVwiLFxyXG4gIFwiLnp3XCIsXHJcbl07XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVEaWFjcml0aWNzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcC5yZWR1Y2UoKHJlc3VsdCwgbGV0dGVyKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXN1bHQucmVwbGFjZShsZXR0ZXIubGV0dGVycywgbGV0dGVyLmJhc2UpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBTUEVDSUFMX0NIQVJBQ1RFUlMgPSBcIlxcXFxcXFxcLyAhP0AjJCVeJiooKV8rOi57fSw7XFxcXC0nYGDigJnigJhcXFwiXCI7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVyc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChgWyR7U1BFQ0lBTF9DSEFSQUNURVJTfV1gLCBcImdpXCIpLCBcIlwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZUFsbEJ1dExldHRlcnNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b0xvd2VyQ2FzZSgpLnJlbW92ZURpYWNyaXRpY3MoKS5yZW1vdmVTcGVjaWFsQ2hhcmFjdGVycygpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiY29uY2VhbFwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChleHRyYSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbXiR7U1BFQ0lBTF9DSEFSQUNURVJTfSR7ZXh0cmF9XWAsIFwiZ2lcIiksIFwi4oGOXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiY2FwaXRhbGl6ZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5zbGljZSgxKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZUhUTUxcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKFwiPlwiLCBcIlxcdTIyN0JcIikucmVwbGFjZShcIjxcIiwgXCJcXHUyMjdBXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicGFyc2VTeW1ib2xzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZUFsbChcIiZcIiwgXCImYW1wO1wiKS5yZXBsYWNlKFwiPFwiLCBcIiZsdDtcIikucmVwbGFjZShcIj5cIiwgXCImZ3Q7XCIpLnJlcGxhY2VBbGwoXCIjXCIsIFwiJm51bTtcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZXBsYWNlQXJyYXlcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZmluZCwgcmVwbGFjZSkge1xyXG4gICAgdmFyIHJlcGxhY2VTdHJpbmcgPSB0aGlzO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaW5kLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHJlcGxhY2VTdHJpbmcgPSByZXBsYWNlU3RyaW5nLnJlcGxhY2UoZmluZFtpXSwgcmVwbGFjZVtpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVwbGFjZVN0cmluZztcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcIm1hc2tVUkxzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZUFycmF5KFtcImh0dHBzOi8vXCIsIFwiaHR0cDovL1wiXSwgXCJub3BlOi8vXCIpLnJlcGxhY2VBcnJheShkb21haW5zLCBcIi5ub3BlXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwibWFrZVJlYWRhYmxlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJtYWtlUGVyY2VudGFnZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChkZWNpbWFscykge1xyXG4gICAgaWYgKCFkZWNpbWFscykgZGVjaW1hbHMgPSAyO1xyXG4gICAgcmV0dXJuIGAkeyh0aGlzICogMTAwKS50b0ZpeGVkKGRlY2ltYWxzKX0lYDtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHNvcnRPYmplY3QgPSAob2JqLCBkaXJlY3Rpb24pID0+IHtcclxuICBsZXQgYXJyID0gW107XHJcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICBhcnIucHVzaChba2V5LCBvYmpba2V5XV0pO1xyXG4gIH1cclxuICBhcnIuc29ydCgoYSwgYikgPT4gKGRpcmVjdGlvbiA/IGFbMV0gLSBiWzFdIDogYlsxXSAtIGFbMV0pKTtcclxuICBsZXQgb2JqU29ydGVkID0ge307XHJcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IChvYmpTb3J0ZWRbaXRlbVswXV0gPSBpdGVtWzFdKSk7XHJcbiAgLy9hcnIuc29ydChmdW5jdGlvbihhLCBiKSB7IGEudmFsdWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIudmFsdWUudG9Mb3dlckNhc2UoKSk7IH0pOyAvL3VzZSB0aGlzIHRvIHNvcnQgYXMgc3RyaW5nc1xyXG4gIHJldHVybiBvYmpTb3J0ZWQ7IC8vIHJldHVybnMgYXJyYXlcclxufTtcclxuIiwiLypcclxuJCA9IGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG52YXIgYm9vdHN0cmFwID0gcmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG52YXIgYW5ndWxhclNhbml0aXplID0gcmVxdWlyZSgnYW5ndWxhci1zYW5pdGl6ZScpO1xyXG52YXIgYW5ndWxhckFuaW1hdGUgPSByZXF1aXJlKCdhbmd1bGFyLWFuaW1hdGUnKTtcclxuKi9cclxuYW5ndWxhci5tb2R1bGUoXCJhcHBcIiwgW1xyXG4gIFwidWkucm91dGVyXCIsXHJcbiAgXCJ1aS5ib290c3RyYXBcIixcclxuICBcIm5nQW5pbWF0ZVwiLFxyXG4gIFwibmdTYW5pdGl6ZVwiLFxyXG4gIFwibmdEcmFnRHJvcFwiLFxyXG4gIFwibmdUYWdzSW5wdXRcIixcclxuICBcInZjUmVjYXB0Y2hhXCIsXHJcbiAgXCJjaGFydC5qc1wiLFxyXG4gIFwidGMuY2hhcnRqc1wiLFxyXG4gIFwiaW5maW5pdGUtc2Nyb2xsXCIsXHJcbl0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICR1cmxTZXJ2aWNlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XHJcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcIi9ob21lXCIpO1xyXG4gICR1cmxTZXJ2aWNlUHJvdmlkZXIuY29uZmlnLnN0cmljdE1vZGUoZmFsc2UpO1xyXG5cclxuICAkc3RhdGVQcm92aWRlclxyXG4gICAgLnN0YXRlKFwiaG9tZVwiLCB7XHJcbiAgICAgIHVybDogXCIvaG9tZVwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvaG9tZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicG9saWN5XCIsIHtcclxuICAgICAgdXJsOiBcIi9wb2xpY3lcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3BvbGljeS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicHJpbnRcIiwge1xyXG4gICAgICB1cmw6IFwiL3ByaW50XCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wcmludC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiZXhwZXJpZW5jZVwiLCB7XHJcbiAgICAgIHVybDogXCIvZXhwZXJpZW5jZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkV4cGVyaWVuY2VDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9leHBlcmllbmNlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJza2lsbHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3NraWxsc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlNraWxsc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3NraWxscy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiaG9iYmllc1wiLCB7XHJcbiAgICAgIHVybDogXCIvaG9iYmllc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkhvYmJpZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9ob2JiaWVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJjb250YWN0XCIsIHtcclxuICAgICAgdXJsOiBcIi9jb250YWN0XCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQ29udGFjdEN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2NvbnRhY3QuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcIndvcmtvdXRcIiwge1xyXG4gICAgICB1cmw6IFwiL3dvcmtvdXRcIixcclxuICAgICAgY29udHJvbGxlcjogXCJXb3Jrb3V0Q3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvd29ya291dC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicG9zdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3Bvc3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUG9zdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wb3N0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicHJvZmlsZVwiLCB7XHJcbiAgICAgIHVybDogXCIvcHJvZmlsZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlByb2ZpbGVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wcm9maWxlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJsaXN0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvbGlzdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJMaXN0c0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwibGlzdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImJ1YmJsZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2J1YmJsZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJCdWJibGVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJidWJibGVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJhc3Rlcm9pZHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2FzdGVyb2lkc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkFzdGVyb2lkc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiYXN0ZXJvaWRzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJsZW1taW5nc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbGVtbWluZ3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJMZW1taW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwibGVtbWluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImJvdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2JvdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLWFkbWluXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3MtYWRtaW5cIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NBZG1pbkN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLWFkbWluLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3MtZ2FtZVwiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLzpnYW1lXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzR2FtZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLWdhbWUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1zdGF0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLXN0YXRzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzU3RhdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1zdGF0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1nb29nbGVcIiwge1xyXG4gICAgICB1cmw6IFwiL2dvb2dsZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpHb29nbGVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvZ29vZ2xlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWxvZ29zXCIsIHtcclxuICAgICAgdXJsOiBcIi9sb2dvc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpMb2dvc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9sb2dvcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1hbmltYWxzXCIsIHtcclxuICAgICAgdXJsOiBcIi9hbmltYWxzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekFuaW1hbHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvYW5pbWFscy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1za2VsZXRvbnNcIiwge1xyXG4gICAgICB1cmw6IFwiL3NrZWxldG9uc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpTa2VsZXRvbnNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvc2tlbGV0b25zLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LW1vdmllc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbW92aWVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpek1vdmllc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9tb3ZpZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImNoYXJhZGVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9jaGFyYWRlc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkNoYXJhZGVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvY2hhcmFkZXMuaHRtbFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7XHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgcmVxdWlyZUJhc2U6IGZhbHNlLFxyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdXZWJTb2NrZXRTdmMnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcclxuICBmdW5jdGlvbiB3ZWJzb2NrZXRIb3N0KCkge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcclxuICAgICAgcmV0dXJuIFwid3NzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIndzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBjb25uZWN0aW9uO1xyXG4gIHZhciBjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQod2Vic29ja2V0SG9zdCgpKTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjb25uZWN0ZWQnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjbG9zZWQuIFJlY29ubmVjdGluZy4uLicpO1xyXG4gICAgICAkdGltZW91dChjb25uZWN0LCAxMDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUgKyBcIiAtIFN0YXRlOiBcIiArIGNvbm5lY3Rpb24ucmVhZHlTdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnd3M6JyArIHBheWxvYWQudG9waWMsIHBheWxvYWQuZGF0YSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc2VuZCA9IGZ1bmN0aW9uICh0b3BpYywgZGF0YSkge1xyXG4gICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh7dG9waWM6IHRvcGljLCBkYXRhOiBkYXRhfSk7XHJcbiAgICBjb25uZWN0aW9uLnNlbmQoanNvbik7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5jb25uZWN0ID0gY29ubmVjdDtcclxuXHJcbn0pLnJ1bihmdW5jdGlvbiAoV2ViU29ja2V0U3ZjKSB7XHJcbiAgV2ViU29ja2V0U3ZjLmNvbm5lY3QoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmRpcmVjdGl2ZShcImNsaWNrT3V0c2lkZVwiLCBmdW5jdGlvbiAoJGRvY3VtZW50KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc3RyaWN0OiBcIkFcIixcclxuICAgIHNjb3BlOiB7XHJcbiAgICAgIGNsaWNrT3V0c2lkZTogXCImXCIsXHJcbiAgICB9LFxyXG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAkZG9jdW1lbnQub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlbCAhPT0gZS50YXJnZXQgJiYgIWVsWzBdLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9zY29wZS4kcGFyZW50LnNldFNlbGVjdGVkTGlzdCgpO1xyXG4gICAgICAgICAgICBzY29wZS4kZXZhbChzY29wZS5jbGlja091dHNpZGUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG5cdC5kaXJlY3RpdmUoJ2hlYWQnLCBbXHJcblx0XHQnJHJvb3RTY29wZScsXHJcblx0XHQnJHN0YXRlJyxcclxuXHRcdCckY29tcGlsZScsXHJcblx0XHQnJGludGVycG9sYXRlJyxcclxuXHRcdGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsICRjb21waWxlLCAkaW50ZXJwb2xhdGUpIHtcclxuXHJcblx0XHRcdHZhciBnZXRTdHlsZSA9IGZ1bmN0aW9uIGdldFN0eWxlKHRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHJcblx0XHRcdFx0dmFyIHN0eWxlID0ge1xyXG5cdFx0XHRcdFx0aHJlZjogdGVtcGxhdGVTdHlsZVVybCxcclxuXHRcdFx0XHRcdHJlbDogJ3N0eWxlc2hlZXQnXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0aWYgKHN0eWxlLmhyZWYubWF0Y2goL1xcLmxlc3MkLykpIHtcclxuXHRcdFx0XHRcdHN0eWxlLnJlbCA9ICdzdHlsZXNoZWV0L2xlc3MnO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIHN0eWxlO1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiBnZXRTdHlsZXMoc3RhdGUpIHtcclxuXHJcblx0XHRcdFx0dmFyIHN0YXRlcyA9IHt9O1xyXG5cclxuXHRcdFx0XHQvL0NoZWNrIHN0YXRlIGZvciBzdHlsZXNcclxuXHRcdFx0XHR3aGlsZSAoc3RhdGUubmFtZSAhPT0gJycpIHtcclxuXHRcdFx0XHRcdHZhciBwYXJlbnQgPSAkc3RhdGUuZ2V0KCdeJywgc3RhdGUpO1xyXG5cclxuXHRcdFx0XHRcdC8vSW5pdGlhdGUgb3VyIHZpZXcgbGlzdFxyXG5cdFx0XHRcdFx0aWYgKCFzdGF0ZXNbcGFyZW50Lm5hbWVdKSB7XHJcblx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV0gPSB7fTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NoZWNrIHRoZSB0ZW1wbGF0ZVN0eWxlXHJcblx0XHRcdFx0XHRpZiAoc3RhdGUudGVtcGxhdGVTdHlsZVVybCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1twYXJlbnQubmFtZV1bJyddKSB7XHJcblx0XHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXVsnJ10gPSBnZXRTdHlsZShzdGF0ZS50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ2hlY2sgdmlld3NcclxuXHRcdFx0XHRcdGlmIChzdGF0ZS52aWV3cykge1xyXG5cdFx0XHRcdFx0XHRfLmZvckVhY2goc3RhdGUudmlld3MsIGZ1bmN0aW9uICh2aWV3LCBrZXkpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBoYXZlIGEgc3R5bGVcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXZpZXcudGVtcGxhdGVTdHlsZVVybCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBhcmUgdGFyZ2V0aW5nIHNvbWUgcGFyZW50XHJcblx0XHRcdFx0XHRcdFx0aWYgKChrZXkgPSBrZXkuc3BsaXQoJ0AnKSlbMV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgaGF2ZSBzdHlsZXMgZm9yIHRoYXQgcGFyZW50XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1trZXlbMV1dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlc1trZXlbMV1dID0ge307XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Ly9QbGFjZSB0aGUgc3R5bGUgb24gc29tZSBwYXJlbnQncyB2aWV3XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1trZXlbMV1dW2tleVswXV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGVzW2tleVsxXV1ba2V5WzBdXSA9IGdldFN0eWxlKHZpZXcudGVtcGxhdGVTdHlsZVVybCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9QbGFjZSB0aGUgc3R5bGUgb24gb3VyIHBhcmVudCdzIHZpZXdcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdW2tleVswXV0gPSBnZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9Db250aW51ZSB3aXRoIHRoZSBwYXJlbnRcclxuXHRcdFx0XHRcdHN0YXRlID0gcGFyZW50O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9GbGF0dGVuIHRoZSBsaXN0XHJcblx0XHRcdFx0dmFyIGZsYXQgPSBbXTtcclxuXHRcdFx0XHRfLmZvckVhY2goc3RhdGVzLCBmdW5jdGlvbiAodmlld3MpIHtcclxuXHJcblx0XHRcdFx0XHRfLmZvckVhY2godmlld3MsIGZ1bmN0aW9uIChzdHlsZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFfLmluY2x1ZGVzKGZsYXQsIHN0eWxlKSkge1xyXG5cdFx0XHRcdFx0XHRcdGZsYXQucHVzaChzdHlsZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vUmV2ZXJzZSBpdCBzbyB3ZSBoYXZlIGEgcHJvcGVyIGhpZXJhcmNoeVxyXG5cdFx0XHRcdGZsYXQucmV2ZXJzZSgpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZmxhdDtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRcdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtKSB7XHJcblxyXG5cdFx0XHRcdFx0c2NvcGUudGVtcGxhdGVTdHlsZXMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHR2YXIgaHRtbCA9ICc8bGluayBuZy1hdHRyLXJlbD1cInt7c3R5bGUucmVsfX1cIiBuZy1yZXBlYXQ9XCJzdHlsZSBpbiB0ZW1wbGF0ZVN0eWxlc1wiIG5nLWhyZWY9XCJ7e3N0eWxlLmhyZWZ9fVwiPic7XHJcblxyXG5cdFx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvXFx7XFx7L2csICRpbnRlcnBvbGF0ZS5zdGFydFN5bWJvbCgpKTtcclxuXHRcdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcfVxcfS9nLCAkaW50ZXJwb2xhdGUuZW5kU3ltYm9sKCkpO1xyXG5cclxuXHRcdFx0XHRcdGVsZW0uYXBwZW5kKCRjb21waWxlKGh0bWwpKHNjb3BlKSk7XHJcblxyXG5cdFx0XHRcdFx0JHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzY29wZS50ZW1wbGF0ZVN0eWxlcyA9IGdldFN0eWxlcyh0b1N0YXRlKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdH1cclxuXHRdKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkFwcEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgTGFuZ3VhZ2VTdmMsIFVzZXJTdmMpIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiJWNZb3Ugc25lYWt5IGJ1Z2dlciFcIixcclxuICAgIFwiZm9udDogMmVtIHNhbnMtc2VyaWY7IGNvbG9yOiBEb2RnZXJCbHVlOyB0ZXh0LXNoYWRvdzogMnB4IDAgMCAjNDQ0LCAtMnB4IDAgMCAjNDQ0LCAwIDJweCAwICM0NDQsIDAgLTJweCAwICM0NDQsIDFweCAxcHggIzQ0NCwgLTFweCAtMXB4IDAgIzQ0NCwgMXB4IC0xcHggMCAjNDQ0LCAtMXB4IDFweCAwICM0NDQ7XCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiSSdtIGdsYWQgeW91J3JlIGN1cmlvdXMgd2hldGhlciBzb21ldGhpbmcgaXMgcG9wcGluZyB1cCBpbiBoZXJlLiBJJ20gYSBiaXQgb2YgYSBzdGlja2xlciB3aGVuIGl0IGNvbWVzIHRvIG1lc3NhZ2VzIGluIHRoZSBjb25zb2xlIHNvIEkgdHJ5IHRvIG1ha2Ugc3VyZSBvbmx5IHRoaW5ncyBJIHdhbnQgYXJlIHZpc2libGUuIFRoYXQgYmVpbmcgc2FpZCwgaWYgdGhlcmUgaXMgYSBiaWcgZXJyb3IgaGVyZSwgSSB3b3VsZCByZWFsbHkgYXBwcmVjaWF0ZSB5b3UgdGVsbGluZyBtZSBzbyBJIGNhbiBnZXQgcmlkIG9mIGl0IVwiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIlRoZSBjb2RlIGZvciBteSByZXN1bWUgaXMgaG9zdGVkIG9uIEdpdGh1YiBpZiB5b3UgcmVhbGx5IHdhbnQgdG8gZ28gaW50byBhbGwgdGhpcyEgPT4gaHR0cHM6Ly9naXRodWIuY29tL0ZsYW5kZXJzQnVyZ2VyL3Jlc3VtZVwiLFxyXG4gICk7XHJcblxyXG4gIC8qXHJcbiAgICAkKGRvY3VtZW50KS5iaW5kKFwia2V5dXAga2V5ZG93blwiLCBmdW5jdGlvbihlKXtcclxuICAgICAgaWYoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PSA4MCl7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgKi9cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5sb2FkaW5nXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuY2hlY2tib3gtbWVudVwiKS5vbihcImNoYW5nZVwiLCBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KFwibGlcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIiwgdGhpcy5jaGVja2VkKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5hbGxvdy1mb2N1c1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnRoZW1lQ291bnRlciA9IDY7XHJcbiAgJHNjb3BlLnRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAkc2NvcGUueWVhciA9ICRzY29wZS50b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICRzY29wZS5yYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcclxuXHJcbiAgJHNjb3BlLmZsaXBUaGVtZSA9ICgpID0+IHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5zaG93KCk7XHJcbiAgICAkKFwiLmNvbnRlbnRcIikuaGlkZSgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgICB9LCA4MDApO1xyXG4gICAgJHNjb3BlLnRoZW1lQ291bnRlciA9ICRzY29wZS50aGVtZUNvdW50ZXIgPCA2ID8gJHNjb3BlLnRoZW1lQ291bnRlciArIDEgOiAoJHNjb3BlLnRoZW1lQ291bnRlciA9IDEpO1xyXG4gIH07XHJcblxyXG4gICQuZ2V0SlNPTihcIi9za2lsbHMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLnNraWxscyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuZW5hYmxlZDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvaG9iYmllcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuaG9iYmllcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9leHBlcmllbmNlLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5qb2JzID0gZGF0YTtcclxuICAgICRzY29wZS5qb2JzLmZvckVhY2goKGpvYikgPT4ge1xyXG4gICAgICBqb2Iuc3RhcnREYXRlID0gbmV3IERhdGUoam9iLnN0YXJ0RGF0ZSk7XHJcbiAgICAgIGlmIChqb2IuZW5kRGF0ZSkgam9iLmVuZERhdGUgPSBuZXcgRGF0ZShqb2IuZW5kRGF0ZSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2NoYXJhZGVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5jaGFyYWRlcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5nZXRUaW1lU3BhbiA9IChqb2IpID0+IHtcclxuICAgIHJldHVybiBqb2Iuc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyAoam9iLmVuZERhdGUgPyBcIiAtIFwiICsgam9iLmVuZERhdGUuZ2V0RnVsbFllYXIoKSA6IFwiIC0gVG9kYXlcIik7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmxhbmd1YWdlcyA9IExhbmd1YWdlU3ZjLmxhbmd1YWdlcztcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBMYW5ndWFnZVN2Yy5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0TGFuZ3VhZ2UgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5ob3ZlcmRpdiA9IChlLCBkaXZpZCkgPT4ge1xyXG4gICAgdmFyIGxlZnQgPSBlLmNsaWVudFggKyBcInB4XCI7XHJcbiAgICB2YXIgdG9wID0gZS5jbGllbnRZICsgMjAgKyBcInB4XCI7XHJcblxyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdmlkKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcImxlZnRcIiwgbGVmdCk7XHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcInRvcFwiLCB0b3ApO1xyXG5cclxuICAgICQoXCIjXCIgKyBkaXZpZCkudG9nZ2xlKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikge1xyXG4gICAgVXNlclN2Yy5sb2dpbih3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGxvZ2luKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8sIHVzZXIpID0+IHtcclxuICAgIGxvZ2luKHVzZXIpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XHJcbiAgICBpZiAoISRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIgPSB1c2VyLl9pZDtcclxuICAgICAgJHNjb3BlLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUpO1xyXG4gICAgICAkc2NvcGUuJGJyb2FkY2FzdChcImxvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS4kb24oXCJ1cGRhdGVcIiwgKF8sIHVzZXIpID0+IHtcclxuICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlID0gbmV3IERhdGUoJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSk7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkaW5nXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5zaG93KCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkZWRcIiwgKF8sIHVzZXIpID0+IHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIiNsb2FkaW5nLWljb25cIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmxvZ291dCA9ICgpID0+IHtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgIC5hdXRoKClcclxuICAgICAgLnNpZ25PdXQoKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dvdXRcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgbW9udGhzID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpICsgXCItXCIgKyBtb250aHNbZGF0ZS5nZXRNb250aCgpXSArIFwiLVwiICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQXN0ZXJvaWRzQ3RybFwiLCBmdW5jdGlvbiAoJGxvY2F0aW9uLCAkc2NvcGUsIEdhbWVTdmMpIHtcclxuICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzdGVyb2lkcy1wYWdlXCIpO1xyXG4gIGlmICghY2FudmFzKSB7XHJcbiAgICAkbG9jYXRpb24ucGF0aChcIi9ob21lXCIpO1xyXG4gICAgcmV0dXJuIGFsZXJ0KFwiXCIpO1xyXG4gIH1cclxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIGN0eC5mb250ID0gXCIzMHB4IENvbWljIFNhbnMgTVNcIjtcclxuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjb25zdCBzaG90cyA9IHt9O1xyXG4gIGNvbnN0IGFzdGVyb2lkcyA9IHt9O1xyXG4gIGNvbnN0IHBvd2VydXBzID0ge307XHJcbiAgY29uc3QgZXhwbG9zaW9ucyA9IHt9O1xyXG4gIGNvbnN0IG1hcCA9IHt9O1xyXG4gIGNvbnN0IHNwYWNlcGljcyA9IDEwO1xyXG4gIGNvbnN0IHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICBjb25zdCBwb3dlcnVwVHlwZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwic3BlZWRcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIk1heCBTcGVlZCDih6dcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgICAgc2l6ZTogWzE0LCAzNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLm1heFNwZWVkICs9IDEwMDtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiY29vbGRvd25cIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIkNvb2xkb3duIOKHqVwiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogMyxcclxuICAgICAgICBzaXplOiBbMTcsIDE3XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLmNvb2xkb3duVGltZSAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwicmFuZ2VcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIkZpcmluZyBSYW5nZSDih6dcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA0LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzMwLCA4XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAucmFuZ2UgKz0gNTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwic2hpZWxkXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJTaGllbGRcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA1LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzE5LCAxOV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnNoaWVsZCA9IHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIm51a2VcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIk51a2VcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgICAgc2l6ZTogWzE1LCAxNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICAgIGFzdGVyb2lkc1tpXS5leHBsb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYXduQXN0ZXJvaWRzKDUpO1xyXG4gICAgICB9LFxyXG4gICAgfSAvKlxyXG4gICAgJ3NpZGVfY2Fubm9ucycsXHJcbiAgICAnbGFzZXInLFxyXG4gICAgJ3NoaWVsZCcsXHJcbiAgICAnbGlmZScsXHJcbiAgICAnbWlzc2lsZXMnLFxyXG4gICAgJ251a2UnXHJcbiAgICAqLyxcclxuICBdO1xyXG4gIHBvd2VydXBUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChwb3dlcnVwLCBpLCBhcnJheSkge1xyXG4gICAgYXJyYXlbaV0uaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL1wiICsgcG93ZXJ1cC5uYW1lICsgXCIucG5nXCI7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBleHBsb3Npb25JbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGV4cGxvc2lvbkltYWdlLnNyYyA9IFwiYXN0ZXJvaWRzL2V4cGxvc2lvbi5wbmdcIjtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImtleWRvd25cIixcclxuICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIHRydWUsXHJcbiAgKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwia2V5dXBcIixcclxuICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB0cnVlLFxyXG4gICk7XHJcblxyXG4gICRzY29wZS5oaWdoc2NvcmUgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBldmFsdWF0ZUtleXMoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICAvL1NwYWNlXHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNob290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzddKSB7XHJcbiAgICAgICAgLy9MZWZ0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMzYwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gLT0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOV0pIHtcclxuICAgICAgICAvL1JpZ2h0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMzYwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gKz0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOF0pIHtcclxuICAgICAgICAvL1VwIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA8PSBzcGFjZXNoaXAubWF4U3BlZWQpIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCArPSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkLS07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbNDBdKSB7XHJcbiAgICAgICAgLy9Eb3duIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCAtPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICBzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTcGFjZXNoaXAoKSB7XHJcbiAgICB0aGlzLndpZHRoID0gNTA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDUwO1xyXG4gICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgIHRoaXMucmFuZ2UgPSA4MDtcclxuICAgIHRoaXMuY2Fubm9uID0ge1xyXG4gICAgICB4OiB0aGlzLndpZHRoIC8gMiAtIDQuNSxcclxuICAgICAgeTogdGhpcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgKiAwLjA3ODEyNSxcclxuICAgIH07XHJcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcclxuICAgIHRoaXMuY29vbGRvd25UaW1lID0gMjA7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW2NhbnZhcy53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDJdO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL3NwYWNlc2hpcC5wbmdcIjtcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5tYXhTcGVlZCA9IDEwMDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gMDtcclxuICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG5cclxuICAgIHRoaXMuc2hvb3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuY29vbGRvd24gPSB0aGlzLmNvb2xkb3duVGltZTtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgc2hvdHNbaWRdID0gbmV3IFNob3QoaWQsIHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguYXJjKHRoaXMucG9zaXRpb25bMF0gKyB0aGlzLndpZHRoIC8gMiwgdGhpcy5wb3NpdGlvblsxXSArIHRoaXMuaGVpZ2h0IC8gMiwgMzAsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMzUsIDIzNywgODYsIDAuNSlcIjtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYig2NiwgMTY4LCAzNiwgMC44KVwiO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgICAgdmFyIGFzdGVyb2lkID0gYXN0ZXJvaWRzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoYXN0ZXJvaWQsIHRoaXMpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zaGllbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYXN0ZXJvaWQuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdhbWVPdmVyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICBpZiAodGhpcy5jb29sZG93biA+IDApIHtcclxuICAgICAgICB0aGlzLmNvb2xkb3duLS07XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTaG90KGlkLCBzcGFjZXNoaXApIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbXHJcbiAgICAgIHNwYWNlc2hpcC5wb3NpdGlvblswXSArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi54ICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnggKiBNYXRoLmNvcygoKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKSxcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzFdICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnkgK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueSAqIE1hdGguc2luKCgoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSkgLyAxODApLFxyXG4gICAgXTtcclxuICAgIHRoaXMud2lkdGggPSA5O1xyXG4gICAgdGhpcy5oZWlnaHQgPSAxNTtcclxuICAgIHRoaXMuYW5nbGUgPSBzcGFjZXNoaXAuYW5nbGU7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gc3BhY2VzaGlwLnJvdGF0aW9uO1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwYWNlc2hpcC5zcGVlZCArIDUwMDtcclxuICAgIHRoaXMubGlmZXNwYW4gPSBzcGFjZXNoaXAucmFuZ2U7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvc2hvdC5wbmdcIjtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBBc3Rlcm9pZChpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy53aWR0aCA9IE1hdGgucmFuZG9tKCkgKiA1MCArIDIwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMucm90YXRpb25TcGVlZCA9IE1hdGgucmFuZG9tKCkgKiA2IC0gMztcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMzAwICsgMjtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBcImFzdGVyb2lkcy9hc3Rlcm9pZFwiICsgKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDYpICsgMSkgKyBcIi5wbmdcIjtcclxuXHJcbiAgICB0aGlzLmV4cGxvZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGV4cGxvc2lvbnNbdGhpcy5pZF0gPSBuZXcgRXhwbG9zaW9uKHRoaXMpO1xyXG4gICAgICByZXR1cm4gZGVsZXRlIGFzdGVyb2lkc1t0aGlzLmlkXTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZDtcclxuICAgICAgaWYgKHRoaXMucm90YXRpb24gPiAzNjApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gdGhpcy5yb3RhdGlvbiAtIDM2MDtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnJvdGF0aW9uIDwgMCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSAzNjAgKyB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgICB2YXIgc2hvdCA9IHNob3RzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoc2hvdCwgdGhpcykpIHtcclxuICAgICAgICAgIHRoaXMuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgdmFyIHBvaW50cyA9IE1hdGguZmxvb3IoKHNob3Quc3BlZWQgLSA1MDApIC8gMTAgKyA3MCAtIHRoaXMud2lkdGgpO1xyXG4gICAgICAgICAgaWYgKE1hdGguZmxvb3IoKHBvaW50cyArICRzY29wZS5zY29yZSkgLyAxMDApID4gTWF0aC5mbG9vcigkc2NvcGUuc2NvcmUgLyAxMDApKSB7XHJcbiAgICAgICAgICAgIHNwYXduUG93ZXJ1cCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJHNjb3BlLnNjb3JlICs9IHBvaW50cztcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIGRlbGV0ZSBzaG90c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBFeHBsb3Npb24ob2JqZWN0KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW29iamVjdC5wb3NpdGlvblswXSwgb2JqZWN0LnBvc2l0aW9uWzFdXTtcclxuICAgIHRoaXMud2lkdGggPSBvYmplY3Qud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9iamVjdC5oZWlnaHQ7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5jeWNsZSA9IHtcclxuICAgICAgcm93czogNixcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgc2l6ZTogWzI1NiwgMjU2XSxcclxuICAgICAgaTogMCxcclxuICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgfTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSA0NztcclxuICAgIHRoaXMuaW1nID0gZXhwbG9zaW9uSW1hZ2U7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuY3ljbGUuaSsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gUG93ZXJ1cChpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wb3dlcnVwID0gcG93ZXJ1cFR5cGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvd2VydXBUeXBlcy5sZW5ndGgpXTtcclxuICAgIHRoaXMuY3ljbGUgPSB0aGlzLnBvd2VydXAuY3ljbGU7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gMTAwMDtcclxuICAgIGlmICh0aGlzLmN5Y2xlLnNpemVbMV0gPiB0aGlzLmN5Y2xlLnNpemVbMF0pIHtcclxuICAgICAgdGhpcy5oZWlnaHQgPSA0MDtcclxuICAgICAgdGhpcy53aWR0aCA9IE1hdGgucm91bmQoKHRoaXMuaGVpZ2h0IC8gdGhpcy5jeWNsZS5zaXplWzFdKSAqIHRoaXMuY3ljbGUuc2l6ZVswXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndpZHRoID0gNDA7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5yb3VuZCgodGhpcy53aWR0aCAvIHRoaXMuY3ljbGUuc2l6ZVswXSkgKiB0aGlzLmN5Y2xlLnNpemVbMV0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5pbWcgPSB0aGlzLnBvd2VydXAuaW1nO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDE1MCArIDUwO1xyXG4gICAgdmFyIGRlbGF5ID0gNTtcclxuICAgIHRoaXMubW92ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhpdChzcGFjZXNoaXAsIHRoaXMpKSB7XHJcbiAgICAgICAgJHNjb3BlLmFubm91bmNlID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2VtZW50ID0gdGhpcy5wb3dlcnVwLmFubm91bmNlbWVudDtcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB0aGlzLnBvd2VydXAuYWN0aXZhdGUoc3BhY2VzaGlwKTtcclxuICAgICAgICByZXR1cm4gZGVsZXRlIHBvd2VydXBzW3RoaXMuaWRdO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKGRlbGF5IDw9IDApIHtcclxuICAgICAgICBpZiAodGhpcy5jeWNsZS5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLmktLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsYXkgPSA1O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGF5LS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlKG9iamVjdCkge1xyXG4gICAgb2JqZWN0LnBvc2l0aW9uWzBdICs9IChvYmplY3Quc3BlZWQgLyAxMDApICogTWF0aC5jb3MoKChvYmplY3QuYW5nbGUgLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBvYmplY3QucG9zaXRpb25bMV0gKz0gKG9iamVjdC5zcGVlZCAvIDEwMCkgKiBNYXRoLnNpbigoKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIGlmIChvYmplY3QucG9zaXRpb25bMF0gPiBjYW52YXMud2lkdGgpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzBdID0gLW9iamVjdC53aWR0aDtcclxuICAgIH0gZWxzZSBpZiAob2JqZWN0LnBvc2l0aW9uWzBdIDwgLW9iamVjdC53aWR0aCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMF0gPSBjYW52YXMud2lkdGg7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0LnBvc2l0aW9uWzFdID4gY2FudmFzLmhlaWdodCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMV0gPSAtb2JqZWN0LmhlaWdodDtcclxuICAgIH0gZWxzZSBpZiAob2JqZWN0LnBvc2l0aW9uWzFdIDwgLW9iamVjdC5oZWlnaHQpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzFdID0gY2FudmFzLmhlaWdodDtcclxuICAgIH1cclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHgudHJhbnNsYXRlKG9iamVjdC5wb3NpdGlvblswXSwgb2JqZWN0LnBvc2l0aW9uWzFdKTtcclxuICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LndpZHRoIC8gMiwgb2JqZWN0LmhlaWdodCAvIDIpO1xyXG4gICAgY3R4LnJvdGF0ZSgob2JqZWN0LnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgaWYgKG9iamVjdC5jeWNsZSkge1xyXG4gICAgICB2YXIgY29sdW1uID0gb2JqZWN0LmN5Y2xlLmkgJSBvYmplY3QuY3ljbGUuY29sdW1ucztcclxuICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3Iob2JqZWN0LmN5Y2xlLmkgLyBvYmplY3QuY3ljbGUuY29sdW1ucyk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgb2JqZWN0LmltZyxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVswXSAqIGNvbHVtbixcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVsxXSAqIHJvdyxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVswXSxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVsxXSxcclxuICAgICAgICAtb2JqZWN0LndpZHRoIC8gMixcclxuICAgICAgICAtb2JqZWN0LmhlaWdodCAvIDIsXHJcbiAgICAgICAgb2JqZWN0LndpZHRoLFxyXG4gICAgICAgIG9iamVjdC5oZWlnaHQsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAob2JqZWN0LmN5Y2xlLmkgPD0gMCkge1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5pID0gMDtcclxuICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChvYmplY3QuY3ljbGUuaSA+PSBvYmplY3QuY3ljbGUuY29sdW1ucyAqIG9iamVjdC5jeWNsZS5yb3dzKSB7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSBvYmplY3QuY3ljbGUuY29sdW1ucyAqIG9iamVjdC5jeWNsZS5yb3dzIC0gMTtcclxuICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2Uob2JqZWN0LmltZywgLW9iamVjdC53aWR0aCAvIDIsIC1vYmplY3QuaGVpZ2h0IC8gMiwgb2JqZWN0LndpZHRoLCBvYmplY3QuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgc3BhY2VzaGlwO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgICRzY29wZS5wbGF5aW5nID0gdHJ1ZTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGFjZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwYWNlcGljcyk7XHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICBzcGFjZXNoaXAgPSBuZXcgU3BhY2VzaGlwKCk7XHJcbiAgICAkc2NvcGUuc2NvcmUgPSAwO1xyXG4gICAgc3Bhd25Bc3Rlcm9pZHMoNSk7XHJcbiAgICBhdXRvU3Bhd24oKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEVudHJ5UG9zaXRpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIGdyaWRYID0gTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICB2YXIgZ3JpZFkgPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciB4LFxyXG4gICAgICB5ID0gMDtcclxuICAgIGlmIChncmlkWCA+PSAxKSB7XHJcbiAgICAgIHggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xyXG4gICAgICBpZiAoeSA+PSAxKSB7XHJcbiAgICAgICAgeSA9IDAgLSBoZWlnaHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeSA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcclxuICAgICAgaWYgKGdyaWRZID49IDEpIHtcclxuICAgICAgICB4ID0gMCAtIHdpZHRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHggPSBjYW52YXMud2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbeCwgeV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoaXQob2JqZWN0MSwgb2JqZWN0Mikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgb2JqZWN0MS5wb3NpdGlvblswXSA8IG9iamVjdDIucG9zaXRpb25bMF0gKyBvYmplY3QyLndpZHRoICYmXHJcbiAgICAgIG9iamVjdDIucG9zaXRpb25bMF0gPCBvYmplY3QxLnBvc2l0aW9uWzBdICsgb2JqZWN0MS53aWR0aCAmJlxyXG4gICAgICBvYmplY3QxLnBvc2l0aW9uWzFdIDwgb2JqZWN0Mi5wb3NpdGlvblsxXSArIG9iamVjdDIuaGVpZ2h0ICYmXHJcbiAgICAgIG9iamVjdDIucG9zaXRpb25bMV0gPCBvYmplY3QxLnBvc2l0aW9uWzFdICsgb2JqZWN0MS5oZWlnaHRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhdXRvU3Bhd24oKSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoYXN0ZXJvaWRzKS5sZW5ndGggPCAyMDApIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgYXN0ZXJvaWRzW2lkXSA9IG5ldyBBc3Rlcm9pZChpZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYXV0b1NwYXduKCk7XHJcbiAgICAgIH0sIHNwYXduSW50ZXJ2YWwoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkludGVydmFsKCkge1xyXG4gICAgaWYgKCRzY29wZS5zY29yZSA8IDEwMDApIHtcclxuICAgICAgcmV0dXJuIDEwMDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDIwMDApIHtcclxuICAgICAgcmV0dXJuIDkwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgMzAwMCkge1xyXG4gICAgICByZXR1cm4gODAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA0MDAwKSB7XHJcbiAgICAgIHJldHVybiA3MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDUwMDApIHtcclxuICAgICAgcmV0dXJuIDYwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNjAwMCkge1xyXG4gICAgICByZXR1cm4gNTAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA3MDAwKSB7XHJcbiAgICAgIHJldHVybiA0MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDgwMDApIHtcclxuICAgICAgcmV0dXJuIDMwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAyMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkFzdGVyb2lkcyhhbW91bnQpIHtcclxuICAgIHZhciBpID0gMDtcclxuICAgIGRvIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgYXN0ZXJvaWRzW2lkXSA9IG5ldyBBc3Rlcm9pZChpZCk7XHJcbiAgICB9IHdoaWxlIChpKysgPD0gYW1vdW50KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduUG93ZXJ1cCgpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhwb3dlcnVwcykubGVuZ3RoIDwgMykge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBwb3dlcnVwc1tpZF0gPSBuZXcgUG93ZXJ1cChpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnYW1lT3ZlcigpIHtcclxuICAgICRzY29wZS5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO1xyXG4gICAgfVxyXG4gICAgc2hvdHMgPSB7fTtcclxuICAgIGlmICgkc2NvcGUubG9nZ2VkSW4pIHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzIDwgJHNjb3BlLnNjb3JlKSB7XHJcbiAgICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyLmhpZ2hzY29yZS5hc3Rlcm9pZHMgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgICAgR2FtZVN2Yy5zZXRIaWdoc2NvcmUoXCJhc3Rlcm9pZHNcIiwgJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCwgJHNjb3BlLnNjb3JlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdoc2NvcmUgPCAkc2NvcGUuc2NvcmUpIHtcclxuICAgICAgICAkc2NvcGUuaGlnaHNjb3JlID0gJHNjb3BlLnNjb3JlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTdGFydCBsaXN0ZW5pbmcgdG8gcmVzaXplIGV2ZW50cyBhbmRcclxuICAvLyBkcmF3IGNhbnZhcy5cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgIC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcbiAgICAvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuICAgIC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuICAgIC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcbiAgICByZXNpemVDYW52YXMoKTtcclxuICB9XHJcbiAgLy8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG4gIC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG4gIC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG4gIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTAgOiAxMDUpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZSgpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuXHJcbiAgdmFyIHRhbGx5ID0gMDtcclxuICB2YXIgZGlyZWN0aW9uID0gdHJ1ZTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgaWYgKHNob3RzW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvdHNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgIGFzdGVyb2lkc1tpXS5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gcG93ZXJ1cHMpIHtcclxuICAgICAgcG93ZXJ1cHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGV4cGxvc2lvbnMpIHtcclxuICAgICAgaWYgKGV4cGxvc2lvbnNbaV0ubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBleHBsb3Npb25zW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV4cGxvc2lvbnNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBldmFsdWF0ZUtleXMoKTtcclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzcGFjZXNoaXAubW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIGNhbnZhcy53aWR0aCwgMCk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjBcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjI1XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMC41XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMC43NVwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjEuMFwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgICAgY3R4LmZvbnQgPSBcIjYwcHggTW9ub3RvblwiO1xyXG4gICAgICBjdHguZmlsbFRleHQoXCJBc3Rlcm9pZHNcIiwgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIkFzdGVyb2lkc1wiKS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcclxuICAgICAgY3R4LmZvbnQgPSBcIjIwcHggQWxkcmljaFwiO1xyXG4gICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgXCJQcmVzcyBzcGFjZSB0byBzdGFydFwiLFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoXCJQcmVzcyBzcGFjZSB0byBzdGFydFwiKS53aWR0aCAvIDIsXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCAvIDIgKyAyMCxcclxuICAgICAgKTtcclxuICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgIFwiRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyXCIsXHJcbiAgICAgICAgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIkRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlclwiKS53aWR0aCAvIDIsXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCAtIDMwLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGFsbHkgKz0gZGlyZWN0aW9uID8gMSA6IC0xO1xyXG4gICAgaWYgKHRhbGx5ID4gMTAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMTAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAodGFsbHkgPCAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMDtcclxuICAgICAgZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuICB9XHJcblxyXG4gICRzY29wZS5zcGFjZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImFzdGVyb2lkcy9zcGFjZScgKyBzcGFjZSArICcuanBnXCIpJyxcclxuICAgIH07XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignQnViYmxlc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlcy1wYWdlJyk7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIHZhciBidWJibGVzID0gW107XHJcbiAgdmFyIGNvbG9ycyA9IFsnI2ZmYzMwMCcsJyNmZjU3MzMnLCcjYzcwMDM5JywnIzkwMGMzZScsJyM1NzE4NDUnXTtcclxuXHJcbiAgZnVuY3Rpb24gQnViYmxlKCkge1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDA7XHJcbiAgICB0aGlzLnJhZGl1cyA9IDE7XHJcbiAgICB0aGlzLmV4cGFuZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICB0aGlzLmNpcmN1bWZlcmVuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA1MCkgKyA1O1xyXG4gICAgdGhpcy5tYXhSYWRpdXMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyMDApICsgMjA7XHJcbiAgICB0aGlzLnggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGgpO1xyXG4gICAgdGhpcy55ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodCk7XHJcbiAgICB0aGlzLnZ4ID0gKE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xKTtcclxuICAgIHRoaXMudnkgPSAoTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGJ1YmJsZXMuZm9yRWFjaChmdW5jdGlvbihidWJibGUpIHtcclxuICAgICAgdmFyIGNvbG9yID0gY29sb3JzW01hdGgucm91bmQoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyhidWJibGUueCwgYnViYmxlLnksIGJ1YmJsZS5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yc1tNYXRoLnJvdW5kKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcnNbY29sb3JzLmxlbmd0aCAtIE1hdGgucm91bmQoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSBidWJibGUuY2lyY3VtZmVyZW5jZSAqIGJ1YmJsZS5yYWRpdXMgLyBidWJibGUubWF4UmFkaXVzO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbHRlckJ1YmJsZXMoKSB7XHJcbiAgICBidWJibGVzLnB1c2gobmV3IEJ1YmJsZSgpKTtcclxuICAgIGJ1YmJsZXMgPSBidWJibGVzLmZpbHRlcihmdW5jdGlvbiAoYnViYmxlKSB7XHJcbiAgICAgIGlmIChidWJibGUucmFkaXVzID09PSBidWJibGUubWF4UmFkaXVzKSB7XHJcbiAgICAgICAgYnViYmxlLmV4cGFuZGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1YmJsZS54ICs9IGJ1YmJsZS52eCAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnkgKz0gYnViYmxlLnZ5ICogYnViYmxlLnNwZWVkO1xyXG4gICAgICBidWJibGUucmFkaXVzICs9IChidWJibGUuZXhwYW5kaW5nID8gMSA6IC0xKTtcclxuICAgICAgcmV0dXJuIGJ1YmJsZS5yYWRpdXMgPiAwO1xyXG4gICAgfSk7XHJcbiAgICBkcmF3KCk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmlsdGVyQnViYmxlcyk7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmlsdGVyQnViYmxlcyk7XHJcblxyXG5cclxuXHQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0Ly8gU3RhcnQgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgYW5kXHJcblx0XHQvLyBkcmF3IGNhbnZhcy5cclxuXHRcdGluaXRpYWxpemUoKTtcclxuXHJcblx0XHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0XHQvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG5cdFx0XHQvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuXHRcdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG5cdFx0XHQvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG5cdFx0XHRyZXNpemVDYW52YXMoKTtcclxuXHRcdH1cclxuXHRcdC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuXHRcdC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG5cdFx0Ly8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcblx0XHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcblx0XHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1NSA6IDExMSk7XHJcblx0XHR9XHJcblxyXG5cdH0pKCk7XHJcblxyXG5cclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQ2hhcmFkZXNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAkc2NvcGUuc2VsZWN0V29yZCA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgJHNjb3BlLndvcmQgPSAkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICRzY29wZS5jaGFyYWRlc1tjYXRlZ29yeV0ubGVuZ3RoKV07XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJDb250YWN0Q3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBFbWFpbFN2Yykge1xyXG4gICRzY29wZS5vcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNwYW1cIixcclxuICAgICAgdGV4dDogXCJJIGFtIGEgc3BhbSBib3QgYW5kIGF1dG9tYXRpY2FsbHkgY2hlY2sgdGhlIGZpcnN0IG9wdGlvbiBJIGZpbmQhXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk9wcG9ydHVuaXR5XCIsXHJcbiAgICAgIHRleHQ6IFwiWW91IHNlZW0gdG8gaGF2ZSB0aGUgc2tpbGxzIEkgc2VlaywgSSdkIGxpa2UgdG8gdGFsayBhYm91dCBzb21lIG9wcG9ydHVuaXRpZXMuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJlc3VtZVwiLFxyXG4gICAgICB0ZXh0OiBcIkkgZGlnIHRoZSByZXN1bWUsIGhvdyBkaWQgeW91IG1ha2UgaXQ/XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk90aGVyXCIsXHJcbiAgICAgIHRleHQ6IFwiU3VtdGluIGVsc2UhXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gICRzY29wZS5jb250YWN0ID0ge1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgICBhYm91dDogXCJcIixcclxuICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUuc2VuZGluZyA9IHRydWU7XHJcbiAgICBFbWFpbFN2Yy5zZW5kKHtcclxuICAgICAgZW1haWw6ICRzY29wZS5jb250YWN0LmVtYWlsLFxyXG4gICAgICBuYW1lOiAkc2NvcGUuY29udGFjdC5uYW1lLFxyXG4gICAgICBwaG9uZTogJHNjb3BlLmNvbnRhY3QucGhvbmUsXHJcbiAgICAgIGFib3V0OiAkc2NvcGUuY29udGFjdC5hYm91dCxcclxuICAgICAgbWVzc2FnZTogJHNjb3BlLmNvbnRhY3QubWVzc2FnZSxcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5zZW50ID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1MuIHN0YXR1cz0lZCwgdGV4dD0lc1wiLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICRzY29wZS5zZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGQUlMRUQuIGVycm9yPVwiLCBlcnIpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdFeHBlcmllbmNlQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLmdldFNraWxsID0gZnVuY3Rpb24oc2tpbGxDb2RlKSB7XHJcbiAgICBpZiAoISRzY29wZS5za2lsbHMpIHJldHVybjtcclxuICAgIHJldHVybiAkc2NvcGUuc2tpbGxzLmZpbmQoZnVuY3Rpb24oc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIHNraWxsLmNvZGUgPT09IHNraWxsQ29kZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdIb2JiaWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR3aW5kb3cpIHtcclxuXHJcbiAgJHNjb3BlLmhvYmJ5U2VsZWN0b3JWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICQuZ2V0SlNPTignaHR0cHM6Ly93d3cucmVkZGl0LmNvbS91c2VyL2JlbGdvY2FuYWRpYW4vYWJvdXQvLmpzb24nLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gJHNjb3BlLmhvYmJpZXNbMF07XHJcblxyXG4gICRzY29wZS5zZWxlY3RIb2JieSA9IGZ1bmN0aW9uIChob2JieSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkSG9iYnkgPSBob2JieTtcclxuICAgICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zaG93SG9iYnkgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnJheSkge1xyXG4gICAgaWYgKCF2YWx1ZS5pbWFnZXMpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB2YWx1ZS5pbWFnZXMubGVuZ3RoID4gMDtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMZW1taW5nc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBHYW1lU3ZjKSB7XHJcblxyXG4gIHZhciBMRUZUID0gMDtcclxuICB2YXIgUklHSFQgPSAxO1xyXG5cclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlbW1pbmdzLXBhZ2UnKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgdmFyIGxlbW1pbmdzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBsZW1taW5nc0ltYWdlLnNyYyA9ICdsZW1taW5ncy9sZW1taW5ncy5wbmcnO1xyXG4gIHZhciBkZWNvckltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgZGVjb3JJbWFnZS5zcmMgPSAnbGVtbWluZ3MvZGVjb3IucG5nJztcclxuICB2YXIgbGVtbWluZ3MgPSB7fTtcclxuICB2YXIgc3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICB2YXIgYWN0aW9ucyA9IHtcclxuICAgIHdhbGs6IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbMzIwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgaHVoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMzIwLCAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IHRydWVcclxuICAgIH0sXHJcbiAgICBmYWxsOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgODBdLFxyXG4gICAgICBlbmQ6IFsxNjAsIDEwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZmx5OiB7XHJcbiAgICAgIHN0YXJ0OiBbMTYwLCA4MF0sXHJcbiAgICAgIGVuZDogWzQ4MCwgMTEwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzdG9wOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMTIwXSxcclxuICAgICAgZW5kOiBbNjQwLCAxNDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBjbGltYjoge1xyXG4gICAgICBzdGFydDogWzAsIDE2MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTg1XSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgc3RhcnQ6IFswLCAyMDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDIyNV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHB1bmNoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjQwXSxcclxuICAgICAgZW5kOiBbNjQwLCAzMDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMixcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBkaWc6IHtcclxuICAgICAgc3RhcnQ6IFswLCAzMjBdLFxyXG4gICAgICBlbmQ6IFszMjAsIDM0NV0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIExlbW1pbmcoaW5pdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLndpZHRoIC0gMjAwKSkgKyAxMDAsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjYW52YXMuaGVpZ2h0IC0gMjAwKSkgKyAxMDBdO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogMiA+IDEgPyBMRUZUIDogUklHSFQ7XHJcbiAgICB0aGlzLmFjdCA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbnNbYWN0aW9uXTtcclxuICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgdGhpcy5oZWlnaHQgPSAodGhpcy5hY3Rpb24uZW5kWzFdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAoMjAgKiAodGhpcy5hY3Rpb24ucm93cyAtIDEpKSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5hY3QoaW5pdCk7XHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBMRUZUKSB7XHJcbiAgICAgICAgY3R4LnNjYWxlKC0xLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHZhciByb3cgPSBNYXRoLmZsb29yKHRoaXMuY3ljbGUgLyB0aGlzLmFjdGlvbi5jb2x1bW5zKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZShsZW1taW5nc0ltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKCh0aGlzLmhlaWdodCArIDIwKSAqIHJvdykgKyB0aGlzLmFjdGlvbi5zdGFydFsxXSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICBpZiAodGhpcy5hY3Rpb24ucmV2ZXJzZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPj0gdGhpcy5hY3Rpb24uY29sdW1ucyAqIHRoaXMuYWN0aW9uLnJvd3MpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSAhdGhpcy5hbmltYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS0tO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBIYXRjaCgpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbMjAsIDIwXTtcclxuICAgIHRoaXMuYWN0aW9uID0ge1xyXG4gICAgICBzdGFydDogWzAsIDBdLFxyXG4gICAgICBlbmQ6IFs4MiwgNTAwXSxcclxuICAgICAgY29sdW1uczogMSxcclxuICAgICAgcm93czogMTBcclxuICAgIH1cclxuICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdKSAvIHRoaXMuYWN0aW9uLnJvd3M7XHJcbiAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgIHRoaXMub3BlbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25bMF0sIHRoaXMucG9zaXRpb25bMV0pO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICB2YXIgY29sdW1uLCByb3c7XHJcbiAgICAgIGlmIChzdGFydGVkKSB7XHJcbiAgICAgICAgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgICAgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCA5KSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbHVtbiA9IDA7XHJcbiAgICAgICAgcm93ID0gMDtcclxuICAgICAgfVxyXG4gICAgICBjdHguZHJhd0ltYWdlKGRlY29ySW1hZ2UsICh0aGlzLndpZHRoICogY29sdW1uKSArIHRoaXMuYWN0aW9uLnN0YXJ0WzBdLCAodGhpcy5oZWlnaHQgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAxLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkxlbW1pbmcoKSB7XHJcbiAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICBsZW1taW5nc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApXSA9IG5ldyBMZW1taW5nKGFjdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHQvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG5cdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHQvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblx0XHQvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG5cdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0fVxyXG5cdC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuXHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcblx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogMTA1KTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxuICBzcGF3bkxlbW1pbmcoKTtcclxuICBsZXQgaGF0Y2ggPSBuZXcgSGF0Y2goKVxyXG4gIGRyYXcoKTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGlmICghc3RhcnRlZCkge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5mb250PSc0MHB4IE1vbm90b24nO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gJzEwJztcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xyXG4gICAgICBjdHgucmVjdCgxNSwgY2FudmFzLmhlaWdodCAtIDQ1LCBjdHgubWVhc3VyZVRleHQoJ1N0YXJ0Jykud2lkdGggKyAyMCwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLmhlaWdodCArIGNhbnZhcy5oZWlnaHQgLSA0NSk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnU3RhcnQnLCAyMCwgY2FudmFzLmhlaWdodCAtIDUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAodmFyIGkgaW4gbGVtbWluZ3MpIHtcclxuICAgICAgICBsZW1taW5nc1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGhhdGNoLm9wZW4oKTtcclxuICAgIHN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgZHJhdygpO1xyXG4gICAgfSwgMTUwKTtcclxuICB9XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xpc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgQ2F0ZWdvcmllc1N2Yykge1xyXG5cclxuICAkc2NvcGUuc2hvd0NhdGVnb3J5ID0gdHJ1ZTtcclxuXHJcbiAgJHNjb3BlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLmdldENhdGVnb3JpZXMoKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgJHNjb3BlLnRhc2tzID0gW107XHJcbiAgICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICBmb3IgKHZhciBqIGluICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzKSB7XHJcbiAgICAgICAgICAkc2NvcGUudGFza3MucHVzaCh7XHJcbiAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSxcclxuICAgICAgICAgICAgXCJ0YXNrXCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzW2pdLm5hbWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdENhdGVnb3J5ID0gZnVuY3Rpb24oY2F0ZWdvcnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRUYXNrcyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLnB1c2goJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY2F0ZWdvcmllc1tpXS5uYW1lID09PSBjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeSgkc2NvcGUuY2F0ZWdvcmllc1tpXSk7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuYWRkQ2F0ZWdvcnkoe1xyXG4gICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5pbml0KCk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZENhdGVnb3J5ID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLm5ld1Rhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXS5uYW1lID09PSB0YXNrKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSwge1xyXG4gICAgICAgIHRhc2s6IHRhc2tcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MucHVzaCh7IG5hbWU6IHRhc2sgfSk7XHJcbiAgICAgICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzWyRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5lbnRlcmVkVGFzayA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS51bnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmFkZFRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3QucHVzaCh0YXNrKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUucmVtb3ZlVGFzayA9IGZ1bmN0aW9uKHRhc2tMaXN0LCB0YXNrKSB7XHJcbiAgICB0YXNrTGlzdC5zcGxpY2UodGFza0xpc3QuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnN0YXJ0UHJpb3JpdGl6aW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLnNldFByaW9yaXR5TGlzdCgkc2NvcGUuc2VsZWN0ZWRUYXNrcyk7XHJcbiAgICAkbG9jYXRpb24ucGF0aCgnL3ByaW9yaXRpemUnKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0UXVlc3Rpb25zID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoISRzY29wZS5zZWxlY3RlZFRhc2tzKSByZXR1cm4gJyc7XHJcbiAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gJHNjb3BlLnNlbGVjdGVkVGFza3MubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICBjb3VudGVyICs9IGk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY291bnRlcjtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFVzZXJTdmMpIHtcclxuICAvLyBJbml0aWFsaXplIHRoZSBGaXJlYmFzZVVJIFdpZGdldCB1c2luZyBGaXJlYmFzZS5cclxuICB2YXIgdWkgPSBuZXcgZmlyZWJhc2V1aS5hdXRoLkF1dGhVSShmaXJlYmFzZS5hdXRoKCkpO1xyXG5cclxuICAkc2NvcGUuJG9uKCdsb2dvdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHVpLnJlc2V0KCk7XHJcbiAgICBzdGFydFVJKCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0VUkoKSB7XHJcbiAgICB1aS5zdGFydCgnI2ZpcmViYXNldWktYXV0aC1jb250YWluZXInLCB7XHJcbiAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgIHNpZ25JblN1Y2Nlc3M6IGZ1bmN0aW9uIChjdXJyZW50VXNlciwgY3JlZGVudGlhbCwgcmVkaXJlY3RVcmwpIHtcclxuICAgICAgICAgIC8vIE5vIHJlZGlyZWN0LlxyXG4gICAgICAgICAgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmF1dGgoKVxyXG4gICAgICAgICAgICAuY3VycmVudFVzZXIuZ2V0SWRUb2tlbih0cnVlKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoaWRUb2tlbikge1xyXG4gICAgICAgICAgICAgIFVzZXJTdmMuYXV0aGVudGljYXRlKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBjdXJyZW50VXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBjdXJyZW50VXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHBob3RvVVJMOiBjdXJyZW50VXNlci5waG90b1VSTCxcclxuICAgICAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IGN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQsXHJcbiAgICAgICAgICAgICAgICBpZFRva2VuOiBpZFRva2VuLFxyXG4gICAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KCdsb2dpbicsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcjbW9kYWwtbG9naW4nKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAvLyRsb2NhdGlvbi5wYXRoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoJ3BvcHVwJywge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdMb2dpbiBGYWlsZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhbGVydC1kYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIHNpZ25JbkZhaWx1cmUgY2FsbGJhY2sgbXVzdCBiZSBwcm92aWRlZCB0byBoYW5kbGUgbWVyZ2UgY29uZmxpY3RzIHdoaWNoXHJcbiAgICAgICAgLy8gb2NjdXIgd2hlbiBhbiBleGlzdGluZyBjcmVkZW50aWFsIGlzIGxpbmtlZCB0byBhbiBhbm9ueW1vdXMgdXNlci5cclxuICAgICAgICBzaWduSW5GYWlsdXJlOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgIC8vIEZvciBtZXJnZSBjb25mbGljdHMsIHRoZSBlcnJvci5jb2RlIHdpbGwgYmVcclxuICAgICAgICAgIC8vICdmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0Jy5cclxuICAgICAgICAgIGlmIChlcnJvci5jb2RlICE9ICdmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBUaGUgY3JlZGVudGlhbCB0aGUgdXNlciB0cmllZCB0byBzaWduIGluIHdpdGguXHJcbiAgICAgICAgICB2YXIgY3JlZCA9IGVycm9yLmNyZWRlbnRpYWw7XHJcbiAgICAgICAgICAvLyBDb3B5IGRhdGEgZnJvbSBhbm9ueW1vdXMgdXNlciB0byBwZXJtYW5lbnQgdXNlciBhbmQgZGVsZXRlIGFub255bW91c1xyXG4gICAgICAgICAgLy8gdXNlci5cclxuICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgLy8gRmluaXNoIHNpZ24taW4gYWZ0ZXIgZGF0YSBpcyBjb3BpZWQuXHJcbiAgICAgICAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhDcmVkZW50aWFsKGNyZWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdWlTaG93bjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy8gVGhlIHdpZGdldCBpcyByZW5kZXJlZC5cclxuICAgICAgICAgIC8vIEhpZGUgdGhlIGxvYWRlci5cclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpZ25JblN1Y2Nlc3NVcmw6ICcvaG9tZScsXHJcbiAgICAgIHNpZ25Jbk9wdGlvbnM6IFtcclxuICAgICAgICAvL2ZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgXSxcclxuXHJcbiAgICAgIC8vIFdpbGwgdXNlIHBvcHVwIGZvciBJRFAgUHJvdmlkZXJzIHNpZ24taW4gZmxvdyBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0LCByZWRpcmVjdC5cclxuICAgICAgc2lnbkluRmxvdzogJ3BvcHVwJyxcclxuICAgICAgLy8gT3RoZXIgY29uZmlnIG9wdGlvbnMuLi5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRVSSgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkZmlsdGVyLCBQb3N0c1N2Yykge1xyXG5cclxuICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkc2NvcGUucG9zdEJvZHkpIHtcclxuICAgICAgUG9zdHNTdmMuY3JlYXRlKHtcclxuICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBvc3RzU3ZjLmZldGNoKClcclxuICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5wb3N0cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oJ3dzOm5ld19wb3N0JywgZnVuY3Rpb24gKF8sIHBvc3QpIHtcclxuICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICBQb3N0c1N2Yy5nZXRQb3N0KHBvc3QpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5wb3N0cy51bnNoaWZ0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJQcm9maWxlQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFVzZXJTdmMpIHtcclxuICBjb25zdCBjb3VudHJpZXMgPSBbXHJcbiAgICB7IG5hbWU6IFwiQW5kb3JyYVwiLCBmbGFnOiBcImZsYWctYWRcIiwgdGlkYml0OiBcIlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIiwgZmxhZzogXCJmbGFnLWFlXCIgfSxcclxuICAgIHsgbmFtZTogXCJBZmdoYW5pc3RhblwiLCBmbGFnOiBcImZsYWctYWZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIiwgZmxhZzogXCJmbGFnLWFnXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbmd1aWxsYVwiLCBmbGFnOiBcImZsYWctYWlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFsYmFuaWFcIiwgZmxhZzogXCJmbGFnLWFsXCIgfSxcclxuICAgIHsgbmFtZTogXCJBcm1lbmlhXCIsIGZsYWc6IFwiZmxhZy1hbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW5nb2xhXCIsIGZsYWc6IFwiZmxhZy1hb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW50YXJjdGljYVwiLCBmbGFnOiBcImZsYWctYXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFyZ2VudGluYVwiLCBmbGFnOiBcImZsYWctYXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFtZXJpY2FuIFNvbW9hXCIsIGZsYWc6IFwiZmxhZy1hc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXVzdHJpYVwiLCBmbGFnOiBcImZsYWctYXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF1c3RyYWxpYVwiLCBmbGFnOiBcImZsYWctYXVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFydWJhXCIsIGZsYWc6IFwiZmxhZy1hd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiw4VsYW5kIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWF4XCIgfSxcclxuICAgIHsgbmFtZTogXCJBemVyYmFpamFuXCIsIGZsYWc6IFwiZmxhZy1helwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBmbGFnOiBcImZsYWctYmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhcmJhZG9zXCIsIGZsYWc6IFwiZmxhZy1iYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFuZ2xhZGVzaFwiLCBmbGFnOiBcImZsYWctYmRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGdpdW1cIiwgZmxhZzogXCJmbGFnLWJlXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdXJraW5hIEZhc29cIiwgZmxhZzogXCJmbGFnLWJmXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdWxnYXJpYVwiLCBmbGFnOiBcImZsYWctYmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhaHJhaW5cIiwgZmxhZzogXCJmbGFnLWJoXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdXJ1bmRpXCIsIGZsYWc6IFwiZmxhZy1iaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVuaW5cIiwgZmxhZzogXCJmbGFnLWJqXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBCYXJ0aMOpbGVteVwiLCBmbGFnOiBcImZsYWctYmxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlcm11ZGFcIiwgZmxhZzogXCJmbGFnLWJtXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcnVuZWkgXCIsIGZsYWc6IFwiZmxhZy1iblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9saXZpYSwgUGx1cmluYXRpb25hbCBTdGF0ZSBvZlwiLCBmbGFnOiBcImZsYWctYm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCIsIGZsYWc6IFwiZmxhZy1icVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJhemlsXCIsIGZsYWc6IFwiZmxhZy1iclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFoYW1hc1wiLCBmbGFnOiBcImZsYWctYnNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJodXRhblwiLCBmbGFnOiBcImZsYWctYnRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvdXZldCBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLWJ2XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3Rzd2FuYVwiLCBmbGFnOiBcImZsYWctYndcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGFydXNcIiwgZmxhZzogXCJmbGFnLWJ5XCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxpemVcIiwgZmxhZzogXCJmbGFnLWJ6XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW5hZGFcIiwgZmxhZzogXCJmbGFnLWNhXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb2NvcyAoS2VlbGluZykgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctY2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbmdvLCB0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGVcIiwgZmxhZzogXCJmbGFnLWNkXCIgfSxcclxuICAgIHsgbmFtZTogXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWNmXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb25nb1wiLCBmbGFnOiBcImZsYWctY2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3aXR6ZXJsYW5kXCIsIGZsYWc6IFwiZmxhZy1jaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ8O0dGUgZCdJdm9pcmVcIiwgZmxhZzogXCJmbGFnLWNpXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb29rIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWNrXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGlsZVwiLCBmbGFnOiBcImZsYWctY2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbWVyb29uXCIsIGZsYWc6IFwiZmxhZy1jbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hpbmFcIiwgZmxhZzogXCJmbGFnLWNuXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb2xvbWJpYVwiLCBmbGFnOiBcImZsYWctY29cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvc3RhIFJpY2FcIiwgZmxhZzogXCJmbGFnLWNyXCIgfSxcclxuICAgIHsgbmFtZTogXCJDdWJhXCIsIGZsYWc6IFwiZmxhZy1jdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FibyBWZXJkZVwiLCBmbGFnOiBcImZsYWctY3ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN1cmHDp2FvXCIsIGZsYWc6IFwiZmxhZy1jd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hyaXN0bWFzIElzbGFuZFwiLCBmbGFnOiBcImZsYWctY3hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN5cHJ1c1wiLCBmbGFnOiBcImZsYWctY3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN6ZWNoIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1jelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2VybWFueVwiLCBmbGFnOiBcImZsYWctZGVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRqaWJvdXRpXCIsIGZsYWc6IFwiZmxhZy1kalwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGVubWFya1wiLCBmbGFnOiBcImZsYWctZGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRvbWluaWNhXCIsIGZsYWc6IFwiZmxhZy1kbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRG9taW5pY2FuIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1kb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWxnZXJpYVwiLCBmbGFnOiBcImZsYWctZHpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVjdWFkb3JcIiwgZmxhZzogXCJmbGFnLWVjXCIgfSxcclxuICAgIHsgbmFtZTogXCJFc3RvbmlhXCIsIGZsYWc6IFwiZmxhZy1lZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWd5cHRcIiwgZmxhZzogXCJmbGFnLWVnXCIgfSxcclxuICAgIHsgbmFtZTogXCJXZXN0ZXJuIFNhaGFyYVwiLCBmbGFnOiBcImZsYWctZWhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVyaXRyZWFcIiwgZmxhZzogXCJmbGFnLWVyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTcGFpblwiLCBmbGFnOiBcImZsYWctZXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkV0aGlvcGlhXCIsIGZsYWc6IFwiZmxhZy1ldFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmlubGFuZFwiLCBmbGFnOiBcImZsYWctZmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZpamlcIiwgZmxhZzogXCJmbGFnLWZqXCIgfSxcclxuICAgIHsgbmFtZTogXCJGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcylcIiwgZmxhZzogXCJmbGFnLWZrXCIgfSxcclxuICAgIHsgbmFtZTogXCJNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIG9mXCIsIGZsYWc6IFwiZmxhZy1mbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmFyb2UgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctZm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyYW5jZVwiLCBmbGFnOiBcImZsYWctZnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdhYm9uXCIsIGZsYWc6IFwiZmxhZy1nYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZFwiLCBmbGFnOiBcImZsYWctZ2JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZW5hZGFcIiwgZmxhZzogXCJmbGFnLWdkXCIgfSxcclxuICAgIHsgbmFtZTogXCJHZW9yZ2lhXCIsIGZsYWc6IFwiZmxhZy1nZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIEd1aWFuYVwiLCBmbGFnOiBcImZsYWctZ2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1ZXJuc2V5XCIsIGZsYWc6IFwiZmxhZy1nZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2hhbmFcIiwgZmxhZzogXCJmbGFnLWdoXCIgfSxcclxuICAgIHsgbmFtZTogXCJHaWJyYWx0YXJcIiwgZmxhZzogXCJmbGFnLWdpXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVlbmxhbmRcIiwgZmxhZzogXCJmbGFnLWdsXCIgfSxcclxuICAgIHsgbmFtZTogXCJHYW1iaWFcIiwgZmxhZzogXCJmbGFnLWdtXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWluZWFcIiwgZmxhZzogXCJmbGFnLWduXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWFkZWxvdXBlXCIsIGZsYWc6IFwiZmxhZy1ncFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXF1YXRvcmlhbCBHdWluZWFcIiwgZmxhZzogXCJmbGFnLWdxXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVlY2VcIiwgZmxhZzogXCJmbGFnLWdyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctZ3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YXRlbWFsYVwiLCBmbGFnOiBcImZsYWctZ3RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YW1cIiwgZmxhZzogXCJmbGFnLWd1XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWluZWEtQmlzc2F1XCIsIGZsYWc6IFwiZmxhZy1nd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3V5YW5hXCIsIGZsYWc6IFwiZmxhZy1neVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9uZyBLb25nXCIsIGZsYWc6IFwiZmxhZy1oa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1obVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9uZHVyYXNcIiwgZmxhZzogXCJmbGFnLWhuXCIgfSxcclxuICAgIHsgbmFtZTogXCJDcm9hdGlhXCIsIGZsYWc6IFwiZmxhZy1oclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSGFpdGlcIiwgZmxhZzogXCJmbGFnLWh0XCIgfSxcclxuICAgIHsgbmFtZTogXCJIdW5nYXJ5XCIsIGZsYWc6IFwiZmxhZy1odVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSW5kb25lc2lhXCIsIGZsYWc6IFwiZmxhZy1pZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJlbGFuZFwiLCBmbGFnOiBcImZsYWctaWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklzcmFlbFwiLCBmbGFnOiBcImZsYWctaWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklzbGUgb2YgTWFuXCIsIGZsYWc6IFwiZmxhZy1pbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSW5kaWFcIiwgZmxhZzogXCJmbGFnLWluXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnlcIiwgZmxhZzogXCJmbGFnLWlvXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmFxXCIsIGZsYWc6IFwiZmxhZy1pcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJhbiwgSXNsYW1pYyBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctaXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkljZWxhbmRcIiwgZmxhZzogXCJmbGFnLWlzXCIgfSxcclxuICAgIHsgbmFtZTogXCJJdGFseVwiLCBmbGFnOiBcImZsYWctaXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkplcnNleVwiLCBmbGFnOiBcImZsYWctamVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkphbWFpY2FcIiwgZmxhZzogXCJmbGFnLWptXCIgfSxcclxuICAgIHsgbmFtZTogXCJKb3JkYW5cIiwgZmxhZzogXCJmbGFnLWpvXCIgfSxcclxuICAgIHsgbmFtZTogXCJKYXBhblwiLCBmbGFnOiBcImZsYWctanBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktlbnlhXCIsIGZsYWc6IFwiZmxhZy1rZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS3lyZ3l6c3RhblwiLCBmbGFnOiBcImZsYWcta2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbWJvZGlhXCIsIGZsYWc6IFwiZmxhZy1raFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2lyaWJhdGlcIiwgZmxhZzogXCJmbGFnLWtpXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb21vcm9zXCIsIGZsYWc6IFwiZmxhZy1rbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsIGZsYWc6IFwiZmxhZy1rblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWtwXCIgfSxcclxuICAgIHsgbmFtZTogXCJLb3JlYSwgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWtyXCIgfSxcclxuICAgIHsgbmFtZTogXCJLdXdhaXRcIiwgZmxhZzogXCJmbGFnLWt3XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYXltYW4gSXNsYW5kc1wiLCBmbGFnOiBcImZsYWcta3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkthemFraHN0YW5cIiwgZmxhZzogXCJmbGFnLWt6XCIgfSxcclxuICAgIHsgbmFtZTogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctbGFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxlYmFub25cIiwgZmxhZzogXCJmbGFnLWxiXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBMdWNpYVwiLCBmbGFnOiBcImZsYWctbGNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpZWNodGVuc3RlaW5cIiwgZmxhZzogXCJmbGFnLWxpXCIgfSxcclxuICAgIHsgbmFtZTogXCJTcmkgTGFua2FcIiwgZmxhZzogXCJmbGFnLWxrXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWJlcmlhXCIsIGZsYWc6IFwiZmxhZy1sclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGVzb3Rob1wiLCBmbGFnOiBcImZsYWctbHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpdGh1YW5pYVwiLCBmbGFnOiBcImZsYWctbHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkx1eGVtYm91cmdcIiwgZmxhZzogXCJmbGFnLWx1XCIgfSxcclxuICAgIHsgbmFtZTogXCJMYXR2aWFcIiwgZmxhZzogXCJmbGFnLWx2XCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWJ5YVwiLCBmbGFnOiBcImZsYWctbHlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vcm9jY29cIiwgZmxhZzogXCJmbGFnLW1hXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb25hY29cIiwgZmxhZzogXCJmbGFnLW1jXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb2xkb3ZhLCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctbWRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbnRlbmVncm9cIiwgZmxhZzogXCJmbGFnLW1lXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KVwiLCBmbGFnOiBcImZsYWctbWZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hZGFnYXNjYXJcIiwgZmxhZzogXCJmbGFnLW1nXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXJzaGFsbCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1taFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFjZWRvbmlhLCB0aGUgZm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1ta1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsaVwiLCBmbGFnOiBcImZsYWctbWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk15YW5tYXJcIiwgZmxhZzogXCJmbGFnLW1tXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb25nb2xpYVwiLCBmbGFnOiBcImZsYWctbW5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hY2FvXCIsIGZsYWc6IFwiZmxhZy1tb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1tcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFydGluaXF1ZVwiLCBmbGFnOiBcImZsYWctbXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hdXJpdGFuaWFcIiwgZmxhZzogXCJmbGFnLW1yXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb250c2VycmF0XCIsIGZsYWc6IFwiZmxhZy1tc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsdGFcIiwgZmxhZzogXCJmbGFnLW10XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXVyaXRpdXNcIiwgZmxhZzogXCJmbGFnLW11XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxkaXZlc1wiLCBmbGFnOiBcImZsYWctbXZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGF3aVwiLCBmbGFnOiBcImZsYWctbXdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1leGljb1wiLCBmbGFnOiBcImZsYWctbXhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGF5c2lhXCIsIGZsYWc6IFwiZmxhZy1teVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW96YW1iaXF1ZVwiLCBmbGFnOiBcImZsYWctbXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hbWliaWFcIiwgZmxhZzogXCJmbGFnLW5hXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXcgQ2FsZWRvbmlhXCIsIGZsYWc6IFwiZmxhZy1uY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmlnZXJcIiwgZmxhZzogXCJmbGFnLW5lXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3Jmb2xrIElzbGFuZFwiLCBmbGFnOiBcImZsYWctbmZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pZ2VyaWFcIiwgZmxhZzogXCJmbGFnLW5nXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWNhcmFndWFcIiwgZmxhZzogXCJmbGFnLW5pXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXRoZXJsYW5kc1wiLCBmbGFnOiBcImZsYWctbmxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcndheVwiLCBmbGFnOiBcImZsYWctbm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5lcGFsXCIsIGZsYWc6IFwiZmxhZy1ucFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmF1cnVcIiwgZmxhZzogXCJmbGFnLW5yXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaXVlXCIsIGZsYWc6IFwiZmxhZy1udVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV3IFplYWxhbmRcIiwgZmxhZzogXCJmbGFnLW56XCIgfSxcclxuICAgIHsgbmFtZTogXCJPbWFuXCIsIGZsYWc6IFwiZmxhZy1vbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFuYW1hXCIsIGZsYWc6IFwiZmxhZy1wYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGVydVwiLCBmbGFnOiBcImZsYWctcGVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBQb2x5bmVzaWFcIiwgZmxhZzogXCJmbGFnLXBmXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYXB1YSBOZXcgR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1wZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGhpbGlwcGluZXNcIiwgZmxhZzogXCJmbGFnLXBoXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWtpc3RhblwiLCBmbGFnOiBcImZsYWctcGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBvbGFuZFwiLCBmbGFnOiBcImZsYWctcGxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIiwgZmxhZzogXCJmbGFnLXBtXCIgfSxcclxuICAgIHsgbmFtZTogXCJQaXRjYWlyblwiLCBmbGFnOiBcImZsYWctcG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlB1ZXJ0byBSaWNvXCIsIGZsYWc6IFwiZmxhZy1wclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwiLCBmbGFnOiBcImZsYWctcHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBvcnR1Z2FsXCIsIGZsYWc6IFwiZmxhZy1wdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFsYXVcIiwgZmxhZzogXCJmbGFnLXB3XCIgfSxcclxuICAgIHsgbmFtZTogXCJQYXJhZ3VheVwiLCBmbGFnOiBcImZsYWctcHlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlFhdGFyXCIsIGZsYWc6IFwiZmxhZy1xYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUsOpdW5pb25cIiwgZmxhZzogXCJmbGFnLXJlXCIgfSxcclxuICAgIHsgbmFtZTogXCJSb21hbmlhXCIsIGZsYWc6IFwiZmxhZy1yb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2VyYmlhXCIsIGZsYWc6IFwiZmxhZy1yc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUnVzc2lhbiBGZWRlcmF0aW9uXCIsIGZsYWc6IFwiZmxhZy1ydVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUndhbmRhXCIsIGZsYWc6IFwiZmxhZy1yd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2F1ZGkgQXJhYmlhXCIsIGZsYWc6IFwiZmxhZy1zYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU29sb21vbiBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1zYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2V5Y2hlbGxlc1wiLCBmbGFnOiBcImZsYWctc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN1ZGFuXCIsIGZsYWc6IFwiZmxhZy1zZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dlZGVuXCIsIGZsYWc6IFwiZmxhZy1zZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2luZ2Fwb3JlXCIsIGZsYWc6IFwiZmxhZy1zZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGFcIiwgZmxhZzogXCJmbGFnLXNoXCIgfSxcclxuICAgIHsgbmFtZTogXCJTbG92ZW5pYVwiLCBmbGFnOiBcImZsYWctc2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIiwgZmxhZzogXCJmbGFnLXNqXCIgfSxcclxuICAgIHsgbmFtZTogXCJTbG92YWtpYVwiLCBmbGFnOiBcImZsYWctc2tcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpZXJyYSBMZW9uZVwiLCBmbGFnOiBcImZsYWctc2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbiBNYXJpbm9cIiwgZmxhZzogXCJmbGFnLXNtXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZW5lZ2FsXCIsIGZsYWc6IFwiZmxhZy1zblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU29tYWxpYVwiLCBmbGFnOiBcImZsYWctc29cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN1cmluYW1lXCIsIGZsYWc6IFwiZmxhZy1zclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggU3VkYW5cIiwgZmxhZzogXCJmbGFnLXNzXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIiwgZmxhZzogXCJmbGFnLXN0XCIgfSxcclxuICAgIHsgbmFtZTogXCJFbCBTYWx2YWRvclwiLCBmbGFnOiBcImZsYWctc3ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIiwgZmxhZzogXCJmbGFnLXN4XCIgfSxcclxuICAgIHsgbmFtZTogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctc3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3YXppbGFuZFwiLCBmbGFnOiBcImZsYWctc3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctdGNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoYWRcIiwgZmxhZzogXCJmbGFnLXRkXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXNcIiwgZmxhZzogXCJmbGFnLXRmXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb2dvXCIsIGZsYWc6IFwiZmxhZy10Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGhhaWxhbmRcIiwgZmxhZzogXCJmbGFnLXRoXCIgfSxcclxuICAgIHsgbmFtZTogXCJUYWppa2lzdGFuXCIsIGZsYWc6IFwiZmxhZy10alwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9rZWxhdVwiLCBmbGFnOiBcImZsYWctdGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRpbW9yLUxlc3RlXCIsIGZsYWc6IFwiZmxhZy10bFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya21lbmlzdGFuXCIsIGZsYWc6IFwiZmxhZy10bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVuaXNpYVwiLCBmbGFnOiBcImZsYWctdG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRvbmdhXCIsIGZsYWc6IFwiZmxhZy10b1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya2V5XCIsIGZsYWc6IFwiZmxhZy10clwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wiLCBmbGFnOiBcImZsYWctdHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1dmFsdVwiLCBmbGFnOiBcImZsYWctdHZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmFcIiwgZmxhZzogXCJmbGFnLXR3XCIgfSxcclxuICAgIHsgbmFtZTogXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy10elwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVWtyYWluZVwiLCBmbGFnOiBcImZsYWctdWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVnYW5kYVwiLCBmbGFnOiBcImZsYWctdWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctdW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLCBmbGFnOiBcImZsYWctdXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVydWd1YXlcIiwgZmxhZzogXCJmbGFnLXV5XCIgfSxcclxuICAgIHsgbmFtZTogXCJVemJla2lzdGFuXCIsIGZsYWc6IFwiZmxhZy11elwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9seSBTZWVcIiwgZmxhZzogXCJmbGFnLXZhXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLCBmbGFnOiBcImZsYWctdmNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZlbmV6dWVsYSwgQm9saXZhcmlhbiBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctdmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzLCBCcml0aXNoXCIsIGZsYWc6IFwiZmxhZy12Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlyZ2luIElzbGFuZHMsIFUuUy5cIiwgZmxhZzogXCJmbGFnLXZpXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaWV0IE5hbVwiLCBmbGFnOiBcImZsYWctdm5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZhbnVhdHVcIiwgZmxhZzogXCJmbGFnLXZ1XCIgfSxcclxuICAgIHsgbmFtZTogXCJXYWxsaXMgYW5kIEZ1dHVuYVwiLCBmbGFnOiBcImZsYWctd2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbW9hXCIsIGZsYWc6IFwiZmxhZy13c1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiWWVtZW5cIiwgZmxhZzogXCJmbGFnLXllXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXlvdHRlXCIsIGZsYWc6IFwiZmxhZy15dFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggQWZyaWNhXCIsIGZsYWc6IFwiZmxhZy16YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiWmFtYmlhXCIsIGZsYWc6IFwiZmxhZy16bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiWmltYmFid2VcIiwgZmxhZzogXCJmbGFnLXp3XCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCB1cGRhdGVVc2VyRmxhZ3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUudXNlckZsYWdzID0gJHNjb3BlLmN1cnJlbnRVc2VyPy5mbGFnc1xyXG4gICAgICA/IGNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGNvdW50cnkpIHtcclxuICAgICAgICAgIHJldHVybiAkc2NvcGUuY3VycmVudFVzZXIuZmxhZ3MuaW5jbHVkZXMoY291bnRyeS5mbGFnKTtcclxuICAgICAgICB9KVxyXG4gICAgICA6IFtdO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5kYXRlT3B0aW9ucyA9IHtcclxuICAgIG1heERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZSgxOTAwLCAxLCAxKSxcclxuICAgIGluaXREYXRlOiBuZXcgRGF0ZSgyMDAwLCAxLCAxKSxcclxuICAgIGRhdGVwaWNrZXJNb2RlOiBcInllYXJcIixcclxuICB9O1xyXG5cclxuICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSB0cnVlO1xyXG4gICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9IHRydWU7XHJcblxyXG4gICRzY29wZS50b2dnbGVVc2VybmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS51c2VybmFtZVRvZ2dsZSA9ICEkc2NvcGUudXNlcm5hbWVUb2dnbGU7XHJcbiAgICAkc2NvcGUubmV3VXNlcm5hbWUgPSAkc2NvcGUuY3VycmVudFVzZXIudXNlcm5hbWU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLm5ld1Bhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5jb25maXJtUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gISRzY29wZS5wYXNzd29yZFRvZ2dsZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uIChwYXNzd29yZCkge1xyXG4gICAgaWYgKHBhc3N3b3JkKSB7XHJcbiAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgVXNlclN2Yy5jaGVja1Bhc3N3b3JkKHVzZXIsIHBhc3N3b3JkKS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAob2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgIGlmIChuZXdQYXNzd29yZCkge1xyXG4gICAgICBpZiAobmV3UGFzc3dvcmQgPT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgdmFyIHVzZXIgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICAgIFVzZXJTdmMuY2hhbmdlUGFzc3dvcmQodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKS50aGVuKFxyXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuJGVtaXQoXCJwb3B1cFwiLCB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJQYXNzd29yZCBDaGFuZ2VkXCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJhbGVydC1zdWNjZXNzXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkc2NvcGUub2xkUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzY29wZS4kZW1pdChcInBvcHVwXCIsIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBhc3N3b3JkIENoYW5nZSBGYWlsZWRcIixcclxuICAgICAgICAgICAgICB0eXBlOiBcImFsZXJ0LWRhbmdlclwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgb3JpZ2luYWxCZyA9ICQoXCIucGFzc3dvcmRcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIpO1xyXG4gICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlVXNlcm5hbWUgPSBmdW5jdGlvbiAodXNlcm5hbWUpIHtcclxuICAgICRzY29wZS4kZW1pdChcImxvYWRpbmdcIik7XHJcbiAgICBVc2VyU3ZjLmNoYW5nZVVzZXJuYW1lKCRzY29wZS5jdXJyZW50VXNlci5faWQsIHVzZXJuYW1lKS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoXCJ1cGRhdGVcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoXCJwb3B1cFwiLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiB1c2VybmFtZSArIFwiIGFscmVhZHkgaW4gdXNlXCIsXHJcbiAgICAgICAgICB0eXBlOiBcImFsZXJ0LWRhbmdlclwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUudXBkYXRlVXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS4kZW1pdChcImxvYWRpbmdcIik7XHJcbiAgICBVc2VyU3ZjLnVwZGF0ZVVzZXIoeyAuLi4kc2NvcGUuY3VycmVudFVzZXIsIGZsYWdzOiAkc2NvcGUudXNlckZsYWdzLm1hcCgoeyBmbGFnIH0pID0+IGZsYWcpIH0pLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS4kZW1pdChcInVwZGF0ZVwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmxvYWRDb3VudHJpZXMgPSBmdW5jdGlvbiAoJHF1ZXJ5KSB7XHJcbiAgICByZXR1cm4gY291bnRyaWVzLmZpbHRlcihmdW5jdGlvbiAoY291bnRyeSkge1xyXG4gICAgICByZXR1cm4gY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigkcXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTE7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgKCkgPT4ge1xyXG4gICAgdXBkYXRlVXNlckZsYWdzKCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1NraWxsc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZFNraWxsID0gMDtcclxuICAkc2NvcGUuc2tpbGxzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICRzY29wZS5wcm9qZWN0cyA9IFtdO1xyXG5cclxuICAkc2NvcGUubGFiZWxzID0gW1wiRG93bmxvYWQgU2FsZXNcIiwgXCJJbi1TdG9yZSBTYWxlc1wiLCBcIk1haWwtT3JkZXIgU2FsZXNcIl07XHJcbiAgJHNjb3BlLmRhdGEgPSBbMzAwLCA1MDAsIDEwMF07XHJcblxyXG4gICQuZ2V0SlNPTignL2V4cGVyaWVuY2UuanNvbicsIGZ1bmN0aW9uKCBkYXRhICkge1xyXG4gICAgJHNjb3BlLnByb2plY3RzID0gZGF0YS5yZWR1Y2UoKHByb2plY3RzLCBlbXBsb3llcikgPT4ge1xyXG4gICAgICBpZiAoZW1wbG95ZXIucHJvamVjdHMpIHJldHVybiBlbXBsb3llci5wcm9qZWN0cy5jb25jYXQocHJvamVjdHMpO1xyXG4gICAgICBlbHNlIHJldHVybiBwcm9qZWN0cztcclxuICAgIH0sIHt9KTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmZpbHRlcmVkUHJvamVjdHMgPSAoKSA9PiAkc2NvcGUucHJvamVjdHNcclxuICAgIC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3Quc2tpbGxzICYmIHByb2plY3Quc2tpbGxzLmluY2x1ZGVzKCRzY29wZS5zZWxlY3RlZFNraWxsLmNvZGUpKVxyXG5cclxuICAkLmdldEpTT04oJy9za2lsbHMuanNvbicsIGZ1bmN0aW9uKCBkYXRhICkge1xyXG5cclxuICAgIGNvbnN0IHNraWxscyA9IGRhdGFcclxuICAgIC5maWx0ZXIoKHNraWxsKSA9PiBza2lsbC5lbmFibGVkKVxyXG5cclxuICAgICRzY29wZS5jYXRlZ29yaWVzID0gc2tpbGxzXHJcbiAgICAucmVkdWNlKGZ1bmN0aW9uKGNhdGVnb3JpZXMsIHNraWxsKSB7XHJcbiAgICAgIGlmICghY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0pIHtcclxuICAgICAgICBjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XSA9IFtza2lsbF1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XS5wdXNoKHNraWxsKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzO1xyXG4gICAgfSwge30pO1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZFNraWxsID0gZnVuY3Rpb24gKHNraWxsKSB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsID0gc2tpbGw7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsLmNoYXJ0T3B0aW9ucyA9IHtcclxuICAgICAgICBjdXRvdXRQZXJjZW50YWdlIDogODAsXHJcbiAgICAgICAgY2lyY3VtZmVyZW5jZTogMiAqIE1hdGguUEksXHJcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsLmNoYXJ0U3R5bGUgPSB7XHJcbiAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKC9za2lsbHMvJyArICRzY29wZS5zZWxlY3RlZFNraWxsLmltYWdlICsgJyknLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnNjAlJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICc1MCUgNTAlJ1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCgkc2NvcGUuc2tpbGxzWzBdKTtcclxuXHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJHNjZSwgJGxvY2F0aW9uLCBUZW5UaGluZ3NTdmMpIHtcclxuICAgIGxldCBwYWdlID0gMTtcclxuICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlYXJjaCA9IFwiXCI7XHJcbiAgICAkc2NvcGUubmV3SXRlbSA9IHt9O1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IFwiRU5cIjtcclxuICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSBbXTtcclxuICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSBbXTtcclxuICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgIGxldCBleGhhdXN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBvYmplY3RDYXRlZ29yaWVzID0gW1xyXG4gICAgICBcIkFydFwiLFxyXG4gICAgICBcIkN1bHR1cmVcIixcclxuICAgICAgXCJGb29kIGFuZCBEcmlua1wiLFxyXG4gICAgICBcIk5hdHVyZVwiLFxyXG4gICAgICBcIk9iamVjdHNcIixcclxuICAgICAgXCJSZWxpZ2lvblwiLFxyXG4gICAgICBcIlNvY2lldHlcIixcclxuICAgICAgXCJTcG9ydHNcIixcclxuICAgICAgXCJUcmFuc3BvcnRhdGlvblwiLFxyXG4gICAgXTtcclxuICAgICRzY29wZS5ibHVyYlR5cGVzID0gW1xyXG4gICAgICB7IGFwaTogXCJtb3ZpZXNcIiwgY2F0ZWdvcmllczogW1wiTW92aWVzXCJdLCB0ZXh0OiBcIkdldCBtb3ZpZSBwb3N0ZXJzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwidHZcIiwgY2F0ZWdvcmllczogW1wiVGVsZXZpc2lvblwiXSwgdGV4dDogXCJHZXQgdHYgcG9zdGVyc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcImFjdG9yc1wiLCBjYXRlZ29yaWVzOiBbXCJNb3ZpZXNcIiwgXCJUZWxldmlzaW9uXCJdLCB0ZXh0OiBcIkdldCBhY3RvciBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwiYm9va3NcIiwgY2F0ZWdvcmllczogW1wiTGl0ZXJhdHVyZVwiXSwgdGV4dDogXCJHZXQgYm9vayBjb3ZlcnNcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJtdXNpY3ZpZGVvc1wiLCBjYXRlZ29yaWVzOiBbXCJNdXNpY1wiXSwgdGV4dDogXCJHZXQgbXVzaWMgdmlkZW9zXCIsIGFkbWluT25seTogdHJ1ZSB9LFxyXG4gICAgICB7IGFwaTogXCJ1bnNwbGFzaFwiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBVbnNwbGFzaCBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwicGV4ZWxzXCIsIGNhdGVnb3JpZXM6IG9iamVjdENhdGVnb3JpZXMsIHRleHQ6IFwiR2V0IFBleGVscyBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwid2lraVwiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBXaWtpIHBpY3NcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgXTtcclxuXHJcbiAgICAkc2NvcGUuaGF2ZUNvbW1vbkl0ZW1zID0gKGFycjEsIGFycjIpID0+IHtcclxuICAgICAgcmV0dXJuIGFycjE/LnNvbWUoKGl0ZW0pID0+IGFycjIuaW5jbHVkZXMoaXRlbSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUua2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgLy8gVGFiXHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5jcmVhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICgkKFwiI25ldy12YWx1ZVwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAkKFwiI25ldy1ibHVyYlwiKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgfVxyXG4gICAgICAvLyB1c2UgZS5rZXlDb2RlXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hZGRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBcIm5ld1wiKTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNyZWF0b3I6ICRzY29wZS5jdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB2YWx1ZXM6IFtdLFxyXG4gICAgICAgIGFuc3dlcnM6IDAsXHJcbiAgICAgICAgaXNEeW5hbWljOiB0cnVlLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgIGxhbmd1YWdlOiAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgJHNjb3BlLnNlYXJjaCA9ICRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2g7XHJcbiAgICAgIGlmIChsaXN0KSB7XHJcbiAgICAgICAgaWYgKGxpc3QuX2lkID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAkc2NvcGUuYWRkTGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0Lmxhbmd1YWdlO1xyXG4gICAgICAgICAgICAgICRzY29wZS5yZWFkT25seSA9XHJcbiAgICAgICAgICAgICAgICAhJHNjb3BlLnNlbGVjdGVkTGlzdCB8fFxyXG4gICAgICAgICAgICAgICAgKCEkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4gJiZcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jcmVhdG9yLl9pZCAhPT0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCAmJlxyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHt9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldENhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY3VycmVudFVzZXIpIHJldHVybjtcclxuICAgICAgY29uc3QgeyBkYXRhOiBsYW5ndWFnZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKTtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IGxhbmd1YWdlcztcclxuICAgICAgcmVzZXRMYW5ndWFnZUZpbHRlcigpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3JpZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcclxuICAgICAgcmVzZXRDYXRlZ29yeUZpbHRlcigpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGxhbmd1YWdlU3RhdHMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0TGFuZ3VhZ2VTdGF0cygpO1xyXG4gICAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IGxhbmd1YWdlU3RhdHMucmVkdWNlKChyZXN1bHQsIHsgX2lkLCBjb3VudCB9KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W19pZC5sYW5ndWFnZV0gPSAocmVzdWx0W19pZC5sYW5ndWFnZV0gfHwgMCkgKyBjb3VudDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogY2F0ZWdvcnlTdGF0cyB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldExpc3RDYXRlZ29yeVN0YXRzKCk7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeVN0YXRzID0gY2F0ZWdvcnlTdGF0cy5yZWR1Y2UoKHJlc3VsdCwgeyBfaWQsIGNvdW50IH0pID0+IHtcclxuICAgICAgICByZXN1bHRbX2lkXSA9IGNvdW50O1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0KSB7XHJcbiAgICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCh7IF9pZDogJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QgfSk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLnNlYXJjaCA9ICRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2ggfHwgXCJcIjtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZWFyY2hMaXN0cyA9IGFzeW5jICh2aWV3VmFsdWUpID0+IHtcclxuICAgICAgaWYgKHZpZXdWYWx1ZS5sZW5ndGggPj0gMykge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLnNlYXJjaExpc3RzKHZpZXdWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5oaWdobGlnaHRlZFNlYXJjaFRleHQgPSAodGV4dCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLnNlYXJjaCkge1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgKCR7JHNjb3BlLnNlYXJjaH0pYCwgXCJnaVwiKTtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKHJlZ2V4LCBcIjxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPiQxPC9zcGFuPlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudmFsdWVPcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwidmFsdWVcIixcclxuICAgICAgZGlyZWN0aW9uOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogJGxvY2F0aW9uLnNlYXJjaCgpLnNvcnQgfHwgXCJkYXRlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogJGxvY2F0aW9uLnNlYXJjaCgpLm9yZGVyID8gJGxvY2F0aW9uLnNlYXJjaCgpLm9yZGVyID09PSBcImRlc2NcIiA6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA9ICEkc2NvcGUub3JkZXIuZGlyZWN0aW9uO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwic29ydFwiLCBmaWVsZCk7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJvcmRlclwiLCAkc2NvcGUub3JkZXIuZGlyZWN0aW9uID8gXCJkZXNjXCIgOiBcImFzY1wiKTtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRNb3JlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubGlzdHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgIGdldExpc3RzKCkudGhlbigobGlzdHMpID0+IHtcclxuICAgICAgICAkc2NvcGUubGlzdHMgPSAkc2NvcGUubGlzdHMuY29uY2F0KGxpc3RzKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxpc3RzID0gW107XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSBbXTtcclxuICAgICAgcGFnZSA9IDE7XHJcbiAgICAgIGV4aGF1c3RlZCA9IGZhbHNlO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gbGlzdHM7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldExhbmd1YWdlRmlsdGVyID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdKSB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPSAhJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9ICEkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpO1xyXG4gICAgICBjb25zdCBhbGxDYXRlZ29yaWVzID1cclxuICAgICAgICBjYXRlZ29yaWVzLmxlbmd0aCA9PT0gY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldKS5sZW5ndGg7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9ICRzY29wZS5jYXRlZ29yaWVzLnJlZHVjZSgoZmlsdGVyLCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgIGZpbHRlcltjYXRlZ29yeV0gPSAhYWxsQ2F0ZWdvcmllcztcclxuICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5sb2FkaW5nIHx8IGV4aGF1c3RlZCkgcmV0dXJuIFtdO1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoICE9PSAkc2NvcGUuc2VhcmNoKSB7XHJcbiAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcInNlYXJjaFwiLCAkc2NvcGUuc2VhcmNoID8gJHNjb3BlLnNlYXJjaCA6IG51bGwpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldExpc3RzKHtcclxuICAgICAgICBwYWdlLFxyXG4gICAgICAgIHNvcnRCeTogJHNjb3BlLm9yZGVyLmZpZWxkLFxyXG4gICAgICAgIG9yZGVyQnk6ICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPyAtMSA6IDEsXHJcbiAgICAgICAgbGltaXQ6IDEwMCxcclxuICAgICAgICBzZWFyY2g6ICRzY29wZS5zZWFyY2gsXHJcbiAgICAgICAgbGFuZ3VhZ2VzOiBPYmplY3Qua2V5cygkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIpLmZpbHRlcigobGFuZ3VhZ2UpID0+ICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZV0pLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSksXHJcbiAgICAgIH0pO1xyXG4gICAgICAkc2NvcGUuY291bnQgPSBkYXRhLmNvdW50O1xyXG4gICAgICBpZiAoZGF0YS5yZXN1bHQubGVuZ3RoIDwgMTAwKSBleGhhdXN0ZWQgPSB0cnVlO1xyXG4gICAgICBlbHNlIHBhZ2UgPSBkYXRhLm5leHRQYWdlO1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnJlc3VsdC5zbGljZSgwLCAxMCkpO1xyXG4gICAgICByZXR1cm4gZGF0YS5yZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMaXN0TmFtZSA9IChsaXN0SWQpID0+ICRzY29wZS5saXN0cy5maW5kKCh7IF9pZCB9KSA9PiBfaWQgPT09IGxpc3RJZCk/Lm5hbWU7XHJcblxyXG4gICAgJHNjb3BlLnVwZGF0ZVZhbHVlID0gYXN5bmMgKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKCFpdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgJHNjb3BlLmRlbGV0ZVZhbHVlKGl0ZW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRJdGVtUmVzcG9uc2UgPSBhd2FpdCBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdFZhbHVlKCRzY29wZS5zZWxlY3RlZExpc3QsIGl0ZW0pO1xyXG4gICAgICAgIGl0ZW0uYmx1cmJUeXBlID0gdXBkYXRlZEl0ZW1SZXNwb25zZS5kYXRhLmJsdXJiVHlwZTtcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNyZWF0ZVZhbHVlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5uZXdJdGVtLnZhbHVlKSByZXR1cm47XHJcbiAgICAgIGlmICgkc2NvcGUuaGFzRHVwbGljYXRlKCkpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoYCR7JHNjb3BlLm5ld0l0ZW0udmFsdWV9IGlzIGFscmVhZHkgaW4gdGhlIGxpc3RgKTtcclxuICAgICAgfSBlbHNlIGlmICghJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5wdXNoKHsgLi4uJHNjb3BlLm5ld0l0ZW0gfSk7XHJcbiAgICAgICAgaWYgKCRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCkge1xyXG4gICAgICAgICAgYXdhaXQgJHNjb3BlLnVwc2VydExpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRJdGVtUmVzcG9uc2UgPSBhd2FpdCBUZW5UaGluZ3NTdmMuY3JlYXRlTGlzdFZhbHVlKCRzY29wZS5zZWxlY3RlZExpc3QsICRzY29wZS5uZXdJdGVtKTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5wdXNoKGNyZWF0ZWRJdGVtUmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgICAkc2NvcGUubmV3SXRlbS5ibHVyYiA9IFwiXCI7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICQoXCIjbmV3LXZhbHVlXCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICAgICAgfSk7XHJcbiAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZVZhbHVlID0gKGl0ZW0pID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzID0gJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUuX2lkICE9PSBpdGVtLl9pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudXBzZXJ0TGlzdCA9IChsaXN0LCB1cGRhdGVzKSA9PiB7XHJcbiAgICAgICRzY29wZS5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAobGlzdC52YWx1ZXMubGVuZ3RoID49IDEwICYmIGxpc3QubmFtZSAmJiBsaXN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmIChsaXN0Ll9pZCAmJiBsaXN0Ll9pZCAhPT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgbGV0IGNoYW5nZXMgPSB1cGRhdGVzID8gdXBkYXRlcyA6IGxpc3Q7XHJcbiAgICAgICAgICBkZWxldGUgY2hhbmdlcy5faWQ7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAgIC4uLmNoYW5nZXMsXHJcbiAgICAgICAgICAgIF9pZDogbGlzdC5faWQsXHJcbiAgICAgICAgICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJbmRleCA9ICRzY29wZS5saXN0cy5maW5kSW5kZXgoKGxpc3QpID0+IGxpc3QuX2lkID09PSBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgICRzY29wZS5saXN0c1tsaXN0SW5kZXhdID0gZGF0YTtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmNyZWF0ZUxpc3QoJHNjb3BlLmN1cnJlbnRVc2VyLCAkc2NvcGUuc2VsZWN0ZWRMaXN0KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QgPT09IFwibmV3XCIpIHtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQgPSBkYXRhLl9pZDtcclxuICAgICAgICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKCRzY29wZS5zZWxlY3RlZExpc3QsIHVwZGF0ZXMpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCFsaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhsaXN0Ll9pZCkpIHtcclxuICAgICAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW2xpc3QuX2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0cyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHM7XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY29uZmlybU1lcmdlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgVGVuVGhpbmdzU3ZjLm1lcmdlTGlzdHMoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyk7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJChcIiNtb2RhbC1tZXJnZS1saXN0c1wiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jb25maXJtRGVsZXRlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgbGlzdElkIG9mICRzY29wZS5saXN0SWRzVG9EZWxldGUpIHtcclxuICAgICAgICBhd2FpdCBUZW5UaGluZ3NTdmMuZGVsZXRlTGlzdChsaXN0SWQpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMobGlzdC5faWQpKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuZmlsdGVyKFxyXG4gICAgICAgICAgKGhpZ2hsaWdodGVkTGlzdElkKSA9PiBoaWdobGlnaHRlZExpc3RJZCAhPT0gbGlzdC5faWQsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLnB1c2gobGlzdC5faWQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZSA9IChsaXN0LCBsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBsaXN0Lmxhbmd1YWdlID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICBjb25zdCBub25FbmdsaXNoSW5kZXggPSBsaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICBpZiAobGFuZ3VhZ2UuY29kZSAhPT0gXCJFTlwiICYmIG5vbkVuZ2xpc2hJbmRleCA8IDApIHtcclxuICAgICAgICBsaXN0LmNhdGVnb3JpZXMucHVzaChcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGxhbmd1YWdlLmNvZGUgPT09IFwiRU5cIiAmJiBub25FbmdsaXNoSW5kZXggPj0gMCkge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5zcGxpY2Uobm9uRW5nbGlzaEluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7XHJcbiAgICAgICAgY2F0ZWdvcmllczogbGlzdC5jYXRlZ29yaWVzLFxyXG4gICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZS5jb2RlLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldERpZmZpY3VsdHkgPSAobGlzdCwgZGlmZmljdWx0eSkgPT4ge1xyXG4gICAgICBsaXN0LmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7XHJcbiAgICAgICAgZGlmZmljdWx0eTogZGlmZmljdWx0eSxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRGcmVxdWVuY3kgPSAobGlzdCwgZnJlcXVlbmN5KSA9PiB7XHJcbiAgICAgIGxpc3QuZnJlcXVlbmN5ID0gZnJlcXVlbmN5O1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7XHJcbiAgICAgICAgZnJlcXVlbmN5OiBmcmVxdWVuY3ksXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnkgPSAobGlzdCwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcnlJbmRleCA9IGxpc3QuY2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KTtcclxuICAgICAgaWYgKGNhdGVnb3J5SW5kZXggPj0gMCkge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5zcGxpY2UoY2F0ZWdvcnlJbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdC5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHtcclxuICAgICAgICBjYXRlZ29yaWVzOiBsaXN0LmNhdGVnb3JpZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaGFzRHVwbGljYXRlID0gKCkgPT5cclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCAmJlxyXG4gICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSAmJlxyXG4gICAgICBfLnNvbWUoXHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMsXHJcbiAgICAgICAgKGFuc3dlcikgPT4gYW5zd2VyLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSA9PSAkc2NvcGUubmV3SXRlbS52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCksXHJcbiAgICAgICk7XHJcblxyXG4gICAgJHNjb3BlLmdldEJsdXJicyA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldEJsdXJicygkc2NvcGUuc2VsZWN0ZWRMaXN0LCB0eXBlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCk7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRFbWJlZFVybCA9ICh1cmwpID0+IHtcclxuICAgICAgaWYgKHVybC5pbmNsdWRlcyhcInlvdXR1YmUuY29tXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvWz8mXXY9KFteJl0rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJ5b3V0dS5iZVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL3lvdXR1XFwuYmVcXC8oW14mP10rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJ2aW1lby5jb21cIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC92aW1lb1xcLmNvbVxcLyhcXGQrKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsLmluY2x1ZGVzKFwib3Blbi5zcG90aWZ5XCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvdHJhY2tcXC8oW14mP10rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9lbWJlZC90cmFjay8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKHVybCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuIGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9P2F1dG9wbGF5PTFgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgZ2V0RGF0YSk7XHJcbiAgfSk7XHJcbiIsIi8qanNsaW50IGVzdmVyc2lvbjogNiovXHJcbmFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NBZG1pbkN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgVGVuVGhpbmdzU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8pID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5hZG1pbikge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcclxuICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLnJldmVyc2UgPSAhJHNjb3BlLm9yZGVyLnJldmVyc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0UXVldWUgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldFF1ZXVlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucXVldWUgPSByZXNwb25zZS5kYXRhLnJlcGxhY2UoXCIvblwiLCBcIjxici8+XCIpO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgICRzY29wZS5nZXRRdWV1ZSgpO1xyXG5cclxuICAgIFRlblRoaW5nc1N2Yy5nZXRQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICRzY29wZS5wYXVzZWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy5nZXRVc2VycygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKHVzZXIpID0+ICF1c2VyLmFkbWluKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUJhbiA9ICh1c2VyKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy50b2dnbGVCYW4odXNlci5faWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVQYXVzZSA9ICh1c2VyKSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy50b2dnbGVQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLnBhdXNlZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0dhbWVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZVBhcmFtcywgVGVuVGhpbmdzU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgICBjb25zdCBnZXRVc2VycyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLmdldFVzZXJzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUudXNlcnMgPSByZXNwb25zZS5kYXRhLmZpbHRlcigodXNlcikgPT4gIXVzZXIuYWRtaW4pO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCRzdGF0ZVBhcmFtcy5nYW1lKSB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRHYW1lKCRzdGF0ZVBhcmFtcy5nYW1lKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5nYW1lID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuZ2FtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzU3RhdHNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIFRlblRoaW5nc1N2Yykge1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBbXTtcclxuICAgICRzY29wZS5jYXRlZ29yeVN0YXRzID0geyBsYWJlbHM6IFtdLCBkYXRhc2V0czogW10gfTtcclxuXHJcbiAgICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5jdXJyZW50VXNlcikgcmV0dXJuO1xyXG4gICAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IFtdO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0UGxheVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFycyA9IF8udW5pcShkYXRhLm1hcCgoeyB5ZWFyIH0pID0+IHllYXIpKS5zb3J0KCk7XHJcbiAgICAgICAgY29uc3QgbW9udGhzID0gXy50aW1lcygxMiwgKGkpID0+IGkgKyAxKTtcclxuICAgICAgICAkc2NvcGUucGxheVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiBtb250aHMsXHJcbiAgICAgICAgICBzZXJpZXM6IHllYXJzLFxyXG4gICAgICAgICAgZGF0YTogeWVhcnMubWFwKCh5ZWFyKSA9PlxyXG4gICAgICAgICAgICBtb250aHMubWFwKChtb250aCkgPT4gZGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLm1vbnRoID09PSBtb250aCAmJiBpdGVtLnllYXIgPT09IHllYXIpPy51bmlxdWVQbGF5ZXJzIHx8IDApLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkNoYXJ0LmpzIExpbmUgQ2hhcnRcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RMYW5ndWFnZVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFycyA9IF8udW5pcShkYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkLnllYXIpKS5zb3J0KCk7XHJcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UpKS5zb3J0KCk7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IGxhbmd1YWdlcyxcclxuICAgICAgICAgIHNlcmllczogeWVhcnMsXHJcbiAgICAgICAgICBkYXRhOiB5ZWFycy5tYXAoKHllYXIpID0+XHJcbiAgICAgICAgICAgIGxhbmd1YWdlcy5tYXAoXHJcbiAgICAgICAgICAgICAgKGxhbmd1YWdlKSA9PiBkYXRhLmZpbmQoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2UgJiYgX2lkLnllYXIgPT09IHllYXIpPy5jb3VudCB8fCAwLFxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IF8uc29ydEJ5KGRhdGEsICh7IGNvdW50IH0pID0+IC1jb3VudCk7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IHNvcnRlZERhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQpLFxyXG4gICAgICAgICAgZGF0YTogW3NvcnRlZERhdGEubWFwKCh7IGNvdW50IH0pID0+IGNvdW50KV0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCAoKSA9PiB7XHJcbiAgICAgIGdldERhdGEoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1dvcmtvdXRDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgJHNjb3BlLnRpbWVFeGVyY2lzaW5nID0gMzA7XHJcbiAgJHNjb3BlLnRpbWVSZXN0aW5nID0gMTA7XHJcbiAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuXHJcbiAgdmFyIHNvdW5kcyA9IHtcclxuICAgIG9uOiBuZXcgQXVkaW8oJ29uLndhdicpLFxyXG4gICAgb2ZmOiBuZXcgQXVkaW8oJ29mZi53YXYnKSxcclxuICAgIHN3aXRjaDogbmV3IEF1ZGlvKCdzd2l0Y2gud2F2JyksXHJcbiAgfTtcclxuXHJcblxyXG4gIHZhciBleGVyY2lzZXMgPSBbXHJcbiAgICB7bmFtZTogJ0p1bXBpbmcgSmFja3MnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdXYWxsIFNpdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1B1c2gtVXAnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdDcnVuY2gnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTdGVwLVVwJywgc3BsaXQ6IHRydWV9LFxyXG4gICAge25hbWU6ICdTcXVhdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1RyaWNlcHMgRGlwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUGxhbmsnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdIaWdoIEtuZWVzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnTHVuZ2UnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwIHdpdGggUm90YXRpb24nLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTaWRlIFBsYW5rJywgc3BsaXQ6IHRydWV9XHJcbiAgXTtcclxuXHJcbiAgdmFyIGV4ZXJjaXNpbmc7XHJcblxyXG4gICRzY29wZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChleGVyY2lzZXMubGVuZ3RoIC0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvICgkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3RpbmcpKSkgKyAnLycgKyBleGVyY2lzZXMubGVuZ3RoO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS53b3Jrb3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZXhjZXJjaXNlVGltZSA9ICRzY29wZS50aW1lRXhlcmNpc2luZyArICRzY29wZS50aW1lUmVzdGluZztcclxuICAgIGlmICghJHNjb3BlLnRpbWVSZW1haW5pbmcpIHtcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSBleGVyY2lzZXMubGVuZ3RoICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgZXhlcmNpc2luZyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS50aW1lUmVtYWluaW5nLS07XHJcbiAgICAgICAgaWYgKCRzY29wZS50aW1lUmVtYWluaW5nID09PSAwKSB7XHJcbiAgICAgICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJ0ZpbmlzaGVkISBDb25ncmF0cyEnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdXJyZW50RXhlcmNpc2UgPSBNYXRoLmZsb29yKCRzY29wZS50aW1lUmVtYWluaW5nIC8gZXhjZXJjaXNlVGltZSk7XHJcbiAgICAgICAgdmFyIHRpbWVyID0gJHNjb3BlLnRpbWVSZW1haW5pbmcgLSBjdXJyZW50RXhlcmNpc2UgKiBleGNlcmNpc2VUaW1lO1xyXG4gICAgICAgICRzY29wZS50aW1lciA9IHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nID8gdGltZXIgLSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgOiB0aW1lcjtcclxuICAgICAgICBpZiAodGltZXIgPiAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0gZXhlcmNpc2VzW2V4ZXJjaXNlcy5sZW5ndGggLSBjdXJyZW50RXhlcmNpc2UgLSAxXTtcclxuICAgICAgICBpZiAodGltZXIgPT09ICRzY29wZS50aW1lRXhlcmNpc2luZykge1xyXG4gICAgICAgICAgc291bmRzLm9uLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRpbWVyID09PSAwKSB7XHJcbiAgICAgICAgICBzb3VuZHMub2ZmLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRzY29wZS5leGVyY2lzZS5zcGxpdCAmJiB0aW1lciA9PT0gTWF0aC5mbG9vcigkc2NvcGUudGltZUV4ZXJjaXNpbmcgLyAyKSkge1xyXG4gICAgICAgICAgc291bmRzLnN3aXRjaC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAkc2NvcGUudGltZXIgPSAnJztcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJycsIHNwbGl0OiBmYWxzZX07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0NhdGVnb3JpZXNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VGFza3MgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nLCBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZFRhc2sgPSBmdW5jdGlvbiAoY2F0ZWdvcnksIHRhc2spIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5ICsgJy90YXNrcycsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICBzdmMuY2hvaWNlcyA9IGxpc3Q7XHJcbiAgICBzdmMucHJpb3JpdHlMaXN0ID0gW107XHJcbiAgICAvL01ha2UgYSBuZXcgY2hvaWNlIGxpc3RcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKHZhciBqID0gaSArIDE7IGogPCBsaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgc3ZjLnByaW9yaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgZmlyc3RDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaSA6IGpdLm5hbWUsXHJcbiAgICAgICAgICBzZWNvbmRDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaiA6IGldLm5hbWUsXHJcbiAgICAgICAgICBjaG9pY2U6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNodWZmbGUoc3ZjLnByaW9yaXR5TGlzdCk7XHJcbiAgICBmb3IgKGkgaW4gc3ZjLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBzdmMucHJpb3JpdHlMaXN0W2ldLmlkID0gaSArIDE7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHJldHVybiBzdmMucHJpb3JpdHlMaXN0O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcclxuICAgIHZhciBtID0gYXJyYXkubGVuZ3RoLCB0LCBpO1xyXG4gICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGXigKZcclxuICAgIHdoaWxlIChtKSB7XHJcbiAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudOKAplxyXG4gICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbS0tKTtcclxuICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAvL2FycmF5W21dLmZpcnN0Q2hvaWNlO1xyXG4gICAgICB0ID0gYXJyYXlbbV07XHJcbiAgICAgIGFycmF5W21dID0gYXJyYXlbaV07XHJcbiAgICAgIGFycmF5W2ldID0gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdFbWFpbFN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuc2VuZCA9IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZW1haWwnLCBlbWFpbCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuc2VydmljZSgnRmlsZVN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gICAgc3ZjLmdldEltYWdlcyA9IGZ1bmN0aW9uKGZvbGRlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2ZpbGVzL2ltYWdlcy8nICsgZm9sZGVyKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLmdldFNvdW5kcyA9IGZ1bmN0aW9uKGZvbGRlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2ZpbGVzL3NvdW5kcy8nICsgZm9sZGVyKTtcclxuICAgIH07XHJcblxyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnR2FtZVN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gICAgc3ZjLmdldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZ2FtZXMvJyArIGdhbWUgKyAnLycgKyB1c2VyICsgJy9oaWdoc2NvcmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLnNldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyLCBzY29yZSkge1xyXG4gICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9nYW1lcy8nICsgZ2FtZSArICcvJyArIHVzZXIgKyAnL2hpZ2hzY29yZScsIHtcclxuICAgICAgICBzY29yZTogc2NvcmVcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnTGFuZ3VhZ2VTdmMnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5sYW5ndWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkVOXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkVuZ2xpc2hcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWdiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIk5MXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIk5lZGVybGFuZHNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLW5sXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkZSXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkZyYW7Dp2Fpc1wiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tZnJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy50ZXh0ID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgc3ZjLnNlbGVjdGVkTGFuZ3VhZ2UgPSBzdmMubGFuZ3VhZ2VzWzBdO1xyXG5cclxuICBzdmMuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcclxuICAgIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICByZXR1cm4gbGFuZ3VhZ2U7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHN2Yy5zZWxlY3RlZExhbmd1YWdlO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZmV0Y2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJyk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQb3N0ID0gZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMvJyArIHBvc3QuX2lkKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJUZW5UaGluZ3NTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9ib3RzL3RlbnRoaW5ncy9xdWV1ZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0cyA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgIHZhciB1cmwgPVxyXG4gICAgICBgL2FwaS90ZW50aGluZ3MvbGlzdHM/YCArXHJcbiAgICAgIChvcHRpb25zLmxpbWl0ID8gYCZsaW1pdD0ke29wdGlvbnMubGltaXR9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMucGFnZSA/IGAmcGFnZT0ke29wdGlvbnMucGFnZX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zb3J0QnkgPyBgJnNvcnRfYnk9JHtvcHRpb25zLnNvcnRCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5vcmRlckJ5ID8gYCZvcmRlcl9ieT0ke29wdGlvbnMub3JkZXJCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5sYW5ndWFnZXMgJiYgb3B0aW9ucy5sYW5ndWFnZXMubGVuZ3RoID4gMCA/IGAmbGFuZ3VhZ2U9JHtvcHRpb25zLmxhbmd1YWdlcy5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5jYXRlZ29yaWVzICYmIG9wdGlvbnMuY2F0ZWdvcmllcy5sZW5ndGggPiAwID8gYCZjYXRlZ29yaWVzPSR7b3B0aW9ucy5jYXRlZ29yaWVzLmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnNlYXJjaCA/IGAmc2VhcmNoPSR7b3B0aW9ucy5zZWFyY2h9YCA6IFwiXCIpO1xyXG4gICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZWFyY2hMaXN0cyA9IChuYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9zZWFyY2gvbGlzdC1uYW1lcy8ke25hbWV9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9jYXRlZ29yaWVzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2xhbmd1YWdlc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucHV0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCwgbGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZUxpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0c1wiLCB7XHJcbiAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIGxpc3Q6IGxpc3QsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMubWVyZ2VMaXN0cyA9IGZ1bmN0aW9uIChsaXN0cykge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9tZXJnZVwiLCB7IGxpc3RzOiBsaXN0cyB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuZGVsZXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0SWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3RJZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnB1dChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXMvXCIgKyB2YWx1ZS5faWQsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXNcIiwgdmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5kZWxldGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzL1wiICsgdmFsdWUuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMucmVwb3J0TGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvcmVwb3J0L1wiICsgdXNlci5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9jYXRlZ29yaWVzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0TGFuZ3VhZ2VTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9sYW5ndWFnZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBsYXlTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9wbGF5XCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRCbHVyYnMgPSBmdW5jdGlvbiAobGlzdCwgdHlwZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL2xpc3RzLyR7bGlzdC5faWR9L2JsdXJicy8ke3R5cGV9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvcGF1c2VgKTtcclxuICB9O1xyXG5cclxuICBzdmMudG9nZ2xlUGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvcGF1c2VgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0R2FtZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvZ2FtZS8ke2lkfWApO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiVXNlclN2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vyc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VXNlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9hbGxcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnRvZ2dsZUJhbiA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdXNlcnMvYmFuLyR7aWR9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNldFRva2VuID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IHRva2VuO1xyXG4gICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmF1dGhlbnRpY2F0ZSA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzL2F1dGhlbnRpY2F0ZVwiLCB7XHJcbiAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS50b2tlbiA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmxvZ2luID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL2xvZ2luXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICByZXR1cm4gc3ZjLnNldFRva2VuKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIuX2lkLCB7XHJcbiAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uICh1c2VyLCBwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL3ZlcmlmaWNhdGlvblwiLCB7XHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uICh1c2VyLCBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9wYXNzd29yZFwiLCB7XHJcbiAgICAgIG9sZFBhc3N3b3JkOiBvbGRQYXNzd29yZCxcclxuICAgICAgbmV3UGFzc3dvcmQ6IG5ld1Bhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXIsIG5ld1VzZXJuYW1lKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL3VzZXJuYW1lXCIsIHtcclxuICAgICAgICBuZXdVc2VybmFtZTogbmV3VXNlcm5hbWUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiWC1BdXRoXCJdID0gXCJcIjtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlVXNlciA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnNcIiwge1xyXG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuY29udHJvbGxlcignUXVpekFuaW1hbHNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBGaWxlU3ZjKSB7XHJcblxyXG4gICAgRmlsZVN2Yy5nZXRTb3VuZHMoJ2FuaW1hbHMnKVxyXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5hbmltYWxzID0gXy5zaHVmZmxlKHJlc3BvbnNlLmRhdGEubWFwKGFuaW1hbCA9PiAoe1xyXG4gICAgICAgICAgc291bmQ6IGFuaW1hbCxcclxuICAgICAgICAgIG5hbWU6IGFuaW1hbC5zdWJzdHJpbmcoMCwgYW5pbWFsLmluZGV4T2YoJy4nKSkucmVwbGFjZSgnXycsICcgJykuY2FwaXRhbGl6ZSgpXHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICBmb3IgKGxldCBhbmltYWwgb2YgJHNjb3BlLmFuaW1hbHMpIHtcclxuICAgICAgICAgIGFuaW1hbC5hbnN3ZXJzID0gXy5zaHVmZmxlKFthbmltYWwubmFtZSwgLi4uZ2V0UmFuZG9tQW5pbWFscyhhbmltYWwubmFtZSldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmFuaW1hbHMpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuZ3Vlc3MgPSAoYW5pbWFsLCBndWVzcykgPT4ge1xyXG4gICAgICBhbmltYWwuZ3Vlc3MgPSBndWVzcztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0UmFuZG9tQW5pbWFscyA9IG5hbWUgPT4gXy5zaHVmZmxlKCRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gbmFtZSAhPT0gYW5pbWFsLm5hbWUpLm1hcChhbmltYWwgPT4gYW5pbWFsLm5hbWUpKS5zbGljZSgwLCA1KTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0U2NvcmUgPSAoKSA9PiBgJHskc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IGFuaW1hbC5uYW1lID09PSBhbmltYWwuZ3Vlc3MpLmxlbmd0aH0vJHskc2NvcGUuYW5pbWFscy5sZW5ndGh9YDtcclxuXHJcbiAgICAkc2NvcGUuaXNTY29yZVZpc2libGUgPSAoKSA9PiAkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IGFuaW1hbC5ndWVzcykubGVuZ3RoID09PSAkc2NvcGUuYW5pbWFscy5sZW5ndGg7XHJcbiAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6R29vZ2xlQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnZ29vZ2xlJylcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1F1aXpMb2dvc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ2xvZ29zJylcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1F1aXpNb3ZpZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdtb3ZpZXMnKVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5jb250cm9sbGVyKCdRdWl6U2tlbGV0b25zQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgRmlsZVN2Yykge1xyXG5cclxuICAgIEZpbGVTdmMuZ2V0SW1hZ2VzKCdza2VsZXRvbnMnKVxyXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5hbmltYWxzID0gXy5zaHVmZmxlKHJlc3BvbnNlLmRhdGEubWFwKGFuaW1hbCA9PiAoe1xyXG4gICAgICAgICAgaW1hZ2U6IGFuaW1hbCxcclxuICAgICAgICAgIG5hbWU6IGFuaW1hbC5zdWJzdHJpbmcoMCwgYW5pbWFsLmluZGV4T2YoJy4nKSkucmVwbGFjZSgnXycsICcgJykuY2FwaXRhbGl6ZSgpXHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICBmb3IgKGxldCBhbmltYWwgb2YgJHNjb3BlLmFuaW1hbHMpIHtcclxuICAgICAgICAgIGFuaW1hbC5hbnN3ZXJzID0gXy5zaHVmZmxlKFthbmltYWwubmFtZSwgLi4uZ2V0UmFuZG9tQW5pbWFscyhhbmltYWwubmFtZSldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmFuaW1hbHMpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuZ3Vlc3MgPSAoYW5pbWFsLCBndWVzcykgPT4ge1xyXG4gICAgICBhbmltYWwuZ3Vlc3MgPSBndWVzcztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0UmFuZG9tQW5pbWFscyA9IG5hbWUgPT4gXy5zaHVmZmxlKCRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gbmFtZSAhPT0gYW5pbWFsLm5hbWUpLm1hcChhbmltYWwgPT4gYW5pbWFsLm5hbWUpKS5zbGljZSgwLCAxMCk7XHJcblxyXG4gICAgJHNjb3BlLmdldFNjb3JlID0gKCkgPT4gYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwubmFtZSA9PT0gYW5pbWFsLmd1ZXNzKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWA7XHJcblxyXG4gICAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwuZ3Vlc3MpLmxlbmd0aCA9PT0gJHNjb3BlLmFuaW1hbHMubGVuZ3RoO1xyXG4gIH0pOyJdfQ==
