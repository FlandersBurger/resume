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
}), angular.module("app").controller("AppCtrl", function ($scope, $location, LanguageSvc, UserSvc) {
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
  $scope.$on("login", _ => {
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
  }), $scope.valueOrder = {
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
  };
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiY29udHJvbGxlcnMvYXBwLmN0cmwuanMiLCJjb250cm9sbGVycy9hc3Rlcm9pZHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2J1YmJsZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NoYXJhZGVzLmN0cmwuanMiLCJjb250cm9sbGVycy9jb250YWN0LmN0cmwuanMiLCJjb250cm9sbGVycy9leHBlcmllbmNlLmN0cmwuanMiLCJjb250cm9sbGVycy9ob2JiaWVzLmN0cmwuanMiLCJjb250cm9sbGVycy9sZW1taW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbGlzdHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xvZ2luLmN0cmwuanMiLCJjb250cm9sbGVycy9wb3N0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJpb3JpdGl6ZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJvZmlsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvc2tpbGxzLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3MuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2FkbWluLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NnYW1lLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NvbGQuY3RybC5qcyIsImNvbnRyb2xsZXJzL3dvcmtvdXQuY3RybC5qcyIsImRpcmVjdGl2ZXMvY2xpY2stb3V0c2lkZS5kaXIuanMiLCJkaXJlY3RpdmVzL3VpLXJvdXRlci1zdHlsZXMuZGlyLmpzIiwic2VydmljZXMvY2F0ZWdvcmllcy5zdmMuanMiLCJzZXJ2aWNlcy9lbWFpbC5zdmMuanMiLCJzZXJ2aWNlcy9maWxlLnN2Yy5qcyIsInNlcnZpY2VzL2dhbWUuc3ZjLmpzIiwic2VydmljZXMvbGFuZ3VhZ2Uuc3ZjLmpzIiwic2VydmljZXMvcG9zdHMuc3ZjLmpzIiwic2VydmljZXMvdGVudGhpbmdzLnN2Yy5qcyIsInNlcnZpY2VzL3VzZXIuc3ZjLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9hbmltYWxzLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2dvb2dsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9sb2dvcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9tb3ZpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvc2tlbGV0b25zLmN0cmwuanMiXSwibmFtZXMiOlsiZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwIiwiYmFzZSIsImxldHRlcnMiLCJkb21haW5zIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJTdHJpbmciLCJwcm90b3R5cGUiLCJ2YWx1ZSIsInJlZHVjZSIsInJlc3VsdCIsImxldHRlciIsInJlcGxhY2UiLCJ0aGlzIiwiU1BFQ0lBTF9DSEFSQUNURVJTIiwiUmVnRXhwIiwidG9Mb3dlckNhc2UiLCJyZW1vdmVEaWFjcml0aWNzIiwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMiLCJleHRyYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsIiRzY29wZSIsIiRsb2NhdGlvbiIsIkxhbmd1YWdlU3ZjIiwiVXNlclN2YyIsImxvZ2luIiwidXNlciIsImxvZ2dlZEluIiwibG9jYWxTdG9yYWdlIiwiX2lkIiwiY3VycmVudFVzZXIiLCIkIiwibG9hZCIsImZhZGVPdXQiLCJmYWRlSW4iLCJvbiIsImNsb3Nlc3QiLCJ0b2dnbGVDbGFzcyIsImNoZWNrZWQiLCJkb2N1bWVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRoZW1lQ291bnRlciIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImZsaXBUaGVtZSIsInNob3ciLCJoaWRlIiwic2V0VGltZW91dCIsImdldEpTT04iLCJza2lsbHMiLCJmaWx0ZXIiLCJza2lsbCIsImhvYmJpZXMiLCJqb2JzIiwiam9iIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImNoYXJhZGVzIiwiZ2V0VGltZVNwYW4iLCJsYW5ndWFnZXMiLCJzZWxlY3RlZExhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJzZWxlY3RMYW5ndWFnZSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJob3ZlcmRpdiIsImRpdmlkIiwibGVmdCIsImNsaWVudFgiLCJ0b3AiLCJjbGllbnRZIiwiZ2V0RWxlbWVudEJ5SWQiLCJjc3MiLCJ0b2dnbGUiLCJ0aGVuIiwicmVzcG9uc2UiLCIkb24iLCJfIiwiYmlydGhEYXRlIiwibG9hZGluZyIsImxvZ291dCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJjbGVhciIsImNhdGNoIiwiZXJyb3IiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImNhcGl0YWxpemUiLCJHYW1lU3ZjIiwiYW5ub3VuY2UiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZm9udCIsImZpbGxTdHlsZSIsInRleHRBbGlnbiIsInNob3RzIiwiYXN0ZXJvaWRzIiwicG93ZXJ1cHMiLCJleHBsb3Npb25zIiwibWFwIiwic3BhY2VwaWNzIiwic3BhY2UiLCJwb3dlcnVwVHlwZXMiLCJuYW1lIiwiYW5ub3VuY2VtZW50IiwiY3ljbGUiLCJyb3dzIiwiY29sdW1ucyIsInNpemUiLCJpbWciLCJJbWFnZSIsImFjdGl2YXRlIiwic3BhY2VzaGlwIiwibWF4U3BlZWQiLCJjb29sZG93biIsImNvb2xkb3duVGltZSIsInJhbmdlIiwic2hpZWxkIiwiZXhwbG9kZSIsInNwYXduQXN0ZXJvaWRzIiwicG93ZXJ1cCIsImFycmF5Iiwic3JjIiwiZXhwbG9zaW9uSW1hZ2UiLCJldmFsdWF0ZUtleXMiLCJwbGF5aW5nIiwic2hvb3QiLCJyb3RhdGlvbiIsInNwZWVkIiwic2NvcmUiLCIkYXBwbHkiLCJTcGFjZXNoaXAiLCJhdXRvU3Bhd24iLCJ3aWR0aCIsImhlaWdodCIsImNhbm5vbiIsIngiLCJ5IiwicG9zaXRpb24iLCJhbmdsZSIsImlkIiwicm91bmQiLCJTaG90IiwibW92ZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJmaWxsIiwiYXN0ZXJvaWQiLCJoaXQiLCJnYW1lT3ZlciIsImNvcyIsInNpbiIsImxpZmVzcGFuIiwiQXN0ZXJvaWQiLCJnZXRFbnRyeVBvc2l0aW9uIiwicm90YXRpb25TcGVlZCIsIkV4cGxvc2lvbiIsInNob3QiLCJwb2ludHMiLCJzcGF3blBvd2VydXAiLCJvYmplY3QiLCJQb3dlcnVwIiwiZGVsYXkiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiY29sdW1uIiwicm93IiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImdyaWRYIiwiZ3JpZFkiLCJvYmplY3QxIiwib2JqZWN0MiIsImtleXMiLCJhbW91bnQiLCJoaWdoc2NvcmUiLCJzZXRIaWdoc2NvcmUiLCJyZXNpemVDYW52YXMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5Q29kZSIsIndoaWNoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsImNsZWFyUmVjdCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJ0YWxseSIsImZpbGxUZXh0IiwibWVhc3VyZVRleHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJidWJibGVzIiwiY29sb3JzIiwiQnViYmxlIiwicmFkaXVzIiwiZXhwYW5kaW5nIiwiY2lyY3VtZmVyZW5jZSIsIm1heFJhZGl1cyIsInZ4IiwidnkiLCJmaWx0ZXJCdWJibGVzIiwiYnViYmxlIiwic2VsZWN0V29yZCIsImNhdGVnb3J5Iiwid29yZCIsIkVtYWlsU3ZjIiwib3B0aW9ucyIsInRleHQiLCJjb250YWN0IiwiZW1haWwiLCJwaG9uZSIsImFib3V0IiwibWVzc2FnZSIsInNlbmRpbmciLCJzZW50Iiwic3RhdHVzIiwiZXJyIiwiZ2V0U2tpbGwiLCJza2lsbENvZGUiLCJjb2RlIiwiJHdpbmRvdyIsImhvYmJ5U2VsZWN0b3JWaXNpYmxlIiwic2VsZWN0ZWRIb2JieSIsInNlbGVjdEhvYmJ5IiwiaG9iYnkiLCJzaG93SG9iYnkiLCJpbmRleCIsImltYWdlcyIsIkxFRlQiLCJSSUdIVCIsImxlbW1pbmdzSW1hZ2UiLCJkZWNvckltYWdlIiwibGVtbWluZ3MiLCJzdGFydGVkIiwiYWN0aW9ucyIsIndhbGsiLCJzdGFydCIsImVuZCIsInJldmVyc2UiLCJodWgiLCJmYWxsIiwiZmx5Iiwic3RvcCIsImNsaW1iIiwiYnVpbGQiLCJwdW5jaCIsImRpZyIsIkxlbW1pbmciLCJpbml0IiwiYWN0IiwiYWN0aW9uIiwiYW5pbWF0aW9uIiwic2NhbGUiLCJoYXRjaCIsIm9wZW4iLCJyZWN0IiwiQ2F0ZWdvcmllc1N2YyIsInNob3dDYXRlZ29yeSIsImdldENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidGFza3MiLCJqIiwidGFzayIsInNlbGVjdENhdGVnb3J5Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdGVkVGFza3MiLCJzZWxlY3RhYmxlVGFza3MiLCJlbnRlcmVkQ2F0ZWdvcnkiLCJuZXdDYXRlZ29yeSIsImZvdW5kIiwiYWRkQ2F0ZWdvcnkiLCJuZXdUYXNrIiwic2VsZWN0VGFzayIsImFkZFRhc2siLCJlbnRlcmVkVGFzayIsInJlbW92ZVRhc2siLCJ1bnNlbGVjdFRhc2siLCJ0YXNrTGlzdCIsInNwbGljZSIsImluZGV4T2YiLCJzdGFydFByaW9yaXRpemluZyIsInNldFByaW9yaXR5TGlzdCIsInBhdGgiLCJnZXRRdWVzdGlvbnMiLCJjb3VudGVyIiwidWkiLCJmaXJlYmFzZXVpIiwiQXV0aFVJIiwic3RhcnRVSSIsImNhbGxiYWNrcyIsInNpZ25JblN1Y2Nlc3MiLCJjcmVkZW50aWFsIiwicmVkaXJlY3RVcmwiLCJnZXRJZFRva2VuIiwiaWRUb2tlbiIsImF1dGhlbnRpY2F0ZSIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJlbWFpbFZlcmlmaWVkIiwiJGVtaXQiLCJtb2RhbCIsInR5cGUiLCJzaWduSW5GYWlsdXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjcmVkIiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJ1aVNob3duIiwic3R5bGUiLCJkaXNwbGF5Iiwic2lnbkluU3VjY2Vzc1VybCIsInNpZ25Jbk9wdGlvbnMiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJQUk9WSURFUl9JRCIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwic2lnbkluRmxvdyIsImV2ZW50IiwicmVzZXQiLCIkZmlsdGVyIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJjcmVhdGUiLCJib2R5IiwicG9zdCIsImZldGNoIiwicG9zdHMiLCJnZXRQb3N0IiwidW5zaGlmdCIsInByaW9yaXR5TGlzdCIsImdldFByaW9yaXR5TGlzdCIsInNlbGVjdGVkUXVlc3Rpb24iLCJjdXJyZW50UXVlc3Rpb24iLCJkb25lIiwibWFrZUNob2ljZSIsImNob2ljZSIsImZpcnN0Q2hvaWNlIiwic2Vjb25kQ2hvaWNlIiwiZ2V0QnV0dG9uVmFsdWUiLCJzZWxlY3RRdWVzdGlvbiIsInF1ZXN0aW9uIiwiZ2V0RmlsdGVyZWRQcmlvcml0eUxpc3QiLCJnZXRDaG9pY2VzTWFkZSIsImNob2ljZXNNYWRlIiwiZ2V0QnV0dG9uQ2xhc3MiLCJzaG93Q2hvaWNlcyIsImNoYXJ0Q2xpY2siLCJjaGFydCIsImdldFNlZ21lbnRzQXRFdmVudCIsInNob3dSZXN1bHRzIiwicmVzcG9uc2l2ZSIsInNlZ21lbnRTaG93U3Ryb2tlIiwic2VnbWVudFN0cm9rZUNvbG9yIiwic2VnbWVudFN0cm9rZVdpZHRoIiwicGVyY2VudGFnZUlubmVyQ3V0b3V0IiwiYW5pbWF0aW9uU3RlcHMiLCJhbmltYXRpb25FYXNpbmciLCJhbmltYXRlUm90YXRlIiwiYW5pbWF0ZVNjYWxlIiwibGVnZW5kVGVtcGxhdGUiLCJjaG9pY2VzIiwidm90ZXMiLCJsYWJlbCIsImNvdW50cmllcyIsImZsYWciLCJ0aWRiaXQiLCJ1cGRhdGVVc2VyRmxhZ3MiLCJ1c2VyRmxhZ3MiLCJmbGFncyIsImNvdW50cnkiLCJpbmNsdWRlcyIsImRhdGVPcHRpb25zIiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJpbml0RGF0ZSIsImRhdGVwaWNrZXJNb2RlIiwidXNlcm5hbWVUb2dnbGUiLCJwYXNzd29yZFRvZ2dsZSIsInRvZ2dsZVVzZXJuYW1lIiwibmV3VXNlcm5hbWUiLCJ1c2VybmFtZSIsInRvZ2dsZVBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJjaGVja1Bhc3N3b3JkIiwicGFzc3dvcmQiLCJvcmlnaW5hbEJnIiwiYW5pbWF0ZSIsImJhY2tncm91bmRDb2xvciIsImNoYW5nZVBhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJjaGFuZ2VVc2VybmFtZSIsInVwZGF0ZVVzZXIiLCIkd2F0Y2giLCJsb2FkQ291bnRyaWVzIiwiJHF1ZXJ5Iiwic2VsZWN0ZWRTa2lsbCIsInNraWxsc1Zpc2libGUiLCJwcm9qZWN0cyIsImxhYmVscyIsImVtcGxveWVyIiwiY29uY2F0IiwiZmlsdGVyZWRQcm9qZWN0cyIsInByb2plY3QiLCJzZXRTZWxlY3RlZFNraWxsIiwiY2hhcnRPcHRpb25zIiwiY3V0b3V0UGVyY2VudGFnZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJ0b29sdGlwcyIsImNoYXJ0U3R5bGUiLCJpbWFnZSIsIlRlblRoaW5nc1N2YyIsInBhZ2UiLCJsaXN0cyIsInNlYXJjaCIsIm5ld0l0ZW0iLCJsYW5ndWFnZUZpbHRlciIsImNhdGVnb3J5RmlsdGVyIiwic2VsZWN0ZWRMaXN0IiwidW5kZWZpbmVkIiwiZXhoYXVzdGVkIiwia2V5RG93biIsImlzIiwiY3JlYXRlVmFsdWUiLCJmb2N1cyIsImFkZExpc3QiLCJjdXJyZW50TGFuZ3VhZ2UiLCJjcmVhdG9yIiwidmFsdWVzIiwiYW5zd2VycyIsImlzRHluYW1pYyIsInNldFNlbGVjdGVkTGlzdCIsImxpc3QiLCJnZXRMaXN0IiwiZ2V0TGFuZ3VhZ2VzIiwiZ2V0TGlzdExhbmd1YWdlU3RhdHMiLCJsYW5ndWFnZVN0YXRzIiwiY291bnQiLCJnZXRMaXN0Q2F0ZWdvcnlTdGF0cyIsImNhdGVnb3J5U3RhdHMiLCJnZXRMaXN0cyIsInZhbHVlT3JkZXIiLCJmaWVsZCIsIm9yZGVyIiwib3JkZXJCeSIsImdldE1vcmVMaXN0cyIsImFzeW5jIiwic2V0TGFuZ3VhZ2VGaWx0ZXIiLCJzZXRDYXRlZ29yeUZpbHRlciIsInRvZ2dsZUNhdGVnb3J5RmlsdGVyIiwiYWxsQ2F0ZWdvcmllcyIsInNvcnRCeSIsImxpbWl0IiwibmV4dFBhZ2UiLCJ1cGRhdGVWYWx1ZSIsInVwZGF0ZUxpc3RWYWx1ZSIsImRlbGV0ZUxpc3RWYWx1ZSIsImhhc0R1cGxpY2F0ZSIsImFsZXJ0IiwiY3JlYXRlTGlzdFZhbHVlIiwiYmx1cmIiLCJkZWxldGVWYWx1ZSIsInVwc2VydExpc3QiLCJ1cGRhdGVzIiwic2F2aW5nIiwiY2hhbmdlcyIsInVwZGF0ZUxpc3QiLCJsaXN0SW5kZXgiLCJmaW5kSW5kZXgiLCJjcmVhdGVMaXN0IiwiYXNzaWduIiwiZGVsZXRlTGlzdCIsImNvbmZpcm0iLCJub25FbmdsaXNoSW5kZXgiLCJzZXREaWZmaWN1bHR5IiwiZGlmZmljdWx0eSIsInNldEZyZXF1ZW5jeSIsImZyZXF1ZW5jeSIsInNldENhdGVnb3J5IiwiY2F0ZWdvcnlJbmRleCIsInNvbWUiLCJhbnN3ZXIiLCJyZW1vdmVBbGxCdXRMZXR0ZXJzIiwiZ2V0Qmx1cmJzIiwiZ2V0dGluZ0JsdXJicyIsImFkbWluIiwiZ2V0VXNlcnMiLCJnZXRRdWV1ZSIsInF1ZXVlIiwiZ2V0UGF1c2UiLCJwYXVzZWQiLCJ1c2VycyIsInRvZ2dsZUJhbiIsInRvZ2dsZVBhdXNlIiwiJHN0YXRlUGFyYW1zIiwiZ2FtZSIsImdldEdhbWUiLCJmbGFzaCIsImVsZW1lbnQiLCJjb2xvciIsImFkZFZhbHVlIiwic2VhcmNoTmFtZSIsInNldFVzZXJGaWx0ZXIiLCJ1c2VyRmlsdGVyIiwic2V0VXBkYXRlRmlsdGVyIiwidXBkYXRlRmlsdGVyIiwiZmlsdGVyZWRMaXN0cyIsImNhdGVnb3J5RmlsdGVycyIsImxhbmd1YWdlRmlsdGVycyIsInNlbGVjdExpc3QiLCJsaXN0T3JkZXIiLCJzb3J0ZXIiLCJzb3J0RmllbGQiLCJzb3J0TGFiZWwiLCJnZXRMYW5ndWFnZUNvdW50IiwiZ2V0Q2F0ZWdvcnlDb3VudCIsImdldFVwZGF0ZUNvdW50IiwidXNlckZpbHRlcnMiLCJBbGwiLCJsaXN0MSIsImxpc3QyIiwidXNlckNvdW50IiwiZ2V0Q2F0ZWdvcnlDbGFzcyIsInRvZ2dsZUNhdGVnb3J5Iiwic2F2ZUxpc3QiLCJyZXBvcnRMaXN0IiwicmVwb3J0ZWQiLCJsaXN0QnV0dG9uQ2xhc3MiLCJibHVyYnMiLCJkZXNjcmlwdGlvbiIsInRpbWVSZW1haW5pbmciLCJ0aW1lRXhlcmNpc2luZyIsInRpbWVSZXN0aW5nIiwicmVzdCIsImV4ZXJjaXNpbmciLCJzb3VuZHMiLCJBdWRpbyIsIm9mZiIsInN3aXRjaCIsImV4ZXJjaXNlcyIsInNwbGl0IiwicHJvZ3Jlc3MiLCJ3b3Jrb3V0IiwiZXhjZXJjaXNlVGltZSIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lciIsImV4ZXJjaXNlIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50RXhlcmNpc2UiLCJwbGF5IiwiZGlyZWN0aXZlIiwiJGRvY3VtZW50IiwicmVzdHJpY3QiLCJzY29wZSIsImNsaWNrT3V0c2lkZSIsImxpbmsiLCJlbCIsImF0dHIiLCJ0YXJnZXQiLCJjb250YWlucyIsIiRldmFsIiwiJHN0YXRlIiwiJGNvbXBpbGUiLCIkaW50ZXJwb2xhdGUiLCJnZXRTdHlsZSIsInRlbXBsYXRlU3R5bGVVcmwiLCJocmVmIiwicmVsIiwibWF0Y2giLCJlbGVtIiwidGVtcGxhdGVTdHlsZXMiLCJodG1sIiwic3RhcnRTeW1ib2wiLCJlbmRTeW1ib2wiLCJhcHBlbmQiLCJ0b1N0YXRlIiwidG9QYXJhbXMiLCJmcm9tU3RhdGUiLCJmcm9tUGFyYW1zIiwic3RhdGVzIiwicGFyZW50IiwiZ2V0Iiwidmlld3MiLCJ2aWV3IiwiZmxhdCIsImdldFN0eWxlcyIsIiRodHRwIiwic3ZjIiwiZ2V0VGFza3MiLCJ0IiwibSIsInNodWZmbGUiLCJnZXRJbWFnZXMiLCJmb2xkZXIiLCJnZXRTb3VuZHMiLCJnZXRIaWdoc2NvcmUiLCJqb2luIiwicHV0IiwiZGVsZXRlIiwiZ2V0VXNlciIsInNldFRva2VuIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJjcmVhdGVVc2VyIiwiRmlsZVN2YyIsImFuaW1hbHMiLCJhbmltYWwiLCJzb3VuZCIsInN1YnN0cmluZyIsImdldFJhbmRvbUFuaW1hbHMiLCJndWVzcyIsImdldFNjb3JlIiwiaXNTY29yZVZpc2libGUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUFBLDJCQUFBQSxHQUFBLENBQ0E7SUFDQUMsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLENBQUE7RUFHQUMsT0FBQUEsR0FBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsTUFBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsQ0FBQTtBQUdBQyxNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGtCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBUiwyQkFBQUEsQ0FBQVMsTUFBQUEsQ0FBQSxDQUFBQyxNQUFBQSxFQUFBQyxNQUFBQSxLQUNBRCxNQUFBQSxDQUFBRSxPQUFBQSxDQUFBRCxNQUFBQSxDQUFBVCxPQUFBQSxFQUFBUyxNQUFBQSxDQUFBVixJQUFBQSxDQUFBQSxFQUNBWSxJQUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUE7QUFHQSxNQUFBQyxrQkFBQUEsR0FBQSxxQ0FBQTtBQUVBVixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLHlCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBRCxPQUFBQSxDQUFBLElBQUFHLE1BQUFBLENBQUEsSUFBQUQsa0JBQUFBLEdBQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsRUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQVYsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxxQkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUcsV0FBQUEsRUFBQUEsQ0FBQUMsZ0JBQUFBLEVBQUFBLENBQUFDLHVCQUFBQSxFQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWQsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxTQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBVyxLQUFBQSxFQUFBQTtJQUNBLE9BQUFOLElBQUFBLENBQUFELE9BQUFBLENBQUEsSUFBQUcsTUFBQUEsQ0FBQSxLQUFBRCxrQkFBQUEsR0FBQUssS0FBQUEsR0FBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxHQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBZixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFlBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFPLE1BQUFBLENBQUEsQ0FBQSxDQUFBLENBQUFDLFdBQUFBLEVBQUFBLEdBQUFSLElBQUFBLENBQUFTLEtBQUFBLENBQUEsQ0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWxCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsWUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLENBQUFBLE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsZUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLENBQUFBLE9BQUFBLENBQUEsR0FBQSxFQUFBLE1BQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsY0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQWUsSUFBQUEsRUFBQVgsT0FBQUEsRUFBQUE7SUFFQSxLQURBLElBQUFZLGFBQUFBLEdBQUFYLElBQUFBLEVBQ0FZLENBQUFBLEdBQUEsQ0FBQSxFQUFBQSxDQUFBQSxHQUFBRixJQUFBQSxDQUFBRyxNQUFBQSxFQUFBRCxDQUFBQSxFQUFBQSxFQUNBRCxhQUFBQSxHQUFBQSxhQUFBQSxDQUFBWixPQUFBQSxDQUFBVyxJQUFBQSxDQUFBRSxDQUFBQSxDQUFBQSxFQUFBYixPQUFBQSxDQUFBYSxDQUFBQSxDQUFBQSxDQUFBQTtJQUVBLE9BQUFELGFBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBcEIsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxVQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBYyxZQUFBQSxDQUFBLENBQUEsVUFBQSxFQUFBLFNBQUEsQ0FBQSxFQUFBLFNBQUEsQ0FBQSxDQUFBQSxZQUFBQSxDQUFBeEIsT0FBQUEsRUFBQSxPQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBQyxNQUFBQSxDQUFBQyxjQUFBQSxDQUFBdUIsTUFBQUEsQ0FBQXJCLFNBQUFBLEVBQUEsY0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQWdCLFFBQUFBLEVBQUFBLENBQUFqQixPQUFBQSxDQUFBLHVCQUFBLEVBQUEsR0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQVIsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQXVCLE1BQUFBLENBQUFyQixTQUFBQSxFQUFBLGdCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBc0IsUUFBQUEsRUFBQUE7SUFFQSxPQURBQSxRQUFBQSxLQUFBQSxRQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBLEdBQUEsQ0FBQSxHQUFBLEdBQUFqQixJQUFBQSxFQUFBa0IsT0FBQUEsQ0FBQUQsUUFBQUEsQ0FBQUEsR0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBO0FBR0EsTUFBQUUsVUFBQUEsR0FBQUEsQ0FBQUMsR0FBQUEsRUFBQUMsU0FBQUEsS0FBQUE7RUFDQSxJQUFBQyxHQUFBQSxHQUFBLEVBQUE7RUFDQSxLQUFBLE1BQUFDLEdBQUFBLElBQUFILEdBQUFBLEVBQ0FFLEdBQUFBLENBQUFFLElBQUFBLENBQUEsQ0FBQUQsR0FBQUEsRUFBQUgsR0FBQUEsQ0FBQUcsR0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUE7RUFFQUQsR0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBQyxDQUFBQSxFQUFBQyxDQUFBQSxLQUFBTixTQUFBQSxHQUFBSyxDQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBQyxDQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBQSxDQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBRCxDQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0VBQ0EsSUFBQUUsU0FBQUEsR0FBQSxDQUFBLENBQUE7RUFHQSxPQUZBTixHQUFBQSxDQUFBTyxPQUFBQSxDQUFBQyxJQUFBQSxJQUFBRixTQUFBQSxDQUFBRSxJQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUFBLElBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFFQUYsU0FBQTtBQUFBLENBQUE7QUM3cUJBRyxPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsRUFBQSxDQUNBLFdBQUEsRUFDQSxjQUFBLEVBQ0EsV0FBQSxFQUNBLFlBQUEsRUFDQSxZQUFBLEVBQ0EsYUFBQSxFQUNBLGFBQUEsRUFDQSxVQUFBLEVBQ0EsWUFBQSxFQUNBLGlCQUFBLENBQUEsQ0FBQSxFQ2pCQUQsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxVQUFBQyxjQUFBQSxFQUFBQyxrQkFBQUEsRUFBQUMsbUJBQUFBLEVBQUFDLGlCQUFBQSxFQUFBQTtFQUNBRixrQkFBQUEsQ0FBQUcsU0FBQUEsQ0FBQSxPQUFBLENBQUEsRUFDQUYsbUJBQUFBLENBQUFILE1BQUFBLENBQUFNLFVBQUFBLENBQUFBLENBQUEsQ0FBQSxDQUFBLEVBRUFMLGNBQUFBLENBQ0FNLEtBQUFBLENBQUEsTUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsT0FBQTtJQUNBQyxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsUUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBQyxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBQyxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsWUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsYUFBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxRQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsWUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsWUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsYUFBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxNQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxPQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGlCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG9CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxlQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxnQkFBQTtJQUNBRSxVQUFBQSxFQUFBLGtCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxtQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsY0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGlCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxhQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsRUFHQUwsaUJBQUFBLENBQUFPLFNBQUFBLENBQUE7SUFDQUMsT0FBQUEsRUFBQUEsQ0FBQSxDQUFBO0lBQ0FDLFdBQUFBLEVBQUFBLENBQUE7RUFBQSxDQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUN6SUFmLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FlLE9BQUFBLENBQUEsY0FBQSxFQUFBLFVBQUFDLFVBQUFBLEVBQUFDLFFBQUFBLEVBQUFBO0VBU0EsSUFBQUMsVUFBQUE7SUFDQUMsT0FBQUEsR0FBQSxTQUFBQSxDQUFBLEVBQUE7TUFBQSxDQUNBRCxVQUFBQSxHQUFBLElBQUFFLFNBQUFBLENBVEEsUUFBQSxLQUFBQyxNQUFBQSxDQUFBQyxRQUFBQSxDQUFBQyxRQUFBQSxHQUNBLFFBQUEsR0FBQUYsTUFBQUEsQ0FBQUMsUUFBQUEsQ0FBQUUsSUFBQUEsR0FFQSxPQUFBLEdBQUFILE1BQUFBLENBQUFDLFFBQUFBLENBQUFFLElBQUFBLENBQUFBLEVBUUFDLE1BQUFBLEdBQUEsWUFBQTtRQUNBQyxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBLHFCQUFBLENBQ0E7TUFBQSxDQUFBLEVBRUFULFVBQUFBLENBQUFVLE9BQUFBLEdBQUEsVUFBQUMsQ0FBQUEsRUFBQUE7UUFDQUgsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQSxtQ0FBQSxDQUFBLEVBQ0FWLFFBQUFBLENBQUFFLE9BQUFBLEVBQUEsR0FBQSxDQUNBO01BQUEsQ0FBQSxFQUVBRCxVQUFBQSxDQUFBWSxPQUFBQSxHQUFBLFVBQUFELENBQUFBLEVBQUFBO1FBQ0FILE9BQUFBLENBQUFDLEdBQUFBLENBQUEsU0FBQSxHQUFBRSxDQUFBQSxHQUFBLFlBQUEsR0FBQVgsVUFBQUEsQ0FBQWEsVUFBQUEsQ0FDQTtNQUFBLENBQUEsRUFFQWIsVUFBQUEsQ0FBQWMsU0FBQUEsR0FBQSxVQUFBSCxDQUFBQSxFQUFBQTtRQUNBLElBQUFJLE9BQUFBLEdBQUFDLElBQUFBLENBQUFDLEtBQUFBLENBQUFOLENBQUFBLENBQUFPLElBQUFBLENBQUFBO1FBQ0FwQixVQUFBQSxDQUFBcUIsVUFBQUEsQ0FBQSxLQUFBLEdBQUFKLE9BQUFBLENBQUFLLEtBQUFBLEVBQUFMLE9BQUFBLENBQUFHLElBQUFBLENBQ0E7TUFBQSxDQUNBO0lBQUEsQ0FBQTtFQUVBcEUsSUFBQUEsQ0FBQXVFLElBQUFBLEdBQUEsVUFBQUQsS0FBQUEsRUFBQUYsSUFBQUEsRUFBQUE7SUFD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QUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0FqSyxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQXlKLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBQSxTQUFBQSxDQUFBQyxRQUFBQSxJQUFBLEdBQ0E7TUFBQTtJQUFBLENBQUEsRUFFQTtNQUNBVixJQUFBQSxFQUFBLFVBQUE7TUFDQUMsWUFBQUEsRUFBQSxZQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBakssQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUF5SixHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUUsUUFBQUEsR0FBQSxDQUFBLEtBQ0FGLFNBQUFBLENBQUFHLFlBQUFBLElBQUEsQ0FBQSxDQUVBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQVosSUFBQUEsRUFBQSxPQUFBO01BQ0FDLFlBQUFBLEVBQUEsZ0JBQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBO1FBQ0FqSyxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQXlKLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBQSxTQUFBQSxDQUFBSSxLQUFBQSxJQUFBLENBQ0E7TUFBQTtJQUFB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S0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE3SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUE0SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUFBLE1BQUEsRUFBQSxNQUFBLEdBQUE1SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE0SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTdKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQTRKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBN0osSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBNEosS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFDQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQSxHQUFBNUosSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBNEosS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE3SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE0SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTdKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTRKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0F4RyxHQUFBQSxDQUFBRyxTQUFBQSxHQUFBa0csUUFBQUEsRUFDQXJHLEdBQUFBLENBQUFFLElBQUFBLEdBQUEsY0FBQSxFQUNBRixHQUFBQSxDQUFBeUcsUUFBQUEsQ0FBQSxXQUFBLEVBQUExRyxNQUFBQSxDQUFBNEMsS0FBQUEsR0FBQSxDQUFBLEdBQUEzQyxHQUFBQSxDQUFBMEcsV0FBQUEsQ0FBQSxXQUFBLENBQUEs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QUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFDLEdBQUFBLEVBQUE7UUFDQUgsS0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxFQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFFLElBQUFBLEVBQUE7UUFDQUosS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxFQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFHLEdBQUFBLEVBQUE7UUFDQUwsS0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxFQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFJLElBQUFBLEVBQUE7UUFDQU4sS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFLLEtBQUFBLEVBQUE7UUFDQVAsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFNLEtBQUFBLEVBQUE7UUFDQVIsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFPLEtBQUFBLEVBQUE7UUFDQVQsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFRLEdBQUFBLEVBQUE7UUFDQVYsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQTtJQUFBLENBQUE7RUFJQSxTQUFBUyxPQUFBQSxDQUFBQyxJQUFBQSxFQUFBQTtJQUNBaFUsSUFBQUEsQ0FBQTJNLFFBQUFBLEdBQUEsQ0FBQXJHLElBQUFBLENBQUFDLEtBQUFBLENBQUFELElBQUFBLENBQUFELE1BQUFBLEVBQUFBLElBQUFxRCxNQUFBQSxDQUFBNEMsS0FBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsRUFBQWhHLElBQUFBLENBQUFDLEtBQUFBLENBQUFELElBQUFBLENBQUFELE1BQUFBLEVBQUFBLElBQUFxRCxNQUFBQSxDQUFBNkMsTUFBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBdk0sSUFBQUEsQ0FBQXFC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QTtNQUFBNVEsSUFBQUEsRUFBQSxTQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFFBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsWUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxXQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGdCQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFNBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsV0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxPQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGVBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsWUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSx3QkFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxVQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFlBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsU0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxjQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFVBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsU0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxTQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLE9BQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsa0JBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsU0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxTQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGlDQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGtDQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFFBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsU0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxRQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGVBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsVUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxTQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFFBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsUUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSx5QkFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSx1Q0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSwwQkFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxPQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGFBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsZUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxjQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLE9BQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsVUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxPQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFVBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsWUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxNQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFlBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsU0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxrQkFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxRQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGdCQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFNBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsVUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxTQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFVBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsb0JBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsU0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxTQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFNBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsT0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxnQkFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxTQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLE9BQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsVUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxTQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLE1BQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsNkJBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsaUNBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsZUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxRQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLE9BQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsc0RBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsU0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxTQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGVBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsVUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxPQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFdBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsV0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxRQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFFBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsWUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxtQkFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxRQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLDhDQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFdBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsTUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxlQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFFBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsV0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxtQ0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxVQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFNBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsT0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxTQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFdBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsU0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxRQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGFBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsT0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxnQ0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxNQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLDJCQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFNBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsT0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxRQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFNBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsUUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxPQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLE9BQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsWUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxVQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFVBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsU0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSx1QkFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSx3Q0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxvQkFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxRQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGdCQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFlBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsa0NBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsU0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxhQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGVBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsV0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxTQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFNBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsV0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxZQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFFBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsT0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxTQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFFBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsc0JBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsWUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSw0QkFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxZQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGtCQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLDRDQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLE1BQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsU0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxVQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLE9BQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsMEJBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsWUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxZQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFlBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsT0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxXQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFVBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsUUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxRQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFVBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsWUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxTQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGVBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsT0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxnQkFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxTQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFdBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsYUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxRQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLE9BQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsT0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxNQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGFBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsTUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxRQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLE1BQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsa0JBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsa0JBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsYUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxVQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFFBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsMkJBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsVUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxhQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLHFCQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFVBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsT0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxVQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLE9BQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsU0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxTQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFFBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsb0JBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsUUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxjQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGlCQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFlBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsT0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxRQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFdBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsOENBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsVUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSx3QkFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxVQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGNBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsWUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxTQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFNBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsVUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxhQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLHVCQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGFBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsMkJBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsc0JBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsV0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSwwQkFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxNQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLDZCQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLE1BQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsVUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxZQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFNBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsYUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxjQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFNBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsT0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxRQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLHFCQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFFBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsMkJBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsOEJBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsU0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxRQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLHNDQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLDBCQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFNBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsWUFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxVQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLGtDQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLG1DQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLHlCQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLHNCQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLFVBQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsU0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxtQkFBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBNVEsSUFBQUEsRUFBQSxPQUFBO01BQUE0USxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE1USxJQUFBQSxFQUFBLE9BQUE7TUFBQTRRLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTVRLElBQUFBLEVBQUEsU0FBQTtNQUFBNFEsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFB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LE1BQUFELGdCQUFBQSxHQUFBbmdCLElBQUFBLElBQUEvQixDQUFBQSxDQUFBOGdCLE9BQUFBLENBQUEza0IsTUFBQUEsQ0FBQTJsQixPQUFBQSxDQUFBempCLE1BQUFBLENBQUEwakIsTUFBQUEsSUFBQWhnQixJQUFBQSxLQUFBZ2dCLE1BQUFBLENBQUFoZ0IsSUFBQUEsQ0FBQUEsQ0FBQUosR0FBQUEsQ0FBQW9nQixNQUFBQSxJQUFBQSxNQUFBQSxDQUFBaGdCLElBQUFBLENBQUFBLENBQUFBLENBQUEvSixLQUFBQSxDQUFBLENBQUEsRUFBQSxFQUFBLENBQUE7RUFFQW1FLE1BQUFBLENBQUFpbUIsUUFBQUEsR0FBQSxNQUFBLEdBQUFqbUIsTUFBQUEsQ0FBQTJsQixPQUFBQSxDQUFBempCLE1BQUFBLENBQUEwakIsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQWhnQixJQUFBQSxLQUFBZ2dCLE1BQUFBLENBQUFJLEtBQUFBLENBQUFBLENBQUEvcEIsTUFBQUEsSUFBQStELE1BQUFBLENBQUEybEIsT0FBQUEsQ0FBQTFwQixNQUFBQSxFQUFBQSxFQUVBK0QsTUFBQUEsQ0FBQWttQixjQUFBQSxHQUFBLE1BQUFsbUIsTUFBQUEsQ0FBQTJsQixPQUFBQSxDQUFBempCLE1BQUFBLENBQUEwakIsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQUksS0FBQUEsQ0FBQUEsQ0FBQS9wQixNQUFBQSxLQUFBK0QsTUFBQUEsQ0FBQTJsQixPQUFBQSxDQUFBMXBCLE1BQ0E7QUFBQSxDQUFBLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcCA9IFtcclxuICB7XHJcbiAgICBiYXNlOiBcIkFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0MVxcdTI0QjZcXHVGRjIxXFx1MDBDMFxcdTAwQzFcXHUwMEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxcdTAwQzNcXHUwMTAwXFx1MDEwMlxcdTFFQjBcXHUxRUFFXFx1MUVCNFxcdTFFQjJcXHUwMjI2XFx1MDFFMFxcdTAwQzRcXHUwMURFXFx1MUVBMlxcdTAwQzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBDNlxcdTAxRkNcXHUwMUUyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBT1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM4XFx1QTczQV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQyXFx1MjRCN1xcdUZGMjJcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUwMjQzXFx1MDE4MlxcdTAxODFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0M1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYxXFx1MDFDNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMlxcdTAxQzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0NVxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJGXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDZcXHUyNEJCXFx1RkYyNlxcdTFFMUVcXHUwMTkxXFx1QTc3Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiR1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ3XFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0OFxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIklcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0OVxcdTI0QkVcXHVGRjI5XFx1MDBDQ1xcdTAwQ0RcXHUwMENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxcdTAwQ0ZcXHUxRTJFXFx1MUVDOFxcdTAxQ0ZcXHUwMjA4XFx1MDIwQVxcdTFFQ0FcXHUwMTJFXFx1MUUyQ1xcdTAxOTddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIktcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QlxcdTI0QzBcXHVGRjJCXFx1MUUzMFxcdTAxRThcXHUxRTMyXFx1MDEzNlxcdTFFMzRcXHUwMTk4XFx1MkM2OVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3QTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0Q1xcdTI0QzFcXHVGRjJDXFx1MDEzRlxcdTAxMzlcXHUwMTNEXFx1MUUzNlxcdTFFMzhcXHUwMTNCXFx1MUUzQ1xcdTFFM0FcXHUwMTQxXFx1MDIzRFxcdTJDNjJcXHUyQzYwXFx1QTc0OFxcdUE3NDZcXHVBNzgwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJNXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNERcXHUyNEMyXFx1RkYyRFxcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTJDNkVcXHUwMTlDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5KXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0RlxcdTI0QzRcXHVGRjJGXFx1MDBEMlxcdTAwRDNcXHUwMEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxcdTAwRDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHUwMEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xcdTAwRDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT0lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT09cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT1VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUwXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJRXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTFcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUlwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUyXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiU1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUzXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU0XFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MjhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1NVxcdTI0Q0FcXHVGRjM1XFx1MDBEOVxcdTAwREFcXHUwMERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHUwMERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU2XFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVllcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc2MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiV1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU3XFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJYXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNThcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTlcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHUwMEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDVBXFx1MjRDRlxcdUZGM0FcXHUwMTc5XFx1MUU5MFxcdTAxN0JcXHUwMTdEXFx1MUU5MlxcdTFFOTRcXHUwMUI1XFx1MDIyNFxcdTJDN0ZcXHUyQzZCXFx1QTc2Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDYxXFx1MjREMFxcdUZGNDFcXHUxRTlBXFx1MDBFMFxcdTAwRTFcXHUwMEUyXFx1MUVBN1xcdTFFQTVcXHUxRUFCXFx1MUVBOVxcdTAwRTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxcdTAwRTRcXHUwMURGXFx1MUVBM1xcdTAwRTVcXHUwMUZCXFx1MDFDRVxcdTAyMDFcXHUwMjAzXFx1MUVBMVxcdTFFQURcXHUxRUI3XFx1MUUwMVxcdTAxMDVcXHUyQzY1XFx1MDI1MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBFNlxcdTAxRkRcXHUwMUUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM5XFx1QTczQl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczRF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDYyXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2M1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxcdTAwRTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY0XFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGM1xcdTAxQzZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2NVxcdTI0RDRcXHVGRjQ1XFx1MDBFOFxcdTAwRTlcXHUwMEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xcdTAwRUJcXHUxRUJCXFx1MDExQlxcdTAyMDVcXHUwMjA3XFx1MUVCOVxcdTFFQzdcXHUwMjI5XFx1MUUxRFxcdTAxMTlcXHUxRTE5XFx1MUUxQlxcdTAyNDdcXHUwMjVCXFx1MDFERF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY2XFx1MjRENVxcdUZGNDZcXHUxRTFGXFx1MDE5MlxcdUE3N0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2N1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJoXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaHZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDE5NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDY5XFx1MjREOFxcdUZGNDlcXHUwMEVDXFx1MDBFRFxcdTAwRUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHUwMEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwialwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZBXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImtcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QlxcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZEXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiblwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZFXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxcdTAwRjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibmpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZGXFx1MjRERVxcdUZGNEZcXHUwMEYyXFx1MDBGM1xcdTAwRjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx1MDBGNVxcdTFFNERcXHUwMjJEXFx1MUU0RlxcdTAxNERcXHUxRTUxXFx1MUU1M1xcdTAxNEZcXHUwMjJGXFx1MDIzMVxcdTAwRjZcXHUwMjJCXFx1MUVDRlxcdTAxNTFcXHUwMUQyXFx1MDIwRFxcdTAyMEZcXHUwMUExXFx1MUVERFxcdTFFREJcXHUxRUUxXFx1MUVERlxcdTFFRTNcXHUxRUNEXFx1MUVEOVxcdTAxRUJcXHUwMUVEXFx1MDBGOFxcdTAxRkZcXHUwMjU0XFx1QTc0QlxcdUE3NERcXHUwMjc1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvaVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUEzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMjIzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzRGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJwXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3MVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJyXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJzXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzNcXHUyNEUyXFx1RkY1M1xcdTAwREZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ0elwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ1XCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzVcXHUyNEU0XFx1RkY1NVxcdTAwRjlcXHUwMEZBXFx1MDBGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx1MDBGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIndcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3N1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OVxcdTI0RThcXHVGRjU5XFx1MUVGM1xcdTAwRkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx1MDBGRlxcdTFFRjdcXHUxRTk5XFx1MUVGNVxcdTAxQjRcXHUwMjRGXFx1MUVGRl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwielwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDdBXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M10vZyxcclxuICB9LFxyXG5dO1xyXG52YXIgZG9tYWlucyA9IFtcclxuICBcIi5jb21cIixcclxuICBcIi5vcmdcIixcclxuICBcIi5uZXRcIixcclxuICBcIi5hY1wiLFxyXG4gIFwiLmFkXCIsXHJcbiAgXCIuYWVcIixcclxuICBcIi5hZlwiLFxyXG4gIFwiLmFnXCIsXHJcbiAgXCIuYWlcIixcclxuICBcIi5hbFwiLFxyXG4gIFwiLmFtXCIsXHJcbiAgXCIuYW9cIixcclxuICBcIi5hcVwiLFxyXG4gIFwiLmFyXCIsXHJcbiAgXCIuYXNcIixcclxuICBcIi5hdFwiLFxyXG4gIFwiLmF1XCIsXHJcbiAgXCIuYXdcIixcclxuICBcIi5heFwiLFxyXG4gIFwiLmF6XCIsXHJcbiAgXCIuYmFcIixcclxuICBcIi5iYlwiLFxyXG4gIFwiLmJkXCIsXHJcbiAgXCIuYmVcIixcclxuICBcIi5iZlwiLFxyXG4gIFwiLmJnXCIsXHJcbiAgXCIuYmhcIixcclxuICBcIi5iaVwiLFxyXG4gIFwiLmJqXCIsXHJcbiAgXCIuYm1cIixcclxuICBcIi5iblwiLFxyXG4gIFwiLmJvXCIsXHJcbiAgXCIuYnFcIixcclxuICBcIi5iclwiLFxyXG4gIFwiLmJzXCIsXHJcbiAgXCIuYnRcIixcclxuICBcIi5id1wiLFxyXG4gIFwiLmJ5XCIsXHJcbiAgXCIuYnpcIixcclxuICBcIi5jYVwiLFxyXG4gIFwiLmNjXCIsXHJcbiAgXCIuY2RcIixcclxuICBcIi5jZlwiLFxyXG4gIFwiLmNnXCIsXHJcbiAgXCIuY2hcIixcclxuICBcIi5jaVwiLFxyXG4gIFwiLmNrXCIsXHJcbiAgXCIuY2xcIixcclxuICBcIi5jbVwiLFxyXG4gIFwiLmNuXCIsXHJcbiAgXCIuY29cIixcclxuICBcIi5jclwiLFxyXG4gIFwiLmN1XCIsXHJcbiAgXCIuY3ZcIixcclxuICBcIi5jd1wiLFxyXG4gIFwiLmN4XCIsXHJcbiAgXCIuY3lcIixcclxuICBcIi5jelwiLFxyXG4gIFwiLmRlXCIsXHJcbiAgXCIuZGpcIixcclxuICBcIi5ka1wiLFxyXG4gIFwiLmRtXCIsXHJcbiAgXCIuZG9cIixcclxuICBcIi5kelwiLFxyXG4gIFwiLmVjXCIsXHJcbiAgXCIuZWVcIixcclxuICBcIi5lZ1wiLFxyXG4gIFwiLmVoXCIsXHJcbiAgXCIuZXJcIixcclxuICBcIi5lc1wiLFxyXG4gIFwiLmV0XCIsXHJcbiAgXCIuZXVcIixcclxuICBcIi5maVwiLFxyXG4gIFwiLmZqXCIsXHJcbiAgXCIuZmtcIixcclxuICBcIi5mbVwiLFxyXG4gIFwiLmZvXCIsXHJcbiAgXCIuZnJcIixcclxuICBcIi5nYVwiLFxyXG4gIFwiLmdkXCIsXHJcbiAgXCIuZ2VcIixcclxuICBcIi5nZlwiLFxyXG4gIFwiLmdnXCIsXHJcbiAgXCIuZ2hcIixcclxuICBcIi5naVwiLFxyXG4gIFwiLmdsXCIsXHJcbiAgXCIuZ21cIixcclxuICBcIi5nblwiLFxyXG4gIFwiLmdwXCIsXHJcbiAgXCIuZ3FcIixcclxuICBcIi5nclwiLFxyXG4gIFwiLmdzXCIsXHJcbiAgXCIuZ3RcIixcclxuICBcIi5ndVwiLFxyXG4gIFwiLmd3XCIsXHJcbiAgXCIuZ3lcIixcclxuICBcIi5oa1wiLFxyXG4gIFwiLmhtXCIsXHJcbiAgXCIuaG5cIixcclxuICBcIi5oclwiLFxyXG4gIFwiLmh0XCIsXHJcbiAgXCIuaHVcIixcclxuICBcIi5pZFwiLFxyXG4gIFwiLmllXCIsXHJcbiAgXCIuaWxcIixcclxuICBcIi5pbVwiLFxyXG4gIFwiLmluXCIsXHJcbiAgXCIuaW9cIixcclxuICBcIi5pcVwiLFxyXG4gIFwiLmlyXCIsXHJcbiAgXCIuaXNcIixcclxuICBcIi5pdFwiLFxyXG4gIFwiLmplXCIsXHJcbiAgXCIuam1cIixcclxuICBcIi5qb1wiLFxyXG4gIFwiLmpwXCIsXHJcbiAgXCIua2VcIixcclxuICBcIi5rZ1wiLFxyXG4gIFwiLmtoXCIsXHJcbiAgXCIua2lcIixcclxuICBcIi5rbVwiLFxyXG4gIFwiLmtuXCIsXHJcbiAgXCIua3BcIixcclxuICBcIi5rclwiLFxyXG4gIFwiLmt3XCIsXHJcbiAgXCIua3lcIixcclxuICBcIi5relwiLFxyXG4gIFwiLmxhXCIsXHJcbiAgXCIubGJcIixcclxuICBcIi5sY1wiLFxyXG4gIFwiLmxpXCIsXHJcbiAgXCIubGtcIixcclxuICBcIi5sclwiLFxyXG4gIFwiLmxzXCIsXHJcbiAgXCIubHRcIixcclxuICBcIi5sdVwiLFxyXG4gIFwiLmx2XCIsXHJcbiAgXCIubHlcIixcclxuICBcIi5tYVwiLFxyXG4gIFwiLm1jXCIsXHJcbiAgXCIubWRcIixcclxuICBcIi5tZVwiLFxyXG4gIFwiLm1nXCIsXHJcbiAgXCIubWhcIixcclxuICBcIi5ta1wiLFxyXG4gIFwiLm1sXCIsXHJcbiAgXCIubW1cIixcclxuICBcIi5tblwiLFxyXG4gIFwiLm1vXCIsXHJcbiAgXCIubXBcIixcclxuICBcIi5tcVwiLFxyXG4gIFwiLm1yXCIsXHJcbiAgXCIubXNcIixcclxuICBcIi5tdFwiLFxyXG4gIFwiLm11XCIsXHJcbiAgXCIubXZcIixcclxuICBcIi5td1wiLFxyXG4gIFwiLm14XCIsXHJcbiAgXCIubXlcIixcclxuICBcIi5telwiLFxyXG4gIFwiLm5hXCIsXHJcbiAgXCIubmNcIixcclxuICBcIi5uZVwiLFxyXG4gIFwiLm5mXCIsXHJcbiAgXCIubmdcIixcclxuICBcIi5uaVwiLFxyXG4gIFwiLm5sXCIsXHJcbiAgXCIubm9cIixcclxuICBcIi5ucFwiLFxyXG4gIFwiLm5yXCIsXHJcbiAgXCIubnVcIixcclxuICBcIi5uelwiLFxyXG4gIFwiLm9tXCIsXHJcbiAgXCIucGFcIixcclxuICBcIi5wZVwiLFxyXG4gIFwiLnBmXCIsXHJcbiAgXCIucGdcIixcclxuICBcIi5waFwiLFxyXG4gIFwiLnBrXCIsXHJcbiAgXCIucGxcIixcclxuICBcIi5wbVwiLFxyXG4gIFwiLnBuXCIsXHJcbiAgXCIucHJcIixcclxuICBcIi5wc1wiLFxyXG4gIFwiLnB0XCIsXHJcbiAgXCIucHdcIixcclxuICBcIi5weVwiLFxyXG4gIFwiLnFhXCIsXHJcbiAgXCIucmVcIixcclxuICBcIi5yb1wiLFxyXG4gIFwiLnJzXCIsXHJcbiAgXCIucnVcIixcclxuICBcIi5yd1wiLFxyXG4gIFwiLnNhXCIsXHJcbiAgXCIuc2JcIixcclxuICBcIi5zY1wiLFxyXG4gIFwiLnNkXCIsXHJcbiAgXCIuc2VcIixcclxuICBcIi5zZ1wiLFxyXG4gIFwiLnNoXCIsXHJcbiAgXCIuc2lcIixcclxuICBcIi5za1wiLFxyXG4gIFwiLnNsXCIsXHJcbiAgXCIuc21cIixcclxuICBcIi5zblwiLFxyXG4gIFwiLnNvXCIsXHJcbiAgXCIuc3JcIixcclxuICBcIi5zc1wiLFxyXG4gIFwiLnN0XCIsXHJcbiAgXCIuc3VcIixcclxuICBcIi5zdlwiLFxyXG4gIFwiLnN4XCIsXHJcbiAgXCIuc3lcIixcclxuICBcIi5zelwiLFxyXG4gIFwiLnRjXCIsXHJcbiAgXCIudGRcIixcclxuICBcIi50ZlwiLFxyXG4gIFwiLnRnXCIsXHJcbiAgXCIudGhcIixcclxuICBcIi50alwiLFxyXG4gIFwiLnRrXCIsXHJcbiAgXCIudGxcIixcclxuICBcIi50bVwiLFxyXG4gIFwiLnRuXCIsXHJcbiAgXCIudG9cIixcclxuICBcIi50clwiLFxyXG4gIFwiLnR0XCIsXHJcbiAgXCIudHZcIixcclxuICBcIi50d1wiLFxyXG4gIFwiLnR6XCIsXHJcbiAgXCIudWFcIixcclxuICBcIi51Z1wiLFxyXG4gIFwiLnVrXCIsXHJcbiAgXCIudXNcIixcclxuICBcIi51eVwiLFxyXG4gIFwiLnV6XCIsXHJcbiAgXCIudmFcIixcclxuICBcIi52Y1wiLFxyXG4gIFwiLnZlXCIsXHJcbiAgXCIudmdcIixcclxuICBcIi52aVwiLFxyXG4gIFwiLnZuXCIsXHJcbiAgXCIudnVcIixcclxuICBcIi53ZlwiLFxyXG4gIFwiLndzXCIsXHJcbiAgXCIueWVcIixcclxuICBcIi55dFwiLFxyXG4gIFwiLnphXCIsXHJcbiAgXCIuem1cIixcclxuICBcIi56d1wiLFxyXG5dO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlRGlhY3JpdGljc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAucmVkdWNlKChyZXN1bHQsIGxldHRlcikgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzdWx0LnJlcGxhY2UobGV0dGVyLmxldHRlcnMsIGxldHRlci5iYXNlKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgU1BFQ0lBTF9DSEFSQUNURVJTID0gXCJcXFxcXFxcXC8gIT9AIyQlXiYqKClfKzoue30sO1xcXFwtJ2Bg4oCZ4oCYXFxcIlwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFske1NQRUNJQUxfQ0hBUkFDVEVSU31dYCwgXCJnaVwiKSwgXCJcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVBbGxCdXRMZXR0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9Mb3dlckNhc2UoKS5yZW1vdmVEaWFjcml0aWNzKCkucmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMoKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNvbmNlYWxcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZXh0cmEpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChgW14ke1NQRUNJQUxfQ0hBUkFDVEVSU30ke2V4dHJhfV1gLCBcImdpXCIpLCBcIuKBjlwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNhcGl0YWxpemVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc2xpY2UoMSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVIVE1MXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShcIj5cIiwgXCJcXHUyMjdCXCIpLnJlcGxhY2UoXCI8XCIsIFwiXFx1MjI3QVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImFuZ2xlQnJhY2tldHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKFwiPFwiLCBcIiZsdDtcIikucmVwbGFjZShcIj5cIiwgXCImZ3Q7XCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVwbGFjZUFycmF5XCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGZpbmQsIHJlcGxhY2UpIHtcclxuICAgIHZhciByZXBsYWNlU3RyaW5nID0gdGhpcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmluZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICByZXBsYWNlU3RyaW5nID0gcmVwbGFjZVN0cmluZy5yZXBsYWNlKGZpbmRbaV0sIHJlcGxhY2VbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcGxhY2VTdHJpbmc7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJtYXNrVVJMc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2VBcnJheShbXCJodHRwczovL1wiLCBcImh0dHA6Ly9cIl0sIFwibm9wZTovL1wiKS5yZXBsYWNlQXJyYXkoZG9tYWlucywgXCIubm9wZVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VSZWFkYWJsZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwibWFrZVBlcmNlbnRhZ2VcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZGVjaW1hbHMpIHtcclxuICAgIGlmICghZGVjaW1hbHMpIGRlY2ltYWxzID0gMjtcclxuICAgIHJldHVybiBgJHsodGhpcyAqIDEwMCkudG9GaXhlZChkZWNpbWFscyl9JWA7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzb3J0T2JqZWN0ID0gKG9iaiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgbGV0IGFyciA9IFtdO1xyXG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgYXJyLnB1c2goW2tleSwgb2JqW2tleV1dKTtcclxuICB9XHJcbiAgYXJyLnNvcnQoKGEsIGIpID0+IChkaXJlY3Rpb24gPyBhWzFdIC0gYlsxXSA6IGJbMV0gLSBhWzFdKSk7XHJcbiAgbGV0IG9ialNvcnRlZCA9IHt9O1xyXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiAob2JqU29ydGVkW2l0ZW1bMF1dID0gaXRlbVsxXSkpO1xyXG4gIC8vYXJyLnNvcnQoZnVuY3Rpb24oYSwgYikgeyBhLnZhbHVlLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLnZhbHVlLnRvTG93ZXJDYXNlKCkpOyB9KTsgLy91c2UgdGhpcyB0byBzb3J0IGFzIHN0cmluZ3NcclxuICByZXR1cm4gb2JqU29ydGVkOyAvLyByZXR1cm5zIGFycmF5XHJcbn07XHJcbiIsIi8qXHJcbiQgPSBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxudmFyIGJvb3RzdHJhcCA9IHJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxudmFyIGFuZ3VsYXJTYW5pdGl6ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItc2FuaXRpemUnKTtcclxudmFyIGFuZ3VsYXJBbmltYXRlID0gcmVxdWlyZSgnYW5ndWxhci1hbmltYXRlJyk7XHJcbiovXHJcbmFuZ3VsYXIubW9kdWxlKFwiYXBwXCIsIFtcclxuICBcInVpLnJvdXRlclwiLFxyXG4gIFwidWkuYm9vdHN0cmFwXCIsXHJcbiAgXCJuZ0FuaW1hdGVcIixcclxuICBcIm5nU2FuaXRpemVcIixcclxuICBcIm5nRHJhZ0Ryb3BcIixcclxuICBcIm5nVGFnc0lucHV0XCIsXHJcbiAgXCJ2Y1JlY2FwdGNoYVwiLFxyXG4gIFwiY2hhcnQuanNcIixcclxuICBcInRjLmNoYXJ0anNcIixcclxuICBcImluZmluaXRlLXNjcm9sbFwiLFxyXG5dKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkdXJsU2VydmljZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xyXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvaG9tZVwiKTtcclxuICAkdXJsU2VydmljZVByb3ZpZGVyLmNvbmZpZy5zdHJpY3RNb2RlKGZhbHNlKTtcclxuXHJcbiAgJHN0YXRlUHJvdmlkZXJcclxuICAgIC5zdGF0ZShcImhvbWVcIiwge1xyXG4gICAgICB1cmw6IFwiL2hvbWVcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2hvbWUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInBvbGljeVwiLCB7XHJcbiAgICAgIHVybDogXCIvcG9saWN5XCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wb2xpY3kuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInByaW50XCIsIHtcclxuICAgICAgdXJsOiBcIi9wcmludFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcHJpbnQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImV4cGVyaWVuY2VcIiwge1xyXG4gICAgICB1cmw6IFwiL2V4cGVyaWVuY2VcIixcclxuICAgICAgY29udHJvbGxlcjogXCJFeHBlcmllbmNlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvZXhwZXJpZW5jZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwic2tpbGxzXCIsIHtcclxuICAgICAgdXJsOiBcIi9za2lsbHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJTa2lsbHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9za2lsbHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImhvYmJpZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2hvYmJpZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJIb2JiaWVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvaG9iYmllcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiY29udGFjdFwiLCB7XHJcbiAgICAgIHVybDogXCIvY29udGFjdFwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkNvbnRhY3RDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9jb250YWN0Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ3b3Jrb3V0XCIsIHtcclxuICAgICAgdXJsOiBcIi93b3Jrb3V0XCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiV29ya291dEN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3dvcmtvdXQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInBvc3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9wb3N0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlBvc3RzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcG9zdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInByb2ZpbGVcIiwge1xyXG4gICAgICB1cmw6IFwiL3Byb2ZpbGVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJQcm9maWxlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcHJvZmlsZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibGlzdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2xpc3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiTGlzdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImxpc3RzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwcmlvcml0aXplXCIsIHtcclxuICAgICAgdXJsOiBcIi9wcmlvcml0aXplXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUHJpb3JpdGl6ZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicHJpb3JpdGl6ZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYnViYmxlc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYnViYmxlc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkJ1YmJsZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImJ1YmJsZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImFzdGVyb2lkc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYXN0ZXJvaWRzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQXN0ZXJvaWRzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJhc3Rlcm9pZHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImxlbW1pbmdzXCIsIHtcclxuICAgICAgdXJsOiBcIi9sZW1taW5nc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkxlbW1pbmdzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJsZW1taW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYm90c1wiLCB7XHJcbiAgICAgIHVybDogXCIvYm90c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3NcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5nc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3MtYWRtaW5cIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy1hZG1pblwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0FkbWluQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MtYWRtaW4uaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1vbGRcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy1vbGRcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NPbGRDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1vbGQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1nYW1lXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3MvOmdhbWVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NHYW1lQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MtZ2FtZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1nb29nbGVcIiwge1xyXG4gICAgICB1cmw6IFwiL2dvb2dsZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpHb29nbGVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvZ29vZ2xlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWxvZ29zXCIsIHtcclxuICAgICAgdXJsOiBcIi9sb2dvc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpMb2dvc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9sb2dvcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1hbmltYWxzXCIsIHtcclxuICAgICAgdXJsOiBcIi9hbmltYWxzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekFuaW1hbHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvYW5pbWFscy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1za2VsZXRvbnNcIiwge1xyXG4gICAgICB1cmw6IFwiL3NrZWxldG9uc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpTa2VsZXRvbnNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvc2tlbGV0b25zLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LW1vdmllc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbW92aWVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpek1vdmllc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9tb3ZpZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImNoYXJhZGVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9jaGFyYWRlc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkNoYXJhZGVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvY2hhcmFkZXMuaHRtbFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7XHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgcmVxdWlyZUJhc2U6IGZhbHNlLFxyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdXZWJTb2NrZXRTdmMnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcclxuICBmdW5jdGlvbiB3ZWJzb2NrZXRIb3N0KCkge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcclxuICAgICAgcmV0dXJuIFwid3NzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIndzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBjb25uZWN0aW9uO1xyXG4gIHZhciBjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQod2Vic29ja2V0SG9zdCgpKTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjb25uZWN0ZWQnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjbG9zZWQuIFJlY29ubmVjdGluZy4uLicpO1xyXG4gICAgICAkdGltZW91dChjb25uZWN0LCAxMDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUgKyBcIiAtIFN0YXRlOiBcIiArIGNvbm5lY3Rpb24ucmVhZHlTdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnd3M6JyArIHBheWxvYWQudG9waWMsIHBheWxvYWQuZGF0YSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc2VuZCA9IGZ1bmN0aW9uICh0b3BpYywgZGF0YSkge1xyXG4gICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh7dG9waWM6IHRvcGljLCBkYXRhOiBkYXRhfSk7XHJcbiAgICBjb25uZWN0aW9uLnNlbmQoanNvbik7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5jb25uZWN0ID0gY29ubmVjdDtcclxuXHJcbn0pLnJ1bihmdW5jdGlvbiAoV2ViU29ja2V0U3ZjKSB7XHJcbiAgV2ViU29ja2V0U3ZjLmNvbm5lY3QoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJBcHBDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgTGFuZ3VhZ2VTdmMsIFVzZXJTdmMpIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiJWNZb3Ugc25lYWt5IGJ1Z2dlciFcIixcclxuICAgIFwiZm9udDogMmVtIHNhbnMtc2VyaWY7IGNvbG9yOiBEb2RnZXJCbHVlOyB0ZXh0LXNoYWRvdzogMnB4IDAgMCAjNDQ0LCAtMnB4IDAgMCAjNDQ0LCAwIDJweCAwICM0NDQsIDAgLTJweCAwICM0NDQsIDFweCAxcHggIzQ0NCwgLTFweCAtMXB4IDAgIzQ0NCwgMXB4IC0xcHggMCAjNDQ0LCAtMXB4IDFweCAwICM0NDQ7XCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiSSdtIGdsYWQgeW91J3JlIGN1cmlvdXMgd2hldGhlciBzb21ldGhpbmcgaXMgcG9wcGluZyB1cCBpbiBoZXJlLiBJJ20gYSBiaXQgb2YgYSBzdGlja2xlciB3aGVuIGl0IGNvbWVzIHRvIG1lc3NhZ2VzIGluIHRoZSBjb25zb2xlIHNvIEkgdHJ5IHRvIG1ha2Ugc3VyZSBvbmx5IHRoaW5ncyBJIHdhbnQgYXJlIHZpc2libGUuIFRoYXQgYmVpbmcgc2FpZCwgaWYgdGhlcmUgaXMgYSBiaWcgZXJyb3IgaGVyZSwgSSB3b3VsZCByZWFsbHkgYXBwcmVjaWF0ZSB5b3UgdGVsbGluZyBtZSBzbyBJIGNhbiBnZXQgcmlkIG9mIGl0IVwiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIlRoZSBjb2RlIGZvciBteSByZXN1bWUgaXMgaG9zdGVkIG9uIEdpdGh1YiBpZiB5b3UgcmVhbGx5IHdhbnQgdG8gZ28gaW50byBhbGwgdGhpcyEgPT4gaHR0cHM6Ly9naXRodWIuY29tL0ZsYW5kZXJzQnVyZ2VyL3Jlc3VtZVwiLFxyXG4gICk7XHJcblxyXG4gIC8qXHJcbiAgICAkKGRvY3VtZW50KS5iaW5kKFwia2V5dXAga2V5ZG93blwiLCBmdW5jdGlvbihlKXtcclxuICAgICAgaWYoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PSA4MCl7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgKi9cclxuXHJcbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5sb2FkaW5nXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuY2hlY2tib3gtbWVudVwiKS5vbihcImNoYW5nZVwiLCBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KFwibGlcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIiwgdGhpcy5jaGVja2VkKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5hbGxvdy1mb2N1c1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnRoZW1lQ291bnRlciA9IDY7XHJcbiAgJHNjb3BlLnRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAkc2NvcGUueWVhciA9ICRzY29wZS50b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICRzY29wZS5yYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcclxuXHJcbiAgJHNjb3BlLmZsaXBUaGVtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5zaG93KCk7XHJcbiAgICAkKFwiLmNvbnRlbnRcIikuaGlkZSgpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgICB9LCA4MDApO1xyXG4gICAgJHNjb3BlLnRoZW1lQ291bnRlciA9ICRzY29wZS50aGVtZUNvdW50ZXIgPCA2ID8gJHNjb3BlLnRoZW1lQ291bnRlciArIDEgOiAoJHNjb3BlLnRoZW1lQ291bnRlciA9IDEpO1xyXG4gIH07XHJcblxyXG4gICQuZ2V0SlNPTihcIi9za2lsbHMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLnNraWxscyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuZW5hYmxlZDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvaG9iYmllcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuaG9iYmllcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9leHBlcmllbmNlLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5qb2JzID0gZGF0YTtcclxuICAgICRzY29wZS5qb2JzLmZvckVhY2goZnVuY3Rpb24gKGpvYikge1xyXG4gICAgICBqb2Iuc3RhcnREYXRlID0gbmV3IERhdGUoam9iLnN0YXJ0RGF0ZSk7XHJcbiAgICAgIGlmIChqb2IuZW5kRGF0ZSkgam9iLmVuZERhdGUgPSBuZXcgRGF0ZShqb2IuZW5kRGF0ZSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2NoYXJhZGVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5jaGFyYWRlcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5nZXRUaW1lU3BhbiA9IGZ1bmN0aW9uIChqb2IpIHtcclxuICAgIHJldHVybiBqb2Iuc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyAoam9iLmVuZERhdGUgPyBcIiAtIFwiICsgam9iLmVuZERhdGUuZ2V0RnVsbFllYXIoKSA6IFwiIC0gVG9kYXlcIik7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmxhbmd1YWdlcyA9IExhbmd1YWdlU3ZjLmxhbmd1YWdlcztcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBMYW5ndWFnZVN2Yy5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5ob3ZlcmRpdiA9IGZ1bmN0aW9uIChlLCBkaXZpZCkge1xyXG4gICAgdmFyIGxlZnQgPSBlLmNsaWVudFggKyBcInB4XCI7XHJcbiAgICB2YXIgdG9wID0gZS5jbGllbnRZICsgMjAgKyBcInB4XCI7XHJcblxyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdmlkKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcImxlZnRcIiwgbGVmdCk7XHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcInRvcFwiLCB0b3ApO1xyXG5cclxuICAgICQoXCIjXCIgKyBkaXZpZCkudG9nZ2xlKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikge1xyXG4gICAgVXNlclN2Yy5sb2dpbih3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGxvZ2luKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuJG9uKFwibG9naW5cIiwgZnVuY3Rpb24gKF8sIHVzZXIpIHtcclxuICAgIGxvZ2luKHVzZXIpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBsb2dpbih1c2VyKSB7XHJcbiAgICBpZiAoISRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIgPSB1c2VyLl9pZDtcclxuICAgICAgJHNjb3BlLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dpblwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICRzY29wZS4kb24oXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKF8sIHVzZXIpIHtcclxuICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlID0gbmV3IERhdGUoJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSk7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkaW5nXCIsIGZ1bmN0aW9uIChfLCB1c2VyKSB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5zaG93KCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkZWRcIiwgZnVuY3Rpb24gKF8sIHVzZXIpIHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIiNsb2FkaW5nLWljb25cIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgIC5hdXRoKClcclxuICAgICAgLnNpZ25PdXQoKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dvdXRcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmZvcm1hdERhdGUgPSBmdW5jdGlvbiAoZGF0ZSkge1xyXG4gICAgdmFyIG1vbnRocyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIHJldHVybiBkYXRlLmdldERhdGUoKSArIFwiLVwiICsgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0gKyBcIi1cIiArIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB9O1xyXG5cclxuICBTdHJpbmcucHJvdG90eXBlLmNhcGl0YWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc2xpY2UoMSk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignQXN0ZXJvaWRzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEdhbWVTdmMpIHtcclxuXHJcbiAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhc3Rlcm9pZHMtcGFnZScpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICBjdHguZm9udCA9IFwiMzBweCBDb21pYyBTYW5zIE1TXCI7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgdmFyIHNob3RzID0ge307XHJcbiAgdmFyIGFzdGVyb2lkcyA9IHt9O1xyXG4gIHZhciBwb3dlcnVwcyA9IHt9O1xyXG4gIHZhciBleHBsb3Npb25zID0ge307XHJcbiAgdmFyIG1hcCA9IHt9O1xyXG4gIHZhciBzcGFjZXBpY3MgPSAxMDtcclxuICB2YXIgc3BhY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFjZXBpY3MpO1xyXG4gIHZhciBwb3dlcnVwVHlwZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdzcGVlZCcsXHJcbiAgICAgIGFubm91bmNlbWVudDogJ01heCBTcGVlZCDih6cnLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogNCxcclxuICAgICAgICBzaXplOiBbMTQsIDM1XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLm1heFNwZWVkICs9IDEwMDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2Nvb2xkb3duJyxcclxuICAgICAgYW5ub3VuY2VtZW50OiAnQ29vbGRvd24g4oepJyxcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDMsXHJcbiAgICAgICAgc2l6ZTogWzE3LCAxN10sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWVcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuY29vbGRvd25UaW1lIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAncmFuZ2UnLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6ICdGaXJpbmcgUmFuZ2Ug4oenJyxcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA0LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzMwLCA4XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnJhbmdlICs9IDU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdzaGllbGQnLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6ICdTaGllbGQnLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDUsXHJcbiAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICBzaXplOiBbMTksIDE5XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnNoaWVsZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdudWtlJyxcclxuICAgICAgYW5ub3VuY2VtZW50OiAnTnVrZScsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICAgIHNpemU6IFsxNSwgMTVdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbihzcGFjZXNoaXApIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bhd25Bc3Rlcm9pZHMoNSk7XHJcbiAgICAgIH1cclxuICAgIH0sLypcclxuICAgICdzaWRlX2Nhbm5vbnMnLFxyXG4gICAgJ2xhc2VyJyxcclxuICAgICdzaGllbGQnLFxyXG4gICAgJ2xpZmUnLFxyXG4gICAgJ21pc3NpbGVzJyxcclxuICAgICdudWtlJ1xyXG4gICAgKi9cclxuICBdO1xyXG4gIHBvd2VydXBUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHBvd2VydXAsIGksIGFycmF5KSB7XHJcbiAgICBhcnJheVtpXS5pbWcuc3JjID0gJ2FzdGVyb2lkcy8nICsgcG93ZXJ1cC5uYW1lICsgJy5wbmcnO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgZXhwbG9zaW9uSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBleHBsb3Npb25JbWFnZS5zcmMgPSAnYXN0ZXJvaWRzL2V4cGxvc2lvbi5wbmcnO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgbWFwW2Uua2V5Q29kZSB8fCBlLndoaWNoXSA9IHRydWU7XHJcbiAgfSx0cnVlKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSBmYWxzZTtcclxuICB9LHRydWUpO1xyXG5cclxuICAkc2NvcGUuaGlnaHNjb3JlID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gZXZhbHVhdGVLZXlzKCkge1xyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgLy9TcGFjZVxyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zaG9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM3XSkge1xyXG4gICAgICAgIC8vTGVmdCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiA9IDM2MDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uIC09IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzldKSB7XHJcbiAgICAgICAgLy9SaWdodCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDM2MCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uICs9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzhdKSB7XHJcbiAgICAgICAgLy9VcCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPD0gc3BhY2VzaGlwLm1heFNwZWVkKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgKz0gNTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzQwXSkge1xyXG4gICAgICAgIC8vRG93biBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgLT0gMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgc3RhcnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU3BhY2VzaGlwKCkge1xyXG4gICAgdGhpcy53aWR0aCA9IDUwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSA1MDtcclxuICAgIHRoaXMuc2hpZWxkID0gZmFsc2U7XHJcbiAgICB0aGlzLnJhbmdlID0gODA7XHJcbiAgICB0aGlzLmNhbm5vbiA9IHtcclxuICAgICAgeDogdGhpcy53aWR0aCAvIDIgLSA0LjUsXHJcbiAgICAgIHk6IHRoaXMuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0ICogMC4wNzgxMjVcclxuICAgIH07XHJcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcclxuICAgIHRoaXMuY29vbGRvd25UaW1lID0gMjA7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW1xyXG4gICAgICBjYW52YXMud2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIsXHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgLyAyXHJcbiAgICBdO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9ICdhc3Rlcm9pZHMvc3BhY2VzaGlwLnBuZyc7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMubWF4U3BlZWQgPSAxMDAwO1xyXG4gICAgdGhpcy5hbmdsZSA9IDA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuXHJcbiAgICB0aGlzLnNob290ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuY29vbGRvd24gPSB0aGlzLmNvb2xkb3duVGltZTtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgc2hvdHNbaWRdID0gbmV3IFNob3QoaWQsIHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuc2hpZWxkKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5hcmModGhpcy5wb3NpdGlvblswXSArIHRoaXMud2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uWzFdICsgdGhpcy5oZWlnaHQgLyAyLCAzMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigzNSwgMjM3LCA4NiwgMC41KVwiO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiKDY2LCAxNjgsIDM2LCAwLjgpXCI7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICB2YXIgYXN0ZXJvaWQgPSBhc3Rlcm9pZHNbaV07XHJcbiAgICAgICAgaWYgKGhpdChhc3Rlcm9pZCwgdGhpcykpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNoaWVsZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBhc3Rlcm9pZC5leHBsb2RlKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2FtZU92ZXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmdsZSA9IHRoaXMucm90YXRpb247XHJcbiAgICAgIGlmICh0aGlzLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgIHRoaXMuY29vbGRvd24tLTtcclxuICAgICAgfVxyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNob3QoaWQsIHNwYWNlc2hpcCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzBdICsgc3BhY2VzaGlwLmNhbm5vbi54ICsgc3BhY2VzaGlwLmNhbm5vbi54ICogTWF0aC5jb3MoKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkgLyAxODApLFxyXG4gICAgICBzcGFjZXNoaXAucG9zaXRpb25bMV0gKyBzcGFjZXNoaXAuY2Fubm9uLnkgKyBzcGFjZXNoaXAuY2Fubm9uLnkgKiBNYXRoLnNpbigoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSAvIDE4MClcclxuICAgIF07XHJcbiAgICB0aGlzLndpZHRoID0gOTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMTU7XHJcbiAgICB0aGlzLmFuZ2xlID0gc3BhY2VzaGlwLmFuZ2xlO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IHNwYWNlc2hpcC5yb3RhdGlvbjtcclxuICAgIHRoaXMuc3BlZWQgPSBzcGFjZXNoaXAuc3BlZWQgKyA1MDA7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gc3BhY2VzaGlwLnJhbmdlO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9ICdhc3Rlcm9pZHMvc2hvdC5wbmcnO1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQXN0ZXJvaWQoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMud2lkdGggPSBNYXRoLnJhbmRvbSgpICogNTAgKyAyMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy53aWR0aDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSBNYXRoLnJhbmRvbSgpICogNiAtIDM7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDMwMCArIDI7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gJ2FzdGVyb2lkcy9hc3Rlcm9pZCcgKyAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNikgKyAxKSArICcucG5nJztcclxuXHJcbiAgICB0aGlzLmV4cGxvZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgZXhwbG9zaW9uc1t0aGlzLmlkXSA9IG5ldyBFeHBsb3Npb24odGhpcyk7XHJcbiAgICAgIHJldHVybiBkZWxldGUgYXN0ZXJvaWRzW3RoaXMuaWRdO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XHJcbiAgICAgIGlmICh0aGlzLnJvdGF0aW9uID4gMzYwKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMucm90YXRpb24gLSAzNjA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5yb3RhdGlvbiA8IDApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMzYwICsgdGhpcy5yb3RhdGlvbjtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgICAgdmFyIHNob3QgPSBzaG90c1tpXTtcclxuICAgICAgICBpZiAoaGl0KHNob3QsIHRoaXMpKSB7XHJcbiAgICAgICAgICB0aGlzLmV4cGxvZGUoKTtcclxuICAgICAgICAgIHZhciBwb2ludHMgPSBNYXRoLmZsb29yKChzaG90LnNwZWVkIC0gNTAwKSAvIDEwICsgNzAgLSB0aGlzLndpZHRoKTtcclxuICAgICAgICAgIGlmIChNYXRoLmZsb29yKChwb2ludHMgKyAkc2NvcGUuc2NvcmUpIC8gMTAwKSA+IE1hdGguZmxvb3IoJHNjb3BlLnNjb3JlIC8gMTAwKSkge1xyXG4gICAgICAgICAgICBzcGF3blBvd2VydXAoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICRzY29wZS5zY29yZSArPSBwb2ludHM7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRXhwbG9zaW9uKG9iamVjdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtvYmplY3QucG9zaXRpb25bMF0sIG9iamVjdC5wb3NpdGlvblsxXV07XHJcbiAgICB0aGlzLndpZHRoID0gb2JqZWN0LndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvYmplY3QuaGVpZ2h0O1xyXG4gICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMuY3ljbGUgPSB7XHJcbiAgICAgIHJvd3M6IDYsXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHNpemU6IFsyNTYsIDI1Nl0sXHJcbiAgICAgIGk6IDAsXHJcbiAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgfTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSA0NztcclxuICAgIHRoaXMuaW1nID0gZXhwbG9zaW9uSW1hZ2U7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBQb3dlcnVwKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvd2VydXAgPSBwb3dlcnVwVHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG93ZXJ1cFR5cGVzLmxlbmd0aCldO1xyXG4gICAgdGhpcy5jeWNsZSA9IHRoaXMucG93ZXJ1cC5jeWNsZTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAxMDAwO1xyXG4gICAgaWYgKHRoaXMuY3ljbGUuc2l6ZVsxXSA+IHRoaXMuY3ljbGUuc2l6ZVswXSkge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IDQwO1xyXG4gICAgICB0aGlzLndpZHRoID0gTWF0aC5yb3VuZCh0aGlzLmhlaWdodCAvIHRoaXMuY3ljbGUuc2l6ZVsxXSAqIHRoaXMuY3ljbGUuc2l6ZVswXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndpZHRoID0gNDA7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5yb3VuZCh0aGlzLndpZHRoIC8gdGhpcy5jeWNsZS5zaXplWzBdICogdGhpcy5jeWNsZS5zaXplWzFdKTtcclxuICAgIH1cclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuaW1nID0gdGhpcy5wb3dlcnVwLmltZztcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAxNTAgKyA1MDtcclxuICAgIHZhciBkZWxheSA9IDU7XHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhpdChzcGFjZXNoaXAsIHRoaXMpKSB7XHJcbiAgICAgICAgJHNjb3BlLmFubm91bmNlID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2VtZW50ID0gdGhpcy5wb3dlcnVwLmFubm91bmNlbWVudDtcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICRzY29wZS5hbm5vdW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHRoaXMucG93ZXJ1cC5hY3RpdmF0ZShzcGFjZXNoaXApO1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAoZGVsYXkgPD0gMCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxheSA9IDU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsYXktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmUob2JqZWN0KSB7XHJcbiAgICAgb2JqZWN0LnBvc2l0aW9uWzBdICs9IG9iamVjdC5zcGVlZCAvIDEwMCAqIE1hdGguY29zKChvYmplY3QuYW5nbGUgLSA5MCkgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICBvYmplY3QucG9zaXRpb25bMV0gKz0gb2JqZWN0LnNwZWVkIC8gMTAwICogTWF0aC5zaW4oKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgIGlmIChvYmplY3QucG9zaXRpb25bMF0gPiBjYW52YXMud2lkdGgpIHtcclxuICAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IC1vYmplY3Qud2lkdGg7XHJcbiAgICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMF0gPCAtb2JqZWN0LndpZHRoKSB7XHJcbiAgICAgICBvYmplY3QucG9zaXRpb25bMF0gPSBjYW52YXMud2lkdGg7XHJcbiAgICAgfVxyXG4gICAgIGlmIChvYmplY3QucG9zaXRpb25bMV0gPiBjYW52YXMuaGVpZ2h0KSB7XHJcbiAgICAgICBvYmplY3QucG9zaXRpb25bMV0gPSAtb2JqZWN0LmhlaWdodDtcclxuICAgICB9IGVsc2UgaWYgKG9iamVjdC5wb3NpdGlvblsxXSA8IC1vYmplY3QuaGVpZ2h0KSB7XHJcbiAgICAgICBvYmplY3QucG9zaXRpb25bMV0gPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgIH1cclxuICAgICBjdHguc2F2ZSgpO1xyXG4gICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV0pO1xyXG4gICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LndpZHRoIC8gMiwgb2JqZWN0LmhlaWdodCAvIDIpO1xyXG4gICAgIGN0eC5yb3RhdGUob2JqZWN0LnJvdGF0aW9uICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgaWYgKG9iamVjdC5jeWNsZSkge1xyXG4gICAgICAgdmFyIGNvbHVtbiA9IG9iamVjdC5jeWNsZS5pICUgb2JqZWN0LmN5Y2xlLmNvbHVtbnM7XHJcbiAgICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcihvYmplY3QuY3ljbGUuaSAvIG9iamVjdC5jeWNsZS5jb2x1bW5zKTtcclxuICAgICAgIGN0eC5kcmF3SW1hZ2Uob2JqZWN0LmltZywgb2JqZWN0LmN5Y2xlLnNpemVbMF0gKiBjb2x1bW4sIG9iamVjdC5jeWNsZS5zaXplWzFdICogcm93LCBvYmplY3QuY3ljbGUuc2l6ZVswXSwgb2JqZWN0LmN5Y2xlLnNpemVbMV0sIC1vYmplY3Qud2lkdGggLyAyLCAtb2JqZWN0LmhlaWdodCAvIDIsIG9iamVjdC53aWR0aCwgb2JqZWN0LmhlaWdodCk7XHJcblxyXG4gICAgICAgaWYgKG9iamVjdC5jeWNsZS5pIDw9IDApIHtcclxuICAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSAwO1xyXG4gICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgIH0gZWxzZSBpZiAob2JqZWN0LmN5Y2xlLmkgPj0gb2JqZWN0LmN5Y2xlLmNvbHVtbnMgKiBvYmplY3QuY3ljbGUucm93cykge1xyXG4gICAgICAgICBvYmplY3QuY3ljbGUuaSA9IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MgLSAxO1xyXG4gICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICB9XHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgIGN0eC5kcmF3SW1hZ2Uob2JqZWN0LmltZywgLW9iamVjdC53aWR0aCAvIDIsIC1vYmplY3QuaGVpZ2h0IC8gMiwgb2JqZWN0LndpZHRoLCBvYmplY3QuaGVpZ2h0KTtcclxuICAgICB9XHJcbiAgICAgY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHZhciBzcGFjZXNoaXA7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIHNwYWNlc2hpcCA9IG5ldyBTcGFjZXNoaXAoKTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgIGF1dG9TcGF3bigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RW50cnlQb3NpdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB2YXIgZ3JpZFggPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciBncmlkWSA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIHgsIHkgPSAwO1xyXG4gICAgaWYgKGdyaWRYID49IDEpIHtcclxuICAgICAgeCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XHJcbiAgICAgIGlmICh5ID49IDEpIHtcclxuICAgICAgICB5ID0gMCAtIGhlaWdodDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeSA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICBpZiAoZ3JpZFkgPj0gMSkge1xyXG4gICAgICAgIHggPSAwIC0gd2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFt4LCB5XTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpdChvYmplY3QxLCBvYmplY3QyKSB7XHJcbiAgICByZXR1cm4gKG9iamVjdDEucG9zaXRpb25bMF0gPCBvYmplY3QyLnBvc2l0aW9uWzBdICsgb2JqZWN0Mi53aWR0aCkgJiZcclxuICAgICAgICAgICAob2JqZWN0Mi5wb3NpdGlvblswXSA8IG9iamVjdDEucG9zaXRpb25bMF0gKyBvYmplY3QxLndpZHRoKSAmJlxyXG4gICAgICAgICAgIChvYmplY3QxLnBvc2l0aW9uWzFdIDwgb2JqZWN0Mi5wb3NpdGlvblsxXSArIG9iamVjdDIuaGVpZ2h0KSAmJlxyXG4gICAgICAgICAgIChvYmplY3QyLnBvc2l0aW9uWzFdIDwgb2JqZWN0MS5wb3NpdGlvblsxXSArIG9iamVjdDEuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGF1dG9TcGF3bigpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhhc3Rlcm9pZHMpLmxlbmd0aCA8IDIwMCkge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH1cclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGF1dG9TcGF3bigpO1xyXG4gICAgICB9LCBzcGF3bkludGVydmFsKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25JbnRlcnZhbCgpIHtcclxuICAgIGlmICgkc2NvcGUuc2NvcmUgPCAxMDAwKSB7XHJcbiAgICAgIHJldHVybiAxMDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCAyMDAwKSB7XHJcbiAgICAgIHJldHVybiA5MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDMwMDApIHtcclxuICAgICAgcmV0dXJuIDgwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNDAwMCkge1xyXG4gICAgICByZXR1cm4gNzAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA1MDAwKSB7XHJcbiAgICAgIHJldHVybiA2MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDYwMDApIHtcclxuICAgICAgcmV0dXJuIDUwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNzAwMCkge1xyXG4gICAgICByZXR1cm4gNDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA4MDAwKSB7XHJcbiAgICAgIHJldHVybiAzMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25Bc3Rlcm9pZHMoYW1vdW50KSB7XHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICBkbyB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIGFzdGVyb2lkc1tpZF0gPSBuZXcgQXN0ZXJvaWQoaWQpO1xyXG4gICAgfSB3aGlsZSAoaSsrIDw9IGFtb3VudCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3blBvd2VydXAoKSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMocG93ZXJ1cHMpLmxlbmd0aCA8IDMpIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgcG93ZXJ1cHNbaWRdID0gbmV3IFBvd2VydXAoaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XHJcbiAgICAkc2NvcGUucGxheWluZyA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgIH1cclxuICAgIHNob3RzID0ge307XHJcbiAgICBpZiAoJHNjb3BlLmxvZ2dlZEluKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuaGlnaHNjb3JlLmFzdGVyb2lkcyA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzID0gJHNjb3BlLnNjb3JlO1xyXG4gICAgICAgIEdhbWVTdmMuc2V0SGlnaHNjb3JlKCdhc3Rlcm9pZHMnLCAkc2NvcGUuY3VycmVudFVzZXIuX2lkLCAkc2NvcGUuc2NvcmUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hzY29yZSA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5oaWdoc2NvcmUgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cdC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG5cdC8vIGRyYXcgY2FudmFzLlxyXG5cclxuXHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuXHJcblx0XHQvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG5cdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0fVxyXG5cdC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuXHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcblx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogMTA1KTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcblxyXG4gIHZhciB0YWxseSA9IDA7XHJcbiAgdmFyIGRpcmVjdGlvbiA9IHRydWU7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgIGlmIChzaG90c1tpXS5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIHNob3RzW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3RzW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIHBvd2VydXBzKSB7XHJcbiAgICAgIHBvd2VydXBzW2ldLm1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBleHBsb3Npb25zKSB7XHJcbiAgICAgIGlmIChleHBsb3Npb25zW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgZXhwbG9zaW9uc1tpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBleHBsb3Npb25zW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZhbHVhdGVLZXlzKCk7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgc3BhY2VzaGlwLm1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBjYW52YXMud2lkdGgsIDApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoJzAnLCAncmdiKCcgKyBNYXRoLmZsb29yKDI1NiAtIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcpJyk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgnMC4yNScsICdyZ2IoJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMjU2IC0gMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJyknKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKCcwLjUnLCAncmdiKCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDI1NiAtIDI1NiAqIHRhbGx5IC8gMTAwKSArICcpJyk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgnMC43NScsICdyZ2IoJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMjU2IC0gMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJyknKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKCcxLjAnLCAncmdiKCcgKyBNYXRoLmZsb29yKDI1NiAtIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcpJyk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgICAgY3R4LmZvbnQ9JzYwcHggTW9ub3Rvbic7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnQXN0ZXJvaWRzJywgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dCgnQXN0ZXJvaWRzJykud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGN0eC5mb250PScyMHB4IEFsZHJpY2gnO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ1ByZXNzIHNwYWNlIHRvIHN0YXJ0JywgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dCgnUHJlc3Mgc3BhY2UgdG8gc3RhcnQnKS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyICsgMjApO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ0Rlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlcicsIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoJ0Rlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlcicpLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAtIDMwKTtcclxuICAgIH1cclxuICAgIHRhbGx5ICs9IGRpcmVjdGlvbiA/IDEgOiAtMTtcclxuICAgIGlmICh0YWxseSA+IDEwMCkge1xyXG4gICAgICB0YWxseSA9IDEwMDtcclxuICAgICAgZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHRhbGx5IDwgMCkge1xyXG4gICAgICB0YWxseSA9IDA7XHJcbiAgICAgIGRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuc3BhY2UgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImFzdGVyb2lkcy9zcGFjZScgKyBzcGFjZSArICcuanBnXCIpJ1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuXHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdCdWJibGVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWJibGVzLXBhZ2UnKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgdmFyIGJ1YmJsZXMgPSBbXTtcclxuICB2YXIgY29sb3JzID0gWycjZmZjMzAwJywnI2ZmNTczMycsJyNjNzAwMzknLCcjOTAwYzNlJywnIzU3MTg0NSddO1xyXG5cclxuICBmdW5jdGlvbiBCdWJibGUoKSB7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gMDtcclxuICAgIHRoaXMucmFkaXVzID0gMTtcclxuICAgIHRoaXMuZXhwYW5kaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgIHRoaXMuY2lyY3VtZmVyZW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDUwKSArIDU7XHJcbiAgICB0aGlzLm1heFJhZGl1cyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDIwMCkgKyAyMDtcclxuICAgIHRoaXMueCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aCk7XHJcbiAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0KTtcclxuICAgIHRoaXMudnggPSAoTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTEpO1xyXG4gICAgdGhpcy52eSA9IChNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgYnViYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGJ1YmJsZSkge1xyXG4gICAgICB2YXIgY29sb3IgPSBjb2xvcnNbTWF0aC5yb3VuZChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKGJ1YmJsZS54LCBidWJibGUueSwgYnViYmxlLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3JzW01hdGgucm91bmQoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1tjb2xvcnMubGVuZ3RoIC0gTWF0aC5yb3VuZChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9IGJ1YmJsZS5jaXJjdW1mZXJlbmNlICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXM7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmlsdGVyQnViYmxlcygpIHtcclxuICAgIGJ1YmJsZXMucHVzaChuZXcgQnViYmxlKCkpO1xyXG4gICAgYnViYmxlcyA9IGJ1YmJsZXMuZmlsdGVyKGZ1bmN0aW9uIChidWJibGUpIHtcclxuICAgICAgaWYgKGJ1YmJsZS5yYWRpdXMgPT09IGJ1YmJsZS5tYXhSYWRpdXMpIHtcclxuICAgICAgICBidWJibGUuZXhwYW5kaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgYnViYmxlLnggKz0gYnViYmxlLnZ4ICogYnViYmxlLnNwZWVkO1xyXG4gICAgICBidWJibGUueSArPSBidWJibGUudnkgKiBidWJibGUuc3BlZWQ7XHJcbiAgICAgIGJ1YmJsZS5yYWRpdXMgKz0gKGJ1YmJsZS5leHBhbmRpbmcgPyAxIDogLTEpO1xyXG4gICAgICByZXR1cm4gYnViYmxlLnJhZGl1cyA+IDA7XHJcbiAgICB9KTtcclxuICAgIGRyYXcoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuXHJcblxyXG5cdChmdW5jdGlvbigpIHtcclxuXHJcblx0XHQvLyBTdGFydCBsaXN0ZW5pbmcgdG8gcmVzaXplIGV2ZW50cyBhbmRcclxuXHRcdC8vIGRyYXcgY2FudmFzLlxyXG5cdFx0aW5pdGlhbGl6ZSgpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHRcdC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcblx0XHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0XHQvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcblx0XHRcdC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcblx0XHRcdHJlc2l6ZUNhbnZhcygpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG5cdFx0Ly8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcblx0XHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRcdGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuXHRcdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDU1IDogMTExKTtcclxuXHRcdH1cclxuXHJcblx0fSkoKTtcclxuXHJcblxyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdDaGFyYWRlc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblx0JHNjb3BlLnNlbGVjdFdvcmQgPSBjYXRlZ29yeSA9PiB7XHJcblx0XHQkc2NvcGUud29yZCA9XHJcblx0XHRcdCRzY29wZS5jaGFyYWRlc1tjYXRlZ29yeV1bXHJcblx0XHRcdFx0TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogJHNjb3BlLmNoYXJhZGVzW2NhdGVnb3J5XS5sZW5ndGgpXHJcblx0XHRcdF07XHJcblx0XHRjb25zb2xlLmxvZygkc2NvcGUud29yZCk7XHJcblx0fTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJDb250YWN0Q3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBFbWFpbFN2Yykge1xyXG4gICRzY29wZS5vcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNwYW1cIixcclxuICAgICAgdGV4dDogXCJJIGFtIGEgc3BhbSBib3QgYW5kIGF1dG9tYXRpY2FsbHkgY2hlY2sgdGhlIGZpcnN0IG9wdGlvbiBJIGZpbmQhXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk9wcG9ydHVuaXR5XCIsXHJcbiAgICAgIHRleHQ6IFwiWW91IHNlZW0gdG8gaGF2ZSB0aGUgc2tpbGxzIEkgc2VlaywgSSdkIGxpa2UgdG8gdGFsayBhYm91dCBzb21lIG9wcG9ydHVuaXRpZXMuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJlc3VtZVwiLFxyXG4gICAgICB0ZXh0OiBcIkkgZGlnIHRoZSByZXN1bWUsIGhvdyBkaWQgeW91IG1ha2UgaXQ/XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk90aGVyXCIsXHJcbiAgICAgIHRleHQ6IFwiU3VtdGluIGVsc2UhXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gICRzY29wZS5jb250YWN0ID0ge1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgICBhYm91dDogXCJcIixcclxuICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUuc2VuZGluZyA9IHRydWU7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XHJcbiAgICBFbWFpbFN2Yy5zZW5kKHtcclxuICAgICAgZW1haWw6ICRzY29wZS5jb250YWN0LmVtYWlsLFxyXG4gICAgICBuYW1lOiAkc2NvcGUuY29udGFjdC5uYW1lLFxyXG4gICAgICBwaG9uZTogJHNjb3BlLmNvbnRhY3QucGhvbmUsXHJcbiAgICAgIGFib3V0OiAkc2NvcGUuY29udGFjdC5hYm91dCxcclxuICAgICAgbWVzc2FnZTogJHNjb3BlLmNvbnRhY3QubWVzc2FnZSxcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5zZW50ID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1MuIHN0YXR1cz0lZCwgdGV4dD0lc1wiLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICRzY29wZS5zZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGQUlMRUQuIGVycm9yPVwiLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0V4cGVyaWVuY2VDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUuZ2V0U2tpbGwgPSBmdW5jdGlvbihza2lsbENvZGUpIHtcclxuICAgIGlmICghJHNjb3BlLnNraWxscykgcmV0dXJuO1xyXG4gICAgcmV0dXJuICRzY29wZS5za2lsbHMuZmluZChmdW5jdGlvbihza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuY29kZSA9PT0gc2tpbGxDb2RlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0hvYmJpZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xyXG5cclxuICAkc2NvcGUuaG9iYnlTZWxlY3RvclZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgJC5nZXRKU09OKCdodHRwczovL3d3dy5yZWRkaXQuY29tL3VzZXIvYmVsZ29jYW5hZGlhbi9hYm91dC8uanNvbicsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkSG9iYnkgPSAkc2NvcGUuaG9iYmllc1swXTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdEhvYmJ5ID0gZnVuY3Rpb24gKGhvYmJ5KSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRIb2JieSA9IGhvYmJ5O1xyXG4gICAgJHNjb3BlLmhvYmJ5U2VsZWN0b3JWaXNpYmxlID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNob3dIb2JieSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICBpZiAoIXZhbHVlLmltYWdlcykgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHZhbHVlLmltYWdlcy5sZW5ndGggPiAwO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xlbW1pbmdzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEdhbWVTdmMpIHtcclxuXHJcbiAgdmFyIExFRlQgPSAwO1xyXG4gIHZhciBSSUdIVCA9IDE7XHJcblxyXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVtbWluZ3MtcGFnZScpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB2YXIgbGVtbWluZ3NJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGxlbW1pbmdzSW1hZ2Uuc3JjID0gJ2xlbW1pbmdzL2xlbW1pbmdzLnBuZyc7XHJcbiAgdmFyIGRlY29ySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBkZWNvckltYWdlLnNyYyA9ICdsZW1taW5ncy9kZWNvci5wbmcnO1xyXG4gIHZhciBsZW1taW5ncyA9IHt9O1xyXG4gIHZhciBzdGFydGVkID0gZmFsc2U7XHJcblxyXG4gIHZhciBhY3Rpb25zID0ge1xyXG4gICAgd2Fsazoge1xyXG4gICAgICBzdGFydDogWzAsIDBdLFxyXG4gICAgICBlbmQ6IFszMjAsIDIwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBodWg6IHtcclxuICAgICAgc3RhcnQ6IFszMjAsIDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDIwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZhbGw6IHtcclxuICAgICAgc3RhcnQ6IFswLCA4MF0sXHJcbiAgICAgIGVuZDogWzE2MCwgMTAwXSxcclxuICAgICAgY29sdW1uczogNCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBmbHk6IHtcclxuICAgICAgc3RhcnQ6IFsxNjAsIDgwXSxcclxuICAgICAgZW5kOiBbNDgwLCAxMTBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHN0b3A6IHtcclxuICAgICAgc3RhcnQ6IFswLCAxMjBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDE0MF0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGNsaW1iOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMTYwXSxcclxuICAgICAgZW5kOiBbNjQwLCAxODVdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBzdGFydDogWzAsIDIwMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMjI1XSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgcHVuY2g6IHtcclxuICAgICAgc3RhcnQ6IFswLCAyNDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDMwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAyLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGRpZzoge1xyXG4gICAgICBzdGFydDogWzAsIDMyMF0sXHJcbiAgICAgIGVuZDogWzMyMCwgMzQ1XSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gTGVtbWluZyhpbml0KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggLSAyMDApKSArIDEwMCwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNhbnZhcy5oZWlnaHQgLSAyMDApKSArIDEwMF07XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAyID4gMSA/IExFRlQgOiBSSUdIVDtcclxuICAgIHRoaXMuYWN0ID0gZnVuY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uc1thY3Rpb25dO1xyXG4gICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgdGhpcy53aWR0aCA9ICh0aGlzLmFjdGlvbi5lbmRbMF0gLSB0aGlzLmFjdGlvbi5zdGFydFswXSkgLyB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICB0aGlzLmhlaWdodCA9ICh0aGlzLmFjdGlvbi5lbmRbMV0gLSB0aGlzLmFjdGlvbi5zdGFydFsxXSAtICgyMCAqICh0aGlzLmFjdGlvbi5yb3dzIC0gMSkpKSAvIHRoaXMuYWN0aW9uLnJvd3M7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICB0aGlzLmFjdChpbml0KTtcclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25bMF0sIHRoaXMucG9zaXRpb25bMV0pO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IExFRlQpIHtcclxuICAgICAgICBjdHguc2NhbGUoLTEsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBjb2x1bW4gPSB0aGlzLmN5Y2xlICUgdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3IodGhpcy5jeWNsZSAvIHRoaXMuYWN0aW9uLmNvbHVtbnMpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKGxlbW1pbmdzSW1hZ2UsICh0aGlzLndpZHRoICogY29sdW1uKSArIHRoaXMuYWN0aW9uLnN0YXJ0WzBdLCAoKHRoaXMuaGVpZ2h0ICsgMjApICogcm93KSArIHRoaXMuYWN0aW9uLnN0YXJ0WzFdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgIGlmICh0aGlzLmFjdGlvbi5yZXZlcnNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgICBpZiAodGhpcy5jeWNsZSA+PSB0aGlzLmFjdGlvbi5jb2x1bW5zICogdGhpcy5hY3Rpb24ucm93cykge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICF0aGlzLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZS0tO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLS07XHJcbiAgICAgICAgICBpZiAodGhpcy5jeWNsZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSAhdGhpcy5hbmltYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPj0gdGhpcy5hY3Rpb24uY29sdW1ucyAqIHRoaXMuYWN0aW9uLnJvd3MpIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEhhdGNoKCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFsyMCwgMjBdO1xyXG4gICAgdGhpcy5hY3Rpb24gPSB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMF0sXHJcbiAgICAgIGVuZDogWzgyLCA1MDBdLFxyXG4gICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICByb3dzOiAxMFxyXG4gICAgfVxyXG4gICAgdGhpcy53aWR0aCA9ICh0aGlzLmFjdGlvbi5lbmRbMF0gLSB0aGlzLmFjdGlvbi5zdGFydFswXSkgLyB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAodGhpcy5hY3Rpb24uZW5kWzFdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMV0pIC8gdGhpcy5hY3Rpb24ucm93cztcclxuICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgdGhpcy5vcGVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSwgdGhpcy5wb3NpdGlvblsxXSk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIHZhciBjb2x1bW4sIHJvdztcclxuICAgICAgaWYgKHN0YXJ0ZWQpIHtcclxuICAgICAgICBjb2x1bW4gPSB0aGlzLmN5Y2xlICUgdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgICByb3cgPSBNYXRoLmZsb29yKHRoaXMuY3ljbGUgLyB0aGlzLmFjdGlvbi5jb2x1bW5zKTtcclxuICAgICAgICBpZiAodGhpcy5jeWNsZSA8IDkpIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29sdW1uID0gMDtcclxuICAgICAgICByb3cgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoZGVjb3JJbWFnZSwgKHRoaXMud2lkdGggKiBjb2x1bW4pICsgdGhpcy5hY3Rpb24uc3RhcnRbMF0sICh0aGlzLmhlaWdodCAqIHJvdykgKyB0aGlzLmFjdGlvbi5zdGFydFsxXSAtIDEsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduTGVtbWluZygpIHtcclxuICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2goZnVuY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgIGxlbW1pbmdzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCldID0gbmV3IExlbW1pbmcoYWN0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcblx0XHQvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuXHRcdC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHRcdC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcblx0XHRyZXNpemVDYW52YXMoKTtcclxuXHR9XHJcblx0Ly8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG5cdC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG5cdC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG5cdGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuXHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTAgOiAxMDUpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG4gIHNwYXduTGVtbWluZygpO1xyXG4gIGxldCBoYXRjaCA9IG5ldyBIYXRjaCgpXHJcbiAgZHJhdygpO1xyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgaWYgKCFzdGFydGVkKSB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmZvbnQ9JzQwcHggTW9ub3Rvbic7XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSAnMTAnO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XHJcbiAgICAgIGN0eC5yZWN0KDE1LCBjYW52YXMuaGVpZ2h0IC0gNDUsIGN0eC5tZWFzdXJlVGV4dCgnU3RhcnQnKS53aWR0aCArIDIwLCBjdHgubWVhc3VyZVRleHQoJ1N0YXJ0JykuaGVpZ2h0ICsgY2FudmFzLmhlaWdodCAtIDQ1KTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LmZpbGxUZXh0KCdTdGFydCcsIDIwLCBjYW52YXMuaGVpZ2h0IC0gNTApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yICh2YXIgaSBpbiBsZW1taW5ncykge1xyXG4gICAgICAgIGxlbW1pbmdzW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGF0Y2gub3BlbigpO1xyXG4gICAgc3RhcnRlZCA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBkcmF3KCk7XHJcbiAgICB9LCAxNTApO1xyXG4gIH1cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignTGlzdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBDYXRlZ29yaWVzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5zaG93Q2F0ZWdvcnkgPSB0cnVlO1xyXG5cclxuICAkc2NvcGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIENhdGVnb3JpZXNTdmMuZ2V0Q2F0ZWdvcmllcygpXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAkc2NvcGUudGFza3MgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuY2F0ZWdvcmllcykge1xyXG4gICAgICAgIGZvciAodmFyIGogaW4gJHNjb3BlLmNhdGVnb3JpZXNbaV0udGFza3MpIHtcclxuICAgICAgICAgICRzY29wZS50YXNrcy5wdXNoKHtcclxuICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiAkc2NvcGUuY2F0ZWdvcmllc1tpXS5uYW1lLFxyXG4gICAgICAgICAgICBcInRhc2tcIjogJHNjb3BlLmNhdGVnb3JpZXNbaV0udGFza3Nbal0ubmFtZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkgPSBmdW5jdGlvbihjYXRlZ29yeSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICRzY29wZS5zZWxlY3RlZFRhc2tzID0gW107XHJcbiAgICAkc2NvcGUuc2VsZWN0YWJsZVRhc2tzID0gW107XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzKSB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RhYmxlVGFza3MucHVzaCgkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuc2hvd0NhdGVnb3J5ID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuZW50ZXJlZENhdGVnb3J5ID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLm5ld0NhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUgPT09IGNhdGVnb3J5KSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5KCRzY29wZS5jYXRlZ29yaWVzW2ldKTtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5hZGRDYXRlZ29yeSh7XHJcbiAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5XHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgJHNjb3BlLmluaXQoKTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICRzY29wZS5lbnRlcmVkQ2F0ZWdvcnkgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUubmV3VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpIHtcclxuICAgICAgaWYgKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldLm5hbWUgPT09IHRhc2spIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdFRhc2soJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS5uYW1lLCB7XHJcbiAgICAgICAgdGFzazogdGFza1xyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcy5wdXNoKHsgbmFtZTogdGFzayB9KTtcclxuICAgICAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MubGVuZ3RoIC0gMV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICRzY29wZS5lbnRlcmVkVGFzayA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5yZW1vdmVUYXNrKCRzY29wZS5zZWxlY3RhYmxlVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLmVudGVyZWRUYXNrID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVuc2VsZWN0VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5yZW1vdmVUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCB0YXNrKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuYWRkVGFzayA9IGZ1bmN0aW9uKHRhc2tMaXN0LCB0YXNrKSB7XHJcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2spO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5yZW1vdmVUYXNrID0gZnVuY3Rpb24odGFza0xpc3QsIHRhc2spIHtcclxuICAgIHRhc2tMaXN0LnNwbGljZSh0YXNrTGlzdC5pbmRleE9mKHRhc2spLCAxKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc3RhcnRQcmlvcml0aXppbmcgPSBmdW5jdGlvbigpIHtcclxuICAgIENhdGVnb3JpZXNTdmMuc2V0UHJpb3JpdHlMaXN0KCRzY29wZS5zZWxlY3RlZFRhc2tzKTtcclxuICAgICRsb2NhdGlvbi5wYXRoKCcvcHJpb3JpdGl6ZScpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRRdWVzdGlvbnMgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghJHNjb3BlLnNlbGVjdGVkVGFza3MpIHJldHVybiAnJztcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAkc2NvcGUuc2VsZWN0ZWRUYXNrcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgIGNvdW50ZXIgKz0gaTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb3VudGVyO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG4gIC8vIEluaXRpYWxpemUgdGhlIEZpcmViYXNlVUkgV2lkZ2V0IHVzaW5nIEZpcmViYXNlLlxyXG4gIHZhciB1aSA9IG5ldyBmaXJlYmFzZXVpLmF1dGguQXV0aFVJKGZpcmViYXNlLmF1dGgoKSk7XHJcblxyXG4gICRzY29wZS4kb24oJ2xvZ291dCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdWkucmVzZXQoKTtcclxuICAgIHN0YXJ0VUkoKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRVSSgpIHtcclxuICAgIHVpLnN0YXJ0KCcjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lcicsIHtcclxuICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgc2lnbkluU3VjY2VzczogZnVuY3Rpb24gKGN1cnJlbnRVc2VyLCBjcmVkZW50aWFsLCByZWRpcmVjdFVybCkge1xyXG4gICAgICAgICAgLy8gTm8gcmVkaXJlY3QuXHJcbiAgICAgICAgICBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuYXV0aCgpXHJcbiAgICAgICAgICAgIC5jdXJyZW50VXNlci5nZXRJZFRva2VuKHRydWUpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChpZFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgVXNlclN2Yy5hdXRoZW50aWNhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGN1cnJlbnRVc2VyLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IGN1cnJlbnRVc2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGhvdG9VUkw6IGN1cnJlbnRVc2VyLnBob3RvVVJMLFxyXG4gICAgICAgICAgICAgICAgZW1haWxWZXJpZmllZDogY3VycmVudFVzZXIuZW1haWxWZXJpZmllZCxcclxuICAgICAgICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW4sXHJcbiAgICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNtb2RhbC1sb2dpbicpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgIC8vJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdCgncG9wdXAnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0xvZ2luIEZhaWxlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FsZXJ0LWRhbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gc2lnbkluRmFpbHVyZSBjYWxsYmFjayBtdXN0IGJlIHByb3ZpZGVkIHRvIGhhbmRsZSBtZXJnZSBjb25mbGljdHMgd2hpY2hcclxuICAgICAgICAvLyBvY2N1ciB3aGVuIGFuIGV4aXN0aW5nIGNyZWRlbnRpYWwgaXMgbGlua2VkIHRvIGFuIGFub255bW91cyB1c2VyLlxyXG4gICAgICAgIHNpZ25JbkZhaWx1cmU6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgLy8gRm9yIG1lcmdlIGNvbmZsaWN0cywgdGhlIGVycm9yLmNvZGUgd2lsbCBiZVxyXG4gICAgICAgICAgLy8gJ2ZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3QnLlxyXG4gICAgICAgICAgaWYgKGVycm9yLmNvZGUgIT0gJ2ZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFRoZSBjcmVkZW50aWFsIHRoZSB1c2VyIHRyaWVkIHRvIHNpZ24gaW4gd2l0aC5cclxuICAgICAgICAgIHZhciBjcmVkID0gZXJyb3IuY3JlZGVudGlhbDtcclxuICAgICAgICAgIC8vIENvcHkgZGF0YSBmcm9tIGFub255bW91cyB1c2VyIHRvIHBlcm1hbmVudCB1c2VyIGFuZCBkZWxldGUgYW5vbnltb3VzXHJcbiAgICAgICAgICAvLyB1c2VyLlxyXG4gICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAvLyBGaW5pc2ggc2lnbi1pbiBhZnRlciBkYXRhIGlzIGNvcGllZC5cclxuICAgICAgICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aENyZWRlbnRpYWwoY3JlZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1aVNob3duOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvLyBUaGUgd2lkZ2V0IGlzIHJlbmRlcmVkLlxyXG4gICAgICAgICAgLy8gSGlkZSB0aGUgbG9hZGVyLlxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2lnbkluU3VjY2Vzc1VybDogJy9ob21lJyxcclxuICAgICAgc2lnbkluT3B0aW9uczogW1xyXG4gICAgICAgIC8vZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICBdLFxyXG5cclxuICAgICAgLy8gV2lsbCB1c2UgcG9wdXAgZm9yIElEUCBQcm92aWRlcnMgc2lnbi1pbiBmbG93IGluc3RlYWQgb2YgdGhlIGRlZmF1bHQsIHJlZGlyZWN0LlxyXG4gICAgICBzaWduSW5GbG93OiAncG9wdXAnLFxyXG4gICAgICAvLyBPdGhlciBjb25maWcgb3B0aW9ucy4uLlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGFydFVJKCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRmaWx0ZXIsIFBvc3RzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5hZGRQb3N0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCRzY29wZS5wb3N0Qm9keSkge1xyXG4gICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xyXG4gICAgICAgIGJvZHk6ICRzY29wZS5wb3N0Qm9keVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUG9zdHNTdmMuZmV0Y2goKVxyXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLnBvc3RzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbignd3M6bmV3X3Bvc3QnLCBmdW5jdGlvbiAoXywgcG9zdCkge1xyXG4gICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIFBvc3RzU3ZjLmdldFBvc3QocG9zdClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RzLnVuc2hpZnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdQcmlvcml0aXplQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgQ2F0ZWdvcmllc1N2Yykge1xyXG5cclxuICAkc2NvcGUucHJpb3JpdHlMaXN0ID0gQ2F0ZWdvcmllc1N2Yy5nZXRQcmlvcml0eUxpc3QoKTtcclxuXHJcbiAgaWYgKCEkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAkbG9jYXRpb24ucGF0aCgnL2xpc3RzJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uID0gMTtcclxuICAgICRzY29wZS5jdXJyZW50UXVlc3Rpb24gPSAxO1xyXG4gICAgJHNjb3BlLmRvbmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gICRzY29wZS5tYWtlQ2hvaWNlID0gZnVuY3Rpb24oY2hvaWNlKSB7XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uaWQgPT09ICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgPSBjaG9pY2UgPT09IDEgPyAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmZpcnN0Q2hvaWNlIDogJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5zZWNvbmRDaG9pY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbiA9PT0gJHNjb3BlLmN1cnJlbnRRdWVzdGlvbikge1xyXG4gICAgICAkc2NvcGUuY3VycmVudFF1ZXN0aW9uID0gJHNjb3BlLmN1cnJlbnRRdWVzdGlvbiA9PT0gJHNjb3BlLnByaW9yaXR5TGlzdC5sZW5ndGggPyAxIDogJHNjb3BlLmN1cnJlbnRRdWVzdGlvbiArIDE7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbiA9ICRzY29wZS5jdXJyZW50UXVlc3Rpb247XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAoaSBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA9PT0gJycpIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgJCgnI3ByaW9yaXRpemVDaG9pY2VzJykuaGlkZSgzMDApO1xyXG4gICAgICAkc2NvcGUuZG9uZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldEJ1dHRvblZhbHVlID0gZnVuY3Rpb24oY2hvaWNlKSB7XHJcbiAgICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUucHJpb3JpdHlMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmlkID09PSAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbikge1xyXG4gICAgICAgIHJldHVybiBjaG9pY2UgPT09IDEgPyAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmZpcnN0Q2hvaWNlIDogJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5zZWNvbmRDaG9pY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0UXVlc3Rpb24gPSBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24gPSBxdWVzdGlvbjtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0RmlsdGVyZWRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJHNjb3BlLnByaW9yaXR5TGlzdFxyXG4gICAgICAuc29ydChmdW5jdGlvbihhLCBiKXsgcmV0dXJuIGEuaWQtYi5pZDsgfSlcclxuICAgICAgLmZpbHRlcihmdW5jdGlvbihxdWVzdGlvbikgeyByZXR1cm4gcXVlc3Rpb24uY2hvaWNlICE9PSAnJyB8fCBxdWVzdGlvbi5pZCA9PT0gJHNjb3BlLmN1cnJlbnRRdWVzdGlvbjsgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldENob2ljZXNNYWRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgdmFyIGNob2ljZXNNYWRlID0gMDtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgIT09ICcnKSB7XHJcbiAgICAgICAgY2hvaWNlc01hZGUrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNob2ljZXNNYWRlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRCdXR0b25DbGFzcyA9IGZ1bmN0aW9uKGNob2ljZSkge1xyXG4gICAgaWYgKCEkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5pZCA9PT0gJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24pIHtcclxuICAgICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgPT09ICcnKSB7XHJcbiAgICAgICAgICByZXR1cm4gJ2J0bi1wcmltYXJ5JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNob2ljZSA9PT0gMSkge1xyXG4gICAgICAgICAgcmV0dXJuICRzY29wZS5wcmlvcml0eUxpc3RbaV0uZmlyc3RDaG9pY2UgPT09ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlID8gJ2J0bi1zdWNjZXNzJyA6ICdidG4tZGFuZ2VyJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICRzY29wZS5wcmlvcml0eUxpc3RbaV0uc2Vjb25kQ2hvaWNlID09PSAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA/ICdidG4tc3VjY2VzcycgOiAnYnRuLWRhbmdlcic7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNob3dDaG9pY2VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcjcHJpb3JpdGl6ZUNob2ljZXMnKS5zaG93KDEwMDApO1xyXG4gICAgJCgnI3Jldmlld0Nob2ljZXMnKS5oaWRlKCk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYXJ0Q2xpY2sgPSBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICBpZiAoICRzY29wZS5jaGFydCApIHtcclxuICAgICAgLy8gRGlmZmVyZW50IG1ldGhvZHMgZGVwZW5kaW5nIG9uIGNoYXJ0IHR5cGVcclxuICAgICAgLy9jb25zb2xlLmxvZyggJHNjb3BlLmNoYXJ0LmdldFBvaW50c0F0RXZlbnQoIGV2ZW50ICkgKTsgLy8gZm9yIFBvaW50c1xyXG4gICAgICBjb25zb2xlLmxvZyggJHNjb3BlLmNoYXJ0LmdldFNlZ21lbnRzQXRFdmVudCggZXZlbnQgKSApOyAvLyBmb3IgU2VnbWVudHNcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd1Jlc3VsdHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAkc2NvcGUuZGF0YSA9IFtdO1xyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgIC8vIFNldHMgdGhlIGNoYXJ0IHRvIGJlIHJlc3BvbnNpdmVcclxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuXHJcbiAgICAgIC8vQm9vbGVhbiAtIFdoZXRoZXIgd2Ugc2hvdWxkIHNob3cgYSBzdHJva2Ugb24gZWFjaCBzZWdtZW50XHJcbiAgICAgIHNlZ21lbnRTaG93U3Ryb2tlIDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vU3RyaW5nIC0gVGhlIGNvbG91ciBvZiBlYWNoIHNlZ21lbnQgc3Ryb2tlXHJcbiAgICAgIHNlZ21lbnRTdHJva2VDb2xvciA6ICcjZmZmJyxcclxuXHJcbiAgICAgIC8vTnVtYmVyIC0gVGhlIHdpZHRoIG9mIGVhY2ggc2VnbWVudCBzdHJva2VcclxuICAgICAgc2VnbWVudFN0cm9rZVdpZHRoIDogMixcclxuXHJcbiAgICAgIC8vTnVtYmVyIC0gVGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGNoYXJ0IHRoYXQgd2UgY3V0IG91dCBvZiB0aGUgbWlkZGxlXHJcbiAgICAgIHBlcmNlbnRhZ2VJbm5lckN1dG91dCA6IDAsIC8vIFRoaXMgaXMgMCBmb3IgUGllIGNoYXJ0c1xyXG5cclxuICAgICAgLy9OdW1iZXIgLSBBbW91bnQgb2YgYW5pbWF0aW9uIHN0ZXBzXHJcbiAgICAgIGFuaW1hdGlvblN0ZXBzIDogMTAwLFxyXG5cclxuICAgICAgLy9TdHJpbmcgLSBBbmltYXRpb24gZWFzaW5nIGVmZmVjdFxyXG4gICAgICBhbmltYXRpb25FYXNpbmcgOiAnZWFzZU91dEJvdW5jZScsXHJcblxyXG4gICAgICAvL0Jvb2xlYW4gLSBXaGV0aGVyIHdlIGFuaW1hdGUgdGhlIHJvdGF0aW9uIG9mIHRoZSBEb3VnaG51dFxyXG4gICAgICBhbmltYXRlUm90YXRlIDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vQm9vbGVhbiAtIFdoZXRoZXIgd2UgYW5pbWF0ZSBzY2FsaW5nIHRoZSBEb3VnaG51dCBmcm9tIHRoZSBjZW50cmVcclxuICAgICAgYW5pbWF0ZVNjYWxlIDogZmFsc2UsXHJcblxyXG4gICAgICAvL1N0cmluZyAtIEEgbGVnZW5kIHRlbXBsYXRlXHJcbiAgICAgIGxlZ2VuZFRlbXBsYXRlIDogJzxoMyBjbGFzcz1cInRjLWNoYXJ0LWpzLWxlZ2VuZFwiIHN0eWxlPVwicGFkZGluZzo1cHhcIj48JSBmb3IgKHZhciBpPTA7IGk8c2VnbWVudHMubGVuZ3RoOyBpKyspeyU+PGRpdiBjbGFzcz1cImxhYmVsXCIgc3R5bGU9XCJmbG9hdDpsZWZ0O21hcmdpbjo1cHg7YmFja2dyb3VuZC1jb2xvcjo8JT1zZWdtZW50c1tpXS5maWxsQ29sb3IlPlwiPjwlaWYoc2VnbWVudHNbaV0ubGFiZWwpeyU+PCU9c2VnbWVudHNbaV0ubGFiZWwlPjwlfSU+PC9kaXY+PCV9JT48L2gzPidcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBpIGluIENhdGVnb3JpZXNTdmMuY2hvaWNlcykge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0udm90ZXMgPSAwO1xyXG4gICAgICBmb3IgKHZhciBqIGluICRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgICBpZiAoQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLm5hbWUgPT09ICRzY29wZS5wcmlvcml0eUxpc3Rbal0uY2hvaWNlKSB7XHJcbiAgICAgICAgICBDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0udm90ZXMrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIENhdGVnb3JpZXNTdmMuY2hvaWNlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEudm90ZXMgPCBiLnZvdGVzOyB9KTtcclxuICAgIGZvciAoaSBpbiBDYXRlZ29yaWVzU3ZjLmNob2ljZXMpIHtcclxuICAgICAgJHNjb3BlLmRhdGEucHVzaCh7XHJcbiAgICAgICAgdmFsdWU6IENhdGVnb3JpZXNTdmMuY2hvaWNlc1tpXS52b3RlcyxcclxuICAgICAgICBsYWJlbDogQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLm5hbWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkKCcjcHJpb3JpdGl6ZVJlc3VsdCcpLmhpZGUoKTtcclxuICAgICQoJyNwcmlvcml0aXplQ2hvaWNlcycpLmhpZGUoKTtcclxuICAgICQoJyNwcmlvcml0eVJlc3VsdHMnKS5zaG93KDEwMDApO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlByb2ZpbGVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG4gIGlmICghJHNjb3BlLmN1cnJlbnRVc2VyKSB7XHJcbiAgICAkbG9jYXRpb24ucGF0aChcIi9cIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb3VudHJpZXMgPSBbXHJcbiAgICB7IG5hbWU6IFwiQW5kb3JyYVwiLCBmbGFnOiBcImZsYWctYWRcIiwgdGlkYml0OiBcIlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIiwgZmxhZzogXCJmbGFnLWFlXCIgfSxcclxuICAgIHsgbmFtZTogXCJBZmdoYW5pc3RhblwiLCBmbGFnOiBcImZsYWctYWZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIiwgZmxhZzogXCJmbGFnLWFnXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbmd1aWxsYVwiLCBmbGFnOiBcImZsYWctYWlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFsYmFuaWFcIiwgZmxhZzogXCJmbGFnLWFsXCIgfSxcclxuICAgIHsgbmFtZTogXCJBcm1lbmlhXCIsIGZsYWc6IFwiZmxhZy1hbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW5nb2xhXCIsIGZsYWc6IFwiZmxhZy1hb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW50YXJjdGljYVwiLCBmbGFnOiBcImZsYWctYXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFyZ2VudGluYVwiLCBmbGFnOiBcImZsYWctYXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFtZXJpY2FuIFNvbW9hXCIsIGZsYWc6IFwiZmxhZy1hc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXVzdHJpYVwiLCBmbGFnOiBcImZsYWctYXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF1c3RyYWxpYVwiLCBmbGFnOiBcImZsYWctYXVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFydWJhXCIsIGZsYWc6IFwiZmxhZy1hd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiw4VsYW5kIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWF4XCIgfSxcclxuICAgIHsgbmFtZTogXCJBemVyYmFpamFuXCIsIGZsYWc6IFwiZmxhZy1helwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBmbGFnOiBcImZsYWctYmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhcmJhZG9zXCIsIGZsYWc6IFwiZmxhZy1iYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFuZ2xhZGVzaFwiLCBmbGFnOiBcImZsYWctYmRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGdpdW1cIiwgZmxhZzogXCJmbGFnLWJlXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdXJraW5hIEZhc29cIiwgZmxhZzogXCJmbGFnLWJmXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdWxnYXJpYVwiLCBmbGFnOiBcImZsYWctYmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhaHJhaW5cIiwgZmxhZzogXCJmbGFnLWJoXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdXJ1bmRpXCIsIGZsYWc6IFwiZmxhZy1iaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVuaW5cIiwgZmxhZzogXCJmbGFnLWJqXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBCYXJ0aMOpbGVteVwiLCBmbGFnOiBcImZsYWctYmxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlcm11ZGFcIiwgZmxhZzogXCJmbGFnLWJtXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcnVuZWkgXCIsIGZsYWc6IFwiZmxhZy1iblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9saXZpYSwgUGx1cmluYXRpb25hbCBTdGF0ZSBvZlwiLCBmbGFnOiBcImZsYWctYm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCIsIGZsYWc6IFwiZmxhZy1icVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJhemlsXCIsIGZsYWc6IFwiZmxhZy1iclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFoYW1hc1wiLCBmbGFnOiBcImZsYWctYnNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJodXRhblwiLCBmbGFnOiBcImZsYWctYnRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvdXZldCBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLWJ2XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3Rzd2FuYVwiLCBmbGFnOiBcImZsYWctYndcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGFydXNcIiwgZmxhZzogXCJmbGFnLWJ5XCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxpemVcIiwgZmxhZzogXCJmbGFnLWJ6XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW5hZGFcIiwgZmxhZzogXCJmbGFnLWNhXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb2NvcyAoS2VlbGluZykgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctY2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbmdvLCB0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGVcIiwgZmxhZzogXCJmbGFnLWNkXCIgfSxcclxuICAgIHsgbmFtZTogXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWNmXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb25nb1wiLCBmbGFnOiBcImZsYWctY2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3aXR6ZXJsYW5kXCIsIGZsYWc6IFwiZmxhZy1jaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ8O0dGUgZCdJdm9pcmVcIiwgZmxhZzogXCJmbGFnLWNpXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb29rIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWNrXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGlsZVwiLCBmbGFnOiBcImZsYWctY2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbWVyb29uXCIsIGZsYWc6IFwiZmxhZy1jbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hpbmFcIiwgZmxhZzogXCJmbGFnLWNuXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb2xvbWJpYVwiLCBmbGFnOiBcImZsYWctY29cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvc3RhIFJpY2FcIiwgZmxhZzogXCJmbGFnLWNyXCIgfSxcclxuICAgIHsgbmFtZTogXCJDdWJhXCIsIGZsYWc6IFwiZmxhZy1jdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FibyBWZXJkZVwiLCBmbGFnOiBcImZsYWctY3ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN1cmHDp2FvXCIsIGZsYWc6IFwiZmxhZy1jd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hyaXN0bWFzIElzbGFuZFwiLCBmbGFnOiBcImZsYWctY3hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN5cHJ1c1wiLCBmbGFnOiBcImZsYWctY3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN6ZWNoIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1jelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2VybWFueVwiLCBmbGFnOiBcImZsYWctZGVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRqaWJvdXRpXCIsIGZsYWc6IFwiZmxhZy1kalwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGVubWFya1wiLCBmbGFnOiBcImZsYWctZGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRvbWluaWNhXCIsIGZsYWc6IFwiZmxhZy1kbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRG9taW5pY2FuIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1kb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWxnZXJpYVwiLCBmbGFnOiBcImZsYWctZHpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVjdWFkb3JcIiwgZmxhZzogXCJmbGFnLWVjXCIgfSxcclxuICAgIHsgbmFtZTogXCJFc3RvbmlhXCIsIGZsYWc6IFwiZmxhZy1lZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWd5cHRcIiwgZmxhZzogXCJmbGFnLWVnXCIgfSxcclxuICAgIHsgbmFtZTogXCJXZXN0ZXJuIFNhaGFyYVwiLCBmbGFnOiBcImZsYWctZWhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVyaXRyZWFcIiwgZmxhZzogXCJmbGFnLWVyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTcGFpblwiLCBmbGFnOiBcImZsYWctZXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkV0aGlvcGlhXCIsIGZsYWc6IFwiZmxhZy1ldFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmlubGFuZFwiLCBmbGFnOiBcImZsYWctZmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZpamlcIiwgZmxhZzogXCJmbGFnLWZqXCIgfSxcclxuICAgIHsgbmFtZTogXCJGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcylcIiwgZmxhZzogXCJmbGFnLWZrXCIgfSxcclxuICAgIHsgbmFtZTogXCJNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIG9mXCIsIGZsYWc6IFwiZmxhZy1mbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmFyb2UgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctZm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyYW5jZVwiLCBmbGFnOiBcImZsYWctZnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdhYm9uXCIsIGZsYWc6IFwiZmxhZy1nYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZFwiLCBmbGFnOiBcImZsYWctZ2JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZW5hZGFcIiwgZmxhZzogXCJmbGFnLWdkXCIgfSxcclxuICAgIHsgbmFtZTogXCJHZW9yZ2lhXCIsIGZsYWc6IFwiZmxhZy1nZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIEd1aWFuYVwiLCBmbGFnOiBcImZsYWctZ2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1ZXJuc2V5XCIsIGZsYWc6IFwiZmxhZy1nZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2hhbmFcIiwgZmxhZzogXCJmbGFnLWdoXCIgfSxcclxuICAgIHsgbmFtZTogXCJHaWJyYWx0YXJcIiwgZmxhZzogXCJmbGFnLWdpXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVlbmxhbmRcIiwgZmxhZzogXCJmbGFnLWdsXCIgfSxcclxuICAgIHsgbmFtZTogXCJHYW1iaWFcIiwgZmxhZzogXCJmbGFnLWdtXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWluZWFcIiwgZmxhZzogXCJmbGFnLWduXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWFkZWxvdXBlXCIsIGZsYWc6IFwiZmxhZy1ncFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXF1YXRvcmlhbCBHdWluZWFcIiwgZmxhZzogXCJmbGFnLWdxXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVlY2VcIiwgZmxhZzogXCJmbGFnLWdyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctZ3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YXRlbWFsYVwiLCBmbGFnOiBcImZsYWctZ3RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YW1cIiwgZmxhZzogXCJmbGFnLWd1XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWluZWEtQmlzc2F1XCIsIGZsYWc6IFwiZmxhZy1nd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3V5YW5hXCIsIGZsYWc6IFwiZmxhZy1neVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9uZyBLb25nXCIsIGZsYWc6IFwiZmxhZy1oa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1obVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9uZHVyYXNcIiwgZmxhZzogXCJmbGFnLWhuXCIgfSxcclxuICAgIHsgbmFtZTogXCJDcm9hdGlhXCIsIGZsYWc6IFwiZmxhZy1oclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSGFpdGlcIiwgZmxhZzogXCJmbGFnLWh0XCIgfSxcclxuICAgIHsgbmFtZTogXCJIdW5nYXJ5XCIsIGZsYWc6IFwiZmxhZy1odVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSW5kb25lc2lhXCIsIGZsYWc6IFwiZmxhZy1pZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJlbGFuZFwiLCBmbGFnOiBcImZsYWctaWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklzcmFlbFwiLCBmbGFnOiBcImZsYWctaWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklzbGUgb2YgTWFuXCIsIGZsYWc6IFwiZmxhZy1pbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSW5kaWFcIiwgZmxhZzogXCJmbGFnLWluXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnlcIiwgZmxhZzogXCJmbGFnLWlvXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmFxXCIsIGZsYWc6IFwiZmxhZy1pcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJhbiwgSXNsYW1pYyBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctaXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkljZWxhbmRcIiwgZmxhZzogXCJmbGFnLWlzXCIgfSxcclxuICAgIHsgbmFtZTogXCJJdGFseVwiLCBmbGFnOiBcImZsYWctaXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkplcnNleVwiLCBmbGFnOiBcImZsYWctamVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkphbWFpY2FcIiwgZmxhZzogXCJmbGFnLWptXCIgfSxcclxuICAgIHsgbmFtZTogXCJKb3JkYW5cIiwgZmxhZzogXCJmbGFnLWpvXCIgfSxcclxuICAgIHsgbmFtZTogXCJKYXBhblwiLCBmbGFnOiBcImZsYWctanBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktlbnlhXCIsIGZsYWc6IFwiZmxhZy1rZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS3lyZ3l6c3RhblwiLCBmbGFnOiBcImZsYWcta2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbWJvZGlhXCIsIGZsYWc6IFwiZmxhZy1raFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2lyaWJhdGlcIiwgZmxhZzogXCJmbGFnLWtpXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb21vcm9zXCIsIGZsYWc6IFwiZmxhZy1rbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsIGZsYWc6IFwiZmxhZy1rblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWtwXCIgfSxcclxuICAgIHsgbmFtZTogXCJLb3JlYSwgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWtyXCIgfSxcclxuICAgIHsgbmFtZTogXCJLdXdhaXRcIiwgZmxhZzogXCJmbGFnLWt3XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYXltYW4gSXNsYW5kc1wiLCBmbGFnOiBcImZsYWcta3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkthemFraHN0YW5cIiwgZmxhZzogXCJmbGFnLWt6XCIgfSxcclxuICAgIHsgbmFtZTogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctbGFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxlYmFub25cIiwgZmxhZzogXCJmbGFnLWxiXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBMdWNpYVwiLCBmbGFnOiBcImZsYWctbGNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpZWNodGVuc3RlaW5cIiwgZmxhZzogXCJmbGFnLWxpXCIgfSxcclxuICAgIHsgbmFtZTogXCJTcmkgTGFua2FcIiwgZmxhZzogXCJmbGFnLWxrXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWJlcmlhXCIsIGZsYWc6IFwiZmxhZy1sclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGVzb3Rob1wiLCBmbGFnOiBcImZsYWctbHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpdGh1YW5pYVwiLCBmbGFnOiBcImZsYWctbHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkx1eGVtYm91cmdcIiwgZmxhZzogXCJmbGFnLWx1XCIgfSxcclxuICAgIHsgbmFtZTogXCJMYXR2aWFcIiwgZmxhZzogXCJmbGFnLWx2XCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWJ5YVwiLCBmbGFnOiBcImZsYWctbHlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vcm9jY29cIiwgZmxhZzogXCJmbGFnLW1hXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb25hY29cIiwgZmxhZzogXCJmbGFnLW1jXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb2xkb3ZhLCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctbWRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbnRlbmVncm9cIiwgZmxhZzogXCJmbGFnLW1lXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KVwiLCBmbGFnOiBcImZsYWctbWZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hZGFnYXNjYXJcIiwgZmxhZzogXCJmbGFnLW1nXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXJzaGFsbCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1taFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFjZWRvbmlhLCB0aGUgZm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1ta1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsaVwiLCBmbGFnOiBcImZsYWctbWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk15YW5tYXJcIiwgZmxhZzogXCJmbGFnLW1tXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb25nb2xpYVwiLCBmbGFnOiBcImZsYWctbW5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hY2FvXCIsIGZsYWc6IFwiZmxhZy1tb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1tcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFydGluaXF1ZVwiLCBmbGFnOiBcImZsYWctbXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hdXJpdGFuaWFcIiwgZmxhZzogXCJmbGFnLW1yXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb250c2VycmF0XCIsIGZsYWc6IFwiZmxhZy1tc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsdGFcIiwgZmxhZzogXCJmbGFnLW10XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXVyaXRpdXNcIiwgZmxhZzogXCJmbGFnLW11XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxkaXZlc1wiLCBmbGFnOiBcImZsYWctbXZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGF3aVwiLCBmbGFnOiBcImZsYWctbXdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1leGljb1wiLCBmbGFnOiBcImZsYWctbXhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGF5c2lhXCIsIGZsYWc6IFwiZmxhZy1teVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW96YW1iaXF1ZVwiLCBmbGFnOiBcImZsYWctbXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hbWliaWFcIiwgZmxhZzogXCJmbGFnLW5hXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXcgQ2FsZWRvbmlhXCIsIGZsYWc6IFwiZmxhZy1uY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmlnZXJcIiwgZmxhZzogXCJmbGFnLW5lXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3Jmb2xrIElzbGFuZFwiLCBmbGFnOiBcImZsYWctbmZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pZ2VyaWFcIiwgZmxhZzogXCJmbGFnLW5nXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWNhcmFndWFcIiwgZmxhZzogXCJmbGFnLW5pXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXRoZXJsYW5kc1wiLCBmbGFnOiBcImZsYWctbmxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcndheVwiLCBmbGFnOiBcImZsYWctbm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5lcGFsXCIsIGZsYWc6IFwiZmxhZy1ucFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmF1cnVcIiwgZmxhZzogXCJmbGFnLW5yXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaXVlXCIsIGZsYWc6IFwiZmxhZy1udVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV3IFplYWxhbmRcIiwgZmxhZzogXCJmbGFnLW56XCIgfSxcclxuICAgIHsgbmFtZTogXCJPbWFuXCIsIGZsYWc6IFwiZmxhZy1vbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFuYW1hXCIsIGZsYWc6IFwiZmxhZy1wYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGVydVwiLCBmbGFnOiBcImZsYWctcGVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBQb2x5bmVzaWFcIiwgZmxhZzogXCJmbGFnLXBmXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYXB1YSBOZXcgR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1wZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGhpbGlwcGluZXNcIiwgZmxhZzogXCJmbGFnLXBoXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWtpc3RhblwiLCBmbGFnOiBcImZsYWctcGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBvbGFuZFwiLCBmbGFnOiBcImZsYWctcGxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIiwgZmxhZzogXCJmbGFnLXBtXCIgfSxcclxuICAgIHsgbmFtZTogXCJQaXRjYWlyblwiLCBmbGFnOiBcImZsYWctcG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlB1ZXJ0byBSaWNvXCIsIGZsYWc6IFwiZmxhZy1wclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwiLCBmbGFnOiBcImZsYWctcHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBvcnR1Z2FsXCIsIGZsYWc6IFwiZmxhZy1wdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFsYXVcIiwgZmxhZzogXCJmbGFnLXB3XCIgfSxcclxuICAgIHsgbmFtZTogXCJQYXJhZ3VheVwiLCBmbGFnOiBcImZsYWctcHlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlFhdGFyXCIsIGZsYWc6IFwiZmxhZy1xYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUsOpdW5pb25cIiwgZmxhZzogXCJmbGFnLXJlXCIgfSxcclxuICAgIHsgbmFtZTogXCJSb21hbmlhXCIsIGZsYWc6IFwiZmxhZy1yb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2VyYmlhXCIsIGZsYWc6IFwiZmxhZy1yc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUnVzc2lhbiBGZWRlcmF0aW9uXCIsIGZsYWc6IFwiZmxhZy1ydVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUndhbmRhXCIsIGZsYWc6IFwiZmxhZy1yd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2F1ZGkgQXJhYmlhXCIsIGZsYWc6IFwiZmxhZy1zYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU29sb21vbiBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1zYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2V5Y2hlbGxlc1wiLCBmbGFnOiBcImZsYWctc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN1ZGFuXCIsIGZsYWc6IFwiZmxhZy1zZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dlZGVuXCIsIGZsYWc6IFwiZmxhZy1zZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2luZ2Fwb3JlXCIsIGZsYWc6IFwiZmxhZy1zZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGFcIiwgZmxhZzogXCJmbGFnLXNoXCIgfSxcclxuICAgIHsgbmFtZTogXCJTbG92ZW5pYVwiLCBmbGFnOiBcImZsYWctc2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIiwgZmxhZzogXCJmbGFnLXNqXCIgfSxcclxuICAgIHsgbmFtZTogXCJTbG92YWtpYVwiLCBmbGFnOiBcImZsYWctc2tcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpZXJyYSBMZW9uZVwiLCBmbGFnOiBcImZsYWctc2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbiBNYXJpbm9cIiwgZmxhZzogXCJmbGFnLXNtXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZW5lZ2FsXCIsIGZsYWc6IFwiZmxhZy1zblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU29tYWxpYVwiLCBmbGFnOiBcImZsYWctc29cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN1cmluYW1lXCIsIGZsYWc6IFwiZmxhZy1zclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggU3VkYW5cIiwgZmxhZzogXCJmbGFnLXNzXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIiwgZmxhZzogXCJmbGFnLXN0XCIgfSxcclxuICAgIHsgbmFtZTogXCJFbCBTYWx2YWRvclwiLCBmbGFnOiBcImZsYWctc3ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIiwgZmxhZzogXCJmbGFnLXN4XCIgfSxcclxuICAgIHsgbmFtZTogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctc3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3YXppbGFuZFwiLCBmbGFnOiBcImZsYWctc3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctdGNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoYWRcIiwgZmxhZzogXCJmbGFnLXRkXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXNcIiwgZmxhZzogXCJmbGFnLXRmXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb2dvXCIsIGZsYWc6IFwiZmxhZy10Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGhhaWxhbmRcIiwgZmxhZzogXCJmbGFnLXRoXCIgfSxcclxuICAgIHsgbmFtZTogXCJUYWppa2lzdGFuXCIsIGZsYWc6IFwiZmxhZy10alwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9rZWxhdVwiLCBmbGFnOiBcImZsYWctdGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRpbW9yLUxlc3RlXCIsIGZsYWc6IFwiZmxhZy10bFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya21lbmlzdGFuXCIsIGZsYWc6IFwiZmxhZy10bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVuaXNpYVwiLCBmbGFnOiBcImZsYWctdG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRvbmdhXCIsIGZsYWc6IFwiZmxhZy10b1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya2V5XCIsIGZsYWc6IFwiZmxhZy10clwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wiLCBmbGFnOiBcImZsYWctdHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1dmFsdVwiLCBmbGFnOiBcImZsYWctdHZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmFcIiwgZmxhZzogXCJmbGFnLXR3XCIgfSxcclxuICAgIHsgbmFtZTogXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy10elwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVWtyYWluZVwiLCBmbGFnOiBcImZsYWctdWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVnYW5kYVwiLCBmbGFnOiBcImZsYWctdWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctdW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLCBmbGFnOiBcImZsYWctdXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVydWd1YXlcIiwgZmxhZzogXCJmbGFnLXV5XCIgfSxcclxuICAgIHsgbmFtZTogXCJVemJla2lzdGFuXCIsIGZsYWc6IFwiZmxhZy11elwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9seSBTZWVcIiwgZmxhZzogXCJmbGFnLXZhXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLCBmbGFnOiBcImZsYWctdmNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZlbmV6dWVsYSwgQm9saXZhcmlhbiBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctdmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzLCBCcml0aXNoXCIsIGZsYWc6IFwiZmxhZy12Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlyZ2luIElzbGFuZHMsIFUuUy5cIiwgZmxhZzogXCJmbGFnLXZpXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaWV0IE5hbVwiLCBmbGFnOiBcImZsYWctdm5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZhbnVhdHVcIiwgZmxhZzogXCJmbGFnLXZ1XCIgfSxcclxuICAgIHsgbmFtZTogXCJXYWxsaXMgYW5kIEZ1dHVuYVwiLCBmbGFnOiBcImZsYWctd2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbW9hXCIsIGZsYWc6IFwiZmxhZy13c1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiWWVtZW5cIiwgZmxhZzogXCJmbGFnLXllXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXlvdHRlXCIsIGZsYWc6IFwiZmxhZy15dFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggQWZyaWNhXCIsIGZsYWc6IFwiZmxhZy16YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiWmFtYmlhXCIsIGZsYWc6IFwiZmxhZy16bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiWmltYmFid2VcIiwgZmxhZzogXCJmbGFnLXp3XCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCB1cGRhdGVVc2VyRmxhZ3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICRzY29wZS51c2VyRmxhZ3MgPSAkc2NvcGUuY3VycmVudFVzZXIuZmxhZ3NcclxuICAgICAgICA/IGNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGNvdW50cnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuICRzY29wZS5jdXJyZW50VXNlci5mbGFncy5pbmNsdWRlcyhjb3VudHJ5LmZsYWcpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICA6IFtdO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVwZGF0ZVVzZXJGbGFncygpO1xyXG5cclxuICAkc2NvcGUuZGF0ZU9wdGlvbnMgPSB7XHJcbiAgICBtYXhEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgbWluRGF0ZTogbmV3IERhdGUoMTkwMCwgMSwgMSksXHJcbiAgICBpbml0RGF0ZTogbmV3IERhdGUoMjAwMCwgMSwgMSksXHJcbiAgICBkYXRlcGlja2VyTW9kZTogXCJ5ZWFyXCIsXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVzZXJuYW1lVG9nZ2xlID0gdHJ1ZTtcclxuICAkc2NvcGUucGFzc3dvcmRUb2dnbGUgPSB0cnVlO1xyXG5cclxuICAkc2NvcGUudG9nZ2xlVXNlcm5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSAhJHNjb3BlLnVzZXJuYW1lVG9nZ2xlO1xyXG4gICAgJHNjb3BlLm5ld1VzZXJuYW1lID0gJHNjb3BlLmN1cnJlbnRVc2VyLnVzZXJuYW1lO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS50b2dnbGVQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS5uZXdQYXNzd29yZCA9IG51bGw7XHJcbiAgICAkc2NvcGUuY29uZmlybVBhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9ICEkc2NvcGUucGFzc3dvcmRUb2dnbGU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAocGFzc3dvcmQpIHtcclxuICAgIGlmIChwYXNzd29yZCkge1xyXG4gICAgICB2YXIgdXNlciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgIFVzZXJTdmMuY2hlY2tQYXNzd29yZCh1c2VyLCBwYXNzd29yZCkudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAob2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgIGlmIChuZXdQYXNzd29yZCkge1xyXG4gICAgICBpZiAobmV3UGFzc3dvcmQgPT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgdmFyIHVzZXIgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICAgIFVzZXJTdmMuY2hhbmdlUGFzc3dvcmQodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKS50aGVuKFxyXG4gICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICRzY29wZS4kZW1pdChcInBvcHVwXCIsIHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBhc3N3b3JkIENoYW5nZWRcIixcclxuICAgICAgICAgICAgICB0eXBlOiBcImFsZXJ0LXN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICRzY29wZS5vbGRQYXNzd29yZCA9IG51bGw7XHJcbiAgICAgICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwicG9wdXBcIiwge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGFzc3dvcmQgQ2hhbmdlIEZhaWxlZFwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiYWxlcnQtZGFuZ2VyXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBvcmlnaW5hbEJnID0gJChcIi5wYXNzd29yZFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIik7XHJcbiAgICAgICAgJChcIi5wYXNzd29yZFwiKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNGRkI2QzFcIiB9LCAyMDApLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG9yaWdpbmFsQmcgfSwgMjAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VybmFtZSkge1xyXG4gICAgJHNjb3BlLiRlbWl0KFwibG9hZGluZ1wiKTtcclxuICAgIFVzZXJTdmMuY2hhbmdlVXNlcm5hbWUoJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCwgdXNlcm5hbWUpLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS4kZW1pdChcInVwZGF0ZVwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwicG9wdXBcIiwge1xyXG4gICAgICAgICAgbWVzc2FnZTogdXNlcm5hbWUgKyBcIiBhbHJlYWR5IGluIHVzZVwiLFxyXG4gICAgICAgICAgdHlwZTogXCJhbGVydC1kYW5nZXJcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyKSB7XHJcbiAgICAgICRzY29wZS4kZW1pdChcImxvYWRpbmdcIik7XHJcbiAgICAgIFVzZXJTdmMudXBkYXRlVXNlcih7IC4uLiRzY29wZS5jdXJyZW50VXNlciwgZmxhZ3M6ICRzY29wZS51c2VyRmxhZ3MubWFwKCh7IGZsYWcgfSkgPT4gZmxhZykgfSkudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICRzY29wZS4kZW1pdChcInVwZGF0ZVwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHVwZGF0ZVVzZXJGbGFncygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLiR3YXRjaChcInVzZXJGbGFncy5sZW5ndGhcIiwgZnVuY3Rpb24gKGxlbmd0aCkge1xyXG4gICAgJHNjb3BlLnVwZGF0ZVVzZXIoKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmxvYWRDb3VudHJpZXMgPSBmdW5jdGlvbiAoJHF1ZXJ5KSB7XHJcbiAgICByZXR1cm4gY291bnRyaWVzLmZpbHRlcihmdW5jdGlvbiAoY291bnRyeSkge1xyXG4gICAgICByZXR1cm4gY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigkcXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTE7XHJcbiAgICB9KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdTa2lsbHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IDA7XHJcbiAgJHNjb3BlLnNraWxsc1Zpc2libGUgPSBmYWxzZTtcclxuICAkc2NvcGUucHJvamVjdHMgPSBbXTtcclxuXHJcbiAgJHNjb3BlLmxhYmVscyA9IFtcIkRvd25sb2FkIFNhbGVzXCIsIFwiSW4tU3RvcmUgU2FsZXNcIiwgXCJNYWlsLU9yZGVyIFNhbGVzXCJdO1xyXG4gICRzY29wZS5kYXRhID0gWzMwMCwgNTAwLCAxMDBdO1xyXG5cclxuICAkLmdldEpTT04oJy9leHBlcmllbmNlLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuICAgICRzY29wZS5wcm9qZWN0cyA9IGRhdGEucmVkdWNlKChwcm9qZWN0cywgZW1wbG95ZXIpID0+IHtcclxuICAgICAgaWYgKGVtcGxveWVyLnByb2plY3RzKSByZXR1cm4gZW1wbG95ZXIucHJvamVjdHMuY29uY2F0KHByb2plY3RzKTtcclxuICAgICAgZWxzZSByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9LCB7fSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5maWx0ZXJlZFByb2plY3RzID0gKCkgPT4gJHNjb3BlLnByb2plY3RzXHJcbiAgICAuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNraWxscyAmJiBwcm9qZWN0LnNraWxscy5pbmNsdWRlcygkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jb2RlKSlcclxuXHJcbiAgJC5nZXRKU09OKCcvc2tpbGxzLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuXHJcbiAgICBjb25zdCBza2lsbHMgPSBkYXRhXHJcbiAgICAuZmlsdGVyKChza2lsbCkgPT4gc2tpbGwuZW5hYmxlZClcclxuXHJcbiAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHNraWxsc1xyXG4gICAgLnJlZHVjZShmdW5jdGlvbihjYXRlZ29yaWVzLCBza2lsbCkge1xyXG4gICAgICBpZiAoIWNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0gPSBbc2tpbGxdXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0ucHVzaChza2lsbClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2F0ZWdvcmllcztcclxuICAgIH0sIHt9KTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCA9IGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IHNraWxsO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydE9wdGlvbnMgPSB7XHJcbiAgICAgICAgY3V0b3V0UGVyY2VudGFnZSA6IDgwLFxyXG4gICAgICAgIGNpcmN1bWZlcmVuY2U6IDIgKiBNYXRoLlBJLFxyXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXHJcbiAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydFN0eWxlID0ge1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgvc2tpbGxzLycgKyAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5pbWFnZSArICcpJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJzYwJScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnNTAlIDUwJSdcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwoJHNjb3BlLnNraWxsc1swXSk7XHJcblxyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICBsZXQgcGFnZSA9IDE7XHJcbiAgICAkc2NvcGUubGlzdHMgPSBbXTtcclxuICAgICRzY29wZS5zZWFyY2ggPSBcIlwiO1xyXG4gICAgJHNjb3BlLm5ld0l0ZW0gPSB7fTtcclxuICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHt9O1xyXG4gICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgbGV0IGV4aGF1c3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICRzY29wZS5rZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIC8vIFRhYlxyXG4gICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuY3JlYXRlVmFsdWUoKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIEVudGVyXHJcbiAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuY3JlYXRlVmFsdWUoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoJChcIiNuZXctdmFsdWVcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgJChcIiNuZXctYmx1cmJcIikuZm9jdXMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIH1cclxuICAgICAgLy8gdXNlIGUua2V5Q29kZVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWRkTGlzdCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudExhbmd1YWdlID0gJHNjb3BlLnNlbGVjdGVkTGlzdCA/ICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2UgOiBcIkVOXCI7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIFwibmV3XCIpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgY3JlYXRvcjogJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHZhbHVlczogW10sXHJcbiAgICAgICAgYW5zd2VyczogMCxcclxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGN1cnJlbnRMYW5ndWFnZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmIChsaXN0KSB7XHJcbiAgICAgICAgaWYgKGxpc3QuX2lkID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAkc2NvcGUuYWRkTGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHt9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldENhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJlc2V0TGFuZ3VhZ2VGaWx0ZXIoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgcmVzZXRDYXRlZ29yeUZpbHRlcigpO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RMYW5ndWFnZVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IGRhdGEucmVkdWNlKChyZXN1bHQsIHsgX2lkLCBjb3VudCB9KSA9PiB7XHJcbiAgICAgICAgICByZXN1bHRbX2lkXSA9IGNvdW50O1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9LCB7fSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeVN0YXRzID0gZGF0YS5yZWR1Y2UoKHJlc3VsdCwgeyBfaWQsIGNvdW50IH0pID0+IHtcclxuICAgICAgICAgIHJlc3VsdFtfaWRdID0gY291bnQ7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCkge1xyXG4gICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoeyBfaWQ6ICRsb2NhdGlvbi5zZWFyY2goKS5saXN0IH0pO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5zZWFyY2ggPSAkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoIHx8IFwiXCI7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLnZhbHVlT3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInZhbHVlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwiZGF0ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA9ICEkc2NvcGUub3JkZXIuZGlyZWN0aW9uO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldE1vcmVMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5saXN0cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgZ2V0TGlzdHMoKS50aGVuKChsaXN0cykgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9ICRzY29wZS5saXN0cy5jb25jYXQobGlzdHMpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExpc3RzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGlzdHMgPSBbXTtcclxuICAgICAgcGFnZSA9IDE7XHJcbiAgICAgIGV4aGF1c3RlZCA9IGZhbHNlO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gbGlzdHM7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldExhbmd1YWdlRmlsdGVyID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdKSB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPSAhJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9ICEkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpO1xyXG4gICAgICBjb25zdCBhbGxDYXRlZ29yaWVzID1cclxuICAgICAgICBjYXRlZ29yaWVzLmxlbmd0aCA9PT0gY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldKS5sZW5ndGg7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9ICRzY29wZS5jYXRlZ29yaWVzLnJlZHVjZSgoZmlsdGVyLCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgIGZpbHRlcltjYXRlZ29yeV0gPSAhYWxsQ2F0ZWdvcmllcztcclxuICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5sb2FkaW5nIHx8IGV4aGF1c3RlZCkgcmV0dXJuIFtdO1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoICE9PSAkc2NvcGUuc2VhcmNoKSB7XHJcbiAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcInNlYXJjaFwiLCAkc2NvcGUuc2VhcmNoID8gJHNjb3BlLnNlYXJjaCA6IG51bGwpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldExpc3RzKHtcclxuICAgICAgICBwYWdlLFxyXG4gICAgICAgIHNvcnRCeTogJHNjb3BlLm9yZGVyLmZpZWxkLFxyXG4gICAgICAgIG9yZGVyQnk6ICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPyAtMSA6IDEsXHJcbiAgICAgICAgbGltaXQ6IDEwMCxcclxuICAgICAgICBzZWFyY2g6ICRzY29wZS5zZWFyY2gsXHJcbiAgICAgICAgbGFuZ3VhZ2VzOiBPYmplY3Qua2V5cygkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIpLmZpbHRlcigobGFuZ3VhZ2UpID0+ICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZV0pLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlBhZ2UgXCIsIHBhZ2UsIFwiIHJlc3VsdHMgXCIsIGRhdGEucmVzdWx0Lmxlbmd0aCk7XHJcbiAgICAgIGlmIChkYXRhLnJlc3VsdC5sZW5ndGggPCAxMDApIGV4aGF1c3RlZCA9IHRydWU7XHJcbiAgICAgIGVsc2UgcGFnZSA9IGRhdGEubmV4dFBhZ2U7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0LnNsaWNlKDAsIDEwKSk7XHJcbiAgICAgIHJldHVybiBkYXRhLnJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwZGF0ZVZhbHVlID0gKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKCFpdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdFZhbHVlKCRzY29wZS5zZWxlY3RlZExpc3QsIGl0ZW0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGVWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oYXNEdXBsaWNhdGUoKSkge1xyXG4gICAgICAgIGFsZXJ0KGAkeyRzY29wZS5uZXdJdGVtLnZhbHVlfSBpcyBhbHJlYWR5IGluIHRoZSBsaXN0YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgVGVuVGhpbmdzU3ZjLmNyZWF0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCAkc2NvcGUubmV3SXRlbSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5wdXNoKHsgLi4uJHNjb3BlLm5ld0l0ZW0gfSk7XHJcbiAgICAgICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAkc2NvcGUubmV3SXRlbS5ibHVyYiA9IFwiXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZVZhbHVlID0gKGl0ZW0pID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKS50aGVuKCgpID0+IHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyA9ICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLl9pZCAhPT0gaXRlbS5faWQpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwc2VydExpc3QgPSAobGlzdCwgdXBkYXRlcykgPT4ge1xyXG4gICAgICAkc2NvcGUuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKGxpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCAmJiBsaXN0Lm5hbWUgJiYgbGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAobGlzdC5faWQgIT09IFwibmV3XCIpIHtcclxuICAgICAgICAgIGxldCBjaGFuZ2VzID0gdXBkYXRlcyA/IHVwZGF0ZXMgOiBsaXN0O1xyXG4gICAgICAgICAgZGVsZXRlIGNoYW5nZXMuX2lkO1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgICAuLi5jaGFuZ2VzLFxyXG4gICAgICAgICAgICBfaWQ6IGxpc3QuX2lkLFxyXG4gICAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0SW5kZXggPSAkc2NvcGUubGlzdHMuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0Ll9pZCA9PT0gZGF0YS5faWQpO1xyXG4gICAgICAgICAgICAkc2NvcGUubGlzdHNbbGlzdEluZGV4XSA9IGRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5jcmVhdGVMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgJHNjb3BlLnNlbGVjdGVkTGlzdCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0ID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbigkc2NvcGUuc2VsZWN0ZWRMaXN0LCB1cGRhdGVzKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICghbGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBsaXN0P1wiKSkge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3QobGlzdCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2UgPSAobGlzdCwgbGFuZ3VhZ2UpID0+IHtcclxuICAgICAgbGlzdC5sYW5ndWFnZSA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgIGNvbnN0IG5vbkVuZ2xpc2hJbmRleCA9IGxpc3QuY2F0ZWdvcmllcy5pbmRleE9mKFwiTm9uLUVuZ2xpc2hcIik7XHJcbiAgICAgIGlmIChsYW5ndWFnZS5jb2RlICE9PSBcIkVOXCIgJiYgbm9uRW5nbGlzaEluZGV4IDwgMCkge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5wdXNoKFwiTm9uLUVuZ2xpc2hcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAobGFuZ3VhZ2UuY29kZSA9PT0gXCJFTlwiICYmIG5vbkVuZ2xpc2hJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgbGlzdC5jYXRlZ29yaWVzLnNwbGljZShub25FbmdsaXNoSW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHtcclxuICAgICAgICBjYXRlZ29yaWVzOiBsaXN0LmNhdGVnb3JpZXMsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlLmNvZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0RGlmZmljdWx0eSA9IChsaXN0LCBkaWZmaWN1bHR5KSA9PiB7XHJcbiAgICAgIGxpc3QuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHtcclxuICAgICAgICBkaWZmaWN1bHR5OiBkaWZmaWN1bHR5LFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldEZyZXF1ZW5jeSA9IChsaXN0LCBmcmVxdWVuY3kpID0+IHtcclxuICAgICAgbGlzdC5mcmVxdWVuY3kgPSBmcmVxdWVuY3k7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHtcclxuICAgICAgICBmcmVxdWVuY3k6IGZyZXF1ZW5jeSxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeSA9IChsaXN0LCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeUluZGV4ID0gbGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpO1xyXG4gICAgICBpZiAoY2F0ZWdvcnlJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgbGlzdC5jYXRlZ29yaWVzLnNwbGljZShjYXRlZ29yeUluZGV4LCAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaXN0LmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwge1xyXG4gICAgICAgIGNhdGVnb3JpZXM6IGxpc3QuY2F0ZWdvcmllcyxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5oYXNEdXBsaWNhdGUgPSAoKSA9PlxyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ICYmXHJcbiAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlICYmXHJcbiAgICAgIF8uc29tZShcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyxcclxuICAgICAgICAoYW5zd2VyKSA9PiBhbnN3ZXIudmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpID09ICRzY29wZS5uZXdJdGVtLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSxcclxuICAgICAgKTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Qmx1cmJzID0gKHR5cGUpID0+IHtcclxuICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Qmx1cmJzKCRzY29wZS5zZWxlY3RlZExpc3QsIHR5cGUpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiIsIi8qanNsaW50IGVzdmVyc2lvbjogNiovXHJcbmFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NBZG1pbkN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgVGVuVGhpbmdzU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8pID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5hZG1pbikge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcclxuICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLnJldmVyc2UgPSAhJHNjb3BlLm9yZGVyLnJldmVyc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0UXVldWUgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldFF1ZXVlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucXVldWUgPSByZXNwb25zZS5kYXRhLnJlcGxhY2UoXCIvblwiLCBcIjxici8+XCIpO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgICRzY29wZS5nZXRRdWV1ZSgpO1xyXG5cclxuICAgIFRlblRoaW5nc1N2Yy5nZXRQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICRzY29wZS5wYXVzZWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZygkc2NvcGUucGF1c2VkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdldFVzZXJzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMuZ2V0VXNlcnMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS51c2VycyA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKCh1c2VyKSA9PiAhdXNlci5hZG1pbik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVCYW4gPSAodXNlcikgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMudG9nZ2xlQmFuKHVzZXIuX2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlUGF1c2UgPSAodXNlcikgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMudG9nZ2xlUGF1c2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5wYXVzZWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5wYXVzZWQpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuXHQubW9kdWxlKCdhcHAnKVxyXG5cdC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG5cdC5jb250cm9sbGVyKFxyXG5cdFx0J1RlblRoaW5nc0dhbWVDdHJsJyxcclxuXHRcdGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZVBhcmFtcywgVGVuVGhpbmdzU3ZjKSB7XHJcblx0XHRcdCRzY29wZS4kb24oJ2xvZ2luJywgXyA9PiB7XHJcblx0XHRcdFx0aWYgKCRzY29wZS5jdXJyZW50VXNlci5hZG1pbikge1xyXG5cdFx0XHRcdFx0Z2V0VXNlcnMoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKCRzdGF0ZVBhcmFtcy5nYW1lKSB7XHJcblx0XHRcdFx0VGVuVGhpbmdzU3ZjLmdldEdhbWUoJHN0YXRlUGFyYW1zLmdhbWUpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdFx0JHNjb3BlLmdhbWUgPSByZXNwb25zZS5kYXRhO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJHNjb3BlLmdhbWUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc09sZEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBUZW5UaGluZ3NTdmMpIHtcclxuICAgICRzY29wZS5zZWFyY2ggPSB7XHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIHZhbHVlczogXCJcIixcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICRzY29wZS5hZGRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuYWRkVmFsdWUoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoJChcIiNuZXctdmFsdWVcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgJChcIiNuZXctYmx1cmJcIikuZm9jdXMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIH1cclxuICAgICAgLy8gdXNlIGUua2V5Q29kZVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoTmFtZSA9IFwiXCI7XHJcbiAgICAkc2NvcGUubmV3SXRlbSA9IHt9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeUZpbHRlciA9IChjYXRlZ29yeSkgPT4gKCRzY29wZS5jYXRlZ29yeUZpbHRlciA9IGNhdGVnb3J5KTtcclxuICAgICRzY29wZS5zZXRVc2VyRmlsdGVyID0gKHVzZXIpID0+ICgkc2NvcGUudXNlckZpbHRlciA9IHVzZXIpO1xyXG4gICAgJHNjb3BlLnNldFVwZGF0ZUZpbHRlciA9ICh0eXBlKSA9PiAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9IHR5cGUpO1xyXG4gICAgJHNjb3BlLnNldExhbmd1YWdlRmlsdGVyID0gKGxhbmd1YWdlKSA9PiAoJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0gbGFuZ3VhZ2UpO1xyXG5cclxuICAgICRzY29wZS5maWx0ZXJlZExpc3RzID0gKCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5saXN0cykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gJHNjb3BlLmxpc3RzXHJcbiAgICAgICAgLmZpbHRlcigoeyBpc0R5bmFtaWMgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCRzY29wZS51cGRhdGVGaWx0ZXIgIT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcInN0YXRpY1wiICYmIGlzRHluYW1pYyA9PT0gdHJ1ZSkgfHxcclxuICAgICAgICAgICAgICAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJkeW5hbWljXCIgJiYgaXNEeW5hbWljID09PSBmYWxzZSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbHRlcigoeyBjYXRlZ29yaWVzIH0pID0+IHtcclxuICAgICAgICAgIGlmICgkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPT09IFwiQWxsXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3JpZXMuaW5kZXhPZigkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpID49IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS5jYXRlZ29yeUZpbHRlciA9PT0gXCJCbGFua1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKCh7IGNyZWF0b3IgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCRzY29wZS51c2VyRmlsdGVyID09PSBcIkFsbFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0b3IgPT09ICRzY29wZS51c2VyRmlsdGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbHRlcigoeyBsYW5ndWFnZSB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoJHNjb3BlLmxhbmd1YWdlRmlsdGVyLmNvZGUgPT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbGFuZ3VhZ2UgPT09ICRzY29wZS5sYW5ndWFnZUZpbHRlci5jb2RlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8pID0+IHtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVycyA9ICRzY29wZS5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5KTtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJzLnB1c2goXCJBbGxcIik7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVycy5wdXNoKFwiQmxhbmtcIik7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0gXCJBbGxcIjtcclxuICAgICAgICAkc2NvcGUudXBkYXRlRmlsdGVyID0gXCJhbGxcIjtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcnMgPSAkc2NvcGUubGFuZ3VhZ2VzLm1hcCgobGFuZ3VhZ2UpID0+IGxhbmd1YWdlKTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJzLnB1c2goeyBuYW1lOiBcIkFsbFwiLCBjb2RlOiBcImFsbFwiIH0pO1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHsgbmFtZTogXCJBbGxcIiwgY29kZTogXCJhbGxcIiB9O1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0KSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdExpc3QoeyBfaWQ6ICRsb2NhdGlvbi5zZWFyY2goKS5saXN0IH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUubGlzdE9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJkYXRlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgbGFiZWw6IFwiQ3JlYXRpb24gRGF0ZVwiLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudmFsdWVPcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwidmFsdWVcIixcclxuICAgICAgZGlyZWN0aW9uOiBmYWxzZSxcclxuICAgICAgbGFiZWw6IFwiVmFsdWVcIixcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNvcnQgPSAoc29ydGVyLCBzb3J0RmllbGQsIHNvcnRMYWJlbCkgPT4ge1xyXG4gICAgICAkc2NvcGVbc29ydGVyXS5sYWJlbCA9IHNvcnRMYWJlbDtcclxuICAgICAgaWYgKCRzY29wZVtzb3J0ZXJdLmZpZWxkID09PSBzb3J0RmllbGQpIHtcclxuICAgICAgICAkc2NvcGVbc29ydGVyXS5kaXJlY3Rpb24gPSAhJHNjb3BlW3NvcnRlcl0uZGlyZWN0aW9uO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZVtzb3J0ZXJdLmZpZWxkID0gc29ydEZpZWxkO1xyXG4gICAgICAgICRzY29wZVtzb3J0ZXJdLmRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExhbmd1YWdlQ291bnQgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubGlzdHMpIHJldHVybiAwO1xyXG4gICAgICBjb25zdCBjb3VudCA9ICRzY29wZS5saXN0cy5maWx0ZXIoXHJcbiAgICAgICAgKGxpc3QpID0+XHJcbiAgICAgICAgICAoJHNjb3BlLmNhdGVnb3J5RmlsdGVyID09PSBcIkFsbFwiIHx8IGxpc3QuY2F0ZWdvcmllcy5pbmNsdWRlcygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpKSAmJlxyXG4gICAgICAgICAgKGxhbmd1YWdlLmNvZGUgPT09IFwiYWxsXCIgfHwgbGlzdC5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2UuY29kZSkgJiZcclxuICAgICAgICAgICgkc2NvcGUudXNlckZpbHRlciA9PT0gXCJBbGxcIiB8fCBsaXN0LmNyZWF0b3IgPT09ICRzY29wZS51c2VyRmlsdGVyKSAmJlxyXG4gICAgICAgICAgKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiYWxsXCIgfHwgbGlzdC5pc0R5bmFtaWMgPT09ICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImR5bmFtaWNcIikpLFxyXG4gICAgICApLmxlbmd0aDtcclxuICAgICAgcmV0dXJuIGAke2NvdW50fSAtICR7TWF0aC5yb3VuZCgoY291bnQgLyAkc2NvcGUubGlzdHMubGVuZ3RoKSAqIDEwMCl9JWA7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRDYXRlZ29yeUNvdW50ID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxpc3RzKSByZXR1cm4gMDtcclxuICAgICAgY29uc3QgY291bnQgPSAkc2NvcGUubGlzdHMuZmlsdGVyKFxyXG4gICAgICAgIChsaXN0KSA9PlxyXG4gICAgICAgICAgKGNhdGVnb3J5ID09PSBcIkFsbFwiIHx8IGxpc3QuY2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KSA+PSAwKSAmJlxyXG4gICAgICAgICAgKCRzY29wZS5sYW5ndWFnZUZpbHRlci5jb2RlID09PSBcImFsbFwiIHx8IGxpc3QubGFuZ3VhZ2UgPT09ICRzY29wZS5sYW5ndWFnZUZpbHRlci5jb2RlKSAmJlxyXG4gICAgICAgICAgKCRzY29wZS51c2VyRmlsdGVyID09PSBcIkFsbFwiIHx8IGxpc3QuY3JlYXRvciA9PT0gJHNjb3BlLnVzZXJGaWx0ZXIpICYmXHJcbiAgICAgICAgICAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJhbGxcIiB8fCBsaXN0LmlzRHluYW1pYyA9PT0gKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiZHluYW1pY1wiKSksXHJcbiAgICAgICkubGVuZ3RoO1xyXG4gICAgICByZXR1cm4gYCR7Y291bnR9IC0gJHtNYXRoLnJvdW5kKChjb3VudCAvICRzY29wZS5saXN0cy5sZW5ndGgpICogMTAwKX0lYDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldFVwZGF0ZUNvdW50ID0gKHR5cGUpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubGlzdHMpIHJldHVybiAwO1xyXG4gICAgICBjb25zdCBjb3VudCA9ICRzY29wZS5saXN0cy5maWx0ZXIoXHJcbiAgICAgICAgKGxpc3QpID0+IHR5cGUgPT09IFwiYWxsXCIgfHwgKGxpc3QuaXNEeW5hbWljICYmIHR5cGUgPT09IFwiZHluYW1pY1wiKSB8fCAoIWxpc3QuaXNEeW5hbWljICYmIHR5cGUgPT09IFwic3RhdGljXCIpLFxyXG4gICAgICApLmxlbmd0aDtcclxuICAgICAgcmV0dXJuIGAke2NvdW50fSAtICR7TWF0aC5yb3VuZCgoY291bnQgLyAkc2NvcGUubGlzdHMubGVuZ3RoKSAqIDEwMCl9JWA7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubG9hZGluZykge1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLmxpc3RzID0gZGF0YS5yZXN1bHQ7XHJcbiAgICAgICAgICAkc2NvcGUudXNlckZpbHRlcnMgPSB7fTtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVycy5BbGwgPSAkc2NvcGUubGlzdHMubGVuZ3RoO1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXJzID0gJHNjb3BlLmxpc3RzXHJcbiAgICAgICAgICAgIC5zb3J0KChsaXN0MSwgbGlzdDIpID0+IGxpc3QxLmNyZWF0b3IgPiBsaXN0Mi5jcmVhdG9yKVxyXG4gICAgICAgICAgICAucmVkdWNlKCh1c2VycywgeyBjcmVhdG9yIH0pID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXVzZXJzW2NyZWF0b3JdKSB1c2Vyc1tjcmVhdG9yXSA9IDA7XHJcbiAgICAgICAgICAgICAgdXNlcnNbY3JlYXRvcl0rKztcclxuICAgICAgICAgICAgICByZXR1cm4gdXNlcnM7XHJcbiAgICAgICAgICAgIH0sICRzY29wZS51c2VyRmlsdGVycyk7XHJcbiAgICAgICAgICAkc2NvcGUudXNlckNvdW50ID0gT2JqZWN0LmtleXMoJHNjb3BlLnVzZXJGaWx0ZXJzKS5sZW5ndGg7XHJcbiAgICAgICAgICAkc2NvcGUudXNlckZpbHRlcnMgPSBzb3J0T2JqZWN0KCRzY29wZS51c2VyRmlsdGVycywgZmFsc2UpO1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXIgPSBcIkFsbFwiO1xyXG4gICAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VsZWN0TGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0KGxpc3QpXHJcbiAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIGRhdGEuX2lkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgICAkKFwiI2NhdGVnb3J5LXNlbGVjdFwiKS5oaWRlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRDYXRlZ29yeUNsYXNzID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIHJldHVybiAkc2NvcGUuc2VsZWN0ZWRMaXN0ICYmICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KSA+PSAwXHJcbiAgICAgICAgPyBcImJ0bi1zdWNjZXNzXCJcclxuICAgICAgICA6IFwiYnRuLWRlZmF1bHRcIjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUNhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3J5SW5kZXggPSAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSk7XHJcbiAgICAgIGlmIChjYXRlZ29yeUluZGV4ID49IDApIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuc3BsaWNlKGNhdGVnb3J5SW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VsZWN0TGFuZ3VhZ2UgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5sYW5ndWFnZSA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgIGNvbnN0IG5vbkVuZ2xpc2hJbmRleCA9ICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5pbmRleE9mKFwiTm9uLUVuZ2xpc2hcIik7XHJcbiAgICAgIGlmIChsYW5ndWFnZS5jb2RlICE9PSBcIkVOXCIgJiYgbm9uRW5nbGlzaEluZGV4IDwgMCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5wdXNoKFwiTm9uLUVuZ2xpc2hcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAobGFuZ3VhZ2UuY29kZSA9PT0gXCJFTlwiICYmIG5vbkVuZ2xpc2hJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLnNwbGljZShub25FbmdsaXNoSW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hZGRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50TGFuZ3VhZ2UgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0ID8gJHNjb3BlLnNlbGVjdGVkTGlzdC5sYW5ndWFnZSA6IFwiRU5cIjtcclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgXCJcIik7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBjcmVhdG9yOiAkc2NvcGUuY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgdmFsdWVzOiBbXSxcclxuICAgICAgICBhbnN3ZXJzOiAwLFxyXG4gICAgICAgIGlzRHluYW1pYzogdHJ1ZSxcclxuICAgICAgICBjYXRlZ29yeTogXCJcIixcclxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgICBsYW5ndWFnZTogY3VycmVudExhbmd1YWdlLFxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaGFzRHVwbGljYXRlID0gKCkgPT5cclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCAmJlxyXG4gICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSAmJlxyXG4gICAgICBfLnNvbWUoXHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMsXHJcbiAgICAgICAgKGFuc3dlcikgPT4gYW5zd2VyLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSA9PSAkc2NvcGUubmV3SXRlbS52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCksXHJcbiAgICAgICk7XHJcblxyXG4gICAgJHNjb3BlLmFkZFZhbHVlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm5ld0l0ZW0udmFsdWUpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBfLnNvbWUoXHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgICAgICAoYW5zd2VyKSA9PiBhbnN3ZXIudmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpID09ICRzY29wZS5uZXdJdGVtLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSxcclxuICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGFsZXJ0KGAkeyRzY29wZS5uZXdJdGVtLnZhbHVlfSBpcyBhbHJlYWR5IGluIHRoZSBsaXN0YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRzY29wZS5uZXdJdGVtLmNyZWF0b3IgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMudW5zaGlmdChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KCRzY29wZS5uZXdJdGVtKSkpO1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5hbnN3ZXJzKys7XHJcbiAgICAgICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAkc2NvcGUubmV3SXRlbS5ibHVyYiA9IFwiXCI7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCAmJlxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0Lm5hbWUgJiZcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2ZUxpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICQoXCIjbmV3LXZhbHVlXCIpLmZvY3VzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5yZXBvcnRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgbGlzdC5yZXBvcnRlZCA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5yZXBvcnRMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgbGlzdCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zYXZlTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLnNhdmluZykge1xyXG4gICAgICAgIGxpc3QudmFsdWVzID0gbGlzdC52YWx1ZXMuZmlsdGVyKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcclxuICAgICAgICBpZiAobGlzdC52YWx1ZXMubGVuZ3RoID49IDEwICYmIGxpc3QubmFtZSAmJiBsaXN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgJHNjb3BlLnNhdmluZyA9IHRydWU7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuc2F2ZUxpc3QoJHNjb3BlLmN1cnJlbnRVc2VyLCBsaXN0KS50aGVuKFxyXG4gICAgICAgICAgICAoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICBpZiAoISRzY29wZS5zZWxlY3RlZExpc3QuX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubGlzdHMudW5zaGlmdChkYXRhKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RMaXN0KGRhdGEpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICRzY29wZS5saXN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmxpc3RzW2ldLl9pZCA9PT0gZGF0YS5faWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubGlzdHNbaV0gPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0TGlzdChsaXN0KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsaXN0LnZhbHVlcy5sZW5ndGggPCAxMCkge1xyXG4gICAgICAgICAgYWxlcnQoXCJMaXN0cyBtdXN0IGNvbnRhaW4gMTAgb3IgbW9yZSB2YWx1ZXMhXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIWxpc3QubmFtZSkge1xyXG4gICAgICAgICAgZmxhc2goXCIjbGlzdC1uYW1lXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmbGFzaChcIi5saXN0LWNhdGVnb3J5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBmbGFzaChlbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gJChlbGVtZW50KS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpO1xyXG4gICAgICAkKGVsZW1lbnQpLmFuaW1hdGUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGQTgwNzJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMCxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAkKGVsZW1lbnQpLmFuaW1hdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZUxpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBpZiAoIWxpc3QuX2lkKSB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gJHNjb3BlLmxpc3RzLmZpbHRlcigoeyBfaWQgfSkgPT4gX2lkKTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBsaXN0P1wiKSkge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3QobGlzdCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBudWxsO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5saXN0QnV0dG9uQ2xhc3MgPSAobGlzdCkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZXMgPSBsaXN0LnZhbHVlcy5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGJsdXJicyA9IGxpc3QuYmx1cmJzO1xyXG4gICAgICBpZiAodmFsdWVzID09PSBibHVyYnMgJiYgbGlzdC5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHJldHVybiBcImJ0bi1kZWZhdWx0XCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoYmx1cmJzID09PSAwICYmICFsaXN0LmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiYnRuLXdhcm5pbmdcIjtcclxuICAgICAgfSBlbHNlIGlmIChibHVyYnMgPT09IDAgJiYgbGlzdC5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHJldHVybiBcImJ0bi1pbmZvXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiYnRuLXByaW1hcnlcIjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Qmx1cmJzID0gKHR5cGUpID0+IHtcclxuICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Qmx1cmJzKCRzY29wZS5zZWxlY3RlZExpc3QsIHR5cGUpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdExpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCk7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1dvcmtvdXRDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgJHNjb3BlLnRpbWVFeGVyY2lzaW5nID0gMzA7XHJcbiAgJHNjb3BlLnRpbWVSZXN0aW5nID0gMTA7XHJcbiAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuXHJcbiAgdmFyIHNvdW5kcyA9IHtcclxuICAgIG9uOiBuZXcgQXVkaW8oJ29uLndhdicpLFxyXG4gICAgb2ZmOiBuZXcgQXVkaW8oJ29mZi53YXYnKSxcclxuICAgIHN3aXRjaDogbmV3IEF1ZGlvKCdzd2l0Y2gud2F2JyksXHJcbiAgfTtcclxuXHJcblxyXG4gIHZhciBleGVyY2lzZXMgPSBbXHJcbiAgICB7bmFtZTogJ0p1bXBpbmcgSmFja3MnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdXYWxsIFNpdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1B1c2gtVXAnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdDcnVuY2gnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTdGVwLVVwJywgc3BsaXQ6IHRydWV9LFxyXG4gICAge25hbWU6ICdTcXVhdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1RyaWNlcHMgRGlwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUGxhbmsnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdIaWdoIEtuZWVzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnTHVuZ2UnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwIHdpdGggUm90YXRpb24nLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTaWRlIFBsYW5rJywgc3BsaXQ6IHRydWV9XHJcbiAgXTtcclxuXHJcbiAgdmFyIGV4ZXJjaXNpbmc7XHJcblxyXG4gICRzY29wZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChleGVyY2lzZXMubGVuZ3RoIC0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvICgkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3RpbmcpKSkgKyAnLycgKyBleGVyY2lzZXMubGVuZ3RoO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS53b3Jrb3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZXhjZXJjaXNlVGltZSA9ICRzY29wZS50aW1lRXhlcmNpc2luZyArICRzY29wZS50aW1lUmVzdGluZztcclxuICAgIGlmICghJHNjb3BlLnRpbWVSZW1haW5pbmcpIHtcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSBleGVyY2lzZXMubGVuZ3RoICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgZXhlcmNpc2luZyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS50aW1lUmVtYWluaW5nLS07XHJcbiAgICAgICAgaWYgKCRzY29wZS50aW1lUmVtYWluaW5nID09PSAwKSB7XHJcbiAgICAgICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJ0ZpbmlzaGVkISBDb25ncmF0cyEnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdXJyZW50RXhlcmNpc2UgPSBNYXRoLmZsb29yKCRzY29wZS50aW1lUmVtYWluaW5nIC8gZXhjZXJjaXNlVGltZSk7XHJcbiAgICAgICAgdmFyIHRpbWVyID0gJHNjb3BlLnRpbWVSZW1haW5pbmcgLSBjdXJyZW50RXhlcmNpc2UgKiBleGNlcmNpc2VUaW1lO1xyXG4gICAgICAgICRzY29wZS50aW1lciA9IHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nID8gdGltZXIgLSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgOiB0aW1lcjtcclxuICAgICAgICBpZiAodGltZXIgPiAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0gZXhlcmNpc2VzW2V4ZXJjaXNlcy5sZW5ndGggLSBjdXJyZW50RXhlcmNpc2UgLSAxXTtcclxuICAgICAgICBpZiAodGltZXIgPT09ICRzY29wZS50aW1lRXhlcmNpc2luZykge1xyXG4gICAgICAgICAgc291bmRzLm9uLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRpbWVyID09PSAwKSB7XHJcbiAgICAgICAgICBzb3VuZHMub2ZmLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRzY29wZS5leGVyY2lzZS5zcGxpdCAmJiB0aW1lciA9PT0gTWF0aC5mbG9vcigkc2NvcGUudGltZUV4ZXJjaXNpbmcgLyAyKSkge1xyXG4gICAgICAgICAgc291bmRzLnN3aXRjaC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAkc2NvcGUudGltZXIgPSAnJztcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJycsIHNwbGl0OiBmYWxzZX07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5kaXJlY3RpdmUoXCJjbGlja091dHNpZGVcIiwgZnVuY3Rpb24gKCRkb2N1bWVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICByZXN0cmljdDogXCJBXCIsXHJcbiAgICBzY29wZToge1xyXG4gICAgICBjbGlja091dHNpZGU6IFwiJlwiLFxyXG4gICAgfSxcclxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgJGRvY3VtZW50Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZWwgIT09IGUudGFyZ2V0ICYmICFlbFswXS5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vc2NvcGUuJHBhcmVudC5zZXRTZWxlY3RlZExpc3QoKTtcclxuICAgICAgICAgICAgc2NvcGUuJGV2YWwoc2NvcGUuY2xpY2tPdXRzaWRlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuXHQuZGlyZWN0aXZlKCdoZWFkJywgW1xyXG5cdFx0JyRyb290U2NvcGUnLFxyXG5cdFx0JyRzdGF0ZScsXHJcblx0XHQnJGNvbXBpbGUnLFxyXG5cdFx0JyRpbnRlcnBvbGF0ZScsXHJcblx0XHRmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkY29tcGlsZSwgJGludGVycG9sYXRlKSB7XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGUgPSBmdW5jdGlvbiBnZXRTdHlsZSh0ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdHlsZSA9IHtcclxuXHRcdFx0XHRcdGhyZWY6IHRlbXBsYXRlU3R5bGVVcmwsXHJcblx0XHRcdFx0XHRyZWw6ICdzdHlsZXNoZWV0J1xyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmIChzdHlsZS5ocmVmLm1hdGNoKC9cXC5sZXNzJC8pKSB7XHJcblx0XHRcdFx0XHRzdHlsZS5yZWwgPSAnc3R5bGVzaGVldC9sZXNzJztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBzdHlsZTtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gZ2V0U3R5bGVzKHN0YXRlKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdGF0ZXMgPSB7fTtcclxuXHJcblx0XHRcdFx0Ly9DaGVjayBzdGF0ZSBmb3Igc3R5bGVzXHJcblx0XHRcdFx0d2hpbGUgKHN0YXRlLm5hbWUgIT09ICcnKSB7XHJcblx0XHRcdFx0XHR2YXIgcGFyZW50ID0gJHN0YXRlLmdldCgnXicsIHN0YXRlKTtcclxuXHJcblx0XHRcdFx0XHQvL0luaXRpYXRlIG91ciB2aWV3IGxpc3RcclxuXHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXSkge1xyXG5cdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdID0ge307XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB0aGUgdGVtcGxhdGVTdHlsZVxyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSkge1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1bJyddID0gZ2V0U3R5bGUoc3RhdGUudGVtcGxhdGVTdHlsZVVybCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NoZWNrIHZpZXdzXHJcblx0XHRcdFx0XHRpZiAoc3RhdGUudmlld3MpIHtcclxuXHRcdFx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlLnZpZXdzLCBmdW5jdGlvbiAodmlldywga2V5KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgaGF2ZSBhIHN0eWxlXHJcblx0XHRcdFx0XHRcdFx0aWYgKCF2aWV3LnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgYXJlIHRhcmdldGluZyBzb21lIHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdGlmICgoa2V5ID0ga2V5LnNwbGl0KCdAJykpWzFdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgc3R5bGVzIGZvciB0aGF0IHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXSA9IHt9O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIHNvbWUgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXVtrZXlbMF1dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlc1trZXlbMV1dW2tleVswXV0gPSBnZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIG91ciBwYXJlbnQncyB2aWV3XHJcblx0XHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ29udGludWUgd2l0aCB0aGUgcGFyZW50XHJcblx0XHRcdFx0XHRzdGF0ZSA9IHBhcmVudDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vRmxhdHRlbiB0aGUgbGlzdFxyXG5cdFx0XHRcdHZhciBmbGF0ID0gW107XHJcblx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlcywgZnVuY3Rpb24gKHZpZXdzKSB7XHJcblxyXG5cdFx0XHRcdFx0Xy5mb3JFYWNoKHZpZXdzLCBmdW5jdGlvbiAoc3R5bGUpIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghXy5pbmNsdWRlcyhmbGF0LCBzdHlsZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRmbGF0LnB1c2goc3R5bGUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvL1JldmVyc2UgaXQgc28gd2UgaGF2ZSBhIHByb3BlciBoaWVyYXJjaHlcclxuXHRcdFx0XHRmbGF0LnJldmVyc2UoKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGZsYXQ7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0XHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSkge1xyXG5cclxuXHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gW107XHJcblxyXG5cdFx0XHRcdFx0dmFyIGh0bWwgPSAnPGxpbmsgbmctYXR0ci1yZWw9XCJ7e3N0eWxlLnJlbH19XCIgbmctcmVwZWF0PVwic3R5bGUgaW4gdGVtcGxhdGVTdHlsZXNcIiBuZy1ocmVmPVwie3tzdHlsZS5ocmVmfX1cIj4nO1xyXG5cclxuXHRcdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xce1xcey9nLCAkaW50ZXJwb2xhdGUuc3RhcnRTeW1ib2woKSk7XHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXH1cXH0vZywgJGludGVycG9sYXRlLmVuZFN5bWJvbCgpKTtcclxuXHJcblx0XHRcdFx0XHRlbGVtLmFwcGVuZCgkY29tcGlsZShodG1sKShzY29wZSkpO1xyXG5cclxuXHRcdFx0XHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykge1xyXG5cclxuXHRcdFx0XHRcdFx0c2NvcGUudGVtcGxhdGVTdHlsZXMgPSBnZXRTdHlsZXModG9TdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHR9XHJcblx0XSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnQ2F0ZWdvcmllc1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0Q2F0ZWdvcmllcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcycpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRUYXNrcyA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9jYXRlZ29yaWVzLycgKyBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZENhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9jYXRlZ29yaWVzLycsIGNhdGVnb3J5KTtcclxuICB9O1xyXG5cclxuICBzdmMuYWRkVGFzayA9IGZ1bmN0aW9uIChjYXRlZ29yeSwgdGFzaykge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkgKyAnL3Rhc2tzJywgdGFzayk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHN2Yy5jaG9pY2VzID0gbGlzdDtcclxuICAgIHN2Yy5wcmlvcml0eUxpc3QgPSBbXTtcclxuICAgIC8vTWFrZSBhIG5ldyBjaG9pY2UgbGlzdFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IGxpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICBzdmMucHJpb3JpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICBmaXJzdENob2ljZTogbGlzdFtyYW5kb20gPT09IDAgPyBpIDogal0ubmFtZSxcclxuICAgICAgICAgIHNlY29uZENob2ljZTogbGlzdFtyYW5kb20gPT09IDAgPyBqIDogaV0ubmFtZSxcclxuICAgICAgICAgIGNob2ljZTogJydcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2h1ZmZsZShzdmMucHJpb3JpdHlMaXN0KTtcclxuICAgIGZvciAoaSBpbiBzdmMucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHN2Yy5wcmlvcml0eUxpc3RbaV0uaWQgPSBpICsgMTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UHJpb3JpdHlMaXN0ID0gZnVuY3Rpb24obGlzdCkge1xyXG4gICAgcmV0dXJuIHN2Yy5wcmlvcml0eUxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xyXG4gICAgdmFyIG0gPSBhcnJheS5sZW5ndGgsIHQsIGk7XHJcbiAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZeKAplxyXG4gICAgd2hpbGUgKG0pIHtcclxuICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW504oCmXHJcbiAgICAgIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtLS0pO1xyXG4gICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcbiAgICAgIC8vYXJyYXlbbV0uZmlyc3RDaG9pY2U7XHJcbiAgICAgIHQgPSBhcnJheVttXTtcclxuICAgICAgYXJyYXlbbV0gPSBhcnJheVtpXTtcclxuICAgICAgYXJyYXlbaV0gPSB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0VtYWlsU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5zZW5kID0gZnVuY3Rpb24gKGVtYWlsKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9lbWFpbCcsIGVtYWlsKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5zZXJ2aWNlKCdGaWxlU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgICBzdmMuZ2V0SW1hZ2VzID0gZnVuY3Rpb24oZm9sZGVyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZmlsZXMvaW1hZ2VzLycgKyBmb2xkZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdmMuZ2V0U291bmRzID0gZnVuY3Rpb24oZm9sZGVyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZmlsZXMvc291bmRzLycgKyBmb2xkZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdHYW1lU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgICBzdmMuZ2V0SGlnaHNjb3JlID0gZnVuY3Rpb24gKGdhbWUsIHVzZXIpIHtcclxuICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9nYW1lcy8nICsgZ2FtZSArICcvJyArIHVzZXIgKyAnL2hpZ2hzY29yZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdmMuc2V0SGlnaHNjb3JlID0gZnVuY3Rpb24gKGdhbWUsIHVzZXIsIHNjb3JlKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2dhbWVzLycgKyBnYW1lICsgJy8nICsgdXNlciArICcvaGlnaHNjb3JlJywge1xyXG4gICAgICAgIHNjb3JlOiBzY29yZVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdMYW5ndWFnZVN2YycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmxhbmd1YWdlcyA9IFtcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRU5cIixcclxuICAgICAgXCJuYW1lXCI6IFwiRW5nbGlzaFwiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tZ2JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiTkxcIixcclxuICAgICAgXCJuYW1lXCI6IFwiTmVkZXJsYW5kc1wiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tbmxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRlJcIixcclxuICAgICAgXCJuYW1lXCI6IFwiRnJhbsOnYWlzXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1mclwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgc3ZjLnRleHQgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkVOXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIk5MXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkZSXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBzdmMuc2VsZWN0ZWRMYW5ndWFnZSA9IHN2Yy5sYW5ndWFnZXNbMF07XHJcblxyXG4gIHN2Yy5zZXRMYW5ndWFnZSA9IGZ1bmN0aW9uIChsYW5ndWFnZSkge1xyXG4gICAgc3ZjLnNlbGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgIHJldHVybiBsYW5ndWFnZTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gc3ZjLnNlbGVjdGVkTGFuZ3VhZ2U7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ1Bvc3RzU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5mZXRjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlID0gZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgcG9zdCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBvc3QgPSBmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cy8nICsgcG9zdC5faWQpO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlRlblRoaW5nc1N2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFF1ZXVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2JvdHMvdGVudGhpbmdzL3F1ZXVlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3RzID0gZnVuY3Rpb24gKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgdmFyIHVybCA9XHJcbiAgICAgIGAvYXBpL3RlbnRoaW5ncy9saXN0cz9gICtcclxuICAgICAgKG9wdGlvbnMubGltaXQgPyBgJmxpbWl0PSR7b3B0aW9ucy5saW1pdH1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5wYWdlID8gYCZwYWdlPSR7b3B0aW9ucy5wYWdlfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnNvcnRCeSA/IGAmc29ydF9ieT0ke29wdGlvbnMuc29ydEJ5fWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLm9yZGVyQnkgPyBgJm9yZGVyX2J5PSR7b3B0aW9ucy5vcmRlckJ5fWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLmxhbmd1YWdlcyAmJiBvcHRpb25zLmxhbmd1YWdlcy5sZW5ndGggPiAwID8gYCZsYW5ndWFnZT0ke29wdGlvbnMubGFuZ3VhZ2VzLmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLmNhdGVnb3JpZXMgJiYgb3B0aW9ucy5jYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyBgJmNhdGVnb3JpZXM9JHtvcHRpb25zLmNhdGVnb3JpZXMuam9pbihcIixcIil9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuc2VhcmNoID8gYCZzZWFyY2g9JHtvcHRpb25zLnNlYXJjaH1gIDogXCJcIik7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9jYXRlZ29yaWVzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2xhbmd1YWdlc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucHV0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCwgbGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZUxpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0c1wiLCB7XHJcbiAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIGxpc3Q6IGxpc3QsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuZGVsZXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnB1dChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXMvXCIgKyB2YWx1ZS5faWQsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXNcIiwgdmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5kZWxldGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzL1wiICsgdmFsdWUuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMucmVwb3J0TGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvcmVwb3J0L1wiICsgdXNlci5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9jYXRlZ29yaWVzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0TGFuZ3VhZ2VTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9sYW5ndWFnZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEJsdXJicyA9IGZ1bmN0aW9uIChsaXN0LCB0eXBlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvbGlzdHMvJHtsaXN0Ll9pZH0vYmx1cmJzLyR7dHlwZX1gKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRHYW1lID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9nYW1lLyR7aWR9YCk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJVc2VyU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRVc2VycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzL2FsbFwiKTtcclxuICB9O1xyXG5cclxuICBzdmMudG9nZ2xlQmFuID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3VzZXJzL2Jhbi8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSB0b2tlbjtcclxuICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hdXRoZW50aWNhdGVcIiwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9sb2dpblwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyLl9pZCwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi92ZXJpZmljYXRpb25cIiwge1xyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvcGFzc3dvcmRcIiwge1xyXG4gICAgICBvbGRQYXNzd29yZDogb2xkUGFzc3dvcmQsXHJcbiAgICAgIG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VyLCBuZXdVc2VybmFtZSkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi91c2VybmFtZVwiLCB7XHJcbiAgICAgICAgbmV3VXNlcm5hbWU6IG5ld1VzZXJuYW1lLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmNvbnRyb2xsZXIoJ1F1aXpBbmltYWxzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgRmlsZVN2Yykge1xyXG5cclxuICAgIEZpbGVTdmMuZ2V0U291bmRzKCdhbmltYWxzJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIHNvdW5kOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgNSk7XHJcblxyXG4gICAgJHNjb3BlLmdldFNjb3JlID0gKCkgPT4gYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwubmFtZSA9PT0gYW5pbWFsLmd1ZXNzKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWA7XHJcblxyXG4gICAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwuZ3Vlc3MpLmxlbmd0aCA9PT0gJHNjb3BlLmFuaW1hbHMubGVuZ3RoO1xyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpekdvb2dsZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ2dvb2dsZScpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TG9nb3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdsb2dvcycpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TW92aWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnbW92aWVzJylcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuY29udHJvbGxlcignUXVpelNrZWxldG9uc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIEZpbGVTdmMpIHtcclxuXHJcbiAgICBGaWxlU3ZjLmdldEltYWdlcygnc2tlbGV0b25zJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIGltYWdlOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgMTApO1xyXG5cclxuICAgICRzY29wZS5nZXRTY29yZSA9ICgpID0+IGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAgICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxuICB9KTsiXX0=
