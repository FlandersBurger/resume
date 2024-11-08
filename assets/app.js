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
angular.module("app", ["ui.router", "ui.bootstrap", "ngAnimate", "ngSanitize", "ngMaterial", "ngMessages", "ngDragDrop", "ngTagsInput", "vcRecaptcha", "chart.js", "tc.chartjs", "infinite-scroll"]), angular.module("app").config(function ($stateProvider, $urlRouterProvider, $urlServiceProvider, $locationProvider) {
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
  const canvas = document.getElementsByTagName("canvas")[0];
  if (!canvas) return $location.path("/home"), alert("");
  const ctx = canvas.getContext("2d");
  if (!ctx) return $location.path("/home");
  ctx.font = "30px Comic Sans MS", ctx.fillStyle = "red", ctx.textAlign = "center";
  let shots = {};
  const asteroids = {},
    powerups = {},
    explosions = {},
    map = {},
    spacepics = 10;
  let space = Math.floor(Math.random() * spacepics);
  const powerupTypes = [{
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
    console.log(window.innerWidth), canvas.width = window.innerWidth - 1, canvas.height = window.innerHeight - (canvas.width <= 768 ? 50 : 59);
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
      canvas.width = window.innerWidth, canvas.height = window.innerHeight - (canvas.width <= 768 ? 55 : 56);
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
}), angular.module("app").controller("TenThingsCtrl", function ($scope, $sce, $location, $mdToast, TenThingsSvc) {
  let page = 1;
  $scope.lists = [], $scope.search = "", $scope.newItem = {}, $scope.languageFilter = {}, $scope.categoryFilter = {}, $scope.selectedList = void 0, $scope.selectedLanguage = "EN", $scope.highlightedLists = [], $scope.highlightedListIds = [], $scope.listIdsToDelete = [], $scope.confirmed = !1;
  let exhausted = !1;
  const toast = message => {
      $mdToast.show($mdToast.simple().textContent(message).position("bottom right").hideDelay(3e3));
    },
    objectCategories = ["culture", "nature", "misc", "society", "sports"];
  $scope.blurbTypes = [{
    api: "movies",
    categories: ["movies"],
    text: "Get movie posters",
    adminOnly: !1
  }, {
    api: "tv",
    categories: ["television"],
    text: "Get tv posters",
    adminOnly: !1
  }, {
    api: "actors",
    categories: ["movies", "television"],
    text: "Get actor pics",
    adminOnly: !1
  }, {
    api: "books",
    categories: ["literature"],
    text: "Get book covers",
    adminOnly: !1
  }, {
    api: "musicvideos",
    categories: ["music"],
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
  }, $scope.getCategoryLabel = categories => {
    if (!categories || 0 === categories.length) return "";
    return categories.filter(category => !category.includes(".")).sort().map(category => {
      const subcategories = categories.filter(subcategory => subcategory.startsWith(category) && subcategory !== category).map(subcategory => $scope.categories.find(({
        value
      }) => value === category).subcategories.find(({
        value
      }) => value === subcategory)?.label);
      return $scope.categories.find(({
        value
      }) => value === category).label + (subcategories.length > 0 ? " (" + subcategories.sort().join(", ") + ")" : "");
    }).join(", ");
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
        $scope.selectedList.values.push(createdItemResponse.data), console.log($scope.newItem.value), toast(`"${$scope.newItem.value}" added`);
      } else $scope.selectedList.values.push({
        ...$scope.newItem
      }), $scope.selectedList.values.length >= 10 && (await $scope.upsertList($scope.selectedList));
      $scope.newItem.value = "", $scope.newItem.blurb = "", setTimeout(() => {
        $("#new-value").trigger("focus");
      }), $scope.$apply();
    }
  }, $scope.deleteValue = item => {
    TenThingsSvc.deleteListValue($scope.selectedList, item).then(() => {
      $scope.selectedList.values = $scope.selectedList.values.filter(value => value._id !== item._id), toast(`"${item.value}" removed`);
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
          $scope.saving = !1, $scope.lists[$scope.lists.findIndex(list => list._id === data._id)] = data, $scope.selectedList = data;
        }, console.error);
      } else TenThingsSvc.createList($scope.currentUser, $scope.selectedList).then(({
        data
      }) => {
        "new" === $location.search().list && $location.search("list", data._id), $scope.selectedList._id = data._id, $scope.getLists(), $scope.saving = !1, toast(`"${data.name}" created`);
      }, console.error);
    } else Object.assign($scope.selectedList, updates);
  }, $scope.deleteList = list => {
    list._id ? ($scope.confirmed = !1, $scope.highlightedListIds.includes(list._id) ? $scope.listIdsToDelete = $scope.highlightedListIds : $scope.listIdsToDelete = [list._id], $("#modal-delete-lists").modal("show")) : $scope.selectedList = null;
  }, $scope.deleteLists = () => {
    $scope.listIdsToDelete = $scope.highlightedListIds, $scope.confirmed = !1, $("#modal-delete-lists").modal("show");
  }, $scope.confirmMergeLists = async () => {
    const response = await TenThingsSvc.mergeLists($scope.highlightedListIds);
    $scope.getLists(), $scope.setSelectedList(response.data), $scope.highlightedLists = [], $scope.highlightedListIds = [], $scope.confirmed = !1, toast("Merged"), $("#modal-merge-lists").modal("hide");
  }, $scope.confirmDeleteLists = async () => {
    for (const listId of $scope.listIdsToDelete) await TenThingsSvc.deleteList(listId);
    $scope.getLists(), $scope.selectedList = null, $scope.listIdsToDelete = [], $scope.highlightedLists = [], $scope.highlightedListIds = [], $scope.confirmed = !1, toast("Lists deleted"), $("#modal-delete-lists").modal("hide");
  }, $scope.toggleHighlightedList = list => {
    $scope.highlightedListIds.includes(list._id) ? $scope.highlightedListIds = $scope.highlightedListIds.filter(highlightedListId => highlightedListId !== list._id) : $scope.highlightedListIds.push(list._id), $scope.highlightedLists = $scope.lists.filter(({
      _id
    }) => $scope.highlightedListIds.includes(_id));
  }, $scope.setLanguage = (list, language) => {
    list.language = language.code, $scope.selectedLanguage = language.code, $scope.upsertList(list, {
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
  };
  const getUpdatedCategories = (list, category) => {
    let categories = list.categories;
    return categories.some(listCategory => listCategory === category) ? (categories = list.categories.filter(listCategory => listCategory !== category), !category.includes(".") && categories.some(listCategory => listCategory.startsWith(category)) && (categories = categories.filter(listCategory => !listCategory.startsWith(category)))) : (categories.push(category), category.includes(".") && !categories.find(listCategory => listCategory === category.split(".")[0]) && categories.push(category.split(".")[0])), categories;
  };
  $scope.setCategory = (list, category) => {
    const updatedCategories = getUpdatedCategories(list, category);
    0 === updatedCategories.length ? toast(`You must have at least 1 category for ${list.name}`) : $scope.upsertList(list, {
      categories: updatedCategories
    });
  }, $scope.setCategories = async category => {
    $scope.saving = !0;
    let listsToUpdate = [];
    listsToUpdate = $scope.highlightedLists.every(({
      categories
    }) => categories.includes(category)) ? $scope.highlightedLists : $scope.highlightedLists.some(({
      categories
    }) => categories.includes(category)) ? $scope.highlightedLists.filter(({
      categories
    }) => !categories.includes(category)) : $scope.highlightedLists;
    for (const listToUpdate of listsToUpdate) {
      const updatedCategories = getUpdatedCategories(listToUpdate, category);
      if (0 === updatedCategories.length) toast(`You must have at least 1 category for ${listToUpdate.name}`);else {
        const {
            data
          } = await TenThingsSvc.updateList({
            _id: listToUpdate._id,
            categories: updatedCategories
          }),
          listIndex = $scope.lists.findIndex(list => list._id === data._id);
        $scope.lists[listIndex] = data;
      }
    }
    $scope.highlightedLists = $scope.lists.filter(({
      _id
    }) => $scope.highlightedListIds.includes(_id)), $scope.$apply();
  }, $scope.categoryStatus = category => $scope.highlightedLists.every(({
    categories
  }) => categories.includes(category)) ? "checked" : $scope.highlightedLists.some(({
    categories
  }) => categories.includes(category)) ? "partial" : "unchecked", $scope.hasDuplicate = () => $scope.selectedList && $scope.newItem.value && _.some($scope.selectedList.values, answer => answer.value.removeAllButLetters() == $scope.newItem.value.removeAllButLetters()), $scope.getSelectedListsTitle = () => $scope.highlightedLists.map(list => list.name).join(" / "), $scope.getBlurbs = type => {
    $scope.gettingBlurbs = !0, TenThingsSvc.getBlurbs($scope.selectedList, type).then(() => {
      $scope.setSelectedList($scope.selectedList), $scope.gettingBlurbs = !1, toast("Blurbs updated");
    }).catch(err => {
      console.error(err), $scope.gettingBlurbs = !1, toast("Blurb update failed");
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
  }), $(document).on("hidden.bs.modal", "#modal-update-multiple-lists", function () {
    $scope.getLists();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiY29udHJvbGxlcnMvYXBwLmN0cmwuanMiLCJjb250cm9sbGVycy9hc3Rlcm9pZHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2J1YmJsZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NoYXJhZGVzLmN0cmwuanMiLCJjb250cm9sbGVycy9jb250YWN0LmN0cmwuanMiLCJjb250cm9sbGVycy9leHBlcmllbmNlLmN0cmwuanMiLCJjb250cm9sbGVycy9ob2JiaWVzLmN0cmwuanMiLCJjb250cm9sbGVycy9sZW1taW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbGlzdHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xvZ2luLmN0cmwuanMiLCJjb250cm9sbGVycy9wb3N0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJvZmlsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvc2tpbGxzLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3MuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2FkbWluLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NnYW1lLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NzdGF0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvd29ya291dC5jdHJsLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJzZXJ2aWNlcy9jYXRlZ29yaWVzLnN2Yy5qcyIsInNlcnZpY2VzL2VtYWlsLnN2Yy5qcyIsInNlcnZpY2VzL2ZpbGUuc3ZjLmpzIiwic2VydmljZXMvZ2FtZS5zdmMuanMiLCJzZXJ2aWNlcy9sYW5ndWFnZS5zdmMuanMiLCJzZXJ2aWNlcy9wb3N0cy5zdmMuanMiLCJzZXJ2aWNlcy90ZW50aGluZ3Muc3ZjLmpzIiwic2VydmljZXMvdXNlci5zdmMuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2FuaW1hbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvZ29vZ2xlLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2xvZ29zLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL21vdmllcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9za2VsZXRvbnMuY3RybC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRvbWFpbnMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0cmluZyIsInByb3RvdHlwZSIsInZhbHVlIiwicmVkdWNlIiwicmVzdWx0IiwibGV0dGVyIiwicmVwbGFjZSIsInRoaXMiLCJTUEVDSUFMX0NIQVJBQ1RFUlMiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZURpYWNyaXRpY3MiLCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyIsImV4dHJhIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInJlcGxhY2VBbGwiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidW5kZWZpbmVkIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsIiRzY29wZSIsIkxhbmd1YWdlU3ZjIiwiVXNlclN2YyIsIiQiLCJsb2FkIiwiZmFkZU91dCIsImZhZGVJbiIsIm9uIiwiY2xvc2VzdCIsInRvZ2dsZUNsYXNzIiwiY2hlY2tlZCIsImRvY3VtZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidGhlbWVDb3VudGVyIiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiZmxpcFRoZW1lIiwic2hvdyIsImhpZGUiLCJzZXRUaW1lb3V0IiwiZ2V0SlNPTiIsInNraWxscyIsImZpbHRlciIsInNraWxsIiwiaG9iYmllcyIsImpvYnMiLCJqb2IiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiY2hhcmFkZXMiLCJnZXRUaW1lU3BhbiIsImxhbmd1YWdlcyIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInNlbGVjdExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImhvdmVyZGl2IiwiZGl2aWQiLCJsZWZ0IiwiY2xpZW50WCIsInRvcCIsImNsaWVudFkiLCJnZXRFbGVtZW50QnlJZCIsImNzcyIsInRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsInVzZXIiLCJsb2dpbiIsInRoZW4iLCJyZXNwb25zZSIsIiRvbiIsIl8iLCJsb2dnZWRJbiIsIl9pZCIsImN1cnJlbnRVc2VyIiwiYmlydGhEYXRlIiwibG9hZGluZyIsImxvZ291dCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJjbGVhciIsImNhdGNoIiwiZXJyb3IiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsIiRsb2NhdGlvbiIsIkdhbWVTdmMiLCJhbm5vdW5jZSIsImNhbnZhcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGF0aCIsImFsZXJ0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZvbnQiLCJmaWxsU3R5bGUiLCJ0ZXh0QWxpZ24iLCJzaG90cyIsImFzdGVyb2lkcyIsInBvd2VydXBzIiwiZXhwbG9zaW9ucyIsIm1hcCIsInNwYWNlcGljcyIsInNwYWNlIiwicG93ZXJ1cFR5cGVzIiwibmFtZSIsImFubm91bmNlbWVudCIsImN5Y2xlIiwicm93cyIsImNvbHVtbnMiLCJzaXplIiwiaW1nIiwiSW1hZ2UiLCJhY3RpdmF0ZSIsInNwYWNlc2hpcCIsIm1heFNwZWVkIiwiY29vbGRvd24iLCJjb29sZG93blRpbWUiLCJyYW5nZSIsInNoaWVsZCIsImV4cGxvZGUiLCJzcGF3bkFzdGVyb2lkcyIsInBvd2VydXAiLCJhcnJheSIsInNyYyIsImV4cGxvc2lvbkltYWdlIiwiZXZhbHVhdGVLZXlzIiwicGxheWluZyIsInNob290Iiwicm90YXRpb24iLCJzcGVlZCIsInNjb3JlIiwiJGFwcGx5IiwiU3BhY2VzaGlwIiwiYXV0b1NwYXduIiwid2lkdGgiLCJoZWlnaHQiLCJjYW5ub24iLCJ4IiwieSIsInBvc2l0aW9uIiwiYW5nbGUiLCJpZCIsInJvdW5kIiwiU2hvdCIsIm1vdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZmlsbCIsImFzdGVyb2lkIiwiaGl0IiwiZ2FtZU92ZXIiLCJjb3MiLCJzaW4iLCJsaWZlc3BhbiIsIkFzdGVyb2lkIiwiZ2V0RW50cnlQb3NpdGlvbiIsInJvdGF0aW9uU3BlZWQiLCJFeHBsb3Npb24iLCJzaG90IiwicG9pbnRzIiwic3Bhd25Qb3dlcnVwIiwib2JqZWN0IiwiUG93ZXJ1cCIsImRlbGF5Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImNvbHVtbiIsInJvdyIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJncmlkWCIsImdyaWRZIiwib2JqZWN0MSIsIm9iamVjdDIiLCJrZXlzIiwiYW1vdW50IiwiaGlnaHNjb3JlIiwic2V0SGlnaHNjb3JlIiwicmVzaXplQ2FudmFzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleUNvZGUiLCJ3aGljaCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXciLCJjbGVhclJlY3QiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwidGFsbHkiLCJmaWxsVGV4dCIsIm1lYXN1cmVUZXh0IiwiYmFja2dyb3VuZEltYWdlIiwiYnViYmxlcyIsImNvbG9ycyIsIkJ1YmJsZSIsInJhZGl1cyIsImV4cGFuZGluZyIsImNpcmN1bWZlcmVuY2UiLCJtYXhSYWRpdXMiLCJ2eCIsInZ5IiwiZmlsdGVyQnViYmxlcyIsImJ1YmJsZSIsInNlbGVjdFdvcmQiLCJjYXRlZ29yeSIsIndvcmQiLCJFbWFpbFN2YyIsIm9wdGlvbnMiLCJ0ZXh0IiwiY29udGFjdCIsImVtYWlsIiwicGhvbmUiLCJhYm91dCIsIm1lc3NhZ2UiLCJzZW5kaW5nIiwic2VudCIsInN0YXR1cyIsImVyciIsImdldFNraWxsIiwic2tpbGxDb2RlIiwiY29kZSIsIiR3aW5kb3ciLCJob2JieVNlbGVjdG9yVmlzaWJsZSIsInNlbGVjdGVkSG9iYnkiLCJzZWxlY3RIb2JieSIsImhvYmJ5Iiwic2hvd0hvYmJ5IiwiaW5kZXgiLCJpbWFnZXMiLCJMRUZUIiwiUklHSFQiLCJsZW1taW5nc0ltYWdlIiwiZGVjb3JJbWFnZSIsImxlbW1pbmdzIiwic3RhcnRlZCIsImFjdGlvbnMiLCJ3YWxrIiwic3RhcnQiLCJlbmQiLCJyZXZlcnNlIiwiaHVoIiwiZmFsbCIsImZseSIsInN0b3AiLCJjbGltYiIsImJ1aWxkIiwicHVuY2giLCJkaWciLCJMZW1taW5nIiwiaW5pdCIsImFjdCIsImFjdGlvbiIsImFuaW1hdGlvbiIsInNjYWxlIiwiaGF0Y2giLCJvcGVuIiwicmVjdCIsIkNhdGVnb3JpZXNTdmMiLCJzaG93Q2F0ZWdvcnkiLCJnZXRDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsInRhc2tzIiwiaiIsInRhc2siLCJzZWxlY3RDYXRlZ29yeSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWxlY3RlZFRhc2tzIiwic2VsZWN0YWJsZVRhc2tzIiwiZW50ZXJlZENhdGVnb3J5IiwibmV3Q2F0ZWdvcnkiLCJmb3VuZCIsImFkZENhdGVnb3J5IiwibmV3VGFzayIsInNlbGVjdFRhc2siLCJhZGRUYXNrIiwiZW50ZXJlZFRhc2siLCJyZW1vdmVUYXNrIiwidW5zZWxlY3RUYXNrIiwidGFza0xpc3QiLCJzcGxpY2UiLCJpbmRleE9mIiwic3RhcnRQcmlvcml0aXppbmciLCJzZXRQcmlvcml0eUxpc3QiLCJnZXRRdWVzdGlvbnMiLCJjb3VudGVyIiwidWkiLCJmaXJlYmFzZXVpIiwiQXV0aFVJIiwic3RhcnRVSSIsImNhbGxiYWNrcyIsInNpZ25JblN1Y2Nlc3MiLCJjcmVkZW50aWFsIiwicmVkaXJlY3RVcmwiLCJnZXRJZFRva2VuIiwiaWRUb2tlbiIsImF1dGhlbnRpY2F0ZSIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJlbWFpbFZlcmlmaWVkIiwiJGVtaXQiLCJtb2RhbCIsInR5cGUiLCJzaWduSW5GYWlsdXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjcmVkIiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJ1aVNob3duIiwic3R5bGUiLCJkaXNwbGF5Iiwic2lnbkluU3VjY2Vzc1VybCIsInNpZ25Jbk9wdGlvbnMiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJQUk9WSURFUl9JRCIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwic2lnbkluRmxvdyIsImV2ZW50IiwicmVzZXQiLCIkZmlsdGVyIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJjcmVhdGUiLCJib2R5IiwicG9zdCIsImZldGNoIiwicG9zdHMiLCJnZXRQb3N0IiwidW5zaGlmdCIsImNvdW50cmllcyIsImZsYWciLCJ0aWRiaXQiLCJkYXRlT3B0aW9ucyIsIm1heERhdGUiLCJtaW5EYXRlIiwiaW5pdERhdGUiLCJkYXRlcGlja2VyTW9kZSIsInVzZXJuYW1lVG9nZ2xlIiwicGFzc3dvcmRUb2dnbGUiLCJ0b2dnbGVVc2VybmFtZSIsIm5ld1VzZXJuYW1lIiwidXNlcm5hbWUiLCJ0b2dnbGVQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwib3JpZ2luYWxCZyIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiY2hhbmdlVXNlcm5hbWUiLCJ1cGRhdGVVc2VyIiwiZmxhZ3MiLCJ1c2VyRmxhZ3MiLCJsb2FkQ291bnRyaWVzIiwiJHF1ZXJ5IiwiY291bnRyeSIsIiR3YXRjaCIsImluY2x1ZGVzIiwic2VsZWN0ZWRTa2lsbCIsInNraWxsc1Zpc2libGUiLCJwcm9qZWN0cyIsImxhYmVscyIsImVtcGxveWVyIiwiY29uY2F0IiwiZmlsdGVyZWRQcm9qZWN0cyIsInByb2plY3QiLCJzZXRTZWxlY3RlZFNraWxsIiwiY2hhcnRPcHRpb25zIiwiY3V0b3V0UGVyY2VudGFnZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJ0b29sdGlwcyIsImNoYXJ0U3R5bGUiLCJpbWFnZSIsIiRzY2UiLCIkbWRUb2FzdCIsIlRlblRoaW5nc1N2YyIsInBhZ2UiLCJsaXN0cyIsInNlYXJjaCIsIm5ld0l0ZW0iLCJsYW5ndWFnZUZpbHRlciIsImNhdGVnb3J5RmlsdGVyIiwic2VsZWN0ZWRMaXN0IiwiaGlnaGxpZ2h0ZWRMaXN0cyIsImhpZ2hsaWdodGVkTGlzdElkcyIsImxpc3RJZHNUb0RlbGV0ZSIsImNvbmZpcm1lZCIsImV4aGF1c3RlZCIsInRvYXN0Iiwic2ltcGxlIiwidGV4dENvbnRlbnQiLCJoaWRlRGVsYXkiLCJvYmplY3RDYXRlZ29yaWVzIiwiYmx1cmJUeXBlcyIsImFwaSIsImFkbWluT25seSIsImhhdmVDb21tb25JdGVtcyIsImFycjEiLCJhcnIyIiwic29tZSIsImtleURvd24iLCJpcyIsImNyZWF0ZVZhbHVlIiwidHJpZ2dlciIsImFkZExpc3QiLCJjcmVhdG9yIiwidmFsdWVzIiwiYW5zd2VycyIsImlzRHluYW1pYyIsInNldFNlbGVjdGVkSXRlbSIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkTGlzdCIsImxpc3QiLCJnZXRMaXN0IiwicmVhZE9ubHkiLCJhZG1pbiIsInNlYXJjaExpc3RzIiwiYXN5bmMiLCJ2aWV3VmFsdWUiLCJoaWdobGlnaHRlZFNlYXJjaFRleHQiLCJyZWdleCIsInZhbHVlT3JkZXIiLCJmaWVsZCIsIm9yZGVyIiwib3JkZXJCeSIsImdldExpc3RzIiwiZ2V0TW9yZUxpc3RzIiwic2V0TGFuZ3VhZ2VGaWx0ZXIiLCJzZXRDYXRlZ29yeUZpbHRlciIsInRvZ2dsZUNhdGVnb3J5RmlsdGVyIiwiYWxsQ2F0ZWdvcmllcyIsImdldENhdGVnb3J5TGFiZWwiLCJzdWJjYXRlZ29yaWVzIiwic3ViY2F0ZWdvcnkiLCJzdGFydHNXaXRoIiwibGFiZWwiLCJqb2luIiwic29ydEJ5IiwibGltaXQiLCJjb3VudCIsIm5leHRQYWdlIiwiZ2V0TGlzdE5hbWUiLCJsaXN0SWQiLCJ1cGRhdGVWYWx1ZSIsInVwZGF0ZWRJdGVtUmVzcG9uc2UiLCJ1cGRhdGVMaXN0VmFsdWUiLCJibHVyYlR5cGUiLCJkZWxldGVWYWx1ZSIsImhhc0R1cGxpY2F0ZSIsImNyZWF0ZWRJdGVtUmVzcG9uc2UiLCJjcmVhdGVMaXN0VmFsdWUiLCJ1cHNlcnRMaXN0IiwiYmx1cmIiLCJkZWxldGVMaXN0VmFsdWUiLCJ1cGRhdGVMaXN0IiwidXBkYXRlcyIsInNhdmluZyIsImxpc3RJbmRleCIsImZpbmRJbmRleCIsImNoYW5nZXMiLCJjcmVhdGVMaXN0IiwiYXNzaWduIiwiZGVsZXRlTGlzdCIsImRlbGV0ZUxpc3RzIiwiY29uZmlybU1lcmdlTGlzdHMiLCJtZXJnZUxpc3RzIiwiY29uZmlybURlbGV0ZUxpc3RzIiwidG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0IiwiaGlnaGxpZ2h0ZWRMaXN0SWQiLCJzZXREaWZmaWN1bHR5IiwiZGlmZmljdWx0eSIsInNldEZyZXF1ZW5jeSIsImZyZXF1ZW5jeSIsImdldFVwZGF0ZWRDYXRlZ29yaWVzIiwibGlzdENhdGVnb3J5Iiwic3BsaXQiLCJzZXRDYXRlZ29yeSIsInVwZGF0ZWRDYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImxpc3RzVG9VcGRhdGUiLCJldmVyeSIsImxpc3RUb1VwZGF0ZSIsImNhdGVnb3J5U3RhdHVzIiwiYW5zd2VyIiwicmVtb3ZlQWxsQnV0TGV0dGVycyIsImdldFNlbGVjdGVkTGlzdHNUaXRsZSIsImdldEJsdXJicyIsImdldHRpbmdCbHVyYnMiLCJnZXRFbWJlZFVybCIsInZpZGVvSWQiLCJtYXRjaCIsInRyaW0iLCJ0cnVzdEFzUmVzb3VyY2VVcmwiLCJnZXRMYW5ndWFnZXMiLCJsYW5ndWFnZVN0YXRzIiwiZ2V0TGlzdExhbmd1YWdlU3RhdHMiLCJjYXRlZ29yeVN0YXRzIiwiZ2V0TGlzdENhdGVnb3J5U3RhdHMiLCJnZXRVc2VycyIsImdldFF1ZXVlIiwicXVldWUiLCJnZXRQYXVzZSIsInBhdXNlZCIsInVzZXJzIiwidG9nZ2xlQmFuIiwidG9nZ2xlUGF1c2UiLCIkc3RhdGVQYXJhbXMiLCJnYW1lIiwiZ2V0R2FtZSIsImRhdGFzZXRzIiwibGluZUNoYXJ0T3B0aW9ucyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwidGl0bGUiLCJnZXRQbGF5U3RhdHMiLCJ5ZWFycyIsInVuaXEiLCJtb250aHMiLCJ0aW1lcyIsInBsYXlTdGF0cyIsInNlcmllcyIsIm1vbnRoIiwidW5pcXVlUGxheWVycyIsImdldEdhbWVTdGF0cyIsImdhbWVTdGF0cyIsInNvcnRlZERhdGEiLCJ0aW1lUmVtYWluaW5nIiwidGltZUV4ZXJjaXNpbmciLCJ0aW1lUmVzdGluZyIsInJlc3QiLCJleGVyY2lzaW5nIiwic291bmRzIiwiQXVkaW8iLCJvZmYiLCJzd2l0Y2giLCJleGVyY2lzZXMiLCJwcm9ncmVzcyIsIndvcmtvdXQiLCJleGNlcmNpc2VUaW1lIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVyIiwiZXhlcmNpc2UiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRFeGVyY2lzZSIsInBsYXkiLCJkaXJlY3RpdmUiLCIkZG9jdW1lbnQiLCJyZXN0cmljdCIsInNjb3BlIiwiY2xpY2tPdXRzaWRlIiwibGluayIsImVsIiwiYXR0ciIsInRhcmdldCIsImNvbnRhaW5zIiwiJGV2YWwiLCIkc3RhdGUiLCIkY29tcGlsZSIsIiRpbnRlcnBvbGF0ZSIsImdldFN0eWxlIiwidGVtcGxhdGVTdHlsZVVybCIsImhyZWYiLCJyZWwiLCJlbGVtIiwidGVtcGxhdGVTdHlsZXMiLCJodG1sIiwic3RhcnRTeW1ib2wiLCJlbmRTeW1ib2wiLCJhcHBlbmQiLCJ0b1N0YXRlIiwidG9QYXJhbXMiLCJmcm9tU3RhdGUiLCJmcm9tUGFyYW1zIiwic3RhdGVzIiwicGFyZW50IiwiZ2V0Iiwidmlld3MiLCJ2aWV3IiwiZmxhdCIsImdldFN0eWxlcyIsIiRodHRwIiwic3ZjIiwiZ2V0VGFza3MiLCJjaG9pY2VzIiwicHJpb3JpdHlMaXN0IiwiZmlyc3RDaG9pY2UiLCJzZWNvbmRDaG9pY2UiLCJjaG9pY2UiLCJ0IiwibSIsInNodWZmbGUiLCJnZXRQcmlvcml0eUxpc3QiLCJnZXRJbWFnZXMiLCJmb2xkZXIiLCJnZXRTb3VuZHMiLCJnZXRIaWdoc2NvcmUiLCJwdXQiLCJkZWxldGUiLCJyZXBvcnRMaXN0IiwiZ2V0VXNlciIsInNldFRva2VuIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJjcmVhdGVVc2VyIiwiRmlsZVN2YyIsImFuaW1hbHMiLCJhbmltYWwiLCJzb3VuZCIsInN1YnN0cmluZyIsImNhcGl0YWxpemUiLCJnZXRSYW5kb21BbmltYWxzIiwiZ3Vlc3MiLCJnZXRTY29yZSIsImlzU2NvcmVWaXNpYmxlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFBQSwyQkFBQUEsR0FBQSxDQUNBO0lBQ0FDLElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBO0VBR0FDLE9BQUFBLEdBQUEsQ0FDQSxNQUFBLEVBQ0EsTUFBQSxFQUNBLE1BQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLENBQUE7QUFHQUMsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxrQkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQVIsMkJBQUFBLENBQUFTLE1BQUFBLENBQUEsQ0FBQUMsTUFBQUEsRUFBQUMsTUFBQUEsS0FDQUQsTUFBQUEsQ0FBQUUsT0FBQUEsQ0FBQUQsTUFBQUEsQ0FBQVQsT0FBQUEsRUFBQVMsTUFBQUEsQ0FBQVYsSUFBQUEsQ0FBQUEsRUFDQVksSUFBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBO0FBR0EsTUFBQUMsa0JBQUFBLEdBQUEscUNBQUE7QUFFQVYsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSx5QkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxJQUFBRyxNQUFBQSxDQUFBLElBQUFELGtCQUFBQSxHQUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FWLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEscUJBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFHLFdBQUFBLEVBQUFBLENBQUFDLGdCQUFBQSxFQUFBQSxDQUFBQyx1QkFBQUEsRUFDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FkLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsU0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQVcsS0FBQUEsRUFBQUE7SUFDQSxPQUFBTixJQUFBQSxDQUFBRCxPQUFBQSxDQUFBLElBQUFHLE1BQUFBLENBQUEsS0FBQUQsa0JBQUFBLEdBQUFLLEtBQUFBLEdBQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsR0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWYsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxZQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBTyxNQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBQyxXQUFBQSxFQUFBQSxHQUFBUixJQUFBQSxDQUFBUyxLQUFBQSxDQUFBLENBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FsQixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFlBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFELE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQSxDQUFBQSxPQUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBUixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGNBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFVLFVBQUFBLENBQUEsR0FBQSxFQUFBLE9BQUEsQ0FBQSxDQUFBWCxPQUFBQSxDQUFBLEdBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQUEsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLENBQUFXLFVBQUFBLENBQUEsR0FBQSxFQUFBLE9BQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FuQixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGNBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUFnQixJQUFBQSxFQUFBWixPQUFBQSxFQUFBQTtJQUVBLEtBREEsSUFBQWEsYUFB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LE1BQUFBLENBQUFNLFVBQUFBLENBQUFBLENBQUEsQ0FBQSxDQUFBLEVBRUFMLGNBQUFBLENBQ0FNLEtBQUFBLENBQUEsTUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsT0FBQTtJQUNBQyxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsUUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBQyxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBQyxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsWUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsYUFBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxRQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsWUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFdBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxVQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxXQUFBO0lBQ0FFLFVBQUFBLEVBQUEsY0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsTUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsT0FBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFdBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxpQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxvQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsZ0JBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVB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QUFBLEVBQUEsS0FBQSxDQUFBLENBRUFELElBQUFBLENBQUFFLFFBQUFBLEVBQUFBLENBQUFBLEdBQUEsR0FBQSxHQUFBRixJQUFBQSxDQUFBdEQsV0FBQUEsRUFFQTtBQUFBLENBQUEsQ0FBQSxFQzdKQTlELE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQUFXLFVBQUFBLENBQUEsZUFBQSxFQUFBLFVBQUEyRyxTQUFBQSxFQUFBMUUsTUFBQUEsRUFBQTJFLE9BQUFBLEVBQUFBO0VBQ0EzRSxNQUFBQSxDQUFBNEUsUUFBQUEsR0FBQUEsQ0FBQSxDQUFBO0VBQ0EsTUFBQUMsTUFBQUEsR0FBQWxFLFFBQUFBLENBQUFtRSxvQkFBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7RUFDQSxJQUFBLENBQUFELE1BQUFBLEVBRUEsT0FEQUgsU0FBQUEsQ0FBQUssSUFBQUEsQ0FBQSxPQUFBLENBQUEsRUFDQUMsS0FBQUEsQ0FBQSxFQUFBLENBQUE7RUFFQSxNQUFBQyxHQUFBQSxHQUFBSixNQUFBQSxDQUFBSyxVQUFBQSxDQUFBLElBQUEsQ0FBQTtFQUNBLElBQUEsQ0FBQUQsR0FBQUEsRUFDQSxPQUFBUCxTQUFBQSxDQUFBSyxJQUFBQSxDQUFBLE9BQUEsQ0FBQTtFQUVBRSxHQUFBQSxDQUFBRSxJQUFBQSxHQUFBLG9CQUFBLEVBQ0FGLEdBQUFBLENBQUFHLFNBQUFBLEdBQUEsS0FBQSxFQUNBSCxHQUFBQSxDQUFBSSxTQUFBQSxHQUFBLFFBQUE7RUFDQSxJQUFBQyxLQUFBQSxHQUFBLENBQUEsQ0FBQTtFQUNBLE1BQUFDLFNBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFFBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFVBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLEdBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFNBQUFBLEdBQUEsRUFBQTtFQUNBLElBQUFDLEtBQUFBLEdBQUF6RSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBeUUsU0FBQUEsQ0FBQUE7RUFDQSxNQUFBRSxZQUFBQSxHQUFBLENBQ0E7SUFDQUMsSUFBQUEsRUFBQSxPQUFBO0lBQ0FDLFlBQUFBLEVBQUEsYUFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7TUFDQXBLLENBQUFBLEVBQUEsQ0FBQTtNQUNBVSxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBMkosR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO01BQ0FBLFNBQUFBLENBQUFDLFFBQUFBLElBQUEsR0FDQTtJQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FWLElBQUFBLEVBQUEsVUFBQTtJQUNBQyxZQUFBQSxFQUFBLFlBQUE7SUFDQUMsS0FBQUEsRUFBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUE7TUFDQUMsT0FBQUEsRUFBQSxDQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO01BQ0FwSyxDQUFBQSxFQUFBLENBQUE7TUFDQVUsU0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUE7SUFFQTJKLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7SUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtNQUNBQSxTQUFBQSxDQUFBRSxRQUFBQSxHQUFBLENBQUEsS0FDQUYsU0FBQUEsQ0FBQUcsWUFBQUEsSUFBQSxDQUFBLENBRUE7SUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBWixJQUFBQSxFQUFBLE9BQUE7SUFDQUMsWUFBQUEsRUFBQSxnQkFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7TUFDQXBLLENBQUFBLEVBQUEsQ0FBQTtNQUNBVSxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBMkosR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO01BQ0FBLFNBQUFBLENBQUFJLEtBQUFBLElBQUEsQ0FDQTtJQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FiLElBQUFBLEVBQUEsUUFBQTtJQUNBQyxZQUFBQSxFQUFBLFFBQUE7SUFDQUMsS0FBQUEsRUFBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUE7TUFDQUMsT0FBQUEsRUFBQSxDQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO01BQ0FwSyxDQUFBQSxFQUFBLENBQUE7TUFDQVUsU0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUE7SUFFQTJKLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7SUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtNQUNBQSxTQUFBQSxDQUFBSyxNQUFBQSxHQUFBQSxDQUFBLENBQ0E7SUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBZCxJQUFBQSxFQUFBLE1BQUE7SUFDQUMsWUFBQUEsRUFBQSxNQUFBO0lBQ0FDLEtBQUFBLEVBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBO01BQ0FDLE9BQUFBLEVBQUEsQ0FBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtNQUNBcEssQ0FBQUEsRUFBQSxDQUFBO01BQ0FVLFNBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBO0lBRUEySixHQUFBQSxFQUFBLElBQUFDLEtBQUFBO0lBQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7TUFDQSxLQUFBLElBQUF4SyxDQUFBQSxJQUFBd0osU0FBQUEsRUFDQUEsU0FBQUEsQ0FBQXhKLENBQUFBLENBQUFBLENBQUE4SyxPQUFBQSxFQUFBQTtNQUVBQyxjQUFBQSxDQUFBLENBQUEsQ0FDQTtJQUFBO0VBQUEsQ0FBQSxDQUFBO0VBVUFqQixZQUFBQSxDQUFBNUksT0FBQUEsQ0FBQSxVQUFBOEosT0FBQUEsRUFBQWhMLENBQUFBLEVBQUFpTCxLQUFBQSxFQUFBQTtJQUNBQSxLQUFBQSxDQUFBakwsQ0FBQUEsQ0FBQUEsQ0FBQXFLLEdBQUFBLENBQUFhLEdBQUFBLEdBQUEsWUFBQSxHQUFBRixPQUFBQSxDQUFBakIsSUFBQUEsR0FBQSxNQUNBO0VBQUEsQ0FBQSxDQUFBO0VBRUEsSUFrVEFTLFNBQUFBO0lBbFRBVyxjQUFBQSxHQUFBLElBQUFiLEtBQUFBO0VBb0JBLFNBQUFjLFlBQUFBLENBQUFBLEVBQUFBO0lBQ0FuSCxNQUFBQSxDQUFBb0gsT0FBQUEsSUFDQTFCLEdBQUFBLENBQUEsRUFBQSxDQUFBLElBRUEsQ0FBQSxLQUFBYSxTQUFBQSxDQUFBRSxRQUFBQSxJQUNBRixTQUFBQSxDQUFBYyxLQUFBQSxFQUFBQSxFQUdBM0IsR0FBQUEsQ0FBQSxFQUFBLENBQUEsS0FFQSxDQUFBLEtBQUFhLFNBQUFBLENBQUFlLFFBQUFBLEdBQ0FmLFNBQUFBLENBQUFlLFFBQUFBLEdBQUEsR0FBQSxHQUVBZixTQUFBQSxDQUFBZSxRQUFBQSxJQUFBLENBQUEsQ0FBQSxFQUdBNUIsR0FBQUEsQ0FBQSxFQUFBLENBQUEsS0FFQSxHQUFBLEtBQUFhLFNBQUFBLENBQUFlLFFBQUFBLEdBQ0FmLFNBQUFBLENBQUFlLFFBQUFBLEdBQUEsQ0FBQSxHQUVBZixTQUFBQSxDQUFBZSxRQUFBQSxJQUFBLENBQUEsQ0FBQSxFQUdBNUIsR0FBQUEsQ0FBQSxFQUFBLENBQUEsR0FFQWEsU0FBQUEsQ0FBQWdCLEtBQUFBLElBQUFoQixTQUFBQSxDQUFBQyxRQUFBQSxLQUNBRCxTQUFBQSxDQUFBZ0IsS0FBQUEsSUFBQSxDQUFBLENBQUEsR0FHQWhCLFNBQUFBLENBQUFnQixLQUFBQSxHQUFBLENBQUEsSUFDQWhCLFNBQUFBLENBQUFnQixLQUFBQSxFQUFBQSxFQUdBN0IsR0FBQUEsQ0FBQSxFQUFBLENBQUEsSUFFQWEsU0FBQUEsQ0FBQWdCLEtBQUFBLEdBQUEsQ0FBQSxLQUNBaEIsU0FBQUEsQ0FBQWdCLEtBQUFBLElBQUEsQ0FBQSxDQUFBLElBSUE3QixHQUFBQSxDQUFBLEVBQUEsQ0FBQSxLQXdQQTFGLE1BQUFBLENBQUFvSCxPQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQXBILE1BQUFBLENBQUF3SCxLQUFBQSxHQUFBLENBQUEsRUFDQTVCLEtBQUFBLEdBQUF6RSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBeUUsU0FBQUEsQ0FBQUEsRUFDQTNGLE1BQUFBLENBQUF5SCxNQUFBQSxFQUFBQSxFQUNBbEIsU0FBQUEsR0FBQSxJQUFBbUIsU0FBQUEsSUFDQTFILE1BQUFBLENBQUF3SCxLQUFBQSxHQUFBLENBQUEsRUFDQVYsY0FBQUEsQ0FBQSxDQUFBLENBQUEsRUFDQWEsU0FBQUEsRUFBQUEsQ0EzUEE7RUFBQTtFQUVBLFNBQUFELFNBQUFBLENBQUFBLEVBQUFBO0lBQ0F4TSxJQUFBQSxDQUFBME0sS0FBQUEsR0FBQSxFQUFBLEVBQ0ExTSxJQUFBQSxDQUFBMk0sTUFBQUEsR0FBQSxFQUFBLEVBQ0EzTSxJQUFBQSxDQUFBMEwsTUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0ExTCxJQUFBQSxDQUFBeUwsS0FBQUEsR0FBQSxFQUFBLEVBQ0F6TCxJQUFBQSxDQUFBNE0sTUFBQUEsR0FBQTtNQUNBQyxDQUFBQSxFQUFBN00sSUFBQUEsQ0FBQTBNLEtBQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUE7TUFDQUksQ0FBQUEsRUFBQTlNLElBQUFBLENBQUEyTSxNQUFBQSxHQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEzTSxJQUFBQSxDQUFBMk07SUFBQUEsQ0FBQUEsRUFFQTNNLElBQUFBLENBQUF1TCxRQUFBQSxHQUFBLENBQUEsRUFDQXZMLElBQUFBLENBQUF3TCxZQUFBQSxHQUFBLEVBQUEsRUFDQXhMLElBQUFBLENBQUErTSxRQUFBQSxHQUFBLENBQUFwRCxNQUFBQSxDQUFBK0MsS0FBQUEsR0FBQSxDQUFBLEdBQUExTSxJQUFBQSxDQUFBME0sS0FBQUEsR0FBQSxDQUFBLEVBQUEvQyxNQUFBQSxDQUFBZ0QsTUFBQUEsR0FBQSxDQUFBLEdBQUEzTSxJQUFBQSxDQUFBMk0sTUFBQUEsR0FBQSxDQUFBLENBQUEsRUFDQTNNLElBQUFBLENBQUFrTCxHQUFBQSxHQUFBLElBQUFDLEtBQUFBLElBQ0FuTCxJQUFBQSxDQUFBa0wsR0FBQUEsQ0FBQWEsR0FBQUEsR0FBQSx5QkFBQSxFQUNBL0wsSUFBQUEsQ0FBQXFNLEtBQUFBLEdBQUEsQ0FBQSxFQUNBck0sSUFBQUEsQ0FBQXNMLFFBQUFBLEdBQUEsR0FBQSxFQUNBdEwsSUFBQUEsQ0FBQWdOLEtBQUFBLEdBQUEsQ0FBQSxFQUNBaE4sSUFBQUEsQ0FBQW9NLFFBQUFBLEdBQUEsQ0FBQSxFQUVBcE0sSUFBQUEsQ0FBQW1NLEtBQUFBLEdBQUEsWUFBQTtNQUNBbk0sSUFBQUEsQ0FBQXVMLFFBQUFBLEdBQUF2TCxJQUFBQSxDQUFBd0wsWUFBQUE7TUFDQSxJQUFBeUIsRUFBQUEsR0FBQWhILElBQUFBLENBQUFpSCxLQUFBQSxDQUFBLEdBQUEsR0FBQWpILElBQUFBLENBQUFELE1BQUFBLEVBQUFBLENBQUFBO01BQ0FvRSxLQUFBQSxDQUFBNkMsRUFBQUEsQ0FBQUEsR0FBQSxJQUFBRSxJQUFBQSxDQUFBRixFQUFBQSxFQUFBak4sSUFBQUEsQ0FDQTtJQUFBLENBQUEsRUFFQUEsSUFBQUEsQ0FBQW9OLElBQUFBLEdBQUEsWUFBQTtNQVVBLEtBQUEsSUFBQXZNLENBQUFBLElBVEFiLElBQUFBLENBQUEwTCxNQUFBQSxLQUNBM0IsR0FBQUEsQ0FBQXNELFNBQUFBLEVBQUFBLEVBQ0F0RCxHQUFBQSxDQUFBdUQsR0FBQUEsQ0FBQXROLElBQUFBLENBQUErTSxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBL00sSUFBQUEsQ0FBQTBNLEtBQUFBLEdBQUEsQ0FBQSxFQUFBMU0sSUFBQUEsQ0FBQStNLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEvTSxJQUFBQSxDQUFBMk0sTUFBQUEsR0FBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEdBQUExRyxJQUFBQSxDQUFBc0gsRUFBQUEsQ0FBQUEsRUFDQXhELEdBQUFBLENBQUFHLFNBQUFBLEdBQUEsdUJBQUEsRUFDQUgsR0FBQUEsQ0FBQXlELFdBQUFBLEdBQUEsdUJBQUEsRUFDQXpELEdBQUFBLENBQUEwRCxTQUFBQSxHQUFBLENBQUEsRUFDQTFELEdBQUFBLENBQUEyRCxNQUFBQSxFQUFBQSxFQUNBM0QsR0FBQUEsQ0FBQTRELElBQUFBLEVBQUFBLENBQUFBLEVBRUF0RCxTQUFBQSxFQUFBO1FBQ0EsSUFBQXVELFFBQUFBLEdBQUF2RCxTQUFBQSxDQUFBeEosQ0FBQUEsQ0FBQUE7UUFDQSxJQUFBZ04sR0FBQUEsQ0FBQUQsUUFBQUEsRUFBQTVOLElBQUFBLENBQUFBLEVBQUE7VUFDQSxJQUFBLENBQUFBLElBQUFBLENBQUEwTCxNQUFBQSxFQUlBLE9BQUFvQyxRQUFBQSxFQUFBQTtVQUhBOU4sSUFBQUEsQ0FBQTBMLE1BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBa0MsUUFBQUEsQ0FBQWpDLE9BQUFBLEVBSUE7UUFBQTtNQUNBO01BQ0EzTCxJQUFBQSxDQUFBZ04sS0FBQUEsR0FBQWhOLElBQUFBLENBQUFvTSxRQUFBQSxFQUNBcE0sSUFBQUEsQ0FBQXVMLFFBQUFBLEdBQUEsQ0FBQSxJQUNBdkwsSUFBQUEsQ0FBQXVMLFFBQUFBLEVBQUFBLEVBRUE2QixJQUFBQSxDQUFBcE4sSUFBQUEsQ0FDQTtJQUFBLENBQ0E7RUFBQTtFQUVBLFNBQUFtTixJQUFBQSxDQUFBRixFQUFBQSxFQUFBNUIsU0FBQUEsRUFBQUE7SUFDQXJMLElBQUFBLENBQUFpTixFQUFBQSxHQUFBQSxFQUFBQSxFQUNBak4sSUFBQUEsQ0FBQStNLFFBQUFBLEdBQUEsQ0FDQTFCLFNBQUFBLENBQUEwQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUNBMUIsU0FBQUEsQ0FBQXVCLE1BQUFBLENBQUFDLENBQUFBLEdBQ0F4QixTQUFBQSxDQUFBdUIsTUFBQUEsQ0FBQUMsQ0FBQUEsR0FBQTVHLElBQUFBLENBQUE4SCxHQUFBQSxDQUFBQSxDQUFBMUMsU0FBQUEsQ0FBQWUsUUFBQUEsR0FBQSxFQUFBLElBQUFuRyxJQUFBQSxDQUFBc0gsRUFBQUEsR0FBQSxHQUFBLENBQUEsRUFDQWxDLFNBQUFBLENBQUEwQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUNBMUIsU0FBQUEsQ0FBQXVCLE1BQUFBLENBQUFFLENBQUFBLEdBQ0F6QixTQUFBQSxDQUFBdUIsTUFBQUEsQ0FBQUUsQ0FBQUEsR0FBQTdHLElBQUFBLENBQUErSCxHQUFBQSxDQUFBQSxDQUFBM0MsU0FBQUEsQ0FBQWUsUUFBQUEsR0FBQSxFQUFBLElBQUFuRyxJQUFBQSxDQUFBc0gsRUFBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxFQUVBdk4sSUFBQUEsQ0FBQTBNLEtBQUFBLEdBQUEsQ0FBQSxFQUNBMU0sSUFBQUEsQ0FBQTJNLE1BQUFBLEdBQUEsRUFBQSxFQUNBM00sSUFBQUEsQ0FBQWdOLEtBQUFBLEdBQUEzQixTQUFBQSxDQUFBMkIsS0FBQUEsRUFDQWhOLElBQUFBLENBQUFvTSxRQUFBQSxHQUFBZixTQUFBQSxDQUFBZSxRQUFBQSxFQUNBcE0sSUFBQUEsQ0FBQXFNLEtBQUFBLEdBQUFoQixTQUFBQSxDQUFBZ0IsS0FBQUEsR0FBQSxHQUFBLEVBQ0FyTSxJQUFBQSxDQUFBaU8sUUFBQUEsR0FBQTVDLFNBQUFBLENBQUFJLEtBQUFBLEVBQ0F6TCxJQUFBQSxDQUFBa0wsR0FBQUEsR0FBQSxJQUFBQyxLQUFBQSxJQUNBbkwsSUFBQUEsQ0FBQWtMLEdBQUFBLENBQUFhLEdBQUFBLEdBQUEsb0JBQUEsRUFFQS9MLElBQUFBLENBQUFvTixJQUFBQSxHQUFBLFlBQUE7TUFDQXBOLElBQUFBLENBQUFpTyxRQUFBQSxFQUFBQSxFQUNBYixJQUFBQSxDQUFBcE4sSUFBQUEsQ0FDQTtJQUFBLENBQ0E7RUFBQTtFQUVBLFNBQUFrTyxRQUFBQSxDQUFBakIsRUFBQUEsRUFBQUE7SUFDQWpOLElBQUFBLENBQUFpTixFQUFBQSxHQUFBQSxFQUFBQSxFQUNBak4sSUFBQUEsQ0FBQTBNLEtBQUFBLEdBQUEsRUFBQSxHQUFBekcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQSxFQUFBLEVBQ0FoRyxJQUFBQSxDQUFBMk0sTUFBQUEsR0FBQTNNLElBQUFBLENBQUEwTSxLQUFBQSxFQUNBMU0sSUFBQUEsQ0FBQStNLFFBQUFBLEdBQUFvQixnQkFBQUEsQ0FBQW5PLElBQUFBLENBQUEwTSxLQUFBQSxFQUFBMU0sSUFBQUEsQ0FBQTJNLE1BQUFBLENBQUFBLEVBQ0EzTSxJQUFBQSxDQUFBZ04sS0FBQUEsR0FBQSxHQUFBLEdBQUEvRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxFQUNBaEcsSUFBQUEsQ0FBQW9NLFFBQUFBLEdBQUEsR0FBQSxHQUFBbkcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsRUFDQWhHLElBQUFBLENBQUFvTyxhQUFBQSxHQUFBLENBQUEsR0FBQW5JLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUEsQ0FBQSxFQUNBaEcsSUFBQUEsQ0FBQXFNLEtBQUFBLEdBQUEsR0FBQSxHQUFBcEcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQSxDQUFBLEVBQ0FoRyxJQUFBQSxDQUFBa0wsR0FBQUEsR0FBQSxJQUFBQyxLQUFBQSxJQUNBbkwsSUFBQUEsQ0FBQWtMLEdBQUFBLENBQUFhLEdBQUFBLEdBQUEsb0JBQUEsSUFBQTlGLElBQUFBLENBQUFpSCxLQUFBQSxDQUFBLENBQUEsR0FBQWpILElBQUFBLENBQUFELE1BQUFBLEVBQUFBLENBQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsTUFBQSxFQUVBaEcsSUFBQUEsQ0FBQTJMLE9BQUFBLEdBQUEsWUFBQTtNQUVBLE9BREFwQixVQUFBQSxDQUFBdkssSUFBQUEsQ0FBQWlOLEVBQUFBLENBQUFBLEdBQUEsSUFBQW9CLFNBQUFBLENBQUFyTyxJQUFBQSxDQUFBQSxFQUFBQSxPQUNBcUssU0FBQUEsQ0FBQXJLLElBQUFBLENBQUFpTixFQUFBQSxDQUNBO0lBQUEsQ0FBQSxFQUVBak4sSUFBQUEsQ0FBQW9OLElBQUFBLEdBQUEsWUFBQTtNQU9BLEtBQUEsSUFBQXZNLENBQUFBLElBTkFiLElBQUFBLENBQUFvTSxRQUFBQSxJQUFBcE0sSUFBQUEsQ0FBQW9PLGFBQUFBLEVBQ0FwTyxJQUFBQSxDQUFBb00sUUFBQUEsR0FBQSxHQUFBLEdBQ0FwTSxJQUFBQSxDQUFBb00sUUFBQUEsR0FBQXBNLElBQUFBLENBQUFvTSxRQUFBQSxHQUFBLEdBQUEsR0FDQXBNLElBQUFBLENBQUFvTSxRQUFBQSxHQUFBLENBQUEsS0FDQXBNLElBQUFBLENBQUFvTSxRQUFBQSxHQUFBLEdBQUEsR0FBQXBNLElBQUFBLENBQUFvTSxRQUFBQSxDQUFBQSxFQUVBaEMsS0FBQUEsRUFBQTtRQUNBLElBQUFrRSxJQUFBQSxHQUFBbEUsS0FBQUEsQ0FBQXZKLENBQUFBLENBQUFBO1FBQ0EsSUFBQWdOLEdBQUFBLENBQUFTLElBQUFBLEVBQUF0TyxJQUFBQSxDQUFBQSxFQUFBO1VBQ0FBLElBQUFBLENBQUEyTCxPQUFBQSxFQUFBQTtVQUNBLElBQUE0QyxNQUFBQSxHQUFBdEksSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQUEsQ0FBQW9JLElBQUFBLENBQUFqQyxLQUFBQSxHQUFBLEdBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQSxHQUFBck0sSUFBQUEsQ0FBQTBNLEtBQUFBLENBQUFBO1VBQ0F6RyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBQSxDQUFBcUksTUFBQUEsR0FBQXpKLE1BQUFBLENBQUF3SCxLQUFBQSxJQUFBLEdBQUEsQ0FBQSxHQUFBckcsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQXBCLE1BQUFBLENBQUF3SCxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxJQUNBa0MsWUFBQUEsRUFBQUEsRUFFQTFKLE1BQUFBLENBQUF3SCxLQUFBQSxJQUFBaUMsTUFBQUEsRUFDQXpKLE1BQUFBLENBQUF5SCxNQUFBQSxFQUFBQSxFQUFBQSxPQUNBbkMsS0FBQUEsQ0FBQXZKLENBQUFBLENBQ0E7UUFBQTtNQUNBO01BQ0F1TSxJQUFBQSxDQUFBcE4sSUFBQUEsQ0FDQTtJQUFBLENBQ0E7RUFBQTtFQUVBLFNBQUFxTyxTQUFBQSxDQUFBSSxNQUFBQSxFQUFBQTtJQUNBek8sSUFBQUEsQ0FBQStNLFFBQUFBLEdBQUEsQ0FBQTBCLE1BQUFBLENBQUExQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBMEIsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFDQS9NLElBQUFBLENBQUEwTSxLQUFBQSxHQUFBK0IsTUFBQUEsQ0FBQS9CLEtBQUFBLEVBQ0ExTSxJQUFBQSxDQUFBMk0sTUFBQUEsR0FBQThCLE1BQUFBLENBQUE5QixNQUFBQSxFQUNBM00sSUFBQUEsQ0FBQXFNLEtBQUFBLEdBQUEsQ0FBQSxFQUNBck0sSUFBQUEsQ0FBQWdOLEtBQUFBLEdBQUEsR0FBQSxHQUFBL0csSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsRUFDQWhHLElBQUFBLENBQUE4SyxLQUFBQSxHQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7TUFDQXBLLENBQUFBLEVBQUEsQ0FBQTtNQUNBVSxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUVBdkIsSUFBQUEsQ0FBQWlPLFFBQUFBLEdBQUEsRUFBQSxFQUNBak8sSUFBQUEsQ0FBQWtMLEdBQUFBLEdBQUFjLGNBQUFBLEVBRUFoTSxJQUFBQSxDQUFBb04sSUFBQUEsR0FBQSxZQUFBO01BQ0FwTixJQUFBQSxDQUFBaU8sUUFBQUEsRUFBQUEsRUFDQWIsSUFBQUEsQ0FBQXBOLElBQUFBLENBQUFBLEVBQ0FBLElBQUFBLENBQUE4SyxLQUFBQSxDQUFBdkosU0FBQUEsR0FDQXZCLElBQUFBLENBQUE4SyxLQUFBQSxDQUFBakssQ0FBQUEsRUFBQUEsR0FFQWIsSUFBQUEsQ0FBQThLLEtBQUFBLENBQUFqSyxDQUFBQSxFQUVBO0lBQUEsQ0FDQTtFQUFBO0VBRUEsU0FBQTZOLE9BQUFBLENBQUF6QixFQUFBQSxFQUFBQTtJQUNBak4sSUFBQUEsQ0FBQWlOLEVBQUFBLEdBQUFBLEVBQUFBLEVBQ0FqTixJQUFBQSxDQUFBNkwsT0FBQUEsR0FBQWxCLFlBQUFBLENBQUExRSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBMkUsWUFBQUEsQ0FBQTdKLE1BQUFBLENBQUFBLENBQUFBLEVBQ0FkLElBQUFBLENBQUE4SyxLQUFBQSxHQUFBOUssSUFBQUEsQ0FBQTZMLE9BQUFBLENBQUFmLEtBQUFBLEVBQ0E5SyxJQUFBQSxDQUFBaU8sUUFBQUEsR0FBQSxHQUFBLEVBQ0FqTyxJQUFBQSxDQUFBOEssS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQWpMLElBQUFBLENBQUE4SyxLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxJQUNBakwsSUFBQUEsQ0FBQTJNLE1BQUFBLEdBQUEsRUFBQSxFQUNBM00sSUFBQUEsQ0FBQTBNLEtBQUFBLEdBQUF6RyxJQUFBQSxDQUFBaUgsS0FBQUEsQ0FBQWxOLElBQUFBLENBQUEyTSxNQUFBQSxHQUFBM00sSUFBQUEsQ0FBQThLLEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUFqTCxJQUFBQSxDQUFBOEssS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUVBakwsSUFBQUEsQ0FBQTBNLEtBQUFBLEdBQUEsRUFBQSxFQUNBMU0sSUFBQUEsQ0FBQTJNLE1BQUFBLEdBQUExRyxJQUFBQSxDQUFBaUgsS0FBQUEsQ0FBQWxOLElBQUFBLENBQUEwTSxLQUFBQSxHQUFBMU0sSUFBQUEsQ0FBQThLLEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUFqTCxJQUFBQSxDQUFBOEssS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBRUFqTCxJQUFBQSxDQUFBK00sUUFBQUEsR0FBQW9CLGdCQUFBQSxDQUFBbk8sSUFBQUEsQ0FBQTBNLEtBQUFBLEVBQUExTSxJQUFBQSxDQUFBMk0sTUFBQUEsQ0FBQUEsRUFDQTNNLElBQUFBLENBQUFrTCxHQUFBQSxHQUFBbEwsSUFBQUEsQ0FBQTZMLE9BQUFBLENBQUFYLEdBQUFBLEVBQ0FsTCxJQUFBQSxDQUFBZ04sS0FBQUEsR0FBQSxHQUFBLEdBQUEvRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxFQUNBaEcsSUFBQUEsQ0FBQXFNLEtBQUFBLEdBQUEsR0FBQSxHQUFBcEcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQSxFQUFBO0lBQ0EsSUFBQTJJLEtBQUFBLEdBQUEsQ0FBQTtJQUNBM08sSUFBQUEsQ0FBQW9OLElBQUFBLEdBQUEsTUFDQXBOLElBQUFBLENBQUFpTyxRQUFBQSxJQUFBLENBQUEsR0FBQSxPQUNBM0QsUUFBQUEsQ0FBQXRLLElBQUFBLENBQUFpTixFQUFBQSxDQUFBQSxHQUVBWSxHQUFBQSxDQUFBeEMsU0FBQUEsRUFBQXJMLElBQUFBLENBQUFBLElBQ0E4RSxNQUFBQSxDQUFBNEUsUUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0E1RSxNQUFBQSxDQUFBK0YsWUFBQUEsR0FBQTdLLElBQUFBLENBQUE2TCxPQUFBQSxDQUFBaEIsWUFBQUEsRUFDQS9GLE1BQUFBLENBQUF5SCxNQUFBQSxFQUFBQSxFQUNBakcsVUFBQUEsQ0FBQSxNQUFBO01BQ0F4QixNQUFBQSxDQUFBNEUsUUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0E1RSxNQUFBQSxDQUFBeUgsTUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQSxHQUFBLENBQUEsRUFDQXZNLElBQUFBLENBQUE2TCxPQUFBQSxDQUFBVCxRQUFBQSxDQUFBQyxTQUFBQSxDQUFBQSxFQUFBQSxPQUNBZixRQUFBQSxDQUFBdEssSUFBQUEsQ0FBQWlOLEVBQUFBLENBQUFBLEtBRUFqTixJQUFBQSxDQUFBaU8sUUFBQUEsRUFBQUEsRUFDQWIsSUFBQUEsQ0FBQXBOLElBQUFBLENBQUFBLEVBQUFBLE1BQ0EyTyxLQUFBQSxJQUFBLENBQUEsSUFDQTNPLElBQUFBLENBQUE4SyxLQUFBQSxDQUFBdkosU0FBQUEsR0FDQXZCLElBQUFBLENBQUE4SyxLQUFBQSxDQUFBakssQ0FBQUEsRUFBQUEsR0FFQWIsSUFBQUEsQ0FBQThLLEtBQUFBLENBQUFqSyxDQUFBQSxFQUFBQSxFQUVBOE4sS0FBQUEsR0FBQSxDQUFBLElBRUFBLEtBQUFBLEVBQUFBLENBQUFBLENBR0E7RUFBQTtFQUVBLFNBQUF2QixJQUFBQSxDQUFBcUIsTUFBQUEsRUFBQUE7SUFpQkEsSUFoQkFBLE1BQUFBLENBQUExQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBMEIsTUFBQUEsQ0FBQXBDLEtBQUFBLEdBQUEsR0FBQSxHQUFBcEcsSUFBQUEsQ0FBQThILEdBQUFBLENBQUFBLENBQUFVLE1BQUFBLENBQUF6QixLQUFBQSxHQUFBLEVBQUEsSUFBQS9HLElBQUFBLENBQUFzSCxFQUFBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBa0IsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEwQixNQUFBQSxDQUFBcEMsS0FBQUEsR0FBQSxHQUFBLEdBQUFwRyxJQUFBQSxDQUFBK0gsR0FBQUEsQ0FBQUEsQ0FBQVMsTUFBQUEsQ0FBQXpCLEtBQUFBLEdBQUEsRUFBQSxJQUFBL0csSUFBQUEsQ0FBQXNILEVBQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FrQixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXBELE1BQUFBLENBQUErQyxLQUFBQSxHQUNBK0IsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQTBCLE1BQUFBLENBQUEvQixLQUFBQSxHQUNBK0IsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQTBCLE1BQUFBLENBQUEvQixLQUFBQSxLQUNBK0IsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUFwRCxNQUFBQSxDQUFBK0MsS0FBQUEsQ0FBQUEsRUFFQStCLE1BQUFBLENBQUExQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBcEQsTUFBQUEsQ0FBQWdELE1BQUFBLEdBQ0E4QixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBMEIsTUFBQUEsQ0FBQTlCLE1BQUFBLEdBQ0E4QixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBMEIsTUFBQUEsQ0FBQTlCLE1BQUFBLEtBQ0E4QixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXBELE1BQUFBLENBQUFnRCxNQUFBQSxDQUFBQSxFQUVBNUMsR0FBQUEsQ0FBQTZFLElBQUFBLEVBQUFBLEVBQ0E3RSxHQUFBQSxDQUFBOEUsU0FBQUEsQ0FBQUosTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEwQixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNBaEQsR0FBQUEsQ0FBQThFLFNBQUFBLENBQUFKLE1BQUFBLENBQUEvQixLQUFBQSxHQUFBLENBQUEsRUFBQStCLE1BQUFBLENBQUE5QixNQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBNUMsR0FBQUEsQ0FBQStFLE1BQUFBLENBQUFMLE1BQUFBLENBQUFyQyxRQUFBQSxHQUFBbkcsSUFBQUEsQ0FBQXNILEVBQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FrQixNQUFBQSxDQUFBM0QsS0FBQUEsRUFBQTtNQUNBLElBQUFpRSxNQUFBQSxHQUFBTixNQUFBQSxDQUFBM0QsS0FBQUEsQ0FBQWpLLENBQUFBLEdBQUE0TixNQUFBQSxDQUFBM0QsS0FBQUEsQ0FBQUUsT0FBQUE7UUFDQWdFLEdBQUFBLEdBQUEvSSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBdUksTUFBQUEsQ0FBQTNELEtBQUFBLENBQUFqSyxDQUFBQSxHQUFBNE4sTUFBQUEsQ0FBQTNELEtBQUFBLENBQUFFLE9BQUFBLENBQUFBO01BQ0FqQixHQUFBQSxDQUFBa0YsU0FBQUEsQ0FDQVIsTUFBQUEsQ0FBQXZELEdBQUFBLEVBQ0F1RCxNQUFBQSxDQUFBM0QsS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQThELE1BQUFBLEVBQ0FOLE1BQUFBLENBQUEzRCxLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBK0QsR0FBQUEsRUFDQVAsTUFBQUEsQ0FBQTNELEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLEVBQ0F3RCxNQUFBQSxDQUFBM0QsS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxDQUNBd0QsTUFBQUEsQ0FBQS9CLEtBQUFBLEdBQUEsQ0FBQSxFQUFBLENBQ0ErQixNQUFBQSxDQUFBOUIsTUFBQUEsR0FBQSxDQUFBLEVBQ0E4QixNQUFBQSxDQUFBL0IsS0FBQUEsRUFDQStCLE1BQUFBLENBQUE5QixNQUFBQSxDQUFBQSxFQUdBOEIsTUFBQUEsQ0FBQTNELEtBQUFBLENBQUFqSyxDQUFBQSxJQUFBLENBQUEsSUFDQTROLE1BQUFBLENBQUEzRCxLQUFBQSxDQUFBakssQ0FBQUEsR0FBQSxDQUFBLEVBQ0E0TixNQUFBQSxDQUFBM0QsS0FBQUEsQ0FBQXZKLFNBQUFBLEdBQUFBLENBQUEsQ0FBQSxJQUNBa04sTUFBQUEsQ0FBQTNELEtBQUFBLENBQUFqSyxDQUFBQSxJQUFBNE4sTUFBQUEsQ0FBQTNELEtBQUFBLENBQUFFLE9BQUFBLEdBQUF5RCxNQUFBQSxDQUFBM0QsS0FBQUEsQ0FBQUMsSUFBQUEsS0FDQTBELE1BQUFBLENBQUEzRCxLQUFBQSxDQUFBakssQ0FBQUEsR0FBQTROLE1BQUFBLENBQUEzRCxLQUFBQSxDQUFBRSxPQUFBQSxHQUFBeUQsTUFBQUEsQ0FBQTNELEtBQUFBLENBQUFDLElBQUFBLEdBQUEsQ0FBQSxFQUNBMEQsTUFBQUEsQ0FBQTNELEtBQUFBLENBQUF2SixTQUFBQSxHQUFBQSxDQUFBLENBQUEsQ0FFQTtJQUFBLENBQUEsTUFDQXdJLEdBQUFBLENBQUFrRixTQUFBQSxDQUFBUixNQUFBQSxDQUFBdkQsR0FBQUEsRUFBQUEsQ0FBQXVELE1BQUFBLENBQUEvQixLQUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBK0IsTUFBQUEsQ0FBQTlCLE1BQUFBLEdBQUEsQ0FBQSxFQUFBOEIsTUFBQUEsQ0FBQS9CLEtBQUFBLEVBQUErQixNQUFBQSxDQUFBOUIsTUFBQUEsQ0FBQUE7SUFFQTVDLEdBQUFBLENBQUFtRixPQUFBQSxFQUNBO0VBQUE7RUFlQSxTQUFBZixnQkFBQUEsQ0FBQXpCLEtBQUFBLEVBQUFDLE1BQUFBLEVBQUFBO0lBQ0EsSUFFQUUsQ0FBQUE7TUFGQXNDLEtBQUFBLEdBQUEsQ0FBQSxHQUFBbEosSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUE7TUFDQW9KLEtBQUFBLEdBQUEsQ0FBQSxHQUFBbkosSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUE7TUFFQThHLENBQUFBLEdBQUEsQ0FBQTtJQWdCQSxPQWZBcUMsS0FBQUEsSUFBQSxDQUFBLElBQ0F0QyxDQUFBQSxHQUFBNUcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQTJELE1BQUFBLENBQUErQyxLQUFBQSxFQUVBSSxDQUFBQSxHQURBQSxDQUFBQSxJQUFBLENBQUEsR0FDQSxDQUFBLEdBQUFILE1BQUFBLEdBRUFoRCxNQUFBQSxDQUFBZ0QsTUFBQUEsS0FHQUcsQ0FBQUEsR0FBQTdHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUEyRCxNQUFBQSxDQUFBZ0QsTUFBQUEsRUFFQUUsQ0FBQUEsR0FEQXVDLEtBQUFBLElBQUEsQ0FBQSxHQUNBLENBQUEsR0FBQTFDLEtBQUFBLEdBRUEvQyxNQUFBQSxDQUFBK0MsS0FBQUEsQ0FBQUEsRUFHQSxDQUFBRyxDQUFBQSxFQUFBQyxDQUFBQSxDQUNBO0VBQUE7RUFFQSxTQUFBZSxHQUFBQSxDQUFBd0IsT0FBQUEsRUFBQUMsT0FBQUEsRUFBQUE7SUFDQSxPQUNBRCxPQUFBQSxDQUFBdEMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXVDLE9BQUFBLENBQUF2QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdUMsT0FBQUEsQ0FBQTVDLEtBQUFBLElBQ0E0QyxPQUFBQSxDQUFBdkMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXNDLE9BQUFBLENBQUF0QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBc0MsT0FBQUEsQ0FBQTNDLEtBQUFBLElBQ0EyQyxPQUFBQSxDQUFBdEMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXVDLE9BQUFBLENBQUF2QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdUMsT0FBQUEsQ0FBQTNDLE1BQUFBLElBQ0EyQyxPQUFBQSxDQUFBdkMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXNDLE9BQUFBLENBQUF0QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBc0MsT0FBQUEsQ0FBQTFDLE1BRUE7RUFBQTtFQUVBLFNBQUFGLFNBQUFBLENBQUFBLEVBQUFBO0lBQ0EsSUFBQWxOLE1BQUFBLENBQUFnUSxJQUFBQSxDQUFBbEYsU0FBQUEsQ0FBQUEsQ0FBQXZKLE1BQUFBLEdBQUEsR0FBQSxFQUFBO01BQ0EsSUFBQW1NLEVBQUFBLEdBQUFoSCxJQUFBQSxDQUFBaUgsS0FBQUEsQ0FBQSxHQUFBLEdBQUFqSCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxDQUFBQTtNQUNBcUUsU0FBQUEsQ0FBQTRDLEVBQUFBLENBQUFBLEdBQUEsSUFBQWlCLFFBQUFBLENBQUFqQixFQUFBQSxDQUNBO0lBQUE7SUFDQW5JLE1BQUFBLENBQUFvSCxPQUFBQSxJQUNBNUYsVUFBQUEsQ0FBQSxZQUFBO01BQ0FtRyxTQUFBQSxFQUNBO0lBQUEsQ0FBQSxFQUtBM0gsTUFBQUEsQ0FBQXdILEtBQUFBLEdBQUEsR0FBQSxHQUNBLEdBQUEsR0FDQXhILE1BQUFBLENBQUF3SCxLQUFBQSxHQUFBLEdBQUEsR0FDQSxHQUFBLEdBQ0F4SCxNQUFBQSxDQUFBd0gsS0FBQUEsR0FBQSxHQUFBLEdBQ0EsR0FBQSxHQUNBeEgsTUFBQUEsQ0FBQXdILEtBQUFBLEdBQUEsR0FBQSxHQUNBLEdBQUEsR0FDQXhILE1BQUFBLENBQUF3SCxLQUFBQSxHQUFBLEdBQUEsR0FDQSxHQUFBLEdBQ0F4SCxNQUFBQSxDQUFBd0gsS0FBQUEsR0FBQSxHQUFBLEdBQ0EsR0FBQSxHQUNBeEgsTUFBQUEsQ0FBQXdILEtBQUFBLEdBQUEsR0FBQSxHQUNBLEdBQUEsR0FDQXhILE1BQUFBLENBQUF3SCxLQUFBQSxHQUFBLEdBQUEsR0FDQSxHQUFBLEdBRUEsR0FBQSxDQXBCQTtFQUFBO0VBd0JBLFNBQUFWLGNBQUFBLENBQUE0RCxNQUFBQSxFQUFBQTtJQUNBLElBQUEzTyxDQUFBQSxHQUFBLENBQUE7SUFDQSxHQUFBO01BQ0EsSUFBQW9NLEVBQUFBLEdBQUFoSCxJQUFBQSxDQUFBaUgsS0FBQUEsQ0FBQSxHQUFBLEdBQUFqSCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxDQUFBQTtNQUNBcUUsU0FBQUEsQ0FBQTRDLEVBQUFBLENBQUFBLEdBQUEsSUFBQWlCLFFBQUFBLENBQUFqQixFQUFBQSxDQUNBO0lBQUEsQ0FBQSxRQUFBcE0sQ0FBQUEsRUFBQUEsSUFBQTJPLE1BQUFBO0VBQ0E7RUFFQSxTQUFBaEIsWUFBQUEsQ0FBQUEsRUFBQUE7SUFDQSxJQUFBalAsTUFBQUEsQ0FBQWdRLElBQUFBLENBQUFqRixRQUFBQSxDQUFBQSxDQUFBeEosTUFBQUEsR0FBQSxDQUFBLEVBQUE7TUFDQSxJQUFBbU0sRUFBQUEsR0FBQWhILElBQUFBLENBQUFpSCxLQUFBQSxDQUFBLEdBQUEsR0FBQWpILElBQUFBLENBQUFELE1BQUFBLEVBQUFBLENBQUFBO01BQ0FzRSxRQUFBQSxDQUFBMkMsRUFBQUEsQ0FBQUEsR0FBQSxJQUFBeUIsT0FBQUEsQ0FBQXpCLEVBQUFBLENBQ0E7SUFBQTtFQUNBO0VBRUEsU0FBQWEsUUFBQUEsQ0FBQUEsRUFBQUE7SUFFQSxLQUFBLElBQUFqTixDQUFBQSxJQURBaUUsTUFBQUEsQ0FBQW9ILE9BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBN0IsU0FBQUEsRUFDQUEsU0FBQUEsQ0FBQXhKLENBQUFBLENBQUFBLENBQUE4SyxPQUFBQSxFQUFBQTtJQUVBdkIsS0FBQUEsR0FBQSxDQUFBLENBQUEsRUFDQXRGLE1BQUFBLENBQUEwRCxRQUFBQSxHQUNBMUQsTUFBQUEsQ0FBQTRELFdBQUFBLENBQUErRyxTQUFBQSxDQUFBcEYsU0FBQUEsR0FBQXZGLE1BQUFBLENBQUF3SCxLQUFBQSxLQUNBeEgsTUFBQUEsQ0FBQTRELFdBQUFBLENBQUErRyxTQUFBQSxDQUFBcEYsU0FBQUEsR0FBQXZGLE1BQUFBLENBQUF3SCxLQUFBQSxFQUNBN0MsT0FBQUEsQ0FBQWlHLFlBQUFBLENBQUEsV0FBQSxFQUFBNUssTUFBQUEsQ0FBQTRELFdBQUFBLENBQUFELEdBQUFBLEVBQUEzRCxNQUFBQSxDQUFBd0gsS0FBQUEsQ0FBQUEsQ0FBQUEsR0FHQXhILE1BQUFBLENBQUEySyxTQUFBQSxHQUFBM0ssTUFBQUEsQ0FBQXdILEtBQUFBLEtBQ0F4SCxNQUFBQSxDQUFBMkssU0FBQUEsR0FBQTNLLE1BQUFBLENBQUF3SCxLQUFBQSxDQUdBO0VBQUE7RUFpQkEsU0FBQXFELFlBQUFBLENBQUFBLEVBQUFBO0lBQ0EvTCxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBTixNQUFBQSxDQUFBcU0sVUFBQUEsQ0FBQUEsRUFDQWpHLE1BQUFBLENBQUErQyxLQUFBQSxHQUFBbkosTUFBQUEsQ0FBQXFNLFVBQUFBLEdBQUEsQ0FBQSxFQUNBakcsTUFBQUEsQ0FBQWdELE1BQUFBLEdBQUFwSixNQUFBQSxDQUFBc00sV0FBQUEsSUFBQWxHLE1BQUFBLENBQUErQyxLQUFBQSxJQUFBLEdBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxDQUNBO0VBQUE7RUFwYkFWLGNBQUFBLENBQUFELEdBQUFBLEdBQUEseUJBQUEsRUFFQXhJLE1BQUFBLENBQUF1TSxnQkFBQUEsQ0FDQSxTQUFBLEVBQ0EsVUFBQS9MLENBQUFBLEVBQUFBO0lBQ0F5RyxHQUFBQSxDQUFBekcsQ0FBQUEsQ0FBQWdNLE9BQUFBLElBQUFoTSxDQUFBQSxDQUFBaU0sS0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxFQUFBLENBQ0EsQ0FBQSxDQUFBLEVBRUF6TSxNQUFBQSxDQUFBdU0sZ0JBQUFBLENBQ0EsT0FBQSxFQUNBLFVBQUEvTCxDQUFBQSxFQUFBQTtJQUNBeUcsR0FBQUEsQ0FBQXpHLENBQUFBLENBQUFnTSxPQUFBQSxJQUFBaE0sQ0FBQUEsQ0FBQWlNLEtBQUFBLENBQUFBLEdBQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsRUFBQSxDQUNBLENBQUEsQ0FBQSxFQUdBbEwsTUFBQUEsQ0FBQTJLLFNBQUFBLEdBQUEsQ0FBQSxFQXVaQWxNLE1BQUFBLENBQUF1TSxnQkFBQUEsQ0FBQSxRQUFBLEVBQUFILFlBQUFBLEVBQUFBLENBQUEsQ0FBQSxDQUFBLEVBR0FBLFlBQUFBLEVBQUFBLEVBWUFNLHFCQUFBQSxDQUtBLFNBQUFDLElBQUFBLENBQUFBLEVBQUFBO0lBRUEsS0FBQSxJQUFBclAsQ0FBQUEsSUFEQWtKLEdBQUFBLENBQUFvRyxTQUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUF4RyxNQUFBQSxDQUFBK0MsS0FBQUEsRUFBQS9DLE1BQUFBLENBQUFnRCxNQUFBQSxDQUFBQSxFQUNBdkMsS0FBQUEsRUFDQUEsS0FBQUEsQ0FBQXZKLENBQUFBLENBQUFBLENBQUFvTixRQUFBQSxJQUFBLENBQUEsR0FBQSxPQUNBN0QsS0FBQUEsQ0FBQXZKLENBQUFBLENBQUFBLEdBRUF1SixLQUFBQSxDQUFBdkosQ0FBQUEsQ0FBQUEsQ0FBQXVNLElBQUFBLEVBQUFBO0lBR0EsS0FBQXZNLENBQUFBLElBQUF3SixTQUFBQSxFQUNBQSxTQUFBQSxDQUFBeEosQ0FBQUEsQ0FBQUEsQ0FBQXVNLElBQUFBLEVBQUFBO0lBRUEsS0FBQXZNLENBQUFBLElBQUF5SixRQUFBQSxFQUNBQSxRQUFBQSxDQUFBekosQ0FBQUEsQ0FBQUEsQ0FBQXVNLElBQUFBLEVBQUFBO0lBRUEsS0FBQXZNLENBQUFBLElBQUEwSixVQUFBQSxFQUNBQSxVQUFBQSxDQUFBMUosQ0FBQUEsQ0FBQUEsQ0FBQW9OLFFBQUFBLElBQUEsQ0FBQSxHQUFBLE9BQ0ExRCxVQUFBQSxDQUFBMUosQ0FBQUEsQ0FBQUEsR0FFQTBKLFVBQUFBLENBQUExSixDQUFBQSxDQUFBQSxDQUFBdU0sSUFBQUEsRUFBQUE7SUFJQSxJQURBbkIsWUFBQUEsRUFBQUEsRUFDQW5ILE1BQUFBLENBQUFvSCxPQUFBQSxFQUNBYixTQUFBQSxDQUFBK0IsSUFBQUEsRUFBQUEsQ0FBQUEsS0FDQTtNQUNBLElBQUFnRCxRQUFBQSxHQUFBckcsR0FBQUEsQ0FBQXNHLG9CQUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUExRyxNQUFBQSxDQUFBK0MsS0FBQUEsRUFBQSxDQUFBLENBQUE7TUFDQTBELFFBQUFBLENBQUFFLFlBQUFBLENBQ0EsR0FBQSxFQUNBLE1BQUEsR0FDQXJLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQXFLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBdEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBcUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0F0SyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFxSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEdBQ0FySyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFxSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXRLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQXFLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBdEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBcUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FDQSxLQUFBLEVBQ0EsTUFBQSxHQUNBckssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBcUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0F0SyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFxSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXRLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQXFLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxDQUFBLEVBRUFILFFBQUFBLENBQUFFLFlBQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsR0FDQXJLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXFLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBdEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBcUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0F0SyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFxSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLEtBQUEsRUFDQSxNQUFBLEdBQ0FySyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUFxSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXRLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXFLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBdEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBcUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQXhHLEdBQUFBLENBQUFHLFNBQUFBLEdBQUFrRyxR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QUEsRUFBQSxFQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFDLEdBQUFBLEVBQUE7UUFDQUgsS0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxFQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFFLElBQUFBLEVBQUE7UUFDQUosS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxFQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFHLEdBQUFBLEVBQUE7UUFDQUwsS0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxFQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFJLElBQUFBLEVBQUE7UUFDQU4sS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFLLEtBQUFBLEVBQUE7UUFDQVAsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFNLEtBQUFBLEVBQUE7UUFDQVIsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFPLEtBQUFBLEVBQUE7UUFDQVQsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFRLEdBQUFBLEVBQUE7UUFDQVYsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQTtJQUFBLENBQUE7RUFJQSxTQUFBUyxPQUFBQSxDQUFBQyxJQUFBQSxFQUFBQTtJQUNBcFUsSUFBQUEsQ0FBQStNLFFBQUFBLEdBQUEsQ0FBQTlHLElBQUFBLENBQUFDLEtBQUFBLENBQUFELElBQUFBLENBQUFELE1BQUFBLEVBQUFBLElBQUEyRCxNQUFBQSxDQUFBK0MsS0FBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsRUFBQXpHLElBQUFBLENBQUFDLEtBQUFBLENBQUFELElBQUFBLENBQUFELE1BQUFBLEVBQUFBLElBQUEyRCxNQUFBQSxDQUFBZ0QsTUFBQUEs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QUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxnQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxlQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsd0JBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsY0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGtCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxpQ0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxrQ0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxlQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEseUJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsdUNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsMEJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxhQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsY0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsTUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsa0JBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxnQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLG9CQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxNQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLDZCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGlDQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLHNEQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxlQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxXQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsbUJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSw4Q0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxXQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE1BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsZUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsbUNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxXQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxhQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsZ0NBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsTUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSwyQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsdUJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsd0NBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsb0JBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxnQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGtDQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsYUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxlQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsWUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLHNCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsNEJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsWUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxrQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSw0Q0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxNQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLDBCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsWUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsV0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxlQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxXQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsTUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxhQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE1BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxNQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGtCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGtCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLDJCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsYUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxxQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLG9CQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsY0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxpQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxZQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxXQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLDhDQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsd0JBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxjQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsU0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsYUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSx1QkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxhQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLDJCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLHNCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsMEJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsTUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSw2QkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxNQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsWUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLGFBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsY0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxxQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLDJCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLDhCQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsUUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxzQ0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSwwQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxTQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsVUFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxrQ0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxtQ0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSx5QkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxzQkFBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxVQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsbUJBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsT0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxPQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXpPLElBQUFBLEVBQUEsY0FBQTtJQUFBeU8sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBek8sSUFBQUEsRUFBQSxRQUFBO0lBQUF5TyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF6TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXlPLElBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUE7RUFXQXZVLE1BQUFBLENBQUF5VSxXQUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUEsSUFBQTNU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bGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwID0gW1xyXG4gIHtcclxuICAgIGJhc2U6IFwiQVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQxXFx1MjRCNlxcdUZGMjFcXHUwMEMwXFx1MDBDMVxcdTAwQzJcXHUxRUE2XFx1MUVBNFxcdTFFQUFcXHUxRUE4XFx1MDBDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx1MDBDNFxcdTAxREVcXHUxRUEyXFx1MDBDNVxcdTAxRkFcXHUwMUNEXFx1MDIwMFxcdTAyMDJcXHUxRUEwXFx1MUVBQ1xcdTFFQjZcXHUxRTAwXFx1MDEwNFxcdTAyM0FcXHUyQzZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBQVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzMyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBRVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMEM2XFx1MDFGQ1xcdTAxRTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFPXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFVXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFWXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzhcXHVBNzNBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzNDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJCXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgyXFx1MDE4MV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQ1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQzXFx1MjRCOFxcdUZGMjNcXHUwMTA2XFx1MDEwOFxcdTAxMEFcXHUwMTBDXFx1MDBDN1xcdTFFMDhcXHUwMTg3XFx1MDIzQlxcdUE3M0VdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0NFxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEJcXHUwMThBXFx1MDE4OVxcdUE3NzldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkRaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjFcXHUwMUM0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEelwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYyXFx1MDFDNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQ1XFx1MjRCQVxcdUZGMjVcXHUwMEM4XFx1MDBDOVxcdTAwQ0FcXHUxRUMwXFx1MUVCRVxcdTFFQzRcXHUxRUMyXFx1MUVCQ1xcdTAxMTJcXHUxRTE0XFx1MUUxNlxcdTAxMTRcXHUwMTE2XFx1MDBDQlxcdTFFQkFcXHUwMTFBXFx1MDIwNFxcdTAyMDZcXHUxRUI4XFx1MUVDNlxcdTAyMjhcXHUxRTFDXFx1MDExOFxcdTFFMThcXHUxRTFBXFx1MDE5MFxcdTAxOEVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0NlxcdTI0QkJcXHVGRjI2XFx1MUUxRVxcdTAxOTFcXHVBNzdCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJHXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDdcXHUyNEJDXFx1RkYyN1xcdTAxRjRcXHUwMTFDXFx1MUUyMFxcdTAxMUVcXHUwMTIwXFx1MDFFNlxcdTAxMjJcXHUwMUU0XFx1MDE5M1xcdUE3QTBcXHVBNzdEXFx1QTc3RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ4XFx1MjRCRFxcdUZGMjhcXHUwMTI0XFx1MUUyMlxcdTFFMjZcXHUwMjFFXFx1MUUyNFxcdTFFMjhcXHUxRTJBXFx1MDEyNlxcdTJDNjdcXHUyQzc1XFx1QTc4RF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQ5XFx1MjRCRVxcdUZGMjlcXHUwMENDXFx1MDBDRFxcdTAwQ0VcXHUwMTI4XFx1MDEyQVxcdTAxMkNcXHUwMTMwXFx1MDBDRlxcdTFFMkVcXHUxRUM4XFx1MDFDRlxcdTAyMDhcXHUwMjBBXFx1MUVDQVxcdTAxMkVcXHUxRTJDXFx1MDE5N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRBXFx1MjRCRlxcdUZGMkFcXHUwMTM0XFx1MDI0OF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiS1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRCXFx1MjRDMFxcdUZGMkJcXHUxRTMwXFx1MDFFOFxcdTFFMzJcXHUwMTM2XFx1MUUzNFxcdTAxOThcXHUyQzY5XFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTdBMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTFwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDRDXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxKXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk1cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0RFxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0RVxcdTI0QzNcXHVGRjJFXFx1MDFGOFxcdTAxNDNcXHUwMEQxXFx1MUU0NFxcdTAxNDdcXHUxRTQ2XFx1MDE0NVxcdTFFNEFcXHUxRTQ4XFx1MDIyMFxcdTAxOURcXHVBNzkwXFx1QTdBNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTkpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTmpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDRGXFx1MjRDNFxcdUZGMkZcXHUwMEQyXFx1MDBEM1xcdTAwRDRcXHUxRUQyXFx1MUVEMFxcdTFFRDZcXHUxRUQ0XFx1MDBENVxcdTFFNENcXHUwMjJDXFx1MUU0RVxcdTAxNENcXHUxRTUwXFx1MUU1MlxcdTAxNEVcXHUwMjJFXFx1MDIzMFxcdTAwRDZcXHUwMjJBXFx1MUVDRVxcdTAxNTBcXHUwMUQxXFx1MDIwQ1xcdTAyMEVcXHUwMUEwXFx1MUVEQ1xcdTFFREFcXHUxRUUwXFx1MUVERVxcdTFFRTJcXHUxRUNDXFx1MUVEOFxcdTAxRUFcXHUwMUVDXFx1MDBEOFxcdTAxRkVcXHUwMTg2XFx1MDE5RlxcdUE3NEFcXHVBNzRDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPSVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUEyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPT1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzRFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPVVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMjIyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJQXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTBcXHUyNEM1XFx1RkYzMFxcdTFFNTRcXHUxRTU2XFx1MDFBNFxcdTJDNjNcXHVBNzUwXFx1QTc1MlxcdUE3NTRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1MVxcdTI0QzZcXHVGRjMxXFx1QTc1NlxcdUE3NThcXHUwMjRBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJSXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJTXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTNcXHUyNEM4XFx1RkYzM1xcdTFFOUVcXHUwMTVBXFx1MUU2NFxcdTAxNUNcXHUxRTYwXFx1MDE2MFxcdTFFNjZcXHUxRTYyXFx1MUU2OFxcdTAyMThcXHUwMTVFXFx1MkM3RVxcdUE3QThcXHVBNzg0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJUXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTRcXHUyNEM5XFx1RkYzNFxcdTFFNkFcXHUwMTY0XFx1MUU2Q1xcdTAyMUFcXHUwMTYyXFx1MUU3MFxcdTFFNkVcXHUwMTY2XFx1MDFBQ1xcdTAxQUVcXHUwMjNFXFx1QTc4Nl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVFpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTcyOF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDU1XFx1MjRDQVxcdUZGMzVcXHUwMEQ5XFx1MDBEQVxcdTAwREJcXHUwMTY4XFx1MUU3OFxcdTAxNkFcXHUxRTdBXFx1MDE2Q1xcdTAwRENcXHUwMURCXFx1MDFEN1xcdTAxRDVcXHUwMUQ5XFx1MUVFNlxcdTAxNkVcXHUwMTcwXFx1MDFEM1xcdTAyMTRcXHUwMjE2XFx1MDFBRlxcdTFFRUFcXHUxRUU4XFx1MUVFRVxcdTFFRUNcXHUxRUYwXFx1MUVFNFxcdTFFNzJcXHUwMTcyXFx1MUU3NlxcdTFFNzRcXHUwMjQ0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJWXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTZcXHUyNENCXFx1RkYzNlxcdTFFN0NcXHUxRTdFXFx1MDFCMlxcdUE3NUVcXHUwMjQ1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJWWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzYwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJXXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTdcXHUyNENDXFx1RkYzN1xcdTFFODBcXHUxRTgyXFx1MDE3NFxcdTFFODZcXHUxRTg0XFx1MUU4OFxcdTJDNzJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1OFxcdTI0Q0RcXHVGRjM4XFx1MUU4QVxcdTFFOENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIllcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1OVxcdTI0Q0VcXHVGRjM5XFx1MUVGMlxcdTAwRERcXHUwMTc2XFx1MUVGOFxcdTAyMzJcXHUxRThFXFx1MDE3OFxcdTFFRjZcXHUxRUY0XFx1MDFCM1xcdTAyNEVcXHUxRUZFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNUFcXHUyNENGXFx1RkYzQVxcdTAxNzlcXHUxRTkwXFx1MDE3QlxcdTAxN0RcXHUxRTkyXFx1MUU5NFxcdTAxQjVcXHUwMjI0XFx1MkM3RlxcdTJDNkJcXHVBNzYyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjFcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHUwMEUwXFx1MDBFMVxcdTAwRTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx1MDBFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx1MDBFNFxcdTAxREZcXHUxRUEzXFx1MDBFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhYVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzMzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhZVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMEU2XFx1MDFGRFxcdTAxRTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFvXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF1XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzlcXHVBNzNCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJheVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzNEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJiXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjJcXHUyNEQxXFx1RkY0MlxcdTFFMDNcXHUxRTA1XFx1MUUwN1xcdTAxODBcXHUwMTgzXFx1MDI1M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiY1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDYzXFx1MjREMlxcdUZGNDNcXHUwMTA3XFx1MDEwOVxcdTAxMEJcXHUwMTBEXFx1MDBFN1xcdTFFMDlcXHUwMTg4XFx1MDIzQ1xcdUE3M0ZcXHUyMTg0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJkXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjRcXHUyNEQzXFx1RkY0NFxcdTFFMEJcXHUwMTBGXFx1MUUwRFxcdTFFMTFcXHUxRTEzXFx1MUUwRlxcdTAxMTFcXHUwMThDXFx1MDI1NlxcdTAyNTdcXHVBNzdBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJkelwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYzXFx1MDFDNl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDY1XFx1MjRENFxcdUZGNDVcXHUwMEU4XFx1MDBFOVxcdTAwRUFcXHUxRUMxXFx1MUVCRlxcdTFFQzVcXHUxRUMzXFx1MUVCRFxcdTAxMTNcXHUxRTE1XFx1MUUxN1xcdTAxMTVcXHUwMTE3XFx1MDBFQlxcdTFFQkJcXHUwMTFCXFx1MDIwNVxcdTAyMDdcXHUxRUI5XFx1MUVDN1xcdTAyMjlcXHUxRTFEXFx1MDExOVxcdTFFMTlcXHUxRTFCXFx1MDI0N1xcdTAyNUJcXHUwMUREXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJmXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjZcXHUyNEQ1XFx1RkY0NlxcdTFFMUZcXHUwMTkyXFx1QTc3Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZ1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY3XFx1MjRENlxcdUZGNDdcXHUwMUY1XFx1MDExRFxcdTFFMjFcXHUwMTFGXFx1MDEyMVxcdTAxRTdcXHUwMTIzXFx1MDFFNVxcdTAyNjBcXHVBN0ExXFx1MUQ3OVxcdUE3N0ZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2OFxcdTI0RDdcXHVGRjQ4XFx1MDEyNVxcdTFFMjNcXHUxRTI3XFx1MDIxRlxcdTFFMjVcXHUxRTI5XFx1MUUyQlxcdTFFOTZcXHUwMTI3XFx1MkM2OFxcdTJDNzZcXHUwMjY1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJodlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMTk1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJpXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjlcXHUyNEQ4XFx1RkY0OVxcdTAwRUNcXHUwMEVEXFx1MDBFRVxcdTAxMjlcXHUwMTJCXFx1MDEyRFxcdTAwRUZcXHUxRTJGXFx1MUVDOVxcdTAxRDBcXHUwMjA5XFx1MDIwQlxcdTFFQ0JcXHUwMTJGXFx1MUUyRFxcdTAyNjhcXHUwMTMxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkFcXHUyNEQ5XFx1RkY0QVxcdTAxMzVcXHUwMUYwXFx1MDI0OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwia1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZCXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibFwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZDXFx1MjREQlxcdUZGNENcXHUwMTQwXFx1MDEzQVxcdTAxM0VcXHUxRTM3XFx1MUUzOVxcdTAxM0NcXHUxRTNEXFx1MUUzQlxcdTAxN0ZcXHUwMTQyXFx1MDE5QVxcdTAyNkJcXHUyQzYxXFx1QTc0OVxcdUE3ODFcXHVBNzQ3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJsalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJtXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkRcXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJuXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkVcXHUyNEREXFx1RkY0RVxcdTAxRjlcXHUwMTQ0XFx1MDBGMVxcdTFFNDVcXHUwMTQ4XFx1MUU0N1xcdTAxNDZcXHUxRTRCXFx1MUU0OVxcdTAxOUVcXHUwMjcyXFx1MDE0OVxcdUE3OTFcXHVBN0E1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJualwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkZcXHUyNERFXFx1RkY0RlxcdTAwRjJcXHUwMEYzXFx1MDBGNFxcdTFFRDNcXHUxRUQxXFx1MUVEN1xcdTFFRDVcXHUwMEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx1MDBGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHUwMEY4XFx1MDFGRlxcdTAyNTRcXHVBNzRCXFx1QTc0RFxcdTAyNzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9pXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm91XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAyMjNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9vXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NEZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInBcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3MFxcdTI0REZcXHVGRjUwXFx1MUU1NVxcdTFFNTdcXHUwMUE1XFx1MUQ3RFxcdUE3NTFcXHVBNzUzXFx1QTc1NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwicVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDcxXFx1MjRFMFxcdUZGNTFcXHUwMjRCXFx1QTc1N1xcdUE3NTldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInJcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3MlxcdTI0RTFcXHVGRjUyXFx1MDE1NVxcdTFFNTlcXHUwMTU5XFx1MDIxMVxcdTAyMTNcXHUxRTVCXFx1MUU1RFxcdTAxNTdcXHUxRTVGXFx1MDI0RFxcdTAyN0RcXHVBNzVCXFx1QTdBN1xcdUE3ODNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInNcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3M1xcdTI0RTJcXHVGRjUzXFx1MDBERlxcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ0XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzRcXHUyNEUzXFx1RkY1NFxcdTFFNkJcXHUxRTk3XFx1MDE2NVxcdTFFNkRcXHUwMjFCXFx1MDE2M1xcdTFFNzFcXHUxRTZGXFx1MDE2N1xcdTAxQURcXHUwMjg4XFx1MkM2NlxcdUE3ODddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MjldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3NVxcdTI0RTRcXHVGRjU1XFx1MDBGOVxcdTAwRkFcXHUwMEZCXFx1MDE2OVxcdTFFNzlcXHUwMTZCXFx1MUU3QlxcdTAxNkRcXHUwMEZDXFx1MDFEQ1xcdTAxRDhcXHUwMUQ2XFx1MDFEQVxcdTFFRTdcXHUwMTZGXFx1MDE3MVxcdTAxRDRcXHUwMjE1XFx1MDIxN1xcdTAxQjBcXHUxRUVCXFx1MUVFOVxcdTFFRUZcXHUxRUVEXFx1MUVGMVxcdTFFRTVcXHUxRTczXFx1MDE3M1xcdTFFNzdcXHUxRTc1XFx1MDI4OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc2XFx1MjRFNVxcdUZGNTZcXHUxRTdEXFx1MUU3RlxcdTAyOEJcXHVBNzVGXFx1MDI4Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidnlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc2MV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwid1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc3XFx1MjRFNlxcdUZGNTdcXHUxRTgxXFx1MUU4M1xcdTAxNzVcXHUxRTg3XFx1MUU4NVxcdTFFOThcXHUxRTg5XFx1MkM3M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwieFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc4XFx1MjRFN1xcdUZGNThcXHUxRThCXFx1MUU4RF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwieVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc5XFx1MjRFOFxcdUZGNTlcXHUxRUYzXFx1MDBGRFxcdTAxNzdcXHUxRUY5XFx1MDIzM1xcdTFFOEZcXHUwMEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwN0FcXHUyNEU5XFx1RkY1QVxcdTAxN0FcXHUxRTkxXFx1MDE3Q1xcdTAxN0VcXHUxRTkzXFx1MUU5NVxcdTAxQjZcXHUwMjI1XFx1MDI0MFxcdTJDNkNcXHVBNzYzXS9nLFxyXG4gIH0sXHJcbl07XHJcbnZhciBkb21haW5zID0gW1xyXG4gIFwiLmNvbVwiLFxyXG4gIFwiLm9yZ1wiLFxyXG4gIFwiLm5ldFwiLFxyXG4gIFwiLmFjXCIsXHJcbiAgXCIuYWRcIixcclxuICBcIi5hZVwiLFxyXG4gIFwiLmFmXCIsXHJcbiAgXCIuYWdcIixcclxuICBcIi5haVwiLFxyXG4gIFwiLmFsXCIsXHJcbiAgXCIuYW1cIixcclxuICBcIi5hb1wiLFxyXG4gIFwiLmFxXCIsXHJcbiAgXCIuYXJcIixcclxuICBcIi5hc1wiLFxyXG4gIFwiLmF0XCIsXHJcbiAgXCIuYXVcIixcclxuICBcIi5hd1wiLFxyXG4gIFwiLmF4XCIsXHJcbiAgXCIuYXpcIixcclxuICBcIi5iYVwiLFxyXG4gIFwiLmJiXCIsXHJcbiAgXCIuYmRcIixcclxuICBcIi5iZVwiLFxyXG4gIFwiLmJmXCIsXHJcbiAgXCIuYmdcIixcclxuICBcIi5iaFwiLFxyXG4gIFwiLmJpXCIsXHJcbiAgXCIuYmpcIixcclxuICBcIi5ibVwiLFxyXG4gIFwiLmJuXCIsXHJcbiAgXCIuYm9cIixcclxuICBcIi5icVwiLFxyXG4gIFwiLmJyXCIsXHJcbiAgXCIuYnNcIixcclxuICBcIi5idFwiLFxyXG4gIFwiLmJ3XCIsXHJcbiAgXCIuYnlcIixcclxuICBcIi5ielwiLFxyXG4gIFwiLmNhXCIsXHJcbiAgXCIuY2NcIixcclxuICBcIi5jZFwiLFxyXG4gIFwiLmNmXCIsXHJcbiAgXCIuY2dcIixcclxuICBcIi5jaFwiLFxyXG4gIFwiLmNpXCIsXHJcbiAgXCIuY2tcIixcclxuICBcIi5jbFwiLFxyXG4gIFwiLmNtXCIsXHJcbiAgXCIuY25cIixcclxuICBcIi5jb1wiLFxyXG4gIFwiLmNyXCIsXHJcbiAgXCIuY3VcIixcclxuICBcIi5jdlwiLFxyXG4gIFwiLmN3XCIsXHJcbiAgXCIuY3hcIixcclxuICBcIi5jeVwiLFxyXG4gIFwiLmN6XCIsXHJcbiAgXCIuZGVcIixcclxuICBcIi5kalwiLFxyXG4gIFwiLmRrXCIsXHJcbiAgXCIuZG1cIixcclxuICBcIi5kb1wiLFxyXG4gIFwiLmR6XCIsXHJcbiAgXCIuZWNcIixcclxuICBcIi5lZVwiLFxyXG4gIFwiLmVnXCIsXHJcbiAgXCIuZWhcIixcclxuICBcIi5lclwiLFxyXG4gIFwiLmVzXCIsXHJcbiAgXCIuZXRcIixcclxuICBcIi5ldVwiLFxyXG4gIFwiLmZpXCIsXHJcbiAgXCIuZmpcIixcclxuICBcIi5ma1wiLFxyXG4gIFwiLmZtXCIsXHJcbiAgXCIuZm9cIixcclxuICBcIi5mclwiLFxyXG4gIFwiLmdhXCIsXHJcbiAgXCIuZ2RcIixcclxuICBcIi5nZVwiLFxyXG4gIFwiLmdmXCIsXHJcbiAgXCIuZ2dcIixcclxuICBcIi5naFwiLFxyXG4gIFwiLmdpXCIsXHJcbiAgXCIuZ2xcIixcclxuICBcIi5nbVwiLFxyXG4gIFwiLmduXCIsXHJcbiAgXCIuZ3BcIixcclxuICBcIi5ncVwiLFxyXG4gIFwiLmdyXCIsXHJcbiAgXCIuZ3NcIixcclxuICBcIi5ndFwiLFxyXG4gIFwiLmd1XCIsXHJcbiAgXCIuZ3dcIixcclxuICBcIi5neVwiLFxyXG4gIFwiLmhrXCIsXHJcbiAgXCIuaG1cIixcclxuICBcIi5oblwiLFxyXG4gIFwiLmhyXCIsXHJcbiAgXCIuaHRcIixcclxuICBcIi5odVwiLFxyXG4gIFwiLmlkXCIsXHJcbiAgXCIuaWVcIixcclxuICBcIi5pbFwiLFxyXG4gIFwiLmltXCIsXHJcbiAgXCIuaW5cIixcclxuICBcIi5pb1wiLFxyXG4gIFwiLmlxXCIsXHJcbiAgXCIuaXJcIixcclxuICBcIi5pc1wiLFxyXG4gIFwiLml0XCIsXHJcbiAgXCIuamVcIixcclxuICBcIi5qbVwiLFxyXG4gIFwiLmpvXCIsXHJcbiAgXCIuanBcIixcclxuICBcIi5rZVwiLFxyXG4gIFwiLmtnXCIsXHJcbiAgXCIua2hcIixcclxuICBcIi5raVwiLFxyXG4gIFwiLmttXCIsXHJcbiAgXCIua25cIixcclxuICBcIi5rcFwiLFxyXG4gIFwiLmtyXCIsXHJcbiAgXCIua3dcIixcclxuICBcIi5reVwiLFxyXG4gIFwiLmt6XCIsXHJcbiAgXCIubGFcIixcclxuICBcIi5sYlwiLFxyXG4gIFwiLmxjXCIsXHJcbiAgXCIubGlcIixcclxuICBcIi5sa1wiLFxyXG4gIFwiLmxyXCIsXHJcbiAgXCIubHNcIixcclxuICBcIi5sdFwiLFxyXG4gIFwiLmx1XCIsXHJcbiAgXCIubHZcIixcclxuICBcIi5seVwiLFxyXG4gIFwiLm1hXCIsXHJcbiAgXCIubWNcIixcclxuICBcIi5tZFwiLFxyXG4gIFwiLm1lXCIsXHJcbiAgXCIubWdcIixcclxuICBcIi5taFwiLFxyXG4gIFwiLm1rXCIsXHJcbiAgXCIubWxcIixcclxuICBcIi5tbVwiLFxyXG4gIFwiLm1uXCIsXHJcbiAgXCIubW9cIixcclxuICBcIi5tcFwiLFxyXG4gIFwiLm1xXCIsXHJcbiAgXCIubXJcIixcclxuICBcIi5tc1wiLFxyXG4gIFwiLm10XCIsXHJcbiAgXCIubXVcIixcclxuICBcIi5tdlwiLFxyXG4gIFwiLm13XCIsXHJcbiAgXCIubXhcIixcclxuICBcIi5teVwiLFxyXG4gIFwiLm16XCIsXHJcbiAgXCIubmFcIixcclxuICBcIi5uY1wiLFxyXG4gIFwiLm5lXCIsXHJcbiAgXCIubmZcIixcclxuICBcIi5uZ1wiLFxyXG4gIFwiLm5pXCIsXHJcbiAgXCIubmxcIixcclxuICBcIi5ub1wiLFxyXG4gIFwiLm5wXCIsXHJcbiAgXCIubnJcIixcclxuICBcIi5udVwiLFxyXG4gIFwiLm56XCIsXHJcbiAgXCIub21cIixcclxuICBcIi5wYVwiLFxyXG4gIFwiLnBlXCIsXHJcbiAgXCIucGZcIixcclxuICBcIi5wZ1wiLFxyXG4gIFwiLnBoXCIsXHJcbiAgXCIucGtcIixcclxuICBcIi5wbFwiLFxyXG4gIFwiLnBtXCIsXHJcbiAgXCIucG5cIixcclxuICBcIi5wclwiLFxyXG4gIFwiLnBzXCIsXHJcbiAgXCIucHRcIixcclxuICBcIi5wd1wiLFxyXG4gIFwiLnB5XCIsXHJcbiAgXCIucWFcIixcclxuICBcIi5yZVwiLFxyXG4gIFwiLnJvXCIsXHJcbiAgXCIucnNcIixcclxuICBcIi5ydVwiLFxyXG4gIFwiLnJ3XCIsXHJcbiAgXCIuc2FcIixcclxuICBcIi5zYlwiLFxyXG4gIFwiLnNjXCIsXHJcbiAgXCIuc2RcIixcclxuICBcIi5zZVwiLFxyXG4gIFwiLnNnXCIsXHJcbiAgXCIuc2hcIixcclxuICBcIi5zaVwiLFxyXG4gIFwiLnNrXCIsXHJcbiAgXCIuc2xcIixcclxuICBcIi5zbVwiLFxyXG4gIFwiLnNuXCIsXHJcbiAgXCIuc29cIixcclxuICBcIi5zclwiLFxyXG4gIFwiLnNzXCIsXHJcbiAgXCIuc3RcIixcclxuICBcIi5zdVwiLFxyXG4gIFwiLnN2XCIsXHJcbiAgXCIuc3hcIixcclxuICBcIi5zeVwiLFxyXG4gIFwiLnN6XCIsXHJcbiAgXCIudGNcIixcclxuICBcIi50ZFwiLFxyXG4gIFwiLnRmXCIsXHJcbiAgXCIudGdcIixcclxuICBcIi50aFwiLFxyXG4gIFwiLnRqXCIsXHJcbiAgXCIudGtcIixcclxuICBcIi50bFwiLFxyXG4gIFwiLnRtXCIsXHJcbiAgXCIudG5cIixcclxuICBcIi50b1wiLFxyXG4gIFwiLnRyXCIsXHJcbiAgXCIudHRcIixcclxuICBcIi50dlwiLFxyXG4gIFwiLnR3XCIsXHJcbiAgXCIudHpcIixcclxuICBcIi51YVwiLFxyXG4gIFwiLnVnXCIsXHJcbiAgXCIudWtcIixcclxuICBcIi51c1wiLFxyXG4gIFwiLnV5XCIsXHJcbiAgXCIudXpcIixcclxuICBcIi52YVwiLFxyXG4gIFwiLnZjXCIsXHJcbiAgXCIudmVcIixcclxuICBcIi52Z1wiLFxyXG4gIFwiLnZpXCIsXHJcbiAgXCIudm5cIixcclxuICBcIi52dVwiLFxyXG4gIFwiLndmXCIsXHJcbiAgXCIud3NcIixcclxuICBcIi55ZVwiLFxyXG4gIFwiLnl0XCIsXHJcbiAgXCIuemFcIixcclxuICBcIi56bVwiLFxyXG4gIFwiLnp3XCIsXHJcbl07XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVEaWFjcml0aWNzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcC5yZWR1Y2UoKHJlc3VsdCwgbGV0dGVyKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXN1bHQucmVwbGFjZShsZXR0ZXIubGV0dGVycywgbGV0dGVyLmJhc2UpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBTUEVDSUFMX0NIQVJBQ1RFUlMgPSBcIlxcXFxcXFxcLyAhP0AjJCVeJiooKV8rOi57fSw7XFxcXC0nYGDigJnigJhcXFwiXCI7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVyc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChgWyR7U1BFQ0lBTF9DSEFSQUNURVJTfV1gLCBcImdpXCIpLCBcIlwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZUFsbEJ1dExldHRlcnNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b0xvd2VyQ2FzZSgpLnJlbW92ZURpYWNyaXRpY3MoKS5yZW1vdmVTcGVjaWFsQ2hhcmFjdGVycygpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiY29uY2VhbFwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChleHRyYSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbXiR7U1BFQ0lBTF9DSEFSQUNURVJTfSR7ZXh0cmF9XWAsIFwiZ2lcIiksIFwi4oGOXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiY2FwaXRhbGl6ZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5zbGljZSgxKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZUhUTUxcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKFwiPlwiLCBcIlxcdTIyN0JcIikucmVwbGFjZShcIjxcIiwgXCJcXHUyMjdBXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicGFyc2VTeW1ib2xzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZUFsbChcIiZcIiwgXCImYW1wO1wiKS5yZXBsYWNlKFwiPFwiLCBcIiZsdDtcIikucmVwbGFjZShcIj5cIiwgXCImZ3Q7XCIpLnJlcGxhY2VBbGwoXCIjXCIsIFwiJm51bTtcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZXBsYWNlQXJyYXlcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZmluZCwgcmVwbGFjZSkge1xyXG4gICAgdmFyIHJlcGxhY2VTdHJpbmcgPSB0aGlzO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaW5kLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHJlcGxhY2VTdHJpbmcgPSByZXBsYWNlU3RyaW5nLnJlcGxhY2UoZmluZFtpXSwgcmVwbGFjZVtpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVwbGFjZVN0cmluZztcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcIm1hc2tVUkxzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZUFycmF5KFtcImh0dHBzOi8vXCIsIFwiaHR0cDovL1wiXSwgXCJub3BlOi8vXCIpLnJlcGxhY2VBcnJheShkb21haW5zLCBcIi5ub3BlXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwibWFrZVJlYWRhYmxlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJtYWtlUGVyY2VudGFnZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChkZWNpbWFscykge1xyXG4gICAgaWYgKGRlY2ltYWxzID09PSB1bmRlZmluZWQpIGRlY2ltYWxzID0gMjtcclxuICAgIHJldHVybiBgJHsodGhpcyAqIDEwMCkudG9GaXhlZChkZWNpbWFscyl9JWA7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzb3J0T2JqZWN0ID0gKG9iaiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgbGV0IGFyciA9IFtdO1xyXG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgYXJyLnB1c2goW2tleSwgb2JqW2tleV1dKTtcclxuICB9XHJcbiAgYXJyLnNvcnQoKGEsIGIpID0+IChkaXJlY3Rpb24gPyBhWzFdIC0gYlsxXSA6IGJbMV0gLSBhWzFdKSk7XHJcbiAgbGV0IG9ialNvcnRlZCA9IHt9O1xyXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiAob2JqU29ydGVkW2l0ZW1bMF1dID0gaXRlbVsxXSkpO1xyXG4gIC8vYXJyLnNvcnQoZnVuY3Rpb24oYSwgYikgeyBhLnZhbHVlLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLnZhbHVlLnRvTG93ZXJDYXNlKCkpOyB9KTsgLy91c2UgdGhpcyB0byBzb3J0IGFzIHN0cmluZ3NcclxuICByZXR1cm4gb2JqU29ydGVkOyAvLyByZXR1cm5zIGFycmF5XHJcbn07XHJcbiIsIi8qXHJcbiQgPSBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxudmFyIGJvb3RzdHJhcCA9IHJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxudmFyIGFuZ3VsYXJTYW5pdGl6ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItc2FuaXRpemUnKTtcclxudmFyIGFuZ3VsYXJBbmltYXRlID0gcmVxdWlyZSgnYW5ndWxhci1hbmltYXRlJyk7XHJcbiovXHJcbmFuZ3VsYXIubW9kdWxlKFwiYXBwXCIsIFtcclxuICBcInVpLnJvdXRlclwiLFxyXG4gIFwidWkuYm9vdHN0cmFwXCIsXHJcbiAgXCJuZ0FuaW1hdGVcIixcclxuICBcIm5nU2FuaXRpemVcIixcclxuICBcIm5nTWF0ZXJpYWxcIixcclxuICBcIm5nTWVzc2FnZXNcIixcclxuICBcIm5nRHJhZ0Ryb3BcIixcclxuICBcIm5nVGFnc0lucHV0XCIsXHJcbiAgXCJ2Y1JlY2FwdGNoYVwiLFxyXG4gIFwiY2hhcnQuanNcIixcclxuICBcInRjLmNoYXJ0anNcIixcclxuICBcImluZmluaXRlLXNjcm9sbFwiLFxyXG5dKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkdXJsU2VydmljZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xyXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvaG9tZVwiKTtcclxuICAkdXJsU2VydmljZVByb3ZpZGVyLmNvbmZpZy5zdHJpY3RNb2RlKGZhbHNlKTtcclxuXHJcbiAgJHN0YXRlUHJvdmlkZXJcclxuICAgIC5zdGF0ZShcImhvbWVcIiwge1xyXG4gICAgICB1cmw6IFwiL2hvbWVcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2hvbWUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInBvbGljeVwiLCB7XHJcbiAgICAgIHVybDogXCIvcG9saWN5XCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wb2xpY3kuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInByaW50XCIsIHtcclxuICAgICAgdXJsOiBcIi9wcmludFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcHJpbnQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImV4cGVyaWVuY2VcIiwge1xyXG4gICAgICB1cmw6IFwiL2V4cGVyaWVuY2VcIixcclxuICAgICAgY29udHJvbGxlcjogXCJFeHBlcmllbmNlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvZXhwZXJpZW5jZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwic2tpbGxzXCIsIHtcclxuICAgICAgdXJsOiBcIi9za2lsbHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJTa2lsbHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9za2lsbHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImhvYmJpZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2hvYmJpZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJIb2JiaWVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvaG9iYmllcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiY29udGFjdFwiLCB7XHJcbiAgICAgIHVybDogXCIvY29udGFjdFwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkNvbnRhY3RDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9jb250YWN0Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ3b3Jrb3V0XCIsIHtcclxuICAgICAgdXJsOiBcIi93b3Jrb3V0XCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiV29ya291dEN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3dvcmtvdXQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInBvc3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9wb3N0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlBvc3RzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcG9zdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInByb2ZpbGVcIiwge1xyXG4gICAgICB1cmw6IFwiL3Byb2ZpbGVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJQcm9maWxlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcHJvZmlsZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibGlzdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2xpc3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiTGlzdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImxpc3RzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJidWJibGVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9idWJibGVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQnViYmxlc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiYnViYmxlcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYXN0ZXJvaWRzXCIsIHtcclxuICAgICAgdXJsOiBcIi9hc3Rlcm9pZHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJBc3Rlcm9pZHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImFzdGVyb2lkcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibGVtbWluZ3NcIiwge1xyXG4gICAgICB1cmw6IFwiL2xlbW1pbmdzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiTGVtbWluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImxlbW1pbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJib3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9ib3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5nc1wiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1hZG1pblwiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLWFkbWluXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzQWRtaW5DdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1hZG1pbi5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLWdhbWVcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy86Z2FtZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0dhbWVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1nYW1lLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3Mtc3RhdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy1zdGF0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc1N0YXRzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3Mtc3RhdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotZ29vZ2xlXCIsIHtcclxuICAgICAgdXJsOiBcIi9nb29nbGVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6R29vZ2xlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL2dvb2dsZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1sb2dvc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbG9nb3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6TG9nb3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvbG9nb3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotYW5pbWFsc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYW5pbWFsc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpBbmltYWxzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL2FuaW1hbHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotc2tlbGV0b25zXCIsIHtcclxuICAgICAgdXJsOiBcIi9za2VsZXRvbnNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6U2tlbGV0b25zQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL3NrZWxldG9ucy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1tb3ZpZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL21vdmllc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpNb3ZpZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvbW92aWVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJjaGFyYWRlc1wiLCB7XHJcbiAgICAgIHVybDogXCIvY2hhcmFkZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJDaGFyYWRlc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2NoYXJhZGVzLmh0bWxcIixcclxuICAgIH0pO1xyXG5cclxuICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoe1xyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIHJlcXVpcmVCYXNlOiBmYWxzZSxcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnV2ViU29ja2V0U3ZjJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICR0aW1lb3V0KSB7XHJcbiAgZnVuY3Rpb24gd2Vic29ja2V0SG9zdCgpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonKSB7XHJcbiAgICAgIHJldHVybiBcIndzczovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJ3czovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgY29ubmVjdGlvbjtcclxuICB2YXIgY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KHdlYnNvY2tldEhvc3QoKSk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY29ubmVjdGVkJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY2xvc2VkLiBSZWNvbm5lY3RpbmcuLi4nKTtcclxuICAgICAgJHRpbWVvdXQoY29ubmVjdCwgMTAwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlICsgXCIgLSBTdGF0ZTogXCIgKyBjb25uZWN0aW9uLnJlYWR5U3RhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBwYXlsb2FkID0gSlNPTi5wYXJzZShlLmRhdGEpO1xyXG4gICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3dzOicgKyBwYXlsb2FkLnRvcGljLCBwYXlsb2FkLmRhdGEpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICB0aGlzLnNlbmQgPSBmdW5jdGlvbiAodG9waWMsIGRhdGEpIHtcclxuICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoe3RvcGljOiB0b3BpYywgZGF0YTogZGF0YX0pO1xyXG4gICAgY29ubmVjdGlvbi5zZW5kKGpzb24pO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuY29ubmVjdCA9IGNvbm5lY3Q7XHJcblxyXG59KS5ydW4oZnVuY3Rpb24gKFdlYlNvY2tldFN2Yykge1xyXG4gIFdlYlNvY2tldFN2Yy5jb25uZWN0KCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQXBwQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBMYW5ndWFnZVN2YywgVXNlclN2Yykge1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCIlY1lvdSBzbmVha3kgYnVnZ2VyIVwiLFxyXG4gICAgXCJmb250OiAyZW0gc2Fucy1zZXJpZjsgY29sb3I6IERvZGdlckJsdWU7IHRleHQtc2hhZG93OiAycHggMCAwICM0NDQsIC0ycHggMCAwICM0NDQsIDAgMnB4IDAgIzQ0NCwgMCAtMnB4IDAgIzQ0NCwgMXB4IDFweCAjNDQ0LCAtMXB4IC0xcHggMCAjNDQ0LCAxcHggLTFweCAwICM0NDQsIC0xcHggMXB4IDAgIzQ0NDtcIixcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCJJJ20gZ2xhZCB5b3UncmUgY3VyaW91cyB3aGV0aGVyIHNvbWV0aGluZyBpcyBwb3BwaW5nIHVwIGluIGhlcmUuIEknbSBhIGJpdCBvZiBhIHN0aWNrbGVyIHdoZW4gaXQgY29tZXMgdG8gbWVzc2FnZXMgaW4gdGhlIGNvbnNvbGUgc28gSSB0cnkgdG8gbWFrZSBzdXJlIG9ubHkgdGhpbmdzIEkgd2FudCBhcmUgdmlzaWJsZS4gVGhhdCBiZWluZyBzYWlkLCBpZiB0aGVyZSBpcyBhIGJpZyBlcnJvciBoZXJlLCBJIHdvdWxkIHJlYWxseSBhcHByZWNpYXRlIHlvdSB0ZWxsaW5nIG1lIHNvIEkgY2FuIGdldCByaWQgb2YgaXQhXCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiVGhlIGNvZGUgZm9yIG15IHJlc3VtZSBpcyBob3N0ZWQgb24gR2l0aHViIGlmIHlvdSByZWFsbHkgd2FudCB0byBnbyBpbnRvIGFsbCB0aGlzISA9PiBodHRwczovL2dpdGh1Yi5jb20vRmxhbmRlcnNCdXJnZXIvcmVzdW1lXCIsXHJcbiAgKTtcclxuXHJcbiAgLypcclxuICAgICQoZG9jdW1lbnQpLmJpbmQoXCJrZXl1cCBrZXlkb3duXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBpZihlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09IDgwKXtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAqL1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICAkKHdpbmRvdykubG9hZChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLmxvYWRpbmdcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAkKFwiLmNvbnRlbnRcIikuZmFkZUluKFwic2xvd1wiKTtcclxuICB9KTtcclxuXHJcbiAgJChcIi5jaGVja2JveC1tZW51XCIpLm9uKFwiY2hhbmdlXCIsIFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoXCJsaVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiLCB0aGlzLmNoZWNrZWQpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmFsbG93LWZvY3VzXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUudGhlbWVDb3VudGVyID0gNjtcclxuICAkc2NvcGUudG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICRzY29wZS55ZWFyID0gJHNjb3BlLnRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgJHNjb3BlLnJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xyXG5cclxuICAkc2NvcGUuZmxpcFRoZW1lID0gKCkgPT4ge1xyXG4gICAgJChcIi5sb2FkaW5nXCIpLnNob3coKTtcclxuICAgICQoXCIuY29udGVudFwiKS5oaWRlKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIi5sb2FkaW5nXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgICAkKFwiLmNvbnRlbnRcIikuZmFkZUluKFwic2xvd1wiKTtcclxuICAgIH0sIDgwMCk7XHJcbiAgICAkc2NvcGUudGhlbWVDb3VudGVyID0gJHNjb3BlLnRoZW1lQ291bnRlciA8IDYgPyAkc2NvcGUudGhlbWVDb3VudGVyICsgMSA6ICgkc2NvcGUudGhlbWVDb3VudGVyID0gMSk7XHJcbiAgfTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL3NraWxscy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuc2tpbGxzID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKHNraWxsKSB7XHJcbiAgICAgIHJldHVybiBza2lsbC5lbmFibGVkO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9ob2JiaWVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5ob2JiaWVzID0gZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2V4cGVyaWVuY2UuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmpvYnMgPSBkYXRhO1xyXG4gICAgJHNjb3BlLmpvYnMuZm9yRWFjaCgoam9iKSA9PiB7XHJcbiAgICAgIGpvYi5zdGFydERhdGUgPSBuZXcgRGF0ZShqb2Iuc3RhcnREYXRlKTtcclxuICAgICAgaWYgKGpvYi5lbmREYXRlKSBqb2IuZW5kRGF0ZSA9IG5ldyBEYXRlKGpvYi5lbmREYXRlKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvY2hhcmFkZXMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmNoYXJhZGVzID0gZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmdldFRpbWVTcGFuID0gKGpvYikgPT4ge1xyXG4gICAgcmV0dXJuIGpvYi5zdGFydERhdGUuZ2V0RnVsbFllYXIoKSArIChqb2IuZW5kRGF0ZSA/IFwiIC0gXCIgKyBqb2IuZW5kRGF0ZS5nZXRGdWxsWWVhcigpIDogXCIgLSBUb2RheVwiKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUubGFuZ3VhZ2VzID0gTGFuZ3VhZ2VTdmMubGFuZ3VhZ2VzO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IExhbmd1YWdlU3ZjLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICRzY29wZS5zZWxlY3RMYW5ndWFnZSA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBMYW5ndWFnZVN2Yy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmhvdmVyZGl2ID0gKGUsIGRpdmlkKSA9PiB7XHJcbiAgICB2YXIgbGVmdCA9IGUuY2xpZW50WCArIFwicHhcIjtcclxuICAgIHZhciB0b3AgPSBlLmNsaWVudFkgKyAyMCArIFwicHhcIjtcclxuXHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2aWQpO1xyXG5cclxuICAgICQoXCIjXCIgKyBkaXZpZCkuY3NzKFwibGVmdFwiLCBsZWZ0KTtcclxuICAgICQoXCIjXCIgKyBkaXZpZCkuY3NzKFwidG9wXCIsIHRvcCk7XHJcblxyXG4gICAgJChcIiNcIiArIGRpdmlkKS50b2dnbGUoKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS51c2VyKSB7XHJcbiAgICBVc2VyU3ZjLmxvZ2luKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgbG9naW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2dpblwiLCAoXywgdXNlcikgPT4ge1xyXG4gICAgbG9naW4odXNlcik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcclxuICAgIGlmICghJHNjb3BlLmxvZ2dlZEluKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlciA9IHVzZXIuX2lkO1xyXG4gICAgICAkc2NvcGUubG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgICAkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlID0gbmV3IERhdGUoJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSk7XHJcbiAgICAgICRzY29wZS4kYnJvYWRjYXN0KFwibG9naW5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLiRvbihcInVwZGF0ZVwiLCAoXywgdXNlcikgPT4ge1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUgPSBuZXcgRGF0ZSgkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlKTtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIiNsb2FkaW5nLWljb25cIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbihcImxvYWRpbmdcIiwgKF8sIHVzZXIpID0+IHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICQoXCIjbG9hZGluZy1pY29uXCIpLnNob3coKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbihcImxvYWRlZFwiLCAoXywgdXNlcikgPT4ge1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUubG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgZmlyZWJhc2VcclxuICAgICAgLmF1dGgoKVxyXG4gICAgICAuc2lnbk91dCgpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyBTaWduLW91dCBzdWNjZXNzZnVsLlxyXG4gICAgICAgICRzY29wZS5sb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdChcImxvZ291dFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vIEFuIGVycm9yIGhhcHBlbmVkLlxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZm9ybWF0RGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICBjb25zdCBtb250aHMgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XHJcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICByZXR1cm4gZGF0ZS5nZXREYXRlKCkgKyBcIi1cIiArIG1vbnRoc1tkYXRlLmdldE1vbnRoKCldICsgXCItXCIgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJBc3Rlcm9pZHNDdHJsXCIsIGZ1bmN0aW9uICgkbG9jYXRpb24sICRzY29wZSwgR2FtZVN2Yykge1xyXG4gICRzY29wZS5hbm5vdW5jZSA9IGZhbHNlO1xyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xyXG4gIGlmICghY2FudmFzKSB7XHJcbiAgICAkbG9jYXRpb24ucGF0aChcIi9ob21lXCIpO1xyXG4gICAgcmV0dXJuIGFsZXJ0KFwiXCIpO1xyXG4gIH1cclxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIGlmICghY3R4KSB7XHJcbiAgICByZXR1cm4gJGxvY2F0aW9uLnBhdGgoXCIvaG9tZVwiKTtcclxuICB9XHJcbiAgY3R4LmZvbnQgPSBcIjMwcHggQ29taWMgU2FucyBNU1wiO1xyXG4gIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGxldCBzaG90cyA9IHt9O1xyXG4gIGNvbnN0IGFzdGVyb2lkcyA9IHt9O1xyXG4gIGNvbnN0IHBvd2VydXBzID0ge307XHJcbiAgY29uc3QgZXhwbG9zaW9ucyA9IHt9O1xyXG4gIGNvbnN0IG1hcCA9IHt9O1xyXG4gIGNvbnN0IHNwYWNlcGljcyA9IDEwO1xyXG4gIGxldCBzcGFjZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwYWNlcGljcyk7XHJcbiAgY29uc3QgcG93ZXJ1cFR5cGVzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInNwZWVkXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJNYXggU3BlZWQg4oenXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICAgIHNpemU6IFsxNCwgMzVdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5tYXhTcGVlZCArPSAxMDA7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImNvb2xkb3duXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJDb29sZG93biDih6lcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDMsXHJcbiAgICAgICAgc2l6ZTogWzE3LCAxN10sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5jb29sZG93blRpbWUgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInJhbmdlXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJGaXJpbmcgUmFuZ2Ug4oenXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogNCxcclxuICAgICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICAgIHNpemU6IFszMCwgOF0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnJhbmdlICs9IDU7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInNoaWVsZFwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiU2hpZWxkXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogNSxcclxuICAgICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICAgIHNpemU6IFsxOSwgMTldLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5zaGllbGQgPSB0cnVlO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJudWtlXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJOdWtlXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICAgIHNpemU6IFsxNSwgMTVdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgICAgICBhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgICAgfSxcclxuICAgIH0gLypcclxuICAgICdzaWRlX2Nhbm5vbnMnLFxyXG4gICAgJ2xhc2VyJyxcclxuICAgICdzaGllbGQnLFxyXG4gICAgJ2xpZmUnLFxyXG4gICAgJ21pc3NpbGVzJyxcclxuICAgICdudWtlJ1xyXG4gICAgKi8sXHJcbiAgXTtcclxuICBwb3dlcnVwVHlwZXMuZm9yRWFjaChmdW5jdGlvbiAocG93ZXJ1cCwgaSwgYXJyYXkpIHtcclxuICAgIGFycmF5W2ldLmltZy5zcmMgPSBcImFzdGVyb2lkcy9cIiArIHBvd2VydXAubmFtZSArIFwiLnBuZ1wiO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgZXhwbG9zaW9uSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBleHBsb3Npb25JbWFnZS5zcmMgPSBcImFzdGVyb2lkcy9leHBsb3Npb24ucG5nXCI7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJrZXlkb3duXCIsXHJcbiAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBtYXBbZS5rZXlDb2RlIHx8IGUud2hpY2hdID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICB0cnVlLFxyXG4gICk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImtleXVwXCIsXHJcbiAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBtYXBbZS5rZXlDb2RlIHx8IGUud2hpY2hdID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdHJ1ZSxcclxuICApO1xyXG5cclxuICAkc2NvcGUuaGlnaHNjb3JlID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gZXZhbHVhdGVLZXlzKCkge1xyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgLy9TcGFjZVxyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zaG9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM3XSkge1xyXG4gICAgICAgIC8vTGVmdCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiA9IDM2MDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uIC09IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzldKSB7XHJcbiAgICAgICAgLy9SaWdodCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDM2MCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uICs9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzhdKSB7XHJcbiAgICAgICAgLy9VcCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPD0gc3BhY2VzaGlwLm1heFNwZWVkKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgKz0gNTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzQwXSkge1xyXG4gICAgICAgIC8vRG93biBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgLT0gMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgc3RhcnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU3BhY2VzaGlwKCkge1xyXG4gICAgdGhpcy53aWR0aCA9IDUwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSA1MDtcclxuICAgIHRoaXMuc2hpZWxkID0gZmFsc2U7XHJcbiAgICB0aGlzLnJhbmdlID0gODA7XHJcbiAgICB0aGlzLmNhbm5vbiA9IHtcclxuICAgICAgeDogdGhpcy53aWR0aCAvIDIgLSA0LjUsXHJcbiAgICAgIHk6IHRoaXMuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0ICogMC4wNzgxMjUsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb29sZG93biA9IDA7XHJcbiAgICB0aGlzLmNvb2xkb3duVGltZSA9IDIwO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtjYW52YXMud2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgLyAyXTtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBcImFzdGVyb2lkcy9zcGFjZXNoaXAucG5nXCI7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMubWF4U3BlZWQgPSAxMDAwO1xyXG4gICAgdGhpcy5hbmdsZSA9IDA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuXHJcbiAgICB0aGlzLnNob290ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmNvb2xkb3duID0gdGhpcy5jb29sZG93blRpbWU7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIHNob3RzW2lkXSA9IG5ldyBTaG90KGlkLCB0aGlzKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodGhpcy5zaGllbGQpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmFyYyh0aGlzLnBvc2l0aW9uWzBdICsgdGhpcy53aWR0aCAvIDIsIHRoaXMucG9zaXRpb25bMV0gKyB0aGlzLmhlaWdodCAvIDIsIDMwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDM1LCAyMzcsIDg2LCAwLjUpXCI7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2IoNjYsIDE2OCwgMzYsIDAuOClcIjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICAgIHZhciBhc3Rlcm9pZCA9IGFzdGVyb2lkc1tpXTtcclxuICAgICAgICBpZiAoaGl0KGFzdGVyb2lkLCB0aGlzKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2hpZWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpZWxkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGFzdGVyb2lkLmV4cGxvZGUoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnYW1lT3ZlcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFuZ2xlID0gdGhpcy5yb3RhdGlvbjtcclxuICAgICAgaWYgKHRoaXMuY29vbGRvd24gPiAwKSB7XHJcbiAgICAgICAgdGhpcy5jb29sZG93bi0tO1xyXG4gICAgICB9XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU2hvdChpZCwgc3BhY2VzaGlwKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW1xyXG4gICAgICBzcGFjZXNoaXAucG9zaXRpb25bMF0gK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueCArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi54ICogTWF0aC5jb3MoKChzcGFjZXNoaXAucm90YXRpb24gLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCksXHJcbiAgICAgIHNwYWNlc2hpcC5wb3NpdGlvblsxXSArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi55ICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnkgKiBNYXRoLnNpbigoKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKSxcclxuICAgIF07XHJcbiAgICB0aGlzLndpZHRoID0gOTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMTU7XHJcbiAgICB0aGlzLmFuZ2xlID0gc3BhY2VzaGlwLmFuZ2xlO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IHNwYWNlc2hpcC5yb3RhdGlvbjtcclxuICAgIHRoaXMuc3BlZWQgPSBzcGFjZXNoaXAuc3BlZWQgKyA1MDA7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gc3BhY2VzaGlwLnJhbmdlO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL3Nob3QucG5nXCI7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQXN0ZXJvaWQoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMud2lkdGggPSBNYXRoLnJhbmRvbSgpICogNTAgKyAyMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy53aWR0aDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSBNYXRoLnJhbmRvbSgpICogNiAtIDM7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDMwMCArIDI7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvYXN0ZXJvaWRcIiArIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA2KSArIDEpICsgXCIucG5nXCI7XHJcblxyXG4gICAgdGhpcy5leHBsb2RlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBleHBsb3Npb25zW3RoaXMuaWRdID0gbmV3IEV4cGxvc2lvbih0aGlzKTtcclxuICAgICAgcmV0dXJuIGRlbGV0ZSBhc3Rlcm9pZHNbdGhpcy5pZF07XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XHJcbiAgICAgIGlmICh0aGlzLnJvdGF0aW9uID4gMzYwKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMucm90YXRpb24gLSAzNjA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5yb3RhdGlvbiA8IDApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMzYwICsgdGhpcy5yb3RhdGlvbjtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgICAgdmFyIHNob3QgPSBzaG90c1tpXTtcclxuICAgICAgICBpZiAoaGl0KHNob3QsIHRoaXMpKSB7XHJcbiAgICAgICAgICB0aGlzLmV4cGxvZGUoKTtcclxuICAgICAgICAgIHZhciBwb2ludHMgPSBNYXRoLmZsb29yKChzaG90LnNwZWVkIC0gNTAwKSAvIDEwICsgNzAgLSB0aGlzLndpZHRoKTtcclxuICAgICAgICAgIGlmIChNYXRoLmZsb29yKChwb2ludHMgKyAkc2NvcGUuc2NvcmUpIC8gMTAwKSA+IE1hdGguZmxvb3IoJHNjb3BlLnNjb3JlIC8gMTAwKSkge1xyXG4gICAgICAgICAgICBzcGF3blBvd2VydXAoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICRzY29wZS5zY29yZSArPSBwb2ludHM7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRXhwbG9zaW9uKG9iamVjdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtvYmplY3QucG9zaXRpb25bMF0sIG9iamVjdC5wb3NpdGlvblsxXV07XHJcbiAgICB0aGlzLndpZHRoID0gb2JqZWN0LndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvYmplY3QuaGVpZ2h0O1xyXG4gICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMuY3ljbGUgPSB7XHJcbiAgICAgIHJvd3M6IDYsXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHNpemU6IFsyNTYsIDI1Nl0sXHJcbiAgICAgIGk6IDAsXHJcbiAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgIH07XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gNDc7XHJcbiAgICB0aGlzLmltZyA9IGV4cGxvc2lvbkltYWdlO1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAodGhpcy5jeWNsZS5kaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmN5Y2xlLmkrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN5Y2xlLmktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFBvd2VydXAoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucG93ZXJ1cCA9IHBvd2VydXBUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3dlcnVwVHlwZXMubGVuZ3RoKV07XHJcbiAgICB0aGlzLmN5Y2xlID0gdGhpcy5wb3dlcnVwLmN5Y2xlO1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDEwMDA7XHJcbiAgICBpZiAodGhpcy5jeWNsZS5zaXplWzFdID4gdGhpcy5jeWNsZS5zaXplWzBdKSB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gNDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSBNYXRoLnJvdW5kKCh0aGlzLmhlaWdodCAvIHRoaXMuY3ljbGUuc2l6ZVsxXSkgKiB0aGlzLmN5Y2xlLnNpemVbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53aWR0aCA9IDQwO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IE1hdGgucm91bmQoKHRoaXMud2lkdGggLyB0aGlzLmN5Y2xlLnNpemVbMF0pICogdGhpcy5jeWNsZS5zaXplWzFdKTtcclxuICAgIH1cclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuaW1nID0gdGhpcy5wb3dlcnVwLmltZztcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAxNTAgKyA1MDtcclxuICAgIHZhciBkZWxheSA9IDU7XHJcbiAgICB0aGlzLm1vdmUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gZGVsZXRlIHBvd2VydXBzW3RoaXMuaWRdO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChoaXQoc3BhY2VzaGlwLCB0aGlzKSkge1xyXG4gICAgICAgICRzY29wZS5hbm5vdW5jZSA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLmFubm91bmNlbWVudCA9IHRoaXMucG93ZXJ1cC5hbm5vdW5jZW1lbnQ7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgdGhpcy5wb3dlcnVwLmFjdGl2YXRlKHNwYWNlc2hpcCk7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBwb3dlcnVwc1t0aGlzLmlkXTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICAgIGlmIChkZWxheSA8PSAwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLmkrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGF5ID0gNTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWxheS0tO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZShvYmplY3QpIHtcclxuICAgIG9iamVjdC5wb3NpdGlvblswXSArPSAob2JqZWN0LnNwZWVkIC8gMTAwKSAqIE1hdGguY29zKCgob2JqZWN0LmFuZ2xlIC0gOTApICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgb2JqZWN0LnBvc2l0aW9uWzFdICs9IChvYmplY3Quc3BlZWQgLyAxMDApICogTWF0aC5zaW4oKChvYmplY3QuYW5nbGUgLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBpZiAob2JqZWN0LnBvc2l0aW9uWzBdID4gY2FudmFzLndpZHRoKSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IC1vYmplY3Qud2lkdGg7XHJcbiAgICB9IGVsc2UgaWYgKG9iamVjdC5wb3NpdGlvblswXSA8IC1vYmplY3Qud2lkdGgpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzBdID0gY2FudmFzLndpZHRoO1xyXG4gICAgfVxyXG4gICAgaWYgKG9iamVjdC5wb3NpdGlvblsxXSA+IGNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzFdID0gLW9iamVjdC5oZWlnaHQ7XHJcbiAgICB9IGVsc2UgaWYgKG9iamVjdC5wb3NpdGlvblsxXSA8IC1vYmplY3QuaGVpZ2h0KSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblsxXSA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShvYmplY3QucG9zaXRpb25bMF0sIG9iamVjdC5wb3NpdGlvblsxXSk7XHJcbiAgICBjdHgudHJhbnNsYXRlKG9iamVjdC53aWR0aCAvIDIsIG9iamVjdC5oZWlnaHQgLyAyKTtcclxuICAgIGN0eC5yb3RhdGUoKG9iamVjdC5yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIGlmIChvYmplY3QuY3ljbGUpIHtcclxuICAgICAgdmFyIGNvbHVtbiA9IG9iamVjdC5jeWNsZS5pICUgb2JqZWN0LmN5Y2xlLmNvbHVtbnM7XHJcbiAgICAgIHZhciByb3cgPSBNYXRoLmZsb29yKG9iamVjdC5jeWNsZS5pIC8gb2JqZWN0LmN5Y2xlLmNvbHVtbnMpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIG9iamVjdC5pbWcsXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMF0gKiBjb2x1bW4sXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMV0gKiByb3csXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMF0sXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMV0sXHJcbiAgICAgICAgLW9iamVjdC53aWR0aCAvIDIsXHJcbiAgICAgICAgLW9iamVjdC5oZWlnaHQgLyAyLFxyXG4gICAgICAgIG9iamVjdC53aWR0aCxcclxuICAgICAgICBvYmplY3QuaGVpZ2h0LFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKG9iamVjdC5jeWNsZS5pIDw9IDApIHtcclxuICAgICAgICBvYmplY3QuY3ljbGUuaSA9IDA7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAob2JqZWN0LmN5Y2xlLmkgPj0gb2JqZWN0LmN5Y2xlLmNvbHVtbnMgKiBvYmplY3QuY3ljbGUucm93cykge1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5pID0gb2JqZWN0LmN5Y2xlLmNvbHVtbnMgKiBvYmplY3QuY3ljbGUucm93cyAtIDE7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdHguZHJhd0ltYWdlKG9iamVjdC5pbWcsIC1vYmplY3Qud2lkdGggLyAyLCAtb2JqZWN0LmhlaWdodCAvIDIsIG9iamVjdC53aWR0aCwgb2JqZWN0LmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHNwYWNlc2hpcDtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAkc2NvcGUucGxheWluZyA9IHRydWU7XHJcbiAgICAkc2NvcGUuc2NvcmUgPSAwO1xyXG4gICAgc3BhY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFjZXBpY3MpO1xyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgc3BhY2VzaGlwID0gbmV3IFNwYWNlc2hpcCgpO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYXduQXN0ZXJvaWRzKDUpO1xyXG4gICAgYXV0b1NwYXduKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRFbnRyeVBvc2l0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBncmlkWCA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIGdyaWRZID0gTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICB2YXIgeCxcclxuICAgICAgeSA9IDA7XHJcbiAgICBpZiAoZ3JpZFggPj0gMSkge1xyXG4gICAgICB4ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgaWYgKHkgPj0gMSkge1xyXG4gICAgICAgIHkgPSAwIC0gaGVpZ2h0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHkgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIGlmIChncmlkWSA+PSAxKSB7XHJcbiAgICAgICAgeCA9IDAgLSB3aWR0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB4ID0gY2FudmFzLndpZHRoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3gsIHldO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGl0KG9iamVjdDEsIG9iamVjdDIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIG9iamVjdDEucG9zaXRpb25bMF0gPCBvYmplY3QyLnBvc2l0aW9uWzBdICsgb2JqZWN0Mi53aWR0aCAmJlxyXG4gICAgICBvYmplY3QyLnBvc2l0aW9uWzBdIDwgb2JqZWN0MS5wb3NpdGlvblswXSArIG9iamVjdDEud2lkdGggJiZcclxuICAgICAgb2JqZWN0MS5wb3NpdGlvblsxXSA8IG9iamVjdDIucG9zaXRpb25bMV0gKyBvYmplY3QyLmhlaWdodCAmJlxyXG4gICAgICBvYmplY3QyLnBvc2l0aW9uWzFdIDwgb2JqZWN0MS5wb3NpdGlvblsxXSArIG9iamVjdDEuaGVpZ2h0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXV0b1NwYXduKCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGFzdGVyb2lkcykubGVuZ3RoIDwgMjAwKSB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIGFzdGVyb2lkc1tpZF0gPSBuZXcgQXN0ZXJvaWQoaWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGF1dG9TcGF3bigpO1xyXG4gICAgICB9LCBzcGF3bkludGVydmFsKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25JbnRlcnZhbCgpIHtcclxuICAgIGlmICgkc2NvcGUuc2NvcmUgPCAxMDAwKSB7XHJcbiAgICAgIHJldHVybiAxMDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCAyMDAwKSB7XHJcbiAgICAgIHJldHVybiA5MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDMwMDApIHtcclxuICAgICAgcmV0dXJuIDgwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNDAwMCkge1xyXG4gICAgICByZXR1cm4gNzAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA1MDAwKSB7XHJcbiAgICAgIHJldHVybiA2MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDYwMDApIHtcclxuICAgICAgcmV0dXJuIDUwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNzAwMCkge1xyXG4gICAgICByZXR1cm4gNDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA4MDAwKSB7XHJcbiAgICAgIHJldHVybiAzMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25Bc3Rlcm9pZHMoYW1vdW50KSB7XHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICBkbyB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIGFzdGVyb2lkc1tpZF0gPSBuZXcgQXN0ZXJvaWQoaWQpO1xyXG4gICAgfSB3aGlsZSAoaSsrIDw9IGFtb3VudCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3blBvd2VydXAoKSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMocG93ZXJ1cHMpLmxlbmd0aCA8IDMpIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgcG93ZXJ1cHNbaWRdID0gbmV3IFBvd2VydXAoaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XHJcbiAgICAkc2NvcGUucGxheWluZyA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgIH1cclxuICAgIHNob3RzID0ge307XHJcbiAgICBpZiAoJHNjb3BlLmxvZ2dlZEluKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuaGlnaHNjb3JlLmFzdGVyb2lkcyA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzID0gJHNjb3BlLnNjb3JlO1xyXG4gICAgICAgIEdhbWVTdmMuc2V0SGlnaHNjb3JlKFwiYXN0ZXJvaWRzXCIsICRzY29wZS5jdXJyZW50VXNlci5faWQsICRzY29wZS5zY29yZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaHNjb3JlIDwgJHNjb3BlLnNjb3JlKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hzY29yZSA9ICRzY29wZS5zY29yZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU3RhcnQgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgYW5kXHJcbiAgLy8gZHJhdyBjYW52YXMuXHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgICAvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG4gICAgLy8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcbiAgICAvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcbiAgICAvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG4gICAgcmVzaXplQ2FudmFzKCk7XHJcbiAgfVxyXG4gIC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuICAvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuICAvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDE7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1MCA6IDU5KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemUoKTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcblxyXG4gIHZhciB0YWxseSA9IDA7XHJcbiAgdmFyIGRpcmVjdGlvbiA9IHRydWU7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgIGlmIChzaG90c1tpXS5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIHNob3RzW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3RzW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIHBvd2VydXBzKSB7XHJcbiAgICAgIHBvd2VydXBzW2ldLm1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBleHBsb3Npb25zKSB7XHJcbiAgICAgIGlmIChleHBsb3Npb25zW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgZXhwbG9zaW9uc1tpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBleHBsb3Npb25zW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZhbHVhdGVLZXlzKCk7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgc3BhY2VzaGlwLm1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBjYW52YXMud2lkdGgsIDApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwXCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMC4yNVwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjAuNVwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjAuNzVcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIxLjBcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICAgIGN0eC5mb250ID0gXCI2MHB4IE1vbm90b25cIjtcclxuICAgICAgY3R4LmZpbGxUZXh0KFwiQXN0ZXJvaWRzXCIsIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoXCJBc3Rlcm9pZHNcIikud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGN0eC5mb250ID0gXCIyMHB4IEFsZHJpY2hcIjtcclxuICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgIFwiUHJlc3Mgc3BhY2UgdG8gc3RhcnRcIixcclxuICAgICAgICBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KFwiUHJlc3Mgc3BhY2UgdG8gc3RhcnRcIikud2lkdGggLyAyLFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyICsgMjAsXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICBcIkRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlclwiLFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoXCJEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5IExhdXJlbnQgRGViYWNrZXJcIikud2lkdGggLyAyLFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgLSAzMCxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRhbGx5ICs9IGRpcmVjdGlvbiA/IDEgOiAtMTtcclxuICAgIGlmICh0YWxseSA+IDEwMCkge1xyXG4gICAgICB0YWxseSA9IDEwMDtcclxuICAgICAgZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHRhbGx5IDwgMCkge1xyXG4gICAgICB0YWxseSA9IDA7XHJcbiAgICAgIGRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuc3BhY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJhc3Rlcm9pZHMvc3BhY2UnICsgc3BhY2UgKyAnLmpwZ1wiKScsXHJcbiAgICB9O1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQnViYmxlc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1YmJsZXMtcGFnZVwiKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICB2YXIgYnViYmxlcyA9IFtdO1xyXG4gIHZhciBjb2xvcnMgPSBbXCIjZmZjMzAwXCIsIFwiI2ZmNTczM1wiLCBcIiNjNzAwMzlcIiwgXCIjOTAwYzNlXCIsIFwiIzU3MTg0NVwiXTtcclxuXHJcbiAgZnVuY3Rpb24gQnViYmxlKCkge1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDA7XHJcbiAgICB0aGlzLnJhZGl1cyA9IDE7XHJcbiAgICB0aGlzLmV4cGFuZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICB0aGlzLmNpcmN1bWZlcmVuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA1MCkgKyA1O1xyXG4gICAgdGhpcy5tYXhSYWRpdXMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyMDApICsgMjA7XHJcbiAgICB0aGlzLnggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGgpO1xyXG4gICAgdGhpcy55ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodCk7XHJcbiAgICB0aGlzLnZ4ID0gTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTE7XHJcbiAgICB0aGlzLnZ5ID0gTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTE7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgYnViYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChidWJibGUpIHtcclxuICAgICAgdmFyIGNvbG9yID0gY29sb3JzW01hdGgucm91bmQoKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzKSAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKGJ1YmJsZS54LCBidWJibGUueSwgYnViYmxlLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3JzW01hdGgucm91bmQoKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzKSAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3JzW2NvbG9ycy5sZW5ndGggLSBNYXRoLnJvdW5kKChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cykgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSAoYnViYmxlLmNpcmN1bWZlcmVuY2UgKiBidWJibGUucmFkaXVzKSAvIGJ1YmJsZS5tYXhSYWRpdXM7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmlsdGVyQnViYmxlcygpIHtcclxuICAgIGJ1YmJsZXMucHVzaChuZXcgQnViYmxlKCkpO1xyXG4gICAgYnViYmxlcyA9IGJ1YmJsZXMuZmlsdGVyKGZ1bmN0aW9uIChidWJibGUpIHtcclxuICAgICAgaWYgKGJ1YmJsZS5yYWRpdXMgPT09IGJ1YmJsZS5tYXhSYWRpdXMpIHtcclxuICAgICAgICBidWJibGUuZXhwYW5kaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgYnViYmxlLnggKz0gYnViYmxlLnZ4ICogYnViYmxlLnNwZWVkO1xyXG4gICAgICBidWJibGUueSArPSBidWJibGUudnkgKiBidWJibGUuc3BlZWQ7XHJcbiAgICAgIGJ1YmJsZS5yYWRpdXMgKz0gYnViYmxlLmV4cGFuZGluZyA/IDEgOiAtMTtcclxuICAgICAgcmV0dXJuIGJ1YmJsZS5yYWRpdXMgPiAwO1xyXG4gICAgfSk7XHJcbiAgICBkcmF3KCk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmlsdGVyQnViYmxlcyk7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmlsdGVyQnViYmxlcyk7XHJcblxyXG4gIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBTdGFydCBsaXN0ZW5pbmcgdG8gcmVzaXplIGV2ZW50cyBhbmRcclxuICAgIC8vIGRyYXcgY2FudmFzLlxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgICAgIC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcbiAgICAgIC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG4gICAgICAvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuICAgICAgLy8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuICAgICAgcmVzaXplQ2FudmFzKCk7XHJcbiAgICB9XHJcbiAgICAvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcbiAgICAvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuICAgIC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG4gICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTUgOiA1Nik7XHJcbiAgICB9XHJcbiAgfSkoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJDaGFyYWRlc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gICRzY29wZS5zZWxlY3RXb3JkID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAkc2NvcGUud29yZCA9ICRzY29wZS5jaGFyYWRlc1tjYXRlZ29yeV1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogJHNjb3BlLmNoYXJhZGVzW2NhdGVnb3J5XS5sZW5ndGgpXTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkNvbnRhY3RDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEVtYWlsU3ZjKSB7XHJcbiAgJHNjb3BlLm9wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU3BhbVwiLFxyXG4gICAgICB0ZXh0OiBcIkkgYW0gYSBzcGFtIGJvdCBhbmQgYXV0b21hdGljYWxseSBjaGVjayB0aGUgZmlyc3Qgb3B0aW9uIEkgZmluZCFcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiT3Bwb3J0dW5pdHlcIixcclxuICAgICAgdGV4dDogXCJZb3Ugc2VlbSB0byBoYXZlIHRoZSBza2lsbHMgSSBzZWVrLCBJJ2QgbGlrZSB0byB0YWxrIGFib3V0IHNvbWUgb3Bwb3J0dW5pdGllcy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUmVzdW1lXCIsXHJcbiAgICAgIHRleHQ6IFwiSSBkaWcgdGhlIHJlc3VtZSwgaG93IGRpZCB5b3UgbWFrZSBpdD9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiT3RoZXJcIixcclxuICAgICAgdGV4dDogXCJTdW10aW4gZWxzZSFcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgJHNjb3BlLmNvbnRhY3QgPSB7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBwaG9uZTogXCJcIixcclxuICAgIGFib3V0OiBcIlwiLFxyXG4gICAgbWVzc2FnZTogXCJcIixcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS5zZW5kaW5nID0gdHJ1ZTtcclxuICAgIEVtYWlsU3ZjLnNlbmQoe1xyXG4gICAgICBlbWFpbDogJHNjb3BlLmNvbnRhY3QuZW1haWwsXHJcbiAgICAgIG5hbWU6ICRzY29wZS5jb250YWN0Lm5hbWUsXHJcbiAgICAgIHBob25lOiAkc2NvcGUuY29udGFjdC5waG9uZSxcclxuICAgICAgYWJvdXQ6ICRzY29wZS5jb250YWN0LmFib3V0LFxyXG4gICAgICBtZXNzYWdlOiAkc2NvcGUuY29udGFjdC5tZXNzYWdlLFxyXG4gICAgfSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbnQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTUy4gc3RhdHVzPSVkLCB0ZXh0PSVzXCIsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UudGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZBSUxFRC4gZXJyb3I9XCIsIGVycik7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0V4cGVyaWVuY2VDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUuZ2V0U2tpbGwgPSBmdW5jdGlvbihza2lsbENvZGUpIHtcclxuICAgIGlmICghJHNjb3BlLnNraWxscykgcmV0dXJuO1xyXG4gICAgcmV0dXJuICRzY29wZS5za2lsbHMuZmluZChmdW5jdGlvbihza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuY29kZSA9PT0gc2tpbGxDb2RlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0hvYmJpZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xyXG5cclxuICAkc2NvcGUuaG9iYnlTZWxlY3RvclZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgJC5nZXRKU09OKCdodHRwczovL3d3dy5yZWRkaXQuY29tL3VzZXIvYmVsZ29jYW5hZGlhbi9hYm91dC8uanNvbicsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkSG9iYnkgPSAkc2NvcGUuaG9iYmllc1swXTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdEhvYmJ5ID0gZnVuY3Rpb24gKGhvYmJ5KSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRIb2JieSA9IGhvYmJ5O1xyXG4gICAgJHNjb3BlLmhvYmJ5U2VsZWN0b3JWaXNpYmxlID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNob3dIb2JieSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICBpZiAoIXZhbHVlLmltYWdlcykgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHZhbHVlLmltYWdlcy5sZW5ndGggPiAwO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xlbW1pbmdzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEdhbWVTdmMpIHtcclxuXHJcbiAgdmFyIExFRlQgPSAwO1xyXG4gIHZhciBSSUdIVCA9IDE7XHJcblxyXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVtbWluZ3MtcGFnZScpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB2YXIgbGVtbWluZ3NJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGxlbW1pbmdzSW1hZ2Uuc3JjID0gJ2xlbW1pbmdzL2xlbW1pbmdzLnBuZyc7XHJcbiAgdmFyIGRlY29ySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBkZWNvckltYWdlLnNyYyA9ICdsZW1taW5ncy9kZWNvci5wbmcnO1xyXG4gIHZhciBsZW1taW5ncyA9IHt9O1xyXG4gIHZhciBzdGFydGVkID0gZmFsc2U7XHJcblxyXG4gIHZhciBhY3Rpb25zID0ge1xyXG4gICAgd2Fsazoge1xyXG4gICAgICBzdGFydDogWzAsIDBdLFxyXG4gICAgICBlbmQ6IFszMjAsIDIwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBodWg6IHtcclxuICAgICAgc3RhcnQ6IFszMjAsIDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDIwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZhbGw6IHtcclxuICAgICAgc3RhcnQ6IFswLCA4MF0sXHJcbiAgICAgIGVuZDogWzE2MCwgMTAwXSxcclxuICAgICAgY29sdW1uczogNCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBmbHk6IHtcclxuICAgICAgc3RhcnQ6IFsxNjAsIDgwXSxcclxuICAgICAgZW5kOiBbNDgwLCAxMTBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHN0b3A6IHtcclxuICAgICAgc3RhcnQ6IFswLCAxMjBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDE0MF0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGNsaW1iOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMTYwXSxcclxuICAgICAgZW5kOiBbNjQwLCAxODVdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBzdGFydDogWzAsIDIwMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMjI1XSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgcHVuY2g6IHtcclxuICAgICAgc3RhcnQ6IFswLCAyNDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDMwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAyLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGRpZzoge1xyXG4gICAgICBzdGFydDogWzAsIDMyMF0sXHJcbiAgICAgIGVuZDogWzMyMCwgMzQ1XSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gTGVtbWluZyhpbml0KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggLSAyMDApKSArIDEwMCwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNhbnZhcy5oZWlnaHQgLSAyMDApKSArIDEwMF07XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAyID4gMSA/IExFRlQgOiBSSUdIVDtcclxuICAgIHRoaXMuYWN0ID0gZnVuY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uc1thY3Rpb25dO1xyXG4gICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgdGhpcy53aWR0aCA9ICh0aGlzLmFjdGlvbi5lbmRbMF0gLSB0aGlzLmFjdGlvbi5zdGFydFswXSkgLyB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICB0aGlzLmhlaWdodCA9ICh0aGlzLmFjdGlvbi5lbmRbMV0gLSB0aGlzLmFjdGlvbi5zdGFydFsxXSAtICgyMCAqICh0aGlzLmFjdGlvbi5yb3dzIC0gMSkpKSAvIHRoaXMuYWN0aW9uLnJvd3M7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICB0aGlzLmFjdChpbml0KTtcclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25bMF0sIHRoaXMucG9zaXRpb25bMV0pO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IExFRlQpIHtcclxuICAgICAgICBjdHguc2NhbGUoLTEsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBjb2x1bW4gPSB0aGlzLmN5Y2xlICUgdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3IodGhpcy5jeWNsZSAvIHRoaXMuYWN0aW9uLmNvbHVtbnMpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKGxlbW1pbmdzSW1hZ2UsICh0aGlzLndpZHRoICogY29sdW1uKSArIHRoaXMuYWN0aW9uLnN0YXJ0WzBdLCAoKHRoaXMuaGVpZ2h0ICsgMjApICogcm93KSArIHRoaXMuYWN0aW9uLnN0YXJ0WzFdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgIGlmICh0aGlzLmFjdGlvbi5yZXZlcnNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgICBpZiAodGhpcy5jeWNsZSA+PSB0aGlzLmFjdGlvbi5jb2x1bW5zICogdGhpcy5hY3Rpb24ucm93cykge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICF0aGlzLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZS0tO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLS07XHJcbiAgICAgICAgICBpZiAodGhpcy5jeWNsZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSAhdGhpcy5hbmltYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPj0gdGhpcy5hY3Rpb24uY29sdW1ucyAqIHRoaXMuYWN0aW9uLnJvd3MpIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEhhdGNoKCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFsyMCwgMjBdO1xyXG4gICAgdGhpcy5hY3Rpb24gPSB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMF0sXHJcbiAgICAgIGVuZDogWzgyLCA1MDBdLFxyXG4gICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICByb3dzOiAxMFxyXG4gICAgfVxyXG4gICAgdGhpcy53aWR0aCA9ICh0aGlzLmFjdGlvbi5lbmRbMF0gLSB0aGlzLmFjdGlvbi5zdGFydFswXSkgLyB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAodGhpcy5hY3Rpb24uZW5kWzFdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMV0pIC8gdGhpcy5hY3Rpb24ucm93cztcclxuICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgdGhpcy5vcGVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSwgdGhpcy5wb3NpdGlvblsxXSk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIHZhciBjb2x1bW4sIHJvdztcclxuICAgICAgaWYgKHN0YXJ0ZWQpIHtcclxuICAgICAgICBjb2x1bW4gPSB0aGlzLmN5Y2xlICUgdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgICByb3cgPSBNYXRoLmZsb29yKHRoaXMuY3ljbGUgLyB0aGlzLmFjdGlvbi5jb2x1bW5zKTtcclxuICAgICAgICBpZiAodGhpcy5jeWNsZSA8IDkpIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29sdW1uID0gMDtcclxuICAgICAgICByb3cgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoZGVjb3JJbWFnZSwgKHRoaXMud2lkdGggKiBjb2x1bW4pICsgdGhpcy5hY3Rpb24uc3RhcnRbMF0sICh0aGlzLmhlaWdodCAqIHJvdykgKyB0aGlzLmFjdGlvbi5zdGFydFsxXSAtIDEsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduTGVtbWluZygpIHtcclxuICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2goZnVuY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgIGxlbW1pbmdzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCldID0gbmV3IExlbW1pbmcoYWN0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcblx0XHQvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuXHRcdC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHRcdC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcblx0XHRyZXNpemVDYW52YXMoKTtcclxuXHR9XHJcblx0Ly8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG5cdC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG5cdC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG5cdGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuXHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTAgOiAxMDUpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG4gIHNwYXduTGVtbWluZygpO1xyXG4gIGxldCBoYXRjaCA9IG5ldyBIYXRjaCgpXHJcbiAgZHJhdygpO1xyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgaWYgKCFzdGFydGVkKSB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmZvbnQ9JzQwcHggTW9ub3Rvbic7XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSAnMTAnO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XHJcbiAgICAgIGN0eC5yZWN0KDE1LCBjYW52YXMuaGVpZ2h0IC0gNDUsIGN0eC5tZWFzdXJlVGV4dCgnU3RhcnQnKS53aWR0aCArIDIwLCBjdHgubWVhc3VyZVRleHQoJ1N0YXJ0JykuaGVpZ2h0ICsgY2FudmFzLmhlaWdodCAtIDQ1KTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LmZpbGxUZXh0KCdTdGFydCcsIDIwLCBjYW52YXMuaGVpZ2h0IC0gNTApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yICh2YXIgaSBpbiBsZW1taW5ncykge1xyXG4gICAgICAgIGxlbW1pbmdzW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGF0Y2gub3BlbigpO1xyXG4gICAgc3RhcnRlZCA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBkcmF3KCk7XHJcbiAgICB9LCAxNTApO1xyXG4gIH1cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignTGlzdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBDYXRlZ29yaWVzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5zaG93Q2F0ZWdvcnkgPSB0cnVlO1xyXG5cclxuICAkc2NvcGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIENhdGVnb3JpZXNTdmMuZ2V0Q2F0ZWdvcmllcygpXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAkc2NvcGUudGFza3MgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuY2F0ZWdvcmllcykge1xyXG4gICAgICAgIGZvciAodmFyIGogaW4gJHNjb3BlLmNhdGVnb3JpZXNbaV0udGFza3MpIHtcclxuICAgICAgICAgICRzY29wZS50YXNrcy5wdXNoKHtcclxuICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiAkc2NvcGUuY2F0ZWdvcmllc1tpXS5uYW1lLFxyXG4gICAgICAgICAgICBcInRhc2tcIjogJHNjb3BlLmNhdGVnb3JpZXNbaV0udGFza3Nbal0ubmFtZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkgPSBmdW5jdGlvbihjYXRlZ29yeSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICRzY29wZS5zZWxlY3RlZFRhc2tzID0gW107XHJcbiAgICAkc2NvcGUuc2VsZWN0YWJsZVRhc2tzID0gW107XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzKSB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RhYmxlVGFza3MucHVzaCgkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuc2hvd0NhdGVnb3J5ID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuZW50ZXJlZENhdGVnb3J5ID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLm5ld0NhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUgPT09IGNhdGVnb3J5KSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5KCRzY29wZS5jYXRlZ29yaWVzW2ldKTtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5hZGRDYXRlZ29yeSh7XHJcbiAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5XHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgJHNjb3BlLmluaXQoKTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICRzY29wZS5lbnRlcmVkQ2F0ZWdvcnkgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUubmV3VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpIHtcclxuICAgICAgaWYgKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldLm5hbWUgPT09IHRhc2spIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdFRhc2soJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS5uYW1lLCB7XHJcbiAgICAgICAgdGFzazogdGFza1xyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcy5wdXNoKHsgbmFtZTogdGFzayB9KTtcclxuICAgICAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MubGVuZ3RoIC0gMV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICRzY29wZS5lbnRlcmVkVGFzayA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5yZW1vdmVUYXNrKCRzY29wZS5zZWxlY3RhYmxlVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLmVudGVyZWRUYXNrID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVuc2VsZWN0VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5yZW1vdmVUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCB0YXNrKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuYWRkVGFzayA9IGZ1bmN0aW9uKHRhc2tMaXN0LCB0YXNrKSB7XHJcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2spO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5yZW1vdmVUYXNrID0gZnVuY3Rpb24odGFza0xpc3QsIHRhc2spIHtcclxuICAgIHRhc2tMaXN0LnNwbGljZSh0YXNrTGlzdC5pbmRleE9mKHRhc2spLCAxKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc3RhcnRQcmlvcml0aXppbmcgPSBmdW5jdGlvbigpIHtcclxuICAgIENhdGVnb3JpZXNTdmMuc2V0UHJpb3JpdHlMaXN0KCRzY29wZS5zZWxlY3RlZFRhc2tzKTtcclxuICAgICRsb2NhdGlvbi5wYXRoKCcvcHJpb3JpdGl6ZScpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRRdWVzdGlvbnMgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghJHNjb3BlLnNlbGVjdGVkVGFza3MpIHJldHVybiAnJztcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAkc2NvcGUuc2VsZWN0ZWRUYXNrcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgIGNvdW50ZXIgKz0gaTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb3VudGVyO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG4gIC8vIEluaXRpYWxpemUgdGhlIEZpcmViYXNlVUkgV2lkZ2V0IHVzaW5nIEZpcmViYXNlLlxyXG4gIHZhciB1aSA9IG5ldyBmaXJlYmFzZXVpLmF1dGguQXV0aFVJKGZpcmViYXNlLmF1dGgoKSk7XHJcblxyXG4gICRzY29wZS4kb24oJ2xvZ291dCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdWkucmVzZXQoKTtcclxuICAgIHN0YXJ0VUkoKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRVSSgpIHtcclxuICAgIHVpLnN0YXJ0KCcjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lcicsIHtcclxuICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgc2lnbkluU3VjY2VzczogZnVuY3Rpb24gKGN1cnJlbnRVc2VyLCBjcmVkZW50aWFsLCByZWRpcmVjdFVybCkge1xyXG4gICAgICAgICAgLy8gTm8gcmVkaXJlY3QuXHJcbiAgICAgICAgICBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuYXV0aCgpXHJcbiAgICAgICAgICAgIC5jdXJyZW50VXNlci5nZXRJZFRva2VuKHRydWUpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChpZFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgVXNlclN2Yy5hdXRoZW50aWNhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGN1cnJlbnRVc2VyLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IGN1cnJlbnRVc2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGhvdG9VUkw6IGN1cnJlbnRVc2VyLnBob3RvVVJMLFxyXG4gICAgICAgICAgICAgICAgZW1haWxWZXJpZmllZDogY3VycmVudFVzZXIuZW1haWxWZXJpZmllZCxcclxuICAgICAgICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW4sXHJcbiAgICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNtb2RhbC1sb2dpbicpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgIC8vJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdCgncG9wdXAnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0xvZ2luIEZhaWxlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FsZXJ0LWRhbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gc2lnbkluRmFpbHVyZSBjYWxsYmFjayBtdXN0IGJlIHByb3ZpZGVkIHRvIGhhbmRsZSBtZXJnZSBjb25mbGljdHMgd2hpY2hcclxuICAgICAgICAvLyBvY2N1ciB3aGVuIGFuIGV4aXN0aW5nIGNyZWRlbnRpYWwgaXMgbGlua2VkIHRvIGFuIGFub255bW91cyB1c2VyLlxyXG4gICAgICAgIHNpZ25JbkZhaWx1cmU6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgLy8gRm9yIG1lcmdlIGNvbmZsaWN0cywgdGhlIGVycm9yLmNvZGUgd2lsbCBiZVxyXG4gICAgICAgICAgLy8gJ2ZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3QnLlxyXG4gICAgICAgICAgaWYgKGVycm9yLmNvZGUgIT0gJ2ZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFRoZSBjcmVkZW50aWFsIHRoZSB1c2VyIHRyaWVkIHRvIHNpZ24gaW4gd2l0aC5cclxuICAgICAgICAgIHZhciBjcmVkID0gZXJyb3IuY3JlZGVudGlhbDtcclxuICAgICAgICAgIC8vIENvcHkgZGF0YSBmcm9tIGFub255bW91cyB1c2VyIHRvIHBlcm1hbmVudCB1c2VyIGFuZCBkZWxldGUgYW5vbnltb3VzXHJcbiAgICAgICAgICAvLyB1c2VyLlxyXG4gICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAvLyBGaW5pc2ggc2lnbi1pbiBhZnRlciBkYXRhIGlzIGNvcGllZC5cclxuICAgICAgICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aENyZWRlbnRpYWwoY3JlZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1aVNob3duOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvLyBUaGUgd2lkZ2V0IGlzIHJlbmRlcmVkLlxyXG4gICAgICAgICAgLy8gSGlkZSB0aGUgbG9hZGVyLlxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2lnbkluU3VjY2Vzc1VybDogJy9ob21lJyxcclxuICAgICAgc2lnbkluT3B0aW9uczogW1xyXG4gICAgICAgIC8vZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICBdLFxyXG5cclxuICAgICAgLy8gV2lsbCB1c2UgcG9wdXAgZm9yIElEUCBQcm92aWRlcnMgc2lnbi1pbiBmbG93IGluc3RlYWQgb2YgdGhlIGRlZmF1bHQsIHJlZGlyZWN0LlxyXG4gICAgICBzaWduSW5GbG93OiAncG9wdXAnLFxyXG4gICAgICAvLyBPdGhlciBjb25maWcgb3B0aW9ucy4uLlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGFydFVJKCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRmaWx0ZXIsIFBvc3RzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5hZGRQb3N0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCRzY29wZS5wb3N0Qm9keSkge1xyXG4gICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xyXG4gICAgICAgIGJvZHk6ICRzY29wZS5wb3N0Qm9keVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUG9zdHNTdmMuZmV0Y2goKVxyXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLnBvc3RzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbignd3M6bmV3X3Bvc3QnLCBmdW5jdGlvbiAoXywgcG9zdCkge1xyXG4gICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIFBvc3RzU3ZjLmdldFBvc3QocG9zdClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RzLnVuc2hpZnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlByb2ZpbGVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG4gIGNvbnN0IGNvdW50cmllcyA9IFtcclxuICAgIHsgbmFtZTogXCJBbmRvcnJhXCIsIGZsYWc6IFwiZmxhZy1hZFwiLCB0aWRiaXQ6IFwiXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgQXJhYiBFbWlyYXRlc1wiLCBmbGFnOiBcImZsYWctYWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFmZ2hhbmlzdGFuXCIsIGZsYWc6IFwiZmxhZy1hZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLCBmbGFnOiBcImZsYWctYWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFuZ3VpbGxhXCIsIGZsYWc6IFwiZmxhZy1haVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWxiYW5pYVwiLCBmbGFnOiBcImZsYWctYWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFybWVuaWFcIiwgZmxhZzogXCJmbGFnLWFtXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbmdvbGFcIiwgZmxhZzogXCJmbGFnLWFvXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbnRhcmN0aWNhXCIsIGZsYWc6IFwiZmxhZy1hcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXJnZW50aW5hXCIsIGZsYWc6IFwiZmxhZy1hclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW1lcmljYW4gU29tb2FcIiwgZmxhZzogXCJmbGFnLWFzXCIgfSxcclxuICAgIHsgbmFtZTogXCJBdXN0cmlhXCIsIGZsYWc6IFwiZmxhZy1hdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXVzdHJhbGlhXCIsIGZsYWc6IFwiZmxhZy1hdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXJ1YmFcIiwgZmxhZzogXCJmbGFnLWF3XCIgfSxcclxuICAgIHsgbmFtZTogXCLDhWxhbmQgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctYXhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF6ZXJiYWlqYW5cIiwgZmxhZzogXCJmbGFnLWF6XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsIGZsYWc6IFwiZmxhZy1iYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFyYmFkb3NcIiwgZmxhZzogXCJmbGFnLWJiXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYW5nbGFkZXNoXCIsIGZsYWc6IFwiZmxhZy1iZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVsZ2l1bVwiLCBmbGFnOiBcImZsYWctYmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1cmtpbmEgRmFzb1wiLCBmbGFnOiBcImZsYWctYmZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1bGdhcmlhXCIsIGZsYWc6IFwiZmxhZy1iZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFocmFpblwiLCBmbGFnOiBcImZsYWctYmhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1cnVuZGlcIiwgZmxhZzogXCJmbGFnLWJpXCIgfSxcclxuICAgIHsgbmFtZTogXCJCZW5pblwiLCBmbGFnOiBcImZsYWctYmpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEJhcnRow6lsZW15XCIsIGZsYWc6IFwiZmxhZy1ibFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVybXVkYVwiLCBmbGFnOiBcImZsYWctYm1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJydW5laSBcIiwgZmxhZzogXCJmbGFnLWJuXCIgfSxcclxuICAgIHsgbmFtZTogXCJCb2xpdmlhLCBQbHVyaW5hdGlvbmFsIFN0YXRlIG9mXCIsIGZsYWc6IFwiZmxhZy1ib1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmFcIiwgZmxhZzogXCJmbGFnLWJxXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcmF6aWxcIiwgZmxhZzogXCJmbGFnLWJyXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYWhhbWFzXCIsIGZsYWc6IFwiZmxhZy1ic1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmh1dGFuXCIsIGZsYWc6IFwiZmxhZy1idFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm91dmV0IElzbGFuZFwiLCBmbGFnOiBcImZsYWctYnZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvdHN3YW5hXCIsIGZsYWc6IFwiZmxhZy1id1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVsYXJ1c1wiLCBmbGFnOiBcImZsYWctYnlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGl6ZVwiLCBmbGFnOiBcImZsYWctYnpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbmFkYVwiLCBmbGFnOiBcImZsYWctY2FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1jY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29uZ28sIHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZVwiLCBmbGFnOiBcImZsYWctY2RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctY2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbmdvXCIsIGZsYWc6IFwiZmxhZy1jZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dpdHplcmxhbmRcIiwgZmxhZzogXCJmbGFnLWNoXCIgfSxcclxuICAgIHsgbmFtZTogXCJDw7R0ZSBkJ0l2b2lyZVwiLCBmbGFnOiBcImZsYWctY2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvb2sgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctY2tcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoaWxlXCIsIGZsYWc6IFwiZmxhZy1jbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FtZXJvb25cIiwgZmxhZzogXCJmbGFnLWNtXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGluYVwiLCBmbGFnOiBcImZsYWctY25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbG9tYmlhXCIsIGZsYWc6IFwiZmxhZy1jb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29zdGEgUmljYVwiLCBmbGFnOiBcImZsYWctY3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN1YmFcIiwgZmxhZzogXCJmbGFnLWN1XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYWJvIFZlcmRlXCIsIGZsYWc6IFwiZmxhZy1jdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3VyYcOnYW9cIiwgZmxhZzogXCJmbGFnLWN3XCIgfSxcclxuICAgIHsgbmFtZTogXCJDaHJpc3RtYXMgSXNsYW5kXCIsIGZsYWc6IFwiZmxhZy1jeFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3lwcnVzXCIsIGZsYWc6IFwiZmxhZy1jeVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3plY2ggUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWN6XCIgfSxcclxuICAgIHsgbmFtZTogXCJHZXJtYW55XCIsIGZsYWc6IFwiZmxhZy1kZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGppYm91dGlcIiwgZmxhZzogXCJmbGFnLWRqXCIgfSxcclxuICAgIHsgbmFtZTogXCJEZW5tYXJrXCIsIGZsYWc6IFwiZmxhZy1ka1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRG9taW5pY2FcIiwgZmxhZzogXCJmbGFnLWRtXCIgfSxcclxuICAgIHsgbmFtZTogXCJEb21pbmljYW4gUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWRvXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbGdlcmlhXCIsIGZsYWc6IFwiZmxhZy1kelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWN1YWRvclwiLCBmbGFnOiBcImZsYWctZWNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVzdG9uaWFcIiwgZmxhZzogXCJmbGFnLWVlXCIgfSxcclxuICAgIHsgbmFtZTogXCJFZ3lwdFwiLCBmbGFnOiBcImZsYWctZWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIldlc3Rlcm4gU2FoYXJhXCIsIGZsYWc6IFwiZmxhZy1laFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXJpdHJlYVwiLCBmbGFnOiBcImZsYWctZXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNwYWluXCIsIGZsYWc6IFwiZmxhZy1lc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXRoaW9waWFcIiwgZmxhZzogXCJmbGFnLWV0XCIgfSxcclxuICAgIHsgbmFtZTogXCJGaW5sYW5kXCIsIGZsYWc6IFwiZmxhZy1maVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmlqaVwiLCBmbGFnOiBcImZsYWctZmpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKVwiLCBmbGFnOiBcImZsYWctZmtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2ZcIiwgZmxhZzogXCJmbGFnLWZtXCIgfSxcclxuICAgIHsgbmFtZTogXCJGYXJvZSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1mb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJhbmNlXCIsIGZsYWc6IFwiZmxhZy1mclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2Fib25cIiwgZmxhZzogXCJmbGFnLWdhXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kXCIsIGZsYWc6IFwiZmxhZy1nYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3JlbmFkYVwiLCBmbGFnOiBcImZsYWctZ2RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdlb3JnaWFcIiwgZmxhZzogXCJmbGFnLWdlXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggR3VpYW5hXCIsIGZsYWc6IFwiZmxhZy1nZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3Vlcm5zZXlcIiwgZmxhZzogXCJmbGFnLWdnXCIgfSxcclxuICAgIHsgbmFtZTogXCJHaGFuYVwiLCBmbGFnOiBcImZsYWctZ2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdpYnJhbHRhclwiLCBmbGFnOiBcImZsYWctZ2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZWVubGFuZFwiLCBmbGFnOiBcImZsYWctZ2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdhbWJpYVwiLCBmbGFnOiBcImZsYWctZ21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1aW5lYVwiLCBmbGFnOiBcImZsYWctZ25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YWRlbG91cGVcIiwgZmxhZzogXCJmbGFnLWdwXCIgfSxcclxuICAgIHsgbmFtZTogXCJFcXVhdG9yaWFsIEd1aW5lYVwiLCBmbGFnOiBcImZsYWctZ3FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZWVjZVwiLCBmbGFnOiBcImZsYWctZ3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1nc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VhdGVtYWxhXCIsIGZsYWc6IFwiZmxhZy1ndFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VhbVwiLCBmbGFnOiBcImZsYWctZ3VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1aW5lYS1CaXNzYXVcIiwgZmxhZzogXCJmbGFnLWd3XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdXlhbmFcIiwgZmxhZzogXCJmbGFnLWd5XCIgfSxcclxuICAgIHsgbmFtZTogXCJIb25nIEtvbmdcIiwgZmxhZzogXCJmbGFnLWhrXCIgfSxcclxuICAgIHsgbmFtZTogXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWhtXCIgfSxcclxuICAgIHsgbmFtZTogXCJIb25kdXJhc1wiLCBmbGFnOiBcImZsYWctaG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNyb2F0aWFcIiwgZmxhZzogXCJmbGFnLWhyXCIgfSxcclxuICAgIHsgbmFtZTogXCJIYWl0aVwiLCBmbGFnOiBcImZsYWctaHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkh1bmdhcnlcIiwgZmxhZzogXCJmbGFnLWh1XCIgfSxcclxuICAgIHsgbmFtZTogXCJJbmRvbmVzaWFcIiwgZmxhZzogXCJmbGFnLWlkXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmVsYW5kXCIsIGZsYWc6IFwiZmxhZy1pZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXNyYWVsXCIsIGZsYWc6IFwiZmxhZy1pbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXNsZSBvZiBNYW5cIiwgZmxhZzogXCJmbGFnLWltXCIgfSxcclxuICAgIHsgbmFtZTogXCJJbmRpYVwiLCBmbGFnOiBcImZsYWctaW5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwiLCBmbGFnOiBcImZsYWctaW9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIklyYXFcIiwgZmxhZzogXCJmbGFnLWlxXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmFuLCBJc2xhbWljIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1pclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSWNlbGFuZFwiLCBmbGFnOiBcImZsYWctaXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkl0YWx5XCIsIGZsYWc6IFwiZmxhZy1pdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSmVyc2V5XCIsIGZsYWc6IFwiZmxhZy1qZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSmFtYWljYVwiLCBmbGFnOiBcImZsYWctam1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkpvcmRhblwiLCBmbGFnOiBcImZsYWctam9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkphcGFuXCIsIGZsYWc6IFwiZmxhZy1qcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2VueWFcIiwgZmxhZzogXCJmbGFnLWtlXCIgfSxcclxuICAgIHsgbmFtZTogXCJLeXJneXpzdGFuXCIsIGZsYWc6IFwiZmxhZy1rZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FtYm9kaWFcIiwgZmxhZzogXCJmbGFnLWtoXCIgfSxcclxuICAgIHsgbmFtZTogXCJLaXJpYmF0aVwiLCBmbGFnOiBcImZsYWcta2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbW9yb3NcIiwgZmxhZzogXCJmbGFnLWttXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIiwgZmxhZzogXCJmbGFnLWtuXCIgfSxcclxuICAgIHsgbmFtZTogXCJLb3JlYSwgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWcta3BcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktvcmVhLCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWcta3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkt1d2FpdFwiLCBmbGFnOiBcImZsYWcta3dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNheW1hbiBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1reVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2F6YWtoc3RhblwiLCBmbGFnOiBcImZsYWcta3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1sYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGViYW5vblwiLCBmbGFnOiBcImZsYWctbGJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEx1Y2lhXCIsIGZsYWc6IFwiZmxhZy1sY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGllY2h0ZW5zdGVpblwiLCBmbGFnOiBcImZsYWctbGlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNyaSBMYW5rYVwiLCBmbGFnOiBcImZsYWctbGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpYmVyaWFcIiwgZmxhZzogXCJmbGFnLWxyXCIgfSxcclxuICAgIHsgbmFtZTogXCJMZXNvdGhvXCIsIGZsYWc6IFwiZmxhZy1sc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGl0aHVhbmlhXCIsIGZsYWc6IFwiZmxhZy1sdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTHV4ZW1ib3VyZ1wiLCBmbGFnOiBcImZsYWctbHVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxhdHZpYVwiLCBmbGFnOiBcImZsYWctbHZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpYnlhXCIsIGZsYWc6IFwiZmxhZy1seVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9yb2Njb1wiLCBmbGFnOiBcImZsYWctbWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbmFjb1wiLCBmbGFnOiBcImZsYWctbWNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbGRvdmEsIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1tZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9udGVuZWdyb1wiLCBmbGFnOiBcImZsYWctbWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IE1hcnRpbiAoRnJlbmNoIHBhcnQpXCIsIGZsYWc6IFwiZmxhZy1tZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFkYWdhc2NhclwiLCBmbGFnOiBcImZsYWctbWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hcnNoYWxsIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLW1oXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWNlZG9uaWEsIHRoZSBmb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLW1rXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxpXCIsIGZsYWc6IFwiZmxhZy1tbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTXlhbm1hclwiLCBmbGFnOiBcImZsYWctbW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbmdvbGlhXCIsIGZsYWc6IFwiZmxhZy1tblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFjYW9cIiwgZmxhZzogXCJmbGFnLW1vXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLW1wXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXJ0aW5pcXVlXCIsIGZsYWc6IFwiZmxhZy1tcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWF1cml0YW5pYVwiLCBmbGFnOiBcImZsYWctbXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbnRzZXJyYXRcIiwgZmxhZzogXCJmbGFnLW1zXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWx0YVwiLCBmbGFnOiBcImZsYWctbXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hdXJpdGl1c1wiLCBmbGFnOiBcImZsYWctbXVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGRpdmVzXCIsIGZsYWc6IFwiZmxhZy1tdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsYXdpXCIsIGZsYWc6IFwiZmxhZy1td1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWV4aWNvXCIsIGZsYWc6IFwiZmxhZy1teFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsYXlzaWFcIiwgZmxhZzogXCJmbGFnLW15XCIgfSxcclxuICAgIHsgbmFtZTogXCJNb3phbWJpcXVlXCIsIGZsYWc6IFwiZmxhZy1telwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmFtaWJpYVwiLCBmbGFnOiBcImZsYWctbmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5ldyBDYWxlZG9uaWFcIiwgZmxhZzogXCJmbGFnLW5jXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWdlclwiLCBmbGFnOiBcImZsYWctbmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcmZvbGsgSXNsYW5kXCIsIGZsYWc6IFwiZmxhZy1uZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmlnZXJpYVwiLCBmbGFnOiBcImZsYWctbmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pY2FyYWd1YVwiLCBmbGFnOiBcImZsYWctbmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5ldGhlcmxhbmRzXCIsIGZsYWc6IFwiZmxhZy1ubFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9yd2F5XCIsIGZsYWc6IFwiZmxhZy1ub1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmVwYWxcIiwgZmxhZzogXCJmbGFnLW5wXCIgfSxcclxuICAgIHsgbmFtZTogXCJOYXVydVwiLCBmbGFnOiBcImZsYWctbnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pdWVcIiwgZmxhZzogXCJmbGFnLW51XCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXcgWmVhbGFuZFwiLCBmbGFnOiBcImZsYWctbnpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk9tYW5cIiwgZmxhZzogXCJmbGFnLW9tXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYW5hbWFcIiwgZmxhZzogXCJmbGFnLXBhXCIgfSxcclxuICAgIHsgbmFtZTogXCJQZXJ1XCIsIGZsYWc6IFwiZmxhZy1wZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIFBvbHluZXNpYVwiLCBmbGFnOiBcImZsYWctcGZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhcHVhIE5ldyBHdWluZWFcIiwgZmxhZzogXCJmbGFnLXBnXCIgfSxcclxuICAgIHsgbmFtZTogXCJQaGlsaXBwaW5lc1wiLCBmbGFnOiBcImZsYWctcGhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBha2lzdGFuXCIsIGZsYWc6IFwiZmxhZy1wa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUG9sYW5kXCIsIGZsYWc6IFwiZmxhZy1wbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwiLCBmbGFnOiBcImZsYWctcG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBpdGNhaXJuXCIsIGZsYWc6IFwiZmxhZy1wblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUHVlcnRvIFJpY29cIiwgZmxhZzogXCJmbGFnLXByXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWxlc3RpbmUsIFN0YXRlIG9mXCIsIGZsYWc6IFwiZmxhZy1wc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUG9ydHVnYWxcIiwgZmxhZzogXCJmbGFnLXB0XCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWxhdVwiLCBmbGFnOiBcImZsYWctcHdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhcmFndWF5XCIsIGZsYWc6IFwiZmxhZy1weVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUWF0YXJcIiwgZmxhZzogXCJmbGFnLXFhXCIgfSxcclxuICAgIHsgbmFtZTogXCJSw6l1bmlvblwiLCBmbGFnOiBcImZsYWctcmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlJvbWFuaWFcIiwgZmxhZzogXCJmbGFnLXJvXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZXJiaWFcIiwgZmxhZzogXCJmbGFnLXJzXCIgfSxcclxuICAgIHsgbmFtZTogXCJSdXNzaWFuIEZlZGVyYXRpb25cIiwgZmxhZzogXCJmbGFnLXJ1XCIgfSxcclxuICAgIHsgbmFtZTogXCJSd2FuZGFcIiwgZmxhZzogXCJmbGFnLXJ3XCIgfSxcclxuICAgIHsgbmFtZTogXCJTYXVkaSBBcmFiaWFcIiwgZmxhZzogXCJmbGFnLXNhXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb2xvbW9uIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLXNiXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZXljaGVsbGVzXCIsIGZsYWc6IFwiZmxhZy1zY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3VkYW5cIiwgZmxhZzogXCJmbGFnLXNkXCIgfSxcclxuICAgIHsgbmFtZTogXCJTd2VkZW5cIiwgZmxhZzogXCJmbGFnLXNlXCIgfSxcclxuICAgIHsgbmFtZTogXCJTaW5nYXBvcmVcIiwgZmxhZzogXCJmbGFnLXNnXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwiLCBmbGFnOiBcImZsYWctc2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNsb3ZlbmlhXCIsIGZsYWc6IFwiZmxhZy1zaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3ZhbGJhcmQgYW5kIEphbiBNYXllblwiLCBmbGFnOiBcImZsYWctc2pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNsb3Zha2lhXCIsIGZsYWc6IFwiZmxhZy1za1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2llcnJhIExlb25lXCIsIGZsYWc6IFwiZmxhZy1zbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FuIE1hcmlub1wiLCBmbGFnOiBcImZsYWctc21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNlbmVnYWxcIiwgZmxhZzogXCJmbGFnLXNuXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb21hbGlhXCIsIGZsYWc6IFwiZmxhZy1zb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3VyaW5hbWVcIiwgZmxhZzogXCJmbGFnLXNyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBTdWRhblwiLCBmbGFnOiBcImZsYWctc3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLCBmbGFnOiBcImZsYWctc3RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVsIFNhbHZhZG9yXCIsIGZsYWc6IFwiZmxhZy1zdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KVwiLCBmbGFnOiBcImZsYWctc3hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN5cmlhbiBBcmFiIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1zeVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dhemlsYW5kXCIsIGZsYWc6IFwiZmxhZy1zelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy10Y1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hhZFwiLCBmbGFnOiBcImZsYWctdGRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllc1wiLCBmbGFnOiBcImZsYWctdGZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRvZ29cIiwgZmxhZzogXCJmbGFnLXRnXCIgfSxcclxuICAgIHsgbmFtZTogXCJUaGFpbGFuZFwiLCBmbGFnOiBcImZsYWctdGhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhamlraXN0YW5cIiwgZmxhZzogXCJmbGFnLXRqXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb2tlbGF1XCIsIGZsYWc6IFwiZmxhZy10a1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGltb3ItTGVzdGVcIiwgZmxhZzogXCJmbGFnLXRsXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXJrbWVuaXN0YW5cIiwgZmxhZzogXCJmbGFnLXRtXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdW5pc2lhXCIsIGZsYWc6IFwiZmxhZy10blwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9uZ2FcIiwgZmxhZzogXCJmbGFnLXRvXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXJrZXlcIiwgZmxhZzogXCJmbGFnLXRyXCIgfSxcclxuICAgIHsgbmFtZTogXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsIGZsYWc6IFwiZmxhZy10dFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHV2YWx1XCIsIGZsYWc6IFwiZmxhZy10dlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYVwiLCBmbGFnOiBcImZsYWctdHdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLXR6XCIgfSxcclxuICAgIHsgbmFtZTogXCJVa3JhaW5lXCIsIGZsYWc6IFwiZmxhZy11YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVWdhbmRhXCIsIGZsYWc6IFwiZmxhZy11Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy11bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIsIGZsYWc6IFwiZmxhZy11c1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVXJ1Z3VheVwiLCBmbGFnOiBcImZsYWctdXlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlV6YmVraXN0YW5cIiwgZmxhZzogXCJmbGFnLXV6XCIgfSxcclxuICAgIHsgbmFtZTogXCJIb2x5IFNlZVwiLCBmbGFnOiBcImZsYWctdmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsIGZsYWc6IFwiZmxhZy12Y1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmVuZXp1ZWxhLCBCb2xpdmFyaWFuIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy12ZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlyZ2luIElzbGFuZHMsIEJyaXRpc2hcIiwgZmxhZzogXCJmbGFnLXZnXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaXJnaW4gSXNsYW5kcywgVS5TLlwiLCBmbGFnOiBcImZsYWctdmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpZXQgTmFtXCIsIGZsYWc6IFwiZmxhZy12blwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmFudWF0dVwiLCBmbGFnOiBcImZsYWctdnVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIldhbGxpcyBhbmQgRnV0dW5hXCIsIGZsYWc6IFwiZmxhZy13ZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2Ftb2FcIiwgZmxhZzogXCJmbGFnLXdzXCIgfSxcclxuICAgIHsgbmFtZTogXCJZZW1lblwiLCBmbGFnOiBcImZsYWcteWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1heW90dGVcIiwgZmxhZzogXCJmbGFnLXl0XCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBBZnJpY2FcIiwgZmxhZzogXCJmbGFnLXphXCIgfSxcclxuICAgIHsgbmFtZTogXCJaYW1iaWFcIiwgZmxhZzogXCJmbGFnLXptXCIgfSxcclxuICAgIHsgbmFtZTogXCJaaW1iYWJ3ZVwiLCBmbGFnOiBcImZsYWctendcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVVzZXJGbGFncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS51c2VyRmxhZ3MgPSAkc2NvcGUuY3VycmVudFVzZXI/LmZsYWdzXHJcbiAgICAgID8gY291bnRyaWVzLmZpbHRlcihmdW5jdGlvbiAoY291bnRyeSkge1xyXG4gICAgICAgICAgcmV0dXJuICRzY29wZS5jdXJyZW50VXNlci5mbGFncy5pbmNsdWRlcyhjb3VudHJ5LmZsYWcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIDogW107XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmRhdGVPcHRpb25zID0ge1xyXG4gICAgbWF4RGF0ZTogbmV3IERhdGUoKSxcclxuICAgIG1pbkRhdGU6IG5ldyBEYXRlKDE5MDAsIDEsIDEpLFxyXG4gICAgaW5pdERhdGU6IG5ldyBEYXRlKDIwMDAsIDEsIDEpLFxyXG4gICAgZGF0ZXBpY2tlck1vZGU6IFwieWVhclwiLFxyXG4gIH07XHJcblxyXG4gICRzY29wZS51c2VybmFtZVRvZ2dsZSA9IHRydWU7XHJcbiAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gdHJ1ZTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVVzZXJuYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnVzZXJuYW1lVG9nZ2xlID0gISRzY29wZS51c2VybmFtZVRvZ2dsZTtcclxuICAgICRzY29wZS5uZXdVc2VybmFtZSA9ICRzY29wZS5jdXJyZW50VXNlci51c2VybmFtZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUubmV3UGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLmNvbmZpcm1QYXNzd29yZCA9IG51bGw7XHJcbiAgICAkc2NvcGUucGFzc3dvcmRUb2dnbGUgPSAhJHNjb3BlLnBhc3N3b3JkVG9nZ2xlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGVja1Bhc3N3b3JkID0gZnVuY3Rpb24gKHBhc3N3b3JkKSB7XHJcbiAgICBpZiAocGFzc3dvcmQpIHtcclxuICAgICAgdmFyIHVzZXIgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICBVc2VyU3ZjLmNoZWNrUGFzc3dvcmQodXNlciwgcGFzc3dvcmQpLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgb3JpZ2luYWxCZyA9ICQoXCIucGFzc3dvcmRcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIpO1xyXG4gICAgICAgICAgJChcIi5wYXNzd29yZFwiKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNGRkI2QzFcIiB9LCAyMDApLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG9yaWdpbmFsQmcgfSwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uIChvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgaWYgKG5ld1Bhc3N3b3JkKSB7XHJcbiAgICAgIGlmIChuZXdQYXNzd29yZCA9PSBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICB2YXIgdXNlciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgICAgVXNlclN2Yy5jaGFuZ2VQYXNzd29yZCh1c2VyLCBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQpLnRoZW4oXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzY29wZS4kZW1pdChcInBvcHVwXCIsIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBhc3N3b3JkIENoYW5nZWRcIixcclxuICAgICAgICAgICAgICB0eXBlOiBcImFsZXJ0LXN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICRzY29wZS5vbGRQYXNzd29yZCA9IG51bGw7XHJcbiAgICAgICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwicG9wdXBcIiwge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGFzc3dvcmQgQ2hhbmdlIEZhaWxlZFwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiYWxlcnQtZGFuZ2VyXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBvcmlnaW5hbEJnID0gJChcIi5wYXNzd29yZFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIik7XHJcbiAgICAgICAgJChcIi5wYXNzd29yZFwiKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNGRkI2QzFcIiB9LCAyMDApLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG9yaWdpbmFsQmcgfSwgMjAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VybmFtZSkge1xyXG4gICAgJHNjb3BlLiRlbWl0KFwibG9hZGluZ1wiKTtcclxuICAgIFVzZXJTdmMuY2hhbmdlVXNlcm5hbWUoJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCwgdXNlcm5hbWUpLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS4kZW1pdChcInVwZGF0ZVwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS4kZW1pdChcInBvcHVwXCIsIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IHVzZXJuYW1lICsgXCIgYWxyZWFkeSBpbiB1c2VcIixcclxuICAgICAgICAgIHR5cGU6IFwiYWxlcnQtZGFuZ2VyXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS51cGRhdGVVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLiRlbWl0KFwibG9hZGluZ1wiKTtcclxuICAgIFVzZXJTdmMudXBkYXRlVXNlcih7IC4uLiRzY29wZS5jdXJyZW50VXNlciwgZmxhZ3M6ICRzY29wZS51c2VyRmxhZ3MubWFwKCh7IGZsYWcgfSkgPT4gZmxhZykgfSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwidXBkYXRlXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUubG9hZENvdW50cmllcyA9IGZ1bmN0aW9uICgkcXVlcnkpIHtcclxuICAgIHJldHVybiBjb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChjb3VudHJ5KSB7XHJcbiAgICAgIHJldHVybiBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCRxdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCAoKSA9PiB7XHJcbiAgICB1cGRhdGVVc2VyRmxhZ3MoKTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignU2tpbGxzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR3aW5kb3cpIHtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkU2tpbGwgPSAwO1xyXG4gICRzY29wZS5za2lsbHNWaXNpYmxlID0gZmFsc2U7XHJcbiAgJHNjb3BlLnByb2plY3RzID0gW107XHJcblxyXG4gICRzY29wZS5sYWJlbHMgPSBbXCJEb3dubG9hZCBTYWxlc1wiLCBcIkluLVN0b3JlIFNhbGVzXCIsIFwiTWFpbC1PcmRlciBTYWxlc1wiXTtcclxuICAkc2NvcGUuZGF0YSA9IFszMDAsIDUwMCwgMTAwXTtcclxuXHJcbiAgJC5nZXRKU09OKCcvZXhwZXJpZW5jZS5qc29uJywgZnVuY3Rpb24oIGRhdGEgKSB7XHJcbiAgICAkc2NvcGUucHJvamVjdHMgPSBkYXRhLnJlZHVjZSgocHJvamVjdHMsIGVtcGxveWVyKSA9PiB7XHJcbiAgICAgIGlmIChlbXBsb3llci5wcm9qZWN0cykgcmV0dXJuIGVtcGxveWVyLnByb2plY3RzLmNvbmNhdChwcm9qZWN0cyk7XHJcbiAgICAgIGVsc2UgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgfSwge30pO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZmlsdGVyZWRQcm9qZWN0cyA9ICgpID0+ICRzY29wZS5wcm9qZWN0c1xyXG4gICAgLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5za2lsbHMgJiYgcHJvamVjdC5za2lsbHMuaW5jbHVkZXMoJHNjb3BlLnNlbGVjdGVkU2tpbGwuY29kZSkpXHJcblxyXG4gICQuZ2V0SlNPTignL3NraWxscy5qc29uJywgZnVuY3Rpb24oIGRhdGEgKSB7XHJcblxyXG4gICAgY29uc3Qgc2tpbGxzID0gZGF0YVxyXG4gICAgLmZpbHRlcigoc2tpbGwpID0+IHNraWxsLmVuYWJsZWQpXHJcblxyXG4gICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBza2lsbHNcclxuICAgIC5yZWR1Y2UoZnVuY3Rpb24oY2F0ZWdvcmllcywgc2tpbGwpIHtcclxuICAgICAgaWYgKCFjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldID0gW3NraWxsXVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldLnB1c2goc2tpbGwpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwgPSBmdW5jdGlvbiAoc2tpbGwpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwgPSBza2lsbDtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwuY2hhcnRPcHRpb25zID0ge1xyXG4gICAgICAgIGN1dG91dFBlcmNlbnRhZ2UgOiA4MCxcclxuICAgICAgICBjaXJjdW1mZXJlbmNlOiAyICogTWF0aC5QSSxcclxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwuY2hhcnRTdHlsZSA9IHtcclxuICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoL3NraWxscy8nICsgJHNjb3BlLnNlbGVjdGVkU2tpbGwuaW1hZ2UgKyAnKScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICc2MCUnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJzUwJSA1MCUnXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZFNraWxsKCRzY29wZS5za2lsbHNbMF0pO1xyXG5cclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkc2NlLCAkbG9jYXRpb24sICRtZFRvYXN0LCBUZW5UaGluZ3NTdmMpIHtcclxuICAgIGxldCBwYWdlID0gMTtcclxuICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlYXJjaCA9IFwiXCI7XHJcbiAgICAkc2NvcGUubmV3SXRlbSA9IHt9O1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IFwiRU5cIjtcclxuICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gW107XHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW107XHJcbiAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICBsZXQgZXhoYXVzdGVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgdG9hc3QgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAkbWRUb2FzdC5zaG93KCRtZFRvYXN0LnNpbXBsZSgpLnRleHRDb250ZW50KG1lc3NhZ2UpLnBvc2l0aW9uKFwiYm90dG9tIHJpZ2h0XCIpLmhpZGVEZWxheSgzMDAwKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9iamVjdENhdGVnb3JpZXMgPSBbXCJjdWx0dXJlXCIsIFwibmF0dXJlXCIsIFwibWlzY1wiLCBcInNvY2lldHlcIiwgXCJzcG9ydHNcIl07XHJcbiAgICAkc2NvcGUuYmx1cmJUeXBlcyA9IFtcclxuICAgICAgeyBhcGk6IFwibW92aWVzXCIsIGNhdGVnb3JpZXM6IFtcIm1vdmllc1wiXSwgdGV4dDogXCJHZXQgbW92aWUgcG9zdGVyc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcInR2XCIsIGNhdGVnb3JpZXM6IFtcInRlbGV2aXNpb25cIl0sIHRleHQ6IFwiR2V0IHR2IHBvc3RlcnNcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJhY3RvcnNcIiwgY2F0ZWdvcmllczogW1wibW92aWVzXCIsIFwidGVsZXZpc2lvblwiXSwgdGV4dDogXCJHZXQgYWN0b3IgcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcImJvb2tzXCIsIGNhdGVnb3JpZXM6IFtcImxpdGVyYXR1cmVcIl0sIHRleHQ6IFwiR2V0IGJvb2sgY292ZXJzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwibXVzaWN2aWRlb3NcIiwgY2F0ZWdvcmllczogW1wibXVzaWNcIl0sIHRleHQ6IFwiR2V0IG11c2ljIHZpZGVvc1wiLCBhZG1pbk9ubHk6IHRydWUgfSxcclxuICAgICAgeyBhcGk6IFwidW5zcGxhc2hcIiwgY2F0ZWdvcmllczogb2JqZWN0Q2F0ZWdvcmllcywgdGV4dDogXCJHZXQgVW5zcGxhc2ggcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcInBleGVsc1wiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBQZXhlbHMgcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcIndpa2lcIiwgY2F0ZWdvcmllczogb2JqZWN0Q2F0ZWdvcmllcywgdGV4dDogXCJHZXQgV2lraSBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgIF07XHJcblxyXG4gICAgJHNjb3BlLmhhdmVDb21tb25JdGVtcyA9IChhcnIxLCBhcnIyKSA9PiB7XHJcbiAgICAgIHJldHVybiBhcnIxPy5zb21lKChpdGVtKSA9PiBhcnIyLmluY2x1ZGVzKGl0ZW0pKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIC8vIFRhYlxyXG4gICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuY3JlYXRlVmFsdWUoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoJChcIiNuZXctdmFsdWVcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgJChcIiNuZXctYmx1cmJcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIH1cclxuICAgICAgLy8gdXNlIGUua2V5Q29kZVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWRkTGlzdCA9ICgpID0+IHtcclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgXCJuZXdcIik7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBjcmVhdG9yOiAkc2NvcGUuY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgdmFsdWVzOiBbXSxcclxuICAgICAgICBhbnN3ZXJzOiAwLFxyXG4gICAgICAgIGlzRHluYW1pYzogdHJ1ZSxcclxuICAgICAgICBjYXRlZ29yeTogXCJcIixcclxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgICBsYW5ndWFnZTogJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UsXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWFyY2ggPSAkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoO1xyXG4gICAgICBpZiAobGlzdCkge1xyXG4gICAgICAgIGlmIChsaXN0Ll9pZCA9PT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgJHNjb3BlLmFkZExpc3QoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3QobGlzdClcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gJHNjb3BlLnNlbGVjdGVkTGlzdC5sYW5ndWFnZTtcclxuICAgICAgICAgICAgICAkc2NvcGUucmVhZE9ubHkgPVxyXG4gICAgICAgICAgICAgICAgISRzY29wZS5zZWxlY3RlZExpc3QgfHxcclxuICAgICAgICAgICAgICAgICghJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluICYmXHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY3JlYXRvci5faWQgIT09ICRzY29wZS5jdXJyZW50VXNlci5faWQgJiZcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldExhbmd1YWdlRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzZXRDYXRlZ29yeUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0ge307XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmN1cnJlbnRVc2VyKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogbGFuZ3VhZ2VzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCk7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZXMgPSBsYW5ndWFnZXM7XHJcbiAgICAgIHJlc2V0TGFuZ3VhZ2VGaWx0ZXIoKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBjYXRlZ29yaWVzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XHJcbiAgICAgIHJlc2V0Q2F0ZWdvcnlGaWx0ZXIoKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBsYW5ndWFnZVN0YXRzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMoKTtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBsYW5ndWFnZVN0YXRzLnJlZHVjZSgocmVzdWx0LCB7IF9pZCwgY291bnQgfSkgPT4ge1xyXG4gICAgICAgIHJlc3VsdFtfaWQubGFuZ3VhZ2VdID0gKHJlc3VsdFtfaWQubGFuZ3VhZ2VdIHx8IDApICsgY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSwge30pO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3J5U3RhdHMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cygpO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0cyA9IGNhdGVnb3J5U3RhdHMucmVkdWNlKChyZXN1bHQsIHsgX2lkLCBjb3VudCB9KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W19pZF0gPSBjb3VudDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCkge1xyXG4gICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoeyBfaWQ6ICRsb2NhdGlvbi5zZWFyY2goKS5saXN0IH0pO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5zZWFyY2ggPSAkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoIHx8IFwiXCI7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoTGlzdHMgPSBhc3luYyAodmlld1ZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2aWV3VmFsdWUubGVuZ3RoID49IDMpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5zZWFyY2hMaXN0cyh2aWV3VmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRTZWFyY2hUZXh0ID0gKHRleHQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5zZWFyY2gpIHtcclxuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCgkeyRzY29wZS5zZWFyY2h9KWAsIFwiZ2lcIik7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShyZWdleCwgXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz4kMTwvc3Bhbj5cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnZhbHVlT3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInZhbHVlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6ICRsb2NhdGlvbi5zZWFyY2goKS5zb3J0IHx8IFwiZGF0ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246ICRsb2NhdGlvbi5zZWFyY2goKS5vcmRlciA/ICRsb2NhdGlvbi5zZWFyY2goKS5vcmRlciA9PT0gXCJkZXNjXCIgOiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPSAhJHNjb3BlLm9yZGVyLmRpcmVjdGlvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcInNvcnRcIiwgZmllbGQpO1xyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwib3JkZXJcIiwgJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA/IFwiZGVzY1wiIDogXCJhc2NcIik7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TW9yZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxpc3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gJHNjb3BlLmxpc3RzLmNvbmNhdChsaXN0cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgIHBhZ2UgPSAxO1xyXG4gICAgICBleGhhdXN0ZWQgPSBmYWxzZTtcclxuICAgICAgZ2V0TGlzdHMoKS50aGVuKChsaXN0cykgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9IGxpc3RzO1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZUZpbHRlciA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSkge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID0gISRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5RmlsdGVyID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSkge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSAhJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUNhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKTtcclxuICAgICAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9XHJcbiAgICAgICAgY2F0ZWdvcmllcy5sZW5ndGggPT09IGNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSkubGVuZ3RoO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSAkc2NvcGUuY2F0ZWdvcmllcy5yZWR1Y2UoKGZpbHRlciwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICBmaWx0ZXJbY2F0ZWdvcnldID0gIWFsbENhdGVnb3JpZXM7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgICAgfSwge30pO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldENhdGVnb3J5TGFiZWwgPSAoY2F0ZWdvcmllcykgPT4ge1xyXG4gICAgICBpZiAoIWNhdGVnb3JpZXMgfHwgY2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHJldHVybiBcIlwiO1xyXG4gICAgICBjb25zdCBtYWluQ2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4gIWNhdGVnb3J5LmluY2x1ZGVzKFwiLlwiKSk7XHJcbiAgICAgIHJldHVybiBtYWluQ2F0ZWdvcmllc1xyXG4gICAgICAgIC5zb3J0KClcclxuICAgICAgICAubWFwKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc3ViY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXNcclxuICAgICAgICAgICAgLmZpbHRlcigoc3ViY2F0ZWdvcnkpID0+IHN1YmNhdGVnb3J5LnN0YXJ0c1dpdGgoY2F0ZWdvcnkpICYmIHN1YmNhdGVnb3J5ICE9PSBjYXRlZ29yeSlcclxuICAgICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgICAoc3ViY2F0ZWdvcnkpID0+XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2F0ZWdvcmllc1xyXG4gICAgICAgICAgICAgICAgICAuZmluZCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gY2F0ZWdvcnkpXHJcbiAgICAgICAgICAgICAgICAgIC5zdWJjYXRlZ29yaWVzLmZpbmQoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IHN1YmNhdGVnb3J5KT8ubGFiZWwsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcy5maW5kKCh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBjYXRlZ29yeSkubGFiZWwgK1xyXG4gICAgICAgICAgICAoc3ViY2F0ZWdvcmllcy5sZW5ndGggPiAwID8gXCIgKFwiICsgc3ViY2F0ZWdvcmllcy5zb3J0KCkuam9pbihcIiwgXCIpICsgXCIpXCIgOiBcIlwiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5qb2luKFwiLCBcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldExpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxvYWRpbmcgfHwgZXhoYXVzdGVkKSByZXR1cm4gW107XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2ggIT09ICRzY29wZS5zZWFyY2gpIHtcclxuICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwic2VhcmNoXCIsICRzY29wZS5zZWFyY2ggPyAkc2NvcGUuc2VhcmNoIDogbnVsbCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdHMoe1xyXG4gICAgICAgIHBhZ2UsXHJcbiAgICAgICAgc29ydEJ5OiAkc2NvcGUub3JkZXIuZmllbGQsXHJcbiAgICAgICAgb3JkZXJCeTogJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA/IC0xIDogMSxcclxuICAgICAgICBsaW1pdDogMTAwLFxyXG4gICAgICAgIHNlYXJjaDogJHNjb3BlLnNlYXJjaCxcclxuICAgICAgICBsYW5ndWFnZXM6IE9iamVjdC5rZXlzKCRzY29wZS5sYW5ndWFnZUZpbHRlcikuZmlsdGVyKChsYW5ndWFnZSkgPT4gJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlXSksXHJcbiAgICAgICAgY2F0ZWdvcmllczogT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKS5maWx0ZXIoKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldKSxcclxuICAgICAgfSk7XHJcbiAgICAgICRzY29wZS5jb3VudCA9IGRhdGEuY291bnQ7XHJcbiAgICAgIGlmIChkYXRhLnJlc3VsdC5sZW5ndGggPCAxMDApIGV4aGF1c3RlZCA9IHRydWU7XHJcbiAgICAgIGVsc2UgcGFnZSA9IGRhdGEubmV4dFBhZ2U7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0LnNsaWNlKDAsIDEwKSk7XHJcbiAgICAgIHJldHVybiBkYXRhLnJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExpc3ROYW1lID0gKGxpc3RJZCkgPT4gJHNjb3BlLmxpc3RzLmZpbmQoKHsgX2lkIH0pID0+IF9pZCA9PT0gbGlzdElkKT8ubmFtZTtcclxuXHJcbiAgICAkc2NvcGUudXBkYXRlVmFsdWUgPSBhc3luYyAoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoIWl0ZW0udmFsdWUpIHtcclxuICAgICAgICAkc2NvcGUuZGVsZXRlVmFsdWUoaXRlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW1SZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy51cGRhdGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgaXRlbSk7XHJcbiAgICAgICAgaXRlbS5ibHVyYlR5cGUgPSB1cGRhdGVkSXRlbVJlc3BvbnNlLmRhdGEuYmx1cmJUeXBlO1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlVmFsdWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLm5ld0l0ZW0udmFsdWUpIHJldHVybjtcclxuICAgICAgaWYgKCRzY29wZS5oYXNEdXBsaWNhdGUoKSkge1xyXG4gICAgICAgIHJldHVybiBhbGVydChgJHskc2NvcGUubmV3SXRlbS52YWx1ZX0gaXMgYWxyZWFkeSBpbiB0aGUgbGlzdGApO1xyXG4gICAgICB9IGVsc2UgaWYgKCEkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnB1c2goeyAuLi4kc2NvcGUubmV3SXRlbSB9KTtcclxuICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMubGVuZ3RoID49IDEwKSB7XHJcbiAgICAgICAgICBhd2FpdCAkc2NvcGUudXBzZXJ0TGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlZEl0ZW1SZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5jcmVhdGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgJHNjb3BlLm5ld0l0ZW0pO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnB1c2goY3JlYXRlZEl0ZW1SZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUubmV3SXRlbS52YWx1ZSk7XHJcbiAgICAgICAgdG9hc3QoYFwiJHskc2NvcGUubmV3SXRlbS52YWx1ZX1cIiBhZGRlZGApO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlID0gXCJcIjtcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0uYmx1cmIgPSBcIlwiO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkKFwiI25ldy12YWx1ZVwiKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVWYWx1ZSA9IChpdGVtKSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5kZWxldGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgaXRlbSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5faWQgIT09IGl0ZW0uX2lkKTtcclxuICAgICAgICB0b2FzdChgXCIke2l0ZW0udmFsdWV9XCIgcmVtb3ZlZGApO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwZGF0ZUxpc3QgPSAobGlzdCwgdXBkYXRlcykgPT4ge1xyXG4gICAgICBpZiAobGlzdC5faWQgJiYgbGlzdC5faWQgIT09IFwibmV3XCIpIHtcclxuICAgICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAuLi51cGRhdGVzLFxyXG4gICAgICAgICAgX2lkOiBsaXN0Ll9pZCxcclxuICAgICAgICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgY29uc3QgbGlzdEluZGV4ID0gJHNjb3BlLmxpc3RzLmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5faWQgPT09IGRhdGEuX2lkKTtcclxuICAgICAgICAgICRzY29wZS5saXN0c1tsaXN0SW5kZXhdID0gZGF0YTtcclxuICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudXBzZXJ0TGlzdCA9IChsaXN0LCB1cGRhdGVzKSA9PiB7XHJcbiAgICAgICRzY29wZS5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAobGlzdC52YWx1ZXMubGVuZ3RoID49IDEwICYmIGxpc3QubmFtZSAmJiBsaXN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmIChsaXN0Ll9pZCAmJiBsaXN0Ll9pZCAhPT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgbGV0IGNoYW5nZXMgPSB1cGRhdGVzID8gdXBkYXRlcyA6IGxpc3Q7XHJcbiAgICAgICAgICBkZWxldGUgY2hhbmdlcy5faWQ7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAgIC4uLmNoYW5nZXMsXHJcbiAgICAgICAgICAgIF9pZDogbGlzdC5faWQsXHJcbiAgICAgICAgICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICRzY29wZS5saXN0c1skc2NvcGUubGlzdHMuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0Ll9pZCA9PT0gZGF0YS5faWQpXSA9IGRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5jcmVhdGVMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgJHNjb3BlLnNlbGVjdGVkTGlzdCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0ID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuX2lkID0gZGF0YS5faWQ7XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRvYXN0KGBcIiR7ZGF0YS5uYW1lfVwiIGNyZWF0ZWRgKTtcclxuICAgICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKCRzY29wZS5zZWxlY3RlZExpc3QsIHVwZGF0ZXMpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCFsaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhsaXN0Ll9pZCkpIHtcclxuICAgICAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW2xpc3QuX2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0cyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHM7XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY29uZmlybU1lcmdlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgVGVuVGhpbmdzU3ZjLm1lcmdlTGlzdHMoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyk7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgdG9hc3QoXCJNZXJnZWRcIik7XHJcbiAgICAgICQoXCIjbW9kYWwtbWVyZ2UtbGlzdHNcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY29uZmlybURlbGV0ZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IGxpc3RJZCBvZiAkc2NvcGUubGlzdElkc1RvRGVsZXRlKSB7XHJcbiAgICAgICAgYXdhaXQgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3QobGlzdElkKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgIHRvYXN0KFwiTGlzdHMgZGVsZXRlZFwiKTtcclxuICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMobGlzdC5faWQpKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuZmlsdGVyKFxyXG4gICAgICAgICAgKGhpZ2hsaWdodGVkTGlzdElkKSA9PiBoaWdobGlnaHRlZExpc3RJZCAhPT0gbGlzdC5faWQsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLnB1c2gobGlzdC5faWQpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gJHNjb3BlLmxpc3RzLmZpbHRlcigoeyBfaWQgfSkgPT4gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhfaWQpKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldExhbmd1YWdlID0gKGxpc3QsIGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGxpc3QubGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHsgbGFuZ3VhZ2U6IGxhbmd1YWdlLmNvZGUgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXREaWZmaWN1bHR5ID0gKGxpc3QsIGRpZmZpY3VsdHkpID0+IHtcclxuICAgICAgbGlzdC5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwgeyBkaWZmaWN1bHR5OiBkaWZmaWN1bHR5IH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0RnJlcXVlbmN5ID0gKGxpc3QsIGZyZXF1ZW5jeSkgPT4ge1xyXG4gICAgICBsaXN0LmZyZXF1ZW5jeSA9IGZyZXF1ZW5jeTtcclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwgeyBmcmVxdWVuY3k6IGZyZXF1ZW5jeSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0VXBkYXRlZENhdGVnb3JpZXMgPSAobGlzdCwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgbGV0IGNhdGVnb3JpZXMgPSBsaXN0LmNhdGVnb3JpZXM7XHJcbiAgICAgIGlmIChjYXRlZ29yaWVzLnNvbWUoKGxpc3RDYXRlZ29yeSkgPT4gbGlzdENhdGVnb3J5ID09PSBjYXRlZ29yeSkpIHtcclxuICAgICAgICBjYXRlZ29yaWVzID0gbGlzdC5jYXRlZ29yaWVzLmZpbHRlcigobGlzdENhdGVnb3J5KSA9PiBsaXN0Q2F0ZWdvcnkgIT09IGNhdGVnb3J5KTtcclxuICAgICAgICBpZiAoIWNhdGVnb3J5LmluY2x1ZGVzKFwiLlwiKSAmJiBjYXRlZ29yaWVzLnNvbWUoKGxpc3RDYXRlZ29yeSkgPT4gbGlzdENhdGVnb3J5LnN0YXJ0c1dpdGgoY2F0ZWdvcnkpKSkge1xyXG4gICAgICAgICAgY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKChsaXN0Q2F0ZWdvcnkpID0+ICFsaXN0Q2F0ZWdvcnkuc3RhcnRzV2l0aChjYXRlZ29yeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xyXG4gICAgICAgIGlmIChjYXRlZ29yeS5pbmNsdWRlcyhcIi5cIikgJiYgIWNhdGVnb3JpZXMuZmluZCgobGlzdENhdGVnb3J5KSA9PiBsaXN0Q2F0ZWdvcnkgPT09IGNhdGVnb3J5LnNwbGl0KFwiLlwiKVswXSkpIHtcclxuICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeS5zcGxpdChcIi5cIilbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2F0ZWdvcmllcztcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5ID0gKGxpc3QsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRDYXRlZ29yaWVzID0gZ2V0VXBkYXRlZENhdGVnb3JpZXMobGlzdCwgY2F0ZWdvcnkpO1xyXG4gICAgICBpZiAodXBkYXRlZENhdGVnb3JpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgdG9hc3QoYFlvdSBtdXN0IGhhdmUgYXQgbGVhc3QgMSBjYXRlZ29yeSBmb3IgJHtsaXN0Lm5hbWV9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwgeyBjYXRlZ29yaWVzOiB1cGRhdGVkQ2F0ZWdvcmllcyB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcmllcyA9IGFzeW5jIChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgbGV0IGxpc3RzVG9VcGRhdGUgPSBbXTtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLmV2ZXJ5KCh7IGNhdGVnb3JpZXMgfSkgPT4gY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgbGlzdHNUb1VwZGF0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RzO1xyXG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLnNvbWUoKHsgY2F0ZWdvcmllcyB9KSA9PiBjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICBsaXN0c1RvVXBkYXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMuZmlsdGVyKCh7IGNhdGVnb3JpZXMgfSkgPT4gIWNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaXN0c1RvVXBkYXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHM7XHJcbiAgICAgIH1cclxuICAgICAgZm9yIChjb25zdCBsaXN0VG9VcGRhdGUgb2YgbGlzdHNUb1VwZGF0ZSkge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRDYXRlZ29yaWVzID0gZ2V0VXBkYXRlZENhdGVnb3JpZXMobGlzdFRvVXBkYXRlLCBjYXRlZ29yeSk7XHJcbiAgICAgICAgaWYgKHVwZGF0ZWRDYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgdG9hc3QoYFlvdSBtdXN0IGhhdmUgYXQgbGVhc3QgMSBjYXRlZ29yeSBmb3IgJHtsaXN0VG9VcGRhdGUubmFtZX1gKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAgIF9pZDogbGlzdFRvVXBkYXRlLl9pZCxcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogdXBkYXRlZENhdGVnb3JpZXMsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnN0IGxpc3RJbmRleCA9ICRzY29wZS5saXN0cy5maW5kSW5kZXgoKGxpc3QpID0+IGxpc3QuX2lkID09PSBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdHNbbGlzdEluZGV4XSA9IGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gJHNjb3BlLmxpc3RzLmZpbHRlcigoeyBfaWQgfSkgPT4gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhfaWQpKTtcclxuICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0dXMgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLmV2ZXJ5KCh7IGNhdGVnb3JpZXMgfSkgPT4gY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiY2hlY2tlZFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLnNvbWUoKHsgY2F0ZWdvcmllcyB9KSA9PiBjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICByZXR1cm4gXCJwYXJ0aWFsXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwidW5jaGVja2VkXCI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmhhc0R1cGxpY2F0ZSA9ICgpID0+XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgJiZcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgJiZcclxuICAgICAgXy5zb21lKFxyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgIChhbnN3ZXIpID0+IGFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCkgPT0gJHNjb3BlLm5ld0l0ZW0udmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpLFxyXG4gICAgICApO1xyXG5cclxuICAgICRzY29wZS5nZXRTZWxlY3RlZExpc3RzVGl0bGUgPSAoKSA9PiAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5tYXAoKGxpc3QpID0+IGxpc3QubmFtZSkuam9pbihcIiAvIFwiKTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Qmx1cmJzID0gKHR5cGUpID0+IHtcclxuICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Qmx1cmJzKCRzY29wZS5zZWxlY3RlZExpc3QsIHR5cGUpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgICB0b2FzdChcIkJsdXJicyB1cGRhdGVkXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgICB0b2FzdChcIkJsdXJiIHVwZGF0ZSBmYWlsZWRcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRFbWJlZFVybCA9ICh1cmwpID0+IHtcclxuICAgICAgaWYgKHVybC5pbmNsdWRlcyhcInlvdXR1YmUuY29tXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvWz8mXXY9KFteJl0rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJ5b3V0dS5iZVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL3lvdXR1XFwuYmVcXC8oW14mP10rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJ2aW1lby5jb21cIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC92aW1lb1xcLmNvbVxcLyhcXGQrKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsLmluY2x1ZGVzKFwib3Blbi5zcG90aWZ5XCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvdHJhY2tcXC8oW14mP10rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9lbWJlZC90cmFjay8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKHVybCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuIGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9P2F1dG9wbGF5PTFgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgZ2V0RGF0YSk7XHJcbiAgICAkKGRvY3VtZW50KS5vbihcImhpZGRlbi5icy5tb2RhbFwiLCBcIiNtb2RhbC11cGRhdGUtbXVsdGlwbGUtbGlzdHNcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4iLCIvKmpzbGludCBlc3ZlcnNpb246IDYqL1xyXG5hbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzQWRtaW5DdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIFRlblRoaW5nc1N2YywgVXNlclN2Yykge1xyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4pIHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInVzZXJuYW1lXCIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5yZXZlcnNlID0gISRzY29wZS5vcmRlci5yZXZlcnNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldFF1ZXVlID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRRdWV1ZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnF1ZXVlID0gcmVzcG9uc2UuZGF0YS5yZXBsYWNlKFwiL25cIiwgXCI8YnIvPlwiKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICAkc2NvcGUuZ2V0UXVldWUoKTtcclxuXHJcbiAgICBUZW5UaGluZ3NTdmMuZ2V0UGF1c2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAkc2NvcGUucGF1c2VkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdldFVzZXJzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMuZ2V0VXNlcnMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS51c2VycyA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKCh1c2VyKSA9PiAhdXNlci5hZG1pbik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVCYW4gPSAodXNlcikgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMudG9nZ2xlQmFuKHVzZXIuX2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlUGF1c2UgPSAodXNlcikgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMudG9nZ2xlUGF1c2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5wYXVzZWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5wYXVzZWQpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NHYW1lQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGVQYXJhbXMsIFRlblRoaW5nc1N2YywgVXNlclN2Yykge1xyXG4gICAgY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy5nZXRVc2VycygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKHVzZXIpID0+ICF1c2VyLmFkbWluKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5hZG1pbikge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgICAgaWYgKCRzdGF0ZVBhcmFtcy5nYW1lKSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0R2FtZSgkc3RhdGVQYXJhbXMuZ2FtZSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLmdhbWUgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuZ2FtZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzU3RhdHNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIFRlblRoaW5nc1N2Yykge1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBbXTtcclxuICAgICRzY29wZS5jYXRlZ29yeVN0YXRzID0geyBsYWJlbHM6IFtdLCBkYXRhc2V0czogW10gfTtcclxuXHJcbiAgICBjb25zdCBsaW5lQ2hhcnRPcHRpb25zID0ge1xyXG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgIHRleHQ6IFwiQ2hhcnQuanMgTGluZSBDaGFydFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmN1cnJlbnRVc2VyKSByZXR1cm47XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZVN0YXRzID0gW107XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRQbGF5U3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IHllYXIgfSkgPT4geWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBtb250aHMgPSBfLnRpbWVzKDEyLCAoaSkgPT4gaSArIDEpO1xyXG4gICAgICAgICRzY29wZS5wbGF5U3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IG1vbnRocyxcclxuICAgICAgICAgIHNlcmllczogeWVhcnMsXHJcbiAgICAgICAgICBkYXRhOiB5ZWFycy5tYXAoKHllYXIpID0+XHJcbiAgICAgICAgICAgIG1vbnRocy5tYXAoKG1vbnRoKSA9PiBkYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubW9udGggPT09IG1vbnRoICYmIGl0ZW0ueWVhciA9PT0geWVhcik/LnVuaXF1ZVBsYXllcnMgfHwgMCksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgb3B0aW9uczogbGluZUNoYXJ0T3B0aW9ucyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RMYW5ndWFnZVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFycyA9IF8udW5pcShkYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkLnllYXIpKS5zb3J0KCk7XHJcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UpKS5zb3J0KCk7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IHllYXJzLFxyXG4gICAgICAgICAgc2VyaWVzOiBsYW5ndWFnZXMsXHJcbiAgICAgICAgICBkYXRhOiBsYW5ndWFnZXMubWFwKChsYW5ndWFnZSkgPT5cclxuICAgICAgICAgICAgeWVhcnMubWFwKCh5ZWFyKSA9PiBkYXRhLmZpbmQoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2UgJiYgX2lkLnllYXIgPT09IHllYXIpPy5jb3VudCB8fCAwKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBvcHRpb25zOiBsaW5lQ2hhcnRPcHRpb25zLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0R2FtZVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFycyA9IF8udW5pcShkYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkLnllYXIpKS5zb3J0KCk7XHJcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UpKS5zb3J0KCk7XHJcbiAgICAgICAgJHNjb3BlLmdhbWVTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogeWVhcnMsXHJcbiAgICAgICAgICBzZXJpZXM6IGxhbmd1YWdlcyxcclxuICAgICAgICAgIGRhdGE6IGxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlKSA9PlxyXG4gICAgICAgICAgICB5ZWFycy5tYXAoKHllYXIpID0+IGRhdGEuZmluZCgoeyBfaWQgfSkgPT4gX2lkLmxhbmd1YWdlID09PSBsYW5ndWFnZSAmJiBfaWQueWVhciA9PT0geWVhcik/LmNvdW50IHx8IDApLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIG9wdGlvbnM6IGxpbmVDaGFydE9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBfLnNvcnRCeShkYXRhLCAoeyBjb3VudCB9KSA9PiAtY291bnQpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiBzb3J0ZWREYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkKSxcclxuICAgICAgICAgIGRhdGE6IFtzb3J0ZWREYXRhLm1hcCgoeyBjb3VudCB9KSA9PiBjb3VudCldLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgKCkgPT4ge1xyXG4gICAgICBnZXREYXRhKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdXb3Jrb3V0Q3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICRzY29wZS50aW1lRXhlcmNpc2luZyA9IDMwO1xyXG4gICRzY29wZS50aW1lUmVzdGluZyA9IDEwO1xyXG4gICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcblxyXG4gIHZhciBzb3VuZHMgPSB7XHJcbiAgICBvbjogbmV3IEF1ZGlvKCdvbi53YXYnKSxcclxuICAgIG9mZjogbmV3IEF1ZGlvKCdvZmYud2F2JyksXHJcbiAgICBzd2l0Y2g6IG5ldyBBdWRpbygnc3dpdGNoLndhdicpLFxyXG4gIH07XHJcblxyXG5cclxuICB2YXIgZXhlcmNpc2VzID0gW1xyXG4gICAge25hbWU6ICdKdW1waW5nIEphY2tzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnV2FsbCBTaXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnQ3J1bmNoJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU3RlcC1VcCcsIHNwbGl0OiB0cnVlfSxcclxuICAgIHtuYW1lOiAnU3F1YXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdUcmljZXBzIERpcCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1BsYW5rJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnSGlnaCBLbmVlcycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0x1bmdlJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUHVzaC1VcCB3aXRoIFJvdGF0aW9uJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU2lkZSBQbGFuaycsIHNwbGl0OiB0cnVlfVxyXG4gIF07XHJcblxyXG4gIHZhciBleGVyY2lzaW5nO1xyXG5cclxuICAkc2NvcGUucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoZXhlcmNpc2VzLmxlbmd0aCAtIE1hdGguZmxvb3IoJHNjb3BlLnRpbWVSZW1haW5pbmcgLyAoJHNjb3BlLnRpbWVFeGVyY2lzaW5nICsgJHNjb3BlLnRpbWVSZXN0aW5nKSkpICsgJy8nICsgZXhlcmNpc2VzLmxlbmd0aDtcclxuICB9O1xyXG5cclxuICAkc2NvcGUud29ya291dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGV4Y2VyY2lzZVRpbWUgPSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3Rpbmc7XHJcbiAgICBpZiAoISRzY29wZS50aW1lUmVtYWluaW5nKSB7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gZXhlcmNpc2VzLmxlbmd0aCAqIGV4Y2VyY2lzZVRpbWU7XHJcbiAgICAgIGV4ZXJjaXNpbmcgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZy0tO1xyXG4gICAgICAgIGlmICgkc2NvcGUudGltZVJlbWFpbmluZyA9PT0gMCkge1xyXG4gICAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICdGaW5pc2hlZCEgQ29uZ3JhdHMhJywgc3BsaXQ6IGZhbHNlfTtcclxuICAgICAgICAgICRzY29wZS50aW1lciA9ICcnO1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VycmVudEV4ZXJjaXNlID0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvIGV4Y2VyY2lzZVRpbWUpO1xyXG4gICAgICAgIHZhciB0aW1lciA9ICRzY29wZS50aW1lUmVtYWluaW5nIC0gY3VycmVudEV4ZXJjaXNlICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgICAkc2NvcGUudGltZXIgPSB0aW1lciA+ICRzY29wZS50aW1lRXhlcmNpc2luZyA/IHRpbWVyIC0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nIDogdGltZXI7XHJcbiAgICAgICAgaWYgKHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nKSB7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS5leGVyY2lzZSA9IGV4ZXJjaXNlc1tleGVyY2lzZXMubGVuZ3RoIC0gY3VycmVudEV4ZXJjaXNlIC0gMV07XHJcbiAgICAgICAgaWYgKHRpbWVyID09PSAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgIHNvdW5kcy5vbi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aW1lciA9PT0gMCkge1xyXG4gICAgICAgICAgc291bmRzLm9mZi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkc2NvcGUuZXhlcmNpc2Uuc3BsaXQgJiYgdGltZXIgPT09IE1hdGguZmxvb3IoJHNjb3BlLnRpbWVFeGVyY2lzaW5nIC8gMikpIHtcclxuICAgICAgICAgIHNvdW5kcy5zd2l0Y2gucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChleGVyY2lzaW5nKTtcclxuICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICcnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuZGlyZWN0aXZlKFwiY2xpY2tPdXRzaWRlXCIsIGZ1bmN0aW9uICgkZG9jdW1lbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVzdHJpY3Q6IFwiQVwiLFxyXG4gICAgc2NvcGU6IHtcclxuICAgICAgY2xpY2tPdXRzaWRlOiBcIiZcIixcclxuICAgIH0sXHJcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRyKSB7XHJcbiAgICAgICRkb2N1bWVudC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGVsICE9PSBlLnRhcmdldCAmJiAhZWxbMF0uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL3Njb3BlLiRwYXJlbnQuc2V0U2VsZWN0ZWRMaXN0KCk7XHJcbiAgICAgICAgICAgIHNjb3BlLiRldmFsKHNjb3BlLmNsaWNrT3V0c2lkZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcblx0LmRpcmVjdGl2ZSgnaGVhZCcsIFtcclxuXHRcdCckcm9vdFNjb3BlJyxcclxuXHRcdCckc3RhdGUnLFxyXG5cdFx0JyRjb21waWxlJyxcclxuXHRcdCckaW50ZXJwb2xhdGUnLFxyXG5cdFx0ZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgJGNvbXBpbGUsICRpbnRlcnBvbGF0ZSkge1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlID0gZnVuY3Rpb24gZ2V0U3R5bGUodGVtcGxhdGVTdHlsZVVybCkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3R5bGUgPSB7XHJcblx0XHRcdFx0XHRocmVmOiB0ZW1wbGF0ZVN0eWxlVXJsLFxyXG5cdFx0XHRcdFx0cmVsOiAnc3R5bGVzaGVldCdcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRpZiAoc3R5bGUuaHJlZi5tYXRjaCgvXFwubGVzcyQvKSkge1xyXG5cdFx0XHRcdFx0c3R5bGUucmVsID0gJ3N0eWxlc2hlZXQvbGVzcyc7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIGdldFN0eWxlcyhzdGF0ZSkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3RhdGVzID0ge307XHJcblxyXG5cdFx0XHRcdC8vQ2hlY2sgc3RhdGUgZm9yIHN0eWxlc1xyXG5cdFx0XHRcdHdoaWxlIChzdGF0ZS5uYW1lICE9PSAnJykge1xyXG5cdFx0XHRcdFx0dmFyIHBhcmVudCA9ICRzdGF0ZS5nZXQoJ14nLCBzdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0Ly9Jbml0aWF0ZSBvdXIgdmlldyBsaXN0XHJcblx0XHRcdFx0XHRpZiAoIXN0YXRlc1twYXJlbnQubmFtZV0pIHtcclxuXHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXSA9IHt9O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ2hlY2sgdGhlIHRlbXBsYXRlU3R5bGVcclxuXHRcdFx0XHRcdGlmIChzdGF0ZS50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXVsnJ10pIHtcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSA9IGdldFN0eWxlKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB2aWV3c1xyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnZpZXdzKSB7XHJcblx0XHRcdFx0XHRcdF8uZm9yRWFjaChzdGF0ZS52aWV3cywgZnVuY3Rpb24gKHZpZXcsIGtleSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgYSBzdHlsZVxyXG5cdFx0XHRcdFx0XHRcdGlmICghdmlldy50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGFyZSB0YXJnZXRpbmcgc29tZSBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRpZiAoKGtleSA9IGtleS5zcGxpdCgnQCcpKVsxXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBoYXZlIHN0eWxlcyBmb3IgdGhhdCBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGVzW2tleVsxXV0gPSB7fTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBzb21lIHBhcmVudCdzIHZpZXdcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV1ba2V5WzBdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBvdXIgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1ba2V5WzBdXSA9IGdldFN0eWxlKHZpZXcudGVtcGxhdGVTdHlsZVVybCk7XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NvbnRpbnVlIHdpdGggdGhlIHBhcmVudFxyXG5cdFx0XHRcdFx0c3RhdGUgPSBwYXJlbnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL0ZsYXR0ZW4gdGhlIGxpc3RcclxuXHRcdFx0XHR2YXIgZmxhdCA9IFtdO1xyXG5cdFx0XHRcdF8uZm9yRWFjaChzdGF0ZXMsIGZ1bmN0aW9uICh2aWV3cykge1xyXG5cclxuXHRcdFx0XHRcdF8uZm9yRWFjaCh2aWV3cywgZnVuY3Rpb24gKHN0eWxlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIV8uaW5jbHVkZXMoZmxhdCwgc3R5bGUpKSB7XHJcblx0XHRcdFx0XHRcdFx0ZmxhdC5wdXNoKHN0eWxlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly9SZXZlcnNlIGl0IHNvIHdlIGhhdmUgYSBwcm9wZXIgaGllcmFyY2h5XHJcblx0XHRcdFx0ZmxhdC5yZXZlcnNlKCk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBmbGF0O1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdFx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0pIHtcclxuXHJcblx0XHRcdFx0XHRzY29wZS50ZW1wbGF0ZVN0eWxlcyA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdHZhciBodG1sID0gJzxsaW5rIG5nLWF0dHItcmVsPVwie3tzdHlsZS5yZWx9fVwiIG5nLXJlcGVhdD1cInN0eWxlIGluIHRlbXBsYXRlU3R5bGVzXCIgbmctaHJlZj1cInt7c3R5bGUuaHJlZn19XCI+JztcclxuXHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXHtcXHsvZywgJGludGVycG9sYXRlLnN0YXJ0U3ltYm9sKCkpO1xyXG5cdFx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvXFx9XFx9L2csICRpbnRlcnBvbGF0ZS5lbmRTeW1ib2woKSk7XHJcblxyXG5cdFx0XHRcdFx0ZWxlbS5hcHBlbmQoJGNvbXBpbGUoaHRtbCkoc2NvcGUpKTtcclxuXHJcblx0XHRcdFx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpIHtcclxuXHJcblx0XHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gZ2V0U3R5bGVzKHRvU3RhdGUpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0fVxyXG5cdF0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0NhdGVnb3JpZXNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VGFza3MgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nLCBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZFRhc2sgPSBmdW5jdGlvbiAoY2F0ZWdvcnksIHRhc2spIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5ICsgJy90YXNrcycsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICBzdmMuY2hvaWNlcyA9IGxpc3Q7XHJcbiAgICBzdmMucHJpb3JpdHlMaXN0ID0gW107XHJcbiAgICAvL01ha2UgYSBuZXcgY2hvaWNlIGxpc3RcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKHZhciBqID0gaSArIDE7IGogPCBsaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgc3ZjLnByaW9yaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgZmlyc3RDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaSA6IGpdLm5hbWUsXHJcbiAgICAgICAgICBzZWNvbmRDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaiA6IGldLm5hbWUsXHJcbiAgICAgICAgICBjaG9pY2U6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNodWZmbGUoc3ZjLnByaW9yaXR5TGlzdCk7XHJcbiAgICBmb3IgKGkgaW4gc3ZjLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBzdmMucHJpb3JpdHlMaXN0W2ldLmlkID0gaSArIDE7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHJldHVybiBzdmMucHJpb3JpdHlMaXN0O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcclxuICAgIHZhciBtID0gYXJyYXkubGVuZ3RoLCB0LCBpO1xyXG4gICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGXigKZcclxuICAgIHdoaWxlIChtKSB7XHJcbiAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudOKAplxyXG4gICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbS0tKTtcclxuICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAvL2FycmF5W21dLmZpcnN0Q2hvaWNlO1xyXG4gICAgICB0ID0gYXJyYXlbbV07XHJcbiAgICAgIGFycmF5W21dID0gYXJyYXlbaV07XHJcbiAgICAgIGFycmF5W2ldID0gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdFbWFpbFN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuc2VuZCA9IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZW1haWwnLCBlbWFpbCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuc2VydmljZSgnRmlsZVN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gICAgc3ZjLmdldEltYWdlcyA9IGZ1bmN0aW9uKGZvbGRlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2ZpbGVzL2ltYWdlcy8nICsgZm9sZGVyKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLmdldFNvdW5kcyA9IGZ1bmN0aW9uKGZvbGRlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2ZpbGVzL3NvdW5kcy8nICsgZm9sZGVyKTtcclxuICAgIH07XHJcblxyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnR2FtZVN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gICAgc3ZjLmdldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZ2FtZXMvJyArIGdhbWUgKyAnLycgKyB1c2VyICsgJy9oaWdoc2NvcmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLnNldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyLCBzY29yZSkge1xyXG4gICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9nYW1lcy8nICsgZ2FtZSArICcvJyArIHVzZXIgKyAnL2hpZ2hzY29yZScsIHtcclxuICAgICAgICBzY29yZTogc2NvcmVcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnTGFuZ3VhZ2VTdmMnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5sYW5ndWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkVOXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkVuZ2xpc2hcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWdiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIk5MXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIk5lZGVybGFuZHNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLW5sXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkZSXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkZyYW7Dp2Fpc1wiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tZnJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy50ZXh0ID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgc3ZjLnNlbGVjdGVkTGFuZ3VhZ2UgPSBzdmMubGFuZ3VhZ2VzWzBdO1xyXG5cclxuICBzdmMuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcclxuICAgIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICByZXR1cm4gbGFuZ3VhZ2U7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHN2Yy5zZWxlY3RlZExhbmd1YWdlO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZmV0Y2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJyk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQb3N0ID0gZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMvJyArIHBvc3QuX2lkKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJUZW5UaGluZ3NTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9ib3RzL3RlbnRoaW5ncy9xdWV1ZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0cyA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgIHZhciB1cmwgPVxyXG4gICAgICBgL2FwaS90ZW50aGluZ3MvbGlzdHM/YCArXHJcbiAgICAgIChvcHRpb25zLmxpbWl0ID8gYCZsaW1pdD0ke29wdGlvbnMubGltaXR9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMucGFnZSA/IGAmcGFnZT0ke29wdGlvbnMucGFnZX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zb3J0QnkgPyBgJnNvcnRfYnk9JHtvcHRpb25zLnNvcnRCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5vcmRlckJ5ID8gYCZvcmRlcl9ieT0ke29wdGlvbnMub3JkZXJCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5sYW5ndWFnZXMgJiYgb3B0aW9ucy5sYW5ndWFnZXMubGVuZ3RoID4gMCA/IGAmbGFuZ3VhZ2U9JHtvcHRpb25zLmxhbmd1YWdlcy5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5jYXRlZ29yaWVzICYmIG9wdGlvbnMuY2F0ZWdvcmllcy5sZW5ndGggPiAwID8gYCZjYXRlZ29yaWVzPSR7b3B0aW9ucy5jYXRlZ29yaWVzLmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnNlYXJjaCA/IGAmc2VhcmNoPSR7b3B0aW9ucy5zZWFyY2h9YCA6IFwiXCIpO1xyXG4gICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZWFyY2hMaXN0cyA9IChuYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9zZWFyY2gvbGlzdC1uYW1lcy8ke25hbWV9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9jYXRlZ29yaWVzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2xhbmd1YWdlc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucHV0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCwgbGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZUxpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0c1wiLCB7IHVzZXIsIGxpc3QgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLm1lcmdlTGlzdHMgPSBmdW5jdGlvbiAobGlzdHMpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvbWVyZ2VcIiwgeyBsaXN0czogbGlzdHMgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmRlbGV0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdElkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0SWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wdXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzL1wiICsgdmFsdWUuX2lkLCB2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzXCIsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBzdmMuZGVsZXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3ZhbHVlcy9cIiArIHZhbHVlLl9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnJlcG9ydExpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3JlcG9ydC9cIiArIHVzZXIuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvY2F0ZWdvcmllc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvbGFuZ3VhZ2VzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQbGF5U3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvcGxheVwiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0R2FtZVN0YXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL3N0YXRzL2dhbWVzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRCbHVyYnMgPSBmdW5jdGlvbiAobGlzdCwgdHlwZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL2xpc3RzLyR7bGlzdC5faWR9L2JsdXJicy8ke3R5cGV9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvcGF1c2VgKTtcclxuICB9O1xyXG5cclxuICBzdmMudG9nZ2xlUGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvcGF1c2VgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0R2FtZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvZ2FtZXMvJHtpZH1gKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlVzZXJTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFVzZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnMvYWxsXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVCYW4gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3VzZXJzL2Jhbi8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSB0b2tlbjtcclxuICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hdXRoZW50aWNhdGVcIiwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9sb2dpblwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyLl9pZCwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi92ZXJpZmljYXRpb25cIiwge1xyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvcGFzc3dvcmRcIiwge1xyXG4gICAgICBvbGRQYXNzd29yZDogb2xkUGFzc3dvcmQsXHJcbiAgICAgIG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VyLCBuZXdVc2VybmFtZSkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi91c2VybmFtZVwiLCB7XHJcbiAgICAgICAgbmV3VXNlcm5hbWU6IG5ld1VzZXJuYW1lLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmNvbnRyb2xsZXIoJ1F1aXpBbmltYWxzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgRmlsZVN2Yykge1xyXG5cclxuICAgIEZpbGVTdmMuZ2V0U291bmRzKCdhbmltYWxzJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIHNvdW5kOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgNSk7XHJcblxyXG4gICAgJHNjb3BlLmdldFNjb3JlID0gKCkgPT4gYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwubmFtZSA9PT0gYW5pbWFsLmd1ZXNzKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWA7XHJcblxyXG4gICAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwuZ3Vlc3MpLmxlbmd0aCA9PT0gJHNjb3BlLmFuaW1hbHMubGVuZ3RoO1xyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpekdvb2dsZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ2dvb2dsZScpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TG9nb3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdsb2dvcycpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TW92aWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnbW92aWVzJylcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuY29udHJvbGxlcignUXVpelNrZWxldG9uc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIEZpbGVTdmMpIHtcclxuXHJcbiAgICBGaWxlU3ZjLmdldEltYWdlcygnc2tlbGV0b25zJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIGltYWdlOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgMTApO1xyXG5cclxuICAgICRzY29wZS5nZXRTY29yZSA9ICgpID0+IGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAgICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxuICB9KTsiXX0=
