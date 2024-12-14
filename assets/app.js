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
    TenThingsSvc.deleteListValue($scope.selectedList, item).then(() => {
      $scope.selectedList.values = $scope.selectedList.values.filter(value => value._id !== item._id), $scope.toast(`"${item.value}" removed`);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiY29udHJvbGxlcnMvYXBwLmN0cmwuanMiLCJjb250cm9sbGVycy9hc3Rlcm9pZHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2J1YmJsZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NoYXJhZGVzLmN0cmwuanMiLCJjb250cm9sbGVycy9jb250YWN0LmN0cmwuanMiLCJjb250cm9sbGVycy9leHBlcmllbmNlLmN0cmwuanMiLCJjb250cm9sbGVycy9ob2JiaWVzLmN0cmwuanMiLCJjb250cm9sbGVycy9sZW1taW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbGlzdHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xvZ2luLmN0cmwuanMiLCJjb250cm9sbGVycy9wb3N0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJvZmlsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvc2tpbGxzLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3MuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2FkbWluLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NnYW1lLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NzdGF0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvd29ya291dC5jdHJsLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJzZXJ2aWNlcy9jYXRlZ29yaWVzLnN2Yy5qcyIsInNlcnZpY2VzL2VtYWlsLnN2Yy5qcyIsInNlcnZpY2VzL2ZpbGUuc3ZjLmpzIiwic2VydmljZXMvZ2FtZS5zdmMuanMiLCJzZXJ2aWNlcy9sYW5ndWFnZS5zdmMuanMiLCJzZXJ2aWNlcy9wb3N0cy5zdmMuanMiLCJzZXJ2aWNlcy90ZW50aGluZ3Muc3ZjLmpzIiwic2VydmljZXMvdXNlci5zdmMuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2FuaW1hbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvZ29vZ2xlLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2xvZ29zLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL21vdmllcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9za2VsZXRvbnMuY3RybC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRvbWFpbnMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0cmluZyIsInByb3RvdHlwZSIsInZhbHVlIiwicmVkdWNlIiwicmVzdWx0IiwibGV0dGVyIiwicmVwbGFjZSIsInRoaXMiLCJTUEVDSUFMX0NIQVJBQ1RFUlMiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZURpYWNyaXRpY3MiLCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyIsImV4dHJhIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInJlcGxhY2VBbGwiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidW5kZWZpbmVkIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsIiRzY29wZSIsIkxhbmd1YWdlU3ZjIiwiVXNlclN2YyIsIiRtZFRvYXN0IiwidG9hc3QiLCJtZXNzYWdlIiwic2hvdyIsInNpbXBsZSIsInRleHRDb250ZW50IiwicG9zaXRpb24iLCJoaWRlRGVsYXkiLCIkIiwibG9hZCIsImZhZGVPdXQiLCJmYWRlSW4iLCJvbiIsImNsb3Nlc3QiLCJ0b2dnbGVDbGFzcyIsImNoZWNrZWQiLCJkb2N1bWVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRoZW1lQ291bnRlciIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImZsaXBUaGVtZSIsImhpZGUiLCJzZXRUaW1lb3V0IiwiZ2V0SlNPTiIsInNraWxscyIsImZpbHRlciIsInNraWxsIiwiaG9iYmllcyIsImpvYnMiLCJqb2IiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiY2hhcmFkZXMiLCJnZXRUaW1lU3BhbiIsImxhbmd1YWdlcyIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInNlbGVjdExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImhvdmVyZGl2IiwiZGl2aWQiLCJsZWZ0IiwiY2xpZW50WCIsInRvcCIsImNsaWVudFkiLCJnZXRFbGVtZW50QnlJZCIsImNzcyIsInRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsInVzZXIiLCJsb2dpbiIsInRoZW4iLCJyZXNwb25zZSIsIiRvbiIsIl8iLCJsb2dnZWRJbiIsIl9pZCIsImN1cnJlbnRVc2VyIiwiYmlydGhEYXRlIiwibG9hZGluZyIsImxvZ291dCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJjbGVhciIsImNhdGNoIiwiZXJyb3IiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsIiRsb2NhdGlvbiIsIkdhbWVTdmMiLCJhbm5vdW5jZSIsImNhbnZhcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGF0aCIsImFsZXJ0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZvbnQiLCJmaWxsU3R5bGUiLCJ0ZXh0QWxpZ24iLCJzaG90cyIsImFzdGVyb2lkcyIsInBvd2VydXBzIiwiZXhwbG9zaW9ucyIsIm1hcCIsInNwYWNlcGljcyIsInNwYWNlIiwicG93ZXJ1cFR5cGVzIiwibmFtZSIsImFubm91bmNlbWVudCIsImN5Y2xlIiwicm93cyIsImNvbHVtbnMiLCJzaXplIiwiaW1nIiwiSW1hZ2UiLCJhY3RpdmF0ZSIsInNwYWNlc2hpcCIsIm1heFNwZWVkIiwiY29vbGRvd24iLCJjb29sZG93blRpbWUiLCJyYW5nZSIsInNoaWVsZCIsImV4cGxvZGUiLCJzcGF3bkFzdGVyb2lkcyIsInBvd2VydXAiLCJhcnJheSIsInNyYyIsImV4cGxvc2lvbkltYWdlIiwiZXZhbHVhdGVLZXlzIiwicGxheWluZyIsInNob290Iiwicm90YXRpb24iLCJzcGVlZCIsInNjb3JlIiwiJGFwcGx5IiwiU3BhY2VzaGlwIiwiYXV0b1NwYXduIiwid2lkdGgiLCJoZWlnaHQiLCJjYW5ub24iLCJ4IiwieSIsImFuZ2xlIiwiaWQiLCJyb3VuZCIsIlNob3QiLCJtb3ZlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImZpbGwiLCJhc3Rlcm9pZCIsImhpdCIsImdhbWVPdmVyIiwiY29zIiwic2luIiwibGlmZXNwYW4iLCJBc3Rlcm9pZCIsImdldEVudHJ5UG9zaXRpb24iLCJyb3RhdGlvblNwZWVkIiwiRXhwbG9zaW9uIiwic2hvdCIsInBvaW50cyIsInNwYXduUG93ZXJ1cCIsIm9iamVjdCIsIlBvd2VydXAiLCJkZWxheSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJjb2x1bW4iLCJyb3ciLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiZ3JpZFgiLCJncmlkWSIsIm9iamVjdDEiLCJvYmplY3QyIiwia2V5cyIsImFtb3VudCIsImhpZ2hzY29yZSIsInNldEhpZ2hzY29yZSIsInJlc2l6ZUNhbnZhcyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlDb2RlIiwid2hpY2giLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3IiwiY2xlYXJSZWN0IiwiZ3JhZGllbnQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsInRhbGx5IiwiZmlsbFRleHQiLCJtZWFzdXJlVGV4dCIsImJhY2tncm91bmRJbWFnZSIsImJ1YmJsZXMiLCJjb2xvcnMiLCJCdWJibGUiLCJyYWRpdXMiLCJleHBhbmRpbmciLCJjaXJjdW1mZXJlbmNlIiwibWF4UmFkaXVzIiwidngiLCJ2eSIsImZpbHRlckJ1YmJsZXMiLCJidWJibGUiLCJzZWxlY3RXb3JkIiwiY2F0ZWdvcnkiLCJ3b3JkIiwiRW1haWxTdmMiLCJvcHRpb25zIiwidGV4dCIsImNvbnRhY3QiLCJlbWFpbCIsInBob25lIiwiYWJvdXQiLCJzZW5kaW5nIiwic2VudCIsInN0YXR1cyIsImVyciIsImdldFNraWxsIiwic2tpbGxDb2RlIiwiY29kZSIsIiR3aW5kb3ciLCJob2JieVNlbGVjdG9yVmlzaWJsZSIsInNlbGVjdGVkSG9iYnkiLCJzZWxlY3RIb2JieSIsImhvYmJ5Iiwic2hvd0hvYmJ5IiwiaW5kZXgiLCJpbWFnZXMiLCJMRUZUIiwiUklHSFQiLCJsZW1taW5nc0ltYWdlIiwiZGVjb3JJbWFnZSIsImxlbW1pbmdzIiwic3RhcnRlZCIsImFjdGlvbnMiLCJ3YWxrIiwic3RhcnQiLCJlbmQiLCJyZXZlcnNlIiwiaHVoIiwiZmFsbCIsImZseSIsInN0b3AiLCJjbGltYiIsImJ1aWxkIiwicHVuY2giLCJkaWciLCJMZW1taW5nIiwiaW5pdCIsImFjdCIsImFjdGlvbiIsImFuaW1hdGlvbiIsInNjYWxlIiwiaGF0Y2giLCJvcGVuIiwicmVjdCIsIkNhdGVnb3JpZXNTdmMiLCJzaG93Q2F0ZWdvcnkiLCJnZXRDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsInRhc2tzIiwiaiIsInRhc2siLCJzZWxlY3RDYXRlZ29yeSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWxlY3RlZFRhc2tzIiwic2VsZWN0YWJsZVRhc2tzIiwiZW50ZXJlZENhdGVnb3J5IiwibmV3Q2F0ZWdvcnkiLCJmb3VuZCIsImFkZENhdGVnb3J5IiwibmV3VGFzayIsInNlbGVjdFRhc2siLCJhZGRUYXNrIiwiZW50ZXJlZFRhc2siLCJyZW1vdmVUYXNrIiwidW5zZWxlY3RUYXNrIiwidGFza0xpc3QiLCJzcGxpY2UiLCJpbmRleE9mIiwic3RhcnRQcmlvcml0aXppbmciLCJzZXRQcmlvcml0eUxpc3QiLCJnZXRRdWVzdGlvbnMiLCJjb3VudGVyIiwidWkiLCJmaXJlYmFzZXVpIiwiQXV0aFVJIiwic3RhcnRVSSIsImNhbGxiYWNrcyIsInNpZ25JblN1Y2Nlc3MiLCJjcmVkZW50aWFsIiwicmVkaXJlY3RVcmwiLCJnZXRJZFRva2VuIiwiaWRUb2tlbiIsImF1dGhlbnRpY2F0ZSIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJlbWFpbFZlcmlmaWVkIiwiJGVtaXQiLCJtb2RhbCIsInNpZ25JbkZhaWx1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNyZWQiLCJzaWduSW5XaXRoQ3JlZGVudGlhbCIsInVpU2hvd24iLCJzdHlsZSIsImRpc3BsYXkiLCJzaWduSW5TdWNjZXNzVXJsIiwic2lnbkluT3B0aW9ucyIsIkdvb2dsZUF1dGhQcm92aWRlciIsIlBST1ZJREVSX0lEIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJzaWduSW5GbG93IiwiZXZlbnQiLCJyZXNldCIsIiRmaWx0ZXIiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsImJvZHkiLCJwb3N0IiwiZmV0Y2giLCJwb3N0cyIsImdldFBvc3QiLCJ1bnNoaWZ0IiwiY291bnRyaWVzIiwiZmxhZyIsInRpZGJpdCIsImRhdGVPcHRpb25zIiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJpbml0RGF0ZSIsImRhdGVwaWNrZXJNb2RlIiwidXNlcm5hbWVUb2dnbGUiLCJwYXNzd29yZFRvZ2dsZSIsInRvZ2dsZVVzZXJuYW1lIiwibmV3VXNlcm5hbWUiLCJ1c2VybmFtZSIsInRvZ2dsZVBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJjaGVja1Bhc3N3b3JkIiwicGFzc3dvcmQiLCJvcmlnaW5hbEJnIiwiYW5pbWF0ZSIsImJhY2tncm91bmRDb2xvciIsImNoYW5nZVBhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJjaGFuZ2VVc2VybmFtZSIsInVwZGF0ZVVzZXIiLCJmbGFncyIsInVzZXJGbGFncyIsImxvYWRDb3VudHJpZXMiLCIkcXVlcnkiLCJjb3VudHJ5IiwiJHdhdGNoIiwiaW5jbHVkZXMiLCJzZWxlY3RlZFNraWxsIiwic2tpbGxzVmlzaWJsZSIsInByb2plY3RzIiwibGFiZWxzIiwiZW1wbG95ZXIiLCJjb25jYXQiLCJmaWx0ZXJlZFByb2plY3RzIiwicHJvamVjdCIsInNldFNlbGVjdGVkU2tpbGwiLCJjaGFydE9wdGlvbnMiLCJjdXRvdXRQZXJjZW50YWdlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRvb2x0aXBzIiwiY2hhcnRTdHlsZSIsImltYWdlIiwiJHNjZSIsIlRlblRoaW5nc1N2YyIsInBhZ2UiLCJsaXN0cyIsInNlYXJjaCIsInNlYXJjaEZpZWxkIiwibmV3SXRlbSIsImxhbmd1YWdlRmlsdGVyIiwiY2F0ZWdvcnlGaWx0ZXIiLCJzZWxlY3RlZExpc3QiLCJoaWdobGlnaHRlZExpc3RzIiwiaGlnaGxpZ2h0ZWRMaXN0SWRzIiwibGlzdElkc1RvRGVsZXRlIiwiY29uZmlybWVkIiwiZXhoYXVzdGVkIiwib2JqZWN0Q2F0ZWdvcmllcyIsImJsdXJiVHlwZXMiLCJhcGkiLCJhZG1pbk9ubHkiLCJoYXZlQ29tbW9uSXRlbXMiLCJhcnIxIiwiYXJyMiIsInNvbWUiLCJrZXlEb3duIiwiaXMiLCJjcmVhdGVWYWx1ZSIsInRyaWdnZXIiLCJhZGRMaXN0IiwiY3JlYXRvciIsInZhbHVlcyIsImFuc3dlcnMiLCJpc0R5bmFtaWMiLCJzZXRTZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZExpc3QiLCJsaXN0IiwiZ2V0TGlzdCIsInJlYWRPbmx5IiwiYWRtaW4iLCJnZXRGaWx0ZXJDb3VudCIsInNlYXJjaExpc3RzIiwiYXN5bmMiLCJ2aWV3VmFsdWUiLCJoaWdobGlnaHRlZFNlYXJjaFRleHQiLCJyZWdleCIsInZhbHVlT3JkZXIiLCJmaWVsZCIsIm9yZGVyIiwib3JkZXJCeSIsImdldExpc3RzIiwiZ2V0TW9yZUxpc3RzIiwic2V0TGFuZ3VhZ2VGaWx0ZXIiLCJzZXRDYXRlZ29yeUZpbHRlciIsInRvZ2dsZUNhdGVnb3J5RmlsdGVyIiwiYWxsQ2F0ZWdvcmllcyIsImdldENhdGVnb3J5TGFiZWwiLCJzdWJjYXRlZ29yaWVzIiwic3ViY2F0ZWdvcnkiLCJzdGFydHNXaXRoIiwibGFiZWwiLCJqb2luIiwic29ydEJ5IiwibGltaXQiLCJsYW5ndWFnZU5vdCIsImNhdGVnb3JpZXNOb3QiLCJjb3VudCIsIm5leHRQYWdlIiwiZ2V0TGlzdE5hbWUiLCJsaXN0SWQiLCJ1cGRhdGVWYWx1ZSIsInVwZGF0ZWRJdGVtUmVzcG9uc2UiLCJ1cGRhdGVMaXN0VmFsdWUiLCJibHVyYlR5cGUiLCJkZWxldGVWYWx1ZSIsImhhc0R1cGxpY2F0ZSIsImNyZWF0ZWRJdGVtUmVzcG9uc2UiLCJjcmVhdGVMaXN0VmFsdWUiLCJ1cHNlcnRMaXN0IiwiYmx1cmIiLCJkZWxldGVMaXN0VmFsdWUiLCJ1cGRhdGVMaXN0IiwidXBkYXRlcyIsInNhdmluZyIsImxpc3RJbmRleCIsImZpbmRJbmRleCIsImNoYW5nZXMiLCJjcmVhdGVMaXN0IiwiYXNzaWduIiwiZGVsZXRlTGlzdCIsImRlbGV0ZUxpc3RzIiwiY29uZmlybU1lcmdlTGlzdHMiLCJtZXJnZUxpc3RzIiwiY29uZmlybURlbGV0ZUxpc3RzIiwidG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0cyIsInRvZ2dsZUhpZ2hsaWdodGVkTGlzdCIsImhpZ2hsaWdodGVkTGlzdElkIiwic2V0RGlmZmljdWx0eSIsImRpZmZpY3VsdHkiLCJzZXRGcmVxdWVuY3kiLCJmcmVxdWVuY3kiLCJnZXRVcGRhdGVkQ2F0ZWdvcmllcyIsImxpc3RDYXRlZ29yeSIsInNwbGl0Iiwic2V0Q2F0ZWdvcnkiLCJ1cGRhdGVkQ2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJsaXN0c1RvVXBkYXRlIiwiZXZlcnkiLCJhbGwiLCJsaXN0VG9VcGRhdGUiLCJ1cGRhdGVkTGlzdCIsImNhdGVnb3J5U3RhdHVzIiwiYW5zd2VyIiwicmVtb3ZlQWxsQnV0TGV0dGVycyIsImdldFNlbGVjdGVkTGlzdHNUaXRsZSIsImdldEJsdXJicyIsInR5cGUiLCJnZXR0aW5nQmx1cmJzIiwiZ2V0RW1iZWRVcmwiLCJ2aWRlb0lkIiwibWF0Y2giLCJ0cmltIiwidHJ1c3RBc1Jlc291cmNlVXJsIiwiZ2V0TGFuZ3VhZ2VzIiwibGFuZ3VhZ2VTdGF0cyIsImdldExpc3RMYW5ndWFnZVN0YXRzIiwiY2F0ZWdvcnlTdGF0cyIsImdldExpc3RDYXRlZ29yeVN0YXRzIiwiZ2V0VXNlcnMiLCJnZXRRdWV1ZSIsInF1ZXVlIiwiZ2V0UGF1c2UiLCJwYXVzZWQiLCJ1c2VycyIsInRvZ2dsZUJhbiIsInRvZ2dsZVBhdXNlIiwiJHN0YXRlUGFyYW1zIiwiZGlzYWJsZWRDYXRlZ29yaWVzIiwidXBkYXRlR2FtZUNhdGVnb3J5IiwiZ2FtZSIsImMiLCJnZXRHYW1lIiwiZGF0YXNldHMiLCJsaW5lQ2hhcnRPcHRpb25zIiwicmVzcG9uc2l2ZSIsInBsdWdpbnMiLCJsZWdlbmQiLCJ0aXRsZSIsImdldFBsYXlTdGF0cyIsInllYXJzIiwidW5pcSIsIm1vbnRocyIsInRpbWVzIiwicGxheVN0YXRzIiwic2VyaWVzIiwibW9udGgiLCJ1bmlxdWVQbGF5ZXJzIiwiZ2V0R2FtZVN0YXRzIiwiZ2FtZVN0YXRzIiwic29ydGVkRGF0YSIsInRpbWVSZW1haW5pbmciLCJ0aW1lRXhlcmNpc2luZyIsInRpbWVSZXN0aW5nIiwicmVzdCIsImV4ZXJjaXNpbmciLCJzb3VuZHMiLCJBdWRpbyIsIm9mZiIsInN3aXRjaCIsImV4ZXJjaXNlcyIsInByb2dyZXNzIiwid29ya291dCIsImV4Y2VyY2lzZVRpbWUiLCJjbGVhckludGVydmFsIiwidGltZXIiLCJleGVyY2lzZSIsInNldEludGVydmFsIiwiY3VycmVudEV4ZXJjaXNlIiwicGxheSIsImRpcmVjdGl2ZSIsIiRkb2N1bWVudCIsInJlc3RyaWN0Iiwic2NvcGUiLCJjbGlja091dHNpZGUiLCJsaW5rIiwiZWwiLCJhdHRyIiwidGFyZ2V0IiwiY29udGFpbnMiLCIkZXZhbCIsIiRzdGF0ZSIsIiRjb21waWxlIiwiJGludGVycG9sYXRlIiwiZ2V0U3R5bGUiLCJ0ZW1wbGF0ZVN0eWxlVXJsIiwiaHJlZiIsInJlbCIsImVsZW0iLCJ0ZW1wbGF0ZVN0eWxlcyIsImh0bWwiLCJzdGFydFN5bWJvbCIsImVuZFN5bWJvbCIsImFwcGVuZCIsInRvU3RhdGUiLCJ0b1BhcmFtcyIsImZyb21TdGF0ZSIsImZyb21QYXJhbXMiLCJzdGF0ZXMiLCJwYXJlbnQiLCJnZXQiLCJ2aWV3cyIsInZpZXciLCJmbGF0IiwiZ2V0U3R5bGVzIiwiJGh0dHAiLCJzdmMiLCJnZXRUYXNrcyIsImNob2ljZXMiLCJwcmlvcml0eUxpc3QiLCJmaXJzdENob2ljZSIsInNlY29uZENob2ljZSIsImNob2ljZSIsInQiLCJtIiwic2h1ZmZsZSIsImdldFByaW9yaXR5TGlzdCIsImdldFF1aXpGaWxlcyIsInF1aXoiLCJnZXRIaWdoc2NvcmUiLCJwdXQiLCJkZWxldGUiLCJyZXBvcnRMaXN0IiwiZ2V0VXNlciIsInNldFRva2VuIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJjcmVhdGVVc2VyIiwiRmlsZVN2YyIsImFuaW1hbHMiLCJhbmltYWwiLCJzb3VuZCIsInN1YnN0cmluZyIsImNhcGl0YWxpemUiLCJnZXRSYW5kb21BbmltYWxzIiwiZ3Vlc3MiLCJnZXRTY29yZSIsImlzU2NvcmVWaXNpYmxlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFBQSwyQkFBQUEsR0FBQSxDQUNBO0lBQ0FDLElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBO0VBR0FDLE9BQUFBLEdBQUEsQ0FDQSxNQUFBLEVBQ0EsTUFBQSxFQUNBLE1BQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLENBQUE7QUFHQUMsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxrQkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQVIsMkJBQUFBLENBQUFTLE1BQUFBLENBQUEsQ0FBQUMsTUFBQUEsRUFBQUMsTUFBQUEsS0FDQUQsTUFBQUEsQ0FBQUUsT0FBQUEsQ0FBQUQsTUFBQUEsQ0FBQVQsT0FBQUEsRUFBQVMsTUFBQUEsQ0FBQVYsSUFBQUEsQ0FBQUEsRUFDQVksSUFBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBO0FBR0EsTUFBQUMsa0JBQUFBLEdBQUEscUNBQUE7QUFFQVYsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSx5QkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxJQUFBRyxNQUFBQSxDQUFBLElBQUFELGtCQUFBQSxHQUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FWLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEscUJBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFHLFdBQUFBLEVBQUFBLENBQUFDLGdCQUFBQSxFQUFBQSxDQUFBQyx1QkFBQUEsRUFDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FkLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsU0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQVcsS0FBQUEsRUFBQUE7SUFDQSxPQUFBTixJQUFBQSxDQUFBRCxPQUFBQSxDQUFBLElBQUFHLE1BQUFBLENBQUEsS0FBQUQsa0JBQUFBLEdBQUFLLEtBQUFBLEdBQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsR0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWYsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxZQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBTyxNQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBQyxXQUFBQSxFQUFBQSxHQUFBUixJQUFBQSxDQUFBUyxLQUFBQSxDQUFBLENBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FsQixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFlBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFELE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQSxDQUFBQSxPQUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBUixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGNBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFVLFVBQUFBLENBQUEsR0FBQSxFQUFBLE9BQUEsQ0FBQSxDQUFBWCxPQUFBQSxDQUFBLEdBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQUEsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLENBQUFXLFVBQUFBLENBQUEsR0FBQSxFQUFBLE9BQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxD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QUFBLENBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxVQUFBQyxjQUFBQSxFQUFBQyxrQkFBQUEsRUFBQUMsbUJBQUFBLEVBQUFDLGlCQUFBQSxFQUFBQTtFQUNBRixrQkFBQUEsQ0FBQUcsU0FBQUEsQ0FBQSxPQUFBLENBQUEsRUFDQUYsbUJBQUFBLENBQUFILE1BQUFBLENBQUFNLFVBQUFBLENBQUFBLENBQUEsQ0FBQSxDQUFBLEVBRUFMLGNBQUFBLENBQ0FNLEtBQUFBLENBQUEsTUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsT0FBQTtJQUNBQyxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsUUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBQyxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBQyxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsWUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsYUFBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxRQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsWUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFdBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxVQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxXQUFBO0lBQ0FFLFVBQUFBLEVBQUEsY0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsTUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsT0FBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFdBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxpQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxvQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsZ0JBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsbUJBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGlCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG9CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxhQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFlBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxjQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsaUJBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGdCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsbUJBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsVUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsV0FBQTtJQUNBRSxVQUFBQSxFQUFBLGNBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxFQUdBTCxpQkFBQUEsQ0FBQU8sU0FBQUEsQ0FBQTtJQUNBQyxPQUFBQSxFQUFBQSxDQUFBLENBQUE7SUFDQUMsV0FBQUEsRUFBQUEsQ0FBQTtFQUFBLENBQUEsQ0FFQTtBQUFBLENBQUEsQ0FBQSxFQ3BJQWYsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQWUsT0FBQUEsQ0FBQSxjQUFBLEVBQUEsVUFBQUMsVUFBQUEsRUFBQUMsUUFBQUEsRUFBQUE7RUFTQSxJQUFBQyxVQUFBQTtJQUNBQyxPQUFBQSxHQUFBLFNBQUFBLENBQUEsRUFBQTtNQUFBLENBQ0FELFVBQUFBLEdBQUEsSUFBQUUsU0FBQUEsQ0FUQSxRQUFBLEtBQUFDLE1BQUFBLENBQUFDLFFBQUFBLENBQUFDLFFBQUFBLEdBQ0EsUUFBQSxHQUFBRixNQUFBQSxDQUFBQyxRQUFBQSxDQUFBRSxJQUFBQSxHQUVBLE9BQUEsR0FBQUgsTUFBQUEsQ0FBQUMsUUFBQUEsQ0FBQUUsSUFBQUEsQ0FBQUEsRUFRQUMsTUFBQUEsR0FBQSxZQUFBO1FBQ0FDLE9BQUFBLENBQUFDLEdBQUFBLENBQUEscUJBQUEsQ0FDQTtNQUFBLENBQUEsRUFFQVQsVUFBQUEsQ0FBQVUsT0FBQUEsR0FBQSxVQUFBQyxDQUFBQSxFQUFBQTtRQUNBSCxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBLG1DQUFBLENBQUEsRUFDQVYsUUFBQUEsQ0FBQUUsT0FBQUEsRUFBQSxHQUFBLENBQ0E7TUFBQSxDQUFBLEVBRUFELFVBQUFBLENBQUFZLE9BQUFBLEdBQUEsVUFBQUQsQ0FBQUEsRUFBQUE7UUFDQUgsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQSxTQUFBLEdBQUFFLENBQUFBLEdBQUEsWUFBQSxHQUFBWCxVQUFBQSxDQUFBYSxVQUFBQSxDQUNBO01BQUEsQ0FBQSxFQUVBYixVQUFBQSxDQUFBYyxTQUFBQSxHQUFBLFVBQUFILENBQUFBLEVBQUFBO1FBQ0EsSUFBQUksT0FBQUEsR0FBQUMsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQU4sQ0FBQUEsQ0FBQU8sSUFBQUEsQ0FBQUE7UUFDQXBCLFVBQUFBLENBQUFxQixVQUFBQSxDQUFBLEtBQUEsR0FBQUosT0FBQUEsQ0FBQUssS0FBQUEsRUFBQUwsT0FBQUEsQ0FBQUcsSUFBQUEsQ0FDQTtNQUFBLENBQ0E7SUFBQSxDQUFBO0VBRUF0RSxJQUFBQSxDQUFBeUUsSUFBQUEsR0FBQSxVQUFBRCxLQUFBQSxFQUFBRixJQUFBQSxFQUFBQTtJQUNBLElBQUFJLElBQUFBLEdBQUFOLElBQUFBLENBQUFPLFNBQUFBLENBQUE7TUFBQUgsS0FBQUE7TUFBQUY7SUFBQUEsQ0FBQUEsQ0FBQUE7SUFDQWxCLFVBQUFBLENBQUFxQixJQUFBQSxDQUFBQyxJQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBMUUsSUFBQUEsQ0FBQXFELE9BQUFBLEdBQUFBLE9BRUE7QUFBQSxDQUFBLENBQUEsQ0FBQXVCLEdBQUFBLENBQUEsVUFBQUMsWUFBQUEsRUFBQUE7RUFDQUEsWUFBQUEsQ0FBQXhCLE9BQUFBLEVBQ0E7QUFBQSxDQUFBLENBQUEsRUMxQ0FwQixPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBVyxVQUFBQSxDQUFBLFNBQUEsRUFBQSxVQUFBaUMsTUFBQUEsRUFBQUMsV0FBQUEsRUFBQUMsT0FBQUEsRUFBQUMsUUFBQUEsRUFBQUE7RUFDQXJCLE9BQUFBLENBQUFDLEdBQUFBLENBQ0Esc0JBQUEsRUFDQSxtTEFBQSxDQUFBLEVBRUFELE9BQUFBLENBQUFDLEdBQUFBLENBQ0EseVNBQUEsQ0FBQSxFQUVBRCxPQUFBQSxDQUFBQyxHQUFBQSxDQUNBLGdJQUFBLENBQUEsRUFHQWlCLE1BQUFBLENBQUFJLEtBQUFBLEdBQUFDLE9BQUFBLElBQUFBO0lBQ0FGLFFBQUFBLENBQUFHLElBQUFBLENBQUFILFFBQUFBLENBQUFJLE1BQUFBLEVBQUFBLENBQUFDLFdBQUFBLENBQUFILE9BQUFBLENBQUFBLENBQUFJLFFBQUFBLENBQUEsY0FBQSxDQUFBLENBQUFDLFNBQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7RUFBQSxDQUFBLEVBVUFDLENBQUFBLENBQUFsQyxNQUFBQSxDQUFBQSxDQUFBbUMsSUFBQUEsQ0FBQSxZQUFBO0lBQ0FELENBQUFBLENBQUEsVUFBQSxDQUFBLENBQUFFLE9BQUFBLENBQUEsTUFBQSxDQUFBLEVBQ0FGLENBQUFBLENBQUEsVUFBQSxDQUFBLENBQUFHLE1BQUFBLENBQUEsTUFBQSxDQUNBO0VBQUEsQ0FBQSxDQUFBLEVBRUFILENBQUFBLENBQUEsZ0JBQUEsQ0FBQSxDQUFBSSxFQUFBQSxDQUFBLFFBQUEsRUFBQSx3QkFBQSxFQUFBLFlBQUE7SUFDQUosQ0FBQUEsQ0FBQXpGLElBQUFBLENBQUFBLENBQUE4RixPQUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBQyxXQUFBQSxDQUFBLFFBQUEsRUFBQS9GLElBQUFBLENBQUFnRyxPQUFBQSxDQUNBO0VBQUEsQ0FBQSxDQUFBLEVBRUFQLENBQUFBLENBQUFRLFFBQUFBLENBQUFBLENBQUFKLEVBQUFBLENBQUEsT0FBQSxFQUFBLGNBQUEsRUFBQSxVQUFBOUIsQ0FBQUEsRUFBQUE7SUFDQUEsQ0FBQUEsQ0FBQW1DLGVBQUFBLEVBQ0E7RUFBQSxDQUFBLENBQUEsRUFFQXBCLE1BQUFBLENBQUFxQixZQUFBQSxHQUFBLENBQUEsRUFDQXJCLE1BQUFBLENBQUFzQixLQUFBQSxHQUFBLElBQUFDLElBQUFBLElBQ0F2QixNQUFBQSxDQUFBd0IsSUFBQUEsR0FBQXhCLE1BQUFBLENBQUFzQixLQUFBQSxDQUFBRyxXQUFBQSxFQUFBQSxFQUNBekIsTUFBQUEsQ0FBQTBCLE1BQUFBLEdBQUFDLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxDQUFBQSxFQUVBMUIsTUFBQUEsQ0FBQTZCLFNBQUFBLEdBQUEsTUFBQTtJQUNBbEIsQ0FBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQUwsSUFBQUEsRUFBQUEsRUFDQUssQ0FBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQW1CLElBQUFBLEVBQUFBLEVBQ0FDLFVBQUFBLENBQUEsTUFBQTtNQUNBcEIsQ0FBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQUUsT0FBQUEsQ0FBQSxNQUFBLENBQUEsRUFDQUYsQ0FBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQUcsTUFBQUEsQ0FBQSxNQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0EsR0FBQSxDQUFBLEVBQ0FkLE1BQUFBLENBQUFxQixZQUFBQSxHQUFBckIsTUFBQUEsQ0FBQXFCLFlBQUFBLEdBQUEsQ0FBQSxHQUFBckIsTUFBQUEsQ0FBQXFCLFlBQUFBLEdBQUEsQ0FBQSxHQUFBckIsTUFBQUEsQ0FBQXFCLFlBQUFBLEdBQUEsQ0FBQTtFQUFBLENBQUEsRUFHQVYsQ0FBQUEsQ0FBQXFCLE9BQUFBLENBQUEsY0FBQSxFQUFBLFVBQUF4QyxJQUFBQSxFQUFBQTtJQUNBUSxNQUFBQSxDQUFBaUMsTUFBQUEsR0FBQXpDLElBQUFBLENBQUEwQyxNQUFBQSxDQUFBLFVBQUFDLEtBQUFBLEVBQUFBO01BQ0EsT0FBQUEsS0FBQUEsQ0FBQWxFLE9BQ0E7SUFBQSxDQUFBLENBQ0E7RUFBQSxDQUFBLENBQUEsRUFFQTBDLENBQUFBLENBQUFxQixPQUFBQSxDQUFBLGVBQUEsRUFBQSxVQUFBeEMsSUFBQUEsRUFBQUE7SUFDQVEsTUFBQUEsQ0FBQW9DLE9BQUFBLEdBQUE1QyxJQUNBO0VBQUEsQ0FBQSxDQUFBLEVBRUFtQixDQUFBQSxDQUFBcUIsT0FBQUEsQ0FBQSxrQkFBQSxFQUFBLFVBQUF4QyxJQUFBQSxFQUFBQTtJQUNBUSxNQUFBQSxDQUFBcUMsSUFBQUEsR0FBQTdDLElBQUFBLEVBQ0FRLE1BQUFBLENBQUFxQyxJQUFBQSxDQUFBcEYsT0FBQUEsQ0FBQXFGLEdBQUFBLElBQUFBO01BQ0FBLEdBQUFBLENBQUFDLFNBQUFBLEdBQUEsSUFBQWhCLElBQUFBLENBQUFlLEdBQUFBLENBQUFDLFNBQUFBLENBQUFBLEVBQ0FELEdBQUFBLENBQUFFLE9BQUFBLEtBQUFGLEdBQUFBLENBQUFFLE9BQUFBLEdBQUEsSUFBQWpCLElBQUFBLENBQUFlLEdBQUFBLENBQUFFLE9BQUFBLENBQUFBLENBQUE7SUFBQSxDQUFBLENBRUE7RUFBQSxDQUFBLENBQUEsRUFFQTdCLENBQUFBLENBQUFxQixPQUFBQSxDQUFBLGdCQUFBLEVBQUEsVUFBQXhDLElBQUFBLEVBQUFBO0lBQ0FRLE1BQUFBLENBQUF5QyxRQUFBQSxHQUFBakQsSUFDQTtFQUFBLENBQUEsQ0FBQSxFQUVBUSxNQUFBQSxDQUFBMEMsV0FBQUEsR0FBQUosR0FBQUEsSUFDQUEsR0FBQUEsQ0FBQUMsU0FBQUEsQ0FBQWQsV0FBQUEsRUFBQUEsSUFBQWEsR0FBQUEsQ0FBQUUsT0FBQUEsR0FBQSxLQUFBLEdBQUFGLEdBQUFBLENBQUFFLE9BQUFBLENBQUFmLFdBQUFBLEVBQUFBLEdBQUEsVUFBQSxDQUFBLEVBR0F6QixNQUFBQSxDQUFBMkMsU0FBQUEsR0FBQTFDLFdBQUFBLENBQUEwQyxTQUFBQSxFQUVBM0MsTUFBQUEsQ0FBQTRDLGdCQUFBQSxHQUFBM0MsV0FBQUEsQ0FBQTRDLFdBQUFBLEVBQUFBLEVBRUE3QyxNQUFBQSxDQUFBOEMsY0FBQUEsR0FBQUMsUUFBQUEsSUFBQUE7SUFDQS9DLE1BQUFBLENBQUE0QyxnQkFBQUEsR0FBQTNDLFdBQUFBLENBQUErQyxXQUFBQSxDQUFBRCxRQUFBQSxDQUFBO0VBQUEsQ0FBQSxFQUdBL0MsTUFBQUEsQ0FBQWlELFFBQUFBLEdBQUEsQ0FBQWhFLENBQUFBLEVBQUFpRSxLQUFBQSxLQUFBQTtJQUNBLElBQUFDLElBQUFBLEdBQUFsRSxDQUFBQSxDQUFBbUUsT0FBQUEsR0FBQSxJQUFBO01BQ0FDLEdBQUFBLEdBQUFwRSxDQUFBQSxDQUFBcUUsT0FBQUEsR0FBQSxFQUFBLEdBQUEsSUFBQTtJQUVBbkMsUUFBQUEsQ0FBQW9DLGNBQUFBLENBQUFMLEtBQUFBLENBQUFBO0lBTUEsT0FKQXZDLENBQUFBLENBQUEsR0FBQSxHQUFBdUMsS0FBQUEsQ0FBQUEsQ0FBQU0sR0FBQUEsQ0FBQSxNQUFBLEVBQUFMLElBQUFBLENBQUFBLEVBQ0F4QyxDQUFBQSxDQUFBLEdBQUEsR0FBQXVDLEtBQUFBLENBQUFBLENBQUFNLEdBQUFBLENBQUEsS0FBQSxFQUFBSCxHQUFBQSxDQUFBQSxFQUVBMUMsQ0FBQUEsQ0FBQSxHQUFBLEdBQUF1QyxLQUFBQSxDQUFBQSxDQUFBTyxNQUFBQSxFQUFBQSxFQUFBQSxDQUNBLENBQUE7RUFBQSxDQUFBLEVBR0FoRixNQUFBQSxDQUFBaUYsWUFBQUEsQ0FBQUMsSUFBQUEsSUFDQXpELE9BQUFBLENBQUEwRCxLQUFBQSxDQUFBbkYsTUFBQUEsQ0FBQWlGLFlBQUFBLENBQUFDLElBQUFBLENBQUFBLENBQUFFLElBQUFBLENBQUFDLFFBQUFBLElBQUFBO0lBQ0FGLEtBQUFBLENBQUFFLFFBQUFBLENBQUF0RSxJQUFBQSxDQUFBO0VBQUEsQ0FBQSxDQUFBLEVBSUFRLE1BQUFBLENBQUErRCxHQUFBQSxDQUFBLE9BQUEsRUFBQSxDQUFBQyxDQUFBQSxFQUFBTCxJQUFBQSxLQUFBQTtJQUNBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBO0VBQUEsQ0FBQSxDQUFBO0VBR0EsTUFBQUMsS0FBQUEsR0FBQUQsSUFBQUEsSUFBQUE7SUFDQTNELE1BQUFBLENBQUFpRSxRQUFBQSxLQUNBeEYsTUFBQUEsQ0FBQWlGLFlBQUFBLENBQUFDLElBQUFBLEdBQUFBLElBQUFBLENBQUFPLEdBQUFBLEVBQ0FsRSxNQUFBQSxDQUFBaUUsUUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0FqRSxNQUFBQSxDQUFBbUUsV0FBQUEsR0FBQVIsSUFBQUEsRUFDQTNELE1BQUFBLENBQUFtRSxXQUFBQSxDQUFBQyxTQUFBQSxHQUFBLElBQUE3QyxJQUFBQSxDQUFBdkIsTUFBQUEsQ0FBQW1FLFdBQUFBLENBQUFDLFNBQUFBLENBQUFBLEVBQ0FwRSxNQUFBQSxDQUFBUCxVQUFBQSxDQUFBLE9BQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQTtFQUdBTyxNQUFBQSxDQUFBK0QsR0FBQUEsQ0FBQSxRQUFBLEVBQUEsQ0FBQUMsQ0FBQUEsRUFBQUwsSUFBQUEsS0FBQUE7SUFDQTNELE1BQUFBLENBQUFtRSxXQUFBQSxHQUFBUixJQUFBQSxFQUNBM0QsTUFBQUEsQ0FBQW1FLFdBQUFBLENBQUFDLFNBQUFBLEdBQUEsSUFBQTdDLElBQUFBLENBQUF2QixNQUFBQSxDQUFBbUUsV0FBQUEsQ0FBQUMsU0FBQUEsQ0FBQUEsRUFDQXBFLE1BQUFBLENBQUFxRSxPQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQXRDLFVBQUFBLENBQUEsTUFBQTtNQUNBcEIsQ0FBQUEsQ0FBQSxlQUFBLENBQUEsQ0FBQUUsT0FBQUEsQ0FBQSxNQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0EsR0FBQSxDQUFBO0VBQUEsQ0FBQSxDQUFBLEVBR0FiLE1BQUFBLENBQUErRCxHQUFBQSxDQUFBLFNBQUEsRUFBQSxDQUFBQyxDQUFBQSxFQUFBTCxJQUFBQSxLQUFBQTtJQUNBM0QsTUFBQUEsQ0FBQXFFLE9BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBMUQsQ0FBQUEsQ0FBQSxlQUFBLENBQUEsQ0FBQUwsSUFBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxFQUdBTixNQUFBQSxDQUFBK0QsR0FBQUEsQ0FBQSxRQUFBLEVBQUEsQ0FBQUMsQ0FBQUEsRUFBQUwsSUFBQUEsS0FBQUE7SUFDQTNELE1BQUFBLENBQUFxRSxPQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQXRDLFVBQUFBLENBQUEsWUFBQTtNQUNBcEIsQ0FBQUEsQ0FBQSxlQUFBLENBQUEsQ0FBQUUsT0FBQUEsQ0FBQSxNQUFBLENBQ0E7SUFBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO0VBQUEsQ0FBQSxDQUFBLEVBR0FiLE1BQUFBLENBQUFzRSxNQUFBQSxHQUFBLE1BQUE7SUFDQUMsUUFBQUEsQ0FDQUMsSUFBQUEsRUFBQUEsQ0FDQUMsT0FBQUEsRUFBQUEsQ0FDQVosSUFBQUEsQ0FBQSxNQUFBO01BRUE3RCxNQUFBQSxDQUFBaUUsUUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0F4RixNQUFBQSxDQUFBaUYsWUFBQUEsQ0FBQWdCLEtBQUFBLEVBQUFBLEVBQ0ExRSxNQUFBQSxDQUFBUCxVQUFBQSxDQUFBLFFBQUEsQ0FBQTtJQUFBLENBQUEsQ0FBQSxDQUVBa0YsS0FBQUEsQ0FBQUMsS0FBQUEsSUFBQUE7TUFFQTlGLE9BQUFBLENBQUE4RixLQUFBQSxDQUFBQSxLQUFBQSxDQUFBO0lBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxFQUdBNUUsTUFBQUEsQ0FBQTZFLFVBQUFBLEdBQUFDLElBQUFBLElBQUFBLENBRUFBLElBQUFBLEdBQUEsSUFBQXZELElBQUFBLENBQUF1RCxJQUFBQSxDQUFBQSxFQUNBQyxPQUFBQSxFQUFBQSxHQUFBLEdBQUEsR0FGQSxDQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxDQUFBLENBRUFELElBQUFBLENBQUFFLFFBQUFBLEVBQUFBLENBQUFBLEdBQUEsR0FBQSxHQUFBRixJQUFBQSxDQUFBckQsV0FBQUEsRUFFQTtBQUFBLENBQUEsQ0FBQSxFQ2hLQXRFLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQUFXLFVBQUFBLENBQUEsZUFBQSxFQUFBLFVBQUFrSCxTQUFBQSxFQUFBakYsTUFBQUEsRUFBQWtGLE9BQUFBLEVBQUFBO0VBQ0FsRixNQUFBQSxDQUFBbUYsUUFBQUEsR0FBQUEsQ0FBQSxDQUFBO0VBQ0EsTUFBQUMsTUFBQUEsR0FBQWpFLFFBQUFBLENBQUFrRSxvQkFBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7RUFDQSxJQUFBLENBQUFELE1BQUFBLEVBRUEsT0FEQUgsU0FBQUEsQ0FBQUssSUFBQUEsQ0FBQSxPQUFBLENBQUEsRUFDQUMsS0FBQUEsQ0FBQSxFQUFBLENBQUE7RUFFQSxNQUFBQyxHQUFBQSxHQUFBSixNQUFBQSxDQUFBSyxVQUFBQSxDQUFBLElBQUEsQ0FBQTtFQUNBLElBQUEsQ0FBQUQsR0FBQUEsRUFDQSxPQUFBUCxTQUFBQSxDQUFBSyxJQUFBQSxDQUFBLE9BQUEsQ0FBQTtFQUVBRSxHQUFBQSxDQUFBRSxJQUFBQSxHQUFBLG9CQUFBLEVBQ0FGLEdBQUFBLENBQUFHLFNBQUFBLEdBQUEsS0FBQSxFQUNBSCxHQUFBQSxDQUFBSSxTQUFBQSxHQUFBLFFBQUE7RUFDQSxJQUFBQyxLQUFBQSxHQUFBLENBQUEsQ0FBQTtFQUNBLE1BQUFDLFNBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFFBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFVBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLEdBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFNBQUFBLEdBQUEsRUFBQTtFQUNBLElBQUFDLEtBQUFBLEdBQUF4RSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBd0UsU0FBQUEsQ0FBQUE7RUFDQSxNQUFBRSxZQUFBQSxHQUFBLENBQ0E7SUFDQUMsSUFBQUEsRUFBQSxPQUFBO0lBQ0FDLFlBQUFBLEVBQUEsYUFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7TUFDQTNLLENBQUFBLEVBQUEsQ0FBQTtNQUNBVSxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBa0ssR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO01BQ0FBLFNBQUFBLENBQUFDLFFBQUFBLElBQUEsR0FDQTtJQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FWLElBQUFBLEVBQUEsVUFBQTtJQUNBQyxZQUFBQSxFQUFBLFlBQUE7SUFDQUMsS0FBQUEsRUFBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUE7TUFDQUMsT0FBQUEsRUFBQSxDQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO01BQ0EzSyxDQUFBQSxFQUFBLENBQUE7TUFDQVUsU0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUE7SUFFQWtLLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7SUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtNQUNBQSxTQUFBQSxDQUFBRSxRQUFBQSxHQUFBLENBQUEsS0FDQUYsU0FBQUEsQ0FBQUcsWUFBQUEsSUFBQSxDQUFBLENBRUE7SUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBWixJQUFBQSxFQUFBLE9BQUE7SUFDQUMsWUFBQUEsRUFBQSxnQkFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7TUFDQTNLLENBQUFBLEVBQUEsQ0FBQTtNQUNBVSxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBa0ssR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO01BQ0FBLFNBQUFBLENBQUFJLEtBQUFBLElBQUEsQ0FDQTtJQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FiLElBQUFBLEVBQUEsUUFBQTtJQUNBQyxZQUFBQSxFQUFBLFFBQUE7SUFDQUMsS0FBQUEsRUFBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUE7TUFDQUMsT0FBQUEsRUFBQSxDQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO01BQ0EzSyxDQUFBQSxFQUFBLENBQUE7TUFDQVUsU0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUE7SUFFQWtLLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7SUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtNQUNBQSxTQUFBQSxDQUFBSyxNQUFBQSxHQUFBQSxDQUFBLENBQ0E7SUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBZCxJQUFBQSxFQUFBLE1BQUE7SUFDQUMsWUFBQUEsRUFBQSxNQUFB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QSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEdBQ0FuSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFtSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXBLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQW1LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBcEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBbUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FDQSxLQUFBLEVBQ0EsTUFBQSxHQUNBbkssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBbUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FwSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFtSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXBLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQW1LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxDQUFBLEVBRUFILFFBQUFBLENBQUFFLFlBQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsR0FDQW5LLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQW1LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBcEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBbUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FwSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFtSyxLQUFBQSxHQUFB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R0FBQUEsRUFBQTtRQUNBTCxLQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBdkksT0FBQUEsRUFBQSxDQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBeUksT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQUksSUFBQUEsRUFBQTtRQUNBTixLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBdkksT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBeUksT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQUssS0FBQUEsRUFBQTtRQUNBUCxLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBdkksT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBeUksT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQU0sS0FBQUEsRUFBQTtRQUNBUixLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBdkksT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBeUksT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQU8sS0FBQUEsRUFBQTtRQUNBVCxLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBdkksT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBeUksT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQVEs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LElBQUFBLEVBQUEscUJBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsVUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxZQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxXQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsZUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxZQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLHdCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsWUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsVUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsT0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxrQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsaUNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsa0NBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsZUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxRQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLHlCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLHVDQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLDBCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsYUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxlQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsT0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsVUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxZQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE1BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsWUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGtCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsVUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxvQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGdCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsT0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsTUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSw2QkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxpQ0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxlQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsT0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxzREFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsZUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsV0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxXQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxZQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLG1CQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsOENBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsV0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxNQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxXQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLG1DQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsV0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsYUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGdDQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE1BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsMkJBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxRQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE9BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsT0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxZQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsVUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLHVCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLHdDQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLG9CQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsZ0JBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsWUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxrQ0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsZUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxXQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxXQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxzQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxZQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLDRCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsa0JBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsNENBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsTUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsT0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSwwQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxZQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsWUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFdBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsVUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxRQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsVUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxZQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsZUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGdCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsV0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxhQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsT0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE1BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsYUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxNQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsTUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxrQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxrQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxhQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSwyQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEscUJBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsVUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsT0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxvQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxRQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsaUJBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsWUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsV0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSw4Q0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLHdCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsY0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxZQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsdUJBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsYUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSwyQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxzQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxXQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLDBCQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLE1BQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsNkJBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsTUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxVQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFlBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxhQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLGNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxPQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEscUJBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsUUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSwyQkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSw4QkFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFFBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsc0NBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsMEJBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsU0FBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxZQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLFVBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsa0NBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsbUNBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEseUJBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsc0JBQUE7SUFBQXNPLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRPLElBQUFBLEVBQUEsVUFBQTtJQUFBc08sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBdE8sSUFBQUEsRUFBQSxTQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFBQSxFQUFBLG1CQUFBO0lBQUFzTyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUF0TyxJQUFB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LElBQUFBLEtBQUFxZ0IsTUFBQUEsQ0FBQXJnQixJQUFBQSxDQUFBQSxDQUFBSixHQUFBQSxDQUFBeWdCLE1BQUFBLElBQUFBLE1BQUFBLENBQUFyZ0IsSUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBQTFLLEtBQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQTtFQUVBcUUsTUFBQUEsQ0FBQWduQixRQUFBQSxHQUFBLE1BQ0EsR0FBQWhuQixNQUFBQSxDQUFBeW1CLE9BQUFBLENBQUF2a0IsTUFBQUEsQ0FBQXdrQixNQUFBQSxJQUFBQSxNQUFBQSxDQUFBcmdCLElBQUFBLEtBQUFxZ0IsTUFBQUEsQ0FBQUssS0FBQUEsQ0FBQUEsQ0FBQS9xQixNQUFBQSxJQUFBZ0UsTUFBQUEsQ0FBQXltQixPQUFBQSxDQUFBenFCLE1BQUFBLEVBQUFBLEVBRUFnRSxNQUFBQSxDQUFBaW5CLGNBQUFBLEdBQUEsTUFBQWpuQixNQUFBQSxDQUFBeW1CLE9BQUFBLENBQUF2a0IsTUFBQUEsQ0FBQXdrQixNQUFBQSxJQUFBQSxNQUFBQSxDQUFBSyxLQUFBQSxDQUFBQSxDQUFBL3FCLE1BQUFBLEtBQUFnRSxNQUFBQSxDQUFBeW1CLE9BQUFBLENBQUF6cUIsTUFDQTtBQUFBLENBQUEsQ0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwID0gW1xyXG4gIHtcclxuICAgIGJhc2U6IFwiQVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQxXFx1MjRCNlxcdUZGMjFcXHUwMEMwXFx1MDBDMVxcdTAwQzJcXHUxRUE2XFx1MUVBNFxcdTFFQUFcXHUxRUE4XFx1MDBDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx1MDBDNFxcdTAxREVcXHUxRUEyXFx1MDBDNVxcdTAxRkFcXHUwMUNEXFx1MDIwMFxcdTAyMDJcXHUxRUEwXFx1MUVBQ1xcdTFFQjZcXHUxRTAwXFx1MDEwNFxcdTAyM0FcXHUyQzZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBQVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzMyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBRVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMEM2XFx1MDFGQ1xcdTAxRTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFPXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFVXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFWXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzhcXHVBNzNBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzNDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJCXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgyXFx1MDE4MV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQ1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQzXFx1MjRCOFxcdUZGMjNcXHUwMTA2XFx1MDEwOFxcdTAxMEFcXHUwMTBDXFx1MDBDN1xcdTFFMDhcXHUwMTg3XFx1MDIzQlxcdUE3M0VdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0NFxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEJcXHUwMThBXFx1MDE4OVxcdUE3NzldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkRaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjFcXHUwMUM0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEelwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYyXFx1MDFDNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQ1XFx1MjRCQVxcdUZGMjVcXHUwMEM4XFx1MDBDOVxcdTAwQ0FcXHUxRUMwXFx1MUVCRVxcdTFFQzRcXHUxRUMyXFx1MUVCQ1xcdTAxMTJcXHUxRTE0XFx1MUUxNlxcdTAxMTRcXHUwMTE2XFx1MDBDQlxcdTFFQkFcXHUwMTFBXFx1MDIwNFxcdTAyMDZcXHUxRUI4XFx1MUVDNlxcdTAyMjhcXHUxRTFDXFx1MDExOFxcdTFFMThcXHUxRTFBXFx1MDE5MFxcdTAxOEVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0NlxcdTI0QkJcXHVGRjI2XFx1MUUxRVxcdTAxOTFcXHVBNzdCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJHXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDdcXHUyNEJDXFx1RkYyN1xcdTAxRjRcXHUwMTFDXFx1MUUyMFxcdTAxMUVcXHUwMTIwXFx1MDFFNlxcdTAxMjJcXHUwMUU0XFx1MDE5M1xcdUE3QTBcXHVBNzdEXFx1QTc3RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ4XFx1MjRCRFxcdUZGMjhcXHUwMTI0XFx1MUUyMlxcdTFFMjZcXHUwMjFFXFx1MUUyNFxcdTFFMjhcXHUxRTJBXFx1MDEyNlxcdTJDNjdcXHUyQzc1XFx1QTc4RF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQ5XFx1MjRCRVxcdUZGMjlcXHUwMENDXFx1MDBDRFxcdTAwQ0VcXHUwMTI4XFx1MDEyQVxcdTAxMkNcXHUwMTMwXFx1MDBDRlxcdTFFMkVcXHUxRUM4XFx1MDFDRlxcdTAyMDhcXHUwMjBBXFx1MUVDQVxcdTAxMkVcXHUxRTJDXFx1MDE5N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRBXFx1MjRCRlxcdUZGMkFcXHUwMTM0XFx1MDI0OF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiS1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRCXFx1MjRDMFxcdUZGMkJcXHUxRTMwXFx1MDFFOFxcdTFFMzJcXHUwMTM2XFx1MUUzNFxcdTAxOThcXHUyQzY5XFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTdBMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTFwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDRDXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxKXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk1cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0RFxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0RVxcdTI0QzNcXHVGRjJFXFx1MDFGOFxcdTAxNDNcXHUwMEQxXFx1MUU0NFxcdTAxNDdcXHUxRTQ2XFx1MDE0NVxcdTFFNEFcXHUxRTQ4XFx1MDIyMFxcdTAxOURcXHVBNzkwXFx1QTdBNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTkpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTmpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDRGXFx1MjRDNFxcdUZGMkZcXHUwMEQyXFx1MDBEM1xcdTAwRDRcXHUxRUQyXFx1MUVEMFxcdTFFRDZcXHUxRUQ0XFx1MDBENVxcdTFFNENcXHUwMjJDXFx1MUU0RVxcdTAxNENcXHUxRTUwXFx1MUU1MlxcdTAxNEVcXHUwMjJFXFx1MDIzMFxcdTAwRDZcXHUwMjJBXFx1MUVDRVxcdTAxNTBcXHUwMUQxXFx1MDIwQ1xcdTAyMEVcXHUwMUEwXFx1MUVEQ1xcdTFFREFcXHUxRUUwXFx1MUVERVxcdTFFRTJcXHUxRUNDXFx1MUVEOFxcdTAxRUFcXHUwMUVDXFx1MDBEOFxcdTAxRkVcXHUwMTg2XFx1MDE5RlxcdUE3NEFcXHVBNzRDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPSVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUEyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPT1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzRFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPVVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMjIyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJQXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTBcXHUyNEM1XFx1RkYzMFxcdTFFNTRcXHUxRTU2XFx1MDFBNFxcdTJDNjNcXHVBNzUwXFx1QTc1MlxcdUE3NTRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1MVxcdTI0QzZcXHVGRjMxXFx1QTc1NlxcdUE3NThcXHUwMjRBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJSXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJTXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTNcXHUyNEM4XFx1RkYzM1xcdTFFOUVcXHUwMTVBXFx1MUU2NFxcdTAxNUNcXHUxRTYwXFx1MDE2MFxcdTFFNjZcXHUxRTYyXFx1MUU2OFxcdTAyMThcXHUwMTVFXFx1MkM3RVxcdUE3QThcXHVBNzg0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJUXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTRcXHUyNEM5XFx1RkYzNFxcdTFFNkFcXHUwMTY0XFx1MUU2Q1xcdTAyMUFcXHUwMTYyXFx1MUU3MFxcdTFFNkVcXHUwMTY2XFx1MDFBQ1xcdTAxQUVcXHUwMjNFXFx1QTc4Nl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVFpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTcyOF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDU1XFx1MjRDQVxcdUZGMzVcXHUwMEQ5XFx1MDBEQVxcdTAwREJcXHUwMTY4XFx1MUU3OFxcdTAxNkFcXHUxRTdBXFx1MDE2Q1xcdTAwRENcXHUwMURCXFx1MDFEN1xcdTAxRDVcXHUwMUQ5XFx1MUVFNlxcdTAxNkVcXHUwMTcwXFx1MDFEM1xcdTAyMTRcXHUwMjE2XFx1MDFBRlxcdTFFRUFcXHUxRUU4XFx1MUVFRVxcdTFFRUNcXHUxRUYwXFx1MUVFNFxcdTFFNzJcXHUwMTcyXFx1MUU3NlxcdTFFNzRcXHUwMjQ0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJWXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTZcXHUyNENCXFx1RkYzNlxcdTFFN0NcXHUxRTdFXFx1MDFCMlxcdUE3NUVcXHUwMjQ1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJWWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzYwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJXXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTdcXHUyNENDXFx1RkYzN1xcdTFFODBcXHUxRTgyXFx1MDE3NFxcdTFFODZcXHUxRTg0XFx1MUU4OFxcdTJDNzJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1OFxcdTI0Q0RcXHVGRjM4XFx1MUU4QVxcdTFFOENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIllcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1OVxcdTI0Q0VcXHVGRjM5XFx1MUVGMlxcdTAwRERcXHUwMTc2XFx1MUVGOFxcdTAyMzJcXHUxRThFXFx1MDE3OFxcdTFFRjZcXHUxRUY0XFx1MDFCM1xcdTAyNEVcXHUxRUZFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNUFcXHUyNENGXFx1RkYzQVxcdTAxNzlcXHUxRTkwXFx1MDE3QlxcdTAxN0RcXHUxRTkyXFx1MUU5NFxcdTAxQjVcXHUwMjI0XFx1MkM3RlxcdTJDNkJcXHVBNzYyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjFcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHUwMEUwXFx1MDBFMVxcdTAwRTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx1MDBFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx1MDBFNFxcdTAxREZcXHUxRUEzXFx1MDBFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhYVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzMzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhZVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMEU2XFx1MDFGRFxcdTAxRTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFvXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF1XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzlcXHVBNzNCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJheVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzNEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJiXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjJcXHUyNEQxXFx1RkY0MlxcdTFFMDNcXHUxRTA1XFx1MUUwN1xcdTAxODBcXHUwMTgzXFx1MDI1M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiY1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDYzXFx1MjREMlxcdUZGNDNcXHUwMTA3XFx1MDEwOVxcdTAxMEJcXHUwMTBEXFx1MDBFN1xcdTFFMDlcXHUwMTg4XFx1MDIzQ1xcdUE3M0ZcXHUyMTg0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJkXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjRcXHUyNEQzXFx1RkY0NFxcdTFFMEJcXHUwMTBGXFx1MUUwRFxcdTFFMTFcXHUxRTEzXFx1MUUwRlxcdTAxMTFcXHUwMThDXFx1MDI1NlxcdTAyNTdcXHVBNzdBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJkelwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYzXFx1MDFDNl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDY1XFx1MjRENFxcdUZGNDVcXHUwMEU4XFx1MDBFOVxcdTAwRUFcXHUxRUMxXFx1MUVCRlxcdTFFQzVcXHUxRUMzXFx1MUVCRFxcdTAxMTNcXHUxRTE1XFx1MUUxN1xcdTAxMTVcXHUwMTE3XFx1MDBFQlxcdTFFQkJcXHUwMTFCXFx1MDIwNVxcdTAyMDdcXHUxRUI5XFx1MUVDN1xcdTAyMjlcXHUxRTFEXFx1MDExOVxcdTFFMTlcXHUxRTFCXFx1MDI0N1xcdTAyNUJcXHUwMUREXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJmXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjZcXHUyNEQ1XFx1RkY0NlxcdTFFMUZcXHUwMTkyXFx1QTc3Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZ1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY3XFx1MjRENlxcdUZGNDdcXHUwMUY1XFx1MDExRFxcdTFFMjFcXHUwMTFGXFx1MDEyMVxcdTAxRTdcXHUwMTIzXFx1MDFFNVxcdTAyNjBcXHVBN0ExXFx1MUQ3OVxcdUE3N0ZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2OFxcdTI0RDdcXHVGRjQ4XFx1MDEyNVxcdTFFMjNcXHUxRTI3XFx1MDIxRlxcdTFFMjVcXHUxRTI5XFx1MUUyQlxcdTFFOTZcXHUwMTI3XFx1MkM2OFxcdTJDNzZcXHUwMjY1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJodlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMTk1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJpXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjlcXHUyNEQ4XFx1RkY0OVxcdTAwRUNcXHUwMEVEXFx1MDBFRVxcdTAxMjlcXHUwMTJCXFx1MDEyRFxcdTAwRUZcXHUxRTJGXFx1MUVDOVxcdTAxRDBcXHUwMjA5XFx1MDIwQlxcdTFFQ0JcXHUwMTJGXFx1MUUyRFxcdTAyNjhcXHUwMTMxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkFcXHUyNEQ5XFx1RkY0QVxcdTAxMzVcXHUwMUYwXFx1MDI0OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwia1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZCXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibFwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZDXFx1MjREQlxcdUZGNENcXHUwMTQwXFx1MDEzQVxcdTAxM0VcXHUxRTM3XFx1MUUzOVxcdTAxM0NcXHUxRTNEXFx1MUUzQlxcdTAxN0ZcXHUwMTQyXFx1MDE5QVxcdTAyNkJcXHUyQzYxXFx1QTc0OVxcdUE3ODFcXHVBNzQ3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJsalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJtXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkRcXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJuXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkVcXHUyNEREXFx1RkY0RVxcdTAxRjlcXHUwMTQ0XFx1MDBGMVxcdTFFNDVcXHUwMTQ4XFx1MUU0N1xcdTAxNDZcXHUxRTRCXFx1MUU0OVxcdTAxOUVcXHUwMjcyXFx1MDE0OVxcdUE3OTFcXHVBN0E1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJualwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkZcXHUyNERFXFx1RkY0RlxcdTAwRjJcXHUwMEYzXFx1MDBGNFxcdTFFRDNcXHUxRUQxXFx1MUVEN1xcdTFFRDVcXHUwMEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx1MDBGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHUwMEY4XFx1MDFGRlxcdTAyNTRcXHVBNzRCXFx1QTc0RFxcdTAyNzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9pXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm91XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAyMjNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9vXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NEZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInBcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3MFxcdTI0REZcXHVGRjUwXFx1MUU1NVxcdTFFNTdcXHUwMUE1XFx1MUQ3RFxcdUE3NTFcXHVBNzUzXFx1QTc1NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwicVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDcxXFx1MjRFMFxcdUZGNTFcXHUwMjRCXFx1QTc1N1xcdUE3NTldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInJcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3MlxcdTI0RTFcXHVGRjUyXFx1MDE1NVxcdTFFNTlcXHUwMTU5XFx1MDIxMVxcdTAyMTNcXHUxRTVCXFx1MUU1RFxcdTAxNTdcXHUxRTVGXFx1MDI0RFxcdTAyN0RcXHVBNzVCXFx1QTdBN1xcdUE3ODNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInNcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3M1xcdTI0RTJcXHVGRjUzXFx1MDBERlxcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ0XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzRcXHUyNEUzXFx1RkY1NFxcdTFFNkJcXHUxRTk3XFx1MDE2NVxcdTFFNkRcXHUwMjFCXFx1MDE2M1xcdTFFNzFcXHUxRTZGXFx1MDE2N1xcdTAxQURcXHUwMjg4XFx1MkM2NlxcdUE3ODddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MjldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3NVxcdTI0RTRcXHVGRjU1XFx1MDBGOVxcdTAwRkFcXHUwMEZCXFx1MDE2OVxcdTFFNzlcXHUwMTZCXFx1MUU3QlxcdTAxNkRcXHUwMEZDXFx1MDFEQ1xcdTAxRDhcXHUwMUQ2XFx1MDFEQVxcdTFFRTdcXHUwMTZGXFx1MDE3MVxcdTAxRDRcXHUwMjE1XFx1MDIxN1xcdTAxQjBcXHUxRUVCXFx1MUVFOVxcdTFFRUZcXHUxRUVEXFx1MUVGMVxcdTFFRTVcXHUxRTczXFx1MDE3M1xcdTFFNzdcXHUxRTc1XFx1MDI4OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc2XFx1MjRFNVxcdUZGNTZcXHUxRTdEXFx1MUU3RlxcdTAyOEJcXHVBNzVGXFx1MDI4Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidnlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc2MV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwid1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc3XFx1MjRFNlxcdUZGNTdcXHUxRTgxXFx1MUU4M1xcdTAxNzVcXHUxRTg3XFx1MUU4NVxcdTFFOThcXHUxRTg5XFx1MkM3M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwieFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc4XFx1MjRFN1xcdUZGNThcXHUxRThCXFx1MUU4RF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwieVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc5XFx1MjRFOFxcdUZGNTlcXHUxRUYzXFx1MDBGRFxcdTAxNzdcXHUxRUY5XFx1MDIzM1xcdTFFOEZcXHUwMEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwN0FcXHUyNEU5XFx1RkY1QVxcdTAxN0FcXHUxRTkxXFx1MDE3Q1xcdTAxN0VcXHUxRTkzXFx1MUU5NVxcdTAxQjZcXHUwMjI1XFx1MDI0MFxcdTJDNkNcXHVBNzYzXS9nLFxyXG4gIH0sXHJcbl07XHJcbnZhciBkb21haW5zID0gW1xyXG4gIFwiLmNvbVwiLFxyXG4gIFwiLm9yZ1wiLFxyXG4gIFwiLm5ldFwiLFxyXG4gIFwiLmFjXCIsXHJcbiAgXCIuYWRcIixcclxuICBcIi5hZVwiLFxyXG4gIFwiLmFmXCIsXHJcbiAgXCIuYWdcIixcclxuICBcIi5haVwiLFxyXG4gIFwiLmFsXCIsXHJcbiAgXCIuYW1cIixcclxuICBcIi5hb1wiLFxyXG4gIFwiLmFxXCIsXHJcbiAgXCIuYXJcIixcclxuICBcIi5hc1wiLFxyXG4gIFwiLmF0XCIsXHJcbiAgXCIuYXVcIixcclxuICBcIi5hd1wiLFxyXG4gIFwiLmF4XCIsXHJcbiAgXCIuYXpcIixcclxuICBcIi5iYVwiLFxyXG4gIFwiLmJiXCIsXHJcbiAgXCIuYmRcIixcclxuICBcIi5iZVwiLFxyXG4gIFwiLmJmXCIsXHJcbiAgXCIuYmdcIixcclxuICBcIi5iaFwiLFxyXG4gIFwiLmJpXCIsXHJcbiAgXCIuYmpcIixcclxuICBcIi5ibVwiLFxyXG4gIFwiLmJuXCIsXHJcbiAgXCIuYm9cIixcclxuICBcIi5icVwiLFxyXG4gIFwiLmJyXCIsXHJcbiAgXCIuYnNcIixcclxuICBcIi5idFwiLFxyXG4gIFwiLmJ3XCIsXHJcbiAgXCIuYnlcIixcclxuICBcIi5ielwiLFxyXG4gIFwiLmNhXCIsXHJcbiAgXCIuY2NcIixcclxuICBcIi5jZFwiLFxyXG4gIFwiLmNmXCIsXHJcbiAgXCIuY2dcIixcclxuICBcIi5jaFwiLFxyXG4gIFwiLmNpXCIsXHJcbiAgXCIuY2tcIixcclxuICBcIi5jbFwiLFxyXG4gIFwiLmNtXCIsXHJcbiAgXCIuY25cIixcclxuICBcIi5jb1wiLFxyXG4gIFwiLmNyXCIsXHJcbiAgXCIuY3VcIixcclxuICBcIi5jdlwiLFxyXG4gIFwiLmN3XCIsXHJcbiAgXCIuY3hcIixcclxuICBcIi5jeVwiLFxyXG4gIFwiLmN6XCIsXHJcbiAgXCIuZGVcIixcclxuICBcIi5kalwiLFxyXG4gIFwiLmRrXCIsXHJcbiAgXCIuZG1cIixcclxuICBcIi5kb1wiLFxyXG4gIFwiLmR6XCIsXHJcbiAgXCIuZWNcIixcclxuICBcIi5lZVwiLFxyXG4gIFwiLmVnXCIsXHJcbiAgXCIuZWhcIixcclxuICBcIi5lclwiLFxyXG4gIFwiLmVzXCIsXHJcbiAgXCIuZXRcIixcclxuICBcIi5ldVwiLFxyXG4gIFwiLmZpXCIsXHJcbiAgXCIuZmpcIixcclxuICBcIi5ma1wiLFxyXG4gIFwiLmZtXCIsXHJcbiAgXCIuZm9cIixcclxuICBcIi5mclwiLFxyXG4gIFwiLmdhXCIsXHJcbiAgXCIuZ2RcIixcclxuICBcIi5nZVwiLFxyXG4gIFwiLmdmXCIsXHJcbiAgXCIuZ2dcIixcclxuICBcIi5naFwiLFxyXG4gIFwiLmdpXCIsXHJcbiAgXCIuZ2xcIixcclxuICBcIi5nbVwiLFxyXG4gIFwiLmduXCIsXHJcbiAgXCIuZ3BcIixcclxuICBcIi5ncVwiLFxyXG4gIFwiLmdyXCIsXHJcbiAgXCIuZ3NcIixcclxuICBcIi5ndFwiLFxyXG4gIFwiLmd1XCIsXHJcbiAgXCIuZ3dcIixcclxuICBcIi5neVwiLFxyXG4gIFwiLmhrXCIsXHJcbiAgXCIuaG1cIixcclxuICBcIi5oblwiLFxyXG4gIFwiLmhyXCIsXHJcbiAgXCIuaHRcIixcclxuICBcIi5odVwiLFxyXG4gIFwiLmlkXCIsXHJcbiAgXCIuaWVcIixcclxuICBcIi5pbFwiLFxyXG4gIFwiLmltXCIsXHJcbiAgXCIuaW5cIixcclxuICBcIi5pb1wiLFxyXG4gIFwiLmlxXCIsXHJcbiAgXCIuaXJcIixcclxuICBcIi5pc1wiLFxyXG4gIFwiLml0XCIsXHJcbiAgXCIuamVcIixcclxuICBcIi5qbVwiLFxyXG4gIFwiLmpvXCIsXHJcbiAgXCIuanBcIixcclxuICBcIi5rZVwiLFxyXG4gIFwiLmtnXCIsXHJcbiAgXCIua2hcIixcclxuICBcIi5raVwiLFxyXG4gIFwiLmttXCIsXHJcbiAgXCIua25cIixcclxuICBcIi5rcFwiLFxyXG4gIFwiLmtyXCIsXHJcbiAgXCIua3dcIixcclxuICBcIi5reVwiLFxyXG4gIFwiLmt6XCIsXHJcbiAgXCIubGFcIixcclxuICBcIi5sYlwiLFxyXG4gIFwiLmxjXCIsXHJcbiAgXCIubGlcIixcclxuICBcIi5sa1wiLFxyXG4gIFwiLmxyXCIsXHJcbiAgXCIubHNcIixcclxuICBcIi5sdFwiLFxyXG4gIFwiLmx1XCIsXHJcbiAgXCIubHZcIixcclxuICBcIi5seVwiLFxyXG4gIFwiLm1hXCIsXHJcbiAgXCIubWNcIixcclxuICBcIi5tZFwiLFxyXG4gIFwiLm1lXCIsXHJcbiAgXCIubWdcIixcclxuICBcIi5taFwiLFxyXG4gIFwiLm1rXCIsXHJcbiAgXCIubWxcIixcclxuICBcIi5tbVwiLFxyXG4gIFwiLm1uXCIsXHJcbiAgXCIubW9cIixcclxuICBcIi5tcFwiLFxyXG4gIFwiLm1xXCIsXHJcbiAgXCIubXJcIixcclxuICBcIi5tc1wiLFxyXG4gIFwiLm10XCIsXHJcbiAgXCIubXVcIixcclxuICBcIi5tdlwiLFxyXG4gIFwiLm13XCIsXHJcbiAgXCIubXhcIixcclxuICBcIi5teVwiLFxyXG4gIFwiLm16XCIsXHJcbiAgXCIubmFcIixcclxuICBcIi5uY1wiLFxyXG4gIFwiLm5lXCIsXHJcbiAgXCIubmZcIixcclxuICBcIi5uZ1wiLFxyXG4gIFwiLm5pXCIsXHJcbiAgXCIubmxcIixcclxuICBcIi5ub1wiLFxyXG4gIFwiLm5wXCIsXHJcbiAgXCIubnJcIixcclxuICBcIi5udVwiLFxyXG4gIFwiLm56XCIsXHJcbiAgXCIub21cIixcclxuICBcIi5wYVwiLFxyXG4gIFwiLnBlXCIsXHJcbiAgXCIucGZcIixcclxuICBcIi5wZ1wiLFxyXG4gIFwiLnBoXCIsXHJcbiAgXCIucGtcIixcclxuICBcIi5wbFwiLFxyXG4gIFwiLnBtXCIsXHJcbiAgXCIucG5cIixcclxuICBcIi5wclwiLFxyXG4gIFwiLnBzXCIsXHJcbiAgXCIucHRcIixcclxuICBcIi5wd1wiLFxyXG4gIFwiLnB5XCIsXHJcbiAgXCIucWFcIixcclxuICBcIi5yZVwiLFxyXG4gIFwiLnJvXCIsXHJcbiAgXCIucnNcIixcclxuICBcIi5ydVwiLFxyXG4gIFwiLnJ3XCIsXHJcbiAgXCIuc2FcIixcclxuICBcIi5zYlwiLFxyXG4gIFwiLnNjXCIsXHJcbiAgXCIuc2RcIixcclxuICBcIi5zZVwiLFxyXG4gIFwiLnNnXCIsXHJcbiAgXCIuc2hcIixcclxuICBcIi5zaVwiLFxyXG4gIFwiLnNrXCIsXHJcbiAgXCIuc2xcIixcclxuICBcIi5zbVwiLFxyXG4gIFwiLnNuXCIsXHJcbiAgXCIuc29cIixcclxuICBcIi5zclwiLFxyXG4gIFwiLnNzXCIsXHJcbiAgXCIuc3RcIixcclxuICBcIi5zdVwiLFxyXG4gIFwiLnN2XCIsXHJcbiAgXCIuc3hcIixcclxuICBcIi5zeVwiLFxyXG4gIFwiLnN6XCIsXHJcbiAgXCIudGNcIixcclxuICBcIi50ZFwiLFxyXG4gIFwiLnRmXCIsXHJcbiAgXCIudGdcIixcclxuICBcIi50aFwiLFxyXG4gIFwiLnRqXCIsXHJcbiAgXCIudGtcIixcclxuICBcIi50bFwiLFxyXG4gIFwiLnRtXCIsXHJcbiAgXCIudG5cIixcclxuICBcIi50b1wiLFxyXG4gIFwiLnRyXCIsXHJcbiAgXCIudHRcIixcclxuICBcIi50dlwiLFxyXG4gIFwiLnR3XCIsXHJcbiAgXCIudHpcIixcclxuICBcIi51YVwiLFxyXG4gIFwiLnVnXCIsXHJcbiAgXCIudWtcIixcclxuICBcIi51c1wiLFxyXG4gIFwiLnV5XCIsXHJcbiAgXCIudXpcIixcclxuICBcIi52YVwiLFxyXG4gIFwiLnZjXCIsXHJcbiAgXCIudmVcIixcclxuICBcIi52Z1wiLFxyXG4gIFwiLnZpXCIsXHJcbiAgXCIudm5cIixcclxuICBcIi52dVwiLFxyXG4gIFwiLndmXCIsXHJcbiAgXCIud3NcIixcclxuICBcIi55ZVwiLFxyXG4gIFwiLnl0XCIsXHJcbiAgXCIuemFcIixcclxuICBcIi56bVwiLFxyXG4gIFwiLnp3XCIsXHJcbl07XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVEaWFjcml0aWNzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcC5yZWR1Y2UoKHJlc3VsdCwgbGV0dGVyKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXN1bHQucmVwbGFjZShsZXR0ZXIubGV0dGVycywgbGV0dGVyLmJhc2UpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBTUEVDSUFMX0NIQVJBQ1RFUlMgPSBcIlxcXFxcXFxcLyAhP0AjJCVeJiooKV8rOi57fSw7XFxcXC0nYGDigJnigJhcXFwiXCI7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVyc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChgWyR7U1BFQ0lBTF9DSEFSQUNURVJTfV1gLCBcImdpXCIpLCBcIlwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZUFsbEJ1dExldHRlcnNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b0xvd2VyQ2FzZSgpLnJlbW92ZURpYWNyaXRpY3MoKS5yZW1vdmVTcGVjaWFsQ2hhcmFjdGVycygpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiY29uY2VhbFwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChleHRyYSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbXiR7U1BFQ0lBTF9DSEFSQUNURVJTfSR7ZXh0cmF9XWAsIFwiZ2lcIiksIFwi4oGOXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiY2FwaXRhbGl6ZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5zbGljZSgxKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZUhUTUxcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKFwiPlwiLCBcIlxcdTIyN0JcIikucmVwbGFjZShcIjxcIiwgXCJcXHUyMjdBXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicGFyc2VTeW1ib2xzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZUFsbChcIiZcIiwgXCImYW1wO1wiKS5yZXBsYWNlKFwiPFwiLCBcIiZsdDtcIikucmVwbGFjZShcIj5cIiwgXCImZ3Q7XCIpLnJlcGxhY2VBbGwoXCIjXCIsIFwiJm51bTtcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZXBsYWNlQXJyYXlcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZmluZCwgcmVwbGFjZSkge1xyXG4gICAgdmFyIHJlcGxhY2VTdHJpbmcgPSB0aGlzO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaW5kLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHJlcGxhY2VTdHJpbmcgPSByZXBsYWNlU3RyaW5nLnJlcGxhY2UoZmluZFtpXSwgcmVwbGFjZVtpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVwbGFjZVN0cmluZztcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcIm1hc2tVUkxzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZUFycmF5KFtcImh0dHBzOi8vXCIsIFwiaHR0cDovL1wiXSwgXCJub3BlOi8vXCIpLnJlcGxhY2VBcnJheShkb21haW5zLCBcIi5ub3BlXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwibWFrZVJlYWRhYmxlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJtYWtlUGVyY2VudGFnZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChkZWNpbWFscykge1xyXG4gICAgaWYgKGRlY2ltYWxzID09PSB1bmRlZmluZWQpIGRlY2ltYWxzID0gMjtcclxuICAgIHJldHVybiBgJHsodGhpcyAqIDEwMCkudG9GaXhlZChkZWNpbWFscyl9JWA7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzb3J0T2JqZWN0ID0gKG9iaiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgbGV0IGFyciA9IFtdO1xyXG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgYXJyLnB1c2goW2tleSwgb2JqW2tleV1dKTtcclxuICB9XHJcbiAgYXJyLnNvcnQoKGEsIGIpID0+IChkaXJlY3Rpb24gPyBhWzFdIC0gYlsxXSA6IGJbMV0gLSBhWzFdKSk7XHJcbiAgbGV0IG9ialNvcnRlZCA9IHt9O1xyXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiAob2JqU29ydGVkW2l0ZW1bMF1dID0gaXRlbVsxXSkpO1xyXG4gIC8vYXJyLnNvcnQoZnVuY3Rpb24oYSwgYikgeyBhLnZhbHVlLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLnZhbHVlLnRvTG93ZXJDYXNlKCkpOyB9KTsgLy91c2UgdGhpcyB0byBzb3J0IGFzIHN0cmluZ3NcclxuICByZXR1cm4gb2JqU29ydGVkOyAvLyByZXR1cm5zIGFycmF5XHJcbn07XHJcbiIsIi8qXHJcbiQgPSBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxudmFyIGJvb3RzdHJhcCA9IHJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxudmFyIGFuZ3VsYXJTYW5pdGl6ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItc2FuaXRpemUnKTtcclxudmFyIGFuZ3VsYXJBbmltYXRlID0gcmVxdWlyZSgnYW5ndWxhci1hbmltYXRlJyk7XHJcbiovXHJcbmFuZ3VsYXIubW9kdWxlKFwiYXBwXCIsIFtcclxuICBcInVpLnJvdXRlclwiLFxyXG4gIFwidWkuYm9vdHN0cmFwXCIsXHJcbiAgXCJuZ0FuaW1hdGVcIixcclxuICBcIm5nU2FuaXRpemVcIixcclxuICBcIm5nTWF0ZXJpYWxcIixcclxuICBcIm5nTWVzc2FnZXNcIixcclxuICBcIm5nRHJhZ0Ryb3BcIixcclxuICBcIm5nVGFnc0lucHV0XCIsXHJcbiAgXCJ2Y1JlY2FwdGNoYVwiLFxyXG4gIFwiY2hhcnQuanNcIixcclxuICBcInRjLmNoYXJ0anNcIixcclxuICBcImluZmluaXRlLXNjcm9sbFwiLFxyXG5dKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkdXJsU2VydmljZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xyXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvaG9tZVwiKTtcclxuICAkdXJsU2VydmljZVByb3ZpZGVyLmNvbmZpZy5zdHJpY3RNb2RlKGZhbHNlKTtcclxuXHJcbiAgJHN0YXRlUHJvdmlkZXJcclxuICAgIC5zdGF0ZShcImhvbWVcIiwge1xyXG4gICAgICB1cmw6IFwiL2hvbWVcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2hvbWUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInBvbGljeVwiLCB7XHJcbiAgICAgIHVybDogXCIvcG9saWN5XCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wb2xpY3kuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInByaW50XCIsIHtcclxuICAgICAgdXJsOiBcIi9wcmludFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcHJpbnQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImV4cGVyaWVuY2VcIiwge1xyXG4gICAgICB1cmw6IFwiL2V4cGVyaWVuY2VcIixcclxuICAgICAgY29udHJvbGxlcjogXCJFeHBlcmllbmNlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvZXhwZXJpZW5jZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwic2tpbGxzXCIsIHtcclxuICAgICAgdXJsOiBcIi9za2lsbHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJTa2lsbHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9za2lsbHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImhvYmJpZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2hvYmJpZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJIb2JiaWVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvaG9iYmllcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiY29udGFjdFwiLCB7XHJcbiAgICAgIHVybDogXCIvY29udGFjdFwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkNvbnRhY3RDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9jb250YWN0Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ3b3Jrb3V0XCIsIHtcclxuICAgICAgdXJsOiBcIi93b3Jrb3V0XCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiV29ya291dEN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3dvcmtvdXQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInBvc3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9wb3N0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlBvc3RzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcG9zdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInByb2ZpbGVcIiwge1xyXG4gICAgICB1cmw6IFwiL3Byb2ZpbGVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJQcm9maWxlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcHJvZmlsZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibGlzdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2xpc3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiTGlzdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImxpc3RzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJidWJibGVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9idWJibGVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQnViYmxlc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiYnViYmxlcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYXN0ZXJvaWRzXCIsIHtcclxuICAgICAgdXJsOiBcIi9hc3Rlcm9pZHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJBc3Rlcm9pZHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImFzdGVyb2lkcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibGVtbWluZ3NcIiwge1xyXG4gICAgICB1cmw6IFwiL2xlbW1pbmdzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiTGVtbWluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImxlbW1pbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJib3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9ib3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5nc1wiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1hZG1pblwiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLWFkbWluXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzQWRtaW5DdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1hZG1pbi5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLWdhbWVcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy86Z2FtZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0dhbWVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1nYW1lLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3Mtc3RhdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy1zdGF0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc1N0YXRzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3Mtc3RhdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotZ29vZ2xlXCIsIHtcclxuICAgICAgdXJsOiBcIi9nb29nbGVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6R29vZ2xlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL2dvb2dsZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1sb2dvc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbG9nb3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6TG9nb3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvbG9nb3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotYW5pbWFsc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYW5pbWFsc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpBbmltYWxzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL2FuaW1hbHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotc2tlbGV0b25zXCIsIHtcclxuICAgICAgdXJsOiBcIi9za2VsZXRvbnNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6U2tlbGV0b25zQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL3NrZWxldG9ucy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1tb3ZpZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL21vdmllc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpNb3ZpZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvbW92aWVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJjaGFyYWRlc1wiLCB7XHJcbiAgICAgIHVybDogXCIvY2hhcmFkZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJDaGFyYWRlc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2NoYXJhZGVzLmh0bWxcIixcclxuICAgIH0pO1xyXG5cclxuICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoe1xyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIHJlcXVpcmVCYXNlOiBmYWxzZSxcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnV2ViU29ja2V0U3ZjJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICR0aW1lb3V0KSB7XHJcbiAgZnVuY3Rpb24gd2Vic29ja2V0SG9zdCgpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonKSB7XHJcbiAgICAgIHJldHVybiBcIndzczovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJ3czovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgY29ubmVjdGlvbjtcclxuICB2YXIgY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KHdlYnNvY2tldEhvc3QoKSk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY29ubmVjdGVkJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY2xvc2VkLiBSZWNvbm5lY3RpbmcuLi4nKTtcclxuICAgICAgJHRpbWVvdXQoY29ubmVjdCwgMTAwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlICsgXCIgLSBTdGF0ZTogXCIgKyBjb25uZWN0aW9uLnJlYWR5U3RhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBwYXlsb2FkID0gSlNPTi5wYXJzZShlLmRhdGEpO1xyXG4gICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3dzOicgKyBwYXlsb2FkLnRvcGljLCBwYXlsb2FkLmRhdGEpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICB0aGlzLnNlbmQgPSBmdW5jdGlvbiAodG9waWMsIGRhdGEpIHtcclxuICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoe3RvcGljOiB0b3BpYywgZGF0YTogZGF0YX0pO1xyXG4gICAgY29ubmVjdGlvbi5zZW5kKGpzb24pO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuY29ubmVjdCA9IGNvbm5lY3Q7XHJcblxyXG59KS5ydW4oZnVuY3Rpb24gKFdlYlNvY2tldFN2Yykge1xyXG4gIFdlYlNvY2tldFN2Yy5jb25uZWN0KCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQXBwQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBMYW5ndWFnZVN2YywgVXNlclN2YywgJG1kVG9hc3QpIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiJWNZb3Ugc25lYWt5IGJ1Z2dlciFcIixcclxuICAgIFwiZm9udDogMmVtIHNhbnMtc2VyaWY7IGNvbG9yOiBEb2RnZXJCbHVlOyB0ZXh0LXNoYWRvdzogMnB4IDAgMCAjNDQ0LCAtMnB4IDAgMCAjNDQ0LCAwIDJweCAwICM0NDQsIDAgLTJweCAwICM0NDQsIDFweCAxcHggIzQ0NCwgLTFweCAtMXB4IDAgIzQ0NCwgMXB4IC0xcHggMCAjNDQ0LCAtMXB4IDFweCAwICM0NDQ7XCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiSSdtIGdsYWQgeW91J3JlIGN1cmlvdXMgd2hldGhlciBzb21ldGhpbmcgaXMgcG9wcGluZyB1cCBpbiBoZXJlLiBJJ20gYSBiaXQgb2YgYSBzdGlja2xlciB3aGVuIGl0IGNvbWVzIHRvIG1lc3NhZ2VzIGluIHRoZSBjb25zb2xlIHNvIEkgdHJ5IHRvIG1ha2Ugc3VyZSBvbmx5IHRoaW5ncyBJIHdhbnQgYXJlIHZpc2libGUuIFRoYXQgYmVpbmcgc2FpZCwgaWYgdGhlcmUgaXMgYSBiaWcgZXJyb3IgaGVyZSwgSSB3b3VsZCByZWFsbHkgYXBwcmVjaWF0ZSB5b3UgdGVsbGluZyBtZSBzbyBJIGNhbiBnZXQgcmlkIG9mIGl0IVwiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIlRoZSBjb2RlIGZvciBteSByZXN1bWUgaXMgaG9zdGVkIG9uIEdpdGh1YiBpZiB5b3UgcmVhbGx5IHdhbnQgdG8gZ28gaW50byBhbGwgdGhpcyEgPT4gaHR0cHM6Ly9naXRodWIuY29tL0ZsYW5kZXJzQnVyZ2VyL3Jlc3VtZVwiLFxyXG4gICk7XHJcblxyXG4gICRzY29wZS50b2FzdCA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAkbWRUb2FzdC5zaG93KCRtZFRvYXN0LnNpbXBsZSgpLnRleHRDb250ZW50KG1lc3NhZ2UpLnBvc2l0aW9uKFwiYm90dG9tIHJpZ2h0XCIpLmhpZGVEZWxheSgzMDAwKSk7XHJcbiAgfTtcclxuICAvKlxyXG4gICAgJChkb2N1bWVudCkuYmluZChcImtleXVwIGtleWRvd25cIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGlmKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT0gODApe1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgICovXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gICQod2luZG93KS5sb2FkKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICQoXCIuY29udGVudFwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLmNoZWNrYm94LW1lbnVcIikub24oXCJjaGFuZ2VcIiwgXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuY2xvc2VzdChcImxpXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIsIHRoaXMuY2hlY2tlZCk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuYWxsb3ctZm9jdXNcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS50aGVtZUNvdW50ZXIgPSA2O1xyXG4gICRzY29wZS50b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgJHNjb3BlLnllYXIgPSAkc2NvcGUudG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAkc2NvcGUucmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XHJcblxyXG4gICRzY29wZS5mbGlwVGhlbWUgPSAoKSA9PiB7XHJcbiAgICAkKFwiLmxvYWRpbmdcIikuc2hvdygpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmhpZGUoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLmxvYWRpbmdcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAgICQoXCIuY29udGVudFwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gICAgfSwgODAwKTtcclxuICAgICRzY29wZS50aGVtZUNvdW50ZXIgPSAkc2NvcGUudGhlbWVDb3VudGVyIDwgNiA/ICRzY29wZS50aGVtZUNvdW50ZXIgKyAxIDogKCRzY29wZS50aGVtZUNvdW50ZXIgPSAxKTtcclxuICB9O1xyXG5cclxuICAkLmdldEpTT04oXCIvc2tpbGxzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5za2lsbHMgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIHNraWxsLmVuYWJsZWQ7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2hvYmJpZXMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmhvYmJpZXMgPSBkYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvZXhwZXJpZW5jZS5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuam9icyA9IGRhdGE7XHJcbiAgICAkc2NvcGUuam9icy5mb3JFYWNoKChqb2IpID0+IHtcclxuICAgICAgam9iLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGpvYi5zdGFydERhdGUpO1xyXG4gICAgICBpZiAoam9iLmVuZERhdGUpIGpvYi5lbmREYXRlID0gbmV3IERhdGUoam9iLmVuZERhdGUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9jaGFyYWRlcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuY2hhcmFkZXMgPSBkYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZ2V0VGltZVNwYW4gPSAoam9iKSA9PiB7XHJcbiAgICByZXR1cm4gam9iLnN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpICsgKGpvYi5lbmREYXRlID8gXCIgLSBcIiArIGpvYi5lbmREYXRlLmdldEZ1bGxZZWFyKCkgOiBcIiAtIFRvZGF5XCIpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5sYW5ndWFnZXMgPSBMYW5ndWFnZVN2Yy5sYW5ndWFnZXM7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdExhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IExhbmd1YWdlU3ZjLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuaG92ZXJkaXYgPSAoZSwgZGl2aWQpID0+IHtcclxuICAgIHZhciBsZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xyXG4gICAgdmFyIHRvcCA9IGUuY2xpZW50WSArIDIwICsgXCJweFwiO1xyXG5cclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZpZCk7XHJcblxyXG4gICAgJChcIiNcIiArIGRpdmlkKS5jc3MoXCJsZWZ0XCIsIGxlZnQpO1xyXG4gICAgJChcIiNcIiArIGRpdmlkKS5jc3MoXCJ0b3BcIiwgdG9wKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLnRvZ2dsZSgpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpIHtcclxuICAgIFVzZXJTdmMubG9naW4od2luZG93LmxvY2FsU3RvcmFnZS51c2VyKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBsb2dpbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICBsb2dpbih1c2VyKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xyXG4gICAgaWYgKCEkc2NvcGUubG9nZ2VkSW4pIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS51c2VyID0gdXNlci5faWQ7XHJcbiAgICAgICRzY29wZS5sb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAgICRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUgPSBuZXcgRGF0ZSgkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlKTtcclxuICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dpblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuJG9uKFwidXBkYXRlXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUpO1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKFwibG9hZGluZ1wiLCAoXywgdXNlcikgPT4ge1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgJChcIiNsb2FkaW5nLWljb25cIikuc2hvdygpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKFwibG9hZGVkXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5sb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBmaXJlYmFzZVxyXG4gICAgICAuYXV0aCgpXHJcbiAgICAgIC5zaWduT3V0KClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXHJcbiAgICAgICAgJHNjb3BlLmxvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICRzY29wZS4kYnJvYWRjYXN0KFwibG9nb3V0XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5mb3JtYXREYXRlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IG1vbnRocyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIHJldHVybiBkYXRlLmdldERhdGUoKSArIFwiLVwiICsgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0gKyBcIi1cIiArIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkFzdGVyb2lkc0N0cmxcIiwgZnVuY3Rpb24gKCRsb2NhdGlvbiwgJHNjb3BlLCBHYW1lU3ZjKSB7XHJcbiAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XHJcbiAgaWYgKCFjYW52YXMpIHtcclxuICAgICRsb2NhdGlvbi5wYXRoKFwiL2hvbWVcIik7XHJcbiAgICByZXR1cm4gYWxlcnQoXCJcIik7XHJcbiAgfVxyXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgaWYgKCFjdHgpIHtcclxuICAgIHJldHVybiAkbG9jYXRpb24ucGF0aChcIi9ob21lXCIpO1xyXG4gIH1cclxuICBjdHguZm9udCA9IFwiMzBweCBDb21pYyBTYW5zIE1TXCI7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgbGV0IHNob3RzID0ge307XHJcbiAgY29uc3QgYXN0ZXJvaWRzID0ge307XHJcbiAgY29uc3QgcG93ZXJ1cHMgPSB7fTtcclxuICBjb25zdCBleHBsb3Npb25zID0ge307XHJcbiAgY29uc3QgbWFwID0ge307XHJcbiAgY29uc3Qgc3BhY2VwaWNzID0gMTA7XHJcbiAgbGV0IHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICBjb25zdCBwb3dlcnVwVHlwZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwic3BlZWRcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIk1heCBTcGVlZCDih6dcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgICAgc2l6ZTogWzE0LCAzNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLm1heFNwZWVkICs9IDEwMDtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiY29vbGRvd25cIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIkNvb2xkb3duIOKHqVwiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogMyxcclxuICAgICAgICBzaXplOiBbMTcsIDE3XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLmNvb2xkb3duVGltZSAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwicmFuZ2VcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIkZpcmluZyBSYW5nZSDih6dcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA0LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzMwLCA4XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAucmFuZ2UgKz0gNTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwic2hpZWxkXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJTaGllbGRcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA1LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzE5LCAxOV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnNoaWVsZCA9IHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIm51a2VcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIk51a2VcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgICAgc2l6ZTogWzE1LCAxNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICAgIGFzdGVyb2lkc1tpXS5leHBsb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYXduQXN0ZXJvaWRzKDUpO1xyXG4gICAgICB9LFxyXG4gICAgfSAvKlxyXG4gICAgJ3NpZGVfY2Fubm9ucycsXHJcbiAgICAnbGFzZXInLFxyXG4gICAgJ3NoaWVsZCcsXHJcbiAgICAnbGlmZScsXHJcbiAgICAnbWlzc2lsZXMnLFxyXG4gICAgJ251a2UnXHJcbiAgICAqLyxcclxuICBdO1xyXG4gIHBvd2VydXBUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChwb3dlcnVwLCBpLCBhcnJheSkge1xyXG4gICAgYXJyYXlbaV0uaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL1wiICsgcG93ZXJ1cC5uYW1lICsgXCIucG5nXCI7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBleHBsb3Npb25JbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGV4cGxvc2lvbkltYWdlLnNyYyA9IFwiYXN0ZXJvaWRzL2V4cGxvc2lvbi5wbmdcIjtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImtleWRvd25cIixcclxuICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIHRydWUsXHJcbiAgKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwia2V5dXBcIixcclxuICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB0cnVlLFxyXG4gICk7XHJcblxyXG4gICRzY29wZS5oaWdoc2NvcmUgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBldmFsdWF0ZUtleXMoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICAvL1NwYWNlXHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNob290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzddKSB7XHJcbiAgICAgICAgLy9MZWZ0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMzYwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gLT0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOV0pIHtcclxuICAgICAgICAvL1JpZ2h0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMzYwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gKz0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOF0pIHtcclxuICAgICAgICAvL1VwIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA8PSBzcGFjZXNoaXAubWF4U3BlZWQpIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCArPSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkLS07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbNDBdKSB7XHJcbiAgICAgICAgLy9Eb3duIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCAtPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICBzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTcGFjZXNoaXAoKSB7XHJcbiAgICB0aGlzLndpZHRoID0gNTA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDUwO1xyXG4gICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgIHRoaXMucmFuZ2UgPSA4MDtcclxuICAgIHRoaXMuY2Fubm9uID0ge1xyXG4gICAgICB4OiB0aGlzLndpZHRoIC8gMiAtIDQuNSxcclxuICAgICAgeTogdGhpcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgKiAwLjA3ODEyNSxcclxuICAgIH07XHJcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcclxuICAgIHRoaXMuY29vbGRvd25UaW1lID0gMjA7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW2NhbnZhcy53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDJdO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL3NwYWNlc2hpcC5wbmdcIjtcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5tYXhTcGVlZCA9IDEwMDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gMDtcclxuICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG5cclxuICAgIHRoaXMuc2hvb3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuY29vbGRvd24gPSB0aGlzLmNvb2xkb3duVGltZTtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgc2hvdHNbaWRdID0gbmV3IFNob3QoaWQsIHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguYXJjKHRoaXMucG9zaXRpb25bMF0gKyB0aGlzLndpZHRoIC8gMiwgdGhpcy5wb3NpdGlvblsxXSArIHRoaXMuaGVpZ2h0IC8gMiwgMzAsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMzUsIDIzNywgODYsIDAuNSlcIjtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYig2NiwgMTY4LCAzNiwgMC44KVwiO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgICAgdmFyIGFzdGVyb2lkID0gYXN0ZXJvaWRzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoYXN0ZXJvaWQsIHRoaXMpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zaGllbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYXN0ZXJvaWQuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdhbWVPdmVyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICBpZiAodGhpcy5jb29sZG93biA+IDApIHtcclxuICAgICAgICB0aGlzLmNvb2xkb3duLS07XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTaG90KGlkLCBzcGFjZXNoaXApIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbXHJcbiAgICAgIHNwYWNlc2hpcC5wb3NpdGlvblswXSArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi54ICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnggKiBNYXRoLmNvcygoKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKSxcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzFdICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnkgK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueSAqIE1hdGguc2luKCgoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSkgLyAxODApLFxyXG4gICAgXTtcclxuICAgIHRoaXMud2lkdGggPSA5O1xyXG4gICAgdGhpcy5oZWlnaHQgPSAxNTtcclxuICAgIHRoaXMuYW5nbGUgPSBzcGFjZXNoaXAuYW5nbGU7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gc3BhY2VzaGlwLnJvdGF0aW9uO1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwYWNlc2hpcC5zcGVlZCArIDUwMDtcclxuICAgIHRoaXMubGlmZXNwYW4gPSBzcGFjZXNoaXAucmFuZ2U7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvc2hvdC5wbmdcIjtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBBc3Rlcm9pZChpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy53aWR0aCA9IE1hdGgucmFuZG9tKCkgKiA1MCArIDIwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMucm90YXRpb25TcGVlZCA9IE1hdGgucmFuZG9tKCkgKiA2IC0gMztcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMzAwICsgMjtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBcImFzdGVyb2lkcy9hc3Rlcm9pZFwiICsgKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDYpICsgMSkgKyBcIi5wbmdcIjtcclxuXHJcbiAgICB0aGlzLmV4cGxvZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGV4cGxvc2lvbnNbdGhpcy5pZF0gPSBuZXcgRXhwbG9zaW9uKHRoaXMpO1xyXG4gICAgICByZXR1cm4gZGVsZXRlIGFzdGVyb2lkc1t0aGlzLmlkXTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZDtcclxuICAgICAgaWYgKHRoaXMucm90YXRpb24gPiAzNjApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gdGhpcy5yb3RhdGlvbiAtIDM2MDtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnJvdGF0aW9uIDwgMCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSAzNjAgKyB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgICB2YXIgc2hvdCA9IHNob3RzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoc2hvdCwgdGhpcykpIHtcclxuICAgICAgICAgIHRoaXMuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgdmFyIHBvaW50cyA9IE1hdGguZmxvb3IoKHNob3Quc3BlZWQgLSA1MDApIC8gMTAgKyA3MCAtIHRoaXMud2lkdGgpO1xyXG4gICAgICAgICAgaWYgKE1hdGguZmxvb3IoKHBvaW50cyArICRzY29wZS5zY29yZSkgLyAxMDApID4gTWF0aC5mbG9vcigkc2NvcGUuc2NvcmUgLyAxMDApKSB7XHJcbiAgICAgICAgICAgIHNwYXduUG93ZXJ1cCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJHNjb3BlLnNjb3JlICs9IHBvaW50cztcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIGRlbGV0ZSBzaG90c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBFeHBsb3Npb24ob2JqZWN0KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW29iamVjdC5wb3NpdGlvblswXSwgb2JqZWN0LnBvc2l0aW9uWzFdXTtcclxuICAgIHRoaXMud2lkdGggPSBvYmplY3Qud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9iamVjdC5oZWlnaHQ7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5jeWNsZSA9IHtcclxuICAgICAgcm93czogNixcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgc2l6ZTogWzI1NiwgMjU2XSxcclxuICAgICAgaTogMCxcclxuICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgfTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSA0NztcclxuICAgIHRoaXMuaW1nID0gZXhwbG9zaW9uSW1hZ2U7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuY3ljbGUuaSsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gUG93ZXJ1cChpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wb3dlcnVwID0gcG93ZXJ1cFR5cGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvd2VydXBUeXBlcy5sZW5ndGgpXTtcclxuICAgIHRoaXMuY3ljbGUgPSB0aGlzLnBvd2VydXAuY3ljbGU7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gMTAwMDtcclxuICAgIGlmICh0aGlzLmN5Y2xlLnNpemVbMV0gPiB0aGlzLmN5Y2xlLnNpemVbMF0pIHtcclxuICAgICAgdGhpcy5oZWlnaHQgPSA0MDtcclxuICAgICAgdGhpcy53aWR0aCA9IE1hdGgucm91bmQoKHRoaXMuaGVpZ2h0IC8gdGhpcy5jeWNsZS5zaXplWzFdKSAqIHRoaXMuY3ljbGUuc2l6ZVswXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndpZHRoID0gNDA7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5yb3VuZCgodGhpcy53aWR0aCAvIHRoaXMuY3ljbGUuc2l6ZVswXSkgKiB0aGlzLmN5Y2xlLnNpemVbMV0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5pbWcgPSB0aGlzLnBvd2VydXAuaW1nO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDE1MCArIDUwO1xyXG4gICAgdmFyIGRlbGF5ID0gNTtcclxuICAgIHRoaXMubW92ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhpdChzcGFjZXNoaXAsIHRoaXMpKSB7XHJcbiAgICAgICAgJHNjb3BlLmFubm91bmNlID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2VtZW50ID0gdGhpcy5wb3dlcnVwLmFubm91bmNlbWVudDtcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB0aGlzLnBvd2VydXAuYWN0aXZhdGUoc3BhY2VzaGlwKTtcclxuICAgICAgICByZXR1cm4gZGVsZXRlIHBvd2VydXBzW3RoaXMuaWRdO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKGRlbGF5IDw9IDApIHtcclxuICAgICAgICBpZiAodGhpcy5jeWNsZS5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLmktLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsYXkgPSA1O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGF5LS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlKG9iamVjdCkge1xyXG4gICAgb2JqZWN0LnBvc2l0aW9uWzBdICs9IChvYmplY3Quc3BlZWQgLyAxMDApICogTWF0aC5jb3MoKChvYmplY3QuYW5nbGUgLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBvYmplY3QucG9zaXRpb25bMV0gKz0gKG9iamVjdC5zcGVlZCAvIDEwMCkgKiBNYXRoLnNpbigoKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIGlmIChvYmplY3QucG9zaXRpb25bMF0gPiBjYW52YXMud2lkdGgpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzBdID0gLW9iamVjdC53aWR0aDtcclxuICAgIH0gZWxzZSBpZiAob2JqZWN0LnBvc2l0aW9uWzBdIDwgLW9iamVjdC53aWR0aCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMF0gPSBjYW52YXMud2lkdGg7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0LnBvc2l0aW9uWzFdID4gY2FudmFzLmhlaWdodCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMV0gPSAtb2JqZWN0LmhlaWdodDtcclxuICAgIH0gZWxzZSBpZiAob2JqZWN0LnBvc2l0aW9uWzFdIDwgLW9iamVjdC5oZWlnaHQpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzFdID0gY2FudmFzLmhlaWdodDtcclxuICAgIH1cclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHgudHJhbnNsYXRlKG9iamVjdC5wb3NpdGlvblswXSwgb2JqZWN0LnBvc2l0aW9uWzFdKTtcclxuICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LndpZHRoIC8gMiwgb2JqZWN0LmhlaWdodCAvIDIpO1xyXG4gICAgY3R4LnJvdGF0ZSgob2JqZWN0LnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgaWYgKG9iamVjdC5jeWNsZSkge1xyXG4gICAgICB2YXIgY29sdW1uID0gb2JqZWN0LmN5Y2xlLmkgJSBvYmplY3QuY3ljbGUuY29sdW1ucztcclxuICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3Iob2JqZWN0LmN5Y2xlLmkgLyBvYmplY3QuY3ljbGUuY29sdW1ucyk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgb2JqZWN0LmltZyxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVswXSAqIGNvbHVtbixcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVsxXSAqIHJvdyxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVswXSxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVsxXSxcclxuICAgICAgICAtb2JqZWN0LndpZHRoIC8gMixcclxuICAgICAgICAtb2JqZWN0LmhlaWdodCAvIDIsXHJcbiAgICAgICAgb2JqZWN0LndpZHRoLFxyXG4gICAgICAgIG9iamVjdC5oZWlnaHQsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAob2JqZWN0LmN5Y2xlLmkgPD0gMCkge1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5pID0gMDtcclxuICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChvYmplY3QuY3ljbGUuaSA+PSBvYmplY3QuY3ljbGUuY29sdW1ucyAqIG9iamVjdC5jeWNsZS5yb3dzKSB7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSBvYmplY3QuY3ljbGUuY29sdW1ucyAqIG9iamVjdC5jeWNsZS5yb3dzIC0gMTtcclxuICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2Uob2JqZWN0LmltZywgLW9iamVjdC53aWR0aCAvIDIsIC1vYmplY3QuaGVpZ2h0IC8gMiwgb2JqZWN0LndpZHRoLCBvYmplY3QuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgc3BhY2VzaGlwO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgICRzY29wZS5wbGF5aW5nID0gdHJ1ZTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGFjZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwYWNlcGljcyk7XHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICBzcGFjZXNoaXAgPSBuZXcgU3BhY2VzaGlwKCk7XHJcbiAgICAkc2NvcGUuc2NvcmUgPSAwO1xyXG4gICAgc3Bhd25Bc3Rlcm9pZHMoNSk7XHJcbiAgICBhdXRvU3Bhd24oKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEVudHJ5UG9zaXRpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIGdyaWRYID0gTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICB2YXIgZ3JpZFkgPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciB4LFxyXG4gICAgICB5ID0gMDtcclxuICAgIGlmIChncmlkWCA+PSAxKSB7XHJcbiAgICAgIHggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xyXG4gICAgICBpZiAoeSA+PSAxKSB7XHJcbiAgICAgICAgeSA9IDAgLSBoZWlnaHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeSA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcclxuICAgICAgaWYgKGdyaWRZID49IDEpIHtcclxuICAgICAgICB4ID0gMCAtIHdpZHRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHggPSBjYW52YXMud2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbeCwgeV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoaXQob2JqZWN0MSwgb2JqZWN0Mikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgb2JqZWN0MS5wb3NpdGlvblswXSA8IG9iamVjdDIucG9zaXRpb25bMF0gKyBvYmplY3QyLndpZHRoICYmXHJcbiAgICAgIG9iamVjdDIucG9zaXRpb25bMF0gPCBvYmplY3QxLnBvc2l0aW9uWzBdICsgb2JqZWN0MS53aWR0aCAmJlxyXG4gICAgICBvYmplY3QxLnBvc2l0aW9uWzFdIDwgb2JqZWN0Mi5wb3NpdGlvblsxXSArIG9iamVjdDIuaGVpZ2h0ICYmXHJcbiAgICAgIG9iamVjdDIucG9zaXRpb25bMV0gPCBvYmplY3QxLnBvc2l0aW9uWzFdICsgb2JqZWN0MS5oZWlnaHRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhdXRvU3Bhd24oKSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoYXN0ZXJvaWRzKS5sZW5ndGggPCAyMDApIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgYXN0ZXJvaWRzW2lkXSA9IG5ldyBBc3Rlcm9pZChpZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYXV0b1NwYXduKCk7XHJcbiAgICAgIH0sIHNwYXduSW50ZXJ2YWwoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkludGVydmFsKCkge1xyXG4gICAgaWYgKCRzY29wZS5zY29yZSA8IDEwMDApIHtcclxuICAgICAgcmV0dXJuIDEwMDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDIwMDApIHtcclxuICAgICAgcmV0dXJuIDkwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgMzAwMCkge1xyXG4gICAgICByZXR1cm4gODAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA0MDAwKSB7XHJcbiAgICAgIHJldHVybiA3MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDUwMDApIHtcclxuICAgICAgcmV0dXJuIDYwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNjAwMCkge1xyXG4gICAgICByZXR1cm4gNTAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA3MDAwKSB7XHJcbiAgICAgIHJldHVybiA0MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDgwMDApIHtcclxuICAgICAgcmV0dXJuIDMwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAyMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkFzdGVyb2lkcyhhbW91bnQpIHtcclxuICAgIHZhciBpID0gMDtcclxuICAgIGRvIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgYXN0ZXJvaWRzW2lkXSA9IG5ldyBBc3Rlcm9pZChpZCk7XHJcbiAgICB9IHdoaWxlIChpKysgPD0gYW1vdW50KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduUG93ZXJ1cCgpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhwb3dlcnVwcykubGVuZ3RoIDwgMykge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBwb3dlcnVwc1tpZF0gPSBuZXcgUG93ZXJ1cChpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnYW1lT3ZlcigpIHtcclxuICAgICRzY29wZS5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO1xyXG4gICAgfVxyXG4gICAgc2hvdHMgPSB7fTtcclxuICAgIGlmICgkc2NvcGUubG9nZ2VkSW4pIHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzIDwgJHNjb3BlLnNjb3JlKSB7XHJcbiAgICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyLmhpZ2hzY29yZS5hc3Rlcm9pZHMgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgICAgR2FtZVN2Yy5zZXRIaWdoc2NvcmUoXCJhc3Rlcm9pZHNcIiwgJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCwgJHNjb3BlLnNjb3JlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdoc2NvcmUgPCAkc2NvcGUuc2NvcmUpIHtcclxuICAgICAgICAkc2NvcGUuaGlnaHNjb3JlID0gJHNjb3BlLnNjb3JlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTdGFydCBsaXN0ZW5pbmcgdG8gcmVzaXplIGV2ZW50cyBhbmRcclxuICAvLyBkcmF3IGNhbnZhcy5cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgIC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcbiAgICAvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuICAgIC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuICAgIC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcbiAgICByZXNpemVDYW52YXMoKTtcclxuICB9XHJcbiAgLy8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG4gIC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG4gIC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG4gIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMTtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogNTkpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZSgpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuXHJcbiAgdmFyIHRhbGx5ID0gMDtcclxuICB2YXIgZGlyZWN0aW9uID0gdHJ1ZTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgaWYgKHNob3RzW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvdHNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgIGFzdGVyb2lkc1tpXS5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gcG93ZXJ1cHMpIHtcclxuICAgICAgcG93ZXJ1cHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGV4cGxvc2lvbnMpIHtcclxuICAgICAgaWYgKGV4cGxvc2lvbnNbaV0ubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBleHBsb3Npb25zW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV4cGxvc2lvbnNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBldmFsdWF0ZUtleXMoKTtcclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzcGFjZXNoaXAubW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIGNhbnZhcy53aWR0aCwgMCk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjBcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjI1XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMC41XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMC43NVwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjEuMFwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgICAgY3R4LmZvbnQgPSBcIjYwcHggTW9ub3RvblwiO1xyXG4gICAgICBjdHguZmlsbFRleHQoXCJBc3Rlcm9pZHNcIiwgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIkFzdGVyb2lkc1wiKS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcclxuICAgICAgY3R4LmZvbnQgPSBcIjIwcHggQWxkcmljaFwiO1xyXG4gICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgXCJQcmVzcyBzcGFjZSB0byBzdGFydFwiLFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoXCJQcmVzcyBzcGFjZSB0byBzdGFydFwiKS53aWR0aCAvIDIsXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCAvIDIgKyAyMCxcclxuICAgICAgKTtcclxuICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgIFwiRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyXCIsXHJcbiAgICAgICAgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIkRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlclwiKS53aWR0aCAvIDIsXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCAtIDMwLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGFsbHkgKz0gZGlyZWN0aW9uID8gMSA6IC0xO1xyXG4gICAgaWYgKHRhbGx5ID4gMTAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMTAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAodGFsbHkgPCAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMDtcclxuICAgICAgZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuICB9XHJcblxyXG4gICRzY29wZS5zcGFjZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImFzdGVyb2lkcy9zcGFjZScgKyBzcGFjZSArICcuanBnXCIpJyxcclxuICAgIH07XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJCdWJibGVzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnViYmxlcy1wYWdlXCIpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIHZhciBidWJibGVzID0gW107XHJcbiAgdmFyIGNvbG9ycyA9IFtcIiNmZmMzMDBcIiwgXCIjZmY1NzMzXCIsIFwiI2M3MDAzOVwiLCBcIiM5MDBjM2VcIiwgXCIjNTcxODQ1XCJdO1xyXG5cclxuICBmdW5jdGlvbiBCdWJibGUoKSB7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gMDtcclxuICAgIHRoaXMucmFkaXVzID0gMTtcclxuICAgIHRoaXMuZXhwYW5kaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgIHRoaXMuY2lyY3VtZmVyZW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDUwKSArIDU7XHJcbiAgICB0aGlzLm1heFJhZGl1cyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDIwMCkgKyAyMDtcclxuICAgIHRoaXMueCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aCk7XHJcbiAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0KTtcclxuICAgIHRoaXMudnggPSBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMTtcclxuICAgIHRoaXMudnkgPSBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBidWJibGVzLmZvckVhY2goZnVuY3Rpb24gKGJ1YmJsZSkge1xyXG4gICAgICB2YXIgY29sb3IgPSBjb2xvcnNbTWF0aC5yb3VuZCgoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMpIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMoYnViYmxlLngsIGJ1YmJsZS55LCBidWJibGUucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbTWF0aC5yb3VuZCgoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMpIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcnNbY29sb3JzLmxlbmd0aCAtIE1hdGgucm91bmQoKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzKSAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9IChidWJibGUuY2lyY3VtZmVyZW5jZSAqIGJ1YmJsZS5yYWRpdXMpIC8gYnViYmxlLm1heFJhZGl1cztcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWx0ZXJCdWJibGVzKCkge1xyXG4gICAgYnViYmxlcy5wdXNoKG5ldyBCdWJibGUoKSk7XHJcbiAgICBidWJibGVzID0gYnViYmxlcy5maWx0ZXIoZnVuY3Rpb24gKGJ1YmJsZSkge1xyXG4gICAgICBpZiAoYnViYmxlLnJhZGl1cyA9PT0gYnViYmxlLm1heFJhZGl1cykge1xyXG4gICAgICAgIGJ1YmJsZS5leHBhbmRpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBidWJibGUueCArPSBidWJibGUudnggKiBidWJibGUuc3BlZWQ7XHJcbiAgICAgIGJ1YmJsZS55ICs9IGJ1YmJsZS52eSAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnJhZGl1cyArPSBidWJibGUuZXhwYW5kaW5nID8gMSA6IC0xO1xyXG4gICAgICByZXR1cm4gYnViYmxlLnJhZGl1cyA+IDA7XHJcbiAgICB9KTtcclxuICAgIGRyYXcoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuXHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG4gICAgLy8gZHJhdyBjYW52YXMuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgLy8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuICAgICAgLy8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcbiAgICAgIC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG4gICAgICAvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG4gICAgICByZXNpemVDYW52YXMoKTtcclxuICAgIH1cclxuICAgIC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuICAgIC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG4gICAgLy8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcbiAgICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1NSA6IDU2KTtcclxuICAgIH1cclxuICB9KSgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkNoYXJhZGVzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgJHNjb3BlLnNlbGVjdFdvcmQgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICRzY29wZS53b3JkID0gJHNjb3BlLmNoYXJhZGVzW2NhdGVnb3J5XVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldLmxlbmd0aCldO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQ29udGFjdEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRW1haWxTdmMpIHtcclxuICAkc2NvcGUub3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTcGFtXCIsXHJcbiAgICAgIHRleHQ6IFwiSSBhbSBhIHNwYW0gYm90IGFuZCBhdXRvbWF0aWNhbGx5IGNoZWNrIHRoZSBmaXJzdCBvcHRpb24gSSBmaW5kIVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPcHBvcnR1bml0eVwiLFxyXG4gICAgICB0ZXh0OiBcIllvdSBzZWVtIHRvIGhhdmUgdGhlIHNraWxscyBJIHNlZWssIEknZCBsaWtlIHRvIHRhbGsgYWJvdXQgc29tZSBvcHBvcnR1bml0aWVzLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZXN1bWVcIixcclxuICAgICAgdGV4dDogXCJJIGRpZyB0aGUgcmVzdW1lLCBob3cgZGlkIHlvdSBtYWtlIGl0P1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPdGhlclwiLFxyXG4gICAgICB0ZXh0OiBcIlN1bXRpbiBlbHNlIVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICAkc2NvcGUuY29udGFjdCA9IHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gICAgYWJvdXQ6IFwiXCIsXHJcbiAgICBtZXNzYWdlOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnNlbmRpbmcgPSB0cnVlO1xyXG4gICAgRW1haWxTdmMuc2VuZCh7XHJcbiAgICAgIGVtYWlsOiAkc2NvcGUuY29udGFjdC5lbWFpbCxcclxuICAgICAgbmFtZTogJHNjb3BlLmNvbnRhY3QubmFtZSxcclxuICAgICAgcGhvbmU6ICRzY29wZS5jb250YWN0LnBob25lLFxyXG4gICAgICBhYm91dDogJHNjb3BlLmNvbnRhY3QuYWJvdXQsXHJcbiAgICAgIG1lc3NhZ2U6ICRzY29wZS5jb250YWN0Lm1lc3NhZ2UsXHJcbiAgICB9KS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUudG9hc3QoXCJNZXNzYWdlIHNlbnRcIik7XHJcbiAgICAgICAgJHNjb3BlLnNlbnQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTUy4gc3RhdHVzPSVkLCB0ZXh0PSVzXCIsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UudGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgJHNjb3BlLnRvYXN0KFwiTWVzc2FnZSBzZW5kIGZhaWxlZFwiKTtcclxuICAgICAgICAkc2NvcGUuc2VuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRkFJTEVELiBlcnJvcj1cIiwgZXJyKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignRXhwZXJpZW5jZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICRzY29wZS5nZXRTa2lsbCA9IGZ1bmN0aW9uKHNraWxsQ29kZSkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2tpbGxzKSByZXR1cm47XHJcbiAgICByZXR1cm4gJHNjb3BlLnNraWxscy5maW5kKGZ1bmN0aW9uKHNraWxsKSB7XHJcbiAgICAgIHJldHVybiBza2lsbC5jb2RlID09PSBza2lsbENvZGU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignSG9iYmllc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAkLmdldEpTT04oJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vdXNlci9iZWxnb2NhbmFkaWFuL2Fib3V0Ly5qc29uJywgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRIb2JieSA9ICRzY29wZS5ob2JiaWVzWzBdO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0SG9iYnkgPSBmdW5jdGlvbiAoaG9iYnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gaG9iYnk7XHJcbiAgICAkc2NvcGUuaG9iYnlTZWxlY3RvclZpc2libGUgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd0hvYmJ5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpIHtcclxuICAgIGlmICghdmFsdWUuaW1hZ2VzKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdmFsdWUuaW1hZ2VzLmxlbmd0aCA+IDA7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignTGVtbWluZ3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgR2FtZVN2Yykge1xyXG5cclxuICB2YXIgTEVGVCA9IDA7XHJcbiAgdmFyIFJJR0hUID0gMTtcclxuXHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZW1taW5ncy1wYWdlJyk7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIHZhciBsZW1taW5nc0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgbGVtbWluZ3NJbWFnZS5zcmMgPSAnbGVtbWluZ3MvbGVtbWluZ3MucG5nJztcclxuICB2YXIgZGVjb3JJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGRlY29ySW1hZ2Uuc3JjID0gJ2xlbW1pbmdzL2RlY29yLnBuZyc7XHJcbiAgdmFyIGxlbW1pbmdzID0ge307XHJcbiAgdmFyIHN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgdmFyIGFjdGlvbnMgPSB7XHJcbiAgICB3YWxrOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMF0sXHJcbiAgICAgIGVuZDogWzMyMCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGh1aDoge1xyXG4gICAgICBzdGFydDogWzMyMCwgMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZmFsbDoge1xyXG4gICAgICBzdGFydDogWzAsIDgwXSxcclxuICAgICAgZW5kOiBbMTYwLCAxMDBdLFxyXG4gICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGZseToge1xyXG4gICAgICBzdGFydDogWzE2MCwgODBdLFxyXG4gICAgICBlbmQ6IFs0ODAsIDExMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc3RvcDoge1xyXG4gICAgICBzdGFydDogWzAsIDEyMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTQwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgY2xpbWI6IHtcclxuICAgICAgc3RhcnQ6IFswLCAxNjBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDE4NV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMjVdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwdW5jaDoge1xyXG4gICAgICBzdGFydDogWzAsIDI0MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMzAwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZGlnOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMzIwXSxcclxuICAgICAgZW5kOiBbMzIwLCAzNDVdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBMZW1taW5nKGluaXQpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNhbnZhcy53aWR0aCAtIDIwMCkpICsgMTAwLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLmhlaWdodCAtIDIwMCkpICsgMTAwXTtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSAqIDIgPiAxID8gTEVGVCA6IFJJR0hUO1xyXG4gICAgdGhpcy5hY3QgPSBmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb25zW2FjdGlvbl07XHJcbiAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gKDIwICogKHRoaXMuYWN0aW9uLnJvd3MgLSAxKSkpIC8gdGhpcy5hY3Rpb24ucm93cztcclxuICAgICAgdGhpcy5hbmltYXRpb24gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuYWN0KGluaXQpO1xyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSwgdGhpcy5wb3NpdGlvblsxXSk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gTEVGVCkge1xyXG4gICAgICAgIGN0eC5zY2FsZSgtMSwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UobGVtbWluZ3NJbWFnZSwgKHRoaXMud2lkdGggKiBjb2x1bW4pICsgdGhpcy5hY3Rpb24uc3RhcnRbMF0sICgodGhpcy5oZWlnaHQgKyAyMCkgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgaWYgKHRoaXMuYWN0aW9uLnJldmVyc2UpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlLS07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICF0aGlzLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICBpZiAodGhpcy5jeWNsZSA+PSB0aGlzLmFjdGlvbi5jb2x1bW5zICogdGhpcy5hY3Rpb24ucm93cykge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGF0Y2goKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gWzIwLCAyMF07XHJcbiAgICB0aGlzLmFjdGlvbiA9IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbODIsIDUwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgIHJvd3M6IDEwXHJcbiAgICB9XHJcbiAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICB0aGlzLmhlaWdodCA9ICh0aGlzLmFjdGlvbi5lbmRbMV0gLSB0aGlzLmFjdGlvbi5zdGFydFsxXSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICB0aGlzLm9wZW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgdmFyIGNvbHVtbiwgcm93O1xyXG4gICAgICBpZiAoc3RhcnRlZCkge1xyXG4gICAgICAgIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3IodGhpcy5jeWNsZSAvIHRoaXMuYWN0aW9uLmNvbHVtbnMpO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgOSkge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb2x1bW4gPSAwO1xyXG4gICAgICAgIHJvdyA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgY3R4LmRyYXdJbWFnZShkZWNvckltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKHRoaXMuaGVpZ2h0ICogcm93KSArIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gMSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25MZW1taW5nKCkge1xyXG4gICAgT2JqZWN0LmtleXMoYWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgbGVtbWluZ3NbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKV0gPSBuZXcgTGVtbWluZyhhY3Rpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdHJlc2l6ZUNhbnZhcygpO1xyXG5cdH1cclxuXHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0Ly8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcblx0Ly8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcblx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG5cdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1MCA6IDEwNSk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbiAgc3Bhd25MZW1taW5nKCk7XHJcbiAgbGV0IGhhdGNoID0gbmV3IEhhdGNoKClcclxuICBkcmF3KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBpZiAoIXN0YXJ0ZWQpIHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguZm9udD0nNDBweCBNb25vdG9uJztcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9ICcxMCc7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcclxuICAgICAgY3R4LnJlY3QoMTUsIGNhbnZhcy5oZWlnaHQgLSA0NSwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLndpZHRoICsgMjAsIGN0eC5tZWFzdXJlVGV4dCgnU3RhcnQnKS5oZWlnaHQgKyBjYW52YXMuaGVpZ2h0IC0gNDUpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ1N0YXJ0JywgMjAsIGNhbnZhcy5oZWlnaHQgLSA1MCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKHZhciBpIGluIGxlbW1pbmdzKSB7XHJcbiAgICAgICAgbGVtbWluZ3NbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYXRjaC5vcGVuKCk7XHJcbiAgICBzdGFydGVkID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGRyYXcoKTtcclxuICAgIH0sIDE1MCk7XHJcbiAgfVxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMaXN0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIENhdGVnb3JpZXNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IHRydWU7XHJcblxyXG4gICRzY29wZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5nZXRDYXRlZ29yaWVzKClcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICRzY29wZS50YXNrcyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpIGluICRzY29wZS5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaiBpbiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrcykge1xyXG4gICAgICAgICAgJHNjb3BlLnRhc2tzLnB1c2goe1xyXG4gICAgICAgICAgICBcImNhdGVnb3J5XCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUsXHJcbiAgICAgICAgICAgIFwidGFza1wiOiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrc1tqXS5uYW1lXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RDYXRlZ29yeSA9IGZ1bmN0aW9uKGNhdGVnb3J5KSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkVGFza3MgPSBbXTtcclxuICAgICRzY29wZS5zZWxlY3RhYmxlVGFza3MgPSBbXTtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcy5wdXNoKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgIH1cclxuICAgICRzY29wZS5zaG93Q2F0ZWdvcnkgPSBmYWxzZTtcclxuICAgICRzY29wZS5lbnRlcmVkQ2F0ZWdvcnkgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUubmV3Q2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSA9PT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkoJHNjb3BlLmNhdGVnb3JpZXNbaV0pO1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZENhdGVnb3J5KHtcclxuICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuaW5pdCgpO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0ubmFtZSA9PT0gdGFzaykge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0VGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5Lm5hbWUsIHtcclxuICAgICAgICB0YXNrOiB0YXNrXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLnB1c2goeyBuYW1lOiB0YXNrIH0pO1xyXG4gICAgICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1skc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRUYXNrID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUudW5zZWxlY3RUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RhYmxlVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5hZGRUYXNrID0gZnVuY3Rpb24odGFza0xpc3QsIHRhc2spIHtcclxuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnJlbW92ZVRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3Quc3BsaWNlKHRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zdGFydFByaW9yaXRpemluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5zZXRQcmlvcml0eUxpc3QoJHNjb3BlLnNlbGVjdGVkVGFza3MpO1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy9wcmlvcml0aXplJyk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldFF1ZXN0aW9ucyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2VsZWN0ZWRUYXNrcykgcmV0dXJuICcnO1xyXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9ICRzY29wZS5zZWxlY3RlZFRhc2tzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgY291bnRlciArPSBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiTG9naW5DdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG4gIC8vIEluaXRpYWxpemUgdGhlIEZpcmViYXNlVUkgV2lkZ2V0IHVzaW5nIEZpcmViYXNlLlxyXG4gIHZhciB1aSA9IG5ldyBmaXJlYmFzZXVpLmF1dGguQXV0aFVJKGZpcmViYXNlLmF1dGgoKSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2dvdXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB1aS5yZXNldCgpO1xyXG4gICAgc3RhcnRVSSgpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydFVJKCkge1xyXG4gICAgdWkuc3RhcnQoXCIjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lclwiLCB7XHJcbiAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgIHNpZ25JblN1Y2Nlc3M6IGZ1bmN0aW9uIChjdXJyZW50VXNlciwgY3JlZGVudGlhbCwgcmVkaXJlY3RVcmwpIHtcclxuICAgICAgICAgIC8vIE5vIHJlZGlyZWN0LlxyXG4gICAgICAgICAgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmF1dGgoKVxyXG4gICAgICAgICAgICAuY3VycmVudFVzZXIuZ2V0SWRUb2tlbih0cnVlKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoaWRUb2tlbikge1xyXG4gICAgICAgICAgICAgIFVzZXJTdmMuYXV0aGVudGljYXRlKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBjdXJyZW50VXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBjdXJyZW50VXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHBob3RvVVJMOiBjdXJyZW50VXNlci5waG90b1VSTCxcclxuICAgICAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IGN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQsXHJcbiAgICAgICAgICAgICAgICBpZFRva2VuOiBpZFRva2VuLFxyXG4gICAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwibG9naW5cIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWwtbG9naW5cIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAvLyRsb2NhdGlvbi5wYXRoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUudG9hc3QoXCJMb2dpbiBGYWlsZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gc2lnbkluRmFpbHVyZSBjYWxsYmFjayBtdXN0IGJlIHByb3ZpZGVkIHRvIGhhbmRsZSBtZXJnZSBjb25mbGljdHMgd2hpY2hcclxuICAgICAgICAvLyBvY2N1ciB3aGVuIGFuIGV4aXN0aW5nIGNyZWRlbnRpYWwgaXMgbGlua2VkIHRvIGFuIGFub255bW91cyB1c2VyLlxyXG4gICAgICAgIHNpZ25JbkZhaWx1cmU6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgLy8gRm9yIG1lcmdlIGNvbmZsaWN0cywgdGhlIGVycm9yLmNvZGUgd2lsbCBiZVxyXG4gICAgICAgICAgLy8gJ2ZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3QnLlxyXG4gICAgICAgICAgaWYgKGVycm9yLmNvZGUgIT0gXCJmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gVGhlIGNyZWRlbnRpYWwgdGhlIHVzZXIgdHJpZWQgdG8gc2lnbiBpbiB3aXRoLlxyXG4gICAgICAgICAgdmFyIGNyZWQgPSBlcnJvci5jcmVkZW50aWFsO1xyXG4gICAgICAgICAgLy8gQ29weSBkYXRhIGZyb20gYW5vbnltb3VzIHVzZXIgdG8gcGVybWFuZW50IHVzZXIgYW5kIGRlbGV0ZSBhbm9ueW1vdXNcclxuICAgICAgICAgIC8vIHVzZXIuXHJcbiAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgIC8vIEZpbmlzaCBzaWduLWluIGFmdGVyIGRhdGEgaXMgY29waWVkLlxyXG4gICAgICAgICAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoQ3JlZGVudGlhbChjcmVkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVpU2hvd246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vIFRoZSB3aWRnZXQgaXMgcmVuZGVyZWQuXHJcbiAgICAgICAgICAvLyBIaWRlIHRoZSBsb2FkZXIuXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2lnbkluU3VjY2Vzc1VybDogXCIvaG9tZVwiLFxyXG4gICAgICBzaWduSW5PcHRpb25zOiBbXHJcbiAgICAgICAgLy9maXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICAvLyBXaWxsIHVzZSBwb3B1cCBmb3IgSURQIFByb3ZpZGVycyBzaWduLWluIGZsb3cgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCwgcmVkaXJlY3QuXHJcbiAgICAgIHNpZ25JbkZsb3c6IFwicG9wdXBcIixcclxuICAgICAgLy8gT3RoZXIgY29uZmlnIG9wdGlvbnMuLi5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRVSSgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkZmlsdGVyLCBQb3N0c1N2Yykge1xyXG5cclxuICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkc2NvcGUucG9zdEJvZHkpIHtcclxuICAgICAgUG9zdHNTdmMuY3JlYXRlKHtcclxuICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBvc3RzU3ZjLmZldGNoKClcclxuICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5wb3N0cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oJ3dzOm5ld19wb3N0JywgZnVuY3Rpb24gKF8sIHBvc3QpIHtcclxuICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICBQb3N0c1N2Yy5nZXRQb3N0KHBvc3QpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5wb3N0cy51bnNoaWZ0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJQcm9maWxlQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFVzZXJTdmMpIHtcclxuICBjb25zdCBjb3VudHJpZXMgPSBbXHJcbiAgICB7IG5hbWU6IFwiQW5kb3JyYVwiLCBmbGFnOiBcImZsYWctYWRcIiwgdGlkYml0OiBcIlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIiwgZmxhZzogXCJmbGFnLWFlXCIgfSxcclxuICAgIHsgbmFtZTogXCJBZmdoYW5pc3RhblwiLCBmbGFnOiBcImZsYWctYWZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIiwgZmxhZzogXCJmbGFnLWFnXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbmd1aWxsYVwiLCBmbGFnOiBcImZsYWctYWlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFsYmFuaWFcIiwgZmxhZzogXCJmbGFnLWFsXCIgfSxcclxuICAgIHsgbmFtZTogXCJBcm1lbmlhXCIsIGZsYWc6IFwiZmxhZy1hbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW5nb2xhXCIsIGZsYWc6IFwiZmxhZy1hb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW50YXJjdGljYVwiLCBmbGFnOiBcImZsYWctYXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFyZ2VudGluYVwiLCBmbGFnOiBcImZsYWctYXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFtZXJpY2FuIFNvbW9hXCIsIGZsYWc6IFwiZmxhZy1hc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXVzdHJpYVwiLCBmbGFnOiBcImZsYWctYXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF1c3RyYWxpYVwiLCBmbGFnOiBcImZsYWctYXVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFydWJhXCIsIGZsYWc6IFwiZmxhZy1hd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiw4VsYW5kIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWF4XCIgfSxcclxuICAgIHsgbmFtZTogXCJBemVyYmFpamFuXCIsIGZsYWc6IFwiZmxhZy1helwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBmbGFnOiBcImZsYWctYmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhcmJhZG9zXCIsIGZsYWc6IFwiZmxhZy1iYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFuZ2xhZGVzaFwiLCBmbGFnOiBcImZsYWctYmRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGdpdW1cIiwgZmxhZzogXCJmbGFnLWJlXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdXJraW5hIEZhc29cIiwgZmxhZzogXCJmbGFnLWJmXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdWxnYXJpYVwiLCBmbGFnOiBcImZsYWctYmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhaHJhaW5cIiwgZmxhZzogXCJmbGFnLWJoXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdXJ1bmRpXCIsIGZsYWc6IFwiZmxhZy1iaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVuaW5cIiwgZmxhZzogXCJmbGFnLWJqXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBCYXJ0aMOpbGVteVwiLCBmbGFnOiBcImZsYWctYmxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlcm11ZGFcIiwgZmxhZzogXCJmbGFnLWJtXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcnVuZWkgXCIsIGZsYWc6IFwiZmxhZy1iblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9saXZpYSwgUGx1cmluYXRpb25hbCBTdGF0ZSBvZlwiLCBmbGFnOiBcImZsYWctYm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCIsIGZsYWc6IFwiZmxhZy1icVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJhemlsXCIsIGZsYWc6IFwiZmxhZy1iclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFoYW1hc1wiLCBmbGFnOiBcImZsYWctYnNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJodXRhblwiLCBmbGFnOiBcImZsYWctYnRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvdXZldCBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLWJ2XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3Rzd2FuYVwiLCBmbGFnOiBcImZsYWctYndcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGFydXNcIiwgZmxhZzogXCJmbGFnLWJ5XCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxpemVcIiwgZmxhZzogXCJmbGFnLWJ6XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW5hZGFcIiwgZmxhZzogXCJmbGFnLWNhXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb2NvcyAoS2VlbGluZykgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctY2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbmdvLCB0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGVcIiwgZmxhZzogXCJmbGFnLWNkXCIgfSxcclxuICAgIHsgbmFtZTogXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWNmXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb25nb1wiLCBmbGFnOiBcImZsYWctY2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3aXR6ZXJsYW5kXCIsIGZsYWc6IFwiZmxhZy1jaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ8O0dGUgZCdJdm9pcmVcIiwgZmxhZzogXCJmbGFnLWNpXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb29rIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWNrXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGlsZVwiLCBmbGFnOiBcImZsYWctY2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbWVyb29uXCIsIGZsYWc6IFwiZmxhZy1jbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hpbmFcIiwgZmxhZzogXCJmbGFnLWNuXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb2xvbWJpYVwiLCBmbGFnOiBcImZsYWctY29cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvc3RhIFJpY2FcIiwgZmxhZzogXCJmbGFnLWNyXCIgfSxcclxuICAgIHsgbmFtZTogXCJDdWJhXCIsIGZsYWc6IFwiZmxhZy1jdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FibyBWZXJkZVwiLCBmbGFnOiBcImZsYWctY3ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN1cmHDp2FvXCIsIGZsYWc6IFwiZmxhZy1jd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hyaXN0bWFzIElzbGFuZFwiLCBmbGFnOiBcImZsYWctY3hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN5cHJ1c1wiLCBmbGFnOiBcImZsYWctY3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN6ZWNoIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1jelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2VybWFueVwiLCBmbGFnOiBcImZsYWctZGVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRqaWJvdXRpXCIsIGZsYWc6IFwiZmxhZy1kalwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGVubWFya1wiLCBmbGFnOiBcImZsYWctZGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRvbWluaWNhXCIsIGZsYWc6IFwiZmxhZy1kbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRG9taW5pY2FuIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1kb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWxnZXJpYVwiLCBmbGFnOiBcImZsYWctZHpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVjdWFkb3JcIiwgZmxhZzogXCJmbGFnLWVjXCIgfSxcclxuICAgIHsgbmFtZTogXCJFc3RvbmlhXCIsIGZsYWc6IFwiZmxhZy1lZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWd5cHRcIiwgZmxhZzogXCJmbGFnLWVnXCIgfSxcclxuICAgIHsgbmFtZTogXCJXZXN0ZXJuIFNhaGFyYVwiLCBmbGFnOiBcImZsYWctZWhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVyaXRyZWFcIiwgZmxhZzogXCJmbGFnLWVyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTcGFpblwiLCBmbGFnOiBcImZsYWctZXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkV0aGlvcGlhXCIsIGZsYWc6IFwiZmxhZy1ldFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmlubGFuZFwiLCBmbGFnOiBcImZsYWctZmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZpamlcIiwgZmxhZzogXCJmbGFnLWZqXCIgfSxcclxuICAgIHsgbmFtZTogXCJGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcylcIiwgZmxhZzogXCJmbGFnLWZrXCIgfSxcclxuICAgIHsgbmFtZTogXCJNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIG9mXCIsIGZsYWc6IFwiZmxhZy1mbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmFyb2UgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctZm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyYW5jZVwiLCBmbGFnOiBcImZsYWctZnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdhYm9uXCIsIGZsYWc6IFwiZmxhZy1nYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZFwiLCBmbGFnOiBcImZsYWctZ2JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZW5hZGFcIiwgZmxhZzogXCJmbGFnLWdkXCIgfSxcclxuICAgIHsgbmFtZTogXCJHZW9yZ2lhXCIsIGZsYWc6IFwiZmxhZy1nZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIEd1aWFuYVwiLCBmbGFnOiBcImZsYWctZ2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1ZXJuc2V5XCIsIGZsYWc6IFwiZmxhZy1nZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2hhbmFcIiwgZmxhZzogXCJmbGFnLWdoXCIgfSxcclxuICAgIHsgbmFtZTogXCJHaWJyYWx0YXJcIiwgZmxhZzogXCJmbGFnLWdpXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVlbmxhbmRcIiwgZmxhZzogXCJmbGFnLWdsXCIgfSxcclxuICAgIHsgbmFtZTogXCJHYW1iaWFcIiwgZmxhZzogXCJmbGFnLWdtXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWluZWFcIiwgZmxhZzogXCJmbGFnLWduXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWFkZWxvdXBlXCIsIGZsYWc6IFwiZmxhZy1ncFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXF1YXRvcmlhbCBHdWluZWFcIiwgZmxhZzogXCJmbGFnLWdxXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVlY2VcIiwgZmxhZzogXCJmbGFnLWdyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctZ3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YXRlbWFsYVwiLCBmbGFnOiBcImZsYWctZ3RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YW1cIiwgZmxhZzogXCJmbGFnLWd1XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWluZWEtQmlzc2F1XCIsIGZsYWc6IFwiZmxhZy1nd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3V5YW5hXCIsIGZsYWc6IFwiZmxhZy1neVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9uZyBLb25nXCIsIGZsYWc6IFwiZmxhZy1oa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1obVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9uZHVyYXNcIiwgZmxhZzogXCJmbGFnLWhuXCIgfSxcclxuICAgIHsgbmFtZTogXCJDcm9hdGlhXCIsIGZsYWc6IFwiZmxhZy1oclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSGFpdGlcIiwgZmxhZzogXCJmbGFnLWh0XCIgfSxcclxuICAgIHsgbmFtZTogXCJIdW5nYXJ5XCIsIGZsYWc6IFwiZmxhZy1odVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSW5kb25lc2lhXCIsIGZsYWc6IFwiZmxhZy1pZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJlbGFuZFwiLCBmbGFnOiBcImZsYWctaWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklzcmFlbFwiLCBmbGFnOiBcImZsYWctaWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklzbGUgb2YgTWFuXCIsIGZsYWc6IFwiZmxhZy1pbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSW5kaWFcIiwgZmxhZzogXCJmbGFnLWluXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnlcIiwgZmxhZzogXCJmbGFnLWlvXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmFxXCIsIGZsYWc6IFwiZmxhZy1pcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJhbiwgSXNsYW1pYyBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctaXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkljZWxhbmRcIiwgZmxhZzogXCJmbGFnLWlzXCIgfSxcclxuICAgIHsgbmFtZTogXCJJdGFseVwiLCBmbGFnOiBcImZsYWctaXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkplcnNleVwiLCBmbGFnOiBcImZsYWctamVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkphbWFpY2FcIiwgZmxhZzogXCJmbGFnLWptXCIgfSxcclxuICAgIHsgbmFtZTogXCJKb3JkYW5cIiwgZmxhZzogXCJmbGFnLWpvXCIgfSxcclxuICAgIHsgbmFtZTogXCJKYXBhblwiLCBmbGFnOiBcImZsYWctanBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktlbnlhXCIsIGZsYWc6IFwiZmxhZy1rZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS3lyZ3l6c3RhblwiLCBmbGFnOiBcImZsYWcta2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbWJvZGlhXCIsIGZsYWc6IFwiZmxhZy1raFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2lyaWJhdGlcIiwgZmxhZzogXCJmbGFnLWtpXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb21vcm9zXCIsIGZsYWc6IFwiZmxhZy1rbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsIGZsYWc6IFwiZmxhZy1rblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWtwXCIgfSxcclxuICAgIHsgbmFtZTogXCJLb3JlYSwgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWtyXCIgfSxcclxuICAgIHsgbmFtZTogXCJLdXdhaXRcIiwgZmxhZzogXCJmbGFnLWt3XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYXltYW4gSXNsYW5kc1wiLCBmbGFnOiBcImZsYWcta3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkthemFraHN0YW5cIiwgZmxhZzogXCJmbGFnLWt6XCIgfSxcclxuICAgIHsgbmFtZTogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctbGFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxlYmFub25cIiwgZmxhZzogXCJmbGFnLWxiXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBMdWNpYVwiLCBmbGFnOiBcImZsYWctbGNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpZWNodGVuc3RlaW5cIiwgZmxhZzogXCJmbGFnLWxpXCIgfSxcclxuICAgIHsgbmFtZTogXCJTcmkgTGFua2FcIiwgZmxhZzogXCJmbGFnLWxrXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWJlcmlhXCIsIGZsYWc6IFwiZmxhZy1sclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGVzb3Rob1wiLCBmbGFnOiBcImZsYWctbHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpdGh1YW5pYVwiLCBmbGFnOiBcImZsYWctbHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkx1eGVtYm91cmdcIiwgZmxhZzogXCJmbGFnLWx1XCIgfSxcclxuICAgIHsgbmFtZTogXCJMYXR2aWFcIiwgZmxhZzogXCJmbGFnLWx2XCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWJ5YVwiLCBmbGFnOiBcImZsYWctbHlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vcm9jY29cIiwgZmxhZzogXCJmbGFnLW1hXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb25hY29cIiwgZmxhZzogXCJmbGFnLW1jXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb2xkb3ZhLCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctbWRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbnRlbmVncm9cIiwgZmxhZzogXCJmbGFnLW1lXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KVwiLCBmbGFnOiBcImZsYWctbWZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hZGFnYXNjYXJcIiwgZmxhZzogXCJmbGFnLW1nXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXJzaGFsbCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1taFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFjZWRvbmlhLCB0aGUgZm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1ta1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsaVwiLCBmbGFnOiBcImZsYWctbWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk15YW5tYXJcIiwgZmxhZzogXCJmbGFnLW1tXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb25nb2xpYVwiLCBmbGFnOiBcImZsYWctbW5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hY2FvXCIsIGZsYWc6IFwiZmxhZy1tb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1tcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFydGluaXF1ZVwiLCBmbGFnOiBcImZsYWctbXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hdXJpdGFuaWFcIiwgZmxhZzogXCJmbGFnLW1yXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb250c2VycmF0XCIsIGZsYWc6IFwiZmxhZy1tc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsdGFcIiwgZmxhZzogXCJmbGFnLW10XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXVyaXRpdXNcIiwgZmxhZzogXCJmbGFnLW11XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxkaXZlc1wiLCBmbGFnOiBcImZsYWctbXZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGF3aVwiLCBmbGFnOiBcImZsYWctbXdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1leGljb1wiLCBmbGFnOiBcImZsYWctbXhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGF5c2lhXCIsIGZsYWc6IFwiZmxhZy1teVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW96YW1iaXF1ZVwiLCBmbGFnOiBcImZsYWctbXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hbWliaWFcIiwgZmxhZzogXCJmbGFnLW5hXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXcgQ2FsZWRvbmlhXCIsIGZsYWc6IFwiZmxhZy1uY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmlnZXJcIiwgZmxhZzogXCJmbGFnLW5lXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3Jmb2xrIElzbGFuZFwiLCBmbGFnOiBcImZsYWctbmZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pZ2VyaWFcIiwgZmxhZzogXCJmbGFnLW5nXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWNhcmFndWFcIiwgZmxhZzogXCJmbGFnLW5pXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXRoZXJsYW5kc1wiLCBmbGFnOiBcImZsYWctbmxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcndheVwiLCBmbGFnOiBcImZsYWctbm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5lcGFsXCIsIGZsYWc6IFwiZmxhZy1ucFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmF1cnVcIiwgZmxhZzogXCJmbGFnLW5yXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaXVlXCIsIGZsYWc6IFwiZmxhZy1udVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV3IFplYWxhbmRcIiwgZmxhZzogXCJmbGFnLW56XCIgfSxcclxuICAgIHsgbmFtZTogXCJPbWFuXCIsIGZsYWc6IFwiZmxhZy1vbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFuYW1hXCIsIGZsYWc6IFwiZmxhZy1wYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGVydVwiLCBmbGFnOiBcImZsYWctcGVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBQb2x5bmVzaWFcIiwgZmxhZzogXCJmbGFnLXBmXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYXB1YSBOZXcgR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1wZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGhpbGlwcGluZXNcIiwgZmxhZzogXCJmbGFnLXBoXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWtpc3RhblwiLCBmbGFnOiBcImZsYWctcGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBvbGFuZFwiLCBmbGFnOiBcImZsYWctcGxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIiwgZmxhZzogXCJmbGFnLXBtXCIgfSxcclxuICAgIHsgbmFtZTogXCJQaXRjYWlyblwiLCBmbGFnOiBcImZsYWctcG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlB1ZXJ0byBSaWNvXCIsIGZsYWc6IFwiZmxhZy1wclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwiLCBmbGFnOiBcImZsYWctcHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBvcnR1Z2FsXCIsIGZsYWc6IFwiZmxhZy1wdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFsYXVcIiwgZmxhZzogXCJmbGFnLXB3XCIgfSxcclxuICAgIHsgbmFtZTogXCJQYXJhZ3VheVwiLCBmbGFnOiBcImZsYWctcHlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlFhdGFyXCIsIGZsYWc6IFwiZmxhZy1xYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUsOpdW5pb25cIiwgZmxhZzogXCJmbGFnLXJlXCIgfSxcclxuICAgIHsgbmFtZTogXCJSb21hbmlhXCIsIGZsYWc6IFwiZmxhZy1yb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2VyYmlhXCIsIGZsYWc6IFwiZmxhZy1yc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUnVzc2lhbiBGZWRlcmF0aW9uXCIsIGZsYWc6IFwiZmxhZy1ydVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUndhbmRhXCIsIGZsYWc6IFwiZmxhZy1yd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2F1ZGkgQXJhYmlhXCIsIGZsYWc6IFwiZmxhZy1zYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU29sb21vbiBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1zYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2V5Y2hlbGxlc1wiLCBmbGFnOiBcImZsYWctc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN1ZGFuXCIsIGZsYWc6IFwiZmxhZy1zZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dlZGVuXCIsIGZsYWc6IFwiZmxhZy1zZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2luZ2Fwb3JlXCIsIGZsYWc6IFwiZmxhZy1zZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGFcIiwgZmxhZzogXCJmbGFnLXNoXCIgfSxcclxuICAgIHsgbmFtZTogXCJTbG92ZW5pYVwiLCBmbGFnOiBcImZsYWctc2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIiwgZmxhZzogXCJmbGFnLXNqXCIgfSxcclxuICAgIHsgbmFtZTogXCJTbG92YWtpYVwiLCBmbGFnOiBcImZsYWctc2tcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpZXJyYSBMZW9uZVwiLCBmbGFnOiBcImZsYWctc2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbiBNYXJpbm9cIiwgZmxhZzogXCJmbGFnLXNtXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZW5lZ2FsXCIsIGZsYWc6IFwiZmxhZy1zblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU29tYWxpYVwiLCBmbGFnOiBcImZsYWctc29cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN1cmluYW1lXCIsIGZsYWc6IFwiZmxhZy1zclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggU3VkYW5cIiwgZmxhZzogXCJmbGFnLXNzXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIiwgZmxhZzogXCJmbGFnLXN0XCIgfSxcclxuICAgIHsgbmFtZTogXCJFbCBTYWx2YWRvclwiLCBmbGFnOiBcImZsYWctc3ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIiwgZmxhZzogXCJmbGFnLXN4XCIgfSxcclxuICAgIHsgbmFtZTogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctc3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3YXppbGFuZFwiLCBmbGFnOiBcImZsYWctc3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctdGNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoYWRcIiwgZmxhZzogXCJmbGFnLXRkXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXNcIiwgZmxhZzogXCJmbGFnLXRmXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb2dvXCIsIGZsYWc6IFwiZmxhZy10Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGhhaWxhbmRcIiwgZmxhZzogXCJmbGFnLXRoXCIgfSxcclxuICAgIHsgbmFtZTogXCJUYWppa2lzdGFuXCIsIGZsYWc6IFwiZmxhZy10alwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9rZWxhdVwiLCBmbGFnOiBcImZsYWctdGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRpbW9yLUxlc3RlXCIsIGZsYWc6IFwiZmxhZy10bFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya21lbmlzdGFuXCIsIGZsYWc6IFwiZmxhZy10bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVuaXNpYVwiLCBmbGFnOiBcImZsYWctdG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRvbmdhXCIsIGZsYWc6IFwiZmxhZy10b1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya2V5XCIsIGZsYWc6IFwiZmxhZy10clwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wiLCBmbGFnOiBcImZsYWctdHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1dmFsdVwiLCBmbGFnOiBcImZsYWctdHZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmFcIiwgZmxhZzogXCJmbGFnLXR3XCIgfSxcclxuICAgIHsgbmFtZTogXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy10elwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVWtyYWluZVwiLCBmbGFnOiBcImZsYWctdWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVnYW5kYVwiLCBmbGFnOiBcImZsYWctdWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctdW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLCBmbGFnOiBcImZsYWctdXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVydWd1YXlcIiwgZmxhZzogXCJmbGFnLXV5XCIgfSxcclxuICAgIHsgbmFtZTogXCJVemJla2lzdGFuXCIsIGZsYWc6IFwiZmxhZy11elwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9seSBTZWVcIiwgZmxhZzogXCJmbGFnLXZhXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLCBmbGFnOiBcImZsYWctdmNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZlbmV6dWVsYSwgQm9saXZhcmlhbiBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctdmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzLCBCcml0aXNoXCIsIGZsYWc6IFwiZmxhZy12Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlyZ2luIElzbGFuZHMsIFUuUy5cIiwgZmxhZzogXCJmbGFnLXZpXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaWV0IE5hbVwiLCBmbGFnOiBcImZsYWctdm5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZhbnVhdHVcIiwgZmxhZzogXCJmbGFnLXZ1XCIgfSxcclxuICAgIHsgbmFtZTogXCJXYWxsaXMgYW5kIEZ1dHVuYVwiLCBmbGFnOiBcImZsYWctd2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbW9hXCIsIGZsYWc6IFwiZmxhZy13c1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiWWVtZW5cIiwgZmxhZzogXCJmbGFnLXllXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXlvdHRlXCIsIGZsYWc6IFwiZmxhZy15dFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggQWZyaWNhXCIsIGZsYWc6IFwiZmxhZy16YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiWmFtYmlhXCIsIGZsYWc6IFwiZmxhZy16bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiWmltYmFid2VcIiwgZmxhZzogXCJmbGFnLXp3XCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCB1cGRhdGVVc2VyRmxhZ3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUudXNlckZsYWdzID0gJHNjb3BlLmN1cnJlbnRVc2VyPy5mbGFnc1xyXG4gICAgICA/IGNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGNvdW50cnkpIHtcclxuICAgICAgICAgIHJldHVybiAkc2NvcGUuY3VycmVudFVzZXIuZmxhZ3MuaW5jbHVkZXMoY291bnRyeS5mbGFnKTtcclxuICAgICAgICB9KVxyXG4gICAgICA6IFtdO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5kYXRlT3B0aW9ucyA9IHtcclxuICAgIG1heERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZSgxOTAwLCAxLCAxKSxcclxuICAgIGluaXREYXRlOiBuZXcgRGF0ZSgyMDAwLCAxLCAxKSxcclxuICAgIGRhdGVwaWNrZXJNb2RlOiBcInllYXJcIixcclxuICB9O1xyXG5cclxuICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSB0cnVlO1xyXG4gICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9IHRydWU7XHJcblxyXG4gICRzY29wZS50b2dnbGVVc2VybmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS51c2VybmFtZVRvZ2dsZSA9ICEkc2NvcGUudXNlcm5hbWVUb2dnbGU7XHJcbiAgICAkc2NvcGUubmV3VXNlcm5hbWUgPSAkc2NvcGUuY3VycmVudFVzZXIudXNlcm5hbWU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLm5ld1Bhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5jb25maXJtUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gISRzY29wZS5wYXNzd29yZFRvZ2dsZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uIChwYXNzd29yZCkge1xyXG4gICAgaWYgKHBhc3N3b3JkKSB7XHJcbiAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgVXNlclN2Yy5jaGVja1Bhc3N3b3JkKHVzZXIsIHBhc3N3b3JkKS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAob2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgIGlmIChuZXdQYXNzd29yZCkge1xyXG4gICAgICBpZiAobmV3UGFzc3dvcmQgPT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgdmFyIHVzZXIgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICAgIFVzZXJTdmMuY2hhbmdlUGFzc3dvcmQodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKS50aGVuKFxyXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUudG9hc3QoXCJQYXNzd29yZCBjaGFuZ2VkXCIpO1xyXG4gICAgICAgICAgICAkc2NvcGUub2xkUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzY29wZS50b2FzdChcIlBhc3N3b3JkIGNoYW5nZSBmYWlsZWRcIik7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAkKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjZDMVwiIH0sIDIwMCkuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogb3JpZ2luYWxCZyB9LCAyMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXJuYW1lKSB7XHJcbiAgICAkc2NvcGUuJGVtaXQoXCJsb2FkaW5nXCIpO1xyXG4gICAgVXNlclN2Yy5jaGFuZ2VVc2VybmFtZSgkc2NvcGUuY3VycmVudFVzZXIuX2lkLCB1c2VybmFtZSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwidXBkYXRlXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLnRvYXN0KHVzZXJuYW1lICsgXCIgYWxyZWFkeSBpbiB1c2VcIik7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS51cGRhdGVVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLiRlbWl0KFwibG9hZGluZ1wiKTtcclxuICAgIFVzZXJTdmMudXBkYXRlVXNlcih7IC4uLiRzY29wZS5jdXJyZW50VXNlciwgZmxhZ3M6ICRzY29wZS51c2VyRmxhZ3MubWFwKCh7IGZsYWcgfSkgPT4gZmxhZykgfSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwidXBkYXRlXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUubG9hZENvdW50cmllcyA9IGZ1bmN0aW9uICgkcXVlcnkpIHtcclxuICAgIHJldHVybiBjb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChjb3VudHJ5KSB7XHJcbiAgICAgIHJldHVybiBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCRxdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCAoKSA9PiB7XHJcbiAgICB1cGRhdGVVc2VyRmxhZ3MoKTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignU2tpbGxzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR3aW5kb3cpIHtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkU2tpbGwgPSAwO1xyXG4gICRzY29wZS5za2lsbHNWaXNpYmxlID0gZmFsc2U7XHJcbiAgJHNjb3BlLnByb2plY3RzID0gW107XHJcblxyXG4gICRzY29wZS5sYWJlbHMgPSBbXCJEb3dubG9hZCBTYWxlc1wiLCBcIkluLVN0b3JlIFNhbGVzXCIsIFwiTWFpbC1PcmRlciBTYWxlc1wiXTtcclxuICAkc2NvcGUuZGF0YSA9IFszMDAsIDUwMCwgMTAwXTtcclxuXHJcbiAgJC5nZXRKU09OKCcvZXhwZXJpZW5jZS5qc29uJywgZnVuY3Rpb24oIGRhdGEgKSB7XHJcbiAgICAkc2NvcGUucHJvamVjdHMgPSBkYXRhLnJlZHVjZSgocHJvamVjdHMsIGVtcGxveWVyKSA9PiB7XHJcbiAgICAgIGlmIChlbXBsb3llci5wcm9qZWN0cykgcmV0dXJuIGVtcGxveWVyLnByb2plY3RzLmNvbmNhdChwcm9qZWN0cyk7XHJcbiAgICAgIGVsc2UgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgfSwge30pO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZmlsdGVyZWRQcm9qZWN0cyA9ICgpID0+ICRzY29wZS5wcm9qZWN0c1xyXG4gICAgLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5za2lsbHMgJiYgcHJvamVjdC5za2lsbHMuaW5jbHVkZXMoJHNjb3BlLnNlbGVjdGVkU2tpbGwuY29kZSkpXHJcblxyXG4gICQuZ2V0SlNPTignL3NraWxscy5qc29uJywgZnVuY3Rpb24oIGRhdGEgKSB7XHJcblxyXG4gICAgY29uc3Qgc2tpbGxzID0gZGF0YVxyXG4gICAgLmZpbHRlcigoc2tpbGwpID0+IHNraWxsLmVuYWJsZWQpXHJcblxyXG4gICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBza2lsbHNcclxuICAgIC5yZWR1Y2UoZnVuY3Rpb24oY2F0ZWdvcmllcywgc2tpbGwpIHtcclxuICAgICAgaWYgKCFjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldID0gW3NraWxsXVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldLnB1c2goc2tpbGwpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwgPSBmdW5jdGlvbiAoc2tpbGwpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwgPSBza2lsbDtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwuY2hhcnRPcHRpb25zID0ge1xyXG4gICAgICAgIGN1dG91dFBlcmNlbnRhZ2UgOiA4MCxcclxuICAgICAgICBjaXJjdW1mZXJlbmNlOiAyICogTWF0aC5QSSxcclxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwuY2hhcnRTdHlsZSA9IHtcclxuICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoL3NraWxscy8nICsgJHNjb3BlLnNlbGVjdGVkU2tpbGwuaW1hZ2UgKyAnKScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICc2MCUnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJzUwJSA1MCUnXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZFNraWxsKCRzY29wZS5za2lsbHNbMF0pO1xyXG5cclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkc2NlLCAkbG9jYXRpb24sIFRlblRoaW5nc1N2Yykge1xyXG4gICAgbGV0IHBhZ2UgPSAxO1xyXG4gICAgJHNjb3BlLmxpc3RzID0gW107XHJcbiAgICAkc2NvcGUuc2VhcmNoID0gXCJcIjtcclxuICAgICRzY29wZS5zZWFyY2hGaWVsZCA9IFwiYWxsXCI7XHJcbiAgICAkc2NvcGUubmV3SXRlbSA9IHt9O1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IFwiRU5cIjtcclxuICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gW107XHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW107XHJcbiAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICBsZXQgZXhoYXVzdGVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3Qgb2JqZWN0Q2F0ZWdvcmllcyA9IFtcImN1bHR1cmVcIiwgXCJuYXR1cmVcIiwgXCJtaXNjXCIsIFwic29jaWV0eVwiLCBcInNwb3J0c1wiXTtcclxuICAgICRzY29wZS5ibHVyYlR5cGVzID0gW1xyXG4gICAgICB7IGFwaTogXCJtb3ZpZXNcIiwgY2F0ZWdvcmllczogW1wibW92aWVzXCJdLCB0ZXh0OiBcIkdldCBtb3ZpZSBwb3N0ZXJzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwidHZcIiwgY2F0ZWdvcmllczogW1widGVsZXZpc2lvblwiXSwgdGV4dDogXCJHZXQgdHYgcG9zdGVyc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcImFjdG9yc1wiLCBjYXRlZ29yaWVzOiBbXCJtb3ZpZXNcIiwgXCJ0ZWxldmlzaW9uXCJdLCB0ZXh0OiBcIkdldCBhY3RvciBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwiYm9va3NcIiwgY2F0ZWdvcmllczogW1wibGl0ZXJhdHVyZVwiXSwgdGV4dDogXCJHZXQgYm9vayBjb3ZlcnNcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJtdXNpY3ZpZGVvc1wiLCBjYXRlZ29yaWVzOiBbXCJtdXNpY1wiXSwgdGV4dDogXCJHZXQgbXVzaWMgdmlkZW9zXCIsIGFkbWluT25seTogdHJ1ZSB9LFxyXG4gICAgICB7IGFwaTogXCJ1bnNwbGFzaFwiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBVbnNwbGFzaCBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwicGV4ZWxzXCIsIGNhdGVnb3JpZXM6IG9iamVjdENhdGVnb3JpZXMsIHRleHQ6IFwiR2V0IFBleGVscyBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwid2lraVwiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBXaWtpIHBpY3NcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgXTtcclxuXHJcbiAgICAkc2NvcGUuaGF2ZUNvbW1vbkl0ZW1zID0gKGFycjEsIGFycjIpID0+IHtcclxuICAgICAgcmV0dXJuIGFycjE/LnNvbWUoKGl0ZW0pID0+IGFycjIuaW5jbHVkZXMoaXRlbSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUua2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgLy8gVGFiXHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5jcmVhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICgkKFwiI25ldy12YWx1ZVwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAkKFwiI25ldy1ibHVyYlwiKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgfVxyXG4gICAgICAvLyB1c2UgZS5rZXlDb2RlXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hZGRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBcIm5ld1wiKTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNyZWF0b3I6ICRzY29wZS5jdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB2YWx1ZXM6IFtdLFxyXG4gICAgICAgIGFuc3dlcnM6IDAsXHJcbiAgICAgICAgaXNEeW5hbWljOiB0cnVlLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgIGxhbmd1YWdlOiAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgJHNjb3BlLnNlYXJjaCA9ICRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2g7XHJcbiAgICAgIGlmIChsaXN0KSB7XHJcbiAgICAgICAgaWYgKGxpc3QuX2lkID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAkc2NvcGUuYWRkTGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0Lmxhbmd1YWdlO1xyXG4gICAgICAgICAgICAgICRzY29wZS5yZWFkT25seSA9XHJcbiAgICAgICAgICAgICAgICAhJHNjb3BlLnNlbGVjdGVkTGlzdCB8fFxyXG4gICAgICAgICAgICAgICAgKCEkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4gJiZcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jcmVhdG9yLl9pZCAhPT0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCAmJlxyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHt9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldENhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldEZpbHRlckNvdW50ID0gKCkgPT5cclxuICAgICAgT2JqZWN0LnZhbHVlcygkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIpLmxlbmd0aCArIE9iamVjdC52YWx1ZXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKS5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY3VycmVudFVzZXIpIHJldHVybjtcclxuICAgICAgY29uc3QgeyBkYXRhOiBsYW5ndWFnZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKTtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IGxhbmd1YWdlcztcclxuICAgICAgcmVzZXRMYW5ndWFnZUZpbHRlcigpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3JpZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcclxuICAgICAgY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XHJcbiAgICAgIHJlc2V0Q2F0ZWdvcnlGaWx0ZXIoKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBsYW5ndWFnZVN0YXRzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMoKTtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBsYW5ndWFnZVN0YXRzLnJlZHVjZSgocmVzdWx0LCB7IF9pZCwgY291bnQgfSkgPT4ge1xyXG4gICAgICAgIHJlc3VsdFtfaWQubGFuZ3VhZ2VdID0gKHJlc3VsdFtfaWQubGFuZ3VhZ2VdIHx8IDApICsgY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSwge30pO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3J5U3RhdHMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cygpO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0cyA9IGNhdGVnb3J5U3RhdHMucmVkdWNlKChyZXN1bHQsIHsgX2lkLCBjb3VudCB9KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W19pZF0gPSBjb3VudDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCkge1xyXG4gICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoeyBfaWQ6ICRsb2NhdGlvbi5zZWFyY2goKS5saXN0IH0pO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5zZWFyY2ggPSAkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoIHx8IFwiXCI7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoTGlzdHMgPSBhc3luYyAodmlld1ZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2aWV3VmFsdWUubGVuZ3RoID49IDMpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5zZWFyY2hMaXN0cyh2aWV3VmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRTZWFyY2hUZXh0ID0gKHRleHQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5zZWFyY2gpIHtcclxuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCgkeyRzY29wZS5zZWFyY2h9KWAsIFwiZ2lcIik7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShyZWdleCwgXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz4kMTwvc3Bhbj5cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnZhbHVlT3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInZhbHVlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6ICRsb2NhdGlvbi5zZWFyY2goKS5zb3J0IHx8IFwiZGF0ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246ICRsb2NhdGlvbi5zZWFyY2goKS5vcmRlciA/ICRsb2NhdGlvbi5zZWFyY2goKS5vcmRlciA9PT0gXCJkZXNjXCIgOiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPSAhJHNjb3BlLm9yZGVyLmRpcmVjdGlvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcInNvcnRcIiwgZmllbGQpO1xyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwib3JkZXJcIiwgJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA/IFwiZGVzY1wiIDogXCJhc2NcIik7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TW9yZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxpc3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gJHNjb3BlLmxpc3RzLmNvbmNhdChsaXN0cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgIHBhZ2UgPSAxO1xyXG4gICAgICBleGhhdXN0ZWQgPSBmYWxzZTtcclxuICAgICAgZ2V0TGlzdHMoKS50aGVuKChsaXN0cykgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9IGxpc3RzO1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZUZpbHRlciA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9ICEkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsZXRlICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5RmlsdGVyID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmICgkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID09PSB0cnVlKSB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9ICEkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGV0ZSAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpO1xyXG4gICAgICBjb25zdCBhbGxDYXRlZ29yaWVzID1cclxuICAgICAgICBjYXRlZ29yaWVzLmxlbmd0aCA9PT0gY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldKS5sZW5ndGg7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9ICRzY29wZS5jYXRlZ29yaWVzLnJlZHVjZSgoZmlsdGVyLCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgIGZpbHRlcltjYXRlZ29yeV0gPSAhYWxsQ2F0ZWdvcmllcztcclxuICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Q2F0ZWdvcnlMYWJlbCA9IChjYXRlZ29yaWVzKSA9PiB7XHJcbiAgICAgIGlmICghY2F0ZWdvcmllcyB8fCBjYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFwiXCI7XHJcbiAgICAgIGNvbnN0IG1haW5DYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiAhY2F0ZWdvcnkuaW5jbHVkZXMoXCIuXCIpKTtcclxuICAgICAgcmV0dXJuIG1haW5DYXRlZ29yaWVzXHJcbiAgICAgICAgLnNvcnQoKVxyXG4gICAgICAgIC5tYXAoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBzdWJjYXRlZ29yaWVzID0gY2F0ZWdvcmllc1xyXG4gICAgICAgICAgICAuZmlsdGVyKChzdWJjYXRlZ29yeSkgPT4gc3ViY2F0ZWdvcnkuc3RhcnRzV2l0aChjYXRlZ29yeSkgJiYgc3ViY2F0ZWdvcnkgIT09IGNhdGVnb3J5KVxyXG4gICAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICAgIChzdWJjYXRlZ29yeSkgPT5cclxuICAgICAgICAgICAgICAgICRzY29wZS5jYXRlZ29yaWVzXHJcbiAgICAgICAgICAgICAgICAgIC5maW5kKCh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBjYXRlZ29yeSlcclxuICAgICAgICAgICAgICAgICAgLnN1YmNhdGVnb3JpZXMuZmluZCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gc3ViY2F0ZWdvcnkpPy5sYWJlbCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICRzY29wZS5jYXRlZ29yaWVzLmZpbmQoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGNhdGVnb3J5KS5sYWJlbCArXHJcbiAgICAgICAgICAgIChzdWJjYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyBcIiAoXCIgKyBzdWJjYXRlZ29yaWVzLnNvcnQoKS5qb2luKFwiLCBcIikgKyBcIilcIiA6IFwiXCIpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmpvaW4oXCIsIFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0TGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubG9hZGluZyB8fCBleGhhdXN0ZWQpIHJldHVybiBbXTtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLnNlYXJjaCAhPT0gJHNjb3BlLnNlYXJjaCkge1xyXG4gICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJzZWFyY2hcIiwgJHNjb3BlLnNlYXJjaCA/ICRzY29wZS5zZWFyY2ggOiBudWxsKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0cyh7XHJcbiAgICAgICAgcGFnZSxcclxuICAgICAgICBzb3J0Qnk6ICRzY29wZS5vcmRlci5maWVsZCxcclxuICAgICAgICBvcmRlckJ5OiAkc2NvcGUub3JkZXIuZGlyZWN0aW9uID8gLTEgOiAxLFxyXG4gICAgICAgIGxpbWl0OiAxMDAsXHJcbiAgICAgICAgLi4uKCRzY29wZS5zZWFyY2hGaWVsZCA9PT0gXCJhbGxcIiA/IHsgc2VhcmNoOiAkc2NvcGUuc2VhcmNoIH0gOiB7fSksXHJcbiAgICAgICAgLi4uKCRzY29wZS5zZWFyY2hGaWVsZCA9PT0gXCJuYW1lXCIgPyB7IG5hbWU6ICRzY29wZS5zZWFyY2ggfSA6IHt9KSxcclxuICAgICAgICBsYW5ndWFnZTogT2JqZWN0LmtleXMoJHNjb3BlLmxhbmd1YWdlRmlsdGVyKS5maWx0ZXIoKGxhbmd1YWdlKSA9PiAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2VdID09PSB0cnVlKSxcclxuICAgICAgICBjYXRlZ29yaWVzOiBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpLmZpbHRlcigoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPT09IHRydWUpLFxyXG4gICAgICAgIGxhbmd1YWdlTm90OiBPYmplY3Qua2V5cygkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIpLmZpbHRlcigobGFuZ3VhZ2UpID0+ICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZV0gPT09IGZhbHNlKSxcclxuICAgICAgICBjYXRlZ29yaWVzTm90OiBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpLmZpbHRlcihcclxuICAgICAgICAgIChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9PT0gZmFsc2UsXHJcbiAgICAgICAgKSxcclxuICAgICAgfSk7XHJcbiAgICAgICRzY29wZS5jb3VudCA9IGRhdGEuY291bnQ7XHJcbiAgICAgIGlmIChkYXRhLnJlc3VsdC5sZW5ndGggPCAxMDApIGV4aGF1c3RlZCA9IHRydWU7XHJcbiAgICAgIGVsc2UgcGFnZSA9IGRhdGEubmV4dFBhZ2U7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBQYWdlICR7cGFnZX0gbG9hZGVkLCAke2RhdGEucmVzdWx0Lmxlbmd0aH0gaXRlbXNgKTtcclxuICAgICAgcmV0dXJuIGRhdGEucmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdE5hbWUgPSAobGlzdElkKSA9PiAkc2NvcGUubGlzdHMuZmluZCgoeyBfaWQgfSkgPT4gX2lkID09PSBsaXN0SWQpPy5uYW1lO1xyXG5cclxuICAgICRzY29wZS51cGRhdGVWYWx1ZSA9IGFzeW5jIChpdGVtKSA9PiB7XHJcbiAgICAgIGlmICghaXRlbS52YWx1ZSkge1xyXG4gICAgICAgICRzY29wZS5kZWxldGVWYWx1ZShpdGVtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkSXRlbVJlc3BvbnNlID0gYXdhaXQgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKTtcclxuICAgICAgICBpdGVtLmJsdXJiVHlwZSA9IHVwZGF0ZWRJdGVtUmVzcG9uc2UuZGF0YS5ibHVyYlR5cGU7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGVWYWx1ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubmV3SXRlbS52YWx1ZSkgcmV0dXJuO1xyXG4gICAgICBpZiAoJHNjb3BlLmhhc0R1cGxpY2F0ZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KGAkeyRzY29wZS5uZXdJdGVtLnZhbHVlfSBpcyBhbHJlYWR5IGluIHRoZSBsaXN0YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoISRzY29wZS5zZWxlY3RlZExpc3QuX2lkKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMucHVzaCh7IC4uLiRzY29wZS5uZXdJdGVtIH0pO1xyXG4gICAgICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5sZW5ndGggPj0gMTApIHtcclxuICAgICAgICAgIGF3YWl0ICRzY29wZS51cHNlcnRMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVkSXRlbVJlc3BvbnNlID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmNyZWF0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCAkc2NvcGUubmV3SXRlbSk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMucHVzaChjcmVhdGVkSXRlbVJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5uZXdJdGVtLnZhbHVlKTtcclxuICAgICAgICAkc2NvcGUudG9hc3QoYFwiJHskc2NvcGUubmV3SXRlbS52YWx1ZX1cIiBhZGRlZGApO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlID0gXCJcIjtcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0uYmx1cmIgPSBcIlwiO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkKFwiI25ldy12YWx1ZVwiKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVWYWx1ZSA9IChpdGVtKSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5kZWxldGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgaXRlbSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5faWQgIT09IGl0ZW0uX2lkKTtcclxuICAgICAgICAkc2NvcGUudG9hc3QoYFwiJHtpdGVtLnZhbHVlfVwiIHJlbW92ZWRgKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS51cGRhdGVMaXN0ID0gKGxpc3QsIHVwZGF0ZXMpID0+IHtcclxuICAgICAgaWYgKGxpc3QuX2lkICYmIGxpc3QuX2lkICE9PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgLi4udXBkYXRlcyxcclxuICAgICAgICAgIF9pZDogbGlzdC5faWQsXHJcbiAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGNvbnN0IGxpc3RJbmRleCA9ICRzY29wZS5saXN0cy5maW5kSW5kZXgoKGxpc3QpID0+IGxpc3QuX2lkID09PSBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdHNbbGlzdEluZGV4XSA9IGRhdGE7XHJcbiAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwc2VydExpc3QgPSAobGlzdCwgdXBkYXRlcykgPT4ge1xyXG4gICAgICAkc2NvcGUuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKGxpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCAmJiBsaXN0Lm5hbWUgJiYgbGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAobGlzdC5faWQgJiYgbGlzdC5faWQgIT09IFwibmV3XCIpIHtcclxuICAgICAgICAgIGxldCBjaGFuZ2VzID0gdXBkYXRlcyA/IHVwZGF0ZXMgOiBsaXN0O1xyXG4gICAgICAgICAgZGVsZXRlIGNoYW5nZXMuX2lkO1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgICAuLi5jaGFuZ2VzLFxyXG4gICAgICAgICAgICBfaWQ6IGxpc3QuX2lkLFxyXG4gICAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkc2NvcGUubGlzdHNbJHNjb3BlLmxpc3RzLmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5faWQgPT09IGRhdGEuX2lkKV0gPSBkYXRhO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuY3JlYXRlTGlzdCgkc2NvcGUuY3VycmVudFVzZXIsICRzY29wZS5zZWxlY3RlZExpc3QpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCA9PT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIGRhdGEuX2lkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCA9IGRhdGEuX2lkO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkc2NvcGUudG9hc3QoYFwiJHtkYXRhLm5hbWV9XCIgY3JlYXRlZGApO1xyXG4gICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oJHNjb3BlLnNlbGVjdGVkTGlzdCwgdXBkYXRlcyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZUxpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBpZiAoIWxpc3QuX2lkKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmNvbmZpcm1lZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmluY2x1ZGVzKGxpc3QuX2lkKSkge1xyXG4gICAgICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSBbbGlzdC5faWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI21vZGFsLWRlbGV0ZS1saXN0c1wiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZUxpc3RzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcztcclxuICAgICAgJHNjb3BlLmNvbmZpcm1lZCA9IGZhbHNlO1xyXG4gICAgICAkKFwiI21vZGFsLWRlbGV0ZS1saXN0c1wiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jb25maXJtTWVyZ2VMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBUZW5UaGluZ3NTdmMubWVyZ2VMaXN0cygkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzKTtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gW107XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSBbXTtcclxuICAgICAgJHNjb3BlLmNvbmZpcm1lZCA9IGZhbHNlO1xyXG4gICAgICAkc2NvcGUudG9hc3QoXCJNZXJnZWRcIik7XHJcbiAgICAgICQoXCIjbW9kYWwtbWVyZ2UtbGlzdHNcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY29uZmlybURlbGV0ZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IGxpc3RJZCBvZiAkc2NvcGUubGlzdElkc1RvRGVsZXRlKSB7XHJcbiAgICAgICAgYXdhaXQgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3QobGlzdElkKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICRzY29wZS50b2FzdChcIkxpc3RzIGRlbGV0ZWRcIik7XHJcbiAgICAgICQoXCIjbW9kYWwtZGVsZXRlLWxpc3RzXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUhpZ2hsaWdodGVkTGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmxlbmd0aCA9PT0gJHNjb3BlLmxpc3RzLmxlbmd0aCkge1xyXG4gICAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gJHNjb3BlLmxpc3RzLm1hcCgoeyBfaWQgfSkgPT4gX2lkKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9ICRzY29wZS5saXN0cy5maWx0ZXIoKHsgX2lkIH0pID0+ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMoX2lkKSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVIaWdobGlnaHRlZExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhsaXN0Ll9pZCkpIHtcclxuICAgICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5maWx0ZXIoXHJcbiAgICAgICAgICAoaGlnaGxpZ2h0ZWRMaXN0SWQpID0+IGhpZ2hsaWdodGVkTGlzdElkICE9PSBsaXN0Ll9pZCxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMucHVzaChsaXN0Ll9pZCk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMgPSAkc2NvcGUubGlzdHMuZmlsdGVyKCh7IF9pZCB9KSA9PiAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmluY2x1ZGVzKF9pZCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2UgPSAobGlzdCwgbGFuZ3VhZ2UpID0+IHtcclxuICAgICAgbGlzdC5sYW5ndWFnZSA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwgeyBsYW5ndWFnZTogbGFuZ3VhZ2UuY29kZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldERpZmZpY3VsdHkgPSAobGlzdCwgZGlmZmljdWx0eSkgPT4ge1xyXG4gICAgICBsaXN0LmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7IGRpZmZpY3VsdHk6IGRpZmZpY3VsdHkgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRGcmVxdWVuY3kgPSAobGlzdCwgZnJlcXVlbmN5KSA9PiB7XHJcbiAgICAgIGxpc3QuZnJlcXVlbmN5ID0gZnJlcXVlbmN5O1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7IGZyZXF1ZW5jeTogZnJlcXVlbmN5IH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRVcGRhdGVkQ2F0ZWdvcmllcyA9IChsaXN0LCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBsZXQgY2F0ZWdvcmllcyA9IGxpc3QuY2F0ZWdvcmllcztcclxuICAgICAgaWYgKGNhdGVnb3JpZXMuc29tZSgobGlzdENhdGVnb3J5KSA9PiBsaXN0Q2F0ZWdvcnkgPT09IGNhdGVnb3J5KSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXMgPSBsaXN0LmNhdGVnb3JpZXMuZmlsdGVyKChsaXN0Q2F0ZWdvcnkpID0+IGxpc3RDYXRlZ29yeSAhPT0gY2F0ZWdvcnkpO1xyXG4gICAgICAgIGlmICghY2F0ZWdvcnkuaW5jbHVkZXMoXCIuXCIpICYmIGNhdGVnb3JpZXMuc29tZSgobGlzdENhdGVnb3J5KSA9PiBsaXN0Q2F0ZWdvcnkuc3RhcnRzV2l0aChjYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgICBjYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5maWx0ZXIoKGxpc3RDYXRlZ29yeSkgPT4gIWxpc3RDYXRlZ29yeS5zdGFydHNXaXRoKGNhdGVnb3J5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgICAgaWYgKGNhdGVnb3J5LmluY2x1ZGVzKFwiLlwiKSAmJiAhY2F0ZWdvcmllcy5maW5kKChsaXN0Q2F0ZWdvcnkpID0+IGxpc3RDYXRlZ29yeSA9PT0gY2F0ZWdvcnkuc3BsaXQoXCIuXCIpWzBdKSkge1xyXG4gICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5LnNwbGl0KFwiLlwiKVswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnkgPSAobGlzdCwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgY29uc3QgdXBkYXRlZENhdGVnb3JpZXMgPSBnZXRVcGRhdGVkQ2F0ZWdvcmllcyhsaXN0LCBjYXRlZ29yeSk7XHJcbiAgICAgIGlmICh1cGRhdGVkQ2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAkc2NvcGUudG9hc3QoYFlvdSBtdXN0IGhhdmUgYXQgbGVhc3QgMSBjYXRlZ29yeSBmb3IgJHtsaXN0Lm5hbWV9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwgeyBjYXRlZ29yaWVzOiB1cGRhdGVkQ2F0ZWdvcmllcyB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcmllcyA9IGFzeW5jIChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgbGV0IGxpc3RzVG9VcGRhdGUgPSBbXTtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLmV2ZXJ5KCh7IGNhdGVnb3JpZXMgfSkgPT4gY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgbGlzdHNUb1VwZGF0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RzO1xyXG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLnNvbWUoKHsgY2F0ZWdvcmllcyB9KSA9PiBjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICBsaXN0c1RvVXBkYXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMuZmlsdGVyKCh7IGNhdGVnb3JpZXMgfSkgPT4gIWNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaXN0c1RvVXBkYXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHM7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdXBkYXRlZExpc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgbGlzdHNUb1VwZGF0ZS5tYXAoKGxpc3RUb1VwZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdXBkYXRlZENhdGVnb3JpZXMgPSBnZXRVcGRhdGVkQ2F0ZWdvcmllcyhsaXN0VG9VcGRhdGUsIGNhdGVnb3J5KTtcclxuICAgICAgICAgIGlmICh1cGRhdGVkQ2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgJHNjb3BlLnRvYXN0KGBZb3UgbXVzdCBoYXZlIGF0IGxlYXN0IDEgY2F0ZWdvcnkgZm9yICR7bGlzdFRvVXBkYXRlLm5hbWV9YCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgICAgIF9pZDogbGlzdFRvVXBkYXRlLl9pZCxcclxuICAgICAgICAgICAgICBjYXRlZ29yaWVzOiB1cGRhdGVkQ2F0ZWdvcmllcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICk7XHJcbiAgICAgIHVwZGF0ZWRMaXN0cy5mb3JFYWNoKCh1cGRhdGVkTGlzdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3RJbmRleCA9ICRzY29wZS5saXN0cy5maW5kSW5kZXgoKGxpc3QpID0+IGxpc3QuX2lkID09PSB1cGRhdGVkTGlzdC5faWQpO1xyXG4gICAgICAgICRzY29wZS5saXN0c1tsaXN0SW5kZXhdID0gdXBkYXRlZExpc3Q7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9ICRzY29wZS5saXN0cy5maWx0ZXIoKHsgX2lkIH0pID0+ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMoX2lkKSk7XHJcbiAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNhdGVnb3J5U3RhdHVzID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5ldmVyeSgoeyBjYXRlZ29yaWVzIH0pID0+IGNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSkge1xyXG4gICAgICAgIHJldHVybiBcImNoZWNrZWRcIjtcclxuICAgICAgfSBlbHNlIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5zb21lKCh7IGNhdGVnb3JpZXMgfSkgPT4gY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgcmV0dXJuIFwicGFydGlhbFwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcInVuY2hlY2tlZFwiO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5oYXNEdXBsaWNhdGUgPSAoKSA9PlxyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ICYmXHJcbiAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlICYmXHJcbiAgICAgIF8uc29tZShcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyxcclxuICAgICAgICAoYW5zd2VyKSA9PiBhbnN3ZXIudmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpID09ICRzY29wZS5uZXdJdGVtLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSxcclxuICAgICAgKTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0U2VsZWN0ZWRMaXN0c1RpdGxlID0gKCkgPT4gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMubWFwKChsaXN0KSA9PiBsaXN0Lm5hbWUpLmpvaW4oXCIgLyBcIik7XHJcblxyXG4gICAgJHNjb3BlLmdldEJsdXJicyA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldEJsdXJicygkc2NvcGUuc2VsZWN0ZWRMaXN0LCB0eXBlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCk7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLnRvYXN0KFwiQmx1cmJzIHVwZGF0ZWRcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS50b2FzdChcIkJsdXJiIHVwZGF0ZSBmYWlsZWRcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRFbWJlZFVybCA9ICh1cmwpID0+IHtcclxuICAgICAgaWYgKHVybC5pbmNsdWRlcyhcInlvdXR1YmUuY29tXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvWz8mXXY9KFteJl0rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJ5b3V0dS5iZVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL3lvdXR1XFwuYmVcXC8oW14mP10rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJ2aW1lby5jb21cIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC92aW1lb1xcLmNvbVxcLyhcXGQrKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsLmluY2x1ZGVzKFwib3Blbi5zcG90aWZ5XCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvdHJhY2tcXC8oW14mP10rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9lbWJlZC90cmFjay8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKHVybCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuIGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9P2F1dG9wbGF5PTFgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgZ2V0RGF0YSk7XHJcbiAgfSk7XHJcbiIsIi8qanNsaW50IGVzdmVyc2lvbjogNiovXHJcbmFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NBZG1pbkN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgVGVuVGhpbmdzU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8pID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5hZG1pbikge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcclxuICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLnJldmVyc2UgPSAhJHNjb3BlLm9yZGVyLnJldmVyc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0UXVldWUgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldFF1ZXVlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucXVldWUgPSByZXNwb25zZS5kYXRhLnJlcGxhY2UoXCIvblwiLCBcIjxici8+XCIpO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgICRzY29wZS5nZXRRdWV1ZSgpO1xyXG5cclxuICAgIFRlblRoaW5nc1N2Yy5nZXRQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICRzY29wZS5wYXVzZWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy5nZXRVc2VycygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKHVzZXIpID0+ICF1c2VyLmFkbWluKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUJhbiA9ICh1c2VyKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy50b2dnbGVCYW4odXNlci5faWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVQYXVzZSA9ICh1c2VyKSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy50b2dnbGVQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLnBhdXNlZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0dhbWVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZVBhcmFtcywgVGVuVGhpbmdzU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB1c2VycyB9ID0gYXdhaXQgVXNlclN2Yy5nZXRVc2VycygpO1xyXG4gICAgICAgICRzY29wZS51c2VycyA9IHVzZXJzLmZpbHRlcigodXNlcikgPT4gIXVzZXIuYWRtaW4pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogY2F0ZWdvcmllcyB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKTtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XHJcbiAgICAgICAgaWYgKCRzdGF0ZVBhcmFtcy5nYW1lKSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0R2FtZSgkc3RhdGVQYXJhbXMuZ2FtZSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLmdhbWUgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuZ2FtZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5ID0gYXN5bmMgKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogZGlzYWJsZWRDYXRlZ29yaWVzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMudXBkYXRlR2FtZUNhdGVnb3J5KCRzdGF0ZVBhcmFtcy5nYW1lLCBjYXRlZ29yeSk7XHJcbiAgICAgICRzY29wZS5nYW1lLmRpc2FibGVkQ2F0ZWdvcmllcyA9IGRpc2FibGVkQ2F0ZWdvcmllcztcclxuICAgICAgY29uc29sZS5sb2coZGlzYWJsZWRDYXRlZ29yaWVzLmZpbmQoKGMpID0+IGMgPT09IGNhdGVnb3J5KSk7XHJcbiAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsIGdldERhdGEpO1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzU3RhdHNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIFRlblRoaW5nc1N2Yykge1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBbXTtcclxuICAgICRzY29wZS5jYXRlZ29yeVN0YXRzID0geyBsYWJlbHM6IFtdLCBkYXRhc2V0czogW10gfTtcclxuXHJcbiAgICBjb25zdCBsaW5lQ2hhcnRPcHRpb25zID0ge1xyXG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgIHRleHQ6IFwiQ2hhcnQuanMgTGluZSBDaGFydFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmN1cnJlbnRVc2VyKSByZXR1cm47XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZVN0YXRzID0gW107XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRQbGF5U3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IHllYXIgfSkgPT4geWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBtb250aHMgPSBfLnRpbWVzKDEyLCAoaSkgPT4gaSArIDEpO1xyXG4gICAgICAgICRzY29wZS5wbGF5U3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IG1vbnRocyxcclxuICAgICAgICAgIHNlcmllczogeWVhcnMsXHJcbiAgICAgICAgICBkYXRhOiB5ZWFycy5tYXAoKHllYXIpID0+XHJcbiAgICAgICAgICAgIG1vbnRocy5tYXAoKG1vbnRoKSA9PiBkYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubW9udGggPT09IG1vbnRoICYmIGl0ZW0ueWVhciA9PT0geWVhcik/LnVuaXF1ZVBsYXllcnMgfHwgMCksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgb3B0aW9uczogbGluZUNoYXJ0T3B0aW9ucyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RMYW5ndWFnZVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFycyA9IF8udW5pcShkYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkLnllYXIpKS5zb3J0KCk7XHJcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UpKS5zb3J0KCk7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IHllYXJzLFxyXG4gICAgICAgICAgc2VyaWVzOiBsYW5ndWFnZXMsXHJcbiAgICAgICAgICBkYXRhOiBsYW5ndWFnZXMubWFwKChsYW5ndWFnZSkgPT5cclxuICAgICAgICAgICAgeWVhcnMubWFwKCh5ZWFyKSA9PiBkYXRhLmZpbmQoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2UgJiYgX2lkLnllYXIgPT09IHllYXIpPy5jb3VudCB8fCAwKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBvcHRpb25zOiBsaW5lQ2hhcnRPcHRpb25zLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0R2FtZVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFycyA9IF8udW5pcShkYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkLnllYXIpKS5zb3J0KCk7XHJcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UpKS5zb3J0KCk7XHJcbiAgICAgICAgJHNjb3BlLmdhbWVTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogeWVhcnMsXHJcbiAgICAgICAgICBzZXJpZXM6IGxhbmd1YWdlcyxcclxuICAgICAgICAgIGRhdGE6IGxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlKSA9PlxyXG4gICAgICAgICAgICB5ZWFycy5tYXAoKHllYXIpID0+IGRhdGEuZmluZCgoeyBfaWQgfSkgPT4gX2lkLmxhbmd1YWdlID09PSBsYW5ndWFnZSAmJiBfaWQueWVhciA9PT0geWVhcik/LmNvdW50IHx8IDApLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIG9wdGlvbnM6IGxpbmVDaGFydE9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBfLnNvcnRCeShkYXRhLCAoeyBjb3VudCB9KSA9PiAtY291bnQpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiBzb3J0ZWREYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkKSxcclxuICAgICAgICAgIGRhdGE6IFtzb3J0ZWREYXRhLm1hcCgoeyBjb3VudCB9KSA9PiBjb3VudCldLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgKCkgPT4ge1xyXG4gICAgICBnZXREYXRhKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdXb3Jrb3V0Q3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICRzY29wZS50aW1lRXhlcmNpc2luZyA9IDMwO1xyXG4gICRzY29wZS50aW1lUmVzdGluZyA9IDEwO1xyXG4gICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcblxyXG4gIHZhciBzb3VuZHMgPSB7XHJcbiAgICBvbjogbmV3IEF1ZGlvKCdvbi53YXYnKSxcclxuICAgIG9mZjogbmV3IEF1ZGlvKCdvZmYud2F2JyksXHJcbiAgICBzd2l0Y2g6IG5ldyBBdWRpbygnc3dpdGNoLndhdicpLFxyXG4gIH07XHJcblxyXG5cclxuICB2YXIgZXhlcmNpc2VzID0gW1xyXG4gICAge25hbWU6ICdKdW1waW5nIEphY2tzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnV2FsbCBTaXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnQ3J1bmNoJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU3RlcC1VcCcsIHNwbGl0OiB0cnVlfSxcclxuICAgIHtuYW1lOiAnU3F1YXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdUcmljZXBzIERpcCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1BsYW5rJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnSGlnaCBLbmVlcycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0x1bmdlJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUHVzaC1VcCB3aXRoIFJvdGF0aW9uJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU2lkZSBQbGFuaycsIHNwbGl0OiB0cnVlfVxyXG4gIF07XHJcblxyXG4gIHZhciBleGVyY2lzaW5nO1xyXG5cclxuICAkc2NvcGUucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoZXhlcmNpc2VzLmxlbmd0aCAtIE1hdGguZmxvb3IoJHNjb3BlLnRpbWVSZW1haW5pbmcgLyAoJHNjb3BlLnRpbWVFeGVyY2lzaW5nICsgJHNjb3BlLnRpbWVSZXN0aW5nKSkpICsgJy8nICsgZXhlcmNpc2VzLmxlbmd0aDtcclxuICB9O1xyXG5cclxuICAkc2NvcGUud29ya291dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGV4Y2VyY2lzZVRpbWUgPSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3Rpbmc7XHJcbiAgICBpZiAoISRzY29wZS50aW1lUmVtYWluaW5nKSB7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gZXhlcmNpc2VzLmxlbmd0aCAqIGV4Y2VyY2lzZVRpbWU7XHJcbiAgICAgIGV4ZXJjaXNpbmcgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZy0tO1xyXG4gICAgICAgIGlmICgkc2NvcGUudGltZVJlbWFpbmluZyA9PT0gMCkge1xyXG4gICAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICdGaW5pc2hlZCEgQ29uZ3JhdHMhJywgc3BsaXQ6IGZhbHNlfTtcclxuICAgICAgICAgICRzY29wZS50aW1lciA9ICcnO1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VycmVudEV4ZXJjaXNlID0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvIGV4Y2VyY2lzZVRpbWUpO1xyXG4gICAgICAgIHZhciB0aW1lciA9ICRzY29wZS50aW1lUmVtYWluaW5nIC0gY3VycmVudEV4ZXJjaXNlICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgICAkc2NvcGUudGltZXIgPSB0aW1lciA+ICRzY29wZS50aW1lRXhlcmNpc2luZyA/IHRpbWVyIC0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nIDogdGltZXI7XHJcbiAgICAgICAgaWYgKHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nKSB7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS5leGVyY2lzZSA9IGV4ZXJjaXNlc1tleGVyY2lzZXMubGVuZ3RoIC0gY3VycmVudEV4ZXJjaXNlIC0gMV07XHJcbiAgICAgICAgaWYgKHRpbWVyID09PSAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgIHNvdW5kcy5vbi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aW1lciA9PT0gMCkge1xyXG4gICAgICAgICAgc291bmRzLm9mZi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkc2NvcGUuZXhlcmNpc2Uuc3BsaXQgJiYgdGltZXIgPT09IE1hdGguZmxvb3IoJHNjb3BlLnRpbWVFeGVyY2lzaW5nIC8gMikpIHtcclxuICAgICAgICAgIHNvdW5kcy5zd2l0Y2gucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChleGVyY2lzaW5nKTtcclxuICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICcnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuZGlyZWN0aXZlKFwiY2xpY2tPdXRzaWRlXCIsIGZ1bmN0aW9uICgkZG9jdW1lbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVzdHJpY3Q6IFwiQVwiLFxyXG4gICAgc2NvcGU6IHtcclxuICAgICAgY2xpY2tPdXRzaWRlOiBcIiZcIixcclxuICAgIH0sXHJcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRyKSB7XHJcbiAgICAgICRkb2N1bWVudC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGVsICE9PSBlLnRhcmdldCAmJiAhZWxbMF0uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL3Njb3BlLiRwYXJlbnQuc2V0U2VsZWN0ZWRMaXN0KCk7XHJcbiAgICAgICAgICAgIHNjb3BlLiRldmFsKHNjb3BlLmNsaWNrT3V0c2lkZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcblx0LmRpcmVjdGl2ZSgnaGVhZCcsIFtcclxuXHRcdCckcm9vdFNjb3BlJyxcclxuXHRcdCckc3RhdGUnLFxyXG5cdFx0JyRjb21waWxlJyxcclxuXHRcdCckaW50ZXJwb2xhdGUnLFxyXG5cdFx0ZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgJGNvbXBpbGUsICRpbnRlcnBvbGF0ZSkge1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlID0gZnVuY3Rpb24gZ2V0U3R5bGUodGVtcGxhdGVTdHlsZVVybCkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3R5bGUgPSB7XHJcblx0XHRcdFx0XHRocmVmOiB0ZW1wbGF0ZVN0eWxlVXJsLFxyXG5cdFx0XHRcdFx0cmVsOiAnc3R5bGVzaGVldCdcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRpZiAoc3R5bGUuaHJlZi5tYXRjaCgvXFwubGVzcyQvKSkge1xyXG5cdFx0XHRcdFx0c3R5bGUucmVsID0gJ3N0eWxlc2hlZXQvbGVzcyc7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIGdldFN0eWxlcyhzdGF0ZSkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3RhdGVzID0ge307XHJcblxyXG5cdFx0XHRcdC8vQ2hlY2sgc3RhdGUgZm9yIHN0eWxlc1xyXG5cdFx0XHRcdHdoaWxlIChzdGF0ZS5uYW1lICE9PSAnJykge1xyXG5cdFx0XHRcdFx0dmFyIHBhcmVudCA9ICRzdGF0ZS5nZXQoJ14nLCBzdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0Ly9Jbml0aWF0ZSBvdXIgdmlldyBsaXN0XHJcblx0XHRcdFx0XHRpZiAoIXN0YXRlc1twYXJlbnQubmFtZV0pIHtcclxuXHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXSA9IHt9O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ2hlY2sgdGhlIHRlbXBsYXRlU3R5bGVcclxuXHRcdFx0XHRcdGlmIChzdGF0ZS50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXVsnJ10pIHtcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSA9IGdldFN0eWxlKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB2aWV3c1xyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnZpZXdzKSB7XHJcblx0XHRcdFx0XHRcdF8uZm9yRWFjaChzdGF0ZS52aWV3cywgZnVuY3Rpb24gKHZpZXcsIGtleSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgYSBzdHlsZVxyXG5cdFx0XHRcdFx0XHRcdGlmICghdmlldy50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGFyZSB0YXJnZXRpbmcgc29tZSBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRpZiAoKGtleSA9IGtleS5zcGxpdCgnQCcpKVsxXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBoYXZlIHN0eWxlcyBmb3IgdGhhdCBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGVzW2tleVsxXV0gPSB7fTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBzb21lIHBhcmVudCdzIHZpZXdcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV1ba2V5WzBdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBvdXIgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1ba2V5WzBdXSA9IGdldFN0eWxlKHZpZXcudGVtcGxhdGVTdHlsZVVybCk7XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NvbnRpbnVlIHdpdGggdGhlIHBhcmVudFxyXG5cdFx0XHRcdFx0c3RhdGUgPSBwYXJlbnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL0ZsYXR0ZW4gdGhlIGxpc3RcclxuXHRcdFx0XHR2YXIgZmxhdCA9IFtdO1xyXG5cdFx0XHRcdF8uZm9yRWFjaChzdGF0ZXMsIGZ1bmN0aW9uICh2aWV3cykge1xyXG5cclxuXHRcdFx0XHRcdF8uZm9yRWFjaCh2aWV3cywgZnVuY3Rpb24gKHN0eWxlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIV8uaW5jbHVkZXMoZmxhdCwgc3R5bGUpKSB7XHJcblx0XHRcdFx0XHRcdFx0ZmxhdC5wdXNoKHN0eWxlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly9SZXZlcnNlIGl0IHNvIHdlIGhhdmUgYSBwcm9wZXIgaGllcmFyY2h5XHJcblx0XHRcdFx0ZmxhdC5yZXZlcnNlKCk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBmbGF0O1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdFx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0pIHtcclxuXHJcblx0XHRcdFx0XHRzY29wZS50ZW1wbGF0ZVN0eWxlcyA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdHZhciBodG1sID0gJzxsaW5rIG5nLWF0dHItcmVsPVwie3tzdHlsZS5yZWx9fVwiIG5nLXJlcGVhdD1cInN0eWxlIGluIHRlbXBsYXRlU3R5bGVzXCIgbmctaHJlZj1cInt7c3R5bGUuaHJlZn19XCI+JztcclxuXHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXHtcXHsvZywgJGludGVycG9sYXRlLnN0YXJ0U3ltYm9sKCkpO1xyXG5cdFx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvXFx9XFx9L2csICRpbnRlcnBvbGF0ZS5lbmRTeW1ib2woKSk7XHJcblxyXG5cdFx0XHRcdFx0ZWxlbS5hcHBlbmQoJGNvbXBpbGUoaHRtbCkoc2NvcGUpKTtcclxuXHJcblx0XHRcdFx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpIHtcclxuXHJcblx0XHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gZ2V0U3R5bGVzKHRvU3RhdGUpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0fVxyXG5cdF0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0NhdGVnb3JpZXNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VGFza3MgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nLCBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZFRhc2sgPSBmdW5jdGlvbiAoY2F0ZWdvcnksIHRhc2spIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5ICsgJy90YXNrcycsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICBzdmMuY2hvaWNlcyA9IGxpc3Q7XHJcbiAgICBzdmMucHJpb3JpdHlMaXN0ID0gW107XHJcbiAgICAvL01ha2UgYSBuZXcgY2hvaWNlIGxpc3RcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKHZhciBqID0gaSArIDE7IGogPCBsaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgc3ZjLnByaW9yaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgZmlyc3RDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaSA6IGpdLm5hbWUsXHJcbiAgICAgICAgICBzZWNvbmRDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaiA6IGldLm5hbWUsXHJcbiAgICAgICAgICBjaG9pY2U6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNodWZmbGUoc3ZjLnByaW9yaXR5TGlzdCk7XHJcbiAgICBmb3IgKGkgaW4gc3ZjLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBzdmMucHJpb3JpdHlMaXN0W2ldLmlkID0gaSArIDE7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHJldHVybiBzdmMucHJpb3JpdHlMaXN0O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcclxuICAgIHZhciBtID0gYXJyYXkubGVuZ3RoLCB0LCBpO1xyXG4gICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGXigKZcclxuICAgIHdoaWxlIChtKSB7XHJcbiAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudOKAplxyXG4gICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbS0tKTtcclxuICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAvL2FycmF5W21dLmZpcnN0Q2hvaWNlO1xyXG4gICAgICB0ID0gYXJyYXlbbV07XHJcbiAgICAgIGFycmF5W21dID0gYXJyYXlbaV07XHJcbiAgICAgIGFycmF5W2ldID0gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdFbWFpbFN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuc2VuZCA9IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZW1haWwnLCBlbWFpbCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiRmlsZVN2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFF1aXpGaWxlcyA9IGZ1bmN0aW9uIChxdWl6KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS9xdWl6emVzL1wiICsgcXVpeik7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnR2FtZVN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gICAgc3ZjLmdldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZ2FtZXMvJyArIGdhbWUgKyAnLycgKyB1c2VyICsgJy9oaWdoc2NvcmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLnNldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyLCBzY29yZSkge1xyXG4gICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9nYW1lcy8nICsgZ2FtZSArICcvJyArIHVzZXIgKyAnL2hpZ2hzY29yZScsIHtcclxuICAgICAgICBzY29yZTogc2NvcmVcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnTGFuZ3VhZ2VTdmMnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5sYW5ndWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkVOXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkVuZ2xpc2hcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWdiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIk5MXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIk5lZGVybGFuZHNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLW5sXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkZSXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkZyYW7Dp2Fpc1wiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tZnJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy50ZXh0ID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgc3ZjLnNlbGVjdGVkTGFuZ3VhZ2UgPSBzdmMubGFuZ3VhZ2VzWzBdO1xyXG5cclxuICBzdmMuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcclxuICAgIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICByZXR1cm4gbGFuZ3VhZ2U7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHN2Yy5zZWxlY3RlZExhbmd1YWdlO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZmV0Y2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJyk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQb3N0ID0gZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMvJyArIHBvc3QuX2lkKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJUZW5UaGluZ3NTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9ib3RzL3RlbnRoaW5ncy9xdWV1ZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0cyA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgIHZhciB1cmwgPVxyXG4gICAgICBgL2FwaS90ZW50aGluZ3MvbGlzdHM/YCArXHJcbiAgICAgIChvcHRpb25zLmxpbWl0ID8gYCZsaW1pdD0ke29wdGlvbnMubGltaXR9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMucGFnZSA/IGAmcGFnZT0ke29wdGlvbnMucGFnZX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zb3J0QnkgPyBgJnNvcnRfYnk9JHtvcHRpb25zLnNvcnRCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5vcmRlckJ5ID8gYCZvcmRlcl9ieT0ke29wdGlvbnMub3JkZXJCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5sYW5ndWFnZSAmJiBvcHRpb25zLmxhbmd1YWdlLmxlbmd0aCA+IDAgPyBgJmxhbmd1YWdlPSR7b3B0aW9ucy5sYW5ndWFnZS5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5jYXRlZ29yaWVzICYmIG9wdGlvbnMuY2F0ZWdvcmllcy5sZW5ndGggPiAwID8gYCZjYXRlZ29yaWVzPSR7b3B0aW9ucy5jYXRlZ29yaWVzLmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLmxhbmd1YWdlTm90ICYmIG9wdGlvbnMubGFuZ3VhZ2VOb3QubGVuZ3RoID4gMCA/IGAmIWxhbmd1YWdlPSR7b3B0aW9ucy5sYW5ndWFnZU5vdC5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5jYXRlZ29yaWVzTm90ICYmIG9wdGlvbnMuY2F0ZWdvcmllc05vdC5sZW5ndGggPiAwXHJcbiAgICAgICAgPyBgJiFjYXRlZ29yaWVzPSR7b3B0aW9ucy5jYXRlZ29yaWVzTm90LmpvaW4oXCIsXCIpfWBcclxuICAgICAgICA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuc2VhcmNoID8gYCZzZWFyY2g9JHtvcHRpb25zLnNlYXJjaH1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5uYW1lID8gYCZuYW1lPSR7b3B0aW9ucy5uYW1lfWAgOiBcIlwiKTtcclxuXHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNlYXJjaExpc3RzID0gKG5hbWUpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL3NlYXJjaC9saXN0LW5hbWVzLyR7bmFtZX1gKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2NhdGVnb3JpZXNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGFuZ3VhZ2VzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvbGFuZ3VhZ2VzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wdXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkLCBsaXN0KTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlTGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzXCIsIHsgdXNlciwgbGlzdCB9KTtcclxuICB9O1xyXG5cclxuICBzdmMubWVyZ2VMaXN0cyA9IGZ1bmN0aW9uIChsaXN0cykge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9tZXJnZVwiLCB7IGxpc3RzOiBsaXN0cyB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuZGVsZXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0SWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3RJZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnB1dChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXMvXCIgKyB2YWx1ZS5faWQsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXNcIiwgdmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5kZWxldGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzL1wiICsgdmFsdWUuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMucmVwb3J0TGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvcmVwb3J0L1wiICsgdXNlci5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9jYXRlZ29yaWVzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0TGFuZ3VhZ2VTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9sYW5ndWFnZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBsYXlTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9wbGF5XCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRHYW1lU3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvZ2FtZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEJsdXJicyA9IGZ1bmN0aW9uIChsaXN0LCB0eXBlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvbGlzdHMvJHtsaXN0Ll9pZH0vYmx1cmJzLyR7dHlwZX1gKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRHYW1lID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9nYW1lcy8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVHYW1lQ2F0ZWdvcnkgPSBmdW5jdGlvbiAoaWQsIGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvZ2FtZXMvJHtpZH0vY2F0ZWdvcnkvJHtjYXRlZ29yeX1gKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlVzZXJTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFVzZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnMvYWxsXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVCYW4gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3VzZXJzL2Jhbi8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSB0b2tlbjtcclxuICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hdXRoZW50aWNhdGVcIiwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9sb2dpblwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyLl9pZCwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi92ZXJpZmljYXRpb25cIiwge1xyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvcGFzc3dvcmRcIiwge1xyXG4gICAgICBvbGRQYXNzd29yZDogb2xkUGFzc3dvcmQsXHJcbiAgICAgIG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VyLCBuZXdVc2VybmFtZSkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi91c2VybmFtZVwiLCB7XHJcbiAgICAgICAgbmV3VXNlcm5hbWU6IG5ld1VzZXJuYW1lLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlF1aXpBbmltYWxzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgJHNjb3BlLmFuaW1hbHMgPSBbXTtcclxuXHJcbiAgRmlsZVN2Yy5nZXRRdWl6RmlsZXMoXCJhbmltYWxzXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShcclxuICAgICAgcmVzcG9uc2UuZGF0YS5tYXAoKGFuaW1hbCkgPT4gKHtcclxuICAgICAgICBzb3VuZDogYW5pbWFsLFxyXG4gICAgICAgIG5hbWU6IGFuaW1hbC5zdWJzdHJpbmcoMCwgYW5pbWFsLmluZGV4T2YoXCIuXCIpKS5yZXBsYWNlKFwiX1wiLCBcIiBcIikuY2FwaXRhbGl6ZSgpLFxyXG4gICAgICB9KSksXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgIGFuaW1hbC5hbnN3ZXJzID0gXy5zaHVmZmxlKFthbmltYWwubmFtZSwgLi4uZ2V0UmFuZG9tQW5pbWFscyhhbmltYWwubmFtZSldKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgIGFuaW1hbC5ndWVzcyA9IGd1ZXNzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSAobmFtZSkgPT5cclxuICAgIF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gbmFtZSAhPT0gYW5pbWFsLm5hbWUpLm1hcCgoYW5pbWFsKSA9PiBhbmltYWwubmFtZSkpLnNsaWNlKDAsIDUpO1xyXG5cclxuICAkc2NvcGUuZ2V0U2NvcmUgPSAoKSA9PlxyXG4gICAgYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IGFuaW1hbC5uYW1lID09PSBhbmltYWwuZ3Vlc3MpLmxlbmd0aH0vJHskc2NvcGUuYW5pbWFscy5sZW5ndGh9YDtcclxuXHJcbiAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IGFuaW1hbC5ndWVzcykubGVuZ3RoID09PSAkc2NvcGUuYW5pbWFscy5sZW5ndGg7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUXVpekdvb2dsZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0UXVpekZpbGVzKFwiZ29vZ2xlXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJRdWl6TG9nb3NDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldFF1aXpGaWxlcyhcImxvZ29zXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJRdWl6TW92aWVzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRRdWl6RmlsZXMoXCJtb3ZpZXNcIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlF1aXpTa2VsZXRvbnNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICAkc2NvcGUuYW5pbWFscyA9IFtdO1xyXG5cclxuICBGaWxlU3ZjLmdldFF1aXpGaWxlcyhcInNrZWxldG9uc1wiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmFuaW1hbHMgPSBfLnNodWZmbGUoXHJcbiAgICAgIHJlc3BvbnNlLmRhdGEubWFwKChhbmltYWwpID0+ICh7XHJcbiAgICAgICAgaW1hZ2U6IGFuaW1hbCxcclxuICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKFwiLlwiKSkucmVwbGFjZShcIl9cIiwgXCIgXCIpLmNhcGl0YWxpemUoKSxcclxuICAgICAgfSkpLFxyXG4gICAgKTtcclxuICAgIGZvciAobGV0IGFuaW1hbCBvZiAkc2NvcGUuYW5pbWFscykge1xyXG4gICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5ndWVzcyA9IChhbmltYWwsIGd1ZXNzKSA9PiB7XHJcbiAgICBhbmltYWwuZ3Vlc3MgPSBndWVzcztcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRSYW5kb21BbmltYWxzID0gKG5hbWUpID0+XHJcbiAgICBfLnNodWZmbGUoJHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoKGFuaW1hbCkgPT4gYW5pbWFsLm5hbWUpKS5zbGljZSgwLCAxMCk7XHJcblxyXG4gICRzY29wZS5nZXRTY29yZSA9ICgpID0+XHJcbiAgICBgJHskc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAkc2NvcGUuaXNTY29yZVZpc2libGUgPSAoKSA9PiAkc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxufSk7XHJcbiJdfQ==
