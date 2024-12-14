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
    return $http.get("/api/quizzes/images/" + folder);
  }, this.getSounds = function (folder) {
    return $http.get("/api/quizzes/sounds/" + folder);
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
}), angular.module("app").controller("QuizAnimalsCtrl", function ($scope, FileSvc) {
  $scope.animals = [], FileSvc.getSounds("animals").then(function (response) {
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
  $scope.animals = [], FileSvc.getImages("skeletons").then(function (response) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJzZXJ2aWNlcy9jYXRlZ29yaWVzLnN2Yy5qcyIsInNlcnZpY2VzL2VtYWlsLnN2Yy5qcyIsInNlcnZpY2VzL2ZpbGUuc3ZjLmpzIiwic2VydmljZXMvZ2FtZS5zdmMuanMiLCJzZXJ2aWNlcy9sYW5ndWFnZS5zdmMuanMiLCJzZXJ2aWNlcy9wb3N0cy5zdmMuanMiLCJzZXJ2aWNlcy90ZW50aGluZ3Muc3ZjLmpzIiwic2VydmljZXMvdXNlci5zdmMuanMiLCJjb250cm9sbGVycy9hcHAuY3RybC5qcyIsImNvbnRyb2xsZXJzL2FzdGVyb2lkcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvYnViYmxlcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvY2hhcmFkZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3QuY3RybC5qcyIsImNvbnRyb2xsZXJzL2V4cGVyaWVuY2UuY3RybC5qcyIsImNvbnRyb2xsZXJzL2hvYmJpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xlbW1pbmdzLmN0cmwuanMiLCJjb250cm9sbGVycy9saXN0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbG9naW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3Bvc3RzLmN0cmwuanMiLCJjb250cm9sbGVycy9wcm9maWxlLmN0cmwuanMiLCJjb250cm9sbGVycy9za2lsbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvdGVudGhpbmdzYWRtaW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2dhbWUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc3N0YXRzLmN0cmwuanMiLCJjb250cm9sbGVycy93b3Jrb3V0LmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2FuaW1hbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvZ29vZ2xlLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2xvZ29zLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL21vdmllcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9za2VsZXRvbnMuY3RybC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRvbWFpbnMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0cmluZyIsInByb3RvdHlwZSIsInZhbHVlIiwicmVkdWNlIiwicmVzdWx0IiwibGV0dGVyIiwicmVwbGFjZSIsInRoaXMiLCJTUEVDSUFMX0NIQVJBQ1RFUlMiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZURpYWNyaXRpY3MiLCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyIsImV4dHJhIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsInJlcGxhY2VBbGwiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidW5kZWZpbmVkIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsImRpcmVjdGl2ZSIsIiRkb2N1bWVudCIsInJlc3RyaWN0Iiwic2NvcGUiLCJjbGlja091dHNpZGUiLCJsaW5rIiwiZWwiLCJhdHRyIiwib24iLCJ0YXJnZXQiLCJjb250YWlucyIsIiRhcHBseSIsIiRldmFsIiwiJHN0YXRlIiwiJGNvbXBpbGUiLCIkaW50ZXJwb2xhdGUiLCJnZXRTdHlsZSIsInRlbXBsYXRlU3R5bGVVcmwiLCJzdHlsZSIsImhyZWYiLCJyZWwiLCJtYXRjaCIsImVsZW0iLCJ0ZW1wbGF0ZVN0eWxlcyIsImh0bWwiLCJzdGFydFN5bWJvbCIsImVuZFN5bWJvbCIsImFwcGVuZCIsIiRvbiIsImV2ZW50IiwidG9TdGF0ZSIsInRvUGFyYW1zIiwiZnJvbVN0YXRlIiwiZnJvbVBhcmFtcyIsInN0YXRlcyIsIm5hbWUiLCJwYXJlbnQiLCJnZXQiLCJ2aWV3cyIsIl8iLCJ2aWV3Iiwic3BsaXQiLCJmbGF0IiwiaW5jbHVkZXMiLCJyZXZlcnNlIiwiZ2V0U3R5bGVzIiwiJGh0dHAiLCJzdmMiLCJnZXRDYXRlZ29yaWVzIiwiZ2V0VGFza3MiLCJjYXRlZ29yeSIsImFkZENhdGVnb3J5IiwicG9zdCIsImFkZFRhc2siLCJ0YXNrIiwic2V0UHJpb3JpdHlMaXN0IiwibGlzdCIsImNob2ljZXMiLCJwcmlvcml0eUxpc3QiLCJqIiwicmFuZG9tIiwiTWF0aCIsInJvdW5kIiwiaWQiLCJmaXJzdENob2ljZSIsInNlY29uZENob2ljZSIsImNob2ljZSIsImFycmF5IiwidCIsIm0iLCJmbG9vciIsInNodWZmbGUiLCJnZXRQcmlvcml0eUxpc3QiLCJlbWFpbCIsImdldEltYWdlcyIsImZvbGRlciIsImdldFNvdW5kcyIsImdldEhpZ2hzY29yZSIsImdhbWUiLCJ1c2VyIiwic2V0SGlnaHNjb3JlIiwic2NvcmUiLCJsYW5ndWFnZXMiLCJjb2RlIiwiZmxhZyIsInRleHQiLCJzZWxlY3RlZExhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsImdldExhbmd1YWdlIiwiZmV0Y2giLCJjcmVhdGUiLCJnZXRQb3N0IiwiX2lkIiwiZ2V0UXVldWUiLCJnZXRMaXN0cyIsIm9wdGlvbnMiLCJsaW1pdCIsInBhZ2UiLCJzb3J0QnkiLCJvcmRlckJ5Iiwiam9pbiIsImNhdGVnb3JpZXMiLCJsYW5ndWFnZU5vdCIsImNhdGVnb3JpZXNOb3QiLCJzZWFyY2giLCJzZWFyY2hMaXN0cyIsImdldExhbmd1YWdlcyIsImdldExpc3QiLCJ1cGRhdGVMaXN0IiwicHV0IiwiY3JlYXRlTGlzdCIsIm1lcmdlTGlzdHMiLCJsaXN0cyIsImRlbGV0ZUxpc3QiLCJsaXN0SWQiLCJkZWxldGUiLCJ1cGRhdGVMaXN0VmFsdWUiLCJjcmVhdGVMaXN0VmFsdWUiLCJkZWxldGVMaXN0VmFsdWUiLCJyZXBvcnRMaXN0IiwiZ2V0TGlzdENhdGVnb3J5U3RhdHMiLCJnZXRMaXN0TGFuZ3VhZ2VTdGF0cyIsImdldFBsYXlTdGF0cyIsImdldEdhbWVTdGF0cyIsImdldEJsdXJicyIsInR5cGUiLCJnZXRQYXVzZSIsInRvZ2dsZVBhdXNlIiwiZ2V0R2FtZSIsInVwZGF0ZUdhbWVDYXRlZ29yeSIsImdldFVzZXIiLCJnZXRVc2VycyIsInRvZ2dsZUJhbiIsInNldFRva2VuIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJhdXRoZW50aWNhdGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJsb2NhbFN0b3JhZ2UiLCJsb2dpbiIsInVwZGF0ZVVzZXIiLCJjaGVja1Bhc3N3b3JkIiwicGFzc3dvcmQiLCJjaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjaGFuZ2VVc2VybmFtZSIsIm5ld1VzZXJuYW1lIiwibG9nb3V0IiwiY2xlYXIiLCJjcmVhdGVVc2VyIiwidXNlcm5hbWUiLCIkc2NvcGUiLCJMYW5ndWFnZVN2YyIsIlVzZXJTdmMiLCIkbWRUb2FzdCIsInRvYXN0IiwibWVzc2FnZSIsInNob3ciLCJzaW1wbGUiLCJ0ZXh0Q29udGVudCIsInBvc2l0aW9uIiwiaGlkZURlbGF5IiwiJCIsImxvYWQiLCJmYWRlT3V0IiwiZmFkZUluIiwiY2xvc2VzdCIsInRvZ2dsZUNsYXNzIiwiY2hlY2tlZCIsImRvY3VtZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidGhlbWVDb3VudGVyIiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZmxpcFRoZW1lIiwiaGlkZSIsInNldFRpbWVvdXQiLCJnZXRKU09OIiwic2tpbGxzIiwiZmlsdGVyIiwic2tpbGwiLCJob2JiaWVzIiwiam9icyIsImpvYiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJjaGFyYWRlcyIsImdldFRpbWVTcGFuIiwic2VsZWN0TGFuZ3VhZ2UiLCJob3ZlcmRpdiIsImRpdmlkIiwibGVmdCIsImNsaWVudFgiLCJ0b3AiLCJjbGllbnRZIiwiZ2V0RWxlbWVudEJ5SWQiLCJjc3MiLCJ0b2dnbGUiLCJsb2dnZWRJbiIsImN1cnJlbnRVc2VyIiwiYmlydGhEYXRlIiwibG9hZGluZyIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJjYXRjaCIsImVycm9yIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCIkbG9jYXRpb24iLCJHYW1lU3ZjIiwiYW5ub3VuY2UiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhdGgiLCJhbGVydCIsImN0eCIsImdldENvbnRleHQiLCJmb250IiwiZmlsbFN0eWxlIiwidGV4dEFsaWduIiwic2hvdHMiLCJhc3Rlcm9pZHMiLCJwb3dlcnVwcyIsImV4cGxvc2lvbnMiLCJtYXAiLCJzcGFjZXBpY3MiLCJzcGFjZSIsInBvd2VydXBUeXBlcyIsImFubm91bmNlbWVudCIsImN5Y2xlIiwicm93cyIsImNvbHVtbnMiLCJzaXplIiwiaW1nIiwiSW1hZ2UiLCJhY3RpdmF0ZSIsInNwYWNlc2hpcCIsIm1heFNwZWVkIiwiY29vbGRvd24iLCJjb29sZG93blRpbWUiLCJyYW5nZSIsInNoaWVsZCIsImV4cGxvZGUiLCJzcGF3bkFzdGVyb2lkcyIsInBvd2VydXAiLCJzcmMiLCJleHBsb3Npb25JbWFnZSIsImV2YWx1YXRlS2V5cyIsInBsYXlpbmciLCJzaG9vdCIsInJvdGF0aW9uIiwic3BlZWQiLCJTcGFjZXNoaXAiLCJhdXRvU3Bhd24iLCJ3aWR0aCIsImhlaWdodCIsImNhbm5vbiIsIngiLCJ5IiwiYW5nbGUiLCJTaG90IiwibW92ZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJmaWxsIiwiYXN0ZXJvaWQiLCJoaXQiLCJnYW1lT3ZlciIsImNvcyIsInNpbiIsImxpZmVzcGFuIiwiQXN0ZXJvaWQiLCJnZXRFbnRyeVBvc2l0aW9uIiwicm90YXRpb25TcGVlZCIsIkV4cGxvc2lvbiIsInNob3QiLCJwb2ludHMiLCJzcGF3blBvd2VydXAiLCJvYmplY3QiLCJQb3dlcnVwIiwiZGVsYXkiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiY29sdW1uIiwicm93IiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImdyaWRYIiwiZ3JpZFkiLCJvYmplY3QxIiwib2JqZWN0MiIsImtleXMiLCJhbW91bnQiLCJoaWdoc2NvcmUiLCJyZXNpemVDYW52YXMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5Q29kZSIsIndoaWNoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsImNsZWFyUmVjdCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJ0YWxseSIsImZpbGxUZXh0IiwibWVhc3VyZVRleHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJidWJibGVzIiwiY29sb3JzIiwiQnViYmxlIiwicmFkaXVzIiwiZXhwYW5kaW5nIiwiY2lyY3VtZmVyZW5jZSIsIm1heFJhZGl1cyIsInZ4IiwidnkiLCJmaWx0ZXJCdWJibGVzIiwiYnViYmxlIiwic2VsZWN0V29yZCIsIndvcmQiLCJFbWFpbFN2YyIsImNvbnRhY3QiLCJwaG9uZSIsImFib3V0Iiwic2VuZGluZyIsInNlbnQiLCJzdGF0dXMiLCJlcnIiLCJnZXRTa2lsbCIsInNraWxsQ29kZSIsIiR3aW5kb3ciLCJob2JieVNlbGVjdG9yVmlzaWJsZSIsInNlbGVjdGVkSG9iYnkiLCJzZWxlY3RIb2JieSIsImhvYmJ5Iiwic2hvd0hvYmJ5IiwiaW5kZXgiLCJpbWFnZXMiLCJMRUZUIiwiUklHSFQiLCJsZW1taW5nc0ltYWdlIiwiZGVjb3JJbWFnZSIsImxlbW1pbmdzIiwic3RhcnRlZCIsImFjdGlvbnMiLCJ3YWxrIiwic3RhcnQiLCJlbmQiLCJodWgiLCJmYWxsIiwiZmx5Iiwic3RvcCIsImNsaW1iIiwiYnVpbGQiLCJwdW5jaCIsImRpZyIsIkxlbW1pbmciLCJpbml0IiwiYWN0IiwiYWN0aW9uIiwiYW5pbWF0aW9uIiwic2NhbGUiLCJoYXRjaCIsIm9wZW4iLCJyZWN0IiwiQ2F0ZWdvcmllc1N2YyIsInNob3dDYXRlZ29yeSIsInRhc2tzIiwic2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2VsZWN0ZWRUYXNrcyIsInNlbGVjdGFibGVUYXNrcyIsImVudGVyZWRDYXRlZ29yeSIsIm5ld0NhdGVnb3J5IiwiZm91bmQiLCJuZXdUYXNrIiwic2VsZWN0VGFzayIsImVudGVyZWRUYXNrIiwicmVtb3ZlVGFzayIsInVuc2VsZWN0VGFzayIsInRhc2tMaXN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInN0YXJ0UHJpb3JpdGl6aW5nIiwiZ2V0UXVlc3Rpb25zIiwiY291bnRlciIsInVpIiwiZmlyZWJhc2V1aSIsIkF1dGhVSSIsInN0YXJ0VUkiLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzIiwiY3JlZGVudGlhbCIsInJlZGlyZWN0VXJsIiwiZ2V0SWRUb2tlbiIsImlkVG9rZW4iLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWxWZXJpZmllZCIsIiRlbWl0IiwibW9kYWwiLCJzaWduSW5GYWlsdXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjcmVkIiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJ1aVNob3duIiwiZGlzcGxheSIsInNpZ25JblN1Y2Nlc3NVcmwiLCJzaWduSW5PcHRpb25zIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiUFJPVklERVJfSUQiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsInNpZ25JbkZsb3ciLCJyZXNldCIsIiRmaWx0ZXIiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImJvZHkiLCJwb3N0cyIsInVuc2hpZnQiLCJjb3VudHJpZXMiLCJ0aWRiaXQiLCJkYXRlT3B0aW9ucyIsIm1heERhdGUiLCJtaW5EYXRlIiwiaW5pdERhdGUiLCJkYXRlcGlja2VyTW9kZSIsInVzZXJuYW1lVG9nZ2xlIiwicGFzc3dvcmRUb2dnbGUiLCJ0b2dnbGVVc2VybmFtZSIsInRvZ2dsZVBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwib3JpZ2luYWxCZyIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmbGFncyIsInVzZXJGbGFncyIsImxvYWRDb3VudHJpZXMiLCIkcXVlcnkiLCJjb3VudHJ5IiwiJHdhdGNoIiwic2VsZWN0ZWRTa2lsbCIsInNraWxsc1Zpc2libGUiLCJwcm9qZWN0cyIsImxhYmVscyIsImVtcGxveWVyIiwiY29uY2F0IiwiZmlsdGVyZWRQcm9qZWN0cyIsInByb2plY3QiLCJzZXRTZWxlY3RlZFNraWxsIiwiY2hhcnRPcHRpb25zIiwiY3V0b3V0UGVyY2VudGFnZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJ0b29sdGlwcyIsImNoYXJ0U3R5bGUiLCJpbWFnZSIsIiRzY2UiLCJUZW5UaGluZ3NTdmMiLCJzZWFyY2hGaWVsZCIsIm5ld0l0ZW0iLCJsYW5ndWFnZUZpbHRlciIsImNhdGVnb3J5RmlsdGVyIiwic2VsZWN0ZWRMaXN0IiwiaGlnaGxpZ2h0ZWRMaXN0cyIsImhpZ2hsaWdodGVkTGlzdElkcyIsImxpc3RJZHNUb0RlbGV0ZSIsImNvbmZpcm1lZCIsImV4aGF1c3RlZCIsIm9iamVjdENhdGVnb3JpZXMiLCJibHVyYlR5cGVzIiwiYXBpIiwiYWRtaW5Pbmx5IiwiaGF2ZUNvbW1vbkl0ZW1zIiwiYXJyMSIsImFycjIiLCJzb21lIiwia2V5RG93biIsImlzIiwiY3JlYXRlVmFsdWUiLCJ0cmlnZ2VyIiwiYWRkTGlzdCIsImNyZWF0b3IiLCJ2YWx1ZXMiLCJhbnN3ZXJzIiwiaXNEeW5hbWljIiwic2V0U2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRMaXN0IiwicmVhZE9ubHkiLCJhZG1pbiIsImdldEZpbHRlckNvdW50IiwiYXN5bmMiLCJ2aWV3VmFsdWUiLCJoaWdobGlnaHRlZFNlYXJjaFRleHQiLCJyZWdleCIsInZhbHVlT3JkZXIiLCJmaWVsZCIsIm9yZGVyIiwiZ2V0TW9yZUxpc3RzIiwic2V0TGFuZ3VhZ2VGaWx0ZXIiLCJzZXRDYXRlZ29yeUZpbHRlciIsInRvZ2dsZUNhdGVnb3J5RmlsdGVyIiwiYWxsQ2F0ZWdvcmllcyIsImdldENhdGVnb3J5TGFiZWwiLCJzdWJjYXRlZ29yaWVzIiwic3ViY2F0ZWdvcnkiLCJzdGFydHNXaXRoIiwibGFiZWwiLCJjb3VudCIsIm5leHRQYWdlIiwiZ2V0TGlzdE5hbWUiLCJ1cGRhdGVWYWx1ZSIsInVwZGF0ZWRJdGVtUmVzcG9uc2UiLCJibHVyYlR5cGUiLCJkZWxldGVWYWx1ZSIsImhhc0R1cGxpY2F0ZSIsImNyZWF0ZWRJdGVtUmVzcG9uc2UiLCJ1cHNlcnRMaXN0IiwiYmx1cmIiLCJ1cGRhdGVzIiwic2F2aW5nIiwibGlzdEluZGV4IiwiZmluZEluZGV4IiwiY2hhbmdlcyIsImFzc2lnbiIsImRlbGV0ZUxpc3RzIiwiY29uZmlybU1lcmdlTGlzdHMiLCJjb25maXJtRGVsZXRlTGlzdHMiLCJ0b2dnbGVIaWdobGlnaHRlZExpc3RzIiwidG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0IiwiaGlnaGxpZ2h0ZWRMaXN0SWQiLCJzZXREaWZmaWN1bHR5IiwiZGlmZmljdWx0eSIsInNldEZyZXF1ZW5jeSIsImZyZXF1ZW5jeSIsImdldFVwZGF0ZWRDYXRlZ29yaWVzIiwibGlzdENhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJ1cGRhdGVkQ2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJsaXN0c1RvVXBkYXRlIiwiZXZlcnkiLCJhbGwiLCJsaXN0VG9VcGRhdGUiLCJ1cGRhdGVkTGlzdCIsImNhdGVnb3J5U3RhdHVzIiwiYW5zd2VyIiwicmVtb3ZlQWxsQnV0TGV0dGVycyIsImdldFNlbGVjdGVkTGlzdHNUaXRsZSIsImdldHRpbmdCbHVyYnMiLCJnZXRFbWJlZFVybCIsInZpZGVvSWQiLCJ0cmltIiwidHJ1c3RBc1Jlc291cmNlVXJsIiwibGFuZ3VhZ2VTdGF0cyIsImNhdGVnb3J5U3RhdHMiLCJxdWV1ZSIsInBhdXNlZCIsInVzZXJzIiwiJHN0YXRlUGFyYW1zIiwiZGlzYWJsZWRDYXRlZ29yaWVzIiwiYyIsImRhdGFzZXRzIiwibGluZUNoYXJ0T3B0aW9ucyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwidGl0bGUiLCJ5ZWFycyIsInVuaXEiLCJtb250aHMiLCJ0aW1lcyIsInBsYXlTdGF0cyIsInNlcmllcyIsIm1vbnRoIiwidW5pcXVlUGxheWVycyIsImdhbWVTdGF0cyIsInNvcnRlZERhdGEiLCJ0aW1lUmVtYWluaW5nIiwidGltZUV4ZXJjaXNpbmciLCJ0aW1lUmVzdGluZyIsInJlc3QiLCJleGVyY2lzaW5nIiwic291bmRzIiwiQXVkaW8iLCJvZmYiLCJzd2l0Y2giLCJleGVyY2lzZXMiLCJwcm9ncmVzcyIsIndvcmtvdXQiLCJleGNlcmNpc2VUaW1lIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVyIiwiZXhlcmNpc2UiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRFeGVyY2lzZSIsInBsYXkiLCJGaWxlU3ZjIiwiYW5pbWFscyIsImFuaW1hbCIsInNvdW5kIiwic3Vic3RyaW5nIiwiY2FwaXRhbGl6ZSIsImdldFJhbmRvbUFuaW1hbHMiLCJndWVzcyIsImdldFNjb3JlIiwiaXNTY29yZVZpc2libGUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUFBLDJCQUFBQSxHQUFBLENBQ0E7SUFDQUMsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLENBQUE7RUFHQUMsT0FBQUEsR0FBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsTUFBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsQ0FBQTtBQUdBQyxNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGtCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBUiwyQkFBQUEsQ0FBQVMsTUFBQUEsQ0FBQSxDQUFBQyxNQUFBQSxFQUFBQyxNQUFBQSxLQUNBRCxNQUFBQSxDQUFBRSxPQUFBQSxDQUFBRCxNQUFBQSxDQUFBVCxPQUFBQSxFQUFBUyxNQUFBQSxDQUFBVixJQUFBQSxDQUFBQSxFQUNBWSxJQUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUE7QUFHQSxNQUFBQyxrQkFBQUEsR0FBQSxxQ0FBQTtBQUVBVixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLHlCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBRCxPQUFBQSxDQUFBLElBQUFHLE1BQUFBLENBQUEsSUFBQUQsa0JBQUFBLEdBQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsRUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQVYsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxxQkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUcsV0FBQUEsRUFBQUEsQ0FBQUMsZ0JBQUFBLEVBQUFBLENBQUFDLHVCQUFBQSxFQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWQsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxTQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBVyxLQUFBQSxFQUFBQTtJQUNBLE9BQUFOLElBQUFBLENBQUFELE9BQUFBLENBQUEsSUFBQUcsTUFBQUEsQ0FBQSxLQUFBRCxrQkFBQUEsR0FBQUssS0FBQUEsR0FBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxHQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBZixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFlBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFPLE1BQUFBLENBQUEsQ0FBQSxDQUFBLENBQUFDLFdBQUFBLEVBQUFBLEdBQUFSLElBQUFBLENBQUFTLEtBQUFBLENBQUEsQ0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWxCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsWUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLENBQUFBLE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsY0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQVUsVUFBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxDQUFBLENBQUFYLE9BQUFBLENBQUEsR0FBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBQSxPQUFBQSxDQUFBLEdBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQVcsVUFBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxDQUNBO0VBQUE7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QUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBQyxNQUFBQSxDQUFBLFVBQUFDLGNBQUFBLEVBQUFDLGtCQUFBQSxFQUFBQyxtQkFBQUEsRUFBQUMsaUJBQUFBLEVBQUFBO0VBQ0FGLGtCQUFBQSxDQUFBRyxTQUFBQSxDQUFBLE9BQUEsQ0FBQSxFQUNBRixtQkFBQUEsQ0FBQUgsTUFBQUEsQ0FBQU0sVUFBQUEsQ0FBQUEsQ0FBQSxDQUFBLENBQUEsRUFFQUwsY0FBQUEsQ0FDQU0sS0FBQUEsQ0FBQSxNQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxPQUFBO0lBQ0FDLFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxRQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FDLFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FDLFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxhQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUUsVUFBQUEsRUFBQSxZQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxXQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxNQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxPQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGlCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG9CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxtQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsaUJBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsb0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsWUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxpQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsZ0JBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxtQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxVQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxXQUFBO0lBQ0FFLFVBQUFBLEVBQUEsY0FBQTtJQUNB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LENBQUEsQ0FDQWUsT0FBQUEsQ0FBQSxlQUFBLEVBQUEsVUFBQTJFLEtBQUFBLEVBQUFBO0VBRUEsSUFBQUMsR0FBQUEsR0FBQTdILElBQUFBO0VBRUE2SCxHQUFBQSxDQUFBQyxhQUFBQSxHQUFBLFlBQUE7SUFDQSxPQUFBRixLQUFBQSxDQUFBVCxHQUFBQSxDQUFBLGlCQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFVLEdBQUFBLENBQUFFLFFBQUFBLEdBQUEsVUFBQUMsUUFBQUEsRUFBQUE7SUFDQSxPQUFBSixLQUFBQSxDQUFBVCxHQUFBQSxDQUFBLGtCQUFBLEdBQUFhLFFBQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFILEdBQUFBLENBQUFJLFdBQUFBLEdBQUEsVUFBQUQsUUFBQUEsRUFBQUE7SUFDQSxPQUFBSixLQUFBQSxDQUFBTSxJQUFBQSxDQUFBLGtCQUFBLEVBQUFGLFFBQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFILEdBQUFBLENBQUFNLE9BQUFBLEdBQUEsVUFBQUgsUUFBQUEsRUFBQUksSUFBQUEsRUFBQUE7SUFDQSxPQUFBUixLQUFBQSxDQUFBTSxJQUFBQSxDQUFBLGtCQUFBLEdBQUFGLFFBQUFBLEdBQUEsUUFBQSxFQUFBSSxJQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBUCxHQUFBQSxDQUFBUSxlQUFBQSxHQUFBLFVBQUFDLElBQUFBLEVBQUFBO0lBQ0FULEdBQUFBLENBQUFVLE9BQUFBLEdBQUFELElBQUFBLEVBQ0FULEdBQUFBLENBQUFXLFlBQUFBLEdBQUEsRUFBQTtJQUVBLEtBQUEsSUFBQTNILENBQUFBLEdBQUEsQ0FBQSxFQUFBQSxDQUFBQSxHQUFBeUgsSUFBQUEsQ0FBQXhILE1BQUFBLEVBQUFELENBQUFBLEVBQUFBLEVBQ0EsS0FBQSxJQUFBNEgsQ0FBQUEsR0FBQTVILENBQUFBLEdBQUEsQ0FBQSxFQUFBNEgsQ0FBQUEsR0FBQUgsSUFBQUEsQ0FBQXhILE1BQUFBLEVBQUEySCxDQUFBQSxFQUFBQSxFQUFBO01BQ0EsSUFBQUMsTUFBQUEsR0FBQUMsSUFBQUEsQ0FBQUMsS0FB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QUEsQ0FBQUMsU0FBQUEsRUFBQUE7TUFDQUEsU0FBQUEsQ0FBQUMsUUFBQUEsSUFBQSxHQUNBO0lBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQXBOLElBQUFBLEVBQUEsVUFBQTtJQUNBMk0sWUFBQUEsRUFBQSxZQUFBO0lBQ0FDLEtBQUFBLEVBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBO01BQ0FDLE9BQUFBLEVBQUEsQ0FBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtNQUNBblQsQ0FBQUEsRUFBQSxDQUFBO01BQ0FVLFNBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBO0lBRUEwUyxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO0lBQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7TUFDQUEsU0FBQUEsQ0FBQUUsUUFBQUEsR0FBQSxDQUFBLEtBQ0FGLFNBQUFBLENBQUFHLFlBQUFBLElBQUEsQ0FBQSxDQUVBO0lBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQXROLElBQUFBLEVBQUEsT0FBQTtJQUNBMk0sWUFBQUEsRUFBQSxnQkFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7TUFDQW5ULENBQUFBLEVBQUEsQ0FBQTtNQUNBVSxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBMFMsR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO01BQ0FBLFNBQUFBLENBQUFJLEtBQUFBLElBQUEsQ0FDQTtJQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0F2TixJQUFBQSxFQUFBLFFBQUE7SUFDQTJNLFlBQUFBLEVBQUEsUUFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxD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QUFBLEVBQ0EsTUFBQSxHQUNBblEsSUFBQUEsQ0FBQVMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBMlAsS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FwUSxJQUFBQSxDQUFBUyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEyUCxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXBRLElBQUFBLENBQUFTLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTJQLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxDQUFBLEVBRUFILFFBQUFBLENBQUFFLFlBQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsR0FDQW5RLElBQUFBLENBQUFTLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTJQLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBcFEsSUFBQUEsQ0FBQVMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBMlAsS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FwUSxJQUFBQSxDQUFBUyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEyUCxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLEtBQUEsRUFDQSxNQUFBLEdBQ0FuUSxJQUFBQSxDQUFBUyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEyUCxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXBRLElBQUFBLENBQUFTLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTJQLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBcFEsSUFBQUEsQ0FBQVMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBMlAsS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FDQSxNQUFBLEVB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QSxDQUFBO1FBQ0FwTSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBbVUsSUFBQUEsRUFBQTtRQUNBSCxLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBNUgsT0FBQUEsRUFBQSxDQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBcE0sT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQW9VLEdBQUFBLEVBQUE7UUFDQUosS0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxFQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQTVILE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQXBNLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFxVSxJQUFBQSxFQUFBO1FBQ0FMLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0E1SCxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0FwTSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBc1UsS0FBQUEsRUFBQTtRQUNBTixLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBNUgsT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBcE0sT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQXVVLEtBQUFBLEVBQUE7UUFDQVAsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQTVILE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFB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U0FBQUEsRUFBQTVELE9BQUFBLEVBQUFBO0VBQ0EsTUFBQTBSLFNBQUFBLEdBQUEsQ0FDQTtJQUFBclosSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBLFNBQUE7SUFBQXFXLE1BQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQXRaLElBQUFBLEVBQUEsc0JBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsYUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxxQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxVQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsV0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxnQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFdBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsT0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxlQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsd0JBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsVUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxZQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsY0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxVQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxPQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGtCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxpQ0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxrQ0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxlQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFFBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEseUJBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsdUNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsMEJBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsT0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxhQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsY0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxPQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsT0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxVQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsTUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxZQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsa0JBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxnQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxVQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLG9CQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsZ0JBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxPQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxNQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLDZCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGlDQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxPQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLHNEQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxlQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsT0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxXQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFdBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsbUJBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSw4Q0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxXQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE1BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsZUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFdBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsbUNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsVUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxXQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxhQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsZ0NBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsTUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSwyQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFFBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsT0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxPQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsVUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxVQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsdUJBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsd0NBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsb0JBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxnQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxZQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGtDQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsYUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxlQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFdBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFdBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsWUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLHNCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsNEJBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsWUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxrQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSw0Q0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxNQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsVUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxPQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLDBCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsWUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxZQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsV0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxVQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFFBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxVQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxlQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsZ0JBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxXQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGFBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxPQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsTUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxhQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE1BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxNQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGtCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGtCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGFBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsVUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLDJCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsYUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxxQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxVQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsVUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxPQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLG9CQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFFBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsY0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxpQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxZQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxXQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLDhDQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsd0JBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsVUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxjQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsU0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsYUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSx1QkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxhQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLDJCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLHNCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFdBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsMEJBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsTUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSw2QkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxNQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFVBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsWUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLGFBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsY0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLE9BQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxxQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxRQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLDJCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLDhCQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFNBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsUUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxzQ0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSwwQkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxTQUFBO0lBQUFpRCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFqRCxJQUFBQSxFQUFBLFlBQUE7SUFBQWlELElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWpELElBQUFBLEVBQUEsVUFBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxrQ0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSxtQ0FBQTtJQUFBaUQsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBakQsSUFBQUEsRUFBQSx5QkFBQTtJQUFBaUQsSUFBQUEsRUFBQTtF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QSxDQUFBNmIsSUFBQUEsR0FBQUEsQ0FBQSxDQUFBO0VBRUEsSUFzQkFDLFVBQUFBO0lBdEJBQyxNQUFBQSxHQUFBO01BQ0FubEIsRUFBQUEsRUFBQSxJQUFBb2xCLEtBQUFBLENBQUEsUUFBQSxDQUFBO01BQ0FDLEdBQUFBLEVBQUEsSUFBQUQsS0FBQUEsQ0FBQSxTQUFBLENBQUE7TUFDQUUsTUFBQUEsRUFBQSxJQUFBRixLQUFBQSxDQUFBLFlBQUE7SUFBQSxDQUFBO0lBSUFHLFNBQUFBLEdBQUEsQ0FDQTtNQUFBNWpCLElBQUFBLEVBQUEsZUFBQTtNQUFBTSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFOLElBQUFBLEVBQUEsVUFBQTtNQUFBTSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFOLElBQUFBLEVBQUEsU0FBQTtNQUFBTSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFOLElBQUFBLEVBQUEsUUFBQTtNQUFBTSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFOLElBQUFBLEVBQUEsU0FBQTtNQUFBTSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFOLElBQUFBLEVBQUEsT0FBQTtNQUFBTSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFOLElBQUFBLEVBQUEsYUFBQTtNQUFBTSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFOLElBQUFBLEVBQUEsT0FBQTtNQUFBTSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFOLElBQUFBLEVBQUEsWUFBQTtNQUFBTSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFOLElBQUFBLEVBQUEsT0FBQTtNQUFBTSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFOLElBQUFBLEVBQUEsdUJBQUE7TUFBQU0sS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBTixJ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Q0FBQWliLE1BQUFBLElBQUFBLE1BQUFBLENBQUF4a0IsSUFBQUEsS0FBQXdrQixNQUFBQSxDQUFBSyxLQUFBQSxDQUFBQSxDQUFBaHJCLE1BQUFBLElBQUE0TixNQUFBQSxDQUFBOGMsT0FBQUEsQ0FBQTFxQixNQUFBQSxFQUFBQSxFQUVBNE4sTUFBQUEsQ0FBQXNkLGNBQUFBLEdBQUEsTUFBQXRkLE1BQUFBLENBQUE4YyxPQUFBQSxDQUFBaGIsTUFBQUEsQ0FBQWliLE1BQUFBLElBQUFBLE1BQUFBLENBQUFLLEtBQUFBLENBQUFBLENBQUFockIsTUFBQUEsS0FBQTROLE1BQUFBLENBQUE4YyxPQUFBQSxDQUFBMXFCLE1BQ0E7QUFBQSxDQUFBLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcCA9IFtcclxuICB7XHJcbiAgICBiYXNlOiBcIkFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0MVxcdTI0QjZcXHVGRjIxXFx1MDBDMFxcdTAwQzFcXHUwMEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxcdTAwQzNcXHUwMTAwXFx1MDEwMlxcdTFFQjBcXHUxRUFFXFx1MUVCNFxcdTFFQjJcXHUwMjI2XFx1MDFFMFxcdTAwQzRcXHUwMURFXFx1MUVBMlxcdTAwQzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBDNlxcdTAxRkNcXHUwMUUyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBT1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM4XFx1QTczQV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQyXFx1MjRCN1xcdUZGMjJcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUwMjQzXFx1MDE4MlxcdTAxODFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0M1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYxXFx1MDFDNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMlxcdTAxQzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0NVxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJGXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDZcXHUyNEJCXFx1RkYyNlxcdTFFMUVcXHUwMTkxXFx1QTc3Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiR1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ3XFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0OFxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIklcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0OVxcdTI0QkVcXHVGRjI5XFx1MDBDQ1xcdTAwQ0RcXHUwMENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxcdTAwQ0ZcXHUxRTJFXFx1MUVDOFxcdTAxQ0ZcXHUwMjA4XFx1MDIwQVxcdTFFQ0FcXHUwMTJFXFx1MUUyQ1xcdTAxOTddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIktcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QlxcdTI0QzBcXHVGRjJCXFx1MUUzMFxcdTAxRThcXHUxRTMyXFx1MDEzNlxcdTFFMzRcXHUwMTk4XFx1MkM2OVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3QTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0Q1xcdTI0QzFcXHVGRjJDXFx1MDEzRlxcdTAxMzlcXHUwMTNEXFx1MUUzNlxcdTFFMzhcXHUwMTNCXFx1MUUzQ1xcdTFFM0FcXHUwMTQxXFx1MDIzRFxcdTJDNjJcXHUyQzYwXFx1QTc0OFxcdUE3NDZcXHVBNzgwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJNXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNERcXHUyNEMyXFx1RkYyRFxcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTJDNkVcXHUwMTlDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5KXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0RlxcdTI0QzRcXHVGRjJGXFx1MDBEMlxcdTAwRDNcXHUwMEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxcdTAwRDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHUwMEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xcdTAwRDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT0lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT09cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT1VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUwXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJRXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTFcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUlwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUyXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiU1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUzXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU0XFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MjhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1NVxcdTI0Q0FcXHVGRjM1XFx1MDBEOVxcdTAwREFcXHUwMERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHUwMERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU2XFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVllcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc2MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiV1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU3XFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJYXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNThcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTlcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHUwMEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDVBXFx1MjRDRlxcdUZGM0FcXHUwMTc5XFx1MUU5MFxcdTAxN0JcXHUwMTdEXFx1MUU5MlxcdTFFOTRcXHUwMUI1XFx1MDIyNFxcdTJDN0ZcXHUyQzZCXFx1QTc2Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDYxXFx1MjREMFxcdUZGNDFcXHUxRTlBXFx1MDBFMFxcdTAwRTFcXHUwMEUyXFx1MUVBN1xcdTFFQTVcXHUxRUFCXFx1MUVBOVxcdTAwRTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxcdTAwRTRcXHUwMURGXFx1MUVBM1xcdTAwRTVcXHUwMUZCXFx1MDFDRVxcdTAyMDFcXHUwMjAzXFx1MUVBMVxcdTFFQURcXHUxRUI3XFx1MUUwMVxcdTAxMDVcXHUyQzY1XFx1MDI1MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBFNlxcdTAxRkRcXHUwMUUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM5XFx1QTczQl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczRF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDYyXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2M1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxcdTAwRTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY0XFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGM1xcdTAxQzZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2NVxcdTI0RDRcXHVGRjQ1XFx1MDBFOFxcdTAwRTlcXHUwMEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xcdTAwRUJcXHUxRUJCXFx1MDExQlxcdTAyMDVcXHUwMjA3XFx1MUVCOVxcdTFFQzdcXHUwMjI5XFx1MUUxRFxcdTAxMTlcXHUxRTE5XFx1MUUxQlxcdTAyNDdcXHUwMjVCXFx1MDFERF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY2XFx1MjRENVxcdUZGNDZcXHUxRTFGXFx1MDE5MlxcdUE3N0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2N1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJoXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaHZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDE5NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDY5XFx1MjREOFxcdUZGNDlcXHUwMEVDXFx1MDBFRFxcdTAwRUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHUwMEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwialwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZBXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImtcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QlxcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZEXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiblwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZFXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxcdTAwRjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibmpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZGXFx1MjRERVxcdUZGNEZcXHUwMEYyXFx1MDBGM1xcdTAwRjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx1MDBGNVxcdTFFNERcXHUwMjJEXFx1MUU0RlxcdTAxNERcXHUxRTUxXFx1MUU1M1xcdTAxNEZcXHUwMjJGXFx1MDIzMVxcdTAwRjZcXHUwMjJCXFx1MUVDRlxcdTAxNTFcXHUwMUQyXFx1MDIwRFxcdTAyMEZcXHUwMUExXFx1MUVERFxcdTFFREJcXHUxRUUxXFx1MUVERlxcdTFFRTNcXHUxRUNEXFx1MUVEOVxcdTAxRUJcXHUwMUVEXFx1MDBGOFxcdTAxRkZcXHUwMjU0XFx1QTc0QlxcdUE3NERcXHUwMjc1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvaVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUEzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMjIzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzRGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJwXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3MVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJyXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJzXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzNcXHUyNEUyXFx1RkY1M1xcdTAwREZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ0elwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ1XCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzVcXHUyNEU0XFx1RkY1NVxcdTAwRjlcXHUwMEZBXFx1MDBGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx1MDBGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIndcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3N1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OVxcdTI0RThcXHVGRjU5XFx1MUVGM1xcdTAwRkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx1MDBGRlxcdTFFRjdcXHUxRTk5XFx1MUVGNVxcdTAxQjRcXHUwMjRGXFx1MUVGRl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwielwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDdBXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M10vZyxcclxuICB9LFxyXG5dO1xyXG52YXIgZG9tYWlucyA9IFtcclxuICBcIi5jb21cIixcclxuICBcIi5vcmdcIixcclxuICBcIi5uZXRcIixcclxuICBcIi5hY1wiLFxyXG4gIFwiLmFkXCIsXHJcbiAgXCIuYWVcIixcclxuICBcIi5hZlwiLFxyXG4gIFwiLmFnXCIsXHJcbiAgXCIuYWlcIixcclxuICBcIi5hbFwiLFxyXG4gIFwiLmFtXCIsXHJcbiAgXCIuYW9cIixcclxuICBcIi5hcVwiLFxyXG4gIFwiLmFyXCIsXHJcbiAgXCIuYXNcIixcclxuICBcIi5hdFwiLFxyXG4gIFwiLmF1XCIsXHJcbiAgXCIuYXdcIixcclxuICBcIi5heFwiLFxyXG4gIFwiLmF6XCIsXHJcbiAgXCIuYmFcIixcclxuICBcIi5iYlwiLFxyXG4gIFwiLmJkXCIsXHJcbiAgXCIuYmVcIixcclxuICBcIi5iZlwiLFxyXG4gIFwiLmJnXCIsXHJcbiAgXCIuYmhcIixcclxuICBcIi5iaVwiLFxyXG4gIFwiLmJqXCIsXHJcbiAgXCIuYm1cIixcclxuICBcIi5iblwiLFxyXG4gIFwiLmJvXCIsXHJcbiAgXCIuYnFcIixcclxuICBcIi5iclwiLFxyXG4gIFwiLmJzXCIsXHJcbiAgXCIuYnRcIixcclxuICBcIi5id1wiLFxyXG4gIFwiLmJ5XCIsXHJcbiAgXCIuYnpcIixcclxuICBcIi5jYVwiLFxyXG4gIFwiLmNjXCIsXHJcbiAgXCIuY2RcIixcclxuICBcIi5jZlwiLFxyXG4gIFwiLmNnXCIsXHJcbiAgXCIuY2hcIixcclxuICBcIi5jaVwiLFxyXG4gIFwiLmNrXCIsXHJcbiAgXCIuY2xcIixcclxuICBcIi5jbVwiLFxyXG4gIFwiLmNuXCIsXHJcbiAgXCIuY29cIixcclxuICBcIi5jclwiLFxyXG4gIFwiLmN1XCIsXHJcbiAgXCIuY3ZcIixcclxuICBcIi5jd1wiLFxyXG4gIFwiLmN4XCIsXHJcbiAgXCIuY3lcIixcclxuICBcIi5jelwiLFxyXG4gIFwiLmRlXCIsXHJcbiAgXCIuZGpcIixcclxuICBcIi5ka1wiLFxyXG4gIFwiLmRtXCIsXHJcbiAgXCIuZG9cIixcclxuICBcIi5kelwiLFxyXG4gIFwiLmVjXCIsXHJcbiAgXCIuZWVcIixcclxuICBcIi5lZ1wiLFxyXG4gIFwiLmVoXCIsXHJcbiAgXCIuZXJcIixcclxuICBcIi5lc1wiLFxyXG4gIFwiLmV0XCIsXHJcbiAgXCIuZXVcIixcclxuICBcIi5maVwiLFxyXG4gIFwiLmZqXCIsXHJcbiAgXCIuZmtcIixcclxuICBcIi5mbVwiLFxyXG4gIFwiLmZvXCIsXHJcbiAgXCIuZnJcIixcclxuICBcIi5nYVwiLFxyXG4gIFwiLmdkXCIsXHJcbiAgXCIuZ2VcIixcclxuICBcIi5nZlwiLFxyXG4gIFwiLmdnXCIsXHJcbiAgXCIuZ2hcIixcclxuICBcIi5naVwiLFxyXG4gIFwiLmdsXCIsXHJcbiAgXCIuZ21cIixcclxuICBcIi5nblwiLFxyXG4gIFwiLmdwXCIsXHJcbiAgXCIuZ3FcIixcclxuICBcIi5nclwiLFxyXG4gIFwiLmdzXCIsXHJcbiAgXCIuZ3RcIixcclxuICBcIi5ndVwiLFxyXG4gIFwiLmd3XCIsXHJcbiAgXCIuZ3lcIixcclxuICBcIi5oa1wiLFxyXG4gIFwiLmhtXCIsXHJcbiAgXCIuaG5cIixcclxuICBcIi5oclwiLFxyXG4gIFwiLmh0XCIsXHJcbiAgXCIuaHVcIixcclxuICBcIi5pZFwiLFxyXG4gIFwiLmllXCIsXHJcbiAgXCIuaWxcIixcclxuICBcIi5pbVwiLFxyXG4gIFwiLmluXCIsXHJcbiAgXCIuaW9cIixcclxuICBcIi5pcVwiLFxyXG4gIFwiLmlyXCIsXHJcbiAgXCIuaXNcIixcclxuICBcIi5pdFwiLFxyXG4gIFwiLmplXCIsXHJcbiAgXCIuam1cIixcclxuICBcIi5qb1wiLFxyXG4gIFwiLmpwXCIsXHJcbiAgXCIua2VcIixcclxuICBcIi5rZ1wiLFxyXG4gIFwiLmtoXCIsXHJcbiAgXCIua2lcIixcclxuICBcIi5rbVwiLFxyXG4gIFwiLmtuXCIsXHJcbiAgXCIua3BcIixcclxuICBcIi5rclwiLFxyXG4gIFwiLmt3XCIsXHJcbiAgXCIua3lcIixcclxuICBcIi5relwiLFxyXG4gIFwiLmxhXCIsXHJcbiAgXCIubGJcIixcclxuICBcIi5sY1wiLFxyXG4gIFwiLmxpXCIsXHJcbiAgXCIubGtcIixcclxuICBcIi5sclwiLFxyXG4gIFwiLmxzXCIsXHJcbiAgXCIubHRcIixcclxuICBcIi5sdVwiLFxyXG4gIFwiLmx2XCIsXHJcbiAgXCIubHlcIixcclxuICBcIi5tYVwiLFxyXG4gIFwiLm1jXCIsXHJcbiAgXCIubWRcIixcclxuICBcIi5tZVwiLFxyXG4gIFwiLm1nXCIsXHJcbiAgXCIubWhcIixcclxuICBcIi5ta1wiLFxyXG4gIFwiLm1sXCIsXHJcbiAgXCIubW1cIixcclxuICBcIi5tblwiLFxyXG4gIFwiLm1vXCIsXHJcbiAgXCIubXBcIixcclxuICBcIi5tcVwiLFxyXG4gIFwiLm1yXCIsXHJcbiAgXCIubXNcIixcclxuICBcIi5tdFwiLFxyXG4gIFwiLm11XCIsXHJcbiAgXCIubXZcIixcclxuICBcIi5td1wiLFxyXG4gIFwiLm14XCIsXHJcbiAgXCIubXlcIixcclxuICBcIi5telwiLFxyXG4gIFwiLm5hXCIsXHJcbiAgXCIubmNcIixcclxuICBcIi5uZVwiLFxyXG4gIFwiLm5mXCIsXHJcbiAgXCIubmdcIixcclxuICBcIi5uaVwiLFxyXG4gIFwiLm5sXCIsXHJcbiAgXCIubm9cIixcclxuICBcIi5ucFwiLFxyXG4gIFwiLm5yXCIsXHJcbiAgXCIubnVcIixcclxuICBcIi5uelwiLFxyXG4gIFwiLm9tXCIsXHJcbiAgXCIucGFcIixcclxuICBcIi5wZVwiLFxyXG4gIFwiLnBmXCIsXHJcbiAgXCIucGdcIixcclxuICBcIi5waFwiLFxyXG4gIFwiLnBrXCIsXHJcbiAgXCIucGxcIixcclxuICBcIi5wbVwiLFxyXG4gIFwiLnBuXCIsXHJcbiAgXCIucHJcIixcclxuICBcIi5wc1wiLFxyXG4gIFwiLnB0XCIsXHJcbiAgXCIucHdcIixcclxuICBcIi5weVwiLFxyXG4gIFwiLnFhXCIsXHJcbiAgXCIucmVcIixcclxuICBcIi5yb1wiLFxyXG4gIFwiLnJzXCIsXHJcbiAgXCIucnVcIixcclxuICBcIi5yd1wiLFxyXG4gIFwiLnNhXCIsXHJcbiAgXCIuc2JcIixcclxuICBcIi5zY1wiLFxyXG4gIFwiLnNkXCIsXHJcbiAgXCIuc2VcIixcclxuICBcIi5zZ1wiLFxyXG4gIFwiLnNoXCIsXHJcbiAgXCIuc2lcIixcclxuICBcIi5za1wiLFxyXG4gIFwiLnNsXCIsXHJcbiAgXCIuc21cIixcclxuICBcIi5zblwiLFxyXG4gIFwiLnNvXCIsXHJcbiAgXCIuc3JcIixcclxuICBcIi5zc1wiLFxyXG4gIFwiLnN0XCIsXHJcbiAgXCIuc3VcIixcclxuICBcIi5zdlwiLFxyXG4gIFwiLnN4XCIsXHJcbiAgXCIuc3lcIixcclxuICBcIi5zelwiLFxyXG4gIFwiLnRjXCIsXHJcbiAgXCIudGRcIixcclxuICBcIi50ZlwiLFxyXG4gIFwiLnRnXCIsXHJcbiAgXCIudGhcIixcclxuICBcIi50alwiLFxyXG4gIFwiLnRrXCIsXHJcbiAgXCIudGxcIixcclxuICBcIi50bVwiLFxyXG4gIFwiLnRuXCIsXHJcbiAgXCIudG9cIixcclxuICBcIi50clwiLFxyXG4gIFwiLnR0XCIsXHJcbiAgXCIudHZcIixcclxuICBcIi50d1wiLFxyXG4gIFwiLnR6XCIsXHJcbiAgXCIudWFcIixcclxuICBcIi51Z1wiLFxyXG4gIFwiLnVrXCIsXHJcbiAgXCIudXNcIixcclxuICBcIi51eVwiLFxyXG4gIFwiLnV6XCIsXHJcbiAgXCIudmFcIixcclxuICBcIi52Y1wiLFxyXG4gIFwiLnZlXCIsXHJcbiAgXCIudmdcIixcclxuICBcIi52aVwiLFxyXG4gIFwiLnZuXCIsXHJcbiAgXCIudnVcIixcclxuICBcIi53ZlwiLFxyXG4gIFwiLndzXCIsXHJcbiAgXCIueWVcIixcclxuICBcIi55dFwiLFxyXG4gIFwiLnphXCIsXHJcbiAgXCIuem1cIixcclxuICBcIi56d1wiLFxyXG5dO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlRGlhY3JpdGljc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAucmVkdWNlKChyZXN1bHQsIGxldHRlcikgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzdWx0LnJlcGxhY2UobGV0dGVyLmxldHRlcnMsIGxldHRlci5iYXNlKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgU1BFQ0lBTF9DSEFSQUNURVJTID0gXCJcXFxcXFxcXC8gIT9AIyQlXiYqKClfKzoue30sO1xcXFwtJ2Bg4oCZ4oCYXFxcIlwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFske1NQRUNJQUxfQ0hBUkFDVEVSU31dYCwgXCJnaVwiKSwgXCJcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVBbGxCdXRMZXR0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9Mb3dlckNhc2UoKS5yZW1vdmVEaWFjcml0aWNzKCkucmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMoKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNvbmNlYWxcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZXh0cmEpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChgW14ke1NQRUNJQUxfQ0hBUkFDVEVSU30ke2V4dHJhfV1gLCBcImdpXCIpLCBcIuKBjlwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNhcGl0YWxpemVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc2xpY2UoMSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVIVE1MXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShcIj5cIiwgXCJcXHUyMjdCXCIpLnJlcGxhY2UoXCI8XCIsIFwiXFx1MjI3QVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInBhcnNlU3ltYm9sc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2VBbGwoXCImXCIsIFwiJmFtcDtcIikucmVwbGFjZShcIjxcIiwgXCImbHQ7XCIpLnJlcGxhY2UoXCI+XCIsIFwiJmd0O1wiKS5yZXBsYWNlQWxsKFwiI1wiLCBcIiZudW07XCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVwbGFjZUFycmF5XCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGZpbmQsIHJlcGxhY2UpIHtcclxuICAgIHZhciByZXBsYWNlU3RyaW5nID0gdGhpcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmluZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICByZXBsYWNlU3RyaW5nID0gcmVwbGFjZVN0cmluZy5yZXBsYWNlKGZpbmRbaV0sIHJlcGxhY2VbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcGxhY2VTdHJpbmc7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJtYXNrVVJMc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2VBcnJheShbXCJodHRwczovL1wiLCBcImh0dHA6Ly9cIl0sIFwibm9wZTovL1wiKS5yZXBsYWNlQXJyYXkoZG9tYWlucywgXCIubm9wZVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VSZWFkYWJsZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwibWFrZVBlcmNlbnRhZ2VcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZGVjaW1hbHMpIHtcclxuICAgIGlmIChkZWNpbWFscyA9PT0gdW5kZWZpbmVkKSBkZWNpbWFscyA9IDI7XHJcbiAgICByZXR1cm4gYCR7KHRoaXMgKiAxMDApLnRvRml4ZWQoZGVjaW1hbHMpfSVgO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc29ydE9iamVjdCA9IChvYmosIGRpcmVjdGlvbikgPT4ge1xyXG4gIGxldCBhcnIgPSBbXTtcclxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgIGFyci5wdXNoKFtrZXksIG9ialtrZXldXSk7XHJcbiAgfVxyXG4gIGFyci5zb3J0KChhLCBiKSA9PiAoZGlyZWN0aW9uID8gYVsxXSAtIGJbMV0gOiBiWzFdIC0gYVsxXSkpO1xyXG4gIGxldCBvYmpTb3J0ZWQgPSB7fTtcclxuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4gKG9ialNvcnRlZFtpdGVtWzBdXSA9IGl0ZW1bMV0pKTtcclxuICAvL2Fyci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgYS52YWx1ZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi52YWx1ZS50b0xvd2VyQ2FzZSgpKTsgfSk7IC8vdXNlIHRoaXMgdG8gc29ydCBhcyBzdHJpbmdzXHJcbiAgcmV0dXJuIG9ialNvcnRlZDsgLy8gcmV0dXJucyBhcnJheVxyXG59O1xyXG4iLCIvKlxyXG4kID0galF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbnZhciBib290c3RyYXAgPSByZXF1aXJlKCdib290c3RyYXAnKTtcclxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XHJcbnZhciBhbmd1bGFyU2FuaXRpemUgPSByZXF1aXJlKCdhbmd1bGFyLXNhbml0aXplJyk7XHJcbnZhciBhbmd1bGFyQW5pbWF0ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItYW5pbWF0ZScpO1xyXG4qL1xyXG5hbmd1bGFyLm1vZHVsZShcImFwcFwiLCBbXHJcbiAgXCJ1aS5yb3V0ZXJcIixcclxuICBcInVpLmJvb3RzdHJhcFwiLFxyXG4gIFwibmdBbmltYXRlXCIsXHJcbiAgXCJuZ1Nhbml0aXplXCIsXHJcbiAgXCJuZ01hdGVyaWFsXCIsXHJcbiAgXCJuZ01lc3NhZ2VzXCIsXHJcbiAgXCJuZ0RyYWdEcm9wXCIsXHJcbiAgXCJuZ1RhZ3NJbnB1dFwiLFxyXG4gIFwidmNSZWNhcHRjaGFcIixcclxuICBcImNoYXJ0LmpzXCIsXHJcbiAgXCJ0Yy5jaGFydGpzXCIsXHJcbiAgXCJpbmZpbml0ZS1zY3JvbGxcIixcclxuXSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJHVybFNlcnZpY2VQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcclxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwiL2hvbWVcIik7XHJcbiAgJHVybFNlcnZpY2VQcm92aWRlci5jb25maWcuc3RyaWN0TW9kZShmYWxzZSk7XHJcblxyXG4gICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAuc3RhdGUoXCJob21lXCIsIHtcclxuICAgICAgdXJsOiBcIi9ob21lXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9ob21lLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwb2xpY3lcIiwge1xyXG4gICAgICB1cmw6IFwiL3BvbGljeVwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcG9saWN5Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwcmludFwiLCB7XHJcbiAgICAgIHVybDogXCIvcHJpbnRcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3ByaW50Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJleHBlcmllbmNlXCIsIHtcclxuICAgICAgdXJsOiBcIi9leHBlcmllbmNlXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiRXhwZXJpZW5jZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2V4cGVyaWVuY2UuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInNraWxsc1wiLCB7XHJcbiAgICAgIHVybDogXCIvc2tpbGxzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiU2tpbGxzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvc2tpbGxzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJob2JiaWVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9ob2JiaWVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiSG9iYmllc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2hvYmJpZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImNvbnRhY3RcIiwge1xyXG4gICAgICB1cmw6IFwiL2NvbnRhY3RcIixcclxuICAgICAgY29udHJvbGxlcjogXCJDb250YWN0Q3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvY29udGFjdC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwid29ya291dFwiLCB7XHJcbiAgICAgIHVybDogXCIvd29ya291dFwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIldvcmtvdXRDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi93b3Jrb3V0Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwb3N0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvcG9zdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJQb3N0c0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3Bvc3RzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwcm9maWxlXCIsIHtcclxuICAgICAgdXJsOiBcIi9wcm9maWxlXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUHJvZmlsZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3Byb2ZpbGUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImxpc3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9saXN0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkxpc3RzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJsaXN0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYnViYmxlc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYnViYmxlc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkJ1YmJsZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImJ1YmJsZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImFzdGVyb2lkc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYXN0ZXJvaWRzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQXN0ZXJvaWRzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJhc3Rlcm9pZHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImxlbW1pbmdzXCIsIHtcclxuICAgICAgdXJsOiBcIi9sZW1taW5nc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkxlbW1pbmdzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJsZW1taW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYm90c1wiLCB7XHJcbiAgICAgIHVybDogXCIvYm90c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3NcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5nc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3MtYWRtaW5cIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy1hZG1pblwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0FkbWluQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MtYWRtaW4uaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1nYW1lXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3MvOmdhbWVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NHYW1lQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MtZ2FtZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLXN0YXRzXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3Mtc3RhdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NTdGF0c0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLXN0YXRzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWdvb2dsZVwiLCB7XHJcbiAgICAgIHVybDogXCIvZ29vZ2xlXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekdvb2dsZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9nb29nbGUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotbG9nb3NcIiwge1xyXG4gICAgICB1cmw6IFwiL2xvZ29zXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekxvZ29zQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL2xvZ29zLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWFuaW1hbHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2FuaW1hbHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6QW5pbWFsc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9hbmltYWxzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LXNrZWxldG9uc1wiLCB7XHJcbiAgICAgIHVybDogXCIvc2tlbGV0b25zXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpelNrZWxldG9uc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9za2VsZXRvbnMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotbW92aWVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9tb3ZpZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6TW92aWVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL21vdmllcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiY2hhcmFkZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2NoYXJhZGVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQ2hhcmFkZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9jaGFyYWRlcy5odG1sXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHtcclxuICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICByZXF1aXJlQmFzZTogZmFsc2UsXHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ1dlYlNvY2tldFN2YycsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkdGltZW91dCkge1xyXG4gIGZ1bmN0aW9uIHdlYnNvY2tldEhvc3QoKSB7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6Jykge1xyXG4gICAgICByZXR1cm4gXCJ3c3M6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwid3M6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGNvbm5lY3Rpb247XHJcbiAgdmFyIGNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25uZWN0aW9uID0gbmV3IFdlYlNvY2tldCh3ZWJzb2NrZXRIb3N0KCkpO1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25vcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnV2Vic29ja2V0IGNvbm5lY3RlZCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9uY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnV2Vic29ja2V0IGNsb3NlZC4gUmVjb25uZWN0aW5nLi4uJyk7XHJcbiAgICAgICR0aW1lb3V0KGNvbm5lY3QsIDEwMDApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZSArIFwiIC0gU3RhdGU6IFwiICsgY29ubmVjdGlvbi5yZWFkeVN0YXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgcGF5bG9hZCA9IEpTT04ucGFyc2UoZS5kYXRhKTtcclxuICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCd3czonICsgcGF5bG9hZC50b3BpYywgcGF5bG9hZC5kYXRhKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5zZW5kID0gZnVuY3Rpb24gKHRvcGljLCBkYXRhKSB7XHJcbiAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KHt0b3BpYzogdG9waWMsIGRhdGE6IGRhdGF9KTtcclxuICAgIGNvbm5lY3Rpb24uc2VuZChqc29uKTtcclxuICB9O1xyXG5cclxuICB0aGlzLmNvbm5lY3QgPSBjb25uZWN0O1xyXG5cclxufSkucnVuKGZ1bmN0aW9uIChXZWJTb2NrZXRTdmMpIHtcclxuICBXZWJTb2NrZXRTdmMuY29ubmVjdCgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuZGlyZWN0aXZlKFwiY2xpY2tPdXRzaWRlXCIsIGZ1bmN0aW9uICgkZG9jdW1lbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVzdHJpY3Q6IFwiQVwiLFxyXG4gICAgc2NvcGU6IHtcclxuICAgICAgY2xpY2tPdXRzaWRlOiBcIiZcIixcclxuICAgIH0sXHJcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRyKSB7XHJcbiAgICAgICRkb2N1bWVudC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGVsICE9PSBlLnRhcmdldCAmJiAhZWxbMF0uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL3Njb3BlLiRwYXJlbnQuc2V0U2VsZWN0ZWRMaXN0KCk7XHJcbiAgICAgICAgICAgIHNjb3BlLiRldmFsKHNjb3BlLmNsaWNrT3V0c2lkZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcblx0LmRpcmVjdGl2ZSgnaGVhZCcsIFtcclxuXHRcdCckcm9vdFNjb3BlJyxcclxuXHRcdCckc3RhdGUnLFxyXG5cdFx0JyRjb21waWxlJyxcclxuXHRcdCckaW50ZXJwb2xhdGUnLFxyXG5cdFx0ZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgJGNvbXBpbGUsICRpbnRlcnBvbGF0ZSkge1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlID0gZnVuY3Rpb24gZ2V0U3R5bGUodGVtcGxhdGVTdHlsZVVybCkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3R5bGUgPSB7XHJcblx0XHRcdFx0XHRocmVmOiB0ZW1wbGF0ZVN0eWxlVXJsLFxyXG5cdFx0XHRcdFx0cmVsOiAnc3R5bGVzaGVldCdcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRpZiAoc3R5bGUuaHJlZi5tYXRjaCgvXFwubGVzcyQvKSkge1xyXG5cdFx0XHRcdFx0c3R5bGUucmVsID0gJ3N0eWxlc2hlZXQvbGVzcyc7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIGdldFN0eWxlcyhzdGF0ZSkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3RhdGVzID0ge307XHJcblxyXG5cdFx0XHRcdC8vQ2hlY2sgc3RhdGUgZm9yIHN0eWxlc1xyXG5cdFx0XHRcdHdoaWxlIChzdGF0ZS5uYW1lICE9PSAnJykge1xyXG5cdFx0XHRcdFx0dmFyIHBhcmVudCA9ICRzdGF0ZS5nZXQoJ14nLCBzdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0Ly9Jbml0aWF0ZSBvdXIgdmlldyBsaXN0XHJcblx0XHRcdFx0XHRpZiAoIXN0YXRlc1twYXJlbnQubmFtZV0pIHtcclxuXHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXSA9IHt9O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ2hlY2sgdGhlIHRlbXBsYXRlU3R5bGVcclxuXHRcdFx0XHRcdGlmIChzdGF0ZS50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXVsnJ10pIHtcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSA9IGdldFN0eWxlKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB2aWV3c1xyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnZpZXdzKSB7XHJcblx0XHRcdFx0XHRcdF8uZm9yRWFjaChzdGF0ZS52aWV3cywgZnVuY3Rpb24gKHZpZXcsIGtleSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgYSBzdHlsZVxyXG5cdFx0XHRcdFx0XHRcdGlmICghdmlldy50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGFyZSB0YXJnZXRpbmcgc29tZSBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRpZiAoKGtleSA9IGtleS5zcGxpdCgnQCcpKVsxXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBoYXZlIHN0eWxlcyBmb3IgdGhhdCBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGVzW2tleVsxXV0gPSB7fTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBzb21lIHBhcmVudCdzIHZpZXdcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV1ba2V5WzBdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBvdXIgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1ba2V5WzBdXSA9IGdldFN0eWxlKHZpZXcudGVtcGxhdGVTdHlsZVVybCk7XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NvbnRpbnVlIHdpdGggdGhlIHBhcmVudFxyXG5cdFx0XHRcdFx0c3RhdGUgPSBwYXJlbnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL0ZsYXR0ZW4gdGhlIGxpc3RcclxuXHRcdFx0XHR2YXIgZmxhdCA9IFtdO1xyXG5cdFx0XHRcdF8uZm9yRWFjaChzdGF0ZXMsIGZ1bmN0aW9uICh2aWV3cykge1xyXG5cclxuXHRcdFx0XHRcdF8uZm9yRWFjaCh2aWV3cywgZnVuY3Rpb24gKHN0eWxlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIV8uaW5jbHVkZXMoZmxhdCwgc3R5bGUpKSB7XHJcblx0XHRcdFx0XHRcdFx0ZmxhdC5wdXNoKHN0eWxlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly9SZXZlcnNlIGl0IHNvIHdlIGhhdmUgYSBwcm9wZXIgaGllcmFyY2h5XHJcblx0XHRcdFx0ZmxhdC5yZXZlcnNlKCk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBmbGF0O1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdFx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0pIHtcclxuXHJcblx0XHRcdFx0XHRzY29wZS50ZW1wbGF0ZVN0eWxlcyA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdHZhciBodG1sID0gJzxsaW5rIG5nLWF0dHItcmVsPVwie3tzdHlsZS5yZWx9fVwiIG5nLXJlcGVhdD1cInN0eWxlIGluIHRlbXBsYXRlU3R5bGVzXCIgbmctaHJlZj1cInt7c3R5bGUuaHJlZn19XCI+JztcclxuXHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXHtcXHsvZywgJGludGVycG9sYXRlLnN0YXJ0U3ltYm9sKCkpO1xyXG5cdFx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvXFx9XFx9L2csICRpbnRlcnBvbGF0ZS5lbmRTeW1ib2woKSk7XHJcblxyXG5cdFx0XHRcdFx0ZWxlbS5hcHBlbmQoJGNvbXBpbGUoaHRtbCkoc2NvcGUpKTtcclxuXHJcblx0XHRcdFx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpIHtcclxuXHJcblx0XHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gZ2V0U3R5bGVzKHRvU3RhdGUpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0fVxyXG5cdF0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0NhdGVnb3JpZXNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VGFza3MgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nLCBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZFRhc2sgPSBmdW5jdGlvbiAoY2F0ZWdvcnksIHRhc2spIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5ICsgJy90YXNrcycsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICBzdmMuY2hvaWNlcyA9IGxpc3Q7XHJcbiAgICBzdmMucHJpb3JpdHlMaXN0ID0gW107XHJcbiAgICAvL01ha2UgYSBuZXcgY2hvaWNlIGxpc3RcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKHZhciBqID0gaSArIDE7IGogPCBsaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgc3ZjLnByaW9yaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgZmlyc3RDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaSA6IGpdLm5hbWUsXHJcbiAgICAgICAgICBzZWNvbmRDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaiA6IGldLm5hbWUsXHJcbiAgICAgICAgICBjaG9pY2U6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNodWZmbGUoc3ZjLnByaW9yaXR5TGlzdCk7XHJcbiAgICBmb3IgKGkgaW4gc3ZjLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBzdmMucHJpb3JpdHlMaXN0W2ldLmlkID0gaSArIDE7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHJldHVybiBzdmMucHJpb3JpdHlMaXN0O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcclxuICAgIHZhciBtID0gYXJyYXkubGVuZ3RoLCB0LCBpO1xyXG4gICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGXigKZcclxuICAgIHdoaWxlIChtKSB7XHJcbiAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudOKAplxyXG4gICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbS0tKTtcclxuICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAvL2FycmF5W21dLmZpcnN0Q2hvaWNlO1xyXG4gICAgICB0ID0gYXJyYXlbbV07XHJcbiAgICAgIGFycmF5W21dID0gYXJyYXlbaV07XHJcbiAgICAgIGFycmF5W2ldID0gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdFbWFpbFN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuc2VuZCA9IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZW1haWwnLCBlbWFpbCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiRmlsZVN2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldEltYWdlcyA9IGZ1bmN0aW9uIChmb2xkZXIpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3F1aXp6ZXMvaW1hZ2VzL1wiICsgZm9sZGVyKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0U291bmRzID0gZnVuY3Rpb24gKGZvbGRlcikge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvcXVpenplcy9zb3VuZHMvXCIgKyBmb2xkZXIpO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0dhbWVTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICAgIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICAgIHN2Yy5nZXRIaWdoc2NvcmUgPSBmdW5jdGlvbiAoZ2FtZSwgdXNlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2dhbWVzLycgKyBnYW1lICsgJy8nICsgdXNlciArICcvaGlnaHNjb3JlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy5zZXRIaWdoc2NvcmUgPSBmdW5jdGlvbiAoZ2FtZSwgdXNlciwgc2NvcmUpIHtcclxuICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZ2FtZXMvJyArIGdhbWUgKyAnLycgKyB1c2VyICsgJy9oaWdoc2NvcmUnLCB7XHJcbiAgICAgICAgc2NvcmU6IHNjb3JlXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0xhbmd1YWdlU3ZjJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMubGFuZ3VhZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJFbmdsaXNoXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1nYlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJOZWRlcmxhbmRzXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1ubFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJGcmFuw6dhaXNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWZyXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBzdmMudGV4dCA9IFtcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRU5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiTkxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRlJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gc3ZjLmxhbmd1YWdlc1swXTtcclxuXHJcbiAgc3ZjLnNldExhbmd1YWdlID0gZnVuY3Rpb24gKGxhbmd1YWdlKSB7XHJcbiAgICBzdmMuc2VsZWN0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBzdmMuc2VsZWN0ZWRMYW5ndWFnZTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnUG9zdHNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmZldGNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cycpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGUgPSBmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCBwb3N0KTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UG9zdCA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzLycgKyBwb3N0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiVGVuVGhpbmdzU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0UXVldWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYm90cy90ZW50aGluZ3MvcXVldWVgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdHMgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7XHJcbiAgICB2YXIgdXJsID1cclxuICAgICAgYC9hcGkvdGVudGhpbmdzL2xpc3RzP2AgK1xyXG4gICAgICAob3B0aW9ucy5saW1pdCA/IGAmbGltaXQ9JHtvcHRpb25zLmxpbWl0fWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnBhZ2UgPyBgJnBhZ2U9JHtvcHRpb25zLnBhZ2V9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuc29ydEJ5ID8gYCZzb3J0X2J5PSR7b3B0aW9ucy5zb3J0Qnl9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMub3JkZXJCeSA/IGAmb3JkZXJfYnk9JHtvcHRpb25zLm9yZGVyQnl9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMubGFuZ3VhZ2UgJiYgb3B0aW9ucy5sYW5ndWFnZS5sZW5ndGggPiAwID8gYCZsYW5ndWFnZT0ke29wdGlvbnMubGFuZ3VhZ2Uuam9pbihcIixcIil9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuY2F0ZWdvcmllcyAmJiBvcHRpb25zLmNhdGVnb3JpZXMubGVuZ3RoID4gMCA/IGAmY2F0ZWdvcmllcz0ke29wdGlvbnMuY2F0ZWdvcmllcy5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5sYW5ndWFnZU5vdCAmJiBvcHRpb25zLmxhbmd1YWdlTm90Lmxlbmd0aCA+IDAgPyBgJiFsYW5ndWFnZT0ke29wdGlvbnMubGFuZ3VhZ2VOb3Quam9pbihcIixcIil9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuY2F0ZWdvcmllc05vdCAmJiBvcHRpb25zLmNhdGVnb3JpZXNOb3QubGVuZ3RoID4gMFxyXG4gICAgICAgID8gYCYhY2F0ZWdvcmllcz0ke29wdGlvbnMuY2F0ZWdvcmllc05vdC5qb2luKFwiLFwiKX1gXHJcbiAgICAgICAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnNlYXJjaCA/IGAmc2VhcmNoPSR7b3B0aW9ucy5zZWFyY2h9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMubmFtZSA/IGAmbmFtZT0ke29wdGlvbnMubmFtZX1gIDogXCJcIik7XHJcblxyXG4gICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZWFyY2hMaXN0cyA9IChuYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9zZWFyY2gvbGlzdC1uYW1lcy8ke25hbWV9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9jYXRlZ29yaWVzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2xhbmd1YWdlc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucHV0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCwgbGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZUxpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0c1wiLCB7IHVzZXIsIGxpc3QgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLm1lcmdlTGlzdHMgPSBmdW5jdGlvbiAobGlzdHMpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvbWVyZ2VcIiwgeyBsaXN0czogbGlzdHMgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmRlbGV0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdElkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0SWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wdXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzL1wiICsgdmFsdWUuX2lkLCB2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzXCIsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBzdmMuZGVsZXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3ZhbHVlcy9cIiArIHZhbHVlLl9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnJlcG9ydExpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3JlcG9ydC9cIiArIHVzZXIuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvY2F0ZWdvcmllc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvbGFuZ3VhZ2VzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQbGF5U3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvcGxheVwiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0R2FtZVN0YXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL3N0YXRzL2dhbWVzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRCbHVyYnMgPSBmdW5jdGlvbiAobGlzdCwgdHlwZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL2xpc3RzLyR7bGlzdC5faWR9L2JsdXJicy8ke3R5cGV9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvcGF1c2VgKTtcclxuICB9O1xyXG5cclxuICBzdmMudG9nZ2xlUGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvcGF1c2VgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0R2FtZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvZ2FtZXMvJHtpZH1gKTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlR2FtZUNhdGVnb3J5ID0gZnVuY3Rpb24gKGlkLCBjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL2dhbWVzLyR7aWR9L2NhdGVnb3J5LyR7Y2F0ZWdvcnl9YCk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJVc2VyU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRVc2VycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzL2FsbFwiKTtcclxuICB9O1xyXG5cclxuICBzdmMudG9nZ2xlQmFuID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS91c2Vycy9iYW4vJHtpZH1gKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2V0VG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiWC1BdXRoXCJdID0gdG9rZW47XHJcbiAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICB9O1xyXG5cclxuICBzdmMuYXV0aGVudGljYXRlID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvYXV0aGVudGljYXRlXCIsIHtcclxuICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICByZXR1cm4gc3ZjLnNldFRva2VuKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMubG9naW4gPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvbG9naW5cIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS50b2tlbiA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlVXNlciA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlci5faWQsIHtcclxuICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGVja1Bhc3N3b3JkID0gZnVuY3Rpb24gKHVzZXIsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvdmVyaWZpY2F0aW9uXCIsIHtcclxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoYW5nZVBhc3N3b3JkID0gZnVuY3Rpb24gKHVzZXIsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL3Bhc3N3b3JkXCIsIHtcclxuICAgICAgb2xkUGFzc3dvcmQ6IG9sZFBhc3N3b3JkLFxyXG4gICAgICBuZXdQYXNzd29yZDogbmV3UGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlVXNlcm5hbWUgPSBmdW5jdGlvbiAodXNlciwgbmV3VXNlcm5hbWUpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvdXNlcm5hbWVcIiwge1xyXG4gICAgICAgIG5ld1VzZXJuYW1lOiBuZXdVc2VybmFtZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMubG9nb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSBcIlwiO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vyc1wiLCB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdmMubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJBcHBDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIExhbmd1YWdlU3ZjLCBVc2VyU3ZjLCAkbWRUb2FzdCkge1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCIlY1lvdSBzbmVha3kgYnVnZ2VyIVwiLFxyXG4gICAgXCJmb250OiAyZW0gc2Fucy1zZXJpZjsgY29sb3I6IERvZGdlckJsdWU7IHRleHQtc2hhZG93OiAycHggMCAwICM0NDQsIC0ycHggMCAwICM0NDQsIDAgMnB4IDAgIzQ0NCwgMCAtMnB4IDAgIzQ0NCwgMXB4IDFweCAjNDQ0LCAtMXB4IC0xcHggMCAjNDQ0LCAxcHggLTFweCAwICM0NDQsIC0xcHggMXB4IDAgIzQ0NDtcIixcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCJJJ20gZ2xhZCB5b3UncmUgY3VyaW91cyB3aGV0aGVyIHNvbWV0aGluZyBpcyBwb3BwaW5nIHVwIGluIGhlcmUuIEknbSBhIGJpdCBvZiBhIHN0aWNrbGVyIHdoZW4gaXQgY29tZXMgdG8gbWVzc2FnZXMgaW4gdGhlIGNvbnNvbGUgc28gSSB0cnkgdG8gbWFrZSBzdXJlIG9ubHkgdGhpbmdzIEkgd2FudCBhcmUgdmlzaWJsZS4gVGhhdCBiZWluZyBzYWlkLCBpZiB0aGVyZSBpcyBhIGJpZyBlcnJvciBoZXJlLCBJIHdvdWxkIHJlYWxseSBhcHByZWNpYXRlIHlvdSB0ZWxsaW5nIG1lIHNvIEkgY2FuIGdldCByaWQgb2YgaXQhXCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiVGhlIGNvZGUgZm9yIG15IHJlc3VtZSBpcyBob3N0ZWQgb24gR2l0aHViIGlmIHlvdSByZWFsbHkgd2FudCB0byBnbyBpbnRvIGFsbCB0aGlzISA9PiBodHRwczovL2dpdGh1Yi5jb20vRmxhbmRlcnNCdXJnZXIvcmVzdW1lXCIsXHJcbiAgKTtcclxuXHJcbiAgJHNjb3BlLnRvYXN0ID0gKG1lc3NhZ2UpID0+IHtcclxuICAgICRtZFRvYXN0LnNob3coJG1kVG9hc3Quc2ltcGxlKCkudGV4dENvbnRlbnQobWVzc2FnZSkucG9zaXRpb24oXCJib3R0b20gcmlnaHRcIikuaGlkZURlbGF5KDMwMDApKTtcclxuICB9O1xyXG4gIC8qXHJcbiAgICAkKGRvY3VtZW50KS5iaW5kKFwia2V5dXAga2V5ZG93blwiLCBmdW5jdGlvbihlKXtcclxuICAgICAgaWYoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PSA4MCl7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgKi9cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5sb2FkaW5nXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuY2hlY2tib3gtbWVudVwiKS5vbihcImNoYW5nZVwiLCBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KFwibGlcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIiwgdGhpcy5jaGVja2VkKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5hbGxvdy1mb2N1c1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnRoZW1lQ291bnRlciA9IDY7XHJcbiAgJHNjb3BlLnRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAkc2NvcGUueWVhciA9ICRzY29wZS50b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICRzY29wZS5yYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcclxuXHJcbiAgJHNjb3BlLmZsaXBUaGVtZSA9ICgpID0+IHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5zaG93KCk7XHJcbiAgICAkKFwiLmNvbnRlbnRcIikuaGlkZSgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgICB9LCA4MDApO1xyXG4gICAgJHNjb3BlLnRoZW1lQ291bnRlciA9ICRzY29wZS50aGVtZUNvdW50ZXIgPCA2ID8gJHNjb3BlLnRoZW1lQ291bnRlciArIDEgOiAoJHNjb3BlLnRoZW1lQ291bnRlciA9IDEpO1xyXG4gIH07XHJcblxyXG4gICQuZ2V0SlNPTihcIi9za2lsbHMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLnNraWxscyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuZW5hYmxlZDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvaG9iYmllcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuaG9iYmllcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9leHBlcmllbmNlLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5qb2JzID0gZGF0YTtcclxuICAgICRzY29wZS5qb2JzLmZvckVhY2goKGpvYikgPT4ge1xyXG4gICAgICBqb2Iuc3RhcnREYXRlID0gbmV3IERhdGUoam9iLnN0YXJ0RGF0ZSk7XHJcbiAgICAgIGlmIChqb2IuZW5kRGF0ZSkgam9iLmVuZERhdGUgPSBuZXcgRGF0ZShqb2IuZW5kRGF0ZSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2NoYXJhZGVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5jaGFyYWRlcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5nZXRUaW1lU3BhbiA9IChqb2IpID0+IHtcclxuICAgIHJldHVybiBqb2Iuc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyAoam9iLmVuZERhdGUgPyBcIiAtIFwiICsgam9iLmVuZERhdGUuZ2V0RnVsbFllYXIoKSA6IFwiIC0gVG9kYXlcIik7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmxhbmd1YWdlcyA9IExhbmd1YWdlU3ZjLmxhbmd1YWdlcztcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBMYW5ndWFnZVN2Yy5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0TGFuZ3VhZ2UgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5ob3ZlcmRpdiA9IChlLCBkaXZpZCkgPT4ge1xyXG4gICAgdmFyIGxlZnQgPSBlLmNsaWVudFggKyBcInB4XCI7XHJcbiAgICB2YXIgdG9wID0gZS5jbGllbnRZICsgMjAgKyBcInB4XCI7XHJcblxyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdmlkKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcImxlZnRcIiwgbGVmdCk7XHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcInRvcFwiLCB0b3ApO1xyXG5cclxuICAgICQoXCIjXCIgKyBkaXZpZCkudG9nZ2xlKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikge1xyXG4gICAgVXNlclN2Yy5sb2dpbih3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGxvZ2luKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8sIHVzZXIpID0+IHtcclxuICAgIGxvZ2luKHVzZXIpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XHJcbiAgICBpZiAoISRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIgPSB1c2VyLl9pZDtcclxuICAgICAgJHNjb3BlLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUpO1xyXG4gICAgICAkc2NvcGUuJGJyb2FkY2FzdChcImxvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS4kb24oXCJ1cGRhdGVcIiwgKF8sIHVzZXIpID0+IHtcclxuICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlID0gbmV3IERhdGUoJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSk7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkaW5nXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5zaG93KCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkZWRcIiwgKF8sIHVzZXIpID0+IHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIiNsb2FkaW5nLWljb25cIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmxvZ291dCA9ICgpID0+IHtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgIC5hdXRoKClcclxuICAgICAgLnNpZ25PdXQoKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dvdXRcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgbW9udGhzID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpICsgXCItXCIgKyBtb250aHNbZGF0ZS5nZXRNb250aCgpXSArIFwiLVwiICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQXN0ZXJvaWRzQ3RybFwiLCBmdW5jdGlvbiAoJGxvY2F0aW9uLCAkc2NvcGUsIEdhbWVTdmMpIHtcclxuICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcclxuICBpZiAoIWNhbnZhcykge1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoXCIvaG9tZVwiKTtcclxuICAgIHJldHVybiBhbGVydChcIlwiKTtcclxuICB9XHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICBpZiAoIWN0eCkge1xyXG4gICAgcmV0dXJuICRsb2NhdGlvbi5wYXRoKFwiL2hvbWVcIik7XHJcbiAgfVxyXG4gIGN0eC5mb250ID0gXCIzMHB4IENvbWljIFNhbnMgTVNcIjtcclxuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBsZXQgc2hvdHMgPSB7fTtcclxuICBjb25zdCBhc3Rlcm9pZHMgPSB7fTtcclxuICBjb25zdCBwb3dlcnVwcyA9IHt9O1xyXG4gIGNvbnN0IGV4cGxvc2lvbnMgPSB7fTtcclxuICBjb25zdCBtYXAgPSB7fTtcclxuICBjb25zdCBzcGFjZXBpY3MgPSAxMDtcclxuICBsZXQgc3BhY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFjZXBpY3MpO1xyXG4gIGNvbnN0IHBvd2VydXBUeXBlcyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJzcGVlZFwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiTWF4IFNwZWVkIOKHp1wiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogNCxcclxuICAgICAgICBzaXplOiBbMTQsIDM1XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAubWF4U3BlZWQgKz0gMTAwO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJjb29sZG93blwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiQ29vbGRvd24g4oepXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiAzLFxyXG4gICAgICAgIHNpemU6IFsxNywgMTddLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuY29vbGRvd25UaW1lIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJyYW5nZVwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiRmlyaW5nIFJhbmdlIOKHp1wiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDQsXHJcbiAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICBzaXplOiBbMzAsIDhdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5yYW5nZSArPSA1O1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJzaGllbGRcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIlNoaWVsZFwiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDUsXHJcbiAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICBzaXplOiBbMTksIDE5XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAuc2hpZWxkID0gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwibnVrZVwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiTnVrZVwiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogOCxcclxuICAgICAgICBzaXplOiBbMTUsIDE1XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bhd25Bc3Rlcm9pZHMoNSk7XHJcbiAgICAgIH0sXHJcbiAgICB9IC8qXHJcbiAgICAnc2lkZV9jYW5ub25zJyxcclxuICAgICdsYXNlcicsXHJcbiAgICAnc2hpZWxkJyxcclxuICAgICdsaWZlJyxcclxuICAgICdtaXNzaWxlcycsXHJcbiAgICAnbnVrZSdcclxuICAgICovLFxyXG4gIF07XHJcbiAgcG93ZXJ1cFR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHBvd2VydXAsIGksIGFycmF5KSB7XHJcbiAgICBhcnJheVtpXS5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvXCIgKyBwb3dlcnVwLm5hbWUgKyBcIi5wbmdcIjtcclxuICB9KTtcclxuXHJcbiAgdmFyIGV4cGxvc2lvbkltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgZXhwbG9zaW9uSW1hZ2Uuc3JjID0gXCJhc3Rlcm9pZHMvZXhwbG9zaW9uLnBuZ1wiO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwia2V5ZG93blwiLFxyXG4gICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgbWFwW2Uua2V5Q29kZSB8fCBlLndoaWNoXSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgdHJ1ZSxcclxuICApO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJrZXl1cFwiLFxyXG4gICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgbWFwW2Uua2V5Q29kZSB8fCBlLndoaWNoXSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHRydWUsXHJcbiAgKTtcclxuXHJcbiAgJHNjb3BlLmhpZ2hzY29yZSA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGV2YWx1YXRlS2V5cygpIHtcclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBpZiAobWFwWzMyXSkge1xyXG4gICAgICAgIC8vU3BhY2VcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLmNvb2xkb3duID09PSAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc2hvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszN10pIHtcclxuICAgICAgICAvL0xlZnQgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnJvdGF0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gPSAzNjA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiAtPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM5XSkge1xyXG4gICAgICAgIC8vUmlnaHQgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnJvdGF0aW9uID09PSAzNjApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiArPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM4XSkge1xyXG4gICAgICAgIC8vVXAgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkIDw9IHNwYWNlc2hpcC5tYXhTcGVlZCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkICs9IDU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQtLTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFs0MF0pIHtcclxuICAgICAgICAvL0Rvd24gQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkIC09IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobWFwWzMyXSkge1xyXG4gICAgICAgIHN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNwYWNlc2hpcCgpIHtcclxuICAgIHRoaXMud2lkdGggPSA1MDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gNTA7XHJcbiAgICB0aGlzLnNoaWVsZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yYW5nZSA9IDgwO1xyXG4gICAgdGhpcy5jYW5ub24gPSB7XHJcbiAgICAgIHg6IHRoaXMud2lkdGggLyAyIC0gNC41LFxyXG4gICAgICB5OiB0aGlzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAqIDAuMDc4MTI1LFxyXG4gICAgfTtcclxuICAgIHRoaXMuY29vbGRvd24gPSAwO1xyXG4gICAgdGhpcy5jb29sZG93blRpbWUgPSAyMDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbY2FudmFzLndpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0IC8gMl07XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvc3BhY2VzaGlwLnBuZ1wiO1xyXG4gICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB0aGlzLm1heFNwZWVkID0gMTAwMDtcclxuICAgIHRoaXMuYW5nbGUgPSAwO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcblxyXG4gICAgdGhpcy5zaG9vdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5jb29sZG93biA9IHRoaXMuY29vbGRvd25UaW1lO1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBzaG90c1tpZF0gPSBuZXcgU2hvdChpZCwgdGhpcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHRoaXMuc2hpZWxkKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5hcmModGhpcy5wb3NpdGlvblswXSArIHRoaXMud2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uWzFdICsgdGhpcy5oZWlnaHQgLyAyLCAzMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigzNSwgMjM3LCA4NiwgMC41KVwiO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiKDY2LCAxNjgsIDM2LCAwLjgpXCI7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICB2YXIgYXN0ZXJvaWQgPSBhc3Rlcm9pZHNbaV07XHJcbiAgICAgICAgaWYgKGhpdChhc3Rlcm9pZCwgdGhpcykpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNoaWVsZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBhc3Rlcm9pZC5leHBsb2RlKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2FtZU92ZXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmdsZSA9IHRoaXMucm90YXRpb247XHJcbiAgICAgIGlmICh0aGlzLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgIHRoaXMuY29vbGRvd24tLTtcclxuICAgICAgfVxyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNob3QoaWQsIHNwYWNlc2hpcCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzBdICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnggK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueCAqIE1hdGguY29zKCgoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSkgLyAxODApLFxyXG4gICAgICBzcGFjZXNoaXAucG9zaXRpb25bMV0gK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueSArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi55ICogTWF0aC5zaW4oKChzcGFjZXNoaXAucm90YXRpb24gLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCksXHJcbiAgICBdO1xyXG4gICAgdGhpcy53aWR0aCA9IDk7XHJcbiAgICB0aGlzLmhlaWdodCA9IDE1O1xyXG4gICAgdGhpcy5hbmdsZSA9IHNwYWNlc2hpcC5hbmdsZTtcclxuICAgIHRoaXMucm90YXRpb24gPSBzcGFjZXNoaXAucm90YXRpb247XHJcbiAgICB0aGlzLnNwZWVkID0gc3BhY2VzaGlwLnNwZWVkICsgNTAwO1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IHNwYWNlc2hpcC5yYW5nZTtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBcImFzdGVyb2lkcy9zaG90LnBuZ1wiO1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEFzdGVyb2lkKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLndpZHRoID0gTWF0aC5yYW5kb20oKSAqIDUwICsgMjA7XHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMud2lkdGg7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RW50cnlQb3NpdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5yb3RhdGlvblNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDYgLSAzO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAzMDAgKyAyO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL2FzdGVyb2lkXCIgKyAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNikgKyAxKSArIFwiLnBuZ1wiO1xyXG5cclxuICAgIHRoaXMuZXhwbG9kZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgZXhwbG9zaW9uc1t0aGlzLmlkXSA9IG5ldyBFeHBsb3Npb24odGhpcyk7XHJcbiAgICAgIHJldHVybiBkZWxldGUgYXN0ZXJvaWRzW3RoaXMuaWRdO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xyXG4gICAgICBpZiAodGhpcy5yb3RhdGlvbiA+IDM2MCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSB0aGlzLnJvdGF0aW9uIC0gMzYwO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucm90YXRpb24gPCAwKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDM2MCArIHRoaXMucm90YXRpb247XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSBpbiBzaG90cykge1xyXG4gICAgICAgIHZhciBzaG90ID0gc2hvdHNbaV07XHJcbiAgICAgICAgaWYgKGhpdChzaG90LCB0aGlzKSkge1xyXG4gICAgICAgICAgdGhpcy5leHBsb2RlKCk7XHJcbiAgICAgICAgICB2YXIgcG9pbnRzID0gTWF0aC5mbG9vcigoc2hvdC5zcGVlZCAtIDUwMCkgLyAxMCArIDcwIC0gdGhpcy53aWR0aCk7XHJcbiAgICAgICAgICBpZiAoTWF0aC5mbG9vcigocG9pbnRzICsgJHNjb3BlLnNjb3JlKSAvIDEwMCkgPiBNYXRoLmZsb29yKCRzY29wZS5zY29yZSAvIDEwMCkpIHtcclxuICAgICAgICAgICAgc3Bhd25Qb3dlcnVwKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkc2NvcGUuc2NvcmUgKz0gcG9pbnRzO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgZGVsZXRlIHNob3RzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEV4cGxvc2lvbihvYmplY3QpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbb2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV1dO1xyXG4gICAgdGhpcy53aWR0aCA9IG9iamVjdC53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gb2JqZWN0LmhlaWdodDtcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLmN5Y2xlID0ge1xyXG4gICAgICByb3dzOiA2LFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICBzaXplOiBbMjU2LCAyNTZdLFxyXG4gICAgICBpOiAwLFxyXG4gICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDQ3O1xyXG4gICAgdGhpcy5pbWcgPSBleHBsb3Npb25JbWFnZTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBQb3dlcnVwKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvd2VydXAgPSBwb3dlcnVwVHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG93ZXJ1cFR5cGVzLmxlbmd0aCldO1xyXG4gICAgdGhpcy5jeWNsZSA9IHRoaXMucG93ZXJ1cC5jeWNsZTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAxMDAwO1xyXG4gICAgaWYgKHRoaXMuY3ljbGUuc2l6ZVsxXSA+IHRoaXMuY3ljbGUuc2l6ZVswXSkge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IDQwO1xyXG4gICAgICB0aGlzLndpZHRoID0gTWF0aC5yb3VuZCgodGhpcy5oZWlnaHQgLyB0aGlzLmN5Y2xlLnNpemVbMV0pICogdGhpcy5jeWNsZS5zaXplWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSA0MDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLnJvdW5kKCh0aGlzLndpZHRoIC8gdGhpcy5jeWNsZS5zaXplWzBdKSAqIHRoaXMuY3ljbGUuc2l6ZVsxXSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RW50cnlQb3NpdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmltZyA9IHRoaXMucG93ZXJ1cC5pbWc7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMTUwICsgNTA7XHJcbiAgICB2YXIgZGVsYXkgPSA1O1xyXG4gICAgdGhpcy5tb3ZlID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBwb3dlcnVwc1t0aGlzLmlkXTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaGl0KHNwYWNlc2hpcCwgdGhpcykpIHtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2UgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5hbm5vdW5jZW1lbnQgPSB0aGlzLnBvd2VydXAuYW5ub3VuY2VtZW50O1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5hbm5vdW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHRoaXMucG93ZXJ1cC5hY3RpdmF0ZShzcGFjZXNoaXApO1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAoZGVsYXkgPD0gMCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxheSA9IDU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsYXktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmUob2JqZWN0KSB7XHJcbiAgICBvYmplY3QucG9zaXRpb25bMF0gKz0gKG9iamVjdC5zcGVlZCAvIDEwMCkgKiBNYXRoLmNvcygoKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIG9iamVjdC5wb3NpdGlvblsxXSArPSAob2JqZWN0LnNwZWVkIC8gMTAwKSAqIE1hdGguc2luKCgob2JqZWN0LmFuZ2xlIC0gOTApICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgaWYgKG9iamVjdC5wb3NpdGlvblswXSA+IGNhbnZhcy53aWR0aCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMF0gPSAtb2JqZWN0LndpZHRoO1xyXG4gICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMF0gPCAtb2JqZWN0LndpZHRoKSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IGNhbnZhcy53aWR0aDtcclxuICAgIH1cclxuICAgIGlmIChvYmplY3QucG9zaXRpb25bMV0gPiBjYW52YXMuaGVpZ2h0KSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblsxXSA9IC1vYmplY3QuaGVpZ2h0O1xyXG4gICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMV0gPCAtb2JqZWN0LmhlaWdodCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMV0gPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV0pO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShvYmplY3Qud2lkdGggLyAyLCBvYmplY3QuaGVpZ2h0IC8gMik7XHJcbiAgICBjdHgucm90YXRlKChvYmplY3Qucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBpZiAob2JqZWN0LmN5Y2xlKSB7XHJcbiAgICAgIHZhciBjb2x1bW4gPSBvYmplY3QuY3ljbGUuaSAlIG9iamVjdC5jeWNsZS5jb2x1bW5zO1xyXG4gICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcihvYmplY3QuY3ljbGUuaSAvIG9iamVjdC5jeWNsZS5jb2x1bW5zKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICBvYmplY3QuaW1nLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzBdICogY29sdW1uLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzFdICogcm93LFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzBdLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzFdLFxyXG4gICAgICAgIC1vYmplY3Qud2lkdGggLyAyLFxyXG4gICAgICAgIC1vYmplY3QuaGVpZ2h0IC8gMixcclxuICAgICAgICBvYmplY3Qud2lkdGgsXHJcbiAgICAgICAgb2JqZWN0LmhlaWdodCxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChvYmplY3QuY3ljbGUuaSA8PSAwKSB7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSAwO1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKG9iamVjdC5jeWNsZS5pID49IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MpIHtcclxuICAgICAgICBvYmplY3QuY3ljbGUuaSA9IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MgLSAxO1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3R4LmRyYXdJbWFnZShvYmplY3QuaW1nLCAtb2JqZWN0LndpZHRoIC8gMiwgLW9iamVjdC5oZWlnaHQgLyAyLCBvYmplY3Qud2lkdGgsIG9iamVjdC5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHZhciBzcGFjZXNoaXA7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIHNwYWNlc2hpcCA9IG5ldyBTcGFjZXNoaXAoKTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgIGF1dG9TcGF3bigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RW50cnlQb3NpdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB2YXIgZ3JpZFggPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciBncmlkWSA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIHgsXHJcbiAgICAgIHkgPSAwO1xyXG4gICAgaWYgKGdyaWRYID49IDEpIHtcclxuICAgICAgeCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XHJcbiAgICAgIGlmICh5ID49IDEpIHtcclxuICAgICAgICB5ID0gMCAtIGhlaWdodDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeSA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICBpZiAoZ3JpZFkgPj0gMSkge1xyXG4gICAgICAgIHggPSAwIC0gd2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFt4LCB5XTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpdChvYmplY3QxLCBvYmplY3QyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBvYmplY3QxLnBvc2l0aW9uWzBdIDwgb2JqZWN0Mi5wb3NpdGlvblswXSArIG9iamVjdDIud2lkdGggJiZcclxuICAgICAgb2JqZWN0Mi5wb3NpdGlvblswXSA8IG9iamVjdDEucG9zaXRpb25bMF0gKyBvYmplY3QxLndpZHRoICYmXHJcbiAgICAgIG9iamVjdDEucG9zaXRpb25bMV0gPCBvYmplY3QyLnBvc2l0aW9uWzFdICsgb2JqZWN0Mi5oZWlnaHQgJiZcclxuICAgICAgb2JqZWN0Mi5wb3NpdGlvblsxXSA8IG9iamVjdDEucG9zaXRpb25bMV0gKyBvYmplY3QxLmhlaWdodFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGF1dG9TcGF3bigpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhhc3Rlcm9pZHMpLmxlbmd0aCA8IDIwMCkge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH1cclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhdXRvU3Bhd24oKTtcclxuICAgICAgfSwgc3Bhd25JbnRlcnZhbCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduSW50ZXJ2YWwoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnNjb3JlIDwgMTAwMCkge1xyXG4gICAgICByZXR1cm4gMTAwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgMjAwMCkge1xyXG4gICAgICByZXR1cm4gOTAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCAzMDAwKSB7XHJcbiAgICAgIHJldHVybiA4MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDQwMDApIHtcclxuICAgICAgcmV0dXJuIDcwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNTAwMCkge1xyXG4gICAgICByZXR1cm4gNjAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA2MDAwKSB7XHJcbiAgICAgIHJldHVybiA1MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDcwMDApIHtcclxuICAgICAgcmV0dXJuIDQwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgODAwMCkge1xyXG4gICAgICByZXR1cm4gMzAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDIwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduQXN0ZXJvaWRzKGFtb3VudCkge1xyXG4gICAgdmFyIGkgPSAwO1xyXG4gICAgZG8ge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH0gd2hpbGUgKGkrKyA8PSBhbW91bnQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25Qb3dlcnVwKCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHBvd2VydXBzKS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIHBvd2VydXBzW2lkXSA9IG5ldyBQb3dlcnVwKGlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdhbWVPdmVyKCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgIGFzdGVyb2lkc1tpXS5leHBsb2RlKCk7XHJcbiAgICB9XHJcbiAgICBzaG90cyA9IHt9O1xyXG4gICAgaWYgKCRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmhpZ2hzY29yZS5hc3Rlcm9pZHMgPCAkc2NvcGUuc2NvcmUpIHtcclxuICAgICAgICAkc2NvcGUuY3VycmVudFVzZXIuaGlnaHNjb3JlLmFzdGVyb2lkcyA9ICRzY29wZS5zY29yZTtcclxuICAgICAgICBHYW1lU3ZjLnNldEhpZ2hzY29yZShcImFzdGVyb2lkc1wiLCAkc2NvcGUuY3VycmVudFVzZXIuX2lkLCAkc2NvcGUuc2NvcmUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hzY29yZSA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5oaWdoc2NvcmUgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG4gIC8vIGRyYXcgY2FudmFzLlxyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgLy8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuICAgIC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG4gICAgLy8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuICAgIHJlc2l6ZUNhbnZhcygpO1xyXG4gIH1cclxuICAvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcbiAgLy8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcbiAgLy8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcbiAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSAxO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTAgOiA1OSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplKCk7XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG5cclxuICB2YXIgdGFsbHkgPSAwO1xyXG4gIHZhciBkaXJlY3Rpb24gPSB0cnVlO1xyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgZm9yICh2YXIgaSBpbiBzaG90cykge1xyXG4gICAgICBpZiAoc2hvdHNbaV0ubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBzaG90c1tpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG90c1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgYXN0ZXJvaWRzW2ldLm1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBwb3dlcnVwcykge1xyXG4gICAgICBwb3dlcnVwc1tpXS5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gZXhwbG9zaW9ucykge1xyXG4gICAgICBpZiAoZXhwbG9zaW9uc1tpXS5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIGV4cGxvc2lvbnNbaV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXhwbG9zaW9uc1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGV2YWx1YXRlS2V5cygpO1xyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIHNwYWNlc2hpcC5tb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgY2FudmFzLndpZHRoLCAwKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMFwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjAuMjVcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjVcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjc1XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMS4wXCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgICBjdHguZm9udCA9IFwiNjBweCBNb25vdG9uXCI7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcIkFzdGVyb2lkc1wiLCBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KFwiQXN0ZXJvaWRzXCIpLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpO1xyXG4gICAgICBjdHguZm9udCA9IFwiMjBweCBBbGRyaWNoXCI7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICBcIlByZXNzIHNwYWNlIHRvIHN0YXJ0XCIsXHJcbiAgICAgICAgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIlByZXNzIHNwYWNlIHRvIHN0YXJ0XCIpLndpZHRoIC8gMixcclxuICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMiArIDIwLFxyXG4gICAgICApO1xyXG4gICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgXCJEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5IExhdXJlbnQgRGViYWNrZXJcIixcclxuICAgICAgICBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KFwiRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyXCIpLndpZHRoIC8gMixcclxuICAgICAgICBjYW52YXMuaGVpZ2h0IC0gMzAsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0YWxseSArPSBkaXJlY3Rpb24gPyAxIDogLTE7XHJcbiAgICBpZiAodGFsbHkgPiAxMDApIHtcclxuICAgICAgdGFsbHkgPSAxMDA7XHJcbiAgICAgIGRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICh0YWxseSA8IDApIHtcclxuICAgICAgdGFsbHkgPSAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLnNwYWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiYXN0ZXJvaWRzL3NwYWNlJyArIHNwYWNlICsgJy5qcGdcIiknLFxyXG4gICAgfTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkJ1YmJsZXNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWJibGVzLXBhZ2VcIik7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgdmFyIGJ1YmJsZXMgPSBbXTtcclxuICB2YXIgY29sb3JzID0gW1wiI2ZmYzMwMFwiLCBcIiNmZjU3MzNcIiwgXCIjYzcwMDM5XCIsIFwiIzkwMGMzZVwiLCBcIiM1NzE4NDVcIl07XHJcblxyXG4gIGZ1bmN0aW9uIEJ1YmJsZSgpIHtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAwO1xyXG4gICAgdGhpcy5yYWRpdXMgPSAxO1xyXG4gICAgdGhpcy5leHBhbmRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgdGhpcy5jaXJjdW1mZXJlbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNTApICsgNTtcclxuICAgIHRoaXMubWF4UmFkaXVzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjAwKSArIDIwO1xyXG4gICAgdGhpcy54ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoKTtcclxuICAgIHRoaXMueSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGhpcy52eCA9IE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xO1xyXG4gICAgdGhpcy52eSA9IE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGJ1YmJsZXMuZm9yRWFjaChmdW5jdGlvbiAoYnViYmxlKSB7XHJcbiAgICAgIHZhciBjb2xvciA9IGNvbG9yc1tNYXRoLnJvdW5kKChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cykgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyhidWJibGUueCwgYnViYmxlLnksIGJ1YmJsZS5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yc1tNYXRoLnJvdW5kKChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cykgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1tjb2xvcnMubGVuZ3RoIC0gTWF0aC5yb3VuZCgoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMpIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gKGJ1YmJsZS5jaXJjdW1mZXJlbmNlICogYnViYmxlLnJhZGl1cykgLyBidWJibGUubWF4UmFkaXVzO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbHRlckJ1YmJsZXMoKSB7XHJcbiAgICBidWJibGVzLnB1c2gobmV3IEJ1YmJsZSgpKTtcclxuICAgIGJ1YmJsZXMgPSBidWJibGVzLmZpbHRlcihmdW5jdGlvbiAoYnViYmxlKSB7XHJcbiAgICAgIGlmIChidWJibGUucmFkaXVzID09PSBidWJibGUubWF4UmFkaXVzKSB7XHJcbiAgICAgICAgYnViYmxlLmV4cGFuZGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1YmJsZS54ICs9IGJ1YmJsZS52eCAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnkgKz0gYnViYmxlLnZ5ICogYnViYmxlLnNwZWVkO1xyXG4gICAgICBidWJibGUucmFkaXVzICs9IGJ1YmJsZS5leHBhbmRpbmcgPyAxIDogLTE7XHJcbiAgICAgIHJldHVybiBidWJibGUucmFkaXVzID4gMDtcclxuICAgIH0pO1xyXG4gICAgZHJhdygpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG5cclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gU3RhcnQgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgYW5kXHJcbiAgICAvLyBkcmF3IGNhbnZhcy5cclxuICAgIGluaXRpYWxpemUoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgICAvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG4gICAgICAvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuICAgICAgLy8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcbiAgICAgIC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcbiAgICAgIHJlc2l6ZUNhbnZhcygpO1xyXG4gICAgfVxyXG4gICAgLy8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG4gICAgLy8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcbiAgICAvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuICAgIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDU1IDogNTYpO1xyXG4gICAgfVxyXG4gIH0pKCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQ2hhcmFkZXNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAkc2NvcGUuc2VsZWN0V29yZCA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgJHNjb3BlLndvcmQgPSAkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICRzY29wZS5jaGFyYWRlc1tjYXRlZ29yeV0ubGVuZ3RoKV07XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJDb250YWN0Q3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBFbWFpbFN2Yykge1xyXG4gICRzY29wZS5vcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNwYW1cIixcclxuICAgICAgdGV4dDogXCJJIGFtIGEgc3BhbSBib3QgYW5kIGF1dG9tYXRpY2FsbHkgY2hlY2sgdGhlIGZpcnN0IG9wdGlvbiBJIGZpbmQhXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk9wcG9ydHVuaXR5XCIsXHJcbiAgICAgIHRleHQ6IFwiWW91IHNlZW0gdG8gaGF2ZSB0aGUgc2tpbGxzIEkgc2VlaywgSSdkIGxpa2UgdG8gdGFsayBhYm91dCBzb21lIG9wcG9ydHVuaXRpZXMuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJlc3VtZVwiLFxyXG4gICAgICB0ZXh0OiBcIkkgZGlnIHRoZSByZXN1bWUsIGhvdyBkaWQgeW91IG1ha2UgaXQ/XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk90aGVyXCIsXHJcbiAgICAgIHRleHQ6IFwiU3VtdGluIGVsc2UhXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gICRzY29wZS5jb250YWN0ID0ge1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgICBhYm91dDogXCJcIixcclxuICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUuc2VuZGluZyA9IHRydWU7XHJcbiAgICBFbWFpbFN2Yy5zZW5kKHtcclxuICAgICAgZW1haWw6ICRzY29wZS5jb250YWN0LmVtYWlsLFxyXG4gICAgICBuYW1lOiAkc2NvcGUuY29udGFjdC5uYW1lLFxyXG4gICAgICBwaG9uZTogJHNjb3BlLmNvbnRhY3QucGhvbmUsXHJcbiAgICAgIGFib3V0OiAkc2NvcGUuY29udGFjdC5hYm91dCxcclxuICAgICAgbWVzc2FnZTogJHNjb3BlLmNvbnRhY3QubWVzc2FnZSxcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS50b2FzdChcIk1lc3NhZ2Ugc2VudFwiKTtcclxuICAgICAgICAkc2NvcGUuc2VudCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTLiBzdGF0dXM9JWQsIHRleHQ9JXNcIiwgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS50ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAkc2NvcGUudG9hc3QoXCJNZXNzYWdlIHNlbmQgZmFpbGVkXCIpO1xyXG4gICAgICAgICRzY29wZS5zZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGQUlMRUQuIGVycm9yPVwiLCBlcnIpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdFeHBlcmllbmNlQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLmdldFNraWxsID0gZnVuY3Rpb24oc2tpbGxDb2RlKSB7XHJcbiAgICBpZiAoISRzY29wZS5za2lsbHMpIHJldHVybjtcclxuICAgIHJldHVybiAkc2NvcGUuc2tpbGxzLmZpbmQoZnVuY3Rpb24oc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIHNraWxsLmNvZGUgPT09IHNraWxsQ29kZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdIb2JiaWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR3aW5kb3cpIHtcclxuXHJcbiAgJHNjb3BlLmhvYmJ5U2VsZWN0b3JWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICQuZ2V0SlNPTignaHR0cHM6Ly93d3cucmVkZGl0LmNvbS91c2VyL2JlbGdvY2FuYWRpYW4vYWJvdXQvLmpzb24nLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gJHNjb3BlLmhvYmJpZXNbMF07XHJcblxyXG4gICRzY29wZS5zZWxlY3RIb2JieSA9IGZ1bmN0aW9uIChob2JieSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkSG9iYnkgPSBob2JieTtcclxuICAgICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zaG93SG9iYnkgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnJheSkge1xyXG4gICAgaWYgKCF2YWx1ZS5pbWFnZXMpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB2YWx1ZS5pbWFnZXMubGVuZ3RoID4gMDtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMZW1taW5nc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBHYW1lU3ZjKSB7XHJcblxyXG4gIHZhciBMRUZUID0gMDtcclxuICB2YXIgUklHSFQgPSAxO1xyXG5cclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlbW1pbmdzLXBhZ2UnKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgdmFyIGxlbW1pbmdzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBsZW1taW5nc0ltYWdlLnNyYyA9ICdsZW1taW5ncy9sZW1taW5ncy5wbmcnO1xyXG4gIHZhciBkZWNvckltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgZGVjb3JJbWFnZS5zcmMgPSAnbGVtbWluZ3MvZGVjb3IucG5nJztcclxuICB2YXIgbGVtbWluZ3MgPSB7fTtcclxuICB2YXIgc3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICB2YXIgYWN0aW9ucyA9IHtcclxuICAgIHdhbGs6IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbMzIwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgaHVoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMzIwLCAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IHRydWVcclxuICAgIH0sXHJcbiAgICBmYWxsOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgODBdLFxyXG4gICAgICBlbmQ6IFsxNjAsIDEwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZmx5OiB7XHJcbiAgICAgIHN0YXJ0OiBbMTYwLCA4MF0sXHJcbiAgICAgIGVuZDogWzQ4MCwgMTEwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzdG9wOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMTIwXSxcclxuICAgICAgZW5kOiBbNjQwLCAxNDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBjbGltYjoge1xyXG4gICAgICBzdGFydDogWzAsIDE2MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTg1XSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgc3RhcnQ6IFswLCAyMDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDIyNV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHB1bmNoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjQwXSxcclxuICAgICAgZW5kOiBbNjQwLCAzMDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMixcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBkaWc6IHtcclxuICAgICAgc3RhcnQ6IFswLCAzMjBdLFxyXG4gICAgICBlbmQ6IFszMjAsIDM0NV0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIExlbW1pbmcoaW5pdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLndpZHRoIC0gMjAwKSkgKyAxMDAsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjYW52YXMuaGVpZ2h0IC0gMjAwKSkgKyAxMDBdO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogMiA+IDEgPyBMRUZUIDogUklHSFQ7XHJcbiAgICB0aGlzLmFjdCA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbnNbYWN0aW9uXTtcclxuICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgdGhpcy5oZWlnaHQgPSAodGhpcy5hY3Rpb24uZW5kWzFdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAoMjAgKiAodGhpcy5hY3Rpb24ucm93cyAtIDEpKSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5hY3QoaW5pdCk7XHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBMRUZUKSB7XHJcbiAgICAgICAgY3R4LnNjYWxlKC0xLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHZhciByb3cgPSBNYXRoLmZsb29yKHRoaXMuY3ljbGUgLyB0aGlzLmFjdGlvbi5jb2x1bW5zKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZShsZW1taW5nc0ltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKCh0aGlzLmhlaWdodCArIDIwKSAqIHJvdykgKyB0aGlzLmFjdGlvbi5zdGFydFsxXSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICBpZiAodGhpcy5hY3Rpb24ucmV2ZXJzZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPj0gdGhpcy5hY3Rpb24uY29sdW1ucyAqIHRoaXMuYWN0aW9uLnJvd3MpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSAhdGhpcy5hbmltYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS0tO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBIYXRjaCgpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbMjAsIDIwXTtcclxuICAgIHRoaXMuYWN0aW9uID0ge1xyXG4gICAgICBzdGFydDogWzAsIDBdLFxyXG4gICAgICBlbmQ6IFs4MiwgNTAwXSxcclxuICAgICAgY29sdW1uczogMSxcclxuICAgICAgcm93czogMTBcclxuICAgIH1cclxuICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdKSAvIHRoaXMuYWN0aW9uLnJvd3M7XHJcbiAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgIHRoaXMub3BlbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25bMF0sIHRoaXMucG9zaXRpb25bMV0pO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICB2YXIgY29sdW1uLCByb3c7XHJcbiAgICAgIGlmIChzdGFydGVkKSB7XHJcbiAgICAgICAgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgICAgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCA5KSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbHVtbiA9IDA7XHJcbiAgICAgICAgcm93ID0gMDtcclxuICAgICAgfVxyXG4gICAgICBjdHguZHJhd0ltYWdlKGRlY29ySW1hZ2UsICh0aGlzLndpZHRoICogY29sdW1uKSArIHRoaXMuYWN0aW9uLnN0YXJ0WzBdLCAodGhpcy5oZWlnaHQgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAxLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkxlbW1pbmcoKSB7XHJcbiAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICBsZW1taW5nc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApXSA9IG5ldyBMZW1taW5nKGFjdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHQvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG5cdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHQvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblx0XHQvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG5cdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0fVxyXG5cdC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuXHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcblx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogMTA1KTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxuICBzcGF3bkxlbW1pbmcoKTtcclxuICBsZXQgaGF0Y2ggPSBuZXcgSGF0Y2goKVxyXG4gIGRyYXcoKTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGlmICghc3RhcnRlZCkge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5mb250PSc0MHB4IE1vbm90b24nO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gJzEwJztcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xyXG4gICAgICBjdHgucmVjdCgxNSwgY2FudmFzLmhlaWdodCAtIDQ1LCBjdHgubWVhc3VyZVRleHQoJ1N0YXJ0Jykud2lkdGggKyAyMCwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLmhlaWdodCArIGNhbnZhcy5oZWlnaHQgLSA0NSk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnU3RhcnQnLCAyMCwgY2FudmFzLmhlaWdodCAtIDUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAodmFyIGkgaW4gbGVtbWluZ3MpIHtcclxuICAgICAgICBsZW1taW5nc1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGhhdGNoLm9wZW4oKTtcclxuICAgIHN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgZHJhdygpO1xyXG4gICAgfSwgMTUwKTtcclxuICB9XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xpc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgQ2F0ZWdvcmllc1N2Yykge1xyXG5cclxuICAkc2NvcGUuc2hvd0NhdGVnb3J5ID0gdHJ1ZTtcclxuXHJcbiAgJHNjb3BlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLmdldENhdGVnb3JpZXMoKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgJHNjb3BlLnRhc2tzID0gW107XHJcbiAgICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICBmb3IgKHZhciBqIGluICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzKSB7XHJcbiAgICAgICAgICAkc2NvcGUudGFza3MucHVzaCh7XHJcbiAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSxcclxuICAgICAgICAgICAgXCJ0YXNrXCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzW2pdLm5hbWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdENhdGVnb3J5ID0gZnVuY3Rpb24oY2F0ZWdvcnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRUYXNrcyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLnB1c2goJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY2F0ZWdvcmllc1tpXS5uYW1lID09PSBjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeSgkc2NvcGUuY2F0ZWdvcmllc1tpXSk7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuYWRkQ2F0ZWdvcnkoe1xyXG4gICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5pbml0KCk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZENhdGVnb3J5ID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLm5ld1Rhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXS5uYW1lID09PSB0YXNrKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSwge1xyXG4gICAgICAgIHRhc2s6IHRhc2tcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MucHVzaCh7IG5hbWU6IHRhc2sgfSk7XHJcbiAgICAgICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzWyRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5lbnRlcmVkVGFzayA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS51bnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmFkZFRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3QucHVzaCh0YXNrKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUucmVtb3ZlVGFzayA9IGZ1bmN0aW9uKHRhc2tMaXN0LCB0YXNrKSB7XHJcbiAgICB0YXNrTGlzdC5zcGxpY2UodGFza0xpc3QuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnN0YXJ0UHJpb3JpdGl6aW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLnNldFByaW9yaXR5TGlzdCgkc2NvcGUuc2VsZWN0ZWRUYXNrcyk7XHJcbiAgICAkbG9jYXRpb24ucGF0aCgnL3ByaW9yaXRpemUnKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0UXVlc3Rpb25zID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoISRzY29wZS5zZWxlY3RlZFRhc2tzKSByZXR1cm4gJyc7XHJcbiAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gJHNjb3BlLnNlbGVjdGVkVGFza3MubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICBjb3VudGVyICs9IGk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY291bnRlcjtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJMb2dpbkN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgRmlyZWJhc2VVSSBXaWRnZXQgdXNpbmcgRmlyZWJhc2UuXHJcbiAgdmFyIHVpID0gbmV3IGZpcmViYXNldWkuYXV0aC5BdXRoVUkoZmlyZWJhc2UuYXV0aCgpKTtcclxuXHJcbiAgJHNjb3BlLiRvbihcImxvZ291dFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHVpLnJlc2V0KCk7XHJcbiAgICBzdGFydFVJKCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0VUkoKSB7XHJcbiAgICB1aS5zdGFydChcIiNmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyXCIsIHtcclxuICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgc2lnbkluU3VjY2VzczogZnVuY3Rpb24gKGN1cnJlbnRVc2VyLCBjcmVkZW50aWFsLCByZWRpcmVjdFVybCkge1xyXG4gICAgICAgICAgLy8gTm8gcmVkaXJlY3QuXHJcbiAgICAgICAgICBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuYXV0aCgpXHJcbiAgICAgICAgICAgIC5jdXJyZW50VXNlci5nZXRJZFRva2VuKHRydWUpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChpZFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgVXNlclN2Yy5hdXRoZW50aWNhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGN1cnJlbnRVc2VyLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IGN1cnJlbnRVc2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGhvdG9VUkw6IGN1cnJlbnRVc2VyLnBob3RvVVJMLFxyXG4gICAgICAgICAgICAgICAgZW1haWxWZXJpZmllZDogY3VycmVudFVzZXIuZW1haWxWZXJpZmllZCxcclxuICAgICAgICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW4sXHJcbiAgICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoXCJsb2dpblwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgJChcIiNtb2RhbC1sb2dpblwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAgICAgICAgICAgICAgIC8vJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS50b2FzdChcIkxvZ2luIEZhaWxlZFwiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBzaWduSW5GYWlsdXJlIGNhbGxiYWNrIG11c3QgYmUgcHJvdmlkZWQgdG8gaGFuZGxlIG1lcmdlIGNvbmZsaWN0cyB3aGljaFxyXG4gICAgICAgIC8vIG9jY3VyIHdoZW4gYW4gZXhpc3RpbmcgY3JlZGVudGlhbCBpcyBsaW5rZWQgdG8gYW4gYW5vbnltb3VzIHVzZXIuXHJcbiAgICAgICAgc2lnbkluRmFpbHVyZTogZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBGb3IgbWVyZ2UgY29uZmxpY3RzLCB0aGUgZXJyb3IuY29kZSB3aWxsIGJlXHJcbiAgICAgICAgICAvLyAnZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdCcuXHJcbiAgICAgICAgICBpZiAoZXJyb3IuY29kZSAhPSBcImZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3RcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBUaGUgY3JlZGVudGlhbCB0aGUgdXNlciB0cmllZCB0byBzaWduIGluIHdpdGguXHJcbiAgICAgICAgICB2YXIgY3JlZCA9IGVycm9yLmNyZWRlbnRpYWw7XHJcbiAgICAgICAgICAvLyBDb3B5IGRhdGEgZnJvbSBhbm9ueW1vdXMgdXNlciB0byBwZXJtYW5lbnQgdXNlciBhbmQgZGVsZXRlIGFub255bW91c1xyXG4gICAgICAgICAgLy8gdXNlci5cclxuICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgLy8gRmluaXNoIHNpZ24taW4gYWZ0ZXIgZGF0YSBpcyBjb3BpZWQuXHJcbiAgICAgICAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhDcmVkZW50aWFsKGNyZWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdWlTaG93bjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy8gVGhlIHdpZGdldCBpcyByZW5kZXJlZC5cclxuICAgICAgICAgIC8vIEhpZGUgdGhlIGxvYWRlci5cclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzaWduSW5TdWNjZXNzVXJsOiBcIi9ob21lXCIsXHJcbiAgICAgIHNpZ25Jbk9wdGlvbnM6IFtcclxuICAgICAgICAvL2ZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgXSxcclxuXHJcbiAgICAgIC8vIFdpbGwgdXNlIHBvcHVwIGZvciBJRFAgUHJvdmlkZXJzIHNpZ24taW4gZmxvdyBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0LCByZWRpcmVjdC5cclxuICAgICAgc2lnbkluRmxvdzogXCJwb3B1cFwiLFxyXG4gICAgICAvLyBPdGhlciBjb25maWcgb3B0aW9ucy4uLlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGFydFVJKCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRmaWx0ZXIsIFBvc3RzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5hZGRQb3N0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCRzY29wZS5wb3N0Qm9keSkge1xyXG4gICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xyXG4gICAgICAgIGJvZHk6ICRzY29wZS5wb3N0Qm9keVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUG9zdHNTdmMuZmV0Y2goKVxyXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLnBvc3RzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbignd3M6bmV3X3Bvc3QnLCBmdW5jdGlvbiAoXywgcG9zdCkge1xyXG4gICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIFBvc3RzU3ZjLmdldFBvc3QocG9zdClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RzLnVuc2hpZnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlByb2ZpbGVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG4gIGNvbnN0IGNvdW50cmllcyA9IFtcclxuICAgIHsgbmFtZTogXCJBbmRvcnJhXCIsIGZsYWc6IFwiZmxhZy1hZFwiLCB0aWRiaXQ6IFwiXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgQXJhYiBFbWlyYXRlc1wiLCBmbGFnOiBcImZsYWctYWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFmZ2hhbmlzdGFuXCIsIGZsYWc6IFwiZmxhZy1hZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLCBmbGFnOiBcImZsYWctYWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFuZ3VpbGxhXCIsIGZsYWc6IFwiZmxhZy1haVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWxiYW5pYVwiLCBmbGFnOiBcImZsYWctYWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFybWVuaWFcIiwgZmxhZzogXCJmbGFnLWFtXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbmdvbGFcIiwgZmxhZzogXCJmbGFnLWFvXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbnRhcmN0aWNhXCIsIGZsYWc6IFwiZmxhZy1hcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXJnZW50aW5hXCIsIGZsYWc6IFwiZmxhZy1hclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW1lcmljYW4gU29tb2FcIiwgZmxhZzogXCJmbGFnLWFzXCIgfSxcclxuICAgIHsgbmFtZTogXCJBdXN0cmlhXCIsIGZsYWc6IFwiZmxhZy1hdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXVzdHJhbGlhXCIsIGZsYWc6IFwiZmxhZy1hdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXJ1YmFcIiwgZmxhZzogXCJmbGFnLWF3XCIgfSxcclxuICAgIHsgbmFtZTogXCLDhWxhbmQgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctYXhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF6ZXJiYWlqYW5cIiwgZmxhZzogXCJmbGFnLWF6XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsIGZsYWc6IFwiZmxhZy1iYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFyYmFkb3NcIiwgZmxhZzogXCJmbGFnLWJiXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYW5nbGFkZXNoXCIsIGZsYWc6IFwiZmxhZy1iZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVsZ2l1bVwiLCBmbGFnOiBcImZsYWctYmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1cmtpbmEgRmFzb1wiLCBmbGFnOiBcImZsYWctYmZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1bGdhcmlhXCIsIGZsYWc6IFwiZmxhZy1iZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFocmFpblwiLCBmbGFnOiBcImZsYWctYmhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1cnVuZGlcIiwgZmxhZzogXCJmbGFnLWJpXCIgfSxcclxuICAgIHsgbmFtZTogXCJCZW5pblwiLCBmbGFnOiBcImZsYWctYmpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEJhcnRow6lsZW15XCIsIGZsYWc6IFwiZmxhZy1ibFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVybXVkYVwiLCBmbGFnOiBcImZsYWctYm1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJydW5laSBcIiwgZmxhZzogXCJmbGFnLWJuXCIgfSxcclxuICAgIHsgbmFtZTogXCJCb2xpdmlhLCBQbHVyaW5hdGlvbmFsIFN0YXRlIG9mXCIsIGZsYWc6IFwiZmxhZy1ib1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmFcIiwgZmxhZzogXCJmbGFnLWJxXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcmF6aWxcIiwgZmxhZzogXCJmbGFnLWJyXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYWhhbWFzXCIsIGZsYWc6IFwiZmxhZy1ic1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmh1dGFuXCIsIGZsYWc6IFwiZmxhZy1idFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm91dmV0IElzbGFuZFwiLCBmbGFnOiBcImZsYWctYnZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvdHN3YW5hXCIsIGZsYWc6IFwiZmxhZy1id1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVsYXJ1c1wiLCBmbGFnOiBcImZsYWctYnlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGl6ZVwiLCBmbGFnOiBcImZsYWctYnpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbmFkYVwiLCBmbGFnOiBcImZsYWctY2FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1jY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29uZ28sIHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZVwiLCBmbGFnOiBcImZsYWctY2RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctY2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbmdvXCIsIGZsYWc6IFwiZmxhZy1jZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dpdHplcmxhbmRcIiwgZmxhZzogXCJmbGFnLWNoXCIgfSxcclxuICAgIHsgbmFtZTogXCJDw7R0ZSBkJ0l2b2lyZVwiLCBmbGFnOiBcImZsYWctY2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvb2sgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctY2tcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoaWxlXCIsIGZsYWc6IFwiZmxhZy1jbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FtZXJvb25cIiwgZmxhZzogXCJmbGFnLWNtXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGluYVwiLCBmbGFnOiBcImZsYWctY25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbG9tYmlhXCIsIGZsYWc6IFwiZmxhZy1jb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29zdGEgUmljYVwiLCBmbGFnOiBcImZsYWctY3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN1YmFcIiwgZmxhZzogXCJmbGFnLWN1XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYWJvIFZlcmRlXCIsIGZsYWc6IFwiZmxhZy1jdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3VyYcOnYW9cIiwgZmxhZzogXCJmbGFnLWN3XCIgfSxcclxuICAgIHsgbmFtZTogXCJDaHJpc3RtYXMgSXNsYW5kXCIsIGZsYWc6IFwiZmxhZy1jeFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3lwcnVzXCIsIGZsYWc6IFwiZmxhZy1jeVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3plY2ggUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWN6XCIgfSxcclxuICAgIHsgbmFtZTogXCJHZXJtYW55XCIsIGZsYWc6IFwiZmxhZy1kZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGppYm91dGlcIiwgZmxhZzogXCJmbGFnLWRqXCIgfSxcclxuICAgIHsgbmFtZTogXCJEZW5tYXJrXCIsIGZsYWc6IFwiZmxhZy1ka1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRG9taW5pY2FcIiwgZmxhZzogXCJmbGFnLWRtXCIgfSxcclxuICAgIHsgbmFtZTogXCJEb21pbmljYW4gUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWRvXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbGdlcmlhXCIsIGZsYWc6IFwiZmxhZy1kelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWN1YWRvclwiLCBmbGFnOiBcImZsYWctZWNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVzdG9uaWFcIiwgZmxhZzogXCJmbGFnLWVlXCIgfSxcclxuICAgIHsgbmFtZTogXCJFZ3lwdFwiLCBmbGFnOiBcImZsYWctZWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIldlc3Rlcm4gU2FoYXJhXCIsIGZsYWc6IFwiZmxhZy1laFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXJpdHJlYVwiLCBmbGFnOiBcImZsYWctZXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNwYWluXCIsIGZsYWc6IFwiZmxhZy1lc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXRoaW9waWFcIiwgZmxhZzogXCJmbGFnLWV0XCIgfSxcclxuICAgIHsgbmFtZTogXCJGaW5sYW5kXCIsIGZsYWc6IFwiZmxhZy1maVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmlqaVwiLCBmbGFnOiBcImZsYWctZmpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKVwiLCBmbGFnOiBcImZsYWctZmtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2ZcIiwgZmxhZzogXCJmbGFnLWZtXCIgfSxcclxuICAgIHsgbmFtZTogXCJGYXJvZSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1mb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJhbmNlXCIsIGZsYWc6IFwiZmxhZy1mclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2Fib25cIiwgZmxhZzogXCJmbGFnLWdhXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kXCIsIGZsYWc6IFwiZmxhZy1nYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3JlbmFkYVwiLCBmbGFnOiBcImZsYWctZ2RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdlb3JnaWFcIiwgZmxhZzogXCJmbGFnLWdlXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggR3VpYW5hXCIsIGZsYWc6IFwiZmxhZy1nZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3Vlcm5zZXlcIiwgZmxhZzogXCJmbGFnLWdnXCIgfSxcclxuICAgIHsgbmFtZTogXCJHaGFuYVwiLCBmbGFnOiBcImZsYWctZ2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdpYnJhbHRhclwiLCBmbGFnOiBcImZsYWctZ2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZWVubGFuZFwiLCBmbGFnOiBcImZsYWctZ2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdhbWJpYVwiLCBmbGFnOiBcImZsYWctZ21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1aW5lYVwiLCBmbGFnOiBcImZsYWctZ25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YWRlbG91cGVcIiwgZmxhZzogXCJmbGFnLWdwXCIgfSxcclxuICAgIHsgbmFtZTogXCJFcXVhdG9yaWFsIEd1aW5lYVwiLCBmbGFnOiBcImZsYWctZ3FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZWVjZVwiLCBmbGFnOiBcImZsYWctZ3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1nc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VhdGVtYWxhXCIsIGZsYWc6IFwiZmxhZy1ndFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VhbVwiLCBmbGFnOiBcImZsYWctZ3VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1aW5lYS1CaXNzYXVcIiwgZmxhZzogXCJmbGFnLWd3XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdXlhbmFcIiwgZmxhZzogXCJmbGFnLWd5XCIgfSxcclxuICAgIHsgbmFtZTogXCJIb25nIEtvbmdcIiwgZmxhZzogXCJmbGFnLWhrXCIgfSxcclxuICAgIHsgbmFtZTogXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWhtXCIgfSxcclxuICAgIHsgbmFtZTogXCJIb25kdXJhc1wiLCBmbGFnOiBcImZsYWctaG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNyb2F0aWFcIiwgZmxhZzogXCJmbGFnLWhyXCIgfSxcclxuICAgIHsgbmFtZTogXCJIYWl0aVwiLCBmbGFnOiBcImZsYWctaHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkh1bmdhcnlcIiwgZmxhZzogXCJmbGFnLWh1XCIgfSxcclxuICAgIHsgbmFtZTogXCJJbmRvbmVzaWFcIiwgZmxhZzogXCJmbGFnLWlkXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmVsYW5kXCIsIGZsYWc6IFwiZmxhZy1pZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXNyYWVsXCIsIGZsYWc6IFwiZmxhZy1pbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXNsZSBvZiBNYW5cIiwgZmxhZzogXCJmbGFnLWltXCIgfSxcclxuICAgIHsgbmFtZTogXCJJbmRpYVwiLCBmbGFnOiBcImZsYWctaW5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwiLCBmbGFnOiBcImZsYWctaW9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIklyYXFcIiwgZmxhZzogXCJmbGFnLWlxXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmFuLCBJc2xhbWljIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1pclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSWNlbGFuZFwiLCBmbGFnOiBcImZsYWctaXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkl0YWx5XCIsIGZsYWc6IFwiZmxhZy1pdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSmVyc2V5XCIsIGZsYWc6IFwiZmxhZy1qZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSmFtYWljYVwiLCBmbGFnOiBcImZsYWctam1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkpvcmRhblwiLCBmbGFnOiBcImZsYWctam9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkphcGFuXCIsIGZsYWc6IFwiZmxhZy1qcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2VueWFcIiwgZmxhZzogXCJmbGFnLWtlXCIgfSxcclxuICAgIHsgbmFtZTogXCJLeXJneXpzdGFuXCIsIGZsYWc6IFwiZmxhZy1rZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FtYm9kaWFcIiwgZmxhZzogXCJmbGFnLWtoXCIgfSxcclxuICAgIHsgbmFtZTogXCJLaXJpYmF0aVwiLCBmbGFnOiBcImZsYWcta2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbW9yb3NcIiwgZmxhZzogXCJmbGFnLWttXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIiwgZmxhZzogXCJmbGFnLWtuXCIgfSxcclxuICAgIHsgbmFtZTogXCJLb3JlYSwgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWcta3BcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktvcmVhLCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWcta3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkt1d2FpdFwiLCBmbGFnOiBcImZsYWcta3dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNheW1hbiBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1reVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2F6YWtoc3RhblwiLCBmbGFnOiBcImZsYWcta3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1sYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGViYW5vblwiLCBmbGFnOiBcImZsYWctbGJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEx1Y2lhXCIsIGZsYWc6IFwiZmxhZy1sY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGllY2h0ZW5zdGVpblwiLCBmbGFnOiBcImZsYWctbGlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNyaSBMYW5rYVwiLCBmbGFnOiBcImZsYWctbGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpYmVyaWFcIiwgZmxhZzogXCJmbGFnLWxyXCIgfSxcclxuICAgIHsgbmFtZTogXCJMZXNvdGhvXCIsIGZsYWc6IFwiZmxhZy1sc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGl0aHVhbmlhXCIsIGZsYWc6IFwiZmxhZy1sdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTHV4ZW1ib3VyZ1wiLCBmbGFnOiBcImZsYWctbHVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxhdHZpYVwiLCBmbGFnOiBcImZsYWctbHZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpYnlhXCIsIGZsYWc6IFwiZmxhZy1seVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9yb2Njb1wiLCBmbGFnOiBcImZsYWctbWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbmFjb1wiLCBmbGFnOiBcImZsYWctbWNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbGRvdmEsIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1tZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9udGVuZWdyb1wiLCBmbGFnOiBcImZsYWctbWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IE1hcnRpbiAoRnJlbmNoIHBhcnQpXCIsIGZsYWc6IFwiZmxhZy1tZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFkYWdhc2NhclwiLCBmbGFnOiBcImZsYWctbWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hcnNoYWxsIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLW1oXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWNlZG9uaWEsIHRoZSBmb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLW1rXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxpXCIsIGZsYWc6IFwiZmxhZy1tbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTXlhbm1hclwiLCBmbGFnOiBcImZsYWctbW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbmdvbGlhXCIsIGZsYWc6IFwiZmxhZy1tblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFjYW9cIiwgZmxhZzogXCJmbGFnLW1vXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLW1wXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXJ0aW5pcXVlXCIsIGZsYWc6IFwiZmxhZy1tcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWF1cml0YW5pYVwiLCBmbGFnOiBcImZsYWctbXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbnRzZXJyYXRcIiwgZmxhZzogXCJmbGFnLW1zXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWx0YVwiLCBmbGFnOiBcImZsYWctbXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hdXJpdGl1c1wiLCBmbGFnOiBcImZsYWctbXVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGRpdmVzXCIsIGZsYWc6IFwiZmxhZy1tdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsYXdpXCIsIGZsYWc6IFwiZmxhZy1td1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWV4aWNvXCIsIGZsYWc6IFwiZmxhZy1teFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsYXlzaWFcIiwgZmxhZzogXCJmbGFnLW15XCIgfSxcclxuICAgIHsgbmFtZTogXCJNb3phbWJpcXVlXCIsIGZsYWc6IFwiZmxhZy1telwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmFtaWJpYVwiLCBmbGFnOiBcImZsYWctbmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5ldyBDYWxlZG9uaWFcIiwgZmxhZzogXCJmbGFnLW5jXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWdlclwiLCBmbGFnOiBcImZsYWctbmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcmZvbGsgSXNsYW5kXCIsIGZsYWc6IFwiZmxhZy1uZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmlnZXJpYVwiLCBmbGFnOiBcImZsYWctbmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pY2FyYWd1YVwiLCBmbGFnOiBcImZsYWctbmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5ldGhlcmxhbmRzXCIsIGZsYWc6IFwiZmxhZy1ubFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9yd2F5XCIsIGZsYWc6IFwiZmxhZy1ub1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmVwYWxcIiwgZmxhZzogXCJmbGFnLW5wXCIgfSxcclxuICAgIHsgbmFtZTogXCJOYXVydVwiLCBmbGFnOiBcImZsYWctbnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pdWVcIiwgZmxhZzogXCJmbGFnLW51XCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXcgWmVhbGFuZFwiLCBmbGFnOiBcImZsYWctbnpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk9tYW5cIiwgZmxhZzogXCJmbGFnLW9tXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYW5hbWFcIiwgZmxhZzogXCJmbGFnLXBhXCIgfSxcclxuICAgIHsgbmFtZTogXCJQZXJ1XCIsIGZsYWc6IFwiZmxhZy1wZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIFBvbHluZXNpYVwiLCBmbGFnOiBcImZsYWctcGZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhcHVhIE5ldyBHdWluZWFcIiwgZmxhZzogXCJmbGFnLXBnXCIgfSxcclxuICAgIHsgbmFtZTogXCJQaGlsaXBwaW5lc1wiLCBmbGFnOiBcImZsYWctcGhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBha2lzdGFuXCIsIGZsYWc6IFwiZmxhZy1wa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUG9sYW5kXCIsIGZsYWc6IFwiZmxhZy1wbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwiLCBmbGFnOiBcImZsYWctcG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBpdGNhaXJuXCIsIGZsYWc6IFwiZmxhZy1wblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUHVlcnRvIFJpY29cIiwgZmxhZzogXCJmbGFnLXByXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWxlc3RpbmUsIFN0YXRlIG9mXCIsIGZsYWc6IFwiZmxhZy1wc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUG9ydHVnYWxcIiwgZmxhZzogXCJmbGFnLXB0XCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWxhdVwiLCBmbGFnOiBcImZsYWctcHdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhcmFndWF5XCIsIGZsYWc6IFwiZmxhZy1weVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUWF0YXJcIiwgZmxhZzogXCJmbGFnLXFhXCIgfSxcclxuICAgIHsgbmFtZTogXCJSw6l1bmlvblwiLCBmbGFnOiBcImZsYWctcmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlJvbWFuaWFcIiwgZmxhZzogXCJmbGFnLXJvXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZXJiaWFcIiwgZmxhZzogXCJmbGFnLXJzXCIgfSxcclxuICAgIHsgbmFtZTogXCJSdXNzaWFuIEZlZGVyYXRpb25cIiwgZmxhZzogXCJmbGFnLXJ1XCIgfSxcclxuICAgIHsgbmFtZTogXCJSd2FuZGFcIiwgZmxhZzogXCJmbGFnLXJ3XCIgfSxcclxuICAgIHsgbmFtZTogXCJTYXVkaSBBcmFiaWFcIiwgZmxhZzogXCJmbGFnLXNhXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb2xvbW9uIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLXNiXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZXljaGVsbGVzXCIsIGZsYWc6IFwiZmxhZy1zY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3VkYW5cIiwgZmxhZzogXCJmbGFnLXNkXCIgfSxcclxuICAgIHsgbmFtZTogXCJTd2VkZW5cIiwgZmxhZzogXCJmbGFnLXNlXCIgfSxcclxuICAgIHsgbmFtZTogXCJTaW5nYXBvcmVcIiwgZmxhZzogXCJmbGFnLXNnXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwiLCBmbGFnOiBcImZsYWctc2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNsb3ZlbmlhXCIsIGZsYWc6IFwiZmxhZy1zaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3ZhbGJhcmQgYW5kIEphbiBNYXllblwiLCBmbGFnOiBcImZsYWctc2pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNsb3Zha2lhXCIsIGZsYWc6IFwiZmxhZy1za1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2llcnJhIExlb25lXCIsIGZsYWc6IFwiZmxhZy1zbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FuIE1hcmlub1wiLCBmbGFnOiBcImZsYWctc21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNlbmVnYWxcIiwgZmxhZzogXCJmbGFnLXNuXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb21hbGlhXCIsIGZsYWc6IFwiZmxhZy1zb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3VyaW5hbWVcIiwgZmxhZzogXCJmbGFnLXNyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBTdWRhblwiLCBmbGFnOiBcImZsYWctc3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLCBmbGFnOiBcImZsYWctc3RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVsIFNhbHZhZG9yXCIsIGZsYWc6IFwiZmxhZy1zdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KVwiLCBmbGFnOiBcImZsYWctc3hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN5cmlhbiBBcmFiIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1zeVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dhemlsYW5kXCIsIGZsYWc6IFwiZmxhZy1zelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy10Y1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hhZFwiLCBmbGFnOiBcImZsYWctdGRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllc1wiLCBmbGFnOiBcImZsYWctdGZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRvZ29cIiwgZmxhZzogXCJmbGFnLXRnXCIgfSxcclxuICAgIHsgbmFtZTogXCJUaGFpbGFuZFwiLCBmbGFnOiBcImZsYWctdGhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhamlraXN0YW5cIiwgZmxhZzogXCJmbGFnLXRqXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb2tlbGF1XCIsIGZsYWc6IFwiZmxhZy10a1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGltb3ItTGVzdGVcIiwgZmxhZzogXCJmbGFnLXRsXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXJrbWVuaXN0YW5cIiwgZmxhZzogXCJmbGFnLXRtXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdW5pc2lhXCIsIGZsYWc6IFwiZmxhZy10blwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9uZ2FcIiwgZmxhZzogXCJmbGFnLXRvXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXJrZXlcIiwgZmxhZzogXCJmbGFnLXRyXCIgfSxcclxuICAgIHsgbmFtZTogXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsIGZsYWc6IFwiZmxhZy10dFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHV2YWx1XCIsIGZsYWc6IFwiZmxhZy10dlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYVwiLCBmbGFnOiBcImZsYWctdHdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLXR6XCIgfSxcclxuICAgIHsgbmFtZTogXCJVa3JhaW5lXCIsIGZsYWc6IFwiZmxhZy11YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVWdhbmRhXCIsIGZsYWc6IFwiZmxhZy11Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy11bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIsIGZsYWc6IFwiZmxhZy11c1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVXJ1Z3VheVwiLCBmbGFnOiBcImZsYWctdXlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlV6YmVraXN0YW5cIiwgZmxhZzogXCJmbGFnLXV6XCIgfSxcclxuICAgIHsgbmFtZTogXCJIb2x5IFNlZVwiLCBmbGFnOiBcImZsYWctdmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsIGZsYWc6IFwiZmxhZy12Y1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmVuZXp1ZWxhLCBCb2xpdmFyaWFuIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy12ZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlyZ2luIElzbGFuZHMsIEJyaXRpc2hcIiwgZmxhZzogXCJmbGFnLXZnXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaXJnaW4gSXNsYW5kcywgVS5TLlwiLCBmbGFnOiBcImZsYWctdmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpZXQgTmFtXCIsIGZsYWc6IFwiZmxhZy12blwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmFudWF0dVwiLCBmbGFnOiBcImZsYWctdnVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIldhbGxpcyBhbmQgRnV0dW5hXCIsIGZsYWc6IFwiZmxhZy13ZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2Ftb2FcIiwgZmxhZzogXCJmbGFnLXdzXCIgfSxcclxuICAgIHsgbmFtZTogXCJZZW1lblwiLCBmbGFnOiBcImZsYWcteWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1heW90dGVcIiwgZmxhZzogXCJmbGFnLXl0XCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBBZnJpY2FcIiwgZmxhZzogXCJmbGFnLXphXCIgfSxcclxuICAgIHsgbmFtZTogXCJaYW1iaWFcIiwgZmxhZzogXCJmbGFnLXptXCIgfSxcclxuICAgIHsgbmFtZTogXCJaaW1iYWJ3ZVwiLCBmbGFnOiBcImZsYWctendcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVVzZXJGbGFncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS51c2VyRmxhZ3MgPSAkc2NvcGUuY3VycmVudFVzZXI/LmZsYWdzXHJcbiAgICAgID8gY291bnRyaWVzLmZpbHRlcihmdW5jdGlvbiAoY291bnRyeSkge1xyXG4gICAgICAgICAgcmV0dXJuICRzY29wZS5jdXJyZW50VXNlci5mbGFncy5pbmNsdWRlcyhjb3VudHJ5LmZsYWcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIDogW107XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmRhdGVPcHRpb25zID0ge1xyXG4gICAgbWF4RGF0ZTogbmV3IERhdGUoKSxcclxuICAgIG1pbkRhdGU6IG5ldyBEYXRlKDE5MDAsIDEsIDEpLFxyXG4gICAgaW5pdERhdGU6IG5ldyBEYXRlKDIwMDAsIDEsIDEpLFxyXG4gICAgZGF0ZXBpY2tlck1vZGU6IFwieWVhclwiLFxyXG4gIH07XHJcblxyXG4gICRzY29wZS51c2VybmFtZVRvZ2dsZSA9IHRydWU7XHJcbiAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gdHJ1ZTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVVzZXJuYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnVzZXJuYW1lVG9nZ2xlID0gISRzY29wZS51c2VybmFtZVRvZ2dsZTtcclxuICAgICRzY29wZS5uZXdVc2VybmFtZSA9ICRzY29wZS5jdXJyZW50VXNlci51c2VybmFtZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUubmV3UGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLmNvbmZpcm1QYXNzd29yZCA9IG51bGw7XHJcbiAgICAkc2NvcGUucGFzc3dvcmRUb2dnbGUgPSAhJHNjb3BlLnBhc3N3b3JkVG9nZ2xlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGVja1Bhc3N3b3JkID0gZnVuY3Rpb24gKHBhc3N3b3JkKSB7XHJcbiAgICBpZiAocGFzc3dvcmQpIHtcclxuICAgICAgdmFyIHVzZXIgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICBVc2VyU3ZjLmNoZWNrUGFzc3dvcmQodXNlciwgcGFzc3dvcmQpLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgb3JpZ2luYWxCZyA9ICQoXCIucGFzc3dvcmRcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIpO1xyXG4gICAgICAgICAgJChcIi5wYXNzd29yZFwiKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNGRkI2QzFcIiB9LCAyMDApLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG9yaWdpbmFsQmcgfSwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uIChvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgaWYgKG5ld1Bhc3N3b3JkKSB7XHJcbiAgICAgIGlmIChuZXdQYXNzd29yZCA9PSBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICB2YXIgdXNlciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgICAgVXNlclN2Yy5jaGFuZ2VQYXNzd29yZCh1c2VyLCBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQpLnRoZW4oXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzY29wZS50b2FzdChcIlBhc3N3b3JkIGNoYW5nZWRcIik7XHJcbiAgICAgICAgICAgICRzY29wZS5vbGRQYXNzd29yZCA9IG51bGw7XHJcbiAgICAgICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnRvYXN0KFwiUGFzc3dvcmQgY2hhbmdlIGZhaWxlZFwiKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgb3JpZ2luYWxCZyA9ICQoXCIucGFzc3dvcmRcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIpO1xyXG4gICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlVXNlcm5hbWUgPSBmdW5jdGlvbiAodXNlcm5hbWUpIHtcclxuICAgICRzY29wZS4kZW1pdChcImxvYWRpbmdcIik7XHJcbiAgICBVc2VyU3ZjLmNoYW5nZVVzZXJuYW1lKCRzY29wZS5jdXJyZW50VXNlci5faWQsIHVzZXJuYW1lKS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoXCJ1cGRhdGVcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUudG9hc3QodXNlcm5hbWUgKyBcIiBhbHJlYWR5IGluIHVzZVwiKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUuJGVtaXQoXCJsb2FkaW5nXCIpO1xyXG4gICAgVXNlclN2Yy51cGRhdGVVc2VyKHsgLi4uJHNjb3BlLmN1cnJlbnRVc2VyLCBmbGFnczogJHNjb3BlLnVzZXJGbGFncy5tYXAoKHsgZmxhZyB9KSA9PiBmbGFnKSB9KS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoXCJ1cGRhdGVcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5sb2FkQ291bnRyaWVzID0gZnVuY3Rpb24gKCRxdWVyeSkge1xyXG4gICAgcmV0dXJuIGNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGNvdW50cnkpIHtcclxuICAgICAgcmV0dXJuIGNvdW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsICgpID0+IHtcclxuICAgIHVwZGF0ZVVzZXJGbGFncygpO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdTa2lsbHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IDA7XHJcbiAgJHNjb3BlLnNraWxsc1Zpc2libGUgPSBmYWxzZTtcclxuICAkc2NvcGUucHJvamVjdHMgPSBbXTtcclxuXHJcbiAgJHNjb3BlLmxhYmVscyA9IFtcIkRvd25sb2FkIFNhbGVzXCIsIFwiSW4tU3RvcmUgU2FsZXNcIiwgXCJNYWlsLU9yZGVyIFNhbGVzXCJdO1xyXG4gICRzY29wZS5kYXRhID0gWzMwMCwgNTAwLCAxMDBdO1xyXG5cclxuICAkLmdldEpTT04oJy9leHBlcmllbmNlLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuICAgICRzY29wZS5wcm9qZWN0cyA9IGRhdGEucmVkdWNlKChwcm9qZWN0cywgZW1wbG95ZXIpID0+IHtcclxuICAgICAgaWYgKGVtcGxveWVyLnByb2plY3RzKSByZXR1cm4gZW1wbG95ZXIucHJvamVjdHMuY29uY2F0KHByb2plY3RzKTtcclxuICAgICAgZWxzZSByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9LCB7fSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5maWx0ZXJlZFByb2plY3RzID0gKCkgPT4gJHNjb3BlLnByb2plY3RzXHJcbiAgICAuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNraWxscyAmJiBwcm9qZWN0LnNraWxscy5pbmNsdWRlcygkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jb2RlKSlcclxuXHJcbiAgJC5nZXRKU09OKCcvc2tpbGxzLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuXHJcbiAgICBjb25zdCBza2lsbHMgPSBkYXRhXHJcbiAgICAuZmlsdGVyKChza2lsbCkgPT4gc2tpbGwuZW5hYmxlZClcclxuXHJcbiAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHNraWxsc1xyXG4gICAgLnJlZHVjZShmdW5jdGlvbihjYXRlZ29yaWVzLCBza2lsbCkge1xyXG4gICAgICBpZiAoIWNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0gPSBbc2tpbGxdXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0ucHVzaChza2lsbClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2F0ZWdvcmllcztcclxuICAgIH0sIHt9KTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCA9IGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IHNraWxsO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydE9wdGlvbnMgPSB7XHJcbiAgICAgICAgY3V0b3V0UGVyY2VudGFnZSA6IDgwLFxyXG4gICAgICAgIGNpcmN1bWZlcmVuY2U6IDIgKiBNYXRoLlBJLFxyXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXHJcbiAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydFN0eWxlID0ge1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgvc2tpbGxzLycgKyAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5pbWFnZSArICcpJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJzYwJScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnNTAlIDUwJSdcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwoJHNjb3BlLnNraWxsc1swXSk7XHJcblxyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRzY2UsICRsb2NhdGlvbiwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICBsZXQgcGFnZSA9IDE7XHJcbiAgICAkc2NvcGUubGlzdHMgPSBbXTtcclxuICAgICRzY29wZS5zZWFyY2ggPSBcIlwiO1xyXG4gICAgJHNjb3BlLnNlYXJjaEZpZWxkID0gXCJhbGxcIjtcclxuICAgICRzY29wZS5uZXdJdGVtID0ge307XHJcbiAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSB7fTtcclxuICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9IHt9O1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHVuZGVmaW5lZDtcclxuICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gXCJFTlwiO1xyXG4gICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMgPSBbXTtcclxuICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSBbXTtcclxuICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSBbXTtcclxuICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgIGxldCBleGhhdXN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBvYmplY3RDYXRlZ29yaWVzID0gW1wiY3VsdHVyZVwiLCBcIm5hdHVyZVwiLCBcIm1pc2NcIiwgXCJzb2NpZXR5XCIsIFwic3BvcnRzXCJdO1xyXG4gICAgJHNjb3BlLmJsdXJiVHlwZXMgPSBbXHJcbiAgICAgIHsgYXBpOiBcIm1vdmllc1wiLCBjYXRlZ29yaWVzOiBbXCJtb3ZpZXNcIl0sIHRleHQ6IFwiR2V0IG1vdmllIHBvc3RlcnNcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJ0dlwiLCBjYXRlZ29yaWVzOiBbXCJ0ZWxldmlzaW9uXCJdLCB0ZXh0OiBcIkdldCB0diBwb3N0ZXJzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwiYWN0b3JzXCIsIGNhdGVnb3JpZXM6IFtcIm1vdmllc1wiLCBcInRlbGV2aXNpb25cIl0sIHRleHQ6IFwiR2V0IGFjdG9yIHBpY3NcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJib29rc1wiLCBjYXRlZ29yaWVzOiBbXCJsaXRlcmF0dXJlXCJdLCB0ZXh0OiBcIkdldCBib29rIGNvdmVyc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcIm11c2ljdmlkZW9zXCIsIGNhdGVnb3JpZXM6IFtcIm11c2ljXCJdLCB0ZXh0OiBcIkdldCBtdXNpYyB2aWRlb3NcIiwgYWRtaW5Pbmx5OiB0cnVlIH0sXHJcbiAgICAgIHsgYXBpOiBcInVuc3BsYXNoXCIsIGNhdGVnb3JpZXM6IG9iamVjdENhdGVnb3JpZXMsIHRleHQ6IFwiR2V0IFVuc3BsYXNoIHBpY3NcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJwZXhlbHNcIiwgY2F0ZWdvcmllczogb2JqZWN0Q2F0ZWdvcmllcywgdGV4dDogXCJHZXQgUGV4ZWxzIHBpY3NcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJ3aWtpXCIsIGNhdGVnb3JpZXM6IG9iamVjdENhdGVnb3JpZXMsIHRleHQ6IFwiR2V0IFdpa2kgcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICBdO1xyXG5cclxuICAgICRzY29wZS5oYXZlQ29tbW9uSXRlbXMgPSAoYXJyMSwgYXJyMikgPT4ge1xyXG4gICAgICByZXR1cm4gYXJyMT8uc29tZSgoaXRlbSkgPT4gYXJyMi5pbmNsdWRlcyhpdGVtKSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5rZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAvLyBUYWJcclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICBpZiAoJChcIiNuZXctYmx1cmJcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmNyZWF0ZVZhbHVlKCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCQoXCIjbmV3LXZhbHVlXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICQoXCIjbmV3LWJsdXJiXCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICB9XHJcbiAgICAgIC8vIHVzZSBlLmtleUNvZGVcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmFkZExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIFwibmV3XCIpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgY3JlYXRvcjogJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHZhbHVlczogW10sXHJcbiAgICAgICAgYW5zd2VyczogMCxcclxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICRzY29wZS5zZWxlY3RlZExhbmd1YWdlLFxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2VhcmNoID0gJGxvY2F0aW9uLnNlYXJjaCgpLnNlYXJjaDtcclxuICAgICAgaWYgKGxpc3QpIHtcclxuICAgICAgICBpZiAobGlzdC5faWQgPT09IFwibmV3XCIpIHtcclxuICAgICAgICAgICRzY29wZS5hZGRMaXN0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0KGxpc3QpXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIGRhdGEuX2lkKTtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9ICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2U7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnJlYWRPbmx5ID1cclxuICAgICAgICAgICAgICAgICEkc2NvcGUuc2VsZWN0ZWRMaXN0IHx8XHJcbiAgICAgICAgICAgICAgICAoISRzY29wZS5jdXJyZW50VXNlci5hZG1pbiAmJlxyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNyZWF0b3IuX2lkICE9PSAkc2NvcGUuY3VycmVudFVzZXIuX2lkICYmXHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuX2lkKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzZXRMYW5ndWFnZUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0ge307XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9IHt9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0RmlsdGVyQ291bnQgPSAoKSA9PlxyXG4gICAgICBPYmplY3QudmFsdWVzKCRzY29wZS5sYW5ndWFnZUZpbHRlcikubGVuZ3RoICsgT2JqZWN0LnZhbHVlcygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpLmxlbmd0aDtcclxuXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5jdXJyZW50VXNlcikgcmV0dXJuO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGxhbmd1YWdlcyB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldExhbmd1YWdlcygpO1xyXG4gICAgICAkc2NvcGUubGFuZ3VhZ2VzID0gbGFuZ3VhZ2VzO1xyXG4gICAgICByZXNldExhbmd1YWdlRmlsdGVyKCk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogY2F0ZWdvcmllcyB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKTtcclxuICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xyXG4gICAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcclxuICAgICAgcmVzZXRDYXRlZ29yeUZpbHRlcigpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGxhbmd1YWdlU3RhdHMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0TGFuZ3VhZ2VTdGF0cygpO1xyXG4gICAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IGxhbmd1YWdlU3RhdHMucmVkdWNlKChyZXN1bHQsIHsgX2lkLCBjb3VudCB9KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W19pZC5sYW5ndWFnZV0gPSAocmVzdWx0W19pZC5sYW5ndWFnZV0gfHwgMCkgKyBjb3VudDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogY2F0ZWdvcnlTdGF0cyB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldExpc3RDYXRlZ29yeVN0YXRzKCk7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeVN0YXRzID0gY2F0ZWdvcnlTdGF0cy5yZWR1Y2UoKHJlc3VsdCwgeyBfaWQsIGNvdW50IH0pID0+IHtcclxuICAgICAgICByZXN1bHRbX2lkXSA9IGNvdW50O1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0KSB7XHJcbiAgICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCh7IF9pZDogJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QgfSk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLnNlYXJjaCA9ICRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2ggfHwgXCJcIjtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZWFyY2hMaXN0cyA9IGFzeW5jICh2aWV3VmFsdWUpID0+IHtcclxuICAgICAgaWYgKHZpZXdWYWx1ZS5sZW5ndGggPj0gMykge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLnNlYXJjaExpc3RzKHZpZXdWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5oaWdobGlnaHRlZFNlYXJjaFRleHQgPSAodGV4dCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLnNlYXJjaCkge1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgKCR7JHNjb3BlLnNlYXJjaH0pYCwgXCJnaVwiKTtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKHJlZ2V4LCBcIjxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPiQxPC9zcGFuPlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudmFsdWVPcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwidmFsdWVcIixcclxuICAgICAgZGlyZWN0aW9uOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogJGxvY2F0aW9uLnNlYXJjaCgpLnNvcnQgfHwgXCJkYXRlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogJGxvY2F0aW9uLnNlYXJjaCgpLm9yZGVyID8gJGxvY2F0aW9uLnNlYXJjaCgpLm9yZGVyID09PSBcImRlc2NcIiA6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA9ICEkc2NvcGUub3JkZXIuZGlyZWN0aW9uO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwic29ydFwiLCBmaWVsZCk7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJvcmRlclwiLCAkc2NvcGUub3JkZXIuZGlyZWN0aW9uID8gXCJkZXNjXCIgOiBcImFzY1wiKTtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRNb3JlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubGlzdHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgIGdldExpc3RzKCkudGhlbigobGlzdHMpID0+IHtcclxuICAgICAgICAkc2NvcGUubGlzdHMgPSAkc2NvcGUubGlzdHMuY29uY2F0KGxpc3RzKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxpc3RzID0gW107XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSBbXTtcclxuICAgICAgcGFnZSA9IDE7XHJcbiAgICAgIGV4aGF1c3RlZCA9IGZhbHNlO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gbGlzdHM7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldExhbmd1YWdlRmlsdGVyID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID09PSB0cnVlKSB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID0gISRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWxldGUgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPT09IHRydWUpIHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID0gISRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsZXRlICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV07XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVDYXRlZ29yeUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcik7XHJcbiAgICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPVxyXG4gICAgICAgIGNhdGVnb3JpZXMubGVuZ3RoID09PSBjYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0pLmxlbmd0aDtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0gJHNjb3BlLmNhdGVnb3JpZXMucmVkdWNlKChmaWx0ZXIsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgZmlsdGVyW2NhdGVnb3J5XSA9ICFhbGxDYXRlZ29yaWVzO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRDYXRlZ29yeUxhYmVsID0gKGNhdGVnb3JpZXMpID0+IHtcclxuICAgICAgaWYgKCFjYXRlZ29yaWVzIHx8IGNhdGVnb3JpZXMubGVuZ3RoID09PSAwKSByZXR1cm4gXCJcIjtcclxuICAgICAgY29uc3QgbWFpbkNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+ICFjYXRlZ29yeS5pbmNsdWRlcyhcIi5cIikpO1xyXG4gICAgICByZXR1cm4gbWFpbkNhdGVnb3JpZXNcclxuICAgICAgICAuc29ydCgpXHJcbiAgICAgICAgLm1hcCgoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHN1YmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHN1YmNhdGVnb3J5KSA9PiBzdWJjYXRlZ29yeS5zdGFydHNXaXRoKGNhdGVnb3J5KSAmJiBzdWJjYXRlZ29yeSAhPT0gY2F0ZWdvcnkpXHJcbiAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgKHN1YmNhdGVnb3J5KSA9PlxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXNcclxuICAgICAgICAgICAgICAgICAgLmZpbmQoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGNhdGVnb3J5KVxyXG4gICAgICAgICAgICAgICAgICAuc3ViY2F0ZWdvcmllcy5maW5kKCh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBzdWJjYXRlZ29yeSk/LmxhYmVsLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMuZmluZCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gY2F0ZWdvcnkpLmxhYmVsICtcclxuICAgICAgICAgICAgKHN1YmNhdGVnb3JpZXMubGVuZ3RoID4gMCA/IFwiIChcIiArIHN1YmNhdGVnb3JpZXMuc29ydCgpLmpvaW4oXCIsIFwiKSArIFwiKVwiIDogXCJcIilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuam9pbihcIiwgXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5sb2FkaW5nIHx8IGV4aGF1c3RlZCkgcmV0dXJuIFtdO1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoICE9PSAkc2NvcGUuc2VhcmNoKSB7XHJcbiAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcInNlYXJjaFwiLCAkc2NvcGUuc2VhcmNoID8gJHNjb3BlLnNlYXJjaCA6IG51bGwpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldExpc3RzKHtcclxuICAgICAgICBwYWdlLFxyXG4gICAgICAgIHNvcnRCeTogJHNjb3BlLm9yZGVyLmZpZWxkLFxyXG4gICAgICAgIG9yZGVyQnk6ICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPyAtMSA6IDEsXHJcbiAgICAgICAgbGltaXQ6IDEwMCxcclxuICAgICAgICAuLi4oJHNjb3BlLnNlYXJjaEZpZWxkID09PSBcImFsbFwiID8geyBzZWFyY2g6ICRzY29wZS5zZWFyY2ggfSA6IHt9KSxcclxuICAgICAgICAuLi4oJHNjb3BlLnNlYXJjaEZpZWxkID09PSBcIm5hbWVcIiA/IHsgbmFtZTogJHNjb3BlLnNlYXJjaCB9IDoge30pLFxyXG4gICAgICAgIGxhbmd1YWdlOiBPYmplY3Qua2V5cygkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIpLmZpbHRlcigobGFuZ3VhZ2UpID0+ICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZV0gPT09IHRydWUpLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9PT0gdHJ1ZSksXHJcbiAgICAgICAgbGFuZ3VhZ2VOb3Q6IE9iamVjdC5rZXlzKCRzY29wZS5sYW5ndWFnZUZpbHRlcikuZmlsdGVyKChsYW5ndWFnZSkgPT4gJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlXSA9PT0gZmFsc2UpLFxyXG4gICAgICAgIGNhdGVnb3JpZXNOb3Q6IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikuZmlsdGVyKFxyXG4gICAgICAgICAgKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID09PSBmYWxzZSxcclxuICAgICAgICApLFxyXG4gICAgICB9KTtcclxuICAgICAgJHNjb3BlLmNvdW50ID0gZGF0YS5jb3VudDtcclxuICAgICAgaWYgKGRhdGEucmVzdWx0Lmxlbmd0aCA8IDEwMCkgZXhoYXVzdGVkID0gdHJ1ZTtcclxuICAgICAgZWxzZSBwYWdlID0gZGF0YS5uZXh0UGFnZTtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgY29uc29sZS5sb2coYFBhZ2UgJHtwYWdlfSBsb2FkZWQsICR7ZGF0YS5yZXN1bHQubGVuZ3RofSBpdGVtc2ApO1xyXG4gICAgICByZXR1cm4gZGF0YS5yZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMaXN0TmFtZSA9IChsaXN0SWQpID0+ICRzY29wZS5saXN0cy5maW5kKCh7IF9pZCB9KSA9PiBfaWQgPT09IGxpc3RJZCk/Lm5hbWU7XHJcblxyXG4gICAgJHNjb3BlLnVwZGF0ZVZhbHVlID0gYXN5bmMgKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKCFpdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgJHNjb3BlLmRlbGV0ZVZhbHVlKGl0ZW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRJdGVtUmVzcG9uc2UgPSBhd2FpdCBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdFZhbHVlKCRzY29wZS5zZWxlY3RlZExpc3QsIGl0ZW0pO1xyXG4gICAgICAgIGl0ZW0uYmx1cmJUeXBlID0gdXBkYXRlZEl0ZW1SZXNwb25zZS5kYXRhLmJsdXJiVHlwZTtcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNyZWF0ZVZhbHVlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5uZXdJdGVtLnZhbHVlKSByZXR1cm47XHJcbiAgICAgIGlmICgkc2NvcGUuaGFzRHVwbGljYXRlKCkpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoYCR7JHNjb3BlLm5ld0l0ZW0udmFsdWV9IGlzIGFscmVhZHkgaW4gdGhlIGxpc3RgKTtcclxuICAgICAgfSBlbHNlIGlmICghJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5wdXNoKHsgLi4uJHNjb3BlLm5ld0l0ZW0gfSk7XHJcbiAgICAgICAgaWYgKCRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCkge1xyXG4gICAgICAgICAgYXdhaXQgJHNjb3BlLnVwc2VydExpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRJdGVtUmVzcG9uc2UgPSBhd2FpdCBUZW5UaGluZ3NTdmMuY3JlYXRlTGlzdFZhbHVlKCRzY29wZS5zZWxlY3RlZExpc3QsICRzY29wZS5uZXdJdGVtKTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5wdXNoKGNyZWF0ZWRJdGVtUmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLm5ld0l0ZW0udmFsdWUpO1xyXG4gICAgICAgICRzY29wZS50b2FzdChgXCIkeyRzY29wZS5uZXdJdGVtLnZhbHVlfVwiIGFkZGVkYCk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgICAkc2NvcGUubmV3SXRlbS5ibHVyYiA9IFwiXCI7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICQoXCIjbmV3LXZhbHVlXCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICAgICAgfSk7XHJcbiAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZVZhbHVlID0gKGl0ZW0pID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKS50aGVuKCgpID0+IHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyA9ICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLl9pZCAhPT0gaXRlbS5faWQpO1xyXG4gICAgICAgICRzY29wZS50b2FzdChgXCIke2l0ZW0udmFsdWV9XCIgcmVtb3ZlZGApO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwZGF0ZUxpc3QgPSAobGlzdCwgdXBkYXRlcykgPT4ge1xyXG4gICAgICBpZiAobGlzdC5faWQgJiYgbGlzdC5faWQgIT09IFwibmV3XCIpIHtcclxuICAgICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAuLi51cGRhdGVzLFxyXG4gICAgICAgICAgX2lkOiBsaXN0Ll9pZCxcclxuICAgICAgICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgY29uc3QgbGlzdEluZGV4ID0gJHNjb3BlLmxpc3RzLmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5faWQgPT09IGRhdGEuX2lkKTtcclxuICAgICAgICAgICRzY29wZS5saXN0c1tsaXN0SW5kZXhdID0gZGF0YTtcclxuICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudXBzZXJ0TGlzdCA9IChsaXN0LCB1cGRhdGVzKSA9PiB7XHJcbiAgICAgICRzY29wZS5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAobGlzdC52YWx1ZXMubGVuZ3RoID49IDEwICYmIGxpc3QubmFtZSAmJiBsaXN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmIChsaXN0Ll9pZCAmJiBsaXN0Ll9pZCAhPT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgbGV0IGNoYW5nZXMgPSB1cGRhdGVzID8gdXBkYXRlcyA6IGxpc3Q7XHJcbiAgICAgICAgICBkZWxldGUgY2hhbmdlcy5faWQ7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAgIC4uLmNoYW5nZXMsXHJcbiAgICAgICAgICAgIF9pZDogbGlzdC5faWQsXHJcbiAgICAgICAgICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICRzY29wZS5saXN0c1skc2NvcGUubGlzdHMuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0Ll9pZCA9PT0gZGF0YS5faWQpXSA9IGRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5jcmVhdGVMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgJHNjb3BlLnNlbGVjdGVkTGlzdCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0ID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuX2lkID0gZGF0YS5faWQ7XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICRzY29wZS50b2FzdChgXCIke2RhdGEubmFtZX1cIiBjcmVhdGVkYCk7XHJcbiAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbigkc2NvcGUuc2VsZWN0ZWRMaXN0LCB1cGRhdGVzKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICghbGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMobGlzdC5faWQpKSB7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9IFtsaXN0Ll9pZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjbW9kYWwtZGVsZXRlLWxpc3RzXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICQoXCIjbW9kYWwtZGVsZXRlLWxpc3RzXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNvbmZpcm1NZXJnZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5tZXJnZUxpc3RzKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMpO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICRzY29wZS50b2FzdChcIk1lcmdlZFwiKTtcclxuICAgICAgJChcIiNtb2RhbC1tZXJnZS1saXN0c1wiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jb25maXJtRGVsZXRlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgbGlzdElkIG9mICRzY29wZS5saXN0SWRzVG9EZWxldGUpIHtcclxuICAgICAgICBhd2FpdCBUZW5UaGluZ3NTdmMuZGVsZXRlTGlzdChsaXN0SWQpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJHNjb3BlLnRvYXN0KFwiTGlzdHMgZGVsZXRlZFwiKTtcclxuICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMubGVuZ3RoID09PSAkc2NvcGUubGlzdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSAkc2NvcGUubGlzdHMubWFwKCh7IF9pZCB9KSA9PiBfaWQpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gJHNjb3BlLmxpc3RzLmZpbHRlcigoeyBfaWQgfSkgPT4gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhfaWQpKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUhpZ2hsaWdodGVkTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmluY2x1ZGVzKGxpc3QuX2lkKSkge1xyXG4gICAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmZpbHRlcihcclxuICAgICAgICAgIChoaWdobGlnaHRlZExpc3RJZCkgPT4gaGlnaGxpZ2h0ZWRMaXN0SWQgIT09IGxpc3QuX2lkLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5wdXNoKGxpc3QuX2lkKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9ICRzY29wZS5saXN0cy5maWx0ZXIoKHsgX2lkIH0pID0+ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMoX2lkKSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZSA9IChsaXN0LCBsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBsaXN0Lmxhbmd1YWdlID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7IGxhbmd1YWdlOiBsYW5ndWFnZS5jb2RlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0RGlmZmljdWx0eSA9IChsaXN0LCBkaWZmaWN1bHR5KSA9PiB7XHJcbiAgICAgIGxpc3QuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHsgZGlmZmljdWx0eTogZGlmZmljdWx0eSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldEZyZXF1ZW5jeSA9IChsaXN0LCBmcmVxdWVuY3kpID0+IHtcclxuICAgICAgbGlzdC5mcmVxdWVuY3kgPSBmcmVxdWVuY3k7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHsgZnJlcXVlbmN5OiBmcmVxdWVuY3kgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFVwZGF0ZWRDYXRlZ29yaWVzID0gKGxpc3QsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGxldCBjYXRlZ29yaWVzID0gbGlzdC5jYXRlZ29yaWVzO1xyXG4gICAgICBpZiAoY2F0ZWdvcmllcy5zb21lKChsaXN0Q2F0ZWdvcnkpID0+IGxpc3RDYXRlZ29yeSA9PT0gY2F0ZWdvcnkpKSB7XHJcbiAgICAgICAgY2F0ZWdvcmllcyA9IGxpc3QuY2F0ZWdvcmllcy5maWx0ZXIoKGxpc3RDYXRlZ29yeSkgPT4gbGlzdENhdGVnb3J5ICE9PSBjYXRlZ29yeSk7XHJcbiAgICAgICAgaWYgKCFjYXRlZ29yeS5pbmNsdWRlcyhcIi5cIikgJiYgY2F0ZWdvcmllcy5zb21lKChsaXN0Q2F0ZWdvcnkpID0+IGxpc3RDYXRlZ29yeS5zdGFydHNXaXRoKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICAgIGNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmZpbHRlcigobGlzdENhdGVnb3J5KSA9PiAhbGlzdENhdGVnb3J5LnN0YXJ0c1dpdGgoY2F0ZWdvcnkpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgICBpZiAoY2F0ZWdvcnkuaW5jbHVkZXMoXCIuXCIpICYmICFjYXRlZ29yaWVzLmZpbmQoKGxpc3RDYXRlZ29yeSkgPT4gbGlzdENhdGVnb3J5ID09PSBjYXRlZ29yeS5zcGxpdChcIi5cIilbMF0pKSB7XHJcbiAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkuc3BsaXQoXCIuXCIpWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeSA9IChsaXN0LCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCB1cGRhdGVkQ2F0ZWdvcmllcyA9IGdldFVwZGF0ZWRDYXRlZ29yaWVzKGxpc3QsIGNhdGVnb3J5KTtcclxuICAgICAgaWYgKHVwZGF0ZWRDYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICRzY29wZS50b2FzdChgWW91IG11c3QgaGF2ZSBhdCBsZWFzdCAxIGNhdGVnb3J5IGZvciAke2xpc3QubmFtZX1gKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7IGNhdGVnb3JpZXM6IHVwZGF0ZWRDYXRlZ29yaWVzIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yaWVzID0gYXN5bmMgKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICRzY29wZS5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICBsZXQgbGlzdHNUb1VwZGF0ZSA9IFtdO1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMuZXZlcnkoKHsgY2F0ZWdvcmllcyB9KSA9PiBjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICBsaXN0c1RvVXBkYXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHM7XHJcbiAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMuc29tZSgoeyBjYXRlZ29yaWVzIH0pID0+IGNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSkge1xyXG4gICAgICAgIGxpc3RzVG9VcGRhdGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5maWx0ZXIoKHsgY2F0ZWdvcmllcyB9KSA9PiAhY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3RzVG9VcGRhdGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB1cGRhdGVkTGlzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICBsaXN0c1RvVXBkYXRlLm1hcCgobGlzdFRvVXBkYXRlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVkQ2F0ZWdvcmllcyA9IGdldFVwZGF0ZWRDYXRlZ29yaWVzKGxpc3RUb1VwZGF0ZSwgY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgaWYgKHVwZGF0ZWRDYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAkc2NvcGUudG9hc3QoYFlvdSBtdXN0IGhhdmUgYXQgbGVhc3QgMSBjYXRlZ29yeSBmb3IgJHtsaXN0VG9VcGRhdGUubmFtZX1gKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAgICAgX2lkOiBsaXN0VG9VcGRhdGUuX2lkLFxyXG4gICAgICAgICAgICAgIGNhdGVnb3JpZXM6IHVwZGF0ZWRDYXRlZ29yaWVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgKTtcclxuICAgICAgdXBkYXRlZExpc3RzLmZvckVhY2goKHVwZGF0ZWRMaXN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdEluZGV4ID0gJHNjb3BlLmxpc3RzLmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5faWQgPT09IHVwZGF0ZWRMaXN0Ll9pZCk7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzW2xpc3RJbmRleF0gPSB1cGRhdGVkTGlzdDtcclxuICAgICAgfSk7XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gJHNjb3BlLmxpc3RzLmZpbHRlcigoeyBfaWQgfSkgPT4gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhfaWQpKTtcclxuICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0dXMgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLmV2ZXJ5KCh7IGNhdGVnb3JpZXMgfSkgPT4gY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiY2hlY2tlZFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLnNvbWUoKHsgY2F0ZWdvcmllcyB9KSA9PiBjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICByZXR1cm4gXCJwYXJ0aWFsXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwidW5jaGVja2VkXCI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmhhc0R1cGxpY2F0ZSA9ICgpID0+XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgJiZcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgJiZcclxuICAgICAgXy5zb21lKFxyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgIChhbnN3ZXIpID0+IGFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCkgPT0gJHNjb3BlLm5ld0l0ZW0udmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpLFxyXG4gICAgICApO1xyXG5cclxuICAgICRzY29wZS5nZXRTZWxlY3RlZExpc3RzVGl0bGUgPSAoKSA9PiAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5tYXAoKGxpc3QpID0+IGxpc3QubmFtZSkuam9pbihcIiAvIFwiKTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Qmx1cmJzID0gKHR5cGUpID0+IHtcclxuICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Qmx1cmJzKCRzY29wZS5zZWxlY3RlZExpc3QsIHR5cGUpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUudG9hc3QoXCJCbHVyYnMgdXBkYXRlZFwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLnRvYXN0KFwiQmx1cmIgdXBkYXRlIGZhaWxlZFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldEVtYmVkVXJsID0gKHVybCkgPT4ge1xyXG4gICAgICBpZiAodXJsLmluY2x1ZGVzKFwieW91dHViZS5jb21cIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC9bPyZddj0oW14mXSspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHVybC5pbmNsdWRlcyhcInlvdXR1LmJlXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgveW91dHVcXC5iZVxcLyhbXiY/XSspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHVybC5pbmNsdWRlcyhcInZpbWVvLmNvbVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL3ZpbWVvXFwuY29tXFwvKFxcZCspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJvcGVuLnNwb3RpZnlcIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC90cmFja1xcLyhbXiY/XSspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2VtYmVkL3RyYWNrLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwodXJsKTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZXR1cm4gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH0/YXV0b3BsYXk9MWA7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCBnZXREYXRhKTtcclxuICB9KTtcclxuIiwiLypqc2xpbnQgZXN2ZXJzaW9uOiA2Ki9cclxuYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0FkbWluQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBUZW5UaGluZ3NTdmMsIFVzZXJTdmMpIHtcclxuICAgICRzY29wZS4kb24oXCJsb2dpblwiLCAoXykgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyQnkgPSAoZmllbGQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5vcmRlci5maWVsZCA9PT0gZmllbGQpIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIucmV2ZXJzZSA9ICEkc2NvcGUub3JkZXIucmV2ZXJzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRRdWV1ZSA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0UXVldWUoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5xdWV1ZSA9IHJlc3BvbnNlLmRhdGEucmVwbGFjZShcIi9uXCIsIFwiPGJyLz5cIik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmdldFF1ZXVlKCk7XHJcblxyXG4gICAgVGVuVGhpbmdzU3ZjLmdldFBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBnZXRVc2VycyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLmdldFVzZXJzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUudXNlcnMgPSByZXNwb25zZS5kYXRhLmZpbHRlcigodXNlcikgPT4gIXVzZXIuYWRtaW4pO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQmFuID0gKHVzZXIpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLnRvZ2dsZUJhbih1c2VyLl9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZVBhdXNlID0gKHVzZXIpID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLnRvZ2dsZVBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucGF1c2VkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUucGF1c2VkKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzR2FtZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlUGFyYW1zLCBUZW5UaGluZ3NTdmMsIFVzZXJTdmMpIHtcclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4pIHtcclxuICAgICAgICBjb25zdCB7IGRhdGE6IHVzZXJzIH0gPSBhd2FpdCBVc2VyU3ZjLmdldFVzZXJzKCk7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJzID0gdXNlcnMuZmlsdGVyKCh1c2VyKSA9PiAhdXNlci5hZG1pbik7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiBjYXRlZ29yaWVzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcclxuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLmdhbWUpIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5nZXRHYW1lKCRzdGF0ZVBhcmFtcy5nYW1lKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ2FtZSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5nYW1lKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnkgPSBhc3luYyAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhOiBkaXNhYmxlZENhdGVnb3JpZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy51cGRhdGVHYW1lQ2F0ZWdvcnkoJHN0YXRlUGFyYW1zLmdhbWUsIGNhdGVnb3J5KTtcclxuICAgICAgJHNjb3BlLmdhbWUuZGlzYWJsZWRDYXRlZ29yaWVzID0gZGlzYWJsZWRDYXRlZ29yaWVzO1xyXG4gICAgICBjb25zb2xlLmxvZyhkaXNhYmxlZENhdGVnb3JpZXMuZmluZCgoYykgPT4gYyA9PT0gY2F0ZWdvcnkpKTtcclxuICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgZ2V0RGF0YSk7XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NTdGF0c0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IFtdO1xyXG4gICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSB7IGxhYmVsczogW10sIGRhdGFzZXRzOiBbXSB9O1xyXG5cclxuICAgIGNvbnN0IGxpbmVDaGFydE9wdGlvbnMgPSB7XHJcbiAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgdGV4dDogXCJDaGFydC5qcyBMaW5lIENoYXJ0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY3VycmVudFVzZXIpIHJldHVybjtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBbXTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExhbmd1YWdlcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldFBsYXlTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeWVhcnMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgeWVhciB9KSA9PiB5ZWFyKSkuc29ydCgpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRocyA9IF8udGltZXMoMTIsIChpKSA9PiBpICsgMSk7XHJcbiAgICAgICAgJHNjb3BlLnBsYXlTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogbW9udGhzLFxyXG4gICAgICAgICAgc2VyaWVzOiB5ZWFycyxcclxuICAgICAgICAgIGRhdGE6IHllYXJzLm1hcCgoeWVhcikgPT5cclxuICAgICAgICAgICAgbW9udGhzLm1hcCgobW9udGgpID0+IGRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5tb250aCA9PT0gbW9udGggJiYgaXRlbS55ZWFyID09PSB5ZWFyKT8udW5pcXVlUGxheWVycyB8fCAwKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBvcHRpb25zOiBsaW5lQ2hhcnRPcHRpb25zLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQueWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBsYW5ndWFnZXMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSkpLnNvcnQoKTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogeWVhcnMsXHJcbiAgICAgICAgICBzZXJpZXM6IGxhbmd1YWdlcyxcclxuICAgICAgICAgIGRhdGE6IGxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlKSA9PlxyXG4gICAgICAgICAgICB5ZWFycy5tYXAoKHllYXIpID0+IGRhdGEuZmluZCgoeyBfaWQgfSkgPT4gX2lkLmxhbmd1YWdlID09PSBsYW5ndWFnZSAmJiBfaWQueWVhciA9PT0geWVhcik/LmNvdW50IHx8IDApLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIG9wdGlvbnM6IGxpbmVDaGFydE9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRHYW1lU3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQueWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBsYW5ndWFnZXMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSkpLnNvcnQoKTtcclxuICAgICAgICAkc2NvcGUuZ2FtZVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiB5ZWFycyxcclxuICAgICAgICAgIHNlcmllczogbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgZGF0YTogbGFuZ3VhZ2VzLm1hcCgobGFuZ3VhZ2UpID0+XHJcbiAgICAgICAgICAgIHllYXJzLm1hcCgoeWVhcikgPT4gZGF0YS5maW5kKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UgPT09IGxhbmd1YWdlICYmIF9pZC55ZWFyID09PSB5ZWFyKT8uY291bnQgfHwgMCksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgb3B0aW9uczogbGluZUNoYXJ0T3B0aW9ucyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IF8uc29ydEJ5KGRhdGEsICh7IGNvdW50IH0pID0+IC1jb3VudCk7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IHNvcnRlZERhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQpLFxyXG4gICAgICAgICAgZGF0YTogW3NvcnRlZERhdGEubWFwKCh7IGNvdW50IH0pID0+IGNvdW50KV0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCAoKSA9PiB7XHJcbiAgICAgIGdldERhdGEoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1dvcmtvdXRDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgJHNjb3BlLnRpbWVFeGVyY2lzaW5nID0gMzA7XHJcbiAgJHNjb3BlLnRpbWVSZXN0aW5nID0gMTA7XHJcbiAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuXHJcbiAgdmFyIHNvdW5kcyA9IHtcclxuICAgIG9uOiBuZXcgQXVkaW8oJ29uLndhdicpLFxyXG4gICAgb2ZmOiBuZXcgQXVkaW8oJ29mZi53YXYnKSxcclxuICAgIHN3aXRjaDogbmV3IEF1ZGlvKCdzd2l0Y2gud2F2JyksXHJcbiAgfTtcclxuXHJcblxyXG4gIHZhciBleGVyY2lzZXMgPSBbXHJcbiAgICB7bmFtZTogJ0p1bXBpbmcgSmFja3MnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdXYWxsIFNpdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1B1c2gtVXAnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdDcnVuY2gnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTdGVwLVVwJywgc3BsaXQ6IHRydWV9LFxyXG4gICAge25hbWU6ICdTcXVhdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1RyaWNlcHMgRGlwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUGxhbmsnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdIaWdoIEtuZWVzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnTHVuZ2UnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwIHdpdGggUm90YXRpb24nLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTaWRlIFBsYW5rJywgc3BsaXQ6IHRydWV9XHJcbiAgXTtcclxuXHJcbiAgdmFyIGV4ZXJjaXNpbmc7XHJcblxyXG4gICRzY29wZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChleGVyY2lzZXMubGVuZ3RoIC0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvICgkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3RpbmcpKSkgKyAnLycgKyBleGVyY2lzZXMubGVuZ3RoO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS53b3Jrb3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZXhjZXJjaXNlVGltZSA9ICRzY29wZS50aW1lRXhlcmNpc2luZyArICRzY29wZS50aW1lUmVzdGluZztcclxuICAgIGlmICghJHNjb3BlLnRpbWVSZW1haW5pbmcpIHtcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSBleGVyY2lzZXMubGVuZ3RoICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgZXhlcmNpc2luZyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS50aW1lUmVtYWluaW5nLS07XHJcbiAgICAgICAgaWYgKCRzY29wZS50aW1lUmVtYWluaW5nID09PSAwKSB7XHJcbiAgICAgICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJ0ZpbmlzaGVkISBDb25ncmF0cyEnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdXJyZW50RXhlcmNpc2UgPSBNYXRoLmZsb29yKCRzY29wZS50aW1lUmVtYWluaW5nIC8gZXhjZXJjaXNlVGltZSk7XHJcbiAgICAgICAgdmFyIHRpbWVyID0gJHNjb3BlLnRpbWVSZW1haW5pbmcgLSBjdXJyZW50RXhlcmNpc2UgKiBleGNlcmNpc2VUaW1lO1xyXG4gICAgICAgICRzY29wZS50aW1lciA9IHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nID8gdGltZXIgLSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgOiB0aW1lcjtcclxuICAgICAgICBpZiAodGltZXIgPiAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0gZXhlcmNpc2VzW2V4ZXJjaXNlcy5sZW5ndGggLSBjdXJyZW50RXhlcmNpc2UgLSAxXTtcclxuICAgICAgICBpZiAodGltZXIgPT09ICRzY29wZS50aW1lRXhlcmNpc2luZykge1xyXG4gICAgICAgICAgc291bmRzLm9uLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRpbWVyID09PSAwKSB7XHJcbiAgICAgICAgICBzb3VuZHMub2ZmLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRzY29wZS5leGVyY2lzZS5zcGxpdCAmJiB0aW1lciA9PT0gTWF0aC5mbG9vcigkc2NvcGUudGltZUV4ZXJjaXNpbmcgLyAyKSkge1xyXG4gICAgICAgICAgc291bmRzLnN3aXRjaC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAkc2NvcGUudGltZXIgPSAnJztcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJycsIHNwbGl0OiBmYWxzZX07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUXVpekFuaW1hbHNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICAkc2NvcGUuYW5pbWFscyA9IFtdO1xyXG5cclxuICBGaWxlU3ZjLmdldFNvdW5kcyhcImFuaW1hbHNcIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5hbmltYWxzID0gXy5zaHVmZmxlKFxyXG4gICAgICByZXNwb25zZS5kYXRhLm1hcCgoYW5pbWFsKSA9PiAoe1xyXG4gICAgICAgIHNvdW5kOiBhbmltYWwsXHJcbiAgICAgICAgbmFtZTogYW5pbWFsLnN1YnN0cmluZygwLCBhbmltYWwuaW5kZXhPZihcIi5cIikpLnJlcGxhY2UoXCJfXCIsIFwiIFwiKS5jYXBpdGFsaXplKCksXHJcbiAgICAgIH0pKSxcclxuICAgICk7XHJcbiAgICBmb3IgKGxldCBhbmltYWwgb2YgJHNjb3BlLmFuaW1hbHMpIHtcclxuICAgICAgYW5pbWFsLmFuc3dlcnMgPSBfLnNodWZmbGUoW2FuaW1hbC5uYW1lLCAuLi5nZXRSYW5kb21BbmltYWxzKGFuaW1hbC5uYW1lKV0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZ3Vlc3MgPSAoYW5pbWFsLCBndWVzcykgPT4ge1xyXG4gICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UmFuZG9tQW5pbWFscyA9IChuYW1lKSA9PlxyXG4gICAgXy5zaHVmZmxlKCRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsKSA9PiBuYW1lICE9PSBhbmltYWwubmFtZSkubWFwKChhbmltYWwpID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgNSk7XHJcblxyXG4gICRzY29wZS5nZXRTY29yZSA9ICgpID0+XHJcbiAgICBgJHskc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAkc2NvcGUuaXNTY29yZVZpc2libGUgPSAoKSA9PiAkc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpekdvb2dsZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ2dvb2dsZScpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TG9nb3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdsb2dvcycpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TW92aWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnbW92aWVzJylcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUXVpelNrZWxldG9uc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gICRzY29wZS5hbmltYWxzID0gW107XHJcblxyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKFwic2tlbGV0b25zXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShcclxuICAgICAgcmVzcG9uc2UuZGF0YS5tYXAoKGFuaW1hbCkgPT4gKHtcclxuICAgICAgICBpbWFnZTogYW5pbWFsLFxyXG4gICAgICAgIG5hbWU6IGFuaW1hbC5zdWJzdHJpbmcoMCwgYW5pbWFsLmluZGV4T2YoXCIuXCIpKS5yZXBsYWNlKFwiX1wiLCBcIiBcIikuY2FwaXRhbGl6ZSgpLFxyXG4gICAgICB9KSksXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgIGFuaW1hbC5hbnN3ZXJzID0gXy5zaHVmZmxlKFthbmltYWwubmFtZSwgLi4uZ2V0UmFuZG9tQW5pbWFscyhhbmltYWwubmFtZSldKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgIGFuaW1hbC5ndWVzcyA9IGd1ZXNzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSAobmFtZSkgPT5cclxuICAgIF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gbmFtZSAhPT0gYW5pbWFsLm5hbWUpLm1hcCgoYW5pbWFsKSA9PiBhbmltYWwubmFtZSkpLnNsaWNlKDAsIDEwKTtcclxuXHJcbiAgJHNjb3BlLmdldFNjb3JlID0gKCkgPT5cclxuICAgIGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsKSA9PiBhbmltYWwubmFtZSA9PT0gYW5pbWFsLmd1ZXNzKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWA7XHJcblxyXG4gICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsKSA9PiBhbmltYWwuZ3Vlc3MpLmxlbmd0aCA9PT0gJHNjb3BlLmFuaW1hbHMubGVuZ3RoO1xyXG59KTtcclxuIl19
