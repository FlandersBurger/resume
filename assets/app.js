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
    $scope.search = $location.search().search, list ? "new" === list._id ? $scope.addList() : TenThingsSvc.getList(list).then(({
      data
    }) => {
      $scope.selectedList = data, $location.search("list", data._id), $scope.selectedLanguage = $scope.selectedList.language;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiY29udHJvbGxlcnMvYXBwLmN0cmwuanMiLCJjb250cm9sbGVycy9hc3Rlcm9pZHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2J1YmJsZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NoYXJhZGVzLmN0cmwuanMiLCJjb250cm9sbGVycy9jb250YWN0LmN0cmwuanMiLCJjb250cm9sbGVycy9leHBlcmllbmNlLmN0cmwuanMiLCJjb250cm9sbGVycy9ob2JiaWVzLmN0cmwuanMiLCJjb250cm9sbGVycy9sZW1taW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbGlzdHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xvZ2luLmN0cmwuanMiLCJjb250cm9sbGVycy9wb3N0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJvZmlsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvc2tpbGxzLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3MuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2FkbWluLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NnYW1lLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NzdGF0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvd29ya291dC5jdHJsLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJzZXJ2aWNlcy9jYXRlZ29yaWVzLnN2Yy5qcyIsInNlcnZpY2VzL2VtYWlsLnN2Yy5qcyIsInNlcnZpY2VzL2ZpbGUuc3ZjLmpzIiwic2VydmljZXMvZ2FtZS5zdmMuanMiLCJzZXJ2aWNlcy9sYW5ndWFnZS5zdmMuanMiLCJzZXJ2aWNlcy9wb3N0cy5zdmMuanMiLCJzZXJ2aWNlcy90ZW50aGluZ3Muc3ZjLmpzIiwic2VydmljZXMvdXNlci5zdmMuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2FuaW1hbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvZ29vZ2xlLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2xvZ29zLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL21vdmllcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9za2VsZXRvbnMuY3RybC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRvbWFpbnMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0cmluZyIsInByb3RvdHlwZSIsInZhbHVlIiwicmVkdWNlIiwicmVzdWx0IiwibGV0dGVyIiwicmVwbGFjZSIsInRoaXMiLCJTUEVDSUFMX0NIQVJBQ1RFUlMiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZURpYWNyaXRpY3MiLCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyIsImV4dHJhIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInJlcGxhY2VBbGwiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsIiRzY29wZSIsIkxhbmd1YWdlU3ZjIiwiVXNlclN2YyIsIiQiLCJsb2FkIiwiZmFkZU91dCIsImZhZGVJbiIsIm9uIiwiY2xvc2VzdCIsInRvZ2dsZUNsYXNzIiwiY2hlY2tlZCIsImRvY3VtZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidGhlbWVDb3VudGVyIiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiZmxpcFRoZW1lIiwic2hvdyIsImhpZGUiLCJzZXRUaW1lb3V0IiwiZ2V0SlNPTiIsInNraWxscyIsImZpbHRlciIsInNraWxsIiwiaG9iYmllcyIsImpvYnMiLCJqb2IiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiY2hhcmFkZXMiLCJnZXRUaW1lU3BhbiIsImxhbmd1YWdlcyIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInNlbGVjdExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImhvdmVyZGl2IiwiZGl2aWQiLCJsZWZ0IiwiY2xpZW50WCIsInRvcCIsImNsaWVudFkiLCJnZXRFbGVtZW50QnlJZCIsImNzcyIsInRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsInVzZXIiLCJsb2dpbiIsInRoZW4iLCJyZXNwb25zZSIsIiRvbiIsIl8iLCJsb2dnZWRJbiIsIl9pZCIsImN1cnJlbnRVc2VyIiwiYmlydGhEYXRlIiwibG9hZGluZyIsImxvZ291dCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJjbGVhciIsImNhdGNoIiwiZXJyb3IiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsIiRsb2NhdGlvbiIsIkdhbWVTdmMiLCJhbm5vdW5jZSIsImNhbnZhcyIsInBhdGgiLCJhbGVydCIsImN0eCIsImdldENvbnRleHQiLCJmb250IiwiZmlsbFN0eWxlIiwidGV4dEFsaWduIiwic2hvdHMiLCJhc3Rlcm9pZHMiLCJwb3dlcnVwcyIsImV4cGxvc2lvbnMiLCJtYXAiLCJzcGFjZXBpY3MiLCJzcGFjZSIsInBvd2VydXBUeXBlcyIsIm5hbWUiLCJhbm5vdW5jZW1lbnQiLCJjeWNsZSIsInJvd3MiLCJjb2x1bW5zIiwic2l6ZSIsImltZyIsIkltYWdlIiwiYWN0aXZhdGUiLCJzcGFjZXNoaXAiLCJtYXhTcGVlZCIsImNvb2xkb3duIiwiY29vbGRvd25UaW1lIiwicmFuZ2UiLCJzaGllbGQiLCJleHBsb2RlIiwic3Bhd25Bc3Rlcm9pZHMiLCJwb3dlcnVwIiwiYXJyYXkiLCJzcmMiLCJleHBsb3Npb25JbWFnZSIsImV2YWx1YXRlS2V5cyIsInBsYXlpbmciLCJzaG9vdCIsInJvdGF0aW9uIiwic3BlZWQiLCJzY29yZSIsIiRhcHBseSIsIlNwYWNlc2hpcCIsImF1dG9TcGF3biIsIndpZHRoIiwiaGVpZ2h0IiwiY2Fubm9uIiwieCIsInkiLCJwb3NpdGlvbiIsImFuZ2xlIiwiaWQiLCJyb3VuZCIsIlNob3QiLCJtb3ZlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImZpbGwiLCJhc3Rlcm9pZCIsImhpdCIsImdhbWVPdmVyIiwiY29zIiwic2luIiwibGlmZXNwYW4iLCJBc3Rlcm9pZCIsImdldEVudHJ5UG9zaXRpb24iLCJyb3RhdGlvblNwZWVkIiwiRXhwbG9zaW9uIiwic2hvdCIsInBvaW50cyIsInNwYXduUG93ZXJ1cCIsIm9iamVjdCIsIlBvd2VydXAiLCJkZWxheSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJjb2x1bW4iLCJyb3ciLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiZ3JpZFgiLCJncmlkWSIsIm9iamVjdDEiLCJvYmplY3QyIiwia2V5cyIsImFtb3VudCIsImhpZ2hzY29yZSIsInNldEhpZ2hzY29yZSIsInJlc2l6ZUNhbnZhcyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlDb2RlIiwid2hpY2giLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3IiwiY2xlYXJSZWN0IiwiZ3JhZGllbnQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsInRhbGx5IiwiZmlsbFRleHQiLCJtZWFzdXJlVGV4dCIsImJhY2tncm91bmRJbWFnZSIsImJ1YmJsZXMiLCJjb2xvcnMiLCJCdWJibGUiLCJyYWRpdXMiLCJleHBhbmRpbmciLCJjaXJjdW1mZXJlbmNlIiwibWF4UmFkaXVzIiwidngiLCJ2eSIsImZpbHRlckJ1YmJsZXMiLCJidWJibGUiLCJzZWxlY3RXb3JkIiwiY2F0ZWdvcnkiLCJ3b3JkIiwiRW1haWxTdmMiLCJvcHRpb25zIiwidGV4dCIsImNvbnRhY3QiLCJlbWFpbCIsInBob25lIiwiYWJvdXQiLCJtZXNzYWdlIiwic2VuZGluZyIsInNlbnQiLCJzdGF0dXMiLCJlcnIiLCJnZXRTa2lsbCIsInNraWxsQ29kZSIsImNvZGUiLCIkd2luZG93IiwiaG9iYnlTZWxlY3RvclZpc2libGUiLCJzZWxlY3RlZEhvYmJ5Iiwic2VsZWN0SG9iYnkiLCJob2JieSIsInNob3dIb2JieSIsImluZGV4IiwiaW1hZ2VzIiwiTEVGVCIsIlJJR0hUIiwibGVtbWluZ3NJbWFnZSIsImRlY29ySW1hZ2UiLCJsZW1taW5ncyIsInN0YXJ0ZWQiLCJhY3Rpb25zIiwid2FsayIsInN0YXJ0IiwiZW5kIiwicmV2ZXJzZSIsImh1aCIsImZhbGwiLCJmbHkiLCJzdG9wIiwiY2xpbWIiLCJidWlsZCIsInB1bmNoIiwiZGlnIiwiTGVtbWluZyIsImluaXQiLCJhY3QiLCJhY3Rpb24iLCJhbmltYXRpb24iLCJzY2FsZSIsImhhdGNoIiwib3BlbiIsInJlY3QiLCJDYXRlZ29yaWVzU3ZjIiwic2hvd0NhdGVnb3J5IiwiZ2V0Q2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJ0YXNrcyIsImoiLCJ0YXNrIiwic2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2VsZWN0ZWRUYXNrcyIsInNlbGVjdGFibGVUYXNrcyIsImVudGVyZWRDYXRlZ29yeSIsIm5ld0NhdGVnb3J5IiwiZm91bmQiLCJhZGRDYXRlZ29yeSIsIm5ld1Rhc2siLCJzZWxlY3RUYXNrIiwiYWRkVGFzayIsImVudGVyZWRUYXNrIiwicmVtb3ZlVGFzayIsInVuc2VsZWN0VGFzayIsInRhc2tMaXN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInN0YXJ0UHJpb3JpdGl6aW5nIiwic2V0UHJpb3JpdHlMaXN0IiwiZ2V0UXVlc3Rpb25zIiwiY291bnRlciIsInVpIiwiZmlyZWJhc2V1aSIsIkF1dGhVSSIsInN0YXJ0VUkiLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzIiwiY3JlZGVudGlhbCIsInJlZGlyZWN0VXJsIiwiZ2V0SWRUb2tlbiIsImlkVG9rZW4iLCJhdXRoZW50aWNhdGUiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWxWZXJpZmllZCIsIiRlbWl0IiwibW9kYWwiLCJ0eXBlIiwic2lnbkluRmFpbHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY3JlZCIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwidWlTaG93biIsInN0eWxlIiwiZGlzcGxheSIsInNpZ25JblN1Y2Nlc3NVcmwiLCJzaWduSW5PcHRpb25zIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiUFJPVklERVJfSUQiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsInNpZ25JbkZsb3ciLCJldmVudCIsInJlc2V0IiwiJGZpbHRlciIsIlBvc3RzU3ZjIiwiYWRkUG9zdCIsInBvc3RCb2R5IiwiY3JlYXRlIiwiYm9keSIsInBvc3QiLCJmZXRjaCIsInBvc3RzIiwiZ2V0UG9zdCIsInVuc2hpZnQiLCJjb3VudHJpZXMiLCJmbGFnIiwidGlkYml0IiwiZGF0ZU9wdGlvbnMiLCJtYXhEYXRlIiwibWluRGF0ZSIsImluaXREYXRlIiwiZGF0ZXBpY2tlck1vZGUiLCJ1c2VybmFtZVRvZ2dsZSIsInBhc3N3b3JkVG9nZ2xlIiwidG9nZ2xlVXNlcm5hbWUiLCJuZXdVc2VybmFtZSIsInVzZXJuYW1lIiwidG9nZ2xlUGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImNoZWNrUGFzc3dvcmQiLCJwYXNzd29yZCIsIm9yaWdpbmFsQmciLCJhbmltYXRlIiwiYmFja2dyb3VuZENvbG9yIiwiY2hhbmdlUGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsImNoYW5nZVVzZXJuYW1lIiwidXBkYXRlVXNlciIsImZsYWdzIiwidXNlckZsYWdzIiwibG9hZENvdW50cmllcyIsIiRxdWVyeSIsImNvdW50cnkiLCIkd2F0Y2giLCJpbmNsdWRlcyIsInNlbGVjdGVkU2tpbGwiLCJza2lsbHNWaXNpYmxlIiwicHJvamVjdHMiLCJsYWJlbHMiLCJlbXBsb3llciIsImNvbmNhdCIsImZpbHRlcmVkUHJvamVjdHMiLCJwcm9qZWN0Iiwic2V0U2VsZWN0ZWRTa2lsbCIsImNoYXJ0T3B0aW9ucyIsImN1dG91dFBlcmNlbnRhZ2UiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidG9vbHRpcHMiLCJjaGFydFN0eWxlIiwiaW1hZ2UiLCIkc2NlIiwiVGVuVGhpbmdzU3ZjIiwicGFnZSIsImxpc3RzIiwic2VhcmNoIiwibmV3SXRlbSIsImxhbmd1YWdlRmlsdGVyIiwiY2F0ZWdvcnlGaWx0ZXIiLCJzZWxlY3RlZExpc3QiLCJ1bmRlZmluZWQiLCJoaWdobGlnaHRlZExpc3RJZHMiLCJsaXN0SWRzVG9EZWxldGUiLCJjb25maXJtZWQiLCJleGhhdXN0ZWQiLCJvYmplY3RDYXRlZ29yaWVzIiwiYmx1cmJUeXBlcyIsImFwaSIsImFkbWluT25seSIsImhhdmVDb21tb25JdGVtcyIsImFycjEiLCJhcnIyIiwic29tZSIsImtleURvd24iLCJpcyIsImNyZWF0ZVZhbHVlIiwidHJpZ2dlciIsImFkZExpc3QiLCJjcmVhdG9yIiwidmFsdWVzIiwiYW5zd2VycyIsImlzRHluYW1pYyIsInNldFNlbGVjdGVkSXRlbSIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkTGlzdCIsImxpc3QiLCJnZXRMaXN0Iiwic2VhcmNoTGlzdHMiLCJhc3luYyIsInZpZXdWYWx1ZSIsImhpZ2hsaWdodGVkU2VhcmNoVGV4dCIsInJlZ2V4IiwidmFsdWVPcmRlciIsImZpZWxkIiwib3JkZXIiLCJvcmRlckJ5IiwiZ2V0TGlzdHMiLCJnZXRNb3JlTGlzdHMiLCJzZXRMYW5ndWFnZUZpbHRlciIsInNldENhdGVnb3J5RmlsdGVyIiwidG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIiLCJhbGxDYXRlZ29yaWVzIiwic29ydEJ5IiwibGltaXQiLCJjb3VudCIsIm5leHRQYWdlIiwiZ2V0TGlzdE5hbWUiLCJsaXN0SWQiLCJ1cGRhdGVWYWx1ZSIsInVwZGF0ZWRJdGVtUmVzcG9uc2UiLCJ1cGRhdGVMaXN0VmFsdWUiLCJibHVyYlR5cGUiLCJkZWxldGVWYWx1ZSIsImhhc0R1cGxpY2F0ZSIsImNyZWF0ZWRJdGVtUmVzcG9uc2UiLCJjcmVhdGVMaXN0VmFsdWUiLCJ1cHNlcnRMaXN0IiwiYmx1cmIiLCJkZWxldGVMaXN0VmFsdWUiLCJ1cGRhdGVzIiwic2F2aW5nIiwiY2hhbmdlcyIsInVwZGF0ZUxpc3QiLCJsaXN0SW5kZXgiLCJmaW5kSW5kZXgiLCJjcmVhdGVMaXN0IiwiYXNzaWduIiwiZGVsZXRlTGlzdCIsImRlbGV0ZUxpc3RzIiwiY29uZmlybU1lcmdlTGlzdHMiLCJtZXJnZUxpc3RzIiwiY29uZmlybURlbGV0ZUxpc3RzIiwidG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0IiwiaGlnaGxpZ2h0ZWRMaXN0SWQiLCJub25FbmdsaXNoSW5kZXgiLCJzZXREaWZmaWN1bHR5IiwiZGlmZmljdWx0eSIsInNldEZyZXF1ZW5jeSIsImZyZXF1ZW5jeSIsInNldENhdGVnb3J5IiwiY2F0ZWdvcnlJbmRleCIsImFuc3dlciIsInJlbW92ZUFsbEJ1dExldHRlcnMiLCJnZXRCbHVyYnMiLCJnZXR0aW5nQmx1cmJzIiwiZ2V0RW1iZWRVcmwiLCJ2aWRlb0lkIiwibWF0Y2giLCJ0cmltIiwidHJ1c3RBc1Jlc291cmNlVXJsIiwiZ2V0TGFuZ3VhZ2VzIiwibGFuZ3VhZ2VTdGF0cyIsImdldExpc3RMYW5ndWFnZVN0YXRzIiwiY2F0ZWdvcnlTdGF0cyIsImdldExpc3RDYXRlZ29yeVN0YXRzIiwiYWRtaW4iLCJnZXRVc2VycyIsImdldFF1ZXVlIiwicXVldWUiLCJnZXRQYXVzZSIsInBhdXNlZCIsInVzZXJzIiwidG9nZ2xlQmFuIiwidG9nZ2xlUGF1c2UiLCIkc3RhdGVQYXJhbXMiLCJnYW1lIiwiZ2V0R2FtZSIsImRhdGFzZXRzIiwiZ2V0UGxheVN0YXRzIiwieWVhcnMiLCJ1bmlxIiwibW9udGhzIiwidGltZXMiLCJwbGF5U3RhdHMiLCJzZXJpZXMiLCJtb250aCIsInVuaXF1ZVBsYXllcnMiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInRpdGxlIiwic29ydGVkRGF0YSIsInRpbWVSZW1haW5pbmciLCJ0aW1lRXhlcmNpc2luZyIsInRpbWVSZXN0aW5nIiwicmVzdCIsImV4ZXJjaXNpbmciLCJzb3VuZHMiLCJBdWRpbyIsIm9mZiIsInN3aXRjaCIsImV4ZXJjaXNlcyIsInNwbGl0IiwicHJvZ3Jlc3MiLCJ3b3Jrb3V0IiwiZXhjZXJjaXNlVGltZSIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lciIsImV4ZXJjaXNlIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50RXhlcmNpc2UiLCJwbGF5IiwiZGlyZWN0aXZlIiwiJGRvY3VtZW50IiwicmVzdHJpY3QiLCJzY29wZSIsImNsaWNrT3V0c2lkZSIsImxpbmsiLCJlbCIsImF0dHIiLCJ0YXJnZXQiLCJjb250YWlucyIsIiRldmFsIiwiJHN0YXRlIiwiJGNvbXBpbGUiLCIkaW50ZXJwb2xhdGUiLCJnZXRTdHlsZSIsInRlbXBsYXRlU3R5bGVVcmwiLCJocmVmIiwicmVsIiwiZWxlbSIsInRlbXBsYXRlU3R5bGVzIiwiaHRtbCIsInN0YXJ0U3ltYm9sIiwiZW5kU3ltYm9sIiwiYXBwZW5kIiwidG9TdGF0ZSIsInRvUGFyYW1zIiwiZnJvbVN0YXRlIiwiZnJvbVBhcmFtcyIsInN0YXRlcyIsInBhcmVudCIsImdldCIsInZpZXdzIiwidmlldyIsImZsYXQiLCJnZXRTdHlsZXMiLCIkaHR0cCIsInN2YyIsImdldFRhc2tzIiwiY2hvaWNlcyIsInByaW9yaXR5TGlzdCIsImZpcnN0Q2hvaWNlIiwic2Vjb25kQ2hvaWNlIiwiY2hvaWNlIiwidCIsIm0iLCJzaHVmZmxlIiwiZ2V0UHJpb3JpdHlMaXN0IiwiZ2V0SW1hZ2VzIiwiZm9sZGVyIiwiZ2V0U291bmRzIiwiZ2V0SGlnaHNjb3JlIiwiam9pbiIsInB1dCIsImRlbGV0ZSIsInJlcG9ydExpc3QiLCJnZXRVc2VyIiwic2V0VG9rZW4iLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImNyZWF0ZVVzZXIiLCJGaWxlU3ZjIiwiYW5pbWFscyIsImFuaW1hbCIsInNvdW5kIiwic3Vic3RyaW5nIiwiY2FwaXRhbGl6ZSIsImdldFJhbmRvbUFuaW1hbHMiLCJndWVzcyIsImdldFNjb3JlIiwiaXNTY29yZVZpc2libGUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUFBLDJCQUFBQSxHQUFBLENBQ0E7SUFDQUMsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLENBQUE7RUFHQUMsT0FBQUEsR0FBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsTUFBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsQ0FBQTtBQUdBQyxNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGtCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBUiwyQkFBQUEsQ0FBQVMsTUFBQUEsQ0FBQSxDQUFBQyxNQUFBQSxFQUFBQyxNQUFBQSxLQUNBRCxNQUFBQSxDQUFBRSxPQUFBQSxDQUFBRCxNQUFBQSxDQUFBVCxPQUFBQSxFQUFBUyxNQUFBQSxDQUFBVixJQUFBQSxDQUFBQSxFQUNBWSxJQUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUE7QUFHQSxNQUFBQyxrQkFBQUEsR0FBQSxxQ0FBQTtBQUVBVixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLHlCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBRCxPQUFBQSxDQUFBLElBQUFHLE1BQUFBLENBQUEsSUFBQUQsa0JBQUFBLEdBQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsRUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQVYsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxxQkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUcsV0FBQUEsRUFBQUEsQ0FBQUMsZ0JBQUFBLEVBQUFBLENBQUFDLHVCQUFBQSxFQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWQsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxTQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBVyxLQUFBQSxFQUFBQTtJQUNBLE9BQUFOLElBQUFBLENBQUFELE9BQUFBLENBQUEsSUFBQUcsTUFBQUEsQ0FBQSxLQUFBRCxrQkFBQUEsR0FBQUssS0FBQUEsR0FBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxHQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBZixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFlBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFPLE1BQUFBLENBQUEsQ0FBQSxDQUFBLENBQUFDLFdBQUFBLEVBQUFBLEdBQUFSLElBQUFBLENBQUFTLEtBQUFBLENBQUEsQ0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWxCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsWUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLENBQUFBLE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsY0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQVUsVUFBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxDQUFBLENBQUFYLE9BQUFBLENBQUEsR0FBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBQSxPQUFBQSxDQUFBLEdBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQVcsVUFBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQW5CLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsY0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQWdCLElBQUFBLEVBQUFaLE9BQUFBLEVBQUFBO0lBRUEsS0FEQSxJQUFBYSxhQUFBQSxHQUFBWixJQUFBQSxFQUNBYSxDQUFBQSxHQUFBLENBQUEsRUFBQUEsQ0FBQUEsR0FBQUYsSUFBQUEsQ0FBQUcsTUFBQUEsRUFBQUQsQ0FBQUEsRUFBQUEsRUFDQUQsYUFBQUEsR0FBQUEsYUFBQUEsQ0FBQWIsT0FBQUEsQ0FBQVksSUFBQUEsQ0FBQUUsQ0FBQUEsQ0FBQUEsRUFBQWQsT0FBQUEsQ0FBQWMsQ0FBQUEsQ0FBQUEsQ0FBQUE7SUFFQSxPQUFBRCxhQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQXJCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsVUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQWUsWUFBQUEsQ0FBQSxDQUFBLFVBQUEsRUFBQSxTQUFBLENBQUEsRUFBQSxTQUFBLENBQUEsQ0FBQUEsWUFBQUEsQ0FBQXpCLE9BQUFBLEVBQUEsT0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQUMsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQXdCLE1BQUFBLENBQUF0QixTQUFBQSxFQUFBLGNBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFpQixRQUFBQSxFQUFBQSxDQUFBbEIsT0FBQUEsQ0FBQSx1QkFBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUF3QixNQUFBQSxDQUFBdEIsU0FBQUEsRUFBQSxnQkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQXVCLFFBQUFBLEVBQUFBO0lBRUEsT0FEQUEsUUFBQUEsS0FBQUEsUUFBQUEsR0FBQSxDQUFBLENBQUEsRUFDQSxHQUFBLENBQUEsR0FBQSxHQUFBbEIsSUFBQUEsRUFBQW1CLE9BQUFBLENBQUFELFFBQUFBLENBQUFBLEdBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQTtBQUdBLE1BQUFFLFVBQUFBLEdBQUFBLENBQUFDLEdBQUFBLEVBQUFDLFNBQUFBLEtBQUFBO0VBQ0EsSUFBQUMsR0FBQUEsR0FBQSxFQUFBO0VBQ0EsS0FBQSxNQUFBQyxHQUFBQSxJQUFBSCxHQUFBQSxFQUNBRSxHQUFBQSxDQUFBRSxJQUFBQSxDQUFBLENBQUFELEdBQUFBLEVBQUFILEdBQUFBLENBQUFHLEdBQUFBLENBQUFBLENBQUFBLENBQUFBO0VBRUFELEdBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQUMsQ0FBQUEsRUFBQUMsQ0FBQUEsS0FBQU4sU0FBQUEsR0FBQUssQ0FBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQUMsQ0FBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQUEsQ0FBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQUQsQ0FBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtFQUNBLElBQUFFLFNBQUFBLEdBQUEsQ0FBQSxDQUFBO0VBR0EsT0FGQU4sR0FBQUEsQ0FBQU8sT0FBQUEsQ0FBQUMsSUFBQUEsSUFBQUYsU0FBQUEsQ0FBQUUsSUFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBQSxJQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBRUFGLFNBQUE7QUFBQSxDQUFBO0FDN3FCQUcsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLEVBQUEsQ0FDQSxXQUFBLEVBQ0EsY0FBQSxFQUNBLFdBQUEsRUFDQSxZQUFBLEVBQ0EsWUFBQSxFQUNBLGFBQUEsRUFDQSxhQUFBLEVBQ0EsVUFBQSxFQUNBLFlBQUEsRUFDQSxpQkFBQSxDQUFBLENBQUEsRUNqQkFELE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQUFDLE1BQUFBLENBQUEsVUFBQUMsY0FBQUEsRUFBQUMsa0JBQUFBLEVBQUFDLG1CQUFBQSxFQUFBQyxpQkFBQUEsRUFBQUE7RUFDQUYsa0JBQUFBLENBQUFHLFNBQUFBLENBQUEsT0FBQSxDQUFBLEVBQ0FGLG1CQUFBQSxDQUFBSCxNQUFBQSxDQUFBTSxVQUFBQSxDQUFBQSxDQUFBLENBQUEsQ0FBQSxFQUVBTCxjQUFBQSxDQUNBTSxLQUFBQSxDQUFBLE1BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLE9BQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFlBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGFBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsUUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLFlBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxXQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsVUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsV0FBQTtJQUNBRSxVQUFBQSxFQUFBLGNBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE1BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLE9BQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsaUJBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsb0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGdCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxpQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxvQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsY0FB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LE9BQUEsQ0FBQSxFQUNBQyxLQUFBQSxDQUFBLEVBQUEsQ0FBQTtFQUVBLE1BQUFDLEdBQUFBLEdBQUFILE1BQUFBLENBQUFJLFVBQUFBLENBQUEsSUFBQSxDQUFBO0VBQ0FELEdBQUFBLENBQUFFLElBQUFBLEdBQUEsb0JBQUEsRUFDQUYsR0FBQUEsQ0FBQUcsU0FBQUEsR0FBQSxLQUFBLEVBQ0FILEdBQUFBLENBQUFJLFNBQUFBLEdBQUEsUUFBQTtFQUNBLE1BQUFDLEtBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFNBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFFBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFVBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLEdBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFNBQUFBLEdBQUEsRUFBQTtJQUNBQyxLQUFBQSxHQUFBeEUsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQUQsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQXdFLFNBQUFBLENBQUFBO0lBQ0FFLFlBQUFBLEdBQUEsQ0FDQTtNQUNBQyxJQUFBQSxFQUFBLE9BQUE7TUFDQUMsWUFBQUEsRUFBQSxhQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBbEssQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUEwSixHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUMsUUFBQUEsSUFBQSxHQUNBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQVYsSUFBQUEsRUFBQSxVQUFBO01BQ0FDLFlBQUFBLEVBQUEsWUFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7UUFDQWxLLENBQUFBLEVBQUEsQ0FBQTtRQUNBUyxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBMEosR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0FBLFNBQUFBLENBQUFFLFFBQUFBLEdBQUEsQ0FBQSxLQUNBRixTQUFBQSxDQUFBRyxZQUFBQSxJQUFBLENBQUEsQ0FFQTtNQUFBO0lBQUEsQ0FBQSxFQUVBO01BQ0FaLElBQUFBLEVBQUEsT0FBQTtNQUNBQyxZQUFBQSxFQUFBLGdCQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQTtRQUNBbEssQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUEwSixHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUksS0FBQUEsSUFBQSxDQUNBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQWIsSUFBQUEsRUFBQSxRQUFBO01BQ0FDLFlBQUFBLEVBQUEsUUFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7UUFDQWxLLENBQUFBLEVBQUEsQ0FBQTtRQUNBUyxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBMEosR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0FBLFNBQUFBLENBQUFLLE1BQUFBLEdBQUFBLENBQUEsQ0FDQTtNQUFBO0lBQUEsQ0FBQSxFQUVBO01BQ0FkLElBQUFBLEVBQUEsTUFBQTtNQUNBQyxZQUFBQSxFQUFBLE1BQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0FsSyxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQTBKLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBLEtBQUEsSUFBQXRLLENBQUFBLElBQUFzSixTQUFBQSxFQUNBQSxTQUFBQSxDQUFBdEosQ0FBQUEsQ0FBQUEsQ0FBQTRLLE9BQUFBLEVBQUFBO1FBRUFDLGNBQUFBLENBQUEsQ0FBQSxDQUNBO01BQUE7SUFBQSxDQUFBLENBQUE7RUFVQWpCLFlBQUFBLENBQUEzSSxPQUFBQSxDQUFBLFVBQUE2SixPQUFBQSxFQUFBOUssQ0FBQUEsRUFBQStLLEtBQUFBLEVBQUFBO0lBQ0FBLEtBQUFBLENBQUEvSyxDQUFBQSxDQUFBQSxDQUFBbUssR0FBQUEsQ0FBQWEsR0FBQUEsR0FBQSxZQUFBLEdBQUFGLE9BQUFBLENBQUFqQixJQUFBQSxHQUFBLE1BQ0E7RUFBQSxDQUFBLENBQUE7RUFFQSxJQWtUQVMsU0FBQUE7SUFsVEFXLGNBQUFBLEdBQUEsSUFBQWIsS0FBQUE7RUFvQkEsU0FBQWMsWUFBQUEsQ0FBQUEsRUFBQUE7SUFDQWxILE1BQUFBLENBQUFtSCxPQUFBQSxJQUNBMUIsR0FBQUEsQ0FBQSxFQUFBLENBQUEsSUFFQSxDQUFBLEtBQUFhLFNBQUFBLENBQUFFLFFBQUFBLElBQ0FGLFNBQUFBLENBQUFjLEtBQUFBLEVBQUFBLEVBR0EzQixHQUFBQSxDQUFBLEVBQUEsQ0FBQSxLQUVBLENBQUEsS0FBQWEsU0FBQUEsQ0FBQWUsUUFBQUEsR0FDQWYsU0FBQUEsQ0FBQWUsUUFBQUEsR0FBQSxHQUFBLEdBRUFmLFNBQUFBLENBQUFlLFFBQUFBLElBQUEsQ0FBQSxDQUFBLEVBR0E1QixHQUFBQSxDQUFBLEVBQUEsQ0FBQSxLQUVBLEdBQUEsS0FBQWEsU0FBQUEsQ0FBQWUsUUFBQUEsR0FDQWYsU0FBQUEsQ0FBQWUsUUFBQUEsR0FBQSxDQUFBLEdBRUFmLFNBQUFBLENBQUFlLFFBQUFBLElBQUEsQ0FBQSxDQUFBLEVBR0E1QixHQUFBQSxDQUFBLEVBQUEsQ0FBQSxHQUVBYSxTQUFBQSxDQUFBZ0IsS0FBQUEsSUFBQWhCLFNBQUFBLENBQUFDLFFBQUFBLEtBQ0FELFNBQUFBLENBQUFnQixLQUFBQSxJQUFBLENBQUEsQ0FBQSxHQUdBaEIsU0FBQUEsQ0FBQWdCLEtBQUFBLEdBQUEsQ0FBQSxJQUNBaEIsU0FBQUEsQ0FBQWdCLEtBQUFBLEVBQUFBLEVBR0E3QixHQUFBQSxDQUFBLEVBQUEsQ0FBQSxJQUVBYSxTQUFBQSxDQUFBZ0IsS0FBQUEsR0FBQSxDQUFBLEtBQ0FoQixTQUFBQSxDQUFBZ0IsS0FBQUEsSUFBQSxDQUFBLENBQUEsSUFJQTdCLEdBQUFBLENBQUEsRUFBQSxDQUFBLEtBd1BBekYsTUFBQUEsQ0FBQW1ILE9BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBbkgsTUFBQUEsQ0FBQXVILEtBQUFBLEdBQUEsQ0FBQSxFQUNBNUIsS0FBQUEsR0FBQXhFLElBQUFBLENBQUFDLEtBQUFBLENBQUFELElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUF3RSxTQUFBQSxDQUFBQSxFQUNBMUYsTUFBQUEsQ0FBQXdILE1BQUFBLEVBQUFBLEVBQ0FsQixTQUFBQSxHQUFBLElBQUFtQixTQUFBQSxJQUNBekgsTUFBQUEsQ0FBQXVILEtBQUFBLEdBQUEsQ0FBQSxFQUNBVixjQUFBQSxDQUFBLENBQUEsQ0FBQSxFQUNBYSxTQUFBQSxFQUFBQSxDQTNQQTtFQUFBO0VBRUEsU0FBQUQsU0FBQUEsQ0FBQUEsRUFBQUE7SUFDQXRNLElBQUFBLENBQUF3TSxLQUFBQSxHQUFBLEVBQUEsRUFDQXhNLElBQUFBLENBQUF5TSxNQUFBQSxHQUFBLEVBQUEsRUFDQXpNLElBQUFBLENBQUF3TCxNQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQXhMLElBQUFBLENBQUF1TCxLQUFBQSxHQUFBLEVBQUEsRUFDQXZMLElBQUFBLENBQUEwTSxNQUFBQSxHQUFBO01BQ0FDLENBQUFBLEVBQUEzTSxJQUFBQSxDQUFBd00sS0FBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQTtNQUNBSSxDQUFBQSxFQUFBNU0sSUFBQUEsQ0FBQXlNLE1BQUFBLEdBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQXpNLElBQUFBLENBQUF5TTtJQUFBQSxDQUFBQSxFQUVBek0sSUFBQUEsQ0FBQXFMLFFBQUFBLEdBQUEsQ0FBQSxFQUNBckwsSUFBQUEsQ0FBQXNMLFlBQUFBLEdBQUEsRUFBQSxFQUNBdEwsSUFBQUEsQ0FBQTZNLFFBQUFBLEdBQUEsQ0FBQW5ELE1BQUFBLENBQUE4QyxLQUFBQSxHQUFBLENBQUEsR0FBQXhNLElBQUFBLENBQUF3TSxLQUFBQSxHQUFBLENBQUEsRUFBQTlDLE1BQUFBLENBQUErQyxNQUFBQSxHQUFBLENBQUEsR0FBQXpNLElBQUFBLENBQUF5TSxNQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBek0sSUFBQUEsQ0FBQWdMLEdBQUFBLEdBQUEsSUFBQUMsS0FBQUEsSUFDQWpMLElBQUFBLENBQUFnTCxHQUFBQSxDQUFBYSxHQUFBQSxHQUFBLHlCQUFBLEVBQ0E3TCxJQUFBQSxDQUFBbU0sS0FBQUEsR0FBQSxDQUFBLEVBQ0FuTSxJQUFBQSxDQUFBb0wsUUFBQUEsR0FBQSxHQUFBLEVBQ0FwTCxJQUFBQSxDQUFBOE0sS0FBQUEsR0FBQSxDQUFBLEVBQ0E5TSxJQUFBQSxDQUFBa00sUUFBQUEsR0FBQSxDQUFBLEVBRUFsTSxJQUFBQSxDQUFBaU0sS0FBQUEsR0FBQSxZQUFBO01BQ0FqTSxJQUFBQSxDQUFBcUwsUUFBQUEsR0FBQXJMLElBQUFBLENBQUFzTCxZQUFBQTtNQUNBLElBQUF5QixFQUFBQSxHQUFBL0csSUFBQUEsQ0FBQWdILEtBQUFBLENBQUEsR0FBQSxHQUFBaEgsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsQ0FBQUE7TUFDQW1FLEtBQUFBLENBQUE2QyxFQUFBQSxDQUFBQSxHQUFBLElBQUFFLElBQUFBLENBQUFGLEVBQUFBLEVBQUEvTSxJQUFBQSxDQUNBO0lBQUEsQ0FBQSxFQUVBQSxJQUFBQSxDQUFBa04sSUFBQUEsR0FBQSxZQUFBO01BVUEsS0FBQSxJQUFBck0sQ0FBQUEsSUFUQWIsSUFBQUEsQ0FBQXdMLE1BQUFBLEtBQ0EzQixHQUFBQSxDQUFBc0QsU0FBQUEsRUFBQUEsRUFDQXRELEdBQUFBLENBQUF1RCxHQUFBQSxDQUFBcE4sSUFBQUEsQ0FBQTZNLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUE3TSxJQUFBQSxDQUFBd00sS0FBQUEsR0FBQSxDQUFBLEVBQUF4TSxJQUFBQSxDQUFBNk0sUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQTdNLElBQUFBLENBQUF5TSxNQUFBQSxHQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsR0FBQXpHLElBQUFBLENBQUFxSCxFQUFBQSxDQUFBQSxFQUNBeEQsR0FBQUEsQ0FBQUcsU0FBQUEsR0FBQSx1QkFBQSxFQUNBSCxHQUFBQSxDQUFBeUQsV0FBQUEsR0FBQSx1QkFBQSxFQUNBekQsR0FBQUEsQ0FBQTBELFNBQUFBLEdBQUEsQ0FBQSxFQUNBMUQsR0FBQUEsQ0FBQTJELE1BQUFBLEVBQUFBLEVBQ0EzRCxHQUFBQSxDQUFBNEQsSUFBQUEsRUFBQUEsQ0FBQUEsRUFFQXRELFNBQUFBLEVBQUE7UUFDQSxJQUFBdUQsUUFBQUEsR0FBQXZELFNBQUFBLENBQUF0SixDQUFBQSxDQUFBQTtRQUNBLElBQUE4TSxHQUFBQSxDQUFBRCxRQUFBQSxFQUFBMU4sSUFBQUEsQ0FBQUEsRUFBQTtVQUNBLElBQUEsQ0FBQUEsSUFBQUEsQ0FBQXdMLE1BQUFBLEVBSUEsT0FBQW9DLFFBQUFBLEVBQUFBO1VBSEE1TixJQUFBQSxDQUFBd0wsTUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0FrQyxRQUFBQSxDQUFBakMsT0FBQUEsRUFJQTtRQUFBO01BQ0E7TUFDQXpMLElBQUFBLENBQUE4TSxLQUFBQSxHQUFBOU0sSUFBQUEsQ0FBQWtNLFFBQUFBLEVBQ0FsTSxJQUFBQSxDQUFBcUwsUUFBQUEsR0FBQSxDQUFBLElBQ0FyTCxJQUFBQSxDQUFBcUwsUUFBQUEsRUFBQUEsRUFFQTZCLElBQUFBLENBQUFsTixJQUFBQSxDQUNBO0lBQUEsQ0FDQTtFQUFBO0VBRUEsU0FBQWlOLElBQUFBLENBQUFGLEVBQUFBLEVBQUE1QixTQUFBQSxFQUFBQTtJQUNBbkwsSUFBQUEsQ0FBQStNLEVBQUFBLEdBQUFBLEVBQUFBLEVBQ0EvTSxJQUFBQSxDQUFBNk0sUUFBQUEsR0FBQSxDQUNBMUIsU0FBQUEsQ0FBQTBCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQ0ExQixTQUFBQSxDQUFBdUIsTUFBQUEsQ0FBQUMsQ0FBQUEsR0FDQXhCLFNBQUFBLENBQUF1QixNQUFBQSxDQUFBQyxDQUFBQSxHQUFBM0csSUFBQUEsQ0FBQTZILEdBQUFBLENBQUFBLENBQUExQyxTQUFBQSxDQUFBZSxRQUFBQSxHQUFBLEVBQUEsSUFBQWxHLElBQUFBLENBQUFxSCxFQUFBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBbEMsU0FBQUEsQ0FBQTBCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQ0ExQixTQUFBQSxDQUFBdUIsTUFBQUEsQ0FBQUUsQ0FBQUEsR0FDQXpCLFNBQUFBLENBQUF1QixNQUFBQSxDQUFBRSxDQUFBQSxHQUFBNUcsSUFBQUEsQ0FBQThILEdBQUFBLENBQUFBLENBQUEzQyxTQUFBQSxDQUFBZSxRQUFBQSxHQUFBLEVBQUEsSUFBQWxHLElBQUFBLENBQUFxSCxFQUFBQSxHQUFBLEdBQUEsQ0FBQSxDQUFBLEVBRUFyTixJQUFBQSxDQUFBd00sS0FBQUEsR0FBQSxDQUFBLEVBQ0F4TSxJQUFBQSxDQUFBeU0sTUFBQUEsR0FBQSxFQUFBLEVBQ0F6TSxJQUFBQSxDQUFBOE0sS0FBQUEsR0FBQTNCLFNBQUFBLENBQUEyQixLQUFBQSxFQUNBOU0sSUFBQUEsQ0FBQWtNLFFBQUFBLEdBQUFmLFNBQUFBLENBQUFlLFFBQUFBLEVBQ0FsTSxJQUFBQSxDQUFBbU0sS0FBQUEsR0FBQWhCLFNBQUFBLENBQUFnQixLQUFBQSxHQUFBLEdBQUEsRUFDQW5NLElBQUFBLENBQUErTixRQUFBQSxHQUFBNUMsU0FBQUEsQ0FBQUksS0FBQUEsRUFDQXZMLElBQUFBLENBQUFnTCxHQUFBQSxHQUFBLElBQUFDLEtBQUFBLElBQ0FqTCxJQUFBQSxDQUFBZ0wsR0FBQUEsQ0FBQWEsR0FBQUEsR0FBQSxvQkFBQSxFQUVBN0wsSUFBQUEsQ0FBQWtOLElBQUFBLEdBQUEsWUFBQTtNQUNBbE4sSUFBQUEsQ0FBQStOLFFBQUFBLEVBQUFBLEVBQ0FiLElBQUFBLENBQUFsTixJQUFBQSxDQUNBO0lBQUEsQ0FDQTtFQUFBO0VBRUEsU0FBQWdPLFFBQUFBLENBQUFqQixFQUFBQSxFQUFBQTtJQUNBL00sSUFBQUEsQ0FBQStNLEVBQUFBLEdBQUFBLEVBQUFBLEVBQ0EvTSxJQUFBQSxDQUFBd00sS0FBQUEsR0FBQSxFQUFBLEdBQUF4RyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBLEVBQUEsRUFDQS9GLElBQUFBLENBQUF5TSxNQUFBQSxHQUFBek0sSUFBQUEsQ0FBQXdNLEtBQUFBLEVBQ0F4TSxJQUFBQSxDQUFBNk0sUUFBQUEsR0FBQW9CLGdCQUFBQSxDQUFBak8sSUFBQUEsQ0FBQXdNLEtBQUFBLEVBQUF4TSxJQUFBQSxDQUFBeU0sTUFBQUEsQ0FBQUEsRUFDQXpNLElBQUFBLENBQUE4TSxLQUFBQSxHQUFBLEdBQUEsR0FBQTlHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEVBQ0EvRixJQUFBQSxDQUFBa00sUUFBQUEsR0FBQSxHQUFBLEdBQUFsRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxFQUNBL0YsSUFBQUEsQ0FBQWtPLGFBQUFBLEdBQUEsQ0FBQSxHQUFBbEksSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQSxDQUFBLEVBQ0EvRixJQUFBQSxDQUFBbU0sS0FBQUEsR0FBQSxHQUFBLEdBQUFuRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBLENBQUEsRUFDQS9GLElBQUFBLENBQUFnTCxHQUFBQSxHQUFBLElBQUFDLEtBQUFBLElBQ0FqTCxJQUFBQSxDQUFBZ0wsR0FBQUEsQ0FBQWEsR0FBQUEsR0FBQSxvQkFBQSxJQUFBN0YsSUFBQUEsQ0FBQWdILEtBQUFBLENBQUEsQ0FBQSxHQUFBaEgsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsQ0FBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxNQUFBLEVBRUEvRixJQUFBQSxDQUFBeUwsT0FBQUEsR0FBQSxZQUFBO01BRUEsT0FEQXBCLFVBQUFBLENBQUFySyxJQUFBQSxDQUFBK00sRUFBQUEsQ0FBQUEsR0FBQSxJQUFBb0IsU0FBQUEsQ0FBQW5PLElBQUFBLENBQUFBLEVBQUFBLE9BQ0FtSyxTQUFBQSxDQUFBbkssSUFBQUEsQ0FBQStNLEVBQUFBLENBQ0E7SUFBQSxDQUFBLEVBRUEvTSxJQUFBQSxDQUFBa04sSUFBQUEsR0FBQSxZQUFBO01BT0EsS0FBQSxJQUFBck0sQ0FBQUEsSUFOQWIsSUFBQUEsQ0FBQWtNLFFBQUFBLElBQUFsTSxJQUFBQSxDQUFBa08sYUFBQUEsRUFDQWxPLElBQUFBLENBQUFrTSxRQUFBQSxHQUFBLEdBQUEsR0FDQWxNLElBQUFBLENBQUFrTSxRQUFBQSxHQUFBbE0sSUFBQUEsQ0FBQWtNLFFBQUFBLEdBQUEsR0FBQSxHQUNBbE0sSUFBQUEsQ0FBQWtNLFFBQUFBLEdBQUEsQ0FBQSxLQUNBbE0sSUFBQUEsQ0FBQWtNLFFBQUFBLEdBQUEsR0FBQSxHQUFBbE0sSUFBQUEsQ0FBQWtNLFFBQUFBLENBQUFBLEVBRUFoQyxLQUFBQSxFQUFBO1FBQ0EsSUFBQWtFLElBQUFBLEdBQUFsRSxLQUFBQSxDQUFBckosQ0FBQUEsQ0FBQUE7UUFDQSxJQUFBOE0sR0FBQUEsQ0FBQVMsSUFBQUEsRUFBQXBPLElBQUFBLENBQUFBLEVBQUE7VUFDQUEsSUFBQUEsQ0FBQXlMLE9BQUFBLEVBQUFBO1VBQ0EsSUFBQTRDLE1BQUFBLEdBQUFySSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBQSxDQUFBbUksSUFBQUEsQ0FBQWpDLEtBQUFBLEdBQUEsR0FBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUFuTSxJQUFBQSxDQUFBd00sS0FBQUEsQ0FBQUE7VUFDQXhHLElBQUFBLENBQUFDLEtBQUFBLENBQUFBLENBQUFvSSxNQUFBQSxHQUFBeEosTUFBQUEsQ0FBQXVILEtBQUFBLElBQUEsR0FBQSxDQUFBLEdBQUFwRyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBcEIsTUFBQUEsQ0FBQXVILEtBQUFBLEdBQUEsR0FBQSxDQUFBLElBQ0FrQyxZQUFBQSxFQUFBQSxFQUVBekosTUFBQUEsQ0FBQXVILEtBQUFBLElBQUFpQyxNQUFBQSxFQUNBeEosTUFBQUEsQ0FBQXdILE1BQUFBLEVBQUFBLEVBQUFBLE9BQ0FuQyxLQUFBQSxDQUFBckosQ0FBQUEsQ0FDQTtRQUFBO01BQ0E7TUFDQXFNLElBQUFBLENBQUFsTixJQUFBQSxDQUNBO0lBQUEsQ0FDQTtFQUFBO0VBRUEsU0FBQW1PLFNBQUFBLENBQUFJLE1BQUFBLEVBQUFBO0lBQ0F2TyxJQUFBQSxDQUFBNk0sUUFBQUEsR0FBQSxDQUFBMEIsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEwQixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNBN00sSUFBQUEsQ0FBQXdNLEtBQUFBLEdBQUErQixNQUFBQSxDQUFBL0IsS0FBQUEsRUFDQXhNLElBQUFBLENBQUF5TSxNQUFBQSxHQUFBOEIsTUFBQUEsQ0FBQTlCLE1BQUFBLEVBQ0F6TSxJQUFBQSxDQUFBbU0sS0FBQUEsR0FBQSxDQUFBLEVBQ0FuTSxJQUFBQSxDQUFBOE0sS0FBQUEsR0FBQSxHQUFBLEdBQUE5RyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxFQUNBL0YsSUFBQUEsQ0FBQTRLLEtBQUFBLEdBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBO01BQ0FDLE9BQUFBLEVBQUEsQ0FBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtNQUNBbEssQ0FBQUEsRUFBQSxDQUFBO01BQ0FTLFNBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBRUF0QixJQUFBQSxDQUFBK04sUUFBQUEsR0FBQSxFQUFBLEVBQ0EvTixJQUFBQSxDQUFBZ0wsR0FBQUEsR0FBQWMsY0FBQUEsRUFFQTlMLElBQUFBLENBQUFrTixJQUFBQSxHQUFBLFlBQUE7TUFDQWxOLElBQUFBLENBQUErTixRQUFBQSxFQUFBQSxFQUNBYixJQUFBQSxDQUFBbE4sSUFBQUEsQ0FBQUEsRUFDQUEsSUFBQUEsQ0FBQTRLLEtBQUFBLENBQUF0SixTQUFBQSxHQUNBdEIsSUFBQUEsQ0FBQTRLLEtBQUFBLENBQUEvSixDQUFBQSxFQUFBQSxHQUVBYixJQUFBQSxDQUFBNEssS0FBQUEsQ0FBQS9KLENBQUFBLEVBRUE7SUFBQSxDQUNBO0VBQUE7RUFFQSxTQUFBMk4sT0FBQUEsQ0FBQXpCLEVBQUFBLEVBQUFBO0lBQ0EvTSxJQUFBQSxDQUFBK00sRUFBQUEsR0FBQUEsRUFBQUEsRUFDQS9NLElBQUFBLENBQUEyTCxPQUFBQSxHQUFBbEIsWUFBQUEsQ0FBQXpFLElBQUFBLENBQUFDLEtBQUFBLENBQUFELElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUEwRSxZQUFBQSxDQUFBM0osTUFBQUEsQ0FBQUEsQ0FBQUEsRUFDQWQsSUFBQUEsQ0FBQTRLLEtBQUFBLEdBQUE1SyxJQUFBQSxDQUFBMkwsT0FBQUEsQ0FBQWYsS0FBQUEsRUFDQTVLLElBQUFBLENBQUErTixRQUFBQSxHQUFBLEdBQUEsRUFDQS9OLElBQUFBLENBQUE0SyxLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBL0ssSUFBQUEsQ0FBQTRLLEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLElBQ0EvSyxJQUFBQSxDQUFBeU0sTUFBQUEsR0FBQSxFQUFBLEVBQ0F6TSxJQUFBQSxDQUFBd00sS0FBQUEsR0FBQXhHLElBQUFBLENBQUFnSCxLQUFBQSxDQUFBaE4sSUFBQUEsQ0FBQXlNLE1BQUFBLEdBQUF6TSxJQUFBQSxDQUFBNEssS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQS9LLElBQUFBLENBQUE0SyxLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBRUEvSyxJQUFBQSxDQUFBd00sS0FBQUEsR0FBQSxFQUFBLEVBQ0F4TSxJQUFBQSxDQUFBeU0sTUFBQUEsR0FBQXpHLElBQUFBLENBQUFnSCxLQUFBQSxDQUFBaE4sSUFBQUEsQ0FBQXdNLEtBQUFBLEdBQUF4TSxJQUFBQSxDQUFBNEssS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQS9LLElBQUFBLENBQUE0SyxLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFFQS9LLElBQUFBLENBQUE2TSxRQUFBQSxHQUFBb0IsZ0JBQUFBLENBQUFqTyxJQUFBQSxDQUFBd00sS0FBQUEsRUFBQXhNLElBQUFBLENBQUF5TSxNQUFBQSxDQUFBQSxFQUNBek0sSUFBQUEsQ0FBQWdMLEdBQUFBLEdBQUFoTCxJQUFBQSxDQUFBMkwsT0FBQUEsQ0FBQVgsR0FBQUEsRUFDQWhMLElBQUFBLENBQUE4TSxLQUFBQSxHQUFBLEdBQUEsR0FBQTlHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEVBQ0EvRixJQUFBQSxDQUFBbU0sS0FBQUEsR0FBQSxHQUFBLEdBQUFuRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBLEVBQUE7SUFDQSxJQUFBMEksS0FBQUEsR0FBQSxDQUFBO0lBQ0F6TyxJQUFBQSxDQUFBa04sSUFBQUEsR0FBQSxNQUNBbE4sSUFBQUEsQ0FBQStOLFFBQUFBLElBQUEsQ0FBQSxHQUFBLE9BQ0EzRCxRQUFBQSxDQUFBcEssSUFBQUEsQ0FBQStNLEVBQUFBLENBQUFBLEdBRUFZLEdBQUFBLENBQUF4QyxTQUFBQSxFQUFBbkwsSUFBQUEsQ0FBQUEsSUFDQTZFLE1BQUFBLENBQUE0RSxRQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQTVFLE1BQUFBLENBQUE4RixZQUFBQSxHQUFBM0ssSUFBQUEsQ0FBQTJMLE9BQUFBLENBQUFoQixZQUFBQSxFQUNBOUYsTUFBQUEsQ0FBQXdILE1BQUFBLEVBQUFBLEVBQ0FoRyxVQUFBQSxDQUFBLE1BQUE7TUFDQXhCLE1BQUFBLENBQUE0RSxRQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQTVFLE1BQUFBLENBQUF3SCxNQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBLEdBQUEsQ0FBQSxFQUNBck0sSUFBQUEsQ0FBQTJMLE9BQUFBLENBQUFULFFBQUFBLENBQUFDLFNBQUFBLENBQUFBLEVBQUFBLE9BQ0FmLFFBQUFBLENBQUFwSyxJQUFBQSxDQUFBK00sRUFBQUEsQ0FBQUEsS0FFQS9NLElBQUFBLENBQUErTixRQUFBQSxFQUFBQSxFQUNBYixJQUFBQSxDQUFBbE4sSUFBQUEsQ0FBQUEsRUFBQUEsTUFDQXlPLEtBQUFBLElBQUEsQ0FBQSxJQUNBek8sSUFBQUEsQ0FBQTRLLEtBQUFBLENBQUF0SixTQUFBQSxHQUNBdEIsSUFBQUEsQ0FBQTRLLEtBQUFBLENBQUEvSixDQUFBQSxFQUFBQSxHQUVBYixJQUFBQSxDQUFBNEssS0FBQUEsQ0FBQS9KLENBQUFBLEVBQUFBLEVBRUE0TixLQUFBQSxHQUFBLENBQUEsSUFFQUEsS0FBQUEsRUFBQUEsQ0FBQUEsQ0FHQTtFQUFBO0VBRUEsU0FBQXZCLElBQUFBLENBQUFxQixNQUFBQSxFQUFBQTtJQWlCQSxJQWhCQUEsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEwQixNQUFBQSxDQUFBcEMsS0FBQUEsR0FBQSxHQUFBLEdBQUFuRyxJQUFBQSxDQUFBNkgsR0FBQUEsQ0FBQUEsQ0FBQVUsTUFBQUEsQ0FBQXpCLEtBQUFBLEdBQUEsRUFBQSxJQUFBOUcsSUFBQUEsQ0FBQXFILEVBQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FrQixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQTBCLE1BQUFBLENBQUFwQyxLQUFBQSxHQUFBLEdBQUEsR0FBQW5HLElBQUFBLENBQUE4SCxHQUFBQSxDQUFBQSxDQUFBUyxNQUFBQSxDQUFBekIsS0FBQUEsR0FBQSxFQUFBLElBQUE5RyxJQUFBQSxDQUFBcUgsRUFBQUEsR0FBQSxHQUFBLENBQUEsRUFDQWtCLE1BQUFBLENBQUExQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBbkQsTUFBQUEsQ0FBQThDLEtBQUFBLEdBQ0ErQixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBMEIsTUFBQUEsQ0FBQS9CLEtBQUFBLEdBQ0ErQixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBMEIsTUFBQUEsQ0FBQS9CLEtBQUFBLEtBQ0ErQixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQW5ELE1BQUFBLENBQUE4QyxLQUFBQSxDQUFBQSxFQUVBK0IsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUFuRCxNQUFBQSxDQUFBK0MsTUFBQUEsR0FDQThCLE1BQUFBLENBQUExQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEwQixNQUFBQSxDQUFBOUIsTUFBQUEsR0FDQThCLE1BQUFBLENBQUExQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEwQixNQUFBQSxDQUFBOUIsTUFBQUEsS0FDQThCLE1BQUFBLENBQUExQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBbkQsTUFBQUEsQ0FBQStDLE1BQUFBLENBQUFBLEVBRUE1QyxHQUFBQSxDQUFBNkUsSUFBQUEsRUFBQUEsRUFDQTdFLEdBQUFBLENBQUE4RSxTQUFBQSxDQUFBSixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQTBCLE1BQUFBLENBQUExQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQ0FoRCxHQUFBQSxDQUFBOEUsU0FBQUEsQ0FBQUosTUFBQUEsQ0FBQS9CLEtBQUFBLEdBQUEsQ0FBQSxFQUFBK0IsTUFBQUEsQ0FBQTlCLE1BQUFBLEdBQUEsQ0FBQSxDQUFBLEVBQ0E1QyxHQUFBQSxDQUFBK0UsTUFBQUEsQ0FBQUwsTUFBQUEsQ0FBQXJDLFFBQUFBLEdBQUFsRyxJQUFBQSxDQUFBcUgsRUFBQUEsR0FBQSxHQUFBLENBQUEsRUFDQWtCLE1BQUFBLENBQUEzRCxLQUFBQSxFQUFBO01BQ0EsSUFBQWlFLE1BQUFBLEdBQUFOLE1BQUFBLENBQUEzRCxLQUFBQSxDQUFBL0osQ0FBQUEsR0FBQTBOLE1BQUFBLENBQUEzRCxLQUFBQSxDQUFBRSxPQUFBQTtRQUNBZ0UsR0FBQUEsR0FBQTlJLElBQUFBLENBQUFDLEtBQUFBLENBQUFzSSxNQUFBQSxDQUFBM0QsS0FBQUEsQ0FBQS9KLENBQUFBLEdBQUEwTixNQUFBQSxDQUFBM0QsS0FBQUEsQ0FBQUUsT0FBQUEsQ0FBQUE7TUFDQWpCLEdBQUFBLENBQUFrRixTQUFBQSxDQUNBUixNQUFBQSxDQUFBdkQsR0FBQUEsRUFDQXVELE1BQUFBLENBQUEzRCxLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBOEQsTUFBQUEsRUFDQU4sTUFBQUEsQ0FBQTNELEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUErRCxHQUFBQSxFQUNBUCxNQUFBQSxDQUFBM0QsS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsRUFDQXdELE1BQUFBLENBQUEzRCxLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLENBQ0F3RCxNQUFBQSxDQUFBL0IsS0FBQUEsR0FBQSxDQUFBLEVBQUEsQ0FDQStCLE1BQUFBLENBQUE5QixNQUFBQSxHQUFBLENBQUEsRUFDQThCLE1BQUFBLENBQUEvQixLQUFBQSxFQUNBK0IsTUFBQUEsQ0FBQTlCLE1BQUFBLENBQUFBLEVBR0E4QixNQUFBQSxDQUFBM0QsS0FBQUEsQ0FBQS9KLENBQUFBLElBQUEsQ0FBQSxJQUNBME4sTUFBQUEsQ0FBQTNELEtBQUFBLENBQUEvSixDQUFBQSxHQUFBLENBQUEsRUFDQTBOLE1BQUFBLENBQUEzRCxLQUFBQSxDQUFBdEosU0FBQUEsR0FBQUEsQ0FBQSxDQUFBLElBQ0FpTixNQUFBQSxDQUFBM0QsS0FBQUEsQ0FBQS9KLENBQUFBLElBQUEwTixNQUFBQSxDQUFBM0QsS0FBQUEsQ0FBQUUsT0FBQUEsR0FBQXlELE1BQUFBLENBQUEzRCxLQUFBQSxDQUFBQyxJQUFBQSxLQUNBMEQsTUFBQUEsQ0FBQTNELEtBQUFBLENBQUEvSixDQUFBQSxHQUFBME4sTUFBQUEsQ0FBQTNELEtBQUFBLENBQUFFLE9BQUFBLEdBQUF5RCxNQUFBQSxDQUFBM0QsS0FBQUEsQ0FBQUMsSUFBQUEsR0FBQSxDQUFBLEVBQ0EwRCxNQUFBQSxDQUFBM0QsS0FBQUEsQ0FBQXRKLFNBQUFBLEdBQUFBLENBQUEsQ0FBQSxDQUVBO0lBQUEsQ0FBQSxNQUNBdUksR0FBQUEsQ0FBQWtGLFNBQUFBLENBQUFSLE1BQUFBLENBQUF2RCxHQUFBQSxFQUFBQSxDQUFBdUQsTUFBQUEsQ0FBQS9CLEtBQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUErQixNQUFBQSxDQUFBOUIsTUFBQUEsR0FBQSxDQUFBLEVBQUE4QixNQUFBQSxDQUFBL0IsS0FBQUEsRUFBQStCLE1BQUFBLENBQUE5QixNQUFBQSxDQUFBQTtJQUVBNUMsR0FBQUEsQ0FBQW1GLE9BQUFBLEVBQ0E7RUFBQTtFQWVBLFNBQUFmLGdCQUFBQSxDQUFBekIsS0FBQUEsRUFBQUMsTUFBQUEsRUFBQUE7SUFDQSxJQUVBRSxDQUFBQTtNQUZBc0MsS0FBQUEsR0FBQSxDQUFBLEdBQUFqSixJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQTtNQUNBbUosS0FBQUEsR0FBQSxDQUFBLEdBQUFsSixJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQTtNQUVBNkcsQ0FBQUEsR0FBQSxDQUFBO0lBZ0JBLE9BZkFxQyxLQUFBQSxJQUFBLENBQUEsSUFDQXRDLENBQUFBLEdBQUEzRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBMkQsTUFBQUEsQ0FBQThDLEtBQUFBLEVBRUFJLENBQUFBLEdBREFBLENBQUFBLElBQUEsQ0FBQSxHQUNBLENBQUEsR0FBQUgsTUFBQUEsR0FFQS9DLE1BQUFBLENBQUErQyxNQUFBQSxLQUdBRyxDQUFBQSxHQUFBNUcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQTJELE1BQUFBLENBQUErQyxNQUFBQSxFQUVBRSxDQUFBQSxHQURBdUMsS0FBQUEsSUFBQSxDQUFBLEdBQ0EsQ0FBQSxHQUFBMUMsS0FBQUEsR0FFQTlDLE1BQUFBLENBQUE4QyxLQUFBQSxDQUFBQSxFQUdBLENBQUFHLENBQUFBLEVBQUFDLENBQUFBLENBQ0E7RUFBQTtFQUVBLFNBQUFlLEdBQUFBLENBQUF3QixPQUFBQSxFQUFBQyxPQUFBQSxFQUFBQTtJQUNBLE9BQ0FELE9BQUFBLENBQUF0QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdUMsT0FBQUEsQ0FBQXZDLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUF1QyxPQUFBQSxDQUFBNUMsS0FBQUEsSUFDQTRDLE9BQUFBLENBQUF2QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBc0MsT0FBQUEsQ0FBQXRDLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUFzQyxPQUFBQSxDQUFBM0MsS0FBQUEsSUFDQTJDLE9BQUFBLENBQUF0QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdUMsT0FBQUEsQ0FBQXZDLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUF1QyxPQUFBQSxDQUFBM0MsTUFBQUEsSUFDQTJDLE9BQUFBLENBQUF2QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBc0MsT0FBQUEsQ0FBQXRDLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUFzQyxPQUFBQSxDQUFBMUMsTUFFQTtFQUFBO0VBRUEsU0FBQUYsU0FBQUEsQ0FBQUEsRUFBQUE7SUFDQSxJQUFBaE4sTUFBQUEsQ0FBQThQLElBQUFBLENBQUFsRixTQUFBQSxDQUFBQSxDQUFBckosTUFBQUEsR0FBQSxHQUFBLEVBQUE7TUFDQSxJQUFBaU0sRUFBQUEsR0FBQS9HLElBQUFBLENBQUFnSCxLQUFBQSxDQUFBLEdBQUEsR0FBQWhILElBQUFBLENBQUFELE1BQUFBLEVBQUFBLENBQUFBO01BQ0FvRSxTQUFBQSxDQUFBNEMsRUFBQUEsQ0FBQUEsR0FBQSxJQUFBaUIsUUFBQUEsQ0FBQWpCLEVBQUFBLENBQ0E7SUFBQTtJQUNBbEksTUFBQUEsQ0FBQW1ILE9BQUFBLElBQ0EzRixVQUFBQSxDQUFBLFlBQUE7TUFDQWtHLFNBQUFBLEVBQ0E7SUFBQSxDQUFBLEVBS0ExSCxNQUFBQSxDQUFBdUgsS0FBQUEsR0FBQSxHQUFBLEdBQ0EsR0FBQSxHQUNBdkgsTUFBQUEsQ0FBQXVILEtBQUFBLEdBQUEsR0FBQSxHQUNBLEdBQUEsR0FDQXZILE1BQUFBLENBQUF1SCxLQUFBQSxHQUFBLEdBQUEsR0FDQSxHQUFBLEdBQ0F2SCxNQUFBQSxDQUFBdUgsS0FBQUEsR0FBQSxHQUFBLEdBQ0EsR0FBQSxHQUNBdkgsTUFBQUEsQ0FBQXVILEtBQUFBLEdBQUEsR0FBQSxHQUNBLEdBQUEsR0FDQXZILE1BQUFBLENBQUF1SCxLQUFBQSxHQUFBLEdBQUEsR0FDQSxHQUFBLEdBQ0F2SCxNQUFBQSxDQUFBdUgsS0FBQUEsR0FBQSxHQUFBLEdBQ0EsR0FBQSxHQUNBdkgsTUFBQUEsQ0FBQXVILEtBQUFBLEdBQUEsR0FBQSxHQUNBLEdBQUEsR0FFQSxHQUFBLENBcEJBO0VBQUE7RUF3QkEsU0FBQVYsY0FBQUEsQ0FBQTRELE1BQUFBLEVBQUFBO0lBQ0EsSUFBQXpPLENBQUFBLEdBQUEsQ0FBQTtJQUNBLEdBQUE7TUFDQSxJQUFBa00sRUFBQUEsR0FBQS9HLElBQUFBLENBQUFnSCxLQUFBQSxDQUFBLEdBQUEsR0FBQWhILElBQUFBLENBQUFELE1BQUFBLEVBQUFBLENBQUFBO01BQ0FvRSxTQUFBQSxDQUFBNEMsRUFBQUEsQ0FBQUEsR0FBQSxJQUFBaUIsUUFBQUEsQ0FBQWpCLEVBQUFBLENBQ0E7SUFBQSxDQUFBLFFBQUFsTSxDQUFBQSxFQUFBQSxJQUFBeU8sTUFBQUE7RUFDQTtFQUVBLFNBQUFoQixZQUFBQSxDQUFBQSxFQUFBQTtJQUNBLElBQUEvTyxNQUFBQSxDQUFBOFAsSUFBQUEsQ0FBQWpGLFFBQUFBLENBQUFBLENBQUF0SixNQUFBQSxHQUFBLENBQUEsRUFBQTtNQUNBLElBQUFpTSxFQUFBQSxHQUFBL0csSUFBQUEsQ0FBQWdILEtBQUFBLENBQUEsR0FBQSxHQUFBaEgsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsQ0FBQUE7TUFDQXFFLFFBQUFBLENBQUEyQyxFQUFBQSxDQUFBQSxHQUFBLElBQUF5QixPQUFBQSxDQUFBekIsRUFBQUEsQ0FDQTtJQUFBO0VBQ0E7RUFFQSxTQUFBYSxRQUFBQSxDQUFBQSxFQUFBQTtJQUVBLEtBQUEsSUFBQS9NLENBQUFBLElBREFnRSxNQUFBQSxDQUFBbUgsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0E3QixTQUFBQSxFQUNBQSxTQUFBQSxDQUFBdEosQ0FBQUEsQ0FBQUEsQ0FBQTRLLE9BQUFBLEVBQUFBO0lBRUF2QixLQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBckYsTUFBQUEsQ0FBQTBELFFBQUFBLEdBQ0ExRCxNQUFBQSxDQUFBNEQsV0FBQUEsQ0FBQThHLFNBQUFBLENBQUFwRixTQUFBQSxHQUFBdEYsTUFBQUEsQ0FBQXVILEtBQUFBLEtBQ0F2SCxNQUFBQSxDQUFBNEQsV0FBQUEsQ0FBQThHLFNBQUFBLENBQUFwRixTQUFBQSxHQUFBdEYsTUFBQUEsQ0FBQXVILEtBQUFBLEVBQ0E1QyxPQUFBQSxDQUFBZ0csWUFBQUEsQ0FBQSxXQUFBLEVBQUEzSyxNQUFBQSxDQUFBNEQsV0FBQUEsQ0FBQUQsR0FBQUEsRUFBQTNELE1BQUFBLENBQUF1SCxLQUFBQSxDQUFBQSxDQUFBQSxHQUdBdkgsTUFBQUEsQ0FBQTBLLFNBQUFBLEdBQUExSyxNQUFBQSxDQUFBdUgsS0FBQUEsS0FDQXZILE1BQUFBLENBQUEwSyxTQUFBQSxHQUFBMUssTUFBQUEsQ0FBQXVILEtBQUFBLENBR0E7RUFBQTtFQWlCQSxTQUFBcUQsWUFBQUEsQ0FBQUEsRUFBQUE7SUFDQTlMLE9BQUFBLENBQUFDLEdBQUFBLENBQUFOLE1BQUFBLENBQUFvTSxVQUFBQSxDQUFBQSxFQUNBaEcsTUFBQUEsQ0FBQThDLEtBQUFBLEdBQUFsSixNQUFBQSxDQUFBb00sVUFBQUEsRUFDQWhHLE1BQUFBLENBQUErQyxNQUFBQSxHQUFBbkosTUFBQUEsQ0FBQXFNLFdBQUFBLElBQUFqRyxNQUFBQSxDQUFBOEMsS0FBQUEsSUFBQSxHQUFBLEdBQUEsRUFBQSxHQUFBLEdBQUEsQ0FDQTtFQUFBO0VBcGJBVixjQUFBQSxDQUFBRCxHQUFBQSxHQUFBLHlCQUFBLEVBRUF2SSxNQUFBQSxDQUFBc00sZ0JBQUFBLENBQ0EsU0FBQSxFQUNBLFVBQUE5TCxDQUFBQSxFQUFBQTtJQUNBd0csR0FBQUEsQ0FBQXhHLENBQUFBLENBQUErTCxPQUFBQSxJQUFBL0wsQ0FBQUEsQ0FBQWdNLEtBQUFBLENBQUFBLEdBQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsRUFBQSxDQUNBLENBQUEsQ0FBQSxFQUVBeE0sTUFBQUEsQ0FBQXNNLGdCQUFBQSxDQUNBLE9BQUEsRUFDQSxVQUFBOUwsQ0FBQUEsRUFBQUE7SUFDQXdHLEdBQUFBLENBQUF4RyxDQUFBQSxDQUFBK0wsT0FBQUEsSUFBQS9MLENBQUFBLENBQUFnTSxLQUFBQSxDQUFBQSxHQUFBQSxDQUFBLENBQ0E7RUFBQSxDQUFBLEVBQUEsQ0FDQSxDQUFBLENBQUEsRUFHQWpMLE1BQUFBLENBQUEwSyxTQUFBQSxHQUFBLENBQUEsRUF1WkFqTSxNQUFBQSxDQUFBc00sZ0JBQUFBLENBQUEsUUFBQSxFQUFBSCxZQUFBQSxFQUFBQSxDQUFBLENBQUEsQ0FBQSxFQUdBQSxZQUFBQSxFQUFBQSxFQVlBTSxxQkFBQUEsQ0FLQSxTQUFBQyxJQUFBQSxDQUFBQSxFQUFBQTtJQUVBLEtBQUEsSUFBQW5QLENBQUFBLElBREFnSixHQUFBQSxDQUFBb0csU0FBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBdkcsTUFBQUEsQ0FBQThDLEtBQUFBLEVBQUE5QyxNQUFBQSxDQUFBK0MsTUFBQUEsQ0FBQUEsRUFDQXZDLEtBQUFBLEVBQ0FBLEtBQUFBLENBQUFySixDQUFBQSxDQUFBQSxDQUFBa04sUUFBQUEsSUFBQSxDQUFBLEdBQUEsT0FDQTdELEtBQUFBLENBQUFySixDQUFBQSxDQUFBQSxHQUVBcUosS0FBQUEsQ0FBQXJKLENBQUFBLENBQUFBLENBQUFxTSxJQUFBQSxFQUFBQTtJQUdBLEtBQUFyTSxDQUFBQSxJQUFBc0osU0FBQUEsRUFDQUEsU0FBQUEsQ0FBQXRKLENBQUFBLENBQUFBLENBQUFxTSxJQUFBQSxFQUFBQTtJQUVBLEtBQUFyTSxDQUFBQSxJQUFBdUosUUFBQUEsRUFDQUEsUUFBQUEsQ0FBQXZKLENBQUFBLENBQUFBLENBQUFxTSxJQUFBQSxFQUFBQTtJQUVBLEtBQUFyTSxDQUFBQSxJQUFBd0osVUFBQUEsRUFDQUEsVUFBQUEsQ0FBQXhKLENBQUFBLENBQUFBLENBQUFrTixRQUFBQSxJQUFBLENBQUEsR0FBQSxPQUNBMUQsVUFBQUEsQ0FBQXhKLENBQUFBLENBQUFBLEdBRUF3SixVQUFBQSxDQUFBeEosQ0FBQUEsQ0FBQUEsQ0FBQXFNLElBQUFBLEVBQUFBO0lBSUEsSUFEQW5CLFlBQUFBLEVBQUFBLEVBQ0FsSCxNQUFBQSxDQUFBbUgsT0FBQUEsRUFDQWIsU0FBQUEsQ0FBQStCLElBQUFBLEVBQUFBLENBQUFBLEtBQ0E7TUFDQSxJQUFBZ0QsUUFBQUEsR0FBQXJHLEdBQUFBLENBQUFzRyxvQkFBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBekcsTUFBQUEsQ0FBQThDLEtBQUFBLEVBQUEsQ0FBQSxDQUFBO01BQ0EwRCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLEdBQUEsRUFDQSxNQUFBLEdBQ0FwSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUFvSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXJLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQW9LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBckssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBb0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FDQSxNQUFBLEVBQ0EsTUFBQSxHQUNBcEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBb0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FySyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUFvSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXJLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQW9LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxDQUFBLEVBRUFILFFBQUFBLENBQUFFLFlBQUFBLENBQ0EsS0FBQSxFQUNBLE1BQUEsR0FDQXBLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQW9LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBckssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBb0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FySyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUFvSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEdBQ0FwSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFvSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXJLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQW9LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNB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LEVBQUEsQ0FBQSxHQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F6SSxPQUFBQSxFQUFBLENBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EySSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBSSxJQUFBQSxFQUFBO1FBQ0FOLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F6SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EySSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBSyxLQUFBQSxFQUFBO1FBQ0FQLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F6SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EySSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBTSxLQUFBQSxFQUFBO1FBQ0FSLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F6SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EySSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBTyxLQUFBQSxFQUFBO1FBQ0FULEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F6SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EySSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBUSxHQUFBQSxFQUFBO1FBQ0FWLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F6SSxPQUFBQSxFQUFBLENBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EySSxPQUFBQSxFQUFBQSxDQUFBO01BQUE7SUFBQSxDQUFBO0VBSUEsU0FBQVMsT0FBQUEsQ0FBQUMsSUFBQUEsRUFBQUE7SUFDQWxVLElBQUFBLENBQUE2TSxRQUFBQSxHQUFBLENBQUE3RyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxJQUFBMkQsTUFBQUEsQ0FBQThDLEtBQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEVBQUF4RyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxJQUFBMkQsTUFBQUEsQ0FBQStDLE1BQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFDQXpNLElBQUFBLENBQUFzQixTQUFBQSxHQUFBLENBQUEsR0FBQTBFLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUEsQ0FBQSxHQUFBK00sSUFBQUEsR0FBQUMsS0FBQUEsRUFDQS9TLElBQUFBLENBQUFtVSxHQUFBQSxHQUFBLFVBQUFDLE1BQUFBLEVBQUFBO01BQ0FwVSxJQUFBQSxDQUFBb1UsTUFBQUEsR0FBQWhCLE9BQUFBLENBQUFnQixNQUFBQSxDQUFBQSxFQUNBcFUsSUFBQUEsQ0FBQTRLLEtBQUFBLEdBQUEsQ0FBQSxFQUNBNUssSUFBQUEsQ0FBQXdNLEtBQUFBLEdBQUFBLENBQUF4TSxJQUFBQSxDQUFBb1UsTUFBQUEsQ0FBQWIsR0FBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXZULElBQUFBLENBQUFvVSxNQUFBQSxDQUFBZCxLQUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBdFQsSUFBQUEsQ0FBQW9VLE1BQUFBLENBQUF0SixPQUFBQSxFQUNBOUssSUFBQUEsQ0FBQXlNLE1BQUFBLEdBQUFBLENBQUF6TSxJQUFBQSxDQUFBb1UsTUFBQUEsQ0FBQWIsR0FBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXZULElBQUFBLENBQUFvVSxNQUFBQSxDQUFBZCxLQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsSUFBQXRULElBQUFBLENBQUFvVSxNQUFBQSxDQUFBdkosSUFBQUEsR0FBQSxDQUFBLENBQUEsSUFBQTdLLElBQUFBLENBQUFvVSxNQUFBQSxDQUFBdkosSUFBQUEsRUFDQTdLLElBQUFBLENBQUFxVSxTQUFBQSxHQUFBQSxDQUFBLENBQ0E7SUFBQSxDQUFBLEVBQ0FyVSxJQUFBQSxDQUFBbVUsR0FBQUEsQ0FBQUQsSUFBQUEsQ0FBQUEsRUFDQWxVLElBQUFBLENBQUFrTixJQUFBQSxHQUFBLFlBQUE7TUFDQXJELEdBQUFBLENBQUE2RSxJQUFBQSxFQUFBQSxFQUNBN0UsR0FBQUEsQ0FBQThFLFNBQUFBLENBQUEzTyxJQUFBQSxDQUFBNk0sUUFBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQTdNLElBQUFBLENBQUE2TSxRQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQ0FoRCxHQUFBQSxDQUFBOEUsU0FBQUEsQ0FBQTNPLElBQUFBLENBQUF3TSxLQUFBQSxHQUFBLENBQUEsRUFBQXhNLElBQUFBLENBQUF5TSxNQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBek0sSUFBQUEsQ0FBQXNCLFNBQUFBLEtBQUF3UixJQUFBQSxJQUNBakosR0FBQUEsQ0FBQXlLLEtBQUFBLENBQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQTtNQUVBLElBQUF6RixNQUFBQSxHQUFBN08sSUFBQUEsQ0FBQTRLLEtBQUFBLEdBQUE1SyxJQUFBQSxDQUFBb1UsTUFBQUEsQ0FBQXRKLE9BQUFBO1FBQ0FnRSxHQUFBQSxHQUFBOUksSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQWpHLElBQUFBLENBQUE0SyxLQUFBQSxHQUFBNUssSUFBQUEsQ0FBQW9VLE1BQUFBLENBQUF0SixPQUFBQSxDQUFBQTtNQUNBakIsR0FBQUEsQ0FBQWtGLFNBQUFBLENBQUFpRSxhQUFBQSxFQUFBaFQsSUFBQUEsQ0FBQXdNLEtBQUFBLEdBQUFxQyxNQUFBQSxHQUFBN08sSUFBQUEsQ0FBQW9VLE1BQUFBLENBQUFkLEtBQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQXRULElBQUFBLENBQUF5TSxNQUFBQSxHQUFBLEVBQUEsSUFBQXFDLEdBQUFBLEdBQUE5TyxJQUFBQSxDQUFBb1UsTUFBQUEsQ0FBQWQsS0FBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQXRULElBQUFBLENBQUF3TSxLQUFBQSxFQUFBeE0sSUFBQUEsQ0FBQXlNLE1BQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEdBQUF6TSxJQUFBQSxDQUFBd00sS0FBQUEsRUFBQSxDQUFBLEdBQUF4TSxJQUFBQSxDQUFBeU0sTUFBQUEsQ0FBQUEsRUFDQTVDLEdBQUFBLENBQUFtRixPQUFBQSxFQUFBQSxFQUNBaFAsSUFBQUEsQ0FBQW9VLE1BQUFBLENBQUFaLE9BQUFBLEdBQ0F4VCxJQUFBQSxDQUFBcVUsU0FBQUEsSUFDQXJVLElBQUFBLENBQUE0SyxLQUFBQSxFQUFBQSxFQUNBNUssSUFBQUEsQ0FBQTRLLEtBQUFBLElBQUE1SyxJQUFBQSxDQUFBb1UsTUFBQUEsQ0FBQXRKLE9BQUFBLEdBQUE5SyxJQUFBQSxDQUFBb1UsTUFBQUEsQ0FBQXZKLElBQUFBLEtBQ0E3SyxJQUFBQSxDQUFBcVUsU0FBQUEsR0FBQUEsQ0FBQXJVLElBQUFBLENBQUFxVSxTQUFBQSxFQUNBclUsSUFBQUEsQ0FBQTRLLEtBQUFBLEVBQUFBLENBQUFBLEtBR0E1SyxJQUFBQSxDQUFBNEssS0FBQUEsRUFBQUEsRUFDQTVLLElBQUFBLENBQUE0SyxLQUFBQSxHQUFBLENBQUEsS0FDQTVLLElBQUFBLENBQUFxVSxTQUFBQSxHQUFBQSxDQUFBclUsSUFBQUEsQ0FBQXFVLFNBQUFBLEVBQ0FyVSxJQUFBQSxDQUFBNEssS0FBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxJQUlBNUssSUFBQUEsQ0FBQTRLLEtBQUFBLEVBQUFBLEVBQ0E1SyxJQUFBQSxDQUFBNEssS0FBQUEsSUFBQTVLLElBQUFBLENBQUFvVSxNQUFBQSxDQUFBdEosT0FBQUEsR0FBQTlLLElBQUFBLENBQUFvVSxNQUFBQSxDQUFBdkosSUFBQUEsS0FDQTdLLElBQUFBLENBQUE0SyxLQUFBQSxHQUFBLENBQUEsQ0FBQSxDQUdBO0lBQUEsQ0FDQTtFQUFBO0VBa0RBLFNBQUE2RSxZQUFBQSxDQUFBQSxFQUFBQTtJQUNBL0YsTUFBQUEsQ0FBQThDLEtBQUFBLEdBQUFsSixNQUFBQSxDQUFBb00sVUFBQUEsRUFDQWhHLE1BQUFBLENBQUErQyxNQUFBQSxHQUFBbkosTUFBQUEsQ0FBQXFNLFdBQUFBLElBQUFqRyxNQUFBQSxDQUFBOEMsS0FBQUEsSUFBQSxHQUFBLEdBQUEsRUFBQSxHQUFBLEdBQUEsQ0FDQTtFQUFBO0VBVkFsSixNQUFBQSxDQUFBc00sZ0JBQUFBLENBQUEsUUFBQSxFQUFBSCxZQUFBQSxFQUFBQSxDQUFBLENBQUEsQ0FBQSxFQUVBQSxZQUFBQSxFQUFBQSxFQVhBbFEsTUFBQUEsQ0FBQThQLElBQUFBLENBQUErRCxPQUFBQSxDQUFBQSxDQUFBdFIsT0FBQUEsQ0FBQSxVQUFBc1MsTUFBQUEsRUFBQUE7SUFDQWxCLFFBQUFBLENBQUFsTixJQUFBQSxDQUFBZ0gsS0FBQUEsQ0FBQSxHQUFBLEdBQUFoSCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxDQUFBQSxDQUFBQSxHQUFBLElBQUFrTyxPQUFBQSxDQUFBRyxNQUFBQSxDQUNBO0VBQUEsQ0FBQSxDQUFBO0VBcUJBLElBQUFHLEtBQUFBLEdBQUEsSUF2REEsWUFBQTtJQUNBdlUsSUFBQUEsQ0FBQTZNLFFBQUFBLEdBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBLEVBQ0E3TSxJQUFBQSxDQUFBb1UsTUFBQUEsR0FBQTtNQUNBZCxLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQTtNQUNBQyxHQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEdBQUEsQ0FBQTtNQUNBekksT0FBQUEsRUFBQSxDQUFBO01BQ0FELElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBRUE3SyxJQUFBQSxDQUFBd00sS0FBQUEsR0FBQUEsQ0FBQXhNLElBQUFBLENBQUFvVSxNQUFBQSxDQUFBYixHQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdlQsSUFBQUEsQ0FBQW9VLE1BQUFBLENBQUFkLEtBQUFBLENBQUEsQ0FBQSxDQUFBLElBQUF0VCxJQUFBQSxDQUFBb1UsTUFBQUEsQ0FBQXRKLE9BQUFBLEVBQ0E5SyxJQUFBQSxDQUFBeU0sTUFBQUEsR0FBQUEsQ0FBQXpNLElBQUFBLENBQUFvVSxNQUFBQSxDQUFBYixHQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdlQsSUFBQUEsQ0FBQW9VLE1BQUFBLENBQUFkLEtBQUFBLENBQUEsQ0FBQSxDQUFBLElBQUF0VCxJQUFBQSxDQUFBb1UsTUFBQUEsQ0FBQXZKLElBQUFBLEVBQ0E3SyxJQUFBQSxDQUFBNEssS0FBQUEsR0FBQSxDQUFBLEVBQ0E1SyxJQUFBQSxDQUFBd1UsSUFBQUEsR0FBQSxZQUFBO01BSUEsSUFBQTNGLE1BQUFBLEVBQUFDLEdBQUFBO01BSEFqRixHQUFBQSxDQUFBNkUsSUFBQUEsRUFBQUEsRUFDQTdFLEdBQUFBLENBQUE4RSxTQUFBQSxDQUFBM08sSUFBQUEsQ0FBQTZNLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUE3TSxJQUFBQSxDQUFBNk0sUUFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNBaEQsR0FBQUEsQ0FBQThFLFNBQUFBLENBQUEzTyxJQUFBQSxDQUFBd00sS0FBQUEsR0FBQSxDQUFBLEVBQUF4TSxJQUFBQSxDQUFBeU0sTUFBQUEsR0FBQSxDQUFBLENBQUEsRUFFQTBHLE9BQUFBLElBQ0F0RSxNQUFBQSxHQUFBN08sSUFBQUEsQ0FBQTRLLEtBQUFBLEdBQUE1SyxJQUFBQSxDQUFBb1UsTUFBQUEsQ0FBQXRKLE9BQUFBLEVBQ0FnRSxHQUFBQSxHQUFBOUksSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQWpHLElBQUFBLENBQUE0SyxLQUFBQSxHQUFBNUssSUFBQUEsQ0FBQW9VLE1BQUFBLENBQUF0SixPQUFBQSxDQUFBQSxFQUNBOUssSUFBQUEsQ0FBQTRLLEtBQUFBLEdBQUEsQ0FBQSxJQUNBNUssSUFBQUEsQ0FBQTRLLEtBQUFBLEVBQUFBLEtBR0FpRSxNQUFBQSxHQUFBLENBQUEsRUFDQUMsR0FBQUEsR0FBQSxDQUFBLENBQUEsRUFFQWpGLEdBQUFBLENBQUFrRixTQUFBQSxDQUFBa0UsVUFBQUEsRUFBQWpULElBQUFBLENBQUF3TSxLQUFBQSxHQUFBcUMsTUFBQUEsR0FBQTdPLElBQUFBLENBQUFvVSxNQUFBQSxDQUFBZCxLQUFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBdFQsSUFBQUEsQ0FBQXlNLE1BQUFBLEdBQUFxQyxHQUFBQSxHQUFBOU8sSUFBQUEsQ0FBQW9VLE1BQUFBLENBQUFkLEtBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBdFQsSUFBQUEsQ0FBQXdNLEtBQUFBLEVBQUF4TSxJQUFBQSxDQUFBeU0sTUFBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsR0FBQXpNLElBQUFBLENBQUF3TSxLQUFBQSxFQUFBLENBQUEsR0FBQXhNLElBQUFBLENBQUF5TSxNQUFBQSxDQUFBQSxFQUNBNUMsR0FBQUEsQ0FBQW1GLE9BQUFBLEVBQ0E7SUFBQSxDQUNBO0VBQUEsQ0FBQTtFQUFBLENBNkJBLFNBQUFnQixJQUFBQSxDQUFBQSxFQUFBQTtJQUVBLElBREFuRyxHQUFBQSxDQUFBb0csU0FBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBdkcsTUFBQUEsQ0FBQThDLEtBQUFBLEVBQUE5QyxNQUFBQSxDQUFBK0MsTUFBQUEsQ0FBQUEsRUFDQTBHLE9BQUFBLEVBU0EsS0FBQSxJQUFBdFMsQ0FBQUEsSUFBQXFTLFFBQUFBLEVBQ0FBLFFBQUFBLENBQUFyUyxDQUFBQSxDQUFBQSxDQUFBcU0sSUFBQUEsRUFBQUEsQ0FBQUEsS0FUQXJELEdBQUFBLENBQUFzRCxTQUFBQSxFQUFBQSxFQUNBdEQsR0FBQUEsQ0FBQUUsSUFBQUEsR0FBQSxjQUFBLEVBQ0FGLEdBQUFBLENBQUEwRCxTQUFBQSxHQUFBLElBQUEsRUFDQTFELEdBQUFBLENBQUF5RCxXQUFBQSxHQUFBLE1BQUEsRUFDQXpELEdBQUFBLENBQUE0SyxJQUFBQSxDQUFBLEVBQUEsRUFBQS9LLE1BQUFBLENBQUErQyxNQUFBQSxHQUFBLEVBQUEsRUFBQTVDLEdBQUFBLENBQUEwRyxXQUFBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBL0QsS0FBQUEsR0FBQSxFQUFBLEVBQUEzQyxHQUFBQSxDQUFBMEcsV0FBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQTlELE1BQUFBLEdBQUEvQyxNQUFBQSxDQUFBK0MsTUFBQUEsR0FBQSxFQUFBLENBQUEsRUFDQTVDLEdBQUFBLENBQUE0RCxJQUFBQSxFQUFBQSxFQUNBNUQsR0FBQUEsQ0FBQXlHLFFBQUFBLENBQUEsT0FBQSxFQUFBLEVBQUEsRUFBQTVHLE1BQUFBLENBQUErQyxNQUFBQSxHQUFBLEVBQUEsQ0FBQTtJQU1BOEgsS0FBQUEsQ0FBQUMsSUFBQUEsRUFBQUEsRUFDQXJCLE9BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBOU0sVUFBQUEsQ0FBQSxZQUFBO01BQ0EySixJQUFBQSxFQUNBO0lBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBLENBdEJBQSxFQXVCQTtBQUFBLENBQUEsQ0FBQSxFQzdNQWhPLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FXLFVBQUFBLENBQUEsV0FBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBMEUsU0FBQUEsRUFBQW1MLGFBQUFBLEVBQUFBO0VBRUE3UCxNQUFBQSxDQUFBOFAsWUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBRUE5UCxNQUFBQSxDQUFBcVAsSUFBQUEsR0FBQSxZQUFBO0lBQ0FRLGFBQUFBLENBQUFFLGFBQUFBLEVBQUFBLENBQ0F6TSxJQUFBQSxDQUFBLFVBQUFDLFFBQUFBLEVBQUFBO01BR0EsS0FBQSxJQUFBdkgsQ0FBQUEsSUFGQWdFLE1BQUFBLENBQUFnUSxVQUFBQSxHQUFBek0sUUFBQUEsQ0FBQS9ELElBQUFBLEVBQ0FRLE1BQUFBLENBQUFpUSxLQUFBQSxHQUFBLEVBQUEsRUFDQWpRLE1BQUFBLENBQUFnUSxVQUFBQSxFQUNBLEtBQUEsSUFBQUUsQ0FBQUEsSUFBQWxRLE1BQUFBLENBQUFnUSxVQUFBQSxDQUFBaFUsQ0FBQUEsQ0FBQUEsQ0FBQWlVLEtBQUFBLEVBQ0FqUSxNQUFBQSxDQUFBaVEsS0FBQUEsQ0FBQXJULElBQUFBLENBQUE7UUFDQTRQLFFBQUFBLEVBQUF4TSxNQUFBQSxDQUFBZ1EsVUFBQUEsQ0FBQWhVLENBQUFBLENBQUFBLENBQUE2SixJQUFBQTtRQUNBc0ssSUFBQUEsRUFBQW5RLE1BQUFBLENBQUFnUSxVQUFBQSxDQUFBaFUsQ0FBQUEsQ0FBQUEsQ0FBQWlVLEtBQUFBLENBQUFDLENBQUFBLENBQUFBLENBQUFySztNQUFBQSxDQUFBQSxDQUlBO0lBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBN0YsTUFBQUEsQ0FBQW9RLGNBQUFBLEdBQUEsVUFBQTVELFFBQUFBLEVBQUFBO0lBSUEsS0FBQSxJQUFBeFEsQ0FBQUEsSUFIQWdFLE1BQUFBLENBQUFxUSxnQkFBQUEsR0FBQTdELFFBQUFBLEVBQ0F4TSxNQUFBQSxDQUFBc1EsYUFBQUEsR0FBQSxFQUFBLEVBQ0F0USxNQUFBQSxDQUFBdVEsZUFBQUEsR0FBQSxFQUFBLEVBQ0F2USxNQUFBQSxDQUFBcVEsZ0JBQUFBLENBQUFKLEtBQUFBLEVBQ0FqUSxNQUFBQSxDQUFBdVEsZUFBQUEsQ0FBQTNULElBQUFBLENBQUFvRCxNQUFBQSxDQUFBcVEsZ0JBQUFBLENBQUFKLEtBQUFBLENBQUFqVSxDQUFBQSxDQUFBQSxDQUFBQTtJQUVBZ0UsTUFBQUEsQ0FBQThQLFlBQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBOVAsTUFBQUEsQ0FBQXdRLGVBQUFBLEdBQUEsRUFDQTtFQUFBLENBQUEsRUFFQXhRLE1BQUFBLENBQUF5USxXQUFBQSxHQUFBLFVBQUFqRSxRQUFBQSxFQUFBQTtJQUVBLEtBREEsSUFBQWtFLEtBQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBMVUsQ0FBQUEsR0FBQSxDQUFBLEVBQUFBLENBQUFBLEdBQUFnRSxNQUFBQSxDQUFBZ1EsVUFBQUEsQ0FBQS9ULE1BQUFBLEVBQUFELENBQUFBLEVBQUFBLEVBQ0FnRSxNQUFBQSxDQUFBZ1EsVUFBQUEsQ0FBQWhVLENBQUFBLENBQUFBLENBQUE2SixJQUFBQSxLQUFBMkcsUUFBQUEsS0FDQXhNLE1BQUFBLENBQUFvUSxjQUFBQSxDQUFBcFEsTUFBQUEsQ0FBQWdRLFVBQUFBLENBQUFoVSxDQUFBQSxDQUFBQSxDQUFBQSxFQUNBMFUsS0FBQUEsR0FBQUEsQ0FBQSxDQUFBLENBQUE7SUFHQUEsS0FBQUEsSUFDQWIsYUFBQUEsQ0FBQWMsV0FBQUEsQ0FBQTtNQUNBbkU7SUFBQUEsQ0FBQUEsQ0FBQUEsQ0FDQWxKLElBQUFBLENBQUEsVUFBQWtKLFFBQUFBLEVBQUFBO01BQ0F4TSxNQUFBQSxDQUFBcVAsSUFBQUEsRUFBQUEsRUFDQXJQLE1BQUFBLENBQUFvUSxjQUFBQSxDQUFBNUQsUUFBQUEsQ0FDQTtJQUFBLENBQUEsQ0FBQSxFQUVBeE0sTUFBQUEsQ0FBQXdRLGVBQUFBLEdBQUEsRUFDQTtFQUFBLENBQUEsRUFFQXhRLE1BQUFBLENBQUE0USxPQUFBQSxHQUFBLFVBQUFULElBQUFBLEVBQUFBO0lBQ0EsSUFBQU8sS0FBQUEsR0FBQUEsQ0FBQSxDQUFBO0lBQ0EsS0FBQSxJQUFBMVUsQ0FBQUEsSUFBQWdFLE1BQUFBLENBQUFxUSxnQkFBQUEsQ0FBQUosS0FBQUEsRUFDQWpRLE1BQUFBLENBQUFxUSxnQkFBQUEsQ0FBQUosS0FBQUEsQ0FBQWpVLENBQUFBLENBQUFBLENBQUE2SixJQUFBQSxLQUFBc0ssSUFBQUEsS0FDQU8sS0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0ExUSxNQUFBQSxDQUFBNlEsVUFBQUEsQ0FBQTdRLE1BQUFBLENBQUFxUSxnQkFBQUEsQ0FBQUosS0FBQUEsQ0FBQWpVLENBQUFBLENBQUFBLENBQUFBLENBQUFBO0lBR0EwVSxLQUFBQSxJQUNBYixhQUFBQSxDQUFBaUIsT0FBQUEsQ0FBQTlRLE1BQUFBLENBQUFxUSxnQkFBQUEsQ0FBQXhLLElBQUFBLEVBQUE7TUFDQXNLO0lBQUFBLENBQUFBLENBQUFBLENBQ0E3TSxJQUFBQSxDQUFBLFlBQUE7TUFDQXRELE1BQUFBLENBQUFxUSxnQkFBQUEsQ0FBQUosS0FBQUEsQ0FBQXJULElBQUFBLENBQUE7UUFBQWlKLElBQUFBLEVBQUFzSztNQUFBQSxDQUFBQSxDQUFBQSxFQUNBblEsTUFBQUEsQ0FBQThRLE9BQUFBLENBQUE5USxNQUFBQSxDQUFBc1EsYUFBQUEsRUFBQXRRLE1BQUFBLENBQUFxUSxnQkFBQUEsQ0FBQUosS0FBQUEsQ0FBQWpRLE1BQUFBLENBQUFxUSxnQkFBQUEsQ0FBQUosS0FBQUEsQ0FBQWhVLE1BQUFBLEdBQUEsQ0FBQSxDQUFBLENBQ0E7SUFBQSxDQUFBLENBQUEsRUFFQStELE1BQUFBLENBQUErUSxXQUFBQSxHQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUEvUSxNQUFBQSxDQUFBNlEsVUFBQUEsR0FBQSxVQUFBVixJQUFBQSxFQUFBQTtJQUNBblEsTUFBQUEsQ0FBQThRLE9BQUFBLENBQUE5USxNQUFBQSxDQUFBc1EsYUFBQUEsRUFBQUgsSUFBQUEsQ0FBQUEsRUFDQW5RLE1BQUFBLENBQUFnUixVQUFBQSxDQUFBaFIsTUFBQUEsQ0FBQXVRLGVBQUFBLEVBQUFKLElBQUFBLENBQUFBLEVBQ0FuUSxNQUFBQSxDQUFBK1EsV0FBQUEsR0FBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBL1EsTUFBQUEsQ0FBQWlSLFlBQUFBLEdBQUEsVUFBQWQsSUFBQUEsRUFBQUE7SUFDQW5RLE1BQUFBLENBQUE4USxPQUFBQSxDQUFBOVEsTUFBQUEsQ0FBQXVRLGVBQUFBLEVBQUFKLElBQUFBLENBQUFBLEVBQ0FuUSxNQUFBQSxDQUFBZ1IsVUFBQUEsQ0FBQWhSLE1BQUFBLENBQUFzUSxhQUFBQSxFQUFBSCxJQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBblEsTUFBQUEsQ0FBQThRLE9BQUFBLEdBQUEsVUFBQUksUUFBQUEsRUFBQWYsSUFBQUEsRUFBQUE7SUFDQWUsUUFBQUEsQ0FBQXRVLElBQUFBLENBQUF1VCxJQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBblEsTUFBQUEsQ0FBQWdSLFVBQUFBLEdBQUEsVUFBQUUsUUFBQUEsRUFBQWYsSUFBQUEsRUFBQUE7SUFDQWUsUUFBQUEsQ0FBQUMsTUFBQUEsQ0FBQUQsUUFBQUEsQ0FBQUUsT0FBQUEsQ0FBQWpCLElBQUFBLENBQUFBLEVBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBblEsTUFBQUEsQ0FBQXFSLGlCQUFBQSxHQUFBLFlBQUE7SUFDQXhCLGFBQUFBLENBQUF5QixlQUFBQSxDQUFBdFIsTUFBQUEsQ0FBQXNRLGFBQUFBLENBQUFBLEVBQ0E1TCxTQUFBQSxDQUFBSSxJQUFBQSxDQUFBLGFBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQTlFLE1BQUFBLENBQUF1UixZQUFBQSxHQUFBLFlBQUE7SUFDQSxJQUFBLENBQUF2UixNQUFBQSxDQUFBc1EsYUFBQUEsRUFBQSxPQUFBLEVBQUE7SUFFQSxLQURBLElBQUFrQixPQUFBQSxHQUFBLENBQUEsRUFDQXhWLENBQUFBLEdBQUFnRSxNQUFBQSxDQUFBc1EsYUFBQUEsQ0FBQXJVLE1BQUFBLEdBQUEsQ0FBQSxFQUFBRCxDQUFBQSxHQUFBLENBQUEsRUFBQUEsQ0FBQUEsRUFBQUEsRUFDQXdWLE9BQUFBLElBQUF4VixDQUFBQTtJQUVBLE9BQUF3VixPQUNBO0VBQUEsQ0FFQTtBQUFBLENBQUEsQ0FBQSxFQ3ZHQXJVLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQUFXLFVBQUFBLENBQUEsV0FBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBMEUsU0FBQUEsRUFBQXhFLE9BQUFBLEVBQUFBO0VBRUEsSUFBQXVSLEVBQUFBLEdBQUEsSUFBQUMsVUFBQUEsQ0FBQXpOLElBQUFBLENBQUEwTixNQUFBQSxDQUFBM04sUUFBQUEsQ0FBQUMsSUFBQUEsRUFBQUEsQ0FBQUE7RUFPQSxTQUFBMk4sT0FBQUEsQ0FBQUEsRUFBQUE7SUFDQUgsRUFBQUEsQ0FBQWhELEtBQUFBLENBQUEsNEJBQUEsRUFBQTtNQUNBb0QsU0FBQUEsRUFBQTtRQUNBQyxhQUFBQSxFQUFBLFNBQUFBLENBQUFsTyxXQUFBQSxFQUFBbU8sVUFBQUEsRUFBQUMsV0FBQUEsRUFBQUE7VUErQkEsT0E3QkFoTyxRQUFBQSxDQUNBQyxJQUFBQSxFQUFBQSxDQUNBTCxXQUFBQSxDQUFBcU8sVUFBQUEsQ0FBQUEsQ0FBQSxDQUFBLENBQUEsQ0FDQTNPLElBQUFBLENBQUEsVUFBQTRPLE9BQUFBLEVBQUFBO1lBQ0FoUyxPQUFBQSxDQUFBaVMsWUFBQUEsQ0FBQTtjQUNBQyxXQUFBQSxFQUFBeE8sV0FBQUEsQ0FBQXdPLFdBQUFBO2NBQ0F0RixLQUFBQSxFQUFBbEosV0FBQUEsQ0FBQWtKLEtBQUFBO2NBQ0F1RixRQUFBQSxFQUFBek8sV0FBQUEsQ0FBQXlPLFFBQUFBO2NBQ0FDLGFBQUFBLEVBQUExTyxXQUFBQSxDQUFBME8sYUFBQUE7Y0FDQUo7WUFBQUEsQ0FBQUEsQ0FBQUEsQ0FDQTVPLElBQUFBLENBQ0EsVUFBQUMsUUFBQUEsRUFBQUE7Y0FDQXZELE1BQUFBLENBQUF1UyxLQUFBQSxDQUFBLE9BQUEsRUFBQWhQLFFBQUFBLENBQUEvRCxJQUFBQSxDQUFBQSxFQUNBVyxDQUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBcVMsS0FBQUEsQ0FBQSxNQUFBLENBRUE7WUFBQSxDQUFBLEVBQ0EsWUFBQTtjQUNBeFMsTUFBQUEsQ0FBQXVTLEtBQUFBLENBQUEsT0FBQSxFQUFBO2dCQUNBdEYsT0FBQUEsRUFBQSxjQUFBO2dCQUNBd0YsSUFBQUEsRUFBQTtjQUFBLENBQUEsQ0FFQTtZQUFBLENBQUEsQ0FHQTtVQUFBLENBQUEsQ0FBQSxDQUNBck8sS0FBQUEsQ0FBQSxVQUFBQyxLQUFBQSxFQUFBQTtZQUVBdkYsT0FBQUEsQ0FBQXVGLEtBQUFBLENBQUFBLEtBQUFBLENBQ0E7VUFBQSxDQUFBLENBQUEsRUFBQSxDQUNBLENBQ0E7UUFBQSxDQUFBO1FBSUFxTyxhQUFBQSxFQUFBLFNBQUFBLENBQUFyTyxLQUFBQSxFQUFBQTtVQUdBLElBQUEsNkNBQUEsSUFBQUEsS0FBQUEsQ0FBQW1KLElBQUFBLEVBQ0EsT0FBQW1GLE9BQUFBLENBQUFDLE9BQUFBLEVBQUFBO1VBR0EsSUFBQUMsSUFBQUEsR0FBQXhPLEtBQUFBLENBQUEwTixVQUFBQTtVQUtBLE9BQUEvTixRQUFBQSxDQUFBQyxJQUFBQSxFQUFBQSxDQUFBNk8sb0JBQUFBLENBQUFELElBQUFBLENBQ0E7UUFBQSxDQUFBO1FBQ0FFLE9BQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO1VBR0FwUyxRQUFBQSxDQUFBcUMsY0FBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQWdRLEtBQUFBLENBQUFDLE9BQUFBLEdBQUEsTUFDQTtRQUFBO01BQUEsQ0FBQTtNQUVBQyxnQkFBQUEsRUFBQSxPQUFBO01BQ0FDLGFBQUFBLEVBQUEsQ0FFQW5QLFFBQUFBLENBQUFDLElBQUFBLENBQUFtUCxrQkFBQUEsQ0FBQUMsV0FBQUEsRUFDQXJQLFFBQUFBLENBQUFDLElBQUFBLENBQUFxUCxvQkFBQUEsQ0FBQUQsV0FBQUEsQ0FBQUE7TUFJQUUsVUFBQUEsRUFBQTtJQUFBLENBQUEsQ0FHQTtFQUFBO0VBM0VBdlQsTUFBQUEsQ0FBQXdELEdBQUFBLENBQUEsUUFBQSxFQUFBLFVBQUFnUSxLQUFBQSxFQUFBQTtJQUNBL0IsRUFBQUEsQ0FBQWdDLEtBQUFBLEVBQUFBLEVBQ0E3QixPQUFBQSxFQUNBO0VBQUEsQ0FBQSxDQUFBLEVBMEVBQSxPQUFBQSxFQUNBO0FBQUEsQ0FBQSxDQUFBLEVDbEZBelUsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQVcsVUFBQUEsQ0FBQSxXQUFBLEVBQUEsVUFBQWlDLE1BQUFBLEVBQUEwVCxPQUFBQSxFQUFBQyxRQUFBQSxFQUFBQTtFQUVBM1QsTUFBQUEsQ0FBQTRULE9BQUFBLEdBQUEsWUFBQTtJQUNBNVQsTUFBQUEsQ0FBQTZULFFBQUFBLElBQ0FGLFFBQUFBLENBQUFHLE1BQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQS9ULE1BQUFBLENBQUE2VDtJQUFBQSxDQUFBQSxDQUFBQSxDQUNBdlEsSUFBQUEsQ0FBQSxVQUFBMFEsSUFBQUEsRUFBQUE7TUFDQWhVLE1BQUFBLENBQUE2VCxRQUFBQSxHQUFBLElBQ0E7SUFBQSxDQUFBLENBRUE7RUFBQSxDQUFBLEVBRUFGLFFBQUFBLENBQUFNLEtBQUFBLEVBQUFBLENBQ0EzUSxJQUFBQSxDQUFBLFVBQUFDLFFBQUFBLEVBQUFBO0lBQ0F2RCxNQUFBQSxDQUFBa1UsS0FBQUEsR0FBQTNRLFFBQUFBLENBQUEvRCxJQUNBO0VBQUEsQ0FBQSxDQUFBLEVBRUFRLE1BQUFBLENBQUF3RCxHQUFBQSxDQUFBLGFBQUEsRUFBQSxVQUFBQyxDQUFBQSxFQUFBdVEsSUFBQUEsRUFBQUE7SUFDQWhVLE1BQUFBLENBQUF3SCxNQUFBQSxDQUFBLFlBQUE7TUFDQW1NLFFBQUFBLENBQUFRLE9BQUFBLENBQUFILElBQUFBLENBQUFBLENBQ0ExUSxJQUFBQSxDQUFBLFVBQUFDLFFBQUFBLEVBQUFBO1FBQ0F2RCxNQUFBQSxDQUFBa1UsS0FBQUEsQ0FBQUUsT0FBQUEsQ0FBQTdRLFFBQUFBLENBQUEvRCxJQUFBQSxDQUNBO01BQUEsQ0FBQSxDQUNBO0lBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDM0JBckMsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQVcsVUFBQUEsQ0FBQSxhQUFBLEVBQUEsVUFBQWlDLE1BQUFBLEVBQUEwRSxTQUFBQSxFQUFBeEUsT0FBQUEsRUFBQUE7RUFDQSxNQUFBbVUsU0FBQUEsR0FBQSxDQUNBO0lBQUF4TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUEsU0FBQTtJQUFBQyxNQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUExTyxJQUFBQSxFQUFBLHNCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEscUJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxXQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsZUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLHdCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsWUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxrQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsaUNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsa0NBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsZUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLHlCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLHVDQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLDBCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsYUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxlQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE1BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsWUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGtCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxvQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGdCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsTUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSw2QkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxpQ0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxlQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxzREFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsZUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsV0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxXQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLG1CQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsOENBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsV0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxNQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxXQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLG1DQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsV0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsYUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGdDQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE1BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsMkJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLHVCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLHdDQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLG9CQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsWUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxrQ0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsZUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxXQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxXQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxzQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLDRCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsa0JBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsNENBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsTUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSwwQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsWUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsZUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGdCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsV0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxhQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE1BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsYUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxNQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsTUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxrQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxrQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxhQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSwyQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEscUJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxvQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsaUJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsWUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsV0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSw4Q0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLHdCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsY0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsdUJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsYUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSwyQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxzQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxXQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLDBCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE1BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsNkJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsTUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxhQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEscUJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSwyQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSw4QkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsc0NBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsMEJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsa0NBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsbUNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEseUJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsc0JBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLG1CQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBO0VBV0F0VSxNQUFBQSxDQUFBd1UsV0FBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBLElBQUExVCxJQUFBQTtJQUNBMlQsT0FBQUEsRUFBQSxJQUFBM1QsSUFBQUEsQ0FBQSxJQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQTtJQUNBNFQsUUFBQUEsRUFBQSxJQUFBNVQsSUFBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQTtJQUNBNlQsY0FBQUEsRUFBQTtFQUFBLENBQUEsRUFHQTVVLE1BQUFBLENBQUE2VSxjQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQTdVLE1BQUFBLENBQUE4VSxjQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFFQTlVLE1BQUFBLENBQUErVSxjQUFBQSxHQUFBLFlBQUE7SUFDQS9VLE1BQUFBLENBQUE2VSxjQUFBQSxHQUFBQSxDQUFBN1UsTUFBQUEsQ0FBQTZVLGNBQUFBLEVBQ0E3VSxNQUFBQSxDQUFBZ1YsV0FBQUEsR0FBQWhWLE1BQUFBLENBQUE0RCxXQUFBQSxDQUFBcVIsUUFDQTtFQUFBLENBQUEsRUFFQWpWLE1BQUFBLENBQUFrVixjQUFBQSxHQUFBLFlBQUE7SUFDQWxWLE1BQUFBLENBQUFtVixXQUFBQSxHQUFBLElBQUEsRUFDQW5WLE1BQUFBLENBQUFvVixlQUFBQSxHQUFBLElBQUEsRUFDQXBWLE1BQUFBLENBQUE4VSxjQUFBQSxHQUFBQSxDQUFBOVUsTUFBQUEsQ0FBQThVLGNBQ0E7RUFBQSxDQUFBLEVBRUE5VSxNQUFBQSxDQUFBcVYsYUFBQUEsR0FBQSxVQUFBQyxRQUFBQSxFQUFBQTtJQUNBLElBQUFBLFFBQUFBLEVBQUE7TUFDQSxJQUFBbFMsSUFBQUEsR0FBQXBELE1BQUFBLENBQUE0RCxXQUFBQSxDQUFBRCxHQUFBQTtNQUNBekQsT0FBQUEsQ0FBQW1WLGFBQUFBLENBQUFqUyxJQUFBQSxFQUFBa1MsUUFBQUEsQ0FBQUEsQ0FBQWhTLElBQUFBLENBQ0EsWUFBQTtRQUNBdEQsTUFBQUEsQ0FBQWtWLGNBQUFBLEVBQ0E7TUFBQSxDQUFBLEVBQ0EsWUFBQTtRQUNBLElBQUFLLFVBQUFBLEdBQUFwVixDQUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBOEMsR0FBQUEsQ0FBQSxpQkFBQSxDQUFBO1FBQ0E5QyxDQUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBcVYsT0FBQUEsQ0FBQTtVQUFBQyxlQUFBQSxFQUFBO1FBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQSxDQUFBRCxPQUFBQSxDQUFBO1VBQUFDLGVBQUFBLEVBQUFGO1FBQUFBLENBQUFBLEVBQUEsR0FBQSxDQUNBO01BQUEsQ0FBQSxDQUVBO0lBQUE7RUFDQSxDQUFBLEVBRUF2VixNQUFBQSxDQUFBMFYsY0FBQUEsR0FBQSxVQUFBQyxXQUFBQSxFQUFBUixXQUFBQSxFQUFBQyxlQUFBQSxFQUFBQTtJQUNBLElBQUFELFdBQUFBLEVBQ0EsSUFBQUEsV0FBQUEsSUFBQUMsZUFBQUEsRUFBQTtNQUNBLElBQUFoUyxJQUFBQSxHQUFBcEQsTUFBQUEsQ0FBQTRELFdBQUFBLENBQUFELEdBQUFBO01BQ0F6RCxPQUFBQSxDQUFBd1YsY0FBQUEsQ0FBQXRTLElBQUFBLEVBQUF1UyxXQUFBQSxFQUFBUixXQUFBQSxDQUFBQSxDQUFBN1IsSUFBQUEsQ0FDQSxZQUFBO1FBQ0F0RCxNQUFBQSxDQUFBdVMsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7VUFDQXRGLE9BQUFBLEVBQUEsa0JBQUE7VUFDQXdGLElBQUFBLEVBQUE7UUFBQSxDQUFBLENBQUEsRUFFQXpTLE1BQUFBLENBQUEyVixXQUFBQSxHQUFBLElBQUEsRUFDQTNWLE1BQUFBLENBQUFrVixjQUFBQSxFQUNBO01BQUEsQ0FBQSxFQUNBLFlBQUE7UUFDQWxWLE1BQUFBLENBQUF1UyxLQUFBQSxDQUFBLE9BQUEsRUFBQTtVQUNBdEYsT0FBQUEsRUFBQSx3QkFBQTtVQUNBd0YsSUFBQUEsRUFBQTtRQUFBLENBQUEsQ0FFQTtNQUFBLENBQUEsQ0FFQTtJQUFBLENBQUEsTUFBQTtNQUNBLElBQUE4QyxVQUFBQSxHQUFBcFYsQ0FBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQThDLEdBQUFBLENBQUEsaUJBQUEsQ0FBQTtNQUNBOUMsQ0FBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQXFWLE9BQUFBLENBQUE7UUFBQUMsZUFBQUEsRUFBQTtNQUFBLENBQUEsRUFBQSxHQUFBLENBQUEsQ0FBQUQsT0FBQUEsQ0FBQTtRQUFBQyxlQUFBQSxFQUFBRjtNQUFBQSxDQUFBQSxFQUFBLEdBQUEsQ0FDQTtJQUFBO0VBRUEsQ0FBQSxFQUVBdlYsTUFBQUEsQ0FBQTRWLGNBQUFBLEdBQUEsVUFBQVgsUUFBQUEsRUFBQUE7SUFDQWpWLE1BQUFBLENBQUF1UyxLQUFBQSxDQUFBLFNBQUEsQ0FBQSxFQUNBclMsT0FBQUEsQ0FBQTBWLGNBQUFBLENBQUE1VixNQUFBQSxDQUFBNEQsV0FBQUEsQ0FBQUQsR0FBQUEsRUFBQXNSLFFBQUFBLENBQUFBLENBQUEzUixJQUFBQSxDQUNBLFVBQUFDLFFBQUFBLEVBQUFBO01BQ0F2RCxNQUFBQSxDQUFBdVMsS0FBQUEsQ0FBQSxRQUFBLEVBQUFoUCxRQUFBQSxDQUFBL0QsSUFBQUEsQ0FDQTtJQUFBLENBQUEsRUFDQSxZQUFBO01BQ0FRLE1BQUFBLENBQUF1UyxLQUFBQSxDQUFBLE9BQUEsRUFBQTtRQUNBdEYsT0FBQUEsRUFBQWdJLFFBQUFBLEdBQUEsaUJBQUE7UUFDQXhDLElBQUFBLEVBQUE7TUFBQSxDQUFBLENBRUE7SUFBQSxDQUFBLENBRUE7RUFBQSxDQUFBLEVBRUF6UyxNQUFBQSxDQUFBNlYsVUFBQUEsR0FBQSxZQUFBO0lBQ0E3VixNQUFBQSxDQUFBdVMsS0FBQUEsQ0FBQSxTQUFBLENBQUEsRUFDQXJTLE9BQUFBLENBQUEyVixVQUFBQSxDQUFBO01BQUEsR0FBQTdWLE1BQUFBLENBQUE0RCxXQUFBQTtNQUFBa1MsS0FBQUEsRUFBQTlWLE1BQUFBLENBQUErVixTQUFBQSxDQUFBdFEsR0FBQUEsQ0FBQSxDQUFBO1FBQUE2TztNQUFBQSxDQUFBQSxLQUFBQSxJQUFBQTtJQUFBQSxDQUFBQSxDQUFBQSxDQUFBaFIsSUFBQUEsQ0FDQSxVQUFBQyxRQUFBQSxFQUFBQTtNQUNBdkQsTUFBQUEsQ0FBQXVTLEtBQUFBLENBQUEsUUFBQSxFQUFBaFAsUUFBQUEsQ0FBQS9ELElBQUFBLENBQ0E7SUFBQSxDQUFBLENBRUE7RUFBQSxDQUFBLEVBRUFRLE1BQUFBLENBQUFnVyxhQUFBQSxHQUFBLFVBQUFDLE1BQUFBLEVBQUFBO0lBQ0EsT0FBQTVCLFNBQUFBLENBQUExUyxNQUFBQSxDQUFBLFVBQUF1VSxPQUFBQSxFQUFBQTtNQUNBLE9BQUEsQ0FBQSxDQUFBLElBQUFBLE9BQUFBLENBQUFyUSxJQUFBQSxDQUFBdkssV0FBQUEsRUFBQUEsQ0FBQThWLE9BQUFBLENBQUE2RSxNQUFBQSxDQUFBM2EsV0FBQUEsRUFBQUEsQ0FDQTtJQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQTBFLE1BQUFBLENBQUFtVyxNQUFBQSxDQUFBLGFBQUEsRUFBQSxNQUFBO0lBcEdBblcsTUFBQUEsQ0FBQStWLFNBQUFBLEdBQUEvVixNQUFBQSxDQUFBNEQsV0FBQUEsRUFBQWtTLEtBQUFBLEdBQ0F6QixTQUFBQSxDQUFBMVMsTUFBQUEsQ0FBQSxVQUFBdVUsT0FBQUEsRUFBQUE7TUFDQSxPQUFBbFcsTUFBQUEsQ0FBQTRELFdBQUFBLENBQUFrUyxLQUFBQSxDQUFBTSxRQUFBQSxDQUFBRixPQUFBQSxDQUFBNUIsSUFBQUEsQ0FDQTtJQUFBLENBQUEsQ0FBQSxHQUNBLEVBaUdBO0VBQUEsQ0FBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDcldBblgsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQVcsVUFBQUEsQ0FBQSxZQUFBLEVBQUEsVUFBQWlDLE1BQUFBLEVBQUF5TixPQUFBQSxFQUFBQTtFQUVBek4sTUFBQUEsQ0FBQXFXLGFBQUFBLEdBQUEsQ0FBQSxFQUNBclcsTUFBQUEsQ0FBQXNXLGFBQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBdFcsTUFBQUEsQ0FBQXVXLFFBQUFBLEdBQUEsRUFBQSxFQUVBdlcsTUFBQUEsQ0FBQXdXLE1BQUFBLEdBQUEsQ0FBQSxnQkFBQSxFQUFBLGdCQUFBLEVBQUEsa0JBQUEsQ0FBQSxFQUNBeFcsTUFBQUEsQ0FBQVIsSUFBQUEsR0FBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLEVBRUFXLENBQUFBLENBQUFzQixPQUFBQSxDQUFBLGtCQUFBLEVBQUEsVUFBQWpDLElBQUFBLEVBQUFBO0lBQ0FRLE1BQUFBLENBQUF1VyxRQUFBQSxHQUFBL1csSUFBQUEsQ0FBQXpFLE1BQUFBLENBQUEsQ0FBQXdiLFFBQUFBLEVBQUFFLFFBQUFBLEtBQ0FBLFFBQUFBLENBQUFGLFFBQUFBLEdBQUFFLFFBQUFBLENBQUFGLFFBQUFBLENBQUFHLE1BQUFBLENBQUFILFFBQUFBLENBQUFBLEdBQ0FBLFFBQUFBLEVBQ0EsQ0FBQSxDQUFBLENBQ0E7RUFBQSxDQUFBLENBQUEsRUFFQXZXLE1BQUFBLENBQUEyVyxnQkFBQUEsR0FBQSxNQUFBM1csTUFBQUEsQ0FBQXVXLFFBQUFBLENBQ0E1VSxNQUFBQSxDQUFBaVYsT0FBQUEsSUFBQUEsT0FBQUEsQ0FBQWxWLE1BQUFBLElBQUFrVixPQUFBQSxDQUFBbFYsTUFBQUEsQ0FBQTBVLFFBQUFBLENBQUFwVyxNQUFBQSxDQUFBcVcsYUFBQUEsQ0FBQTdJLElBQUFBLENBQUFBLENBQUFBLEVBRUFyTixDQUFBQSxDQUFBc0IsT0FBQUEsQ0FBQSxjQUFBLEVBQUEsVUFBQWpDLElBQUFBLEVBQUFBO0lBRUEsTUFBQWtDLE1BQUFBLEdBQUFsQyxJQUFBQSxDQUNBbUMsTUFBQUEsQ0FBQUMsS0FBQUEsSUFBQUEsS0FBQUEsQ0FBQTNELE9BQUFBLENBQUFBO0lBRUErQixNQUFBQSxDQUFBZ1EsVUFBQUEsR0FBQXRPLE1BQUFBLENBQ0EzRyxNQUFBQSxDQUFBLFVBQUFpVixVQUFBQSxFQUFBcE8sS0FBQUEsRUFBQUE7TUFNQSxPQUxBb08sVUFBQUEsQ0FBQXBPLEtBQUFBLENBQUE0SyxRQUFBQSxDQUFBQSxHQUdBd0QsVUFBQUEsQ0FBQXBPLEtBQUFBLENBQUE0SyxRQUFBQSxDQUFBQSxDQUFBNVAsSUFBQUEsQ0FBQWdGLEtBQUFBLENBQUFBLEdBRkFvTyxVQUFBQSxDQUFBcE8sS0FBQUEsQ0FBQTRLLFFBQUFBLENBQUFBLEdBQUEsQ0FBQTVLLEtBQUFBLENBQUFBLEVBSUFvTyxVQUNBO0lBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLEVBRUFoUSxNQUFBQSxDQUFBNlcsZ0JBQUFBLEdBQUEsVUFBQWpWLEtBQUFBLEVBQUFBO01BQ0E1QixNQUFBQSxDQUFBcVcsYUFBQUEsR0FBQXpVLEtBQUFBLEVBQ0E1QixNQUFBQSxDQUFBcVcsYUFBQUEsQ0FBQVMsWUFBQUEsR0FBQTtRQUNBQyxnQkFBQUEsRUFBQSxFQUFBO1FBQ0E5SyxhQUFBQSxFQUFBLENBQUEsR0FBQTlLLElBQUFBLENBQUFxSCxFQUFBQTtRQUNBd08sbUJBQUFBLEVBQUFBLENBQUEsQ0FBQTtRQUNBQyxRQUFBQSxFQUFBO1VBQ0FoWixPQUFBQSxFQUFBQSxDQUFBO1FBQUE7TUFBQSxDQUFBLEVBR0ErQixNQUFBQSxDQUFBcVcsYUFBQUEsQ0FBQWEsVUFBQUEsR0FBQTtRQUNBLGtCQUFBLEVBQUEsY0FBQSxHQUFBbFgsTUFBQUEsQ0FBQXFXLGFBQUFBLENBQUFjLEtBQUFBLEdBQUEsR0FBQTtRQUNBLG1CQUFBLEVBQUEsV0FBQTtRQUNBLGlCQUFBLEVBQUEsS0FBQTtRQUNBLHFCQUFBLEVBQUE7TUFBQSxDQUVBO0lBQUEsQ0FBQSxFQUVBblgsTUFBQUEsQ0FBQTZXLGdCQUFBQSxDQUFBN1csTUFBQUEsQ0FBQTBCLE1BQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFFQTFCLE1BQUFBLENBQUF3SCxNQUFBQSxFQUNBO0VBQUEsQ0FBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDMURBckssT0FBQUEsQ0FDQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FFQVcsVUFBQUEsQ0FBQSxlQUFBLEVBQUEsVUFBQWlDLE1BQUFBLEVBQUFvWCxJQUFBQSxFQUFBMVMsU0FBQUEsRUFBQTJTLFlBQUFBLEVBQUFBO0VBQ0EsSUFBQUMsSUFBQUEsR0FBQSxDQUFBO0VBQ0F0WCxNQUFBQSxDQUFBdVgsS0FBQUEsR0FBQSxFQUFBLEVBQ0F2WCxNQUFBQSxDQUFBd1gsTUFBQUEsR0FBQSxFQUFBLEVBQ0F4WCxNQUFBQSxDQUFBeVgsT0FBQUEsR0FBQSxDQUFBLENBQUEsRUFDQXpYLE1BQUFBLENBQUEwWCxjQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBMVgsTUFBQUEsQ0FBQTJYLGNBQUFBLEdBQUEsQ0FBQSxDQUFBLEVBQ0EzWCxNQUFBQSxDQUFBNFgsWUFBQUEsR0FBQUEsS0FBQUMsQ0FBQUEsRUFDQTdYLE1BQUFBLENBQUFxQyxnQkFBQUEsR0FBQSxJQUFBLEVBQ0FyQyxNQUFBQSxDQUFBOFgsa0JBQUFBLEdBQUEsRUFBQSxFQUNBOVgsTUFBQUEsQ0FBQStYLGVBQUFBLEdBQUEsRUFBQSxFQUNBL1gsTUFBQUEsQ0FBQWdZLFNBQUFBLEdBQUFBLENBQUEsQ0FBQTtFQUNBLElBQUFDLFNBQUFBLEdBQUFBLENBQUEsQ0FBQTtFQUVBLE1BQUFDLGdCQUFBQSxHQUFBLENBQ0EsS0FBQSxFQUNBLFNBQUEsRUFDQSxnQkFBQSxFQUNBLFFBQUEsRUFDQSxTQUFBLEVBQ0EsVUFBQSxFQUNBLFNBQUEsRUFDQSxRQUFBLEVBQ0EsZ0JBQUEsQ0FBQTtFQUVBbFksTUFBQUEsQ0FBQW1ZLFVBQUFBLEdBQUEsQ0FDQTtJQUFBQyxHQUFBQSxFQUFBLFFBQUE7SUFBQXBJLFVBQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUE7SUFBQXBELElBQUFBLEVBQUEsbUJBQUE7SUFBQXlMLFNBQUFBLEVBQUFBLENBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQUQsR0FBQUEsRUFBQSxJQUFBO0lBQUFwSSxVQUFBQSxFQUFBLENBQUEsWUFBQSxDQUFBO0lBQUFwRCxJQUFBQSxFQUFBLGdCQUFBO0lBQUF5TCxTQUFBQSxFQUFBQSxDQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFELEdBQUFBLEVBQUEsUUFBQTtJQUFBcEksVUFBQUEsRUFBQSxDQUFBLFFBQUEsRUFBQSxZQUFBLENBQUE7SUFBQXBELElBQUFBLEVBQUEsZ0JBQUE7SUFBQXlMLFNBQUFBLEVBQUFBLENBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQUQsR0FBQUEsRUFBQSxPQUFBO0lBQUFwSSxVQUFBQSxFQUFBLENBQUEsWUFBQSxDQUFBO0lBQUFwRCxJQUFBQSxFQUFBLGlCQUFBO0lBQUF5TCxTQUFBQSxFQUFBQSxDQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFELEdBQUFBLEVBQUEsYUFBQTtJQUFBcEksVUFBQUEsRUFBQSxDQUFBLE9BQUEsQ0FBQTtJQUFBcEQsSUFBQUEsRUFBQSxrQkFBQTtJQUFBeUwsU0FBQUEsRUFBQUEsQ0FBQTtFQUFBLENBQUEsRUFDQTtJQUFBRCxHQUFBQSxFQUFBLFVBQUE7SUFBQXBJLFVBQUFBLEVBQUFrSSxnQkFBQUE7SUFBQXRMLElBQUFBLEVBQUEsbUJBQUE7SUFBQXlMLFNBQUFBLEVBQUFBLENBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQUQsR0FBQUEsRUFBQSxRQUFBO0lBQUFwSSxVQUFBQSxFQUFBa0ksZ0JBQUFBO0lBQUF0TCxJQUFBQSxFQUFBLGlCQUFBO0lBQUF5TCxTQUFBQSxFQUFBQSxDQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFELEdBQUFBLEVBQUEsTUFBQTtJQUFBcEksVUFBQUEsRUFBQWtJLGdCQUFBQTtJQUFBdEwsSUFBQUEsRUFBQSxlQUFBO0lBQUF5TCxTQUFBQSxFQUFBQSxDQUFBO0VBQUEsQ0FBQSxDQUFBLEVBR0FyWSxNQUFBQSxDQUFBc1ksZUFBQUEsR0FBQSxDQUFBQyxJQUFBQSxFQUFBQyxJQUFBQSxLQUNBRCxJQUFBQSxFQUFBRSxJQUFBQSxDQUFBdmIsSUFBQUEsSUFBQXNiLElBQUFBLENBQUFwQyxRQUFBQSxDQUFBbFosSUFBQUEsQ0FBQUEsQ0FBQUEsRUFHQThDLE1BQUFBLENBQUEwWSxPQUFBQSxHQUFBelosQ0FBQUEsSUFBQUE7SUFDQSxJQUVBLENBQUEsS0FGQUEsQ0FBQUEsQ0FBQStMLE9BQUFBLEVBR0E3SyxDQUFBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBd1ksRUFBQUEsQ0FBQSxRQUFBLENBQUEsR0FDQTNZLE1BQUFBLENBQUE0WSxXQUFBQSxFQUFBQSxHQUNBelksQ0FBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQXdZLEVBQUFBLENBQUEsUUFBQSxDQUFBLElBQ0FuWCxVQUFBQSxDQUFBLE1BQUE7TUFDQXJCLENBQUFBLENBQUEsWUFBQSxDQUFBLENBQUEwWSxPQUFBQSxDQUFBLE9BQUEsQ0FBQTtJQUFBLENBQUEsQ0FLQTtFQUFBLENBQUEsRUFJQTdZLE1BQUFBLENBQUE4WSxPQUFBQSxHQUFBLE1BQUE7SUFDQXBVLFNBQUFBLENBQUE4UyxNQUFBQSxDQUFBLE1BQUEsRUFBQSxLQUFBLENBQUEsRUFDQXhYLE1BQUFBLENBQUE0WCxZQUFBQSxHQUFBO01BQ0EvUixJQUFBQSxFQUFBLEVBQUE7TUFDQWtULE9BQUFBLEVBQUEvWSxNQUFBQSxDQUFBNEQsV0FBQUEsQ0FBQUQsR0FBQUE7TUFDQVksSUFBQUEsRUFBQSxJQUFBeEQsSUFBQUE7TUFDQWlZLE1BQUFBLEVBQUEsRUFBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsU0FBQUEsRUFBQUEsQ0FBQSxDQUFBO01BQ0ExTSxRQUFBQSxFQUFBLEVBQUE7TUFDQXdELFVBQUFBLEVBQUEsRUFBQTtNQUNBeE4sUUFBQUEsRUFBQXhDLE1BQUFBLENBQUFxQztJQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUdBckMsTUFBQUEsQ0FBQW1aLGVBQUFBLEdBQUFqYyxJQUFBQSxJQUFBQTtJQUNBOEMsTUFBQUEsQ0FBQW9aLFlBQUFBLEdBQUFsYyxJQUFBO0VBQUEsQ0FBQSxFQUdBOEMsTUFBQUEsQ0FBQXFaLGVBQUFBLEdBQUFDLElBQUFBLElBQUFBO0lBQ0F0WixNQUFBQSxDQUFBd1gsTUFBQUEsR0FBQTlTLFNBQUFBLENBQUE4UyxNQUFBQSxFQUFBQSxDQUFBQSxNQUFBQSxFQUNBOEIsSUFBQUEsR0FDQSxLQUFBLEtBQUFBLElBQUFBLENBQUEzVixHQUFBQSxHQUNBM0QsTUFBQUEsQ0FBQThZLE9BQUFBLEVBQUFBLEdBRUF6QixZQUFBQSxDQUFBa0MsT0FBQUEsQ0FBQUQsSUFBQUEsQ0FBQUEsQ0FDQWhXLElBQUFBLENBQUEsQ0FBQTtNQUFBOUQ7SUFBQUEsQ0FBQUEsS0FBQUE7TUFDQVEsTUFBQUEsQ0FBQTRYLFlBQUFBLEdBQUFwWSxJQUFBQSxFQUNBa0YsU0FBQUEsQ0FBQThTLE1BQUFBLENBQUEsTUFBQSxFQUFBaFksSUFBQUEsQ0FBQW1FLEdBQUFBLENBQUFBLEVBQ0EzRCxNQUFBQSxDQUFBcUMsZ0JBQUFBLEdBQUFyQyxNQUFBQSxDQUFBNFgsWUFBQUEsQ0FBQXBWLFFBQUE7SUFBQSxDQUFBLENBQUEsQ0FFQTRCLEtBQUFBLENBQUFpSixHQUFBQSxJQUFBdk8sT0FBQUEsQ0FBQXVGLEtBQUFBLENBQUFnSixHQUFBQSxDQUFBQSxDQUFBQSxJQUlBck4sTUFBQUEsQ0FBQTRYLFlBQUFBLEdBQUFBLEtBQUFDLENBQUFBLEVBQ0FuVCxTQUFBQSxDQUFBOFMsTUFBQUEsQ0FBQSxNQUFBLEVBQUEsSUFBQSxDQUFBLENBRUE7RUFBQSxDQUFBO0VBb0NBeFgsTUFBQUEsQ0FBQXdaLFdBQUFBLEdBQUFDLE1BQUFDLFNBQUFBLElBQUFBO0lBQ0EsSUFBQUEsU0FBQUEsQ0FBQXpkLE1BQUFBLElBQUEsQ0FBQSxFQUFBO01BQ0EsTUFBQTtRQUFBdUQ7TUFBQUEsQ0FBQUEsR0FBQUEsTUFBQTZYLFlBQUFBLENBQUFtQyxXQUFBQSxDQUFBRSxTQUFBQSxDQUFBQTtNQUNBLE9BQUFsYSxJQUNBO0lBQUE7SUFDQSxPQUFBLEVBQ0E7RUFBQSxDQUFBLEVBR0FRLE1BQUFBLENBQUEyWixxQkFBQUEsR0FBQS9NLElBQUFBLElBQUFBO0lBQ0EsSUFBQTVNLE1BQUFBLENBQUF3WCxNQUFBQSxFQUFBO01BQ0EsTUFBQW9DLEtBQUFBLEdBQUEsSUFBQXZlLE1BQUFBLENBQUEsSUFBQTJFLE1BQUFBLENBQUF3WCxNQUFBQSxHQUFBQSxFQUFBLElBQUEsQ0FBQTtNQUNBLE9BQUE1SyxJQUFBQSxDQUFBMVIsT0FBQUEsQ0FBQTBlLEtBQUFBLEVBQUEsbUNBQUEsQ0FDQTtJQUFBO0lBQ0EsT0FBQWhOLElBQ0E7RUFBQSxDQUFBLEVBR0E1TSxNQUFBQSxDQUFBNlosVUFBQUEsR0FBQTtJQUNBQyxLQUFBQSxFQUFBLE9BQUE7SUFDQXJkLFNBQUFBLEVBQUFBLENBQUE7RUFBQSxDQUFBLEVBR0F1RCxNQUFBQSxDQUFBK1osS0FBQUEsR0FBQTtJQUNBRCxLQUFBQSxFQUFBcFYsU0FBQUEsQ0FBQThTLE1BQUFBLEVBQUFBLENBQUEzYSxJQUFBQSxJQUFBLE1BQUE7SUFDQUosU0FBQUEsRUFBQUEsQ0FBQWlJLFNBQUFBLENBQUE4UyxNQUFBQSxFQUFBQSxDQUFBdUMsS0FBQUEsSUFBQSxNQUFBLEtBQUFyVixTQUFBQSxDQUFBOFMsTUFBQUEsRUFBQUEsQ0FBQXVDO0VBQUFBLENBQUFBLEVBR0EvWixNQUFBQSxDQUFBZ2EsT0FBQUEsR0FBQUYsS0FBQUEsSUFBQUE7SUFDQTlaLE1BQUFBLENBQUErWixLQUFBQSxDQUFBRCxLQUFBQSxLQUFBQSxLQUFBQSxHQUNBOVosTUFBQUEsQ0FBQStaLEtBQUFBLENBQUF0ZCxTQUFBQSxHQUFBQSxDQUFBdUQsTUFBQUEsQ0FBQStaLEtBQUFBLENBQUF0ZCxTQUFBQSxHQUVBdUQsTUFBQUEsQ0FBQStaLEtBQUFBLEdBQUE7TUFDQUQsS0FBQUE7TUFDQXJkLFNBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBR0FpSSxTQUFBQSxDQUFBOFMsTUFBQUEsQ0FBQSxNQUFBLEVBQUFzQyxLQUFBQSxDQUFBQSxFQUNBcFYsU0FBQUEsQ0FBQThTLE1BQUFBLENBQUEsT0FBQSxFQUFBeFgsTUFBQUEsQ0FBQStaLEtBQUFBLENBQUF0ZCxTQUFBQSxHQUFBLE1BQUEsR0FBQSxLQUFBLENBQUEsRUFDQXVELE1BQUFBLENBQUFpYSxRQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUdBamEsTUFBQUEsQ0FBQWthLFlBQUFBLEdBQUFULFlBQUFBO0lBQ0EsQ0FBQSxLQUFBelosTUFBQUEsQ0FBQXVYLEtBQUFBLENBQUF0YixNQUFBQSxJQUNBZ2UsUUFBQUEsRUFBQUEsQ0FBQTNXLElBQUFBLENBQUFpVSxLQUFBQSxJQUFBQTtNQUNBdlgsTUFBQUEsQ0FBQXVYLEtBQUFBLEdBQUF2WCxNQUFBQSxDQUFBdVgsS0FBQUEsQ0FBQWIsTUFBQUEsQ0FBQWEsS0FBQUEsQ0FBQTtJQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsRUFHQXZYLE1BQUFBLENBQUFpYSxRQUFBQSxHQUFBLE1BQUE7SUFDQWphLE1BQUFBLENBQUF1WCxLQUFBQSxHQUFBLEVBQUEsRUFDQXZYLE1BQUFBLENBQUE4WCxrQkFBQUEsR0FBQSxFQUFBLEVBQ0FSLElBQUFBLEdBQUEsQ0FBQSxFQUNBVyxTQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQWdDLFFBQUFBLEVBQUFBLENBQUEzVyxJQUFBQSxDQUFBaVUsS0FBQUEsSUFBQUE7TUFDQXZYLE1BQUFBLENBQUF1WCxLQUFBQSxHQUFBQSxLQUFBQSxFQUNBdlgsTUFBQUEsQ0FBQXdILE1BQUFBLEVBQUE7SUFBQSxDQUFBLENBQ0E7RUFBQSxDQUFBLEVBR0F4SCxNQUFBQSxDQUFBbWEsaUJBQUFBLEdBQUEzWCxRQUFBQSxJQUFBQTtJQUNBeEMsTUFBQUEsQ0FBQTBYLGNBQUFBLENBQUFsVixRQUFBQSxDQUFBZ0wsSUFBQUEsQ0FBQUEsR0FHQXhOLE1BQUFBLENBQUEwWCxjQUFBQSxDQUFBbFYsUUFBQUEsQ0FBQWdMLElBQUFBLENBQUFBLEdBQUFBLENBQUF4TixNQUFBQSxDQUFBMFgsY0FBQUEsQ0FBQWxWLFFBQUFBLENBQUFnTCxJQUFBQSxDQUFBQSxHQUZBeE4sTUFBQUEsQ0FBQTBYLGNBQUFBLENBQUFsVixRQUFBQSxDQUFBZ0wsSUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBSUF4TixNQUFBQSxDQUFBaWEsUUFBQUEsRUFBQTtFQUFBLENBQUEsRUFHQWphLE1BQUFBLENBQUFvYSxpQkFBQUEsR0FBQTVOLFFBQUFBLElBQUFBO0lBQ0F4TSxNQUFBQSxDQUFBMlgsY0FBQUEsQ0FBQW5MLFFBQUFBLENBQUFBLEdBR0F4TSxNQUFBQSxDQUFBMlgsY0FBQUEsQ0FBQW5MLFFBQUFBLENBQUFBLEdBQUFBLENBQUF4TSxNQUFBQSxDQUFBMlgsY0FBQUEsQ0FBQW5MLFFBQUFBLENBQUFBLEdBRkF4TSxNQUFBQSxDQUFBMlgsY0FBQUEsQ0FBQW5MLFFBQUFBLENBQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUlBeE0sTUFBQUEsQ0FBQWlhLFFBQUFBLEVBQUE7RUFBQSxDQUFBLEVBR0FqYSxNQUFBQSxDQUFBcWEsb0JBQUFBLEdBQUEsTUFBQTtJQUNBLE1BQUFySyxVQUFBQSxHQUFBdFYsTUFBQUEsQ0FBQThQLElBQUFBLENBQUF4SyxNQUFBQSxDQUFBMlgsY0FBQUEsQ0FBQUE7TUFDQTJDLGFBQUFBLEdBQ0F0SyxVQUFBQSxDQUFBL1QsTUFBQUEsS0FBQStULFVBQUFBLENBQUFyTyxNQUFBQSxDQUFBNkssUUFBQUEsSUFBQXhNLE1BQUFBLENBQUEyWCxjQUFBQSxDQUFBbkwsUUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBQXZRLE1BQUFBO0lBQ0ErRCxNQUFBQSxDQUFBMlgsY0FBQUEsR0FBQTNYLE1BQUFBLENBQUFnUSxVQUFBQSxDQUFBalYsTUFBQUEsQ0FBQSxDQUFBNEcsTUFBQUEsRUFBQTZLLFFBQUFBLE1BQ0E3SyxNQUFBQSxDQUFBNkssUUFBQUEsQ0FBQUEsR0FBQUEsQ0FBQThOLGFBQUFBLEVBQ0EzWSxNQUFBQSxDQUFBQSxFQUNBLENBQUEsQ0FBQSxDQUFBLEVBQ0EzQixNQUFBQSxDQUFBaWEsUUFBQUEsRUFBQTtFQUFBLENBQUE7RUFHQSxNQUFBQSxRQUFBQSxHQUFBUixNQUFBQSxDQUFBQSxLQUFBQTtJQUNBLElBQUF6WixNQUFBQSxDQUFBOEQsT0FBQUEsSUFBQW1VLFNBQUFBLEVBQUEsT0FBQSxFQUFBO0lBQ0FqWSxNQUFBQSxDQUFBOEQsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0FZLFNBQUFBLENBQUE4UyxNQUFBQSxFQUFBQSxDQUFBQSxNQUFBQSxLQUFBeFgsTUFBQUEsQ0FBQXdYLE1BQUFBLElBQ0E5UyxTQUFBQSxDQUFBOFMsTUFBQUEsQ0FBQSxRQUFBLEVBQUF4WCxNQUFBQSxDQUFBd1gsTUFBQUEsR0FBQXhYLE1BQUFBLENBQUF3WCxNQUFBQSxHQUFBLElBQUEsQ0FBQTtJQUVBLE1BQUE7TUFBQWhZO0lBQUFBLENBQUFBLEdBQUFBLE1BQUE2WCxZQUFBQSxDQUFBNEMsUUFBQUEsQ0FBQTtNQUNBM0MsSUFBQUE7TUFDQWlELE1BQUFBLEVBQUF2YSxNQUFBQSxDQUFBK1osS0FBQUEsQ0FBQUQsS0FBQUE7TUFDQUUsT0FBQUEsRUFBQWhhLE1BQUFBLENBQUErWixLQUFBQSxDQUFBdGQsU0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQTtNQUNBK2QsS0FBQUEsRUFBQSxHQUFBO01BQ0FoRCxNQUFBQSxFQUFBeFgsTUFBQUEsQ0FBQXdYLE1BQUFBO01BQ0FwVixTQUFBQSxFQUFBMUgsTUFBQUEsQ0FBQThQLElBQUFBLENBQUF4SyxNQUFBQSxDQUFBMFgsY0FBQUEsQ0FBQUEsQ0FBQS9WLE1BQUFBLENBQUFhLFFBQUFBLElBQUF4QyxNQUFBQSxDQUFBMFgsY0FBQUEsQ0FBQWxWLFFBQUFBLENBQUFBLENBQUFBO01BQ0F3TixVQUFBQSxFQUFBdFYsTUFBQUEsQ0FBQThQLElBQUFBLENBQUF4SyxNQUFBQSxDQUFBMlgsY0FBQUEsQ0FBQUEsQ0FBQWhXLE1BQUFBLENBQUE2SyxRQUFBQSxJQUFBeE0sTUFBQUEsQ0FBQTJYLGNBQUFBLENBQUFuTCxRQUFBQSxDQUFBQTtJQUFBQSxDQUFBQSxDQUFBQTtJQU9BLE9BTEF4TSxNQUFBQSxDQUFBeWEsS0FBQUEsR0FBQWpiLElBQUFBLENBQUFpYixLQUFBQSxFQUNBamIsSUFBQUEsQ0FBQXhFLE1BQUFBLENBQUFpQixNQUFBQSxHQUFBLEdBQUEsR0FBQWdjLFNBQUFBLEdBQUFBLENBQUEsQ0FBQSxHQUNBWCxJQUFBQSxHQUFBOVgsSUFBQUEsQ0FBQWtiLFFBQUFBLEVBQ0ExYSxNQUFBQSxDQUFBOEQsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0FoRixPQUFBQSxDQUFBQyxHQUFBQSxDQUFBUyxJQUFBQSxDQUFBeEUsTUFBQUEsQ0FBQVksS0FBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxDQUFBLENBQUEsRUFDQTRELElBQUFBLENBQUF4RSxNQUFBO0VBQUEsQ0FBQTtFQUdBZ0YsTUFBQUEsQ0FBQTJhLFdBQUFBLEdBQUFDLE1BQUFBLElBQUE1YSxNQUFBQSxDQUFBdVgsS0FBQUEsQ0FBQXpiLElBQUFBLENBQUEsQ0FBQTtJQUFBNkg7RUFBQUEsQ0FBQUEsS0FBQUEsR0FBQUEsS0FBQWlYLE1BQUFBLENBQUFBLEVBQUEvVSxJQUFBQSxFQUVBN0YsTUFBQUEsQ0FBQTZhLFdBQUFBLEdBQUFwQixNQUFBdmMsSUFBQUEsSUFBQUE7SUFDQSxJQUFBQSxJQUFBQSxDQUFBcEMsS0FBQUEsRUFFQTtNQUNBLE1BQUFnZ0IsbUJBQUFBLEdBQUFBLE1BQUF6RCxZQUFBQSxDQUFBMEQsZUFBQUEsQ0FBQS9hLE1BQUFBLENBQUE0WCxZQUFBQSxFQUFBMWEsSUFBQUEsQ0FBQUE7TUFDQUEsSUFBQUEsQ0FBQThkLFNBQUFBLEdBQUFGLG1CQUFBQSxDQUFBdGIsSUFBQUEsQ0FBQXdiLFNBQUFBLEVBQ0FoYixNQUFBQSxDQUFBd0gsTUFBQUEsRUFDQTtJQUFBLENBQUEsTUFMQXhILE1BQUFBLENBQUFpYixXQUFBQSxDQUFBL2QsSUFBQUEsQ0FLQTtFQUFBLENBQUEsRUFHQThDLE1BQUFBLENBQUE0WSxXQUFBQSxHQUFBYSxZQUFBQTtJQUNBLElBQUF6WixNQUFBQSxDQUFBeVgsT0FBQUEsQ0FBQTNjLEtBQUFBLEVBQUE7TUFDQSxJQUFBa0YsTUFBQUEsQ0FBQWtiLFlBQUFBLEVBQUFBLEVBQ0EsT0FBQW5XLEtBQUFBLENBQUEsR0FBQS9FLE1BQUFBLENBQUF5WCxPQUFBQSxDQUFBM2MsS0FBQUEseUJBQUFBLENBQUFBO01BQ0EsSUFBQWtGLE1BQUFBLENBQUE0WCxZQUFBQSxDQUFBalUsR0FBQUEsRUFLQTtRQUNBLE1BQUF3WCxtQkFBQUEsR0FBQUEsTUFBQTlELFlBQUFBLENBQUErRCxlQUFBQSxDQUFBcGIsTUFBQUEsQ0FBQTRYLFlBQUFBLEVBQUE1WCxNQUFBQSxDQUFBeVgsT0FBQUEsQ0FBQUE7UUFDQXpYLE1BQUFBLENBQUE0WCxZQUFBQSxDQUFBb0IsTUFBQUEsQ0FBQXBjLElBQUFBLENBQUF1ZSxtQkFBQUEsQ0FBQTNiLElBQUFBLENBQ0E7TUFBQSxDQUFBLE1BUEFRLE1BQUFBLENBQUE0WCxZQUFBQSxDQUFBb0IsTUFBQUEsQ0FBQXBjLElBQUFBLENBQUE7UUFBQSxHQUFBb0QsTUFBQUEsQ0FBQXlYO01BQUFBLENBQUFBLENBQUFBLEVBQ0F6WCxNQUFBQSxDQUFBNFgsWUFBQUEsQ0FBQW9CLE1BQUFBLENBQUEvYyxNQUFBQSxJQUFBLEVBQUEsS0FBQSxNQUNBK0QsTUFBQUEsQ0FBQXFiLFVBQUFBLENBQUFyYixNQUFBQSxDQUFBNFgsWUFBQUEsQ0FBQUE7TUFNQTVYLE1BQUFBLENBQUF5WCxPQUFBQSxDQUFBM2MsS0FBQUEsR0FBQSxFQUFBLEVBQ0FrRixNQUFBQSxDQUFBeVgsT0FBQUEsQ0FBQTZELEtBQUFBLEdBQUEsRUFBQSxFQUNBOVosVUFBQUEsQ0FBQSxNQUFBO1FBQ0FyQixDQUFBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBMFksT0FBQUEsQ0FBQSxPQUFBLENBQUE7TUFBQSxDQUFBLENBQUEsRUFFQTdZLE1BQUFBLENBQUF3SCxNQUFBQSxFQWpCQTtJQUFBO0VBaUJBLENBQUEsRUFHQXhILE1BQUFBLENBQUFpYixXQUFBQSxHQUFBL2QsSUFBQUEsSUFBQUE7SUFDQW1hLFlBQUFBLENBQUFrRSxlQUFBQSxDQUFBdmIsTUFBQUEsQ0FBQTRYLFlBQUFBLEVBQUExYSxJQUFBQSxDQUFBQSxDQUFBb0csSUFBQUEsQ0FBQUMsUUFBQUEsSUFBQUE7TUFDQXZELE1BQUFBLENBQUE0WCxZQUFBQSxDQUFBb0IsTUFBQUEsR0FBQWhaLE1BQUFBLENBQUE0WCxZQUFBQSxDQUFBb0IsTUFBQUEsQ0FBQXJYLE1BQUFBLENBQUE3RyxLQUFBQSxJQUFBQSxLQUFBQSxDQUFBNkksR0FBQUEsS0FBQXpHLElBQUFBLENBQUF5RyxHQUFBQSxDQUFBO0lBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxFQUdBM0QsTUFBQUEsQ0FBQXFiLFVBQUFBLEdBQUEsQ0FBQS9CLElBQUFBLEVBQUFrQyxPQUFBQSxLQUFBQTtJQUVBLElBREF4YixNQUFBQSxDQUFBeWIsTUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0FuQyxJQUFBQSxDQUFBTixNQUFBQSxDQUFBL2MsTUFBQUEsSUFBQSxFQUFBLElBQUFxZCxJQUFBQSxDQUFBelQsSUFBQUEsSUFBQXlULElBQUFBLENBQUF0SixVQUFBQSxDQUFBL1QsTUFBQUEsR0FBQSxDQUFBO01BQ0EsSUFBQXFkLElBQUFBLENBQUEzVixHQUFBQSxJQUFBLEtBQUEsS0FBQTJWLElBQUFBLENBQUEzVixHQUFBQSxFQUFBO1FBQ0EsSUFBQStYLE9BQUFBLEdBQUFGLE9BQUFBLElBQUFsQyxJQUFBQTtRQUFBQSxPQUNBb0MsT0FBQUEsQ0FBQS9YLEdBQUFBLEVBQ0EwVCxZQUFBQSxDQUFBc0UsVUFBQUEsQ0FBQTtVQUFBLEdBQ0FELE9BQUFBO1VBQ0EvWCxHQUFBQSxFQUFBMlYsSUFBQUEsQ0FBQTNWO1FBQUFBLENBQUFBLENBQUFBLENBQ0FMLElBQUFBLENBQUEsQ0FBQTtVQUFBOUQ7UUFBQUEsQ0FBQUEsS0FBQUE7VUFDQVEsTUFBQUEsQ0FBQXliLE1BQUFBLEdBQUFBLENBQUEsQ0FBQTtVQUNBLE1BQUFHLFNBQUFBLEdBQUE1YixNQUFBQSxDQUFBdVgsS0FBQUEsQ0FBQXNFLFNBQUFBLENBQUF2QyxJQUFBQSxJQUFBQSxJQUFBQSxDQUFBM1YsR0FBQUEsS0FBQW5FLElBQUFBLENBQUFtRSxHQUFBQSxDQUFBQTtVQUNBM0QsTUFBQUEsQ0FBQXVYLEtBQUFBLENBQUFxRSxTQUFBQSxDQUFBQSxHQUFBcGMsSUFBQUEsRUFDQVEsTUFBQUEsQ0FBQTRYLFlBQUFBLEdBQUFwWSxJQUFBO1FBQUEsQ0FBQSxFQUNBVixPQUFBQSxDQUFBdUYsS0FBQUEsQ0FDQTtNQUFBLENBQUEsTUFDQWdULFlBQUFBLENBQUF5RSxVQUFBQSxDQUFBOWIsTUFBQUEsQ0FBQTRELFdBQUFBLEVBQUE1RCxNQUFBQSxDQUFBNFgsWUFBQUEsQ0FBQUEsQ0FBQXRVLElBQUFBLENBQUEsQ0FBQTtRQUFBOUQ7TUFBQUEsQ0FBQUEsS0FBQUE7UUFDQSxLQUFBLEtBQUFrRixTQUFBQSxDQUFBOFMsTUFBQUEsRUFBQUEsQ0FBQThCLElBQUFBLElBQ0E1VSxTQUFBQSxDQUFBOFMsTUFBQUEsQ0FBQSxNQUFBLEVBQUFoWSxJQUFBQSxDQUFBbUUsR0FBQUEsQ0FBQUEsRUFFQTNELE1BQUFBLENBQUE0WCxZQUFBQSxDQUFBalUsR0FBQUEsR0FBQW5FLElBQUFBLENBQUFtRSxHQUFBQSxFQUNBM0QsTUFBQUEsQ0FBQWlhLFFBQUFBLEVBQUFBLEVBQ0FqYSxNQUFBQSxDQUFBeWIsTUFBQUEsR0FBQUEsQ0FBQSxDQUFBO01BQUEsQ0FBQSxFQUNBM2MsT0FBQUEsQ0FBQXVGLEtBQUFBLENBQUFBO0lBQUFBLE9BR0EzSixNQUFBQSxDQUFBcWhCLE1BQUFBLENBQUEvYixNQUFBQSxDQUFBNFgsWUFBQUEsRUFBQTRELE9BQUFBLENBQ0E7RUFBQSxDQUFBLEVBR0F4YixNQUFBQSxDQUFBZ2MsVUFBQUEsR0FBQTFDLElBQUFBLElBQUFBO0lBQ0FBLElBQUFBLENBQUEzVixHQUFBQSxJQUdBM0QsTUFBQUEsQ0FBQWdZLFNBQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBaFksTUFBQUEsQ0FBQThYLGtCQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQWtELElBQUFBLENBQUEzVixHQUFBQSxDQUFBQSxHQUNBM0QsTUFBQUEsQ0FBQStYLGVBQUFBLEdBQUEvWCxNQUFBQSxDQUFBOFgsa0JBQUFBLEdBRUE5WCxNQUFBQSxDQUFBK1gsZUFBQUEsR0FBQSxDQUFBdUIsSUFBQUEsQ0FBQTNWLEdBQUFBLENBQUFBLEVBRUF4RCxDQUFBQSxDQUFBLHFCQUFBLENBQUEsQ0FBQXFTLEtBQUFBLENBQUEsTUFBQSxDQUFBLElBUkF4UyxNQUFBQSxDQUFBNFgsWUFBQUEsR0FBQSxJQVNBO0VBQUEsQ0FBQSxFQUdBNVgsTUFBQUEsQ0FBQWljLFdBQUFBLEdBQUEsTUFBQTtJQUNBamMsTUFBQUEsQ0FBQStYLGVBQUFBLEdBQUEvWCxNQUFBQSxDQUFBOFgsa0JBQUFBLEVBQ0E5WCxNQUFBQSxDQUFBZ1ksU0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0E3WCxDQUFBQSxDQUFBLHFCQUFBLENBQUEsQ0FBQXFTLEtBQUFBLENBQUEsTUFBQSxDQUFBO0VBQUEsQ0FBQSxFQUdBeFMsTUFBQUEsQ0FBQWtjLGlCQUFBQSxHQUFBekMsWUFBQUE7SUFDQSxNQUFBbFcsUUFBQUEsR0FBQUEsTUFBQThULFlBQUFBLENBQUE4RSxVQUFBQSxDQUFBbmMsTUFBQUEsQ0FBQThYLGtCQUFBQSxDQUFBQTtJQUNBOVgsTUFBQUEsQ0FBQWlhLFFBQUFBLEVBQUFBLEVBQ0FqYSxNQUFBQSxDQUFBcVosZUFBQUEsQ0FBQTlWLFFBQUFBLENBQUEvRCxJQUFBQSxDQUFBQSxFQUNBUSxNQUFBQSxDQUFBOFgsa0JBQUFBLEdBQUEsRUFBQSxFQUNBOVgsTUFBQUEsQ0FBQWdZLFNBQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBN1gsQ0FBQUEsQ0FBQSxvQkFBQSxDQUFBLENBQUFxUyxLQUFBQSxDQUFBLE1BQUEsQ0FBQTtFQUFBLENBQUEsRUFHQXhTLE1BQUFBLENBQUFvYyxrQkFBQUEsR0FBQTNDLFlBQUFBO0lBQ0EsS0FBQSxNQUFBbUIsTUFBQUEsSUFBQTVhLE1BQUFBLENBQUErWCxlQUFBQSxFQUFBQSxNQUNBVixZQUFBQSxDQUFBMkUsVUFBQUEsQ0FBQXBCLE1BQUFBLENBQUFBO0lBRUE1YSxNQUFBQSxDQUFBaWEsUUFBQUEsRUFBQUEsRUFDQWphLE1BQUFBLENBQUE0WCxZQUFBQSxHQUFBLElBQUEsRUFDQTVYLE1BQUFBLENBQUErWCxlQUFBQSxHQUFBLEVBQUEsRUFDQS9YLE1BQUFBLENBQUE4WCxrQkFBQUEsR0FBQSxFQUFBLEVBQ0E5WCxNQUFBQSxDQUFBZ1ksU0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0E3WCxDQUFBQSxDQUFBLHFCQUFBLENBQUEsQ0FBQXFTLEtBQUFBLENBQUEsTUFBQSxDQUFBO0VBQUEsQ0FBQSxFQUdBeFMsTUFBQUEsQ0FBQXFjLHFCQUFBQSxHQUFBL0MsSUFBQUEsSUFBQUE7SUFDQXRaLE1BQUFBLENBQUE4WCxrQkFBQUEsQ0FBQTFCLFFBQUFBLENBQUFrRCxJQUFBQSxDQUFBM1YsR0FBQUEsQ0FBQUEsR0FDQTNELE1BQUFBLENBQUE4WCxrQkFBQUEsR0FBQTlYLE1BQUFBLENBQUE4WCxrQkFBQUEsQ0FBQW5XLE1BQUFBLENBQ0EyYSxpQkFBQUEsSUFBQUEsaUJBQUFBLEtBQUFoRCxJQUFBQSxDQUFBM1YsR0FBQUEsQ0FBQUEsR0FHQTNELE1BQUFBLENBQUE4WCxrQkFBQUEsQ0FBQWxiLElBQUFBLENBQUEwYyxJQUFBQSxDQUFBM1YsR0FBQUEsQ0FDQTtFQUFBLENBQUEsRUFHQTNELE1BQUFBLENBQUF5QyxXQUFBQSxHQUFBLENBQUE2VyxJQUFBQSxFQUFBOVcsUUFBQUEsS0FBQUE7SUFDQThXLElBQUFBLENBQUE5VyxRQUFBQSxHQUFBQSxRQUFBQSxDQUFBZ0wsSUFBQUEsRUFDQXhOLE1BQUFBLENBQUFxQyxnQkFBQUEsR0FBQUcsUUFBQUEsQ0FBQWdMLElBQUFBO0lBQ0EsTUFBQStPLGVBQUFBLEdBQUFqRCxJQUFBQSxDQUFBdEosVUFBQUEsQ0FBQW9CLE9BQUFBLENBQUEsYUFBQSxDQUFBO0lBQ0EsSUFBQSxLQUFBNU8sUUFBQUEsQ0FBQWdMLElBQUFBLElBQUErTyxlQUFBQSxHQUFBLENBQUEsR0FDQWpELElBQUFBLENBQUF0SixVQUFBQSxDQUFBcFQsSUFBQUEsQ0FBQSxhQUFBLENBQUEsR0FDQSxJQUFBLEtBQUE0RixRQUFBQSxDQUFBZ0wsSUFBQUEsSUFBQStPLGVBQUFBLElBQUEsQ0FBQSxJQUNBakQsSUFBQUEsQ0FBQXRKLFVBQUFBLENBQUFtQixNQUFBQSxDQUFBb0wsZUFBQUEsRUFBQSxDQUFBLENBQUEsRUFFQXZjLE1BQUFBLENBQUFxYixVQUFBQSxDQUFBL0IsSUFBQUEsRUFBQTtNQUNBdEosVUFBQUEsRUFBQXNKLElBQUFBLENBQUF0SixVQUFBQTtNQUNBeE4sUUFBQUEsRUFBQUEsUUFBQUEsQ0FBQWdMO0lBQUFBLENBQUFBLENBQ0E7RUFBQSxDQUFBLEVBR0F4TixNQUFBQSxDQUFBd2MsYUFBQUEsR0FBQSxDQUFBbEQsSUFBQUEsRUFBQW1ELFVBQUFBLEtBQUFBO0lBQ0FuRCxJQUFBQSxDQUFBbUQsVUFBQUEsR0FBQUEsVUFBQUEsRUFDQXpjLE1BQUFBLENBQUFxYixVQUFBQSxDQUFBL0IsSUFBQUEsRUFBQTtNQUNBbUQ7SUFBQUEsQ0FBQUEsQ0FDQTtFQUFBLENBQUEsRUFHQXpjLE1BQUFBLENBQUEwYyxZQUFBQSxHQUFBLENBQUFwRCxJQUFBQSxFQUFBcUQsU0FBQUEsS0FBQUE7SUFDQXJELElBQUFBLENBQUFxRCxTQUFBQSxHQUFBQSxTQUFBQSxFQUNBM2MsTUFBQUEsQ0FBQXFiLFVBQUFBLENBQUEvQixJQUFBQSxFQUFBO01BQ0FxRDtJQUFBQSxDQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUdBM2MsTUFBQUEsQ0FBQTRjLFdBQUFBLEdBQUEsQ0FBQXRELElBQUFBLEVBQUE5TSxRQUFBQSxLQUFBQTtJQUNBLE1BQUFxUSxhQUFBQSxHQUFBdkQsSUFBQUEsQ0FBQXRKLFVBQUFBLENBQUFvQixPQUFBQSxDQUFBNUUsUUFBQUEsQ0FBQUE7SUFDQXFRLGFBQUFBLElBQUEsQ0FBQSxHQUNBdkQsSUFBQUEsQ0FBQXRKLFVBQUFBLENBQUFtQixNQUFBQSxDQUFBMEwsYUFBQUEsRUFBQSxDQUFBLENBQUEsR0FFQXZELElBQUFBLENBQUF0SixVQUFBQSxDQUFBcFQsSUFBQUEsQ0FBQTRQLFFBQUFBLENBQUFBLEVBRUF4TSxNQUFBQSxDQUFBcWIsVUFBQUEsQ0FBQS9CLElBQUFBLEVBQUE7TUFDQXRKLFVBQUFBLEVBQUFzSixJQUFBQSxDQUFBdEo7SUFBQUEsQ0FBQUEsQ0FDQTtFQUFBLENBQUEsRUFHQWhRLE1BQUFBLENBQUFrYixZQUFBQSxHQUFBLE1BQ0FsYixNQUFBQSxDQUFBNFgsWUFBQUEsSUFDQTVYLE1BQUFBLENBQUF5WCxPQUFBQSxDQUFBM2MsS0FBQUEsSUFDQTJJLENBQUFBLENBQUFnVixJQUFBQSxDQUNBelksTUFBQUEsQ0FBQTRYLFlBQUFBLENBQUFvQixNQUFBQSxFQUNBOEQsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQWhpQixLQUFBQSxDQUFBaWlCLG1CQUFBQSxFQUFBQSxJQUFBL2MsTUFBQUEsQ0FBQXlYLE9BQUFBLENBQUEzYyxLQUFBQSxDQUFBaWlCLG1CQUFBQSxFQUFBQSxDQUFBQSxFQUdBL2MsTUFBQUEsQ0FBQWdkLFNBQUFBLEdBQUF2SyxJQUFBQSxJQUFBQTtJQUNBelMsTUFBQUEsQ0FBQWlkLGFBQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBNUYsWUFBQUEsQ0FBQTJGLFNBQUFBLENBQUFoZCxNQUFBQSxDQUFBNFgsWUFBQUEsRUFBQW5GLElBQUFBLENBQUFBLENBQ0FuUCxJQUFBQSxDQUFBLE1BQUE7TUFDQXRELE1BQUFBLENBQUFxWixlQUFBQSxDQUFBclosTUFBQUEsQ0FBQTRYLFlBQUFBLENBQUFBLEVBQ0E1WCxNQUFBQSxDQUFBaWQsYUFBQUEsR0FBQUEsQ0FBQSxDQUFBO0lBQUEsQ0FBQSxDQUFBLENBRUE3WSxLQUFBQSxDQUFBaUosR0FBQUEsSUFBQUE7TUFDQXZPLE9BQUFBLENBQUF1RixLQUFBQSxDQUFBZ0osR0FBQUEsQ0FBQUEsRUFDQXJOLE1BQUFBLENBQUFpZCxhQUFBQSxHQUFBQSxDQUFBLENBQUE7SUFBQSxDQUFBLENBQ0E7RUFBQSxDQUFBLEVBR0FqZCxNQUFBQSxDQUFBa2QsV0FBQUEsR0FBQXJmLEdBQUFBLElBQUFBO0lBQ0EsSUFBQUEsR0FBQUEsQ0FBQXVZLFFBQUFBLENBQUEsYUFBQSxDQUFBLEVBQUE7TUFDQSxNQUFBK0csT0FBQUEsR0FBQXRmLEdBQUFBLENBQUF1ZixLQUFBQSxDQUFBLGVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBQyxJQUFBQSxFQUFBQTtNQUNBLE9BQUFqRyxJQUFBQSxDQUFBa0csa0JBQUFBLENBQUEsaUNBQUFILE9BQUFBLEVBQUFBLENBQ0E7SUFBQTtJQUFBLElBQUF0ZixHQUFBQSxDQUFBdVksUUFBQUEsQ0FBQSxVQUFBLENBQUEsRUFBQTtNQUNBLE1BQUErRyxPQUFBQSxHQUFBdGYsR0FBQUEsQ0FBQXVmLEtBQUFBLENBQUEscUJBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBQyxJQUFBQSxFQUFBQTtNQUNBLE9BQUFqRyxJQUFBQSxDQUFBa0csa0JBQUFBLENBQUEsaUNBQUFILE9BQUFBLEVBQUFBLENBQ0E7SUFBQTtJQUFBLElBQUF0ZixHQUFBQSxDQUFBdVksUUFBQUEsQ0FBQSxXQUFBLENBQUEsRUFBQTtNQUNBLE1BQUErRyxPQUFBQSxHQUFBdGYsR0FBQUEsQ0FBQXVmLEtBQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBQyxJQUFBQSxFQUFBQTtNQUNBLE9BQUFqRyxJQUFBQSxDQUFBa0csa0JBQUFBLENBQUEsa0NBQUFILE9BQUFBLEVBQUFBLENBQ0E7SUFBQTtJQUFBLElBQUF0ZixHQUFBQSxDQUFBdVksUUFBQUEsQ0FBQSxjQUFBLENBQUEsRUFBQTtNQUNBLE1BQUErRyxPQUFBQSxHQUFBdGYsR0FBQUEsQ0FBQXVmLEtBQUFBLENBQUEsaUJBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBQyxJQUFBQSxFQUFBQTtNQUNBLE9BQUFqRyxJQUFBQSxDQUFBa0csa0JBQUFBLENBQUEsd0NBQUFILE9BQUFBLEVBQUFBLENBQ0E7SUFBQTtJQUNBLE9BQUEvRixJQUFBQSxDQUFBa0csa0JBQUFBLENBQUF6ZixHQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUlBbUMsTUFBQUEsQ0FBQW1XLE1BQUFBLENBQUEsYUFBQSxFQWxWQXNELFlBQUFBO0lBQ0EsSUFBQSxDQUFBelosTUFBQUEsQ0FBQTRELFdBQUFBLEVBQUE7SUFDQSxNQUFBO01BQUFwRSxJQUFBQSxFQUFBNEM7SUFBQUEsQ0FBQUEsR0FBQUEsTUFBQWlWLFlBQUFBLENBQUFrRyxZQUFBQSxFQUFBQTtJQUNBdmQsTUFBQUEsQ0FBQW9DLFNBQUFBLEdBQUFBLFNBQUFBLEVBVkFwQyxNQUFBQSxDQUFBMFgsY0FBQUEsR0FBQSxDQUFBLENBQUE7SUFZQSxNQUFBO01BQUFsWSxJQUFBQSxFQUFBd1E7SUFBQUEsQ0FBQUEsR0FBQUEsTUFBQXFILFlBQUFBLENBQUF0SCxhQUFBQSxFQUFBQTtJQUNBL1AsTUFBQUEsQ0FBQWdRLFVBQUFBLEdBQUFBLFVBQUFBLEVBVEFoUSxNQUFBQSxDQUFBMlgsY0FBQUEsR0FBQSxDQUFBLENBQUE7SUFXQSxNQUFBO01BQUFuWSxJQUFBQSxFQUFBZ2U7SUFBQUEsQ0FBQUEsR0FBQUEsTUFBQW5HLFlBQUFBLENBQUFvRyxvQkFBQUEsRUFBQUE7SUFDQXpkLE1BQUFBLENBQUF3ZCxhQUFBQSxHQUFBQSxhQUFBQSxDQUFBemlCLE1BQUFBLENBQUEsQ0FBQUMsTUFBQUEsRUFBQUE7TUFBQTJJLEdBQUFBO01BQUE4VztJQUFBQSxDQUFBQSxNQUNBemYsTUFBQUEsQ0FBQTJJLEdBQUFBLENBQUFuQixRQUFBQSxDQUFBQSxHQUFBQSxDQUFBeEgsTUFBQUEsQ0FBQTJJLEdBQUFBLENBQUFuQixRQUFBQSxDQUFBQSxJQUFBLENBQUEsSUFBQWlZLEtBQUFBLEVBQ0F6ZixNQUFBQSxDQUFBQSxFQUNBLENBQUEsQ0FBQSxDQUFBO0lBQ0EsTUFBQTtNQUFBd0UsSUFBQUEsRUFBQWtlO0lBQUFBLENBQUFBLEdBQUFBLE1BQUFyRyxZQUFBQSxDQUFBc0csb0JBQUFBLEVBQUFBO0lBQ0EzZCxNQUFBQSxDQUFBMGQsYUFBQUEsR0FBQUEsYUFBQUEsQ0FBQTNpQixNQUFBQSxDQUFBLENBQUFDLE1BQUFBLEVBQUFBO01BQUEySSxHQUFBQTtNQUFBOFc7SUFBQUEsQ0FBQUEsTUFDQXpmLE1BQUFBLENBQUEySSxHQUFBQSxDQUFBQSxHQUFBOFcsS0FBQUEsRUFDQXpmLE1BQUFBLENBQUFBLEVBQ0EsQ0FBQSxDQUFBLENBQUEsRUFDQTBKLFNBQUFBLENBQUE4UyxNQUFBQSxFQUFBQSxDQUFBOEIsSUFBQUEsSUFDQXRaLE1BQUFBLENBQUFxWixlQUFBQSxDQUFBO01BQUExVixHQUFBQSxFQUFBZSxTQUFBQSxDQUFBOFMsTUFBQUEsRUFBQUEsQ0FBQThCO0lBQUFBLENBQUFBLENBQUFBLEVBRUF0WixNQUFBQSxDQUFBd1gsTUFBQUEsR0FBQTlTLFNBQUFBLENBQUE4UyxNQUFBQSxFQUFBQSxDQUFBQSxNQUFBQSxJQUFBLEVBQUEsRUFDQXhYLE1BQUFBLENBQUFpYSxRQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQTZUQTtBQUFBLENBQUEsQ0FBQSxFQy9iQTljLE9BQUFBLENBQ0FDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBRUFXLFVBQUFBLENBQUEsb0JBQUEsRUFBQSxVQUFBaUMsTUFBQUEsRUFBQXFYLFlBQUFBLEVBQUFuWCxPQUFBQSxFQUFBQTtFQUNBRixNQUFBQSxDQUFBd0QsR0FBQUEsQ0FBQSxPQUFBLEVBQUFDLENBQUFBLElBQUFBO0lBQ0F6RCxNQUFBQSxDQUFBNEQsV0FBQUEsQ0FBQWdhLEtBQUFBLElBQ0FDLFFBQUFBLEVBQ0E7RUFBQSxDQUFBLENBQUEsRUFHQTdkLE1BQUFBLENBQUErWixLQUFBQSxHQUFBO0lBQ0FELEtBQUFBLEVBQUEsVUFBQTtJQUNBbkwsT0FBQUEsRUFBQUEsQ0FBQTtFQUFBLENBQUEsRUFHQTNPLE1BQUFBLENBQUFnYSxPQUFBQSxHQUFBRixLQUFBQSxJQUFBQTtJQUNBOVosTUFBQUEsQ0FBQStaLEtBQUFBLENBQUFELEtBQUFBLEtBQUFBLEtBQUFBLEdBQ0E5WixNQUFBQSxDQUFBK1osS0FBQUEsQ0FBQXBMLE9BQUFBLEdBQUFBLENBQUEzTyxNQUFBQSxDQUFBK1osS0FBQUEsQ0FBQXBMLE9BQUFBLEdBRUEzTyxNQUFBQSxDQUFBK1osS0FBQUEsR0FBQTtNQUNBRCxLQUFBQTtNQUNBbkwsT0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBRUE7RUFBQSxDQUFBLEVBR0EzTyxNQUFBQSxDQUFBOGQsUUFBQUEsR0FBQSxNQUFBO0lBQ0E5ZCxNQUFBQSxDQUFBOEQsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0F1VCxZQUFBQSxDQUFBeUcsUUFBQUEsRUFBQUEsQ0FBQXhhLElBQUFBLENBQUFDLFFBQUFBLElBQUFBO01BQ0F2RCxNQUFBQSxDQUFBK2QsS0FBQUEsR0FBQXhhLFFBQUFBLENBQUEvRCxJQUFBQSxDQUFBdEUsT0FBQUEsQ0FBQSxJQUFBLEVBQUEsT0FBQSxDQUFBLEVBQ0E4RSxNQUFBQSxDQUFBOEQsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBO0lBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBOUQsTUFBQUEsQ0FBQThkLFFBQUFBLEVBQUFBLEVBRUF6RyxZQUFBQSxDQUFBMkcsUUFBQUEsRUFBQUEsQ0FBQTFhLElBQUFBLENBQUFDLFFBQUFBLElBQUFBO0lBQ0F2RCxNQUFBQSxDQUFBaWUsTUFBQUEsR0FBQTFhLFFBQUFBLENBQUEvRCxJQUFBQSxFQUNBVixPQUFBQSxDQUFBQyxHQUFBQSxDQUFBaUIsTUFBQUEsQ0FBQWllLE1BQUFBLENBQUE7RUFBQSxDQUFBLENBQUE7RUFHQSxNQUFBSixRQUFBQSxHQUFBQSxDQUFBLEtBQUE7SUFDQTdkLE1BQUFBLENBQUE4RCxPQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQTVELE9BQUFBLENBQUEyZCxRQUFBQSxFQUFBQSxDQUFBdmEsSUFBQUEsQ0FBQUMsUUFBQUEsSUFBQUE7TUFDQXZELE1BQUFBLENBQUFrZSxLQUFBQSxHQUFBM2EsUUFBQUEsQ0FBQS9ELElBQUFBLENBQUFtQyxNQUFBQSxDQUFBeUIsSUFBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsQ0FBQXdhLEtBQUFBLENBQUFBLEVBQ0E1ZCxNQUFBQSxDQUFBOEQsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBO0lBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQTtFQUdBOUQsTUFBQUEsQ0FBQW1lLFNBQUFBLEdBQUEvYSxJQUFBQSxJQUFBQTtJQUNBcEQsTUFBQUEsQ0FBQThELE9BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBNUQsT0FBQUEsQ0FBQWllLFNBQUFBLENBQUEvYSxJQUFBQSxDQUFBTyxHQUFBQSxDQUFBQSxDQUFBTCxJQUFBQSxDQUFBQyxRQUFBQSxJQUFBQTtNQUNBc2EsUUFBQUEsRUFBQTtJQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsRUFHQTdkLE1BQUFBLENBQUFvZSxXQUFBQSxHQUFBaGIsSUFBQUEsSUFBQUE7SUFDQWlVLFlBQUFBLENBQUErRyxXQUFBQSxFQUFBQSxDQUFBOWEsSUFBQUEsQ0FBQUMsUUFBQUEsSUFBQUE7TUFDQXZELE1BQUFBLENBQUFpZSxNQUFBQSxHQUFBMWEsUUFBQUEsQ0FBQS9ELElBQUFBLEVBQ0FWLE9BQUFBLENBQUFDLEdBQUFBLENBQUFpQixNQUFBQSxDQUFBaWUsTUFBQUEsQ0FBQTtJQUFBLENBQUEsQ0FDQTtFQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUM5REE5Z0IsT0FBQUEsQ0FDQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FFQVcsVUFBQUEsQ0FBQSxtQkFBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBcWUsWUFBQUEsRUFBQWhILFlBQUFBLEVBQUFuWCxPQUFBQSxFQUFBQTtFQVNBRixNQUFBQSxDQUFBd0QsR0FBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQTtJQUNBeEQsTUFBQUEsQ0FBQTRELFdBQUFBLENBQUFnYSxLQUFBQSxLQVJBNWQsTUFBQUEsQ0FBQThELE9BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBNUQsT0FBQUEsQ0FBQTJkLFFBQUFBLEVBQUFBLENBQUF2YSxJQUFBQSxDQUFBQyxRQUFBQSxJQUFBQTtNQUNBdkQsTUFBQUEsQ0FBQWtlLEtBQUFBLEdBQUEzYSxRQUFBQSxDQUFBL0QsSUFBQUEsQ0FBQW1DLE1BQUFBLENBQUF5QixJQUFBQSxJQUFBQSxDQUFBQSxJQUFBQSxDQUFBd2EsS0FBQUEsQ0FBQUEsRUFDQTVkLE1BQUFBLENBQUE4RCxPQUFBQSxHQUFBQSxDQUFBLENBQUE7SUFBQSxDQUFBLENBQUEsQ0FPQTtFQUFBLENBQUEsQ0FBQSxFQUdBdWEsWUFBQUEsQ0FBQUMsSUFBQUEsSUFDQWpILFlBQUFBLENBQUFrSCxPQUFBQSxDQUFBRixZQUFBQSxDQUFBQyxJQUFBQSxDQUFBQSxDQUFBaGIsSUFBQUEsQ0FBQUMsUUFBQUEsSUFBQUE7SUFDQXZELE1BQUFBLENBQUFzZSxJQUFBQSxHQUFBL2EsUUFBQUEsQ0FBQS9ELElBQUFBLEVBQ0FWLE9BQUFBLENBQUFDLEdBQUFBLENBQUFpQixNQUFBQSxDQUFBc2UsSUFBQUEsQ0FBQTtFQUFBLENBQUEsQ0FHQTtBQUFBLENBQUEsQ0FBQSxFQ3hCQW5oQixPQUFBQSxDQUNBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUVBVyxVQUFBQSxDQUFBLG9CQUFBLEVBQUEsVUFBQWlDLE1BQUFBLEVBQUFxWCxZQUFBQSxFQUFBQTtFQUNBclgsTUFBQUEsQ0FBQXdkLGFBQUFBLEdBQUEsRUFBQSxFQUNBeGQsTUFBQUEsQ0FBQTBkLGFBQUFBLEdBQUE7SUFBQWxILE1BQUFBLEVBQUEsRUFBQTtJQUFBZ0ksUUFBQUEsRUFBQTtFQUFBLENBQUE7RUEwREF4ZSxNQUFBQSxDQUFBbVcsTUFBQUEsQ0FBQSxhQUFBLEVBQUEsTUFBQTtJQXZEQW5XLE1BQUFBLENBQUE0RCxXQUFBQSxLQUNBNUQsTUFBQUEsQ0FBQXdkLGFBQUFBLEdBQUEsRUFBQSxFQUNBbkcsWUFBQUEsQ0FBQWtHLFlBQUFBLEVBQUFBLENBQUFqYSxJQUFBQSxDQUFBQyxRQUFBQSxJQUFBQTtNQUNBdkQsTUFBQUEsQ0FBQW9DLFNBQUFBLEdBQUFtQixRQUFBQSxDQUFBL0QsSUFBQTtJQUFBLENBQUEsQ0FBQSxFQUVBNlgsWUFBQUEsQ0FBQXRILGFBQUFBLEVBQUFBLENBQUF6TSxJQUFBQSxDQUFBQyxRQUFBQSxJQUFBQTtNQUNBdkQsTUFBQUEsQ0FBQWdRLFVBQUFBLEdBQUF6TSxRQUFBQSxDQUFBL0QsSUFBQTtJQUFBLENBQUEsQ0FBQSxFQUVBNlgsWUFBQUEsQ0FBQW9ILFlBQUFBLEVBQUFBLENBQUFuYixJQUFBQSxDQUFBLENBQUE7TUFBQTlEO0lBQUFBLENBQUFBLEtBQUFBO01BQ0EsTUFBQWtmLEtBQUFBLEdBQUFqYixDQUFBQSxDQUFBa2IsSUFBQUEsQ0FBQW5mLElBQUFBLENBQUFpRyxHQUFBQSxDQUFBLENBQUE7VUFBQXpFO1FBQUFBLENBQUFBLEtBQUFBLElBQUFBLENBQUFBLENBQUFBLENBQUFuRSxJQUFBQSxFQUFBQTtRQUNBK2hCLE1BQUFBLEdBQUFuYixDQUFBQSxDQUFBb2IsS0FBQUEsQ0FBQSxFQUFBLEVBQUE3aUIsQ0FBQUEsSUFBQUEsQ0FBQUEsR0FBQSxDQUFBLENBQUE7TUFDQWdFLE1BQUFBLENBQUE4ZSxTQUFBQSxHQUFBO1FBQ0F0SSxNQUFBQSxFQUFBb0ksTUFBQUE7UUFDQUcsTUFBQUEsRUFBQUwsS0FBQUE7UUFDQWxmLElBQUFBLEVBQUFrZixLQUFBQSxDQUFBalosR0FBQUEsQ0FBQXpFLElBQUFBLElBQ0E0ZCxNQUFBQSxDQUFBblosR0FBQUEsQ0FBQXVaLEtBQUFBLElBQUF4ZixJQUFBQSxDQUFBMUQsSUFBQUEsQ0FBQW9CLElBQUFBLElBQUFBLElBQUFBLENBQUE4aEIsS0FBQUEsS0FBQUEsS0FBQUEsSUFBQTloQixJQUFBQSxDQUFBOEQsSUFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsRUFBQWllLGFBQUFBLElBQUEsQ0FBQSxDQUFBLENBQUE7UUFFQXRTLE9BQUFBLEVBQUE7VUFDQXVTLFVBQUFBLEVBQUFBLENBQUEsQ0FBQTtVQUNBQyxPQUFBQSxFQUFBO1lBQ0FDLE1BQUFBLEVBQUE7Y0FDQW5NLE9BQUFBLEVBQUFBLENBQUEsQ0FBQTtjQUNBakwsUUFBQUEsRUFBQTtZQUFBLENBQUE7WUFFQXFYLEtBQUFBLEVBQUE7Y0FDQXBNLE9BQUFBLEVBQUFBLENBQUEsQ0FBQTtjQUNBckcsSUFBQUEsRUFBQTtZQUFBO1VBQUE7UUFBQTtNQUFBLENBSUE7SUFBQSxDQUFBLENBQUEsRUFFQXlLLFlBQUFBLENBQUFvRyxvQkFBQUEsRUFBQUEsQ0FBQW5hLElBQUFBLENBQUEsQ0FBQTtNQUFBOUQ7SUFBQUEsQ0FBQUEsS0FBQUE7TUFDQSxNQUFBa2YsS0FBQUEsR0FBQWpiLENBQUFBLENBQUFrYixJQUFBQSxDQUFBbmYsSUFBQUEsQ0FBQWlHLEdBQUFBLENBQUEsQ0FBQTtVQUFBOUI7UUFBQUEsQ0FBQUEsS0FBQUEsR0FBQUEsQ0FBQTNDLElBQUFBLENBQUFBLENBQUFBLENBQUFuRSxJQUFBQSxFQUFBQTtRQUNBdUYsU0FBQUEsR0FBQXFCLENBQUFBLENBQUFrYixJQUFBQSxDQUFBbmYsSUFBQUEsQ0FBQWlHLEdBQUFBLENBQUEsQ0FBQTtVQUFBOUI7UUFBQUEsQ0FBQUEsS0FBQUEsR0FBQUEsQ0FBQW5CLFFBQUFBLENBQUFBLENBQUFBLENBQUEzRixJQUFBQSxFQUFBQTtNQUNBbUQsTUFBQUEsQ0FBQXdkLGFBQUFBLEdBQUE7UUFDQWhILE1BQUFBLEVBQUFwVSxTQUFBQTtRQUNBMmMsTUFBQUEsRUFBQUwsS0FBQUE7UUFDQWxmLElBQUFBLEVBQUFrZixLQUFBQSxDQUFBalosR0FBQUEsQ0FBQXpFLElBQUFBLElBQ0FvQixTQUFBQSxDQUFBcUQsR0FBQUEsQ0FDQWpELFFBQUFBLElBQUFoRCxJQUFBQSxDQUFBMUQsSUFBQUEsQ0FBQSxDQUFBO1VBQUE2SDtRQUFBQSxDQUFBQSxLQUFBQSxHQUFBQSxDQUFBbkIsUUFBQUEsS0FBQUEsUUFBQUEsSUFBQW1CLEdBQUFBLENBQUEzQyxJQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxFQUFBeVosS0FBQUEsSUFBQSxDQUFBLENBQUE7TUFBQSxDQUdBO0lBQUEsQ0FBQSxDQUFBLEVBR0FwRCxZQUFBQSxDQUFBc0csb0JBQUFBLEVBQUFBLENBQUFyYSxJQUFBQSxDQUFBLENBQUE7TUFBQTlEO0lBQUFBLENBQUFBLEtBQUFBO01BQ0EsTUFBQThmLFVBQUFBLEdBQUE3YixDQUFBQSxDQUFBOFcsTUFBQUEsQ0FBQS9hLElBQUFBLEVBQUEsQ0FBQTtRQUFBaWI7TUFBQUEsQ0FBQUEsS0FBQUEsQ0FBQUEsS0FBQUEsQ0FBQUE7TUFDQXphLE1BQUFBLENBQUEwZCxhQUFBQSxHQUFBO1FBQ0FsSCxNQUFBQSxFQUFBOEksVUFBQUEsQ0FBQTdaLEdBQUFBLENBQUEsQ0FBQTtVQUFBOUI7UUFBQUEsQ0FBQUEsS0FBQUEsR0FBQUEsQ0FBQUE7UUFDQW5FLElBQUFBLEVBQUEsQ0FBQThmLFVBQUFBLENBQUE3WixHQUFBQSxDQUFBLENBQUE7VUFBQWdWO1FBQUFBLENBQUFBLEtBQUFBLEtBQUFBLENBQUFBO01BQUFBLENBQ0E7SUFBQSxDQUFBLENBQUEsQ0FLQTtFQUFBLENBQUEsQ0FFQTtBQUFBLENBQUEsQ0FBQSxFQ2xFQXRkLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FXLFVBQUFBLENBQUEsYUFBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBQTtFQUVBQSxNQUFBQSxDQUFBdWYsYUFBQUEsR0FBQSxDQUFBLEVBQ0F2ZixNQUFBQSxDQUFBd2YsY0FBQUEsR0FBQSxFQUFBLEVBQ0F4ZixNQUFBQSxDQUFBeWYsV0FBQUEsR0FBQSxFQUFBLEVBQ0F6ZixNQUFBQSxDQUFBMGYsSUFBQUEsR0FBQUEsQ0FBQSxDQUFBO0VBRUEsSUFzQkFDLFVBQUFBO0lBdEJBQyxNQUFBQSxHQUFBO01BQ0FyZixFQUFBQSxFQUFBLElBQUFzZixLQUFBQSxDQUFBLFFBQUEsQ0FBQTtNQUNBQyxHQUFBQSxFQUFBLElBQUFELEtBQUFBLENBQUEsU0FBQSxDQUFBO01BQ0FFLE1BQUFBLEVBQUEsSUFBQUYsS0FBQUEsQ0FBQSxZQUFBO0lBQUEsQ0FBQTtJQUlBRyxTQUFBQSxHQUFBLENBQ0E7TUFBQW5hLElBQUFBLEVBQUEsZUFBQTtNQUFBb2EsS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBcGEsSUFBQUEsRUFBQSxVQUFBO01BQUFvYSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFwYSxJQUFBQSxFQUFBLFNBQUE7TUFBQW9hLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQXBhLElBQUFBLEVBQUEsUUFBQTtNQUFBb2EsS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBcGEsSUFBQUEsRUFBQSxTQUFBO01BQUFvYSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFwYSxJQUFBQSxFQUFBLE9BQUE7TUFBQW9hLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQXBhLElBQUFBLEVBQUEsYUFBQTtNQUFBb2EsS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBcGEsSUFBQUEsRUFBQSxPQUFBO01BQUFvYSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFwYSxJQUFBQSxFQUFBLFlBQUE7TUFBQW9hLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQXBhLElBQUFBLEVBQUEsT0FBQTtNQUFBb2EsS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBcGEsSUFBQUEsRUFBQSx1QkFBQTtNQUFBb2EsS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBcGEsSUFBQUEsRUFBQSxZQUFBO01BQUFvYSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxDQUFBO0VBS0FqZ0IsTUFBQUEsQ0FBQWtnQixRQUFBQSxHQUFBLFlBQUE7SUFDQSxPQUFBRixTQUFBQSxDQUFBL2pCLE1BQUFBLEdBQUFrRixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBcEIsTUFBQUEsQ0FBQXVmLGFBQUFBLElBQUF2ZixNQUFBQSxDQUFBd2YsY0FBQUEsR0FBQXhmLE1BQUFBLENBQUF5ZixXQUFBQSxDQUFBQSxDQUFBQSxHQUFBLEdBQUEsR0FBQU8sU0FBQUEsQ0FBQS9qQixNQUNBO0VBQUEsQ0FBQSxFQUVBK0QsTUFBQUEsQ0FBQW1nQixPQUFBQSxHQUFBLFlBQUE7SUFDQSxJQUFBQyxhQUFBQSxHQUFBcGdCLE1BQUFBLENBQUF3ZixjQUFBQSxHQUFBeGYsTUFBQUEsQ0FBQXlmLFdBQUFBO0lBQ0F6ZixNQUFBQSxDQUFBdWYsYUFBQUEsSUErQkFjLGFBQUFBLENBQUFWLFVBQUFBLENBQUFBLEVBQ0EzZixNQUFBQSxDQUFBc2dCLEtBQUFBLEdBQUEsRUFBQSxFQUNBdGdCLE1BQUFBLENBQUF1ZixhQUFBQSxHQUFBLENBQUEsRUFDQXZmLE1BQUFBLENBQUEwZixJQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQTFmLE1BQUFBLENBQUF1Z0IsUUFBQUEsR0FBQTtNQUFBMWEsSUFBQUEsRUFBQSxFQUFBO01BQUFvYSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxLQWxDQWpnQixNQUFBQSxDQUFBdWYsYUFBQUEsR0FBQVMsU0FBQUEsQ0FBQS9qQixNQUFBQSxHQUFBbWtCLGFBQUFBLEVBQ0FULFVBQUFBLEdBQUFhLFdBQUFBLENBQUEsWUFBQTtNQUVBLElBREF4Z0IsTUFBQUEsQ0FBQXVmLGFBQUFBLEVBQUFBLEVBQ0EsQ0FBQSxLQUFBdmYsTUFBQUEsQ0FBQXVmLGFBQUFBLEVBTUEsT0FMQXZmLE1BQUFBLENBQUF1Z0IsUUFBQUEsR0FBQTtRQUFBMWEsSUFBQUEsRUFBQSxxQkFBQTtRQUFBb2EsS0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUEsRUFDQWpnQixNQUFBQSxDQUFBc2dCLEtBQUFBLEdBQUEsRUFBQSxFQUNBdGdCLE1BQUFBLENBQUF1ZixhQUFBQSxHQUFBLENBQUEsRUFDQXZmLE1BQUFBLENBQUEwZixJQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQTFmLE1BQUFBLENBQUF3SCxNQUFBQSxFQUFBQSxFQUNBNlksYUFBQUEsQ0FBQVYsVUFBQUEsQ0FBQUE7TUFFQSxJQUFBYyxlQUFBQSxHQUFBdGYsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQXBCLE1BQUFBLENBQUF1ZixhQUFBQSxHQUFBYSxhQUFBQSxDQUFBQTtRQUNBRSxLQUFBQSxHQUFBdGdCLE1BQUFBLENBQUF1ZixhQUFBQSxHQUFBa0IsZUFBQUEsR0FBQUwsYUFBQUE7TUFDQXBnQixNQUFBQSxDQUFBc2dCLEtBQUFBLEdBQUFBLEtBQUFBLEdBQUF0Z0IsTUFBQUEsQ0FBQXdmLGNBQUFBLEdBQUFjLEtBQUFBLEdBQUF0Z0IsTUFBQUEsQ0FBQXdmLGNBQUFBLEdBQUFjLEtBQUFBLEVBQ0FBLEtBQUFBLEdBQUF0Z0IsTUFBQUEsQ0FBQXdmLGNBQUFBLEdBQ0F4ZixNQUFBQSxDQUFBMGYsSUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEdBRUExZixNQUFBQSxDQUFBMGYsSUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBRUExZixNQUFBQSxDQUFBdWdCLFFBQUFBLEdBQUFQLFNBQUFBLENBQUFBLFNBQUFBLENBQUEvakIsTUFBQUEsR0FBQXdrQixlQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBSCxLQUFBQSxLQUFBdGdCLE1BQUFBLENBQUF3ZixjQUFBQSxHQUNBSSxNQUFBQSxDQUFBcmYsRUFBQUEsQ0FBQW1nQixJQUFBQSxFQUFBQSxHQUNBLENBQUEsS0FBQUosS0FBQUEsR0FDQVYsTUFBQUEsQ0FBQUUsR0FBQUEsQ0FBQVksSUFBQUEsRUFBQUEsR0FDQTFnQixNQUFBQSxDQUFBdWdCLFFBQUFBLENBQUFOLEtBQUFBLElBQUFLLEtBQUFBLEtBQUFuZixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBcEIsTUFBQUEsQ0FBQXdmLGNBQUFBLEdBQUEsQ0FBQSxDQUFBLElBQ0FJLE1BQUFBLENBQUFHLE1BQUFBLENBQUFXLElBQUFBLEVBQUFBLEVBRUExZ0IsTUFBQUEsQ0FBQXdILE1BQUFBLEVBQ0E7SUFBQSxDQUFBLEVBQUEsR0FBQSxDQUFBLENBUUE7RUFBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDN0VBckssT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQXVqQixTQUFBQSxDQUFBLGNBQUEsRUFBQSxVQUFBQyxTQUFBQSxFQUFBQTtFQUNBLE9BQUE7SUFDQUMsUUFBQUEsRUFBQSxHQUFBO0lBQ0FDLEtBQUFBLEVBQUE7TUFDQUMsWUFBQUEsRUFBQTtJQUFBLENBQUE7SUFFQUMsSUFBQUEsRUFBQSxTQUFBQSxDQUFBRixLQUFBQSxFQUFBRyxFQUFBQSxFQUFBQyxJQUFBQSxFQUFBQTtNQUNBTixTQUFBQSxDQUFBcmdCLEVBQUFBLENBQUEsT0FBQSxFQUFBLFVBQUF0QixDQUFBQSxFQUFBQTtRQUNBZ2lCLEVBQUFBLEtBQUFoaUIsQ0FBQUEsQ0FBQWtpQixNQUFBQSxJQUFBRixFQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBRyxRQUFBQSxDQUFBbmlCLENBQUFBLENBQUFraUIsTUFBQUEsQ0FBQUEsSUFDQUwsS0FBQUEsQ0FBQXRaLE1BQUFBLENBQUEsWUFBQTtVQUVBc1osS0FBQUEsQ0FBQU8sS0FBQUEsQ0FBQVAsS0FBQUEsQ0FBQUMsWUFBQUEsQ0FDQTtRQUFBLENBQUEsQ0FFQTtNQUFBLENBQUEsQ0FDQTtJQUFBO0VBQUEsQ0FFQTtBQUFBLENBQUEsQ0FBQSxFQ2pCQTVqQixPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBdWpCLFNBQUFBLENBQUEsTUFBQSxFQUFBLENBQ0EsWUFBQSxFQUNBLFFBQUEsRUFDQSxVQUFBLEVBQ0EsY0FBQSxFQUNBLFVBQUF2aUIsVUFBQUEsRUFBQWtqQixNQUFBQSxFQUFBQyxRQUFBQSxFQUFBQyxZQUFBQSxFQUFBQTtFQUVBLElBQUFDLFFBQUFBLEdBQUEsU0FBQUEsQ0FBQUMsZ0JBQUFBLEVBQUFBO0lBRUEsSUFBQTFPLEtBQUFBLEdBQUE7TUFDQTJPLElBQUFBLEVBQUFELGdCQUFBQTtNQUNBRSxHQUFBQSxFQUFBO0lBQUEsQ0FBQTtJQU9BLE9BSkE1TyxLQUFBQSxDQUFBMk8sSUFBQUEsQ0FBQXZFLEtBQUFBLENBQUEsU0FBQSxDQUFBLEtBQ0FwSyxLQUFBQSxDQUFBNE8sR0FBQUEsR0FBQSxpQkFBQSxDQUFBLEVBR0E1TyxLQUVBO0VBQUEsQ0FBQTtFQTZFQSxPQUFBO0lBQ0E2TixRQUFBQSxFQUFBLEdBQUE7SUFDQUcsSUFBQUEsRUFBQSxTQUFBQSxDQUFBRixLQUFBQSxFQUFBZSxJQUFBQSxFQUFBQTtNQUVBZixLQUFBQSxDQUFBZ0IsY0FBQUEsR0FBQSxFQUFBO01BRUEsSUFBQUMsSUFBQUEsR0FBQSxpR0FBQTtNQUdBQSxJQUFBQSxHQUFBQSxDQURBQSxJQUFBQSxHQUFBQSxJQUFBQSxDQUFBN21CLE9BQUFBLENBQUEsT0FBQSxFQUFBc21CLFlBQUFBLENBQUFRLFdBQUFBLEVBQUFBLENBQUFBLEVBQ0E5bUIsT0FBQUEsQ0FBQSxPQUFBLEVBQUFzbUIsWUFBQUEsQ0FBQVMsU0FBQUEsRUFBQUEsQ0FBQUEsRUFFQUosSUFBQUEsQ0FBQUssTUFBQUEsQ0FBQVgsUUFBQUEsQ0FBQVEsSUFBQUEsQ0FBQVIsQ0FBQVQsS0FBQUEsQ0FBQUEsQ0FBQUEsRUFFQTFpQixVQUFBQSxDQUFBb0YsR0FBQUEsQ0FBQSxtQkFBQSxFQUFBLFVBQUFnUSxLQUFBQSxFQUFBMk8sT0FBQUEsRUFBQUMsUUFBQUEsRUFBQUMsU0FBQUEsRUFBQUMsVUFBQUEsRUFBQUE7UUFFQXhCLEtBQUFBLENBQUFnQixjQUFBQSxHQTFGQSxVQUFBbGtCLEtBQUFBLEVBQUFBO1VBS0EsS0FIQSxJQUFBMmtCLE1BQUFBLEdBQUEsQ0FBQSxDQUFBLEVBR0EsRUFBQSxLQUFBM2tCLEtBQUFBLENBQUFpSSxJQUFBQSxHQUFBO1lBQ0EsSUFBQTJjLE1BQUFBLEdBQUFsQixNQUFBQSxDQUFBbUIsR0FBQUEsQ0FBQSxHQUFBLEVBQUE3a0IsS0FBQUEsQ0FBQUE7WUFHQTJrQixNQUFBQSxDQUFBQyxNQUFBQSxDQUFBM2MsSUFBQUEsQ0FBQUEsS0FDQTBjLE1BQUFBLENBQUFDLE1BQUFBLENBQUEzYyxJQUFBQSxDQUFBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLEVBSUFqSSxLQUFBQSxDQUFBOGpCLGdCQUFBQSxLQUNBYSxNQUFBQSxDQUFBQyxNQUFBQSxDQUFBM2MsSUFBQUEsQ0FBQUEsQ0FBQSxFQUFBLENBQUEsS0FDQTBjLE1BQUFBLENBQUFDLE1BQUFBLENBQUEzYyxJQUFBQSxDQUFBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBNGIsUUFBQUEsQ0FBQTdqQixLQUFBQSxDQUFBOGpCLGdCQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxFQUtBOWpCLEtBQUFBLENBQUE4a0IsS0FBQUEsSUFDQWpmLENBQUFBLENBQUF4RyxPQUFBQSxDQUFBVyxLQUFBQSxDQUFBOGtCLEtBQUFBLEVBQUEsVUFBQUMsSUFBQUEsRUFBQWhtQixHQUFBQSxFQUFBQTtjQUdBLElBQUFnbUIsSUFBQUEsQ0FBQWpCLGdCQUFBQSxFQUtBLE9BQUEsQ0FBQS9rQixHQUFBQSxHQUFBQSxHQUFBQSxDQUFBc2pCLEtBQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLElBRUFzQyxNQUFBQSxDQUFBNWxCLEdBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FDQTRsQixNQUFBQSxDQUFBNWxCLEdBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLE1BSUE0bEIsTUFBQUEsQ0FBQTVsQixHQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUFBLEdBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FDQTRsQixNQUFBQSxDQUFBNWxCLEdBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQUEsR0FBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBOGtCLFFBQUFBLENBQUFrQixJQUFBQSxDQUFBakIsZ0JBQUFBLENBQUFBLENBQUFBLENBQUFBLElBQUFBLE1BT0FhLE1BQUFBLENBQUFDLE1BQUFBLENBQUEzYyxJQUFBQSxDQUFBQSxDQUFBbEosR0FBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBOGtCLFFBQUFBLENBQUFrQixJQUFBQSxDQUFBakIsZ0JBQUFBLENBQUFBLENBRUE7WUFBQSxDQUFBLENBQUEsRUFJQTlqQixLQUFBQSxHQUFBNGtCLE1BQ0E7VUFBQTtVQUdBLElBQUFJLElBQUFBLEdBQUEsRUFBQTtVQWdCQSxPQWZBbmYsQ0FBQUEsQ0FBQXhHLE9BQUFBLENBQUFzbEIsTUFBQUEsRUFBQSxVQUFBRyxLQUFBQSxFQUFBQTtZQUVBamYsQ0FBQUEsQ0FBQXhHLE9BQUFBLENBQUF5bEIsS0FBQUEsRUFBQSxVQUFBMVAsS0FBQUEsRUFBQUE7Y0FFQXZQLENBQUFBLENBQUEyUyxRQUFBQSxDQUFBd00sSUFBQUEsRUFBQTVQLEtBQUFBLENBQUFBLElBQ0E0UCxJQUFBQSxDQUFBaG1CLElBQUFBLENBQUFvVyxLQUFBQSxDQUdBO1lBQUEsQ0FBQSxDQUVBO1VBQUEsQ0FBQSxDQUFBLEVBR0E0UCxJQUFBQSxDQUFBalUsT0FBQUEsRUFBQUEsRUFFQWlVLElBRUE7UUFBQSxDQWlCQUMsQ0FBQVYsT0FBQUEsQ0FFQTtNQUFBLENBQUEsQ0FFQTtJQUFBO0VBQUEsQ0FHQTtBQUFBLENBQUEsQ0FBQSxDQUFBLEVDeEhBaGxCLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FlLE9BQUFBLENBQUEsZUFBQSxFQUFBLFVBQUEya0IsS0FBQUEsRUFBQUE7RUFFQSxJQUFBQyxHQUFBQSxHQUFBNW5CLElBQUFBO0VBRUE0bkIsR0FBQUEsQ0FBQWhULGFBQUFBLEdBQUEsWUFBQTtJQUNBLE9BQUErUyxLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLGlCQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFNLEdBQUFBLENBQUFDLFFBQUFBLEdBQUEsVUFBQXhXLFFBQUFBLEVBQUFBO0lBQ0EsT0FBQXNXLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsa0JBQUEsR0FBQWpXLFFBQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUF1VyxHQUFBQSxDQUFBcFMsV0FBQUEsR0FBQSxVQUFBbkUsUUFBQUEsRUFBQUE7SUFDQSxPQUFBc1csS0FBQUEsQ0FBQTlPLElBQUFBLENBQUEsa0JBQUEsRUFBQXhILFFBQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUF1VyxHQUFBQSxDQUFBalMsT0FBQUEsR0FBQSxVQUFBdEUsUUFBQUEsRUFBQTJELElBQUFBLEVBQUFBO0lBQ0EsT0FBQTJTLEtBQUFBLENBQUE5TyxJQUFBQSxDQUFBLGtCQUFBLEdBQUF4SCxRQUFBQSxHQUFBLFFBQUEsRUFBQTJELElBQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUE0UyxHQUFBQSxDQUFBelIsZUFBQUEsR0FBQSxVQUFBZ0ksSUFBQUEsRUFBQUE7SUFDQXlKLEdBQUFBLENBQUFFLE9BQUFBLEdBQUEzSixJQUFBQSxFQUNBeUosR0FBQUEsQ0FBQUcsWUFBQUEsR0FBQSxFQUFBO0lBRUEsS0FBQSxJQUFBbG5CLENBQUFBLEdBQUEsQ0FBQSxFQUFBQSxDQUFBQSxHQUFBc2QsSUFBQUEsQ0FBQXJkLE1BQUFBLEVBQUFELENBQUFBLEVBQUFBLEVBQ0EsS0FBQSxJQUFBa1UsQ0FBQUEsR0FBQWxVLENBQUFBLEdBQUEsQ0FBQSxFQUFBa1UsQ0FBQUEsR0FBQW9KLElBQUFBLENBQUFyZCxNQUFBQSxFQUFBaVUsQ0FBQUEsRUFBQUEsRUFBQTtNQUNBLElBQUFoUCxNQUFBQSxHQUFBQyxJQUFBQSxDQUFBZ0gsS0FBQUEsQ0FBQWhILElBQUFBLENBQUFELE1BQUFBLEVBQUFBLENBQUFBO01BQ0E2aEIsR0FBQUEsQ0FBQUcsWUFBQUEsQ0FBQXRtQixJQUFBQSxDQUFBO1FBQ0FzTCxFQUFBQSxFQUFBLENBQUE7UUFDQWliLFdBQUFBLEVBQUE3SixJQUFBQSxDQUFBLENBQUEsS0FBQXBZLE1BQUFBLEdBQUFsRixDQUFBQSxHQUFBa1UsQ0FBQUEsQ0FBQUEsQ0FBQXJLLElBQUFBO1FBQ0F1ZCxZQUFBQSxFQUFBOUosSUFBQUEsQ0FBQSxDQUFBLEtBQUFwWSxNQUFBQSxHQUFBZ1AsQ0FBQUEsR0FBQWxVLENBQUFBLENBQUFBLENBQUE2SixJQUFBQTtRQUNBd2QsTUFBQUEsRUFBQTtNQUFBLENBQUEsQ0FFQTtJQUFBO0lBR0EsS0FBQXJuQixDQUFBQSxJQVNBLFVBQUErSyxLQUFBQSxFQUFBQTtNQUNBLElBQUF1YyxDQUFBQTtRQUFBdG5CLENBQUFBO1FBQUF1bkIsQ0FBQUEsR0FBQXhjLEtBQUFBLENBQUE5SyxNQUFBQTtNQUVBLE9BQUFzbkIsQ0FBQUEsR0FFQXZuQixDQUFBQSxHQUFBbUYsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQUQsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQXFpQixDQUFBQSxFQUFBQSxDQUFBQSxFQUdBRCxDQUFBQSxHQUFBdmMsS0FBQUEsQ0FBQXdjLENBQUFBLENBQUFBLEVBQ0F4YyxLQUFBQSxDQUFBd2MsQ0FBQUEsQ0FBQUEsR0FBQXhjLEtBQUFBLENBQUEvSyxDQUFBQSxDQUFBQSxFQUNBK0ssS0FBQUEsQ0FBQS9LLENBQUFBLENBQUFBLEdBQUFzbkIsQ0FHQTtJQUFBLENBdkJBRSxDQUFBVCxHQUFBQSxDQUFBRyxZQUFBQSxDQUFBQSxFQUNBSCxHQUFBQSxDQUFBRyxZQUFBQSxFQUNBSCxHQUFBQSxDQUFBRyxZQUFBQSxDQUFBbG5CLENBQUFBLENBQUFBLENBQUFrTSxFQUFBQSxHQUFBbE0sQ0FBQUEsR0FBQSxDQUVBO0VBQUEsQ0FBQSxFQUVBK21CLEdBQUFBLENBQUFVLGVBQUFBLEdBQUEsVUFBQW5LLElBQUFBLEVBQUFBO0lBQ0EsT0FBQXlKLEdBQUFBLENBQUFHLFlBQ0E7RUFBQSxDQWlCQTtBQUFBLENBQUEsQ0FBQSxFQzdEQS9sQixPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBZSxPQUFBQSxDQUFBLFVBQUEsRUFBQSxVQUFBMmtCLEtBQUFBLEVBQUFBO0VBRUEzbkIsSUFBQUEsQ0FFQXdFLElBQUFBLEdBQUEsVUFBQW1OLEtBQUFBLEVBQUFBO0lBRUEsT0FEQWhPLE9BQUFBLENBQUFDLEdBQUFBLENBQUErTixLQUFBQSxDQUFBQSxFQUNBZ1csS0FBQUEsQ0FBQTlPLElBQUFBLENBQUEsWUFBQSxFQUFBbEgsS0FBQUEsQ0FDQTtFQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUNWQTNQLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FlLE9BQUFBLENBQUEsU0FBQSxFQUFBLFVBQUEya0IsS0FBQUEsRUFBQUE7RUFFQTNuQixJQUFBQSxDQUVBdW9CLFNBQUFBLEdBQUEsVUFBQUMsTUFBQUEsRUFBQUE7SUFDQSxPQUFBYixLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLG9CQUFBLEdBQUFrQixNQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUpBeG9CLElBQUFBLENBTUF5b0IsU0FBQUEsR0FBQSxVQUFBRCxNQUFBQSxFQUFBQTtJQUNBLE9BQUFiLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsb0JBQUEsR0FBQWtCLE1BQUFBLENBQ0E7RUFBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDYkF4bUIsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQWUsT0FBQUEsQ0FBQSxTQUFBLEVBQUEsVUFBQTJrQixLQUFBQSxFQUFBQTtFQUVBM25CLElBQUFBLENBRUEwb0IsWUFBQUEsR0FBQSxVQUFBdkYsSUFBQUEsRUFBQWxiLElBQUFBLEVBQUFBO0lBQ0EsT0FBQTBmLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsYUFBQSxHQUFBbkUsSUFBQUEsR0FBQSxHQUFBLEdBQUFsYixJQUFBQSxHQUFBLFlBQUEsQ0FDQTtFQUFBLENBQUEsRUFKQWpJLElBQUFBLENBTUF3UCxZQUFBQSxHQUFBLFVBQUEyVCxJQUFBQSxFQUFBbGIsSUFBQUEsRUFBQW1FLEtBQUFBLEVBQUFBO0lBQ0EsT0FBQXViLEtBQUFBLENBQUE5TyxJQUFBQSxDQUFBLGFBQUEsR0FBQXNLLElBQUFBLEdBQUEsR0FBQSxHQUFBbGIsSUFBQUEsR0FBQSxZQUFBLEVBQUE7TUFDQW1FO0lBQUFBLENBQUFBLENBRUE7RUFBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDZkFwSyxPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBZSxPQUFBQSxDQUFBLGFBQUEsRUFBQSxZQUFBO0VBRUEsSUFBQTRrQixHQUFBQSxHQUFBNW5CLElBQUFBO0VBRUE0bkIsR0FBQUEsQ0FBQTNnQixTQUFBQSxHQUFBLENBQ0E7SUFDQW9MLElBQUFBLEVBQUEsSUFBQTtJQUNBM0gsSUFBQUEsRUFBQSxTQUFBO0lBQ0F5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0E5RyxJQUFBQSxFQUFBLElBQUE7SUFDQTNILElBQUFBLEVBQUEsWUFBQTtJQUNBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBOUcsSUFBQUEsRUFBQSxJQUFBO0lBQ0EzSCxJQUFBQSxFQUFBLFVBQUE7SUFDQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsRUFJQXlPLEdBQUFBLENBQUFuVyxJQUFBQSxHQUFBLENBQ0E7SUFDQVksSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBQSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FBLElBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsRUFJQXVWLEdBQUFBLENBQUExZ0IsZ0JBQUFBLEdBQUEwZ0IsR0FBQUEsQ0FBQTNnQixTQUFBQSxDQUFBLENBQUEsQ0FBQSxFQUVBMmdCLEdBQUFBLENBQUF0Z0IsV0FBQUEsR0FBQSxVQUFBRCxRQUFBQSxFQUFBQTtJQUVBLE9BREF1Z0IsR0FBQUEsQ0FBQTFnQixnQkFBQUEsR0FBQUcsUUFBQUEsRUFDQUEsUUFDQTtFQUFBLENBQUEsRUFFQXVnQixHQUFBQSxDQUFBemdCLFdBQUFBLEdBQUEsWUFBQTtJQUNBLE9BQUF5Z0IsR0FBQUEsQ0FBQTFnQixnQkFDQTtFQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUM5Q0FsRixPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBZSxPQUFBQSxDQUFBLFVBQUEsRUFBQSxVQUFBMmtCLEtBQUFBLEVBQUFBO0VBRUEzbkIsSUFBQUEsQ0FFQThZLEtBQUFBLEdBQUEsWUFBQTtJQUNBLE9BQUE2TyxLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLFlBQUEsQ0FDQTtFQUFBLENBQUEsRUFKQXRuQixJQUFBQSxDQU1BMlksTUFBQUEsR0FBQSxVQUFBRSxJQUFBQSxFQUFBQTtJQUNBLE9BQUE4TyxLQUFBQSxDQUFBOU8sSUFBQUEsQ0FBQSxZQUFBLEVBQUFBLElBQUFBLENBQ0E7RUFBQSxDQUFBLEVBUkE3WSxJQUFBQSxDQVVBZ1osT0FBQUEsR0FBQSxVQUFBSCxJQUFBQSxFQUFBQTtJQUNBLE9BQUE4TyxLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLGFBQUEsR0FBQXpPLElBQUFBLENBQUFyUSxHQUFBQSxDQUNBO0VBQUEsQ0FFQTtBQUFBLENBQUEsQ0FBQSxFQ2pCQXhHLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQUFlLE9BQUFBLENBQUEsY0FBQSxFQUFBLFVBQUEya0IsS0FBQUEsRUFBQUE7RUFDQSxJQUFBQyxHQUFBQSxHQUFBNW5CLElBQUFBO0VBRUE0bkIsR0FBQUEsQ0FBQWpGLFFBQUFBLEdBQUEsWUFBQTtJQUNBLE9BQUFnRixLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLHVCQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFNLEdBQUFBLENBQUE5SSxRQUFBQSxHQUFBLFVBQUF0TixPQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUFBO0lBQ0EsSUFBQTlPLEdBQUFBLEdBQ0EsdUJBQUEsSUFDQThPLE9BQUFBLENBQUE2TixLQUFBQSxHQUFBLFVBQUE3TixPQUFBQSxDQUFBNk4sS0FBQUEsRUFBQUEsR0FBQSxFQUFBLENBQUEsSUFDQTdOLE9BQUFBLENBQUEySyxJQUFBQSxHQUFBLFNBQUEzSyxPQUFBQSxDQUFBMkssSUFBQUEsRUFBQUEsR0FBQSxFQUFBLENBQUEsSUFDQTNLLE9BQUFBLENBQUE0TixNQUFBQSxHQUFBLFlBQUE1TixPQUFBQSxDQUFBNE4sTUFBQUEsRUFBQUEsR0FBQSxFQUFBLENBQUEsSUFDQTVOLE9BQUFBLENBQUFxTixPQUFBQSxHQUFBLGFBQUFyTixPQUFBQSxDQUFBcU4sT0FBQUEsRUFBQUEsR0FBQSxFQUFBLENBQUEsSUFDQXJOLE9BQUFBLENBQUF2SyxTQUFBQSxJQUFBdUssT0FBQUEsQ0FBQXZLLFNBQUFBLENBQUFuRyxNQUFBQSxHQUFBLENBQUEsR0FBQSxhQUFBMFEsT0FBQUEsQ0FBQXZLLFNBQUFBLENBQUEwaEIsSUFBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxJQUNBblgsT0FBQUEsQ0FBQXFELFVBQUFBLElBQUFyRCxPQUFBQSxDQUFBcUQsVUFBQUEsQ0FBQS9ULE1BQUFBLEdBQUEsQ0FBQSxHQUFBLGVBQUEwUSxPQUFBQSxDQUFBcUQsVUFBQUEsQ0FBQThULElBQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsSUFDQW5YLE9BQUFBLENBQUE2SyxNQUFBQSxHQUFBLFdBQUE3SyxPQUFBQSxDQUFBNkssTUFBQUEsRUFBQUEsR0FBQSxFQUFBLENBQUE7SUFDQSxPQUFBc0wsS0FBQUEsQ0FBQUwsR0FBQUEsQ0FBQTVrQixHQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBa2xCLEdBQUFBLENBQUF2SixXQUFBQSxHQUFBM1QsSUFBQUEsSUFDQWlkLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsb0NBQUE1YyxJQUFBQSxFQUFBQSxDQUFBQSxFQUdBa2QsR0FBQUEsQ0FBQWhULGFBQUFBLEdBQUEsTUFDQStTLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsMkJBQUEsQ0FBQSxFQUdBTSxHQUFBQSxDQUFBeEYsWUFBQUEsR0FBQSxNQUNBdUYsS0FBQUEsQ0FBQUwsR0FBQUEsQ0FBQSwwQkFBQSxDQUFBLEVBR0FNLEdBQUFBLENBQUF4SixPQUFBQSxHQUFBLFVBQUFELElBQUFBLEVBQUFBO0lBQ0EsT0FBQXdKLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsdUJBQUEsR0FBQW5KLElBQUFBLENBQUEzVixHQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBb2YsR0FBQUEsQ0FBQXBILFVBQUFBLEdBQUEsVUFBQXJDLElBQUFBLEVBQUFBO0lBQ0EsT0FBQXdKLEtBQUFBLENBQUFpQixHQUFBQSxDQUFBLHVCQUFBLEdBQUF6SyxJQUFBQSxDQUFBM1YsR0FBQUEsRUFBQTJWLElBQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUF5SixHQUFBQSxDQUFBakgsVUFBQUEsR0FBQSxVQUFBMVksSUFBQUEsRUFBQWtXLElBQUFBLEVBQUFBO0lBQ0EsT0FBQXdKLEtBQUFBLENBQUE5TyxJQUFBQSxDQUFBLHNCQUFBLEVBQUE7TUFDQTVRLElBQUFBO01BQ0FrVztJQUFBQSxDQUFBQSxDQUVBO0VBQUEsQ0FBQSxFQUVBeUosR0FBQUEsQ0FBQTVHLFVBQUFBLEdBQUEsVUFBQTVFLEtBQUFBLEVBQUFBO0lBQ0EsT0FBQXVMLEtBQUFBLENBQUE5TyxJQUFBQSxDQUFBLDRCQUFBLEVBQUE7TUFBQXVEO0lBQUFBLENBQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUF3TCxHQUFBQSxDQUFBL0csVUFBQUEsR0FBQSxVQUFBcEIsTUFBQUEsRUFBQUE7SUFDQSxPQUFBa0ksS0FBQUEsQ0FBQWtCLE1BQUFBLENBQUEsdUJBQUEsR0FBQXBKLE1BQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFtSSxHQUFBQSxDQUFBaEksZUFBQUEsR0FBQSxVQUFBekIsSUFBQUEsRUFBQXhlLEtBQUFBLEVBQUFBO0lBQ0EsT0FBQWdvQixLQUFBQSxDQUFBaUIsR0FBQUEsQ0FBQSx1QkFBQSxHQUFBekssSUFBQUEsQ0FBQTNWLEdBQUFBLEdBQUEsVUFBQSxHQUFBN0ksS0FBQUEsQ0FBQTZJLEdBQUFBLEVBQUE3SSxLQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBaW9CLEdBQUFBLENBQUEzSCxlQUFBQSxHQUFBLFVBQUE5QixJQUFBQSxFQUFBeGUsS0FBQUEsRUFBQUE7SUFDQSxPQUFBZ29CLEtBQUFBLENBQUE5TyxJQUFBQSxDQUFBLHVCQUFBLEdBQUFzRixJQUFBQSxDQUFBM1YsR0FBQUEsR0FBQSxTQUFBLEVBQUE3SSxLQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBaW9CLEdBQUFBLENBQUF4SCxlQUFBQSxHQUFBLFVBQUFqQyxJQUFBQSxFQUFBeGUsS0FBQUEsRUFBQUE7SUFDQSxPQUFBZ29CLEtBQUFBLENBQUFrQixNQUFBQSxDQUFBLHVCQUFBLEdBQUExSyxJQUFBQSxDQUFBM1YsR0FBQUEsR0FBQSxVQUFBLEdBQUE3SSxLQUFBQSxDQUFBNkksR0FBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQW9mLEdBQUFBLENBQUFrQixVQUFBQSxHQUFBLFVBQUE3Z0IsSUFBQUEsRUFBQWtXLElBQUFBLEVBQUFBO0lBQ0F3SixLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLHVCQUFBLEdBQUFuSixJQUFBQSxDQUFBM1YsR0FBQUEsR0FBQSxVQUFBLEdBQUFQLElBQUFBLENBQUFPLEdBQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFvZixHQUFBQSxDQUFBcEYsb0JBQUFBLEdBQUEsWUFBQTtJQUNBLE9BQUFtRixLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLGlDQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFNLEdBQUFBLENBQUF0RixvQkFBQUEsR0FBQSxZQUFBO0lBQ0EsT0FBQXFGLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsZ0NBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQU0sR0FBQUEsQ0FBQXRFLFlBQUFBLEdBQUEsWUFBQTtJQUNBLE9BQUFxRSxLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLDJCQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFNLEdBQUFBLENBQUEvRixTQUFBQSxHQUFBLFVBQUExRCxJQUFBQSxFQUFBN0csSUFBQUEsRUFBQUE7SUFDQSxPQUFBcVEsS0FBQUEsQ0FBQTlPLElBQUFBLENBQUEsd0JBQUFzRixJQUFBQSxDQUFBM1YsR0FBQUEsV0FBQThPLElBQUFBLEVBQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFzUSxHQUFBQSxDQUFBL0UsUUFBQUEsR0FBQSxZQUFBO0lBQ0EsT0FBQThFLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsc0JBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQU0sR0FBQUEsQ0FBQTNFLFdBQUFBLEdBQUEsWUFBQTtJQUNBLE9BQUEwRSxLQUFBQSxDQUFBOU8sSUFBQUEsQ0FBQSxzQkFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBK08sR0FBQUEsQ0FBQXhFLE9BQUFBLEdBQUEsVUFBQXJXLEVBQUFBLEVBQUFBO0lBQ0EsT0FBQTRhLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsdUJBQUF2YSxFQUFBQSxFQUFBQSxDQUNBO0VBQUEsQ0FDQTtBQUFBLENBQUEsQ0FBQSxFQ2xHQS9LLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQUFlLE9BQUFBLENBQUEsU0FBQSxFQUFBLFVBQUEya0IsS0FBQUEsRUFBQUE7RUFDQSxJQUFBQyxHQUFBQSxHQUFBNW5CLElBQUFBO0VBRUE0bkIsR0FBQUEsQ0FBQW1CLE9BQUFBLEdBQUEsWUFBQTtJQUNBLE9BQUFwQixLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLFlBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQU0sR0FBQUEsQ0FBQWxGLFFBQUFBLEdBQUEsWUFBQTtJQUNBLE9BQUFpRixLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLGdCQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFNLEdBQUFBLENBQUE1RSxTQUFBQSxHQUFBLFVBQUFqVyxFQUFBQSxFQUFBQTtJQUNBLE9BQUE0YSxLQUFBQSxDQUFBOU8sSUFBQUEsQ0FBQSxrQkFBQTlMLEVBQUFBLEVBQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUE2YSxHQUFBQSxDQUFBb0IsUUFBQUEsR0FBQSxVQUFBQyxLQUFBQSxFQUFBQTtJQUVBLE9BREF0QixLQUFBQSxDQUFBdUIsUUFBQUEsQ0FBQUMsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQUgsS0FBQUEsRUFDQXJCLEdBQUFBLENBQUFtQixPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBbkIsR0FBQUEsQ0FBQTVRLFlBQUFBLEdBQUEsVUFBQS9PLElBQUFBLEVBQUFBO0lBQ0EsT0FBQTBmLEtBQUFBLENBQ0E5TyxJQUFBQSxDQUFBLHlCQUFBLEVBQUE7TUFDQTVRO0lBQUFBLENBQUFBLENBQUFBLENBRUFFLElBQUFBLENBQUEsVUFBQUMsUUFBQUEsRUFBQUE7TUFFQSxPQURBOUUsTUFBQUEsQ0FBQTBFLFlBQUFBLENBQUFpaEIsS0FBQUEsR0FBQTdnQixRQUFBQSxDQUFBL0QsSUFBQUEsRUFDQXVqQixHQUFBQSxDQUFBb0IsUUFBQUEsQ0FBQTVnQixRQUFBQSxDQUFBL0QsSUFBQUEsQ0FDQTtJQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQXVqQixHQUFBQSxDQUFBMWYsS0FBQUEsR0FBQSxVQUFBRCxJQUFBQSxFQUFBQTtJQUNBLE9BQUEwZixLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLGFBQUEsR0FBQXJmLElBQUFBLEdBQUEsUUFBQSxDQUFBLENBQUFFLElBQUFBLENBQUEsVUFBQUMsUUFBQUEsRUFBQUE7TUFFQSxPQURBOUUsTUFBQUEsQ0FBQTBFLFlBQUFBLENBQUFpaEIsS0FBQUEsR0FBQTdnQixRQUFBQSxDQUFBL0QsSUFBQUEsRUFDQXVqQixHQUFBQSxDQUFBb0IsUUFBQUEsQ0FBQTVnQixRQUFBQSxDQUFBL0QsSUFBQUEsQ0FDQTtJQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQXVqQixHQUFBQSxDQUFBbE4sVUFBQUEsR0FBQSxVQUFBelMsSUFBQUEsRUFBQUE7SUFDQSxPQUFBMGYsS0FBQUEsQ0FDQTlPLElBQUFBLENBQUEsYUFBQSxHQUFBNVEsSUFBQUEsQ0FBQU8sR0FBQUEsRUFBQTtNQUNBUDtJQUFBQSxDQUFBQSxDQUFBQSxDQUVBRSxJQUFBQSxDQUFBLFlBQUE7TUFDQSxPQUFBeWYsR0FBQUEsQ0FBQW1CLE9BQUFBLEVBQ0E7SUFBQSxDQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFuQixHQUFBQSxDQUFBMU4sYUFBQUEsR0FBQSxVQUFBalMsSUFBQUEsRUFBQWtTLFFBQUFBLEVBQUFBO0lBQ0EsT0FBQXdOLEtBQUFBLENBQUE5TyxJQUFBQSxDQUFBLGFBQUEsR0FBQTVRLElBQUFBLEdBQUEsZUFBQSxFQUFBO01BQ0FrUztJQUFBQSxDQUFBQSxDQUVBO0VBQUEsQ0FBQSxFQUVBeU4sR0FBQUEsQ0FBQXJOLGNBQUFBLEdBQUEsVUFBQXRTLElBQUFBLEVBQUF1UyxXQUFBQSxFQUFBUixXQUFBQSxFQUFBQTtJQUNBLE9BQUEyTixLQUFBQSxDQUFBOU8sSUFBQUEsQ0FBQSxhQUFBLEdBQUE1USxJQUFBQSxHQUFBLFdBQUEsRUFBQTtNQUNBdVMsV0FBQUE7TUFDQVI7SUFBQUEsQ0FBQUEsQ0FFQTtFQUFBLENBQUEsRUFFQTROLEdBQUFBLENBQUFuTixjQUFBQSxHQUFBLFVBQUF4UyxJQUFBQSxFQUFBNFIsV0FBQUEsRUFBQUE7SUFDQSxPQUFBOE4sS0FBQUEsQ0FDQTlPLElBQUFBLENBQUEsYUFBQSxHQUFBNVEsSUFBQUEsR0FBQSxXQUFBLEVBQUE7TUFDQTRSO0lBQUFBLENBQUFBLENBQUFBLENBRUExUixJQUFBQSxDQUFBLFlBQUE7TUFDQSxPQUFBeWYsR0FBQUEsQ0FBQW1CLE9BQUFBLEVBQ0E7SUFBQSxDQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFuQixHQUFBQSxDQUFBaGYsTUFBQUEsR0FBQSxZQUFBO0lBQ0F0RixNQUFBQSxDQUFBMEUsWUFBQUEsQ0FBQWdCLEtBQUFBLEVBQUFBLEVBQ0EyZSxLQUFBQSxDQUFBdUIsUUFBQUEsQ0FBQUMsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBeEIsR0FBQUEsQ0FBQXlCLFVBQUFBLEdBQUEsVUFBQXZQLFFBQUFBLEVBQUFLLFFBQUFBLEVBQUFBO0lBQ0EsT0FBQXdOLEtBQUFBLENBQ0E5TyxJQUFBQSxDQUFBLFlBQUEsRUFBQTtNQUNBaUIsUUFBQUE7TUFDQUs7SUFBQUEsQ0FBQUEsQ0FBQUEsQ0FFQWhTLElBQUFBLENBQUEsWUFBQTtNQUNBLE9BQUF5ZixHQUFBQSxDQUFBMWYsS0FBQUEsQ0FBQTRSLFFBQUFBLEVBQUFLLFFBQUFBLENBQ0E7SUFBQSxDQUFBLENBQ0E7RUFBQSxDQUNBO0FBQUEsQ0FBQSxDQUFBLEVDdEZBblksT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQVcsVUFBQUEsQ0FBQSxpQkFBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBeWtCLE9BQUFBLEVBQUFBO0VBRUFBLE9BQUFBLENBQUFiLFNBQUFBLENBQUEsU0FBQSxDQUFBLENBQ0F0Z0IsSUFBQUEsQ0FBQSxVQUFBQyxRQUFBQSxFQUFBQTtJQUNBdkQsTUFBQUEsQ0FBQTBrQixPQUFBQSxHQUFBamhCLENBQUFBLENBQUErZixPQUFBQSxDQUFBamdCLFFBQUFBLENBQUEvRCxJQUFBQSxDQUFBaUcsR0FBQUEsQ0FBQWtmLE1BQUFBLEtBQUE7TUFDQUMsS0FBQUEsRUFBQUQsTUFBQUE7TUFDQTllLElBQUFBLEVBQUE4ZSxNQUFBQSxDQUFBRSxTQUFBQSxDQUFBLENBQUEsRUFBQUYsTUFBQUEsQ0FBQXZULE9BQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQWxXLE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQSxDQUFBNHBCLFVBQUFBO0lBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBO0lBRUEsS0FBQSxJQUFBSCxNQUFBQSxJQUFBM2tCLE1BQUFBLENBQUEwa0IsT0FBQUEsRUFDQUMsTUFBQUEsQ0FBQTFMLE9BQUFBLEdBQUF4VixDQUFBQSxDQUFBK2YsT0FBQUEsQ0FBQSxDQUFBbUIsTUFBQUEsQ0FBQTllLElBQUFBLEVBQUFBLEdBQUFrZixnQkFBQUEsQ0FBQUosTUFBQUEsQ0FBQTllLElBQUFBLENBQUFBLENBQUFBLENBQUFBO0lBRUEvRyxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBaUIsTUFBQUEsQ0FBQTBrQixPQUFBQSxDQUNBO0VBQUEsQ0FBQSxDQUFBLEVBRUExa0IsTUFBQUEsQ0FBQWdsQixLQUFBQSxHQUFBLENBQUFMLE1BQUFBLEVBQUFLLEtBQUFBLEtBQUFBO0lBQ0FMLE1BQUFBLENBQUFLLEtBQUFBLEdBQUFBLEtBQUE7RUFBQSxDQUFBO0VBR0EsTUFBQUQsZ0JBQUFBLEdBQUFsZixJQUFBQSxJQUFBcEMsQ0FBQUEsQ0FBQStmLE9BQUFBLENBQUF4akIsTUFBQUEsQ0FBQTBrQixPQUFBQSxDQUFBL2lCLE1BQUFBLENBQUFnakIsTUFBQUEsSUFBQTllLElBQUFBLEtBQUE4ZSxNQUFBQSxDQUFBOWUsSUFBQUEsQ0FBQUEsQ0FBQUosR0FBQUEsQ0FBQWtmLE1BQUFBLElBQUFBLE1BQUFBLENBQUE5ZSxJQUFBQSxDQUFBQSxDQUFBQSxDQUFBakssS0FBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBO0VBRUFvRSxNQUFBQSxDQUFBaWxCLFFBQUFBLEdBQUEsTUFBQSxHQUFBamxCLE1BQUFBLENBQUEwa0IsT0FBQUEsQ0FBQS9pQixNQUFBQSxDQUFBZ2pCLE1BQUFBLElBQUFBLE1BQUFBLENBQUE5ZSxJQUFBQSxLQUFBOGUsTUFBQUEsQ0FBQUssS0FBQUEsQ0FBQUEsQ0FBQS9vQixNQUFBQSxJQUFBK0QsTUFBQUEsQ0FBQTBrQixPQUFBQSxDQUFBem9CLE1BQUFBLEVBQUFBLEVBRUErRCxNQUFBQSxDQUFBa2xCLGNBQUFBLEdBQUEsTUFBQWxsQixNQUFBQSxDQUFBMGtCLE9BQUFBLENBQUEvaUIsTUFBQUEsQ0FBQWdqQixNQUFBQSxJQUFBQSxNQUFBQSxDQUFBSyxLQUFBQSxDQUFBQSxDQUFBL29CLE1BQUFBLEtBQUErRCxNQUFBQSxDQUFBMGtCLE9BQUFBLENBQUF6b0IsTUFDQTtBQUFBLENBQUEsQ0FBQSxFQ3hCQWtCLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FXLFVBQUFBLENBQUEsZ0JBQUEsRUFBQSxVQUFBaUMsTUFBQUEsRUFBQXlrQixPQUFBQSxFQUFBQTtFQUNBQSxPQUFBQSxDQUFBZixTQUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUNBcGdCLElBQUFBLENBQUEsVUFBQUMsUUFBQUEsRUFBQUE7SUFDQXZELE1BQUFBLENBQUFnTyxNQUFBQSxHQUFBekssUUFBQUEsQ0FBQS9ELElBQ0E7RUFBQSxDQUFBLENBQ0E7QUFBQSxDQUFBLENBQUEsRUNOQXJDLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FXLFVBQUFBLENBQUEsZUFBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBeWtCLE9BQUFBLEVBQUFBO0VBQ0FBLE9BQUFBLENBQUFmLFNBQUFBLENBQUEsT0FBQSxDQUFBLENBQ0FwZ0IsSUFBQUEsQ0FBQSxVQUFBQyxRQUFBQSxFQUFBQTtJQUNBdkQsTUFBQUEsQ0FBQWdPLE1BQUFBLEdBQUF6SyxRQUFBQSxDQUFBL0QsSUFDQTtFQUFBLENBQUEsQ0FDQTtBQUFBLENBQUEsQ0FBQSxFQ05BckMsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQVcsVUFBQUEsQ0FBQSxnQkFBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBeWtCLE9BQUFBLEVBQUFBO0VBQ0FBLE9BQUFBLENBQUFmLFNBQUFBLENBQUEsUUFBQSxDQUFBLENBQ0FwZ0IsSUFBQUEsQ0FBQSxVQUFBQyxRQUFBQSxFQUFBQTtJQUNBdkQsTUFBQUEsQ0FBQWdPLE1BQUFBLEdBQUF6SyxRQUFBQSxDQUFBL0QsSUFDQTtFQUFBLENBQUEsQ0FDQTtBQUFBLENBQUEsQ0FBQSxFQ05BckMsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQVcsVUFBQUEsQ0FBQSxtQkFBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBeWtCLE9BQUFBLEVBQUFBO0VBRUFBLE9BQUFBLENBQUFmLFNBQUFBLENBQUEsV0FBQSxDQUFBLENBQ0FwZ0IsSUFBQUEsQ0FBQSxVQUFBQyxRQUFBQSxFQUFBQTtJQUNBdkQsTUFBQUEsQ0FBQTBrQixPQUFBQSxHQUFBamhCLENBQUFBLENBQUErZixPQUFBQSxDQUFBamdCLFFBQUFBLENBQUEvRCxJQUFBQSxDQUFBaUcsR0FBQUEsQ0FBQWtmLE1BQUFBLEtBQUE7TUFDQXhOLEtBQUFBLEVBQUF3TixNQUFBQTtNQUNBOWUsSUFBQUEsRUFBQThlLE1BQUFBLENBQUFFLFNBQUFBLENBQUEsQ0FBQSxFQUFBRixNQUFBQSxDQUFBdlQsT0FBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBbFcsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLENBQUE0cEIsVUFBQUE7SUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUE7SUFFQSxLQUFBLElBQUFILE1BQUFBLElBQUEza0IsTUFBQUEsQ0FBQTBrQixPQUFBQSxFQUNBQyxNQUFBQSxDQUFBMUwsT0FBQUEsR0FBQXhWLENBQUFBLENBQUErZixPQUFBQSxDQUFBLENBQUFtQixNQUFBQSxDQUFBOWUsSUFBQUEsRUFBQUEsR0FBQWtmLGdCQUFBQSxDQUFBSixNQUFBQSxDQUFBOWUsSUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUE7SUFFQS9HLE9BQUFBLENBQUFDLEdBQUFBLENBQUFpQixNQUFBQSxDQUFBMGtCLE9BQUFBLENBQ0E7RUFBQSxDQUFBLENBQUEsRUFFQTFrQixNQUFBQSxDQUFBZ2xCLEtBQUFBLEdBQUEsQ0FBQUwsTUFBQUEsRUFBQUssS0FBQUEsS0FBQUE7SUFDQUwsTUFBQUEsQ0FBQUssS0FBQUEsR0FBQUEsS0FBQTtFQUFBLENBQUE7RUFHQSxNQUFBRCxnQkFBQUEsR0FBQWxmLElBQUFBLElBQUFwQyxDQUFBQSxDQUFBK2YsT0FBQUEsQ0FBQXhqQixNQUFBQSxDQUFBMGtCLE9BQUFBLENBQUEvaUIsTUFBQUEsQ0FBQWdqQixNQUFBQSxJQUFBOWUsSUFBQUEsS0FBQThlLE1BQUFBLENBQUE5ZSxJQUFBQSxDQUFBQSxDQUFBSixHQUFBQSxDQUFBa2YsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQTllLElBQUFBLENBQUFBLENBQUFBLENBQUFqSyxLQUFBQSxDQUFBLENBQUEsRUFBQSxFQUFBLENBQUE7RUFFQW9FLE1BQUFBLENBQUFpbEIsUUFBQUEsR0FBQSxNQUFBLEdBQUFqbEIsTUFBQUEsQ0FBQTBrQixPQUFBQSxDQUFBL2lCLE1BQUFBLENBQUFnakIsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQTllLElBQUFBLEtBQUE4ZSxNQUFBQSxDQUFBSyxLQUFBQSxDQUFBQSxDQUFBL29CLE1BQUFBLElBQUErRCxNQUFBQSxDQUFBMGtCLE9BQUFBLENBQUF6b0IsTUFBQUEsRUFBQUEsRUFFQStELE1BQUFBLENBQUFrbEIsY0FBQUEsR0FBQSxNQUFBbGxCLE1BQUFBLENBQUEwa0IsT0FBQUEsQ0FBQS9pQixNQUFBQSxDQUFBZ2pCLE1BQUFBLElBQUFBLE1BQUFBLENBQUFLLEtBQUFBLENBQUFBLENBQUEvb0IsTUFBQUEsS0FBQStELE1BQUFBLENBQUEwa0IsT0FBQUEsQ0FBQXpvQixNQUNBO0FBQUEsQ0FBQSxDQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAgPSBbXHJcbiAge1xyXG4gICAgYmFzZTogXCJBXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDFcXHUyNEI2XFx1RkYyMVxcdTAwQzBcXHUwMEMxXFx1MDBDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHUwMEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHUwMEM0XFx1MDFERVxcdTFFQTJcXHUwMEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFBXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFFXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwQzZcXHUwMUZDXFx1MDFFMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQU9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOFxcdUE3M0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0MlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJDXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDNcXHUyNEI4XFx1RkYyM1xcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMEM3XFx1MUUwOFxcdTAxODdcXHUwMjNCXFx1QTczRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ0XFx1MjRCOVxcdUZGMjRcXHUxRTBBXFx1MDEwRVxcdTFFMENcXHUxRTEwXFx1MUUxMlxcdTFFMEVcXHUwMTEwXFx1MDE4QlxcdTAxOEFcXHUwMTg5XFx1QTc3OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMVxcdTAxQzRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjJcXHUwMUM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJFXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDVcXHUyNEJBXFx1RkYyNVxcdTAwQzhcXHUwMEM5XFx1MDBDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHUwMENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ2XFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0N1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJIXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJJXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDlcXHUyNEJFXFx1RkYyOVxcdTAwQ0NcXHUwMENEXFx1MDBDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHUwMENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJKXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEFcXHUyNEJGXFx1RkYyQVxcdTAxMzRcXHUwMjQ4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJLXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNENcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTEpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDREXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRFXFx1MjRDM1xcdUZGMkVcXHUwMUY4XFx1MDE0M1xcdTAwRDFcXHUxRTQ0XFx1MDE0N1xcdTFFNDZcXHUwMTQ1XFx1MUU0QVxcdTFFNDhcXHUwMjIwXFx1MDE5RFxcdUE3OTBcXHVBN0E0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNEZcXHUyNEM0XFx1RkYyRlxcdTAwRDJcXHUwMEQzXFx1MDBENFxcdTFFRDJcXHUxRUQwXFx1MUVENlxcdTFFRDRcXHUwMEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx1MDBENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHUwMEQ4XFx1MDFGRVxcdTAxODZcXHUwMTlGXFx1QTc0QVxcdUE3NENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9JXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9PXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NEVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9VXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAyMjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlBcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1MFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUxXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlJcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1MlxcdTI0QzdcXHVGRjMyXFx1MDE1NFxcdTFFNThcXHUwMTU4XFx1MDIxMFxcdTAyMTJcXHUxRTVBXFx1MUU1Q1xcdTAxNTZcXHUxRTVFXFx1MDI0Q1xcdTJDNjRcXHVBNzVBXFx1QTdBNlxcdUE3ODJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlNcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1M1xcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJUWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJVXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTVcXHUyNENBXFx1RkYzNVxcdTAwRDlcXHUwMERBXFx1MDBEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx1MDBEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIldcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1N1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU4XFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU5XFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx1MDBERFxcdTAxNzZcXHUxRUY4XFx1MDIzMlxcdTFFOEVcXHUwMTc4XFx1MUVGNlxcdTFFRjRcXHUwMUIzXFx1MDI0RVxcdTFFRkVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1QVxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2MVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxcdTAwRTBcXHUwMEUxXFx1MDBFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHUwMEUzXFx1MDEwMVxcdTAxMDNcXHUxRUIxXFx1MUVBRlxcdTFFQjVcXHUxRUIzXFx1MDIyN1xcdTAxRTFcXHUwMEU0XFx1MDFERlxcdTFFQTNcXHUwMEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFhXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFlXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwRTZcXHUwMUZEXFx1MDFFM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYW9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOVxcdUE3M0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0RdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2MlxcdTI0RDFcXHVGRjQyXFx1MUUwM1xcdTFFMDVcXHUxRTA3XFx1MDE4MFxcdTAxODNcXHUwMjUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJjXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjNcXHUyNEQyXFx1RkY0M1xcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHUwMEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjNcXHUwMUM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJlXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjVcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJnXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjdcXHUyNEQ2XFx1RkY0N1xcdTAxRjVcXHUwMTFEXFx1MUUyMVxcdTAxMUZcXHUwMTIxXFx1MDFFN1xcdTAxMjNcXHUwMUU1XFx1MDI2MFxcdUE3QTFcXHUxRDc5XFx1QTc3Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY4XFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImh2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxOTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImlcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2OVxcdTI0RDhcXHVGRjQ5XFx1MDBFQ1xcdTAwRURcXHUwMEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx1MDBFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QVxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJrXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkJcXHUyNERBXFx1RkY0QlxcdTFFMzFcXHUwMUU5XFx1MUUzM1xcdTAxMzdcXHUxRTM1XFx1MDE5OVxcdTJDNkFcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBN0EzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJsXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkNcXHUyNERCXFx1RkY0Q1xcdTAxNDBcXHUwMTNBXFx1MDEzRVxcdTFFMzdcXHUxRTM5XFx1MDEzQ1xcdTFFM0RcXHUxRTNCXFx1MDE3RlxcdTAxNDJcXHUwMTlBXFx1MDI2QlxcdTJDNjFcXHVBNzQ5XFx1QTc4MVxcdUE3NDddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm1cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2RFxcdTI0RENcXHVGRjREXFx1MUUzRlxcdTFFNDFcXHUxRTQzXFx1MDI3MVxcdTAyNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RVxcdTI0RERcXHVGRjRFXFx1MDFGOVxcdTAxNDRcXHUwMEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RlxcdTI0REVcXHVGRjRGXFx1MDBGMlxcdTAwRjNcXHUwMEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxcdTAwRjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHUwMEY2XFx1MDIyQlxcdTFFQ0ZcXHUwMTUxXFx1MDFEMlxcdTAyMERcXHUwMjBGXFx1MDFBMVxcdTFFRERcXHUxRURCXFx1MUVFMVxcdTFFREZcXHUxRUUzXFx1MUVDRFxcdTFFRDlcXHUwMUVCXFx1MDFFRFxcdTAwRjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib2lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib3VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib29cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwicFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDcwXFx1MjRERlxcdUZGNTBcXHUxRTU1XFx1MUU1N1xcdTAxQTVcXHUxRDdEXFx1QTc1MVxcdUE3NTNcXHVBNzU1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJxXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiclwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDcyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwic1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDczXFx1MjRFMlxcdUZGNTNcXHUwMERGXFx1MDE1QlxcdTFFNjVcXHUwMTVEXFx1MUU2MVxcdTAxNjFcXHUxRTY3XFx1MUU2M1xcdTFFNjlcXHUwMjE5XFx1MDE1RlxcdTAyM0ZcXHVBN0E5XFx1QTc4NVxcdTFFOUJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTcyOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDc1XFx1MjRFNFxcdUZGNTVcXHUwMEY5XFx1MDBGQVxcdTAwRkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxcdTAwRkNcXHUwMURDXFx1MDFEOFxcdTAxRDZcXHUwMURBXFx1MUVFN1xcdTAxNkZcXHUwMTcxXFx1MDFENFxcdTAyMTVcXHUwMjE3XFx1MDFCMFxcdTFFRUJcXHUxRUU5XFx1MUVFRlxcdTFFRURcXHUxRUYxXFx1MUVFNVxcdTFFNzNcXHUwMTczXFx1MUU3N1xcdTFFNzVcXHUwMjg5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2eVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzYxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ3XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzdcXHUyNEU2XFx1RkY1N1xcdTFFODFcXHUxRTgzXFx1MDE3NVxcdTFFODdcXHUxRTg1XFx1MUU5OFxcdTFFODlcXHUyQzczXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ4XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzhcXHUyNEU3XFx1RkY1OFxcdTFFOEJcXHUxRThEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzlcXHUyNEU4XFx1RkY1OVxcdTFFRjNcXHUwMEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxcdTAwRkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3QVxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjNdL2csXHJcbiAgfSxcclxuXTtcclxudmFyIGRvbWFpbnMgPSBbXHJcbiAgXCIuY29tXCIsXHJcbiAgXCIub3JnXCIsXHJcbiAgXCIubmV0XCIsXHJcbiAgXCIuYWNcIixcclxuICBcIi5hZFwiLFxyXG4gIFwiLmFlXCIsXHJcbiAgXCIuYWZcIixcclxuICBcIi5hZ1wiLFxyXG4gIFwiLmFpXCIsXHJcbiAgXCIuYWxcIixcclxuICBcIi5hbVwiLFxyXG4gIFwiLmFvXCIsXHJcbiAgXCIuYXFcIixcclxuICBcIi5hclwiLFxyXG4gIFwiLmFzXCIsXHJcbiAgXCIuYXRcIixcclxuICBcIi5hdVwiLFxyXG4gIFwiLmF3XCIsXHJcbiAgXCIuYXhcIixcclxuICBcIi5helwiLFxyXG4gIFwiLmJhXCIsXHJcbiAgXCIuYmJcIixcclxuICBcIi5iZFwiLFxyXG4gIFwiLmJlXCIsXHJcbiAgXCIuYmZcIixcclxuICBcIi5iZ1wiLFxyXG4gIFwiLmJoXCIsXHJcbiAgXCIuYmlcIixcclxuICBcIi5ialwiLFxyXG4gIFwiLmJtXCIsXHJcbiAgXCIuYm5cIixcclxuICBcIi5ib1wiLFxyXG4gIFwiLmJxXCIsXHJcbiAgXCIuYnJcIixcclxuICBcIi5ic1wiLFxyXG4gIFwiLmJ0XCIsXHJcbiAgXCIuYndcIixcclxuICBcIi5ieVwiLFxyXG4gIFwiLmJ6XCIsXHJcbiAgXCIuY2FcIixcclxuICBcIi5jY1wiLFxyXG4gIFwiLmNkXCIsXHJcbiAgXCIuY2ZcIixcclxuICBcIi5jZ1wiLFxyXG4gIFwiLmNoXCIsXHJcbiAgXCIuY2lcIixcclxuICBcIi5ja1wiLFxyXG4gIFwiLmNsXCIsXHJcbiAgXCIuY21cIixcclxuICBcIi5jblwiLFxyXG4gIFwiLmNvXCIsXHJcbiAgXCIuY3JcIixcclxuICBcIi5jdVwiLFxyXG4gIFwiLmN2XCIsXHJcbiAgXCIuY3dcIixcclxuICBcIi5jeFwiLFxyXG4gIFwiLmN5XCIsXHJcbiAgXCIuY3pcIixcclxuICBcIi5kZVwiLFxyXG4gIFwiLmRqXCIsXHJcbiAgXCIuZGtcIixcclxuICBcIi5kbVwiLFxyXG4gIFwiLmRvXCIsXHJcbiAgXCIuZHpcIixcclxuICBcIi5lY1wiLFxyXG4gIFwiLmVlXCIsXHJcbiAgXCIuZWdcIixcclxuICBcIi5laFwiLFxyXG4gIFwiLmVyXCIsXHJcbiAgXCIuZXNcIixcclxuICBcIi5ldFwiLFxyXG4gIFwiLmV1XCIsXHJcbiAgXCIuZmlcIixcclxuICBcIi5malwiLFxyXG4gIFwiLmZrXCIsXHJcbiAgXCIuZm1cIixcclxuICBcIi5mb1wiLFxyXG4gIFwiLmZyXCIsXHJcbiAgXCIuZ2FcIixcclxuICBcIi5nZFwiLFxyXG4gIFwiLmdlXCIsXHJcbiAgXCIuZ2ZcIixcclxuICBcIi5nZ1wiLFxyXG4gIFwiLmdoXCIsXHJcbiAgXCIuZ2lcIixcclxuICBcIi5nbFwiLFxyXG4gIFwiLmdtXCIsXHJcbiAgXCIuZ25cIixcclxuICBcIi5ncFwiLFxyXG4gIFwiLmdxXCIsXHJcbiAgXCIuZ3JcIixcclxuICBcIi5nc1wiLFxyXG4gIFwiLmd0XCIsXHJcbiAgXCIuZ3VcIixcclxuICBcIi5nd1wiLFxyXG4gIFwiLmd5XCIsXHJcbiAgXCIuaGtcIixcclxuICBcIi5obVwiLFxyXG4gIFwiLmhuXCIsXHJcbiAgXCIuaHJcIixcclxuICBcIi5odFwiLFxyXG4gIFwiLmh1XCIsXHJcbiAgXCIuaWRcIixcclxuICBcIi5pZVwiLFxyXG4gIFwiLmlsXCIsXHJcbiAgXCIuaW1cIixcclxuICBcIi5pblwiLFxyXG4gIFwiLmlvXCIsXHJcbiAgXCIuaXFcIixcclxuICBcIi5pclwiLFxyXG4gIFwiLmlzXCIsXHJcbiAgXCIuaXRcIixcclxuICBcIi5qZVwiLFxyXG4gIFwiLmptXCIsXHJcbiAgXCIuam9cIixcclxuICBcIi5qcFwiLFxyXG4gIFwiLmtlXCIsXHJcbiAgXCIua2dcIixcclxuICBcIi5raFwiLFxyXG4gIFwiLmtpXCIsXHJcbiAgXCIua21cIixcclxuICBcIi5rblwiLFxyXG4gIFwiLmtwXCIsXHJcbiAgXCIua3JcIixcclxuICBcIi5rd1wiLFxyXG4gIFwiLmt5XCIsXHJcbiAgXCIua3pcIixcclxuICBcIi5sYVwiLFxyXG4gIFwiLmxiXCIsXHJcbiAgXCIubGNcIixcclxuICBcIi5saVwiLFxyXG4gIFwiLmxrXCIsXHJcbiAgXCIubHJcIixcclxuICBcIi5sc1wiLFxyXG4gIFwiLmx0XCIsXHJcbiAgXCIubHVcIixcclxuICBcIi5sdlwiLFxyXG4gIFwiLmx5XCIsXHJcbiAgXCIubWFcIixcclxuICBcIi5tY1wiLFxyXG4gIFwiLm1kXCIsXHJcbiAgXCIubWVcIixcclxuICBcIi5tZ1wiLFxyXG4gIFwiLm1oXCIsXHJcbiAgXCIubWtcIixcclxuICBcIi5tbFwiLFxyXG4gIFwiLm1tXCIsXHJcbiAgXCIubW5cIixcclxuICBcIi5tb1wiLFxyXG4gIFwiLm1wXCIsXHJcbiAgXCIubXFcIixcclxuICBcIi5tclwiLFxyXG4gIFwiLm1zXCIsXHJcbiAgXCIubXRcIixcclxuICBcIi5tdVwiLFxyXG4gIFwiLm12XCIsXHJcbiAgXCIubXdcIixcclxuICBcIi5teFwiLFxyXG4gIFwiLm15XCIsXHJcbiAgXCIubXpcIixcclxuICBcIi5uYVwiLFxyXG4gIFwiLm5jXCIsXHJcbiAgXCIubmVcIixcclxuICBcIi5uZlwiLFxyXG4gIFwiLm5nXCIsXHJcbiAgXCIubmlcIixcclxuICBcIi5ubFwiLFxyXG4gIFwiLm5vXCIsXHJcbiAgXCIubnBcIixcclxuICBcIi5uclwiLFxyXG4gIFwiLm51XCIsXHJcbiAgXCIubnpcIixcclxuICBcIi5vbVwiLFxyXG4gIFwiLnBhXCIsXHJcbiAgXCIucGVcIixcclxuICBcIi5wZlwiLFxyXG4gIFwiLnBnXCIsXHJcbiAgXCIucGhcIixcclxuICBcIi5wa1wiLFxyXG4gIFwiLnBsXCIsXHJcbiAgXCIucG1cIixcclxuICBcIi5wblwiLFxyXG4gIFwiLnByXCIsXHJcbiAgXCIucHNcIixcclxuICBcIi5wdFwiLFxyXG4gIFwiLnB3XCIsXHJcbiAgXCIucHlcIixcclxuICBcIi5xYVwiLFxyXG4gIFwiLnJlXCIsXHJcbiAgXCIucm9cIixcclxuICBcIi5yc1wiLFxyXG4gIFwiLnJ1XCIsXHJcbiAgXCIucndcIixcclxuICBcIi5zYVwiLFxyXG4gIFwiLnNiXCIsXHJcbiAgXCIuc2NcIixcclxuICBcIi5zZFwiLFxyXG4gIFwiLnNlXCIsXHJcbiAgXCIuc2dcIixcclxuICBcIi5zaFwiLFxyXG4gIFwiLnNpXCIsXHJcbiAgXCIuc2tcIixcclxuICBcIi5zbFwiLFxyXG4gIFwiLnNtXCIsXHJcbiAgXCIuc25cIixcclxuICBcIi5zb1wiLFxyXG4gIFwiLnNyXCIsXHJcbiAgXCIuc3NcIixcclxuICBcIi5zdFwiLFxyXG4gIFwiLnN1XCIsXHJcbiAgXCIuc3ZcIixcclxuICBcIi5zeFwiLFxyXG4gIFwiLnN5XCIsXHJcbiAgXCIuc3pcIixcclxuICBcIi50Y1wiLFxyXG4gIFwiLnRkXCIsXHJcbiAgXCIudGZcIixcclxuICBcIi50Z1wiLFxyXG4gIFwiLnRoXCIsXHJcbiAgXCIudGpcIixcclxuICBcIi50a1wiLFxyXG4gIFwiLnRsXCIsXHJcbiAgXCIudG1cIixcclxuICBcIi50blwiLFxyXG4gIFwiLnRvXCIsXHJcbiAgXCIudHJcIixcclxuICBcIi50dFwiLFxyXG4gIFwiLnR2XCIsXHJcbiAgXCIudHdcIixcclxuICBcIi50elwiLFxyXG4gIFwiLnVhXCIsXHJcbiAgXCIudWdcIixcclxuICBcIi51a1wiLFxyXG4gIFwiLnVzXCIsXHJcbiAgXCIudXlcIixcclxuICBcIi51elwiLFxyXG4gIFwiLnZhXCIsXHJcbiAgXCIudmNcIixcclxuICBcIi52ZVwiLFxyXG4gIFwiLnZnXCIsXHJcbiAgXCIudmlcIixcclxuICBcIi52blwiLFxyXG4gIFwiLnZ1XCIsXHJcbiAgXCIud2ZcIixcclxuICBcIi53c1wiLFxyXG4gIFwiLnllXCIsXHJcbiAgXCIueXRcIixcclxuICBcIi56YVwiLFxyXG4gIFwiLnptXCIsXHJcbiAgXCIuendcIixcclxuXTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZURpYWNyaXRpY3NcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwLnJlZHVjZSgocmVzdWx0LCBsZXR0ZXIpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKGxldHRlci5sZXR0ZXJzLCBsZXR0ZXIuYmFzZSk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IFNQRUNJQUxfQ0hBUkFDVEVSUyA9IFwiXFxcXFxcXFwvICE/QCMkJV4mKigpXys6Lnt9LDtcXFxcLSdgYOKAmeKAmFxcXCJcIjtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbJHtTUEVDSUFMX0NIQVJBQ1RFUlN9XWAsIFwiZ2lcIiksIFwiXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlQWxsQnV0TGV0dGVyc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlKCkucmVtb3ZlRGlhY3JpdGljcygpLnJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzKCk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjb25jZWFsXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGV4dHJhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFteJHtTUEVDSUFMX0NIQVJBQ1RFUlN9JHtleHRyYX1dYCwgXCJnaVwiKSwgXCLigY5cIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjYXBpdGFsaXplXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnNsaWNlKDEpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlSFRNTFwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoXCI+XCIsIFwiXFx1MjI3QlwiKS5yZXBsYWNlKFwiPFwiLCBcIlxcdTIyN0FcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJwYXJzZVN5bWJvbHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlQWxsKFwiJlwiLCBcIiZhbXA7XCIpLnJlcGxhY2UoXCI8XCIsIFwiJmx0O1wiKS5yZXBsYWNlKFwiPlwiLCBcIiZndDtcIikucmVwbGFjZUFsbChcIiNcIiwgXCImbnVtO1wiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlcGxhY2VBcnJheVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChmaW5kLCByZXBsYWNlKSB7XHJcbiAgICB2YXIgcmVwbGFjZVN0cmluZyA9IHRoaXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcmVwbGFjZVN0cmluZyA9IHJlcGxhY2VTdHJpbmcucmVwbGFjZShmaW5kW2ldLCByZXBsYWNlW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXBsYWNlU3RyaW5nO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwibWFza1VSTHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlQXJyYXkoW1wiaHR0cHM6Ly9cIiwgXCJodHRwOi8vXCJdLCBcIm5vcGU6Ly9cIikucmVwbGFjZUFycmF5KGRvbWFpbnMsIFwiLm5vcGVcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJtYWtlUmVhZGFibGVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VQZXJjZW50YWdlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGRlY2ltYWxzKSB7XHJcbiAgICBpZiAoIWRlY2ltYWxzKSBkZWNpbWFscyA9IDI7XHJcbiAgICByZXR1cm4gYCR7KHRoaXMgKiAxMDApLnRvRml4ZWQoZGVjaW1hbHMpfSVgO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc29ydE9iamVjdCA9IChvYmosIGRpcmVjdGlvbikgPT4ge1xyXG4gIGxldCBhcnIgPSBbXTtcclxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgIGFyci5wdXNoKFtrZXksIG9ialtrZXldXSk7XHJcbiAgfVxyXG4gIGFyci5zb3J0KChhLCBiKSA9PiAoZGlyZWN0aW9uID8gYVsxXSAtIGJbMV0gOiBiWzFdIC0gYVsxXSkpO1xyXG4gIGxldCBvYmpTb3J0ZWQgPSB7fTtcclxuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4gKG9ialNvcnRlZFtpdGVtWzBdXSA9IGl0ZW1bMV0pKTtcclxuICAvL2Fyci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgYS52YWx1ZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi52YWx1ZS50b0xvd2VyQ2FzZSgpKTsgfSk7IC8vdXNlIHRoaXMgdG8gc29ydCBhcyBzdHJpbmdzXHJcbiAgcmV0dXJuIG9ialNvcnRlZDsgLy8gcmV0dXJucyBhcnJheVxyXG59O1xyXG4iLCIvKlxyXG4kID0galF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbnZhciBib290c3RyYXAgPSByZXF1aXJlKCdib290c3RyYXAnKTtcclxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XHJcbnZhciBhbmd1bGFyU2FuaXRpemUgPSByZXF1aXJlKCdhbmd1bGFyLXNhbml0aXplJyk7XHJcbnZhciBhbmd1bGFyQW5pbWF0ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItYW5pbWF0ZScpO1xyXG4qL1xyXG5hbmd1bGFyLm1vZHVsZShcImFwcFwiLCBbXHJcbiAgXCJ1aS5yb3V0ZXJcIixcclxuICBcInVpLmJvb3RzdHJhcFwiLFxyXG4gIFwibmdBbmltYXRlXCIsXHJcbiAgXCJuZ1Nhbml0aXplXCIsXHJcbiAgXCJuZ0RyYWdEcm9wXCIsXHJcbiAgXCJuZ1RhZ3NJbnB1dFwiLFxyXG4gIFwidmNSZWNhcHRjaGFcIixcclxuICBcImNoYXJ0LmpzXCIsXHJcbiAgXCJ0Yy5jaGFydGpzXCIsXHJcbiAgXCJpbmZpbml0ZS1zY3JvbGxcIixcclxuXSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJHVybFNlcnZpY2VQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcclxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwiL2hvbWVcIik7XHJcbiAgJHVybFNlcnZpY2VQcm92aWRlci5jb25maWcuc3RyaWN0TW9kZShmYWxzZSk7XHJcblxyXG4gICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAuc3RhdGUoXCJob21lXCIsIHtcclxuICAgICAgdXJsOiBcIi9ob21lXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9ob21lLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwb2xpY3lcIiwge1xyXG4gICAgICB1cmw6IFwiL3BvbGljeVwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcG9saWN5Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwcmludFwiLCB7XHJcbiAgICAgIHVybDogXCIvcHJpbnRcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3ByaW50Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJleHBlcmllbmNlXCIsIHtcclxuICAgICAgdXJsOiBcIi9leHBlcmllbmNlXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiRXhwZXJpZW5jZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2V4cGVyaWVuY2UuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInNraWxsc1wiLCB7XHJcbiAgICAgIHVybDogXCIvc2tpbGxzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiU2tpbGxzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvc2tpbGxzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJob2JiaWVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9ob2JiaWVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiSG9iYmllc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2hvYmJpZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImNvbnRhY3RcIiwge1xyXG4gICAgICB1cmw6IFwiL2NvbnRhY3RcIixcclxuICAgICAgY29udHJvbGxlcjogXCJDb250YWN0Q3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvY29udGFjdC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwid29ya291dFwiLCB7XHJcbiAgICAgIHVybDogXCIvd29ya291dFwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIldvcmtvdXRDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi93b3Jrb3V0Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwb3N0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvcG9zdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJQb3N0c0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3Bvc3RzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwcm9maWxlXCIsIHtcclxuICAgICAgdXJsOiBcIi9wcm9maWxlXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUHJvZmlsZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3Byb2ZpbGUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImxpc3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9saXN0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkxpc3RzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJsaXN0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYnViYmxlc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYnViYmxlc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkJ1YmJsZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImJ1YmJsZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImFzdGVyb2lkc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYXN0ZXJvaWRzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQXN0ZXJvaWRzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJhc3Rlcm9pZHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImxlbW1pbmdzXCIsIHtcclxuICAgICAgdXJsOiBcIi9sZW1taW5nc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkxlbW1pbmdzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJsZW1taW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYm90c1wiLCB7XHJcbiAgICAgIHVybDogXCIvYm90c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3NcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5nc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3MtYWRtaW5cIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy1hZG1pblwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0FkbWluQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MtYWRtaW4uaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1nYW1lXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3MvOmdhbWVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NHYW1lQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MtZ2FtZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLXN0YXRzXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3Mtc3RhdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NTdGF0c0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLXN0YXRzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWdvb2dsZVwiLCB7XHJcbiAgICAgIHVybDogXCIvZ29vZ2xlXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekdvb2dsZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9nb29nbGUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotbG9nb3NcIiwge1xyXG4gICAgICB1cmw6IFwiL2xvZ29zXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekxvZ29zQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL2xvZ29zLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWFuaW1hbHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2FuaW1hbHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6QW5pbWFsc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9hbmltYWxzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LXNrZWxldG9uc1wiLCB7XHJcbiAgICAgIHVybDogXCIvc2tlbGV0b25zXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpelNrZWxldG9uc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9za2VsZXRvbnMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotbW92aWVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9tb3ZpZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6TW92aWVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL21vdmllcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiY2hhcmFkZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2NoYXJhZGVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQ2hhcmFkZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9jaGFyYWRlcy5odG1sXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHtcclxuICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICByZXF1aXJlQmFzZTogZmFsc2UsXHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ1dlYlNvY2tldFN2YycsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkdGltZW91dCkge1xyXG4gIGZ1bmN0aW9uIHdlYnNvY2tldEhvc3QoKSB7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6Jykge1xyXG4gICAgICByZXR1cm4gXCJ3c3M6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwid3M6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGNvbm5lY3Rpb247XHJcbiAgdmFyIGNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25uZWN0aW9uID0gbmV3IFdlYlNvY2tldCh3ZWJzb2NrZXRIb3N0KCkpO1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25vcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnV2Vic29ja2V0IGNvbm5lY3RlZCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9uY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnV2Vic29ja2V0IGNsb3NlZC4gUmVjb25uZWN0aW5nLi4uJyk7XHJcbiAgICAgICR0aW1lb3V0KGNvbm5lY3QsIDEwMDApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZSArIFwiIC0gU3RhdGU6IFwiICsgY29ubmVjdGlvbi5yZWFkeVN0YXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgcGF5bG9hZCA9IEpTT04ucGFyc2UoZS5kYXRhKTtcclxuICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCd3czonICsgcGF5bG9hZC50b3BpYywgcGF5bG9hZC5kYXRhKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5zZW5kID0gZnVuY3Rpb24gKHRvcGljLCBkYXRhKSB7XHJcbiAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KHt0b3BpYzogdG9waWMsIGRhdGE6IGRhdGF9KTtcclxuICAgIGNvbm5lY3Rpb24uc2VuZChqc29uKTtcclxuICB9O1xyXG5cclxuICB0aGlzLmNvbm5lY3QgPSBjb25uZWN0O1xyXG5cclxufSkucnVuKGZ1bmN0aW9uIChXZWJTb2NrZXRTdmMpIHtcclxuICBXZWJTb2NrZXRTdmMuY29ubmVjdCgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkFwcEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgTGFuZ3VhZ2VTdmMsIFVzZXJTdmMpIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiJWNZb3Ugc25lYWt5IGJ1Z2dlciFcIixcclxuICAgIFwiZm9udDogMmVtIHNhbnMtc2VyaWY7IGNvbG9yOiBEb2RnZXJCbHVlOyB0ZXh0LXNoYWRvdzogMnB4IDAgMCAjNDQ0LCAtMnB4IDAgMCAjNDQ0LCAwIDJweCAwICM0NDQsIDAgLTJweCAwICM0NDQsIDFweCAxcHggIzQ0NCwgLTFweCAtMXB4IDAgIzQ0NCwgMXB4IC0xcHggMCAjNDQ0LCAtMXB4IDFweCAwICM0NDQ7XCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiSSdtIGdsYWQgeW91J3JlIGN1cmlvdXMgd2hldGhlciBzb21ldGhpbmcgaXMgcG9wcGluZyB1cCBpbiBoZXJlLiBJJ20gYSBiaXQgb2YgYSBzdGlja2xlciB3aGVuIGl0IGNvbWVzIHRvIG1lc3NhZ2VzIGluIHRoZSBjb25zb2xlIHNvIEkgdHJ5IHRvIG1ha2Ugc3VyZSBvbmx5IHRoaW5ncyBJIHdhbnQgYXJlIHZpc2libGUuIFRoYXQgYmVpbmcgc2FpZCwgaWYgdGhlcmUgaXMgYSBiaWcgZXJyb3IgaGVyZSwgSSB3b3VsZCByZWFsbHkgYXBwcmVjaWF0ZSB5b3UgdGVsbGluZyBtZSBzbyBJIGNhbiBnZXQgcmlkIG9mIGl0IVwiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIlRoZSBjb2RlIGZvciBteSByZXN1bWUgaXMgaG9zdGVkIG9uIEdpdGh1YiBpZiB5b3UgcmVhbGx5IHdhbnQgdG8gZ28gaW50byBhbGwgdGhpcyEgPT4gaHR0cHM6Ly9naXRodWIuY29tL0ZsYW5kZXJzQnVyZ2VyL3Jlc3VtZVwiLFxyXG4gICk7XHJcblxyXG4gIC8qXHJcbiAgICAkKGRvY3VtZW50KS5iaW5kKFwia2V5dXAga2V5ZG93blwiLCBmdW5jdGlvbihlKXtcclxuICAgICAgaWYoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PSA4MCl7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgKi9cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5sb2FkaW5nXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuY2hlY2tib3gtbWVudVwiKS5vbihcImNoYW5nZVwiLCBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KFwibGlcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIiwgdGhpcy5jaGVja2VkKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5hbGxvdy1mb2N1c1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnRoZW1lQ291bnRlciA9IDY7XHJcbiAgJHNjb3BlLnRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAkc2NvcGUueWVhciA9ICRzY29wZS50b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICRzY29wZS5yYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcclxuXHJcbiAgJHNjb3BlLmZsaXBUaGVtZSA9ICgpID0+IHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5zaG93KCk7XHJcbiAgICAkKFwiLmNvbnRlbnRcIikuaGlkZSgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgICB9LCA4MDApO1xyXG4gICAgJHNjb3BlLnRoZW1lQ291bnRlciA9ICRzY29wZS50aGVtZUNvdW50ZXIgPCA2ID8gJHNjb3BlLnRoZW1lQ291bnRlciArIDEgOiAoJHNjb3BlLnRoZW1lQ291bnRlciA9IDEpO1xyXG4gIH07XHJcblxyXG4gICQuZ2V0SlNPTihcIi9za2lsbHMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLnNraWxscyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuZW5hYmxlZDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvaG9iYmllcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuaG9iYmllcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9leHBlcmllbmNlLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5qb2JzID0gZGF0YTtcclxuICAgICRzY29wZS5qb2JzLmZvckVhY2goKGpvYikgPT4ge1xyXG4gICAgICBqb2Iuc3RhcnREYXRlID0gbmV3IERhdGUoam9iLnN0YXJ0RGF0ZSk7XHJcbiAgICAgIGlmIChqb2IuZW5kRGF0ZSkgam9iLmVuZERhdGUgPSBuZXcgRGF0ZShqb2IuZW5kRGF0ZSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2NoYXJhZGVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5jaGFyYWRlcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5nZXRUaW1lU3BhbiA9IChqb2IpID0+IHtcclxuICAgIHJldHVybiBqb2Iuc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyAoam9iLmVuZERhdGUgPyBcIiAtIFwiICsgam9iLmVuZERhdGUuZ2V0RnVsbFllYXIoKSA6IFwiIC0gVG9kYXlcIik7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmxhbmd1YWdlcyA9IExhbmd1YWdlU3ZjLmxhbmd1YWdlcztcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBMYW5ndWFnZVN2Yy5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0TGFuZ3VhZ2UgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5ob3ZlcmRpdiA9IChlLCBkaXZpZCkgPT4ge1xyXG4gICAgdmFyIGxlZnQgPSBlLmNsaWVudFggKyBcInB4XCI7XHJcbiAgICB2YXIgdG9wID0gZS5jbGllbnRZICsgMjAgKyBcInB4XCI7XHJcblxyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdmlkKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcImxlZnRcIiwgbGVmdCk7XHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcInRvcFwiLCB0b3ApO1xyXG5cclxuICAgICQoXCIjXCIgKyBkaXZpZCkudG9nZ2xlKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikge1xyXG4gICAgVXNlclN2Yy5sb2dpbih3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGxvZ2luKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8sIHVzZXIpID0+IHtcclxuICAgIGxvZ2luKHVzZXIpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XHJcbiAgICBpZiAoISRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIgPSB1c2VyLl9pZDtcclxuICAgICAgJHNjb3BlLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUpO1xyXG4gICAgICAkc2NvcGUuJGJyb2FkY2FzdChcImxvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS4kb24oXCJ1cGRhdGVcIiwgKF8sIHVzZXIpID0+IHtcclxuICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlID0gbmV3IERhdGUoJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSk7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkaW5nXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5zaG93KCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkZWRcIiwgKF8sIHVzZXIpID0+IHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIiNsb2FkaW5nLWljb25cIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmxvZ291dCA9ICgpID0+IHtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgIC5hdXRoKClcclxuICAgICAgLnNpZ25PdXQoKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dvdXRcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgbW9udGhzID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpICsgXCItXCIgKyBtb250aHNbZGF0ZS5nZXRNb250aCgpXSArIFwiLVwiICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQXN0ZXJvaWRzQ3RybFwiLCBmdW5jdGlvbiAoJGxvY2F0aW9uLCAkc2NvcGUsIEdhbWVTdmMpIHtcclxuICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzdGVyb2lkcy1wYWdlXCIpO1xyXG4gIGlmICghY2FudmFzKSB7XHJcbiAgICAkbG9jYXRpb24ucGF0aChcIi9ob21lXCIpO1xyXG4gICAgcmV0dXJuIGFsZXJ0KFwiXCIpO1xyXG4gIH1cclxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIGN0eC5mb250ID0gXCIzMHB4IENvbWljIFNhbnMgTVNcIjtcclxuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjb25zdCBzaG90cyA9IHt9O1xyXG4gIGNvbnN0IGFzdGVyb2lkcyA9IHt9O1xyXG4gIGNvbnN0IHBvd2VydXBzID0ge307XHJcbiAgY29uc3QgZXhwbG9zaW9ucyA9IHt9O1xyXG4gIGNvbnN0IG1hcCA9IHt9O1xyXG4gIGNvbnN0IHNwYWNlcGljcyA9IDEwO1xyXG4gIGNvbnN0IHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICBjb25zdCBwb3dlcnVwVHlwZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwic3BlZWRcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIk1heCBTcGVlZCDih6dcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgICAgc2l6ZTogWzE0LCAzNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLm1heFNwZWVkICs9IDEwMDtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiY29vbGRvd25cIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIkNvb2xkb3duIOKHqVwiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogMyxcclxuICAgICAgICBzaXplOiBbMTcsIDE3XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLmNvb2xkb3duVGltZSAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwicmFuZ2VcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIkZpcmluZyBSYW5nZSDih6dcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA0LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzMwLCA4XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAucmFuZ2UgKz0gNTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwic2hpZWxkXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJTaGllbGRcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA1LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzE5LCAxOV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnNoaWVsZCA9IHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIm51a2VcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIk51a2VcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgICAgc2l6ZTogWzE1LCAxNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICAgIGFzdGVyb2lkc1tpXS5leHBsb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYXduQXN0ZXJvaWRzKDUpO1xyXG4gICAgICB9LFxyXG4gICAgfSAvKlxyXG4gICAgJ3NpZGVfY2Fubm9ucycsXHJcbiAgICAnbGFzZXInLFxyXG4gICAgJ3NoaWVsZCcsXHJcbiAgICAnbGlmZScsXHJcbiAgICAnbWlzc2lsZXMnLFxyXG4gICAgJ251a2UnXHJcbiAgICAqLyxcclxuICBdO1xyXG4gIHBvd2VydXBUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChwb3dlcnVwLCBpLCBhcnJheSkge1xyXG4gICAgYXJyYXlbaV0uaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL1wiICsgcG93ZXJ1cC5uYW1lICsgXCIucG5nXCI7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBleHBsb3Npb25JbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGV4cGxvc2lvbkltYWdlLnNyYyA9IFwiYXN0ZXJvaWRzL2V4cGxvc2lvbi5wbmdcIjtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImtleWRvd25cIixcclxuICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIHRydWUsXHJcbiAgKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwia2V5dXBcIixcclxuICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB0cnVlLFxyXG4gICk7XHJcblxyXG4gICRzY29wZS5oaWdoc2NvcmUgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBldmFsdWF0ZUtleXMoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICAvL1NwYWNlXHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNob290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzddKSB7XHJcbiAgICAgICAgLy9MZWZ0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMzYwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gLT0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOV0pIHtcclxuICAgICAgICAvL1JpZ2h0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMzYwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gKz0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOF0pIHtcclxuICAgICAgICAvL1VwIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA8PSBzcGFjZXNoaXAubWF4U3BlZWQpIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCArPSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkLS07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbNDBdKSB7XHJcbiAgICAgICAgLy9Eb3duIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCAtPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICBzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTcGFjZXNoaXAoKSB7XHJcbiAgICB0aGlzLndpZHRoID0gNTA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDUwO1xyXG4gICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgIHRoaXMucmFuZ2UgPSA4MDtcclxuICAgIHRoaXMuY2Fubm9uID0ge1xyXG4gICAgICB4OiB0aGlzLndpZHRoIC8gMiAtIDQuNSxcclxuICAgICAgeTogdGhpcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgKiAwLjA3ODEyNSxcclxuICAgIH07XHJcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcclxuICAgIHRoaXMuY29vbGRvd25UaW1lID0gMjA7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW2NhbnZhcy53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDJdO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL3NwYWNlc2hpcC5wbmdcIjtcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5tYXhTcGVlZCA9IDEwMDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gMDtcclxuICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG5cclxuICAgIHRoaXMuc2hvb3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuY29vbGRvd24gPSB0aGlzLmNvb2xkb3duVGltZTtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgc2hvdHNbaWRdID0gbmV3IFNob3QoaWQsIHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguYXJjKHRoaXMucG9zaXRpb25bMF0gKyB0aGlzLndpZHRoIC8gMiwgdGhpcy5wb3NpdGlvblsxXSArIHRoaXMuaGVpZ2h0IC8gMiwgMzAsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMzUsIDIzNywgODYsIDAuNSlcIjtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYig2NiwgMTY4LCAzNiwgMC44KVwiO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgICAgdmFyIGFzdGVyb2lkID0gYXN0ZXJvaWRzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoYXN0ZXJvaWQsIHRoaXMpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zaGllbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYXN0ZXJvaWQuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdhbWVPdmVyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICBpZiAodGhpcy5jb29sZG93biA+IDApIHtcclxuICAgICAgICB0aGlzLmNvb2xkb3duLS07XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTaG90KGlkLCBzcGFjZXNoaXApIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbXHJcbiAgICAgIHNwYWNlc2hpcC5wb3NpdGlvblswXSArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi54ICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnggKiBNYXRoLmNvcygoKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKSxcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzFdICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnkgK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueSAqIE1hdGguc2luKCgoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSkgLyAxODApLFxyXG4gICAgXTtcclxuICAgIHRoaXMud2lkdGggPSA5O1xyXG4gICAgdGhpcy5oZWlnaHQgPSAxNTtcclxuICAgIHRoaXMuYW5nbGUgPSBzcGFjZXNoaXAuYW5nbGU7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gc3BhY2VzaGlwLnJvdGF0aW9uO1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwYWNlc2hpcC5zcGVlZCArIDUwMDtcclxuICAgIHRoaXMubGlmZXNwYW4gPSBzcGFjZXNoaXAucmFuZ2U7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvc2hvdC5wbmdcIjtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBBc3Rlcm9pZChpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy53aWR0aCA9IE1hdGgucmFuZG9tKCkgKiA1MCArIDIwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMucm90YXRpb25TcGVlZCA9IE1hdGgucmFuZG9tKCkgKiA2IC0gMztcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMzAwICsgMjtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBcImFzdGVyb2lkcy9hc3Rlcm9pZFwiICsgKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDYpICsgMSkgKyBcIi5wbmdcIjtcclxuXHJcbiAgICB0aGlzLmV4cGxvZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGV4cGxvc2lvbnNbdGhpcy5pZF0gPSBuZXcgRXhwbG9zaW9uKHRoaXMpO1xyXG4gICAgICByZXR1cm4gZGVsZXRlIGFzdGVyb2lkc1t0aGlzLmlkXTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZDtcclxuICAgICAgaWYgKHRoaXMucm90YXRpb24gPiAzNjApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gdGhpcy5yb3RhdGlvbiAtIDM2MDtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnJvdGF0aW9uIDwgMCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSAzNjAgKyB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgICB2YXIgc2hvdCA9IHNob3RzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoc2hvdCwgdGhpcykpIHtcclxuICAgICAgICAgIHRoaXMuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgdmFyIHBvaW50cyA9IE1hdGguZmxvb3IoKHNob3Quc3BlZWQgLSA1MDApIC8gMTAgKyA3MCAtIHRoaXMud2lkdGgpO1xyXG4gICAgICAgICAgaWYgKE1hdGguZmxvb3IoKHBvaW50cyArICRzY29wZS5zY29yZSkgLyAxMDApID4gTWF0aC5mbG9vcigkc2NvcGUuc2NvcmUgLyAxMDApKSB7XHJcbiAgICAgICAgICAgIHNwYXduUG93ZXJ1cCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJHNjb3BlLnNjb3JlICs9IHBvaW50cztcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIGRlbGV0ZSBzaG90c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBFeHBsb3Npb24ob2JqZWN0KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW29iamVjdC5wb3NpdGlvblswXSwgb2JqZWN0LnBvc2l0aW9uWzFdXTtcclxuICAgIHRoaXMud2lkdGggPSBvYmplY3Qud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9iamVjdC5oZWlnaHQ7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5jeWNsZSA9IHtcclxuICAgICAgcm93czogNixcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgc2l6ZTogWzI1NiwgMjU2XSxcclxuICAgICAgaTogMCxcclxuICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgfTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSA0NztcclxuICAgIHRoaXMuaW1nID0gZXhwbG9zaW9uSW1hZ2U7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuY3ljbGUuaSsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gUG93ZXJ1cChpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wb3dlcnVwID0gcG93ZXJ1cFR5cGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvd2VydXBUeXBlcy5sZW5ndGgpXTtcclxuICAgIHRoaXMuY3ljbGUgPSB0aGlzLnBvd2VydXAuY3ljbGU7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gMTAwMDtcclxuICAgIGlmICh0aGlzLmN5Y2xlLnNpemVbMV0gPiB0aGlzLmN5Y2xlLnNpemVbMF0pIHtcclxuICAgICAgdGhpcy5oZWlnaHQgPSA0MDtcclxuICAgICAgdGhpcy53aWR0aCA9IE1hdGgucm91bmQoKHRoaXMuaGVpZ2h0IC8gdGhpcy5jeWNsZS5zaXplWzFdKSAqIHRoaXMuY3ljbGUuc2l6ZVswXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndpZHRoID0gNDA7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5yb3VuZCgodGhpcy53aWR0aCAvIHRoaXMuY3ljbGUuc2l6ZVswXSkgKiB0aGlzLmN5Y2xlLnNpemVbMV0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5pbWcgPSB0aGlzLnBvd2VydXAuaW1nO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDE1MCArIDUwO1xyXG4gICAgdmFyIGRlbGF5ID0gNTtcclxuICAgIHRoaXMubW92ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhpdChzcGFjZXNoaXAsIHRoaXMpKSB7XHJcbiAgICAgICAgJHNjb3BlLmFubm91bmNlID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2VtZW50ID0gdGhpcy5wb3dlcnVwLmFubm91bmNlbWVudDtcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB0aGlzLnBvd2VydXAuYWN0aXZhdGUoc3BhY2VzaGlwKTtcclxuICAgICAgICByZXR1cm4gZGVsZXRlIHBvd2VydXBzW3RoaXMuaWRdO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKGRlbGF5IDw9IDApIHtcclxuICAgICAgICBpZiAodGhpcy5jeWNsZS5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLmktLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsYXkgPSA1O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGF5LS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlKG9iamVjdCkge1xyXG4gICAgb2JqZWN0LnBvc2l0aW9uWzBdICs9IChvYmplY3Quc3BlZWQgLyAxMDApICogTWF0aC5jb3MoKChvYmplY3QuYW5nbGUgLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBvYmplY3QucG9zaXRpb25bMV0gKz0gKG9iamVjdC5zcGVlZCAvIDEwMCkgKiBNYXRoLnNpbigoKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIGlmIChvYmplY3QucG9zaXRpb25bMF0gPiBjYW52YXMud2lkdGgpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzBdID0gLW9iamVjdC53aWR0aDtcclxuICAgIH0gZWxzZSBpZiAob2JqZWN0LnBvc2l0aW9uWzBdIDwgLW9iamVjdC53aWR0aCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMF0gPSBjYW52YXMud2lkdGg7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0LnBvc2l0aW9uWzFdID4gY2FudmFzLmhlaWdodCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMV0gPSAtb2JqZWN0LmhlaWdodDtcclxuICAgIH0gZWxzZSBpZiAob2JqZWN0LnBvc2l0aW9uWzFdIDwgLW9iamVjdC5oZWlnaHQpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzFdID0gY2FudmFzLmhlaWdodDtcclxuICAgIH1cclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHgudHJhbnNsYXRlKG9iamVjdC5wb3NpdGlvblswXSwgb2JqZWN0LnBvc2l0aW9uWzFdKTtcclxuICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LndpZHRoIC8gMiwgb2JqZWN0LmhlaWdodCAvIDIpO1xyXG4gICAgY3R4LnJvdGF0ZSgob2JqZWN0LnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgaWYgKG9iamVjdC5jeWNsZSkge1xyXG4gICAgICB2YXIgY29sdW1uID0gb2JqZWN0LmN5Y2xlLmkgJSBvYmplY3QuY3ljbGUuY29sdW1ucztcclxuICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3Iob2JqZWN0LmN5Y2xlLmkgLyBvYmplY3QuY3ljbGUuY29sdW1ucyk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgb2JqZWN0LmltZyxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVswXSAqIGNvbHVtbixcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVsxXSAqIHJvdyxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVswXSxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVsxXSxcclxuICAgICAgICAtb2JqZWN0LndpZHRoIC8gMixcclxuICAgICAgICAtb2JqZWN0LmhlaWdodCAvIDIsXHJcbiAgICAgICAgb2JqZWN0LndpZHRoLFxyXG4gICAgICAgIG9iamVjdC5oZWlnaHQsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAob2JqZWN0LmN5Y2xlLmkgPD0gMCkge1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5pID0gMDtcclxuICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChvYmplY3QuY3ljbGUuaSA+PSBvYmplY3QuY3ljbGUuY29sdW1ucyAqIG9iamVjdC5jeWNsZS5yb3dzKSB7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSBvYmplY3QuY3ljbGUuY29sdW1ucyAqIG9iamVjdC5jeWNsZS5yb3dzIC0gMTtcclxuICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2Uob2JqZWN0LmltZywgLW9iamVjdC53aWR0aCAvIDIsIC1vYmplY3QuaGVpZ2h0IC8gMiwgb2JqZWN0LndpZHRoLCBvYmplY3QuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgc3BhY2VzaGlwO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgICRzY29wZS5wbGF5aW5nID0gdHJ1ZTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGFjZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwYWNlcGljcyk7XHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICBzcGFjZXNoaXAgPSBuZXcgU3BhY2VzaGlwKCk7XHJcbiAgICAkc2NvcGUuc2NvcmUgPSAwO1xyXG4gICAgc3Bhd25Bc3Rlcm9pZHMoNSk7XHJcbiAgICBhdXRvU3Bhd24oKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEVudHJ5UG9zaXRpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIGdyaWRYID0gTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICB2YXIgZ3JpZFkgPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciB4LFxyXG4gICAgICB5ID0gMDtcclxuICAgIGlmIChncmlkWCA+PSAxKSB7XHJcbiAgICAgIHggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xyXG4gICAgICBpZiAoeSA+PSAxKSB7XHJcbiAgICAgICAgeSA9IDAgLSBoZWlnaHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeSA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcclxuICAgICAgaWYgKGdyaWRZID49IDEpIHtcclxuICAgICAgICB4ID0gMCAtIHdpZHRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHggPSBjYW52YXMud2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbeCwgeV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoaXQob2JqZWN0MSwgb2JqZWN0Mikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgb2JqZWN0MS5wb3NpdGlvblswXSA8IG9iamVjdDIucG9zaXRpb25bMF0gKyBvYmplY3QyLndpZHRoICYmXHJcbiAgICAgIG9iamVjdDIucG9zaXRpb25bMF0gPCBvYmplY3QxLnBvc2l0aW9uWzBdICsgb2JqZWN0MS53aWR0aCAmJlxyXG4gICAgICBvYmplY3QxLnBvc2l0aW9uWzFdIDwgb2JqZWN0Mi5wb3NpdGlvblsxXSArIG9iamVjdDIuaGVpZ2h0ICYmXHJcbiAgICAgIG9iamVjdDIucG9zaXRpb25bMV0gPCBvYmplY3QxLnBvc2l0aW9uWzFdICsgb2JqZWN0MS5oZWlnaHRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhdXRvU3Bhd24oKSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoYXN0ZXJvaWRzKS5sZW5ndGggPCAyMDApIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgYXN0ZXJvaWRzW2lkXSA9IG5ldyBBc3Rlcm9pZChpZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYXV0b1NwYXduKCk7XHJcbiAgICAgIH0sIHNwYXduSW50ZXJ2YWwoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkludGVydmFsKCkge1xyXG4gICAgaWYgKCRzY29wZS5zY29yZSA8IDEwMDApIHtcclxuICAgICAgcmV0dXJuIDEwMDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDIwMDApIHtcclxuICAgICAgcmV0dXJuIDkwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgMzAwMCkge1xyXG4gICAgICByZXR1cm4gODAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA0MDAwKSB7XHJcbiAgICAgIHJldHVybiA3MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDUwMDApIHtcclxuICAgICAgcmV0dXJuIDYwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNjAwMCkge1xyXG4gICAgICByZXR1cm4gNTAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA3MDAwKSB7XHJcbiAgICAgIHJldHVybiA0MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDgwMDApIHtcclxuICAgICAgcmV0dXJuIDMwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAyMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkFzdGVyb2lkcyhhbW91bnQpIHtcclxuICAgIHZhciBpID0gMDtcclxuICAgIGRvIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgYXN0ZXJvaWRzW2lkXSA9IG5ldyBBc3Rlcm9pZChpZCk7XHJcbiAgICB9IHdoaWxlIChpKysgPD0gYW1vdW50KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduUG93ZXJ1cCgpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhwb3dlcnVwcykubGVuZ3RoIDwgMykge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBwb3dlcnVwc1tpZF0gPSBuZXcgUG93ZXJ1cChpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnYW1lT3ZlcigpIHtcclxuICAgICRzY29wZS5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO1xyXG4gICAgfVxyXG4gICAgc2hvdHMgPSB7fTtcclxuICAgIGlmICgkc2NvcGUubG9nZ2VkSW4pIHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzIDwgJHNjb3BlLnNjb3JlKSB7XHJcbiAgICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyLmhpZ2hzY29yZS5hc3Rlcm9pZHMgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgICAgR2FtZVN2Yy5zZXRIaWdoc2NvcmUoXCJhc3Rlcm9pZHNcIiwgJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCwgJHNjb3BlLnNjb3JlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdoc2NvcmUgPCAkc2NvcGUuc2NvcmUpIHtcclxuICAgICAgICAkc2NvcGUuaGlnaHNjb3JlID0gJHNjb3BlLnNjb3JlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTdGFydCBsaXN0ZW5pbmcgdG8gcmVzaXplIGV2ZW50cyBhbmRcclxuICAvLyBkcmF3IGNhbnZhcy5cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgIC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcbiAgICAvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuICAgIC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuICAgIC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcbiAgICByZXNpemVDYW52YXMoKTtcclxuICB9XHJcbiAgLy8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG4gIC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG4gIC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG4gIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTAgOiAxMDUpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZSgpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuXHJcbiAgdmFyIHRhbGx5ID0gMDtcclxuICB2YXIgZGlyZWN0aW9uID0gdHJ1ZTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgaWYgKHNob3RzW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvdHNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgIGFzdGVyb2lkc1tpXS5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gcG93ZXJ1cHMpIHtcclxuICAgICAgcG93ZXJ1cHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGV4cGxvc2lvbnMpIHtcclxuICAgICAgaWYgKGV4cGxvc2lvbnNbaV0ubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBleHBsb3Npb25zW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV4cGxvc2lvbnNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBldmFsdWF0ZUtleXMoKTtcclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzcGFjZXNoaXAubW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIGNhbnZhcy53aWR0aCwgMCk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjBcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjI1XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMC41XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMC43NVwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjEuMFwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgICAgY3R4LmZvbnQgPSBcIjYwcHggTW9ub3RvblwiO1xyXG4gICAgICBjdHguZmlsbFRleHQoXCJBc3Rlcm9pZHNcIiwgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIkFzdGVyb2lkc1wiKS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcclxuICAgICAgY3R4LmZvbnQgPSBcIjIwcHggQWxkcmljaFwiO1xyXG4gICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgXCJQcmVzcyBzcGFjZSB0byBzdGFydFwiLFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoXCJQcmVzcyBzcGFjZSB0byBzdGFydFwiKS53aWR0aCAvIDIsXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCAvIDIgKyAyMCxcclxuICAgICAgKTtcclxuICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgIFwiRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyXCIsXHJcbiAgICAgICAgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIkRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlclwiKS53aWR0aCAvIDIsXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCAtIDMwLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGFsbHkgKz0gZGlyZWN0aW9uID8gMSA6IC0xO1xyXG4gICAgaWYgKHRhbGx5ID4gMTAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMTAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAodGFsbHkgPCAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMDtcclxuICAgICAgZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuICB9XHJcblxyXG4gICRzY29wZS5zcGFjZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImFzdGVyb2lkcy9zcGFjZScgKyBzcGFjZSArICcuanBnXCIpJyxcclxuICAgIH07XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignQnViYmxlc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlcy1wYWdlJyk7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIHZhciBidWJibGVzID0gW107XHJcbiAgdmFyIGNvbG9ycyA9IFsnI2ZmYzMwMCcsJyNmZjU3MzMnLCcjYzcwMDM5JywnIzkwMGMzZScsJyM1NzE4NDUnXTtcclxuXHJcbiAgZnVuY3Rpb24gQnViYmxlKCkge1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDA7XHJcbiAgICB0aGlzLnJhZGl1cyA9IDE7XHJcbiAgICB0aGlzLmV4cGFuZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICB0aGlzLmNpcmN1bWZlcmVuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA1MCkgKyA1O1xyXG4gICAgdGhpcy5tYXhSYWRpdXMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyMDApICsgMjA7XHJcbiAgICB0aGlzLnggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGgpO1xyXG4gICAgdGhpcy55ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodCk7XHJcbiAgICB0aGlzLnZ4ID0gKE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xKTtcclxuICAgIHRoaXMudnkgPSAoTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGJ1YmJsZXMuZm9yRWFjaChmdW5jdGlvbihidWJibGUpIHtcclxuICAgICAgdmFyIGNvbG9yID0gY29sb3JzW01hdGgucm91bmQoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyhidWJibGUueCwgYnViYmxlLnksIGJ1YmJsZS5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yc1tNYXRoLnJvdW5kKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcnNbY29sb3JzLmxlbmd0aCAtIE1hdGgucm91bmQoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSBidWJibGUuY2lyY3VtZmVyZW5jZSAqIGJ1YmJsZS5yYWRpdXMgLyBidWJibGUubWF4UmFkaXVzO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbHRlckJ1YmJsZXMoKSB7XHJcbiAgICBidWJibGVzLnB1c2gobmV3IEJ1YmJsZSgpKTtcclxuICAgIGJ1YmJsZXMgPSBidWJibGVzLmZpbHRlcihmdW5jdGlvbiAoYnViYmxlKSB7XHJcbiAgICAgIGlmIChidWJibGUucmFkaXVzID09PSBidWJibGUubWF4UmFkaXVzKSB7XHJcbiAgICAgICAgYnViYmxlLmV4cGFuZGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1YmJsZS54ICs9IGJ1YmJsZS52eCAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnkgKz0gYnViYmxlLnZ5ICogYnViYmxlLnNwZWVkO1xyXG4gICAgICBidWJibGUucmFkaXVzICs9IChidWJibGUuZXhwYW5kaW5nID8gMSA6IC0xKTtcclxuICAgICAgcmV0dXJuIGJ1YmJsZS5yYWRpdXMgPiAwO1xyXG4gICAgfSk7XHJcbiAgICBkcmF3KCk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmlsdGVyQnViYmxlcyk7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmlsdGVyQnViYmxlcyk7XHJcblxyXG5cclxuXHQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0Ly8gU3RhcnQgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgYW5kXHJcblx0XHQvLyBkcmF3IGNhbnZhcy5cclxuXHRcdGluaXRpYWxpemUoKTtcclxuXHJcblx0XHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0XHQvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG5cdFx0XHQvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuXHRcdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG5cdFx0XHQvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG5cdFx0XHRyZXNpemVDYW52YXMoKTtcclxuXHRcdH1cclxuXHRcdC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuXHRcdC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG5cdFx0Ly8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcblx0XHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcblx0XHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1NSA6IDExMSk7XHJcblx0XHR9XHJcblxyXG5cdH0pKCk7XHJcblxyXG5cclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQ2hhcmFkZXNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAkc2NvcGUuc2VsZWN0V29yZCA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgJHNjb3BlLndvcmQgPSAkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICRzY29wZS5jaGFyYWRlc1tjYXRlZ29yeV0ubGVuZ3RoKV07XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJDb250YWN0Q3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBFbWFpbFN2Yykge1xyXG4gICRzY29wZS5vcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNwYW1cIixcclxuICAgICAgdGV4dDogXCJJIGFtIGEgc3BhbSBib3QgYW5kIGF1dG9tYXRpY2FsbHkgY2hlY2sgdGhlIGZpcnN0IG9wdGlvbiBJIGZpbmQhXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk9wcG9ydHVuaXR5XCIsXHJcbiAgICAgIHRleHQ6IFwiWW91IHNlZW0gdG8gaGF2ZSB0aGUgc2tpbGxzIEkgc2VlaywgSSdkIGxpa2UgdG8gdGFsayBhYm91dCBzb21lIG9wcG9ydHVuaXRpZXMuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJlc3VtZVwiLFxyXG4gICAgICB0ZXh0OiBcIkkgZGlnIHRoZSByZXN1bWUsIGhvdyBkaWQgeW91IG1ha2UgaXQ/XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk90aGVyXCIsXHJcbiAgICAgIHRleHQ6IFwiU3VtdGluIGVsc2UhXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gICRzY29wZS5jb250YWN0ID0ge1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgICBhYm91dDogXCJcIixcclxuICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUuc2VuZGluZyA9IHRydWU7XHJcbiAgICBFbWFpbFN2Yy5zZW5kKHtcclxuICAgICAgZW1haWw6ICRzY29wZS5jb250YWN0LmVtYWlsLFxyXG4gICAgICBuYW1lOiAkc2NvcGUuY29udGFjdC5uYW1lLFxyXG4gICAgICBwaG9uZTogJHNjb3BlLmNvbnRhY3QucGhvbmUsXHJcbiAgICAgIGFib3V0OiAkc2NvcGUuY29udGFjdC5hYm91dCxcclxuICAgICAgbWVzc2FnZTogJHNjb3BlLmNvbnRhY3QubWVzc2FnZSxcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5zZW50ID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1MuIHN0YXR1cz0lZCwgdGV4dD0lc1wiLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICRzY29wZS5zZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGQUlMRUQuIGVycm9yPVwiLCBlcnIpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdFeHBlcmllbmNlQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLmdldFNraWxsID0gZnVuY3Rpb24oc2tpbGxDb2RlKSB7XHJcbiAgICBpZiAoISRzY29wZS5za2lsbHMpIHJldHVybjtcclxuICAgIHJldHVybiAkc2NvcGUuc2tpbGxzLmZpbmQoZnVuY3Rpb24oc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIHNraWxsLmNvZGUgPT09IHNraWxsQ29kZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdIb2JiaWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR3aW5kb3cpIHtcclxuXHJcbiAgJHNjb3BlLmhvYmJ5U2VsZWN0b3JWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICQuZ2V0SlNPTignaHR0cHM6Ly93d3cucmVkZGl0LmNvbS91c2VyL2JlbGdvY2FuYWRpYW4vYWJvdXQvLmpzb24nLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gJHNjb3BlLmhvYmJpZXNbMF07XHJcblxyXG4gICRzY29wZS5zZWxlY3RIb2JieSA9IGZ1bmN0aW9uIChob2JieSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkSG9iYnkgPSBob2JieTtcclxuICAgICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zaG93SG9iYnkgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnJheSkge1xyXG4gICAgaWYgKCF2YWx1ZS5pbWFnZXMpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB2YWx1ZS5pbWFnZXMubGVuZ3RoID4gMDtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMZW1taW5nc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBHYW1lU3ZjKSB7XHJcblxyXG4gIHZhciBMRUZUID0gMDtcclxuICB2YXIgUklHSFQgPSAxO1xyXG5cclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlbW1pbmdzLXBhZ2UnKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgdmFyIGxlbW1pbmdzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBsZW1taW5nc0ltYWdlLnNyYyA9ICdsZW1taW5ncy9sZW1taW5ncy5wbmcnO1xyXG4gIHZhciBkZWNvckltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgZGVjb3JJbWFnZS5zcmMgPSAnbGVtbWluZ3MvZGVjb3IucG5nJztcclxuICB2YXIgbGVtbWluZ3MgPSB7fTtcclxuICB2YXIgc3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICB2YXIgYWN0aW9ucyA9IHtcclxuICAgIHdhbGs6IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbMzIwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgaHVoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMzIwLCAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IHRydWVcclxuICAgIH0sXHJcbiAgICBmYWxsOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgODBdLFxyXG4gICAgICBlbmQ6IFsxNjAsIDEwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZmx5OiB7XHJcbiAgICAgIHN0YXJ0OiBbMTYwLCA4MF0sXHJcbiAgICAgIGVuZDogWzQ4MCwgMTEwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzdG9wOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMTIwXSxcclxuICAgICAgZW5kOiBbNjQwLCAxNDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBjbGltYjoge1xyXG4gICAgICBzdGFydDogWzAsIDE2MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTg1XSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgc3RhcnQ6IFswLCAyMDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDIyNV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHB1bmNoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjQwXSxcclxuICAgICAgZW5kOiBbNjQwLCAzMDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMixcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBkaWc6IHtcclxuICAgICAgc3RhcnQ6IFswLCAzMjBdLFxyXG4gICAgICBlbmQ6IFszMjAsIDM0NV0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIExlbW1pbmcoaW5pdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLndpZHRoIC0gMjAwKSkgKyAxMDAsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjYW52YXMuaGVpZ2h0IC0gMjAwKSkgKyAxMDBdO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogMiA+IDEgPyBMRUZUIDogUklHSFQ7XHJcbiAgICB0aGlzLmFjdCA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbnNbYWN0aW9uXTtcclxuICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgdGhpcy5oZWlnaHQgPSAodGhpcy5hY3Rpb24uZW5kWzFdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAoMjAgKiAodGhpcy5hY3Rpb24ucm93cyAtIDEpKSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5hY3QoaW5pdCk7XHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBMRUZUKSB7XHJcbiAgICAgICAgY3R4LnNjYWxlKC0xLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHZhciByb3cgPSBNYXRoLmZsb29yKHRoaXMuY3ljbGUgLyB0aGlzLmFjdGlvbi5jb2x1bW5zKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZShsZW1taW5nc0ltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKCh0aGlzLmhlaWdodCArIDIwKSAqIHJvdykgKyB0aGlzLmFjdGlvbi5zdGFydFsxXSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICBpZiAodGhpcy5hY3Rpb24ucmV2ZXJzZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPj0gdGhpcy5hY3Rpb24uY29sdW1ucyAqIHRoaXMuYWN0aW9uLnJvd3MpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSAhdGhpcy5hbmltYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS0tO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBIYXRjaCgpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbMjAsIDIwXTtcclxuICAgIHRoaXMuYWN0aW9uID0ge1xyXG4gICAgICBzdGFydDogWzAsIDBdLFxyXG4gICAgICBlbmQ6IFs4MiwgNTAwXSxcclxuICAgICAgY29sdW1uczogMSxcclxuICAgICAgcm93czogMTBcclxuICAgIH1cclxuICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdKSAvIHRoaXMuYWN0aW9uLnJvd3M7XHJcbiAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgIHRoaXMub3BlbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25bMF0sIHRoaXMucG9zaXRpb25bMV0pO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICB2YXIgY29sdW1uLCByb3c7XHJcbiAgICAgIGlmIChzdGFydGVkKSB7XHJcbiAgICAgICAgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgICAgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCA5KSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbHVtbiA9IDA7XHJcbiAgICAgICAgcm93ID0gMDtcclxuICAgICAgfVxyXG4gICAgICBjdHguZHJhd0ltYWdlKGRlY29ySW1hZ2UsICh0aGlzLndpZHRoICogY29sdW1uKSArIHRoaXMuYWN0aW9uLnN0YXJ0WzBdLCAodGhpcy5oZWlnaHQgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAxLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkxlbW1pbmcoKSB7XHJcbiAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICBsZW1taW5nc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApXSA9IG5ldyBMZW1taW5nKGFjdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHQvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG5cdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHQvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblx0XHQvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG5cdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0fVxyXG5cdC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuXHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcblx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogMTA1KTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxuICBzcGF3bkxlbW1pbmcoKTtcclxuICBsZXQgaGF0Y2ggPSBuZXcgSGF0Y2goKVxyXG4gIGRyYXcoKTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGlmICghc3RhcnRlZCkge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5mb250PSc0MHB4IE1vbm90b24nO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gJzEwJztcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xyXG4gICAgICBjdHgucmVjdCgxNSwgY2FudmFzLmhlaWdodCAtIDQ1LCBjdHgubWVhc3VyZVRleHQoJ1N0YXJ0Jykud2lkdGggKyAyMCwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLmhlaWdodCArIGNhbnZhcy5oZWlnaHQgLSA0NSk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnU3RhcnQnLCAyMCwgY2FudmFzLmhlaWdodCAtIDUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAodmFyIGkgaW4gbGVtbWluZ3MpIHtcclxuICAgICAgICBsZW1taW5nc1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGhhdGNoLm9wZW4oKTtcclxuICAgIHN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgZHJhdygpO1xyXG4gICAgfSwgMTUwKTtcclxuICB9XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xpc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgQ2F0ZWdvcmllc1N2Yykge1xyXG5cclxuICAkc2NvcGUuc2hvd0NhdGVnb3J5ID0gdHJ1ZTtcclxuXHJcbiAgJHNjb3BlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLmdldENhdGVnb3JpZXMoKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgJHNjb3BlLnRhc2tzID0gW107XHJcbiAgICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICBmb3IgKHZhciBqIGluICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzKSB7XHJcbiAgICAgICAgICAkc2NvcGUudGFza3MucHVzaCh7XHJcbiAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSxcclxuICAgICAgICAgICAgXCJ0YXNrXCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzW2pdLm5hbWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdENhdGVnb3J5ID0gZnVuY3Rpb24oY2F0ZWdvcnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRUYXNrcyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLnB1c2goJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY2F0ZWdvcmllc1tpXS5uYW1lID09PSBjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeSgkc2NvcGUuY2F0ZWdvcmllc1tpXSk7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuYWRkQ2F0ZWdvcnkoe1xyXG4gICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5pbml0KCk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZENhdGVnb3J5ID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLm5ld1Rhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXS5uYW1lID09PSB0YXNrKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSwge1xyXG4gICAgICAgIHRhc2s6IHRhc2tcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MucHVzaCh7IG5hbWU6IHRhc2sgfSk7XHJcbiAgICAgICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzWyRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5lbnRlcmVkVGFzayA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS51bnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmFkZFRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3QucHVzaCh0YXNrKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUucmVtb3ZlVGFzayA9IGZ1bmN0aW9uKHRhc2tMaXN0LCB0YXNrKSB7XHJcbiAgICB0YXNrTGlzdC5zcGxpY2UodGFza0xpc3QuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnN0YXJ0UHJpb3JpdGl6aW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLnNldFByaW9yaXR5TGlzdCgkc2NvcGUuc2VsZWN0ZWRUYXNrcyk7XHJcbiAgICAkbG9jYXRpb24ucGF0aCgnL3ByaW9yaXRpemUnKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0UXVlc3Rpb25zID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoISRzY29wZS5zZWxlY3RlZFRhc2tzKSByZXR1cm4gJyc7XHJcbiAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gJHNjb3BlLnNlbGVjdGVkVGFza3MubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICBjb3VudGVyICs9IGk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY291bnRlcjtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFVzZXJTdmMpIHtcclxuICAvLyBJbml0aWFsaXplIHRoZSBGaXJlYmFzZVVJIFdpZGdldCB1c2luZyBGaXJlYmFzZS5cclxuICB2YXIgdWkgPSBuZXcgZmlyZWJhc2V1aS5hdXRoLkF1dGhVSShmaXJlYmFzZS5hdXRoKCkpO1xyXG5cclxuICAkc2NvcGUuJG9uKCdsb2dvdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHVpLnJlc2V0KCk7XHJcbiAgICBzdGFydFVJKCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0VUkoKSB7XHJcbiAgICB1aS5zdGFydCgnI2ZpcmViYXNldWktYXV0aC1jb250YWluZXInLCB7XHJcbiAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgIHNpZ25JblN1Y2Nlc3M6IGZ1bmN0aW9uIChjdXJyZW50VXNlciwgY3JlZGVudGlhbCwgcmVkaXJlY3RVcmwpIHtcclxuICAgICAgICAgIC8vIE5vIHJlZGlyZWN0LlxyXG4gICAgICAgICAgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmF1dGgoKVxyXG4gICAgICAgICAgICAuY3VycmVudFVzZXIuZ2V0SWRUb2tlbih0cnVlKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoaWRUb2tlbikge1xyXG4gICAgICAgICAgICAgIFVzZXJTdmMuYXV0aGVudGljYXRlKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBjdXJyZW50VXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBjdXJyZW50VXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHBob3RvVVJMOiBjdXJyZW50VXNlci5waG90b1VSTCxcclxuICAgICAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IGN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQsXHJcbiAgICAgICAgICAgICAgICBpZFRva2VuOiBpZFRva2VuLFxyXG4gICAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KCdsb2dpbicsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcjbW9kYWwtbG9naW4nKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAvLyRsb2NhdGlvbi5wYXRoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoJ3BvcHVwJywge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdMb2dpbiBGYWlsZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhbGVydC1kYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIHNpZ25JbkZhaWx1cmUgY2FsbGJhY2sgbXVzdCBiZSBwcm92aWRlZCB0byBoYW5kbGUgbWVyZ2UgY29uZmxpY3RzIHdoaWNoXHJcbiAgICAgICAgLy8gb2NjdXIgd2hlbiBhbiBleGlzdGluZyBjcmVkZW50aWFsIGlzIGxpbmtlZCB0byBhbiBhbm9ueW1vdXMgdXNlci5cclxuICAgICAgICBzaWduSW5GYWlsdXJlOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgIC8vIEZvciBtZXJnZSBjb25mbGljdHMsIHRoZSBlcnJvci5jb2RlIHdpbGwgYmVcclxuICAgICAgICAgIC8vICdmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0Jy5cclxuICAgICAgICAgIGlmIChlcnJvci5jb2RlICE9ICdmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBUaGUgY3JlZGVudGlhbCB0aGUgdXNlciB0cmllZCB0byBzaWduIGluIHdpdGguXHJcbiAgICAgICAgICB2YXIgY3JlZCA9IGVycm9yLmNyZWRlbnRpYWw7XHJcbiAgICAgICAgICAvLyBDb3B5IGRhdGEgZnJvbSBhbm9ueW1vdXMgdXNlciB0byBwZXJtYW5lbnQgdXNlciBhbmQgZGVsZXRlIGFub255bW91c1xyXG4gICAgICAgICAgLy8gdXNlci5cclxuICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgLy8gRmluaXNoIHNpZ24taW4gYWZ0ZXIgZGF0YSBpcyBjb3BpZWQuXHJcbiAgICAgICAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhDcmVkZW50aWFsKGNyZWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdWlTaG93bjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy8gVGhlIHdpZGdldCBpcyByZW5kZXJlZC5cclxuICAgICAgICAgIC8vIEhpZGUgdGhlIGxvYWRlci5cclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpZ25JblN1Y2Nlc3NVcmw6ICcvaG9tZScsXHJcbiAgICAgIHNpZ25Jbk9wdGlvbnM6IFtcclxuICAgICAgICAvL2ZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgXSxcclxuXHJcbiAgICAgIC8vIFdpbGwgdXNlIHBvcHVwIGZvciBJRFAgUHJvdmlkZXJzIHNpZ24taW4gZmxvdyBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0LCByZWRpcmVjdC5cclxuICAgICAgc2lnbkluRmxvdzogJ3BvcHVwJyxcclxuICAgICAgLy8gT3RoZXIgY29uZmlnIG9wdGlvbnMuLi5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRVSSgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkZmlsdGVyLCBQb3N0c1N2Yykge1xyXG5cclxuICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkc2NvcGUucG9zdEJvZHkpIHtcclxuICAgICAgUG9zdHNTdmMuY3JlYXRlKHtcclxuICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBvc3RzU3ZjLmZldGNoKClcclxuICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5wb3N0cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oJ3dzOm5ld19wb3N0JywgZnVuY3Rpb24gKF8sIHBvc3QpIHtcclxuICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICBQb3N0c1N2Yy5nZXRQb3N0KHBvc3QpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5wb3N0cy51bnNoaWZ0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJQcm9maWxlQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFVzZXJTdmMpIHtcclxuICBjb25zdCBjb3VudHJpZXMgPSBbXHJcbiAgICB7IG5hbWU6IFwiQW5kb3JyYVwiLCBmbGFnOiBcImZsYWctYWRcIiwgdGlkYml0OiBcIlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIiwgZmxhZzogXCJmbGFnLWFlXCIgfSxcclxuICAgIHsgbmFtZTogXCJBZmdoYW5pc3RhblwiLCBmbGFnOiBcImZsYWctYWZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIiwgZmxhZzogXCJmbGFnLWFnXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbmd1aWxsYVwiLCBmbGFnOiBcImZsYWctYWlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFsYmFuaWFcIiwgZmxhZzogXCJmbGFnLWFsXCIgfSxcclxuICAgIHsgbmFtZTogXCJBcm1lbmlhXCIsIGZsYWc6IFwiZmxhZy1hbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW5nb2xhXCIsIGZsYWc6IFwiZmxhZy1hb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW50YXJjdGljYVwiLCBmbGFnOiBcImZsYWctYXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFyZ2VudGluYVwiLCBmbGFnOiBcImZsYWctYXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFtZXJpY2FuIFNvbW9hXCIsIGZsYWc6IFwiZmxhZy1hc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXVzdHJpYVwiLCBmbGFnOiBcImZsYWctYXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF1c3RyYWxpYVwiLCBmbGFnOiBcImZsYWctYXVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFydWJhXCIsIGZsYWc6IFwiZmxhZy1hd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiw4VsYW5kIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWF4XCIgfSxcclxuICAgIHsgbmFtZTogXCJBemVyYmFpamFuXCIsIGZsYWc6IFwiZmxhZy1helwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBmbGFnOiBcImZsYWctYmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhcmJhZG9zXCIsIGZsYWc6IFwiZmxhZy1iYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFuZ2xhZGVzaFwiLCBmbGFnOiBcImZsYWctYmRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGdpdW1cIiwgZmxhZzogXCJmbGFnLWJlXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdXJraW5hIEZhc29cIiwgZmxhZzogXCJmbGFnLWJmXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdWxnYXJpYVwiLCBmbGFnOiBcImZsYWctYmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhaHJhaW5cIiwgZmxhZzogXCJmbGFnLWJoXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdXJ1bmRpXCIsIGZsYWc6IFwiZmxhZy1iaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVuaW5cIiwgZmxhZzogXCJmbGFnLWJqXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBCYXJ0aMOpbGVteVwiLCBmbGFnOiBcImZsYWctYmxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlcm11ZGFcIiwgZmxhZzogXCJmbGFnLWJtXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcnVuZWkgXCIsIGZsYWc6IFwiZmxhZy1iblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9saXZpYSwgUGx1cmluYXRpb25hbCBTdGF0ZSBvZlwiLCBmbGFnOiBcImZsYWctYm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCIsIGZsYWc6IFwiZmxhZy1icVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJhemlsXCIsIGZsYWc6IFwiZmxhZy1iclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFoYW1hc1wiLCBmbGFnOiBcImZsYWctYnNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJodXRhblwiLCBmbGFnOiBcImZsYWctYnRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvdXZldCBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLWJ2XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3Rzd2FuYVwiLCBmbGFnOiBcImZsYWctYndcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGFydXNcIiwgZmxhZzogXCJmbGFnLWJ5XCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxpemVcIiwgZmxhZzogXCJmbGFnLWJ6XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW5hZGFcIiwgZmxhZzogXCJmbGFnLWNhXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb2NvcyAoS2VlbGluZykgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctY2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbmdvLCB0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGVcIiwgZmxhZzogXCJmbGFnLWNkXCIgfSxcclxuICAgIHsgbmFtZTogXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWNmXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb25nb1wiLCBmbGFnOiBcImZsYWctY2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3aXR6ZXJsYW5kXCIsIGZsYWc6IFwiZmxhZy1jaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ8O0dGUgZCdJdm9pcmVcIiwgZmxhZzogXCJmbGFnLWNpXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb29rIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWNrXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGlsZVwiLCBmbGFnOiBcImZsYWctY2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbWVyb29uXCIsIGZsYWc6IFwiZmxhZy1jbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hpbmFcIiwgZmxhZzogXCJmbGFnLWNuXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb2xvbWJpYVwiLCBmbGFnOiBcImZsYWctY29cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvc3RhIFJpY2FcIiwgZmxhZzogXCJmbGFnLWNyXCIgfSxcclxuICAgIHsgbmFtZTogXCJDdWJhXCIsIGZsYWc6IFwiZmxhZy1jdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FibyBWZXJkZVwiLCBmbGFnOiBcImZsYWctY3ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN1cmHDp2FvXCIsIGZsYWc6IFwiZmxhZy1jd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hyaXN0bWFzIElzbGFuZFwiLCBmbGFnOiBcImZsYWctY3hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN5cHJ1c1wiLCBmbGFnOiBcImZsYWctY3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN6ZWNoIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1jelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2VybWFueVwiLCBmbGFnOiBcImZsYWctZGVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRqaWJvdXRpXCIsIGZsYWc6IFwiZmxhZy1kalwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGVubWFya1wiLCBmbGFnOiBcImZsYWctZGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRvbWluaWNhXCIsIGZsYWc6IFwiZmxhZy1kbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRG9taW5pY2FuIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1kb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWxnZXJpYVwiLCBmbGFnOiBcImZsYWctZHpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVjdWFkb3JcIiwgZmxhZzogXCJmbGFnLWVjXCIgfSxcclxuICAgIHsgbmFtZTogXCJFc3RvbmlhXCIsIGZsYWc6IFwiZmxhZy1lZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWd5cHRcIiwgZmxhZzogXCJmbGFnLWVnXCIgfSxcclxuICAgIHsgbmFtZTogXCJXZXN0ZXJuIFNhaGFyYVwiLCBmbGFnOiBcImZsYWctZWhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVyaXRyZWFcIiwgZmxhZzogXCJmbGFnLWVyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTcGFpblwiLCBmbGFnOiBcImZsYWctZXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkV0aGlvcGlhXCIsIGZsYWc6IFwiZmxhZy1ldFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmlubGFuZFwiLCBmbGFnOiBcImZsYWctZmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZpamlcIiwgZmxhZzogXCJmbGFnLWZqXCIgfSxcclxuICAgIHsgbmFtZTogXCJGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcylcIiwgZmxhZzogXCJmbGFnLWZrXCIgfSxcclxuICAgIHsgbmFtZTogXCJNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIG9mXCIsIGZsYWc6IFwiZmxhZy1mbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmFyb2UgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctZm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyYW5jZVwiLCBmbGFnOiBcImZsYWctZnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdhYm9uXCIsIGZsYWc6IFwiZmxhZy1nYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZFwiLCBmbGFnOiBcImZsYWctZ2JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZW5hZGFcIiwgZmxhZzogXCJmbGFnLWdkXCIgfSxcclxuICAgIHsgbmFtZTogXCJHZW9yZ2lhXCIsIGZsYWc6IFwiZmxhZy1nZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIEd1aWFuYVwiLCBmbGFnOiBcImZsYWctZ2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1ZXJuc2V5XCIsIGZsYWc6IFwiZmxhZy1nZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2hhbmFcIiwgZmxhZzogXCJmbGFnLWdoXCIgfSxcclxuICAgIHsgbmFtZTogXCJHaWJyYWx0YXJcIiwgZmxhZzogXCJmbGFnLWdpXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVlbmxhbmRcIiwgZmxhZzogXCJmbGFnLWdsXCIgfSxcclxuICAgIHsgbmFtZTogXCJHYW1iaWFcIiwgZmxhZzogXCJmbGFnLWdtXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWluZWFcIiwgZmxhZzogXCJmbGFnLWduXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWFkZWxvdXBlXCIsIGZsYWc6IFwiZmxhZy1ncFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXF1YXRvcmlhbCBHdWluZWFcIiwgZmxhZzogXCJmbGFnLWdxXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVlY2VcIiwgZmxhZzogXCJmbGFnLWdyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctZ3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YXRlbWFsYVwiLCBmbGFnOiBcImZsYWctZ3RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YW1cIiwgZmxhZzogXCJmbGFnLWd1XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWluZWEtQmlzc2F1XCIsIGZsYWc6IFwiZmxhZy1nd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3V5YW5hXCIsIGZsYWc6IFwiZmxhZy1neVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9uZyBLb25nXCIsIGZsYWc6IFwiZmxhZy1oa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1obVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9uZHVyYXNcIiwgZmxhZzogXCJmbGFnLWhuXCIgfSxcclxuICAgIHsgbmFtZTogXCJDcm9hdGlhXCIsIGZsYWc6IFwiZmxhZy1oclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSGFpdGlcIiwgZmxhZzogXCJmbGFnLWh0XCIgfSxcclxuICAgIHsgbmFtZTogXCJIdW5nYXJ5XCIsIGZsYWc6IFwiZmxhZy1odVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSW5kb25lc2lhXCIsIGZsYWc6IFwiZmxhZy1pZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJlbGFuZFwiLCBmbGFnOiBcImZsYWctaWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklzcmFlbFwiLCBmbGFnOiBcImZsYWctaWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklzbGUgb2YgTWFuXCIsIGZsYWc6IFwiZmxhZy1pbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSW5kaWFcIiwgZmxhZzogXCJmbGFnLWluXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnlcIiwgZmxhZzogXCJmbGFnLWlvXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmFxXCIsIGZsYWc6IFwiZmxhZy1pcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJhbiwgSXNsYW1pYyBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctaXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkljZWxhbmRcIiwgZmxhZzogXCJmbGFnLWlzXCIgfSxcclxuICAgIHsgbmFtZTogXCJJdGFseVwiLCBmbGFnOiBcImZsYWctaXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkplcnNleVwiLCBmbGFnOiBcImZsYWctamVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkphbWFpY2FcIiwgZmxhZzogXCJmbGFnLWptXCIgfSxcclxuICAgIHsgbmFtZTogXCJKb3JkYW5cIiwgZmxhZzogXCJmbGFnLWpvXCIgfSxcclxuICAgIHsgbmFtZTogXCJKYXBhblwiLCBmbGFnOiBcImZsYWctanBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktlbnlhXCIsIGZsYWc6IFwiZmxhZy1rZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS3lyZ3l6c3RhblwiLCBmbGFnOiBcImZsYWcta2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbWJvZGlhXCIsIGZsYWc6IFwiZmxhZy1raFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2lyaWJhdGlcIiwgZmxhZzogXCJmbGFnLWtpXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb21vcm9zXCIsIGZsYWc6IFwiZmxhZy1rbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsIGZsYWc6IFwiZmxhZy1rblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWtwXCIgfSxcclxuICAgIHsgbmFtZTogXCJLb3JlYSwgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWtyXCIgfSxcclxuICAgIHsgbmFtZTogXCJLdXdhaXRcIiwgZmxhZzogXCJmbGFnLWt3XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYXltYW4gSXNsYW5kc1wiLCBmbGFnOiBcImZsYWcta3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkthemFraHN0YW5cIiwgZmxhZzogXCJmbGFnLWt6XCIgfSxcclxuICAgIHsgbmFtZTogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctbGFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxlYmFub25cIiwgZmxhZzogXCJmbGFnLWxiXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBMdWNpYVwiLCBmbGFnOiBcImZsYWctbGNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpZWNodGVuc3RlaW5cIiwgZmxhZzogXCJmbGFnLWxpXCIgfSxcclxuICAgIHsgbmFtZTogXCJTcmkgTGFua2FcIiwgZmxhZzogXCJmbGFnLWxrXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWJlcmlhXCIsIGZsYWc6IFwiZmxhZy1sclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGVzb3Rob1wiLCBmbGFnOiBcImZsYWctbHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpdGh1YW5pYVwiLCBmbGFnOiBcImZsYWctbHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkx1eGVtYm91cmdcIiwgZmxhZzogXCJmbGFnLWx1XCIgfSxcclxuICAgIHsgbmFtZTogXCJMYXR2aWFcIiwgZmxhZzogXCJmbGFnLWx2XCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWJ5YVwiLCBmbGFnOiBcImZsYWctbHlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vcm9jY29cIiwgZmxhZzogXCJmbGFnLW1hXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb25hY29cIiwgZmxhZzogXCJmbGFnLW1jXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb2xkb3ZhLCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctbWRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbnRlbmVncm9cIiwgZmxhZzogXCJmbGFnLW1lXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KVwiLCBmbGFnOiBcImZsYWctbWZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hZGFnYXNjYXJcIiwgZmxhZzogXCJmbGFnLW1nXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXJzaGFsbCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1taFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFjZWRvbmlhLCB0aGUgZm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1ta1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsaVwiLCBmbGFnOiBcImZsYWctbWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk15YW5tYXJcIiwgZmxhZzogXCJmbGFnLW1tXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb25nb2xpYVwiLCBmbGFnOiBcImZsYWctbW5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hY2FvXCIsIGZsYWc6IFwiZmxhZy1tb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1tcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFydGluaXF1ZVwiLCBmbGFnOiBcImZsYWctbXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hdXJpdGFuaWFcIiwgZmxhZzogXCJmbGFnLW1yXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb250c2VycmF0XCIsIGZsYWc6IFwiZmxhZy1tc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsdGFcIiwgZmxhZzogXCJmbGFnLW10XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXVyaXRpdXNcIiwgZmxhZzogXCJmbGFnLW11XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxkaXZlc1wiLCBmbGFnOiBcImZsYWctbXZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGF3aVwiLCBmbGFnOiBcImZsYWctbXdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1leGljb1wiLCBmbGFnOiBcImZsYWctbXhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGF5c2lhXCIsIGZsYWc6IFwiZmxhZy1teVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW96YW1iaXF1ZVwiLCBmbGFnOiBcImZsYWctbXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hbWliaWFcIiwgZmxhZzogXCJmbGFnLW5hXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXcgQ2FsZWRvbmlhXCIsIGZsYWc6IFwiZmxhZy1uY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmlnZXJcIiwgZmxhZzogXCJmbGFnLW5lXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3Jmb2xrIElzbGFuZFwiLCBmbGFnOiBcImZsYWctbmZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pZ2VyaWFcIiwgZmxhZzogXCJmbGFnLW5nXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWNhcmFndWFcIiwgZmxhZzogXCJmbGFnLW5pXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXRoZXJsYW5kc1wiLCBmbGFnOiBcImZsYWctbmxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcndheVwiLCBmbGFnOiBcImZsYWctbm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5lcGFsXCIsIGZsYWc6IFwiZmxhZy1ucFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmF1cnVcIiwgZmxhZzogXCJmbGFnLW5yXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaXVlXCIsIGZsYWc6IFwiZmxhZy1udVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV3IFplYWxhbmRcIiwgZmxhZzogXCJmbGFnLW56XCIgfSxcclxuICAgIHsgbmFtZTogXCJPbWFuXCIsIGZsYWc6IFwiZmxhZy1vbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFuYW1hXCIsIGZsYWc6IFwiZmxhZy1wYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGVydVwiLCBmbGFnOiBcImZsYWctcGVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBQb2x5bmVzaWFcIiwgZmxhZzogXCJmbGFnLXBmXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYXB1YSBOZXcgR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1wZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGhpbGlwcGluZXNcIiwgZmxhZzogXCJmbGFnLXBoXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWtpc3RhblwiLCBmbGFnOiBcImZsYWctcGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBvbGFuZFwiLCBmbGFnOiBcImZsYWctcGxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIiwgZmxhZzogXCJmbGFnLXBtXCIgfSxcclxuICAgIHsgbmFtZTogXCJQaXRjYWlyblwiLCBmbGFnOiBcImZsYWctcG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlB1ZXJ0byBSaWNvXCIsIGZsYWc6IFwiZmxhZy1wclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwiLCBmbGFnOiBcImZsYWctcHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBvcnR1Z2FsXCIsIGZsYWc6IFwiZmxhZy1wdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFsYXVcIiwgZmxhZzogXCJmbGFnLXB3XCIgfSxcclxuICAgIHsgbmFtZTogXCJQYXJhZ3VheVwiLCBmbGFnOiBcImZsYWctcHlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlFhdGFyXCIsIGZsYWc6IFwiZmxhZy1xYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUsOpdW5pb25cIiwgZmxhZzogXCJmbGFnLXJlXCIgfSxcclxuICAgIHsgbmFtZTogXCJSb21hbmlhXCIsIGZsYWc6IFwiZmxhZy1yb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2VyYmlhXCIsIGZsYWc6IFwiZmxhZy1yc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUnVzc2lhbiBGZWRlcmF0aW9uXCIsIGZsYWc6IFwiZmxhZy1ydVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUndhbmRhXCIsIGZsYWc6IFwiZmxhZy1yd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2F1ZGkgQXJhYmlhXCIsIGZsYWc6IFwiZmxhZy1zYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU29sb21vbiBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1zYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2V5Y2hlbGxlc1wiLCBmbGFnOiBcImZsYWctc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN1ZGFuXCIsIGZsYWc6IFwiZmxhZy1zZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dlZGVuXCIsIGZsYWc6IFwiZmxhZy1zZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2luZ2Fwb3JlXCIsIGZsYWc6IFwiZmxhZy1zZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGFcIiwgZmxhZzogXCJmbGFnLXNoXCIgfSxcclxuICAgIHsgbmFtZTogXCJTbG92ZW5pYVwiLCBmbGFnOiBcImZsYWctc2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIiwgZmxhZzogXCJmbGFnLXNqXCIgfSxcclxuICAgIHsgbmFtZTogXCJTbG92YWtpYVwiLCBmbGFnOiBcImZsYWctc2tcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpZXJyYSBMZW9uZVwiLCBmbGFnOiBcImZsYWctc2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbiBNYXJpbm9cIiwgZmxhZzogXCJmbGFnLXNtXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZW5lZ2FsXCIsIGZsYWc6IFwiZmxhZy1zblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU29tYWxpYVwiLCBmbGFnOiBcImZsYWctc29cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN1cmluYW1lXCIsIGZsYWc6IFwiZmxhZy1zclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggU3VkYW5cIiwgZmxhZzogXCJmbGFnLXNzXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIiwgZmxhZzogXCJmbGFnLXN0XCIgfSxcclxuICAgIHsgbmFtZTogXCJFbCBTYWx2YWRvclwiLCBmbGFnOiBcImZsYWctc3ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIiwgZmxhZzogXCJmbGFnLXN4XCIgfSxcclxuICAgIHsgbmFtZTogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctc3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3YXppbGFuZFwiLCBmbGFnOiBcImZsYWctc3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctdGNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoYWRcIiwgZmxhZzogXCJmbGFnLXRkXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXNcIiwgZmxhZzogXCJmbGFnLXRmXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb2dvXCIsIGZsYWc6IFwiZmxhZy10Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGhhaWxhbmRcIiwgZmxhZzogXCJmbGFnLXRoXCIgfSxcclxuICAgIHsgbmFtZTogXCJUYWppa2lzdGFuXCIsIGZsYWc6IFwiZmxhZy10alwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9rZWxhdVwiLCBmbGFnOiBcImZsYWctdGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRpbW9yLUxlc3RlXCIsIGZsYWc6IFwiZmxhZy10bFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya21lbmlzdGFuXCIsIGZsYWc6IFwiZmxhZy10bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVuaXNpYVwiLCBmbGFnOiBcImZsYWctdG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRvbmdhXCIsIGZsYWc6IFwiZmxhZy10b1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya2V5XCIsIGZsYWc6IFwiZmxhZy10clwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wiLCBmbGFnOiBcImZsYWctdHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1dmFsdVwiLCBmbGFnOiBcImZsYWctdHZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmFcIiwgZmxhZzogXCJmbGFnLXR3XCIgfSxcclxuICAgIHsgbmFtZTogXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy10elwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVWtyYWluZVwiLCBmbGFnOiBcImZsYWctdWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVnYW5kYVwiLCBmbGFnOiBcImZsYWctdWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctdW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLCBmbGFnOiBcImZsYWctdXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVydWd1YXlcIiwgZmxhZzogXCJmbGFnLXV5XCIgfSxcclxuICAgIHsgbmFtZTogXCJVemJla2lzdGFuXCIsIGZsYWc6IFwiZmxhZy11elwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9seSBTZWVcIiwgZmxhZzogXCJmbGFnLXZhXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLCBmbGFnOiBcImZsYWctdmNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZlbmV6dWVsYSwgQm9saXZhcmlhbiBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctdmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzLCBCcml0aXNoXCIsIGZsYWc6IFwiZmxhZy12Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlyZ2luIElzbGFuZHMsIFUuUy5cIiwgZmxhZzogXCJmbGFnLXZpXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaWV0IE5hbVwiLCBmbGFnOiBcImZsYWctdm5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZhbnVhdHVcIiwgZmxhZzogXCJmbGFnLXZ1XCIgfSxcclxuICAgIHsgbmFtZTogXCJXYWxsaXMgYW5kIEZ1dHVuYVwiLCBmbGFnOiBcImZsYWctd2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbW9hXCIsIGZsYWc6IFwiZmxhZy13c1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiWWVtZW5cIiwgZmxhZzogXCJmbGFnLXllXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXlvdHRlXCIsIGZsYWc6IFwiZmxhZy15dFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggQWZyaWNhXCIsIGZsYWc6IFwiZmxhZy16YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiWmFtYmlhXCIsIGZsYWc6IFwiZmxhZy16bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiWmltYmFid2VcIiwgZmxhZzogXCJmbGFnLXp3XCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCB1cGRhdGVVc2VyRmxhZ3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUudXNlckZsYWdzID0gJHNjb3BlLmN1cnJlbnRVc2VyPy5mbGFnc1xyXG4gICAgICA/IGNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGNvdW50cnkpIHtcclxuICAgICAgICAgIHJldHVybiAkc2NvcGUuY3VycmVudFVzZXIuZmxhZ3MuaW5jbHVkZXMoY291bnRyeS5mbGFnKTtcclxuICAgICAgICB9KVxyXG4gICAgICA6IFtdO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5kYXRlT3B0aW9ucyA9IHtcclxuICAgIG1heERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZSgxOTAwLCAxLCAxKSxcclxuICAgIGluaXREYXRlOiBuZXcgRGF0ZSgyMDAwLCAxLCAxKSxcclxuICAgIGRhdGVwaWNrZXJNb2RlOiBcInllYXJcIixcclxuICB9O1xyXG5cclxuICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSB0cnVlO1xyXG4gICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9IHRydWU7XHJcblxyXG4gICRzY29wZS50b2dnbGVVc2VybmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS51c2VybmFtZVRvZ2dsZSA9ICEkc2NvcGUudXNlcm5hbWVUb2dnbGU7XHJcbiAgICAkc2NvcGUubmV3VXNlcm5hbWUgPSAkc2NvcGUuY3VycmVudFVzZXIudXNlcm5hbWU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLm5ld1Bhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5jb25maXJtUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gISRzY29wZS5wYXNzd29yZFRvZ2dsZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uIChwYXNzd29yZCkge1xyXG4gICAgaWYgKHBhc3N3b3JkKSB7XHJcbiAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgVXNlclN2Yy5jaGVja1Bhc3N3b3JkKHVzZXIsIHBhc3N3b3JkKS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAob2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgIGlmIChuZXdQYXNzd29yZCkge1xyXG4gICAgICBpZiAobmV3UGFzc3dvcmQgPT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgdmFyIHVzZXIgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICAgIFVzZXJTdmMuY2hhbmdlUGFzc3dvcmQodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKS50aGVuKFxyXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuJGVtaXQoXCJwb3B1cFwiLCB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJQYXNzd29yZCBDaGFuZ2VkXCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJhbGVydC1zdWNjZXNzXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkc2NvcGUub2xkUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzY29wZS4kZW1pdChcInBvcHVwXCIsIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBhc3N3b3JkIENoYW5nZSBGYWlsZWRcIixcclxuICAgICAgICAgICAgICB0eXBlOiBcImFsZXJ0LWRhbmdlclwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgb3JpZ2luYWxCZyA9ICQoXCIucGFzc3dvcmRcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIpO1xyXG4gICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlVXNlcm5hbWUgPSBmdW5jdGlvbiAodXNlcm5hbWUpIHtcclxuICAgICRzY29wZS4kZW1pdChcImxvYWRpbmdcIik7XHJcbiAgICBVc2VyU3ZjLmNoYW5nZVVzZXJuYW1lKCRzY29wZS5jdXJyZW50VXNlci5faWQsIHVzZXJuYW1lKS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoXCJ1cGRhdGVcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoXCJwb3B1cFwiLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiB1c2VybmFtZSArIFwiIGFscmVhZHkgaW4gdXNlXCIsXHJcbiAgICAgICAgICB0eXBlOiBcImFsZXJ0LWRhbmdlclwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUudXBkYXRlVXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS4kZW1pdChcImxvYWRpbmdcIik7XHJcbiAgICBVc2VyU3ZjLnVwZGF0ZVVzZXIoeyAuLi4kc2NvcGUuY3VycmVudFVzZXIsIGZsYWdzOiAkc2NvcGUudXNlckZsYWdzLm1hcCgoeyBmbGFnIH0pID0+IGZsYWcpIH0pLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS4kZW1pdChcInVwZGF0ZVwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmxvYWRDb3VudHJpZXMgPSBmdW5jdGlvbiAoJHF1ZXJ5KSB7XHJcbiAgICByZXR1cm4gY291bnRyaWVzLmZpbHRlcihmdW5jdGlvbiAoY291bnRyeSkge1xyXG4gICAgICByZXR1cm4gY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigkcXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTE7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgKCkgPT4ge1xyXG4gICAgdXBkYXRlVXNlckZsYWdzKCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1NraWxsc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZFNraWxsID0gMDtcclxuICAkc2NvcGUuc2tpbGxzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICRzY29wZS5wcm9qZWN0cyA9IFtdO1xyXG5cclxuICAkc2NvcGUubGFiZWxzID0gW1wiRG93bmxvYWQgU2FsZXNcIiwgXCJJbi1TdG9yZSBTYWxlc1wiLCBcIk1haWwtT3JkZXIgU2FsZXNcIl07XHJcbiAgJHNjb3BlLmRhdGEgPSBbMzAwLCA1MDAsIDEwMF07XHJcblxyXG4gICQuZ2V0SlNPTignL2V4cGVyaWVuY2UuanNvbicsIGZ1bmN0aW9uKCBkYXRhICkge1xyXG4gICAgJHNjb3BlLnByb2plY3RzID0gZGF0YS5yZWR1Y2UoKHByb2plY3RzLCBlbXBsb3llcikgPT4ge1xyXG4gICAgICBpZiAoZW1wbG95ZXIucHJvamVjdHMpIHJldHVybiBlbXBsb3llci5wcm9qZWN0cy5jb25jYXQocHJvamVjdHMpO1xyXG4gICAgICBlbHNlIHJldHVybiBwcm9qZWN0cztcclxuICAgIH0sIHt9KTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmZpbHRlcmVkUHJvamVjdHMgPSAoKSA9PiAkc2NvcGUucHJvamVjdHNcclxuICAgIC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3Quc2tpbGxzICYmIHByb2plY3Quc2tpbGxzLmluY2x1ZGVzKCRzY29wZS5zZWxlY3RlZFNraWxsLmNvZGUpKVxyXG5cclxuICAkLmdldEpTT04oJy9za2lsbHMuanNvbicsIGZ1bmN0aW9uKCBkYXRhICkge1xyXG5cclxuICAgIGNvbnN0IHNraWxscyA9IGRhdGFcclxuICAgIC5maWx0ZXIoKHNraWxsKSA9PiBza2lsbC5lbmFibGVkKVxyXG5cclxuICAgICRzY29wZS5jYXRlZ29yaWVzID0gc2tpbGxzXHJcbiAgICAucmVkdWNlKGZ1bmN0aW9uKGNhdGVnb3JpZXMsIHNraWxsKSB7XHJcbiAgICAgIGlmICghY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0pIHtcclxuICAgICAgICBjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XSA9IFtza2lsbF1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XS5wdXNoKHNraWxsKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzO1xyXG4gICAgfSwge30pO1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZFNraWxsID0gZnVuY3Rpb24gKHNraWxsKSB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsID0gc2tpbGw7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsLmNoYXJ0T3B0aW9ucyA9IHtcclxuICAgICAgICBjdXRvdXRQZXJjZW50YWdlIDogODAsXHJcbiAgICAgICAgY2lyY3VtZmVyZW5jZTogMiAqIE1hdGguUEksXHJcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsLmNoYXJ0U3R5bGUgPSB7XHJcbiAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKC9za2lsbHMvJyArICRzY29wZS5zZWxlY3RlZFNraWxsLmltYWdlICsgJyknLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnNjAlJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICc1MCUgNTAlJ1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCgkc2NvcGUuc2tpbGxzWzBdKTtcclxuXHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJHNjZSwgJGxvY2F0aW9uLCBUZW5UaGluZ3NTdmMpIHtcclxuICAgIGxldCBwYWdlID0gMTtcclxuICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlYXJjaCA9IFwiXCI7XHJcbiAgICAkc2NvcGUubmV3SXRlbSA9IHt9O1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IFwiRU5cIjtcclxuICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSBbXTtcclxuICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSBbXTtcclxuICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgIGxldCBleGhhdXN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBvYmplY3RDYXRlZ29yaWVzID0gW1xyXG4gICAgICBcIkFydFwiLFxyXG4gICAgICBcIkN1bHR1cmVcIixcclxuICAgICAgXCJGb29kIGFuZCBEcmlua1wiLFxyXG4gICAgICBcIk5hdHVyZVwiLFxyXG4gICAgICBcIk9iamVjdHNcIixcclxuICAgICAgXCJSZWxpZ2lvblwiLFxyXG4gICAgICBcIlNvY2lldHlcIixcclxuICAgICAgXCJTcG9ydHNcIixcclxuICAgICAgXCJUcmFuc3BvcnRhdGlvblwiLFxyXG4gICAgXTtcclxuICAgICRzY29wZS5ibHVyYlR5cGVzID0gW1xyXG4gICAgICB7IGFwaTogXCJtb3ZpZXNcIiwgY2F0ZWdvcmllczogW1wiTW92aWVzXCJdLCB0ZXh0OiBcIkdldCBtb3ZpZSBwb3N0ZXJzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwidHZcIiwgY2F0ZWdvcmllczogW1wiVGVsZXZpc2lvblwiXSwgdGV4dDogXCJHZXQgdHYgcG9zdGVyc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcImFjdG9yc1wiLCBjYXRlZ29yaWVzOiBbXCJNb3ZpZXNcIiwgXCJUZWxldmlzaW9uXCJdLCB0ZXh0OiBcIkdldCBhY3RvciBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwiYm9va3NcIiwgY2F0ZWdvcmllczogW1wiTGl0ZXJhdHVyZVwiXSwgdGV4dDogXCJHZXQgYm9vayBjb3ZlcnNcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJtdXNpY3ZpZGVvc1wiLCBjYXRlZ29yaWVzOiBbXCJNdXNpY1wiXSwgdGV4dDogXCJHZXQgbXVzaWMgdmlkZW9zXCIsIGFkbWluT25seTogdHJ1ZSB9LFxyXG4gICAgICB7IGFwaTogXCJ1bnNwbGFzaFwiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBVbnNwbGFzaCBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwicGV4ZWxzXCIsIGNhdGVnb3JpZXM6IG9iamVjdENhdGVnb3JpZXMsIHRleHQ6IFwiR2V0IFBleGVscyBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwid2lraVwiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBXaWtpIHBpY3NcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgXTtcclxuXHJcbiAgICAkc2NvcGUuaGF2ZUNvbW1vbkl0ZW1zID0gKGFycjEsIGFycjIpID0+IHtcclxuICAgICAgcmV0dXJuIGFycjE/LnNvbWUoKGl0ZW0pID0+IGFycjIuaW5jbHVkZXMoaXRlbSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUua2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgLy8gVGFiXHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5jcmVhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICgkKFwiI25ldy12YWx1ZVwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAkKFwiI25ldy1ibHVyYlwiKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgfVxyXG4gICAgICAvLyB1c2UgZS5rZXlDb2RlXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hZGRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBcIm5ld1wiKTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNyZWF0b3I6ICRzY29wZS5jdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB2YWx1ZXM6IFtdLFxyXG4gICAgICAgIGFuc3dlcnM6IDAsXHJcbiAgICAgICAgaXNEeW5hbWljOiB0cnVlLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgIGxhbmd1YWdlOiAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgJHNjb3BlLnNlYXJjaCA9ICRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2g7XHJcbiAgICAgIGlmIChsaXN0KSB7XHJcbiAgICAgICAgaWYgKGxpc3QuX2lkID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAkc2NvcGUuYWRkTGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0Lmxhbmd1YWdlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldExhbmd1YWdlRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzZXRDYXRlZ29yeUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0ge307XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmN1cnJlbnRVc2VyKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogbGFuZ3VhZ2VzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCk7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZXMgPSBsYW5ndWFnZXM7XHJcbiAgICAgIHJlc2V0TGFuZ3VhZ2VGaWx0ZXIoKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBjYXRlZ29yaWVzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XHJcbiAgICAgIHJlc2V0Q2F0ZWdvcnlGaWx0ZXIoKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBsYW5ndWFnZVN0YXRzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMoKTtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBsYW5ndWFnZVN0YXRzLnJlZHVjZSgocmVzdWx0LCB7IF9pZCwgY291bnQgfSkgPT4ge1xyXG4gICAgICAgIHJlc3VsdFtfaWQubGFuZ3VhZ2VdID0gKHJlc3VsdFtfaWQubGFuZ3VhZ2VdIHx8IDApICsgY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSwge30pO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3J5U3RhdHMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cygpO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0cyA9IGNhdGVnb3J5U3RhdHMucmVkdWNlKChyZXN1bHQsIHsgX2lkLCBjb3VudCB9KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W19pZF0gPSBjb3VudDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCkge1xyXG4gICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoeyBfaWQ6ICRsb2NhdGlvbi5zZWFyY2goKS5saXN0IH0pO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5zZWFyY2ggPSAkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoIHx8IFwiXCI7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoTGlzdHMgPSBhc3luYyAodmlld1ZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2aWV3VmFsdWUubGVuZ3RoID49IDMpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5zZWFyY2hMaXN0cyh2aWV3VmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRTZWFyY2hUZXh0ID0gKHRleHQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5zZWFyY2gpIHtcclxuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCgkeyRzY29wZS5zZWFyY2h9KWAsIFwiZ2lcIik7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShyZWdleCwgXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz4kMTwvc3Bhbj5cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnZhbHVlT3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInZhbHVlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6ICRsb2NhdGlvbi5zZWFyY2goKS5zb3J0IHx8IFwiZGF0ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246ICRsb2NhdGlvbi5zZWFyY2goKS5vcmRlciA/ICRsb2NhdGlvbi5zZWFyY2goKS5vcmRlciA9PT0gXCJkZXNjXCIgOiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPSAhJHNjb3BlLm9yZGVyLmRpcmVjdGlvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcInNvcnRcIiwgZmllbGQpO1xyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwib3JkZXJcIiwgJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA/IFwiZGVzY1wiIDogXCJhc2NcIik7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TW9yZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxpc3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gJHNjb3BlLmxpc3RzLmNvbmNhdChsaXN0cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgIHBhZ2UgPSAxO1xyXG4gICAgICBleGhhdXN0ZWQgPSBmYWxzZTtcclxuICAgICAgZ2V0TGlzdHMoKS50aGVuKChsaXN0cykgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9IGxpc3RzO1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZUZpbHRlciA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSkge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID0gISRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5RmlsdGVyID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSkge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSAhJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUNhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKTtcclxuICAgICAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9XHJcbiAgICAgICAgY2F0ZWdvcmllcy5sZW5ndGggPT09IGNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSkubGVuZ3RoO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSAkc2NvcGUuY2F0ZWdvcmllcy5yZWR1Y2UoKGZpbHRlciwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICBmaWx0ZXJbY2F0ZWdvcnldID0gIWFsbENhdGVnb3JpZXM7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgICAgfSwge30pO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0TGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubG9hZGluZyB8fCBleGhhdXN0ZWQpIHJldHVybiBbXTtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLnNlYXJjaCAhPT0gJHNjb3BlLnNlYXJjaCkge1xyXG4gICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJzZWFyY2hcIiwgJHNjb3BlLnNlYXJjaCA/ICRzY29wZS5zZWFyY2ggOiBudWxsKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0cyh7XHJcbiAgICAgICAgcGFnZSxcclxuICAgICAgICBzb3J0Qnk6ICRzY29wZS5vcmRlci5maWVsZCxcclxuICAgICAgICBvcmRlckJ5OiAkc2NvcGUub3JkZXIuZGlyZWN0aW9uID8gLTEgOiAxLFxyXG4gICAgICAgIGxpbWl0OiAxMDAsXHJcbiAgICAgICAgc2VhcmNoOiAkc2NvcGUuc2VhcmNoLFxyXG4gICAgICAgIGxhbmd1YWdlczogT2JqZWN0LmtleXMoJHNjb3BlLmxhbmd1YWdlRmlsdGVyKS5maWx0ZXIoKGxhbmd1YWdlKSA9PiAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2VdKSxcclxuICAgICAgICBjYXRlZ29yaWVzOiBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpLmZpbHRlcigoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0pLFxyXG4gICAgICB9KTtcclxuICAgICAgJHNjb3BlLmNvdW50ID0gZGF0YS5jb3VudDtcclxuICAgICAgaWYgKGRhdGEucmVzdWx0Lmxlbmd0aCA8IDEwMCkgZXhoYXVzdGVkID0gdHJ1ZTtcclxuICAgICAgZWxzZSBwYWdlID0gZGF0YS5uZXh0UGFnZTtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5yZXN1bHQuc2xpY2UoMCwgMTApKTtcclxuICAgICAgcmV0dXJuIGRhdGEucmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdE5hbWUgPSAobGlzdElkKSA9PiAkc2NvcGUubGlzdHMuZmluZCgoeyBfaWQgfSkgPT4gX2lkID09PSBsaXN0SWQpPy5uYW1lO1xyXG5cclxuICAgICRzY29wZS51cGRhdGVWYWx1ZSA9IGFzeW5jIChpdGVtKSA9PiB7XHJcbiAgICAgIGlmICghaXRlbS52YWx1ZSkge1xyXG4gICAgICAgICRzY29wZS5kZWxldGVWYWx1ZShpdGVtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkSXRlbVJlc3BvbnNlID0gYXdhaXQgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKTtcclxuICAgICAgICBpdGVtLmJsdXJiVHlwZSA9IHVwZGF0ZWRJdGVtUmVzcG9uc2UuZGF0YS5ibHVyYlR5cGU7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGVWYWx1ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubmV3SXRlbS52YWx1ZSkgcmV0dXJuO1xyXG4gICAgICBpZiAoJHNjb3BlLmhhc0R1cGxpY2F0ZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KGAkeyRzY29wZS5uZXdJdGVtLnZhbHVlfSBpcyBhbHJlYWR5IGluIHRoZSBsaXN0YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoISRzY29wZS5zZWxlY3RlZExpc3QuX2lkKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMucHVzaCh7IC4uLiRzY29wZS5uZXdJdGVtIH0pO1xyXG4gICAgICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5sZW5ndGggPj0gMTApIHtcclxuICAgICAgICAgIGF3YWl0ICRzY29wZS51cHNlcnRMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVkSXRlbVJlc3BvbnNlID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmNyZWF0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCAkc2NvcGUubmV3SXRlbSk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMucHVzaChjcmVhdGVkSXRlbVJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlID0gXCJcIjtcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0uYmx1cmIgPSBcIlwiO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkKFwiI25ldy12YWx1ZVwiKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVWYWx1ZSA9IChpdGVtKSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5kZWxldGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgaXRlbSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyA9ICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLl9pZCAhPT0gaXRlbS5faWQpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwc2VydExpc3QgPSAobGlzdCwgdXBkYXRlcykgPT4ge1xyXG4gICAgICAkc2NvcGUuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKGxpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCAmJiBsaXN0Lm5hbWUgJiYgbGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAobGlzdC5faWQgJiYgbGlzdC5faWQgIT09IFwibmV3XCIpIHtcclxuICAgICAgICAgIGxldCBjaGFuZ2VzID0gdXBkYXRlcyA/IHVwZGF0ZXMgOiBsaXN0O1xyXG4gICAgICAgICAgZGVsZXRlIGNoYW5nZXMuX2lkO1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgICAuLi5jaGFuZ2VzLFxyXG4gICAgICAgICAgICBfaWQ6IGxpc3QuX2lkLFxyXG4gICAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0SW5kZXggPSAkc2NvcGUubGlzdHMuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0Ll9pZCA9PT0gZGF0YS5faWQpO1xyXG4gICAgICAgICAgICAkc2NvcGUubGlzdHNbbGlzdEluZGV4XSA9IGRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5jcmVhdGVMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgJHNjb3BlLnNlbGVjdGVkTGlzdCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0ID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuX2lkID0gZGF0YS5faWQ7XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbigkc2NvcGUuc2VsZWN0ZWRMaXN0LCB1cGRhdGVzKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICghbGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMobGlzdC5faWQpKSB7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9IFtsaXN0Ll9pZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjbW9kYWwtZGVsZXRlLWxpc3RzXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICQoXCIjbW9kYWwtZGVsZXRlLWxpc3RzXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNvbmZpcm1NZXJnZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5tZXJnZUxpc3RzKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMpO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICQoXCIjbW9kYWwtbWVyZ2UtbGlzdHNcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY29uZmlybURlbGV0ZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IGxpc3RJZCBvZiAkc2NvcGUubGlzdElkc1RvRGVsZXRlKSB7XHJcbiAgICAgICAgYXdhaXQgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3QobGlzdElkKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICQoXCIjbW9kYWwtZGVsZXRlLWxpc3RzXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUhpZ2hsaWdodGVkTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmluY2x1ZGVzKGxpc3QuX2lkKSkge1xyXG4gICAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmZpbHRlcihcclxuICAgICAgICAgIChoaWdobGlnaHRlZExpc3RJZCkgPT4gaGlnaGxpZ2h0ZWRMaXN0SWQgIT09IGxpc3QuX2lkLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5wdXNoKGxpc3QuX2lkKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2UgPSAobGlzdCwgbGFuZ3VhZ2UpID0+IHtcclxuICAgICAgbGlzdC5sYW5ndWFnZSA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgY29uc3Qgbm9uRW5nbGlzaEluZGV4ID0gbGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoXCJOb24tRW5nbGlzaFwiKTtcclxuICAgICAgaWYgKGxhbmd1YWdlLmNvZGUgIT09IFwiRU5cIiAmJiBub25FbmdsaXNoSW5kZXggPCAwKSB7XHJcbiAgICAgICAgbGlzdC5jYXRlZ29yaWVzLnB1c2goXCJOb24tRW5nbGlzaFwiKTtcclxuICAgICAgfSBlbHNlIGlmIChsYW5ndWFnZS5jb2RlID09PSBcIkVOXCIgJiYgbm9uRW5nbGlzaEluZGV4ID49IDApIHtcclxuICAgICAgICBsaXN0LmNhdGVnb3JpZXMuc3BsaWNlKG5vbkVuZ2xpc2hJbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwge1xyXG4gICAgICAgIGNhdGVnb3JpZXM6IGxpc3QuY2F0ZWdvcmllcyxcclxuICAgICAgICBsYW5ndWFnZTogbGFuZ3VhZ2UuY29kZSxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXREaWZmaWN1bHR5ID0gKGxpc3QsIGRpZmZpY3VsdHkpID0+IHtcclxuICAgICAgbGlzdC5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwge1xyXG4gICAgICAgIGRpZmZpY3VsdHk6IGRpZmZpY3VsdHksXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0RnJlcXVlbmN5ID0gKGxpc3QsIGZyZXF1ZW5jeSkgPT4ge1xyXG4gICAgICBsaXN0LmZyZXF1ZW5jeSA9IGZyZXF1ZW5jeTtcclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwge1xyXG4gICAgICAgIGZyZXF1ZW5jeTogZnJlcXVlbmN5LFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5ID0gKGxpc3QsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3J5SW5kZXggPSBsaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSk7XHJcbiAgICAgIGlmIChjYXRlZ29yeUluZGV4ID49IDApIHtcclxuICAgICAgICBsaXN0LmNhdGVnb3JpZXMuc3BsaWNlKGNhdGVnb3J5SW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7XHJcbiAgICAgICAgY2F0ZWdvcmllczogbGlzdC5jYXRlZ29yaWVzLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmhhc0R1cGxpY2F0ZSA9ICgpID0+XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgJiZcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgJiZcclxuICAgICAgXy5zb21lKFxyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgIChhbnN3ZXIpID0+IGFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCkgPT0gJHNjb3BlLm5ld0l0ZW0udmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpLFxyXG4gICAgICApO1xyXG5cclxuICAgICRzY29wZS5nZXRCbHVyYnMgPSAodHlwZSkgPT4ge1xyXG4gICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRCbHVyYnMoJHNjb3BlLnNlbGVjdGVkTGlzdCwgdHlwZSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0RW1iZWRVcmwgPSAodXJsKSA9PiB7XHJcbiAgICAgIGlmICh1cmwuaW5jbHVkZXMoXCJ5b3V0dWJlLmNvbVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL1s/Jl12PShbXiZdKykvKVsxXS50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsLmluY2x1ZGVzKFwieW91dHUuYmVcIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC95b3V0dVxcLmJlXFwvKFteJj9dKykvKVsxXS50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsLmluY2x1ZGVzKFwidmltZW8uY29tXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvdmltZW9cXC5jb21cXC8oXFxkKykvKVsxXS50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGBodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHVybC5pbmNsdWRlcyhcIm9wZW4uc3BvdGlmeVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL3RyYWNrXFwvKFteJj9dKykvKVsxXS50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGBodHRwczovL29wZW4uc3BvdGlmeS5jb20vZW1iZWQvdHJhY2svJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybCh1cmwpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybiBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfT9hdXRvcGxheT0xYDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsIGdldERhdGEpO1xyXG4gIH0pO1xyXG4iLCIvKmpzbGludCBlc3ZlcnNpb246IDYqL1xyXG5hbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzQWRtaW5DdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIFRlblRoaW5nc1N2YywgVXNlclN2Yykge1xyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4pIHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInVzZXJuYW1lXCIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5yZXZlcnNlID0gISRzY29wZS5vcmRlci5yZXZlcnNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldFF1ZXVlID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRRdWV1ZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnF1ZXVlID0gcmVzcG9uc2UuZGF0YS5yZXBsYWNlKFwiL25cIiwgXCI8YnIvPlwiKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICAkc2NvcGUuZ2V0UXVldWUoKTtcclxuXHJcbiAgICBUZW5UaGluZ3NTdmMuZ2V0UGF1c2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAkc2NvcGUucGF1c2VkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coJHNjb3BlLnBhdXNlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBnZXRVc2VycyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLmdldFVzZXJzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUudXNlcnMgPSByZXNwb25zZS5kYXRhLmZpbHRlcigodXNlcikgPT4gIXVzZXIuYWRtaW4pO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQmFuID0gKHVzZXIpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLnRvZ2dsZUJhbih1c2VyLl9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZVBhdXNlID0gKHVzZXIpID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLnRvZ2dsZVBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucGF1c2VkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUucGF1c2VkKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzR2FtZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlUGFyYW1zLCBUZW5UaGluZ3NTdmMsIFVzZXJTdmMpIHtcclxuICAgIGNvbnN0IGdldFVzZXJzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMuZ2V0VXNlcnMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS51c2VycyA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKCh1c2VyKSA9PiAhdXNlci5hZG1pbik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kb24oXCJsb2dpblwiLCAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4pIHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoJHN0YXRlUGFyYW1zLmdhbWUpIHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldEdhbWUoJHN0YXRlUGFyYW1zLmdhbWUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmdhbWUgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5nYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NTdGF0c0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IFtdO1xyXG4gICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSB7IGxhYmVsczogW10sIGRhdGFzZXRzOiBbXSB9O1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmN1cnJlbnRVc2VyKSByZXR1cm47XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZVN0YXRzID0gW107XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRQbGF5U3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IHllYXIgfSkgPT4geWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBtb250aHMgPSBfLnRpbWVzKDEyLCAoaSkgPT4gaSArIDEpO1xyXG4gICAgICAgICRzY29wZS5wbGF5U3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IG1vbnRocyxcclxuICAgICAgICAgIHNlcmllczogeWVhcnMsXHJcbiAgICAgICAgICBkYXRhOiB5ZWFycy5tYXAoKHllYXIpID0+XHJcbiAgICAgICAgICAgIG1vbnRocy5tYXAoKG1vbnRoKSA9PiBkYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubW9udGggPT09IG1vbnRoICYmIGl0ZW0ueWVhciA9PT0geWVhcik/LnVuaXF1ZVBsYXllcnMgfHwgMCksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiQ2hhcnQuanMgTGluZSBDaGFydFwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQueWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBsYW5ndWFnZXMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSkpLnNvcnQoKTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgc2VyaWVzOiB5ZWFycyxcclxuICAgICAgICAgIGRhdGE6IHllYXJzLm1hcCgoeWVhcikgPT5cclxuICAgICAgICAgICAgbGFuZ3VhZ2VzLm1hcChcclxuICAgICAgICAgICAgICAobGFuZ3VhZ2UpID0+IGRhdGEuZmluZCgoeyBfaWQgfSkgPT4gX2lkLmxhbmd1YWdlID09PSBsYW5ndWFnZSAmJiBfaWQueWVhciA9PT0geWVhcik/LmNvdW50IHx8IDAsXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RDYXRlZ29yeVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gXy5zb3J0QnkoZGF0YSwgKHsgY291bnQgfSkgPT4gLWNvdW50KTtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogc29ydGVkRGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZCksXHJcbiAgICAgICAgICBkYXRhOiBbc29ydGVkRGF0YS5tYXAoKHsgY291bnQgfSkgPT4gY291bnQpXSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsICgpID0+IHtcclxuICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignV29ya291dEN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAkc2NvcGUudGltZUV4ZXJjaXNpbmcgPSAzMDtcclxuICAkc2NvcGUudGltZVJlc3RpbmcgPSAxMDtcclxuICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG5cclxuICB2YXIgc291bmRzID0ge1xyXG4gICAgb246IG5ldyBBdWRpbygnb24ud2F2JyksXHJcbiAgICBvZmY6IG5ldyBBdWRpbygnb2ZmLndhdicpLFxyXG4gICAgc3dpdGNoOiBuZXcgQXVkaW8oJ3N3aXRjaC53YXYnKSxcclxuICB9O1xyXG5cclxuXHJcbiAgdmFyIGV4ZXJjaXNlcyA9IFtcclxuICAgIHtuYW1lOiAnSnVtcGluZyBKYWNrcycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1dhbGwgU2l0Jywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUHVzaC1VcCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0NydW5jaCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1N0ZXAtVXAnLCBzcGxpdDogdHJ1ZX0sXHJcbiAgICB7bmFtZTogJ1NxdWF0Jywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnVHJpY2VwcyBEaXAnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQbGFuaycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0hpZ2ggS25lZXMnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdMdW5nZScsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1B1c2gtVXAgd2l0aCBSb3RhdGlvbicsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1NpZGUgUGxhbmsnLCBzcGxpdDogdHJ1ZX1cclxuICBdO1xyXG5cclxuICB2YXIgZXhlcmNpc2luZztcclxuXHJcbiAgJHNjb3BlLnByb2dyZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKGV4ZXJjaXNlcy5sZW5ndGggLSBNYXRoLmZsb29yKCRzY29wZS50aW1lUmVtYWluaW5nIC8gKCRzY29wZS50aW1lRXhlcmNpc2luZyArICRzY29wZS50aW1lUmVzdGluZykpKSArICcvJyArIGV4ZXJjaXNlcy5sZW5ndGg7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLndvcmtvdXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBleGNlcmNpc2VUaW1lID0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nICsgJHNjb3BlLnRpbWVSZXN0aW5nO1xyXG4gICAgaWYgKCEkc2NvcGUudGltZVJlbWFpbmluZykge1xyXG4gICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IGV4ZXJjaXNlcy5sZW5ndGggKiBleGNlcmNpc2VUaW1lO1xyXG4gICAgICBleGVyY2lzaW5nID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmctLTtcclxuICAgICAgICBpZiAoJHNjb3BlLnRpbWVSZW1haW5pbmcgPT09IDApIHtcclxuICAgICAgICAgICRzY29wZS5leGVyY2lzZSA9IHtuYW1lOiAnRmluaXNoZWQhIENvbmdyYXRzIScsIHNwbGl0OiBmYWxzZX07XHJcbiAgICAgICAgICAkc2NvcGUudGltZXIgPSAnJztcclxuICAgICAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbChleGVyY2lzaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN1cnJlbnRFeGVyY2lzZSA9IE1hdGguZmxvb3IoJHNjb3BlLnRpbWVSZW1haW5pbmcgLyBleGNlcmNpc2VUaW1lKTtcclxuICAgICAgICB2YXIgdGltZXIgPSAkc2NvcGUudGltZVJlbWFpbmluZyAtIGN1cnJlbnRFeGVyY2lzZSAqIGV4Y2VyY2lzZVRpbWU7XHJcbiAgICAgICAgJHNjb3BlLnRpbWVyID0gdGltZXIgPiAkc2NvcGUudGltZUV4ZXJjaXNpbmcgPyB0aW1lciAtICRzY29wZS50aW1lRXhlcmNpc2luZyA6IHRpbWVyO1xyXG4gICAgICAgIGlmICh0aW1lciA+ICRzY29wZS50aW1lRXhlcmNpc2luZykge1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc2NvcGUuZXhlcmNpc2UgPSBleGVyY2lzZXNbZXhlcmNpc2VzLmxlbmd0aCAtIGN1cnJlbnRFeGVyY2lzZSAtIDFdO1xyXG4gICAgICAgIGlmICh0aW1lciA9PT0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nKSB7XHJcbiAgICAgICAgICBzb3VuZHMub24ucGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGltZXIgPT09IDApIHtcclxuICAgICAgICAgIHNvdW5kcy5vZmYucGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmV4ZXJjaXNlLnNwbGl0ICYmIHRpbWVyID09PSBNYXRoLmZsb29yKCRzY29wZS50aW1lRXhlcmNpc2luZyAvIDIpKSB7XHJcbiAgICAgICAgICBzb3VuZHMuc3dpdGNoLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyk7XHJcbiAgICAgICRzY29wZS50aW1lciA9ICcnO1xyXG4gICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICRzY29wZS5leGVyY2lzZSA9IHtuYW1lOiAnJywgc3BsaXQ6IGZhbHNlfTtcclxuICAgIH1cclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmRpcmVjdGl2ZShcImNsaWNrT3V0c2lkZVwiLCBmdW5jdGlvbiAoJGRvY3VtZW50KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc3RyaWN0OiBcIkFcIixcclxuICAgIHNjb3BlOiB7XHJcbiAgICAgIGNsaWNrT3V0c2lkZTogXCImXCIsXHJcbiAgICB9LFxyXG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAkZG9jdW1lbnQub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlbCAhPT0gZS50YXJnZXQgJiYgIWVsWzBdLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9zY29wZS4kcGFyZW50LnNldFNlbGVjdGVkTGlzdCgpO1xyXG4gICAgICAgICAgICBzY29wZS4kZXZhbChzY29wZS5jbGlja091dHNpZGUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG5cdC5kaXJlY3RpdmUoJ2hlYWQnLCBbXHJcblx0XHQnJHJvb3RTY29wZScsXHJcblx0XHQnJHN0YXRlJyxcclxuXHRcdCckY29tcGlsZScsXHJcblx0XHQnJGludGVycG9sYXRlJyxcclxuXHRcdGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsICRjb21waWxlLCAkaW50ZXJwb2xhdGUpIHtcclxuXHJcblx0XHRcdHZhciBnZXRTdHlsZSA9IGZ1bmN0aW9uIGdldFN0eWxlKHRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHJcblx0XHRcdFx0dmFyIHN0eWxlID0ge1xyXG5cdFx0XHRcdFx0aHJlZjogdGVtcGxhdGVTdHlsZVVybCxcclxuXHRcdFx0XHRcdHJlbDogJ3N0eWxlc2hlZXQnXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0aWYgKHN0eWxlLmhyZWYubWF0Y2goL1xcLmxlc3MkLykpIHtcclxuXHRcdFx0XHRcdHN0eWxlLnJlbCA9ICdzdHlsZXNoZWV0L2xlc3MnO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIHN0eWxlO1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiBnZXRTdHlsZXMoc3RhdGUpIHtcclxuXHJcblx0XHRcdFx0dmFyIHN0YXRlcyA9IHt9O1xyXG5cclxuXHRcdFx0XHQvL0NoZWNrIHN0YXRlIGZvciBzdHlsZXNcclxuXHRcdFx0XHR3aGlsZSAoc3RhdGUubmFtZSAhPT0gJycpIHtcclxuXHRcdFx0XHRcdHZhciBwYXJlbnQgPSAkc3RhdGUuZ2V0KCdeJywgc3RhdGUpO1xyXG5cclxuXHRcdFx0XHRcdC8vSW5pdGlhdGUgb3VyIHZpZXcgbGlzdFxyXG5cdFx0XHRcdFx0aWYgKCFzdGF0ZXNbcGFyZW50Lm5hbWVdKSB7XHJcblx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV0gPSB7fTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NoZWNrIHRoZSB0ZW1wbGF0ZVN0eWxlXHJcblx0XHRcdFx0XHRpZiAoc3RhdGUudGVtcGxhdGVTdHlsZVVybCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1twYXJlbnQubmFtZV1bJyddKSB7XHJcblx0XHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXVsnJ10gPSBnZXRTdHlsZShzdGF0ZS50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ2hlY2sgdmlld3NcclxuXHRcdFx0XHRcdGlmIChzdGF0ZS52aWV3cykge1xyXG5cdFx0XHRcdFx0XHRfLmZvckVhY2goc3RhdGUudmlld3MsIGZ1bmN0aW9uICh2aWV3LCBrZXkpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBoYXZlIGEgc3R5bGVcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXZpZXcudGVtcGxhdGVTdHlsZVVybCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBhcmUgdGFyZ2V0aW5nIHNvbWUgcGFyZW50XHJcblx0XHRcdFx0XHRcdFx0aWYgKChrZXkgPSBrZXkuc3BsaXQoJ0AnKSlbMV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgaGF2ZSBzdHlsZXMgZm9yIHRoYXQgcGFyZW50XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1trZXlbMV1dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlc1trZXlbMV1dID0ge307XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Ly9QbGFjZSB0aGUgc3R5bGUgb24gc29tZSBwYXJlbnQncyB2aWV3XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1trZXlbMV1dW2tleVswXV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGVzW2tleVsxXV1ba2V5WzBdXSA9IGdldFN0eWxlKHZpZXcudGVtcGxhdGVTdHlsZVVybCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9QbGFjZSB0aGUgc3R5bGUgb24gb3VyIHBhcmVudCdzIHZpZXdcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdW2tleVswXV0gPSBnZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9Db250aW51ZSB3aXRoIHRoZSBwYXJlbnRcclxuXHRcdFx0XHRcdHN0YXRlID0gcGFyZW50O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9GbGF0dGVuIHRoZSBsaXN0XHJcblx0XHRcdFx0dmFyIGZsYXQgPSBbXTtcclxuXHRcdFx0XHRfLmZvckVhY2goc3RhdGVzLCBmdW5jdGlvbiAodmlld3MpIHtcclxuXHJcblx0XHRcdFx0XHRfLmZvckVhY2godmlld3MsIGZ1bmN0aW9uIChzdHlsZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFfLmluY2x1ZGVzKGZsYXQsIHN0eWxlKSkge1xyXG5cdFx0XHRcdFx0XHRcdGZsYXQucHVzaChzdHlsZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vUmV2ZXJzZSBpdCBzbyB3ZSBoYXZlIGEgcHJvcGVyIGhpZXJhcmNoeVxyXG5cdFx0XHRcdGZsYXQucmV2ZXJzZSgpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZmxhdDtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRcdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtKSB7XHJcblxyXG5cdFx0XHRcdFx0c2NvcGUudGVtcGxhdGVTdHlsZXMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHR2YXIgaHRtbCA9ICc8bGluayBuZy1hdHRyLXJlbD1cInt7c3R5bGUucmVsfX1cIiBuZy1yZXBlYXQ9XCJzdHlsZSBpbiB0ZW1wbGF0ZVN0eWxlc1wiIG5nLWhyZWY9XCJ7e3N0eWxlLmhyZWZ9fVwiPic7XHJcblxyXG5cdFx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvXFx7XFx7L2csICRpbnRlcnBvbGF0ZS5zdGFydFN5bWJvbCgpKTtcclxuXHRcdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcfVxcfS9nLCAkaW50ZXJwb2xhdGUuZW5kU3ltYm9sKCkpO1xyXG5cclxuXHRcdFx0XHRcdGVsZW0uYXBwZW5kKCRjb21waWxlKGh0bWwpKHNjb3BlKSk7XHJcblxyXG5cdFx0XHRcdFx0JHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzY29wZS50ZW1wbGF0ZVN0eWxlcyA9IGdldFN0eWxlcyh0b1N0YXRlKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdH1cclxuXHRdKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdDYXRlZ29yaWVzU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRDYXRlZ29yaWVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9jYXRlZ29yaWVzJyk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFRhc2tzID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5KTtcclxuICB9O1xyXG5cclxuICBzdmMuYWRkQ2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJywgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRUYXNrID0gZnVuY3Rpb24gKGNhdGVnb3J5LCB0YXNrKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9jYXRlZ29yaWVzLycgKyBjYXRlZ29yeSArICcvdGFza3MnLCB0YXNrKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2V0UHJpb3JpdHlMaXN0ID0gZnVuY3Rpb24obGlzdCkge1xyXG4gICAgc3ZjLmNob2ljZXMgPSBsaXN0O1xyXG4gICAgc3ZjLnByaW9yaXR5TGlzdCA9IFtdO1xyXG4gICAgLy9NYWtlIGEgbmV3IGNob2ljZSBsaXN0XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgbGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHZhciByYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHN2Yy5wcmlvcml0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgIGZpcnN0Q2hvaWNlOiBsaXN0W3JhbmRvbSA9PT0gMCA/IGkgOiBqXS5uYW1lLFxyXG4gICAgICAgICAgc2Vjb25kQ2hvaWNlOiBsaXN0W3JhbmRvbSA9PT0gMCA/IGogOiBpXS5uYW1lLFxyXG4gICAgICAgICAgY2hvaWNlOiAnJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzaHVmZmxlKHN2Yy5wcmlvcml0eUxpc3QpO1xyXG4gICAgZm9yIChpIGluIHN2Yy5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgc3ZjLnByaW9yaXR5TGlzdFtpXS5pZCA9IGkgKyAxO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICByZXR1cm4gc3ZjLnByaW9yaXR5TGlzdDtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBzaHVmZmxlKGFycmF5KSB7XHJcbiAgICB2YXIgbSA9IGFycmF5Lmxlbmd0aCwgdCwgaTtcclxuICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxl4oCmXHJcbiAgICB3aGlsZSAobSkge1xyXG4gICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnTigKZcclxuICAgICAgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG0tLSk7XHJcbiAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cclxuICAgICAgLy9hcnJheVttXS5maXJzdENob2ljZTtcclxuICAgICAgdCA9IGFycmF5W21dO1xyXG4gICAgICBhcnJheVttXSA9IGFycmF5W2ldO1xyXG4gICAgICBhcnJheVtpXSA9IHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnRW1haWxTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLnNlbmQgPSBmdW5jdGlvbiAoZW1haWwpIHtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2VtYWlsJywgZW1haWwpO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLnNlcnZpY2UoJ0ZpbGVTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICAgIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICAgIHN2Yy5nZXRJbWFnZXMgPSBmdW5jdGlvbihmb2xkZXIpIHtcclxuICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9maWxlcy9pbWFnZXMvJyArIGZvbGRlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy5nZXRTb3VuZHMgPSBmdW5jdGlvbihmb2xkZXIpIHtcclxuICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9maWxlcy9zb3VuZHMvJyArIGZvbGRlcik7XHJcbiAgICB9O1xyXG5cclxuICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0dhbWVTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICAgIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICAgIHN2Yy5nZXRIaWdoc2NvcmUgPSBmdW5jdGlvbiAoZ2FtZSwgdXNlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2dhbWVzLycgKyBnYW1lICsgJy8nICsgdXNlciArICcvaGlnaHNjb3JlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy5zZXRIaWdoc2NvcmUgPSBmdW5jdGlvbiAoZ2FtZSwgdXNlciwgc2NvcmUpIHtcclxuICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZ2FtZXMvJyArIGdhbWUgKyAnLycgKyB1c2VyICsgJy9oaWdoc2NvcmUnLCB7XHJcbiAgICAgICAgc2NvcmU6IHNjb3JlXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0xhbmd1YWdlU3ZjJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMubGFuZ3VhZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJFbmdsaXNoXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1nYlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJOZWRlcmxhbmRzXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1ubFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJGcmFuw6dhaXNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWZyXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBzdmMudGV4dCA9IFtcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRU5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiTkxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRlJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gc3ZjLmxhbmd1YWdlc1swXTtcclxuXHJcbiAgc3ZjLnNldExhbmd1YWdlID0gZnVuY3Rpb24gKGxhbmd1YWdlKSB7XHJcbiAgICBzdmMuc2VsZWN0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBzdmMuc2VsZWN0ZWRMYW5ndWFnZTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnUG9zdHNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmZldGNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cycpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGUgPSBmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCBwb3N0KTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UG9zdCA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzLycgKyBwb3N0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiVGVuVGhpbmdzU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0UXVldWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYm90cy90ZW50aGluZ3MvcXVldWVgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdHMgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7XHJcbiAgICB2YXIgdXJsID1cclxuICAgICAgYC9hcGkvdGVudGhpbmdzL2xpc3RzP2AgK1xyXG4gICAgICAob3B0aW9ucy5saW1pdCA/IGAmbGltaXQ9JHtvcHRpb25zLmxpbWl0fWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnBhZ2UgPyBgJnBhZ2U9JHtvcHRpb25zLnBhZ2V9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuc29ydEJ5ID8gYCZzb3J0X2J5PSR7b3B0aW9ucy5zb3J0Qnl9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMub3JkZXJCeSA/IGAmb3JkZXJfYnk9JHtvcHRpb25zLm9yZGVyQnl9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMubGFuZ3VhZ2VzICYmIG9wdGlvbnMubGFuZ3VhZ2VzLmxlbmd0aCA+IDAgPyBgJmxhbmd1YWdlPSR7b3B0aW9ucy5sYW5ndWFnZXMuam9pbihcIixcIil9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuY2F0ZWdvcmllcyAmJiBvcHRpb25zLmNhdGVnb3JpZXMubGVuZ3RoID4gMCA/IGAmY2F0ZWdvcmllcz0ke29wdGlvbnMuY2F0ZWdvcmllcy5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zZWFyY2ggPyBgJnNlYXJjaD0ke29wdGlvbnMuc2VhcmNofWAgOiBcIlwiKTtcclxuICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2VhcmNoTGlzdHMgPSAobmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3Mvc2VhcmNoL2xpc3QtbmFtZXMvJHtuYW1lfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvY2F0ZWdvcmllc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9sYW5ndWFnZXNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnB1dChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQsIGxpc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGVMaXN0ID0gZnVuY3Rpb24gKHVzZXIsIGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHNcIiwge1xyXG4gICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICBsaXN0OiBsaXN0LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLm1lcmdlTGlzdHMgPSBmdW5jdGlvbiAobGlzdHMpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvbWVyZ2VcIiwgeyBsaXN0czogbGlzdHMgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmRlbGV0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdElkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0SWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wdXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzL1wiICsgdmFsdWUuX2lkLCB2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzXCIsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBzdmMuZGVsZXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3ZhbHVlcy9cIiArIHZhbHVlLl9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnJlcG9ydExpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3JlcG9ydC9cIiArIHVzZXIuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvY2F0ZWdvcmllc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvbGFuZ3VhZ2VzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQbGF5U3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvcGxheVwiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0Qmx1cmJzID0gZnVuY3Rpb24gKGxpc3QsIHR5cGUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9saXN0cy8ke2xpc3QuX2lkfS9ibHVyYnMvJHt0eXBlfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnRvZ2dsZVBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEdhbWUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2dhbWUvJHtpZH1gKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlVzZXJTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFVzZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnMvYWxsXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVCYW4gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3VzZXJzL2Jhbi8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSB0b2tlbjtcclxuICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hdXRoZW50aWNhdGVcIiwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9sb2dpblwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyLl9pZCwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi92ZXJpZmljYXRpb25cIiwge1xyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvcGFzc3dvcmRcIiwge1xyXG4gICAgICBvbGRQYXNzd29yZDogb2xkUGFzc3dvcmQsXHJcbiAgICAgIG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VyLCBuZXdVc2VybmFtZSkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi91c2VybmFtZVwiLCB7XHJcbiAgICAgICAgbmV3VXNlcm5hbWU6IG5ld1VzZXJuYW1lLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmNvbnRyb2xsZXIoJ1F1aXpBbmltYWxzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgRmlsZVN2Yykge1xyXG5cclxuICAgIEZpbGVTdmMuZ2V0U291bmRzKCdhbmltYWxzJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIHNvdW5kOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgNSk7XHJcblxyXG4gICAgJHNjb3BlLmdldFNjb3JlID0gKCkgPT4gYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwubmFtZSA9PT0gYW5pbWFsLmd1ZXNzKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWA7XHJcblxyXG4gICAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwuZ3Vlc3MpLmxlbmd0aCA9PT0gJHNjb3BlLmFuaW1hbHMubGVuZ3RoO1xyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpekdvb2dsZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ2dvb2dsZScpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TG9nb3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdsb2dvcycpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TW92aWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnbW92aWVzJylcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuY29udHJvbGxlcignUXVpelNrZWxldG9uc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIEZpbGVTdmMpIHtcclxuXHJcbiAgICBGaWxlU3ZjLmdldEltYWdlcygnc2tlbGV0b25zJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIGltYWdlOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgMTApO1xyXG5cclxuICAgICRzY29wZS5nZXRTY29yZSA9ICgpID0+IGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAgICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxuICB9KTsiXX0=
