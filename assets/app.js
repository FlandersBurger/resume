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
}]), angular.module("app").controller("AppCtrl", function ($scope, LanguageSvc, UserSvc, $mdToast) {
  console.log("%cYou sneaky bugger!", "font: 2em sans-serif; color: DodgerBlue; text-shadow: 2px 0 0 #444, -2px 0 0 #444, 0 2px 0 #444, 0 -2px 0 #444, 1px 1px #444, -1px -1px 0 #444, 1px -1px 0 #444, -1px 1px 0 #444;"), console.log("I'm glad you're curious whether something is popping up in here. I'm a bit of a stickler when it comes to messages in the console so I try to make sure only things I want are visible. That being said, if there is a big error here, I would really appreciate you telling me so I can get rid of it!"), console.log("The code for my resume is hosted on Github if you really want to go into all this! => https://github.com/FlandersBurger/resume"), $scope.toast = message => {
    $mdToast.show($mdToast.simple().textContent(message).position("bottom right").hideDelay(3e3));
  }, $(window).load(function () {
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
    spacepics = 3;
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
    this.id = id, this.position = [spaceship.position[0] + spaceship.cannon.x + spaceship.cannon.x * Math.cos((spaceship.rotation - 90) * Math.PI / 180), spaceship.position[1] + spaceship.cannon.y + spaceship.cannon.y * Math.sin((spaceship.rotation - 90) * Math.PI / 180)], this.width = 40, this.height = 40, this.angle = spaceship.angle, this.rotation = spaceship.rotation, this.speed = spaceship.speed + 500, this.lifespan = spaceship.range, this.img = new Image(), this.img.src = "asteroids/shot.png", this.move = function () {
      this.lifespan--, move(this);
    };
  }
  function Asteroid(id) {
    this.id = id, this.width = 50 * Math.random() + 50, this.height = this.width, this.position = getEntryPosition(this.width, this.height), this.angle = 360 * Math.random(), this.rotation = 360 * Math.random(), this.rotationSpeed = 6 * Math.random() - 3, this.speed = 300 * Math.random() + 2, this.img = new Image(), this.img.src = "asteroids/asteroid" + (Math.round(4 * Math.random()) + 1) + ".png", this.explode = function () {
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
      gradient.addColorStop("0", "rgb(" + Math.floor(256 - 256 * tally / 100) + "," + Math.floor(0 + 256 * tally / 100) + "," + Math.floor(0 + 256 * tally / 100) + ")"), gradient.addColorStop("0.25", "rgb(" + Math.floor(0 + 256 * tally / 100) + "," + Math.floor(256 - 256 * tally / 100) + "," + Math.floor(0 + 256 * tally / 100) + ")"), gradient.addColorStop("0.5", "rgb(" + Math.floor(0 + 256 * tally / 100) + "," + Math.floor(0 + 256 * tally / 100) + "," + Math.floor(256 - 256 * tally / 100) + ")"), gradient.addColorStop("0.75", "rgb(" + Math.floor(0 + 256 * tally / 100) + "," + Math.floor(256 - 256 * tally / 100) + "," + Math.floor(0 + 256 * tally / 100) + ")"), gradient.addColorStop("1.0", "rgb(" + Math.floor(256 - 256 * tally / 100) + "," + Math.floor(0 + 256 * tally / 100) + "," + Math.floor(0 + 256 * tally / 100) + ")"), ctx.fillStyle = gradient, ctx.font = "60px 'Jacquard 12'", ctx.fillText("Asteroids", canvas.width / 2 - ctx.measureText("Asteroids").width / 2, canvas.height / 2), ctx.font = "20px Aldrich", ctx.fillText("Press space to start", canvas.width / 2 - ctx.measureText("Press space to start").width / 2, canvas.height / 2 + 20), ctx.fillText("Designed and developed by Laurent Debacker", canvas.width / 2 - ctx.measureText("Designed and developed by Laurent Debacker").width / 2, canvas.height - 30);
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
      $scope.toast("Message sent"), $scope.sent = !0, console.log("SUCCESS. status=%d, text=%s", response.status, response.text), console.log(response);
    }, function (err) {
      $scope.toast("Message send failed"), $scope.sending = !1, console.log("FAILED. error=", err);
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
              $scope.toast("Login Failed");
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
        $scope.toast("Password changed"), $scope.oldPassword = null, $scope.togglePassword();
      }, function () {
        $scope.toast("Password change failed");
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
      $scope.toast(username + " already in use");
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
  $scope.lists = [], $scope.search = "", $scope.searchField = "all", $scope.newItem = {}, $scope.languageFilter = {}, $scope.categoryFilter = {}, $scope.selectedList = void 0, $scope.selectedLanguage = "EN", $scope.highlightedLists = [], $scope.highlightedListIds = [], $scope.listIdsToDelete = [], $scope.confirmed = !1;
  let exhausted = !1;
  const objectCategories = ["culture", "nature", "misc", "society", "sports"];
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
  $scope.getFilterCount = () => Object.values($scope.languageFilter).length + Object.values($scope.categoryFilter).length;
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
    void 0 === $scope.languageFilter[language.code] ? $scope.languageFilter[language.code] = !0 : !0 === $scope.languageFilter[language.code] ? $scope.languageFilter[language.code] = !$scope.languageFilter[language.code] : delete $scope.languageFilter[language.code], $scope.getLists();
  }, $scope.setCategoryFilter = category => {
    void 0 === $scope.categoryFilter[category] ? $scope.categoryFilter[category] = !0 : !0 === $scope.categoryFilter[category] ? $scope.categoryFilter[category] = !$scope.categoryFilter[category] : delete $scope.categoryFilter[category], $scope.getLists();
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
      ...("all" === $scope.searchField ? {
        search: $scope.search
      } : {}),
      ...("name" === $scope.searchField ? {
        name: $scope.search
      } : {}),
      language: Object.keys($scope.languageFilter).filter(language => !0 === $scope.languageFilter[language]),
      categories: Object.keys($scope.categoryFilter).filter(category => !0 === $scope.categoryFilter[category]),
      languageNot: Object.keys($scope.languageFilter).filter(language => !1 === $scope.languageFilter[language]),
      categoriesNot: Object.keys($scope.categoryFilter).filter(category => !1 === $scope.categoryFilter[category])
    });
    return $scope.count = data.count, data.result.length < 100 ? exhausted = !0 : page = data.nextPage, $scope.loading = !1, console.log(`Page ${page} loaded, ${data.result.length} items`), data.result;
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
        $scope.selectedList.values.push(createdItemResponse.data), console.log($scope.newItem.value), $scope.toast(`"${$scope.newItem.value}" added`);
      } else $scope.selectedList.values.push({
        ...$scope.newItem
      }), $scope.selectedList.values.length >= 10 && (await $scope.upsertList($scope.selectedList));
      $scope.newItem.value = "", $scope.newItem.blurb = "", setTimeout(() => {
        $("#new-value").trigger("focus");
      }), $scope.$apply();
    }
  }, $scope.deleteValue = item => {
    const valueToDelete = item.value;
    TenThingsSvc.deleteListValue($scope.selectedList, item).then(() => {
      $scope.selectedList.values = $scope.selectedList.values.filter(value => value._id !== item._id), $scope.toast(`"${valueToDelete}" removed`);
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
        "new" === $location.search().list && $location.search("list", data._id), $scope.selectedList._id = data._id, $scope.getLists(), $scope.saving = !1, $scope.toast(`"${data.name}" created`);
      }, console.error);
    } else Object.assign($scope.selectedList, updates);
  }, $scope.deleteList = list => {
    list._id ? ($scope.confirmed = !1, $scope.highlightedListIds.includes(list._id) ? $scope.listIdsToDelete = $scope.highlightedListIds : $scope.listIdsToDelete = [list._id], $("#modal-delete-lists").modal("show")) : $scope.selectedList = null;
  }, $scope.deleteLists = () => {
    $scope.listIdsToDelete = $scope.highlightedListIds, $scope.confirmed = !1, $("#modal-delete-lists").modal("show");
  }, $scope.confirmMergeLists = async () => {
    const response = await TenThingsSvc.mergeLists($scope.highlightedListIds);
    $scope.getLists(), $scope.setSelectedList(response.data), $scope.highlightedLists = [], $scope.highlightedListIds = [], $scope.confirmed = !1, $scope.toast("Merged"), $("#modal-merge-lists").modal("hide");
  }, $scope.confirmDeleteLists = async () => {
    for (const listId of $scope.listIdsToDelete) await TenThingsSvc.deleteList(listId);
    $scope.getLists(), $scope.selectedList = null, $scope.listIdsToDelete = [], $scope.highlightedLists = [], $scope.highlightedListIds = [], $scope.confirmed = !1, $scope.toast("Lists deleted"), $("#modal-delete-lists").modal("hide");
  }, $scope.toggleHighlightedLists = () => {
    $scope.highlightedListIds.length === $scope.lists.length ? $scope.highlightedListIds = [] : $scope.highlightedListIds = $scope.lists.map(({
      _id
    }) => _id), $scope.highlightedLists = $scope.lists.filter(({
      _id
    }) => $scope.highlightedListIds.includes(_id));
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
    0 === updatedCategories.length ? $scope.toast(`You must have at least 1 category for ${list.name}`) : $scope.upsertList(list, {
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
    (await Promise.all(listsToUpdate.map(listToUpdate => {
      const updatedCategories = getUpdatedCategories(listToUpdate, category);
      if (0 !== updatedCategories.length) return TenThingsSvc.updateList({
        _id: listToUpdate._id,
        categories: updatedCategories
      });
      $scope.toast(`You must have at least 1 category for ${listToUpdate.name}`);
    }))).forEach(updatedList => {
      const listIndex = $scope.lists.findIndex(list => list._id === updatedList._id);
      $scope.lists[listIndex] = updatedList;
    }), $scope.highlightedLists = $scope.lists.filter(({
      _id
    }) => $scope.highlightedListIds.includes(_id)), $scope.$apply();
  }, $scope.categoryStatus = category => $scope.highlightedLists.every(({
    categories
  }) => categories.includes(category)) ? "checked" : $scope.highlightedLists.some(({
    categories
  }) => categories.includes(category)) ? "partial" : "unchecked", $scope.hasDuplicate = () => $scope.selectedList && $scope.newItem.value && _.some($scope.selectedList.values, answer => answer.value.removeAllButLetters() == $scope.newItem.value.removeAllButLetters()), $scope.getSelectedListsTitle = () => $scope.highlightedLists.map(list => list.name).join(" / "), $scope.getBlurbs = type => {
    $scope.gettingBlurbs = !0, TenThingsSvc.getBlurbs($scope.selectedList, type).then(() => {
      $scope.setSelectedList($scope.selectedList), $scope.gettingBlurbs = !1, $scope.toast("Blurbs updated");
    }).catch(err => {
      console.error(err), $scope.gettingBlurbs = !1, $scope.toast("Blurb update failed");
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
    $scope.categories = categories, console.log(categories), $scope.categoryFilter = {};
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
  $scope.setCategory = async category => {
    const {
      data: disabledCategories
    } = await TenThingsSvc.updateGameCategory($stateParams.game, category);
    $scope.game.disabledCategories = disabledCategories, console.log(disabledCategories.find(c => c === category)), $scope.$apply();
  }, $scope.$watch("currentUser", async () => {
    if ($scope.currentUser.admin) {
      const {
        data: users
      } = await UserSvc.getUsers();
      $scope.users = users.filter(user => !user.admin);
      const {
        data: categories
      } = await TenThingsSvc.getCategories();
      $scope.categories = categories, $stateParams.game && TenThingsSvc.getGame($stateParams.game).then(response => {
        $scope.game = response.data, console.log($scope.game);
      });
    }
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
  this.getQuizFiles = function (quiz) {
    return $http.get("/api/quizzes/" + quiz);
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
    var url = "/api/tenthings/lists?" + (options.limit ? `&limit=${options.limit}` : "") + (options.page ? `&page=${options.page}` : "") + (options.sortBy ? `&sort_by=${options.sortBy}` : "") + (options.orderBy ? `&order_by=${options.orderBy}` : "") + (options.language && options.language.length > 0 ? `&language=${options.language.join(",")}` : "") + (options.categories && options.categories.length > 0 ? `&categories=${options.categories.join(",")}` : "") + (options.languageNot && options.languageNot.length > 0 ? `&!language=${options.languageNot.join(",")}` : "") + (options.categoriesNot && options.categoriesNot.length > 0 ? `&!categories=${options.categoriesNot.join(",")}` : "") + (options.search ? `&search=${options.search}` : "") + (options.name ? `&name=${options.name}` : "");
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
  }, svc.updateGameCategory = function (id, category) {
    return $http.post(`/api/tenthings/games/${id}/category/${category}`);
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
  $scope.animals = [], FileSvc.getQuizFiles("animals").then(function (response) {
    $scope.animals = _.shuffle(response.data.map(animal => ({
      sound: animal,
      name: animal.substring(0, animal.indexOf(".")).replace("_", " ").capitalize()
    })));
    for (let animal of $scope.animals) animal.answers = _.shuffle([animal.name, ...getRandomAnimals(animal.name)]);
  }), $scope.guess = (animal, guess) => {
    animal.guess = guess;
  };
  const getRandomAnimals = name => _.shuffle($scope.animals.filter(animal => name !== animal.name).map(animal => animal.name)).slice(0, 5);
  $scope.getScore = () => `${$scope.animals.filter(animal => animal.name === animal.guess).length}/${$scope.animals.length}`, $scope.isScoreVisible = () => $scope.animals.filter(animal => animal.guess).length === $scope.animals.length;
}), angular.module("app").controller("QuizGoogleCtrl", function ($scope, FileSvc) {
  FileSvc.getQuizFiles("google").then(function (response) {
    $scope.images = response.data;
  });
}), angular.module("app").controller("QuizLogosCtrl", function ($scope, FileSvc) {
  FileSvc.getQuizFiles("logos").then(function (response) {
    $scope.images = response.data;
  });
}), angular.module("app").controller("QuizMoviesCtrl", function ($scope, FileSvc) {
  FileSvc.getQuizFiles("movies").then(function (response) {
    $scope.images = response.data;
  });
}), angular.module("app").controller("QuizSkeletonsCtrl", function ($scope, FileSvc) {
  $scope.animals = [], FileSvc.getQuizFiles("skeletons").then(function (response) {
    $scope.animals = _.shuffle(response.data.map(animal => ({
      image: animal,
      name: animal.substring(0, animal.indexOf(".")).replace("_", " ").capitalize()
    })));
    for (let animal of $scope.animals) animal.answers = _.shuffle([animal.name, ...getRandomAnimals(animal.name)]);
  }), $scope.guess = (animal, guess) => {
    animal.guess = guess;
  };
  const getRandomAnimals = name => _.shuffle($scope.animals.filter(animal => name !== animal.name).map(animal => animal.name)).slice(0, 10);
  $scope.getScore = () => `${$scope.animals.filter(animal => animal.name === animal.guess).length}/${$scope.animals.length}`, $scope.isScoreVisible = () => $scope.animals.filter(animal => animal.guess).length === $scope.animals.length;
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJjb250cm9sbGVycy9hcHAuY3RybC5qcyIsImNvbnRyb2xsZXJzL2FzdGVyb2lkcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvYnViYmxlcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvY2hhcmFkZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3QuY3RybC5qcyIsImNvbnRyb2xsZXJzL2V4cGVyaWVuY2UuY3RybC5qcyIsImNvbnRyb2xsZXJzL2hvYmJpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xlbW1pbmdzLmN0cmwuanMiLCJjb250cm9sbGVycy9saXN0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbG9naW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3Bvc3RzLmN0cmwuanMiLCJjb250cm9sbGVycy9wcm9maWxlLmN0cmwuanMiLCJjb250cm9sbGVycy9za2lsbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvdGVudGhpbmdzYWRtaW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2dhbWUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc3N0YXRzLmN0cmwuanMiLCJjb250cm9sbGVycy93b3Jrb3V0LmN0cmwuanMiLCJzZXJ2aWNlcy9jYXRlZ29yaWVzLnN2Yy5qcyIsInNlcnZpY2VzL2VtYWlsLnN2Yy5qcyIsInNlcnZpY2VzL2ZpbGUuc3ZjLmpzIiwic2VydmljZXMvZ2FtZS5zdmMuanMiLCJzZXJ2aWNlcy9sYW5ndWFnZS5zdmMuanMiLCJzZXJ2aWNlcy9wb3N0cy5zdmMuanMiLCJzZXJ2aWNlcy90ZW50aGluZ3Muc3ZjLmpzIiwic2VydmljZXMvdXNlci5zdmMuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2FuaW1hbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvZ29vZ2xlLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2xvZ29zLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL21vdmllcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9za2VsZXRvbnMuY3RybC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRvbWFpbnMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0cmluZyIsInByb3RvdHlwZSIsInZhbHVlIiwicmVkdWNlIiwicmVzdWx0IiwibGV0dGVyIiwicmVwbGFjZSIsInRoaXMiLCJTUEVDSUFMX0NIQVJBQ1RFUlMiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZURpYWNyaXRpY3MiLCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyIsImV4dHJhIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInJlcGxhY2VBbGwiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidW5kZWZpbmVkIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsImRpcmVjdGl2ZSIsIiRkb2N1bWVudCIsInJlc3RyaWN0Iiwic2NvcGUiLCJjbGlja091dHNpZGUiLCJsaW5rIiwiZWwiLCJhdHRyIiwib24iLCJ0YXJnZXQiLCJjb250YWlucyIsIiRhcHBseSIsIiRldmFsIiwiJHN0YXRlIiwiJGNvbXBpbGUiLCIkaW50ZXJwb2xhdGUiLCJnZXRTdHlsZSIsInRlbXBsYXRlU3R5bGVVcmwiLCJzdHlsZSIsImhyZWYiLCJyZWwiLCJtYXRjaCIsImVsZW0iLCJ0ZW1wbGF0ZVN0eWxlcyIsImh0bWwiLCJzdGFydFN5bWJvbCIsImVuZFN5bWJvbCIsImFwcGVuZCIsIiRvbiIsImV2ZW50IiwidG9TdGF0ZSIsInRvUGFyYW1zIiwiZnJvbVN0YXRlIiwiZnJvbVBhcmFtcyIsInN0YXRlcyIsIm5hbWUiLCJwYXJlbnQiLCJnZXQiLCJ2aWV3cyIsIl8iLCJ2aWV3Iiwic3BsaXQiLCJmbGF0IiwiaW5jbHVkZXMiLCJyZXZlcnNlIiwiZ2V0U3R5bGVzIiwiJHNjb3BlIiwiTGFuZ3VhZ2VTdmMiLCJVc2VyU3ZjIiwiJG1kVG9hc3QiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJzaG93Iiwic2ltcGxlIiwidGV4dENvbnRlbnQiLCJwb3NpdGlvbiIsImhpZGVEZWxheSIsIiQiLCJsb2FkIiwiZmFkZU91dCIsImZhZGVJbiIsImNsb3Nlc3QiLCJ0b2dnbGVDbGFzcyIsImNoZWNrZWQiLCJkb2N1bWVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRoZW1lQ291bnRlciIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImZsaXBUaGVtZSIsImhpZGUiLCJzZXRUaW1lb3V0IiwiZ2V0SlNPTiIsInNraWxscyIsImZpbHRlciIsInNraWxsIiwiaG9iYmllcyIsImpvYnMiLCJqb2IiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiY2hhcmFkZXMiLCJnZXRUaW1lU3BhbiIsImxhbmd1YWdlcyIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInNlbGVjdExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImhvdmVyZGl2IiwiZGl2aWQiLCJsZWZ0IiwiY2xpZW50WCIsInRvcCIsImNsaWVudFkiLCJnZXRFbGVtZW50QnlJZCIsImNzcyIsInRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsInVzZXIiLCJsb2dpbiIsInRoZW4iLCJyZXNwb25zZSIsImxvZ2dlZEluIiwiX2lkIiwiY3VycmVudFVzZXIiLCJiaXJ0aERhdGUiLCJsb2FkaW5nIiwibG9nb3V0IiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsImNsZWFyIiwiY2F0Y2giLCJlcnJvciIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiJGxvY2F0aW9uIiwiR2FtZVN2YyIsImFubm91bmNlIiwiY2FudmFzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXRoIiwiYWxlcnQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZm9udCIsImZpbGxTdHlsZSIsInRleHRBbGlnbiIsInNob3RzIiwiYXN0ZXJvaWRzIiwicG93ZXJ1cHMiLCJleHBsb3Npb25zIiwibWFwIiwic3BhY2VwaWNzIiwic3BhY2UiLCJwb3dlcnVwVHlwZXMiLCJhbm5vdW5jZW1lbnQiLCJjeWNsZSIsInJvd3MiLCJjb2x1bW5zIiwic2l6ZSIsImltZyIsIkltYWdlIiwiYWN0aXZhdGUiLCJzcGFjZXNoaXAiLCJtYXhTcGVlZCIsImNvb2xkb3duIiwiY29vbGRvd25UaW1lIiwicmFuZ2UiLCJzaGllbGQiLCJleHBsb2RlIiwic3Bhd25Bc3Rlcm9pZHMiLCJwb3dlcnVwIiwiYXJyYXkiLCJzcmMiLCJleHBsb3Npb25JbWFnZSIsImV2YWx1YXRlS2V5cyIsInBsYXlpbmciLCJzaG9vdCIsInJvdGF0aW9uIiwic3BlZWQiLCJzY29yZSIsIlNwYWNlc2hpcCIsImF1dG9TcGF3biIsIndpZHRoIiwiaGVpZ2h0IiwiY2Fubm9uIiwieCIsInkiLCJhbmdsZSIsImlkIiwicm91bmQiLCJTaG90IiwibW92ZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJmaWxsIiwiYXN0ZXJvaWQiLCJoaXQiLCJnYW1lT3ZlciIsImNvcyIsInNpbiIsImxpZmVzcGFuIiwiQXN0ZXJvaWQiLCJnZXRFbnRyeVBvc2l0aW9uIiwicm90YXRpb25TcGVlZCIsIkV4cGxvc2lvbiIsInNob3QiLCJwb2ludHMiLCJzcGF3blBvd2VydXAiLCJvYmplY3QiLCJQb3dlcnVwIiwiZGVsYXkiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiY29sdW1uIiwicm93IiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImdyaWRYIiwiZ3JpZFkiLCJvYmplY3QxIiwib2JqZWN0MiIsImtleXMiLCJhbW91bnQiLCJoaWdoc2NvcmUiLCJzZXRIaWdoc2NvcmUiLCJyZXNpemVDYW52YXMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5Q29kZSIsIndoaWNoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsImNsZWFyUmVjdCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJ0YWxseSIsImZpbGxUZXh0IiwibWVhc3VyZVRleHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJidWJibGVzIiwiY29sb3JzIiwiQnViYmxlIiwicmFkaXVzIiwiZXhwYW5kaW5nIiwiY2lyY3VtZmVyZW5jZSIsIm1heFJhZGl1cyIsInZ4IiwidnkiLCJmaWx0ZXJCdWJibGVzIiwiYnViYmxlIiwic2VsZWN0V29yZCIsImNhdGVnb3J5Iiwid29yZCIsIkVtYWlsU3ZjIiwib3B0aW9ucyIsInRleHQiLCJjb250YWN0IiwiZW1haWwiLCJwaG9uZSIsImFib3V0Iiwic2VuZGluZyIsInNlbnQiLCJzdGF0dXMiLCJlcnIiLCJnZXRTa2lsbCIsInNraWxsQ29kZSIsImNvZGUiLCIkd2luZG93IiwiaG9iYnlTZWxlY3RvclZpc2libGUiLCJzZWxlY3RlZEhvYmJ5Iiwic2VsZWN0SG9iYnkiLCJob2JieSIsInNob3dIb2JieSIsImluZGV4IiwiaW1hZ2VzIiwiTEVGVCIsIlJJR0hUIiwibGVtbWluZ3NJbWFnZSIsImRlY29ySW1hZ2UiLCJsZW1taW5ncyIsInN0YXJ0ZWQiLCJhY3Rpb25zIiwid2FsayIsInN0YXJ0IiwiZW5kIiwiaHVoIiwiZmFsbCIsImZseSIsInN0b3AiLCJjbGltYiIsImJ1aWxkIiwicHVuY2giLCJkaWciLCJMZW1taW5nIiwiaW5pdCIsImFjdCIsImFjdGlvbiIsImFuaW1hdGlvbiIsInNjYWxlIiwiaGF0Y2giLCJvcGVuIiwicmVjdCIsIkNhdGVnb3JpZXNTdmMiLCJzaG93Q2F0ZWdvcnkiLCJnZXRDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsInRhc2tzIiwiaiIsInRhc2siLCJzZWxlY3RDYXRlZ29yeSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWxlY3RlZFRhc2tzIiwic2VsZWN0YWJsZVRhc2tzIiwiZW50ZXJlZENhdGVnb3J5IiwibmV3Q2F0ZWdvcnkiLCJmb3VuZCIsImFkZENhdGVnb3J5IiwibmV3VGFzayIsInNlbGVjdFRhc2siLCJhZGRUYXNrIiwiZW50ZXJlZFRhc2siLCJyZW1vdmVUYXNrIiwidW5zZWxlY3RUYXNrIiwidGFza0xpc3QiLCJzcGxpY2UiLCJpbmRleE9mIiwic3RhcnRQcmlvcml0aXppbmciLCJzZXRQcmlvcml0eUxpc3QiLCJnZXRRdWVzdGlvbnMiLCJjb3VudGVyIiwidWkiLCJmaXJlYmFzZXVpIiwiQXV0aFVJIiwic3RhcnRVSSIsImNhbGxiYWNrcyIsInNpZ25JblN1Y2Nlc3MiLCJjcmVkZW50aWFsIiwicmVkaXJlY3RVcmwiLCJnZXRJZFRva2VuIiwiaWRUb2tlbiIsImF1dGhlbnRpY2F0ZSIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJlbWFpbFZlcmlmaWVkIiwiJGVtaXQiLCJtb2RhbCIsInNpZ25JbkZhaWx1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNyZWQiLCJzaWduSW5XaXRoQ3JlZGVudGlhbCIsInVpU2hvd24iLCJkaXNwbGF5Iiwic2lnbkluU3VjY2Vzc1VybCIsInNpZ25Jbk9wdGlvbnMiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJQUk9WSURFUl9JRCIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwic2lnbkluRmxvdyIsInJlc2V0IiwiJGZpbHRlciIsIlBvc3RzU3ZjIiwiYWRkUG9zdCIsInBvc3RCb2R5IiwiY3JlYXRlIiwiYm9keSIsInBvc3QiLCJmZXRjaCIsInBvc3RzIiwiZ2V0UG9zdCIsInVuc2hpZnQiLCJjb3VudHJpZXMiLCJmbGFnIiwidGlkYml0IiwiZGF0ZU9wdGlvbnMiLCJtYXhEYXRlIiwibWluRGF0ZSIsImluaXREYXRlIiwiZGF0ZXBpY2tlck1vZGUiLCJ1c2VybmFtZVRvZ2dsZSIsInBhc3N3b3JkVG9nZ2xlIiwidG9nZ2xlVXNlcm5hbWUiLCJuZXdVc2VybmFtZSIsInVzZXJuYW1lIiwidG9nZ2xlUGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImNoZWNrUGFzc3dvcmQiLCJwYXNzd29yZCIsIm9yaWdpbmFsQmciLCJhbmltYXRlIiwiYmFja2dyb3VuZENvbG9yIiwiY2hhbmdlUGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsImNoYW5nZVVzZXJuYW1lIiwidXBkYXRlVXNlciIsImZsYWdzIiwidXNlckZsYWdzIiwibG9hZENvdW50cmllcyIsIiRxdWVyeSIsImNvdW50cnkiLCIkd2F0Y2giLCJzZWxlY3RlZFNraWxsIiwic2tpbGxzVmlzaWJsZSIsInByb2plY3RzIiwibGFiZWxzIiwiZW1wbG95ZXIiLCJjb25jYXQiLCJmaWx0ZXJlZFByb2plY3RzIiwicHJvamVjdCIsInNldFNlbGVjdGVkU2tpbGwiLCJjaGFydE9wdGlvbnMiLCJjdXRvdXRQZXJjZW50YWdlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRvb2x0aXBzIiwiY2hhcnRTdHlsZSIsImltYWdlIiwiJHNjZSIsIlRlblRoaW5nc1N2YyIsInBhZ2UiLCJsaXN0cyIsInNlYXJjaCIsInNlYXJjaEZpZWxkIiwibmV3SXRlbSIsImxhbmd1YWdlRmlsdGVyIiwiY2F0ZWdvcnlGaWx0ZXIiLCJzZWxlY3RlZExpc3QiLCJoaWdobGlnaHRlZExpc3RzIiwiaGlnaGxpZ2h0ZWRMaXN0SWRzIiwibGlzdElkc1RvRGVsZXRlIiwiY29uZmlybWVkIiwiZXhoYXVzdGVkIiwib2JqZWN0Q2F0ZWdvcmllcyIsImJsdXJiVHlwZXMiLCJhcGkiLCJhZG1pbk9ubHkiLCJoYXZlQ29tbW9uSXRlbXMiLCJhcnIxIiwiYXJyMiIsInNvbWUiLCJrZXlEb3duIiwiaXMiLCJjcmVhdGVWYWx1ZSIsInRyaWdnZXIiLCJhZGRMaXN0IiwiY3JlYXRvciIsInZhbHVlcyIsImFuc3dlcnMiLCJpc0R5bmFtaWMiLCJzZXRTZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZExpc3QiLCJsaXN0IiwiZ2V0TGlzdCIsInJlYWRPbmx5IiwiYWRtaW4iLCJnZXRGaWx0ZXJDb3VudCIsInNlYXJjaExpc3RzIiwiYXN5bmMiLCJ2aWV3VmFsdWUiLCJoaWdobGlnaHRlZFNlYXJjaFRleHQiLCJyZWdleCIsInZhbHVlT3JkZXIiLCJmaWVsZCIsIm9yZGVyIiwib3JkZXJCeSIsImdldExpc3RzIiwiZ2V0TW9yZUxpc3RzIiwic2V0TGFuZ3VhZ2VGaWx0ZXIiLCJzZXRDYXRlZ29yeUZpbHRlciIsInRvZ2dsZUNhdGVnb3J5RmlsdGVyIiwiYWxsQ2F0ZWdvcmllcyIsImdldENhdGVnb3J5TGFiZWwiLCJzdWJjYXRlZ29yaWVzIiwic3ViY2F0ZWdvcnkiLCJzdGFydHNXaXRoIiwibGFiZWwiLCJqb2luIiwic29ydEJ5IiwibGltaXQiLCJsYW5ndWFnZU5vdCIsImNhdGVnb3JpZXNOb3QiLCJjb3VudCIsIm5leHRQYWdlIiwiZ2V0TGlzdE5hbWUiLCJsaXN0SWQiLCJ1cGRhdGVWYWx1ZSIsInVwZGF0ZWRJdGVtUmVzcG9uc2UiLCJ1cGRhdGVMaXN0VmFsdWUiLCJibHVyYlR5cGUiLCJkZWxldGVWYWx1ZSIsImhhc0R1cGxpY2F0ZSIsImNyZWF0ZWRJdGVtUmVzcG9uc2UiLCJjcmVhdGVMaXN0VmFsdWUiLCJ1cHNlcnRMaXN0IiwiYmx1cmIiLCJ2YWx1ZVRvRGVsZXRlIiwiZGVsZXRlTGlzdFZhbHVlIiwidXBkYXRlTGlzdCIsInVwZGF0ZXMiLCJzYXZpbmciLCJsaXN0SW5kZXgiLCJmaW5kSW5kZXgiLCJjaGFuZ2VzIiwiY3JlYXRlTGlzdCIsImFzc2lnbiIsImRlbGV0ZUxpc3QiLCJkZWxldGVMaXN0cyIsImNvbmZpcm1NZXJnZUxpc3RzIiwibWVyZ2VMaXN0cyIsImNvbmZpcm1EZWxldGVMaXN0cyIsInRvZ2dsZUhpZ2hsaWdodGVkTGlzdHMiLCJ0b2dnbGVIaWdobGlnaHRlZExpc3QiLCJoaWdobGlnaHRlZExpc3RJZCIsInNldERpZmZpY3VsdHkiLCJkaWZmaWN1bHR5Iiwic2V0RnJlcXVlbmN5IiwiZnJlcXVlbmN5IiwiZ2V0VXBkYXRlZENhdGVnb3JpZXMiLCJsaXN0Q2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInVwZGF0ZWRDYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImxpc3RzVG9VcGRhdGUiLCJldmVyeSIsImFsbCIsImxpc3RUb1VwZGF0ZSIsInVwZGF0ZWRMaXN0IiwiY2F0ZWdvcnlTdGF0dXMiLCJhbnN3ZXIiLCJyZW1vdmVBbGxCdXRMZXR0ZXJzIiwiZ2V0U2VsZWN0ZWRMaXN0c1RpdGxlIiwiZ2V0Qmx1cmJzIiwidHlwZSIsImdldHRpbmdCbHVyYnMiLCJnZXRFbWJlZFVybCIsInZpZGVvSWQiLCJ0cmltIiwidHJ1c3RBc1Jlc291cmNlVXJsIiwiZ2V0TGFuZ3VhZ2VzIiwibGFuZ3VhZ2VTdGF0cyIsImdldExpc3RMYW5ndWFnZVN0YXRzIiwiY2F0ZWdvcnlTdGF0cyIsImdldExpc3RDYXRlZ29yeVN0YXRzIiwiZ2V0VXNlcnMiLCJnZXRRdWV1ZSIsInF1ZXVlIiwiZ2V0UGF1c2UiLCJwYXVzZWQiLCJ1c2VycyIsInRvZ2dsZUJhbiIsInRvZ2dsZVBhdXNlIiwiJHN0YXRlUGFyYW1zIiwiZGlzYWJsZWRDYXRlZ29yaWVzIiwidXBkYXRlR2FtZUNhdGVnb3J5IiwiZ2FtZSIsImMiLCJnZXRHYW1lIiwiZGF0YXNldHMiLCJsaW5lQ2hhcnRPcHRpb25zIiwicmVzcG9uc2l2ZSIsInBsdWdpbnMiLCJsZWdlbmQiLCJ0aXRsZSIsImdldFBsYXlTdGF0cyIsInllYXJzIiwidW5pcSIsIm1vbnRocyIsInRpbWVzIiwicGxheVN0YXRzIiwic2VyaWVzIiwibW9udGgiLCJ1bmlxdWVQbGF5ZXJzIiwiZ2V0R2FtZVN0YXRzIiwiZ2FtZVN0YXRzIiwic29ydGVkRGF0YSIsInRpbWVSZW1haW5pbmciLCJ0aW1lRXhlcmNpc2luZyIsInRpbWVSZXN0aW5nIiwicmVzdCIsImV4ZXJjaXNpbmciLCJzb3VuZHMiLCJBdWRpbyIsIm9mZiIsInN3aXRjaCIsImV4ZXJjaXNlcyIsInByb2dyZXNzIiwid29ya291dCIsImV4Y2VyY2lzZVRpbWUiLCJjbGVhckludGVydmFsIiwidGltZXIiLCJleGVyY2lzZSIsInNldEludGVydmFsIiwiY3VycmVudEV4ZXJjaXNlIiwicGxheSIsIiRodHRwIiwic3ZjIiwiZ2V0VGFza3MiLCJjaG9pY2VzIiwicHJpb3JpdHlMaXN0IiwiZmlyc3RDaG9pY2UiLCJzZWNvbmRDaG9pY2UiLCJjaG9pY2UiLCJ0IiwibSIsInNodWZmbGUiLCJnZXRQcmlvcml0eUxpc3QiLCJnZXRRdWl6RmlsZXMiLCJxdWl6IiwiZ2V0SGlnaHNjb3JlIiwicHV0IiwiZGVsZXRlIiwicmVwb3J0TGlzdCIsImdldFVzZXIiLCJzZXRUb2tlbiIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiY3JlYXRlVXNlciIsIkZpbGVTdmMiLCJhbmltYWxzIiwiYW5pbWFsIiwic291bmQiLCJzdWJzdHJpbmciLCJjYXBpdGFsaXplIiwiZ2V0UmFuZG9tQW5pbWFscyIsImd1ZXNzIiwiZ2V0U2NvcmUiLCJpc1Njb3JlVmlzaWJsZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQUEsMkJBQUFBLEdBQUEsQ0FDQTtJQUNBQyxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQTtFQUdBQyxPQUFBQSxHQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFD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QUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQUFDLE1BQUFBLENBQUEsVUFBQUMsY0FBQUEsRUFBQUMsa0JBQUFBLEVBQUFDLG1CQUFBQSxFQUFBQyxpQkFBQUEsRUFBQUE7RUFDQUYsa0JBQUFBLENBQUFHLFNBQUFBLENBQUEsT0FBQSxDQUFBLEVBQ0FGLG1CQUFBQSxDQUFBSCxNQUFBQSxDQUFBTSxVQUFBQSxDQUFBQSxDQUFBLENBQUEsQ0FBQSxFQUVBTCxjQUFBQSxDQUNBTSxLQUFBQSxDQUFBLE1BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLE9BQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFlBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGFBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsUUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLFlBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxXQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsVUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsV0FBQTtJQUNBRSxVQUFBQSxFQUFBLGNBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE1BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLE9BQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsaUJBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsb0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGdCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxpQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxvQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsY0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGlCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxhQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsRUFHQUwsaUJBQUFBLENBQUFPLFNBQUFBLENBQUE7SUFDQUMsT0FBQUEsRUFBQUEsQ0FBQSxDQUFBO0lBQ0FDLFdBQUFBLEVBQUFBLENBQUE7RUFBQSxDQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUNwSUFmLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FlLE9BQUFBLENBQUEsY0FBQSxFQUFBLFVBQUFDLFVBQUFBLEVBQUFDLFFBQUFBLEVBQUFBO0VBU0EsSUFBQUMsVUFBQUE7SUFDQUMsT0FBQUEsR0FBQSxTQUFBQSxDQUFBLEVBQUE7TUFBQSxDQUNBRCxVQUFBQSxHQUFBLElBQUFFLFNBQUFBLENBVEEsUUFBQSxLQUFBQyxNQUFBQSxDQUFBQyxRQUFBQSxDQUFBQyxRQUFBQSxHQUNBLFFBQUEsR0FBQUYsTUFBQUEsQ0FBQUMsUUFBQUEsQ0FBQUUsSUFBQUEsR0FFQSxPQUFBLEdBQUFILE1BQUFBLENBQUFDLFFBQUFBLENBQUFFLElBQUFBLENBQUFBLEVBUUFDLE1BQUFBLEdBQUEsWUFBQTtRQUNBQyxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBLHFCQUFBLENBQ0E7TUFBQSxDQUFBLEVBRUFULFVBQUFBLENBQUFVLE9BQUFBLEdBQUEsVUFBQUMsQ0FBQUEsRUFBQUE7UUFDQUgsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQSxtQ0FBQSxDQUFBLEVBQ0FWLFFBQUFBLENBQUFFLE9BQUFBLEVBQUEsR0FBQSxDQUNBO01BQUEsQ0FBQSxFQUVBRCxVQUFBQSxDQUFBWSxPQUFBQSxHQUFBLFVBQUFELENBQUFBLEVBQUFBO1FBQ0FILE9BQUFBLENBQUFDLEdBQUFBLENBQUEsU0FBQSxHQUFBRSxDQUFBQSxHQUFBLFlBQUEsR0FBQVgsVUFBQUEsQ0FBQWEsVUFBQUEsQ0FDQTtNQUFBLENBQUEsRUFFQWIsVUFBQUEsQ0FBQWMsU0FBQUEsR0FBQSxVQUFBSCxDQUFBQSxFQUFBQTtRQUNBLElBQUFJLE9BQUFBLEdBQUFDLElBQUFBLENBQUFD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LEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7TUFDQXJOLENBQUFBLEVBQUEsQ0FBQTtNQUNBVSxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBNE0sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO01BQ0FBLFNBQUFBLENBQUFDLFFBQUFBLElBQUEsR0FDQTtJQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0F0SCxJQUFBQSxFQUFBLFVBQUE7SUFDQTZHLFlBQUFBLEVBQUEsWUFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7TUFDQXJOLENBQUFBLEVBQUEsQ0FBQTtNQUNBVSxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBNE0sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO01BQ0FBLFNBQUFBLENBQUFFLFFBQUFBLEdBQUEsQ0FBQSxLQUNBRixTQUFBQSxDQUFBRyxZQUFBQSxJQUFBLENBQUEsQ0FFQTtJQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0F4SCxJQUFBQSxFQUFBLE9BQUE7SUFDQTZHLFlBQUFBLEVBQUEsZ0JBQUE7SUFDQUMsS0FBQUEsRUFBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUE7TUFDQUMsT0FBQUEsRUFBQSxDQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBO01BQ0FyTixDQUFBQSxFQUFBLENBQUE7TUFDQVUsU0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUE7SUFFQTRNLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7SUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFB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SyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUErSixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQWhLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQStKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxDQUFBLEVBRUFILFFBQUFBLENBQUFFLFlBQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsR0FDQS9KLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQStKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBaEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBK0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FoSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUErSixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLEtBQUEsRUFDQSxNQUFBLEdBQ0EvSixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUErSixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQWhLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQStKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBaEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBK0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQXJHLEdBQUFBLENBQUFHLFNBQUFBLEdBQUErRixRQUFBQSxFQUNBbEcsR0FBQUEsQ0FBQUUsSUFBQUEsR0FBQSxvQkFBQSxFQUNBRixHQUFBQSxDQUFBc0csUUFBQUEsQ0FBQSxXQUFBLEVBQUExRyxNQUFBQSxDQUFBNkMsS0FBQUEsR0FB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SUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFdBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsT0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxlQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFlBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsd0JBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsVUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxZQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsY0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxVQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGtCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxpQ0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxrQ0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxRQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxlQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxRQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEseUJBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsdUNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsMEJBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsT0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxhQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsY0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsT0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxVQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFlBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsTUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxZQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsa0JBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxnQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxVQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLG9CQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE9BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsZ0JBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxNQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLDZCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGlDQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLHNEQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxlQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsT0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxXQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFdBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxRQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFlBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsbUJBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSw4Q0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxXQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE1BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsZUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxRQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFdBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsbUNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsVUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE9BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxXQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxhQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE9BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsZ0NBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsTUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSwyQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE9BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsT0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFlBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsVUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxVQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsdUJBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsd0NBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsb0JBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxnQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxZQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGtDQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsYUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxlQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFdBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFdBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsWUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxRQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE9BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxRQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLHNCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFlBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsNEJBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsWUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxrQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSw0Q0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxNQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsVUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLDBCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFlBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsWUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxZQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE9BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsV0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxVQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxVQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFlBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxlQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE9BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsZ0JBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxXQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE9BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsTUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxhQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE1BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxNQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGtCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGtCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsVUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxRQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLDJCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsYUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxxQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxVQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE9BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsVUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxRQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLG9CQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsY0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxpQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxZQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE9BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxXQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLDhDQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsd0JBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsVUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxjQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFlBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsYUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSx1QkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxhQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLDJCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLHNCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFdBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsMEJBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsTUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSw2QkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxNQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsWUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsY0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE9BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxxQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxRQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLDJCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLDhCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxzQ0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSwwQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFlBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsVUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxrQ0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxtQ0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSx5QkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxzQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxVQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsbUJBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsT0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsY0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxRQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUE7RUFXQW5VLE1BQUFBLENBQUFxVSxXQUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUEsSUFBQWhULElBQUFBO0lBQ0FpVCxPQUFBQSxFQUFBLElBQUFqVCxJQUFBQSxDQUFBLElBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFB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QUFBNWlCLE1BQUFBLENBQUE0akIsT0FBQUEsQ0FBQTNoQixNQUFBQSxDQUFBNGhCLE1BQUFBLElBQUF4a0IsSUFBQUEsS0FBQXdrQixNQUFBQSxDQUFBeGtCLElBQUFBLENBQUFBLENBQUF5RyxHQUFBQSxDQUFBK2QsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQXhrQixJQUFBQSxDQUFBQSxDQUFBQSxDQUFBeEcsS0FBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxDQUFBO0VBRUFtSCxNQUFBQSxDQUFBbWtCLFFBQUFBLEdBQUEsTUFDQSxHQUFBbmtCLE1BQUFBLENBQUE0akIsT0FBQUEsQ0FBQTNoQixNQUFBQSxDQUFBNGhCLE1BQUFBLElBQUFBLE1BQUFBLENBQUF4a0IsSUFBQUEsS0FBQXdrQixNQUFBQSxDQUFBSyxLQUFBQSxDQUFBQSxDQUFBaHJCLE1BQUFBLElBQUE4RyxNQUFBQSxDQUFBNGpCLE9BQUFBLENBQUExcUIsTUFBQUEsRUFBQUEsRUFFQThHLE1BQUFBLENBQUFva0IsY0FBQUEsR0FBQSxNQUFBcGtCLE1BQUFBLENBQUE0akIsT0FBQUEsQ0FBQTNoQixNQUFBQSxDQUFBNGhCLE1BQUFBLElBQUFBLE1BQUFBLENBQUFLLEtBQUFBLENBQUFBLENBQUFockIsTUFBQUEsS0FBQThHLE1BQUFBLENBQUE0akIsT0FBQUEsQ0FBQTFxQixNQUNBO0FBQUEsQ0FBQSxDQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAgPSBbXHJcbiAge1xyXG4gICAgYmFzZTogXCJBXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDFcXHUyNEI2XFx1RkYyMVxcdTAwQzBcXHUwMEMxXFx1MDBDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHUwMEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHUwMEM0XFx1MDFERVxcdTFFQTJcXHUwMEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFBXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFFXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwQzZcXHUwMUZDXFx1MDFFMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQU9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOFxcdUE3M0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0MlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJDXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDNcXHUyNEI4XFx1RkYyM1xcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMEM3XFx1MUUwOFxcdTAxODdcXHUwMjNCXFx1QTczRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ0XFx1MjRCOVxcdUZGMjRcXHUxRTBBXFx1MDEwRVxcdTFFMENcXHUxRTEwXFx1MUUxMlxcdTFFMEVcXHUwMTEwXFx1MDE4QlxcdTAxOEFcXHUwMTg5XFx1QTc3OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMVxcdTAxQzRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjJcXHUwMUM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJFXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDVcXHUyNEJBXFx1RkYyNVxcdTAwQzhcXHUwMEM5XFx1MDBDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHUwMENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ2XFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0N1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJIXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJJXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDlcXHUyNEJFXFx1RkYyOVxcdTAwQ0NcXHUwMENEXFx1MDBDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHUwMENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJKXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEFcXHUyNEJGXFx1RkYyQVxcdTAxMzRcXHUwMjQ4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJLXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNENcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTEpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDREXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRFXFx1MjRDM1xcdUZGMkVcXHUwMUY4XFx1MDE0M1xcdTAwRDFcXHUxRTQ0XFx1MDE0N1xcdTFFNDZcXHUwMTQ1XFx1MUU0QVxcdTFFNDhcXHUwMjIwXFx1MDE5RFxcdUE3OTBcXHVBN0E0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNEZcXHUyNEM0XFx1RkYyRlxcdTAwRDJcXHUwMEQzXFx1MDBENFxcdTFFRDJcXHUxRUQwXFx1MUVENlxcdTFFRDRcXHUwMEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx1MDBENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHUwMEQ4XFx1MDFGRVxcdTAxODZcXHUwMTlGXFx1QTc0QVxcdUE3NENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9JXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9PXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NEVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9VXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAyMjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlBcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1MFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUxXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlJcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1MlxcdTI0QzdcXHVGRjMyXFx1MDE1NFxcdTFFNThcXHUwMTU4XFx1MDIxMFxcdTAyMTJcXHUxRTVBXFx1MUU1Q1xcdTAxNTZcXHUxRTVFXFx1MDI0Q1xcdTJDNjRcXHVBNzVBXFx1QTdBNlxcdUE3ODJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlNcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1M1xcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJUWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJVXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTVcXHUyNENBXFx1RkYzNVxcdTAwRDlcXHUwMERBXFx1MDBEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx1MDBEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIldcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1N1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU4XFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU5XFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx1MDBERFxcdTAxNzZcXHUxRUY4XFx1MDIzMlxcdTFFOEVcXHUwMTc4XFx1MUVGNlxcdTFFRjRcXHUwMUIzXFx1MDI0RVxcdTFFRkVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1QVxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2MVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxcdTAwRTBcXHUwMEUxXFx1MDBFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHUwMEUzXFx1MDEwMVxcdTAxMDNcXHUxRUIxXFx1MUVBRlxcdTFFQjVcXHUxRUIzXFx1MDIyN1xcdTAxRTFcXHUwMEU0XFx1MDFERlxcdTFFQTNcXHUwMEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFhXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFlXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwRTZcXHUwMUZEXFx1MDFFM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYW9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOVxcdUE3M0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0RdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2MlxcdTI0RDFcXHVGRjQyXFx1MUUwM1xcdTFFMDVcXHUxRTA3XFx1MDE4MFxcdTAxODNcXHUwMjUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJjXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjNcXHUyNEQyXFx1RkY0M1xcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHUwMEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjNcXHUwMUM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJlXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjVcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJnXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjdcXHUyNEQ2XFx1RkY0N1xcdTAxRjVcXHUwMTFEXFx1MUUyMVxcdTAxMUZcXHUwMTIxXFx1MDFFN1xcdTAxMjNcXHUwMUU1XFx1MDI2MFxcdUE3QTFcXHUxRDc5XFx1QTc3Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY4XFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImh2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxOTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImlcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2OVxcdTI0RDhcXHVGRjQ5XFx1MDBFQ1xcdTAwRURcXHUwMEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx1MDBFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QVxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJrXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkJcXHUyNERBXFx1RkY0QlxcdTFFMzFcXHUwMUU5XFx1MUUzM1xcdTAxMzdcXHUxRTM1XFx1MDE5OVxcdTJDNkFcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBN0EzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJsXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkNcXHUyNERCXFx1RkY0Q1xcdTAxNDBcXHUwMTNBXFx1MDEzRVxcdTFFMzdcXHUxRTM5XFx1MDEzQ1xcdTFFM0RcXHUxRTNCXFx1MDE3RlxcdTAxNDJcXHUwMTlBXFx1MDI2QlxcdTJDNjFcXHVBNzQ5XFx1QTc4MVxcdUE3NDddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm1cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2RFxcdTI0RENcXHVGRjREXFx1MUUzRlxcdTFFNDFcXHUxRTQzXFx1MDI3MVxcdTAyNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RVxcdTI0RERcXHVGRjRFXFx1MDFGOVxcdTAxNDRcXHUwMEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RlxcdTI0REVcXHVGRjRGXFx1MDBGMlxcdTAwRjNcXHUwMEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxcdTAwRjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHUwMEY2XFx1MDIyQlxcdTFFQ0ZcXHUwMTUxXFx1MDFEMlxcdTAyMERcXHUwMjBGXFx1MDFBMVxcdTFFRERcXHUxRURCXFx1MUVFMVxcdTFFREZcXHUxRUUzXFx1MUVDRFxcdTFFRDlcXHUwMUVCXFx1MDFFRFxcdTAwRjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib2lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib3VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib29cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwicFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDcwXFx1MjRERlxcdUZGNTBcXHUxRTU1XFx1MUU1N1xcdTAxQTVcXHUxRDdEXFx1QTc1MVxcdUE3NTNcXHVBNzU1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJxXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiclwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDcyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwic1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDczXFx1MjRFMlxcdUZGNTNcXHUwMERGXFx1MDE1QlxcdTFFNjVcXHUwMTVEXFx1MUU2MVxcdTAxNjFcXHUxRTY3XFx1MUU2M1xcdTFFNjlcXHUwMjE5XFx1MDE1RlxcdTAyM0ZcXHVBN0E5XFx1QTc4NVxcdTFFOUJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTcyOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDc1XFx1MjRFNFxcdUZGNTVcXHUwMEY5XFx1MDBGQVxcdTAwRkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxcdTAwRkNcXHUwMURDXFx1MDFEOFxcdTAxRDZcXHUwMURBXFx1MUVFN1xcdTAxNkZcXHUwMTcxXFx1MDFENFxcdTAyMTVcXHUwMjE3XFx1MDFCMFxcdTFFRUJcXHUxRUU5XFx1MUVFRlxcdTFFRURcXHUxRUYxXFx1MUVFNVxcdTFFNzNcXHUwMTczXFx1MUU3N1xcdTFFNzVcXHUwMjg5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2eVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzYxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ3XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzdcXHUyNEU2XFx1RkY1N1xcdTFFODFcXHUxRTgzXFx1MDE3NVxcdTFFODdcXHUxRTg1XFx1MUU5OFxcdTFFODlcXHUyQzczXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ4XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzhcXHUyNEU3XFx1RkY1OFxcdTFFOEJcXHUxRThEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzlcXHUyNEU4XFx1RkY1OVxcdTFFRjNcXHUwMEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxcdTAwRkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3QVxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjNdL2csXHJcbiAgfSxcclxuXTtcclxudmFyIGRvbWFpbnMgPSBbXHJcbiAgXCIuY29tXCIsXHJcbiAgXCIub3JnXCIsXHJcbiAgXCIubmV0XCIsXHJcbiAgXCIuYWNcIixcclxuICBcIi5hZFwiLFxyXG4gIFwiLmFlXCIsXHJcbiAgXCIuYWZcIixcclxuICBcIi5hZ1wiLFxyXG4gIFwiLmFpXCIsXHJcbiAgXCIuYWxcIixcclxuICBcIi5hbVwiLFxyXG4gIFwiLmFvXCIsXHJcbiAgXCIuYXFcIixcclxuICBcIi5hclwiLFxyXG4gIFwiLmFzXCIsXHJcbiAgXCIuYXRcIixcclxuICBcIi5hdVwiLFxyXG4gIFwiLmF3XCIsXHJcbiAgXCIuYXhcIixcclxuICBcIi5helwiLFxyXG4gIFwiLmJhXCIsXHJcbiAgXCIuYmJcIixcclxuICBcIi5iZFwiLFxyXG4gIFwiLmJlXCIsXHJcbiAgXCIuYmZcIixcclxuICBcIi5iZ1wiLFxyXG4gIFwiLmJoXCIsXHJcbiAgXCIuYmlcIixcclxuICBcIi5ialwiLFxyXG4gIFwiLmJtXCIsXHJcbiAgXCIuYm5cIixcclxuICBcIi5ib1wiLFxyXG4gIFwiLmJxXCIsXHJcbiAgXCIuYnJcIixcclxuICBcIi5ic1wiLFxyXG4gIFwiLmJ0XCIsXHJcbiAgXCIuYndcIixcclxuICBcIi5ieVwiLFxyXG4gIFwiLmJ6XCIsXHJcbiAgXCIuY2FcIixcclxuICBcIi5jY1wiLFxyXG4gIFwiLmNkXCIsXHJcbiAgXCIuY2ZcIixcclxuICBcIi5jZ1wiLFxyXG4gIFwiLmNoXCIsXHJcbiAgXCIuY2lcIixcclxuICBcIi5ja1wiLFxyXG4gIFwiLmNsXCIsXHJcbiAgXCIuY21cIixcclxuICBcIi5jblwiLFxyXG4gIFwiLmNvXCIsXHJcbiAgXCIuY3JcIixcclxuICBcIi5jdVwiLFxyXG4gIFwiLmN2XCIsXHJcbiAgXCIuY3dcIixcclxuICBcIi5jeFwiLFxyXG4gIFwiLmN5XCIsXHJcbiAgXCIuY3pcIixcclxuICBcIi5kZVwiLFxyXG4gIFwiLmRqXCIsXHJcbiAgXCIuZGtcIixcclxuICBcIi5kbVwiLFxyXG4gIFwiLmRvXCIsXHJcbiAgXCIuZHpcIixcclxuICBcIi5lY1wiLFxyXG4gIFwiLmVlXCIsXHJcbiAgXCIuZWdcIixcclxuICBcIi5laFwiLFxyXG4gIFwiLmVyXCIsXHJcbiAgXCIuZXNcIixcclxuICBcIi5ldFwiLFxyXG4gIFwiLmV1XCIsXHJcbiAgXCIuZmlcIixcclxuICBcIi5malwiLFxyXG4gIFwiLmZrXCIsXHJcbiAgXCIuZm1cIixcclxuICBcIi5mb1wiLFxyXG4gIFwiLmZyXCIsXHJcbiAgXCIuZ2FcIixcclxuICBcIi5nZFwiLFxyXG4gIFwiLmdlXCIsXHJcbiAgXCIuZ2ZcIixcclxuICBcIi5nZ1wiLFxyXG4gIFwiLmdoXCIsXHJcbiAgXCIuZ2lcIixcclxuICBcIi5nbFwiLFxyXG4gIFwiLmdtXCIsXHJcbiAgXCIuZ25cIixcclxuICBcIi5ncFwiLFxyXG4gIFwiLmdxXCIsXHJcbiAgXCIuZ3JcIixcclxuICBcIi5nc1wiLFxyXG4gIFwiLmd0XCIsXHJcbiAgXCIuZ3VcIixcclxuICBcIi5nd1wiLFxyXG4gIFwiLmd5XCIsXHJcbiAgXCIuaGtcIixcclxuICBcIi5obVwiLFxyXG4gIFwiLmhuXCIsXHJcbiAgXCIuaHJcIixcclxuICBcIi5odFwiLFxyXG4gIFwiLmh1XCIsXHJcbiAgXCIuaWRcIixcclxuICBcIi5pZVwiLFxyXG4gIFwiLmlsXCIsXHJcbiAgXCIuaW1cIixcclxuICBcIi5pblwiLFxyXG4gIFwiLmlvXCIsXHJcbiAgXCIuaXFcIixcclxuICBcIi5pclwiLFxyXG4gIFwiLmlzXCIsXHJcbiAgXCIuaXRcIixcclxuICBcIi5qZVwiLFxyXG4gIFwiLmptXCIsXHJcbiAgXCIuam9cIixcclxuICBcIi5qcFwiLFxyXG4gIFwiLmtlXCIsXHJcbiAgXCIua2dcIixcclxuICBcIi5raFwiLFxyXG4gIFwiLmtpXCIsXHJcbiAgXCIua21cIixcclxuICBcIi5rblwiLFxyXG4gIFwiLmtwXCIsXHJcbiAgXCIua3JcIixcclxuICBcIi5rd1wiLFxyXG4gIFwiLmt5XCIsXHJcbiAgXCIua3pcIixcclxuICBcIi5sYVwiLFxyXG4gIFwiLmxiXCIsXHJcbiAgXCIubGNcIixcclxuICBcIi5saVwiLFxyXG4gIFwiLmxrXCIsXHJcbiAgXCIubHJcIixcclxuICBcIi5sc1wiLFxyXG4gIFwiLmx0XCIsXHJcbiAgXCIubHVcIixcclxuICBcIi5sdlwiLFxyXG4gIFwiLmx5XCIsXHJcbiAgXCIubWFcIixcclxuICBcIi5tY1wiLFxyXG4gIFwiLm1kXCIsXHJcbiAgXCIubWVcIixcclxuICBcIi5tZ1wiLFxyXG4gIFwiLm1oXCIsXHJcbiAgXCIubWtcIixcclxuICBcIi5tbFwiLFxyXG4gIFwiLm1tXCIsXHJcbiAgXCIubW5cIixcclxuICBcIi5tb1wiLFxyXG4gIFwiLm1wXCIsXHJcbiAgXCIubXFcIixcclxuICBcIi5tclwiLFxyXG4gIFwiLm1zXCIsXHJcbiAgXCIubXRcIixcclxuICBcIi5tdVwiLFxyXG4gIFwiLm12XCIsXHJcbiAgXCIubXdcIixcclxuICBcIi5teFwiLFxyXG4gIFwiLm15XCIsXHJcbiAgXCIubXpcIixcclxuICBcIi5uYVwiLFxyXG4gIFwiLm5jXCIsXHJcbiAgXCIubmVcIixcclxuICBcIi5uZlwiLFxyXG4gIFwiLm5nXCIsXHJcbiAgXCIubmlcIixcclxuICBcIi5ubFwiLFxyXG4gIFwiLm5vXCIsXHJcbiAgXCIubnBcIixcclxuICBcIi5uclwiLFxyXG4gIFwiLm51XCIsXHJcbiAgXCIubnpcIixcclxuICBcIi5vbVwiLFxyXG4gIFwiLnBhXCIsXHJcbiAgXCIucGVcIixcclxuICBcIi5wZlwiLFxyXG4gIFwiLnBnXCIsXHJcbiAgXCIucGhcIixcclxuICBcIi5wa1wiLFxyXG4gIFwiLnBsXCIsXHJcbiAgXCIucG1cIixcclxuICBcIi5wblwiLFxyXG4gIFwiLnByXCIsXHJcbiAgXCIucHNcIixcclxuICBcIi5wdFwiLFxyXG4gIFwiLnB3XCIsXHJcbiAgXCIucHlcIixcclxuICBcIi5xYVwiLFxyXG4gIFwiLnJlXCIsXHJcbiAgXCIucm9cIixcclxuICBcIi5yc1wiLFxyXG4gIFwiLnJ1XCIsXHJcbiAgXCIucndcIixcclxuICBcIi5zYVwiLFxyXG4gIFwiLnNiXCIsXHJcbiAgXCIuc2NcIixcclxuICBcIi5zZFwiLFxyXG4gIFwiLnNlXCIsXHJcbiAgXCIuc2dcIixcclxuICBcIi5zaFwiLFxyXG4gIFwiLnNpXCIsXHJcbiAgXCIuc2tcIixcclxuICBcIi5zbFwiLFxyXG4gIFwiLnNtXCIsXHJcbiAgXCIuc25cIixcclxuICBcIi5zb1wiLFxyXG4gIFwiLnNyXCIsXHJcbiAgXCIuc3NcIixcclxuICBcIi5zdFwiLFxyXG4gIFwiLnN1XCIsXHJcbiAgXCIuc3ZcIixcclxuICBcIi5zeFwiLFxyXG4gIFwiLnN5XCIsXHJcbiAgXCIuc3pcIixcclxuICBcIi50Y1wiLFxyXG4gIFwiLnRkXCIsXHJcbiAgXCIudGZcIixcclxuICBcIi50Z1wiLFxyXG4gIFwiLnRoXCIsXHJcbiAgXCIudGpcIixcclxuICBcIi50a1wiLFxyXG4gIFwiLnRsXCIsXHJcbiAgXCIudG1cIixcclxuICBcIi50blwiLFxyXG4gIFwiLnRvXCIsXHJcbiAgXCIudHJcIixcclxuICBcIi50dFwiLFxyXG4gIFwiLnR2XCIsXHJcbiAgXCIudHdcIixcclxuICBcIi50elwiLFxyXG4gIFwiLnVhXCIsXHJcbiAgXCIudWdcIixcclxuICBcIi51a1wiLFxyXG4gIFwiLnVzXCIsXHJcbiAgXCIudXlcIixcclxuICBcIi51elwiLFxyXG4gIFwiLnZhXCIsXHJcbiAgXCIudmNcIixcclxuICBcIi52ZVwiLFxyXG4gIFwiLnZnXCIsXHJcbiAgXCIudmlcIixcclxuICBcIi52blwiLFxyXG4gIFwiLnZ1XCIsXHJcbiAgXCIud2ZcIixcclxuICBcIi53c1wiLFxyXG4gIFwiLnllXCIsXHJcbiAgXCIueXRcIixcclxuICBcIi56YVwiLFxyXG4gIFwiLnptXCIsXHJcbiAgXCIuendcIixcclxuXTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZURpYWNyaXRpY3NcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwLnJlZHVjZSgocmVzdWx0LCBsZXR0ZXIpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKGxldHRlci5sZXR0ZXJzLCBsZXR0ZXIuYmFzZSk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IFNQRUNJQUxfQ0hBUkFDVEVSUyA9IFwiXFxcXFxcXFwvICE/QCMkJV4mKigpXys6Lnt9LDtcXFxcLSdgYOKAmeKAmFxcXCJcIjtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbJHtTUEVDSUFMX0NIQVJBQ1RFUlN9XWAsIFwiZ2lcIiksIFwiXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlQWxsQnV0TGV0dGVyc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlKCkucmVtb3ZlRGlhY3JpdGljcygpLnJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzKCk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjb25jZWFsXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGV4dHJhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFteJHtTUEVDSUFMX0NIQVJBQ1RFUlN9JHtleHRyYX1dYCwgXCJnaVwiKSwgXCLigY5cIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjYXBpdGFsaXplXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnNsaWNlKDEpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlSFRNTFwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoXCI+XCIsIFwiXFx1MjI3QlwiKS5yZXBsYWNlKFwiPFwiLCBcIlxcdTIyN0FcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJwYXJzZVN5bWJvbHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlQWxsKFwiJlwiLCBcIiZhbXA7XCIpLnJlcGxhY2UoXCI8XCIsIFwiJmx0O1wiKS5yZXBsYWNlKFwiPlwiLCBcIiZndDtcIikucmVwbGFjZUFsbChcIiNcIiwgXCImbnVtO1wiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlcGxhY2VBcnJheVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChmaW5kLCByZXBsYWNlKSB7XHJcbiAgICB2YXIgcmVwbGFjZVN0cmluZyA9IHRoaXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcmVwbGFjZVN0cmluZyA9IHJlcGxhY2VTdHJpbmcucmVwbGFjZShmaW5kW2ldLCByZXBsYWNlW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXBsYWNlU3RyaW5nO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwibWFza1VSTHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlQXJyYXkoW1wiaHR0cHM6Ly9cIiwgXCJodHRwOi8vXCJdLCBcIm5vcGU6Ly9cIikucmVwbGFjZUFycmF5KGRvbWFpbnMsIFwiLm5vcGVcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJtYWtlUmVhZGFibGVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VQZXJjZW50YWdlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGRlY2ltYWxzKSB7XHJcbiAgICBpZiAoZGVjaW1hbHMgPT09IHVuZGVmaW5lZCkgZGVjaW1hbHMgPSAyO1xyXG4gICAgcmV0dXJuIGAkeyh0aGlzICogMTAwKS50b0ZpeGVkKGRlY2ltYWxzKX0lYDtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHNvcnRPYmplY3QgPSAob2JqLCBkaXJlY3Rpb24pID0+IHtcclxuICBsZXQgYXJyID0gW107XHJcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICBhcnIucHVzaChba2V5LCBvYmpba2V5XV0pO1xyXG4gIH1cclxuICBhcnIuc29ydCgoYSwgYikgPT4gKGRpcmVjdGlvbiA/IGFbMV0gLSBiWzFdIDogYlsxXSAtIGFbMV0pKTtcclxuICBsZXQgb2JqU29ydGVkID0ge307XHJcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IChvYmpTb3J0ZWRbaXRlbVswXV0gPSBpdGVtWzFdKSk7XHJcbiAgLy9hcnIuc29ydChmdW5jdGlvbihhLCBiKSB7IGEudmFsdWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIudmFsdWUudG9Mb3dlckNhc2UoKSk7IH0pOyAvL3VzZSB0aGlzIHRvIHNvcnQgYXMgc3RyaW5nc1xyXG4gIHJldHVybiBvYmpTb3J0ZWQ7IC8vIHJldHVybnMgYXJyYXlcclxufTtcclxuIiwiLypcclxuJCA9IGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG52YXIgYm9vdHN0cmFwID0gcmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG52YXIgYW5ndWxhclNhbml0aXplID0gcmVxdWlyZSgnYW5ndWxhci1zYW5pdGl6ZScpO1xyXG52YXIgYW5ndWxhckFuaW1hdGUgPSByZXF1aXJlKCdhbmd1bGFyLWFuaW1hdGUnKTtcclxuKi9cclxuYW5ndWxhci5tb2R1bGUoXCJhcHBcIiwgW1xyXG4gIFwidWkucm91dGVyXCIsXHJcbiAgXCJ1aS5ib290c3RyYXBcIixcclxuICBcIm5nQW5pbWF0ZVwiLFxyXG4gIFwibmdTYW5pdGl6ZVwiLFxyXG4gIFwibmdNYXRlcmlhbFwiLFxyXG4gIFwibmdNZXNzYWdlc1wiLFxyXG4gIFwibmdEcmFnRHJvcFwiLFxyXG4gIFwibmdUYWdzSW5wdXRcIixcclxuICBcInZjUmVjYXB0Y2hhXCIsXHJcbiAgXCJjaGFydC5qc1wiLFxyXG4gIFwidGMuY2hhcnRqc1wiLFxyXG4gIFwiaW5maW5pdGUtc2Nyb2xsXCIsXHJcbl0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICR1cmxTZXJ2aWNlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XHJcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcIi9ob21lXCIpO1xyXG4gICR1cmxTZXJ2aWNlUHJvdmlkZXIuY29uZmlnLnN0cmljdE1vZGUoZmFsc2UpO1xyXG5cclxuICAkc3RhdGVQcm92aWRlclxyXG4gICAgLnN0YXRlKFwiaG9tZVwiLCB7XHJcbiAgICAgIHVybDogXCIvaG9tZVwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvaG9tZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicG9saWN5XCIsIHtcclxuICAgICAgdXJsOiBcIi9wb2xpY3lcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3BvbGljeS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicHJpbnRcIiwge1xyXG4gICAgICB1cmw6IFwiL3ByaW50XCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wcmludC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiZXhwZXJpZW5jZVwiLCB7XHJcbiAgICAgIHVybDogXCIvZXhwZXJpZW5jZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkV4cGVyaWVuY2VDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9leHBlcmllbmNlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJza2lsbHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3NraWxsc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlNraWxsc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3NraWxscy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiaG9iYmllc1wiLCB7XHJcbiAgICAgIHVybDogXCIvaG9iYmllc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkhvYmJpZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9ob2JiaWVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJjb250YWN0XCIsIHtcclxuICAgICAgdXJsOiBcIi9jb250YWN0XCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQ29udGFjdEN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2NvbnRhY3QuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcIndvcmtvdXRcIiwge1xyXG4gICAgICB1cmw6IFwiL3dvcmtvdXRcIixcclxuICAgICAgY29udHJvbGxlcjogXCJXb3Jrb3V0Q3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvd29ya291dC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicG9zdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3Bvc3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUG9zdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wb3N0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicHJvZmlsZVwiLCB7XHJcbiAgICAgIHVybDogXCIvcHJvZmlsZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlByb2ZpbGVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wcm9maWxlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJsaXN0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvbGlzdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJMaXN0c0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwibGlzdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImJ1YmJsZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2J1YmJsZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJCdWJibGVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJidWJibGVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJhc3Rlcm9pZHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2FzdGVyb2lkc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkFzdGVyb2lkc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiYXN0ZXJvaWRzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJsZW1taW5nc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbGVtbWluZ3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJMZW1taW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwibGVtbWluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImJvdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2JvdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLWFkbWluXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3MtYWRtaW5cIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NBZG1pbkN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLWFkbWluLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3MtZ2FtZVwiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLzpnYW1lXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzR2FtZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLWdhbWUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1zdGF0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLXN0YXRzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzU3RhdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1zdGF0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1nb29nbGVcIiwge1xyXG4gICAgICB1cmw6IFwiL2dvb2dsZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpHb29nbGVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvZ29vZ2xlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWxvZ29zXCIsIHtcclxuICAgICAgdXJsOiBcIi9sb2dvc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpMb2dvc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9sb2dvcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1hbmltYWxzXCIsIHtcclxuICAgICAgdXJsOiBcIi9hbmltYWxzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekFuaW1hbHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvYW5pbWFscy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1za2VsZXRvbnNcIiwge1xyXG4gICAgICB1cmw6IFwiL3NrZWxldG9uc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpTa2VsZXRvbnNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvc2tlbGV0b25zLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LW1vdmllc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbW92aWVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpek1vdmllc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9tb3ZpZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImNoYXJhZGVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9jaGFyYWRlc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkNoYXJhZGVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvY2hhcmFkZXMuaHRtbFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7XHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgcmVxdWlyZUJhc2U6IGZhbHNlLFxyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdXZWJTb2NrZXRTdmMnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcclxuICBmdW5jdGlvbiB3ZWJzb2NrZXRIb3N0KCkge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcclxuICAgICAgcmV0dXJuIFwid3NzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIndzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBjb25uZWN0aW9uO1xyXG4gIHZhciBjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQod2Vic29ja2V0SG9zdCgpKTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjb25uZWN0ZWQnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjbG9zZWQuIFJlY29ubmVjdGluZy4uLicpO1xyXG4gICAgICAkdGltZW91dChjb25uZWN0LCAxMDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUgKyBcIiAtIFN0YXRlOiBcIiArIGNvbm5lY3Rpb24ucmVhZHlTdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnd3M6JyArIHBheWxvYWQudG9waWMsIHBheWxvYWQuZGF0YSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc2VuZCA9IGZ1bmN0aW9uICh0b3BpYywgZGF0YSkge1xyXG4gICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh7dG9waWM6IHRvcGljLCBkYXRhOiBkYXRhfSk7XHJcbiAgICBjb25uZWN0aW9uLnNlbmQoanNvbik7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5jb25uZWN0ID0gY29ubmVjdDtcclxuXHJcbn0pLnJ1bihmdW5jdGlvbiAoV2ViU29ja2V0U3ZjKSB7XHJcbiAgV2ViU29ja2V0U3ZjLmNvbm5lY3QoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmRpcmVjdGl2ZShcImNsaWNrT3V0c2lkZVwiLCBmdW5jdGlvbiAoJGRvY3VtZW50KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc3RyaWN0OiBcIkFcIixcclxuICAgIHNjb3BlOiB7XHJcbiAgICAgIGNsaWNrT3V0c2lkZTogXCImXCIsXHJcbiAgICB9LFxyXG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAkZG9jdW1lbnQub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlbCAhPT0gZS50YXJnZXQgJiYgIWVsWzBdLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9zY29wZS4kcGFyZW50LnNldFNlbGVjdGVkTGlzdCgpO1xyXG4gICAgICAgICAgICBzY29wZS4kZXZhbChzY29wZS5jbGlja091dHNpZGUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG5cdC5kaXJlY3RpdmUoJ2hlYWQnLCBbXHJcblx0XHQnJHJvb3RTY29wZScsXHJcblx0XHQnJHN0YXRlJyxcclxuXHRcdCckY29tcGlsZScsXHJcblx0XHQnJGludGVycG9sYXRlJyxcclxuXHRcdGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsICRjb21waWxlLCAkaW50ZXJwb2xhdGUpIHtcclxuXHJcblx0XHRcdHZhciBnZXRTdHlsZSA9IGZ1bmN0aW9uIGdldFN0eWxlKHRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHJcblx0XHRcdFx0dmFyIHN0eWxlID0ge1xyXG5cdFx0XHRcdFx0aHJlZjogdGVtcGxhdGVTdHlsZVVybCxcclxuXHRcdFx0XHRcdHJlbDogJ3N0eWxlc2hlZXQnXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0aWYgKHN0eWxlLmhyZWYubWF0Y2goL1xcLmxlc3MkLykpIHtcclxuXHRcdFx0XHRcdHN0eWxlLnJlbCA9ICdzdHlsZXNoZWV0L2xlc3MnO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIHN0eWxlO1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiBnZXRTdHlsZXMoc3RhdGUpIHtcclxuXHJcblx0XHRcdFx0dmFyIHN0YXRlcyA9IHt9O1xyXG5cclxuXHRcdFx0XHQvL0NoZWNrIHN0YXRlIGZvciBzdHlsZXNcclxuXHRcdFx0XHR3aGlsZSAoc3RhdGUubmFtZSAhPT0gJycpIHtcclxuXHRcdFx0XHRcdHZhciBwYXJlbnQgPSAkc3RhdGUuZ2V0KCdeJywgc3RhdGUpO1xyXG5cclxuXHRcdFx0XHRcdC8vSW5pdGlhdGUgb3VyIHZpZXcgbGlzdFxyXG5cdFx0XHRcdFx0aWYgKCFzdGF0ZXNbcGFyZW50Lm5hbWVdKSB7XHJcblx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV0gPSB7fTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NoZWNrIHRoZSB0ZW1wbGF0ZVN0eWxlXHJcblx0XHRcdFx0XHRpZiAoc3RhdGUudGVtcGxhdGVTdHlsZVVybCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1twYXJlbnQubmFtZV1bJyddKSB7XHJcblx0XHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXVsnJ10gPSBnZXRTdHlsZShzdGF0ZS50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ2hlY2sgdmlld3NcclxuXHRcdFx0XHRcdGlmIChzdGF0ZS52aWV3cykge1xyXG5cdFx0XHRcdFx0XHRfLmZvckVhY2goc3RhdGUudmlld3MsIGZ1bmN0aW9uICh2aWV3LCBrZXkpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBoYXZlIGEgc3R5bGVcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXZpZXcudGVtcGxhdGVTdHlsZVVybCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBhcmUgdGFyZ2V0aW5nIHNvbWUgcGFyZW50XHJcblx0XHRcdFx0XHRcdFx0aWYgKChrZXkgPSBrZXkuc3BsaXQoJ0AnKSlbMV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgaGF2ZSBzdHlsZXMgZm9yIHRoYXQgcGFyZW50XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1trZXlbMV1dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlc1trZXlbMV1dID0ge307XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Ly9QbGFjZSB0aGUgc3R5bGUgb24gc29tZSBwYXJlbnQncyB2aWV3XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1trZXlbMV1dW2tleVswXV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGVzW2tleVsxXV1ba2V5WzBdXSA9IGdldFN0eWxlKHZpZXcudGVtcGxhdGVTdHlsZVVybCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9QbGFjZSB0aGUgc3R5bGUgb24gb3VyIHBhcmVudCdzIHZpZXdcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdW2tleVswXV0gPSBnZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9Db250aW51ZSB3aXRoIHRoZSBwYXJlbnRcclxuXHRcdFx0XHRcdHN0YXRlID0gcGFyZW50O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9GbGF0dGVuIHRoZSBsaXN0XHJcblx0XHRcdFx0dmFyIGZsYXQgPSBbXTtcclxuXHRcdFx0XHRfLmZvckVhY2goc3RhdGVzLCBmdW5jdGlvbiAodmlld3MpIHtcclxuXHJcblx0XHRcdFx0XHRfLmZvckVhY2godmlld3MsIGZ1bmN0aW9uIChzdHlsZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFfLmluY2x1ZGVzKGZsYXQsIHN0eWxlKSkge1xyXG5cdFx0XHRcdFx0XHRcdGZsYXQucHVzaChzdHlsZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vUmV2ZXJzZSBpdCBzbyB3ZSBoYXZlIGEgcHJvcGVyIGhpZXJhcmNoeVxyXG5cdFx0XHRcdGZsYXQucmV2ZXJzZSgpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZmxhdDtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRcdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtKSB7XHJcblxyXG5cdFx0XHRcdFx0c2NvcGUudGVtcGxhdGVTdHlsZXMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHR2YXIgaHRtbCA9ICc8bGluayBuZy1hdHRyLXJlbD1cInt7c3R5bGUucmVsfX1cIiBuZy1yZXBlYXQ9XCJzdHlsZSBpbiB0ZW1wbGF0ZVN0eWxlc1wiIG5nLWhyZWY9XCJ7e3N0eWxlLmhyZWZ9fVwiPic7XHJcblxyXG5cdFx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvXFx7XFx7L2csICRpbnRlcnBvbGF0ZS5zdGFydFN5bWJvbCgpKTtcclxuXHRcdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcfVxcfS9nLCAkaW50ZXJwb2xhdGUuZW5kU3ltYm9sKCkpO1xyXG5cclxuXHRcdFx0XHRcdGVsZW0uYXBwZW5kKCRjb21waWxlKGh0bWwpKHNjb3BlKSk7XHJcblxyXG5cdFx0XHRcdFx0JHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzY29wZS50ZW1wbGF0ZVN0eWxlcyA9IGdldFN0eWxlcyh0b1N0YXRlKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdH1cclxuXHRdKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkFwcEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgTGFuZ3VhZ2VTdmMsIFVzZXJTdmMsICRtZFRvYXN0KSB7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIiVjWW91IHNuZWFreSBidWdnZXIhXCIsXHJcbiAgICBcImZvbnQ6IDJlbSBzYW5zLXNlcmlmOyBjb2xvcjogRG9kZ2VyQmx1ZTsgdGV4dC1zaGFkb3c6IDJweCAwIDAgIzQ0NCwgLTJweCAwIDAgIzQ0NCwgMCAycHggMCAjNDQ0LCAwIC0ycHggMCAjNDQ0LCAxcHggMXB4ICM0NDQsIC0xcHggLTFweCAwICM0NDQsIDFweCAtMXB4IDAgIzQ0NCwgLTFweCAxcHggMCAjNDQ0O1wiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIkknbSBnbGFkIHlvdSdyZSBjdXJpb3VzIHdoZXRoZXIgc29tZXRoaW5nIGlzIHBvcHBpbmcgdXAgaW4gaGVyZS4gSSdtIGEgYml0IG9mIGEgc3RpY2tsZXIgd2hlbiBpdCBjb21lcyB0byBtZXNzYWdlcyBpbiB0aGUgY29uc29sZSBzbyBJIHRyeSB0byBtYWtlIHN1cmUgb25seSB0aGluZ3MgSSB3YW50IGFyZSB2aXNpYmxlLiBUaGF0IGJlaW5nIHNhaWQsIGlmIHRoZXJlIGlzIGEgYmlnIGVycm9yIGhlcmUsIEkgd291bGQgcmVhbGx5IGFwcHJlY2lhdGUgeW91IHRlbGxpbmcgbWUgc28gSSBjYW4gZ2V0IHJpZCBvZiBpdCFcIixcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCJUaGUgY29kZSBmb3IgbXkgcmVzdW1lIGlzIGhvc3RlZCBvbiBHaXRodWIgaWYgeW91IHJlYWxseSB3YW50IHRvIGdvIGludG8gYWxsIHRoaXMhID0+IGh0dHBzOi8vZ2l0aHViLmNvbS9GbGFuZGVyc0J1cmdlci9yZXN1bWVcIixcclxuICApO1xyXG5cclxuICAkc2NvcGUudG9hc3QgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgJG1kVG9hc3Quc2hvdygkbWRUb2FzdC5zaW1wbGUoKS50ZXh0Q29udGVudChtZXNzYWdlKS5wb3NpdGlvbihcImJvdHRvbSByaWdodFwiKS5oaWRlRGVsYXkoMzAwMCkpO1xyXG4gIH07XHJcbiAgLypcclxuICAgICQoZG9jdW1lbnQpLmJpbmQoXCJrZXl1cCBrZXlkb3duXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBpZihlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09IDgwKXtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAqL1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICAkKHdpbmRvdykubG9hZChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLmxvYWRpbmdcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAkKFwiLmNvbnRlbnRcIikuZmFkZUluKFwic2xvd1wiKTtcclxuICB9KTtcclxuXHJcbiAgJChcIi5jaGVja2JveC1tZW51XCIpLm9uKFwiY2hhbmdlXCIsIFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoXCJsaVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiLCB0aGlzLmNoZWNrZWQpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmFsbG93LWZvY3VzXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUudGhlbWVDb3VudGVyID0gNjtcclxuICAkc2NvcGUudG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICRzY29wZS55ZWFyID0gJHNjb3BlLnRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgJHNjb3BlLnJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xyXG5cclxuICAkc2NvcGUuZmxpcFRoZW1lID0gKCkgPT4ge1xyXG4gICAgJChcIi5sb2FkaW5nXCIpLnNob3coKTtcclxuICAgICQoXCIuY29udGVudFwiKS5oaWRlKCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIi5sb2FkaW5nXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgICAkKFwiLmNvbnRlbnRcIikuZmFkZUluKFwic2xvd1wiKTtcclxuICAgIH0sIDgwMCk7XHJcbiAgICAkc2NvcGUudGhlbWVDb3VudGVyID0gJHNjb3BlLnRoZW1lQ291bnRlciA8IDYgPyAkc2NvcGUudGhlbWVDb3VudGVyICsgMSA6ICgkc2NvcGUudGhlbWVDb3VudGVyID0gMSk7XHJcbiAgfTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL3NraWxscy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuc2tpbGxzID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKHNraWxsKSB7XHJcbiAgICAgIHJldHVybiBza2lsbC5lbmFibGVkO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9ob2JiaWVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5ob2JiaWVzID0gZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2V4cGVyaWVuY2UuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmpvYnMgPSBkYXRhO1xyXG4gICAgJHNjb3BlLmpvYnMuZm9yRWFjaCgoam9iKSA9PiB7XHJcbiAgICAgIGpvYi5zdGFydERhdGUgPSBuZXcgRGF0ZShqb2Iuc3RhcnREYXRlKTtcclxuICAgICAgaWYgKGpvYi5lbmREYXRlKSBqb2IuZW5kRGF0ZSA9IG5ldyBEYXRlKGpvYi5lbmREYXRlKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvY2hhcmFkZXMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmNoYXJhZGVzID0gZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmdldFRpbWVTcGFuID0gKGpvYikgPT4ge1xyXG4gICAgcmV0dXJuIGpvYi5zdGFydERhdGUuZ2V0RnVsbFllYXIoKSArIChqb2IuZW5kRGF0ZSA/IFwiIC0gXCIgKyBqb2IuZW5kRGF0ZS5nZXRGdWxsWWVhcigpIDogXCIgLSBUb2RheVwiKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUubGFuZ3VhZ2VzID0gTGFuZ3VhZ2VTdmMubGFuZ3VhZ2VzO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IExhbmd1YWdlU3ZjLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICRzY29wZS5zZWxlY3RMYW5ndWFnZSA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBMYW5ndWFnZVN2Yy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmhvdmVyZGl2ID0gKGUsIGRpdmlkKSA9PiB7XHJcbiAgICB2YXIgbGVmdCA9IGUuY2xpZW50WCArIFwicHhcIjtcclxuICAgIHZhciB0b3AgPSBlLmNsaWVudFkgKyAyMCArIFwicHhcIjtcclxuXHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2aWQpO1xyXG5cclxuICAgICQoXCIjXCIgKyBkaXZpZCkuY3NzKFwibGVmdFwiLCBsZWZ0KTtcclxuICAgICQoXCIjXCIgKyBkaXZpZCkuY3NzKFwidG9wXCIsIHRvcCk7XHJcblxyXG4gICAgJChcIiNcIiArIGRpdmlkKS50b2dnbGUoKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS51c2VyKSB7XHJcbiAgICBVc2VyU3ZjLmxvZ2luKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgbG9naW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2dpblwiLCAoXywgdXNlcikgPT4ge1xyXG4gICAgbG9naW4odXNlcik7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcclxuICAgIGlmICghJHNjb3BlLmxvZ2dlZEluKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlciA9IHVzZXIuX2lkO1xyXG4gICAgICAkc2NvcGUubG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgICAkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlID0gbmV3IERhdGUoJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSk7XHJcbiAgICAgICRzY29wZS4kYnJvYWRjYXN0KFwibG9naW5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLiRvbihcInVwZGF0ZVwiLCAoXywgdXNlcikgPT4ge1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUgPSBuZXcgRGF0ZSgkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlKTtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgJChcIiNsb2FkaW5nLWljb25cIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbihcImxvYWRpbmdcIiwgKF8sIHVzZXIpID0+IHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICQoXCIjbG9hZGluZy1pY29uXCIpLnNob3coKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbihcImxvYWRlZFwiLCAoXywgdXNlcikgPT4ge1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUubG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgZmlyZWJhc2VcclxuICAgICAgLmF1dGgoKVxyXG4gICAgICAuc2lnbk91dCgpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyBTaWduLW91dCBzdWNjZXNzZnVsLlxyXG4gICAgICAgICRzY29wZS5sb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdChcImxvZ291dFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIC8vIEFuIGVycm9yIGhhcHBlbmVkLlxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZm9ybWF0RGF0ZSA9IChkYXRlKSA9PiB7XHJcbiAgICBjb25zdCBtb250aHMgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XHJcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICByZXR1cm4gZGF0ZS5nZXREYXRlKCkgKyBcIi1cIiArIG1vbnRoc1tkYXRlLmdldE1vbnRoKCldICsgXCItXCIgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJBc3Rlcm9pZHNDdHJsXCIsIGZ1bmN0aW9uICgkbG9jYXRpb24sICRzY29wZSwgR2FtZVN2Yykge1xyXG4gICRzY29wZS5hbm5vdW5jZSA9IGZhbHNlO1xyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xyXG4gIGlmICghY2FudmFzKSB7XHJcbiAgICAkbG9jYXRpb24ucGF0aChcIi9ob21lXCIpO1xyXG4gICAgcmV0dXJuIGFsZXJ0KFwiXCIpO1xyXG4gIH1cclxuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIGlmICghY3R4KSB7XHJcbiAgICByZXR1cm4gJGxvY2F0aW9uLnBhdGgoXCIvaG9tZVwiKTtcclxuICB9XHJcbiAgY3R4LmZvbnQgPSBcIjMwcHggQ29taWMgU2FucyBNU1wiO1xyXG4gIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGxldCBzaG90cyA9IHt9O1xyXG4gIGNvbnN0IGFzdGVyb2lkcyA9IHt9O1xyXG4gIGNvbnN0IHBvd2VydXBzID0ge307XHJcbiAgY29uc3QgZXhwbG9zaW9ucyA9IHt9O1xyXG4gIGNvbnN0IG1hcCA9IHt9O1xyXG4gIGNvbnN0IHNwYWNlcGljcyA9IDM7XHJcbiAgbGV0IHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICBjb25zdCBwb3dlcnVwVHlwZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwic3BlZWRcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIk1heCBTcGVlZCDih6dcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgICAgc2l6ZTogWzE0LCAzNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLm1heFNwZWVkICs9IDEwMDtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiY29vbGRvd25cIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIkNvb2xkb3duIOKHqVwiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogMyxcclxuICAgICAgICBzaXplOiBbMTcsIDE3XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLmNvb2xkb3duVGltZSAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwicmFuZ2VcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIkZpcmluZyBSYW5nZSDih6dcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA0LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzMwLCA4XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAucmFuZ2UgKz0gNTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwic2hpZWxkXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJTaGllbGRcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA1LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzE5LCAxOV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnNoaWVsZCA9IHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIm51a2VcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIk51a2VcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgICAgc2l6ZTogWzE1LCAxNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICAgIGFzdGVyb2lkc1tpXS5leHBsb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYXduQXN0ZXJvaWRzKDUpO1xyXG4gICAgICB9LFxyXG4gICAgfSAvKlxyXG4gICAgJ3NpZGVfY2Fubm9ucycsXHJcbiAgICAnbGFzZXInLFxyXG4gICAgJ3NoaWVsZCcsXHJcbiAgICAnbGlmZScsXHJcbiAgICAnbWlzc2lsZXMnLFxyXG4gICAgJ251a2UnXHJcbiAgICAqLyxcclxuICBdO1xyXG4gIHBvd2VydXBUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChwb3dlcnVwLCBpLCBhcnJheSkge1xyXG4gICAgYXJyYXlbaV0uaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL1wiICsgcG93ZXJ1cC5uYW1lICsgXCIucG5nXCI7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBleHBsb3Npb25JbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGV4cGxvc2lvbkltYWdlLnNyYyA9IFwiYXN0ZXJvaWRzL2V4cGxvc2lvbi5wbmdcIjtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImtleWRvd25cIixcclxuICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIHRydWUsXHJcbiAgKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwia2V5dXBcIixcclxuICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB0cnVlLFxyXG4gICk7XHJcblxyXG4gICRzY29wZS5oaWdoc2NvcmUgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBldmFsdWF0ZUtleXMoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICAvL1NwYWNlXHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNob290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzddKSB7XHJcbiAgICAgICAgLy9MZWZ0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMzYwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gLT0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOV0pIHtcclxuICAgICAgICAvL1JpZ2h0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMzYwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gKz0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOF0pIHtcclxuICAgICAgICAvL1VwIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA8PSBzcGFjZXNoaXAubWF4U3BlZWQpIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCArPSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkLS07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbNDBdKSB7XHJcbiAgICAgICAgLy9Eb3duIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCAtPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICBzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTcGFjZXNoaXAoKSB7XHJcbiAgICB0aGlzLndpZHRoID0gNTA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDUwO1xyXG4gICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgIHRoaXMucmFuZ2UgPSA4MDtcclxuICAgIHRoaXMuY2Fubm9uID0ge1xyXG4gICAgICB4OiB0aGlzLndpZHRoIC8gMiAtIDQuNSxcclxuICAgICAgeTogdGhpcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgKiAwLjA3ODEyNSxcclxuICAgIH07XHJcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcclxuICAgIHRoaXMuY29vbGRvd25UaW1lID0gMjA7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW2NhbnZhcy53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDJdO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL3NwYWNlc2hpcC5wbmdcIjtcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5tYXhTcGVlZCA9IDEwMDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gMDtcclxuICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG5cclxuICAgIHRoaXMuc2hvb3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuY29vbGRvd24gPSB0aGlzLmNvb2xkb3duVGltZTtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgc2hvdHNbaWRdID0gbmV3IFNob3QoaWQsIHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguYXJjKHRoaXMucG9zaXRpb25bMF0gKyB0aGlzLndpZHRoIC8gMiwgdGhpcy5wb3NpdGlvblsxXSArIHRoaXMuaGVpZ2h0IC8gMiwgMzAsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMzUsIDIzNywgODYsIDAuNSlcIjtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYig2NiwgMTY4LCAzNiwgMC44KVwiO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgICAgdmFyIGFzdGVyb2lkID0gYXN0ZXJvaWRzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoYXN0ZXJvaWQsIHRoaXMpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zaGllbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYXN0ZXJvaWQuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdhbWVPdmVyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICBpZiAodGhpcy5jb29sZG93biA+IDApIHtcclxuICAgICAgICB0aGlzLmNvb2xkb3duLS07XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTaG90KGlkLCBzcGFjZXNoaXApIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbXHJcbiAgICAgIHNwYWNlc2hpcC5wb3NpdGlvblswXSArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi54ICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnggKiBNYXRoLmNvcygoKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKSxcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzFdICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnkgK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueSAqIE1hdGguc2luKCgoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSkgLyAxODApLFxyXG4gICAgXTtcclxuICAgIHRoaXMud2lkdGggPSA0MDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gNDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gc3BhY2VzaGlwLmFuZ2xlO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IHNwYWNlc2hpcC5yb3RhdGlvbjtcclxuICAgIHRoaXMuc3BlZWQgPSBzcGFjZXNoaXAuc3BlZWQgKyA1MDA7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gc3BhY2VzaGlwLnJhbmdlO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL3Nob3QucG5nXCI7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQXN0ZXJvaWQoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMud2lkdGggPSBNYXRoLnJhbmRvbSgpICogNTAgKyA1MDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy53aWR0aDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSBNYXRoLnJhbmRvbSgpICogNiAtIDM7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDMwMCArIDI7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvYXN0ZXJvaWRcIiArIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA0KSArIDEpICsgXCIucG5nXCI7XHJcblxyXG4gICAgdGhpcy5leHBsb2RlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBleHBsb3Npb25zW3RoaXMuaWRdID0gbmV3IEV4cGxvc2lvbih0aGlzKTtcclxuICAgICAgcmV0dXJuIGRlbGV0ZSBhc3Rlcm9pZHNbdGhpcy5pZF07XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XHJcbiAgICAgIGlmICh0aGlzLnJvdGF0aW9uID4gMzYwKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMucm90YXRpb24gLSAzNjA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5yb3RhdGlvbiA8IDApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMzYwICsgdGhpcy5yb3RhdGlvbjtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgICAgdmFyIHNob3QgPSBzaG90c1tpXTtcclxuICAgICAgICBpZiAoaGl0KHNob3QsIHRoaXMpKSB7XHJcbiAgICAgICAgICB0aGlzLmV4cGxvZGUoKTtcclxuICAgICAgICAgIHZhciBwb2ludHMgPSBNYXRoLmZsb29yKChzaG90LnNwZWVkIC0gNTAwKSAvIDEwICsgNzAgLSB0aGlzLndpZHRoKTtcclxuICAgICAgICAgIGlmIChNYXRoLmZsb29yKChwb2ludHMgKyAkc2NvcGUuc2NvcmUpIC8gMTAwKSA+IE1hdGguZmxvb3IoJHNjb3BlLnNjb3JlIC8gMTAwKSkge1xyXG4gICAgICAgICAgICBzcGF3blBvd2VydXAoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICRzY29wZS5zY29yZSArPSBwb2ludHM7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRXhwbG9zaW9uKG9iamVjdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtvYmplY3QucG9zaXRpb25bMF0sIG9iamVjdC5wb3NpdGlvblsxXV07XHJcbiAgICB0aGlzLndpZHRoID0gb2JqZWN0LndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvYmplY3QuaGVpZ2h0O1xyXG4gICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMuY3ljbGUgPSB7XHJcbiAgICAgIHJvd3M6IDYsXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHNpemU6IFsyNTYsIDI1Nl0sXHJcbiAgICAgIGk6IDAsXHJcbiAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgIH07XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gNDc7XHJcbiAgICB0aGlzLmltZyA9IGV4cGxvc2lvbkltYWdlO1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAodGhpcy5jeWNsZS5kaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmN5Y2xlLmkrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN5Y2xlLmktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFBvd2VydXAoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucG93ZXJ1cCA9IHBvd2VydXBUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3dlcnVwVHlwZXMubGVuZ3RoKV07XHJcbiAgICB0aGlzLmN5Y2xlID0gdGhpcy5wb3dlcnVwLmN5Y2xlO1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDEwMDA7XHJcbiAgICBpZiAodGhpcy5jeWNsZS5zaXplWzFdID4gdGhpcy5jeWNsZS5zaXplWzBdKSB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gNDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSBNYXRoLnJvdW5kKCh0aGlzLmhlaWdodCAvIHRoaXMuY3ljbGUuc2l6ZVsxXSkgKiB0aGlzLmN5Y2xlLnNpemVbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53aWR0aCA9IDQwO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IE1hdGgucm91bmQoKHRoaXMud2lkdGggLyB0aGlzLmN5Y2xlLnNpemVbMF0pICogdGhpcy5jeWNsZS5zaXplWzFdKTtcclxuICAgIH1cclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuaW1nID0gdGhpcy5wb3dlcnVwLmltZztcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAxNTAgKyA1MDtcclxuICAgIHZhciBkZWxheSA9IDU7XHJcbiAgICB0aGlzLm1vdmUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gZGVsZXRlIHBvd2VydXBzW3RoaXMuaWRdO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChoaXQoc3BhY2VzaGlwLCB0aGlzKSkge1xyXG4gICAgICAgICRzY29wZS5hbm5vdW5jZSA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLmFubm91bmNlbWVudCA9IHRoaXMucG93ZXJ1cC5hbm5vdW5jZW1lbnQ7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgdGhpcy5wb3dlcnVwLmFjdGl2YXRlKHNwYWNlc2hpcCk7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBwb3dlcnVwc1t0aGlzLmlkXTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICAgIGlmIChkZWxheSA8PSAwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLmkrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGF5ID0gNTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWxheS0tO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZShvYmplY3QpIHtcclxuICAgIG9iamVjdC5wb3NpdGlvblswXSArPSAob2JqZWN0LnNwZWVkIC8gMTAwKSAqIE1hdGguY29zKCgob2JqZWN0LmFuZ2xlIC0gOTApICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgb2JqZWN0LnBvc2l0aW9uWzFdICs9IChvYmplY3Quc3BlZWQgLyAxMDApICogTWF0aC5zaW4oKChvYmplY3QuYW5nbGUgLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBpZiAob2JqZWN0LnBvc2l0aW9uWzBdID4gY2FudmFzLndpZHRoKSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IC1vYmplY3Qud2lkdGg7XHJcbiAgICB9IGVsc2UgaWYgKG9iamVjdC5wb3NpdGlvblswXSA8IC1vYmplY3Qud2lkdGgpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzBdID0gY2FudmFzLndpZHRoO1xyXG4gICAgfVxyXG4gICAgaWYgKG9iamVjdC5wb3NpdGlvblsxXSA+IGNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzFdID0gLW9iamVjdC5oZWlnaHQ7XHJcbiAgICB9IGVsc2UgaWYgKG9iamVjdC5wb3NpdGlvblsxXSA8IC1vYmplY3QuaGVpZ2h0KSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblsxXSA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShvYmplY3QucG9zaXRpb25bMF0sIG9iamVjdC5wb3NpdGlvblsxXSk7XHJcbiAgICBjdHgudHJhbnNsYXRlKG9iamVjdC53aWR0aCAvIDIsIG9iamVjdC5oZWlnaHQgLyAyKTtcclxuICAgIGN0eC5yb3RhdGUoKG9iamVjdC5yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIGlmIChvYmplY3QuY3ljbGUpIHtcclxuICAgICAgdmFyIGNvbHVtbiA9IG9iamVjdC5jeWNsZS5pICUgb2JqZWN0LmN5Y2xlLmNvbHVtbnM7XHJcbiAgICAgIHZhciByb3cgPSBNYXRoLmZsb29yKG9iamVjdC5jeWNsZS5pIC8gb2JqZWN0LmN5Y2xlLmNvbHVtbnMpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIG9iamVjdC5pbWcsXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMF0gKiBjb2x1bW4sXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMV0gKiByb3csXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMF0sXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMV0sXHJcbiAgICAgICAgLW9iamVjdC53aWR0aCAvIDIsXHJcbiAgICAgICAgLW9iamVjdC5oZWlnaHQgLyAyLFxyXG4gICAgICAgIG9iamVjdC53aWR0aCxcclxuICAgICAgICBvYmplY3QuaGVpZ2h0LFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKG9iamVjdC5jeWNsZS5pIDw9IDApIHtcclxuICAgICAgICBvYmplY3QuY3ljbGUuaSA9IDA7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAob2JqZWN0LmN5Y2xlLmkgPj0gb2JqZWN0LmN5Y2xlLmNvbHVtbnMgKiBvYmplY3QuY3ljbGUucm93cykge1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5pID0gb2JqZWN0LmN5Y2xlLmNvbHVtbnMgKiBvYmplY3QuY3ljbGUucm93cyAtIDE7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdHguZHJhd0ltYWdlKG9iamVjdC5pbWcsIC1vYmplY3Qud2lkdGggLyAyLCAtb2JqZWN0LmhlaWdodCAvIDIsIG9iamVjdC53aWR0aCwgb2JqZWN0LmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHNwYWNlc2hpcDtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAkc2NvcGUucGxheWluZyA9IHRydWU7XHJcbiAgICAkc2NvcGUuc2NvcmUgPSAwO1xyXG4gICAgc3BhY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFjZXBpY3MpO1xyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgc3BhY2VzaGlwID0gbmV3IFNwYWNlc2hpcCgpO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYXduQXN0ZXJvaWRzKDUpO1xyXG4gICAgYXV0b1NwYXduKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRFbnRyeVBvc2l0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBncmlkWCA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIGdyaWRZID0gTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICB2YXIgeCxcclxuICAgICAgeSA9IDA7XHJcbiAgICBpZiAoZ3JpZFggPj0gMSkge1xyXG4gICAgICB4ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgaWYgKHkgPj0gMSkge1xyXG4gICAgICAgIHkgPSAwIC0gaGVpZ2h0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHkgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIGlmIChncmlkWSA+PSAxKSB7XHJcbiAgICAgICAgeCA9IDAgLSB3aWR0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB4ID0gY2FudmFzLndpZHRoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3gsIHldO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGl0KG9iamVjdDEsIG9iamVjdDIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIG9iamVjdDEucG9zaXRpb25bMF0gPCBvYmplY3QyLnBvc2l0aW9uWzBdICsgb2JqZWN0Mi53aWR0aCAmJlxyXG4gICAgICBvYmplY3QyLnBvc2l0aW9uWzBdIDwgb2JqZWN0MS5wb3NpdGlvblswXSArIG9iamVjdDEud2lkdGggJiZcclxuICAgICAgb2JqZWN0MS5wb3NpdGlvblsxXSA8IG9iamVjdDIucG9zaXRpb25bMV0gKyBvYmplY3QyLmhlaWdodCAmJlxyXG4gICAgICBvYmplY3QyLnBvc2l0aW9uWzFdIDwgb2JqZWN0MS5wb3NpdGlvblsxXSArIG9iamVjdDEuaGVpZ2h0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXV0b1NwYXduKCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGFzdGVyb2lkcykubGVuZ3RoIDwgMjAwKSB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIGFzdGVyb2lkc1tpZF0gPSBuZXcgQXN0ZXJvaWQoaWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGF1dG9TcGF3bigpO1xyXG4gICAgICB9LCBzcGF3bkludGVydmFsKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25JbnRlcnZhbCgpIHtcclxuICAgIGlmICgkc2NvcGUuc2NvcmUgPCAxMDAwKSB7XHJcbiAgICAgIHJldHVybiAxMDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCAyMDAwKSB7XHJcbiAgICAgIHJldHVybiA5MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDMwMDApIHtcclxuICAgICAgcmV0dXJuIDgwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNDAwMCkge1xyXG4gICAgICByZXR1cm4gNzAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA1MDAwKSB7XHJcbiAgICAgIHJldHVybiA2MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDYwMDApIHtcclxuICAgICAgcmV0dXJuIDUwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNzAwMCkge1xyXG4gICAgICByZXR1cm4gNDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA4MDAwKSB7XHJcbiAgICAgIHJldHVybiAzMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25Bc3Rlcm9pZHMoYW1vdW50KSB7XHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICBkbyB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIGFzdGVyb2lkc1tpZF0gPSBuZXcgQXN0ZXJvaWQoaWQpO1xyXG4gICAgfSB3aGlsZSAoaSsrIDw9IGFtb3VudCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3blBvd2VydXAoKSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMocG93ZXJ1cHMpLmxlbmd0aCA8IDMpIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgcG93ZXJ1cHNbaWRdID0gbmV3IFBvd2VydXAoaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XHJcbiAgICAkc2NvcGUucGxheWluZyA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgIH1cclxuICAgIHNob3RzID0ge307XHJcbiAgICBpZiAoJHNjb3BlLmxvZ2dlZEluKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuaGlnaHNjb3JlLmFzdGVyb2lkcyA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzID0gJHNjb3BlLnNjb3JlO1xyXG4gICAgICAgIEdhbWVTdmMuc2V0SGlnaHNjb3JlKFwiYXN0ZXJvaWRzXCIsICRzY29wZS5jdXJyZW50VXNlci5faWQsICRzY29wZS5zY29yZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaHNjb3JlIDwgJHNjb3BlLnNjb3JlKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hzY29yZSA9ICRzY29wZS5zY29yZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU3RhcnQgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgYW5kXHJcbiAgLy8gZHJhdyBjYW52YXMuXHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgICAvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG4gICAgLy8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcbiAgICAvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcbiAgICAvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG4gICAgcmVzaXplQ2FudmFzKCk7XHJcbiAgfVxyXG4gIC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuICAvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuICAvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAtIDE7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1MCA6IDU5KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemUoKTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcblxyXG4gIHZhciB0YWxseSA9IDA7XHJcbiAgdmFyIGRpcmVjdGlvbiA9IHRydWU7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgIGlmIChzaG90c1tpXS5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIHNob3RzW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3RzW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIHBvd2VydXBzKSB7XHJcbiAgICAgIHBvd2VydXBzW2ldLm1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBleHBsb3Npb25zKSB7XHJcbiAgICAgIGlmIChleHBsb3Npb25zW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgZXhwbG9zaW9uc1tpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBleHBsb3Npb25zW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZhbHVhdGVLZXlzKCk7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgc3BhY2VzaGlwLm1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBjYW52YXMud2lkdGgsIDApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwXCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMC4yNVwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjAuNVwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjAuNzVcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIxLjBcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICAgIGN0eC5mb250ID0gXCI2MHB4ICdKYWNxdWFyZCAxMidcIjtcclxuICAgICAgY3R4LmZpbGxUZXh0KFwiQXN0ZXJvaWRzXCIsIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoXCJBc3Rlcm9pZHNcIikud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGN0eC5mb250ID0gXCIyMHB4IEFsZHJpY2hcIjtcclxuICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgIFwiUHJlc3Mgc3BhY2UgdG8gc3RhcnRcIixcclxuICAgICAgICBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KFwiUHJlc3Mgc3BhY2UgdG8gc3RhcnRcIikud2lkdGggLyAyLFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyICsgMjAsXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICBcIkRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlclwiLFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoXCJEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5IExhdXJlbnQgRGViYWNrZXJcIikud2lkdGggLyAyLFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgLSAzMCxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRhbGx5ICs9IGRpcmVjdGlvbiA/IDEgOiAtMTtcclxuICAgIGlmICh0YWxseSA+IDEwMCkge1xyXG4gICAgICB0YWxseSA9IDEwMDtcclxuICAgICAgZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHRhbGx5IDwgMCkge1xyXG4gICAgICB0YWxseSA9IDA7XHJcbiAgICAgIGRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuc3BhY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJhc3Rlcm9pZHMvc3BhY2UnICsgc3BhY2UgKyAnLmpwZ1wiKScsXHJcbiAgICB9O1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQnViYmxlc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1YmJsZXMtcGFnZVwiKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICB2YXIgYnViYmxlcyA9IFtdO1xyXG4gIHZhciBjb2xvcnMgPSBbXCIjZmZjMzAwXCIsIFwiI2ZmNTczM1wiLCBcIiNjNzAwMzlcIiwgXCIjOTAwYzNlXCIsIFwiIzU3MTg0NVwiXTtcclxuXHJcbiAgZnVuY3Rpb24gQnViYmxlKCkge1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDA7XHJcbiAgICB0aGlzLnJhZGl1cyA9IDE7XHJcbiAgICB0aGlzLmV4cGFuZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICB0aGlzLmNpcmN1bWZlcmVuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA1MCkgKyA1O1xyXG4gICAgdGhpcy5tYXhSYWRpdXMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyMDApICsgMjA7XHJcbiAgICB0aGlzLnggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGgpO1xyXG4gICAgdGhpcy55ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodCk7XHJcbiAgICB0aGlzLnZ4ID0gTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTE7XHJcbiAgICB0aGlzLnZ5ID0gTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTE7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgYnViYmxlcy5mb3JFYWNoKGZ1bmN0aW9uIChidWJibGUpIHtcclxuICAgICAgdmFyIGNvbG9yID0gY29sb3JzW01hdGgucm91bmQoKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzKSAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKGJ1YmJsZS54LCBidWJibGUueSwgYnViYmxlLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3JzW01hdGgucm91bmQoKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzKSAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3JzW2NvbG9ycy5sZW5ndGggLSBNYXRoLnJvdW5kKChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cykgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSAoYnViYmxlLmNpcmN1bWZlcmVuY2UgKiBidWJibGUucmFkaXVzKSAvIGJ1YmJsZS5tYXhSYWRpdXM7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmlsdGVyQnViYmxlcygpIHtcclxuICAgIGJ1YmJsZXMucHVzaChuZXcgQnViYmxlKCkpO1xyXG4gICAgYnViYmxlcyA9IGJ1YmJsZXMuZmlsdGVyKGZ1bmN0aW9uIChidWJibGUpIHtcclxuICAgICAgaWYgKGJ1YmJsZS5yYWRpdXMgPT09IGJ1YmJsZS5tYXhSYWRpdXMpIHtcclxuICAgICAgICBidWJibGUuZXhwYW5kaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgYnViYmxlLnggKz0gYnViYmxlLnZ4ICogYnViYmxlLnNwZWVkO1xyXG4gICAgICBidWJibGUueSArPSBidWJibGUudnkgKiBidWJibGUuc3BlZWQ7XHJcbiAgICAgIGJ1YmJsZS5yYWRpdXMgKz0gYnViYmxlLmV4cGFuZGluZyA/IDEgOiAtMTtcclxuICAgICAgcmV0dXJuIGJ1YmJsZS5yYWRpdXMgPiAwO1xyXG4gICAgfSk7XHJcbiAgICBkcmF3KCk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmlsdGVyQnViYmxlcyk7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmlsdGVyQnViYmxlcyk7XHJcblxyXG4gIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBTdGFydCBsaXN0ZW5pbmcgdG8gcmVzaXplIGV2ZW50cyBhbmRcclxuICAgIC8vIGRyYXcgY2FudmFzLlxyXG4gICAgaW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgICAgIC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcbiAgICAgIC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG4gICAgICAvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuICAgICAgLy8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuICAgICAgcmVzaXplQ2FudmFzKCk7XHJcbiAgICB9XHJcbiAgICAvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcbiAgICAvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuICAgIC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG4gICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG4gICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTUgOiA1Nik7XHJcbiAgICB9XHJcbiAgfSkoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJDaGFyYWRlc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSkge1xyXG4gICRzY29wZS5zZWxlY3RXb3JkID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAkc2NvcGUud29yZCA9ICRzY29wZS5jaGFyYWRlc1tjYXRlZ29yeV1bTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogJHNjb3BlLmNoYXJhZGVzW2NhdGVnb3J5XS5sZW5ndGgpXTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkNvbnRhY3RDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEVtYWlsU3ZjKSB7XHJcbiAgJHNjb3BlLm9wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU3BhbVwiLFxyXG4gICAgICB0ZXh0OiBcIkkgYW0gYSBzcGFtIGJvdCBhbmQgYXV0b21hdGljYWxseSBjaGVjayB0aGUgZmlyc3Qgb3B0aW9uIEkgZmluZCFcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiT3Bwb3J0dW5pdHlcIixcclxuICAgICAgdGV4dDogXCJZb3Ugc2VlbSB0byBoYXZlIHRoZSBza2lsbHMgSSBzZWVrLCBJJ2QgbGlrZSB0byB0YWxrIGFib3V0IHNvbWUgb3Bwb3J0dW5pdGllcy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUmVzdW1lXCIsXHJcbiAgICAgIHRleHQ6IFwiSSBkaWcgdGhlIHJlc3VtZSwgaG93IGRpZCB5b3UgbWFrZSBpdD9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiT3RoZXJcIixcclxuICAgICAgdGV4dDogXCJTdW10aW4gZWxzZSFcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgJHNjb3BlLmNvbnRhY3QgPSB7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBwaG9uZTogXCJcIixcclxuICAgIGFib3V0OiBcIlwiLFxyXG4gICAgbWVzc2FnZTogXCJcIixcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS5zZW5kaW5nID0gdHJ1ZTtcclxuICAgIEVtYWlsU3ZjLnNlbmQoe1xyXG4gICAgICBlbWFpbDogJHNjb3BlLmNvbnRhY3QuZW1haWwsXHJcbiAgICAgIG5hbWU6ICRzY29wZS5jb250YWN0Lm5hbWUsXHJcbiAgICAgIHBob25lOiAkc2NvcGUuY29udGFjdC5waG9uZSxcclxuICAgICAgYWJvdXQ6ICRzY29wZS5jb250YWN0LmFib3V0LFxyXG4gICAgICBtZXNzYWdlOiAkc2NvcGUuY29udGFjdC5tZXNzYWdlLFxyXG4gICAgfSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLnRvYXN0KFwiTWVzc2FnZSBzZW50XCIpO1xyXG4gICAgICAgICRzY29wZS5zZW50ID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1MuIHN0YXR1cz0lZCwgdGV4dD0lc1wiLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICRzY29wZS50b2FzdChcIk1lc3NhZ2Ugc2VuZCBmYWlsZWRcIik7XHJcbiAgICAgICAgJHNjb3BlLnNlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZBSUxFRC4gZXJyb3I9XCIsIGVycik7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0V4cGVyaWVuY2VDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUuZ2V0U2tpbGwgPSBmdW5jdGlvbihza2lsbENvZGUpIHtcclxuICAgIGlmICghJHNjb3BlLnNraWxscykgcmV0dXJuO1xyXG4gICAgcmV0dXJuICRzY29wZS5za2lsbHMuZmluZChmdW5jdGlvbihza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuY29kZSA9PT0gc2tpbGxDb2RlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0hvYmJpZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xyXG5cclxuICAkc2NvcGUuaG9iYnlTZWxlY3RvclZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgJC5nZXRKU09OKCdodHRwczovL3d3dy5yZWRkaXQuY29tL3VzZXIvYmVsZ29jYW5hZGlhbi9hYm91dC8uanNvbicsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkSG9iYnkgPSAkc2NvcGUuaG9iYmllc1swXTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdEhvYmJ5ID0gZnVuY3Rpb24gKGhvYmJ5KSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRIb2JieSA9IGhvYmJ5O1xyXG4gICAgJHNjb3BlLmhvYmJ5U2VsZWN0b3JWaXNpYmxlID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNob3dIb2JieSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICBpZiAoIXZhbHVlLmltYWdlcykgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHZhbHVlLmltYWdlcy5sZW5ndGggPiAwO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xlbW1pbmdzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEdhbWVTdmMpIHtcclxuXHJcbiAgdmFyIExFRlQgPSAwO1xyXG4gIHZhciBSSUdIVCA9IDE7XHJcblxyXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVtbWluZ3MtcGFnZScpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB2YXIgbGVtbWluZ3NJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGxlbW1pbmdzSW1hZ2Uuc3JjID0gJ2xlbW1pbmdzL2xlbW1pbmdzLnBuZyc7XHJcbiAgdmFyIGRlY29ySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBkZWNvckltYWdlLnNyYyA9ICdsZW1taW5ncy9kZWNvci5wbmcnO1xyXG4gIHZhciBsZW1taW5ncyA9IHt9O1xyXG4gIHZhciBzdGFydGVkID0gZmFsc2U7XHJcblxyXG4gIHZhciBhY3Rpb25zID0ge1xyXG4gICAgd2Fsazoge1xyXG4gICAgICBzdGFydDogWzAsIDBdLFxyXG4gICAgICBlbmQ6IFszMjAsIDIwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBodWg6IHtcclxuICAgICAgc3RhcnQ6IFszMjAsIDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDIwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZhbGw6IHtcclxuICAgICAgc3RhcnQ6IFswLCA4MF0sXHJcbiAgICAgIGVuZDogWzE2MCwgMTAwXSxcclxuICAgICAgY29sdW1uczogNCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBmbHk6IHtcclxuICAgICAgc3RhcnQ6IFsxNjAsIDgwXSxcclxuICAgICAgZW5kOiBbNDgwLCAxMTBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHN0b3A6IHtcclxuICAgICAgc3RhcnQ6IFswLCAxMjBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDE0MF0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGNsaW1iOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMTYwXSxcclxuICAgICAgZW5kOiBbNjQwLCAxODVdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBzdGFydDogWzAsIDIwMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMjI1XSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgcHVuY2g6IHtcclxuICAgICAgc3RhcnQ6IFswLCAyNDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDMwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAyLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGRpZzoge1xyXG4gICAgICBzdGFydDogWzAsIDMyMF0sXHJcbiAgICAgIGVuZDogWzMyMCwgMzQ1XSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gTGVtbWluZyhpbml0KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggLSAyMDApKSArIDEwMCwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNhbnZhcy5oZWlnaHQgLSAyMDApKSArIDEwMF07XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAyID4gMSA/IExFRlQgOiBSSUdIVDtcclxuICAgIHRoaXMuYWN0ID0gZnVuY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uc1thY3Rpb25dO1xyXG4gICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgdGhpcy53aWR0aCA9ICh0aGlzLmFjdGlvbi5lbmRbMF0gLSB0aGlzLmFjdGlvbi5zdGFydFswXSkgLyB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICB0aGlzLmhlaWdodCA9ICh0aGlzLmFjdGlvbi5lbmRbMV0gLSB0aGlzLmFjdGlvbi5zdGFydFsxXSAtICgyMCAqICh0aGlzLmFjdGlvbi5yb3dzIC0gMSkpKSAvIHRoaXMuYWN0aW9uLnJvd3M7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICB0aGlzLmFjdChpbml0KTtcclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25bMF0sIHRoaXMucG9zaXRpb25bMV0pO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IExFRlQpIHtcclxuICAgICAgICBjdHguc2NhbGUoLTEsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBjb2x1bW4gPSB0aGlzLmN5Y2xlICUgdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3IodGhpcy5jeWNsZSAvIHRoaXMuYWN0aW9uLmNvbHVtbnMpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKGxlbW1pbmdzSW1hZ2UsICh0aGlzLndpZHRoICogY29sdW1uKSArIHRoaXMuYWN0aW9uLnN0YXJ0WzBdLCAoKHRoaXMuaGVpZ2h0ICsgMjApICogcm93KSArIHRoaXMuYWN0aW9uLnN0YXJ0WzFdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgIGlmICh0aGlzLmFjdGlvbi5yZXZlcnNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgICBpZiAodGhpcy5jeWNsZSA+PSB0aGlzLmFjdGlvbi5jb2x1bW5zICogdGhpcy5hY3Rpb24ucm93cykge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICF0aGlzLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZS0tO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLS07XHJcbiAgICAgICAgICBpZiAodGhpcy5jeWNsZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSAhdGhpcy5hbmltYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPj0gdGhpcy5hY3Rpb24uY29sdW1ucyAqIHRoaXMuYWN0aW9uLnJvd3MpIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEhhdGNoKCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFsyMCwgMjBdO1xyXG4gICAgdGhpcy5hY3Rpb24gPSB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMF0sXHJcbiAgICAgIGVuZDogWzgyLCA1MDBdLFxyXG4gICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICByb3dzOiAxMFxyXG4gICAgfVxyXG4gICAgdGhpcy53aWR0aCA9ICh0aGlzLmFjdGlvbi5lbmRbMF0gLSB0aGlzLmFjdGlvbi5zdGFydFswXSkgLyB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAodGhpcy5hY3Rpb24uZW5kWzFdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMV0pIC8gdGhpcy5hY3Rpb24ucm93cztcclxuICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgdGhpcy5vcGVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSwgdGhpcy5wb3NpdGlvblsxXSk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIHZhciBjb2x1bW4sIHJvdztcclxuICAgICAgaWYgKHN0YXJ0ZWQpIHtcclxuICAgICAgICBjb2x1bW4gPSB0aGlzLmN5Y2xlICUgdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgICByb3cgPSBNYXRoLmZsb29yKHRoaXMuY3ljbGUgLyB0aGlzLmFjdGlvbi5jb2x1bW5zKTtcclxuICAgICAgICBpZiAodGhpcy5jeWNsZSA8IDkpIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29sdW1uID0gMDtcclxuICAgICAgICByb3cgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoZGVjb3JJbWFnZSwgKHRoaXMud2lkdGggKiBjb2x1bW4pICsgdGhpcy5hY3Rpb24uc3RhcnRbMF0sICh0aGlzLmhlaWdodCAqIHJvdykgKyB0aGlzLmFjdGlvbi5zdGFydFsxXSAtIDEsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduTGVtbWluZygpIHtcclxuICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2goZnVuY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgIGxlbW1pbmdzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCldID0gbmV3IExlbW1pbmcoYWN0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcblx0XHQvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuXHRcdC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHRcdC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcblx0XHRyZXNpemVDYW52YXMoKTtcclxuXHR9XHJcblx0Ly8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG5cdC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG5cdC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG5cdGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuXHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTAgOiAxMDUpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG4gIHNwYXduTGVtbWluZygpO1xyXG4gIGxldCBoYXRjaCA9IG5ldyBIYXRjaCgpXHJcbiAgZHJhdygpO1xyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgaWYgKCFzdGFydGVkKSB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmZvbnQ9JzQwcHggTW9ub3Rvbic7XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSAnMTAnO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XHJcbiAgICAgIGN0eC5yZWN0KDE1LCBjYW52YXMuaGVpZ2h0IC0gNDUsIGN0eC5tZWFzdXJlVGV4dCgnU3RhcnQnKS53aWR0aCArIDIwLCBjdHgubWVhc3VyZVRleHQoJ1N0YXJ0JykuaGVpZ2h0ICsgY2FudmFzLmhlaWdodCAtIDQ1KTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LmZpbGxUZXh0KCdTdGFydCcsIDIwLCBjYW52YXMuaGVpZ2h0IC0gNTApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yICh2YXIgaSBpbiBsZW1taW5ncykge1xyXG4gICAgICAgIGxlbW1pbmdzW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGF0Y2gub3BlbigpO1xyXG4gICAgc3RhcnRlZCA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBkcmF3KCk7XHJcbiAgICB9LCAxNTApO1xyXG4gIH1cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignTGlzdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBDYXRlZ29yaWVzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5zaG93Q2F0ZWdvcnkgPSB0cnVlO1xyXG5cclxuICAkc2NvcGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIENhdGVnb3JpZXNTdmMuZ2V0Q2F0ZWdvcmllcygpXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAkc2NvcGUudGFza3MgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuY2F0ZWdvcmllcykge1xyXG4gICAgICAgIGZvciAodmFyIGogaW4gJHNjb3BlLmNhdGVnb3JpZXNbaV0udGFza3MpIHtcclxuICAgICAgICAgICRzY29wZS50YXNrcy5wdXNoKHtcclxuICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiAkc2NvcGUuY2F0ZWdvcmllc1tpXS5uYW1lLFxyXG4gICAgICAgICAgICBcInRhc2tcIjogJHNjb3BlLmNhdGVnb3JpZXNbaV0udGFza3Nbal0ubmFtZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkgPSBmdW5jdGlvbihjYXRlZ29yeSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICRzY29wZS5zZWxlY3RlZFRhc2tzID0gW107XHJcbiAgICAkc2NvcGUuc2VsZWN0YWJsZVRhc2tzID0gW107XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzKSB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RhYmxlVGFza3MucHVzaCgkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuc2hvd0NhdGVnb3J5ID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuZW50ZXJlZENhdGVnb3J5ID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLm5ld0NhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUgPT09IGNhdGVnb3J5KSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5KCRzY29wZS5jYXRlZ29yaWVzW2ldKTtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5hZGRDYXRlZ29yeSh7XHJcbiAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5XHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgJHNjb3BlLmluaXQoKTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICRzY29wZS5lbnRlcmVkQ2F0ZWdvcnkgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUubmV3VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpIHtcclxuICAgICAgaWYgKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldLm5hbWUgPT09IHRhc2spIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdFRhc2soJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS5uYW1lLCB7XHJcbiAgICAgICAgdGFzazogdGFza1xyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcy5wdXNoKHsgbmFtZTogdGFzayB9KTtcclxuICAgICAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MubGVuZ3RoIC0gMV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICRzY29wZS5lbnRlcmVkVGFzayA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5yZW1vdmVUYXNrKCRzY29wZS5zZWxlY3RhYmxlVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLmVudGVyZWRUYXNrID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVuc2VsZWN0VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5yZW1vdmVUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCB0YXNrKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuYWRkVGFzayA9IGZ1bmN0aW9uKHRhc2tMaXN0LCB0YXNrKSB7XHJcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2spO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5yZW1vdmVUYXNrID0gZnVuY3Rpb24odGFza0xpc3QsIHRhc2spIHtcclxuICAgIHRhc2tMaXN0LnNwbGljZSh0YXNrTGlzdC5pbmRleE9mKHRhc2spLCAxKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc3RhcnRQcmlvcml0aXppbmcgPSBmdW5jdGlvbigpIHtcclxuICAgIENhdGVnb3JpZXNTdmMuc2V0UHJpb3JpdHlMaXN0KCRzY29wZS5zZWxlY3RlZFRhc2tzKTtcclxuICAgICRsb2NhdGlvbi5wYXRoKCcvcHJpb3JpdGl6ZScpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRRdWVzdGlvbnMgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghJHNjb3BlLnNlbGVjdGVkVGFza3MpIHJldHVybiAnJztcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAkc2NvcGUuc2VsZWN0ZWRUYXNrcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgIGNvdW50ZXIgKz0gaTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb3VudGVyO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkxvZ2luQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFVzZXJTdmMpIHtcclxuICAvLyBJbml0aWFsaXplIHRoZSBGaXJlYmFzZVVJIFdpZGdldCB1c2luZyBGaXJlYmFzZS5cclxuICB2YXIgdWkgPSBuZXcgZmlyZWJhc2V1aS5hdXRoLkF1dGhVSShmaXJlYmFzZS5hdXRoKCkpO1xyXG5cclxuICAkc2NvcGUuJG9uKFwibG9nb3V0XCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdWkucmVzZXQoKTtcclxuICAgIHN0YXJ0VUkoKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRVSSgpIHtcclxuICAgIHVpLnN0YXJ0KFwiI2ZpcmViYXNldWktYXV0aC1jb250YWluZXJcIiwge1xyXG4gICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBzaWduSW5TdWNjZXNzOiBmdW5jdGlvbiAoY3VycmVudFVzZXIsIGNyZWRlbnRpYWwsIHJlZGlyZWN0VXJsKSB7XHJcbiAgICAgICAgICAvLyBObyByZWRpcmVjdC5cclxuICAgICAgICAgIGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5hdXRoKClcclxuICAgICAgICAgICAgLmN1cnJlbnRVc2VyLmdldElkVG9rZW4odHJ1ZSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGlkVG9rZW4pIHtcclxuICAgICAgICAgICAgICBVc2VyU3ZjLmF1dGhlbnRpY2F0ZSh7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogY3VycmVudFVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogY3VycmVudFVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwaG90b1VSTDogY3VycmVudFVzZXIucGhvdG9VUkwsXHJcbiAgICAgICAgICAgICAgICBlbWFpbFZlcmlmaWVkOiBjdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkLFxyXG4gICAgICAgICAgICAgICAgaWRUb2tlbjogaWRUb2tlbixcclxuICAgICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdChcImxvZ2luXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAkKFwiI21vZGFsLWxvZ2luXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgICAgICAgICAgICAgLy8kbG9jYXRpb24ucGF0aCgnLycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnRvYXN0KFwiTG9naW4gRmFpbGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIHNpZ25JbkZhaWx1cmUgY2FsbGJhY2sgbXVzdCBiZSBwcm92aWRlZCB0byBoYW5kbGUgbWVyZ2UgY29uZmxpY3RzIHdoaWNoXHJcbiAgICAgICAgLy8gb2NjdXIgd2hlbiBhbiBleGlzdGluZyBjcmVkZW50aWFsIGlzIGxpbmtlZCB0byBhbiBhbm9ueW1vdXMgdXNlci5cclxuICAgICAgICBzaWduSW5GYWlsdXJlOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgIC8vIEZvciBtZXJnZSBjb25mbGljdHMsIHRoZSBlcnJvci5jb2RlIHdpbGwgYmVcclxuICAgICAgICAgIC8vICdmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0Jy5cclxuICAgICAgICAgIGlmIChlcnJvci5jb2RlICE9IFwiZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFRoZSBjcmVkZW50aWFsIHRoZSB1c2VyIHRyaWVkIHRvIHNpZ24gaW4gd2l0aC5cclxuICAgICAgICAgIHZhciBjcmVkID0gZXJyb3IuY3JlZGVudGlhbDtcclxuICAgICAgICAgIC8vIENvcHkgZGF0YSBmcm9tIGFub255bW91cyB1c2VyIHRvIHBlcm1hbmVudCB1c2VyIGFuZCBkZWxldGUgYW5vbnltb3VzXHJcbiAgICAgICAgICAvLyB1c2VyLlxyXG4gICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAvLyBGaW5pc2ggc2lnbi1pbiBhZnRlciBkYXRhIGlzIGNvcGllZC5cclxuICAgICAgICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aENyZWRlbnRpYWwoY3JlZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1aVNob3duOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvLyBUaGUgd2lkZ2V0IGlzIHJlbmRlcmVkLlxyXG4gICAgICAgICAgLy8gSGlkZSB0aGUgbG9hZGVyLlxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpZ25JblN1Y2Nlc3NVcmw6IFwiL2hvbWVcIixcclxuICAgICAgc2lnbkluT3B0aW9uczogW1xyXG4gICAgICAgIC8vZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICBdLFxyXG5cclxuICAgICAgLy8gV2lsbCB1c2UgcG9wdXAgZm9yIElEUCBQcm92aWRlcnMgc2lnbi1pbiBmbG93IGluc3RlYWQgb2YgdGhlIGRlZmF1bHQsIHJlZGlyZWN0LlxyXG4gICAgICBzaWduSW5GbG93OiBcInBvcHVwXCIsXHJcbiAgICAgIC8vIE90aGVyIGNvbmZpZyBvcHRpb25zLi4uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0VUkoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUG9zdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGZpbHRlciwgUG9zdHNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XHJcbiAgICAgIFBvc3RzU3ZjLmNyZWF0ZSh7XHJcbiAgICAgICAgYm9keTogJHNjb3BlLnBvc3RCb2R5XHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgICAgICAkc2NvcGUucG9zdEJvZHkgPSBudWxsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBQb3N0c1N2Yy5mZXRjaCgpXHJcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUucG9zdHMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKCd3czpuZXdfcG9zdCcsIGZ1bmN0aW9uIChfLCBwb3N0KSB7XHJcbiAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgUG9zdHNTdmMuZ2V0UG9zdChwb3N0KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUucG9zdHMudW5zaGlmdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUHJvZmlsZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcbiAgY29uc3QgY291bnRyaWVzID0gW1xyXG4gICAgeyBuYW1lOiBcIkFuZG9ycmFcIiwgZmxhZzogXCJmbGFnLWFkXCIsIHRpZGJpdDogXCJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBBcmFiIEVtaXJhdGVzXCIsIGZsYWc6IFwiZmxhZy1hZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWZnaGFuaXN0YW5cIiwgZmxhZzogXCJmbGFnLWFmXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsIGZsYWc6IFwiZmxhZy1hZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW5ndWlsbGFcIiwgZmxhZzogXCJmbGFnLWFpXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbGJhbmlhXCIsIGZsYWc6IFwiZmxhZy1hbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXJtZW5pYVwiLCBmbGFnOiBcImZsYWctYW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFuZ29sYVwiLCBmbGFnOiBcImZsYWctYW9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFudGFyY3RpY2FcIiwgZmxhZzogXCJmbGFnLWFxXCIgfSxcclxuICAgIHsgbmFtZTogXCJBcmdlbnRpbmFcIiwgZmxhZzogXCJmbGFnLWFyXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbWVyaWNhbiBTb21vYVwiLCBmbGFnOiBcImZsYWctYXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF1c3RyaWFcIiwgZmxhZzogXCJmbGFnLWF0XCIgfSxcclxuICAgIHsgbmFtZTogXCJBdXN0cmFsaWFcIiwgZmxhZzogXCJmbGFnLWF1XCIgfSxcclxuICAgIHsgbmFtZTogXCJBcnViYVwiLCBmbGFnOiBcImZsYWctYXdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIsOFbGFuZCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1heFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXplcmJhaWphblwiLCBmbGFnOiBcImZsYWctYXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIiwgZmxhZzogXCJmbGFnLWJhXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYXJiYWRvc1wiLCBmbGFnOiBcImZsYWctYmJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhbmdsYWRlc2hcIiwgZmxhZzogXCJmbGFnLWJkXCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxnaXVtXCIsIGZsYWc6IFwiZmxhZy1iZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnVya2luYSBGYXNvXCIsIGZsYWc6IFwiZmxhZy1iZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnVsZ2FyaWFcIiwgZmxhZzogXCJmbGFnLWJnXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYWhyYWluXCIsIGZsYWc6IFwiZmxhZy1iaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnVydW5kaVwiLCBmbGFnOiBcImZsYWctYmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbmluXCIsIGZsYWc6IFwiZmxhZy1ialwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgQmFydGjDqWxlbXlcIiwgZmxhZzogXCJmbGFnLWJsXCIgfSxcclxuICAgIHsgbmFtZTogXCJCZXJtdWRhXCIsIGZsYWc6IFwiZmxhZy1ibVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJ1bmVpIFwiLCBmbGFnOiBcImZsYWctYm5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvbGl2aWEsIFBsdXJpbmF0aW9uYWwgU3RhdGUgb2ZcIiwgZmxhZzogXCJmbGFnLWJvXCIgfSxcclxuICAgIHsgbmFtZTogXCJCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYVwiLCBmbGFnOiBcImZsYWctYnFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJyYXppbFwiLCBmbGFnOiBcImZsYWctYnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhaGFtYXNcIiwgZmxhZzogXCJmbGFnLWJzXCIgfSxcclxuICAgIHsgbmFtZTogXCJCaHV0YW5cIiwgZmxhZzogXCJmbGFnLWJ0XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3V2ZXQgSXNsYW5kXCIsIGZsYWc6IFwiZmxhZy1idlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm90c3dhbmFcIiwgZmxhZzogXCJmbGFnLWJ3XCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxhcnVzXCIsIGZsYWc6IFwiZmxhZy1ieVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVsaXplXCIsIGZsYWc6IFwiZmxhZy1ielwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FuYWRhXCIsIGZsYWc6IFwiZmxhZy1jYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb25nbywgdGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlXCIsIGZsYWc6IFwiZmxhZy1jZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1jZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29uZ29cIiwgZmxhZzogXCJmbGFnLWNnXCIgfSxcclxuICAgIHsgbmFtZTogXCJTd2l0emVybGFuZFwiLCBmbGFnOiBcImZsYWctY2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkPDtHRlIGQnSXZvaXJlXCIsIGZsYWc6IFwiZmxhZy1jaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29vayBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1ja1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hpbGVcIiwgZmxhZzogXCJmbGFnLWNsXCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW1lcm9vblwiLCBmbGFnOiBcImZsYWctY21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoaW5hXCIsIGZsYWc6IFwiZmxhZy1jblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29sb21iaWFcIiwgZmxhZzogXCJmbGFnLWNvXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb3N0YSBSaWNhXCIsIGZsYWc6IFwiZmxhZy1jclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3ViYVwiLCBmbGFnOiBcImZsYWctY3VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhYm8gVmVyZGVcIiwgZmxhZzogXCJmbGFnLWN2XCIgfSxcclxuICAgIHsgbmFtZTogXCJDdXJhw6dhb1wiLCBmbGFnOiBcImZsYWctY3dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNocmlzdG1hcyBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLWN4XCIgfSxcclxuICAgIHsgbmFtZTogXCJDeXBydXNcIiwgZmxhZzogXCJmbGFnLWN5XCIgfSxcclxuICAgIHsgbmFtZTogXCJDemVjaCBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctY3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdlcm1hbnlcIiwgZmxhZzogXCJmbGFnLWRlXCIgfSxcclxuICAgIHsgbmFtZTogXCJEamlib3V0aVwiLCBmbGFnOiBcImZsYWctZGpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRlbm1hcmtcIiwgZmxhZzogXCJmbGFnLWRrXCIgfSxcclxuICAgIHsgbmFtZTogXCJEb21pbmljYVwiLCBmbGFnOiBcImZsYWctZG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRvbWluaWNhbiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctZG9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFsZ2VyaWFcIiwgZmxhZzogXCJmbGFnLWR6XCIgfSxcclxuICAgIHsgbmFtZTogXCJFY3VhZG9yXCIsIGZsYWc6IFwiZmxhZy1lY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXN0b25pYVwiLCBmbGFnOiBcImZsYWctZWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVneXB0XCIsIGZsYWc6IFwiZmxhZy1lZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiV2VzdGVybiBTYWhhcmFcIiwgZmxhZzogXCJmbGFnLWVoXCIgfSxcclxuICAgIHsgbmFtZTogXCJFcml0cmVhXCIsIGZsYWc6IFwiZmxhZy1lclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3BhaW5cIiwgZmxhZzogXCJmbGFnLWVzXCIgfSxcclxuICAgIHsgbmFtZTogXCJFdGhpb3BpYVwiLCBmbGFnOiBcImZsYWctZXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZpbmxhbmRcIiwgZmxhZzogXCJmbGFnLWZpXCIgfSxcclxuICAgIHsgbmFtZTogXCJGaWppXCIsIGZsYWc6IFwiZmxhZy1malwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpXCIsIGZsYWc6IFwiZmxhZy1ma1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcyBvZlwiLCBmbGFnOiBcImZsYWctZm1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZhcm9lIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWZvXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmFuY2VcIiwgZmxhZzogXCJmbGFnLWZyXCIgfSxcclxuICAgIHsgbmFtZTogXCJHYWJvblwiLCBmbGFnOiBcImZsYWctZ2FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmRcIiwgZmxhZzogXCJmbGFnLWdiXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVuYWRhXCIsIGZsYWc6IFwiZmxhZy1nZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2VvcmdpYVwiLCBmbGFnOiBcImZsYWctZ2VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBHdWlhbmFcIiwgZmxhZzogXCJmbGFnLWdmXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWVybnNleVwiLCBmbGFnOiBcImZsYWctZ2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdoYW5hXCIsIGZsYWc6IFwiZmxhZy1naFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2licmFsdGFyXCIsIGZsYWc6IFwiZmxhZy1naVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3JlZW5sYW5kXCIsIGZsYWc6IFwiZmxhZy1nbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2FtYmlhXCIsIGZsYWc6IFwiZmxhZy1nbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1nblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VhZGVsb3VwZVwiLCBmbGFnOiBcImZsYWctZ3BcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVxdWF0b3JpYWwgR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1ncVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3JlZWNlXCIsIGZsYWc6IFwiZmxhZy1nclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWdzXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWF0ZW1hbGFcIiwgZmxhZzogXCJmbGFnLWd0XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWFtXCIsIGZsYWc6IFwiZmxhZy1ndVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VpbmVhLUJpc3NhdVwiLCBmbGFnOiBcImZsYWctZ3dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1eWFuYVwiLCBmbGFnOiBcImZsYWctZ3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhvbmcgS29uZ1wiLCBmbGFnOiBcImZsYWctaGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctaG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhvbmR1cmFzXCIsIGZsYWc6IFwiZmxhZy1oblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3JvYXRpYVwiLCBmbGFnOiBcImZsYWctaHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhhaXRpXCIsIGZsYWc6IFwiZmxhZy1odFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSHVuZ2FyeVwiLCBmbGFnOiBcImZsYWctaHVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkluZG9uZXNpYVwiLCBmbGFnOiBcImZsYWctaWRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklyZWxhbmRcIiwgZmxhZzogXCJmbGFnLWllXCIgfSxcclxuICAgIHsgbmFtZTogXCJJc3JhZWxcIiwgZmxhZzogXCJmbGFnLWlsXCIgfSxcclxuICAgIHsgbmFtZTogXCJJc2xlIG9mIE1hblwiLCBmbGFnOiBcImZsYWctaW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkluZGlhXCIsIGZsYWc6IFwiZmxhZy1pblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCIsIGZsYWc6IFwiZmxhZy1pb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJhcVwiLCBmbGFnOiBcImZsYWctaXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWlyXCIgfSxcclxuICAgIHsgbmFtZTogXCJJY2VsYW5kXCIsIGZsYWc6IFwiZmxhZy1pc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXRhbHlcIiwgZmxhZzogXCJmbGFnLWl0XCIgfSxcclxuICAgIHsgbmFtZTogXCJKZXJzZXlcIiwgZmxhZzogXCJmbGFnLWplXCIgfSxcclxuICAgIHsgbmFtZTogXCJKYW1haWNhXCIsIGZsYWc6IFwiZmxhZy1qbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSm9yZGFuXCIsIGZsYWc6IFwiZmxhZy1qb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSmFwYW5cIiwgZmxhZzogXCJmbGFnLWpwXCIgfSxcclxuICAgIHsgbmFtZTogXCJLZW55YVwiLCBmbGFnOiBcImZsYWcta2VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkt5cmd5enN0YW5cIiwgZmxhZzogXCJmbGFnLWtnXCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW1ib2RpYVwiLCBmbGFnOiBcImZsYWcta2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktpcmliYXRpXCIsIGZsYWc6IFwiZmxhZy1raVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29tb3Jvc1wiLCBmbGFnOiBcImZsYWcta21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLCBmbGFnOiBcImZsYWcta25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIktvcmVhLCBEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1rcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS29yZWEsIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1rclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS3V3YWl0XCIsIGZsYWc6IFwiZmxhZy1rd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2F5bWFuIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWt5XCIgfSxcclxuICAgIHsgbmFtZTogXCJLYXpha2hzdGFuXCIsIGZsYWc6IFwiZmxhZy1relwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWxhXCIgfSxcclxuICAgIHsgbmFtZTogXCJMZWJhbm9uXCIsIGZsYWc6IFwiZmxhZy1sYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgTHVjaWFcIiwgZmxhZzogXCJmbGFnLWxjXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWVjaHRlbnN0ZWluXCIsIGZsYWc6IFwiZmxhZy1saVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3JpIExhbmthXCIsIGZsYWc6IFwiZmxhZy1sa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGliZXJpYVwiLCBmbGFnOiBcImZsYWctbHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxlc290aG9cIiwgZmxhZzogXCJmbGFnLWxzXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaXRodWFuaWFcIiwgZmxhZzogXCJmbGFnLWx0XCIgfSxcclxuICAgIHsgbmFtZTogXCJMdXhlbWJvdXJnXCIsIGZsYWc6IFwiZmxhZy1sdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGF0dmlhXCIsIGZsYWc6IFwiZmxhZy1sdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGlieWFcIiwgZmxhZzogXCJmbGFnLWx5XCIgfSxcclxuICAgIHsgbmFtZTogXCJNb3JvY2NvXCIsIGZsYWc6IFwiZmxhZy1tYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9uYWNvXCIsIGZsYWc6IFwiZmxhZy1tY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9sZG92YSwgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLW1kXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb250ZW5lZ3JvXCIsIGZsYWc6IFwiZmxhZy1tZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIiwgZmxhZzogXCJmbGFnLW1mXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWRhZ2FzY2FyXCIsIGZsYWc6IFwiZmxhZy1tZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFyc2hhbGwgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctbWhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hY2Vkb25pYSwgdGhlIGZvcm1lciBZdWdvc2xhdiBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctbWtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGlcIiwgZmxhZzogXCJmbGFnLW1sXCIgfSxcclxuICAgIHsgbmFtZTogXCJNeWFubWFyXCIsIGZsYWc6IFwiZmxhZy1tbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9uZ29saWFcIiwgZmxhZzogXCJmbGFnLW1uXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWNhb1wiLCBmbGFnOiBcImZsYWctbW9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctbXBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hcnRpbmlxdWVcIiwgZmxhZzogXCJmbGFnLW1xXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXVyaXRhbmlhXCIsIGZsYWc6IFwiZmxhZy1tclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9udHNlcnJhdFwiLCBmbGFnOiBcImZsYWctbXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbHRhXCIsIGZsYWc6IFwiZmxhZy1tdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWF1cml0aXVzXCIsIGZsYWc6IFwiZmxhZy1tdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsZGl2ZXNcIiwgZmxhZzogXCJmbGFnLW12XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxhd2lcIiwgZmxhZzogXCJmbGFnLW13XCIgfSxcclxuICAgIHsgbmFtZTogXCJNZXhpY29cIiwgZmxhZzogXCJmbGFnLW14XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxheXNpYVwiLCBmbGFnOiBcImZsYWctbXlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vemFtYmlxdWVcIiwgZmxhZzogXCJmbGFnLW16XCIgfSxcclxuICAgIHsgbmFtZTogXCJOYW1pYmlhXCIsIGZsYWc6IFwiZmxhZy1uYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV3IENhbGVkb25pYVwiLCBmbGFnOiBcImZsYWctbmNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pZ2VyXCIsIGZsYWc6IFwiZmxhZy1uZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9yZm9sayBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLW5mXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWdlcmlhXCIsIGZsYWc6IFwiZmxhZy1uZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmljYXJhZ3VhXCIsIGZsYWc6IFwiZmxhZy1uaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV0aGVybGFuZHNcIiwgZmxhZzogXCJmbGFnLW5sXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3J3YXlcIiwgZmxhZzogXCJmbGFnLW5vXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXBhbFwiLCBmbGFnOiBcImZsYWctbnBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hdXJ1XCIsIGZsYWc6IFwiZmxhZy1uclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTml1ZVwiLCBmbGFnOiBcImZsYWctbnVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5ldyBaZWFsYW5kXCIsIGZsYWc6IFwiZmxhZy1uelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiT21hblwiLCBmbGFnOiBcImZsYWctb21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhbmFtYVwiLCBmbGFnOiBcImZsYWctcGFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBlcnVcIiwgZmxhZzogXCJmbGFnLXBlXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggUG9seW5lc2lhXCIsIGZsYWc6IFwiZmxhZy1wZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFwdWEgTmV3IEd1aW5lYVwiLCBmbGFnOiBcImZsYWctcGdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBoaWxpcHBpbmVzXCIsIGZsYWc6IFwiZmxhZy1waFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFraXN0YW5cIiwgZmxhZzogXCJmbGFnLXBrXCIgfSxcclxuICAgIHsgbmFtZTogXCJQb2xhbmRcIiwgZmxhZzogXCJmbGFnLXBsXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCIsIGZsYWc6IFwiZmxhZy1wbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGl0Y2Fpcm5cIiwgZmxhZzogXCJmbGFnLXBuXCIgfSxcclxuICAgIHsgbmFtZTogXCJQdWVydG8gUmljb1wiLCBmbGFnOiBcImZsYWctcHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhbGVzdGluZSwgU3RhdGUgb2ZcIiwgZmxhZzogXCJmbGFnLXBzXCIgfSxcclxuICAgIHsgbmFtZTogXCJQb3J0dWdhbFwiLCBmbGFnOiBcImZsYWctcHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhbGF1XCIsIGZsYWc6IFwiZmxhZy1wd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFyYWd1YXlcIiwgZmxhZzogXCJmbGFnLXB5XCIgfSxcclxuICAgIHsgbmFtZTogXCJRYXRhclwiLCBmbGFnOiBcImZsYWctcWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlLDqXVuaW9uXCIsIGZsYWc6IFwiZmxhZy1yZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUm9tYW5pYVwiLCBmbGFnOiBcImZsYWctcm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNlcmJpYVwiLCBmbGFnOiBcImZsYWctcnNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlJ1c3NpYW4gRmVkZXJhdGlvblwiLCBmbGFnOiBcImZsYWctcnVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlJ3YW5kYVwiLCBmbGFnOiBcImZsYWctcndcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhdWRpIEFyYWJpYVwiLCBmbGFnOiBcImZsYWctc2FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvbG9tb24gSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctc2JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNleWNoZWxsZXNcIiwgZmxhZzogXCJmbGFnLXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJTdWRhblwiLCBmbGFnOiBcImZsYWctc2RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3ZWRlblwiLCBmbGFnOiBcImZsYWctc2VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpbmdhcG9yZVwiLCBmbGFnOiBcImZsYWctc2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhXCIsIGZsYWc6IFwiZmxhZy1zaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2xvdmVuaWFcIiwgZmxhZzogXCJmbGFnLXNpXCIgfSxcclxuICAgIHsgbmFtZTogXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCIsIGZsYWc6IFwiZmxhZy1zalwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2xvdmFraWFcIiwgZmxhZzogXCJmbGFnLXNrXCIgfSxcclxuICAgIHsgbmFtZTogXCJTaWVycmEgTGVvbmVcIiwgZmxhZzogXCJmbGFnLXNsXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW4gTWFyaW5vXCIsIGZsYWc6IFwiZmxhZy1zbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2VuZWdhbFwiLCBmbGFnOiBcImZsYWctc25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvbWFsaWFcIiwgZmxhZzogXCJmbGFnLXNvXCIgfSxcclxuICAgIHsgbmFtZTogXCJTdXJpbmFtZVwiLCBmbGFnOiBcImZsYWctc3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvdXRoIFN1ZGFuXCIsIGZsYWc6IFwiZmxhZy1zc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FvIFRvbWUgYW5kIFByaW5jaXBlXCIsIGZsYWc6IFwiZmxhZy1zdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWwgU2FsdmFkb3JcIiwgZmxhZzogXCJmbGFnLXN2XCIgfSxcclxuICAgIHsgbmFtZTogXCJTaW50IE1hYXJ0ZW4gKER1dGNoIHBhcnQpXCIsIGZsYWc6IFwiZmxhZy1zeFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3lyaWFuIEFyYWIgUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLXN5XCIgfSxcclxuICAgIHsgbmFtZTogXCJTd2F6aWxhbmRcIiwgZmxhZzogXCJmbGFnLXN6XCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLXRjXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGFkXCIsIGZsYWc6IFwiZmxhZy10ZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzXCIsIGZsYWc6IFwiZmxhZy10ZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9nb1wiLCBmbGFnOiBcImZsYWctdGdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRoYWlsYW5kXCIsIGZsYWc6IFwiZmxhZy10aFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGFqaWtpc3RhblwiLCBmbGFnOiBcImZsYWctdGpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRva2VsYXVcIiwgZmxhZzogXCJmbGFnLXRrXCIgfSxcclxuICAgIHsgbmFtZTogXCJUaW1vci1MZXN0ZVwiLCBmbGFnOiBcImZsYWctdGxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmttZW5pc3RhblwiLCBmbGFnOiBcImZsYWctdG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1bmlzaWFcIiwgZmxhZzogXCJmbGFnLXRuXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb25nYVwiLCBmbGFnOiBcImZsYWctdG9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmtleVwiLCBmbGFnOiBcImZsYWctdHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIiwgZmxhZzogXCJmbGFnLXR0XCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXZhbHVcIiwgZmxhZzogXCJmbGFnLXR2XCIgfSxcclxuICAgIHsgbmFtZTogXCJUYWl3YW4sIFByb3ZpbmNlIG9mIENoaW5hXCIsIGZsYWc6IFwiZmxhZy10d1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctdHpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVrcmFpbmVcIiwgZmxhZzogXCJmbGFnLXVhXCIgfSxcclxuICAgIHsgbmFtZTogXCJVZ2FuZGFcIiwgZmxhZzogXCJmbGFnLXVnXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLXVtXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIiwgZmxhZzogXCJmbGFnLXVzXCIgfSxcclxuICAgIHsgbmFtZTogXCJVcnVndWF5XCIsIGZsYWc6IFwiZmxhZy11eVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVXpiZWtpc3RhblwiLCBmbGFnOiBcImZsYWctdXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhvbHkgU2VlXCIsIGZsYWc6IFwiZmxhZy12YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIiwgZmxhZzogXCJmbGFnLXZjXCIgfSxcclxuICAgIHsgbmFtZTogXCJWZW5lenVlbGEsIEJvbGl2YXJpYW4gUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLXZlXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaXJnaW4gSXNsYW5kcywgQnJpdGlzaFwiLCBmbGFnOiBcImZsYWctdmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzLCBVLlMuXCIsIGZsYWc6IFwiZmxhZy12aVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlldCBOYW1cIiwgZmxhZzogXCJmbGFnLXZuXCIgfSxcclxuICAgIHsgbmFtZTogXCJWYW51YXR1XCIsIGZsYWc6IFwiZmxhZy12dVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiV2FsbGlzIGFuZCBGdXR1bmFcIiwgZmxhZzogXCJmbGFnLXdmXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW1vYVwiLCBmbGFnOiBcImZsYWctd3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlllbWVuXCIsIGZsYWc6IFwiZmxhZy15ZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWF5b3R0ZVwiLCBmbGFnOiBcImZsYWcteXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvdXRoIEFmcmljYVwiLCBmbGFnOiBcImZsYWctemFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlphbWJpYVwiLCBmbGFnOiBcImZsYWctem1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlppbWJhYndlXCIsIGZsYWc6IFwiZmxhZy16d1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVXNlckZsYWdzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnVzZXJGbGFncyA9ICRzY29wZS5jdXJyZW50VXNlcj8uZmxhZ3NcclxuICAgICAgPyBjb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChjb3VudHJ5KSB7XHJcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLmN1cnJlbnRVc2VyLmZsYWdzLmluY2x1ZGVzKGNvdW50cnkuZmxhZyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgOiBbXTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZGF0ZU9wdGlvbnMgPSB7XHJcbiAgICBtYXhEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgbWluRGF0ZTogbmV3IERhdGUoMTkwMCwgMSwgMSksXHJcbiAgICBpbml0RGF0ZTogbmV3IERhdGUoMjAwMCwgMSwgMSksXHJcbiAgICBkYXRlcGlja2VyTW9kZTogXCJ5ZWFyXCIsXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVzZXJuYW1lVG9nZ2xlID0gdHJ1ZTtcclxuICAkc2NvcGUucGFzc3dvcmRUb2dnbGUgPSB0cnVlO1xyXG5cclxuICAkc2NvcGUudG9nZ2xlVXNlcm5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSAhJHNjb3BlLnVzZXJuYW1lVG9nZ2xlO1xyXG4gICAgJHNjb3BlLm5ld1VzZXJuYW1lID0gJHNjb3BlLmN1cnJlbnRVc2VyLnVzZXJuYW1lO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS50b2dnbGVQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS5uZXdQYXNzd29yZCA9IG51bGw7XHJcbiAgICAkc2NvcGUuY29uZmlybVBhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9ICEkc2NvcGUucGFzc3dvcmRUb2dnbGU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAocGFzc3dvcmQpIHtcclxuICAgIGlmIChwYXNzd29yZCkge1xyXG4gICAgICB2YXIgdXNlciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgIFVzZXJTdmMuY2hlY2tQYXNzd29yZCh1c2VyLCBwYXNzd29yZCkudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBvcmlnaW5hbEJnID0gJChcIi5wYXNzd29yZFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIik7XHJcbiAgICAgICAgICAkKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjZDMVwiIH0sIDIwMCkuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogb3JpZ2luYWxCZyB9LCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVBhc3N3b3JkID0gZnVuY3Rpb24gKG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCwgY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICBpZiAobmV3UGFzc3dvcmQpIHtcclxuICAgICAgaWYgKG5ld1Bhc3N3b3JkID09IGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgICBVc2VyU3ZjLmNoYW5nZVBhc3N3b3JkKHVzZXIsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCkudGhlbihcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnRvYXN0KFwiUGFzc3dvcmQgY2hhbmdlZFwiKTtcclxuICAgICAgICAgICAgJHNjb3BlLm9sZFBhc3N3b3JkID0gbnVsbDtcclxuICAgICAgICAgICAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUudG9hc3QoXCJQYXNzd29yZCBjaGFuZ2UgZmFpbGVkXCIpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBvcmlnaW5hbEJnID0gJChcIi5wYXNzd29yZFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIik7XHJcbiAgICAgICAgJChcIi5wYXNzd29yZFwiKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNGRkI2QzFcIiB9LCAyMDApLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG9yaWdpbmFsQmcgfSwgMjAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VybmFtZSkge1xyXG4gICAgJHNjb3BlLiRlbWl0KFwibG9hZGluZ1wiKTtcclxuICAgIFVzZXJTdmMuY2hhbmdlVXNlcm5hbWUoJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCwgdXNlcm5hbWUpLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS4kZW1pdChcInVwZGF0ZVwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS50b2FzdCh1c2VybmFtZSArIFwiIGFscmVhZHkgaW4gdXNlXCIpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUudXBkYXRlVXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS4kZW1pdChcImxvYWRpbmdcIik7XHJcbiAgICBVc2VyU3ZjLnVwZGF0ZVVzZXIoeyAuLi4kc2NvcGUuY3VycmVudFVzZXIsIGZsYWdzOiAkc2NvcGUudXNlckZsYWdzLm1hcCgoeyBmbGFnIH0pID0+IGZsYWcpIH0pLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS4kZW1pdChcInVwZGF0ZVwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmxvYWRDb3VudHJpZXMgPSBmdW5jdGlvbiAoJHF1ZXJ5KSB7XHJcbiAgICByZXR1cm4gY291bnRyaWVzLmZpbHRlcihmdW5jdGlvbiAoY291bnRyeSkge1xyXG4gICAgICByZXR1cm4gY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigkcXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTE7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgKCkgPT4ge1xyXG4gICAgdXBkYXRlVXNlckZsYWdzKCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1NraWxsc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZFNraWxsID0gMDtcclxuICAkc2NvcGUuc2tpbGxzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICRzY29wZS5wcm9qZWN0cyA9IFtdO1xyXG5cclxuICAkc2NvcGUubGFiZWxzID0gW1wiRG93bmxvYWQgU2FsZXNcIiwgXCJJbi1TdG9yZSBTYWxlc1wiLCBcIk1haWwtT3JkZXIgU2FsZXNcIl07XHJcbiAgJHNjb3BlLmRhdGEgPSBbMzAwLCA1MDAsIDEwMF07XHJcblxyXG4gICQuZ2V0SlNPTignL2V4cGVyaWVuY2UuanNvbicsIGZ1bmN0aW9uKCBkYXRhICkge1xyXG4gICAgJHNjb3BlLnByb2plY3RzID0gZGF0YS5yZWR1Y2UoKHByb2plY3RzLCBlbXBsb3llcikgPT4ge1xyXG4gICAgICBpZiAoZW1wbG95ZXIucHJvamVjdHMpIHJldHVybiBlbXBsb3llci5wcm9qZWN0cy5jb25jYXQocHJvamVjdHMpO1xyXG4gICAgICBlbHNlIHJldHVybiBwcm9qZWN0cztcclxuICAgIH0sIHt9KTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmZpbHRlcmVkUHJvamVjdHMgPSAoKSA9PiAkc2NvcGUucHJvamVjdHNcclxuICAgIC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3Quc2tpbGxzICYmIHByb2plY3Quc2tpbGxzLmluY2x1ZGVzKCRzY29wZS5zZWxlY3RlZFNraWxsLmNvZGUpKVxyXG5cclxuICAkLmdldEpTT04oJy9za2lsbHMuanNvbicsIGZ1bmN0aW9uKCBkYXRhICkge1xyXG5cclxuICAgIGNvbnN0IHNraWxscyA9IGRhdGFcclxuICAgIC5maWx0ZXIoKHNraWxsKSA9PiBza2lsbC5lbmFibGVkKVxyXG5cclxuICAgICRzY29wZS5jYXRlZ29yaWVzID0gc2tpbGxzXHJcbiAgICAucmVkdWNlKGZ1bmN0aW9uKGNhdGVnb3JpZXMsIHNraWxsKSB7XHJcbiAgICAgIGlmICghY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0pIHtcclxuICAgICAgICBjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XSA9IFtza2lsbF1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XS5wdXNoKHNraWxsKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzO1xyXG4gICAgfSwge30pO1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZFNraWxsID0gZnVuY3Rpb24gKHNraWxsKSB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsID0gc2tpbGw7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsLmNoYXJ0T3B0aW9ucyA9IHtcclxuICAgICAgICBjdXRvdXRQZXJjZW50YWdlIDogODAsXHJcbiAgICAgICAgY2lyY3VtZmVyZW5jZTogMiAqIE1hdGguUEksXHJcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsLmNoYXJ0U3R5bGUgPSB7XHJcbiAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKC9za2lsbHMvJyArICRzY29wZS5zZWxlY3RlZFNraWxsLmltYWdlICsgJyknLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnNjAlJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICc1MCUgNTAlJ1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCgkc2NvcGUuc2tpbGxzWzBdKTtcclxuXHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJHNjZSwgJGxvY2F0aW9uLCBUZW5UaGluZ3NTdmMpIHtcclxuICAgIGxldCBwYWdlID0gMTtcclxuICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlYXJjaCA9IFwiXCI7XHJcbiAgICAkc2NvcGUuc2VhcmNoRmllbGQgPSBcImFsbFwiO1xyXG4gICAgJHNjb3BlLm5ld0l0ZW0gPSB7fTtcclxuICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHt9O1xyXG4gICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBcIkVOXCI7XHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9IFtdO1xyXG4gICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9IFtdO1xyXG4gICAgJHNjb3BlLmNvbmZpcm1lZCA9IGZhbHNlO1xyXG4gICAgbGV0IGV4aGF1c3RlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IG9iamVjdENhdGVnb3JpZXMgPSBbXCJjdWx0dXJlXCIsIFwibmF0dXJlXCIsIFwibWlzY1wiLCBcInNvY2lldHlcIiwgXCJzcG9ydHNcIl07XHJcbiAgICAkc2NvcGUuYmx1cmJUeXBlcyA9IFtcclxuICAgICAgeyBhcGk6IFwibW92aWVzXCIsIGNhdGVnb3JpZXM6IFtcIm1vdmllc1wiXSwgdGV4dDogXCJHZXQgbW92aWUgcG9zdGVyc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcInR2XCIsIGNhdGVnb3JpZXM6IFtcInRlbGV2aXNpb25cIl0sIHRleHQ6IFwiR2V0IHR2IHBvc3RlcnNcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJhY3RvcnNcIiwgY2F0ZWdvcmllczogW1wibW92aWVzXCIsIFwidGVsZXZpc2lvblwiXSwgdGV4dDogXCJHZXQgYWN0b3IgcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcImJvb2tzXCIsIGNhdGVnb3JpZXM6IFtcImxpdGVyYXR1cmVcIl0sIHRleHQ6IFwiR2V0IGJvb2sgY292ZXJzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwibXVzaWN2aWRlb3NcIiwgY2F0ZWdvcmllczogW1wibXVzaWNcIl0sIHRleHQ6IFwiR2V0IG11c2ljIHZpZGVvc1wiLCBhZG1pbk9ubHk6IHRydWUgfSxcclxuICAgICAgeyBhcGk6IFwidW5zcGxhc2hcIiwgY2F0ZWdvcmllczogb2JqZWN0Q2F0ZWdvcmllcywgdGV4dDogXCJHZXQgVW5zcGxhc2ggcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcInBleGVsc1wiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBQZXhlbHMgcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcIndpa2lcIiwgY2F0ZWdvcmllczogb2JqZWN0Q2F0ZWdvcmllcywgdGV4dDogXCJHZXQgV2lraSBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgIF07XHJcblxyXG4gICAgJHNjb3BlLmhhdmVDb21tb25JdGVtcyA9IChhcnIxLCBhcnIyKSA9PiB7XHJcbiAgICAgIHJldHVybiBhcnIxPy5zb21lKChpdGVtKSA9PiBhcnIyLmluY2x1ZGVzKGl0ZW0pKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIC8vIFRhYlxyXG4gICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuY3JlYXRlVmFsdWUoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoJChcIiNuZXctdmFsdWVcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgJChcIiNuZXctYmx1cmJcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIH1cclxuICAgICAgLy8gdXNlIGUua2V5Q29kZVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWRkTGlzdCA9ICgpID0+IHtcclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgXCJuZXdcIik7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBjcmVhdG9yOiAkc2NvcGUuY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgdmFsdWVzOiBbXSxcclxuICAgICAgICBhbnN3ZXJzOiAwLFxyXG4gICAgICAgIGlzRHluYW1pYzogdHJ1ZSxcclxuICAgICAgICBjYXRlZ29yeTogXCJcIixcclxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgICBsYW5ndWFnZTogJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UsXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWFyY2ggPSAkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoO1xyXG4gICAgICBpZiAobGlzdCkge1xyXG4gICAgICAgIGlmIChsaXN0Ll9pZCA9PT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgJHNjb3BlLmFkZExpc3QoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3QobGlzdClcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gJHNjb3BlLnNlbGVjdGVkTGlzdC5sYW5ndWFnZTtcclxuICAgICAgICAgICAgICAkc2NvcGUucmVhZE9ubHkgPVxyXG4gICAgICAgICAgICAgICAgISRzY29wZS5zZWxlY3RlZExpc3QgfHxcclxuICAgICAgICAgICAgICAgICghJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluICYmXHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY3JlYXRvci5faWQgIT09ICRzY29wZS5jdXJyZW50VXNlci5faWQgJiZcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldExhbmd1YWdlRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzZXRDYXRlZ29yeUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0ge307XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRGaWx0ZXJDb3VudCA9ICgpID0+XHJcbiAgICAgIE9iamVjdC52YWx1ZXMoJHNjb3BlLmxhbmd1YWdlRmlsdGVyKS5sZW5ndGggKyBPYmplY3QudmFsdWVzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikubGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmN1cnJlbnRVc2VyKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogbGFuZ3VhZ2VzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCk7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZXMgPSBsYW5ndWFnZXM7XHJcbiAgICAgIHJlc2V0TGFuZ3VhZ2VGaWx0ZXIoKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBjYXRlZ29yaWVzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpO1xyXG4gICAgICByZXNldENhdGVnb3J5RmlsdGVyKCk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogbGFuZ3VhZ2VTdGF0cyB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldExpc3RMYW5ndWFnZVN0YXRzKCk7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZVN0YXRzID0gbGFuZ3VhZ2VTdGF0cy5yZWR1Y2UoKHJlc3VsdCwgeyBfaWQsIGNvdW50IH0pID0+IHtcclxuICAgICAgICByZXN1bHRbX2lkLmxhbmd1YWdlXSA9IChyZXN1bHRbX2lkLmxhbmd1YWdlXSB8fCAwKSArIGNvdW50O1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBjYXRlZ29yeVN0YXRzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMoKTtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSBjYXRlZ29yeVN0YXRzLnJlZHVjZSgocmVzdWx0LCB7IF9pZCwgY291bnQgfSkgPT4ge1xyXG4gICAgICAgIHJlc3VsdFtfaWRdID0gY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSwge30pO1xyXG4gICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QpIHtcclxuICAgICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KHsgX2lkOiAkbG9jYXRpb24uc2VhcmNoKCkubGlzdCB9KTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuc2VhcmNoID0gJGxvY2F0aW9uLnNlYXJjaCgpLnNlYXJjaCB8fCBcIlwiO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaExpc3RzID0gYXN5bmMgKHZpZXdWYWx1ZSkgPT4ge1xyXG4gICAgICBpZiAodmlld1ZhbHVlLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuc2VhcmNoTGlzdHModmlld1ZhbHVlKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmhpZ2hsaWdodGVkU2VhcmNoVGV4dCA9ICh0ZXh0KSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuc2VhcmNoKSB7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGAoJHskc2NvcGUuc2VhcmNofSlgLCBcImdpXCIpO1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UocmVnZXgsIFwiPHNwYW4gY2xhc3M9J2hpZ2hsaWdodCc+JDE8L3NwYW4+XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS52YWx1ZU9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJ2YWx1ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiAkbG9jYXRpb24uc2VhcmNoKCkuc29ydCB8fCBcImRhdGVcIixcclxuICAgICAgZGlyZWN0aW9uOiAkbG9jYXRpb24uc2VhcmNoKCkub3JkZXIgPyAkbG9jYXRpb24uc2VhcmNoKCkub3JkZXIgPT09IFwiZGVzY1wiIDogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyQnkgPSAoZmllbGQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5vcmRlci5maWVsZCA9PT0gZmllbGQpIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIuZGlyZWN0aW9uID0gISRzY29wZS5vcmRlci5kaXJlY3Rpb247XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgZGlyZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJzb3J0XCIsIGZpZWxkKTtcclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcIm9yZGVyXCIsICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPyBcImRlc2NcIiA6IFwiYXNjXCIpO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldE1vcmVMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5saXN0cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgZ2V0TGlzdHMoKS50aGVuKChsaXN0cykgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9ICRzY29wZS5saXN0cy5jb25jYXQobGlzdHMpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExpc3RzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGlzdHMgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICBwYWdlID0gMTtcclxuICAgICAgZXhoYXVzdGVkID0gZmFsc2U7XHJcbiAgICAgIGdldExpc3RzKCkudGhlbigobGlzdHMpID0+IHtcclxuICAgICAgICAkc2NvcGUubGlzdHMgPSBsaXN0cztcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPT09IHRydWUpIHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPSAhJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGV0ZSAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV07XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeUZpbHRlciA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSAhJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWxldGUgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUNhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKTtcclxuICAgICAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9XHJcbiAgICAgICAgY2F0ZWdvcmllcy5sZW5ndGggPT09IGNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSkubGVuZ3RoO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSAkc2NvcGUuY2F0ZWdvcmllcy5yZWR1Y2UoKGZpbHRlciwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICBmaWx0ZXJbY2F0ZWdvcnldID0gIWFsbENhdGVnb3JpZXM7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgICAgfSwge30pO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldENhdGVnb3J5TGFiZWwgPSAoY2F0ZWdvcmllcykgPT4ge1xyXG4gICAgICBpZiAoIWNhdGVnb3JpZXMgfHwgY2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHJldHVybiBcIlwiO1xyXG4gICAgICBjb25zdCBtYWluQ2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4gIWNhdGVnb3J5LmluY2x1ZGVzKFwiLlwiKSk7XHJcbiAgICAgIHJldHVybiBtYWluQ2F0ZWdvcmllc1xyXG4gICAgICAgIC5zb3J0KClcclxuICAgICAgICAubWFwKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc3ViY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXNcclxuICAgICAgICAgICAgLmZpbHRlcigoc3ViY2F0ZWdvcnkpID0+IHN1YmNhdGVnb3J5LnN0YXJ0c1dpdGgoY2F0ZWdvcnkpICYmIHN1YmNhdGVnb3J5ICE9PSBjYXRlZ29yeSlcclxuICAgICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgICAoc3ViY2F0ZWdvcnkpID0+XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2F0ZWdvcmllc1xyXG4gICAgICAgICAgICAgICAgICAuZmluZCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gY2F0ZWdvcnkpXHJcbiAgICAgICAgICAgICAgICAgIC5zdWJjYXRlZ29yaWVzLmZpbmQoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IHN1YmNhdGVnb3J5KT8ubGFiZWwsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcy5maW5kKCh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBjYXRlZ29yeSkubGFiZWwgK1xyXG4gICAgICAgICAgICAoc3ViY2F0ZWdvcmllcy5sZW5ndGggPiAwID8gXCIgKFwiICsgc3ViY2F0ZWdvcmllcy5zb3J0KCkuam9pbihcIiwgXCIpICsgXCIpXCIgOiBcIlwiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5qb2luKFwiLCBcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldExpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxvYWRpbmcgfHwgZXhoYXVzdGVkKSByZXR1cm4gW107XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2ggIT09ICRzY29wZS5zZWFyY2gpIHtcclxuICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwic2VhcmNoXCIsICRzY29wZS5zZWFyY2ggPyAkc2NvcGUuc2VhcmNoIDogbnVsbCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdHMoe1xyXG4gICAgICAgIHBhZ2UsXHJcbiAgICAgICAgc29ydEJ5OiAkc2NvcGUub3JkZXIuZmllbGQsXHJcbiAgICAgICAgb3JkZXJCeTogJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA/IC0xIDogMSxcclxuICAgICAgICBsaW1pdDogMTAwLFxyXG4gICAgICAgIC4uLigkc2NvcGUuc2VhcmNoRmllbGQgPT09IFwiYWxsXCIgPyB7IHNlYXJjaDogJHNjb3BlLnNlYXJjaCB9IDoge30pLFxyXG4gICAgICAgIC4uLigkc2NvcGUuc2VhcmNoRmllbGQgPT09IFwibmFtZVwiID8geyBuYW1lOiAkc2NvcGUuc2VhcmNoIH0gOiB7fSksXHJcbiAgICAgICAgbGFuZ3VhZ2U6IE9iamVjdC5rZXlzKCRzY29wZS5sYW5ndWFnZUZpbHRlcikuZmlsdGVyKChsYW5ndWFnZSkgPT4gJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlXSA9PT0gdHJ1ZSksXHJcbiAgICAgICAgY2F0ZWdvcmllczogT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKS5maWx0ZXIoKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID09PSB0cnVlKSxcclxuICAgICAgICBsYW5ndWFnZU5vdDogT2JqZWN0LmtleXMoJHNjb3BlLmxhbmd1YWdlRmlsdGVyKS5maWx0ZXIoKGxhbmd1YWdlKSA9PiAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2VdID09PSBmYWxzZSksXHJcbiAgICAgICAgY2F0ZWdvcmllc05vdDogT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKS5maWx0ZXIoXHJcbiAgICAgICAgICAoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPT09IGZhbHNlLFxyXG4gICAgICAgICksXHJcbiAgICAgIH0pO1xyXG4gICAgICAkc2NvcGUuY291bnQgPSBkYXRhLmNvdW50O1xyXG4gICAgICBpZiAoZGF0YS5yZXN1bHQubGVuZ3RoIDwgMTAwKSBleGhhdXN0ZWQgPSB0cnVlO1xyXG4gICAgICBlbHNlIHBhZ2UgPSBkYXRhLm5leHRQYWdlO1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhgUGFnZSAke3BhZ2V9IGxvYWRlZCwgJHtkYXRhLnJlc3VsdC5sZW5ndGh9IGl0ZW1zYCk7XHJcbiAgICAgIHJldHVybiBkYXRhLnJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExpc3ROYW1lID0gKGxpc3RJZCkgPT4gJHNjb3BlLmxpc3RzLmZpbmQoKHsgX2lkIH0pID0+IF9pZCA9PT0gbGlzdElkKT8ubmFtZTtcclxuXHJcbiAgICAkc2NvcGUudXBkYXRlVmFsdWUgPSBhc3luYyAoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoIWl0ZW0udmFsdWUpIHtcclxuICAgICAgICAkc2NvcGUuZGVsZXRlVmFsdWUoaXRlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW1SZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy51cGRhdGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgaXRlbSk7XHJcbiAgICAgICAgaXRlbS5ibHVyYlR5cGUgPSB1cGRhdGVkSXRlbVJlc3BvbnNlLmRhdGEuYmx1cmJUeXBlO1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlVmFsdWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLm5ld0l0ZW0udmFsdWUpIHJldHVybjtcclxuICAgICAgaWYgKCRzY29wZS5oYXNEdXBsaWNhdGUoKSkge1xyXG4gICAgICAgIHJldHVybiBhbGVydChgJHskc2NvcGUubmV3SXRlbS52YWx1ZX0gaXMgYWxyZWFkeSBpbiB0aGUgbGlzdGApO1xyXG4gICAgICB9IGVsc2UgaWYgKCEkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnB1c2goeyAuLi4kc2NvcGUubmV3SXRlbSB9KTtcclxuICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMubGVuZ3RoID49IDEwKSB7XHJcbiAgICAgICAgICBhd2FpdCAkc2NvcGUudXBzZXJ0TGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlZEl0ZW1SZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5jcmVhdGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgJHNjb3BlLm5ld0l0ZW0pO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnB1c2goY3JlYXRlZEl0ZW1SZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUubmV3SXRlbS52YWx1ZSk7XHJcbiAgICAgICAgJHNjb3BlLnRvYXN0KGBcIiR7JHNjb3BlLm5ld0l0ZW0udmFsdWV9XCIgYWRkZWRgKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICRzY29wZS5uZXdJdGVtLmJsdXJiID0gXCJcIjtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgJChcIiNuZXctdmFsdWVcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlVmFsdWUgPSAoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZVRvRGVsZXRlID0gaXRlbS52YWx1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKS50aGVuKCgpID0+IHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyA9ICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLl9pZCAhPT0gaXRlbS5faWQpO1xyXG4gICAgICAgICRzY29wZS50b2FzdChgXCIke3ZhbHVlVG9EZWxldGV9XCIgcmVtb3ZlZGApO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwZGF0ZUxpc3QgPSAobGlzdCwgdXBkYXRlcykgPT4ge1xyXG4gICAgICBpZiAobGlzdC5faWQgJiYgbGlzdC5faWQgIT09IFwibmV3XCIpIHtcclxuICAgICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAuLi51cGRhdGVzLFxyXG4gICAgICAgICAgX2lkOiBsaXN0Ll9pZCxcclxuICAgICAgICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgY29uc3QgbGlzdEluZGV4ID0gJHNjb3BlLmxpc3RzLmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5faWQgPT09IGRhdGEuX2lkKTtcclxuICAgICAgICAgICRzY29wZS5saXN0c1tsaXN0SW5kZXhdID0gZGF0YTtcclxuICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudXBzZXJ0TGlzdCA9IChsaXN0LCB1cGRhdGVzKSA9PiB7XHJcbiAgICAgICRzY29wZS5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAobGlzdC52YWx1ZXMubGVuZ3RoID49IDEwICYmIGxpc3QubmFtZSAmJiBsaXN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmIChsaXN0Ll9pZCAmJiBsaXN0Ll9pZCAhPT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgbGV0IGNoYW5nZXMgPSB1cGRhdGVzID8gdXBkYXRlcyA6IGxpc3Q7XHJcbiAgICAgICAgICBkZWxldGUgY2hhbmdlcy5faWQ7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAgIC4uLmNoYW5nZXMsXHJcbiAgICAgICAgICAgIF9pZDogbGlzdC5faWQsXHJcbiAgICAgICAgICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICRzY29wZS5saXN0c1skc2NvcGUubGlzdHMuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0Ll9pZCA9PT0gZGF0YS5faWQpXSA9IGRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5jcmVhdGVMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgJHNjb3BlLnNlbGVjdGVkTGlzdCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0ID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuX2lkID0gZGF0YS5faWQ7XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICRzY29wZS50b2FzdChgXCIke2RhdGEubmFtZX1cIiBjcmVhdGVkYCk7XHJcbiAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbigkc2NvcGUuc2VsZWN0ZWRMaXN0LCB1cGRhdGVzKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICghbGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMobGlzdC5faWQpKSB7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9IFtsaXN0Ll9pZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjbW9kYWwtZGVsZXRlLWxpc3RzXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICQoXCIjbW9kYWwtZGVsZXRlLWxpc3RzXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNvbmZpcm1NZXJnZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5tZXJnZUxpc3RzKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMpO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICRzY29wZS50b2FzdChcIk1lcmdlZFwiKTtcclxuICAgICAgJChcIiNtb2RhbC1tZXJnZS1saXN0c1wiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jb25maXJtRGVsZXRlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgbGlzdElkIG9mICRzY29wZS5saXN0SWRzVG9EZWxldGUpIHtcclxuICAgICAgICBhd2FpdCBUZW5UaGluZ3NTdmMuZGVsZXRlTGlzdChsaXN0SWQpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJHNjb3BlLnRvYXN0KFwiTGlzdHMgZGVsZXRlZFwiKTtcclxuICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMubGVuZ3RoID09PSAkc2NvcGUubGlzdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSAkc2NvcGUubGlzdHMubWFwKCh7IF9pZCB9KSA9PiBfaWQpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gJHNjb3BlLmxpc3RzLmZpbHRlcigoeyBfaWQgfSkgPT4gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhfaWQpKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUhpZ2hsaWdodGVkTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmluY2x1ZGVzKGxpc3QuX2lkKSkge1xyXG4gICAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmZpbHRlcihcclxuICAgICAgICAgIChoaWdobGlnaHRlZExpc3RJZCkgPT4gaGlnaGxpZ2h0ZWRMaXN0SWQgIT09IGxpc3QuX2lkLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5wdXNoKGxpc3QuX2lkKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9ICRzY29wZS5saXN0cy5maWx0ZXIoKHsgX2lkIH0pID0+ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMoX2lkKSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZSA9IChsaXN0LCBsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBsaXN0Lmxhbmd1YWdlID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7IGxhbmd1YWdlOiBsYW5ndWFnZS5jb2RlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0RGlmZmljdWx0eSA9IChsaXN0LCBkaWZmaWN1bHR5KSA9PiB7XHJcbiAgICAgIGxpc3QuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHsgZGlmZmljdWx0eTogZGlmZmljdWx0eSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldEZyZXF1ZW5jeSA9IChsaXN0LCBmcmVxdWVuY3kpID0+IHtcclxuICAgICAgbGlzdC5mcmVxdWVuY3kgPSBmcmVxdWVuY3k7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHsgZnJlcXVlbmN5OiBmcmVxdWVuY3kgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFVwZGF0ZWRDYXRlZ29yaWVzID0gKGxpc3QsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGxldCBjYXRlZ29yaWVzID0gbGlzdC5jYXRlZ29yaWVzO1xyXG4gICAgICBpZiAoY2F0ZWdvcmllcy5zb21lKChsaXN0Q2F0ZWdvcnkpID0+IGxpc3RDYXRlZ29yeSA9PT0gY2F0ZWdvcnkpKSB7XHJcbiAgICAgICAgY2F0ZWdvcmllcyA9IGxpc3QuY2F0ZWdvcmllcy5maWx0ZXIoKGxpc3RDYXRlZ29yeSkgPT4gbGlzdENhdGVnb3J5ICE9PSBjYXRlZ29yeSk7XHJcbiAgICAgICAgaWYgKCFjYXRlZ29yeS5pbmNsdWRlcyhcIi5cIikgJiYgY2F0ZWdvcmllcy5zb21lKChsaXN0Q2F0ZWdvcnkpID0+IGxpc3RDYXRlZ29yeS5zdGFydHNXaXRoKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICAgIGNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmZpbHRlcigobGlzdENhdGVnb3J5KSA9PiAhbGlzdENhdGVnb3J5LnN0YXJ0c1dpdGgoY2F0ZWdvcnkpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgICBpZiAoY2F0ZWdvcnkuaW5jbHVkZXMoXCIuXCIpICYmICFjYXRlZ29yaWVzLmZpbmQoKGxpc3RDYXRlZ29yeSkgPT4gbGlzdENhdGVnb3J5ID09PSBjYXRlZ29yeS5zcGxpdChcIi5cIilbMF0pKSB7XHJcbiAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkuc3BsaXQoXCIuXCIpWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeSA9IChsaXN0LCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCB1cGRhdGVkQ2F0ZWdvcmllcyA9IGdldFVwZGF0ZWRDYXRlZ29yaWVzKGxpc3QsIGNhdGVnb3J5KTtcclxuICAgICAgaWYgKHVwZGF0ZWRDYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICRzY29wZS50b2FzdChgWW91IG11c3QgaGF2ZSBhdCBsZWFzdCAxIGNhdGVnb3J5IGZvciAke2xpc3QubmFtZX1gKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7IGNhdGVnb3JpZXM6IHVwZGF0ZWRDYXRlZ29yaWVzIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yaWVzID0gYXN5bmMgKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICRzY29wZS5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICBsZXQgbGlzdHNUb1VwZGF0ZSA9IFtdO1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMuZXZlcnkoKHsgY2F0ZWdvcmllcyB9KSA9PiBjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICBsaXN0c1RvVXBkYXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHM7XHJcbiAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMuc29tZSgoeyBjYXRlZ29yaWVzIH0pID0+IGNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSkge1xyXG4gICAgICAgIGxpc3RzVG9VcGRhdGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5maWx0ZXIoKHsgY2F0ZWdvcmllcyB9KSA9PiAhY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3RzVG9VcGRhdGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB1cGRhdGVkTGlzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICBsaXN0c1RvVXBkYXRlLm1hcCgobGlzdFRvVXBkYXRlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVkQ2F0ZWdvcmllcyA9IGdldFVwZGF0ZWRDYXRlZ29yaWVzKGxpc3RUb1VwZGF0ZSwgY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgaWYgKHVwZGF0ZWRDYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAkc2NvcGUudG9hc3QoYFlvdSBtdXN0IGhhdmUgYXQgbGVhc3QgMSBjYXRlZ29yeSBmb3IgJHtsaXN0VG9VcGRhdGUubmFtZX1gKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAgICAgX2lkOiBsaXN0VG9VcGRhdGUuX2lkLFxyXG4gICAgICAgICAgICAgIGNhdGVnb3JpZXM6IHVwZGF0ZWRDYXRlZ29yaWVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgKTtcclxuICAgICAgdXBkYXRlZExpc3RzLmZvckVhY2goKHVwZGF0ZWRMaXN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdEluZGV4ID0gJHNjb3BlLmxpc3RzLmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5faWQgPT09IHVwZGF0ZWRMaXN0Ll9pZCk7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzW2xpc3RJbmRleF0gPSB1cGRhdGVkTGlzdDtcclxuICAgICAgfSk7XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gJHNjb3BlLmxpc3RzLmZpbHRlcigoeyBfaWQgfSkgPT4gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhfaWQpKTtcclxuICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0dXMgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLmV2ZXJ5KCh7IGNhdGVnb3JpZXMgfSkgPT4gY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiY2hlY2tlZFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLnNvbWUoKHsgY2F0ZWdvcmllcyB9KSA9PiBjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICByZXR1cm4gXCJwYXJ0aWFsXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwidW5jaGVja2VkXCI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmhhc0R1cGxpY2F0ZSA9ICgpID0+XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgJiZcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgJiZcclxuICAgICAgXy5zb21lKFxyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgIChhbnN3ZXIpID0+IGFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCkgPT0gJHNjb3BlLm5ld0l0ZW0udmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpLFxyXG4gICAgICApO1xyXG5cclxuICAgICRzY29wZS5nZXRTZWxlY3RlZExpc3RzVGl0bGUgPSAoKSA9PiAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5tYXAoKGxpc3QpID0+IGxpc3QubmFtZSkuam9pbihcIiAvIFwiKTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Qmx1cmJzID0gKHR5cGUpID0+IHtcclxuICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Qmx1cmJzKCRzY29wZS5zZWxlY3RlZExpc3QsIHR5cGUpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUudG9hc3QoXCJCbHVyYnMgdXBkYXRlZFwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLnRvYXN0KFwiQmx1cmIgdXBkYXRlIGZhaWxlZFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldEVtYmVkVXJsID0gKHVybCkgPT4ge1xyXG4gICAgICBpZiAodXJsLmluY2x1ZGVzKFwieW91dHViZS5jb21cIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC9bPyZddj0oW14mXSspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHVybC5pbmNsdWRlcyhcInlvdXR1LmJlXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgveW91dHVcXC5iZVxcLyhbXiY/XSspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHVybC5pbmNsdWRlcyhcInZpbWVvLmNvbVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL3ZpbWVvXFwuY29tXFwvKFxcZCspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJvcGVuLnNwb3RpZnlcIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC90cmFja1xcLyhbXiY/XSspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2VtYmVkL3RyYWNrLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwodXJsKTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZXR1cm4gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH0/YXV0b3BsYXk9MWA7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCBnZXREYXRhKTtcclxuICB9KTtcclxuIiwiLypqc2xpbnQgZXN2ZXJzaW9uOiA2Ki9cclxuYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0FkbWluQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBUZW5UaGluZ3NTdmMsIFVzZXJTdmMpIHtcclxuICAgICRzY29wZS4kb24oXCJsb2dpblwiLCAoXykgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyQnkgPSAoZmllbGQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5vcmRlci5maWVsZCA9PT0gZmllbGQpIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIucmV2ZXJzZSA9ICEkc2NvcGUub3JkZXIucmV2ZXJzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRRdWV1ZSA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0UXVldWUoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5xdWV1ZSA9IHJlc3BvbnNlLmRhdGEucmVwbGFjZShcIi9uXCIsIFwiPGJyLz5cIik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmdldFF1ZXVlKCk7XHJcblxyXG4gICAgVGVuVGhpbmdzU3ZjLmdldFBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBnZXRVc2VycyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLmdldFVzZXJzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUudXNlcnMgPSByZXNwb25zZS5kYXRhLmZpbHRlcigodXNlcikgPT4gIXVzZXIuYWRtaW4pO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQmFuID0gKHVzZXIpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLnRvZ2dsZUJhbih1c2VyLl9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZVBhdXNlID0gKHVzZXIpID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLnRvZ2dsZVBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucGF1c2VkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUucGF1c2VkKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzR2FtZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlUGFyYW1zLCBUZW5UaGluZ3NTdmMsIFVzZXJTdmMpIHtcclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4pIHtcclxuICAgICAgICBjb25zdCB7IGRhdGE6IHVzZXJzIH0gPSBhd2FpdCBVc2VyU3ZjLmdldFVzZXJzKCk7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJzID0gdXNlcnMuZmlsdGVyKCh1c2VyKSA9PiAhdXNlci5hZG1pbik7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiBjYXRlZ29yaWVzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcclxuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLmdhbWUpIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5nZXRHYW1lKCRzdGF0ZVBhcmFtcy5nYW1lKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ2FtZSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5nYW1lKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnkgPSBhc3luYyAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhOiBkaXNhYmxlZENhdGVnb3JpZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy51cGRhdGVHYW1lQ2F0ZWdvcnkoJHN0YXRlUGFyYW1zLmdhbWUsIGNhdGVnb3J5KTtcclxuICAgICAgJHNjb3BlLmdhbWUuZGlzYWJsZWRDYXRlZ29yaWVzID0gZGlzYWJsZWRDYXRlZ29yaWVzO1xyXG4gICAgICBjb25zb2xlLmxvZyhkaXNhYmxlZENhdGVnb3JpZXMuZmluZCgoYykgPT4gYyA9PT0gY2F0ZWdvcnkpKTtcclxuICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgZ2V0RGF0YSk7XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NTdGF0c0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IFtdO1xyXG4gICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSB7IGxhYmVsczogW10sIGRhdGFzZXRzOiBbXSB9O1xyXG5cclxuICAgIGNvbnN0IGxpbmVDaGFydE9wdGlvbnMgPSB7XHJcbiAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgdGV4dDogXCJDaGFydC5qcyBMaW5lIENoYXJ0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY3VycmVudFVzZXIpIHJldHVybjtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBbXTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExhbmd1YWdlcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldFBsYXlTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeWVhcnMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgeWVhciB9KSA9PiB5ZWFyKSkuc29ydCgpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRocyA9IF8udGltZXMoMTIsIChpKSA9PiBpICsgMSk7XHJcbiAgICAgICAgJHNjb3BlLnBsYXlTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogbW9udGhzLFxyXG4gICAgICAgICAgc2VyaWVzOiB5ZWFycyxcclxuICAgICAgICAgIGRhdGE6IHllYXJzLm1hcCgoeWVhcikgPT5cclxuICAgICAgICAgICAgbW9udGhzLm1hcCgobW9udGgpID0+IGRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5tb250aCA9PT0gbW9udGggJiYgaXRlbS55ZWFyID09PSB5ZWFyKT8udW5pcXVlUGxheWVycyB8fCAwKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBvcHRpb25zOiBsaW5lQ2hhcnRPcHRpb25zLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQueWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBsYW5ndWFnZXMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSkpLnNvcnQoKTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogeWVhcnMsXHJcbiAgICAgICAgICBzZXJpZXM6IGxhbmd1YWdlcyxcclxuICAgICAgICAgIGRhdGE6IGxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlKSA9PlxyXG4gICAgICAgICAgICB5ZWFycy5tYXAoKHllYXIpID0+IGRhdGEuZmluZCgoeyBfaWQgfSkgPT4gX2lkLmxhbmd1YWdlID09PSBsYW5ndWFnZSAmJiBfaWQueWVhciA9PT0geWVhcik/LmNvdW50IHx8IDApLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIG9wdGlvbnM6IGxpbmVDaGFydE9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRHYW1lU3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQueWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBsYW5ndWFnZXMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSkpLnNvcnQoKTtcclxuICAgICAgICAkc2NvcGUuZ2FtZVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiB5ZWFycyxcclxuICAgICAgICAgIHNlcmllczogbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgZGF0YTogbGFuZ3VhZ2VzLm1hcCgobGFuZ3VhZ2UpID0+XHJcbiAgICAgICAgICAgIHllYXJzLm1hcCgoeWVhcikgPT4gZGF0YS5maW5kKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UgPT09IGxhbmd1YWdlICYmIF9pZC55ZWFyID09PSB5ZWFyKT8uY291bnQgfHwgMCksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgb3B0aW9uczogbGluZUNoYXJ0T3B0aW9ucyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IF8uc29ydEJ5KGRhdGEsICh7IGNvdW50IH0pID0+IC1jb3VudCk7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IHNvcnRlZERhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQpLFxyXG4gICAgICAgICAgZGF0YTogW3NvcnRlZERhdGEubWFwKCh7IGNvdW50IH0pID0+IGNvdW50KV0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCAoKSA9PiB7XHJcbiAgICAgIGdldERhdGEoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1dvcmtvdXRDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgJHNjb3BlLnRpbWVFeGVyY2lzaW5nID0gMzA7XHJcbiAgJHNjb3BlLnRpbWVSZXN0aW5nID0gMTA7XHJcbiAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuXHJcbiAgdmFyIHNvdW5kcyA9IHtcclxuICAgIG9uOiBuZXcgQXVkaW8oJ29uLndhdicpLFxyXG4gICAgb2ZmOiBuZXcgQXVkaW8oJ29mZi53YXYnKSxcclxuICAgIHN3aXRjaDogbmV3IEF1ZGlvKCdzd2l0Y2gud2F2JyksXHJcbiAgfTtcclxuXHJcblxyXG4gIHZhciBleGVyY2lzZXMgPSBbXHJcbiAgICB7bmFtZTogJ0p1bXBpbmcgSmFja3MnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdXYWxsIFNpdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1B1c2gtVXAnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdDcnVuY2gnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTdGVwLVVwJywgc3BsaXQ6IHRydWV9LFxyXG4gICAge25hbWU6ICdTcXVhdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1RyaWNlcHMgRGlwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUGxhbmsnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdIaWdoIEtuZWVzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnTHVuZ2UnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwIHdpdGggUm90YXRpb24nLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTaWRlIFBsYW5rJywgc3BsaXQ6IHRydWV9XHJcbiAgXTtcclxuXHJcbiAgdmFyIGV4ZXJjaXNpbmc7XHJcblxyXG4gICRzY29wZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChleGVyY2lzZXMubGVuZ3RoIC0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvICgkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3RpbmcpKSkgKyAnLycgKyBleGVyY2lzZXMubGVuZ3RoO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS53b3Jrb3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZXhjZXJjaXNlVGltZSA9ICRzY29wZS50aW1lRXhlcmNpc2luZyArICRzY29wZS50aW1lUmVzdGluZztcclxuICAgIGlmICghJHNjb3BlLnRpbWVSZW1haW5pbmcpIHtcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSBleGVyY2lzZXMubGVuZ3RoICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgZXhlcmNpc2luZyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS50aW1lUmVtYWluaW5nLS07XHJcbiAgICAgICAgaWYgKCRzY29wZS50aW1lUmVtYWluaW5nID09PSAwKSB7XHJcbiAgICAgICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJ0ZpbmlzaGVkISBDb25ncmF0cyEnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdXJyZW50RXhlcmNpc2UgPSBNYXRoLmZsb29yKCRzY29wZS50aW1lUmVtYWluaW5nIC8gZXhjZXJjaXNlVGltZSk7XHJcbiAgICAgICAgdmFyIHRpbWVyID0gJHNjb3BlLnRpbWVSZW1haW5pbmcgLSBjdXJyZW50RXhlcmNpc2UgKiBleGNlcmNpc2VUaW1lO1xyXG4gICAgICAgICRzY29wZS50aW1lciA9IHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nID8gdGltZXIgLSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgOiB0aW1lcjtcclxuICAgICAgICBpZiAodGltZXIgPiAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0gZXhlcmNpc2VzW2V4ZXJjaXNlcy5sZW5ndGggLSBjdXJyZW50RXhlcmNpc2UgLSAxXTtcclxuICAgICAgICBpZiAodGltZXIgPT09ICRzY29wZS50aW1lRXhlcmNpc2luZykge1xyXG4gICAgICAgICAgc291bmRzLm9uLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRpbWVyID09PSAwKSB7XHJcbiAgICAgICAgICBzb3VuZHMub2ZmLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRzY29wZS5leGVyY2lzZS5zcGxpdCAmJiB0aW1lciA9PT0gTWF0aC5mbG9vcigkc2NvcGUudGltZUV4ZXJjaXNpbmcgLyAyKSkge1xyXG4gICAgICAgICAgc291bmRzLnN3aXRjaC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAkc2NvcGUudGltZXIgPSAnJztcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJycsIHNwbGl0OiBmYWxzZX07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0NhdGVnb3JpZXNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VGFza3MgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nLCBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZFRhc2sgPSBmdW5jdGlvbiAoY2F0ZWdvcnksIHRhc2spIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5ICsgJy90YXNrcycsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICBzdmMuY2hvaWNlcyA9IGxpc3Q7XHJcbiAgICBzdmMucHJpb3JpdHlMaXN0ID0gW107XHJcbiAgICAvL01ha2UgYSBuZXcgY2hvaWNlIGxpc3RcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKHZhciBqID0gaSArIDE7IGogPCBsaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgc3ZjLnByaW9yaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgZmlyc3RDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaSA6IGpdLm5hbWUsXHJcbiAgICAgICAgICBzZWNvbmRDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaiA6IGldLm5hbWUsXHJcbiAgICAgICAgICBjaG9pY2U6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNodWZmbGUoc3ZjLnByaW9yaXR5TGlzdCk7XHJcbiAgICBmb3IgKGkgaW4gc3ZjLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBzdmMucHJpb3JpdHlMaXN0W2ldLmlkID0gaSArIDE7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHJldHVybiBzdmMucHJpb3JpdHlMaXN0O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcclxuICAgIHZhciBtID0gYXJyYXkubGVuZ3RoLCB0LCBpO1xyXG4gICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGXigKZcclxuICAgIHdoaWxlIChtKSB7XHJcbiAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudOKAplxyXG4gICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbS0tKTtcclxuICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAvL2FycmF5W21dLmZpcnN0Q2hvaWNlO1xyXG4gICAgICB0ID0gYXJyYXlbbV07XHJcbiAgICAgIGFycmF5W21dID0gYXJyYXlbaV07XHJcbiAgICAgIGFycmF5W2ldID0gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdFbWFpbFN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuc2VuZCA9IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZW1haWwnLCBlbWFpbCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiRmlsZVN2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFF1aXpGaWxlcyA9IGZ1bmN0aW9uIChxdWl6KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS9xdWl6emVzL1wiICsgcXVpeik7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnR2FtZVN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gICAgc3ZjLmdldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZ2FtZXMvJyArIGdhbWUgKyAnLycgKyB1c2VyICsgJy9oaWdoc2NvcmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLnNldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyLCBzY29yZSkge1xyXG4gICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9nYW1lcy8nICsgZ2FtZSArICcvJyArIHVzZXIgKyAnL2hpZ2hzY29yZScsIHtcclxuICAgICAgICBzY29yZTogc2NvcmVcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnTGFuZ3VhZ2VTdmMnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5sYW5ndWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkVOXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkVuZ2xpc2hcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWdiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIk5MXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIk5lZGVybGFuZHNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLW5sXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkZSXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkZyYW7Dp2Fpc1wiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tZnJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy50ZXh0ID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgc3ZjLnNlbGVjdGVkTGFuZ3VhZ2UgPSBzdmMubGFuZ3VhZ2VzWzBdO1xyXG5cclxuICBzdmMuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcclxuICAgIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICByZXR1cm4gbGFuZ3VhZ2U7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHN2Yy5zZWxlY3RlZExhbmd1YWdlO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZmV0Y2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJyk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQb3N0ID0gZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMvJyArIHBvc3QuX2lkKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJUZW5UaGluZ3NTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9ib3RzL3RlbnRoaW5ncy9xdWV1ZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0cyA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgIHZhciB1cmwgPVxyXG4gICAgICBgL2FwaS90ZW50aGluZ3MvbGlzdHM/YCArXHJcbiAgICAgIChvcHRpb25zLmxpbWl0ID8gYCZsaW1pdD0ke29wdGlvbnMubGltaXR9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMucGFnZSA/IGAmcGFnZT0ke29wdGlvbnMucGFnZX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zb3J0QnkgPyBgJnNvcnRfYnk9JHtvcHRpb25zLnNvcnRCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5vcmRlckJ5ID8gYCZvcmRlcl9ieT0ke29wdGlvbnMub3JkZXJCeX1gIDogXCJcIikgK1xyXG4gICAgICAvLyBgJmNyZWF0b3I9NWFlMTVmMTRiNWY3ODgzZmYwNDk3MzM5YCArXHJcbiAgICAgIChvcHRpb25zLmxhbmd1YWdlICYmIG9wdGlvbnMubGFuZ3VhZ2UubGVuZ3RoID4gMCA/IGAmbGFuZ3VhZ2U9JHtvcHRpb25zLmxhbmd1YWdlLmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLmNhdGVnb3JpZXMgJiYgb3B0aW9ucy5jYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyBgJmNhdGVnb3JpZXM9JHtvcHRpb25zLmNhdGVnb3JpZXMuam9pbihcIixcIil9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMubGFuZ3VhZ2VOb3QgJiYgb3B0aW9ucy5sYW5ndWFnZU5vdC5sZW5ndGggPiAwID8gYCYhbGFuZ3VhZ2U9JHtvcHRpb25zLmxhbmd1YWdlTm90LmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLmNhdGVnb3JpZXNOb3QgJiYgb3B0aW9ucy5jYXRlZ29yaWVzTm90Lmxlbmd0aCA+IDBcclxuICAgICAgICA/IGAmIWNhdGVnb3JpZXM9JHtvcHRpb25zLmNhdGVnb3JpZXNOb3Quam9pbihcIixcIil9YFxyXG4gICAgICAgIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zZWFyY2ggPyBgJnNlYXJjaD0ke29wdGlvbnMuc2VhcmNofWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLm5hbWUgPyBgJm5hbWU9JHtvcHRpb25zLm5hbWV9YCA6IFwiXCIpO1xyXG5cclxuICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2VhcmNoTGlzdHMgPSAobmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3Mvc2VhcmNoL2xpc3QtbmFtZXMvJHtuYW1lfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvY2F0ZWdvcmllc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9sYW5ndWFnZXNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnB1dChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQsIGxpc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGVMaXN0ID0gZnVuY3Rpb24gKHVzZXIsIGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHNcIiwgeyB1c2VyLCBsaXN0IH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5tZXJnZUxpc3RzID0gZnVuY3Rpb24gKGxpc3RzKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL21lcmdlXCIsIHsgbGlzdHM6IGxpc3RzIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5kZWxldGVMaXN0ID0gZnVuY3Rpb24gKGxpc3RJZCkge1xyXG4gICAgcmV0dXJuICRodHRwLmRlbGV0ZShcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdElkKTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucHV0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3ZhbHVlcy9cIiArIHZhbHVlLl9pZCwgdmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3ZhbHVlc1wiLCB2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmRlbGV0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLmRlbGV0ZShcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXMvXCIgKyB2YWx1ZS5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5yZXBvcnRMaXN0ID0gZnVuY3Rpb24gKHVzZXIsIGxpc3QpIHtcclxuICAgICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi9yZXBvcnQvXCIgKyB1c2VyLl9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3RDYXRlZ29yeVN0YXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL3N0YXRzL2NhdGVnb3JpZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3RMYW5ndWFnZVN0YXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL3N0YXRzL2xhbmd1YWdlc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UGxheVN0YXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL3N0YXRzL3BsYXlcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEdhbWVTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9nYW1lc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0Qmx1cmJzID0gZnVuY3Rpb24gKGxpc3QsIHR5cGUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9saXN0cy8ke2xpc3QuX2lkfS9ibHVyYnMvJHt0eXBlfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnRvZ2dsZVBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEdhbWUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2dhbWVzLyR7aWR9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUdhbWVDYXRlZ29yeSA9IGZ1bmN0aW9uIChpZCwgY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9nYW1lcy8ke2lkfS9jYXRlZ29yeS8ke2NhdGVnb3J5fWApO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiVXNlclN2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vyc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VXNlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9hbGxcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnRvZ2dsZUJhbiA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdXNlcnMvYmFuLyR7aWR9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNldFRva2VuID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IHRva2VuO1xyXG4gICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmF1dGhlbnRpY2F0ZSA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzL2F1dGhlbnRpY2F0ZVwiLCB7XHJcbiAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS50b2tlbiA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmxvZ2luID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL2xvZ2luXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICByZXR1cm4gc3ZjLnNldFRva2VuKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIuX2lkLCB7XHJcbiAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uICh1c2VyLCBwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL3ZlcmlmaWNhdGlvblwiLCB7XHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uICh1c2VyLCBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9wYXNzd29yZFwiLCB7XHJcbiAgICAgIG9sZFBhc3N3b3JkOiBvbGRQYXNzd29yZCxcclxuICAgICAgbmV3UGFzc3dvcmQ6IG5ld1Bhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXIsIG5ld1VzZXJuYW1lKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL3VzZXJuYW1lXCIsIHtcclxuICAgICAgICBuZXdVc2VybmFtZTogbmV3VXNlcm5hbWUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiWC1BdXRoXCJdID0gXCJcIjtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlVXNlciA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnNcIiwge1xyXG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUXVpekFuaW1hbHNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICAkc2NvcGUuYW5pbWFscyA9IFtdO1xyXG5cclxuICBGaWxlU3ZjLmdldFF1aXpGaWxlcyhcImFuaW1hbHNcIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5hbmltYWxzID0gXy5zaHVmZmxlKFxyXG4gICAgICByZXNwb25zZS5kYXRhLm1hcCgoYW5pbWFsKSA9PiAoe1xyXG4gICAgICAgIHNvdW5kOiBhbmltYWwsXHJcbiAgICAgICAgbmFtZTogYW5pbWFsLnN1YnN0cmluZygwLCBhbmltYWwuaW5kZXhPZihcIi5cIikpLnJlcGxhY2UoXCJfXCIsIFwiIFwiKS5jYXBpdGFsaXplKCksXHJcbiAgICAgIH0pKSxcclxuICAgICk7XHJcbiAgICBmb3IgKGxldCBhbmltYWwgb2YgJHNjb3BlLmFuaW1hbHMpIHtcclxuICAgICAgYW5pbWFsLmFuc3dlcnMgPSBfLnNodWZmbGUoW2FuaW1hbC5uYW1lLCAuLi5nZXRSYW5kb21BbmltYWxzKGFuaW1hbC5uYW1lKV0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZ3Vlc3MgPSAoYW5pbWFsLCBndWVzcykgPT4ge1xyXG4gICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UmFuZG9tQW5pbWFscyA9IChuYW1lKSA9PlxyXG4gICAgXy5zaHVmZmxlKCRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsKSA9PiBuYW1lICE9PSBhbmltYWwubmFtZSkubWFwKChhbmltYWwpID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgNSk7XHJcblxyXG4gICRzY29wZS5nZXRTY29yZSA9ICgpID0+XHJcbiAgICBgJHskc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAkc2NvcGUuaXNTY29yZVZpc2libGUgPSAoKSA9PiAkc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJRdWl6R29vZ2xlQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRRdWl6RmlsZXMoXCJnb29nbGVcIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlF1aXpMb2dvc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0UXVpekZpbGVzKFwibG9nb3NcIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlF1aXpNb3ZpZXNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldFF1aXpGaWxlcyhcIm1vdmllc1wiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUXVpelNrZWxldG9uc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gICRzY29wZS5hbmltYWxzID0gW107XHJcblxyXG4gIEZpbGVTdmMuZ2V0UXVpekZpbGVzKFwic2tlbGV0b25zXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShcclxuICAgICAgcmVzcG9uc2UuZGF0YS5tYXAoKGFuaW1hbCkgPT4gKHtcclxuICAgICAgICBpbWFnZTogYW5pbWFsLFxyXG4gICAgICAgIG5hbWU6IGFuaW1hbC5zdWJzdHJpbmcoMCwgYW5pbWFsLmluZGV4T2YoXCIuXCIpKS5yZXBsYWNlKFwiX1wiLCBcIiBcIikuY2FwaXRhbGl6ZSgpLFxyXG4gICAgICB9KSksXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgIGFuaW1hbC5hbnN3ZXJzID0gXy5zaHVmZmxlKFthbmltYWwubmFtZSwgLi4uZ2V0UmFuZG9tQW5pbWFscyhhbmltYWwubmFtZSldKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgIGFuaW1hbC5ndWVzcyA9IGd1ZXNzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSAobmFtZSkgPT5cclxuICAgIF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gbmFtZSAhPT0gYW5pbWFsLm5hbWUpLm1hcCgoYW5pbWFsKSA9PiBhbmltYWwubmFtZSkpLnNsaWNlKDAsIDEwKTtcclxuXHJcbiAgJHNjb3BlLmdldFNjb3JlID0gKCkgPT5cclxuICAgIGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsKSA9PiBhbmltYWwubmFtZSA9PT0gYW5pbWFsLmd1ZXNzKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWA7XHJcblxyXG4gICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsKSA9PiBhbmltYWwuZ3Vlc3MpLmxlbmd0aCA9PT0gJHNjb3BlLmFuaW1hbHMubGVuZ3RoO1xyXG59KTtcclxuIl19
