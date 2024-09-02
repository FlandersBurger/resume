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
}), angular.module("app").controller("AppCtrl", function ($scope, LanguageSvc, UserSvc) {
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
    list ? "new" === list._id ? $scope.addList() : TenThingsSvc.getList(list).then(({
      data
    }) => {
      $scope.selectedList = data, $location.search("list", data._id), $scope.selectedLanguage = $scope.selectedList.language;
    }).catch(err => console.error(err)) : ($scope.selectedList = void 0, $location.search("list", null));
  };
  $scope.valueOrder = {
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
  }, $scope.$watch("currentUser", () => {
    $scope.currentUser && (TenThingsSvc.getLanguages().then(response => {
      $scope.languages = response.data, $scope.languageFilter = {};
    }), TenThingsSvc.getCategories().then(response => {
      $scope.categories = response.data, $scope.categoryFilter = {};
    }), TenThingsSvc.getListLanguageStats().then(({
      data
    }) => {
      $scope.languageStats = data.reduce((result, {
        _id,
        count
      }) => (result[_id.language] = (result[_id.language] || 0) + count, result), {});
    }), TenThingsSvc.getListCategoryStats().then(({
      data
    }) => {
      $scope.categoryStats = data.reduce((result, {
        _id,
        count
      }) => (result[_id] = count, result), {});
    }), $location.search().list && $scope.setSelectedList({
      _id: $location.search().list
    }), $scope.search = $location.search().search || "", $scope.getLists());
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
    $scope.paused = response.data, console.log($scope.paused);
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
}]), angular.module("app").service("CategoriesSvc", function ($http) {
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
  }, svc.getCategories = () => $http.get("/api/tenthings/categories"), svc.getLanguages = () => $http.get("/api/tenthings/languages"), svc.getList = function (list) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiY29udHJvbGxlcnMvYXBwLmN0cmwuanMiLCJjb250cm9sbGVycy9hc3Rlcm9pZHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2J1YmJsZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NoYXJhZGVzLmN0cmwuanMiLCJjb250cm9sbGVycy9jb250YWN0LmN0cmwuanMiLCJjb250cm9sbGVycy9leHBlcmllbmNlLmN0cmwuanMiLCJjb250cm9sbGVycy9ob2JiaWVzLmN0cmwuanMiLCJjb250cm9sbGVycy9sZW1taW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbGlzdHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xvZ2luLmN0cmwuanMiLCJjb250cm9sbGVycy9wb3N0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJvZmlsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvc2tpbGxzLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3MuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2FkbWluLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NnYW1lLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NzdGF0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvd29ya291dC5jdHJsLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJzZXJ2aWNlcy9jYXRlZ29yaWVzLnN2Yy5qcyIsInNlcnZpY2VzL2VtYWlsLnN2Yy5qcyIsInNlcnZpY2VzL2ZpbGUuc3ZjLmpzIiwic2VydmljZXMvZ2FtZS5zdmMuanMiLCJzZXJ2aWNlcy9sYW5ndWFnZS5zdmMuanMiLCJzZXJ2aWNlcy9wb3N0cy5zdmMuanMiLCJzZXJ2aWNlcy90ZW50aGluZ3Muc3ZjLmpzIiwic2VydmljZXMvdXNlci5zdmMuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2FuaW1hbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvZ29vZ2xlLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2xvZ29zLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL21vdmllcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9za2VsZXRvbnMuY3RybC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRvbWFpbnMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0cmluZyIsInByb3RvdHlwZSIsInZhbHVlIiwicmVkdWNlIiwicmVzdWx0IiwibGV0dGVyIiwicmVwbGFjZSIsInRoaXMiLCJTUEVDSUFMX0NIQVJBQ1RFUlMiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZURpYWNyaXRpY3MiLCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyIsImV4dHJhIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInJlcGxhY2VBbGwiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsIiRzY29wZSIsIkxhbmd1YWdlU3ZjIiwiVXNlclN2YyIsIiQiLCJsb2FkIiwiZmFkZU91dCIsImZhZGVJbiIsIm9uIiwiY2xvc2VzdCIsInRvZ2dsZUNsYXNzIiwiY2hlY2tlZCIsImRvY3VtZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidGhlbWVDb3VudGVyIiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiZmxpcFRoZW1lIiwic2hvdyIsImhpZGUiLCJzZXRUaW1lb3V0IiwiZ2V0SlNPTiIsInNraWxscyIsImZpbHRlciIsInNraWxsIiwiaG9iYmllcyIsImpvYnMiLCJqb2IiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiY2hhcmFkZXMiLCJnZXRUaW1lU3BhbiIsImxhbmd1YWdlcyIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInNlbGVjdExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImhvdmVyZGl2IiwiZGl2aWQiLCJsZWZ0IiwiY2xpZW50WCIsInRvcCIsImNsaWVudFkiLCJnZXRFbGVtZW50QnlJZCIsImNzcyIsInRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsInVzZXIiLCJsb2dpbiIsInRoZW4iLCJyZXNwb25zZSIsIiRvbiIsIl8iLCJsb2dnZWRJbiIsIl9pZCIsImN1cnJlbnRVc2VyIiwiYmlydGhEYXRlIiwibG9hZGluZyIsImxvZ291dCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJjbGVhciIsImNhdGNoIiwiZXJyb3IiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsIiRsb2NhdGlvbiIsIkdhbWVTdmMiLCJhbm5vdW5jZSIsImNhbnZhcyIsInBhdGgiLCJhbGVydCIsImN0eCIsImdldENvbnRleHQiLCJmb250IiwiZmlsbFN0eWxlIiwidGV4dEFsaWduIiwic2hvdHMiLCJhc3Rlcm9pZHMiLCJwb3dlcnVwcyIsImV4cGxvc2lvbnMiLCJtYXAiLCJzcGFjZXBpY3MiLCJzcGFjZSIsInBvd2VydXBUeXBlcyIsIm5hbWUiLCJhbm5vdW5jZW1lbnQiLCJjeWNsZSIsInJvd3MiLCJjb2x1bW5zIiwic2l6ZSIsImltZyIsIkltYWdlIiwiYWN0aXZhdGUiLCJzcGFjZXNoaXAiLCJtYXhTcGVlZCIsImNvb2xkb3duIiwiY29vbGRvd25UaW1lIiwicmFuZ2UiLCJzaGllbGQiLCJleHBsb2RlIiwic3Bhd25Bc3Rlcm9pZHMiLCJwb3dlcnVwIiwiYXJyYXkiLCJzcmMiLCJleHBsb3Npb25JbWFnZSIsImV2YWx1YXRlS2V5cyIsInBsYXlpbmciLCJzaG9vdCIsInJvdGF0aW9uIiwic3BlZWQiLCJzY29yZSIsIiRhcHBseSIsIlNwYWNlc2hpcCIsImF1dG9TcGF3biIsIndpZHRoIiwiaGVpZ2h0IiwiY2Fubm9uIiwieCIsInkiLCJwb3NpdGlvbiIsImFuZ2xlIiwiaWQiLCJyb3VuZCIsIlNob3QiLCJtb3ZlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImZpbGwiLCJhc3Rlcm9pZCIsImhpdCIsImdhbWVPdmVyIiwiY29zIiwic2luIiwibGlmZXNwYW4iLCJBc3Rlcm9pZCIsImdldEVudHJ5UG9zaXRpb24iLCJyb3RhdGlvblNwZWVkIiwiRXhwbG9zaW9uIiwic2hvdCIsInBvaW50cyIsInNwYXduUG93ZXJ1cCIsIm9iamVjdCIsIlBvd2VydXAiLCJkZWxheSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJjb2x1bW4iLCJyb3ciLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiZ3JpZFgiLCJncmlkWSIsIm9iamVjdDEiLCJvYmplY3QyIiwia2V5cyIsImFtb3VudCIsImhpZ2hzY29yZSIsInNldEhpZ2hzY29yZSIsInJlc2l6ZUNhbnZhcyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlDb2RlIiwid2hpY2giLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3IiwiY2xlYXJSZWN0IiwiZ3JhZGllbnQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsInRhbGx5IiwiZmlsbFRleHQiLCJtZWFzdXJlVGV4dCIsImJhY2tncm91bmRJbWFnZSIsImJ1YmJsZXMiLCJjb2xvcnMiLCJCdWJibGUiLCJyYWRpdXMiLCJleHBhbmRpbmciLCJjaXJjdW1mZXJlbmNlIiwibWF4UmFkaXVzIiwidngiLCJ2eSIsImZpbHRlckJ1YmJsZXMiLCJidWJibGUiLCJzZWxlY3RXb3JkIiwiY2F0ZWdvcnkiLCJ3b3JkIiwiRW1haWxTdmMiLCJvcHRpb25zIiwidGV4dCIsImNvbnRhY3QiLCJlbWFpbCIsInBob25lIiwiYWJvdXQiLCJtZXNzYWdlIiwic2VuZGluZyIsInNlbnQiLCJzdGF0dXMiLCJlcnIiLCJnZXRTa2lsbCIsInNraWxsQ29kZSIsImNvZGUiLCIkd2luZG93IiwiaG9iYnlTZWxlY3RvclZpc2libGUiLCJzZWxlY3RlZEhvYmJ5Iiwic2VsZWN0SG9iYnkiLCJob2JieSIsInNob3dIb2JieSIsImluZGV4IiwiaW1hZ2VzIiwiTEVGVCIsIlJJR0hUIiwibGVtbWluZ3NJbWFnZSIsImRlY29ySW1hZ2UiLCJsZW1taW5ncyIsInN0YXJ0ZWQiLCJhY3Rpb25zIiwid2FsayIsInN0YXJ0IiwiZW5kIiwicmV2ZXJzZSIsImh1aCIsImZhbGwiLCJmbHkiLCJzdG9wIiwiY2xpbWIiLCJidWlsZCIsInB1bmNoIiwiZGlnIiwiTGVtbWluZyIsImluaXQiLCJhY3QiLCJhY3Rpb24iLCJhbmltYXRpb24iLCJzY2FsZSIsImhhdGNoIiwib3BlbiIsInJlY3QiLCJDYXRlZ29yaWVzU3ZjIiwic2hvd0NhdGVnb3J5IiwiZ2V0Q2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJ0YXNrcyIsImoiLCJ0YXNrIiwic2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2VsZWN0ZWRUYXNrcyIsInNlbGVjdGFibGVUYXNrcyIsImVudGVyZWRDYXRlZ29yeSIsIm5ld0NhdGVnb3J5IiwiZm91bmQiLCJhZGRDYXRlZ29yeSIsIm5ld1Rhc2siLCJzZWxlY3RUYXNrIiwiYWRkVGFzayIsImVudGVyZWRUYXNrIiwicmVtb3ZlVGFzayIsInVuc2VsZWN0VGFzayIsInRhc2tMaXN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInN0YXJ0UHJpb3JpdGl6aW5nIiwic2V0UHJpb3JpdHlMaXN0IiwiZ2V0UXVlc3Rpb25zIiwiY291bnRlciIsInVpIiwiZmlyZWJhc2V1aSIsIkF1dGhVSSIsInN0YXJ0VUkiLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzIiwiY3JlZGVudGlhbCIsInJlZGlyZWN0VXJsIiwiZ2V0SWRUb2tlbiIsImlkVG9rZW4iLCJhdXRoZW50aWNhdGUiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWxWZXJpZmllZCIsIiRlbWl0IiwibW9kYWwiLCJ0eXBlIiwic2lnbkluRmFpbHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY3JlZCIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwidWlTaG93biIsInN0eWxlIiwiZGlzcGxheSIsInNpZ25JblN1Y2Nlc3NVcmwiLCJzaWduSW5PcHRpb25zIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiUFJPVklERVJfSUQiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsInNpZ25JbkZsb3ciLCJldmVudCIsInJlc2V0IiwiJGZpbHRlciIsIlBvc3RzU3ZjIiwiYWRkUG9zdCIsInBvc3RCb2R5IiwiY3JlYXRlIiwiYm9keSIsInBvc3QiLCJmZXRjaCIsInBvc3RzIiwiZ2V0UG9zdCIsInVuc2hpZnQiLCJjb3VudHJpZXMiLCJmbGFnIiwidGlkYml0IiwiZGF0ZU9wdGlvbnMiLCJtYXhEYXRlIiwibWluRGF0ZSIsImluaXREYXRlIiwiZGF0ZXBpY2tlck1vZGUiLCJ1c2VybmFtZVRvZ2dsZSIsInBhc3N3b3JkVG9nZ2xlIiwidG9nZ2xlVXNlcm5hbWUiLCJuZXdVc2VybmFtZSIsInVzZXJuYW1lIiwidG9nZ2xlUGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImNoZWNrUGFzc3dvcmQiLCJwYXNzd29yZCIsIm9yaWdpbmFsQmciLCJhbmltYXRlIiwiYmFja2dyb3VuZENvbG9yIiwiY2hhbmdlUGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsImNoYW5nZVVzZXJuYW1lIiwidXBkYXRlVXNlciIsImZsYWdzIiwidXNlckZsYWdzIiwibG9hZENvdW50cmllcyIsIiRxdWVyeSIsImNvdW50cnkiLCIkd2F0Y2giLCJpbmNsdWRlcyIsInNlbGVjdGVkU2tpbGwiLCJza2lsbHNWaXNpYmxlIiwicHJvamVjdHMiLCJsYWJlbHMiLCJlbXBsb3llciIsImNvbmNhdCIsImZpbHRlcmVkUHJvamVjdHMiLCJwcm9qZWN0Iiwic2V0U2VsZWN0ZWRTa2lsbCIsImNoYXJ0T3B0aW9ucyIsImN1dG91dFBlcmNlbnRhZ2UiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidG9vbHRpcHMiLCJjaGFydFN0eWxlIiwiaW1hZ2UiLCIkc2NlIiwiVGVuVGhpbmdzU3ZjIiwicGFnZSIsImxpc3RzIiwic2VhcmNoIiwibmV3SXRlbSIsImxhbmd1YWdlRmlsdGVyIiwiY2F0ZWdvcnlGaWx0ZXIiLCJzZWxlY3RlZExpc3QiLCJ1bmRlZmluZWQiLCJoaWdobGlnaHRlZExpc3RJZHMiLCJsaXN0SWRzVG9EZWxldGUiLCJjb25maXJtZWQiLCJleGhhdXN0ZWQiLCJvYmplY3RDYXRlZ29yaWVzIiwiYmx1cmJUeXBlcyIsImFwaSIsImFkbWluT25seSIsImhhdmVDb21tb25JdGVtcyIsImFycjEiLCJhcnIyIiwic29tZSIsImtleURvd24iLCJpcyIsImNyZWF0ZVZhbHVlIiwidHJpZ2dlciIsImFkZExpc3QiLCJjcmVhdG9yIiwidmFsdWVzIiwiYW5zd2VycyIsImlzRHluYW1pYyIsInNldFNlbGVjdGVkSXRlbSIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkTGlzdCIsImxpc3QiLCJnZXRMaXN0IiwidmFsdWVPcmRlciIsImZpZWxkIiwib3JkZXIiLCJvcmRlckJ5IiwiZ2V0TGlzdHMiLCJnZXRNb3JlTGlzdHMiLCJhc3luYyIsInNldExhbmd1YWdlRmlsdGVyIiwic2V0Q2F0ZWdvcnlGaWx0ZXIiLCJ0b2dnbGVDYXRlZ29yeUZpbHRlciIsImFsbENhdGVnb3JpZXMiLCJzb3J0QnkiLCJsaW1pdCIsImNvdW50IiwibmV4dFBhZ2UiLCJnZXRMaXN0TmFtZSIsImxpc3RJZCIsInVwZGF0ZVZhbHVlIiwidXBkYXRlZEl0ZW1SZXNwb25zZSIsInVwZGF0ZUxpc3RWYWx1ZSIsImJsdXJiVHlwZSIsImRlbGV0ZVZhbHVlIiwiaGFzRHVwbGljYXRlIiwiY3JlYXRlZEl0ZW1SZXNwb25zZSIsImNyZWF0ZUxpc3RWYWx1ZSIsInVwc2VydExpc3QiLCJibHVyYiIsImRlbGV0ZUxpc3RWYWx1ZSIsInVwZGF0ZXMiLCJzYXZpbmciLCJjaGFuZ2VzIiwidXBkYXRlTGlzdCIsImxpc3RJbmRleCIsImZpbmRJbmRleCIsImNyZWF0ZUxpc3QiLCJhc3NpZ24iLCJkZWxldGVMaXN0IiwiZGVsZXRlTGlzdHMiLCJjb25maXJtTWVyZ2VMaXN0cyIsIm1lcmdlTGlzdHMiLCJjb25maXJtRGVsZXRlTGlzdHMiLCJ0b2dnbGVIaWdobGlnaHRlZExpc3QiLCJoaWdobGlnaHRlZExpc3RJZCIsIm5vbkVuZ2xpc2hJbmRleCIsInNldERpZmZpY3VsdHkiLCJkaWZmaWN1bHR5Iiwic2V0RnJlcXVlbmN5IiwiZnJlcXVlbmN5Iiwic2V0Q2F0ZWdvcnkiLCJjYXRlZ29yeUluZGV4IiwiYW5zd2VyIiwicmVtb3ZlQWxsQnV0TGV0dGVycyIsImdldEJsdXJicyIsImdldHRpbmdCbHVyYnMiLCJnZXRFbWJlZFVybCIsInZpZGVvSWQiLCJtYXRjaCIsInRyaW0iLCJ0cnVzdEFzUmVzb3VyY2VVcmwiLCJnZXRMYW5ndWFnZXMiLCJnZXRMaXN0TGFuZ3VhZ2VTdGF0cyIsImxhbmd1YWdlU3RhdHMiLCJnZXRMaXN0Q2F0ZWdvcnlTdGF0cyIsImNhdGVnb3J5U3RhdHMiLCJhZG1pbiIsImdldFVzZXJzIiwiZ2V0UXVldWUiLCJxdWV1ZSIsImdldFBhdXNlIiwicGF1c2VkIiwidXNlcnMiLCJ0b2dnbGVCYW4iLCJ0b2dnbGVQYXVzZSIsIiRzdGF0ZVBhcmFtcyIsImdhbWUiLCJnZXRHYW1lIiwiZGF0YXNldHMiLCJnZXRQbGF5U3RhdHMiLCJ5ZWFycyIsInVuaXEiLCJtb250aHMiLCJ0aW1lcyIsInBsYXlTdGF0cyIsInNlcmllcyIsIm1vbnRoIiwidW5pcXVlUGxheWVycyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwidGl0bGUiLCJzb3J0ZWREYXRhIiwidGltZVJlbWFpbmluZyIsInRpbWVFeGVyY2lzaW5nIiwidGltZVJlc3RpbmciLCJyZXN0IiwiZXhlcmNpc2luZyIsInNvdW5kcyIsIkF1ZGlvIiwib2ZmIiwic3dpdGNoIiwiZXhlcmNpc2VzIiwic3BsaXQiLCJwcm9ncmVzcyIsIndvcmtvdXQiLCJleGNlcmNpc2VUaW1lIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVyIiwiZXhlcmNpc2UiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRFeGVyY2lzZSIsInBsYXkiLCJkaXJlY3RpdmUiLCIkZG9jdW1lbnQiLCJyZXN0cmljdCIsInNjb3BlIiwiY2xpY2tPdXRzaWRlIiwibGluayIsImVsIiwiYXR0ciIsInRhcmdldCIsImNvbnRhaW5zIiwiJGV2YWwiLCIkc3RhdGUiLCIkY29tcGlsZSIsIiRpbnRlcnBvbGF0ZSIsImdldFN0eWxlIiwidGVtcGxhdGVTdHlsZVVybCIsImhyZWYiLCJyZWwiLCJlbGVtIiwidGVtcGxhdGVTdHlsZXMiLCJodG1sIiwic3RhcnRTeW1ib2wiLCJlbmRTeW1ib2wiLCJhcHBlbmQiLCJ0b1N0YXRlIiwidG9QYXJhbXMiLCJmcm9tU3RhdGUiLCJmcm9tUGFyYW1zIiwic3RhdGVzIiwicGFyZW50IiwiZ2V0Iiwidmlld3MiLCJ2aWV3IiwiZmxhdCIsImdldFN0eWxlcyIsIiRodHRwIiwic3ZjIiwiZ2V0VGFza3MiLCJjaG9pY2VzIiwicHJpb3JpdHlMaXN0IiwiZmlyc3RDaG9pY2UiLCJzZWNvbmRDaG9pY2UiLCJjaG9pY2UiLCJ0IiwibSIsInNodWZmbGUiLCJnZXRQcmlvcml0eUxpc3QiLCJnZXRJbWFnZXMiLCJmb2xkZXIiLCJnZXRTb3VuZHMiLCJnZXRIaWdoc2NvcmUiLCJqb2luIiwicHV0IiwiZGVsZXRlIiwicmVwb3J0TGlzdCIsImdldFVzZXIiLCJzZXRUb2tlbiIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiY3JlYXRlVXNlciIsIkZpbGVTdmMiLCJhbmltYWxzIiwiYW5pbWFsIiwic291bmQiLCJzdWJzdHJpbmciLCJjYXBpdGFsaXplIiwiZ2V0UmFuZG9tQW5pbWFscyIsImd1ZXNzIiwiZ2V0U2NvcmUiLCJpc1Njb3JlVmlzaWJsZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQUEsMkJBQUFBLEdBQUEsQ0FDQTtJQUNBQyxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQTtFQUdBQyxPQUFBQSxHQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxDQUFBO0FBR0FDLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsa0JBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFSLDJCQUFBQSxDQUFBUyxNQUFBQSxDQUFBLENBQUFDLE1BQUFBLEVBQUFDLE1BQUFBLEtBQ0FELE1BQUFBLENBQUFFLE9BQUFBLENBQUFELE1BQUFBLENBQUFULE9BQUFBLEVBQUFTLE1BQUFBLENBQUFWLElBQUFBLENBQUFBLEVBQ0FZLElBQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQTtBQUdBLE1BQUFDLGtCQUFBQSxHQUFBLHFDQUFBO0FBRUFWLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEseUJBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFB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RUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsWUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFdBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxVQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxXQUFBO0lBQ0FFLFVBQUFBLEVBQUEsY0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsTUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsT0FBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFdBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxpQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxvQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsZ0JBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsbUJBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGlCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG9CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxhQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFlBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxjQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsaUJBQUE7SUFDQUQs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QUgsTUFBQUEsQ0FBQUksVUFBQUEsQ0FBQSxJQUFBLENBQUE7RUFDQUQsR0FBQUEsQ0FBQUUsSUFBQUEsR0FBQSxvQkFBQSxFQUNBRixHQUFBQSxDQUFBRyxTQUFBQSxHQUFBLEtBQUEsRUFDQUgsR0FBQUEsQ0FBQUksU0FBQUEsR0FBQSxRQUFBO0VBQ0EsTUFBQUMsS0FBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsU0FBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsUUFBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsVUFBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsR0FBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsU0FBQUEsR0FBQSxFQUFBO0lBQ0FDLEtBQUFBLEdBQUF4RSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBd0UsU0FBQUEsQ0FBQUE7SUFDQUUsWUFBQUEsR0FBQSxDQUNBO01BQ0FDLElBQUFBLEVBQUEsT0FBQTtNQUNBQyxZQUFBQSxFQUFBLGFBQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0FsSyxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQTBKLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBQSxTQUFBQSxDQUFBQyxRQUFBQSxJQUFBLEdBQ0E7TUFBQTtJQUFBLENBQUEsRUFFQTtNQUNBVixJQUFBQSxFQUFBLFVBQUE7TUFDQUMsWUFBQUEsRUFBQSxZQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBbEssQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUEwSixHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUUsUUFBQUEsR0FBQSxDQUFBLEtBQ0FGLFNBQUFBLENBQUFHLFlBQUFBLElBQUEsQ0FBQSxDQUVBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQVosSUFBQUEsRUFBQSxPQUFBO01BQ0FDLFlBQUFBLEVBQUEsZ0JBQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBO1FBQ0FsSyxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQTBKLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBQSxTQUFBQSxDQUFBSSxLQUFBQSxJQUFBLENBQ0E7TUFBQTtJQUFBLENBQUEsRUFFQTtNQUNBYixJQUFBQSxFQUFBLFFBQUE7TUFDQUMsWUFBQUEsRUFBQSxRQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBbEssQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUEwSixHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUssTUFBQUEsR0FBQUEsQ0FBQSxDQUNBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQWQsSUFBQUEsRUFBQSxNQUFBO01BQ0FDLFlBQUFB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QSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEdBQ0FwSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFvSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXJLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQW9LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBckssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBb0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FDQSxLQUFBLEVBQ0EsTUFBQSxHQUNBcEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBb0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FySyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFvSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXJLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQW9LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxDQUFBLEVBRUFILFFBQUFBLENBQUFFLFlBQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsR0FDQXBLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQW9LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBckssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBb0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FySyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFvSyxLQUFBQSxHQUFB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RUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFJLElBQUFBLEVBQUE7UUFDQU4sS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFLLEtBQUFBLEVBQUE7UUFDQVAsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFNLEtBQUFBLEVBQUE7UUFDQVIsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFPLEtBQUFBLEVBQUE7UUFDQVQsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFRLEdBQUFBLEVBQUE7UUFDQVYsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEs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eU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsV0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxnQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxlQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsd0JBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsY0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGtCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxpQ0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxrQ0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxlQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEseUJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsdUNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsMEJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxhQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsY0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsTUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsa0JBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxnQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLG9CQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxNQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLDZCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGlDQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLHNEQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxlQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxXQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsbUJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSw4Q0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxXQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE1BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsZUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsbUNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxXQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxhQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsZ0NBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsTUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSwyQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsdUJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsd0NBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsb0JBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxnQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGtDQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsYUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxlQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsWUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLHNCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsNEJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsWUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxrQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSw0Q0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxNQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLDBCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsWUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsV0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxlQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxXQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsTUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxhQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE1BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxNQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGtCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGtCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLDJCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsYUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxxQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLG9CQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsY0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxpQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxXQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLDhDQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsd0JBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxjQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsYUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSx1QkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxhQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLDJCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLHNCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsMEJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsTUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSw2QkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxNQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsWUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsY0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxxQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLDJCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLDhCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxzQ0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSwwQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxrQ0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxtQ0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSx5QkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxzQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsbUJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFB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QTtJQUFBcEksVUFBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQTtJQUFBcEQsSUFBQUEsRUFBQSxtQkFBQTtJQUFBeUwsU0FBQUEsRUFBQUEsQ0FBQTtFQUFBLENBQUEsRUFDQTtJQUFBRCxHQUFBQSxFQUFBLElBQUE7SUFBQXBJLFVBQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUE7SUFBQXBELElBQUFBLEVBQUEsZ0JBQUE7SUFBQXlMLFNBQUFBLEVBQUFBLENBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQUQsR0FBQUEsRUFBQSxRQUFBO0lBQUFwSSxVQUFBQSxFQUFBLENBQUEsUUFBQSxFQUFBLFlBQUEsQ0FBQTtJQUFBcEQsSUFBQUEsRUFBQSxnQkFBQTtJQUFBeUwsU0FBQUEsRUFBQUEsQ0FBQTtFQUFBLENBQUEsRUFDQTtJQUFBRCxHQUFBQSxFQUFBLE9BQUE7SUFBQXBJLFVBQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUE7SUFBQXBELElBQUFBLEVBQUEsaUJBQUE7SUFBQXlMLFNBQUFBLEVBQUFBLENBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQUQsR0FBQUEsRUFBQSxhQUFBO0lBQUFwSSxVQUFBQSxFQUFBLENBQUEsT0FBQSxDQUFBO0lBQUFwRCxJQUFBQSxFQUFBLGtCQUFBO0lBQUF5TCxTQUFBQSxFQUFBQSxDQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFELEdBQUFBLEVBQUEsVUFBQTtJQUFBcEksVUFBQUEsRUFBQWtJLGdCQUFBQTtJQUFBdEwsSUFBQUEsRUFBQSxtQkFBQTtJQUFBeUwsU0FBQUEsRUFBQUEsQ0FBQTtFQUFBLENBQUEsRUFDQTtJQUFBRCxHQUFBQSxFQUFBLFFBQUE7SUFBQXBJLFVBQUFBLEVBQUFrSSxnQkFBQUE7SUFBQXRMLElBQUFBLEVBQUEsaUJBQUE7SUFBQXlMLFNBQUFBLEVBQUFBLENBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQUQsR0FBQUEsRUFBQSxNQUFBO0lBQUFwSSxVQUFBQSxFQUFBa0ksZ0JBQUFBO0lBQUF0TCxJQUFBQSxFQUFBLGVBQUE7SUFBQXlMLFNBQUFBLEVBQUFBLENBQUE7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QUFBLE1BQUFBLENBQUExZSxJQUFBQSxLQUFBMGUsTUFBQUEsQ0FBQUssS0FBQUEsQ0FBQUEsQ0FBQTNvQixNQUFBQSxJQUFBK0QsTUFBQUEsQ0FBQXNrQixPQUFBQSxDQUFBcm9CLE1BQUFBLEVBQUFBLEVBRUErRCxNQUFBQSxDQUFBOGtCLGNBQUFBLEdBQUEsTUFBQTlrQixNQUFBQSxDQUFBc2tCLE9BQUFBLENBQUEzaUIsTUFBQUEsQ0FBQTRpQixNQUFBQSxJQUFBQSxNQUFBQSxDQUFBSyxLQUFBQSxDQUFBQSxDQUFBM29CLE1BQUFBLEtBQUErRCxNQUFBQSxDQUFBc2tCLE9BQUFBLENBQUFyb0IsTUFDQTtBQUFBLENBQUEsQ0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwID0gW1xyXG4gIHtcclxuICAgIGJhc2U6IFwiQVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQxXFx1MjRCNlxcdUZGMjFcXHUwMEMwXFx1MDBDMVxcdTAwQzJcXHUxRUE2XFx1MUVBNFxcdTFFQUFcXHUxRUE4XFx1MDBDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx1MDBDNFxcdTAxREVcXHUxRUEyXFx1MDBDNVxcdTAxRkFcXHUwMUNEXFx1MDIwMFxcdTAyMDJcXHUxRUEwXFx1MUVBQ1xcdTFFQjZcXHUxRTAwXFx1MDEwNFxcdTAyM0FcXHUyQzZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBQVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzMyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBRVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMEM2XFx1MDFGQ1xcdTAxRTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFPXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFVXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFWXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzhcXHVBNzNBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzNDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJCXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgyXFx1MDE4MV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQ1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQzXFx1MjRCOFxcdUZGMjNcXHUwMTA2XFx1MDEwOFxcdTAxMEFcXHUwMTBDXFx1MDBDN1xcdTFFMDhcXHUwMTg3XFx1MDIzQlxcdUE3M0VdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0NFxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEJcXHUwMThBXFx1MDE4OVxcdUE3NzldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkRaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjFcXHUwMUM0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEelwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYyXFx1MDFDNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQ1XFx1MjRCQVxcdUZGMjVcXHUwMEM4XFx1MDBDOVxcdTAwQ0FcXHUxRUMwXFx1MUVCRVxcdTFFQzRcXHUxRUMyXFx1MUVCQ1xcdTAxMTJcXHUxRTE0XFx1MUUxNlxcdTAxMTRcXHUwMTE2XFx1MDBDQlxcdTFFQkFcXHUwMTFBXFx1MDIwNFxcdTAyMDZcXHUxRUI4XFx1MUVDNlxcdTAyMjhcXHUxRTFDXFx1MDExOFxcdTFFMThcXHUxRTFBXFx1MDE5MFxcdTAxOEVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0NlxcdTI0QkJcXHVGRjI2XFx1MUUxRVxcdTAxOTFcXHVBNzdCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJHXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDdcXHUyNEJDXFx1RkYyN1xcdTAxRjRcXHUwMTFDXFx1MUUyMFxcdTAxMUVcXHUwMTIwXFx1MDFFNlxcdTAxMjJcXHUwMUU0XFx1MDE5M1xcdUE3QTBcXHVBNzdEXFx1QTc3RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ4XFx1MjRCRFxcdUZGMjhcXHUwMTI0XFx1MUUyMlxcdTFFMjZcXHUwMjFFXFx1MUUyNFxcdTFFMjhcXHUxRTJBXFx1MDEyNlxcdTJDNjdcXHUyQzc1XFx1QTc4RF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQ5XFx1MjRCRVxcdUZGMjlcXHUwMENDXFx1MDBDRFxcdTAwQ0VcXHUwMTI4XFx1MDEyQVxcdTAxMkNcXHUwMTMwXFx1MDBDRlxcdTFFMkVcXHUxRUM4XFx1MDFDRlxcdTAyMDhcXHUwMjBBXFx1MUVDQVxcdTAxMkVcXHUxRTJDXFx1MDE5N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRBXFx1MjRCRlxcdUZGMkFcXHUwMTM0XFx1MDI0OF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiS1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRCXFx1MjRDMFxcdUZGMkJcXHUxRTMwXFx1MDFFOFxcdTFFMzJcXHUwMTM2XFx1MUUzNFxcdTAxOThcXHUyQzY5XFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTdBMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTFwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDRDXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxKXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk1cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0RFxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0RVxcdTI0QzNcXHVGRjJFXFx1MDFGOFxcdTAxNDNcXHUwMEQxXFx1MUU0NFxcdTAxNDdcXHUxRTQ2XFx1MDE0NVxcdTFFNEFcXHUxRTQ4XFx1MDIyMFxcdTAxOURcXHVBNzkwXFx1QTdBNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTkpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTmpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDRGXFx1MjRDNFxcdUZGMkZcXHUwMEQyXFx1MDBEM1xcdTAwRDRcXHUxRUQyXFx1MUVEMFxcdTFFRDZcXHUxRUQ0XFx1MDBENVxcdTFFNENcXHUwMjJDXFx1MUU0RVxcdTAxNENcXHUxRTUwXFx1MUU1MlxcdTAxNEVcXHUwMjJFXFx1MDIzMFxcdTAwRDZcXHUwMjJBXFx1MUVDRVxcdTAxNTBcXHUwMUQxXFx1MDIwQ1xcdTAyMEVcXHUwMUEwXFx1MUVEQ1xcdTFFREFcXHUxRUUwXFx1MUVERVxcdTFFRTJcXHUxRUNDXFx1MUVEOFxcdTAxRUFcXHUwMUVDXFx1MDBEOFxcdTAxRkVcXHUwMTg2XFx1MDE5RlxcdUE3NEFcXHVBNzRDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPSVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUEyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPT1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzRFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPVVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMjIyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJQXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTBcXHUyNEM1XFx1RkYzMFxcdTFFNTRcXHUxRTU2XFx1MDFBNFxcdTJDNjNcXHVBNzUwXFx1QTc1MlxcdUE3NTRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1MVxcdTI0QzZcXHVGRjMxXFx1QTc1NlxcdUE3NThcXHUwMjRBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJSXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJTXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTNcXHUyNEM4XFx1RkYzM1xcdTFFOUVcXHUwMTVBXFx1MUU2NFxcdTAxNUNcXHUxRTYwXFx1MDE2MFxcdTFFNjZcXHUxRTYyXFx1MUU2OFxcdTAyMThcXHUwMTVFXFx1MkM3RVxcdUE3QThcXHVBNzg0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJUXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTRcXHUyNEM5XFx1RkYzNFxcdTFFNkFcXHUwMTY0XFx1MUU2Q1xcdTAyMUFcXHUwMTYyXFx1MUU3MFxcdTFFNkVcXHUwMTY2XFx1MDFBQ1xcdTAxQUVcXHUwMjNFXFx1QTc4Nl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVFpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTcyOF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDU1XFx1MjRDQVxcdUZGMzVcXHUwMEQ5XFx1MDBEQVxcdTAwREJcXHUwMTY4XFx1MUU3OFxcdTAxNkFcXHUxRTdBXFx1MDE2Q1xcdTAwRENcXHUwMURCXFx1MDFEN1xcdTAxRDVcXHUwMUQ5XFx1MUVFNlxcdTAxNkVcXHUwMTcwXFx1MDFEM1xcdTAyMTRcXHUwMjE2XFx1MDFBRlxcdTFFRUFcXHUxRUU4XFx1MUVFRVxcdTFFRUNcXHUxRUYwXFx1MUVFNFxcdTFFNzJcXHUwMTcyXFx1MUU3NlxcdTFFNzRcXHUwMjQ0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJWXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTZcXHUyNENCXFx1RkYzNlxcdTFFN0NcXHUxRTdFXFx1MDFCMlxcdUE3NUVcXHUwMjQ1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJWWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzYwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJXXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTdcXHUyNENDXFx1RkYzN1xcdTFFODBcXHUxRTgyXFx1MDE3NFxcdTFFODZcXHUxRTg0XFx1MUU4OFxcdTJDNzJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1OFxcdTI0Q0RcXHVGRjM4XFx1MUU4QVxcdTFFOENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIllcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1OVxcdTI0Q0VcXHVGRjM5XFx1MUVGMlxcdTAwRERcXHUwMTc2XFx1MUVGOFxcdTAyMzJcXHUxRThFXFx1MDE3OFxcdTFFRjZcXHUxRUY0XFx1MDFCM1xcdTAyNEVcXHUxRUZFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNUFcXHUyNENGXFx1RkYzQVxcdTAxNzlcXHUxRTkwXFx1MDE3QlxcdTAxN0RcXHUxRTkyXFx1MUU5NFxcdTAxQjVcXHUwMjI0XFx1MkM3RlxcdTJDNkJcXHVBNzYyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjFcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHUwMEUwXFx1MDBFMVxcdTAwRTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx1MDBFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx1MDBFNFxcdTAxREZcXHUxRUEzXFx1MDBFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhYVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzMzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhZVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMEU2XFx1MDFGRFxcdTAxRTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFvXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF1XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzlcXHVBNzNCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJheVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzNEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJiXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjJcXHUyNEQxXFx1RkY0MlxcdTFFMDNcXHUxRTA1XFx1MUUwN1xcdTAxODBcXHUwMTgzXFx1MDI1M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiY1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDYzXFx1MjREMlxcdUZGNDNcXHUwMTA3XFx1MDEwOVxcdTAxMEJcXHUwMTBEXFx1MDBFN1xcdTFFMDlcXHUwMTg4XFx1MDIzQ1xcdUE3M0ZcXHUyMTg0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJkXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjRcXHUyNEQzXFx1RkY0NFxcdTFFMEJcXHUwMTBGXFx1MUUwRFxcdTFFMTFcXHUxRTEzXFx1MUUwRlxcdTAxMTFcXHUwMThDXFx1MDI1NlxcdTAyNTdcXHVBNzdBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJkelwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYzXFx1MDFDNl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDY1XFx1MjRENFxcdUZGNDVcXHUwMEU4XFx1MDBFOVxcdTAwRUFcXHUxRUMxXFx1MUVCRlxcdTFFQzVcXHUxRUMzXFx1MUVCRFxcdTAxMTNcXHUxRTE1XFx1MUUxN1xcdTAxMTVcXHUwMTE3XFx1MDBFQlxcdTFFQkJcXHUwMTFCXFx1MDIwNVxcdTAyMDdcXHUxRUI5XFx1MUVDN1xcdTAyMjlcXHUxRTFEXFx1MDExOVxcdTFFMTlcXHUxRTFCXFx1MDI0N1xcdTAyNUJcXHUwMUREXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJmXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjZcXHUyNEQ1XFx1RkY0NlxcdTFFMUZcXHUwMTkyXFx1QTc3Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZ1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY3XFx1MjRENlxcdUZGNDdcXHUwMUY1XFx1MDExRFxcdTFFMjFcXHUwMTFGXFx1MDEyMVxcdTAxRTdcXHUwMTIzXFx1MDFFNVxcdTAyNjBcXHVBN0ExXFx1MUQ3OVxcdUE3N0ZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2OFxcdTI0RDdcXHVGRjQ4XFx1MDEyNVxcdTFFMjNcXHUxRTI3XFx1MDIxRlxcdTFFMjVcXHUxRTI5XFx1MUUyQlxcdTFFOTZcXHUwMTI3XFx1MkM2OFxcdTJDNzZcXHUwMjY1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJodlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMTk1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJpXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjlcXHUyNEQ4XFx1RkY0OVxcdTAwRUNcXHUwMEVEXFx1MDBFRVxcdTAxMjlcXHUwMTJCXFx1MDEyRFxcdTAwRUZcXHUxRTJGXFx1MUVDOVxcdTAxRDBcXHUwMjA5XFx1MDIwQlxcdTFFQ0JcXHUwMTJGXFx1MUUyRFxcdTAyNjhcXHUwMTMxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkFcXHUyNEQ5XFx1RkY0QVxcdTAxMzVcXHUwMUYwXFx1MDI0OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwia1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZCXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibFwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZDXFx1MjREQlxcdUZGNENcXHUwMTQwXFx1MDEzQVxcdTAxM0VcXHUxRTM3XFx1MUUzOVxcdTAxM0NcXHUxRTNEXFx1MUUzQlxcdTAxN0ZcXHUwMTQyXFx1MDE5QVxcdTAyNkJcXHUyQzYxXFx1QTc0OVxcdUE3ODFcXHVBNzQ3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJsalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJtXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkRcXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJuXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkVcXHUyNEREXFx1RkY0RVxcdTAxRjlcXHUwMTQ0XFx1MDBGMVxcdTFFNDVcXHUwMTQ4XFx1MUU0N1xcdTAxNDZcXHUxRTRCXFx1MUU0OVxcdTAxOUVcXHUwMjcyXFx1MDE0OVxcdUE3OTFcXHVBN0E1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJualwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkZcXHUyNERFXFx1RkY0RlxcdTAwRjJcXHUwMEYzXFx1MDBGNFxcdTFFRDNcXHUxRUQxXFx1MUVEN1xcdTFFRDVcXHUwMEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx1MDBGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHUwMEY4XFx1MDFGRlxcdTAyNTRcXHVBNzRCXFx1QTc0RFxcdTAyNzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9pXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm91XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAyMjNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9vXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NEZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInBcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3MFxcdTI0REZcXHVGRjUwXFx1MUU1NVxcdTFFNTdcXHUwMUE1XFx1MUQ3RFxcdUE3NTFcXHVBNzUzXFx1QTc1NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwicVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDcxXFx1MjRFMFxcdUZGNTFcXHUwMjRCXFx1QTc1N1xcdUE3NTldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInJcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3MlxcdTI0RTFcXHVGRjUyXFx1MDE1NVxcdTFFNTlcXHUwMTU5XFx1MDIxMVxcdTAyMTNcXHUxRTVCXFx1MUU1RFxcdTAxNTdcXHUxRTVGXFx1MDI0RFxcdTAyN0RcXHVBNzVCXFx1QTdBN1xcdUE3ODNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInNcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3M1xcdTI0RTJcXHVGRjUzXFx1MDBERlxcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ0XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzRcXHUyNEUzXFx1RkY1NFxcdTFFNkJcXHUxRTk3XFx1MDE2NVxcdTFFNkRcXHUwMjFCXFx1MDE2M1xcdTFFNzFcXHUxRTZGXFx1MDE2N1xcdTAxQURcXHUwMjg4XFx1MkM2NlxcdUE3ODddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MjldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3NVxcdTI0RTRcXHVGRjU1XFx1MDBGOVxcdTAwRkFcXHUwMEZCXFx1MDE2OVxcdTFFNzlcXHUwMTZCXFx1MUU3QlxcdTAxNkRcXHUwMEZDXFx1MDFEQ1xcdTAxRDhcXHUwMUQ2XFx1MDFEQVxcdTFFRTdcXHUwMTZGXFx1MDE3MVxcdTAxRDRcXHUwMjE1XFx1MDIxN1xcdTAxQjBcXHUxRUVCXFx1MUVFOVxcdTFFRUZcXHUxRUVEXFx1MUVGMVxcdTFFRTVcXHUxRTczXFx1MDE3M1xcdTFFNzdcXHUxRTc1XFx1MDI4OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc2XFx1MjRFNVxcdUZGNTZcXHUxRTdEXFx1MUU3RlxcdTAyOEJcXHVBNzVGXFx1MDI4Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidnlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc2MV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwid1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc3XFx1MjRFNlxcdUZGNTdcXHUxRTgxXFx1MUU4M1xcdTAxNzVcXHUxRTg3XFx1MUU4NVxcdTFFOThcXHUxRTg5XFx1MkM3M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwieFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc4XFx1MjRFN1xcdUZGNThcXHUxRThCXFx1MUU4RF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwieVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc5XFx1MjRFOFxcdUZGNTlcXHUxRUYzXFx1MDBGRFxcdTAxNzdcXHUxRUY5XFx1MDIzM1xcdTFFOEZcXHUwMEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwN0FcXHUyNEU5XFx1RkY1QVxcdTAxN0FcXHUxRTkxXFx1MDE3Q1xcdTAxN0VcXHUxRTkzXFx1MUU5NVxcdTAxQjZcXHUwMjI1XFx1MDI0MFxcdTJDNkNcXHVBNzYzXS9nLFxyXG4gIH0sXHJcbl07XHJcbnZhciBkb21haW5zID0gW1xyXG4gIFwiLmNvbVwiLFxyXG4gIFwiLm9yZ1wiLFxyXG4gIFwiLm5ldFwiLFxyXG4gIFwiLmFjXCIsXHJcbiAgXCIuYWRcIixcclxuICBcIi5hZVwiLFxyXG4gIFwiLmFmXCIsXHJcbiAgXCIuYWdcIixcclxuICBcIi5haVwiLFxyXG4gIFwiLmFsXCIsXHJcbiAgXCIuYW1cIixcclxuICBcIi5hb1wiLFxyXG4gIFwiLmFxXCIsXHJcbiAgXCIuYXJcIixcclxuICBcIi5hc1wiLFxyXG4gIFwiLmF0XCIsXHJcbiAgXCIuYXVcIixcclxuICBcIi5hd1wiLFxyXG4gIFwiLmF4XCIsXHJcbiAgXCIuYXpcIixcclxuICBcIi5iYVwiLFxyXG4gIFwiLmJiXCIsXHJcbiAgXCIuYmRcIixcclxuICBcIi5iZVwiLFxyXG4gIFwiLmJmXCIsXHJcbiAgXCIuYmdcIixcclxuICBcIi5iaFwiLFxyXG4gIFwiLmJpXCIsXHJcbiAgXCIuYmpcIixcclxuICBcIi5ibVwiLFxyXG4gIFwiLmJuXCIsXHJcbiAgXCIuYm9cIixcclxuICBcIi5icVwiLFxyXG4gIFwiLmJyXCIsXHJcbiAgXCIuYnNcIixcclxuICBcIi5idFwiLFxyXG4gIFwiLmJ3XCIsXHJcbiAgXCIuYnlcIixcclxuICBcIi5ielwiLFxyXG4gIFwiLmNhXCIsXHJcbiAgXCIuY2NcIixcclxuICBcIi5jZFwiLFxyXG4gIFwiLmNmXCIsXHJcbiAgXCIuY2dcIixcclxuICBcIi5jaFwiLFxyXG4gIFwiLmNpXCIsXHJcbiAgXCIuY2tcIixcclxuICBcIi5jbFwiLFxyXG4gIFwiLmNtXCIsXHJcbiAgXCIuY25cIixcclxuICBcIi5jb1wiLFxyXG4gIFwiLmNyXCIsXHJcbiAgXCIuY3VcIixcclxuICBcIi5jdlwiLFxyXG4gIFwiLmN3XCIsXHJcbiAgXCIuY3hcIixcclxuICBcIi5jeVwiLFxyXG4gIFwiLmN6XCIsXHJcbiAgXCIuZGVcIixcclxuICBcIi5kalwiLFxyXG4gIFwiLmRrXCIsXHJcbiAgXCIuZG1cIixcclxuICBcIi5kb1wiLFxyXG4gIFwiLmR6XCIsXHJcbiAgXCIuZWNcIixcclxuICBcIi5lZVwiLFxyXG4gIFwiLmVnXCIsXHJcbiAgXCIuZWhcIixcclxuICBcIi5lclwiLFxyXG4gIFwiLmVzXCIsXHJcbiAgXCIuZXRcIixcclxuICBcIi5ldVwiLFxyXG4gIFwiLmZpXCIsXHJcbiAgXCIuZmpcIixcclxuICBcIi5ma1wiLFxyXG4gIFwiLmZtXCIsXHJcbiAgXCIuZm9cIixcclxuICBcIi5mclwiLFxyXG4gIFwiLmdhXCIsXHJcbiAgXCIuZ2RcIixcclxuICBcIi5nZVwiLFxyXG4gIFwiLmdmXCIsXHJcbiAgXCIuZ2dcIixcclxuICBcIi5naFwiLFxyXG4gIFwiLmdpXCIsXHJcbiAgXCIuZ2xcIixcclxuICBcIi5nbVwiLFxyXG4gIFwiLmduXCIsXHJcbiAgXCIuZ3BcIixcclxuICBcIi5ncVwiLFxyXG4gIFwiLmdyXCIsXHJcbiAgXCIuZ3NcIixcclxuICBcIi5ndFwiLFxyXG4gIFwiLmd1XCIsXHJcbiAgXCIuZ3dcIixcclxuICBcIi5neVwiLFxyXG4gIFwiLmhrXCIsXHJcbiAgXCIuaG1cIixcclxuICBcIi5oblwiLFxyXG4gIFwiLmhyXCIsXHJcbiAgXCIuaHRcIixcclxuICBcIi5odVwiLFxyXG4gIFwiLmlkXCIsXHJcbiAgXCIuaWVcIixcclxuICBcIi5pbFwiLFxyXG4gIFwiLmltXCIsXHJcbiAgXCIuaW5cIixcclxuICBcIi5pb1wiLFxyXG4gIFwiLmlxXCIsXHJcbiAgXCIuaXJcIixcclxuICBcIi5pc1wiLFxyXG4gIFwiLml0XCIsXHJcbiAgXCIuamVcIixcclxuICBcIi5qbVwiLFxyXG4gIFwiLmpvXCIsXHJcbiAgXCIuanBcIixcclxuICBcIi5rZVwiLFxyXG4gIFwiLmtnXCIsXHJcbiAgXCIua2hcIixcclxuICBcIi5raVwiLFxyXG4gIFwiLmttXCIsXHJcbiAgXCIua25cIixcclxuICBcIi5rcFwiLFxyXG4gIFwiLmtyXCIsXHJcbiAgXCIua3dcIixcclxuICBcIi5reVwiLFxyXG4gIFwiLmt6XCIsXHJcbiAgXCIubGFcIixcclxuICBcIi5sYlwiLFxyXG4gIFwiLmxjXCIsXHJcbiAgXCIubGlcIixcclxuICBcIi5sa1wiLFxyXG4gIFwiLmxyXCIsXHJcbiAgXCIubHNcIixcclxuICBcIi5sdFwiLFxyXG4gIFwiLmx1XCIsXHJcbiAgXCIubHZcIixcclxuICBcIi5seVwiLFxyXG4gIFwiLm1hXCIsXHJcbiAgXCIubWNcIixcclxuICBcIi5tZFwiLFxyXG4gIFwiLm1lXCIsXHJcbiAgXCIubWdcIixcclxuICBcIi5taFwiLFxyXG4gIFwiLm1rXCIsXHJcbiAgXCIubWxcIixcclxuICBcIi5tbVwiLFxyXG4gIFwiLm1uXCIsXHJcbiAgXCIubW9cIixcclxuICBcIi5tcFwiLFxyXG4gIFwiLm1xXCIsXHJcbiAgXCIubXJcIixcclxuICBcIi5tc1wiLFxyXG4gIFwiLm10XCIsXHJcbiAgXCIubXVcIixcclxuICBcIi5tdlwiLFxyXG4gIFwiLm13XCIsXHJcbiAgXCIubXhcIixcclxuICBcIi5teVwiLFxyXG4gIFwiLm16XCIsXHJcbiAgXCIubmFcIixcclxuICBcIi5uY1wiLFxyXG4gIFwiLm5lXCIsXHJcbiAgXCIubmZcIixcclxuICBcIi5uZ1wiLFxyXG4gIFwiLm5pXCIsXHJcbiAgXCIubmxcIixcclxuICBcIi5ub1wiLFxyXG4gIFwiLm5wXCIsXHJcbiAgXCIubnJcIixcclxuICBcIi5udVwiLFxyXG4gIFwiLm56XCIsXHJcbiAgXCIub21cIixcclxuICBcIi5wYVwiLFxyXG4gIFwiLnBlXCIsXHJcbiAgXCIucGZcIixcclxuICBcIi5wZ1wiLFxyXG4gIFwiLnBoXCIsXHJcbiAgXCIucGtcIixcclxuICBcIi5wbFwiLFxyXG4gIFwiLnBtXCIsXHJcbiAgXCIucG5cIixcclxuICBcIi5wclwiLFxyXG4gIFwiLnBzXCIsXHJcbiAgXCIucHRcIixcclxuICBcIi5wd1wiLFxyXG4gIFwiLnB5XCIsXHJcbiAgXCIucWFcIixcclxuICBcIi5yZVwiLFxyXG4gIFwiLnJvXCIsXHJcbiAgXCIucnNcIixcclxuICBcIi5ydVwiLFxyXG4gIFwiLnJ3XCIsXHJcbiAgXCIuc2FcIixcclxuICBcIi5zYlwiLFxyXG4gIFwiLnNjXCIsXHJcbiAgXCIuc2RcIixcclxuICBcIi5zZVwiLFxyXG4gIFwiLnNnXCIsXHJcbiAgXCIuc2hcIixcclxuICBcIi5zaVwiLFxyXG4gIFwiLnNrXCIsXHJcbiAgXCIuc2xcIixcclxuICBcIi5zbVwiLFxyXG4gIFwiLnNuXCIsXHJcbiAgXCIuc29cIixcclxuICBcIi5zclwiLFxyXG4gIFwiLnNzXCIsXHJcbiAgXCIuc3RcIixcclxuICBcIi5zdVwiLFxyXG4gIFwiLnN2XCIsXHJcbiAgXCIuc3hcIixcclxuICBcIi5zeVwiLFxyXG4gIFwiLnN6XCIsXHJcbiAgXCIudGNcIixcclxuICBcIi50ZFwiLFxyXG4gIFwiLnRmXCIsXHJcbiAgXCIudGdcIixcclxuICBcIi50aFwiLFxyXG4gIFwiLnRqXCIsXHJcbiAgXCIudGtcIixcclxuICBcIi50bFwiLFxyXG4gIFwiLnRtXCIsXHJcbiAgXCIudG5cIixcclxuICBcIi50b1wiLFxyXG4gIFwiLnRyXCIsXHJcbiAgXCIudHRcIixcclxuICBcIi50dlwiLFxyXG4gIFwiLnR3XCIsXHJcbiAgXCIudHpcIixcclxuICBcIi51YVwiLFxyXG4gIFwiLnVnXCIsXHJcbiAgXCIudWtcIixcclxuICBcIi51c1wiLFxyXG4gIFwiLnV5XCIsXHJcbiAgXCIudXpcIixcclxuICBcIi52YVwiLFxyXG4gIFwiLnZjXCIsXHJcbiAgXCIudmVcIixcclxuICBcIi52Z1wiLFxyXG4gIFwiLnZpXCIsXHJcbiAgXCIudm5cIixcclxuICBcIi52dVwiLFxyXG4gIFwiLndmXCIsXHJcbiAgXCIud3NcIixcclxuICBcIi55ZVwiLFxyXG4gIFwiLnl0XCIsXHJcbiAgXCIuemFcIixcclxuICBcIi56bVwiLFxyXG4gIFwiLnp3XCIsXHJcbl07XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVEaWFjcml0aWNzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcC5yZWR1Y2UoKHJlc3VsdCwgbGV0dGVyKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXN1bHQucmVwbGFjZShsZXR0ZXIubGV0dGVycywgbGV0dGVyLmJhc2UpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBTUEVDSUFMX0NIQVJBQ1RFUlMgPSBcIlxcXFxcXFxcLyAhP0AjJCVeJiooKV8rOi57fSw7XFxcXC0nYGDigJnigJhcXFwiXCI7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVyc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChgWyR7U1BFQ0lBTF9DSEFSQUNURVJTfV1gLCBcImdpXCIpLCBcIlwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZUFsbEJ1dExldHRlcnNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b0xvd2VyQ2FzZSgpLnJlbW92ZURpYWNyaXRpY3MoKS5yZW1vdmVTcGVjaWFsQ2hhcmFjdGVycygpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiY29uY2VhbFwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChleHRyYSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbXiR7U1BFQ0lBTF9DSEFSQUNURVJTfSR7ZXh0cmF9XWAsIFwiZ2lcIiksIFwi4oGOXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiY2FwaXRhbGl6ZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5zbGljZSgxKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZUhUTUxcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKFwiPlwiLCBcIlxcdTIyN0JcIikucmVwbGFjZShcIjxcIiwgXCJcXHUyMjdBXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicGFyc2VTeW1ib2xzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZUFsbChcIiZcIiwgXCImYW1wO1wiKS5yZXBsYWNlKFwiPFwiLCBcIiZsdDtcIikucmVwbGFjZShcIj5cIiwgXCImZ3Q7XCIpLnJlcGxhY2VBbGwoXCIjXCIsIFwiJm51bTtcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZXBsYWNlQXJyYXlcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZmluZCwgcmVwbGFjZSkge1xyXG4gICAgdmFyIHJlcGxhY2VTdHJpbmcgPSB0aGlzO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaW5kLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHJlcGxhY2VTdHJpbmcgPSByZXBsYWNlU3RyaW5nLnJlcGxhY2UoZmluZFtpXSwgcmVwbGFjZVtpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVwbGFjZVN0cmluZztcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcIm1hc2tVUkxzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZUFycmF5KFtcImh0dHBzOi8vXCIsIFwiaHR0cDovL1wiXSwgXCJub3BlOi8vXCIpLnJlcGxhY2VBcnJheShkb21haW5zLCBcIi5ub3BlXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwibWFrZVJlYWRhYmxlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJtYWtlUGVyY2VudGFnZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChkZWNpbWFscykge1xyXG4gICAgaWYgKCFkZWNpbWFscykgZGVjaW1hbHMgPSAyO1xyXG4gICAgcmV0dXJuIGAkeyh0aGlzICogMTAwKS50b0ZpeGVkKGRlY2ltYWxzKX0lYDtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHNvcnRPYmplY3QgPSAob2JqLCBkaXJlY3Rpb24pID0+IHtcclxuICBsZXQgYXJyID0gW107XHJcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICBhcnIucHVzaChba2V5LCBvYmpba2V5XV0pO1xyXG4gIH1cclxuICBhcnIuc29ydCgoYSwgYikgPT4gKGRpcmVjdGlvbiA/IGFbMV0gLSBiWzFdIDogYlsxXSAtIGFbMV0pKTtcclxuICBsZXQgb2JqU29ydGVkID0ge307XHJcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IChvYmpTb3J0ZWRbaXRlbVswXV0gPSBpdGVtWzFdKSk7XHJcbiAgLy9hcnIuc29ydChmdW5jdGlvbihhLCBiKSB7IGEudmFsdWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIudmFsdWUudG9Mb3dlckNhc2UoKSk7IH0pOyAvL3VzZSB0aGlzIHRvIHNvcnQgYXMgc3RyaW5nc1xyXG4gIHJldHVybiBvYmpTb3J0ZWQ7IC8vIHJldHVybnMgYXJyYXlcclxufTtcclxuIiwiLypcclxuJCA9IGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG52YXIgYm9vdHN0cmFwID0gcmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG52YXIgYW5ndWxhclNhbml0aXplID0gcmVxdWlyZSgnYW5ndWxhci1zYW5pdGl6ZScpO1xyXG52YXIgYW5ndWxhckFuaW1hdGUgPSByZXF1aXJlKCdhbmd1bGFyLWFuaW1hdGUnKTtcclxuKi9cclxuYW5ndWxhci5tb2R1bGUoXCJhcHBcIiwgW1xyXG4gIFwidWkucm91dGVyXCIsXHJcbiAgXCJ1aS5ib290c3RyYXBcIixcclxuICBcIm5nQW5pbWF0ZVwiLFxyXG4gIFwibmdTYW5pdGl6ZVwiLFxyXG4gIFwibmdEcmFnRHJvcFwiLFxyXG4gIFwibmdUYWdzSW5wdXRcIixcclxuICBcInZjUmVjYXB0Y2hhXCIsXHJcbiAgXCJjaGFydC5qc1wiLFxyXG4gIFwidGMuY2hhcnRqc1wiLFxyXG4gIFwiaW5maW5pdGUtc2Nyb2xsXCIsXHJcbl0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICR1cmxTZXJ2aWNlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XHJcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcIi9ob21lXCIpO1xyXG4gICR1cmxTZXJ2aWNlUHJvdmlkZXIuY29uZmlnLnN0cmljdE1vZGUoZmFsc2UpO1xyXG5cclxuICAkc3RhdGVQcm92aWRlclxyXG4gICAgLnN0YXRlKFwiaG9tZVwiLCB7XHJcbiAgICAgIHVybDogXCIvaG9tZVwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvaG9tZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicG9saWN5XCIsIHtcclxuICAgICAgdXJsOiBcIi9wb2xpY3lcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3BvbGljeS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicHJpbnRcIiwge1xyXG4gICAgICB1cmw6IFwiL3ByaW50XCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wcmludC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiZXhwZXJpZW5jZVwiLCB7XHJcbiAgICAgIHVybDogXCIvZXhwZXJpZW5jZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkV4cGVyaWVuY2VDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9leHBlcmllbmNlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJza2lsbHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3NraWxsc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlNraWxsc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3NraWxscy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiaG9iYmllc1wiLCB7XHJcbiAgICAgIHVybDogXCIvaG9iYmllc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkhvYmJpZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9ob2JiaWVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJjb250YWN0XCIsIHtcclxuICAgICAgdXJsOiBcIi9jb250YWN0XCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQ29udGFjdEN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2NvbnRhY3QuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcIndvcmtvdXRcIiwge1xyXG4gICAgICB1cmw6IFwiL3dvcmtvdXRcIixcclxuICAgICAgY29udHJvbGxlcjogXCJXb3Jrb3V0Q3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvd29ya291dC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicG9zdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3Bvc3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUG9zdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wb3N0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicHJvZmlsZVwiLCB7XHJcbiAgICAgIHVybDogXCIvcHJvZmlsZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlByb2ZpbGVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wcm9maWxlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJsaXN0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvbGlzdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJMaXN0c0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwibGlzdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImJ1YmJsZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2J1YmJsZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJCdWJibGVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJidWJibGVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJhc3Rlcm9pZHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2FzdGVyb2lkc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkFzdGVyb2lkc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiYXN0ZXJvaWRzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJsZW1taW5nc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbGVtbWluZ3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJMZW1taW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwibGVtbWluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImJvdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2JvdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLWFkbWluXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3MtYWRtaW5cIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NBZG1pbkN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLWFkbWluLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3MtZ2FtZVwiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLzpnYW1lXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzR2FtZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLWdhbWUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1zdGF0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLXN0YXRzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzU3RhdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1zdGF0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1nb29nbGVcIiwge1xyXG4gICAgICB1cmw6IFwiL2dvb2dsZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpHb29nbGVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvZ29vZ2xlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWxvZ29zXCIsIHtcclxuICAgICAgdXJsOiBcIi9sb2dvc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpMb2dvc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9sb2dvcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1hbmltYWxzXCIsIHtcclxuICAgICAgdXJsOiBcIi9hbmltYWxzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekFuaW1hbHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvYW5pbWFscy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1za2VsZXRvbnNcIiwge1xyXG4gICAgICB1cmw6IFwiL3NrZWxldG9uc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpTa2VsZXRvbnNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvc2tlbGV0b25zLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LW1vdmllc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbW92aWVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpek1vdmllc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9tb3ZpZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImNoYXJhZGVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9jaGFyYWRlc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkNoYXJhZGVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvY2hhcmFkZXMuaHRtbFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7XHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgcmVxdWlyZUJhc2U6IGZhbHNlLFxyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdXZWJTb2NrZXRTdmMnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcclxuICBmdW5jdGlvbiB3ZWJzb2NrZXRIb3N0KCkge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcclxuICAgICAgcmV0dXJuIFwid3NzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIndzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBjb25uZWN0aW9uO1xyXG4gIHZhciBjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQod2Vic29ja2V0SG9zdCgpKTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjb25uZWN0ZWQnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjbG9zZWQuIFJlY29ubmVjdGluZy4uLicpO1xyXG4gICAgICAkdGltZW91dChjb25uZWN0LCAxMDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUgKyBcIiAtIFN0YXRlOiBcIiArIGNvbm5lY3Rpb24ucmVhZHlTdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnd3M6JyArIHBheWxvYWQudG9waWMsIHBheWxvYWQuZGF0YSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc2VuZCA9IGZ1bmN0aW9uICh0b3BpYywgZGF0YSkge1xyXG4gICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh7dG9waWM6IHRvcGljLCBkYXRhOiBkYXRhfSk7XHJcbiAgICBjb25uZWN0aW9uLnNlbmQoanNvbik7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5jb25uZWN0ID0gY29ubmVjdDtcclxuXHJcbn0pLnJ1bihmdW5jdGlvbiAoV2ViU29ja2V0U3ZjKSB7XHJcbiAgV2ViU29ja2V0U3ZjLmNvbm5lY3QoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJBcHBDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIExhbmd1YWdlU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIiVjWW91IHNuZWFreSBidWdnZXIhXCIsXHJcbiAgICBcImZvbnQ6IDJlbSBzYW5zLXNlcmlmOyBjb2xvcjogRG9kZ2VyQmx1ZTsgdGV4dC1zaGFkb3c6IDJweCAwIDAgIzQ0NCwgLTJweCAwIDAgIzQ0NCwgMCAycHggMCAjNDQ0LCAwIC0ycHggMCAjNDQ0LCAxcHggMXB4ICM0NDQsIC0xcHggLTFweCAwICM0NDQsIDFweCAtMXB4IDAgIzQ0NCwgLTFweCAxcHggMCAjNDQ0O1wiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIkknbSBnbGFkIHlvdSdyZSBjdXJpb3VzIHdoZXRoZXIgc29tZXRoaW5nIGlzIHBvcHBpbmcgdXAgaW4gaGVyZS4gSSdtIGEgYml0IG9mIGEgc3RpY2tsZXIgd2hlbiBpdCBjb21lcyB0byBtZXNzYWdlcyBpbiB0aGUgY29uc29sZSBzbyBJIHRyeSB0byBtYWtlIHN1cmUgb25seSB0aGluZ3MgSSB3YW50IGFyZSB2aXNpYmxlLiBUaGF0IGJlaW5nIHNhaWQsIGlmIHRoZXJlIGlzIGEgYmlnIGVycm9yIGhlcmUsIEkgd291bGQgcmVhbGx5IGFwcHJlY2lhdGUgeW91IHRlbGxpbmcgbWUgc28gSSBjYW4gZ2V0IHJpZCBvZiBpdCFcIixcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCJUaGUgY29kZSBmb3IgbXkgcmVzdW1lIGlzIGhvc3RlZCBvbiBHaXRodWIgaWYgeW91IHJlYWxseSB3YW50IHRvIGdvIGludG8gYWxsIHRoaXMhID0+IGh0dHBzOi8vZ2l0aHViLmNvbS9GbGFuZGVyc0J1cmdlci9yZXN1bWVcIixcclxuICApO1xyXG5cclxuICAvKlxyXG4gICAgJChkb2N1bWVudCkuYmluZChcImtleXVwIGtleWRvd25cIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGlmKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT0gODApe1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgICovXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gICQod2luZG93KS5sb2FkKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICQoXCIuY29udGVudFwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLmNoZWNrYm94LW1lbnVcIikub24oXCJjaGFuZ2VcIiwgXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuY2xvc2VzdChcImxpXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIsIHRoaXMuY2hlY2tlZCk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuYWxsb3ctZm9jdXNcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS50aGVtZUNvdW50ZXIgPSA2O1xyXG4gICRzY29wZS50b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgJHNjb3BlLnllYXIgPSAkc2NvcGUudG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAkc2NvcGUucmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XHJcblxyXG4gICRzY29wZS5mbGlwVGhlbWUgPSAoKSA9PiB7XHJcbiAgICAkKFwiLmxvYWRpbmdcIikuc2hvdygpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmhpZGUoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLmxvYWRpbmdcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAgICQoXCIuY29udGVudFwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gICAgfSwgODAwKTtcclxuICAgICRzY29wZS50aGVtZUNvdW50ZXIgPSAkc2NvcGUudGhlbWVDb3VudGVyIDwgNiA/ICRzY29wZS50aGVtZUNvdW50ZXIgKyAxIDogKCRzY29wZS50aGVtZUNvdW50ZXIgPSAxKTtcclxuICB9O1xyXG5cclxuICAkLmdldEpTT04oXCIvc2tpbGxzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5za2lsbHMgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIHNraWxsLmVuYWJsZWQ7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2hvYmJpZXMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmhvYmJpZXMgPSBkYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvZXhwZXJpZW5jZS5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuam9icyA9IGRhdGE7XHJcbiAgICAkc2NvcGUuam9icy5mb3JFYWNoKChqb2IpID0+IHtcclxuICAgICAgam9iLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGpvYi5zdGFydERhdGUpO1xyXG4gICAgICBpZiAoam9iLmVuZERhdGUpIGpvYi5lbmREYXRlID0gbmV3IERhdGUoam9iLmVuZERhdGUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9jaGFyYWRlcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuY2hhcmFkZXMgPSBkYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZ2V0VGltZVNwYW4gPSAoam9iKSA9PiB7XHJcbiAgICByZXR1cm4gam9iLnN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpICsgKGpvYi5lbmREYXRlID8gXCIgLSBcIiArIGpvYi5lbmREYXRlLmdldEZ1bGxZZWFyKCkgOiBcIiAtIFRvZGF5XCIpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5sYW5ndWFnZXMgPSBMYW5ndWFnZVN2Yy5sYW5ndWFnZXM7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdExhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IExhbmd1YWdlU3ZjLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuaG92ZXJkaXYgPSAoZSwgZGl2aWQpID0+IHtcclxuICAgIHZhciBsZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xyXG4gICAgdmFyIHRvcCA9IGUuY2xpZW50WSArIDIwICsgXCJweFwiO1xyXG5cclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZpZCk7XHJcblxyXG4gICAgJChcIiNcIiArIGRpdmlkKS5jc3MoXCJsZWZ0XCIsIGxlZnQpO1xyXG4gICAgJChcIiNcIiArIGRpdmlkKS5jc3MoXCJ0b3BcIiwgdG9wKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLnRvZ2dsZSgpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpIHtcclxuICAgIFVzZXJTdmMubG9naW4od2luZG93LmxvY2FsU3RvcmFnZS51c2VyKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBsb2dpbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICBsb2dpbih1c2VyKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xyXG4gICAgaWYgKCEkc2NvcGUubG9nZ2VkSW4pIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS51c2VyID0gdXNlci5faWQ7XHJcbiAgICAgICRzY29wZS5sb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAgICRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUgPSBuZXcgRGF0ZSgkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlKTtcclxuICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dpblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuJG9uKFwidXBkYXRlXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUpO1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKFwibG9hZGluZ1wiLCAoXywgdXNlcikgPT4ge1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgJChcIiNsb2FkaW5nLWljb25cIikuc2hvdygpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKFwibG9hZGVkXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5sb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBmaXJlYmFzZVxyXG4gICAgICAuYXV0aCgpXHJcbiAgICAgIC5zaWduT3V0KClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXHJcbiAgICAgICAgJHNjb3BlLmxvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICRzY29wZS4kYnJvYWRjYXN0KFwibG9nb3V0XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5mb3JtYXREYXRlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IG1vbnRocyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIHJldHVybiBkYXRlLmdldERhdGUoKSArIFwiLVwiICsgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0gKyBcIi1cIiArIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkFzdGVyb2lkc0N0cmxcIiwgZnVuY3Rpb24gKCRsb2NhdGlvbiwgJHNjb3BlLCBHYW1lU3ZjKSB7XHJcbiAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc3Rlcm9pZHMtcGFnZVwiKTtcclxuICBpZiAoIWNhbnZhcykge1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoXCIvaG9tZVwiKTtcclxuICAgIHJldHVybiBhbGVydChcIlwiKTtcclxuICB9XHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICBjdHguZm9udCA9IFwiMzBweCBDb21pYyBTYW5zIE1TXCI7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY29uc3Qgc2hvdHMgPSB7fTtcclxuICBjb25zdCBhc3Rlcm9pZHMgPSB7fTtcclxuICBjb25zdCBwb3dlcnVwcyA9IHt9O1xyXG4gIGNvbnN0IGV4cGxvc2lvbnMgPSB7fTtcclxuICBjb25zdCBtYXAgPSB7fTtcclxuICBjb25zdCBzcGFjZXBpY3MgPSAxMDtcclxuICBjb25zdCBzcGFjZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwYWNlcGljcyk7XHJcbiAgY29uc3QgcG93ZXJ1cFR5cGVzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInNwZWVkXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJNYXggU3BlZWQg4oenXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICAgIHNpemU6IFsxNCwgMzVdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5tYXhTcGVlZCArPSAxMDA7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImNvb2xkb3duXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJDb29sZG93biDih6lcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDMsXHJcbiAgICAgICAgc2l6ZTogWzE3LCAxN10sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5jb29sZG93blRpbWUgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInJhbmdlXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJGaXJpbmcgUmFuZ2Ug4oenXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogNCxcclxuICAgICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICAgIHNpemU6IFszMCwgOF0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnJhbmdlICs9IDU7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInNoaWVsZFwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiU2hpZWxkXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogNSxcclxuICAgICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICAgIHNpemU6IFsxOSwgMTldLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5zaGllbGQgPSB0cnVlO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJudWtlXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJOdWtlXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICAgIHNpemU6IFsxNSwgMTVdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgICAgICBhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgICAgfSxcclxuICAgIH0gLypcclxuICAgICdzaWRlX2Nhbm5vbnMnLFxyXG4gICAgJ2xhc2VyJyxcclxuICAgICdzaGllbGQnLFxyXG4gICAgJ2xpZmUnLFxyXG4gICAgJ21pc3NpbGVzJyxcclxuICAgICdudWtlJ1xyXG4gICAgKi8sXHJcbiAgXTtcclxuICBwb3dlcnVwVHlwZXMuZm9yRWFjaChmdW5jdGlvbiAocG93ZXJ1cCwgaSwgYXJyYXkpIHtcclxuICAgIGFycmF5W2ldLmltZy5zcmMgPSBcImFzdGVyb2lkcy9cIiArIHBvd2VydXAubmFtZSArIFwiLnBuZ1wiO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgZXhwbG9zaW9uSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBleHBsb3Npb25JbWFnZS5zcmMgPSBcImFzdGVyb2lkcy9leHBsb3Npb24ucG5nXCI7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJrZXlkb3duXCIsXHJcbiAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBtYXBbZS5rZXlDb2RlIHx8IGUud2hpY2hdID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICB0cnVlLFxyXG4gICk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImtleXVwXCIsXHJcbiAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBtYXBbZS5rZXlDb2RlIHx8IGUud2hpY2hdID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdHJ1ZSxcclxuICApO1xyXG5cclxuICAkc2NvcGUuaGlnaHNjb3JlID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gZXZhbHVhdGVLZXlzKCkge1xyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgLy9TcGFjZVxyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zaG9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM3XSkge1xyXG4gICAgICAgIC8vTGVmdCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiA9IDM2MDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uIC09IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzldKSB7XHJcbiAgICAgICAgLy9SaWdodCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDM2MCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uICs9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzhdKSB7XHJcbiAgICAgICAgLy9VcCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPD0gc3BhY2VzaGlwLm1heFNwZWVkKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgKz0gNTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzQwXSkge1xyXG4gICAgICAgIC8vRG93biBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgLT0gMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgc3RhcnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU3BhY2VzaGlwKCkge1xyXG4gICAgdGhpcy53aWR0aCA9IDUwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSA1MDtcclxuICAgIHRoaXMuc2hpZWxkID0gZmFsc2U7XHJcbiAgICB0aGlzLnJhbmdlID0gODA7XHJcbiAgICB0aGlzLmNhbm5vbiA9IHtcclxuICAgICAgeDogdGhpcy53aWR0aCAvIDIgLSA0LjUsXHJcbiAgICAgIHk6IHRoaXMuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0ICogMC4wNzgxMjUsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb29sZG93biA9IDA7XHJcbiAgICB0aGlzLmNvb2xkb3duVGltZSA9IDIwO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtjYW52YXMud2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgLyAyXTtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBcImFzdGVyb2lkcy9zcGFjZXNoaXAucG5nXCI7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMubWF4U3BlZWQgPSAxMDAwO1xyXG4gICAgdGhpcy5hbmdsZSA9IDA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuXHJcbiAgICB0aGlzLnNob290ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmNvb2xkb3duID0gdGhpcy5jb29sZG93blRpbWU7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIHNob3RzW2lkXSA9IG5ldyBTaG90KGlkLCB0aGlzKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodGhpcy5zaGllbGQpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmFyYyh0aGlzLnBvc2l0aW9uWzBdICsgdGhpcy53aWR0aCAvIDIsIHRoaXMucG9zaXRpb25bMV0gKyB0aGlzLmhlaWdodCAvIDIsIDMwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDM1LCAyMzcsIDg2LCAwLjUpXCI7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2IoNjYsIDE2OCwgMzYsIDAuOClcIjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICAgIHZhciBhc3Rlcm9pZCA9IGFzdGVyb2lkc1tpXTtcclxuICAgICAgICBpZiAoaGl0KGFzdGVyb2lkLCB0aGlzKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2hpZWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpZWxkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGFzdGVyb2lkLmV4cGxvZGUoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnYW1lT3ZlcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFuZ2xlID0gdGhpcy5yb3RhdGlvbjtcclxuICAgICAgaWYgKHRoaXMuY29vbGRvd24gPiAwKSB7XHJcbiAgICAgICAgdGhpcy5jb29sZG93bi0tO1xyXG4gICAgICB9XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU2hvdChpZCwgc3BhY2VzaGlwKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW1xyXG4gICAgICBzcGFjZXNoaXAucG9zaXRpb25bMF0gK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueCArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi54ICogTWF0aC5jb3MoKChzcGFjZXNoaXAucm90YXRpb24gLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCksXHJcbiAgICAgIHNwYWNlc2hpcC5wb3NpdGlvblsxXSArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi55ICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnkgKiBNYXRoLnNpbigoKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKSxcclxuICAgIF07XHJcbiAgICB0aGlzLndpZHRoID0gOTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMTU7XHJcbiAgICB0aGlzLmFuZ2xlID0gc3BhY2VzaGlwLmFuZ2xlO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IHNwYWNlc2hpcC5yb3RhdGlvbjtcclxuICAgIHRoaXMuc3BlZWQgPSBzcGFjZXNoaXAuc3BlZWQgKyA1MDA7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gc3BhY2VzaGlwLnJhbmdlO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL3Nob3QucG5nXCI7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQXN0ZXJvaWQoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMud2lkdGggPSBNYXRoLnJhbmRvbSgpICogNTAgKyAyMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy53aWR0aDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSBNYXRoLnJhbmRvbSgpICogNiAtIDM7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDMwMCArIDI7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvYXN0ZXJvaWRcIiArIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA2KSArIDEpICsgXCIucG5nXCI7XHJcblxyXG4gICAgdGhpcy5leHBsb2RlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBleHBsb3Npb25zW3RoaXMuaWRdID0gbmV3IEV4cGxvc2lvbih0aGlzKTtcclxuICAgICAgcmV0dXJuIGRlbGV0ZSBhc3Rlcm9pZHNbdGhpcy5pZF07XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XHJcbiAgICAgIGlmICh0aGlzLnJvdGF0aW9uID4gMzYwKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMucm90YXRpb24gLSAzNjA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5yb3RhdGlvbiA8IDApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMzYwICsgdGhpcy5yb3RhdGlvbjtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgICAgdmFyIHNob3QgPSBzaG90c1tpXTtcclxuICAgICAgICBpZiAoaGl0KHNob3QsIHRoaXMpKSB7XHJcbiAgICAgICAgICB0aGlzLmV4cGxvZGUoKTtcclxuICAgICAgICAgIHZhciBwb2ludHMgPSBNYXRoLmZsb29yKChzaG90LnNwZWVkIC0gNTAwKSAvIDEwICsgNzAgLSB0aGlzLndpZHRoKTtcclxuICAgICAgICAgIGlmIChNYXRoLmZsb29yKChwb2ludHMgKyAkc2NvcGUuc2NvcmUpIC8gMTAwKSA+IE1hdGguZmxvb3IoJHNjb3BlLnNjb3JlIC8gMTAwKSkge1xyXG4gICAgICAgICAgICBzcGF3blBvd2VydXAoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICRzY29wZS5zY29yZSArPSBwb2ludHM7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRXhwbG9zaW9uKG9iamVjdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtvYmplY3QucG9zaXRpb25bMF0sIG9iamVjdC5wb3NpdGlvblsxXV07XHJcbiAgICB0aGlzLndpZHRoID0gb2JqZWN0LndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvYmplY3QuaGVpZ2h0O1xyXG4gICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMuY3ljbGUgPSB7XHJcbiAgICAgIHJvd3M6IDYsXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHNpemU6IFsyNTYsIDI1Nl0sXHJcbiAgICAgIGk6IDAsXHJcbiAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgIH07XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gNDc7XHJcbiAgICB0aGlzLmltZyA9IGV4cGxvc2lvbkltYWdlO1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAodGhpcy5jeWNsZS5kaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmN5Y2xlLmkrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN5Y2xlLmktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFBvd2VydXAoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucG93ZXJ1cCA9IHBvd2VydXBUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3dlcnVwVHlwZXMubGVuZ3RoKV07XHJcbiAgICB0aGlzLmN5Y2xlID0gdGhpcy5wb3dlcnVwLmN5Y2xlO1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDEwMDA7XHJcbiAgICBpZiAodGhpcy5jeWNsZS5zaXplWzFdID4gdGhpcy5jeWNsZS5zaXplWzBdKSB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gNDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSBNYXRoLnJvdW5kKCh0aGlzLmhlaWdodCAvIHRoaXMuY3ljbGUuc2l6ZVsxXSkgKiB0aGlzLmN5Y2xlLnNpemVbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53aWR0aCA9IDQwO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IE1hdGgucm91bmQoKHRoaXMud2lkdGggLyB0aGlzLmN5Y2xlLnNpemVbMF0pICogdGhpcy5jeWNsZS5zaXplWzFdKTtcclxuICAgIH1cclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuaW1nID0gdGhpcy5wb3dlcnVwLmltZztcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAxNTAgKyA1MDtcclxuICAgIHZhciBkZWxheSA9IDU7XHJcbiAgICB0aGlzLm1vdmUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gZGVsZXRlIHBvd2VydXBzW3RoaXMuaWRdO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChoaXQoc3BhY2VzaGlwLCB0aGlzKSkge1xyXG4gICAgICAgICRzY29wZS5hbm5vdW5jZSA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLmFubm91bmNlbWVudCA9IHRoaXMucG93ZXJ1cC5hbm5vdW5jZW1lbnQ7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgdGhpcy5wb3dlcnVwLmFjdGl2YXRlKHNwYWNlc2hpcCk7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBwb3dlcnVwc1t0aGlzLmlkXTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICAgIGlmIChkZWxheSA8PSAwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLmkrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGF5ID0gNTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWxheS0tO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZShvYmplY3QpIHtcclxuICAgIG9iamVjdC5wb3NpdGlvblswXSArPSAob2JqZWN0LnNwZWVkIC8gMTAwKSAqIE1hdGguY29zKCgob2JqZWN0LmFuZ2xlIC0gOTApICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgb2JqZWN0LnBvc2l0aW9uWzFdICs9IChvYmplY3Quc3BlZWQgLyAxMDApICogTWF0aC5zaW4oKChvYmplY3QuYW5nbGUgLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBpZiAob2JqZWN0LnBvc2l0aW9uWzBdID4gY2FudmFzLndpZHRoKSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IC1vYmplY3Qud2lkdGg7XHJcbiAgICB9IGVsc2UgaWYgKG9iamVjdC5wb3NpdGlvblswXSA8IC1vYmplY3Qud2lkdGgpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzBdID0gY2FudmFzLndpZHRoO1xyXG4gICAgfVxyXG4gICAgaWYgKG9iamVjdC5wb3NpdGlvblsxXSA+IGNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzFdID0gLW9iamVjdC5oZWlnaHQ7XHJcbiAgICB9IGVsc2UgaWYgKG9iamVjdC5wb3NpdGlvblsxXSA8IC1vYmplY3QuaGVpZ2h0KSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblsxXSA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShvYmplY3QucG9zaXRpb25bMF0sIG9iamVjdC5wb3NpdGlvblsxXSk7XHJcbiAgICBjdHgudHJhbnNsYXRlKG9iamVjdC53aWR0aCAvIDIsIG9iamVjdC5oZWlnaHQgLyAyKTtcclxuICAgIGN0eC5yb3RhdGUoKG9iamVjdC5yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIGlmIChvYmplY3QuY3ljbGUpIHtcclxuICAgICAgdmFyIGNvbHVtbiA9IG9iamVjdC5jeWNsZS5pICUgb2JqZWN0LmN5Y2xlLmNvbHVtbnM7XHJcbiAgICAgIHZhciByb3cgPSBNYXRoLmZsb29yKG9iamVjdC5jeWNsZS5pIC8gb2JqZWN0LmN5Y2xlLmNvbHVtbnMpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIG9iamVjdC5pbWcsXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMF0gKiBjb2x1bW4sXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMV0gKiByb3csXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMF0sXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMV0sXHJcbiAgICAgICAgLW9iamVjdC53aWR0aCAvIDIsXHJcbiAgICAgICAgLW9iamVjdC5oZWlnaHQgLyAyLFxyXG4gICAgICAgIG9iamVjdC53aWR0aCxcclxuICAgICAgICBvYmplY3QuaGVpZ2h0LFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKG9iamVjdC5jeWNsZS5pIDw9IDApIHtcclxuICAgICAgICBvYmplY3QuY3ljbGUuaSA9IDA7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAob2JqZWN0LmN5Y2xlLmkgPj0gb2JqZWN0LmN5Y2xlLmNvbHVtbnMgKiBvYmplY3QuY3ljbGUucm93cykge1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5pID0gb2JqZWN0LmN5Y2xlLmNvbHVtbnMgKiBvYmplY3QuY3ljbGUucm93cyAtIDE7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdHguZHJhd0ltYWdlKG9iamVjdC5pbWcsIC1vYmplY3Qud2lkdGggLyAyLCAtb2JqZWN0LmhlaWdodCAvIDIsIG9iamVjdC53aWR0aCwgb2JqZWN0LmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHNwYWNlc2hpcDtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAkc2NvcGUucGxheWluZyA9IHRydWU7XHJcbiAgICAkc2NvcGUuc2NvcmUgPSAwO1xyXG4gICAgc3BhY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFjZXBpY3MpO1xyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgc3BhY2VzaGlwID0gbmV3IFNwYWNlc2hpcCgpO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYXduQXN0ZXJvaWRzKDUpO1xyXG4gICAgYXV0b1NwYXduKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRFbnRyeVBvc2l0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBncmlkWCA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIGdyaWRZID0gTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICB2YXIgeCxcclxuICAgICAgeSA9IDA7XHJcbiAgICBpZiAoZ3JpZFggPj0gMSkge1xyXG4gICAgICB4ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgaWYgKHkgPj0gMSkge1xyXG4gICAgICAgIHkgPSAwIC0gaGVpZ2h0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHkgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIGlmIChncmlkWSA+PSAxKSB7XHJcbiAgICAgICAgeCA9IDAgLSB3aWR0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB4ID0gY2FudmFzLndpZHRoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3gsIHldO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGl0KG9iamVjdDEsIG9iamVjdDIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIG9iamVjdDEucG9zaXRpb25bMF0gPCBvYmplY3QyLnBvc2l0aW9uWzBdICsgb2JqZWN0Mi53aWR0aCAmJlxyXG4gICAgICBvYmplY3QyLnBvc2l0aW9uWzBdIDwgb2JqZWN0MS5wb3NpdGlvblswXSArIG9iamVjdDEud2lkdGggJiZcclxuICAgICAgb2JqZWN0MS5wb3NpdGlvblsxXSA8IG9iamVjdDIucG9zaXRpb25bMV0gKyBvYmplY3QyLmhlaWdodCAmJlxyXG4gICAgICBvYmplY3QyLnBvc2l0aW9uWzFdIDwgb2JqZWN0MS5wb3NpdGlvblsxXSArIG9iamVjdDEuaGVpZ2h0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXV0b1NwYXduKCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGFzdGVyb2lkcykubGVuZ3RoIDwgMjAwKSB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIGFzdGVyb2lkc1tpZF0gPSBuZXcgQXN0ZXJvaWQoaWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGF1dG9TcGF3bigpO1xyXG4gICAgICB9LCBzcGF3bkludGVydmFsKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25JbnRlcnZhbCgpIHtcclxuICAgIGlmICgkc2NvcGUuc2NvcmUgPCAxMDAwKSB7XHJcbiAgICAgIHJldHVybiAxMDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCAyMDAwKSB7XHJcbiAgICAgIHJldHVybiA5MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDMwMDApIHtcclxuICAgICAgcmV0dXJuIDgwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNDAwMCkge1xyXG4gICAgICByZXR1cm4gNzAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA1MDAwKSB7XHJcbiAgICAgIHJldHVybiA2MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDYwMDApIHtcclxuICAgICAgcmV0dXJuIDUwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNzAwMCkge1xyXG4gICAgICByZXR1cm4gNDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA4MDAwKSB7XHJcbiAgICAgIHJldHVybiAzMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25Bc3Rlcm9pZHMoYW1vdW50KSB7XHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICBkbyB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIGFzdGVyb2lkc1tpZF0gPSBuZXcgQXN0ZXJvaWQoaWQpO1xyXG4gICAgfSB3aGlsZSAoaSsrIDw9IGFtb3VudCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3blBvd2VydXAoKSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMocG93ZXJ1cHMpLmxlbmd0aCA8IDMpIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgcG93ZXJ1cHNbaWRdID0gbmV3IFBvd2VydXAoaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XHJcbiAgICAkc2NvcGUucGxheWluZyA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgIH1cclxuICAgIHNob3RzID0ge307XHJcbiAgICBpZiAoJHNjb3BlLmxvZ2dlZEluKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuaGlnaHNjb3JlLmFzdGVyb2lkcyA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzID0gJHNjb3BlLnNjb3JlO1xyXG4gICAgICAgIEdhbWVTdmMuc2V0SGlnaHNjb3JlKFwiYXN0ZXJvaWRzXCIsICRzY29wZS5jdXJyZW50VXNlci5faWQsICRzY29wZS5zY29yZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaHNjb3JlIDwgJHNjb3BlLnNjb3JlKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hzY29yZSA9ICRzY29wZS5zY29yZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU3RhcnQgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgYW5kXHJcbiAgLy8gZHJhdyBjYW52YXMuXHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgICAvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG4gICAgLy8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcbiAgICAvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcbiAgICAvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG4gICAgcmVzaXplQ2FudmFzKCk7XHJcbiAgfVxyXG4gIC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuICAvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuICAvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogMTA1KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemUoKTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcblxyXG4gIHZhciB0YWxseSA9IDA7XHJcbiAgdmFyIGRpcmVjdGlvbiA9IHRydWU7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgIGlmIChzaG90c1tpXS5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIHNob3RzW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3RzW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIHBvd2VydXBzKSB7XHJcbiAgICAgIHBvd2VydXBzW2ldLm1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBleHBsb3Npb25zKSB7XHJcbiAgICAgIGlmIChleHBsb3Npb25zW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgZXhwbG9zaW9uc1tpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBleHBsb3Npb25zW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZhbHVhdGVLZXlzKCk7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgc3BhY2VzaGlwLm1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBjYW52YXMud2lkdGgsIDApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwXCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMC4yNVwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjAuNVwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjAuNzVcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIxLjBcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICAgIGN0eC5mb250ID0gXCI2MHB4IE1vbm90b25cIjtcclxuICAgICAgY3R4LmZpbGxUZXh0KFwiQXN0ZXJvaWRzXCIsIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoXCJBc3Rlcm9pZHNcIikud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGN0eC5mb250ID0gXCIyMHB4IEFsZHJpY2hcIjtcclxuICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgIFwiUHJlc3Mgc3BhY2UgdG8gc3RhcnRcIixcclxuICAgICAgICBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KFwiUHJlc3Mgc3BhY2UgdG8gc3RhcnRcIikud2lkdGggLyAyLFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyICsgMjAsXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICBcIkRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlclwiLFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoXCJEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5IExhdXJlbnQgRGViYWNrZXJcIikud2lkdGggLyAyLFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgLSAzMCxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRhbGx5ICs9IGRpcmVjdGlvbiA/IDEgOiAtMTtcclxuICAgIGlmICh0YWxseSA+IDEwMCkge1xyXG4gICAgICB0YWxseSA9IDEwMDtcclxuICAgICAgZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHRhbGx5IDwgMCkge1xyXG4gICAgICB0YWxseSA9IDA7XHJcbiAgICAgIGRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuc3BhY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJhc3Rlcm9pZHMvc3BhY2UnICsgc3BhY2UgKyAnLmpwZ1wiKScsXHJcbiAgICB9O1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0J1YmJsZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZXMtcGFnZScpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB2YXIgYnViYmxlcyA9IFtdO1xyXG4gIHZhciBjb2xvcnMgPSBbJyNmZmMzMDAnLCcjZmY1NzMzJywnI2M3MDAzOScsJyM5MDBjM2UnLCcjNTcxODQ1J107XHJcblxyXG4gIGZ1bmN0aW9uIEJ1YmJsZSgpIHtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAwO1xyXG4gICAgdGhpcy5yYWRpdXMgPSAxO1xyXG4gICAgdGhpcy5leHBhbmRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgdGhpcy5jaXJjdW1mZXJlbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNTApICsgNTtcclxuICAgIHRoaXMubWF4UmFkaXVzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjAwKSArIDIwO1xyXG4gICAgdGhpcy54ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoKTtcclxuICAgIHRoaXMueSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGhpcy52eCA9IChNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSk7XHJcbiAgICB0aGlzLnZ5ID0gKE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBidWJibGVzLmZvckVhY2goZnVuY3Rpb24oYnViYmxlKSB7XHJcbiAgICAgIHZhciBjb2xvciA9IGNvbG9yc1tNYXRoLnJvdW5kKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMoYnViYmxlLngsIGJ1YmJsZS55LCBidWJibGUucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbTWF0aC5yb3VuZChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3JzW2NvbG9ycy5sZW5ndGggLSBNYXRoLnJvdW5kKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gYnViYmxlLmNpcmN1bWZlcmVuY2UgKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cztcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWx0ZXJCdWJibGVzKCkge1xyXG4gICAgYnViYmxlcy5wdXNoKG5ldyBCdWJibGUoKSk7XHJcbiAgICBidWJibGVzID0gYnViYmxlcy5maWx0ZXIoZnVuY3Rpb24gKGJ1YmJsZSkge1xyXG4gICAgICBpZiAoYnViYmxlLnJhZGl1cyA9PT0gYnViYmxlLm1heFJhZGl1cykge1xyXG4gICAgICAgIGJ1YmJsZS5leHBhbmRpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBidWJibGUueCArPSBidWJibGUudnggKiBidWJibGUuc3BlZWQ7XHJcbiAgICAgIGJ1YmJsZS55ICs9IGJ1YmJsZS52eSAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnJhZGl1cyArPSAoYnViYmxlLmV4cGFuZGluZyA/IDEgOiAtMSk7XHJcbiAgICAgIHJldHVybiBidWJibGUucmFkaXVzID4gMDtcclxuICAgIH0pO1xyXG4gICAgZHJhdygpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG5cclxuXHJcblx0KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG5cdFx0Ly8gZHJhdyBjYW52YXMuXHJcblx0XHRpbml0aWFsaXplKCk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHRcdC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuXHRcdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0XHR9XHJcblx0XHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0XHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHRcdC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG5cdFx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG5cdFx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdFx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTUgOiAxMTEpO1xyXG5cdFx0fVxyXG5cclxuXHR9KSgpO1xyXG5cclxuXHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkNoYXJhZGVzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgJHNjb3BlLnNlbGVjdFdvcmQgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICRzY29wZS53b3JkID0gJHNjb3BlLmNoYXJhZGVzW2NhdGVnb3J5XVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldLmxlbmd0aCldO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQ29udGFjdEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRW1haWxTdmMpIHtcclxuICAkc2NvcGUub3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTcGFtXCIsXHJcbiAgICAgIHRleHQ6IFwiSSBhbSBhIHNwYW0gYm90IGFuZCBhdXRvbWF0aWNhbGx5IGNoZWNrIHRoZSBmaXJzdCBvcHRpb24gSSBmaW5kIVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPcHBvcnR1bml0eVwiLFxyXG4gICAgICB0ZXh0OiBcIllvdSBzZWVtIHRvIGhhdmUgdGhlIHNraWxscyBJIHNlZWssIEknZCBsaWtlIHRvIHRhbGsgYWJvdXQgc29tZSBvcHBvcnR1bml0aWVzLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZXN1bWVcIixcclxuICAgICAgdGV4dDogXCJJIGRpZyB0aGUgcmVzdW1lLCBob3cgZGlkIHlvdSBtYWtlIGl0P1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPdGhlclwiLFxyXG4gICAgICB0ZXh0OiBcIlN1bXRpbiBlbHNlIVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICAkc2NvcGUuY29udGFjdCA9IHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gICAgYWJvdXQ6IFwiXCIsXHJcbiAgICBtZXNzYWdlOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnNlbmRpbmcgPSB0cnVlO1xyXG4gICAgRW1haWxTdmMuc2VuZCh7XHJcbiAgICAgIGVtYWlsOiAkc2NvcGUuY29udGFjdC5lbWFpbCxcclxuICAgICAgbmFtZTogJHNjb3BlLmNvbnRhY3QubmFtZSxcclxuICAgICAgcGhvbmU6ICRzY29wZS5jb250YWN0LnBob25lLFxyXG4gICAgICBhYm91dDogJHNjb3BlLmNvbnRhY3QuYWJvdXQsXHJcbiAgICAgIG1lc3NhZ2U6ICRzY29wZS5jb250YWN0Lm1lc3NhZ2UsXHJcbiAgICB9KS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuc2VudCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTLiBzdGF0dXM9JWQsIHRleHQ9JXNcIiwgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS50ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAkc2NvcGUuc2VuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRkFJTEVELiBlcnJvcj1cIiwgZXJyKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignRXhwZXJpZW5jZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICRzY29wZS5nZXRTa2lsbCA9IGZ1bmN0aW9uKHNraWxsQ29kZSkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2tpbGxzKSByZXR1cm47XHJcbiAgICByZXR1cm4gJHNjb3BlLnNraWxscy5maW5kKGZ1bmN0aW9uKHNraWxsKSB7XHJcbiAgICAgIHJldHVybiBza2lsbC5jb2RlID09PSBza2lsbENvZGU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignSG9iYmllc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAkLmdldEpTT04oJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vdXNlci9iZWxnb2NhbmFkaWFuL2Fib3V0Ly5qc29uJywgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRIb2JieSA9ICRzY29wZS5ob2JiaWVzWzBdO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0SG9iYnkgPSBmdW5jdGlvbiAoaG9iYnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gaG9iYnk7XHJcbiAgICAkc2NvcGUuaG9iYnlTZWxlY3RvclZpc2libGUgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd0hvYmJ5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpIHtcclxuICAgIGlmICghdmFsdWUuaW1hZ2VzKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdmFsdWUuaW1hZ2VzLmxlbmd0aCA+IDA7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignTGVtbWluZ3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgR2FtZVN2Yykge1xyXG5cclxuICB2YXIgTEVGVCA9IDA7XHJcbiAgdmFyIFJJR0hUID0gMTtcclxuXHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZW1taW5ncy1wYWdlJyk7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIHZhciBsZW1taW5nc0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgbGVtbWluZ3NJbWFnZS5zcmMgPSAnbGVtbWluZ3MvbGVtbWluZ3MucG5nJztcclxuICB2YXIgZGVjb3JJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGRlY29ySW1hZ2Uuc3JjID0gJ2xlbW1pbmdzL2RlY29yLnBuZyc7XHJcbiAgdmFyIGxlbW1pbmdzID0ge307XHJcbiAgdmFyIHN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgdmFyIGFjdGlvbnMgPSB7XHJcbiAgICB3YWxrOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMF0sXHJcbiAgICAgIGVuZDogWzMyMCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGh1aDoge1xyXG4gICAgICBzdGFydDogWzMyMCwgMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZmFsbDoge1xyXG4gICAgICBzdGFydDogWzAsIDgwXSxcclxuICAgICAgZW5kOiBbMTYwLCAxMDBdLFxyXG4gICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGZseToge1xyXG4gICAgICBzdGFydDogWzE2MCwgODBdLFxyXG4gICAgICBlbmQ6IFs0ODAsIDExMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc3RvcDoge1xyXG4gICAgICBzdGFydDogWzAsIDEyMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTQwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgY2xpbWI6IHtcclxuICAgICAgc3RhcnQ6IFswLCAxNjBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDE4NV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMjVdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwdW5jaDoge1xyXG4gICAgICBzdGFydDogWzAsIDI0MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMzAwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZGlnOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMzIwXSxcclxuICAgICAgZW5kOiBbMzIwLCAzNDVdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBMZW1taW5nKGluaXQpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNhbnZhcy53aWR0aCAtIDIwMCkpICsgMTAwLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLmhlaWdodCAtIDIwMCkpICsgMTAwXTtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSAqIDIgPiAxID8gTEVGVCA6IFJJR0hUO1xyXG4gICAgdGhpcy5hY3QgPSBmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb25zW2FjdGlvbl07XHJcbiAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gKDIwICogKHRoaXMuYWN0aW9uLnJvd3MgLSAxKSkpIC8gdGhpcy5hY3Rpb24ucm93cztcclxuICAgICAgdGhpcy5hbmltYXRpb24gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuYWN0KGluaXQpO1xyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSwgdGhpcy5wb3NpdGlvblsxXSk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gTEVGVCkge1xyXG4gICAgICAgIGN0eC5zY2FsZSgtMSwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UobGVtbWluZ3NJbWFnZSwgKHRoaXMud2lkdGggKiBjb2x1bW4pICsgdGhpcy5hY3Rpb24uc3RhcnRbMF0sICgodGhpcy5oZWlnaHQgKyAyMCkgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgaWYgKHRoaXMuYWN0aW9uLnJldmVyc2UpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlLS07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICF0aGlzLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICBpZiAodGhpcy5jeWNsZSA+PSB0aGlzLmFjdGlvbi5jb2x1bW5zICogdGhpcy5hY3Rpb24ucm93cykge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGF0Y2goKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gWzIwLCAyMF07XHJcbiAgICB0aGlzLmFjdGlvbiA9IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbODIsIDUwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgIHJvd3M6IDEwXHJcbiAgICB9XHJcbiAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICB0aGlzLmhlaWdodCA9ICh0aGlzLmFjdGlvbi5lbmRbMV0gLSB0aGlzLmFjdGlvbi5zdGFydFsxXSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICB0aGlzLm9wZW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgdmFyIGNvbHVtbiwgcm93O1xyXG4gICAgICBpZiAoc3RhcnRlZCkge1xyXG4gICAgICAgIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3IodGhpcy5jeWNsZSAvIHRoaXMuYWN0aW9uLmNvbHVtbnMpO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgOSkge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb2x1bW4gPSAwO1xyXG4gICAgICAgIHJvdyA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgY3R4LmRyYXdJbWFnZShkZWNvckltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKHRoaXMuaGVpZ2h0ICogcm93KSArIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gMSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25MZW1taW5nKCkge1xyXG4gICAgT2JqZWN0LmtleXMoYWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgbGVtbWluZ3NbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKV0gPSBuZXcgTGVtbWluZyhhY3Rpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdHJlc2l6ZUNhbnZhcygpO1xyXG5cdH1cclxuXHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0Ly8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcblx0Ly8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcblx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG5cdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1MCA6IDEwNSk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbiAgc3Bhd25MZW1taW5nKCk7XHJcbiAgbGV0IGhhdGNoID0gbmV3IEhhdGNoKClcclxuICBkcmF3KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBpZiAoIXN0YXJ0ZWQpIHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguZm9udD0nNDBweCBNb25vdG9uJztcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9ICcxMCc7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcclxuICAgICAgY3R4LnJlY3QoMTUsIGNhbnZhcy5oZWlnaHQgLSA0NSwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLndpZHRoICsgMjAsIGN0eC5tZWFzdXJlVGV4dCgnU3RhcnQnKS5oZWlnaHQgKyBjYW52YXMuaGVpZ2h0IC0gNDUpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ1N0YXJ0JywgMjAsIGNhbnZhcy5oZWlnaHQgLSA1MCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKHZhciBpIGluIGxlbW1pbmdzKSB7XHJcbiAgICAgICAgbGVtbWluZ3NbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYXRjaC5vcGVuKCk7XHJcbiAgICBzdGFydGVkID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGRyYXcoKTtcclxuICAgIH0sIDE1MCk7XHJcbiAgfVxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMaXN0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIENhdGVnb3JpZXNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IHRydWU7XHJcblxyXG4gICRzY29wZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5nZXRDYXRlZ29yaWVzKClcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICRzY29wZS50YXNrcyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpIGluICRzY29wZS5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaiBpbiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrcykge1xyXG4gICAgICAgICAgJHNjb3BlLnRhc2tzLnB1c2goe1xyXG4gICAgICAgICAgICBcImNhdGVnb3J5XCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUsXHJcbiAgICAgICAgICAgIFwidGFza1wiOiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrc1tqXS5uYW1lXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RDYXRlZ29yeSA9IGZ1bmN0aW9uKGNhdGVnb3J5KSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkVGFza3MgPSBbXTtcclxuICAgICRzY29wZS5zZWxlY3RhYmxlVGFza3MgPSBbXTtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcy5wdXNoKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgIH1cclxuICAgICRzY29wZS5zaG93Q2F0ZWdvcnkgPSBmYWxzZTtcclxuICAgICRzY29wZS5lbnRlcmVkQ2F0ZWdvcnkgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUubmV3Q2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSA9PT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkoJHNjb3BlLmNhdGVnb3JpZXNbaV0pO1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZENhdGVnb3J5KHtcclxuICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuaW5pdCgpO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0ubmFtZSA9PT0gdGFzaykge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0VGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5Lm5hbWUsIHtcclxuICAgICAgICB0YXNrOiB0YXNrXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLnB1c2goeyBuYW1lOiB0YXNrIH0pO1xyXG4gICAgICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1skc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRUYXNrID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUudW5zZWxlY3RUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RhYmxlVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5hZGRUYXNrID0gZnVuY3Rpb24odGFza0xpc3QsIHRhc2spIHtcclxuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnJlbW92ZVRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3Quc3BsaWNlKHRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zdGFydFByaW9yaXRpemluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5zZXRQcmlvcml0eUxpc3QoJHNjb3BlLnNlbGVjdGVkVGFza3MpO1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy9wcmlvcml0aXplJyk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldFF1ZXN0aW9ucyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2VsZWN0ZWRUYXNrcykgcmV0dXJuICcnO1xyXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9ICRzY29wZS5zZWxlY3RlZFRhc2tzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgY291bnRlciArPSBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignTG9naW5DdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgRmlyZWJhc2VVSSBXaWRnZXQgdXNpbmcgRmlyZWJhc2UuXHJcbiAgdmFyIHVpID0gbmV3IGZpcmViYXNldWkuYXV0aC5BdXRoVUkoZmlyZWJhc2UuYXV0aCgpKTtcclxuXHJcbiAgJHNjb3BlLiRvbignbG9nb3V0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB1aS5yZXNldCgpO1xyXG4gICAgc3RhcnRVSSgpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydFVJKCkge1xyXG4gICAgdWkuc3RhcnQoJyNmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyJywge1xyXG4gICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBzaWduSW5TdWNjZXNzOiBmdW5jdGlvbiAoY3VycmVudFVzZXIsIGNyZWRlbnRpYWwsIHJlZGlyZWN0VXJsKSB7XHJcbiAgICAgICAgICAvLyBObyByZWRpcmVjdC5cclxuICAgICAgICAgIGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5hdXRoKClcclxuICAgICAgICAgICAgLmN1cnJlbnRVc2VyLmdldElkVG9rZW4odHJ1ZSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGlkVG9rZW4pIHtcclxuICAgICAgICAgICAgICBVc2VyU3ZjLmF1dGhlbnRpY2F0ZSh7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogY3VycmVudFVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogY3VycmVudFVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwaG90b1VSTDogY3VycmVudFVzZXIucGhvdG9VUkwsXHJcbiAgICAgICAgICAgICAgICBlbWFpbFZlcmlmaWVkOiBjdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkLFxyXG4gICAgICAgICAgICAgICAgaWRUb2tlbjogaWRUb2tlbixcclxuICAgICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdCgnbG9naW4nLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgJCgnI21vZGFsLWxvZ2luJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgLy8kbG9jYXRpb24ucGF0aCgnLycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KCdwb3B1cCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTG9naW4gRmFpbGVkJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYWxlcnQtZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBzaWduSW5GYWlsdXJlIGNhbGxiYWNrIG11c3QgYmUgcHJvdmlkZWQgdG8gaGFuZGxlIG1lcmdlIGNvbmZsaWN0cyB3aGljaFxyXG4gICAgICAgIC8vIG9jY3VyIHdoZW4gYW4gZXhpc3RpbmcgY3JlZGVudGlhbCBpcyBsaW5rZWQgdG8gYW4gYW5vbnltb3VzIHVzZXIuXHJcbiAgICAgICAgc2lnbkluRmFpbHVyZTogZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBGb3IgbWVyZ2UgY29uZmxpY3RzLCB0aGUgZXJyb3IuY29kZSB3aWxsIGJlXHJcbiAgICAgICAgICAvLyAnZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdCcuXHJcbiAgICAgICAgICBpZiAoZXJyb3IuY29kZSAhPSAnZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gVGhlIGNyZWRlbnRpYWwgdGhlIHVzZXIgdHJpZWQgdG8gc2lnbiBpbiB3aXRoLlxyXG4gICAgICAgICAgdmFyIGNyZWQgPSBlcnJvci5jcmVkZW50aWFsO1xyXG4gICAgICAgICAgLy8gQ29weSBkYXRhIGZyb20gYW5vbnltb3VzIHVzZXIgdG8gcGVybWFuZW50IHVzZXIgYW5kIGRlbGV0ZSBhbm9ueW1vdXNcclxuICAgICAgICAgIC8vIHVzZXIuXHJcbiAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgIC8vIEZpbmlzaCBzaWduLWluIGFmdGVyIGRhdGEgaXMgY29waWVkLlxyXG4gICAgICAgICAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoQ3JlZGVudGlhbChjcmVkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVpU2hvd246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vIFRoZSB3aWRnZXQgaXMgcmVuZGVyZWQuXHJcbiAgICAgICAgICAvLyBIaWRlIHRoZSBsb2FkZXIuXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzaWduSW5TdWNjZXNzVXJsOiAnL2hvbWUnLFxyXG4gICAgICBzaWduSW5PcHRpb25zOiBbXHJcbiAgICAgICAgLy9maXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICAvLyBXaWxsIHVzZSBwb3B1cCBmb3IgSURQIFByb3ZpZGVycyBzaWduLWluIGZsb3cgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCwgcmVkaXJlY3QuXHJcbiAgICAgIHNpZ25JbkZsb3c6ICdwb3B1cCcsXHJcbiAgICAgIC8vIE90aGVyIGNvbmZpZyBvcHRpb25zLi4uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0VUkoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUG9zdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGZpbHRlciwgUG9zdHNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XHJcbiAgICAgIFBvc3RzU3ZjLmNyZWF0ZSh7XHJcbiAgICAgICAgYm9keTogJHNjb3BlLnBvc3RCb2R5XHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgICAgICAkc2NvcGUucG9zdEJvZHkgPSBudWxsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBQb3N0c1N2Yy5mZXRjaCgpXHJcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUucG9zdHMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKCd3czpuZXdfcG9zdCcsIGZ1bmN0aW9uIChfLCBwb3N0KSB7XHJcbiAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgUG9zdHNTdmMuZ2V0UG9zdChwb3N0KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUucG9zdHMudW5zaGlmdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUHJvZmlsZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcbiAgY29uc3QgY291bnRyaWVzID0gW1xyXG4gICAgeyBuYW1lOiBcIkFuZG9ycmFcIiwgZmxhZzogXCJmbGFnLWFkXCIsIHRpZGJpdDogXCJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBBcmFiIEVtaXJhdGVzXCIsIGZsYWc6IFwiZmxhZy1hZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWZnaGFuaXN0YW5cIiwgZmxhZzogXCJmbGFnLWFmXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsIGZsYWc6IFwiZmxhZy1hZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW5ndWlsbGFcIiwgZmxhZzogXCJmbGFnLWFpXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbGJhbmlhXCIsIGZsYWc6IFwiZmxhZy1hbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXJtZW5pYVwiLCBmbGFnOiBcImZsYWctYW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFuZ29sYVwiLCBmbGFnOiBcImZsYWctYW9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFudGFyY3RpY2FcIiwgZmxhZzogXCJmbGFnLWFxXCIgfSxcclxuICAgIHsgbmFtZTogXCJBcmdlbnRpbmFcIiwgZmxhZzogXCJmbGFnLWFyXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbWVyaWNhbiBTb21vYVwiLCBmbGFnOiBcImZsYWctYXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF1c3RyaWFcIiwgZmxhZzogXCJmbGFnLWF0XCIgfSxcclxuICAgIHsgbmFtZTogXCJBdXN0cmFsaWFcIiwgZmxhZzogXCJmbGFnLWF1XCIgfSxcclxuICAgIHsgbmFtZTogXCJBcnViYVwiLCBmbGFnOiBcImZsYWctYXdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIsOFbGFuZCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1heFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXplcmJhaWphblwiLCBmbGFnOiBcImZsYWctYXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIiwgZmxhZzogXCJmbGFnLWJhXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYXJiYWRvc1wiLCBmbGFnOiBcImZsYWctYmJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhbmdsYWRlc2hcIiwgZmxhZzogXCJmbGFnLWJkXCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxnaXVtXCIsIGZsYWc6IFwiZmxhZy1iZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnVya2luYSBGYXNvXCIsIGZsYWc6IFwiZmxhZy1iZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnVsZ2FyaWFcIiwgZmxhZzogXCJmbGFnLWJnXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYWhyYWluXCIsIGZsYWc6IFwiZmxhZy1iaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnVydW5kaVwiLCBmbGFnOiBcImZsYWctYmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbmluXCIsIGZsYWc6IFwiZmxhZy1ialwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgQmFydGjDqWxlbXlcIiwgZmxhZzogXCJmbGFnLWJsXCIgfSxcclxuICAgIHsgbmFtZTogXCJCZXJtdWRhXCIsIGZsYWc6IFwiZmxhZy1ibVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJ1bmVpIFwiLCBmbGFnOiBcImZsYWctYm5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvbGl2aWEsIFBsdXJpbmF0aW9uYWwgU3RhdGUgb2ZcIiwgZmxhZzogXCJmbGFnLWJvXCIgfSxcclxuICAgIHsgbmFtZTogXCJCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYVwiLCBmbGFnOiBcImZsYWctYnFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJyYXppbFwiLCBmbGFnOiBcImZsYWctYnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhaGFtYXNcIiwgZmxhZzogXCJmbGFnLWJzXCIgfSxcclxuICAgIHsgbmFtZTogXCJCaHV0YW5cIiwgZmxhZzogXCJmbGFnLWJ0XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3V2ZXQgSXNsYW5kXCIsIGZsYWc6IFwiZmxhZy1idlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm90c3dhbmFcIiwgZmxhZzogXCJmbGFnLWJ3XCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxhcnVzXCIsIGZsYWc6IFwiZmxhZy1ieVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVsaXplXCIsIGZsYWc6IFwiZmxhZy1ielwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FuYWRhXCIsIGZsYWc6IFwiZmxhZy1jYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb25nbywgdGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlXCIsIGZsYWc6IFwiZmxhZy1jZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1jZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29uZ29cIiwgZmxhZzogXCJmbGFnLWNnXCIgfSxcclxuICAgIHsgbmFtZTogXCJTd2l0emVybGFuZFwiLCBmbGFnOiBcImZsYWctY2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkPDtHRlIGQnSXZvaXJlXCIsIGZsYWc6IFwiZmxhZy1jaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29vayBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1ja1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hpbGVcIiwgZmxhZzogXCJmbGFnLWNsXCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW1lcm9vblwiLCBmbGFnOiBcImZsYWctY21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoaW5hXCIsIGZsYWc6IFwiZmxhZy1jblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29sb21iaWFcIiwgZmxhZzogXCJmbGFnLWNvXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb3N0YSBSaWNhXCIsIGZsYWc6IFwiZmxhZy1jclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3ViYVwiLCBmbGFnOiBcImZsYWctY3VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhYm8gVmVyZGVcIiwgZmxhZzogXCJmbGFnLWN2XCIgfSxcclxuICAgIHsgbmFtZTogXCJDdXJhw6dhb1wiLCBmbGFnOiBcImZsYWctY3dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNocmlzdG1hcyBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLWN4XCIgfSxcclxuICAgIHsgbmFtZTogXCJDeXBydXNcIiwgZmxhZzogXCJmbGFnLWN5XCIgfSxcclxuICAgIHsgbmFtZTogXCJDemVjaCBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctY3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdlcm1hbnlcIiwgZmxhZzogXCJmbGFnLWRlXCIgfSxcclxuICAgIHsgbmFtZTogXCJEamlib3V0aVwiLCBmbGFnOiBcImZsYWctZGpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRlbm1hcmtcIiwgZmxhZzogXCJmbGFnLWRrXCIgfSxcclxuICAgIHsgbmFtZTogXCJEb21pbmljYVwiLCBmbGFnOiBcImZsYWctZG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRvbWluaWNhbiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctZG9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFsZ2VyaWFcIiwgZmxhZzogXCJmbGFnLWR6XCIgfSxcclxuICAgIHsgbmFtZTogXCJFY3VhZG9yXCIsIGZsYWc6IFwiZmxhZy1lY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXN0b25pYVwiLCBmbGFnOiBcImZsYWctZWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVneXB0XCIsIGZsYWc6IFwiZmxhZy1lZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiV2VzdGVybiBTYWhhcmFcIiwgZmxhZzogXCJmbGFnLWVoXCIgfSxcclxuICAgIHsgbmFtZTogXCJFcml0cmVhXCIsIGZsYWc6IFwiZmxhZy1lclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3BhaW5cIiwgZmxhZzogXCJmbGFnLWVzXCIgfSxcclxuICAgIHsgbmFtZTogXCJFdGhpb3BpYVwiLCBmbGFnOiBcImZsYWctZXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZpbmxhbmRcIiwgZmxhZzogXCJmbGFnLWZpXCIgfSxcclxuICAgIHsgbmFtZTogXCJGaWppXCIsIGZsYWc6IFwiZmxhZy1malwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpXCIsIGZsYWc6IFwiZmxhZy1ma1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcyBvZlwiLCBmbGFnOiBcImZsYWctZm1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZhcm9lIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWZvXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmFuY2VcIiwgZmxhZzogXCJmbGFnLWZyXCIgfSxcclxuICAgIHsgbmFtZTogXCJHYWJvblwiLCBmbGFnOiBcImZsYWctZ2FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmRcIiwgZmxhZzogXCJmbGFnLWdiXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVuYWRhXCIsIGZsYWc6IFwiZmxhZy1nZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2VvcmdpYVwiLCBmbGFnOiBcImZsYWctZ2VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBHdWlhbmFcIiwgZmxhZzogXCJmbGFnLWdmXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWVybnNleVwiLCBmbGFnOiBcImZsYWctZ2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdoYW5hXCIsIGZsYWc6IFwiZmxhZy1naFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2licmFsdGFyXCIsIGZsYWc6IFwiZmxhZy1naVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3JlZW5sYW5kXCIsIGZsYWc6IFwiZmxhZy1nbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2FtYmlhXCIsIGZsYWc6IFwiZmxhZy1nbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1nblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VhZGVsb3VwZVwiLCBmbGFnOiBcImZsYWctZ3BcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVxdWF0b3JpYWwgR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1ncVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3JlZWNlXCIsIGZsYWc6IFwiZmxhZy1nclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWdzXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWF0ZW1hbGFcIiwgZmxhZzogXCJmbGFnLWd0XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWFtXCIsIGZsYWc6IFwiZmxhZy1ndVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VpbmVhLUJpc3NhdVwiLCBmbGFnOiBcImZsYWctZ3dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1eWFuYVwiLCBmbGFnOiBcImZsYWctZ3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhvbmcgS29uZ1wiLCBmbGFnOiBcImZsYWctaGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctaG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhvbmR1cmFzXCIsIGZsYWc6IFwiZmxhZy1oblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3JvYXRpYVwiLCBmbGFnOiBcImZsYWctaHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhhaXRpXCIsIGZsYWc6IFwiZmxhZy1odFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSHVuZ2FyeVwiLCBmbGFnOiBcImZsYWctaHVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkluZG9uZXNpYVwiLCBmbGFnOiBcImZsYWctaWRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklyZWxhbmRcIiwgZmxhZzogXCJmbGFnLWllXCIgfSxcclxuICAgIHsgbmFtZTogXCJJc3JhZWxcIiwgZmxhZzogXCJmbGFnLWlsXCIgfSxcclxuICAgIHsgbmFtZTogXCJJc2xlIG9mIE1hblwiLCBmbGFnOiBcImZsYWctaW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkluZGlhXCIsIGZsYWc6IFwiZmxhZy1pblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCIsIGZsYWc6IFwiZmxhZy1pb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJhcVwiLCBmbGFnOiBcImZsYWctaXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWlyXCIgfSxcclxuICAgIHsgbmFtZTogXCJJY2VsYW5kXCIsIGZsYWc6IFwiZmxhZy1pc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXRhbHlcIiwgZmxhZzogXCJmbGFnLWl0XCIgfSxcclxuICAgIHsgbmFtZTogXCJKZXJzZXlcIiwgZmxhZzogXCJmbGFnLWplXCIgfSxcclxuICAgIHsgbmFtZTogXCJKYW1haWNhXCIsIGZsYWc6IFwiZmxhZy1qbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSm9yZGFuXCIsIGZsYWc6IFwiZmxhZy1qb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSmFwYW5cIiwgZmxhZzogXCJmbGFnLWpwXCIgfSxcclxuICAgIHsgbmFtZTogXCJLZW55YVwiLCBmbGFnOiBcImZsYWcta2VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkt5cmd5enN0YW5cIiwgZmxhZzogXCJmbGFnLWtnXCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW1ib2RpYVwiLCBmbGFnOiBcImZsYWcta2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktpcmliYXRpXCIsIGZsYWc6IFwiZmxhZy1raVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29tb3Jvc1wiLCBmbGFnOiBcImZsYWcta21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLCBmbGFnOiBcImZsYWcta25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIktvcmVhLCBEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1rcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS29yZWEsIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1rclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS3V3YWl0XCIsIGZsYWc6IFwiZmxhZy1rd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2F5bWFuIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWt5XCIgfSxcclxuICAgIHsgbmFtZTogXCJLYXpha2hzdGFuXCIsIGZsYWc6IFwiZmxhZy1relwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWxhXCIgfSxcclxuICAgIHsgbmFtZTogXCJMZWJhbm9uXCIsIGZsYWc6IFwiZmxhZy1sYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgTHVjaWFcIiwgZmxhZzogXCJmbGFnLWxjXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWVjaHRlbnN0ZWluXCIsIGZsYWc6IFwiZmxhZy1saVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3JpIExhbmthXCIsIGZsYWc6IFwiZmxhZy1sa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGliZXJpYVwiLCBmbGFnOiBcImZsYWctbHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxlc290aG9cIiwgZmxhZzogXCJmbGFnLWxzXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaXRodWFuaWFcIiwgZmxhZzogXCJmbGFnLWx0XCIgfSxcclxuICAgIHsgbmFtZTogXCJMdXhlbWJvdXJnXCIsIGZsYWc6IFwiZmxhZy1sdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGF0dmlhXCIsIGZsYWc6IFwiZmxhZy1sdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGlieWFcIiwgZmxhZzogXCJmbGFnLWx5XCIgfSxcclxuICAgIHsgbmFtZTogXCJNb3JvY2NvXCIsIGZsYWc6IFwiZmxhZy1tYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9uYWNvXCIsIGZsYWc6IFwiZmxhZy1tY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9sZG92YSwgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLW1kXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb250ZW5lZ3JvXCIsIGZsYWc6IFwiZmxhZy1tZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIiwgZmxhZzogXCJmbGFnLW1mXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWRhZ2FzY2FyXCIsIGZsYWc6IFwiZmxhZy1tZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFyc2hhbGwgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctbWhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hY2Vkb25pYSwgdGhlIGZvcm1lciBZdWdvc2xhdiBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctbWtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGlcIiwgZmxhZzogXCJmbGFnLW1sXCIgfSxcclxuICAgIHsgbmFtZTogXCJNeWFubWFyXCIsIGZsYWc6IFwiZmxhZy1tbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9uZ29saWFcIiwgZmxhZzogXCJmbGFnLW1uXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWNhb1wiLCBmbGFnOiBcImZsYWctbW9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctbXBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hcnRpbmlxdWVcIiwgZmxhZzogXCJmbGFnLW1xXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXVyaXRhbmlhXCIsIGZsYWc6IFwiZmxhZy1tclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9udHNlcnJhdFwiLCBmbGFnOiBcImZsYWctbXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbHRhXCIsIGZsYWc6IFwiZmxhZy1tdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWF1cml0aXVzXCIsIGZsYWc6IFwiZmxhZy1tdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsZGl2ZXNcIiwgZmxhZzogXCJmbGFnLW12XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxhd2lcIiwgZmxhZzogXCJmbGFnLW13XCIgfSxcclxuICAgIHsgbmFtZTogXCJNZXhpY29cIiwgZmxhZzogXCJmbGFnLW14XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxheXNpYVwiLCBmbGFnOiBcImZsYWctbXlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vemFtYmlxdWVcIiwgZmxhZzogXCJmbGFnLW16XCIgfSxcclxuICAgIHsgbmFtZTogXCJOYW1pYmlhXCIsIGZsYWc6IFwiZmxhZy1uYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV3IENhbGVkb25pYVwiLCBmbGFnOiBcImZsYWctbmNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pZ2VyXCIsIGZsYWc6IFwiZmxhZy1uZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9yZm9sayBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLW5mXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWdlcmlhXCIsIGZsYWc6IFwiZmxhZy1uZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmljYXJhZ3VhXCIsIGZsYWc6IFwiZmxhZy1uaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV0aGVybGFuZHNcIiwgZmxhZzogXCJmbGFnLW5sXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3J3YXlcIiwgZmxhZzogXCJmbGFnLW5vXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXBhbFwiLCBmbGFnOiBcImZsYWctbnBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hdXJ1XCIsIGZsYWc6IFwiZmxhZy1uclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTml1ZVwiLCBmbGFnOiBcImZsYWctbnVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5ldyBaZWFsYW5kXCIsIGZsYWc6IFwiZmxhZy1uelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiT21hblwiLCBmbGFnOiBcImZsYWctb21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhbmFtYVwiLCBmbGFnOiBcImZsYWctcGFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBlcnVcIiwgZmxhZzogXCJmbGFnLXBlXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggUG9seW5lc2lhXCIsIGZsYWc6IFwiZmxhZy1wZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFwdWEgTmV3IEd1aW5lYVwiLCBmbGFnOiBcImZsYWctcGdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBoaWxpcHBpbmVzXCIsIGZsYWc6IFwiZmxhZy1waFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFraXN0YW5cIiwgZmxhZzogXCJmbGFnLXBrXCIgfSxcclxuICAgIHsgbmFtZTogXCJQb2xhbmRcIiwgZmxhZzogXCJmbGFnLXBsXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCIsIGZsYWc6IFwiZmxhZy1wbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGl0Y2Fpcm5cIiwgZmxhZzogXCJmbGFnLXBuXCIgfSxcclxuICAgIHsgbmFtZTogXCJQdWVydG8gUmljb1wiLCBmbGFnOiBcImZsYWctcHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhbGVzdGluZSwgU3RhdGUgb2ZcIiwgZmxhZzogXCJmbGFnLXBzXCIgfSxcclxuICAgIHsgbmFtZTogXCJQb3J0dWdhbFwiLCBmbGFnOiBcImZsYWctcHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhbGF1XCIsIGZsYWc6IFwiZmxhZy1wd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFyYWd1YXlcIiwgZmxhZzogXCJmbGFnLXB5XCIgfSxcclxuICAgIHsgbmFtZTogXCJRYXRhclwiLCBmbGFnOiBcImZsYWctcWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlLDqXVuaW9uXCIsIGZsYWc6IFwiZmxhZy1yZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUm9tYW5pYVwiLCBmbGFnOiBcImZsYWctcm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNlcmJpYVwiLCBmbGFnOiBcImZsYWctcnNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlJ1c3NpYW4gRmVkZXJhdGlvblwiLCBmbGFnOiBcImZsYWctcnVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlJ3YW5kYVwiLCBmbGFnOiBcImZsYWctcndcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhdWRpIEFyYWJpYVwiLCBmbGFnOiBcImZsYWctc2FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvbG9tb24gSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctc2JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNleWNoZWxsZXNcIiwgZmxhZzogXCJmbGFnLXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJTdWRhblwiLCBmbGFnOiBcImZsYWctc2RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3ZWRlblwiLCBmbGFnOiBcImZsYWctc2VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpbmdhcG9yZVwiLCBmbGFnOiBcImZsYWctc2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhXCIsIGZsYWc6IFwiZmxhZy1zaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2xvdmVuaWFcIiwgZmxhZzogXCJmbGFnLXNpXCIgfSxcclxuICAgIHsgbmFtZTogXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCIsIGZsYWc6IFwiZmxhZy1zalwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2xvdmFraWFcIiwgZmxhZzogXCJmbGFnLXNrXCIgfSxcclxuICAgIHsgbmFtZTogXCJTaWVycmEgTGVvbmVcIiwgZmxhZzogXCJmbGFnLXNsXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW4gTWFyaW5vXCIsIGZsYWc6IFwiZmxhZy1zbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2VuZWdhbFwiLCBmbGFnOiBcImZsYWctc25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvbWFsaWFcIiwgZmxhZzogXCJmbGFnLXNvXCIgfSxcclxuICAgIHsgbmFtZTogXCJTdXJpbmFtZVwiLCBmbGFnOiBcImZsYWctc3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvdXRoIFN1ZGFuXCIsIGZsYWc6IFwiZmxhZy1zc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FvIFRvbWUgYW5kIFByaW5jaXBlXCIsIGZsYWc6IFwiZmxhZy1zdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWwgU2FsdmFkb3JcIiwgZmxhZzogXCJmbGFnLXN2XCIgfSxcclxuICAgIHsgbmFtZTogXCJTaW50IE1hYXJ0ZW4gKER1dGNoIHBhcnQpXCIsIGZsYWc6IFwiZmxhZy1zeFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3lyaWFuIEFyYWIgUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLXN5XCIgfSxcclxuICAgIHsgbmFtZTogXCJTd2F6aWxhbmRcIiwgZmxhZzogXCJmbGFnLXN6XCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLXRjXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGFkXCIsIGZsYWc6IFwiZmxhZy10ZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzXCIsIGZsYWc6IFwiZmxhZy10ZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9nb1wiLCBmbGFnOiBcImZsYWctdGdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRoYWlsYW5kXCIsIGZsYWc6IFwiZmxhZy10aFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGFqaWtpc3RhblwiLCBmbGFnOiBcImZsYWctdGpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRva2VsYXVcIiwgZmxhZzogXCJmbGFnLXRrXCIgfSxcclxuICAgIHsgbmFtZTogXCJUaW1vci1MZXN0ZVwiLCBmbGFnOiBcImZsYWctdGxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmttZW5pc3RhblwiLCBmbGFnOiBcImZsYWctdG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1bmlzaWFcIiwgZmxhZzogXCJmbGFnLXRuXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb25nYVwiLCBmbGFnOiBcImZsYWctdG9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmtleVwiLCBmbGFnOiBcImZsYWctdHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIiwgZmxhZzogXCJmbGFnLXR0XCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXZhbHVcIiwgZmxhZzogXCJmbGFnLXR2XCIgfSxcclxuICAgIHsgbmFtZTogXCJUYWl3YW4sIFByb3ZpbmNlIG9mIENoaW5hXCIsIGZsYWc6IFwiZmxhZy10d1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctdHpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVrcmFpbmVcIiwgZmxhZzogXCJmbGFnLXVhXCIgfSxcclxuICAgIHsgbmFtZTogXCJVZ2FuZGFcIiwgZmxhZzogXCJmbGFnLXVnXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLXVtXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIiwgZmxhZzogXCJmbGFnLXVzXCIgfSxcclxuICAgIHsgbmFtZTogXCJVcnVndWF5XCIsIGZsYWc6IFwiZmxhZy11eVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVXpiZWtpc3RhblwiLCBmbGFnOiBcImZsYWctdXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhvbHkgU2VlXCIsIGZsYWc6IFwiZmxhZy12YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIiwgZmxhZzogXCJmbGFnLXZjXCIgfSxcclxuICAgIHsgbmFtZTogXCJWZW5lenVlbGEsIEJvbGl2YXJpYW4gUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLXZlXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaXJnaW4gSXNsYW5kcywgQnJpdGlzaFwiLCBmbGFnOiBcImZsYWctdmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzLCBVLlMuXCIsIGZsYWc6IFwiZmxhZy12aVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlldCBOYW1cIiwgZmxhZzogXCJmbGFnLXZuXCIgfSxcclxuICAgIHsgbmFtZTogXCJWYW51YXR1XCIsIGZsYWc6IFwiZmxhZy12dVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiV2FsbGlzIGFuZCBGdXR1bmFcIiwgZmxhZzogXCJmbGFnLXdmXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW1vYVwiLCBmbGFnOiBcImZsYWctd3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlllbWVuXCIsIGZsYWc6IFwiZmxhZy15ZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWF5b3R0ZVwiLCBmbGFnOiBcImZsYWcteXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvdXRoIEFmcmljYVwiLCBmbGFnOiBcImZsYWctemFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlphbWJpYVwiLCBmbGFnOiBcImZsYWctem1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlppbWJhYndlXCIsIGZsYWc6IFwiZmxhZy16d1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVXNlckZsYWdzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnVzZXJGbGFncyA9ICRzY29wZS5jdXJyZW50VXNlcj8uZmxhZ3NcclxuICAgICAgPyBjb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChjb3VudHJ5KSB7XHJcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLmN1cnJlbnRVc2VyLmZsYWdzLmluY2x1ZGVzKGNvdW50cnkuZmxhZyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgOiBbXTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZGF0ZU9wdGlvbnMgPSB7XHJcbiAgICBtYXhEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgbWluRGF0ZTogbmV3IERhdGUoMTkwMCwgMSwgMSksXHJcbiAgICBpbml0RGF0ZTogbmV3IERhdGUoMjAwMCwgMSwgMSksXHJcbiAgICBkYXRlcGlja2VyTW9kZTogXCJ5ZWFyXCIsXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVzZXJuYW1lVG9nZ2xlID0gdHJ1ZTtcclxuICAkc2NvcGUucGFzc3dvcmRUb2dnbGUgPSB0cnVlO1xyXG5cclxuICAkc2NvcGUudG9nZ2xlVXNlcm5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSAhJHNjb3BlLnVzZXJuYW1lVG9nZ2xlO1xyXG4gICAgJHNjb3BlLm5ld1VzZXJuYW1lID0gJHNjb3BlLmN1cnJlbnRVc2VyLnVzZXJuYW1lO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS50b2dnbGVQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS5uZXdQYXNzd29yZCA9IG51bGw7XHJcbiAgICAkc2NvcGUuY29uZmlybVBhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9ICEkc2NvcGUucGFzc3dvcmRUb2dnbGU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAocGFzc3dvcmQpIHtcclxuICAgIGlmIChwYXNzd29yZCkge1xyXG4gICAgICB2YXIgdXNlciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgIFVzZXJTdmMuY2hlY2tQYXNzd29yZCh1c2VyLCBwYXNzd29yZCkudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBvcmlnaW5hbEJnID0gJChcIi5wYXNzd29yZFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIik7XHJcbiAgICAgICAgICAkKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjZDMVwiIH0sIDIwMCkuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogb3JpZ2luYWxCZyB9LCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVBhc3N3b3JkID0gZnVuY3Rpb24gKG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCwgY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICBpZiAobmV3UGFzc3dvcmQpIHtcclxuICAgICAgaWYgKG5ld1Bhc3N3b3JkID09IGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgICBVc2VyU3ZjLmNoYW5nZVBhc3N3b3JkKHVzZXIsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCkudGhlbihcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwicG9wdXBcIiwge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGFzc3dvcmQgQ2hhbmdlZFwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiYWxlcnQtc3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJHNjb3BlLm9sZFBhc3N3b3JkID0gbnVsbDtcclxuICAgICAgICAgICAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuJGVtaXQoXCJwb3B1cFwiLCB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJQYXNzd29yZCBDaGFuZ2UgRmFpbGVkXCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJhbGVydC1kYW5nZXJcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAkKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjZDMVwiIH0sIDIwMCkuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogb3JpZ2luYWxCZyB9LCAyMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXJuYW1lKSB7XHJcbiAgICAkc2NvcGUuJGVtaXQoXCJsb2FkaW5nXCIpO1xyXG4gICAgVXNlclN2Yy5jaGFuZ2VVc2VybmFtZSgkc2NvcGUuY3VycmVudFVzZXIuX2lkLCB1c2VybmFtZSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwidXBkYXRlXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwicG9wdXBcIiwge1xyXG4gICAgICAgICAgbWVzc2FnZTogdXNlcm5hbWUgKyBcIiBhbHJlYWR5IGluIHVzZVwiLFxyXG4gICAgICAgICAgdHlwZTogXCJhbGVydC1kYW5nZXJcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUuJGVtaXQoXCJsb2FkaW5nXCIpO1xyXG4gICAgVXNlclN2Yy51cGRhdGVVc2VyKHsgLi4uJHNjb3BlLmN1cnJlbnRVc2VyLCBmbGFnczogJHNjb3BlLnVzZXJGbGFncy5tYXAoKHsgZmxhZyB9KSA9PiBmbGFnKSB9KS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoXCJ1cGRhdGVcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5sb2FkQ291bnRyaWVzID0gZnVuY3Rpb24gKCRxdWVyeSkge1xyXG4gICAgcmV0dXJuIGNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGNvdW50cnkpIHtcclxuICAgICAgcmV0dXJuIGNvdW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsICgpID0+IHtcclxuICAgIHVwZGF0ZVVzZXJGbGFncygpO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdTa2lsbHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IDA7XHJcbiAgJHNjb3BlLnNraWxsc1Zpc2libGUgPSBmYWxzZTtcclxuICAkc2NvcGUucHJvamVjdHMgPSBbXTtcclxuXHJcbiAgJHNjb3BlLmxhYmVscyA9IFtcIkRvd25sb2FkIFNhbGVzXCIsIFwiSW4tU3RvcmUgU2FsZXNcIiwgXCJNYWlsLU9yZGVyIFNhbGVzXCJdO1xyXG4gICRzY29wZS5kYXRhID0gWzMwMCwgNTAwLCAxMDBdO1xyXG5cclxuICAkLmdldEpTT04oJy9leHBlcmllbmNlLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuICAgICRzY29wZS5wcm9qZWN0cyA9IGRhdGEucmVkdWNlKChwcm9qZWN0cywgZW1wbG95ZXIpID0+IHtcclxuICAgICAgaWYgKGVtcGxveWVyLnByb2plY3RzKSByZXR1cm4gZW1wbG95ZXIucHJvamVjdHMuY29uY2F0KHByb2plY3RzKTtcclxuICAgICAgZWxzZSByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9LCB7fSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5maWx0ZXJlZFByb2plY3RzID0gKCkgPT4gJHNjb3BlLnByb2plY3RzXHJcbiAgICAuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNraWxscyAmJiBwcm9qZWN0LnNraWxscy5pbmNsdWRlcygkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jb2RlKSlcclxuXHJcbiAgJC5nZXRKU09OKCcvc2tpbGxzLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuXHJcbiAgICBjb25zdCBza2lsbHMgPSBkYXRhXHJcbiAgICAuZmlsdGVyKChza2lsbCkgPT4gc2tpbGwuZW5hYmxlZClcclxuXHJcbiAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHNraWxsc1xyXG4gICAgLnJlZHVjZShmdW5jdGlvbihjYXRlZ29yaWVzLCBza2lsbCkge1xyXG4gICAgICBpZiAoIWNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0gPSBbc2tpbGxdXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0ucHVzaChza2lsbClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2F0ZWdvcmllcztcclxuICAgIH0sIHt9KTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCA9IGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IHNraWxsO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydE9wdGlvbnMgPSB7XHJcbiAgICAgICAgY3V0b3V0UGVyY2VudGFnZSA6IDgwLFxyXG4gICAgICAgIGNpcmN1bWZlcmVuY2U6IDIgKiBNYXRoLlBJLFxyXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXHJcbiAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydFN0eWxlID0ge1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgvc2tpbGxzLycgKyAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5pbWFnZSArICcpJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJzYwJScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnNTAlIDUwJSdcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwoJHNjb3BlLnNraWxsc1swXSk7XHJcblxyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRzY2UsICRsb2NhdGlvbiwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICBsZXQgcGFnZSA9IDE7XHJcbiAgICAkc2NvcGUubGlzdHMgPSBbXTtcclxuICAgICRzY29wZS5zZWFyY2ggPSBcIlwiO1xyXG4gICAgJHNjb3BlLm5ld0l0ZW0gPSB7fTtcclxuICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHt9O1xyXG4gICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBcIkVOXCI7XHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW107XHJcbiAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICBsZXQgZXhoYXVzdGVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3Qgb2JqZWN0Q2F0ZWdvcmllcyA9IFtcclxuICAgICAgXCJBcnRcIixcclxuICAgICAgXCJDdWx0dXJlXCIsXHJcbiAgICAgIFwiRm9vZCBhbmQgRHJpbmtcIixcclxuICAgICAgXCJOYXR1cmVcIixcclxuICAgICAgXCJPYmplY3RzXCIsXHJcbiAgICAgIFwiUmVsaWdpb25cIixcclxuICAgICAgXCJTb2NpZXR5XCIsXHJcbiAgICAgIFwiU3BvcnRzXCIsXHJcbiAgICAgIFwiVHJhbnNwb3J0YXRpb25cIixcclxuICAgIF07XHJcbiAgICAkc2NvcGUuYmx1cmJUeXBlcyA9IFtcclxuICAgICAgeyBhcGk6IFwibW92aWVzXCIsIGNhdGVnb3JpZXM6IFtcIk1vdmllc1wiXSwgdGV4dDogXCJHZXQgbW92aWUgcG9zdGVyc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcInR2XCIsIGNhdGVnb3JpZXM6IFtcIlRlbGV2aXNpb25cIl0sIHRleHQ6IFwiR2V0IHR2IHBvc3RlcnNcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJhY3RvcnNcIiwgY2F0ZWdvcmllczogW1wiTW92aWVzXCIsIFwiVGVsZXZpc2lvblwiXSwgdGV4dDogXCJHZXQgYWN0b3IgcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcImJvb2tzXCIsIGNhdGVnb3JpZXM6IFtcIkxpdGVyYXR1cmVcIl0sIHRleHQ6IFwiR2V0IGJvb2sgY292ZXJzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwibXVzaWN2aWRlb3NcIiwgY2F0ZWdvcmllczogW1wiTXVzaWNcIl0sIHRleHQ6IFwiR2V0IG11c2ljIHZpZGVvc1wiLCBhZG1pbk9ubHk6IHRydWUgfSxcclxuICAgICAgeyBhcGk6IFwidW5zcGxhc2hcIiwgY2F0ZWdvcmllczogb2JqZWN0Q2F0ZWdvcmllcywgdGV4dDogXCJHZXQgVW5zcGxhc2ggcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcInBleGVsc1wiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBQZXhlbHMgcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcIndpa2lcIiwgY2F0ZWdvcmllczogb2JqZWN0Q2F0ZWdvcmllcywgdGV4dDogXCJHZXQgV2lraSBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgIF07XHJcblxyXG4gICAgJHNjb3BlLmhhdmVDb21tb25JdGVtcyA9IChhcnIxLCBhcnIyKSA9PiB7XHJcbiAgICAgIHJldHVybiBhcnIxPy5zb21lKChpdGVtKSA9PiBhcnIyLmluY2x1ZGVzKGl0ZW0pKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIC8vIFRhYlxyXG4gICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuY3JlYXRlVmFsdWUoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoJChcIiNuZXctdmFsdWVcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgJChcIiNuZXctYmx1cmJcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIH1cclxuICAgICAgLy8gdXNlIGUua2V5Q29kZVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWRkTGlzdCA9ICgpID0+IHtcclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgXCJuZXdcIik7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBjcmVhdG9yOiAkc2NvcGUuY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgdmFsdWVzOiBbXSxcclxuICAgICAgICBhbnN3ZXJzOiAwLFxyXG4gICAgICAgIGlzRHluYW1pYzogdHJ1ZSxcclxuICAgICAgICBjYXRlZ29yeTogXCJcIixcclxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgICBsYW5ndWFnZTogJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UsXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmIChsaXN0KSB7XHJcbiAgICAgICAgaWYgKGxpc3QuX2lkID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAkc2NvcGUuYWRkTGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0Lmxhbmd1YWdlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldExhbmd1YWdlRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzZXRDYXRlZ29yeUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0ge307XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmN1cnJlbnRVc2VyKSByZXR1cm47XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJlc2V0TGFuZ3VhZ2VGaWx0ZXIoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgcmVzZXRDYXRlZ29yeUZpbHRlcigpO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RMYW5ndWFnZVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IGRhdGEucmVkdWNlKChyZXN1bHQsIHsgX2lkLCBjb3VudCB9KSA9PiB7XHJcbiAgICAgICAgICByZXN1bHRbX2lkLmxhbmd1YWdlXSA9IChyZXN1bHRbX2lkLmxhbmd1YWdlXSB8fCAwKSArIGNvdW50O1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9LCB7fSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeVN0YXRzID0gZGF0YS5yZWR1Y2UoKHJlc3VsdCwgeyBfaWQsIGNvdW50IH0pID0+IHtcclxuICAgICAgICAgIHJlc3VsdFtfaWRdID0gY291bnQ7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCkge1xyXG4gICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoeyBfaWQ6ICRsb2NhdGlvbi5zZWFyY2goKS5saXN0IH0pO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5zZWFyY2ggPSAkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoIHx8IFwiXCI7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudmFsdWVPcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwidmFsdWVcIixcclxuICAgICAgZGlyZWN0aW9uOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogJGxvY2F0aW9uLnNlYXJjaCgpLnNvcnQgfHwgXCJkYXRlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogJGxvY2F0aW9uLnNlYXJjaCgpLm9yZGVyID8gJGxvY2F0aW9uLnNlYXJjaCgpLm9yZGVyID09PSBcImRlc2NcIiA6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA9ICEkc2NvcGUub3JkZXIuZGlyZWN0aW9uO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwic29ydFwiLCBmaWVsZCk7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJvcmRlclwiLCAkc2NvcGUub3JkZXIuZGlyZWN0aW9uID8gXCJkZXNjXCIgOiBcImFzY1wiKTtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRNb3JlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubGlzdHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgIGdldExpc3RzKCkudGhlbigobGlzdHMpID0+IHtcclxuICAgICAgICAkc2NvcGUubGlzdHMgPSAkc2NvcGUubGlzdHMuY29uY2F0KGxpc3RzKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxpc3RzID0gW107XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSBbXTtcclxuICAgICAgcGFnZSA9IDE7XHJcbiAgICAgIGV4aGF1c3RlZCA9IGZhbHNlO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gbGlzdHM7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldExhbmd1YWdlRmlsdGVyID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdKSB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPSAhJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9ICEkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpO1xyXG4gICAgICBjb25zdCBhbGxDYXRlZ29yaWVzID1cclxuICAgICAgICBjYXRlZ29yaWVzLmxlbmd0aCA9PT0gY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldKS5sZW5ndGg7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9ICRzY29wZS5jYXRlZ29yaWVzLnJlZHVjZSgoZmlsdGVyLCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgIGZpbHRlcltjYXRlZ29yeV0gPSAhYWxsQ2F0ZWdvcmllcztcclxuICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5sb2FkaW5nIHx8IGV4aGF1c3RlZCkgcmV0dXJuIFtdO1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoICE9PSAkc2NvcGUuc2VhcmNoKSB7XHJcbiAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcInNlYXJjaFwiLCAkc2NvcGUuc2VhcmNoID8gJHNjb3BlLnNlYXJjaCA6IG51bGwpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldExpc3RzKHtcclxuICAgICAgICBwYWdlLFxyXG4gICAgICAgIHNvcnRCeTogJHNjb3BlLm9yZGVyLmZpZWxkLFxyXG4gICAgICAgIG9yZGVyQnk6ICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPyAtMSA6IDEsXHJcbiAgICAgICAgbGltaXQ6IDEwMCxcclxuICAgICAgICBzZWFyY2g6ICRzY29wZS5zZWFyY2gsXHJcbiAgICAgICAgbGFuZ3VhZ2VzOiBPYmplY3Qua2V5cygkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIpLmZpbHRlcigobGFuZ3VhZ2UpID0+ICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZV0pLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSksXHJcbiAgICAgIH0pO1xyXG4gICAgICAkc2NvcGUuY291bnQgPSBkYXRhLmNvdW50O1xyXG4gICAgICBpZiAoZGF0YS5yZXN1bHQubGVuZ3RoIDwgMTAwKSBleGhhdXN0ZWQgPSB0cnVlO1xyXG4gICAgICBlbHNlIHBhZ2UgPSBkYXRhLm5leHRQYWdlO1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnJlc3VsdC5zbGljZSgwLCAxMCkpO1xyXG4gICAgICByZXR1cm4gZGF0YS5yZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMaXN0TmFtZSA9IChsaXN0SWQpID0+ICRzY29wZS5saXN0cy5maW5kKCh7IF9pZCB9KSA9PiBfaWQgPT09IGxpc3RJZCk/Lm5hbWU7XHJcblxyXG4gICAgJHNjb3BlLnVwZGF0ZVZhbHVlID0gYXN5bmMgKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKCFpdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgJHNjb3BlLmRlbGV0ZVZhbHVlKGl0ZW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRJdGVtUmVzcG9uc2UgPSBhd2FpdCBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdFZhbHVlKCRzY29wZS5zZWxlY3RlZExpc3QsIGl0ZW0pO1xyXG4gICAgICAgIGl0ZW0uYmx1cmJUeXBlID0gdXBkYXRlZEl0ZW1SZXNwb25zZS5kYXRhLmJsdXJiVHlwZTtcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNyZWF0ZVZhbHVlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5uZXdJdGVtLnZhbHVlKSByZXR1cm47XHJcbiAgICAgIGlmICgkc2NvcGUuaGFzRHVwbGljYXRlKCkpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoYCR7JHNjb3BlLm5ld0l0ZW0udmFsdWV9IGlzIGFscmVhZHkgaW4gdGhlIGxpc3RgKTtcclxuICAgICAgfSBlbHNlIGlmICghJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5wdXNoKHsgLi4uJHNjb3BlLm5ld0l0ZW0gfSk7XHJcbiAgICAgICAgaWYgKCRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCkge1xyXG4gICAgICAgICAgYXdhaXQgJHNjb3BlLnVwc2VydExpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRJdGVtUmVzcG9uc2UgPSBhd2FpdCBUZW5UaGluZ3NTdmMuY3JlYXRlTGlzdFZhbHVlKCRzY29wZS5zZWxlY3RlZExpc3QsICRzY29wZS5uZXdJdGVtKTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5wdXNoKGNyZWF0ZWRJdGVtUmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgICAkc2NvcGUubmV3SXRlbS5ibHVyYiA9IFwiXCI7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICQoXCIjbmV3LXZhbHVlXCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICAgICAgfSk7XHJcbiAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZVZhbHVlID0gKGl0ZW0pID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzID0gJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUuX2lkICE9PSBpdGVtLl9pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudXBzZXJ0TGlzdCA9IChsaXN0LCB1cGRhdGVzKSA9PiB7XHJcbiAgICAgICRzY29wZS5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAobGlzdC52YWx1ZXMubGVuZ3RoID49IDEwICYmIGxpc3QubmFtZSAmJiBsaXN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmIChsaXN0Ll9pZCAmJiBsaXN0Ll9pZCAhPT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgbGV0IGNoYW5nZXMgPSB1cGRhdGVzID8gdXBkYXRlcyA6IGxpc3Q7XHJcbiAgICAgICAgICBkZWxldGUgY2hhbmdlcy5faWQ7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAgIC4uLmNoYW5nZXMsXHJcbiAgICAgICAgICAgIF9pZDogbGlzdC5faWQsXHJcbiAgICAgICAgICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJbmRleCA9ICRzY29wZS5saXN0cy5maW5kSW5kZXgoKGxpc3QpID0+IGxpc3QuX2lkID09PSBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgICRzY29wZS5saXN0c1tsaXN0SW5kZXhdID0gZGF0YTtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmNyZWF0ZUxpc3QoJHNjb3BlLmN1cnJlbnRVc2VyLCAkc2NvcGUuc2VsZWN0ZWRMaXN0KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QgPT09IFwibmV3XCIpIHtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQgPSBkYXRhLl9pZDtcclxuICAgICAgICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKCRzY29wZS5zZWxlY3RlZExpc3QsIHVwZGF0ZXMpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCFsaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhsaXN0Ll9pZCkpIHtcclxuICAgICAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW2xpc3QuX2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0cyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHM7XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY29uZmlybU1lcmdlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgVGVuVGhpbmdzU3ZjLm1lcmdlTGlzdHMoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyk7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJChcIiNtb2RhbC1tZXJnZS1saXN0c1wiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jb25maXJtRGVsZXRlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgbGlzdElkIG9mICRzY29wZS5saXN0SWRzVG9EZWxldGUpIHtcclxuICAgICAgICBhd2FpdCBUZW5UaGluZ3NTdmMuZGVsZXRlTGlzdChsaXN0SWQpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMobGlzdC5faWQpKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuZmlsdGVyKFxyXG4gICAgICAgICAgKGhpZ2hsaWdodGVkTGlzdElkKSA9PiBoaWdobGlnaHRlZExpc3RJZCAhPT0gbGlzdC5faWQsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLnB1c2gobGlzdC5faWQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZSA9IChsaXN0LCBsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBsaXN0Lmxhbmd1YWdlID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICBjb25zdCBub25FbmdsaXNoSW5kZXggPSBsaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICBpZiAobGFuZ3VhZ2UuY29kZSAhPT0gXCJFTlwiICYmIG5vbkVuZ2xpc2hJbmRleCA8IDApIHtcclxuICAgICAgICBsaXN0LmNhdGVnb3JpZXMucHVzaChcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGxhbmd1YWdlLmNvZGUgPT09IFwiRU5cIiAmJiBub25FbmdsaXNoSW5kZXggPj0gMCkge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5zcGxpY2Uobm9uRW5nbGlzaEluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7XHJcbiAgICAgICAgY2F0ZWdvcmllczogbGlzdC5jYXRlZ29yaWVzLFxyXG4gICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZS5jb2RlLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldERpZmZpY3VsdHkgPSAobGlzdCwgZGlmZmljdWx0eSkgPT4ge1xyXG4gICAgICBsaXN0LmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7XHJcbiAgICAgICAgZGlmZmljdWx0eTogZGlmZmljdWx0eSxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRGcmVxdWVuY3kgPSAobGlzdCwgZnJlcXVlbmN5KSA9PiB7XHJcbiAgICAgIGxpc3QuZnJlcXVlbmN5ID0gZnJlcXVlbmN5O1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7XHJcbiAgICAgICAgZnJlcXVlbmN5OiBmcmVxdWVuY3ksXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnkgPSAobGlzdCwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcnlJbmRleCA9IGxpc3QuY2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KTtcclxuICAgICAgaWYgKGNhdGVnb3J5SW5kZXggPj0gMCkge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5zcGxpY2UoY2F0ZWdvcnlJbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdC5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHtcclxuICAgICAgICBjYXRlZ29yaWVzOiBsaXN0LmNhdGVnb3JpZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaGFzRHVwbGljYXRlID0gKCkgPT5cclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCAmJlxyXG4gICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSAmJlxyXG4gICAgICBfLnNvbWUoXHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMsXHJcbiAgICAgICAgKGFuc3dlcikgPT4gYW5zd2VyLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSA9PSAkc2NvcGUubmV3SXRlbS52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCksXHJcbiAgICAgICk7XHJcblxyXG4gICAgJHNjb3BlLmdldEJsdXJicyA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldEJsdXJicygkc2NvcGUuc2VsZWN0ZWRMaXN0LCB0eXBlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCk7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRFbWJlZFVybCA9ICh1cmwpID0+IHtcclxuICAgICAgaWYgKHVybC5pbmNsdWRlcyhcInlvdXR1YmUuY29tXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvWz8mXXY9KFteJl0rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJ5b3V0dS5iZVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL3lvdXR1XFwuYmVcXC8oW14mP10rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJ2aW1lby5jb21cIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC92aW1lb1xcLmNvbVxcLyhcXGQrKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsLmluY2x1ZGVzKFwib3Blbi5zcG90aWZ5XCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvdHJhY2tcXC8oW14mP10rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9lbWJlZC90cmFjay8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKHVybCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuIGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9P2F1dG9wbGF5PTFgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgZ2V0RGF0YSk7XHJcbiAgfSk7XHJcbiIsIi8qanNsaW50IGVzdmVyc2lvbjogNiovXHJcbmFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NBZG1pbkN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgVGVuVGhpbmdzU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8pID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5hZG1pbikge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcclxuICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLnJldmVyc2UgPSAhJHNjb3BlLm9yZGVyLnJldmVyc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0UXVldWUgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldFF1ZXVlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucXVldWUgPSByZXNwb25zZS5kYXRhLnJlcGxhY2UoXCIvblwiLCBcIjxici8+XCIpO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgICRzY29wZS5nZXRRdWV1ZSgpO1xyXG5cclxuICAgIFRlblRoaW5nc1N2Yy5nZXRQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICRzY29wZS5wYXVzZWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZygkc2NvcGUucGF1c2VkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdldFVzZXJzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMuZ2V0VXNlcnMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS51c2VycyA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKCh1c2VyKSA9PiAhdXNlci5hZG1pbik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVCYW4gPSAodXNlcikgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMudG9nZ2xlQmFuKHVzZXIuX2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlUGF1c2UgPSAodXNlcikgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMudG9nZ2xlUGF1c2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5wYXVzZWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5wYXVzZWQpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NHYW1lQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGVQYXJhbXMsIFRlblRoaW5nc1N2YywgVXNlclN2Yykge1xyXG4gICAgY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy5nZXRVc2VycygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKHVzZXIpID0+ICF1c2VyLmFkbWluKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5hZG1pbikge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmICgkc3RhdGVQYXJhbXMuZ2FtZSkge1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0R2FtZSgkc3RhdGVQYXJhbXMuZ2FtZSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUuZ2FtZSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmdhbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc1N0YXRzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBUZW5UaGluZ3NTdmMpIHtcclxuICAgICRzY29wZS5sYW5ndWFnZVN0YXRzID0gW107XHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0cyA9IHsgbGFiZWxzOiBbXSwgZGF0YXNldHM6IFtdIH07XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY3VycmVudFVzZXIpIHJldHVybjtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBbXTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExhbmd1YWdlcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldFBsYXlTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeWVhcnMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgeWVhciB9KSA9PiB5ZWFyKSkuc29ydCgpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRocyA9IF8udGltZXMoMTIsIChpKSA9PiBpICsgMSk7XHJcbiAgICAgICAgJHNjb3BlLnBsYXlTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogbW9udGhzLFxyXG4gICAgICAgICAgc2VyaWVzOiB5ZWFycyxcclxuICAgICAgICAgIGRhdGE6IHllYXJzLm1hcCgoeWVhcikgPT5cclxuICAgICAgICAgICAgbW9udGhzLm1hcCgobW9udGgpID0+IGRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5tb250aCA9PT0gbW9udGggJiYgaXRlbS55ZWFyID09PSB5ZWFyKT8udW5pcXVlUGxheWVycyB8fCAwKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJDaGFydC5qcyBMaW5lIENoYXJ0XCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0TGFuZ3VhZ2VTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeWVhcnMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC55ZWFyKSkuc29ydCgpO1xyXG4gICAgICAgIGNvbnN0IGxhbmd1YWdlcyA9IF8udW5pcShkYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkLmxhbmd1YWdlKSkuc29ydCgpO1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiBsYW5ndWFnZXMsXHJcbiAgICAgICAgICBzZXJpZXM6IHllYXJzLFxyXG4gICAgICAgICAgZGF0YTogeWVhcnMubWFwKCh5ZWFyKSA9PlxyXG4gICAgICAgICAgICBsYW5ndWFnZXMubWFwKFxyXG4gICAgICAgICAgICAgIChsYW5ndWFnZSkgPT4gZGF0YS5maW5kKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UgPT09IGxhbmd1YWdlICYmIF9pZC55ZWFyID09PSB5ZWFyKT8uY291bnQgfHwgMCxcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBfLnNvcnRCeShkYXRhLCAoeyBjb3VudCB9KSA9PiAtY291bnQpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiBzb3J0ZWREYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkKSxcclxuICAgICAgICAgIGRhdGE6IFtzb3J0ZWREYXRhLm1hcCgoeyBjb3VudCB9KSA9PiBjb3VudCldLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgKCkgPT4ge1xyXG4gICAgICBnZXREYXRhKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdXb3Jrb3V0Q3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICRzY29wZS50aW1lRXhlcmNpc2luZyA9IDMwO1xyXG4gICRzY29wZS50aW1lUmVzdGluZyA9IDEwO1xyXG4gICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcblxyXG4gIHZhciBzb3VuZHMgPSB7XHJcbiAgICBvbjogbmV3IEF1ZGlvKCdvbi53YXYnKSxcclxuICAgIG9mZjogbmV3IEF1ZGlvKCdvZmYud2F2JyksXHJcbiAgICBzd2l0Y2g6IG5ldyBBdWRpbygnc3dpdGNoLndhdicpLFxyXG4gIH07XHJcblxyXG5cclxuICB2YXIgZXhlcmNpc2VzID0gW1xyXG4gICAge25hbWU6ICdKdW1waW5nIEphY2tzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnV2FsbCBTaXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnQ3J1bmNoJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU3RlcC1VcCcsIHNwbGl0OiB0cnVlfSxcclxuICAgIHtuYW1lOiAnU3F1YXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdUcmljZXBzIERpcCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1BsYW5rJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnSGlnaCBLbmVlcycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0x1bmdlJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUHVzaC1VcCB3aXRoIFJvdGF0aW9uJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU2lkZSBQbGFuaycsIHNwbGl0OiB0cnVlfVxyXG4gIF07XHJcblxyXG4gIHZhciBleGVyY2lzaW5nO1xyXG5cclxuICAkc2NvcGUucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoZXhlcmNpc2VzLmxlbmd0aCAtIE1hdGguZmxvb3IoJHNjb3BlLnRpbWVSZW1haW5pbmcgLyAoJHNjb3BlLnRpbWVFeGVyY2lzaW5nICsgJHNjb3BlLnRpbWVSZXN0aW5nKSkpICsgJy8nICsgZXhlcmNpc2VzLmxlbmd0aDtcclxuICB9O1xyXG5cclxuICAkc2NvcGUud29ya291dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGV4Y2VyY2lzZVRpbWUgPSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3Rpbmc7XHJcbiAgICBpZiAoISRzY29wZS50aW1lUmVtYWluaW5nKSB7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gZXhlcmNpc2VzLmxlbmd0aCAqIGV4Y2VyY2lzZVRpbWU7XHJcbiAgICAgIGV4ZXJjaXNpbmcgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZy0tO1xyXG4gICAgICAgIGlmICgkc2NvcGUudGltZVJlbWFpbmluZyA9PT0gMCkge1xyXG4gICAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICdGaW5pc2hlZCEgQ29uZ3JhdHMhJywgc3BsaXQ6IGZhbHNlfTtcclxuICAgICAgICAgICRzY29wZS50aW1lciA9ICcnO1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VycmVudEV4ZXJjaXNlID0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvIGV4Y2VyY2lzZVRpbWUpO1xyXG4gICAgICAgIHZhciB0aW1lciA9ICRzY29wZS50aW1lUmVtYWluaW5nIC0gY3VycmVudEV4ZXJjaXNlICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgICAkc2NvcGUudGltZXIgPSB0aW1lciA+ICRzY29wZS50aW1lRXhlcmNpc2luZyA/IHRpbWVyIC0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nIDogdGltZXI7XHJcbiAgICAgICAgaWYgKHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nKSB7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS5leGVyY2lzZSA9IGV4ZXJjaXNlc1tleGVyY2lzZXMubGVuZ3RoIC0gY3VycmVudEV4ZXJjaXNlIC0gMV07XHJcbiAgICAgICAgaWYgKHRpbWVyID09PSAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgIHNvdW5kcy5vbi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aW1lciA9PT0gMCkge1xyXG4gICAgICAgICAgc291bmRzLm9mZi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkc2NvcGUuZXhlcmNpc2Uuc3BsaXQgJiYgdGltZXIgPT09IE1hdGguZmxvb3IoJHNjb3BlLnRpbWVFeGVyY2lzaW5nIC8gMikpIHtcclxuICAgICAgICAgIHNvdW5kcy5zd2l0Y2gucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChleGVyY2lzaW5nKTtcclxuICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICcnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuZGlyZWN0aXZlKFwiY2xpY2tPdXRzaWRlXCIsIGZ1bmN0aW9uICgkZG9jdW1lbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVzdHJpY3Q6IFwiQVwiLFxyXG4gICAgc2NvcGU6IHtcclxuICAgICAgY2xpY2tPdXRzaWRlOiBcIiZcIixcclxuICAgIH0sXHJcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRyKSB7XHJcbiAgICAgICRkb2N1bWVudC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGVsICE9PSBlLnRhcmdldCAmJiAhZWxbMF0uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL3Njb3BlLiRwYXJlbnQuc2V0U2VsZWN0ZWRMaXN0KCk7XHJcbiAgICAgICAgICAgIHNjb3BlLiRldmFsKHNjb3BlLmNsaWNrT3V0c2lkZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcblx0LmRpcmVjdGl2ZSgnaGVhZCcsIFtcclxuXHRcdCckcm9vdFNjb3BlJyxcclxuXHRcdCckc3RhdGUnLFxyXG5cdFx0JyRjb21waWxlJyxcclxuXHRcdCckaW50ZXJwb2xhdGUnLFxyXG5cdFx0ZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgJGNvbXBpbGUsICRpbnRlcnBvbGF0ZSkge1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlID0gZnVuY3Rpb24gZ2V0U3R5bGUodGVtcGxhdGVTdHlsZVVybCkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3R5bGUgPSB7XHJcblx0XHRcdFx0XHRocmVmOiB0ZW1wbGF0ZVN0eWxlVXJsLFxyXG5cdFx0XHRcdFx0cmVsOiAnc3R5bGVzaGVldCdcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRpZiAoc3R5bGUuaHJlZi5tYXRjaCgvXFwubGVzcyQvKSkge1xyXG5cdFx0XHRcdFx0c3R5bGUucmVsID0gJ3N0eWxlc2hlZXQvbGVzcyc7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIGdldFN0eWxlcyhzdGF0ZSkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3RhdGVzID0ge307XHJcblxyXG5cdFx0XHRcdC8vQ2hlY2sgc3RhdGUgZm9yIHN0eWxlc1xyXG5cdFx0XHRcdHdoaWxlIChzdGF0ZS5uYW1lICE9PSAnJykge1xyXG5cdFx0XHRcdFx0dmFyIHBhcmVudCA9ICRzdGF0ZS5nZXQoJ14nLCBzdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0Ly9Jbml0aWF0ZSBvdXIgdmlldyBsaXN0XHJcblx0XHRcdFx0XHRpZiAoIXN0YXRlc1twYXJlbnQubmFtZV0pIHtcclxuXHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXSA9IHt9O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ2hlY2sgdGhlIHRlbXBsYXRlU3R5bGVcclxuXHRcdFx0XHRcdGlmIChzdGF0ZS50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXVsnJ10pIHtcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSA9IGdldFN0eWxlKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB2aWV3c1xyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnZpZXdzKSB7XHJcblx0XHRcdFx0XHRcdF8uZm9yRWFjaChzdGF0ZS52aWV3cywgZnVuY3Rpb24gKHZpZXcsIGtleSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgYSBzdHlsZVxyXG5cdFx0XHRcdFx0XHRcdGlmICghdmlldy50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGFyZSB0YXJnZXRpbmcgc29tZSBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRpZiAoKGtleSA9IGtleS5zcGxpdCgnQCcpKVsxXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBoYXZlIHN0eWxlcyBmb3IgdGhhdCBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGVzW2tleVsxXV0gPSB7fTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBzb21lIHBhcmVudCdzIHZpZXdcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV1ba2V5WzBdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBvdXIgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1ba2V5WzBdXSA9IGdldFN0eWxlKHZpZXcudGVtcGxhdGVTdHlsZVVybCk7XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NvbnRpbnVlIHdpdGggdGhlIHBhcmVudFxyXG5cdFx0XHRcdFx0c3RhdGUgPSBwYXJlbnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL0ZsYXR0ZW4gdGhlIGxpc3RcclxuXHRcdFx0XHR2YXIgZmxhdCA9IFtdO1xyXG5cdFx0XHRcdF8uZm9yRWFjaChzdGF0ZXMsIGZ1bmN0aW9uICh2aWV3cykge1xyXG5cclxuXHRcdFx0XHRcdF8uZm9yRWFjaCh2aWV3cywgZnVuY3Rpb24gKHN0eWxlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIV8uaW5jbHVkZXMoZmxhdCwgc3R5bGUpKSB7XHJcblx0XHRcdFx0XHRcdFx0ZmxhdC5wdXNoKHN0eWxlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly9SZXZlcnNlIGl0IHNvIHdlIGhhdmUgYSBwcm9wZXIgaGllcmFyY2h5XHJcblx0XHRcdFx0ZmxhdC5yZXZlcnNlKCk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBmbGF0O1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdFx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0pIHtcclxuXHJcblx0XHRcdFx0XHRzY29wZS50ZW1wbGF0ZVN0eWxlcyA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdHZhciBodG1sID0gJzxsaW5rIG5nLWF0dHItcmVsPVwie3tzdHlsZS5yZWx9fVwiIG5nLXJlcGVhdD1cInN0eWxlIGluIHRlbXBsYXRlU3R5bGVzXCIgbmctaHJlZj1cInt7c3R5bGUuaHJlZn19XCI+JztcclxuXHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXHtcXHsvZywgJGludGVycG9sYXRlLnN0YXJ0U3ltYm9sKCkpO1xyXG5cdFx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvXFx9XFx9L2csICRpbnRlcnBvbGF0ZS5lbmRTeW1ib2woKSk7XHJcblxyXG5cdFx0XHRcdFx0ZWxlbS5hcHBlbmQoJGNvbXBpbGUoaHRtbCkoc2NvcGUpKTtcclxuXHJcblx0XHRcdFx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpIHtcclxuXHJcblx0XHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gZ2V0U3R5bGVzKHRvU3RhdGUpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0fVxyXG5cdF0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0NhdGVnb3JpZXNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VGFza3MgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nLCBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZFRhc2sgPSBmdW5jdGlvbiAoY2F0ZWdvcnksIHRhc2spIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5ICsgJy90YXNrcycsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICBzdmMuY2hvaWNlcyA9IGxpc3Q7XHJcbiAgICBzdmMucHJpb3JpdHlMaXN0ID0gW107XHJcbiAgICAvL01ha2UgYSBuZXcgY2hvaWNlIGxpc3RcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKHZhciBqID0gaSArIDE7IGogPCBsaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgc3ZjLnByaW9yaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgZmlyc3RDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaSA6IGpdLm5hbWUsXHJcbiAgICAgICAgICBzZWNvbmRDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaiA6IGldLm5hbWUsXHJcbiAgICAgICAgICBjaG9pY2U6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNodWZmbGUoc3ZjLnByaW9yaXR5TGlzdCk7XHJcbiAgICBmb3IgKGkgaW4gc3ZjLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBzdmMucHJpb3JpdHlMaXN0W2ldLmlkID0gaSArIDE7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHJldHVybiBzdmMucHJpb3JpdHlMaXN0O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcclxuICAgIHZhciBtID0gYXJyYXkubGVuZ3RoLCB0LCBpO1xyXG4gICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGXigKZcclxuICAgIHdoaWxlIChtKSB7XHJcbiAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudOKAplxyXG4gICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbS0tKTtcclxuICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAvL2FycmF5W21dLmZpcnN0Q2hvaWNlO1xyXG4gICAgICB0ID0gYXJyYXlbbV07XHJcbiAgICAgIGFycmF5W21dID0gYXJyYXlbaV07XHJcbiAgICAgIGFycmF5W2ldID0gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdFbWFpbFN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuc2VuZCA9IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZW1haWwnLCBlbWFpbCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuc2VydmljZSgnRmlsZVN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gICAgc3ZjLmdldEltYWdlcyA9IGZ1bmN0aW9uKGZvbGRlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2ZpbGVzL2ltYWdlcy8nICsgZm9sZGVyKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLmdldFNvdW5kcyA9IGZ1bmN0aW9uKGZvbGRlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2ZpbGVzL3NvdW5kcy8nICsgZm9sZGVyKTtcclxuICAgIH07XHJcblxyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnR2FtZVN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gICAgc3ZjLmdldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZ2FtZXMvJyArIGdhbWUgKyAnLycgKyB1c2VyICsgJy9oaWdoc2NvcmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLnNldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyLCBzY29yZSkge1xyXG4gICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9nYW1lcy8nICsgZ2FtZSArICcvJyArIHVzZXIgKyAnL2hpZ2hzY29yZScsIHtcclxuICAgICAgICBzY29yZTogc2NvcmVcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnTGFuZ3VhZ2VTdmMnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5sYW5ndWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkVOXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkVuZ2xpc2hcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWdiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIk5MXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIk5lZGVybGFuZHNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLW5sXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkZSXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkZyYW7Dp2Fpc1wiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tZnJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy50ZXh0ID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgc3ZjLnNlbGVjdGVkTGFuZ3VhZ2UgPSBzdmMubGFuZ3VhZ2VzWzBdO1xyXG5cclxuICBzdmMuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcclxuICAgIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICByZXR1cm4gbGFuZ3VhZ2U7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHN2Yy5zZWxlY3RlZExhbmd1YWdlO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZmV0Y2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJyk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQb3N0ID0gZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMvJyArIHBvc3QuX2lkKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJUZW5UaGluZ3NTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9ib3RzL3RlbnRoaW5ncy9xdWV1ZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0cyA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgIHZhciB1cmwgPVxyXG4gICAgICBgL2FwaS90ZW50aGluZ3MvbGlzdHM/YCArXHJcbiAgICAgIChvcHRpb25zLmxpbWl0ID8gYCZsaW1pdD0ke29wdGlvbnMubGltaXR9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMucGFnZSA/IGAmcGFnZT0ke29wdGlvbnMucGFnZX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zb3J0QnkgPyBgJnNvcnRfYnk9JHtvcHRpb25zLnNvcnRCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5vcmRlckJ5ID8gYCZvcmRlcl9ieT0ke29wdGlvbnMub3JkZXJCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5sYW5ndWFnZXMgJiYgb3B0aW9ucy5sYW5ndWFnZXMubGVuZ3RoID4gMCA/IGAmbGFuZ3VhZ2U9JHtvcHRpb25zLmxhbmd1YWdlcy5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5jYXRlZ29yaWVzICYmIG9wdGlvbnMuY2F0ZWdvcmllcy5sZW5ndGggPiAwID8gYCZjYXRlZ29yaWVzPSR7b3B0aW9ucy5jYXRlZ29yaWVzLmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnNlYXJjaCA/IGAmc2VhcmNoPSR7b3B0aW9ucy5zZWFyY2h9YCA6IFwiXCIpO1xyXG4gICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvY2F0ZWdvcmllc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9sYW5ndWFnZXNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnB1dChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQsIGxpc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGVMaXN0ID0gZnVuY3Rpb24gKHVzZXIsIGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHNcIiwge1xyXG4gICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICBsaXN0OiBsaXN0LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLm1lcmdlTGlzdHMgPSBmdW5jdGlvbiAobGlzdHMpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvbWVyZ2VcIiwgeyBsaXN0czogbGlzdHMgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmRlbGV0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdElkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0SWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wdXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzL1wiICsgdmFsdWUuX2lkLCB2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzXCIsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBzdmMuZGVsZXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3ZhbHVlcy9cIiArIHZhbHVlLl9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnJlcG9ydExpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3JlcG9ydC9cIiArIHVzZXIuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvY2F0ZWdvcmllc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvbGFuZ3VhZ2VzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQbGF5U3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvcGxheVwiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0Qmx1cmJzID0gZnVuY3Rpb24gKGxpc3QsIHR5cGUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9saXN0cy8ke2xpc3QuX2lkfS9ibHVyYnMvJHt0eXBlfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnRvZ2dsZVBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEdhbWUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2dhbWUvJHtpZH1gKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlVzZXJTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFVzZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnMvYWxsXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVCYW4gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3VzZXJzL2Jhbi8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSB0b2tlbjtcclxuICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hdXRoZW50aWNhdGVcIiwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9sb2dpblwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyLl9pZCwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi92ZXJpZmljYXRpb25cIiwge1xyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvcGFzc3dvcmRcIiwge1xyXG4gICAgICBvbGRQYXNzd29yZDogb2xkUGFzc3dvcmQsXHJcbiAgICAgIG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VyLCBuZXdVc2VybmFtZSkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi91c2VybmFtZVwiLCB7XHJcbiAgICAgICAgbmV3VXNlcm5hbWU6IG5ld1VzZXJuYW1lLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmNvbnRyb2xsZXIoJ1F1aXpBbmltYWxzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgRmlsZVN2Yykge1xyXG5cclxuICAgIEZpbGVTdmMuZ2V0U291bmRzKCdhbmltYWxzJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIHNvdW5kOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgNSk7XHJcblxyXG4gICAgJHNjb3BlLmdldFNjb3JlID0gKCkgPT4gYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwubmFtZSA9PT0gYW5pbWFsLmd1ZXNzKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWA7XHJcblxyXG4gICAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwuZ3Vlc3MpLmxlbmd0aCA9PT0gJHNjb3BlLmFuaW1hbHMubGVuZ3RoO1xyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpekdvb2dsZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ2dvb2dsZScpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TG9nb3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdsb2dvcycpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TW92aWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnbW92aWVzJylcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuY29udHJvbGxlcignUXVpelNrZWxldG9uc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIEZpbGVTdmMpIHtcclxuXHJcbiAgICBGaWxlU3ZjLmdldEltYWdlcygnc2tlbGV0b25zJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIGltYWdlOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgMTApO1xyXG5cclxuICAgICRzY29wZS5nZXRTY29yZSA9ICgpID0+IGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAgICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxuICB9KTsiXX0=
