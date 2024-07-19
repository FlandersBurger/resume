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
  $scope.currentUser ? ($("#sex-indicator").offset({
    left: $scope.currentUser.gender.sex / 200 * $("#sex").width() + $("#sex").offset().left
  }), $("#identity-indicator").offset({
    left: $scope.currentUser.gender.identity / 200 * $("#identity").width() + $("#identity").offset().left
  })) : $location.path("/"), $scope.sexes = ["Male", "FtM Male", "Intersex", "MtF Female", "Female"], $scope.identities = ["Man", "Bigender", "Pangender", "Agender", "Polygender", "Genderfluid", "Genderqueer", "Queer", "Woman"], $scope.dateOptions = {
    maxDate: new Date(),
    minDate: new Date(1900, 1, 1),
    initDate: new Date(2e3, 1, 1),
    datepickerMode: "year"
  }, $scope.gender = function (array, percentage) {
    return array[Math.round(percentage / 200 * (array.length - 1))];
  }, $scope.startSlider = function () {}, $scope.dragSlider = function (event, ui, type) {
    $scope.currentUser.gender[type] = Math.round(($("#" + type + "-indicator").offset().left - $("#" + type).offset().left) / ($("#" + type).width() - $("#" + type + "-indicator").width()) * 200), $scope.$apply();
  }, $scope.stopSlider = function () {}, $scope.usernameToggle = !0, $scope.passwordToggle = !0, $scope.toggleUsername = function () {
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
    $scope.currentUser && ($scope.$emit("loading"), UserSvc.updateUser($scope.currentUser).then(function (response) {
      $scope.$emit("update", response.data);
    }));
  }, $scope.$watch("currentUser.flags.length", function (length) {
    $scope.updateUser();
  }), $scope.loadCountries = function ($query) {
    return [{
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
    }].filter(function (country) {
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
          $scope.addValue();
        }, 100);
        break;
      case 13:
        $("#new-blurb").is(":focus") ? $scope.addValue() : $("#new-value").is(":focus") && $("#new-blurb").focus();
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
  $scope.addValue = () => {
    $scope.newItem.value && ($scope.hasDuplicate() ? alert(`${$scope.newItem.value} is already in the list`) : ($scope.newItem.creator = $scope.currentUser._id, $scope.selectedList.values.unshift(JSON.parse(JSON.stringify($scope.newItem))), $scope.selectedList.answers++, $scope.upsertList($scope.selectedList), $scope.newItem.value = "", $scope.newItem.blurb = "")), $("#new-value").focus();
  }, $scope.updateValues = () => {
    $scope.selectedList.values = $scope.selectedList.values.filter(value => value.value), $scope.selectedList.answers = $scope.selectedList.values.length, $scope.upsertList($scope.selectedList, {
      values: $scope.selectedList.values
    });
  }, $scope.deleteValue = ({
    _id
  }) => {
    $scope.selectedList.values = $scope.selectedList.values.filter(value => value._id !== _id), $scope.updateValues();
  }, $scope.upsertList = (list, updates) => {
    if ($scope.saving = !0, list.values.length >= 10 && list.name && list.categories.length > 0) if ("new" !== list._id) {
      let changes = updates || list;
      delete changes._id, TenThingsSvc.updateList({
        ...changes,
        _id: list._id
      }).then(({
        data
      }) => {
        $scope.saving = !1, $scope.lists = $scope.lists.map(list => list._id === data._id ? data : list);
      }, console.error);
    } else TenThingsSvc.saveList($scope.currentUser, $scope.selectedList).then(({
      data
    }) => {
      "new" === $location.search().list && $location.search("list", data._id), $scope.getLists(), $scope.saving = !1;
    }, console.error);
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
    return $http.post("/api/tenthings/lists/" + list._id, list);
  }, svc.saveList = function (user, list) {
    return $http.put("/api/tenthings/lists", {
      user,
      list
    });
  }, svc.reportList = function (user, list) {
    $http.get("/api/tenthings/lists/" + list._id + "/report/" + user._id);
  }, svc.deleteList = function (list) {
    return $http.delete("/api/tenthings/lists/" + list._id);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJjb250cm9sbGVycy9hcHAuY3RybC5qcyIsImNvbnRyb2xsZXJzL2FzdGVyb2lkcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvYnViYmxlcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvY2hhcmFkZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3QuY3RybC5qcyIsImNvbnRyb2xsZXJzL2V4cGVyaWVuY2UuY3RybC5qcyIsImNvbnRyb2xsZXJzL2hvYmJpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xlbW1pbmdzLmN0cmwuanMiLCJjb250cm9sbGVycy9saXN0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbG9naW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3Bvc3RzLmN0cmwuanMiLCJjb250cm9sbGVycy9wcmlvcml0aXplLmN0cmwuanMiLCJjb250cm9sbGVycy9wcm9maWxlLmN0cmwuanMiLCJjb250cm9sbGVycy9za2lsbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvdGVudGhpbmdzYWRtaW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2dhbWUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc29sZC5jdHJsLmpzIiwiY29udHJvbGxlcnMvd29ya291dC5jdHJsLmpzIiwic2VydmljZXMvY2F0ZWdvcmllcy5zdmMuanMiLCJzZXJ2aWNlcy9lbWFpbC5zdmMuanMiLCJzZXJ2aWNlcy9maWxlLnN2Yy5qcyIsInNlcnZpY2VzL2dhbWUuc3ZjLmpzIiwic2VydmljZXMvbGFuZ3VhZ2Uuc3ZjLmpzIiwic2VydmljZXMvcG9zdHMuc3ZjLmpzIiwic2VydmljZXMvdGVudGhpbmdzLnN2Yy5qcyIsInNlcnZpY2VzL3VzZXIuc3ZjLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9hbmltYWxzLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2dvb2dsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9sb2dvcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9tb3ZpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvc2tlbGV0b25zLmN0cmwuanMiXSwibmFtZXMiOlsiZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwIiwiYmFzZSIsImxldHRlcnMiLCJkb21haW5zIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJTdHJpbmciLCJwcm90b3R5cGUiLCJ2YWx1ZSIsInJlZHVjZSIsInJlc3VsdCIsImxldHRlciIsInJlcGxhY2UiLCJ0aGlzIiwiU1BFQ0lBTF9DSEFSQUNURVJTIiwiUmVnRXhwIiwidG9Mb3dlckNhc2UiLCJyZW1vdmVEaWFjcml0aWNzIiwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMiLCJleHRyYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsImRpcmVjdGl2ZSIsIiRkb2N1bWVudCIsInJlc3RyaWN0Iiwic2NvcGUiLCJjbGlja091dHNpZGUiLCJsaW5rIiwiZWwiLCJhdHRyIiwib24iLCJ0YXJnZXQiLCJjb250YWlucyIsIiRhcHBseSIsIiRldmFsIiwiJHN0YXRlIiwiJGNvbXBpbGUiLCIkaW50ZXJwb2xhdGUiLCJnZXRTdHlsZSIsInRlbXBsYXRlU3R5bGVVcmwiLCJzdHlsZSIsImhyZWYiLCJyZWwiLCJtYXRjaCIsImVsZW0iLCJ0ZW1wbGF0ZVN0eWxlcyIsImh0bWwiLCJzdGFydFN5bWJvbCIsImVuZFN5bWJvbCIsImFwcGVuZCIsIiRvbiIsImV2ZW50IiwidG9TdGF0ZSIsInRvUGFyYW1zIiwiZnJvbVN0YXRlIiwiZnJvbVBhcmFtcyIsInN0YXRlcyIsIm5hbWUiLCJwYXJlbnQiLCJnZXQiLCJ2aWV3cyIsIl8iLCJ2aWV3Iiwic3BsaXQiLCJmbGF0IiwiaW5jbHVkZXMiLCJyZXZlcnNlIiwiZ2V0U3R5bGVzIiwiJHNjb3BlIiwiJGxvY2F0aW9uIiwiTGFuZ3VhZ2VTdmMiLCJVc2VyU3ZjIiwibG9naW4iLCJ1c2VyIiwibG9nZ2VkSW4iLCJsb2NhbFN0b3JhZ2UiLCJfaWQiLCJjdXJyZW50VXNlciIsIiQiLCJsb2FkIiwiZmFkZU91dCIsImZhZGVJbiIsImNsb3Nlc3QiLCJ0b2dnbGVDbGFzcyIsImNoZWNrZWQiLCJkb2N1bWVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRoZW1lQ291bnRlciIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImZsaXBUaGVtZSIsInNob3ciLCJoaWRlIiwic2V0VGltZW91dCIsImdldEpTT04iLCJza2lsbHMiLCJmaWx0ZXIiLCJza2lsbCIsImhvYmJpZXMiLCJqb2JzIiwiam9iIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImNoYXJhZGVzIiwiZ2V0VGltZVNwYW4iLCJsYW5ndWFnZXMiLCJzZWxlY3RlZExhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJzZWxlY3RMYW5ndWFnZSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJob3ZlcmRpdiIsImRpdmlkIiwibGVmdCIsImNsaWVudFgiLCJ0b3AiLCJjbGllbnRZIiwiZ2V0RWxlbWVudEJ5SWQiLCJjc3MiLCJ0b2dnbGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJiaXJ0aERhdGUiLCJsb2FkaW5nIiwibG9nb3V0IiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsImNsZWFyIiwiY2F0Y2giLCJlcnJvciIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiY2FwaXRhbGl6ZSIsIkdhbWVTdmMiLCJhbm5vdW5jZSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJmb250IiwiZmlsbFN0eWxlIiwidGV4dEFsaWduIiwic2hvdHMiLCJhc3Rlcm9pZHMiLCJwb3dlcnVwcyIsImV4cGxvc2lvbnMiLCJtYXAiLCJzcGFjZXBpY3MiLCJzcGFjZSIsInBvd2VydXBUeXBlcyIsImFubm91bmNlbWVudCIsImN5Y2xlIiwicm93cyIsImNvbHVtbnMiLCJzaXplIiwiaW1nIiwiSW1hZ2UiLCJhY3RpdmF0ZSIsInNwYWNlc2hpcCIsIm1heFNwZWVkIiwiY29vbGRvd24iLCJjb29sZG93blRpbWUiLCJyYW5nZSIsInNoaWVsZCIsImV4cGxvZGUiLCJzcGF3bkFzdGVyb2lkcyIsInBvd2VydXAiLCJhcnJheSIsInNyYyIsImV4cGxvc2lvbkltYWdlIiwiZXZhbHVhdGVLZXlzIiwicGxheWluZyIsInNob290Iiwicm90YXRpb24iLCJzcGVlZCIsInNjb3JlIiwiU3BhY2VzaGlwIiwiYXV0b1NwYXduIiwid2lkdGgiLCJoZWlnaHQiLCJjYW5ub24iLCJ4IiwieSIsInBvc2l0aW9uIiwiYW5nbGUiLCJpZCIsInJvdW5kIiwiU2hvdCIsIm1vdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZmlsbCIsImFzdGVyb2lkIiwiaGl0IiwiZ2FtZU92ZXIiLCJjb3MiLCJzaW4iLCJsaWZlc3BhbiIsIkFzdGVyb2lkIiwiZ2V0RW50cnlQb3NpdGlvbiIsInJvdGF0aW9uU3BlZWQiLCJFeHBsb3Npb24iLCJzaG90IiwicG9pbnRzIiwic3Bhd25Qb3dlcnVwIiwib2JqZWN0IiwiUG93ZXJ1cCIsImRlbGF5Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImNvbHVtbiIsInJvdyIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJncmlkWCIsImdyaWRZIiwib2JqZWN0MSIsIm9iamVjdDIiLCJrZXlzIiwiYW1vdW50IiwiaGlnaHNjb3JlIiwic2V0SGlnaHNjb3JlIiwicmVzaXplQ2FudmFzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleUNvZGUiLCJ3aGljaCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXciLCJjbGVhclJlY3QiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwidGFsbHkiLCJmaWxsVGV4dCIsIm1lYXN1cmVUZXh0IiwiYmFja2dyb3VuZEltYWdlIiwiYnViYmxlcyIsImNvbG9ycyIsIkJ1YmJsZSIsInJhZGl1cyIsImV4cGFuZGluZyIsImNpcmN1bWZlcmVuY2UiLCJtYXhSYWRpdXMiLCJ2eCIsInZ5IiwiZmlsdGVyQnViYmxlcyIsImJ1YmJsZSIsInNlbGVjdFdvcmQiLCJjYXRlZ29yeSIsIndvcmQiLCJFbWFpbFN2YyIsIm9wdGlvbnMiLCJ0ZXh0IiwiY29udGFjdCIsImVtYWlsIiwicGhvbmUiLCJhYm91dCIsIm1lc3NhZ2UiLCJzZW5kaW5nIiwic2VudCIsInN0YXR1cyIsImVyciIsImdldFNraWxsIiwic2tpbGxDb2RlIiwiY29kZSIsIiR3aW5kb3ciLCJob2JieVNlbGVjdG9yVmlzaWJsZSIsInNlbGVjdGVkSG9iYnkiLCJzZWxlY3RIb2JieSIsImhvYmJ5Iiwic2hvd0hvYmJ5IiwiaW5kZXgiLCJpbWFnZXMiLCJMRUZUIiwiUklHSFQiLCJsZW1taW5nc0ltYWdlIiwiZGVjb3JJbWFnZSIsImxlbW1pbmdzIiwic3RhcnRlZCIsImFjdGlvbnMiLCJ3YWxrIiwic3RhcnQiLCJlbmQiLCJodWgiLCJmYWxsIiwiZmx5Iiwic3RvcCIsImNsaW1iIiwiYnVpbGQiLCJwdW5jaCIsImRpZyIsIkxlbW1pbmciLCJpbml0IiwiYWN0IiwiYWN0aW9uIiwiYW5pbWF0aW9uIiwic2NhbGUiLCJoYXRjaCIsIm9wZW4iLCJyZWN0IiwiQ2F0ZWdvcmllc1N2YyIsInNob3dDYXRlZ29yeSIsImdldENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidGFza3MiLCJqIiwidGFzayIsInNlbGVjdENhdGVnb3J5Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdGVkVGFza3MiLCJzZWxlY3RhYmxlVGFza3MiLCJlbnRlcmVkQ2F0ZWdvcnkiLCJuZXdDYXRlZ29yeSIsImZvdW5kIiwiYWRkQ2F0ZWdvcnkiLCJuZXdUYXNrIiwic2VsZWN0VGFzayIsImFkZFRhc2siLCJlbnRlcmVkVGFzayIsInJlbW92ZVRhc2siLCJ1bnNlbGVjdFRhc2siLCJ0YXNrTGlzdCIsInNwbGljZSIsImluZGV4T2YiLCJzdGFydFByaW9yaXRpemluZyIsInNldFByaW9yaXR5TGlzdCIsInBhdGgiLCJnZXRRdWVzdGlvbnMiLCJjb3VudGVyIiwidWkiLCJmaXJlYmFzZXVpIiwiQXV0aFVJIiwic3RhcnRVSSIsImNhbGxiYWNrcyIsInNpZ25JblN1Y2Nlc3MiLCJjcmVkZW50aWFsIiwicmVkaXJlY3RVcmwiLCJnZXRJZFRva2VuIiwiaWRUb2tlbiIsImF1dGhlbnRpY2F0ZSIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJlbWFpbFZlcmlmaWVkIiwiJGVtaXQiLCJtb2RhbCIsInR5cGUiLCJzaWduSW5GYWlsdXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjcmVkIiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJ1aVNob3duIiwiZGlzcGxheSIsInNpZ25JblN1Y2Nlc3NVcmwiLCJzaWduSW5PcHRpb25zIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiUFJPVklERVJfSUQiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsInNpZ25JbkZsb3ciLCJyZXNldCIsIiRmaWx0ZXIiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsImJvZHkiLCJwb3N0IiwiZmV0Y2giLCJwb3N0cyIsImdldFBvc3QiLCJ1bnNoaWZ0IiwicHJpb3JpdHlMaXN0IiwiZ2V0UHJpb3JpdHlMaXN0Iiwic2VsZWN0ZWRRdWVzdGlvbiIsImN1cnJlbnRRdWVzdGlvbiIsImRvbmUiLCJtYWtlQ2hvaWNlIiwiY2hvaWNlIiwiZmlyc3RDaG9pY2UiLCJzZWNvbmRDaG9pY2UiLCJnZXRCdXR0b25WYWx1ZSIsInNlbGVjdFF1ZXN0aW9uIiwicXVlc3Rpb24iLCJnZXRGaWx0ZXJlZFByaW9yaXR5TGlzdCIsImdldENob2ljZXNNYWRlIiwiY2hvaWNlc01hZGUiLCJnZXRCdXR0b25DbGFzcyIsInNob3dDaG9pY2VzIiwiY2hhcnRDbGljayIsImNoYXJ0IiwiZ2V0U2VnbWVudHNBdEV2ZW50Iiwic2hvd1Jlc3VsdHMiLCJyZXNwb25zaXZlIiwic2VnbWVudFNob3dTdHJva2UiLCJzZWdtZW50U3Ryb2tlQ29sb3IiLCJzZWdtZW50U3Ryb2tlV2lkdGgiLCJwZXJjZW50YWdlSW5uZXJDdXRvdXQiLCJhbmltYXRpb25TdGVwcyIsImFuaW1hdGlvbkVhc2luZyIsImFuaW1hdGVSb3RhdGUiLCJhbmltYXRlU2NhbGUiLCJsZWdlbmRUZW1wbGF0ZSIsImNob2ljZXMiLCJ2b3RlcyIsImxhYmVsIiwib2Zmc2V0IiwiZ2VuZGVyIiwic2V4IiwiaWRlbnRpdHkiLCJzZXhlcyIsImlkZW50aXRpZXMiLCJkYXRlT3B0aW9ucyIsIm1heERhdGUiLCJtaW5EYXRlIiwiaW5pdERhdGUiLCJkYXRlcGlja2VyTW9kZSIsInBlcmNlbnRhZ2UiLCJzdGFydFNsaWRlciIsImRyYWdTbGlkZXIiLCJzdG9wU2xpZGVyIiwidXNlcm5hbWVUb2dnbGUiLCJwYXNzd29yZFRvZ2dsZSIsInRvZ2dsZVVzZXJuYW1lIiwibmV3VXNlcm5hbWUiLCJ1c2VybmFtZSIsInRvZ2dsZVBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJjaGVja1Bhc3N3b3JkIiwicGFzc3dvcmQiLCJvcmlnaW5hbEJnIiwiYW5pbWF0ZSIsImJhY2tncm91bmRDb2xvciIsImNoYW5nZVBhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJjaGFuZ2VVc2VybmFtZSIsInVwZGF0ZVVzZXIiLCIkd2F0Y2giLCJsb2FkQ291bnRyaWVzIiwiJHF1ZXJ5IiwiZmxhZyIsInRpZGJpdCIsImNvdW50cnkiLCJzZWxlY3RlZFNraWxsIiwic2tpbGxzVmlzaWJsZSIsInByb2plY3RzIiwibGFiZWxzIiwiZW1wbG95ZXIiLCJjb25jYXQiLCJmaWx0ZXJlZFByb2plY3RzIiwicHJvamVjdCIsInNldFNlbGVjdGVkU2tpbGwiLCJjaGFydE9wdGlvbnMiLCJjdXRvdXRQZXJjZW50YWdlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRvb2x0aXBzIiwiY2hhcnRTdHlsZSIsImltYWdlIiwiVGVuVGhpbmdzU3ZjIiwicGFnZSIsImxpc3RzIiwic2VhcmNoIiwibmV3SXRlbSIsImxhbmd1YWdlRmlsdGVyIiwiY2F0ZWdvcnlGaWx0ZXIiLCJzZWxlY3RlZExpc3QiLCJ1bmRlZmluZWQiLCJleGhhdXN0ZWQiLCJrZXlEb3duIiwiaXMiLCJhZGRWYWx1ZSIsImZvY3VzIiwiYWRkTGlzdCIsImN1cnJlbnRMYW5ndWFnZSIsImNyZWF0b3IiLCJ2YWx1ZXMiLCJhbnN3ZXJzIiwiaXNEeW5hbWljIiwic2V0U2VsZWN0ZWRMaXN0IiwibGlzdCIsImdldExpc3QiLCJnZXRMYW5ndWFnZXMiLCJnZXRMaXN0cyIsInZhbHVlT3JkZXIiLCJmaWVsZCIsIm9yZGVyIiwib3JkZXJCeSIsImdldE1vcmVMaXN0cyIsImFzeW5jIiwic2V0TGFuZ3VhZ2VGaWx0ZXIiLCJzZXRDYXRlZ29yeUZpbHRlciIsInRvZ2dsZUNhdGVnb3J5RmlsdGVyIiwiYWxsQ2F0ZWdvcmllcyIsInNvcnRCeSIsImxpbWl0IiwibmV4dFBhZ2UiLCJoYXNEdXBsaWNhdGUiLCJhbGVydCIsInVwc2VydExpc3QiLCJibHVyYiIsInVwZGF0ZVZhbHVlcyIsImRlbGV0ZVZhbHVlIiwidXBkYXRlcyIsInNhdmluZyIsImNoYW5nZXMiLCJ1cGRhdGVMaXN0Iiwic2F2ZUxpc3QiLCJkZWxldGVMaXN0IiwiY29uZmlybSIsIm5vbkVuZ2xpc2hJbmRleCIsInNldERpZmZpY3VsdHkiLCJkaWZmaWN1bHR5Iiwic2V0RnJlcXVlbmN5IiwiZnJlcXVlbmN5Iiwic2V0Q2F0ZWdvcnkiLCJjYXRlZ29yeUluZGV4Iiwic29tZSIsImFuc3dlciIsInJlbW92ZUFsbEJ1dExldHRlcnMiLCJnZXRCbHVyYnMiLCJnZXR0aW5nQmx1cmJzIiwiYWRtaW4iLCJnZXRVc2VycyIsImdldFF1ZXVlIiwicXVldWUiLCJnZXRQYXVzZSIsInBhdXNlZCIsInVzZXJzIiwidG9nZ2xlQmFuIiwidG9nZ2xlUGF1c2UiLCIkc3RhdGVQYXJhbXMiLCJnYW1lIiwiZ2V0R2FtZSIsImZsYXNoIiwiZWxlbWVudCIsImNvbG9yIiwic2VhcmNoTmFtZSIsInNldFVzZXJGaWx0ZXIiLCJ1c2VyRmlsdGVyIiwic2V0VXBkYXRlRmlsdGVyIiwidXBkYXRlRmlsdGVyIiwiZmlsdGVyZWRMaXN0cyIsImNhdGVnb3J5RmlsdGVycyIsImxhbmd1YWdlRmlsdGVycyIsInNlbGVjdExpc3QiLCJsaXN0T3JkZXIiLCJzb3J0ZXIiLCJzb3J0RmllbGQiLCJzb3J0TGFiZWwiLCJnZXRMYW5ndWFnZUNvdW50IiwiY291bnQiLCJnZXRDYXRlZ29yeUNvdW50IiwiZ2V0VXBkYXRlQ291bnQiLCJ1c2VyRmlsdGVycyIsIkFsbCIsImxpc3QxIiwibGlzdDIiLCJ1c2VyQ291bnQiLCJnZXRDYXRlZ29yeUNsYXNzIiwidG9nZ2xlQ2F0ZWdvcnkiLCJyZXBvcnRMaXN0IiwicmVwb3J0ZWQiLCJsaXN0QnV0dG9uQ2xhc3MiLCJibHVyYnMiLCJkZXNjcmlwdGlvbiIsInRpbWVSZW1haW5pbmciLCJ0aW1lRXhlcmNpc2luZyIsInRpbWVSZXN0aW5nIiwicmVzdCIsImV4ZXJjaXNpbmciLCJzb3VuZHMiLCJBdWRpbyIsIm9mZiIsInN3aXRjaCIsImV4ZXJjaXNlcyIsInByb2dyZXNzIiwid29ya291dCIsImV4Y2VyY2lzZVRpbWUiLCJjbGVhckludGVydmFsIiwidGltZXIiLCJleGVyY2lzZSIsInNldEludGVydmFsIiwiY3VycmVudEV4ZXJjaXNlIiwicGxheSIsIiRodHRwIiwic3ZjIiwiZ2V0VGFza3MiLCJ0IiwibSIsInNodWZmbGUiLCJnZXRJbWFnZXMiLCJmb2xkZXIiLCJnZXRTb3VuZHMiLCJnZXRIaWdoc2NvcmUiLCJqb2luIiwicHV0IiwiZGVsZXRlIiwiZ2V0VXNlciIsInNldFRva2VuIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJjcmVhdGVVc2VyIiwiRmlsZVN2YyIsImFuaW1hbHMiLCJhbmltYWwiLCJzb3VuZCIsInN1YnN0cmluZyIsImdldFJhbmRvbUFuaW1hbHMiLCJndWVzcyIsImdldFNjb3JlIiwiaXNTY29yZVZpc2libGUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUFBLDJCQUFBQSxHQUFBLENBQ0E7SUFDQUMsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLENBQUE7RUFHQUMsT0FBQUEsR0FBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsTUFBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsQ0FBQTtBQUdBQyxNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGtCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBUiwyQkFBQUEsQ0FBQVMsTUFBQUEsQ0FBQSxDQUFBQyxNQUFBQSxFQUFBQyxNQUFBQSxLQUNBRCxNQUFBQSxDQUFBRSxPQUFBQSxDQUFBRCxNQUFBQSxDQUFBVCxPQUFBQSxFQUFBUyxNQUFBQSxDQUFBVixJQUFBQSxDQUFBQSxFQUNBWSxJQUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUE7QUFHQSxNQUFBQyxrQkFBQUEsR0FBQSxxQ0FBQTtBQUVBVixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLHlCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBRCxPQUFBQSxDQUFBLElBQUFHLE1BQUFBLENBQUEsSUFBQUQsa0JBQUFBLEdBQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsRUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQVYsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxxQkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUcsV0FBQUEsRUFBQUEsQ0FBQUMsZ0JBQUFBLEVBQUFBLENBQUFDLHVCQUFBQSxFQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWQsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxTQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBVyxLQUFBQSxFQUFBQTtJQUNBLE9BQUFOLElBQUFBLENBQUFELE9BQUFBLENBQUEsSUFBQUcsTUFBQUEsQ0FBQSxLQUFBRCxrQkFBQUEsR0FBQUssS0FBQUEsR0FBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxHQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBZixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFlBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFPLE1BQUFBLENBQUEsQ0FBQSxDQUFBLENBQUFDLFdBQUFBLEVBQUFBLEdBQUFSLElBQUFBLENBQUFTLEtBQUFBLENBQUEsQ0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWxCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsWUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLENBQUFBLE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsZUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLENBQUFBLE9BQUFBLENBQUEsR0FBQSxFQUFBLE1BQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsY0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQWUsSUFBQUEsRUFBQVgsT0FBQUEsRUFBQUE7SUFFQSxLQURBLElBQUFZLGFBQUFBLEdBQUFYLElBQUFBLEVBQ0FZLENBQUFBLEdBQUEsQ0FBQSxFQUFBQSxDQUFBQSxHQUFBRixJQUFBQSxDQUFBRyxNQUFBQSxFQUFBRCxDQUFBQSxFQUFBQSxFQUNBRCxhQUFBQSxHQUFBQSxhQUFBQSxDQUFBWixPQUFBQSxDQUFBVyxJQUFBQSxDQUFBRSxDQUFBQSxDQUFBQSxFQUFBYixPQUFBQSxDQUFBYSxDQUFBQSxDQUFBQSxDQUFBQTtJQUVBLE9BQUFELGFBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBcEIsTUFBQUEsQ0FBQUMsY0FB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QSxDQUFBLENBRUFGLEtBQUFBLENBQUEsWUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsYUFBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxRQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsWUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsWUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsYUFBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxNQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxPQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGlCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG9CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxlQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxnQkFBQTtJQUNBRSxVQUFBQSxFQUFBLGtCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxtQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsY0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGlCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxhQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsRUFHQUwsaUJBQUFBLENBQUFPLFNBQUFBLENBQUE7SUFDQUMsT0FBQUEsRUFBQUEsQ0FBQSxDQUFBO0lBQ0FDLFdBQUFBLEVBQUFBLENBQUE7RUFBQSxDQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUN6SUFmLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FlLE9BQUFBLENBQUEsY0FBQSxFQUFBLFVBQUFDLFVBQUFBLEVBQUFDLFFBQUFBLEVBQUFBO0VBU0EsSUFBQUMsVUFBQUE7SUFDQUMsT0FBQUEsR0FBQSxTQUFBQSxDQUFBLEVBQUE7TUFBQSxDQUNBRCxVQUFBQSxHQUFBLElBQUFFLFNBQUFBLENBVEEsUUFBQSxLQUFBQyxNQUFBQSxDQUFBQyxRQUFBQSxDQUFBQyxRQUFBQSxHQUNBLFFBQUEsR0FBQUYsTUFBQUEsQ0FBQUMsUUFBQUEsQ0FBQUUsSUFBQUEsR0FFQSxPQUFBLEdBQUFILE1BQUFBLENBQUFDLFFBQUFBLENBQUFFLElBQUFBLENBQUFBLEVBUUFDLE1BQUFBLEdBQUEsWUFBQTtRQUNBQyxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBLHFCQUFBLENBQ0E7TUFBQSxDQUFBLEVBRUFULFVBQUFBLENBQUFVLE9BQUFBLEdBQUEsVUFBQUMsQ0FBQUEsRUFBQUE7UUFDQUgsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQSxtQ0FBQSxDQUFBLEVBQ0FWLFFBQUFBLENBQUFFLE9BQUFBLEVBQUEsR0FBQSxDQUNBO01BQUEsQ0FBQSxFQUVBRCxVQUFBQSxDQUFBWSxPQUFBQSxHQUFBLFVBQUFELENBQUFBLEVBQUFBO1FBQ0FILE9BQUFBLENBQUFDLEdBQUFBLENBQUEsU0FBQSxHQUFBRSxDQUFBQSxHQUFBLFlBQUEsR0FBQVgsVUFBQUEsQ0FBQWEsVUFBQUEsQ0FDQTtNQUFBLENBQUEsRUFFQWIsVUFBQUEsQ0FBQWMsU0FBQUEsR0FBQSxVQUFBSCxDQUFBQSxFQUFBQTtRQUNBLElBQUFJLE9BQUFBLEdBQUFDLElBQUFBLENBQUFDLEtBQUFBLENBQUFOLENBQUFBLENBQUFPLElBQUFBLENBQUFBO1FBQ0FwQixVQUFBQSxDQUFBcUIsVUFBQUEsQ0FBQSxLQUFBLEdBQUFKLE9BQUFBLENBQUFLLEtBQUFBLEVBQUFMLE9BQUFBLENBQUFHLElBQUFBLENBQ0E7TUFBQSxDQUNBO0lBQUEsQ0FBQTtFQUVBcEUsSUFBQUEsQ0FBQXVFLElBQUFBLEdBQUEsVUFBQUQsS0FBQUEsRUFBQUYsSUFBQUEsRUFBQUE7SUFDQSxJQUFBSSxJQUFBQSxHQUFBTixJQUFBQSxDQUFBTyxTQUFBQSxDQUFBO01BQUFILEtBQUFBO01BQUFGO0lBQUFBLENBQUFBLENBQUFBO0lBQ0FsQixVQUFBQSxDQUFBcUIsSUFBQUEsQ0FBQUMsSUFBQUEsQ0FDQTtFQUFBLENBQUEs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O0lBQ0FDLEdBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFNBQUFBLEdBQUEsRUFBQTtJQUNBQyxLQUFBQSxHQUFBOUQsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQUQsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQThELFNBQUFBLENBQUFBO0lBQ0FFLFlBQUFBLEdBQUEsQ0FDQTtNQUNBbkcsSUFBQUEsRUFBQSxPQUFBO01BQ0FvRyxZQUFBQSxFQUFBLGFBQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0EzTSxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQW1NLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBQSxTQUFBQSxDQUFBQyxRQUFBQSxJQUFBLEdBQ0E7TUFBQTtJQUFBLENBQUEsRUFFQTtNQUNBN0csSUFBQUEsRUFBQSxVQUFBO01BQ0FvRyxZQUFBQSxFQUFBLFlBQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0EzTSxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQW1NLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBQSxTQUFBQSxDQUFBRSxRQUFBQSxHQUFBLENBQUEsS0FDQUYsU0FBQUEsQ0FBQUcsWUFBQUEsSUFBQSxDQUFBLENBRUE7TUFBQTtJQUFBLENBQUEsRUFFQTtNQUNBL0csSUFBQUEsRUFBQSxPQUFBO01BQ0FvRyxZQUFBQSxFQUFBLGdCQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQTtRQUNBM00sQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFtTSxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUksS0FBQUEsSUFBQSxDQUNBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQWhILElBQUFBLEVBQUEsUUFBQTtNQUNBb0csWUFBQUEsRUFBQSxRQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBM00sQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFtTSxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUssTUFBQUEsR0FBQUEsQ0FBQSxDQUNBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQWpILElBQUFBLEVBQUEsTUFBQTtNQUNBb0csWUFBQUEsRUFBQSxNQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBM00sQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFtTSxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7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Q0FBQSxHQUFBLEdBQUEsR0FBQXpKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXdKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FILFFBQUFBLENBQUFFLFlBQUFBLENBQUEsS0FBQSxFQUFBLE1BQUEsR0FBQXhKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXdKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBekosSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBd0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUF6SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUF3SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUFBLE1BQUEsRUFBQSxNQUFBLEdBQUF4SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUF3SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXpKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQXdKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBekosSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBd0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFDQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQSxHQUFBeEosSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBd0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUF6SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUF3SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXpKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXdKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0F0RyxHQUFBQSxDQUFBRyxTQUFBQSxHQUFBZ0csUUFBQUEsRUFDQW5HLEdBQUFBLENBQUFFLElBQUFBLEdBQUEsY0FBQSxFQUNBRixHQUFBQSxDQUFBdUcsUUFBQUEsQ0FBQSxXQUFBLEVBQUF4RyxNQUFBQSxDQUFBMEMsS0FBQUEsR0FBQSxDQUFBLEdBQUF6QyxHQUFBQSxDQUFBd0csV0FBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQS9ELEtBQUFBLEdBQUEsQ0FBQSxFQUFBMUMsTUFBQUEsQ0FBQTJDLE1BQUFBLEdBQUEsQ0FBQSxDQUFBLEVBQ0ExQyxHQUFBQSxDQUFBRSxJQUFBQSxHQUFBLGNBQUEsRUFDQUYsR0FBQUEsQ0FBQXVHLFFBQUFBLENBQUEsc0JBQUEsRUFBQXhHLE1BQUFBLENBQUEwQyxLQUFBQSxHQUFBLENBQUEsR0FBQXpDLEdBQUFBLENBQUF3RyxXQUFBQSxDQUFBLHNCQUFBLENBQUEsQ0FBQS9ELEtBQUFBLEdBQUEsQ0FBQSxFQUFBMUMsTUFBQUEsQ0FBQTJDLE1BQUFBLEdBQUEsQ0FBQSxHQUFBLEVBQUEsQ0FBQSxFQUNBMUMsR0FBQUEsQ0FBQXVHLFFBQUFBLENBQUEsNENBQUEsRUFBQXhHLE1BQUFBLENBQUEwQyxLQUFBQSxHQUFBLENBQUEsR0FBQXpDLEdBQUFBLENBQUF3RyxXQUFBQSxDQUFBLDRDQUFBLENBQUEsQ0FBQS9ELEtBQUFBLEdBQUEsQ0FBQSxFQUFBMUMsTUFBQUEsQ0FBQTJDLE1BQUFBLEdBQUEsRUFBQSxDQUNBO0lBQUE7SUFBQSxDQUNBNEQsS0FBQUEsSUFBQXZSLFNBQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUNBLEdBQUEsSUFDQXVSLEtBQUFBLEdBQUEsR0FBQSxFQUNBdlIsU0FBQUEsR0FBQUEsQ0FBQSxDQUFBLElBQ0F1UixLQUFBQSxHQUFBLENBQUEsS0FDQUEsS0FBQUEsR0FBQSxDQUFBLEVBQ0F2UixTQUFBQSxHQUFBQSxDQUFBLENBQUEsQ0FBQTtJQUVBaVIscUJBQUFBLENBQUFDLElBQUFBLENBQ0E7RUFBQSxDQUFBLENBQUE7RUFuREEsSUFBQUssS0FBQUEsR0FBQSxDQUFBO0lBQ0F2UixTQUFBQSxHQUFBQSxDQUFBLENBQUE7RUFvREFxRyxNQUFBQSxDQUFBdUYsS0FBQUEsR0FBQSxZQUFBO0lBQ0EsT0FBQTtNQUNBOEYsZUFBQUEsRUFBQSxzQkFBQSxHQUFBOUYsS0FBQUEsR0FBQTtJQUFBLENBRUE7RUFBQSxDQUlBO0FBQUEsQ0FBQSxDQUFBLEVDL2tCQWxMLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FXLFVBQUFBLENBQUEsYUFBQSxFQUFBLFVBQUErRSxNQUFBQSxFQUFBQTtFQUVBLElBQUEyRSxNQUFBQSxHQUFBMUQsUUFBQUEsQ0FBQXFDLGNBQUFBLENBQUEsY0FBQSxDQUFBO0lBQ0FzQixHQUFBQSxHQUFBRCxNQUFBQSxDQUFBRSxVQUFBQSxDQUFBLElBQUEsQ0FBQTtJQUNBeUcsT0FBQUEsR0FBQSxFQUFBO0lBQ0FDLE1BQUFBLEdBQUEsQ0FBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxDQUFBO0VBRUEsU0FBQUMsTUFBQUEsQ0FBQUEsRUFBQUE7SUFDQWxULElBQUFBLENBQUFzUSxRQUFBQSxHQUFBLENBQUEsRUFDQXRRLElBQUFBLENBQUFtVCxNQUFBQSxHQUFBLENBQUEsRUFDQW5ULElBQUFBLENBQUFvVCxTQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQXBULElBQUFBLENBQUEyTyxLQUFBQSxHQUFBeEYsSUFBQUEsQ0FBQW9HLEtBQUFBLENBQUEsQ0FBQSxHQUFBcEcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsQ0FBQUEsRUFDQWxKLElBQUFBLENBQUFxVCxhQUFBQSxHQUFBbEssSUFBQUEsQ0FBQW9HLEtBQUFBLENBQUEsRUFBQSxHQUFBcEcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsQ0FBQUEsR0FBQSxDQUFBLEVBQ0FsSixJQUFBQSxDQUFBc1QsU0FBQUEsR0FBQW5LLElBQUFBLENBQUFvRyxLQUFBQSxDQUFBLEdBQUEsR0FBQXBHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLENBQUFBLEdBQUEsRUFBQSxFQUNBbEosSUFBQUEsQ0FBQWtQLENBQUFBLEdBQUEvRixJQUFBQSxDQUFBb0csS0FBQUEsQ0FBQXBHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUFtRCxNQUFBQSxDQUFBMEMsS0FBQUEsQ0FBQUEsRUFDQS9PLElBQUFBLENBQUFtUCxDQUFBQSxHQUFBaEcsSUFBQUEsQ0FBQW9HLEtBQUFBLENBQUFwRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBbUQsTUFBQUEsQ0FBQTJDLE1BQUFBLENBQUFBLEVBQ0FoUCxJQUFBQSxDQUFBdVQsRUFBQUEsR0FBQXBLLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLElBQUEsRUFBQSxHQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsRUFDQWxKLElBQUFBLENBQUF3VCxFQUFBQSxHQUFBckssSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsSUFBQSxFQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FDQTtFQUFBO0VBK0JBb0oscUJBQUFBLENBZkEsU0FBQW1CLGFBQUFBLENBQUFBLEVBQUFBO0lBQ0FULE9BQUFBLENBQUF4UixJQUFBQSxDQUFBLElBQUEwUixNQUFBQSxHQUFBQSxFQUNBRixPQUFBQSxHQUFBQSxPQUFBQSxDQUFBckosTUFBQUEsQ0FBQSxVQUFBK0osTUFBQUEsRUFBQUE7TUFPQSxPQU5BQSxNQUFBQSxDQUFBUCxNQUFBQSxLQUFBTyxNQUFBQSxDQUFBSixTQUFBQSxLQUNBSSxNQUFBQSxDQUFBTixTQUFBQSxHQUFBQSxDQUFBLENBQUEsQ0FBQSxFQUVBTSxNQUFBQSxDQUFBeEUsQ0FBQUEsSUFBQXdFLE1BQUFBLENBQUFILEVBQUFBLEdBQUFHLE1BQUFBLENBQUEvRSxLQUFBQSxFQUNBK0UsTUFBQUEsQ0FBQXZFLENBQUFBLElBQUF1RSxNQUFBQSxDQUFBRixFQUFBQSxHQUFBRSxNQUFBQSxDQUFBL0UsS0FBQUEsRUFDQStFLE1BQUFBLENBQUFQLE1BQUFBLElBQUFPLE1BQUFBLENBQUFOLFNBQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxFQUNBTSxNQUFBQSxDQUFBUCxNQUFBQSxHQUFBLENBQ0E7SUFBQSxDQUFBLENBQUEsRUF2QkE3RyxHQUFBQSxDQUFBa0csU0FBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBbkcsTUFBQUEsQ0FBQTBDLEtBQUFBLEVBQUExQyxNQUFBQSxDQUFBMkMsTUFBQUEsQ0FBQUEsRUFDQWdFLE9BQUFBLENBQUFuUixPQUFBQSxDQUFBLFVBQUE2UixNQUFBQSxFQUFBQTtNQUNBVCxNQUFBQSxDQUFBOUosSUFBQUEsQ0FBQW9HLEtBQUFBLENBQUEwRCxNQUFBQSxDQUFBcFMsTUFBQUEsR0FBQTZTLE1BQUFBLENBQUFQLE1BQUFBLEdBQUFPLE1BQUFBLENBQUFKLFNBQUFBLENBQUFBLENBQUFBLEVBQ0FoSCxHQUFBQSxDQUFBb0QsU0FBQUEsRUFBQUEsRUFDQXBELEdBQUFBLENBQUFxRCxHQUFBQSxDQUFBK0QsTUFBQUEsQ0FBQXhFLENBQUFBLEVBQUF3RSxNQUFBQSxDQUFBdkUsQ0FBQUEsRUFBQXVFLE1BQUFBLENBQUFQLE1BQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsR0FBQWhLLElBQUFBLENBQUF5RyxFQUFBQSxDQUFBQSxFQUNBdEQsR0FBQUEsQ0FBQUcsU0FBQUEsR0FBQXdHLE1BQUFBLENBQUE5SixJQUFBQSxDQUFBb0csS0FBQUEsQ0FBQTBELE1BQUFBLENBQUFwUyxNQUFBQSxHQUFBNlMsTUFBQUEsQ0FBQVAsTUFBQUEsR0FBQU8sTUFBQUEsQ0FBQUosU0FBQUEsQ0FBQUEsQ0FBQUEsRUFDQWhILEdBQUFBLENBQUEwRCxJQUFBQSxFQUFBQSxFQUNBMUQsR0FBQUEsQ0FBQXVELFdBQUFBLEdBQUFvRCxNQUFBQSxDQUFBQSxNQUFBQSxDQUFBcFMsTUFBQUEsR0FBQXNJLElBQUFBLENBQUFvRyxLQUFBQSxDQUFBMEQsTUFBQUEsQ0FBQXBTLE1BQUFBLEdBQUE2UyxNQUFBQSxDQUFBUCxNQUFBQSxHQUFBTyxNQUFBQSxDQUFBSixTQUFBQSxDQUFBQSxDQUFBQSxFQUNBaEgsR0FBQUEsQ0FBQXdELFNBQUFBLEdBQUE0RCxNQUFBQSxDQUFBTCxhQUFBQSxHQUFBSyxNQUFBQSxDQUFBUCxNQUFBQSxHQUFBTyxNQUFBQSxDQUFBSixTQUFBQSxFQUNBaEgsR0FBQUEsQ0FBQXlELE1BQUFBLEVBQ0E7SUFBQSxDQUFBLENBQUEsRUFlQXVDLHFCQUFBQSxDQUFBbUIsYUFBQUEsQ0FDQTtFQUFBLENBQUEsQ0FBQSxFQUtBLFlBQUE7SUFrQkEsU0FBQXpCLFlBQUFBLENBQUFBLEVBQUFBO01BQ0EzRixNQUFBQSxDQUFBMEMsS0FBQUEsR0FBQTFMLE1BQUFBLENBQUE0TyxVQUFBQSxFQUNBNUYsTUFBQUEsQ0FBQTJDLE1BQUFBLEdBQUEzTCxNQUFBQSxDQUFBNk8sV0FBQUEsSUFBQTdGLE1BQUFBLENBQUEwQyxLQUFBQSxJQUFBLEdBQUEsR0FBQSxFQUFBLEdBQUEsR0FBQSxDQUNBO0lBQUE7SUFYQTFMLE1BQUFBLENBQUE4TyxnQkFBQUEsQ0FBQSxRQUFBLEVBQUFILFlBQUFBLEVBQUFBLENBQUEsQ0FBQSxDQUFBLEVBR0FBLFlBQUFBLEVBVUE7RUFBQSxDQXZCQSxFQTJCQTtBQUFBLENBQUEsQ0FBQSxFQ2hGQWpRLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQUFXLFVBQUFBLENBQUEsY0FBQSxFQUFBLFVBQUErRSxNQUFBQSxFQUFBQTtFQUNBQSxNQUFBQSxDQUFBaU0sVUFBQUEsR0FBQUMsUUFBQUEsSUFBQUE7SUFDQWxNLE1BQUFBLENBQUFtTSxJQUFBQSxHQUNBbk0sTUFBQUEsQ0FBQXdDLFFBQUFBLENBQUEwSixRQUFBQSxDQUFBQSxDQUNBekssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQUQsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQXhCLE1BQUFBLENBQUF3QyxRQUFBQSxDQUFBMEosUUFBQUEsQ0FBQUEsQ0FBQS9TLE1BQUFBLENBQUFBLENBQUFBLEVBRUE2QyxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBK0QsTUFBQUEsQ0FBQW1NLElBQUFBLENBQUE7RUFBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDUkE5UixPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBVyxVQUFBQSxDQUFBLGFBQUEsRUFBQSxVQUFBK0UsTUFBQUEsRUFBQW9NLFFBQUFBLEVBQUFBO0VBQ0FwTSxNQUFBQSxDQUFBcU0sT0FBQUEsR0FBQSxDQUNBO0lBQ0FoTixJQUFBQSxFQUFBLE1BQUE7SUFDQWlOLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQWpOLElBQUFBLEVBQUEsYUFBQTtJQUNBaU4sSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBak4sSUFBQUEsRUFBQSxRQUFBO0lBQ0FpTixJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FqTixJQUFBQSxFQUFBLE9BQUE7SUFDQWlOLElBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsRUFJQXRNLE1BQUFBLENBQUF1TSxPQUFBQSxHQUFBO0lBQ0FDLEtBQUFBLEVBQUEsRUFBQTtJQUNBbk4sSUFBQUEsRUFBQSxFQUFBO0lBQ0FvTixLQUFBQSxFQUFBLEVBQUE7SUFDQUMsS0FBQUEsRUFBQSxFQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBR0EzTSxNQUFBQSxDQUFBbkQsSUFBQUEsR0FBQSxZQUFBO0lBQ0FtRCxNQUFBQSxDQUFBNE0sT0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0E1USxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBLE1BQUEsQ0FBQSxFQUNBbVEsUUFBQUEsQ0FBQXZQLElBQUFBLENBQUE7TUFDQTJQLEtBQUFBLEVBQUF4TSxNQUFBQSxDQUFBdU0sT0FBQUEsQ0FBQUMsS0FBQUE7TUFDQW5OLElBQUFBLEVBQUFXLE1BQUFBLENBQUF1TSxPQUFBQSxDQUFBbE4sSUFBQUE7TUFDQW9OLEtBQUFBLEVBQUF6TSxNQUFBQSxDQUFBdU0sT0FBQUEsQ0FBQUUsS0FBQUE7TUFDQUMsS0FBQUEsRUFBQTFNLE1BQUFBLENBQUF1TSxPQUFBQSxDQUFBRyxLQUFBQTtNQUNBQyxPQUFBQSxFQUFBM00sTUFBQUEsQ0FBQXVNLE9BQUFBLENBQUFJO0lBQUFBLENBQUFBLENBQUFBLENBQ0FsSixJQUFBQSxDQUNBLFVBQUFDLFFBQUFBLEVBQUFBO01BQ0ExRCxNQUFBQSxDQUFBNk0sSUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0E3USxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBLDZCQUFBLEVBQUF5SCxRQUFBQSxDQUFBb0osTUFBQUEsRUFBQXBKLFFBQUFBLENBQUE0SSxJQUFBQSxDQUFBQSxFQUNBdFEsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQXlILFFBQUFBLENBQ0E7SUFBQSxDQUFBLEVBQ0EsVUFBQXFKLEdBQUFBLEVBQUFBO01BQ0EvTSxNQUFBQSxDQUFBNE0sT0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0E1USxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBLGdCQUFBLEVBQUE4USxHQUFBQSxDQUNBO0lBQUEsQ0FBQSxDQUVBO0VBQUEsQ0FDQTtBQUFBLENBQUEsQ0FBQSxFQ2pEQTFTLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FXLFVBQUFBLENBQUEsZ0JBQUEsRUFBQSxVQUFBK0UsTUFBQUEsRUFBQUE7RUFFQUEsTUFBQUEsQ0FBQWdOLFFBQUFBLEdBQUEsVUFBQUMsU0FBQUEsRUFBQUE7SUFDQSxJQUFBak4sTUFBQUEsQ0FBQWdDLE1BQUFBLEVBQ0EsT0FBQWhDLE1BQUFBLENBQUFnQyxNQUFBQSxDQUFBaEosSUFBQUEsQ0FBQSxVQUFBa0osS0FBQUEsRUFBQUE7TUFDQSxPQUFBQSxLQUFBQSxDQUFBZ0wsSUFBQUEsS0FBQUQsU0FDQTtJQUFBLENBQUEsQ0FDQTtFQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUNWQTVTLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FXLFVBQUFBLENBQUEsYUFBQSxFQUFBLFVBQUErRSxNQUFBQSxFQUFBbU4sT0FBQUEsRUFBQUE7RUFFQW5OLE1BQUFBLENBQUFvTixvQkFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBRUExTSxDQUFBQSxDQUFBcUIsT0FBQUEsQ0FBQSx1REFBQSxFQUFBLFVBQUEyQixRQUFBQSxFQUFBQSxDQUVBLENBQUEsQ0FBQSxFQUVBMUQsTUFBQUEsQ0FBQXFOLGFBQUFBLEdBQUFyTixNQUFBQSxDQUFBbUMsT0FBQUEsQ0FBQSxDQUFBLENBQUEsRUFFQW5DLE1BQUFBLENBQUFzTixXQUFBQSxHQUFBLFVBQUFDLEtBQUFBLEVBQUFBO0lBQ0F2TixNQUFBQSxDQUFBcU4sYUFBQUEsR0FBQUUsS0FBQUEsRUFDQXZOLE1BQUFBLENBQUFvTixvQkFBQUEsR0FBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBcE4sTUFBQUEsQ0FBQXdOLFNBQUFBLEdBQUEsVUFBQXZWLEtBQUFBLEVBQUF3VixLQUFBQSxFQUFBL0csS0FBQUEsRUFBQUE7SUFDQSxPQUFBLENBQUEsQ0FBQXpPLEtBQUFBLENBQUF5VixNQUFBQSxJQUNBelYsS0FBQUEsQ0FBQXlWLE1BQUFBLENBQUF2VSxNQUFBQSxHQUFBLENBQ0E7RUFBQSxDQUNBO0FBQUEsQ0FBQSxDQUFBLEVDcEJBa0IsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQVcsVUFBQUEsQ0FBQSxjQUFBLEVBQUEsVUFBQStFLE1BQUFBLEVBQUF5RSxPQUFBQSxFQUFBQTtFQUVBLElBQUFrSixJQUFBQSxHQUFBLENBQUE7SUFDQUMsS0FBQUEsR0FBQSxDQUFBO0lBRUFqSixNQUFBQSxHQUFBMUQsUUFBQUEsQ0FBQXFDLGNBQUFBLENBQUEsZUFBQSxDQUFBO0lBQ0FzQixHQUFBQSxHQUFBRCxNQUFBQSxDQUFBRSxVQUFBQSxDQUFBLElBQUEsQ0FBQTtJQUNBZ0osYUFBQUEsR0FBQSxJQUFBOUgsS0FBQUE7RUFDQThILGFBQUFBLENBQUFsSCxHQUFBQSxHQUFBLHVCQUFBO0VBQ0EsSUFBQW1ILFVBQUFBLEdBQUEsSUFBQS9ILEtBQUFBO0VBQ0ErSCxVQUFBQSxDQUFBbkgsR0FBQUEsR0FBQSxvQkFBQTtFQUNBLElBQUFvSCxRQUFBQSxHQUFBLENBQUEsQ0FBQTtJQUNBQyxPQUFBQSxHQUFBQSxDQUFBLENBQUE7SUFFQUMsT0FBQUEsR0FBQTtNQUNBQyxJQUFBQSxFQUFBO1FBQ0FDLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0F4SSxPQUFBQSxFQUFBLENBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0E3RixPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBdU8sR0FBQUEsRUFBQTtRQUNBRixLQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBeEksT0FBQUEsRUFBQSxDQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBN0YsT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQXdPLElBQUFBLEVBQUE7UUFDQUgsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxFQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXhJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTdGLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUF5TyxHQUFBQSxFQUFBO1FBQ0FKLEtBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F4SSxPQUFBQSxFQUFBLENBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0E3RixPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBME8sSUFBQUEsRUFBQTtRQUNBTCxLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBeEksT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBN0YsT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQTJPLEtBQUFBLEVBQUE7UUFDQU4sS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXhJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTdGLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUE0TyxLQUFBQSxFQUFBO1FBQ0FQLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F4SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0E3RixPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBNk8sS0FBQUEsRUFBQTtRQUNBUixLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBeEksT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBN0YsT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQThPLEdBQUFBLEVBQUE7UUFDQVQsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXhJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTdGLE9BQUFBLEVBQUFBLENBQUE7TUFBQTtJQUFBLENBQUE7RUFJQSxTQUFBK08sT0FBQUEsQ0FB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QTtNQUFBN1ksSUFBQUEsRUFBQSxxQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsV0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxnQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFdBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsT0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxlQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsd0JBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsVUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxZQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsY0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxPQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGtCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxpQ0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxrQ0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxlQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFFBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEseUJBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsdUNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsMEJBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsT0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxhQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsY0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxPQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsT0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsTUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxZQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsa0JBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxnQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLG9CQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsZ0JBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxPQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxNQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLDZCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGlDQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxPQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLHNEQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxlQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsT0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxXQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFdBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsbUJBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSw4Q0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxXQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE1BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsZUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFdBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsbUNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsVUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxXQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxhQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsZ0NBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsTUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSwyQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFFBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsT0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxPQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsVUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsdUJBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsd0NBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsb0JBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxnQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxZQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGtDQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsYUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxlQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFdBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFdBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsWUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLHNCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsNEJBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsWUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxrQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSw0Q0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxNQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsVUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxPQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLDBCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsWUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxZQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsV0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFFBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxlQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsZ0JBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxXQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGFBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxPQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsTUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxhQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE1BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxNQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGtCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGtCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGFBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsVUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLDJCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsYUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxxQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsVUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxPQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLG9CQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFFBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsY0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxpQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxZQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxXQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLDhDQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsd0JBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsVUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxjQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsYUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSx1QkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxhQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLDJCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLHNCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFdBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsMEJBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsTUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSw2QkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxNQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsWUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGFBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsY0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxxQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLDJCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLDhCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxzQ0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSwwQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsVUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxrQ0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxtQ0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSx5QkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxzQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsbUJBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFB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QUFBQSxDQUFBdGdCLE1BQUFBLENBQUF1Z0IsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQW5qQixJQUFBQSxLQUFBbWpCLE1BQUFBLENBQUFJLEtBQUFBLENBQUFBLENBQUF6cEIsTUFBQUEsSUFBQTZHLE1BQUFBLENBQUF1aUIsT0FBQUEsQ0FBQXBwQixNQUFBQSxFQUFBQSxFQUVBNkcsTUFBQUEsQ0FBQThpQixjQUFBQSxHQUFBLE1BQUE5aUIsTUFBQUEsQ0FBQXVpQixPQUFBQSxDQUFBdGdCLE1BQUFBLENBQUF1Z0IsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQUksS0FBQUEsQ0FBQUEsQ0FBQXpwQixNQUFBQSxLQUFBNkcsTUFBQUEsQ0FBQXVpQixPQUFBQSxDQUFBcHBCLE1BQ0E7QUFBQSxDQUFBLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcCA9IFtcclxuICB7XHJcbiAgICBiYXNlOiBcIkFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0MVxcdTI0QjZcXHVGRjIxXFx1MDBDMFxcdTAwQzFcXHUwMEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxcdTAwQzNcXHUwMTAwXFx1MDEwMlxcdTFFQjBcXHUxRUFFXFx1MUVCNFxcdTFFQjJcXHUwMjI2XFx1MDFFMFxcdTAwQzRcXHUwMURFXFx1MUVBMlxcdTAwQzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBDNlxcdTAxRkNcXHUwMUUyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBT1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM4XFx1QTczQV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQyXFx1MjRCN1xcdUZGMjJcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUwMjQzXFx1MDE4MlxcdTAxODFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0M1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYxXFx1MDFDNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMlxcdTAxQzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0NVxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJGXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDZcXHUyNEJCXFx1RkYyNlxcdTFFMUVcXHUwMTkxXFx1QTc3Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiR1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ3XFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0OFxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIklcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0OVxcdTI0QkVcXHVGRjI5XFx1MDBDQ1xcdTAwQ0RcXHUwMENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxcdTAwQ0ZcXHUxRTJFXFx1MUVDOFxcdTAxQ0ZcXHUwMjA4XFx1MDIwQVxcdTFFQ0FcXHUwMTJFXFx1MUUyQ1xcdTAxOTddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIktcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QlxcdTI0QzBcXHVGRjJCXFx1MUUzMFxcdTAxRThcXHUxRTMyXFx1MDEzNlxcdTFFMzRcXHUwMTk4XFx1MkM2OVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3QTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0Q1xcdTI0QzFcXHVGRjJDXFx1MDEzRlxcdTAxMzlcXHUwMTNEXFx1MUUzNlxcdTFFMzhcXHUwMTNCXFx1MUUzQ1xcdTFFM0FcXHUwMTQxXFx1MDIzRFxcdTJDNjJcXHUyQzYwXFx1QTc0OFxcdUE3NDZcXHVBNzgwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJNXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNERcXHUyNEMyXFx1RkYyRFxcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTJDNkVcXHUwMTlDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5KXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0RlxcdTI0QzRcXHVGRjJGXFx1MDBEMlxcdTAwRDNcXHUwMEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxcdTAwRDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHUwMEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xcdTAwRDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT0lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT09cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT1VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUwXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJRXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTFcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUlwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUyXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiU1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUzXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU0XFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MjhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1NVxcdTI0Q0FcXHVGRjM1XFx1MDBEOVxcdTAwREFcXHUwMERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHUwMERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU2XFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVllcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc2MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiV1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU3XFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJYXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNThcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTlcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHUwMEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDVBXFx1MjRDRlxcdUZGM0FcXHUwMTc5XFx1MUU5MFxcdTAxN0JcXHUwMTdEXFx1MUU5MlxcdTFFOTRcXHUwMUI1XFx1MDIyNFxcdTJDN0ZcXHUyQzZCXFx1QTc2Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDYxXFx1MjREMFxcdUZGNDFcXHUxRTlBXFx1MDBFMFxcdTAwRTFcXHUwMEUyXFx1MUVBN1xcdTFFQTVcXHUxRUFCXFx1MUVBOVxcdTAwRTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxcdTAwRTRcXHUwMURGXFx1MUVBM1xcdTAwRTVcXHUwMUZCXFx1MDFDRVxcdTAyMDFcXHUwMjAzXFx1MUVBMVxcdTFFQURcXHUxRUI3XFx1MUUwMVxcdTAxMDVcXHUyQzY1XFx1MDI1MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBFNlxcdTAxRkRcXHUwMUUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM5XFx1QTczQl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczRF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDYyXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2M1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxcdTAwRTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY0XFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGM1xcdTAxQzZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2NVxcdTI0RDRcXHVGRjQ1XFx1MDBFOFxcdTAwRTlcXHUwMEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xcdTAwRUJcXHUxRUJCXFx1MDExQlxcdTAyMDVcXHUwMjA3XFx1MUVCOVxcdTFFQzdcXHUwMjI5XFx1MUUxRFxcdTAxMTlcXHUxRTE5XFx1MUUxQlxcdTAyNDdcXHUwMjVCXFx1MDFERF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY2XFx1MjRENVxcdUZGNDZcXHUxRTFGXFx1MDE5MlxcdUE3N0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2N1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJoXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaHZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDE5NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDY5XFx1MjREOFxcdUZGNDlcXHUwMEVDXFx1MDBFRFxcdTAwRUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHUwMEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwialwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZBXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImtcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QlxcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZEXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiblwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZFXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxcdTAwRjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibmpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZGXFx1MjRERVxcdUZGNEZcXHUwMEYyXFx1MDBGM1xcdTAwRjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx1MDBGNVxcdTFFNERcXHUwMjJEXFx1MUU0RlxcdTAxNERcXHUxRTUxXFx1MUU1M1xcdTAxNEZcXHUwMjJGXFx1MDIzMVxcdTAwRjZcXHUwMjJCXFx1MUVDRlxcdTAxNTFcXHUwMUQyXFx1MDIwRFxcdTAyMEZcXHUwMUExXFx1MUVERFxcdTFFREJcXHUxRUUxXFx1MUVERlxcdTFFRTNcXHUxRUNEXFx1MUVEOVxcdTAxRUJcXHUwMUVEXFx1MDBGOFxcdTAxRkZcXHUwMjU0XFx1QTc0QlxcdUE3NERcXHUwMjc1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvaVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUEzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMjIzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzRGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJwXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3MVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJyXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJzXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzNcXHUyNEUyXFx1RkY1M1xcdTAwREZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ0elwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ1XCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzVcXHUyNEU0XFx1RkY1NVxcdTAwRjlcXHUwMEZBXFx1MDBGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx1MDBGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIndcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3N1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OVxcdTI0RThcXHVGRjU5XFx1MUVGM1xcdTAwRkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx1MDBGRlxcdTFFRjdcXHUxRTk5XFx1MUVGNVxcdTAxQjRcXHUwMjRGXFx1MUVGRl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwielwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDdBXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M10vZyxcclxuICB9LFxyXG5dO1xyXG52YXIgZG9tYWlucyA9IFtcclxuICBcIi5jb21cIixcclxuICBcIi5vcmdcIixcclxuICBcIi5uZXRcIixcclxuICBcIi5hY1wiLFxyXG4gIFwiLmFkXCIsXHJcbiAgXCIuYWVcIixcclxuICBcIi5hZlwiLFxyXG4gIFwiLmFnXCIsXHJcbiAgXCIuYWlcIixcclxuICBcIi5hbFwiLFxyXG4gIFwiLmFtXCIsXHJcbiAgXCIuYW9cIixcclxuICBcIi5hcVwiLFxyXG4gIFwiLmFyXCIsXHJcbiAgXCIuYXNcIixcclxuICBcIi5hdFwiLFxyXG4gIFwiLmF1XCIsXHJcbiAgXCIuYXdcIixcclxuICBcIi5heFwiLFxyXG4gIFwiLmF6XCIsXHJcbiAgXCIuYmFcIixcclxuICBcIi5iYlwiLFxyXG4gIFwiLmJkXCIsXHJcbiAgXCIuYmVcIixcclxuICBcIi5iZlwiLFxyXG4gIFwiLmJnXCIsXHJcbiAgXCIuYmhcIixcclxuICBcIi5iaVwiLFxyXG4gIFwiLmJqXCIsXHJcbiAgXCIuYm1cIixcclxuICBcIi5iblwiLFxyXG4gIFwiLmJvXCIsXHJcbiAgXCIuYnFcIixcclxuICBcIi5iclwiLFxyXG4gIFwiLmJzXCIsXHJcbiAgXCIuYnRcIixcclxuICBcIi5id1wiLFxyXG4gIFwiLmJ5XCIsXHJcbiAgXCIuYnpcIixcclxuICBcIi5jYVwiLFxyXG4gIFwiLmNjXCIsXHJcbiAgXCIuY2RcIixcclxuICBcIi5jZlwiLFxyXG4gIFwiLmNnXCIsXHJcbiAgXCIuY2hcIixcclxuICBcIi5jaVwiLFxyXG4gIFwiLmNrXCIsXHJcbiAgXCIuY2xcIixcclxuICBcIi5jbVwiLFxyXG4gIFwiLmNuXCIsXHJcbiAgXCIuY29cIixcclxuICBcIi5jclwiLFxyXG4gIFwiLmN1XCIsXHJcbiAgXCIuY3ZcIixcclxuICBcIi5jd1wiLFxyXG4gIFwiLmN4XCIsXHJcbiAgXCIuY3lcIixcclxuICBcIi5jelwiLFxyXG4gIFwiLmRlXCIsXHJcbiAgXCIuZGpcIixcclxuICBcIi5ka1wiLFxyXG4gIFwiLmRtXCIsXHJcbiAgXCIuZG9cIixcclxuICBcIi5kelwiLFxyXG4gIFwiLmVjXCIsXHJcbiAgXCIuZWVcIixcclxuICBcIi5lZ1wiLFxyXG4gIFwiLmVoXCIsXHJcbiAgXCIuZXJcIixcclxuICBcIi5lc1wiLFxyXG4gIFwiLmV0XCIsXHJcbiAgXCIuZXVcIixcclxuICBcIi5maVwiLFxyXG4gIFwiLmZqXCIsXHJcbiAgXCIuZmtcIixcclxuICBcIi5mbVwiLFxyXG4gIFwiLmZvXCIsXHJcbiAgXCIuZnJcIixcclxuICBcIi5nYVwiLFxyXG4gIFwiLmdkXCIsXHJcbiAgXCIuZ2VcIixcclxuICBcIi5nZlwiLFxyXG4gIFwiLmdnXCIsXHJcbiAgXCIuZ2hcIixcclxuICBcIi5naVwiLFxyXG4gIFwiLmdsXCIsXHJcbiAgXCIuZ21cIixcclxuICBcIi5nblwiLFxyXG4gIFwiLmdwXCIsXHJcbiAgXCIuZ3FcIixcclxuICBcIi5nclwiLFxyXG4gIFwiLmdzXCIsXHJcbiAgXCIuZ3RcIixcclxuICBcIi5ndVwiLFxyXG4gIFwiLmd3XCIsXHJcbiAgXCIuZ3lcIixcclxuICBcIi5oa1wiLFxyXG4gIFwiLmhtXCIsXHJcbiAgXCIuaG5cIixcclxuICBcIi5oclwiLFxyXG4gIFwiLmh0XCIsXHJcbiAgXCIuaHVcIixcclxuICBcIi5pZFwiLFxyXG4gIFwiLmllXCIsXHJcbiAgXCIuaWxcIixcclxuICBcIi5pbVwiLFxyXG4gIFwiLmluXCIsXHJcbiAgXCIuaW9cIixcclxuICBcIi5pcVwiLFxyXG4gIFwiLmlyXCIsXHJcbiAgXCIuaXNcIixcclxuICBcIi5pdFwiLFxyXG4gIFwiLmplXCIsXHJcbiAgXCIuam1cIixcclxuICBcIi5qb1wiLFxyXG4gIFwiLmpwXCIsXHJcbiAgXCIua2VcIixcclxuICBcIi5rZ1wiLFxyXG4gIFwiLmtoXCIsXHJcbiAgXCIua2lcIixcclxuICBcIi5rbVwiLFxyXG4gIFwiLmtuXCIsXHJcbiAgXCIua3BcIixcclxuICBcIi5rclwiLFxyXG4gIFwiLmt3XCIsXHJcbiAgXCIua3lcIixcclxuICBcIi5relwiLFxyXG4gIFwiLmxhXCIsXHJcbiAgXCIubGJcIixcclxuICBcIi5sY1wiLFxyXG4gIFwiLmxpXCIsXHJcbiAgXCIubGtcIixcclxuICBcIi5sclwiLFxyXG4gIFwiLmxzXCIsXHJcbiAgXCIubHRcIixcclxuICBcIi5sdVwiLFxyXG4gIFwiLmx2XCIsXHJcbiAgXCIubHlcIixcclxuICBcIi5tYVwiLFxyXG4gIFwiLm1jXCIsXHJcbiAgXCIubWRcIixcclxuICBcIi5tZVwiLFxyXG4gIFwiLm1nXCIsXHJcbiAgXCIubWhcIixcclxuICBcIi5ta1wiLFxyXG4gIFwiLm1sXCIsXHJcbiAgXCIubW1cIixcclxuICBcIi5tblwiLFxyXG4gIFwiLm1vXCIsXHJcbiAgXCIubXBcIixcclxuICBcIi5tcVwiLFxyXG4gIFwiLm1yXCIsXHJcbiAgXCIubXNcIixcclxuICBcIi5tdFwiLFxyXG4gIFwiLm11XCIsXHJcbiAgXCIubXZcIixcclxuICBcIi5td1wiLFxyXG4gIFwiLm14XCIsXHJcbiAgXCIubXlcIixcclxuICBcIi5telwiLFxyXG4gIFwiLm5hXCIsXHJcbiAgXCIubmNcIixcclxuICBcIi5uZVwiLFxyXG4gIFwiLm5mXCIsXHJcbiAgXCIubmdcIixcclxuICBcIi5uaVwiLFxyXG4gIFwiLm5sXCIsXHJcbiAgXCIubm9cIixcclxuICBcIi5ucFwiLFxyXG4gIFwiLm5yXCIsXHJcbiAgXCIubnVcIixcclxuICBcIi5uelwiLFxyXG4gIFwiLm9tXCIsXHJcbiAgXCIucGFcIixcclxuICBcIi5wZVwiLFxyXG4gIFwiLnBmXCIsXHJcbiAgXCIucGdcIixcclxuICBcIi5waFwiLFxyXG4gIFwiLnBrXCIsXHJcbiAgXCIucGxcIixcclxuICBcIi5wbVwiLFxyXG4gIFwiLnBuXCIsXHJcbiAgXCIucHJcIixcclxuICBcIi5wc1wiLFxyXG4gIFwiLnB0XCIsXHJcbiAgXCIucHdcIixcclxuICBcIi5weVwiLFxyXG4gIFwiLnFhXCIsXHJcbiAgXCIucmVcIixcclxuICBcIi5yb1wiLFxyXG4gIFwiLnJzXCIsXHJcbiAgXCIucnVcIixcclxuICBcIi5yd1wiLFxyXG4gIFwiLnNhXCIsXHJcbiAgXCIuc2JcIixcclxuICBcIi5zY1wiLFxyXG4gIFwiLnNkXCIsXHJcbiAgXCIuc2VcIixcclxuICBcIi5zZ1wiLFxyXG4gIFwiLnNoXCIsXHJcbiAgXCIuc2lcIixcclxuICBcIi5za1wiLFxyXG4gIFwiLnNsXCIsXHJcbiAgXCIuc21cIixcclxuICBcIi5zblwiLFxyXG4gIFwiLnNvXCIsXHJcbiAgXCIuc3JcIixcclxuICBcIi5zc1wiLFxyXG4gIFwiLnN0XCIsXHJcbiAgXCIuc3VcIixcclxuICBcIi5zdlwiLFxyXG4gIFwiLnN4XCIsXHJcbiAgXCIuc3lcIixcclxuICBcIi5zelwiLFxyXG4gIFwiLnRjXCIsXHJcbiAgXCIudGRcIixcclxuICBcIi50ZlwiLFxyXG4gIFwiLnRnXCIsXHJcbiAgXCIudGhcIixcclxuICBcIi50alwiLFxyXG4gIFwiLnRrXCIsXHJcbiAgXCIudGxcIixcclxuICBcIi50bVwiLFxyXG4gIFwiLnRuXCIsXHJcbiAgXCIudG9cIixcclxuICBcIi50clwiLFxyXG4gIFwiLnR0XCIsXHJcbiAgXCIudHZcIixcclxuICBcIi50d1wiLFxyXG4gIFwiLnR6XCIsXHJcbiAgXCIudWFcIixcclxuICBcIi51Z1wiLFxyXG4gIFwiLnVrXCIsXHJcbiAgXCIudXNcIixcclxuICBcIi51eVwiLFxyXG4gIFwiLnV6XCIsXHJcbiAgXCIudmFcIixcclxuICBcIi52Y1wiLFxyXG4gIFwiLnZlXCIsXHJcbiAgXCIudmdcIixcclxuICBcIi52aVwiLFxyXG4gIFwiLnZuXCIsXHJcbiAgXCIudnVcIixcclxuICBcIi53ZlwiLFxyXG4gIFwiLndzXCIsXHJcbiAgXCIueWVcIixcclxuICBcIi55dFwiLFxyXG4gIFwiLnphXCIsXHJcbiAgXCIuem1cIixcclxuICBcIi56d1wiLFxyXG5dO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlRGlhY3JpdGljc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAucmVkdWNlKChyZXN1bHQsIGxldHRlcikgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzdWx0LnJlcGxhY2UobGV0dGVyLmxldHRlcnMsIGxldHRlci5iYXNlKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgU1BFQ0lBTF9DSEFSQUNURVJTID0gXCJcXFxcXFxcXC8gIT9AIyQlXiYqKClfKzoue30sO1xcXFwtJ2Bg4oCZ4oCYXFxcIlwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFske1NQRUNJQUxfQ0hBUkFDVEVSU31dYCwgXCJnaVwiKSwgXCJcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVBbGxCdXRMZXR0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9Mb3dlckNhc2UoKS5yZW1vdmVEaWFjcml0aWNzKCkucmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMoKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNvbmNlYWxcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZXh0cmEpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChgW14ke1NQRUNJQUxfQ0hBUkFDVEVSU30ke2V4dHJhfV1gLCBcImdpXCIpLCBcIuKBjlwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNhcGl0YWxpemVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc2xpY2UoMSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVIVE1MXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShcIj5cIiwgXCJcXHUyMjdCXCIpLnJlcGxhY2UoXCI8XCIsIFwiXFx1MjI3QVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImFuZ2xlQnJhY2tldHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKFwiPFwiLCBcIiZsdDtcIikucmVwbGFjZShcIj5cIiwgXCImZ3Q7XCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVwbGFjZUFycmF5XCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGZpbmQsIHJlcGxhY2UpIHtcclxuICAgIHZhciByZXBsYWNlU3RyaW5nID0gdGhpcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmluZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICByZXBsYWNlU3RyaW5nID0gcmVwbGFjZVN0cmluZy5yZXBsYWNlKGZpbmRbaV0sIHJlcGxhY2VbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcGxhY2VTdHJpbmc7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJtYXNrVVJMc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2VBcnJheShbXCJodHRwczovL1wiLCBcImh0dHA6Ly9cIl0sIFwibm9wZTovL1wiKS5yZXBsYWNlQXJyYXkoZG9tYWlucywgXCIubm9wZVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VSZWFkYWJsZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwibWFrZVBlcmNlbnRhZ2VcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZGVjaW1hbHMpIHtcclxuICAgIGlmICghZGVjaW1hbHMpIGRlY2ltYWxzID0gMjtcclxuICAgIHJldHVybiBgJHsodGhpcyAqIDEwMCkudG9GaXhlZChkZWNpbWFscyl9JWA7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzb3J0T2JqZWN0ID0gKG9iaiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgbGV0IGFyciA9IFtdO1xyXG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgYXJyLnB1c2goW2tleSwgb2JqW2tleV1dKTtcclxuICB9XHJcbiAgYXJyLnNvcnQoKGEsIGIpID0+IChkaXJlY3Rpb24gPyBhWzFdIC0gYlsxXSA6IGJbMV0gLSBhWzFdKSk7XHJcbiAgbGV0IG9ialNvcnRlZCA9IHt9O1xyXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiAob2JqU29ydGVkW2l0ZW1bMF1dID0gaXRlbVsxXSkpO1xyXG4gIC8vYXJyLnNvcnQoZnVuY3Rpb24oYSwgYikgeyBhLnZhbHVlLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLnZhbHVlLnRvTG93ZXJDYXNlKCkpOyB9KTsgLy91c2UgdGhpcyB0byBzb3J0IGFzIHN0cmluZ3NcclxuICByZXR1cm4gb2JqU29ydGVkOyAvLyByZXR1cm5zIGFycmF5XHJcbn07XHJcbiIsIi8qXHJcbiQgPSBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxudmFyIGJvb3RzdHJhcCA9IHJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxudmFyIGFuZ3VsYXJTYW5pdGl6ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItc2FuaXRpemUnKTtcclxudmFyIGFuZ3VsYXJBbmltYXRlID0gcmVxdWlyZSgnYW5ndWxhci1hbmltYXRlJyk7XHJcbiovXHJcbmFuZ3VsYXIubW9kdWxlKFwiYXBwXCIsIFtcclxuICBcInVpLnJvdXRlclwiLFxyXG4gIFwidWkuYm9vdHN0cmFwXCIsXHJcbiAgXCJuZ0FuaW1hdGVcIixcclxuICBcIm5nU2FuaXRpemVcIixcclxuICBcIm5nRHJhZ0Ryb3BcIixcclxuICBcIm5nVGFnc0lucHV0XCIsXHJcbiAgXCJ2Y1JlY2FwdGNoYVwiLFxyXG4gIFwiY2hhcnQuanNcIixcclxuICBcInRjLmNoYXJ0anNcIixcclxuICBcImluZmluaXRlLXNjcm9sbFwiLFxyXG5dKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkdXJsU2VydmljZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xyXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvaG9tZVwiKTtcclxuICAkdXJsU2VydmljZVByb3ZpZGVyLmNvbmZpZy5zdHJpY3RNb2RlKGZhbHNlKTtcclxuXHJcbiAgJHN0YXRlUHJvdmlkZXJcclxuICAgIC5zdGF0ZShcImhvbWVcIiwge1xyXG4gICAgICB1cmw6IFwiL2hvbWVcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2hvbWUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInBvbGljeVwiLCB7XHJcbiAgICAgIHVybDogXCIvcG9saWN5XCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wb2xpY3kuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInByaW50XCIsIHtcclxuICAgICAgdXJsOiBcIi9wcmludFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcHJpbnQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImV4cGVyaWVuY2VcIiwge1xyXG4gICAgICB1cmw6IFwiL2V4cGVyaWVuY2VcIixcclxuICAgICAgY29udHJvbGxlcjogXCJFeHBlcmllbmNlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvZXhwZXJpZW5jZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwic2tpbGxzXCIsIHtcclxuICAgICAgdXJsOiBcIi9za2lsbHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJTa2lsbHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9za2lsbHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImhvYmJpZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2hvYmJpZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJIb2JiaWVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvaG9iYmllcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiY29udGFjdFwiLCB7XHJcbiAgICAgIHVybDogXCIvY29udGFjdFwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkNvbnRhY3RDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9jb250YWN0Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ3b3Jrb3V0XCIsIHtcclxuICAgICAgdXJsOiBcIi93b3Jrb3V0XCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiV29ya291dEN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3dvcmtvdXQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInBvc3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9wb3N0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlBvc3RzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcG9zdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInByb2ZpbGVcIiwge1xyXG4gICAgICB1cmw6IFwiL3Byb2ZpbGVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJQcm9maWxlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcHJvZmlsZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibGlzdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2xpc3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiTGlzdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImxpc3RzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwcmlvcml0aXplXCIsIHtcclxuICAgICAgdXJsOiBcIi9wcmlvcml0aXplXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUHJpb3JpdGl6ZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicHJpb3JpdGl6ZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYnViYmxlc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYnViYmxlc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkJ1YmJsZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImJ1YmJsZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImFzdGVyb2lkc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYXN0ZXJvaWRzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQXN0ZXJvaWRzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJhc3Rlcm9pZHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImxlbW1pbmdzXCIsIHtcclxuICAgICAgdXJsOiBcIi9sZW1taW5nc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkxlbW1pbmdzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJsZW1taW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYm90c1wiLCB7XHJcbiAgICAgIHVybDogXCIvYm90c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3NcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5nc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3MtYWRtaW5cIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy1hZG1pblwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0FkbWluQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MtYWRtaW4uaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1vbGRcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy1vbGRcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NPbGRDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1vbGQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1nYW1lXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3MvOmdhbWVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NHYW1lQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MtZ2FtZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1nb29nbGVcIiwge1xyXG4gICAgICB1cmw6IFwiL2dvb2dsZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpHb29nbGVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvZ29vZ2xlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWxvZ29zXCIsIHtcclxuICAgICAgdXJsOiBcIi9sb2dvc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpMb2dvc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9sb2dvcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1hbmltYWxzXCIsIHtcclxuICAgICAgdXJsOiBcIi9hbmltYWxzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekFuaW1hbHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvYW5pbWFscy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1za2VsZXRvbnNcIiwge1xyXG4gICAgICB1cmw6IFwiL3NrZWxldG9uc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpTa2VsZXRvbnNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvc2tlbGV0b25zLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LW1vdmllc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbW92aWVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpek1vdmllc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9tb3ZpZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImNoYXJhZGVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9jaGFyYWRlc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkNoYXJhZGVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvY2hhcmFkZXMuaHRtbFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7XHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgcmVxdWlyZUJhc2U6IGZhbHNlLFxyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdXZWJTb2NrZXRTdmMnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcclxuICBmdW5jdGlvbiB3ZWJzb2NrZXRIb3N0KCkge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcclxuICAgICAgcmV0dXJuIFwid3NzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIndzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBjb25uZWN0aW9uO1xyXG4gIHZhciBjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQod2Vic29ja2V0SG9zdCgpKTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjb25uZWN0ZWQnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjbG9zZWQuIFJlY29ubmVjdGluZy4uLicpO1xyXG4gICAgICAkdGltZW91dChjb25uZWN0LCAxMDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUgKyBcIiAtIFN0YXRlOiBcIiArIGNvbm5lY3Rpb24ucmVhZHlTdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnd3M6JyArIHBheWxvYWQudG9waWMsIHBheWxvYWQuZGF0YSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc2VuZCA9IGZ1bmN0aW9uICh0b3BpYywgZGF0YSkge1xyXG4gICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh7dG9waWM6IHRvcGljLCBkYXRhOiBkYXRhfSk7XHJcbiAgICBjb25uZWN0aW9uLnNlbmQoanNvbik7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5jb25uZWN0ID0gY29ubmVjdDtcclxuXHJcbn0pLnJ1bihmdW5jdGlvbiAoV2ViU29ja2V0U3ZjKSB7XHJcbiAgV2ViU29ja2V0U3ZjLmNvbm5lY3QoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmRpcmVjdGl2ZShcImNsaWNrT3V0c2lkZVwiLCBmdW5jdGlvbiAoJGRvY3VtZW50KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc3RyaWN0OiBcIkFcIixcclxuICAgIHNjb3BlOiB7XHJcbiAgICAgIGNsaWNrT3V0c2lkZTogXCImXCIsXHJcbiAgICB9LFxyXG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAkZG9jdW1lbnQub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlbCAhPT0gZS50YXJnZXQgJiYgIWVsWzBdLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9zY29wZS4kcGFyZW50LnNldFNlbGVjdGVkTGlzdCgpO1xyXG4gICAgICAgICAgICBzY29wZS4kZXZhbChzY29wZS5jbGlja091dHNpZGUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG5cdC5kaXJlY3RpdmUoJ2hlYWQnLCBbXHJcblx0XHQnJHJvb3RTY29wZScsXHJcblx0XHQnJHN0YXRlJyxcclxuXHRcdCckY29tcGlsZScsXHJcblx0XHQnJGludGVycG9sYXRlJyxcclxuXHRcdGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsICRjb21waWxlLCAkaW50ZXJwb2xhdGUpIHtcclxuXHJcblx0XHRcdHZhciBnZXRTdHlsZSA9IGZ1bmN0aW9uIGdldFN0eWxlKHRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHJcblx0XHRcdFx0dmFyIHN0eWxlID0ge1xyXG5cdFx0XHRcdFx0aHJlZjogdGVtcGxhdGVTdHlsZVVybCxcclxuXHRcdFx0XHRcdHJlbDogJ3N0eWxlc2hlZXQnXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0aWYgKHN0eWxlLmhyZWYubWF0Y2goL1xcLmxlc3MkLykpIHtcclxuXHRcdFx0XHRcdHN0eWxlLnJlbCA9ICdzdHlsZXNoZWV0L2xlc3MnO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIHN0eWxlO1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiBnZXRTdHlsZXMoc3RhdGUpIHtcclxuXHJcblx0XHRcdFx0dmFyIHN0YXRlcyA9IHt9O1xyXG5cclxuXHRcdFx0XHQvL0NoZWNrIHN0YXRlIGZvciBzdHlsZXNcclxuXHRcdFx0XHR3aGlsZSAoc3RhdGUubmFtZSAhPT0gJycpIHtcclxuXHRcdFx0XHRcdHZhciBwYXJlbnQgPSAkc3RhdGUuZ2V0KCdeJywgc3RhdGUpO1xyXG5cclxuXHRcdFx0XHRcdC8vSW5pdGlhdGUgb3VyIHZpZXcgbGlzdFxyXG5cdFx0XHRcdFx0aWYgKCFzdGF0ZXNbcGFyZW50Lm5hbWVdKSB7XHJcblx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV0gPSB7fTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NoZWNrIHRoZSB0ZW1wbGF0ZVN0eWxlXHJcblx0XHRcdFx0XHRpZiAoc3RhdGUudGVtcGxhdGVTdHlsZVVybCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1twYXJlbnQubmFtZV1bJyddKSB7XHJcblx0XHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXVsnJ10gPSBnZXRTdHlsZShzdGF0ZS50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ2hlY2sgdmlld3NcclxuXHRcdFx0XHRcdGlmIChzdGF0ZS52aWV3cykge1xyXG5cdFx0XHRcdFx0XHRfLmZvckVhY2goc3RhdGUudmlld3MsIGZ1bmN0aW9uICh2aWV3LCBrZXkpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBoYXZlIGEgc3R5bGVcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXZpZXcudGVtcGxhdGVTdHlsZVVybCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBhcmUgdGFyZ2V0aW5nIHNvbWUgcGFyZW50XHJcblx0XHRcdFx0XHRcdFx0aWYgKChrZXkgPSBrZXkuc3BsaXQoJ0AnKSlbMV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgaGF2ZSBzdHlsZXMgZm9yIHRoYXQgcGFyZW50XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1trZXlbMV1dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlc1trZXlbMV1dID0ge307XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Ly9QbGFjZSB0aGUgc3R5bGUgb24gc29tZSBwYXJlbnQncyB2aWV3XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1trZXlbMV1dW2tleVswXV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGVzW2tleVsxXV1ba2V5WzBdXSA9IGdldFN0eWxlKHZpZXcudGVtcGxhdGVTdHlsZVVybCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9QbGFjZSB0aGUgc3R5bGUgb24gb3VyIHBhcmVudCdzIHZpZXdcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdW2tleVswXV0gPSBnZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9Db250aW51ZSB3aXRoIHRoZSBwYXJlbnRcclxuXHRcdFx0XHRcdHN0YXRlID0gcGFyZW50O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9GbGF0dGVuIHRoZSBsaXN0XHJcblx0XHRcdFx0dmFyIGZsYXQgPSBbXTtcclxuXHRcdFx0XHRfLmZvckVhY2goc3RhdGVzLCBmdW5jdGlvbiAodmlld3MpIHtcclxuXHJcblx0XHRcdFx0XHRfLmZvckVhY2godmlld3MsIGZ1bmN0aW9uIChzdHlsZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFfLmluY2x1ZGVzKGZsYXQsIHN0eWxlKSkge1xyXG5cdFx0XHRcdFx0XHRcdGZsYXQucHVzaChzdHlsZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vUmV2ZXJzZSBpdCBzbyB3ZSBoYXZlIGEgcHJvcGVyIGhpZXJhcmNoeVxyXG5cdFx0XHRcdGZsYXQucmV2ZXJzZSgpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZmxhdDtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRcdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtKSB7XHJcblxyXG5cdFx0XHRcdFx0c2NvcGUudGVtcGxhdGVTdHlsZXMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHR2YXIgaHRtbCA9ICc8bGluayBuZy1hdHRyLXJlbD1cInt7c3R5bGUucmVsfX1cIiBuZy1yZXBlYXQ9XCJzdHlsZSBpbiB0ZW1wbGF0ZVN0eWxlc1wiIG5nLWhyZWY9XCJ7e3N0eWxlLmhyZWZ9fVwiPic7XHJcblxyXG5cdFx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvXFx7XFx7L2csICRpbnRlcnBvbGF0ZS5zdGFydFN5bWJvbCgpKTtcclxuXHRcdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcfVxcfS9nLCAkaW50ZXJwb2xhdGUuZW5kU3ltYm9sKCkpO1xyXG5cclxuXHRcdFx0XHRcdGVsZW0uYXBwZW5kKCRjb21waWxlKGh0bWwpKHNjb3BlKSk7XHJcblxyXG5cdFx0XHRcdFx0JHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzY29wZS50ZW1wbGF0ZVN0eWxlcyA9IGdldFN0eWxlcyh0b1N0YXRlKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdH1cclxuXHRdKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkFwcEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBMYW5ndWFnZVN2YywgVXNlclN2Yykge1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCIlY1lvdSBzbmVha3kgYnVnZ2VyIVwiLFxyXG4gICAgXCJmb250OiAyZW0gc2Fucy1zZXJpZjsgY29sb3I6IERvZGdlckJsdWU7IHRleHQtc2hhZG93OiAycHggMCAwICM0NDQsIC0ycHggMCAwICM0NDQsIDAgMnB4IDAgIzQ0NCwgMCAtMnB4IDAgIzQ0NCwgMXB4IDFweCAjNDQ0LCAtMXB4IC0xcHggMCAjNDQ0LCAxcHggLTFweCAwICM0NDQsIC0xcHggMXB4IDAgIzQ0NDtcIixcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCJJJ20gZ2xhZCB5b3UncmUgY3VyaW91cyB3aGV0aGVyIHNvbWV0aGluZyBpcyBwb3BwaW5nIHVwIGluIGhlcmUuIEknbSBhIGJpdCBvZiBhIHN0aWNrbGVyIHdoZW4gaXQgY29tZXMgdG8gbWVzc2FnZXMgaW4gdGhlIGNvbnNvbGUgc28gSSB0cnkgdG8gbWFrZSBzdXJlIG9ubHkgdGhpbmdzIEkgd2FudCBhcmUgdmlzaWJsZS4gVGhhdCBiZWluZyBzYWlkLCBpZiB0aGVyZSBpcyBhIGJpZyBlcnJvciBoZXJlLCBJIHdvdWxkIHJlYWxseSBhcHByZWNpYXRlIHlvdSB0ZWxsaW5nIG1lIHNvIEkgY2FuIGdldCByaWQgb2YgaXQhXCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiVGhlIGNvZGUgZm9yIG15IHJlc3VtZSBpcyBob3N0ZWQgb24gR2l0aHViIGlmIHlvdSByZWFsbHkgd2FudCB0byBnbyBpbnRvIGFsbCB0aGlzISA9PiBodHRwczovL2dpdGh1Yi5jb20vRmxhbmRlcnNCdXJnZXIvcmVzdW1lXCIsXHJcbiAgKTtcclxuXHJcbiAgLypcclxuICAgICQoZG9jdW1lbnQpLmJpbmQoXCJrZXl1cCBrZXlkb3duXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBpZihlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09IDgwKXtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAqL1xyXG5cclxuICAkKHdpbmRvdykubG9hZChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLmxvYWRpbmdcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAkKFwiLmNvbnRlbnRcIikuZmFkZUluKFwic2xvd1wiKTtcclxuICB9KTtcclxuXHJcbiAgJChcIi5jaGVja2JveC1tZW51XCIpLm9uKFwiY2hhbmdlXCIsIFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoXCJsaVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiLCB0aGlzLmNoZWNrZWQpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmFsbG93LWZvY3VzXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUudGhlbWVDb3VudGVyID0gNjtcclxuICAkc2NvcGUudG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICRzY29wZS55ZWFyID0gJHNjb3BlLnRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgJHNjb3BlLnJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xyXG5cclxuICAkc2NvcGUuZmxpcFRoZW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5sb2FkaW5nXCIpLnNob3coKTtcclxuICAgICQoXCIuY29udGVudFwiKS5oaWRlKCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi5sb2FkaW5nXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgICAkKFwiLmNvbnRlbnRcIikuZmFkZUluKFwic2xvd1wiKTtcclxuICAgIH0sIDgwMCk7XHJcbiAgICAkc2NvcGUudGhlbWVDb3VudGVyID0gJHNjb3BlLnRoZW1lQ291bnRlciA8IDYgPyAkc2NvcGUudGhlbWVDb3VudGVyICsgMSA6ICgkc2NvcGUudGhlbWVDb3VudGVyID0gMSk7XHJcbiAgfTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL3NraWxscy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuc2tpbGxzID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKHNraWxsKSB7XHJcbiAgICAgIHJldHVybiBza2lsbC5lbmFibGVkO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9ob2JiaWVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5ob2JiaWVzID0gZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2V4cGVyaWVuY2UuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmpvYnMgPSBkYXRhO1xyXG4gICAgJHNjb3BlLmpvYnMuZm9yRWFjaChmdW5jdGlvbiAoam9iKSB7XHJcbiAgICAgIGpvYi5zdGFydERhdGUgPSBuZXcgRGF0ZShqb2Iuc3RhcnREYXRlKTtcclxuICAgICAgaWYgKGpvYi5lbmREYXRlKSBqb2IuZW5kRGF0ZSA9IG5ldyBEYXRlKGpvYi5lbmREYXRlKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvY2hhcmFkZXMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmNoYXJhZGVzID0gZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmdldFRpbWVTcGFuID0gZnVuY3Rpb24gKGpvYikge1xyXG4gICAgcmV0dXJuIGpvYi5zdGFydERhdGUuZ2V0RnVsbFllYXIoKSArIChqb2IuZW5kRGF0ZSA/IFwiIC0gXCIgKyBqb2IuZW5kRGF0ZS5nZXRGdWxsWWVhcigpIDogXCIgLSBUb2RheVwiKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUubGFuZ3VhZ2VzID0gTGFuZ3VhZ2VTdmMubGFuZ3VhZ2VzO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IExhbmd1YWdlU3ZjLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICRzY29wZS5zZWxlY3RMYW5ndWFnZSA9IGZ1bmN0aW9uIChsYW5ndWFnZSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBMYW5ndWFnZVN2Yy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmhvdmVyZGl2ID0gZnVuY3Rpb24gKGUsIGRpdmlkKSB7XHJcbiAgICB2YXIgbGVmdCA9IGUuY2xpZW50WCArIFwicHhcIjtcclxuICAgIHZhciB0b3AgPSBlLmNsaWVudFkgKyAyMCArIFwicHhcIjtcclxuXHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2aWQpO1xyXG5cclxuICAgICQoXCIjXCIgKyBkaXZpZCkuY3NzKFwibGVmdFwiLCBsZWZ0KTtcclxuICAgICQoXCIjXCIgKyBkaXZpZCkuY3NzKFwidG9wXCIsIHRvcCk7XHJcblxyXG4gICAgJChcIiNcIiArIGRpdmlkKS50b2dnbGUoKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS51c2VyKSB7XHJcbiAgICBVc2VyU3ZjLmxvZ2luKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgbG9naW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2dpblwiLCBmdW5jdGlvbiAoXywgdXNlcikge1xyXG4gICAgbG9naW4odXNlcik7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ2luKHVzZXIpIHtcclxuICAgIGlmICghJHNjb3BlLmxvZ2dlZEluKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlciA9IHVzZXIuX2lkO1xyXG4gICAgICAkc2NvcGUubG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgICAkc2NvcGUuJGJyb2FkY2FzdChcImxvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHNjb3BlLiRvbihcInVwZGF0ZVwiLCBmdW5jdGlvbiAoXywgdXNlcikge1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUgPSBuZXcgRGF0ZSgkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlKTtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIiNsb2FkaW5nLWljb25cIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbihcImxvYWRpbmdcIiwgZnVuY3Rpb24gKF8sIHVzZXIpIHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICQoXCIjbG9hZGluZy1pY29uXCIpLnNob3coKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbihcImxvYWRlZFwiLCBmdW5jdGlvbiAoXywgdXNlcikge1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUubG9nb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZmlyZWJhc2VcclxuICAgICAgLmF1dGgoKVxyXG4gICAgICAuc2lnbk91dCgpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBTaWduLW91dCBzdWNjZXNzZnVsLlxyXG4gICAgICAgICRzY29wZS5sb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdChcImxvZ291dFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIC8vIEFuIGVycm9yIGhhcHBlbmVkLlxyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlKSB7XHJcbiAgICB2YXIgbW9udGhzID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpICsgXCItXCIgKyBtb250aHNbZGF0ZS5nZXRNb250aCgpXSArIFwiLVwiICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIH07XHJcblxyXG4gIFN0cmluZy5wcm90b3R5cGUuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5zbGljZSgxKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdBc3Rlcm9pZHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgR2FtZVN2Yykge1xyXG5cclxuICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FzdGVyb2lkcy1wYWdlJyk7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIGN0eC5mb250ID0gXCIzMHB4IENvbWljIFNhbnMgTVNcIjtcclxuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICB2YXIgc2hvdHMgPSB7fTtcclxuICB2YXIgYXN0ZXJvaWRzID0ge307XHJcbiAgdmFyIHBvd2VydXBzID0ge307XHJcbiAgdmFyIGV4cGxvc2lvbnMgPSB7fTtcclxuICB2YXIgbWFwID0ge307XHJcbiAgdmFyIHNwYWNlcGljcyA9IDEwO1xyXG4gIHZhciBzcGFjZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwYWNlcGljcyk7XHJcbiAgdmFyIHBvd2VydXBUeXBlcyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3NwZWVkJyxcclxuICAgICAgYW5ub3VuY2VtZW50OiAnTWF4IFNwZWVkIOKHpycsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICAgIHNpemU6IFsxNCwgMzVdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbihzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAubWF4U3BlZWQgKz0gMTAwO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnY29vbGRvd24nLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6ICdDb29sZG93biDih6knLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogMyxcclxuICAgICAgICBzaXplOiBbMTcsIDE3XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5jb29sZG93blRpbWUgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdyYW5nZScsXHJcbiAgICAgIGFubm91bmNlbWVudDogJ0ZpcmluZyBSYW5nZSDih6cnLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDQsXHJcbiAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICBzaXplOiBbMzAsIDhdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbihzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAucmFuZ2UgKz0gNTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3NoaWVsZCcsXHJcbiAgICAgIGFubm91bmNlbWVudDogJ1NoaWVsZCcsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogNSxcclxuICAgICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICAgIHNpemU6IFsxOSwgMTldLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbihzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAuc2hpZWxkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ251a2UnLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6ICdOdWtlJyxcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgICAgc2l6ZTogWzE1LCAxNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWVcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgICAgICBhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgICAgfVxyXG4gICAgfSwvKlxyXG4gICAgJ3NpZGVfY2Fubm9ucycsXHJcbiAgICAnbGFzZXInLFxyXG4gICAgJ3NoaWVsZCcsXHJcbiAgICAnbGlmZScsXHJcbiAgICAnbWlzc2lsZXMnLFxyXG4gICAgJ251a2UnXHJcbiAgICAqL1xyXG4gIF07XHJcbiAgcG93ZXJ1cFR5cGVzLmZvckVhY2goZnVuY3Rpb24ocG93ZXJ1cCwgaSwgYXJyYXkpIHtcclxuICAgIGFycmF5W2ldLmltZy5zcmMgPSAnYXN0ZXJvaWRzLycgKyBwb3dlcnVwLm5hbWUgKyAnLnBuZyc7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBleHBsb3Npb25JbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGV4cGxvc2lvbkltYWdlLnNyYyA9ICdhc3Rlcm9pZHMvZXhwbG9zaW9uLnBuZyc7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBtYXBbZS5rZXlDb2RlIHx8IGUud2hpY2hdID0gdHJ1ZTtcclxuICB9LHRydWUpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgbWFwW2Uua2V5Q29kZSB8fCBlLndoaWNoXSA9IGZhbHNlO1xyXG4gIH0sdHJ1ZSk7XHJcblxyXG4gICRzY29wZS5oaWdoc2NvcmUgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBldmFsdWF0ZUtleXMoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICAvL1NwYWNlXHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNob290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzddKSB7XHJcbiAgICAgICAgLy9MZWZ0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMzYwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gLT0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOV0pIHtcclxuICAgICAgICAvL1JpZ2h0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMzYwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gKz0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOF0pIHtcclxuICAgICAgICAvL1VwIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA8PSBzcGFjZXNoaXAubWF4U3BlZWQpIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCArPSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkLS07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbNDBdKSB7XHJcbiAgICAgICAgLy9Eb3duIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCAtPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICBzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTcGFjZXNoaXAoKSB7XHJcbiAgICB0aGlzLndpZHRoID0gNTA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDUwO1xyXG4gICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgIHRoaXMucmFuZ2UgPSA4MDtcclxuICAgIHRoaXMuY2Fubm9uID0ge1xyXG4gICAgICB4OiB0aGlzLndpZHRoIC8gMiAtIDQuNSxcclxuICAgICAgeTogdGhpcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgKiAwLjA3ODEyNVxyXG4gICAgfTtcclxuICAgIHRoaXMuY29vbGRvd24gPSAwO1xyXG4gICAgdGhpcy5jb29sZG93blRpbWUgPSAyMDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbXHJcbiAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMixcclxuICAgICAgY2FudmFzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDJcclxuICAgIF07XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gJ2FzdGVyb2lkcy9zcGFjZXNoaXAucG5nJztcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5tYXhTcGVlZCA9IDEwMDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gMDtcclxuICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG5cclxuICAgIHRoaXMuc2hvb3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5jb29sZG93biA9IHRoaXMuY29vbGRvd25UaW1lO1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBzaG90c1tpZF0gPSBuZXcgU2hvdChpZCwgdGhpcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5zaGllbGQpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmFyYyh0aGlzLnBvc2l0aW9uWzBdICsgdGhpcy53aWR0aCAvIDIsIHRoaXMucG9zaXRpb25bMV0gKyB0aGlzLmhlaWdodCAvIDIsIDMwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDM1LCAyMzcsIDg2LCAwLjUpXCI7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2IoNjYsIDE2OCwgMzYsIDAuOClcIjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICAgIHZhciBhc3Rlcm9pZCA9IGFzdGVyb2lkc1tpXTtcclxuICAgICAgICBpZiAoaGl0KGFzdGVyb2lkLCB0aGlzKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2hpZWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpZWxkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGFzdGVyb2lkLmV4cGxvZGUoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnYW1lT3ZlcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFuZ2xlID0gdGhpcy5yb3RhdGlvbjtcclxuICAgICAgaWYgKHRoaXMuY29vbGRvd24gPiAwKSB7XHJcbiAgICAgICAgdGhpcy5jb29sZG93bi0tO1xyXG4gICAgICB9XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU2hvdChpZCwgc3BhY2VzaGlwKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW1xyXG4gICAgICBzcGFjZXNoaXAucG9zaXRpb25bMF0gKyBzcGFjZXNoaXAuY2Fubm9uLnggKyBzcGFjZXNoaXAuY2Fubm9uLnggKiBNYXRoLmNvcygoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSAvIDE4MCksXHJcbiAgICAgIHNwYWNlc2hpcC5wb3NpdGlvblsxXSArIHNwYWNlc2hpcC5jYW5ub24ueSArIHNwYWNlc2hpcC5jYW5ub24ueSAqIE1hdGguc2luKChzcGFjZXNoaXAucm90YXRpb24gLSA5MCkgKiBNYXRoLlBJIC8gMTgwKVxyXG4gICAgXTtcclxuICAgIHRoaXMud2lkdGggPSA5O1xyXG4gICAgdGhpcy5oZWlnaHQgPSAxNTtcclxuICAgIHRoaXMuYW5nbGUgPSBzcGFjZXNoaXAuYW5nbGU7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gc3BhY2VzaGlwLnJvdGF0aW9uO1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwYWNlc2hpcC5zcGVlZCArIDUwMDtcclxuICAgIHRoaXMubGlmZXNwYW4gPSBzcGFjZXNoaXAucmFuZ2U7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gJ2FzdGVyb2lkcy9zaG90LnBuZyc7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBBc3Rlcm9pZChpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy53aWR0aCA9IE1hdGgucmFuZG9tKCkgKiA1MCArIDIwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMucm90YXRpb25TcGVlZCA9IE1hdGgucmFuZG9tKCkgKiA2IC0gMztcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMzAwICsgMjtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSAnYXN0ZXJvaWRzL2FzdGVyb2lkJyArIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA2KSArIDEpICsgJy5wbmcnO1xyXG5cclxuICAgIHRoaXMuZXhwbG9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBleHBsb3Npb25zW3RoaXMuaWRdID0gbmV3IEV4cGxvc2lvbih0aGlzKTtcclxuICAgICAgcmV0dXJuIGRlbGV0ZSBhc3Rlcm9pZHNbdGhpcy5pZF07XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZDtcclxuICAgICAgaWYgKHRoaXMucm90YXRpb24gPiAzNjApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gdGhpcy5yb3RhdGlvbiAtIDM2MDtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnJvdGF0aW9uIDwgMCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSAzNjAgKyB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgICB2YXIgc2hvdCA9IHNob3RzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoc2hvdCwgdGhpcykpIHtcclxuICAgICAgICAgIHRoaXMuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgdmFyIHBvaW50cyA9IE1hdGguZmxvb3IoKHNob3Quc3BlZWQgLSA1MDApIC8gMTAgKyA3MCAtIHRoaXMud2lkdGgpO1xyXG4gICAgICAgICAgaWYgKE1hdGguZmxvb3IoKHBvaW50cyArICRzY29wZS5zY29yZSkgLyAxMDApID4gTWF0aC5mbG9vcigkc2NvcGUuc2NvcmUgLyAxMDApKSB7XHJcbiAgICAgICAgICAgIHNwYXduUG93ZXJ1cCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJHNjb3BlLnNjb3JlICs9IHBvaW50cztcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIGRlbGV0ZSBzaG90c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBFeHBsb3Npb24ob2JqZWN0KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW29iamVjdC5wb3NpdGlvblswXSwgb2JqZWN0LnBvc2l0aW9uWzFdXTtcclxuICAgIHRoaXMud2lkdGggPSBvYmplY3Qud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9iamVjdC5oZWlnaHQ7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5jeWNsZSA9IHtcclxuICAgICAgcm93czogNixcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgc2l6ZTogWzI1NiwgMjU2XSxcclxuICAgICAgaTogMCxcclxuICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDQ3O1xyXG4gICAgdGhpcy5pbWcgPSBleHBsb3Npb25JbWFnZTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAodGhpcy5jeWNsZS5kaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmN5Y2xlLmkrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN5Y2xlLmktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFBvd2VydXAoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucG93ZXJ1cCA9IHBvd2VydXBUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3dlcnVwVHlwZXMubGVuZ3RoKV07XHJcbiAgICB0aGlzLmN5Y2xlID0gdGhpcy5wb3dlcnVwLmN5Y2xlO1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDEwMDA7XHJcbiAgICBpZiAodGhpcy5jeWNsZS5zaXplWzFdID4gdGhpcy5jeWNsZS5zaXplWzBdKSB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gNDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSBNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0IC8gdGhpcy5jeWNsZS5zaXplWzFdICogdGhpcy5jeWNsZS5zaXplWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSA0MDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLnJvdW5kKHRoaXMud2lkdGggLyB0aGlzLmN5Y2xlLnNpemVbMF0gKiB0aGlzLmN5Y2xlLnNpemVbMV0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5pbWcgPSB0aGlzLnBvd2VydXAuaW1nO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDE1MCArIDUwO1xyXG4gICAgdmFyIGRlbGF5ID0gNTtcclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBwb3dlcnVwc1t0aGlzLmlkXTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaGl0KHNwYWNlc2hpcCwgdGhpcykpIHtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2UgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5hbm5vdW5jZW1lbnQgPSB0aGlzLnBvd2VydXAuYW5ub3VuY2VtZW50O1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgdGhpcy5wb3dlcnVwLmFjdGl2YXRlKHNwYWNlc2hpcCk7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBwb3dlcnVwc1t0aGlzLmlkXTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICAgIGlmIChkZWxheSA8PSAwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLmkrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGF5ID0gNTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWxheS0tO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZShvYmplY3QpIHtcclxuICAgICBvYmplY3QucG9zaXRpb25bMF0gKz0gb2JqZWN0LnNwZWVkIC8gMTAwICogTWF0aC5jb3MoKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgIG9iamVjdC5wb3NpdGlvblsxXSArPSBvYmplY3Quc3BlZWQgLyAxMDAgKiBNYXRoLnNpbigob2JqZWN0LmFuZ2xlIC0gOTApICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgaWYgKG9iamVjdC5wb3NpdGlvblswXSA+IGNhbnZhcy53aWR0aCkge1xyXG4gICAgICAgb2JqZWN0LnBvc2l0aW9uWzBdID0gLW9iamVjdC53aWR0aDtcclxuICAgICB9IGVsc2UgaWYgKG9iamVjdC5wb3NpdGlvblswXSA8IC1vYmplY3Qud2lkdGgpIHtcclxuICAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IGNhbnZhcy53aWR0aDtcclxuICAgICB9XHJcbiAgICAgaWYgKG9iamVjdC5wb3NpdGlvblsxXSA+IGNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgIG9iamVjdC5wb3NpdGlvblsxXSA9IC1vYmplY3QuaGVpZ2h0O1xyXG4gICAgIH0gZWxzZSBpZiAob2JqZWN0LnBvc2l0aW9uWzFdIDwgLW9iamVjdC5oZWlnaHQpIHtcclxuICAgICAgIG9iamVjdC5wb3NpdGlvblsxXSA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgfVxyXG4gICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgY3R4LnRyYW5zbGF0ZShvYmplY3QucG9zaXRpb25bMF0sIG9iamVjdC5wb3NpdGlvblsxXSk7XHJcbiAgICAgY3R4LnRyYW5zbGF0ZShvYmplY3Qud2lkdGggLyAyLCBvYmplY3QuaGVpZ2h0IC8gMik7XHJcbiAgICAgY3R4LnJvdGF0ZShvYmplY3Qucm90YXRpb24gKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICBpZiAob2JqZWN0LmN5Y2xlKSB7XHJcbiAgICAgICB2YXIgY29sdW1uID0gb2JqZWN0LmN5Y2xlLmkgJSBvYmplY3QuY3ljbGUuY29sdW1ucztcclxuICAgICAgIHZhciByb3cgPSBNYXRoLmZsb29yKG9iamVjdC5jeWNsZS5pIC8gb2JqZWN0LmN5Y2xlLmNvbHVtbnMpO1xyXG4gICAgICAgY3R4LmRyYXdJbWFnZShvYmplY3QuaW1nLCBvYmplY3QuY3ljbGUuc2l6ZVswXSAqIGNvbHVtbiwgb2JqZWN0LmN5Y2xlLnNpemVbMV0gKiByb3csIG9iamVjdC5jeWNsZS5zaXplWzBdLCBvYmplY3QuY3ljbGUuc2l6ZVsxXSwgLW9iamVjdC53aWR0aCAvIDIsIC1vYmplY3QuaGVpZ2h0IC8gMiwgb2JqZWN0LndpZHRoLCBvYmplY3QuaGVpZ2h0KTtcclxuXHJcbiAgICAgICBpZiAob2JqZWN0LmN5Y2xlLmkgPD0gMCkge1xyXG4gICAgICAgICBvYmplY3QuY3ljbGUuaSA9IDA7XHJcbiAgICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgfSBlbHNlIGlmIChvYmplY3QuY3ljbGUuaSA+PSBvYmplY3QuY3ljbGUuY29sdW1ucyAqIG9iamVjdC5jeWNsZS5yb3dzKSB7XHJcbiAgICAgICAgIG9iamVjdC5jeWNsZS5pID0gb2JqZWN0LmN5Y2xlLmNvbHVtbnMgKiBvYmplY3QuY3ljbGUucm93cyAtIDE7XHJcbiAgICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgIH1cclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgY3R4LmRyYXdJbWFnZShvYmplY3QuaW1nLCAtb2JqZWN0LndpZHRoIC8gMiwgLW9iamVjdC5oZWlnaHQgLyAyLCBvYmplY3Qud2lkdGgsIG9iamVjdC5oZWlnaHQpO1xyXG4gICAgIH1cclxuICAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHNwYWNlc2hpcDtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAkc2NvcGUucGxheWluZyA9IHRydWU7XHJcbiAgICAkc2NvcGUuc2NvcmUgPSAwO1xyXG4gICAgc3BhY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFjZXBpY3MpO1xyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgc3BhY2VzaGlwID0gbmV3IFNwYWNlc2hpcCgpO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYXduQXN0ZXJvaWRzKDUpO1xyXG4gICAgYXV0b1NwYXduKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRFbnRyeVBvc2l0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBncmlkWCA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIGdyaWRZID0gTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICB2YXIgeCwgeSA9IDA7XHJcbiAgICBpZiAoZ3JpZFggPj0gMSkge1xyXG4gICAgICB4ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgaWYgKHkgPj0gMSkge1xyXG4gICAgICAgIHkgPSAwIC0gaGVpZ2h0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHkgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIGlmIChncmlkWSA+PSAxKSB7XHJcbiAgICAgICAgeCA9IDAgLSB3aWR0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB4ID0gY2FudmFzLndpZHRoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3gsIHldO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGl0KG9iamVjdDEsIG9iamVjdDIpIHtcclxuICAgIHJldHVybiAob2JqZWN0MS5wb3NpdGlvblswXSA8IG9iamVjdDIucG9zaXRpb25bMF0gKyBvYmplY3QyLndpZHRoKSAmJlxyXG4gICAgICAgICAgIChvYmplY3QyLnBvc2l0aW9uWzBdIDwgb2JqZWN0MS5wb3NpdGlvblswXSArIG9iamVjdDEud2lkdGgpICYmXHJcbiAgICAgICAgICAgKG9iamVjdDEucG9zaXRpb25bMV0gPCBvYmplY3QyLnBvc2l0aW9uWzFdICsgb2JqZWN0Mi5oZWlnaHQpICYmXHJcbiAgICAgICAgICAgKG9iamVjdDIucG9zaXRpb25bMV0gPCBvYmplY3QxLnBvc2l0aW9uWzFdICsgb2JqZWN0MS5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXV0b1NwYXduKCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGFzdGVyb2lkcykubGVuZ3RoIDwgMjAwKSB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIGFzdGVyb2lkc1tpZF0gPSBuZXcgQXN0ZXJvaWQoaWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYXV0b1NwYXduKCk7XHJcbiAgICAgIH0sIHNwYXduSW50ZXJ2YWwoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkludGVydmFsKCkge1xyXG4gICAgaWYgKCRzY29wZS5zY29yZSA8IDEwMDApIHtcclxuICAgICAgcmV0dXJuIDEwMDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDIwMDApIHtcclxuICAgICAgcmV0dXJuIDkwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgMzAwMCkge1xyXG4gICAgICByZXR1cm4gODAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA0MDAwKSB7XHJcbiAgICAgIHJldHVybiA3MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDUwMDApIHtcclxuICAgICAgcmV0dXJuIDYwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNjAwMCkge1xyXG4gICAgICByZXR1cm4gNTAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA3MDAwKSB7XHJcbiAgICAgIHJldHVybiA0MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDgwMDApIHtcclxuICAgICAgcmV0dXJuIDMwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAyMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkFzdGVyb2lkcyhhbW91bnQpIHtcclxuICAgIHZhciBpID0gMDtcclxuICAgIGRvIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgYXN0ZXJvaWRzW2lkXSA9IG5ldyBBc3Rlcm9pZChpZCk7XHJcbiAgICB9IHdoaWxlIChpKysgPD0gYW1vdW50KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduUG93ZXJ1cCgpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhwb3dlcnVwcykubGVuZ3RoIDwgMykge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBwb3dlcnVwc1tpZF0gPSBuZXcgUG93ZXJ1cChpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnYW1lT3ZlcigpIHtcclxuICAgICRzY29wZS5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO1xyXG4gICAgfVxyXG4gICAgc2hvdHMgPSB7fTtcclxuICAgIGlmICgkc2NvcGUubG9nZ2VkSW4pIHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzIDwgJHNjb3BlLnNjb3JlKSB7XHJcbiAgICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyLmhpZ2hzY29yZS5hc3Rlcm9pZHMgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgICAgR2FtZVN2Yy5zZXRIaWdoc2NvcmUoJ2FzdGVyb2lkcycsICRzY29wZS5jdXJyZW50VXNlci5faWQsICRzY29wZS5zY29yZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaHNjb3JlIDwgJHNjb3BlLnNjb3JlKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hzY29yZSA9ICRzY29wZS5zY29yZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblx0Ly8gU3RhcnQgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgYW5kXHJcblx0Ly8gZHJhdyBjYW52YXMuXHJcblxyXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHQvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG5cdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHQvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG5cclxuXHRcdC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcblx0XHRyZXNpemVDYW52YXMoKTtcclxuXHR9XHJcblx0Ly8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG5cdC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG5cdC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG5cdGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuXHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTAgOiAxMDUpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuXHJcbiAgdmFyIHRhbGx5ID0gMDtcclxuICB2YXIgZGlyZWN0aW9uID0gdHJ1ZTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgaWYgKHNob3RzW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvdHNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgIGFzdGVyb2lkc1tpXS5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gcG93ZXJ1cHMpIHtcclxuICAgICAgcG93ZXJ1cHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGV4cGxvc2lvbnMpIHtcclxuICAgICAgaWYgKGV4cGxvc2lvbnNbaV0ubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBleHBsb3Npb25zW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV4cGxvc2lvbnNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBldmFsdWF0ZUtleXMoKTtcclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzcGFjZXNoaXAubW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIGNhbnZhcy53aWR0aCwgMCk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgnMCcsICdyZ2IoJyArIE1hdGguZmxvb3IoMjU2IC0gMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJyknKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKCcwLjI1JywgJ3JnYignICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigyNTYgLSAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnKScpO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoJzAuNScsICdyZ2IoJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMjU2IC0gMjU2ICogdGFsbHkgLyAxMDApICsgJyknKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKCcwLjc1JywgJ3JnYignICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigyNTYgLSAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnKScpO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoJzEuMCcsICdyZ2IoJyArIE1hdGguZmxvb3IoMjU2IC0gMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJyknKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgICBjdHguZm9udD0nNjBweCBNb25vdG9uJztcclxuICAgICAgY3R4LmZpbGxUZXh0KCdBc3Rlcm9pZHMnLCBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KCdBc3Rlcm9pZHMnKS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcclxuICAgICAgY3R4LmZvbnQ9JzIwcHggQWxkcmljaCc7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnUHJlc3Mgc3BhY2UgdG8gc3RhcnQnLCBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KCdQcmVzcyBzcGFjZSB0byBzdGFydCcpLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIgKyAyMCk7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyJywgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dCgnRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyJykud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC0gMzApO1xyXG4gICAgfVxyXG4gICAgdGFsbHkgKz0gZGlyZWN0aW9uID8gMSA6IC0xO1xyXG4gICAgaWYgKHRhbGx5ID4gMTAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMTAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAodGFsbHkgPCAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMDtcclxuICAgICAgZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuICB9XHJcblxyXG4gICRzY29wZS5zcGFjZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiYXN0ZXJvaWRzL3NwYWNlJyArIHNwYWNlICsgJy5qcGdcIiknXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG5cclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0J1YmJsZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZXMtcGFnZScpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB2YXIgYnViYmxlcyA9IFtdO1xyXG4gIHZhciBjb2xvcnMgPSBbJyNmZmMzMDAnLCcjZmY1NzMzJywnI2M3MDAzOScsJyM5MDBjM2UnLCcjNTcxODQ1J107XHJcblxyXG4gIGZ1bmN0aW9uIEJ1YmJsZSgpIHtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAwO1xyXG4gICAgdGhpcy5yYWRpdXMgPSAxO1xyXG4gICAgdGhpcy5leHBhbmRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgdGhpcy5jaXJjdW1mZXJlbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNTApICsgNTtcclxuICAgIHRoaXMubWF4UmFkaXVzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjAwKSArIDIwO1xyXG4gICAgdGhpcy54ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoKTtcclxuICAgIHRoaXMueSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGhpcy52eCA9IChNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSk7XHJcbiAgICB0aGlzLnZ5ID0gKE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBidWJibGVzLmZvckVhY2goZnVuY3Rpb24oYnViYmxlKSB7XHJcbiAgICAgIHZhciBjb2xvciA9IGNvbG9yc1tNYXRoLnJvdW5kKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMoYnViYmxlLngsIGJ1YmJsZS55LCBidWJibGUucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbTWF0aC5yb3VuZChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3JzW2NvbG9ycy5sZW5ndGggLSBNYXRoLnJvdW5kKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gYnViYmxlLmNpcmN1bWZlcmVuY2UgKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cztcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWx0ZXJCdWJibGVzKCkge1xyXG4gICAgYnViYmxlcy5wdXNoKG5ldyBCdWJibGUoKSk7XHJcbiAgICBidWJibGVzID0gYnViYmxlcy5maWx0ZXIoZnVuY3Rpb24gKGJ1YmJsZSkge1xyXG4gICAgICBpZiAoYnViYmxlLnJhZGl1cyA9PT0gYnViYmxlLm1heFJhZGl1cykge1xyXG4gICAgICAgIGJ1YmJsZS5leHBhbmRpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBidWJibGUueCArPSBidWJibGUudnggKiBidWJibGUuc3BlZWQ7XHJcbiAgICAgIGJ1YmJsZS55ICs9IGJ1YmJsZS52eSAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnJhZGl1cyArPSAoYnViYmxlLmV4cGFuZGluZyA/IDEgOiAtMSk7XHJcbiAgICAgIHJldHVybiBidWJibGUucmFkaXVzID4gMDtcclxuICAgIH0pO1xyXG4gICAgZHJhdygpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG5cclxuXHJcblx0KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG5cdFx0Ly8gZHJhdyBjYW52YXMuXHJcblx0XHRpbml0aWFsaXplKCk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHRcdC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuXHRcdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0XHR9XHJcblx0XHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0XHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHRcdC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG5cdFx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG5cdFx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdFx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTUgOiAxMTEpO1xyXG5cdFx0fVxyXG5cclxuXHR9KSgpO1xyXG5cclxuXHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ0NoYXJhZGVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHQkc2NvcGUuc2VsZWN0V29yZCA9IGNhdGVnb3J5ID0+IHtcclxuXHRcdCRzY29wZS53b3JkID1cclxuXHRcdFx0JHNjb3BlLmNoYXJhZGVzW2NhdGVnb3J5XVtcclxuXHRcdFx0XHRNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldLmxlbmd0aClcclxuXHRcdFx0XTtcclxuXHRcdGNvbnNvbGUubG9nKCRzY29wZS53b3JkKTtcclxuXHR9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkNvbnRhY3RDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEVtYWlsU3ZjKSB7XHJcbiAgJHNjb3BlLm9wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU3BhbVwiLFxyXG4gICAgICB0ZXh0OiBcIkkgYW0gYSBzcGFtIGJvdCBhbmQgYXV0b21hdGljYWxseSBjaGVjayB0aGUgZmlyc3Qgb3B0aW9uIEkgZmluZCFcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiT3Bwb3J0dW5pdHlcIixcclxuICAgICAgdGV4dDogXCJZb3Ugc2VlbSB0byBoYXZlIHRoZSBza2lsbHMgSSBzZWVrLCBJJ2QgbGlrZSB0byB0YWxrIGFib3V0IHNvbWUgb3Bwb3J0dW5pdGllcy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUmVzdW1lXCIsXHJcbiAgICAgIHRleHQ6IFwiSSBkaWcgdGhlIHJlc3VtZSwgaG93IGRpZCB5b3UgbWFrZSBpdD9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiT3RoZXJcIixcclxuICAgICAgdGV4dDogXCJTdW10aW4gZWxzZSFcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgJHNjb3BlLmNvbnRhY3QgPSB7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBwaG9uZTogXCJcIixcclxuICAgIGFib3V0OiBcIlwiLFxyXG4gICAgbWVzc2FnZTogXCJcIixcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS5zZW5kaW5nID0gdHJ1ZTtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcclxuICAgIEVtYWlsU3ZjLnNlbmQoe1xyXG4gICAgICBlbWFpbDogJHNjb3BlLmNvbnRhY3QuZW1haWwsXHJcbiAgICAgIG5hbWU6ICRzY29wZS5jb250YWN0Lm5hbWUsXHJcbiAgICAgIHBob25lOiAkc2NvcGUuY29udGFjdC5waG9uZSxcclxuICAgICAgYWJvdXQ6ICRzY29wZS5jb250YWN0LmFib3V0LFxyXG4gICAgICBtZXNzYWdlOiAkc2NvcGUuY29udGFjdC5tZXNzYWdlLFxyXG4gICAgfSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbnQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTUy4gc3RhdHVzPSVkLCB0ZXh0PSVzXCIsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UudGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZBSUxFRC4gZXJyb3I9XCIsIGVycik7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignRXhwZXJpZW5jZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICRzY29wZS5nZXRTa2lsbCA9IGZ1bmN0aW9uKHNraWxsQ29kZSkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2tpbGxzKSByZXR1cm47XHJcbiAgICByZXR1cm4gJHNjb3BlLnNraWxscy5maW5kKGZ1bmN0aW9uKHNraWxsKSB7XHJcbiAgICAgIHJldHVybiBza2lsbC5jb2RlID09PSBza2lsbENvZGU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignSG9iYmllc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAkLmdldEpTT04oJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vdXNlci9iZWxnb2NhbmFkaWFuL2Fib3V0Ly5qc29uJywgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRIb2JieSA9ICRzY29wZS5ob2JiaWVzWzBdO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0SG9iYnkgPSBmdW5jdGlvbiAoaG9iYnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gaG9iYnk7XHJcbiAgICAkc2NvcGUuaG9iYnlTZWxlY3RvclZpc2libGUgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd0hvYmJ5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpIHtcclxuICAgIGlmICghdmFsdWUuaW1hZ2VzKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdmFsdWUuaW1hZ2VzLmxlbmd0aCA+IDA7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignTGVtbWluZ3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgR2FtZVN2Yykge1xyXG5cclxuICB2YXIgTEVGVCA9IDA7XHJcbiAgdmFyIFJJR0hUID0gMTtcclxuXHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZW1taW5ncy1wYWdlJyk7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIHZhciBsZW1taW5nc0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgbGVtbWluZ3NJbWFnZS5zcmMgPSAnbGVtbWluZ3MvbGVtbWluZ3MucG5nJztcclxuICB2YXIgZGVjb3JJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGRlY29ySW1hZ2Uuc3JjID0gJ2xlbW1pbmdzL2RlY29yLnBuZyc7XHJcbiAgdmFyIGxlbW1pbmdzID0ge307XHJcbiAgdmFyIHN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgdmFyIGFjdGlvbnMgPSB7XHJcbiAgICB3YWxrOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMF0sXHJcbiAgICAgIGVuZDogWzMyMCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGh1aDoge1xyXG4gICAgICBzdGFydDogWzMyMCwgMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZmFsbDoge1xyXG4gICAgICBzdGFydDogWzAsIDgwXSxcclxuICAgICAgZW5kOiBbMTYwLCAxMDBdLFxyXG4gICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGZseToge1xyXG4gICAgICBzdGFydDogWzE2MCwgODBdLFxyXG4gICAgICBlbmQ6IFs0ODAsIDExMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc3RvcDoge1xyXG4gICAgICBzdGFydDogWzAsIDEyMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTQwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgY2xpbWI6IHtcclxuICAgICAgc3RhcnQ6IFswLCAxNjBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDE4NV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMjVdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwdW5jaDoge1xyXG4gICAgICBzdGFydDogWzAsIDI0MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMzAwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZGlnOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMzIwXSxcclxuICAgICAgZW5kOiBbMzIwLCAzNDVdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBMZW1taW5nKGluaXQpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNhbnZhcy53aWR0aCAtIDIwMCkpICsgMTAwLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLmhlaWdodCAtIDIwMCkpICsgMTAwXTtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSAqIDIgPiAxID8gTEVGVCA6IFJJR0hUO1xyXG4gICAgdGhpcy5hY3QgPSBmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb25zW2FjdGlvbl07XHJcbiAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gKDIwICogKHRoaXMuYWN0aW9uLnJvd3MgLSAxKSkpIC8gdGhpcy5hY3Rpb24ucm93cztcclxuICAgICAgdGhpcy5hbmltYXRpb24gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuYWN0KGluaXQpO1xyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSwgdGhpcy5wb3NpdGlvblsxXSk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gTEVGVCkge1xyXG4gICAgICAgIGN0eC5zY2FsZSgtMSwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UobGVtbWluZ3NJbWFnZSwgKHRoaXMud2lkdGggKiBjb2x1bW4pICsgdGhpcy5hY3Rpb24uc3RhcnRbMF0sICgodGhpcy5oZWlnaHQgKyAyMCkgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgaWYgKHRoaXMuYWN0aW9uLnJldmVyc2UpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlLS07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICF0aGlzLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICBpZiAodGhpcy5jeWNsZSA+PSB0aGlzLmFjdGlvbi5jb2x1bW5zICogdGhpcy5hY3Rpb24ucm93cykge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGF0Y2goKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gWzIwLCAyMF07XHJcbiAgICB0aGlzLmFjdGlvbiA9IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbODIsIDUwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgIHJvd3M6IDEwXHJcbiAgICB9XHJcbiAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICB0aGlzLmhlaWdodCA9ICh0aGlzLmFjdGlvbi5lbmRbMV0gLSB0aGlzLmFjdGlvbi5zdGFydFsxXSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICB0aGlzLm9wZW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgdmFyIGNvbHVtbiwgcm93O1xyXG4gICAgICBpZiAoc3RhcnRlZCkge1xyXG4gICAgICAgIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3IodGhpcy5jeWNsZSAvIHRoaXMuYWN0aW9uLmNvbHVtbnMpO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgOSkge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb2x1bW4gPSAwO1xyXG4gICAgICAgIHJvdyA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgY3R4LmRyYXdJbWFnZShkZWNvckltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKHRoaXMuaGVpZ2h0ICogcm93KSArIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gMSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25MZW1taW5nKCkge1xyXG4gICAgT2JqZWN0LmtleXMoYWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgbGVtbWluZ3NbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKV0gPSBuZXcgTGVtbWluZyhhY3Rpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdHJlc2l6ZUNhbnZhcygpO1xyXG5cdH1cclxuXHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0Ly8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcblx0Ly8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcblx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG5cdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1MCA6IDEwNSk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbiAgc3Bhd25MZW1taW5nKCk7XHJcbiAgbGV0IGhhdGNoID0gbmV3IEhhdGNoKClcclxuICBkcmF3KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBpZiAoIXN0YXJ0ZWQpIHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguZm9udD0nNDBweCBNb25vdG9uJztcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9ICcxMCc7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcclxuICAgICAgY3R4LnJlY3QoMTUsIGNhbnZhcy5oZWlnaHQgLSA0NSwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLndpZHRoICsgMjAsIGN0eC5tZWFzdXJlVGV4dCgnU3RhcnQnKS5oZWlnaHQgKyBjYW52YXMuaGVpZ2h0IC0gNDUpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ1N0YXJ0JywgMjAsIGNhbnZhcy5oZWlnaHQgLSA1MCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKHZhciBpIGluIGxlbW1pbmdzKSB7XHJcbiAgICAgICAgbGVtbWluZ3NbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYXRjaC5vcGVuKCk7XHJcbiAgICBzdGFydGVkID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGRyYXcoKTtcclxuICAgIH0sIDE1MCk7XHJcbiAgfVxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMaXN0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIENhdGVnb3JpZXNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IHRydWU7XHJcblxyXG4gICRzY29wZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5nZXRDYXRlZ29yaWVzKClcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICRzY29wZS50YXNrcyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpIGluICRzY29wZS5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaiBpbiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrcykge1xyXG4gICAgICAgICAgJHNjb3BlLnRhc2tzLnB1c2goe1xyXG4gICAgICAgICAgICBcImNhdGVnb3J5XCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUsXHJcbiAgICAgICAgICAgIFwidGFza1wiOiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrc1tqXS5uYW1lXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RDYXRlZ29yeSA9IGZ1bmN0aW9uKGNhdGVnb3J5KSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkVGFza3MgPSBbXTtcclxuICAgICRzY29wZS5zZWxlY3RhYmxlVGFza3MgPSBbXTtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcy5wdXNoKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgIH1cclxuICAgICRzY29wZS5zaG93Q2F0ZWdvcnkgPSBmYWxzZTtcclxuICAgICRzY29wZS5lbnRlcmVkQ2F0ZWdvcnkgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUubmV3Q2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSA9PT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkoJHNjb3BlLmNhdGVnb3JpZXNbaV0pO1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZENhdGVnb3J5KHtcclxuICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuaW5pdCgpO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0ubmFtZSA9PT0gdGFzaykge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0VGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5Lm5hbWUsIHtcclxuICAgICAgICB0YXNrOiB0YXNrXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLnB1c2goeyBuYW1lOiB0YXNrIH0pO1xyXG4gICAgICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1skc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRUYXNrID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUudW5zZWxlY3RUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RhYmxlVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5hZGRUYXNrID0gZnVuY3Rpb24odGFza0xpc3QsIHRhc2spIHtcclxuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnJlbW92ZVRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3Quc3BsaWNlKHRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zdGFydFByaW9yaXRpemluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5zZXRQcmlvcml0eUxpc3QoJHNjb3BlLnNlbGVjdGVkVGFza3MpO1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy9wcmlvcml0aXplJyk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldFF1ZXN0aW9ucyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2VsZWN0ZWRUYXNrcykgcmV0dXJuICcnO1xyXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9ICRzY29wZS5zZWxlY3RlZFRhc2tzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgY291bnRlciArPSBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignTG9naW5DdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgRmlyZWJhc2VVSSBXaWRnZXQgdXNpbmcgRmlyZWJhc2UuXHJcbiAgdmFyIHVpID0gbmV3IGZpcmViYXNldWkuYXV0aC5BdXRoVUkoZmlyZWJhc2UuYXV0aCgpKTtcclxuXHJcbiAgJHNjb3BlLiRvbignbG9nb3V0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB1aS5yZXNldCgpO1xyXG4gICAgc3RhcnRVSSgpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydFVJKCkge1xyXG4gICAgdWkuc3RhcnQoJyNmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyJywge1xyXG4gICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBzaWduSW5TdWNjZXNzOiBmdW5jdGlvbiAoY3VycmVudFVzZXIsIGNyZWRlbnRpYWwsIHJlZGlyZWN0VXJsKSB7XHJcbiAgICAgICAgICAvLyBObyByZWRpcmVjdC5cclxuICAgICAgICAgIGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5hdXRoKClcclxuICAgICAgICAgICAgLmN1cnJlbnRVc2VyLmdldElkVG9rZW4odHJ1ZSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGlkVG9rZW4pIHtcclxuICAgICAgICAgICAgICBVc2VyU3ZjLmF1dGhlbnRpY2F0ZSh7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogY3VycmVudFVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogY3VycmVudFVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwaG90b1VSTDogY3VycmVudFVzZXIucGhvdG9VUkwsXHJcbiAgICAgICAgICAgICAgICBlbWFpbFZlcmlmaWVkOiBjdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkLFxyXG4gICAgICAgICAgICAgICAgaWRUb2tlbjogaWRUb2tlbixcclxuICAgICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdCgnbG9naW4nLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgJCgnI21vZGFsLWxvZ2luJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgLy8kbG9jYXRpb24ucGF0aCgnLycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KCdwb3B1cCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTG9naW4gRmFpbGVkJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYWxlcnQtZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBzaWduSW5GYWlsdXJlIGNhbGxiYWNrIG11c3QgYmUgcHJvdmlkZWQgdG8gaGFuZGxlIG1lcmdlIGNvbmZsaWN0cyB3aGljaFxyXG4gICAgICAgIC8vIG9jY3VyIHdoZW4gYW4gZXhpc3RpbmcgY3JlZGVudGlhbCBpcyBsaW5rZWQgdG8gYW4gYW5vbnltb3VzIHVzZXIuXHJcbiAgICAgICAgc2lnbkluRmFpbHVyZTogZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBGb3IgbWVyZ2UgY29uZmxpY3RzLCB0aGUgZXJyb3IuY29kZSB3aWxsIGJlXHJcbiAgICAgICAgICAvLyAnZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdCcuXHJcbiAgICAgICAgICBpZiAoZXJyb3IuY29kZSAhPSAnZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gVGhlIGNyZWRlbnRpYWwgdGhlIHVzZXIgdHJpZWQgdG8gc2lnbiBpbiB3aXRoLlxyXG4gICAgICAgICAgdmFyIGNyZWQgPSBlcnJvci5jcmVkZW50aWFsO1xyXG4gICAgICAgICAgLy8gQ29weSBkYXRhIGZyb20gYW5vbnltb3VzIHVzZXIgdG8gcGVybWFuZW50IHVzZXIgYW5kIGRlbGV0ZSBhbm9ueW1vdXNcclxuICAgICAgICAgIC8vIHVzZXIuXHJcbiAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgIC8vIEZpbmlzaCBzaWduLWluIGFmdGVyIGRhdGEgaXMgY29waWVkLlxyXG4gICAgICAgICAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoQ3JlZGVudGlhbChjcmVkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVpU2hvd246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vIFRoZSB3aWRnZXQgaXMgcmVuZGVyZWQuXHJcbiAgICAgICAgICAvLyBIaWRlIHRoZSBsb2FkZXIuXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzaWduSW5TdWNjZXNzVXJsOiAnL2hvbWUnLFxyXG4gICAgICBzaWduSW5PcHRpb25zOiBbXHJcbiAgICAgICAgLy9maXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICAvLyBXaWxsIHVzZSBwb3B1cCBmb3IgSURQIFByb3ZpZGVycyBzaWduLWluIGZsb3cgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCwgcmVkaXJlY3QuXHJcbiAgICAgIHNpZ25JbkZsb3c6ICdwb3B1cCcsXHJcbiAgICAgIC8vIE90aGVyIGNvbmZpZyBvcHRpb25zLi4uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0VUkoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUG9zdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGZpbHRlciwgUG9zdHNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XHJcbiAgICAgIFBvc3RzU3ZjLmNyZWF0ZSh7XHJcbiAgICAgICAgYm9keTogJHNjb3BlLnBvc3RCb2R5XHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgICAgICAkc2NvcGUucG9zdEJvZHkgPSBudWxsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBQb3N0c1N2Yy5mZXRjaCgpXHJcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUucG9zdHMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKCd3czpuZXdfcG9zdCcsIGZ1bmN0aW9uIChfLCBwb3N0KSB7XHJcbiAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgUG9zdHNTdmMuZ2V0UG9zdChwb3N0KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUucG9zdHMudW5zaGlmdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1ByaW9yaXRpemVDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBDYXRlZ29yaWVzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5wcmlvcml0eUxpc3QgPSBDYXRlZ29yaWVzU3ZjLmdldFByaW9yaXR5TGlzdCgpO1xyXG5cclxuICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICRsb2NhdGlvbi5wYXRoKCcvbGlzdHMnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24gPSAxO1xyXG4gICAgJHNjb3BlLmN1cnJlbnRRdWVzdGlvbiA9IDE7XHJcbiAgICAkc2NvcGUuZG9uZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLm1ha2VDaG9pY2UgPSBmdW5jdGlvbihjaG9pY2UpIHtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5pZCA9PT0gJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24pIHtcclxuICAgICAgICAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA9IGNob2ljZSA9PT0gMSA/ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uZmlyc3RDaG9pY2UgOiAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLnNlY29uZENob2ljZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uID09PSAkc2NvcGUuY3VycmVudFF1ZXN0aW9uKSB7XHJcbiAgICAgICRzY29wZS5jdXJyZW50UXVlc3Rpb24gPSAkc2NvcGUuY3VycmVudFF1ZXN0aW9uID09PSAkc2NvcGUucHJpb3JpdHlMaXN0Lmxlbmd0aCA/IDEgOiAkc2NvcGUuY3VycmVudFF1ZXN0aW9uICsgMTtcclxuICAgIH1cclxuICAgICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uID0gJHNjb3BlLmN1cnJlbnRRdWVzdGlvbjtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yIChpIGluICRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlID09PSAnJykge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICAkKCcjcHJpb3JpdGl6ZUNob2ljZXMnKS5oaWRlKDMwMCk7XHJcbiAgICAgICRzY29wZS5kb25lID0gdHJ1ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0QnV0dG9uVmFsdWUgPSBmdW5jdGlvbihjaG9pY2UpIHtcclxuICAgIGlmICghJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5wcmlvcml0eUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uaWQgPT09ICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGNob2ljZSA9PT0gMSA/ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uZmlyc3RDaG9pY2UgOiAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLnNlY29uZENob2ljZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RRdWVzdGlvbiA9IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbiA9IHF1ZXN0aW9uO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRGaWx0ZXJlZFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCEkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIHJldHVybiAkc2NvcGUucHJpb3JpdHlMaXN0XHJcbiAgICAgIC5zb3J0KGZ1bmN0aW9uKGEsIGIpeyByZXR1cm4gYS5pZC1iLmlkOyB9KVxyXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKHF1ZXN0aW9uKSB7IHJldHVybiBxdWVzdGlvbi5jaG9pY2UgIT09ICcnIHx8IHF1ZXN0aW9uLmlkID09PSAkc2NvcGUuY3VycmVudFF1ZXN0aW9uOyB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0Q2hvaWNlc01hZGUgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICB2YXIgY2hvaWNlc01hZGUgPSAwO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSAhPT0gJycpIHtcclxuICAgICAgICBjaG9pY2VzTWFkZSsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2hvaWNlc01hZGU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldEJ1dHRvbkNsYXNzID0gZnVuY3Rpb24oY2hvaWNlKSB7XHJcbiAgICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmlkID09PSAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbikge1xyXG4gICAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA9PT0gJycpIHtcclxuICAgICAgICAgIHJldHVybiAnYnRuLXByaW1hcnknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hvaWNlID09PSAxKSB7XHJcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5maXJzdENob2ljZSA9PT0gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgPyAnYnRuLXN1Y2Nlc3MnIDogJ2J0bi1kYW5nZXInO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5zZWNvbmRDaG9pY2UgPT09ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlID8gJ2J0bi1zdWNjZXNzJyA6ICdidG4tZGFuZ2VyJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd0Nob2ljZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICQoJyNwcmlvcml0aXplQ2hvaWNlcycpLnNob3coMTAwMCk7XHJcbiAgICAkKCcjcmV2aWV3Q2hvaWNlcycpLmhpZGUoKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhcnRDbGljayA9IGZ1bmN0aW9uKCBldmVudCApIHtcclxuICAgIGlmICggJHNjb3BlLmNoYXJ0ICkge1xyXG4gICAgICAvLyBEaWZmZXJlbnQgbWV0aG9kcyBkZXBlbmRpbmcgb24gY2hhcnQgdHlwZVxyXG4gICAgICAvL2NvbnNvbGUubG9nKCAkc2NvcGUuY2hhcnQuZ2V0UG9pbnRzQXRFdmVudCggZXZlbnQgKSApOyAvLyBmb3IgUG9pbnRzXHJcbiAgICAgIGNvbnNvbGUubG9nKCAkc2NvcGUuY2hhcnQuZ2V0U2VnbWVudHNBdEV2ZW50KCBldmVudCApICk7IC8vIGZvciBTZWdtZW50c1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zaG93UmVzdWx0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICRzY29wZS5kYXRhID0gW107XHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgLy8gU2V0cyB0aGUgY2hhcnQgdG8gYmUgcmVzcG9uc2l2ZVxyXG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG5cclxuICAgICAgLy9Cb29sZWFuIC0gV2hldGhlciB3ZSBzaG91bGQgc2hvdyBhIHN0cm9rZSBvbiBlYWNoIHNlZ21lbnRcclxuICAgICAgc2VnbWVudFNob3dTdHJva2UgOiB0cnVlLFxyXG5cclxuICAgICAgLy9TdHJpbmcgLSBUaGUgY29sb3VyIG9mIGVhY2ggc2VnbWVudCBzdHJva2VcclxuICAgICAgc2VnbWVudFN0cm9rZUNvbG9yIDogJyNmZmYnLFxyXG5cclxuICAgICAgLy9OdW1iZXIgLSBUaGUgd2lkdGggb2YgZWFjaCBzZWdtZW50IHN0cm9rZVxyXG4gICAgICBzZWdtZW50U3Ryb2tlV2lkdGggOiAyLFxyXG5cclxuICAgICAgLy9OdW1iZXIgLSBUaGUgcGVyY2VudGFnZSBvZiB0aGUgY2hhcnQgdGhhdCB3ZSBjdXQgb3V0IG9mIHRoZSBtaWRkbGVcclxuICAgICAgcGVyY2VudGFnZUlubmVyQ3V0b3V0IDogMCwgLy8gVGhpcyBpcyAwIGZvciBQaWUgY2hhcnRzXHJcblxyXG4gICAgICAvL051bWJlciAtIEFtb3VudCBvZiBhbmltYXRpb24gc3RlcHNcclxuICAgICAgYW5pbWF0aW9uU3RlcHMgOiAxMDAsXHJcblxyXG4gICAgICAvL1N0cmluZyAtIEFuaW1hdGlvbiBlYXNpbmcgZWZmZWN0XHJcbiAgICAgIGFuaW1hdGlvbkVhc2luZyA6ICdlYXNlT3V0Qm91bmNlJyxcclxuXHJcbiAgICAgIC8vQm9vbGVhbiAtIFdoZXRoZXIgd2UgYW5pbWF0ZSB0aGUgcm90YXRpb24gb2YgdGhlIERvdWdobnV0XHJcbiAgICAgIGFuaW1hdGVSb3RhdGUgOiB0cnVlLFxyXG5cclxuICAgICAgLy9Cb29sZWFuIC0gV2hldGhlciB3ZSBhbmltYXRlIHNjYWxpbmcgdGhlIERvdWdobnV0IGZyb20gdGhlIGNlbnRyZVxyXG4gICAgICBhbmltYXRlU2NhbGUgOiBmYWxzZSxcclxuXHJcbiAgICAgIC8vU3RyaW5nIC0gQSBsZWdlbmQgdGVtcGxhdGVcclxuICAgICAgbGVnZW5kVGVtcGxhdGUgOiAnPGgzIGNsYXNzPVwidGMtY2hhcnQtanMtbGVnZW5kXCIgc3R5bGU9XCJwYWRkaW5nOjVweFwiPjwlIGZvciAodmFyIGk9MDsgaTxzZWdtZW50cy5sZW5ndGg7IGkrKyl7JT48ZGl2IGNsYXNzPVwibGFiZWxcIiBzdHlsZT1cImZsb2F0OmxlZnQ7bWFyZ2luOjVweDtiYWNrZ3JvdW5kLWNvbG9yOjwlPXNlZ21lbnRzW2ldLmZpbGxDb2xvciU+XCI+PCVpZihzZWdtZW50c1tpXS5sYWJlbCl7JT48JT1zZWdtZW50c1tpXS5sYWJlbCU+PCV9JT48L2Rpdj48JX0lPjwvaDM+J1xyXG4gICAgfTtcclxuICAgIGZvciAodmFyIGkgaW4gQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuY2hvaWNlc1tpXS52b3RlcyA9IDA7XHJcbiAgICAgIGZvciAodmFyIGogaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICAgIGlmIChDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0ubmFtZSA9PT0gJHNjb3BlLnByaW9yaXR5TGlzdFtqXS5jaG9pY2UpIHtcclxuICAgICAgICAgIENhdGVnb3JpZXNTdmMuY2hvaWNlc1tpXS52b3RlcysrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYS52b3RlcyA8IGIudm90ZXM7IH0pO1xyXG4gICAgZm9yIChpIGluIENhdGVnb3JpZXNTdmMuY2hvaWNlcykge1xyXG4gICAgICAkc2NvcGUuZGF0YS5wdXNoKHtcclxuICAgICAgICB2YWx1ZTogQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLnZvdGVzLFxyXG4gICAgICAgIGxhYmVsOiBDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0ubmFtZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICQoJyNwcmlvcml0aXplUmVzdWx0JykuaGlkZSgpO1xyXG4gICAgJCgnI3ByaW9yaXRpemVDaG9pY2VzJykuaGlkZSgpO1xyXG4gICAgJCgnI3ByaW9yaXR5UmVzdWx0cycpLnNob3coMTAwMCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1Byb2ZpbGVDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcblxyXG4gIGlmICghJHNjb3BlLmN1cnJlbnRVc2VyKSB7XHJcbiAgICAkbG9jYXRpb24ucGF0aCgnLycpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKCcjc2V4LWluZGljYXRvcicpLm9mZnNldCh7IGxlZnQ6ICgkc2NvcGUuY3VycmVudFVzZXIuZ2VuZGVyLnNleCAvIDIwMCAqICQoJyNzZXgnKS53aWR0aCgpKSArICQoJyNzZXgnKS5vZmZzZXQoKS5sZWZ0IH0pO1xyXG4gICAgJCgnI2lkZW50aXR5LWluZGljYXRvcicpLm9mZnNldCh7IGxlZnQ6ICgkc2NvcGUuY3VycmVudFVzZXIuZ2VuZGVyLmlkZW50aXR5IC8gMjAwICogJCgnI2lkZW50aXR5Jykud2lkdGgoKSkgKyAkKCcjaWRlbnRpdHknKS5vZmZzZXQoKS5sZWZ0IH0pO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLnNleGVzID0gW1xyXG4gICAgJ01hbGUnLFxyXG4gICAgJ0Z0TSBNYWxlJyxcclxuICAgICdJbnRlcnNleCcsXHJcbiAgICAnTXRGIEZlbWFsZScsXHJcbiAgICAnRmVtYWxlJ1xyXG4gIF07XHJcbiAgJHNjb3BlLmlkZW50aXRpZXMgPSBbXHJcbiAgICAnTWFuJyxcclxuICAgICdCaWdlbmRlcicsXHJcbiAgICAnUGFuZ2VuZGVyJyxcclxuICAgICdBZ2VuZGVyJyxcclxuICAgICdQb2x5Z2VuZGVyJyxcclxuICAgICdHZW5kZXJmbHVpZCcsXHJcbiAgICAnR2VuZGVycXVlZXInLFxyXG4gICAgJ1F1ZWVyJyxcclxuICAgICdXb21hbidcclxuICBdO1xyXG5cclxuICAkc2NvcGUuZGF0ZU9wdGlvbnMgPSB7XHJcbiAgICBtYXhEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgbWluRGF0ZTogbmV3IERhdGUoMTkwMCwgMSwgMSksXHJcbiAgICBpbml0RGF0ZTogbmV3IERhdGUoMjAwMCwgMSwgMSksXHJcbiAgICBkYXRlcGlja2VyTW9kZTogJ3llYXInXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdlbmRlciA9IGZ1bmN0aW9uKGFycmF5LCBwZXJjZW50YWdlKSB7XHJcbiAgICByZXR1cm4gYXJyYXlbTWF0aC5yb3VuZChwZXJjZW50YWdlIC8gMjAwICogKGFycmF5Lmxlbmd0aCAtIDEpKV07XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnN0YXJ0U2xpZGVyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIH07XHJcbiAgJHNjb3BlLmRyYWdTbGlkZXIgPSBmdW5jdGlvbihldmVudCwgdWksIHR5cGUpIHtcclxuICAgICRzY29wZS5jdXJyZW50VXNlci5nZW5kZXJbdHlwZV0gPSBNYXRoLnJvdW5kKCgkKCcjJyArIHR5cGUgKyAnLWluZGljYXRvcicpLm9mZnNldCgpLmxlZnQgLSAkKCcjJyArIHR5cGUpLm9mZnNldCgpLmxlZnQpIC8gKCQoJyMnICsgdHlwZSkud2lkdGgoKSAtICQoJyMnICsgdHlwZSArICctaW5kaWNhdG9yJykud2lkdGgoKSkgKiAyMDApO1xyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gIH07XHJcbiAgJHNjb3BlLnN0b3BTbGlkZXIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVzZXJuYW1lVG9nZ2xlID0gdHJ1ZTtcclxuICAkc2NvcGUucGFzc3dvcmRUb2dnbGUgPSB0cnVlO1xyXG5cclxuICAkc2NvcGUudG9nZ2xlVXNlcm5hbWUgPSBmdW5jdGlvbigpIHtcclxuICAgICRzY29wZS51c2VybmFtZVRvZ2dsZSA9ICEkc2NvcGUudXNlcm5hbWVUb2dnbGU7XHJcbiAgICAkc2NvcGUubmV3VXNlcm5hbWUgPSAkc2NvcGUuY3VycmVudFVzZXIudXNlcm5hbWU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkc2NvcGUubmV3UGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLmNvbmZpcm1QYXNzd29yZCA9IG51bGw7XHJcbiAgICAkc2NvcGUucGFzc3dvcmRUb2dnbGUgPSAhJHNjb3BlLnBhc3N3b3JkVG9nZ2xlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGVja1Bhc3N3b3JkID0gZnVuY3Rpb24gKHBhc3N3b3JkKSB7XHJcbiAgICBpZiAocGFzc3dvcmQpIHtcclxuICAgICAgdmFyIHVzZXIgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICBVc2VyU3ZjLmNoZWNrUGFzc3dvcmQodXNlciwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAkKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjZDMVwiIH0sIDIwMCkuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogb3JpZ2luYWxCZyB9LCAyMDApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAob2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgIGlmIChuZXdQYXNzd29yZCkge1xyXG4gICAgICBpZiAobmV3UGFzc3dvcmQgPT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgdmFyIHVzZXIgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICAgIFVzZXJTdmMuY2hhbmdlUGFzc3dvcmQodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgJHNjb3BlLiRlbWl0KCdwb3B1cCcsIHtcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkIENoYW5nZWQnLFxyXG4gICAgICAgICAgICB0eXBlOiAnYWxlcnQtc3VjY2VzcydcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJHNjb3BlLm9sZFBhc3N3b3JkID0gbnVsbDtcclxuICAgICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICRzY29wZS4kZW1pdCgncG9wdXAnLCB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCBDaGFuZ2UgRmFpbGVkJyxcclxuICAgICAgICAgICAgdHlwZTogJ2FsZXJ0LWRhbmdlcidcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBvcmlnaW5hbEJnID0gJChcIi5wYXNzd29yZFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIik7XHJcbiAgICAgICAgJChcIi5wYXNzd29yZFwiKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNGRkI2QzFcIiB9LCAyMDApLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG9yaWdpbmFsQmcgfSwgMjAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VybmFtZSkge1xyXG4gICAgJHNjb3BlLiRlbWl0KCdsb2FkaW5nJyk7XHJcbiAgICBVc2VyU3ZjLmNoYW5nZVVzZXJuYW1lKCRzY29wZS5jdXJyZW50VXNlci5faWQsIHVzZXJuYW1lKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICRzY29wZS4kZW1pdCgndXBkYXRlJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAkc2NvcGUuJGVtaXQoJ3BvcHVwJywge1xyXG4gICAgICAgIG1lc3NhZ2U6IHVzZXJuYW1lICsgJyBhbHJlYWR5IGluIHVzZScsXHJcbiAgICAgICAgdHlwZTogJ2FsZXJ0LWRhbmdlcidcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUudXBkYXRlVXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIpIHsgIFxyXG4gICAgICAkc2NvcGUuJGVtaXQoJ2xvYWRpbmcnKTtcclxuICAgICAgVXNlclN2Yy51cGRhdGVVc2VyKCRzY29wZS5jdXJyZW50VXNlcilcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KCd1cGRhdGUnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gICRzY29wZS4kd2F0Y2goJ2N1cnJlbnRVc2VyLmZsYWdzLmxlbmd0aCcsIGZ1bmN0aW9uKGxlbmd0aCkge1xyXG4gICAgJHNjb3BlLnVwZGF0ZVVzZXIoKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmxvYWRDb3VudHJpZXMgPSBmdW5jdGlvbigkcXVlcnkpIHtcclxuICAgIHZhciBjb3VudHJpZXMgPSBbXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQW5kb3JyYVwiLCBcImZsYWdcIjogXCJmbGFnLWFkXCIsIFwidGlkYml0XCI6IFwiXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVbml0ZWQgQXJhYiBFbWlyYXRlc1wiLCBcImZsYWdcIjogXCJmbGFnLWFlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBZmdoYW5pc3RhblwiLCBcImZsYWdcIjogXCJmbGFnLWFmXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsIFwiZmxhZ1wiOiBcImZsYWctYWdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFuZ3VpbGxhXCIsIFwiZmxhZ1wiOiBcImZsYWctYWlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFsYmFuaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hbFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQXJtZW5pYVwiLCBcImZsYWdcIjogXCJmbGFnLWFtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbmdvbGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQW50YXJjdGljYVwiLCBcImZsYWdcIjogXCJmbGFnLWFxXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBcmdlbnRpbmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQW1lcmljYW4gU29tb2FcIiwgXCJmbGFnXCI6IFwiZmxhZy1hc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQXVzdHJpYVwiLCBcImZsYWdcIjogXCJmbGFnLWF0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBdXN0cmFsaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hdVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQXJ1YmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hd1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiw4VsYW5kIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1heFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQXplcmJhaWphblwiLCBcImZsYWdcIjogXCJmbGFnLWF6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctYmFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJhcmJhZG9zXCIsIFwiZmxhZ1wiOiBcImZsYWctYmJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJhbmdsYWRlc2hcIiwgXCJmbGFnXCI6IFwiZmxhZy1iZFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmVsZ2l1bVwiLCBcImZsYWdcIjogXCJmbGFnLWJlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCdXJraW5hIEZhc29cIiwgXCJmbGFnXCI6IFwiZmxhZy1iZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQnVsZ2FyaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1iZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmFocmFpblwiLCBcImZsYWdcIjogXCJmbGFnLWJoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCdXJ1bmRpXCIsIFwiZmxhZ1wiOiBcImZsYWctYmlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJlbmluXCIsIFwiZmxhZ1wiOiBcImZsYWctYmpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhaW50IEJhcnRow6lsZW15XCIsIFwiZmxhZ1wiOiBcImZsYWctYmxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJlcm11ZGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1ibVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQnJ1bmVpIFwiLCBcImZsYWdcIjogXCJmbGFnLWJuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCb2xpdmlhLCBQbHVyaW5hdGlvbmFsIFN0YXRlIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctYm9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCIsIFwiZmxhZ1wiOiBcImZsYWctYnFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJyYXppbFwiLCBcImZsYWdcIjogXCJmbGFnLWJyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCYWhhbWFzXCIsIFwiZmxhZ1wiOiBcImZsYWctYnNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJodXRhblwiLCBcImZsYWdcIjogXCJmbGFnLWJ0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCb3V2ZXQgSXNsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctYnZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJvdHN3YW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctYndcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJlbGFydXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1ieVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmVsaXplXCIsIFwiZmxhZ1wiOiBcImZsYWctYnpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNhbmFkYVwiLCBcImZsYWdcIjogXCJmbGFnLWNhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDb2NvcyAoS2VlbGluZykgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLWNjXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDb25nbywgdGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlXCIsIFwiZmxhZ1wiOiBcImZsYWctY2RcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpY1wiLCBcImZsYWdcIjogXCJmbGFnLWNmXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDb25nb1wiLCBcImZsYWdcIjogXCJmbGFnLWNnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTd2l0emVybGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWNoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDw7R0ZSBkJ0l2b2lyZVwiLCBcImZsYWdcIjogXCJmbGFnLWNpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDb29rIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1ja1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2hpbGVcIiwgXCJmbGFnXCI6IFwiZmxhZy1jbFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2FtZXJvb25cIiwgXCJmbGFnXCI6IFwiZmxhZy1jbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2hpbmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1jblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29sb21iaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1jb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29zdGEgUmljYVwiLCBcImZsYWdcIjogXCJmbGFnLWNyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDdWJhXCIsIFwiZmxhZ1wiOiBcImZsYWctY3VcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNhYm8gVmVyZGVcIiwgXCJmbGFnXCI6IFwiZmxhZy1jdlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ3VyYcOnYW9cIiwgXCJmbGFnXCI6IFwiZmxhZy1jd1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2hyaXN0bWFzIElzbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWN4XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDeXBydXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1jeVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ3plY2ggUmVwdWJsaWNcIiwgXCJmbGFnXCI6IFwiZmxhZy1jelwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR2VybWFueVwiLCBcImZsYWdcIjogXCJmbGFnLWRlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJEamlib3V0aVwiLCBcImZsYWdcIjogXCJmbGFnLWRqXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJEZW5tYXJrXCIsIFwiZmxhZ1wiOiBcImZsYWctZGtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkRvbWluaWNhXCIsIFwiZmxhZ1wiOiBcImZsYWctZG1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkRvbWluaWNhbiBSZXB1YmxpY1wiLCBcImZsYWdcIjogXCJmbGFnLWRvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbGdlcmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctZHpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkVjdWFkb3JcIiwgXCJmbGFnXCI6IFwiZmxhZy1lY1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRXN0b25pYVwiLCBcImZsYWdcIjogXCJmbGFnLWVlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJFZ3lwdFwiLCBcImZsYWdcIjogXCJmbGFnLWVnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJXZXN0ZXJuIFNhaGFyYVwiLCBcImZsYWdcIjogXCJmbGFnLWVoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJFcml0cmVhXCIsIFwiZmxhZ1wiOiBcImZsYWctZXJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNwYWluXCIsIFwiZmxhZ1wiOiBcImZsYWctZXNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkV0aGlvcGlhXCIsIFwiZmxhZ1wiOiBcImZsYWctZXRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkZpbmxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1maVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRmlqaVwiLCBcImZsYWdcIjogXCJmbGFnLWZqXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcylcIiwgXCJmbGFnXCI6IFwiZmxhZy1ma1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLWZtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGYXJvZSBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctZm9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkZyYW5jZVwiLCBcImZsYWdcIjogXCJmbGFnLWZyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHYWJvblwiLCBcImZsYWdcIjogXCJmbGFnLWdhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2JcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdyZW5hZGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1nZFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR2VvcmdpYVwiLCBcImZsYWdcIjogXCJmbGFnLWdlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGcmVuY2ggR3VpYW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2ZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkd1ZXJuc2V5XCIsIFwiZmxhZ1wiOiBcImZsYWctZ2dcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdoYW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2hcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdpYnJhbHRhclwiLCBcImZsYWdcIjogXCJmbGFnLWdpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHcmVlbmxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1nbFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR2FtYmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctZ21cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkd1aW5lYVwiLCBcImZsYWdcIjogXCJmbGFnLWduXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHdWFkZWxvdXBlXCIsIFwiZmxhZ1wiOiBcImZsYWctZ3BcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkVxdWF0b3JpYWwgR3VpbmVhXCIsIFwiZmxhZ1wiOiBcImZsYWctZ3FcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdyZWVjZVwiLCBcImZsYWdcIjogXCJmbGFnLWdyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLWdzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHdWF0ZW1hbGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1ndFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3VhbVwiLCBcImZsYWdcIjogXCJmbGFnLWd1XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHdWluZWEtQmlzc2F1XCIsIFwiZmxhZ1wiOiBcImZsYWctZ3dcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkd1eWFuYVwiLCBcImZsYWdcIjogXCJmbGFnLWd5XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJIb25nIEtvbmdcIiwgXCJmbGFnXCI6IFwiZmxhZy1oa1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctaG1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkhvbmR1cmFzXCIsIFwiZmxhZ1wiOiBcImZsYWctaG5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNyb2F0aWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1oclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSGFpdGlcIiwgXCJmbGFnXCI6IFwiZmxhZy1odFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSHVuZ2FyeVwiLCBcImZsYWdcIjogXCJmbGFnLWh1XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJbmRvbmVzaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1pZFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSXJlbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWllXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJc3JhZWxcIiwgXCJmbGFnXCI6IFwiZmxhZy1pbFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSXNsZSBvZiBNYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1pbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSW5kaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1pblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCIsIFwiZmxhZ1wiOiBcImZsYWctaW9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIklyYXFcIiwgXCJmbGFnXCI6IFwiZmxhZy1pcVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSXJhbiwgSXNsYW1pYyBSZXB1YmxpYyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLWlyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJY2VsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctaXNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkl0YWx5XCIsIFwiZmxhZ1wiOiBcImZsYWctaXRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkplcnNleVwiLCBcImZsYWdcIjogXCJmbGFnLWplXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJKYW1haWNhXCIsIFwiZmxhZ1wiOiBcImZsYWctam1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkpvcmRhblwiLCBcImZsYWdcIjogXCJmbGFnLWpvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJKYXBhblwiLCBcImZsYWdcIjogXCJmbGFnLWpwXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJLZW55YVwiLCBcImZsYWdcIjogXCJmbGFnLWtlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJLeXJneXpzdGFuXCIsIFwiZmxhZ1wiOiBcImZsYWcta2dcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNhbWJvZGlhXCIsIFwiZmxhZ1wiOiBcImZsYWcta2hcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIktpcmliYXRpXCIsIFwiZmxhZ1wiOiBcImZsYWcta2lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNvbW9yb3NcIiwgXCJmbGFnXCI6IFwiZmxhZy1rbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsIFwiZmxhZ1wiOiBcImZsYWcta25cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIktvcmVhLCBEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWcta3BcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIktvcmVhLCBSZXB1YmxpYyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLWtyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJLdXdhaXRcIiwgXCJmbGFnXCI6IFwiZmxhZy1rd1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2F5bWFuIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1reVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiS2F6YWtoc3RhblwiLCBcImZsYWdcIjogXCJmbGFnLWt6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wiLCBcImZsYWdcIjogXCJmbGFnLWxhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMZWJhbm9uXCIsIFwiZmxhZ1wiOiBcImZsYWctbGJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhaW50IEx1Y2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctbGNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxpZWNodGVuc3RlaW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1saVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3JpIExhbmthXCIsIFwiZmxhZ1wiOiBcImZsYWctbGtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxpYmVyaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1sclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGVzb3Rob1wiLCBcImZsYWdcIjogXCJmbGFnLWxzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMaXRodWFuaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1sdFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTHV4ZW1ib3VyZ1wiLCBcImZsYWdcIjogXCJmbGFnLWx1XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMYXR2aWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1sdlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGlieWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1seVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTW9yb2Njb1wiLCBcImZsYWdcIjogXCJmbGFnLW1hXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNb25hY29cIiwgXCJmbGFnXCI6IFwiZmxhZy1tY1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTW9sZG92YSwgUmVwdWJsaWMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1tZFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTW9udGVuZWdyb1wiLCBcImZsYWdcIjogXCJmbGFnLW1lXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KVwiLCBcImZsYWdcIjogXCJmbGFnLW1mXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWRhZ2FzY2FyXCIsIFwiZmxhZ1wiOiBcImZsYWctbWdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hcnNoYWxsIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1taFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFjZWRvbmlhLCB0aGUgZm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctbWtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hbGlcIiwgXCJmbGFnXCI6IFwiZmxhZy1tbFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTXlhbm1hclwiLCBcImZsYWdcIjogXCJmbGFnLW1tXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNb25nb2xpYVwiLCBcImZsYWdcIjogXCJmbGFnLW1uXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWNhb1wiLCBcImZsYWdcIjogXCJmbGFnLW1vXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1tcFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFydGluaXF1ZVwiLCBcImZsYWdcIjogXCJmbGFnLW1xXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYXVyaXRhbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbXJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vbnRzZXJyYXRcIiwgXCJmbGFnXCI6IFwiZmxhZy1tc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFsdGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1tdFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWF1cml0aXVzXCIsIFwiZmxhZ1wiOiBcImZsYWctbXVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hbGRpdmVzXCIsIFwiZmxhZ1wiOiBcImZsYWctbXZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hbGF3aVwiLCBcImZsYWdcIjogXCJmbGFnLW13XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNZXhpY29cIiwgXCJmbGFnXCI6IFwiZmxhZy1teFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFsYXlzaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1teVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTW96YW1iaXF1ZVwiLCBcImZsYWdcIjogXCJmbGFnLW16XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOYW1pYmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbmFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5ldyBDYWxlZG9uaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1uY1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmlnZXJcIiwgXCJmbGFnXCI6IFwiZmxhZy1uZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTm9yZm9sayBJc2xhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1uZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmlnZXJpYVwiLCBcImZsYWdcIjogXCJmbGFnLW5nXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOaWNhcmFndWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1uaVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmV0aGVybGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1ubFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTm9yd2F5XCIsIFwiZmxhZ1wiOiBcImZsYWctbm9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5lcGFsXCIsIFwiZmxhZ1wiOiBcImZsYWctbnBcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5hdXJ1XCIsIFwiZmxhZ1wiOiBcImZsYWctbnJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5pdWVcIiwgXCJmbGFnXCI6IFwiZmxhZy1udVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmV3IFplYWxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1uelwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiT21hblwiLCBcImZsYWdcIjogXCJmbGFnLW9tXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQYW5hbWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1wYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGVydVwiLCBcImZsYWdcIjogXCJmbGFnLXBlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGcmVuY2ggUG9seW5lc2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctcGZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBhcHVhIE5ldyBHdWluZWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1wZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGhpbGlwcGluZXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1waFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGFraXN0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1wa1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUG9sYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctcGxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIiwgXCJmbGFnXCI6IFwiZmxhZy1wbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGl0Y2Fpcm5cIiwgXCJmbGFnXCI6IFwiZmxhZy1wblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUHVlcnRvIFJpY29cIiwgXCJmbGFnXCI6IFwiZmxhZy1wclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwiLCBcImZsYWdcIjogXCJmbGFnLXBzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQb3J0dWdhbFwiLCBcImZsYWdcIjogXCJmbGFnLXB0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQYWxhdVwiLCBcImZsYWdcIjogXCJmbGFnLXB3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQYXJhZ3VheVwiLCBcImZsYWdcIjogXCJmbGFnLXB5XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJRYXRhclwiLCBcImZsYWdcIjogXCJmbGFnLXFhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJSw6l1bmlvblwiLCBcImZsYWdcIjogXCJmbGFnLXJlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJSb21hbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctcm9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNlcmJpYVwiLCBcImZsYWdcIjogXCJmbGFnLXJzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJSdXNzaWFuIEZlZGVyYXRpb25cIiwgXCJmbGFnXCI6IFwiZmxhZy1ydVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUndhbmRhXCIsIFwiZmxhZ1wiOiBcImZsYWctcndcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhdWRpIEFyYWJpYVwiLCBcImZsYWdcIjogXCJmbGFnLXNhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTb2xvbW9uIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1zYlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2V5Y2hlbGxlc1wiLCBcImZsYWdcIjogXCJmbGFnLXNjXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTdWRhblwiLCBcImZsYWdcIjogXCJmbGFnLXNkXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTd2VkZW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1zZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2luZ2Fwb3JlXCIsIFwiZmxhZ1wiOiBcImZsYWctc2dcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhXCIsIFwiZmxhZ1wiOiBcImZsYWctc2hcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNsb3ZlbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctc2lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1zalwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2xvdmFraWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1za1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2llcnJhIExlb25lXCIsIFwiZmxhZ1wiOiBcImZsYWctc2xcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhbiBNYXJpbm9cIiwgXCJmbGFnXCI6IFwiZmxhZy1zbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2VuZWdhbFwiLCBcImZsYWdcIjogXCJmbGFnLXNuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTb21hbGlhXCIsIFwiZmxhZ1wiOiBcImZsYWctc29cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlN1cmluYW1lXCIsIFwiZmxhZ1wiOiBcImZsYWctc3JcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNvdXRoIFN1ZGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctc3NcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLCBcImZsYWdcIjogXCJmbGFnLXN0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJFbCBTYWx2YWRvclwiLCBcImZsYWdcIjogXCJmbGFnLXN2XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTaW50IE1hYXJ0ZW4gKER1dGNoIHBhcnQpXCIsIFwiZmxhZ1wiOiBcImZsYWctc3hcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlN5cmlhbiBBcmFiIFJlcHVibGljXCIsIFwiZmxhZ1wiOiBcImZsYWctc3lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlN3YXppbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLXN6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy10Y1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2hhZFwiLCBcImZsYWdcIjogXCJmbGFnLXRkXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXNcIiwgXCJmbGFnXCI6IFwiZmxhZy10ZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVG9nb1wiLCBcImZsYWdcIjogXCJmbGFnLXRnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUaGFpbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLXRoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUYWppa2lzdGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctdGpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRva2VsYXVcIiwgXCJmbGFnXCI6IFwiZmxhZy10a1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVGltb3ItTGVzdGVcIiwgXCJmbGFnXCI6IFwiZmxhZy10bFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVHVya21lbmlzdGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctdG1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlR1bmlzaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy10blwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVG9uZ2FcIiwgXCJmbGFnXCI6IFwiZmxhZy10b1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVHVya2V5XCIsIFwiZmxhZ1wiOiBcImZsYWctdHJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIiwgXCJmbGFnXCI6IFwiZmxhZy10dFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVHV2YWx1XCIsIFwiZmxhZ1wiOiBcImZsYWctdHZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmFcIiwgXCJmbGFnXCI6IFwiZmxhZy10d1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLXR6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVa3JhaW5lXCIsIFwiZmxhZ1wiOiBcImZsYWctdWFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlVnYW5kYVwiLCBcImZsYWdcIjogXCJmbGFnLXVnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy11bVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIsIFwiZmxhZ1wiOiBcImZsYWctdXNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlVydWd1YXlcIiwgXCJmbGFnXCI6IFwiZmxhZy11eVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVXpiZWtpc3RhblwiLCBcImZsYWdcIjogXCJmbGFnLXV6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJIb2x5IFNlZVwiLCBcImZsYWdcIjogXCJmbGFnLXZhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLCBcImZsYWdcIjogXCJmbGFnLXZjXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJWZW5lenVlbGEsIEJvbGl2YXJpYW4gUmVwdWJsaWMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy12ZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVmlyZ2luIElzbGFuZHMsIEJyaXRpc2hcIiwgXCJmbGFnXCI6IFwiZmxhZy12Z1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVmlyZ2luIElzbGFuZHMsIFUuUy5cIiwgXCJmbGFnXCI6IFwiZmxhZy12aVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVmlldCBOYW1cIiwgXCJmbGFnXCI6IFwiZmxhZy12blwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVmFudWF0dVwiLCBcImZsYWdcIjogXCJmbGFnLXZ1XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJXYWxsaXMgYW5kIEZ1dHVuYVwiLCBcImZsYWdcIjogXCJmbGFnLXdmXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYW1vYVwiLCBcImZsYWdcIjogXCJmbGFnLXdzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJZZW1lblwiLCBcImZsYWdcIjogXCJmbGFnLXllXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYXlvdHRlXCIsIFwiZmxhZ1wiOiBcImZsYWcteXRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNvdXRoIEFmcmljYVwiLCBcImZsYWdcIjogXCJmbGFnLXphXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJaYW1iaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy16bVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiWmltYmFid2VcIiwgXCJmbGFnXCI6IFwiZmxhZy16d1wiIH0sXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIGNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24oY291bnRyeSkge1xyXG4gICAgICByZXR1cm4gY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigkcXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTE7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1NraWxsc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZFNraWxsID0gMDtcclxuICAkc2NvcGUuc2tpbGxzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICRzY29wZS5wcm9qZWN0cyA9IFtdO1xyXG5cclxuICAkc2NvcGUubGFiZWxzID0gW1wiRG93bmxvYWQgU2FsZXNcIiwgXCJJbi1TdG9yZSBTYWxlc1wiLCBcIk1haWwtT3JkZXIgU2FsZXNcIl07XHJcbiAgJHNjb3BlLmRhdGEgPSBbMzAwLCA1MDAsIDEwMF07XHJcblxyXG4gICQuZ2V0SlNPTignL2V4cGVyaWVuY2UuanNvbicsIGZ1bmN0aW9uKCBkYXRhICkge1xyXG4gICAgJHNjb3BlLnByb2plY3RzID0gZGF0YS5yZWR1Y2UoKHByb2plY3RzLCBlbXBsb3llcikgPT4ge1xyXG4gICAgICBpZiAoZW1wbG95ZXIucHJvamVjdHMpIHJldHVybiBlbXBsb3llci5wcm9qZWN0cy5jb25jYXQocHJvamVjdHMpO1xyXG4gICAgICBlbHNlIHJldHVybiBwcm9qZWN0cztcclxuICAgIH0sIHt9KTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmZpbHRlcmVkUHJvamVjdHMgPSAoKSA9PiAkc2NvcGUucHJvamVjdHNcclxuICAgIC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3Quc2tpbGxzICYmIHByb2plY3Quc2tpbGxzLmluY2x1ZGVzKCRzY29wZS5zZWxlY3RlZFNraWxsLmNvZGUpKVxyXG5cclxuICAkLmdldEpTT04oJy9za2lsbHMuanNvbicsIGZ1bmN0aW9uKCBkYXRhICkge1xyXG5cclxuICAgIGNvbnN0IHNraWxscyA9IGRhdGFcclxuICAgIC5maWx0ZXIoKHNraWxsKSA9PiBza2lsbC5lbmFibGVkKVxyXG5cclxuICAgICRzY29wZS5jYXRlZ29yaWVzID0gc2tpbGxzXHJcbiAgICAucmVkdWNlKGZ1bmN0aW9uKGNhdGVnb3JpZXMsIHNraWxsKSB7XHJcbiAgICAgIGlmICghY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0pIHtcclxuICAgICAgICBjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XSA9IFtza2lsbF1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XS5wdXNoKHNraWxsKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzO1xyXG4gICAgfSwge30pO1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZFNraWxsID0gZnVuY3Rpb24gKHNraWxsKSB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsID0gc2tpbGw7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsLmNoYXJ0T3B0aW9ucyA9IHtcclxuICAgICAgICBjdXRvdXRQZXJjZW50YWdlIDogODAsXHJcbiAgICAgICAgY2lyY3VtZmVyZW5jZTogMiAqIE1hdGguUEksXHJcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsLmNoYXJ0U3R5bGUgPSB7XHJcbiAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKC9za2lsbHMvJyArICRzY29wZS5zZWxlY3RlZFNraWxsLmltYWdlICsgJyknLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnNjAlJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICc1MCUgNTAlJ1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCgkc2NvcGUuc2tpbGxzWzBdKTtcclxuXHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBUZW5UaGluZ3NTdmMpIHtcclxuICAgIGxldCBwYWdlID0gMTtcclxuICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlYXJjaCA9IFwiXCI7XHJcbiAgICAkc2NvcGUubmV3SXRlbSA9IHt9O1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgZXhoYXVzdGVkID0gZmFsc2U7XHJcblxyXG4gICAgJHNjb3BlLmtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgLy8gVGFiXHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICRzY29wZS5hZGRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gRW50ZXJcclxuICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5hZGRWYWx1ZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICgkKFwiI25ldy12YWx1ZVwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkKFwiI25ldy1ibHVyYlwiKS5mb2N1cygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgfVxyXG4gICAgICAvLyB1c2UgZS5rZXlDb2RlXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hZGRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50TGFuZ3VhZ2UgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0ID8gJHNjb3BlLnNlbGVjdGVkTGlzdC5sYW5ndWFnZSA6IFwiRU5cIjtcclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgXCJuZXdcIik7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBjcmVhdG9yOiAkc2NvcGUuY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgdmFsdWVzOiBbXSxcclxuICAgICAgICBhbnN3ZXJzOiAwLFxyXG4gICAgICAgIGlzRHluYW1pYzogdHJ1ZSxcclxuICAgICAgICBjYXRlZ29yeTogXCJcIixcclxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgICBsYW5ndWFnZTogY3VycmVudExhbmd1YWdlLFxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKGxpc3QpIHtcclxuICAgICAgICBpZiAobGlzdC5faWQgPT09IFwibmV3XCIpIHtcclxuICAgICAgICAgICRzY29wZS5hZGRMaXN0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0KGxpc3QpXHJcbiAgICAgICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIGRhdGEuX2lkKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBudWxsKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzZXRMYW5ndWFnZUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0ge307XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9IHt9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8pID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExhbmd1YWdlcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgcmVzZXRMYW5ndWFnZUZpbHRlcigpO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICByZXNldENhdGVnb3J5RmlsdGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QpIHtcclxuICAgICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KHsgX2lkOiAkbG9jYXRpb24uc2VhcmNoKCkubGlzdCB9KTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuc2VhcmNoID0gJGxvY2F0aW9uLnNlYXJjaCgpLnNlYXJjaCB8fCBcIlwiO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS52YWx1ZU9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJ2YWx1ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcImRhdGVcIixcclxuICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPSAhJHNjb3BlLm9yZGVyLmRpcmVjdGlvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRNb3JlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubGlzdHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgIGdldExpc3RzKCkudGhlbigobGlzdHMpID0+IHtcclxuICAgICAgICAkc2NvcGUubGlzdHMgPSAkc2NvcGUubGlzdHMuY29uY2F0KGxpc3RzKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxpc3RzID0gW107XHJcbiAgICAgIHBhZ2UgPSAxO1xyXG4gICAgICBleGhhdXN0ZWQgPSBmYWxzZTtcclxuICAgICAgZ2V0TGlzdHMoKS50aGVuKChsaXN0cykgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9IGxpc3RzO1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZUZpbHRlciA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSkge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID0gISRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5RmlsdGVyID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSkge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSAhJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUNhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKTtcclxuICAgICAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9XHJcbiAgICAgICAgY2F0ZWdvcmllcy5sZW5ndGggPT09IGNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSkubGVuZ3RoO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSAkc2NvcGUuY2F0ZWdvcmllcy5yZWR1Y2UoKGZpbHRlciwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICBmaWx0ZXJbY2F0ZWdvcnldID0gIWFsbENhdGVnb3JpZXM7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgICAgfSwge30pO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0TGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubG9hZGluZyB8fCBleGhhdXN0ZWQpIHJldHVybiBbXTtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLnNlYXJjaCAhPT0gJHNjb3BlLnNlYXJjaCkge1xyXG4gICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJzZWFyY2hcIiwgJHNjb3BlLnNlYXJjaCA/ICRzY29wZS5zZWFyY2ggOiBudWxsKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0cyh7XHJcbiAgICAgICAgcGFnZSxcclxuICAgICAgICBzb3J0Qnk6ICRzY29wZS5vcmRlci5maWVsZCxcclxuICAgICAgICBvcmRlckJ5OiAkc2NvcGUub3JkZXIuZGlyZWN0aW9uID8gLTEgOiAxLFxyXG4gICAgICAgIGxpbWl0OiAxMDAsXHJcbiAgICAgICAgc2VhcmNoOiAkc2NvcGUuc2VhcmNoLFxyXG4gICAgICAgIGxhbmd1YWdlczogT2JqZWN0LmtleXMoJHNjb3BlLmxhbmd1YWdlRmlsdGVyKS5maWx0ZXIoKGxhbmd1YWdlKSA9PiAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2VdKSxcclxuICAgICAgICBjYXRlZ29yaWVzOiBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpLmZpbHRlcigoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0pLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJQYWdlIFwiLCBwYWdlLCBcIiByZXN1bHRzIFwiLCBkYXRhLnJlc3VsdC5sZW5ndGgpO1xyXG4gICAgICBpZiAoZGF0YS5yZXN1bHQubGVuZ3RoIDwgMTAwKSBleGhhdXN0ZWQgPSB0cnVlO1xyXG4gICAgICBlbHNlIHBhZ2UgPSBkYXRhLm5leHRQYWdlO1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnJlc3VsdC5zbGljZSgwLCAxMCkpO1xyXG4gICAgICByZXR1cm4gZGF0YS5yZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hZGRWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5uZXdJdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCRzY29wZS5oYXNEdXBsaWNhdGUoKSkge1xyXG4gICAgICAgICAgYWxlcnQoYCR7JHNjb3BlLm5ld0l0ZW0udmFsdWV9IGlzIGFscmVhZHkgaW4gdGhlIGxpc3RgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0uY3JlYXRvciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy51bnNoaWZ0KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoJHNjb3BlLm5ld0l0ZW0pKSk7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmFuc3dlcnMrKztcclxuICAgICAgICAgICRzY29wZS51cHNlcnRMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0uYmx1cmIgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAkKFwiI25ldy12YWx1ZVwiKS5mb2N1cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudXBkYXRlVmFsdWVzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyA9ICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLnZhbHVlKTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5hbnN3ZXJzID0gJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMubGVuZ3RoO1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0LCB7IHZhbHVlczogJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVWYWx1ZSA9ICh7IF9pZCB9KSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzID0gJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUuX2lkICE9PSBfaWQpO1xyXG4gICAgICAkc2NvcGUudXBkYXRlVmFsdWVzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS51cHNlcnRMaXN0ID0gKGxpc3QsIHVwZGF0ZXMpID0+IHtcclxuICAgICAgJHNjb3BlLnNhdmluZyA9IHRydWU7XHJcbiAgICAgIGlmIChsaXN0LnZhbHVlcy5sZW5ndGggPj0gMTAgJiYgbGlzdC5uYW1lICYmIGxpc3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaWYgKGxpc3QuX2lkICE9PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICBsZXQgY2hhbmdlcyA9IHVwZGF0ZXMgPyB1cGRhdGVzIDogbGlzdDtcclxuICAgICAgICAgIGRlbGV0ZSBjaGFuZ2VzLl9pZDtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy51cGRhdGVMaXN0KHtcclxuICAgICAgICAgICAgLi4uY2hhbmdlcyxcclxuICAgICAgICAgICAgX2lkOiBsaXN0Ll9pZCxcclxuICAgICAgICAgIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgJHNjb3BlLmxpc3RzID0gJHNjb3BlLmxpc3RzLm1hcCgobGlzdCkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChsaXN0Ll9pZCA9PT0gZGF0YS5faWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLnNhdmVMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgJHNjb3BlLnNlbGVjdGVkTGlzdCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0ID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZUxpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBpZiAoIWxpc3QuX2lkKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbGlzdD9cIikpIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5kZWxldGVMaXN0KGxpc3QpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldExhbmd1YWdlID0gKGxpc3QsIGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGxpc3QubGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICBjb25zdCBub25FbmdsaXNoSW5kZXggPSBsaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICBpZiAobGFuZ3VhZ2UuY29kZSAhPT0gXCJFTlwiICYmIG5vbkVuZ2xpc2hJbmRleCA8IDApIHtcclxuICAgICAgICBsaXN0LmNhdGVnb3JpZXMucHVzaChcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGxhbmd1YWdlLmNvZGUgPT09IFwiRU5cIiAmJiBub25FbmdsaXNoSW5kZXggPj0gMCkge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5zcGxpY2Uobm9uRW5nbGlzaEluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7XHJcbiAgICAgICAgY2F0ZWdvcmllczogbGlzdC5jYXRlZ29yaWVzLFxyXG4gICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZS5jb2RlLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldERpZmZpY3VsdHkgPSAobGlzdCwgZGlmZmljdWx0eSkgPT4ge1xyXG4gICAgICBsaXN0LmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7XHJcbiAgICAgICAgZGlmZmljdWx0eTogZGlmZmljdWx0eSxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRGcmVxdWVuY3kgPSAobGlzdCwgZnJlcXVlbmN5KSA9PiB7XHJcbiAgICAgIGxpc3QuZnJlcXVlbmN5ID0gZnJlcXVlbmN5O1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7XHJcbiAgICAgICAgZnJlcXVlbmN5OiBmcmVxdWVuY3ksXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnkgPSAobGlzdCwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcnlJbmRleCA9IGxpc3QuY2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KTtcclxuICAgICAgaWYgKGNhdGVnb3J5SW5kZXggPj0gMCkge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5zcGxpY2UoY2F0ZWdvcnlJbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdC5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHtcclxuICAgICAgICBjYXRlZ29yaWVzOiBsaXN0LmNhdGVnb3JpZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaGFzRHVwbGljYXRlID0gKCkgPT5cclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCAmJlxyXG4gICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSAmJlxyXG4gICAgICBfLnNvbWUoXHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMsXHJcbiAgICAgICAgKGFuc3dlcikgPT4gYW5zd2VyLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSA9PSAkc2NvcGUubmV3SXRlbS52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCksXHJcbiAgICAgICk7XHJcblxyXG4gICAgJHNjb3BlLmdldEJsdXJicyA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldEJsdXJicygkc2NvcGUuc2VsZWN0ZWRMaXN0LCB0eXBlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCk7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4iLCIvKmpzbGludCBlc3ZlcnNpb246IDYqL1xyXG5hbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzQWRtaW5DdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIFRlblRoaW5nc1N2YywgVXNlclN2Yykge1xyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4pIHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInVzZXJuYW1lXCIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5yZXZlcnNlID0gISRzY29wZS5vcmRlci5yZXZlcnNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldFF1ZXVlID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRRdWV1ZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnF1ZXVlID0gcmVzcG9uc2UuZGF0YS5yZXBsYWNlKFwiL25cIiwgXCI8YnIvPlwiKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICAkc2NvcGUuZ2V0UXVldWUoKTtcclxuXHJcbiAgICBUZW5UaGluZ3NTdmMuZ2V0UGF1c2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAkc2NvcGUucGF1c2VkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coJHNjb3BlLnBhdXNlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBnZXRVc2VycyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLmdldFVzZXJzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUudXNlcnMgPSByZXNwb25zZS5kYXRhLmZpbHRlcigodXNlcikgPT4gIXVzZXIuYWRtaW4pO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQmFuID0gKHVzZXIpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLnRvZ2dsZUJhbih1c2VyLl9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZVBhdXNlID0gKHVzZXIpID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLnRvZ2dsZVBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucGF1c2VkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUucGF1c2VkKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyXHJcblx0Lm1vZHVsZSgnYXBwJylcclxuXHQvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuXHQuY29udHJvbGxlcihcclxuXHRcdCdUZW5UaGluZ3NHYW1lQ3RybCcsXHJcblx0XHRmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGVQYXJhbXMsIFRlblRoaW5nc1N2Yykge1xyXG5cdFx0XHQkc2NvcGUuJG9uKCdsb2dpbicsIF8gPT4ge1xyXG5cdFx0XHRcdGlmICgkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4pIHtcclxuXHRcdFx0XHRcdGdldFVzZXJzKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmICgkc3RhdGVQYXJhbXMuZ2FtZSkge1xyXG5cdFx0XHRcdFRlblRoaW5nc1N2Yy5nZXRHYW1lKCRzdGF0ZVBhcmFtcy5nYW1lKS50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRcdCRzY29wZS5nYW1lID0gcmVzcG9uc2UuZGF0YTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCRzY29wZS5nYW1lKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdCk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NPbGRDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICAkc2NvcGUuc2VhcmNoID0ge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICB2YWx1ZXM6IFwiXCIsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5rZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuYWRkVmFsdWUoKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICBpZiAoJChcIiNuZXctYmx1cmJcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmFkZFZhbHVlKCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCQoXCIjbmV3LXZhbHVlXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIjbmV3LWJsdXJiXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICB9XHJcbiAgICAgIC8vIHVzZSBlLmtleUNvZGVcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaE5hbWUgPSBcIlwiO1xyXG4gICAgJHNjb3BlLm5ld0l0ZW0gPSB7fTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoY2F0ZWdvcnkpID0+ICgkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSBjYXRlZ29yeSk7XHJcbiAgICAkc2NvcGUuc2V0VXNlckZpbHRlciA9ICh1c2VyKSA9PiAoJHNjb3BlLnVzZXJGaWx0ZXIgPSB1c2VyKTtcclxuICAgICRzY29wZS5zZXRVcGRhdGVGaWx0ZXIgPSAodHlwZSkgPT4gKCRzY29wZS51cGRhdGVGaWx0ZXIgPSB0eXBlKTtcclxuICAgICRzY29wZS5zZXRMYW5ndWFnZUZpbHRlciA9IChsYW5ndWFnZSkgPT4gKCRzY29wZS5sYW5ndWFnZUZpbHRlciA9IGxhbmd1YWdlKTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyZWRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubGlzdHMpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuICRzY29wZS5saXN0c1xyXG4gICAgICAgIC5maWx0ZXIoKHsgaXNEeW5hbWljIH0pID0+IHtcclxuICAgICAgICAgIGlmICgkc2NvcGUudXBkYXRlRmlsdGVyICE9PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJzdGF0aWNcIiAmJiBpc0R5bmFtaWMgPT09IHRydWUpIHx8XHJcbiAgICAgICAgICAgICAgKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiZHluYW1pY1wiICYmIGlzRHluYW1pYyA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoKHsgY2F0ZWdvcmllcyB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoJHNjb3BlLmNhdGVnb3J5RmlsdGVyID09PSBcIkFsbFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yaWVzLmluZGV4T2YoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKSA+PSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPT09IFwiQmxhbmtcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbHRlcigoeyBjcmVhdG9yIH0pID0+IHtcclxuICAgICAgICAgIGlmICgkc2NvcGUudXNlckZpbHRlciA9PT0gXCJBbGxcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdG9yID09PSAkc2NvcGUudXNlckZpbHRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoKHsgbGFuZ3VhZ2UgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCRzY29wZS5sYW5ndWFnZUZpbHRlci5jb2RlID09PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlID09PSAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcnMgPSAkc2NvcGUuY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeSk7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVycy5wdXNoKFwiQWxsXCIpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcnMucHVzaChcIkJsYW5rXCIpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9IFwiQWxsXCI7XHJcbiAgICAgICAgJHNjb3BlLnVwZGF0ZUZpbHRlciA9IFwiYWxsXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJzID0gJHNjb3BlLmxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlKSA9PiBsYW5ndWFnZSk7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVycy5wdXNoKHsgbmFtZTogXCJBbGxcIiwgY29kZTogXCJhbGxcIiB9KTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSB7IG5hbWU6IFwiQWxsXCIsIGNvZGU6IFwiYWxsXCIgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RMaXN0KHsgX2lkOiAkbG9jYXRpb24uc2VhcmNoKCkubGlzdCB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmxpc3RPcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwiZGF0ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIGxhYmVsOiBcIkNyZWF0aW9uIERhdGVcIixcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnZhbHVlT3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInZhbHVlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICAgIGxhYmVsOiBcIlZhbHVlXCIsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zb3J0ID0gKHNvcnRlciwgc29ydEZpZWxkLCBzb3J0TGFiZWwpID0+IHtcclxuICAgICAgJHNjb3BlW3NvcnRlcl0ubGFiZWwgPSBzb3J0TGFiZWw7XHJcbiAgICAgIGlmICgkc2NvcGVbc29ydGVyXS5maWVsZCA9PT0gc29ydEZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlW3NvcnRlcl0uZGlyZWN0aW9uID0gISRzY29wZVtzb3J0ZXJdLmRpcmVjdGlvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGVbc29ydGVyXS5maWVsZCA9IHNvcnRGaWVsZDtcclxuICAgICAgICAkc2NvcGVbc29ydGVyXS5kaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMYW5ndWFnZUNvdW50ID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxpc3RzKSByZXR1cm4gMDtcclxuICAgICAgY29uc3QgY291bnQgPSAkc2NvcGUubGlzdHMuZmlsdGVyKFxyXG4gICAgICAgIChsaXN0KSA9PlxyXG4gICAgICAgICAgKCRzY29wZS5jYXRlZ29yeUZpbHRlciA9PT0gXCJBbGxcIiB8fCBsaXN0LmNhdGVnb3JpZXMuaW5jbHVkZXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKSkgJiZcclxuICAgICAgICAgIChsYW5ndWFnZS5jb2RlID09PSBcImFsbFwiIHx8IGxpc3QubGFuZ3VhZ2UgPT09IGxhbmd1YWdlLmNvZGUpICYmXHJcbiAgICAgICAgICAoJHNjb3BlLnVzZXJGaWx0ZXIgPT09IFwiQWxsXCIgfHwgbGlzdC5jcmVhdG9yID09PSAkc2NvcGUudXNlckZpbHRlcikgJiZcclxuICAgICAgICAgICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImFsbFwiIHx8IGxpc3QuaXNEeW5hbWljID09PSAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJkeW5hbWljXCIpKSxcclxuICAgICAgKS5sZW5ndGg7XHJcbiAgICAgIHJldHVybiBgJHtjb3VudH0gLSAke01hdGgucm91bmQoKGNvdW50IC8gJHNjb3BlLmxpc3RzLmxlbmd0aCkgKiAxMDApfSVgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Q2F0ZWdvcnlDb3VudCA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5saXN0cykgcmV0dXJuIDA7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gJHNjb3BlLmxpc3RzLmZpbHRlcihcclxuICAgICAgICAobGlzdCkgPT5cclxuICAgICAgICAgIChjYXRlZ29yeSA9PT0gXCJBbGxcIiB8fCBsaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSkgPj0gMCkgJiZcclxuICAgICAgICAgICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZSA9PT0gXCJhbGxcIiB8fCBsaXN0Lmxhbmd1YWdlID09PSAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZSkgJiZcclxuICAgICAgICAgICgkc2NvcGUudXNlckZpbHRlciA9PT0gXCJBbGxcIiB8fCBsaXN0LmNyZWF0b3IgPT09ICRzY29wZS51c2VyRmlsdGVyKSAmJlxyXG4gICAgICAgICAgKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiYWxsXCIgfHwgbGlzdC5pc0R5bmFtaWMgPT09ICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImR5bmFtaWNcIikpLFxyXG4gICAgICApLmxlbmd0aDtcclxuICAgICAgcmV0dXJuIGAke2NvdW50fSAtICR7TWF0aC5yb3VuZCgoY291bnQgLyAkc2NvcGUubGlzdHMubGVuZ3RoKSAqIDEwMCl9JWA7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRVcGRhdGVDb3VudCA9ICh0eXBlKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxpc3RzKSByZXR1cm4gMDtcclxuICAgICAgY29uc3QgY291bnQgPSAkc2NvcGUubGlzdHMuZmlsdGVyKFxyXG4gICAgICAgIChsaXN0KSA9PiB0eXBlID09PSBcImFsbFwiIHx8IChsaXN0LmlzRHluYW1pYyAmJiB0eXBlID09PSBcImR5bmFtaWNcIikgfHwgKCFsaXN0LmlzRHluYW1pYyAmJiB0eXBlID09PSBcInN0YXRpY1wiKSxcclxuICAgICAgKS5sZW5ndGg7XHJcbiAgICAgIHJldHVybiBgJHtjb3VudH0gLSAke01hdGgucm91bmQoKGNvdW50IC8gJHNjb3BlLmxpc3RzLmxlbmd0aCkgKiAxMDApfSVgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxvYWRpbmcpIHtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICRzY29wZS5saXN0cyA9IGRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXJzID0ge307XHJcbiAgICAgICAgICAkc2NvcGUudXNlckZpbHRlcnMuQWxsID0gJHNjb3BlLmxpc3RzLmxlbmd0aDtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVycyA9ICRzY29wZS5saXN0c1xyXG4gICAgICAgICAgICAuc29ydCgobGlzdDEsIGxpc3QyKSA9PiBsaXN0MS5jcmVhdG9yID4gbGlzdDIuY3JlYXRvcilcclxuICAgICAgICAgICAgLnJlZHVjZSgodXNlcnMsIHsgY3JlYXRvciB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCF1c2Vyc1tjcmVhdG9yXSkgdXNlcnNbY3JlYXRvcl0gPSAwO1xyXG4gICAgICAgICAgICAgIHVzZXJzW2NyZWF0b3JdKys7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXJzO1xyXG4gICAgICAgICAgICB9LCAkc2NvcGUudXNlckZpbHRlcnMpO1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJDb3VudCA9IE9iamVjdC5rZXlzKCRzY29wZS51c2VyRmlsdGVycykubGVuZ3RoO1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXJzID0gc29ydE9iamVjdCgkc2NvcGUudXNlckZpbHRlcnMsIGZhbHNlKTtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVyID0gXCJBbGxcIjtcclxuICAgICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgJChcIiNjYXRlZ29yeS1zZWxlY3RcIikuaGlkZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Q2F0ZWdvcnlDbGFzcyA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICByZXR1cm4gJHNjb3BlLnNlbGVjdGVkTGlzdCAmJiAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSkgPj0gMFxyXG4gICAgICAgID8gXCJidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgOiBcImJ0bi1kZWZhdWx0XCI7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeUluZGV4ID0gJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpO1xyXG4gICAgICBpZiAoY2F0ZWdvcnlJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLnNwbGljZShjYXRlZ29yeUluZGV4LCAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdExhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICBjb25zdCBub25FbmdsaXNoSW5kZXggPSAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICBpZiAobGFuZ3VhZ2UuY29kZSAhPT0gXCJFTlwiICYmIG5vbkVuZ2xpc2hJbmRleCA8IDApIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMucHVzaChcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGxhbmd1YWdlLmNvZGUgPT09IFwiRU5cIiAmJiBub25FbmdsaXNoSW5kZXggPj0gMCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5zcGxpY2Uobm9uRW5nbGlzaEluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWRkTGlzdCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudExhbmd1YWdlID0gJHNjb3BlLnNlbGVjdGVkTGlzdCA/ICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2UgOiBcIkVOXCI7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIFwiXCIpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgY3JlYXRvcjogJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHZhbHVlczogW10sXHJcbiAgICAgICAgYW5zd2VyczogMCxcclxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGN1cnJlbnRMYW5ndWFnZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmhhc0R1cGxpY2F0ZSA9ICgpID0+XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgJiZcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgJiZcclxuICAgICAgXy5zb21lKFxyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgIChhbnN3ZXIpID0+IGFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCkgPT0gJHNjb3BlLm5ld0l0ZW0udmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpLFxyXG4gICAgICApO1xyXG5cclxuICAgICRzY29wZS5hZGRWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5uZXdJdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgXy5zb21lKFxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyxcclxuICAgICAgICAgICAgKGFuc3dlcikgPT4gYW5zd2VyLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSA9PSAkc2NvcGUubmV3SXRlbS52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCksXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBhbGVydChgJHskc2NvcGUubmV3SXRlbS52YWx1ZX0gaXMgYWxyZWFkeSBpbiB0aGUgbGlzdGApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUubmV3SXRlbS5jcmVhdG9yID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnVuc2hpZnQoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSgkc2NvcGUubmV3SXRlbSkpKTtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuYW5zd2VycysrO1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0uYmx1cmIgPSBcIlwiO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5sZW5ndGggPj0gMTAgJiZcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5uYW1lICYmXHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmVMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAkKFwiI25ldy12YWx1ZVwiKS5mb2N1cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUucmVwb3J0TGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGxpc3QucmVwb3J0ZWQgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMucmVwb3J0TGlzdCgkc2NvcGUuY3VycmVudFVzZXIsIGxpc3QpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2F2ZUxpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5zYXZpbmcpIHtcclxuICAgICAgICBsaXN0LnZhbHVlcyA9IGxpc3QudmFsdWVzLmZpbHRlcigoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7XHJcbiAgICAgICAgaWYgKGxpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCAmJiBsaXN0Lm5hbWUgJiYgbGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICRzY29wZS5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLnNhdmVMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgbGlzdCkudGhlbihcclxuICAgICAgICAgICAgKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmxpc3RzLnVuc2hpZnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0TGlzdChkYXRhKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkc2NvcGUubGlzdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5saXN0c1tpXS5faWQgPT09IGRhdGEuX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxpc3RzW2ldID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdExpc3QobGlzdCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobGlzdC52YWx1ZXMubGVuZ3RoIDwgMTApIHtcclxuICAgICAgICAgIGFsZXJ0KFwiTGlzdHMgbXVzdCBjb250YWluIDEwIG9yIG1vcmUgdmFsdWVzIVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFsaXN0Lm5hbWUpIHtcclxuICAgICAgICAgIGZsYXNoKFwiI2xpc3QtbmFtZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmxhc2goXCIubGlzdC1jYXRlZ29yeVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZmxhc2goZWxlbWVudCkge1xyXG4gICAgICBjb25zdCBjb2xvciA9ICQoZWxlbWVudCkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiKTtcclxuICAgICAgJChlbGVtZW50KS5hbmltYXRlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkE4MDcyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMDAsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgJChlbGVtZW50KS5hbmltYXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCFsaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9ICRzY29wZS5saXN0cy5maWx0ZXIoKHsgX2lkIH0pID0+IF9pZCk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbGlzdD9cIikpIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5kZWxldGVMaXN0KGxpc3QpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUubGlzdEJ1dHRvbkNsYXNzID0gKGxpc3QpID0+IHtcclxuICAgICAgY29uc3QgdmFsdWVzID0gbGlzdC52YWx1ZXMubGVuZ3RoO1xyXG4gICAgICBjb25zdCBibHVyYnMgPSBsaXN0LmJsdXJicztcclxuICAgICAgaWYgKHZhbHVlcyA9PT0gYmx1cmJzICYmIGxpc3QuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gXCJidG4tZGVmYXVsdFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKGJsdXJicyA9PT0gMCAmJiAhbGlzdC5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHJldHVybiBcImJ0bi13YXJuaW5nXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoYmx1cmJzID09PSAwICYmIGxpc3QuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gXCJidG4taW5mb1wiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcImJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldEJsdXJicyA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldEJsdXJicygkc2NvcGUuc2VsZWN0ZWRMaXN0LCB0eXBlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdXb3Jrb3V0Q3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICRzY29wZS50aW1lRXhlcmNpc2luZyA9IDMwO1xyXG4gICRzY29wZS50aW1lUmVzdGluZyA9IDEwO1xyXG4gICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcblxyXG4gIHZhciBzb3VuZHMgPSB7XHJcbiAgICBvbjogbmV3IEF1ZGlvKCdvbi53YXYnKSxcclxuICAgIG9mZjogbmV3IEF1ZGlvKCdvZmYud2F2JyksXHJcbiAgICBzd2l0Y2g6IG5ldyBBdWRpbygnc3dpdGNoLndhdicpLFxyXG4gIH07XHJcblxyXG5cclxuICB2YXIgZXhlcmNpc2VzID0gW1xyXG4gICAge25hbWU6ICdKdW1waW5nIEphY2tzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnV2FsbCBTaXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnQ3J1bmNoJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU3RlcC1VcCcsIHNwbGl0OiB0cnVlfSxcclxuICAgIHtuYW1lOiAnU3F1YXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdUcmljZXBzIERpcCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1BsYW5rJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnSGlnaCBLbmVlcycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0x1bmdlJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUHVzaC1VcCB3aXRoIFJvdGF0aW9uJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU2lkZSBQbGFuaycsIHNwbGl0OiB0cnVlfVxyXG4gIF07XHJcblxyXG4gIHZhciBleGVyY2lzaW5nO1xyXG5cclxuICAkc2NvcGUucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoZXhlcmNpc2VzLmxlbmd0aCAtIE1hdGguZmxvb3IoJHNjb3BlLnRpbWVSZW1haW5pbmcgLyAoJHNjb3BlLnRpbWVFeGVyY2lzaW5nICsgJHNjb3BlLnRpbWVSZXN0aW5nKSkpICsgJy8nICsgZXhlcmNpc2VzLmxlbmd0aDtcclxuICB9O1xyXG5cclxuICAkc2NvcGUud29ya291dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGV4Y2VyY2lzZVRpbWUgPSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3Rpbmc7XHJcbiAgICBpZiAoISRzY29wZS50aW1lUmVtYWluaW5nKSB7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gZXhlcmNpc2VzLmxlbmd0aCAqIGV4Y2VyY2lzZVRpbWU7XHJcbiAgICAgIGV4ZXJjaXNpbmcgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZy0tO1xyXG4gICAgICAgIGlmICgkc2NvcGUudGltZVJlbWFpbmluZyA9PT0gMCkge1xyXG4gICAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICdGaW5pc2hlZCEgQ29uZ3JhdHMhJywgc3BsaXQ6IGZhbHNlfTtcclxuICAgICAgICAgICRzY29wZS50aW1lciA9ICcnO1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VycmVudEV4ZXJjaXNlID0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvIGV4Y2VyY2lzZVRpbWUpO1xyXG4gICAgICAgIHZhciB0aW1lciA9ICRzY29wZS50aW1lUmVtYWluaW5nIC0gY3VycmVudEV4ZXJjaXNlICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgICAkc2NvcGUudGltZXIgPSB0aW1lciA+ICRzY29wZS50aW1lRXhlcmNpc2luZyA/IHRpbWVyIC0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nIDogdGltZXI7XHJcbiAgICAgICAgaWYgKHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nKSB7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS5leGVyY2lzZSA9IGV4ZXJjaXNlc1tleGVyY2lzZXMubGVuZ3RoIC0gY3VycmVudEV4ZXJjaXNlIC0gMV07XHJcbiAgICAgICAgaWYgKHRpbWVyID09PSAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgIHNvdW5kcy5vbi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aW1lciA9PT0gMCkge1xyXG4gICAgICAgICAgc291bmRzLm9mZi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkc2NvcGUuZXhlcmNpc2Uuc3BsaXQgJiYgdGltZXIgPT09IE1hdGguZmxvb3IoJHNjb3BlLnRpbWVFeGVyY2lzaW5nIC8gMikpIHtcclxuICAgICAgICAgIHNvdW5kcy5zd2l0Y2gucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChleGVyY2lzaW5nKTtcclxuICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICcnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdDYXRlZ29yaWVzU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRDYXRlZ29yaWVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9jYXRlZ29yaWVzJyk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFRhc2tzID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5KTtcclxuICB9O1xyXG5cclxuICBzdmMuYWRkQ2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJywgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRUYXNrID0gZnVuY3Rpb24gKGNhdGVnb3J5LCB0YXNrKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9jYXRlZ29yaWVzLycgKyBjYXRlZ29yeSArICcvdGFza3MnLCB0YXNrKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2V0UHJpb3JpdHlMaXN0ID0gZnVuY3Rpb24obGlzdCkge1xyXG4gICAgc3ZjLmNob2ljZXMgPSBsaXN0O1xyXG4gICAgc3ZjLnByaW9yaXR5TGlzdCA9IFtdO1xyXG4gICAgLy9NYWtlIGEgbmV3IGNob2ljZSBsaXN0XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgbGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHZhciByYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHN2Yy5wcmlvcml0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgIGZpcnN0Q2hvaWNlOiBsaXN0W3JhbmRvbSA9PT0gMCA/IGkgOiBqXS5uYW1lLFxyXG4gICAgICAgICAgc2Vjb25kQ2hvaWNlOiBsaXN0W3JhbmRvbSA9PT0gMCA/IGogOiBpXS5uYW1lLFxyXG4gICAgICAgICAgY2hvaWNlOiAnJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzaHVmZmxlKHN2Yy5wcmlvcml0eUxpc3QpO1xyXG4gICAgZm9yIChpIGluIHN2Yy5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgc3ZjLnByaW9yaXR5TGlzdFtpXS5pZCA9IGkgKyAxO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICByZXR1cm4gc3ZjLnByaW9yaXR5TGlzdDtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBzaHVmZmxlKGFycmF5KSB7XHJcbiAgICB2YXIgbSA9IGFycmF5Lmxlbmd0aCwgdCwgaTtcclxuICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxl4oCmXHJcbiAgICB3aGlsZSAobSkge1xyXG4gICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnTigKZcclxuICAgICAgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG0tLSk7XHJcbiAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cclxuICAgICAgLy9hcnJheVttXS5maXJzdENob2ljZTtcclxuICAgICAgdCA9IGFycmF5W21dO1xyXG4gICAgICBhcnJheVttXSA9IGFycmF5W2ldO1xyXG4gICAgICBhcnJheVtpXSA9IHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnRW1haWxTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLnNlbmQgPSBmdW5jdGlvbiAoZW1haWwpIHtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2VtYWlsJywgZW1haWwpO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLnNlcnZpY2UoJ0ZpbGVTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICAgIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICAgIHN2Yy5nZXRJbWFnZXMgPSBmdW5jdGlvbihmb2xkZXIpIHtcclxuICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9maWxlcy9pbWFnZXMvJyArIGZvbGRlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy5nZXRTb3VuZHMgPSBmdW5jdGlvbihmb2xkZXIpIHtcclxuICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9maWxlcy9zb3VuZHMvJyArIGZvbGRlcik7XHJcbiAgICB9O1xyXG5cclxuICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0dhbWVTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICAgIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICAgIHN2Yy5nZXRIaWdoc2NvcmUgPSBmdW5jdGlvbiAoZ2FtZSwgdXNlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2dhbWVzLycgKyBnYW1lICsgJy8nICsgdXNlciArICcvaGlnaHNjb3JlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy5zZXRIaWdoc2NvcmUgPSBmdW5jdGlvbiAoZ2FtZSwgdXNlciwgc2NvcmUpIHtcclxuICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZ2FtZXMvJyArIGdhbWUgKyAnLycgKyB1c2VyICsgJy9oaWdoc2NvcmUnLCB7XHJcbiAgICAgICAgc2NvcmU6IHNjb3JlXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0xhbmd1YWdlU3ZjJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMubGFuZ3VhZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJFbmdsaXNoXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1nYlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJOZWRlcmxhbmRzXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1ubFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJGcmFuw6dhaXNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWZyXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBzdmMudGV4dCA9IFtcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRU5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiTkxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRlJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gc3ZjLmxhbmd1YWdlc1swXTtcclxuXHJcbiAgc3ZjLnNldExhbmd1YWdlID0gZnVuY3Rpb24gKGxhbmd1YWdlKSB7XHJcbiAgICBzdmMuc2VsZWN0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBzdmMuc2VsZWN0ZWRMYW5ndWFnZTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnUG9zdHNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmZldGNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cycpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGUgPSBmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCBwb3N0KTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UG9zdCA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzLycgKyBwb3N0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiVGVuVGhpbmdzU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0UXVldWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYm90cy90ZW50aGluZ3MvcXVldWVgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdHMgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7XHJcbiAgICB2YXIgdXJsID1cclxuICAgICAgYC9hcGkvdGVudGhpbmdzL2xpc3RzP2AgK1xyXG4gICAgICAob3B0aW9ucy5saW1pdCA/IGAmbGltaXQ9JHtvcHRpb25zLmxpbWl0fWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnBhZ2UgPyBgJnBhZ2U9JHtvcHRpb25zLnBhZ2V9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuc29ydEJ5ID8gYCZzb3J0X2J5PSR7b3B0aW9ucy5zb3J0Qnl9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMub3JkZXJCeSA/IGAmb3JkZXJfYnk9JHtvcHRpb25zLm9yZGVyQnl9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMubGFuZ3VhZ2VzICYmIG9wdGlvbnMubGFuZ3VhZ2VzLmxlbmd0aCA+IDAgPyBgJmxhbmd1YWdlPSR7b3B0aW9ucy5sYW5ndWFnZXMuam9pbihcIixcIil9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuY2F0ZWdvcmllcyAmJiBvcHRpb25zLmNhdGVnb3JpZXMubGVuZ3RoID4gMCA/IGAmY2F0ZWdvcmllcz0ke29wdGlvbnMuY2F0ZWdvcmllcy5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zZWFyY2ggPyBgJnNlYXJjaD0ke29wdGlvbnMuc2VhcmNofWAgOiBcIlwiKTtcclxuICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2NhdGVnb3JpZXNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGFuZ3VhZ2VzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvbGFuZ3VhZ2VzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCwgbGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNhdmVMaXN0ID0gZnVuY3Rpb24gKHVzZXIsIGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wdXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0c1wiLCB7XHJcbiAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIGxpc3Q6IGxpc3QsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMucmVwb3J0TGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvcmVwb3J0L1wiICsgdXNlci5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5kZWxldGVMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0Qmx1cmJzID0gZnVuY3Rpb24gKGxpc3QsIHR5cGUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9saXN0cy8ke2xpc3QuX2lkfS9ibHVyYnMvJHt0eXBlfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnRvZ2dsZVBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEdhbWUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2dhbWUvJHtpZH1gKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlVzZXJTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFVzZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnMvYWxsXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVCYW4gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdXNlcnMvYmFuLyR7aWR9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNldFRva2VuID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IHRva2VuO1xyXG4gICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmF1dGhlbnRpY2F0ZSA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzL2F1dGhlbnRpY2F0ZVwiLCB7XHJcbiAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS50b2tlbiA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmxvZ2luID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL2xvZ2luXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICByZXR1cm4gc3ZjLnNldFRva2VuKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIuX2lkLCB7XHJcbiAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uICh1c2VyLCBwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL3ZlcmlmaWNhdGlvblwiLCB7XHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uICh1c2VyLCBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9wYXNzd29yZFwiLCB7XHJcbiAgICAgIG9sZFBhc3N3b3JkOiBvbGRQYXNzd29yZCxcclxuICAgICAgbmV3UGFzc3dvcmQ6IG5ld1Bhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXIsIG5ld1VzZXJuYW1lKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL3VzZXJuYW1lXCIsIHtcclxuICAgICAgICBuZXdVc2VybmFtZTogbmV3VXNlcm5hbWUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiWC1BdXRoXCJdID0gXCJcIjtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlVXNlciA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnNcIiwge1xyXG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuY29udHJvbGxlcignUXVpekFuaW1hbHNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBGaWxlU3ZjKSB7XHJcblxyXG4gICAgRmlsZVN2Yy5nZXRTb3VuZHMoJ2FuaW1hbHMnKVxyXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5hbmltYWxzID0gXy5zaHVmZmxlKHJlc3BvbnNlLmRhdGEubWFwKGFuaW1hbCA9PiAoe1xyXG4gICAgICAgICAgc291bmQ6IGFuaW1hbCxcclxuICAgICAgICAgIG5hbWU6IGFuaW1hbC5zdWJzdHJpbmcoMCwgYW5pbWFsLmluZGV4T2YoJy4nKSkucmVwbGFjZSgnXycsICcgJykuY2FwaXRhbGl6ZSgpXHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICBmb3IgKGxldCBhbmltYWwgb2YgJHNjb3BlLmFuaW1hbHMpIHtcclxuICAgICAgICAgIGFuaW1hbC5hbnN3ZXJzID0gXy5zaHVmZmxlKFthbmltYWwubmFtZSwgLi4uZ2V0UmFuZG9tQW5pbWFscyhhbmltYWwubmFtZSldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmFuaW1hbHMpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuZ3Vlc3MgPSAoYW5pbWFsLCBndWVzcykgPT4ge1xyXG4gICAgICBhbmltYWwuZ3Vlc3MgPSBndWVzcztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0UmFuZG9tQW5pbWFscyA9IG5hbWUgPT4gXy5zaHVmZmxlKCRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gbmFtZSAhPT0gYW5pbWFsLm5hbWUpLm1hcChhbmltYWwgPT4gYW5pbWFsLm5hbWUpKS5zbGljZSgwLCA1KTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0U2NvcmUgPSAoKSA9PiBgJHskc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IGFuaW1hbC5uYW1lID09PSBhbmltYWwuZ3Vlc3MpLmxlbmd0aH0vJHskc2NvcGUuYW5pbWFscy5sZW5ndGh9YDtcclxuXHJcbiAgICAkc2NvcGUuaXNTY29yZVZpc2libGUgPSAoKSA9PiAkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IGFuaW1hbC5ndWVzcykubGVuZ3RoID09PSAkc2NvcGUuYW5pbWFscy5sZW5ndGg7XHJcbiAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6R29vZ2xlQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnZ29vZ2xlJylcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1F1aXpMb2dvc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ2xvZ29zJylcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1F1aXpNb3ZpZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdtb3ZpZXMnKVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5jb250cm9sbGVyKCdRdWl6U2tlbGV0b25zQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgRmlsZVN2Yykge1xyXG5cclxuICAgIEZpbGVTdmMuZ2V0SW1hZ2VzKCdza2VsZXRvbnMnKVxyXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5hbmltYWxzID0gXy5zaHVmZmxlKHJlc3BvbnNlLmRhdGEubWFwKGFuaW1hbCA9PiAoe1xyXG4gICAgICAgICAgaW1hZ2U6IGFuaW1hbCxcclxuICAgICAgICAgIG5hbWU6IGFuaW1hbC5zdWJzdHJpbmcoMCwgYW5pbWFsLmluZGV4T2YoJy4nKSkucmVwbGFjZSgnXycsICcgJykuY2FwaXRhbGl6ZSgpXHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICBmb3IgKGxldCBhbmltYWwgb2YgJHNjb3BlLmFuaW1hbHMpIHtcclxuICAgICAgICAgIGFuaW1hbC5hbnN3ZXJzID0gXy5zaHVmZmxlKFthbmltYWwubmFtZSwgLi4uZ2V0UmFuZG9tQW5pbWFscyhhbmltYWwubmFtZSldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmFuaW1hbHMpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUuZ3Vlc3MgPSAoYW5pbWFsLCBndWVzcykgPT4ge1xyXG4gICAgICBhbmltYWwuZ3Vlc3MgPSBndWVzcztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0UmFuZG9tQW5pbWFscyA9IG5hbWUgPT4gXy5zaHVmZmxlKCRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gbmFtZSAhPT0gYW5pbWFsLm5hbWUpLm1hcChhbmltYWwgPT4gYW5pbWFsLm5hbWUpKS5zbGljZSgwLCAxMCk7XHJcblxyXG4gICAgJHNjb3BlLmdldFNjb3JlID0gKCkgPT4gYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwubmFtZSA9PT0gYW5pbWFsLmd1ZXNzKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWA7XHJcblxyXG4gICAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwuZ3Vlc3MpLmxlbmd0aCA9PT0gJHNjb3BlLmFuaW1hbHMubGVuZ3RoO1xyXG4gIH0pOyJdfQ==
