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
  $scope.lists = [], $scope.search = "", $scope.newItem = {}, $scope.languageFilter = {}, $scope.categoryFilter = {}, $scope.selectedList = void 0, $scope.selectedLanguage = "EN", $scope.highlightedListIds = [], $scope.listIdsToDelete = [], $scope.confirmed = !1;
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
        $scope.selectedList.values.push(createdItemResponse.data), toast(`"${$scope.newItem}" added`);
      } else $scope.selectedList.values.push({
        ...$scope.newItem
      }), $scope.selectedList.values.length >= 10 && (await $scope.upsertList($scope.selectedList));
      $scope.newItem.value = "", $scope.newItem.blurb = "", setTimeout(() => {
        $("#new-value").trigger("focus");
      }), $scope.$apply();
    }
  }, $scope.deleteValue = item => {
    TenThingsSvc.deleteListValue($scope.selectedList, item).then(response => {
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
          $scope.saving = !1;
          const listIndex = $scope.lists.findIndex(list => list._id === data._id);
          $scope.lists[listIndex] = data, $scope.selectedList = data;
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
    $scope.getLists(), $scope.setSelectedList(response.data), $scope.highlightedListIds = [], $scope.confirmed = !1, toast("Merged"), $("#modal-merge-lists").modal("hide");
  }, $scope.confirmDeleteLists = async () => {
    for (const listId of $scope.listIdsToDelete) await TenThingsSvc.deleteList(listId);
    $scope.getLists(), $scope.selectedList = null, $scope.listIdsToDelete = [], $scope.highlightedListIds = [], $scope.confirmed = !1, toast("Lists deleted"), $("#modal-delete-lists").modal("hide");
  }, $scope.toggleHighlightedList = list => {
    $scope.highlightedListIds.includes(list._id) ? $scope.highlightedListIds = $scope.highlightedListIds.filter(highlightedListId => highlightedListId !== list._id) : $scope.highlightedListIds.push(list._id);
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
  }, $scope.setCategory = (list, category) => {
    list.categories.some(listCategory => listCategory === category) ? (list.categories = list.categories.filter(listCategory => listCategory !== category), list.categories.some(listCategory => listCategory.startsWith(category)) && !category.includes(".") && (list.categories = list.categories.filter(listCategory => !listCategory.startsWith(category)))) : list.categories.push(category), $scope.upsertList(list, {
      categories: list.categories
    });
  }, $scope.hasDuplicate = () => $scope.selectedList && $scope.newItem.value && _.some($scope.selectedList.values, answer => answer.value.removeAllButLetters() == $scope.newItem.value.removeAllButLetters()), $scope.getBlurbs = type => {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJzZXJ2aWNlcy9jYXRlZ29yaWVzLnN2Yy5qcyIsInNlcnZpY2VzL2VtYWlsLnN2Yy5qcyIsInNlcnZpY2VzL2ZpbGUuc3ZjLmpzIiwic2VydmljZXMvZ2FtZS5zdmMuanMiLCJzZXJ2aWNlcy9sYW5ndWFnZS5zdmMuanMiLCJzZXJ2aWNlcy9wb3N0cy5zdmMuanMiLCJzZXJ2aWNlcy90ZW50aGluZ3Muc3ZjLmpzIiwic2VydmljZXMvdXNlci5zdmMuanMiLCJjb250cm9sbGVycy9hcHAuY3RybC5qcyIsImNvbnRyb2xsZXJzL2FzdGVyb2lkcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvYnViYmxlcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvY2hhcmFkZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3QuY3RybC5qcyIsImNvbnRyb2xsZXJzL2V4cGVyaWVuY2UuY3RybC5qcyIsImNvbnRyb2xsZXJzL2hvYmJpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xlbW1pbmdzLmN0cmwuanMiLCJjb250cm9sbGVycy9saXN0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbG9naW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3Bvc3RzLmN0cmwuanMiLCJjb250cm9sbGVycy9wcm9maWxlLmN0cmwuanMiLCJjb250cm9sbGVycy9za2lsbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvdGVudGhpbmdzYWRtaW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2dhbWUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc3N0YXRzLmN0cmwuanMiLCJjb250cm9sbGVycy93b3Jrb3V0LmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2FuaW1hbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvZ29vZ2xlLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2xvZ29zLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL21vdmllcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9za2VsZXRvbnMuY3RybC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRvbWFpbnMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0cmluZyIsInByb3RvdHlwZSIsInZhbHVlIiwicmVkdWNlIiwicmVzdWx0IiwibGV0dGVyIiwicmVwbGFjZSIsInRoaXMiLCJTUEVDSUFMX0NIQVJBQ1RFUlMiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZURpYWNyaXRpY3MiLCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyIsImV4dHJhIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInJlcGxhY2VBbGwiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidW5kZWZpbmVkIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsImRpcmVjdGl2ZSIsIiRkb2N1bWVudCIsInJlc3RyaWN0Iiwic2NvcGUiLCJjbGlja091dHNpZGUiLCJsaW5rIiwiZWwiLCJhdHRyIiwib24iLCJ0YXJnZXQiLCJjb250YWlucyIsIiRhcHBseSIsIiRldmFsIiwiJHN0YXRlIiwiJGNvbXBpbGUiLCIkaW50ZXJwb2xhdGUiLCJnZXRTdHlsZSIsInRlbXBsYXRlU3R5bGVVcmwiLCJzdHlsZSIsImhyZWYiLCJyZWwiLCJtYXRjaCIsImVsZW0iLCJ0ZW1wbGF0ZVN0eWxlcyIsImh0bWwiLCJzdGFydFN5bWJvbCIsImVuZFN5bWJvbCIsImFwcGVuZCIsIiRvbiIsImV2ZW50IiwidG9TdGF0ZSIsInRvUGFyYW1zIiwiZnJvbVN0YXRlIiwiZnJvbVBhcmFtcyIsInN0YXRlcyIsIm5hbWUiLCJwYXJlbnQiLCJnZXQiLCJ2aWV3cyIsIl8iLCJ2aWV3Iiwic3BsaXQiLCJmbGF0IiwiaW5jbHVkZXMiLCJyZXZlcnNlIiwiZ2V0U3R5bGVzIiwiJGh0dHAiLCJzdmMiLCJnZXRDYXRlZ29yaWVzIiwiZ2V0VGFza3MiLCJjYXRlZ29yeSIsImFkZENhdGVnb3J5IiwicG9zdCIsImFkZFRhc2siLCJ0YXNrIiwic2V0UHJpb3JpdHlMaXN0IiwibGlzdCIsImNob2ljZXMiLCJwcmlvcml0eUxpc3QiLCJqIiwicmFuZG9tIiwiTWF0aCIsInJvdW5kIiwiaWQiLCJmaXJzdENob2ljZSIsInNlY29uZENob2ljZSIsImNob2ljZSIsImFycmF5IiwidCIsIm0iLCJmbG9vciIsInNodWZmbGUiLCJnZXRQcmlvcml0eUxpc3QiLCJlbWFpbCIsImdldEltYWdlcyIsImZvbGRlciIsImdldFNvdW5kcyIsImdldEhpZ2hzY29yZSIsImdhbWUiLCJ1c2VyIiwic2V0SGlnaHNjb3JlIiwic2NvcmUiLCJsYW5ndWFnZXMiLCJjb2RlIiwiZmxhZyIsInRleHQiLCJzZWxlY3RlZExhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwiZmV0Y2giLCJjcmVhdGUiLCJnZXRQb3N0IiwiX2lkIiwiZ2V0UXVldWUiLCJnZXRMaXN0cyIsIm9wdGlvbnMiLCJsaW1pdCIsInBhZ2UiLCJzb3J0QnkiLCJvcmRlckJ5Iiwiam9pbiIsImNhdGVnb3JpZXMiLCJzZWFyY2giLCJzZWFyY2hMaXN0cyIsImdldExhbmd1YWdlcyIsImdldExpc3QiLCJ1cGRhdGVMaXN0IiwicHV0IiwiY3JlYXRlTGlzdCIsIm1lcmdlTGlzdHMiLCJsaXN0cyIsImRlbGV0ZUxpc3QiLCJsaXN0SWQiLCJkZWxldGUiLCJ1cGRhdGVMaXN0VmFsdWUiLCJjcmVhdGVMaXN0VmFsdWUiLCJkZWxldGVMaXN0VmFsdWUiLCJyZXBvcnRMaXN0IiwiZ2V0TGlzdENhdGVnb3J5U3RhdHMiLCJnZXRMaXN0TGFuZ3VhZ2VTdGF0cyIsImdldFBsYXlTdGF0cyIsImdldEdhbWVTdGF0cyIsImdldEJsdXJicyIsInR5cGUiLCJnZXRQYXVzZSIsInRvZ2dsZVBhdXNlIiwiZ2V0R2FtZSIsImdldFVzZXIiLCJnZXRVc2VycyIsInRvZ2dsZUJhbiIsInNldFRva2VuIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJhdXRoZW50aWNhdGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJsb2NhbFN0b3JhZ2UiLCJsb2dpbiIsInVwZGF0ZVVzZXIiLCJjaGVja1Bhc3N3b3JkIiwicGFzc3dvcmQiLCJjaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjaGFuZ2VVc2VybmFtZSIsIm5ld1VzZXJuYW1lIiwibG9nb3V0IiwiY2xlYXIiLCJjcmVhdGVVc2VyIiwidXNlcm5hbWUiLCIkc2NvcGUiLCJMYW5ndWFnZVN2YyIsIlVzZXJTdmMiLCIkIiwibG9hZCIsImZhZGVPdXQiLCJmYWRlSW4iLCJjbG9zZXN0IiwidG9nZ2xlQ2xhc3MiLCJjaGVja2VkIiwiZG9jdW1lbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0aGVtZUNvdW50ZXIiLCJ0b2RheSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJmbGlwVGhlbWUiLCJzaG93IiwiaGlkZSIsInNldFRpbWVvdXQiLCJnZXRKU09OIiwic2tpbGxzIiwiZmlsdGVyIiwic2tpbGwiLCJob2JiaWVzIiwiam9icyIsImpvYiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJjaGFyYWRlcyIsImdldFRpbWVTcGFuIiwic2VsZWN0TGFuZ3VhZ2UiLCJob3ZlcmRpdiIsImRpdmlkIiwibGVmdCIsImNsaWVudFgiLCJ0b3AiLCJjbGllbnRZIiwiZ2V0RWxlbWVudEJ5SWQiLCJjc3MiLCJ0b2dnbGUiLCJsb2dnZWRJbiIsImN1cnJlbnRVc2VyIiwiYmlydGhEYXRlIiwibG9hZGluZyIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJjYXRjaCIsImVycm9yIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCIkbG9jYXRpb24iLCJHYW1lU3ZjIiwiYW5ub3VuY2UiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhdGgiLCJhbGVydCIsImN0eCIsImdldENvbnRleHQiLCJmb250IiwiZmlsbFN0eWxlIiwidGV4dEFsaWduIiwic2hvdHMiLCJhc3Rlcm9pZHMiLCJwb3dlcnVwcyIsImV4cGxvc2lvbnMiLCJtYXAiLCJzcGFjZXBpY3MiLCJzcGFjZSIsInBvd2VydXBUeXBlcyIsImFubm91bmNlbWVudCIsImN5Y2xlIiwicm93cyIsImNvbHVtbnMiLCJzaXplIiwiaW1nIiwiSW1hZ2UiLCJhY3RpdmF0ZSIsInNwYWNlc2hpcCIsIm1heFNwZWVkIiwiY29vbGRvd24iLCJjb29sZG93blRpbWUiLCJyYW5nZSIsInNoaWVsZCIsImV4cGxvZGUiLCJzcGF3bkFzdGVyb2lkcyIsInBvd2VydXAiLCJzcmMiLCJleHBsb3Npb25JbWFnZSIsImV2YWx1YXRlS2V5cyIsInBsYXlpbmciLCJzaG9vdCIsInJvdGF0aW9uIiwic3BlZWQiLCJTcGFjZXNoaXAiLCJhdXRvU3Bhd24iLCJ3aWR0aCIsImhlaWdodCIsImNhbm5vbiIsIngiLCJ5IiwicG9zaXRpb24iLCJhbmdsZSIsIlNob3QiLCJtb3ZlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImZpbGwiLCJhc3Rlcm9pZCIsImhpdCIsImdhbWVPdmVyIiwiY29zIiwic2luIiwibGlmZXNwYW4iLCJBc3Rlcm9pZCIsImdldEVudHJ5UG9zaXRpb24iLCJyb3RhdGlvblNwZWVkIiwiRXhwbG9zaW9uIiwic2hvdCIsInBvaW50cyIsInNwYXduUG93ZXJ1cCIsIm9iamVjdCIsIlBvd2VydXAiLCJkZWxheSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJjb2x1bW4iLCJyb3ciLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiZ3JpZFgiLCJncmlkWSIsIm9iamVjdDEiLCJvYmplY3QyIiwia2V5cyIsImFtb3VudCIsImhpZ2hzY29yZSIsInJlc2l6ZUNhbnZhcyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlDb2RlIiwid2hpY2giLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3IiwiY2xlYXJSZWN0IiwiZ3JhZGllbnQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsInRhbGx5IiwiZmlsbFRleHQiLCJtZWFzdXJlVGV4dCIsImJhY2tncm91bmRJbWFnZSIsImJ1YmJsZXMiLCJjb2xvcnMiLCJCdWJibGUiLCJyYWRpdXMiLCJleHBhbmRpbmciLCJjaXJjdW1mZXJlbmNlIiwibWF4UmFkaXVzIiwidngiLCJ2eSIsImZpbHRlckJ1YmJsZXMiLCJidWJibGUiLCJzZWxlY3RXb3JkIiwid29yZCIsIkVtYWlsU3ZjIiwiY29udGFjdCIsInBob25lIiwiYWJvdXQiLCJtZXNzYWdlIiwic2VuZGluZyIsInNlbnQiLCJzdGF0dXMiLCJlcnIiLCJnZXRTa2lsbCIsInNraWxsQ29kZSIsIiR3aW5kb3ciLCJob2JieVNlbGVjdG9yVmlzaWJsZSIsInNlbGVjdGVkSG9iYnkiLCJzZWxlY3RIb2JieSIsImhvYmJ5Iiwic2hvd0hvYmJ5IiwiaW5kZXgiLCJpbWFnZXMiLCJMRUZUIiwiUklHSFQiLCJsZW1taW5nc0ltYWdlIiwiZGVjb3JJbWFnZSIsImxlbW1pbmdzIiwic3RhcnRlZCIsImFjdGlvbnMiLCJ3YWxrIiwic3RhcnQiLCJlbmQiLCJodWgiLCJmYWxsIiwiZmx5Iiwic3RvcCIsImNsaW1iIiwiYnVpbGQiLCJwdW5jaCIsImRpZyIsIkxlbW1pbmciLCJpbml0IiwiYWN0IiwiYWN0aW9uIiwiYW5pbWF0aW9uIiwic2NhbGUiLCJoYXRjaCIsIm9wZW4iLCJyZWN0IiwiQ2F0ZWdvcmllc1N2YyIsInNob3dDYXRlZ29yeSIsInRhc2tzIiwic2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2VsZWN0ZWRUYXNrcyIsInNlbGVjdGFibGVUYXNrcyIsImVudGVyZWRDYXRlZ29yeSIsIm5ld0NhdGVnb3J5IiwiZm91bmQiLCJuZXdUYXNrIiwic2VsZWN0VGFzayIsImVudGVyZWRUYXNrIiwicmVtb3ZlVGFzayIsInVuc2VsZWN0VGFzayIsInRhc2tMaXN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInN0YXJ0UHJpb3JpdGl6aW5nIiwiZ2V0UXVlc3Rpb25zIiwiY291bnRlciIsInVpIiwiZmlyZWJhc2V1aSIsIkF1dGhVSSIsInN0YXJ0VUkiLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzIiwiY3JlZGVudGlhbCIsInJlZGlyZWN0VXJsIiwiZ2V0SWRUb2tlbiIsImlkVG9rZW4iLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWxWZXJpZmllZCIsIiRlbWl0IiwibW9kYWwiLCJzaWduSW5GYWlsdXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjcmVkIiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJ1aVNob3duIiwiZGlzcGxheSIsInNpZ25JblN1Y2Nlc3NVcmwiLCJzaWduSW5PcHRpb25zIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiUFJPVklERVJfSUQiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsInNpZ25JbkZsb3ciLCJyZXNldCIsIiRmaWx0ZXIiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImJvZHkiLCJwb3N0cyIsInVuc2hpZnQiLCJjb3VudHJpZXMiLCJ0aWRiaXQiLCJkYXRlT3B0aW9ucyIsIm1heERhdGUiLCJtaW5EYXRlIiwiaW5pdERhdGUiLCJkYXRlcGlja2VyTW9kZSIsInVzZXJuYW1lVG9nZ2xlIiwicGFzc3dvcmRUb2dnbGUiLCJ0b2dnbGVVc2VybmFtZSIsInRvZ2dsZVBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwib3JpZ2luYWxCZyIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmbGFncyIsInVzZXJGbGFncyIsImxvYWRDb3VudHJpZXMiLCIkcXVlcnkiLCJjb3VudHJ5IiwiJHdhdGNoIiwic2VsZWN0ZWRTa2lsbCIsInNraWxsc1Zpc2libGUiLCJwcm9qZWN0cyIsImxhYmVscyIsImVtcGxveWVyIiwiY29uY2F0IiwiZmlsdGVyZWRQcm9qZWN0cyIsInByb2plY3QiLCJzZXRTZWxlY3RlZFNraWxsIiwiY2hhcnRPcHRpb25zIiwiY3V0b3V0UGVyY2VudGFnZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJ0b29sdGlwcyIsImNoYXJ0U3R5bGUiLCJpbWFnZSIsIiRzY2UiLCIkbWRUb2FzdCIsIlRlblRoaW5nc1N2YyIsIm5ld0l0ZW0iLCJsYW5ndWFnZUZpbHRlciIsImNhdGVnb3J5RmlsdGVyIiwic2VsZWN0ZWRMaXN0IiwiaGlnaGxpZ2h0ZWRMaXN0SWRzIiwibGlzdElkc1RvRGVsZXRlIiwiY29uZmlybWVkIiwiZXhoYXVzdGVkIiwidG9hc3QiLCJzaW1wbGUiLCJ0ZXh0Q29udGVudCIsImhpZGVEZWxheSIsIm9iamVjdENhdGVnb3JpZXMiLCJibHVyYlR5cGVzIiwiYXBpIiwiYWRtaW5Pbmx5IiwiaGF2ZUNvbW1vbkl0ZW1zIiwiYXJyMSIsImFycjIiLCJzb21lIiwia2V5RG93biIsImlzIiwiY3JlYXRlVmFsdWUiLCJ0cmlnZ2VyIiwiYWRkTGlzdCIsImNyZWF0b3IiLCJ2YWx1ZXMiLCJhbnN3ZXJzIiwiaXNEeW5hbWljIiwic2V0U2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRMaXN0IiwicmVhZE9ubHkiLCJhZG1pbiIsImFzeW5jIiwidmlld1ZhbHVlIiwiaGlnaGxpZ2h0ZWRTZWFyY2hUZXh0IiwicmVnZXgiLCJ2YWx1ZU9yZGVyIiwiZmllbGQiLCJvcmRlciIsImdldE1vcmVMaXN0cyIsInNldExhbmd1YWdlRmlsdGVyIiwic2V0Q2F0ZWdvcnlGaWx0ZXIiLCJ0b2dnbGVDYXRlZ29yeUZpbHRlciIsImFsbENhdGVnb3JpZXMiLCJnZXRDYXRlZ29yeUxhYmVsIiwic3ViY2F0ZWdvcmllcyIsInN1YmNhdGVnb3J5Iiwic3RhcnRzV2l0aCIsImxhYmVsIiwiY291bnQiLCJuZXh0UGFnZSIsImdldExpc3ROYW1lIiwidXBkYXRlVmFsdWUiLCJ1cGRhdGVkSXRlbVJlc3BvbnNlIiwiYmx1cmJUeXBlIiwiZGVsZXRlVmFsdWUiLCJoYXNEdXBsaWNhdGUiLCJjcmVhdGVkSXRlbVJlc3BvbnNlIiwidXBzZXJ0TGlzdCIsImJsdXJiIiwidXBkYXRlcyIsInNhdmluZyIsImxpc3RJbmRleCIsImZpbmRJbmRleCIsImNoYW5nZXMiLCJhc3NpZ24iLCJkZWxldGVMaXN0cyIsImNvbmZpcm1NZXJnZUxpc3RzIiwiY29uZmlybURlbGV0ZUxpc3RzIiwidG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0IiwiaGlnaGxpZ2h0ZWRMaXN0SWQiLCJzZXREaWZmaWN1bHR5IiwiZGlmZmljdWx0eSIsInNldEZyZXF1ZW5jeSIsImZyZXF1ZW5jeSIsInNldENhdGVnb3J5IiwibGlzdENhdGVnb3J5IiwiYW5zd2VyIiwicmVtb3ZlQWxsQnV0TGV0dGVycyIsImdldHRpbmdCbHVyYnMiLCJnZXRFbWJlZFVybCIsInZpZGVvSWQiLCJ0cmltIiwidHJ1c3RBc1Jlc291cmNlVXJsIiwibGFuZ3VhZ2VTdGF0cyIsImNhdGVnb3J5U3RhdHMiLCJxdWV1ZSIsInBhdXNlZCIsInVzZXJzIiwiJHN0YXRlUGFyYW1zIiwiZGF0YXNldHMiLCJsaW5lQ2hhcnRPcHRpb25zIiwicmVzcG9uc2l2ZSIsInBsdWdpbnMiLCJsZWdlbmQiLCJ0aXRsZSIsInllYXJzIiwidW5pcSIsIm1vbnRocyIsInRpbWVzIiwicGxheVN0YXRzIiwic2VyaWVzIiwibW9udGgiLCJ1bmlxdWVQbGF5ZXJzIiwiZ2FtZVN0YXRzIiwic29ydGVkRGF0YSIsInRpbWVSZW1haW5pbmciLCJ0aW1lRXhlcmNpc2luZyIsInRpbWVSZXN0aW5nIiwicmVzdCIsImV4ZXJjaXNpbmciLCJzb3VuZHMiLCJBdWRpbyIsIm9mZiIsInN3aXRjaCIsImV4ZXJjaXNlcyIsInByb2dyZXNzIiwid29ya291dCIsImV4Y2VyY2lzZVRpbWUiLCJjbGVhckludGVydmFsIiwidGltZXIiLCJleGVyY2lzZSIsInNldEludGVydmFsIiwiY3VycmVudEV4ZXJjaXNlIiwicGxheSIsIkZpbGVTdmMiLCJhbmltYWxzIiwiYW5pbWFsIiwic291bmQiLCJzdWJzdHJpbmciLCJjYXBpdGFsaXplIiwiZ2V0UmFuZG9tQW5pbWFscyIsImd1ZXNzIiwiZ2V0U2NvcmUiLCJpc1Njb3JlVmlzaWJsZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQUEsMkJBQUFBLEdBQUEsQ0FDQTtJQUNBQyxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQTtFQUdBQyxPQUFBQSxHQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxDQUFBO0FBR0FDLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsa0JBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFSLDJCQUFBQSxDQUFBUyxNQUFBQSxDQUFBLENBQUFDLE1BQUFB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QTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFlBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGFBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsUUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLFlBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxXQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsVUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsV0FBQTtJQUNBRSxVQUFBQSxFQUFBLGNBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE1BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLE9BQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsaUJBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsb0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGdCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxpQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxvQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsY0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGlCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxhQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsRUFHQUwsaUJBQUFBLENBQUFPLFNBQUFBLENBQUE7SUFDQUMsT0FBQUEsRUFBQUEsQ0FBQSxDQUFBO0lBQ0FDLFdBQUFBLEVBQUFBLENBQUE7RUFBQSxDQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUNwSUFmLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FlLE9BQUFBLENBQUEsY0FBQSxFQUFBLFVBQUFDLFVBQUFBLEVBQUFDLFFBQUFBLEVBQUFBO0VBU0EsSUFBQUMsVUFBQUE7SUFDQUMsT0FBQUEsR0FBQSxTQUFBQSxDQUFBLEVBQUE7TUFBQSxDQUNBRCxVQUFBQSxHQUFBLElBQUFFLFNBQUFBLENBVEEsUUFBQSxLQUFBQyxNQUFBQSxDQUFBQyxRQUFBQSxDQUFBQyxRQUFBQSxHQUNBLFFBQUEsR0FBQUYsTUFBQUEsQ0FBQUMsUUFBQUEsQ0FBQUUsSUFBQUEsR0FFQSxPQUFBLEdBQUFILE1BQUFBLENBQUFDLFFBQUFBLENBQUFFLElBQUFBLENBQUFBLEVBUUFDLE1BQUFBLEdBQUEsWUFBQTtRQUNBQyxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBLHFCQUFBLENBQ0E7TUFBQSxDQUFBLEVBRUFULFVBQUFBLENBQUFVLE9BQUFBLEdBQUEsVUFBQUMsQ0FBQUEsRUFBQUE7UUFDQUgsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQSxtQ0FBQSxDQUFBLEVBQ0FWLFFBQUFBLENBQUFFLE9BQUFBLEVBQUEsR0FBQSxDQUNBO01BQUEsQ0FBQSxFQUVBRCxVQUFBQSxDQUFBWSxPQUFBQSxHQUFBLFVBQUFELENBQUFBLEVBQUFBO1FBQ0FILE9BQUFBLENBQUFDLEdBQUFBLENBQUEsU0FBQSxHQUFBRSxDQUFBQSxHQUFBLFlBQUEsR0FBQVgsVUFBQUEsQ0FBQWEsVUFBQUEsQ0FDQTtNQUFBLENBQUEsRUFFQWIsVUFBQUEsQ0FBQWMsU0FBQUEsR0FBQSxVQUFBSCxDQUFBQSxFQUFBQTtRQUNBLElBQUFJLE9BQUFBLEdBQUFDLElBQUFBLENBQUFDLEtBQUFBLENBQUFOLENBQUFBLENBQUFPLElBQUFBLENBQUFBO1FBQ0FwQixVQUFBQSxDQUFBcUIsVUFBQUEsQ0FBQSxLQUFBLEdBQUFKLE9BQUFBLENBQUFLLEtBQUFBLEVBQUFMLE9BQUFBLENBQUFHLElBQUFBLENBQ0E7TUFBQSxDQUNBO0lBQUEsQ0FBQTtFQUVBdEUsSUFBQUEsQ0FBQXlFLElBQUFBLEdBQUEsVUFBQUQsS0FBQUEsRUFBQUYsSUFBQUEsRUFBQUE7SUFDQSxJQUFBSSxJQUFBQSxHQUFBTixJQUFBQSxDQUFBTyxTQUFBQSxDQUFBO01BQUFILEtBQUFBO01BQUFGO0lBQUFBLENBQUFBLENBQUFBO0lBQ0FsQixVQUFBQSxDQUFBcUIsSUFBQUEs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QUFBQSxHQUFBSixNQUFBQSxDQUFBSyxVQUFBQSxDQUFBLElBQUEsQ0FBQTtFQUNBLElBQUEsQ0FBQUQsR0FBQUEsRUFDQSxPQUFBUCxTQUFBQSxDQUFBSyxJQUFBQSxDQUFBLE9BQUEsQ0FBQTtFQUVBRSxHQUFBQSxDQUFBRSxJQUFBQSxHQUFBLG9CQUFBLEVBQ0FGLEdBQUFBLENBQUFHLFNBQUFBLEdBQUEsS0FBQSxFQUNBSCxHQUFBQSxDQUFBSSxTQUFBQSxHQUFBLFFBQUE7RUFDQSxJQUFBQyxLQUFBQSxHQUFBLENBQUEsQ0FBQTtFQUNBLE1BQUFDLFNBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFFBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFVBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLEdBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFNBQUFBLEdBQUEsRUFBQTtFQUNBLElBQUFDLEtBQUFBLEdBQUFySyxJQUFBQSxDQUFBUyxLQUFBQSxDQUFBVCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBcUssU0FBQUEsQ0FBQUE7RUFDQSxNQUFBRSxZQUFBQSxHQUFBLENBQ0E7SUFDQWhNLElBQUFBLEVBQUEsT0FBQTtJQUNBaU0sWUFBQUEsRUFBQSxhQUFBO0lBQ0FDLEtBQUFBLEVBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBO01BQ0FDLE9BQUFBLEVBQUEsQ0FBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtNQUNBelMsQ0FBQUEsRUFBQSxDQUFBO01BQ0FVLFNBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBO0lBRUFnUyxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO0lBQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7TUFDQUEsU0FBQUEsQ0FBQUMsUUFBQUEsSUFBQSxHQUNBO0lBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQTFNLElBQUFBLEVBQUEsVUFBQTtJQUNBaU0sWUFBQUEsRUFBQSxZQUFBO0lBQ0FDLEtBQUFBLEVBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBO01BQ0FDLE9BQUFBLEVBQUEsQ0FBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtNQUNBelMsQ0FBQUEsRUFBQSxDQUFBO01BQ0FVLFNBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBO0lBRUFnUyxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO0lBQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7TUFDQUEsU0FBQUEsQ0FBQUUsUUFBQUEsR0FBQSxDQUFBLEtBQ0FGLFNBQUFBLENBQUFHLFlBQUFBLElBQUEsQ0FBQSxDQUVBO0lBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQTVNLElBQUFBLEVBQUEsT0FBQTtJQUNBaU0sWUFBQUEsRUFBQSxnQkFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7TUFDQXpTLENBQUFBLEVBQUEsQ0FBQTtNQUNBVSxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBZ1MsR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO01BQ0FBLFNBQUFBLENBQUFJLEtBQUFBLElBQUEsQ0FDQTtJQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0E3TSxJQUFBQSxFQUFBLFFBQUE7SUFDQWlNLFlBQUFBLEVBQUEsUUFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7TUFDQXpTLENBQUFBLEVBQUEsQ0FBQTtNQUNBVSxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBZ1MsR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVB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UCxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQTNQLElBQUFBLENBQUFTLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQWtQLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxDQUFBLEVBRUFILFFBQUFBLENBQUFFLFlBQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsR0FDQTFQLElBQUFBLENBQUFTLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQWtQLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBM1AsSUFBQUEsQ0FBQVMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBa1AsS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0EzUCxJQUFBQSxDQUFBUyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFrUCxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLEtBQUEsRUFDQSxNQUFBLEdBQ0ExUCxJQUFBQSxDQUFBUyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFrUCxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQTNQLElBQUFBLENBQUFTLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQWtQLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBM1AsSUFBQUEsQ0FBQVMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBa1AsS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FDQSxNQUFBLEVBQ0EsTUFBQSxHQUNBMVAsSUFBQUEsQ0FBQVMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBa1AsS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0EzUCxJQUFBQSxDQUFBUyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUFrUCxLQUFB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VCxHQUFBQSxFQUFBO1FBQ0FKLEtBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0E5SCxPQUFBQSxFQUFBLENBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0ExTCxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBNlQsSUFBQUEsRUFBQTtRQUNBTCxLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBOUgsT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBMUwsT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQThULEtBQUFBLEVBQUE7UUFDQU4sS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQTlILE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTFMLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUErVCxLQUFBQSxFQUFBO1FBQ0FQLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0E5SCxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0ExTCxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBZ1UsS0FBQUEsRUFBQTtRQUNBUixLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBOUgsT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBMUwsT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7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LEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsYUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxxQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxVQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsV0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxnQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFdBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsT0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxlQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsd0JBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsVUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxZQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsY0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxVQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxPQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGtCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxpQ0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxrQ0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxlQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFFBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEseUJBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsdUNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsMEJBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsT0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxhQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsY0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxPQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsT0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxVQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsTUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxZQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsa0JBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxnQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxVQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLG9CQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsZ0JBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxPQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxNQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLDZCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGlDQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxPQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLHNEQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxlQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsT0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxXQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFdBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsbUJBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSw4Q0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxXQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE1BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsZUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFdBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsbUNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsVUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxXQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxhQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsZ0NBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsTUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSwyQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFFBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsT0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxPQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsVUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxVQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsdUJBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsd0NBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsb0JBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxnQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxZQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGtDQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsYUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxlQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFdBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFdBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsWUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLHNCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsNEJBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsWUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxrQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSw0Q0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxNQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsVUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxPQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLDBCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsWUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxZQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsV0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxVQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFFBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxVQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxlQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsZ0JBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxXQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGFBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxPQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsTUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxhQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE1BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxNQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGtCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGtCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGFBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsVUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLDJCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsYUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxxQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxVQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsVUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxPQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLG9CQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFFBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsY0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxpQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxZQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxXQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLDhDQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsd0JBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsVUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxjQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsYUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSx1QkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxhQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLDJCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLHNCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFdBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsMEJBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsTUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSw2QkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxNQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsWUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGFBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsY0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxxQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLDJCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLDhCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxzQ0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSwwQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsVUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxrQ0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxtQ0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSx5QkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxzQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxVQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7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LGFBQUFBLEdBQUEsQ0FBQSxFQUNBMWEsTUFBQUEsQ0FBQTJhLGNBQUFBLEdBQUEsRUFBQSxFQUNBM2EsTUFBQUEsQ0FBQTRhLFdBQUFBLEdBQUEsRUFBQSxFQUNBNWEsTUFBQUEsQ0FBQTZhLElBQUFBLEdBQUFBLENBQUEsQ0FBQTtFQUVBLElBc0JBQyxVQUFBQTtJQXRCQUMsTUFBQUEsR0FBQTtNQUNBaGtCLEVBQUFBLEVBQUEsSUFBQWlrQixLQUFBQSxDQUFBLFFBQUEsQ0FBQTtNQUNBQyxHQUFBQSxFQUFBLElBQUFELEtBQUFBLENBQUEsU0FBQSxDQUFBO01BQ0FFLE1BQUFBLEVBQUEsSUFBQUYsS0FBQUEsQ0FBQSxZQUFBO0lBQUEsQ0FBQTtJQUlBRyxTQUFBQSxHQUFBLENBQ0E7TUFBQXppQixJQUFBQSxFQUFBLGVBQUE7TUFBQU0sS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBTixJQUFBQSxFQUFBLFVBQUE7TUFBQU0sS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBTixJQUFBQSxFQUFBLFNBQUE7TUFBQU0sS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBTixJQUFBQSxFQUFBLFFBQUE7TUFBQU0sS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBTixJQUFBQSxFQUFBLFNBQUE7TUFBQU0sS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBTixJQUFBQSxFQUFBLE9BQUE7TUFBQU0sS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBTixJQUFBQSxFQUFBLGFBQUE7TUFBQU0sS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBTixJQUFBQSxFQUFBLE9BQUE7TUFBQU0sS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBTixJQUFBQSxFQUFBLFlBQUE7TUFBQU0sS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBTixJQUFBQSxFQUFBLE9BQUE7TUFBQU0s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QUEsQ0FBQXJqQixJQUFBQSxDQUFBQSxDQUFBQSxDQUFBeEcsS0FBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxDQUFBO0VBRUE4TixNQUFBQSxDQUFBcWMsUUFBQUEsR0FBQSxNQUFBLEdBQUFyYyxNQUFBQSxDQUFBOGIsT0FBQUEsQ0FBQXZhLE1BQUFBLENBQUF3YSxNQUFBQSxJQUFBQSxNQUFBQSxDQUFBcmpCLElBQUFBLEtBQUFxakIsTUFBQUEsQ0FBQUssS0FBQUEsQ0FBQUEsQ0FBQTdwQixNQUFBQSxJQUFBeU4sTUFBQUEsQ0FBQThiLE9BQUFBLENBQUF2cEIsTUFBQUEsRUFBQUEsRUFFQXlOLE1BQUFBLENBQUFzYyxjQUFBQSxHQUFBLE1BQUF0YyxNQUFBQSxDQUFBOGIsT0FBQUEsQ0FBQXZhLE1BQUFBLENBQUF3YSxNQUFBQSxJQUFBQSxNQUFBQSxDQUFBSyxLQUFBQSxDQUFBQSxDQUFBN3BCLE1BQUFBLEtBQUF5TixNQUFBQSxDQUFBOGIsT0FBQUEsQ0FBQXZwQixNQUNBO0FBQUEsQ0FBQSxDQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAgPSBbXHJcbiAge1xyXG4gICAgYmFzZTogXCJBXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDFcXHUyNEI2XFx1RkYyMVxcdTAwQzBcXHUwMEMxXFx1MDBDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHUwMEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHUwMEM0XFx1MDFERVxcdTFFQTJcXHUwMEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFBXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFFXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwQzZcXHUwMUZDXFx1MDFFMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQU9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOFxcdUE3M0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0MlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJDXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDNcXHUyNEI4XFx1RkYyM1xcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMEM3XFx1MUUwOFxcdTAxODdcXHUwMjNCXFx1QTczRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ0XFx1MjRCOVxcdUZGMjRcXHUxRTBBXFx1MDEwRVxcdTFFMENcXHUxRTEwXFx1MUUxMlxcdTFFMEVcXHUwMTEwXFx1MDE4QlxcdTAxOEFcXHUwMTg5XFx1QTc3OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMVxcdTAxQzRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjJcXHUwMUM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJFXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDVcXHUyNEJBXFx1RkYyNVxcdTAwQzhcXHUwMEM5XFx1MDBDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHUwMENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ2XFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0N1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJIXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJJXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDlcXHUyNEJFXFx1RkYyOVxcdTAwQ0NcXHUwMENEXFx1MDBDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHUwMENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJKXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEFcXHUyNEJGXFx1RkYyQVxcdTAxMzRcXHUwMjQ4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJLXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNENcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTEpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDREXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRFXFx1MjRDM1xcdUZGMkVcXHUwMUY4XFx1MDE0M1xcdTAwRDFcXHUxRTQ0XFx1MDE0N1xcdTFFNDZcXHUwMTQ1XFx1MUU0QVxcdTFFNDhcXHUwMjIwXFx1MDE5RFxcdUE3OTBcXHVBN0E0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNEZcXHUyNEM0XFx1RkYyRlxcdTAwRDJcXHUwMEQzXFx1MDBENFxcdTFFRDJcXHUxRUQwXFx1MUVENlxcdTFFRDRcXHUwMEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx1MDBENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHUwMEQ4XFx1MDFGRVxcdTAxODZcXHUwMTlGXFx1QTc0QVxcdUE3NENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9JXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9PXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NEVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9VXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAyMjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlBcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1MFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUxXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlJcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1MlxcdTI0QzdcXHVGRjMyXFx1MDE1NFxcdTFFNThcXHUwMTU4XFx1MDIxMFxcdTAyMTJcXHUxRTVBXFx1MUU1Q1xcdTAxNTZcXHUxRTVFXFx1MDI0Q1xcdTJDNjRcXHVBNzVBXFx1QTdBNlxcdUE3ODJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlNcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1M1xcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJUWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJVXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTVcXHUyNENBXFx1RkYzNVxcdTAwRDlcXHUwMERBXFx1MDBEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx1MDBEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIldcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1N1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU4XFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU5XFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx1MDBERFxcdTAxNzZcXHUxRUY4XFx1MDIzMlxcdTFFOEVcXHUwMTc4XFx1MUVGNlxcdTFFRjRcXHUwMUIzXFx1MDI0RVxcdTFFRkVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1QVxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2MVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxcdTAwRTBcXHUwMEUxXFx1MDBFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHUwMEUzXFx1MDEwMVxcdTAxMDNcXHUxRUIxXFx1MUVBRlxcdTFFQjVcXHUxRUIzXFx1MDIyN1xcdTAxRTFcXHUwMEU0XFx1MDFERlxcdTFFQTNcXHUwMEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFhXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFlXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwRTZcXHUwMUZEXFx1MDFFM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYW9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOVxcdUE3M0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0RdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2MlxcdTI0RDFcXHVGRjQyXFx1MUUwM1xcdTFFMDVcXHUxRTA3XFx1MDE4MFxcdTAxODNcXHUwMjUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJjXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjNcXHUyNEQyXFx1RkY0M1xcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHUwMEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjNcXHUwMUM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJlXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjVcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJnXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjdcXHUyNEQ2XFx1RkY0N1xcdTAxRjVcXHUwMTFEXFx1MUUyMVxcdTAxMUZcXHUwMTIxXFx1MDFFN1xcdTAxMjNcXHUwMUU1XFx1MDI2MFxcdUE3QTFcXHUxRDc5XFx1QTc3Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY4XFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImh2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxOTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImlcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2OVxcdTI0RDhcXHVGRjQ5XFx1MDBFQ1xcdTAwRURcXHUwMEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx1MDBFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QVxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJrXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkJcXHUyNERBXFx1RkY0QlxcdTFFMzFcXHUwMUU5XFx1MUUzM1xcdTAxMzdcXHUxRTM1XFx1MDE5OVxcdTJDNkFcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBN0EzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJsXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkNcXHUyNERCXFx1RkY0Q1xcdTAxNDBcXHUwMTNBXFx1MDEzRVxcdTFFMzdcXHUxRTM5XFx1MDEzQ1xcdTFFM0RcXHUxRTNCXFx1MDE3RlxcdTAxNDJcXHUwMTlBXFx1MDI2QlxcdTJDNjFcXHVBNzQ5XFx1QTc4MVxcdUE3NDddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm1cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2RFxcdTI0RENcXHVGRjREXFx1MUUzRlxcdTFFNDFcXHUxRTQzXFx1MDI3MVxcdTAyNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RVxcdTI0RERcXHVGRjRFXFx1MDFGOVxcdTAxNDRcXHUwMEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RlxcdTI0REVcXHVGRjRGXFx1MDBGMlxcdTAwRjNcXHUwMEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxcdTAwRjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHUwMEY2XFx1MDIyQlxcdTFFQ0ZcXHUwMTUxXFx1MDFEMlxcdTAyMERcXHUwMjBGXFx1MDFBMVxcdTFFRERcXHUxRURCXFx1MUVFMVxcdTFFREZcXHUxRUUzXFx1MUVDRFxcdTFFRDlcXHUwMUVCXFx1MDFFRFxcdTAwRjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib2lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib3VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib29cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwicFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDcwXFx1MjRERlxcdUZGNTBcXHUxRTU1XFx1MUU1N1xcdTAxQTVcXHUxRDdEXFx1QTc1MVxcdUE3NTNcXHVBNzU1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJxXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiclwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDcyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwic1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDczXFx1MjRFMlxcdUZGNTNcXHUwMERGXFx1MDE1QlxcdTFFNjVcXHUwMTVEXFx1MUU2MVxcdTAxNjFcXHUxRTY3XFx1MUU2M1xcdTFFNjlcXHUwMjE5XFx1MDE1RlxcdTAyM0ZcXHVBN0E5XFx1QTc4NVxcdTFFOUJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTcyOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDc1XFx1MjRFNFxcdUZGNTVcXHUwMEY5XFx1MDBGQVxcdTAwRkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxcdTAwRkNcXHUwMURDXFx1MDFEOFxcdTAxRDZcXHUwMURBXFx1MUVFN1xcdTAxNkZcXHUwMTcxXFx1MDFENFxcdTAyMTVcXHUwMjE3XFx1MDFCMFxcdTFFRUJcXHUxRUU5XFx1MUVFRlxcdTFFRURcXHUxRUYxXFx1MUVFNVxcdTFFNzNcXHUwMTczXFx1MUU3N1xcdTFFNzVcXHUwMjg5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2eVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzYxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ3XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzdcXHUyNEU2XFx1RkY1N1xcdTFFODFcXHUxRTgzXFx1MDE3NVxcdTFFODdcXHUxRTg1XFx1MUU5OFxcdTFFODlcXHUyQzczXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ4XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzhcXHUyNEU3XFx1RkY1OFxcdTFFOEJcXHUxRThEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzlcXHUyNEU4XFx1RkY1OVxcdTFFRjNcXHUwMEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxcdTAwRkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3QVxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjNdL2csXHJcbiAgfSxcclxuXTtcclxudmFyIGRvbWFpbnMgPSBbXHJcbiAgXCIuY29tXCIsXHJcbiAgXCIub3JnXCIsXHJcbiAgXCIubmV0XCIsXHJcbiAgXCIuYWNcIixcclxuICBcIi5hZFwiLFxyXG4gIFwiLmFlXCIsXHJcbiAgXCIuYWZcIixcclxuICBcIi5hZ1wiLFxyXG4gIFwiLmFpXCIsXHJcbiAgXCIuYWxcIixcclxuICBcIi5hbVwiLFxyXG4gIFwiLmFvXCIsXHJcbiAgXCIuYXFcIixcclxuICBcIi5hclwiLFxyXG4gIFwiLmFzXCIsXHJcbiAgXCIuYXRcIixcclxuICBcIi5hdVwiLFxyXG4gIFwiLmF3XCIsXHJcbiAgXCIuYXhcIixcclxuICBcIi5helwiLFxyXG4gIFwiLmJhXCIsXHJcbiAgXCIuYmJcIixcclxuICBcIi5iZFwiLFxyXG4gIFwiLmJlXCIsXHJcbiAgXCIuYmZcIixcclxuICBcIi5iZ1wiLFxyXG4gIFwiLmJoXCIsXHJcbiAgXCIuYmlcIixcclxuICBcIi5ialwiLFxyXG4gIFwiLmJtXCIsXHJcbiAgXCIuYm5cIixcclxuICBcIi5ib1wiLFxyXG4gIFwiLmJxXCIsXHJcbiAgXCIuYnJcIixcclxuICBcIi5ic1wiLFxyXG4gIFwiLmJ0XCIsXHJcbiAgXCIuYndcIixcclxuICBcIi5ieVwiLFxyXG4gIFwiLmJ6XCIsXHJcbiAgXCIuY2FcIixcclxuICBcIi5jY1wiLFxyXG4gIFwiLmNkXCIsXHJcbiAgXCIuY2ZcIixcclxuICBcIi5jZ1wiLFxyXG4gIFwiLmNoXCIsXHJcbiAgXCIuY2lcIixcclxuICBcIi5ja1wiLFxyXG4gIFwiLmNsXCIsXHJcbiAgXCIuY21cIixcclxuICBcIi5jblwiLFxyXG4gIFwiLmNvXCIsXHJcbiAgXCIuY3JcIixcclxuICBcIi5jdVwiLFxyXG4gIFwiLmN2XCIsXHJcbiAgXCIuY3dcIixcclxuICBcIi5jeFwiLFxyXG4gIFwiLmN5XCIsXHJcbiAgXCIuY3pcIixcclxuICBcIi5kZVwiLFxyXG4gIFwiLmRqXCIsXHJcbiAgXCIuZGtcIixcclxuICBcIi5kbVwiLFxyXG4gIFwiLmRvXCIsXHJcbiAgXCIuZHpcIixcclxuICBcIi5lY1wiLFxyXG4gIFwiLmVlXCIsXHJcbiAgXCIuZWdcIixcclxuICBcIi5laFwiLFxyXG4gIFwiLmVyXCIsXHJcbiAgXCIuZXNcIixcclxuICBcIi5ldFwiLFxyXG4gIFwiLmV1XCIsXHJcbiAgXCIuZmlcIixcclxuICBcIi5malwiLFxyXG4gIFwiLmZrXCIsXHJcbiAgXCIuZm1cIixcclxuICBcIi5mb1wiLFxyXG4gIFwiLmZyXCIsXHJcbiAgXCIuZ2FcIixcclxuICBcIi5nZFwiLFxyXG4gIFwiLmdlXCIsXHJcbiAgXCIuZ2ZcIixcclxuICBcIi5nZ1wiLFxyXG4gIFwiLmdoXCIsXHJcbiAgXCIuZ2lcIixcclxuICBcIi5nbFwiLFxyXG4gIFwiLmdtXCIsXHJcbiAgXCIuZ25cIixcclxuICBcIi5ncFwiLFxyXG4gIFwiLmdxXCIsXHJcbiAgXCIuZ3JcIixcclxuICBcIi5nc1wiLFxyXG4gIFwiLmd0XCIsXHJcbiAgXCIuZ3VcIixcclxuICBcIi5nd1wiLFxyXG4gIFwiLmd5XCIsXHJcbiAgXCIuaGtcIixcclxuICBcIi5obVwiLFxyXG4gIFwiLmhuXCIsXHJcbiAgXCIuaHJcIixcclxuICBcIi5odFwiLFxyXG4gIFwiLmh1XCIsXHJcbiAgXCIuaWRcIixcclxuICBcIi5pZVwiLFxyXG4gIFwiLmlsXCIsXHJcbiAgXCIuaW1cIixcclxuICBcIi5pblwiLFxyXG4gIFwiLmlvXCIsXHJcbiAgXCIuaXFcIixcclxuICBcIi5pclwiLFxyXG4gIFwiLmlzXCIsXHJcbiAgXCIuaXRcIixcclxuICBcIi5qZVwiLFxyXG4gIFwiLmptXCIsXHJcbiAgXCIuam9cIixcclxuICBcIi5qcFwiLFxyXG4gIFwiLmtlXCIsXHJcbiAgXCIua2dcIixcclxuICBcIi5raFwiLFxyXG4gIFwiLmtpXCIsXHJcbiAgXCIua21cIixcclxuICBcIi5rblwiLFxyXG4gIFwiLmtwXCIsXHJcbiAgXCIua3JcIixcclxuICBcIi5rd1wiLFxyXG4gIFwiLmt5XCIsXHJcbiAgXCIua3pcIixcclxuICBcIi5sYVwiLFxyXG4gIFwiLmxiXCIsXHJcbiAgXCIubGNcIixcclxuICBcIi5saVwiLFxyXG4gIFwiLmxrXCIsXHJcbiAgXCIubHJcIixcclxuICBcIi5sc1wiLFxyXG4gIFwiLmx0XCIsXHJcbiAgXCIubHVcIixcclxuICBcIi5sdlwiLFxyXG4gIFwiLmx5XCIsXHJcbiAgXCIubWFcIixcclxuICBcIi5tY1wiLFxyXG4gIFwiLm1kXCIsXHJcbiAgXCIubWVcIixcclxuICBcIi5tZ1wiLFxyXG4gIFwiLm1oXCIsXHJcbiAgXCIubWtcIixcclxuICBcIi5tbFwiLFxyXG4gIFwiLm1tXCIsXHJcbiAgXCIubW5cIixcclxuICBcIi5tb1wiLFxyXG4gIFwiLm1wXCIsXHJcbiAgXCIubXFcIixcclxuICBcIi5tclwiLFxyXG4gIFwiLm1zXCIsXHJcbiAgXCIubXRcIixcclxuICBcIi5tdVwiLFxyXG4gIFwiLm12XCIsXHJcbiAgXCIubXdcIixcclxuICBcIi5teFwiLFxyXG4gIFwiLm15XCIsXHJcbiAgXCIubXpcIixcclxuICBcIi5uYVwiLFxyXG4gIFwiLm5jXCIsXHJcbiAgXCIubmVcIixcclxuICBcIi5uZlwiLFxyXG4gIFwiLm5nXCIsXHJcbiAgXCIubmlcIixcclxuICBcIi5ubFwiLFxyXG4gIFwiLm5vXCIsXHJcbiAgXCIubnBcIixcclxuICBcIi5uclwiLFxyXG4gIFwiLm51XCIsXHJcbiAgXCIubnpcIixcclxuICBcIi5vbVwiLFxyXG4gIFwiLnBhXCIsXHJcbiAgXCIucGVcIixcclxuICBcIi5wZlwiLFxyXG4gIFwiLnBnXCIsXHJcbiAgXCIucGhcIixcclxuICBcIi5wa1wiLFxyXG4gIFwiLnBsXCIsXHJcbiAgXCIucG1cIixcclxuICBcIi5wblwiLFxyXG4gIFwiLnByXCIsXHJcbiAgXCIucHNcIixcclxuICBcIi5wdFwiLFxyXG4gIFwiLnB3XCIsXHJcbiAgXCIucHlcIixcclxuICBcIi5xYVwiLFxyXG4gIFwiLnJlXCIsXHJcbiAgXCIucm9cIixcclxuICBcIi5yc1wiLFxyXG4gIFwiLnJ1XCIsXHJcbiAgXCIucndcIixcclxuICBcIi5zYVwiLFxyXG4gIFwiLnNiXCIsXHJcbiAgXCIuc2NcIixcclxuICBcIi5zZFwiLFxyXG4gIFwiLnNlXCIsXHJcbiAgXCIuc2dcIixcclxuICBcIi5zaFwiLFxyXG4gIFwiLnNpXCIsXHJcbiAgXCIuc2tcIixcclxuICBcIi5zbFwiLFxyXG4gIFwiLnNtXCIsXHJcbiAgXCIuc25cIixcclxuICBcIi5zb1wiLFxyXG4gIFwiLnNyXCIsXHJcbiAgXCIuc3NcIixcclxuICBcIi5zdFwiLFxyXG4gIFwiLnN1XCIsXHJcbiAgXCIuc3ZcIixcclxuICBcIi5zeFwiLFxyXG4gIFwiLnN5XCIsXHJcbiAgXCIuc3pcIixcclxuICBcIi50Y1wiLFxyXG4gIFwiLnRkXCIsXHJcbiAgXCIudGZcIixcclxuICBcIi50Z1wiLFxyXG4gIFwiLnRoXCIsXHJcbiAgXCIudGpcIixcclxuICBcIi50a1wiLFxyXG4gIFwiLnRsXCIsXHJcbiAgXCIudG1cIixcclxuICBcIi50blwiLFxyXG4gIFwiLnRvXCIsXHJcbiAgXCIudHJcIixcclxuICBcIi50dFwiLFxyXG4gIFwiLnR2XCIsXHJcbiAgXCIudHdcIixcclxuICBcIi50elwiLFxyXG4gIFwiLnVhXCIsXHJcbiAgXCIudWdcIixcclxuICBcIi51a1wiLFxyXG4gIFwiLnVzXCIsXHJcbiAgXCIudXlcIixcclxuICBcIi51elwiLFxyXG4gIFwiLnZhXCIsXHJcbiAgXCIudmNcIixcclxuICBcIi52ZVwiLFxyXG4gIFwiLnZnXCIsXHJcbiAgXCIudmlcIixcclxuICBcIi52blwiLFxyXG4gIFwiLnZ1XCIsXHJcbiAgXCIud2ZcIixcclxuICBcIi53c1wiLFxyXG4gIFwiLnllXCIsXHJcbiAgXCIueXRcIixcclxuICBcIi56YVwiLFxyXG4gIFwiLnptXCIsXHJcbiAgXCIuendcIixcclxuXTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZURpYWNyaXRpY3NcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwLnJlZHVjZSgocmVzdWx0LCBsZXR0ZXIpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKGxldHRlci5sZXR0ZXJzLCBsZXR0ZXIuYmFzZSk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IFNQRUNJQUxfQ0hBUkFDVEVSUyA9IFwiXFxcXFxcXFwvICE/QCMkJV4mKigpXys6Lnt9LDtcXFxcLSdgYOKAmeKAmFxcXCJcIjtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbJHtTUEVDSUFMX0NIQVJBQ1RFUlN9XWAsIFwiZ2lcIiksIFwiXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlQWxsQnV0TGV0dGVyc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlKCkucmVtb3ZlRGlhY3JpdGljcygpLnJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzKCk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjb25jZWFsXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGV4dHJhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFteJHtTUEVDSUFMX0NIQVJBQ1RFUlN9JHtleHRyYX1dYCwgXCJnaVwiKSwgXCLigY5cIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjYXBpdGFsaXplXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnNsaWNlKDEpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlSFRNTFwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoXCI+XCIsIFwiXFx1MjI3QlwiKS5yZXBsYWNlKFwiPFwiLCBcIlxcdTIyN0FcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJwYXJzZVN5bWJvbHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlQWxsKFwiJlwiLCBcIiZhbXA7XCIpLnJlcGxhY2UoXCI8XCIsIFwiJmx0O1wiKS5yZXBsYWNlKFwiPlwiLCBcIiZndDtcIikucmVwbGFjZUFsbChcIiNcIiwgXCImbnVtO1wiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlcGxhY2VBcnJheVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChmaW5kLCByZXBsYWNlKSB7XHJcbiAgICB2YXIgcmVwbGFjZVN0cmluZyA9IHRoaXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcmVwbGFjZVN0cmluZyA9IHJlcGxhY2VTdHJpbmcucmVwbGFjZShmaW5kW2ldLCByZXBsYWNlW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXBsYWNlU3RyaW5nO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwibWFza1VSTHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlQXJyYXkoW1wiaHR0cHM6Ly9cIiwgXCJodHRwOi8vXCJdLCBcIm5vcGU6Ly9cIikucmVwbGFjZUFycmF5KGRvbWFpbnMsIFwiLm5vcGVcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJtYWtlUmVhZGFibGVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VQZXJjZW50YWdlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGRlY2ltYWxzKSB7XHJcbiAgICBpZiAoZGVjaW1hbHMgPT09IHVuZGVmaW5lZCkgZGVjaW1hbHMgPSAyO1xyXG4gICAgcmV0dXJuIGAkeyh0aGlzICogMTAwKS50b0ZpeGVkKGRlY2ltYWxzKX0lYDtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHNvcnRPYmplY3QgPSAob2JqLCBkaXJlY3Rpb24pID0+IHtcclxuICBsZXQgYXJyID0gW107XHJcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICBhcnIucHVzaChba2V5LCBvYmpba2V5XV0pO1xyXG4gIH1cclxuICBhcnIuc29ydCgoYSwgYikgPT4gKGRpcmVjdGlvbiA/IGFbMV0gLSBiWzFdIDogYlsxXSAtIGFbMV0pKTtcclxuICBsZXQgb2JqU29ydGVkID0ge307XHJcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IChvYmpTb3J0ZWRbaXRlbVswXV0gPSBpdGVtWzFdKSk7XHJcbiAgLy9hcnIuc29ydChmdW5jdGlvbihhLCBiKSB7IGEudmFsdWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIudmFsdWUudG9Mb3dlckNhc2UoKSk7IH0pOyAvL3VzZSB0aGlzIHRvIHNvcnQgYXMgc3RyaW5nc1xyXG4gIHJldHVybiBvYmpTb3J0ZWQ7IC8vIHJldHVybnMgYXJyYXlcclxufTtcclxuIiwiLypcclxuJCA9IGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG52YXIgYm9vdHN0cmFwID0gcmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG52YXIgYW5ndWxhclNhbml0aXplID0gcmVxdWlyZSgnYW5ndWxhci1zYW5pdGl6ZScpO1xyXG52YXIgYW5ndWxhckFuaW1hdGUgPSByZXF1aXJlKCdhbmd1bGFyLWFuaW1hdGUnKTtcclxuKi9cclxuYW5ndWxhci5tb2R1bGUoXCJhcHBcIiwgW1xyXG4gIFwidWkucm91dGVyXCIsXHJcbiAgXCJ1aS5ib290c3RyYXBcIixcclxuICBcIm5nQW5pbWF0ZVwiLFxyXG4gIFwibmdTYW5pdGl6ZVwiLFxyXG4gIFwibmdNYXRlcmlhbFwiLFxyXG4gIFwibmdNZXNzYWdlc1wiLFxyXG4gIFwibmdEcmFnRHJvcFwiLFxyXG4gIFwibmdUYWdzSW5wdXRcIixcclxuICBcInZjUmVjYXB0Y2hhXCIsXHJcbiAgXCJjaGFydC5qc1wiLFxyXG4gIFwidGMuY2hhcnRqc1wiLFxyXG4gIFwiaW5maW5pdGUtc2Nyb2xsXCIsXHJcbl0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICR1cmxTZXJ2aWNlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XHJcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcIi9ob21lXCIpO1xyXG4gICR1cmxTZXJ2aWNlUHJvdmlkZXIuY29uZmlnLnN0cmljdE1vZGUoZmFsc2UpO1xyXG5cclxuICAkc3RhdGVQcm92aWRlclxyXG4gICAgLnN0YXRlKFwiaG9tZVwiLCB7XHJcbiAgICAgIHVybDogXCIvaG9tZVwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvaG9tZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicG9saWN5XCIsIHtcclxuICAgICAgdXJsOiBcIi9wb2xpY3lcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3BvbGljeS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicHJpbnRcIiwge1xyXG4gICAgICB1cmw6IFwiL3ByaW50XCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wcmludC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiZXhwZXJpZW5jZVwiLCB7XHJcbiAgICAgIHVybDogXCIvZXhwZXJpZW5jZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkV4cGVyaWVuY2VDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9leHBlcmllbmNlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJza2lsbHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3NraWxsc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlNraWxsc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3NraWxscy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiaG9iYmllc1wiLCB7XHJcbiAgICAgIHVybDogXCIvaG9iYmllc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkhvYmJpZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9ob2JiaWVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJjb250YWN0XCIsIHtcclxuICAgICAgdXJsOiBcIi9jb250YWN0XCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQ29udGFjdEN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2NvbnRhY3QuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcIndvcmtvdXRcIiwge1xyXG4gICAgICB1cmw6IFwiL3dvcmtvdXRcIixcclxuICAgICAgY29udHJvbGxlcjogXCJXb3Jrb3V0Q3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvd29ya291dC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicG9zdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3Bvc3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUG9zdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wb3N0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicHJvZmlsZVwiLCB7XHJcbiAgICAgIHVybDogXCIvcHJvZmlsZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlByb2ZpbGVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wcm9maWxlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJsaXN0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvbGlzdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJMaXN0c0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwibGlzdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImJ1YmJsZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2J1YmJsZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJCdWJibGVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJidWJibGVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJhc3Rlcm9pZHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2FzdGVyb2lkc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkFzdGVyb2lkc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiYXN0ZXJvaWRzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJsZW1taW5nc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbGVtbWluZ3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJMZW1taW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwibGVtbWluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImJvdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2JvdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLWFkbWluXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3MtYWRtaW5cIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NBZG1pbkN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLWFkbWluLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3MtZ2FtZVwiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLzpnYW1lXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzR2FtZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLWdhbWUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1zdGF0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLXN0YXRzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzU3RhdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1zdGF0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1nb29nbGVcIiwge1xyXG4gICAgICB1cmw6IFwiL2dvb2dsZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpHb29nbGVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvZ29vZ2xlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWxvZ29zXCIsIHtcclxuICAgICAgdXJsOiBcIi9sb2dvc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpMb2dvc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9sb2dvcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1hbmltYWxzXCIsIHtcclxuICAgICAgdXJsOiBcIi9hbmltYWxzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekFuaW1hbHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvYW5pbWFscy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1za2VsZXRvbnNcIiwge1xyXG4gICAgICB1cmw6IFwiL3NrZWxldG9uc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpTa2VsZXRvbnNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvc2tlbGV0b25zLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LW1vdmllc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbW92aWVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpek1vdmllc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9tb3ZpZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImNoYXJhZGVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9jaGFyYWRlc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkNoYXJhZGVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvY2hhcmFkZXMuaHRtbFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7XHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgcmVxdWlyZUJhc2U6IGZhbHNlLFxyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdXZWJTb2NrZXRTdmMnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcclxuICBmdW5jdGlvbiB3ZWJzb2NrZXRIb3N0KCkge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcclxuICAgICAgcmV0dXJuIFwid3NzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIndzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBjb25uZWN0aW9uO1xyXG4gIHZhciBjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQod2Vic29ja2V0SG9zdCgpKTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjb25uZWN0ZWQnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjbG9zZWQuIFJlY29ubmVjdGluZy4uLicpO1xyXG4gICAgICAkdGltZW91dChjb25uZWN0LCAxMDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUgKyBcIiAtIFN0YXRlOiBcIiArIGNvbm5lY3Rpb24ucmVhZHlTdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnd3M6JyArIHBheWxvYWQudG9waWMsIHBheWxvYWQuZGF0YSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc2VuZCA9IGZ1bmN0aW9uICh0b3BpYywgZGF0YSkge1xyXG4gICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh7dG9waWM6IHRvcGljLCBkYXRhOiBkYXRhfSk7XHJcbiAgICBjb25uZWN0aW9uLnNlbmQoanNvbik7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5jb25uZWN0ID0gY29ubmVjdDtcclxuXHJcbn0pLnJ1bihmdW5jdGlvbiAoV2ViU29ja2V0U3ZjKSB7XHJcbiAgV2ViU29ja2V0U3ZjLmNvbm5lY3QoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmRpcmVjdGl2ZShcImNsaWNrT3V0c2lkZVwiLCBmdW5jdGlvbiAoJGRvY3VtZW50KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc3RyaWN0OiBcIkFcIixcclxuICAgIHNjb3BlOiB7XHJcbiAgICAgIGNsaWNrT3V0c2lkZTogXCImXCIsXHJcbiAgICB9LFxyXG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAkZG9jdW1lbnQub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlbCAhPT0gZS50YXJnZXQgJiYgIWVsWzBdLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9zY29wZS4kcGFyZW50LnNldFNlbGVjdGVkTGlzdCgpO1xyXG4gICAgICAgICAgICBzY29wZS4kZXZhbChzY29wZS5jbGlja091dHNpZGUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG5cdC5kaXJlY3RpdmUoJ2hlYWQnLCBbXHJcblx0XHQnJHJvb3RTY29wZScsXHJcblx0XHQnJHN0YXRlJyxcclxuXHRcdCckY29tcGlsZScsXHJcblx0XHQnJGludGVycG9sYXRlJyxcclxuXHRcdGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsICRjb21waWxlLCAkaW50ZXJwb2xhdGUpIHtcclxuXHJcblx0XHRcdHZhciBnZXRTdHlsZSA9IGZ1bmN0aW9uIGdldFN0eWxlKHRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHJcblx0XHRcdFx0dmFyIHN0eWxlID0ge1xyXG5cdFx0XHRcdFx0aHJlZjogdGVtcGxhdGVTdHlsZVVybCxcclxuXHRcdFx0XHRcdHJlbDogJ3N0eWxlc2hlZXQnXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0aWYgKHN0eWxlLmhyZWYubWF0Y2goL1xcLmxlc3MkLykpIHtcclxuXHRcdFx0XHRcdHN0eWxlLnJlbCA9ICdzdHlsZXNoZWV0L2xlc3MnO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIHN0eWxlO1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiBnZXRTdHlsZXMoc3RhdGUpIHtcclxuXHJcblx0XHRcdFx0dmFyIHN0YXRlcyA9IHt9O1xyXG5cclxuXHRcdFx0XHQvL0NoZWNrIHN0YXRlIGZvciBzdHlsZXNcclxuXHRcdFx0XHR3aGlsZSAoc3RhdGUubmFtZSAhPT0gJycpIHtcclxuXHRcdFx0XHRcdHZhciBwYXJlbnQgPSAkc3RhdGUuZ2V0KCdeJywgc3RhdGUpO1xyXG5cclxuXHRcdFx0XHRcdC8vSW5pdGlhdGUgb3VyIHZpZXcgbGlzdFxyXG5cdFx0XHRcdFx0aWYgKCFzdGF0ZXNbcGFyZW50Lm5hbWVdKSB7XHJcblx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV0gPSB7fTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NoZWNrIHRoZSB0ZW1wbGF0ZVN0eWxlXHJcblx0XHRcdFx0XHRpZiAoc3RhdGUudGVtcGxhdGVTdHlsZVVybCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1twYXJlbnQubmFtZV1bJyddKSB7XHJcblx0XHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXVsnJ10gPSBnZXRTdHlsZShzdGF0ZS50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ2hlY2sgdmlld3NcclxuXHRcdFx0XHRcdGlmIChzdGF0ZS52aWV3cykge1xyXG5cdFx0XHRcdFx0XHRfLmZvckVhY2goc3RhdGUudmlld3MsIGZ1bmN0aW9uICh2aWV3LCBrZXkpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBoYXZlIGEgc3R5bGVcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXZpZXcudGVtcGxhdGVTdHlsZVVybCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBhcmUgdGFyZ2V0aW5nIHNvbWUgcGFyZW50XHJcblx0XHRcdFx0XHRcdFx0aWYgKChrZXkgPSBrZXkuc3BsaXQoJ0AnKSlbMV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgaGF2ZSBzdHlsZXMgZm9yIHRoYXQgcGFyZW50XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1trZXlbMV1dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlc1trZXlbMV1dID0ge307XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Ly9QbGFjZSB0aGUgc3R5bGUgb24gc29tZSBwYXJlbnQncyB2aWV3XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1trZXlbMV1dW2tleVswXV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGVzW2tleVsxXV1ba2V5WzBdXSA9IGdldFN0eWxlKHZpZXcudGVtcGxhdGVTdHlsZVVybCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9QbGFjZSB0aGUgc3R5bGUgb24gb3VyIHBhcmVudCdzIHZpZXdcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdW2tleVswXV0gPSBnZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9Db250aW51ZSB3aXRoIHRoZSBwYXJlbnRcclxuXHRcdFx0XHRcdHN0YXRlID0gcGFyZW50O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9GbGF0dGVuIHRoZSBsaXN0XHJcblx0XHRcdFx0dmFyIGZsYXQgPSBbXTtcclxuXHRcdFx0XHRfLmZvckVhY2goc3RhdGVzLCBmdW5jdGlvbiAodmlld3MpIHtcclxuXHJcblx0XHRcdFx0XHRfLmZvckVhY2godmlld3MsIGZ1bmN0aW9uIChzdHlsZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFfLmluY2x1ZGVzKGZsYXQsIHN0eWxlKSkge1xyXG5cdFx0XHRcdFx0XHRcdGZsYXQucHVzaChzdHlsZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vUmV2ZXJzZSBpdCBzbyB3ZSBoYXZlIGEgcHJvcGVyIGhpZXJhcmNoeVxyXG5cdFx0XHRcdGZsYXQucmV2ZXJzZSgpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZmxhdDtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRcdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtKSB7XHJcblxyXG5cdFx0XHRcdFx0c2NvcGUudGVtcGxhdGVTdHlsZXMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHR2YXIgaHRtbCA9ICc8bGluayBuZy1hdHRyLXJlbD1cInt7c3R5bGUucmVsfX1cIiBuZy1yZXBlYXQ9XCJzdHlsZSBpbiB0ZW1wbGF0ZVN0eWxlc1wiIG5nLWhyZWY9XCJ7e3N0eWxlLmhyZWZ9fVwiPic7XHJcblxyXG5cdFx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvXFx7XFx7L2csICRpbnRlcnBvbGF0ZS5zdGFydFN5bWJvbCgpKTtcclxuXHRcdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcfVxcfS9nLCAkaW50ZXJwb2xhdGUuZW5kU3ltYm9sKCkpO1xyXG5cclxuXHRcdFx0XHRcdGVsZW0uYXBwZW5kKCRjb21waWxlKGh0bWwpKHNjb3BlKSk7XHJcblxyXG5cdFx0XHRcdFx0JHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzY29wZS50ZW1wbGF0ZVN0eWxlcyA9IGdldFN0eWxlcyh0b1N0YXRlKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdH1cclxuXHRdKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdDYXRlZ29yaWVzU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRDYXRlZ29yaWVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9jYXRlZ29yaWVzJyk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFRhc2tzID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5KTtcclxuICB9O1xyXG5cclxuICBzdmMuYWRkQ2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJywgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRUYXNrID0gZnVuY3Rpb24gKGNhdGVnb3J5LCB0YXNrKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9jYXRlZ29yaWVzLycgKyBjYXRlZ29yeSArICcvdGFza3MnLCB0YXNrKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2V0UHJpb3JpdHlMaXN0ID0gZnVuY3Rpb24obGlzdCkge1xyXG4gICAgc3ZjLmNob2ljZXMgPSBsaXN0O1xyXG4gICAgc3ZjLnByaW9yaXR5TGlzdCA9IFtdO1xyXG4gICAgLy9NYWtlIGEgbmV3IGNob2ljZSBsaXN0XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgbGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHZhciByYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHN2Yy5wcmlvcml0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgIGZpcnN0Q2hvaWNlOiBsaXN0W3JhbmRvbSA9PT0gMCA/IGkgOiBqXS5uYW1lLFxyXG4gICAgICAgICAgc2Vjb25kQ2hvaWNlOiBsaXN0W3JhbmRvbSA9PT0gMCA/IGogOiBpXS5uYW1lLFxyXG4gICAgICAgICAgY2hvaWNlOiAnJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzaHVmZmxlKHN2Yy5wcmlvcml0eUxpc3QpO1xyXG4gICAgZm9yIChpIGluIHN2Yy5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgc3ZjLnByaW9yaXR5TGlzdFtpXS5pZCA9IGkgKyAxO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICByZXR1cm4gc3ZjLnByaW9yaXR5TGlzdDtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBzaHVmZmxlKGFycmF5KSB7XHJcbiAgICB2YXIgbSA9IGFycmF5Lmxlbmd0aCwgdCwgaTtcclxuICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxl4oCmXHJcbiAgICB3aGlsZSAobSkge1xyXG4gICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnTigKZcclxuICAgICAgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG0tLSk7XHJcbiAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cclxuICAgICAgLy9hcnJheVttXS5maXJzdENob2ljZTtcclxuICAgICAgdCA9IGFycmF5W21dO1xyXG4gICAgICBhcnJheVttXSA9IGFycmF5W2ldO1xyXG4gICAgICBhcnJheVtpXSA9IHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnRW1haWxTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLnNlbmQgPSBmdW5jdGlvbiAoZW1haWwpIHtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2VtYWlsJywgZW1haWwpO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLnNlcnZpY2UoJ0ZpbGVTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICAgIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICAgIHN2Yy5nZXRJbWFnZXMgPSBmdW5jdGlvbihmb2xkZXIpIHtcclxuICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9maWxlcy9pbWFnZXMvJyArIGZvbGRlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy5nZXRTb3VuZHMgPSBmdW5jdGlvbihmb2xkZXIpIHtcclxuICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9maWxlcy9zb3VuZHMvJyArIGZvbGRlcik7XHJcbiAgICB9O1xyXG5cclxuICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0dhbWVTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICAgIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICAgIHN2Yy5nZXRIaWdoc2NvcmUgPSBmdW5jdGlvbiAoZ2FtZSwgdXNlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2dhbWVzLycgKyBnYW1lICsgJy8nICsgdXNlciArICcvaGlnaHNjb3JlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy5zZXRIaWdoc2NvcmUgPSBmdW5jdGlvbiAoZ2FtZSwgdXNlciwgc2NvcmUpIHtcclxuICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZ2FtZXMvJyArIGdhbWUgKyAnLycgKyB1c2VyICsgJy9oaWdoc2NvcmUnLCB7XHJcbiAgICAgICAgc2NvcmU6IHNjb3JlXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0xhbmd1YWdlU3ZjJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMubGFuZ3VhZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJFbmdsaXNoXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1nYlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJOZWRlcmxhbmRzXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1ubFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJGcmFuw6dhaXNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWZyXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBzdmMudGV4dCA9IFtcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRU5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiTkxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRlJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gc3ZjLmxhbmd1YWdlc1swXTtcclxuXHJcbiAgc3ZjLnNldExhbmd1YWdlID0gZnVuY3Rpb24gKGxhbmd1YWdlKSB7XHJcbiAgICBzdmMuc2VsZWN0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBzdmMuc2VsZWN0ZWRMYW5ndWFnZTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnUG9zdHNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmZldGNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cycpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGUgPSBmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCBwb3N0KTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UG9zdCA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzLycgKyBwb3N0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiVGVuVGhpbmdzU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0UXVldWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYm90cy90ZW50aGluZ3MvcXVldWVgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdHMgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7XHJcbiAgICB2YXIgdXJsID1cclxuICAgICAgYC9hcGkvdGVudGhpbmdzL2xpc3RzP2AgK1xyXG4gICAgICAob3B0aW9ucy5saW1pdCA/IGAmbGltaXQ9JHtvcHRpb25zLmxpbWl0fWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnBhZ2UgPyBgJnBhZ2U9JHtvcHRpb25zLnBhZ2V9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuc29ydEJ5ID8gYCZzb3J0X2J5PSR7b3B0aW9ucy5zb3J0Qnl9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMub3JkZXJCeSA/IGAmb3JkZXJfYnk9JHtvcHRpb25zLm9yZGVyQnl9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMubGFuZ3VhZ2VzICYmIG9wdGlvbnMubGFuZ3VhZ2VzLmxlbmd0aCA+IDAgPyBgJmxhbmd1YWdlPSR7b3B0aW9ucy5sYW5ndWFnZXMuam9pbihcIixcIil9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuY2F0ZWdvcmllcyAmJiBvcHRpb25zLmNhdGVnb3JpZXMubGVuZ3RoID4gMCA/IGAmY2F0ZWdvcmllcz0ke29wdGlvbnMuY2F0ZWdvcmllcy5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zZWFyY2ggPyBgJnNlYXJjaD0ke29wdGlvbnMuc2VhcmNofWAgOiBcIlwiKTtcclxuICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2VhcmNoTGlzdHMgPSAobmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3Mvc2VhcmNoL2xpc3QtbmFtZXMvJHtuYW1lfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvY2F0ZWdvcmllc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9sYW5ndWFnZXNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnB1dChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQsIGxpc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGVMaXN0ID0gZnVuY3Rpb24gKHVzZXIsIGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHNcIiwge1xyXG4gICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICBsaXN0OiBsaXN0LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLm1lcmdlTGlzdHMgPSBmdW5jdGlvbiAobGlzdHMpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvbWVyZ2VcIiwgeyBsaXN0czogbGlzdHMgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmRlbGV0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdElkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0SWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wdXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzL1wiICsgdmFsdWUuX2lkLCB2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzXCIsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBzdmMuZGVsZXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3ZhbHVlcy9cIiArIHZhbHVlLl9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnJlcG9ydExpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3JlcG9ydC9cIiArIHVzZXIuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvY2F0ZWdvcmllc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvbGFuZ3VhZ2VzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQbGF5U3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvcGxheVwiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0R2FtZVN0YXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL3N0YXRzL2dhbWVzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRCbHVyYnMgPSBmdW5jdGlvbiAobGlzdCwgdHlwZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL2xpc3RzLyR7bGlzdC5faWR9L2JsdXJicy8ke3R5cGV9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvcGF1c2VgKTtcclxuICB9O1xyXG5cclxuICBzdmMudG9nZ2xlUGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvcGF1c2VgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0R2FtZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvZ2FtZXMvJHtpZH1gKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlVzZXJTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFVzZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnMvYWxsXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVCYW4gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3VzZXJzL2Jhbi8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSB0b2tlbjtcclxuICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hdXRoZW50aWNhdGVcIiwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9sb2dpblwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyLl9pZCwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi92ZXJpZmljYXRpb25cIiwge1xyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvcGFzc3dvcmRcIiwge1xyXG4gICAgICBvbGRQYXNzd29yZDogb2xkUGFzc3dvcmQsXHJcbiAgICAgIG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VyLCBuZXdVc2VybmFtZSkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi91c2VybmFtZVwiLCB7XHJcbiAgICAgICAgbmV3VXNlcm5hbWU6IG5ld1VzZXJuYW1lLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkFwcEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgTGFuZ3VhZ2VTdmMsIFVzZXJTdmMpIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiJWNZb3Ugc25lYWt5IGJ1Z2dlciFcIixcclxuICAgIFwiZm9udDogMmVtIHNhbnMtc2VyaWY7IGNvbG9yOiBEb2RnZXJCbHVlOyB0ZXh0LXNoYWRvdzogMnB4IDAgMCAjNDQ0LCAtMnB4IDAgMCAjNDQ0LCAwIDJweCAwICM0NDQsIDAgLTJweCAwICM0NDQsIDFweCAxcHggIzQ0NCwgLTFweCAtMXB4IDAgIzQ0NCwgMXB4IC0xcHggMCAjNDQ0LCAtMXB4IDFweCAwICM0NDQ7XCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiSSdtIGdsYWQgeW91J3JlIGN1cmlvdXMgd2hldGhlciBzb21ldGhpbmcgaXMgcG9wcGluZyB1cCBpbiBoZXJlLiBJJ20gYSBiaXQgb2YgYSBzdGlja2xlciB3aGVuIGl0IGNvbWVzIHRvIG1lc3NhZ2VzIGluIHRoZSBjb25zb2xlIHNvIEkgdHJ5IHRvIG1ha2Ugc3VyZSBvbmx5IHRoaW5ncyBJIHdhbnQgYXJlIHZpc2libGUuIFRoYXQgYmVpbmcgc2FpZCwgaWYgdGhlcmUgaXMgYSBiaWcgZXJyb3IgaGVyZSwgSSB3b3VsZCByZWFsbHkgYXBwcmVjaWF0ZSB5b3UgdGVsbGluZyBtZSBzbyBJIGNhbiBnZXQgcmlkIG9mIGl0IVwiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIlRoZSBjb2RlIGZvciBteSByZXN1bWUgaXMgaG9zdGVkIG9uIEdpdGh1YiBpZiB5b3UgcmVhbGx5IHdhbnQgdG8gZ28gaW50byBhbGwgdGhpcyEgPT4gaHR0cHM6Ly9naXRodWIuY29tL0ZsYW5kZXJzQnVyZ2VyL3Jlc3VtZVwiLFxyXG4gICk7XHJcblxyXG4gIC8qXHJcbiAgICAkKGRvY3VtZW50KS5iaW5kKFwia2V5dXAga2V5ZG93blwiLCBmdW5jdGlvbihlKXtcclxuICAgICAgaWYoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PSA4MCl7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgKi9cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5sb2FkaW5nXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuY2hlY2tib3gtbWVudVwiKS5vbihcImNoYW5nZVwiLCBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KFwibGlcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIiwgdGhpcy5jaGVja2VkKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5hbGxvdy1mb2N1c1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnRoZW1lQ291bnRlciA9IDY7XHJcbiAgJHNjb3BlLnRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAkc2NvcGUueWVhciA9ICRzY29wZS50b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICRzY29wZS5yYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcclxuXHJcbiAgJHNjb3BlLmZsaXBUaGVtZSA9ICgpID0+IHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5zaG93KCk7XHJcbiAgICAkKFwiLmNvbnRlbnRcIikuaGlkZSgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgICB9LCA4MDApO1xyXG4gICAgJHNjb3BlLnRoZW1lQ291bnRlciA9ICRzY29wZS50aGVtZUNvdW50ZXIgPCA2ID8gJHNjb3BlLnRoZW1lQ291bnRlciArIDEgOiAoJHNjb3BlLnRoZW1lQ291bnRlciA9IDEpO1xyXG4gIH07XHJcblxyXG4gICQuZ2V0SlNPTihcIi9za2lsbHMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLnNraWxscyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuZW5hYmxlZDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvaG9iYmllcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuaG9iYmllcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9leHBlcmllbmNlLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5qb2JzID0gZGF0YTtcclxuICAgICRzY29wZS5qb2JzLmZvckVhY2goKGpvYikgPT4ge1xyXG4gICAgICBqb2Iuc3RhcnREYXRlID0gbmV3IERhdGUoam9iLnN0YXJ0RGF0ZSk7XHJcbiAgICAgIGlmIChqb2IuZW5kRGF0ZSkgam9iLmVuZERhdGUgPSBuZXcgRGF0ZShqb2IuZW5kRGF0ZSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2NoYXJhZGVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5jaGFyYWRlcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5nZXRUaW1lU3BhbiA9IChqb2IpID0+IHtcclxuICAgIHJldHVybiBqb2Iuc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyAoam9iLmVuZERhdGUgPyBcIiAtIFwiICsgam9iLmVuZERhdGUuZ2V0RnVsbFllYXIoKSA6IFwiIC0gVG9kYXlcIik7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmxhbmd1YWdlcyA9IExhbmd1YWdlU3ZjLmxhbmd1YWdlcztcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBMYW5ndWFnZVN2Yy5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0TGFuZ3VhZ2UgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5ob3ZlcmRpdiA9IChlLCBkaXZpZCkgPT4ge1xyXG4gICAgdmFyIGxlZnQgPSBlLmNsaWVudFggKyBcInB4XCI7XHJcbiAgICB2YXIgdG9wID0gZS5jbGllbnRZICsgMjAgKyBcInB4XCI7XHJcblxyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdmlkKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcImxlZnRcIiwgbGVmdCk7XHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcInRvcFwiLCB0b3ApO1xyXG5cclxuICAgICQoXCIjXCIgKyBkaXZpZCkudG9nZ2xlKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikge1xyXG4gICAgVXNlclN2Yy5sb2dpbih3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGxvZ2luKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8sIHVzZXIpID0+IHtcclxuICAgIGxvZ2luKHVzZXIpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XHJcbiAgICBpZiAoISRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIgPSB1c2VyLl9pZDtcclxuICAgICAgJHNjb3BlLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUpO1xyXG4gICAgICAkc2NvcGUuJGJyb2FkY2FzdChcImxvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS4kb24oXCJ1cGRhdGVcIiwgKF8sIHVzZXIpID0+IHtcclxuICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlID0gbmV3IERhdGUoJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSk7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkaW5nXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5zaG93KCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkZWRcIiwgKF8sIHVzZXIpID0+IHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIiNsb2FkaW5nLWljb25cIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmxvZ291dCA9ICgpID0+IHtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgIC5hdXRoKClcclxuICAgICAgLnNpZ25PdXQoKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dvdXRcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgbW9udGhzID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpICsgXCItXCIgKyBtb250aHNbZGF0ZS5nZXRNb250aCgpXSArIFwiLVwiICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQXN0ZXJvaWRzQ3RybFwiLCBmdW5jdGlvbiAoJGxvY2F0aW9uLCAkc2NvcGUsIEdhbWVTdmMpIHtcclxuICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcclxuICBpZiAoIWNhbnZhcykge1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoXCIvaG9tZVwiKTtcclxuICAgIHJldHVybiBhbGVydChcIlwiKTtcclxuICB9XHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICBpZiAoIWN0eCkge1xyXG4gICAgcmV0dXJuICRsb2NhdGlvbi5wYXRoKFwiL2hvbWVcIik7XHJcbiAgfVxyXG4gIGN0eC5mb250ID0gXCIzMHB4IENvbWljIFNhbnMgTVNcIjtcclxuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBsZXQgc2hvdHMgPSB7fTtcclxuICBjb25zdCBhc3Rlcm9pZHMgPSB7fTtcclxuICBjb25zdCBwb3dlcnVwcyA9IHt9O1xyXG4gIGNvbnN0IGV4cGxvc2lvbnMgPSB7fTtcclxuICBjb25zdCBtYXAgPSB7fTtcclxuICBjb25zdCBzcGFjZXBpY3MgPSAxMDtcclxuICBsZXQgc3BhY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFjZXBpY3MpO1xyXG4gIGNvbnN0IHBvd2VydXBUeXBlcyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJzcGVlZFwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiTWF4IFNwZWVkIOKHp1wiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogNCxcclxuICAgICAgICBzaXplOiBbMTQsIDM1XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAubWF4U3BlZWQgKz0gMTAwO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJjb29sZG93blwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiQ29vbGRvd24g4oepXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiAzLFxyXG4gICAgICAgIHNpemU6IFsxNywgMTddLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuY29vbGRvd25UaW1lIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJyYW5nZVwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiRmlyaW5nIFJhbmdlIOKHp1wiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDQsXHJcbiAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICBzaXplOiBbMzAsIDhdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5yYW5nZSArPSA1O1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJzaGllbGRcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIlNoaWVsZFwiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDUsXHJcbiAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICBzaXplOiBbMTksIDE5XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAuc2hpZWxkID0gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwibnVrZVwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiTnVrZVwiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogOCxcclxuICAgICAgICBzaXplOiBbMTUsIDE1XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bhd25Bc3Rlcm9pZHMoNSk7XHJcbiAgICAgIH0sXHJcbiAgICB9IC8qXHJcbiAgICAnc2lkZV9jYW5ub25zJyxcclxuICAgICdsYXNlcicsXHJcbiAgICAnc2hpZWxkJyxcclxuICAgICdsaWZlJyxcclxuICAgICdtaXNzaWxlcycsXHJcbiAgICAnbnVrZSdcclxuICAgICovLFxyXG4gIF07XHJcbiAgcG93ZXJ1cFR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHBvd2VydXAsIGksIGFycmF5KSB7XHJcbiAgICBhcnJheVtpXS5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvXCIgKyBwb3dlcnVwLm5hbWUgKyBcIi5wbmdcIjtcclxuICB9KTtcclxuXHJcbiAgdmFyIGV4cGxvc2lvbkltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgZXhwbG9zaW9uSW1hZ2Uuc3JjID0gXCJhc3Rlcm9pZHMvZXhwbG9zaW9uLnBuZ1wiO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwia2V5ZG93blwiLFxyXG4gICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgbWFwW2Uua2V5Q29kZSB8fCBlLndoaWNoXSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgdHJ1ZSxcclxuICApO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJrZXl1cFwiLFxyXG4gICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgbWFwW2Uua2V5Q29kZSB8fCBlLndoaWNoXSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHRydWUsXHJcbiAgKTtcclxuXHJcbiAgJHNjb3BlLmhpZ2hzY29yZSA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGV2YWx1YXRlS2V5cygpIHtcclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBpZiAobWFwWzMyXSkge1xyXG4gICAgICAgIC8vU3BhY2VcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLmNvb2xkb3duID09PSAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc2hvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszN10pIHtcclxuICAgICAgICAvL0xlZnQgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnJvdGF0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gPSAzNjA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiAtPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM5XSkge1xyXG4gICAgICAgIC8vUmlnaHQgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnJvdGF0aW9uID09PSAzNjApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiArPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM4XSkge1xyXG4gICAgICAgIC8vVXAgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkIDw9IHNwYWNlc2hpcC5tYXhTcGVlZCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkICs9IDU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQtLTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFs0MF0pIHtcclxuICAgICAgICAvL0Rvd24gQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkIC09IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobWFwWzMyXSkge1xyXG4gICAgICAgIHN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNwYWNlc2hpcCgpIHtcclxuICAgIHRoaXMud2lkdGggPSA1MDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gNTA7XHJcbiAgICB0aGlzLnNoaWVsZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yYW5nZSA9IDgwO1xyXG4gICAgdGhpcy5jYW5ub24gPSB7XHJcbiAgICAgIHg6IHRoaXMud2lkdGggLyAyIC0gNC41LFxyXG4gICAgICB5OiB0aGlzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAqIDAuMDc4MTI1LFxyXG4gICAgfTtcclxuICAgIHRoaXMuY29vbGRvd24gPSAwO1xyXG4gICAgdGhpcy5jb29sZG93blRpbWUgPSAyMDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbY2FudmFzLndpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0IC8gMl07XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvc3BhY2VzaGlwLnBuZ1wiO1xyXG4gICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB0aGlzLm1heFNwZWVkID0gMTAwMDtcclxuICAgIHRoaXMuYW5nbGUgPSAwO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcblxyXG4gICAgdGhpcy5zaG9vdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5jb29sZG93biA9IHRoaXMuY29vbGRvd25UaW1lO1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBzaG90c1tpZF0gPSBuZXcgU2hvdChpZCwgdGhpcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHRoaXMuc2hpZWxkKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5hcmModGhpcy5wb3NpdGlvblswXSArIHRoaXMud2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uWzFdICsgdGhpcy5oZWlnaHQgLyAyLCAzMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigzNSwgMjM3LCA4NiwgMC41KVwiO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiKDY2LCAxNjgsIDM2LCAwLjgpXCI7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICB2YXIgYXN0ZXJvaWQgPSBhc3Rlcm9pZHNbaV07XHJcbiAgICAgICAgaWYgKGhpdChhc3Rlcm9pZCwgdGhpcykpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNoaWVsZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBhc3Rlcm9pZC5leHBsb2RlKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2FtZU92ZXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmdsZSA9IHRoaXMucm90YXRpb247XHJcbiAgICAgIGlmICh0aGlzLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgIHRoaXMuY29vbGRvd24tLTtcclxuICAgICAgfVxyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNob3QoaWQsIHNwYWNlc2hpcCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzBdICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnggK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueCAqIE1hdGguY29zKCgoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSkgLyAxODApLFxyXG4gICAgICBzcGFjZXNoaXAucG9zaXRpb25bMV0gK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueSArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi55ICogTWF0aC5zaW4oKChzcGFjZXNoaXAucm90YXRpb24gLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCksXHJcbiAgICBdO1xyXG4gICAgdGhpcy53aWR0aCA9IDk7XHJcbiAgICB0aGlzLmhlaWdodCA9IDE1O1xyXG4gICAgdGhpcy5hbmdsZSA9IHNwYWNlc2hpcC5hbmdsZTtcclxuICAgIHRoaXMucm90YXRpb24gPSBzcGFjZXNoaXAucm90YXRpb247XHJcbiAgICB0aGlzLnNwZWVkID0gc3BhY2VzaGlwLnNwZWVkICsgNTAwO1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IHNwYWNlc2hpcC5yYW5nZTtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBcImFzdGVyb2lkcy9zaG90LnBuZ1wiO1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEFzdGVyb2lkKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLndpZHRoID0gTWF0aC5yYW5kb20oKSAqIDUwICsgMjA7XHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMud2lkdGg7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RW50cnlQb3NpdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5yb3RhdGlvblNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDYgLSAzO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAzMDAgKyAyO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL2FzdGVyb2lkXCIgKyAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNikgKyAxKSArIFwiLnBuZ1wiO1xyXG5cclxuICAgIHRoaXMuZXhwbG9kZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgZXhwbG9zaW9uc1t0aGlzLmlkXSA9IG5ldyBFeHBsb3Npb24odGhpcyk7XHJcbiAgICAgIHJldHVybiBkZWxldGUgYXN0ZXJvaWRzW3RoaXMuaWRdO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xyXG4gICAgICBpZiAodGhpcy5yb3RhdGlvbiA+IDM2MCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSB0aGlzLnJvdGF0aW9uIC0gMzYwO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucm90YXRpb24gPCAwKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDM2MCArIHRoaXMucm90YXRpb247XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSBpbiBzaG90cykge1xyXG4gICAgICAgIHZhciBzaG90ID0gc2hvdHNbaV07XHJcbiAgICAgICAgaWYgKGhpdChzaG90LCB0aGlzKSkge1xyXG4gICAgICAgICAgdGhpcy5leHBsb2RlKCk7XHJcbiAgICAgICAgICB2YXIgcG9pbnRzID0gTWF0aC5mbG9vcigoc2hvdC5zcGVlZCAtIDUwMCkgLyAxMCArIDcwIC0gdGhpcy53aWR0aCk7XHJcbiAgICAgICAgICBpZiAoTWF0aC5mbG9vcigocG9pbnRzICsgJHNjb3BlLnNjb3JlKSAvIDEwMCkgPiBNYXRoLmZsb29yKCRzY29wZS5zY29yZSAvIDEwMCkpIHtcclxuICAgICAgICAgICAgc3Bhd25Qb3dlcnVwKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkc2NvcGUuc2NvcmUgKz0gcG9pbnRzO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgZGVsZXRlIHNob3RzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEV4cGxvc2lvbihvYmplY3QpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbb2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV1dO1xyXG4gICAgdGhpcy53aWR0aCA9IG9iamVjdC53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gb2JqZWN0LmhlaWdodDtcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLmN5Y2xlID0ge1xyXG4gICAgICByb3dzOiA2LFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICBzaXplOiBbMjU2LCAyNTZdLFxyXG4gICAgICBpOiAwLFxyXG4gICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDQ3O1xyXG4gICAgdGhpcy5pbWcgPSBleHBsb3Npb25JbWFnZTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBQb3dlcnVwKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvd2VydXAgPSBwb3dlcnVwVHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG93ZXJ1cFR5cGVzLmxlbmd0aCldO1xyXG4gICAgdGhpcy5jeWNsZSA9IHRoaXMucG93ZXJ1cC5jeWNsZTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAxMDAwO1xyXG4gICAgaWYgKHRoaXMuY3ljbGUuc2l6ZVsxXSA+IHRoaXMuY3ljbGUuc2l6ZVswXSkge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IDQwO1xyXG4gICAgICB0aGlzLndpZHRoID0gTWF0aC5yb3VuZCgodGhpcy5oZWlnaHQgLyB0aGlzLmN5Y2xlLnNpemVbMV0pICogdGhpcy5jeWNsZS5zaXplWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSA0MDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLnJvdW5kKCh0aGlzLndpZHRoIC8gdGhpcy5jeWNsZS5zaXplWzBdKSAqIHRoaXMuY3ljbGUuc2l6ZVsxXSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RW50cnlQb3NpdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmltZyA9IHRoaXMucG93ZXJ1cC5pbWc7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMTUwICsgNTA7XHJcbiAgICB2YXIgZGVsYXkgPSA1O1xyXG4gICAgdGhpcy5tb3ZlID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBwb3dlcnVwc1t0aGlzLmlkXTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaGl0KHNwYWNlc2hpcCwgdGhpcykpIHtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2UgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5hbm5vdW5jZW1lbnQgPSB0aGlzLnBvd2VydXAuYW5ub3VuY2VtZW50O1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5hbm5vdW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHRoaXMucG93ZXJ1cC5hY3RpdmF0ZShzcGFjZXNoaXApO1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAoZGVsYXkgPD0gMCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxheSA9IDU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsYXktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmUob2JqZWN0KSB7XHJcbiAgICBvYmplY3QucG9zaXRpb25bMF0gKz0gKG9iamVjdC5zcGVlZCAvIDEwMCkgKiBNYXRoLmNvcygoKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIG9iamVjdC5wb3NpdGlvblsxXSArPSAob2JqZWN0LnNwZWVkIC8gMTAwKSAqIE1hdGguc2luKCgob2JqZWN0LmFuZ2xlIC0gOTApICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgaWYgKG9iamVjdC5wb3NpdGlvblswXSA+IGNhbnZhcy53aWR0aCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMF0gPSAtb2JqZWN0LndpZHRoO1xyXG4gICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMF0gPCAtb2JqZWN0LndpZHRoKSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IGNhbnZhcy53aWR0aDtcclxuICAgIH1cclxuICAgIGlmIChvYmplY3QucG9zaXRpb25bMV0gPiBjYW52YXMuaGVpZ2h0KSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblsxXSA9IC1vYmplY3QuaGVpZ2h0O1xyXG4gICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMV0gPCAtb2JqZWN0LmhlaWdodCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMV0gPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV0pO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShvYmplY3Qud2lkdGggLyAyLCBvYmplY3QuaGVpZ2h0IC8gMik7XHJcbiAgICBjdHgucm90YXRlKChvYmplY3Qucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBpZiAob2JqZWN0LmN5Y2xlKSB7XHJcbiAgICAgIHZhciBjb2x1bW4gPSBvYmplY3QuY3ljbGUuaSAlIG9iamVjdC5jeWNsZS5jb2x1bW5zO1xyXG4gICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcihvYmplY3QuY3ljbGUuaSAvIG9iamVjdC5jeWNsZS5jb2x1bW5zKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICBvYmplY3QuaW1nLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzBdICogY29sdW1uLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzFdICogcm93LFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzBdLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzFdLFxyXG4gICAgICAgIC1vYmplY3Qud2lkdGggLyAyLFxyXG4gICAgICAgIC1vYmplY3QuaGVpZ2h0IC8gMixcclxuICAgICAgICBvYmplY3Qud2lkdGgsXHJcbiAgICAgICAgb2JqZWN0LmhlaWdodCxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChvYmplY3QuY3ljbGUuaSA8PSAwKSB7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSAwO1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKG9iamVjdC5jeWNsZS5pID49IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MpIHtcclxuICAgICAgICBvYmplY3QuY3ljbGUuaSA9IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MgLSAxO1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3R4LmRyYXdJbWFnZShvYmplY3QuaW1nLCAtb2JqZWN0LndpZHRoIC8gMiwgLW9iamVjdC5oZWlnaHQgLyAyLCBvYmplY3Qud2lkdGgsIG9iamVjdC5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHZhciBzcGFjZXNoaXA7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIHNwYWNlc2hpcCA9IG5ldyBTcGFjZXNoaXAoKTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgIGF1dG9TcGF3bigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RW50cnlQb3NpdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB2YXIgZ3JpZFggPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciBncmlkWSA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIHgsXHJcbiAgICAgIHkgPSAwO1xyXG4gICAgaWYgKGdyaWRYID49IDEpIHtcclxuICAgICAgeCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XHJcbiAgICAgIGlmICh5ID49IDEpIHtcclxuICAgICAgICB5ID0gMCAtIGhlaWdodDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeSA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICBpZiAoZ3JpZFkgPj0gMSkge1xyXG4gICAgICAgIHggPSAwIC0gd2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFt4LCB5XTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpdChvYmplY3QxLCBvYmplY3QyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBvYmplY3QxLnBvc2l0aW9uWzBdIDwgb2JqZWN0Mi5wb3NpdGlvblswXSArIG9iamVjdDIud2lkdGggJiZcclxuICAgICAgb2JqZWN0Mi5wb3NpdGlvblswXSA8IG9iamVjdDEucG9zaXRpb25bMF0gKyBvYmplY3QxLndpZHRoICYmXHJcbiAgICAgIG9iamVjdDEucG9zaXRpb25bMV0gPCBvYmplY3QyLnBvc2l0aW9uWzFdICsgb2JqZWN0Mi5oZWlnaHQgJiZcclxuICAgICAgb2JqZWN0Mi5wb3NpdGlvblsxXSA8IG9iamVjdDEucG9zaXRpb25bMV0gKyBvYmplY3QxLmhlaWdodFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGF1dG9TcGF3bigpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhhc3Rlcm9pZHMpLmxlbmd0aCA8IDIwMCkge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH1cclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhdXRvU3Bhd24oKTtcclxuICAgICAgfSwgc3Bhd25JbnRlcnZhbCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduSW50ZXJ2YWwoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnNjb3JlIDwgMTAwMCkge1xyXG4gICAgICByZXR1cm4gMTAwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgMjAwMCkge1xyXG4gICAgICByZXR1cm4gOTAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCAzMDAwKSB7XHJcbiAgICAgIHJldHVybiA4MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDQwMDApIHtcclxuICAgICAgcmV0dXJuIDcwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNTAwMCkge1xyXG4gICAgICByZXR1cm4gNjAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA2MDAwKSB7XHJcbiAgICAgIHJldHVybiA1MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDcwMDApIHtcclxuICAgICAgcmV0dXJuIDQwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgODAwMCkge1xyXG4gICAgICByZXR1cm4gMzAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDIwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduQXN0ZXJvaWRzKGFtb3VudCkge1xyXG4gICAgdmFyIGkgPSAwO1xyXG4gICAgZG8ge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH0gd2hpbGUgKGkrKyA8PSBhbW91bnQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25Qb3dlcnVwKCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHBvd2VydXBzKS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIHBvd2VydXBzW2lkXSA9IG5ldyBQb3dlcnVwKGlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdhbWVPdmVyKCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgIGFzdGVyb2lkc1tpXS5leHBsb2RlKCk7XHJcbiAgICB9XHJcbiAgICBzaG90cyA9IHt9O1xyXG4gICAgaWYgKCRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmhpZ2hzY29yZS5hc3Rlcm9pZHMgPCAkc2NvcGUuc2NvcmUpIHtcclxuICAgICAgICAkc2NvcGUuY3VycmVudFVzZXIuaGlnaHNjb3JlLmFzdGVyb2lkcyA9ICRzY29wZS5zY29yZTtcclxuICAgICAgICBHYW1lU3ZjLnNldEhpZ2hzY29yZShcImFzdGVyb2lkc1wiLCAkc2NvcGUuY3VycmVudFVzZXIuX2lkLCAkc2NvcGUuc2NvcmUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hzY29yZSA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5oaWdoc2NvcmUgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG4gIC8vIGRyYXcgY2FudmFzLlxyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgLy8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuICAgIC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG4gICAgLy8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuICAgIHJlc2l6ZUNhbnZhcygpO1xyXG4gIH1cclxuICAvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcbiAgLy8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcbiAgLy8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcbiAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSAxO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTAgOiA1OSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplKCk7XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG5cclxuICB2YXIgdGFsbHkgPSAwO1xyXG4gIHZhciBkaXJlY3Rpb24gPSB0cnVlO1xyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgZm9yICh2YXIgaSBpbiBzaG90cykge1xyXG4gICAgICBpZiAoc2hvdHNbaV0ubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBzaG90c1tpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG90c1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgYXN0ZXJvaWRzW2ldLm1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBwb3dlcnVwcykge1xyXG4gICAgICBwb3dlcnVwc1tpXS5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gZXhwbG9zaW9ucykge1xyXG4gICAgICBpZiAoZXhwbG9zaW9uc1tpXS5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIGV4cGxvc2lvbnNbaV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXhwbG9zaW9uc1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGV2YWx1YXRlS2V5cygpO1xyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIHNwYWNlc2hpcC5tb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgY2FudmFzLndpZHRoLCAwKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMFwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjAuMjVcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjVcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjc1XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMS4wXCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgICBjdHguZm9udCA9IFwiNjBweCBNb25vdG9uXCI7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcIkFzdGVyb2lkc1wiLCBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KFwiQXN0ZXJvaWRzXCIpLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpO1xyXG4gICAgICBjdHguZm9udCA9IFwiMjBweCBBbGRyaWNoXCI7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICBcIlByZXNzIHNwYWNlIHRvIHN0YXJ0XCIsXHJcbiAgICAgICAgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIlByZXNzIHNwYWNlIHRvIHN0YXJ0XCIpLndpZHRoIC8gMixcclxuICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMiArIDIwLFxyXG4gICAgICApO1xyXG4gICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgXCJEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5IExhdXJlbnQgRGViYWNrZXJcIixcclxuICAgICAgICBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KFwiRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyXCIpLndpZHRoIC8gMixcclxuICAgICAgICBjYW52YXMuaGVpZ2h0IC0gMzAsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0YWxseSArPSBkaXJlY3Rpb24gPyAxIDogLTE7XHJcbiAgICBpZiAodGFsbHkgPiAxMDApIHtcclxuICAgICAgdGFsbHkgPSAxMDA7XHJcbiAgICAgIGRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICh0YWxseSA8IDApIHtcclxuICAgICAgdGFsbHkgPSAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLnNwYWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiYXN0ZXJvaWRzL3NwYWNlJyArIHNwYWNlICsgJy5qcGdcIiknLFxyXG4gICAgfTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkJ1YmJsZXNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWJibGVzLXBhZ2VcIik7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgdmFyIGJ1YmJsZXMgPSBbXTtcclxuICB2YXIgY29sb3JzID0gW1wiI2ZmYzMwMFwiLCBcIiNmZjU3MzNcIiwgXCIjYzcwMDM5XCIsIFwiIzkwMGMzZVwiLCBcIiM1NzE4NDVcIl07XHJcblxyXG4gIGZ1bmN0aW9uIEJ1YmJsZSgpIHtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAwO1xyXG4gICAgdGhpcy5yYWRpdXMgPSAxO1xyXG4gICAgdGhpcy5leHBhbmRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgdGhpcy5jaXJjdW1mZXJlbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNTApICsgNTtcclxuICAgIHRoaXMubWF4UmFkaXVzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjAwKSArIDIwO1xyXG4gICAgdGhpcy54ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoKTtcclxuICAgIHRoaXMueSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGhpcy52eCA9IE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xO1xyXG4gICAgdGhpcy52eSA9IE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGJ1YmJsZXMuZm9yRWFjaChmdW5jdGlvbiAoYnViYmxlKSB7XHJcbiAgICAgIHZhciBjb2xvciA9IGNvbG9yc1tNYXRoLnJvdW5kKChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cykgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyhidWJibGUueCwgYnViYmxlLnksIGJ1YmJsZS5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yc1tNYXRoLnJvdW5kKChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cykgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1tjb2xvcnMubGVuZ3RoIC0gTWF0aC5yb3VuZCgoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMpIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gKGJ1YmJsZS5jaXJjdW1mZXJlbmNlICogYnViYmxlLnJhZGl1cykgLyBidWJibGUubWF4UmFkaXVzO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbHRlckJ1YmJsZXMoKSB7XHJcbiAgICBidWJibGVzLnB1c2gobmV3IEJ1YmJsZSgpKTtcclxuICAgIGJ1YmJsZXMgPSBidWJibGVzLmZpbHRlcihmdW5jdGlvbiAoYnViYmxlKSB7XHJcbiAgICAgIGlmIChidWJibGUucmFkaXVzID09PSBidWJibGUubWF4UmFkaXVzKSB7XHJcbiAgICAgICAgYnViYmxlLmV4cGFuZGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1YmJsZS54ICs9IGJ1YmJsZS52eCAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnkgKz0gYnViYmxlLnZ5ICogYnViYmxlLnNwZWVkO1xyXG4gICAgICBidWJibGUucmFkaXVzICs9IGJ1YmJsZS5leHBhbmRpbmcgPyAxIDogLTE7XHJcbiAgICAgIHJldHVybiBidWJibGUucmFkaXVzID4gMDtcclxuICAgIH0pO1xyXG4gICAgZHJhdygpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG5cclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gU3RhcnQgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgYW5kXHJcbiAgICAvLyBkcmF3IGNhbnZhcy5cclxuICAgIGluaXRpYWxpemUoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgICAvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG4gICAgICAvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuICAgICAgLy8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcbiAgICAgIC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcbiAgICAgIHJlc2l6ZUNhbnZhcygpO1xyXG4gICAgfVxyXG4gICAgLy8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG4gICAgLy8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcbiAgICAvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuICAgIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDU1IDogNTYpO1xyXG4gICAgfVxyXG4gIH0pKCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQ2hhcmFkZXNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAkc2NvcGUuc2VsZWN0V29yZCA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgJHNjb3BlLndvcmQgPSAkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICRzY29wZS5jaGFyYWRlc1tjYXRlZ29yeV0ubGVuZ3RoKV07XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJDb250YWN0Q3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBFbWFpbFN2Yykge1xyXG4gICRzY29wZS5vcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNwYW1cIixcclxuICAgICAgdGV4dDogXCJJIGFtIGEgc3BhbSBib3QgYW5kIGF1dG9tYXRpY2FsbHkgY2hlY2sgdGhlIGZpcnN0IG9wdGlvbiBJIGZpbmQhXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk9wcG9ydHVuaXR5XCIsXHJcbiAgICAgIHRleHQ6IFwiWW91IHNlZW0gdG8gaGF2ZSB0aGUgc2tpbGxzIEkgc2VlaywgSSdkIGxpa2UgdG8gdGFsayBhYm91dCBzb21lIG9wcG9ydHVuaXRpZXMuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJlc3VtZVwiLFxyXG4gICAgICB0ZXh0OiBcIkkgZGlnIHRoZSByZXN1bWUsIGhvdyBkaWQgeW91IG1ha2UgaXQ/XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk90aGVyXCIsXHJcbiAgICAgIHRleHQ6IFwiU3VtdGluIGVsc2UhXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gICRzY29wZS5jb250YWN0ID0ge1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgICBhYm91dDogXCJcIixcclxuICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUuc2VuZGluZyA9IHRydWU7XHJcbiAgICBFbWFpbFN2Yy5zZW5kKHtcclxuICAgICAgZW1haWw6ICRzY29wZS5jb250YWN0LmVtYWlsLFxyXG4gICAgICBuYW1lOiAkc2NvcGUuY29udGFjdC5uYW1lLFxyXG4gICAgICBwaG9uZTogJHNjb3BlLmNvbnRhY3QucGhvbmUsXHJcbiAgICAgIGFib3V0OiAkc2NvcGUuY29udGFjdC5hYm91dCxcclxuICAgICAgbWVzc2FnZTogJHNjb3BlLmNvbnRhY3QubWVzc2FnZSxcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5zZW50ID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1MuIHN0YXR1cz0lZCwgdGV4dD0lc1wiLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICRzY29wZS5zZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGQUlMRUQuIGVycm9yPVwiLCBlcnIpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdFeHBlcmllbmNlQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLmdldFNraWxsID0gZnVuY3Rpb24oc2tpbGxDb2RlKSB7XHJcbiAgICBpZiAoISRzY29wZS5za2lsbHMpIHJldHVybjtcclxuICAgIHJldHVybiAkc2NvcGUuc2tpbGxzLmZpbmQoZnVuY3Rpb24oc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIHNraWxsLmNvZGUgPT09IHNraWxsQ29kZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdIb2JiaWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR3aW5kb3cpIHtcclxuXHJcbiAgJHNjb3BlLmhvYmJ5U2VsZWN0b3JWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICQuZ2V0SlNPTignaHR0cHM6Ly93d3cucmVkZGl0LmNvbS91c2VyL2JlbGdvY2FuYWRpYW4vYWJvdXQvLmpzb24nLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gJHNjb3BlLmhvYmJpZXNbMF07XHJcblxyXG4gICRzY29wZS5zZWxlY3RIb2JieSA9IGZ1bmN0aW9uIChob2JieSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkSG9iYnkgPSBob2JieTtcclxuICAgICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zaG93SG9iYnkgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnJheSkge1xyXG4gICAgaWYgKCF2YWx1ZS5pbWFnZXMpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB2YWx1ZS5pbWFnZXMubGVuZ3RoID4gMDtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMZW1taW5nc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBHYW1lU3ZjKSB7XHJcblxyXG4gIHZhciBMRUZUID0gMDtcclxuICB2YXIgUklHSFQgPSAxO1xyXG5cclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlbW1pbmdzLXBhZ2UnKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgdmFyIGxlbW1pbmdzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBsZW1taW5nc0ltYWdlLnNyYyA9ICdsZW1taW5ncy9sZW1taW5ncy5wbmcnO1xyXG4gIHZhciBkZWNvckltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgZGVjb3JJbWFnZS5zcmMgPSAnbGVtbWluZ3MvZGVjb3IucG5nJztcclxuICB2YXIgbGVtbWluZ3MgPSB7fTtcclxuICB2YXIgc3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICB2YXIgYWN0aW9ucyA9IHtcclxuICAgIHdhbGs6IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbMzIwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgaHVoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMzIwLCAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IHRydWVcclxuICAgIH0sXHJcbiAgICBmYWxsOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgODBdLFxyXG4gICAgICBlbmQ6IFsxNjAsIDEwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZmx5OiB7XHJcbiAgICAgIHN0YXJ0OiBbMTYwLCA4MF0sXHJcbiAgICAgIGVuZDogWzQ4MCwgMTEwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzdG9wOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMTIwXSxcclxuICAgICAgZW5kOiBbNjQwLCAxNDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBjbGltYjoge1xyXG4gICAgICBzdGFydDogWzAsIDE2MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTg1XSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgc3RhcnQ6IFswLCAyMDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDIyNV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHB1bmNoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjQwXSxcclxuICAgICAgZW5kOiBbNjQwLCAzMDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMixcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBkaWc6IHtcclxuICAgICAgc3RhcnQ6IFswLCAzMjBdLFxyXG4gICAgICBlbmQ6IFszMjAsIDM0NV0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIExlbW1pbmcoaW5pdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLndpZHRoIC0gMjAwKSkgKyAxMDAsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjYW52YXMuaGVpZ2h0IC0gMjAwKSkgKyAxMDBdO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogMiA+IDEgPyBMRUZUIDogUklHSFQ7XHJcbiAgICB0aGlzLmFjdCA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbnNbYWN0aW9uXTtcclxuICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgdGhpcy5oZWlnaHQgPSAodGhpcy5hY3Rpb24uZW5kWzFdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAoMjAgKiAodGhpcy5hY3Rpb24ucm93cyAtIDEpKSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5hY3QoaW5pdCk7XHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBMRUZUKSB7XHJcbiAgICAgICAgY3R4LnNjYWxlKC0xLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHZhciByb3cgPSBNYXRoLmZsb29yKHRoaXMuY3ljbGUgLyB0aGlzLmFjdGlvbi5jb2x1bW5zKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZShsZW1taW5nc0ltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKCh0aGlzLmhlaWdodCArIDIwKSAqIHJvdykgKyB0aGlzLmFjdGlvbi5zdGFydFsxXSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICBpZiAodGhpcy5hY3Rpb24ucmV2ZXJzZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPj0gdGhpcy5hY3Rpb24uY29sdW1ucyAqIHRoaXMuYWN0aW9uLnJvd3MpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSAhdGhpcy5hbmltYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS0tO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBIYXRjaCgpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbMjAsIDIwXTtcclxuICAgIHRoaXMuYWN0aW9uID0ge1xyXG4gICAgICBzdGFydDogWzAsIDBdLFxyXG4gICAgICBlbmQ6IFs4MiwgNTAwXSxcclxuICAgICAgY29sdW1uczogMSxcclxuICAgICAgcm93czogMTBcclxuICAgIH1cclxuICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdKSAvIHRoaXMuYWN0aW9uLnJvd3M7XHJcbiAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgIHRoaXMub3BlbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25bMF0sIHRoaXMucG9zaXRpb25bMV0pO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICB2YXIgY29sdW1uLCByb3c7XHJcbiAgICAgIGlmIChzdGFydGVkKSB7XHJcbiAgICAgICAgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgICAgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCA5KSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbHVtbiA9IDA7XHJcbiAgICAgICAgcm93ID0gMDtcclxuICAgICAgfVxyXG4gICAgICBjdHguZHJhd0ltYWdlKGRlY29ySW1hZ2UsICh0aGlzLndpZHRoICogY29sdW1uKSArIHRoaXMuYWN0aW9uLnN0YXJ0WzBdLCAodGhpcy5oZWlnaHQgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAxLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkxlbW1pbmcoKSB7XHJcbiAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICBsZW1taW5nc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApXSA9IG5ldyBMZW1taW5nKGFjdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHQvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG5cdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHQvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblx0XHQvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG5cdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0fVxyXG5cdC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuXHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcblx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogMTA1KTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxuICBzcGF3bkxlbW1pbmcoKTtcclxuICBsZXQgaGF0Y2ggPSBuZXcgSGF0Y2goKVxyXG4gIGRyYXcoKTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGlmICghc3RhcnRlZCkge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5mb250PSc0MHB4IE1vbm90b24nO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gJzEwJztcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xyXG4gICAgICBjdHgucmVjdCgxNSwgY2FudmFzLmhlaWdodCAtIDQ1LCBjdHgubWVhc3VyZVRleHQoJ1N0YXJ0Jykud2lkdGggKyAyMCwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLmhlaWdodCArIGNhbnZhcy5oZWlnaHQgLSA0NSk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnU3RhcnQnLCAyMCwgY2FudmFzLmhlaWdodCAtIDUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAodmFyIGkgaW4gbGVtbWluZ3MpIHtcclxuICAgICAgICBsZW1taW5nc1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGhhdGNoLm9wZW4oKTtcclxuICAgIHN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgZHJhdygpO1xyXG4gICAgfSwgMTUwKTtcclxuICB9XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xpc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgQ2F0ZWdvcmllc1N2Yykge1xyXG5cclxuICAkc2NvcGUuc2hvd0NhdGVnb3J5ID0gdHJ1ZTtcclxuXHJcbiAgJHNjb3BlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLmdldENhdGVnb3JpZXMoKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgJHNjb3BlLnRhc2tzID0gW107XHJcbiAgICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICBmb3IgKHZhciBqIGluICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzKSB7XHJcbiAgICAgICAgICAkc2NvcGUudGFza3MucHVzaCh7XHJcbiAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSxcclxuICAgICAgICAgICAgXCJ0YXNrXCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzW2pdLm5hbWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdENhdGVnb3J5ID0gZnVuY3Rpb24oY2F0ZWdvcnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRUYXNrcyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLnB1c2goJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY2F0ZWdvcmllc1tpXS5uYW1lID09PSBjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeSgkc2NvcGUuY2F0ZWdvcmllc1tpXSk7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuYWRkQ2F0ZWdvcnkoe1xyXG4gICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5pbml0KCk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZENhdGVnb3J5ID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLm5ld1Rhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXS5uYW1lID09PSB0YXNrKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSwge1xyXG4gICAgICAgIHRhc2s6IHRhc2tcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MucHVzaCh7IG5hbWU6IHRhc2sgfSk7XHJcbiAgICAgICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzWyRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5lbnRlcmVkVGFzayA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS51bnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmFkZFRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3QucHVzaCh0YXNrKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUucmVtb3ZlVGFzayA9IGZ1bmN0aW9uKHRhc2tMaXN0LCB0YXNrKSB7XHJcbiAgICB0YXNrTGlzdC5zcGxpY2UodGFza0xpc3QuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnN0YXJ0UHJpb3JpdGl6aW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLnNldFByaW9yaXR5TGlzdCgkc2NvcGUuc2VsZWN0ZWRUYXNrcyk7XHJcbiAgICAkbG9jYXRpb24ucGF0aCgnL3ByaW9yaXRpemUnKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0UXVlc3Rpb25zID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoISRzY29wZS5zZWxlY3RlZFRhc2tzKSByZXR1cm4gJyc7XHJcbiAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gJHNjb3BlLnNlbGVjdGVkVGFza3MubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICBjb3VudGVyICs9IGk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY291bnRlcjtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFVzZXJTdmMpIHtcclxuICAvLyBJbml0aWFsaXplIHRoZSBGaXJlYmFzZVVJIFdpZGdldCB1c2luZyBGaXJlYmFzZS5cclxuICB2YXIgdWkgPSBuZXcgZmlyZWJhc2V1aS5hdXRoLkF1dGhVSShmaXJlYmFzZS5hdXRoKCkpO1xyXG5cclxuICAkc2NvcGUuJG9uKCdsb2dvdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHVpLnJlc2V0KCk7XHJcbiAgICBzdGFydFVJKCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0VUkoKSB7XHJcbiAgICB1aS5zdGFydCgnI2ZpcmViYXNldWktYXV0aC1jb250YWluZXInLCB7XHJcbiAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgIHNpZ25JblN1Y2Nlc3M6IGZ1bmN0aW9uIChjdXJyZW50VXNlciwgY3JlZGVudGlhbCwgcmVkaXJlY3RVcmwpIHtcclxuICAgICAgICAgIC8vIE5vIHJlZGlyZWN0LlxyXG4gICAgICAgICAgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmF1dGgoKVxyXG4gICAgICAgICAgICAuY3VycmVudFVzZXIuZ2V0SWRUb2tlbih0cnVlKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoaWRUb2tlbikge1xyXG4gICAgICAgICAgICAgIFVzZXJTdmMuYXV0aGVudGljYXRlKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBjdXJyZW50VXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBjdXJyZW50VXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHBob3RvVVJMOiBjdXJyZW50VXNlci5waG90b1VSTCxcclxuICAgICAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IGN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQsXHJcbiAgICAgICAgICAgICAgICBpZFRva2VuOiBpZFRva2VuLFxyXG4gICAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KCdsb2dpbicsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcjbW9kYWwtbG9naW4nKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAvLyRsb2NhdGlvbi5wYXRoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoJ3BvcHVwJywge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdMb2dpbiBGYWlsZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhbGVydC1kYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIHNpZ25JbkZhaWx1cmUgY2FsbGJhY2sgbXVzdCBiZSBwcm92aWRlZCB0byBoYW5kbGUgbWVyZ2UgY29uZmxpY3RzIHdoaWNoXHJcbiAgICAgICAgLy8gb2NjdXIgd2hlbiBhbiBleGlzdGluZyBjcmVkZW50aWFsIGlzIGxpbmtlZCB0byBhbiBhbm9ueW1vdXMgdXNlci5cclxuICAgICAgICBzaWduSW5GYWlsdXJlOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgIC8vIEZvciBtZXJnZSBjb25mbGljdHMsIHRoZSBlcnJvci5jb2RlIHdpbGwgYmVcclxuICAgICAgICAgIC8vICdmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0Jy5cclxuICAgICAgICAgIGlmIChlcnJvci5jb2RlICE9ICdmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBUaGUgY3JlZGVudGlhbCB0aGUgdXNlciB0cmllZCB0byBzaWduIGluIHdpdGguXHJcbiAgICAgICAgICB2YXIgY3JlZCA9IGVycm9yLmNyZWRlbnRpYWw7XHJcbiAgICAgICAgICAvLyBDb3B5IGRhdGEgZnJvbSBhbm9ueW1vdXMgdXNlciB0byBwZXJtYW5lbnQgdXNlciBhbmQgZGVsZXRlIGFub255bW91c1xyXG4gICAgICAgICAgLy8gdXNlci5cclxuICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgLy8gRmluaXNoIHNpZ24taW4gYWZ0ZXIgZGF0YSBpcyBjb3BpZWQuXHJcbiAgICAgICAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhDcmVkZW50aWFsKGNyZWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdWlTaG93bjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy8gVGhlIHdpZGdldCBpcyByZW5kZXJlZC5cclxuICAgICAgICAgIC8vIEhpZGUgdGhlIGxvYWRlci5cclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpZ25JblN1Y2Nlc3NVcmw6ICcvaG9tZScsXHJcbiAgICAgIHNpZ25Jbk9wdGlvbnM6IFtcclxuICAgICAgICAvL2ZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgXSxcclxuXHJcbiAgICAgIC8vIFdpbGwgdXNlIHBvcHVwIGZvciBJRFAgUHJvdmlkZXJzIHNpZ24taW4gZmxvdyBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0LCByZWRpcmVjdC5cclxuICAgICAgc2lnbkluRmxvdzogJ3BvcHVwJyxcclxuICAgICAgLy8gT3RoZXIgY29uZmlnIG9wdGlvbnMuLi5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRVSSgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkZmlsdGVyLCBQb3N0c1N2Yykge1xyXG5cclxuICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkc2NvcGUucG9zdEJvZHkpIHtcclxuICAgICAgUG9zdHNTdmMuY3JlYXRlKHtcclxuICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBvc3RzU3ZjLmZldGNoKClcclxuICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5wb3N0cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oJ3dzOm5ld19wb3N0JywgZnVuY3Rpb24gKF8sIHBvc3QpIHtcclxuICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICBQb3N0c1N2Yy5nZXRQb3N0KHBvc3QpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5wb3N0cy51bnNoaWZ0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJQcm9maWxlQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFVzZXJTdmMpIHtcclxuICBjb25zdCBjb3VudHJpZXMgPSBbXHJcbiAgICB7IG5hbWU6IFwiQW5kb3JyYVwiLCBmbGFnOiBcImZsYWctYWRcIiwgdGlkYml0OiBcIlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIiwgZmxhZzogXCJmbGFnLWFlXCIgfSxcclxuICAgIHsgbmFtZTogXCJBZmdoYW5pc3RhblwiLCBmbGFnOiBcImZsYWctYWZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIiwgZmxhZzogXCJmbGFnLWFnXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbmd1aWxsYVwiLCBmbGFnOiBcImZsYWctYWlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFsYmFuaWFcIiwgZmxhZzogXCJmbGFnLWFsXCIgfSxcclxuICAgIHsgbmFtZTogXCJBcm1lbmlhXCIsIGZsYWc6IFwiZmxhZy1hbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW5nb2xhXCIsIGZsYWc6IFwiZmxhZy1hb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW50YXJjdGljYVwiLCBmbGFnOiBcImZsYWctYXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFyZ2VudGluYVwiLCBmbGFnOiBcImZsYWctYXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFtZXJpY2FuIFNvbW9hXCIsIGZsYWc6IFwiZmxhZy1hc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXVzdHJpYVwiLCBmbGFnOiBcImZsYWctYXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF1c3RyYWxpYVwiLCBmbGFnOiBcImZsYWctYXVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFydWJhXCIsIGZsYWc6IFwiZmxhZy1hd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiw4VsYW5kIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWF4XCIgfSxcclxuICAgIHsgbmFtZTogXCJBemVyYmFpamFuXCIsIGZsYWc6IFwiZmxhZy1helwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBmbGFnOiBcImZsYWctYmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhcmJhZG9zXCIsIGZsYWc6IFwiZmxhZy1iYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFuZ2xhZGVzaFwiLCBmbGFnOiBcImZsYWctYmRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGdpdW1cIiwgZmxhZzogXCJmbGFnLWJlXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdXJraW5hIEZhc29cIiwgZmxhZzogXCJmbGFnLWJmXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdWxnYXJpYVwiLCBmbGFnOiBcImZsYWctYmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhaHJhaW5cIiwgZmxhZzogXCJmbGFnLWJoXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdXJ1bmRpXCIsIGZsYWc6IFwiZmxhZy1iaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVuaW5cIiwgZmxhZzogXCJmbGFnLWJqXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBCYXJ0aMOpbGVteVwiLCBmbGFnOiBcImZsYWctYmxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlcm11ZGFcIiwgZmxhZzogXCJmbGFnLWJtXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcnVuZWkgXCIsIGZsYWc6IFwiZmxhZy1iblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9saXZpYSwgUGx1cmluYXRpb25hbCBTdGF0ZSBvZlwiLCBmbGFnOiBcImZsYWctYm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCIsIGZsYWc6IFwiZmxhZy1icVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJhemlsXCIsIGZsYWc6IFwiZmxhZy1iclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFoYW1hc1wiLCBmbGFnOiBcImZsYWctYnNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJodXRhblwiLCBmbGFnOiBcImZsYWctYnRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvdXZldCBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLWJ2XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3Rzd2FuYVwiLCBmbGFnOiBcImZsYWctYndcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGFydXNcIiwgZmxhZzogXCJmbGFnLWJ5XCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxpemVcIiwgZmxhZzogXCJmbGFnLWJ6XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW5hZGFcIiwgZmxhZzogXCJmbGFnLWNhXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb2NvcyAoS2VlbGluZykgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctY2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbmdvLCB0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGVcIiwgZmxhZzogXCJmbGFnLWNkXCIgfSxcclxuICAgIHsgbmFtZTogXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWNmXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb25nb1wiLCBmbGFnOiBcImZsYWctY2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3aXR6ZXJsYW5kXCIsIGZsYWc6IFwiZmxhZy1jaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ8O0dGUgZCdJdm9pcmVcIiwgZmxhZzogXCJmbGFnLWNpXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb29rIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWNrXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGlsZVwiLCBmbGFnOiBcImZsYWctY2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbWVyb29uXCIsIGZsYWc6IFwiZmxhZy1jbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hpbmFcIiwgZmxhZzogXCJmbGFnLWNuXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb2xvbWJpYVwiLCBmbGFnOiBcImZsYWctY29cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvc3RhIFJpY2FcIiwgZmxhZzogXCJmbGFnLWNyXCIgfSxcclxuICAgIHsgbmFtZTogXCJDdWJhXCIsIGZsYWc6IFwiZmxhZy1jdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FibyBWZXJkZVwiLCBmbGFnOiBcImZsYWctY3ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN1cmHDp2FvXCIsIGZsYWc6IFwiZmxhZy1jd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hyaXN0bWFzIElzbGFuZFwiLCBmbGFnOiBcImZsYWctY3hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN5cHJ1c1wiLCBmbGFnOiBcImZsYWctY3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN6ZWNoIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1jelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2VybWFueVwiLCBmbGFnOiBcImZsYWctZGVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRqaWJvdXRpXCIsIGZsYWc6IFwiZmxhZy1kalwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGVubWFya1wiLCBmbGFnOiBcImZsYWctZGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRvbWluaWNhXCIsIGZsYWc6IFwiZmxhZy1kbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRG9taW5pY2FuIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1kb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWxnZXJpYVwiLCBmbGFnOiBcImZsYWctZHpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVjdWFkb3JcIiwgZmxhZzogXCJmbGFnLWVjXCIgfSxcclxuICAgIHsgbmFtZTogXCJFc3RvbmlhXCIsIGZsYWc6IFwiZmxhZy1lZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWd5cHRcIiwgZmxhZzogXCJmbGFnLWVnXCIgfSxcclxuICAgIHsgbmFtZTogXCJXZXN0ZXJuIFNhaGFyYVwiLCBmbGFnOiBcImZsYWctZWhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVyaXRyZWFcIiwgZmxhZzogXCJmbGFnLWVyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTcGFpblwiLCBmbGFnOiBcImZsYWctZXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkV0aGlvcGlhXCIsIGZsYWc6IFwiZmxhZy1ldFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmlubGFuZFwiLCBmbGFnOiBcImZsYWctZmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZpamlcIiwgZmxhZzogXCJmbGFnLWZqXCIgfSxcclxuICAgIHsgbmFtZTogXCJGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcylcIiwgZmxhZzogXCJmbGFnLWZrXCIgfSxcclxuICAgIHsgbmFtZTogXCJNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIG9mXCIsIGZsYWc6IFwiZmxhZy1mbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmFyb2UgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctZm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyYW5jZVwiLCBmbGFnOiBcImZsYWctZnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdhYm9uXCIsIGZsYWc6IFwiZmxhZy1nYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZFwiLCBmbGFnOiBcImZsYWctZ2JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZW5hZGFcIiwgZmxhZzogXCJmbGFnLWdkXCIgfSxcclxuICAgIHsgbmFtZTogXCJHZW9yZ2lhXCIsIGZsYWc6IFwiZmxhZy1nZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIEd1aWFuYVwiLCBmbGFnOiBcImZsYWctZ2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1ZXJuc2V5XCIsIGZsYWc6IFwiZmxhZy1nZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2hhbmFcIiwgZmxhZzogXCJmbGFnLWdoXCIgfSxcclxuICAgIHsgbmFtZTogXCJHaWJyYWx0YXJcIiwgZmxhZzogXCJmbGFnLWdpXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVlbmxhbmRcIiwgZmxhZzogXCJmbGFnLWdsXCIgfSxcclxuICAgIHsgbmFtZTogXCJHYW1iaWFcIiwgZmxhZzogXCJmbGFnLWdtXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWluZWFcIiwgZmxhZzogXCJmbGFnLWduXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWFkZWxvdXBlXCIsIGZsYWc6IFwiZmxhZy1ncFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXF1YXRvcmlhbCBHdWluZWFcIiwgZmxhZzogXCJmbGFnLWdxXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVlY2VcIiwgZmxhZzogXCJmbGFnLWdyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctZ3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YXRlbWFsYVwiLCBmbGFnOiBcImZsYWctZ3RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YW1cIiwgZmxhZzogXCJmbGFnLWd1XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWluZWEtQmlzc2F1XCIsIGZsYWc6IFwiZmxhZy1nd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3V5YW5hXCIsIGZsYWc6IFwiZmxhZy1neVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9uZyBLb25nXCIsIGZsYWc6IFwiZmxhZy1oa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1obVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9uZHVyYXNcIiwgZmxhZzogXCJmbGFnLWhuXCIgfSxcclxuICAgIHsgbmFtZTogXCJDcm9hdGlhXCIsIGZsYWc6IFwiZmxhZy1oclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSGFpdGlcIiwgZmxhZzogXCJmbGFnLWh0XCIgfSxcclxuICAgIHsgbmFtZTogXCJIdW5nYXJ5XCIsIGZsYWc6IFwiZmxhZy1odVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSW5kb25lc2lhXCIsIGZsYWc6IFwiZmxhZy1pZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJlbGFuZFwiLCBmbGFnOiBcImZsYWctaWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklzcmFlbFwiLCBmbGFnOiBcImZsYWctaWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklzbGUgb2YgTWFuXCIsIGZsYWc6IFwiZmxhZy1pbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSW5kaWFcIiwgZmxhZzogXCJmbGFnLWluXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnlcIiwgZmxhZzogXCJmbGFnLWlvXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmFxXCIsIGZsYWc6IFwiZmxhZy1pcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJhbiwgSXNsYW1pYyBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctaXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkljZWxhbmRcIiwgZmxhZzogXCJmbGFnLWlzXCIgfSxcclxuICAgIHsgbmFtZTogXCJJdGFseVwiLCBmbGFnOiBcImZsYWctaXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkplcnNleVwiLCBmbGFnOiBcImZsYWctamVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkphbWFpY2FcIiwgZmxhZzogXCJmbGFnLWptXCIgfSxcclxuICAgIHsgbmFtZTogXCJKb3JkYW5cIiwgZmxhZzogXCJmbGFnLWpvXCIgfSxcclxuICAgIHsgbmFtZTogXCJKYXBhblwiLCBmbGFnOiBcImZsYWctanBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktlbnlhXCIsIGZsYWc6IFwiZmxhZy1rZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS3lyZ3l6c3RhblwiLCBmbGFnOiBcImZsYWcta2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbWJvZGlhXCIsIGZsYWc6IFwiZmxhZy1raFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2lyaWJhdGlcIiwgZmxhZzogXCJmbGFnLWtpXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb21vcm9zXCIsIGZsYWc6IFwiZmxhZy1rbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsIGZsYWc6IFwiZmxhZy1rblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWtwXCIgfSxcclxuICAgIHsgbmFtZTogXCJLb3JlYSwgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWtyXCIgfSxcclxuICAgIHsgbmFtZTogXCJLdXdhaXRcIiwgZmxhZzogXCJmbGFnLWt3XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYXltYW4gSXNsYW5kc1wiLCBmbGFnOiBcImZsYWcta3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkthemFraHN0YW5cIiwgZmxhZzogXCJmbGFnLWt6XCIgfSxcclxuICAgIHsgbmFtZTogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctbGFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxlYmFub25cIiwgZmxhZzogXCJmbGFnLWxiXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBMdWNpYVwiLCBmbGFnOiBcImZsYWctbGNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpZWNodGVuc3RlaW5cIiwgZmxhZzogXCJmbGFnLWxpXCIgfSxcclxuICAgIHsgbmFtZTogXCJTcmkgTGFua2FcIiwgZmxhZzogXCJmbGFnLWxrXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWJlcmlhXCIsIGZsYWc6IFwiZmxhZy1sclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGVzb3Rob1wiLCBmbGFnOiBcImZsYWctbHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpdGh1YW5pYVwiLCBmbGFnOiBcImZsYWctbHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkx1eGVtYm91cmdcIiwgZmxhZzogXCJmbGFnLWx1XCIgfSxcclxuICAgIHsgbmFtZTogXCJMYXR2aWFcIiwgZmxhZzogXCJmbGFnLWx2XCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWJ5YVwiLCBmbGFnOiBcImZsYWctbHlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vcm9jY29cIiwgZmxhZzogXCJmbGFnLW1hXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb25hY29cIiwgZmxhZzogXCJmbGFnLW1jXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb2xkb3ZhLCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctbWRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbnRlbmVncm9cIiwgZmxhZzogXCJmbGFnLW1lXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KVwiLCBmbGFnOiBcImZsYWctbWZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hZGFnYXNjYXJcIiwgZmxhZzogXCJmbGFnLW1nXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXJzaGFsbCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1taFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFjZWRvbmlhLCB0aGUgZm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1ta1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsaVwiLCBmbGFnOiBcImZsYWctbWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk15YW5tYXJcIiwgZmxhZzogXCJmbGFnLW1tXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb25nb2xpYVwiLCBmbGFnOiBcImZsYWctbW5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hY2FvXCIsIGZsYWc6IFwiZmxhZy1tb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1tcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFydGluaXF1ZVwiLCBmbGFnOiBcImZsYWctbXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hdXJpdGFuaWFcIiwgZmxhZzogXCJmbGFnLW1yXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb250c2VycmF0XCIsIGZsYWc6IFwiZmxhZy1tc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsdGFcIiwgZmxhZzogXCJmbGFnLW10XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXVyaXRpdXNcIiwgZmxhZzogXCJmbGFnLW11XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxkaXZlc1wiLCBmbGFnOiBcImZsYWctbXZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGF3aVwiLCBmbGFnOiBcImZsYWctbXdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1leGljb1wiLCBmbGFnOiBcImZsYWctbXhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGF5c2lhXCIsIGZsYWc6IFwiZmxhZy1teVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW96YW1iaXF1ZVwiLCBmbGFnOiBcImZsYWctbXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hbWliaWFcIiwgZmxhZzogXCJmbGFnLW5hXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXcgQ2FsZWRvbmlhXCIsIGZsYWc6IFwiZmxhZy1uY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmlnZXJcIiwgZmxhZzogXCJmbGFnLW5lXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3Jmb2xrIElzbGFuZFwiLCBmbGFnOiBcImZsYWctbmZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pZ2VyaWFcIiwgZmxhZzogXCJmbGFnLW5nXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWNhcmFndWFcIiwgZmxhZzogXCJmbGFnLW5pXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXRoZXJsYW5kc1wiLCBmbGFnOiBcImZsYWctbmxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcndheVwiLCBmbGFnOiBcImZsYWctbm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5lcGFsXCIsIGZsYWc6IFwiZmxhZy1ucFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmF1cnVcIiwgZmxhZzogXCJmbGFnLW5yXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaXVlXCIsIGZsYWc6IFwiZmxhZy1udVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV3IFplYWxhbmRcIiwgZmxhZzogXCJmbGFnLW56XCIgfSxcclxuICAgIHsgbmFtZTogXCJPbWFuXCIsIGZsYWc6IFwiZmxhZy1vbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFuYW1hXCIsIGZsYWc6IFwiZmxhZy1wYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGVydVwiLCBmbGFnOiBcImZsYWctcGVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBQb2x5bmVzaWFcIiwgZmxhZzogXCJmbGFnLXBmXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYXB1YSBOZXcgR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1wZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGhpbGlwcGluZXNcIiwgZmxhZzogXCJmbGFnLXBoXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWtpc3RhblwiLCBmbGFnOiBcImZsYWctcGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBvbGFuZFwiLCBmbGFnOiBcImZsYWctcGxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIiwgZmxhZzogXCJmbGFnLXBtXCIgfSxcclxuICAgIHsgbmFtZTogXCJQaXRjYWlyblwiLCBmbGFnOiBcImZsYWctcG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlB1ZXJ0byBSaWNvXCIsIGZsYWc6IFwiZmxhZy1wclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwiLCBmbGFnOiBcImZsYWctcHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBvcnR1Z2FsXCIsIGZsYWc6IFwiZmxhZy1wdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFsYXVcIiwgZmxhZzogXCJmbGFnLXB3XCIgfSxcclxuICAgIHsgbmFtZTogXCJQYXJhZ3VheVwiLCBmbGFnOiBcImZsYWctcHlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlFhdGFyXCIsIGZsYWc6IFwiZmxhZy1xYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUsOpdW5pb25cIiwgZmxhZzogXCJmbGFnLXJlXCIgfSxcclxuICAgIHsgbmFtZTogXCJSb21hbmlhXCIsIGZsYWc6IFwiZmxhZy1yb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2VyYmlhXCIsIGZsYWc6IFwiZmxhZy1yc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUnVzc2lhbiBGZWRlcmF0aW9uXCIsIGZsYWc6IFwiZmxhZy1ydVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUndhbmRhXCIsIGZsYWc6IFwiZmxhZy1yd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2F1ZGkgQXJhYmlhXCIsIGZsYWc6IFwiZmxhZy1zYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU29sb21vbiBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1zYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2V5Y2hlbGxlc1wiLCBmbGFnOiBcImZsYWctc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN1ZGFuXCIsIGZsYWc6IFwiZmxhZy1zZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dlZGVuXCIsIGZsYWc6IFwiZmxhZy1zZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2luZ2Fwb3JlXCIsIGZsYWc6IFwiZmxhZy1zZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGFcIiwgZmxhZzogXCJmbGFnLXNoXCIgfSxcclxuICAgIHsgbmFtZTogXCJTbG92ZW5pYVwiLCBmbGFnOiBcImZsYWctc2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIiwgZmxhZzogXCJmbGFnLXNqXCIgfSxcclxuICAgIHsgbmFtZTogXCJTbG92YWtpYVwiLCBmbGFnOiBcImZsYWctc2tcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpZXJyYSBMZW9uZVwiLCBmbGFnOiBcImZsYWctc2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbiBNYXJpbm9cIiwgZmxhZzogXCJmbGFnLXNtXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZW5lZ2FsXCIsIGZsYWc6IFwiZmxhZy1zblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU29tYWxpYVwiLCBmbGFnOiBcImZsYWctc29cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN1cmluYW1lXCIsIGZsYWc6IFwiZmxhZy1zclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggU3VkYW5cIiwgZmxhZzogXCJmbGFnLXNzXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIiwgZmxhZzogXCJmbGFnLXN0XCIgfSxcclxuICAgIHsgbmFtZTogXCJFbCBTYWx2YWRvclwiLCBmbGFnOiBcImZsYWctc3ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIiwgZmxhZzogXCJmbGFnLXN4XCIgfSxcclxuICAgIHsgbmFtZTogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctc3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3YXppbGFuZFwiLCBmbGFnOiBcImZsYWctc3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctdGNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoYWRcIiwgZmxhZzogXCJmbGFnLXRkXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXNcIiwgZmxhZzogXCJmbGFnLXRmXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb2dvXCIsIGZsYWc6IFwiZmxhZy10Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGhhaWxhbmRcIiwgZmxhZzogXCJmbGFnLXRoXCIgfSxcclxuICAgIHsgbmFtZTogXCJUYWppa2lzdGFuXCIsIGZsYWc6IFwiZmxhZy10alwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9rZWxhdVwiLCBmbGFnOiBcImZsYWctdGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRpbW9yLUxlc3RlXCIsIGZsYWc6IFwiZmxhZy10bFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya21lbmlzdGFuXCIsIGZsYWc6IFwiZmxhZy10bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVuaXNpYVwiLCBmbGFnOiBcImZsYWctdG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRvbmdhXCIsIGZsYWc6IFwiZmxhZy10b1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya2V5XCIsIGZsYWc6IFwiZmxhZy10clwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wiLCBmbGFnOiBcImZsYWctdHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1dmFsdVwiLCBmbGFnOiBcImZsYWctdHZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmFcIiwgZmxhZzogXCJmbGFnLXR3XCIgfSxcclxuICAgIHsgbmFtZTogXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy10elwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVWtyYWluZVwiLCBmbGFnOiBcImZsYWctdWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVnYW5kYVwiLCBmbGFnOiBcImZsYWctdWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctdW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLCBmbGFnOiBcImZsYWctdXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVydWd1YXlcIiwgZmxhZzogXCJmbGFnLXV5XCIgfSxcclxuICAgIHsgbmFtZTogXCJVemJla2lzdGFuXCIsIGZsYWc6IFwiZmxhZy11elwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9seSBTZWVcIiwgZmxhZzogXCJmbGFnLXZhXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLCBmbGFnOiBcImZsYWctdmNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZlbmV6dWVsYSwgQm9saXZhcmlhbiBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctdmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzLCBCcml0aXNoXCIsIGZsYWc6IFwiZmxhZy12Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlyZ2luIElzbGFuZHMsIFUuUy5cIiwgZmxhZzogXCJmbGFnLXZpXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaWV0IE5hbVwiLCBmbGFnOiBcImZsYWctdm5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZhbnVhdHVcIiwgZmxhZzogXCJmbGFnLXZ1XCIgfSxcclxuICAgIHsgbmFtZTogXCJXYWxsaXMgYW5kIEZ1dHVuYVwiLCBmbGFnOiBcImZsYWctd2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbW9hXCIsIGZsYWc6IFwiZmxhZy13c1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiWWVtZW5cIiwgZmxhZzogXCJmbGFnLXllXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXlvdHRlXCIsIGZsYWc6IFwiZmxhZy15dFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggQWZyaWNhXCIsIGZsYWc6IFwiZmxhZy16YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiWmFtYmlhXCIsIGZsYWc6IFwiZmxhZy16bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiWmltYmFid2VcIiwgZmxhZzogXCJmbGFnLXp3XCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCB1cGRhdGVVc2VyRmxhZ3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUudXNlckZsYWdzID0gJHNjb3BlLmN1cnJlbnRVc2VyPy5mbGFnc1xyXG4gICAgICA/IGNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGNvdW50cnkpIHtcclxuICAgICAgICAgIHJldHVybiAkc2NvcGUuY3VycmVudFVzZXIuZmxhZ3MuaW5jbHVkZXMoY291bnRyeS5mbGFnKTtcclxuICAgICAgICB9KVxyXG4gICAgICA6IFtdO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5kYXRlT3B0aW9ucyA9IHtcclxuICAgIG1heERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZSgxOTAwLCAxLCAxKSxcclxuICAgIGluaXREYXRlOiBuZXcgRGF0ZSgyMDAwLCAxLCAxKSxcclxuICAgIGRhdGVwaWNrZXJNb2RlOiBcInllYXJcIixcclxuICB9O1xyXG5cclxuICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSB0cnVlO1xyXG4gICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9IHRydWU7XHJcblxyXG4gICRzY29wZS50b2dnbGVVc2VybmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS51c2VybmFtZVRvZ2dsZSA9ICEkc2NvcGUudXNlcm5hbWVUb2dnbGU7XHJcbiAgICAkc2NvcGUubmV3VXNlcm5hbWUgPSAkc2NvcGUuY3VycmVudFVzZXIudXNlcm5hbWU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLm5ld1Bhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5jb25maXJtUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gISRzY29wZS5wYXNzd29yZFRvZ2dsZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uIChwYXNzd29yZCkge1xyXG4gICAgaWYgKHBhc3N3b3JkKSB7XHJcbiAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgVXNlclN2Yy5jaGVja1Bhc3N3b3JkKHVzZXIsIHBhc3N3b3JkKS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAob2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgIGlmIChuZXdQYXNzd29yZCkge1xyXG4gICAgICBpZiAobmV3UGFzc3dvcmQgPT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgdmFyIHVzZXIgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICAgIFVzZXJTdmMuY2hhbmdlUGFzc3dvcmQodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKS50aGVuKFxyXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuJGVtaXQoXCJwb3B1cFwiLCB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJQYXNzd29yZCBDaGFuZ2VkXCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJhbGVydC1zdWNjZXNzXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAkc2NvcGUub2xkUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzY29wZS4kZW1pdChcInBvcHVwXCIsIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBhc3N3b3JkIENoYW5nZSBGYWlsZWRcIixcclxuICAgICAgICAgICAgICB0eXBlOiBcImFsZXJ0LWRhbmdlclwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgb3JpZ2luYWxCZyA9ICQoXCIucGFzc3dvcmRcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIpO1xyXG4gICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlVXNlcm5hbWUgPSBmdW5jdGlvbiAodXNlcm5hbWUpIHtcclxuICAgICRzY29wZS4kZW1pdChcImxvYWRpbmdcIik7XHJcbiAgICBVc2VyU3ZjLmNoYW5nZVVzZXJuYW1lKCRzY29wZS5jdXJyZW50VXNlci5faWQsIHVzZXJuYW1lKS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoXCJ1cGRhdGVcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoXCJwb3B1cFwiLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiB1c2VybmFtZSArIFwiIGFscmVhZHkgaW4gdXNlXCIsXHJcbiAgICAgICAgICB0eXBlOiBcImFsZXJ0LWRhbmdlclwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUudXBkYXRlVXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS4kZW1pdChcImxvYWRpbmdcIik7XHJcbiAgICBVc2VyU3ZjLnVwZGF0ZVVzZXIoeyAuLi4kc2NvcGUuY3VycmVudFVzZXIsIGZsYWdzOiAkc2NvcGUudXNlckZsYWdzLm1hcCgoeyBmbGFnIH0pID0+IGZsYWcpIH0pLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS4kZW1pdChcInVwZGF0ZVwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmxvYWRDb3VudHJpZXMgPSBmdW5jdGlvbiAoJHF1ZXJ5KSB7XHJcbiAgICByZXR1cm4gY291bnRyaWVzLmZpbHRlcihmdW5jdGlvbiAoY291bnRyeSkge1xyXG4gICAgICByZXR1cm4gY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigkcXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTE7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgKCkgPT4ge1xyXG4gICAgdXBkYXRlVXNlckZsYWdzKCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1NraWxsc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZFNraWxsID0gMDtcclxuICAkc2NvcGUuc2tpbGxzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICRzY29wZS5wcm9qZWN0cyA9IFtdO1xyXG5cclxuICAkc2NvcGUubGFiZWxzID0gW1wiRG93bmxvYWQgU2FsZXNcIiwgXCJJbi1TdG9yZSBTYWxlc1wiLCBcIk1haWwtT3JkZXIgU2FsZXNcIl07XHJcbiAgJHNjb3BlLmRhdGEgPSBbMzAwLCA1MDAsIDEwMF07XHJcblxyXG4gICQuZ2V0SlNPTignL2V4cGVyaWVuY2UuanNvbicsIGZ1bmN0aW9uKCBkYXRhICkge1xyXG4gICAgJHNjb3BlLnByb2plY3RzID0gZGF0YS5yZWR1Y2UoKHByb2plY3RzLCBlbXBsb3llcikgPT4ge1xyXG4gICAgICBpZiAoZW1wbG95ZXIucHJvamVjdHMpIHJldHVybiBlbXBsb3llci5wcm9qZWN0cy5jb25jYXQocHJvamVjdHMpO1xyXG4gICAgICBlbHNlIHJldHVybiBwcm9qZWN0cztcclxuICAgIH0sIHt9KTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmZpbHRlcmVkUHJvamVjdHMgPSAoKSA9PiAkc2NvcGUucHJvamVjdHNcclxuICAgIC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3Quc2tpbGxzICYmIHByb2plY3Quc2tpbGxzLmluY2x1ZGVzKCRzY29wZS5zZWxlY3RlZFNraWxsLmNvZGUpKVxyXG5cclxuICAkLmdldEpTT04oJy9za2lsbHMuanNvbicsIGZ1bmN0aW9uKCBkYXRhICkge1xyXG5cclxuICAgIGNvbnN0IHNraWxscyA9IGRhdGFcclxuICAgIC5maWx0ZXIoKHNraWxsKSA9PiBza2lsbC5lbmFibGVkKVxyXG5cclxuICAgICRzY29wZS5jYXRlZ29yaWVzID0gc2tpbGxzXHJcbiAgICAucmVkdWNlKGZ1bmN0aW9uKGNhdGVnb3JpZXMsIHNraWxsKSB7XHJcbiAgICAgIGlmICghY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0pIHtcclxuICAgICAgICBjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XSA9IFtza2lsbF1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XS5wdXNoKHNraWxsKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzO1xyXG4gICAgfSwge30pO1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZFNraWxsID0gZnVuY3Rpb24gKHNraWxsKSB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsID0gc2tpbGw7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsLmNoYXJ0T3B0aW9ucyA9IHtcclxuICAgICAgICBjdXRvdXRQZXJjZW50YWdlIDogODAsXHJcbiAgICAgICAgY2lyY3VtZmVyZW5jZTogMiAqIE1hdGguUEksXHJcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsLmNoYXJ0U3R5bGUgPSB7XHJcbiAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKC9za2lsbHMvJyArICRzY29wZS5zZWxlY3RlZFNraWxsLmltYWdlICsgJyknLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnNjAlJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICc1MCUgNTAlJ1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCgkc2NvcGUuc2tpbGxzWzBdKTtcclxuXHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJHNjZSwgJGxvY2F0aW9uLCAkbWRUb2FzdCwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICBsZXQgcGFnZSA9IDE7XHJcbiAgICAkc2NvcGUubGlzdHMgPSBbXTtcclxuICAgICRzY29wZS5zZWFyY2ggPSBcIlwiO1xyXG4gICAgJHNjb3BlLm5ld0l0ZW0gPSB7fTtcclxuICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHt9O1xyXG4gICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBcIkVOXCI7XHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW107XHJcbiAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICBsZXQgZXhoYXVzdGVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgdG9hc3QgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAkbWRUb2FzdC5zaG93KCRtZFRvYXN0LnNpbXBsZSgpLnRleHRDb250ZW50KG1lc3NhZ2UpLnBvc2l0aW9uKFwiYm90dG9tIHJpZ2h0XCIpLmhpZGVEZWxheSgzMDAwKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9iamVjdENhdGVnb3JpZXMgPSBbXCJjdWx0dXJlXCIsIFwibmF0dXJlXCIsIFwibWlzY1wiLCBcInNvY2lldHlcIiwgXCJzcG9ydHNcIl07XHJcbiAgICAkc2NvcGUuYmx1cmJUeXBlcyA9IFtcclxuICAgICAgeyBhcGk6IFwibW92aWVzXCIsIGNhdGVnb3JpZXM6IFtcIm1vdmllc1wiXSwgdGV4dDogXCJHZXQgbW92aWUgcG9zdGVyc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcInR2XCIsIGNhdGVnb3JpZXM6IFtcInRlbGV2aXNpb25cIl0sIHRleHQ6IFwiR2V0IHR2IHBvc3RlcnNcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJhY3RvcnNcIiwgY2F0ZWdvcmllczogW1wibW92aWVzXCIsIFwidGVsZXZpc2lvblwiXSwgdGV4dDogXCJHZXQgYWN0b3IgcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcImJvb2tzXCIsIGNhdGVnb3JpZXM6IFtcImxpdGVyYXR1cmVcIl0sIHRleHQ6IFwiR2V0IGJvb2sgY292ZXJzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwibXVzaWN2aWRlb3NcIiwgY2F0ZWdvcmllczogW1wibXVzaWNcIl0sIHRleHQ6IFwiR2V0IG11c2ljIHZpZGVvc1wiLCBhZG1pbk9ubHk6IHRydWUgfSxcclxuICAgICAgeyBhcGk6IFwidW5zcGxhc2hcIiwgY2F0ZWdvcmllczogb2JqZWN0Q2F0ZWdvcmllcywgdGV4dDogXCJHZXQgVW5zcGxhc2ggcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcInBleGVsc1wiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBQZXhlbHMgcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcIndpa2lcIiwgY2F0ZWdvcmllczogb2JqZWN0Q2F0ZWdvcmllcywgdGV4dDogXCJHZXQgV2lraSBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgIF07XHJcblxyXG4gICAgJHNjb3BlLmhhdmVDb21tb25JdGVtcyA9IChhcnIxLCBhcnIyKSA9PiB7XHJcbiAgICAgIHJldHVybiBhcnIxPy5zb21lKChpdGVtKSA9PiBhcnIyLmluY2x1ZGVzKGl0ZW0pKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIC8vIFRhYlxyXG4gICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuY3JlYXRlVmFsdWUoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoJChcIiNuZXctdmFsdWVcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgJChcIiNuZXctYmx1cmJcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIH1cclxuICAgICAgLy8gdXNlIGUua2V5Q29kZVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWRkTGlzdCA9ICgpID0+IHtcclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgXCJuZXdcIik7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBjcmVhdG9yOiAkc2NvcGUuY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgdmFsdWVzOiBbXSxcclxuICAgICAgICBhbnN3ZXJzOiAwLFxyXG4gICAgICAgIGlzRHluYW1pYzogdHJ1ZSxcclxuICAgICAgICBjYXRlZ29yeTogXCJcIixcclxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgICBsYW5ndWFnZTogJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UsXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWFyY2ggPSAkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoO1xyXG4gICAgICBpZiAobGlzdCkge1xyXG4gICAgICAgIGlmIChsaXN0Ll9pZCA9PT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgJHNjb3BlLmFkZExpc3QoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3QobGlzdClcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gJHNjb3BlLnNlbGVjdGVkTGlzdC5sYW5ndWFnZTtcclxuICAgICAgICAgICAgICAkc2NvcGUucmVhZE9ubHkgPVxyXG4gICAgICAgICAgICAgICAgISRzY29wZS5zZWxlY3RlZExpc3QgfHxcclxuICAgICAgICAgICAgICAgICghJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluICYmXHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY3JlYXRvci5faWQgIT09ICRzY29wZS5jdXJyZW50VXNlci5faWQgJiZcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldExhbmd1YWdlRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzZXRDYXRlZ29yeUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0ge307XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmN1cnJlbnRVc2VyKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogbGFuZ3VhZ2VzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCk7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZXMgPSBsYW5ndWFnZXM7XHJcbiAgICAgIHJlc2V0TGFuZ3VhZ2VGaWx0ZXIoKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBjYXRlZ29yaWVzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XHJcbiAgICAgIHJlc2V0Q2F0ZWdvcnlGaWx0ZXIoKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBsYW5ndWFnZVN0YXRzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMoKTtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBsYW5ndWFnZVN0YXRzLnJlZHVjZSgocmVzdWx0LCB7IF9pZCwgY291bnQgfSkgPT4ge1xyXG4gICAgICAgIHJlc3VsdFtfaWQubGFuZ3VhZ2VdID0gKHJlc3VsdFtfaWQubGFuZ3VhZ2VdIHx8IDApICsgY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSwge30pO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3J5U3RhdHMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cygpO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0cyA9IGNhdGVnb3J5U3RhdHMucmVkdWNlKChyZXN1bHQsIHsgX2lkLCBjb3VudCB9KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W19pZF0gPSBjb3VudDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCkge1xyXG4gICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoeyBfaWQ6ICRsb2NhdGlvbi5zZWFyY2goKS5saXN0IH0pO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5zZWFyY2ggPSAkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoIHx8IFwiXCI7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoTGlzdHMgPSBhc3luYyAodmlld1ZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2aWV3VmFsdWUubGVuZ3RoID49IDMpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5zZWFyY2hMaXN0cyh2aWV3VmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRTZWFyY2hUZXh0ID0gKHRleHQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5zZWFyY2gpIHtcclxuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCgkeyRzY29wZS5zZWFyY2h9KWAsIFwiZ2lcIik7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShyZWdleCwgXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz4kMTwvc3Bhbj5cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnZhbHVlT3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInZhbHVlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6ICRsb2NhdGlvbi5zZWFyY2goKS5zb3J0IHx8IFwiZGF0ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246ICRsb2NhdGlvbi5zZWFyY2goKS5vcmRlciA/ICRsb2NhdGlvbi5zZWFyY2goKS5vcmRlciA9PT0gXCJkZXNjXCIgOiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPSAhJHNjb3BlLm9yZGVyLmRpcmVjdGlvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcInNvcnRcIiwgZmllbGQpO1xyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwib3JkZXJcIiwgJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA/IFwiZGVzY1wiIDogXCJhc2NcIik7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TW9yZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxpc3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gJHNjb3BlLmxpc3RzLmNvbmNhdChsaXN0cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgIHBhZ2UgPSAxO1xyXG4gICAgICBleGhhdXN0ZWQgPSBmYWxzZTtcclxuICAgICAgZ2V0TGlzdHMoKS50aGVuKChsaXN0cykgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9IGxpc3RzO1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZUZpbHRlciA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSkge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID0gISRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5RmlsdGVyID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSkge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSAhJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUNhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKTtcclxuICAgICAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9XHJcbiAgICAgICAgY2F0ZWdvcmllcy5sZW5ndGggPT09IGNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSkubGVuZ3RoO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSAkc2NvcGUuY2F0ZWdvcmllcy5yZWR1Y2UoKGZpbHRlciwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICBmaWx0ZXJbY2F0ZWdvcnldID0gIWFsbENhdGVnb3JpZXM7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgICAgfSwge30pO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldENhdGVnb3J5TGFiZWwgPSAoY2F0ZWdvcmllcykgPT4ge1xyXG4gICAgICBpZiAoIWNhdGVnb3JpZXMgfHwgY2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHJldHVybiBcIlwiO1xyXG4gICAgICBjb25zdCBtYWluQ2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4gIWNhdGVnb3J5LmluY2x1ZGVzKFwiLlwiKSk7XHJcbiAgICAgIHJldHVybiBtYWluQ2F0ZWdvcmllc1xyXG4gICAgICAgIC5zb3J0KClcclxuICAgICAgICAubWFwKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc3ViY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXNcclxuICAgICAgICAgICAgLmZpbHRlcigoc3ViY2F0ZWdvcnkpID0+IHN1YmNhdGVnb3J5LnN0YXJ0c1dpdGgoY2F0ZWdvcnkpICYmIHN1YmNhdGVnb3J5ICE9PSBjYXRlZ29yeSlcclxuICAgICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgICAoc3ViY2F0ZWdvcnkpID0+XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2F0ZWdvcmllc1xyXG4gICAgICAgICAgICAgICAgICAuZmluZCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gY2F0ZWdvcnkpXHJcbiAgICAgICAgICAgICAgICAgIC5zdWJjYXRlZ29yaWVzLmZpbmQoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IHN1YmNhdGVnb3J5KT8ubGFiZWwsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcy5maW5kKCh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBjYXRlZ29yeSkubGFiZWwgK1xyXG4gICAgICAgICAgICAoc3ViY2F0ZWdvcmllcy5sZW5ndGggPiAwID8gXCIgKFwiICsgc3ViY2F0ZWdvcmllcy5zb3J0KCkuam9pbihcIiwgXCIpICsgXCIpXCIgOiBcIlwiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5qb2luKFwiLCBcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldExpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxvYWRpbmcgfHwgZXhoYXVzdGVkKSByZXR1cm4gW107XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2ggIT09ICRzY29wZS5zZWFyY2gpIHtcclxuICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwic2VhcmNoXCIsICRzY29wZS5zZWFyY2ggPyAkc2NvcGUuc2VhcmNoIDogbnVsbCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdHMoe1xyXG4gICAgICAgIHBhZ2UsXHJcbiAgICAgICAgc29ydEJ5OiAkc2NvcGUub3JkZXIuZmllbGQsXHJcbiAgICAgICAgb3JkZXJCeTogJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA/IC0xIDogMSxcclxuICAgICAgICBsaW1pdDogMTAwLFxyXG4gICAgICAgIHNlYXJjaDogJHNjb3BlLnNlYXJjaCxcclxuICAgICAgICBsYW5ndWFnZXM6IE9iamVjdC5rZXlzKCRzY29wZS5sYW5ndWFnZUZpbHRlcikuZmlsdGVyKChsYW5ndWFnZSkgPT4gJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlXSksXHJcbiAgICAgICAgY2F0ZWdvcmllczogT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKS5maWx0ZXIoKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldKSxcclxuICAgICAgfSk7XHJcbiAgICAgICRzY29wZS5jb3VudCA9IGRhdGEuY291bnQ7XHJcbiAgICAgIGlmIChkYXRhLnJlc3VsdC5sZW5ndGggPCAxMDApIGV4aGF1c3RlZCA9IHRydWU7XHJcbiAgICAgIGVsc2UgcGFnZSA9IGRhdGEubmV4dFBhZ2U7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0LnNsaWNlKDAsIDEwKSk7XHJcbiAgICAgIHJldHVybiBkYXRhLnJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExpc3ROYW1lID0gKGxpc3RJZCkgPT4gJHNjb3BlLmxpc3RzLmZpbmQoKHsgX2lkIH0pID0+IF9pZCA9PT0gbGlzdElkKT8ubmFtZTtcclxuXHJcbiAgICAkc2NvcGUudXBkYXRlVmFsdWUgPSBhc3luYyAoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoIWl0ZW0udmFsdWUpIHtcclxuICAgICAgICAkc2NvcGUuZGVsZXRlVmFsdWUoaXRlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW1SZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy51cGRhdGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgaXRlbSk7XHJcbiAgICAgICAgaXRlbS5ibHVyYlR5cGUgPSB1cGRhdGVkSXRlbVJlc3BvbnNlLmRhdGEuYmx1cmJUeXBlO1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlVmFsdWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLm5ld0l0ZW0udmFsdWUpIHJldHVybjtcclxuICAgICAgaWYgKCRzY29wZS5oYXNEdXBsaWNhdGUoKSkge1xyXG4gICAgICAgIHJldHVybiBhbGVydChgJHskc2NvcGUubmV3SXRlbS52YWx1ZX0gaXMgYWxyZWFkeSBpbiB0aGUgbGlzdGApO1xyXG4gICAgICB9IGVsc2UgaWYgKCEkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnB1c2goeyAuLi4kc2NvcGUubmV3SXRlbSB9KTtcclxuICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMubGVuZ3RoID49IDEwKSB7XHJcbiAgICAgICAgICBhd2FpdCAkc2NvcGUudXBzZXJ0TGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlZEl0ZW1SZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5jcmVhdGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgJHNjb3BlLm5ld0l0ZW0pO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnB1c2goY3JlYXRlZEl0ZW1SZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB0b2FzdChgXCIkeyRzY29wZS5uZXdJdGVtfVwiIGFkZGVkYCk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgICAkc2NvcGUubmV3SXRlbS5ibHVyYiA9IFwiXCI7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICQoXCIjbmV3LXZhbHVlXCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICAgICAgfSk7XHJcbiAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZVZhbHVlID0gKGl0ZW0pID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzID0gJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUuX2lkICE9PSBpdGVtLl9pZCk7XHJcbiAgICAgICAgdG9hc3QoYFwiJHtpdGVtLnZhbHVlfVwiIHJlbW92ZWRgKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS51cGRhdGVMaXN0ID0gKGxpc3QsIHVwZGF0ZXMpID0+IHtcclxuICAgICAgaWYgKGxpc3QuX2lkICYmIGxpc3QuX2lkICE9PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgLi4udXBkYXRlcyxcclxuICAgICAgICAgIF9pZDogbGlzdC5faWQsXHJcbiAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGNvbnN0IGxpc3RJbmRleCA9ICRzY29wZS5saXN0cy5maW5kSW5kZXgoKGxpc3QpID0+IGxpc3QuX2lkID09PSBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdHNbbGlzdEluZGV4XSA9IGRhdGE7XHJcbiAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwc2VydExpc3QgPSAobGlzdCwgdXBkYXRlcykgPT4ge1xyXG4gICAgICAkc2NvcGUuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKGxpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCAmJiBsaXN0Lm5hbWUgJiYgbGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAobGlzdC5faWQgJiYgbGlzdC5faWQgIT09IFwibmV3XCIpIHtcclxuICAgICAgICAgIGxldCBjaGFuZ2VzID0gdXBkYXRlcyA/IHVwZGF0ZXMgOiBsaXN0O1xyXG4gICAgICAgICAgZGVsZXRlIGNoYW5nZXMuX2lkO1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgICAuLi5jaGFuZ2VzLFxyXG4gICAgICAgICAgICBfaWQ6IGxpc3QuX2lkLFxyXG4gICAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0SW5kZXggPSAkc2NvcGUubGlzdHMuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0Ll9pZCA9PT0gZGF0YS5faWQpO1xyXG4gICAgICAgICAgICAkc2NvcGUubGlzdHNbbGlzdEluZGV4XSA9IGRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5jcmVhdGVMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgJHNjb3BlLnNlbGVjdGVkTGlzdCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0ID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuX2lkID0gZGF0YS5faWQ7XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRvYXN0KGBcIiR7ZGF0YS5uYW1lfVwiIGNyZWF0ZWRgKTtcclxuICAgICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKCRzY29wZS5zZWxlY3RlZExpc3QsIHVwZGF0ZXMpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCFsaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhsaXN0Ll9pZCkpIHtcclxuICAgICAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW2xpc3QuX2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0cyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHM7XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY29uZmlybU1lcmdlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgVGVuVGhpbmdzU3ZjLm1lcmdlTGlzdHMoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyk7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgdG9hc3QoXCJNZXJnZWRcIik7XHJcbiAgICAgICQoXCIjbW9kYWwtbWVyZ2UtbGlzdHNcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY29uZmlybURlbGV0ZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IGxpc3RJZCBvZiAkc2NvcGUubGlzdElkc1RvRGVsZXRlKSB7XHJcbiAgICAgICAgYXdhaXQgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3QobGlzdElkKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgIHRvYXN0KFwiTGlzdHMgZGVsZXRlZFwiKTtcclxuICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMobGlzdC5faWQpKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuZmlsdGVyKFxyXG4gICAgICAgICAgKGhpZ2hsaWdodGVkTGlzdElkKSA9PiBoaWdobGlnaHRlZExpc3RJZCAhPT0gbGlzdC5faWQsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLnB1c2gobGlzdC5faWQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZSA9IChsaXN0LCBsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBsaXN0Lmxhbmd1YWdlID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7IGxhbmd1YWdlOiBsYW5ndWFnZS5jb2RlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0RGlmZmljdWx0eSA9IChsaXN0LCBkaWZmaWN1bHR5KSA9PiB7XHJcbiAgICAgIGxpc3QuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHsgZGlmZmljdWx0eTogZGlmZmljdWx0eSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldEZyZXF1ZW5jeSA9IChsaXN0LCBmcmVxdWVuY3kpID0+IHtcclxuICAgICAgbGlzdC5mcmVxdWVuY3kgPSBmcmVxdWVuY3k7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHsgZnJlcXVlbmN5OiBmcmVxdWVuY3kgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeSA9IChsaXN0LCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBpZiAobGlzdC5jYXRlZ29yaWVzLnNvbWUoKGxpc3RDYXRlZ29yeSkgPT4gbGlzdENhdGVnb3J5ID09PSBjYXRlZ29yeSkpIHtcclxuICAgICAgICBsaXN0LmNhdGVnb3JpZXMgPSBsaXN0LmNhdGVnb3JpZXMuZmlsdGVyKChsaXN0Q2F0ZWdvcnkpID0+IGxpc3RDYXRlZ29yeSAhPT0gY2F0ZWdvcnkpO1xyXG4gICAgICAgIGlmIChsaXN0LmNhdGVnb3JpZXMuc29tZSgobGlzdENhdGVnb3J5KSA9PiBsaXN0Q2F0ZWdvcnkuc3RhcnRzV2l0aChjYXRlZ29yeSkpICYmICFjYXRlZ29yeS5pbmNsdWRlcyhcIi5cIikpIHtcclxuICAgICAgICAgIGxpc3QuY2F0ZWdvcmllcyA9IGxpc3QuY2F0ZWdvcmllcy5maWx0ZXIoKGxpc3RDYXRlZ29yeSkgPT4gIWxpc3RDYXRlZ29yeS5zdGFydHNXaXRoKGNhdGVnb3J5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7IGNhdGVnb3JpZXM6IGxpc3QuY2F0ZWdvcmllcyB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmhhc0R1cGxpY2F0ZSA9ICgpID0+XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgJiZcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgJiZcclxuICAgICAgXy5zb21lKFxyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgIChhbnN3ZXIpID0+IGFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCkgPT0gJHNjb3BlLm5ld0l0ZW0udmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpLFxyXG4gICAgICApO1xyXG5cclxuICAgICRzY29wZS5nZXRCbHVyYnMgPSAodHlwZSkgPT4ge1xyXG4gICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRCbHVyYnMoJHNjb3BlLnNlbGVjdGVkTGlzdCwgdHlwZSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICAgIHRvYXN0KFwiQmx1cmJzIHVwZGF0ZWRcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICAgIHRvYXN0KFwiQmx1cmIgdXBkYXRlIGZhaWxlZFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldEVtYmVkVXJsID0gKHVybCkgPT4ge1xyXG4gICAgICBpZiAodXJsLmluY2x1ZGVzKFwieW91dHViZS5jb21cIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC9bPyZddj0oW14mXSspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHVybC5pbmNsdWRlcyhcInlvdXR1LmJlXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgveW91dHVcXC5iZVxcLyhbXiY/XSspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHVybC5pbmNsdWRlcyhcInZpbWVvLmNvbVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL3ZpbWVvXFwuY29tXFwvKFxcZCspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJvcGVuLnNwb3RpZnlcIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC90cmFja1xcLyhbXiY/XSspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2VtYmVkL3RyYWNrLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwodXJsKTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZXR1cm4gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH0/YXV0b3BsYXk9MWA7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCBnZXREYXRhKTtcclxuICB9KTtcclxuIiwiLypqc2xpbnQgZXN2ZXJzaW9uOiA2Ki9cclxuYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0FkbWluQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBUZW5UaGluZ3NTdmMsIFVzZXJTdmMpIHtcclxuICAgICRzY29wZS4kb24oXCJsb2dpblwiLCAoXykgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyQnkgPSAoZmllbGQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5vcmRlci5maWVsZCA9PT0gZmllbGQpIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIucmV2ZXJzZSA9ICEkc2NvcGUub3JkZXIucmV2ZXJzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRRdWV1ZSA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0UXVldWUoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5xdWV1ZSA9IHJlc3BvbnNlLmRhdGEucmVwbGFjZShcIi9uXCIsIFwiPGJyLz5cIik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmdldFF1ZXVlKCk7XHJcblxyXG4gICAgVGVuVGhpbmdzU3ZjLmdldFBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBnZXRVc2VycyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLmdldFVzZXJzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUudXNlcnMgPSByZXNwb25zZS5kYXRhLmZpbHRlcigodXNlcikgPT4gIXVzZXIuYWRtaW4pO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQmFuID0gKHVzZXIpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLnRvZ2dsZUJhbih1c2VyLl9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZVBhdXNlID0gKHVzZXIpID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLnRvZ2dsZVBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucGF1c2VkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUucGF1c2VkKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzR2FtZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlUGFyYW1zLCBUZW5UaGluZ3NTdmMsIFVzZXJTdmMpIHtcclxuICAgIGNvbnN0IGdldFVzZXJzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMuZ2V0VXNlcnMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS51c2VycyA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKCh1c2VyKSA9PiAhdXNlci5hZG1pbik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kb24oXCJsb2dpblwiLCAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4pIHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICAgIGlmICgkc3RhdGVQYXJhbXMuZ2FtZSkge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmdldEdhbWUoJHN0YXRlUGFyYW1zLmdhbWUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICRzY29wZS5nYW1lID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmdhbWUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc1N0YXRzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBUZW5UaGluZ3NTdmMpIHtcclxuICAgICRzY29wZS5sYW5ndWFnZVN0YXRzID0gW107XHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0cyA9IHsgbGFiZWxzOiBbXSwgZGF0YXNldHM6IFtdIH07XHJcblxyXG4gICAgY29uc3QgbGluZUNoYXJ0T3B0aW9ucyA9IHtcclxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICB0ZXh0OiBcIkNoYXJ0LmpzIExpbmUgQ2hhcnRcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5jdXJyZW50VXNlcikgcmV0dXJuO1xyXG4gICAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IFtdO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0UGxheVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFycyA9IF8udW5pcShkYXRhLm1hcCgoeyB5ZWFyIH0pID0+IHllYXIpKS5zb3J0KCk7XHJcbiAgICAgICAgY29uc3QgbW9udGhzID0gXy50aW1lcygxMiwgKGkpID0+IGkgKyAxKTtcclxuICAgICAgICAkc2NvcGUucGxheVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiBtb250aHMsXHJcbiAgICAgICAgICBzZXJpZXM6IHllYXJzLFxyXG4gICAgICAgICAgZGF0YTogeWVhcnMubWFwKCh5ZWFyKSA9PlxyXG4gICAgICAgICAgICBtb250aHMubWFwKChtb250aCkgPT4gZGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLm1vbnRoID09PSBtb250aCAmJiBpdGVtLnllYXIgPT09IHllYXIpPy51bmlxdWVQbGF5ZXJzIHx8IDApLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIG9wdGlvbnM6IGxpbmVDaGFydE9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0TGFuZ3VhZ2VTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeWVhcnMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC55ZWFyKSkuc29ydCgpO1xyXG4gICAgICAgIGNvbnN0IGxhbmd1YWdlcyA9IF8udW5pcShkYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkLmxhbmd1YWdlKSkuc29ydCgpO1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiB5ZWFycyxcclxuICAgICAgICAgIHNlcmllczogbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgZGF0YTogbGFuZ3VhZ2VzLm1hcCgobGFuZ3VhZ2UpID0+XHJcbiAgICAgICAgICAgIHllYXJzLm1hcCgoeWVhcikgPT4gZGF0YS5maW5kKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UgPT09IGxhbmd1YWdlICYmIF9pZC55ZWFyID09PSB5ZWFyKT8uY291bnQgfHwgMCksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgb3B0aW9uczogbGluZUNoYXJ0T3B0aW9ucyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldEdhbWVTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeWVhcnMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC55ZWFyKSkuc29ydCgpO1xyXG4gICAgICAgIGNvbnN0IGxhbmd1YWdlcyA9IF8udW5pcShkYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkLmxhbmd1YWdlKSkuc29ydCgpO1xyXG4gICAgICAgICRzY29wZS5nYW1lU3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IHllYXJzLFxyXG4gICAgICAgICAgc2VyaWVzOiBsYW5ndWFnZXMsXHJcbiAgICAgICAgICBkYXRhOiBsYW5ndWFnZXMubWFwKChsYW5ndWFnZSkgPT5cclxuICAgICAgICAgICAgeWVhcnMubWFwKCh5ZWFyKSA9PiBkYXRhLmZpbmQoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2UgJiYgX2lkLnllYXIgPT09IHllYXIpPy5jb3VudCB8fCAwKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBvcHRpb25zOiBsaW5lQ2hhcnRPcHRpb25zLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RDYXRlZ29yeVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gXy5zb3J0QnkoZGF0YSwgKHsgY291bnQgfSkgPT4gLWNvdW50KTtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogc29ydGVkRGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZCksXHJcbiAgICAgICAgICBkYXRhOiBbc29ydGVkRGF0YS5tYXAoKHsgY291bnQgfSkgPT4gY291bnQpXSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsICgpID0+IHtcclxuICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignV29ya291dEN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAkc2NvcGUudGltZUV4ZXJjaXNpbmcgPSAzMDtcclxuICAkc2NvcGUudGltZVJlc3RpbmcgPSAxMDtcclxuICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG5cclxuICB2YXIgc291bmRzID0ge1xyXG4gICAgb246IG5ldyBBdWRpbygnb24ud2F2JyksXHJcbiAgICBvZmY6IG5ldyBBdWRpbygnb2ZmLndhdicpLFxyXG4gICAgc3dpdGNoOiBuZXcgQXVkaW8oJ3N3aXRjaC53YXYnKSxcclxuICB9O1xyXG5cclxuXHJcbiAgdmFyIGV4ZXJjaXNlcyA9IFtcclxuICAgIHtuYW1lOiAnSnVtcGluZyBKYWNrcycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1dhbGwgU2l0Jywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUHVzaC1VcCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0NydW5jaCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1N0ZXAtVXAnLCBzcGxpdDogdHJ1ZX0sXHJcbiAgICB7bmFtZTogJ1NxdWF0Jywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnVHJpY2VwcyBEaXAnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQbGFuaycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0hpZ2ggS25lZXMnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdMdW5nZScsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1B1c2gtVXAgd2l0aCBSb3RhdGlvbicsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1NpZGUgUGxhbmsnLCBzcGxpdDogdHJ1ZX1cclxuICBdO1xyXG5cclxuICB2YXIgZXhlcmNpc2luZztcclxuXHJcbiAgJHNjb3BlLnByb2dyZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKGV4ZXJjaXNlcy5sZW5ndGggLSBNYXRoLmZsb29yKCRzY29wZS50aW1lUmVtYWluaW5nIC8gKCRzY29wZS50aW1lRXhlcmNpc2luZyArICRzY29wZS50aW1lUmVzdGluZykpKSArICcvJyArIGV4ZXJjaXNlcy5sZW5ndGg7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLndvcmtvdXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBleGNlcmNpc2VUaW1lID0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nICsgJHNjb3BlLnRpbWVSZXN0aW5nO1xyXG4gICAgaWYgKCEkc2NvcGUudGltZVJlbWFpbmluZykge1xyXG4gICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IGV4ZXJjaXNlcy5sZW5ndGggKiBleGNlcmNpc2VUaW1lO1xyXG4gICAgICBleGVyY2lzaW5nID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmctLTtcclxuICAgICAgICBpZiAoJHNjb3BlLnRpbWVSZW1haW5pbmcgPT09IDApIHtcclxuICAgICAgICAgICRzY29wZS5leGVyY2lzZSA9IHtuYW1lOiAnRmluaXNoZWQhIENvbmdyYXRzIScsIHNwbGl0OiBmYWxzZX07XHJcbiAgICAgICAgICAkc2NvcGUudGltZXIgPSAnJztcclxuICAgICAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbChleGVyY2lzaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN1cnJlbnRFeGVyY2lzZSA9IE1hdGguZmxvb3IoJHNjb3BlLnRpbWVSZW1haW5pbmcgLyBleGNlcmNpc2VUaW1lKTtcclxuICAgICAgICB2YXIgdGltZXIgPSAkc2NvcGUudGltZVJlbWFpbmluZyAtIGN1cnJlbnRFeGVyY2lzZSAqIGV4Y2VyY2lzZVRpbWU7XHJcbiAgICAgICAgJHNjb3BlLnRpbWVyID0gdGltZXIgPiAkc2NvcGUudGltZUV4ZXJjaXNpbmcgPyB0aW1lciAtICRzY29wZS50aW1lRXhlcmNpc2luZyA6IHRpbWVyO1xyXG4gICAgICAgIGlmICh0aW1lciA+ICRzY29wZS50aW1lRXhlcmNpc2luZykge1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc2NvcGUuZXhlcmNpc2UgPSBleGVyY2lzZXNbZXhlcmNpc2VzLmxlbmd0aCAtIGN1cnJlbnRFeGVyY2lzZSAtIDFdO1xyXG4gICAgICAgIGlmICh0aW1lciA9PT0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nKSB7XHJcbiAgICAgICAgICBzb3VuZHMub24ucGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGltZXIgPT09IDApIHtcclxuICAgICAgICAgIHNvdW5kcy5vZmYucGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmV4ZXJjaXNlLnNwbGl0ICYmIHRpbWVyID09PSBNYXRoLmZsb29yKCRzY29wZS50aW1lRXhlcmNpc2luZyAvIDIpKSB7XHJcbiAgICAgICAgICBzb3VuZHMuc3dpdGNoLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyk7XHJcbiAgICAgICRzY29wZS50aW1lciA9ICcnO1xyXG4gICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICRzY29wZS5leGVyY2lzZSA9IHtuYW1lOiAnJywgc3BsaXQ6IGZhbHNlfTtcclxuICAgIH1cclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5jb250cm9sbGVyKCdRdWl6QW5pbWFsc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIEZpbGVTdmMpIHtcclxuXHJcbiAgICBGaWxlU3ZjLmdldFNvdW5kcygnYW5pbWFscycpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLmFuaW1hbHMgPSBfLnNodWZmbGUocmVzcG9uc2UuZGF0YS5tYXAoYW5pbWFsID0+ICh7XHJcbiAgICAgICAgICBzb3VuZDogYW5pbWFsLFxyXG4gICAgICAgICAgbmFtZTogYW5pbWFsLnN1YnN0cmluZygwLCBhbmltYWwuaW5kZXhPZignLicpKS5yZXBsYWNlKCdfJywgJyAnKS5jYXBpdGFsaXplKClcclxuICAgICAgICB9KSkpO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW1hbCBvZiAkc2NvcGUuYW5pbWFscykge1xyXG4gICAgICAgICAgYW5pbWFsLmFuc3dlcnMgPSBfLnNodWZmbGUoW2FuaW1hbC5uYW1lLCAuLi5nZXRSYW5kb21BbmltYWxzKGFuaW1hbC5uYW1lKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuYW5pbWFscyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5ndWVzcyA9IChhbmltYWwsIGd1ZXNzKSA9PiB7XHJcbiAgICAgIGFuaW1hbC5ndWVzcyA9IGd1ZXNzO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRSYW5kb21BbmltYWxzID0gbmFtZSA9PiBfLnNodWZmbGUoJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBuYW1lICE9PSBhbmltYWwubmFtZSkubWFwKGFuaW1hbCA9PiBhbmltYWwubmFtZSkpLnNsaWNlKDAsIDUpO1xyXG5cclxuICAgICRzY29wZS5nZXRTY29yZSA9ICgpID0+IGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAgICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxuICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1F1aXpHb29nbGVDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdnb29nbGUnKVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpekxvZ29zQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnbG9nb3MnKVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpek1vdmllc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ21vdmllcycpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmNvbnRyb2xsZXIoJ1F1aXpTa2VsZXRvbnNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBGaWxlU3ZjKSB7XHJcblxyXG4gICAgRmlsZVN2Yy5nZXRJbWFnZXMoJ3NrZWxldG9ucycpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLmFuaW1hbHMgPSBfLnNodWZmbGUocmVzcG9uc2UuZGF0YS5tYXAoYW5pbWFsID0+ICh7XHJcbiAgICAgICAgICBpbWFnZTogYW5pbWFsLFxyXG4gICAgICAgICAgbmFtZTogYW5pbWFsLnN1YnN0cmluZygwLCBhbmltYWwuaW5kZXhPZignLicpKS5yZXBsYWNlKCdfJywgJyAnKS5jYXBpdGFsaXplKClcclxuICAgICAgICB9KSkpO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW1hbCBvZiAkc2NvcGUuYW5pbWFscykge1xyXG4gICAgICAgICAgYW5pbWFsLmFuc3dlcnMgPSBfLnNodWZmbGUoW2FuaW1hbC5uYW1lLCAuLi5nZXRSYW5kb21BbmltYWxzKGFuaW1hbC5uYW1lKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuYW5pbWFscyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5ndWVzcyA9IChhbmltYWwsIGd1ZXNzKSA9PiB7XHJcbiAgICAgIGFuaW1hbC5ndWVzcyA9IGd1ZXNzO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRSYW5kb21BbmltYWxzID0gbmFtZSA9PiBfLnNodWZmbGUoJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBuYW1lICE9PSBhbmltYWwubmFtZSkubWFwKGFuaW1hbCA9PiBhbmltYWwubmFtZSkpLnNsaWNlKDAsIDEwKTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0U2NvcmUgPSAoKSA9PiBgJHskc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IGFuaW1hbC5uYW1lID09PSBhbmltYWwuZ3Vlc3MpLmxlbmd0aH0vJHskc2NvcGUuYW5pbWFscy5sZW5ndGh9YDtcclxuXHJcbiAgICAkc2NvcGUuaXNTY29yZVZpc2libGUgPSAoKSA9PiAkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IGFuaW1hbC5ndWVzcykubGVuZ3RoID09PSAkc2NvcGUuYW5pbWFscy5sZW5ndGg7XHJcbiAgfSk7Il19
