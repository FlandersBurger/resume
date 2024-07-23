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
}), Object.defineProperty(String.prototype, "angleBrackets", {
  value: function () {
    return this.replace("<", "&lt;").replace(">", "&gt;");
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
  }).state("prioritize", {
    url: "/prioritize",
    controller: "PrioritizeCtrl",
    templateUrl: "prioritize.html"
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
  }).state("tenthings-old", {
    url: "/tenthings-old",
    controller: "TenThingsOldCtrl",
    templateUrl: "tenthings-old.html"
  }).state("tenthings-game", {
    url: "/tenthings/:game",
    controller: "TenThingsGameCtrl",
    templateUrl: "tenthings-game.html"
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
}]), angular.module("app").controller("AppCtrl", function ($scope, $location, LanguageSvc, UserSvc) {
  function login(user) {
    $scope.loggedIn || (window.localStorage.user = user._id, $scope.loggedIn = !0, $scope.currentUser = user, $scope.$broadcast("login"));
  }
  console.log("%cYou sneaky bugger!", "font: 2em sans-serif; color: DodgerBlue; text-shadow: 2px 0 0 #444, -2px 0 0 #444, 0 2px 0 #444, 0 -2px 0 #444, 1px 1px #444, -1px -1px 0 #444, 1px -1px 0 #444, -1px 1px 0 #444;"), console.log("I'm glad you're curious whether something is popping up in here. I'm a bit of a stickler when it comes to messages in the console so I try to make sure only things I want are visible. That being said, if there is a big error here, I would really appreciate you telling me so I can get rid of it!"), console.log("The code for my resume is hosted on Github if you really want to go into all this! => https://github.com/FlandersBurger/resume"), $(window).load(function () {
    $(".loading").fadeOut("slow"), $(".content").fadeIn("slow");
  }), $(".checkbox-menu").on("change", "input[type='checkbox']", function () {
    $(this).closest("li").toggleClass("active", this.checked);
  }), $(document).on("click", ".allow-focus", function (e) {
    e.stopPropagation();
  }), $scope.themeCounter = 6, $scope.today = new Date(), $scope.year = $scope.today.getFullYear(), $scope.random = Math.floor(1e6 * Math.random()), $scope.flipTheme = function () {
    $(".loading").show(), $(".content").hide(), setTimeout(function () {
      $(".loading").fadeOut("slow"), $(".content").fadeIn("slow");
    }, 800), $scope.themeCounter = $scope.themeCounter < 6 ? $scope.themeCounter + 1 : $scope.themeCounter = 1;
  }, $.getJSON("/skills.json", function (data) {
    $scope.skills = data.filter(function (skill) {
      return skill.enabled;
    });
  }), $.getJSON("/hobbies.json", function (data) {
    $scope.hobbies = data;
  }), $.getJSON("/experience.json", function (data) {
    $scope.jobs = data, $scope.jobs.forEach(function (job) {
      job.startDate = new Date(job.startDate), job.endDate && (job.endDate = new Date(job.endDate));
    });
  }), $.getJSON("/charades.json", function (data) {
    $scope.charades = data;
  }), $scope.getTimeSpan = function (job) {
    return job.startDate.getFullYear() + (job.endDate ? " - " + job.endDate.getFullYear() : " - Today");
  }, $scope.languages = LanguageSvc.languages, $scope.selectedLanguage = LanguageSvc.getLanguage(), $scope.selectLanguage = function (language) {
    $scope.selectedLanguage = LanguageSvc.setLanguage(language);
  }, $scope.hoverdiv = function (e, divid) {
    var left = e.clientX + "px",
      top = e.clientY + 20 + "px";
    document.getElementById(divid);
    return $("#" + divid).css("left", left), $("#" + divid).css("top", top), $("#" + divid).toggle(), !1;
  }, window.localStorage.user && UserSvc.login(window.localStorage.user).then(function (response) {
    login(response.data);
  }), $scope.$on("login", function (_, user) {
    login(user);
  }), $scope.$on("update", function (_, user) {
    $scope.currentUser = user, $scope.currentUser.birthDate = new Date($scope.currentUser.birthDate), $scope.loading = !1, setTimeout(function () {
      $("#loading-icon").fadeOut("slow");
    }, 1e3);
  }), $scope.$on("loading", function (_, user) {
    $scope.loading = !0, $("#loading-icon").show();
  }), $scope.$on("loaded", function (_, user) {
    $scope.loading = !1, setTimeout(function () {
      $("#loading-icon").fadeOut("slow");
    }, 1e3);
  }), $scope.logout = function () {
    firebase.auth().signOut().then(function () {
      $scope.loggedIn = !1, window.localStorage.clear(), $scope.$broadcast("logout");
    }).catch(function (error) {});
  }, $scope.formatDate = function (date) {
    return (date = new Date(date)).getDate() + "-" + ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()] + "-" + date.getFullYear();
  }, String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
}), angular.module("app").controller("AsteroidsCtrl", function ($scope, GameSvc) {
  $scope.announce = !1;
  var canvas = document.getElementById("asteroids-page"),
    ctx = canvas.getContext("2d");
  ctx.font = "30px Comic Sans MS", ctx.fillStyle = "red", ctx.textAlign = "center";
  var shots = {},
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
    this.move = function () {
      return this.lifespan <= 0 ? delete powerups[this.id] : hit(spaceship, this) ? ($scope.announce = !0, $scope.announcement = this.powerup.announcement, $scope.$apply(), setTimeout(function () {
        $scope.announce = !1, $scope.$apply();
      }, 1e3), this.powerup.activate(spaceship), delete powerups[this.id]) : (this.lifespan--, move(this), void (delay <= 0 ? (this.cycle.direction ? this.cycle.i++ : this.cycle.i--, delay = 5) : delay--));
    };
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
    $scope.word = $scope.charades[category][Math.floor(Math.random() * $scope.charades[category].length)], console.log($scope.word);
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
    $scope.sending = !0, console.log("here"), EmailSvc.send({
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
}), angular.module("app").controller("PrioritizeCtrl", function ($scope, $location, CategoriesSvc) {
  $scope.priorityList = CategoriesSvc.getPriorityList(), $scope.priorityList ? ($scope.selectedQuestion = 1, $scope.currentQuestion = 1, $scope.done = !1) : $location.path("/lists"), $scope.makeChoice = function (choice) {
    for (var i in $scope.priorityList) $scope.priorityList[i].id === $scope.selectedQuestion && ($scope.priorityList[i].choice = 1 === choice ? $scope.priorityList[i].firstChoice : $scope.priorityList[i].secondChoice);
    $scope.selectedQuestion === $scope.currentQuestion && ($scope.currentQuestion = $scope.currentQuestion === $scope.priorityList.length ? 1 : $scope.currentQuestion + 1), $scope.selectedQuestion = $scope.currentQuestion;
    var found = !1;
    for (i in $scope.priorityList) if ("" === $scope.priorityList[i].choice) {
      found = !0;
      break;
    }
    found || ($("#prioritizeChoices").hide(300), $scope.done = !0);
  }, $scope.getButtonValue = function (choice) {
    if (!$scope.priorityList) return "";
    for (var i = 0; i < $scope.priorityList.length; i++) if ($scope.priorityList[i].id === $scope.selectedQuestion) return 1 === choice ? $scope.priorityList[i].firstChoice : $scope.priorityList[i].secondChoice;
  }, $scope.selectQuestion = function (question) {
    $scope.selectedQuestion = question;
  }, $scope.getFilteredPriorityList = function () {
    return $scope.priorityList ? $scope.priorityList.sort(function (a, b) {
      return a.id - b.id;
    }).filter(function (question) {
      return "" !== question.choice || question.id === $scope.currentQuestion;
    }) : [];
  }, $scope.getChoicesMade = function () {
    if (!$scope.priorityList) return "";
    var choicesMade = 0;
    for (var i in $scope.priorityList) "" !== $scope.priorityList[i].choice && choicesMade++;
    return choicesMade;
  }, $scope.getButtonClass = function (choice) {
    if (!$scope.priorityList) return "";
    for (var i in $scope.priorityList) if ($scope.priorityList[i].id === $scope.selectedQuestion) return "" === $scope.priorityList[i].choice ? "btn-primary" : 1 === choice ? $scope.priorityList[i].firstChoice === $scope.priorityList[i].choice ? "btn-success" : "btn-danger" : $scope.priorityList[i].secondChoice === $scope.priorityList[i].choice ? "btn-success" : "btn-danger";
  }, $scope.showChoices = function () {
    $("#prioritizeChoices").show(1e3), $("#reviewChoices").hide();
  }, $scope.chartClick = function (event) {
    $scope.chart && console.log($scope.chart.getSegmentsAtEvent(event));
  }, $scope.showResults = function () {
    for (var i in $scope.data = [], $scope.options = {
      responsive: !0,
      segmentShowStroke: !0,
      segmentStrokeColor: "#fff",
      segmentStrokeWidth: 2,
      percentageInnerCutout: 0,
      animationSteps: 100,
      animationEasing: "easeOutBounce",
      animateRotate: !0,
      animateScale: !1,
      legendTemplate: '<h3 class="tc-chart-js-legend" style="padding:5px"><% for (var i=0; i<segments.length; i++){%><div class="label" style="float:left;margin:5px;background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></div><%}%></h3>'
    }, CategoriesSvc.choices) for (var j in CategoriesSvc.choices[i].votes = 0, $scope.priorityList) CategoriesSvc.choices[i].name === $scope.priorityList[j].choice && CategoriesSvc.choices[i].votes++;
    for (i in CategoriesSvc.choices.sort(function (a, b) {
      return a.votes < b.votes;
    }), CategoriesSvc.choices) $scope.data.push({
      value: CategoriesSvc.choices[i].votes,
      label: CategoriesSvc.choices[i].name
    });
    $("#prioritizeResult").hide(), $("#prioritizeChoices").hide(), $("#priorityResults").show(1e3);
  };
}), angular.module("app").controller("ProfileCtrl", function ($scope, $location, UserSvc) {
  $scope.currentUser || $location.path("/");
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
    }],
    updateUserFlags = function () {
      $scope.currentUser && ($scope.userFlags = $scope.currentUser.flags ? countries.filter(function (country) {
        return $scope.currentUser.flags.includes(country.flag);
      }) : []);
    };
  updateUserFlags(), $scope.dateOptions = {
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
      UserSvc.checkPassword(user, password).then(function (response) {
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
      UserSvc.changePassword(user, oldPassword, newPassword).then(function (response) {
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
    }, function (response) {
      $scope.$emit("popup", {
        message: username + " already in use",
        type: "alert-danger"
      });
    });
  }, $scope.updateUser = function () {
    $scope.currentUser && ($scope.$emit("loading"), UserSvc.updateUser({
      ...$scope.currentUser,
      flags: $scope.userFlags.map(({
        flag
      }) => flag)
    }).then(function (response) {
      $scope.$emit("update", response.data), updateUserFlags();
    }));
  }, $scope.$watch("userFlags.length", function (length) {
    $scope.updateUser();
  }), $scope.loadCountries = function ($query) {
    return countries.filter(function (country) {
      return -1 != country.name.toLowerCase().indexOf($query.toLowerCase());
    });
  };
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
}), angular.module("app").controller("TenThingsCtrl", function ($scope, $location, TenThingsSvc) {
  let page = 1;
  $scope.lists = [], $scope.search = "", $scope.newItem = {}, $scope.languageFilter = {}, $scope.categoryFilter = {}, $scope.selectedList = void 0;
  let exhausted = !1;
  $scope.keyDown = e => {
    switch ((e = e || window.event).keyCode) {
      case 9:
        $("#new-blurb").is(":focus") && setTimeout(() => {
          $scope.createValue();
        }, 100);
        break;
      case 13:
        $("#new-blurb").is(":focus") ? $scope.createValue() : $("#new-value").is(":focus") && $("#new-blurb").focus();
    }
  }, $scope.addList = () => {
    const currentLanguage = $scope.selectedList ? $scope.selectedList.language : "EN";
    $location.search("list", "new"), $scope.selectedList = {
      name: "",
      creator: $scope.currentUser._id,
      date: new Date(),
      values: [],
      answers: 0,
      isDynamic: !0,
      category: "",
      categories: [],
      language: currentLanguage
    };
  }, $scope.setSelectedList = list => {
    list ? "new" === list._id ? $scope.addList() : TenThingsSvc.getList(list).then(({
      data
    }) => {
      $scope.selectedList = data, $location.search("list", data._id);
    }).catch(err => console.error(err)) : ($scope.selectedList = void 0, $location.search("list", null));
  };
  const getData = () => {
    TenThingsSvc.getLanguages().then(response => {
      $scope.languages = response.data, $scope.languageFilter = {};
    }), TenThingsSvc.getCategories().then(response => {
      $scope.categories = response.data, $scope.categoryFilter = {};
    }), TenThingsSvc.getListLanguageStats().then(({
      data
    }) => {
      $scope.languageStats = data.reduce((result, {
        _id,
        count
      }) => (result[_id] = count, result), {});
    }), TenThingsSvc.getListCategoryStats().then(({
      data
    }) => {
      $scope.categoryStats = data.reduce((result, {
        _id,
        count
      }) => (result[_id] = count, result), {});
    }), $location.search().list && $scope.setSelectedList({
      _id: $location.search().list
    }), $scope.search = $location.search().search || "", $scope.getLists();
  };
  $scope.valueOrder = {
    field: "value",
    direction: !1
  }, $scope.order = {
    field: "date",
    direction: !0
  }, $scope.orderBy = field => {
    $scope.order.field === field ? $scope.order.direction = !$scope.order.direction : $scope.order = {
      field,
      direction: !1
    }, $scope.getLists();
  }, $scope.getMoreLists = async () => {
    0 !== $scope.lists.length && getLists().then(lists => {
      $scope.lists = $scope.lists.concat(lists);
    });
  }, $scope.getLists = () => {
    $scope.lists = [], page = 1, exhausted = !1, getLists().then(lists => {
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
    return console.log("Page ", page, " results ", data.result.length), data.result.length < 100 ? exhausted = !0 : page = data.nextPage, $scope.loading = !1, console.log(data.result.slice(0, 10)), data.result;
  };
  $scope.updateValue = item => {
    item.value ? TenThingsSvc.updateListValue($scope.selectedList, item) : TenThingsSvc.deleteListValue($scope.selectedList, item);
  }, $scope.createValue = () => {
    $scope.hasDuplicate() ? alert(`${$scope.newItem.value} is already in the list`) : TenThingsSvc.createListValue($scope.selectedList, $scope.newItem).then(() => {
      $scope.selectedList.values.push({
        ...$scope.newItem
      }), $scope.newItem.value = "", $scope.newItem.blurb = "";
    });
  }, $scope.deleteValue = item => {
    TenThingsSvc.deleteListValue($scope.selectedList, item).then(() => {
      $scope.selectedList.values = $scope.selectedList.values.filter(value => value._id !== item._id);
    });
  }, $scope.upsertList = (list, updates) => {
    if ($scope.saving = !0, list.values.length >= 10 && list.name && list.categories.length > 0) {
      if ("new" !== list._id) {
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
        "new" === $location.search().list && $location.search("list", data._id), $scope.getLists(), $scope.saving = !1;
      }, console.error);
    } else Object.assign($scope.selectedList, updates);
  }, $scope.deleteList = list => {
    list._id ? confirm("Are you sure you want to delete this list?") && TenThingsSvc.deleteList(list).then(() => {
      $scope.getLists(), $scope.selectedList = null;
    }) : $scope.selectedList = null;
  }, $scope.setLanguage = (list, language) => {
    list.language = language.code;
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
  }, $scope.$on("login", () => getData()), $scope.currentUser?._id && getData();
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
}), angular.module("app").controller("TenThingsGameCtrl", function ($scope, $stateParams, TenThingsSvc) {
  $scope.$on("login", _ => {
    $scope.currentUser.admin && getUsers();
  }), $stateParams.game && TenThingsSvc.getGame($stateParams.game).then(response => {
    $scope.game = response.data, console.log($scope.game);
  });
}), angular.module("app").controller("TenThingsOldCtrl", function ($scope, $location, TenThingsSvc) {
  function flash(element) {
    const color = $(element).css("background-color");
    $(element).animate({
      backgroundColor: "#FA8072"
    }, 100, () => {
      $(element).animate({
        backgroundColor: color
      }, 100);
    });
  }
  $scope.search = {
    name: "",
    values: ""
  }, $scope.keyDown = e => {
    switch ((e = e || window.event).keyCode) {
      case 9:
        $("#new-blurb").is(":focus") && setTimeout(() => {
          $scope.addValue();
        }, 100);
        break;
      case 13:
        $("#new-blurb").is(":focus") ? $scope.addValue() : $("#new-value").is(":focus") && $("#new-blurb").focus();
    }
  }, $scope.searchName = "", $scope.newItem = {}, $scope.setCategoryFilter = category => $scope.categoryFilter = category, $scope.setUserFilter = user => $scope.userFilter = user, $scope.setUpdateFilter = type => $scope.updateFilter = type, $scope.setLanguageFilter = language => $scope.languageFilter = language, $scope.filteredLists = () => $scope.lists ? $scope.lists.filter(({
    isDynamic
  }) => "all" === $scope.updateFilter || !("static" === $scope.updateFilter && !0 === isDynamic || "dynamic" === $scope.updateFilter && !1 === isDynamic)).filter(({
    categories
  }) => "All" === $scope.categoryFilter || (categories.length > 0 ? categories.indexOf($scope.categoryFilter) >= 0 : "Blank" === $scope.categoryFilter)).filter(({
    creator
  }) => "All" === $scope.userFilter || creator === $scope.userFilter).filter(({
    language
  }) => "all" === $scope.languageFilter.code || language === $scope.languageFilter.code) : [], $scope.$on("login", _ => {
    $scope.getLists(), TenThingsSvc.getCategories().then(response => {
      $scope.categories = response.data, $scope.categoryFilters = $scope.categories.map(category => category), $scope.categoryFilters.push("All"), $scope.categoryFilters.push("Blank"), $scope.categoryFilter = "All", $scope.updateFilter = "all";
    }), TenThingsSvc.getLanguages().then(response => {
      $scope.languages = response.data, $scope.languageFilters = $scope.languages.map(language => language), $scope.languageFilters.push({
        name: "All",
        code: "all"
      }), $scope.languageFilter = {
        name: "All",
        code: "all"
      };
    }), $location.search().list && $scope.selectList({
      _id: $location.search().list
    });
  }), $scope.listOrder = {
    field: "date",
    direction: !0,
    label: "Creation Date"
  }, $scope.valueOrder = {
    field: "value",
    direction: !1,
    label: "Value"
  }, $scope.sort = (sorter, sortField, sortLabel) => {
    $scope[sorter].label = sortLabel, $scope[sorter].field === sortField ? $scope[sorter].direction = !$scope[sorter].direction : ($scope[sorter].field = sortField, $scope[sorter].direction = !0);
  }, $scope.getLanguageCount = language => {
    if (!$scope.lists) return 0;
    const count = $scope.lists.filter(list => ("All" === $scope.categoryFilter || list.categories.includes($scope.categoryFilter)) && ("all" === language.code || list.language === language.code) && ("All" === $scope.userFilter || list.creator === $scope.userFilter) && ("all" === $scope.updateFilter || list.isDynamic === ("dynamic" === $scope.updateFilter))).length;
    return `${count} - ${Math.round(count / $scope.lists.length * 100)}%`;
  }, $scope.getCategoryCount = category => {
    if (!$scope.lists) return 0;
    const count = $scope.lists.filter(list => !(!("All" === category || list.categories.indexOf(category) >= 0) || "all" !== $scope.languageFilter.code && list.language !== $scope.languageFilter.code || "All" !== $scope.userFilter && list.creator !== $scope.userFilter || "all" !== $scope.updateFilter && list.isDynamic !== ("dynamic" === $scope.updateFilter))).length;
    return `${count} - ${Math.round(count / $scope.lists.length * 100)}%`;
  }, $scope.getUpdateCount = type => {
    if (!$scope.lists) return 0;
    const count = $scope.lists.filter(list => "all" === type || list.isDynamic && "dynamic" === type || !list.isDynamic && "static" === type).length;
    return `${count} - ${Math.round(count / $scope.lists.length * 100)}%`;
  }, $scope.getLists = () => {
    $scope.loading || ($scope.loading = !0, TenThingsSvc.getLists().then(({
      data
    }) => {
      $scope.lists = data.result, $scope.userFilters = {}, $scope.userFilters.All = $scope.lists.length, $scope.userFilters = $scope.lists.sort((list1, list2) => list1.creator > list2.creator).reduce((users, {
        creator
      }) => (users[creator] || (users[creator] = 0), users[creator]++, users), $scope.userFilters), $scope.userCount = Object.keys($scope.userFilters).length, $scope.userFilters = sortObject($scope.userFilters, !1), $scope.userFilter = "All", $scope.loading = !1;
    }));
  }, $scope.selectList = list => {
    TenThingsSvc.getList(list).then(({
      data
    }) => {
      $scope.selectedList = data, $location.search("list", data._id);
    }).catch(err => console.error(err));
  }, $scope.selectCategory = category => {
    $scope.selectedList.category = category, $("#category-select").hide();
  }, $scope.getCategoryClass = category => $scope.selectedList && $scope.selectedList.categories.indexOf(category) >= 0 ? "btn-success" : "btn-default", $scope.toggleCategory = category => {
    const categoryIndex = $scope.selectedList.categories.indexOf(category);
    categoryIndex >= 0 ? $scope.selectedList.categories.splice(categoryIndex, 1) : $scope.selectedList.categories.push(category);
  }, $scope.selectLanguage = language => {
    $scope.selectedList.language = language.code;
    const nonEnglishIndex = $scope.selectedList.categories.indexOf("Non-English");
    "EN" !== language.code && nonEnglishIndex < 0 ? $scope.selectedList.categories.push("Non-English") : "EN" === language.code && nonEnglishIndex >= 0 && $scope.selectedList.categories.splice(nonEnglishIndex, 1);
  }, $scope.addList = () => {
    const currentLanguage = $scope.selectedList ? $scope.selectedList.language : "EN";
    $location.search("list", ""), $scope.selectedList = {
      name: "",
      creator: $scope.currentUser._id,
      date: new Date(),
      values: [],
      answers: 0,
      isDynamic: !0,
      category: "",
      categories: [],
      language: currentLanguage
    };
  }, $scope.hasDuplicate = () => $scope.selectedList && $scope.newItem.value && _.some($scope.selectedList.values, answer => answer.value.removeAllButLetters() == $scope.newItem.value.removeAllButLetters()), $scope.addValue = () => {
    $scope.newItem.value && (_.some($scope.selectedList.values, answer => answer.value.removeAllButLetters() == $scope.newItem.value.removeAllButLetters()) ? alert(`${$scope.newItem.value} is already in the list`) : ($scope.newItem.creator = $scope.currentUser._id, $scope.selectedList.values.unshift(JSON.parse(JSON.stringify($scope.newItem))), $scope.selectedList.answers++, $scope.newItem.value = "", $scope.newItem.blurb = "", $scope.selectedList.values.length >= 10 && $scope.selectedList.name && $scope.selectedList.categories.length > 0 && $scope.saveList($scope.selectedList))), $("#new-value").focus();
  }, $scope.reportList = list => {
    list.reported = !0, TenThingsSvc.reportList($scope.currentUser, list);
  }, $scope.saveList = list => {
    $scope.saving || (list.values = list.values.filter(({
      value
    }) => value), list.values.length >= 10 && list.name && list.categories.length > 0 ? ($scope.saving = !0, TenThingsSvc.saveList($scope.currentUser, list).then(({
      data
    }) => {
      if ($scope.selectedList._id) {
        for (let i = 0; i < $scope.lists.length; i++) if ($scope.lists[i]._id === data._id) {
          $scope.lists[i] = data;
          break;
        }
        $scope.selectList(list);
      } else $scope.lists.unshift(data), $scope.selectList(data);
      $scope.saving = !1;
    }, err => {
      console.error(err), $scope.saving = !1;
    })) : list.values.length < 10 ? alert("Lists must contain 10 or more values!") : list.name ? flash(".list-category") : flash("#list-name"));
  }, $scope.deleteList = list => {
    list._id ? confirm("Are you sure you want to delete this list?") && TenThingsSvc.deleteList(list).then(response => {
      $scope.getLists(), $scope.selectedList = null;
    }) : ($scope.lists = $scope.lists.filter(({
      _id
    }) => _id), $scope.selectedList = null);
  }, $scope.listButtonClass = list => {
    const values = list.values.length,
      blurbs = list.blurbs;
    return values === blurbs && list.description ? "btn-default" : 0 !== blurbs || list.description ? 0 === blurbs && list.description ? "btn-info" : "btn-primary" : "btn-warning";
  }, $scope.getBlurbs = type => {
    $scope.gettingBlurbs = !0, TenThingsSvc.getBlurbs($scope.selectedList, type).then(() => {
      $scope.selectList($scope.selectedList), $scope.gettingBlurbs = !1;
    }).catch(err => {
      console.error(err), $scope.gettingBlurbs = !1;
    });
  };
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
  }, svc.getCategories = () => $http.get("/api/tenthings/categories"), svc.getLanguages = () => $http.get("/api/tenthings/languages"), svc.getList = function (list) {
    return $http.get("/api/tenthings/lists/" + list._id);
  }, svc.updateList = function (list) {
    return $http.put("/api/tenthings/lists/" + list._id, list);
  }, svc.createList = function (user, list) {
    return $http.post("/api/tenthings/lists", {
      user,
      list
    });
  }, svc.deleteList = function (list) {
    return $http.delete("/api/tenthings/lists/" + list._id);
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
    return $http.get(`/api/users/ban/${id}`);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJjb250cm9sbGVycy9hcHAuY3RybC5qcyIsImNvbnRyb2xsZXJzL2FzdGVyb2lkcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvYnViYmxlcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvY2hhcmFkZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3QuY3RybC5qcyIsImNvbnRyb2xsZXJzL2V4cGVyaWVuY2UuY3RybC5qcyIsImNvbnRyb2xsZXJzL2hvYmJpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xlbW1pbmdzLmN0cmwuanMiLCJjb250cm9sbGVycy9saXN0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbG9naW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3Bvc3RzLmN0cmwuanMiLCJjb250cm9sbGVycy9wcmlvcml0aXplLmN0cmwuanMiLCJjb250cm9sbGVycy9wcm9maWxlLmN0cmwuanMiLCJjb250cm9sbGVycy9za2lsbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvdGVudGhpbmdzYWRtaW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2dhbWUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc29sZC5jdHJsLmpzIiwiY29udHJvbGxlcnMvd29ya291dC5jdHJsLmpzIiwic2VydmljZXMvY2F0ZWdvcmllcy5zdmMuanMiLCJzZXJ2aWNlcy9lbWFpbC5zdmMuanMiLCJzZXJ2aWNlcy9maWxlLnN2Yy5qcyIsInNlcnZpY2VzL2dhbWUuc3ZjLmpzIiwic2VydmljZXMvbGFuZ3VhZ2Uuc3ZjLmpzIiwic2VydmljZXMvcG9zdHMuc3ZjLmpzIiwic2VydmljZXMvdGVudGhpbmdzLnN2Yy5qcyIsInNlcnZpY2VzL3VzZXIuc3ZjLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9hbmltYWxzLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2dvb2dsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9sb2dvcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9tb3ZpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvc2tlbGV0b25zLmN0cmwuanMiXSwibmFtZXMiOlsiZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwIiwiYmFzZSIsImxldHRlcnMiLCJkb21haW5zIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJTdHJpbmciLCJwcm90b3R5cGUiLCJ2YWx1ZSIsInJlZHVjZSIsInJlc3VsdCIsImxldHRlciIsInJlcGxhY2UiLCJ0aGlzIiwiU1BFQ0lBTF9DSEFSQUNURVJTIiwiUmVnRXhwIiwidG9Mb3dlckNhc2UiLCJyZW1vdmVEaWFjcml0aWNzIiwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMiLCJleHRyYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsImRpcmVjdGl2ZSIsIiRkb2N1bWVudCIsInJlc3RyaWN0Iiwic2NvcGUiLCJjbGlja091dHNpZGUiLCJsaW5rIiwiZWwiLCJhdHRyIiwib24iLCJ0YXJnZXQiLCJjb250YWlucyIsIiRhcHBseSIsIiRldmFsIiwiJHN0YXRlIiwiJGNvbXBpbGUiLCIkaW50ZXJwb2xhdGUiLCJnZXRTdHlsZSIsInRlbXBsYXRlU3R5bGVVcmwiLCJzdHlsZSIsImhyZWYiLCJyZWwiLCJtYXRjaCIsImVsZW0iLCJ0ZW1wbGF0ZVN0eWxlcyIsImh0bWwiLCJzdGFydFN5bWJvbCIsImVuZFN5bWJvbCIsImFwcGVuZCIsIiRvbiIsImV2ZW50IiwidG9TdGF0ZSIsInRvUGFyYW1zIiwiZnJvbVN0YXRlIiwiZnJvbVBhcmFtcyIsInN0YXRlcyIsIm5hbWUiLCJwYXJlbnQiLCJnZXQiLCJ2aWV3cyIsIl8iLCJ2aWV3Iiwic3BsaXQiLCJmbGF0IiwiaW5jbHVkZXMiLCJyZXZlcnNlIiwiZ2V0U3R5bGVzIiwiJHNjb3BlIiwiJGxvY2F0aW9uIiwiTGFuZ3VhZ2VTdmMiLCJVc2VyU3ZjIiwibG9naW4iLCJ1c2VyIiwibG9nZ2VkSW4iLCJsb2NhbFN0b3JhZ2UiLCJfaWQiLCJjdXJyZW50VXNlciIsIiQiLCJsb2FkIiwiZmFkZU91dCIsImZhZGVJbiIsImNsb3Nlc3QiLCJ0b2dnbGVDbGFzcyIsImNoZWNrZWQiLCJkb2N1bWVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRoZW1lQ291bnRlciIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImZsaXBUaGVtZSIsInNob3ciLCJoaWRlIiwic2V0VGltZW91dCIsImdldEpTT04iLCJza2lsbHMiLCJmaWx0ZXIiLCJza2lsbCIsImhvYmJpZXMiLCJqb2JzIiwiam9iIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImNoYXJhZGVzIiwiZ2V0VGltZVNwYW4iLCJsYW5ndWFnZXMiLCJzZWxlY3RlZExhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJzZWxlY3RMYW5ndWFnZSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJob3ZlcmRpdiIsImRpdmlkIiwibGVmdCIsImNsaWVudFgiLCJ0b3AiLCJjbGllbnRZIiwiZ2V0RWxlbWVudEJ5SWQiLCJjc3MiLCJ0b2dnbGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJiaXJ0aERhdGUiLCJsb2FkaW5nIiwibG9nb3V0IiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsImNsZWFyIiwiY2F0Y2giLCJlcnJvciIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiY2FwaXRhbGl6ZSIsIkdhbWVTdmMiLCJhbm5vdW5jZSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJmb250IiwiZmlsbFN0eWxlIiwidGV4dEFsaWduIiwic2hvdHMiLCJhc3Rlcm9pZHMiLCJwb3dlcnVwcyIsImV4cGxvc2lvbnMiLCJtYXAiLCJzcGFjZXBpY3MiLCJzcGFjZSIsInBvd2VydXBUeXBlcyIsImFubm91bmNlbWVudCIsImN5Y2xlIiwicm93cyIsImNvbHVtbnMiLCJzaXplIiwiaW1nIiwiSW1hZ2UiLCJhY3RpdmF0ZSIsInNwYWNlc2hpcCIsIm1heFNwZWVkIiwiY29vbGRvd24iLCJjb29sZG93blRpbWUiLCJyYW5nZSIsInNoaWVsZCIsImV4cGxvZGUiLCJzcGF3bkFzdGVyb2lkcyIsInBvd2VydXAiLCJhcnJheSIsInNyYyIsImV4cGxvc2lvbkltYWdlIiwiZXZhbHVhdGVLZXlzIiwicGxheWluZyIsInNob290Iiwicm90YXRpb24iLCJzcGVlZCIsInNjb3JlIiwiU3BhY2VzaGlwIiwiYXV0b1NwYXduIiwid2lkdGgiLCJoZWlnaHQiLCJjYW5ub24iLCJ4IiwieSIsInBvc2l0aW9uIiwiYW5nbGUiLCJpZCIsInJvdW5kIiwiU2hvdCIsIm1vdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZmlsbCIsImFzdGVyb2lkIiwiaGl0IiwiZ2FtZU92ZXIiLCJjb3MiLCJzaW4iLCJsaWZlc3BhbiIsIkFzdGVyb2lkIiwiZ2V0RW50cnlQb3NpdGlvbiIsInJvdGF0aW9uU3BlZWQiLCJFeHBsb3Npb24iLCJzaG90IiwicG9pbnRzIiwic3Bhd25Qb3dlcnVwIiwib2JqZWN0IiwiUG93ZXJ1cCIsImRlbGF5Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImNvbHVtbiIsInJvdyIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJncmlkWCIsImdyaWRZIiwib2JqZWN0MSIsIm9iamVjdDIiLCJrZXlzIiwiYW1vdW50IiwiaGlnaHNjb3JlIiwic2V0SGlnaHNjb3JlIiwicmVzaXplQ2FudmFzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleUNvZGUiLCJ3aGljaCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXciLCJjbGVhclJlY3QiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwidGFsbHkiLCJmaWxsVGV4dCIsIm1lYXN1cmVUZXh0IiwiYmFja2dyb3VuZEltYWdlIiwiYnViYmxlcyIsImNvbG9ycyIsIkJ1YmJsZSIsInJhZGl1cyIsImV4cGFuZGluZyIsImNpcmN1bWZlcmVuY2UiLCJtYXhSYWRpdXMiLCJ2eCIsInZ5IiwiZmlsdGVyQnViYmxlcyIsImJ1YmJsZSIsInNlbGVjdFdvcmQiLCJjYXRlZ29yeSIsIndvcmQiLCJFbWFpbFN2YyIsIm9wdGlvbnMiLCJ0ZXh0IiwiY29udGFjdCIsImVtYWlsIiwicGhvbmUiLCJhYm91dCIsIm1lc3NhZ2UiLCJzZW5kaW5nIiwic2VudCIsInN0YXR1cyIsImVyciIsImdldFNraWxsIiwic2tpbGxDb2RlIiwiY29kZSIsIiR3aW5kb3ciLCJob2JieVNlbGVjdG9yVmlzaWJsZSIsInNlbGVjdGVkSG9iYnkiLCJzZWxlY3RIb2JieSIsImhvYmJ5Iiwic2hvd0hvYmJ5IiwiaW5kZXgiLCJpbWFnZXMiLCJMRUZUIiwiUklHSFQiLCJsZW1taW5nc0ltYWdlIiwiZGVjb3JJbWFnZSIsImxlbW1pbmdzIiwic3RhcnRlZCIsImFjdGlvbnMiLCJ3YWxrIiwic3RhcnQiLCJlbmQiLCJodWgiLCJmYWxsIiwiZmx5Iiwic3RvcCIsImNsaW1iIiwiYnVpbGQiLCJwdW5jaCIsImRpZyIsIkxlbW1pbmciLCJpbml0IiwiYWN0IiwiYWN0aW9uIiwiYW5pbWF0aW9uIiwic2NhbGUiLCJoYXRjaCIsIm9wZW4iLCJyZWN0IiwiQ2F0ZWdvcmllc1N2YyIsInNob3dDYXRlZ29yeSIsImdldENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidGFza3MiLCJqIiwidGFzayIsInNlbGVjdENhdGVnb3J5Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdGVkVGFza3MiLCJzZWxlY3RhYmxlVGFza3MiLCJlbnRlcmVkQ2F0ZWdvcnkiLCJuZXdDYXRlZ29yeSIsImZvdW5kIiwiYWRkQ2F0ZWdvcnkiLCJuZXdUYXNrIiwic2VsZWN0VGFzayIsImFkZFRhc2siLCJlbnRlcmVkVGFzayIsInJlbW92ZVRhc2siLCJ1bnNlbGVjdFRhc2siLCJ0YXNrTGlzdCIsInNwbGljZSIsImluZGV4T2YiLCJzdGFydFByaW9yaXRpemluZyIsInNldFByaW9yaXR5TGlzdCIsInBhdGgiLCJnZXRRdWVzdGlvbnMiLCJjb3VudGVyIiwidWkiLCJmaXJlYmFzZXVpIiwiQXV0aFVJIiwic3RhcnRVSSIsImNhbGxiYWNrcyIsInNpZ25JblN1Y2Nlc3MiLCJjcmVkZW50aWFsIiwicmVkaXJlY3RVcmwiLCJnZXRJZFRva2VuIiwiaWRUb2tlbiIsImF1dGhlbnRpY2F0ZSIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJlbWFpbFZlcmlmaWVkIiwiJGVtaXQiLCJtb2RhbCIsInR5cGUiLCJzaWduSW5GYWlsdXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjcmVkIiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJ1aVNob3duIiwiZGlzcGxheSIsInNpZ25JblN1Y2Nlc3NVcmwiLCJzaWduSW5PcHRpb25zIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiUFJPVklERVJfSUQiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsInNpZ25JbkZsb3ciLCJyZXNldCIsIiRmaWx0ZXIiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsImJvZHkiLCJwb3N0IiwiZmV0Y2giLCJwb3N0cyIsImdldFBvc3QiLCJ1bnNoaWZ0IiwicHJpb3JpdHlMaXN0IiwiZ2V0UHJpb3JpdHlMaXN0Iiwic2VsZWN0ZWRRdWVzdGlvbiIsImN1cnJlbnRRdWVzdGlvbiIsImRvbmUiLCJtYWtlQ2hvaWNlIiwiY2hvaWNlIiwiZmlyc3RDaG9pY2UiLCJzZWNvbmRDaG9pY2UiLCJnZXRCdXR0b25WYWx1ZSIsInNlbGVjdFF1ZXN0aW9uIiwicXVlc3Rpb24iLCJnZXRGaWx0ZXJlZFByaW9yaXR5TGlzdCIsImdldENob2ljZXNNYWRlIiwiY2hvaWNlc01hZGUiLCJnZXRCdXR0b25DbGFzcyIsInNob3dDaG9pY2VzIiwiY2hhcnRDbGljayIsImNoYXJ0IiwiZ2V0U2VnbWVudHNBdEV2ZW50Iiwic2hvd1Jlc3VsdHMiLCJyZXNwb25zaXZlIiwic2VnbWVudFNob3dTdHJva2UiLCJzZWdtZW50U3Ryb2tlQ29sb3IiLCJzZWdtZW50U3Ryb2tlV2lkdGgiLCJwZXJjZW50YWdlSW5uZXJDdXRvdXQiLCJhbmltYXRpb25TdGVwcyIsImFuaW1hdGlvbkVhc2luZyIsImFuaW1hdGVSb3RhdGUiLCJhbmltYXRlU2NhbGUiLCJsZWdlbmRUZW1wbGF0ZSIsImNob2ljZXMiLCJ2b3RlcyIsImxhYmVsIiwiY291bnRyaWVzIiwiZmxhZyIsInRpZGJpdCIsInVwZGF0ZVVzZXJGbGFncyIsInVzZXJGbGFncyIsImZsYWdzIiwiY291bnRyeSIsImRhdGVPcHRpb25zIiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJpbml0RGF0ZSIsImRhdGVwaWNrZXJNb2RlIiwidXNlcm5hbWVUb2dnbGUiLCJwYXNzd29yZFRvZ2dsZSIsInRvZ2dsZVVzZXJuYW1lIiwibmV3VXNlcm5hbWUiLCJ1c2VybmFtZSIsInRvZ2dsZVBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJjaGVja1Bhc3N3b3JkIiwicGFzc3dvcmQiLCJvcmlnaW5hbEJnIiwiYW5pbWF0ZSIsImJhY2tncm91bmRDb2xvciIsImNoYW5nZVBhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJjaGFuZ2VVc2VybmFtZSIsInVwZGF0ZVVzZXIiLCIkd2F0Y2giLCJsb2FkQ291bnRyaWVzIiwiJHF1ZXJ5Iiwic2VsZWN0ZWRTa2lsbCIsInNraWxsc1Zpc2libGUiLCJwcm9qZWN0cyIsImxhYmVscyIsImVtcGxveWVyIiwiY29uY2F0IiwiZmlsdGVyZWRQcm9qZWN0cyIsInByb2plY3QiLCJzZXRTZWxlY3RlZFNraWxsIiwiY2hhcnRPcHRpb25zIiwiY3V0b3V0UGVyY2VudGFnZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJ0b29sdGlwcyIsImNoYXJ0U3R5bGUiLCJpbWFnZSIsIlRlblRoaW5nc1N2YyIsInBhZ2UiLCJsaXN0cyIsInNlYXJjaCIsIm5ld0l0ZW0iLCJsYW5ndWFnZUZpbHRlciIsImNhdGVnb3J5RmlsdGVyIiwic2VsZWN0ZWRMaXN0IiwidW5kZWZpbmVkIiwiZXhoYXVzdGVkIiwia2V5RG93biIsImlzIiwiY3JlYXRlVmFsdWUiLCJmb2N1cyIsImFkZExpc3QiLCJjdXJyZW50TGFuZ3VhZ2UiLCJjcmVhdG9yIiwidmFsdWVzIiwiYW5zd2VycyIsImlzRHluYW1pYyIsInNldFNlbGVjdGVkTGlzdCIsImxpc3QiLCJnZXRMaXN0IiwiZ2V0RGF0YSIsImdldExhbmd1YWdlcyIsImdldExpc3RMYW5ndWFnZVN0YXRzIiwibGFuZ3VhZ2VTdGF0cyIsImNvdW50IiwiZ2V0TGlzdENhdGVnb3J5U3RhdHMiLCJjYXRlZ29yeVN0YXRzIiwiZ2V0TGlzdHMiLCJ2YWx1ZU9yZGVyIiwiZmllbGQiLCJvcmRlciIsIm9yZGVyQnkiLCJnZXRNb3JlTGlzdHMiLCJhc3luYyIsInNldExhbmd1YWdlRmlsdGVyIiwic2V0Q2F0ZWdvcnlGaWx0ZXIiLCJ0b2dnbGVDYXRlZ29yeUZpbHRlciIsImFsbENhdGVnb3JpZXMiLCJzb3J0QnkiLCJsaW1pdCIsIm5leHRQYWdlIiwidXBkYXRlVmFsdWUiLCJ1cGRhdGVMaXN0VmFsdWUiLCJkZWxldGVMaXN0VmFsdWUiLCJoYXNEdXBsaWNhdGUiLCJhbGVydCIsImNyZWF0ZUxpc3RWYWx1ZSIsImJsdXJiIiwiZGVsZXRlVmFsdWUiLCJ1cHNlcnRMaXN0IiwidXBkYXRlcyIsInNhdmluZyIsImNoYW5nZXMiLCJ1cGRhdGVMaXN0IiwibGlzdEluZGV4IiwiZmluZEluZGV4IiwiY3JlYXRlTGlzdCIsImFzc2lnbiIsImRlbGV0ZUxpc3QiLCJjb25maXJtIiwibm9uRW5nbGlzaEluZGV4Iiwic2V0RGlmZmljdWx0eSIsImRpZmZpY3VsdHkiLCJzZXRGcmVxdWVuY3kiLCJmcmVxdWVuY3kiLCJzZXRDYXRlZ29yeSIsImNhdGVnb3J5SW5kZXgiLCJzb21lIiwiYW5zd2VyIiwicmVtb3ZlQWxsQnV0TGV0dGVycyIsImdldEJsdXJicyIsImdldHRpbmdCbHVyYnMiLCJhZG1pbiIsImdldFVzZXJzIiwiZ2V0UXVldWUiLCJxdWV1ZSIsImdldFBhdXNlIiwicGF1c2VkIiwidXNlcnMiLCJ0b2dnbGVCYW4iLCJ0b2dnbGVQYXVzZSIsIiRzdGF0ZVBhcmFtcyIsImdhbWUiLCJnZXRHYW1lIiwiZmxhc2giLCJlbGVtZW50IiwiY29sb3IiLCJhZGRWYWx1ZSIsInNlYXJjaE5hbWUiLCJzZXRVc2VyRmlsdGVyIiwidXNlckZpbHRlciIsInNldFVwZGF0ZUZpbHRlciIsInVwZGF0ZUZpbHRlciIsImZpbHRlcmVkTGlzdHMiLCJjYXRlZ29yeUZpbHRlcnMiLCJsYW5ndWFnZUZpbHRlcnMiLCJzZWxlY3RMaXN0IiwibGlzdE9yZGVyIiwic29ydGVyIiwic29ydEZpZWxkIiwic29ydExhYmVsIiwiZ2V0TGFuZ3VhZ2VDb3VudCIsImdldENhdGVnb3J5Q291bnQiLCJnZXRVcGRhdGVDb3VudCIsInVzZXJGaWx0ZXJzIiwiQWxsIiwibGlzdDEiLCJsaXN0MiIsInVzZXJDb3VudCIsImdldENhdGVnb3J5Q2xhc3MiLCJ0b2dnbGVDYXRlZ29yeSIsInNhdmVMaXN0IiwicmVwb3J0TGlzdCIsInJlcG9ydGVkIiwibGlzdEJ1dHRvbkNsYXNzIiwiYmx1cmJzIiwiZGVzY3JpcHRpb24iLCJ0aW1lUmVtYWluaW5nIiwidGltZUV4ZXJjaXNpbmciLCJ0aW1lUmVzdGluZyIsInJlc3QiLCJleGVyY2lzaW5nIiwic291bmRzIiwiQXVkaW8iLCJvZmYiLCJzd2l0Y2giLCJleGVyY2lzZXMiLCJwcm9ncmVzcyIsIndvcmtvdXQiLCJleGNlcmNpc2VUaW1lIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVyIiwiZXhlcmNpc2UiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRFeGVyY2lzZSIsInBsYXkiLCIkaHR0cCIsInN2YyIsImdldFRhc2tzIiwidCIsIm0iLCJzaHVmZmxlIiwiZ2V0SW1hZ2VzIiwiZm9sZGVyIiwiZ2V0U291bmRzIiwiZ2V0SGlnaHNjb3JlIiwiam9pbiIsInB1dCIsImRlbGV0ZSIsImdldFVzZXIiLCJzZXRUb2tlbiIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiY3JlYXRlVXNlciIsIkZpbGVTdmMiLCJhbmltYWxzIiwiYW5pbWFsIiwic291bmQiLCJzdWJzdHJpbmciLCJnZXRSYW5kb21BbmltYWxzIiwiZ3Vlc3MiLCJnZXRTY29yZSIsImlzU2NvcmVWaXNpYmxlIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFBQSwyQkFBQUEsR0FBQSxDQUNBO0lBQ0FDLElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsSUFBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FELElBQUFBLEVBQUEsR0FBQTtJQUNBQyxPQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBO0VBR0FDLE9BQUFBLEdBQUEsQ0FDQSxNQUFBLEVBQ0EsTUFBQSxFQUNBLE1BQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLENBQUE7QUFHQUMsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxrQkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQVIsMkJBQUFBLENBQUFTLE1BQUFBLENBQUEsQ0FBQUMsTUFBQUEsRUFBQUMsTUFBQUEsS0FDQUQsTUFBQUEsQ0FBQUUsT0FBQUEsQ0FBQUQsTUFBQUEsQ0FBQVQsT0FBQUEsRUFBQVMsTUFBQUEsQ0FBQVYsSUFBQUEsQ0FBQUEsRUFDQVksSUFBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBO0FBR0EsTUFBQUMsa0JBQUFBLEdBQUEscUNBQUE7QUFFQVYsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSx5QkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxJQUFBRyxNQUFBQSxDQUFBLElBQUFELGtCQUFBQSxHQUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FWLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEscUJBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFHLFdBQUFBLEVBQUFBLENBQUFDLGdCQUFBQSxFQUFBQSxDQUFBQyx1QkFBQUEsRUFDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FkLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsU0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQVcsS0FBQUEsRUFBQUE7SUFDQSxPQUFBTixJQUFBQSxDQUFBRCxPQUFBQSxDQUFBLElBQUFHLE1BQUFBLENBQUEsS0FBQUQsa0JBQUFBLEdBQUFLLEtBQUFBLEdBQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsR0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWYsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxZQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBTyxNQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBQyxXQUFBQSxFQUFBQSxHQUFBUixJQUFBQSxDQUFBUyxLQUFBQSxDQUFBLENBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FsQixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFlBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFELE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQSxDQUFBQSxPQUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBUixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGVBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFELE9BQUFBLENBQUEsR0FBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBQSxPQUFBQSxDQUFBLEdBQUEsRUFBQSxNQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBUixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGNBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUFlLElBQUFBLEVBQUFYLE9BQUFBLEVBQUFBO0lBRUEsS0FEQSxJQUFBWSxhQUFBQSxHQUFBWCxJQUFBQSxFQUNBWSxDQUFBQSxHQUFBLENBQUEsRUFBQUEsQ0FBQUEsR0FBQUYsSUFBQUEsQ0FBQUcsTUFBQUEsRUFBQUQsQ0FBQUEsRUFBQUEsRUFDQUQsYUFBQUEsR0FBQUEs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QUFBLFFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFlBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGFBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsUUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLFlBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxXQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFlBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGFBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFdBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxVQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxXQUFBO0lBQ0FFLFVBQUFBLEVBQUEsY0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsTUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsT0FBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFdBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxpQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxvQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsZUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsZ0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxrQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsZ0JBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsbUJBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsWUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxpQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsZ0JBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxtQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxVQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxXQUFBO0lBQ0FFLFVBQUFBLEVBQUEsY0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLEVBR0FMLGlCQUFBQSxDQUFBTyxTQUFBQSxDQUFBO0lBQ0FDLE9BQUFBLEVBQUFBLENBQUEsQ0FBQTtJQUNBQyxXQUFBQSxFQUFBQSxDQUFBO0VBQUEsQ0FBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDeklBZixPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBZSxPQUFBQSxDQUFB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SCxHQUFBQSxDQUFBSSxTQUFBQSxHQUFBLFFBQUE7RUFDQSxJQUFBQyxLQUFBQSxHQUFBLENBQUEsQ0FBQTtJQUNBQyxTQUFBQSxHQUFBLENBQUEsQ0FBQTtJQUNBQyxRQUFBQSxHQUFBLENBQUEsQ0FBQTtJQUNBQyxVQUFBQSxHQUFBLENBQUEsQ0FBQTtJQUNBQyxHQUFBQSxHQUFBLENBQUEsQ0FBQTtJQUNBQyxTQUFBQSxHQUFBLEVBQUE7SUFDQUMsS0FBQUEsR0FBQTlELElBQUFBLENBQUFDLEtBQUFBLENBQUFELElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUE4RCxTQUFBQSxDQUFBQTtJQUNBRSxZQUFBQSxHQUFBLENBQ0E7TUFDQW5HLElBQUFBLEVBQUEsT0FBQTtNQUNBb0csWUFBQUEsRUFBQSxhQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBM00sQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFtTSxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUMsUUFBQUEsSUFBQSxHQUNBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQTdHLElBQUFBLEVBQUEsVUFBQTtNQUNBb0csWUFBQUEsRUFBQSxZQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBM00sQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFtTSxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUUsUUFBQUEsR0FBQSxDQUFBLEtBQ0FGLFNBQUFBLENBQUFHLFlBQUFBLElBQUEsQ0FBQSxDQUVBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQS9HLElBQUFBLEVBQUEsT0FBQTtNQUNBb0csWUFBQUEsRUFBQSxnQkFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7UUFDQTNNLENBQUFBLEVBQUEsQ0FBQTtRQUNBUyxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBbU0sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0FBLFNBQUFBLENBQUFJLEtBQUFBLElBQUEsQ0FDQTtNQUFBO0lBQUEsQ0FBQSxFQUVBO01BQ0FoSCxJQUFBQSxFQUFBLFFBQUE7TUFDQW9HLFlBQUFBLEVBQUEsUUFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7UUFDQTNNLENBQUFBLEVBQUEsQ0FBQTtRQUNBUyxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBbU0sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0FBLFNBQUFBLENBQUFLLE1BQUFBLEdBQUFBLENBQUEsQ0FDQTtNQUFBO0lBQUEsQ0FBQSxFQUVBO01BQ0FqSCxJQUFBQSxFQUFBLE1BQUE7TUFDQW9HLFlBQUFBLEVBQUEsTUFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7UUFDQTNNLENBQUFBLEVBQUEsQ0FBQTtRQUNBUyxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBbU0sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0EsS0FBQSxJQUFBL00sQ0FBQUEsSUFBQWdNLFNBQUFBLEVBQ0FBLFNBQUFBLENBQUFoTSxDQUFBQSxDQUFBQSxDQUFBcU4sT0FBQUEsRUFBQUE7UUFFQUMsY0FBQUEsQ0FBQSxDQUFBLENBQ0E7TUFBQTtJQUFBLENBQUEsQ0FBQTtFQVVBaEIsWUFBQUEsQ0FBQXJMLE9BQUFBLENBQUEsVUFBQXNNLE9BQUFBLEVBQUF2TixDQUFBQSxFQUFBd04sS0FBQUEsRUFBQUE7SUFDQUEsS0FBQUEsQ0FBQXhOLENBQUFBLENBQUFBLENBQUE0TSxHQUFBQSxDQUFBYSxHQUFBQSxHQUFBLFlBQUEsR0FBQUYsT0FBQUEsQ0FBQXBILElBQUFBLEdBQUEsTUFDQTtFQUFBLENBQUEsQ0FBQTtFQUVBLElBK1JBNEcsU0FBQUE7SUEvUkFXLGNBQUFBLEdBQUEsSUFBQWIsS0FBQUE7RUFZQSxTQUFBYyxZQUFBQSxDQUFBQSxFQUFBQTtJQUNBN0csTUFBQUEsQ0FBQThHLE9BQUFBLElBQ0F6QixHQUFBQSxDQUFBLEVBQUEsQ0FBQSxJQUVBLENBQUEsS0FBQVksU0FBQUEsQ0FBQUUsUUFBQUEsSUFDQUYsU0FBQUEsQ0FBQWMsS0FBQUEsRUFBQUEsRUFHQTFCLEdBQUFBLENBQUEsRUFBQSxDQUFBLEtBRUEsQ0FBQSxLQUFBWSxTQUFBQSxDQUFBZSxRQUFBQSxHQUNBZixTQUFBQSxDQUFBZSxRQUFBQSxHQUFBLEdBQUEsR0FFQWYsU0FBQUEsQ0FBQWUsUUFBQUEsSUFBQSxDQUFBLENBQUEsRUFHQTNCLEdBQUFBLENBQUEsRUFBQSxDQUFBLEtBRUEsR0FBQSxLQUFBWSxTQUFBQSxDQUFBZSxRQUFBQSxHQUNBZixTQUFBQSxDQUFBZSxRQUFBQSxHQUFBLENBQUEsR0FFQWYsU0FBQUEsQ0FBQWUsUUFBQUEsSUFBQSxDQUFBLENBQUEsRUFHQTNCLEdBQUFBLENBQUEsRUFBQSxDQUFBLEdBRUFZLFNBQUFBLENBQUFnQixLQUFBQSxJQUFBaEIsU0FBQUEsQ0FBQUMsUUFBQUEsS0FDQUQsU0FBQUEsQ0FBQWdCLEtBQUFBLElBQUEsQ0FBQSxDQUFBLEdBR0FoQixTQUFBQSxDQUFBZ0IsS0FBQUEsR0FBQSxDQUFBLElBQ0FoQixTQUFBQSxDQUFBZ0IsS0FBQUEsRUFBQUEsRUFHQTVCLEdBQUFBLENBQUEsRUFBQSxDQUFBLElBRUFZLFNBQUFBLENBQUFnQixLQUFBQSxHQUFBLENBQUEsS0FDQWhCLFNBQUFBLENBQUFnQixLQUFBQSxJQUFBLENBQUEsQ0FBQSxJQUlBNUIsR0FBQUEsQ0FBQSxFQUFBLENBQUEsS0E2T0FyRixNQUFBQSxDQUFBOEcsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0E5RyxNQUFBQSxDQUFBa0gsS0FBQUEsR0FBQSxDQUFBLEVBQ0EzQixLQUFBQSxHQUFBOUQsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQUQsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQThELFNBQUFBLENBQUFBLEVBQ0F0RixNQUFBQSxDQUFBbkMsTUFBQUEsRUFBQUEsRUFDQW9JLFNBQUFBLEdBQUEsSUFBQWtCLFNBQUFBLElBQ0FuSCxNQUFBQSxDQUFBa0gsS0FBQUEsR0FBQSxDQUFBLEVBQ0FWLGNBQUFBLENBQUEsQ0FBQSxDQUFBLEVBQ0FZLFNBQUFBLEVBQUFBLENBaFBBO0VBQUE7RUFFQSxTQUFBRCxTQUFBQSxDQUFBQSxFQUFBQTtJQUNBN08sSUFBQUEsQ0FBQStPLEtBQUFBLEdBQUEsRUFBQSxFQUNBL08sSUFBQUEsQ0FBQWdQLE1BQUFBLEdBQUEsRUFBQSxFQUNBaFAsSUFBQUEsQ0FBQWdPLE1BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBaE8sSUFBQUEsQ0FBQStOLEtBQUFBLEdBQUEsRUFBQSxFQUNBL04sSUFBQUEsQ0FBQWlQLE1BQUFBLEdBQUE7TUFDQUMsQ0FBQUEsRUFBQWxQLElBQUFBLENBQUErTyxLQUFBQSxHQUFBLENBQUEsR0FBQSxHQUFBO01BQ0FJLENBQUFBLEVBQUFuUCxJQUFBQSxDQUFBZ1AsTUFBQUEsR0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBaFAsSUFBQUEsQ0FBQWdQO0lBQUFBLENBQUFBLEVBRUFoUCxJQUFBQSxDQUFBNk4sUUFBQUEsR0FBQSxDQUFBLEVBQ0E3TixJQUFBQSxDQUFBOE4sWUFBQUEsR0FBQSxFQUFBLEVBQ0E5TixJQUFBQSxDQUFBb1AsUUFBQUEsR0FBQSxDQUNBL0MsTUFBQUEsQ0FBQTBDLEtBQUFBLEdBQUEsQ0FBQSxHQUFBL08sSUFBQUEsQ0FBQStPLEtBQUFBLEdBQUEsQ0FBQSxFQUNBMUMsTUFBQUEsQ0FBQTJDLE1BQUFBLEdBQUEsQ0FBQSxHQUFBaFAsSUFBQUEsQ0FBQWdQLE1BQUFBLEdBQUEsQ0FBQSxDQUFBLEVBRUFoUCxJQUFBQSxDQUFBd04sR0FBQUEsR0FBQSxJQUFBQyxLQUFBQSxJQUNBek4sSUFBQUEsQ0FBQXdOLEdBQUFBLENBQUFhLEdBQUFBLEdBQUEseUJBQUEsRUFDQXJPLElBQUFBLENBQUEyTyxLQUFBQSxHQUFBLENBQUEsRUFDQTNPLElBQUFBLENBQUE0TixRQUFBQSxHQUFBLEdBQUEsRUFDQTVOLElBQUFBLENBQUFxUCxLQUFBQSxHQUFBLENBQUEsRUFDQXJQLElBQUFBLENBQUEwTyxRQUFBQSxHQUFBLENBQUEsRUFFQTFPLElBQUFBLENBQUF5TyxLQUFBQSxHQUFBLFlBQUE7TUFDQXpPLElBQUFBLENBQUE2TixRQUFBQSxHQUFBN04sSUFBQUEsQ0FBQThOLFlBQUFBO01BQ0EsSUFBQXdCLEVBQUFBLEdBQUFuRyxJQUFBQSxDQUFBb0csS0FBQUEsQ0FBQSxHQUFBLEdBQUFwRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxDQUFBQTtNQUNBeUQsS0FBQUEsQ0FBQTJDLEVBQUFBLENBQUFBLEdBQUEsSUFBQUUsSUFBQUEsQ0FBQUYsRUFBQUEsRUFBQXRQLElBQUFBLENBQ0E7SUFBQSxDQUFBLEVBRUFBLElBQUFBLENBQUF5UCxJQUFBQSxHQUFBLFlBQUE7TUFVQSxLQUFBLElBQUE3TyxDQUFBQSxJQVRBWixJQUFBQSxDQUFBZ08sTUFBQUEsS0FDQTFCLEdBQUFBLENBQUFvRCxTQUFBQSxFQUFBQSxFQUNBcEQsR0FBQUEsQ0FBQXFELEdBQUFBLENBQUEzUCxJQUFBQSxDQUFBb1AsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXBQLElBQUFBLENBQUErTyxLQUFBQSxHQUFBLENBQUEsRUFBQS9PLElBQUFBLENBQUFvUCxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBcFAsSUFBQUEsQ0FBQWdQLE1BQUFBLEdBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBN0YsSUFBQUEsQ0FBQXlHLEVBQUFBLENBQUFBLEVBQ0F0RCxHQUFBQSxDQUFBRyxTQUFBQSxHQUFBLHVCQUFBLEVBQ0FILEdBQUFBLENBQUF1RCxXQUFBQSxHQUFBLHVCQUFBLEVBQ0F2RCxHQUFBQSxDQUFBd0QsU0FBQUEsR0FBQSxDQUFBLEVBQ0F4RCxHQUFBQSxDQUFBeUQsTUFBQUEsRUFBQUEsRUFDQXpELEdBQUFBLENBQUEwRCxJQUFBQSxFQUFBQSxDQUFBQSxFQUVBcEQsU0FBQUEsRUFBQTtRQUNBLElBQUFxRCxRQUFBQSxHQUFBckQsU0FBQUEsQ0FBQWhNLENBQUFBLENBQUFBO1FBQ0EsSUFBQXNQLEdBQUFBLENBQUFELFFBQUFBLEVBQUFqUSxJQUFBQSxDQUFBQSxFQUFBO1VBQ0EsSUFBQSxDQUFBQSxJQUFBQSxDQUFBZ08sTUFBQUEsRUFJQSxPQUFBbUMsUUFBQUEsRUFBQUE7VUFIQW5RLElBQUFBLENBQUFnTyxNQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQWlDLFFBQUFBLENBQUFoQyxPQUFBQSxFQUlBO1FBQUE7TUFDQTtNQUNBak8sSUFBQUEsQ0FBQXFQLEtBQUFBLEdBQUFyUCxJQUFBQSxDQUFBME8sUUFBQUEsRUFDQTFPLElBQUFBLENBQUE2TixRQUFBQSxHQUFBLENBQUEsSUFDQTdOLElBQUFBLENBQUE2TixRQUFBQSxFQUFBQSxFQUVBNEIsSUFBQUEsQ0FBQXpQLElBQUFBLENBQ0E7SUFBQSxDQUNBO0VBQUE7RUFFQSxTQUFBd1AsSUFBQUEsQ0FBQUYsRUFBQUEsRUFBQTNCLFNBQUFBLEVBQUFBO0lBQ0EzTixJQUFBQSxDQUFBc1AsRUFBQUEsR0FBQUEsRUFBQUEsRUFDQXRQLElBQUFBLENBQUFvUCxRQUFBQSxHQUFBLENBQ0F6QixTQUFBQSxDQUFBeUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXpCLFNBQUFBLENBQUFzQixNQUFBQSxDQUFBQyxDQUFBQSxHQUFBdkIsU0FBQUEsQ0FBQXNCLE1BQUFBLENBQUFDLENBQUFBLEdBQUEvRixJQUFBQSxDQUFBaUgsR0FBQUEsQ0FBQUEsQ0FBQXpDLFNBQUFBLENBQUFlLFFBQUFBLEdBQUEsRUFBQSxJQUFBdkYsSUFBQUEsQ0FBQXlHLEVBQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FqQyxTQUFBQSxDQUFBeUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXpCLFNBQUFBLENBQUFzQixNQUFBQSxDQUFBRSxDQUFBQSxHQUFBeEIsU0FBQUEsQ0FBQXNCLE1BQUFBLENBQUFFLENBQUFBLEdBQUFoRyxJQUFBQSxDQUFBa0gsR0FBQUEsQ0FBQUEsQ0FBQTFDLFNBQUFBLENBQUFlLFFBQUFBLEdBQUEsRUFBQSxJQUFBdkYsSUFBQUEsQ0FBQXlHLEVBQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsRUFFQTVQLElBQUFBLENBQUErTyxLQUFBQSxHQUFBLENBQUEsRUFDQS9PLElBQUFBLENBQUFnUCxNQUFBQSxHQUFBLEVBQUEsRUFDQWhQLElBQUFBLENBQUFxUCxLQUFBQSxHQUFBMUIsU0FBQUEsQ0FBQTBCLEtBQUFBLEVBQ0FyUCxJQUFBQSxDQUFBME8sUUFBQUEsR0FBQWYsU0FBQUEsQ0FBQWUsUUFBQUEsRUFDQTFPLElBQUFBLENBQUEyTyxLQUFBQSxHQUFBaEIsU0FBQUEsQ0FBQWdCLEtBQUFBLEdBQUEsR0FBQSxFQUNBM08sSUFBQUEsQ0FBQXNRLFFBQUFBLEdBQUEzQyxTQUFBQSxDQUFBSSxLQUFBQSxFQUNBL04sSUFBQUEsQ0FBQXdOLEdBQUFBLEdBQUEsSUFBQUMsS0FBQUEsSUFDQXpOLElBQUFBLENBQUF3TixHQUFBQSxDQUFBYSxHQUFBQSxHQUFBLG9CQUFBLEVBRUFyTyxJQUFBQSxDQUFBeVAsSUFBQUEsR0FBQSxZQUFBO01BQ0F6UCxJQUFBQSxDQUFBc1EsUUFBQUEsRUFBQUEsRUFDQWIsSUFBQUEsQ0FBQXpQLElBQUFBLENBQ0E7SUFBQSxDQUNBO0VBQUE7RUFFQSxTQUFBdVEsUUFBQUEsQ0FBQWpCLEVBQUFBLEVBQUFBO0lBQ0F0UCxJQUFBQSxDQUFBc1AsRUFBQUEsR0FBQUEsRUFBQUEsRUFDQXRQLElBQUFBLENBQUErTyxLQUFBQSxHQUFBLEVBQUEsR0FBQTVGLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUEsRUFBQSxFQUNBbEosSUFBQUEsQ0FBQWdQLE1BQUFBLEdBQUFoUCxJQUFBQSxDQUFBK08sS0FBQUEsRUFDQS9PLElBQUFBLENBQUFvUCxRQUFBQSxHQUFBb0IsZ0JBQUFBLENBQUF4USxJQUFBQSxDQUFBK08sS0FBQUEsRUFBQS9PLElBQUFBLENBQUFnUCxNQUFBQSxDQUFBQSxFQUNBaFAsSUFBQUEsQ0FBQXFQLEtBQUFBLEdBQUEsR0FBQSxHQUFBbEcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsRUFDQWxKLElBQUFBLENBQUEwTyxRQUFBQSxHQUFBLEdBQUEsR0FBQXZGLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEVBQ0FsSixJQUFBQSxDQUFBeVEsYUFBQUEsR0FBQSxDQUFBLEdBQUF0SCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBLENBQUEsRUFDQWxKLElBQUFBLENBQUEyTyxLQUFBQSxHQUFBLEdBQUEsR0FBQXhGLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUEsQ0FBQSxFQUNBbEosSUFBQUEsQ0FBQXdOLEdBQUFBLEdBQUEsSUFBQUMsS0FBQUEsSUFDQXpOLElBQUFBLENBQUF3TixHQUFBQSxDQUFBYSxHQUFBQSxHQUFBLG9CQUFBLElBQUFsRixJQUFBQSxDQUFBb0csS0FBQUEsQ0FBQSxDQUFBLEdBQUFwRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxDQUFBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLE1BQUEsRUFFQWxKLElBQUFBLENBQUFpTyxPQUFBQSxHQUFBLFlBQUE7TUFFQSxPQURBbkIsVUFBQUEsQ0FBQTlNLElBQUFBLENBQUFzUCxFQUFBQSxDQUFBQSxHQUFBLElBQUFvQixTQUFBQSxDQUFBMVEsSUFBQUEsQ0FBQUEsRUFBQUEsT0FDQTRNLFNBQUFBLENBQUE1TSxJQUFBQSxDQUFBc1AsRUFBQUEsQ0FDQTtJQUFBLENBQUEsRUFFQXRQLElBQUFBLENBQUF5UCxJQUFBQSxHQUFBLFlBQUE7TUFPQSxLQUFBLElBQUE3TyxDQUFBQSxJQU5BWixJQUFBQSxDQUFBME8sUUFBQUEsSUFBQTFPLElBQUFBLENBQUF5USxhQUFBQSxFQUNBelEsSUFBQUEsQ0FBQTBPLFFBQUFBLEdBQUEsR0FBQSxHQUNBMU8sSUFBQUEsQ0FBQTBPLFFBQUFBLEdBQUExTyxJQUFBQSxDQUFBME8sUUFBQUEsR0FBQSxHQUFBLEdBQ0ExTyxJQUFBQSxDQUFBME8sUUFBQUEsR0FBQSxDQUFBLEtBQ0ExTyxJQUFBQSxDQUFBME8sUUFBQUEsR0FBQSxHQUFBLEdBQUExTyxJQUFBQSxDQUFBME8sUUFBQUEsQ0FBQUEsRUFFQS9CLEtBQUFBLEVBQUE7UUFDQSxJQUFBZ0UsSUFBQUEsR0FBQWhFLEtBQUFBLENBQUEvTCxDQUFBQSxDQUFBQTtRQUNBLElBQUFzUCxHQUFBQSxDQUFBUyxJQUFBQSxFQUFBM1EsSUFBQUEsQ0FBQUEsRUFBQTtVQUNBQSxJQUFBQSxDQUFBaU8sT0FBQUEsRUFBQUE7VUFDQSxJQUFBMkMsTUFBQUEsR0FBQXpILElBQUFBLENBQUFDLEtBQUFBLENBQUFBLENBQUF1SCxJQUFBQSxDQUFBaEMsS0FBQUEsR0FBQSxHQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQTNPLElBQUFBLENBQUErTyxLQUFBQSxDQUFBQTtVQUNBNUYsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQUEsQ0FBQXdILE1BQUFBLEdBQUFsSixNQUFBQSxDQUFBa0gsS0FBQUEsSUFBQSxHQUFBLENBQUEsR0FBQXpGLElBQUFBLENBQUFDLEtBQUFBLENBQUExQixNQUFBQSxDQUFBa0gsS0FBQUEsR0FBQSxHQUFBLENBQUEsSUFDQWlDLFlBQUFBLEVBQUFBLEVBRUFuSixNQUFBQSxDQUFBa0gsS0FBQUEsSUFBQWdDLE1BQUFBLEVBQ0FsSixNQUFBQSxDQUFBbkMsTUFBQUEsRUFBQUEsRUFBQUEsT0FDQW9ILEtBQUFBLENBQUEvTCxDQUFBQSxDQUNBO1FBQUE7TUFDQTtNQUNBNk8sSUFBQUEsQ0FBQXpQLElBQUFBLENBQ0E7SUFBQSxDQUNBO0VBQUE7RUFFQSxTQUFBMFEsU0FBQUEsQ0FBQUksTUFBQUEsRUFBQUE7SUFDQTlRLElBQUFBLENBQUFvUCxRQUFBQSxHQUFBLENBQUEwQixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQTBCLE1BQUFBLENBQUExQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQ0FwUCxJQUFBQSxDQUFBK08sS0FBQUEsR0FBQStCLE1BQUFBLENBQUEvQixLQUFBQSxFQUNBL08sSUFBQUEsQ0FBQWdQLE1BQUFBLEdBQUE4QixNQUFBQSxDQUFBOUIsTUFBQUEsRUFDQWhQLElBQUFBLENBQUEyTyxLQUFBQSxHQUFBLENBQUEsRUFDQTNPLElBQUFBLENBQUFxUCxLQUFBQSxHQUFBLEdBQUEsR0FBQWxHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEVBQ0FsSixJQUFBQSxDQUFBb04sS0FBQUEsR0FBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUE7TUFDQUMsT0FBQUEsRUFBQSxDQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO01BQ0EzTSxDQUFBQSxFQUFBLENBQUE7TUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFFQXJCLElBQUFBLENBQUFzUSxRQUFBQSxHQUFBLEVBQUEsRUFDQXRRLElBQUFBLENBQUF3TixHQUFBQSxHQUFBYyxjQUFBQSxFQUVBdE8sSUFBQUEsQ0FBQXlQLElBQUFBLEdBQUEsWUFBQTtNQUNBelAsSUFBQUEsQ0FBQXNRLFFBQUFBLEVBQUFBLEVBQ0FiLElBQUFBLENBQUF6UCxJQUFBQSxDQUFBQSxFQUNBQSxJQUFBQSxDQUFBb04sS0FBQUEsQ0FBQS9MLFNBQUFBLEdBQ0FyQixJQUFBQSxDQUFBb04sS0FBQUEsQ0FBQXhNLENBQUFBLEVBQUFBLEdBRUFaLElBQUFBLENBQUFvTixLQUFBQSxDQUFBeE0sQ0FBQUEsRUFFQTtJQUFBLENBQ0E7RUFBQTtFQUVBLFNBQUFtUSxPQUFBQSxDQUFBekIsRUFBQUEsRUFBQUE7SUFDQXRQLElBQUFBLENBQUFzUCxFQUFBQSxHQUFBQSxFQUFBQSxFQUNBdFAsSUFBQUEsQ0FBQW1PLE9BQUFBLEdBQUFqQixZQUFBQSxDQUFBL0QsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQUQsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQWdFLFlBQUFBLENBQUFyTSxNQUFBQSxDQUFBQSxDQUFBQSxFQUNBYixJQUFBQSxDQUFBb04sS0FBQUEsR0FBQXBOLElBQUFBLENBQUFtTyxPQUFBQSxDQUFBZixLQUFBQSxFQUNBcE4sSUFBQUEsQ0FBQXNRLFFBQUFBLEdBQUEsR0FBQSxFQUNBdFEsSUFBQUEsQ0FBQW9OLEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUF2TixJQUFBQSxDQUFBb04sS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsSUFDQXZOLElBQUFBLENBQUFnUCxNQUFBQSxHQUFBLEVBQUEsRUFDQWhQLElBQUFBLENBQUErTyxLQUFBQSxHQUFBNUYsSUFBQUEsQ0FBQW9HLEtBQUFBLENBQUF2UCxJQUFBQSxDQUFBZ1AsTUFBQUEsR0FBQWhQLElBQUFBLENBQUFvTixLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdk4sSUFBQUEsQ0FBQW9OLEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FFQXZOLElBQUFBLENBQUErTyxLQUFBQSxHQUFBLEVBQUEsRUFDQS9PLElBQUFBLENBQUFnUCxNQUFBQSxHQUFBN0YsSUFBQUEsQ0FBQW9HLEtBQUFBLENBQUF2UCxJQUFBQSxDQUFBK08sS0FBQUEsR0FBQS9PLElBQUFBLENBQUFvTixLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdk4sSUFBQUEsQ0FBQW9OLEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUVBdk4sSUFBQUEsQ0FBQW9QLFFBQUFBLEdBQUFvQixnQkFBQUEsQ0FBQXhRLElBQUFBLENBQUErTyxLQUFBQSxFQUFBL08sSUFBQUEsQ0FBQWdQLE1BQUFBLENBQUFBLEVBQ0FoUCxJQUFBQSxDQUFBd04sR0FBQUEsR0FBQXhOLElBQUFBLENBQUFtTyxPQUFBQSxDQUFBWCxHQUFBQSxFQUNBeE4sSUFBQUEsQ0FBQXFQLEtBQUFBLEdBQUEsR0FBQSxHQUFBbEcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsRUFDQWxKLElBQUFBLENBQUEyTyxLQUFBQSxHQUFBLEdBQUEsR0FBQXhGLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUEsRUFBQTtJQUNBLElBQUE4SCxLQUFBQSxHQUFBLENBQUE7SUFDQWhSLElBQUFBLENBQUF5UCxJQUFBQSxHQUFBLFlBQUE7TUFDQSxPQUFBelAsSUFBQUEsQ0FBQXNRLFFBQUFBLElBQUEsQ0FBQSxHQUFBLE9BQ0F6RCxRQUFBQSxDQUFBN00sSUFBQUEsQ0FBQXNQLEVBQUFBLENBQUFBLEdBRUFZLEdBQUFBLENBQUF2QyxTQUFBQSxFQUFBM04sSUFBQUEsQ0FBQUEsSUFDQTBILE1BQUFBLENBQUEwRSxRQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQTFFLE1BQUFBLENBQUF5RixZQUFBQSxHQUFBbk4sSUFBQUEsQ0FBQW1PLE9BQUFBLENBQUFoQixZQUFBQSxFQUNBekYsTUFBQUEsQ0FBQW5DLE1BQUFBLEVBQUFBLEVBQ0FpRSxVQUFBQSxDQUFBLFlBQUE7UUFDQTlCLE1BQUFBLENBQUEwRSxRQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQTFFLE1BQUFBLENBQUFuQyxNQUFBQSxFQUNBO01BQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQSxFQUNBdkYsSUFBQUEsQ0FBQW1PLE9BQUFBLENBQUFULFFBQUFBLENBQUFDLFNBQUFBLENBQUFBLEVBQUFBLE9BQ0FkLFFBQUFBLENBQUE3TSxJQUFBQSxDQUFBc1AsRUFBQUEsQ0FBQUEsS0FFQXRQLElBQUFBLENBQUFzUSxRQUFBQSxFQUFBQSxFQUNBYixJQUFBQSxDQUFBelAsSUFBQUEsQ0FBQUEsRUFBQUEsTUFDQWdSLEtBQUFBLElBQUEsQ0FBQSxJQUNBaFIsSUFBQUEsQ0FBQW9OLEtBQUFBLENBQUEvTCxTQUFBQSxHQUNBckIsSUFBQUEsQ0FBQW9OLEtBQUFBLENBQUF4TSxDQUFBQSxFQUFBQSxHQUVBWixJQUFBQSxDQUFBb04sS0FBQUEsQ0FBQXhNLENBQUFBLEVBQUFBLEVBRUFvUSxLQUFBQSxHQUFBLENBQUEsSUFFQUEsS0FBQUEsRUFBQUEsQ0FBQUEsQ0FFQTtJQUFBLENBQ0E7RUFBQTtFQUVBLFNBQUF2QixJQUFBQSxDQUFBcUIsTUFBQUEsRUFBQUE7SUFpQkEsSUFoQkFBLE1BQUFBLENBQUExQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBMEIsTUFBQUEsQ0FBQW5DLEtBQUFBLEdBQUEsR0FBQSxHQUFBeEYsSUFBQUEsQ0FBQWlILEdBQUFBLENBQUFBLENBQUFVLE1BQUFBLENBQUF6QixLQUFBQSxHQUFBLEVBQUEsSUFBQWxHLElBQUFBLENBQUF5RyxFQUFBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBa0IsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEwQixNQUFBQSxDQUFBbkMsS0FBQUEsR0FBQSxHQUFBLEdBQUF4RixJQUFBQSxDQUFBa0gsR0FBQUEsQ0FBQUEsQ0FBQVMsTUFBQUEsQ0FBQXpCLEtBQUFBLEdBQUEsRUFBQSxJQUFBbEcsSUFBQUEsQ0FBQXlHLEVBQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FrQixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQS9DLE1BQUFBLENBQUEwQyxLQUFBQSxHQUNBK0IsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQTBCLE1BQUFBLENBQUEvQixLQUFBQSxHQUNBK0IsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQTBCLE1BQUFBLENBQUEvQixLQUFBQSxLQUNBK0IsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEvQyxNQUFBQSxDQUFBMEMsS0FBQUEsQ0FBQUEsRUFFQStCLE1BQUFBLENBQUExQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBL0MsTUFBQUEsQ0FBQTJDLE1BQUFBLEdBQ0E4QixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBMEIsTUFBQUEsQ0FBQTlCLE1BQUFBLEdBQ0E4QixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBMEIsTUFBQUEsQ0FBQTlCLE1BQUFBLEtBQ0E4QixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQS9DLE1BQUFBLENBQUEyQyxNQUFBQSxDQUFBQSxFQUVBMUMsR0FBQUEsQ0FBQTJFLElBQUFBLEVBQUFBLEVBQ0EzRSxHQUFBQSxDQUFBNEUsU0FBQUEsQ0FBQUosTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEwQixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNBOUMsR0FBQUEsQ0FBQTRFLFNBQUFBLENBQUFKLE1BQUFBLENBQUEvQixLQUFBQSxHQUFBLENBQUEsRUFBQStCLE1BQUFBLENBQUE5QixNQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBMUMsR0FBQUEsQ0FBQTZFLE1BQUFBLENBQUFMLE1BQUFBLENBQUFwQyxRQUFBQSxHQUFBdkYsSUFBQUEsQ0FBQXlHLEVBQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FrQixNQUFBQSxDQUFBMUQsS0FBQUEsRUFBQTtNQUNBLElBQUFnRSxNQUFBQSxHQUFBTixNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQXhNLENBQUFBLEdBQUFrUSxNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQUUsT0FBQUE7UUFDQStELEdBQUFBLEdBQUFsSSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBMEgsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUF4TSxDQUFBQSxHQUFBa1EsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUFFLE9BQUFBLENBQUFBO01BQ0FoQixHQUFBQSxDQUFBZ0YsU0FBQUEsQ0FBQVIsTUFBQUEsQ0FBQXRELEdBQUFBLEVBQUFzRCxNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQTZELE1BQUFBLEVBQUFOLE1BQUFBLENBQUExRCxLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBOEQsR0FBQUEsRUFBQVAsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUF1RCxNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBdUQsTUFBQUEsQ0FBQS9CLEtBQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUErQixNQUFBQSxDQUFBOUIsTUFBQUEsR0FBQSxDQUFBLEVBQUE4QixNQUFBQSxDQUFBL0IsS0FBQUEsRUFBQStCLE1BQUFBLENBQUE5QixNQUFBQSxDQUFBQSxFQUVBOEIsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUF4TSxDQUFBQSxJQUFBLENBQUEsSUFDQWtRLE1BQUFBLENBQUExRCxLQUFBQSxDQUFBeE0sQ0FBQUEsR0FBQSxDQUFBLEVBQ0FrUSxNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQS9MLFNBQUFBLEdBQUFBLENBQUEsQ0FBQSxJQUNBeVAsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUF4TSxDQUFBQSxJQUFBa1EsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUFFLE9BQUFBLEdBQUF3RCxNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQUMsSUFBQUEsS0FDQXlELE1BQUFBLENBQUExRCxLQUFBQSxDQUFBeE0sQ0FBQUEsR0FBQWtRLE1BQUFBLENBQUExRCxLQUFBQSxDQUFBRSxPQUFBQSxHQUFBd0QsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUFDLElBQUFBLEdBQUEsQ0FBQSxFQUNBeUQsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUEvTCxTQUFBQSxHQUFBQSxDQUFBLENBQUEsQ0FFQTtJQUFBLENBQUEsTUFDQWlMLEdBQUFBLENBQUFnRixTQUFBQSxDQUFBUixNQUFBQSxDQUFBdEQsR0FBQUEsRUFBQUEsQ0FBQXNELE1BQUFBLENBQUEvQixLQUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBK0IsTUFBQUEsQ0FBQTlCLE1BQUFBLEdBQUEsQ0FBQSxFQUFBOEIsTUFBQUEsQ0FBQS9CLEtBQUFBLEVBQUErQixNQUFBQSxDQUFBOUIsTUFBQUEsQ0FBQUE7SUFFQTFDLEdBQUFBLENBQUFpRixPQUFBQSxFQUNBO0VBQUE7RUFlQSxTQUFBZixnQkFBQUEsQ0FBQXpCLEtBQUFBLEVBQUFDLE1BQUFBLEVBQUFBO0lBQ0EsSUFFQUUsQ0FBQUE7TUFGQXNDLEtBQUFBLEdBQUEsQ0FBQSxHQUFBckksSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUE7TUFDQXVJLEtBQUFBLEdBQUEsQ0FBQSxHQUFBdEksSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUE7TUFDQWlHLENBQUFBLEdBQUEsQ0FBQTtJQWdCQSxPQWZBcUMsS0FBQUEsSUFBQSxDQUFBLElBQ0F0QyxDQUFBQSxHQUFBL0YsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQW1ELE1BQUFBLENBQUEwQyxLQUFBQSxFQUVBSSxDQUFBQSxHQURBQSxDQUFBQSxJQUFBLENBQUEsR0FDQSxDQUFBLEdBQUFILE1BQUFBLEdBRUEzQyxNQUFBQSxDQUFBMkMsTUFBQUEsS0FHQUcsQ0FBQUEsR0FBQWhHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUFtRCxNQUFBQSxDQUFBMkMsTUFBQUEsRUFFQUUsQ0FBQUEsR0FEQXVDLEtBQUFBLElBQUEsQ0FBQSxHQUNBLENBQUEsR0FBQTFDLEtBQUFBLEdBRUExQyxNQUFBQSxDQUFBMEMsS0FBQUEsQ0FBQUEsRUFHQSxDQUFBRyxDQUFBQSxFQUFBQyxDQUFBQSxDQUNBO0VBQUE7RUFFQSxTQUFBZSxHQUFBQSxDQUFBd0IsT0FBQUEsRUFBQUMsT0FBQUEsRUFBQUE7SUFDQSxPQUFBRCxPQUFBQSxDQUFBdEMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXVDLE9BQUFBLENBQUF2QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdUMsT0FBQUEsQ0FBQTVDLEtBQUFBLElBQ0E0QyxPQUFBQSxDQUFBdkMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXNDLE9BQUFBLENBQUF0QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBc0MsT0FBQUEsQ0FBQTNDLEtBQUFBLElBQ0EyQyxPQUFBQSxDQUFBdEMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXVDLE9BQUFBLENBQUF2QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdUMsT0FBQUEsQ0FBQTNDLE1BQUFBLElBQ0EyQyxPQUFBQSxDQUFBdkMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXNDLE9BQUFBLENBQUF0QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBc0MsT0FBQUEsQ0FBQTFDLE1BQ0E7RUFBQTtFQUVBLFNBQUFGLFNBQUFBLENBQUFBLEVBQUFBO0lBQ0EsSUFBQXZQLE1BQUFBLENBQUFxUyxJQUFBQSxDQUFBaEYsU0FBQUEsQ0FBQUEsQ0FBQS9MLE1BQUFBLEdBQUEsR0FBQSxFQUFBO01BQ0EsSUFBQXlPLEVBQUFBLEdBQUFuRyxJQUFBQSxDQUFBb0csS0FBQUEsQ0FBQSxHQUFBLEdBQUFwRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxDQUFBQTtNQUNBMEQsU0FBQUEsQ0FBQTBDLEVBQUFBLENBQUFBLEdBQUEsSUFBQWlCLFFBQUFBLENBQUFqQixFQUFBQSxDQUNBO0lBQUE7SUFDQTVILE1BQUFBLENBQUE4RyxPQUFBQSxJQUNBaEYsVUFBQUEsQ0FBQSxZQUFBO01BQ0FzRixTQUFBQSxFQUNBO0lBQUEsQ0FBQSxFQUtBcEgsTUFBQUEsQ0FBQWtILEtBQUFBLEdBQUEsR0FBQSxHQUNBLEdBQUEsR0FDQWxILE1BQUFBLENBQUFrSCxLQUFBQSxHQUFBLEdBQUEsR0FDQSxHQUFBLEdBQ0FsSCxNQUFBQSxDQUFBa0gsS0FBQUEsR0FBQSxHQUFBLEdBQ0EsR0FBQSxHQUNBbEgsTUFBQUEsQ0FBQWtILEtBQUFBLEdBQUEsR0FBQSxHQUNBLEdBQUEsR0FDQWxILE1BQUFBLENBQUFrSCxLQUFBQSxHQUFBLEdBQUEsR0FDQSxHQUFBLEdBQ0FsSCxNQUFBQSxDQUFBa0gsS0FBQUEsR0FBQSxHQUFBLEdBQ0EsR0FBQSxHQUNBbEgsTUFBQUEsQ0FBQWtILEtBQUFBLEdBQUEsR0FBQSxHQUNBLEdBQUEsR0FDQWxILE1BQUFBLENBQUFrSCxLQUFBQSxHQUFBLEdBQUEsR0FDQSxHQUFBLEdBRUEsR0FBQSxDQXBCQTtFQUFBO0VBd0JBLFNBQUFWLGNBQUFBLENBQUEyRCxNQUFBQSxFQUFBQTtJQUNBLElBQUFqUixDQUFBQSxHQUFBLENBQUE7SUFDQSxHQUFBO01BQ0EsSUFBQTBPLEVBQUFBLEdBQUFuRyxJQUFBQSxDQUFBb0csS0FBQUEsQ0FBQSxHQUFBLEdBQUFwRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxDQUFBQTtNQUNBMEQsU0FBQUEsQ0FBQTBDLEVBQUFBLENBQUFBLEdBQUEsSUFBQWlCLFFBQUFBLENBQUFqQixFQUFBQSxDQUNBO0lBQUEsQ0FBQSxRQUFBMU8sQ0FBQUEsRUFBQUEsSUFBQWlSLE1BQUFBO0VBQ0E7RUFFQSxTQUFBaEIsWUFBQUEsQ0FBQUEsRUFBQUE7SUFDQSxJQUFBdFIsTUFBQUEsQ0FBQXFTLElBQUFBLENBQUEvRSxRQUFBQSxDQUFBQSxDQUFBaE0sTUFBQUEsR0FBQSxDQUFBLEVBQUE7TUFDQSxJQUFBeU8sRUFBQUEsR0FBQW5HLElBQUFBLENBQUFvRyxLQUFBQSxDQUFBLEdBQUEsR0FBQXBHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLENBQUFBO01BQ0EyRCxRQUFBQSxDQUFBeUMsRUFBQUEsQ0FBQUEsR0FBQSxJQUFBeUIsT0FBQUEsQ0FBQXpCLEVBQUFBLENBQ0E7SUFBQTtFQUNBO0VBRUEsU0FBQWEsUUFBQUEsQ0FBQUEsRUFBQUE7SUFFQSxLQUFBLElBQUF2UCxDQUFBQSxJQURBOEcsTUFBQUEsQ0FBQThHLE9BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBNUIsU0FBQUEsRUFDQUEsU0FBQUEsQ0FBQWhNLENBQUFBLENBQUFBLENBQUFxTixPQUFBQSxFQUFBQTtJQUVBdEIsS0FBQUEsR0FBQSxDQUFBLENBQUEsRUFDQWpGLE1BQUFBLENBQUFNLFFBQUFBLEdBQ0FOLE1BQUFBLENBQUFTLFdBQUFBLENBQUEySixTQUFBQSxDQUFBbEYsU0FBQUEsR0FBQWxGLE1BQUFBLENBQUFrSCxLQUFBQSxLQUNBbEgsTUFBQUEsQ0FBQVMsV0FBQUEsQ0FBQTJKLFNBQUFBLENBQUFsRixTQUFBQSxHQUFBbEYsTUFBQUEsQ0FBQWtILEtBQUFBLEVBQ0F6QyxPQUFBQSxDQUFBNEYsWUFBQUEsQ0FBQSxXQUFBLEVBQUFySyxNQUFBQSxDQUFBUyxXQUFBQSxDQUFBRCxHQUFBQSxFQUFBUixNQUFBQSxDQUFBa0gsS0FBQUEsQ0FBQUEsQ0FBQUEsR0FHQWxILE1BQUFBLENBQUFvSyxTQUFBQSxHQUFBcEssTUFBQUEsQ0FBQWtILEtBQUFBLEtBQ0FsSCxNQUFBQSxDQUFBb0ssU0FBQUEsR0FBQXBLLE1BQUFBLENBQUFrSCxLQUFBQSxDQUdBO0VBQUE7RUFrQkEsU0FBQW9ELFlBQUFBLENBQUFBLEVBQUFBO0lBQ0F0TyxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBTixNQUFBQSxDQUFBNE8sVUFBQUEsQ0FBQUEsRUFDQTVGLE1BQUFBLENBQUEwQyxLQUFBQSxHQUFBMUwsTUFBQUEsQ0FBQTRPLFVBQUFBLEVBQ0E1RixNQUFBQSxDQUFBMkMsTUFBQUEsR0FBQTNMLE1BQUFBLENBQUE2TyxXQUFBQSxJQUFBN0YsTUFBQUEsQ0FBQTBDLEtBQUFBLElBQUEsR0FBQSxHQUFBLEVBQUEsR0FBQSxHQUFBLENBQ0E7RUFBQTtFQS9aQVQsY0FBQUEsQ0FBQUQsR0FBQUEsR0FBQSx5QkFBQSxFQUVBaEwsTUFBQUEsQ0FBQThPLGdCQUFBQSxDQUFBLFNBQUEsRUFBQSxVQUFBdE8sQ0FBQUEsRUFBQUE7SUFDQWtKLEdBQUFBLENBQUFsSixDQUFBQSxDQUFBdU8sT0FBQUEsSUFBQXZPLENBQUFBLENBQUF3TyxLQUFBQSxDQUFBQSxHQUFBQSxDQUFBLENBQ0E7RUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsRUFDQWhQLE1BQUFBLENBQUE4TyxnQkFBQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQXRPLENBQUFBLEVBQUFBO0lBQ0FrSixHQUFBQSxDQUFBbEosQ0FBQUEsQ0FBQXVPLE9BQUFBLElBQUF2TyxDQUFBQSxDQUFBd08sS0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLEVBRUEzSyxNQUFBQSxDQUFBb0ssU0FBQUEsR0FBQSxDQUFBLEVBeVlBek8sTUFBQUEsQ0FBQThPLGdCQUFBQSxDQUFBLFFBQUEsRUFBQUgsWUFBQUEsRUFBQUEsQ0FBQSxDQUFBLENBQUEsRUFJQUEsWUFBQUEsRUFBQUEsRUFZQU0scUJBQUFBLENBS0EsU0FBQUMsSUFBQUEsQ0FBQUEsRUFBQUE7SUFFQSxLQUFBLElBQUEzUixDQUFBQSxJQURBMEwsR0FBQUEsQ0FBQWtHLFNBQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQW5HLE1BQUFBLENBQUEwQyxLQUFBQSxFQUFBMUMsTUFBQUEsQ0FBQTJDLE1BQUFBLENBQUFBLEVBQ0FyQyxLQUFBQSxFQUNBQSxLQUFBQSxDQUFBL0wsQ0FBQUEsQ0FBQUEsQ0FBQTBQLFFBQUFBLElBQUEsQ0FBQSxHQUFBLE9BQ0EzRCxLQUFBQSxDQUFBL0wsQ0FBQUEsQ0FBQUEsR0FFQStMLEtBQUFBLENBQUEvTCxDQUFBQSxDQUFBQSxDQUFBNk8sSUFBQUEsRUFBQUE7SUFHQSxLQUFBN08sQ0FBQUEsSUFBQWdNLFNBQUFBLEVBQ0FBLFNBQUFBLENBQUFoTSxDQUFBQSxDQUFBQSxDQUFBNk8sSUFBQUEsRUFBQUE7SUFFQSxLQUFBN08sQ0FBQUEsSUFBQWlNLFFBQUFBLEVBQ0FBLFFBQUFBLENBQUFqTSxDQUFBQSxDQUFBQSxDQUFBNk8sSUFBQUEsRUFBQUE7SUFFQSxLQUFBN08sQ0FBQUEsSUFBQWtNLFVBQUFBLEVBQ0FBLFVBQUFBLENBQUFsTSxDQUFBQSxDQUFBQSxDQUFBMFAsUUFBQUEsSUFBQSxDQUFBLEdBQUEsT0FDQXhELFVBQUFBLENBQUFsTSxDQUFBQSxDQUFBQSxHQUVBa00sVUFBQUEsQ0FBQWxNLENBQUFBLENBQUFBLENBQUE2TyxJQUFBQSxFQUFBQTtJQUlBLElBREFsQixZQUFBQSxFQUFBQSxFQUNBN0csTUFBQUEsQ0FBQThHLE9BQUFBLEVBQ0FiLFNBQUFBLENBQUE4QixJQUFBQSxFQUFBQSxDQUFBQSxLQUNBO01BQ0EsSUFBQWdELFFBQUFBLEdBQUFuRyxHQUFBQSxDQUFBb0csb0JBQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQXJHLE1BQUFBLENBQUEwQyxLQUFBQSxFQUFBLENBQUEsQ0FBQTtNQUNBMEQsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxHQUFBeEosSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBd0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUF6SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUF3SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXpKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXdKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FILFFBQUFBLENBQUFFLFlBQUFBLENBQUEsTUFBQSxFQUFBLE1BQUEsR0FBQXhKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXdKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBekosSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBd0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUF6SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUF3SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUFBLEtBQUEsRUFBQSxNQUFBLEdBQUF4SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUF3SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXpKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXdKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBekosSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBd0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFDQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FBQSxNQUFBLEVBQUEsTUFBQSxHQUFBeEosSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBd0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUF6SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUF3SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXpKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXdKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FILFFBQUFBLENBQUFFLFlBQUFBLENBQUEsS0FBQSxFQUFBLE1BQUEsR0FBQXhKLElBQUFBLENB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QUFTLFdBQUFBLElBQ0FSLFNBQUFBLENBQUErUSxJQUFBQSxDQUFBLEdBQUEsQ0FBQTtFQUdBLE1BQUErRSxTQUFBQSxHQUFBLENBQ0E7TUFBQTFXLElBQUFBLEVBQUEsU0FBQTtNQUFBMlcsSUFBQUEsRUFBQSxTQUFBO01BQUFDLE1BQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVXLElBQUFBLEVBQUEsc0JBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsYUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxxQkFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxVQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsU0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxRQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFlBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsV0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxnQkFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxTQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFdBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsT0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxlQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFlBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsd0JBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsVUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxZQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsY0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxVQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsU0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxPQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLGtCQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsU0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxpQ0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxrQ0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxRQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsUUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxlQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFVBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsU0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxRQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFFBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEseUJBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsdUNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsMEJBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsT0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxhQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLGVBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsY0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxPQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFVBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsT0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxVQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFlBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsTUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxZQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsa0JBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsUUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxnQkFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxTQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFVBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsU0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxVQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLG9CQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsU0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxTQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLE9BQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsZ0JBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsU0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxPQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFVBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsU0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxNQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLDZCQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLGlDQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLGVBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsUUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxPQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLHNEQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsU0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxlQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFVBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsT0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxXQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFdBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsUUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxRQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFlBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsbUJBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsUUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSw4Q0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxXQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLE1BQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsZUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxRQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFdBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsbUNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsVUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxTQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLE9BQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsU0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxXQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsUUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxhQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLE9BQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsZ0NBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsTUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSwyQkFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxTQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLE9BQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsUUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxTQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFFBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsT0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxPQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFlBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsVUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxVQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsdUJBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsd0NBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsb0JBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsUUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxnQkFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxZQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLGtDQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsYUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxlQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFdBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsU0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxTQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFdBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsWUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxRQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLE9BQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsU0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxRQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLHNCQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFlBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsNEJBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsWUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxrQkFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSw0Q0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxNQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsVUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxPQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLDBCQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFlBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsWUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxZQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLE9BQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsV0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxVQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFFBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsUUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxVQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFlBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsU0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxlQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLE9BQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsZ0JBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsU0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxXQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLGFBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsUUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxPQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLE9BQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsTUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxhQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLE1BQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsUUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxNQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLGtCQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLGtCQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLGFBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsVUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxRQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLDJCQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFVBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsYUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxxQkFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxVQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLE9BQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsVUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxPQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsU0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxRQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLG9CQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFFBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsY0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxpQkFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxZQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLE9BQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsUUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxXQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLDhDQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFVBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsd0JBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsVUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxjQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFlBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsU0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxTQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFVBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsYUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSx1QkFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxhQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLDJCQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLHNCQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFdBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsMEJBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsTUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSw2QkFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxNQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFVBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsWUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxTQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLGFBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsY0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxTQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLE9BQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsUUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxxQkFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxRQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLDJCQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLDhCQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsUUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxzQ0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSwwQkFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxTQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFlBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsVUFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxrQ0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxtQ0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSx5QkFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxzQkFBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxVQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsbUJBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsT0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxPQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFNBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTNXLElBQUFBLEVBQUEsY0FBQTtNQUFBMlcsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBM1csSUFBQUEsRUFBQSxRQUFBO01BQUEyVyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEzVyxJQUFBQSxFQUFBLFVBQUE7TUFBQTJXLElBQUFBLEVBQUE7SUFBQSxDQUFBLENBQUE7SUFHQUUsZUFBQUEsR0FBQSxTQUFBQSxDQUFBLEVBQUE7TUFDQWxXLE1BQUFBLENBQUFTLFdBQUFBLEtBQ0FULE1BQUFBLENBQUFtVyxTQUFBQSxHQUFBblcsTUFBQUEsQ0FBQVMsV0FBQUEsQ0FBQTJWLEtBQUFBLEdBQ0FMLFNBQUFBLENBQUE5VCxNQUFBQSxDQUFBLFVBQUFvVSxPQUFBQSxFQUFBQTtRQUNBLE9BQUFyVyxNQUFBQSxDQUFBUyxXQUFBQSxDQUFBMlYsS0FBQUEsQ0FBQXZXLFFBQUFBLENBQUF3VyxPQUFBQSxDQUFBTCxJQUFBQSxDQUNBO01BQUEsQ0FBQSxDQUFBLEdBQ0EsRUFBQSxDQUVBO0lBQUEsQ0FBQTtFQUVB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QixNQUFBQSxDQUFBbWpCLEtBQUFBLEdBQUEsQ0FBQUosTUFBQUEsRUFBQUksS0FBQUEsS0FBQUE7SUFDQUosTUFBQUEsQ0FBQUksS0FBQUEsR0FBQUEsS0FBQTtFQUFBLENBQUE7RUFHQSxNQUFBRCxnQkFBQUEsR0FBQTdqQixJQUFBQSxJQUFBSSxDQUFBQSxDQUFBcWlCLE9BQUFBLENBQUE5aEIsTUFBQUEsQ0FBQThpQixPQUFBQSxDQUFBN2dCLE1BQUFBLENBQUE4Z0IsTUFBQUEsSUFBQTFqQixJQUFBQSxLQUFBMGpCLE1BQUFBLENBQUExakIsSUFBQUEsQ0FBQUEsQ0FBQWdHLEdBQUFBLENBQUEwZCxNQUFBQSxJQUFBQSxNQUFBQSxDQUFBMWpCLElBQUFBLENBQUFBLENBQUFBLENBQUF0RyxLQUFBQSxDQUFBLENBQUEsRUFBQSxFQUFBLENBQUE7RUFFQWlILE1BQUFBLENBQUFvakIsUUFBQUEsR0FBQSxNQUFBLEdBQUFwakIsTUFBQUEsQ0FBQThpQixPQUFBQSxDQUFBN2dCLE1BQUFBLENBQUE4Z0IsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQTFqQixJQUFBQSxLQUFBMGpCLE1BQUFBLENBQUFJLEtBQUFBLENBQUFBLENBQUFocUIsTUFBQUEsSUFBQTZHLE1BQUFBLENBQUE4aUIsT0FBQUEsQ0FBQTNwQixNQUFBQSxFQUFBQSxFQUVBNkcsTUFBQUEsQ0FBQXFqQixjQUFBQSxHQUFBLE1BQUFyakIsTUFBQUEsQ0FBQThpQixPQUFBQSxDQUFBN2dCLE1BQUFBLENBQUE4Z0IsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQUksS0FBQUEsQ0FBQUEsQ0FBQWhxQixNQUFBQSxLQUFBNkcsTUFBQUEsQ0FBQThpQixPQUFBQSxDQUFBM3BCLE1BQ0E7QUFBQSxDQUFBLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcCA9IFtcclxuICB7XHJcbiAgICBiYXNlOiBcIkFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0MVxcdTI0QjZcXHVGRjIxXFx1MDBDMFxcdTAwQzFcXHUwMEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxcdTAwQzNcXHUwMTAwXFx1MDEwMlxcdTFFQjBcXHUxRUFFXFx1MUVCNFxcdTFFQjJcXHUwMjI2XFx1MDFFMFxcdTAwQzRcXHUwMURFXFx1MUVBMlxcdTAwQzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBDNlxcdTAxRkNcXHUwMUUyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBT1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM4XFx1QTczQV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQyXFx1MjRCN1xcdUZGMjJcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUwMjQzXFx1MDE4MlxcdTAxODFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0M1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYxXFx1MDFDNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMlxcdTAxQzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0NVxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJGXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDZcXHUyNEJCXFx1RkYyNlxcdTFFMUVcXHUwMTkxXFx1QTc3Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiR1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ3XFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0OFxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIklcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0OVxcdTI0QkVcXHVGRjI5XFx1MDBDQ1xcdTAwQ0RcXHUwMENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxcdTAwQ0ZcXHUxRTJFXFx1MUVDOFxcdTAxQ0ZcXHUwMjA4XFx1MDIwQVxcdTFFQ0FcXHUwMTJFXFx1MUUyQ1xcdTAxOTddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIktcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QlxcdTI0QzBcXHVGRjJCXFx1MUUzMFxcdTAxRThcXHUxRTMyXFx1MDEzNlxcdTFFMzRcXHUwMTk4XFx1MkM2OVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3QTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0Q1xcdTI0QzFcXHVGRjJDXFx1MDEzRlxcdTAxMzlcXHUwMTNEXFx1MUUzNlxcdTFFMzhcXHUwMTNCXFx1MUUzQ1xcdTFFM0FcXHUwMTQxXFx1MDIzRFxcdTJDNjJcXHUyQzYwXFx1QTc0OFxcdUE3NDZcXHVBNzgwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJNXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNERcXHUyNEMyXFx1RkYyRFxcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTJDNkVcXHUwMTlDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5KXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0RlxcdTI0QzRcXHVGRjJGXFx1MDBEMlxcdTAwRDNcXHUwMEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxcdTAwRDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHUwMEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xcdTAwRDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT0lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT09cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT1VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUwXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJRXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTFcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUlwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUyXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiU1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUzXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU0XFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MjhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1NVxcdTI0Q0FcXHVGRjM1XFx1MDBEOVxcdTAwREFcXHUwMERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHUwMERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU2XFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVllcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc2MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiV1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU3XFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJYXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNThcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTlcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHUwMEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDVBXFx1MjRDRlxcdUZGM0FcXHUwMTc5XFx1MUU5MFxcdTAxN0JcXHUwMTdEXFx1MUU5MlxcdTFFOTRcXHUwMUI1XFx1MDIyNFxcdTJDN0ZcXHUyQzZCXFx1QTc2Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDYxXFx1MjREMFxcdUZGNDFcXHUxRTlBXFx1MDBFMFxcdTAwRTFcXHUwMEUyXFx1MUVBN1xcdTFFQTVcXHUxRUFCXFx1MUVBOVxcdTAwRTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxcdTAwRTRcXHUwMURGXFx1MUVBM1xcdTAwRTVcXHUwMUZCXFx1MDFDRVxcdTAyMDFcXHUwMjAzXFx1MUVBMVxcdTFFQURcXHUxRUI3XFx1MUUwMVxcdTAxMDVcXHUyQzY1XFx1MDI1MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBFNlxcdTAxRkRcXHUwMUUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM5XFx1QTczQl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczRF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDYyXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2M1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxcdTAwRTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY0XFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGM1xcdTAxQzZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2NVxcdTI0RDRcXHVGRjQ1XFx1MDBFOFxcdTAwRTlcXHUwMEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xcdTAwRUJcXHUxRUJCXFx1MDExQlxcdTAyMDVcXHUwMjA3XFx1MUVCOVxcdTFFQzdcXHUwMjI5XFx1MUUxRFxcdTAxMTlcXHUxRTE5XFx1MUUxQlxcdTAyNDdcXHUwMjVCXFx1MDFERF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY2XFx1MjRENVxcdUZGNDZcXHUxRTFGXFx1MDE5MlxcdUE3N0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2N1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJoXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaHZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDE5NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDY5XFx1MjREOFxcdUZGNDlcXHUwMEVDXFx1MDBFRFxcdTAwRUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHUwMEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwialwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZBXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImtcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QlxcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZEXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiblwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZFXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxcdTAwRjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibmpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZGXFx1MjRERVxcdUZGNEZcXHUwMEYyXFx1MDBGM1xcdTAwRjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx1MDBGNVxcdTFFNERcXHUwMjJEXFx1MUU0RlxcdTAxNERcXHUxRTUxXFx1MUU1M1xcdTAxNEZcXHUwMjJGXFx1MDIzMVxcdTAwRjZcXHUwMjJCXFx1MUVDRlxcdTAxNTFcXHUwMUQyXFx1MDIwRFxcdTAyMEZcXHUwMUExXFx1MUVERFxcdTFFREJcXHUxRUUxXFx1MUVERlxcdTFFRTNcXHUxRUNEXFx1MUVEOVxcdTAxRUJcXHUwMUVEXFx1MDBGOFxcdTAxRkZcXHUwMjU0XFx1QTc0QlxcdUE3NERcXHUwMjc1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvaVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUEzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMjIzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzRGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJwXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3MVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJyXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJzXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzNcXHUyNEUyXFx1RkY1M1xcdTAwREZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ0elwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ1XCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzVcXHUyNEU0XFx1RkY1NVxcdTAwRjlcXHUwMEZBXFx1MDBGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx1MDBGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIndcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3N1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OVxcdTI0RThcXHVGRjU5XFx1MUVGM1xcdTAwRkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx1MDBGRlxcdTFFRjdcXHUxRTk5XFx1MUVGNVxcdTAxQjRcXHUwMjRGXFx1MUVGRl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwielwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDdBXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M10vZyxcclxuICB9LFxyXG5dO1xyXG52YXIgZG9tYWlucyA9IFtcclxuICBcIi5jb21cIixcclxuICBcIi5vcmdcIixcclxuICBcIi5uZXRcIixcclxuICBcIi5hY1wiLFxyXG4gIFwiLmFkXCIsXHJcbiAgXCIuYWVcIixcclxuICBcIi5hZlwiLFxyXG4gIFwiLmFnXCIsXHJcbiAgXCIuYWlcIixcclxuICBcIi5hbFwiLFxyXG4gIFwiLmFtXCIsXHJcbiAgXCIuYW9cIixcclxuICBcIi5hcVwiLFxyXG4gIFwiLmFyXCIsXHJcbiAgXCIuYXNcIixcclxuICBcIi5hdFwiLFxyXG4gIFwiLmF1XCIsXHJcbiAgXCIuYXdcIixcclxuICBcIi5heFwiLFxyXG4gIFwiLmF6XCIsXHJcbiAgXCIuYmFcIixcclxuICBcIi5iYlwiLFxyXG4gIFwiLmJkXCIsXHJcbiAgXCIuYmVcIixcclxuICBcIi5iZlwiLFxyXG4gIFwiLmJnXCIsXHJcbiAgXCIuYmhcIixcclxuICBcIi5iaVwiLFxyXG4gIFwiLmJqXCIsXHJcbiAgXCIuYm1cIixcclxuICBcIi5iblwiLFxyXG4gIFwiLmJvXCIsXHJcbiAgXCIuYnFcIixcclxuICBcIi5iclwiLFxyXG4gIFwiLmJzXCIsXHJcbiAgXCIuYnRcIixcclxuICBcIi5id1wiLFxyXG4gIFwiLmJ5XCIsXHJcbiAgXCIuYnpcIixcclxuICBcIi5jYVwiLFxyXG4gIFwiLmNjXCIsXHJcbiAgXCIuY2RcIixcclxuICBcIi5jZlwiLFxyXG4gIFwiLmNnXCIsXHJcbiAgXCIuY2hcIixcclxuICBcIi5jaVwiLFxyXG4gIFwiLmNrXCIsXHJcbiAgXCIuY2xcIixcclxuICBcIi5jbVwiLFxyXG4gIFwiLmNuXCIsXHJcbiAgXCIuY29cIixcclxuICBcIi5jclwiLFxyXG4gIFwiLmN1XCIsXHJcbiAgXCIuY3ZcIixcclxuICBcIi5jd1wiLFxyXG4gIFwiLmN4XCIsXHJcbiAgXCIuY3lcIixcclxuICBcIi5jelwiLFxyXG4gIFwiLmRlXCIsXHJcbiAgXCIuZGpcIixcclxuICBcIi5ka1wiLFxyXG4gIFwiLmRtXCIsXHJcbiAgXCIuZG9cIixcclxuICBcIi5kelwiLFxyXG4gIFwiLmVjXCIsXHJcbiAgXCIuZWVcIixcclxuICBcIi5lZ1wiLFxyXG4gIFwiLmVoXCIsXHJcbiAgXCIuZXJcIixcclxuICBcIi5lc1wiLFxyXG4gIFwiLmV0XCIsXHJcbiAgXCIuZXVcIixcclxuICBcIi5maVwiLFxyXG4gIFwiLmZqXCIsXHJcbiAgXCIuZmtcIixcclxuICBcIi5mbVwiLFxyXG4gIFwiLmZvXCIsXHJcbiAgXCIuZnJcIixcclxuICBcIi5nYVwiLFxyXG4gIFwiLmdkXCIsXHJcbiAgXCIuZ2VcIixcclxuICBcIi5nZlwiLFxyXG4gIFwiLmdnXCIsXHJcbiAgXCIuZ2hcIixcclxuICBcIi5naVwiLFxyXG4gIFwiLmdsXCIsXHJcbiAgXCIuZ21cIixcclxuICBcIi5nblwiLFxyXG4gIFwiLmdwXCIsXHJcbiAgXCIuZ3FcIixcclxuICBcIi5nclwiLFxyXG4gIFwiLmdzXCIsXHJcbiAgXCIuZ3RcIixcclxuICBcIi5ndVwiLFxyXG4gIFwiLmd3XCIsXHJcbiAgXCIuZ3lcIixcclxuICBcIi5oa1wiLFxyXG4gIFwiLmhtXCIsXHJcbiAgXCIuaG5cIixcclxuICBcIi5oclwiLFxyXG4gIFwiLmh0XCIsXHJcbiAgXCIuaHVcIixcclxuICBcIi5pZFwiLFxyXG4gIFwiLmllXCIsXHJcbiAgXCIuaWxcIixcclxuICBcIi5pbVwiLFxyXG4gIFwiLmluXCIsXHJcbiAgXCIuaW9cIixcclxuICBcIi5pcVwiLFxyXG4gIFwiLmlyXCIsXHJcbiAgXCIuaXNcIixcclxuICBcIi5pdFwiLFxyXG4gIFwiLmplXCIsXHJcbiAgXCIuam1cIixcclxuICBcIi5qb1wiLFxyXG4gIFwiLmpwXCIsXHJcbiAgXCIua2VcIixcclxuICBcIi5rZ1wiLFxyXG4gIFwiLmtoXCIsXHJcbiAgXCIua2lcIixcclxuICBcIi5rbVwiLFxyXG4gIFwiLmtuXCIsXHJcbiAgXCIua3BcIixcclxuICBcIi5rclwiLFxyXG4gIFwiLmt3XCIsXHJcbiAgXCIua3lcIixcclxuICBcIi5relwiLFxyXG4gIFwiLmxhXCIsXHJcbiAgXCIubGJcIixcclxuICBcIi5sY1wiLFxyXG4gIFwiLmxpXCIsXHJcbiAgXCIubGtcIixcclxuICBcIi5sclwiLFxyXG4gIFwiLmxzXCIsXHJcbiAgXCIubHRcIixcclxuICBcIi5sdVwiLFxyXG4gIFwiLmx2XCIsXHJcbiAgXCIubHlcIixcclxuICBcIi5tYVwiLFxyXG4gIFwiLm1jXCIsXHJcbiAgXCIubWRcIixcclxuICBcIi5tZVwiLFxyXG4gIFwiLm1nXCIsXHJcbiAgXCIubWhcIixcclxuICBcIi5ta1wiLFxyXG4gIFwiLm1sXCIsXHJcbiAgXCIubW1cIixcclxuICBcIi5tblwiLFxyXG4gIFwiLm1vXCIsXHJcbiAgXCIubXBcIixcclxuICBcIi5tcVwiLFxyXG4gIFwiLm1yXCIsXHJcbiAgXCIubXNcIixcclxuICBcIi5tdFwiLFxyXG4gIFwiLm11XCIsXHJcbiAgXCIubXZcIixcclxuICBcIi5td1wiLFxyXG4gIFwiLm14XCIsXHJcbiAgXCIubXlcIixcclxuICBcIi5telwiLFxyXG4gIFwiLm5hXCIsXHJcbiAgXCIubmNcIixcclxuICBcIi5uZVwiLFxyXG4gIFwiLm5mXCIsXHJcbiAgXCIubmdcIixcclxuICBcIi5uaVwiLFxyXG4gIFwiLm5sXCIsXHJcbiAgXCIubm9cIixcclxuICBcIi5ucFwiLFxyXG4gIFwiLm5yXCIsXHJcbiAgXCIubnVcIixcclxuICBcIi5uelwiLFxyXG4gIFwiLm9tXCIsXHJcbiAgXCIucGFcIixcclxuICBcIi5wZVwiLFxyXG4gIFwiLnBmXCIsXHJcbiAgXCIucGdcIixcclxuICBcIi5waFwiLFxyXG4gIFwiLnBrXCIsXHJcbiAgXCIucGxcIixcclxuICBcIi5wbVwiLFxyXG4gIFwiLnBuXCIsXHJcbiAgXCIucHJcIixcclxuICBcIi5wc1wiLFxyXG4gIFwiLnB0XCIsXHJcbiAgXCIucHdcIixcclxuICBcIi5weVwiLFxyXG4gIFwiLnFhXCIsXHJcbiAgXCIucmVcIixcclxuICBcIi5yb1wiLFxyXG4gIFwiLnJzXCIsXHJcbiAgXCIucnVcIixcclxuICBcIi5yd1wiLFxyXG4gIFwiLnNhXCIsXHJcbiAgXCIuc2JcIixcclxuICBcIi5zY1wiLFxyXG4gIFwiLnNkXCIsXHJcbiAgXCIuc2VcIixcclxuICBcIi5zZ1wiLFxyXG4gIFwiLnNoXCIsXHJcbiAgXCIuc2lcIixcclxuICBcIi5za1wiLFxyXG4gIFwiLnNsXCIsXHJcbiAgXCIuc21cIixcclxuICBcIi5zblwiLFxyXG4gIFwiLnNvXCIsXHJcbiAgXCIuc3JcIixcclxuICBcIi5zc1wiLFxyXG4gIFwiLnN0XCIsXHJcbiAgXCIuc3VcIixcclxuICBcIi5zdlwiLFxyXG4gIFwiLnN4XCIsXHJcbiAgXCIuc3lcIixcclxuICBcIi5zelwiLFxyXG4gIFwiLnRjXCIsXHJcbiAgXCIudGRcIixcclxuICBcIi50ZlwiLFxyXG4gIFwiLnRnXCIsXHJcbiAgXCIudGhcIixcclxuICBcIi50alwiLFxyXG4gIFwiLnRrXCIsXHJcbiAgXCIudGxcIixcclxuICBcIi50bVwiLFxyXG4gIFwiLnRuXCIsXHJcbiAgXCIudG9cIixcclxuICBcIi50clwiLFxyXG4gIFwiLnR0XCIsXHJcbiAgXCIudHZcIixcclxuICBcIi50d1wiLFxyXG4gIFwiLnR6XCIsXHJcbiAgXCIudWFcIixcclxuICBcIi51Z1wiLFxyXG4gIFwiLnVrXCIsXHJcbiAgXCIudXNcIixcclxuICBcIi51eVwiLFxyXG4gIFwiLnV6XCIsXHJcbiAgXCIudmFcIixcclxuICBcIi52Y1wiLFxyXG4gIFwiLnZlXCIsXHJcbiAgXCIudmdcIixcclxuICBcIi52aVwiLFxyXG4gIFwiLnZuXCIsXHJcbiAgXCIudnVcIixcclxuICBcIi53ZlwiLFxyXG4gIFwiLndzXCIsXHJcbiAgXCIueWVcIixcclxuICBcIi55dFwiLFxyXG4gIFwiLnphXCIsXHJcbiAgXCIuem1cIixcclxuICBcIi56d1wiLFxyXG5dO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlRGlhY3JpdGljc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAucmVkdWNlKChyZXN1bHQsIGxldHRlcikgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzdWx0LnJlcGxhY2UobGV0dGVyLmxldHRlcnMsIGxldHRlci5iYXNlKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgU1BFQ0lBTF9DSEFSQUNURVJTID0gXCJcXFxcXFxcXC8gIT9AIyQlXiYqKClfKzoue30sO1xcXFwtJ2Bg4oCZ4oCYXFxcIlwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFske1NQRUNJQUxfQ0hBUkFDVEVSU31dYCwgXCJnaVwiKSwgXCJcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVBbGxCdXRMZXR0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9Mb3dlckNhc2UoKS5yZW1vdmVEaWFjcml0aWNzKCkucmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMoKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNvbmNlYWxcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZXh0cmEpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChgW14ke1NQRUNJQUxfQ0hBUkFDVEVSU30ke2V4dHJhfV1gLCBcImdpXCIpLCBcIuKBjlwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNhcGl0YWxpemVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc2xpY2UoMSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVIVE1MXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShcIj5cIiwgXCJcXHUyMjdCXCIpLnJlcGxhY2UoXCI8XCIsIFwiXFx1MjI3QVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImFuZ2xlQnJhY2tldHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKFwiPFwiLCBcIiZsdDtcIikucmVwbGFjZShcIj5cIiwgXCImZ3Q7XCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVwbGFjZUFycmF5XCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGZpbmQsIHJlcGxhY2UpIHtcclxuICAgIHZhciByZXBsYWNlU3RyaW5nID0gdGhpcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmluZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICByZXBsYWNlU3RyaW5nID0gcmVwbGFjZVN0cmluZy5yZXBsYWNlKGZpbmRbaV0sIHJlcGxhY2VbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcGxhY2VTdHJpbmc7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJtYXNrVVJMc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2VBcnJheShbXCJodHRwczovL1wiLCBcImh0dHA6Ly9cIl0sIFwibm9wZTovL1wiKS5yZXBsYWNlQXJyYXkoZG9tYWlucywgXCIubm9wZVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VSZWFkYWJsZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwibWFrZVBlcmNlbnRhZ2VcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZGVjaW1hbHMpIHtcclxuICAgIGlmICghZGVjaW1hbHMpIGRlY2ltYWxzID0gMjtcclxuICAgIHJldHVybiBgJHsodGhpcyAqIDEwMCkudG9GaXhlZChkZWNpbWFscyl9JWA7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzb3J0T2JqZWN0ID0gKG9iaiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgbGV0IGFyciA9IFtdO1xyXG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgYXJyLnB1c2goW2tleSwgb2JqW2tleV1dKTtcclxuICB9XHJcbiAgYXJyLnNvcnQoKGEsIGIpID0+IChkaXJlY3Rpb24gPyBhWzFdIC0gYlsxXSA6IGJbMV0gLSBhWzFdKSk7XHJcbiAgbGV0IG9ialNvcnRlZCA9IHt9O1xyXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiAob2JqU29ydGVkW2l0ZW1bMF1dID0gaXRlbVsxXSkpO1xyXG4gIC8vYXJyLnNvcnQoZnVuY3Rpb24oYSwgYikgeyBhLnZhbHVlLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLnZhbHVlLnRvTG93ZXJDYXNlKCkpOyB9KTsgLy91c2UgdGhpcyB0byBzb3J0IGFzIHN0cmluZ3NcclxuICByZXR1cm4gb2JqU29ydGVkOyAvLyByZXR1cm5zIGFycmF5XHJcbn07XHJcbiIsIi8qXHJcbiQgPSBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxudmFyIGJvb3RzdHJhcCA9IHJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxudmFyIGFuZ3VsYXJTYW5pdGl6ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItc2FuaXRpemUnKTtcclxudmFyIGFuZ3VsYXJBbmltYXRlID0gcmVxdWlyZSgnYW5ndWxhci1hbmltYXRlJyk7XHJcbiovXHJcbmFuZ3VsYXIubW9kdWxlKFwiYXBwXCIsIFtcclxuICBcInVpLnJvdXRlclwiLFxyXG4gIFwidWkuYm9vdHN0cmFwXCIsXHJcbiAgXCJuZ0FuaW1hdGVcIixcclxuICBcIm5nU2FuaXRpemVcIixcclxuICBcIm5nRHJhZ0Ryb3BcIixcclxuICBcIm5nVGFnc0lucHV0XCIsXHJcbiAgXCJ2Y1JlY2FwdGNoYVwiLFxyXG4gIFwiY2hhcnQuanNcIixcclxuICBcInRjLmNoYXJ0anNcIixcclxuICBcImluZmluaXRlLXNjcm9sbFwiLFxyXG5dKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkdXJsU2VydmljZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xyXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvaG9tZVwiKTtcclxuICAkdXJsU2VydmljZVByb3ZpZGVyLmNvbmZpZy5zdHJpY3RNb2RlKGZhbHNlKTtcclxuXHJcbiAgJHN0YXRlUHJvdmlkZXJcclxuICAgIC5zdGF0ZShcImhvbWVcIiwge1xyXG4gICAgICB1cmw6IFwiL2hvbWVcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2hvbWUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInBvbGljeVwiLCB7XHJcbiAgICAgIHVybDogXCIvcG9saWN5XCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wb2xpY3kuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInByaW50XCIsIHtcclxuICAgICAgdXJsOiBcIi9wcmludFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcHJpbnQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImV4cGVyaWVuY2VcIiwge1xyXG4gICAgICB1cmw6IFwiL2V4cGVyaWVuY2VcIixcclxuICAgICAgY29udHJvbGxlcjogXCJFeHBlcmllbmNlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvZXhwZXJpZW5jZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwic2tpbGxzXCIsIHtcclxuICAgICAgdXJsOiBcIi9za2lsbHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJTa2lsbHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9za2lsbHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImhvYmJpZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2hvYmJpZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJIb2JiaWVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvaG9iYmllcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiY29udGFjdFwiLCB7XHJcbiAgICAgIHVybDogXCIvY29udGFjdFwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkNvbnRhY3RDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9jb250YWN0Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ3b3Jrb3V0XCIsIHtcclxuICAgICAgdXJsOiBcIi93b3Jrb3V0XCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiV29ya291dEN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3dvcmtvdXQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInBvc3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9wb3N0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlBvc3RzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcG9zdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInByb2ZpbGVcIiwge1xyXG4gICAgICB1cmw6IFwiL3Byb2ZpbGVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJQcm9maWxlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcHJvZmlsZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibGlzdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2xpc3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiTGlzdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImxpc3RzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwcmlvcml0aXplXCIsIHtcclxuICAgICAgdXJsOiBcIi9wcmlvcml0aXplXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUHJpb3JpdGl6ZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicHJpb3JpdGl6ZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYnViYmxlc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYnViYmxlc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkJ1YmJsZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImJ1YmJsZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImFzdGVyb2lkc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYXN0ZXJvaWRzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQXN0ZXJvaWRzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJhc3Rlcm9pZHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImxlbW1pbmdzXCIsIHtcclxuICAgICAgdXJsOiBcIi9sZW1taW5nc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkxlbW1pbmdzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJsZW1taW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYm90c1wiLCB7XHJcbiAgICAgIHVybDogXCIvYm90c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3NcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5nc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3MtYWRtaW5cIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy1hZG1pblwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0FkbWluQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MtYWRtaW4uaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1vbGRcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy1vbGRcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NPbGRDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1vbGQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1nYW1lXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3MvOmdhbWVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NHYW1lQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MtZ2FtZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1nb29nbGVcIiwge1xyXG4gICAgICB1cmw6IFwiL2dvb2dsZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpHb29nbGVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvZ29vZ2xlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWxvZ29zXCIsIHtcclxuICAgICAgdXJsOiBcIi9sb2dvc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpMb2dvc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9sb2dvcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1hbmltYWxzXCIsIHtcclxuICAgICAgdXJsOiBcIi9hbmltYWxzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekFuaW1hbHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvYW5pbWFscy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1za2VsZXRvbnNcIiwge1xyXG4gICAgICB1cmw6IFwiL3NrZWxldG9uc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpTa2VsZXRvbnNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvc2tlbGV0b25zLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LW1vdmllc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbW92aWVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpek1vdmllc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9tb3ZpZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImNoYXJhZGVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9jaGFyYWRlc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkNoYXJhZGVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvY2hhcmFkZXMuaHRtbFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7XHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgcmVxdWlyZUJhc2U6IGZhbHNlLFxyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdXZWJTb2NrZXRTdmMnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcclxuICBmdW5jdGlvbiB3ZWJzb2NrZXRIb3N0KCkge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcclxuICAgICAgcmV0dXJuIFwid3NzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIndzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBjb25uZWN0aW9uO1xyXG4gIHZhciBjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQod2Vic29ja2V0SG9zdCgpKTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjb25uZWN0ZWQnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjbG9zZWQuIFJlY29ubmVjdGluZy4uLicpO1xyXG4gICAgICAkdGltZW91dChjb25uZWN0LCAxMDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUgKyBcIiAtIFN0YXRlOiBcIiArIGNvbm5lY3Rpb24ucmVhZHlTdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnd3M6JyArIHBheWxvYWQudG9waWMsIHBheWxvYWQuZGF0YSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc2VuZCA9IGZ1bmN0aW9uICh0b3BpYywgZGF0YSkge1xyXG4gICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh7dG9waWM6IHRvcGljLCBkYXRhOiBkYXRhfSk7XHJcbiAgICBjb25uZWN0aW9uLnNlbmQoanNvbik7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5jb25uZWN0ID0gY29ubmVjdDtcclxuXHJcbn0pLnJ1bihmdW5jdGlvbiAoV2ViU29ja2V0U3ZjKSB7XHJcbiAgV2ViU29ja2V0U3ZjLmNvbm5lY3QoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmRpcmVjdGl2ZShcImNsaWNrT3V0c2lkZVwiLCBmdW5jdGlvbiAoJGRvY3VtZW50KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc3RyaWN0OiBcIkFcIixcclxuICAgIHNjb3BlOiB7XHJcbiAgICAgIGNsaWNrT3V0c2lkZTogXCImXCIsXHJcbiAgICB9LFxyXG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAkZG9jdW1lbnQub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlbCAhPT0gZS50YXJnZXQgJiYgIWVsWzBdLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9zY29wZS4kcGFyZW50LnNldFNlbGVjdGVkTGlzdCgpO1xyXG4gICAgICAgICAgICBzY29wZS4kZXZhbChzY29wZS5jbGlja091dHNpZGUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG5cdC5kaXJlY3RpdmUoJ2hlYWQnLCBbXHJcblx0XHQnJHJvb3RTY29wZScsXHJcblx0XHQnJHN0YXRlJyxcclxuXHRcdCckY29tcGlsZScsXHJcblx0XHQnJGludGVycG9sYXRlJyxcclxuXHRcdGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsICRjb21waWxlLCAkaW50ZXJwb2xhdGUpIHtcclxuXHJcblx0XHRcdHZhciBnZXRTdHlsZSA9IGZ1bmN0aW9uIGdldFN0eWxlKHRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHJcblx0XHRcdFx0dmFyIHN0eWxlID0ge1xyXG5cdFx0XHRcdFx0aHJlZjogdGVtcGxhdGVTdHlsZVVybCxcclxuXHRcdFx0XHRcdHJlbDogJ3N0eWxlc2hlZXQnXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0aWYgKHN0eWxlLmhyZWYubWF0Y2goL1xcLmxlc3MkLykpIHtcclxuXHRcdFx0XHRcdHN0eWxlLnJlbCA9ICdzdHlsZXNoZWV0L2xlc3MnO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIHN0eWxlO1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiBnZXRTdHlsZXMoc3RhdGUpIHtcclxuXHJcblx0XHRcdFx0dmFyIHN0YXRlcyA9IHt9O1xyXG5cclxuXHRcdFx0XHQvL0NoZWNrIHN0YXRlIGZvciBzdHlsZXNcclxuXHRcdFx0XHR3aGlsZSAoc3RhdGUubmFtZSAhPT0gJycpIHtcclxuXHRcdFx0XHRcdHZhciBwYXJlbnQgPSAkc3RhdGUuZ2V0KCdeJywgc3RhdGUpO1xyXG5cclxuXHRcdFx0XHRcdC8vSW5pdGlhdGUgb3VyIHZpZXcgbGlzdFxyXG5cdFx0XHRcdFx0aWYgKCFzdGF0ZXNbcGFyZW50Lm5hbWVdKSB7XHJcblx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV0gPSB7fTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NoZWNrIHRoZSB0ZW1wbGF0ZVN0eWxlXHJcblx0XHRcdFx0XHRpZiAoc3RhdGUudGVtcGxhdGVTdHlsZVVybCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1twYXJlbnQubmFtZV1bJyddKSB7XHJcblx0XHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXVsnJ10gPSBnZXRTdHlsZShzdGF0ZS50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ2hlY2sgdmlld3NcclxuXHRcdFx0XHRcdGlmIChzdGF0ZS52aWV3cykge1xyXG5cdFx0XHRcdFx0XHRfLmZvckVhY2goc3RhdGUudmlld3MsIGZ1bmN0aW9uICh2aWV3LCBrZXkpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBoYXZlIGEgc3R5bGVcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXZpZXcudGVtcGxhdGVTdHlsZVVybCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBhcmUgdGFyZ2V0aW5nIHNvbWUgcGFyZW50XHJcblx0XHRcdFx0XHRcdFx0aWYgKChrZXkgPSBrZXkuc3BsaXQoJ0AnKSlbMV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgaGF2ZSBzdHlsZXMgZm9yIHRoYXQgcGFyZW50XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1trZXlbMV1dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlc1trZXlbMV1dID0ge307XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Ly9QbGFjZSB0aGUgc3R5bGUgb24gc29tZSBwYXJlbnQncyB2aWV3XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1trZXlbMV1dW2tleVswXV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGVzW2tleVsxXV1ba2V5WzBdXSA9IGdldFN0eWxlKHZpZXcudGVtcGxhdGVTdHlsZVVybCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9QbGFjZSB0aGUgc3R5bGUgb24gb3VyIHBhcmVudCdzIHZpZXdcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdW2tleVswXV0gPSBnZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9Db250aW51ZSB3aXRoIHRoZSBwYXJlbnRcclxuXHRcdFx0XHRcdHN0YXRlID0gcGFyZW50O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9GbGF0dGVuIHRoZSBsaXN0XHJcblx0XHRcdFx0dmFyIGZsYXQgPSBbXTtcclxuXHRcdFx0XHRfLmZvckVhY2goc3RhdGVzLCBmdW5jdGlvbiAodmlld3MpIHtcclxuXHJcblx0XHRcdFx0XHRfLmZvckVhY2godmlld3MsIGZ1bmN0aW9uIChzdHlsZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFfLmluY2x1ZGVzKGZsYXQsIHN0eWxlKSkge1xyXG5cdFx0XHRcdFx0XHRcdGZsYXQucHVzaChzdHlsZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vUmV2ZXJzZSBpdCBzbyB3ZSBoYXZlIGEgcHJvcGVyIGhpZXJhcmNoeVxyXG5cdFx0XHRcdGZsYXQucmV2ZXJzZSgpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZmxhdDtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRcdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtKSB7XHJcblxyXG5cdFx0XHRcdFx0c2NvcGUudGVtcGxhdGVTdHlsZXMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHR2YXIgaHRtbCA9ICc8bGluayBuZy1hdHRyLXJlbD1cInt7c3R5bGUucmVsfX1cIiBuZy1yZXBlYXQ9XCJzdHlsZSBpbiB0ZW1wbGF0ZVN0eWxlc1wiIG5nLWhyZWY9XCJ7e3N0eWxlLmhyZWZ9fVwiPic7XHJcblxyXG5cdFx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvXFx7XFx7L2csICRpbnRlcnBvbGF0ZS5zdGFydFN5bWJvbCgpKTtcclxuXHRcdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcfVxcfS9nLCAkaW50ZXJwb2xhdGUuZW5kU3ltYm9sKCkpO1xyXG5cclxuXHRcdFx0XHRcdGVsZW0uYXBwZW5kKCRjb21waWxlKGh0bWwpKHNjb3BlKSk7XHJcblxyXG5cdFx0XHRcdFx0JHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzY29wZS50ZW1wbGF0ZVN0eWxlcyA9IGdldFN0eWxlcyh0b1N0YXRlKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdH1cclxuXHRdKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkFwcEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBMYW5ndWFnZVN2YywgVXNlclN2Yykge1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCIlY1lvdSBzbmVha3kgYnVnZ2VyIVwiLFxyXG4gICAgXCJmb250OiAyZW0gc2Fucy1zZXJpZjsgY29sb3I6IERvZGdlckJsdWU7IHRleHQtc2hhZG93OiAycHggMCAwICM0NDQsIC0ycHggMCAwICM0NDQsIDAgMnB4IDAgIzQ0NCwgMCAtMnB4IDAgIzQ0NCwgMXB4IDFweCAjNDQ0LCAtMXB4IC0xcHggMCAjNDQ0LCAxcHggLTFweCAwICM0NDQsIC0xcHggMXB4IDAgIzQ0NDtcIixcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCJJJ20gZ2xhZCB5b3UncmUgY3VyaW91cyB3aGV0aGVyIHNvbWV0aGluZyBpcyBwb3BwaW5nIHVwIGluIGhlcmUuIEknbSBhIGJpdCBvZiBhIHN0aWNrbGVyIHdoZW4gaXQgY29tZXMgdG8gbWVzc2FnZXMgaW4gdGhlIGNvbnNvbGUgc28gSSB0cnkgdG8gbWFrZSBzdXJlIG9ubHkgdGhpbmdzIEkgd2FudCBhcmUgdmlzaWJsZS4gVGhhdCBiZWluZyBzYWlkLCBpZiB0aGVyZSBpcyBhIGJpZyBlcnJvciBoZXJlLCBJIHdvdWxkIHJlYWxseSBhcHByZWNpYXRlIHlvdSB0ZWxsaW5nIG1lIHNvIEkgY2FuIGdldCByaWQgb2YgaXQhXCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiVGhlIGNvZGUgZm9yIG15IHJlc3VtZSBpcyBob3N0ZWQgb24gR2l0aHViIGlmIHlvdSByZWFsbHkgd2FudCB0byBnbyBpbnRvIGFsbCB0aGlzISA9PiBodHRwczovL2dpdGh1Yi5jb20vRmxhbmRlcnNCdXJnZXIvcmVzdW1lXCIsXHJcbiAgKTtcclxuXHJcbiAgLypcclxuICAgICQoZG9jdW1lbnQpLmJpbmQoXCJrZXl1cCBrZXlkb3duXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBpZihlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09IDgwKXtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAqL1xyXG5cclxuICAkKHdpbmRvdykubG9hZChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLmxvYWRpbmdcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAkKFwiLmNvbnRlbnRcIikuZmFkZUluKFwic2xvd1wiKTtcclxuICB9KTtcclxuXHJcbiAgJChcIi5jaGVja2JveC1tZW51XCIpLm9uKFwiY2hhbmdlXCIsIFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoXCJsaVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiLCB0aGlzLmNoZWNrZWQpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmFsbG93LWZvY3VzXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUudGhlbWVDb3VudGVyID0gNjtcclxuICAkc2NvcGUudG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICRzY29wZS55ZWFyID0gJHNjb3BlLnRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgJHNjb3BlLnJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xyXG5cclxuICAkc2NvcGUuZmxpcFRoZW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5sb2FkaW5nXCIpLnNob3coKTtcclxuICAgICQoXCIuY29udGVudFwiKS5oaWRlKCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi5sb2FkaW5nXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgICAkKFwiLmNvbnRlbnRcIikuZmFkZUluKFwic2xvd1wiKTtcclxuICAgIH0sIDgwMCk7XHJcbiAgICAkc2NvcGUudGhlbWVDb3VudGVyID0gJHNjb3BlLnRoZW1lQ291bnRlciA8IDYgPyAkc2NvcGUudGhlbWVDb3VudGVyICsgMSA6ICgkc2NvcGUudGhlbWVDb3VudGVyID0gMSk7XHJcbiAgfTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL3NraWxscy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuc2tpbGxzID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKHNraWxsKSB7XHJcbiAgICAgIHJldHVybiBza2lsbC5lbmFibGVkO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9ob2JiaWVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5ob2JiaWVzID0gZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2V4cGVyaWVuY2UuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmpvYnMgPSBkYXRhO1xyXG4gICAgJHNjb3BlLmpvYnMuZm9yRWFjaChmdW5jdGlvbiAoam9iKSB7XHJcbiAgICAgIGpvYi5zdGFydERhdGUgPSBuZXcgRGF0ZShqb2Iuc3RhcnREYXRlKTtcclxuICAgICAgaWYgKGpvYi5lbmREYXRlKSBqb2IuZW5kRGF0ZSA9IG5ldyBEYXRlKGpvYi5lbmREYXRlKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvY2hhcmFkZXMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmNoYXJhZGVzID0gZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmdldFRpbWVTcGFuID0gZnVuY3Rpb24gKGpvYikge1xyXG4gICAgcmV0dXJuIGpvYi5zdGFydERhdGUuZ2V0RnVsbFllYXIoKSArIChqb2IuZW5kRGF0ZSA/IFwiIC0gXCIgKyBqb2IuZW5kRGF0ZS5nZXRGdWxsWWVhcigpIDogXCIgLSBUb2RheVwiKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUubGFuZ3VhZ2VzID0gTGFuZ3VhZ2VTdmMubGFuZ3VhZ2VzO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IExhbmd1YWdlU3ZjLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICRzY29wZS5zZWxlY3RMYW5ndWFnZSA9IGZ1bmN0aW9uIChsYW5ndWFnZSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBMYW5ndWFnZVN2Yy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmhvdmVyZGl2ID0gZnVuY3Rpb24gKGUsIGRpdmlkKSB7XHJcbiAgICB2YXIgbGVmdCA9IGUuY2xpZW50WCArIFwicHhcIjtcclxuICAgIHZhciB0b3AgPSBlLmNsaWVudFkgKyAyMCArIFwicHhcIjtcclxuXHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2aWQpO1xyXG5cclxuICAgICQoXCIjXCIgKyBkaXZpZCkuY3NzKFwibGVmdFwiLCBsZWZ0KTtcclxuICAgICQoXCIjXCIgKyBkaXZpZCkuY3NzKFwidG9wXCIsIHRvcCk7XHJcblxyXG4gICAgJChcIiNcIiArIGRpdmlkKS50b2dnbGUoKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS51c2VyKSB7XHJcbiAgICBVc2VyU3ZjLmxvZ2luKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgbG9naW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2dpblwiLCBmdW5jdGlvbiAoXywgdXNlcikge1xyXG4gICAgbG9naW4odXNlcik7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ2luKHVzZXIpIHtcclxuICAgIGlmICghJHNjb3BlLmxvZ2dlZEluKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlciA9IHVzZXIuX2lkO1xyXG4gICAgICAkc2NvcGUubG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgICAkc2NvcGUuJGJyb2FkY2FzdChcImxvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHNjb3BlLiRvbihcInVwZGF0ZVwiLCBmdW5jdGlvbiAoXywgdXNlcikge1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUgPSBuZXcgRGF0ZSgkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlKTtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIiNsb2FkaW5nLWljb25cIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbihcImxvYWRpbmdcIiwgZnVuY3Rpb24gKF8sIHVzZXIpIHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICQoXCIjbG9hZGluZy1pY29uXCIpLnNob3coKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbihcImxvYWRlZFwiLCBmdW5jdGlvbiAoXywgdXNlcikge1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUubG9nb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZmlyZWJhc2VcclxuICAgICAgLmF1dGgoKVxyXG4gICAgICAuc2lnbk91dCgpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBTaWduLW91dCBzdWNjZXNzZnVsLlxyXG4gICAgICAgICRzY29wZS5sb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdChcImxvZ291dFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIC8vIEFuIGVycm9yIGhhcHBlbmVkLlxyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlKSB7XHJcbiAgICB2YXIgbW9udGhzID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpICsgXCItXCIgKyBtb250aHNbZGF0ZS5nZXRNb250aCgpXSArIFwiLVwiICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIH07XHJcblxyXG4gIFN0cmluZy5wcm90b3R5cGUuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5zbGljZSgxKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdBc3Rlcm9pZHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgR2FtZVN2Yykge1xyXG5cclxuICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FzdGVyb2lkcy1wYWdlJyk7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIGN0eC5mb250ID0gXCIzMHB4IENvbWljIFNhbnMgTVNcIjtcclxuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICB2YXIgc2hvdHMgPSB7fTtcclxuICB2YXIgYXN0ZXJvaWRzID0ge307XHJcbiAgdmFyIHBvd2VydXBzID0ge307XHJcbiAgdmFyIGV4cGxvc2lvbnMgPSB7fTtcclxuICB2YXIgbWFwID0ge307XHJcbiAgdmFyIHNwYWNlcGljcyA9IDEwO1xyXG4gIHZhciBzcGFjZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwYWNlcGljcyk7XHJcbiAgdmFyIHBvd2VydXBUeXBlcyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3NwZWVkJyxcclxuICAgICAgYW5ub3VuY2VtZW50OiAnTWF4IFNwZWVkIOKHpycsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICAgIHNpemU6IFsxNCwgMzVdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbihzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAubWF4U3BlZWQgKz0gMTAwO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnY29vbGRvd24nLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6ICdDb29sZG93biDih6knLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogMyxcclxuICAgICAgICBzaXplOiBbMTcsIDE3XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5jb29sZG93blRpbWUgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdyYW5nZScsXHJcbiAgICAgIGFubm91bmNlbWVudDogJ0ZpcmluZyBSYW5nZSDih6cnLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDQsXHJcbiAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICBzaXplOiBbMzAsIDhdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbihzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAucmFuZ2UgKz0gNTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3NoaWVsZCcsXHJcbiAgICAgIGFubm91bmNlbWVudDogJ1NoaWVsZCcsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogNSxcclxuICAgICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICAgIHNpemU6IFsxOSwgMTldLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbihzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAuc2hpZWxkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ251a2UnLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6ICdOdWtlJyxcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgICAgc2l6ZTogWzE1LCAxNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWVcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgICAgICBhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgICAgfVxyXG4gICAgfSwvKlxyXG4gICAgJ3NpZGVfY2Fubm9ucycsXHJcbiAgICAnbGFzZXInLFxyXG4gICAgJ3NoaWVsZCcsXHJcbiAgICAnbGlmZScsXHJcbiAgICAnbWlzc2lsZXMnLFxyXG4gICAgJ251a2UnXHJcbiAgICAqL1xyXG4gIF07XHJcbiAgcG93ZXJ1cFR5cGVzLmZvckVhY2goZnVuY3Rpb24ocG93ZXJ1cCwgaSwgYXJyYXkpIHtcclxuICAgIGFycmF5W2ldLmltZy5zcmMgPSAnYXN0ZXJvaWRzLycgKyBwb3dlcnVwLm5hbWUgKyAnLnBuZyc7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBleHBsb3Npb25JbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGV4cGxvc2lvbkltYWdlLnNyYyA9ICdhc3Rlcm9pZHMvZXhwbG9zaW9uLnBuZyc7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBtYXBbZS5rZXlDb2RlIHx8IGUud2hpY2hdID0gdHJ1ZTtcclxuICB9LHRydWUpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgbWFwW2Uua2V5Q29kZSB8fCBlLndoaWNoXSA9IGZhbHNlO1xyXG4gIH0sdHJ1ZSk7XHJcblxyXG4gICRzY29wZS5oaWdoc2NvcmUgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBldmFsdWF0ZUtleXMoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICAvL1NwYWNlXHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNob290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzddKSB7XHJcbiAgICAgICAgLy9MZWZ0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMzYwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gLT0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOV0pIHtcclxuICAgICAgICAvL1JpZ2h0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMzYwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gKz0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOF0pIHtcclxuICAgICAgICAvL1VwIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA8PSBzcGFjZXNoaXAubWF4U3BlZWQpIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCArPSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkLS07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbNDBdKSB7XHJcbiAgICAgICAgLy9Eb3duIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCAtPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICBzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTcGFjZXNoaXAoKSB7XHJcbiAgICB0aGlzLndpZHRoID0gNTA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDUwO1xyXG4gICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgIHRoaXMucmFuZ2UgPSA4MDtcclxuICAgIHRoaXMuY2Fubm9uID0ge1xyXG4gICAgICB4OiB0aGlzLndpZHRoIC8gMiAtIDQuNSxcclxuICAgICAgeTogdGhpcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgKiAwLjA3ODEyNVxyXG4gICAgfTtcclxuICAgIHRoaXMuY29vbGRvd24gPSAwO1xyXG4gICAgdGhpcy5jb29sZG93blRpbWUgPSAyMDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbXHJcbiAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMixcclxuICAgICAgY2FudmFzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDJcclxuICAgIF07XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gJ2FzdGVyb2lkcy9zcGFjZXNoaXAucG5nJztcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5tYXhTcGVlZCA9IDEwMDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gMDtcclxuICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG5cclxuICAgIHRoaXMuc2hvb3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5jb29sZG93biA9IHRoaXMuY29vbGRvd25UaW1lO1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBzaG90c1tpZF0gPSBuZXcgU2hvdChpZCwgdGhpcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5zaGllbGQpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmFyYyh0aGlzLnBvc2l0aW9uWzBdICsgdGhpcy53aWR0aCAvIDIsIHRoaXMucG9zaXRpb25bMV0gKyB0aGlzLmhlaWdodCAvIDIsIDMwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDM1LCAyMzcsIDg2LCAwLjUpXCI7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2IoNjYsIDE2OCwgMzYsIDAuOClcIjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICAgIHZhciBhc3Rlcm9pZCA9IGFzdGVyb2lkc1tpXTtcclxuICAgICAgICBpZiAoaGl0KGFzdGVyb2lkLCB0aGlzKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2hpZWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpZWxkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGFzdGVyb2lkLmV4cGxvZGUoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnYW1lT3ZlcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFuZ2xlID0gdGhpcy5yb3RhdGlvbjtcclxuICAgICAgaWYgKHRoaXMuY29vbGRvd24gPiAwKSB7XHJcbiAgICAgICAgdGhpcy5jb29sZG93bi0tO1xyXG4gICAgICB9XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU2hvdChpZCwgc3BhY2VzaGlwKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW1xyXG4gICAgICBzcGFjZXNoaXAucG9zaXRpb25bMF0gKyBzcGFjZXNoaXAuY2Fubm9uLnggKyBzcGFjZXNoaXAuY2Fubm9uLnggKiBNYXRoLmNvcygoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSAvIDE4MCksXHJcbiAgICAgIHNwYWNlc2hpcC5wb3NpdGlvblsxXSArIHNwYWNlc2hpcC5jYW5ub24ueSArIHNwYWNlc2hpcC5jYW5ub24ueSAqIE1hdGguc2luKChzcGFjZXNoaXAucm90YXRpb24gLSA5MCkgKiBNYXRoLlBJIC8gMTgwKVxyXG4gICAgXTtcclxuICAgIHRoaXMud2lkdGggPSA5O1xyXG4gICAgdGhpcy5oZWlnaHQgPSAxNTtcclxuICAgIHRoaXMuYW5nbGUgPSBzcGFjZXNoaXAuYW5nbGU7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gc3BhY2VzaGlwLnJvdGF0aW9uO1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwYWNlc2hpcC5zcGVlZCArIDUwMDtcclxuICAgIHRoaXMubGlmZXNwYW4gPSBzcGFjZXNoaXAucmFuZ2U7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gJ2FzdGVyb2lkcy9zaG90LnBuZyc7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBBc3Rlcm9pZChpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy53aWR0aCA9IE1hdGgucmFuZG9tKCkgKiA1MCArIDIwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMucm90YXRpb25TcGVlZCA9IE1hdGgucmFuZG9tKCkgKiA2IC0gMztcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMzAwICsgMjtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSAnYXN0ZXJvaWRzL2FzdGVyb2lkJyArIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA2KSArIDEpICsgJy5wbmcnO1xyXG5cclxuICAgIHRoaXMuZXhwbG9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBleHBsb3Npb25zW3RoaXMuaWRdID0gbmV3IEV4cGxvc2lvbih0aGlzKTtcclxuICAgICAgcmV0dXJuIGRlbGV0ZSBhc3Rlcm9pZHNbdGhpcy5pZF07XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZDtcclxuICAgICAgaWYgKHRoaXMucm90YXRpb24gPiAzNjApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gdGhpcy5yb3RhdGlvbiAtIDM2MDtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnJvdGF0aW9uIDwgMCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSAzNjAgKyB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgICB2YXIgc2hvdCA9IHNob3RzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoc2hvdCwgdGhpcykpIHtcclxuICAgICAgICAgIHRoaXMuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgdmFyIHBvaW50cyA9IE1hdGguZmxvb3IoKHNob3Quc3BlZWQgLSA1MDApIC8gMTAgKyA3MCAtIHRoaXMud2lkdGgpO1xyXG4gICAgICAgICAgaWYgKE1hdGguZmxvb3IoKHBvaW50cyArICRzY29wZS5zY29yZSkgLyAxMDApID4gTWF0aC5mbG9vcigkc2NvcGUuc2NvcmUgLyAxMDApKSB7XHJcbiAgICAgICAgICAgIHNwYXduUG93ZXJ1cCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJHNjb3BlLnNjb3JlICs9IHBvaW50cztcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIGRlbGV0ZSBzaG90c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBFeHBsb3Npb24ob2JqZWN0KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW29iamVjdC5wb3NpdGlvblswXSwgb2JqZWN0LnBvc2l0aW9uWzFdXTtcclxuICAgIHRoaXMud2lkdGggPSBvYmplY3Qud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9iamVjdC5oZWlnaHQ7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5jeWNsZSA9IHtcclxuICAgICAgcm93czogNixcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgc2l6ZTogWzI1NiwgMjU2XSxcclxuICAgICAgaTogMCxcclxuICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDQ3O1xyXG4gICAgdGhpcy5pbWcgPSBleHBsb3Npb25JbWFnZTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAodGhpcy5jeWNsZS5kaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmN5Y2xlLmkrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN5Y2xlLmktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFBvd2VydXAoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucG93ZXJ1cCA9IHBvd2VydXBUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3dlcnVwVHlwZXMubGVuZ3RoKV07XHJcbiAgICB0aGlzLmN5Y2xlID0gdGhpcy5wb3dlcnVwLmN5Y2xlO1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDEwMDA7XHJcbiAgICBpZiAodGhpcy5jeWNsZS5zaXplWzFdID4gdGhpcy5jeWNsZS5zaXplWzBdKSB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gNDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSBNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0IC8gdGhpcy5jeWNsZS5zaXplWzFdICogdGhpcy5jeWNsZS5zaXplWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSA0MDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLnJvdW5kKHRoaXMud2lkdGggLyB0aGlzLmN5Y2xlLnNpemVbMF0gKiB0aGlzLmN5Y2xlLnNpemVbMV0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5pbWcgPSB0aGlzLnBvd2VydXAuaW1nO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDE1MCArIDUwO1xyXG4gICAgdmFyIGRlbGF5ID0gNTtcclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBwb3dlcnVwc1t0aGlzLmlkXTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaGl0KHNwYWNlc2hpcCwgdGhpcykpIHtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2UgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5hbm5vdW5jZW1lbnQgPSB0aGlzLnBvd2VydXAuYW5ub3VuY2VtZW50O1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgdGhpcy5wb3dlcnVwLmFjdGl2YXRlKHNwYWNlc2hpcCk7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBwb3dlcnVwc1t0aGlzLmlkXTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICAgIGlmIChkZWxheSA8PSAwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLmkrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGF5ID0gNTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWxheS0tO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZShvYmplY3QpIHtcclxuICAgICBvYmplY3QucG9zaXRpb25bMF0gKz0gb2JqZWN0LnNwZWVkIC8gMTAwICogTWF0aC5jb3MoKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgIG9iamVjdC5wb3NpdGlvblsxXSArPSBvYmplY3Quc3BlZWQgLyAxMDAgKiBNYXRoLnNpbigob2JqZWN0LmFuZ2xlIC0gOTApICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgaWYgKG9iamVjdC5wb3NpdGlvblswXSA+IGNhbnZhcy53aWR0aCkge1xyXG4gICAgICAgb2JqZWN0LnBvc2l0aW9uWzBdID0gLW9iamVjdC53aWR0aDtcclxuICAgICB9IGVsc2UgaWYgKG9iamVjdC5wb3NpdGlvblswXSA8IC1vYmplY3Qud2lkdGgpIHtcclxuICAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IGNhbnZhcy53aWR0aDtcclxuICAgICB9XHJcbiAgICAgaWYgKG9iamVjdC5wb3NpdGlvblsxXSA+IGNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgIG9iamVjdC5wb3NpdGlvblsxXSA9IC1vYmplY3QuaGVpZ2h0O1xyXG4gICAgIH0gZWxzZSBpZiAob2JqZWN0LnBvc2l0aW9uWzFdIDwgLW9iamVjdC5oZWlnaHQpIHtcclxuICAgICAgIG9iamVjdC5wb3NpdGlvblsxXSA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgfVxyXG4gICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgY3R4LnRyYW5zbGF0ZShvYmplY3QucG9zaXRpb25bMF0sIG9iamVjdC5wb3NpdGlvblsxXSk7XHJcbiAgICAgY3R4LnRyYW5zbGF0ZShvYmplY3Qud2lkdGggLyAyLCBvYmplY3QuaGVpZ2h0IC8gMik7XHJcbiAgICAgY3R4LnJvdGF0ZShvYmplY3Qucm90YXRpb24gKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICBpZiAob2JqZWN0LmN5Y2xlKSB7XHJcbiAgICAgICB2YXIgY29sdW1uID0gb2JqZWN0LmN5Y2xlLmkgJSBvYmplY3QuY3ljbGUuY29sdW1ucztcclxuICAgICAgIHZhciByb3cgPSBNYXRoLmZsb29yKG9iamVjdC5jeWNsZS5pIC8gb2JqZWN0LmN5Y2xlLmNvbHVtbnMpO1xyXG4gICAgICAgY3R4LmRyYXdJbWFnZShvYmplY3QuaW1nLCBvYmplY3QuY3ljbGUuc2l6ZVswXSAqIGNvbHVtbiwgb2JqZWN0LmN5Y2xlLnNpemVbMV0gKiByb3csIG9iamVjdC5jeWNsZS5zaXplWzBdLCBvYmplY3QuY3ljbGUuc2l6ZVsxXSwgLW9iamVjdC53aWR0aCAvIDIsIC1vYmplY3QuaGVpZ2h0IC8gMiwgb2JqZWN0LndpZHRoLCBvYmplY3QuaGVpZ2h0KTtcclxuXHJcbiAgICAgICBpZiAob2JqZWN0LmN5Y2xlLmkgPD0gMCkge1xyXG4gICAgICAgICBvYmplY3QuY3ljbGUuaSA9IDA7XHJcbiAgICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgfSBlbHNlIGlmIChvYmplY3QuY3ljbGUuaSA+PSBvYmplY3QuY3ljbGUuY29sdW1ucyAqIG9iamVjdC5jeWNsZS5yb3dzKSB7XHJcbiAgICAgICAgIG9iamVjdC5jeWNsZS5pID0gb2JqZWN0LmN5Y2xlLmNvbHVtbnMgKiBvYmplY3QuY3ljbGUucm93cyAtIDE7XHJcbiAgICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgIH1cclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgY3R4LmRyYXdJbWFnZShvYmplY3QuaW1nLCAtb2JqZWN0LndpZHRoIC8gMiwgLW9iamVjdC5oZWlnaHQgLyAyLCBvYmplY3Qud2lkdGgsIG9iamVjdC5oZWlnaHQpO1xyXG4gICAgIH1cclxuICAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHNwYWNlc2hpcDtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAkc2NvcGUucGxheWluZyA9IHRydWU7XHJcbiAgICAkc2NvcGUuc2NvcmUgPSAwO1xyXG4gICAgc3BhY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFjZXBpY3MpO1xyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgc3BhY2VzaGlwID0gbmV3IFNwYWNlc2hpcCgpO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYXduQXN0ZXJvaWRzKDUpO1xyXG4gICAgYXV0b1NwYXduKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRFbnRyeVBvc2l0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBncmlkWCA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIGdyaWRZID0gTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICB2YXIgeCwgeSA9IDA7XHJcbiAgICBpZiAoZ3JpZFggPj0gMSkge1xyXG4gICAgICB4ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgaWYgKHkgPj0gMSkge1xyXG4gICAgICAgIHkgPSAwIC0gaGVpZ2h0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHkgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIGlmIChncmlkWSA+PSAxKSB7XHJcbiAgICAgICAgeCA9IDAgLSB3aWR0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB4ID0gY2FudmFzLndpZHRoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3gsIHldO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGl0KG9iamVjdDEsIG9iamVjdDIpIHtcclxuICAgIHJldHVybiAob2JqZWN0MS5wb3NpdGlvblswXSA8IG9iamVjdDIucG9zaXRpb25bMF0gKyBvYmplY3QyLndpZHRoKSAmJlxyXG4gICAgICAgICAgIChvYmplY3QyLnBvc2l0aW9uWzBdIDwgb2JqZWN0MS5wb3NpdGlvblswXSArIG9iamVjdDEud2lkdGgpICYmXHJcbiAgICAgICAgICAgKG9iamVjdDEucG9zaXRpb25bMV0gPCBvYmplY3QyLnBvc2l0aW9uWzFdICsgb2JqZWN0Mi5oZWlnaHQpICYmXHJcbiAgICAgICAgICAgKG9iamVjdDIucG9zaXRpb25bMV0gPCBvYmplY3QxLnBvc2l0aW9uWzFdICsgb2JqZWN0MS5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXV0b1NwYXduKCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGFzdGVyb2lkcykubGVuZ3RoIDwgMjAwKSB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIGFzdGVyb2lkc1tpZF0gPSBuZXcgQXN0ZXJvaWQoaWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYXV0b1NwYXduKCk7XHJcbiAgICAgIH0sIHNwYXduSW50ZXJ2YWwoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkludGVydmFsKCkge1xyXG4gICAgaWYgKCRzY29wZS5zY29yZSA8IDEwMDApIHtcclxuICAgICAgcmV0dXJuIDEwMDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDIwMDApIHtcclxuICAgICAgcmV0dXJuIDkwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgMzAwMCkge1xyXG4gICAgICByZXR1cm4gODAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA0MDAwKSB7XHJcbiAgICAgIHJldHVybiA3MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDUwMDApIHtcclxuICAgICAgcmV0dXJuIDYwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNjAwMCkge1xyXG4gICAgICByZXR1cm4gNTAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA3MDAwKSB7XHJcbiAgICAgIHJldHVybiA0MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDgwMDApIHtcclxuICAgICAgcmV0dXJuIDMwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAyMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkFzdGVyb2lkcyhhbW91bnQpIHtcclxuICAgIHZhciBpID0gMDtcclxuICAgIGRvIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgYXN0ZXJvaWRzW2lkXSA9IG5ldyBBc3Rlcm9pZChpZCk7XHJcbiAgICB9IHdoaWxlIChpKysgPD0gYW1vdW50KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduUG93ZXJ1cCgpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhwb3dlcnVwcykubGVuZ3RoIDwgMykge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBwb3dlcnVwc1tpZF0gPSBuZXcgUG93ZXJ1cChpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnYW1lT3ZlcigpIHtcclxuICAgICRzY29wZS5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO1xyXG4gICAgfVxyXG4gICAgc2hvdHMgPSB7fTtcclxuICAgIGlmICgkc2NvcGUubG9nZ2VkSW4pIHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzIDwgJHNjb3BlLnNjb3JlKSB7XHJcbiAgICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyLmhpZ2hzY29yZS5hc3Rlcm9pZHMgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgICAgR2FtZVN2Yy5zZXRIaWdoc2NvcmUoJ2FzdGVyb2lkcycsICRzY29wZS5jdXJyZW50VXNlci5faWQsICRzY29wZS5zY29yZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaHNjb3JlIDwgJHNjb3BlLnNjb3JlKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hzY29yZSA9ICRzY29wZS5zY29yZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblx0Ly8gU3RhcnQgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgYW5kXHJcblx0Ly8gZHJhdyBjYW52YXMuXHJcblxyXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHQvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG5cdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHQvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG5cclxuXHRcdC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcblx0XHRyZXNpemVDYW52YXMoKTtcclxuXHR9XHJcblx0Ly8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG5cdC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG5cdC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG5cdGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuXHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTAgOiAxMDUpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuXHJcbiAgdmFyIHRhbGx5ID0gMDtcclxuICB2YXIgZGlyZWN0aW9uID0gdHJ1ZTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgaWYgKHNob3RzW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvdHNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgIGFzdGVyb2lkc1tpXS5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gcG93ZXJ1cHMpIHtcclxuICAgICAgcG93ZXJ1cHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGV4cGxvc2lvbnMpIHtcclxuICAgICAgaWYgKGV4cGxvc2lvbnNbaV0ubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBleHBsb3Npb25zW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV4cGxvc2lvbnNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBldmFsdWF0ZUtleXMoKTtcclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzcGFjZXNoaXAubW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIGNhbnZhcy53aWR0aCwgMCk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgnMCcsICdyZ2IoJyArIE1hdGguZmxvb3IoMjU2IC0gMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJyknKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKCcwLjI1JywgJ3JnYignICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigyNTYgLSAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnKScpO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoJzAuNScsICdyZ2IoJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMjU2IC0gMjU2ICogdGFsbHkgLyAxMDApICsgJyknKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKCcwLjc1JywgJ3JnYignICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigyNTYgLSAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnKScpO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoJzEuMCcsICdyZ2IoJyArIE1hdGguZmxvb3IoMjU2IC0gMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJyknKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgICBjdHguZm9udD0nNjBweCBNb25vdG9uJztcclxuICAgICAgY3R4LmZpbGxUZXh0KCdBc3Rlcm9pZHMnLCBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KCdBc3Rlcm9pZHMnKS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcclxuICAgICAgY3R4LmZvbnQ9JzIwcHggQWxkcmljaCc7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnUHJlc3Mgc3BhY2UgdG8gc3RhcnQnLCBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KCdQcmVzcyBzcGFjZSB0byBzdGFydCcpLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIgKyAyMCk7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyJywgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dCgnRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyJykud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC0gMzApO1xyXG4gICAgfVxyXG4gICAgdGFsbHkgKz0gZGlyZWN0aW9uID8gMSA6IC0xO1xyXG4gICAgaWYgKHRhbGx5ID4gMTAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMTAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAodGFsbHkgPCAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMDtcclxuICAgICAgZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuICB9XHJcblxyXG4gICRzY29wZS5zcGFjZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiYXN0ZXJvaWRzL3NwYWNlJyArIHNwYWNlICsgJy5qcGdcIiknXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG5cclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0J1YmJsZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZXMtcGFnZScpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB2YXIgYnViYmxlcyA9IFtdO1xyXG4gIHZhciBjb2xvcnMgPSBbJyNmZmMzMDAnLCcjZmY1NzMzJywnI2M3MDAzOScsJyM5MDBjM2UnLCcjNTcxODQ1J107XHJcblxyXG4gIGZ1bmN0aW9uIEJ1YmJsZSgpIHtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAwO1xyXG4gICAgdGhpcy5yYWRpdXMgPSAxO1xyXG4gICAgdGhpcy5leHBhbmRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgdGhpcy5jaXJjdW1mZXJlbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNTApICsgNTtcclxuICAgIHRoaXMubWF4UmFkaXVzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjAwKSArIDIwO1xyXG4gICAgdGhpcy54ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoKTtcclxuICAgIHRoaXMueSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGhpcy52eCA9IChNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSk7XHJcbiAgICB0aGlzLnZ5ID0gKE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBidWJibGVzLmZvckVhY2goZnVuY3Rpb24oYnViYmxlKSB7XHJcbiAgICAgIHZhciBjb2xvciA9IGNvbG9yc1tNYXRoLnJvdW5kKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMoYnViYmxlLngsIGJ1YmJsZS55LCBidWJibGUucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbTWF0aC5yb3VuZChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3JzW2NvbG9ycy5sZW5ndGggLSBNYXRoLnJvdW5kKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gYnViYmxlLmNpcmN1bWZlcmVuY2UgKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cztcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWx0ZXJCdWJibGVzKCkge1xyXG4gICAgYnViYmxlcy5wdXNoKG5ldyBCdWJibGUoKSk7XHJcbiAgICBidWJibGVzID0gYnViYmxlcy5maWx0ZXIoZnVuY3Rpb24gKGJ1YmJsZSkge1xyXG4gICAgICBpZiAoYnViYmxlLnJhZGl1cyA9PT0gYnViYmxlLm1heFJhZGl1cykge1xyXG4gICAgICAgIGJ1YmJsZS5leHBhbmRpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBidWJibGUueCArPSBidWJibGUudnggKiBidWJibGUuc3BlZWQ7XHJcbiAgICAgIGJ1YmJsZS55ICs9IGJ1YmJsZS52eSAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnJhZGl1cyArPSAoYnViYmxlLmV4cGFuZGluZyA/IDEgOiAtMSk7XHJcbiAgICAgIHJldHVybiBidWJibGUucmFkaXVzID4gMDtcclxuICAgIH0pO1xyXG4gICAgZHJhdygpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG5cclxuXHJcblx0KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG5cdFx0Ly8gZHJhdyBjYW52YXMuXHJcblx0XHRpbml0aWFsaXplKCk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHRcdC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuXHRcdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0XHR9XHJcblx0XHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0XHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHRcdC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG5cdFx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG5cdFx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdFx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTUgOiAxMTEpO1xyXG5cdFx0fVxyXG5cclxuXHR9KSgpO1xyXG5cclxuXHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ0NoYXJhZGVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHQkc2NvcGUuc2VsZWN0V29yZCA9IGNhdGVnb3J5ID0+IHtcclxuXHRcdCRzY29wZS53b3JkID1cclxuXHRcdFx0JHNjb3BlLmNoYXJhZGVzW2NhdGVnb3J5XVtcclxuXHRcdFx0XHRNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldLmxlbmd0aClcclxuXHRcdFx0XTtcclxuXHRcdGNvbnNvbGUubG9nKCRzY29wZS53b3JkKTtcclxuXHR9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkNvbnRhY3RDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEVtYWlsU3ZjKSB7XHJcbiAgJHNjb3BlLm9wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU3BhbVwiLFxyXG4gICAgICB0ZXh0OiBcIkkgYW0gYSBzcGFtIGJvdCBhbmQgYXV0b21hdGljYWxseSBjaGVjayB0aGUgZmlyc3Qgb3B0aW9uIEkgZmluZCFcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiT3Bwb3J0dW5pdHlcIixcclxuICAgICAgdGV4dDogXCJZb3Ugc2VlbSB0byBoYXZlIHRoZSBza2lsbHMgSSBzZWVrLCBJJ2QgbGlrZSB0byB0YWxrIGFib3V0IHNvbWUgb3Bwb3J0dW5pdGllcy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUmVzdW1lXCIsXHJcbiAgICAgIHRleHQ6IFwiSSBkaWcgdGhlIHJlc3VtZSwgaG93IGRpZCB5b3UgbWFrZSBpdD9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiT3RoZXJcIixcclxuICAgICAgdGV4dDogXCJTdW10aW4gZWxzZSFcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgJHNjb3BlLmNvbnRhY3QgPSB7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBwaG9uZTogXCJcIixcclxuICAgIGFib3V0OiBcIlwiLFxyXG4gICAgbWVzc2FnZTogXCJcIixcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS5zZW5kaW5nID0gdHJ1ZTtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcclxuICAgIEVtYWlsU3ZjLnNlbmQoe1xyXG4gICAgICBlbWFpbDogJHNjb3BlLmNvbnRhY3QuZW1haWwsXHJcbiAgICAgIG5hbWU6ICRzY29wZS5jb250YWN0Lm5hbWUsXHJcbiAgICAgIHBob25lOiAkc2NvcGUuY29udGFjdC5waG9uZSxcclxuICAgICAgYWJvdXQ6ICRzY29wZS5jb250YWN0LmFib3V0LFxyXG4gICAgICBtZXNzYWdlOiAkc2NvcGUuY29udGFjdC5tZXNzYWdlLFxyXG4gICAgfSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbnQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTUy4gc3RhdHVzPSVkLCB0ZXh0PSVzXCIsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UudGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZBSUxFRC4gZXJyb3I9XCIsIGVycik7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignRXhwZXJpZW5jZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICRzY29wZS5nZXRTa2lsbCA9IGZ1bmN0aW9uKHNraWxsQ29kZSkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2tpbGxzKSByZXR1cm47XHJcbiAgICByZXR1cm4gJHNjb3BlLnNraWxscy5maW5kKGZ1bmN0aW9uKHNraWxsKSB7XHJcbiAgICAgIHJldHVybiBza2lsbC5jb2RlID09PSBza2lsbENvZGU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignSG9iYmllc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAkLmdldEpTT04oJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vdXNlci9iZWxnb2NhbmFkaWFuL2Fib3V0Ly5qc29uJywgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRIb2JieSA9ICRzY29wZS5ob2JiaWVzWzBdO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0SG9iYnkgPSBmdW5jdGlvbiAoaG9iYnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gaG9iYnk7XHJcbiAgICAkc2NvcGUuaG9iYnlTZWxlY3RvclZpc2libGUgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd0hvYmJ5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpIHtcclxuICAgIGlmICghdmFsdWUuaW1hZ2VzKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdmFsdWUuaW1hZ2VzLmxlbmd0aCA+IDA7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignTGVtbWluZ3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgR2FtZVN2Yykge1xyXG5cclxuICB2YXIgTEVGVCA9IDA7XHJcbiAgdmFyIFJJR0hUID0gMTtcclxuXHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZW1taW5ncy1wYWdlJyk7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIHZhciBsZW1taW5nc0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgbGVtbWluZ3NJbWFnZS5zcmMgPSAnbGVtbWluZ3MvbGVtbWluZ3MucG5nJztcclxuICB2YXIgZGVjb3JJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGRlY29ySW1hZ2Uuc3JjID0gJ2xlbW1pbmdzL2RlY29yLnBuZyc7XHJcbiAgdmFyIGxlbW1pbmdzID0ge307XHJcbiAgdmFyIHN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgdmFyIGFjdGlvbnMgPSB7XHJcbiAgICB3YWxrOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMF0sXHJcbiAgICAgIGVuZDogWzMyMCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGh1aDoge1xyXG4gICAgICBzdGFydDogWzMyMCwgMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZmFsbDoge1xyXG4gICAgICBzdGFydDogWzAsIDgwXSxcclxuICAgICAgZW5kOiBbMTYwLCAxMDBdLFxyXG4gICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGZseToge1xyXG4gICAgICBzdGFydDogWzE2MCwgODBdLFxyXG4gICAgICBlbmQ6IFs0ODAsIDExMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc3RvcDoge1xyXG4gICAgICBzdGFydDogWzAsIDEyMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTQwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgY2xpbWI6IHtcclxuICAgICAgc3RhcnQ6IFswLCAxNjBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDE4NV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMjVdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwdW5jaDoge1xyXG4gICAgICBzdGFydDogWzAsIDI0MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMzAwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZGlnOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMzIwXSxcclxuICAgICAgZW5kOiBbMzIwLCAzNDVdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBMZW1taW5nKGluaXQpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNhbnZhcy53aWR0aCAtIDIwMCkpICsgMTAwLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLmhlaWdodCAtIDIwMCkpICsgMTAwXTtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSAqIDIgPiAxID8gTEVGVCA6IFJJR0hUO1xyXG4gICAgdGhpcy5hY3QgPSBmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb25zW2FjdGlvbl07XHJcbiAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gKDIwICogKHRoaXMuYWN0aW9uLnJvd3MgLSAxKSkpIC8gdGhpcy5hY3Rpb24ucm93cztcclxuICAgICAgdGhpcy5hbmltYXRpb24gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuYWN0KGluaXQpO1xyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSwgdGhpcy5wb3NpdGlvblsxXSk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gTEVGVCkge1xyXG4gICAgICAgIGN0eC5zY2FsZSgtMSwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UobGVtbWluZ3NJbWFnZSwgKHRoaXMud2lkdGggKiBjb2x1bW4pICsgdGhpcy5hY3Rpb24uc3RhcnRbMF0sICgodGhpcy5oZWlnaHQgKyAyMCkgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgaWYgKHRoaXMuYWN0aW9uLnJldmVyc2UpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlLS07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICF0aGlzLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICBpZiAodGhpcy5jeWNsZSA+PSB0aGlzLmFjdGlvbi5jb2x1bW5zICogdGhpcy5hY3Rpb24ucm93cykge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGF0Y2goKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gWzIwLCAyMF07XHJcbiAgICB0aGlzLmFjdGlvbiA9IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbODIsIDUwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgIHJvd3M6IDEwXHJcbiAgICB9XHJcbiAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICB0aGlzLmhlaWdodCA9ICh0aGlzLmFjdGlvbi5lbmRbMV0gLSB0aGlzLmFjdGlvbi5zdGFydFsxXSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICB0aGlzLm9wZW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgdmFyIGNvbHVtbiwgcm93O1xyXG4gICAgICBpZiAoc3RhcnRlZCkge1xyXG4gICAgICAgIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3IodGhpcy5jeWNsZSAvIHRoaXMuYWN0aW9uLmNvbHVtbnMpO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgOSkge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb2x1bW4gPSAwO1xyXG4gICAgICAgIHJvdyA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgY3R4LmRyYXdJbWFnZShkZWNvckltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKHRoaXMuaGVpZ2h0ICogcm93KSArIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gMSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25MZW1taW5nKCkge1xyXG4gICAgT2JqZWN0LmtleXMoYWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgbGVtbWluZ3NbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKV0gPSBuZXcgTGVtbWluZyhhY3Rpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdHJlc2l6ZUNhbnZhcygpO1xyXG5cdH1cclxuXHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0Ly8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcblx0Ly8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcblx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG5cdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1MCA6IDEwNSk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbiAgc3Bhd25MZW1taW5nKCk7XHJcbiAgbGV0IGhhdGNoID0gbmV3IEhhdGNoKClcclxuICBkcmF3KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBpZiAoIXN0YXJ0ZWQpIHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguZm9udD0nNDBweCBNb25vdG9uJztcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9ICcxMCc7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcclxuICAgICAgY3R4LnJlY3QoMTUsIGNhbnZhcy5oZWlnaHQgLSA0NSwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLndpZHRoICsgMjAsIGN0eC5tZWFzdXJlVGV4dCgnU3RhcnQnKS5oZWlnaHQgKyBjYW52YXMuaGVpZ2h0IC0gNDUpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ1N0YXJ0JywgMjAsIGNhbnZhcy5oZWlnaHQgLSA1MCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKHZhciBpIGluIGxlbW1pbmdzKSB7XHJcbiAgICAgICAgbGVtbWluZ3NbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYXRjaC5vcGVuKCk7XHJcbiAgICBzdGFydGVkID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGRyYXcoKTtcclxuICAgIH0sIDE1MCk7XHJcbiAgfVxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMaXN0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIENhdGVnb3JpZXNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IHRydWU7XHJcblxyXG4gICRzY29wZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5nZXRDYXRlZ29yaWVzKClcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICRzY29wZS50YXNrcyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpIGluICRzY29wZS5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaiBpbiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrcykge1xyXG4gICAgICAgICAgJHNjb3BlLnRhc2tzLnB1c2goe1xyXG4gICAgICAgICAgICBcImNhdGVnb3J5XCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUsXHJcbiAgICAgICAgICAgIFwidGFza1wiOiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrc1tqXS5uYW1lXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RDYXRlZ29yeSA9IGZ1bmN0aW9uKGNhdGVnb3J5KSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkVGFza3MgPSBbXTtcclxuICAgICRzY29wZS5zZWxlY3RhYmxlVGFza3MgPSBbXTtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcy5wdXNoKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgIH1cclxuICAgICRzY29wZS5zaG93Q2F0ZWdvcnkgPSBmYWxzZTtcclxuICAgICRzY29wZS5lbnRlcmVkQ2F0ZWdvcnkgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUubmV3Q2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSA9PT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkoJHNjb3BlLmNhdGVnb3JpZXNbaV0pO1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZENhdGVnb3J5KHtcclxuICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuaW5pdCgpO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0ubmFtZSA9PT0gdGFzaykge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0VGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5Lm5hbWUsIHtcclxuICAgICAgICB0YXNrOiB0YXNrXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLnB1c2goeyBuYW1lOiB0YXNrIH0pO1xyXG4gICAgICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1skc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRUYXNrID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUudW5zZWxlY3RUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RhYmxlVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5hZGRUYXNrID0gZnVuY3Rpb24odGFza0xpc3QsIHRhc2spIHtcclxuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnJlbW92ZVRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3Quc3BsaWNlKHRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zdGFydFByaW9yaXRpemluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5zZXRQcmlvcml0eUxpc3QoJHNjb3BlLnNlbGVjdGVkVGFza3MpO1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy9wcmlvcml0aXplJyk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldFF1ZXN0aW9ucyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2VsZWN0ZWRUYXNrcykgcmV0dXJuICcnO1xyXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9ICRzY29wZS5zZWxlY3RlZFRhc2tzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgY291bnRlciArPSBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignTG9naW5DdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgRmlyZWJhc2VVSSBXaWRnZXQgdXNpbmcgRmlyZWJhc2UuXHJcbiAgdmFyIHVpID0gbmV3IGZpcmViYXNldWkuYXV0aC5BdXRoVUkoZmlyZWJhc2UuYXV0aCgpKTtcclxuXHJcbiAgJHNjb3BlLiRvbignbG9nb3V0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB1aS5yZXNldCgpO1xyXG4gICAgc3RhcnRVSSgpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydFVJKCkge1xyXG4gICAgdWkuc3RhcnQoJyNmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyJywge1xyXG4gICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBzaWduSW5TdWNjZXNzOiBmdW5jdGlvbiAoY3VycmVudFVzZXIsIGNyZWRlbnRpYWwsIHJlZGlyZWN0VXJsKSB7XHJcbiAgICAgICAgICAvLyBObyByZWRpcmVjdC5cclxuICAgICAgICAgIGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5hdXRoKClcclxuICAgICAgICAgICAgLmN1cnJlbnRVc2VyLmdldElkVG9rZW4odHJ1ZSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGlkVG9rZW4pIHtcclxuICAgICAgICAgICAgICBVc2VyU3ZjLmF1dGhlbnRpY2F0ZSh7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogY3VycmVudFVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogY3VycmVudFVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwaG90b1VSTDogY3VycmVudFVzZXIucGhvdG9VUkwsXHJcbiAgICAgICAgICAgICAgICBlbWFpbFZlcmlmaWVkOiBjdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkLFxyXG4gICAgICAgICAgICAgICAgaWRUb2tlbjogaWRUb2tlbixcclxuICAgICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdCgnbG9naW4nLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgJCgnI21vZGFsLWxvZ2luJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgLy8kbG9jYXRpb24ucGF0aCgnLycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KCdwb3B1cCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTG9naW4gRmFpbGVkJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYWxlcnQtZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBzaWduSW5GYWlsdXJlIGNhbGxiYWNrIG11c3QgYmUgcHJvdmlkZWQgdG8gaGFuZGxlIG1lcmdlIGNvbmZsaWN0cyB3aGljaFxyXG4gICAgICAgIC8vIG9jY3VyIHdoZW4gYW4gZXhpc3RpbmcgY3JlZGVudGlhbCBpcyBsaW5rZWQgdG8gYW4gYW5vbnltb3VzIHVzZXIuXHJcbiAgICAgICAgc2lnbkluRmFpbHVyZTogZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBGb3IgbWVyZ2UgY29uZmxpY3RzLCB0aGUgZXJyb3IuY29kZSB3aWxsIGJlXHJcbiAgICAgICAgICAvLyAnZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdCcuXHJcbiAgICAgICAgICBpZiAoZXJyb3IuY29kZSAhPSAnZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gVGhlIGNyZWRlbnRpYWwgdGhlIHVzZXIgdHJpZWQgdG8gc2lnbiBpbiB3aXRoLlxyXG4gICAgICAgICAgdmFyIGNyZWQgPSBlcnJvci5jcmVkZW50aWFsO1xyXG4gICAgICAgICAgLy8gQ29weSBkYXRhIGZyb20gYW5vbnltb3VzIHVzZXIgdG8gcGVybWFuZW50IHVzZXIgYW5kIGRlbGV0ZSBhbm9ueW1vdXNcclxuICAgICAgICAgIC8vIHVzZXIuXHJcbiAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgIC8vIEZpbmlzaCBzaWduLWluIGFmdGVyIGRhdGEgaXMgY29waWVkLlxyXG4gICAgICAgICAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoQ3JlZGVudGlhbChjcmVkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVpU2hvd246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vIFRoZSB3aWRnZXQgaXMgcmVuZGVyZWQuXHJcbiAgICAgICAgICAvLyBIaWRlIHRoZSBsb2FkZXIuXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzaWduSW5TdWNjZXNzVXJsOiAnL2hvbWUnLFxyXG4gICAgICBzaWduSW5PcHRpb25zOiBbXHJcbiAgICAgICAgLy9maXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICAvLyBXaWxsIHVzZSBwb3B1cCBmb3IgSURQIFByb3ZpZGVycyBzaWduLWluIGZsb3cgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCwgcmVkaXJlY3QuXHJcbiAgICAgIHNpZ25JbkZsb3c6ICdwb3B1cCcsXHJcbiAgICAgIC8vIE90aGVyIGNvbmZpZyBvcHRpb25zLi4uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0VUkoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUG9zdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGZpbHRlciwgUG9zdHNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XHJcbiAgICAgIFBvc3RzU3ZjLmNyZWF0ZSh7XHJcbiAgICAgICAgYm9keTogJHNjb3BlLnBvc3RCb2R5XHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgICAgICAkc2NvcGUucG9zdEJvZHkgPSBudWxsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBQb3N0c1N2Yy5mZXRjaCgpXHJcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUucG9zdHMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKCd3czpuZXdfcG9zdCcsIGZ1bmN0aW9uIChfLCBwb3N0KSB7XHJcbiAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgUG9zdHNTdmMuZ2V0UG9zdChwb3N0KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUucG9zdHMudW5zaGlmdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1ByaW9yaXRpemVDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBDYXRlZ29yaWVzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5wcmlvcml0eUxpc3QgPSBDYXRlZ29yaWVzU3ZjLmdldFByaW9yaXR5TGlzdCgpO1xyXG5cclxuICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICRsb2NhdGlvbi5wYXRoKCcvbGlzdHMnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24gPSAxO1xyXG4gICAgJHNjb3BlLmN1cnJlbnRRdWVzdGlvbiA9IDE7XHJcbiAgICAkc2NvcGUuZG9uZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLm1ha2VDaG9pY2UgPSBmdW5jdGlvbihjaG9pY2UpIHtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5pZCA9PT0gJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24pIHtcclxuICAgICAgICAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA9IGNob2ljZSA9PT0gMSA/ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uZmlyc3RDaG9pY2UgOiAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLnNlY29uZENob2ljZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uID09PSAkc2NvcGUuY3VycmVudFF1ZXN0aW9uKSB7XHJcbiAgICAgICRzY29wZS5jdXJyZW50UXVlc3Rpb24gPSAkc2NvcGUuY3VycmVudFF1ZXN0aW9uID09PSAkc2NvcGUucHJpb3JpdHlMaXN0Lmxlbmd0aCA/IDEgOiAkc2NvcGUuY3VycmVudFF1ZXN0aW9uICsgMTtcclxuICAgIH1cclxuICAgICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uID0gJHNjb3BlLmN1cnJlbnRRdWVzdGlvbjtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yIChpIGluICRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlID09PSAnJykge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICAkKCcjcHJpb3JpdGl6ZUNob2ljZXMnKS5oaWRlKDMwMCk7XHJcbiAgICAgICRzY29wZS5kb25lID0gdHJ1ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0QnV0dG9uVmFsdWUgPSBmdW5jdGlvbihjaG9pY2UpIHtcclxuICAgIGlmICghJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5wcmlvcml0eUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uaWQgPT09ICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGNob2ljZSA9PT0gMSA/ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uZmlyc3RDaG9pY2UgOiAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLnNlY29uZENob2ljZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RRdWVzdGlvbiA9IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbiA9IHF1ZXN0aW9uO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRGaWx0ZXJlZFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCEkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIHJldHVybiAkc2NvcGUucHJpb3JpdHlMaXN0XHJcbiAgICAgIC5zb3J0KGZ1bmN0aW9uKGEsIGIpeyByZXR1cm4gYS5pZC1iLmlkOyB9KVxyXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKHF1ZXN0aW9uKSB7IHJldHVybiBxdWVzdGlvbi5jaG9pY2UgIT09ICcnIHx8IHF1ZXN0aW9uLmlkID09PSAkc2NvcGUuY3VycmVudFF1ZXN0aW9uOyB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0Q2hvaWNlc01hZGUgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICB2YXIgY2hvaWNlc01hZGUgPSAwO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSAhPT0gJycpIHtcclxuICAgICAgICBjaG9pY2VzTWFkZSsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2hvaWNlc01hZGU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldEJ1dHRvbkNsYXNzID0gZnVuY3Rpb24oY2hvaWNlKSB7XHJcbiAgICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmlkID09PSAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbikge1xyXG4gICAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA9PT0gJycpIHtcclxuICAgICAgICAgIHJldHVybiAnYnRuLXByaW1hcnknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hvaWNlID09PSAxKSB7XHJcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5maXJzdENob2ljZSA9PT0gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgPyAnYnRuLXN1Y2Nlc3MnIDogJ2J0bi1kYW5nZXInO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5zZWNvbmRDaG9pY2UgPT09ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlID8gJ2J0bi1zdWNjZXNzJyA6ICdidG4tZGFuZ2VyJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd0Nob2ljZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICQoJyNwcmlvcml0aXplQ2hvaWNlcycpLnNob3coMTAwMCk7XHJcbiAgICAkKCcjcmV2aWV3Q2hvaWNlcycpLmhpZGUoKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhcnRDbGljayA9IGZ1bmN0aW9uKCBldmVudCApIHtcclxuICAgIGlmICggJHNjb3BlLmNoYXJ0ICkge1xyXG4gICAgICAvLyBEaWZmZXJlbnQgbWV0aG9kcyBkZXBlbmRpbmcgb24gY2hhcnQgdHlwZVxyXG4gICAgICAvL2NvbnNvbGUubG9nKCAkc2NvcGUuY2hhcnQuZ2V0UG9pbnRzQXRFdmVudCggZXZlbnQgKSApOyAvLyBmb3IgUG9pbnRzXHJcbiAgICAgIGNvbnNvbGUubG9nKCAkc2NvcGUuY2hhcnQuZ2V0U2VnbWVudHNBdEV2ZW50KCBldmVudCApICk7IC8vIGZvciBTZWdtZW50c1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zaG93UmVzdWx0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICRzY29wZS5kYXRhID0gW107XHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgLy8gU2V0cyB0aGUgY2hhcnQgdG8gYmUgcmVzcG9uc2l2ZVxyXG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG5cclxuICAgICAgLy9Cb29sZWFuIC0gV2hldGhlciB3ZSBzaG91bGQgc2hvdyBhIHN0cm9rZSBvbiBlYWNoIHNlZ21lbnRcclxuICAgICAgc2VnbWVudFNob3dTdHJva2UgOiB0cnVlLFxyXG5cclxuICAgICAgLy9TdHJpbmcgLSBUaGUgY29sb3VyIG9mIGVhY2ggc2VnbWVudCBzdHJva2VcclxuICAgICAgc2VnbWVudFN0cm9rZUNvbG9yIDogJyNmZmYnLFxyXG5cclxuICAgICAgLy9OdW1iZXIgLSBUaGUgd2lkdGggb2YgZWFjaCBzZWdtZW50IHN0cm9rZVxyXG4gICAgICBzZWdtZW50U3Ryb2tlV2lkdGggOiAyLFxyXG5cclxuICAgICAgLy9OdW1iZXIgLSBUaGUgcGVyY2VudGFnZSBvZiB0aGUgY2hhcnQgdGhhdCB3ZSBjdXQgb3V0IG9mIHRoZSBtaWRkbGVcclxuICAgICAgcGVyY2VudGFnZUlubmVyQ3V0b3V0IDogMCwgLy8gVGhpcyBpcyAwIGZvciBQaWUgY2hhcnRzXHJcblxyXG4gICAgICAvL051bWJlciAtIEFtb3VudCBvZiBhbmltYXRpb24gc3RlcHNcclxuICAgICAgYW5pbWF0aW9uU3RlcHMgOiAxMDAsXHJcblxyXG4gICAgICAvL1N0cmluZyAtIEFuaW1hdGlvbiBlYXNpbmcgZWZmZWN0XHJcbiAgICAgIGFuaW1hdGlvbkVhc2luZyA6ICdlYXNlT3V0Qm91bmNlJyxcclxuXHJcbiAgICAgIC8vQm9vbGVhbiAtIFdoZXRoZXIgd2UgYW5pbWF0ZSB0aGUgcm90YXRpb24gb2YgdGhlIERvdWdobnV0XHJcbiAgICAgIGFuaW1hdGVSb3RhdGUgOiB0cnVlLFxyXG5cclxuICAgICAgLy9Cb29sZWFuIC0gV2hldGhlciB3ZSBhbmltYXRlIHNjYWxpbmcgdGhlIERvdWdobnV0IGZyb20gdGhlIGNlbnRyZVxyXG4gICAgICBhbmltYXRlU2NhbGUgOiBmYWxzZSxcclxuXHJcbiAgICAgIC8vU3RyaW5nIC0gQSBsZWdlbmQgdGVtcGxhdGVcclxuICAgICAgbGVnZW5kVGVtcGxhdGUgOiAnPGgzIGNsYXNzPVwidGMtY2hhcnQtanMtbGVnZW5kXCIgc3R5bGU9XCJwYWRkaW5nOjVweFwiPjwlIGZvciAodmFyIGk9MDsgaTxzZWdtZW50cy5sZW5ndGg7IGkrKyl7JT48ZGl2IGNsYXNzPVwibGFiZWxcIiBzdHlsZT1cImZsb2F0OmxlZnQ7bWFyZ2luOjVweDtiYWNrZ3JvdW5kLWNvbG9yOjwlPXNlZ21lbnRzW2ldLmZpbGxDb2xvciU+XCI+PCVpZihzZWdtZW50c1tpXS5sYWJlbCl7JT48JT1zZWdtZW50c1tpXS5sYWJlbCU+PCV9JT48L2Rpdj48JX0lPjwvaDM+J1xyXG4gICAgfTtcclxuICAgIGZvciAodmFyIGkgaW4gQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuY2hvaWNlc1tpXS52b3RlcyA9IDA7XHJcbiAgICAgIGZvciAodmFyIGogaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICAgIGlmIChDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0ubmFtZSA9PT0gJHNjb3BlLnByaW9yaXR5TGlzdFtqXS5jaG9pY2UpIHtcclxuICAgICAgICAgIENhdGVnb3JpZXNTdmMuY2hvaWNlc1tpXS52b3RlcysrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYS52b3RlcyA8IGIudm90ZXM7IH0pO1xyXG4gICAgZm9yIChpIGluIENhdGVnb3JpZXNTdmMuY2hvaWNlcykge1xyXG4gICAgICAkc2NvcGUuZGF0YS5wdXNoKHtcclxuICAgICAgICB2YWx1ZTogQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLnZvdGVzLFxyXG4gICAgICAgIGxhYmVsOiBDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0ubmFtZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICQoJyNwcmlvcml0aXplUmVzdWx0JykuaGlkZSgpO1xyXG4gICAgJCgnI3ByaW9yaXRpemVDaG9pY2VzJykuaGlkZSgpO1xyXG4gICAgJCgnI3ByaW9yaXR5UmVzdWx0cycpLnNob3coMTAwMCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUHJvZmlsZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcbiAgaWYgKCEkc2NvcGUuY3VycmVudFVzZXIpIHtcclxuICAgICRsb2NhdGlvbi5wYXRoKFwiL1wiKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvdW50cmllcyA9IFtcclxuICAgIHsgbmFtZTogXCJBbmRvcnJhXCIsIGZsYWc6IFwiZmxhZy1hZFwiLCB0aWRiaXQ6IFwiXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgQXJhYiBFbWlyYXRlc1wiLCBmbGFnOiBcImZsYWctYWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFmZ2hhbmlzdGFuXCIsIGZsYWc6IFwiZmxhZy1hZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLCBmbGFnOiBcImZsYWctYWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFuZ3VpbGxhXCIsIGZsYWc6IFwiZmxhZy1haVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWxiYW5pYVwiLCBmbGFnOiBcImZsYWctYWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFybWVuaWFcIiwgZmxhZzogXCJmbGFnLWFtXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbmdvbGFcIiwgZmxhZzogXCJmbGFnLWFvXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbnRhcmN0aWNhXCIsIGZsYWc6IFwiZmxhZy1hcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXJnZW50aW5hXCIsIGZsYWc6IFwiZmxhZy1hclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW1lcmljYW4gU29tb2FcIiwgZmxhZzogXCJmbGFnLWFzXCIgfSxcclxuICAgIHsgbmFtZTogXCJBdXN0cmlhXCIsIGZsYWc6IFwiZmxhZy1hdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXVzdHJhbGlhXCIsIGZsYWc6IFwiZmxhZy1hdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXJ1YmFcIiwgZmxhZzogXCJmbGFnLWF3XCIgfSxcclxuICAgIHsgbmFtZTogXCLDhWxhbmQgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctYXhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF6ZXJiYWlqYW5cIiwgZmxhZzogXCJmbGFnLWF6XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsIGZsYWc6IFwiZmxhZy1iYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFyYmFkb3NcIiwgZmxhZzogXCJmbGFnLWJiXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYW5nbGFkZXNoXCIsIGZsYWc6IFwiZmxhZy1iZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVsZ2l1bVwiLCBmbGFnOiBcImZsYWctYmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1cmtpbmEgRmFzb1wiLCBmbGFnOiBcImZsYWctYmZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1bGdhcmlhXCIsIGZsYWc6IFwiZmxhZy1iZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFocmFpblwiLCBmbGFnOiBcImZsYWctYmhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1cnVuZGlcIiwgZmxhZzogXCJmbGFnLWJpXCIgfSxcclxuICAgIHsgbmFtZTogXCJCZW5pblwiLCBmbGFnOiBcImZsYWctYmpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEJhcnRow6lsZW15XCIsIGZsYWc6IFwiZmxhZy1ibFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVybXVkYVwiLCBmbGFnOiBcImZsYWctYm1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJydW5laSBcIiwgZmxhZzogXCJmbGFnLWJuXCIgfSxcclxuICAgIHsgbmFtZTogXCJCb2xpdmlhLCBQbHVyaW5hdGlvbmFsIFN0YXRlIG9mXCIsIGZsYWc6IFwiZmxhZy1ib1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmFcIiwgZmxhZzogXCJmbGFnLWJxXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcmF6aWxcIiwgZmxhZzogXCJmbGFnLWJyXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYWhhbWFzXCIsIGZsYWc6IFwiZmxhZy1ic1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmh1dGFuXCIsIGZsYWc6IFwiZmxhZy1idFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm91dmV0IElzbGFuZFwiLCBmbGFnOiBcImZsYWctYnZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvdHN3YW5hXCIsIGZsYWc6IFwiZmxhZy1id1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVsYXJ1c1wiLCBmbGFnOiBcImZsYWctYnlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGl6ZVwiLCBmbGFnOiBcImZsYWctYnpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbmFkYVwiLCBmbGFnOiBcImZsYWctY2FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1jY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29uZ28sIHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZVwiLCBmbGFnOiBcImZsYWctY2RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctY2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbmdvXCIsIGZsYWc6IFwiZmxhZy1jZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dpdHplcmxhbmRcIiwgZmxhZzogXCJmbGFnLWNoXCIgfSxcclxuICAgIHsgbmFtZTogXCJDw7R0ZSBkJ0l2b2lyZVwiLCBmbGFnOiBcImZsYWctY2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvb2sgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctY2tcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoaWxlXCIsIGZsYWc6IFwiZmxhZy1jbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FtZXJvb25cIiwgZmxhZzogXCJmbGFnLWNtXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGluYVwiLCBmbGFnOiBcImZsYWctY25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbG9tYmlhXCIsIGZsYWc6IFwiZmxhZy1jb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29zdGEgUmljYVwiLCBmbGFnOiBcImZsYWctY3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN1YmFcIiwgZmxhZzogXCJmbGFnLWN1XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYWJvIFZlcmRlXCIsIGZsYWc6IFwiZmxhZy1jdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3VyYcOnYW9cIiwgZmxhZzogXCJmbGFnLWN3XCIgfSxcclxuICAgIHsgbmFtZTogXCJDaHJpc3RtYXMgSXNsYW5kXCIsIGZsYWc6IFwiZmxhZy1jeFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3lwcnVzXCIsIGZsYWc6IFwiZmxhZy1jeVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3plY2ggUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWN6XCIgfSxcclxuICAgIHsgbmFtZTogXCJHZXJtYW55XCIsIGZsYWc6IFwiZmxhZy1kZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGppYm91dGlcIiwgZmxhZzogXCJmbGFnLWRqXCIgfSxcclxuICAgIHsgbmFtZTogXCJEZW5tYXJrXCIsIGZsYWc6IFwiZmxhZy1ka1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRG9taW5pY2FcIiwgZmxhZzogXCJmbGFnLWRtXCIgfSxcclxuICAgIHsgbmFtZTogXCJEb21pbmljYW4gUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWRvXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbGdlcmlhXCIsIGZsYWc6IFwiZmxhZy1kelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWN1YWRvclwiLCBmbGFnOiBcImZsYWctZWNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVzdG9uaWFcIiwgZmxhZzogXCJmbGFnLWVlXCIgfSxcclxuICAgIHsgbmFtZTogXCJFZ3lwdFwiLCBmbGFnOiBcImZsYWctZWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIldlc3Rlcm4gU2FoYXJhXCIsIGZsYWc6IFwiZmxhZy1laFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXJpdHJlYVwiLCBmbGFnOiBcImZsYWctZXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNwYWluXCIsIGZsYWc6IFwiZmxhZy1lc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXRoaW9waWFcIiwgZmxhZzogXCJmbGFnLWV0XCIgfSxcclxuICAgIHsgbmFtZTogXCJGaW5sYW5kXCIsIGZsYWc6IFwiZmxhZy1maVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmlqaVwiLCBmbGFnOiBcImZsYWctZmpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKVwiLCBmbGFnOiBcImZsYWctZmtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2ZcIiwgZmxhZzogXCJmbGFnLWZtXCIgfSxcclxuICAgIHsgbmFtZTogXCJGYXJvZSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1mb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJhbmNlXCIsIGZsYWc6IFwiZmxhZy1mclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2Fib25cIiwgZmxhZzogXCJmbGFnLWdhXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kXCIsIGZsYWc6IFwiZmxhZy1nYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3JlbmFkYVwiLCBmbGFnOiBcImZsYWctZ2RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdlb3JnaWFcIiwgZmxhZzogXCJmbGFnLWdlXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggR3VpYW5hXCIsIGZsYWc6IFwiZmxhZy1nZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3Vlcm5zZXlcIiwgZmxhZzogXCJmbGFnLWdnXCIgfSxcclxuICAgIHsgbmFtZTogXCJHaGFuYVwiLCBmbGFnOiBcImZsYWctZ2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdpYnJhbHRhclwiLCBmbGFnOiBcImZsYWctZ2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZWVubGFuZFwiLCBmbGFnOiBcImZsYWctZ2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdhbWJpYVwiLCBmbGFnOiBcImZsYWctZ21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1aW5lYVwiLCBmbGFnOiBcImZsYWctZ25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YWRlbG91cGVcIiwgZmxhZzogXCJmbGFnLWdwXCIgfSxcclxuICAgIHsgbmFtZTogXCJFcXVhdG9yaWFsIEd1aW5lYVwiLCBmbGFnOiBcImZsYWctZ3FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZWVjZVwiLCBmbGFnOiBcImZsYWctZ3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1nc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VhdGVtYWxhXCIsIGZsYWc6IFwiZmxhZy1ndFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VhbVwiLCBmbGFnOiBcImZsYWctZ3VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1aW5lYS1CaXNzYXVcIiwgZmxhZzogXCJmbGFnLWd3XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdXlhbmFcIiwgZmxhZzogXCJmbGFnLWd5XCIgfSxcclxuICAgIHsgbmFtZTogXCJIb25nIEtvbmdcIiwgZmxhZzogXCJmbGFnLWhrXCIgfSxcclxuICAgIHsgbmFtZTogXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWhtXCIgfSxcclxuICAgIHsgbmFtZTogXCJIb25kdXJhc1wiLCBmbGFnOiBcImZsYWctaG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNyb2F0aWFcIiwgZmxhZzogXCJmbGFnLWhyXCIgfSxcclxuICAgIHsgbmFtZTogXCJIYWl0aVwiLCBmbGFnOiBcImZsYWctaHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkh1bmdhcnlcIiwgZmxhZzogXCJmbGFnLWh1XCIgfSxcclxuICAgIHsgbmFtZTogXCJJbmRvbmVzaWFcIiwgZmxhZzogXCJmbGFnLWlkXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmVsYW5kXCIsIGZsYWc6IFwiZmxhZy1pZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXNyYWVsXCIsIGZsYWc6IFwiZmxhZy1pbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXNsZSBvZiBNYW5cIiwgZmxhZzogXCJmbGFnLWltXCIgfSxcclxuICAgIHsgbmFtZTogXCJJbmRpYVwiLCBmbGFnOiBcImZsYWctaW5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwiLCBmbGFnOiBcImZsYWctaW9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIklyYXFcIiwgZmxhZzogXCJmbGFnLWlxXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmFuLCBJc2xhbWljIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1pclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSWNlbGFuZFwiLCBmbGFnOiBcImZsYWctaXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkl0YWx5XCIsIGZsYWc6IFwiZmxhZy1pdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSmVyc2V5XCIsIGZsYWc6IFwiZmxhZy1qZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSmFtYWljYVwiLCBmbGFnOiBcImZsYWctam1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkpvcmRhblwiLCBmbGFnOiBcImZsYWctam9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkphcGFuXCIsIGZsYWc6IFwiZmxhZy1qcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2VueWFcIiwgZmxhZzogXCJmbGFnLWtlXCIgfSxcclxuICAgIHsgbmFtZTogXCJLeXJneXpzdGFuXCIsIGZsYWc6IFwiZmxhZy1rZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FtYm9kaWFcIiwgZmxhZzogXCJmbGFnLWtoXCIgfSxcclxuICAgIHsgbmFtZTogXCJLaXJpYmF0aVwiLCBmbGFnOiBcImZsYWcta2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbW9yb3NcIiwgZmxhZzogXCJmbGFnLWttXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIiwgZmxhZzogXCJmbGFnLWtuXCIgfSxcclxuICAgIHsgbmFtZTogXCJLb3JlYSwgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWcta3BcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktvcmVhLCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWcta3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkt1d2FpdFwiLCBmbGFnOiBcImZsYWcta3dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNheW1hbiBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1reVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2F6YWtoc3RhblwiLCBmbGFnOiBcImZsYWcta3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1sYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGViYW5vblwiLCBmbGFnOiBcImZsYWctbGJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEx1Y2lhXCIsIGZsYWc6IFwiZmxhZy1sY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGllY2h0ZW5zdGVpblwiLCBmbGFnOiBcImZsYWctbGlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNyaSBMYW5rYVwiLCBmbGFnOiBcImZsYWctbGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpYmVyaWFcIiwgZmxhZzogXCJmbGFnLWxyXCIgfSxcclxuICAgIHsgbmFtZTogXCJMZXNvdGhvXCIsIGZsYWc6IFwiZmxhZy1sc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGl0aHVhbmlhXCIsIGZsYWc6IFwiZmxhZy1sdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTHV4ZW1ib3VyZ1wiLCBmbGFnOiBcImZsYWctbHVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxhdHZpYVwiLCBmbGFnOiBcImZsYWctbHZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpYnlhXCIsIGZsYWc6IFwiZmxhZy1seVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9yb2Njb1wiLCBmbGFnOiBcImZsYWctbWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbmFjb1wiLCBmbGFnOiBcImZsYWctbWNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbGRvdmEsIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1tZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9udGVuZWdyb1wiLCBmbGFnOiBcImZsYWctbWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IE1hcnRpbiAoRnJlbmNoIHBhcnQpXCIsIGZsYWc6IFwiZmxhZy1tZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFkYWdhc2NhclwiLCBmbGFnOiBcImZsYWctbWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hcnNoYWxsIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLW1oXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWNlZG9uaWEsIHRoZSBmb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLW1rXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxpXCIsIGZsYWc6IFwiZmxhZy1tbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTXlhbm1hclwiLCBmbGFnOiBcImZsYWctbW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbmdvbGlhXCIsIGZsYWc6IFwiZmxhZy1tblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFjYW9cIiwgZmxhZzogXCJmbGFnLW1vXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLW1wXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXJ0aW5pcXVlXCIsIGZsYWc6IFwiZmxhZy1tcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWF1cml0YW5pYVwiLCBmbGFnOiBcImZsYWctbXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbnRzZXJyYXRcIiwgZmxhZzogXCJmbGFnLW1zXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWx0YVwiLCBmbGFnOiBcImZsYWctbXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hdXJpdGl1c1wiLCBmbGFnOiBcImZsYWctbXVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGRpdmVzXCIsIGZsYWc6IFwiZmxhZy1tdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsYXdpXCIsIGZsYWc6IFwiZmxhZy1td1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWV4aWNvXCIsIGZsYWc6IFwiZmxhZy1teFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsYXlzaWFcIiwgZmxhZzogXCJmbGFnLW15XCIgfSxcclxuICAgIHsgbmFtZTogXCJNb3phbWJpcXVlXCIsIGZsYWc6IFwiZmxhZy1telwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmFtaWJpYVwiLCBmbGFnOiBcImZsYWctbmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5ldyBDYWxlZG9uaWFcIiwgZmxhZzogXCJmbGFnLW5jXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWdlclwiLCBmbGFnOiBcImZsYWctbmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcmZvbGsgSXNsYW5kXCIsIGZsYWc6IFwiZmxhZy1uZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmlnZXJpYVwiLCBmbGFnOiBcImZsYWctbmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pY2FyYWd1YVwiLCBmbGFnOiBcImZsYWctbmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5ldGhlcmxhbmRzXCIsIGZsYWc6IFwiZmxhZy1ubFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9yd2F5XCIsIGZsYWc6IFwiZmxhZy1ub1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmVwYWxcIiwgZmxhZzogXCJmbGFnLW5wXCIgfSxcclxuICAgIHsgbmFtZTogXCJOYXVydVwiLCBmbGFnOiBcImZsYWctbnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pdWVcIiwgZmxhZzogXCJmbGFnLW51XCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXcgWmVhbGFuZFwiLCBmbGFnOiBcImZsYWctbnpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk9tYW5cIiwgZmxhZzogXCJmbGFnLW9tXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYW5hbWFcIiwgZmxhZzogXCJmbGFnLXBhXCIgfSxcclxuICAgIHsgbmFtZTogXCJQZXJ1XCIsIGZsYWc6IFwiZmxhZy1wZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIFBvbHluZXNpYVwiLCBmbGFnOiBcImZsYWctcGZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhcHVhIE5ldyBHdWluZWFcIiwgZmxhZzogXCJmbGFnLXBnXCIgfSxcclxuICAgIHsgbmFtZTogXCJQaGlsaXBwaW5lc1wiLCBmbGFnOiBcImZsYWctcGhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBha2lzdGFuXCIsIGZsYWc6IFwiZmxhZy1wa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUG9sYW5kXCIsIGZsYWc6IFwiZmxhZy1wbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwiLCBmbGFnOiBcImZsYWctcG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBpdGNhaXJuXCIsIGZsYWc6IFwiZmxhZy1wblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUHVlcnRvIFJpY29cIiwgZmxhZzogXCJmbGFnLXByXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWxlc3RpbmUsIFN0YXRlIG9mXCIsIGZsYWc6IFwiZmxhZy1wc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUG9ydHVnYWxcIiwgZmxhZzogXCJmbGFnLXB0XCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWxhdVwiLCBmbGFnOiBcImZsYWctcHdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhcmFndWF5XCIsIGZsYWc6IFwiZmxhZy1weVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUWF0YXJcIiwgZmxhZzogXCJmbGFnLXFhXCIgfSxcclxuICAgIHsgbmFtZTogXCJSw6l1bmlvblwiLCBmbGFnOiBcImZsYWctcmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlJvbWFuaWFcIiwgZmxhZzogXCJmbGFnLXJvXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZXJiaWFcIiwgZmxhZzogXCJmbGFnLXJzXCIgfSxcclxuICAgIHsgbmFtZTogXCJSdXNzaWFuIEZlZGVyYXRpb25cIiwgZmxhZzogXCJmbGFnLXJ1XCIgfSxcclxuICAgIHsgbmFtZTogXCJSd2FuZGFcIiwgZmxhZzogXCJmbGFnLXJ3XCIgfSxcclxuICAgIHsgbmFtZTogXCJTYXVkaSBBcmFiaWFcIiwgZmxhZzogXCJmbGFnLXNhXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb2xvbW9uIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLXNiXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZXljaGVsbGVzXCIsIGZsYWc6IFwiZmxhZy1zY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3VkYW5cIiwgZmxhZzogXCJmbGFnLXNkXCIgfSxcclxuICAgIHsgbmFtZTogXCJTd2VkZW5cIiwgZmxhZzogXCJmbGFnLXNlXCIgfSxcclxuICAgIHsgbmFtZTogXCJTaW5nYXBvcmVcIiwgZmxhZzogXCJmbGFnLXNnXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwiLCBmbGFnOiBcImZsYWctc2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNsb3ZlbmlhXCIsIGZsYWc6IFwiZmxhZy1zaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3ZhbGJhcmQgYW5kIEphbiBNYXllblwiLCBmbGFnOiBcImZsYWctc2pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNsb3Zha2lhXCIsIGZsYWc6IFwiZmxhZy1za1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2llcnJhIExlb25lXCIsIGZsYWc6IFwiZmxhZy1zbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FuIE1hcmlub1wiLCBmbGFnOiBcImZsYWctc21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNlbmVnYWxcIiwgZmxhZzogXCJmbGFnLXNuXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb21hbGlhXCIsIGZsYWc6IFwiZmxhZy1zb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3VyaW5hbWVcIiwgZmxhZzogXCJmbGFnLXNyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBTdWRhblwiLCBmbGFnOiBcImZsYWctc3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLCBmbGFnOiBcImZsYWctc3RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVsIFNhbHZhZG9yXCIsIGZsYWc6IFwiZmxhZy1zdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KVwiLCBmbGFnOiBcImZsYWctc3hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN5cmlhbiBBcmFiIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1zeVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dhemlsYW5kXCIsIGZsYWc6IFwiZmxhZy1zelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy10Y1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hhZFwiLCBmbGFnOiBcImZsYWctdGRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllc1wiLCBmbGFnOiBcImZsYWctdGZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRvZ29cIiwgZmxhZzogXCJmbGFnLXRnXCIgfSxcclxuICAgIHsgbmFtZTogXCJUaGFpbGFuZFwiLCBmbGFnOiBcImZsYWctdGhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhamlraXN0YW5cIiwgZmxhZzogXCJmbGFnLXRqXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb2tlbGF1XCIsIGZsYWc6IFwiZmxhZy10a1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGltb3ItTGVzdGVcIiwgZmxhZzogXCJmbGFnLXRsXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXJrbWVuaXN0YW5cIiwgZmxhZzogXCJmbGFnLXRtXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdW5pc2lhXCIsIGZsYWc6IFwiZmxhZy10blwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9uZ2FcIiwgZmxhZzogXCJmbGFnLXRvXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXJrZXlcIiwgZmxhZzogXCJmbGFnLXRyXCIgfSxcclxuICAgIHsgbmFtZTogXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsIGZsYWc6IFwiZmxhZy10dFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHV2YWx1XCIsIGZsYWc6IFwiZmxhZy10dlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYVwiLCBmbGFnOiBcImZsYWctdHdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLXR6XCIgfSxcclxuICAgIHsgbmFtZTogXCJVa3JhaW5lXCIsIGZsYWc6IFwiZmxhZy11YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVWdhbmRhXCIsIGZsYWc6IFwiZmxhZy11Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy11bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIsIGZsYWc6IFwiZmxhZy11c1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVXJ1Z3VheVwiLCBmbGFnOiBcImZsYWctdXlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlV6YmVraXN0YW5cIiwgZmxhZzogXCJmbGFnLXV6XCIgfSxcclxuICAgIHsgbmFtZTogXCJIb2x5IFNlZVwiLCBmbGFnOiBcImZsYWctdmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsIGZsYWc6IFwiZmxhZy12Y1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmVuZXp1ZWxhLCBCb2xpdmFyaWFuIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy12ZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlyZ2luIElzbGFuZHMsIEJyaXRpc2hcIiwgZmxhZzogXCJmbGFnLXZnXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaXJnaW4gSXNsYW5kcywgVS5TLlwiLCBmbGFnOiBcImZsYWctdmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpZXQgTmFtXCIsIGZsYWc6IFwiZmxhZy12blwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmFudWF0dVwiLCBmbGFnOiBcImZsYWctdnVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIldhbGxpcyBhbmQgRnV0dW5hXCIsIGZsYWc6IFwiZmxhZy13ZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2Ftb2FcIiwgZmxhZzogXCJmbGFnLXdzXCIgfSxcclxuICAgIHsgbmFtZTogXCJZZW1lblwiLCBmbGFnOiBcImZsYWcteWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1heW90dGVcIiwgZmxhZzogXCJmbGFnLXl0XCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBBZnJpY2FcIiwgZmxhZzogXCJmbGFnLXphXCIgfSxcclxuICAgIHsgbmFtZTogXCJaYW1iaWFcIiwgZmxhZzogXCJmbGFnLXptXCIgfSxcclxuICAgIHsgbmFtZTogXCJaaW1iYWJ3ZVwiLCBmbGFnOiBcImZsYWctendcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVVzZXJGbGFncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIpIHtcclxuICAgICAgJHNjb3BlLnVzZXJGbGFncyA9ICRzY29wZS5jdXJyZW50VXNlci5mbGFnc1xyXG4gICAgICAgID8gY291bnRyaWVzLmZpbHRlcihmdW5jdGlvbiAoY291bnRyeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJHNjb3BlLmN1cnJlbnRVc2VyLmZsYWdzLmluY2x1ZGVzKGNvdW50cnkuZmxhZyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIDogW107XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXBkYXRlVXNlckZsYWdzKCk7XHJcblxyXG4gICRzY29wZS5kYXRlT3B0aW9ucyA9IHtcclxuICAgIG1heERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZSgxOTAwLCAxLCAxKSxcclxuICAgIGluaXREYXRlOiBuZXcgRGF0ZSgyMDAwLCAxLCAxKSxcclxuICAgIGRhdGVwaWNrZXJNb2RlOiBcInllYXJcIixcclxuICB9O1xyXG5cclxuICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSB0cnVlO1xyXG4gICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9IHRydWU7XHJcblxyXG4gICRzY29wZS50b2dnbGVVc2VybmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS51c2VybmFtZVRvZ2dsZSA9ICEkc2NvcGUudXNlcm5hbWVUb2dnbGU7XHJcbiAgICAkc2NvcGUubmV3VXNlcm5hbWUgPSAkc2NvcGUuY3VycmVudFVzZXIudXNlcm5hbWU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLm5ld1Bhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5jb25maXJtUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gISRzY29wZS5wYXNzd29yZFRvZ2dsZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uIChwYXNzd29yZCkge1xyXG4gICAgaWYgKHBhc3N3b3JkKSB7XHJcbiAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgVXNlclN2Yy5jaGVja1Bhc3N3b3JkKHVzZXIsIHBhc3N3b3JkKS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgb3JpZ2luYWxCZyA9ICQoXCIucGFzc3dvcmRcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIpO1xyXG4gICAgICAgICAgJChcIi5wYXNzd29yZFwiKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNGRkI2QzFcIiB9LCAyMDApLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG9yaWdpbmFsQmcgfSwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uIChvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgaWYgKG5ld1Bhc3N3b3JkKSB7XHJcbiAgICAgIGlmIChuZXdQYXNzd29yZCA9PSBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICB2YXIgdXNlciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgICAgVXNlclN2Yy5jaGFuZ2VQYXNzd29yZCh1c2VyLCBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQpLnRoZW4oXHJcbiAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwicG9wdXBcIiwge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGFzc3dvcmQgQ2hhbmdlZFwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiYWxlcnQtc3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJHNjb3BlLm9sZFBhc3N3b3JkID0gbnVsbDtcclxuICAgICAgICAgICAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuJGVtaXQoXCJwb3B1cFwiLCB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJQYXNzd29yZCBDaGFuZ2UgRmFpbGVkXCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJhbGVydC1kYW5nZXJcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAkKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjZDMVwiIH0sIDIwMCkuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogb3JpZ2luYWxCZyB9LCAyMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXJuYW1lKSB7XHJcbiAgICAkc2NvcGUuJGVtaXQoXCJsb2FkaW5nXCIpO1xyXG4gICAgVXNlclN2Yy5jaGFuZ2VVc2VybmFtZSgkc2NvcGUuY3VycmVudFVzZXIuX2lkLCB1c2VybmFtZSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwidXBkYXRlXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoXCJwb3B1cFwiLCB7XHJcbiAgICAgICAgICBtZXNzYWdlOiB1c2VybmFtZSArIFwiIGFscmVhZHkgaW4gdXNlXCIsXHJcbiAgICAgICAgICB0eXBlOiBcImFsZXJ0LWRhbmdlclwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUudXBkYXRlVXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIpIHtcclxuICAgICAgJHNjb3BlLiRlbWl0KFwibG9hZGluZ1wiKTtcclxuICAgICAgVXNlclN2Yy51cGRhdGVVc2VyKHsgLi4uJHNjb3BlLmN1cnJlbnRVc2VyLCBmbGFnczogJHNjb3BlLnVzZXJGbGFncy5tYXAoKHsgZmxhZyB9KSA9PiBmbGFnKSB9KS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgJHNjb3BlLiRlbWl0KFwidXBkYXRlXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgdXBkYXRlVXNlckZsYWdzKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuJHdhdGNoKFwidXNlckZsYWdzLmxlbmd0aFwiLCBmdW5jdGlvbiAobGVuZ3RoKSB7XHJcbiAgICAkc2NvcGUudXBkYXRlVXNlcigpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUubG9hZENvdW50cmllcyA9IGZ1bmN0aW9uICgkcXVlcnkpIHtcclxuICAgIHJldHVybiBjb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChjb3VudHJ5KSB7XHJcbiAgICAgIHJldHVybiBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCRxdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1NraWxsc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZFNraWxsID0gMDtcclxuICAkc2NvcGUuc2tpbGxzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICRzY29wZS5wcm9qZWN0cyA9IFtdO1xyXG5cclxuICAkc2NvcGUubGFiZWxzID0gW1wiRG93bmxvYWQgU2FsZXNcIiwgXCJJbi1TdG9yZSBTYWxlc1wiLCBcIk1haWwtT3JkZXIgU2FsZXNcIl07XHJcbiAgJHNjb3BlLmRhdGEgPSBbMzAwLCA1MDAsIDEwMF07XHJcblxyXG4gICQuZ2V0SlNPTignL2V4cGVyaWVuY2UuanNvbicsIGZ1bmN0aW9uKCBkYXRhICkge1xyXG4gICAgJHNjb3BlLnByb2plY3RzID0gZGF0YS5yZWR1Y2UoKHByb2plY3RzLCBlbXBsb3llcikgPT4ge1xyXG4gICAgICBpZiAoZW1wbG95ZXIucHJvamVjdHMpIHJldHVybiBlbXBsb3llci5wcm9qZWN0cy5jb25jYXQocHJvamVjdHMpO1xyXG4gICAgICBlbHNlIHJldHVybiBwcm9qZWN0cztcclxuICAgIH0sIHt9KTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmZpbHRlcmVkUHJvamVjdHMgPSAoKSA9PiAkc2NvcGUucHJvamVjdHNcclxuICAgIC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3Quc2tpbGxzICYmIHByb2plY3Quc2tpbGxzLmluY2x1ZGVzKCRzY29wZS5zZWxlY3RlZFNraWxsLmNvZGUpKVxyXG5cclxuICAkLmdldEpTT04oJy9za2lsbHMuanNvbicsIGZ1bmN0aW9uKCBkYXRhICkge1xyXG5cclxuICAgIGNvbnN0IHNraWxscyA9IGRhdGFcclxuICAgIC5maWx0ZXIoKHNraWxsKSA9PiBza2lsbC5lbmFibGVkKVxyXG5cclxuICAgICRzY29wZS5jYXRlZ29yaWVzID0gc2tpbGxzXHJcbiAgICAucmVkdWNlKGZ1bmN0aW9uKGNhdGVnb3JpZXMsIHNraWxsKSB7XHJcbiAgICAgIGlmICghY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0pIHtcclxuICAgICAgICBjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XSA9IFtza2lsbF1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XS5wdXNoKHNraWxsKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzO1xyXG4gICAgfSwge30pO1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZFNraWxsID0gZnVuY3Rpb24gKHNraWxsKSB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsID0gc2tpbGw7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsLmNoYXJ0T3B0aW9ucyA9IHtcclxuICAgICAgICBjdXRvdXRQZXJjZW50YWdlIDogODAsXHJcbiAgICAgICAgY2lyY3VtZmVyZW5jZTogMiAqIE1hdGguUEksXHJcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsLmNoYXJ0U3R5bGUgPSB7XHJcbiAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKC9za2lsbHMvJyArICRzY29wZS5zZWxlY3RlZFNraWxsLmltYWdlICsgJyknLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnNjAlJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICc1MCUgNTAlJ1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCgkc2NvcGUuc2tpbGxzWzBdKTtcclxuXHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBUZW5UaGluZ3NTdmMpIHtcclxuICAgIGxldCBwYWdlID0gMTtcclxuICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlYXJjaCA9IFwiXCI7XHJcbiAgICAkc2NvcGUubmV3SXRlbSA9IHt9O1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgZXhoYXVzdGVkID0gZmFsc2U7XHJcblxyXG4gICAgJHNjb3BlLmtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgLy8gVGFiXHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICRzY29wZS5jcmVhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gRW50ZXJcclxuICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5jcmVhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICgkKFwiI25ldy12YWx1ZVwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkKFwiI25ldy1ibHVyYlwiKS5mb2N1cygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgfVxyXG4gICAgICAvLyB1c2UgZS5rZXlDb2RlXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hZGRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50TGFuZ3VhZ2UgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0ID8gJHNjb3BlLnNlbGVjdGVkTGlzdC5sYW5ndWFnZSA6IFwiRU5cIjtcclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgXCJuZXdcIik7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBjcmVhdG9yOiAkc2NvcGUuY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgdmFsdWVzOiBbXSxcclxuICAgICAgICBhbnN3ZXJzOiAwLFxyXG4gICAgICAgIGlzRHluYW1pYzogdHJ1ZSxcclxuICAgICAgICBjYXRlZ29yeTogXCJcIixcclxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgICBsYW5ndWFnZTogY3VycmVudExhbmd1YWdlLFxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKGxpc3QpIHtcclxuICAgICAgICBpZiAobGlzdC5faWQgPT09IFwibmV3XCIpIHtcclxuICAgICAgICAgICRzY29wZS5hZGRMaXN0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0KGxpc3QpXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIGRhdGEuX2lkKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzZXRMYW5ndWFnZUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0ge307XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9IHt9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICByZXNldExhbmd1YWdlRmlsdGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJlc2V0Q2F0ZWdvcnlGaWx0ZXIoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0TGFuZ3VhZ2VTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBkYXRhLnJlZHVjZSgocmVzdWx0LCB7IF9pZCwgY291bnQgfSkgPT4ge1xyXG4gICAgICAgICAgcmVzdWx0W19pZF0gPSBjb3VudDtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RDYXRlZ29yeVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0cyA9IGRhdGEucmVkdWNlKChyZXN1bHQsIHsgX2lkLCBjb3VudCB9KSA9PiB7XHJcbiAgICAgICAgICByZXN1bHRbX2lkXSA9IGNvdW50O1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9LCB7fSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QpIHtcclxuICAgICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KHsgX2lkOiAkbG9jYXRpb24uc2VhcmNoKCkubGlzdCB9KTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuc2VhcmNoID0gJGxvY2F0aW9uLnNlYXJjaCgpLnNlYXJjaCB8fCBcIlwiO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnZhbHVlT3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInZhbHVlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwiZGF0ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA9ICEkc2NvcGUub3JkZXIuZGlyZWN0aW9uO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldE1vcmVMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5saXN0cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgZ2V0TGlzdHMoKS50aGVuKChsaXN0cykgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9ICRzY29wZS5saXN0cy5jb25jYXQobGlzdHMpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExpc3RzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGlzdHMgPSBbXTtcclxuICAgICAgcGFnZSA9IDE7XHJcbiAgICAgIGV4aGF1c3RlZCA9IGZhbHNlO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gbGlzdHM7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldExhbmd1YWdlRmlsdGVyID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdKSB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPSAhJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9ICEkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpO1xyXG4gICAgICBjb25zdCBhbGxDYXRlZ29yaWVzID1cclxuICAgICAgICBjYXRlZ29yaWVzLmxlbmd0aCA9PT0gY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldKS5sZW5ndGg7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9ICRzY29wZS5jYXRlZ29yaWVzLnJlZHVjZSgoZmlsdGVyLCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgIGZpbHRlcltjYXRlZ29yeV0gPSAhYWxsQ2F0ZWdvcmllcztcclxuICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5sb2FkaW5nIHx8IGV4aGF1c3RlZCkgcmV0dXJuIFtdO1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoICE9PSAkc2NvcGUuc2VhcmNoKSB7XHJcbiAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcInNlYXJjaFwiLCAkc2NvcGUuc2VhcmNoID8gJHNjb3BlLnNlYXJjaCA6IG51bGwpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldExpc3RzKHtcclxuICAgICAgICBwYWdlLFxyXG4gICAgICAgIHNvcnRCeTogJHNjb3BlLm9yZGVyLmZpZWxkLFxyXG4gICAgICAgIG9yZGVyQnk6ICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPyAtMSA6IDEsXHJcbiAgICAgICAgbGltaXQ6IDEwMCxcclxuICAgICAgICBzZWFyY2g6ICRzY29wZS5zZWFyY2gsXHJcbiAgICAgICAgbGFuZ3VhZ2VzOiBPYmplY3Qua2V5cygkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIpLmZpbHRlcigobGFuZ3VhZ2UpID0+ICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZV0pLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlBhZ2UgXCIsIHBhZ2UsIFwiIHJlc3VsdHMgXCIsIGRhdGEucmVzdWx0Lmxlbmd0aCk7XHJcbiAgICAgIGlmIChkYXRhLnJlc3VsdC5sZW5ndGggPCAxMDApIGV4aGF1c3RlZCA9IHRydWU7XHJcbiAgICAgIGVsc2UgcGFnZSA9IGRhdGEubmV4dFBhZ2U7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0LnNsaWNlKDAsIDEwKSk7XHJcbiAgICAgIHJldHVybiBkYXRhLnJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwZGF0ZVZhbHVlID0gKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKCFpdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdFZhbHVlKCRzY29wZS5zZWxlY3RlZExpc3QsIGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGVWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oYXNEdXBsaWNhdGUoKSkge1xyXG4gICAgICAgIGFsZXJ0KGAkeyRzY29wZS5uZXdJdGVtLnZhbHVlfSBpcyBhbHJlYWR5IGluIHRoZSBsaXN0YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgVGVuVGhpbmdzU3ZjLmNyZWF0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCAkc2NvcGUubmV3SXRlbSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5wdXNoKHsgLi4uJHNjb3BlLm5ld0l0ZW0gfSk7XHJcbiAgICAgICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAkc2NvcGUubmV3SXRlbS5ibHVyYiA9IFwiXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZVZhbHVlID0gKGl0ZW0pID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKS50aGVuKCgpID0+IHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyA9ICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLl9pZCAhPT0gaXRlbS5faWQpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwc2VydExpc3QgPSAobGlzdCwgdXBkYXRlcykgPT4ge1xyXG4gICAgICAkc2NvcGUuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKGxpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCAmJiBsaXN0Lm5hbWUgJiYgbGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAobGlzdC5faWQgIT09IFwibmV3XCIpIHtcclxuICAgICAgICAgIGxldCBjaGFuZ2VzID0gdXBkYXRlcyA/IHVwZGF0ZXMgOiBsaXN0O1xyXG4gICAgICAgICAgZGVsZXRlIGNoYW5nZXMuX2lkO1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgICAuLi5jaGFuZ2VzLFxyXG4gICAgICAgICAgICBfaWQ6IGxpc3QuX2lkLFxyXG4gICAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0SW5kZXggPSAkc2NvcGUubGlzdHMuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0Ll9pZCA9PT0gZGF0YS5faWQpO1xyXG4gICAgICAgICAgICAkc2NvcGUubGlzdHNbbGlzdEluZGV4XSA9IGRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5jcmVhdGVMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgJHNjb3BlLnNlbGVjdGVkTGlzdCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0ID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbigkc2NvcGUuc2VsZWN0ZWRMaXN0LCB1cGRhdGVzKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICghbGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBsaXN0P1wiKSkge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3QobGlzdCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2UgPSAobGlzdCwgbGFuZ3VhZ2UpID0+IHtcclxuICAgICAgbGlzdC5sYW5ndWFnZSA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgIGNvbnN0IG5vbkVuZ2xpc2hJbmRleCA9IGxpc3QuY2F0ZWdvcmllcy5pbmRleE9mKFwiTm9uLUVuZ2xpc2hcIik7XHJcbiAgICAgIGlmIChsYW5ndWFnZS5jb2RlICE9PSBcIkVOXCIgJiYgbm9uRW5nbGlzaEluZGV4IDwgMCkge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5wdXNoKFwiTm9uLUVuZ2xpc2hcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAobGFuZ3VhZ2UuY29kZSA9PT0gXCJFTlwiICYmIG5vbkVuZ2xpc2hJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgbGlzdC5jYXRlZ29yaWVzLnNwbGljZShub25FbmdsaXNoSW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHtcclxuICAgICAgICBjYXRlZ29yaWVzOiBsaXN0LmNhdGVnb3JpZXMsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlLmNvZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0RGlmZmljdWx0eSA9IChsaXN0LCBkaWZmaWN1bHR5KSA9PiB7XHJcbiAgICAgIGxpc3QuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHtcclxuICAgICAgICBkaWZmaWN1bHR5OiBkaWZmaWN1bHR5LFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldEZyZXF1ZW5jeSA9IChsaXN0LCBmcmVxdWVuY3kpID0+IHtcclxuICAgICAgbGlzdC5mcmVxdWVuY3kgPSBmcmVxdWVuY3k7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHtcclxuICAgICAgICBmcmVxdWVuY3k6IGZyZXF1ZW5jeSxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeSA9IChsaXN0LCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeUluZGV4ID0gbGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpO1xyXG4gICAgICBpZiAoY2F0ZWdvcnlJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgbGlzdC5jYXRlZ29yaWVzLnNwbGljZShjYXRlZ29yeUluZGV4LCAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaXN0LmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwge1xyXG4gICAgICAgIGNhdGVnb3JpZXM6IGxpc3QuY2F0ZWdvcmllcyxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5oYXNEdXBsaWNhdGUgPSAoKSA9PlxyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ICYmXHJcbiAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlICYmXHJcbiAgICAgIF8uc29tZShcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyxcclxuICAgICAgICAoYW5zd2VyKSA9PiBhbnN3ZXIudmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpID09ICRzY29wZS5uZXdJdGVtLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSxcclxuICAgICAgKTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Qmx1cmJzID0gKHR5cGUpID0+IHtcclxuICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Qmx1cmJzKCRzY29wZS5zZWxlY3RlZExpc3QsIHR5cGUpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsICgpID0+IGdldERhdGEoKSk7XHJcbiAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyPy5faWQpIGdldERhdGEoKTtcclxuICB9KTtcclxuIiwiLypqc2xpbnQgZXN2ZXJzaW9uOiA2Ki9cclxuYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0FkbWluQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBUZW5UaGluZ3NTdmMsIFVzZXJTdmMpIHtcclxuICAgICRzY29wZS4kb24oXCJsb2dpblwiLCAoXykgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyQnkgPSAoZmllbGQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5vcmRlci5maWVsZCA9PT0gZmllbGQpIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIucmV2ZXJzZSA9ICEkc2NvcGUub3JkZXIucmV2ZXJzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRRdWV1ZSA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0UXVldWUoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5xdWV1ZSA9IHJlc3BvbnNlLmRhdGEucmVwbGFjZShcIi9uXCIsIFwiPGJyLz5cIik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmdldFF1ZXVlKCk7XHJcblxyXG4gICAgVGVuVGhpbmdzU3ZjLmdldFBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5wYXVzZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy5nZXRVc2VycygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKHVzZXIpID0+ICF1c2VyLmFkbWluKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUJhbiA9ICh1c2VyKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy50b2dnbGVCYW4odXNlci5faWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVQYXVzZSA9ICh1c2VyKSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy50b2dnbGVQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLnBhdXNlZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG5cdC5tb2R1bGUoJ2FwcCcpXHJcblx0Ly9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcblx0LmNvbnRyb2xsZXIoXHJcblx0XHQnVGVuVGhpbmdzR2FtZUN0cmwnLFxyXG5cdFx0ZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlUGFyYW1zLCBUZW5UaGluZ3NTdmMpIHtcclxuXHRcdFx0JHNjb3BlLiRvbignbG9naW4nLCBfID0+IHtcclxuXHRcdFx0XHRpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcblx0XHRcdFx0XHRnZXRVc2VycygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoJHN0YXRlUGFyYW1zLmdhbWUpIHtcclxuXHRcdFx0XHRUZW5UaGluZ3NTdmMuZ2V0R2FtZSgkc3RhdGVQYXJhbXMuZ2FtZSkudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0XHQkc2NvcGUuZ2FtZSA9IHJlc3BvbnNlLmRhdGE7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygkc2NvcGUuZ2FtZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHQpO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzT2xkQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFRlblRoaW5nc1N2Yykge1xyXG4gICAgJHNjb3BlLnNlYXJjaCA9IHtcclxuICAgICAgbmFtZTogXCJcIixcclxuICAgICAgdmFsdWVzOiBcIlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUua2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICBpZiAoJChcIiNuZXctYmx1cmJcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLmFkZFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5hZGRWYWx1ZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICgkKFwiI25ldy12YWx1ZVwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkKFwiI25ldy1ibHVyYlwiKS5mb2N1cygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgfVxyXG4gICAgICAvLyB1c2UgZS5rZXlDb2RlXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZWFyY2hOYW1lID0gXCJcIjtcclxuICAgICRzY29wZS5uZXdJdGVtID0ge307XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5RmlsdGVyID0gKGNhdGVnb3J5KSA9PiAoJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0gY2F0ZWdvcnkpO1xyXG4gICAgJHNjb3BlLnNldFVzZXJGaWx0ZXIgPSAodXNlcikgPT4gKCRzY29wZS51c2VyRmlsdGVyID0gdXNlcik7XHJcbiAgICAkc2NvcGUuc2V0VXBkYXRlRmlsdGVyID0gKHR5cGUpID0+ICgkc2NvcGUudXBkYXRlRmlsdGVyID0gdHlwZSk7XHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAobGFuZ3VhZ2UpID0+ICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSBsYW5ndWFnZSk7XHJcblxyXG4gICAgJHNjb3BlLmZpbHRlcmVkTGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxpc3RzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiAkc2NvcGUubGlzdHNcclxuICAgICAgICAuZmlsdGVyKCh7IGlzRHluYW1pYyB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoJHNjb3BlLnVwZGF0ZUZpbHRlciAhPT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwic3RhdGljXCIgJiYgaXNEeW5hbWljID09PSB0cnVlKSB8fFxyXG4gICAgICAgICAgICAgICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImR5bmFtaWNcIiAmJiBpc0R5bmFtaWMgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKCh7IGNhdGVnb3JpZXMgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCRzY29wZS5jYXRlZ29yeUZpbHRlciA9PT0gXCJBbGxcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICByZXR1cm4gY2F0ZWdvcmllcy5pbmRleE9mKCRzY29wZS5jYXRlZ29yeUZpbHRlcikgPj0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyID09PSBcIkJsYW5rXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoKHsgY3JlYXRvciB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoJHNjb3BlLnVzZXJGaWx0ZXIgPT09IFwiQWxsXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRvciA9PT0gJHNjb3BlLnVzZXJGaWx0ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKCh7IGxhbmd1YWdlIH0pID0+IHtcclxuICAgICAgICAgIGlmICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZSA9PT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsYW5ndWFnZSA9PT0gJHNjb3BlLmxhbmd1YWdlRmlsdGVyLmNvZGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kb24oXCJsb2dpblwiLCAoXykgPT4ge1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJzID0gJHNjb3BlLmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcnMucHVzaChcIkFsbFwiKTtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJzLnB1c2goXCJCbGFua1wiKTtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSBcIkFsbFwiO1xyXG4gICAgICAgICRzY29wZS51cGRhdGVGaWx0ZXIgPSBcImFsbFwiO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExhbmd1YWdlcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVycyA9ICRzY29wZS5sYW5ndWFnZXMubWFwKChsYW5ndWFnZSkgPT4gbGFuZ3VhZ2UpO1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcnMucHVzaCh7IG5hbWU6IFwiQWxsXCIsIGNvZGU6IFwiYWxsXCIgfSk7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0geyBuYW1lOiBcIkFsbFwiLCBjb2RlOiBcImFsbFwiIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0TGlzdCh7IF9pZDogJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5saXN0T3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcImRhdGVcIixcclxuICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICBsYWJlbDogXCJDcmVhdGlvbiBEYXRlXCIsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS52YWx1ZU9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJ2YWx1ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgICBsYWJlbDogXCJWYWx1ZVwiLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc29ydCA9IChzb3J0ZXIsIHNvcnRGaWVsZCwgc29ydExhYmVsKSA9PiB7XHJcbiAgICAgICRzY29wZVtzb3J0ZXJdLmxhYmVsID0gc29ydExhYmVsO1xyXG4gICAgICBpZiAoJHNjb3BlW3NvcnRlcl0uZmllbGQgPT09IHNvcnRGaWVsZCkge1xyXG4gICAgICAgICRzY29wZVtzb3J0ZXJdLmRpcmVjdGlvbiA9ICEkc2NvcGVbc29ydGVyXS5kaXJlY3Rpb247XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlW3NvcnRlcl0uZmllbGQgPSBzb3J0RmllbGQ7XHJcbiAgICAgICAgJHNjb3BlW3NvcnRlcl0uZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGFuZ3VhZ2VDb3VudCA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5saXN0cykgcmV0dXJuIDA7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gJHNjb3BlLmxpc3RzLmZpbHRlcihcclxuICAgICAgICAobGlzdCkgPT5cclxuICAgICAgICAgICgkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPT09IFwiQWxsXCIgfHwgbGlzdC5jYXRlZ29yaWVzLmluY2x1ZGVzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikpICYmXHJcbiAgICAgICAgICAobGFuZ3VhZ2UuY29kZSA9PT0gXCJhbGxcIiB8fCBsaXN0Lmxhbmd1YWdlID09PSBsYW5ndWFnZS5jb2RlKSAmJlxyXG4gICAgICAgICAgKCRzY29wZS51c2VyRmlsdGVyID09PSBcIkFsbFwiIHx8IGxpc3QuY3JlYXRvciA9PT0gJHNjb3BlLnVzZXJGaWx0ZXIpICYmXHJcbiAgICAgICAgICAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJhbGxcIiB8fCBsaXN0LmlzRHluYW1pYyA9PT0gKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiZHluYW1pY1wiKSksXHJcbiAgICAgICkubGVuZ3RoO1xyXG4gICAgICByZXR1cm4gYCR7Y291bnR9IC0gJHtNYXRoLnJvdW5kKChjb3VudCAvICRzY29wZS5saXN0cy5sZW5ndGgpICogMTAwKX0lYDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldENhdGVnb3J5Q291bnQgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubGlzdHMpIHJldHVybiAwO1xyXG4gICAgICBjb25zdCBjb3VudCA9ICRzY29wZS5saXN0cy5maWx0ZXIoXHJcbiAgICAgICAgKGxpc3QpID0+XHJcbiAgICAgICAgICAoY2F0ZWdvcnkgPT09IFwiQWxsXCIgfHwgbGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpID49IDApICYmXHJcbiAgICAgICAgICAoJHNjb3BlLmxhbmd1YWdlRmlsdGVyLmNvZGUgPT09IFwiYWxsXCIgfHwgbGlzdC5sYW5ndWFnZSA9PT0gJHNjb3BlLmxhbmd1YWdlRmlsdGVyLmNvZGUpICYmXHJcbiAgICAgICAgICAoJHNjb3BlLnVzZXJGaWx0ZXIgPT09IFwiQWxsXCIgfHwgbGlzdC5jcmVhdG9yID09PSAkc2NvcGUudXNlckZpbHRlcikgJiZcclxuICAgICAgICAgICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImFsbFwiIHx8IGxpc3QuaXNEeW5hbWljID09PSAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJkeW5hbWljXCIpKSxcclxuICAgICAgKS5sZW5ndGg7XHJcbiAgICAgIHJldHVybiBgJHtjb3VudH0gLSAke01hdGgucm91bmQoKGNvdW50IC8gJHNjb3BlLmxpc3RzLmxlbmd0aCkgKiAxMDApfSVgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0VXBkYXRlQ291bnQgPSAodHlwZSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5saXN0cykgcmV0dXJuIDA7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gJHNjb3BlLmxpc3RzLmZpbHRlcihcclxuICAgICAgICAobGlzdCkgPT4gdHlwZSA9PT0gXCJhbGxcIiB8fCAobGlzdC5pc0R5bmFtaWMgJiYgdHlwZSA9PT0gXCJkeW5hbWljXCIpIHx8ICghbGlzdC5pc0R5bmFtaWMgJiYgdHlwZSA9PT0gXCJzdGF0aWNcIiksXHJcbiAgICAgICkubGVuZ3RoO1xyXG4gICAgICByZXR1cm4gYCR7Y291bnR9IC0gJHtNYXRoLnJvdW5kKChjb3VudCAvICRzY29wZS5saXN0cy5sZW5ndGgpICogMTAwKX0lYDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExpc3RzID0gKCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5sb2FkaW5nKSB7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdHMgPSBkYXRhLnJlc3VsdDtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVycyA9IHt9O1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXJzLkFsbCA9ICRzY29wZS5saXN0cy5sZW5ndGg7XHJcbiAgICAgICAgICAkc2NvcGUudXNlckZpbHRlcnMgPSAkc2NvcGUubGlzdHNcclxuICAgICAgICAgICAgLnNvcnQoKGxpc3QxLCBsaXN0MikgPT4gbGlzdDEuY3JlYXRvciA+IGxpc3QyLmNyZWF0b3IpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKHVzZXJzLCB7IGNyZWF0b3IgfSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghdXNlcnNbY3JlYXRvcl0pIHVzZXJzW2NyZWF0b3JdID0gMDtcclxuICAgICAgICAgICAgICB1c2Vyc1tjcmVhdG9yXSsrO1xyXG4gICAgICAgICAgICAgIHJldHVybiB1c2VycztcclxuICAgICAgICAgICAgfSwgJHNjb3BlLnVzZXJGaWx0ZXJzKTtcclxuICAgICAgICAgICRzY29wZS51c2VyQ291bnQgPSBPYmplY3Qua2V5cygkc2NvcGUudXNlckZpbHRlcnMpLmxlbmd0aDtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVycyA9IHNvcnRPYmplY3QoJHNjb3BlLnVzZXJGaWx0ZXJzLCBmYWxzZSk7XHJcbiAgICAgICAgICAkc2NvcGUudXNlckZpbHRlciA9IFwiQWxsXCI7XHJcbiAgICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZWxlY3RMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3QobGlzdClcclxuICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAgICQoXCIjY2F0ZWdvcnktc2VsZWN0XCIpLmhpZGUoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldENhdGVnb3J5Q2xhc3MgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgcmV0dXJuICRzY29wZS5zZWxlY3RlZExpc3QgJiYgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpID49IDBcclxuICAgICAgICA/IFwiYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgIDogXCJidG4tZGVmYXVsdFwiO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQ2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcnlJbmRleCA9ICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KTtcclxuICAgICAgaWYgKGNhdGVnb3J5SW5kZXggPj0gMCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5zcGxpY2UoY2F0ZWdvcnlJbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZWxlY3RMYW5ndWFnZSA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0Lmxhbmd1YWdlID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgY29uc3Qgbm9uRW5nbGlzaEluZGV4ID0gJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoXCJOb24tRW5nbGlzaFwiKTtcclxuICAgICAgaWYgKGxhbmd1YWdlLmNvZGUgIT09IFwiRU5cIiAmJiBub25FbmdsaXNoSW5kZXggPCAwKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLnB1c2goXCJOb24tRW5nbGlzaFwiKTtcclxuICAgICAgfSBlbHNlIGlmIChsYW5ndWFnZS5jb2RlID09PSBcIkVOXCIgJiYgbm9uRW5nbGlzaEluZGV4ID49IDApIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuc3BsaWNlKG5vbkVuZ2xpc2hJbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmFkZExpc3QgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRMYW5ndWFnZSA9ICRzY29wZS5zZWxlY3RlZExpc3QgPyAkc2NvcGUuc2VsZWN0ZWRMaXN0Lmxhbmd1YWdlIDogXCJFTlwiO1xyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBcIlwiKTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNyZWF0b3I6ICRzY29wZS5jdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB2YWx1ZXM6IFtdLFxyXG4gICAgICAgIGFuc3dlcnM6IDAsXHJcbiAgICAgICAgaXNEeW5hbWljOiB0cnVlLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgIGxhbmd1YWdlOiBjdXJyZW50TGFuZ3VhZ2UsXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5oYXNEdXBsaWNhdGUgPSAoKSA9PlxyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ICYmXHJcbiAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlICYmXHJcbiAgICAgIF8uc29tZShcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyxcclxuICAgICAgICAoYW5zd2VyKSA9PiBhbnN3ZXIudmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpID09ICRzY29wZS5uZXdJdGVtLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSxcclxuICAgICAgKTtcclxuXHJcbiAgICAkc2NvcGUuYWRkVmFsdWUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubmV3SXRlbS52YWx1ZSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIF8uc29tZShcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMsXHJcbiAgICAgICAgICAgIChhbnN3ZXIpID0+IGFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCkgPT0gJHNjb3BlLm5ld0l0ZW0udmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpLFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgYWxlcnQoYCR7JHNjb3BlLm5ld0l0ZW0udmFsdWV9IGlzIGFscmVhZHkgaW4gdGhlIGxpc3RgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0uY3JlYXRvciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy51bnNoaWZ0KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoJHNjb3BlLm5ld0l0ZW0pKSk7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmFuc3dlcnMrKztcclxuICAgICAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICRzY29wZS5uZXdJdGVtLmJsdXJiID0gXCJcIjtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMubGVuZ3RoID49IDEwICYmXHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QubmFtZSAmJlxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zYXZlTGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJChcIiNuZXctdmFsdWVcIikuZm9jdXMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnJlcG9ydExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBsaXN0LnJlcG9ydGVkID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLnJlcG9ydExpc3QoJHNjb3BlLmN1cnJlbnRVc2VyLCBsaXN0KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNhdmVMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuc2F2aW5nKSB7XHJcbiAgICAgICAgbGlzdC52YWx1ZXMgPSBsaXN0LnZhbHVlcy5maWx0ZXIoKHsgdmFsdWUgfSkgPT4gdmFsdWUpO1xyXG4gICAgICAgIGlmIChsaXN0LnZhbHVlcy5sZW5ndGggPj0gMTAgJiYgbGlzdC5uYW1lICYmIGxpc3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5zYXZlTGlzdCgkc2NvcGUuY3VycmVudFVzZXIsIGxpc3QpLnRoZW4oXHJcbiAgICAgICAgICAgICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5saXN0cy51bnNoaWZ0KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdExpc3QoZGF0YSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJHNjb3BlLmxpc3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUubGlzdHNbaV0uX2lkID09PSBkYXRhLl9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5saXN0c1tpXSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RMaXN0KGxpc3QpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxpc3QudmFsdWVzLmxlbmd0aCA8IDEwKSB7XHJcbiAgICAgICAgICBhbGVydChcIkxpc3RzIG11c3QgY29udGFpbiAxMCBvciBtb3JlIHZhbHVlcyFcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmICghbGlzdC5uYW1lKSB7XHJcbiAgICAgICAgICBmbGFzaChcIiNsaXN0LW5hbWVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZsYXNoKFwiLmxpc3QtY2F0ZWdvcnlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGZsYXNoKGVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgY29sb3IgPSAkKGVsZW1lbnQpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIik7XHJcbiAgICAgICQoZWxlbWVudCkuYW5pbWF0ZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZBODA3MlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTAwLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICQoZWxlbWVudCkuYW5pbWF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICghbGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUubGlzdHMgPSAkc2NvcGUubGlzdHMuZmlsdGVyKCh7IF9pZCB9KSA9PiBfaWQpO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGxpc3Q/XCIpKSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZGVsZXRlTGlzdChsaXN0KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmxpc3RCdXR0b25DbGFzcyA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGxpc3QudmFsdWVzLmxlbmd0aDtcclxuICAgICAgY29uc3QgYmx1cmJzID0gbGlzdC5ibHVyYnM7XHJcbiAgICAgIGlmICh2YWx1ZXMgPT09IGJsdXJicyAmJiBsaXN0LmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiYnRuLWRlZmF1bHRcIjtcclxuICAgICAgfSBlbHNlIGlmIChibHVyYnMgPT09IDAgJiYgIWxpc3QuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gXCJidG4td2FybmluZ1wiO1xyXG4gICAgICB9IGVsc2UgaWYgKGJsdXJicyA9PT0gMCAmJiBsaXN0LmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiYnRuLWluZm9cIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJidG4tcHJpbWFyeVwiO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRCbHVyYnMgPSAodHlwZSkgPT4ge1xyXG4gICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRCbHVyYnMoJHNjb3BlLnNlbGVjdGVkTGlzdCwgdHlwZSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0TGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignV29ya291dEN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAkc2NvcGUudGltZUV4ZXJjaXNpbmcgPSAzMDtcclxuICAkc2NvcGUudGltZVJlc3RpbmcgPSAxMDtcclxuICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG5cclxuICB2YXIgc291bmRzID0ge1xyXG4gICAgb246IG5ldyBBdWRpbygnb24ud2F2JyksXHJcbiAgICBvZmY6IG5ldyBBdWRpbygnb2ZmLndhdicpLFxyXG4gICAgc3dpdGNoOiBuZXcgQXVkaW8oJ3N3aXRjaC53YXYnKSxcclxuICB9O1xyXG5cclxuXHJcbiAgdmFyIGV4ZXJjaXNlcyA9IFtcclxuICAgIHtuYW1lOiAnSnVtcGluZyBKYWNrcycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1dhbGwgU2l0Jywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUHVzaC1VcCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0NydW5jaCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1N0ZXAtVXAnLCBzcGxpdDogdHJ1ZX0sXHJcbiAgICB7bmFtZTogJ1NxdWF0Jywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnVHJpY2VwcyBEaXAnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQbGFuaycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0hpZ2ggS25lZXMnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdMdW5nZScsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1B1c2gtVXAgd2l0aCBSb3RhdGlvbicsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1NpZGUgUGxhbmsnLCBzcGxpdDogdHJ1ZX1cclxuICBdO1xyXG5cclxuICB2YXIgZXhlcmNpc2luZztcclxuXHJcbiAgJHNjb3BlLnByb2dyZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKGV4ZXJjaXNlcy5sZW5ndGggLSBNYXRoLmZsb29yKCRzY29wZS50aW1lUmVtYWluaW5nIC8gKCRzY29wZS50aW1lRXhlcmNpc2luZyArICRzY29wZS50aW1lUmVzdGluZykpKSArICcvJyArIGV4ZXJjaXNlcy5sZW5ndGg7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLndvcmtvdXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBleGNlcmNpc2VUaW1lID0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nICsgJHNjb3BlLnRpbWVSZXN0aW5nO1xyXG4gICAgaWYgKCEkc2NvcGUudGltZVJlbWFpbmluZykge1xyXG4gICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IGV4ZXJjaXNlcy5sZW5ndGggKiBleGNlcmNpc2VUaW1lO1xyXG4gICAgICBleGVyY2lzaW5nID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmctLTtcclxuICAgICAgICBpZiAoJHNjb3BlLnRpbWVSZW1haW5pbmcgPT09IDApIHtcclxuICAgICAgICAgICRzY29wZS5leGVyY2lzZSA9IHtuYW1lOiAnRmluaXNoZWQhIENvbmdyYXRzIScsIHNwbGl0OiBmYWxzZX07XHJcbiAgICAgICAgICAkc2NvcGUudGltZXIgPSAnJztcclxuICAgICAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbChleGVyY2lzaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN1cnJlbnRFeGVyY2lzZSA9IE1hdGguZmxvb3IoJHNjb3BlLnRpbWVSZW1haW5pbmcgLyBleGNlcmNpc2VUaW1lKTtcclxuICAgICAgICB2YXIgdGltZXIgPSAkc2NvcGUudGltZVJlbWFpbmluZyAtIGN1cnJlbnRFeGVyY2lzZSAqIGV4Y2VyY2lzZVRpbWU7XHJcbiAgICAgICAgJHNjb3BlLnRpbWVyID0gdGltZXIgPiAkc2NvcGUudGltZUV4ZXJjaXNpbmcgPyB0aW1lciAtICRzY29wZS50aW1lRXhlcmNpc2luZyA6IHRpbWVyO1xyXG4gICAgICAgIGlmICh0aW1lciA+ICRzY29wZS50aW1lRXhlcmNpc2luZykge1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc2NvcGUuZXhlcmNpc2UgPSBleGVyY2lzZXNbZXhlcmNpc2VzLmxlbmd0aCAtIGN1cnJlbnRFeGVyY2lzZSAtIDFdO1xyXG4gICAgICAgIGlmICh0aW1lciA9PT0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nKSB7XHJcbiAgICAgICAgICBzb3VuZHMub24ucGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGltZXIgPT09IDApIHtcclxuICAgICAgICAgIHNvdW5kcy5vZmYucGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmV4ZXJjaXNlLnNwbGl0ICYmIHRpbWVyID09PSBNYXRoLmZsb29yKCRzY29wZS50aW1lRXhlcmNpc2luZyAvIDIpKSB7XHJcbiAgICAgICAgICBzb3VuZHMuc3dpdGNoLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyk7XHJcbiAgICAgICRzY29wZS50aW1lciA9ICcnO1xyXG4gICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICRzY29wZS5leGVyY2lzZSA9IHtuYW1lOiAnJywgc3BsaXQ6IGZhbHNlfTtcclxuICAgIH1cclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnQ2F0ZWdvcmllc1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0Q2F0ZWdvcmllcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcycpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRUYXNrcyA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9jYXRlZ29yaWVzLycgKyBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZENhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9jYXRlZ29yaWVzLycsIGNhdGVnb3J5KTtcclxuICB9O1xyXG5cclxuICBzdmMuYWRkVGFzayA9IGZ1bmN0aW9uIChjYXRlZ29yeSwgdGFzaykge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkgKyAnL3Rhc2tzJywgdGFzayk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHN2Yy5jaG9pY2VzID0gbGlzdDtcclxuICAgIHN2Yy5wcmlvcml0eUxpc3QgPSBbXTtcclxuICAgIC8vTWFrZSBhIG5ldyBjaG9pY2UgbGlzdFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IGxpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICBzdmMucHJpb3JpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICBmaXJzdENob2ljZTogbGlzdFtyYW5kb20gPT09IDAgPyBpIDogal0ubmFtZSxcclxuICAgICAgICAgIHNlY29uZENob2ljZTogbGlzdFtyYW5kb20gPT09IDAgPyBqIDogaV0ubmFtZSxcclxuICAgICAgICAgIGNob2ljZTogJydcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2h1ZmZsZShzdmMucHJpb3JpdHlMaXN0KTtcclxuICAgIGZvciAoaSBpbiBzdmMucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHN2Yy5wcmlvcml0eUxpc3RbaV0uaWQgPSBpICsgMTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UHJpb3JpdHlMaXN0ID0gZnVuY3Rpb24obGlzdCkge1xyXG4gICAgcmV0dXJuIHN2Yy5wcmlvcml0eUxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xyXG4gICAgdmFyIG0gPSBhcnJheS5sZW5ndGgsIHQsIGk7XHJcbiAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZeKAplxyXG4gICAgd2hpbGUgKG0pIHtcclxuICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW504oCmXHJcbiAgICAgIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtLS0pO1xyXG4gICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcbiAgICAgIC8vYXJyYXlbbV0uZmlyc3RDaG9pY2U7XHJcbiAgICAgIHQgPSBhcnJheVttXTtcclxuICAgICAgYXJyYXlbbV0gPSBhcnJheVtpXTtcclxuICAgICAgYXJyYXlbaV0gPSB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0VtYWlsU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5zZW5kID0gZnVuY3Rpb24gKGVtYWlsKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9lbWFpbCcsIGVtYWlsKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5zZXJ2aWNlKCdGaWxlU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgICBzdmMuZ2V0SW1hZ2VzID0gZnVuY3Rpb24oZm9sZGVyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZmlsZXMvaW1hZ2VzLycgKyBmb2xkZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdmMuZ2V0U291bmRzID0gZnVuY3Rpb24oZm9sZGVyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZmlsZXMvc291bmRzLycgKyBmb2xkZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdHYW1lU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgICBzdmMuZ2V0SGlnaHNjb3JlID0gZnVuY3Rpb24gKGdhbWUsIHVzZXIpIHtcclxuICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9nYW1lcy8nICsgZ2FtZSArICcvJyArIHVzZXIgKyAnL2hpZ2hzY29yZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdmMuc2V0SGlnaHNjb3JlID0gZnVuY3Rpb24gKGdhbWUsIHVzZXIsIHNjb3JlKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2dhbWVzLycgKyBnYW1lICsgJy8nICsgdXNlciArICcvaGlnaHNjb3JlJywge1xyXG4gICAgICAgIHNjb3JlOiBzY29yZVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdMYW5ndWFnZVN2YycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmxhbmd1YWdlcyA9IFtcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRU5cIixcclxuICAgICAgXCJuYW1lXCI6IFwiRW5nbGlzaFwiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tZ2JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiTkxcIixcclxuICAgICAgXCJuYW1lXCI6IFwiTmVkZXJsYW5kc1wiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tbmxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRlJcIixcclxuICAgICAgXCJuYW1lXCI6IFwiRnJhbsOnYWlzXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1mclwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgc3ZjLnRleHQgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkVOXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIk5MXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkZSXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBzdmMuc2VsZWN0ZWRMYW5ndWFnZSA9IHN2Yy5sYW5ndWFnZXNbMF07XHJcblxyXG4gIHN2Yy5zZXRMYW5ndWFnZSA9IGZ1bmN0aW9uIChsYW5ndWFnZSkge1xyXG4gICAgc3ZjLnNlbGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgIHJldHVybiBsYW5ndWFnZTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gc3ZjLnNlbGVjdGVkTGFuZ3VhZ2U7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ1Bvc3RzU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5mZXRjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlID0gZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgcG9zdCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBvc3QgPSBmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cy8nICsgcG9zdC5faWQpO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlRlblRoaW5nc1N2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFF1ZXVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2JvdHMvdGVudGhpbmdzL3F1ZXVlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3RzID0gZnVuY3Rpb24gKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgdmFyIHVybCA9XHJcbiAgICAgIGAvYXBpL3RlbnRoaW5ncy9saXN0cz9gICtcclxuICAgICAgKG9wdGlvbnMubGltaXQgPyBgJmxpbWl0PSR7b3B0aW9ucy5saW1pdH1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5wYWdlID8gYCZwYWdlPSR7b3B0aW9ucy5wYWdlfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnNvcnRCeSA/IGAmc29ydF9ieT0ke29wdGlvbnMuc29ydEJ5fWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLm9yZGVyQnkgPyBgJm9yZGVyX2J5PSR7b3B0aW9ucy5vcmRlckJ5fWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLmxhbmd1YWdlcyAmJiBvcHRpb25zLmxhbmd1YWdlcy5sZW5ndGggPiAwID8gYCZsYW5ndWFnZT0ke29wdGlvbnMubGFuZ3VhZ2VzLmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLmNhdGVnb3JpZXMgJiYgb3B0aW9ucy5jYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyBgJmNhdGVnb3JpZXM9JHtvcHRpb25zLmNhdGVnb3JpZXMuam9pbihcIixcIil9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuc2VhcmNoID8gYCZzZWFyY2g9JHtvcHRpb25zLnNlYXJjaH1gIDogXCJcIik7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9jYXRlZ29yaWVzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2xhbmd1YWdlc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucHV0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCwgbGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZUxpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0c1wiLCB7XHJcbiAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIGxpc3Q6IGxpc3QsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuZGVsZXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnB1dChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXMvXCIgKyB2YWx1ZS5faWQsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXNcIiwgdmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5kZWxldGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzL1wiICsgdmFsdWUuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMucmVwb3J0TGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvcmVwb3J0L1wiICsgdXNlci5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9jYXRlZ29yaWVzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0TGFuZ3VhZ2VTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9sYW5ndWFnZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEJsdXJicyA9IGZ1bmN0aW9uIChsaXN0LCB0eXBlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvbGlzdHMvJHtsaXN0Ll9pZH0vYmx1cmJzLyR7dHlwZX1gKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRHYW1lID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9nYW1lLyR7aWR9YCk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJVc2VyU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRVc2VycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzL2FsbFwiKTtcclxuICB9O1xyXG5cclxuICBzdmMudG9nZ2xlQmFuID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3VzZXJzL2Jhbi8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSB0b2tlbjtcclxuICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hdXRoZW50aWNhdGVcIiwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9sb2dpblwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyLl9pZCwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi92ZXJpZmljYXRpb25cIiwge1xyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvcGFzc3dvcmRcIiwge1xyXG4gICAgICBvbGRQYXNzd29yZDogb2xkUGFzc3dvcmQsXHJcbiAgICAgIG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VyLCBuZXdVc2VybmFtZSkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi91c2VybmFtZVwiLCB7XHJcbiAgICAgICAgbmV3VXNlcm5hbWU6IG5ld1VzZXJuYW1lLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmNvbnRyb2xsZXIoJ1F1aXpBbmltYWxzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgRmlsZVN2Yykge1xyXG5cclxuICAgIEZpbGVTdmMuZ2V0U291bmRzKCdhbmltYWxzJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIHNvdW5kOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgNSk7XHJcblxyXG4gICAgJHNjb3BlLmdldFNjb3JlID0gKCkgPT4gYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwubmFtZSA9PT0gYW5pbWFsLmd1ZXNzKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWA7XHJcblxyXG4gICAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwuZ3Vlc3MpLmxlbmd0aCA9PT0gJHNjb3BlLmFuaW1hbHMubGVuZ3RoO1xyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpekdvb2dsZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ2dvb2dsZScpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TG9nb3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdsb2dvcycpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TW92aWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnbW92aWVzJylcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuY29udHJvbGxlcignUXVpelNrZWxldG9uc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIEZpbGVTdmMpIHtcclxuXHJcbiAgICBGaWxlU3ZjLmdldEltYWdlcygnc2tlbGV0b25zJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIGltYWdlOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgMTApO1xyXG5cclxuICAgICRzY29wZS5nZXRTY29yZSA9ICgpID0+IGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAgICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxuICB9KTsiXX0=
