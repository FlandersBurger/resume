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
  }).state("tenthings-curate", {
    url: "/tenthings-curate",
    controller: "TenThingsCurateCtrl",
    templateUrl: "tenthings-curate.html"
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
  }, $scope.socialMedia = [{
    name: "instagram",
    url: "https://www.instagram.com/flandersburger/",
    icon: "fa-instagram"
  }, {
    name: "linkedin",
    url: "https://www.linkedin.com/in/laurent-debacker-1633a916",
    icon: "fa-linkedin"
  }, {
    name: "github",
    url: "https://github.com/FlandersBurger",
    icon: "fa-github"
  }, {
    name: "jsfiddle",
    url: "https://jsfiddle.net/user/BelgoCanadian/fiddles/",
    icon: "fa-jsfiddle"
  }, {
    name: "stackoverflow",
    url: "http://stackoverflow.com/users/1083923/belgocanadian",
    icon: "fa-stack-overflow"
  }, {
    name: "goodreads",
    url: "https://www.goodreads.com/user/show/17070010-laurent",
    icon: "fa-goodreads"
  }], window.localStorage.user && UserSvc.login(window.localStorage.user).then(function (response) {
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
}), angular.module("app").controller("TenThingsCurateCtrl", function ($scope, $location, TenThingsSvc) {
  let page = 1;
  $scope.lists = [], $scope.search = "", $scope.languageFilter = "All", $scope.categoryFilter = {}, $scope.selectedList = void 0;
  let exhausted = !1;
  $scope.setSelectedList = list => {
    list ? list._id !== $scope.selectedList?._id && TenThingsSvc.getList(list).then(({
      data
    }) => {
      $scope.selectedList = data, $location.search("list", data._id), console.log(data);
    }).catch(err => console.error(err)) : ($scope.selectedList = void 0, $location.search("list", null));
  };
  const resetCategoryFilter = () => {
    $scope.categoryFilter = $scope.categories.reduce((filter, category) => (filter[category] = !0, filter), {});
  };
  $scope.$on("login", _ => {
    TenThingsSvc.getLanguages().then(response => {
      $scope.languages = response.data;
    }), TenThingsSvc.getCategories().then(response => {
      $scope.categories = response.data, resetCategoryFilter();
    }), $location.search().list && $scope.setSelectedList({
      _id: $location.search().list
    }), $scope.getLists();
  }), $scope.order = {
    field: "date",
    reverse: !0
  }, $scope.orderBy = field => {
    $scope.order.field === field ? $scope.order.reverse = !$scope.order.reverse : $scope.order = {
      field,
      reverse: !1
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
    $scope.languageFilter = language, $scope.getLists();
  }, $scope.setCategoryFilter = category => {
    $scope.categoryFilter[category] = !$scope.categoryFilter[category], $scope.getLists();
  }, $scope.toggleCategoryFilter = () => {
    const categories = Object.keys($scope.categoryFilter);
    categories.length === categories.filter(category => $scope.categoryFilter[category]).length ? $scope.categoryFilter = {} : resetCategoryFilter(), $scope.getLists();
  };
  const getLists = async () => {
    if ($scope.loading || exhausted) return [];
    $scope.loading = !0;
    const {
      data
    } = await TenThingsSvc.getLists({
      page,
      sortBy: $scope.order.field,
      orderBy: $scope.order.reverse ? -1 : 1,
      limit: 100,
      search: $scope.search,
      language: "All" === $scope.languageFilter ? void 0 : $scope.languageFilter,
      categories: Object.keys($scope.categoryFilter).filter(category => $scope.categoryFilter[category])
    });
    return console.log("Page ", page, " results ", data.result.length), data.result.length < 100 ? exhausted = !0 : page = data.nextPage, $scope.loading = !1, console.log(data.result.slice(0, 10)), data.result;
  };
  $scope.setDifficulty = (list, difficulty) => {
    list.difficulty = difficulty, TenThingsSvc.updateList({
      _id: list._id,
      difficulty
    });
  }, $scope.setCategory = (list, category) => {
    const categoryIndex = list.categories.indexOf(category);
    categoryIndex >= 0 ? list.categories.splice(categoryIndex, 1) : list.categories.push(category), TenThingsSvc.updateList({
      _id: list._id,
      categories: list.categories
    });
  };
}), angular.module("app").controller("TenThingsGameCtrl", function ($scope, $stateParams, TenThingsSvc) {
  $scope.$on("login", _ => {
    $scope.currentUser.admin && getUsers();
  }), $stateParams.game && TenThingsSvc.getGame($stateParams.game).then(response => {
    $scope.game = response.data, console.log($scope.game);
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
          scope.$parent.setSelectedList(), scope.$eval(scope.clickOutside);
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
    var url = "/api/tenthings/lists?" + (options.limit ? `&limit=${options.limit}` : "") + (options.page ? `&page=${options.page}` : "") + (options.sortBy ? `&sort_by=${options.sortBy}` : "") + (options.orderBy ? `&order_by=${options.orderBy}` : "") + (options.language ? `&language=${options.language}` : "") + (options.categories && options.categories.length > 0 ? `&categories=${options.categories.join(",")}` : "") + (options.search ? `&search=${options.search}` : "");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiY29udHJvbGxlcnMvYXBwLmN0cmwuanMiLCJjb250cm9sbGVycy9hc3Rlcm9pZHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2J1YmJsZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NoYXJhZGVzLmN0cmwuanMiLCJjb250cm9sbGVycy9jb250YWN0LmN0cmwuanMiLCJjb250cm9sbGVycy9leHBlcmllbmNlLmN0cmwuanMiLCJjb250cm9sbGVycy9ob2JiaWVzLmN0cmwuanMiLCJjb250cm9sbGVycy9sZW1taW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbGlzdHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xvZ2luLmN0cmwuanMiLCJjb250cm9sbGVycy9wb3N0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJpb3JpdGl6ZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJvZmlsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvc2tpbGxzLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3MuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2FkbWluLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NjdXJhdGUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2dhbWUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3dvcmtvdXQuY3RybC5qcyIsImRpcmVjdGl2ZXMvY2xpY2stb3V0c2lkZS5kaXIuanMiLCJkaXJlY3RpdmVzL3VpLXJvdXRlci1zdHlsZXMuZGlyLmpzIiwic2VydmljZXMvY2F0ZWdvcmllcy5zdmMuanMiLCJzZXJ2aWNlcy9lbWFpbC5zdmMuanMiLCJzZXJ2aWNlcy9maWxlLnN2Yy5qcyIsInNlcnZpY2VzL2dhbWUuc3ZjLmpzIiwic2VydmljZXMvbGFuZ3VhZ2Uuc3ZjLmpzIiwic2VydmljZXMvcG9zdHMuc3ZjLmpzIiwic2VydmljZXMvdGVudGhpbmdzLnN2Yy5qcyIsInNlcnZpY2VzL3VzZXIuc3ZjLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9hbmltYWxzLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2dvb2dsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9sb2dvcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9tb3ZpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvc2tlbGV0b25zLmN0cmwuanMiXSwibmFtZXMiOlsiZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwIiwiYmFzZSIsImxldHRlcnMiLCJkb21haW5zIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJTdHJpbmciLCJwcm90b3R5cGUiLCJ2YWx1ZSIsInJlZHVjZSIsInJlc3VsdCIsImxldHRlciIsInJlcGxhY2UiLCJ0aGlzIiwiU1BFQ0lBTF9DSEFSQUNURVJTIiwiUmVnRXhwIiwidG9Mb3dlckNhc2UiLCJyZW1vdmVEaWFjcml0aWNzIiwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMiLCJleHRyYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsIiRzY29wZSIsIiRsb2NhdGlvbiIsIkxhbmd1YWdlU3ZjIiwiVXNlclN2YyIsImxvZ2luIiwidXNlciIsImxvZ2dlZEluIiwibG9jYWxTdG9yYWdlIiwiX2lkIiwiY3VycmVudFVzZXIiLCIkIiwibG9hZCIsImZhZGVPdXQiLCJmYWRlSW4iLCJvbiIsImNsb3Nlc3QiLCJ0b2dnbGVDbGFzcyIsImNoZWNrZWQiLCJkb2N1bWVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRoZW1lQ291bnRlciIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImZsaXBUaGVtZSIsInNob3ciLCJoaWRlIiwic2V0VGltZW91dCIsImdldEpTT04iLCJza2lsbHMiLCJmaWx0ZXIiLCJza2lsbCIsImhvYmJpZXMiLCJqb2JzIiwiam9iIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImNoYXJhZGVzIiwiZ2V0VGltZVNwYW4iLCJsYW5ndWFnZXMiLCJzZWxlY3RlZExhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJzZWxlY3RMYW5ndWFnZSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJob3ZlcmRpdiIsImRpdmlkIiwibGVmdCIsImNsaWVudFgiLCJ0b3AiLCJjbGllbnRZIiwiZ2V0RWxlbWVudEJ5SWQiLCJjc3MiLCJ0b2dnbGUiLCJzb2NpYWxNZWRpYSIsIm5hbWUiLCJpY29uIiwidGhlbiIsInJlc3BvbnNlIiwiJG9uIiwiXyIsImJpcnRoRGF0ZSIsImxvYWRpbmciLCJsb2dvdXQiLCJmaXJlYmFzZSIsImF1dGgiLCJzaWduT3V0IiwiY2xlYXIiLCJjYXRjaCIsImVycm9yIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJjYXBpdGFsaXplIiwiR2FtZVN2YyIsImFubm91bmNlIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImZvbnQiLCJmaWxsU3R5bGUiLCJ0ZXh0QWxpZ24iLCJzaG90cyIsImFzdGVyb2lkcyIsInBvd2VydXBzIiwiZXhwbG9zaW9ucyIsIm1hcCIsInNwYWNlcGljcyIsInNwYWNlIiwicG93ZXJ1cFR5cGVzIiwiYW5ub3VuY2VtZW50IiwiY3ljbGUiLCJyb3dzIiwiY29sdW1ucyIsInNpemUiLCJpbWciLCJJbWFnZSIsImFjdGl2YXRlIiwic3BhY2VzaGlwIiwibWF4U3BlZWQiLCJjb29sZG93biIsImNvb2xkb3duVGltZSIsInJhbmdlIiwic2hpZWxkIiwiZXhwbG9kZSIsInNwYXduQXN0ZXJvaWRzIiwicG93ZXJ1cCIsImFycmF5Iiwic3JjIiwiZXhwbG9zaW9uSW1hZ2UiLCJldmFsdWF0ZUtleXMiLCJwbGF5aW5nIiwic2hvb3QiLCJyb3RhdGlvbiIsInNwZWVkIiwic2NvcmUiLCIkYXBwbHkiLCJTcGFjZXNoaXAiLCJhdXRvU3Bhd24iLCJ3aWR0aCIsImhlaWdodCIsImNhbm5vbiIsIngiLCJ5IiwicG9zaXRpb24iLCJhbmdsZSIsImlkIiwicm91bmQiLCJTaG90IiwibW92ZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJmaWxsIiwiYXN0ZXJvaWQiLCJoaXQiLCJnYW1lT3ZlciIsImNvcyIsInNpbiIsImxpZmVzcGFuIiwiQXN0ZXJvaWQiLCJnZXRFbnRyeVBvc2l0aW9uIiwicm90YXRpb25TcGVlZCIsIkV4cGxvc2lvbiIsInNob3QiLCJwb2ludHMiLCJzcGF3blBvd2VydXAiLCJvYmplY3QiLCJQb3dlcnVwIiwiZGVsYXkiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiY29sdW1uIiwicm93IiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImdyaWRYIiwiZ3JpZFkiLCJvYmplY3QxIiwib2JqZWN0MiIsImtleXMiLCJhbW91bnQiLCJoaWdoc2NvcmUiLCJzZXRIaWdoc2NvcmUiLCJyZXNpemVDYW52YXMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5Q29kZSIsIndoaWNoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsImNsZWFyUmVjdCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJ0YWxseSIsImZpbGxUZXh0IiwibWVhc3VyZVRleHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJidWJibGVzIiwiY29sb3JzIiwiQnViYmxlIiwicmFkaXVzIiwiZXhwYW5kaW5nIiwiY2lyY3VtZmVyZW5jZSIsIm1heFJhZGl1cyIsInZ4IiwidnkiLCJmaWx0ZXJCdWJibGVzIiwiYnViYmxlIiwic2VsZWN0V29yZCIsImNhdGVnb3J5Iiwid29yZCIsIkVtYWlsU3ZjIiwib3B0aW9ucyIsInRleHQiLCJjb250YWN0IiwiZW1haWwiLCJwaG9uZSIsImFib3V0IiwibWVzc2FnZSIsInNlbmRpbmciLCJzZW50Iiwic3RhdHVzIiwiZXJyIiwiZ2V0U2tpbGwiLCJza2lsbENvZGUiLCJjb2RlIiwiJHdpbmRvdyIsImhvYmJ5U2VsZWN0b3JWaXNpYmxlIiwic2VsZWN0ZWRIb2JieSIsInNlbGVjdEhvYmJ5IiwiaG9iYnkiLCJzaG93SG9iYnkiLCJpbmRleCIsImltYWdlcyIsIkxFRlQiLCJSSUdIVCIsImxlbW1pbmdzSW1hZ2UiLCJkZWNvckltYWdlIiwibGVtbWluZ3MiLCJzdGFydGVkIiwiYWN0aW9ucyIsIndhbGsiLCJzdGFydCIsImVuZCIsInJldmVyc2UiLCJodWgiLCJmYWxsIiwiZmx5Iiwic3RvcCIsImNsaW1iIiwiYnVpbGQiLCJwdW5jaCIsImRpZyIsIkxlbW1pbmciLCJpbml0IiwiYWN0IiwiYWN0aW9uIiwiYW5pbWF0aW9uIiwic2NhbGUiLCJoYXRjaCIsIm9wZW4iLCJyZWN0IiwiQ2F0ZWdvcmllc1N2YyIsInNob3dDYXRlZ29yeSIsImdldENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidGFza3MiLCJqIiwidGFzayIsInNlbGVjdENhdGVnb3J5Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdGVkVGFza3MiLCJzZWxlY3RhYmxlVGFza3MiLCJlbnRlcmVkQ2F0ZWdvcnkiLCJuZXdDYXRlZ29yeSIsImZvdW5kIiwiYWRkQ2F0ZWdvcnkiLCJuZXdUYXNrIiwic2VsZWN0VGFzayIsImFkZFRhc2siLCJlbnRlcmVkVGFzayIsInJlbW92ZVRhc2siLCJ1bnNlbGVjdFRhc2siLCJ0YXNrTGlzdCIsInNwbGljZSIsImluZGV4T2YiLCJzdGFydFByaW9yaXRpemluZyIsInNldFByaW9yaXR5TGlzdCIsInBhdGgiLCJnZXRRdWVzdGlvbnMiLCJjb3VudGVyIiwidWkiLCJmaXJlYmFzZXVpIiwiQXV0aFVJIiwic3RhcnRVSSIsImNhbGxiYWNrcyIsInNpZ25JblN1Y2Nlc3MiLCJjcmVkZW50aWFsIiwicmVkaXJlY3RVcmwiLCJnZXRJZFRva2VuIiwiaWRUb2tlbiIsImF1dGhlbnRpY2F0ZSIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJlbWFpbFZlcmlmaWVkIiwiJGVtaXQiLCJtb2RhbCIsInR5cGUiLCJzaWduSW5GYWlsdXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjcmVkIiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJ1aVNob3duIiwic3R5bGUiLCJkaXNwbGF5Iiwic2lnbkluU3VjY2Vzc1VybCIsInNpZ25Jbk9wdGlvbnMiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJQUk9WSURFUl9JRCIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwic2lnbkluRmxvdyIsImV2ZW50IiwicmVzZXQiLCIkZmlsdGVyIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJjcmVhdGUiLCJib2R5IiwicG9zdCIsImZldGNoIiwicG9zdHMiLCJnZXRQb3N0IiwidW5zaGlmdCIsInByaW9yaXR5TGlzdCIsImdldFByaW9yaXR5TGlzdCIsInNlbGVjdGVkUXVlc3Rpb24iLCJjdXJyZW50UXVlc3Rpb24iLCJkb25lIiwibWFrZUNob2ljZSIsImNob2ljZSIsImZpcnN0Q2hvaWNlIiwic2Vjb25kQ2hvaWNlIiwiZ2V0QnV0dG9uVmFsdWUiLCJzZWxlY3RRdWVzdGlvbiIsInF1ZXN0aW9uIiwiZ2V0RmlsdGVyZWRQcmlvcml0eUxpc3QiLCJnZXRDaG9pY2VzTWFkZSIsImNob2ljZXNNYWRlIiwiZ2V0QnV0dG9uQ2xhc3MiLCJzaG93Q2hvaWNlcyIsImNoYXJ0Q2xpY2siLCJjaGFydCIsImdldFNlZ21lbnRzQXRFdmVudCIsInNob3dSZXN1bHRzIiwicmVzcG9uc2l2ZSIsInNlZ21lbnRTaG93U3Ryb2tlIiwic2VnbWVudFN0cm9rZUNvbG9yIiwic2VnbWVudFN0cm9rZVdpZHRoIiwicGVyY2VudGFnZUlubmVyQ3V0b3V0IiwiYW5pbWF0aW9uU3RlcHMiLCJhbmltYXRpb25FYXNpbmciLCJhbmltYXRlUm90YXRlIiwiYW5pbWF0ZVNjYWxlIiwibGVnZW5kVGVtcGxhdGUiLCJjaG9pY2VzIiwidm90ZXMiLCJsYWJlbCIsIm9mZnNldCIsImdlbmRlciIsInNleCIsImlkZW50aXR5Iiwic2V4ZXMiLCJpZGVudGl0aWVzIiwiZGF0ZU9wdGlvbnMiLCJtYXhEYXRlIiwibWluRGF0ZSIsImluaXREYXRlIiwiZGF0ZXBpY2tlck1vZGUiLCJwZXJjZW50YWdlIiwic3RhcnRTbGlkZXIiLCJkcmFnU2xpZGVyIiwic3RvcFNsaWRlciIsInVzZXJuYW1lVG9nZ2xlIiwicGFzc3dvcmRUb2dnbGUiLCJ0b2dnbGVVc2VybmFtZSIsIm5ld1VzZXJuYW1lIiwidXNlcm5hbWUiLCJ0b2dnbGVQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwib3JpZ2luYWxCZyIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiY2hhbmdlVXNlcm5hbWUiLCJ1cGRhdGVVc2VyIiwiJHdhdGNoIiwibG9hZENvdW50cmllcyIsIiRxdWVyeSIsImZsYWciLCJ0aWRiaXQiLCJjb3VudHJ5Iiwic2VsZWN0ZWRTa2lsbCIsInNraWxsc1Zpc2libGUiLCJwcm9qZWN0cyIsImxhYmVscyIsImVtcGxveWVyIiwiY29uY2F0IiwiZmlsdGVyZWRQcm9qZWN0cyIsInByb2plY3QiLCJpbmNsdWRlcyIsInNldFNlbGVjdGVkU2tpbGwiLCJjaGFydE9wdGlvbnMiLCJjdXRvdXRQZXJjZW50YWdlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRvb2x0aXBzIiwiY2hhcnRTdHlsZSIsImltYWdlIiwiVGVuVGhpbmdzU3ZjIiwiZmxhc2giLCJlbGVtZW50IiwiY29sb3IiLCJzZWFyY2giLCJ2YWx1ZXMiLCJrZXlEb3duIiwiaXMiLCJhZGRWYWx1ZSIsImZvY3VzIiwic2VhcmNoTmFtZSIsIm5ld0l0ZW0iLCJzZXRDYXRlZ29yeUZpbHRlciIsImNhdGVnb3J5RmlsdGVyIiwic2V0VXNlckZpbHRlciIsInVzZXJGaWx0ZXIiLCJzZXRVcGRhdGVGaWx0ZXIiLCJ1cGRhdGVGaWx0ZXIiLCJzZXRMYW5ndWFnZUZpbHRlciIsImxhbmd1YWdlRmlsdGVyIiwiZmlsdGVyZWRMaXN0cyIsImxpc3RzIiwiaXNEeW5hbWljIiwiY3JlYXRvciIsImdldExpc3RzIiwiY2F0ZWdvcnlGaWx0ZXJzIiwiZ2V0TGFuZ3VhZ2VzIiwibGFuZ3VhZ2VGaWx0ZXJzIiwibGlzdCIsInNlbGVjdExpc3QiLCJsaXN0T3JkZXIiLCJmaWVsZCIsInZhbHVlT3JkZXIiLCJzb3J0ZXIiLCJzb3J0RmllbGQiLCJzb3J0TGFiZWwiLCJnZXRMYW5ndWFnZUNvdW50IiwiY291bnQiLCJnZXRDYXRlZ29yeUNvdW50IiwiZ2V0VXBkYXRlQ291bnQiLCJ1c2VyRmlsdGVycyIsIkFsbCIsImxpc3QxIiwibGlzdDIiLCJ1c2VycyIsInVzZXJDb3VudCIsImdldExpc3QiLCJzZWxlY3RlZExpc3QiLCJnZXRDYXRlZ29yeUNsYXNzIiwidG9nZ2xlQ2F0ZWdvcnkiLCJjYXRlZ29yeUluZGV4Iiwibm9uRW5nbGlzaEluZGV4IiwiYWRkTGlzdCIsImN1cnJlbnRMYW5ndWFnZSIsImFuc3dlcnMiLCJoYXNEdXBsaWNhdGUiLCJzb21lIiwiYW5zd2VyIiwicmVtb3ZlQWxsQnV0TGV0dGVycyIsImFsZXJ0IiwiYmx1cmIiLCJzYXZlTGlzdCIsInJlcG9ydExpc3QiLCJyZXBvcnRlZCIsInNhdmluZyIsImRlbGV0ZUxpc3QiLCJjb25maXJtIiwibGlzdEJ1dHRvbkNsYXNzIiwiYmx1cmJzIiwiZGVzY3JpcHRpb24iLCJnZXRCbHVyYnMiLCJnZXR0aW5nQmx1cmJzIiwiYWRtaW4iLCJnZXRVc2VycyIsIm9yZGVyIiwib3JkZXJCeSIsImdldFF1ZXVlIiwicXVldWUiLCJnZXRQYXVzZSIsInBhdXNlZCIsInRvZ2dsZUJhbiIsInRvZ2dsZVBhdXNlIiwicGFnZSIsInVuZGVmaW5lZCIsImV4aGF1c3RlZCIsInNldFNlbGVjdGVkTGlzdCIsInJlc2V0Q2F0ZWdvcnlGaWx0ZXIiLCJnZXRNb3JlTGlzdHMiLCJhc3luYyIsInRvZ2dsZUNhdGVnb3J5RmlsdGVyIiwic29ydEJ5IiwibGltaXQiLCJuZXh0UGFnZSIsInNldERpZmZpY3VsdHkiLCJkaWZmaWN1bHR5IiwidXBkYXRlTGlzdCIsInNldENhdGVnb3J5IiwiJHN0YXRlUGFyYW1zIiwiZ2FtZSIsImdldEdhbWUiLCJ0aW1lUmVtYWluaW5nIiwidGltZUV4ZXJjaXNpbmciLCJ0aW1lUmVzdGluZyIsInJlc3QiLCJleGVyY2lzaW5nIiwic291bmRzIiwiQXVkaW8iLCJvZmYiLCJzd2l0Y2giLCJleGVyY2lzZXMiLCJzcGxpdCIsInByb2dyZXNzIiwid29ya291dCIsImV4Y2VyY2lzZVRpbWUiLCJjbGVhckludGVydmFsIiwidGltZXIiLCJleGVyY2lzZSIsInNldEludGVydmFsIiwiY3VycmVudEV4ZXJjaXNlIiwicGxheSIsImRpcmVjdGl2ZSIsIiRkb2N1bWVudCIsInJlc3RyaWN0Iiwic2NvcGUiLCJjbGlja091dHNpZGUiLCJsaW5rIiwiZWwiLCJhdHRyIiwidGFyZ2V0IiwiY29udGFpbnMiLCIkcGFyZW50IiwiJGV2YWwiLCIkc3RhdGUiLCIkY29tcGlsZSIsIiRpbnRlcnBvbGF0ZSIsImdldFN0eWxlIiwidGVtcGxhdGVTdHlsZVVybCIsImhyZWYiLCJyZWwiLCJtYXRjaCIsImVsZW0iLCJ0ZW1wbGF0ZVN0eWxlcyIsImh0bWwiLCJzdGFydFN5bWJvbCIsImVuZFN5bWJvbCIsImFwcGVuZCIsInRvU3RhdGUiLCJ0b1BhcmFtcyIsImZyb21TdGF0ZSIsImZyb21QYXJhbXMiLCJzdGF0ZXMiLCJwYXJlbnQiLCJnZXQiLCJ2aWV3cyIsInZpZXciLCJmbGF0IiwiZ2V0U3R5bGVzIiwiJGh0dHAiLCJzdmMiLCJnZXRUYXNrcyIsInQiLCJtIiwic2h1ZmZsZSIsImdldEltYWdlcyIsImZvbGRlciIsImdldFNvdW5kcyIsImdldEhpZ2hzY29yZSIsImpvaW4iLCJwdXQiLCJkZWxldGUiLCJnZXRVc2VyIiwic2V0VG9rZW4iLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImNyZWF0ZVVzZXIiLCJGaWxlU3ZjIiwiYW5pbWFscyIsImFuaW1hbCIsInNvdW5kIiwic3Vic3RyaW5nIiwiZ2V0UmFuZG9tQW5pbWFscyIsImd1ZXNzIiwiZ2V0U2NvcmUiLCJpc1Njb3JlVmlzaWJsZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQUEsMkJBQUFBLEdBQUEsQ0FDQTtJQUNBQyxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQTtFQUdBQyxPQUFBQSxHQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxDQUFBO0FBR0FDLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsa0JBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFSLDJCQUFBQSxDQUFBUyxNQUFBQSxDQUFBLENBQUFDLE1BQUFBLEVBQUFDLE1BQUFBLEtBQ0FELE1BQUFBLENBQUFFLE9BQUFBLENBQUFELE1BQUFBLENBQUFULE9BQUFBLEVBQUFT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QSxhQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUUsVUFBQUEsRUFBQSxZQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxXQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxhQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsVUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsV0FBQTtJQUNBRSxVQUFBQSxFQUFBLGNBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE1BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLE9BQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsaUJBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsb0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGtCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxtQkFBQTtJQUNBRSxVQUFBQSxFQUFBLHFCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxtQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsY0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGlCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxhQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsRUFHQUwsaUJBQUFBLENBQUFPLFNBQUFBLENBQUE7SUFDQUMsT0FBQUEsRUFBQUEsQ0FBQSxDQUFBO0lBQ0FDLFdBQUFBLEVBQUFBLENBQUE7RUFBQSxDQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUNoSkFmLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FlLE9BQUFBLENBQUEsY0FBQSxFQUFBLFVBQUFDLFVBQUFBLEVBQUFDLFFBQUFBLEVBQUFBO0VBU0EsSUFBQUMsVUFBQUE7SUFDQUMsT0FBQUEsR0FBQSxTQUFBQSxDQUFBLEVBQUE7TUFBQSxDQUNBRCxVQUFBQSxHQUFBLElBQUFFLFNBQUFBLENBVEEsUUFBQSxLQUFBQyxNQUFBQSxDQUFBQyxRQUFBQSxDQUFBQyxRQUFBQSxHQUNBLFFBQUEsR0FBQUYsTUFBQUEsQ0FBQUMsUUFBQUEsQ0FBQUUsSUFBQUEsR0FFQSxPQUFBLEdBQUFILE1BQUFBLENBQUFDLFFBQUFBLENBQUFFLElBQUFBLENBQUFBLEVBUUFDLE1BQUFBLEdBQUEsWUFBQTtRQUNBQyxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBLHFCQUFBLENBQ0E7TUFBQSxDQUFBLEVBRUFULFVBQUFBLENBQUFVLE9BQUFBLEdBQUEsVUFBQUMsQ0FBQUEsRUFBQUE7UUFDQUgsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQSxtQ0FBQSxDQUFBLEVBQ0FWLFFBQUFBLENBQUFFLE9BQUFBLEVBQUEsR0FBQSxDQUNBO01BQUEsQ0FBQSxFQUVBRCxVQUFBQSxDQUFBWSxPQUFBQSxHQUFBLFVBQUFELENBQUFBLEVBQUFBO1FBQ0FILE9BQUFBLENBQUFDLEdBQUFBLENBQUEsU0FBQSxHQUFBRSxDQUFBQSxHQUFBLFlBQUEsR0FBQVgsVUFBQUEsQ0FBQWEsVUFBQUEsQ0FDQTtNQUFBLENBQUEsRUFFQWIsVUFBQUEsQ0FBQWMsU0FBQUEsR0FBQSxVQUFBSCxDQUFBQSxFQUFBQTtRQUNBLElBQUFJLE9BQUFBLEdBQUFDLElBQUFBLENBQUFDLEtBQUFBLENBQUFOLENBQUFBLENBQUFPLElBQUFBLENBQUFBO1FBQ0FwQixVQUFBQSxDQUFBcUIsVUFBQUEsQ0FBQSxLQUFBLEdBQUFKLE9BQUFBLENBQUFLLEtBQUFBLEVBQUFMLE9BQUFBLENBQUFHLElBQUFBLENBQ0E7TUFBQSxDQUNBO0lBQUEsQ0FBQTtFQUVBcEUsSUFBQUEsQ0FBQXVFLElBQUFBLEdBQUEsVUFBQUQsS0FBQUEsRUFBQUYsSUFBQUEsRUFBQUE7SUFDQSxJQUFBSSxJQUFBQSxHQUFBTixJQUFBQSxDQUFBTyxTQUFBQSxDQUFBO01BQUFILEtBQUFBO01BQUFGO0lBQUFBLENBQUFBLENBQUFBO0lBQ0FsQixVQUFBQSxDQUFBcUIsSUFBQUEsQ0FBQUMsSUFBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQXhFLElBQUFBLENBQUFtRCxPQUFBQSxHQUFBQSxPQUVBO0FBQUEsQ0FBQSxD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LENBQUE7SUFDQUMsUUFBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsVUFBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsR0FBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsU0FBQUEsR0FBQSxFQUFBO0lBQ0FDLEtBQUFBLEdBQUFuRSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBbUUsU0FBQUEsQ0FBQUE7SUFDQUUsWUFBQUEsR0FBQSxDQUNBO01BQ0FuQyxJQUFBQSxFQUFBLE9BQUE7TUFDQW9DLFlBQUFBLEVBQUEsYUFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7UUFDQW5LLENBQUFBLEVBQUEsQ0FBQTtRQUNBUyxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBMkosR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0FBLFNBQUFBLENBQUFDLFFBQUFBLElBQUEsR0FDQTtNQUFBO0lBQUEsQ0FBQSxFQUVBO01BQ0E3QyxJQUFBQSxFQUFBLFVBQUE7TUFDQW9DLFlBQUFBLEVBQUEsWUFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7UUFDQW5LLENBQUFBLEVBQUEsQ0FBQTtRQUNBUyxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBMkosR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0FBLFNBQUFBLENBQUFFLFFBQUFBLEdBQUEsQ0FBQSxLQUNBRixTQUFBQSxDQUFBRyxZQUFBQSxJQUFBLENBQUEsQ0FFQTtNQUFBO0lBQUEsQ0FBQSxFQUVBO01BQ0EvQyxJQUFBQSxFQUFBLE9BQUE7TUFDQW9DLFlBQUFBLEVBQUEsZ0JBQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBO1FBQ0FuSyxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQTJKLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBQSxTQUFBQSxDQUFBSSxLQUFBQSxJQUFBLENBQ0E7TUFBQTtJQUFBLENBQUEsRUFFQTtNQUNBaEQsSUFBQUEsRUFBQSxRQUFBO01BQ0FvQyxZQUFBQSxFQUFBLFFBQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0FuSyxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQTJKLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBQSxTQUFBQSxDQUFBSyxNQUFBQSxHQUFBQSxDQUFBLENBQ0E7TUFBQTtJQUFBLENBQUEsRUFFQTtNQUNBakQsSUFBQUEsRUFBQSxNQUFBO01BQ0FvQyxZQUFBQSxFQUFBLE1BQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0FuSyxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQTJKLEdBQUFB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QUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQThKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBL0osSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBOEosS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFDQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQSxHQUFBOUosSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBOEosS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEvSixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE4SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQS9KLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQThKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FILFFBQUFBLENBQUFFLFlBQUFBLENBQUEsTUFBQSxFQUFBLE1BQUEsR0FBQTlKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQThKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBL0osSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBOEosS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEvSixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE4SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUFBLEtBQUEsRUFBQSxNQUFBLEdBQUE5SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUE4SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQS9KLElBQUFBLENB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QUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQUksSUFBQUEsRUFBQTtRQUNBTixLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBekksT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBMkksT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQUssS0FBQUEsRUFBQTtRQUNBUCxLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBekksT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBMkksT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQU0sS0FBQUEsRUFBQTtRQUNBUixLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBekksT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBMkksT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQU8sS0FBQUEsRUFBQTtRQUNBVCxLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBekksT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBMkksT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQVEsR0FBQUEsRUFBQTtRQUNBVixLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBekksT0FBQUEsRUFBQSxDQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBMkksT0FB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QUFBQSxFQUFBLGFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEscUJBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsVUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxTQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsUUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxZQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFdBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsZ0JBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsU0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxXQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLE9BQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsZUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxZQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLHdCQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFVBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsWUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxTQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLGNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsVUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxTQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsT0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxrQkFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxTQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsaUNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsa0NBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsUUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxTQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsZUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxVQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsUUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxRQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLHlCQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLHVDQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLDBCQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLE9BQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsYUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxlQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLGNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsT0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxVQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLE9BQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsVUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxZQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLE1BQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsWUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxTQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLGtCQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsZ0JBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsU0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxVQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsVUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxvQkFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxTQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsU0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxPQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLGdCQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsT0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxVQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsTUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSw2QkFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxpQ0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxlQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsT0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxzREFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxTQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsZUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxVQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLE9BQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsV0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxXQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsUUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxZQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLG1CQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsOENBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsV0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxNQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLGVBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsUUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxXQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLG1DQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFVBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsU0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxPQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsV0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxTQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsYUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxPQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLGdDQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLE1BQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsMkJBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsU0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxPQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsU0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxRQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLE9BQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsT0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxZQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFVBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsVUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxTQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLHVCQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLHdDQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLG9CQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsZ0JBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsWUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxrQ0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxTQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLGFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsZUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxXQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsU0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxXQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFlBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsUUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxPQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsUUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxzQkFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxZQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLDRCQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFlBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsa0JBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsNENBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsTUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxTQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFVBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsT0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSwwQkFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxZQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFlBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsWUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxPQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFdBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsVUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxRQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsVUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxZQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsZUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxPQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLGdCQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsV0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxhQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsT0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxPQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLE1BQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsYUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxNQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsTUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxrQkFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxrQkFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxhQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFVBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsUUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSwyQkFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxVQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLGFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEscUJBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsVUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxPQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFVBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsT0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxTQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsUUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxvQkFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxRQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLGNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsaUJBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsWUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxPQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsV0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSw4Q0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxVQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLHdCQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFVBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsY0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxZQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsU0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxVQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLGFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsdUJBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsYUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSwyQkFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxzQkFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxXQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLDBCQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLE1BQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsNkJBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsTUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxVQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFlBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsU0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxhQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLGNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsU0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxPQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEscUJBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsUUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSwyQkFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSw4QkFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxTQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFFBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsc0NBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsMEJBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsU0FBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxZQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxFQUFBLFVBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsa0NBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsbUNBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEseUJBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsc0JBQUE7TUFBQWlWLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWpWLElBQUFBLEVBQUEsVUFBQTtNQUFBaVYsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBalYsSUFBQUEsRUFBQSxTQUFBO01BQUFpVixJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFqVixJQUFBQSxF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QUFBO0VBRUFtRSxNQUFBQSxDQUFBdWxCLFFBQUFBLEdBQUEsTUFBQSxHQUFBdmxCLE1BQUFBLENBQUFpbEIsT0FBQUEsQ0FBQS9pQixNQUFBQSxDQUFBZ2pCLE1BQUFBLElBQUFBLE1BQUFBLENBQUF2aEIsSUFBQUEsS0FBQXVoQixNQUFBQSxDQUFBSSxLQUFBQSxDQUFBQSxDQUFBcnBCLE1BQUFBLElBQUErRCxNQUFBQSxDQUFBaWxCLE9BQUFBLENBQUFocEIsTUFBQUEsRUFBQUEsRUFFQStELE1BQUFBLENBQUF3bEIsY0FBQUEsR0FBQSxNQUFBeGxCLE1BQUFBLENBQUFpbEIsT0FBQUEsQ0FBQS9pQixNQUFBQSxDQUFBZ2pCLE1BQUFBLElBQUFBLE1BQUFBLENBQUFJLEtBQUFBLENBQUFBLENBQUFycEIsTUFBQUEsS0FBQStELE1BQUFBLENBQUFpbEIsT0FBQUEsQ0FBQWhwQixNQUNBO0FBQUEsQ0FBQSxDQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAgPSBbXHJcbiAge1xyXG4gICAgYmFzZTogXCJBXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDFcXHUyNEI2XFx1RkYyMVxcdTAwQzBcXHUwMEMxXFx1MDBDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHUwMEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHUwMEM0XFx1MDFERVxcdTFFQTJcXHUwMEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFBXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFFXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwQzZcXHUwMUZDXFx1MDFFMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQU9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOFxcdUE3M0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0MlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJDXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDNcXHUyNEI4XFx1RkYyM1xcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMEM3XFx1MUUwOFxcdTAxODdcXHUwMjNCXFx1QTczRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ0XFx1MjRCOVxcdUZGMjRcXHUxRTBBXFx1MDEwRVxcdTFFMENcXHUxRTEwXFx1MUUxMlxcdTFFMEVcXHUwMTEwXFx1MDE4QlxcdTAxOEFcXHUwMTg5XFx1QTc3OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMVxcdTAxQzRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjJcXHUwMUM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJFXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDVcXHUyNEJBXFx1RkYyNVxcdTAwQzhcXHUwMEM5XFx1MDBDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHUwMENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ2XFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0N1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJIXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJJXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDlcXHUyNEJFXFx1RkYyOVxcdTAwQ0NcXHUwMENEXFx1MDBDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHUwMENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJKXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEFcXHUyNEJGXFx1RkYyQVxcdTAxMzRcXHUwMjQ4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJLXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNENcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTEpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDREXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRFXFx1MjRDM1xcdUZGMkVcXHUwMUY4XFx1MDE0M1xcdTAwRDFcXHUxRTQ0XFx1MDE0N1xcdTFFNDZcXHUwMTQ1XFx1MUU0QVxcdTFFNDhcXHUwMjIwXFx1MDE5RFxcdUE3OTBcXHVBN0E0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNEZcXHUyNEM0XFx1RkYyRlxcdTAwRDJcXHUwMEQzXFx1MDBENFxcdTFFRDJcXHUxRUQwXFx1MUVENlxcdTFFRDRcXHUwMEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx1MDBENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHUwMEQ4XFx1MDFGRVxcdTAxODZcXHUwMTlGXFx1QTc0QVxcdUE3NENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9JXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9PXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NEVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9VXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAyMjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlBcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1MFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUxXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlJcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1MlxcdTI0QzdcXHVGRjMyXFx1MDE1NFxcdTFFNThcXHUwMTU4XFx1MDIxMFxcdTAyMTJcXHUxRTVBXFx1MUU1Q1xcdTAxNTZcXHUxRTVFXFx1MDI0Q1xcdTJDNjRcXHVBNzVBXFx1QTdBNlxcdUE3ODJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlNcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1M1xcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJUWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJVXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTVcXHUyNENBXFx1RkYzNVxcdTAwRDlcXHUwMERBXFx1MDBEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx1MDBEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIldcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1N1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU4XFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU5XFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx1MDBERFxcdTAxNzZcXHUxRUY4XFx1MDIzMlxcdTFFOEVcXHUwMTc4XFx1MUVGNlxcdTFFRjRcXHUwMUIzXFx1MDI0RVxcdTFFRkVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1QVxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2MVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxcdTAwRTBcXHUwMEUxXFx1MDBFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHUwMEUzXFx1MDEwMVxcdTAxMDNcXHUxRUIxXFx1MUVBRlxcdTFFQjVcXHUxRUIzXFx1MDIyN1xcdTAxRTFcXHUwMEU0XFx1MDFERlxcdTFFQTNcXHUwMEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFhXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFlXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwRTZcXHUwMUZEXFx1MDFFM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYW9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOVxcdUE3M0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0RdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2MlxcdTI0RDFcXHVGRjQyXFx1MUUwM1xcdTFFMDVcXHUxRTA3XFx1MDE4MFxcdTAxODNcXHUwMjUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJjXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjNcXHUyNEQyXFx1RkY0M1xcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHUwMEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjNcXHUwMUM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJlXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjVcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJnXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjdcXHUyNEQ2XFx1RkY0N1xcdTAxRjVcXHUwMTFEXFx1MUUyMVxcdTAxMUZcXHUwMTIxXFx1MDFFN1xcdTAxMjNcXHUwMUU1XFx1MDI2MFxcdUE3QTFcXHUxRDc5XFx1QTc3Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY4XFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImh2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxOTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImlcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2OVxcdTI0RDhcXHVGRjQ5XFx1MDBFQ1xcdTAwRURcXHUwMEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx1MDBFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QVxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJrXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkJcXHUyNERBXFx1RkY0QlxcdTFFMzFcXHUwMUU5XFx1MUUzM1xcdTAxMzdcXHUxRTM1XFx1MDE5OVxcdTJDNkFcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBN0EzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJsXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkNcXHUyNERCXFx1RkY0Q1xcdTAxNDBcXHUwMTNBXFx1MDEzRVxcdTFFMzdcXHUxRTM5XFx1MDEzQ1xcdTFFM0RcXHUxRTNCXFx1MDE3RlxcdTAxNDJcXHUwMTlBXFx1MDI2QlxcdTJDNjFcXHVBNzQ5XFx1QTc4MVxcdUE3NDddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm1cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2RFxcdTI0RENcXHVGRjREXFx1MUUzRlxcdTFFNDFcXHUxRTQzXFx1MDI3MVxcdTAyNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RVxcdTI0RERcXHVGRjRFXFx1MDFGOVxcdTAxNDRcXHUwMEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RlxcdTI0REVcXHVGRjRGXFx1MDBGMlxcdTAwRjNcXHUwMEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxcdTAwRjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHUwMEY2XFx1MDIyQlxcdTFFQ0ZcXHUwMTUxXFx1MDFEMlxcdTAyMERcXHUwMjBGXFx1MDFBMVxcdTFFRERcXHUxRURCXFx1MUVFMVxcdTFFREZcXHUxRUUzXFx1MUVDRFxcdTFFRDlcXHUwMUVCXFx1MDFFRFxcdTAwRjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib2lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib3VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib29cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwicFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDcwXFx1MjRERlxcdUZGNTBcXHUxRTU1XFx1MUU1N1xcdTAxQTVcXHUxRDdEXFx1QTc1MVxcdUE3NTNcXHVBNzU1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJxXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiclwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDcyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwic1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDczXFx1MjRFMlxcdUZGNTNcXHUwMERGXFx1MDE1QlxcdTFFNjVcXHUwMTVEXFx1MUU2MVxcdTAxNjFcXHUxRTY3XFx1MUU2M1xcdTFFNjlcXHUwMjE5XFx1MDE1RlxcdTAyM0ZcXHVBN0E5XFx1QTc4NVxcdTFFOUJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTcyOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDc1XFx1MjRFNFxcdUZGNTVcXHUwMEY5XFx1MDBGQVxcdTAwRkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxcdTAwRkNcXHUwMURDXFx1MDFEOFxcdTAxRDZcXHUwMURBXFx1MUVFN1xcdTAxNkZcXHUwMTcxXFx1MDFENFxcdTAyMTVcXHUwMjE3XFx1MDFCMFxcdTFFRUJcXHUxRUU5XFx1MUVFRlxcdTFFRURcXHUxRUYxXFx1MUVFNVxcdTFFNzNcXHUwMTczXFx1MUU3N1xcdTFFNzVcXHUwMjg5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2eVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzYxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ3XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzdcXHUyNEU2XFx1RkY1N1xcdTFFODFcXHUxRTgzXFx1MDE3NVxcdTFFODdcXHUxRTg1XFx1MUU5OFxcdTFFODlcXHUyQzczXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ4XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzhcXHUyNEU3XFx1RkY1OFxcdTFFOEJcXHUxRThEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzlcXHUyNEU4XFx1RkY1OVxcdTFFRjNcXHUwMEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxcdTAwRkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3QVxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjNdL2csXHJcbiAgfSxcclxuXTtcclxudmFyIGRvbWFpbnMgPSBbXHJcbiAgXCIuY29tXCIsXHJcbiAgXCIub3JnXCIsXHJcbiAgXCIubmV0XCIsXHJcbiAgXCIuYWNcIixcclxuICBcIi5hZFwiLFxyXG4gIFwiLmFlXCIsXHJcbiAgXCIuYWZcIixcclxuICBcIi5hZ1wiLFxyXG4gIFwiLmFpXCIsXHJcbiAgXCIuYWxcIixcclxuICBcIi5hbVwiLFxyXG4gIFwiLmFvXCIsXHJcbiAgXCIuYXFcIixcclxuICBcIi5hclwiLFxyXG4gIFwiLmFzXCIsXHJcbiAgXCIuYXRcIixcclxuICBcIi5hdVwiLFxyXG4gIFwiLmF3XCIsXHJcbiAgXCIuYXhcIixcclxuICBcIi5helwiLFxyXG4gIFwiLmJhXCIsXHJcbiAgXCIuYmJcIixcclxuICBcIi5iZFwiLFxyXG4gIFwiLmJlXCIsXHJcbiAgXCIuYmZcIixcclxuICBcIi5iZ1wiLFxyXG4gIFwiLmJoXCIsXHJcbiAgXCIuYmlcIixcclxuICBcIi5ialwiLFxyXG4gIFwiLmJtXCIsXHJcbiAgXCIuYm5cIixcclxuICBcIi5ib1wiLFxyXG4gIFwiLmJxXCIsXHJcbiAgXCIuYnJcIixcclxuICBcIi5ic1wiLFxyXG4gIFwiLmJ0XCIsXHJcbiAgXCIuYndcIixcclxuICBcIi5ieVwiLFxyXG4gIFwiLmJ6XCIsXHJcbiAgXCIuY2FcIixcclxuICBcIi5jY1wiLFxyXG4gIFwiLmNkXCIsXHJcbiAgXCIuY2ZcIixcclxuICBcIi5jZ1wiLFxyXG4gIFwiLmNoXCIsXHJcbiAgXCIuY2lcIixcclxuICBcIi5ja1wiLFxyXG4gIFwiLmNsXCIsXHJcbiAgXCIuY21cIixcclxuICBcIi5jblwiLFxyXG4gIFwiLmNvXCIsXHJcbiAgXCIuY3JcIixcclxuICBcIi5jdVwiLFxyXG4gIFwiLmN2XCIsXHJcbiAgXCIuY3dcIixcclxuICBcIi5jeFwiLFxyXG4gIFwiLmN5XCIsXHJcbiAgXCIuY3pcIixcclxuICBcIi5kZVwiLFxyXG4gIFwiLmRqXCIsXHJcbiAgXCIuZGtcIixcclxuICBcIi5kbVwiLFxyXG4gIFwiLmRvXCIsXHJcbiAgXCIuZHpcIixcclxuICBcIi5lY1wiLFxyXG4gIFwiLmVlXCIsXHJcbiAgXCIuZWdcIixcclxuICBcIi5laFwiLFxyXG4gIFwiLmVyXCIsXHJcbiAgXCIuZXNcIixcclxuICBcIi5ldFwiLFxyXG4gIFwiLmV1XCIsXHJcbiAgXCIuZmlcIixcclxuICBcIi5malwiLFxyXG4gIFwiLmZrXCIsXHJcbiAgXCIuZm1cIixcclxuICBcIi5mb1wiLFxyXG4gIFwiLmZyXCIsXHJcbiAgXCIuZ2FcIixcclxuICBcIi5nZFwiLFxyXG4gIFwiLmdlXCIsXHJcbiAgXCIuZ2ZcIixcclxuICBcIi5nZ1wiLFxyXG4gIFwiLmdoXCIsXHJcbiAgXCIuZ2lcIixcclxuICBcIi5nbFwiLFxyXG4gIFwiLmdtXCIsXHJcbiAgXCIuZ25cIixcclxuICBcIi5ncFwiLFxyXG4gIFwiLmdxXCIsXHJcbiAgXCIuZ3JcIixcclxuICBcIi5nc1wiLFxyXG4gIFwiLmd0XCIsXHJcbiAgXCIuZ3VcIixcclxuICBcIi5nd1wiLFxyXG4gIFwiLmd5XCIsXHJcbiAgXCIuaGtcIixcclxuICBcIi5obVwiLFxyXG4gIFwiLmhuXCIsXHJcbiAgXCIuaHJcIixcclxuICBcIi5odFwiLFxyXG4gIFwiLmh1XCIsXHJcbiAgXCIuaWRcIixcclxuICBcIi5pZVwiLFxyXG4gIFwiLmlsXCIsXHJcbiAgXCIuaW1cIixcclxuICBcIi5pblwiLFxyXG4gIFwiLmlvXCIsXHJcbiAgXCIuaXFcIixcclxuICBcIi5pclwiLFxyXG4gIFwiLmlzXCIsXHJcbiAgXCIuaXRcIixcclxuICBcIi5qZVwiLFxyXG4gIFwiLmptXCIsXHJcbiAgXCIuam9cIixcclxuICBcIi5qcFwiLFxyXG4gIFwiLmtlXCIsXHJcbiAgXCIua2dcIixcclxuICBcIi5raFwiLFxyXG4gIFwiLmtpXCIsXHJcbiAgXCIua21cIixcclxuICBcIi5rblwiLFxyXG4gIFwiLmtwXCIsXHJcbiAgXCIua3JcIixcclxuICBcIi5rd1wiLFxyXG4gIFwiLmt5XCIsXHJcbiAgXCIua3pcIixcclxuICBcIi5sYVwiLFxyXG4gIFwiLmxiXCIsXHJcbiAgXCIubGNcIixcclxuICBcIi5saVwiLFxyXG4gIFwiLmxrXCIsXHJcbiAgXCIubHJcIixcclxuICBcIi5sc1wiLFxyXG4gIFwiLmx0XCIsXHJcbiAgXCIubHVcIixcclxuICBcIi5sdlwiLFxyXG4gIFwiLmx5XCIsXHJcbiAgXCIubWFcIixcclxuICBcIi5tY1wiLFxyXG4gIFwiLm1kXCIsXHJcbiAgXCIubWVcIixcclxuICBcIi5tZ1wiLFxyXG4gIFwiLm1oXCIsXHJcbiAgXCIubWtcIixcclxuICBcIi5tbFwiLFxyXG4gIFwiLm1tXCIsXHJcbiAgXCIubW5cIixcclxuICBcIi5tb1wiLFxyXG4gIFwiLm1wXCIsXHJcbiAgXCIubXFcIixcclxuICBcIi5tclwiLFxyXG4gIFwiLm1zXCIsXHJcbiAgXCIubXRcIixcclxuICBcIi5tdVwiLFxyXG4gIFwiLm12XCIsXHJcbiAgXCIubXdcIixcclxuICBcIi5teFwiLFxyXG4gIFwiLm15XCIsXHJcbiAgXCIubXpcIixcclxuICBcIi5uYVwiLFxyXG4gIFwiLm5jXCIsXHJcbiAgXCIubmVcIixcclxuICBcIi5uZlwiLFxyXG4gIFwiLm5nXCIsXHJcbiAgXCIubmlcIixcclxuICBcIi5ubFwiLFxyXG4gIFwiLm5vXCIsXHJcbiAgXCIubnBcIixcclxuICBcIi5uclwiLFxyXG4gIFwiLm51XCIsXHJcbiAgXCIubnpcIixcclxuICBcIi5vbVwiLFxyXG4gIFwiLnBhXCIsXHJcbiAgXCIucGVcIixcclxuICBcIi5wZlwiLFxyXG4gIFwiLnBnXCIsXHJcbiAgXCIucGhcIixcclxuICBcIi5wa1wiLFxyXG4gIFwiLnBsXCIsXHJcbiAgXCIucG1cIixcclxuICBcIi5wblwiLFxyXG4gIFwiLnByXCIsXHJcbiAgXCIucHNcIixcclxuICBcIi5wdFwiLFxyXG4gIFwiLnB3XCIsXHJcbiAgXCIucHlcIixcclxuICBcIi5xYVwiLFxyXG4gIFwiLnJlXCIsXHJcbiAgXCIucm9cIixcclxuICBcIi5yc1wiLFxyXG4gIFwiLnJ1XCIsXHJcbiAgXCIucndcIixcclxuICBcIi5zYVwiLFxyXG4gIFwiLnNiXCIsXHJcbiAgXCIuc2NcIixcclxuICBcIi5zZFwiLFxyXG4gIFwiLnNlXCIsXHJcbiAgXCIuc2dcIixcclxuICBcIi5zaFwiLFxyXG4gIFwiLnNpXCIsXHJcbiAgXCIuc2tcIixcclxuICBcIi5zbFwiLFxyXG4gIFwiLnNtXCIsXHJcbiAgXCIuc25cIixcclxuICBcIi5zb1wiLFxyXG4gIFwiLnNyXCIsXHJcbiAgXCIuc3NcIixcclxuICBcIi5zdFwiLFxyXG4gIFwiLnN1XCIsXHJcbiAgXCIuc3ZcIixcclxuICBcIi5zeFwiLFxyXG4gIFwiLnN5XCIsXHJcbiAgXCIuc3pcIixcclxuICBcIi50Y1wiLFxyXG4gIFwiLnRkXCIsXHJcbiAgXCIudGZcIixcclxuICBcIi50Z1wiLFxyXG4gIFwiLnRoXCIsXHJcbiAgXCIudGpcIixcclxuICBcIi50a1wiLFxyXG4gIFwiLnRsXCIsXHJcbiAgXCIudG1cIixcclxuICBcIi50blwiLFxyXG4gIFwiLnRvXCIsXHJcbiAgXCIudHJcIixcclxuICBcIi50dFwiLFxyXG4gIFwiLnR2XCIsXHJcbiAgXCIudHdcIixcclxuICBcIi50elwiLFxyXG4gIFwiLnVhXCIsXHJcbiAgXCIudWdcIixcclxuICBcIi51a1wiLFxyXG4gIFwiLnVzXCIsXHJcbiAgXCIudXlcIixcclxuICBcIi51elwiLFxyXG4gIFwiLnZhXCIsXHJcbiAgXCIudmNcIixcclxuICBcIi52ZVwiLFxyXG4gIFwiLnZnXCIsXHJcbiAgXCIudmlcIixcclxuICBcIi52blwiLFxyXG4gIFwiLnZ1XCIsXHJcbiAgXCIud2ZcIixcclxuICBcIi53c1wiLFxyXG4gIFwiLnllXCIsXHJcbiAgXCIueXRcIixcclxuICBcIi56YVwiLFxyXG4gIFwiLnptXCIsXHJcbiAgXCIuendcIixcclxuXTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZURpYWNyaXRpY3NcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwLnJlZHVjZSgocmVzdWx0LCBsZXR0ZXIpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKGxldHRlci5sZXR0ZXJzLCBsZXR0ZXIuYmFzZSk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IFNQRUNJQUxfQ0hBUkFDVEVSUyA9IFwiXFxcXFxcXFwvICE/QCMkJV4mKigpXys6Lnt9LDtcXFxcLSdgYOKAmeKAmFxcXCJcIjtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbJHtTUEVDSUFMX0NIQVJBQ1RFUlN9XWAsIFwiZ2lcIiksIFwiXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlQWxsQnV0TGV0dGVyc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlKCkucmVtb3ZlRGlhY3JpdGljcygpLnJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzKCk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjb25jZWFsXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGV4dHJhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFteJHtTUEVDSUFMX0NIQVJBQ1RFUlN9JHtleHRyYX1dYCwgXCJnaVwiKSwgXCLigY5cIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjYXBpdGFsaXplXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnNsaWNlKDEpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlSFRNTFwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoXCI+XCIsIFwiXFx1MjI3QlwiKS5yZXBsYWNlKFwiPFwiLCBcIlxcdTIyN0FcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJhbmdsZUJyYWNrZXRzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShcIjxcIiwgXCImbHQ7XCIpLnJlcGxhY2UoXCI+XCIsIFwiJmd0O1wiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlcGxhY2VBcnJheVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChmaW5kLCByZXBsYWNlKSB7XHJcbiAgICB2YXIgcmVwbGFjZVN0cmluZyA9IHRoaXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcmVwbGFjZVN0cmluZyA9IHJlcGxhY2VTdHJpbmcucmVwbGFjZShmaW5kW2ldLCByZXBsYWNlW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXBsYWNlU3RyaW5nO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwibWFza1VSTHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlQXJyYXkoW1wiaHR0cHM6Ly9cIiwgXCJodHRwOi8vXCJdLCBcIm5vcGU6Ly9cIikucmVwbGFjZUFycmF5KGRvbWFpbnMsIFwiLm5vcGVcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJtYWtlUmVhZGFibGVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VQZXJjZW50YWdlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGRlY2ltYWxzKSB7XHJcbiAgICBpZiAoIWRlY2ltYWxzKSBkZWNpbWFscyA9IDI7XHJcbiAgICByZXR1cm4gYCR7KHRoaXMgKiAxMDApLnRvRml4ZWQoZGVjaW1hbHMpfSVgO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc29ydE9iamVjdCA9IChvYmosIGRpcmVjdGlvbikgPT4ge1xyXG4gIGxldCBhcnIgPSBbXTtcclxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgIGFyci5wdXNoKFtrZXksIG9ialtrZXldXSk7XHJcbiAgfVxyXG4gIGFyci5zb3J0KChhLCBiKSA9PiAoZGlyZWN0aW9uID8gYVsxXSAtIGJbMV0gOiBiWzFdIC0gYVsxXSkpO1xyXG4gIGxldCBvYmpTb3J0ZWQgPSB7fTtcclxuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4gKG9ialNvcnRlZFtpdGVtWzBdXSA9IGl0ZW1bMV0pKTtcclxuICAvL2Fyci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgYS52YWx1ZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi52YWx1ZS50b0xvd2VyQ2FzZSgpKTsgfSk7IC8vdXNlIHRoaXMgdG8gc29ydCBhcyBzdHJpbmdzXHJcbiAgcmV0dXJuIG9ialNvcnRlZDsgLy8gcmV0dXJucyBhcnJheVxyXG59O1xyXG4iLCIvKlxyXG4kID0galF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbnZhciBib290c3RyYXAgPSByZXF1aXJlKCdib290c3RyYXAnKTtcclxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XHJcbnZhciBhbmd1bGFyU2FuaXRpemUgPSByZXF1aXJlKCdhbmd1bGFyLXNhbml0aXplJyk7XHJcbnZhciBhbmd1bGFyQW5pbWF0ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItYW5pbWF0ZScpO1xyXG4qL1xyXG5hbmd1bGFyLm1vZHVsZShcImFwcFwiLCBbXHJcbiAgXCJ1aS5yb3V0ZXJcIixcclxuICBcInVpLmJvb3RzdHJhcFwiLFxyXG4gIFwibmdBbmltYXRlXCIsXHJcbiAgXCJuZ1Nhbml0aXplXCIsXHJcbiAgXCJuZ0RyYWdEcm9wXCIsXHJcbiAgXCJuZ1RhZ3NJbnB1dFwiLFxyXG4gIFwidmNSZWNhcHRjaGFcIixcclxuICBcImNoYXJ0LmpzXCIsXHJcbiAgXCJ0Yy5jaGFydGpzXCIsXHJcbiAgXCJpbmZpbml0ZS1zY3JvbGxcIixcclxuXSk7XHJcbiIsImFuZ3VsYXJcclxuXHQubW9kdWxlKCdhcHAnKVxyXG5cdC5jb25maWcoZnVuY3Rpb24gKFxyXG5cdFx0JHN0YXRlUHJvdmlkZXIsXHJcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIsXHJcblx0XHQkdXJsU2VydmljZVByb3ZpZGVyLFxyXG5cdFx0JGxvY2F0aW9uUHJvdmlkZXJcclxuXHQpIHtcclxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9ob21lJyk7XHJcblx0XHQkdXJsU2VydmljZVByb3ZpZGVyLmNvbmZpZy5zdHJpY3RNb2RlKGZhbHNlKTtcclxuXHJcblx0XHQkc3RhdGVQcm92aWRlclxyXG5cdFx0XHQuc3RhdGUoJ2hvbWUnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2hvbWUnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL2hvbWUuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgncG9saWN5Jywge1xyXG5cdFx0XHRcdHVybDogJy9wb2xpY3knLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3BvbGljeS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdwcmludCcsIHtcclxuXHRcdFx0XHR1cmw6ICcvcHJpbnQnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3ByaW50Lmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ2V4cGVyaWVuY2UnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2V4cGVyaWVuY2UnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdFeHBlcmllbmNlQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvZXhwZXJpZW5jZS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdza2lsbHMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3NraWxscycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1NraWxsc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3NraWxscy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdob2JiaWVzJywge1xyXG5cdFx0XHRcdHVybDogJy9ob2JiaWVzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnSG9iYmllc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL2hvYmJpZXMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnY29udGFjdCcsIHtcclxuXHRcdFx0XHR1cmw6ICcvY29udGFjdCcsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ0NvbnRhY3RDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9jb250YWN0Lmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3dvcmtvdXQnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3dvcmtvdXQnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdXb3Jrb3V0Q3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvd29ya291dC5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdwb3N0cycsIHtcclxuXHRcdFx0XHR1cmw6ICcvcG9zdHMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdQb3N0c0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3Bvc3RzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3Byb2ZpbGUnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3Byb2ZpbGUnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdQcm9maWxlQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvcHJvZmlsZS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdsaXN0cycsIHtcclxuXHRcdFx0XHR1cmw6ICcvbGlzdHMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdMaXN0c0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnbGlzdHMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgncHJpb3JpdGl6ZScsIHtcclxuXHRcdFx0XHR1cmw6ICcvcHJpb3JpdGl6ZScsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1ByaW9yaXRpemVDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3ByaW9yaXRpemUuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnYnViYmxlcycsIHtcclxuXHRcdFx0XHR1cmw6ICcvYnViYmxlcycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ0J1YmJsZXNDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2J1YmJsZXMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnYXN0ZXJvaWRzJywge1xyXG5cdFx0XHRcdHVybDogJy9hc3Rlcm9pZHMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdBc3Rlcm9pZHNDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2FzdGVyb2lkcy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdsZW1taW5ncycsIHtcclxuXHRcdFx0XHR1cmw6ICcvbGVtbWluZ3MnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdMZW1taW5nc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnbGVtbWluZ3MuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnYm90cycsIHtcclxuXHRcdFx0XHR1cmw6ICcvYm90cycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1RlblRoaW5nc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAndGVudGhpbmdzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3RlbnRoaW5ncycsIHtcclxuXHRcdFx0XHR1cmw6ICcvdGVudGhpbmdzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnVGVuVGhpbmdzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW50aGluZ3MuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgndGVudGhpbmdzLWFkbWluJywge1xyXG5cdFx0XHRcdHVybDogJy90ZW50aGluZ3MtYWRtaW4nLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdUZW5UaGluZ3NBZG1pbkN0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAndGVudGhpbmdzLWFkbWluLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3RlbnRoaW5ncy1jdXJhdGUnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3RlbnRoaW5ncy1jdXJhdGUnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdUZW5UaGluZ3NDdXJhdGVDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbnRoaW5ncy1jdXJhdGUuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgndGVudGhpbmdzLWdhbWUnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3RlbnRoaW5ncy86Z2FtZScsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1RlblRoaW5nc0dhbWVDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbnRoaW5ncy1nYW1lLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3F1aXotZ29vZ2xlJywge1xyXG5cdFx0XHRcdHVybDogJy9nb29nbGUnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdRdWl6R29vZ2xlQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdxdWl6emVzL2dvb2dsZS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdxdWl6LWxvZ29zJywge1xyXG5cdFx0XHRcdHVybDogJy9sb2dvcycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1F1aXpMb2dvc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAncXVpenplcy9sb2dvcy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdxdWl6LWFuaW1hbHMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2FuaW1hbHMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdRdWl6QW5pbWFsc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAncXVpenplcy9hbmltYWxzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3F1aXotc2tlbGV0b25zJywge1xyXG5cdFx0XHRcdHVybDogJy9za2VsZXRvbnMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdRdWl6U2tlbGV0b25zQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdxdWl6emVzL3NrZWxldG9ucy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdxdWl6LW1vdmllcycsIHtcclxuXHRcdFx0XHR1cmw6ICcvbW92aWVzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnUXVpek1vdmllc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAncXVpenplcy9tb3ZpZXMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnY2hhcmFkZXMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2NoYXJhZGVzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnQ2hhcmFkZXNDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9jaGFyYWRlcy5odG1sJyxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHtcclxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0cmVxdWlyZUJhc2U6IGZhbHNlLFxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnV2ViU29ja2V0U3ZjJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICR0aW1lb3V0KSB7XHJcbiAgZnVuY3Rpb24gd2Vic29ja2V0SG9zdCgpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonKSB7XHJcbiAgICAgIHJldHVybiBcIndzczovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJ3czovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgY29ubmVjdGlvbjtcclxuICB2YXIgY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KHdlYnNvY2tldEhvc3QoKSk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY29ubmVjdGVkJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY2xvc2VkLiBSZWNvbm5lY3RpbmcuLi4nKTtcclxuICAgICAgJHRpbWVvdXQoY29ubmVjdCwgMTAwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlICsgXCIgLSBTdGF0ZTogXCIgKyBjb25uZWN0aW9uLnJlYWR5U3RhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBwYXlsb2FkID0gSlNPTi5wYXJzZShlLmRhdGEpO1xyXG4gICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3dzOicgKyBwYXlsb2FkLnRvcGljLCBwYXlsb2FkLmRhdGEpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICB0aGlzLnNlbmQgPSBmdW5jdGlvbiAodG9waWMsIGRhdGEpIHtcclxuICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoe3RvcGljOiB0b3BpYywgZGF0YTogZGF0YX0pO1xyXG4gICAgY29ubmVjdGlvbi5zZW5kKGpzb24pO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuY29ubmVjdCA9IGNvbm5lY3Q7XHJcblxyXG59KS5ydW4oZnVuY3Rpb24gKFdlYlNvY2tldFN2Yykge1xyXG4gIFdlYlNvY2tldFN2Yy5jb25uZWN0KCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQXBwQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIExhbmd1YWdlU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIiVjWW91IHNuZWFreSBidWdnZXIhXCIsXHJcbiAgICBcImZvbnQ6IDJlbSBzYW5zLXNlcmlmOyBjb2xvcjogRG9kZ2VyQmx1ZTsgdGV4dC1zaGFkb3c6IDJweCAwIDAgIzQ0NCwgLTJweCAwIDAgIzQ0NCwgMCAycHggMCAjNDQ0LCAwIC0ycHggMCAjNDQ0LCAxcHggMXB4ICM0NDQsIC0xcHggLTFweCAwICM0NDQsIDFweCAtMXB4IDAgIzQ0NCwgLTFweCAxcHggMCAjNDQ0O1wiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIkknbSBnbGFkIHlvdSdyZSBjdXJpb3VzIHdoZXRoZXIgc29tZXRoaW5nIGlzIHBvcHBpbmcgdXAgaW4gaGVyZS4gSSdtIGEgYml0IG9mIGEgc3RpY2tsZXIgd2hlbiBpdCBjb21lcyB0byBtZXNzYWdlcyBpbiB0aGUgY29uc29sZSBzbyBJIHRyeSB0byBtYWtlIHN1cmUgb25seSB0aGluZ3MgSSB3YW50IGFyZSB2aXNpYmxlLiBUaGF0IGJlaW5nIHNhaWQsIGlmIHRoZXJlIGlzIGEgYmlnIGVycm9yIGhlcmUsIEkgd291bGQgcmVhbGx5IGFwcHJlY2lhdGUgeW91IHRlbGxpbmcgbWUgc28gSSBjYW4gZ2V0IHJpZCBvZiBpdCFcIixcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCJUaGUgY29kZSBmb3IgbXkgcmVzdW1lIGlzIGhvc3RlZCBvbiBHaXRodWIgaWYgeW91IHJlYWxseSB3YW50IHRvIGdvIGludG8gYWxsIHRoaXMhID0+IGh0dHBzOi8vZ2l0aHViLmNvbS9GbGFuZGVyc0J1cmdlci9yZXN1bWVcIixcclxuICApO1xyXG5cclxuICAvKlxyXG4gICAgJChkb2N1bWVudCkuYmluZChcImtleXVwIGtleWRvd25cIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGlmKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT0gODApe1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgICovXHJcblxyXG4gICQod2luZG93KS5sb2FkKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICQoXCIuY29udGVudFwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLmNoZWNrYm94LW1lbnVcIikub24oXCJjaGFuZ2VcIiwgXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuY2xvc2VzdChcImxpXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIsIHRoaXMuY2hlY2tlZCk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuYWxsb3ctZm9jdXNcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS50aGVtZUNvdW50ZXIgPSA2O1xyXG4gICRzY29wZS50b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgJHNjb3BlLnllYXIgPSAkc2NvcGUudG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAkc2NvcGUucmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XHJcblxyXG4gICRzY29wZS5mbGlwVGhlbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLmxvYWRpbmdcIikuc2hvdygpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmhpZGUoKTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiLmxvYWRpbmdcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAgICQoXCIuY29udGVudFwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gICAgfSwgODAwKTtcclxuICAgICRzY29wZS50aGVtZUNvdW50ZXIgPSAkc2NvcGUudGhlbWVDb3VudGVyIDwgNiA/ICRzY29wZS50aGVtZUNvdW50ZXIgKyAxIDogKCRzY29wZS50aGVtZUNvdW50ZXIgPSAxKTtcclxuICB9O1xyXG5cclxuICAkLmdldEpTT04oXCIvc2tpbGxzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5za2lsbHMgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIHNraWxsLmVuYWJsZWQ7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2hvYmJpZXMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmhvYmJpZXMgPSBkYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvZXhwZXJpZW5jZS5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuam9icyA9IGRhdGE7XHJcbiAgICAkc2NvcGUuam9icy5mb3JFYWNoKGZ1bmN0aW9uIChqb2IpIHtcclxuICAgICAgam9iLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGpvYi5zdGFydERhdGUpO1xyXG4gICAgICBpZiAoam9iLmVuZERhdGUpIGpvYi5lbmREYXRlID0gbmV3IERhdGUoam9iLmVuZERhdGUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9jaGFyYWRlcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuY2hhcmFkZXMgPSBkYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZ2V0VGltZVNwYW4gPSBmdW5jdGlvbiAoam9iKSB7XHJcbiAgICByZXR1cm4gam9iLnN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpICsgKGpvYi5lbmREYXRlID8gXCIgLSBcIiArIGpvYi5lbmREYXRlLmdldEZ1bGxZZWFyKCkgOiBcIiAtIFRvZGF5XCIpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5sYW5ndWFnZXMgPSBMYW5ndWFnZVN2Yy5sYW5ndWFnZXM7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdExhbmd1YWdlID0gZnVuY3Rpb24gKGxhbmd1YWdlKSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IExhbmd1YWdlU3ZjLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuaG92ZXJkaXYgPSBmdW5jdGlvbiAoZSwgZGl2aWQpIHtcclxuICAgIHZhciBsZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xyXG4gICAgdmFyIHRvcCA9IGUuY2xpZW50WSArIDIwICsgXCJweFwiO1xyXG5cclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZpZCk7XHJcblxyXG4gICAgJChcIiNcIiArIGRpdmlkKS5jc3MoXCJsZWZ0XCIsIGxlZnQpO1xyXG4gICAgJChcIiNcIiArIGRpdmlkKS5jc3MoXCJ0b3BcIiwgdG9wKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLnRvZ2dsZSgpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zb2NpYWxNZWRpYSA9IFtcclxuICAgIC8qXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwibmFtZVwiOiBcImZhY2Vib29rXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2ZsYW5kZXJzYnVyZ2VyXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImZhLWZhY2Vib29rLWZcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwidHdpdHRlclwiLFxyXG4gICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vdHdpdHRlci5jb20vQmVsZ29DYW5hZGlhblwiLFxyXG4gICAgICAgICAgICBcImljb25cIjogXCJmYS10d2l0dGVyXCJcclxuICAgICAgICAgIH0sKi9cclxuICAgIHtcclxuICAgICAgbmFtZTogXCJpbnN0YWdyYW1cIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZmxhbmRlcnNidXJnZXIvXCIsXHJcbiAgICAgIGljb246IFwiZmEtaW5zdGFncmFtXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImxpbmtlZGluXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbGF1cmVudC1kZWJhY2tlci0xNjMzYTkxNlwiLFxyXG4gICAgICBpY29uOiBcImZhLWxpbmtlZGluXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImdpdGh1YlwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL0ZsYW5kZXJzQnVyZ2VyXCIsXHJcbiAgICAgIGljb246IFwiZmEtZ2l0aHViXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImpzZmlkZGxlXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL2pzZmlkZGxlLm5ldC91c2VyL0JlbGdvQ2FuYWRpYW4vZmlkZGxlcy9cIixcclxuICAgICAgaWNvbjogXCJmYS1qc2ZpZGRsZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJzdGFja292ZXJmbG93XCIsXHJcbiAgICAgIHVybDogXCJodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vdXNlcnMvMTA4MzkyMy9iZWxnb2NhbmFkaWFuXCIsXHJcbiAgICAgIGljb246IFwiZmEtc3RhY2stb3ZlcmZsb3dcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiZ29vZHJlYWRzXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL3d3dy5nb29kcmVhZHMuY29tL3VzZXIvc2hvdy8xNzA3MDAxMC1sYXVyZW50XCIsXHJcbiAgICAgIGljb246IFwiZmEtZ29vZHJlYWRzXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpIHtcclxuICAgIFVzZXJTdmMubG9naW4od2luZG93LmxvY2FsU3RvcmFnZS51c2VyKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICBsb2dpbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLiRvbihcImxvZ2luXCIsIGZ1bmN0aW9uIChfLCB1c2VyKSB7XHJcbiAgICBsb2dpbih1c2VyKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gbG9naW4odXNlcikge1xyXG4gICAgaWYgKCEkc2NvcGUubG9nZ2VkSW4pIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS51c2VyID0gdXNlci5faWQ7XHJcbiAgICAgICRzY29wZS5sb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAgICRzY29wZS4kYnJvYWRjYXN0KFwibG9naW5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuJG9uKFwidXBkYXRlXCIsIGZ1bmN0aW9uIChfLCB1c2VyKSB7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUpO1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKFwibG9hZGluZ1wiLCBmdW5jdGlvbiAoXywgdXNlcikge1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgJChcIiNsb2FkaW5nLWljb25cIikuc2hvdygpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKFwibG9hZGVkXCIsIGZ1bmN0aW9uIChfLCB1c2VyKSB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBmaXJlYmFzZVxyXG4gICAgICAuYXV0aCgpXHJcbiAgICAgIC5zaWduT3V0KClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXHJcbiAgICAgICAgJHNjb3BlLmxvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICRzY29wZS4kYnJvYWRjYXN0KFwibG9nb3V0XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5mb3JtYXREYXRlID0gZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgIHZhciBtb250aHMgPSBbXCJKYW5cIiwgXCJGZWJcIiwgXCJNYXJcIiwgXCJBcHJcIiwgXCJNYXlcIiwgXCJKdW5cIiwgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXBcIiwgXCJPY3RcIiwgXCJOb3ZcIiwgXCJEZWNcIl07XHJcbiAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICByZXR1cm4gZGF0ZS5nZXREYXRlKCkgKyBcIi1cIiArIG1vbnRoc1tkYXRlLmdldE1vbnRoKCldICsgXCItXCIgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgfTtcclxuXHJcbiAgU3RyaW5nLnByb3RvdHlwZS5jYXBpdGFsaXplID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnNsaWNlKDEpO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0FzdGVyb2lkc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBHYW1lU3ZjKSB7XHJcblxyXG4gICRzY29wZS5hbm5vdW5jZSA9IGZhbHNlO1xyXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXN0ZXJvaWRzLXBhZ2UnKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgY3R4LmZvbnQgPSBcIjMwcHggQ29taWMgU2FucyBNU1wiO1xyXG4gIGN0eC5maWxsU3R5bGUgPSBcInJlZFwiO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIHZhciBzaG90cyA9IHt9O1xyXG4gIHZhciBhc3Rlcm9pZHMgPSB7fTtcclxuICB2YXIgcG93ZXJ1cHMgPSB7fTtcclxuICB2YXIgZXhwbG9zaW9ucyA9IHt9O1xyXG4gIHZhciBtYXAgPSB7fTtcclxuICB2YXIgc3BhY2VwaWNzID0gMTA7XHJcbiAgdmFyIHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICB2YXIgcG93ZXJ1cFR5cGVzID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnc3BlZWQnLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6ICdNYXggU3BlZWQg4oenJyxcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgICAgc2l6ZTogWzE0LCAzNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWVcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5tYXhTcGVlZCArPSAxMDA7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdjb29sZG93bicsXHJcbiAgICAgIGFubm91bmNlbWVudDogJ0Nvb2xkb3duIOKHqScsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiAzLFxyXG4gICAgICAgIHNpemU6IFsxNywgMTddLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbihzcGFjZXNoaXApIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLmNvb2xkb3duVGltZSAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3JhbmdlJyxcclxuICAgICAgYW5ub3VuY2VtZW50OiAnRmlyaW5nIFJhbmdlIOKHpycsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogNCxcclxuICAgICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICAgIHNpemU6IFszMCwgOF0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWVcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5yYW5nZSArPSA1O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnc2hpZWxkJyxcclxuICAgICAgYW5ub3VuY2VtZW50OiAnU2hpZWxkJyxcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA1LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzE5LCAxOV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWVcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5zaGllbGQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnbnVrZScsXHJcbiAgICAgIGFubm91bmNlbWVudDogJ051a2UnLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogOCxcclxuICAgICAgICBzaXplOiBbMTUsIDE1XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICAgIGFzdGVyb2lkc1tpXS5leHBsb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYXduQXN0ZXJvaWRzKDUpO1xyXG4gICAgICB9XHJcbiAgICB9LC8qXHJcbiAgICAnc2lkZV9jYW5ub25zJyxcclxuICAgICdsYXNlcicsXHJcbiAgICAnc2hpZWxkJyxcclxuICAgICdsaWZlJyxcclxuICAgICdtaXNzaWxlcycsXHJcbiAgICAnbnVrZSdcclxuICAgICovXHJcbiAgXTtcclxuICBwb3dlcnVwVHlwZXMuZm9yRWFjaChmdW5jdGlvbihwb3dlcnVwLCBpLCBhcnJheSkge1xyXG4gICAgYXJyYXlbaV0uaW1nLnNyYyA9ICdhc3Rlcm9pZHMvJyArIHBvd2VydXAubmFtZSArICcucG5nJztcclxuICB9KTtcclxuXHJcbiAgdmFyIGV4cGxvc2lvbkltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgZXhwbG9zaW9uSW1hZ2Uuc3JjID0gJ2FzdGVyb2lkcy9leHBsb3Npb24ucG5nJztcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSB0cnVlO1xyXG4gIH0sdHJ1ZSk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBtYXBbZS5rZXlDb2RlIHx8IGUud2hpY2hdID0gZmFsc2U7XHJcbiAgfSx0cnVlKTtcclxuXHJcbiAgJHNjb3BlLmhpZ2hzY29yZSA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGV2YWx1YXRlS2V5cygpIHtcclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBpZiAobWFwWzMyXSkge1xyXG4gICAgICAgIC8vU3BhY2VcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLmNvb2xkb3duID09PSAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc2hvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszN10pIHtcclxuICAgICAgICAvL0xlZnQgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnJvdGF0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gPSAzNjA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiAtPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM5XSkge1xyXG4gICAgICAgIC8vUmlnaHQgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnJvdGF0aW9uID09PSAzNjApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiArPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM4XSkge1xyXG4gICAgICAgIC8vVXAgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkIDw9IHNwYWNlc2hpcC5tYXhTcGVlZCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkICs9IDU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQtLTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFs0MF0pIHtcclxuICAgICAgICAvL0Rvd24gQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkIC09IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobWFwWzMyXSkge1xyXG4gICAgICAgIHN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNwYWNlc2hpcCgpIHtcclxuICAgIHRoaXMud2lkdGggPSA1MDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gNTA7XHJcbiAgICB0aGlzLnNoaWVsZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yYW5nZSA9IDgwO1xyXG4gICAgdGhpcy5jYW5ub24gPSB7XHJcbiAgICAgIHg6IHRoaXMud2lkdGggLyAyIC0gNC41LFxyXG4gICAgICB5OiB0aGlzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAqIDAuMDc4MTI1XHJcbiAgICB9O1xyXG4gICAgdGhpcy5jb29sZG93biA9IDA7XHJcbiAgICB0aGlzLmNvb2xkb3duVGltZSA9IDIwO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtcclxuICAgICAgY2FudmFzLndpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyLFxyXG4gICAgICBjYW52YXMuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0IC8gMlxyXG4gICAgXTtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSAnYXN0ZXJvaWRzL3NwYWNlc2hpcC5wbmcnO1xyXG4gICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB0aGlzLm1heFNwZWVkID0gMTAwMDtcclxuICAgIHRoaXMuYW5nbGUgPSAwO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcblxyXG4gICAgdGhpcy5zaG9vdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmNvb2xkb3duID0gdGhpcy5jb29sZG93blRpbWU7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIHNob3RzW2lkXSA9IG5ldyBTaG90KGlkLCB0aGlzKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguYXJjKHRoaXMucG9zaXRpb25bMF0gKyB0aGlzLndpZHRoIC8gMiwgdGhpcy5wb3NpdGlvblsxXSArIHRoaXMuaGVpZ2h0IC8gMiwgMzAsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMzUsIDIzNywgODYsIDAuNSlcIjtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYig2NiwgMTY4LCAzNiwgMC44KVwiO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgICAgdmFyIGFzdGVyb2lkID0gYXN0ZXJvaWRzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoYXN0ZXJvaWQsIHRoaXMpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zaGllbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYXN0ZXJvaWQuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdhbWVPdmVyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICBpZiAodGhpcy5jb29sZG93biA+IDApIHtcclxuICAgICAgICB0aGlzLmNvb2xkb3duLS07XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTaG90KGlkLCBzcGFjZXNoaXApIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbXHJcbiAgICAgIHNwYWNlc2hpcC5wb3NpdGlvblswXSArIHNwYWNlc2hpcC5jYW5ub24ueCArIHNwYWNlc2hpcC5jYW5ub24ueCAqIE1hdGguY29zKChzcGFjZXNoaXAucm90YXRpb24gLSA5MCkgKiBNYXRoLlBJIC8gMTgwKSxcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzFdICsgc3BhY2VzaGlwLmNhbm5vbi55ICsgc3BhY2VzaGlwLmNhbm5vbi55ICogTWF0aC5zaW4oKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkgLyAxODApXHJcbiAgICBdO1xyXG4gICAgdGhpcy53aWR0aCA9IDk7XHJcbiAgICB0aGlzLmhlaWdodCA9IDE1O1xyXG4gICAgdGhpcy5hbmdsZSA9IHNwYWNlc2hpcC5hbmdsZTtcclxuICAgIHRoaXMucm90YXRpb24gPSBzcGFjZXNoaXAucm90YXRpb247XHJcbiAgICB0aGlzLnNwZWVkID0gc3BhY2VzaGlwLnNwZWVkICsgNTAwO1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IHNwYWNlc2hpcC5yYW5nZTtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSAnYXN0ZXJvaWRzL3Nob3QucG5nJztcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEFzdGVyb2lkKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLndpZHRoID0gTWF0aC5yYW5kb20oKSAqIDUwICsgMjA7XHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMud2lkdGg7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RW50cnlQb3NpdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5yb3RhdGlvblNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDYgLSAzO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAzMDAgKyAyO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9ICdhc3Rlcm9pZHMvYXN0ZXJvaWQnICsgKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDYpICsgMSkgKyAnLnBuZyc7XHJcblxyXG4gICAgdGhpcy5leHBsb2RlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGV4cGxvc2lvbnNbdGhpcy5pZF0gPSBuZXcgRXhwbG9zaW9uKHRoaXMpO1xyXG4gICAgICByZXR1cm4gZGVsZXRlIGFzdGVyb2lkc1t0aGlzLmlkXTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xyXG4gICAgICBpZiAodGhpcy5yb3RhdGlvbiA+IDM2MCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSB0aGlzLnJvdGF0aW9uIC0gMzYwO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucm90YXRpb24gPCAwKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDM2MCArIHRoaXMucm90YXRpb247XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSBpbiBzaG90cykge1xyXG4gICAgICAgIHZhciBzaG90ID0gc2hvdHNbaV07XHJcbiAgICAgICAgaWYgKGhpdChzaG90LCB0aGlzKSkge1xyXG4gICAgICAgICAgdGhpcy5leHBsb2RlKCk7XHJcbiAgICAgICAgICB2YXIgcG9pbnRzID0gTWF0aC5mbG9vcigoc2hvdC5zcGVlZCAtIDUwMCkgLyAxMCArIDcwIC0gdGhpcy53aWR0aCk7XHJcbiAgICAgICAgICBpZiAoTWF0aC5mbG9vcigocG9pbnRzICsgJHNjb3BlLnNjb3JlKSAvIDEwMCkgPiBNYXRoLmZsb29yKCRzY29wZS5zY29yZSAvIDEwMCkpIHtcclxuICAgICAgICAgICAgc3Bhd25Qb3dlcnVwKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkc2NvcGUuc2NvcmUgKz0gcG9pbnRzO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgZGVsZXRlIHNob3RzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEV4cGxvc2lvbihvYmplY3QpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbb2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV1dO1xyXG4gICAgdGhpcy53aWR0aCA9IG9iamVjdC53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gb2JqZWN0LmhlaWdodDtcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLmN5Y2xlID0ge1xyXG4gICAgICByb3dzOiA2LFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICBzaXplOiBbMjU2LCAyNTZdLFxyXG4gICAgICBpOiAwLFxyXG4gICAgICBkaXJlY3Rpb246IHRydWVcclxuICAgIH07XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gNDc7XHJcbiAgICB0aGlzLmltZyA9IGV4cGxvc2lvbkltYWdlO1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuY3ljbGUuaSsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gUG93ZXJ1cChpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wb3dlcnVwID0gcG93ZXJ1cFR5cGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvd2VydXBUeXBlcy5sZW5ndGgpXTtcclxuICAgIHRoaXMuY3ljbGUgPSB0aGlzLnBvd2VydXAuY3ljbGU7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gMTAwMDtcclxuICAgIGlmICh0aGlzLmN5Y2xlLnNpemVbMV0gPiB0aGlzLmN5Y2xlLnNpemVbMF0pIHtcclxuICAgICAgdGhpcy5oZWlnaHQgPSA0MDtcclxuICAgICAgdGhpcy53aWR0aCA9IE1hdGgucm91bmQodGhpcy5oZWlnaHQgLyB0aGlzLmN5Y2xlLnNpemVbMV0gKiB0aGlzLmN5Y2xlLnNpemVbMF0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53aWR0aCA9IDQwO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IE1hdGgucm91bmQodGhpcy53aWR0aCAvIHRoaXMuY3ljbGUuc2l6ZVswXSAqIHRoaXMuY3ljbGUuc2l6ZVsxXSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RW50cnlQb3NpdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmltZyA9IHRoaXMucG93ZXJ1cC5pbWc7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMTUwICsgNTA7XHJcbiAgICB2YXIgZGVsYXkgPSA1O1xyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICByZXR1cm4gZGVsZXRlIHBvd2VydXBzW3RoaXMuaWRdO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChoaXQoc3BhY2VzaGlwLCB0aGlzKSkge1xyXG4gICAgICAgICRzY29wZS5hbm5vdW5jZSA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLmFubm91bmNlbWVudCA9IHRoaXMucG93ZXJ1cC5hbm5vdW5jZW1lbnQ7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB0aGlzLnBvd2VydXAuYWN0aXZhdGUoc3BhY2VzaGlwKTtcclxuICAgICAgICByZXR1cm4gZGVsZXRlIHBvd2VydXBzW3RoaXMuaWRdO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKGRlbGF5IDw9IDApIHtcclxuICAgICAgICBpZiAodGhpcy5jeWNsZS5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLmktLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsYXkgPSA1O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGF5LS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlKG9iamVjdCkge1xyXG4gICAgIG9iamVjdC5wb3NpdGlvblswXSArPSBvYmplY3Quc3BlZWQgLyAxMDAgKiBNYXRoLmNvcygob2JqZWN0LmFuZ2xlIC0gOTApICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgb2JqZWN0LnBvc2l0aW9uWzFdICs9IG9iamVjdC5zcGVlZCAvIDEwMCAqIE1hdGguc2luKChvYmplY3QuYW5nbGUgLSA5MCkgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICBpZiAob2JqZWN0LnBvc2l0aW9uWzBdID4gY2FudmFzLndpZHRoKSB7XHJcbiAgICAgICBvYmplY3QucG9zaXRpb25bMF0gPSAtb2JqZWN0LndpZHRoO1xyXG4gICAgIH0gZWxzZSBpZiAob2JqZWN0LnBvc2l0aW9uWzBdIDwgLW9iamVjdC53aWR0aCkge1xyXG4gICAgICAgb2JqZWN0LnBvc2l0aW9uWzBdID0gY2FudmFzLndpZHRoO1xyXG4gICAgIH1cclxuICAgICBpZiAob2JqZWN0LnBvc2l0aW9uWzFdID4gY2FudmFzLmhlaWdodCkge1xyXG4gICAgICAgb2JqZWN0LnBvc2l0aW9uWzFdID0gLW9iamVjdC5oZWlnaHQ7XHJcbiAgICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMV0gPCAtb2JqZWN0LmhlaWdodCkge1xyXG4gICAgICAgb2JqZWN0LnBvc2l0aW9uWzFdID0gY2FudmFzLmhlaWdodDtcclxuICAgICB9XHJcbiAgICAgY3R4LnNhdmUoKTtcclxuICAgICBjdHgudHJhbnNsYXRlKG9iamVjdC5wb3NpdGlvblswXSwgb2JqZWN0LnBvc2l0aW9uWzFdKTtcclxuICAgICBjdHgudHJhbnNsYXRlKG9iamVjdC53aWR0aCAvIDIsIG9iamVjdC5oZWlnaHQgLyAyKTtcclxuICAgICBjdHgucm90YXRlKG9iamVjdC5yb3RhdGlvbiAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgIGlmIChvYmplY3QuY3ljbGUpIHtcclxuICAgICAgIHZhciBjb2x1bW4gPSBvYmplY3QuY3ljbGUuaSAlIG9iamVjdC5jeWNsZS5jb2x1bW5zO1xyXG4gICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3Iob2JqZWN0LmN5Y2xlLmkgLyBvYmplY3QuY3ljbGUuY29sdW1ucyk7XHJcbiAgICAgICBjdHguZHJhd0ltYWdlKG9iamVjdC5pbWcsIG9iamVjdC5jeWNsZS5zaXplWzBdICogY29sdW1uLCBvYmplY3QuY3ljbGUuc2l6ZVsxXSAqIHJvdywgb2JqZWN0LmN5Y2xlLnNpemVbMF0sIG9iamVjdC5jeWNsZS5zaXplWzFdLCAtb2JqZWN0LndpZHRoIC8gMiwgLW9iamVjdC5oZWlnaHQgLyAyLCBvYmplY3Qud2lkdGgsIG9iamVjdC5oZWlnaHQpO1xyXG5cclxuICAgICAgIGlmIChvYmplY3QuY3ljbGUuaSA8PSAwKSB7XHJcbiAgICAgICAgIG9iamVjdC5jeWNsZS5pID0gMDtcclxuICAgICAgICAgb2JqZWN0LmN5Y2xlLmRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICAgICB9IGVsc2UgaWYgKG9iamVjdC5jeWNsZS5pID49IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MpIHtcclxuICAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSBvYmplY3QuY3ljbGUuY29sdW1ucyAqIG9iamVjdC5jeWNsZS5yb3dzIC0gMTtcclxuICAgICAgICAgb2JqZWN0LmN5Y2xlLmRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgfVxyXG4gICAgIH0gZWxzZSB7XHJcbiAgICAgICBjdHguZHJhd0ltYWdlKG9iamVjdC5pbWcsIC1vYmplY3Qud2lkdGggLyAyLCAtb2JqZWN0LmhlaWdodCAvIDIsIG9iamVjdC53aWR0aCwgb2JqZWN0LmhlaWdodCk7XHJcbiAgICAgfVxyXG4gICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgc3BhY2VzaGlwO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgICRzY29wZS5wbGF5aW5nID0gdHJ1ZTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGFjZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwYWNlcGljcyk7XHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICBzcGFjZXNoaXAgPSBuZXcgU3BhY2VzaGlwKCk7XHJcbiAgICAkc2NvcGUuc2NvcmUgPSAwO1xyXG4gICAgc3Bhd25Bc3Rlcm9pZHMoNSk7XHJcbiAgICBhdXRvU3Bhd24oKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEVudHJ5UG9zaXRpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIGdyaWRYID0gTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICB2YXIgZ3JpZFkgPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciB4LCB5ID0gMDtcclxuICAgIGlmIChncmlkWCA+PSAxKSB7XHJcbiAgICAgIHggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xyXG4gICAgICBpZiAoeSA+PSAxKSB7XHJcbiAgICAgICAgeSA9IDAgLSBoZWlnaHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeSA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcclxuICAgICAgaWYgKGdyaWRZID49IDEpIHtcclxuICAgICAgICB4ID0gMCAtIHdpZHRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHggPSBjYW52YXMud2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbeCwgeV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoaXQob2JqZWN0MSwgb2JqZWN0Mikge1xyXG4gICAgcmV0dXJuIChvYmplY3QxLnBvc2l0aW9uWzBdIDwgb2JqZWN0Mi5wb3NpdGlvblswXSArIG9iamVjdDIud2lkdGgpICYmXHJcbiAgICAgICAgICAgKG9iamVjdDIucG9zaXRpb25bMF0gPCBvYmplY3QxLnBvc2l0aW9uWzBdICsgb2JqZWN0MS53aWR0aCkgJiZcclxuICAgICAgICAgICAob2JqZWN0MS5wb3NpdGlvblsxXSA8IG9iamVjdDIucG9zaXRpb25bMV0gKyBvYmplY3QyLmhlaWdodCkgJiZcclxuICAgICAgICAgICAob2JqZWN0Mi5wb3NpdGlvblsxXSA8IG9iamVjdDEucG9zaXRpb25bMV0gKyBvYmplY3QxLmhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhdXRvU3Bhd24oKSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoYXN0ZXJvaWRzKS5sZW5ndGggPCAyMDApIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgYXN0ZXJvaWRzW2lkXSA9IG5ldyBBc3Rlcm9pZChpZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBhdXRvU3Bhd24oKTtcclxuICAgICAgfSwgc3Bhd25JbnRlcnZhbCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduSW50ZXJ2YWwoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnNjb3JlIDwgMTAwMCkge1xyXG4gICAgICByZXR1cm4gMTAwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgMjAwMCkge1xyXG4gICAgICByZXR1cm4gOTAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCAzMDAwKSB7XHJcbiAgICAgIHJldHVybiA4MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDQwMDApIHtcclxuICAgICAgcmV0dXJuIDcwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNTAwMCkge1xyXG4gICAgICByZXR1cm4gNjAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA2MDAwKSB7XHJcbiAgICAgIHJldHVybiA1MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDcwMDApIHtcclxuICAgICAgcmV0dXJuIDQwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgODAwMCkge1xyXG4gICAgICByZXR1cm4gMzAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDIwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduQXN0ZXJvaWRzKGFtb3VudCkge1xyXG4gICAgdmFyIGkgPSAwO1xyXG4gICAgZG8ge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH0gd2hpbGUgKGkrKyA8PSBhbW91bnQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25Qb3dlcnVwKCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHBvd2VydXBzKS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIHBvd2VydXBzW2lkXSA9IG5ldyBQb3dlcnVwKGlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdhbWVPdmVyKCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgIGFzdGVyb2lkc1tpXS5leHBsb2RlKCk7XHJcbiAgICB9XHJcbiAgICBzaG90cyA9IHt9O1xyXG4gICAgaWYgKCRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmhpZ2hzY29yZS5hc3Rlcm9pZHMgPCAkc2NvcGUuc2NvcmUpIHtcclxuICAgICAgICAkc2NvcGUuY3VycmVudFVzZXIuaGlnaHNjb3JlLmFzdGVyb2lkcyA9ICRzY29wZS5zY29yZTtcclxuICAgICAgICBHYW1lU3ZjLnNldEhpZ2hzY29yZSgnYXN0ZXJvaWRzJywgJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCwgJHNjb3BlLnNjb3JlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdoc2NvcmUgPCAkc2NvcGUuc2NvcmUpIHtcclxuICAgICAgICAkc2NvcGUuaGlnaHNjb3JlID0gJHNjb3BlLnNjb3JlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHQvLyBTdGFydCBsaXN0ZW5pbmcgdG8gcmVzaXplIGV2ZW50cyBhbmRcclxuXHQvLyBkcmF3IGNhbnZhcy5cclxuXHJcblx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcblx0XHQvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuXHRcdC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcblxyXG5cdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdHJlc2l6ZUNhbnZhcygpO1xyXG5cdH1cclxuXHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0Ly8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcblx0Ly8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcblx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpO1xyXG5cdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1MCA6IDEwNSk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG5cclxuICB2YXIgdGFsbHkgPSAwO1xyXG4gIHZhciBkaXJlY3Rpb24gPSB0cnVlO1xyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgZm9yICh2YXIgaSBpbiBzaG90cykge1xyXG4gICAgICBpZiAoc2hvdHNbaV0ubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBzaG90c1tpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG90c1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgYXN0ZXJvaWRzW2ldLm1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBwb3dlcnVwcykge1xyXG4gICAgICBwb3dlcnVwc1tpXS5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gZXhwbG9zaW9ucykge1xyXG4gICAgICBpZiAoZXhwbG9zaW9uc1tpXS5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIGV4cGxvc2lvbnNbaV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXhwbG9zaW9uc1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGV2YWx1YXRlS2V5cygpO1xyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIHNwYWNlc2hpcC5tb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgY2FudmFzLndpZHRoLCAwKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKCcwJywgJ3JnYignICsgTWF0aC5mbG9vcigyNTYgLSAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnKScpO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoJzAuMjUnLCAncmdiKCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDI1NiAtIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcpJyk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgnMC41JywgJ3JnYignICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigyNTYgLSAyNTYgKiB0YWxseSAvIDEwMCkgKyAnKScpO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoJzAuNzUnLCAncmdiKCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDI1NiAtIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcpJyk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgnMS4wJywgJ3JnYignICsgTWF0aC5mbG9vcigyNTYgLSAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnKScpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICAgIGN0eC5mb250PSc2MHB4IE1vbm90b24nO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ0FzdGVyb2lkcycsIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoJ0FzdGVyb2lkcycpLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpO1xyXG4gICAgICBjdHguZm9udD0nMjBweCBBbGRyaWNoJztcclxuICAgICAgY3R4LmZpbGxUZXh0KCdQcmVzcyBzcGFjZSB0byBzdGFydCcsIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoJ1ByZXNzIHNwYWNlIHRvIHN0YXJ0Jykud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiArIDIwKTtcclxuICAgICAgY3R4LmZpbGxUZXh0KCdEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5IExhdXJlbnQgRGViYWNrZXInLCBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KCdEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5IExhdXJlbnQgRGViYWNrZXInKS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLSAzMCk7XHJcbiAgICB9XHJcbiAgICB0YWxseSArPSBkaXJlY3Rpb24gPyAxIDogLTE7XHJcbiAgICBpZiAodGFsbHkgPiAxMDApIHtcclxuICAgICAgdGFsbHkgPSAxMDA7XHJcbiAgICAgIGRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICh0YWxseSA8IDApIHtcclxuICAgICAgdGFsbHkgPSAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLnNwYWNlID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXCJhc3Rlcm9pZHMvc3BhY2UnICsgc3BhY2UgKyAnLmpwZ1wiKSdcclxuICAgIH07XHJcbiAgfTtcclxuXHJcblxyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignQnViYmxlc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnViYmxlcy1wYWdlJyk7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIHZhciBidWJibGVzID0gW107XHJcbiAgdmFyIGNvbG9ycyA9IFsnI2ZmYzMwMCcsJyNmZjU3MzMnLCcjYzcwMDM5JywnIzkwMGMzZScsJyM1NzE4NDUnXTtcclxuXHJcbiAgZnVuY3Rpb24gQnViYmxlKCkge1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDA7XHJcbiAgICB0aGlzLnJhZGl1cyA9IDE7XHJcbiAgICB0aGlzLmV4cGFuZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMyk7XHJcbiAgICB0aGlzLmNpcmN1bWZlcmVuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA1MCkgKyA1O1xyXG4gICAgdGhpcy5tYXhSYWRpdXMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyMDApICsgMjA7XHJcbiAgICB0aGlzLnggPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGgpO1xyXG4gICAgdGhpcy55ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodCk7XHJcbiAgICB0aGlzLnZ4ID0gKE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xKTtcclxuICAgIHRoaXMudnkgPSAoTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTEpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGJ1YmJsZXMuZm9yRWFjaChmdW5jdGlvbihidWJibGUpIHtcclxuICAgICAgdmFyIGNvbG9yID0gY29sb3JzW01hdGgucm91bmQoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyhidWJibGUueCwgYnViYmxlLnksIGJ1YmJsZS5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yc1tNYXRoLnJvdW5kKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcnNbY29sb3JzLmxlbmd0aCAtIE1hdGgucm91bmQoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSBidWJibGUuY2lyY3VtZmVyZW5jZSAqIGJ1YmJsZS5yYWRpdXMgLyBidWJibGUubWF4UmFkaXVzO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbHRlckJ1YmJsZXMoKSB7XHJcbiAgICBidWJibGVzLnB1c2gobmV3IEJ1YmJsZSgpKTtcclxuICAgIGJ1YmJsZXMgPSBidWJibGVzLmZpbHRlcihmdW5jdGlvbiAoYnViYmxlKSB7XHJcbiAgICAgIGlmIChidWJibGUucmFkaXVzID09PSBidWJibGUubWF4UmFkaXVzKSB7XHJcbiAgICAgICAgYnViYmxlLmV4cGFuZGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1YmJsZS54ICs9IGJ1YmJsZS52eCAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnkgKz0gYnViYmxlLnZ5ICogYnViYmxlLnNwZWVkO1xyXG4gICAgICBidWJibGUucmFkaXVzICs9IChidWJibGUuZXhwYW5kaW5nID8gMSA6IC0xKTtcclxuICAgICAgcmV0dXJuIGJ1YmJsZS5yYWRpdXMgPiAwO1xyXG4gICAgfSk7XHJcbiAgICBkcmF3KCk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmlsdGVyQnViYmxlcyk7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZmlsdGVyQnViYmxlcyk7XHJcblxyXG5cclxuXHQoZnVuY3Rpb24oKSB7XHJcblxyXG5cdFx0Ly8gU3RhcnQgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgYW5kXHJcblx0XHQvLyBkcmF3IGNhbnZhcy5cclxuXHRcdGluaXRpYWxpemUoKTtcclxuXHJcblx0XHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0XHQvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG5cdFx0XHQvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuXHRcdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG5cdFx0XHQvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG5cdFx0XHRyZXNpemVDYW52YXMoKTtcclxuXHRcdH1cclxuXHRcdC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuXHRcdC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG5cdFx0Ly8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcblx0XHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcblx0XHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1NSA6IDExMSk7XHJcblx0XHR9XHJcblxyXG5cdH0pKCk7XHJcblxyXG5cclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignQ2hhcmFkZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cdCRzY29wZS5zZWxlY3RXb3JkID0gY2F0ZWdvcnkgPT4ge1xyXG5cdFx0JHNjb3BlLndvcmQgPVxyXG5cdFx0XHQkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldW1xyXG5cdFx0XHRcdE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICRzY29wZS5jaGFyYWRlc1tjYXRlZ29yeV0ubGVuZ3RoKVxyXG5cdFx0XHRdO1xyXG5cdFx0Y29uc29sZS5sb2coJHNjb3BlLndvcmQpO1xyXG5cdH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQ29udGFjdEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRW1haWxTdmMpIHtcclxuICAkc2NvcGUub3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTcGFtXCIsXHJcbiAgICAgIHRleHQ6IFwiSSBhbSBhIHNwYW0gYm90IGFuZCBhdXRvbWF0aWNhbGx5IGNoZWNrIHRoZSBmaXJzdCBvcHRpb24gSSBmaW5kIVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPcHBvcnR1bml0eVwiLFxyXG4gICAgICB0ZXh0OiBcIllvdSBzZWVtIHRvIGhhdmUgdGhlIHNraWxscyBJIHNlZWssIEknZCBsaWtlIHRvIHRhbGsgYWJvdXQgc29tZSBvcHBvcnR1bml0aWVzLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZXN1bWVcIixcclxuICAgICAgdGV4dDogXCJJIGRpZyB0aGUgcmVzdW1lLCBob3cgZGlkIHlvdSBtYWtlIGl0P1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPdGhlclwiLFxyXG4gICAgICB0ZXh0OiBcIlN1bXRpbiBlbHNlIVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICAkc2NvcGUuY29udGFjdCA9IHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gICAgYWJvdXQ6IFwiXCIsXHJcbiAgICBtZXNzYWdlOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnNlbmRpbmcgPSB0cnVlO1xyXG4gICAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xyXG4gICAgRW1haWxTdmMuc2VuZCh7XHJcbiAgICAgIGVtYWlsOiAkc2NvcGUuY29udGFjdC5lbWFpbCxcclxuICAgICAgbmFtZTogJHNjb3BlLmNvbnRhY3QubmFtZSxcclxuICAgICAgcGhvbmU6ICRzY29wZS5jb250YWN0LnBob25lLFxyXG4gICAgICBhYm91dDogJHNjb3BlLmNvbnRhY3QuYWJvdXQsXHJcbiAgICAgIG1lc3NhZ2U6ICRzY29wZS5jb250YWN0Lm1lc3NhZ2UsXHJcbiAgICB9KS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuc2VudCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTLiBzdGF0dXM9JWQsIHRleHQ9JXNcIiwgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS50ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAkc2NvcGUuc2VuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRkFJTEVELiBlcnJvcj1cIiwgZXJyKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdFeHBlcmllbmNlQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLmdldFNraWxsID0gZnVuY3Rpb24oc2tpbGxDb2RlKSB7XHJcbiAgICBpZiAoISRzY29wZS5za2lsbHMpIHJldHVybjtcclxuICAgIHJldHVybiAkc2NvcGUuc2tpbGxzLmZpbmQoZnVuY3Rpb24oc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIHNraWxsLmNvZGUgPT09IHNraWxsQ29kZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdIb2JiaWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR3aW5kb3cpIHtcclxuXHJcbiAgJHNjb3BlLmhvYmJ5U2VsZWN0b3JWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICQuZ2V0SlNPTignaHR0cHM6Ly93d3cucmVkZGl0LmNvbS91c2VyL2JlbGdvY2FuYWRpYW4vYWJvdXQvLmpzb24nLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gJHNjb3BlLmhvYmJpZXNbMF07XHJcblxyXG4gICRzY29wZS5zZWxlY3RIb2JieSA9IGZ1bmN0aW9uIChob2JieSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkSG9iYnkgPSBob2JieTtcclxuICAgICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zaG93SG9iYnkgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnJheSkge1xyXG4gICAgaWYgKCF2YWx1ZS5pbWFnZXMpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB2YWx1ZS5pbWFnZXMubGVuZ3RoID4gMDtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMZW1taW5nc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBHYW1lU3ZjKSB7XHJcblxyXG4gIHZhciBMRUZUID0gMDtcclxuICB2YXIgUklHSFQgPSAxO1xyXG5cclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlbW1pbmdzLXBhZ2UnKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgdmFyIGxlbW1pbmdzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBsZW1taW5nc0ltYWdlLnNyYyA9ICdsZW1taW5ncy9sZW1taW5ncy5wbmcnO1xyXG4gIHZhciBkZWNvckltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgZGVjb3JJbWFnZS5zcmMgPSAnbGVtbWluZ3MvZGVjb3IucG5nJztcclxuICB2YXIgbGVtbWluZ3MgPSB7fTtcclxuICB2YXIgc3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICB2YXIgYWN0aW9ucyA9IHtcclxuICAgIHdhbGs6IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbMzIwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgaHVoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMzIwLCAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IHRydWVcclxuICAgIH0sXHJcbiAgICBmYWxsOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgODBdLFxyXG4gICAgICBlbmQ6IFsxNjAsIDEwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZmx5OiB7XHJcbiAgICAgIHN0YXJ0OiBbMTYwLCA4MF0sXHJcbiAgICAgIGVuZDogWzQ4MCwgMTEwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzdG9wOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMTIwXSxcclxuICAgICAgZW5kOiBbNjQwLCAxNDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBjbGltYjoge1xyXG4gICAgICBzdGFydDogWzAsIDE2MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTg1XSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgc3RhcnQ6IFswLCAyMDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDIyNV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHB1bmNoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjQwXSxcclxuICAgICAgZW5kOiBbNjQwLCAzMDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMixcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBkaWc6IHtcclxuICAgICAgc3RhcnQ6IFswLCAzMjBdLFxyXG4gICAgICBlbmQ6IFszMjAsIDM0NV0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIExlbW1pbmcoaW5pdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLndpZHRoIC0gMjAwKSkgKyAxMDAsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjYW52YXMuaGVpZ2h0IC0gMjAwKSkgKyAxMDBdO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogMiA+IDEgPyBMRUZUIDogUklHSFQ7XHJcbiAgICB0aGlzLmFjdCA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbnNbYWN0aW9uXTtcclxuICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgdGhpcy5oZWlnaHQgPSAodGhpcy5hY3Rpb24uZW5kWzFdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAoMjAgKiAodGhpcy5hY3Rpb24ucm93cyAtIDEpKSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5hY3QoaW5pdCk7XHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBMRUZUKSB7XHJcbiAgICAgICAgY3R4LnNjYWxlKC0xLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHZhciByb3cgPSBNYXRoLmZsb29yKHRoaXMuY3ljbGUgLyB0aGlzLmFjdGlvbi5jb2x1bW5zKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZShsZW1taW5nc0ltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKCh0aGlzLmhlaWdodCArIDIwKSAqIHJvdykgKyB0aGlzLmFjdGlvbi5zdGFydFsxXSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICBpZiAodGhpcy5hY3Rpb24ucmV2ZXJzZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPj0gdGhpcy5hY3Rpb24uY29sdW1ucyAqIHRoaXMuYWN0aW9uLnJvd3MpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSAhdGhpcy5hbmltYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS0tO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBIYXRjaCgpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbMjAsIDIwXTtcclxuICAgIHRoaXMuYWN0aW9uID0ge1xyXG4gICAgICBzdGFydDogWzAsIDBdLFxyXG4gICAgICBlbmQ6IFs4MiwgNTAwXSxcclxuICAgICAgY29sdW1uczogMSxcclxuICAgICAgcm93czogMTBcclxuICAgIH1cclxuICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdKSAvIHRoaXMuYWN0aW9uLnJvd3M7XHJcbiAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgIHRoaXMub3BlbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25bMF0sIHRoaXMucG9zaXRpb25bMV0pO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICB2YXIgY29sdW1uLCByb3c7XHJcbiAgICAgIGlmIChzdGFydGVkKSB7XHJcbiAgICAgICAgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgICAgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCA5KSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbHVtbiA9IDA7XHJcbiAgICAgICAgcm93ID0gMDtcclxuICAgICAgfVxyXG4gICAgICBjdHguZHJhd0ltYWdlKGRlY29ySW1hZ2UsICh0aGlzLndpZHRoICogY29sdW1uKSArIHRoaXMuYWN0aW9uLnN0YXJ0WzBdLCAodGhpcy5oZWlnaHQgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAxLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkxlbW1pbmcoKSB7XHJcbiAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICBsZW1taW5nc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApXSA9IG5ldyBMZW1taW5nKGFjdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHQvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG5cdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHQvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblx0XHQvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG5cdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0fVxyXG5cdC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuXHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcblx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogMTA1KTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxuICBzcGF3bkxlbW1pbmcoKTtcclxuICBsZXQgaGF0Y2ggPSBuZXcgSGF0Y2goKVxyXG4gIGRyYXcoKTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGlmICghc3RhcnRlZCkge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5mb250PSc0MHB4IE1vbm90b24nO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gJzEwJztcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xyXG4gICAgICBjdHgucmVjdCgxNSwgY2FudmFzLmhlaWdodCAtIDQ1LCBjdHgubWVhc3VyZVRleHQoJ1N0YXJ0Jykud2lkdGggKyAyMCwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLmhlaWdodCArIGNhbnZhcy5oZWlnaHQgLSA0NSk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnU3RhcnQnLCAyMCwgY2FudmFzLmhlaWdodCAtIDUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAodmFyIGkgaW4gbGVtbWluZ3MpIHtcclxuICAgICAgICBsZW1taW5nc1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGhhdGNoLm9wZW4oKTtcclxuICAgIHN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgZHJhdygpO1xyXG4gICAgfSwgMTUwKTtcclxuICB9XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xpc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgQ2F0ZWdvcmllc1N2Yykge1xyXG5cclxuICAkc2NvcGUuc2hvd0NhdGVnb3J5ID0gdHJ1ZTtcclxuXHJcbiAgJHNjb3BlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLmdldENhdGVnb3JpZXMoKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgJHNjb3BlLnRhc2tzID0gW107XHJcbiAgICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICBmb3IgKHZhciBqIGluICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzKSB7XHJcbiAgICAgICAgICAkc2NvcGUudGFza3MucHVzaCh7XHJcbiAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSxcclxuICAgICAgICAgICAgXCJ0YXNrXCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzW2pdLm5hbWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdENhdGVnb3J5ID0gZnVuY3Rpb24oY2F0ZWdvcnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRUYXNrcyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLnB1c2goJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY2F0ZWdvcmllc1tpXS5uYW1lID09PSBjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeSgkc2NvcGUuY2F0ZWdvcmllc1tpXSk7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuYWRkQ2F0ZWdvcnkoe1xyXG4gICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5pbml0KCk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZENhdGVnb3J5ID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLm5ld1Rhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXS5uYW1lID09PSB0YXNrKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSwge1xyXG4gICAgICAgIHRhc2s6IHRhc2tcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MucHVzaCh7IG5hbWU6IHRhc2sgfSk7XHJcbiAgICAgICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzWyRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5lbnRlcmVkVGFzayA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS51bnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmFkZFRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3QucHVzaCh0YXNrKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUucmVtb3ZlVGFzayA9IGZ1bmN0aW9uKHRhc2tMaXN0LCB0YXNrKSB7XHJcbiAgICB0YXNrTGlzdC5zcGxpY2UodGFza0xpc3QuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnN0YXJ0UHJpb3JpdGl6aW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLnNldFByaW9yaXR5TGlzdCgkc2NvcGUuc2VsZWN0ZWRUYXNrcyk7XHJcbiAgICAkbG9jYXRpb24ucGF0aCgnL3ByaW9yaXRpemUnKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0UXVlc3Rpb25zID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoISRzY29wZS5zZWxlY3RlZFRhc2tzKSByZXR1cm4gJyc7XHJcbiAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gJHNjb3BlLnNlbGVjdGVkVGFza3MubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICBjb3VudGVyICs9IGk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY291bnRlcjtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFVzZXJTdmMpIHtcclxuICAvLyBJbml0aWFsaXplIHRoZSBGaXJlYmFzZVVJIFdpZGdldCB1c2luZyBGaXJlYmFzZS5cclxuICB2YXIgdWkgPSBuZXcgZmlyZWJhc2V1aS5hdXRoLkF1dGhVSShmaXJlYmFzZS5hdXRoKCkpO1xyXG5cclxuICAkc2NvcGUuJG9uKCdsb2dvdXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHVpLnJlc2V0KCk7XHJcbiAgICBzdGFydFVJKCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0VUkoKSB7XHJcbiAgICB1aS5zdGFydCgnI2ZpcmViYXNldWktYXV0aC1jb250YWluZXInLCB7XHJcbiAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgIHNpZ25JblN1Y2Nlc3M6IGZ1bmN0aW9uIChjdXJyZW50VXNlciwgY3JlZGVudGlhbCwgcmVkaXJlY3RVcmwpIHtcclxuICAgICAgICAgIC8vIE5vIHJlZGlyZWN0LlxyXG4gICAgICAgICAgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmF1dGgoKVxyXG4gICAgICAgICAgICAuY3VycmVudFVzZXIuZ2V0SWRUb2tlbih0cnVlKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoaWRUb2tlbikge1xyXG4gICAgICAgICAgICAgIFVzZXJTdmMuYXV0aGVudGljYXRlKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBjdXJyZW50VXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBjdXJyZW50VXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHBob3RvVVJMOiBjdXJyZW50VXNlci5waG90b1VSTCxcclxuICAgICAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IGN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQsXHJcbiAgICAgICAgICAgICAgICBpZFRva2VuOiBpZFRva2VuLFxyXG4gICAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KCdsb2dpbicsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAkKCcjbW9kYWwtbG9naW4nKS5tb2RhbCgnaGlkZScpO1xyXG4gICAgICAgICAgICAgICAgICAvLyRsb2NhdGlvbi5wYXRoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoJ3BvcHVwJywge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdMb2dpbiBGYWlsZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhbGVydC1kYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIHNpZ25JbkZhaWx1cmUgY2FsbGJhY2sgbXVzdCBiZSBwcm92aWRlZCB0byBoYW5kbGUgbWVyZ2UgY29uZmxpY3RzIHdoaWNoXHJcbiAgICAgICAgLy8gb2NjdXIgd2hlbiBhbiBleGlzdGluZyBjcmVkZW50aWFsIGlzIGxpbmtlZCB0byBhbiBhbm9ueW1vdXMgdXNlci5cclxuICAgICAgICBzaWduSW5GYWlsdXJlOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgIC8vIEZvciBtZXJnZSBjb25mbGljdHMsIHRoZSBlcnJvci5jb2RlIHdpbGwgYmVcclxuICAgICAgICAgIC8vICdmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0Jy5cclxuICAgICAgICAgIGlmIChlcnJvci5jb2RlICE9ICdmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBUaGUgY3JlZGVudGlhbCB0aGUgdXNlciB0cmllZCB0byBzaWduIGluIHdpdGguXHJcbiAgICAgICAgICB2YXIgY3JlZCA9IGVycm9yLmNyZWRlbnRpYWw7XHJcbiAgICAgICAgICAvLyBDb3B5IGRhdGEgZnJvbSBhbm9ueW1vdXMgdXNlciB0byBwZXJtYW5lbnQgdXNlciBhbmQgZGVsZXRlIGFub255bW91c1xyXG4gICAgICAgICAgLy8gdXNlci5cclxuICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgLy8gRmluaXNoIHNpZ24taW4gYWZ0ZXIgZGF0YSBpcyBjb3BpZWQuXHJcbiAgICAgICAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhDcmVkZW50aWFsKGNyZWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdWlTaG93bjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy8gVGhlIHdpZGdldCBpcyByZW5kZXJlZC5cclxuICAgICAgICAgIC8vIEhpZGUgdGhlIGxvYWRlci5cclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpZ25JblN1Y2Nlc3NVcmw6ICcvaG9tZScsXHJcbiAgICAgIHNpZ25Jbk9wdGlvbnM6IFtcclxuICAgICAgICAvL2ZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgXSxcclxuXHJcbiAgICAgIC8vIFdpbGwgdXNlIHBvcHVwIGZvciBJRFAgUHJvdmlkZXJzIHNpZ24taW4gZmxvdyBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0LCByZWRpcmVjdC5cclxuICAgICAgc2lnbkluRmxvdzogJ3BvcHVwJyxcclxuICAgICAgLy8gT3RoZXIgY29uZmlnIG9wdGlvbnMuLi5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRVSSgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkZmlsdGVyLCBQb3N0c1N2Yykge1xyXG5cclxuICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkc2NvcGUucG9zdEJvZHkpIHtcclxuICAgICAgUG9zdHNTdmMuY3JlYXRlKHtcclxuICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBvc3RzU3ZjLmZldGNoKClcclxuICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5wb3N0cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oJ3dzOm5ld19wb3N0JywgZnVuY3Rpb24gKF8sIHBvc3QpIHtcclxuICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICBQb3N0c1N2Yy5nZXRQb3N0KHBvc3QpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5wb3N0cy51bnNoaWZ0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUHJpb3JpdGl6ZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIENhdGVnb3JpZXNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLnByaW9yaXR5TGlzdCA9IENhdGVnb3JpZXNTdmMuZ2V0UHJpb3JpdHlMaXN0KCk7XHJcblxyXG4gIGlmICghJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy9saXN0cycpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbiA9IDE7XHJcbiAgICAkc2NvcGUuY3VycmVudFF1ZXN0aW9uID0gMTtcclxuICAgICRzY29wZS5kb25lID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUubWFrZUNob2ljZSA9IGZ1bmN0aW9uKGNob2ljZSkge1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmlkID09PSAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbikge1xyXG4gICAgICAgICRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlID0gY2hvaWNlID09PSAxID8gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5maXJzdENob2ljZSA6ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uc2Vjb25kQ2hvaWNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24gPT09ICRzY29wZS5jdXJyZW50UXVlc3Rpb24pIHtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRRdWVzdGlvbiA9ICRzY29wZS5jdXJyZW50UXVlc3Rpb24gPT09ICRzY29wZS5wcmlvcml0eUxpc3QubGVuZ3RoID8gMSA6ICRzY29wZS5jdXJyZW50UXVlc3Rpb24gKyAxO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24gPSAkc2NvcGUuY3VycmVudFF1ZXN0aW9uO1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKGkgaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgPT09ICcnKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgICQoJyNwcmlvcml0aXplQ2hvaWNlcycpLmhpZGUoMzAwKTtcclxuICAgICAgJHNjb3BlLmRvbmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRCdXR0b25WYWx1ZSA9IGZ1bmN0aW9uKGNob2ljZSkge1xyXG4gICAgaWYgKCEkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLnByaW9yaXR5TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5pZCA9PT0gJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gY2hvaWNlID09PSAxID8gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5maXJzdENob2ljZSA6ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uc2Vjb25kQ2hvaWNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdFF1ZXN0aW9uID0gZnVuY3Rpb24ocXVlc3Rpb24pIHtcclxuICAgICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uID0gcXVlc3Rpb247XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldEZpbHRlcmVkUHJpb3JpdHlMaXN0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICRzY29wZS5wcmlvcml0eUxpc3RcclxuICAgICAgLnNvcnQoZnVuY3Rpb24oYSwgYil7IHJldHVybiBhLmlkLWIuaWQ7IH0pXHJcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24ocXVlc3Rpb24pIHsgcmV0dXJuIHF1ZXN0aW9uLmNob2ljZSAhPT0gJycgfHwgcXVlc3Rpb24uaWQgPT09ICRzY29wZS5jdXJyZW50UXVlc3Rpb247IH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRDaG9pY2VzTWFkZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCEkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIHZhciBjaG9pY2VzTWFkZSA9IDA7XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlICE9PSAnJykge1xyXG4gICAgICAgIGNob2ljZXNNYWRlKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBjaG9pY2VzTWFkZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0QnV0dG9uQ2xhc3MgPSBmdW5jdGlvbihjaG9pY2UpIHtcclxuICAgIGlmICghJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uaWQgPT09ICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlID09PSAnJykge1xyXG4gICAgICAgICAgcmV0dXJuICdidG4tcHJpbWFyeSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaG9pY2UgPT09IDEpIHtcclxuICAgICAgICAgIHJldHVybiAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmZpcnN0Q2hvaWNlID09PSAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA/ICdidG4tc3VjY2VzcycgOiAnYnRuLWRhbmdlcic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLnNlY29uZENob2ljZSA9PT0gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgPyAnYnRuLXN1Y2Nlc3MnIDogJ2J0bi1kYW5nZXInO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zaG93Q2hvaWNlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnI3ByaW9yaXRpemVDaG9pY2VzJykuc2hvdygxMDAwKTtcclxuICAgICQoJyNyZXZpZXdDaG9pY2VzJykuaGlkZSgpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGFydENsaWNrID0gZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gICAgaWYgKCAkc2NvcGUuY2hhcnQgKSB7XHJcbiAgICAgIC8vIERpZmZlcmVudCBtZXRob2RzIGRlcGVuZGluZyBvbiBjaGFydCB0eXBlXHJcbiAgICAgIC8vY29uc29sZS5sb2coICRzY29wZS5jaGFydC5nZXRQb2ludHNBdEV2ZW50KCBldmVudCApICk7IC8vIGZvciBQb2ludHNcclxuICAgICAgY29uc29sZS5sb2coICRzY29wZS5jaGFydC5nZXRTZWdtZW50c0F0RXZlbnQoIGV2ZW50ICkgKTsgLy8gZm9yIFNlZ21lbnRzXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNob3dSZXN1bHRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgJHNjb3BlLmRhdGEgPSBbXTtcclxuICAgICRzY29wZS5vcHRpb25zID0ge1xyXG4gICAgICAvLyBTZXRzIHRoZSBjaGFydCB0byBiZSByZXNwb25zaXZlXHJcbiAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcblxyXG4gICAgICAvL0Jvb2xlYW4gLSBXaGV0aGVyIHdlIHNob3VsZCBzaG93IGEgc3Ryb2tlIG9uIGVhY2ggc2VnbWVudFxyXG4gICAgICBzZWdtZW50U2hvd1N0cm9rZSA6IHRydWUsXHJcblxyXG4gICAgICAvL1N0cmluZyAtIFRoZSBjb2xvdXIgb2YgZWFjaCBzZWdtZW50IHN0cm9rZVxyXG4gICAgICBzZWdtZW50U3Ryb2tlQ29sb3IgOiAnI2ZmZicsXHJcblxyXG4gICAgICAvL051bWJlciAtIFRoZSB3aWR0aCBvZiBlYWNoIHNlZ21lbnQgc3Ryb2tlXHJcbiAgICAgIHNlZ21lbnRTdHJva2VXaWR0aCA6IDIsXHJcblxyXG4gICAgICAvL051bWJlciAtIFRoZSBwZXJjZW50YWdlIG9mIHRoZSBjaGFydCB0aGF0IHdlIGN1dCBvdXQgb2YgdGhlIG1pZGRsZVxyXG4gICAgICBwZXJjZW50YWdlSW5uZXJDdXRvdXQgOiAwLCAvLyBUaGlzIGlzIDAgZm9yIFBpZSBjaGFydHNcclxuXHJcbiAgICAgIC8vTnVtYmVyIC0gQW1vdW50IG9mIGFuaW1hdGlvbiBzdGVwc1xyXG4gICAgICBhbmltYXRpb25TdGVwcyA6IDEwMCxcclxuXHJcbiAgICAgIC8vU3RyaW5nIC0gQW5pbWF0aW9uIGVhc2luZyBlZmZlY3RcclxuICAgICAgYW5pbWF0aW9uRWFzaW5nIDogJ2Vhc2VPdXRCb3VuY2UnLFxyXG5cclxuICAgICAgLy9Cb29sZWFuIC0gV2hldGhlciB3ZSBhbmltYXRlIHRoZSByb3RhdGlvbiBvZiB0aGUgRG91Z2hudXRcclxuICAgICAgYW5pbWF0ZVJvdGF0ZSA6IHRydWUsXHJcblxyXG4gICAgICAvL0Jvb2xlYW4gLSBXaGV0aGVyIHdlIGFuaW1hdGUgc2NhbGluZyB0aGUgRG91Z2hudXQgZnJvbSB0aGUgY2VudHJlXHJcbiAgICAgIGFuaW1hdGVTY2FsZSA6IGZhbHNlLFxyXG5cclxuICAgICAgLy9TdHJpbmcgLSBBIGxlZ2VuZCB0ZW1wbGF0ZVxyXG4gICAgICBsZWdlbmRUZW1wbGF0ZSA6ICc8aDMgY2xhc3M9XCJ0Yy1jaGFydC1qcy1sZWdlbmRcIiBzdHlsZT1cInBhZGRpbmc6NXB4XCI+PCUgZm9yICh2YXIgaT0wOyBpPHNlZ21lbnRzLmxlbmd0aDsgaSsrKXslPjxkaXYgY2xhc3M9XCJsYWJlbFwiIHN0eWxlPVwiZmxvYXQ6bGVmdDttYXJnaW46NXB4O2JhY2tncm91bmQtY29sb3I6PCU9c2VnbWVudHNbaV0uZmlsbENvbG9yJT5cIj48JWlmKHNlZ21lbnRzW2ldLmxhYmVsKXslPjwlPXNlZ21lbnRzW2ldLmxhYmVsJT48JX0lPjwvZGl2PjwlfSU+PC9oMz4nXHJcbiAgICB9O1xyXG4gICAgZm9yICh2YXIgaSBpbiBDYXRlZ29yaWVzU3ZjLmNob2ljZXMpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLnZvdGVzID0gMDtcclxuICAgICAgZm9yICh2YXIgaiBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgICAgaWYgKENhdGVnb3JpZXNTdmMuY2hvaWNlc1tpXS5uYW1lID09PSAkc2NvcGUucHJpb3JpdHlMaXN0W2pdLmNob2ljZSkge1xyXG4gICAgICAgICAgQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLnZvdGVzKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBDYXRlZ29yaWVzU3ZjLmNob2ljZXMuc29ydChmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhLnZvdGVzIDwgYi52b3RlczsgfSk7XHJcbiAgICBmb3IgKGkgaW4gQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzKSB7XHJcbiAgICAgICRzY29wZS5kYXRhLnB1c2goe1xyXG4gICAgICAgIHZhbHVlOiBDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0udm90ZXMsXHJcbiAgICAgICAgbGFiZWw6IENhdGVnb3JpZXNTdmMuY2hvaWNlc1tpXS5uYW1lXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJCgnI3ByaW9yaXRpemVSZXN1bHQnKS5oaWRlKCk7XHJcbiAgICAkKCcjcHJpb3JpdGl6ZUNob2ljZXMnKS5oaWRlKCk7XHJcbiAgICAkKCcjcHJpb3JpdHlSZXN1bHRzJykuc2hvdygxMDAwKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUHJvZmlsZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFVzZXJTdmMpIHtcclxuXHJcbiAgaWYgKCEkc2NvcGUuY3VycmVudFVzZXIpIHtcclxuICAgICRsb2NhdGlvbi5wYXRoKCcvJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgICQoJyNzZXgtaW5kaWNhdG9yJykub2Zmc2V0KHsgbGVmdDogKCRzY29wZS5jdXJyZW50VXNlci5nZW5kZXIuc2V4IC8gMjAwICogJCgnI3NleCcpLndpZHRoKCkpICsgJCgnI3NleCcpLm9mZnNldCgpLmxlZnQgfSk7XHJcbiAgICAkKCcjaWRlbnRpdHktaW5kaWNhdG9yJykub2Zmc2V0KHsgbGVmdDogKCRzY29wZS5jdXJyZW50VXNlci5nZW5kZXIuaWRlbnRpdHkgLyAyMDAgKiAkKCcjaWRlbnRpdHknKS53aWR0aCgpKSArICQoJyNpZGVudGl0eScpLm9mZnNldCgpLmxlZnQgfSk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuc2V4ZXMgPSBbXHJcbiAgICAnTWFsZScsXHJcbiAgICAnRnRNIE1hbGUnLFxyXG4gICAgJ0ludGVyc2V4JyxcclxuICAgICdNdEYgRmVtYWxlJyxcclxuICAgICdGZW1hbGUnXHJcbiAgXTtcclxuICAkc2NvcGUuaWRlbnRpdGllcyA9IFtcclxuICAgICdNYW4nLFxyXG4gICAgJ0JpZ2VuZGVyJyxcclxuICAgICdQYW5nZW5kZXInLFxyXG4gICAgJ0FnZW5kZXInLFxyXG4gICAgJ1BvbHlnZW5kZXInLFxyXG4gICAgJ0dlbmRlcmZsdWlkJyxcclxuICAgICdHZW5kZXJxdWVlcicsXHJcbiAgICAnUXVlZXInLFxyXG4gICAgJ1dvbWFuJ1xyXG4gIF07XHJcblxyXG4gICRzY29wZS5kYXRlT3B0aW9ucyA9IHtcclxuICAgIG1heERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZSgxOTAwLCAxLCAxKSxcclxuICAgIGluaXREYXRlOiBuZXcgRGF0ZSgyMDAwLCAxLCAxKSxcclxuICAgIGRhdGVwaWNrZXJNb2RlOiAneWVhcidcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2VuZGVyID0gZnVuY3Rpb24oYXJyYXksIHBlcmNlbnRhZ2UpIHtcclxuICAgIHJldHVybiBhcnJheVtNYXRoLnJvdW5kKHBlcmNlbnRhZ2UgLyAyMDAgKiAoYXJyYXkubGVuZ3RoIC0gMSkpXTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc3RhcnRTbGlkZXIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgfTtcclxuICAkc2NvcGUuZHJhZ1NsaWRlciA9IGZ1bmN0aW9uKGV2ZW50LCB1aSwgdHlwZSkge1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyLmdlbmRlclt0eXBlXSA9IE1hdGgucm91bmQoKCQoJyMnICsgdHlwZSArICctaW5kaWNhdG9yJykub2Zmc2V0KCkubGVmdCAtICQoJyMnICsgdHlwZSkub2Zmc2V0KCkubGVmdCkgLyAoJCgnIycgKyB0eXBlKS53aWR0aCgpIC0gJCgnIycgKyB0eXBlICsgJy1pbmRpY2F0b3InKS53aWR0aCgpKSAqIDIwMCk7XHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgfTtcclxuICAkc2NvcGUuc3RvcFNsaWRlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICB9O1xyXG5cclxuICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSB0cnVlO1xyXG4gICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9IHRydWU7XHJcblxyXG4gICRzY29wZS50b2dnbGVVc2VybmFtZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgJHNjb3BlLnVzZXJuYW1lVG9nZ2xlID0gISRzY29wZS51c2VybmFtZVRvZ2dsZTtcclxuICAgICRzY29wZS5uZXdVc2VybmFtZSA9ICRzY29wZS5jdXJyZW50VXNlci51c2VybmFtZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQgPSBmdW5jdGlvbigpIHtcclxuICAgICRzY29wZS5uZXdQYXNzd29yZCA9IG51bGw7XHJcbiAgICAkc2NvcGUuY29uZmlybVBhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9ICEkc2NvcGUucGFzc3dvcmRUb2dnbGU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAocGFzc3dvcmQpIHtcclxuICAgIGlmIChwYXNzd29yZCkge1xyXG4gICAgICB2YXIgdXNlciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgIFVzZXJTdmMuY2hlY2tQYXNzd29yZCh1c2VyLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb3JpZ2luYWxCZyA9ICQoXCIucGFzc3dvcmRcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIpO1xyXG4gICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uIChvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgaWYgKG5ld1Bhc3N3b3JkKSB7XHJcbiAgICAgIGlmIChuZXdQYXNzd29yZCA9PSBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICB2YXIgdXNlciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgICAgVXNlclN2Yy5jaGFuZ2VQYXNzd29yZCh1c2VyLCBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAkc2NvcGUuJGVtaXQoJ3BvcHVwJywge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGFzc3dvcmQgQ2hhbmdlZCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdhbGVydC1zdWNjZXNzJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICAkc2NvcGUub2xkUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgICAgICAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJHNjb3BlLiRlbWl0KCdwb3B1cCcsIHtcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkIENoYW5nZSBGYWlsZWQnLFxyXG4gICAgICAgICAgICB0eXBlOiAnYWxlcnQtZGFuZ2VyJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAkKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjZDMVwiIH0sIDIwMCkuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogb3JpZ2luYWxCZyB9LCAyMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXJuYW1lKSB7XHJcbiAgICAkc2NvcGUuJGVtaXQoJ2xvYWRpbmcnKTtcclxuICAgIFVzZXJTdmMuY2hhbmdlVXNlcm5hbWUoJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCwgdXNlcm5hbWUpXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgJHNjb3BlLiRlbWl0KCd1cGRhdGUnLCByZXNwb25zZS5kYXRhKTtcclxuICAgIH0sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICRzY29wZS4kZW1pdCgncG9wdXAnLCB7XHJcbiAgICAgICAgbWVzc2FnZTogdXNlcm5hbWUgKyAnIGFscmVhZHkgaW4gdXNlJyxcclxuICAgICAgICB0eXBlOiAnYWxlcnQtZGFuZ2VyJ1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS51cGRhdGVVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCRzY29wZS5jdXJyZW50VXNlcikgeyAgXHJcbiAgICAgICRzY29wZS4kZW1pdCgnbG9hZGluZycpO1xyXG4gICAgICBVc2VyU3ZjLnVwZGF0ZVVzZXIoJHNjb3BlLmN1cnJlbnRVc2VyKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoJ3VwZGF0ZScsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgJHNjb3BlLiR3YXRjaCgnY3VycmVudFVzZXIuZmxhZ3MubGVuZ3RoJywgZnVuY3Rpb24obGVuZ3RoKSB7XHJcbiAgICAkc2NvcGUudXBkYXRlVXNlcigpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUubG9hZENvdW50cmllcyA9IGZ1bmN0aW9uKCRxdWVyeSkge1xyXG4gICAgdmFyIGNvdW50cmllcyA9IFtcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbmRvcnJhXCIsIFwiZmxhZ1wiOiBcImZsYWctYWRcIiwgXCJ0aWRiaXRcIjogXCJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlVuaXRlZCBBcmFiIEVtaXJhdGVzXCIsIFwiZmxhZ1wiOiBcImZsYWctYWVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFmZ2hhbmlzdGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctYWZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQW5ndWlsbGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1haVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQWxiYW5pYVwiLCBcImZsYWdcIjogXCJmbGFnLWFsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBcm1lbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctYW1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFuZ29sYVwiLCBcImZsYWdcIjogXCJmbGFnLWFvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbnRhcmN0aWNhXCIsIFwiZmxhZ1wiOiBcImZsYWctYXFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFyZ2VudGluYVwiLCBcImZsYWdcIjogXCJmbGFnLWFyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbWVyaWNhbiBTb21vYVwiLCBcImZsYWdcIjogXCJmbGFnLWFzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBdXN0cmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctYXRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkF1c3RyYWxpYVwiLCBcImZsYWdcIjogXCJmbGFnLWF1XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBcnViYVwiLCBcImZsYWdcIjogXCJmbGFnLWF3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCLDhWxhbmQgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLWF4XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBemVyYmFpamFuXCIsIFwiZmxhZ1wiOiBcImZsYWctYXpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1iYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmFyYmFkb3NcIiwgXCJmbGFnXCI6IFwiZmxhZy1iYlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmFuZ2xhZGVzaFwiLCBcImZsYWdcIjogXCJmbGFnLWJkXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCZWxnaXVtXCIsIFwiZmxhZ1wiOiBcImZsYWctYmVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJ1cmtpbmEgRmFzb1wiLCBcImZsYWdcIjogXCJmbGFnLWJmXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCdWxnYXJpYVwiLCBcImZsYWdcIjogXCJmbGFnLWJnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCYWhyYWluXCIsIFwiZmxhZ1wiOiBcImZsYWctYmhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJ1cnVuZGlcIiwgXCJmbGFnXCI6IFwiZmxhZy1iaVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmVuaW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1ialwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FpbnQgQmFydGjDqWxlbXlcIiwgXCJmbGFnXCI6IFwiZmxhZy1ibFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmVybXVkYVwiLCBcImZsYWdcIjogXCJmbGFnLWJtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCcnVuZWkgXCIsIFwiZmxhZ1wiOiBcImZsYWctYm5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJvbGl2aWEsIFBsdXJpbmF0aW9uYWwgU3RhdGUgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1ib1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1icVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQnJhemlsXCIsIFwiZmxhZ1wiOiBcImZsYWctYnJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJhaGFtYXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1ic1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmh1dGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctYnRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJvdXZldCBJc2xhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1idlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQm90c3dhbmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1id1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmVsYXJ1c1wiLCBcImZsYWdcIjogXCJmbGFnLWJ5XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCZWxpemVcIiwgXCJmbGFnXCI6IFwiZmxhZy1ielwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2FuYWRhXCIsIFwiZmxhZ1wiOiBcImZsYWctY2FcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctY2NcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNvbmdvLCB0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGVcIiwgXCJmbGFnXCI6IFwiZmxhZy1jZFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCIsIFwiZmxhZ1wiOiBcImZsYWctY2ZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNvbmdvXCIsIFwiZmxhZ1wiOiBcImZsYWctY2dcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlN3aXR6ZXJsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctY2hcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkPDtHRlIGQnSXZvaXJlXCIsIFwiZmxhZ1wiOiBcImZsYWctY2lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNvb2sgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLWNrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDaGlsZVwiLCBcImZsYWdcIjogXCJmbGFnLWNsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDYW1lcm9vblwiLCBcImZsYWdcIjogXCJmbGFnLWNtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDaGluYVwiLCBcImZsYWdcIjogXCJmbGFnLWNuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDb2xvbWJpYVwiLCBcImZsYWdcIjogXCJmbGFnLWNvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDb3N0YSBSaWNhXCIsIFwiZmxhZ1wiOiBcImZsYWctY3JcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkN1YmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1jdVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2FibyBWZXJkZVwiLCBcImZsYWdcIjogXCJmbGFnLWN2XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDdXJhw6dhb1wiLCBcImZsYWdcIjogXCJmbGFnLWN3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDaHJpc3RtYXMgSXNsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctY3hcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkN5cHJ1c1wiLCBcImZsYWdcIjogXCJmbGFnLWN5XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDemVjaCBSZXB1YmxpY1wiLCBcImZsYWdcIjogXCJmbGFnLWN6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHZXJtYW55XCIsIFwiZmxhZ1wiOiBcImZsYWctZGVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkRqaWJvdXRpXCIsIFwiZmxhZ1wiOiBcImZsYWctZGpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkRlbm1hcmtcIiwgXCJmbGFnXCI6IFwiZmxhZy1ka1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRG9taW5pY2FcIiwgXCJmbGFnXCI6IFwiZmxhZy1kbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRG9taW5pY2FuIFJlcHVibGljXCIsIFwiZmxhZ1wiOiBcImZsYWctZG9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFsZ2VyaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1kelwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRWN1YWRvclwiLCBcImZsYWdcIjogXCJmbGFnLWVjXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJFc3RvbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctZWVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkVneXB0XCIsIFwiZmxhZ1wiOiBcImZsYWctZWdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIldlc3Rlcm4gU2FoYXJhXCIsIFwiZmxhZ1wiOiBcImZsYWctZWhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkVyaXRyZWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1lclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3BhaW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1lc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRXRoaW9waWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1ldFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRmlubGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWZpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGaWppXCIsIFwiZmxhZ1wiOiBcImZsYWctZmpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKVwiLCBcImZsYWdcIjogXCJmbGFnLWZrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctZm1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkZhcm9lIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1mb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRnJhbmNlXCIsIFwiZmxhZ1wiOiBcImZsYWctZnJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdhYm9uXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2FcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlVuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1nYlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3JlbmFkYVwiLCBcImZsYWdcIjogXCJmbGFnLWdkXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHZW9yZ2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2VcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkZyZW5jaCBHdWlhbmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1nZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3Vlcm5zZXlcIiwgXCJmbGFnXCI6IFwiZmxhZy1nZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR2hhbmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1naFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR2licmFsdGFyXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdyZWVubGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWdsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHYW1iaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1nbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3VpbmVhXCIsIFwiZmxhZ1wiOiBcImZsYWctZ25cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkd1YWRlbG91cGVcIiwgXCJmbGFnXCI6IFwiZmxhZy1ncFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRXF1YXRvcmlhbCBHdWluZWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1ncVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3JlZWNlXCIsIFwiZmxhZ1wiOiBcImZsYWctZ3JcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctZ3NcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkd1YXRlbWFsYVwiLCBcImZsYWdcIjogXCJmbGFnLWd0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHdWFtXCIsIFwiZmxhZ1wiOiBcImZsYWctZ3VcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkd1aW5lYS1CaXNzYXVcIiwgXCJmbGFnXCI6IFwiZmxhZy1nd1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3V5YW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctZ3lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkhvbmcgS29uZ1wiLCBcImZsYWdcIjogXCJmbGFnLWhrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1obVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSG9uZHVyYXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1oblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ3JvYXRpYVwiLCBcImZsYWdcIjogXCJmbGFnLWhyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJIYWl0aVwiLCBcImZsYWdcIjogXCJmbGFnLWh0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJIdW5nYXJ5XCIsIFwiZmxhZ1wiOiBcImZsYWctaHVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkluZG9uZXNpYVwiLCBcImZsYWdcIjogXCJmbGFnLWlkXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJcmVsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctaWVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIklzcmFlbFwiLCBcImZsYWdcIjogXCJmbGFnLWlsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJc2xlIG9mIE1hblwiLCBcImZsYWdcIjogXCJmbGFnLWltXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJbmRpYVwiLCBcImZsYWdcIjogXCJmbGFnLWluXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnlcIiwgXCJmbGFnXCI6IFwiZmxhZy1pb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSXJhcVwiLCBcImZsYWdcIjogXCJmbGFnLWlxXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJcmFuLCBJc2xhbWljIFJlcHVibGljIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctaXJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkljZWxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1pc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSXRhbHlcIiwgXCJmbGFnXCI6IFwiZmxhZy1pdFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSmVyc2V5XCIsIFwiZmxhZ1wiOiBcImZsYWctamVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkphbWFpY2FcIiwgXCJmbGFnXCI6IFwiZmxhZy1qbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSm9yZGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctam9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkphcGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctanBcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIktlbnlhXCIsIFwiZmxhZ1wiOiBcImZsYWcta2VcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkt5cmd5enN0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1rZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2FtYm9kaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1raFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiS2lyaWJhdGlcIiwgXCJmbGFnXCI6IFwiZmxhZy1raVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29tb3Jvc1wiLCBcImZsYWdcIjogXCJmbGFnLWttXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1rblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1rcFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiS29yZWEsIFJlcHVibGljIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWcta3JcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkt1d2FpdFwiLCBcImZsYWdcIjogXCJmbGFnLWt3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDYXltYW4gSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLWt5XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJLYXpha2hzdGFuXCIsIFwiZmxhZ1wiOiBcImZsYWcta3pcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljXCIsIFwiZmxhZ1wiOiBcImZsYWctbGFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxlYmFub25cIiwgXCJmbGFnXCI6IFwiZmxhZy1sYlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FpbnQgTHVjaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1sY1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGllY2h0ZW5zdGVpblwiLCBcImZsYWdcIjogXCJmbGFnLWxpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTcmkgTGFua2FcIiwgXCJmbGFnXCI6IFwiZmxhZy1sa1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGliZXJpYVwiLCBcImZsYWdcIjogXCJmbGFnLWxyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMZXNvdGhvXCIsIFwiZmxhZ1wiOiBcImZsYWctbHNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxpdGh1YW5pYVwiLCBcImZsYWdcIjogXCJmbGFnLWx0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMdXhlbWJvdXJnXCIsIFwiZmxhZ1wiOiBcImZsYWctbHVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxhdHZpYVwiLCBcImZsYWdcIjogXCJmbGFnLWx2XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMaWJ5YVwiLCBcImZsYWdcIjogXCJmbGFnLWx5XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNb3JvY2NvXCIsIFwiZmxhZ1wiOiBcImZsYWctbWFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vbmFjb1wiLCBcImZsYWdcIjogXCJmbGFnLW1jXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNb2xkb3ZhLCBSZXB1YmxpYyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLW1kXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNb250ZW5lZ3JvXCIsIFwiZmxhZ1wiOiBcImZsYWctbWVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhaW50IE1hcnRpbiAoRnJlbmNoIHBhcnQpXCIsIFwiZmxhZ1wiOiBcImZsYWctbWZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hZGFnYXNjYXJcIiwgXCJmbGFnXCI6IFwiZmxhZy1tZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFyc2hhbGwgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLW1oXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWNlZG9uaWEsIHRoZSBmb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1ta1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFsaVwiLCBcImZsYWdcIjogXCJmbGFnLW1sXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNeWFubWFyXCIsIFwiZmxhZ1wiOiBcImZsYWctbW1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vbmdvbGlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbW5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hY2FvXCIsIFwiZmxhZ1wiOiBcImZsYWctbW9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLW1wXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYXJ0aW5pcXVlXCIsIFwiZmxhZ1wiOiBcImZsYWctbXFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hdXJpdGFuaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1tclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTW9udHNlcnJhdFwiLCBcImZsYWdcIjogXCJmbGFnLW1zXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWx0YVwiLCBcImZsYWdcIjogXCJmbGFnLW10XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYXVyaXRpdXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1tdVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFsZGl2ZXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1tdlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFsYXdpXCIsIFwiZmxhZ1wiOiBcImZsYWctbXdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1leGljb1wiLCBcImZsYWdcIjogXCJmbGFnLW14XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWxheXNpYVwiLCBcImZsYWdcIjogXCJmbGFnLW15XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNb3phbWJpcXVlXCIsIFwiZmxhZ1wiOiBcImZsYWctbXpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5hbWliaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1uYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmV3IENhbGVkb25pYVwiLCBcImZsYWdcIjogXCJmbGFnLW5jXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOaWdlclwiLCBcImZsYWdcIjogXCJmbGFnLW5lXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOb3Jmb2xrIElzbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLW5mXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOaWdlcmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbmdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5pY2FyYWd1YVwiLCBcImZsYWdcIjogXCJmbGFnLW5pXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOZXRoZXJsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLW5sXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOb3J3YXlcIiwgXCJmbGFnXCI6IFwiZmxhZy1ub1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmVwYWxcIiwgXCJmbGFnXCI6IFwiZmxhZy1ucFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmF1cnVcIiwgXCJmbGFnXCI6IFwiZmxhZy1uclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTml1ZVwiLCBcImZsYWdcIjogXCJmbGFnLW51XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOZXcgWmVhbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLW56XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJPbWFuXCIsIFwiZmxhZ1wiOiBcImZsYWctb21cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBhbmFtYVwiLCBcImZsYWdcIjogXCJmbGFnLXBhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQZXJ1XCIsIFwiZmxhZ1wiOiBcImZsYWctcGVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkZyZW5jaCBQb2x5bmVzaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1wZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGFwdWEgTmV3IEd1aW5lYVwiLCBcImZsYWdcIjogXCJmbGFnLXBnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQaGlsaXBwaW5lc1wiLCBcImZsYWdcIjogXCJmbGFnLXBoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQYWtpc3RhblwiLCBcImZsYWdcIjogXCJmbGFnLXBrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQb2xhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1wbFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwiLCBcImZsYWdcIjogXCJmbGFnLXBtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQaXRjYWlyblwiLCBcImZsYWdcIjogXCJmbGFnLXBuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQdWVydG8gUmljb1wiLCBcImZsYWdcIjogXCJmbGFnLXByXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQYWxlc3RpbmUsIFN0YXRlIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctcHNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBvcnR1Z2FsXCIsIFwiZmxhZ1wiOiBcImZsYWctcHRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBhbGF1XCIsIFwiZmxhZ1wiOiBcImZsYWctcHdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBhcmFndWF5XCIsIFwiZmxhZ1wiOiBcImZsYWctcHlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlFhdGFyXCIsIFwiZmxhZ1wiOiBcImZsYWctcWFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlLDqXVuaW9uXCIsIFwiZmxhZ1wiOiBcImZsYWctcmVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlJvbWFuaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1yb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2VyYmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctcnNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlJ1c3NpYW4gRmVkZXJhdGlvblwiLCBcImZsYWdcIjogXCJmbGFnLXJ1XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJSd2FuZGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1yd1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2F1ZGkgQXJhYmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctc2FcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNvbG9tb24gSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLXNiXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTZXljaGVsbGVzXCIsIFwiZmxhZ1wiOiBcImZsYWctc2NcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlN1ZGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctc2RcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlN3ZWRlblwiLCBcImZsYWdcIjogXCJmbGFnLXNlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTaW5nYXBvcmVcIiwgXCJmbGFnXCI6IFwiZmxhZy1zZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1zaFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2xvdmVuaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1zaVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3ZhbGJhcmQgYW5kIEphbiBNYXllblwiLCBcImZsYWdcIjogXCJmbGFnLXNqXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTbG92YWtpYVwiLCBcImZsYWdcIjogXCJmbGFnLXNrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTaWVycmEgTGVvbmVcIiwgXCJmbGFnXCI6IFwiZmxhZy1zbFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FuIE1hcmlub1wiLCBcImZsYWdcIjogXCJmbGFnLXNtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTZW5lZ2FsXCIsIFwiZmxhZ1wiOiBcImZsYWctc25cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNvbWFsaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1zb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3VyaW5hbWVcIiwgXCJmbGFnXCI6IFwiZmxhZy1zclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU291dGggU3VkYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1zc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FvIFRvbWUgYW5kIFByaW5jaXBlXCIsIFwiZmxhZ1wiOiBcImZsYWctc3RcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkVsIFNhbHZhZG9yXCIsIFwiZmxhZ1wiOiBcImZsYWctc3ZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIiwgXCJmbGFnXCI6IFwiZmxhZy1zeFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3lyaWFuIEFyYWIgUmVwdWJsaWNcIiwgXCJmbGFnXCI6IFwiZmxhZy1zeVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3dhemlsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctc3pcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLXRjXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDaGFkXCIsIFwiZmxhZ1wiOiBcImZsYWctdGRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllc1wiLCBcImZsYWdcIjogXCJmbGFnLXRmXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUb2dvXCIsIFwiZmxhZ1wiOiBcImZsYWctdGdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRoYWlsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctdGhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRhamlraXN0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy10alwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVG9rZWxhdVwiLCBcImZsYWdcIjogXCJmbGFnLXRrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUaW1vci1MZXN0ZVwiLCBcImZsYWdcIjogXCJmbGFnLXRsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUdXJrbWVuaXN0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy10bVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVHVuaXNpYVwiLCBcImZsYWdcIjogXCJmbGFnLXRuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUb25nYVwiLCBcImZsYWdcIjogXCJmbGFnLXRvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUdXJrZXlcIiwgXCJmbGFnXCI6IFwiZmxhZy10clwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wiLCBcImZsYWdcIjogXCJmbGFnLXR0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUdXZhbHVcIiwgXCJmbGFnXCI6IFwiZmxhZy10dlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYVwiLCBcImZsYWdcIjogXCJmbGFnLXR3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctdHpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlVrcmFpbmVcIiwgXCJmbGFnXCI6IFwiZmxhZy11YVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVWdhbmRhXCIsIFwiZmxhZ1wiOiBcImZsYWctdWdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLXVtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIiwgXCJmbGFnXCI6IFwiZmxhZy11c1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVXJ1Z3VheVwiLCBcImZsYWdcIjogXCJmbGFnLXV5XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVemJla2lzdGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctdXpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkhvbHkgU2VlXCIsIFwiZmxhZ1wiOiBcImZsYWctdmFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsIFwiZmxhZ1wiOiBcImZsYWctdmNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlZlbmV6dWVsYSwgQm9saXZhcmlhbiBSZXB1YmxpYyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLXZlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJWaXJnaW4gSXNsYW5kcywgQnJpdGlzaFwiLCBcImZsYWdcIjogXCJmbGFnLXZnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJWaXJnaW4gSXNsYW5kcywgVS5TLlwiLCBcImZsYWdcIjogXCJmbGFnLXZpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJWaWV0IE5hbVwiLCBcImZsYWdcIjogXCJmbGFnLXZuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJWYW51YXR1XCIsIFwiZmxhZ1wiOiBcImZsYWctdnVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIldhbGxpcyBhbmQgRnV0dW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctd2ZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhbW9hXCIsIFwiZmxhZ1wiOiBcImZsYWctd3NcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlllbWVuXCIsIFwiZmxhZ1wiOiBcImZsYWcteWVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1heW90dGVcIiwgXCJmbGFnXCI6IFwiZmxhZy15dFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU291dGggQWZyaWNhXCIsIFwiZmxhZ1wiOiBcImZsYWctemFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlphbWJpYVwiLCBcImZsYWdcIjogXCJmbGFnLXptXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJaaW1iYWJ3ZVwiLCBcImZsYWdcIjogXCJmbGFnLXp3XCIgfSxcclxuICAgIF07XHJcbiAgICByZXR1cm4gY291bnRyaWVzLmZpbHRlcihmdW5jdGlvbihjb3VudHJ5KSB7XHJcbiAgICAgIHJldHVybiBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCRxdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignU2tpbGxzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR3aW5kb3cpIHtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkU2tpbGwgPSAwO1xyXG4gICRzY29wZS5za2lsbHNWaXNpYmxlID0gZmFsc2U7XHJcbiAgJHNjb3BlLnByb2plY3RzID0gW107XHJcblxyXG4gICRzY29wZS5sYWJlbHMgPSBbXCJEb3dubG9hZCBTYWxlc1wiLCBcIkluLVN0b3JlIFNhbGVzXCIsIFwiTWFpbC1PcmRlciBTYWxlc1wiXTtcclxuICAkc2NvcGUuZGF0YSA9IFszMDAsIDUwMCwgMTAwXTtcclxuXHJcbiAgJC5nZXRKU09OKCcvZXhwZXJpZW5jZS5qc29uJywgZnVuY3Rpb24oIGRhdGEgKSB7XHJcbiAgICAkc2NvcGUucHJvamVjdHMgPSBkYXRhLnJlZHVjZSgocHJvamVjdHMsIGVtcGxveWVyKSA9PiB7XHJcbiAgICAgIGlmIChlbXBsb3llci5wcm9qZWN0cykgcmV0dXJuIGVtcGxveWVyLnByb2plY3RzLmNvbmNhdChwcm9qZWN0cyk7XHJcbiAgICAgIGVsc2UgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgfSwge30pO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZmlsdGVyZWRQcm9qZWN0cyA9ICgpID0+ICRzY29wZS5wcm9qZWN0c1xyXG4gICAgLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5za2lsbHMgJiYgcHJvamVjdC5za2lsbHMuaW5jbHVkZXMoJHNjb3BlLnNlbGVjdGVkU2tpbGwuY29kZSkpXHJcblxyXG4gICQuZ2V0SlNPTignL3NraWxscy5qc29uJywgZnVuY3Rpb24oIGRhdGEgKSB7XHJcblxyXG4gICAgY29uc3Qgc2tpbGxzID0gZGF0YVxyXG4gICAgLmZpbHRlcigoc2tpbGwpID0+IHNraWxsLmVuYWJsZWQpXHJcblxyXG4gICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBza2lsbHNcclxuICAgIC5yZWR1Y2UoZnVuY3Rpb24oY2F0ZWdvcmllcywgc2tpbGwpIHtcclxuICAgICAgaWYgKCFjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldID0gW3NraWxsXVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldLnB1c2goc2tpbGwpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwgPSBmdW5jdGlvbiAoc2tpbGwpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwgPSBza2lsbDtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwuY2hhcnRPcHRpb25zID0ge1xyXG4gICAgICAgIGN1dG91dFBlcmNlbnRhZ2UgOiA4MCxcclxuICAgICAgICBjaXJjdW1mZXJlbmNlOiAyICogTWF0aC5QSSxcclxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwuY2hhcnRTdHlsZSA9IHtcclxuICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoL3NraWxscy8nICsgJHNjb3BlLnNlbGVjdGVkU2tpbGwuaW1hZ2UgKyAnKScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICc2MCUnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJzUwJSA1MCUnXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZFNraWxsKCRzY29wZS5za2lsbHNbMF0pO1xyXG5cclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFRlblRoaW5nc1N2Yykge1xyXG4gICAgJHNjb3BlLnNlYXJjaCA9IHtcclxuICAgICAgbmFtZTogXCJcIixcclxuICAgICAgdmFsdWVzOiBcIlwiLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUua2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICBpZiAoJChcIiNuZXctYmx1cmJcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLmFkZFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5hZGRWYWx1ZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICgkKFwiI25ldy12YWx1ZVwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkKFwiI25ldy1ibHVyYlwiKS5mb2N1cygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgfVxyXG4gICAgICAvLyB1c2UgZS5rZXlDb2RlXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZWFyY2hOYW1lID0gXCJcIjtcclxuICAgICRzY29wZS5uZXdJdGVtID0ge307XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5RmlsdGVyID0gKGNhdGVnb3J5KSA9PiAoJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0gY2F0ZWdvcnkpO1xyXG4gICAgJHNjb3BlLnNldFVzZXJGaWx0ZXIgPSAodXNlcikgPT4gKCRzY29wZS51c2VyRmlsdGVyID0gdXNlcik7XHJcbiAgICAkc2NvcGUuc2V0VXBkYXRlRmlsdGVyID0gKHR5cGUpID0+ICgkc2NvcGUudXBkYXRlRmlsdGVyID0gdHlwZSk7XHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAobGFuZ3VhZ2UpID0+ICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSBsYW5ndWFnZSk7XHJcblxyXG4gICAgJHNjb3BlLmZpbHRlcmVkTGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxpc3RzKSByZXR1cm4gW107XHJcbiAgICAgIHJldHVybiAkc2NvcGUubGlzdHNcclxuICAgICAgICAuZmlsdGVyKCh7IGlzRHluYW1pYyB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoJHNjb3BlLnVwZGF0ZUZpbHRlciAhPT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwic3RhdGljXCIgJiYgaXNEeW5hbWljID09PSB0cnVlKSB8fFxyXG4gICAgICAgICAgICAgICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImR5bmFtaWNcIiAmJiBpc0R5bmFtaWMgPT09IGZhbHNlKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKCh7IGNhdGVnb3JpZXMgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCRzY29wZS5jYXRlZ29yeUZpbHRlciA9PT0gXCJBbGxcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICByZXR1cm4gY2F0ZWdvcmllcy5pbmRleE9mKCRzY29wZS5jYXRlZ29yeUZpbHRlcikgPj0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyID09PSBcIkJsYW5rXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoKHsgY3JlYXRvciB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoJHNjb3BlLnVzZXJGaWx0ZXIgPT09IFwiQWxsXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRvciA9PT0gJHNjb3BlLnVzZXJGaWx0ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKCh7IGxhbmd1YWdlIH0pID0+IHtcclxuICAgICAgICAgIGlmICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZSA9PT0gXCJhbGxcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsYW5ndWFnZSA9PT0gJHNjb3BlLmxhbmd1YWdlRmlsdGVyLmNvZGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kb24oXCJsb2dpblwiLCAoXykgPT4ge1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJzID0gJHNjb3BlLmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcnMucHVzaChcIkFsbFwiKTtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJzLnB1c2goXCJCbGFua1wiKTtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSBcIkFsbFwiO1xyXG4gICAgICAgICRzY29wZS51cGRhdGVGaWx0ZXIgPSBcImFsbFwiO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExhbmd1YWdlcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVycyA9ICRzY29wZS5sYW5ndWFnZXMubWFwKChsYW5ndWFnZSkgPT4gbGFuZ3VhZ2UpO1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcnMucHVzaCh7IG5hbWU6IFwiQWxsXCIsIGNvZGU6IFwiYWxsXCIgfSk7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0geyBuYW1lOiBcIkFsbFwiLCBjb2RlOiBcImFsbFwiIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0TGlzdCh7IF9pZDogJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5saXN0T3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcImRhdGVcIixcclxuICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICBsYWJlbDogXCJDcmVhdGlvbiBEYXRlXCIsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS52YWx1ZU9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJ2YWx1ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgICBsYWJlbDogXCJWYWx1ZVwiLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc29ydCA9IChzb3J0ZXIsIHNvcnRGaWVsZCwgc29ydExhYmVsKSA9PiB7XHJcbiAgICAgICRzY29wZVtzb3J0ZXJdLmxhYmVsID0gc29ydExhYmVsO1xyXG4gICAgICBpZiAoJHNjb3BlW3NvcnRlcl0uZmllbGQgPT09IHNvcnRGaWVsZCkge1xyXG4gICAgICAgICRzY29wZVtzb3J0ZXJdLmRpcmVjdGlvbiA9ICEkc2NvcGVbc29ydGVyXS5kaXJlY3Rpb247XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlW3NvcnRlcl0uZmllbGQgPSBzb3J0RmllbGQ7XHJcbiAgICAgICAgJHNjb3BlW3NvcnRlcl0uZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGFuZ3VhZ2VDb3VudCA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5saXN0cykgcmV0dXJuIDA7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gJHNjb3BlLmxpc3RzLmZpbHRlcihcclxuICAgICAgICAobGlzdCkgPT5cclxuICAgICAgICAgICgkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPT09IFwiQWxsXCIgfHwgbGlzdC5jYXRlZ29yaWVzLmluY2x1ZGVzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikpICYmXHJcbiAgICAgICAgICAobGFuZ3VhZ2UuY29kZSA9PT0gXCJhbGxcIiB8fCBsaXN0Lmxhbmd1YWdlID09PSBsYW5ndWFnZS5jb2RlKSAmJlxyXG4gICAgICAgICAgKCRzY29wZS51c2VyRmlsdGVyID09PSBcIkFsbFwiIHx8IGxpc3QuY3JlYXRvciA9PT0gJHNjb3BlLnVzZXJGaWx0ZXIpICYmXHJcbiAgICAgICAgICAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJhbGxcIiB8fCBsaXN0LmlzRHluYW1pYyA9PT0gKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiZHluYW1pY1wiKSksXHJcbiAgICAgICkubGVuZ3RoO1xyXG4gICAgICByZXR1cm4gYCR7Y291bnR9IC0gJHtNYXRoLnJvdW5kKChjb3VudCAvICRzY29wZS5saXN0cy5sZW5ndGgpICogMTAwKX0lYDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldENhdGVnb3J5Q291bnQgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubGlzdHMpIHJldHVybiAwO1xyXG4gICAgICBjb25zdCBjb3VudCA9ICRzY29wZS5saXN0cy5maWx0ZXIoXHJcbiAgICAgICAgKGxpc3QpID0+XHJcbiAgICAgICAgICAoY2F0ZWdvcnkgPT09IFwiQWxsXCIgfHwgbGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpID49IDApICYmXHJcbiAgICAgICAgICAoJHNjb3BlLmxhbmd1YWdlRmlsdGVyLmNvZGUgPT09IFwiYWxsXCIgfHwgbGlzdC5sYW5ndWFnZSA9PT0gJHNjb3BlLmxhbmd1YWdlRmlsdGVyLmNvZGUpICYmXHJcbiAgICAgICAgICAoJHNjb3BlLnVzZXJGaWx0ZXIgPT09IFwiQWxsXCIgfHwgbGlzdC5jcmVhdG9yID09PSAkc2NvcGUudXNlckZpbHRlcikgJiZcclxuICAgICAgICAgICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImFsbFwiIHx8IGxpc3QuaXNEeW5hbWljID09PSAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJkeW5hbWljXCIpKSxcclxuICAgICAgKS5sZW5ndGg7XHJcbiAgICAgIHJldHVybiBgJHtjb3VudH0gLSAke01hdGgucm91bmQoKGNvdW50IC8gJHNjb3BlLmxpc3RzLmxlbmd0aCkgKiAxMDApfSVgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0VXBkYXRlQ291bnQgPSAodHlwZSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5saXN0cykgcmV0dXJuIDA7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gJHNjb3BlLmxpc3RzLmZpbHRlcihcclxuICAgICAgICAobGlzdCkgPT4gdHlwZSA9PT0gXCJhbGxcIiB8fCAobGlzdC5pc0R5bmFtaWMgJiYgdHlwZSA9PT0gXCJkeW5hbWljXCIpIHx8ICghbGlzdC5pc0R5bmFtaWMgJiYgdHlwZSA9PT0gXCJzdGF0aWNcIiksXHJcbiAgICAgICkubGVuZ3RoO1xyXG4gICAgICByZXR1cm4gYCR7Y291bnR9IC0gJHtNYXRoLnJvdW5kKChjb3VudCAvICRzY29wZS5saXN0cy5sZW5ndGgpICogMTAwKX0lYDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExpc3RzID0gKCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5sb2FkaW5nKSB7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdHMgPSBkYXRhLnJlc3VsdDtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVycyA9IHt9O1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXJzLkFsbCA9ICRzY29wZS5saXN0cy5sZW5ndGg7XHJcbiAgICAgICAgICAkc2NvcGUudXNlckZpbHRlcnMgPSAkc2NvcGUubGlzdHNcclxuICAgICAgICAgICAgLnNvcnQoKGxpc3QxLCBsaXN0MikgPT4gbGlzdDEuY3JlYXRvciA+IGxpc3QyLmNyZWF0b3IpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKHVzZXJzLCB7IGNyZWF0b3IgfSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghdXNlcnNbY3JlYXRvcl0pIHVzZXJzW2NyZWF0b3JdID0gMDtcclxuICAgICAgICAgICAgICB1c2Vyc1tjcmVhdG9yXSsrO1xyXG4gICAgICAgICAgICAgIHJldHVybiB1c2VycztcclxuICAgICAgICAgICAgfSwgJHNjb3BlLnVzZXJGaWx0ZXJzKTtcclxuICAgICAgICAgICRzY29wZS51c2VyQ291bnQgPSBPYmplY3Qua2V5cygkc2NvcGUudXNlckZpbHRlcnMpLmxlbmd0aDtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVycyA9IHNvcnRPYmplY3QoJHNjb3BlLnVzZXJGaWx0ZXJzLCBmYWxzZSk7XHJcbiAgICAgICAgICAkc2NvcGUudXNlckZpbHRlciA9IFwiQWxsXCI7XHJcbiAgICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZWxlY3RMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3QobGlzdClcclxuICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAgICQoXCIjY2F0ZWdvcnktc2VsZWN0XCIpLmhpZGUoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldENhdGVnb3J5Q2xhc3MgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgcmV0dXJuICRzY29wZS5zZWxlY3RlZExpc3QgJiYgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpID49IDBcclxuICAgICAgICA/IFwiYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgIDogXCJidG4tZGVmYXVsdFwiO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQ2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcnlJbmRleCA9ICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KTtcclxuICAgICAgaWYgKGNhdGVnb3J5SW5kZXggPj0gMCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5zcGxpY2UoY2F0ZWdvcnlJbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZWxlY3RMYW5ndWFnZSA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0Lmxhbmd1YWdlID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgY29uc3Qgbm9uRW5nbGlzaEluZGV4ID0gJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoXCJOb24tRW5nbGlzaFwiKTtcclxuICAgICAgaWYgKGxhbmd1YWdlLmNvZGUgIT09IFwiRU5cIiAmJiBub25FbmdsaXNoSW5kZXggPCAwKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLnB1c2goXCJOb24tRW5nbGlzaFwiKTtcclxuICAgICAgfSBlbHNlIGlmIChsYW5ndWFnZS5jb2RlID09PSBcIkVOXCIgJiYgbm9uRW5nbGlzaEluZGV4ID49IDApIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuc3BsaWNlKG5vbkVuZ2xpc2hJbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmFkZExpc3QgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRMYW5ndWFnZSA9ICRzY29wZS5zZWxlY3RlZExpc3QgPyAkc2NvcGUuc2VsZWN0ZWRMaXN0Lmxhbmd1YWdlIDogXCJFTlwiO1xyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBcIlwiKTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNyZWF0b3I6ICRzY29wZS5jdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB2YWx1ZXM6IFtdLFxyXG4gICAgICAgIGFuc3dlcnM6IDAsXHJcbiAgICAgICAgaXNEeW5hbWljOiB0cnVlLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgIGxhbmd1YWdlOiBjdXJyZW50TGFuZ3VhZ2UsXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5oYXNEdXBsaWNhdGUgPSAoKSA9PlxyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ICYmXHJcbiAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlICYmXHJcbiAgICAgIF8uc29tZShcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyxcclxuICAgICAgICAoYW5zd2VyKSA9PiBhbnN3ZXIudmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpID09ICRzY29wZS5uZXdJdGVtLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSxcclxuICAgICAgKTtcclxuXHJcbiAgICAkc2NvcGUuYWRkVmFsdWUgPSAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubmV3SXRlbS52YWx1ZSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIF8uc29tZShcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMsXHJcbiAgICAgICAgICAgIChhbnN3ZXIpID0+IGFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCkgPT0gJHNjb3BlLm5ld0l0ZW0udmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpLFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgYWxlcnQoYCR7JHNjb3BlLm5ld0l0ZW0udmFsdWV9IGlzIGFscmVhZHkgaW4gdGhlIGxpc3RgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0uY3JlYXRvciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy51bnNoaWZ0KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoJHNjb3BlLm5ld0l0ZW0pKSk7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmFuc3dlcnMrKztcclxuICAgICAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICRzY29wZS5uZXdJdGVtLmJsdXJiID0gXCJcIjtcclxuICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMubGVuZ3RoID49IDEwICYmXHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QubmFtZSAmJlxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMFxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5zYXZlTGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJChcIiNuZXctdmFsdWVcIikuZm9jdXMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnJlcG9ydExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBsaXN0LnJlcG9ydGVkID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLnJlcG9ydExpc3QoJHNjb3BlLmN1cnJlbnRVc2VyLCBsaXN0KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNhdmVMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuc2F2aW5nKSB7XHJcbiAgICAgICAgbGlzdC52YWx1ZXMgPSBsaXN0LnZhbHVlcy5maWx0ZXIoKHsgdmFsdWUgfSkgPT4gdmFsdWUpO1xyXG4gICAgICAgIGlmIChsaXN0LnZhbHVlcy5sZW5ndGggPj0gMTAgJiYgbGlzdC5uYW1lICYmIGxpc3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5zYXZlTGlzdCgkc2NvcGUuY3VycmVudFVzZXIsIGxpc3QpLnRoZW4oXHJcbiAgICAgICAgICAgICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5saXN0cy51bnNoaWZ0KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdExpc3QoZGF0YSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJHNjb3BlLmxpc3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUubGlzdHNbaV0uX2lkID09PSBkYXRhLl9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5saXN0c1tpXSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RMaXN0KGxpc3QpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGxpc3QudmFsdWVzLmxlbmd0aCA8IDEwKSB7XHJcbiAgICAgICAgICBhbGVydChcIkxpc3RzIG11c3QgY29udGFpbiAxMCBvciBtb3JlIHZhbHVlcyFcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmICghbGlzdC5uYW1lKSB7XHJcbiAgICAgICAgICBmbGFzaChcIiNsaXN0LW5hbWVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZsYXNoKFwiLmxpc3QtY2F0ZWdvcnlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGZsYXNoKGVsZW1lbnQpIHtcclxuICAgICAgY29uc3QgY29sb3IgPSAkKGVsZW1lbnQpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIik7XHJcbiAgICAgICQoZWxlbWVudCkuYW5pbWF0ZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZBODA3MlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTAwLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICQoZWxlbWVudCkuYW5pbWF0ZShcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDEwMCxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICghbGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUubGlzdHMgPSAkc2NvcGUubGlzdHMuZmlsdGVyKCh7IF9pZCB9KSA9PiBfaWQpO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGxpc3Q/XCIpKSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZGVsZXRlTGlzdChsaXN0KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmxpc3RCdXR0b25DbGFzcyA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlcyA9IGxpc3QudmFsdWVzLmxlbmd0aDtcclxuICAgICAgY29uc3QgYmx1cmJzID0gbGlzdC5ibHVyYnM7XHJcbiAgICAgIGlmICh2YWx1ZXMgPT09IGJsdXJicyAmJiBsaXN0LmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiYnRuLWRlZmF1bHRcIjtcclxuICAgICAgfSBlbHNlIGlmIChibHVyYnMgPT09IDAgJiYgIWxpc3QuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gXCJidG4td2FybmluZ1wiO1xyXG4gICAgICB9IGVsc2UgaWYgKGJsdXJicyA9PT0gMCAmJiBsaXN0LmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiYnRuLWluZm9cIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJidG4tcHJpbWFyeVwiO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRCbHVyYnMgPSAodHlwZSkgPT4ge1xyXG4gICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRCbHVyYnMoJHNjb3BlLnNlbGVjdGVkTGlzdCwgdHlwZSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0TGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiIsIi8qanNsaW50IGVzdmVyc2lvbjogNiovXHJcbmFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NBZG1pbkN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgVGVuVGhpbmdzU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8pID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5hZG1pbikge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcclxuICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLnJldmVyc2UgPSAhJHNjb3BlLm9yZGVyLnJldmVyc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0UXVldWUgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldFF1ZXVlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucXVldWUgPSByZXNwb25zZS5kYXRhLnJlcGxhY2UoXCIvblwiLCBcIjxici8+XCIpO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgICRzY29wZS5nZXRRdWV1ZSgpO1xyXG5cclxuICAgIFRlblRoaW5nc1N2Yy5nZXRQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICRzY29wZS5wYXVzZWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZygkc2NvcGUucGF1c2VkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdldFVzZXJzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMuZ2V0VXNlcnMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS51c2VycyA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKCh1c2VyKSA9PiAhdXNlci5hZG1pbik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVCYW4gPSAodXNlcikgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMudG9nZ2xlQmFuKHVzZXIuX2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlUGF1c2UgPSAodXNlcikgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMudG9nZ2xlUGF1c2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5wYXVzZWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5wYXVzZWQpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NDdXJhdGVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICBsZXQgcGFnZSA9IDE7XHJcbiAgICAkc2NvcGUubGlzdHMgPSBbXTtcclxuICAgICRzY29wZS5zZWFyY2ggPSBcIlwiO1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0gXCJBbGxcIjtcclxuICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9IHt9O1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHVuZGVmaW5lZDtcclxuICAgIGxldCBleGhhdXN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKGxpc3QpIHtcclxuICAgICAgICBpZiAobGlzdC5faWQgIT09ICRzY29wZS5zZWxlY3RlZExpc3Q/Ll9pZCkge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3QobGlzdClcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldENhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSAkc2NvcGUuY2F0ZWdvcmllcy5yZWR1Y2UoKGZpbHRlciwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICBmaWx0ZXJbY2F0ZWdvcnldID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kb24oXCJsb2dpblwiLCAoXykgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgcmVzZXRDYXRlZ29yeUZpbHRlcigpO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0KSB7XHJcbiAgICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCh7IF9pZDogJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QgfSk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcImRhdGVcIixcclxuICAgICAgcmV2ZXJzZTogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyQnkgPSAoZmllbGQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5vcmRlci5maWVsZCA9PT0gZmllbGQpIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIucmV2ZXJzZSA9ICEkc2NvcGUub3JkZXIucmV2ZXJzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TW9yZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxpc3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gJHNjb3BlLmxpc3RzLmNvbmNhdChsaXN0cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgICBwYWdlID0gMTtcclxuICAgICAgZXhoYXVzdGVkID0gZmFsc2U7XHJcbiAgICAgIGdldExpc3RzKCkudGhlbigobGlzdHMpID0+IHtcclxuICAgICAgICAkc2NvcGUubGlzdHMgPSBsaXN0cztcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0gbGFuZ3VhZ2U7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9ICEkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUNhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKTtcclxuICAgICAgaWYgKGNhdGVnb3JpZXMubGVuZ3RoID09PSBjYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0pLmxlbmd0aCkge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9IHt9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc2V0Q2F0ZWdvcnlGaWx0ZXIoKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0TGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubG9hZGluZyB8fCBleGhhdXN0ZWQpIHJldHVybiBbXTtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0cyh7XHJcbiAgICAgICAgcGFnZSxcclxuICAgICAgICBzb3J0Qnk6ICRzY29wZS5vcmRlci5maWVsZCxcclxuICAgICAgICBvcmRlckJ5OiAkc2NvcGUub3JkZXIucmV2ZXJzZSA/IC0xIDogMSxcclxuICAgICAgICBsaW1pdDogMTAwLFxyXG4gICAgICAgIHNlYXJjaDogJHNjb3BlLnNlYXJjaCxcclxuICAgICAgICBsYW5ndWFnZTogJHNjb3BlLmxhbmd1YWdlRmlsdGVyID09PSBcIkFsbFwiID8gdW5kZWZpbmVkIDogJHNjb3BlLmxhbmd1YWdlRmlsdGVyLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlBhZ2UgXCIsIHBhZ2UsIFwiIHJlc3VsdHMgXCIsIGRhdGEucmVzdWx0Lmxlbmd0aCk7XHJcbiAgICAgIGlmIChkYXRhLnJlc3VsdC5sZW5ndGggPCAxMDApIGV4aGF1c3RlZCA9IHRydWU7XHJcbiAgICAgIGVsc2UgcGFnZSA9IGRhdGEubmV4dFBhZ2U7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0LnNsaWNlKDAsIDEwKSk7XHJcbiAgICAgIHJldHVybiBkYXRhLnJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldERpZmZpY3VsdHkgPSAobGlzdCwgZGlmZmljdWx0eSkgPT4ge1xyXG4gICAgICBsaXN0LmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgX2lkOiBsaXN0Ll9pZCxcclxuICAgICAgICBkaWZmaWN1bHR5OiBkaWZmaWN1bHR5LFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5ID0gKGxpc3QsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3J5SW5kZXggPSBsaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSk7XHJcbiAgICAgIGlmIChjYXRlZ29yeUluZGV4ID49IDApIHtcclxuICAgICAgICBsaXN0LmNhdGVnb3JpZXMuc3BsaWNlKGNhdGVnb3J5SW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgfVxyXG4gICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgX2lkOiBsaXN0Ll9pZCxcclxuICAgICAgICBjYXRlZ29yaWVzOiBsaXN0LmNhdGVnb3JpZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG5cdC5tb2R1bGUoJ2FwcCcpXHJcblx0Ly9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcblx0LmNvbnRyb2xsZXIoXHJcblx0XHQnVGVuVGhpbmdzR2FtZUN0cmwnLFxyXG5cdFx0ZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlUGFyYW1zLCBUZW5UaGluZ3NTdmMpIHtcclxuXHRcdFx0JHNjb3BlLiRvbignbG9naW4nLCBfID0+IHtcclxuXHRcdFx0XHRpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcblx0XHRcdFx0XHRnZXRVc2VycygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoJHN0YXRlUGFyYW1zLmdhbWUpIHtcclxuXHRcdFx0XHRUZW5UaGluZ3NTdmMuZ2V0R2FtZSgkc3RhdGVQYXJhbXMuZ2FtZSkudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0XHQkc2NvcGUuZ2FtZSA9IHJlc3BvbnNlLmRhdGE7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygkc2NvcGUuZ2FtZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHQpO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1dvcmtvdXRDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgJHNjb3BlLnRpbWVFeGVyY2lzaW5nID0gMzA7XHJcbiAgJHNjb3BlLnRpbWVSZXN0aW5nID0gMTA7XHJcbiAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuXHJcbiAgdmFyIHNvdW5kcyA9IHtcclxuICAgIG9uOiBuZXcgQXVkaW8oJ29uLndhdicpLFxyXG4gICAgb2ZmOiBuZXcgQXVkaW8oJ29mZi53YXYnKSxcclxuICAgIHN3aXRjaDogbmV3IEF1ZGlvKCdzd2l0Y2gud2F2JyksXHJcbiAgfTtcclxuXHJcblxyXG4gIHZhciBleGVyY2lzZXMgPSBbXHJcbiAgICB7bmFtZTogJ0p1bXBpbmcgSmFja3MnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdXYWxsIFNpdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1B1c2gtVXAnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdDcnVuY2gnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTdGVwLVVwJywgc3BsaXQ6IHRydWV9LFxyXG4gICAge25hbWU6ICdTcXVhdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1RyaWNlcHMgRGlwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUGxhbmsnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdIaWdoIEtuZWVzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnTHVuZ2UnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwIHdpdGggUm90YXRpb24nLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTaWRlIFBsYW5rJywgc3BsaXQ6IHRydWV9XHJcbiAgXTtcclxuXHJcbiAgdmFyIGV4ZXJjaXNpbmc7XHJcblxyXG4gICRzY29wZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChleGVyY2lzZXMubGVuZ3RoIC0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvICgkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3RpbmcpKSkgKyAnLycgKyBleGVyY2lzZXMubGVuZ3RoO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS53b3Jrb3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZXhjZXJjaXNlVGltZSA9ICRzY29wZS50aW1lRXhlcmNpc2luZyArICRzY29wZS50aW1lUmVzdGluZztcclxuICAgIGlmICghJHNjb3BlLnRpbWVSZW1haW5pbmcpIHtcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSBleGVyY2lzZXMubGVuZ3RoICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgZXhlcmNpc2luZyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS50aW1lUmVtYWluaW5nLS07XHJcbiAgICAgICAgaWYgKCRzY29wZS50aW1lUmVtYWluaW5nID09PSAwKSB7XHJcbiAgICAgICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJ0ZpbmlzaGVkISBDb25ncmF0cyEnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdXJyZW50RXhlcmNpc2UgPSBNYXRoLmZsb29yKCRzY29wZS50aW1lUmVtYWluaW5nIC8gZXhjZXJjaXNlVGltZSk7XHJcbiAgICAgICAgdmFyIHRpbWVyID0gJHNjb3BlLnRpbWVSZW1haW5pbmcgLSBjdXJyZW50RXhlcmNpc2UgKiBleGNlcmNpc2VUaW1lO1xyXG4gICAgICAgICRzY29wZS50aW1lciA9IHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nID8gdGltZXIgLSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgOiB0aW1lcjtcclxuICAgICAgICBpZiAodGltZXIgPiAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0gZXhlcmNpc2VzW2V4ZXJjaXNlcy5sZW5ndGggLSBjdXJyZW50RXhlcmNpc2UgLSAxXTtcclxuICAgICAgICBpZiAodGltZXIgPT09ICRzY29wZS50aW1lRXhlcmNpc2luZykge1xyXG4gICAgICAgICAgc291bmRzLm9uLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRpbWVyID09PSAwKSB7XHJcbiAgICAgICAgICBzb3VuZHMub2ZmLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRzY29wZS5leGVyY2lzZS5zcGxpdCAmJiB0aW1lciA9PT0gTWF0aC5mbG9vcigkc2NvcGUudGltZUV4ZXJjaXNpbmcgLyAyKSkge1xyXG4gICAgICAgICAgc291bmRzLnN3aXRjaC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAkc2NvcGUudGltZXIgPSAnJztcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJycsIHNwbGl0OiBmYWxzZX07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5kaXJlY3RpdmUoXCJjbGlja091dHNpZGVcIiwgZnVuY3Rpb24gKCRkb2N1bWVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICByZXN0cmljdDogXCJBXCIsXHJcbiAgICBzY29wZToge1xyXG4gICAgICBjbGlja091dHNpZGU6IFwiJlwiLFxyXG4gICAgfSxcclxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgJGRvY3VtZW50Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZWwgIT09IGUudGFyZ2V0ICYmICFlbFswXS5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNjb3BlLiRwYXJlbnQuc2V0U2VsZWN0ZWRMaXN0KCk7XHJcbiAgICAgICAgICAgIHNjb3BlLiRldmFsKHNjb3BlLmNsaWNrT3V0c2lkZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcblx0LmRpcmVjdGl2ZSgnaGVhZCcsIFtcclxuXHRcdCckcm9vdFNjb3BlJyxcclxuXHRcdCckc3RhdGUnLFxyXG5cdFx0JyRjb21waWxlJyxcclxuXHRcdCckaW50ZXJwb2xhdGUnLFxyXG5cdFx0ZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgJGNvbXBpbGUsICRpbnRlcnBvbGF0ZSkge1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlID0gZnVuY3Rpb24gZ2V0U3R5bGUodGVtcGxhdGVTdHlsZVVybCkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3R5bGUgPSB7XHJcblx0XHRcdFx0XHRocmVmOiB0ZW1wbGF0ZVN0eWxlVXJsLFxyXG5cdFx0XHRcdFx0cmVsOiAnc3R5bGVzaGVldCdcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRpZiAoc3R5bGUuaHJlZi5tYXRjaCgvXFwubGVzcyQvKSkge1xyXG5cdFx0XHRcdFx0c3R5bGUucmVsID0gJ3N0eWxlc2hlZXQvbGVzcyc7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIGdldFN0eWxlcyhzdGF0ZSkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3RhdGVzID0ge307XHJcblxyXG5cdFx0XHRcdC8vQ2hlY2sgc3RhdGUgZm9yIHN0eWxlc1xyXG5cdFx0XHRcdHdoaWxlIChzdGF0ZS5uYW1lICE9PSAnJykge1xyXG5cdFx0XHRcdFx0dmFyIHBhcmVudCA9ICRzdGF0ZS5nZXQoJ14nLCBzdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0Ly9Jbml0aWF0ZSBvdXIgdmlldyBsaXN0XHJcblx0XHRcdFx0XHRpZiAoIXN0YXRlc1twYXJlbnQubmFtZV0pIHtcclxuXHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXSA9IHt9O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ2hlY2sgdGhlIHRlbXBsYXRlU3R5bGVcclxuXHRcdFx0XHRcdGlmIChzdGF0ZS50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXVsnJ10pIHtcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSA9IGdldFN0eWxlKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB2aWV3c1xyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnZpZXdzKSB7XHJcblx0XHRcdFx0XHRcdF8uZm9yRWFjaChzdGF0ZS52aWV3cywgZnVuY3Rpb24gKHZpZXcsIGtleSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgYSBzdHlsZVxyXG5cdFx0XHRcdFx0XHRcdGlmICghdmlldy50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGFyZSB0YXJnZXRpbmcgc29tZSBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRpZiAoKGtleSA9IGtleS5zcGxpdCgnQCcpKVsxXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBoYXZlIHN0eWxlcyBmb3IgdGhhdCBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGVzW2tleVsxXV0gPSB7fTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBzb21lIHBhcmVudCdzIHZpZXdcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV1ba2V5WzBdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBvdXIgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1ba2V5WzBdXSA9IGdldFN0eWxlKHZpZXcudGVtcGxhdGVTdHlsZVVybCk7XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NvbnRpbnVlIHdpdGggdGhlIHBhcmVudFxyXG5cdFx0XHRcdFx0c3RhdGUgPSBwYXJlbnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL0ZsYXR0ZW4gdGhlIGxpc3RcclxuXHRcdFx0XHR2YXIgZmxhdCA9IFtdO1xyXG5cdFx0XHRcdF8uZm9yRWFjaChzdGF0ZXMsIGZ1bmN0aW9uICh2aWV3cykge1xyXG5cclxuXHRcdFx0XHRcdF8uZm9yRWFjaCh2aWV3cywgZnVuY3Rpb24gKHN0eWxlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIV8uaW5jbHVkZXMoZmxhdCwgc3R5bGUpKSB7XHJcblx0XHRcdFx0XHRcdFx0ZmxhdC5wdXNoKHN0eWxlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly9SZXZlcnNlIGl0IHNvIHdlIGhhdmUgYSBwcm9wZXIgaGllcmFyY2h5XHJcblx0XHRcdFx0ZmxhdC5yZXZlcnNlKCk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBmbGF0O1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdFx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0pIHtcclxuXHJcblx0XHRcdFx0XHRzY29wZS50ZW1wbGF0ZVN0eWxlcyA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdHZhciBodG1sID0gJzxsaW5rIG5nLWF0dHItcmVsPVwie3tzdHlsZS5yZWx9fVwiIG5nLXJlcGVhdD1cInN0eWxlIGluIHRlbXBsYXRlU3R5bGVzXCIgbmctaHJlZj1cInt7c3R5bGUuaHJlZn19XCI+JztcclxuXHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXHtcXHsvZywgJGludGVycG9sYXRlLnN0YXJ0U3ltYm9sKCkpO1xyXG5cdFx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvXFx9XFx9L2csICRpbnRlcnBvbGF0ZS5lbmRTeW1ib2woKSk7XHJcblxyXG5cdFx0XHRcdFx0ZWxlbS5hcHBlbmQoJGNvbXBpbGUoaHRtbCkoc2NvcGUpKTtcclxuXHJcblx0XHRcdFx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpIHtcclxuXHJcblx0XHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gZ2V0U3R5bGVzKHRvU3RhdGUpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0fVxyXG5cdF0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0NhdGVnb3JpZXNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VGFza3MgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nLCBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZFRhc2sgPSBmdW5jdGlvbiAoY2F0ZWdvcnksIHRhc2spIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5ICsgJy90YXNrcycsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICBzdmMuY2hvaWNlcyA9IGxpc3Q7XHJcbiAgICBzdmMucHJpb3JpdHlMaXN0ID0gW107XHJcbiAgICAvL01ha2UgYSBuZXcgY2hvaWNlIGxpc3RcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKHZhciBqID0gaSArIDE7IGogPCBsaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgc3ZjLnByaW9yaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgZmlyc3RDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaSA6IGpdLm5hbWUsXHJcbiAgICAgICAgICBzZWNvbmRDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaiA6IGldLm5hbWUsXHJcbiAgICAgICAgICBjaG9pY2U6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNodWZmbGUoc3ZjLnByaW9yaXR5TGlzdCk7XHJcbiAgICBmb3IgKGkgaW4gc3ZjLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBzdmMucHJpb3JpdHlMaXN0W2ldLmlkID0gaSArIDE7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHJldHVybiBzdmMucHJpb3JpdHlMaXN0O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcclxuICAgIHZhciBtID0gYXJyYXkubGVuZ3RoLCB0LCBpO1xyXG4gICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGXigKZcclxuICAgIHdoaWxlIChtKSB7XHJcbiAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudOKAplxyXG4gICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbS0tKTtcclxuICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAvL2FycmF5W21dLmZpcnN0Q2hvaWNlO1xyXG4gICAgICB0ID0gYXJyYXlbbV07XHJcbiAgICAgIGFycmF5W21dID0gYXJyYXlbaV07XHJcbiAgICAgIGFycmF5W2ldID0gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdFbWFpbFN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuc2VuZCA9IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZW1haWwnLCBlbWFpbCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuc2VydmljZSgnRmlsZVN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gICAgc3ZjLmdldEltYWdlcyA9IGZ1bmN0aW9uKGZvbGRlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2ZpbGVzL2ltYWdlcy8nICsgZm9sZGVyKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLmdldFNvdW5kcyA9IGZ1bmN0aW9uKGZvbGRlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2ZpbGVzL3NvdW5kcy8nICsgZm9sZGVyKTtcclxuICAgIH07XHJcblxyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnR2FtZVN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gICAgc3ZjLmdldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZ2FtZXMvJyArIGdhbWUgKyAnLycgKyB1c2VyICsgJy9oaWdoc2NvcmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLnNldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyLCBzY29yZSkge1xyXG4gICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9nYW1lcy8nICsgZ2FtZSArICcvJyArIHVzZXIgKyAnL2hpZ2hzY29yZScsIHtcclxuICAgICAgICBzY29yZTogc2NvcmVcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnTGFuZ3VhZ2VTdmMnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5sYW5ndWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkVOXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkVuZ2xpc2hcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWdiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIk5MXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIk5lZGVybGFuZHNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLW5sXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkZSXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkZyYW7Dp2Fpc1wiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tZnJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy50ZXh0ID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgc3ZjLnNlbGVjdGVkTGFuZ3VhZ2UgPSBzdmMubGFuZ3VhZ2VzWzBdO1xyXG5cclxuICBzdmMuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcclxuICAgIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICByZXR1cm4gbGFuZ3VhZ2U7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHN2Yy5zZWxlY3RlZExhbmd1YWdlO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZmV0Y2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJyk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQb3N0ID0gZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMvJyArIHBvc3QuX2lkKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJUZW5UaGluZ3NTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9ib3RzL3RlbnRoaW5ncy9xdWV1ZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0cyA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgIHZhciB1cmwgPVxyXG4gICAgICBgL2FwaS90ZW50aGluZ3MvbGlzdHM/YCArXHJcbiAgICAgIChvcHRpb25zLmxpbWl0ID8gYCZsaW1pdD0ke29wdGlvbnMubGltaXR9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMucGFnZSA/IGAmcGFnZT0ke29wdGlvbnMucGFnZX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zb3J0QnkgPyBgJnNvcnRfYnk9JHtvcHRpb25zLnNvcnRCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5vcmRlckJ5ID8gYCZvcmRlcl9ieT0ke29wdGlvbnMub3JkZXJCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5sYW5ndWFnZSA/IGAmbGFuZ3VhZ2U9JHtvcHRpb25zLmxhbmd1YWdlfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLmNhdGVnb3JpZXMgJiYgb3B0aW9ucy5jYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyBgJmNhdGVnb3JpZXM9JHtvcHRpb25zLmNhdGVnb3JpZXMuam9pbihcIixcIil9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuc2VhcmNoID8gYCZzZWFyY2g9JHtvcHRpb25zLnNlYXJjaH1gIDogXCJcIik7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9jYXRlZ29yaWVzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2xhbmd1YWdlc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQsIGxpc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zYXZlTGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucHV0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHNcIiwge1xyXG4gICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICBsaXN0OiBsaXN0LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnJlcG9ydExpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3JlcG9ydC9cIiArIHVzZXIuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMuZGVsZXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEJsdXJicyA9IGZ1bmN0aW9uIChsaXN0LCB0eXBlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvbGlzdHMvJHtsaXN0Ll9pZH0vYmx1cmJzLyR7dHlwZX1gKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRHYW1lID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9nYW1lLyR7aWR9YCk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJVc2VyU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRVc2VycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzL2FsbFwiKTtcclxuICB9O1xyXG5cclxuICBzdmMudG9nZ2xlQmFuID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3VzZXJzL2Jhbi8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSB0b2tlbjtcclxuICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hdXRoZW50aWNhdGVcIiwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9sb2dpblwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyLl9pZCwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi92ZXJpZmljYXRpb25cIiwge1xyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvcGFzc3dvcmRcIiwge1xyXG4gICAgICBvbGRQYXNzd29yZDogb2xkUGFzc3dvcmQsXHJcbiAgICAgIG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VyLCBuZXdVc2VybmFtZSkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi91c2VybmFtZVwiLCB7XHJcbiAgICAgICAgbmV3VXNlcm5hbWU6IG5ld1VzZXJuYW1lLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmNvbnRyb2xsZXIoJ1F1aXpBbmltYWxzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgRmlsZVN2Yykge1xyXG5cclxuICAgIEZpbGVTdmMuZ2V0U291bmRzKCdhbmltYWxzJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIHNvdW5kOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgNSk7XHJcblxyXG4gICAgJHNjb3BlLmdldFNjb3JlID0gKCkgPT4gYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwubmFtZSA9PT0gYW5pbWFsLmd1ZXNzKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWA7XHJcblxyXG4gICAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwuZ3Vlc3MpLmxlbmd0aCA9PT0gJHNjb3BlLmFuaW1hbHMubGVuZ3RoO1xyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpekdvb2dsZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ2dvb2dsZScpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TG9nb3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdsb2dvcycpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TW92aWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnbW92aWVzJylcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuY29udHJvbGxlcignUXVpelNrZWxldG9uc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIEZpbGVTdmMpIHtcclxuXHJcbiAgICBGaWxlU3ZjLmdldEltYWdlcygnc2tlbGV0b25zJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIGltYWdlOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgMTApO1xyXG5cclxuICAgICRzY29wZS5nZXRTY29yZSA9ICgpID0+IGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAgICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxuICB9KTsiXX0=
