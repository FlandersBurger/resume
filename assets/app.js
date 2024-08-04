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
}]), angular.module("app").controller("AppCtrl", function ($scope, LanguageSvc, UserSvc) {
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
  }, $scope.createValue = async () => {
    if ($scope.hasDuplicate()) return alert(`${$scope.newItem.value} is already in the list`);
    $scope.selectedList._id ? await TenThingsSvc.createListValue($scope.selectedList, $scope.newItem) : $scope.selectedList.values.length <= 10 && (await $scope.upsertList($scope.selectedList)), $scope.selectedList.values.push({
      ...$scope.newItem
    }), $scope.newItem.value = "", $scope.newItem.blurb = "", $("#new-blurb").focus();
  }, $scope.deleteValue = item => {
    TenThingsSvc.deleteListValue($scope.selectedList, item).then(() => {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJjb250cm9sbGVycy9hcHAuY3RybC5qcyIsImNvbnRyb2xsZXJzL2FzdGVyb2lkcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvYnViYmxlcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvY2hhcmFkZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3QuY3RybC5qcyIsImNvbnRyb2xsZXJzL2V4cGVyaWVuY2UuY3RybC5qcyIsImNvbnRyb2xsZXJzL2hvYmJpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xlbW1pbmdzLmN0cmwuanMiLCJjb250cm9sbGVycy9saXN0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbG9naW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3Bvc3RzLmN0cmwuanMiLCJjb250cm9sbGVycy9wcmlvcml0aXplLmN0cmwuanMiLCJjb250cm9sbGVycy9wcm9maWxlLmN0cmwuanMiLCJjb250cm9sbGVycy9za2lsbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvdGVudGhpbmdzYWRtaW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2dhbWUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc29sZC5jdHJsLmpzIiwiY29udHJvbGxlcnMvd29ya291dC5jdHJsLmpzIiwic2VydmljZXMvY2F0ZWdvcmllcy5zdmMuanMiLCJzZXJ2aWNlcy9lbWFpbC5zdmMuanMiLCJzZXJ2aWNlcy9maWxlLnN2Yy5qcyIsInNlcnZpY2VzL2dhbWUuc3ZjLmpzIiwic2VydmljZXMvbGFuZ3VhZ2Uuc3ZjLmpzIiwic2VydmljZXMvcG9zdHMuc3ZjLmpzIiwic2VydmljZXMvdGVudGhpbmdzLnN2Yy5qcyIsInNlcnZpY2VzL3VzZXIuc3ZjLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9hbmltYWxzLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2dvb2dsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9sb2dvcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9tb3ZpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvc2tlbGV0b25zLmN0cmwuanMiXSwibmFtZXMiOlsiZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwIiwiYmFzZSIsImxldHRlcnMiLCJkb21haW5zIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJTdHJpbmciLCJwcm90b3R5cGUiLCJ2YWx1ZSIsInJlZHVjZSIsInJlc3VsdCIsImxldHRlciIsInJlcGxhY2UiLCJ0aGlzIiwiU1BFQ0lBTF9DSEFSQUNURVJTIiwiUmVnRXhwIiwidG9Mb3dlckNhc2UiLCJyZW1vdmVEaWFjcml0aWNzIiwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMiLCJleHRyYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsImRpcmVjdGl2ZSIsIiRkb2N1bWVudCIsInJlc3RyaWN0Iiwic2NvcGUiLCJjbGlja091dHNpZGUiLCJsaW5rIiwiZWwiLCJhdHRyIiwib24iLCJ0YXJnZXQiLCJjb250YWlucyIsIiRhcHBseSIsIiRldmFsIiwiJHN0YXRlIiwiJGNvbXBpbGUiLCIkaW50ZXJwb2xhdGUiLCJnZXRTdHlsZSIsInRlbXBsYXRlU3R5bGVVcmwiLCJzdHlsZSIsImhyZWYiLCJyZWwiLCJtYXRjaCIsImVsZW0iLCJ0ZW1wbGF0ZVN0eWxlcyIsImh0bWwiLCJzdGFydFN5bWJvbCIsImVuZFN5bWJvbCIsImFwcGVuZCIsIiRvbiIsImV2ZW50IiwidG9TdGF0ZSIsInRvUGFyYW1zIiwiZnJvbVN0YXRlIiwiZnJvbVBhcmFtcyIsInN0YXRlcyIsIm5hbWUiLCJwYXJlbnQiLCJnZXQiLCJ2aWV3cyIsIl8iLCJ2aWV3Iiwic3BsaXQiLCJmbGF0IiwiaW5jbHVkZXMiLCJyZXZlcnNlIiwiZ2V0U3R5bGVzIiwiJHNjb3BlIiwiTGFuZ3VhZ2VTdmMiLCJVc2VyU3ZjIiwiJCIsImxvYWQiLCJmYWRlT3V0IiwiZmFkZUluIiwiY2xvc2VzdCIsInRvZ2dsZUNsYXNzIiwiY2hlY2tlZCIsImRvY3VtZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwidGhlbWVDb3VudGVyIiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiZmxpcFRoZW1lIiwic2hvdyIsImhpZGUiLCJzZXRUaW1lb3V0IiwiZ2V0SlNPTiIsInNraWxscyIsImZpbHRlciIsInNraWxsIiwiaG9iYmllcyIsImpvYnMiLCJqb2IiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiY2hhcmFkZXMiLCJnZXRUaW1lU3BhbiIsImxhbmd1YWdlcyIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJnZXRMYW5ndWFnZSIsInNlbGVjdExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImhvdmVyZGl2IiwiZGl2aWQiLCJsZWZ0IiwiY2xpZW50WCIsInRvcCIsImNsaWVudFkiLCJnZXRFbGVtZW50QnlJZCIsImNzcyIsInRvZ2dsZSIsImxvY2FsU3RvcmFnZSIsInVzZXIiLCJsb2dpbiIsInRoZW4iLCJyZXNwb25zZSIsImxvZ2dlZEluIiwiX2lkIiwiY3VycmVudFVzZXIiLCJiaXJ0aERhdGUiLCJsb2FkaW5nIiwibG9nb3V0IiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsImNsZWFyIiwiY2F0Y2giLCJlcnJvciIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiJGxvY2F0aW9uIiwiR2FtZVN2YyIsImFubm91bmNlIiwiY2FudmFzIiwicGF0aCIsImFsZXJ0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZvbnQiLCJmaWxsU3R5bGUiLCJ0ZXh0QWxpZ24iLCJzaG90cyIsImFzdGVyb2lkcyIsInBvd2VydXBzIiwiZXhwbG9zaW9ucyIsIm1hcCIsInNwYWNlcGljcyIsInNwYWNlIiwicG93ZXJ1cFR5cGVzIiwiYW5ub3VuY2VtZW50IiwiY3ljbGUiLCJyb3dzIiwiY29sdW1ucyIsInNpemUiLCJpbWciLCJJbWFnZSIsImFjdGl2YXRlIiwic3BhY2VzaGlwIiwibWF4U3BlZWQiLCJjb29sZG93biIsImNvb2xkb3duVGltZSIsInJhbmdlIiwic2hpZWxkIiwiZXhwbG9kZSIsInNwYXduQXN0ZXJvaWRzIiwicG93ZXJ1cCIsImFycmF5Iiwic3JjIiwiZXhwbG9zaW9uSW1hZ2UiLCJldmFsdWF0ZUtleXMiLCJwbGF5aW5nIiwic2hvb3QiLCJyb3RhdGlvbiIsInNwZWVkIiwic2NvcmUiLCJTcGFjZXNoaXAiLCJhdXRvU3Bhd24iLCJ3aWR0aCIsImhlaWdodCIsImNhbm5vbiIsIngiLCJ5IiwicG9zaXRpb24iLCJhbmdsZSIsImlkIiwicm91bmQiLCJTaG90IiwibW92ZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJmaWxsIiwiYXN0ZXJvaWQiLCJoaXQiLCJnYW1lT3ZlciIsImNvcyIsInNpbiIsImxpZmVzcGFuIiwiQXN0ZXJvaWQiLCJnZXRFbnRyeVBvc2l0aW9uIiwicm90YXRpb25TcGVlZCIsIkV4cGxvc2lvbiIsInNob3QiLCJwb2ludHMiLCJzcGF3blBvd2VydXAiLCJvYmplY3QiLCJQb3dlcnVwIiwiZGVsYXkiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiY29sdW1uIiwicm93IiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImdyaWRYIiwiZ3JpZFkiLCJvYmplY3QxIiwib2JqZWN0MiIsImtleXMiLCJhbW91bnQiLCJoaWdoc2NvcmUiLCJzZXRIaWdoc2NvcmUiLCJyZXNpemVDYW52YXMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5Q29kZSIsIndoaWNoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsImNsZWFyUmVjdCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJ0YWxseSIsImZpbGxUZXh0IiwibWVhc3VyZVRleHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJidWJibGVzIiwiY29sb3JzIiwiQnViYmxlIiwicmFkaXVzIiwiZXhwYW5kaW5nIiwiY2lyY3VtZmVyZW5jZSIsIm1heFJhZGl1cyIsInZ4IiwidnkiLCJmaWx0ZXJCdWJibGVzIiwiYnViYmxlIiwic2VsZWN0V29yZCIsImNhdGVnb3J5Iiwid29yZCIsIkVtYWlsU3ZjIiwib3B0aW9ucyIsInRleHQiLCJjb250YWN0IiwiZW1haWwiLCJwaG9uZSIsImFib3V0IiwibWVzc2FnZSIsInNlbmRpbmciLCJzZW50Iiwic3RhdHVzIiwiZXJyIiwiZ2V0U2tpbGwiLCJza2lsbENvZGUiLCJjb2RlIiwiJHdpbmRvdyIsImhvYmJ5U2VsZWN0b3JWaXNpYmxlIiwic2VsZWN0ZWRIb2JieSIsInNlbGVjdEhvYmJ5IiwiaG9iYnkiLCJzaG93SG9iYnkiLCJpbmRleCIsImltYWdlcyIsIkxFRlQiLCJSSUdIVCIsImxlbW1pbmdzSW1hZ2UiLCJkZWNvckltYWdlIiwibGVtbWluZ3MiLCJzdGFydGVkIiwiYWN0aW9ucyIsIndhbGsiLCJzdGFydCIsImVuZCIsImh1aCIsImZhbGwiLCJmbHkiLCJzdG9wIiwiY2xpbWIiLCJidWlsZCIsInB1bmNoIiwiZGlnIiwiTGVtbWluZyIsImluaXQiLCJhY3QiLCJhY3Rpb24iLCJhbmltYXRpb24iLCJzY2FsZSIsImhhdGNoIiwib3BlbiIsInJlY3QiLCJDYXRlZ29yaWVzU3ZjIiwic2hvd0NhdGVnb3J5IiwiZ2V0Q2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJ0YXNrcyIsImoiLCJ0YXNrIiwic2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2VsZWN0ZWRUYXNrcyIsInNlbGVjdGFibGVUYXNrcyIsImVudGVyZWRDYXRlZ29yeSIsIm5ld0NhdGVnb3J5IiwiZm91bmQiLCJhZGRDYXRlZ29yeSIsIm5ld1Rhc2siLCJzZWxlY3RUYXNrIiwiYWRkVGFzayIsImVudGVyZWRUYXNrIiwicmVtb3ZlVGFzayIsInVuc2VsZWN0VGFzayIsInRhc2tMaXN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInN0YXJ0UHJpb3JpdGl6aW5nIiwic2V0UHJpb3JpdHlMaXN0IiwiZ2V0UXVlc3Rpb25zIiwiY291bnRlciIsInVpIiwiZmlyZWJhc2V1aSIsIkF1dGhVSSIsInN0YXJ0VUkiLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzIiwiY3JlZGVudGlhbCIsInJlZGlyZWN0VXJsIiwiZ2V0SWRUb2tlbiIsImlkVG9rZW4iLCJhdXRoZW50aWNhdGUiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWxWZXJpZmllZCIsIiRlbWl0IiwibW9kYWwiLCJ0eXBlIiwic2lnbkluRmFpbHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY3JlZCIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwidWlTaG93biIsImRpc3BsYXkiLCJzaWduSW5TdWNjZXNzVXJsIiwic2lnbkluT3B0aW9ucyIsIkdvb2dsZUF1dGhQcm92aWRlciIsIlBST1ZJREVSX0lEIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJzaWduSW5GbG93IiwicmVzZXQiLCIkZmlsdGVyIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJjcmVhdGUiLCJib2R5IiwicG9zdCIsImZldGNoIiwicG9zdHMiLCJnZXRQb3N0IiwidW5zaGlmdCIsInByaW9yaXR5TGlzdCIsImdldFByaW9yaXR5TGlzdCIsInNlbGVjdGVkUXVlc3Rpb24iLCJjdXJyZW50UXVlc3Rpb24iLCJkb25lIiwibWFrZUNob2ljZSIsImNob2ljZSIsImZpcnN0Q2hvaWNlIiwic2Vjb25kQ2hvaWNlIiwiZ2V0QnV0dG9uVmFsdWUiLCJzZWxlY3RRdWVzdGlvbiIsInF1ZXN0aW9uIiwiZ2V0RmlsdGVyZWRQcmlvcml0eUxpc3QiLCJnZXRDaG9pY2VzTWFkZSIsImNob2ljZXNNYWRlIiwiZ2V0QnV0dG9uQ2xhc3MiLCJzaG93Q2hvaWNlcyIsImNoYXJ0Q2xpY2siLCJjaGFydCIsImdldFNlZ21lbnRzQXRFdmVudCIsInNob3dSZXN1bHRzIiwicmVzcG9uc2l2ZSIsInNlZ21lbnRTaG93U3Ryb2tlIiwic2VnbWVudFN0cm9rZUNvbG9yIiwic2VnbWVudFN0cm9rZVdpZHRoIiwicGVyY2VudGFnZUlubmVyQ3V0b3V0IiwiYW5pbWF0aW9uU3RlcHMiLCJhbmltYXRpb25FYXNpbmciLCJhbmltYXRlUm90YXRlIiwiYW5pbWF0ZVNjYWxlIiwibGVnZW5kVGVtcGxhdGUiLCJjaG9pY2VzIiwidm90ZXMiLCJsYWJlbCIsImNvdW50cmllcyIsImZsYWciLCJ0aWRiaXQiLCJkYXRlT3B0aW9ucyIsIm1heERhdGUiLCJtaW5EYXRlIiwiaW5pdERhdGUiLCJkYXRlcGlja2VyTW9kZSIsInVzZXJuYW1lVG9nZ2xlIiwicGFzc3dvcmRUb2dnbGUiLCJ0b2dnbGVVc2VybmFtZSIsIm5ld1VzZXJuYW1lIiwidXNlcm5hbWUiLCJ0b2dnbGVQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwib3JpZ2luYWxCZyIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiY2hhbmdlVXNlcm5hbWUiLCJ1cGRhdGVVc2VyIiwiZmxhZ3MiLCJ1c2VyRmxhZ3MiLCJsb2FkQ291bnRyaWVzIiwiJHF1ZXJ5IiwiY291bnRyeSIsIiR3YXRjaCIsInNlbGVjdGVkU2tpbGwiLCJza2lsbHNWaXNpYmxlIiwicHJvamVjdHMiLCJsYWJlbHMiLCJlbXBsb3llciIsImNvbmNhdCIsImZpbHRlcmVkUHJvamVjdHMiLCJwcm9qZWN0Iiwic2V0U2VsZWN0ZWRTa2lsbCIsImNoYXJ0T3B0aW9ucyIsImN1dG91dFBlcmNlbnRhZ2UiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidG9vbHRpcHMiLCJjaGFydFN0eWxlIiwiaW1hZ2UiLCJUZW5UaGluZ3NTdmMiLCJwYWdlIiwibGlzdHMiLCJzZWFyY2giLCJuZXdJdGVtIiwibGFuZ3VhZ2VGaWx0ZXIiLCJjYXRlZ29yeUZpbHRlciIsInNlbGVjdGVkTGlzdCIsInVuZGVmaW5lZCIsImV4aGF1c3RlZCIsImtleURvd24iLCJpcyIsImNyZWF0ZVZhbHVlIiwiZm9jdXMiLCJhZGRMaXN0IiwiY3VycmVudExhbmd1YWdlIiwiY3JlYXRvciIsInZhbHVlcyIsImFuc3dlcnMiLCJpc0R5bmFtaWMiLCJzZXRTZWxlY3RlZExpc3QiLCJsaXN0IiwiZ2V0TGlzdCIsInZhbHVlT3JkZXIiLCJmaWVsZCIsIm9yZGVyIiwib3JkZXJCeSIsImdldExpc3RzIiwiZ2V0TW9yZUxpc3RzIiwiYXN5bmMiLCJzZXRMYW5ndWFnZUZpbHRlciIsInNldENhdGVnb3J5RmlsdGVyIiwidG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIiLCJhbGxDYXRlZ29yaWVzIiwic29ydEJ5IiwibGltaXQiLCJuZXh0UGFnZSIsInVwZGF0ZVZhbHVlIiwidXBkYXRlTGlzdFZhbHVlIiwiZGVsZXRlTGlzdFZhbHVlIiwiaGFzRHVwbGljYXRlIiwiY3JlYXRlTGlzdFZhbHVlIiwidXBzZXJ0TGlzdCIsImJsdXJiIiwiZGVsZXRlVmFsdWUiLCJ1cGRhdGVzIiwic2F2aW5nIiwiY2hhbmdlcyIsInVwZGF0ZUxpc3QiLCJsaXN0SW5kZXgiLCJmaW5kSW5kZXgiLCJjcmVhdGVMaXN0IiwiYXNzaWduIiwiZGVsZXRlTGlzdCIsImNvbmZpcm0iLCJub25FbmdsaXNoSW5kZXgiLCJzZXREaWZmaWN1bHR5IiwiZGlmZmljdWx0eSIsInNldEZyZXF1ZW5jeSIsImZyZXF1ZW5jeSIsInNldENhdGVnb3J5IiwiY2F0ZWdvcnlJbmRleCIsInNvbWUiLCJhbnN3ZXIiLCJyZW1vdmVBbGxCdXRMZXR0ZXJzIiwiZ2V0Qmx1cmJzIiwiZ2V0dGluZ0JsdXJicyIsImdldExhbmd1YWdlcyIsImdldExpc3RMYW5ndWFnZVN0YXRzIiwibGFuZ3VhZ2VTdGF0cyIsImNvdW50IiwiZ2V0TGlzdENhdGVnb3J5U3RhdHMiLCJjYXRlZ29yeVN0YXRzIiwiYWRtaW4iLCJnZXRVc2VycyIsImdldFF1ZXVlIiwicXVldWUiLCJnZXRQYXVzZSIsInBhdXNlZCIsInVzZXJzIiwidG9nZ2xlQmFuIiwidG9nZ2xlUGF1c2UiLCIkc3RhdGVQYXJhbXMiLCJnYW1lIiwiZ2V0R2FtZSIsImZsYXNoIiwiZWxlbWVudCIsImNvbG9yIiwiYWRkVmFsdWUiLCJzZWFyY2hOYW1lIiwic2V0VXNlckZpbHRlciIsInVzZXJGaWx0ZXIiLCJzZXRVcGRhdGVGaWx0ZXIiLCJ1cGRhdGVGaWx0ZXIiLCJmaWx0ZXJlZExpc3RzIiwiY2F0ZWdvcnlGaWx0ZXJzIiwibGFuZ3VhZ2VGaWx0ZXJzIiwic2VsZWN0TGlzdCIsImxpc3RPcmRlciIsInNvcnRlciIsInNvcnRGaWVsZCIsInNvcnRMYWJlbCIsImdldExhbmd1YWdlQ291bnQiLCJnZXRDYXRlZ29yeUNvdW50IiwiZ2V0VXBkYXRlQ291bnQiLCJ1c2VyRmlsdGVycyIsIkFsbCIsImxpc3QxIiwibGlzdDIiLCJ1c2VyQ291bnQiLCJnZXRDYXRlZ29yeUNsYXNzIiwidG9nZ2xlQ2F0ZWdvcnkiLCJzYXZlTGlzdCIsInJlcG9ydExpc3QiLCJyZXBvcnRlZCIsImxpc3RCdXR0b25DbGFzcyIsImJsdXJicyIsImRlc2NyaXB0aW9uIiwidGltZVJlbWFpbmluZyIsInRpbWVFeGVyY2lzaW5nIiwidGltZVJlc3RpbmciLCJyZXN0IiwiZXhlcmNpc2luZyIsInNvdW5kcyIsIkF1ZGlvIiwib2ZmIiwic3dpdGNoIiwiZXhlcmNpc2VzIiwicHJvZ3Jlc3MiLCJ3b3Jrb3V0IiwiZXhjZXJjaXNlVGltZSIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lciIsImV4ZXJjaXNlIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50RXhlcmNpc2UiLCJwbGF5IiwiJGh0dHAiLCJzdmMiLCJnZXRUYXNrcyIsInQiLCJtIiwic2h1ZmZsZSIsImdldEltYWdlcyIsImZvbGRlciIsImdldFNvdW5kcyIsImdldEhpZ2hzY29yZSIsImpvaW4iLCJwdXQiLCJkZWxldGUiLCJnZXRVc2VyIiwic2V0VG9rZW4iLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImNyZWF0ZVVzZXIiLCJGaWxlU3ZjIiwiYW5pbWFscyIsImFuaW1hbCIsInNvdW5kIiwic3Vic3RyaW5nIiwiY2FwaXRhbGl6ZSIsImdldFJhbmRvbUFuaW1hbHMiLCJndWVzcyIsImdldFNjb3JlIiwiaXNTY29yZVZpc2libGUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUFBLDJCQUFBQSxHQUFBLENBQ0E7SUFDQUMsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLENBQUE7RUFHQUMsT0FBQUEsR0FBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsTUFBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsQ0FBQTtBQUdBQyxNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGtCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBUiwyQkFBQUEsQ0FBQVMsTUFBQUEsQ0FBQSxDQUFBQyxNQUFBQSxFQUFBQyxNQUFBQSxLQUNBRCxNQUFBQSxDQUFBRSxPQUFBQSxDQUFBRCxNQUFBQSxDQUFBVCxPQUFBQSxFQUFBUyxNQUFBQSxDQUFBVixJQUFBQSxDQUFBQSxFQUNBWSxJQUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUE7QUFHQSxNQUFBQyxrQkFBQUEsR0FBQSxxQ0FBQTtBQUVBVixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLHlCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBRCxPQUFBQSxDQUFBLElBQUFHLE1BQUFBLENBQUEsSUFBQUQsa0JBQUFBLEdBQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsRUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQVYsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxxQkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUcsV0FBQUEsRUFBQUEsQ0FBQUMsZ0JBQUFBLEVBQUFBLENBQUFDLHVCQUFBQSxFQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWQsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxTQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBVyxLQUFBQSxFQUFBQTtJQUNBLE9BQUFOLElBQUFBLENBQUFELE9BQUFBLENBQUEsSUFBQUcsTUFBQUEsQ0FBQSxLQUFBRCxrQkFBQUEsR0FBQUssS0FBQUEsR0FBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxHQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBZixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFlBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFPLE1BQUFBLENBQUEsQ0FBQSxDQUFBLENBQUFDLFdBQUFBLEVBQUFBLEdBQUFSLElBQUFBLENBQUFTLEtBQUFBLENBQUEsQ0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWxCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsWUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLENBQUFBLE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsZUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLENBQUFBLE9BQUFBLENBQUEsR0FBQSxFQUFBLE1BQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsY0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQWUsSUFBQUEsRUFBQVgsT0FBQUEsRUFBQUE7SUFFQSxLQURBLElBQUFZLGFBQUFBLEdBQUFYLElBQUFBLEVBQ0FZLENBQUFBLEdBQUEsQ0FBQSxFQUFBQSxDQUFBQSxHQUFBRixJQUFBQSxDQUFBRyxNQUFBQSxFQUFBRCxDQUFBQSxFQUFBQSxFQUNBRCxhQUFBQSxHQUFBQSxhQUFBQSxDQUFBWixPQUFBQSxDQUFBVyxJQUFB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QUEsU0FBQTtJQUNBQyxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBQyxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsWUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsYUFBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxRQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsWUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsWUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsYUFBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxNQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxPQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGlCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG9CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxlQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxnQkFBQTtJQUNBRSxVQUFBQSxFQUFBLGtCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxtQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsY0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGlCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxhQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsRUFHQUwsaUJBQUFBLENBQUFPLFNBQUFBLENBQUE7SUFDQUMsT0FBQUEsRUFBQUEsQ0FBQSxDQUFBO0lBQ0FDLFdBQUFBLEVBQUFBLENBQUE7RUFBQSxDQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUN6SUFmLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FlLE9BQUFBLENBQUEsY0FBQSxFQUFBLFVBQUFDLFVBQUFBLEVBQUFDLFFBQUFBLEVBQUFBO0VBU0EsSUFBQUMsVUFBQUE7SUFDQUMsT0FBQUEsR0FBQSxTQUFBQSxDQUFBLEVBQUE7TUFBQSxDQUNBRCxVQUFBQSxHQUFBLElBQUFFLFNBQUFBLENBVEEsUUFBQSxLQUFBQyxNQUFBQSxDQUFBQyxRQUFBQSxDQUFBQyxRQUFBQSxHQUNBLFFBQUEsR0FBQUYsTUFBQUEsQ0FBQUMsUUFBQUEsQ0FBQUUsSUFBQUEsR0FFQSxPQUFBLEdBQUFILE1BQUFBLENBQUFDLFFBQUFBLENBQUFFLElBQUFBLENBQUFBLEVBUUFDLE1BQUFBLEdBQUEsWUFBQTtRQUNBQyxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBLHFCQUFBLENBQ0E7TUFBQSxDQUFBLEVBRUFULFVBQUFBLENBQUFVLE9BQUFBLEdBQUEsVUFBQUMsQ0FBQUEsRUFBQUE7UUFDQUgsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQSxtQ0FBQSxDQUFBLEVBQ0FWLFFBQUFBLENBQUFFLE9BQUFBLEVBQUEsR0FBQSxDQUNBO01BQUEsQ0FBQSxFQUVBRCxVQUFBQSxDQUFBWSxPQUFBQSxHQUFBLFVBQUFELENBQUFBLEVBQUFBO1FBQ0FILE9BQUFBLENBQUFDLEdBQUFBLENBQUEsU0FBQSxHQUFBRSxDQUFBQSxHQUFBLFlBQUEsR0FBQVgsVUFBQUEsQ0FBQWEsVUFBQUEsQ0FDQTtNQUFBLENBQUEsRUFFQWIsVUFBQUEsQ0FBQWMsU0FBQUEsR0FBQSxVQUFBSCxDQUFBQSxFQUFBQTtRQUNBLElBQUFJLE9BQUFBLEdBQUFDLElBQUFBLENBQUFDLEtBQUFBLENBQUFOLENBQUFBLENBQUFPLElBQUFBLENBQUFBO1FBQ0FwQixVQUFBQSxDQUFBcUIsVUFBQUEsQ0FBQSxLQUFBLEdBQUFKLE9BQUFBLENBQUFLLEtBQUFBLEVBQUFMLE9BQUFBLENBQUFHLElBQUFBLENBQ0E7TUFBQSxDQUNBO0lBQUEsQ0FBQTtFQUVBcEUsSUFBQUEsQ0FBQXVFLElBQUFBLEdBQUEsVUFBQUQsS0FBQUEsRUFBQUYsSUFBQUEsRUFBQUE7SUFDQSxJQUFBSSxJQUFBQSxHQUFB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U0FBQUEsR0FBQSxRQUFBO0VBQ0EsTUFBQUMsS0FBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsU0FBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsUUFBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsVUFBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsR0FBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsU0FBQUEsR0FBQSxFQUFBO0lBQ0FDLEtBQUFBLEdBQUF0RSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBc0UsU0FBQUEsQ0FBQUE7SUFDQUUsWUFBQUEsR0FBQSxDQUNBO01BQ0FwRyxJQUFBQSxFQUFBLE9BQUE7TUFDQXFHLFlBQUFBLEVBQUEsYUFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7UUFDQTVNLENBQUFBLEVBQUEsQ0FBQTtRQUNBUyxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBb00sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0FBLFNBQUFBLENBQUFDLFFBQUFBLElBQUEsR0FDQTtNQUFBO0lBQUEsQ0FBQSxFQUVBO01BQ0E5RyxJQUFBQSxFQUFBLFVBQUE7TUFDQXFHLFlBQUFBLEVBQUEsWUFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7UUFDQTVNLENBQUFBLEVBQUEsQ0FBQTtRQUNBUyxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBb00sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0FBLFNBQUFBLENBQUFFLFFBQUFBLEdBQUEsQ0FBQSxLQUNBRixTQUFBQSxDQUFBRyxZQUFBQSxJQUFBLENBQUEsQ0FFQTtNQUFBO0lBQUEsQ0FBQSxFQUVBO01BQ0FoSCxJQUFBQSxFQUFBLE9BQUE7TUFDQXFHLFlBQUFBLEVBQUEsZ0JBQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBO1FBQ0E1TSxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQW9NLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBQSxTQUFBQSxDQUFBSSxLQUFBQSxJQUFBLENBQ0E7TUFBQTtJQUFBLENBQUEsRUFFQTtNQUNBakgsSUFBQUEsRUFBQSxRQUFBO01BQ0FxRyxZQUFBQSxFQUFBLFFBQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0E1TSxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQW9NLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBQSxTQUFBQSxDQUFBSyxNQUFBQSxHQUFBQSxDQUFBLENBQ0E7TUFBQTtJQUFBLENBQUEsRUFFQTtNQUNBbEgsSUFBQUEsRUFBQSxNQUFBO01BQ0FxRyxZQUFBQSxFQUFBLE1BQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFB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QUFBLEdBQUEsR0FBQWdLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBakssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBZ0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FqSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFnSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLEtBQUEsRUFDQSxNQUFBLEdBQ0FoSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFnSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQWpLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQWdLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBakssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBZ0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FDQSxNQUFBLEVBQ0EsTUFBQSxHQUNBaEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBZ0ssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FqSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUFnSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQWpLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQWdLLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxDQUFBLEVBRUFILFFBQUFBLENBQUFFLFlBQUFBLENBQ0EsS0FBQSxFQUNBLE1BQUEsR0FDQWhLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdB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SUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxhQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLHFCQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFVBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsU0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxTQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFFBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsWUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxXQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGdCQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFNBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsV0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxPQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGVBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsWUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSx3QkFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxVQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFlBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsU0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxjQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFVBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsU0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxTQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLE9BQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsa0JBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsU0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxTQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGlDQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGtDQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFFBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsU0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxRQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGVBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsVUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxTQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFFBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsUUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSx5QkFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSx1Q0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSwwQkFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxPQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGFBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsZUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxjQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLE9BQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsVUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxPQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFVBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsWUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxNQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFlBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsU0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxrQkFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxRQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGdCQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFNBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsVUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxTQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFVBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsb0JBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsU0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxTQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFNBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsT0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxnQkFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxTQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLE9BQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsVUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxTQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLE1BQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsNkJBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsaUNBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsZUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxRQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLE9BQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsc0RBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsU0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxTQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGVBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsVUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxPQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFdBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsV0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxRQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFFBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsWUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxtQkFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxRQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLDhDQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFdBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsTUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxlQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFFBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsV0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxtQ0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxVQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFNBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsT0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxTQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFdBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsU0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxRQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGFBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsT0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxnQ0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxNQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLDJCQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFNBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsT0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxRQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFNBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsUUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxPQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLE9BQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsWUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxVQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFVBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsU0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSx1QkFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSx3Q0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxvQkFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxRQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGdCQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFlBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsa0NBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsU0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxhQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGVBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsV0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxTQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFNBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsV0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxZQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFFBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsT0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxTQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFFBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsc0JBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsWUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSw0QkFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxZQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGtCQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLDRDQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLE1BQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsU0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxVQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLE9BQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsMEJBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsWUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxZQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFlBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsT0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxXQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFVBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsUUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxRQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFVBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsWUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxTQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGVBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsT0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxnQkFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxTQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFdBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsYUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxRQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLE9BQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsT0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxNQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGFBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsTUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxRQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLE1BQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsa0JBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsa0JBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsYUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxVQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFFBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsMkJBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsVUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxhQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLHFCQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFVBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsT0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxVQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLE9BQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsU0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxTQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFFBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsb0JBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsUUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxjQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGlCQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFlBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsT0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxRQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFdBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsOENBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsVUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSx3QkFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxVQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGNBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsWUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxTQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFNBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsVUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxhQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLHVCQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGFBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsMkJBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsc0JBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsV0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSwwQkFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxNQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLDZCQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLE1BQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsVUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxZQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFNBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsYUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxjQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFNBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsT0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxRQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLHFCQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFFBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsMkJBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsOEJBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsU0FBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxRQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLHNDQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLDBCQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFNBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsWUFBQTtJQUFBMlcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBM1csSUFBQUEsRUFBQSxVQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLGtDQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLG1DQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLHlCQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLHNCQUFBO0lBQUEyVyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEzVyxJQUFBQSxFQUFBLFVBQUE7SUFBQTJXLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTNXLElBQUFBLEVBQUEsU0FBQTtJQUFBMlcsSUFBQUEs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Q0FBQSxDQUFBLEVBRUEzaUIsTUFBQUEsQ0FBQWlqQixLQUFBQSxHQUFBLENBQUFMLE1BQUFBLEVBQUFLLEtBQUFBLEtBQUFBO0lBQ0FMLE1BQUFBLENBQUFLLEtBQUFBLEdBQUFBLEtBQUE7RUFBQSxDQUFBO0VBR0EsTUFBQUQsZ0JBQUFBLEdBQUEzakIsSUFBQUEsSUFBQUksQ0FBQUEsQ0FBQWtpQixPQUFBQSxDQUFBM2hCLE1BQUFBLENBQUEyaUIsT0FBQUEsQ0FBQWpoQixNQUFBQSxDQUFBa2hCLE1BQUFBLElBQUF2akIsSUFBQUEsS0FBQXVqQixNQUFBQSxDQUFBdmpCLElBQUFBLENBQUFBLENBQUFpRyxHQUFBQSxDQUFBc2QsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQXZqQixJQUFBQSxDQUFBQSxDQUFBQSxDQUFBdEcsS0FBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxDQUFBO0VBRUFpSCxNQUFBQSxDQUFBa2pCLFFBQUFBLEdBQUEsTUFBQSxHQUFBbGpCLE1BQUFBLENBQUEyaUIsT0FBQUEsQ0FBQWpoQixNQUFBQSxDQUFBa2hCLE1BQUFBLElBQUFBLE1BQUFBLENBQUF2akIsSUFBQUEsS0FBQXVqQixNQUFBQSxDQUFBSyxLQUFBQSxDQUFBQSxDQUFBOXBCLE1BQUFBLElBQUE2RyxNQUFBQSxDQUFBMmlCLE9BQUFBLENBQUF4cEIsTUFBQUEsRUFBQUEsRUFFQTZHLE1BQUFBLENBQUFtakIsY0FBQUEsR0FBQSxNQUFBbmpCLE1BQUFBLENBQUEyaUIsT0FBQUEsQ0FBQWpoQixNQUFBQSxDQUFBa2hCLE1BQUFBLElBQUFBLE1BQUFBLENBQUFLLEtBQUFBLENBQUFBLENBQUE5cEIsTUFBQUEsS0FBQTZHLE1BQUFBLENBQUEyaUIsT0FBQUEsQ0FBQXhwQixNQUNBO0FBQUEsQ0FBQSxDQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAgPSBbXHJcbiAge1xyXG4gICAgYmFzZTogXCJBXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDFcXHUyNEI2XFx1RkYyMVxcdTAwQzBcXHUwMEMxXFx1MDBDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHUwMEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHUwMEM0XFx1MDFERVxcdTFFQTJcXHUwMEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFBXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFFXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwQzZcXHUwMUZDXFx1MDFFMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQU9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOFxcdUE3M0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0MlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJDXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDNcXHUyNEI4XFx1RkYyM1xcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMEM3XFx1MUUwOFxcdTAxODdcXHUwMjNCXFx1QTczRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ0XFx1MjRCOVxcdUZGMjRcXHUxRTBBXFx1MDEwRVxcdTFFMENcXHUxRTEwXFx1MUUxMlxcdTFFMEVcXHUwMTEwXFx1MDE4QlxcdTAxOEFcXHUwMTg5XFx1QTc3OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMVxcdTAxQzRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjJcXHUwMUM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJFXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDVcXHUyNEJBXFx1RkYyNVxcdTAwQzhcXHUwMEM5XFx1MDBDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHUwMENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ2XFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0N1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJIXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJJXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDlcXHUyNEJFXFx1RkYyOVxcdTAwQ0NcXHUwMENEXFx1MDBDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHUwMENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJKXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEFcXHUyNEJGXFx1RkYyQVxcdTAxMzRcXHUwMjQ4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJLXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNENcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTEpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDREXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRFXFx1MjRDM1xcdUZGMkVcXHUwMUY4XFx1MDE0M1xcdTAwRDFcXHUxRTQ0XFx1MDE0N1xcdTFFNDZcXHUwMTQ1XFx1MUU0QVxcdTFFNDhcXHUwMjIwXFx1MDE5RFxcdUE3OTBcXHVBN0E0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNEZcXHUyNEM0XFx1RkYyRlxcdTAwRDJcXHUwMEQzXFx1MDBENFxcdTFFRDJcXHUxRUQwXFx1MUVENlxcdTFFRDRcXHUwMEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx1MDBENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHUwMEQ4XFx1MDFGRVxcdTAxODZcXHUwMTlGXFx1QTc0QVxcdUE3NENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9JXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9PXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NEVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9VXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAyMjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlBcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1MFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUxXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlJcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1MlxcdTI0QzdcXHVGRjMyXFx1MDE1NFxcdTFFNThcXHUwMTU4XFx1MDIxMFxcdTAyMTJcXHUxRTVBXFx1MUU1Q1xcdTAxNTZcXHUxRTVFXFx1MDI0Q1xcdTJDNjRcXHVBNzVBXFx1QTdBNlxcdUE3ODJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlNcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1M1xcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJUWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJVXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTVcXHUyNENBXFx1RkYzNVxcdTAwRDlcXHUwMERBXFx1MDBEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx1MDBEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIldcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1N1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU4XFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU5XFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx1MDBERFxcdTAxNzZcXHUxRUY4XFx1MDIzMlxcdTFFOEVcXHUwMTc4XFx1MUVGNlxcdTFFRjRcXHUwMUIzXFx1MDI0RVxcdTFFRkVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1QVxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2MVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxcdTAwRTBcXHUwMEUxXFx1MDBFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHUwMEUzXFx1MDEwMVxcdTAxMDNcXHUxRUIxXFx1MUVBRlxcdTFFQjVcXHUxRUIzXFx1MDIyN1xcdTAxRTFcXHUwMEU0XFx1MDFERlxcdTFFQTNcXHUwMEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFhXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFlXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwRTZcXHUwMUZEXFx1MDFFM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYW9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOVxcdUE3M0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0RdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2MlxcdTI0RDFcXHVGRjQyXFx1MUUwM1xcdTFFMDVcXHUxRTA3XFx1MDE4MFxcdTAxODNcXHUwMjUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJjXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjNcXHUyNEQyXFx1RkY0M1xcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHUwMEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjNcXHUwMUM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJlXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjVcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJnXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjdcXHUyNEQ2XFx1RkY0N1xcdTAxRjVcXHUwMTFEXFx1MUUyMVxcdTAxMUZcXHUwMTIxXFx1MDFFN1xcdTAxMjNcXHUwMUU1XFx1MDI2MFxcdUE3QTFcXHUxRDc5XFx1QTc3Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY4XFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImh2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxOTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImlcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2OVxcdTI0RDhcXHVGRjQ5XFx1MDBFQ1xcdTAwRURcXHUwMEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx1MDBFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QVxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJrXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkJcXHUyNERBXFx1RkY0QlxcdTFFMzFcXHUwMUU5XFx1MUUzM1xcdTAxMzdcXHUxRTM1XFx1MDE5OVxcdTJDNkFcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBN0EzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJsXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkNcXHUyNERCXFx1RkY0Q1xcdTAxNDBcXHUwMTNBXFx1MDEzRVxcdTFFMzdcXHUxRTM5XFx1MDEzQ1xcdTFFM0RcXHUxRTNCXFx1MDE3RlxcdTAxNDJcXHUwMTlBXFx1MDI2QlxcdTJDNjFcXHVBNzQ5XFx1QTc4MVxcdUE3NDddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm1cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2RFxcdTI0RENcXHVGRjREXFx1MUUzRlxcdTFFNDFcXHUxRTQzXFx1MDI3MVxcdTAyNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RVxcdTI0RERcXHVGRjRFXFx1MDFGOVxcdTAxNDRcXHUwMEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RlxcdTI0REVcXHVGRjRGXFx1MDBGMlxcdTAwRjNcXHUwMEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxcdTAwRjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHUwMEY2XFx1MDIyQlxcdTFFQ0ZcXHUwMTUxXFx1MDFEMlxcdTAyMERcXHUwMjBGXFx1MDFBMVxcdTFFRERcXHUxRURCXFx1MUVFMVxcdTFFREZcXHUxRUUzXFx1MUVDRFxcdTFFRDlcXHUwMUVCXFx1MDFFRFxcdTAwRjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib2lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib3VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib29cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwicFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDcwXFx1MjRERlxcdUZGNTBcXHUxRTU1XFx1MUU1N1xcdTAxQTVcXHUxRDdEXFx1QTc1MVxcdUE3NTNcXHVBNzU1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJxXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiclwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDcyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwic1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDczXFx1MjRFMlxcdUZGNTNcXHUwMERGXFx1MDE1QlxcdTFFNjVcXHUwMTVEXFx1MUU2MVxcdTAxNjFcXHUxRTY3XFx1MUU2M1xcdTFFNjlcXHUwMjE5XFx1MDE1RlxcdTAyM0ZcXHVBN0E5XFx1QTc4NVxcdTFFOUJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTcyOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDc1XFx1MjRFNFxcdUZGNTVcXHUwMEY5XFx1MDBGQVxcdTAwRkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxcdTAwRkNcXHUwMURDXFx1MDFEOFxcdTAxRDZcXHUwMURBXFx1MUVFN1xcdTAxNkZcXHUwMTcxXFx1MDFENFxcdTAyMTVcXHUwMjE3XFx1MDFCMFxcdTFFRUJcXHUxRUU5XFx1MUVFRlxcdTFFRURcXHUxRUYxXFx1MUVFNVxcdTFFNzNcXHUwMTczXFx1MUU3N1xcdTFFNzVcXHUwMjg5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2eVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzYxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ3XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzdcXHUyNEU2XFx1RkY1N1xcdTFFODFcXHUxRTgzXFx1MDE3NVxcdTFFODdcXHUxRTg1XFx1MUU5OFxcdTFFODlcXHUyQzczXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ4XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzhcXHUyNEU3XFx1RkY1OFxcdTFFOEJcXHUxRThEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzlcXHUyNEU4XFx1RkY1OVxcdTFFRjNcXHUwMEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxcdTAwRkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3QVxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjNdL2csXHJcbiAgfSxcclxuXTtcclxudmFyIGRvbWFpbnMgPSBbXHJcbiAgXCIuY29tXCIsXHJcbiAgXCIub3JnXCIsXHJcbiAgXCIubmV0XCIsXHJcbiAgXCIuYWNcIixcclxuICBcIi5hZFwiLFxyXG4gIFwiLmFlXCIsXHJcbiAgXCIuYWZcIixcclxuICBcIi5hZ1wiLFxyXG4gIFwiLmFpXCIsXHJcbiAgXCIuYWxcIixcclxuICBcIi5hbVwiLFxyXG4gIFwiLmFvXCIsXHJcbiAgXCIuYXFcIixcclxuICBcIi5hclwiLFxyXG4gIFwiLmFzXCIsXHJcbiAgXCIuYXRcIixcclxuICBcIi5hdVwiLFxyXG4gIFwiLmF3XCIsXHJcbiAgXCIuYXhcIixcclxuICBcIi5helwiLFxyXG4gIFwiLmJhXCIsXHJcbiAgXCIuYmJcIixcclxuICBcIi5iZFwiLFxyXG4gIFwiLmJlXCIsXHJcbiAgXCIuYmZcIixcclxuICBcIi5iZ1wiLFxyXG4gIFwiLmJoXCIsXHJcbiAgXCIuYmlcIixcclxuICBcIi5ialwiLFxyXG4gIFwiLmJtXCIsXHJcbiAgXCIuYm5cIixcclxuICBcIi5ib1wiLFxyXG4gIFwiLmJxXCIsXHJcbiAgXCIuYnJcIixcclxuICBcIi5ic1wiLFxyXG4gIFwiLmJ0XCIsXHJcbiAgXCIuYndcIixcclxuICBcIi5ieVwiLFxyXG4gIFwiLmJ6XCIsXHJcbiAgXCIuY2FcIixcclxuICBcIi5jY1wiLFxyXG4gIFwiLmNkXCIsXHJcbiAgXCIuY2ZcIixcclxuICBcIi5jZ1wiLFxyXG4gIFwiLmNoXCIsXHJcbiAgXCIuY2lcIixcclxuICBcIi5ja1wiLFxyXG4gIFwiLmNsXCIsXHJcbiAgXCIuY21cIixcclxuICBcIi5jblwiLFxyXG4gIFwiLmNvXCIsXHJcbiAgXCIuY3JcIixcclxuICBcIi5jdVwiLFxyXG4gIFwiLmN2XCIsXHJcbiAgXCIuY3dcIixcclxuICBcIi5jeFwiLFxyXG4gIFwiLmN5XCIsXHJcbiAgXCIuY3pcIixcclxuICBcIi5kZVwiLFxyXG4gIFwiLmRqXCIsXHJcbiAgXCIuZGtcIixcclxuICBcIi5kbVwiLFxyXG4gIFwiLmRvXCIsXHJcbiAgXCIuZHpcIixcclxuICBcIi5lY1wiLFxyXG4gIFwiLmVlXCIsXHJcbiAgXCIuZWdcIixcclxuICBcIi5laFwiLFxyXG4gIFwiLmVyXCIsXHJcbiAgXCIuZXNcIixcclxuICBcIi5ldFwiLFxyXG4gIFwiLmV1XCIsXHJcbiAgXCIuZmlcIixcclxuICBcIi5malwiLFxyXG4gIFwiLmZrXCIsXHJcbiAgXCIuZm1cIixcclxuICBcIi5mb1wiLFxyXG4gIFwiLmZyXCIsXHJcbiAgXCIuZ2FcIixcclxuICBcIi5nZFwiLFxyXG4gIFwiLmdlXCIsXHJcbiAgXCIuZ2ZcIixcclxuICBcIi5nZ1wiLFxyXG4gIFwiLmdoXCIsXHJcbiAgXCIuZ2lcIixcclxuICBcIi5nbFwiLFxyXG4gIFwiLmdtXCIsXHJcbiAgXCIuZ25cIixcclxuICBcIi5ncFwiLFxyXG4gIFwiLmdxXCIsXHJcbiAgXCIuZ3JcIixcclxuICBcIi5nc1wiLFxyXG4gIFwiLmd0XCIsXHJcbiAgXCIuZ3VcIixcclxuICBcIi5nd1wiLFxyXG4gIFwiLmd5XCIsXHJcbiAgXCIuaGtcIixcclxuICBcIi5obVwiLFxyXG4gIFwiLmhuXCIsXHJcbiAgXCIuaHJcIixcclxuICBcIi5odFwiLFxyXG4gIFwiLmh1XCIsXHJcbiAgXCIuaWRcIixcclxuICBcIi5pZVwiLFxyXG4gIFwiLmlsXCIsXHJcbiAgXCIuaW1cIixcclxuICBcIi5pblwiLFxyXG4gIFwiLmlvXCIsXHJcbiAgXCIuaXFcIixcclxuICBcIi5pclwiLFxyXG4gIFwiLmlzXCIsXHJcbiAgXCIuaXRcIixcclxuICBcIi5qZVwiLFxyXG4gIFwiLmptXCIsXHJcbiAgXCIuam9cIixcclxuICBcIi5qcFwiLFxyXG4gIFwiLmtlXCIsXHJcbiAgXCIua2dcIixcclxuICBcIi5raFwiLFxyXG4gIFwiLmtpXCIsXHJcbiAgXCIua21cIixcclxuICBcIi5rblwiLFxyXG4gIFwiLmtwXCIsXHJcbiAgXCIua3JcIixcclxuICBcIi5rd1wiLFxyXG4gIFwiLmt5XCIsXHJcbiAgXCIua3pcIixcclxuICBcIi5sYVwiLFxyXG4gIFwiLmxiXCIsXHJcbiAgXCIubGNcIixcclxuICBcIi5saVwiLFxyXG4gIFwiLmxrXCIsXHJcbiAgXCIubHJcIixcclxuICBcIi5sc1wiLFxyXG4gIFwiLmx0XCIsXHJcbiAgXCIubHVcIixcclxuICBcIi5sdlwiLFxyXG4gIFwiLmx5XCIsXHJcbiAgXCIubWFcIixcclxuICBcIi5tY1wiLFxyXG4gIFwiLm1kXCIsXHJcbiAgXCIubWVcIixcclxuICBcIi5tZ1wiLFxyXG4gIFwiLm1oXCIsXHJcbiAgXCIubWtcIixcclxuICBcIi5tbFwiLFxyXG4gIFwiLm1tXCIsXHJcbiAgXCIubW5cIixcclxuICBcIi5tb1wiLFxyXG4gIFwiLm1wXCIsXHJcbiAgXCIubXFcIixcclxuICBcIi5tclwiLFxyXG4gIFwiLm1zXCIsXHJcbiAgXCIubXRcIixcclxuICBcIi5tdVwiLFxyXG4gIFwiLm12XCIsXHJcbiAgXCIubXdcIixcclxuICBcIi5teFwiLFxyXG4gIFwiLm15XCIsXHJcbiAgXCIubXpcIixcclxuICBcIi5uYVwiLFxyXG4gIFwiLm5jXCIsXHJcbiAgXCIubmVcIixcclxuICBcIi5uZlwiLFxyXG4gIFwiLm5nXCIsXHJcbiAgXCIubmlcIixcclxuICBcIi5ubFwiLFxyXG4gIFwiLm5vXCIsXHJcbiAgXCIubnBcIixcclxuICBcIi5uclwiLFxyXG4gIFwiLm51XCIsXHJcbiAgXCIubnpcIixcclxuICBcIi5vbVwiLFxyXG4gIFwiLnBhXCIsXHJcbiAgXCIucGVcIixcclxuICBcIi5wZlwiLFxyXG4gIFwiLnBnXCIsXHJcbiAgXCIucGhcIixcclxuICBcIi5wa1wiLFxyXG4gIFwiLnBsXCIsXHJcbiAgXCIucG1cIixcclxuICBcIi5wblwiLFxyXG4gIFwiLnByXCIsXHJcbiAgXCIucHNcIixcclxuICBcIi5wdFwiLFxyXG4gIFwiLnB3XCIsXHJcbiAgXCIucHlcIixcclxuICBcIi5xYVwiLFxyXG4gIFwiLnJlXCIsXHJcbiAgXCIucm9cIixcclxuICBcIi5yc1wiLFxyXG4gIFwiLnJ1XCIsXHJcbiAgXCIucndcIixcclxuICBcIi5zYVwiLFxyXG4gIFwiLnNiXCIsXHJcbiAgXCIuc2NcIixcclxuICBcIi5zZFwiLFxyXG4gIFwiLnNlXCIsXHJcbiAgXCIuc2dcIixcclxuICBcIi5zaFwiLFxyXG4gIFwiLnNpXCIsXHJcbiAgXCIuc2tcIixcclxuICBcIi5zbFwiLFxyXG4gIFwiLnNtXCIsXHJcbiAgXCIuc25cIixcclxuICBcIi5zb1wiLFxyXG4gIFwiLnNyXCIsXHJcbiAgXCIuc3NcIixcclxuICBcIi5zdFwiLFxyXG4gIFwiLnN1XCIsXHJcbiAgXCIuc3ZcIixcclxuICBcIi5zeFwiLFxyXG4gIFwiLnN5XCIsXHJcbiAgXCIuc3pcIixcclxuICBcIi50Y1wiLFxyXG4gIFwiLnRkXCIsXHJcbiAgXCIudGZcIixcclxuICBcIi50Z1wiLFxyXG4gIFwiLnRoXCIsXHJcbiAgXCIudGpcIixcclxuICBcIi50a1wiLFxyXG4gIFwiLnRsXCIsXHJcbiAgXCIudG1cIixcclxuICBcIi50blwiLFxyXG4gIFwiLnRvXCIsXHJcbiAgXCIudHJcIixcclxuICBcIi50dFwiLFxyXG4gIFwiLnR2XCIsXHJcbiAgXCIudHdcIixcclxuICBcIi50elwiLFxyXG4gIFwiLnVhXCIsXHJcbiAgXCIudWdcIixcclxuICBcIi51a1wiLFxyXG4gIFwiLnVzXCIsXHJcbiAgXCIudXlcIixcclxuICBcIi51elwiLFxyXG4gIFwiLnZhXCIsXHJcbiAgXCIudmNcIixcclxuICBcIi52ZVwiLFxyXG4gIFwiLnZnXCIsXHJcbiAgXCIudmlcIixcclxuICBcIi52blwiLFxyXG4gIFwiLnZ1XCIsXHJcbiAgXCIud2ZcIixcclxuICBcIi53c1wiLFxyXG4gIFwiLnllXCIsXHJcbiAgXCIueXRcIixcclxuICBcIi56YVwiLFxyXG4gIFwiLnptXCIsXHJcbiAgXCIuendcIixcclxuXTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZURpYWNyaXRpY3NcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwLnJlZHVjZSgocmVzdWx0LCBsZXR0ZXIpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKGxldHRlci5sZXR0ZXJzLCBsZXR0ZXIuYmFzZSk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IFNQRUNJQUxfQ0hBUkFDVEVSUyA9IFwiXFxcXFxcXFwvICE/QCMkJV4mKigpXys6Lnt9LDtcXFxcLSdgYOKAmeKAmFxcXCJcIjtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbJHtTUEVDSUFMX0NIQVJBQ1RFUlN9XWAsIFwiZ2lcIiksIFwiXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlQWxsQnV0TGV0dGVyc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlKCkucmVtb3ZlRGlhY3JpdGljcygpLnJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzKCk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjb25jZWFsXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGV4dHJhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFteJHtTUEVDSUFMX0NIQVJBQ1RFUlN9JHtleHRyYX1dYCwgXCJnaVwiKSwgXCLigY5cIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjYXBpdGFsaXplXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnNsaWNlKDEpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlSFRNTFwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoXCI+XCIsIFwiXFx1MjI3QlwiKS5yZXBsYWNlKFwiPFwiLCBcIlxcdTIyN0FcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJhbmdsZUJyYWNrZXRzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShcIjxcIiwgXCImbHQ7XCIpLnJlcGxhY2UoXCI+XCIsIFwiJmd0O1wiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlcGxhY2VBcnJheVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChmaW5kLCByZXBsYWNlKSB7XHJcbiAgICB2YXIgcmVwbGFjZVN0cmluZyA9IHRoaXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcmVwbGFjZVN0cmluZyA9IHJlcGxhY2VTdHJpbmcucmVwbGFjZShmaW5kW2ldLCByZXBsYWNlW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXBsYWNlU3RyaW5nO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwibWFza1VSTHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlQXJyYXkoW1wiaHR0cHM6Ly9cIiwgXCJodHRwOi8vXCJdLCBcIm5vcGU6Ly9cIikucmVwbGFjZUFycmF5KGRvbWFpbnMsIFwiLm5vcGVcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJtYWtlUmVhZGFibGVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VQZXJjZW50YWdlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGRlY2ltYWxzKSB7XHJcbiAgICBpZiAoIWRlY2ltYWxzKSBkZWNpbWFscyA9IDI7XHJcbiAgICByZXR1cm4gYCR7KHRoaXMgKiAxMDApLnRvRml4ZWQoZGVjaW1hbHMpfSVgO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc29ydE9iamVjdCA9IChvYmosIGRpcmVjdGlvbikgPT4ge1xyXG4gIGxldCBhcnIgPSBbXTtcclxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgIGFyci5wdXNoKFtrZXksIG9ialtrZXldXSk7XHJcbiAgfVxyXG4gIGFyci5zb3J0KChhLCBiKSA9PiAoZGlyZWN0aW9uID8gYVsxXSAtIGJbMV0gOiBiWzFdIC0gYVsxXSkpO1xyXG4gIGxldCBvYmpTb3J0ZWQgPSB7fTtcclxuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4gKG9ialNvcnRlZFtpdGVtWzBdXSA9IGl0ZW1bMV0pKTtcclxuICAvL2Fyci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgYS52YWx1ZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi52YWx1ZS50b0xvd2VyQ2FzZSgpKTsgfSk7IC8vdXNlIHRoaXMgdG8gc29ydCBhcyBzdHJpbmdzXHJcbiAgcmV0dXJuIG9ialNvcnRlZDsgLy8gcmV0dXJucyBhcnJheVxyXG59O1xyXG4iLCIvKlxyXG4kID0galF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbnZhciBib290c3RyYXAgPSByZXF1aXJlKCdib290c3RyYXAnKTtcclxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XHJcbnZhciBhbmd1bGFyU2FuaXRpemUgPSByZXF1aXJlKCdhbmd1bGFyLXNhbml0aXplJyk7XHJcbnZhciBhbmd1bGFyQW5pbWF0ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItYW5pbWF0ZScpO1xyXG4qL1xyXG5hbmd1bGFyLm1vZHVsZShcImFwcFwiLCBbXHJcbiAgXCJ1aS5yb3V0ZXJcIixcclxuICBcInVpLmJvb3RzdHJhcFwiLFxyXG4gIFwibmdBbmltYXRlXCIsXHJcbiAgXCJuZ1Nhbml0aXplXCIsXHJcbiAgXCJuZ0RyYWdEcm9wXCIsXHJcbiAgXCJuZ1RhZ3NJbnB1dFwiLFxyXG4gIFwidmNSZWNhcHRjaGFcIixcclxuICBcImNoYXJ0LmpzXCIsXHJcbiAgXCJ0Yy5jaGFydGpzXCIsXHJcbiAgXCJpbmZpbml0ZS1zY3JvbGxcIixcclxuXSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJHVybFNlcnZpY2VQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcclxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwiL2hvbWVcIik7XHJcbiAgJHVybFNlcnZpY2VQcm92aWRlci5jb25maWcuc3RyaWN0TW9kZShmYWxzZSk7XHJcblxyXG4gICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAuc3RhdGUoXCJob21lXCIsIHtcclxuICAgICAgdXJsOiBcIi9ob21lXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9ob21lLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwb2xpY3lcIiwge1xyXG4gICAgICB1cmw6IFwiL3BvbGljeVwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcG9saWN5Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwcmludFwiLCB7XHJcbiAgICAgIHVybDogXCIvcHJpbnRcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3ByaW50Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJleHBlcmllbmNlXCIsIHtcclxuICAgICAgdXJsOiBcIi9leHBlcmllbmNlXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiRXhwZXJpZW5jZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2V4cGVyaWVuY2UuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInNraWxsc1wiLCB7XHJcbiAgICAgIHVybDogXCIvc2tpbGxzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiU2tpbGxzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvc2tpbGxzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJob2JiaWVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9ob2JiaWVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiSG9iYmllc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2hvYmJpZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImNvbnRhY3RcIiwge1xyXG4gICAgICB1cmw6IFwiL2NvbnRhY3RcIixcclxuICAgICAgY29udHJvbGxlcjogXCJDb250YWN0Q3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvY29udGFjdC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwid29ya291dFwiLCB7XHJcbiAgICAgIHVybDogXCIvd29ya291dFwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIldvcmtvdXRDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi93b3Jrb3V0Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwb3N0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvcG9zdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJQb3N0c0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3Bvc3RzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwcm9maWxlXCIsIHtcclxuICAgICAgdXJsOiBcIi9wcm9maWxlXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUHJvZmlsZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3Byb2ZpbGUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImxpc3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9saXN0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkxpc3RzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJsaXN0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicHJpb3JpdGl6ZVwiLCB7XHJcbiAgICAgIHVybDogXCIvcHJpb3JpdGl6ZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlByaW9yaXRpemVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInByaW9yaXRpemUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImJ1YmJsZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2J1YmJsZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJCdWJibGVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJidWJibGVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJhc3Rlcm9pZHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2FzdGVyb2lkc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkFzdGVyb2lkc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiYXN0ZXJvaWRzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJsZW1taW5nc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbGVtbWluZ3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJMZW1taW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwibGVtbWluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImJvdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2JvdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLWFkbWluXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3MtYWRtaW5cIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NBZG1pbkN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLWFkbWluLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3Mtb2xkXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3Mtb2xkXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzT2xkQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3Mtb2xkLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3MtZ2FtZVwiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLzpnYW1lXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzR2FtZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLWdhbWUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotZ29vZ2xlXCIsIHtcclxuICAgICAgdXJsOiBcIi9nb29nbGVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6R29vZ2xlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL2dvb2dsZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1sb2dvc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbG9nb3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6TG9nb3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvbG9nb3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotYW5pbWFsc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYW5pbWFsc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpBbmltYWxzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL2FuaW1hbHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotc2tlbGV0b25zXCIsIHtcclxuICAgICAgdXJsOiBcIi9za2VsZXRvbnNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6U2tlbGV0b25zQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL3NrZWxldG9ucy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1tb3ZpZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL21vdmllc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpNb3ZpZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvbW92aWVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJjaGFyYWRlc1wiLCB7XHJcbiAgICAgIHVybDogXCIvY2hhcmFkZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJDaGFyYWRlc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2NoYXJhZGVzLmh0bWxcIixcclxuICAgIH0pO1xyXG5cclxuICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoe1xyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIHJlcXVpcmVCYXNlOiBmYWxzZSxcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnV2ViU29ja2V0U3ZjJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICR0aW1lb3V0KSB7XHJcbiAgZnVuY3Rpb24gd2Vic29ja2V0SG9zdCgpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonKSB7XHJcbiAgICAgIHJldHVybiBcIndzczovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJ3czovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgY29ubmVjdGlvbjtcclxuICB2YXIgY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KHdlYnNvY2tldEhvc3QoKSk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY29ubmVjdGVkJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY2xvc2VkLiBSZWNvbm5lY3RpbmcuLi4nKTtcclxuICAgICAgJHRpbWVvdXQoY29ubmVjdCwgMTAwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlICsgXCIgLSBTdGF0ZTogXCIgKyBjb25uZWN0aW9uLnJlYWR5U3RhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBwYXlsb2FkID0gSlNPTi5wYXJzZShlLmRhdGEpO1xyXG4gICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3dzOicgKyBwYXlsb2FkLnRvcGljLCBwYXlsb2FkLmRhdGEpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICB0aGlzLnNlbmQgPSBmdW5jdGlvbiAodG9waWMsIGRhdGEpIHtcclxuICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoe3RvcGljOiB0b3BpYywgZGF0YTogZGF0YX0pO1xyXG4gICAgY29ubmVjdGlvbi5zZW5kKGpzb24pO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuY29ubmVjdCA9IGNvbm5lY3Q7XHJcblxyXG59KS5ydW4oZnVuY3Rpb24gKFdlYlNvY2tldFN2Yykge1xyXG4gIFdlYlNvY2tldFN2Yy5jb25uZWN0KCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5kaXJlY3RpdmUoXCJjbGlja091dHNpZGVcIiwgZnVuY3Rpb24gKCRkb2N1bWVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICByZXN0cmljdDogXCJBXCIsXHJcbiAgICBzY29wZToge1xyXG4gICAgICBjbGlja091dHNpZGU6IFwiJlwiLFxyXG4gICAgfSxcclxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgJGRvY3VtZW50Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZWwgIT09IGUudGFyZ2V0ICYmICFlbFswXS5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vc2NvcGUuJHBhcmVudC5zZXRTZWxlY3RlZExpc3QoKTtcclxuICAgICAgICAgICAgc2NvcGUuJGV2YWwoc2NvcGUuY2xpY2tPdXRzaWRlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuXHQuZGlyZWN0aXZlKCdoZWFkJywgW1xyXG5cdFx0JyRyb290U2NvcGUnLFxyXG5cdFx0JyRzdGF0ZScsXHJcblx0XHQnJGNvbXBpbGUnLFxyXG5cdFx0JyRpbnRlcnBvbGF0ZScsXHJcblx0XHRmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkY29tcGlsZSwgJGludGVycG9sYXRlKSB7XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGUgPSBmdW5jdGlvbiBnZXRTdHlsZSh0ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdHlsZSA9IHtcclxuXHRcdFx0XHRcdGhyZWY6IHRlbXBsYXRlU3R5bGVVcmwsXHJcblx0XHRcdFx0XHRyZWw6ICdzdHlsZXNoZWV0J1xyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmIChzdHlsZS5ocmVmLm1hdGNoKC9cXC5sZXNzJC8pKSB7XHJcblx0XHRcdFx0XHRzdHlsZS5yZWwgPSAnc3R5bGVzaGVldC9sZXNzJztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBzdHlsZTtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gZ2V0U3R5bGVzKHN0YXRlKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdGF0ZXMgPSB7fTtcclxuXHJcblx0XHRcdFx0Ly9DaGVjayBzdGF0ZSBmb3Igc3R5bGVzXHJcblx0XHRcdFx0d2hpbGUgKHN0YXRlLm5hbWUgIT09ICcnKSB7XHJcblx0XHRcdFx0XHR2YXIgcGFyZW50ID0gJHN0YXRlLmdldCgnXicsIHN0YXRlKTtcclxuXHJcblx0XHRcdFx0XHQvL0luaXRpYXRlIG91ciB2aWV3IGxpc3RcclxuXHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXSkge1xyXG5cdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdID0ge307XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB0aGUgdGVtcGxhdGVTdHlsZVxyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSkge1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1bJyddID0gZ2V0U3R5bGUoc3RhdGUudGVtcGxhdGVTdHlsZVVybCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NoZWNrIHZpZXdzXHJcblx0XHRcdFx0XHRpZiAoc3RhdGUudmlld3MpIHtcclxuXHRcdFx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlLnZpZXdzLCBmdW5jdGlvbiAodmlldywga2V5KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgaGF2ZSBhIHN0eWxlXHJcblx0XHRcdFx0XHRcdFx0aWYgKCF2aWV3LnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgYXJlIHRhcmdldGluZyBzb21lIHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdGlmICgoa2V5ID0ga2V5LnNwbGl0KCdAJykpWzFdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgc3R5bGVzIGZvciB0aGF0IHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXSA9IHt9O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIHNvbWUgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXVtrZXlbMF1dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlc1trZXlbMV1dW2tleVswXV0gPSBnZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIG91ciBwYXJlbnQncyB2aWV3XHJcblx0XHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ29udGludWUgd2l0aCB0aGUgcGFyZW50XHJcblx0XHRcdFx0XHRzdGF0ZSA9IHBhcmVudDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vRmxhdHRlbiB0aGUgbGlzdFxyXG5cdFx0XHRcdHZhciBmbGF0ID0gW107XHJcblx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlcywgZnVuY3Rpb24gKHZpZXdzKSB7XHJcblxyXG5cdFx0XHRcdFx0Xy5mb3JFYWNoKHZpZXdzLCBmdW5jdGlvbiAoc3R5bGUpIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghXy5pbmNsdWRlcyhmbGF0LCBzdHlsZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRmbGF0LnB1c2goc3R5bGUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvL1JldmVyc2UgaXQgc28gd2UgaGF2ZSBhIHByb3BlciBoaWVyYXJjaHlcclxuXHRcdFx0XHRmbGF0LnJldmVyc2UoKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGZsYXQ7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0XHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSkge1xyXG5cclxuXHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gW107XHJcblxyXG5cdFx0XHRcdFx0dmFyIGh0bWwgPSAnPGxpbmsgbmctYXR0ci1yZWw9XCJ7e3N0eWxlLnJlbH19XCIgbmctcmVwZWF0PVwic3R5bGUgaW4gdGVtcGxhdGVTdHlsZXNcIiBuZy1ocmVmPVwie3tzdHlsZS5ocmVmfX1cIj4nO1xyXG5cclxuXHRcdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xce1xcey9nLCAkaW50ZXJwb2xhdGUuc3RhcnRTeW1ib2woKSk7XHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXH1cXH0vZywgJGludGVycG9sYXRlLmVuZFN5bWJvbCgpKTtcclxuXHJcblx0XHRcdFx0XHRlbGVtLmFwcGVuZCgkY29tcGlsZShodG1sKShzY29wZSkpO1xyXG5cclxuXHRcdFx0XHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykge1xyXG5cclxuXHRcdFx0XHRcdFx0c2NvcGUudGVtcGxhdGVTdHlsZXMgPSBnZXRTdHlsZXModG9TdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHR9XHJcblx0XSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJBcHBDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIExhbmd1YWdlU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIiVjWW91IHNuZWFreSBidWdnZXIhXCIsXHJcbiAgICBcImZvbnQ6IDJlbSBzYW5zLXNlcmlmOyBjb2xvcjogRG9kZ2VyQmx1ZTsgdGV4dC1zaGFkb3c6IDJweCAwIDAgIzQ0NCwgLTJweCAwIDAgIzQ0NCwgMCAycHggMCAjNDQ0LCAwIC0ycHggMCAjNDQ0LCAxcHggMXB4ICM0NDQsIC0xcHggLTFweCAwICM0NDQsIDFweCAtMXB4IDAgIzQ0NCwgLTFweCAxcHggMCAjNDQ0O1wiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIkknbSBnbGFkIHlvdSdyZSBjdXJpb3VzIHdoZXRoZXIgc29tZXRoaW5nIGlzIHBvcHBpbmcgdXAgaW4gaGVyZS4gSSdtIGEgYml0IG9mIGEgc3RpY2tsZXIgd2hlbiBpdCBjb21lcyB0byBtZXNzYWdlcyBpbiB0aGUgY29uc29sZSBzbyBJIHRyeSB0byBtYWtlIHN1cmUgb25seSB0aGluZ3MgSSB3YW50IGFyZSB2aXNpYmxlLiBUaGF0IGJlaW5nIHNhaWQsIGlmIHRoZXJlIGlzIGEgYmlnIGVycm9yIGhlcmUsIEkgd291bGQgcmVhbGx5IGFwcHJlY2lhdGUgeW91IHRlbGxpbmcgbWUgc28gSSBjYW4gZ2V0IHJpZCBvZiBpdCFcIixcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCJUaGUgY29kZSBmb3IgbXkgcmVzdW1lIGlzIGhvc3RlZCBvbiBHaXRodWIgaWYgeW91IHJlYWxseSB3YW50IHRvIGdvIGludG8gYWxsIHRoaXMhID0+IGh0dHBzOi8vZ2l0aHViLmNvbS9GbGFuZGVyc0J1cmdlci9yZXN1bWVcIixcclxuICApO1xyXG5cclxuICAvKlxyXG4gICAgJChkb2N1bWVudCkuYmluZChcImtleXVwIGtleWRvd25cIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGlmKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT0gODApe1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgICovXHJcblxyXG4gICQod2luZG93KS5sb2FkKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICQoXCIuY29udGVudFwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLmNoZWNrYm94LW1lbnVcIikub24oXCJjaGFuZ2VcIiwgXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuY2xvc2VzdChcImxpXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIsIHRoaXMuY2hlY2tlZCk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuYWxsb3ctZm9jdXNcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS50aGVtZUNvdW50ZXIgPSA2O1xyXG4gICRzY29wZS50b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgJHNjb3BlLnllYXIgPSAkc2NvcGUudG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAkc2NvcGUucmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XHJcblxyXG4gICRzY29wZS5mbGlwVGhlbWUgPSAoKSA9PiB7XHJcbiAgICAkKFwiLmxvYWRpbmdcIikuc2hvdygpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmhpZGUoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLmxvYWRpbmdcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAgICQoXCIuY29udGVudFwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gICAgfSwgODAwKTtcclxuICAgICRzY29wZS50aGVtZUNvdW50ZXIgPSAkc2NvcGUudGhlbWVDb3VudGVyIDwgNiA/ICRzY29wZS50aGVtZUNvdW50ZXIgKyAxIDogKCRzY29wZS50aGVtZUNvdW50ZXIgPSAxKTtcclxuICB9O1xyXG5cclxuICAkLmdldEpTT04oXCIvc2tpbGxzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5za2lsbHMgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIHNraWxsLmVuYWJsZWQ7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2hvYmJpZXMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmhvYmJpZXMgPSBkYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvZXhwZXJpZW5jZS5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuam9icyA9IGRhdGE7XHJcbiAgICAkc2NvcGUuam9icy5mb3JFYWNoKChqb2IpID0+IHtcclxuICAgICAgam9iLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGpvYi5zdGFydERhdGUpO1xyXG4gICAgICBpZiAoam9iLmVuZERhdGUpIGpvYi5lbmREYXRlID0gbmV3IERhdGUoam9iLmVuZERhdGUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9jaGFyYWRlcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuY2hhcmFkZXMgPSBkYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZ2V0VGltZVNwYW4gPSAoam9iKSA9PiB7XHJcbiAgICByZXR1cm4gam9iLnN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpICsgKGpvYi5lbmREYXRlID8gXCIgLSBcIiArIGpvYi5lbmREYXRlLmdldEZ1bGxZZWFyKCkgOiBcIiAtIFRvZGF5XCIpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5sYW5ndWFnZXMgPSBMYW5ndWFnZVN2Yy5sYW5ndWFnZXM7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdExhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IExhbmd1YWdlU3ZjLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuaG92ZXJkaXYgPSAoZSwgZGl2aWQpID0+IHtcclxuICAgIHZhciBsZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xyXG4gICAgdmFyIHRvcCA9IGUuY2xpZW50WSArIDIwICsgXCJweFwiO1xyXG5cclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZpZCk7XHJcblxyXG4gICAgJChcIiNcIiArIGRpdmlkKS5jc3MoXCJsZWZ0XCIsIGxlZnQpO1xyXG4gICAgJChcIiNcIiArIGRpdmlkKS5jc3MoXCJ0b3BcIiwgdG9wKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLnRvZ2dsZSgpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpIHtcclxuICAgIFVzZXJTdmMubG9naW4od2luZG93LmxvY2FsU3RvcmFnZS51c2VyKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBsb2dpbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICBsb2dpbih1c2VyKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xyXG4gICAgaWYgKCEkc2NvcGUubG9nZ2VkSW4pIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS51c2VyID0gdXNlci5faWQ7XHJcbiAgICAgICRzY29wZS5sb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAgICRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUgPSBuZXcgRGF0ZSgkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlKTtcclxuICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dpblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuJG9uKFwidXBkYXRlXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUpO1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKFwibG9hZGluZ1wiLCAoXywgdXNlcikgPT4ge1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgJChcIiNsb2FkaW5nLWljb25cIikuc2hvdygpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKFwibG9hZGVkXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5sb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBmaXJlYmFzZVxyXG4gICAgICAuYXV0aCgpXHJcbiAgICAgIC5zaWduT3V0KClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXHJcbiAgICAgICAgJHNjb3BlLmxvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICRzY29wZS4kYnJvYWRjYXN0KFwibG9nb3V0XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5mb3JtYXREYXRlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IG1vbnRocyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIHJldHVybiBkYXRlLmdldERhdGUoKSArIFwiLVwiICsgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0gKyBcIi1cIiArIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkFzdGVyb2lkc0N0cmxcIiwgZnVuY3Rpb24gKCRsb2NhdGlvbiwgJHNjb3BlLCBHYW1lU3ZjKSB7XHJcbiAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhc3Rlcm9pZHMtcGFnZVwiKTtcclxuICBpZiAoIWNhbnZhcykge1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoXCIvaG9tZVwiKTtcclxuICAgIHJldHVybiBhbGVydChcIlwiKTtcclxuICB9XHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICBjdHguZm9udCA9IFwiMzBweCBDb21pYyBTYW5zIE1TXCI7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY29uc3Qgc2hvdHMgPSB7fTtcclxuICBjb25zdCBhc3Rlcm9pZHMgPSB7fTtcclxuICBjb25zdCBwb3dlcnVwcyA9IHt9O1xyXG4gIGNvbnN0IGV4cGxvc2lvbnMgPSB7fTtcclxuICBjb25zdCBtYXAgPSB7fTtcclxuICBjb25zdCBzcGFjZXBpY3MgPSAxMDtcclxuICBjb25zdCBzcGFjZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwYWNlcGljcyk7XHJcbiAgY29uc3QgcG93ZXJ1cFR5cGVzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInNwZWVkXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJNYXggU3BlZWQg4oenXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICAgIHNpemU6IFsxNCwgMzVdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5tYXhTcGVlZCArPSAxMDA7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImNvb2xkb3duXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJDb29sZG93biDih6lcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDMsXHJcbiAgICAgICAgc2l6ZTogWzE3LCAxN10sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5jb29sZG93blRpbWUgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInJhbmdlXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJGaXJpbmcgUmFuZ2Ug4oenXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogNCxcclxuICAgICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICAgIHNpemU6IFszMCwgOF0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnJhbmdlICs9IDU7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInNoaWVsZFwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiU2hpZWxkXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogNSxcclxuICAgICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICAgIHNpemU6IFsxOSwgMTldLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5zaGllbGQgPSB0cnVlO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJudWtlXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJOdWtlXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICAgIHNpemU6IFsxNSwgMTVdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgICAgICBhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgICAgfSxcclxuICAgIH0gLypcclxuICAgICdzaWRlX2Nhbm5vbnMnLFxyXG4gICAgJ2xhc2VyJyxcclxuICAgICdzaGllbGQnLFxyXG4gICAgJ2xpZmUnLFxyXG4gICAgJ21pc3NpbGVzJyxcclxuICAgICdudWtlJ1xyXG4gICAgKi8sXHJcbiAgXTtcclxuICBwb3dlcnVwVHlwZXMuZm9yRWFjaChmdW5jdGlvbiAocG93ZXJ1cCwgaSwgYXJyYXkpIHtcclxuICAgIGFycmF5W2ldLmltZy5zcmMgPSBcImFzdGVyb2lkcy9cIiArIHBvd2VydXAubmFtZSArIFwiLnBuZ1wiO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgZXhwbG9zaW9uSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBleHBsb3Npb25JbWFnZS5zcmMgPSBcImFzdGVyb2lkcy9leHBsb3Npb24ucG5nXCI7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJrZXlkb3duXCIsXHJcbiAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBtYXBbZS5rZXlDb2RlIHx8IGUud2hpY2hdID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICB0cnVlLFxyXG4gICk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImtleXVwXCIsXHJcbiAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBtYXBbZS5rZXlDb2RlIHx8IGUud2hpY2hdID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdHJ1ZSxcclxuICApO1xyXG5cclxuICAkc2NvcGUuaGlnaHNjb3JlID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gZXZhbHVhdGVLZXlzKCkge1xyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgLy9TcGFjZVxyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zaG9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM3XSkge1xyXG4gICAgICAgIC8vTGVmdCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiA9IDM2MDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uIC09IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzldKSB7XHJcbiAgICAgICAgLy9SaWdodCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDM2MCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uICs9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzhdKSB7XHJcbiAgICAgICAgLy9VcCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPD0gc3BhY2VzaGlwLm1heFNwZWVkKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgKz0gNTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzQwXSkge1xyXG4gICAgICAgIC8vRG93biBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgLT0gMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgc3RhcnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU3BhY2VzaGlwKCkge1xyXG4gICAgdGhpcy53aWR0aCA9IDUwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSA1MDtcclxuICAgIHRoaXMuc2hpZWxkID0gZmFsc2U7XHJcbiAgICB0aGlzLnJhbmdlID0gODA7XHJcbiAgICB0aGlzLmNhbm5vbiA9IHtcclxuICAgICAgeDogdGhpcy53aWR0aCAvIDIgLSA0LjUsXHJcbiAgICAgIHk6IHRoaXMuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0ICogMC4wNzgxMjUsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb29sZG93biA9IDA7XHJcbiAgICB0aGlzLmNvb2xkb3duVGltZSA9IDIwO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtjYW52YXMud2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgLyAyXTtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBcImFzdGVyb2lkcy9zcGFjZXNoaXAucG5nXCI7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMubWF4U3BlZWQgPSAxMDAwO1xyXG4gICAgdGhpcy5hbmdsZSA9IDA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuXHJcbiAgICB0aGlzLnNob290ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmNvb2xkb3duID0gdGhpcy5jb29sZG93blRpbWU7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIHNob3RzW2lkXSA9IG5ldyBTaG90KGlkLCB0aGlzKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodGhpcy5zaGllbGQpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmFyYyh0aGlzLnBvc2l0aW9uWzBdICsgdGhpcy53aWR0aCAvIDIsIHRoaXMucG9zaXRpb25bMV0gKyB0aGlzLmhlaWdodCAvIDIsIDMwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDM1LCAyMzcsIDg2LCAwLjUpXCI7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2IoNjYsIDE2OCwgMzYsIDAuOClcIjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICAgIHZhciBhc3Rlcm9pZCA9IGFzdGVyb2lkc1tpXTtcclxuICAgICAgICBpZiAoaGl0KGFzdGVyb2lkLCB0aGlzKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2hpZWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpZWxkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGFzdGVyb2lkLmV4cGxvZGUoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnYW1lT3ZlcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFuZ2xlID0gdGhpcy5yb3RhdGlvbjtcclxuICAgICAgaWYgKHRoaXMuY29vbGRvd24gPiAwKSB7XHJcbiAgICAgICAgdGhpcy5jb29sZG93bi0tO1xyXG4gICAgICB9XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU2hvdChpZCwgc3BhY2VzaGlwKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW1xyXG4gICAgICBzcGFjZXNoaXAucG9zaXRpb25bMF0gK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueCArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi54ICogTWF0aC5jb3MoKChzcGFjZXNoaXAucm90YXRpb24gLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCksXHJcbiAgICAgIHNwYWNlc2hpcC5wb3NpdGlvblsxXSArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi55ICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnkgKiBNYXRoLnNpbigoKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKSxcclxuICAgIF07XHJcbiAgICB0aGlzLndpZHRoID0gOTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMTU7XHJcbiAgICB0aGlzLmFuZ2xlID0gc3BhY2VzaGlwLmFuZ2xlO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IHNwYWNlc2hpcC5yb3RhdGlvbjtcclxuICAgIHRoaXMuc3BlZWQgPSBzcGFjZXNoaXAuc3BlZWQgKyA1MDA7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gc3BhY2VzaGlwLnJhbmdlO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL3Nob3QucG5nXCI7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQXN0ZXJvaWQoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMud2lkdGggPSBNYXRoLnJhbmRvbSgpICogNTAgKyAyMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy53aWR0aDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSBNYXRoLnJhbmRvbSgpICogNiAtIDM7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDMwMCArIDI7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvYXN0ZXJvaWRcIiArIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA2KSArIDEpICsgXCIucG5nXCI7XHJcblxyXG4gICAgdGhpcy5leHBsb2RlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBleHBsb3Npb25zW3RoaXMuaWRdID0gbmV3IEV4cGxvc2lvbih0aGlzKTtcclxuICAgICAgcmV0dXJuIGRlbGV0ZSBhc3Rlcm9pZHNbdGhpcy5pZF07XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XHJcbiAgICAgIGlmICh0aGlzLnJvdGF0aW9uID4gMzYwKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMucm90YXRpb24gLSAzNjA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5yb3RhdGlvbiA8IDApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMzYwICsgdGhpcy5yb3RhdGlvbjtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgICAgdmFyIHNob3QgPSBzaG90c1tpXTtcclxuICAgICAgICBpZiAoaGl0KHNob3QsIHRoaXMpKSB7XHJcbiAgICAgICAgICB0aGlzLmV4cGxvZGUoKTtcclxuICAgICAgICAgIHZhciBwb2ludHMgPSBNYXRoLmZsb29yKChzaG90LnNwZWVkIC0gNTAwKSAvIDEwICsgNzAgLSB0aGlzLndpZHRoKTtcclxuICAgICAgICAgIGlmIChNYXRoLmZsb29yKChwb2ludHMgKyAkc2NvcGUuc2NvcmUpIC8gMTAwKSA+IE1hdGguZmxvb3IoJHNjb3BlLnNjb3JlIC8gMTAwKSkge1xyXG4gICAgICAgICAgICBzcGF3blBvd2VydXAoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICRzY29wZS5zY29yZSArPSBwb2ludHM7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRXhwbG9zaW9uKG9iamVjdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtvYmplY3QucG9zaXRpb25bMF0sIG9iamVjdC5wb3NpdGlvblsxXV07XHJcbiAgICB0aGlzLndpZHRoID0gb2JqZWN0LndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvYmplY3QuaGVpZ2h0O1xyXG4gICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMuY3ljbGUgPSB7XHJcbiAgICAgIHJvd3M6IDYsXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHNpemU6IFsyNTYsIDI1Nl0sXHJcbiAgICAgIGk6IDAsXHJcbiAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgIH07XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gNDc7XHJcbiAgICB0aGlzLmltZyA9IGV4cGxvc2lvbkltYWdlO1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAodGhpcy5jeWNsZS5kaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmN5Y2xlLmkrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN5Y2xlLmktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFBvd2VydXAoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucG93ZXJ1cCA9IHBvd2VydXBUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3dlcnVwVHlwZXMubGVuZ3RoKV07XHJcbiAgICB0aGlzLmN5Y2xlID0gdGhpcy5wb3dlcnVwLmN5Y2xlO1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDEwMDA7XHJcbiAgICBpZiAodGhpcy5jeWNsZS5zaXplWzFdID4gdGhpcy5jeWNsZS5zaXplWzBdKSB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gNDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSBNYXRoLnJvdW5kKCh0aGlzLmhlaWdodCAvIHRoaXMuY3ljbGUuc2l6ZVsxXSkgKiB0aGlzLmN5Y2xlLnNpemVbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53aWR0aCA9IDQwO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IE1hdGgucm91bmQoKHRoaXMud2lkdGggLyB0aGlzLmN5Y2xlLnNpemVbMF0pICogdGhpcy5jeWNsZS5zaXplWzFdKTtcclxuICAgIH1cclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuaW1nID0gdGhpcy5wb3dlcnVwLmltZztcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAxNTAgKyA1MDtcclxuICAgIHZhciBkZWxheSA9IDU7XHJcbiAgICB0aGlzLm1vdmUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gZGVsZXRlIHBvd2VydXBzW3RoaXMuaWRdO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChoaXQoc3BhY2VzaGlwLCB0aGlzKSkge1xyXG4gICAgICAgICRzY29wZS5hbm5vdW5jZSA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLmFubm91bmNlbWVudCA9IHRoaXMucG93ZXJ1cC5hbm5vdW5jZW1lbnQ7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgdGhpcy5wb3dlcnVwLmFjdGl2YXRlKHNwYWNlc2hpcCk7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBwb3dlcnVwc1t0aGlzLmlkXTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICAgIGlmIChkZWxheSA8PSAwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLmkrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGF5ID0gNTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWxheS0tO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZShvYmplY3QpIHtcclxuICAgIG9iamVjdC5wb3NpdGlvblswXSArPSAob2JqZWN0LnNwZWVkIC8gMTAwKSAqIE1hdGguY29zKCgob2JqZWN0LmFuZ2xlIC0gOTApICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgb2JqZWN0LnBvc2l0aW9uWzFdICs9IChvYmplY3Quc3BlZWQgLyAxMDApICogTWF0aC5zaW4oKChvYmplY3QuYW5nbGUgLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBpZiAob2JqZWN0LnBvc2l0aW9uWzBdID4gY2FudmFzLndpZHRoKSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IC1vYmplY3Qud2lkdGg7XHJcbiAgICB9IGVsc2UgaWYgKG9iamVjdC5wb3NpdGlvblswXSA8IC1vYmplY3Qud2lkdGgpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzBdID0gY2FudmFzLndpZHRoO1xyXG4gICAgfVxyXG4gICAgaWYgKG9iamVjdC5wb3NpdGlvblsxXSA+IGNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzFdID0gLW9iamVjdC5oZWlnaHQ7XHJcbiAgICB9IGVsc2UgaWYgKG9iamVjdC5wb3NpdGlvblsxXSA8IC1vYmplY3QuaGVpZ2h0KSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblsxXSA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShvYmplY3QucG9zaXRpb25bMF0sIG9iamVjdC5wb3NpdGlvblsxXSk7XHJcbiAgICBjdHgudHJhbnNsYXRlKG9iamVjdC53aWR0aCAvIDIsIG9iamVjdC5oZWlnaHQgLyAyKTtcclxuICAgIGN0eC5yb3RhdGUoKG9iamVjdC5yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIGlmIChvYmplY3QuY3ljbGUpIHtcclxuICAgICAgdmFyIGNvbHVtbiA9IG9iamVjdC5jeWNsZS5pICUgb2JqZWN0LmN5Y2xlLmNvbHVtbnM7XHJcbiAgICAgIHZhciByb3cgPSBNYXRoLmZsb29yKG9iamVjdC5jeWNsZS5pIC8gb2JqZWN0LmN5Y2xlLmNvbHVtbnMpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICAgIG9iamVjdC5pbWcsXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMF0gKiBjb2x1bW4sXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMV0gKiByb3csXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMF0sXHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLnNpemVbMV0sXHJcbiAgICAgICAgLW9iamVjdC53aWR0aCAvIDIsXHJcbiAgICAgICAgLW9iamVjdC5oZWlnaHQgLyAyLFxyXG4gICAgICAgIG9iamVjdC53aWR0aCxcclxuICAgICAgICBvYmplY3QuaGVpZ2h0LFxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKG9iamVjdC5jeWNsZS5pIDw9IDApIHtcclxuICAgICAgICBvYmplY3QuY3ljbGUuaSA9IDA7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAob2JqZWN0LmN5Y2xlLmkgPj0gb2JqZWN0LmN5Y2xlLmNvbHVtbnMgKiBvYmplY3QuY3ljbGUucm93cykge1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5pID0gb2JqZWN0LmN5Y2xlLmNvbHVtbnMgKiBvYmplY3QuY3ljbGUucm93cyAtIDE7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdHguZHJhd0ltYWdlKG9iamVjdC5pbWcsIC1vYmplY3Qud2lkdGggLyAyLCAtb2JqZWN0LmhlaWdodCAvIDIsIG9iamVjdC53aWR0aCwgb2JqZWN0LmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHNwYWNlc2hpcDtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAkc2NvcGUucGxheWluZyA9IHRydWU7XHJcbiAgICAkc2NvcGUuc2NvcmUgPSAwO1xyXG4gICAgc3BhY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFjZXBpY3MpO1xyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgc3BhY2VzaGlwID0gbmV3IFNwYWNlc2hpcCgpO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYXduQXN0ZXJvaWRzKDUpO1xyXG4gICAgYXV0b1NwYXduKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRFbnRyeVBvc2l0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBncmlkWCA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIGdyaWRZID0gTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICB2YXIgeCxcclxuICAgICAgeSA9IDA7XHJcbiAgICBpZiAoZ3JpZFggPj0gMSkge1xyXG4gICAgICB4ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgaWYgKHkgPj0gMSkge1xyXG4gICAgICAgIHkgPSAwIC0gaGVpZ2h0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHkgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIGlmIChncmlkWSA+PSAxKSB7XHJcbiAgICAgICAgeCA9IDAgLSB3aWR0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB4ID0gY2FudmFzLndpZHRoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3gsIHldO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGl0KG9iamVjdDEsIG9iamVjdDIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIG9iamVjdDEucG9zaXRpb25bMF0gPCBvYmplY3QyLnBvc2l0aW9uWzBdICsgb2JqZWN0Mi53aWR0aCAmJlxyXG4gICAgICBvYmplY3QyLnBvc2l0aW9uWzBdIDwgb2JqZWN0MS5wb3NpdGlvblswXSArIG9iamVjdDEud2lkdGggJiZcclxuICAgICAgb2JqZWN0MS5wb3NpdGlvblsxXSA8IG9iamVjdDIucG9zaXRpb25bMV0gKyBvYmplY3QyLmhlaWdodCAmJlxyXG4gICAgICBvYmplY3QyLnBvc2l0aW9uWzFdIDwgb2JqZWN0MS5wb3NpdGlvblsxXSArIG9iamVjdDEuaGVpZ2h0XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXV0b1NwYXduKCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGFzdGVyb2lkcykubGVuZ3RoIDwgMjAwKSB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIGFzdGVyb2lkc1tpZF0gPSBuZXcgQXN0ZXJvaWQoaWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGF1dG9TcGF3bigpO1xyXG4gICAgICB9LCBzcGF3bkludGVydmFsKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25JbnRlcnZhbCgpIHtcclxuICAgIGlmICgkc2NvcGUuc2NvcmUgPCAxMDAwKSB7XHJcbiAgICAgIHJldHVybiAxMDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCAyMDAwKSB7XHJcbiAgICAgIHJldHVybiA5MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDMwMDApIHtcclxuICAgICAgcmV0dXJuIDgwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNDAwMCkge1xyXG4gICAgICByZXR1cm4gNzAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA1MDAwKSB7XHJcbiAgICAgIHJldHVybiA2MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDYwMDApIHtcclxuICAgICAgcmV0dXJuIDUwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNzAwMCkge1xyXG4gICAgICByZXR1cm4gNDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA4MDAwKSB7XHJcbiAgICAgIHJldHVybiAzMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25Bc3Rlcm9pZHMoYW1vdW50KSB7XHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICBkbyB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIGFzdGVyb2lkc1tpZF0gPSBuZXcgQXN0ZXJvaWQoaWQpO1xyXG4gICAgfSB3aGlsZSAoaSsrIDw9IGFtb3VudCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3blBvd2VydXAoKSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMocG93ZXJ1cHMpLmxlbmd0aCA8IDMpIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgcG93ZXJ1cHNbaWRdID0gbmV3IFBvd2VydXAoaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XHJcbiAgICAkc2NvcGUucGxheWluZyA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgIH1cclxuICAgIHNob3RzID0ge307XHJcbiAgICBpZiAoJHNjb3BlLmxvZ2dlZEluKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuaGlnaHNjb3JlLmFzdGVyb2lkcyA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzID0gJHNjb3BlLnNjb3JlO1xyXG4gICAgICAgIEdhbWVTdmMuc2V0SGlnaHNjb3JlKFwiYXN0ZXJvaWRzXCIsICRzY29wZS5jdXJyZW50VXNlci5faWQsICRzY29wZS5zY29yZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaHNjb3JlIDwgJHNjb3BlLnNjb3JlKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hzY29yZSA9ICRzY29wZS5zY29yZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU3RhcnQgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgYW5kXHJcbiAgLy8gZHJhdyBjYW52YXMuXHJcblxyXG4gIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgICAvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG4gICAgLy8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcbiAgICAvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcbiAgICAvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG4gICAgcmVzaXplQ2FudmFzKCk7XHJcbiAgfVxyXG4gIC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuICAvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuICAvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogMTA1KTtcclxuICB9XHJcblxyXG4gIGluaXRpYWxpemUoKTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcblxyXG4gIHZhciB0YWxseSA9IDA7XHJcbiAgdmFyIGRpcmVjdGlvbiA9IHRydWU7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgIGlmIChzaG90c1tpXS5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIHNob3RzW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3RzW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIHBvd2VydXBzKSB7XHJcbiAgICAgIHBvd2VydXBzW2ldLm1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBleHBsb3Npb25zKSB7XHJcbiAgICAgIGlmIChleHBsb3Npb25zW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgZXhwbG9zaW9uc1tpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBleHBsb3Npb25zW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZhbHVhdGVLZXlzKCk7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgc3BhY2VzaGlwLm1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBjYW52YXMud2lkdGgsIDApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwXCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMC4yNVwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjAuNVwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjAuNzVcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIxLjBcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICAgIGN0eC5mb250ID0gXCI2MHB4IE1vbm90b25cIjtcclxuICAgICAgY3R4LmZpbGxUZXh0KFwiQXN0ZXJvaWRzXCIsIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoXCJBc3Rlcm9pZHNcIikud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGN0eC5mb250ID0gXCIyMHB4IEFsZHJpY2hcIjtcclxuICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgIFwiUHJlc3Mgc3BhY2UgdG8gc3RhcnRcIixcclxuICAgICAgICBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KFwiUHJlc3Mgc3BhY2UgdG8gc3RhcnRcIikud2lkdGggLyAyLFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgLyAyICsgMjAsXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICBcIkRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlclwiLFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoXCJEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5IExhdXJlbnQgRGViYWNrZXJcIikud2lkdGggLyAyLFxyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgLSAzMCxcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHRhbGx5ICs9IGRpcmVjdGlvbiA/IDEgOiAtMTtcclxuICAgIGlmICh0YWxseSA+IDEwMCkge1xyXG4gICAgICB0YWxseSA9IDEwMDtcclxuICAgICAgZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHRhbGx5IDwgMCkge1xyXG4gICAgICB0YWxseSA9IDA7XHJcbiAgICAgIGRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuc3BhY2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJhc3Rlcm9pZHMvc3BhY2UnICsgc3BhY2UgKyAnLmpwZ1wiKScsXHJcbiAgICB9O1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0J1YmJsZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZXMtcGFnZScpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB2YXIgYnViYmxlcyA9IFtdO1xyXG4gIHZhciBjb2xvcnMgPSBbJyNmZmMzMDAnLCcjZmY1NzMzJywnI2M3MDAzOScsJyM5MDBjM2UnLCcjNTcxODQ1J107XHJcblxyXG4gIGZ1bmN0aW9uIEJ1YmJsZSgpIHtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAwO1xyXG4gICAgdGhpcy5yYWRpdXMgPSAxO1xyXG4gICAgdGhpcy5leHBhbmRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgdGhpcy5jaXJjdW1mZXJlbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNTApICsgNTtcclxuICAgIHRoaXMubWF4UmFkaXVzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjAwKSArIDIwO1xyXG4gICAgdGhpcy54ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoKTtcclxuICAgIHRoaXMueSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGhpcy52eCA9IChNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSk7XHJcbiAgICB0aGlzLnZ5ID0gKE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBidWJibGVzLmZvckVhY2goZnVuY3Rpb24oYnViYmxlKSB7XHJcbiAgICAgIHZhciBjb2xvciA9IGNvbG9yc1tNYXRoLnJvdW5kKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMoYnViYmxlLngsIGJ1YmJsZS55LCBidWJibGUucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbTWF0aC5yb3VuZChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3JzW2NvbG9ycy5sZW5ndGggLSBNYXRoLnJvdW5kKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gYnViYmxlLmNpcmN1bWZlcmVuY2UgKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cztcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWx0ZXJCdWJibGVzKCkge1xyXG4gICAgYnViYmxlcy5wdXNoKG5ldyBCdWJibGUoKSk7XHJcbiAgICBidWJibGVzID0gYnViYmxlcy5maWx0ZXIoZnVuY3Rpb24gKGJ1YmJsZSkge1xyXG4gICAgICBpZiAoYnViYmxlLnJhZGl1cyA9PT0gYnViYmxlLm1heFJhZGl1cykge1xyXG4gICAgICAgIGJ1YmJsZS5leHBhbmRpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBidWJibGUueCArPSBidWJibGUudnggKiBidWJibGUuc3BlZWQ7XHJcbiAgICAgIGJ1YmJsZS55ICs9IGJ1YmJsZS52eSAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnJhZGl1cyArPSAoYnViYmxlLmV4cGFuZGluZyA/IDEgOiAtMSk7XHJcbiAgICAgIHJldHVybiBidWJibGUucmFkaXVzID4gMDtcclxuICAgIH0pO1xyXG4gICAgZHJhdygpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG5cclxuXHJcblx0KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG5cdFx0Ly8gZHJhdyBjYW52YXMuXHJcblx0XHRpbml0aWFsaXplKCk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHRcdC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuXHRcdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0XHR9XHJcblx0XHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0XHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHRcdC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG5cdFx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG5cdFx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdFx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTUgOiAxMTEpO1xyXG5cdFx0fVxyXG5cclxuXHR9KSgpO1xyXG5cclxuXHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkNoYXJhZGVzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgJHNjb3BlLnNlbGVjdFdvcmQgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICRzY29wZS53b3JkID0gJHNjb3BlLmNoYXJhZGVzW2NhdGVnb3J5XVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldLmxlbmd0aCldO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQ29udGFjdEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRW1haWxTdmMpIHtcclxuICAkc2NvcGUub3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTcGFtXCIsXHJcbiAgICAgIHRleHQ6IFwiSSBhbSBhIHNwYW0gYm90IGFuZCBhdXRvbWF0aWNhbGx5IGNoZWNrIHRoZSBmaXJzdCBvcHRpb24gSSBmaW5kIVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPcHBvcnR1bml0eVwiLFxyXG4gICAgICB0ZXh0OiBcIllvdSBzZWVtIHRvIGhhdmUgdGhlIHNraWxscyBJIHNlZWssIEknZCBsaWtlIHRvIHRhbGsgYWJvdXQgc29tZSBvcHBvcnR1bml0aWVzLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZXN1bWVcIixcclxuICAgICAgdGV4dDogXCJJIGRpZyB0aGUgcmVzdW1lLCBob3cgZGlkIHlvdSBtYWtlIGl0P1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPdGhlclwiLFxyXG4gICAgICB0ZXh0OiBcIlN1bXRpbiBlbHNlIVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICAkc2NvcGUuY29udGFjdCA9IHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gICAgYWJvdXQ6IFwiXCIsXHJcbiAgICBtZXNzYWdlOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnNlbmRpbmcgPSB0cnVlO1xyXG4gICAgRW1haWxTdmMuc2VuZCh7XHJcbiAgICAgIGVtYWlsOiAkc2NvcGUuY29udGFjdC5lbWFpbCxcclxuICAgICAgbmFtZTogJHNjb3BlLmNvbnRhY3QubmFtZSxcclxuICAgICAgcGhvbmU6ICRzY29wZS5jb250YWN0LnBob25lLFxyXG4gICAgICBhYm91dDogJHNjb3BlLmNvbnRhY3QuYWJvdXQsXHJcbiAgICAgIG1lc3NhZ2U6ICRzY29wZS5jb250YWN0Lm1lc3NhZ2UsXHJcbiAgICB9KS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuc2VudCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTLiBzdGF0dXM9JWQsIHRleHQ9JXNcIiwgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS50ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAkc2NvcGUuc2VuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRkFJTEVELiBlcnJvcj1cIiwgZXJyKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignRXhwZXJpZW5jZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICRzY29wZS5nZXRTa2lsbCA9IGZ1bmN0aW9uKHNraWxsQ29kZSkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2tpbGxzKSByZXR1cm47XHJcbiAgICByZXR1cm4gJHNjb3BlLnNraWxscy5maW5kKGZ1bmN0aW9uKHNraWxsKSB7XHJcbiAgICAgIHJldHVybiBza2lsbC5jb2RlID09PSBza2lsbENvZGU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignSG9iYmllc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAkLmdldEpTT04oJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vdXNlci9iZWxnb2NhbmFkaWFuL2Fib3V0Ly5qc29uJywgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRIb2JieSA9ICRzY29wZS5ob2JiaWVzWzBdO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0SG9iYnkgPSBmdW5jdGlvbiAoaG9iYnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gaG9iYnk7XHJcbiAgICAkc2NvcGUuaG9iYnlTZWxlY3RvclZpc2libGUgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd0hvYmJ5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpIHtcclxuICAgIGlmICghdmFsdWUuaW1hZ2VzKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdmFsdWUuaW1hZ2VzLmxlbmd0aCA+IDA7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignTGVtbWluZ3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgR2FtZVN2Yykge1xyXG5cclxuICB2YXIgTEVGVCA9IDA7XHJcbiAgdmFyIFJJR0hUID0gMTtcclxuXHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZW1taW5ncy1wYWdlJyk7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIHZhciBsZW1taW5nc0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgbGVtbWluZ3NJbWFnZS5zcmMgPSAnbGVtbWluZ3MvbGVtbWluZ3MucG5nJztcclxuICB2YXIgZGVjb3JJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGRlY29ySW1hZ2Uuc3JjID0gJ2xlbW1pbmdzL2RlY29yLnBuZyc7XHJcbiAgdmFyIGxlbW1pbmdzID0ge307XHJcbiAgdmFyIHN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgdmFyIGFjdGlvbnMgPSB7XHJcbiAgICB3YWxrOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMF0sXHJcbiAgICAgIGVuZDogWzMyMCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGh1aDoge1xyXG4gICAgICBzdGFydDogWzMyMCwgMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZmFsbDoge1xyXG4gICAgICBzdGFydDogWzAsIDgwXSxcclxuICAgICAgZW5kOiBbMTYwLCAxMDBdLFxyXG4gICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGZseToge1xyXG4gICAgICBzdGFydDogWzE2MCwgODBdLFxyXG4gICAgICBlbmQ6IFs0ODAsIDExMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc3RvcDoge1xyXG4gICAgICBzdGFydDogWzAsIDEyMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTQwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgY2xpbWI6IHtcclxuICAgICAgc3RhcnQ6IFswLCAxNjBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDE4NV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMjVdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwdW5jaDoge1xyXG4gICAgICBzdGFydDogWzAsIDI0MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMzAwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZGlnOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMzIwXSxcclxuICAgICAgZW5kOiBbMzIwLCAzNDVdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBMZW1taW5nKGluaXQpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNhbnZhcy53aWR0aCAtIDIwMCkpICsgMTAwLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLmhlaWdodCAtIDIwMCkpICsgMTAwXTtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSAqIDIgPiAxID8gTEVGVCA6IFJJR0hUO1xyXG4gICAgdGhpcy5hY3QgPSBmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb25zW2FjdGlvbl07XHJcbiAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gKDIwICogKHRoaXMuYWN0aW9uLnJvd3MgLSAxKSkpIC8gdGhpcy5hY3Rpb24ucm93cztcclxuICAgICAgdGhpcy5hbmltYXRpb24gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuYWN0KGluaXQpO1xyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSwgdGhpcy5wb3NpdGlvblsxXSk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gTEVGVCkge1xyXG4gICAgICAgIGN0eC5zY2FsZSgtMSwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UobGVtbWluZ3NJbWFnZSwgKHRoaXMud2lkdGggKiBjb2x1bW4pICsgdGhpcy5hY3Rpb24uc3RhcnRbMF0sICgodGhpcy5oZWlnaHQgKyAyMCkgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgaWYgKHRoaXMuYWN0aW9uLnJldmVyc2UpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlLS07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICF0aGlzLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICBpZiAodGhpcy5jeWNsZSA+PSB0aGlzLmFjdGlvbi5jb2x1bW5zICogdGhpcy5hY3Rpb24ucm93cykge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGF0Y2goKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gWzIwLCAyMF07XHJcbiAgICB0aGlzLmFjdGlvbiA9IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbODIsIDUwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgIHJvd3M6IDEwXHJcbiAgICB9XHJcbiAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICB0aGlzLmhlaWdodCA9ICh0aGlzLmFjdGlvbi5lbmRbMV0gLSB0aGlzLmFjdGlvbi5zdGFydFsxXSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICB0aGlzLm9wZW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgdmFyIGNvbHVtbiwgcm93O1xyXG4gICAgICBpZiAoc3RhcnRlZCkge1xyXG4gICAgICAgIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3IodGhpcy5jeWNsZSAvIHRoaXMuYWN0aW9uLmNvbHVtbnMpO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgOSkge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb2x1bW4gPSAwO1xyXG4gICAgICAgIHJvdyA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgY3R4LmRyYXdJbWFnZShkZWNvckltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKHRoaXMuaGVpZ2h0ICogcm93KSArIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gMSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25MZW1taW5nKCkge1xyXG4gICAgT2JqZWN0LmtleXMoYWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgbGVtbWluZ3NbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKV0gPSBuZXcgTGVtbWluZyhhY3Rpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdHJlc2l6ZUNhbnZhcygpO1xyXG5cdH1cclxuXHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0Ly8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcblx0Ly8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcblx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG5cdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1MCA6IDEwNSk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbiAgc3Bhd25MZW1taW5nKCk7XHJcbiAgbGV0IGhhdGNoID0gbmV3IEhhdGNoKClcclxuICBkcmF3KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBpZiAoIXN0YXJ0ZWQpIHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguZm9udD0nNDBweCBNb25vdG9uJztcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9ICcxMCc7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcclxuICAgICAgY3R4LnJlY3QoMTUsIGNhbnZhcy5oZWlnaHQgLSA0NSwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLndpZHRoICsgMjAsIGN0eC5tZWFzdXJlVGV4dCgnU3RhcnQnKS5oZWlnaHQgKyBjYW52YXMuaGVpZ2h0IC0gNDUpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ1N0YXJ0JywgMjAsIGNhbnZhcy5oZWlnaHQgLSA1MCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKHZhciBpIGluIGxlbW1pbmdzKSB7XHJcbiAgICAgICAgbGVtbWluZ3NbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYXRjaC5vcGVuKCk7XHJcbiAgICBzdGFydGVkID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGRyYXcoKTtcclxuICAgIH0sIDE1MCk7XHJcbiAgfVxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMaXN0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIENhdGVnb3JpZXNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IHRydWU7XHJcblxyXG4gICRzY29wZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5nZXRDYXRlZ29yaWVzKClcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICRzY29wZS50YXNrcyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpIGluICRzY29wZS5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaiBpbiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrcykge1xyXG4gICAgICAgICAgJHNjb3BlLnRhc2tzLnB1c2goe1xyXG4gICAgICAgICAgICBcImNhdGVnb3J5XCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUsXHJcbiAgICAgICAgICAgIFwidGFza1wiOiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrc1tqXS5uYW1lXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RDYXRlZ29yeSA9IGZ1bmN0aW9uKGNhdGVnb3J5KSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkVGFza3MgPSBbXTtcclxuICAgICRzY29wZS5zZWxlY3RhYmxlVGFza3MgPSBbXTtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcy5wdXNoKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgIH1cclxuICAgICRzY29wZS5zaG93Q2F0ZWdvcnkgPSBmYWxzZTtcclxuICAgICRzY29wZS5lbnRlcmVkQ2F0ZWdvcnkgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUubmV3Q2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSA9PT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkoJHNjb3BlLmNhdGVnb3JpZXNbaV0pO1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZENhdGVnb3J5KHtcclxuICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuaW5pdCgpO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0ubmFtZSA9PT0gdGFzaykge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0VGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5Lm5hbWUsIHtcclxuICAgICAgICB0YXNrOiB0YXNrXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLnB1c2goeyBuYW1lOiB0YXNrIH0pO1xyXG4gICAgICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1skc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRUYXNrID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUudW5zZWxlY3RUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RhYmxlVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5hZGRUYXNrID0gZnVuY3Rpb24odGFza0xpc3QsIHRhc2spIHtcclxuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnJlbW92ZVRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3Quc3BsaWNlKHRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zdGFydFByaW9yaXRpemluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5zZXRQcmlvcml0eUxpc3QoJHNjb3BlLnNlbGVjdGVkVGFza3MpO1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy9wcmlvcml0aXplJyk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldFF1ZXN0aW9ucyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2VsZWN0ZWRUYXNrcykgcmV0dXJuICcnO1xyXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9ICRzY29wZS5zZWxlY3RlZFRhc2tzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgY291bnRlciArPSBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignTG9naW5DdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgRmlyZWJhc2VVSSBXaWRnZXQgdXNpbmcgRmlyZWJhc2UuXHJcbiAgdmFyIHVpID0gbmV3IGZpcmViYXNldWkuYXV0aC5BdXRoVUkoZmlyZWJhc2UuYXV0aCgpKTtcclxuXHJcbiAgJHNjb3BlLiRvbignbG9nb3V0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB1aS5yZXNldCgpO1xyXG4gICAgc3RhcnRVSSgpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydFVJKCkge1xyXG4gICAgdWkuc3RhcnQoJyNmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyJywge1xyXG4gICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBzaWduSW5TdWNjZXNzOiBmdW5jdGlvbiAoY3VycmVudFVzZXIsIGNyZWRlbnRpYWwsIHJlZGlyZWN0VXJsKSB7XHJcbiAgICAgICAgICAvLyBObyByZWRpcmVjdC5cclxuICAgICAgICAgIGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5hdXRoKClcclxuICAgICAgICAgICAgLmN1cnJlbnRVc2VyLmdldElkVG9rZW4odHJ1ZSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGlkVG9rZW4pIHtcclxuICAgICAgICAgICAgICBVc2VyU3ZjLmF1dGhlbnRpY2F0ZSh7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogY3VycmVudFVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogY3VycmVudFVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwaG90b1VSTDogY3VycmVudFVzZXIucGhvdG9VUkwsXHJcbiAgICAgICAgICAgICAgICBlbWFpbFZlcmlmaWVkOiBjdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkLFxyXG4gICAgICAgICAgICAgICAgaWRUb2tlbjogaWRUb2tlbixcclxuICAgICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdCgnbG9naW4nLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgJCgnI21vZGFsLWxvZ2luJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgLy8kbG9jYXRpb24ucGF0aCgnLycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KCdwb3B1cCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTG9naW4gRmFpbGVkJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYWxlcnQtZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBzaWduSW5GYWlsdXJlIGNhbGxiYWNrIG11c3QgYmUgcHJvdmlkZWQgdG8gaGFuZGxlIG1lcmdlIGNvbmZsaWN0cyB3aGljaFxyXG4gICAgICAgIC8vIG9jY3VyIHdoZW4gYW4gZXhpc3RpbmcgY3JlZGVudGlhbCBpcyBsaW5rZWQgdG8gYW4gYW5vbnltb3VzIHVzZXIuXHJcbiAgICAgICAgc2lnbkluRmFpbHVyZTogZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBGb3IgbWVyZ2UgY29uZmxpY3RzLCB0aGUgZXJyb3IuY29kZSB3aWxsIGJlXHJcbiAgICAgICAgICAvLyAnZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdCcuXHJcbiAgICAgICAgICBpZiAoZXJyb3IuY29kZSAhPSAnZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gVGhlIGNyZWRlbnRpYWwgdGhlIHVzZXIgdHJpZWQgdG8gc2lnbiBpbiB3aXRoLlxyXG4gICAgICAgICAgdmFyIGNyZWQgPSBlcnJvci5jcmVkZW50aWFsO1xyXG4gICAgICAgICAgLy8gQ29weSBkYXRhIGZyb20gYW5vbnltb3VzIHVzZXIgdG8gcGVybWFuZW50IHVzZXIgYW5kIGRlbGV0ZSBhbm9ueW1vdXNcclxuICAgICAgICAgIC8vIHVzZXIuXHJcbiAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgIC8vIEZpbmlzaCBzaWduLWluIGFmdGVyIGRhdGEgaXMgY29waWVkLlxyXG4gICAgICAgICAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoQ3JlZGVudGlhbChjcmVkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVpU2hvd246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vIFRoZSB3aWRnZXQgaXMgcmVuZGVyZWQuXHJcbiAgICAgICAgICAvLyBIaWRlIHRoZSBsb2FkZXIuXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzaWduSW5TdWNjZXNzVXJsOiAnL2hvbWUnLFxyXG4gICAgICBzaWduSW5PcHRpb25zOiBbXHJcbiAgICAgICAgLy9maXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICAvLyBXaWxsIHVzZSBwb3B1cCBmb3IgSURQIFByb3ZpZGVycyBzaWduLWluIGZsb3cgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCwgcmVkaXJlY3QuXHJcbiAgICAgIHNpZ25JbkZsb3c6ICdwb3B1cCcsXHJcbiAgICAgIC8vIE90aGVyIGNvbmZpZyBvcHRpb25zLi4uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0VUkoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUG9zdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGZpbHRlciwgUG9zdHNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XHJcbiAgICAgIFBvc3RzU3ZjLmNyZWF0ZSh7XHJcbiAgICAgICAgYm9keTogJHNjb3BlLnBvc3RCb2R5XHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgICAgICAkc2NvcGUucG9zdEJvZHkgPSBudWxsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBQb3N0c1N2Yy5mZXRjaCgpXHJcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUucG9zdHMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKCd3czpuZXdfcG9zdCcsIGZ1bmN0aW9uIChfLCBwb3N0KSB7XHJcbiAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgUG9zdHNTdmMuZ2V0UG9zdChwb3N0KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUucG9zdHMudW5zaGlmdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1ByaW9yaXRpemVDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBDYXRlZ29yaWVzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5wcmlvcml0eUxpc3QgPSBDYXRlZ29yaWVzU3ZjLmdldFByaW9yaXR5TGlzdCgpO1xyXG5cclxuICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICRsb2NhdGlvbi5wYXRoKCcvbGlzdHMnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24gPSAxO1xyXG4gICAgJHNjb3BlLmN1cnJlbnRRdWVzdGlvbiA9IDE7XHJcbiAgICAkc2NvcGUuZG9uZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLm1ha2VDaG9pY2UgPSBmdW5jdGlvbihjaG9pY2UpIHtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5pZCA9PT0gJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24pIHtcclxuICAgICAgICAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA9IGNob2ljZSA9PT0gMSA/ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uZmlyc3RDaG9pY2UgOiAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLnNlY29uZENob2ljZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uID09PSAkc2NvcGUuY3VycmVudFF1ZXN0aW9uKSB7XHJcbiAgICAgICRzY29wZS5jdXJyZW50UXVlc3Rpb24gPSAkc2NvcGUuY3VycmVudFF1ZXN0aW9uID09PSAkc2NvcGUucHJpb3JpdHlMaXN0Lmxlbmd0aCA/IDEgOiAkc2NvcGUuY3VycmVudFF1ZXN0aW9uICsgMTtcclxuICAgIH1cclxuICAgICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uID0gJHNjb3BlLmN1cnJlbnRRdWVzdGlvbjtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yIChpIGluICRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlID09PSAnJykge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICAkKCcjcHJpb3JpdGl6ZUNob2ljZXMnKS5oaWRlKDMwMCk7XHJcbiAgICAgICRzY29wZS5kb25lID0gdHJ1ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0QnV0dG9uVmFsdWUgPSBmdW5jdGlvbihjaG9pY2UpIHtcclxuICAgIGlmICghJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5wcmlvcml0eUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uaWQgPT09ICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGNob2ljZSA9PT0gMSA/ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uZmlyc3RDaG9pY2UgOiAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLnNlY29uZENob2ljZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RRdWVzdGlvbiA9IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbiA9IHF1ZXN0aW9uO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRGaWx0ZXJlZFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCEkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIHJldHVybiAkc2NvcGUucHJpb3JpdHlMaXN0XHJcbiAgICAgIC5zb3J0KGZ1bmN0aW9uKGEsIGIpeyByZXR1cm4gYS5pZC1iLmlkOyB9KVxyXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKHF1ZXN0aW9uKSB7IHJldHVybiBxdWVzdGlvbi5jaG9pY2UgIT09ICcnIHx8IHF1ZXN0aW9uLmlkID09PSAkc2NvcGUuY3VycmVudFF1ZXN0aW9uOyB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0Q2hvaWNlc01hZGUgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICB2YXIgY2hvaWNlc01hZGUgPSAwO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSAhPT0gJycpIHtcclxuICAgICAgICBjaG9pY2VzTWFkZSsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2hvaWNlc01hZGU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldEJ1dHRvbkNsYXNzID0gZnVuY3Rpb24oY2hvaWNlKSB7XHJcbiAgICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmlkID09PSAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbikge1xyXG4gICAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA9PT0gJycpIHtcclxuICAgICAgICAgIHJldHVybiAnYnRuLXByaW1hcnknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hvaWNlID09PSAxKSB7XHJcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5maXJzdENob2ljZSA9PT0gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgPyAnYnRuLXN1Y2Nlc3MnIDogJ2J0bi1kYW5nZXInO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5zZWNvbmRDaG9pY2UgPT09ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlID8gJ2J0bi1zdWNjZXNzJyA6ICdidG4tZGFuZ2VyJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd0Nob2ljZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICQoJyNwcmlvcml0aXplQ2hvaWNlcycpLnNob3coMTAwMCk7XHJcbiAgICAkKCcjcmV2aWV3Q2hvaWNlcycpLmhpZGUoKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhcnRDbGljayA9IGZ1bmN0aW9uKCBldmVudCApIHtcclxuICAgIGlmICggJHNjb3BlLmNoYXJ0ICkge1xyXG4gICAgICAvLyBEaWZmZXJlbnQgbWV0aG9kcyBkZXBlbmRpbmcgb24gY2hhcnQgdHlwZVxyXG4gICAgICAvL2NvbnNvbGUubG9nKCAkc2NvcGUuY2hhcnQuZ2V0UG9pbnRzQXRFdmVudCggZXZlbnQgKSApOyAvLyBmb3IgUG9pbnRzXHJcbiAgICAgIGNvbnNvbGUubG9nKCAkc2NvcGUuY2hhcnQuZ2V0U2VnbWVudHNBdEV2ZW50KCBldmVudCApICk7IC8vIGZvciBTZWdtZW50c1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zaG93UmVzdWx0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICRzY29wZS5kYXRhID0gW107XHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgLy8gU2V0cyB0aGUgY2hhcnQgdG8gYmUgcmVzcG9uc2l2ZVxyXG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG5cclxuICAgICAgLy9Cb29sZWFuIC0gV2hldGhlciB3ZSBzaG91bGQgc2hvdyBhIHN0cm9rZSBvbiBlYWNoIHNlZ21lbnRcclxuICAgICAgc2VnbWVudFNob3dTdHJva2UgOiB0cnVlLFxyXG5cclxuICAgICAgLy9TdHJpbmcgLSBUaGUgY29sb3VyIG9mIGVhY2ggc2VnbWVudCBzdHJva2VcclxuICAgICAgc2VnbWVudFN0cm9rZUNvbG9yIDogJyNmZmYnLFxyXG5cclxuICAgICAgLy9OdW1iZXIgLSBUaGUgd2lkdGggb2YgZWFjaCBzZWdtZW50IHN0cm9rZVxyXG4gICAgICBzZWdtZW50U3Ryb2tlV2lkdGggOiAyLFxyXG5cclxuICAgICAgLy9OdW1iZXIgLSBUaGUgcGVyY2VudGFnZSBvZiB0aGUgY2hhcnQgdGhhdCB3ZSBjdXQgb3V0IG9mIHRoZSBtaWRkbGVcclxuICAgICAgcGVyY2VudGFnZUlubmVyQ3V0b3V0IDogMCwgLy8gVGhpcyBpcyAwIGZvciBQaWUgY2hhcnRzXHJcblxyXG4gICAgICAvL051bWJlciAtIEFtb3VudCBvZiBhbmltYXRpb24gc3RlcHNcclxuICAgICAgYW5pbWF0aW9uU3RlcHMgOiAxMDAsXHJcblxyXG4gICAgICAvL1N0cmluZyAtIEFuaW1hdGlvbiBlYXNpbmcgZWZmZWN0XHJcbiAgICAgIGFuaW1hdGlvbkVhc2luZyA6ICdlYXNlT3V0Qm91bmNlJyxcclxuXHJcbiAgICAgIC8vQm9vbGVhbiAtIFdoZXRoZXIgd2UgYW5pbWF0ZSB0aGUgcm90YXRpb24gb2YgdGhlIERvdWdobnV0XHJcbiAgICAgIGFuaW1hdGVSb3RhdGUgOiB0cnVlLFxyXG5cclxuICAgICAgLy9Cb29sZWFuIC0gV2hldGhlciB3ZSBhbmltYXRlIHNjYWxpbmcgdGhlIERvdWdobnV0IGZyb20gdGhlIGNlbnRyZVxyXG4gICAgICBhbmltYXRlU2NhbGUgOiBmYWxzZSxcclxuXHJcbiAgICAgIC8vU3RyaW5nIC0gQSBsZWdlbmQgdGVtcGxhdGVcclxuICAgICAgbGVnZW5kVGVtcGxhdGUgOiAnPGgzIGNsYXNzPVwidGMtY2hhcnQtanMtbGVnZW5kXCIgc3R5bGU9XCJwYWRkaW5nOjVweFwiPjwlIGZvciAodmFyIGk9MDsgaTxzZWdtZW50cy5sZW5ndGg7IGkrKyl7JT48ZGl2IGNsYXNzPVwibGFiZWxcIiBzdHlsZT1cImZsb2F0OmxlZnQ7bWFyZ2luOjVweDtiYWNrZ3JvdW5kLWNvbG9yOjwlPXNlZ21lbnRzW2ldLmZpbGxDb2xvciU+XCI+PCVpZihzZWdtZW50c1tpXS5sYWJlbCl7JT48JT1zZWdtZW50c1tpXS5sYWJlbCU+PCV9JT48L2Rpdj48JX0lPjwvaDM+J1xyXG4gICAgfTtcclxuICAgIGZvciAodmFyIGkgaW4gQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuY2hvaWNlc1tpXS52b3RlcyA9IDA7XHJcbiAgICAgIGZvciAodmFyIGogaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICAgIGlmIChDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0ubmFtZSA9PT0gJHNjb3BlLnByaW9yaXR5TGlzdFtqXS5jaG9pY2UpIHtcclxuICAgICAgICAgIENhdGVnb3JpZXNTdmMuY2hvaWNlc1tpXS52b3RlcysrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYS52b3RlcyA8IGIudm90ZXM7IH0pO1xyXG4gICAgZm9yIChpIGluIENhdGVnb3JpZXNTdmMuY2hvaWNlcykge1xyXG4gICAgICAkc2NvcGUuZGF0YS5wdXNoKHtcclxuICAgICAgICB2YWx1ZTogQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLnZvdGVzLFxyXG4gICAgICAgIGxhYmVsOiBDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0ubmFtZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICQoJyNwcmlvcml0aXplUmVzdWx0JykuaGlkZSgpO1xyXG4gICAgJCgnI3ByaW9yaXRpemVDaG9pY2VzJykuaGlkZSgpO1xyXG4gICAgJCgnI3ByaW9yaXR5UmVzdWx0cycpLnNob3coMTAwMCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUHJvZmlsZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcbiAgY29uc3QgY291bnRyaWVzID0gW1xyXG4gICAgeyBuYW1lOiBcIkFuZG9ycmFcIiwgZmxhZzogXCJmbGFnLWFkXCIsIHRpZGJpdDogXCJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBBcmFiIEVtaXJhdGVzXCIsIGZsYWc6IFwiZmxhZy1hZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWZnaGFuaXN0YW5cIiwgZmxhZzogXCJmbGFnLWFmXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsIGZsYWc6IFwiZmxhZy1hZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW5ndWlsbGFcIiwgZmxhZzogXCJmbGFnLWFpXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbGJhbmlhXCIsIGZsYWc6IFwiZmxhZy1hbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXJtZW5pYVwiLCBmbGFnOiBcImZsYWctYW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFuZ29sYVwiLCBmbGFnOiBcImZsYWctYW9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFudGFyY3RpY2FcIiwgZmxhZzogXCJmbGFnLWFxXCIgfSxcclxuICAgIHsgbmFtZTogXCJBcmdlbnRpbmFcIiwgZmxhZzogXCJmbGFnLWFyXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbWVyaWNhbiBTb21vYVwiLCBmbGFnOiBcImZsYWctYXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF1c3RyaWFcIiwgZmxhZzogXCJmbGFnLWF0XCIgfSxcclxuICAgIHsgbmFtZTogXCJBdXN0cmFsaWFcIiwgZmxhZzogXCJmbGFnLWF1XCIgfSxcclxuICAgIHsgbmFtZTogXCJBcnViYVwiLCBmbGFnOiBcImZsYWctYXdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIsOFbGFuZCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1heFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXplcmJhaWphblwiLCBmbGFnOiBcImZsYWctYXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIiwgZmxhZzogXCJmbGFnLWJhXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYXJiYWRvc1wiLCBmbGFnOiBcImZsYWctYmJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhbmdsYWRlc2hcIiwgZmxhZzogXCJmbGFnLWJkXCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxnaXVtXCIsIGZsYWc6IFwiZmxhZy1iZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnVya2luYSBGYXNvXCIsIGZsYWc6IFwiZmxhZy1iZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnVsZ2FyaWFcIiwgZmxhZzogXCJmbGFnLWJnXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYWhyYWluXCIsIGZsYWc6IFwiZmxhZy1iaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnVydW5kaVwiLCBmbGFnOiBcImZsYWctYmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbmluXCIsIGZsYWc6IFwiZmxhZy1ialwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgQmFydGjDqWxlbXlcIiwgZmxhZzogXCJmbGFnLWJsXCIgfSxcclxuICAgIHsgbmFtZTogXCJCZXJtdWRhXCIsIGZsYWc6IFwiZmxhZy1ibVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJ1bmVpIFwiLCBmbGFnOiBcImZsYWctYm5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvbGl2aWEsIFBsdXJpbmF0aW9uYWwgU3RhdGUgb2ZcIiwgZmxhZzogXCJmbGFnLWJvXCIgfSxcclxuICAgIHsgbmFtZTogXCJCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYVwiLCBmbGFnOiBcImZsYWctYnFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJyYXppbFwiLCBmbGFnOiBcImZsYWctYnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhaGFtYXNcIiwgZmxhZzogXCJmbGFnLWJzXCIgfSxcclxuICAgIHsgbmFtZTogXCJCaHV0YW5cIiwgZmxhZzogXCJmbGFnLWJ0XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3V2ZXQgSXNsYW5kXCIsIGZsYWc6IFwiZmxhZy1idlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm90c3dhbmFcIiwgZmxhZzogXCJmbGFnLWJ3XCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxhcnVzXCIsIGZsYWc6IFwiZmxhZy1ieVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVsaXplXCIsIGZsYWc6IFwiZmxhZy1ielwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FuYWRhXCIsIGZsYWc6IFwiZmxhZy1jYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb25nbywgdGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlXCIsIGZsYWc6IFwiZmxhZy1jZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1jZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29uZ29cIiwgZmxhZzogXCJmbGFnLWNnXCIgfSxcclxuICAgIHsgbmFtZTogXCJTd2l0emVybGFuZFwiLCBmbGFnOiBcImZsYWctY2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkPDtHRlIGQnSXZvaXJlXCIsIGZsYWc6IFwiZmxhZy1jaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29vayBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1ja1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hpbGVcIiwgZmxhZzogXCJmbGFnLWNsXCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW1lcm9vblwiLCBmbGFnOiBcImZsYWctY21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoaW5hXCIsIGZsYWc6IFwiZmxhZy1jblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29sb21iaWFcIiwgZmxhZzogXCJmbGFnLWNvXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb3N0YSBSaWNhXCIsIGZsYWc6IFwiZmxhZy1jclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3ViYVwiLCBmbGFnOiBcImZsYWctY3VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhYm8gVmVyZGVcIiwgZmxhZzogXCJmbGFnLWN2XCIgfSxcclxuICAgIHsgbmFtZTogXCJDdXJhw6dhb1wiLCBmbGFnOiBcImZsYWctY3dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNocmlzdG1hcyBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLWN4XCIgfSxcclxuICAgIHsgbmFtZTogXCJDeXBydXNcIiwgZmxhZzogXCJmbGFnLWN5XCIgfSxcclxuICAgIHsgbmFtZTogXCJDemVjaCBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctY3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdlcm1hbnlcIiwgZmxhZzogXCJmbGFnLWRlXCIgfSxcclxuICAgIHsgbmFtZTogXCJEamlib3V0aVwiLCBmbGFnOiBcImZsYWctZGpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRlbm1hcmtcIiwgZmxhZzogXCJmbGFnLWRrXCIgfSxcclxuICAgIHsgbmFtZTogXCJEb21pbmljYVwiLCBmbGFnOiBcImZsYWctZG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRvbWluaWNhbiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctZG9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFsZ2VyaWFcIiwgZmxhZzogXCJmbGFnLWR6XCIgfSxcclxuICAgIHsgbmFtZTogXCJFY3VhZG9yXCIsIGZsYWc6IFwiZmxhZy1lY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXN0b25pYVwiLCBmbGFnOiBcImZsYWctZWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVneXB0XCIsIGZsYWc6IFwiZmxhZy1lZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiV2VzdGVybiBTYWhhcmFcIiwgZmxhZzogXCJmbGFnLWVoXCIgfSxcclxuICAgIHsgbmFtZTogXCJFcml0cmVhXCIsIGZsYWc6IFwiZmxhZy1lclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3BhaW5cIiwgZmxhZzogXCJmbGFnLWVzXCIgfSxcclxuICAgIHsgbmFtZTogXCJFdGhpb3BpYVwiLCBmbGFnOiBcImZsYWctZXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZpbmxhbmRcIiwgZmxhZzogXCJmbGFnLWZpXCIgfSxcclxuICAgIHsgbmFtZTogXCJGaWppXCIsIGZsYWc6IFwiZmxhZy1malwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpXCIsIGZsYWc6IFwiZmxhZy1ma1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcyBvZlwiLCBmbGFnOiBcImZsYWctZm1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZhcm9lIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWZvXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmFuY2VcIiwgZmxhZzogXCJmbGFnLWZyXCIgfSxcclxuICAgIHsgbmFtZTogXCJHYWJvblwiLCBmbGFnOiBcImZsYWctZ2FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmRcIiwgZmxhZzogXCJmbGFnLWdiXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVuYWRhXCIsIGZsYWc6IFwiZmxhZy1nZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2VvcmdpYVwiLCBmbGFnOiBcImZsYWctZ2VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBHdWlhbmFcIiwgZmxhZzogXCJmbGFnLWdmXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWVybnNleVwiLCBmbGFnOiBcImZsYWctZ2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdoYW5hXCIsIGZsYWc6IFwiZmxhZy1naFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2licmFsdGFyXCIsIGZsYWc6IFwiZmxhZy1naVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3JlZW5sYW5kXCIsIGZsYWc6IFwiZmxhZy1nbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2FtYmlhXCIsIGZsYWc6IFwiZmxhZy1nbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1nblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VhZGVsb3VwZVwiLCBmbGFnOiBcImZsYWctZ3BcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVxdWF0b3JpYWwgR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1ncVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3JlZWNlXCIsIGZsYWc6IFwiZmxhZy1nclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWdzXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWF0ZW1hbGFcIiwgZmxhZzogXCJmbGFnLWd0XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWFtXCIsIGZsYWc6IFwiZmxhZy1ndVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VpbmVhLUJpc3NhdVwiLCBmbGFnOiBcImZsYWctZ3dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1eWFuYVwiLCBmbGFnOiBcImZsYWctZ3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhvbmcgS29uZ1wiLCBmbGFnOiBcImZsYWctaGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctaG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhvbmR1cmFzXCIsIGZsYWc6IFwiZmxhZy1oblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3JvYXRpYVwiLCBmbGFnOiBcImZsYWctaHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhhaXRpXCIsIGZsYWc6IFwiZmxhZy1odFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSHVuZ2FyeVwiLCBmbGFnOiBcImZsYWctaHVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkluZG9uZXNpYVwiLCBmbGFnOiBcImZsYWctaWRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklyZWxhbmRcIiwgZmxhZzogXCJmbGFnLWllXCIgfSxcclxuICAgIHsgbmFtZTogXCJJc3JhZWxcIiwgZmxhZzogXCJmbGFnLWlsXCIgfSxcclxuICAgIHsgbmFtZTogXCJJc2xlIG9mIE1hblwiLCBmbGFnOiBcImZsYWctaW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkluZGlhXCIsIGZsYWc6IFwiZmxhZy1pblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCIsIGZsYWc6IFwiZmxhZy1pb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJhcVwiLCBmbGFnOiBcImZsYWctaXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWlyXCIgfSxcclxuICAgIHsgbmFtZTogXCJJY2VsYW5kXCIsIGZsYWc6IFwiZmxhZy1pc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXRhbHlcIiwgZmxhZzogXCJmbGFnLWl0XCIgfSxcclxuICAgIHsgbmFtZTogXCJKZXJzZXlcIiwgZmxhZzogXCJmbGFnLWplXCIgfSxcclxuICAgIHsgbmFtZTogXCJKYW1haWNhXCIsIGZsYWc6IFwiZmxhZy1qbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSm9yZGFuXCIsIGZsYWc6IFwiZmxhZy1qb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSmFwYW5cIiwgZmxhZzogXCJmbGFnLWpwXCIgfSxcclxuICAgIHsgbmFtZTogXCJLZW55YVwiLCBmbGFnOiBcImZsYWcta2VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkt5cmd5enN0YW5cIiwgZmxhZzogXCJmbGFnLWtnXCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW1ib2RpYVwiLCBmbGFnOiBcImZsYWcta2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktpcmliYXRpXCIsIGZsYWc6IFwiZmxhZy1raVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29tb3Jvc1wiLCBmbGFnOiBcImZsYWcta21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLCBmbGFnOiBcImZsYWcta25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIktvcmVhLCBEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1rcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS29yZWEsIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1rclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS3V3YWl0XCIsIGZsYWc6IFwiZmxhZy1rd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2F5bWFuIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWt5XCIgfSxcclxuICAgIHsgbmFtZTogXCJLYXpha2hzdGFuXCIsIGZsYWc6IFwiZmxhZy1relwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWxhXCIgfSxcclxuICAgIHsgbmFtZTogXCJMZWJhbm9uXCIsIGZsYWc6IFwiZmxhZy1sYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgTHVjaWFcIiwgZmxhZzogXCJmbGFnLWxjXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWVjaHRlbnN0ZWluXCIsIGZsYWc6IFwiZmxhZy1saVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3JpIExhbmthXCIsIGZsYWc6IFwiZmxhZy1sa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGliZXJpYVwiLCBmbGFnOiBcImZsYWctbHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxlc290aG9cIiwgZmxhZzogXCJmbGFnLWxzXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaXRodWFuaWFcIiwgZmxhZzogXCJmbGFnLWx0XCIgfSxcclxuICAgIHsgbmFtZTogXCJMdXhlbWJvdXJnXCIsIGZsYWc6IFwiZmxhZy1sdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGF0dmlhXCIsIGZsYWc6IFwiZmxhZy1sdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGlieWFcIiwgZmxhZzogXCJmbGFnLWx5XCIgfSxcclxuICAgIHsgbmFtZTogXCJNb3JvY2NvXCIsIGZsYWc6IFwiZmxhZy1tYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9uYWNvXCIsIGZsYWc6IFwiZmxhZy1tY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9sZG92YSwgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLW1kXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb250ZW5lZ3JvXCIsIGZsYWc6IFwiZmxhZy1tZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIiwgZmxhZzogXCJmbGFnLW1mXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWRhZ2FzY2FyXCIsIGZsYWc6IFwiZmxhZy1tZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFyc2hhbGwgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctbWhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hY2Vkb25pYSwgdGhlIGZvcm1lciBZdWdvc2xhdiBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctbWtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGlcIiwgZmxhZzogXCJmbGFnLW1sXCIgfSxcclxuICAgIHsgbmFtZTogXCJNeWFubWFyXCIsIGZsYWc6IFwiZmxhZy1tbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9uZ29saWFcIiwgZmxhZzogXCJmbGFnLW1uXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWNhb1wiLCBmbGFnOiBcImZsYWctbW9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctbXBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hcnRpbmlxdWVcIiwgZmxhZzogXCJmbGFnLW1xXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXVyaXRhbmlhXCIsIGZsYWc6IFwiZmxhZy1tclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9udHNlcnJhdFwiLCBmbGFnOiBcImZsYWctbXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbHRhXCIsIGZsYWc6IFwiZmxhZy1tdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWF1cml0aXVzXCIsIGZsYWc6IFwiZmxhZy1tdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsZGl2ZXNcIiwgZmxhZzogXCJmbGFnLW12XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxhd2lcIiwgZmxhZzogXCJmbGFnLW13XCIgfSxcclxuICAgIHsgbmFtZTogXCJNZXhpY29cIiwgZmxhZzogXCJmbGFnLW14XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxheXNpYVwiLCBmbGFnOiBcImZsYWctbXlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vemFtYmlxdWVcIiwgZmxhZzogXCJmbGFnLW16XCIgfSxcclxuICAgIHsgbmFtZTogXCJOYW1pYmlhXCIsIGZsYWc6IFwiZmxhZy1uYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV3IENhbGVkb25pYVwiLCBmbGFnOiBcImZsYWctbmNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pZ2VyXCIsIGZsYWc6IFwiZmxhZy1uZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9yZm9sayBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLW5mXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWdlcmlhXCIsIGZsYWc6IFwiZmxhZy1uZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmljYXJhZ3VhXCIsIGZsYWc6IFwiZmxhZy1uaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV0aGVybGFuZHNcIiwgZmxhZzogXCJmbGFnLW5sXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3J3YXlcIiwgZmxhZzogXCJmbGFnLW5vXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXBhbFwiLCBmbGFnOiBcImZsYWctbnBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hdXJ1XCIsIGZsYWc6IFwiZmxhZy1uclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTml1ZVwiLCBmbGFnOiBcImZsYWctbnVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5ldyBaZWFsYW5kXCIsIGZsYWc6IFwiZmxhZy1uelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiT21hblwiLCBmbGFnOiBcImZsYWctb21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhbmFtYVwiLCBmbGFnOiBcImZsYWctcGFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBlcnVcIiwgZmxhZzogXCJmbGFnLXBlXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggUG9seW5lc2lhXCIsIGZsYWc6IFwiZmxhZy1wZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFwdWEgTmV3IEd1aW5lYVwiLCBmbGFnOiBcImZsYWctcGdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBoaWxpcHBpbmVzXCIsIGZsYWc6IFwiZmxhZy1waFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFraXN0YW5cIiwgZmxhZzogXCJmbGFnLXBrXCIgfSxcclxuICAgIHsgbmFtZTogXCJQb2xhbmRcIiwgZmxhZzogXCJmbGFnLXBsXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCIsIGZsYWc6IFwiZmxhZy1wbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGl0Y2Fpcm5cIiwgZmxhZzogXCJmbGFnLXBuXCIgfSxcclxuICAgIHsgbmFtZTogXCJQdWVydG8gUmljb1wiLCBmbGFnOiBcImZsYWctcHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhbGVzdGluZSwgU3RhdGUgb2ZcIiwgZmxhZzogXCJmbGFnLXBzXCIgfSxcclxuICAgIHsgbmFtZTogXCJQb3J0dWdhbFwiLCBmbGFnOiBcImZsYWctcHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhbGF1XCIsIGZsYWc6IFwiZmxhZy1wd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFyYWd1YXlcIiwgZmxhZzogXCJmbGFnLXB5XCIgfSxcclxuICAgIHsgbmFtZTogXCJRYXRhclwiLCBmbGFnOiBcImZsYWctcWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlLDqXVuaW9uXCIsIGZsYWc6IFwiZmxhZy1yZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUm9tYW5pYVwiLCBmbGFnOiBcImZsYWctcm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNlcmJpYVwiLCBmbGFnOiBcImZsYWctcnNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlJ1c3NpYW4gRmVkZXJhdGlvblwiLCBmbGFnOiBcImZsYWctcnVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlJ3YW5kYVwiLCBmbGFnOiBcImZsYWctcndcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhdWRpIEFyYWJpYVwiLCBmbGFnOiBcImZsYWctc2FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvbG9tb24gSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctc2JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNleWNoZWxsZXNcIiwgZmxhZzogXCJmbGFnLXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJTdWRhblwiLCBmbGFnOiBcImZsYWctc2RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3ZWRlblwiLCBmbGFnOiBcImZsYWctc2VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpbmdhcG9yZVwiLCBmbGFnOiBcImZsYWctc2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhXCIsIGZsYWc6IFwiZmxhZy1zaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2xvdmVuaWFcIiwgZmxhZzogXCJmbGFnLXNpXCIgfSxcclxuICAgIHsgbmFtZTogXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCIsIGZsYWc6IFwiZmxhZy1zalwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2xvdmFraWFcIiwgZmxhZzogXCJmbGFnLXNrXCIgfSxcclxuICAgIHsgbmFtZTogXCJTaWVycmEgTGVvbmVcIiwgZmxhZzogXCJmbGFnLXNsXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW4gTWFyaW5vXCIsIGZsYWc6IFwiZmxhZy1zbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2VuZWdhbFwiLCBmbGFnOiBcImZsYWctc25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvbWFsaWFcIiwgZmxhZzogXCJmbGFnLXNvXCIgfSxcclxuICAgIHsgbmFtZTogXCJTdXJpbmFtZVwiLCBmbGFnOiBcImZsYWctc3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvdXRoIFN1ZGFuXCIsIGZsYWc6IFwiZmxhZy1zc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FvIFRvbWUgYW5kIFByaW5jaXBlXCIsIGZsYWc6IFwiZmxhZy1zdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWwgU2FsdmFkb3JcIiwgZmxhZzogXCJmbGFnLXN2XCIgfSxcclxuICAgIHsgbmFtZTogXCJTaW50IE1hYXJ0ZW4gKER1dGNoIHBhcnQpXCIsIGZsYWc6IFwiZmxhZy1zeFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3lyaWFuIEFyYWIgUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLXN5XCIgfSxcclxuICAgIHsgbmFtZTogXCJTd2F6aWxhbmRcIiwgZmxhZzogXCJmbGFnLXN6XCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLXRjXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGFkXCIsIGZsYWc6IFwiZmxhZy10ZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzXCIsIGZsYWc6IFwiZmxhZy10ZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9nb1wiLCBmbGFnOiBcImZsYWctdGdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRoYWlsYW5kXCIsIGZsYWc6IFwiZmxhZy10aFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGFqaWtpc3RhblwiLCBmbGFnOiBcImZsYWctdGpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRva2VsYXVcIiwgZmxhZzogXCJmbGFnLXRrXCIgfSxcclxuICAgIHsgbmFtZTogXCJUaW1vci1MZXN0ZVwiLCBmbGFnOiBcImZsYWctdGxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmttZW5pc3RhblwiLCBmbGFnOiBcImZsYWctdG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1bmlzaWFcIiwgZmxhZzogXCJmbGFnLXRuXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb25nYVwiLCBmbGFnOiBcImZsYWctdG9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmtleVwiLCBmbGFnOiBcImZsYWctdHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIiwgZmxhZzogXCJmbGFnLXR0XCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXZhbHVcIiwgZmxhZzogXCJmbGFnLXR2XCIgfSxcclxuICAgIHsgbmFtZTogXCJUYWl3YW4sIFByb3ZpbmNlIG9mIENoaW5hXCIsIGZsYWc6IFwiZmxhZy10d1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctdHpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVrcmFpbmVcIiwgZmxhZzogXCJmbGFnLXVhXCIgfSxcclxuICAgIHsgbmFtZTogXCJVZ2FuZGFcIiwgZmxhZzogXCJmbGFnLXVnXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLXVtXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIiwgZmxhZzogXCJmbGFnLXVzXCIgfSxcclxuICAgIHsgbmFtZTogXCJVcnVndWF5XCIsIGZsYWc6IFwiZmxhZy11eVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVXpiZWtpc3RhblwiLCBmbGFnOiBcImZsYWctdXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhvbHkgU2VlXCIsIGZsYWc6IFwiZmxhZy12YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIiwgZmxhZzogXCJmbGFnLXZjXCIgfSxcclxuICAgIHsgbmFtZTogXCJWZW5lenVlbGEsIEJvbGl2YXJpYW4gUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLXZlXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaXJnaW4gSXNsYW5kcywgQnJpdGlzaFwiLCBmbGFnOiBcImZsYWctdmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzLCBVLlMuXCIsIGZsYWc6IFwiZmxhZy12aVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlldCBOYW1cIiwgZmxhZzogXCJmbGFnLXZuXCIgfSxcclxuICAgIHsgbmFtZTogXCJWYW51YXR1XCIsIGZsYWc6IFwiZmxhZy12dVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiV2FsbGlzIGFuZCBGdXR1bmFcIiwgZmxhZzogXCJmbGFnLXdmXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW1vYVwiLCBmbGFnOiBcImZsYWctd3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlllbWVuXCIsIGZsYWc6IFwiZmxhZy15ZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWF5b3R0ZVwiLCBmbGFnOiBcImZsYWcteXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvdXRoIEFmcmljYVwiLCBmbGFnOiBcImZsYWctemFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlphbWJpYVwiLCBmbGFnOiBcImZsYWctem1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlppbWJhYndlXCIsIGZsYWc6IFwiZmxhZy16d1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVXNlckZsYWdzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnVzZXJGbGFncyA9ICRzY29wZS5jdXJyZW50VXNlcj8uZmxhZ3NcclxuICAgICAgPyBjb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChjb3VudHJ5KSB7XHJcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLmN1cnJlbnRVc2VyLmZsYWdzLmluY2x1ZGVzKGNvdW50cnkuZmxhZyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgOiBbXTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZGF0ZU9wdGlvbnMgPSB7XHJcbiAgICBtYXhEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgbWluRGF0ZTogbmV3IERhdGUoMTkwMCwgMSwgMSksXHJcbiAgICBpbml0RGF0ZTogbmV3IERhdGUoMjAwMCwgMSwgMSksXHJcbiAgICBkYXRlcGlja2VyTW9kZTogXCJ5ZWFyXCIsXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVzZXJuYW1lVG9nZ2xlID0gdHJ1ZTtcclxuICAkc2NvcGUucGFzc3dvcmRUb2dnbGUgPSB0cnVlO1xyXG5cclxuICAkc2NvcGUudG9nZ2xlVXNlcm5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSAhJHNjb3BlLnVzZXJuYW1lVG9nZ2xlO1xyXG4gICAgJHNjb3BlLm5ld1VzZXJuYW1lID0gJHNjb3BlLmN1cnJlbnRVc2VyLnVzZXJuYW1lO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS50b2dnbGVQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS5uZXdQYXNzd29yZCA9IG51bGw7XHJcbiAgICAkc2NvcGUuY29uZmlybVBhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9ICEkc2NvcGUucGFzc3dvcmRUb2dnbGU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAocGFzc3dvcmQpIHtcclxuICAgIGlmIChwYXNzd29yZCkge1xyXG4gICAgICB2YXIgdXNlciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgIFVzZXJTdmMuY2hlY2tQYXNzd29yZCh1c2VyLCBwYXNzd29yZCkudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBvcmlnaW5hbEJnID0gJChcIi5wYXNzd29yZFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIik7XHJcbiAgICAgICAgICAkKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjZDMVwiIH0sIDIwMCkuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogb3JpZ2luYWxCZyB9LCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVBhc3N3b3JkID0gZnVuY3Rpb24gKG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCwgY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICBpZiAobmV3UGFzc3dvcmQpIHtcclxuICAgICAgaWYgKG5ld1Bhc3N3b3JkID09IGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgICBVc2VyU3ZjLmNoYW5nZVBhc3N3b3JkKHVzZXIsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCkudGhlbihcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwicG9wdXBcIiwge1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGFzc3dvcmQgQ2hhbmdlZFwiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiYWxlcnQtc3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJHNjb3BlLm9sZFBhc3N3b3JkID0gbnVsbDtcclxuICAgICAgICAgICAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUuJGVtaXQoXCJwb3B1cFwiLCB7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJQYXNzd29yZCBDaGFuZ2UgRmFpbGVkXCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJhbGVydC1kYW5nZXJcIixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAkKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjZDMVwiIH0sIDIwMCkuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogb3JpZ2luYWxCZyB9LCAyMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXJuYW1lKSB7XHJcbiAgICAkc2NvcGUuJGVtaXQoXCJsb2FkaW5nXCIpO1xyXG4gICAgVXNlclN2Yy5jaGFuZ2VVc2VybmFtZSgkc2NvcGUuY3VycmVudFVzZXIuX2lkLCB1c2VybmFtZSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwidXBkYXRlXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwicG9wdXBcIiwge1xyXG4gICAgICAgICAgbWVzc2FnZTogdXNlcm5hbWUgKyBcIiBhbHJlYWR5IGluIHVzZVwiLFxyXG4gICAgICAgICAgdHlwZTogXCJhbGVydC1kYW5nZXJcIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUuJGVtaXQoXCJsb2FkaW5nXCIpO1xyXG4gICAgVXNlclN2Yy51cGRhdGVVc2VyKHsgLi4uJHNjb3BlLmN1cnJlbnRVc2VyLCBmbGFnczogJHNjb3BlLnVzZXJGbGFncy5tYXAoKHsgZmxhZyB9KSA9PiBmbGFnKSB9KS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoXCJ1cGRhdGVcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5sb2FkQ291bnRyaWVzID0gZnVuY3Rpb24gKCRxdWVyeSkge1xyXG4gICAgcmV0dXJuIGNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGNvdW50cnkpIHtcclxuICAgICAgcmV0dXJuIGNvdW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsICgpID0+IHtcclxuICAgIHVwZGF0ZVVzZXJGbGFncygpO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdTa2lsbHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IDA7XHJcbiAgJHNjb3BlLnNraWxsc1Zpc2libGUgPSBmYWxzZTtcclxuICAkc2NvcGUucHJvamVjdHMgPSBbXTtcclxuXHJcbiAgJHNjb3BlLmxhYmVscyA9IFtcIkRvd25sb2FkIFNhbGVzXCIsIFwiSW4tU3RvcmUgU2FsZXNcIiwgXCJNYWlsLU9yZGVyIFNhbGVzXCJdO1xyXG4gICRzY29wZS5kYXRhID0gWzMwMCwgNTAwLCAxMDBdO1xyXG5cclxuICAkLmdldEpTT04oJy9leHBlcmllbmNlLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuICAgICRzY29wZS5wcm9qZWN0cyA9IGRhdGEucmVkdWNlKChwcm9qZWN0cywgZW1wbG95ZXIpID0+IHtcclxuICAgICAgaWYgKGVtcGxveWVyLnByb2plY3RzKSByZXR1cm4gZW1wbG95ZXIucHJvamVjdHMuY29uY2F0KHByb2plY3RzKTtcclxuICAgICAgZWxzZSByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9LCB7fSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5maWx0ZXJlZFByb2plY3RzID0gKCkgPT4gJHNjb3BlLnByb2plY3RzXHJcbiAgICAuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNraWxscyAmJiBwcm9qZWN0LnNraWxscy5pbmNsdWRlcygkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jb2RlKSlcclxuXHJcbiAgJC5nZXRKU09OKCcvc2tpbGxzLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuXHJcbiAgICBjb25zdCBza2lsbHMgPSBkYXRhXHJcbiAgICAuZmlsdGVyKChza2lsbCkgPT4gc2tpbGwuZW5hYmxlZClcclxuXHJcbiAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHNraWxsc1xyXG4gICAgLnJlZHVjZShmdW5jdGlvbihjYXRlZ29yaWVzLCBza2lsbCkge1xyXG4gICAgICBpZiAoIWNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0gPSBbc2tpbGxdXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0ucHVzaChza2lsbClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2F0ZWdvcmllcztcclxuICAgIH0sIHt9KTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCA9IGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IHNraWxsO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydE9wdGlvbnMgPSB7XHJcbiAgICAgICAgY3V0b3V0UGVyY2VudGFnZSA6IDgwLFxyXG4gICAgICAgIGNpcmN1bWZlcmVuY2U6IDIgKiBNYXRoLlBJLFxyXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXHJcbiAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydFN0eWxlID0ge1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgvc2tpbGxzLycgKyAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5pbWFnZSArICcpJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJzYwJScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnNTAlIDUwJSdcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwoJHNjb3BlLnNraWxsc1swXSk7XHJcblxyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICBsZXQgcGFnZSA9IDE7XHJcbiAgICAkc2NvcGUubGlzdHMgPSBbXTtcclxuICAgICRzY29wZS5zZWFyY2ggPSBcIlwiO1xyXG4gICAgJHNjb3BlLm5ld0l0ZW0gPSB7fTtcclxuICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHt9O1xyXG4gICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgbGV0IGV4aGF1c3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICRzY29wZS5rZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIC8vIFRhYlxyXG4gICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuY3JlYXRlVmFsdWUoKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vIEVudGVyXHJcbiAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuY3JlYXRlVmFsdWUoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoJChcIiNuZXctdmFsdWVcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgJChcIiNuZXctYmx1cmJcIikuZm9jdXMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIH1cclxuICAgICAgLy8gdXNlIGUua2V5Q29kZVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWRkTGlzdCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudExhbmd1YWdlID0gJHNjb3BlLnNlbGVjdGVkTGlzdCA/ICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2UgOiBcIkVOXCI7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIFwibmV3XCIpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgY3JlYXRvcjogJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHZhbHVlczogW10sXHJcbiAgICAgICAgYW5zd2VyczogMCxcclxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGN1cnJlbnRMYW5ndWFnZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmIChsaXN0KSB7XHJcbiAgICAgICAgaWYgKGxpc3QuX2lkID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAkc2NvcGUuYWRkTGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHt9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldENhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY3VycmVudFVzZXIpIHJldHVybjtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExhbmd1YWdlcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgcmVzZXRMYW5ndWFnZUZpbHRlcigpO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICByZXNldENhdGVnb3J5RmlsdGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZVN0YXRzID0gZGF0YS5yZWR1Y2UoKHJlc3VsdCwgeyBfaWQsIGNvdW50IH0pID0+IHtcclxuICAgICAgICAgIHJlc3VsdFtfaWRdID0gY291bnQ7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0sIHt9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSBkYXRhLnJlZHVjZSgocmVzdWx0LCB7IF9pZCwgY291bnQgfSkgPT4ge1xyXG4gICAgICAgICAgcmVzdWx0W19pZF0gPSBjb3VudDtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSwge30pO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0KSB7XHJcbiAgICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCh7IF9pZDogJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QgfSk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLnNlYXJjaCA9ICRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2ggfHwgXCJcIjtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS52YWx1ZU9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJ2YWx1ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcImRhdGVcIixcclxuICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPSAhJHNjb3BlLm9yZGVyLmRpcmVjdGlvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRNb3JlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubGlzdHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgIGdldExpc3RzKCkudGhlbigobGlzdHMpID0+IHtcclxuICAgICAgICAkc2NvcGUubGlzdHMgPSAkc2NvcGUubGlzdHMuY29uY2F0KGxpc3RzKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxpc3RzID0gW107XHJcbiAgICAgIHBhZ2UgPSAxO1xyXG4gICAgICBleGhhdXN0ZWQgPSBmYWxzZTtcclxuICAgICAgZ2V0TGlzdHMoKS50aGVuKChsaXN0cykgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9IGxpc3RzO1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZUZpbHRlciA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSkge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID0gISRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5RmlsdGVyID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSkge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSAhJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUNhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKTtcclxuICAgICAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9XHJcbiAgICAgICAgY2F0ZWdvcmllcy5sZW5ndGggPT09IGNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSkubGVuZ3RoO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSAkc2NvcGUuY2F0ZWdvcmllcy5yZWR1Y2UoKGZpbHRlciwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICBmaWx0ZXJbY2F0ZWdvcnldID0gIWFsbENhdGVnb3JpZXM7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgICAgfSwge30pO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0TGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubG9hZGluZyB8fCBleGhhdXN0ZWQpIHJldHVybiBbXTtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLnNlYXJjaCAhPT0gJHNjb3BlLnNlYXJjaCkge1xyXG4gICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJzZWFyY2hcIiwgJHNjb3BlLnNlYXJjaCA/ICRzY29wZS5zZWFyY2ggOiBudWxsKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0cyh7XHJcbiAgICAgICAgcGFnZSxcclxuICAgICAgICBzb3J0Qnk6ICRzY29wZS5vcmRlci5maWVsZCxcclxuICAgICAgICBvcmRlckJ5OiAkc2NvcGUub3JkZXIuZGlyZWN0aW9uID8gLTEgOiAxLFxyXG4gICAgICAgIGxpbWl0OiAxMDAsXHJcbiAgICAgICAgc2VhcmNoOiAkc2NvcGUuc2VhcmNoLFxyXG4gICAgICAgIGxhbmd1YWdlczogT2JqZWN0LmtleXMoJHNjb3BlLmxhbmd1YWdlRmlsdGVyKS5maWx0ZXIoKGxhbmd1YWdlKSA9PiAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2VdKSxcclxuICAgICAgICBjYXRlZ29yaWVzOiBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpLmZpbHRlcigoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0pLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJQYWdlIFwiLCBwYWdlLCBcIiByZXN1bHRzIFwiLCBkYXRhLnJlc3VsdC5sZW5ndGgpO1xyXG4gICAgICBpZiAoZGF0YS5yZXN1bHQubGVuZ3RoIDwgMTAwKSBleGhhdXN0ZWQgPSB0cnVlO1xyXG4gICAgICBlbHNlIHBhZ2UgPSBkYXRhLm5leHRQYWdlO1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnJlc3VsdC5zbGljZSgwLCAxMCkpO1xyXG4gICAgICByZXR1cm4gZGF0YS5yZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS51cGRhdGVWYWx1ZSA9IChpdGVtKSA9PiB7XHJcbiAgICAgIGlmICghaXRlbS52YWx1ZSkge1xyXG4gICAgICAgIFRlblRoaW5nc1N2Yy5kZWxldGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgaXRlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlVmFsdWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGFzRHVwbGljYXRlKCkpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoYCR7JHNjb3BlLm5ld0l0ZW0udmFsdWV9IGlzIGFscmVhZHkgaW4gdGhlIGxpc3RgKTtcclxuICAgICAgfSBlbHNlIGlmICghJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQpIHtcclxuICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMubGVuZ3RoIDw9IDEwKSB7XHJcbiAgICAgICAgICBhd2FpdCAkc2NvcGUudXBzZXJ0TGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXdhaXQgVGVuVGhpbmdzU3ZjLmNyZWF0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCAkc2NvcGUubmV3SXRlbSk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMucHVzaCh7IC4uLiRzY29wZS5uZXdJdGVtIH0pO1xyXG4gICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICRzY29wZS5uZXdJdGVtLmJsdXJiID0gXCJcIjtcclxuICAgICAgJChcIiNuZXctYmx1cmJcIikuZm9jdXMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZVZhbHVlID0gKGl0ZW0pID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKS50aGVuKCgpID0+IHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyA9ICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLl9pZCAhPT0gaXRlbS5faWQpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwc2VydExpc3QgPSAobGlzdCwgdXBkYXRlcykgPT4ge1xyXG4gICAgICAkc2NvcGUuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKGxpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCAmJiBsaXN0Lm5hbWUgJiYgbGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAobGlzdC5faWQgJiYgbGlzdC5faWQgIT09IFwibmV3XCIpIHtcclxuICAgICAgICAgIGxldCBjaGFuZ2VzID0gdXBkYXRlcyA/IHVwZGF0ZXMgOiBsaXN0O1xyXG4gICAgICAgICAgZGVsZXRlIGNoYW5nZXMuX2lkO1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgICAuLi5jaGFuZ2VzLFxyXG4gICAgICAgICAgICBfaWQ6IGxpc3QuX2lkLFxyXG4gICAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0SW5kZXggPSAkc2NvcGUubGlzdHMuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0Ll9pZCA9PT0gZGF0YS5faWQpO1xyXG4gICAgICAgICAgICAkc2NvcGUubGlzdHNbbGlzdEluZGV4XSA9IGRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5jcmVhdGVMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgJHNjb3BlLnNlbGVjdGVkTGlzdCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0ID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbigkc2NvcGUuc2VsZWN0ZWRMaXN0LCB1cGRhdGVzKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICghbGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBsaXN0P1wiKSkge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3QobGlzdCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2UgPSAobGlzdCwgbGFuZ3VhZ2UpID0+IHtcclxuICAgICAgbGlzdC5sYW5ndWFnZSA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgIGNvbnN0IG5vbkVuZ2xpc2hJbmRleCA9IGxpc3QuY2F0ZWdvcmllcy5pbmRleE9mKFwiTm9uLUVuZ2xpc2hcIik7XHJcbiAgICAgIGlmIChsYW5ndWFnZS5jb2RlICE9PSBcIkVOXCIgJiYgbm9uRW5nbGlzaEluZGV4IDwgMCkge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5wdXNoKFwiTm9uLUVuZ2xpc2hcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAobGFuZ3VhZ2UuY29kZSA9PT0gXCJFTlwiICYmIG5vbkVuZ2xpc2hJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgbGlzdC5jYXRlZ29yaWVzLnNwbGljZShub25FbmdsaXNoSW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHtcclxuICAgICAgICBjYXRlZ29yaWVzOiBsaXN0LmNhdGVnb3JpZXMsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlLmNvZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0RGlmZmljdWx0eSA9IChsaXN0LCBkaWZmaWN1bHR5KSA9PiB7XHJcbiAgICAgIGxpc3QuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHtcclxuICAgICAgICBkaWZmaWN1bHR5OiBkaWZmaWN1bHR5LFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldEZyZXF1ZW5jeSA9IChsaXN0LCBmcmVxdWVuY3kpID0+IHtcclxuICAgICAgbGlzdC5mcmVxdWVuY3kgPSBmcmVxdWVuY3k7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHtcclxuICAgICAgICBmcmVxdWVuY3k6IGZyZXF1ZW5jeSxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeSA9IChsaXN0LCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeUluZGV4ID0gbGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpO1xyXG4gICAgICBpZiAoY2F0ZWdvcnlJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgbGlzdC5jYXRlZ29yaWVzLnNwbGljZShjYXRlZ29yeUluZGV4LCAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaXN0LmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwge1xyXG4gICAgICAgIGNhdGVnb3JpZXM6IGxpc3QuY2F0ZWdvcmllcyxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5oYXNEdXBsaWNhdGUgPSAoKSA9PlxyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ICYmXHJcbiAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlICYmXHJcbiAgICAgIF8uc29tZShcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyxcclxuICAgICAgICAoYW5zd2VyKSA9PiBhbnN3ZXIudmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpID09ICRzY29wZS5uZXdJdGVtLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSxcclxuICAgICAgKTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Qmx1cmJzID0gKHR5cGUpID0+IHtcclxuICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Qmx1cmJzKCRzY29wZS5zZWxlY3RlZExpc3QsIHR5cGUpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsIGdldERhdGEpO1xyXG4gIH0pO1xyXG4iLCIvKmpzbGludCBlc3ZlcnNpb246IDYqL1xyXG5hbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzQWRtaW5DdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIFRlblRoaW5nc1N2YywgVXNlclN2Yykge1xyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4pIHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInVzZXJuYW1lXCIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5yZXZlcnNlID0gISRzY29wZS5vcmRlci5yZXZlcnNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldFF1ZXVlID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRRdWV1ZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnF1ZXVlID0gcmVzcG9uc2UuZGF0YS5yZXBsYWNlKFwiL25cIiwgXCI8YnIvPlwiKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICAkc2NvcGUuZ2V0UXVldWUoKTtcclxuXHJcbiAgICBUZW5UaGluZ3NTdmMuZ2V0UGF1c2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAkc2NvcGUucGF1c2VkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coJHNjb3BlLnBhdXNlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBnZXRVc2VycyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLmdldFVzZXJzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUudXNlcnMgPSByZXNwb25zZS5kYXRhLmZpbHRlcigodXNlcikgPT4gIXVzZXIuYWRtaW4pO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQmFuID0gKHVzZXIpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLnRvZ2dsZUJhbih1c2VyLl9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZVBhdXNlID0gKHVzZXIpID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLnRvZ2dsZVBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucGF1c2VkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUucGF1c2VkKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzR2FtZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlUGFyYW1zLCBUZW5UaGluZ3NTdmMsIFVzZXJTdmMpIHtcclxuICAgIGNvbnN0IGdldFVzZXJzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMuZ2V0VXNlcnMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS51c2VycyA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKCh1c2VyKSA9PiAhdXNlci5hZG1pbik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kb24oXCJsb2dpblwiLCAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4pIHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoJHN0YXRlUGFyYW1zLmdhbWUpIHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldEdhbWUoJHN0YXRlUGFyYW1zLmdhbWUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmdhbWUgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5nYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NPbGRDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICAkc2NvcGUuc2VhcmNoID0ge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICB2YWx1ZXM6IFwiXCIsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5rZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuYWRkVmFsdWUoKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICBpZiAoJChcIiNuZXctYmx1cmJcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmFkZFZhbHVlKCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCQoXCIjbmV3LXZhbHVlXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIjbmV3LWJsdXJiXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICB9XHJcbiAgICAgIC8vIHVzZSBlLmtleUNvZGVcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaE5hbWUgPSBcIlwiO1xyXG4gICAgJHNjb3BlLm5ld0l0ZW0gPSB7fTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoY2F0ZWdvcnkpID0+ICgkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSBjYXRlZ29yeSk7XHJcbiAgICAkc2NvcGUuc2V0VXNlckZpbHRlciA9ICh1c2VyKSA9PiAoJHNjb3BlLnVzZXJGaWx0ZXIgPSB1c2VyKTtcclxuICAgICRzY29wZS5zZXRVcGRhdGVGaWx0ZXIgPSAodHlwZSkgPT4gKCRzY29wZS51cGRhdGVGaWx0ZXIgPSB0eXBlKTtcclxuICAgICRzY29wZS5zZXRMYW5ndWFnZUZpbHRlciA9IChsYW5ndWFnZSkgPT4gKCRzY29wZS5sYW5ndWFnZUZpbHRlciA9IGxhbmd1YWdlKTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyZWRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubGlzdHMpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuICRzY29wZS5saXN0c1xyXG4gICAgICAgIC5maWx0ZXIoKHsgaXNEeW5hbWljIH0pID0+IHtcclxuICAgICAgICAgIGlmICgkc2NvcGUudXBkYXRlRmlsdGVyICE9PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJzdGF0aWNcIiAmJiBpc0R5bmFtaWMgPT09IHRydWUpIHx8XHJcbiAgICAgICAgICAgICAgKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiZHluYW1pY1wiICYmIGlzRHluYW1pYyA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoKHsgY2F0ZWdvcmllcyB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoJHNjb3BlLmNhdGVnb3J5RmlsdGVyID09PSBcIkFsbFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yaWVzLmluZGV4T2YoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKSA+PSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPT09IFwiQmxhbmtcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbHRlcigoeyBjcmVhdG9yIH0pID0+IHtcclxuICAgICAgICAgIGlmICgkc2NvcGUudXNlckZpbHRlciA9PT0gXCJBbGxcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdG9yID09PSAkc2NvcGUudXNlckZpbHRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoKHsgbGFuZ3VhZ2UgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCRzY29wZS5sYW5ndWFnZUZpbHRlci5jb2RlID09PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlID09PSAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcnMgPSAkc2NvcGUuY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeSk7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVycy5wdXNoKFwiQWxsXCIpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcnMucHVzaChcIkJsYW5rXCIpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9IFwiQWxsXCI7XHJcbiAgICAgICAgJHNjb3BlLnVwZGF0ZUZpbHRlciA9IFwiYWxsXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJzID0gJHNjb3BlLmxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlKSA9PiBsYW5ndWFnZSk7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVycy5wdXNoKHsgbmFtZTogXCJBbGxcIiwgY29kZTogXCJhbGxcIiB9KTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSB7IG5hbWU6IFwiQWxsXCIsIGNvZGU6IFwiYWxsXCIgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RMaXN0KHsgX2lkOiAkbG9jYXRpb24uc2VhcmNoKCkubGlzdCB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmxpc3RPcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwiZGF0ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIGxhYmVsOiBcIkNyZWF0aW9uIERhdGVcIixcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnZhbHVlT3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInZhbHVlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICAgIGxhYmVsOiBcIlZhbHVlXCIsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zb3J0ID0gKHNvcnRlciwgc29ydEZpZWxkLCBzb3J0TGFiZWwpID0+IHtcclxuICAgICAgJHNjb3BlW3NvcnRlcl0ubGFiZWwgPSBzb3J0TGFiZWw7XHJcbiAgICAgIGlmICgkc2NvcGVbc29ydGVyXS5maWVsZCA9PT0gc29ydEZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlW3NvcnRlcl0uZGlyZWN0aW9uID0gISRzY29wZVtzb3J0ZXJdLmRpcmVjdGlvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGVbc29ydGVyXS5maWVsZCA9IHNvcnRGaWVsZDtcclxuICAgICAgICAkc2NvcGVbc29ydGVyXS5kaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMYW5ndWFnZUNvdW50ID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxpc3RzKSByZXR1cm4gMDtcclxuICAgICAgY29uc3QgY291bnQgPSAkc2NvcGUubGlzdHMuZmlsdGVyKFxyXG4gICAgICAgIChsaXN0KSA9PlxyXG4gICAgICAgICAgKCRzY29wZS5jYXRlZ29yeUZpbHRlciA9PT0gXCJBbGxcIiB8fCBsaXN0LmNhdGVnb3JpZXMuaW5jbHVkZXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKSkgJiZcclxuICAgICAgICAgIChsYW5ndWFnZS5jb2RlID09PSBcImFsbFwiIHx8IGxpc3QubGFuZ3VhZ2UgPT09IGxhbmd1YWdlLmNvZGUpICYmXHJcbiAgICAgICAgICAoJHNjb3BlLnVzZXJGaWx0ZXIgPT09IFwiQWxsXCIgfHwgbGlzdC5jcmVhdG9yID09PSAkc2NvcGUudXNlckZpbHRlcikgJiZcclxuICAgICAgICAgICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImFsbFwiIHx8IGxpc3QuaXNEeW5hbWljID09PSAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJkeW5hbWljXCIpKSxcclxuICAgICAgKS5sZW5ndGg7XHJcbiAgICAgIHJldHVybiBgJHtjb3VudH0gLSAke01hdGgucm91bmQoKGNvdW50IC8gJHNjb3BlLmxpc3RzLmxlbmd0aCkgKiAxMDApfSVgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Q2F0ZWdvcnlDb3VudCA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5saXN0cykgcmV0dXJuIDA7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gJHNjb3BlLmxpc3RzLmZpbHRlcihcclxuICAgICAgICAobGlzdCkgPT5cclxuICAgICAgICAgIChjYXRlZ29yeSA9PT0gXCJBbGxcIiB8fCBsaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSkgPj0gMCkgJiZcclxuICAgICAgICAgICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZSA9PT0gXCJhbGxcIiB8fCBsaXN0Lmxhbmd1YWdlID09PSAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZSkgJiZcclxuICAgICAgICAgICgkc2NvcGUudXNlckZpbHRlciA9PT0gXCJBbGxcIiB8fCBsaXN0LmNyZWF0b3IgPT09ICRzY29wZS51c2VyRmlsdGVyKSAmJlxyXG4gICAgICAgICAgKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiYWxsXCIgfHwgbGlzdC5pc0R5bmFtaWMgPT09ICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImR5bmFtaWNcIikpLFxyXG4gICAgICApLmxlbmd0aDtcclxuICAgICAgcmV0dXJuIGAke2NvdW50fSAtICR7TWF0aC5yb3VuZCgoY291bnQgLyAkc2NvcGUubGlzdHMubGVuZ3RoKSAqIDEwMCl9JWA7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRVcGRhdGVDb3VudCA9ICh0eXBlKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxpc3RzKSByZXR1cm4gMDtcclxuICAgICAgY29uc3QgY291bnQgPSAkc2NvcGUubGlzdHMuZmlsdGVyKFxyXG4gICAgICAgIChsaXN0KSA9PiB0eXBlID09PSBcImFsbFwiIHx8IChsaXN0LmlzRHluYW1pYyAmJiB0eXBlID09PSBcImR5bmFtaWNcIikgfHwgKCFsaXN0LmlzRHluYW1pYyAmJiB0eXBlID09PSBcInN0YXRpY1wiKSxcclxuICAgICAgKS5sZW5ndGg7XHJcbiAgICAgIHJldHVybiBgJHtjb3VudH0gLSAke01hdGgucm91bmQoKGNvdW50IC8gJHNjb3BlLmxpc3RzLmxlbmd0aCkgKiAxMDApfSVgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxvYWRpbmcpIHtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICRzY29wZS5saXN0cyA9IGRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXJzID0ge307XHJcbiAgICAgICAgICAkc2NvcGUudXNlckZpbHRlcnMuQWxsID0gJHNjb3BlLmxpc3RzLmxlbmd0aDtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVycyA9ICRzY29wZS5saXN0c1xyXG4gICAgICAgICAgICAuc29ydCgobGlzdDEsIGxpc3QyKSA9PiBsaXN0MS5jcmVhdG9yID4gbGlzdDIuY3JlYXRvcilcclxuICAgICAgICAgICAgLnJlZHVjZSgodXNlcnMsIHsgY3JlYXRvciB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCF1c2Vyc1tjcmVhdG9yXSkgdXNlcnNbY3JlYXRvcl0gPSAwO1xyXG4gICAgICAgICAgICAgIHVzZXJzW2NyZWF0b3JdKys7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXJzO1xyXG4gICAgICAgICAgICB9LCAkc2NvcGUudXNlckZpbHRlcnMpO1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJDb3VudCA9IE9iamVjdC5rZXlzKCRzY29wZS51c2VyRmlsdGVycykubGVuZ3RoO1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXJzID0gc29ydE9iamVjdCgkc2NvcGUudXNlckZpbHRlcnMsIGZhbHNlKTtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVyID0gXCJBbGxcIjtcclxuICAgICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgJChcIiNjYXRlZ29yeS1zZWxlY3RcIikuaGlkZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Q2F0ZWdvcnlDbGFzcyA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICByZXR1cm4gJHNjb3BlLnNlbGVjdGVkTGlzdCAmJiAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSkgPj0gMFxyXG4gICAgICAgID8gXCJidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgOiBcImJ0bi1kZWZhdWx0XCI7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeUluZGV4ID0gJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpO1xyXG4gICAgICBpZiAoY2F0ZWdvcnlJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLnNwbGljZShjYXRlZ29yeUluZGV4LCAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdExhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICBjb25zdCBub25FbmdsaXNoSW5kZXggPSAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICBpZiAobGFuZ3VhZ2UuY29kZSAhPT0gXCJFTlwiICYmIG5vbkVuZ2xpc2hJbmRleCA8IDApIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMucHVzaChcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGxhbmd1YWdlLmNvZGUgPT09IFwiRU5cIiAmJiBub25FbmdsaXNoSW5kZXggPj0gMCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5zcGxpY2Uobm9uRW5nbGlzaEluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWRkTGlzdCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudExhbmd1YWdlID0gJHNjb3BlLnNlbGVjdGVkTGlzdCA/ICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2UgOiBcIkVOXCI7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIFwiXCIpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgY3JlYXRvcjogJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHZhbHVlczogW10sXHJcbiAgICAgICAgYW5zd2VyczogMCxcclxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGN1cnJlbnRMYW5ndWFnZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmhhc0R1cGxpY2F0ZSA9ICgpID0+XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgJiZcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgJiZcclxuICAgICAgXy5zb21lKFxyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgIChhbnN3ZXIpID0+IGFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCkgPT0gJHNjb3BlLm5ld0l0ZW0udmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpLFxyXG4gICAgICApO1xyXG5cclxuICAgICRzY29wZS5hZGRWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5uZXdJdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgXy5zb21lKFxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyxcclxuICAgICAgICAgICAgKGFuc3dlcikgPT4gYW5zd2VyLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSA9PSAkc2NvcGUubmV3SXRlbS52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCksXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBhbGVydChgJHskc2NvcGUubmV3SXRlbS52YWx1ZX0gaXMgYWxyZWFkeSBpbiB0aGUgbGlzdGApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUubmV3SXRlbS5jcmVhdG9yID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnVuc2hpZnQoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSgkc2NvcGUubmV3SXRlbSkpKTtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuYW5zd2VycysrO1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0uYmx1cmIgPSBcIlwiO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5sZW5ndGggPj0gMTAgJiZcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5uYW1lICYmXHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmVMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAkKFwiI25ldy12YWx1ZVwiKS5mb2N1cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUucmVwb3J0TGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGxpc3QucmVwb3J0ZWQgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMucmVwb3J0TGlzdCgkc2NvcGUuY3VycmVudFVzZXIsIGxpc3QpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2F2ZUxpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5zYXZpbmcpIHtcclxuICAgICAgICBsaXN0LnZhbHVlcyA9IGxpc3QudmFsdWVzLmZpbHRlcigoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7XHJcbiAgICAgICAgaWYgKGxpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCAmJiBsaXN0Lm5hbWUgJiYgbGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICRzY29wZS5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLnNhdmVMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgbGlzdCkudGhlbihcclxuICAgICAgICAgICAgKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmxpc3RzLnVuc2hpZnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0TGlzdChkYXRhKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkc2NvcGUubGlzdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5saXN0c1tpXS5faWQgPT09IGRhdGEuX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxpc3RzW2ldID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdExpc3QobGlzdCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobGlzdC52YWx1ZXMubGVuZ3RoIDwgMTApIHtcclxuICAgICAgICAgIGFsZXJ0KFwiTGlzdHMgbXVzdCBjb250YWluIDEwIG9yIG1vcmUgdmFsdWVzIVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFsaXN0Lm5hbWUpIHtcclxuICAgICAgICAgIGZsYXNoKFwiI2xpc3QtbmFtZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmxhc2goXCIubGlzdC1jYXRlZ29yeVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZmxhc2goZWxlbWVudCkge1xyXG4gICAgICBjb25zdCBjb2xvciA9ICQoZWxlbWVudCkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiKTtcclxuICAgICAgJChlbGVtZW50KS5hbmltYXRlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkE4MDcyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMDAsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgJChlbGVtZW50KS5hbmltYXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCFsaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9ICRzY29wZS5saXN0cy5maWx0ZXIoKHsgX2lkIH0pID0+IF9pZCk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbGlzdD9cIikpIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5kZWxldGVMaXN0KGxpc3QpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUubGlzdEJ1dHRvbkNsYXNzID0gKGxpc3QpID0+IHtcclxuICAgICAgY29uc3QgdmFsdWVzID0gbGlzdC52YWx1ZXMubGVuZ3RoO1xyXG4gICAgICBjb25zdCBibHVyYnMgPSBsaXN0LmJsdXJicztcclxuICAgICAgaWYgKHZhbHVlcyA9PT0gYmx1cmJzICYmIGxpc3QuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gXCJidG4tZGVmYXVsdFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKGJsdXJicyA9PT0gMCAmJiAhbGlzdC5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHJldHVybiBcImJ0bi13YXJuaW5nXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoYmx1cmJzID09PSAwICYmIGxpc3QuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gXCJidG4taW5mb1wiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcImJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldEJsdXJicyA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldEJsdXJicygkc2NvcGUuc2VsZWN0ZWRMaXN0LCB0eXBlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdXb3Jrb3V0Q3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICRzY29wZS50aW1lRXhlcmNpc2luZyA9IDMwO1xyXG4gICRzY29wZS50aW1lUmVzdGluZyA9IDEwO1xyXG4gICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcblxyXG4gIHZhciBzb3VuZHMgPSB7XHJcbiAgICBvbjogbmV3IEF1ZGlvKCdvbi53YXYnKSxcclxuICAgIG9mZjogbmV3IEF1ZGlvKCdvZmYud2F2JyksXHJcbiAgICBzd2l0Y2g6IG5ldyBBdWRpbygnc3dpdGNoLndhdicpLFxyXG4gIH07XHJcblxyXG5cclxuICB2YXIgZXhlcmNpc2VzID0gW1xyXG4gICAge25hbWU6ICdKdW1waW5nIEphY2tzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnV2FsbCBTaXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnQ3J1bmNoJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU3RlcC1VcCcsIHNwbGl0OiB0cnVlfSxcclxuICAgIHtuYW1lOiAnU3F1YXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdUcmljZXBzIERpcCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1BsYW5rJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnSGlnaCBLbmVlcycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0x1bmdlJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUHVzaC1VcCB3aXRoIFJvdGF0aW9uJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU2lkZSBQbGFuaycsIHNwbGl0OiB0cnVlfVxyXG4gIF07XHJcblxyXG4gIHZhciBleGVyY2lzaW5nO1xyXG5cclxuICAkc2NvcGUucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoZXhlcmNpc2VzLmxlbmd0aCAtIE1hdGguZmxvb3IoJHNjb3BlLnRpbWVSZW1haW5pbmcgLyAoJHNjb3BlLnRpbWVFeGVyY2lzaW5nICsgJHNjb3BlLnRpbWVSZXN0aW5nKSkpICsgJy8nICsgZXhlcmNpc2VzLmxlbmd0aDtcclxuICB9O1xyXG5cclxuICAkc2NvcGUud29ya291dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGV4Y2VyY2lzZVRpbWUgPSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3Rpbmc7XHJcbiAgICBpZiAoISRzY29wZS50aW1lUmVtYWluaW5nKSB7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gZXhlcmNpc2VzLmxlbmd0aCAqIGV4Y2VyY2lzZVRpbWU7XHJcbiAgICAgIGV4ZXJjaXNpbmcgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZy0tO1xyXG4gICAgICAgIGlmICgkc2NvcGUudGltZVJlbWFpbmluZyA9PT0gMCkge1xyXG4gICAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICdGaW5pc2hlZCEgQ29uZ3JhdHMhJywgc3BsaXQ6IGZhbHNlfTtcclxuICAgICAgICAgICRzY29wZS50aW1lciA9ICcnO1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VycmVudEV4ZXJjaXNlID0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvIGV4Y2VyY2lzZVRpbWUpO1xyXG4gICAgICAgIHZhciB0aW1lciA9ICRzY29wZS50aW1lUmVtYWluaW5nIC0gY3VycmVudEV4ZXJjaXNlICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgICAkc2NvcGUudGltZXIgPSB0aW1lciA+ICRzY29wZS50aW1lRXhlcmNpc2luZyA/IHRpbWVyIC0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nIDogdGltZXI7XHJcbiAgICAgICAgaWYgKHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nKSB7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS5leGVyY2lzZSA9IGV4ZXJjaXNlc1tleGVyY2lzZXMubGVuZ3RoIC0gY3VycmVudEV4ZXJjaXNlIC0gMV07XHJcbiAgICAgICAgaWYgKHRpbWVyID09PSAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgIHNvdW5kcy5vbi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aW1lciA9PT0gMCkge1xyXG4gICAgICAgICAgc291bmRzLm9mZi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkc2NvcGUuZXhlcmNpc2Uuc3BsaXQgJiYgdGltZXIgPT09IE1hdGguZmxvb3IoJHNjb3BlLnRpbWVFeGVyY2lzaW5nIC8gMikpIHtcclxuICAgICAgICAgIHNvdW5kcy5zd2l0Y2gucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChleGVyY2lzaW5nKTtcclxuICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICcnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdDYXRlZ29yaWVzU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRDYXRlZ29yaWVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9jYXRlZ29yaWVzJyk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFRhc2tzID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5KTtcclxuICB9O1xyXG5cclxuICBzdmMuYWRkQ2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJywgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRUYXNrID0gZnVuY3Rpb24gKGNhdGVnb3J5LCB0YXNrKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9jYXRlZ29yaWVzLycgKyBjYXRlZ29yeSArICcvdGFza3MnLCB0YXNrKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2V0UHJpb3JpdHlMaXN0ID0gZnVuY3Rpb24obGlzdCkge1xyXG4gICAgc3ZjLmNob2ljZXMgPSBsaXN0O1xyXG4gICAgc3ZjLnByaW9yaXR5TGlzdCA9IFtdO1xyXG4gICAgLy9NYWtlIGEgbmV3IGNob2ljZSBsaXN0XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgbGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHZhciByYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHN2Yy5wcmlvcml0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgIGZpcnN0Q2hvaWNlOiBsaXN0W3JhbmRvbSA9PT0gMCA/IGkgOiBqXS5uYW1lLFxyXG4gICAgICAgICAgc2Vjb25kQ2hvaWNlOiBsaXN0W3JhbmRvbSA9PT0gMCA/IGogOiBpXS5uYW1lLFxyXG4gICAgICAgICAgY2hvaWNlOiAnJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzaHVmZmxlKHN2Yy5wcmlvcml0eUxpc3QpO1xyXG4gICAgZm9yIChpIGluIHN2Yy5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgc3ZjLnByaW9yaXR5TGlzdFtpXS5pZCA9IGkgKyAxO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICByZXR1cm4gc3ZjLnByaW9yaXR5TGlzdDtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBzaHVmZmxlKGFycmF5KSB7XHJcbiAgICB2YXIgbSA9IGFycmF5Lmxlbmd0aCwgdCwgaTtcclxuICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxl4oCmXHJcbiAgICB3aGlsZSAobSkge1xyXG4gICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnTigKZcclxuICAgICAgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG0tLSk7XHJcbiAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cclxuICAgICAgLy9hcnJheVttXS5maXJzdENob2ljZTtcclxuICAgICAgdCA9IGFycmF5W21dO1xyXG4gICAgICBhcnJheVttXSA9IGFycmF5W2ldO1xyXG4gICAgICBhcnJheVtpXSA9IHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnRW1haWxTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLnNlbmQgPSBmdW5jdGlvbiAoZW1haWwpIHtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2VtYWlsJywgZW1haWwpO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLnNlcnZpY2UoJ0ZpbGVTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICAgIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICAgIHN2Yy5nZXRJbWFnZXMgPSBmdW5jdGlvbihmb2xkZXIpIHtcclxuICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9maWxlcy9pbWFnZXMvJyArIGZvbGRlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy5nZXRTb3VuZHMgPSBmdW5jdGlvbihmb2xkZXIpIHtcclxuICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9maWxlcy9zb3VuZHMvJyArIGZvbGRlcik7XHJcbiAgICB9O1xyXG5cclxuICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0dhbWVTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICAgIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICAgIHN2Yy5nZXRIaWdoc2NvcmUgPSBmdW5jdGlvbiAoZ2FtZSwgdXNlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2dhbWVzLycgKyBnYW1lICsgJy8nICsgdXNlciArICcvaGlnaHNjb3JlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy5zZXRIaWdoc2NvcmUgPSBmdW5jdGlvbiAoZ2FtZSwgdXNlciwgc2NvcmUpIHtcclxuICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZ2FtZXMvJyArIGdhbWUgKyAnLycgKyB1c2VyICsgJy9oaWdoc2NvcmUnLCB7XHJcbiAgICAgICAgc2NvcmU6IHNjb3JlXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0xhbmd1YWdlU3ZjJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMubGFuZ3VhZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJFbmdsaXNoXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1nYlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJOZWRlcmxhbmRzXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1ubFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJGcmFuw6dhaXNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWZyXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBzdmMudGV4dCA9IFtcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRU5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiTkxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRlJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gc3ZjLmxhbmd1YWdlc1swXTtcclxuXHJcbiAgc3ZjLnNldExhbmd1YWdlID0gZnVuY3Rpb24gKGxhbmd1YWdlKSB7XHJcbiAgICBzdmMuc2VsZWN0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBzdmMuc2VsZWN0ZWRMYW5ndWFnZTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnUG9zdHNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmZldGNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cycpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGUgPSBmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCBwb3N0KTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UG9zdCA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzLycgKyBwb3N0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiVGVuVGhpbmdzU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0UXVldWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYm90cy90ZW50aGluZ3MvcXVldWVgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdHMgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7XHJcbiAgICB2YXIgdXJsID1cclxuICAgICAgYC9hcGkvdGVudGhpbmdzL2xpc3RzP2AgK1xyXG4gICAgICAob3B0aW9ucy5saW1pdCA/IGAmbGltaXQ9JHtvcHRpb25zLmxpbWl0fWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnBhZ2UgPyBgJnBhZ2U9JHtvcHRpb25zLnBhZ2V9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuc29ydEJ5ID8gYCZzb3J0X2J5PSR7b3B0aW9ucy5zb3J0Qnl9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMub3JkZXJCeSA/IGAmb3JkZXJfYnk9JHtvcHRpb25zLm9yZGVyQnl9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMubGFuZ3VhZ2VzICYmIG9wdGlvbnMubGFuZ3VhZ2VzLmxlbmd0aCA+IDAgPyBgJmxhbmd1YWdlPSR7b3B0aW9ucy5sYW5ndWFnZXMuam9pbihcIixcIil9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuY2F0ZWdvcmllcyAmJiBvcHRpb25zLmNhdGVnb3JpZXMubGVuZ3RoID4gMCA/IGAmY2F0ZWdvcmllcz0ke29wdGlvbnMuY2F0ZWdvcmllcy5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zZWFyY2ggPyBgJnNlYXJjaD0ke29wdGlvbnMuc2VhcmNofWAgOiBcIlwiKTtcclxuICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2NhdGVnb3JpZXNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGFuZ3VhZ2VzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvbGFuZ3VhZ2VzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wdXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkLCBsaXN0KTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlTGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzXCIsIHtcclxuICAgICAgdXNlcjogdXNlcixcclxuICAgICAgbGlzdDogbGlzdCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5kZWxldGVMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucHV0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3ZhbHVlcy9cIiArIHZhbHVlLl9pZCwgdmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3ZhbHVlc1wiLCB2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmRlbGV0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLmRlbGV0ZShcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXMvXCIgKyB2YWx1ZS5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5yZXBvcnRMaXN0ID0gZnVuY3Rpb24gKHVzZXIsIGxpc3QpIHtcclxuICAgICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi9yZXBvcnQvXCIgKyB1c2VyLl9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3RDYXRlZ29yeVN0YXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL3N0YXRzL2NhdGVnb3JpZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3RMYW5ndWFnZVN0YXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL3N0YXRzL2xhbmd1YWdlc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0Qmx1cmJzID0gZnVuY3Rpb24gKGxpc3QsIHR5cGUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9saXN0cy8ke2xpc3QuX2lkfS9ibHVyYnMvJHt0eXBlfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnRvZ2dsZVBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEdhbWUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2dhbWUvJHtpZH1gKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlVzZXJTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFVzZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnMvYWxsXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVCYW4gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3VzZXJzL2Jhbi8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSB0b2tlbjtcclxuICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hdXRoZW50aWNhdGVcIiwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9sb2dpblwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyLl9pZCwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi92ZXJpZmljYXRpb25cIiwge1xyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvcGFzc3dvcmRcIiwge1xyXG4gICAgICBvbGRQYXNzd29yZDogb2xkUGFzc3dvcmQsXHJcbiAgICAgIG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VyLCBuZXdVc2VybmFtZSkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi91c2VybmFtZVwiLCB7XHJcbiAgICAgICAgbmV3VXNlcm5hbWU6IG5ld1VzZXJuYW1lLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmNvbnRyb2xsZXIoJ1F1aXpBbmltYWxzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgRmlsZVN2Yykge1xyXG5cclxuICAgIEZpbGVTdmMuZ2V0U291bmRzKCdhbmltYWxzJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIHNvdW5kOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgNSk7XHJcblxyXG4gICAgJHNjb3BlLmdldFNjb3JlID0gKCkgPT4gYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwubmFtZSA9PT0gYW5pbWFsLmd1ZXNzKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWA7XHJcblxyXG4gICAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwuZ3Vlc3MpLmxlbmd0aCA9PT0gJHNjb3BlLmFuaW1hbHMubGVuZ3RoO1xyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpekdvb2dsZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ2dvb2dsZScpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TG9nb3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdsb2dvcycpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TW92aWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnbW92aWVzJylcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuY29udHJvbGxlcignUXVpelNrZWxldG9uc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIEZpbGVTdmMpIHtcclxuXHJcbiAgICBGaWxlU3ZjLmdldEltYWdlcygnc2tlbGV0b25zJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIGltYWdlOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgMTApO1xyXG5cclxuICAgICRzY29wZS5nZXRTY29yZSA9ICgpID0+IGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAgICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxuICB9KTsiXX0=
