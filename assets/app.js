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
}), angular.module("app").controller("AppCtrl", function ($scope, LanguageSvc, UserSvc, $mdToast) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiY29udHJvbGxlcnMvYXBwLmN0cmwuanMiLCJjb250cm9sbGVycy9hc3Rlcm9pZHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2J1YmJsZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NoYXJhZGVzLmN0cmwuanMiLCJjb250cm9sbGVycy9jb250YWN0LmN0cmwuanMiLCJjb250cm9sbGVycy9leHBlcmllbmNlLmN0cmwuanMiLCJjb250cm9sbGVycy9ob2JiaWVzLmN0cmwuanMiLCJjb250cm9sbGVycy9sZW1taW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbGlzdHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xvZ2luLmN0cmwuanMiLCJjb250cm9sbGVycy9wb3N0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJvZmlsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvc2tpbGxzLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3MuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2FkbWluLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NnYW1lLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NzdGF0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvd29ya291dC5jdHJsLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJzZXJ2aWNlcy9jYXRlZ29yaWVzLnN2Yy5qcyIsInNlcnZpY2VzL2VtYWlsLnN2Yy5qcyIsInNlcnZpY2VzL2ZpbGUuc3ZjLmpzIiwic2VydmljZXMvZ2FtZS5zdmMuanMiLCJzZXJ2aWNlcy9sYW5ndWFnZS5zdmMuanMiLCJzZXJ2aWNlcy9wb3N0cy5zdmMuanMiLCJzZXJ2aWNlcy90ZW50aGluZ3Muc3ZjLmpzIiwic2VydmljZXMvdXNlci5zdmMuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2FuaW1hbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvZ29vZ2xlLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2xvZ29zLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL21vdmllcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9za2VsZXRvbnMuY3RybC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRvbWFpbnMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0cmluZyIsInByb3RvdHlwZSIsInZhbHVlIiwicmVkdWNlIiwicmVzdWx0IiwibGV0dGVyIiwicmVwbGFjZSIsInRoaXMiLCJTUEVDSUFMX0NIQVJBQ1RFUlMiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZURpYWNyaXRpY3MiLCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyIsImV4dHJhIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInJlcGxhY2VBbGwiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidW5kZWZpbmVkIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsIiRzY29wZSIsIkxhbmd1YWdlU3ZjIiwiVXNlclN2YyIsIiRtZFRvYXN0IiwidG9hc3QiLCJtZXNzYWdlIiwic2hvdyIsInNpbXBsZSIsInRleHRDb250ZW50IiwicG9zaXRpb24iLCJoaWRlRGVsYXkiLCIkIiwibG9hZCIsImZhZGVPdXQiLCJmYWRlSW4iLCJvbiIsImNsb3Nlc3QiLCJ0b2dnbGVDbGFzcyIsImNoZWNrZWQiLCJkb2N1bWVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRoZW1lQ291bnRlciIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImZsaXBUaGVtZSIsImhpZGUiLCJzZXRUaW1lb3V0IiwiZ2V0SlNPTiIsInNraWxscyIsImZpbHRlciIsInNraWxsIiwiaG9iYmllcyIsImpvYnMiLCJqb2IiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiY2hhcmFkZXMiLCJnZXRUaW1lU3BhbiIsImxhbmd1YWdlcyIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInNlbGVjdExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImhvdmVyZGl2IiwiZGl2aWQiLCJsZWZ0IiwiY2xpZW50WCIsInRvcCIsImNsaWVudFkiLCJnZXRFbGVtZW50QnlJZCIsImNzcyIsInRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsInVzZXIiLCJsb2dpbiIsInRoZW4iLCJyZXNwb25zZSIsIiRvbiIsIl8iLCJsb2dnZWRJbiIsIl9pZCIsImN1cnJlbnRVc2VyIiwiYmlydGhEYXRlIiwibG9hZGluZyIsImxvZ291dCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJjbGVhciIsImNhdGNoIiwiZXJyb3IiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsIiRsb2NhdGlvbiIsIkdhbWVTdmMiLCJhbm5vdW5jZSIsImNhbnZhcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGF0aCIsImFsZXJ0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZvbnQiLCJmaWxsU3R5bGUiLCJ0ZXh0QWxpZ24iLCJzaG90cyIsImFzdGVyb2lkcyIsInBvd2VydXBzIiwiZXhwbG9zaW9ucyIsIm1hcCIsInNwYWNlcGljcyIsInNwYWNlIiwicG93ZXJ1cFR5cGVzIiwibmFtZSIsImFubm91bmNlbWVudCIsImN5Y2xlIiwicm93cyIsImNvbHVtbnMiLCJzaXplIiwiaW1nIiwiSW1hZ2UiLCJhY3RpdmF0ZSIsInNwYWNlc2hpcCIsIm1heFNwZWVkIiwiY29vbGRvd24iLCJjb29sZG93blRpbWUiLCJyYW5nZSIsInNoaWVsZCIsImV4cGxvZGUiLCJzcGF3bkFzdGVyb2lkcyIsInBvd2VydXAiLCJhcnJheSIsInNyYyIsImV4cGxvc2lvbkltYWdlIiwiZXZhbHVhdGVLZXlzIiwicGxheWluZyIsInNob290Iiwicm90YXRpb24iLCJzcGVlZCIsInNjb3JlIiwiJGFwcGx5IiwiU3BhY2VzaGlwIiwiYXV0b1NwYXduIiwid2lkdGgiLCJoZWlnaHQiLCJjYW5ub24iLCJ4IiwieSIsImFuZ2xlIiwiaWQiLCJyb3VuZCIsIlNob3QiLCJtb3ZlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImZpbGwiLCJhc3Rlcm9pZCIsImhpdCIsImdhbWVPdmVyIiwiY29zIiwic2luIiwibGlmZXNwYW4iLCJBc3Rlcm9pZCIsImdldEVudHJ5UG9zaXRpb24iLCJyb3RhdGlvblNwZWVkIiwiRXhwbG9zaW9uIiwic2hvdCIsInBvaW50cyIsInNwYXduUG93ZXJ1cCIsIm9iamVjdCIsIlBvd2VydXAiLCJkZWxheSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJjb2x1bW4iLCJyb3ciLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiZ3JpZFgiLCJncmlkWSIsIm9iamVjdDEiLCJvYmplY3QyIiwia2V5cyIsImFtb3VudCIsImhpZ2hzY29yZSIsInNldEhpZ2hzY29yZSIsInJlc2l6ZUNhbnZhcyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlDb2RlIiwid2hpY2giLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3IiwiY2xlYXJSZWN0IiwiZ3JhZGllbnQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsInRhbGx5IiwiZmlsbFRleHQiLCJtZWFzdXJlVGV4dCIsImJhY2tncm91bmRJbWFnZSIsImJ1YmJsZXMiLCJjb2xvcnMiLCJCdWJibGUiLCJyYWRpdXMiLCJleHBhbmRpbmciLCJjaXJjdW1mZXJlbmNlIiwibWF4UmFkaXVzIiwidngiLCJ2eSIsImZpbHRlckJ1YmJsZXMiLCJidWJibGUiLCJzZWxlY3RXb3JkIiwiY2F0ZWdvcnkiLCJ3b3JkIiwiRW1haWxTdmMiLCJvcHRpb25zIiwidGV4dCIsImNvbnRhY3QiLCJlbWFpbCIsInBob25lIiwiYWJvdXQiLCJzZW5kaW5nIiwic2VudCIsInN0YXR1cyIsImVyciIsImdldFNraWxsIiwic2tpbGxDb2RlIiwiY29kZSIsIiR3aW5kb3ciLCJob2JieVNlbGVjdG9yVmlzaWJsZSIsInNlbGVjdGVkSG9iYnkiLCJzZWxlY3RIb2JieSIsImhvYmJ5Iiwic2hvd0hvYmJ5IiwiaW5kZXgiLCJpbWFnZXMiLCJMRUZUIiwiUklHSFQiLCJsZW1taW5nc0ltYWdlIiwiZGVjb3JJbWFnZSIsImxlbW1pbmdzIiwic3RhcnRlZCIsImFjdGlvbnMiLCJ3YWxrIiwic3RhcnQiLCJlbmQiLCJyZXZlcnNlIiwiaHVoIiwiZmFsbCIsImZseSIsInN0b3AiLCJjbGltYiIsImJ1aWxkIiwicHVuY2giLCJkaWciLCJMZW1taW5nIiwiaW5pdCIsImFjdCIsImFjdGlvbiIsImFuaW1hdGlvbiIsInNjYWxlIiwiaGF0Y2giLCJvcGVuIiwicmVjdCIsIkNhdGVnb3JpZXNTdmMiLCJzaG93Q2F0ZWdvcnkiLCJnZXRDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsInRhc2tzIiwiaiIsInRhc2siLCJzZWxlY3RDYXRlZ29yeSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWxlY3RlZFRhc2tzIiwic2VsZWN0YWJsZVRhc2tzIiwiZW50ZXJlZENhdGVnb3J5IiwibmV3Q2F0ZWdvcnkiLCJmb3VuZCIsImFkZENhdGVnb3J5IiwibmV3VGFzayIsInNlbGVjdFRhc2siLCJhZGRUYXNrIiwiZW50ZXJlZFRhc2siLCJyZW1vdmVUYXNrIiwidW5zZWxlY3RUYXNrIiwidGFza0xpc3QiLCJzcGxpY2UiLCJpbmRleE9mIiwic3RhcnRQcmlvcml0aXppbmciLCJzZXRQcmlvcml0eUxpc3QiLCJnZXRRdWVzdGlvbnMiLCJjb3VudGVyIiwidWkiLCJmaXJlYmFzZXVpIiwiQXV0aFVJIiwic3RhcnRVSSIsImNhbGxiYWNrcyIsInNpZ25JblN1Y2Nlc3MiLCJjcmVkZW50aWFsIiwicmVkaXJlY3RVcmwiLCJnZXRJZFRva2VuIiwiaWRUb2tlbiIsImF1dGhlbnRpY2F0ZSIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJlbWFpbFZlcmlmaWVkIiwiJGVtaXQiLCJtb2RhbCIsInNpZ25JbkZhaWx1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNyZWQiLCJzaWduSW5XaXRoQ3JlZGVudGlhbCIsInVpU2hvd24iLCJzdHlsZSIsImRpc3BsYXkiLCJzaWduSW5TdWNjZXNzVXJsIiwic2lnbkluT3B0aW9ucyIsIkdvb2dsZUF1dGhQcm92aWRlciIsIlBST1ZJREVSX0lEIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJzaWduSW5GbG93IiwiZXZlbnQiLCJyZXNldCIsIiRmaWx0ZXIiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsImJvZHkiLCJwb3N0IiwiZmV0Y2giLCJwb3N0cyIsImdldFBvc3QiLCJ1bnNoaWZ0IiwiY291bnRyaWVzIiwiZmxhZyIsInRpZGJpdCIsImRhdGVPcHRpb25zIiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJpbml0RGF0ZSIsImRhdGVwaWNrZXJNb2RlIiwidXNlcm5hbWVUb2dnbGUiLCJwYXNzd29yZFRvZ2dsZSIsInRvZ2dsZVVzZXJuYW1lIiwibmV3VXNlcm5hbWUiLCJ1c2VybmFtZSIsInRvZ2dsZVBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJjaGVja1Bhc3N3b3JkIiwicGFzc3dvcmQiLCJvcmlnaW5hbEJnIiwiYW5pbWF0ZSIsImJhY2tncm91bmRDb2xvciIsImNoYW5nZVBhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJjaGFuZ2VVc2VybmFtZSIsInVwZGF0ZVVzZXIiLCJmbGFncyIsInVzZXJGbGFncyIsImxvYWRDb3VudHJpZXMiLCIkcXVlcnkiLCJjb3VudHJ5IiwiJHdhdGNoIiwiaW5jbHVkZXMiLCJzZWxlY3RlZFNraWxsIiwic2tpbGxzVmlzaWJsZSIsInByb2plY3RzIiwibGFiZWxzIiwiZW1wbG95ZXIiLCJjb25jYXQiLCJmaWx0ZXJlZFByb2plY3RzIiwicHJvamVjdCIsInNldFNlbGVjdGVkU2tpbGwiLCJjaGFydE9wdGlvbnMiLCJjdXRvdXRQZXJjZW50YWdlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRvb2x0aXBzIiwiY2hhcnRTdHlsZSIsImltYWdlIiwiJHNjZSIsIlRlblRoaW5nc1N2YyIsInBhZ2UiLCJsaXN0cyIsInNlYXJjaCIsInNlYXJjaEZpZWxkIiwibmV3SXRlbSIsImxhbmd1YWdlRmlsdGVyIiwiY2F0ZWdvcnlGaWx0ZXIiLCJzZWxlY3RlZExpc3QiLCJoaWdobGlnaHRlZExpc3RzIiwiaGlnaGxpZ2h0ZWRMaXN0SWRzIiwibGlzdElkc1RvRGVsZXRlIiwiY29uZmlybWVkIiwiZXhoYXVzdGVkIiwib2JqZWN0Q2F0ZWdvcmllcyIsImJsdXJiVHlwZXMiLCJhcGkiLCJhZG1pbk9ubHkiLCJoYXZlQ29tbW9uSXRlbXMiLCJhcnIxIiwiYXJyMiIsInNvbWUiLCJrZXlEb3duIiwiaXMiLCJjcmVhdGVWYWx1ZSIsInRyaWdnZXIiLCJhZGRMaXN0IiwiY3JlYXRvciIsInZhbHVlcyIsImFuc3dlcnMiLCJpc0R5bmFtaWMiLCJzZXRTZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZExpc3QiLCJsaXN0IiwiZ2V0TGlzdCIsInJlYWRPbmx5IiwiYWRtaW4iLCJnZXRGaWx0ZXJDb3VudCIsInNlYXJjaExpc3RzIiwiYXN5bmMiLCJ2aWV3VmFsdWUiLCJoaWdobGlnaHRlZFNlYXJjaFRleHQiLCJyZWdleCIsInZhbHVlT3JkZXIiLCJmaWVsZCIsIm9yZGVyIiwib3JkZXJCeSIsImdldExpc3RzIiwiZ2V0TW9yZUxpc3RzIiwic2V0TGFuZ3VhZ2VGaWx0ZXIiLCJzZXRDYXRlZ29yeUZpbHRlciIsInRvZ2dsZUNhdGVnb3J5RmlsdGVyIiwiYWxsQ2F0ZWdvcmllcyIsImdldENhdGVnb3J5TGFiZWwiLCJzdWJjYXRlZ29yaWVzIiwic3ViY2F0ZWdvcnkiLCJzdGFydHNXaXRoIiwibGFiZWwiLCJqb2luIiwic29ydEJ5IiwibGltaXQiLCJsYW5ndWFnZU5vdCIsImNhdGVnb3JpZXNOb3QiLCJjb3VudCIsIm5leHRQYWdlIiwiZ2V0TGlzdE5hbWUiLCJsaXN0SWQiLCJ1cGRhdGVWYWx1ZSIsInVwZGF0ZWRJdGVtUmVzcG9uc2UiLCJ1cGRhdGVMaXN0VmFsdWUiLCJibHVyYlR5cGUiLCJkZWxldGVWYWx1ZSIsImhhc0R1cGxpY2F0ZSIsImNyZWF0ZWRJdGVtUmVzcG9uc2UiLCJjcmVhdGVMaXN0VmFsdWUiLCJ1cHNlcnRMaXN0IiwiYmx1cmIiLCJ2YWx1ZVRvRGVsZXRlIiwiZGVsZXRlTGlzdFZhbHVlIiwidXBkYXRlTGlzdCIsInVwZGF0ZXMiLCJzYXZpbmciLCJsaXN0SW5kZXgiLCJmaW5kSW5kZXgiLCJjaGFuZ2VzIiwiY3JlYXRlTGlzdCIsImFzc2lnbiIsImRlbGV0ZUxpc3QiLCJkZWxldGVMaXN0cyIsImNvbmZpcm1NZXJnZUxpc3RzIiwibWVyZ2VMaXN0cyIsImNvbmZpcm1EZWxldGVMaXN0cyIsInRvZ2dsZUhpZ2hsaWdodGVkTGlzdHMiLCJ0b2dnbGVIaWdobGlnaHRlZExpc3QiLCJoaWdobGlnaHRlZExpc3RJZCIsInNldERpZmZpY3VsdHkiLCJkaWZmaWN1bHR5Iiwic2V0RnJlcXVlbmN5IiwiZnJlcXVlbmN5IiwiZ2V0VXBkYXRlZENhdGVnb3JpZXMiLCJsaXN0Q2F0ZWdvcnkiLCJzcGxpdCIsInNldENhdGVnb3J5IiwidXBkYXRlZENhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwibGlzdHNUb1VwZGF0ZSIsImV2ZXJ5IiwiYWxsIiwibGlzdFRvVXBkYXRlIiwidXBkYXRlZExpc3QiLCJjYXRlZ29yeVN0YXR1cyIsImFuc3dlciIsInJlbW92ZUFsbEJ1dExldHRlcnMiLCJnZXRTZWxlY3RlZExpc3RzVGl0bGUiLCJnZXRCbHVyYnMiLCJ0eXBlIiwiZ2V0dGluZ0JsdXJicyIsImdldEVtYmVkVXJsIiwidmlkZW9JZCIsIm1hdGNoIiwidHJpbSIsInRydXN0QXNSZXNvdXJjZVVybCIsImdldExhbmd1YWdlcyIsImxhbmd1YWdlU3RhdHMiLCJnZXRMaXN0TGFuZ3VhZ2VTdGF0cyIsImNhdGVnb3J5U3RhdHMiLCJnZXRMaXN0Q2F0ZWdvcnlTdGF0cyIsImdldFVzZXJzIiwiZ2V0UXVldWUiLCJxdWV1ZSIsImdldFBhdXNlIiwicGF1c2VkIiwidXNlcnMiLCJ0b2dnbGVCYW4iLCJ0b2dnbGVQYXVzZSIsIiRzdGF0ZVBhcmFtcyIsImRpc2FibGVkQ2F0ZWdvcmllcyIsInVwZGF0ZUdhbWVDYXRlZ29yeSIsImdhbWUiLCJjIiwiZ2V0R2FtZSIsImRhdGFzZXRzIiwibGluZUNoYXJ0T3B0aW9ucyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwidGl0bGUiLCJnZXRQbGF5U3RhdHMiLCJ5ZWFycyIsInVuaXEiLCJtb250aHMiLCJ0aW1lcyIsInBsYXlTdGF0cyIsInNlcmllcyIsIm1vbnRoIiwidW5pcXVlUGxheWVycyIsImdldEdhbWVTdGF0cyIsImdhbWVTdGF0cyIsInNvcnRlZERhdGEiLCJ0aW1lUmVtYWluaW5nIiwidGltZUV4ZXJjaXNpbmciLCJ0aW1lUmVzdGluZyIsInJlc3QiLCJleGVyY2lzaW5nIiwic291bmRzIiwiQXVkaW8iLCJvZmYiLCJzd2l0Y2giLCJleGVyY2lzZXMiLCJwcm9ncmVzcyIsIndvcmtvdXQiLCJleGNlcmNpc2VUaW1lIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVyIiwiZXhlcmNpc2UiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRFeGVyY2lzZSIsInBsYXkiLCJkaXJlY3RpdmUiLCIkZG9jdW1lbnQiLCJyZXN0cmljdCIsInNjb3BlIiwiY2xpY2tPdXRzaWRlIiwibGluayIsImVsIiwiYXR0ciIsInRhcmdldCIsImNvbnRhaW5zIiwiJGV2YWwiLCIkc3RhdGUiLCIkY29tcGlsZSIsIiRpbnRlcnBvbGF0ZSIsImdldFN0eWxlIiwidGVtcGxhdGVTdHlsZVVybCIsImhyZWYiLCJyZWwiLCJlbGVtIiwidGVtcGxhdGVTdHlsZXMiLCJodG1sIiwic3RhcnRTeW1ib2wiLCJlbmRTeW1ib2wiLCJhcHBlbmQiLCJ0b1N0YXRlIiwidG9QYXJhbXMiLCJmcm9tU3RhdGUiLCJmcm9tUGFyYW1zIiwic3RhdGVzIiwicGFyZW50IiwiZ2V0Iiwidmlld3MiLCJ2aWV3IiwiZmxhdCIsImdldFN0eWxlcyIsIiRodHRwIiwic3ZjIiwiZ2V0VGFza3MiLCJjaG9pY2VzIiwicHJpb3JpdHlMaXN0IiwiZmlyc3RDaG9pY2UiLCJzZWNvbmRDaG9pY2UiLCJjaG9pY2UiLCJ0IiwibSIsInNodWZmbGUiLCJnZXRQcmlvcml0eUxpc3QiLCJnZXRRdWl6RmlsZXMiLCJxdWl6IiwiZ2V0SGlnaHNjb3JlIiwicHV0IiwiZGVsZXRlIiwicmVwb3J0TGlzdCIsImdldFVzZXIiLCJzZXRUb2tlbiIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiY3JlYXRlVXNlciIsIkZpbGVTdmMiLCJhbmltYWxzIiwiYW5pbWFsIiwic291bmQiLCJzdWJzdHJpbmciLCJjYXBpdGFsaXplIiwiZ2V0UmFuZG9tQW5pbWFscyIsImd1ZXNzIiwiZ2V0U2NvcmUiLCJpc1Njb3JlVmlzaWJsZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQUEsMkJBQUFBLEdBQUEsQ0FDQTtJQUNBQyxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQTtFQUdBQyxPQUFBQSxHQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFD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QUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQUFDLE1BQUFBLENBQUEsVUFBQUMsY0FBQUEsRUFBQUMsa0JBQUFBLEVBQUFDLG1CQUFBQSxFQUFBQyxpQkFBQUEsRUFBQUE7RUFDQUYsa0JBQUFBLENBQUFHLFNBQUFBLENBQUEsT0FBQSxDQUFBLEVBQ0FGLG1CQUFBQSxDQUFBSCxNQUFBQSxDQUFBTSxVQUFBQSxDQUFBQSxDQUFBLENBQUEsQ0FBQSxFQUVBTCxjQUFBQSxDQUNBTSxLQUFBQSxDQUFBLE1BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLE9BQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFlBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGFBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsUUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLFlBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxXQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsVUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsV0FBQTtJQUNBRSxVQUFBQSxFQUFBLGNBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE1BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLE9BQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsaUJBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsb0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGdCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxpQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxvQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsY0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGlCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxhQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsRUFHQUwsaUJBQUFBLENBQUFPLFNBQUFBLENBQUE7SUFDQUMsT0FBQUEsRUFBQUEsQ0FBQSxDQUFBO0lBQ0FDLFdBQUFBLEVBQUFBLENBQUE7RUFBQSxDQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUNwSUFmLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FlLE9BQUFBLENBQUEsY0FBQSxFQUFBLFVBQUFDLFVBQUFBLEVBQUFDLFFBQUFBLEVBQUFBO0VBU0EsSUFBQUMsVUFBQUE7SUFDQUMsT0FBQUEsR0FBQSxTQUFBQSxDQUFBLEVBQUE7TUFBQSxDQUNBRCxVQUFBQSxHQUFBLElBQUFFLFNBQUFBLENBVEEsUUFBQSxLQUFBQyxNQUFBQSxDQUFBQyxRQUFBQSxDQUFBQyxRQUFBQSxHQUNBLFFBQUEsR0FBQUYsTUFBQUEsQ0FBQUMsUUFBQUEsQ0FBQUUsSUFBQUEsR0FFQSxPQUFBLEdBQUFILE1BQUFBLENBQUFDLFFBQUFBLENBQUFFLElBQUFBLENBQUFBLEVBUUFDLE1BQUFBLEdBQUEsWUFBQTtRQUNBQyxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBLHFCQUFBLENBQ0E7TUFBQSxDQUFBLEVBRUFULFVBQUFBLENBQUFVLE9BQUFBLEdBQUEsVUFBQUMsQ0FBQUEsRUFBQUE7UUFDQUgsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQSxtQ0FBQSxDQUFBLEVBQ0FWLFFBQUFBLENBQUFFLE9BQUFBLEVBQUEsR0FBQSxDQUNBO01BQUEsQ0FBQSxFQUVBRCxVQUFBQSxDQUFBWSxPQUFBQSxHQUFBLFVBQUFELENBQUFBLEVBQUFBO1FBQ0FILE9BQUFBLENBQUFDLEdBQUFBLENBQUEsU0FBQSxHQUFBRSxDQUFBQSxHQUFBLFlBQUEsR0FBQVgsVUFBQUEsQ0FBQWEsVUFBQUEsQ0FDQTtNQUFBLENBQUEsRUFFQWIsVUFBQUEsQ0FBQWMsU0FBQUEsR0FBQSxVQUFBSCxDQUFBQSxFQUFBQTtRQUNBLElBQUFJLE9BQUFBLEdBQUFDLElBQUFBLENBQUFD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Q0FBQUssSUFBQUEsQ0FBQSxPQUFBLENBQUE7RUFFQUUsR0FBQUEsQ0FBQUUsSUFBQUEsR0FBQSxvQkFBQSxFQUNBRixHQUFBQSxDQUFBRyxTQUFBQSxHQUFBLEtBQUEsRUFDQUgsR0FBQUEsQ0FBQUksU0FBQUEsR0FBQSxRQUFBO0VBQ0EsSUFBQUMsS0FBQUEsR0FBQSxDQUFBLENBQUE7RUFDQSxNQUFBQyxTQUFBQSxHQUFBLENBQUEsQ0FBQTtJQUNBQyxRQUFBQSxHQUFBLENBQUEsQ0FBQTtJQUNBQyxVQUFBQSxHQUFBLENBQUEsQ0FBQTtJQUNBQyxHQUFBQSxHQUFBLENBQUEsQ0FBQTtJQUNBQyxTQUFBQSxHQUFBLENBQUE7RUFDQSxJQUFBQyxLQUFBQSxHQUFBeEUsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQUQsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQXdFLFNBQUFBLENBQUFBO0VBQ0EsTUFBQUUsWUFBQUEsR0FBQSxDQUNBO0lBQ0FDLElBQUFBLEVBQUEsT0FBQTtJQUNBQyxZQUFBQSxFQUFBLGFBQUE7SUFDQUMsS0FBQUEsRUFBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUE7TUFDQUMsT0FBQUEsRUFBQSxDQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO01BQ0EzSyxDQUFBQSxFQUFBLENBQUE7TUFDQVUsU0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUE7SUFFQWtLLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7SUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtNQUNBQSxTQUFBQSxDQUFBQyxRQUFBQSxJQUFBLEdBQ0E7SUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBVixJQUFBQSxFQUFBLFVBQUE7SUFDQUMsWUFBQUEsRUFBQSxZQUFBO0lBQ0FDLEtBQUFBLEVBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBO01BQ0FDLE9BQUFBLEVBQUEsQ0FBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtNQUNBM0ssQ0FBQUEsRUFBQSxDQUFBO01BQ0FVLFNBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBO0lBRUFrSyxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO0lBQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7TUFDQUEsU0FBQUEsQ0FBQUUsUUFBQUEsR0FBQSxDQUFBLEtBQ0FGLFNBQUFBLENBQUFHLFlBQUFBLElBQUEsQ0FBQSxDQUVBO0lBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQVosSUFBQUEsRUFBQSxPQUFBO0lBQ0FDLFlBQUFBLEVBQUEsZ0JBQUE7SUFDQUMsS0FBQUEsRUFBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUE7TUFDQUMsT0FBQUEsRUFBQSxDQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBO01BQ0EzSyxDQUFBQSxFQUFBLENBQUE7TUFDQVUsU0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUE7SUFFQWtLLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7SUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtNQUNBQSxTQUFBQSxDQUFBSSxLQUFBQSxJQUFBLENBQ0E7SUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBYixJQUFBQSxFQUFBLFFBQUE7SUFDQUMsWUFBQUEsRUFBQSxRQUFBO0lBQ0FDLEtBQUFBLEVBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBO01BQ0FDLE9BQUFBLEVBQUEsQ0FBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtNQUNBM0ssQ0FBQUEsRUFBQSxDQUFBO01BQ0FVLFNBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBO0lBRUFrSyxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO0lBQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7TUFDQUEsU0FBQUEsQ0FBQUssTUFBQUEsR0FBQUEsQ0FBQSxDQUNBO0lBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQWQsSUFBQUEsRUFBQSxNQUFBO0lBQ0FD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R0FBQSxHQUFBbUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FDQSxNQUFBLEVBQ0EsTUFBQSxHQUNBbkssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBbUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FwSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUFtSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXBLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQW1LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxDQUFBLEVBRUFILFFBQUFBLENBQUFFLFlBQUFBLENBQ0EsS0FBQSxFQUNBLE1BQUEsR0FDQW5LLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQW1LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBcEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBbUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FwSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUFtSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEdBQ0FuSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFtSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXBLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQW1LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBcEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxH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O01BQUEsQ0FBQTtNQUVBRyxHQUFBQSxFQUFBO1FBQ0FMLEtBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F2SSxPQUFBQSxFQUFBLENBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0F5SSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBSSxJQUFBQSxFQUFBO1FBQ0FOLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F2SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0F5SSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBSyxLQUFBQSxFQUFBO1FBQ0FQLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F2SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0F5SSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBTSxLQUFBQSxFQUFBO1FBQ0FSLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F2SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0F5SSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBTyxLQUFBQSxFQUFBO1FBQ0FULEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F2SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0F5SSxPQUFBQSxFQUFBQSxDQUFB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LENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxxQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxRQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsV0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxnQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsT0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxlQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsd0JBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsVUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxZQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsY0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGtCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxpQ0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxrQ0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxRQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxlQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxRQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEseUJBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsdUNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsMEJBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsT0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxhQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsY0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsT0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsTUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxZQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsa0JBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxnQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLG9CQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxNQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLDZCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGlDQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLHNEQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxlQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsT0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxXQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxRQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsbUJBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSw4Q0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxXQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE1BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsZUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxRQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsbUNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsVUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxXQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxhQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsZ0NBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsTUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSwyQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsT0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsVUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsdUJBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsd0NBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsb0JBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxnQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxZQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGtDQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsYUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxlQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsWUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxRQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxRQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLHNCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsNEJBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsWUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxrQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSw0Q0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxNQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsVUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLDBCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsWUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxZQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsV0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxlQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxXQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsTUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxhQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE1BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxNQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGtCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGtCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsVUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxRQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLDJCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsYUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxxQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsVUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxRQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLG9CQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsY0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxpQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxZQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxXQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLDhDQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsd0JBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsVUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxjQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsYUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSx1QkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxhQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLDJCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLHNCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsMEJBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsTUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSw2QkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxNQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsWUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsY0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxxQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxRQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLDJCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLDhCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxzQ0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSwwQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsVUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxrQ0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxtQ0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSx5QkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxzQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsbUJBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFB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LENBQUEwbUIsT0FBQUEsQ0FBQXhrQixNQUFBQSxDQUFBeWtCLE1BQUFBLElBQUF0Z0IsSUFBQUEsS0FBQXNnQixNQUFBQSxDQUFBdGdCLElBQUFBLENBQUFBLENBQUFKLEdBQUFBLENBQUEwZ0IsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQXRnQixJQUFBQSxDQUFBQSxDQUFBQSxDQUFBMUssS0FBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxDQUFBO0VBRUFxRSxNQUFBQSxDQUFBaW5CLFFBQUFBLEdBQUEsTUFDQSxHQUFBam5CLE1BQUFBLENBQUEwbUIsT0FBQUEsQ0FBQXhrQixNQUFBQSxDQUFBeWtCLE1BQUFBLElBQUFBLE1BQUFBLENBQUF0Z0IsSUFBQUEsS0FBQXNnQixNQUFBQSxDQUFBSyxLQUFBQSxDQUFBQSxDQUFBaHJCLE1BQUFBLElBQUFnRSxNQUFBQSxDQUFBMG1CLE9BQUFBLENBQUExcUIsTUFBQUEsRUFBQUEsRUFFQWdFLE1BQUFBLENBQUFrbkIsY0FBQUEsR0FBQSxNQUFBbG5CLE1BQUFBLENBQUEwbUIsT0FBQUEsQ0FBQXhrQixNQUFBQSxDQUFBeWtCLE1BQUFBLElBQUFBLE1BQUFBLENBQUFLLEtBQUFBLENBQUFBLENBQUFockIsTUFBQUEsS0FBQWdFLE1BQUFBLENBQUEwbUIsT0FBQUEsQ0FBQTFxQixNQUNBO0FBQUEsQ0FBQSxDQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAgPSBbXHJcbiAge1xyXG4gICAgYmFzZTogXCJBXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDFcXHUyNEI2XFx1RkYyMVxcdTAwQzBcXHUwMEMxXFx1MDBDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHUwMEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHUwMEM0XFx1MDFERVxcdTFFQTJcXHUwMEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFBXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFFXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwQzZcXHUwMUZDXFx1MDFFMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQU9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOFxcdUE3M0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0MlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJDXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDNcXHUyNEI4XFx1RkYyM1xcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMEM3XFx1MUUwOFxcdTAxODdcXHUwMjNCXFx1QTczRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ0XFx1MjRCOVxcdUZGMjRcXHUxRTBBXFx1MDEwRVxcdTFFMENcXHUxRTEwXFx1MUUxMlxcdTFFMEVcXHUwMTEwXFx1MDE4QlxcdTAxOEFcXHUwMTg5XFx1QTc3OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMVxcdTAxQzRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjJcXHUwMUM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJFXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDVcXHUyNEJBXFx1RkYyNVxcdTAwQzhcXHUwMEM5XFx1MDBDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHUwMENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ2XFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0N1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJIXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJJXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDlcXHUyNEJFXFx1RkYyOVxcdTAwQ0NcXHUwMENEXFx1MDBDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHUwMENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJKXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEFcXHUyNEJGXFx1RkYyQVxcdTAxMzRcXHUwMjQ4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJLXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNENcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTEpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDREXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRFXFx1MjRDM1xcdUZGMkVcXHUwMUY4XFx1MDE0M1xcdTAwRDFcXHUxRTQ0XFx1MDE0N1xcdTFFNDZcXHUwMTQ1XFx1MUU0QVxcdTFFNDhcXHUwMjIwXFx1MDE5RFxcdUE3OTBcXHVBN0E0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNEZcXHUyNEM0XFx1RkYyRlxcdTAwRDJcXHUwMEQzXFx1MDBENFxcdTFFRDJcXHUxRUQwXFx1MUVENlxcdTFFRDRcXHUwMEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx1MDBENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHUwMEQ4XFx1MDFGRVxcdTAxODZcXHUwMTlGXFx1QTc0QVxcdUE3NENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9JXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9PXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NEVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9VXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAyMjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlBcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1MFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUxXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlJcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1MlxcdTI0QzdcXHVGRjMyXFx1MDE1NFxcdTFFNThcXHUwMTU4XFx1MDIxMFxcdTAyMTJcXHUxRTVBXFx1MUU1Q1xcdTAxNTZcXHUxRTVFXFx1MDI0Q1xcdTJDNjRcXHVBNzVBXFx1QTdBNlxcdUE3ODJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlNcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1M1xcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJUWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJVXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTVcXHUyNENBXFx1RkYzNVxcdTAwRDlcXHUwMERBXFx1MDBEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx1MDBEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIldcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1N1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU4XFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU5XFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx1MDBERFxcdTAxNzZcXHUxRUY4XFx1MDIzMlxcdTFFOEVcXHUwMTc4XFx1MUVGNlxcdTFFRjRcXHUwMUIzXFx1MDI0RVxcdTFFRkVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1QVxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2MVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxcdTAwRTBcXHUwMEUxXFx1MDBFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHUwMEUzXFx1MDEwMVxcdTAxMDNcXHUxRUIxXFx1MUVBRlxcdTFFQjVcXHUxRUIzXFx1MDIyN1xcdTAxRTFcXHUwMEU0XFx1MDFERlxcdTFFQTNcXHUwMEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFhXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFlXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwRTZcXHUwMUZEXFx1MDFFM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYW9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOVxcdUE3M0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0RdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2MlxcdTI0RDFcXHVGRjQyXFx1MUUwM1xcdTFFMDVcXHUxRTA3XFx1MDE4MFxcdTAxODNcXHUwMjUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJjXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjNcXHUyNEQyXFx1RkY0M1xcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHUwMEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjNcXHUwMUM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJlXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjVcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJnXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjdcXHUyNEQ2XFx1RkY0N1xcdTAxRjVcXHUwMTFEXFx1MUUyMVxcdTAxMUZcXHUwMTIxXFx1MDFFN1xcdTAxMjNcXHUwMUU1XFx1MDI2MFxcdUE3QTFcXHUxRDc5XFx1QTc3Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY4XFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImh2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxOTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImlcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2OVxcdTI0RDhcXHVGRjQ5XFx1MDBFQ1xcdTAwRURcXHUwMEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx1MDBFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QVxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJrXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkJcXHUyNERBXFx1RkY0QlxcdTFFMzFcXHUwMUU5XFx1MUUzM1xcdTAxMzdcXHUxRTM1XFx1MDE5OVxcdTJDNkFcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBN0EzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJsXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkNcXHUyNERCXFx1RkY0Q1xcdTAxNDBcXHUwMTNBXFx1MDEzRVxcdTFFMzdcXHUxRTM5XFx1MDEzQ1xcdTFFM0RcXHUxRTNCXFx1MDE3RlxcdTAxNDJcXHUwMTlBXFx1MDI2QlxcdTJDNjFcXHVBNzQ5XFx1QTc4MVxcdUE3NDddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm1cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2RFxcdTI0RENcXHVGRjREXFx1MUUzRlxcdTFFNDFcXHUxRTQzXFx1MDI3MVxcdTAyNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RVxcdTI0RERcXHVGRjRFXFx1MDFGOVxcdTAxNDRcXHUwMEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RlxcdTI0REVcXHVGRjRGXFx1MDBGMlxcdTAwRjNcXHUwMEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxcdTAwRjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHUwMEY2XFx1MDIyQlxcdTFFQ0ZcXHUwMTUxXFx1MDFEMlxcdTAyMERcXHUwMjBGXFx1MDFBMVxcdTFFRERcXHUxRURCXFx1MUVFMVxcdTFFREZcXHUxRUUzXFx1MUVDRFxcdTFFRDlcXHUwMUVCXFx1MDFFRFxcdTAwRjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib2lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib3VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib29cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwicFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDcwXFx1MjRERlxcdUZGNTBcXHUxRTU1XFx1MUU1N1xcdTAxQTVcXHUxRDdEXFx1QTc1MVxcdUE3NTNcXHVBNzU1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJxXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiclwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDcyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwic1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDczXFx1MjRFMlxcdUZGNTNcXHUwMERGXFx1MDE1QlxcdTFFNjVcXHUwMTVEXFx1MUU2MVxcdTAxNjFcXHUxRTY3XFx1MUU2M1xcdTFFNjlcXHUwMjE5XFx1MDE1RlxcdTAyM0ZcXHVBN0E5XFx1QTc4NVxcdTFFOUJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTcyOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDc1XFx1MjRFNFxcdUZGNTVcXHUwMEY5XFx1MDBGQVxcdTAwRkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxcdTAwRkNcXHUwMURDXFx1MDFEOFxcdTAxRDZcXHUwMURBXFx1MUVFN1xcdTAxNkZcXHUwMTcxXFx1MDFENFxcdTAyMTVcXHUwMjE3XFx1MDFCMFxcdTFFRUJcXHUxRUU5XFx1MUVFRlxcdTFFRURcXHUxRUYxXFx1MUVFNVxcdTFFNzNcXHUwMTczXFx1MUU3N1xcdTFFNzVcXHUwMjg5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2eVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzYxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ3XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzdcXHUyNEU2XFx1RkY1N1xcdTFFODFcXHUxRTgzXFx1MDE3NVxcdTFFODdcXHUxRTg1XFx1MUU5OFxcdTFFODlcXHUyQzczXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ4XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzhcXHUyNEU3XFx1RkY1OFxcdTFFOEJcXHUxRThEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzlcXHUyNEU4XFx1RkY1OVxcdTFFRjNcXHUwMEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxcdTAwRkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3QVxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjNdL2csXHJcbiAgfSxcclxuXTtcclxudmFyIGRvbWFpbnMgPSBbXHJcbiAgXCIuY29tXCIsXHJcbiAgXCIub3JnXCIsXHJcbiAgXCIubmV0XCIsXHJcbiAgXCIuYWNcIixcclxuICBcIi5hZFwiLFxyXG4gIFwiLmFlXCIsXHJcbiAgXCIuYWZcIixcclxuICBcIi5hZ1wiLFxyXG4gIFwiLmFpXCIsXHJcbiAgXCIuYWxcIixcclxuICBcIi5hbVwiLFxyXG4gIFwiLmFvXCIsXHJcbiAgXCIuYXFcIixcclxuICBcIi5hclwiLFxyXG4gIFwiLmFzXCIsXHJcbiAgXCIuYXRcIixcclxuICBcIi5hdVwiLFxyXG4gIFwiLmF3XCIsXHJcbiAgXCIuYXhcIixcclxuICBcIi5helwiLFxyXG4gIFwiLmJhXCIsXHJcbiAgXCIuYmJcIixcclxuICBcIi5iZFwiLFxyXG4gIFwiLmJlXCIsXHJcbiAgXCIuYmZcIixcclxuICBcIi5iZ1wiLFxyXG4gIFwiLmJoXCIsXHJcbiAgXCIuYmlcIixcclxuICBcIi5ialwiLFxyXG4gIFwiLmJtXCIsXHJcbiAgXCIuYm5cIixcclxuICBcIi5ib1wiLFxyXG4gIFwiLmJxXCIsXHJcbiAgXCIuYnJcIixcclxuICBcIi5ic1wiLFxyXG4gIFwiLmJ0XCIsXHJcbiAgXCIuYndcIixcclxuICBcIi5ieVwiLFxyXG4gIFwiLmJ6XCIsXHJcbiAgXCIuY2FcIixcclxuICBcIi5jY1wiLFxyXG4gIFwiLmNkXCIsXHJcbiAgXCIuY2ZcIixcclxuICBcIi5jZ1wiLFxyXG4gIFwiLmNoXCIsXHJcbiAgXCIuY2lcIixcclxuICBcIi5ja1wiLFxyXG4gIFwiLmNsXCIsXHJcbiAgXCIuY21cIixcclxuICBcIi5jblwiLFxyXG4gIFwiLmNvXCIsXHJcbiAgXCIuY3JcIixcclxuICBcIi5jdVwiLFxyXG4gIFwiLmN2XCIsXHJcbiAgXCIuY3dcIixcclxuICBcIi5jeFwiLFxyXG4gIFwiLmN5XCIsXHJcbiAgXCIuY3pcIixcclxuICBcIi5kZVwiLFxyXG4gIFwiLmRqXCIsXHJcbiAgXCIuZGtcIixcclxuICBcIi5kbVwiLFxyXG4gIFwiLmRvXCIsXHJcbiAgXCIuZHpcIixcclxuICBcIi5lY1wiLFxyXG4gIFwiLmVlXCIsXHJcbiAgXCIuZWdcIixcclxuICBcIi5laFwiLFxyXG4gIFwiLmVyXCIsXHJcbiAgXCIuZXNcIixcclxuICBcIi5ldFwiLFxyXG4gIFwiLmV1XCIsXHJcbiAgXCIuZmlcIixcclxuICBcIi5malwiLFxyXG4gIFwiLmZrXCIsXHJcbiAgXCIuZm1cIixcclxuICBcIi5mb1wiLFxyXG4gIFwiLmZyXCIsXHJcbiAgXCIuZ2FcIixcclxuICBcIi5nZFwiLFxyXG4gIFwiLmdlXCIsXHJcbiAgXCIuZ2ZcIixcclxuICBcIi5nZ1wiLFxyXG4gIFwiLmdoXCIsXHJcbiAgXCIuZ2lcIixcclxuICBcIi5nbFwiLFxyXG4gIFwiLmdtXCIsXHJcbiAgXCIuZ25cIixcclxuICBcIi5ncFwiLFxyXG4gIFwiLmdxXCIsXHJcbiAgXCIuZ3JcIixcclxuICBcIi5nc1wiLFxyXG4gIFwiLmd0XCIsXHJcbiAgXCIuZ3VcIixcclxuICBcIi5nd1wiLFxyXG4gIFwiLmd5XCIsXHJcbiAgXCIuaGtcIixcclxuICBcIi5obVwiLFxyXG4gIFwiLmhuXCIsXHJcbiAgXCIuaHJcIixcclxuICBcIi5odFwiLFxyXG4gIFwiLmh1XCIsXHJcbiAgXCIuaWRcIixcclxuICBcIi5pZVwiLFxyXG4gIFwiLmlsXCIsXHJcbiAgXCIuaW1cIixcclxuICBcIi5pblwiLFxyXG4gIFwiLmlvXCIsXHJcbiAgXCIuaXFcIixcclxuICBcIi5pclwiLFxyXG4gIFwiLmlzXCIsXHJcbiAgXCIuaXRcIixcclxuICBcIi5qZVwiLFxyXG4gIFwiLmptXCIsXHJcbiAgXCIuam9cIixcclxuICBcIi5qcFwiLFxyXG4gIFwiLmtlXCIsXHJcbiAgXCIua2dcIixcclxuICBcIi5raFwiLFxyXG4gIFwiLmtpXCIsXHJcbiAgXCIua21cIixcclxuICBcIi5rblwiLFxyXG4gIFwiLmtwXCIsXHJcbiAgXCIua3JcIixcclxuICBcIi5rd1wiLFxyXG4gIFwiLmt5XCIsXHJcbiAgXCIua3pcIixcclxuICBcIi5sYVwiLFxyXG4gIFwiLmxiXCIsXHJcbiAgXCIubGNcIixcclxuICBcIi5saVwiLFxyXG4gIFwiLmxrXCIsXHJcbiAgXCIubHJcIixcclxuICBcIi5sc1wiLFxyXG4gIFwiLmx0XCIsXHJcbiAgXCIubHVcIixcclxuICBcIi5sdlwiLFxyXG4gIFwiLmx5XCIsXHJcbiAgXCIubWFcIixcclxuICBcIi5tY1wiLFxyXG4gIFwiLm1kXCIsXHJcbiAgXCIubWVcIixcclxuICBcIi5tZ1wiLFxyXG4gIFwiLm1oXCIsXHJcbiAgXCIubWtcIixcclxuICBcIi5tbFwiLFxyXG4gIFwiLm1tXCIsXHJcbiAgXCIubW5cIixcclxuICBcIi5tb1wiLFxyXG4gIFwiLm1wXCIsXHJcbiAgXCIubXFcIixcclxuICBcIi5tclwiLFxyXG4gIFwiLm1zXCIsXHJcbiAgXCIubXRcIixcclxuICBcIi5tdVwiLFxyXG4gIFwiLm12XCIsXHJcbiAgXCIubXdcIixcclxuICBcIi5teFwiLFxyXG4gIFwiLm15XCIsXHJcbiAgXCIubXpcIixcclxuICBcIi5uYVwiLFxyXG4gIFwiLm5jXCIsXHJcbiAgXCIubmVcIixcclxuICBcIi5uZlwiLFxyXG4gIFwiLm5nXCIsXHJcbiAgXCIubmlcIixcclxuICBcIi5ubFwiLFxyXG4gIFwiLm5vXCIsXHJcbiAgXCIubnBcIixcclxuICBcIi5uclwiLFxyXG4gIFwiLm51XCIsXHJcbiAgXCIubnpcIixcclxuICBcIi5vbVwiLFxyXG4gIFwiLnBhXCIsXHJcbiAgXCIucGVcIixcclxuICBcIi5wZlwiLFxyXG4gIFwiLnBnXCIsXHJcbiAgXCIucGhcIixcclxuICBcIi5wa1wiLFxyXG4gIFwiLnBsXCIsXHJcbiAgXCIucG1cIixcclxuICBcIi5wblwiLFxyXG4gIFwiLnByXCIsXHJcbiAgXCIucHNcIixcclxuICBcIi5wdFwiLFxyXG4gIFwiLnB3XCIsXHJcbiAgXCIucHlcIixcclxuICBcIi5xYVwiLFxyXG4gIFwiLnJlXCIsXHJcbiAgXCIucm9cIixcclxuICBcIi5yc1wiLFxyXG4gIFwiLnJ1XCIsXHJcbiAgXCIucndcIixcclxuICBcIi5zYVwiLFxyXG4gIFwiLnNiXCIsXHJcbiAgXCIuc2NcIixcclxuICBcIi5zZFwiLFxyXG4gIFwiLnNlXCIsXHJcbiAgXCIuc2dcIixcclxuICBcIi5zaFwiLFxyXG4gIFwiLnNpXCIsXHJcbiAgXCIuc2tcIixcclxuICBcIi5zbFwiLFxyXG4gIFwiLnNtXCIsXHJcbiAgXCIuc25cIixcclxuICBcIi5zb1wiLFxyXG4gIFwiLnNyXCIsXHJcbiAgXCIuc3NcIixcclxuICBcIi5zdFwiLFxyXG4gIFwiLnN1XCIsXHJcbiAgXCIuc3ZcIixcclxuICBcIi5zeFwiLFxyXG4gIFwiLnN5XCIsXHJcbiAgXCIuc3pcIixcclxuICBcIi50Y1wiLFxyXG4gIFwiLnRkXCIsXHJcbiAgXCIudGZcIixcclxuICBcIi50Z1wiLFxyXG4gIFwiLnRoXCIsXHJcbiAgXCIudGpcIixcclxuICBcIi50a1wiLFxyXG4gIFwiLnRsXCIsXHJcbiAgXCIudG1cIixcclxuICBcIi50blwiLFxyXG4gIFwiLnRvXCIsXHJcbiAgXCIudHJcIixcclxuICBcIi50dFwiLFxyXG4gIFwiLnR2XCIsXHJcbiAgXCIudHdcIixcclxuICBcIi50elwiLFxyXG4gIFwiLnVhXCIsXHJcbiAgXCIudWdcIixcclxuICBcIi51a1wiLFxyXG4gIFwiLnVzXCIsXHJcbiAgXCIudXlcIixcclxuICBcIi51elwiLFxyXG4gIFwiLnZhXCIsXHJcbiAgXCIudmNcIixcclxuICBcIi52ZVwiLFxyXG4gIFwiLnZnXCIsXHJcbiAgXCIudmlcIixcclxuICBcIi52blwiLFxyXG4gIFwiLnZ1XCIsXHJcbiAgXCIud2ZcIixcclxuICBcIi53c1wiLFxyXG4gIFwiLnllXCIsXHJcbiAgXCIueXRcIixcclxuICBcIi56YVwiLFxyXG4gIFwiLnptXCIsXHJcbiAgXCIuendcIixcclxuXTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZURpYWNyaXRpY3NcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwLnJlZHVjZSgocmVzdWx0LCBsZXR0ZXIpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKGxldHRlci5sZXR0ZXJzLCBsZXR0ZXIuYmFzZSk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IFNQRUNJQUxfQ0hBUkFDVEVSUyA9IFwiXFxcXFxcXFwvICE/QCMkJV4mKigpXys6Lnt9LDtcXFxcLSdgYOKAmeKAmFxcXCJcIjtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbJHtTUEVDSUFMX0NIQVJBQ1RFUlN9XWAsIFwiZ2lcIiksIFwiXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlQWxsQnV0TGV0dGVyc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlKCkucmVtb3ZlRGlhY3JpdGljcygpLnJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzKCk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjb25jZWFsXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGV4dHJhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFteJHtTUEVDSUFMX0NIQVJBQ1RFUlN9JHtleHRyYX1dYCwgXCJnaVwiKSwgXCLigY5cIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjYXBpdGFsaXplXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnNsaWNlKDEpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlSFRNTFwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoXCI+XCIsIFwiXFx1MjI3QlwiKS5yZXBsYWNlKFwiPFwiLCBcIlxcdTIyN0FcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJwYXJzZVN5bWJvbHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlQWxsKFwiJlwiLCBcIiZhbXA7XCIpLnJlcGxhY2UoXCI8XCIsIFwiJmx0O1wiKS5yZXBsYWNlKFwiPlwiLCBcIiZndDtcIikucmVwbGFjZUFsbChcIiNcIiwgXCImbnVtO1wiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlcGxhY2VBcnJheVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChmaW5kLCByZXBsYWNlKSB7XHJcbiAgICB2YXIgcmVwbGFjZVN0cmluZyA9IHRoaXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcmVwbGFjZVN0cmluZyA9IHJlcGxhY2VTdHJpbmcucmVwbGFjZShmaW5kW2ldLCByZXBsYWNlW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXBsYWNlU3RyaW5nO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwibWFza1VSTHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlQXJyYXkoW1wiaHR0cHM6Ly9cIiwgXCJodHRwOi8vXCJdLCBcIm5vcGU6Ly9cIikucmVwbGFjZUFycmF5KGRvbWFpbnMsIFwiLm5vcGVcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJtYWtlUmVhZGFibGVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VQZXJjZW50YWdlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGRlY2ltYWxzKSB7XHJcbiAgICBpZiAoZGVjaW1hbHMgPT09IHVuZGVmaW5lZCkgZGVjaW1hbHMgPSAyO1xyXG4gICAgcmV0dXJuIGAkeyh0aGlzICogMTAwKS50b0ZpeGVkKGRlY2ltYWxzKX0lYDtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHNvcnRPYmplY3QgPSAob2JqLCBkaXJlY3Rpb24pID0+IHtcclxuICBsZXQgYXJyID0gW107XHJcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICBhcnIucHVzaChba2V5LCBvYmpba2V5XV0pO1xyXG4gIH1cclxuICBhcnIuc29ydCgoYSwgYikgPT4gKGRpcmVjdGlvbiA/IGFbMV0gLSBiWzFdIDogYlsxXSAtIGFbMV0pKTtcclxuICBsZXQgb2JqU29ydGVkID0ge307XHJcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IChvYmpTb3J0ZWRbaXRlbVswXV0gPSBpdGVtWzFdKSk7XHJcbiAgLy9hcnIuc29ydChmdW5jdGlvbihhLCBiKSB7IGEudmFsdWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIudmFsdWUudG9Mb3dlckNhc2UoKSk7IH0pOyAvL3VzZSB0aGlzIHRvIHNvcnQgYXMgc3RyaW5nc1xyXG4gIHJldHVybiBvYmpTb3J0ZWQ7IC8vIHJldHVybnMgYXJyYXlcclxufTtcclxuIiwiLypcclxuJCA9IGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG52YXIgYm9vdHN0cmFwID0gcmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG52YXIgYW5ndWxhclNhbml0aXplID0gcmVxdWlyZSgnYW5ndWxhci1zYW5pdGl6ZScpO1xyXG52YXIgYW5ndWxhckFuaW1hdGUgPSByZXF1aXJlKCdhbmd1bGFyLWFuaW1hdGUnKTtcclxuKi9cclxuYW5ndWxhci5tb2R1bGUoXCJhcHBcIiwgW1xyXG4gIFwidWkucm91dGVyXCIsXHJcbiAgXCJ1aS5ib290c3RyYXBcIixcclxuICBcIm5nQW5pbWF0ZVwiLFxyXG4gIFwibmdTYW5pdGl6ZVwiLFxyXG4gIFwibmdNYXRlcmlhbFwiLFxyXG4gIFwibmdNZXNzYWdlc1wiLFxyXG4gIFwibmdEcmFnRHJvcFwiLFxyXG4gIFwibmdUYWdzSW5wdXRcIixcclxuICBcInZjUmVjYXB0Y2hhXCIsXHJcbiAgXCJjaGFydC5qc1wiLFxyXG4gIFwidGMuY2hhcnRqc1wiLFxyXG4gIFwiaW5maW5pdGUtc2Nyb2xsXCIsXHJcbl0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICR1cmxTZXJ2aWNlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XHJcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcIi9ob21lXCIpO1xyXG4gICR1cmxTZXJ2aWNlUHJvdmlkZXIuY29uZmlnLnN0cmljdE1vZGUoZmFsc2UpO1xyXG5cclxuICAkc3RhdGVQcm92aWRlclxyXG4gICAgLnN0YXRlKFwiaG9tZVwiLCB7XHJcbiAgICAgIHVybDogXCIvaG9tZVwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvaG9tZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicG9saWN5XCIsIHtcclxuICAgICAgdXJsOiBcIi9wb2xpY3lcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3BvbGljeS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicHJpbnRcIiwge1xyXG4gICAgICB1cmw6IFwiL3ByaW50XCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wcmludC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiZXhwZXJpZW5jZVwiLCB7XHJcbiAgICAgIHVybDogXCIvZXhwZXJpZW5jZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkV4cGVyaWVuY2VDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9leHBlcmllbmNlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJza2lsbHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3NraWxsc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlNraWxsc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3NraWxscy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiaG9iYmllc1wiLCB7XHJcbiAgICAgIHVybDogXCIvaG9iYmllc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkhvYmJpZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9ob2JiaWVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJjb250YWN0XCIsIHtcclxuICAgICAgdXJsOiBcIi9jb250YWN0XCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQ29udGFjdEN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2NvbnRhY3QuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcIndvcmtvdXRcIiwge1xyXG4gICAgICB1cmw6IFwiL3dvcmtvdXRcIixcclxuICAgICAgY29udHJvbGxlcjogXCJXb3Jrb3V0Q3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvd29ya291dC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicG9zdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3Bvc3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUG9zdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wb3N0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicHJvZmlsZVwiLCB7XHJcbiAgICAgIHVybDogXCIvcHJvZmlsZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlByb2ZpbGVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wcm9maWxlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJsaXN0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvbGlzdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJMaXN0c0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwibGlzdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImJ1YmJsZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2J1YmJsZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJCdWJibGVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJidWJibGVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJhc3Rlcm9pZHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2FzdGVyb2lkc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkFzdGVyb2lkc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiYXN0ZXJvaWRzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJsZW1taW5nc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbGVtbWluZ3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJMZW1taW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwibGVtbWluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImJvdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2JvdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLWFkbWluXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3MtYWRtaW5cIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NBZG1pbkN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLWFkbWluLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3MtZ2FtZVwiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLzpnYW1lXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzR2FtZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLWdhbWUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1zdGF0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLXN0YXRzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzU3RhdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1zdGF0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1nb29nbGVcIiwge1xyXG4gICAgICB1cmw6IFwiL2dvb2dsZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpHb29nbGVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvZ29vZ2xlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWxvZ29zXCIsIHtcclxuICAgICAgdXJsOiBcIi9sb2dvc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpMb2dvc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9sb2dvcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1hbmltYWxzXCIsIHtcclxuICAgICAgdXJsOiBcIi9hbmltYWxzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekFuaW1hbHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvYW5pbWFscy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1za2VsZXRvbnNcIiwge1xyXG4gICAgICB1cmw6IFwiL3NrZWxldG9uc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpTa2VsZXRvbnNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvc2tlbGV0b25zLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LW1vdmllc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbW92aWVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpek1vdmllc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9tb3ZpZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImNoYXJhZGVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9jaGFyYWRlc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkNoYXJhZGVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvY2hhcmFkZXMuaHRtbFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7XHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgcmVxdWlyZUJhc2U6IGZhbHNlLFxyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdXZWJTb2NrZXRTdmMnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcclxuICBmdW5jdGlvbiB3ZWJzb2NrZXRIb3N0KCkge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcclxuICAgICAgcmV0dXJuIFwid3NzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIndzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBjb25uZWN0aW9uO1xyXG4gIHZhciBjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQod2Vic29ja2V0SG9zdCgpKTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjb25uZWN0ZWQnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjbG9zZWQuIFJlY29ubmVjdGluZy4uLicpO1xyXG4gICAgICAkdGltZW91dChjb25uZWN0LCAxMDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUgKyBcIiAtIFN0YXRlOiBcIiArIGNvbm5lY3Rpb24ucmVhZHlTdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnd3M6JyArIHBheWxvYWQudG9waWMsIHBheWxvYWQuZGF0YSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc2VuZCA9IGZ1bmN0aW9uICh0b3BpYywgZGF0YSkge1xyXG4gICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh7dG9waWM6IHRvcGljLCBkYXRhOiBkYXRhfSk7XHJcbiAgICBjb25uZWN0aW9uLnNlbmQoanNvbik7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5jb25uZWN0ID0gY29ubmVjdDtcclxuXHJcbn0pLnJ1bihmdW5jdGlvbiAoV2ViU29ja2V0U3ZjKSB7XHJcbiAgV2ViU29ja2V0U3ZjLmNvbm5lY3QoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJBcHBDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIExhbmd1YWdlU3ZjLCBVc2VyU3ZjLCAkbWRUb2FzdCkge1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCIlY1lvdSBzbmVha3kgYnVnZ2VyIVwiLFxyXG4gICAgXCJmb250OiAyZW0gc2Fucy1zZXJpZjsgY29sb3I6IERvZGdlckJsdWU7IHRleHQtc2hhZG93OiAycHggMCAwICM0NDQsIC0ycHggMCAwICM0NDQsIDAgMnB4IDAgIzQ0NCwgMCAtMnB4IDAgIzQ0NCwgMXB4IDFweCAjNDQ0LCAtMXB4IC0xcHggMCAjNDQ0LCAxcHggLTFweCAwICM0NDQsIC0xcHggMXB4IDAgIzQ0NDtcIixcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCJJJ20gZ2xhZCB5b3UncmUgY3VyaW91cyB3aGV0aGVyIHNvbWV0aGluZyBpcyBwb3BwaW5nIHVwIGluIGhlcmUuIEknbSBhIGJpdCBvZiBhIHN0aWNrbGVyIHdoZW4gaXQgY29tZXMgdG8gbWVzc2FnZXMgaW4gdGhlIGNvbnNvbGUgc28gSSB0cnkgdG8gbWFrZSBzdXJlIG9ubHkgdGhpbmdzIEkgd2FudCBhcmUgdmlzaWJsZS4gVGhhdCBiZWluZyBzYWlkLCBpZiB0aGVyZSBpcyBhIGJpZyBlcnJvciBoZXJlLCBJIHdvdWxkIHJlYWxseSBhcHByZWNpYXRlIHlvdSB0ZWxsaW5nIG1lIHNvIEkgY2FuIGdldCByaWQgb2YgaXQhXCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiVGhlIGNvZGUgZm9yIG15IHJlc3VtZSBpcyBob3N0ZWQgb24gR2l0aHViIGlmIHlvdSByZWFsbHkgd2FudCB0byBnbyBpbnRvIGFsbCB0aGlzISA9PiBodHRwczovL2dpdGh1Yi5jb20vRmxhbmRlcnNCdXJnZXIvcmVzdW1lXCIsXHJcbiAgKTtcclxuXHJcbiAgJHNjb3BlLnRvYXN0ID0gKG1lc3NhZ2UpID0+IHtcclxuICAgICRtZFRvYXN0LnNob3coJG1kVG9hc3Quc2ltcGxlKCkudGV4dENvbnRlbnQobWVzc2FnZSkucG9zaXRpb24oXCJib3R0b20gcmlnaHRcIikuaGlkZURlbGF5KDMwMDApKTtcclxuICB9O1xyXG4gIC8qXHJcbiAgICAkKGRvY3VtZW50KS5iaW5kKFwia2V5dXAga2V5ZG93blwiLCBmdW5jdGlvbihlKXtcclxuICAgICAgaWYoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PSA4MCl7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgKi9cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5sb2FkaW5nXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuY2hlY2tib3gtbWVudVwiKS5vbihcImNoYW5nZVwiLCBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KFwibGlcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIiwgdGhpcy5jaGVja2VkKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5hbGxvdy1mb2N1c1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnRoZW1lQ291bnRlciA9IDY7XHJcbiAgJHNjb3BlLnRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAkc2NvcGUueWVhciA9ICRzY29wZS50b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICRzY29wZS5yYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcclxuXHJcbiAgJHNjb3BlLmZsaXBUaGVtZSA9ICgpID0+IHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5zaG93KCk7XHJcbiAgICAkKFwiLmNvbnRlbnRcIikuaGlkZSgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgICB9LCA4MDApO1xyXG4gICAgJHNjb3BlLnRoZW1lQ291bnRlciA9ICRzY29wZS50aGVtZUNvdW50ZXIgPCA2ID8gJHNjb3BlLnRoZW1lQ291bnRlciArIDEgOiAoJHNjb3BlLnRoZW1lQ291bnRlciA9IDEpO1xyXG4gIH07XHJcblxyXG4gICQuZ2V0SlNPTihcIi9za2lsbHMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLnNraWxscyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuZW5hYmxlZDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvaG9iYmllcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuaG9iYmllcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9leHBlcmllbmNlLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5qb2JzID0gZGF0YTtcclxuICAgICRzY29wZS5qb2JzLmZvckVhY2goKGpvYikgPT4ge1xyXG4gICAgICBqb2Iuc3RhcnREYXRlID0gbmV3IERhdGUoam9iLnN0YXJ0RGF0ZSk7XHJcbiAgICAgIGlmIChqb2IuZW5kRGF0ZSkgam9iLmVuZERhdGUgPSBuZXcgRGF0ZShqb2IuZW5kRGF0ZSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2NoYXJhZGVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5jaGFyYWRlcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5nZXRUaW1lU3BhbiA9IChqb2IpID0+IHtcclxuICAgIHJldHVybiBqb2Iuc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyAoam9iLmVuZERhdGUgPyBcIiAtIFwiICsgam9iLmVuZERhdGUuZ2V0RnVsbFllYXIoKSA6IFwiIC0gVG9kYXlcIik7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmxhbmd1YWdlcyA9IExhbmd1YWdlU3ZjLmxhbmd1YWdlcztcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBMYW5ndWFnZVN2Yy5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0TGFuZ3VhZ2UgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5ob3ZlcmRpdiA9IChlLCBkaXZpZCkgPT4ge1xyXG4gICAgdmFyIGxlZnQgPSBlLmNsaWVudFggKyBcInB4XCI7XHJcbiAgICB2YXIgdG9wID0gZS5jbGllbnRZICsgMjAgKyBcInB4XCI7XHJcblxyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdmlkKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcImxlZnRcIiwgbGVmdCk7XHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcInRvcFwiLCB0b3ApO1xyXG5cclxuICAgICQoXCIjXCIgKyBkaXZpZCkudG9nZ2xlKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikge1xyXG4gICAgVXNlclN2Yy5sb2dpbih3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGxvZ2luKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8sIHVzZXIpID0+IHtcclxuICAgIGxvZ2luKHVzZXIpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XHJcbiAgICBpZiAoISRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIgPSB1c2VyLl9pZDtcclxuICAgICAgJHNjb3BlLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUpO1xyXG4gICAgICAkc2NvcGUuJGJyb2FkY2FzdChcImxvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS4kb24oXCJ1cGRhdGVcIiwgKF8sIHVzZXIpID0+IHtcclxuICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlID0gbmV3IERhdGUoJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSk7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkaW5nXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5zaG93KCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkZWRcIiwgKF8sIHVzZXIpID0+IHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIiNsb2FkaW5nLWljb25cIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmxvZ291dCA9ICgpID0+IHtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgIC5hdXRoKClcclxuICAgICAgLnNpZ25PdXQoKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dvdXRcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgbW9udGhzID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpICsgXCItXCIgKyBtb250aHNbZGF0ZS5nZXRNb250aCgpXSArIFwiLVwiICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQXN0ZXJvaWRzQ3RybFwiLCBmdW5jdGlvbiAoJGxvY2F0aW9uLCAkc2NvcGUsIEdhbWVTdmMpIHtcclxuICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcclxuICBpZiAoIWNhbnZhcykge1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoXCIvaG9tZVwiKTtcclxuICAgIHJldHVybiBhbGVydChcIlwiKTtcclxuICB9XHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICBpZiAoIWN0eCkge1xyXG4gICAgcmV0dXJuICRsb2NhdGlvbi5wYXRoKFwiL2hvbWVcIik7XHJcbiAgfVxyXG4gIGN0eC5mb250ID0gXCIzMHB4IENvbWljIFNhbnMgTVNcIjtcclxuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBsZXQgc2hvdHMgPSB7fTtcclxuICBjb25zdCBhc3Rlcm9pZHMgPSB7fTtcclxuICBjb25zdCBwb3dlcnVwcyA9IHt9O1xyXG4gIGNvbnN0IGV4cGxvc2lvbnMgPSB7fTtcclxuICBjb25zdCBtYXAgPSB7fTtcclxuICBjb25zdCBzcGFjZXBpY3MgPSAzO1xyXG4gIGxldCBzcGFjZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwYWNlcGljcyk7XHJcbiAgY29uc3QgcG93ZXJ1cFR5cGVzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInNwZWVkXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJNYXggU3BlZWQg4oenXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICAgIHNpemU6IFsxNCwgMzVdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5tYXhTcGVlZCArPSAxMDA7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImNvb2xkb3duXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJDb29sZG93biDih6lcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDMsXHJcbiAgICAgICAgc2l6ZTogWzE3LCAxN10sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5jb29sZG93blRpbWUgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInJhbmdlXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJGaXJpbmcgUmFuZ2Ug4oenXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogNCxcclxuICAgICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICAgIHNpemU6IFszMCwgOF0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnJhbmdlICs9IDU7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInNoaWVsZFwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiU2hpZWxkXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogNSxcclxuICAgICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICAgIHNpemU6IFsxOSwgMTldLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5zaGllbGQgPSB0cnVlO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJudWtlXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJOdWtlXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICAgIHNpemU6IFsxNSwgMTVdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgICAgICBhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgICAgfSxcclxuICAgIH0gLypcclxuICAgICdzaWRlX2Nhbm5vbnMnLFxyXG4gICAgJ2xhc2VyJyxcclxuICAgICdzaGllbGQnLFxyXG4gICAgJ2xpZmUnLFxyXG4gICAgJ21pc3NpbGVzJyxcclxuICAgICdudWtlJ1xyXG4gICAgKi8sXHJcbiAgXTtcclxuICBwb3dlcnVwVHlwZXMuZm9yRWFjaChmdW5jdGlvbiAocG93ZXJ1cCwgaSwgYXJyYXkpIHtcclxuICAgIGFycmF5W2ldLmltZy5zcmMgPSBcImFzdGVyb2lkcy9cIiArIHBvd2VydXAubmFtZSArIFwiLnBuZ1wiO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgZXhwbG9zaW9uSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBleHBsb3Npb25JbWFnZS5zcmMgPSBcImFzdGVyb2lkcy9leHBsb3Npb24ucG5nXCI7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJrZXlkb3duXCIsXHJcbiAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBtYXBbZS5rZXlDb2RlIHx8IGUud2hpY2hdID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICB0cnVlLFxyXG4gICk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImtleXVwXCIsXHJcbiAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBtYXBbZS5rZXlDb2RlIHx8IGUud2hpY2hdID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdHJ1ZSxcclxuICApO1xyXG5cclxuICAkc2NvcGUuaGlnaHNjb3JlID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gZXZhbHVhdGVLZXlzKCkge1xyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgLy9TcGFjZVxyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zaG9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM3XSkge1xyXG4gICAgICAgIC8vTGVmdCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiA9IDM2MDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uIC09IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzldKSB7XHJcbiAgICAgICAgLy9SaWdodCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDM2MCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uICs9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzhdKSB7XHJcbiAgICAgICAgLy9VcCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPD0gc3BhY2VzaGlwLm1heFNwZWVkKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgKz0gNTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzQwXSkge1xyXG4gICAgICAgIC8vRG93biBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgLT0gMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgc3RhcnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU3BhY2VzaGlwKCkge1xyXG4gICAgdGhpcy53aWR0aCA9IDUwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSA1MDtcclxuICAgIHRoaXMuc2hpZWxkID0gZmFsc2U7XHJcbiAgICB0aGlzLnJhbmdlID0gODA7XHJcbiAgICB0aGlzLmNhbm5vbiA9IHtcclxuICAgICAgeDogdGhpcy53aWR0aCAvIDIgLSA0LjUsXHJcbiAgICAgIHk6IHRoaXMuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0ICogMC4wNzgxMjUsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb29sZG93biA9IDA7XHJcbiAgICB0aGlzLmNvb2xkb3duVGltZSA9IDIwO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtjYW52YXMud2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgLyAyXTtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBcImFzdGVyb2lkcy9zcGFjZXNoaXAucG5nXCI7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMubWF4U3BlZWQgPSAxMDAwO1xyXG4gICAgdGhpcy5hbmdsZSA9IDA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuXHJcbiAgICB0aGlzLnNob290ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmNvb2xkb3duID0gdGhpcy5jb29sZG93blRpbWU7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIHNob3RzW2lkXSA9IG5ldyBTaG90KGlkLCB0aGlzKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodGhpcy5zaGllbGQpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmFyYyh0aGlzLnBvc2l0aW9uWzBdICsgdGhpcy53aWR0aCAvIDIsIHRoaXMucG9zaXRpb25bMV0gKyB0aGlzLmhlaWdodCAvIDIsIDMwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDM1LCAyMzcsIDg2LCAwLjUpXCI7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2IoNjYsIDE2OCwgMzYsIDAuOClcIjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICAgIHZhciBhc3Rlcm9pZCA9IGFzdGVyb2lkc1tpXTtcclxuICAgICAgICBpZiAoaGl0KGFzdGVyb2lkLCB0aGlzKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2hpZWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpZWxkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGFzdGVyb2lkLmV4cGxvZGUoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnYW1lT3ZlcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFuZ2xlID0gdGhpcy5yb3RhdGlvbjtcclxuICAgICAgaWYgKHRoaXMuY29vbGRvd24gPiAwKSB7XHJcbiAgICAgICAgdGhpcy5jb29sZG93bi0tO1xyXG4gICAgICB9XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU2hvdChpZCwgc3BhY2VzaGlwKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW1xyXG4gICAgICBzcGFjZXNoaXAucG9zaXRpb25bMF0gK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueCArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi54ICogTWF0aC5jb3MoKChzcGFjZXNoaXAucm90YXRpb24gLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCksXHJcbiAgICAgIHNwYWNlc2hpcC5wb3NpdGlvblsxXSArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi55ICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnkgKiBNYXRoLnNpbigoKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKSxcclxuICAgIF07XHJcbiAgICB0aGlzLndpZHRoID0gNDA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDQwO1xyXG4gICAgdGhpcy5hbmdsZSA9IHNwYWNlc2hpcC5hbmdsZTtcclxuICAgIHRoaXMucm90YXRpb24gPSBzcGFjZXNoaXAucm90YXRpb247XHJcbiAgICB0aGlzLnNwZWVkID0gc3BhY2VzaGlwLnNwZWVkICsgNTAwO1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IHNwYWNlc2hpcC5yYW5nZTtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBcImFzdGVyb2lkcy9zaG90LnBuZ1wiO1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEFzdGVyb2lkKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLndpZHRoID0gTWF0aC5yYW5kb20oKSAqIDUwICsgNTA7XHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMud2lkdGg7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RW50cnlQb3NpdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5yb3RhdGlvblNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDYgLSAzO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAzMDAgKyAyO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL2FzdGVyb2lkXCIgKyAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNCkgKyAxKSArIFwiLnBuZ1wiO1xyXG5cclxuICAgIHRoaXMuZXhwbG9kZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgZXhwbG9zaW9uc1t0aGlzLmlkXSA9IG5ldyBFeHBsb3Npb24odGhpcyk7XHJcbiAgICAgIHJldHVybiBkZWxldGUgYXN0ZXJvaWRzW3RoaXMuaWRdO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xyXG4gICAgICBpZiAodGhpcy5yb3RhdGlvbiA+IDM2MCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSB0aGlzLnJvdGF0aW9uIC0gMzYwO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucm90YXRpb24gPCAwKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDM2MCArIHRoaXMucm90YXRpb247XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSBpbiBzaG90cykge1xyXG4gICAgICAgIHZhciBzaG90ID0gc2hvdHNbaV07XHJcbiAgICAgICAgaWYgKGhpdChzaG90LCB0aGlzKSkge1xyXG4gICAgICAgICAgdGhpcy5leHBsb2RlKCk7XHJcbiAgICAgICAgICB2YXIgcG9pbnRzID0gTWF0aC5mbG9vcigoc2hvdC5zcGVlZCAtIDUwMCkgLyAxMCArIDcwIC0gdGhpcy53aWR0aCk7XHJcbiAgICAgICAgICBpZiAoTWF0aC5mbG9vcigocG9pbnRzICsgJHNjb3BlLnNjb3JlKSAvIDEwMCkgPiBNYXRoLmZsb29yKCRzY29wZS5zY29yZSAvIDEwMCkpIHtcclxuICAgICAgICAgICAgc3Bhd25Qb3dlcnVwKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkc2NvcGUuc2NvcmUgKz0gcG9pbnRzO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgZGVsZXRlIHNob3RzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEV4cGxvc2lvbihvYmplY3QpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbb2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV1dO1xyXG4gICAgdGhpcy53aWR0aCA9IG9iamVjdC53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gb2JqZWN0LmhlaWdodDtcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLmN5Y2xlID0ge1xyXG4gICAgICByb3dzOiA2LFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICBzaXplOiBbMjU2LCAyNTZdLFxyXG4gICAgICBpOiAwLFxyXG4gICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDQ3O1xyXG4gICAgdGhpcy5pbWcgPSBleHBsb3Npb25JbWFnZTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBQb3dlcnVwKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvd2VydXAgPSBwb3dlcnVwVHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG93ZXJ1cFR5cGVzLmxlbmd0aCldO1xyXG4gICAgdGhpcy5jeWNsZSA9IHRoaXMucG93ZXJ1cC5jeWNsZTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAxMDAwO1xyXG4gICAgaWYgKHRoaXMuY3ljbGUuc2l6ZVsxXSA+IHRoaXMuY3ljbGUuc2l6ZVswXSkge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IDQwO1xyXG4gICAgICB0aGlzLndpZHRoID0gTWF0aC5yb3VuZCgodGhpcy5oZWlnaHQgLyB0aGlzLmN5Y2xlLnNpemVbMV0pICogdGhpcy5jeWNsZS5zaXplWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSA0MDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLnJvdW5kKCh0aGlzLndpZHRoIC8gdGhpcy5jeWNsZS5zaXplWzBdKSAqIHRoaXMuY3ljbGUuc2l6ZVsxXSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RW50cnlQb3NpdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmltZyA9IHRoaXMucG93ZXJ1cC5pbWc7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMTUwICsgNTA7XHJcbiAgICB2YXIgZGVsYXkgPSA1O1xyXG4gICAgdGhpcy5tb3ZlID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBwb3dlcnVwc1t0aGlzLmlkXTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaGl0KHNwYWNlc2hpcCwgdGhpcykpIHtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2UgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5hbm5vdW5jZW1lbnQgPSB0aGlzLnBvd2VydXAuYW5ub3VuY2VtZW50O1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5hbm5vdW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHRoaXMucG93ZXJ1cC5hY3RpdmF0ZShzcGFjZXNoaXApO1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAoZGVsYXkgPD0gMCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxheSA9IDU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsYXktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmUob2JqZWN0KSB7XHJcbiAgICBvYmplY3QucG9zaXRpb25bMF0gKz0gKG9iamVjdC5zcGVlZCAvIDEwMCkgKiBNYXRoLmNvcygoKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIG9iamVjdC5wb3NpdGlvblsxXSArPSAob2JqZWN0LnNwZWVkIC8gMTAwKSAqIE1hdGguc2luKCgob2JqZWN0LmFuZ2xlIC0gOTApICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgaWYgKG9iamVjdC5wb3NpdGlvblswXSA+IGNhbnZhcy53aWR0aCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMF0gPSAtb2JqZWN0LndpZHRoO1xyXG4gICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMF0gPCAtb2JqZWN0LndpZHRoKSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IGNhbnZhcy53aWR0aDtcclxuICAgIH1cclxuICAgIGlmIChvYmplY3QucG9zaXRpb25bMV0gPiBjYW52YXMuaGVpZ2h0KSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblsxXSA9IC1vYmplY3QuaGVpZ2h0O1xyXG4gICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMV0gPCAtb2JqZWN0LmhlaWdodCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMV0gPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV0pO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShvYmplY3Qud2lkdGggLyAyLCBvYmplY3QuaGVpZ2h0IC8gMik7XHJcbiAgICBjdHgucm90YXRlKChvYmplY3Qucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBpZiAob2JqZWN0LmN5Y2xlKSB7XHJcbiAgICAgIHZhciBjb2x1bW4gPSBvYmplY3QuY3ljbGUuaSAlIG9iamVjdC5jeWNsZS5jb2x1bW5zO1xyXG4gICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcihvYmplY3QuY3ljbGUuaSAvIG9iamVjdC5jeWNsZS5jb2x1bW5zKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICBvYmplY3QuaW1nLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzBdICogY29sdW1uLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzFdICogcm93LFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzBdLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzFdLFxyXG4gICAgICAgIC1vYmplY3Qud2lkdGggLyAyLFxyXG4gICAgICAgIC1vYmplY3QuaGVpZ2h0IC8gMixcclxuICAgICAgICBvYmplY3Qud2lkdGgsXHJcbiAgICAgICAgb2JqZWN0LmhlaWdodCxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChvYmplY3QuY3ljbGUuaSA8PSAwKSB7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSAwO1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKG9iamVjdC5jeWNsZS5pID49IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MpIHtcclxuICAgICAgICBvYmplY3QuY3ljbGUuaSA9IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MgLSAxO1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3R4LmRyYXdJbWFnZShvYmplY3QuaW1nLCAtb2JqZWN0LndpZHRoIC8gMiwgLW9iamVjdC5oZWlnaHQgLyAyLCBvYmplY3Qud2lkdGgsIG9iamVjdC5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHZhciBzcGFjZXNoaXA7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIHNwYWNlc2hpcCA9IG5ldyBTcGFjZXNoaXAoKTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgIGF1dG9TcGF3bigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RW50cnlQb3NpdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB2YXIgZ3JpZFggPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciBncmlkWSA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIHgsXHJcbiAgICAgIHkgPSAwO1xyXG4gICAgaWYgKGdyaWRYID49IDEpIHtcclxuICAgICAgeCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XHJcbiAgICAgIGlmICh5ID49IDEpIHtcclxuICAgICAgICB5ID0gMCAtIGhlaWdodDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeSA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICBpZiAoZ3JpZFkgPj0gMSkge1xyXG4gICAgICAgIHggPSAwIC0gd2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFt4LCB5XTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpdChvYmplY3QxLCBvYmplY3QyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBvYmplY3QxLnBvc2l0aW9uWzBdIDwgb2JqZWN0Mi5wb3NpdGlvblswXSArIG9iamVjdDIud2lkdGggJiZcclxuICAgICAgb2JqZWN0Mi5wb3NpdGlvblswXSA8IG9iamVjdDEucG9zaXRpb25bMF0gKyBvYmplY3QxLndpZHRoICYmXHJcbiAgICAgIG9iamVjdDEucG9zaXRpb25bMV0gPCBvYmplY3QyLnBvc2l0aW9uWzFdICsgb2JqZWN0Mi5oZWlnaHQgJiZcclxuICAgICAgb2JqZWN0Mi5wb3NpdGlvblsxXSA8IG9iamVjdDEucG9zaXRpb25bMV0gKyBvYmplY3QxLmhlaWdodFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGF1dG9TcGF3bigpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhhc3Rlcm9pZHMpLmxlbmd0aCA8IDIwMCkge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH1cclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhdXRvU3Bhd24oKTtcclxuICAgICAgfSwgc3Bhd25JbnRlcnZhbCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduSW50ZXJ2YWwoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnNjb3JlIDwgMTAwMCkge1xyXG4gICAgICByZXR1cm4gMTAwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgMjAwMCkge1xyXG4gICAgICByZXR1cm4gOTAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCAzMDAwKSB7XHJcbiAgICAgIHJldHVybiA4MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDQwMDApIHtcclxuICAgICAgcmV0dXJuIDcwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNTAwMCkge1xyXG4gICAgICByZXR1cm4gNjAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA2MDAwKSB7XHJcbiAgICAgIHJldHVybiA1MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDcwMDApIHtcclxuICAgICAgcmV0dXJuIDQwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgODAwMCkge1xyXG4gICAgICByZXR1cm4gMzAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDIwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduQXN0ZXJvaWRzKGFtb3VudCkge1xyXG4gICAgdmFyIGkgPSAwO1xyXG4gICAgZG8ge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH0gd2hpbGUgKGkrKyA8PSBhbW91bnQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25Qb3dlcnVwKCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHBvd2VydXBzKS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIHBvd2VydXBzW2lkXSA9IG5ldyBQb3dlcnVwKGlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdhbWVPdmVyKCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgIGFzdGVyb2lkc1tpXS5leHBsb2RlKCk7XHJcbiAgICB9XHJcbiAgICBzaG90cyA9IHt9O1xyXG4gICAgaWYgKCRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmhpZ2hzY29yZS5hc3Rlcm9pZHMgPCAkc2NvcGUuc2NvcmUpIHtcclxuICAgICAgICAkc2NvcGUuY3VycmVudFVzZXIuaGlnaHNjb3JlLmFzdGVyb2lkcyA9ICRzY29wZS5zY29yZTtcclxuICAgICAgICBHYW1lU3ZjLnNldEhpZ2hzY29yZShcImFzdGVyb2lkc1wiLCAkc2NvcGUuY3VycmVudFVzZXIuX2lkLCAkc2NvcGUuc2NvcmUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hzY29yZSA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5oaWdoc2NvcmUgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG4gIC8vIGRyYXcgY2FudmFzLlxyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgLy8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuICAgIC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG4gICAgLy8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuICAgIHJlc2l6ZUNhbnZhcygpO1xyXG4gIH1cclxuICAvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcbiAgLy8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcbiAgLy8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcbiAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSAxO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTAgOiA1OSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplKCk7XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG5cclxuICB2YXIgdGFsbHkgPSAwO1xyXG4gIHZhciBkaXJlY3Rpb24gPSB0cnVlO1xyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgZm9yICh2YXIgaSBpbiBzaG90cykge1xyXG4gICAgICBpZiAoc2hvdHNbaV0ubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBzaG90c1tpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG90c1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgYXN0ZXJvaWRzW2ldLm1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBwb3dlcnVwcykge1xyXG4gICAgICBwb3dlcnVwc1tpXS5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gZXhwbG9zaW9ucykge1xyXG4gICAgICBpZiAoZXhwbG9zaW9uc1tpXS5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIGV4cGxvc2lvbnNbaV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXhwbG9zaW9uc1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGV2YWx1YXRlS2V5cygpO1xyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIHNwYWNlc2hpcC5tb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgY2FudmFzLndpZHRoLCAwKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMFwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjAuMjVcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjVcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjc1XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMS4wXCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgICBjdHguZm9udCA9IFwiNjBweCAnSmFjcXVhcmQgMTInXCI7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcIkFzdGVyb2lkc1wiLCBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KFwiQXN0ZXJvaWRzXCIpLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpO1xyXG4gICAgICBjdHguZm9udCA9IFwiMjBweCBBbGRyaWNoXCI7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICBcIlByZXNzIHNwYWNlIHRvIHN0YXJ0XCIsXHJcbiAgICAgICAgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIlByZXNzIHNwYWNlIHRvIHN0YXJ0XCIpLndpZHRoIC8gMixcclxuICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMiArIDIwLFxyXG4gICAgICApO1xyXG4gICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgXCJEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5IExhdXJlbnQgRGViYWNrZXJcIixcclxuICAgICAgICBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KFwiRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyXCIpLndpZHRoIC8gMixcclxuICAgICAgICBjYW52YXMuaGVpZ2h0IC0gMzAsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0YWxseSArPSBkaXJlY3Rpb24gPyAxIDogLTE7XHJcbiAgICBpZiAodGFsbHkgPiAxMDApIHtcclxuICAgICAgdGFsbHkgPSAxMDA7XHJcbiAgICAgIGRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICh0YWxseSA8IDApIHtcclxuICAgICAgdGFsbHkgPSAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLnNwYWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiYXN0ZXJvaWRzL3NwYWNlJyArIHNwYWNlICsgJy5qcGdcIiknLFxyXG4gICAgfTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkJ1YmJsZXNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWJibGVzLXBhZ2VcIik7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgdmFyIGJ1YmJsZXMgPSBbXTtcclxuICB2YXIgY29sb3JzID0gW1wiI2ZmYzMwMFwiLCBcIiNmZjU3MzNcIiwgXCIjYzcwMDM5XCIsIFwiIzkwMGMzZVwiLCBcIiM1NzE4NDVcIl07XHJcblxyXG4gIGZ1bmN0aW9uIEJ1YmJsZSgpIHtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAwO1xyXG4gICAgdGhpcy5yYWRpdXMgPSAxO1xyXG4gICAgdGhpcy5leHBhbmRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgdGhpcy5jaXJjdW1mZXJlbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNTApICsgNTtcclxuICAgIHRoaXMubWF4UmFkaXVzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjAwKSArIDIwO1xyXG4gICAgdGhpcy54ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoKTtcclxuICAgIHRoaXMueSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGhpcy52eCA9IE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xO1xyXG4gICAgdGhpcy52eSA9IE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGJ1YmJsZXMuZm9yRWFjaChmdW5jdGlvbiAoYnViYmxlKSB7XHJcbiAgICAgIHZhciBjb2xvciA9IGNvbG9yc1tNYXRoLnJvdW5kKChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cykgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyhidWJibGUueCwgYnViYmxlLnksIGJ1YmJsZS5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yc1tNYXRoLnJvdW5kKChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cykgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1tjb2xvcnMubGVuZ3RoIC0gTWF0aC5yb3VuZCgoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMpIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gKGJ1YmJsZS5jaXJjdW1mZXJlbmNlICogYnViYmxlLnJhZGl1cykgLyBidWJibGUubWF4UmFkaXVzO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbHRlckJ1YmJsZXMoKSB7XHJcbiAgICBidWJibGVzLnB1c2gobmV3IEJ1YmJsZSgpKTtcclxuICAgIGJ1YmJsZXMgPSBidWJibGVzLmZpbHRlcihmdW5jdGlvbiAoYnViYmxlKSB7XHJcbiAgICAgIGlmIChidWJibGUucmFkaXVzID09PSBidWJibGUubWF4UmFkaXVzKSB7XHJcbiAgICAgICAgYnViYmxlLmV4cGFuZGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1YmJsZS54ICs9IGJ1YmJsZS52eCAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnkgKz0gYnViYmxlLnZ5ICogYnViYmxlLnNwZWVkO1xyXG4gICAgICBidWJibGUucmFkaXVzICs9IGJ1YmJsZS5leHBhbmRpbmcgPyAxIDogLTE7XHJcbiAgICAgIHJldHVybiBidWJibGUucmFkaXVzID4gMDtcclxuICAgIH0pO1xyXG4gICAgZHJhdygpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG5cclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gU3RhcnQgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgYW5kXHJcbiAgICAvLyBkcmF3IGNhbnZhcy5cclxuICAgIGluaXRpYWxpemUoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgICAvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG4gICAgICAvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuICAgICAgLy8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcbiAgICAgIC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcbiAgICAgIHJlc2l6ZUNhbnZhcygpO1xyXG4gICAgfVxyXG4gICAgLy8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG4gICAgLy8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcbiAgICAvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuICAgIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDU1IDogNTYpO1xyXG4gICAgfVxyXG4gIH0pKCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQ2hhcmFkZXNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAkc2NvcGUuc2VsZWN0V29yZCA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgJHNjb3BlLndvcmQgPSAkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICRzY29wZS5jaGFyYWRlc1tjYXRlZ29yeV0ubGVuZ3RoKV07XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJDb250YWN0Q3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBFbWFpbFN2Yykge1xyXG4gICRzY29wZS5vcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNwYW1cIixcclxuICAgICAgdGV4dDogXCJJIGFtIGEgc3BhbSBib3QgYW5kIGF1dG9tYXRpY2FsbHkgY2hlY2sgdGhlIGZpcnN0IG9wdGlvbiBJIGZpbmQhXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk9wcG9ydHVuaXR5XCIsXHJcbiAgICAgIHRleHQ6IFwiWW91IHNlZW0gdG8gaGF2ZSB0aGUgc2tpbGxzIEkgc2VlaywgSSdkIGxpa2UgdG8gdGFsayBhYm91dCBzb21lIG9wcG9ydHVuaXRpZXMuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJlc3VtZVwiLFxyXG4gICAgICB0ZXh0OiBcIkkgZGlnIHRoZSByZXN1bWUsIGhvdyBkaWQgeW91IG1ha2UgaXQ/XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk90aGVyXCIsXHJcbiAgICAgIHRleHQ6IFwiU3VtdGluIGVsc2UhXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gICRzY29wZS5jb250YWN0ID0ge1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgICBhYm91dDogXCJcIixcclxuICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUuc2VuZGluZyA9IHRydWU7XHJcbiAgICBFbWFpbFN2Yy5zZW5kKHtcclxuICAgICAgZW1haWw6ICRzY29wZS5jb250YWN0LmVtYWlsLFxyXG4gICAgICBuYW1lOiAkc2NvcGUuY29udGFjdC5uYW1lLFxyXG4gICAgICBwaG9uZTogJHNjb3BlLmNvbnRhY3QucGhvbmUsXHJcbiAgICAgIGFib3V0OiAkc2NvcGUuY29udGFjdC5hYm91dCxcclxuICAgICAgbWVzc2FnZTogJHNjb3BlLmNvbnRhY3QubWVzc2FnZSxcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS50b2FzdChcIk1lc3NhZ2Ugc2VudFwiKTtcclxuICAgICAgICAkc2NvcGUuc2VudCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTLiBzdGF0dXM9JWQsIHRleHQ9JXNcIiwgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS50ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAkc2NvcGUudG9hc3QoXCJNZXNzYWdlIHNlbmQgZmFpbGVkXCIpO1xyXG4gICAgICAgICRzY29wZS5zZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGQUlMRUQuIGVycm9yPVwiLCBlcnIpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdFeHBlcmllbmNlQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLmdldFNraWxsID0gZnVuY3Rpb24oc2tpbGxDb2RlKSB7XHJcbiAgICBpZiAoISRzY29wZS5za2lsbHMpIHJldHVybjtcclxuICAgIHJldHVybiAkc2NvcGUuc2tpbGxzLmZpbmQoZnVuY3Rpb24oc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIHNraWxsLmNvZGUgPT09IHNraWxsQ29kZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdIb2JiaWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR3aW5kb3cpIHtcclxuXHJcbiAgJHNjb3BlLmhvYmJ5U2VsZWN0b3JWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICQuZ2V0SlNPTignaHR0cHM6Ly93d3cucmVkZGl0LmNvbS91c2VyL2JlbGdvY2FuYWRpYW4vYWJvdXQvLmpzb24nLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gJHNjb3BlLmhvYmJpZXNbMF07XHJcblxyXG4gICRzY29wZS5zZWxlY3RIb2JieSA9IGZ1bmN0aW9uIChob2JieSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkSG9iYnkgPSBob2JieTtcclxuICAgICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zaG93SG9iYnkgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnJheSkge1xyXG4gICAgaWYgKCF2YWx1ZS5pbWFnZXMpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB2YWx1ZS5pbWFnZXMubGVuZ3RoID4gMDtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMZW1taW5nc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBHYW1lU3ZjKSB7XHJcblxyXG4gIHZhciBMRUZUID0gMDtcclxuICB2YXIgUklHSFQgPSAxO1xyXG5cclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlbW1pbmdzLXBhZ2UnKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgdmFyIGxlbW1pbmdzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBsZW1taW5nc0ltYWdlLnNyYyA9ICdsZW1taW5ncy9sZW1taW5ncy5wbmcnO1xyXG4gIHZhciBkZWNvckltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgZGVjb3JJbWFnZS5zcmMgPSAnbGVtbWluZ3MvZGVjb3IucG5nJztcclxuICB2YXIgbGVtbWluZ3MgPSB7fTtcclxuICB2YXIgc3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICB2YXIgYWN0aW9ucyA9IHtcclxuICAgIHdhbGs6IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbMzIwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgaHVoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMzIwLCAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IHRydWVcclxuICAgIH0sXHJcbiAgICBmYWxsOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgODBdLFxyXG4gICAgICBlbmQ6IFsxNjAsIDEwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZmx5OiB7XHJcbiAgICAgIHN0YXJ0OiBbMTYwLCA4MF0sXHJcbiAgICAgIGVuZDogWzQ4MCwgMTEwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzdG9wOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMTIwXSxcclxuICAgICAgZW5kOiBbNjQwLCAxNDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBjbGltYjoge1xyXG4gICAgICBzdGFydDogWzAsIDE2MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTg1XSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgc3RhcnQ6IFswLCAyMDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDIyNV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHB1bmNoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjQwXSxcclxuICAgICAgZW5kOiBbNjQwLCAzMDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMixcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBkaWc6IHtcclxuICAgICAgc3RhcnQ6IFswLCAzMjBdLFxyXG4gICAgICBlbmQ6IFszMjAsIDM0NV0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIExlbW1pbmcoaW5pdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLndpZHRoIC0gMjAwKSkgKyAxMDAsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjYW52YXMuaGVpZ2h0IC0gMjAwKSkgKyAxMDBdO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogMiA+IDEgPyBMRUZUIDogUklHSFQ7XHJcbiAgICB0aGlzLmFjdCA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbnNbYWN0aW9uXTtcclxuICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgdGhpcy5oZWlnaHQgPSAodGhpcy5hY3Rpb24uZW5kWzFdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAoMjAgKiAodGhpcy5hY3Rpb24ucm93cyAtIDEpKSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5hY3QoaW5pdCk7XHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBMRUZUKSB7XHJcbiAgICAgICAgY3R4LnNjYWxlKC0xLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHZhciByb3cgPSBNYXRoLmZsb29yKHRoaXMuY3ljbGUgLyB0aGlzLmFjdGlvbi5jb2x1bW5zKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZShsZW1taW5nc0ltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKCh0aGlzLmhlaWdodCArIDIwKSAqIHJvdykgKyB0aGlzLmFjdGlvbi5zdGFydFsxXSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICBpZiAodGhpcy5hY3Rpb24ucmV2ZXJzZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPj0gdGhpcy5hY3Rpb24uY29sdW1ucyAqIHRoaXMuYWN0aW9uLnJvd3MpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSAhdGhpcy5hbmltYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS0tO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBIYXRjaCgpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbMjAsIDIwXTtcclxuICAgIHRoaXMuYWN0aW9uID0ge1xyXG4gICAgICBzdGFydDogWzAsIDBdLFxyXG4gICAgICBlbmQ6IFs4MiwgNTAwXSxcclxuICAgICAgY29sdW1uczogMSxcclxuICAgICAgcm93czogMTBcclxuICAgIH1cclxuICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdKSAvIHRoaXMuYWN0aW9uLnJvd3M7XHJcbiAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgIHRoaXMub3BlbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25bMF0sIHRoaXMucG9zaXRpb25bMV0pO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICB2YXIgY29sdW1uLCByb3c7XHJcbiAgICAgIGlmIChzdGFydGVkKSB7XHJcbiAgICAgICAgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgICAgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCA5KSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbHVtbiA9IDA7XHJcbiAgICAgICAgcm93ID0gMDtcclxuICAgICAgfVxyXG4gICAgICBjdHguZHJhd0ltYWdlKGRlY29ySW1hZ2UsICh0aGlzLndpZHRoICogY29sdW1uKSArIHRoaXMuYWN0aW9uLnN0YXJ0WzBdLCAodGhpcy5oZWlnaHQgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAxLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkxlbW1pbmcoKSB7XHJcbiAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICBsZW1taW5nc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApXSA9IG5ldyBMZW1taW5nKGFjdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHQvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG5cdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHQvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblx0XHQvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG5cdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0fVxyXG5cdC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuXHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcblx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogMTA1KTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxuICBzcGF3bkxlbW1pbmcoKTtcclxuICBsZXQgaGF0Y2ggPSBuZXcgSGF0Y2goKVxyXG4gIGRyYXcoKTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGlmICghc3RhcnRlZCkge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5mb250PSc0MHB4IE1vbm90b24nO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gJzEwJztcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xyXG4gICAgICBjdHgucmVjdCgxNSwgY2FudmFzLmhlaWdodCAtIDQ1LCBjdHgubWVhc3VyZVRleHQoJ1N0YXJ0Jykud2lkdGggKyAyMCwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLmhlaWdodCArIGNhbnZhcy5oZWlnaHQgLSA0NSk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnU3RhcnQnLCAyMCwgY2FudmFzLmhlaWdodCAtIDUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAodmFyIGkgaW4gbGVtbWluZ3MpIHtcclxuICAgICAgICBsZW1taW5nc1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGhhdGNoLm9wZW4oKTtcclxuICAgIHN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgZHJhdygpO1xyXG4gICAgfSwgMTUwKTtcclxuICB9XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xpc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgQ2F0ZWdvcmllc1N2Yykge1xyXG5cclxuICAkc2NvcGUuc2hvd0NhdGVnb3J5ID0gdHJ1ZTtcclxuXHJcbiAgJHNjb3BlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLmdldENhdGVnb3JpZXMoKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgJHNjb3BlLnRhc2tzID0gW107XHJcbiAgICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICBmb3IgKHZhciBqIGluICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzKSB7XHJcbiAgICAgICAgICAkc2NvcGUudGFza3MucHVzaCh7XHJcbiAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSxcclxuICAgICAgICAgICAgXCJ0YXNrXCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzW2pdLm5hbWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdENhdGVnb3J5ID0gZnVuY3Rpb24oY2F0ZWdvcnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRUYXNrcyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLnB1c2goJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY2F0ZWdvcmllc1tpXS5uYW1lID09PSBjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeSgkc2NvcGUuY2F0ZWdvcmllc1tpXSk7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuYWRkQ2F0ZWdvcnkoe1xyXG4gICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5pbml0KCk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZENhdGVnb3J5ID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLm5ld1Rhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXS5uYW1lID09PSB0YXNrKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSwge1xyXG4gICAgICAgIHRhc2s6IHRhc2tcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MucHVzaCh7IG5hbWU6IHRhc2sgfSk7XHJcbiAgICAgICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzWyRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5lbnRlcmVkVGFzayA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS51bnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmFkZFRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3QucHVzaCh0YXNrKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUucmVtb3ZlVGFzayA9IGZ1bmN0aW9uKHRhc2tMaXN0LCB0YXNrKSB7XHJcbiAgICB0YXNrTGlzdC5zcGxpY2UodGFza0xpc3QuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnN0YXJ0UHJpb3JpdGl6aW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLnNldFByaW9yaXR5TGlzdCgkc2NvcGUuc2VsZWN0ZWRUYXNrcyk7XHJcbiAgICAkbG9jYXRpb24ucGF0aCgnL3ByaW9yaXRpemUnKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0UXVlc3Rpb25zID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoISRzY29wZS5zZWxlY3RlZFRhc2tzKSByZXR1cm4gJyc7XHJcbiAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gJHNjb3BlLnNlbGVjdGVkVGFza3MubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICBjb3VudGVyICs9IGk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY291bnRlcjtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJMb2dpbkN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgRmlyZWJhc2VVSSBXaWRnZXQgdXNpbmcgRmlyZWJhc2UuXHJcbiAgdmFyIHVpID0gbmV3IGZpcmViYXNldWkuYXV0aC5BdXRoVUkoZmlyZWJhc2UuYXV0aCgpKTtcclxuXHJcbiAgJHNjb3BlLiRvbihcImxvZ291dFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHVpLnJlc2V0KCk7XHJcbiAgICBzdGFydFVJKCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0VUkoKSB7XHJcbiAgICB1aS5zdGFydChcIiNmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyXCIsIHtcclxuICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgc2lnbkluU3VjY2VzczogZnVuY3Rpb24gKGN1cnJlbnRVc2VyLCBjcmVkZW50aWFsLCByZWRpcmVjdFVybCkge1xyXG4gICAgICAgICAgLy8gTm8gcmVkaXJlY3QuXHJcbiAgICAgICAgICBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuYXV0aCgpXHJcbiAgICAgICAgICAgIC5jdXJyZW50VXNlci5nZXRJZFRva2VuKHRydWUpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChpZFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgVXNlclN2Yy5hdXRoZW50aWNhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGN1cnJlbnRVc2VyLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IGN1cnJlbnRVc2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGhvdG9VUkw6IGN1cnJlbnRVc2VyLnBob3RvVVJMLFxyXG4gICAgICAgICAgICAgICAgZW1haWxWZXJpZmllZDogY3VycmVudFVzZXIuZW1haWxWZXJpZmllZCxcclxuICAgICAgICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW4sXHJcbiAgICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoXCJsb2dpblwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbC1sb2dpblwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICAgIC8vJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS50b2FzdChcIkxvZ2luIEZhaWxlZFwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBzaWduSW5GYWlsdXJlIGNhbGxiYWNrIG11c3QgYmUgcHJvdmlkZWQgdG8gaGFuZGxlIG1lcmdlIGNvbmZsaWN0cyB3aGljaFxyXG4gICAgICAgIC8vIG9jY3VyIHdoZW4gYW4gZXhpc3RpbmcgY3JlZGVudGlhbCBpcyBsaW5rZWQgdG8gYW4gYW5vbnltb3VzIHVzZXIuXHJcbiAgICAgICAgc2lnbkluRmFpbHVyZTogZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBGb3IgbWVyZ2UgY29uZmxpY3RzLCB0aGUgZXJyb3IuY29kZSB3aWxsIGJlXHJcbiAgICAgICAgICAvLyAnZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdCcuXHJcbiAgICAgICAgICBpZiAoZXJyb3IuY29kZSAhPSBcImZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3RcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBUaGUgY3JlZGVudGlhbCB0aGUgdXNlciB0cmllZCB0byBzaWduIGluIHdpdGguXHJcbiAgICAgICAgICB2YXIgY3JlZCA9IGVycm9yLmNyZWRlbnRpYWw7XHJcbiAgICAgICAgICAvLyBDb3B5IGRhdGEgZnJvbSBhbm9ueW1vdXMgdXNlciB0byBwZXJtYW5lbnQgdXNlciBhbmQgZGVsZXRlIGFub255bW91c1xyXG4gICAgICAgICAgLy8gdXNlci5cclxuICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgLy8gRmluaXNoIHNpZ24taW4gYWZ0ZXIgZGF0YSBpcyBjb3BpZWQuXHJcbiAgICAgICAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhDcmVkZW50aWFsKGNyZWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdWlTaG93bjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy8gVGhlIHdpZGdldCBpcyByZW5kZXJlZC5cclxuICAgICAgICAgIC8vIEhpZGUgdGhlIGxvYWRlci5cclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzaWduSW5TdWNjZXNzVXJsOiBcIi9ob21lXCIsXHJcbiAgICAgIHNpZ25Jbk9wdGlvbnM6IFtcclxuICAgICAgICAvL2ZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgXSxcclxuXHJcbiAgICAgIC8vIFdpbGwgdXNlIHBvcHVwIGZvciBJRFAgUHJvdmlkZXJzIHNpZ24taW4gZmxvdyBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0LCByZWRpcmVjdC5cclxuICAgICAgc2lnbkluRmxvdzogXCJwb3B1cFwiLFxyXG4gICAgICAvLyBPdGhlciBjb25maWcgb3B0aW9ucy4uLlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGFydFVJKCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRmaWx0ZXIsIFBvc3RzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5hZGRQb3N0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCRzY29wZS5wb3N0Qm9keSkge1xyXG4gICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xyXG4gICAgICAgIGJvZHk6ICRzY29wZS5wb3N0Qm9keVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUG9zdHNTdmMuZmV0Y2goKVxyXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLnBvc3RzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbignd3M6bmV3X3Bvc3QnLCBmdW5jdGlvbiAoXywgcG9zdCkge1xyXG4gICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIFBvc3RzU3ZjLmdldFBvc3QocG9zdClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RzLnVuc2hpZnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlByb2ZpbGVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG4gIGNvbnN0IGNvdW50cmllcyA9IFtcclxuICAgIHsgbmFtZTogXCJBbmRvcnJhXCIsIGZsYWc6IFwiZmxhZy1hZFwiLCB0aWRiaXQ6IFwiXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgQXJhYiBFbWlyYXRlc1wiLCBmbGFnOiBcImZsYWctYWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFmZ2hhbmlzdGFuXCIsIGZsYWc6IFwiZmxhZy1hZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLCBmbGFnOiBcImZsYWctYWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFuZ3VpbGxhXCIsIGZsYWc6IFwiZmxhZy1haVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWxiYW5pYVwiLCBmbGFnOiBcImZsYWctYWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFybWVuaWFcIiwgZmxhZzogXCJmbGFnLWFtXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbmdvbGFcIiwgZmxhZzogXCJmbGFnLWFvXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbnRhcmN0aWNhXCIsIGZsYWc6IFwiZmxhZy1hcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXJnZW50aW5hXCIsIGZsYWc6IFwiZmxhZy1hclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW1lcmljYW4gU29tb2FcIiwgZmxhZzogXCJmbGFnLWFzXCIgfSxcclxuICAgIHsgbmFtZTogXCJBdXN0cmlhXCIsIGZsYWc6IFwiZmxhZy1hdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXVzdHJhbGlhXCIsIGZsYWc6IFwiZmxhZy1hdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXJ1YmFcIiwgZmxhZzogXCJmbGFnLWF3XCIgfSxcclxuICAgIHsgbmFtZTogXCLDhWxhbmQgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctYXhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF6ZXJiYWlqYW5cIiwgZmxhZzogXCJmbGFnLWF6XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsIGZsYWc6IFwiZmxhZy1iYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFyYmFkb3NcIiwgZmxhZzogXCJmbGFnLWJiXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYW5nbGFkZXNoXCIsIGZsYWc6IFwiZmxhZy1iZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVsZ2l1bVwiLCBmbGFnOiBcImZsYWctYmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1cmtpbmEgRmFzb1wiLCBmbGFnOiBcImZsYWctYmZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1bGdhcmlhXCIsIGZsYWc6IFwiZmxhZy1iZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFocmFpblwiLCBmbGFnOiBcImZsYWctYmhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1cnVuZGlcIiwgZmxhZzogXCJmbGFnLWJpXCIgfSxcclxuICAgIHsgbmFtZTogXCJCZW5pblwiLCBmbGFnOiBcImZsYWctYmpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEJhcnRow6lsZW15XCIsIGZsYWc6IFwiZmxhZy1ibFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVybXVkYVwiLCBmbGFnOiBcImZsYWctYm1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJydW5laSBcIiwgZmxhZzogXCJmbGFnLWJuXCIgfSxcclxuICAgIHsgbmFtZTogXCJCb2xpdmlhLCBQbHVyaW5hdGlvbmFsIFN0YXRlIG9mXCIsIGZsYWc6IFwiZmxhZy1ib1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmFcIiwgZmxhZzogXCJmbGFnLWJxXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcmF6aWxcIiwgZmxhZzogXCJmbGFnLWJyXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYWhhbWFzXCIsIGZsYWc6IFwiZmxhZy1ic1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmh1dGFuXCIsIGZsYWc6IFwiZmxhZy1idFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm91dmV0IElzbGFuZFwiLCBmbGFnOiBcImZsYWctYnZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvdHN3YW5hXCIsIGZsYWc6IFwiZmxhZy1id1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVsYXJ1c1wiLCBmbGFnOiBcImZsYWctYnlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGl6ZVwiLCBmbGFnOiBcImZsYWctYnpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbmFkYVwiLCBmbGFnOiBcImZsYWctY2FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1jY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29uZ28sIHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZVwiLCBmbGFnOiBcImZsYWctY2RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctY2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbmdvXCIsIGZsYWc6IFwiZmxhZy1jZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dpdHplcmxhbmRcIiwgZmxhZzogXCJmbGFnLWNoXCIgfSxcclxuICAgIHsgbmFtZTogXCJDw7R0ZSBkJ0l2b2lyZVwiLCBmbGFnOiBcImZsYWctY2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvb2sgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctY2tcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoaWxlXCIsIGZsYWc6IFwiZmxhZy1jbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FtZXJvb25cIiwgZmxhZzogXCJmbGFnLWNtXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGluYVwiLCBmbGFnOiBcImZsYWctY25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbG9tYmlhXCIsIGZsYWc6IFwiZmxhZy1jb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29zdGEgUmljYVwiLCBmbGFnOiBcImZsYWctY3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN1YmFcIiwgZmxhZzogXCJmbGFnLWN1XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYWJvIFZlcmRlXCIsIGZsYWc6IFwiZmxhZy1jdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3VyYcOnYW9cIiwgZmxhZzogXCJmbGFnLWN3XCIgfSxcclxuICAgIHsgbmFtZTogXCJDaHJpc3RtYXMgSXNsYW5kXCIsIGZsYWc6IFwiZmxhZy1jeFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3lwcnVzXCIsIGZsYWc6IFwiZmxhZy1jeVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3plY2ggUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWN6XCIgfSxcclxuICAgIHsgbmFtZTogXCJHZXJtYW55XCIsIGZsYWc6IFwiZmxhZy1kZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGppYm91dGlcIiwgZmxhZzogXCJmbGFnLWRqXCIgfSxcclxuICAgIHsgbmFtZTogXCJEZW5tYXJrXCIsIGZsYWc6IFwiZmxhZy1ka1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRG9taW5pY2FcIiwgZmxhZzogXCJmbGFnLWRtXCIgfSxcclxuICAgIHsgbmFtZTogXCJEb21pbmljYW4gUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWRvXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbGdlcmlhXCIsIGZsYWc6IFwiZmxhZy1kelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWN1YWRvclwiLCBmbGFnOiBcImZsYWctZWNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVzdG9uaWFcIiwgZmxhZzogXCJmbGFnLWVlXCIgfSxcclxuICAgIHsgbmFtZTogXCJFZ3lwdFwiLCBmbGFnOiBcImZsYWctZWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIldlc3Rlcm4gU2FoYXJhXCIsIGZsYWc6IFwiZmxhZy1laFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXJpdHJlYVwiLCBmbGFnOiBcImZsYWctZXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNwYWluXCIsIGZsYWc6IFwiZmxhZy1lc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXRoaW9waWFcIiwgZmxhZzogXCJmbGFnLWV0XCIgfSxcclxuICAgIHsgbmFtZTogXCJGaW5sYW5kXCIsIGZsYWc6IFwiZmxhZy1maVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmlqaVwiLCBmbGFnOiBcImZsYWctZmpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKVwiLCBmbGFnOiBcImZsYWctZmtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2ZcIiwgZmxhZzogXCJmbGFnLWZtXCIgfSxcclxuICAgIHsgbmFtZTogXCJGYXJvZSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1mb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJhbmNlXCIsIGZsYWc6IFwiZmxhZy1mclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2Fib25cIiwgZmxhZzogXCJmbGFnLWdhXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kXCIsIGZsYWc6IFwiZmxhZy1nYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3JlbmFkYVwiLCBmbGFnOiBcImZsYWctZ2RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdlb3JnaWFcIiwgZmxhZzogXCJmbGFnLWdlXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggR3VpYW5hXCIsIGZsYWc6IFwiZmxhZy1nZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3Vlcm5zZXlcIiwgZmxhZzogXCJmbGFnLWdnXCIgfSxcclxuICAgIHsgbmFtZTogXCJHaGFuYVwiLCBmbGFnOiBcImZsYWctZ2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdpYnJhbHRhclwiLCBmbGFnOiBcImZsYWctZ2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZWVubGFuZFwiLCBmbGFnOiBcImZsYWctZ2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdhbWJpYVwiLCBmbGFnOiBcImZsYWctZ21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1aW5lYVwiLCBmbGFnOiBcImZsYWctZ25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YWRlbG91cGVcIiwgZmxhZzogXCJmbGFnLWdwXCIgfSxcclxuICAgIHsgbmFtZTogXCJFcXVhdG9yaWFsIEd1aW5lYVwiLCBmbGFnOiBcImZsYWctZ3FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZWVjZVwiLCBmbGFnOiBcImZsYWctZ3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1nc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VhdGVtYWxhXCIsIGZsYWc6IFwiZmxhZy1ndFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VhbVwiLCBmbGFnOiBcImZsYWctZ3VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1aW5lYS1CaXNzYXVcIiwgZmxhZzogXCJmbGFnLWd3XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdXlhbmFcIiwgZmxhZzogXCJmbGFnLWd5XCIgfSxcclxuICAgIHsgbmFtZTogXCJIb25nIEtvbmdcIiwgZmxhZzogXCJmbGFnLWhrXCIgfSxcclxuICAgIHsgbmFtZTogXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWhtXCIgfSxcclxuICAgIHsgbmFtZTogXCJIb25kdXJhc1wiLCBmbGFnOiBcImZsYWctaG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNyb2F0aWFcIiwgZmxhZzogXCJmbGFnLWhyXCIgfSxcclxuICAgIHsgbmFtZTogXCJIYWl0aVwiLCBmbGFnOiBcImZsYWctaHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkh1bmdhcnlcIiwgZmxhZzogXCJmbGFnLWh1XCIgfSxcclxuICAgIHsgbmFtZTogXCJJbmRvbmVzaWFcIiwgZmxhZzogXCJmbGFnLWlkXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmVsYW5kXCIsIGZsYWc6IFwiZmxhZy1pZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXNyYWVsXCIsIGZsYWc6IFwiZmxhZy1pbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXNsZSBvZiBNYW5cIiwgZmxhZzogXCJmbGFnLWltXCIgfSxcclxuICAgIHsgbmFtZTogXCJJbmRpYVwiLCBmbGFnOiBcImZsYWctaW5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwiLCBmbGFnOiBcImZsYWctaW9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIklyYXFcIiwgZmxhZzogXCJmbGFnLWlxXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmFuLCBJc2xhbWljIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1pclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSWNlbGFuZFwiLCBmbGFnOiBcImZsYWctaXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkl0YWx5XCIsIGZsYWc6IFwiZmxhZy1pdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSmVyc2V5XCIsIGZsYWc6IFwiZmxhZy1qZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSmFtYWljYVwiLCBmbGFnOiBcImZsYWctam1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkpvcmRhblwiLCBmbGFnOiBcImZsYWctam9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkphcGFuXCIsIGZsYWc6IFwiZmxhZy1qcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2VueWFcIiwgZmxhZzogXCJmbGFnLWtlXCIgfSxcclxuICAgIHsgbmFtZTogXCJLeXJneXpzdGFuXCIsIGZsYWc6IFwiZmxhZy1rZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FtYm9kaWFcIiwgZmxhZzogXCJmbGFnLWtoXCIgfSxcclxuICAgIHsgbmFtZTogXCJLaXJpYmF0aVwiLCBmbGFnOiBcImZsYWcta2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbW9yb3NcIiwgZmxhZzogXCJmbGFnLWttXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIiwgZmxhZzogXCJmbGFnLWtuXCIgfSxcclxuICAgIHsgbmFtZTogXCJLb3JlYSwgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWcta3BcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktvcmVhLCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWcta3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkt1d2FpdFwiLCBmbGFnOiBcImZsYWcta3dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNheW1hbiBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1reVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2F6YWtoc3RhblwiLCBmbGFnOiBcImZsYWcta3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1sYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGViYW5vblwiLCBmbGFnOiBcImZsYWctbGJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEx1Y2lhXCIsIGZsYWc6IFwiZmxhZy1sY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGllY2h0ZW5zdGVpblwiLCBmbGFnOiBcImZsYWctbGlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNyaSBMYW5rYVwiLCBmbGFnOiBcImZsYWctbGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpYmVyaWFcIiwgZmxhZzogXCJmbGFnLWxyXCIgfSxcclxuICAgIHsgbmFtZTogXCJMZXNvdGhvXCIsIGZsYWc6IFwiZmxhZy1sc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGl0aHVhbmlhXCIsIGZsYWc6IFwiZmxhZy1sdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTHV4ZW1ib3VyZ1wiLCBmbGFnOiBcImZsYWctbHVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxhdHZpYVwiLCBmbGFnOiBcImZsYWctbHZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpYnlhXCIsIGZsYWc6IFwiZmxhZy1seVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9yb2Njb1wiLCBmbGFnOiBcImZsYWctbWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbmFjb1wiLCBmbGFnOiBcImZsYWctbWNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbGRvdmEsIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1tZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9udGVuZWdyb1wiLCBmbGFnOiBcImZsYWctbWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IE1hcnRpbiAoRnJlbmNoIHBhcnQpXCIsIGZsYWc6IFwiZmxhZy1tZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFkYWdhc2NhclwiLCBmbGFnOiBcImZsYWctbWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hcnNoYWxsIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLW1oXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWNlZG9uaWEsIHRoZSBmb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLW1rXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxpXCIsIGZsYWc6IFwiZmxhZy1tbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTXlhbm1hclwiLCBmbGFnOiBcImZsYWctbW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbmdvbGlhXCIsIGZsYWc6IFwiZmxhZy1tblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFjYW9cIiwgZmxhZzogXCJmbGFnLW1vXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLW1wXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXJ0aW5pcXVlXCIsIGZsYWc6IFwiZmxhZy1tcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWF1cml0YW5pYVwiLCBmbGFnOiBcImZsYWctbXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbnRzZXJyYXRcIiwgZmxhZzogXCJmbGFnLW1zXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWx0YVwiLCBmbGFnOiBcImZsYWctbXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hdXJpdGl1c1wiLCBmbGFnOiBcImZsYWctbXVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGRpdmVzXCIsIGZsYWc6IFwiZmxhZy1tdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsYXdpXCIsIGZsYWc6IFwiZmxhZy1td1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWV4aWNvXCIsIGZsYWc6IFwiZmxhZy1teFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsYXlzaWFcIiwgZmxhZzogXCJmbGFnLW15XCIgfSxcclxuICAgIHsgbmFtZTogXCJNb3phbWJpcXVlXCIsIGZsYWc6IFwiZmxhZy1telwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmFtaWJpYVwiLCBmbGFnOiBcImZsYWctbmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5ldyBDYWxlZG9uaWFcIiwgZmxhZzogXCJmbGFnLW5jXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWdlclwiLCBmbGFnOiBcImZsYWctbmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcmZvbGsgSXNsYW5kXCIsIGZsYWc6IFwiZmxhZy1uZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmlnZXJpYVwiLCBmbGFnOiBcImZsYWctbmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pY2FyYWd1YVwiLCBmbGFnOiBcImZsYWctbmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5ldGhlcmxhbmRzXCIsIGZsYWc6IFwiZmxhZy1ubFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9yd2F5XCIsIGZsYWc6IFwiZmxhZy1ub1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmVwYWxcIiwgZmxhZzogXCJmbGFnLW5wXCIgfSxcclxuICAgIHsgbmFtZTogXCJOYXVydVwiLCBmbGFnOiBcImZsYWctbnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pdWVcIiwgZmxhZzogXCJmbGFnLW51XCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXcgWmVhbGFuZFwiLCBmbGFnOiBcImZsYWctbnpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk9tYW5cIiwgZmxhZzogXCJmbGFnLW9tXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYW5hbWFcIiwgZmxhZzogXCJmbGFnLXBhXCIgfSxcclxuICAgIHsgbmFtZTogXCJQZXJ1XCIsIGZsYWc6IFwiZmxhZy1wZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIFBvbHluZXNpYVwiLCBmbGFnOiBcImZsYWctcGZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhcHVhIE5ldyBHdWluZWFcIiwgZmxhZzogXCJmbGFnLXBnXCIgfSxcclxuICAgIHsgbmFtZTogXCJQaGlsaXBwaW5lc1wiLCBmbGFnOiBcImZsYWctcGhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBha2lzdGFuXCIsIGZsYWc6IFwiZmxhZy1wa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUG9sYW5kXCIsIGZsYWc6IFwiZmxhZy1wbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwiLCBmbGFnOiBcImZsYWctcG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBpdGNhaXJuXCIsIGZsYWc6IFwiZmxhZy1wblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUHVlcnRvIFJpY29cIiwgZmxhZzogXCJmbGFnLXByXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWxlc3RpbmUsIFN0YXRlIG9mXCIsIGZsYWc6IFwiZmxhZy1wc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUG9ydHVnYWxcIiwgZmxhZzogXCJmbGFnLXB0XCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWxhdVwiLCBmbGFnOiBcImZsYWctcHdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhcmFndWF5XCIsIGZsYWc6IFwiZmxhZy1weVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUWF0YXJcIiwgZmxhZzogXCJmbGFnLXFhXCIgfSxcclxuICAgIHsgbmFtZTogXCJSw6l1bmlvblwiLCBmbGFnOiBcImZsYWctcmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlJvbWFuaWFcIiwgZmxhZzogXCJmbGFnLXJvXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZXJiaWFcIiwgZmxhZzogXCJmbGFnLXJzXCIgfSxcclxuICAgIHsgbmFtZTogXCJSdXNzaWFuIEZlZGVyYXRpb25cIiwgZmxhZzogXCJmbGFnLXJ1XCIgfSxcclxuICAgIHsgbmFtZTogXCJSd2FuZGFcIiwgZmxhZzogXCJmbGFnLXJ3XCIgfSxcclxuICAgIHsgbmFtZTogXCJTYXVkaSBBcmFiaWFcIiwgZmxhZzogXCJmbGFnLXNhXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb2xvbW9uIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLXNiXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZXljaGVsbGVzXCIsIGZsYWc6IFwiZmxhZy1zY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3VkYW5cIiwgZmxhZzogXCJmbGFnLXNkXCIgfSxcclxuICAgIHsgbmFtZTogXCJTd2VkZW5cIiwgZmxhZzogXCJmbGFnLXNlXCIgfSxcclxuICAgIHsgbmFtZTogXCJTaW5nYXBvcmVcIiwgZmxhZzogXCJmbGFnLXNnXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwiLCBmbGFnOiBcImZsYWctc2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNsb3ZlbmlhXCIsIGZsYWc6IFwiZmxhZy1zaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3ZhbGJhcmQgYW5kIEphbiBNYXllblwiLCBmbGFnOiBcImZsYWctc2pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNsb3Zha2lhXCIsIGZsYWc6IFwiZmxhZy1za1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2llcnJhIExlb25lXCIsIGZsYWc6IFwiZmxhZy1zbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FuIE1hcmlub1wiLCBmbGFnOiBcImZsYWctc21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNlbmVnYWxcIiwgZmxhZzogXCJmbGFnLXNuXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb21hbGlhXCIsIGZsYWc6IFwiZmxhZy1zb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3VyaW5hbWVcIiwgZmxhZzogXCJmbGFnLXNyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBTdWRhblwiLCBmbGFnOiBcImZsYWctc3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLCBmbGFnOiBcImZsYWctc3RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVsIFNhbHZhZG9yXCIsIGZsYWc6IFwiZmxhZy1zdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KVwiLCBmbGFnOiBcImZsYWctc3hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN5cmlhbiBBcmFiIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1zeVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dhemlsYW5kXCIsIGZsYWc6IFwiZmxhZy1zelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy10Y1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hhZFwiLCBmbGFnOiBcImZsYWctdGRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllc1wiLCBmbGFnOiBcImZsYWctdGZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRvZ29cIiwgZmxhZzogXCJmbGFnLXRnXCIgfSxcclxuICAgIHsgbmFtZTogXCJUaGFpbGFuZFwiLCBmbGFnOiBcImZsYWctdGhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhamlraXN0YW5cIiwgZmxhZzogXCJmbGFnLXRqXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb2tlbGF1XCIsIGZsYWc6IFwiZmxhZy10a1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGltb3ItTGVzdGVcIiwgZmxhZzogXCJmbGFnLXRsXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXJrbWVuaXN0YW5cIiwgZmxhZzogXCJmbGFnLXRtXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdW5pc2lhXCIsIGZsYWc6IFwiZmxhZy10blwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9uZ2FcIiwgZmxhZzogXCJmbGFnLXRvXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXJrZXlcIiwgZmxhZzogXCJmbGFnLXRyXCIgfSxcclxuICAgIHsgbmFtZTogXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsIGZsYWc6IFwiZmxhZy10dFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHV2YWx1XCIsIGZsYWc6IFwiZmxhZy10dlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYVwiLCBmbGFnOiBcImZsYWctdHdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLXR6XCIgfSxcclxuICAgIHsgbmFtZTogXCJVa3JhaW5lXCIsIGZsYWc6IFwiZmxhZy11YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVWdhbmRhXCIsIGZsYWc6IFwiZmxhZy11Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy11bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIsIGZsYWc6IFwiZmxhZy11c1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVXJ1Z3VheVwiLCBmbGFnOiBcImZsYWctdXlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlV6YmVraXN0YW5cIiwgZmxhZzogXCJmbGFnLXV6XCIgfSxcclxuICAgIHsgbmFtZTogXCJIb2x5IFNlZVwiLCBmbGFnOiBcImZsYWctdmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsIGZsYWc6IFwiZmxhZy12Y1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmVuZXp1ZWxhLCBCb2xpdmFyaWFuIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy12ZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlyZ2luIElzbGFuZHMsIEJyaXRpc2hcIiwgZmxhZzogXCJmbGFnLXZnXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaXJnaW4gSXNsYW5kcywgVS5TLlwiLCBmbGFnOiBcImZsYWctdmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpZXQgTmFtXCIsIGZsYWc6IFwiZmxhZy12blwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmFudWF0dVwiLCBmbGFnOiBcImZsYWctdnVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIldhbGxpcyBhbmQgRnV0dW5hXCIsIGZsYWc6IFwiZmxhZy13ZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2Ftb2FcIiwgZmxhZzogXCJmbGFnLXdzXCIgfSxcclxuICAgIHsgbmFtZTogXCJZZW1lblwiLCBmbGFnOiBcImZsYWcteWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1heW90dGVcIiwgZmxhZzogXCJmbGFnLXl0XCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBBZnJpY2FcIiwgZmxhZzogXCJmbGFnLXphXCIgfSxcclxuICAgIHsgbmFtZTogXCJaYW1iaWFcIiwgZmxhZzogXCJmbGFnLXptXCIgfSxcclxuICAgIHsgbmFtZTogXCJaaW1iYWJ3ZVwiLCBmbGFnOiBcImZsYWctendcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVVzZXJGbGFncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS51c2VyRmxhZ3MgPSAkc2NvcGUuY3VycmVudFVzZXI/LmZsYWdzXHJcbiAgICAgID8gY291bnRyaWVzLmZpbHRlcihmdW5jdGlvbiAoY291bnRyeSkge1xyXG4gICAgICAgICAgcmV0dXJuICRzY29wZS5jdXJyZW50VXNlci5mbGFncy5pbmNsdWRlcyhjb3VudHJ5LmZsYWcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIDogW107XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmRhdGVPcHRpb25zID0ge1xyXG4gICAgbWF4RGF0ZTogbmV3IERhdGUoKSxcclxuICAgIG1pbkRhdGU6IG5ldyBEYXRlKDE5MDAsIDEsIDEpLFxyXG4gICAgaW5pdERhdGU6IG5ldyBEYXRlKDIwMDAsIDEsIDEpLFxyXG4gICAgZGF0ZXBpY2tlck1vZGU6IFwieWVhclwiLFxyXG4gIH07XHJcblxyXG4gICRzY29wZS51c2VybmFtZVRvZ2dsZSA9IHRydWU7XHJcbiAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gdHJ1ZTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVVzZXJuYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnVzZXJuYW1lVG9nZ2xlID0gISRzY29wZS51c2VybmFtZVRvZ2dsZTtcclxuICAgICRzY29wZS5uZXdVc2VybmFtZSA9ICRzY29wZS5jdXJyZW50VXNlci51c2VybmFtZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUubmV3UGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLmNvbmZpcm1QYXNzd29yZCA9IG51bGw7XHJcbiAgICAkc2NvcGUucGFzc3dvcmRUb2dnbGUgPSAhJHNjb3BlLnBhc3N3b3JkVG9nZ2xlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGVja1Bhc3N3b3JkID0gZnVuY3Rpb24gKHBhc3N3b3JkKSB7XHJcbiAgICBpZiAocGFzc3dvcmQpIHtcclxuICAgICAgdmFyIHVzZXIgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICBVc2VyU3ZjLmNoZWNrUGFzc3dvcmQodXNlciwgcGFzc3dvcmQpLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgb3JpZ2luYWxCZyA9ICQoXCIucGFzc3dvcmRcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIpO1xyXG4gICAgICAgICAgJChcIi5wYXNzd29yZFwiKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNGRkI2QzFcIiB9LCAyMDApLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG9yaWdpbmFsQmcgfSwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uIChvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgaWYgKG5ld1Bhc3N3b3JkKSB7XHJcbiAgICAgIGlmIChuZXdQYXNzd29yZCA9PSBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICB2YXIgdXNlciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgICAgVXNlclN2Yy5jaGFuZ2VQYXNzd29yZCh1c2VyLCBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQpLnRoZW4oXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzY29wZS50b2FzdChcIlBhc3N3b3JkIGNoYW5nZWRcIik7XHJcbiAgICAgICAgICAgICRzY29wZS5vbGRQYXNzd29yZCA9IG51bGw7XHJcbiAgICAgICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnRvYXN0KFwiUGFzc3dvcmQgY2hhbmdlIGZhaWxlZFwiKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgb3JpZ2luYWxCZyA9ICQoXCIucGFzc3dvcmRcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIpO1xyXG4gICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlVXNlcm5hbWUgPSBmdW5jdGlvbiAodXNlcm5hbWUpIHtcclxuICAgICRzY29wZS4kZW1pdChcImxvYWRpbmdcIik7XHJcbiAgICBVc2VyU3ZjLmNoYW5nZVVzZXJuYW1lKCRzY29wZS5jdXJyZW50VXNlci5faWQsIHVzZXJuYW1lKS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoXCJ1cGRhdGVcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUudG9hc3QodXNlcm5hbWUgKyBcIiBhbHJlYWR5IGluIHVzZVwiKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUuJGVtaXQoXCJsb2FkaW5nXCIpO1xyXG4gICAgVXNlclN2Yy51cGRhdGVVc2VyKHsgLi4uJHNjb3BlLmN1cnJlbnRVc2VyLCBmbGFnczogJHNjb3BlLnVzZXJGbGFncy5tYXAoKHsgZmxhZyB9KSA9PiBmbGFnKSB9KS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoXCJ1cGRhdGVcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5sb2FkQ291bnRyaWVzID0gZnVuY3Rpb24gKCRxdWVyeSkge1xyXG4gICAgcmV0dXJuIGNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGNvdW50cnkpIHtcclxuICAgICAgcmV0dXJuIGNvdW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsICgpID0+IHtcclxuICAgIHVwZGF0ZVVzZXJGbGFncygpO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdTa2lsbHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IDA7XHJcbiAgJHNjb3BlLnNraWxsc1Zpc2libGUgPSBmYWxzZTtcclxuICAkc2NvcGUucHJvamVjdHMgPSBbXTtcclxuXHJcbiAgJHNjb3BlLmxhYmVscyA9IFtcIkRvd25sb2FkIFNhbGVzXCIsIFwiSW4tU3RvcmUgU2FsZXNcIiwgXCJNYWlsLU9yZGVyIFNhbGVzXCJdO1xyXG4gICRzY29wZS5kYXRhID0gWzMwMCwgNTAwLCAxMDBdO1xyXG5cclxuICAkLmdldEpTT04oJy9leHBlcmllbmNlLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuICAgICRzY29wZS5wcm9qZWN0cyA9IGRhdGEucmVkdWNlKChwcm9qZWN0cywgZW1wbG95ZXIpID0+IHtcclxuICAgICAgaWYgKGVtcGxveWVyLnByb2plY3RzKSByZXR1cm4gZW1wbG95ZXIucHJvamVjdHMuY29uY2F0KHByb2plY3RzKTtcclxuICAgICAgZWxzZSByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9LCB7fSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5maWx0ZXJlZFByb2plY3RzID0gKCkgPT4gJHNjb3BlLnByb2plY3RzXHJcbiAgICAuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNraWxscyAmJiBwcm9qZWN0LnNraWxscy5pbmNsdWRlcygkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jb2RlKSlcclxuXHJcbiAgJC5nZXRKU09OKCcvc2tpbGxzLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuXHJcbiAgICBjb25zdCBza2lsbHMgPSBkYXRhXHJcbiAgICAuZmlsdGVyKChza2lsbCkgPT4gc2tpbGwuZW5hYmxlZClcclxuXHJcbiAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHNraWxsc1xyXG4gICAgLnJlZHVjZShmdW5jdGlvbihjYXRlZ29yaWVzLCBza2lsbCkge1xyXG4gICAgICBpZiAoIWNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0gPSBbc2tpbGxdXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0ucHVzaChza2lsbClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2F0ZWdvcmllcztcclxuICAgIH0sIHt9KTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCA9IGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IHNraWxsO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydE9wdGlvbnMgPSB7XHJcbiAgICAgICAgY3V0b3V0UGVyY2VudGFnZSA6IDgwLFxyXG4gICAgICAgIGNpcmN1bWZlcmVuY2U6IDIgKiBNYXRoLlBJLFxyXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXHJcbiAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydFN0eWxlID0ge1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgvc2tpbGxzLycgKyAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5pbWFnZSArICcpJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJzYwJScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnNTAlIDUwJSdcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwoJHNjb3BlLnNraWxsc1swXSk7XHJcblxyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRzY2UsICRsb2NhdGlvbiwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICBsZXQgcGFnZSA9IDE7XHJcbiAgICAkc2NvcGUubGlzdHMgPSBbXTtcclxuICAgICRzY29wZS5zZWFyY2ggPSBcIlwiO1xyXG4gICAgJHNjb3BlLnNlYXJjaEZpZWxkID0gXCJhbGxcIjtcclxuICAgICRzY29wZS5uZXdJdGVtID0ge307XHJcbiAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSB7fTtcclxuICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9IHt9O1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHVuZGVmaW5lZDtcclxuICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gXCJFTlwiO1xyXG4gICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMgPSBbXTtcclxuICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSBbXTtcclxuICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSBbXTtcclxuICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgIGxldCBleGhhdXN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBvYmplY3RDYXRlZ29yaWVzID0gW1wiY3VsdHVyZVwiLCBcIm5hdHVyZVwiLCBcIm1pc2NcIiwgXCJzb2NpZXR5XCIsIFwic3BvcnRzXCJdO1xyXG4gICAgJHNjb3BlLmJsdXJiVHlwZXMgPSBbXHJcbiAgICAgIHsgYXBpOiBcIm1vdmllc1wiLCBjYXRlZ29yaWVzOiBbXCJtb3ZpZXNcIl0sIHRleHQ6IFwiR2V0IG1vdmllIHBvc3RlcnNcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJ0dlwiLCBjYXRlZ29yaWVzOiBbXCJ0ZWxldmlzaW9uXCJdLCB0ZXh0OiBcIkdldCB0diBwb3N0ZXJzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwiYWN0b3JzXCIsIGNhdGVnb3JpZXM6IFtcIm1vdmllc1wiLCBcInRlbGV2aXNpb25cIl0sIHRleHQ6IFwiR2V0IGFjdG9yIHBpY3NcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJib29rc1wiLCBjYXRlZ29yaWVzOiBbXCJsaXRlcmF0dXJlXCJdLCB0ZXh0OiBcIkdldCBib29rIGNvdmVyc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcIm11c2ljdmlkZW9zXCIsIGNhdGVnb3JpZXM6IFtcIm11c2ljXCJdLCB0ZXh0OiBcIkdldCBtdXNpYyB2aWRlb3NcIiwgYWRtaW5Pbmx5OiB0cnVlIH0sXHJcbiAgICAgIHsgYXBpOiBcInVuc3BsYXNoXCIsIGNhdGVnb3JpZXM6IG9iamVjdENhdGVnb3JpZXMsIHRleHQ6IFwiR2V0IFVuc3BsYXNoIHBpY3NcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJwZXhlbHNcIiwgY2F0ZWdvcmllczogb2JqZWN0Q2F0ZWdvcmllcywgdGV4dDogXCJHZXQgUGV4ZWxzIHBpY3NcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJ3aWtpXCIsIGNhdGVnb3JpZXM6IG9iamVjdENhdGVnb3JpZXMsIHRleHQ6IFwiR2V0IFdpa2kgcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICBdO1xyXG5cclxuICAgICRzY29wZS5oYXZlQ29tbW9uSXRlbXMgPSAoYXJyMSwgYXJyMikgPT4ge1xyXG4gICAgICByZXR1cm4gYXJyMT8uc29tZSgoaXRlbSkgPT4gYXJyMi5pbmNsdWRlcyhpdGVtKSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5rZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAvLyBUYWJcclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICBpZiAoJChcIiNuZXctYmx1cmJcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmNyZWF0ZVZhbHVlKCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCQoXCIjbmV3LXZhbHVlXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICQoXCIjbmV3LWJsdXJiXCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICB9XHJcbiAgICAgIC8vIHVzZSBlLmtleUNvZGVcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmFkZExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIFwibmV3XCIpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgY3JlYXRvcjogJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHZhbHVlczogW10sXHJcbiAgICAgICAgYW5zd2VyczogMCxcclxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICRzY29wZS5zZWxlY3RlZExhbmd1YWdlLFxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2VhcmNoID0gJGxvY2F0aW9uLnNlYXJjaCgpLnNlYXJjaDtcclxuICAgICAgaWYgKGxpc3QpIHtcclxuICAgICAgICBpZiAobGlzdC5faWQgPT09IFwibmV3XCIpIHtcclxuICAgICAgICAgICRzY29wZS5hZGRMaXN0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0KGxpc3QpXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIGRhdGEuX2lkKTtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9ICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnJlYWRPbmx5ID1cclxuICAgICAgICAgICAgICAgICEkc2NvcGUuc2VsZWN0ZWRMaXN0IHx8XHJcbiAgICAgICAgICAgICAgICAoISRzY29wZS5jdXJyZW50VXNlci5hZG1pbiAmJlxyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNyZWF0b3IuX2lkICE9PSAkc2NvcGUuY3VycmVudFVzZXIuX2lkICYmXHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuX2lkKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzZXRMYW5ndWFnZUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0ge307XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9IHt9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0RmlsdGVyQ291bnQgPSAoKSA9PlxyXG4gICAgICBPYmplY3QudmFsdWVzKCRzY29wZS5sYW5ndWFnZUZpbHRlcikubGVuZ3RoICsgT2JqZWN0LnZhbHVlcygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpLmxlbmd0aDtcclxuXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5jdXJyZW50VXNlcikgcmV0dXJuO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGxhbmd1YWdlcyB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldExhbmd1YWdlcygpO1xyXG4gICAgICAkc2NvcGUubGFuZ3VhZ2VzID0gbGFuZ3VhZ2VzO1xyXG4gICAgICByZXNldExhbmd1YWdlRmlsdGVyKCk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogY2F0ZWdvcmllcyB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKTtcclxuICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xyXG4gICAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcclxuICAgICAgcmVzZXRDYXRlZ29yeUZpbHRlcigpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGxhbmd1YWdlU3RhdHMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0TGFuZ3VhZ2VTdGF0cygpO1xyXG4gICAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IGxhbmd1YWdlU3RhdHMucmVkdWNlKChyZXN1bHQsIHsgX2lkLCBjb3VudCB9KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W19pZC5sYW5ndWFnZV0gPSAocmVzdWx0W19pZC5sYW5ndWFnZV0gfHwgMCkgKyBjb3VudDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogY2F0ZWdvcnlTdGF0cyB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldExpc3RDYXRlZ29yeVN0YXRzKCk7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeVN0YXRzID0gY2F0ZWdvcnlTdGF0cy5yZWR1Y2UoKHJlc3VsdCwgeyBfaWQsIGNvdW50IH0pID0+IHtcclxuICAgICAgICByZXN1bHRbX2lkXSA9IGNvdW50O1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0KSB7XHJcbiAgICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCh7IF9pZDogJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QgfSk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLnNlYXJjaCA9ICRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2ggfHwgXCJcIjtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZWFyY2hMaXN0cyA9IGFzeW5jICh2aWV3VmFsdWUpID0+IHtcclxuICAgICAgaWYgKHZpZXdWYWx1ZS5sZW5ndGggPj0gMykge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLnNlYXJjaExpc3RzKHZpZXdWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5oaWdobGlnaHRlZFNlYXJjaFRleHQgPSAodGV4dCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLnNlYXJjaCkge1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgKCR7JHNjb3BlLnNlYXJjaH0pYCwgXCJnaVwiKTtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKHJlZ2V4LCBcIjxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPiQxPC9zcGFuPlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudmFsdWVPcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwidmFsdWVcIixcclxuICAgICAgZGlyZWN0aW9uOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogJGxvY2F0aW9uLnNlYXJjaCgpLnNvcnQgfHwgXCJkYXRlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogJGxvY2F0aW9uLnNlYXJjaCgpLm9yZGVyID8gJGxvY2F0aW9uLnNlYXJjaCgpLm9yZGVyID09PSBcImRlc2NcIiA6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA9ICEkc2NvcGUub3JkZXIuZGlyZWN0aW9uO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwic29ydFwiLCBmaWVsZCk7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJvcmRlclwiLCAkc2NvcGUub3JkZXIuZGlyZWN0aW9uID8gXCJkZXNjXCIgOiBcImFzY1wiKTtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRNb3JlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubGlzdHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgIGdldExpc3RzKCkudGhlbigobGlzdHMpID0+IHtcclxuICAgICAgICAkc2NvcGUubGlzdHMgPSAkc2NvcGUubGlzdHMuY29uY2F0KGxpc3RzKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxpc3RzID0gW107XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSBbXTtcclxuICAgICAgcGFnZSA9IDE7XHJcbiAgICAgIGV4aGF1c3RlZCA9IGZhbHNlO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gbGlzdHM7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldExhbmd1YWdlRmlsdGVyID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID09PSB0cnVlKSB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID0gISRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWxldGUgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPT09IHRydWUpIHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID0gISRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsZXRlICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV07XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVDYXRlZ29yeUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcik7XHJcbiAgICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPVxyXG4gICAgICAgIGNhdGVnb3JpZXMubGVuZ3RoID09PSBjYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0pLmxlbmd0aDtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0gJHNjb3BlLmNhdGVnb3JpZXMucmVkdWNlKChmaWx0ZXIsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgZmlsdGVyW2NhdGVnb3J5XSA9ICFhbGxDYXRlZ29yaWVzO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRDYXRlZ29yeUxhYmVsID0gKGNhdGVnb3JpZXMpID0+IHtcclxuICAgICAgaWYgKCFjYXRlZ29yaWVzIHx8IGNhdGVnb3JpZXMubGVuZ3RoID09PSAwKSByZXR1cm4gXCJcIjtcclxuICAgICAgY29uc3QgbWFpbkNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+ICFjYXRlZ29yeS5pbmNsdWRlcyhcIi5cIikpO1xyXG4gICAgICByZXR1cm4gbWFpbkNhdGVnb3JpZXNcclxuICAgICAgICAuc29ydCgpXHJcbiAgICAgICAgLm1hcCgoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHN1YmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHN1YmNhdGVnb3J5KSA9PiBzdWJjYXRlZ29yeS5zdGFydHNXaXRoKGNhdGVnb3J5KSAmJiBzdWJjYXRlZ29yeSAhPT0gY2F0ZWdvcnkpXHJcbiAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgKHN1YmNhdGVnb3J5KSA9PlxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXNcclxuICAgICAgICAgICAgICAgICAgLmZpbmQoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGNhdGVnb3J5KVxyXG4gICAgICAgICAgICAgICAgICAuc3ViY2F0ZWdvcmllcy5maW5kKCh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBzdWJjYXRlZ29yeSk/LmxhYmVsLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMuZmluZCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gY2F0ZWdvcnkpLmxhYmVsICtcclxuICAgICAgICAgICAgKHN1YmNhdGVnb3JpZXMubGVuZ3RoID4gMCA/IFwiIChcIiArIHN1YmNhdGVnb3JpZXMuc29ydCgpLmpvaW4oXCIsIFwiKSArIFwiKVwiIDogXCJcIilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuam9pbihcIiwgXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5sb2FkaW5nIHx8IGV4aGF1c3RlZCkgcmV0dXJuIFtdO1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoICE9PSAkc2NvcGUuc2VhcmNoKSB7XHJcbiAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcInNlYXJjaFwiLCAkc2NvcGUuc2VhcmNoID8gJHNjb3BlLnNlYXJjaCA6IG51bGwpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldExpc3RzKHtcclxuICAgICAgICBwYWdlLFxyXG4gICAgICAgIHNvcnRCeTogJHNjb3BlLm9yZGVyLmZpZWxkLFxyXG4gICAgICAgIG9yZGVyQnk6ICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPyAtMSA6IDEsXHJcbiAgICAgICAgbGltaXQ6IDEwMCxcclxuICAgICAgICAuLi4oJHNjb3BlLnNlYXJjaEZpZWxkID09PSBcImFsbFwiID8geyBzZWFyY2g6ICRzY29wZS5zZWFyY2ggfSA6IHt9KSxcclxuICAgICAgICAuLi4oJHNjb3BlLnNlYXJjaEZpZWxkID09PSBcIm5hbWVcIiA/IHsgbmFtZTogJHNjb3BlLnNlYXJjaCB9IDoge30pLFxyXG4gICAgICAgIGxhbmd1YWdlOiBPYmplY3Qua2V5cygkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIpLmZpbHRlcigobGFuZ3VhZ2UpID0+ICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZV0gPT09IHRydWUpLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9PT0gdHJ1ZSksXHJcbiAgICAgICAgbGFuZ3VhZ2VOb3Q6IE9iamVjdC5rZXlzKCRzY29wZS5sYW5ndWFnZUZpbHRlcikuZmlsdGVyKChsYW5ndWFnZSkgPT4gJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlXSA9PT0gZmFsc2UpLFxyXG4gICAgICAgIGNhdGVnb3JpZXNOb3Q6IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikuZmlsdGVyKFxyXG4gICAgICAgICAgKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID09PSBmYWxzZSxcclxuICAgICAgICApLFxyXG4gICAgICB9KTtcclxuICAgICAgJHNjb3BlLmNvdW50ID0gZGF0YS5jb3VudDtcclxuICAgICAgaWYgKGRhdGEucmVzdWx0Lmxlbmd0aCA8IDEwMCkgZXhoYXVzdGVkID0gdHJ1ZTtcclxuICAgICAgZWxzZSBwYWdlID0gZGF0YS5uZXh0UGFnZTtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgY29uc29sZS5sb2coYFBhZ2UgJHtwYWdlfSBsb2FkZWQsICR7ZGF0YS5yZXN1bHQubGVuZ3RofSBpdGVtc2ApO1xyXG4gICAgICByZXR1cm4gZGF0YS5yZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMaXN0TmFtZSA9IChsaXN0SWQpID0+ICRzY29wZS5saXN0cy5maW5kKCh7IF9pZCB9KSA9PiBfaWQgPT09IGxpc3RJZCk/Lm5hbWU7XHJcblxyXG4gICAgJHNjb3BlLnVwZGF0ZVZhbHVlID0gYXN5bmMgKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKCFpdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgJHNjb3BlLmRlbGV0ZVZhbHVlKGl0ZW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRJdGVtUmVzcG9uc2UgPSBhd2FpdCBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdFZhbHVlKCRzY29wZS5zZWxlY3RlZExpc3QsIGl0ZW0pO1xyXG4gICAgICAgIGl0ZW0uYmx1cmJUeXBlID0gdXBkYXRlZEl0ZW1SZXNwb25zZS5kYXRhLmJsdXJiVHlwZTtcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNyZWF0ZVZhbHVlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5uZXdJdGVtLnZhbHVlKSByZXR1cm47XHJcbiAgICAgIGlmICgkc2NvcGUuaGFzRHVwbGljYXRlKCkpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoYCR7JHNjb3BlLm5ld0l0ZW0udmFsdWV9IGlzIGFscmVhZHkgaW4gdGhlIGxpc3RgKTtcclxuICAgICAgfSBlbHNlIGlmICghJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5wdXNoKHsgLi4uJHNjb3BlLm5ld0l0ZW0gfSk7XHJcbiAgICAgICAgaWYgKCRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCkge1xyXG4gICAgICAgICAgYXdhaXQgJHNjb3BlLnVwc2VydExpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRJdGVtUmVzcG9uc2UgPSBhd2FpdCBUZW5UaGluZ3NTdmMuY3JlYXRlTGlzdFZhbHVlKCRzY29wZS5zZWxlY3RlZExpc3QsICRzY29wZS5uZXdJdGVtKTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5wdXNoKGNyZWF0ZWRJdGVtUmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLm5ld0l0ZW0udmFsdWUpO1xyXG4gICAgICAgICRzY29wZS50b2FzdChgXCIkeyRzY29wZS5uZXdJdGVtLnZhbHVlfVwiIGFkZGVkYCk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgICAkc2NvcGUubmV3SXRlbS5ibHVyYiA9IFwiXCI7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICQoXCIjbmV3LXZhbHVlXCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICAgICAgfSk7XHJcbiAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZVZhbHVlID0gKGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgdmFsdWVUb0RlbGV0ZSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5kZWxldGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgaXRlbSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5faWQgIT09IGl0ZW0uX2lkKTtcclxuICAgICAgICAkc2NvcGUudG9hc3QoYFwiJHt2YWx1ZVRvRGVsZXRlfVwiIHJlbW92ZWRgKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS51cGRhdGVMaXN0ID0gKGxpc3QsIHVwZGF0ZXMpID0+IHtcclxuICAgICAgaWYgKGxpc3QuX2lkICYmIGxpc3QuX2lkICE9PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgLi4udXBkYXRlcyxcclxuICAgICAgICAgIF9pZDogbGlzdC5faWQsXHJcbiAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGNvbnN0IGxpc3RJbmRleCA9ICRzY29wZS5saXN0cy5maW5kSW5kZXgoKGxpc3QpID0+IGxpc3QuX2lkID09PSBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdHNbbGlzdEluZGV4XSA9IGRhdGE7XHJcbiAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwc2VydExpc3QgPSAobGlzdCwgdXBkYXRlcykgPT4ge1xyXG4gICAgICAkc2NvcGUuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKGxpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCAmJiBsaXN0Lm5hbWUgJiYgbGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAobGlzdC5faWQgJiYgbGlzdC5faWQgIT09IFwibmV3XCIpIHtcclxuICAgICAgICAgIGxldCBjaGFuZ2VzID0gdXBkYXRlcyA/IHVwZGF0ZXMgOiBsaXN0O1xyXG4gICAgICAgICAgZGVsZXRlIGNoYW5nZXMuX2lkO1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgICAuLi5jaGFuZ2VzLFxyXG4gICAgICAgICAgICBfaWQ6IGxpc3QuX2lkLFxyXG4gICAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkc2NvcGUubGlzdHNbJHNjb3BlLmxpc3RzLmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5faWQgPT09IGRhdGEuX2lkKV0gPSBkYXRhO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuY3JlYXRlTGlzdCgkc2NvcGUuY3VycmVudFVzZXIsICRzY29wZS5zZWxlY3RlZExpc3QpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCA9PT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIGRhdGEuX2lkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCA9IGRhdGEuX2lkO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkc2NvcGUudG9hc3QoYFwiJHtkYXRhLm5hbWV9XCIgY3JlYXRlZGApO1xyXG4gICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oJHNjb3BlLnNlbGVjdGVkTGlzdCwgdXBkYXRlcyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZUxpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBpZiAoIWxpc3QuX2lkKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmNvbmZpcm1lZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmluY2x1ZGVzKGxpc3QuX2lkKSkge1xyXG4gICAgICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSBbbGlzdC5faWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI21vZGFsLWRlbGV0ZS1saXN0c1wiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZUxpc3RzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcztcclxuICAgICAgJHNjb3BlLmNvbmZpcm1lZCA9IGZhbHNlO1xyXG4gICAgICAkKFwiI21vZGFsLWRlbGV0ZS1saXN0c1wiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jb25maXJtTWVyZ2VMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBUZW5UaGluZ3NTdmMubWVyZ2VMaXN0cygkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzKTtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gW107XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSBbXTtcclxuICAgICAgJHNjb3BlLmNvbmZpcm1lZCA9IGZhbHNlO1xyXG4gICAgICAkc2NvcGUudG9hc3QoXCJNZXJnZWRcIik7XHJcbiAgICAgICQoXCIjbW9kYWwtbWVyZ2UtbGlzdHNcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY29uZmlybURlbGV0ZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IGxpc3RJZCBvZiAkc2NvcGUubGlzdElkc1RvRGVsZXRlKSB7XHJcbiAgICAgICAgYXdhaXQgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3QobGlzdElkKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICRzY29wZS50b2FzdChcIkxpc3RzIGRlbGV0ZWRcIik7XHJcbiAgICAgICQoXCIjbW9kYWwtZGVsZXRlLWxpc3RzXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUhpZ2hsaWdodGVkTGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmxlbmd0aCA9PT0gJHNjb3BlLmxpc3RzLmxlbmd0aCkge1xyXG4gICAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gJHNjb3BlLmxpc3RzLm1hcCgoeyBfaWQgfSkgPT4gX2lkKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9ICRzY29wZS5saXN0cy5maWx0ZXIoKHsgX2lkIH0pID0+ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMoX2lkKSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVIaWdobGlnaHRlZExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhsaXN0Ll9pZCkpIHtcclxuICAgICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5maWx0ZXIoXHJcbiAgICAgICAgICAoaGlnaGxpZ2h0ZWRMaXN0SWQpID0+IGhpZ2hsaWdodGVkTGlzdElkICE9PSBsaXN0Ll9pZCxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMucHVzaChsaXN0Ll9pZCk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMgPSAkc2NvcGUubGlzdHMuZmlsdGVyKCh7IF9pZCB9KSA9PiAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmluY2x1ZGVzKF9pZCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2UgPSAobGlzdCwgbGFuZ3VhZ2UpID0+IHtcclxuICAgICAgbGlzdC5sYW5ndWFnZSA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwgeyBsYW5ndWFnZTogbGFuZ3VhZ2UuY29kZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldERpZmZpY3VsdHkgPSAobGlzdCwgZGlmZmljdWx0eSkgPT4ge1xyXG4gICAgICBsaXN0LmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7IGRpZmZpY3VsdHk6IGRpZmZpY3VsdHkgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRGcmVxdWVuY3kgPSAobGlzdCwgZnJlcXVlbmN5KSA9PiB7XHJcbiAgICAgIGxpc3QuZnJlcXVlbmN5ID0gZnJlcXVlbmN5O1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7IGZyZXF1ZW5jeTogZnJlcXVlbmN5IH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRVcGRhdGVkQ2F0ZWdvcmllcyA9IChsaXN0LCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBsZXQgY2F0ZWdvcmllcyA9IGxpc3QuY2F0ZWdvcmllcztcclxuICAgICAgaWYgKGNhdGVnb3JpZXMuc29tZSgobGlzdENhdGVnb3J5KSA9PiBsaXN0Q2F0ZWdvcnkgPT09IGNhdGVnb3J5KSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXMgPSBsaXN0LmNhdGVnb3JpZXMuZmlsdGVyKChsaXN0Q2F0ZWdvcnkpID0+IGxpc3RDYXRlZ29yeSAhPT0gY2F0ZWdvcnkpO1xyXG4gICAgICAgIGlmICghY2F0ZWdvcnkuaW5jbHVkZXMoXCIuXCIpICYmIGNhdGVnb3JpZXMuc29tZSgobGlzdENhdGVnb3J5KSA9PiBsaXN0Q2F0ZWdvcnkuc3RhcnRzV2l0aChjYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgICBjYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5maWx0ZXIoKGxpc3RDYXRlZ29yeSkgPT4gIWxpc3RDYXRlZ29yeS5zdGFydHNXaXRoKGNhdGVnb3J5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgICAgaWYgKGNhdGVnb3J5LmluY2x1ZGVzKFwiLlwiKSAmJiAhY2F0ZWdvcmllcy5maW5kKChsaXN0Q2F0ZWdvcnkpID0+IGxpc3RDYXRlZ29yeSA9PT0gY2F0ZWdvcnkuc3BsaXQoXCIuXCIpWzBdKSkge1xyXG4gICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5LnNwbGl0KFwiLlwiKVswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnkgPSAobGlzdCwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgY29uc3QgdXBkYXRlZENhdGVnb3JpZXMgPSBnZXRVcGRhdGVkQ2F0ZWdvcmllcyhsaXN0LCBjYXRlZ29yeSk7XHJcbiAgICAgIGlmICh1cGRhdGVkQ2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAkc2NvcGUudG9hc3QoYFlvdSBtdXN0IGhhdmUgYXQgbGVhc3QgMSBjYXRlZ29yeSBmb3IgJHtsaXN0Lm5hbWV9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwgeyBjYXRlZ29yaWVzOiB1cGRhdGVkQ2F0ZWdvcmllcyB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcmllcyA9IGFzeW5jIChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgbGV0IGxpc3RzVG9VcGRhdGUgPSBbXTtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLmV2ZXJ5KCh7IGNhdGVnb3JpZXMgfSkgPT4gY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgbGlzdHNUb1VwZGF0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RzO1xyXG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLnNvbWUoKHsgY2F0ZWdvcmllcyB9KSA9PiBjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICBsaXN0c1RvVXBkYXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMuZmlsdGVyKCh7IGNhdGVnb3JpZXMgfSkgPT4gIWNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaXN0c1RvVXBkYXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHM7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdXBkYXRlZExpc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgbGlzdHNUb1VwZGF0ZS5tYXAoKGxpc3RUb1VwZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdXBkYXRlZENhdGVnb3JpZXMgPSBnZXRVcGRhdGVkQ2F0ZWdvcmllcyhsaXN0VG9VcGRhdGUsIGNhdGVnb3J5KTtcclxuICAgICAgICAgIGlmICh1cGRhdGVkQ2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgJHNjb3BlLnRvYXN0KGBZb3UgbXVzdCBoYXZlIGF0IGxlYXN0IDEgY2F0ZWdvcnkgZm9yICR7bGlzdFRvVXBkYXRlLm5hbWV9YCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgICAgIF9pZDogbGlzdFRvVXBkYXRlLl9pZCxcclxuICAgICAgICAgICAgICBjYXRlZ29yaWVzOiB1cGRhdGVkQ2F0ZWdvcmllcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICk7XHJcbiAgICAgIHVwZGF0ZWRMaXN0cy5mb3JFYWNoKCh1cGRhdGVkTGlzdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3RJbmRleCA9ICRzY29wZS5saXN0cy5maW5kSW5kZXgoKGxpc3QpID0+IGxpc3QuX2lkID09PSB1cGRhdGVkTGlzdC5faWQpO1xyXG4gICAgICAgICRzY29wZS5saXN0c1tsaXN0SW5kZXhdID0gdXBkYXRlZExpc3Q7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9ICRzY29wZS5saXN0cy5maWx0ZXIoKHsgX2lkIH0pID0+ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMoX2lkKSk7XHJcbiAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNhdGVnb3J5U3RhdHVzID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5ldmVyeSgoeyBjYXRlZ29yaWVzIH0pID0+IGNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSkge1xyXG4gICAgICAgIHJldHVybiBcImNoZWNrZWRcIjtcclxuICAgICAgfSBlbHNlIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5zb21lKCh7IGNhdGVnb3JpZXMgfSkgPT4gY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgcmV0dXJuIFwicGFydGlhbFwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcInVuY2hlY2tlZFwiO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5oYXNEdXBsaWNhdGUgPSAoKSA9PlxyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ICYmXHJcbiAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlICYmXHJcbiAgICAgIF8uc29tZShcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyxcclxuICAgICAgICAoYW5zd2VyKSA9PiBhbnN3ZXIudmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpID09ICRzY29wZS5uZXdJdGVtLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSxcclxuICAgICAgKTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0U2VsZWN0ZWRMaXN0c1RpdGxlID0gKCkgPT4gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMubWFwKChsaXN0KSA9PiBsaXN0Lm5hbWUpLmpvaW4oXCIgLyBcIik7XHJcblxyXG4gICAgJHNjb3BlLmdldEJsdXJicyA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldEJsdXJicygkc2NvcGUuc2VsZWN0ZWRMaXN0LCB0eXBlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCk7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLnRvYXN0KFwiQmx1cmJzIHVwZGF0ZWRcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS50b2FzdChcIkJsdXJiIHVwZGF0ZSBmYWlsZWRcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRFbWJlZFVybCA9ICh1cmwpID0+IHtcclxuICAgICAgaWYgKHVybC5pbmNsdWRlcyhcInlvdXR1YmUuY29tXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvWz8mXXY9KFteJl0rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJ5b3V0dS5iZVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL3lvdXR1XFwuYmVcXC8oW14mP10rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJ2aW1lby5jb21cIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC92aW1lb1xcLmNvbVxcLyhcXGQrKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsLmluY2x1ZGVzKFwib3Blbi5zcG90aWZ5XCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvdHJhY2tcXC8oW14mP10rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9lbWJlZC90cmFjay8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKHVybCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuIGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9P2F1dG9wbGF5PTFgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgZ2V0RGF0YSk7XHJcbiAgfSk7XHJcbiIsIi8qanNsaW50IGVzdmVyc2lvbjogNiovXHJcbmFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NBZG1pbkN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgVGVuVGhpbmdzU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8pID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5hZG1pbikge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcclxuICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLnJldmVyc2UgPSAhJHNjb3BlLm9yZGVyLnJldmVyc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0UXVldWUgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldFF1ZXVlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucXVldWUgPSByZXNwb25zZS5kYXRhLnJlcGxhY2UoXCIvblwiLCBcIjxici8+XCIpO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgICRzY29wZS5nZXRRdWV1ZSgpO1xyXG5cclxuICAgIFRlblRoaW5nc1N2Yy5nZXRQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICRzY29wZS5wYXVzZWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy5nZXRVc2VycygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKHVzZXIpID0+ICF1c2VyLmFkbWluKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUJhbiA9ICh1c2VyKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy50b2dnbGVCYW4odXNlci5faWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVQYXVzZSA9ICh1c2VyKSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy50b2dnbGVQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLnBhdXNlZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0dhbWVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZVBhcmFtcywgVGVuVGhpbmdzU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB1c2VycyB9ID0gYXdhaXQgVXNlclN2Yy5nZXRVc2VycygpO1xyXG4gICAgICAgICRzY29wZS51c2VycyA9IHVzZXJzLmZpbHRlcigodXNlcikgPT4gIXVzZXIuYWRtaW4pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogY2F0ZWdvcmllcyB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKTtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XHJcbiAgICAgICAgaWYgKCRzdGF0ZVBhcmFtcy5nYW1lKSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0R2FtZSgkc3RhdGVQYXJhbXMuZ2FtZSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLmdhbWUgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuZ2FtZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5ID0gYXN5bmMgKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogZGlzYWJsZWRDYXRlZ29yaWVzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMudXBkYXRlR2FtZUNhdGVnb3J5KCRzdGF0ZVBhcmFtcy5nYW1lLCBjYXRlZ29yeSk7XHJcbiAgICAgICRzY29wZS5nYW1lLmRpc2FibGVkQ2F0ZWdvcmllcyA9IGRpc2FibGVkQ2F0ZWdvcmllcztcclxuICAgICAgY29uc29sZS5sb2coZGlzYWJsZWRDYXRlZ29yaWVzLmZpbmQoKGMpID0+IGMgPT09IGNhdGVnb3J5KSk7XHJcbiAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsIGdldERhdGEpO1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzU3RhdHNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIFRlblRoaW5nc1N2Yykge1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBbXTtcclxuICAgICRzY29wZS5jYXRlZ29yeVN0YXRzID0geyBsYWJlbHM6IFtdLCBkYXRhc2V0czogW10gfTtcclxuXHJcbiAgICBjb25zdCBsaW5lQ2hhcnRPcHRpb25zID0ge1xyXG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgIHRleHQ6IFwiQ2hhcnQuanMgTGluZSBDaGFydFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmN1cnJlbnRVc2VyKSByZXR1cm47XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZVN0YXRzID0gW107XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRQbGF5U3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IHllYXIgfSkgPT4geWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBtb250aHMgPSBfLnRpbWVzKDEyLCAoaSkgPT4gaSArIDEpO1xyXG4gICAgICAgICRzY29wZS5wbGF5U3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IG1vbnRocyxcclxuICAgICAgICAgIHNlcmllczogeWVhcnMsXHJcbiAgICAgICAgICBkYXRhOiB5ZWFycy5tYXAoKHllYXIpID0+XHJcbiAgICAgICAgICAgIG1vbnRocy5tYXAoKG1vbnRoKSA9PiBkYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubW9udGggPT09IG1vbnRoICYmIGl0ZW0ueWVhciA9PT0geWVhcik/LnVuaXF1ZVBsYXllcnMgfHwgMCksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgb3B0aW9uczogbGluZUNoYXJ0T3B0aW9ucyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RMYW5ndWFnZVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFycyA9IF8udW5pcShkYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkLnllYXIpKS5zb3J0KCk7XHJcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UpKS5zb3J0KCk7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IHllYXJzLFxyXG4gICAgICAgICAgc2VyaWVzOiBsYW5ndWFnZXMsXHJcbiAgICAgICAgICBkYXRhOiBsYW5ndWFnZXMubWFwKChsYW5ndWFnZSkgPT5cclxuICAgICAgICAgICAgeWVhcnMubWFwKCh5ZWFyKSA9PiBkYXRhLmZpbmQoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2UgJiYgX2lkLnllYXIgPT09IHllYXIpPy5jb3VudCB8fCAwKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBvcHRpb25zOiBsaW5lQ2hhcnRPcHRpb25zLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0R2FtZVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFycyA9IF8udW5pcShkYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkLnllYXIpKS5zb3J0KCk7XHJcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UpKS5zb3J0KCk7XHJcbiAgICAgICAgJHNjb3BlLmdhbWVTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogeWVhcnMsXHJcbiAgICAgICAgICBzZXJpZXM6IGxhbmd1YWdlcyxcclxuICAgICAgICAgIGRhdGE6IGxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlKSA9PlxyXG4gICAgICAgICAgICB5ZWFycy5tYXAoKHllYXIpID0+IGRhdGEuZmluZCgoeyBfaWQgfSkgPT4gX2lkLmxhbmd1YWdlID09PSBsYW5ndWFnZSAmJiBfaWQueWVhciA9PT0geWVhcik/LmNvdW50IHx8IDApLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIG9wdGlvbnM6IGxpbmVDaGFydE9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBfLnNvcnRCeShkYXRhLCAoeyBjb3VudCB9KSA9PiAtY291bnQpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiBzb3J0ZWREYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkKSxcclxuICAgICAgICAgIGRhdGE6IFtzb3J0ZWREYXRhLm1hcCgoeyBjb3VudCB9KSA9PiBjb3VudCldLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgKCkgPT4ge1xyXG4gICAgICBnZXREYXRhKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdXb3Jrb3V0Q3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICRzY29wZS50aW1lRXhlcmNpc2luZyA9IDMwO1xyXG4gICRzY29wZS50aW1lUmVzdGluZyA9IDEwO1xyXG4gICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcblxyXG4gIHZhciBzb3VuZHMgPSB7XHJcbiAgICBvbjogbmV3IEF1ZGlvKCdvbi53YXYnKSxcclxuICAgIG9mZjogbmV3IEF1ZGlvKCdvZmYud2F2JyksXHJcbiAgICBzd2l0Y2g6IG5ldyBBdWRpbygnc3dpdGNoLndhdicpLFxyXG4gIH07XHJcblxyXG5cclxuICB2YXIgZXhlcmNpc2VzID0gW1xyXG4gICAge25hbWU6ICdKdW1waW5nIEphY2tzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnV2FsbCBTaXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnQ3J1bmNoJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU3RlcC1VcCcsIHNwbGl0OiB0cnVlfSxcclxuICAgIHtuYW1lOiAnU3F1YXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdUcmljZXBzIERpcCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1BsYW5rJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnSGlnaCBLbmVlcycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0x1bmdlJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUHVzaC1VcCB3aXRoIFJvdGF0aW9uJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU2lkZSBQbGFuaycsIHNwbGl0OiB0cnVlfVxyXG4gIF07XHJcblxyXG4gIHZhciBleGVyY2lzaW5nO1xyXG5cclxuICAkc2NvcGUucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoZXhlcmNpc2VzLmxlbmd0aCAtIE1hdGguZmxvb3IoJHNjb3BlLnRpbWVSZW1haW5pbmcgLyAoJHNjb3BlLnRpbWVFeGVyY2lzaW5nICsgJHNjb3BlLnRpbWVSZXN0aW5nKSkpICsgJy8nICsgZXhlcmNpc2VzLmxlbmd0aDtcclxuICB9O1xyXG5cclxuICAkc2NvcGUud29ya291dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGV4Y2VyY2lzZVRpbWUgPSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3Rpbmc7XHJcbiAgICBpZiAoISRzY29wZS50aW1lUmVtYWluaW5nKSB7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gZXhlcmNpc2VzLmxlbmd0aCAqIGV4Y2VyY2lzZVRpbWU7XHJcbiAgICAgIGV4ZXJjaXNpbmcgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZy0tO1xyXG4gICAgICAgIGlmICgkc2NvcGUudGltZVJlbWFpbmluZyA9PT0gMCkge1xyXG4gICAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICdGaW5pc2hlZCEgQ29uZ3JhdHMhJywgc3BsaXQ6IGZhbHNlfTtcclxuICAgICAgICAgICRzY29wZS50aW1lciA9ICcnO1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VycmVudEV4ZXJjaXNlID0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvIGV4Y2VyY2lzZVRpbWUpO1xyXG4gICAgICAgIHZhciB0aW1lciA9ICRzY29wZS50aW1lUmVtYWluaW5nIC0gY3VycmVudEV4ZXJjaXNlICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgICAkc2NvcGUudGltZXIgPSB0aW1lciA+ICRzY29wZS50aW1lRXhlcmNpc2luZyA/IHRpbWVyIC0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nIDogdGltZXI7XHJcbiAgICAgICAgaWYgKHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nKSB7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS5leGVyY2lzZSA9IGV4ZXJjaXNlc1tleGVyY2lzZXMubGVuZ3RoIC0gY3VycmVudEV4ZXJjaXNlIC0gMV07XHJcbiAgICAgICAgaWYgKHRpbWVyID09PSAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgIHNvdW5kcy5vbi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aW1lciA9PT0gMCkge1xyXG4gICAgICAgICAgc291bmRzLm9mZi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkc2NvcGUuZXhlcmNpc2Uuc3BsaXQgJiYgdGltZXIgPT09IE1hdGguZmxvb3IoJHNjb3BlLnRpbWVFeGVyY2lzaW5nIC8gMikpIHtcclxuICAgICAgICAgIHNvdW5kcy5zd2l0Y2gucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChleGVyY2lzaW5nKTtcclxuICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICcnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuZGlyZWN0aXZlKFwiY2xpY2tPdXRzaWRlXCIsIGZ1bmN0aW9uICgkZG9jdW1lbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVzdHJpY3Q6IFwiQVwiLFxyXG4gICAgc2NvcGU6IHtcclxuICAgICAgY2xpY2tPdXRzaWRlOiBcIiZcIixcclxuICAgIH0sXHJcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRyKSB7XHJcbiAgICAgICRkb2N1bWVudC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGVsICE9PSBlLnRhcmdldCAmJiAhZWxbMF0uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL3Njb3BlLiRwYXJlbnQuc2V0U2VsZWN0ZWRMaXN0KCk7XHJcbiAgICAgICAgICAgIHNjb3BlLiRldmFsKHNjb3BlLmNsaWNrT3V0c2lkZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcblx0LmRpcmVjdGl2ZSgnaGVhZCcsIFtcclxuXHRcdCckcm9vdFNjb3BlJyxcclxuXHRcdCckc3RhdGUnLFxyXG5cdFx0JyRjb21waWxlJyxcclxuXHRcdCckaW50ZXJwb2xhdGUnLFxyXG5cdFx0ZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgJGNvbXBpbGUsICRpbnRlcnBvbGF0ZSkge1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlID0gZnVuY3Rpb24gZ2V0U3R5bGUodGVtcGxhdGVTdHlsZVVybCkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3R5bGUgPSB7XHJcblx0XHRcdFx0XHRocmVmOiB0ZW1wbGF0ZVN0eWxlVXJsLFxyXG5cdFx0XHRcdFx0cmVsOiAnc3R5bGVzaGVldCdcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRpZiAoc3R5bGUuaHJlZi5tYXRjaCgvXFwubGVzcyQvKSkge1xyXG5cdFx0XHRcdFx0c3R5bGUucmVsID0gJ3N0eWxlc2hlZXQvbGVzcyc7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIGdldFN0eWxlcyhzdGF0ZSkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3RhdGVzID0ge307XHJcblxyXG5cdFx0XHRcdC8vQ2hlY2sgc3RhdGUgZm9yIHN0eWxlc1xyXG5cdFx0XHRcdHdoaWxlIChzdGF0ZS5uYW1lICE9PSAnJykge1xyXG5cdFx0XHRcdFx0dmFyIHBhcmVudCA9ICRzdGF0ZS5nZXQoJ14nLCBzdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0Ly9Jbml0aWF0ZSBvdXIgdmlldyBsaXN0XHJcblx0XHRcdFx0XHRpZiAoIXN0YXRlc1twYXJlbnQubmFtZV0pIHtcclxuXHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXSA9IHt9O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ2hlY2sgdGhlIHRlbXBsYXRlU3R5bGVcclxuXHRcdFx0XHRcdGlmIChzdGF0ZS50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXVsnJ10pIHtcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSA9IGdldFN0eWxlKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB2aWV3c1xyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnZpZXdzKSB7XHJcblx0XHRcdFx0XHRcdF8uZm9yRWFjaChzdGF0ZS52aWV3cywgZnVuY3Rpb24gKHZpZXcsIGtleSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgYSBzdHlsZVxyXG5cdFx0XHRcdFx0XHRcdGlmICghdmlldy50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGFyZSB0YXJnZXRpbmcgc29tZSBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRpZiAoKGtleSA9IGtleS5zcGxpdCgnQCcpKVsxXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBoYXZlIHN0eWxlcyBmb3IgdGhhdCBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGVzW2tleVsxXV0gPSB7fTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBzb21lIHBhcmVudCdzIHZpZXdcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV1ba2V5WzBdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBvdXIgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1ba2V5WzBdXSA9IGdldFN0eWxlKHZpZXcudGVtcGxhdGVTdHlsZVVybCk7XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NvbnRpbnVlIHdpdGggdGhlIHBhcmVudFxyXG5cdFx0XHRcdFx0c3RhdGUgPSBwYXJlbnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL0ZsYXR0ZW4gdGhlIGxpc3RcclxuXHRcdFx0XHR2YXIgZmxhdCA9IFtdO1xyXG5cdFx0XHRcdF8uZm9yRWFjaChzdGF0ZXMsIGZ1bmN0aW9uICh2aWV3cykge1xyXG5cclxuXHRcdFx0XHRcdF8uZm9yRWFjaCh2aWV3cywgZnVuY3Rpb24gKHN0eWxlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIV8uaW5jbHVkZXMoZmxhdCwgc3R5bGUpKSB7XHJcblx0XHRcdFx0XHRcdFx0ZmxhdC5wdXNoKHN0eWxlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly9SZXZlcnNlIGl0IHNvIHdlIGhhdmUgYSBwcm9wZXIgaGllcmFyY2h5XHJcblx0XHRcdFx0ZmxhdC5yZXZlcnNlKCk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBmbGF0O1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdFx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0pIHtcclxuXHJcblx0XHRcdFx0XHRzY29wZS50ZW1wbGF0ZVN0eWxlcyA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdHZhciBodG1sID0gJzxsaW5rIG5nLWF0dHItcmVsPVwie3tzdHlsZS5yZWx9fVwiIG5nLXJlcGVhdD1cInN0eWxlIGluIHRlbXBsYXRlU3R5bGVzXCIgbmctaHJlZj1cInt7c3R5bGUuaHJlZn19XCI+JztcclxuXHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXHtcXHsvZywgJGludGVycG9sYXRlLnN0YXJ0U3ltYm9sKCkpO1xyXG5cdFx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvXFx9XFx9L2csICRpbnRlcnBvbGF0ZS5lbmRTeW1ib2woKSk7XHJcblxyXG5cdFx0XHRcdFx0ZWxlbS5hcHBlbmQoJGNvbXBpbGUoaHRtbCkoc2NvcGUpKTtcclxuXHJcblx0XHRcdFx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpIHtcclxuXHJcblx0XHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gZ2V0U3R5bGVzKHRvU3RhdGUpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0fVxyXG5cdF0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0NhdGVnb3JpZXNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VGFza3MgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nLCBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZFRhc2sgPSBmdW5jdGlvbiAoY2F0ZWdvcnksIHRhc2spIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5ICsgJy90YXNrcycsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICBzdmMuY2hvaWNlcyA9IGxpc3Q7XHJcbiAgICBzdmMucHJpb3JpdHlMaXN0ID0gW107XHJcbiAgICAvL01ha2UgYSBuZXcgY2hvaWNlIGxpc3RcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKHZhciBqID0gaSArIDE7IGogPCBsaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgc3ZjLnByaW9yaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgZmlyc3RDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaSA6IGpdLm5hbWUsXHJcbiAgICAgICAgICBzZWNvbmRDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaiA6IGldLm5hbWUsXHJcbiAgICAgICAgICBjaG9pY2U6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNodWZmbGUoc3ZjLnByaW9yaXR5TGlzdCk7XHJcbiAgICBmb3IgKGkgaW4gc3ZjLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBzdmMucHJpb3JpdHlMaXN0W2ldLmlkID0gaSArIDE7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHJldHVybiBzdmMucHJpb3JpdHlMaXN0O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcclxuICAgIHZhciBtID0gYXJyYXkubGVuZ3RoLCB0LCBpO1xyXG4gICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGXigKZcclxuICAgIHdoaWxlIChtKSB7XHJcbiAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudOKAplxyXG4gICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbS0tKTtcclxuICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAvL2FycmF5W21dLmZpcnN0Q2hvaWNlO1xyXG4gICAgICB0ID0gYXJyYXlbbV07XHJcbiAgICAgIGFycmF5W21dID0gYXJyYXlbaV07XHJcbiAgICAgIGFycmF5W2ldID0gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdFbWFpbFN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuc2VuZCA9IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZW1haWwnLCBlbWFpbCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiRmlsZVN2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFF1aXpGaWxlcyA9IGZ1bmN0aW9uIChxdWl6KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS9xdWl6emVzL1wiICsgcXVpeik7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnR2FtZVN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gICAgc3ZjLmdldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZ2FtZXMvJyArIGdhbWUgKyAnLycgKyB1c2VyICsgJy9oaWdoc2NvcmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLnNldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyLCBzY29yZSkge1xyXG4gICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9nYW1lcy8nICsgZ2FtZSArICcvJyArIHVzZXIgKyAnL2hpZ2hzY29yZScsIHtcclxuICAgICAgICBzY29yZTogc2NvcmVcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnTGFuZ3VhZ2VTdmMnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5sYW5ndWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkVOXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkVuZ2xpc2hcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWdiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIk5MXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIk5lZGVybGFuZHNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLW5sXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkZSXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkZyYW7Dp2Fpc1wiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tZnJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy50ZXh0ID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgc3ZjLnNlbGVjdGVkTGFuZ3VhZ2UgPSBzdmMubGFuZ3VhZ2VzWzBdO1xyXG5cclxuICBzdmMuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcclxuICAgIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICByZXR1cm4gbGFuZ3VhZ2U7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHN2Yy5zZWxlY3RlZExhbmd1YWdlO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZmV0Y2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJyk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQb3N0ID0gZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMvJyArIHBvc3QuX2lkKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJUZW5UaGluZ3NTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9ib3RzL3RlbnRoaW5ncy9xdWV1ZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0cyA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgIHZhciB1cmwgPVxyXG4gICAgICBgL2FwaS90ZW50aGluZ3MvbGlzdHM/YCArXHJcbiAgICAgIChvcHRpb25zLmxpbWl0ID8gYCZsaW1pdD0ke29wdGlvbnMubGltaXR9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMucGFnZSA/IGAmcGFnZT0ke29wdGlvbnMucGFnZX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zb3J0QnkgPyBgJnNvcnRfYnk9JHtvcHRpb25zLnNvcnRCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5vcmRlckJ5ID8gYCZvcmRlcl9ieT0ke29wdGlvbnMub3JkZXJCeX1gIDogXCJcIikgK1xyXG4gICAgICAvLyBgJmNyZWF0b3I9NWFlMTVmMTRiNWY3ODgzZmYwNDk3MzM5YCArXHJcbiAgICAgIChvcHRpb25zLmxhbmd1YWdlICYmIG9wdGlvbnMubGFuZ3VhZ2UubGVuZ3RoID4gMCA/IGAmbGFuZ3VhZ2U9JHtvcHRpb25zLmxhbmd1YWdlLmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLmNhdGVnb3JpZXMgJiYgb3B0aW9ucy5jYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyBgJmNhdGVnb3JpZXM9JHtvcHRpb25zLmNhdGVnb3JpZXMuam9pbihcIixcIil9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMubGFuZ3VhZ2VOb3QgJiYgb3B0aW9ucy5sYW5ndWFnZU5vdC5sZW5ndGggPiAwID8gYCYhbGFuZ3VhZ2U9JHtvcHRpb25zLmxhbmd1YWdlTm90LmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLmNhdGVnb3JpZXNOb3QgJiYgb3B0aW9ucy5jYXRlZ29yaWVzTm90Lmxlbmd0aCA+IDBcclxuICAgICAgICA/IGAmIWNhdGVnb3JpZXM9JHtvcHRpb25zLmNhdGVnb3JpZXNOb3Quam9pbihcIixcIil9YFxyXG4gICAgICAgIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zZWFyY2ggPyBgJnNlYXJjaD0ke29wdGlvbnMuc2VhcmNofWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLm5hbWUgPyBgJm5hbWU9JHtvcHRpb25zLm5hbWV9YCA6IFwiXCIpO1xyXG5cclxuICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2VhcmNoTGlzdHMgPSAobmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3Mvc2VhcmNoL2xpc3QtbmFtZXMvJHtuYW1lfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvY2F0ZWdvcmllc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9sYW5ndWFnZXNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnB1dChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQsIGxpc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGVMaXN0ID0gZnVuY3Rpb24gKHVzZXIsIGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHNcIiwgeyB1c2VyLCBsaXN0IH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5tZXJnZUxpc3RzID0gZnVuY3Rpb24gKGxpc3RzKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL21lcmdlXCIsIHsgbGlzdHM6IGxpc3RzIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5kZWxldGVMaXN0ID0gZnVuY3Rpb24gKGxpc3RJZCkge1xyXG4gICAgcmV0dXJuICRodHRwLmRlbGV0ZShcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdElkKTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucHV0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3ZhbHVlcy9cIiArIHZhbHVlLl9pZCwgdmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3ZhbHVlc1wiLCB2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmRlbGV0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLmRlbGV0ZShcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXMvXCIgKyB2YWx1ZS5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5yZXBvcnRMaXN0ID0gZnVuY3Rpb24gKHVzZXIsIGxpc3QpIHtcclxuICAgICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi9yZXBvcnQvXCIgKyB1c2VyLl9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3RDYXRlZ29yeVN0YXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL3N0YXRzL2NhdGVnb3JpZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3RMYW5ndWFnZVN0YXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL3N0YXRzL2xhbmd1YWdlc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UGxheVN0YXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL3N0YXRzL3BsYXlcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEdhbWVTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9nYW1lc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0Qmx1cmJzID0gZnVuY3Rpb24gKGxpc3QsIHR5cGUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9saXN0cy8ke2xpc3QuX2lkfS9ibHVyYnMvJHt0eXBlfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnRvZ2dsZVBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEdhbWUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2dhbWVzLyR7aWR9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUdhbWVDYXRlZ29yeSA9IGZ1bmN0aW9uIChpZCwgY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9nYW1lcy8ke2lkfS9jYXRlZ29yeS8ke2NhdGVnb3J5fWApO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiVXNlclN2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vyc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VXNlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9hbGxcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnRvZ2dsZUJhbiA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdXNlcnMvYmFuLyR7aWR9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNldFRva2VuID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IHRva2VuO1xyXG4gICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmF1dGhlbnRpY2F0ZSA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzL2F1dGhlbnRpY2F0ZVwiLCB7XHJcbiAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS50b2tlbiA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmxvZ2luID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL2xvZ2luXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICByZXR1cm4gc3ZjLnNldFRva2VuKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIuX2lkLCB7XHJcbiAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uICh1c2VyLCBwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL3ZlcmlmaWNhdGlvblwiLCB7XHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uICh1c2VyLCBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9wYXNzd29yZFwiLCB7XHJcbiAgICAgIG9sZFBhc3N3b3JkOiBvbGRQYXNzd29yZCxcclxuICAgICAgbmV3UGFzc3dvcmQ6IG5ld1Bhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXIsIG5ld1VzZXJuYW1lKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL3VzZXJuYW1lXCIsIHtcclxuICAgICAgICBuZXdVc2VybmFtZTogbmV3VXNlcm5hbWUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiWC1BdXRoXCJdID0gXCJcIjtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlVXNlciA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnNcIiwge1xyXG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUXVpekFuaW1hbHNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICAkc2NvcGUuYW5pbWFscyA9IFtdO1xyXG5cclxuICBGaWxlU3ZjLmdldFF1aXpGaWxlcyhcImFuaW1hbHNcIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5hbmltYWxzID0gXy5zaHVmZmxlKFxyXG4gICAgICByZXNwb25zZS5kYXRhLm1hcCgoYW5pbWFsKSA9PiAoe1xyXG4gICAgICAgIHNvdW5kOiBhbmltYWwsXHJcbiAgICAgICAgbmFtZTogYW5pbWFsLnN1YnN0cmluZygwLCBhbmltYWwuaW5kZXhPZihcIi5cIikpLnJlcGxhY2UoXCJfXCIsIFwiIFwiKS5jYXBpdGFsaXplKCksXHJcbiAgICAgIH0pKSxcclxuICAgICk7XHJcbiAgICBmb3IgKGxldCBhbmltYWwgb2YgJHNjb3BlLmFuaW1hbHMpIHtcclxuICAgICAgYW5pbWFsLmFuc3dlcnMgPSBfLnNodWZmbGUoW2FuaW1hbC5uYW1lLCAuLi5nZXRSYW5kb21BbmltYWxzKGFuaW1hbC5uYW1lKV0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZ3Vlc3MgPSAoYW5pbWFsLCBndWVzcykgPT4ge1xyXG4gICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UmFuZG9tQW5pbWFscyA9IChuYW1lKSA9PlxyXG4gICAgXy5zaHVmZmxlKCRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsKSA9PiBuYW1lICE9PSBhbmltYWwubmFtZSkubWFwKChhbmltYWwpID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgNSk7XHJcblxyXG4gICRzY29wZS5nZXRTY29yZSA9ICgpID0+XHJcbiAgICBgJHskc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAkc2NvcGUuaXNTY29yZVZpc2libGUgPSAoKSA9PiAkc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJRdWl6R29vZ2xlQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRRdWl6RmlsZXMoXCJnb29nbGVcIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlF1aXpMb2dvc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0UXVpekZpbGVzKFwibG9nb3NcIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlF1aXpNb3ZpZXNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldFF1aXpGaWxlcyhcIm1vdmllc1wiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUXVpelNrZWxldG9uc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gICRzY29wZS5hbmltYWxzID0gW107XHJcblxyXG4gIEZpbGVTdmMuZ2V0UXVpekZpbGVzKFwic2tlbGV0b25zXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShcclxuICAgICAgcmVzcG9uc2UuZGF0YS5tYXAoKGFuaW1hbCkgPT4gKHtcclxuICAgICAgICBpbWFnZTogYW5pbWFsLFxyXG4gICAgICAgIG5hbWU6IGFuaW1hbC5zdWJzdHJpbmcoMCwgYW5pbWFsLmluZGV4T2YoXCIuXCIpKS5yZXBsYWNlKFwiX1wiLCBcIiBcIikuY2FwaXRhbGl6ZSgpLFxyXG4gICAgICB9KSksXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgIGFuaW1hbC5hbnN3ZXJzID0gXy5zaHVmZmxlKFthbmltYWwubmFtZSwgLi4uZ2V0UmFuZG9tQW5pbWFscyhhbmltYWwubmFtZSldKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgIGFuaW1hbC5ndWVzcyA9IGd1ZXNzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSAobmFtZSkgPT5cclxuICAgIF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gbmFtZSAhPT0gYW5pbWFsLm5hbWUpLm1hcCgoYW5pbWFsKSA9PiBhbmltYWwubmFtZSkpLnNsaWNlKDAsIDEwKTtcclxuXHJcbiAgJHNjb3BlLmdldFNjb3JlID0gKCkgPT5cclxuICAgIGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsKSA9PiBhbmltYWwubmFtZSA9PT0gYW5pbWFsLmd1ZXNzKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWA7XHJcblxyXG4gICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsKSA9PiBhbmltYWwuZ3Vlc3MpLmxlbmd0aCA9PT0gJHNjb3BlLmFuaW1hbHMubGVuZ3RoO1xyXG59KTtcclxuIl19
