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
    $location.search("list", "new"), $scope.setSelectedList({
      name: "",
      creator: $scope.currentUser._id,
      date: new Date(),
      values: [],
      answers: 0,
      isDynamic: !0,
      category: "",
      categories: [],
      language: currentLanguage
    });
  }, $scope.setSelectedList = list => {
    list ? list._id !== $scope.selectedList?._id ? TenThingsSvc.getList(list).then(({
      data
    }) => {
      $scope.selectedList = data, $location.search("list", data._id), console.log(data);
    }).catch(err => console.error(err)) : list._id || ($scope.selectedList = list, $location.search("list", "new")) : ($scope.selectedList = void 0, $location.search("list", null));
  };
  $scope.$on("login", _ => {
    TenThingsSvc.getLanguages().then(response => {
      $scope.languages = response.data, $scope.languageFilter = {};
    }), TenThingsSvc.getCategories().then(response => {
      $scope.categories = response.data, $scope.categoryFilter = {};
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
    $scope.loading = !0;
    const {
      data
    } = await TenThingsSvc.getLists({
      page,
      sortBy: $scope.order.field,
      orderBy: $scope.order.reverse ? -1 : 1,
      limit: 100,
      search: $scope.search,
      languages: Object.keys($scope.languageFilter).filter(language => $scope.languageFilter[language]),
      categories: Object.keys($scope.categoryFilter).filter(category => $scope.categoryFilter[category])
    });
    return console.log("Page ", page, " results ", data.result.length), data.result.length < 100 ? exhausted = !0 : page = data.nextPage, $scope.loading = !1, console.log(data.result.slice(0, 10)), data.result;
  };
  $scope.addValue = () => {
    $scope.newItem.value && ($scope.hasDuplicate() ? alert(`${$scope.newItem.value} is already in the list`) : ($scope.newItem.creator = $scope.currentUser._id, $scope.selectedList.values.length >= 10 && $scope.selectedList.name && $scope.selectedList.categories.length > 0 ? ($scope.saving = !0, TenThingsSvc.saveList($scope.currentUser, $scope.selectedList).then(({
      data
    }) => {
      $scope.setSelectedList(data), "new" === $location.search().list && $location.search("list", data._id), $scope.saving = !1;
    }, err => {
      console.error(err);
    })) : ($scope.selectedList.values.unshift(JSON.parse(JSON.stringify($scope.newItem))), console.log($scope.selectedList.values), $scope.selectedList.answers++, $scope.newItem.value = "", $scope.newItem.blurb = ""))), $("#new-value").focus();
  }, $scope.updateList = (list, updates) => {
    list.values.length >= 10 && list.name && list.categories.length > 0 && TenThingsSvc.updateList({
      _id: list._id,
      ...updates
    });
  }, $scope.deleteList = list => {
    list._id ? confirm("Are you sure you want to delete this list?") && TenThingsSvc.deleteList(list).then(() => {
      $scope.getLists(), $scope.selectedList = null;
    }) : $scope.selectedList = null;
  }, $scope.setLanguage = (list, language) => {
    list.language = language.code;
    const nonEnglishIndex = list.categories.indexOf("Non-English");
    "EN" !== language.code && nonEnglishIndex < 0 ? list.categories.push("Non-English") : "EN" === language.code && nonEnglishIndex >= 0 && list.categories.splice(nonEnglishIndex, 1), TenThingsSvc.updateList({
      _id: list._id,
      categories: list.categories,
      language: language.code
    });
  }, $scope.setDifficulty = (list, difficulty) => {
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
  }, $scope.hasDuplicate = () => $scope.selectedList && $scope.newItem.value && _.some($scope.selectedList.values, answer => answer.value.removeAllButLetters() == $scope.newItem.value.removeAllButLetters());
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiY29udHJvbGxlcnMvYXBwLmN0cmwuanMiLCJjb250cm9sbGVycy9hc3Rlcm9pZHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2J1YmJsZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NoYXJhZGVzLmN0cmwuanMiLCJjb250cm9sbGVycy9jb250YWN0LmN0cmwuanMiLCJjb250cm9sbGVycy9leHBlcmllbmNlLmN0cmwuanMiLCJjb250cm9sbGVycy9ob2JiaWVzLmN0cmwuanMiLCJjb250cm9sbGVycy9sZW1taW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbGlzdHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xvZ2luLmN0cmwuanMiLCJjb250cm9sbGVycy9wb3N0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJpb3JpdGl6ZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJvZmlsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvc2tpbGxzLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3MuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2FkbWluLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NjdXJhdGUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2dhbWUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3dvcmtvdXQuY3RybC5qcyIsImRpcmVjdGl2ZXMvY2xpY2stb3V0c2lkZS5kaXIuanMiLCJkaXJlY3RpdmVzL3VpLXJvdXRlci1zdHlsZXMuZGlyLmpzIiwic2VydmljZXMvY2F0ZWdvcmllcy5zdmMuanMiLCJzZXJ2aWNlcy9lbWFpbC5zdmMuanMiLCJzZXJ2aWNlcy9maWxlLnN2Yy5qcyIsInNlcnZpY2VzL2dhbWUuc3ZjLmpzIiwic2VydmljZXMvbGFuZ3VhZ2Uuc3ZjLmpzIiwic2VydmljZXMvcG9zdHMuc3ZjLmpzIiwic2VydmljZXMvdGVudGhpbmdzLnN2Yy5qcyIsInNlcnZpY2VzL3VzZXIuc3ZjLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9hbmltYWxzLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2dvb2dsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9sb2dvcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9tb3ZpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvc2tlbGV0b25zLmN0cmwuanMiXSwibmFtZXMiOlsiZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwIiwiYmFzZSIsImxldHRlcnMiLCJkb21haW5zIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJTdHJpbmciLCJwcm90b3R5cGUiLCJ2YWx1ZSIsInJlZHVjZSIsInJlc3VsdCIsImxldHRlciIsInJlcGxhY2UiLCJ0aGlzIiwiU1BFQ0lBTF9DSEFSQUNURVJTIiwiUmVnRXhwIiwidG9Mb3dlckNhc2UiLCJyZW1vdmVEaWFjcml0aWNzIiwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMiLCJleHRyYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsIiRzY29wZSIsIiRsb2NhdGlvbiIsIkxhbmd1YWdlU3ZjIiwiVXNlclN2YyIsImxvZ2luIiwidXNlciIsImxvZ2dlZEluIiwibG9jYWxTdG9yYWdlIiwiX2lkIiwiY3VycmVudFVzZXIiLCIkIiwibG9hZCIsImZhZGVPdXQiLCJmYWRlSW4iLCJvbiIsImNsb3Nlc3QiLCJ0b2dnbGVDbGFzcyIsImNoZWNrZWQiLCJkb2N1bWVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRoZW1lQ291bnRlciIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImZsaXBUaGVtZSIsInNob3ciLCJoaWRlIiwic2V0VGltZW91dCIsImdldEpTT04iLCJza2lsbHMiLCJmaWx0ZXIiLCJza2lsbCIsImhvYmJpZXMiLCJqb2JzIiwiam9iIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImNoYXJhZGVzIiwiZ2V0VGltZVNwYW4iLCJsYW5ndWFnZXMiLCJzZWxlY3RlZExhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJzZWxlY3RMYW5ndWFnZSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJob3ZlcmRpdiIsImRpdmlkIiwibGVmdCIsImNsaWVudFgiLCJ0b3AiLCJjbGllbnRZIiwiZ2V0RWxlbWVudEJ5SWQiLCJjc3MiLCJ0b2dnbGUiLCJ0aGVuIiwicmVzcG9uc2UiLCIkb24iLCJfIiwiYmlydGhEYXRlIiwibG9hZGluZyIsImxvZ291dCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJjbGVhciIsImNhdGNoIiwiZXJyb3IiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImNhcGl0YWxpemUiLCJHYW1lU3ZjIiwiYW5ub3VuY2UiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZm9udCIsImZpbGxTdHlsZSIsInRleHRBbGlnbiIsInNob3RzIiwiYXN0ZXJvaWRzIiwicG93ZXJ1cHMiLCJleHBsb3Npb25zIiwibWFwIiwic3BhY2VwaWNzIiwic3BhY2UiLCJwb3dlcnVwVHlwZXMiLCJuYW1lIiwiYW5ub3VuY2VtZW50IiwiY3ljbGUiLCJyb3dzIiwiY29sdW1ucyIsInNpemUiLCJpbWciLCJJbWFnZSIsImFjdGl2YXRlIiwic3BhY2VzaGlwIiwibWF4U3BlZWQiLCJjb29sZG93biIsImNvb2xkb3duVGltZSIsInJhbmdlIiwic2hpZWxkIiwiZXhwbG9kZSIsInNwYXduQXN0ZXJvaWRzIiwicG93ZXJ1cCIsImFycmF5Iiwic3JjIiwiZXhwbG9zaW9uSW1hZ2UiLCJldmFsdWF0ZUtleXMiLCJwbGF5aW5nIiwic2hvb3QiLCJyb3RhdGlvbiIsInNwZWVkIiwic2NvcmUiLCIkYXBwbHkiLCJTcGFjZXNoaXAiLCJhdXRvU3Bhd24iLCJ3aWR0aCIsImhlaWdodCIsImNhbm5vbiIsIngiLCJ5IiwicG9zaXRpb24iLCJhbmdsZSIsImlkIiwicm91bmQiLCJTaG90IiwibW92ZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJmaWxsIiwiYXN0ZXJvaWQiLCJoaXQiLCJnYW1lT3ZlciIsImNvcyIsInNpbiIsImxpZmVzcGFuIiwiQXN0ZXJvaWQiLCJnZXRFbnRyeVBvc2l0aW9uIiwicm90YXRpb25TcGVlZCIsIkV4cGxvc2lvbiIsInNob3QiLCJwb2ludHMiLCJzcGF3blBvd2VydXAiLCJvYmplY3QiLCJQb3dlcnVwIiwiZGVsYXkiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiY29sdW1uIiwicm93IiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImdyaWRYIiwiZ3JpZFkiLCJvYmplY3QxIiwib2JqZWN0MiIsImtleXMiLCJhbW91bnQiLCJoaWdoc2NvcmUiLCJzZXRIaWdoc2NvcmUiLCJyZXNpemVDYW52YXMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5Q29kZSIsIndoaWNoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsImNsZWFyUmVjdCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJ0YWxseSIsImZpbGxUZXh0IiwibWVhc3VyZVRleHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJidWJibGVzIiwiY29sb3JzIiwiQnViYmxlIiwicmFkaXVzIiwiZXhwYW5kaW5nIiwiY2lyY3VtZmVyZW5jZSIsIm1heFJhZGl1cyIsInZ4IiwidnkiLCJmaWx0ZXJCdWJibGVzIiwiYnViYmxlIiwic2VsZWN0V29yZCIsImNhdGVnb3J5Iiwid29yZCIsIkVtYWlsU3ZjIiwib3B0aW9ucyIsInRleHQiLCJjb250YWN0IiwiZW1haWwiLCJwaG9uZSIsImFib3V0IiwibWVzc2FnZSIsInNlbmRpbmciLCJzZW50Iiwic3RhdHVzIiwiZXJyIiwiZ2V0U2tpbGwiLCJza2lsbENvZGUiLCJjb2RlIiwiJHdpbmRvdyIsImhvYmJ5U2VsZWN0b3JWaXNpYmxlIiwic2VsZWN0ZWRIb2JieSIsInNlbGVjdEhvYmJ5IiwiaG9iYnkiLCJzaG93SG9iYnkiLCJpbmRleCIsImltYWdlcyIsIkxFRlQiLCJSSUdIVCIsImxlbW1pbmdzSW1hZ2UiLCJkZWNvckltYWdlIiwibGVtbWluZ3MiLCJzdGFydGVkIiwiYWN0aW9ucyIsIndhbGsiLCJzdGFydCIsImVuZCIsInJldmVyc2UiLCJodWgiLCJmYWxsIiwiZmx5Iiwic3RvcCIsImNsaW1iIiwiYnVpbGQiLCJwdW5jaCIsImRpZyIsIkxlbW1pbmciLCJpbml0IiwiYWN0IiwiYWN0aW9uIiwiYW5pbWF0aW9uIiwic2NhbGUiLCJoYXRjaCIsIm9wZW4iLCJyZWN0IiwiQ2F0ZWdvcmllc1N2YyIsInNob3dDYXRlZ29yeSIsImdldENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidGFza3MiLCJqIiwidGFzayIsInNlbGVjdENhdGVnb3J5Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdGVkVGFza3MiLCJzZWxlY3RhYmxlVGFza3MiLCJlbnRlcmVkQ2F0ZWdvcnkiLCJuZXdDYXRlZ29yeSIsImZvdW5kIiwiYWRkQ2F0ZWdvcnkiLCJuZXdUYXNrIiwic2VsZWN0VGFzayIsImFkZFRhc2siLCJlbnRlcmVkVGFzayIsInJlbW92ZVRhc2siLCJ1bnNlbGVjdFRhc2siLCJ0YXNrTGlzdCIsInNwbGljZSIsImluZGV4T2YiLCJzdGFydFByaW9yaXRpemluZyIsInNldFByaW9yaXR5TGlzdCIsInBhdGgiLCJnZXRRdWVzdGlvbnMiLCJjb3VudGVyIiwidWkiLCJmaXJlYmFzZXVpIiwiQXV0aFVJIiwic3RhcnRVSSIsImNhbGxiYWNrcyIsInNpZ25JblN1Y2Nlc3MiLCJjcmVkZW50aWFsIiwicmVkaXJlY3RVcmwiLCJnZXRJZFRva2VuIiwiaWRUb2tlbiIsImF1dGhlbnRpY2F0ZSIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJlbWFpbFZlcmlmaWVkIiwiJGVtaXQiLCJtb2RhbCIsInR5cGUiLCJzaWduSW5GYWlsdXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjcmVkIiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJ1aVNob3duIiwic3R5bGUiLCJkaXNwbGF5Iiwic2lnbkluU3VjY2Vzc1VybCIsInNpZ25Jbk9wdGlvbnMiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJQUk9WSURFUl9JRCIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwic2lnbkluRmxvdyIsImV2ZW50IiwicmVzZXQiLCIkZmlsdGVyIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJjcmVhdGUiLCJib2R5IiwicG9zdCIsImZldGNoIiwicG9zdHMiLCJnZXRQb3N0IiwidW5zaGlmdCIsInByaW9yaXR5TGlzdCIsImdldFByaW9yaXR5TGlzdCIsInNlbGVjdGVkUXVlc3Rpb24iLCJjdXJyZW50UXVlc3Rpb24iLCJkb25lIiwibWFrZUNob2ljZSIsImNob2ljZSIsImZpcnN0Q2hvaWNlIiwic2Vjb25kQ2hvaWNlIiwiZ2V0QnV0dG9uVmFsdWUiLCJzZWxlY3RRdWVzdGlvbiIsInF1ZXN0aW9uIiwiZ2V0RmlsdGVyZWRQcmlvcml0eUxpc3QiLCJnZXRDaG9pY2VzTWFkZSIsImNob2ljZXNNYWRlIiwiZ2V0QnV0dG9uQ2xhc3MiLCJzaG93Q2hvaWNlcyIsImNoYXJ0Q2xpY2siLCJjaGFydCIsImdldFNlZ21lbnRzQXRFdmVudCIsInNob3dSZXN1bHRzIiwicmVzcG9uc2l2ZSIsInNlZ21lbnRTaG93U3Ryb2tlIiwic2VnbWVudFN0cm9rZUNvbG9yIiwic2VnbWVudFN0cm9rZVdpZHRoIiwicGVyY2VudGFnZUlubmVyQ3V0b3V0IiwiYW5pbWF0aW9uU3RlcHMiLCJhbmltYXRpb25FYXNpbmciLCJhbmltYXRlUm90YXRlIiwiYW5pbWF0ZVNjYWxlIiwibGVnZW5kVGVtcGxhdGUiLCJjaG9pY2VzIiwidm90ZXMiLCJsYWJlbCIsIm9mZnNldCIsImdlbmRlciIsInNleCIsImlkZW50aXR5Iiwic2V4ZXMiLCJpZGVudGl0aWVzIiwiZGF0ZU9wdGlvbnMiLCJtYXhEYXRlIiwibWluRGF0ZSIsImluaXREYXRlIiwiZGF0ZXBpY2tlck1vZGUiLCJwZXJjZW50YWdlIiwic3RhcnRTbGlkZXIiLCJkcmFnU2xpZGVyIiwic3RvcFNsaWRlciIsInVzZXJuYW1lVG9nZ2xlIiwicGFzc3dvcmRUb2dnbGUiLCJ0b2dnbGVVc2VybmFtZSIsIm5ld1VzZXJuYW1lIiwidXNlcm5hbWUiLCJ0b2dnbGVQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwib3JpZ2luYWxCZyIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiY2hhbmdlVXNlcm5hbWUiLCJ1cGRhdGVVc2VyIiwiJHdhdGNoIiwibG9hZENvdW50cmllcyIsIiRxdWVyeSIsImZsYWciLCJ0aWRiaXQiLCJjb3VudHJ5Iiwic2VsZWN0ZWRTa2lsbCIsInNraWxsc1Zpc2libGUiLCJwcm9qZWN0cyIsImxhYmVscyIsImVtcGxveWVyIiwiY29uY2F0IiwiZmlsdGVyZWRQcm9qZWN0cyIsInByb2plY3QiLCJpbmNsdWRlcyIsInNldFNlbGVjdGVkU2tpbGwiLCJjaGFydE9wdGlvbnMiLCJjdXRvdXRQZXJjZW50YWdlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRvb2x0aXBzIiwiY2hhcnRTdHlsZSIsImltYWdlIiwiVGVuVGhpbmdzU3ZjIiwiZmxhc2giLCJlbGVtZW50IiwiY29sb3IiLCJzZWFyY2giLCJ2YWx1ZXMiLCJrZXlEb3duIiwiaXMiLCJhZGRWYWx1ZSIsImZvY3VzIiwic2VhcmNoTmFtZSIsIm5ld0l0ZW0iLCJzZXRDYXRlZ29yeUZpbHRlciIsImNhdGVnb3J5RmlsdGVyIiwic2V0VXNlckZpbHRlciIsInVzZXJGaWx0ZXIiLCJzZXRVcGRhdGVGaWx0ZXIiLCJ1cGRhdGVGaWx0ZXIiLCJzZXRMYW5ndWFnZUZpbHRlciIsImxhbmd1YWdlRmlsdGVyIiwiZmlsdGVyZWRMaXN0cyIsImxpc3RzIiwiaXNEeW5hbWljIiwiY3JlYXRvciIsImdldExpc3RzIiwiY2F0ZWdvcnlGaWx0ZXJzIiwiZ2V0TGFuZ3VhZ2VzIiwibGFuZ3VhZ2VGaWx0ZXJzIiwibGlzdCIsInNlbGVjdExpc3QiLCJsaXN0T3JkZXIiLCJmaWVsZCIsInZhbHVlT3JkZXIiLCJzb3J0ZXIiLCJzb3J0RmllbGQiLCJzb3J0TGFiZWwiLCJnZXRMYW5ndWFnZUNvdW50IiwiY291bnQiLCJnZXRDYXRlZ29yeUNvdW50IiwiZ2V0VXBkYXRlQ291bnQiLCJ1c2VyRmlsdGVycyIsIkFsbCIsImxpc3QxIiwibGlzdDIiLCJ1c2VycyIsInVzZXJDb3VudCIsImdldExpc3QiLCJzZWxlY3RlZExpc3QiLCJnZXRDYXRlZ29yeUNsYXNzIiwidG9nZ2xlQ2F0ZWdvcnkiLCJjYXRlZ29yeUluZGV4Iiwibm9uRW5nbGlzaEluZGV4IiwiYWRkTGlzdCIsImN1cnJlbnRMYW5ndWFnZSIsImFuc3dlcnMiLCJoYXNEdXBsaWNhdGUiLCJzb21lIiwiYW5zd2VyIiwicmVtb3ZlQWxsQnV0TGV0dGVycyIsImFsZXJ0IiwiYmx1cmIiLCJzYXZlTGlzdCIsInJlcG9ydExpc3QiLCJyZXBvcnRlZCIsInNhdmluZyIsImRlbGV0ZUxpc3QiLCJjb25maXJtIiwibGlzdEJ1dHRvbkNsYXNzIiwiYmx1cmJzIiwiZGVzY3JpcHRpb24iLCJnZXRCbHVyYnMiLCJnZXR0aW5nQmx1cmJzIiwiYWRtaW4iLCJnZXRVc2VycyIsIm9yZGVyIiwib3JkZXJCeSIsImdldFF1ZXVlIiwicXVldWUiLCJnZXRQYXVzZSIsInBhdXNlZCIsInRvZ2dsZUJhbiIsInRvZ2dsZVBhdXNlIiwicGFnZSIsInVuZGVmaW5lZCIsImV4aGF1c3RlZCIsInNldFNlbGVjdGVkTGlzdCIsImdldE1vcmVMaXN0cyIsImFzeW5jIiwidG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIiLCJhbGxDYXRlZ29yaWVzIiwic29ydEJ5IiwibGltaXQiLCJuZXh0UGFnZSIsInVwZGF0ZUxpc3QiLCJ1cGRhdGVzIiwic2V0RGlmZmljdWx0eSIsImRpZmZpY3VsdHkiLCJzZXRDYXRlZ29yeSIsIiRzdGF0ZVBhcmFtcyIsImdhbWUiLCJnZXRHYW1lIiwidGltZVJlbWFpbmluZyIsInRpbWVFeGVyY2lzaW5nIiwidGltZVJlc3RpbmciLCJyZXN0IiwiZXhlcmNpc2luZyIsInNvdW5kcyIsIkF1ZGlvIiwib2ZmIiwic3dpdGNoIiwiZXhlcmNpc2VzIiwic3BsaXQiLCJwcm9ncmVzcyIsIndvcmtvdXQiLCJleGNlcmNpc2VUaW1lIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVyIiwiZXhlcmNpc2UiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRFeGVyY2lzZSIsInBsYXkiLCJkaXJlY3RpdmUiLCIkZG9jdW1lbnQiLCJyZXN0cmljdCIsInNjb3BlIiwiY2xpY2tPdXRzaWRlIiwibGluayIsImVsIiwiYXR0ciIsInRhcmdldCIsImNvbnRhaW5zIiwiJGV2YWwiLCIkc3RhdGUiLCIkY29tcGlsZSIsIiRpbnRlcnBvbGF0ZSIsImdldFN0eWxlIiwidGVtcGxhdGVTdHlsZVVybCIsImhyZWYiLCJyZWwiLCJtYXRjaCIsImVsZW0iLCJ0ZW1wbGF0ZVN0eWxlcyIsImh0bWwiLCJzdGFydFN5bWJvbCIsImVuZFN5bWJvbCIsImFwcGVuZCIsInRvU3RhdGUiLCJ0b1BhcmFtcyIsImZyb21TdGF0ZSIsImZyb21QYXJhbXMiLCJzdGF0ZXMiLCJwYXJlbnQiLCJnZXQiLCJ2aWV3cyIsInZpZXciLCJmbGF0IiwiZ2V0U3R5bGVzIiwiJGh0dHAiLCJzdmMiLCJnZXRUYXNrcyIsInQiLCJtIiwic2h1ZmZsZSIsImdldEltYWdlcyIsImZvbGRlciIsImdldFNvdW5kcyIsImdldEhpZ2hzY29yZSIsImpvaW4iLCJwdXQiLCJkZWxldGUiLCJnZXRVc2VyIiwic2V0VG9rZW4iLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImNyZWF0ZVVzZXIiLCJGaWxlU3ZjIiwiYW5pbWFscyIsImFuaW1hbCIsInNvdW5kIiwic3Vic3RyaW5nIiwiZ2V0UmFuZG9tQW5pbWFscyIsImd1ZXNzIiwiZ2V0U2NvcmUiLCJpc1Njb3JlVmlzaWJsZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQUEsMkJBQUFBLEdBQUEsQ0FDQTtJQUNBQyxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQTtFQUdBQyxPQUFBQSxHQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxDQUFBO0FBR0FDLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsa0JBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFSLDJCQUFBQSxDQUFBUyxNQUFBQSxDQUFBLENBQUFDLE1BQUFBLEVBQUFDLE1BQUFBLEtBQ0FELE1BQUFBLENBQUFFLE9BQUFBLENBQUFELE1BQUFBLENBQUFULE9BQUFBLEVBQUFTLE1BQUFBLENBQUFWLElBQUFBLENBQUFBLEVBQ0FZLElBQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQTtBQUdBLE1BQUFDLGtCQUFBQSxHQUFBLHFDQUFBO0FBRUFWLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEseUJBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFELE9BQUFBLENBQUEsSUFBQUcsTUFBQUEsQ0FBQSxJQUFBRCxrQkFBQUEsR0FBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxFQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBVixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLHFCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBRyxXQUFBQSxFQUFBQSxDQUFBQyxnQkFBQUEsRUFBQUEsQ0FBQUMsdUJBQUFBLEVBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBZCxNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFNBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUFXLEtBQUFBLEVBQUFBO0lBQ0EsT0FBQU4sSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxJQUFBRyxNQUFBQSxDQUFBLEtBQUFELGtCQUFBQSxHQUFBSyxLQUFBQSxHQUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FmLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsWUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQU8sTUFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQUMsV0FBQUEsRUFBQUEsR0FBQVIsSUFBQUEsQ0FBQVMsS0FBQUEsQ0FBQSxDQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBbEIsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxZQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBRCxPQUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUEsQ0FBQUEsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQVIsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxlQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBRCxPQUFBQSxDQUFBLEdBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQUEsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQVIsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxjQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBZSxJQUFBQSxFQUFBWCxPQUFBQSxFQUFBQTtJQUVBLEtBREEsSUFBQVksYUFBQUEsR0FBQVgsSUFBQUEsRUFDQVksQ0FBQUEsR0FBQSxDQUFBLEVBQUFBLENBQUFBLEdBQUFGLElBQUFBLENBQUFHLE1BQUFBLEVBQUFELENBQUFBLEVBQUFBLEVBQ0FELGFBQUFBLEdBQUFBLGFBQUFBLENBQUFaLE9BQUFBLENBQUFXLElBQUFBLENBQUFFLENBQUFBLENBQUFBLEVBQUFiLE9BQUFBLENBQUFhLENBQUFBLENBQUFBLENBQUFBO0lBRUEsT0FBQUQsYUFDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FwQixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFVBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFjLFlBQUFBLENBQUEsQ0FBQSxVQUFBLEVBQUEsU0FBQSxDQUFBLEVBQUEsU0FBQSxDQUFBLENBQUFBLFlBQUFBLENBQUF4QixPQUFBQSxFQUFBLE9BQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FDLE1BQUFBLENBQUFDLGNBQUFBLENBQUF1QixNQUFBQSxDQUFBckIsU0FBQUEsRUFBQSxjQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBZ0IsUUFBQUEsRUFBQUEsQ0FBQWpCLE9BQUFBLENBQUEsdUJBQUEsRUFBQSxHQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBUixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBdUIsTUFBQUEsQ0FBQXJCLFNBQUFBLEVBQUEsZ0JBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUFzQixRQUFBQSxFQUFBQTtJQUVBLE9BREFBLFFBQUFBLEtBQUFBLFFBQUFBLEdBQUEsQ0FBQSxDQUFBLEVBQ0EsR0FBQSxDQUFBLEdBQUEsR0FBQWpCLElBQUFBLEVBQUFrQixPQUFBQSxDQUFBRCxRQUFBQSxDQUFBQSxHQUNBO0VBQUE7QUFBQSxDQUFBLENBQUE7QUFHQSxNQUFBRSxVQUFBQSxHQUFBQSxDQUFBQyxHQUFBQSxFQUFBQyxTQUFBQSxLQUFBQTtFQUNBLElBQUFDLEdBQUFBLEdBQUEsRUFBQTtFQUNBLEtBQUEsTUFBQUMsR0FBQUEsSUFBQUgsR0FBQUEsRUFDQUUsR0FBQUEsQ0FBQUUsSUFBQUEsQ0FBQSxDQUFBRCxHQUFBQSxFQUFBSCxHQUFBQSxDQUFBRyxHQUFBQSxDQUFBQSxDQUFBQSxDQUFBQTtFQUVBRCxHQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUFDLENBQUFBLEVBQUFDLENBQUFBLEtBQUFOLFNBQUFBLEdBQUFLLENBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUFDLENBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUFBLENBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUFELENBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7RUFDQSxJQUFBRSxTQUFBQSxHQUFBLENBQUEsQ0FBQTtFQUdBLE9BRkFOLEdBQUFBLENBQUFPLE9BQUFBLENBQUFDLElBQUFBLElBQUFGLFNBQUFBLENBQUFFLElBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQUEsSUFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUVBRixTQUFBO0FBQUEsQ0FBQTtBQzdxQkFHLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxFQUFBLENBQ0EsV0FBQSxFQUNBLGNBQUEsRUFDQSxXQUFBLEVBQ0EsWUFBQSxFQUNBLFlBQUEsRUFDQSxhQUFBLEVBQ0EsYUFBQSxFQUNBLFVBQUEsRUFDQSxZQUFBLEVBQ0EsaUJBQUEsQ0FBQSxDQUFBLEVDakJBRCxPQUFBQSxDQUNBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBQyxNQUFBQSxDQUFBLFVBQ0FDLGNBQUFBLEVBQ0FDLGtCQUFBQSxFQUNBQyxtQkFBQUEsRUFDQUMsaUJBQUFBLEVBQUFBO0VBRUFGLGtCQUFBQSxDQUFBRyxTQUFBQSxDQUFBLE9BQUEsQ0FBQSxFQUNBRixtQkFBQUEsQ0FBQUgsTUFBQUEsQ0FBQU0sVUFBQUEsQ0FBQUEsQ0FBQSxDQUFBLENBQUEsRUFFQUwsY0FBQUEsQ0FDQU0sS0FBQUEsQ0FBQSxNQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxPQUFBO0lBQ0FDLFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxRQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FDLFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FDLFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxhQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUUsVUFBQUEsRUFBQSxZQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxXQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxhQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsVUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsV0FBQTtJQUNBRSxVQUFBQSxFQUFBLGNBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE1BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLE9BQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsaUJBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsb0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGtCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxtQkFBQTtJQUNBRSxVQUFBQSxFQUFBLHFCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxtQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsY0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGlCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxhQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsRUFHQUwsaUJBQUFBLENBQUFPLFNBQUFBLENBQUE7SUFDQUMsT0FBQUEsRUFBQUEsQ0FBQSxDQUFBO0lBQ0FDLFdBQUFBLEVBQUFBLENBQUE7RUFBQSxDQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUNoSkFmLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FlLE9BQUFBLENBQUEsY0FBQSxFQUFBLFVBQUFDLFVBQUFBLEVBQUFDLFFBQUFBLEVBQUFBO0VBU0EsSUFBQUMsVUFBQUE7SUFDQUMsT0FBQUEsR0FBQSxTQUFBQSxDQUFBLEVBQUE7TUFBQSxDQUNBRCxVQUFBQSxHQUFBLElBQUFFLFNBQUFBLENBVEEsUUFBQSxLQUFBQyxNQUFBQSxDQUFBQyxRQUFBQSxDQUFBQyxRQUFBQSxHQUNBLFFBQUEsR0FBQUYsTUFBQUEsQ0FBQUMsUUFBQUEsQ0FBQUUsSUFBQUEsR0FFQSxPQUFBLEdBQUFILE1BQUFBLENBQUFDLFFBQUFBLENBQUFFLElBQUFBLENBQUFBLEVBUUFDLE1BQUFBLEdBQUEsWUFBQTtRQUNBQyxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBLHFCQUFBLENBQ0E7TUFBQSxDQUFBLEVBRUFULFVBQUFBLENBQUFVLE9BQUFBLEdBQUEsVUFBQUMsQ0FBQUEsRUFBQUE7UUFDQUgsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQSxtQ0FBQSxDQUFBLEVBQ0FWLFFBQUFBLENBQUFFLE9BQUFBLEVBQUEsR0FBQSxDQUNBO01BQUEsQ0FBQSxFQUVBRCxVQUFBQSxDQUFBWSxPQUFBQSxHQUFBLFVBQUFELENBQUFBLEVBQUFBO1FBQ0FILE9BQUFBLENBQUFDLEdBQUFBLENBQUEsU0FBQSxHQUFBRSxDQUFBQSxHQUFBLFlBQUEsR0FBQVgsVUFBQUEsQ0FBQWEsVUFBQUEsQ0FDQTtNQUFBLENBQUEsRUFFQWIsVUFBQUEsQ0FBQWMsU0FBQUEsR0FBQSxVQUFBSCxDQUFBQSxFQUFBQTtRQUNBLElBQUFJLE9BQUFBLEdBQUFDLElBQUFBLENBQUFDLEtBQUFBLENBQUFOLENBQUFBLENBQUFPLElBQUFBLENBQUFBO1FBQ0FwQixVQUFBQSxDQUFBcUIsVUFBQUEsQ0FBQSxLQUFBLEdBQUFKLE9BQUFBLENBQUFLLEtBQUFBLEVBQUFMLE9BQUFBLENBQUFHLElBQUFBLENBQ0E7TUFBQSxDQUNBO0lBQUEsQ0FBQTtFQUVBcEUsSUFBQUEsQ0FBQXVFLElBQUFBLEdBQUEsVUFBQUQsS0FBQUEsRUFBQUYsSUFBQUEsRUFBQUE7SUFDQSxJQUFBSSxJQUFBQSxHQUFBTixJQUFBQSxDQUFBTyxTQUFBQSxDQUFBO01BQUFILEtBQUFBO01BQUFGO0lBQUFBLENBQUFBLENBQUFBO0lBQ0FsQixVQUFBQSxDQUFBcUIsSUFBQUEsQ0FBQUMsSUFBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQXhFLElBQUFBLENBQUFtRCxPQUFBQSxHQUFBQSxPQUVBO0FBQUEsQ0FBQSxDQUFBLENBQUF1QixHQUFBQSxDQUFBLFVBQUFDLFlBQUFBLEVBQUFBO0VBQ0FBLFlBQUFBLENBQUF4QixPQUFBQSxFQUNBO0FBQUEsQ0FBQSxDQUFBLEVDMUNBcEIsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQVcsVUFBQUEsQ0FBQSxTQUFBLEVBQUEsVUFBQWlDLE1BQUFBLEVBQUFDLFNBQUFBLEVBQUFDLFdBQUFBLEVBQUFDLE9BQUFBLEVBQUFBO0VBeUdBLFNBQUFDLEtBQUFBLENBQUFDLElBQUFBLEVBQUFBO0lBQ0FMLE1BQUFBLENBQUFNLFFBQUFBLEtBQ0E3QixNQUFBQSxDQUFBOEIsWUFBQUEsQ0FBQUYsSUFBQUEsR0FBQUEsSUFBQUEsQ0FBQUcsR0FBQUEsRUFDQVIsTUFBQUEsQ0FBQU0sUUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0FOLE1BQUFBLENBQUFTLFdBQUFBLEdBQUFKLElBQUFBLEVBQ0FMLE1BQUFBLENBQUFQLFVBQUFBLENBQUEsT0FBQSxDQUFBLENBRUE7RUFBQTtFQS9HQVgsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FDQSxzQkFBQSxFQUNBLG1MQUFBLENBQUEsRUFFQUQsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FDQSx5U0FBQSxDQUFBLEVBRUFELE9BQUFBLENBQUFDLEdBQUFBLENBQ0EsZ0lBQUEsQ0FBQSxFQVdBMkIsQ0FBQUEsQ0FBQWpDLE1BQUFBLENBQUFBLENBQUFrQyxJQUFBQSxDQUFBLFlBQUE7SUFDQUQsQ0FBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQUUsT0FBQUEsQ0FBQSxNQUFBLENBQUEsRUFDQUYsQ0FBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQUcsTUFBQUEsQ0FBQSxNQUFBLENBQ0E7RUFBQSxDQUFBLENBQUEsRUFFQUgsQ0FBQUEsQ0FBQSxnQkFBQSxDQUFBLENBQUFJLEVBQUFBLENBQUEsUUFBQSxFQUFBLHdCQUFBLEVBQUEsWUFBQTtJQUNBSixDQUFBQSxDQUFBdEYsSUFBQUEsQ0FBQUEsQ0FBQTJGLE9BQUFBLENBQUEsSUFBQSxDQUFBLENBQUFDLFdBQUFBLENBQUEsUUFBQSxFQUFBNUYsSUFBQUEsQ0FBQTZGLE9BQUFBLENBQ0E7RUFBQSxDQUFBLENBQUEsRUFFQVAsQ0FBQUEsQ0FBQVEsUUFBQUEsQ0FBQUEsQ0FBQUosRUFBQUEsQ0FBQSxPQUFBLEVBQUEsY0FBQSxFQUFBLFVBQUE3QixDQUFBQSxFQUFBQTtJQUNBQSxDQUFBQSxDQUFBa0MsZUFBQUEsRUFDQTtFQUFBLENBQUEsQ0FBQSxFQUVBbkIsTUFBQUEsQ0FBQW9CLFlBQUFBLEdBQUEsQ0FBQSxFQUNBcEIsTUFBQUEsQ0FBQXFCLEtBQUFBLEdBQUEsSUFBQUMsSUFBQUEsSUFDQXRCLE1BQUFBLENBQUF1QixJQUFBQSxHQUFBdkIsTUFBQUEsQ0FBQXFCLEtBQUFBLENBQUFHLFdBQUFBLEVBQUFBLEVBQ0F4QixNQUFBQSxDQUFBeUIsTUFBQUEsR0FBQUMsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUFELElBQUFBLENBQUFELE1BQUFBLEVBQUFBLENBQUFBLEVBRUF6QixNQUFBQSxDQUFBNEIsU0FBQUEsR0FBQSxZQUFBO0lBQ0FsQixDQUFBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBbUIsSUFBQUEsRUFBQUEsRUFDQW5CLENBQUFBLENBQUEsVUFBQSxDQUFBLENBQUFvQixJQUFBQSxFQUFBQSxFQUNBQyxVQUFBQSxDQUFBLFlBQUE7TUFDQXJCLENBQUFBLENBQUEsVUFBQSxDQUFBLENBQUFFLE9BQUFBLENBQUEsTUFBQSxDQUFBLEVBQ0FGLENBQUFBLENBQUEsVUFBQSxDQUFBLENBQUFHLE1BQUFBLENBQUEsTUFBQSxDQUNBO0lBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQSxFQUNBYixNQUFBQSxDQUFBb0IsWUFBQUEsR0FBQXBCLE1BQUFBLENBQUFvQixZQUFBQSxHQUFBLENBQUEsR0FBQXBCLE1BQUFBLENBQUFvQixZQUFBQSxHQUFBLENBQUEsR0FBQXBCLE1BQUFBLENBQUFvQixZQUFBQSxHQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFWLENBQUFBLENBQUFzQixPQUFBQSxDQUFBLGNBQUEsRUFBQSxVQUFBeEMsSUFBQUEsRUFBQUE7SUFDQVEsTUFBQUEsQ0FBQWlDLE1BQUFBLEdBQUF6QyxJQUFBQSxDQUFBMEMsTUFBQUEsQ0FBQSxVQUFBQyxLQUFBQSxFQUFBQTtNQUNBLE9BQUFBLEtBQUFBLENBQUFsRSxPQUNBO0lBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxDQUFBLEVBRUF5QyxDQUFBQSxDQUFBc0IsT0FBQUEsQ0FBQSxlQUFBLEVBQUEsVUFBQXhDLElBQUFBLEVBQUFBO0lBQ0FRLE1BQUFBLENBQUFvQyxPQUFBQSxHQUFBNUMsSUFDQTtFQUFBLENBQUEsQ0FBQSxFQUVBa0IsQ0FBQUEsQ0FBQXNCLE9BQUFBLENBQUEsa0JBQUEsRUFBQSxVQUFBeEMsSUFBQUEsRUFBQUE7SUFDQVEsTUFBQUEsQ0FBQXFDLElBQUFBLEdBQUE3QyxJQUFBQSxFQUNBUSxNQUFBQSxDQUFBcUMsSUFBQUEsQ0FBQXBGLE9BQUFBLENBQUEsVUFBQXFGLEdBQUFBLEVBQUFBO01BQ0FBLEdBQUFBLENBQUFDLFNBQUFBLEdBQUEsSUFBQWpCLElBQUFBLENBQUFnQixHQUFBQSxDQUFBQyxTQUFBQSxDQUFBQSxFQUNBRCxHQUFBQSxDQUFBRSxPQUFBQSxLQUFBRixHQUFBQSxDQUFBRSxPQUFBQSxHQUFBLElBQUFsQixJQUFBQSxDQUFBZ0IsR0FBQUEsQ0FBQUUsT0FBQUEsQ0FBQUEsQ0FDQTtJQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsQ0FBQSxFQUVBOUIsQ0FBQUEsQ0FBQXNCLE9BQUFBLENBQUEsZ0JBQUEsRUFBQSxVQUFBeEMsSUFBQUEsRUFBQUE7SUFDQVEsTUFBQUEsQ0FBQXlDLFFBQUFBLEdBQUFqRCxJQUNBO0VBQUEsQ0FBQSxDQUFBLEVBRUFRLE1BQUFBLENBQUEwQyxXQUFBQSxHQUFBLFVBQUFKLEdBQUFBLEVBQUFBO0lBQ0EsT0FBQUEsR0FBQUEsQ0FBQUMsU0FBQUEsQ0FBQWYsV0FBQUEsRUFBQUEsSUFBQWMsR0FBQUEsQ0FBQUUsT0FBQUEsR0FBQSxLQUFBLEdBQUFGLEdBQUFBLENBQUFFLE9BQUFBLENBQUFoQixXQUFBQSxFQUFBQSxHQUFBLFVBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQXhCLE1BQUFBLENBQUEyQyxTQUFBQSxHQUFBekMsV0FBQUEsQ0FBQXlDLFNBQUFBLEVBRUEzQyxNQUFBQSxDQUFBNEMsZ0JBQUFBLEdBQUExQyxXQUFBQSxDQUFBMkMsV0FBQUEsRUFBQUEsRUFFQTdDLE1BQUFBLENBQUE4QyxjQUFBQSxHQUFBLFVBQUFDLFFBQUFBLEVBQUFBO0lBQ0EvQyxNQUFBQSxDQUFBNEMsZ0JBQUFBLEdBQUExQyxXQUFBQSxDQUFBOEMsV0FBQUEsQ0FBQUQsUUFBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQS9DLE1BQUFBLENBQUFpRCxRQUFBQSxHQUFBLFVBQUFoRSxDQUFBQSxFQUFBaUUsS0FBQUEsRUFBQUE7SUFDQSxJQUFBQyxJQUFBQSxHQUFBbEUsQ0FBQUEsQ0FBQW1FLE9BQUFBLEdBQUEsSUFBQTtNQUNBQyxHQUFBQSxHQUFBcEUsQ0FBQUEsQ0FBQXFFLE9BQUFBLEdBQUEsRUFBQSxHQUFBLElBQUE7SUFFQXBDLFFBQUFBLENBQUFxQyxjQUFBQSxDQUFBTCxLQUFBQSxDQUFBQTtJQU1BLE9BSkF4QyxDQUFBQSxDQUFBLEdBQUEsR0FBQXdDLEtBQUFBLENBQUFBLENBQUFNLEdBQUFBLENBQUEsTUFBQSxFQUFBTCxJQUFBQSxDQUFBQSxFQUNBekMsQ0FBQUEsQ0FBQSxHQUFBLEdBQUF3QyxLQUFBQSxDQUFBQSxDQUFBTSxHQUFBQSxDQUFBLEtBQUEsRUFBQUgsR0FBQUEsQ0FBQUEsRUFFQTNDLENBQUFBLENBQUEsR0FBQSxHQUFBd0MsS0FBQUEsQ0FBQUEsQ0FBQU8sTUFBQUEsRUFBQUEsRUFBQUEsQ0FDQSxDQUNBO0VBQUEsQ0FBQSxFQUVBaEYsTUFBQUEsQ0FBQThCLFlBQUFBLENBQUFGLElBQUFBLElBQ0FGLE9BQUFBLENBQUFDLEtBQUFBLENBQUEzQixNQUFBQSxDQUFBOEIsWUFBQUEsQ0FBQUYsSUFBQUEsQ0FBQUEsQ0FBQXFELElBQUFBLENBQUEsVUFBQUMsUUFBQUEsRUFBQUE7SUFDQXZELEtBQUFBLENBQUF1RCxRQUFBQSxDQUFBbkUsSUFBQUEsQ0FDQTtFQUFBLENBQUEsQ0FBQSxFQUdBUSxNQUFBQSxDQUFBNEQsR0FBQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQUMsQ0FBQUEsRUFBQXhELElBQUFBLEVBQUFBO0lBQ0FELEtBQUFBLENBQUFDLElBQUFBLENBQ0E7RUFBQSxDQUFBLENBQUEsRUFXQUwsTUFBQUEsQ0FBQTRELEdBQUFBLENBQUEsUUFBQSxFQUFBLFVBQUFDLENBQUFBLEVBQUF4RCxJQUFBQSxFQUFBQTtJQUNBTCxNQUFBQSxDQUFBUyxXQUFBQSxHQUFBSixJQUFBQSxFQUNBTCxNQUFBQSxDQUFBUyxXQUFBQSxDQUFBcUQsU0FBQUEsR0FBQSxJQUFBeEMsSUFBQUEsQ0FBQXRCLE1BQUFBLENBQUFTLFdBQUFBLENBQUFxRCxTQUFBQSxDQUFBQSxFQUNBOUQsTUFBQUEsQ0FBQStELE9BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBaEMsVUFBQUEsQ0FBQSxZQUFBO01BQ0FyQixDQUFBQSxDQUFBLGVBQUEsQ0FBQSxDQUFBRSxPQUFBQSxDQUFBLE1BQUEsQ0FDQTtJQUFBLENBQUEsRUFBQSxHQUFBLENBQ0E7RUFBQSxDQUFBLENBQUEsRUFFQVosTUFBQUEsQ0FBQTRELEdBQUFBLENBQUEsU0FBQSxFQUFBLFVBQUFDLENBQUFBLEVBQUF4RCxJQUFBQSxFQUFBQTtJQUNBTCxNQUFBQSxDQUFBK0QsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0FyRCxDQUFBQSxDQUFBLGVBQUEsQ0FBQSxDQUFBbUIsSUFBQUEsRUFDQTtFQUFBLENBQUEsQ0FBQSxFQUVBN0IsTUFBQUEsQ0FBQTRELEdBQUFBLENBQUEsUUFBQSxFQUFBLFVBQUFDLENBQUFBLEVBQUF4RCxJQUFBQSxFQUFBQTtJQUNBTCxNQUFBQSxDQUFBK0QsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0FoQyxVQUFBQSxDQUFBLFlBQUE7TUFDQXJCLENBQUFBLENBQUEsZUFBQSxDQUFBLENBQUFFLE9BQUFBLENBQUEsTUFBQSxDQUNBO0lBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBLENBQUEsQ0FBQSxFQUVBWixNQUFBQSxDQUFBZ0UsTUFBQUEsR0FBQSxZQUFBO0lBQ0FDLFFBQUFBLENBQ0FDLElBQUFBLEVBQUFBLENBQ0FDLE9BQUFBLEVBQUFBLENBQ0FULElBQUFBLENBQUEsWUFBQTtNQUVBMUQsTUFBQUEsQ0FBQU0sUUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0E3QixNQUFBQSxDQUFBOEIsWUFBQUEsQ0FBQTZELEtBQUFBLEVBQUFBLEVBQ0FwRSxNQUFBQSxDQUFBUCxVQUFBQSxDQUFBLFFBQUEsQ0FDQTtJQUFBLENBQUEsQ0FBQSxDQUNBNEUsS0FBQUEsQ0FBQSxVQUFBQyxLQUFBQSxFQUFBQSxDQUVBLENBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQXRFLE1BQUFBLENBQUF1RSxVQUFBQSxHQUFBLFVBQUFDLElBQUFBLEVBQUFBO0lBR0EsT0FBQSxDQURBQSxJQUFBQSxHQUFBLElBQUFsRCxJQUFBQSxDQUFBa0QsSUFBQUEsQ0FBQUEsRUFDQUMsT0FBQUEsRUFBQUEsR0FBQSxHQUFBLEdBRkEsQ0FBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsQ0FBQSxDQUVBRCxJQUFBQSxDQUFBRSxRQUFBQSxFQUFBQSxDQUFBQSxHQUFBLEdBQUEsR0FBQUYsSUFBQUEsQ0FBQWhELFdBQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUEzRyxNQUFBQSxDQUFBQyxTQUFBQSxDQUFBNkosVUFBQUEsR0FBQSxZQUFBO0lBQ0EsT0FBQXZKLElBQUFBLENBQUFPLE1BQUFBLENBQUEsQ0FBQSxDQUFBLENBQUFDLFdBQUFBLEVBQUFBLEdBQUFSLElBQUFBLENBQUFTLEtBQUFBLENBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FDQTtBQUFBLENBQUEsQ0FBQSxFQy9KQXNCLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FXLFVBQUFBLENBQUEsZUFBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBNEUsT0FBQUEsRUFBQUE7RUFFQTVFLE1BQUFBLENBQUE2RSxRQUFBQSxHQUFBQSxDQUFBLENBQUE7RUFDQSxJQUFBQyxNQUFBQSxHQUFBNUQsUUFBQUEsQ0FBQXFDLGNBQUFBLENBQUEsZ0JBQUEsQ0FBQTtJQUNBd0IsR0FBQUEsR0FBQUQsTUFBQUEsQ0FBQUUsVUFBQUEsQ0FBQSxJQUFBLENBQUE7RUFDQUQsR0FBQUEsQ0FBQUUsSUFBQUEsR0FBQSxvQkFBQSxFQUNBRixHQUFBQSxDQUFBRyxTQUFBQSxHQUFBLEtBQUEsRUFDQUgsR0FBQUEsQ0FBQUksU0FBQUEsR0FBQSxRQUFBO0VBQ0EsSUFBQUMsS0FBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsU0FBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsUUFBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsVUFBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsR0FBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsU0FBQUEsR0FBQSxFQUFBO0lBQ0FDLEtBQUFBLEdBQUFoRSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBZ0UsU0FBQUEsQ0FBQUE7SUFDQUUsWUFBQUEsR0FBQSxDQUNBO01BQ0FDLElBQUFBLEVBQUEsT0FBQTtNQUNBQyxZQUFBQSxFQUFBLGFBQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0FqSyxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQXlKLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBQSxTQUFBQSxDQUFBQyxRQUFBQSxJQUFBLEdBQ0E7TUFBQTtJQUFBLENBQUEsRUFFQTtNQUNBVixJQUFBQSxFQUFBLFVBQUE7TUFDQUMsWUFBQUEsRUFBQSxZQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBakssQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUF5SixHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUUsUUFBQUEsR0FBQSxDQUFBLEtBQ0FGLFNBQUFBLENBQUFHLFlBQUFBLElBQUEsQ0FBQSxDQUVBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQVosSUFBQUEsRUFBQSxPQUFBO01BQ0FDLFlBQUFBLEVBQUEsZ0JBQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBO1FBQ0FqSyxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQXlKLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBQSxTQUFBQSxDQUFBSSxLQUFBQSxJQUFBLENBQ0E7TUFBQTtJQUFBLENBQUEsRUFFQTtNQUNBYixJQUFBQSxFQUFBLFFBQUE7TUFDQUMsWUFBQUEsRUFBQSxRQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBakssQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFB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RCxNQUFBQSxFQUFBQTtNQUNBcUcsQ0FBQUEsR0FBQSxDQUFBO0lBZ0JBLE9BZkFxQyxLQUFBQSxJQUFBLENBQUEsSUFDQXRDLENBQUFBLEdBQUFuRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBcUQsTUFBQUEsQ0FBQTRDLEtBQUFBLEVBRUFJLENBQUFBLEdBREFBLENBQUFBLElBQUEsQ0FBQSxHQUNBLENBQUEsR0FBQUgsTUFBQUEsR0FFQTdDLE1BQUFBLENBQUE2QyxNQUFBQSxLQUdBRyxDQUFBQSxHQUFBcEcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQXFELE1BQUFBLENBQUE2QyxNQUFBQSxFQUVBRSxDQUFBQSxHQURBdUMsS0FBQUEsSUFBQSxDQUFBLEdBQ0EsQ0FBQSxHQUFBMUMsS0FBQUEsR0FFQTVDLE1BQUFBLENBQUE0QyxLQUFBQSxDQUFBQSxFQUdBLENBQUFHLENBQUFBLEVBQUFDLENBQUFBLENBQ0E7RUFBQTtFQUVBLFNBQUFlLEdBQUFBLENBQUF3QixPQUFBQSxFQUFBQyxPQUFBQSxFQUFBQTtJQUNBLE9BQUFELE9BQUFBLENBQUF0QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdUMsT0FBQUEsQ0FBQXZDLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUF1QyxPQUFBQSxDQUFBNUMsS0FBQUEsSUFDQTRDLE9BQUFBLENBQUF2QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBc0MsT0FBQUEsQ0FBQXRDLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUFzQyxPQUFBQSxDQUFBM0MsS0FBQUEsSUFDQTJDLE9BQUFBLENBQUF0QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdUMsT0FBQUEsQ0FBQXZDLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUF1QyxPQUFBQSxDQUFBM0MsTUFBQUEsSUFDQTJDLE9BQUFBLENBQUF2QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBc0MsT0FBQUEsQ0FBQXRDLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUFzQyxPQUFBQSxDQUFBMUMsTUFDQTtF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QSxHQUFBLEdBQUE0SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTdKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTRKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBN0osSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBNEosS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFDQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FBQSxNQUFBLEVBQUEsTUFBQSxHQUFBNUosSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBNEosS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE3SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUE0SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTdKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTRKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FILFFBQUFBLENBQUFFLFlBQUFBLENBQUEsS0FBQSxFQUFBLE1BQUEsR0FBQTVKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTRKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBN0osSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBNEosS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE3SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUE0SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUFBLE1BQUEsRUFBQSxNQUFBLEdBQUE1SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFB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LENBQUE7TUFBQSxDQUFBO01BRUFFLElBQUFBLEVBQUE7UUFDQUosS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxFQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFHLEdBQUFBLEVBQUE7UUFDQUwsS0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxFQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFJLElBQUFBLEVBQUE7UUFDQU4sS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFLLEtBQUFBLEVBQUE7UUFDQVAsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFNLEtBQUFBLEVBQUE7UUFDQVIsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFPLEtBQUFBLEVBQUE7UUFDQVQsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFRLEdBQUFBLEVBQUE7UUFDQVYsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXpJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQTJJLE9BQUFBLEVBQUFBLENBQUE7TUFBQTtJQUFBLENBQUE7RUFJQSxTQUFBUyxPQUFBQSxDQUFBQyxJQUFBQSxFQUFBQTtJQUNBaFUsSUFBQUEsQ0FBQTJNLFFBQUFBLEdBQUEsQ0FBQXJHLElBQUFBLENBQUFDLEtBQUFBLENBQUFELElBQUFBLENBQUFELE1BQUFBLEVBQUFBLElBQUFxRCxNQUFBQSxDQUFBNEMsS0FBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsRUFBQWhHLElBQUFBLENBQUFDLEtBQUFBLENBQUFELElBQUFBLENBQUFELE1BQUFBLEVBQUFBLElBQUFxRCxNQUFBQSxDQUFBNkMsTUFBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBdk0sSUFBQUEsQ0FBQXFCLFNBQUFBLEdBQUEsQ0FBQSxHQUFBaUYsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQSxDQUFBLEdBQUF1TSxJQUFBQSxHQUFBQyxLQUFBQSxFQUNBN1MsSUFBQUEsQ0FBQWlVLEdBQUFBLEdBQUEsVUFBQUMsTUFBQUEsRUFBQUE7TUFDQWxVLElBQUFBLENBQUFrVSxNQUFBQSxHQUFBaEIsT0FBQUEsQ0FBQWdCLE1BQUFBLENBQUFBLEVBQ0FsVSxJQUFBQSxDQUFB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QSxDQUNBO0lBQUEsQ0FBQSxDQUFBLENBRUE7RUFBQSxDQUFBLEVBR0FRLE1BQUFBLENBQUF1WSxNQUFBQSxDQUFBLDBCQUFBLEVBQUEsVUFBQXRjLE1BQUFBLEVBQUFBO0lBQ0ErRCxNQUFBQSxDQUFBc1ksVUFBQUEsRUFDQTtFQUFBLENBQUEsQ0FBQSxFQUVBdFksTUFBQUEsQ0FBQXdZLGFBQUFBLEdBQUEsVUFBQUMsTUFBQUEsRUFBQUE7SUE0UEEsT0EzUEEsQ0FDQTtNQUFBN1MsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBLFNBQUE7TUFBQUMsTUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1MsSUFBQUEsRUFBQSxzQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxhQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLHFCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsWUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxXQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGdCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsV0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxPQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsWUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSx3QkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxVQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFlBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxjQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsa0JBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGlDQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGtDQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSx5QkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSx1Q0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSwwQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxPQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsZUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxjQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxPQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsWUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxNQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFlBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxrQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGdCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsb0JBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsT0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxnQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE1BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsNkJBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsaUNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsZUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsc0RBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxPQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFdBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsV0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsWUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxtQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLDhDQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFdBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsTUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxlQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsV0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxtQ0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxVQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsT0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFdBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsT0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxnQ0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxNQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLDJCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsT0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxPQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsWUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxVQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSx1QkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSx3Q0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxvQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGdCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFlBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsa0NBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxhQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsV0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsV0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxZQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsT0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsc0JBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsWUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSw0QkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxZQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGtCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLDRDQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE1BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxVQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsMEJBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsWUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxZQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFlBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsT0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxXQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsWUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsT0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxnQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFdBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsYUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsT0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxNQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsTUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE1BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsa0JBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsa0JBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsYUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxVQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsMkJBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxhQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLHFCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsT0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxVQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsb0JBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxjQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGlCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFlBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsT0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFdBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsOENBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSx3QkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxVQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsWUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxhQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLHVCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsMkJBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsc0JBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsV0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSwwQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxNQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLDZCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE1BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxZQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsYUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxjQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsT0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLHFCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsMkJBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsOEJBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLHNDQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLDBCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsWUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxVQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGtDQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLG1DQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLHlCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLHNCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxtQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxPQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxjQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsQ0FBQSxDQUVBeFcsTUFBQUEsQ0FBQSxVQUFBMFcsT0FBQUEsRUFBQUE7TUFDQSxPQUFBLENBQUEsQ0FBQSxJQUFBQSxPQUFBQSxDQUFBaFQsSUFBQUEsQ0FBQXJLLFdBQUFBLEVBQUFBLENBQUE0VixPQUFBQSxDQUFBc0gsTUFBQUEsQ0FBQWxkLFdBQUFBLEVBQUFBLENBQ0E7SUFBQSxDQUFBLENBQ0E7RUFBQSxDQUdBO0FBQUEsQ0FBQSxDQUFBLEVDcllBNEIsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQVcsVUFBQUEsQ0FBQSxZQUFBLEVBQUEsVUFBQWlDLE1BQUFBLEVBQUF3TixPQUFBQSxFQUFBQTtFQUVBeE4sTUFBQUEsQ0FBQTZZLGFBQUFBLEdBQUEsQ0FBQSxFQUNBN1ksTUFBQUEsQ0FBQThZLGFBQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBOVksTUFBQUEsQ0FBQStZLFFBQUFBLEdBQUEsRUFBQSxFQUVBL1ksTUFBQUEsQ0FBQWdaLE1BQUFBLEdBQUEsQ0FBQSxnQkFBQSxFQUFBLGdCQUFBLEVBQUEsa0JBQUEsQ0FBQSxFQUNBaFosTUFBQUEsQ0FBQVIsSUFBQUEsR0FBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLEVBRUFrQixDQUFBQSxDQUFBc0IsT0FBQUEsQ0FBQSxrQkFBQSxFQUFBLFVBQUF4QyxJQUFBQSxFQUFBQTtJQUNBUSxNQUFBQSxDQUFBK1ksUUFBQUEsR0FBQXZaLElBQUFBLENBQUF4RSxNQUFBQSxDQUFBLENBQUErZCxRQUFBQSxFQUFBRSxRQUFBQSxLQUNBQSxRQUFBQSxDQUFBRixRQUFBQSxHQUFBRSxRQUFBQSxDQUFBRixRQUFBQSxDQUFBRyxNQUFBQSxDQUFBSCxRQUFBQSxDQUFBQSxHQUNBQSxRQUFBQSxFQUNBLENBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxDQUFBLEVBRUEvWSxNQUFBQSxDQUFBbVosZ0JBQUFBLEdBQUEsTUFBQW5aLE1BQUFBLENBQUErWSxRQUFBQSxDQUNBN1csTUFBQUEsQ0FBQWtYLE9BQUFBLElBQUFBLE9BQUFBLENBQUFuWCxNQUFBQSxJQUFBbVgsT0FBQUEsQ0FBQW5YLE1BQUFBLENBQUFvWCxRQUFBQSxDQUFBclosTUFBQUEsQ0FBQTZZLGFBQUFBLENBQUF0TCxJQUFBQSxDQUFBQSxDQUFBQSxFQUVBN00sQ0FBQUEsQ0FBQXNCLE9BQUFBLENBQUEsY0FBQSxFQUFBLFVBQUF4QyxJQUFBQSxFQUFBQTtJQUVBLE1BQUF5QyxNQUFBQSxHQUFBekMsSUFBQUEsQ0FDQTBDLE1BQUFBLENBQUFDLEtBQUFBLElBQUFBLEtBQUFBLENBQUFsRSxPQUFBQSxDQUFBQTtJQUVBK0IsTUFBQUEsQ0FBQStQLFVBQUFBLEdBQUE5TixNQUFBQSxDQUNBakgsTUFBQUEsQ0FBQSxVQUFBK1UsVUFBQUEsRUFBQTVOLEtBQUFBLEVBQUFBO01BTUEsT0FMQTROLFVBQUFBLENBQUE1TixLQUFBQSxDQUFBb0ssUUFBQUEsQ0FBQUEsR0FHQXdELFVBQUFBLENBQUE1TixLQUFBQSxDQUFBb0ssUUFBQUEsQ0FBQUEsQ0FBQTNQLElBQUFBLENBQUF1RixLQUFBQSxDQUFBQSxHQUZBNE4sVUFBQUEsQ0FBQTVOLEtBQUFBLENBQUFvSyxRQUFBQSxDQUFBQSxHQUFBLENBQUFwSyxLQUFBQSxDQUFBQSxFQUlBNE4sVUFDQTtJQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxFQUVBL1AsTUFBQUEsQ0FBQXNaLGdCQUFBQSxHQUFBLFVBQUFuWCxLQUFBQSxFQUFBQTtNQUNBbkMsTUFBQUEsQ0FBQTZZLGFBQUFBLEdBQUExVyxLQUFBQSxFQUNBbkMsTUFBQUEsQ0FBQTZZLGFBQUFBLENBQUFVLFlBQUFBLEdBQUE7UUFDQUMsZ0JBQUFBLEVBQUEsRUFBQTtRQUNBeE4sYUFBQUEsRUFBQSxDQUFBLEdBQUF0SyxJQUFBQSxDQUFBNkcsRUFBQUE7UUFDQWtSLG1CQUFBQSxFQUFBQSxDQUFBLENBQUE7UUFDQUMsUUFBQUEsRUFBQTtVQUNBemIsT0FBQUEsRUFBQUEsQ0FBQTtRQUFBO01BQUEsQ0FBQSxFQUdBK0IsTUFBQUEsQ0FBQTZZLGFBQUFBLENBQUFjLFVBQUFBLEdBQUE7UUFDQSxrQkFBQSxFQUFBLGNBQUEsR0FBQTNaLE1BQUFBLENBQUE2WSxhQUFBQSxDQUFBZSxLQUFBQSxHQUFBLEdBQUE7UUFDQSxtQkFBQSxFQUFBLFdBQUE7UUFDQSxpQkFBQSxFQUFBLEtBQUE7UUFDQSxxQkFBQSxFQUFBO01BQUEsQ0FFQTtJQUFBLENBQUEsRUFFQTVaLE1BQUFBLENBQUFzWixnQkFBQUEsQ0FBQXRaLE1BQUFBLENBQUFpQyxNQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBRUFqQyxNQUFBQSxDQUFBdUgsTUFBQUEsRUFDQTtFQUFBLENBQUEsQ0FFQTtBQUFBLENBQUEsQ0FBQSxFQzFEQXBLLE9BQUFBLENBQ0FDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBRUFXLFVBQUFBLENBQUEsZUFBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBQyxTQUFBQSxFQUFBNFosWUFBQUEsRUFBQUE7RUFnVEEsU0FBQUMsS0FBQUEsQ0FBQUMsT0FBQUEsRUFBQUE7SUFDQSxNQUFBQyxLQUFBQSxHQUFBdFosQ0FBQUEsQ0FBQXFaLE9BQUFBLENBQUFBLENBQUF2VyxHQUFBQSxDQUFBLGtCQUFBLENBQUE7SUFDQTlDLENBQUFBLENBQUFxWixPQUFBQSxDQUFBQSxDQUFBOUIsT0FBQUEsQ0FDQTtNQUNBQyxlQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUVBLEdBQUEsRUFDQSxNQUFBO01BQ0F4WCxDQUFBQSxDQUFBcVosT0FBQUEsQ0FBQUEsQ0FBQTlCLE9BQUFBLENBQ0E7UUFDQUMsZUFBQUEsRUFBQThCO01BQUFBLENBQUFBLEVBRUEsR0FBQSxDQUNBO0lBQUEsQ0FBQSxDQUdBO0VBQUE7RUEvVEFoYSxNQUFBQSxDQUFBaWEsTUFBQUEsR0FBQTtJQUNBclUsSUFBQUEsRUFBQSxFQUFBO0lBQ0FzVSxNQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUdBbGEsTUFBQUEsQ0FBQW1hLE9BQUFBLEdBQUFsYixDQUFBQSxJQUFBQTtJQUVBLFFBQUEsQ0FEQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsSUFBQVIsTUFBQUEsQ0FBQStVLEtBQUFBLEVBQ0F6SSxPQUFBQTtNQUNBLEtBQUEsQ0FBQTtRQUNBckssQ0FBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQTBaLEVBQUFBLENBQUEsUUFBQSxDQUFBLElBQ0FyWSxVQUFBQSxDQUFBLE1BQUE7VUFDQS9CLE1BQUFBLENBQUFxYSxRQUFBQSxFQUFBO1FBQUEsQ0FBQSxFQUNBLEdBQUEsQ0FBQTtRQUVBO01BQ0EsS0FBQSxFQUFBO1FBQ0EzWixDQUFBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBMFosRUFBQUEsQ0FBQSxRQUFBLENBQUEsR0FDQXBhLE1BQUFBLENBQUFxYSxRQUFBQSxFQUFBQSxHQUNBM1osQ0FBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQTBaLEVBQUFBLENBQUEsUUFBQSxDQUFBLElBQ0ExWixDQUFBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBNFosS0FBQUEsRUFBQUE7SUFBQUE7RUFJQSxDQUFBLEVBSUF0YSxNQUFBQSxDQUFBdWEsVUFBQUEsR0FBQSxFQUFBLEVBQ0F2YSxNQUFBQSxDQUFBd2EsT0FBQUEsR0FBQSxDQUFBLENBQUEsRUFFQXhhLE1BQUFBLENBQUF5YSxpQkFBQUEsR0FBQWxPLFFBQUFBLElBQUF2TSxNQUFBQSxDQUFBMGEsY0FBQUEsR0FBQW5PLFFBQUFBLEVBQ0F2TSxNQUFBQSxDQUFBMmEsYUFBQUEsR0FBQXRhLElBQUFBLElBQUFMLE1BQUFBLENBQUE0YSxVQUFBQSxHQUFBdmEsSUFBQUEsRUFDQUwsTUFBQUEsQ0FBQTZhLGVBQUFBLEdBQUFwSSxJQUFBQSxJQUFBelMsTUFBQUEsQ0FBQThhLFlBQUFBLEdBQUFySSxJQUFBQSxFQUNBelMsTUFBQUEsQ0FBQSthLGlCQUFBQSxHQUFBaFksUUFBQUEsSUFBQS9DLE1BQUFBLENBQUFnYixjQUFBQSxHQUFBalksUUFBQUEsRUFFQS9DLE1BQUFBLENBQUFpYixhQUFBQSxHQUFBLE1BQ0FqYixNQUFBQSxDQUFBa2IsS0FBQUEsR0FDQWxiLE1BQUFBLENBQUFrYixLQUFBQSxDQUNBaFosTUFBQUEsQ0FBQSxDQUFBO0lBQUFpWjtFQUFBQSxDQUFBQSxLQUNBLEtBQUEsS0FBQW5iLE1BQUFBLENBQUE4YSxZQUFBQSxJQUFBQSxFQUVBLFFBQUEsS0FBQTlhLE1BQUFBLENBQUE4YSxZQUFBQSxJQUFBQSxDQUFBLENBQUEsS0FBQUssU0FBQUEsSUFDQSxTQUFBLEtBQUFuYixNQUFBQSxDQUFBOGEsWUFBQUEsSUFBQUEsQ0FBQSxDQUFBLEtBQUFLLFNBQUFBLENBQUFBLENBQUFBLENBTUFqWixNQUFBQSxDQUFBLENBQUE7SUFBQTZOO0VBQUFBLENBQUFBLEtBQ0EsS0FBQSxLQUFBL1AsTUFBQUEsQ0FBQTBhLGNBQUFBLEtBR0EzSyxVQUFBQSxDQUFBOVQsTUFBQUEsR0FBQSxDQUFBLEdBQ0E4VCxVQUFBQSxDQUFBb0IsT0FBQUEsQ0FBQW5SLE1BQUFBLENBQUEwYSxjQUFBQSxDQUFBQSxJQUFBLENBQUEsR0FFQSxPQUFBLEtBQUExYSxNQUFBQSxDQUFBMGEsY0FBQUEsQ0FBQUEsQ0FBQUEsQ0FJQXhZLE1BQUFBLENBQUEsQ0FBQTtJQUFBa1o7RUFBQUEsQ0FBQUEsS0FDQSxLQUFBLEtBQUFwYixNQUFBQSxDQUFBNGEsVUFBQUEsSUFHQVEsT0FBQUEsS0FBQXBiLE1BQUFBLENBQUE0YSxVQUFBQSxDQUFBQSxDQUdBMVksTUFBQUEsQ0FBQSxDQUFBO0lBQUFhO0VBQUFBLENBQUFBLEtBQ0EsS0FBQSxLQUFBL0MsTUFBQUEsQ0FBQWdiLGNBQUFBLENBQUF6TixJQUFBQSxJQUdBeEssUUFBQUEsS0FBQS9DLE1BQUFBLENBQUFnYixjQUFBQSxDQUFBek4sSUFBQUEsQ0FBQUEsR0FsQ0EsRUFBQSxFQXVDQXZOLE1BQUFBLENBQUE0RCxHQUFBQSxDQUFBLE9BQUEsRUFBQUMsQ0FBQUEsSUFBQUE7SUFDQTdELE1BQUFBLENBQUFxYixRQUFBQSxFQUFBQSxFQUNBeEIsWUFBQUEsQ0FBQS9KLGFBQUFBLEVBQUFBLENBQUFwTSxJQUFBQSxDQUFBQyxRQUFBQSxJQUFBQTtNQUNBM0QsTUFBQUEsQ0FBQStQLFVBQUFBLEdBQUFwTSxRQUFBQSxDQUFBbkUsSUFBQUEsRUFDQVEsTUFBQUEsQ0FBQXNiLGVBQUFBLEdBQUF0YixNQUFBQSxDQUFBK1AsVUFBQUEsQ0FBQXZLLEdBQUFBLENBQUErRyxRQUFBQSxJQUFBQSxRQUFBQSxDQUFBQSxFQUNBdk0sTUFBQUEsQ0FBQXNiLGVBQUFBLENBQUExZSxJQUFBQSxDQUFBLEtBQUEsQ0FBQSxFQUNBb0QsTUFBQUEsQ0FBQXNiLGVBQUFBLENBQUExZSxJQUFBQSxDQUFBLE9BQUEsQ0FBQSxFQUNBb0QsTUFBQUEsQ0FBQTBhLGNBQUFBLEdBQUEsS0FBQSxFQUNBMWEsTUFBQUEsQ0FBQThhLFlBQUFBLEdBQUEsS0FBQTtJQUFBLENBQUEsQ0FBQSxFQUVBakIsWUFBQUEsQ0FBQTBCLFlBQUFBLEVBQUFBLENBQUE3WCxJQUFBQSxDQUFBQyxRQUFBQSxJQUFBQTtNQUNBM0QsTUFBQUEsQ0FBQTJDLFNBQUFBLEdBQUFnQixRQUFBQSxDQUFBbkUsSUFBQUEsRUFDQVEsTUFBQUEsQ0FBQXdiLGVBQUFBLEdBQUF4YixNQUFBQSxDQUFBMkMsU0FBQUEsQ0FBQTZDLEdBQUFBLENBQUF6QyxRQUFBQSxJQUFBQSxRQUFBQSxDQUFBQSxFQUNBL0MsTUFBQUEsQ0FBQXdiLGVBQUFBLENBQUE1ZSxJQUFBQSxDQUFBO1FBQUFnSixJQUFBQSxFQUFBLEtBQUE7UUFBQTJILElBQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsRUFDQXZOLE1BQUFBLENBQUFnYixjQUFBQSxHQUFBO1FBQUFwVixJQUFBQSxFQUFBLEtBQUE7UUFBQTJILElBQUFBLEVBQUE7TUFBQSxDQUFBO0lBQUEsQ0FBQSxDQUFBLEVBRUF0TixTQUFBQSxDQUFBZ2EsTUFBQUEsRUFBQUEsQ0FBQXdCLElBQUFBLElBQ0F6YixNQUFBQSxDQUFBMGIsVUFBQUEsQ0FBQTtNQUFBbGIsR0FBQUEsRUFBQVAsU0FBQUEsQ0FBQWdhLE1BQUFBLEVBQUFBLENBQUF3QjtJQUFBQSxDQUFBQSxDQUNBO0VBQUEsQ0FBQSxDQUFBLEVBR0F6YixNQUFBQSxDQUFBMmIsU0FBQUEsR0FBQTtJQUNBQyxLQUFBQSxFQUFBLE1BQUE7SUFDQW5mLFNBQUFBLEVBQUFBLENBQUEsQ0FBQTtJQUNBNlosS0FBQUEsRUFBQTtFQUFBLENBQUEsRUFHQXRXLE1BQUFBLENBQUE2YixVQUFBQSxHQUFBO0lBQ0FELEtBQUFBLEVBQUEsT0FBQTtJQUNBbmYsU0FBQUEsRUFBQUEsQ0FBQSxDQUFBO0lBQ0E2WixLQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUdBdFcsTUFBQUEsQ0FBQW5ELElBQUFBLEdBQUEsQ0FBQWlmLE1BQUFBLEVBQUFDLFNBQUFBLEVBQUFDLFNBQUFBLEtBQUFBO0lBQ0FoYyxNQUFBQSxDQUFBOGIsTUFBQUEsQ0FBQUEsQ0FBQXhGLEtBQUFBLEdBQUEwRixTQUFBQSxFQUNBaGMsTUFBQUEsQ0FBQThiLE1BQUFBLENBQUFBLENBQUFGLEtBQUFBLEtBQUFHLFNBQUFBLEdBQ0EvYixNQUFBQSxDQUFBOGIsTUFBQUEsQ0FBQUEsQ0FBQXJmLFNBQUFBLEdBQUFBLENBQUF1RCxNQUFBQSxDQUFBOGIsTUFBQUEsQ0FBQUEsQ0FBQXJmLFNBQUFBLElBRUF1RCxNQUFBQSxDQUFBOGIsTUFBQUEsQ0FBQUEsQ0FBQUYsS0FBQUEsR0FBQUcsU0FBQUEsRUFDQS9iLE1BQUFBLENBQUE4YixNQUFBQSxDQUFBQSxDQUFBcmYsU0FBQUEsR0FBQUEsQ0FBQSxDQUFBLENBQ0E7RUFBQSxDQUFBLEVBR0F1RCxNQUFBQSxDQUFBaWMsZ0JBQUFBLEdBQUFsWixRQUFBQSxJQUFBQTtJQUNBLElBQUEsQ0FBQS9DLE1BQUFBLENBQUFrYixLQUFBQSxFQUFBLE9BQUEsQ0FBQTtJQUNBLE1BQUFnQixLQUFBQSxHQUFBbGMsTUFBQUEsQ0FBQWtiLEtBQUFBLENBQUFoWixNQUFBQSxDQUNBdVosSUFBQUEsSUFBQUEsQ0FDQSxLQUFBLEtBQUF6YixNQUFBQSxDQUFBMGEsY0FBQUEsSUFBQWUsSUFBQUEsQ0FBQTFMLFVBQUFBLENBQUFzSixRQUFBQSxDQUFBclosTUFBQUEsQ0FBQTBhLGNBQUFBLENBQUFBLE1BQ0EsS0FBQSxLQUFBM1gsUUFBQUEsQ0FBQXdLLElBQUFBLElBQUFrTyxJQUFBQSxDQUFBMVksUUFBQUEsS0FBQUEsUUFBQUEsQ0FBQXdLLElBQUFBLENBQUFBLEtBQ0EsS0FBQSxLQUFBdk4sTUFBQUEsQ0FBQTRhLFVBQUFBLElBQUFhLElBQUFBLENBQUFMLE9BQUFBLEtBQUFwYixNQUFBQSxDQUFBNGEsVUFBQUEsQ0FBQUEsS0FDQSxLQUFBLEtBQUE1YSxNQUFBQSxDQUFBOGEsWUFBQUEsSUFBQVcsSUFBQUEsQ0FBQU4sU0FBQUEsTUFBQSxTQUFBLEtBQUFuYixNQUFBQSxDQUFBOGEsWUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FDQTdlLE1BQUFBO0lBQ0EsT0FBQSxHQUFBaWdCLEtBQUFBLE1BQUF4YSxJQUFBQSxDQUFBd0csS0FBQUEsQ0FBQWdVLEtBQUFBLEdBQUFsYyxNQUFBQSxDQUFBa2IsS0FBQUEsQ0FBQWpmLE1BQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUE7RUFBQSxDQUFBLEVBR0ErRCxNQUFBQSxDQUFBbWMsZ0JBQUFBLEdBQUE1UCxRQUFBQSxJQUFBQTtJQUNBLElBQUEsQ0FBQXZNLE1BQUFBLENBQUFrYixLQUFBQSxFQUFBLE9BQUEsQ0FBQTtJQUNBLE1BQUFnQixLQUFBQSxHQUFBbGMsTUFBQUEsQ0FBQWtiLEtBQUFBLENBQUFoWixNQUFBQSxDQUNBdVosSUFBQUEsSUFBQUEsRUFBQUEsRUFDQSxLQUFBLEtBQUFsUCxRQUFBQSxJQUFBa1AsSUFBQUEsQ0FBQTFMLFVBQUFBLENBQUFvQixPQUFBQSxDQUFBNUUsUUFBQUEsQ0FBQUEsSUFBQSxDQUFBLENBQUEsSUFDQSxLQUFBLEtBQUF2TSxNQUFBQSxDQUFBZ2IsY0FBQUEsQ0FBQXpOLElBQUFBLElBQUFrTyxJQUFBQSxDQUFBMVksUUFBQUEsS0FBQS9DLE1BQUFBLENBQUFnYixjQUFBQSxDQUFBek4sSUFBQUEsSUFDQSxLQUFBLEtBQUF2TixNQUFBQSxDQUFBNGEsVUFBQUEsSUFBQWEsSUFBQUEsQ0FBQUwsT0FBQUEsS0FBQXBiLE1BQUFBLENBQUE0YSxVQUFBQSxJQUNBLEtBQUEsS0FBQTVhLE1BQUFBLENBQUE4YSxZQUFBQSxJQUFBVyxJQUFBQSxDQUFBTixTQUFBQSxNQUFBLFNBQUEsS0FBQW5iLE1BQUFBLENBQUE4YSxZQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxDQUNBN2UsTUFBQUE7SUFDQSxPQUFBLEdBQUFpZ0IsS0FBQUEsTUFBQXhhLElBQUFBLENBQUF3RyxLQUFBQSxDQUFBZ1UsS0FBQUEsR0FBQWxjLE1BQUFBLENBQUFrYixLQUFBQSxDQUFBamYsTUFBQUEsR0FBQSxHQUFBLENBQUEsR0FBQTtFQUFBLENBQUEsRUFHQStELE1BQUFBLENBQUFvYyxjQUFBQSxHQUFBM0osSUFBQUEsSUFBQUE7SUFDQSxJQUFBLENBQUF6UyxNQUFBQSxDQUFBa2IsS0FBQUEsRUFBQSxPQUFBLENBQUE7SUFDQSxNQUFBZ0IsS0FBQUEsR0FBQWxjLE1BQUFBLENBQUFrYixLQUFBQSxDQUFBaFosTUFBQUEsQ0FDQXVaLElBQUFBLElBQUEsS0FBQSxLQUFBaEosSUFBQUEsSUFBQWdKLElBQUFBLENBQUFOLFNBQUFBLElBQUEsU0FBQSxLQUFBMUksSUFBQUEsSUFBQUEsQ0FBQWdKLElBQUFBLENBQUFOLFNBQUFBLElBQUEsUUFBQSxLQUFBMUksSUFBQUEsQ0FBQUEsQ0FDQXhXLE1BQUFBO0lBQ0EsT0FBQSxHQUFBaWdCLEtBQUFBLE1BQUF4YSxJQUFBQSxDQUFBd0csS0FBQUEsQ0FBQWdVLEtBQUFBLEdBQUFsYyxNQUFBQSxDQUFBa2IsS0FBQUEsQ0FBQWpmLE1BQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUE7RUFBQSxDQUFBLEVBR0ErRCxNQUFBQSxDQUFBcWIsUUFBQUEsR0FBQSxNQUFBO0lBQ0FyYixNQUFBQSxDQUFBK0QsT0FBQUEsS0FDQS9ELE1BQUFBLENBQUErRCxPQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQThWLFlBQUFBLENBQUF3QixRQUFBQSxFQUFBQSxDQUFBM1gsSUFBQUEsQ0FBQSxDQUFBO01BQUFsRTtJQUFBQSxDQUFBQSxLQUFBQTtNQUNBUSxNQUFBQSxDQUFBa2IsS0FBQUEsR0FBQTFiLElBQUFBLENBQUF2RSxNQUFBQSxFQUNBK0UsTUFBQUEsQ0FBQXFjLFdBQUFBLEdBQUEsQ0FBQSxDQUFBLEVBQ0FyYyxNQUFBQSxDQUFBcWMsV0FBQUEsQ0FBQUMsR0FBQUEsR0FBQXRjLE1BQUFBLENBQUFrYixLQUFBQSxDQUFBamYsTUFBQUEsRUFDQStELE1BQUFBLENBQUFxYyxXQUFBQSxHQUFBcmMsTUFBQUEsQ0FBQWtiLEtBQUFBLENBQ0FyZSxJQUFBQSxDQUFBLENBQUEwZixLQUFBQSxFQUFBQyxLQUFBQSxLQUFBRCxLQUFBQSxDQUFBbkIsT0FBQUEsR0FBQW9CLEtBQUFBLENBQUFwQixPQUFBQSxDQUFBQSxDQUNBcGdCLE1BQUFBLENBQUEsQ0FBQXloQixLQUFBQSxFQUFBQTtRQUFBckI7TUFBQUEsQ0FBQUEsTUFDQXFCLEtBQUFBLENBQUFyQixPQUFBQSxDQUFBQSxLQUFBcUIsS0FBQUEsQ0FBQXJCLE9BQUFBLENBQUFBLEdBQUEsQ0FBQSxDQUFBLEVBQ0FxQixLQUFBQSxDQUFBckIsT0FBQUEsQ0FBQUEsRUFBQUEsRUFDQXFCLEtBQUFBLENBQUFBLEVBQ0F6YyxNQUFBQSxDQUFBcWMsV0FBQUEsQ0FBQUEsRUFDQXJjLE1BQUFBLENBQUEwYyxTQUFBQSxHQUFBL2hCLE1BQUFBLENBQUE0UCxJQUFBQSxDQUFBdkssTUFBQUEsQ0FBQXFjLFdBQUFBLENBQUFBLENBQUFwZ0IsTUFBQUEsRUFDQStELE1BQUFBLENBQUFxYyxXQUFBQSxHQUFBOWYsVUFBQUEsQ0FBQXlELE1BQUFBLENBQUFxYyxXQUFBQSxFQUFBQSxDQUFBLENBQUEsQ0FBQSxFQUNBcmMsTUFBQUEsQ0FBQTRhLFVBQUFBLEdBQUEsS0FBQSxFQUNBNWEsTUFBQUEsQ0FBQStELE9BQUFBLEdBQUFBLENBQUEsQ0FBQTtJQUFBLENBQUEsQ0FBQSxDQUVBO0VBQUEsQ0FBQSxFQUdBL0QsTUFBQUEsQ0FBQTBiLFVBQUFBLEdBQUFELElBQUFBLElBQUFBO0lBQ0E1QixZQUFBQSxDQUFBOEMsT0FBQUEsQ0FBQWxCLElBQUFBLENBQUFBLENBQ0EvWCxJQUFBQSxDQUFBLENBQUE7TUFBQWxFO0lBQUFBLENBQUFBLEtBQUFBO01BQ0FRLE1BQUFBLENBQUE0YyxZQUFBQSxHQUFBcGQsSUFBQUEsRUFDQVMsU0FBQUEsQ0FBQWdhLE1BQUFBLENBQUEsTUFBQSxFQUFBemEsSUFBQUEsQ0FBQWdCLEdBQUFBLENBQUE7SUFBQSxDQUFBLENBQUEsQ0FFQTZELEtBQUFBLENBQUErSSxHQUFBQSxJQUFBdE8sT0FBQUEsQ0FBQXdGLEtBQUFBLENBQUE4SSxHQUFBQSxDQUFBQSxDQUFBO0VBQUEsQ0FBQSxFQUdBcE4sTUFBQUEsQ0FBQW1RLGNBQUFBLEdBQUE1RCxRQUFBQSxJQUFBQTtJQUNBdk0sTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUFyUSxRQUFBQSxHQUFBQSxRQUFBQSxFQUNBN0wsQ0FBQUEsQ0FBQSxrQkFBQSxDQUFBLENBQUFvQixJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUdBOUIsTUFBQUEsQ0FBQTZjLGdCQUFBQSxHQUFBdFEsUUFBQUEsSUFDQXZNLE1BQUFBLENBQUE0YyxZQUFBQSxJQUFBNWMsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUE3TSxVQUFBQSxDQUFBb0IsT0FBQUEsQ0FBQTVFLFFBQUFBLENBQUFBLElBQUEsQ0FBQSxHQUNBLGFBQUEsR0FDQSxhQUFBLEVBR0F2TSxNQUFBQSxDQUFBOGMsY0FBQUEsR0FBQXZRLFFBQUFBLElBQUFBO0lBQ0EsTUFBQXdRLGFBQUFBLEdBQUEvYyxNQUFBQSxDQUFBNGMsWUFBQUEsQ0FBQTdNLFVBQUFBLENBQUFvQixPQUFBQSxDQUFBNUUsUUFBQUEsQ0FBQUE7SUFDQXdRLGFBQUFBLElBQUEsQ0FBQSxHQUNBL2MsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUE3TSxVQUFBQSxDQUFBbUIsTUFBQUEsQ0FBQTZMLGFBQUFBLEVBQUEsQ0FBQSxDQUFBLEdBRUEvYyxNQUFBQSxDQUFBNGMsWUFBQUEsQ0FBQTdNLFVBQUFBLENBQUFuVCxJQUFBQSxDQUFBMlAsUUFBQUEsQ0FDQTtFQUFBLENBQUEsRUFHQXZNLE1BQUFBLENBQUE4QyxjQUFBQSxHQUFBQyxRQUFBQSxJQUFBQTtJQUNBL0MsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUE3WixRQUFBQSxHQUFBQSxRQUFBQSxDQUFBd0ssSUFBQUE7SUFDQSxNQUFBeVAsZUFBQUEsR0FBQWhkLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBN00sVUFBQUEsQ0FBQW9CLE9BQUFBLENBQUEsYUFBQSxDQUFBO0lBQ0EsSUFBQSxLQUFBcE8sUUFBQUEsQ0FBQXdLLElBQUFBLElBQUF5UCxlQUFBQSxHQUFBLENBQUEsR0FDQWhkLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBN00sVUFBQUEsQ0FBQW5ULElBQUFBLENBQUEsYUFBQSxDQUFBLEdBQ0EsSUFBQSxLQUFBbUcsUUFBQUEsQ0FBQXdLLElBQUFBLElBQUF5UCxlQUFBQSxJQUFBLENBQUEsSUFDQWhkLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBN00sVUFBQUEsQ0FBQW1CLE1BQUFBLENBQUE4TCxlQUFBQSxFQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsRUFHQWhkLE1BQUFBLENBQUFpZCxPQUFBQSxHQUFBLE1BQUE7SUFDQSxNQUFBQyxlQUFBQSxHQUFBbGQsTUFBQUEsQ0FBQTRjLFlBQUFBLEdBQUE1YyxNQUFBQSxDQUFBNGMsWUFBQUEsQ0FBQTdaLFFBQUFBLEdBQUEsSUFBQTtJQUNBOUMsU0FBQUEsQ0FBQWdhLE1BQUFBLENBQUEsTUFBQSxFQUFBLEVBQUEsQ0FBQSxFQUNBamEsTUFBQUEsQ0FBQTRjLFlBQUFBLEdBQUE7TUFDQWhYLElBQUFBLEVBQUEsRUFBQTtNQUNBd1YsT0FBQUEsRUFBQXBiLE1BQUFBLENBQUFTLFdBQUFBLENBQUFELEdBQUFBO01BQ0FnRSxJQUFBQSxFQUFBLElBQUFsRCxJQUFBQTtNQUNBNFksTUFBQUEsRUFBQSxFQUFBO01BQ0FpRCxPQUFBQSxFQUFBLENBQUE7TUFDQWhDLFNBQUFBLEVBQUFBLENBQUEsQ0FBQTtNQUNBNU8sUUFBQUEsRUFBQSxFQUFBO01BQ0F3RCxVQUFBQSxFQUFBLEVBQUE7TUFDQWhOLFFBQUFBLEVBQUFtYTtJQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUdBbGQsTUFBQUEsQ0FBQW9kLFlBQUFBLEdBQUEsTUFDQXBkLE1BQUFBLENBQUE0YyxZQUFBQSxJQUNBNWMsTUFBQUEsQ0FBQXdhLE9BQUFBLENBQUF6ZixLQUFBQSxJQUNBOEksQ0FBQUEsQ0FBQXdaLElBQUFBLENBQ0FyZCxNQUFBQSxDQUFBNGMsWUFBQUEsQ0FBQTFDLE1BQUFBLEVBQ0FvRCxNQUFBQSxJQUFBQSxNQUFBQSxDQUFBdmlCLEtBQUFBLENBQUF3aUIsbUJBQUFBLEVBQUFBLElBQUF2ZCxNQUFBQSxDQUFBd2EsT0FBQUEsQ0FBQXpmLEtBQUFBLENBQUF3aUIsbUJBQUFBLEVBQUFBLENBQUFBLEVBR0F2ZCxNQUFBQSxDQUFBcWEsUUFBQUEsR0FBQSxNQUFBO0lBQ0FyYSxNQUFBQSxDQUFBd2EsT0FBQUEsQ0FBQXpmLEtBQUFBLEtBRUE4SSxDQUFBQSxDQUFBd1osSUFBQUEsQ0FDQXJkLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBMUMsTUFBQUEsRUFDQW9ELE1BQUFBLElBQUFBLE1BQUFBLENBQUF2aUIsS0FBQUEsQ0FBQXdpQixtQkFBQUEsRUFBQUEsSUFBQXZkLE1BQUFBLENBQUF3YSxPQUFBQSxDQUFBemYsS0FBQUEsQ0FBQXdpQixtQkFBQUEsRUFBQUEsQ0FBQUEsR0FHQUMsS0FBQUEsQ0FBQSxHQUFBeGQsTUFBQUEsQ0FBQXdhLE9BQUFBLENBQUF6ZixLQUFBQSx5QkFBQUEsQ0FBQUEsSUFFQWlGLE1BQUFBLENBQUF3YSxPQUFBQSxDQUFBWSxPQUFBQSxHQUFBcGIsTUFBQUEsQ0FBQVMsV0FBQUEsQ0FBQUQsR0FBQUEsRUFDQVIsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUExQyxNQUFBQSxDQUFBOUYsT0FBQUEsQ0FBQTlVLElBQUFBLENBQUFDLEtBQUFBLENBQUFELElBQUFBLENBQUFPLFNBQUFBLENBQUFHLE1BQUFBLENBQUF3YSxPQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxFQUNBeGEsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUFPLE9BQUFBLEVBQUFBLEVBQ0FuZCxNQUFBQSxDQUFBd2EsT0FBQUEsQ0FBQXpmLEtBQUFBLEdBQUEsRUFBQSxFQUNBaUYsTUFBQUEsQ0FBQXdhLE9BQUFBLENBQUFpRCxLQUFBQSxHQUFBLEVBQUEsRUFFQXpkLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBMUMsTUFBQUEsQ0FBQWplLE1BQUFBLElBQUEsRUFBQSxJQUNBK0QsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUFoWCxJQUFBQSxJQUNBNUYsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUE3TSxVQUFBQSxDQUFBOVQsTUFBQUEsR0FBQSxDQUFBLElBRUErRCxNQUFBQSxDQUFBMGQsUUFBQUEsQ0FBQTFkLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxFQUlBbGMsQ0FBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQTRaLEtBQUFBLEVBQUE7RUFBQSxDQUFBLEVBR0F0YSxNQUFBQSxDQUFBMmQsVUFBQUEsR0FBQWxDLElBQUFBLElBQUFBO0lBQ0FBLElBQUFBLENBQUFtQyxRQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQS9ELFlBQUFBLENBQUE4RCxVQUFBQSxDQUFBM2QsTUFBQUEsQ0FBQVMsV0FBQUEsRUFBQWdiLElBQUFBLENBQUE7RUFBQSxDQUFBLEVBR0F6YixNQUFBQSxDQUFBMGQsUUFBQUEsR0FBQWpDLElBQUFBLElBQUFBO0lBQ0F6YixNQUFBQSxDQUFBNmQsTUFBQUEsS0FDQXBDLElBQUFBLENBQUF2QixNQUFBQSxHQUFBdUIsSUFBQUEsQ0FBQXZCLE1BQUFBLENBQUFoWSxNQUFBQSxDQUFBLENBQUE7TUFBQW5IO0lBQUFBLENBQUFBLEtBQUFBLEtBQUFBLENBQUFBLEVBQ0EwZ0IsSUFBQUEsQ0FBQXZCLE1BQUFBLENBQUFqZSxNQUFBQSxJQUFBLEVBQUEsSUFBQXdmLElBQUFBLENBQUE3VixJQUFBQSxJQUFBNlYsSUFBQUEsQ0FBQTFMLFVBQUFBLENBQUE5VCxNQUFBQSxHQUFBLENBQUEsSUFDQStELE1BQUFBLENBQUE2ZCxNQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQWhFLFlBQUFBLENBQUE2RCxRQUFBQSxDQUFBMWQsTUFBQUEsQ0FBQVMsV0FBQUEsRUFBQWdiLElBQUFBLENBQUFBLENBQUEvWCxJQUFBQSxDQUNBLENBQUE7TUFBQWxFO0lBQUFBLENBQUFBLEtBQUFBO01BQ0EsSUFBQVEsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUFwYyxHQUFBQSxFQUdBO1FBQ0EsS0FBQSxJQUFBeEUsQ0FBQUEsR0FBQSxDQUFBLEVBQUFBLENBQUFBLEdBQUFnRSxNQUFBQSxDQUFBa2IsS0FBQUEsQ0FBQWpmLE1BQUFBLEVBQUFELENBQUFBLEVBQUFBLEVBQ0EsSUFBQWdFLE1BQUFBLENBQUFrYixLQUFBQSxDQUFBbGYsQ0FBQUEsQ0FBQUEsQ0FBQXdFLEdBQUFBLEtBQUFoQixJQUFBQSxDQUFBZ0IsR0FBQUEsRUFBQTtVQUNBUixNQUFBQSxDQUFBa2IsS0FBQUEsQ0FBQWxmLENBQUFBLENBQUFBLEdBQUF3RCxJQUFBQTtVQUNBO1FBQ0E7UUFFQVEsTUFBQUEsQ0FBQTBiLFVBQUFBLENBQUFELElBQUFBLENBQ0E7TUFBQSxDQUFBLE1BVkF6YixNQUFBQSxDQUFBa2IsS0FBQUEsQ0FBQTlHLE9BQUFBLENBQUE1VSxJQUFBQSxDQUFBQSxFQUNBUSxNQUFBQSxDQUFBMGIsVUFBQUEsQ0FBQWxjLElBQUFBLENBQUFBO01BVUFRLE1BQUFBLENBQUE2ZCxNQUFBQSxHQUFBQSxDQUFBLENBQUE7SUFBQSxDQUFBLEVBRUF6USxHQUFBQSxJQUFBQTtNQUNBdE8sT0FBQUEsQ0FBQXdGLEtBQUFBLENBQUE4SSxHQUFBQSxDQUFBQSxFQUNBcE4sTUFBQUEsQ0FBQTZkLE1BQUFBLEdBQUFBLENBQUEsQ0FBQTtJQUFBLENBQUEsQ0FBQSxJQUdBcEMsSUFBQUEsQ0FBQXZCLE1BQUFBLENBQUFqZSxNQUFBQSxHQUFBLEVBQUEsR0FDQXVoQixLQUFBQSxDQUFBLHVDQUFBLENBQUEsR0FDQS9CLElBQUFBLENBQUE3VixJQUFBQSxHQUdBa1UsS0FBQUEsQ0FBQSxnQkFBQSxDQUFBLEdBRkFBLEtBQUFBLENBQUEsWUFBQSxDQUFBLENBSUE7RUFBQSxDQUFBLEVBcUJBOVosTUFBQUEsQ0FBQThkLFVBQUFBLEdBQUFyQyxJQUFBQSxJQUFBQTtJQUNBQSxJQUFBQSxDQUFBamIsR0FBQUEsR0FJQXVkLE9BQUFBLENBQUEsNENBQUEsQ0FBQSxJQUNBbEUsWUFBQUEsQ0FBQWlFLFVBQUFBLENBQUFyQyxJQUFBQSxDQUFBQSxDQUFBL1gsSUFBQUEsQ0FBQUMsUUFBQUEsSUFBQUE7TUFDQTNELE1BQUFBLENBQUFxYixRQUFBQSxFQUFBQSxFQUNBcmIsTUFBQUEsQ0FBQTRjLFlBQUFBLEdBQUEsSUFBQTtJQUFBLENBQUEsQ0FBQSxJQU5BNWMsTUFBQUEsQ0FBQWtiLEtBQUFBLEdBQUFsYixNQUFBQSxDQUFBa2IsS0FBQUEsQ0FBQWhaLE1BQUFBLENBQUEsQ0FBQTtNQUFBMUI7SUFBQUEsQ0FBQUEsS0FBQUEsR0FBQUEsQ0FBQUEsRUFDQVIsTUFBQUEsQ0FBQTRjLFlBQUFBLEdBQUEsSUFBQSxDQVFBO0VBQUEsQ0FBQSxFQUdBNWMsTUFBQUEsQ0FBQWdlLGVBQUFBLEdBQUF2QyxJQUFBQSxJQUFBQTtJQUNBLE1BQUF2QixNQUFBQSxHQUFBdUIsSUFBQUEsQ0FBQXZCLE1BQUFBLENBQUFqZSxNQUFBQTtNQUNBZ2lCLE1BQUFBLEdBQUF4QyxJQUFBQSxDQUFBd0MsTUFBQUE7SUFDQSxPQUFBL0QsTUFBQUEsS0FBQStELE1BQUFBLElBQUF4QyxJQUFBQSxDQUFBeUMsV0FBQUEsR0FDQSxhQUFBLEdBQ0EsQ0FBQSxLQUFBRCxNQUFBQSxJQUFBeEMsSUFBQUEsQ0FBQXlDLFdBQUFBLEdBRUEsQ0FBQSxLQUFBRCxNQUFBQSxJQUFBeEMsSUFBQUEsQ0FBQXlDLFdBQUFBLEdBQ0EsVUFBQSxHQUVBLGFBQUEsR0FKQSxhQUtBO0VBQUEsQ0FBQSxFQUdBbGUsTUFBQUEsQ0FBQW1lLFNBQUFBLEdBQUExTCxJQUFBQSxJQUFBQTtJQUNBelMsTUFBQUEsQ0FBQW9lLGFBQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBdkUsWUFBQUEsQ0FBQXNFLFNBQUFBLENBQUFuZSxNQUFBQSxDQUFBNGMsWUFBQUEsRUFBQW5LLElBQUFBLENBQUFBLENBQ0EvTyxJQUFBQSxDQUFBLE1BQUE7TUFDQTFELE1BQUFBLENBQUEwYixVQUFBQSxDQUFBMWIsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUFBLEVBQ0E1YyxNQUFBQSxDQUFBb2UsYUFBQUEsR0FBQUEsQ0FBQSxDQUFBO0lBQUEsQ0FBQSxDQUFBLENBRUEvWixLQUFBQSxDQUFBK0ksR0FBQUEsSUFBQUE7TUFDQXRPLE9BQUFBLENBQUF3RixLQUFBQSxDQUFBOEksR0FBQUEsQ0FBQUEsRUFDQXBOLE1BQUFBLENBQUFvZSxhQUFBQSxHQUFBQSxDQUFBLENBQUE7SUFBQSxDQUFBLENBQ0E7RUFBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDNVdBamhCLE9BQUFBLENBQ0FDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBRUFXLFVBQUFBLENBQUEsb0JBQUEsRUFBQSxVQUFBaUMsTUFBQUEsRUFBQTZaLFlBQUFBLEVBQUExWixPQUFBQSxFQUFBQTtFQUNBSCxNQUFBQSxDQUFBNEQsR0FBQUEsQ0FBQSxPQUFBLEVBQUFDLENBQUFBLElBQUFBO0lBQ0E3RCxNQUFBQSxDQUFBUyxXQUFBQSxDQUFBNGQsS0FBQUEsSUFDQUMsUUFBQUEsRUFDQTtFQUFBLENBQUEsQ0FBQSxFQUdBdGUsTUFBQUEsQ0FBQXVlLEtBQUFBLEdBQUE7SUFDQTNDLEtBQUFBLEVBQUEsVUFBQTtJQUNBbE4sT0FBQUEsRUFBQUEsQ0FBQTtFQUFBLENBQUEsRUFHQTFPLE1BQUFBLENBQUF3ZSxPQUFBQSxHQUFBNUMsS0FBQUEsSUFBQUE7SUFDQTViLE1BQUFBLENBQUF1ZSxLQUFBQSxDQUFBM0MsS0FBQUEsS0FBQUEsS0FBQUEsR0FDQTViLE1BQUFBLENBQUF1ZSxLQUFBQSxDQUFBN1AsT0FBQUEsR0FBQUEsQ0FBQTFPLE1BQUFBLENBQUF1ZSxLQUFBQSxDQUFBN1AsT0FBQUEsR0FFQTFPLE1BQUFBLENBQUF1ZSxLQUFBQSxHQUFBO01BQ0EzQyxLQUFBQTtNQUNBbE4sT0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBRUE7RUFBQSxDQUFBLEVBR0ExTyxNQUFBQSxDQUFBeWUsUUFBQUEsR0FBQSxNQUFBO0lBQ0F6ZSxNQUFBQSxDQUFBK0QsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0E4VixZQUFBQSxDQUFBNEUsUUFBQUEsRUFBQUEsQ0FBQS9hLElBQUFBLENBQUFDLFFBQUFBLElBQUFBO01BQ0EzRCxNQUFBQSxDQUFBMGUsS0FBQUEsR0FBQS9hLFFBQUFBLENBQUFuRSxJQUFBQSxDQUFBckUsT0FBQUEsQ0FBQSxJQUFBLEVBQUEsT0FBQSxDQUFBLEVBQ0E2RSxNQUFBQSxDQUFBK0QsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBO0lBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBL0QsTUFBQUEsQ0FBQXllLFFBQUFBLEVBQUFBLEVBRUE1RSxZQUFBQSxDQUFBOEUsUUFBQUEsRUFBQUEsQ0FBQWpiLElBQUFBLENBQUFDLFFBQUFBLElBQUFBO0lBQ0EzRCxNQUFBQSxDQUFBNGUsTUFBQUEsR0FBQWpiLFFBQUFBLENBQUFuRSxJQUFBQSxFQUNBVixPQUFBQSxDQUFBQyxHQUFBQSxDQUFBaUIsTUFBQUEsQ0FBQTRlLE1BQUFBLENBQUE7RUFBQSxDQUFBLENBQUE7RUFHQSxNQUFBTixRQUFBQSxHQUFBQSxDQUFBLEtBQUE7SUFDQXRlLE1BQUFBLENBQUErRCxPQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQTVELE9BQUFBLENBQUFtZSxRQUFBQSxFQUFBQSxDQUFBNWEsSUFBQUEsQ0FBQUMsUUFBQUEsSUFBQUE7TUFDQTNELE1BQUFBLENBQUF5YyxLQUFBQSxHQUFBOVksUUFBQUEsQ0FBQW5FLElBQUFBLENBQUEwQyxNQUFBQSxDQUFBN0IsSUFBQUEsSUFBQUEsQ0FBQUEsSUFBQUEsQ0FBQWdlLEtBQUFBLENBQUFBLEVBQ0FyZSxNQUFBQSxDQUFBK0QsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBO0lBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQTtFQUdBL0QsTUFBQUEsQ0FBQTZlLFNBQUFBLEdBQUF4ZSxJQUFBQSxJQUFBQTtJQUNBTCxNQUFBQSxDQUFBK0QsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0E1RCxPQUFBQSxDQUFBMGUsU0FBQUEsQ0FBQXhlLElBQUFBLENBQUFHLEdBQUFBLENBQUFBLENBQUFrRCxJQUFBQSxDQUFBQyxRQUFBQSxJQUFBQTtNQUNBMmEsUUFBQUEsRUFBQTtJQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsRUFHQXRlLE1BQUFBLENBQUE4ZSxXQUFBQSxHQUFBemUsSUFBQUEsSUFBQUE7SUFDQXdaLFlBQUFBLENBQUFpRixXQUFBQSxFQUFBQSxDQUFBcGIsSUFBQUEsQ0FBQUMsUUFBQUEsSUFBQUE7TUFDQTNELE1BQUFBLENBQUE0ZSxNQUFBQSxHQUFBamIsUUFBQUEsQ0FBQW5FLElBQUFBLEVBQ0FWLE9BQUFBLENBQUFDLEdBQUFBLENBQUFpQixNQUFBQSxDQUFBNGUsTUFBQUEsQ0FBQTtJQUFBLENBQUEsQ0FDQTtFQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUM5REF6aEIsT0FBQUEsQ0FDQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FFQVcsVUFBQUEsQ0FBQSxxQkFBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBQyxTQUFBQSxFQUFBNFosWUFBQUEsRUFBQUE7RUFDQSxJQUFBa0YsSUFBQUEsR0FBQSxDQUFBO0VBQ0EvZSxNQUFBQSxDQUFBa2IsS0FBQUEsR0FBQSxFQUFBLEVBQ0FsYixNQUFBQSxDQUFBaWEsTUFBQUEsR0FBQSxFQUFBLEVBQ0FqYSxNQUFBQSxDQUFBd2EsT0FBQUEsR0FBQSxDQUFBLENBQUEsRUFDQXhhLE1BQUFBLENBQUFnYixjQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBaGIsTUFBQUEsQ0FBQTBhLGNBQUFBLEdBQUEsQ0FBQSxDQUFBLEVBQ0ExYSxNQUFBQSxDQUFBNGMsWUFBQUEsR0FBQUEsS0FBQW9DLENBQUFBO0VBQ0EsSUFBQUMsU0FBQUEsR0FBQUEsQ0FBQSxDQUFBO0VBRUFqZixNQUFBQSxDQUFBbWEsT0FBQUEsR0FBQWxiLENBQUFBLElBQUFBO0lBRUEsUUFBQSxDQURBQSxDQUFBQSxHQUFBQSxDQUFBQSxJQUFBUixNQUFBQSxDQUFBK1UsS0FBQUEsRUFDQXpJLE9BQUFBO01BQ0EsS0FBQSxDQUFBO1FBQ0FySyxDQUFBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBMFosRUFBQUEsQ0FBQSxRQUFBLENBQUEsSUFDQXJZLFVBQUFBLENBQUEsTUFBQTtVQUNBL0IsTUFBQUEsQ0FBQXFhLFFBQUFBLEVBQUE7UUFBQSxDQUFBLEVBQ0EsR0FBQSxDQUFBO1FBRUE7TUFDQSxLQUFBLEVBQUE7UUFDQTNaLENBQUFBLENBQUEsWUFBQSxDQUFBLENBQUEwWixFQUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUNBcGEsTUFBQUEsQ0FBQXFhLFFBQUFBLEVBQUFBLEdBQ0EzWixDQUFBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBMFosRUFBQUEsQ0FBQSxRQUFBLENBQUEsSUFDQTFaLENBQUFBLENBQUEsWUFBQSxDQUFBLENBQUE0WixLQUFBQSxFQUFBQTtJQUFBQTtFQUlBLENBQUEsRUFJQXRhLE1BQUFBLENBQUFpZCxPQUFBQSxHQUFBLE1BQUE7SUFDQSxNQUFBQyxlQUFBQSxHQUFBbGQsTUFBQUEsQ0FBQTRjLFlBQUFBLEdBQUE1YyxNQUFBQSxDQUFBNGMsWUFBQUEsQ0FBQTdaLFFBQUFBLEdBQUEsSUFBQTtJQUNBOUMsU0FBQUEsQ0FBQWdhLE1BQUFBLENBQUEsTUFBQSxFQUFBLEtBQUEsQ0FBQSxFQUNBamEsTUFBQUEsQ0FBQWtmLGVBQUFBLENBQUE7TUFDQXRaLElBQUFBLEVBQUEsRUFBQTtNQUNBd1YsT0FBQUEsRUFBQXBiLE1BQUFBLENBQUFTLFdBQUFBLENBQUFELEdBQUFBO01BQ0FnRSxJQUFBQSxFQUFBLElBQUFsRCxJQUFBQTtNQUNBNFksTUFBQUEsRUFBQSxFQUFBO01BQ0FpRCxPQUFBQSxFQUFBLENBQUE7TUFDQWhDLFNBQUFBLEVBQUFBLENBQUEsQ0FBQTtNQUNBNU8sUUFBQUEsRUFBQSxFQUFBO01BQ0F3RCxVQUFBQSxFQUFBLEVBQUE7TUFDQWhOLFFBQUFBLEVBQUFtYTtJQUFBQSxDQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUdBbGQsTUFBQUEsQ0FBQWtmLGVBQUFBLEdBQUF6RCxJQUFBQSxJQUFBQTtJQUNBQSxJQUFBQSxHQUNBQSxJQUFBQSxDQUFBamIsR0FBQUEsS0FBQVIsTUFBQUEsQ0FBQTRjLFlBQUFBLEVBQUFwYyxHQUFBQSxHQUNBcVosWUFBQUEsQ0FBQThDLE9BQUFBLENBQUFsQixJQUFBQSxDQUFBQSxDQUNBL1gsSUFBQUEsQ0FBQSxDQUFBO01BQUFsRTtJQUFBQSxDQUFBQSxLQUFBQTtNQUNBUSxNQUFBQSxDQUFBNGMsWUFBQUEsR0FBQXBkLElBQUFBLEVBQ0FTLFNBQUFBLENBQUFnYSxNQUFBQSxDQUFBLE1BQUEsRUFBQXphLElBQUFBLENBQUFnQixHQUFBQSxDQUFBQSxFQUNBMUIsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQVMsSUFBQUEsQ0FBQTtJQUFBLENBQUEsQ0FBQSxDQUVBNkUsS0FBQUEsQ0FBQStJLEdBQUFBLElBQUF0TyxPQUFBQSxDQUFBd0YsS0FBQUEsQ0FBQThJLEdBQUFBLENBQUFBLENBQUFBLEdBQ0FxTyxJQUFBQSxDQUFBamIsR0FBQUEsS0FDQVIsTUFBQUEsQ0FBQTRjLFlBQUFBLEdBQUFuQixJQUFBQSxFQUNBeGIsU0FBQUEsQ0FBQWdhLE1BQUFBLENBQUEsTUFBQSxFQUFBLEtBQUEsQ0FBQSxDQUFBLElBSUFqYSxNQUFBQSxDQUFBNGMsWUFBQUEsR0FBQUEsS0FBQW9DLENBQUFBLEVBQ0EvZSxTQUFBQSxDQUFBZ2EsTUFBQUEsQ0FBQSxNQUFBLEVBQUEsSUFBQSxDQUFBLENBRUE7RUFBQSxDQUFBO0VBV0FqYSxNQUFBQSxDQUFBNEQsR0FBQUEsQ0FBQSxPQUFBLEVBQUFDLENBQUFBLElBQUFBO0lBQ0FnVyxZQUFBQSxDQUFBMEIsWUFBQUEsRUFBQUEsQ0FBQTdYLElBQUFBLENBQUFDLFFBQUFBLElBQUFBO01BQ0EzRCxNQUFBQSxDQUFBMkMsU0FBQUEsR0FBQWdCLFFBQUFBLENBQUFuRSxJQUFBQSxFQVRBUSxNQUFBQSxDQUFBZ2IsY0FBQUEsR0FBQSxDQUFBLENBVUE7SUFBQSxDQUFBLENBQUEsRUFFQW5CLFlBQUFBLENBQUEvSixhQUFBQSxFQUFBQSxDQUFBcE0sSUFBQUEsQ0FBQUMsUUFBQUEsSUFBQUE7TUFDQTNELE1BQUFBLENBQUErUCxVQUFBQSxHQUFBcE0sUUFBQUEsQ0FBQW5FLElBQUFBLEVBVEFRLE1BQUFBLENBQUEwYSxjQUFBQSxHQUFBLENBQUEsQ0FVQTtJQUFBLENBQUEsQ0FBQSxFQUVBemEsU0FBQUEsQ0FBQWdhLE1BQUFBLEVBQUFBLENBQUF3QixJQUFBQSxJQUNBemIsTUFBQUEsQ0FBQWtmLGVBQUFBLENBQUE7TUFBQTFlLEdBQUFBLEVBQUFQLFNBQUFBLENBQUFnYSxNQUFBQSxFQUFBQSxDQUFBd0I7SUFBQUEsQ0FBQUEsQ0FBQUEsRUFFQXpiLE1BQUFBLENBQUFxYixRQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLEVBR0FyYixNQUFBQSxDQUFBdWUsS0FBQUEsR0FBQTtJQUNBM0MsS0FBQUEsRUFBQSxNQUFBO0lBQ0FsTixPQUFBQSxFQUFBQSxDQUFBO0VBQUEsQ0FBQSxFQUdBMU8sTUFBQUEsQ0FBQXdlLE9BQUFBLEdBQUE1QyxLQUFBQSxJQUFBQTtJQUNBNWIsTUFBQUEsQ0FBQXVlLEtBQUFBLENBQUEzQyxLQUFBQSxLQUFBQSxLQUFBQSxHQUNBNWIsTUFBQUEsQ0FBQXVlLEtBQUFBLENBQUE3UCxPQUFBQSxHQUFBQSxDQUFBMU8sTUFBQUEsQ0FBQXVlLEtBQUFBLENBQUE3UCxPQUFBQSxHQUVBMU8sTUFBQUEsQ0FBQXVlLEtBQUFBLEdBQUE7TUFDQTNDLEtBQUFBO01BQ0FsTixPQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUdBMU8sTUFBQUEsQ0FBQXFiLFFBQUFBLEVBQUE7RUFBQSxDQUFBLEVBR0FyYixNQUFBQSxDQUFBbWYsWUFBQUEsR0FBQUMsWUFBQUE7SUFDQSxDQUFBLEtBQUFwZixNQUFBQSxDQUFBa2IsS0FBQUEsQ0FBQWpmLE1BQUFBLElBQ0FvZixRQUFBQSxFQUFBQSxDQUFBM1gsSUFBQUEsQ0FBQXdYLEtBQUFBLElBQUFBO01BQ0FsYixNQUFBQSxDQUFBa2IsS0FBQUEsR0FBQWxiLE1BQUFBLENBQUFrYixLQUFBQSxDQUFBaEMsTUFBQUEsQ0FBQWdDLEtBQUFBLENBQUE7SUFBQSxDQUFBLENBQ0E7RUFBQSxDQUFBLEVBR0FsYixNQUFBQSxDQUFBcWIsUUFBQUEsR0FBQSxNQUFBO0lBQ0FyYixNQUFBQSxDQUFBa2IsS0FBQUEsR0FBQSxFQUFBLEVBQ0E2RCxJQUFBQSxHQUFBLENBQUEsRUFDQUUsU0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0E1RCxRQUFBQSxFQUFBQSxDQUFBM1gsSUFBQUEsQ0FBQXdYLEtBQUFBLElBQUFBO01BQ0FsYixNQUFBQSxDQUFBa2IsS0FBQUEsR0FBQUEsS0FBQUEsRUFDQWxiLE1BQUFBLENBQUF1SCxNQUFBQSxFQUFBO0lBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxFQUdBdkgsTUFBQUEsQ0FBQSthLGlCQUFBQSxHQUFBaFksUUFBQUEsSUFBQUE7SUFDQS9DLE1BQUFBLENBQUFnYixjQUFBQSxDQUFBalksUUFBQUEsQ0FBQXdLLElBQUFBLENBQUFBLEdBR0F2TixNQUFBQSxDQUFBZ2IsY0FBQUEsQ0FBQWpZLFFBQUFBLENBQUF3SyxJQUFBQSxDQUFBQSxHQUFBQSxDQUFBdk4sTUFBQUEsQ0FBQWdiLGNBQUFBLENBQUFqWSxRQUFBQSxDQUFBd0ssSUFBQUEsQ0FBQUEsR0FGQXZOLE1BQUFBLENBQUFnYixjQUFBQSxDQUFBalksUUFBQUEsQ0FBQXdLLElBQUFBLENBQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUlBdk4sTUFBQUEsQ0FBQXFiLFFBQUFBLEVBQUE7RUFBQSxDQUFBLEVBR0FyYixNQUFBQSxDQUFBeWEsaUJBQUFBLEdBQUFsTyxRQUFBQSxJQUFBQTtJQUNBdk0sTUFBQUEsQ0FBQTBhLGNBQUFBLENBQUFuTyxRQUFBQSxDQUFBQSxHQUdBdk0sTUFBQUEsQ0FBQTBhLGNBQUFBLENBQUFuTyxRQUFBQSxDQUFBQSxHQUFBQSxDQUFBdk0sTUFBQUEsQ0FBQTBhLGNBQUFBLENBQUFuTyxRQUFBQSxDQUFBQSxHQUZBdk0sTUFBQUEsQ0FBQTBhLGNBQUFBLENBQUFuTyxRQUFBQSxDQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFJQXZNLE1BQUFBLENBQUFxYixRQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUdBcmIsTUFBQUEsQ0FBQXFmLG9CQUFBQSxHQUFBLE1BQUE7SUFDQSxNQUFBdFAsVUFBQUEsR0FBQXBWLE1BQUFBLENBQUE0UCxJQUFBQSxDQUFBdkssTUFBQUEsQ0FBQTBhLGNBQUFBLENBQUFBO01BQ0E0RSxhQUFBQSxHQUNBdlAsVUFBQUEsQ0FBQTlULE1BQUFBLEtBQUE4VCxVQUFBQSxDQUFBN04sTUFBQUEsQ0FBQXFLLFFBQUFBLElBQUF2TSxNQUFBQSxDQUFBMGEsY0FBQUEsQ0FBQW5PLFFBQUFBLENBQUFBLENBQUFBLENBQUF0USxNQUFBQTtJQUNBK0QsTUFBQUEsQ0FBQTBhLGNBQUFBLEdBQUExYSxNQUFBQSxDQUFBK1AsVUFBQUEsQ0FBQS9VLE1BQUFBLENBQUEsQ0FBQWtILE1BQUFBLEVBQUFxSyxRQUFBQSxNQUNBckssTUFBQUEsQ0FBQXFLLFFBQUFBLENBQUFBLEdBQUFBLENBQUErUyxhQUFBQSxFQUNBcGQsTUFBQUEsQ0FBQUEsRUFDQSxDQUFBLENBQUEsQ0FBQSxFQUNBbEMsTUFBQUEsQ0FBQXFiLFFBQUFBLEVBQUE7RUFBQSxDQUFBO0VBR0EsTUFBQUEsUUFBQUEsR0FBQStELE1BQUFBLENBQUFBLEtBQUFBO0lBQ0EsSUFBQXBmLE1BQUFBLENBQUErRCxPQUFBQSxJQUFBa2IsU0FBQUEsRUFBQSxPQUFBLEVBQUE7SUFDQWpmLE1BQUFBLENBQUErRCxPQUFBQSxHQUFBQSxDQUFBLENBQUE7SUFDQSxNQUFBO01BQUF2RTtJQUFBQSxDQUFBQSxHQUFBQSxNQUFBcWEsWUFBQUEsQ0FBQXdCLFFBQUFBLENBQUE7TUFDQTBELElBQUFBO01BQ0FRLE1BQUFBLEVBQUF2ZixNQUFBQSxDQUFBdWUsS0FBQUEsQ0FBQTNDLEtBQUFBO01BQ0E0QyxPQUFBQSxFQUFBeGUsTUFBQUEsQ0FBQXVlLEtBQUFBLENBQUE3UCxPQUFBQSxHQUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBO01BQ0E4USxLQUFBQSxFQUFBLEdBQUE7TUFDQXZGLE1BQUFBLEVBQUFqYSxNQUFBQSxDQUFBaWEsTUFBQUE7TUFDQXRYLFNBQUFBLEVBQUFoSSxNQUFBQSxDQUFBNFAsSUFBQUEsQ0FBQXZLLE1BQUFBLENBQUFnYixjQUFBQSxDQUFBQSxDQUFBOVksTUFBQUEsQ0FBQWEsUUFBQUEsSUFBQS9DLE1BQUFBLENBQUFnYixjQUFBQSxDQUFBalksUUFBQUEsQ0FBQUEsQ0FBQUE7TUFDQWdOLFVBQUFBLEVBQUFwVixNQUFBQSxDQUFBNFAsSUFBQUEsQ0FBQXZLLE1BQUFBLENBQUEwYSxjQUFBQSxDQUFBQSxDQUFBeFksTUFBQUEsQ0FBQXFLLFFBQUFBLElBQUF2TSxNQUFBQSxDQUFBMGEsY0FBQUEsQ0FBQW5PLFFBQUFBLENBQUFBO0lBQUFBLENBQUFBLENBQUFBO0lBT0EsT0FMQXpOLE9BQUFBLENBQUFDLEdBQUFBLENBQUEsT0FBQSxFQUFBZ2dCLElBQUFBLEVBQUEsV0FBQSxFQUFBdmYsSUFBQUEsQ0FBQXZFLE1BQUFBLENBQUFnQixNQUFBQSxDQUFBQSxFQUNBdUQsSUFBQUEsQ0FBQXZFLE1BQUFBLENBQUFnQixNQUFBQSxHQUFBLEdBQUEsR0FBQWdqQixTQUFBQSxHQUFBQSxDQUFBLENBQUEsR0FDQUYsSUFBQUEsR0FBQXZmLElBQUFBLENBQUFpZ0IsUUFBQUEsRUFDQXpmLE1BQUFBLENBQUErRCxPQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQWpGLE9BQUFBLENBQUFDLEdBQUFBLENBQUFTLElBQUFBLENBQUF2RSxNQUFBQSxDQUFBWSxLQUFBQSxDQUFBLENBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQSxFQUNBMkQsSUFBQUEsQ0FBQXZFLE1BQUE7RUFBQSxDQUFBO0VBR0ErRSxNQUFBQSxDQUFBcWEsUUFBQUEsR0FBQSxNQUFBO0lBQ0FyYSxNQUFBQSxDQUFBd2EsT0FBQUEsQ0FBQXpmLEtBQUFBLEtBQ0FpRixNQUFBQSxDQUFBb2QsWUFBQUEsRUFBQUEsR0FDQUksS0FBQUEsQ0FBQSxHQUFBeGQsTUFBQUEsQ0FBQXdhLE9BQUFBLENBQUF6ZixLQUFBQSx5QkFBQUEsQ0FBQUEsSUFFQWlGLE1BQUFBLENBQUF3YSxPQUFBQSxDQUFBWSxPQUFBQSxHQUFBcGIsTUFBQUEsQ0FBQVMsV0FBQUEsQ0FBQUQsR0FBQUEsRUFFQVIsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUExQyxNQUFBQSxDQUFBamUsTUFBQUEsSUFBQSxFQUFBLElBQ0ErRCxNQUFBQSxDQUFBNGMsWUFBQUEsQ0FBQWhYLElBQUFBLElBQ0E1RixNQUFBQSxDQUFBNGMsWUFBQUEsQ0FBQTdNLFVBQUFBLENBQUE5VCxNQUFBQSxHQUFBLENBQUEsSUFFQStELE1BQUFBLENBQUE2ZCxNQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQWhFLFlBQUFBLENBQUE2RCxRQUFBQSxDQUFBMWQsTUFBQUEsQ0FBQVMsV0FBQUEsRUFBQVQsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUFBLENBQUFsWixJQUFBQSxDQUNBLENBQUE7TUFBQWxFO0lBQUFBLENBQUFBLEtBQUFBO01BQ0FRLE1BQUFBLENBQUFrZixlQUFBQSxDQUFBMWYsSUFBQUEsQ0FBQUEsRUFDQSxLQUFBLEtBQUFTLFNBQUFBLENBQUFnYSxNQUFBQSxFQUFBQSxDQUFBd0IsSUFBQUEsSUFDQXhiLFNBQUFBLENBQUFnYSxNQUFBQSxDQUFBLE1BQUEsRUFBQXphLElBQUFBLENBQUFnQixHQUFBQSxDQUFBQSxFQUVBUixNQUFBQSxDQUFBNmQsTUFBQUEsR0FBQUEsQ0FBQSxDQUFBO0lBQUEsQ0FBQSxFQUVBelEsR0FBQUEsSUFBQUE7TUFDQXRPLE9BQUFBLENBQUF3RixLQUFBQSxDQUFBOEksR0FBQUEsQ0FBQTtJQUFBLENBQUEsQ0FBQSxLQUlBcE4sTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUExQyxNQUFBQSxDQUFBOUYsT0FBQUEsQ0FBQTlVLElBQUFBLENBQUFDLEtBQUFBLENBQUFELElBQUFBLENBQUFPLFNBQUFBLENBQUFHLE1BQUFBLENBQUF3YSxPQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxFQUNBMWIsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQWlCLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBMUMsTUFBQUEsQ0FBQUEsRUFDQWxhLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBTyxPQUFBQSxFQUFBQSxFQUNBbmQsTUFBQUEsQ0FBQXdhLE9BQUFBLENBQUF6ZixLQUFBQSxHQUFBLEVBQUEsRUFDQWlGLE1BQUFBLENBQUF3YSxPQUFBQSxDQUFBaUQsS0FBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQSxDQUFBLEVBSUEvYyxDQUFBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBNFosS0FBQUEsRUFBQTtFQUFBLENBQUEsRUFHQXRhLE1BQUFBLENBQUEwZixVQUFBQSxHQUFBLENBQUFqRSxJQUFBQSxFQUFBa0UsT0FBQUEsS0FBQUE7SUFDQWxFLElBQUFBLENBQUF2QixNQUFBQSxDQUFBamUsTUFBQUEsSUFBQSxFQUFBLElBQUF3ZixJQUFBQSxDQUFBN1YsSUFBQUEsSUFBQTZWLElBQUFBLENBQUExTCxVQUFBQSxDQUFBOVQsTUFBQUEsR0FBQSxDQUFBLElBQ0E0ZCxZQUFBQSxDQUFBNkYsVUFBQUEsQ0FBQTtNQUNBbGYsR0FBQUEsRUFBQWliLElBQUFBLENBQUFqYixHQUFBQTtNQUFBQSxHQUNBbWY7SUFBQUEsQ0FBQUEsQ0FFQTtFQUFBLENBQUEsRUFHQTNmLE1BQUFBLENBQUE4ZCxVQUFBQSxHQUFBckMsSUFBQUEsSUFBQUE7SUFDQUEsSUFBQUEsQ0FBQWpiLEdBQUFBLEdBR0F1ZCxPQUFBQSxDQUFBLDRDQUFBLENBQUEsSUFDQWxFLFlBQUFBLENBQUFpRSxVQUFBQSxDQUFBckMsSUFBQUEsQ0FBQUEsQ0FBQS9YLElBQUFBLENBQUEsTUFBQTtNQUNBMUQsTUFBQUEsQ0FBQXFiLFFBQUFBLEVBQUFBLEVBQ0FyYixNQUFBQSxDQUFBNGMsWUFBQUEsR0FBQSxJQUFBO0lBQUEsQ0FBQSxDQUFBLEdBTEE1YyxNQUFBQSxDQUFBNGMsWUFBQUEsR0FBQSxJQVFBO0VBQUEsQ0FBQSxFQUdBNWMsTUFBQUEsQ0FBQWdELFdBQUFBLEdBQUEsQ0FBQXlZLElBQUFBLEVBQUExWSxRQUFBQSxLQUFBQTtJQUNBMFksSUFBQUEsQ0FBQTFZLFFBQUFBLEdBQUFBLFFBQUFBLENBQUF3SyxJQUFBQTtJQUNBLE1BQUF5UCxlQUFBQSxHQUFBdkIsSUFBQUEsQ0FBQTFMLFVBQUFBLENBQUFvQixPQUFBQSxDQUFBLGFBQUEsQ0FBQTtJQUNBLElBQUEsS0FBQXBPLFFBQUFBLENBQUF3SyxJQUFBQSxJQUFBeVAsZUFBQUEsR0FBQSxDQUFBLEdBQ0F2QixJQUFBQSxDQUFBMUwsVUFBQUEsQ0FBQW5ULElBQUFBLENBQUEsYUFBQSxDQUFBLEdBQ0EsSUFBQSxLQUFBbUcsUUFBQUEsQ0FBQXdLLElBQUFBLElBQUF5UCxlQUFBQSxJQUFBLENBQUEsSUFDQXZCLElBQUFBLENBQUExTCxVQUFBQSxDQUFBbUIsTUFBQUEsQ0FBQThMLGVBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBRUFuRCxZQUFBQSxDQUFBNkYsVUFBQUEsQ0FBQTtNQUNBbGYsR0FBQUEsRUFBQWliLElBQUFBLENBQUFqYixHQUFBQTtNQUNBdVAsVUFBQUEsRUFBQTBMLElBQUFBLENBQUExTCxVQUFBQTtNQUNBaE4sUUFBQUEsRUFBQUEsUUFBQUEsQ0FBQXdLO0lBQUFBLENBQUFBLENBQ0E7RUFBQSxDQUFBLEVBR0F2TixNQUFBQSxDQUFBNGYsYUFBQUEsR0FBQSxDQUFBbkUsSUFBQUEsRUFBQW9FLFVBQUFBLEtBQUFBO0lBQ0FwRSxJQUFBQSxDQUFBb0UsVUFBQUEsR0FBQUEsVUFBQUEsRUFDQWhHLFlBQUFBLENBQUE2RixVQUFBQSxDQUFBO01BQ0FsZixHQUFBQSxFQUFBaWIsSUFBQUEsQ0FBQWpiLEdBQUFBO01BQ0FxZjtJQUFBQSxDQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUdBN2YsTUFBQUEsQ0FBQThmLFdBQUFBLEdBQUEsQ0FBQXJFLElBQUFBLEVBQUFsUCxRQUFBQSxLQUFBQTtJQUNBLE1BQUF3USxhQUFBQSxHQUFBdEIsSUFBQUEsQ0FBQTFMLFVBQUFBLENBQUFvQixPQUFBQSxDQUFBNUUsUUFBQUEsQ0FBQUE7SUFDQXdRLGFBQUFBLElBQUEsQ0FBQSxHQUNBdEIsSUFBQUEsQ0FBQTFMLFVBQUFBLENBQUFtQixNQUFBQSxDQUFBNkwsYUFBQUEsRUFBQSxDQUFBLENBQUEsR0FFQXRCLElBQUFBLENBQUExTCxVQUFBQSxDQUFBblQsSUFBQUEsQ0FBQTJQLFFBQUFBLENBQUFBLEVBRUFzTixZQUFBQSxDQUFBNkYsVUFBQUEsQ0FBQTtNQUNBbGYsR0FBQUEsRUFBQWliLElBQUFBLENBQUFqYixHQUFBQTtNQUNBdVAsVUFBQUEsRUFBQTBMLElBQUFBLENBQUExTDtJQUFBQSxDQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUdBL1AsTUFBQUEsQ0FBQW9kLFlBQUFBLEdBQUEsTUFDQXBkLE1BQUFBLENBQUE0YyxZQUFBQSxJQUNBNWMsTUFBQUEsQ0FBQXdhLE9BQUFBLENBQUF6ZixLQUFBQSxJQUNBOEksQ0FBQUEsQ0FBQXdaLElBQUFBLENBQ0FyZCxNQUFBQSxDQUFBNGMsWUFBQUEsQ0FBQTFDLE1BQUFBLEVBQ0FvRCxNQUFBQSxJQUFBQSxNQUFBQSxDQUFBdmlCLEtBQUFBLENBQUF3aUIsbUJBQUFBLEVBQUFBLElBQUF2ZCxNQUFBQSxDQUFBd2EsT0FBQUEsQ0FBQXpmLEtBQUFBLENBQUF3aUIsbUJBQUFBLEVBQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUN4UkFwZ0IsT0FBQUEsQ0FDQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FFQVcsVUFBQUEsQ0FDQSxtQkFBQSxFQUNBLFVBQUFpQyxNQUFBQSxFQUFBK2YsWUFBQUEsRUFBQWxHLFlBQUFBLEVBQUFBO0VBQ0E3WixNQUFBQSxDQUFBNEQsR0FBQUEsQ0FBQSxPQUFBLEVBQUFDLENBQUFBLElBQUFBO0lBQ0E3RCxNQUFBQSxDQUFBUyxXQUFBQSxDQUFBNGQsS0FBQUEsSUFDQUMsUUFBQUEsRUFDQTtFQUFBLENBQUEsQ0FBQSxFQUdBeUIsWUFBQUEsQ0FBQUMsSUFBQUEsSUFDQW5HLFlBQUFBLENBQUFvRyxPQUFBQSxDQUFBRixZQUFBQSxDQUFBQyxJQUFBQSxDQUFBQSxDQUFBdGMsSUFBQUEsQ0FBQUMsUUFBQUEsSUFBQUE7SUFDQTNELE1BQUFBLENBQUFnZ0IsSUFBQUEsR0FBQXJjLFFBQUFBLENBQUFuRSxJQUFBQSxFQUNBVixPQUFBQSxDQUFBQyxHQUFBQSxDQUFBaUIsTUFBQUEsQ0FBQWdnQixJQUFBQSxDQUFBO0VBQUEsQ0FBQSxDQUdBO0FBQUEsQ0FBQSxDQUFBLEVDbEJBN2lCLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FXLFVBQUFBLENBQUEsYUFBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBQTtFQUVBQSxNQUFBQSxDQUFBa2dCLGFBQUFBLEdBQUEsQ0FBQSxFQUNBbGdCLE1BQUFBLENBQUFtZ0IsY0FBQUEsR0FBQSxFQUFBLEVBQ0FuZ0IsTUFBQUEsQ0FBQW9nQixXQUFBQSxHQUFBLEVBQUEsRUFDQXBnQixNQUFBQSxDQUFBcWdCLElBQUFBLEdBQUFBLENBQUEsQ0FBQTtFQUVBLElBc0JBQyxVQUFBQTtJQXRCQUMsTUFBQUEsR0FBQTtNQUNBemYsRUFBQUEsRUFBQSxJQUFBMGYsS0FBQUEsQ0FBQSxRQUFBLENBQUE7TUFDQUMsR0FBQUEsRUFBQSxJQUFBRCxLQUFBQSxDQUFBLFNBQUEsQ0FBQTtNQUNBRSxNQUFBQSxFQUFBLElBQUFGLEtBQUFBLENBQUEsWUFBQTtJQUFBLENBQUE7SUFJQUcsU0FBQUEsR0FBQSxDQUNBO01BQUEvYSxJQUFBQSxFQUFBLGVBQUE7TUFBQWdiLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhiLElBQUFBLEVBQUEsVUFBQTtNQUFBZ2IsS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBaGIsSUFBQUEsRUFBQSxTQUFBO01BQUFnYixLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoYixJQUFBQSxFQUFBLFFBQUE7TUFBQWdiLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhiLElBQUFBLEVBQUEsU0FBQTtNQUFBZ2IsS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBaGIsSUFBQUEsRUFBQSxPQUFBO01BQUFnYixLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoYixJQUFBQSxFQUFBLGFBQUE7TUFBQWdiLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhiLElBQUFBLEVBQUEsT0FBQTtNQUFBZ2IsS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBaGIsSUFBQUEsRUFBQSxZQUFBO01BQUFnYixLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFoYixJQUFBQSxFQUFBLE9BQUE7TUFBQWdiLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhiLElBQUFBLEVBQUEsdUJBQUE7TUFBQWdiLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQWhiLElBQUFBLEVBQUEsWUFBQTtNQUFBZ2IsS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsQ0FBQTtFQUtBNWdCLE1BQUFBLENBQUE2Z0IsUUFBQUEsR0FBQSxZQUFBO0lBQ0EsT0FBQUYsU0FBQUEsQ0FBQTFrQixNQUFBQSxHQUFBeUYsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQTNCLE1BQUFBLENBQUFrZ0IsYUFBQUEsSUFBQWxnQixNQUFBQSxDQUFBbWdCLGNBQUFBLEdBQUFuZ0IsTUFBQUEsQ0FBQW9nQixXQUFBQSxDQUFBQSxDQUFBQSxHQUFBLEdBQUEsR0FBQU8sU0FBQUEsQ0FBQTFrQixNQUNBO0VBQUEsQ0FBQSxFQUVBK0QsTUFBQUEsQ0FBQThnQixPQUFBQSxHQUFBLFlBQUE7SUFDQSxJQUFBQyxhQUFBQSxHQUFBL2dCLE1BQUFBLENBQUFtZ0IsY0FBQUEsR0FBQW5nQixNQUFBQSxDQUFBb2dCLFdBQUFBO0lBQ0FwZ0IsTUFBQUEsQ0FBQWtnQixhQUFBQSxJQStCQWMsYUFBQUEsQ0FBQVYsVUFBQUEsQ0FBQUEsRUFDQXRnQixNQUFBQSxDQUFBaWhCLEtBQUFBLEdBQUEsRUFBQSxFQUNBamhCLE1BQUFBLENBQUFrZ0IsYUFBQUEsR0FBQSxDQUFBLEVBQ0FsZ0IsTUFBQUEsQ0FBQXFnQixJQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQXJnQixNQUFBQSxDQUFBa2hCLFFBQUFBLEdBQUE7TUFBQXRiLElBQUFBLEVBQUEsRUFBQTtNQUFBZ2IsS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsS0FsQ0E1Z0IsTUFBQUEsQ0FBQWtnQixhQUFBQSxHQUFBUyxTQUFBQSxDQUFBMWtCLE1BQUFBLEdBQUE4a0IsYUFBQUEsRUFDQVQsVUFBQUEsR0FBQWEsV0FBQUEsQ0FBQSxZQUFBO01BRUEsSUFEQW5oQixNQUFBQSxDQUFBa2dCLGFBQUFBLEVBQUFBLEVBQ0EsQ0FBQSxLQUFBbGdCLE1BQUFBLENBQUFrZ0IsYUFBQUEsRUFNQSxPQUxBbGdCLE1BQUFBLENBQUFraEIsUUFBQUEsR0FBQTtRQUFBdGIsSUFBQUEsRUFBQSxxQkFBQTtRQUFBZ2IsS0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUEsRUFDQTVnQixNQUFBQSxDQUFBaWhCLEtBQUFBLEdBQUEsRUFBQSxFQUNBamhCLE1BQUFBLENBQUFrZ0IsYUFBQUEsR0FBQSxDQUFBLEVBQ0FsZ0IsTUFBQUEsQ0FBQXFnQixJQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQXJnQixNQUFBQSxDQUFBdUgsTUFBQUEsRUFBQUEsRUFDQXlaLGFBQUFBLENBQUFWLFVBQUFBLENBQUFBO01BRUEsSUFBQWMsZUFBQUEsR0FBQTFmLElBQUFBLENBQUFDLEtBQUFBLENBQUEzQixNQUFBQSxDQUFBa2dCLGFBQUFBLEdBQUFhLGFBQUFBLENBQUFBO1FBQ0FFLEtBQUFBLEdBQUFqaEIsTUFBQUEsQ0FBQWtnQixhQUFBQSxHQUFBa0IsZUFBQUEsR0FBQUwsYUFBQUE7TUFDQS9nQixNQUFBQSxDQUFBaWhCLEtBQUFBLEdBQUFBLEtBQUFBLEdBQUFqaEIsTUFBQUEsQ0FBQW1nQixjQUFBQSxHQUFBYyxLQUFBQSxHQUFBamhCLE1BQUFBLENBQUFtZ0IsY0FBQUEsR0FBQWMsS0FBQUEsRUFDQUEsS0FBQUEsR0FBQWpoQixNQUFBQSxDQUFBbWdCLGNBQUFBLEdBQ0FuZ0IsTUFBQUEsQ0FBQXFnQixJQUFBQSxHQUFBQSxDQUFBLENBQUEsR0FFQXJnQixNQUFBQSxDQUFBcWdCLElBQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUVBcmdCLE1BQUFBLENBQUFraEIsUUFBQUEsR0FBQVAsU0FBQUEsQ0FBQUEsU0FBQUEsQ0FBQTFrQixNQUFBQSxHQUFBbWxCLGVBQUFBLEdBQUEsQ0FBQSxDQUFBLEVBQ0FILEtBQUFBLEtBQUFqaEIsTUFBQUEsQ0FBQW1nQixjQUFBQSxHQUNBSSxNQUFBQSxDQUFBemYsRUFBQUEsQ0FBQXVnQixJQUFBQSxFQUFBQSxHQUNBLENBQUEsS0FBQUosS0FBQUEsR0FDQVYsTUFBQUEsQ0FBQUUsR0FBQUEsQ0FBQVksSUFBQUEsRUFBQUEsR0FDQXJoQixNQUFBQSxDQUFBa2hCLFFBQUFBLENBQUFOLEtBQUFBLElBQUFLLEtBQUFBLEtBQUF2ZixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBM0IsTUFBQUEsQ0FBQW1nQixjQUFBQSxHQUFBLENBQUEsQ0FBQSxJQUNBSSxNQUFBQSxDQUFBRyxNQUFBQSxDQUFBVyxJQUFBQSxFQUFBQSxFQUVBcmhCLE1BQUFBLENBQUF1SCxNQUFBQSxFQUNBO0lBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQSxDQVFBO0VBQUEsQ0FFQTtBQUFBLENBQUEsQ0FBQSxFQzdFQXBLLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQUFra0IsU0FBQUEsQ0FBQSxjQUFBLEVBQUEsVUFBQUMsU0FBQUEsRUFBQUE7RUFDQSxPQUFBO0lBQ0FDLFFBQUFBLEVBQUEsR0FBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLFlBQUFBLEVBQUE7SUFBQSxDQUFBO0lBRUFDLElBQUFBLEVBQUEsU0FBQUEsQ0FBQUYsS0FBQUEsRUFBQUcsRUFBQUEsRUFBQUMsSUFBQUEsRUFBQUE7TUFDQU4sU0FBQUEsQ0FBQXpnQixFQUFBQSxDQUFBLE9BQUEsRUFBQSxVQUFBN0IsQ0FBQUEsRUFBQUE7UUFDQTJpQixFQUFBQSxLQUFBM2lCLENBQUFBLENBQUE2aUIsTUFBQUEsSUFBQUYsRUFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQUcsUUFBQUEsQ0FBQTlpQixDQUFBQSxDQUFBNmlCLE1BQUFBLENBQUFBLElBQ0FMLEtBQUFBLENBQUFsYSxNQUFBQSxDQUFBLFlBQUE7VUFFQWthLEtBQUFBLENBQUFPLEtBQUFBLENBQUFQLEtBQUFBLENBQUFDLFlBQUFBLENBQ0E7UUFBQSxDQUFBLENBRUE7TUFBQSxDQUFBLENBQ0E7SUFBQTtFQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUNqQkF2a0IsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQWtrQixTQUFBQSxDQUFBLE1BQUEsRUFBQSxDQUNBLFlBQUEsRUFDQSxRQUFBLEVBQ0EsVUFBQSxFQUNBLGNBQUEsRUFDQSxVQUFBbGpCLFVBQUFBLEVBQUE2akIsTUFBQUEsRUFBQUMsUUFBQUEsRUFBQUMsWUFBQUEsRUFBQUE7RUFFQSxJQUFBQyxRQUFBQSxHQUFBLFNBQUFBLENBQUFDLGdCQUFBQSxFQUFBQTtJQUVBLElBQUFyUCxLQUFBQSxHQUFBO01BQ0FzUCxJQUFBQSxFQUFBRCxnQkFBQUE7TUFDQUUsR0FBQUEsRUFBQTtJQUFBLENBQUE7SUFPQSxPQUpBdlAsS0FBQUEsQ0FBQXNQLElBQUFBLENBQUFFLEtBQUFBLENBQUEsU0FBQSxDQUFBLEtBQ0F4UCxLQUFBQSxDQUFBdVAsR0FBQUEsR0FBQSxpQkFBQSxDQUFBLEVBR0F2UCxLQUVBO0VBQUEsQ0FBQTtFQTZFQSxPQUFBO0lBQ0F3TyxRQUFBQSxFQUFBLEdBQUE7SUFDQUcsSUFBQUEsRUFBQSxTQUFBQSxDQUFBRixLQUFBQSxFQUFBZ0IsSUFBQUEsRUFBQUE7TUFFQWhCLEtBQUFBLENBQUFpQixjQUFBQSxHQUFBLEVBQUE7TUFFQSxJQUFBQyxJQUFBQSxHQUFBLGlHQUFBO01BR0FBLElBQUFBLEdBQUFBLENBREFBLElBQUFBLEdBQUFBLElBQUFBLENBQUF4bkIsT0FBQUEsQ0FBQSxPQUFBLEVBQUFnbkIsWUFBQUEsQ0FBQVMsV0FBQUEsRUFBQUEsQ0FBQUEsRUFDQXpuQixPQUFBQSxDQUFBLE9BQUEsRUFBQWduQixZQUFBQSxDQUFBVSxTQUFBQSxFQUFBQSxDQUFBQSxFQUVBSixJQUFBQSxDQUFBSyxNQUFBQSxDQUFBWixRQUFBQSxDQUFBUyxJQUFBQSxDQUFBVCxDQUFBVCxLQUFBQSxDQUFBQSxDQUFBQSxFQUVBcmpCLFVBQUFBLENBQUF3RixHQUFBQSxDQUFBLG1CQUFBLEVBQUEsVUFBQTRQLEtBQUFBLEVBQUF1UCxPQUFBQSxFQUFBQyxRQUFBQSxFQUFBQyxTQUFBQSxFQUFBQyxVQUFBQSxFQUFBQTtRQUVBekIsS0FBQUEsQ0FBQWlCLGNBQUFBLEdBMUZBLFVBQUE5a0IsS0FBQUEsRUFBQUE7VUFLQSxLQUhBLElBQUF1bEIsTUFBQUEsR0FBQSxDQUFBLENBQUEsRUFHQSxFQUFBLEtBQUF2bEIsS0FBQUEsQ0FBQWdJLElBQUFBLEdBQUE7WUFDQSxJQUFBd2QsTUFBQUEsR0FBQW5CLE1BQUFBLENBQUFvQixHQUFBQSxDQUFBLEdBQUEsRUFBQXpsQixLQUFBQSxDQUFBQTtZQUdBdWxCLE1BQUFBLENBQUFDLE1BQUFBLENBQUF4ZCxJQUFBQSxDQUFBQSxLQUNBdWQsTUFBQUEsQ0FBQUMsTUFBQUEsQ0FBQXhkLElBQUFBLENBQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsRUFJQWhJLEtBQUFBLENBQUF5a0IsZ0JBQUFBLEtBQ0FjLE1BQUFBLENBQUFDLE1BQUFBLENBQUF4ZCxJQUFBQSxDQUFBQSxDQUFBLEVBQUEsQ0FBQSxLQUNBdWQsTUFBQUEsQ0FBQUMsTUFBQUEsQ0FBQXhkLElBQUFBLENBQUFBLENBQUEsRUFBQSxDQUFBLEdBQUF3YyxRQUFBQSxDQUFBeGtCLEtBQUFBLENBQUF5a0IsZ0JBQUFBLENBQUFBLENBQUFBLENBQUFBLEVBS0F6a0IsS0FBQUEsQ0FBQTBsQixLQUFBQSxJQUNBemYsQ0FBQUEsQ0FBQTVHLE9BQUFBLENBQUFXLEtBQUFBLENBQUEwbEIsS0FBQUEsRUFBQSxVQUFBQyxJQUFBQSxFQUFBNW1CLEdBQUFBLEVBQUFBO2NBR0EsSUFBQTRtQixJQUFBQSxDQUFBbEIsZ0JBQUFBLEVBS0EsT0FBQSxDQUFBMWxCLEdBQUFBLEdBQUFBLEdBQUFBLENBQUFpa0IsS0FBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsSUFFQXVDLE1BQUFBLENBQUF4bUIsR0FBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUNBd21CLE1BQUFBLENBQUF4bUIsR0FBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsTUFJQXdtQixNQUFBQSxDQUFBeG1CLEdBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQUEsR0FBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUNBd21CLE1BQUFBLENBQUF4bUIsR0FBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBQSxHQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUF5bEIsUUFBQUEsQ0FBQW1CLElBQUFBLENBQUFsQixnQkFBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsSUFBQUEsTUFPQWMsTUFBQUEsQ0FBQUMsTUFBQUEsQ0FBQXhkLElBQUFBLENBQUFBLENBQUFqSixHQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUF5bEIsUUFBQUEsQ0FBQW1CLElBQUFBLENBQUFsQixnQkFBQUEsQ0FBQUEsQ0FFQTtZQUFBLENBQUEsQ0FBQSxFQUlBemtCLEtBQUFBLEdBQUF3bEIsTUFDQTtVQUFBO1VBR0EsSUFBQUksSUFBQUEsR0FBQSxFQUFBO1VBZ0JBLE9BZkEzZixDQUFBQSxDQUFBNUcsT0FBQUEsQ0FBQWttQixNQUFBQSxFQUFBLFVBQUFHLEtBQUFBLEVBQUFBO1lBRUF6ZixDQUFBQSxDQUFBNUcsT0FBQUEsQ0FBQXFtQixLQUFBQSxFQUFBLFVBQUF0USxLQUFBQSxFQUFBQTtjQUVBblAsQ0FBQUEsQ0FBQXdWLFFBQUFBLENBQUFtSyxJQUFBQSxFQUFBeFEsS0FBQUEsQ0FBQUEsSUFDQXdRLElBQUFBLENBQUE1bUIsSUFBQUEsQ0FBQW9XLEtBQUFBLENBR0E7WUFBQSxDQUFBLENBRUE7VUFBQSxDQUFBLENBQUEsRUFHQXdRLElBQUFBLENBQUE5VSxPQUFBQSxFQUFBQSxFQUVBOFUsSUFFQTtRQUFBLENBaUJBQyxDQUFBVixPQUFBQSxDQUVBO01BQUEsQ0FBQSxDQUVBO0lBQUE7RUFBQSxDQUdBO0FBQUEsQ0FBQSxDQUFBLENBQUEsRUN4SEE1bEIsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQWUsT0FBQUEsQ0FBQSxlQUFBLEVBQUEsVUFBQXVsQixLQUFBQSxFQUFBQTtFQUVBLElBQUFDLEdBQUFBLEdBQUF2b0IsSUFBQUE7RUFFQXVvQixHQUFBQSxDQUFBN1QsYUFBQUEsR0FBQSxZQUFBO0lBQ0EsT0FBQTRULEtBQUFBLENBQUFMLEdBQUFBLENBQUEsaUJBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQU0sR0FBQUEsQ0FBQUMsUUFBQUEsR0FBQSxVQUFBclgsUUFBQUEsRUFBQUE7SUFDQSxPQUFBbVgsS0FBQUEsQ0FBQUwsR0FBQUEsQ0FBQSxrQkFBQSxHQUFBOVcsUUFBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQW9YLEdBQUFBLENBQUFqVCxXQUFBQSxHQUFBLFVBQUFuRSxRQUFBQSxFQUFBQTtJQUNBLE9BQUFtWCxLQUFBQSxDQUFBMVAsSUFBQUEsQ0FBQSxrQkFBQSxFQUFBekgsUUFBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQW9YLEdBQUFBLENBQUE5UyxPQUFBQSxHQUFBLFVBQUF0RSxRQUFBQSxFQUFBMkQsSUFBQUEsRUFBQUE7SUFDQSxPQUFBd1QsS0FBQUEsQ0FBQTFQLElBQUFBLENBQUEsa0JBQUEsR0FBQXpILFFBQUFBLEdBQUEsUUFBQSxFQUFBMkQsSUFBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQXlULEdBQUFBLENBQUF0UyxlQUFBQSxHQUFBLFVBQUFvSyxJQUFBQSxFQUFBQTtJQUNBa0ksR0FBQUEsQ0FBQXZOLE9BQUFBLEdBQUFxRixJQUFBQSxFQUNBa0ksR0FBQUEsQ0FBQXRQLFlBQUFBLEdBQUEsRUFBQTtJQUVBLEtBQUEsSUFBQXJZLENBQUFBLEdBQUEsQ0FBQSxFQUFBQSxDQUFBQSxHQUFBeWYsSUFBQUEsQ0FBQXhmLE1BQUFBLEVBQUFELENBQUFBLEVBQUFBLEVBQ0EsS0FBQSxJQUFBaVUsQ0FBQUEsR0FBQWpVLENBQUFBLEdBQUEsQ0FBQSxFQUFBaVUsQ0FBQUEsR0FBQXdMLElBQUFBLENBQUF4ZixNQUFBQSxFQUFBZ1UsQ0FBQUEsRUFBQUEsRUFBQTtNQUNBLElBQUF4TyxNQUFBQSxHQUFBQyxJQUFBQSxDQUFBd0csS0FBQUEsQ0FBQXhHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLENBQUFBO01BQ0FraUIsR0FBQUEsQ0FBQXRQLFlBQUFBLENBQUF6WCxJQUFBQSxDQUFBO1FBQ0FxTCxFQUFBQSxFQUFBLENBQUE7UUFDQTJNLFdBQUFBLEVBQUE2RyxJQUFBQSxDQUFBLENBQUEsS0FBQWhhLE1BQUFBLEdBQUF6RixDQUFBQSxHQUFBaVUsQ0FBQUEsQ0FBQUEsQ0FBQXJLLElBQUFBO1FBQ0FpUCxZQUFBQSxFQUFBNEcsSUFBQUEsQ0FBQSxDQUFBLEtBQUFoYSxNQUFBQSxHQUFBd08sQ0FBQUEsR0FBQWpVLENBQUFBLENBQUFBLENBQUE0SixJQUFBQTtRQUNBK08sTUFBQUEsRUFBQTtNQUFBLENBQUEsQ0FFQTtJQUFBO0lBR0EsS0FBQTNZLENBQUFBLElBU0EsVUFBQThLLEtBQUFBLEVBQUFBO01BQ0EsSUFBQStjLENBQUFBO1FBQUE3bkIsQ0FBQUE7UUFBQThuQixDQUFBQSxHQUFBaGQsS0FBQUEsQ0FBQTdLLE1BQUFBO01BRUEsT0FBQTZuQixDQUFBQSxHQUVBOW5CLENBQUFBLEdBQUEwRixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBcWlCLENBQUFBLEVBQUFBLENBQUFBLEVBR0FELENBQUFBLEdBQUEvYyxLQUFBQSxDQUFBZ2QsQ0FBQUEsQ0FBQUEsRUFDQWhkLEtBQUFBLENBQUFnZCxDQUFBQSxDQUFBQSxHQUFBaGQsS0FBQUEsQ0FBQTlLLENBQUFBLENBQUFBLEVBQ0E4SyxLQUFBQSxDQUFBOUssQ0FBQUEsQ0FBQUEsR0FBQTZuQixDQUdBO0lBQUEsQ0F2QkFFLENBQUFKLEdBQUFBLENBQUF0UCxZQUFBQSxDQUFBQSxFQUNBc1AsR0FBQUEsQ0FBQXRQLFlBQUFBLEVBQ0FzUCxHQUFBQSxDQUFBdFAsWUFBQUEsQ0FBQXJZLENBQUFBLENBQUFBLENBQUFpTSxFQUFBQSxHQUFBak0sQ0FBQUEsR0FBQSxDQUVBO0VBQUEsQ0FBQSxFQUVBMm5CLEdBQUFBLENBQUFyUCxlQUFBQSxHQUFBLFVBQUFtSCxJQUFBQSxFQUFBQTtJQUNBLE9BQUFrSSxHQUFBQSxDQUFBdFAsWUFDQTtFQUFBLENBaUJBO0FBQUEsQ0FBQSxDQUFBLEVDN0RBbFgsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQWUsT0FBQUEsQ0FBQSxVQUFBLEVBQUEsVUFBQXVsQixLQUFBQSxFQUFBQTtFQUVBdG9CLElBQUFBLENBRUF1RSxJQUFBQSxHQUFBLFVBQUFrTixLQUFBQSxFQUFBQTtJQUVBLE9BREEvTixPQUFBQSxDQUFBQyxHQUFBQSxDQUFBOE4sS0FBQUEsQ0FBQUEsRUFDQTZXLEtBQUFBLENBQUExUCxJQUFBQSxDQUFBLFlBQUEsRUFBQW5ILEtBQUFBLENBQ0E7RUFBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDVkExUCxPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBZSxPQUFBQSxDQUFBLFNBQUEsRUFBQSxVQUFBdWxCLEtBQUFBLEVBQUFBO0VBRUF0b0IsSUFBQUEsQ0FFQTRvQixTQUFBQSxHQUFBLFVBQUFDLE1BQUFBLEVBQUFBO0lBQ0EsT0FBQVAsS0FBQUEsQ0FBQUwsR0FBQUEsQ0FBQSxvQkFBQSxHQUFBWSxNQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUpBN29CLElBQUFBLENBTUE4b0IsU0FBQUEsR0FBQSxVQUFBRCxNQUFBQSxFQUFBQTtJQUNBLE9BQUFQLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsb0JBQUEsR0FBQVksTUFBQUEsQ0FDQTtFQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUNiQTltQixPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBZSxPQUFBQSxDQUFBLFNBQUEsRUFBQSxVQUFBdWxCLEtBQUFBLEVBQUFBO0VBRUF0b0IsSUFBQUEsQ0FFQStvQixZQUFBQSxHQUFBLFVBQUFuRSxJQUFBQSxFQUFBM2YsSUFBQUEsRUFBQUE7SUFDQSxPQUFBcWpCLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsYUFBQSxHQUFBckQsSUFBQUEsR0FBQSxHQUFBLEdBQUEzZixJQUFBQSxHQUFBLFlBQUEsQ0FDQTtFQUFBLENBQUEsRUFKQWpGLElBQUFBLENBTUFzUCxZQUFBQSxHQUFBLFVBQUFzVixJQUFBQSxFQUFBM2YsSUFBQUEsRUFBQWlILEtBQUFBLEVBQUFBO0lBQ0EsT0FBQW9jLEtBQUFBLENBQUExUCxJQUFBQSxDQUFBLGFBQUEsR0FBQWdNLElBQUFBLEdBQUEsR0FBQSxHQUFBM2YsSUFBQUEsR0FBQSxZQUFBLEVBQUE7TUFDQWlIO0lBQUFBLENBQUFBLENBRUE7RUFBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDZkFuSyxPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBZSxPQUFBQSxDQUFBLGFBQUEsRUFBQSxZQUFBO0VBRUEsSUFBQXdsQixHQUFBQSxHQUFBdm9CLElBQUFBO0VBRUF1b0IsR0FBQUEsQ0FBQWhoQixTQUFBQSxHQUFBLENBQ0E7SUFDQTRLLElBQUFBLEVBQUEsSUFBQTtJQUNBM0gsSUFBQUEsRUFBQSxTQUFBO0lBQ0E4UyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FuTCxJQUFBQSxFQUFBLElBQUE7SUFDQTNILElBQUFBLEVBQUEsWUFBQTtJQUNBOFMsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBbkwsSUFBQUEsRUFBQSxJQUFBO0lBQ0EzSCxJQUFBQSxFQUFBLFVBQUE7SUFDQThTLElBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsRUFJQWlMLEdBQUFBLENBQUFoWCxJQUFBQSxHQUFBLENBQ0E7SUFDQVksSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBQSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FBLElBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsRUFJQW9XLEdBQUFBLENBQUEvZ0IsZ0JBQUFBLEdBQUErZ0IsR0FBQUEsQ0FBQWhoQixTQUFBQSxDQUFBLENBQUEsQ0FBQSxFQUVBZ2hCLEdBQUFBLENBQUEzZ0IsV0FBQUEsR0FBQSxVQUFBRCxRQUFBQSxFQUFBQTtJQUVBLE9BREE0Z0IsR0FBQUEsQ0FBQS9nQixnQkFBQUEsR0FBQUcsUUFBQUEsRUFDQUEsUUFDQTtFQUFBLENBQUEsRUFFQTRnQixHQUFBQSxDQUFBOWdCLFdBQUFBLEdBQUEsWUFBQTtJQUNBLE9BQUE4Z0IsR0FBQUEsQ0FBQS9nQixnQkFDQTtFQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUM5Q0F6RixPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBZSxPQUFBQSxDQUFBLFVBQUEsRUFBQSxVQUFBdWxCLEtBQUFBLEVBQUFBO0VBRUF0b0IsSUFBQUEsQ0FFQTZZLEtBQUFBLEdBQUEsWUFBQTtJQUNBLE9BQUF5UCxLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLFlBQUEsQ0FDQTtFQUFBLENBQUEsRUFKQWpvQixJQUFBQSxDQU1BMFksTUFBQUEsR0FBQSxVQUFBRSxJQUFBQSxFQUFBQTtJQUNBLE9BQUEwUCxLQUFBQSxDQUFBMVAsSUFBQUEsQ0FBQSxZQUFBLEVBQUFBLElBQUFBLENBQ0E7RUFBQSxDQUFBLEVBUkE1WSxJQUFBQSxDQVVBK1ksT0FBQUEsR0FBQSxVQUFBSCxJQUFBQSxFQUFBQTtJQUNBLE9BQUEwUCxLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLGFBQUEsR0FBQXJQLElBQUFBLENBQUF4VCxHQUFBQSxDQUNBO0VBQUEsQ0FFQTtBQUFBLENBQUEsQ0FBQSxFQ2pCQXJELE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQUFlLE9BQUFBLENBQUEsY0FBQSxFQUFBLFVBQUF1bEIsS0FBQUEsRUFBQUE7RUFDQSxJQUFBQyxHQUFBQSxHQUFBdm9CLElBQUFBO0VBRUF1b0IsR0FBQUEsQ0FBQWxGLFFBQUFBLEdBQUEsWUFBQTtJQUNBLE9BQUFpRixLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLHVCQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFNLEdBQUFBLENBQUF0SSxRQUFBQSxHQUFBLFVBQUEzTyxPQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUFBO0lBQ0EsSUFBQTdPLEdBQUFBLEdBQ0EsdUJBQUEsSUFDQTZPLE9BQUFBLENBQUE4UyxLQUFBQSxHQUFBLFVBQUE5UyxPQUFBQSxDQUFBOFMsS0FBQUEsRUFBQUEsR0FBQSxFQUFBLENBQUEsSUFDQTlTLE9BQUFBLENBQUFxUyxJQUFBQSxHQUFBLFNBQUFyUyxPQUFBQSxDQUFBcVMsSUFBQUEsRUFBQUEsR0FBQSxFQUFBLENBQUEsSUFDQXJTLE9BQUFBLENBQUE2UyxNQUFBQSxHQUFBLFlBQUE3UyxPQUFBQSxDQUFBNlMsTUFBQUEsRUFBQUEsR0FBQSxFQUFBLENBQUEsSUFDQTdTLE9BQUFBLENBQUE4UixPQUFBQSxHQUFBLGFBQUE5UixPQUFBQSxDQUFBOFIsT0FBQUEsRUFBQUEsR0FBQSxFQUFBLENBQUEsSUFDQTlSLE9BQUFBLENBQUEvSixTQUFBQSxJQUFBK0osT0FBQUEsQ0FBQS9KLFNBQUFBLENBQUExRyxNQUFBQSxHQUFBLENBQUEsR0FBQSxhQUFBeVEsT0FBQUEsQ0FBQS9KLFNBQUFBLENBQUF5aEIsSUFBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsQ0FBQSxJQUNBMVgsT0FBQUEsQ0FBQXFELFVBQUFBLElBQUFyRCxPQUFBQSxDQUFBcUQsVUFBQUEsQ0FBQTlULE1BQUFBLEdBQUEsQ0FBQSxHQUFBLGVBQUF5USxPQUFBQSxDQUFBcUQsVUFBQUEsQ0FBQXFVLElBQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsSUFDQTFYLE9BQUFBLENBQUF1TixNQUFBQSxHQUFBLFdBQUF2TixPQUFBQSxDQUFBdU4sTUFBQUEsRUFBQUEsR0FBQSxFQUFBLENBQUE7SUFDQSxPQUFBeUosS0FBQUEsQ0FBQUwsR0FBQUEsQ0FBQXhsQixHQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBOGxCLEdBQUFBLENBQUE3VCxhQUFBQSxHQUFBLE1BQ0E0VCxLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLDJCQUFBLENBQUEsRUFHQU0sR0FBQUEsQ0FBQXBJLFlBQUFBLEdBQUEsTUFDQW1JLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsMEJBQUEsQ0FBQSxFQUdBTSxHQUFBQSxDQUFBaEgsT0FBQUEsR0FBQSxVQUFBbEIsSUFBQUEsRUFBQUE7SUFDQSxPQUFBaUksS0FBQUEsQ0FBQUwsR0FBQUEsQ0FBQSx1QkFBQSxHQUFBNUgsSUFBQUEsQ0FBQWpiLEdBQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFtakIsR0FBQUEsQ0FBQWpFLFVBQUFBLEdBQUEsVUFBQWpFLElBQUFBLEVBQUFBO0lBQ0EsT0FBQWlJLEtBQUFBLENBQUExUCxJQUFBQSxDQUFBLHVCQUFBLEdBQUF5SCxJQUFBQSxDQUFBamIsR0FBQUEsRUFBQWliLElBQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFrSSxHQUFBQSxDQUFBakcsUUFBQUEsR0FBQSxVQUFBcmQsSUFBQUEsRUFBQW9iLElBQUFBLEVBQUFBO0lBQ0EsT0FBQWlJLEtBQUFBLENBQUFXLEdBQUFBLENBQUEsc0JBQUEsRUFBQTtNQUNBaGtCLElBQUFBO01BQ0FvYjtJQUFBQSxDQUFBQSxDQUVBO0VBQUEsQ0FBQSxFQUVBa0ksR0FBQUEsQ0FBQWhHLFVBQUFBLEdBQUEsVUFBQXRkLElBQUFBLEVBQUFvYixJQUFBQSxFQUFBQTtJQUNBaUksS0FBQUEsQ0FBQUwsR0FBQUEsQ0FBQSx1QkFBQSxHQUFBNUgsSUFBQUEsQ0FBQWpiLEdBQUFBLEdBQUEsVUFBQSxHQUFBSCxJQUFBQSxDQUFBRyxHQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBbWpCLEdBQUFBLENBQUE3RixVQUFBQSxHQUFBLFVBQUFyQyxJQUFBQSxFQUFBQTtJQUNBLE9BQUFpSSxLQUFBQSxDQUFBWSxNQUFBQSxDQUFBLHVCQUFBLEdBQUE3SSxJQUFBQSxDQUFBamIsR0FBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQW1qQixHQUFBQSxDQUFBeEYsU0FBQUEsR0FBQSxVQUFBMUMsSUFBQUEsRUFBQWhKLElBQUFBLEVBQUFBO0lBQ0EsT0FBQWlSLEtBQUFBLENBQUExUCxJQUFBQSxDQUFBLHdCQUFBeUgsSUFBQUEsQ0FBQWpiLEdBQUFBLFdBQUFpUyxJQUFBQSxFQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBa1IsR0FBQUEsQ0FBQWhGLFFBQUFBLEdBQUEsWUFBQTtJQUNBLE9BQUErRSxLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLHNCQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFNLEdBQUFBLENBQUE3RSxXQUFBQSxHQUFBLFlBQUE7SUFDQSxPQUFBNEUsS0FBQUEsQ0FBQTFQLElBQUFBLENBQUEsc0JBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQTJQLEdBQUFBLENBQUExRCxPQUFBQSxHQUFBLFVBQUFoWSxFQUFBQSxFQUFBQTtJQUNBLE9BQUF5YixLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLHVCQUFBcGIsRUFBQUEsRUFBQUEsQ0FDQTtFQUFBLENBQ0E7QUFBQSxDQUFBLENBQUEsRUNsRUE5SyxPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBZSxPQUFBQSxDQUFBLFNBQUEsRUFBQSxVQUFBdWxCLEtBQUFBLEVBQUFBO0VBQ0EsSUFBQUMsR0FBQUEsR0FBQXZvQixJQUFBQTtFQUVBdW9CLEdBQUFBLENBQUFZLE9BQUFBLEdBQUEsWUFBQTtJQUNBLE9BQUFiLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsWUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBTSxHQUFBQSxDQUFBckYsUUFBQUEsR0FBQSxZQUFBO0lBQ0EsT0FBQW9GLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsZ0JBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQU0sR0FBQUEsQ0FBQTlFLFNBQUFBLEdBQUEsVUFBQTVXLEVBQUFBLEVBQUFBO0lBQ0EsT0FBQXliLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsa0JBQUFwYixFQUFBQSxFQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBMGIsR0FBQUEsQ0FBQWEsUUFBQUEsR0FBQSxVQUFBQyxLQUFBQSxFQUFBQTtJQUVBLE9BREFmLEtBQUFBLENBQUFnQixRQUFBQSxDQUFBQyxPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBSCxLQUFBQSxFQUNBZCxHQUFBQSxDQUFBWSxPQUFBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBWixHQUFBQSxDQUFBeFIsWUFBQUEsR0FBQSxVQUFBOVIsSUFBQUEsRUFBQUE7SUFDQSxPQUFBcWpCLEtBQUFBLENBQ0ExUCxJQUFBQSxDQUFBLHlCQUFBLEVBQUE7TUFDQTNUO0lBQUFBLENBQUFBLENBQUFBLENBRUFxRCxJQUFBQSxDQUFBLFVBQUFDLFFBQUFBLEVBQUFBO01BRUEsT0FEQWxGLE1BQUFBLENBQUE4QixZQUFBQSxDQUFBa2tCLEtBQUFBLEdBQUE5Z0IsUUFBQUEsQ0FBQW5FLElBQUFBLEVBQ0Fta0IsR0FBQUEsQ0FBQWEsUUFBQUEsQ0FBQTdnQixRQUFBQSxDQUFBbkUsSUFBQUEsQ0FDQTtJQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQW1rQixHQUFBQSxDQUFBdmpCLEtBQUFBLEdBQUEsVUFBQUMsSUFBQUEsRUFBQUE7SUFDQSxPQUFBcWpCLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsYUFBQSxHQUFBaGpCLElBQUFBLEdBQUEsUUFBQSxDQUFBLENBQUFxRCxJQUFBQSxDQUFBLFVBQUFDLFFBQUFBLEVBQUFBO01BRUEsT0FEQWxGLE1BQUFBLENBQUE4QixZQUFBQSxDQUFBa2tCLEtBQUFBLEdBQUE5Z0IsUUFBQUEsQ0FBQW5FLElBQUFBLEVBQ0Fta0IsR0FBQUEsQ0FBQWEsUUFBQUEsQ0FBQTdnQixRQUFBQSxDQUFBbkUsSUFBQUEsQ0FDQTtJQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQW1rQixHQUFBQSxDQUFBckwsVUFBQUEsR0FBQSxVQUFBalksSUFBQUEsRUFBQUE7SUFDQSxPQUFBcWpCLEtBQUFBLENBQ0ExUCxJQUFBQSxDQUFBLGFBQUEsR0FBQTNULElBQUFBLENBQUFHLEdBQUFBLEVBQUE7TUFDQUg7SUFBQUEsQ0FBQUEsQ0FBQUEsQ0FFQXFELElBQUFBLENBQUEsWUFBQTtNQUNBLE9BQUFpZ0IsR0FBQUEsQ0FBQVksT0FBQUEsRUFDQTtJQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQVosR0FBQUEsQ0FBQTdMLGFBQUFBLEdBQUEsVUFBQXpYLElBQUFBLEVBQUEwWCxRQUFBQSxFQUFBQTtJQUNBLE9BQUEyTCxLQUFBQSxDQUFBMVAsSUFBQUEsQ0FBQSxhQUFBLEdBQUEzVCxJQUFBQSxHQUFBLGVBQUEsRUFBQTtNQUNBMFg7SUFBQUEsQ0FBQUEsQ0FFQTtFQUFBLENBQUEsRUFFQTRMLEdBQUFBLENBQUF4TCxjQUFBQSxHQUFBLFVBQUE5WCxJQUFBQSxFQUFBK1gsV0FBQUEsRUFBQVIsV0FBQUEsRUFBQUE7SUFDQSxPQUFBOEwsS0FBQUEsQ0FBQTFQLElBQUFBLENBQUEsYUFBQSxHQUFBM1QsSUFBQUEsR0FBQSxXQUFBLEVBQUE7TUFDQStYLFdBQUFBO01BQ0FSO0lBQUFBLENBQUFBLENBRUE7RUFBQSxDQUFBLEVBRUErTCxHQUFBQSxDQUFBdEwsY0FBQUEsR0FBQSxVQUFBaFksSUFBQUEsRUFBQW9YLFdBQUFBLEVBQUFBO0lBQ0EsT0FBQWlNLEtBQUFBLENBQ0ExUCxJQUFBQSxDQUFBLGFBQUEsR0FBQTNULElBQUFBLEdBQUEsV0FBQSxFQUFBO01BQ0FvWDtJQUFBQSxDQUFBQSxDQUFBQSxDQUVBL1QsSUFBQUEsQ0FBQSxZQUFBO01BQ0EsT0FBQWlnQixHQUFBQSxDQUFBWSxPQUFBQSxFQUNBO0lBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBWixHQUFBQSxDQUFBM2YsTUFBQUEsR0FBQSxZQUFBO0lBQ0F2RixNQUFBQSxDQUFBOEIsWUFBQUEsQ0FBQTZELEtBQUFBLEVBQUFBLEVBQ0FzZixLQUFBQSxDQUFBZ0IsUUFBQUEsQ0FBQUMsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxFQUNBO0VBQUEsQ0FBQSxFQUVBakIsR0FBQUEsQ0FBQWtCLFVBQUFBLEdBQUEsVUFBQW5OLFFBQUFBLEVBQUFLLFFBQUFBLEVBQUFBO0lBQ0EsT0FBQTJMLEtBQUFBLENBQ0ExUCxJQUFBQSxDQUFBLFlBQUEsRUFBQTtNQUNBMEQsUUFBQUE7TUFDQUs7SUFBQUEsQ0FBQUEsQ0FBQUEsQ0FFQXJVLElBQUFBLENBQUEsWUFBQTtNQUNBLE9BQUFpZ0IsR0FBQUEsQ0FBQXZqQixLQUFBQSxDQUFBc1gsUUFBQUEsRUFBQUssUUFBQUEsQ0FDQTtJQUFBLENBQUEsQ0FDQTtFQUFBLENBQ0E7QUFBQSxDQUFBLENBQUEsRUN0RkE1YSxPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBVyxVQUFBQSxDQUFBLGlCQUFBLEVBQUEsVUFBQWlDLE1BQUFBLEVBQUE4a0IsT0FBQUEsRUFBQUE7RUFFQUEsT0FBQUEsQ0FBQVosU0FBQUEsQ0FBQSxTQUFBLENBQUEsQ0FDQXhnQixJQUFBQSxDQUFBLFVBQUFDLFFBQUFBLEVBQUFBO0lBQ0EzRCxNQUFBQSxDQUFBK2tCLE9BQUFBLEdBQUFsaEIsQ0FBQUEsQ0FBQWtnQixPQUFBQSxDQUFBcGdCLFFBQUFBLENBQUFuRSxJQUFBQSxDQUFBZ0csR0FBQUEsQ0FBQXdmLE1BQUFBLEtBQUE7TUFDQUMsS0FBQUEsRUFBQUQsTUFBQUE7TUFDQXBmLElBQUFBLEVBQUFvZixNQUFBQSxDQUFBRSxTQUFBQSxDQUFBLENBQUEsRUFBQUYsTUFBQUEsQ0FBQTdULE9BQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQWhXLE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQSxDQUFBd0osVUFBQUE7SUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUE7SUFFQSxLQUFBLElBQUFxZ0IsTUFBQUEsSUFBQWhsQixNQUFBQSxDQUFBK2tCLE9BQUFBLEVBQ0FDLE1BQUFBLENBQUE3SCxPQUFBQSxHQUFBdFosQ0FBQUEsQ0FBQWtnQixPQUFBQSxDQUFBLENBQUFpQixNQUFBQSxDQUFBcGYsSUFBQUEsRUFBQUEsR0FBQXVmLGdCQUFBQSxDQUFBSCxNQUFBQSxDQUFBcGYsSUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUE7SUFFQTlHLE9BQUFBLENBQUFDLEdBQUFBLENBQUFpQixNQUFBQSxDQUFBK2tCLE9BQUFBLENBQ0E7RUFBQSxDQUFBLENBQUEsRUFFQS9rQixNQUFBQSxDQUFBb2xCLEtBQUFBLEdBQUEsQ0FBQUosTUFBQUEsRUFBQUksS0FBQUEsS0FBQUE7SUFDQUosTUFBQUEsQ0FBQUksS0FBQUEsR0FBQUEsS0FBQTtFQUFBLENBQUE7RUFHQSxNQUFBRCxnQkFBQUEsR0FBQXZmLElBQUFBLElBQUEvQixDQUFBQSxDQUFBa2dCLE9BQUFBLENBQUEvakIsTUFBQUEsQ0FBQStrQixPQUFBQSxDQUFBN2lCLE1BQUFBLENBQUE4aUIsTUFBQUEsSUFBQXBmLElBQUFBLEtBQUFvZixNQUFBQSxDQUFBcGYsSUFBQUEsQ0FBQUEsQ0FBQUosR0FBQUEsQ0FBQXdmLE1BQUFBLElBQUFBLE1BQUFBLENBQUFwZixJQUFBQSxDQUFBQSxDQUFBQSxDQUFBL0osS0FBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBO0VBRUFtRSxNQUFBQSxDQUFBcWxCLFFBQUFBLEdBQUEsTUFBQSxHQUFBcmxCLE1BQUFBLENBQUEra0IsT0FBQUEsQ0FBQTdpQixNQUFBQSxDQUFBOGlCLE1BQUFBLElBQUFBLE1BQUFBLENBQUFwZixJQUFBQSxLQUFBb2YsTUFBQUEsQ0FBQUksS0FBQUEsQ0FBQUEsQ0FBQW5wQixNQUFBQSxJQUFBK0QsTUFBQUEsQ0FBQStrQixPQUFBQSxDQUFBOW9CLE1BQUFBLEVBQUFBLEVBRUErRCxNQUFBQSxDQUFBc2xCLGNBQUFBLEdBQUEsTUFBQXRsQixNQUFBQSxDQUFBK2tCLE9BQUFBLENBQUE3aUIsTUFBQUEsQ0FBQThpQixNQUFBQSxJQUFBQSxNQUFBQSxDQUFBSSxLQUFBQSxDQUFBQSxDQUFBbnBCLE1BQUFBLEtBQUErRCxNQUFBQSxDQUFBK2tCLE9BQUFBLENBQUE5b0IsTUFDQTtBQUFBLENBQUEsQ0FBQSxFQ3hCQWtCLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FXLFVBQUFBLENBQUEsZ0JBQUEsRUFBQSxVQUFBaUMsTUFBQUEsRUFBQThrQixPQUFBQSxFQUFBQTtFQUNBQSxPQUFBQSxDQUFBZCxTQUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUNBdGdCLElBQUFBLENBQUEsVUFBQUMsUUFBQUEsRUFBQUE7SUFDQTNELE1BQUFBLENBQUErTixNQUFBQSxHQUFBcEssUUFBQUEsQ0FBQW5FLElBQ0E7RUFBQSxDQUFBLENBQ0E7QUFBQSxDQUFBLENBQUEsRUNOQXJDLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FXLFVBQUFBLENBQUEsZUFBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBOGtCLE9BQUFBLEVBQUFBO0VBQ0FBLE9BQUFBLENBQUFkLFNBQUFBLENBQUEsT0FBQSxDQUFBLENBQ0F0Z0IsSUFBQUEsQ0FBQSxVQUFBQyxRQUFBQSxFQUFBQTtJQUNBM0QsTUFBQUEsQ0FBQStOLE1BQUFBLEdBQUFwSyxRQUFBQSxDQUFBbkUsSUFDQTtFQUFBLENBQUEsQ0FDQTtBQUFBLENBQUEsQ0FBQSxFQ05BckMsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQVcsVUFBQUEsQ0FBQSxnQkFBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBOGtCLE9BQUFBLEVBQUFBO0VBQ0FBLE9BQUFBLENBQUFkLFNBQUFBLENBQUEsUUFBQSxDQUFBLENBQ0F0Z0IsSUFBQUEsQ0FBQSxVQUFBQyxRQUFBQSxFQUFBQTtJQUNBM0QsTUFBQUEsQ0FBQStOLE1BQUFBLEdBQUFwSyxRQUFBQSxDQUFBbkUsSUFDQTtFQUFBLENBQUEsQ0FDQTtBQUFBLENBQUEsQ0FBQSxFQ05BckMsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQVcsVUFBQUEsQ0FBQSxtQkFBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBOGtCLE9BQUFBLEVBQUFBO0VBRUFBLE9BQUFBLENBQUFkLFNBQUFBLENBQUEsV0FBQSxDQUFBLENBQ0F0Z0IsSUFBQUEsQ0FBQSxVQUFBQyxRQUFBQSxFQUFBQTtJQUNBM0QsTUFBQUEsQ0FBQStrQixPQUFBQSxHQUFBbGhCLENBQUFBLENBQUFrZ0IsT0FBQUEsQ0FBQXBnQixRQUFBQSxDQUFBbkUsSUFBQUEsQ0FBQWdHLEdBQUFBLENBQUF3ZixNQUFBQSxLQUFBO01BQ0FwTCxLQUFBQSxFQUFBb0wsTUFBQUE7TUFDQXBmLElBQUFBLEVBQUFvZixNQUFBQSxDQUFBRSxTQUFBQSxDQUFBLENBQUEsRUFBQUYsTUFBQUEsQ0FBQTdULE9BQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQWhXLE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQSxDQUFBd0osVUFBQUE7SUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUE7SUFFQSxLQUFBLElBQUFxZ0IsTUFBQUEsSUFBQWhsQixNQUFBQSxDQUFBK2tCLE9BQUFBLEVBQ0FDLE1BQUFBLENBQUE3SCxPQUFBQSxHQUFBdFosQ0FBQUEsQ0FBQWtnQixPQUFBQSxDQUFBLENBQUFpQixNQUFBQSxDQUFBcGYsSUFBQUEsRUFBQUEsR0FBQXVmLGdCQUFBQSxDQUFBSCxNQUFBQSxDQUFBcGYsSUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUE7SUFFQTlHLE9BQUFBLENBQUFDLEdBQUFBLENBQUFpQixNQUFBQSxDQUFBK2tCLE9BQUFBLENBQ0E7RUFBQSxDQUFBLENBQUEsRUFFQS9rQixNQUFBQSxDQUFBb2xCLEtBQUFBLEdBQUEsQ0FBQUosTUFBQUEsRUFBQUksS0FBQUEsS0FBQUE7SUFDQUosTUFBQUEsQ0FBQUksS0FBQUEsR0FBQUEsS0FBQTtFQUFBLENBQUE7RUFHQSxNQUFBRCxnQkFBQUEsR0FBQXZmLElBQUFBLElBQUEvQixDQUFBQSxDQUFBa2dCLE9BQUFBLENBQUEvakIsTUFBQUEsQ0FBQStrQixPQUFBQSxDQUFBN2lCLE1BQUFBLENBQUE4aUIsTUFBQUEsSUFBQXBmLElBQUFBLEtBQUFvZixNQUFBQSxDQUFBcGYsSUFBQUEsQ0FBQUEsQ0FBQUosR0FBQUEsQ0FBQXdmLE1BQUFBLElBQUFBLE1BQUFBLENBQUFwZixJQUFBQSxDQUFBQSxDQUFBQSxDQUFBL0osS0FBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxDQUFBO0VBRUFtRSxNQUFBQSxDQUFBcWxCLFFBQUFBLEdBQUEsTUFBQSxHQUFBcmxCLE1BQUFBLENBQUEra0IsT0FBQUEsQ0FBQTdpQixNQUFBQSxDQUFBOGlCLE1BQUFBLElBQUFBLE1BQUFBLENBQUFwZixJQUFBQSxLQUFBb2YsTUFBQUEsQ0FBQUksS0FBQUEsQ0FBQUEsQ0FBQW5wQixNQUFBQSxJQUFBK0QsTUFBQUEsQ0FBQStrQixPQUFBQSxDQUFBOW9CLE1BQUFBLEVBQUFBLEVBRUErRCxNQUFBQSxDQUFBc2xCLGNBQUFBLEdBQUEsTUFBQXRsQixNQUFBQSxDQUFBK2tCLE9BQUFBLENBQUE3aUIsTUFBQUEsQ0FBQThpQixNQUFBQSxJQUFBQSxNQUFBQSxDQUFBSSxLQUFBQSxDQUFBQSxDQUFBbnBCLE1BQUFBLEtBQUErRCxNQUFBQSxDQUFBK2tCLE9BQUFBLENBQUE5b0IsTUFDQTtBQUFBLENBQUEsQ0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwID0gW1xyXG4gIHtcclxuICAgIGJhc2U6IFwiQVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQxXFx1MjRCNlxcdUZGMjFcXHUwMEMwXFx1MDBDMVxcdTAwQzJcXHUxRUE2XFx1MUVBNFxcdTFFQUFcXHUxRUE4XFx1MDBDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx1MDBDNFxcdTAxREVcXHUxRUEyXFx1MDBDNVxcdTAxRkFcXHUwMUNEXFx1MDIwMFxcdTAyMDJcXHUxRUEwXFx1MUVBQ1xcdTFFQjZcXHUxRTAwXFx1MDEwNFxcdTAyM0FcXHUyQzZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBQVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzMyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBRVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMEM2XFx1MDFGQ1xcdTAxRTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFPXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFVXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFWXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzhcXHVBNzNBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzNDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJCXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgyXFx1MDE4MV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQ1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQzXFx1MjRCOFxcdUZGMjNcXHUwMTA2XFx1MDEwOFxcdTAxMEFcXHUwMTBDXFx1MDBDN1xcdTFFMDhcXHUwMTg3XFx1MDIzQlxcdUE3M0VdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0NFxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEJcXHUwMThBXFx1MDE4OVxcdUE3NzldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkRaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjFcXHUwMUM0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEelwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYyXFx1MDFDNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQ1XFx1MjRCQVxcdUZGMjVcXHUwMEM4XFx1MDBDOVxcdTAwQ0FcXHUxRUMwXFx1MUVCRVxcdTFFQzRcXHUxRUMyXFx1MUVCQ1xcdTAxMTJcXHUxRTE0XFx1MUUxNlxcdTAxMTRcXHUwMTE2XFx1MDBDQlxcdTFFQkFcXHUwMTFBXFx1MDIwNFxcdTAyMDZcXHUxRUI4XFx1MUVDNlxcdTAyMjhcXHUxRTFDXFx1MDExOFxcdTFFMThcXHUxRTFBXFx1MDE5MFxcdTAxOEVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0NlxcdTI0QkJcXHVGRjI2XFx1MUUxRVxcdTAxOTFcXHVBNzdCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJHXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDdcXHUyNEJDXFx1RkYyN1xcdTAxRjRcXHUwMTFDXFx1MUUyMFxcdTAxMUVcXHUwMTIwXFx1MDFFNlxcdTAxMjJcXHUwMUU0XFx1MDE5M1xcdUE3QTBcXHVBNzdEXFx1QTc3RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ4XFx1MjRCRFxcdUZGMjhcXHUwMTI0XFx1MUUyMlxcdTFFMjZcXHUwMjFFXFx1MUUyNFxcdTFFMjhcXHUxRTJBXFx1MDEyNlxcdTJDNjdcXHUyQzc1XFx1QTc4RF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQ5XFx1MjRCRVxcdUZGMjlcXHUwMENDXFx1MDBDRFxcdTAwQ0VcXHUwMTI4XFx1MDEyQVxcdTAxMkNcXHUwMTMwXFx1MDBDRlxcdTFFMkVcXHUxRUM4XFx1MDFDRlxcdTAyMDhcXHUwMjBBXFx1MUVDQVxcdTAxMkVcXHUxRTJDXFx1MDE5N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRBXFx1MjRCRlxcdUZGMkFcXHUwMTM0XFx1MDI0OF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiS1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRCXFx1MjRDMFxcdUZGMkJcXHUxRTMwXFx1MDFFOFxcdTFFMzJcXHUwMTM2XFx1MUUzNFxcdTAxOThcXHUyQzY5XFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTdBMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTFwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDRDXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxKXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk1cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0RFxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0RVxcdTI0QzNcXHVGRjJFXFx1MDFGOFxcdTAxNDNcXHUwMEQxXFx1MUU0NFxcdTAxNDdcXHUxRTQ2XFx1MDE0NVxcdTFFNEFcXHUxRTQ4XFx1MDIyMFxcdTAxOURcXHVBNzkwXFx1QTdBNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTkpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTmpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDRGXFx1MjRDNFxcdUZGMkZcXHUwMEQyXFx1MDBEM1xcdTAwRDRcXHUxRUQyXFx1MUVEMFxcdTFFRDZcXHUxRUQ0XFx1MDBENVxcdTFFNENcXHUwMjJDXFx1MUU0RVxcdTAxNENcXHUxRTUwXFx1MUU1MlxcdTAxNEVcXHUwMjJFXFx1MDIzMFxcdTAwRDZcXHUwMjJBXFx1MUVDRVxcdTAxNTBcXHUwMUQxXFx1MDIwQ1xcdTAyMEVcXHUwMUEwXFx1MUVEQ1xcdTFFREFcXHUxRUUwXFx1MUVERVxcdTFFRTJcXHUxRUNDXFx1MUVEOFxcdTAxRUFcXHUwMUVDXFx1MDBEOFxcdTAxRkVcXHUwMTg2XFx1MDE5RlxcdUE3NEFcXHVBNzRDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPSVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUEyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPT1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzRFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPVVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMjIyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJQXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTBcXHUyNEM1XFx1RkYzMFxcdTFFNTRcXHUxRTU2XFx1MDFBNFxcdTJDNjNcXHVBNzUwXFx1QTc1MlxcdUE3NTRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1MVxcdTI0QzZcXHVGRjMxXFx1QTc1NlxcdUE3NThcXHUwMjRBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJSXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJTXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTNcXHUyNEM4XFx1RkYzM1xcdTFFOUVcXHUwMTVBXFx1MUU2NFxcdTAxNUNcXHUxRTYwXFx1MDE2MFxcdTFFNjZcXHUxRTYyXFx1MUU2OFxcdTAyMThcXHUwMTVFXFx1MkM3RVxcdUE3QThcXHVBNzg0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJUXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTRcXHUyNEM5XFx1RkYzNFxcdTFFNkFcXHUwMTY0XFx1MUU2Q1xcdTAyMUFcXHUwMTYyXFx1MUU3MFxcdTFFNkVcXHUwMTY2XFx1MDFBQ1xcdTAxQUVcXHUwMjNFXFx1QTc4Nl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVFpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTcyOF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDU1XFx1MjRDQVxcdUZGMzVcXHUwMEQ5XFx1MDBEQVxcdTAwREJcXHUwMTY4XFx1MUU3OFxcdTAxNkFcXHUxRTdBXFx1MDE2Q1xcdTAwRENcXHUwMURCXFx1MDFEN1xcdTAxRDVcXHUwMUQ5XFx1MUVFNlxcdTAxNkVcXHUwMTcwXFx1MDFEM1xcdTAyMTRcXHUwMjE2XFx1MDFBRlxcdTFFRUFcXHUxRUU4XFx1MUVFRVxcdTFFRUNcXHUxRUYwXFx1MUVFNFxcdTFFNzJcXHUwMTcyXFx1MUU3NlxcdTFFNzRcXHUwMjQ0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJWXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTZcXHUyNENCXFx1RkYzNlxcdTFFN0NcXHUxRTdFXFx1MDFCMlxcdUE3NUVcXHUwMjQ1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJWWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzYwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJXXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTdcXHUyNENDXFx1RkYzN1xcdTFFODBcXHUxRTgyXFx1MDE3NFxcdTFFODZcXHUxRTg0XFx1MUU4OFxcdTJDNzJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1OFxcdTI0Q0RcXHVGRjM4XFx1MUU4QVxcdTFFOENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIllcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1OVxcdTI0Q0VcXHVGRjM5XFx1MUVGMlxcdTAwRERcXHUwMTc2XFx1MUVGOFxcdTAyMzJcXHUxRThFXFx1MDE3OFxcdTFFRjZcXHUxRUY0XFx1MDFCM1xcdTAyNEVcXHUxRUZFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNUFcXHUyNENGXFx1RkYzQVxcdTAxNzlcXHUxRTkwXFx1MDE3QlxcdTAxN0RcXHUxRTkyXFx1MUU5NFxcdTAxQjVcXHUwMjI0XFx1MkM3RlxcdTJDNkJcXHVBNzYyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjFcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHUwMEUwXFx1MDBFMVxcdTAwRTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx1MDBFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx1MDBFNFxcdTAxREZcXHUxRUEzXFx1MDBFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhYVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzMzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhZVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMEU2XFx1MDFGRFxcdTAxRTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFvXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF1XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzlcXHVBNzNCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJheVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzNEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJiXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjJcXHUyNEQxXFx1RkY0MlxcdTFFMDNcXHUxRTA1XFx1MUUwN1xcdTAxODBcXHUwMTgzXFx1MDI1M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiY1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDYzXFx1MjREMlxcdUZGNDNcXHUwMTA3XFx1MDEwOVxcdTAxMEJcXHUwMTBEXFx1MDBFN1xcdTFFMDlcXHUwMTg4XFx1MDIzQ1xcdUE3M0ZcXHUyMTg0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJkXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjRcXHUyNEQzXFx1RkY0NFxcdTFFMEJcXHUwMTBGXFx1MUUwRFxcdTFFMTFcXHUxRTEzXFx1MUUwRlxcdTAxMTFcXHUwMThDXFx1MDI1NlxcdTAyNTdcXHVBNzdBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJkelwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYzXFx1MDFDNl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDY1XFx1MjRENFxcdUZGNDVcXHUwMEU4XFx1MDBFOVxcdTAwRUFcXHUxRUMxXFx1MUVCRlxcdTFFQzVcXHUxRUMzXFx1MUVCRFxcdTAxMTNcXHUxRTE1XFx1MUUxN1xcdTAxMTVcXHUwMTE3XFx1MDBFQlxcdTFFQkJcXHUwMTFCXFx1MDIwNVxcdTAyMDdcXHUxRUI5XFx1MUVDN1xcdTAyMjlcXHUxRTFEXFx1MDExOVxcdTFFMTlcXHUxRTFCXFx1MDI0N1xcdTAyNUJcXHUwMUREXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJmXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjZcXHUyNEQ1XFx1RkY0NlxcdTFFMUZcXHUwMTkyXFx1QTc3Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZ1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY3XFx1MjRENlxcdUZGNDdcXHUwMUY1XFx1MDExRFxcdTFFMjFcXHUwMTFGXFx1MDEyMVxcdTAxRTdcXHUwMTIzXFx1MDFFNVxcdTAyNjBcXHVBN0ExXFx1MUQ3OVxcdUE3N0ZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2OFxcdTI0RDdcXHVGRjQ4XFx1MDEyNVxcdTFFMjNcXHUxRTI3XFx1MDIxRlxcdTFFMjVcXHUxRTI5XFx1MUUyQlxcdTFFOTZcXHUwMTI3XFx1MkM2OFxcdTJDNzZcXHUwMjY1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJodlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMTk1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJpXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjlcXHUyNEQ4XFx1RkY0OVxcdTAwRUNcXHUwMEVEXFx1MDBFRVxcdTAxMjlcXHUwMTJCXFx1MDEyRFxcdTAwRUZcXHUxRTJGXFx1MUVDOVxcdTAxRDBcXHUwMjA5XFx1MDIwQlxcdTFFQ0JcXHUwMTJGXFx1MUUyRFxcdTAyNjhcXHUwMTMxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkFcXHUyNEQ5XFx1RkY0QVxcdTAxMzVcXHUwMUYwXFx1MDI0OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwia1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZCXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibFwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZDXFx1MjREQlxcdUZGNENcXHUwMTQwXFx1MDEzQVxcdTAxM0VcXHUxRTM3XFx1MUUzOVxcdTAxM0NcXHUxRTNEXFx1MUUzQlxcdTAxN0ZcXHUwMTQyXFx1MDE5QVxcdTAyNkJcXHUyQzYxXFx1QTc0OVxcdUE3ODFcXHVBNzQ3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJsalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJtXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkRcXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJuXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkVcXHUyNEREXFx1RkY0RVxcdTAxRjlcXHUwMTQ0XFx1MDBGMVxcdTFFNDVcXHUwMTQ4XFx1MUU0N1xcdTAxNDZcXHUxRTRCXFx1MUU0OVxcdTAxOUVcXHUwMjcyXFx1MDE0OVxcdUE3OTFcXHVBN0E1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJualwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkZcXHUyNERFXFx1RkY0RlxcdTAwRjJcXHUwMEYzXFx1MDBGNFxcdTFFRDNcXHUxRUQxXFx1MUVEN1xcdTFFRDVcXHUwMEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx1MDBGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHUwMEY4XFx1MDFGRlxcdTAyNTRcXHVBNzRCXFx1QTc0RFxcdTAyNzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9pXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm91XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAyMjNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9vXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NEZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInBcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3MFxcdTI0REZcXHVGRjUwXFx1MUU1NVxcdTFFNTdcXHUwMUE1XFx1MUQ3RFxcdUE3NTFcXHVBNzUzXFx1QTc1NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwicVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDcxXFx1MjRFMFxcdUZGNTFcXHUwMjRCXFx1QTc1N1xcdUE3NTldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInJcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3MlxcdTI0RTFcXHVGRjUyXFx1MDE1NVxcdTFFNTlcXHUwMTU5XFx1MDIxMVxcdTAyMTNcXHUxRTVCXFx1MUU1RFxcdTAxNTdcXHUxRTVGXFx1MDI0RFxcdTAyN0RcXHVBNzVCXFx1QTdBN1xcdUE3ODNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInNcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3M1xcdTI0RTJcXHVGRjUzXFx1MDBERlxcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ0XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzRcXHUyNEUzXFx1RkY1NFxcdTFFNkJcXHUxRTk3XFx1MDE2NVxcdTFFNkRcXHUwMjFCXFx1MDE2M1xcdTFFNzFcXHUxRTZGXFx1MDE2N1xcdTAxQURcXHUwMjg4XFx1MkM2NlxcdUE3ODddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MjldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3NVxcdTI0RTRcXHVGRjU1XFx1MDBGOVxcdTAwRkFcXHUwMEZCXFx1MDE2OVxcdTFFNzlcXHUwMTZCXFx1MUU3QlxcdTAxNkRcXHUwMEZDXFx1MDFEQ1xcdTAxRDhcXHUwMUQ2XFx1MDFEQVxcdTFFRTdcXHUwMTZGXFx1MDE3MVxcdTAxRDRcXHUwMjE1XFx1MDIxN1xcdTAxQjBcXHUxRUVCXFx1MUVFOVxcdTFFRUZcXHUxRUVEXFx1MUVGMVxcdTFFRTVcXHUxRTczXFx1MDE3M1xcdTFFNzdcXHUxRTc1XFx1MDI4OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc2XFx1MjRFNVxcdUZGNTZcXHUxRTdEXFx1MUU3RlxcdTAyOEJcXHVBNzVGXFx1MDI4Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidnlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc2MV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwid1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc3XFx1MjRFNlxcdUZGNTdcXHUxRTgxXFx1MUU4M1xcdTAxNzVcXHUxRTg3XFx1MUU4NVxcdTFFOThcXHUxRTg5XFx1MkM3M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwieFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc4XFx1MjRFN1xcdUZGNThcXHUxRThCXFx1MUU4RF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwieVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc5XFx1MjRFOFxcdUZGNTlcXHUxRUYzXFx1MDBGRFxcdTAxNzdcXHUxRUY5XFx1MDIzM1xcdTFFOEZcXHUwMEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwN0FcXHUyNEU5XFx1RkY1QVxcdTAxN0FcXHUxRTkxXFx1MDE3Q1xcdTAxN0VcXHUxRTkzXFx1MUU5NVxcdTAxQjZcXHUwMjI1XFx1MDI0MFxcdTJDNkNcXHVBNzYzXS9nLFxyXG4gIH0sXHJcbl07XHJcbnZhciBkb21haW5zID0gW1xyXG4gIFwiLmNvbVwiLFxyXG4gIFwiLm9yZ1wiLFxyXG4gIFwiLm5ldFwiLFxyXG4gIFwiLmFjXCIsXHJcbiAgXCIuYWRcIixcclxuICBcIi5hZVwiLFxyXG4gIFwiLmFmXCIsXHJcbiAgXCIuYWdcIixcclxuICBcIi5haVwiLFxyXG4gIFwiLmFsXCIsXHJcbiAgXCIuYW1cIixcclxuICBcIi5hb1wiLFxyXG4gIFwiLmFxXCIsXHJcbiAgXCIuYXJcIixcclxuICBcIi5hc1wiLFxyXG4gIFwiLmF0XCIsXHJcbiAgXCIuYXVcIixcclxuICBcIi5hd1wiLFxyXG4gIFwiLmF4XCIsXHJcbiAgXCIuYXpcIixcclxuICBcIi5iYVwiLFxyXG4gIFwiLmJiXCIsXHJcbiAgXCIuYmRcIixcclxuICBcIi5iZVwiLFxyXG4gIFwiLmJmXCIsXHJcbiAgXCIuYmdcIixcclxuICBcIi5iaFwiLFxyXG4gIFwiLmJpXCIsXHJcbiAgXCIuYmpcIixcclxuICBcIi5ibVwiLFxyXG4gIFwiLmJuXCIsXHJcbiAgXCIuYm9cIixcclxuICBcIi5icVwiLFxyXG4gIFwiLmJyXCIsXHJcbiAgXCIuYnNcIixcclxuICBcIi5idFwiLFxyXG4gIFwiLmJ3XCIsXHJcbiAgXCIuYnlcIixcclxuICBcIi5ielwiLFxyXG4gIFwiLmNhXCIsXHJcbiAgXCIuY2NcIixcclxuICBcIi5jZFwiLFxyXG4gIFwiLmNmXCIsXHJcbiAgXCIuY2dcIixcclxuICBcIi5jaFwiLFxyXG4gIFwiLmNpXCIsXHJcbiAgXCIuY2tcIixcclxuICBcIi5jbFwiLFxyXG4gIFwiLmNtXCIsXHJcbiAgXCIuY25cIixcclxuICBcIi5jb1wiLFxyXG4gIFwiLmNyXCIsXHJcbiAgXCIuY3VcIixcclxuICBcIi5jdlwiLFxyXG4gIFwiLmN3XCIsXHJcbiAgXCIuY3hcIixcclxuICBcIi5jeVwiLFxyXG4gIFwiLmN6XCIsXHJcbiAgXCIuZGVcIixcclxuICBcIi5kalwiLFxyXG4gIFwiLmRrXCIsXHJcbiAgXCIuZG1cIixcclxuICBcIi5kb1wiLFxyXG4gIFwiLmR6XCIsXHJcbiAgXCIuZWNcIixcclxuICBcIi5lZVwiLFxyXG4gIFwiLmVnXCIsXHJcbiAgXCIuZWhcIixcclxuICBcIi5lclwiLFxyXG4gIFwiLmVzXCIsXHJcbiAgXCIuZXRcIixcclxuICBcIi5ldVwiLFxyXG4gIFwiLmZpXCIsXHJcbiAgXCIuZmpcIixcclxuICBcIi5ma1wiLFxyXG4gIFwiLmZtXCIsXHJcbiAgXCIuZm9cIixcclxuICBcIi5mclwiLFxyXG4gIFwiLmdhXCIsXHJcbiAgXCIuZ2RcIixcclxuICBcIi5nZVwiLFxyXG4gIFwiLmdmXCIsXHJcbiAgXCIuZ2dcIixcclxuICBcIi5naFwiLFxyXG4gIFwiLmdpXCIsXHJcbiAgXCIuZ2xcIixcclxuICBcIi5nbVwiLFxyXG4gIFwiLmduXCIsXHJcbiAgXCIuZ3BcIixcclxuICBcIi5ncVwiLFxyXG4gIFwiLmdyXCIsXHJcbiAgXCIuZ3NcIixcclxuICBcIi5ndFwiLFxyXG4gIFwiLmd1XCIsXHJcbiAgXCIuZ3dcIixcclxuICBcIi5neVwiLFxyXG4gIFwiLmhrXCIsXHJcbiAgXCIuaG1cIixcclxuICBcIi5oblwiLFxyXG4gIFwiLmhyXCIsXHJcbiAgXCIuaHRcIixcclxuICBcIi5odVwiLFxyXG4gIFwiLmlkXCIsXHJcbiAgXCIuaWVcIixcclxuICBcIi5pbFwiLFxyXG4gIFwiLmltXCIsXHJcbiAgXCIuaW5cIixcclxuICBcIi5pb1wiLFxyXG4gIFwiLmlxXCIsXHJcbiAgXCIuaXJcIixcclxuICBcIi5pc1wiLFxyXG4gIFwiLml0XCIsXHJcbiAgXCIuamVcIixcclxuICBcIi5qbVwiLFxyXG4gIFwiLmpvXCIsXHJcbiAgXCIuanBcIixcclxuICBcIi5rZVwiLFxyXG4gIFwiLmtnXCIsXHJcbiAgXCIua2hcIixcclxuICBcIi5raVwiLFxyXG4gIFwiLmttXCIsXHJcbiAgXCIua25cIixcclxuICBcIi5rcFwiLFxyXG4gIFwiLmtyXCIsXHJcbiAgXCIua3dcIixcclxuICBcIi5reVwiLFxyXG4gIFwiLmt6XCIsXHJcbiAgXCIubGFcIixcclxuICBcIi5sYlwiLFxyXG4gIFwiLmxjXCIsXHJcbiAgXCIubGlcIixcclxuICBcIi5sa1wiLFxyXG4gIFwiLmxyXCIsXHJcbiAgXCIubHNcIixcclxuICBcIi5sdFwiLFxyXG4gIFwiLmx1XCIsXHJcbiAgXCIubHZcIixcclxuICBcIi5seVwiLFxyXG4gIFwiLm1hXCIsXHJcbiAgXCIubWNcIixcclxuICBcIi5tZFwiLFxyXG4gIFwiLm1lXCIsXHJcbiAgXCIubWdcIixcclxuICBcIi5taFwiLFxyXG4gIFwiLm1rXCIsXHJcbiAgXCIubWxcIixcclxuICBcIi5tbVwiLFxyXG4gIFwiLm1uXCIsXHJcbiAgXCIubW9cIixcclxuICBcIi5tcFwiLFxyXG4gIFwiLm1xXCIsXHJcbiAgXCIubXJcIixcclxuICBcIi5tc1wiLFxyXG4gIFwiLm10XCIsXHJcbiAgXCIubXVcIixcclxuICBcIi5tdlwiLFxyXG4gIFwiLm13XCIsXHJcbiAgXCIubXhcIixcclxuICBcIi5teVwiLFxyXG4gIFwiLm16XCIsXHJcbiAgXCIubmFcIixcclxuICBcIi5uY1wiLFxyXG4gIFwiLm5lXCIsXHJcbiAgXCIubmZcIixcclxuICBcIi5uZ1wiLFxyXG4gIFwiLm5pXCIsXHJcbiAgXCIubmxcIixcclxuICBcIi5ub1wiLFxyXG4gIFwiLm5wXCIsXHJcbiAgXCIubnJcIixcclxuICBcIi5udVwiLFxyXG4gIFwiLm56XCIsXHJcbiAgXCIub21cIixcclxuICBcIi5wYVwiLFxyXG4gIFwiLnBlXCIsXHJcbiAgXCIucGZcIixcclxuICBcIi5wZ1wiLFxyXG4gIFwiLnBoXCIsXHJcbiAgXCIucGtcIixcclxuICBcIi5wbFwiLFxyXG4gIFwiLnBtXCIsXHJcbiAgXCIucG5cIixcclxuICBcIi5wclwiLFxyXG4gIFwiLnBzXCIsXHJcbiAgXCIucHRcIixcclxuICBcIi5wd1wiLFxyXG4gIFwiLnB5XCIsXHJcbiAgXCIucWFcIixcclxuICBcIi5yZVwiLFxyXG4gIFwiLnJvXCIsXHJcbiAgXCIucnNcIixcclxuICBcIi5ydVwiLFxyXG4gIFwiLnJ3XCIsXHJcbiAgXCIuc2FcIixcclxuICBcIi5zYlwiLFxyXG4gIFwiLnNjXCIsXHJcbiAgXCIuc2RcIixcclxuICBcIi5zZVwiLFxyXG4gIFwiLnNnXCIsXHJcbiAgXCIuc2hcIixcclxuICBcIi5zaVwiLFxyXG4gIFwiLnNrXCIsXHJcbiAgXCIuc2xcIixcclxuICBcIi5zbVwiLFxyXG4gIFwiLnNuXCIsXHJcbiAgXCIuc29cIixcclxuICBcIi5zclwiLFxyXG4gIFwiLnNzXCIsXHJcbiAgXCIuc3RcIixcclxuICBcIi5zdVwiLFxyXG4gIFwiLnN2XCIsXHJcbiAgXCIuc3hcIixcclxuICBcIi5zeVwiLFxyXG4gIFwiLnN6XCIsXHJcbiAgXCIudGNcIixcclxuICBcIi50ZFwiLFxyXG4gIFwiLnRmXCIsXHJcbiAgXCIudGdcIixcclxuICBcIi50aFwiLFxyXG4gIFwiLnRqXCIsXHJcbiAgXCIudGtcIixcclxuICBcIi50bFwiLFxyXG4gIFwiLnRtXCIsXHJcbiAgXCIudG5cIixcclxuICBcIi50b1wiLFxyXG4gIFwiLnRyXCIsXHJcbiAgXCIudHRcIixcclxuICBcIi50dlwiLFxyXG4gIFwiLnR3XCIsXHJcbiAgXCIudHpcIixcclxuICBcIi51YVwiLFxyXG4gIFwiLnVnXCIsXHJcbiAgXCIudWtcIixcclxuICBcIi51c1wiLFxyXG4gIFwiLnV5XCIsXHJcbiAgXCIudXpcIixcclxuICBcIi52YVwiLFxyXG4gIFwiLnZjXCIsXHJcbiAgXCIudmVcIixcclxuICBcIi52Z1wiLFxyXG4gIFwiLnZpXCIsXHJcbiAgXCIudm5cIixcclxuICBcIi52dVwiLFxyXG4gIFwiLndmXCIsXHJcbiAgXCIud3NcIixcclxuICBcIi55ZVwiLFxyXG4gIFwiLnl0XCIsXHJcbiAgXCIuemFcIixcclxuICBcIi56bVwiLFxyXG4gIFwiLnp3XCIsXHJcbl07XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVEaWFjcml0aWNzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcC5yZWR1Y2UoKHJlc3VsdCwgbGV0dGVyKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXN1bHQucmVwbGFjZShsZXR0ZXIubGV0dGVycywgbGV0dGVyLmJhc2UpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBTUEVDSUFMX0NIQVJBQ1RFUlMgPSBcIlxcXFxcXFxcLyAhP0AjJCVeJiooKV8rOi57fSw7XFxcXC0nYGDigJnigJhcXFwiXCI7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVyc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChgWyR7U1BFQ0lBTF9DSEFSQUNURVJTfV1gLCBcImdpXCIpLCBcIlwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZUFsbEJ1dExldHRlcnNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b0xvd2VyQ2FzZSgpLnJlbW92ZURpYWNyaXRpY3MoKS5yZW1vdmVTcGVjaWFsQ2hhcmFjdGVycygpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiY29uY2VhbFwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChleHRyYSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbXiR7U1BFQ0lBTF9DSEFSQUNURVJTfSR7ZXh0cmF9XWAsIFwiZ2lcIiksIFwi4oGOXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiY2FwaXRhbGl6ZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5zbGljZSgxKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZUhUTUxcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKFwiPlwiLCBcIlxcdTIyN0JcIikucmVwbGFjZShcIjxcIiwgXCJcXHUyMjdBXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiYW5nbGVCcmFja2V0c1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoXCI8XCIsIFwiJmx0O1wiKS5yZXBsYWNlKFwiPlwiLCBcIiZndDtcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZXBsYWNlQXJyYXlcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZmluZCwgcmVwbGFjZSkge1xyXG4gICAgdmFyIHJlcGxhY2VTdHJpbmcgPSB0aGlzO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaW5kLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHJlcGxhY2VTdHJpbmcgPSByZXBsYWNlU3RyaW5nLnJlcGxhY2UoZmluZFtpXSwgcmVwbGFjZVtpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVwbGFjZVN0cmluZztcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcIm1hc2tVUkxzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZUFycmF5KFtcImh0dHBzOi8vXCIsIFwiaHR0cDovL1wiXSwgXCJub3BlOi8vXCIpLnJlcGxhY2VBcnJheShkb21haW5zLCBcIi5ub3BlXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwibWFrZVJlYWRhYmxlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJtYWtlUGVyY2VudGFnZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChkZWNpbWFscykge1xyXG4gICAgaWYgKCFkZWNpbWFscykgZGVjaW1hbHMgPSAyO1xyXG4gICAgcmV0dXJuIGAkeyh0aGlzICogMTAwKS50b0ZpeGVkKGRlY2ltYWxzKX0lYDtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHNvcnRPYmplY3QgPSAob2JqLCBkaXJlY3Rpb24pID0+IHtcclxuICBsZXQgYXJyID0gW107XHJcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICBhcnIucHVzaChba2V5LCBvYmpba2V5XV0pO1xyXG4gIH1cclxuICBhcnIuc29ydCgoYSwgYikgPT4gKGRpcmVjdGlvbiA/IGFbMV0gLSBiWzFdIDogYlsxXSAtIGFbMV0pKTtcclxuICBsZXQgb2JqU29ydGVkID0ge307XHJcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IChvYmpTb3J0ZWRbaXRlbVswXV0gPSBpdGVtWzFdKSk7XHJcbiAgLy9hcnIuc29ydChmdW5jdGlvbihhLCBiKSB7IGEudmFsdWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIudmFsdWUudG9Mb3dlckNhc2UoKSk7IH0pOyAvL3VzZSB0aGlzIHRvIHNvcnQgYXMgc3RyaW5nc1xyXG4gIHJldHVybiBvYmpTb3J0ZWQ7IC8vIHJldHVybnMgYXJyYXlcclxufTtcclxuIiwiLypcclxuJCA9IGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG52YXIgYm9vdHN0cmFwID0gcmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG52YXIgYW5ndWxhclNhbml0aXplID0gcmVxdWlyZSgnYW5ndWxhci1zYW5pdGl6ZScpO1xyXG52YXIgYW5ndWxhckFuaW1hdGUgPSByZXF1aXJlKCdhbmd1bGFyLWFuaW1hdGUnKTtcclxuKi9cclxuYW5ndWxhci5tb2R1bGUoXCJhcHBcIiwgW1xyXG4gIFwidWkucm91dGVyXCIsXHJcbiAgXCJ1aS5ib290c3RyYXBcIixcclxuICBcIm5nQW5pbWF0ZVwiLFxyXG4gIFwibmdTYW5pdGl6ZVwiLFxyXG4gIFwibmdEcmFnRHJvcFwiLFxyXG4gIFwibmdUYWdzSW5wdXRcIixcclxuICBcInZjUmVjYXB0Y2hhXCIsXHJcbiAgXCJjaGFydC5qc1wiLFxyXG4gIFwidGMuY2hhcnRqc1wiLFxyXG4gIFwiaW5maW5pdGUtc2Nyb2xsXCIsXHJcbl0pO1xyXG4iLCJhbmd1bGFyXHJcblx0Lm1vZHVsZSgnYXBwJylcclxuXHQuY29uZmlnKGZ1bmN0aW9uIChcclxuXHRcdCRzdGF0ZVByb3ZpZGVyLFxyXG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLFxyXG5cdFx0JHVybFNlcnZpY2VQcm92aWRlcixcclxuXHRcdCRsb2NhdGlvblByb3ZpZGVyXHJcblx0KSB7XHJcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvaG9tZScpO1xyXG5cdFx0JHVybFNlcnZpY2VQcm92aWRlci5jb25maWcuc3RyaWN0TW9kZShmYWxzZSk7XHJcblxyXG5cdFx0JHN0YXRlUHJvdmlkZXJcclxuXHRcdFx0LnN0YXRlKCdob21lJywge1xyXG5cdFx0XHRcdHVybDogJy9ob21lJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9ob21lLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3BvbGljeScsIHtcclxuXHRcdFx0XHR1cmw6ICcvcG9saWN5JyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9wb2xpY3kuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgncHJpbnQnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3ByaW50JyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9wcmludC5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdleHBlcmllbmNlJywge1xyXG5cdFx0XHRcdHVybDogJy9leHBlcmllbmNlJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnRXhwZXJpZW5jZUN0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL2V4cGVyaWVuY2UuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnc2tpbGxzJywge1xyXG5cdFx0XHRcdHVybDogJy9za2lsbHMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdTa2lsbHNDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9za2lsbHMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnaG9iYmllcycsIHtcclxuXHRcdFx0XHR1cmw6ICcvaG9iYmllcycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ0hvYmJpZXNDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9ob2JiaWVzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ2NvbnRhY3QnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2NvbnRhY3QnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdDb250YWN0Q3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvY29udGFjdC5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCd3b3Jrb3V0Jywge1xyXG5cdFx0XHRcdHVybDogJy93b3Jrb3V0JyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnV29ya291dEN0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3dvcmtvdXQuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgncG9zdHMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3Bvc3RzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnUG9zdHNDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9wb3N0cy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdwcm9maWxlJywge1xyXG5cdFx0XHRcdHVybDogJy9wcm9maWxlJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnUHJvZmlsZUN0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3Byb2ZpbGUuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnbGlzdHMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2xpc3RzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnTGlzdHNDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2xpc3RzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3ByaW9yaXRpemUnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3ByaW9yaXRpemUnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdQcmlvcml0aXplQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdwcmlvcml0aXplLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ2J1YmJsZXMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2J1YmJsZXMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdCdWJibGVzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdidWJibGVzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ2FzdGVyb2lkcycsIHtcclxuXHRcdFx0XHR1cmw6ICcvYXN0ZXJvaWRzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnQXN0ZXJvaWRzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdhc3Rlcm9pZHMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnbGVtbWluZ3MnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2xlbW1pbmdzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnTGVtbWluZ3NDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2xlbW1pbmdzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ2JvdHMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2JvdHMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdUZW5UaGluZ3NDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbnRoaW5ncy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCd0ZW50aGluZ3MnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3RlbnRoaW5ncycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1RlblRoaW5nc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAndGVudGhpbmdzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3RlbnRoaW5ncy1hZG1pbicsIHtcclxuXHRcdFx0XHR1cmw6ICcvdGVudGhpbmdzLWFkbWluJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnVGVuVGhpbmdzQWRtaW5DdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbnRoaW5ncy1hZG1pbi5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCd0ZW50aGluZ3MtY3VyYXRlJywge1xyXG5cdFx0XHRcdHVybDogJy90ZW50aGluZ3MtY3VyYXRlJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnVGVuVGhpbmdzQ3VyYXRlQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW50aGluZ3MtY3VyYXRlLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3RlbnRoaW5ncy1nYW1lJywge1xyXG5cdFx0XHRcdHVybDogJy90ZW50aGluZ3MvOmdhbWUnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdUZW5UaGluZ3NHYW1lQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW50aGluZ3MtZ2FtZS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdxdWl6LWdvb2dsZScsIHtcclxuXHRcdFx0XHR1cmw6ICcvZ29vZ2xlJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnUXVpekdvb2dsZUN0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAncXVpenplcy9nb29nbGUuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgncXVpei1sb2dvcycsIHtcclxuXHRcdFx0XHR1cmw6ICcvbG9nb3MnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdRdWl6TG9nb3NDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3F1aXp6ZXMvbG9nb3MuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgncXVpei1hbmltYWxzJywge1xyXG5cdFx0XHRcdHVybDogJy9hbmltYWxzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnUXVpekFuaW1hbHNDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3F1aXp6ZXMvYW5pbWFscy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdxdWl6LXNrZWxldG9ucycsIHtcclxuXHRcdFx0XHR1cmw6ICcvc2tlbGV0b25zJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnUXVpelNrZWxldG9uc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAncXVpenplcy9za2VsZXRvbnMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgncXVpei1tb3ZpZXMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL21vdmllcycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1F1aXpNb3ZpZXNDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3F1aXp6ZXMvbW92aWVzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ2NoYXJhZGVzJywge1xyXG5cdFx0XHRcdHVybDogJy9jaGFyYWRlcycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ0NoYXJhZGVzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvY2hhcmFkZXMuaHRtbCcsXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdCRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7XHJcblx0XHRcdGVuYWJsZWQ6IHRydWUsXHJcblx0XHRcdHJlcXVpcmVCYXNlOiBmYWxzZSxcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ1dlYlNvY2tldFN2YycsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkdGltZW91dCkge1xyXG4gIGZ1bmN0aW9uIHdlYnNvY2tldEhvc3QoKSB7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6Jykge1xyXG4gICAgICByZXR1cm4gXCJ3c3M6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwid3M6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGNvbm5lY3Rpb247XHJcbiAgdmFyIGNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25uZWN0aW9uID0gbmV3IFdlYlNvY2tldCh3ZWJzb2NrZXRIb3N0KCkpO1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25vcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnV2Vic29ja2V0IGNvbm5lY3RlZCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9uY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnV2Vic29ja2V0IGNsb3NlZC4gUmVjb25uZWN0aW5nLi4uJyk7XHJcbiAgICAgICR0aW1lb3V0KGNvbm5lY3QsIDEwMDApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZSArIFwiIC0gU3RhdGU6IFwiICsgY29ubmVjdGlvbi5yZWFkeVN0YXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgcGF5bG9hZCA9IEpTT04ucGFyc2UoZS5kYXRhKTtcclxuICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCd3czonICsgcGF5bG9hZC50b3BpYywgcGF5bG9hZC5kYXRhKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5zZW5kID0gZnVuY3Rpb24gKHRvcGljLCBkYXRhKSB7XHJcbiAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KHt0b3BpYzogdG9waWMsIGRhdGE6IGRhdGF9KTtcclxuICAgIGNvbm5lY3Rpb24uc2VuZChqc29uKTtcclxuICB9O1xyXG5cclxuICB0aGlzLmNvbm5lY3QgPSBjb25uZWN0O1xyXG5cclxufSkucnVuKGZ1bmN0aW9uIChXZWJTb2NrZXRTdmMpIHtcclxuICBXZWJTb2NrZXRTdmMuY29ubmVjdCgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkFwcEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBMYW5ndWFnZVN2YywgVXNlclN2Yykge1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCIlY1lvdSBzbmVha3kgYnVnZ2VyIVwiLFxyXG4gICAgXCJmb250OiAyZW0gc2Fucy1zZXJpZjsgY29sb3I6IERvZGdlckJsdWU7IHRleHQtc2hhZG93OiAycHggMCAwICM0NDQsIC0ycHggMCAwICM0NDQsIDAgMnB4IDAgIzQ0NCwgMCAtMnB4IDAgIzQ0NCwgMXB4IDFweCAjNDQ0LCAtMXB4IC0xcHggMCAjNDQ0LCAxcHggLTFweCAwICM0NDQsIC0xcHggMXB4IDAgIzQ0NDtcIixcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCJJJ20gZ2xhZCB5b3UncmUgY3VyaW91cyB3aGV0aGVyIHNvbWV0aGluZyBpcyBwb3BwaW5nIHVwIGluIGhlcmUuIEknbSBhIGJpdCBvZiBhIHN0aWNrbGVyIHdoZW4gaXQgY29tZXMgdG8gbWVzc2FnZXMgaW4gdGhlIGNvbnNvbGUgc28gSSB0cnkgdG8gbWFrZSBzdXJlIG9ubHkgdGhpbmdzIEkgd2FudCBhcmUgdmlzaWJsZS4gVGhhdCBiZWluZyBzYWlkLCBpZiB0aGVyZSBpcyBhIGJpZyBlcnJvciBoZXJlLCBJIHdvdWxkIHJlYWxseSBhcHByZWNpYXRlIHlvdSB0ZWxsaW5nIG1lIHNvIEkgY2FuIGdldCByaWQgb2YgaXQhXCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiVGhlIGNvZGUgZm9yIG15IHJlc3VtZSBpcyBob3N0ZWQgb24gR2l0aHViIGlmIHlvdSByZWFsbHkgd2FudCB0byBnbyBpbnRvIGFsbCB0aGlzISA9PiBodHRwczovL2dpdGh1Yi5jb20vRmxhbmRlcnNCdXJnZXIvcmVzdW1lXCIsXHJcbiAgKTtcclxuXHJcbiAgLypcclxuICAgICQoZG9jdW1lbnQpLmJpbmQoXCJrZXl1cCBrZXlkb3duXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICBpZihlLmN0cmxLZXkgJiYgZS5rZXlDb2RlID09IDgwKXtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAqL1xyXG5cclxuICAkKHdpbmRvdykubG9hZChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiLmxvYWRpbmdcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAkKFwiLmNvbnRlbnRcIikuZmFkZUluKFwic2xvd1wiKTtcclxuICB9KTtcclxuXHJcbiAgJChcIi5jaGVja2JveC1tZW51XCIpLm9uKFwiY2hhbmdlXCIsIFwiaW5wdXRbdHlwZT0nY2hlY2tib3gnXVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLmNsb3Nlc3QoXCJsaVwiKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiLCB0aGlzLmNoZWNrZWQpO1xyXG4gIH0pO1xyXG5cclxuICAkKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLmFsbG93LWZvY3VzXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUudGhlbWVDb3VudGVyID0gNjtcclxuICAkc2NvcGUudG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICRzY29wZS55ZWFyID0gJHNjb3BlLnRvZGF5LmdldEZ1bGxZZWFyKCk7XHJcbiAgJHNjb3BlLnJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDApO1xyXG5cclxuICAkc2NvcGUuZmxpcFRoZW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5sb2FkaW5nXCIpLnNob3coKTtcclxuICAgICQoXCIuY29udGVudFwiKS5oaWRlKCk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIi5sb2FkaW5nXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgICAkKFwiLmNvbnRlbnRcIikuZmFkZUluKFwic2xvd1wiKTtcclxuICAgIH0sIDgwMCk7XHJcbiAgICAkc2NvcGUudGhlbWVDb3VudGVyID0gJHNjb3BlLnRoZW1lQ291bnRlciA8IDYgPyAkc2NvcGUudGhlbWVDb3VudGVyICsgMSA6ICgkc2NvcGUudGhlbWVDb3VudGVyID0gMSk7XHJcbiAgfTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL3NraWxscy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuc2tpbGxzID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKHNraWxsKSB7XHJcbiAgICAgIHJldHVybiBza2lsbC5lbmFibGVkO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9ob2JiaWVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5ob2JiaWVzID0gZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2V4cGVyaWVuY2UuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmpvYnMgPSBkYXRhO1xyXG4gICAgJHNjb3BlLmpvYnMuZm9yRWFjaChmdW5jdGlvbiAoam9iKSB7XHJcbiAgICAgIGpvYi5zdGFydERhdGUgPSBuZXcgRGF0ZShqb2Iuc3RhcnREYXRlKTtcclxuICAgICAgaWYgKGpvYi5lbmREYXRlKSBqb2IuZW5kRGF0ZSA9IG5ldyBEYXRlKGpvYi5lbmREYXRlKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvY2hhcmFkZXMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmNoYXJhZGVzID0gZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmdldFRpbWVTcGFuID0gZnVuY3Rpb24gKGpvYikge1xyXG4gICAgcmV0dXJuIGpvYi5zdGFydERhdGUuZ2V0RnVsbFllYXIoKSArIChqb2IuZW5kRGF0ZSA/IFwiIC0gXCIgKyBqb2IuZW5kRGF0ZS5nZXRGdWxsWWVhcigpIDogXCIgLSBUb2RheVwiKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUubGFuZ3VhZ2VzID0gTGFuZ3VhZ2VTdmMubGFuZ3VhZ2VzO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IExhbmd1YWdlU3ZjLmdldExhbmd1YWdlKCk7XHJcblxyXG4gICRzY29wZS5zZWxlY3RMYW5ndWFnZSA9IGZ1bmN0aW9uIChsYW5ndWFnZSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBMYW5ndWFnZVN2Yy5zZXRMYW5ndWFnZShsYW5ndWFnZSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmhvdmVyZGl2ID0gZnVuY3Rpb24gKGUsIGRpdmlkKSB7XHJcbiAgICB2YXIgbGVmdCA9IGUuY2xpZW50WCArIFwicHhcIjtcclxuICAgIHZhciB0b3AgPSBlLmNsaWVudFkgKyAyMCArIFwicHhcIjtcclxuXHJcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2aWQpO1xyXG5cclxuICAgICQoXCIjXCIgKyBkaXZpZCkuY3NzKFwibGVmdFwiLCBsZWZ0KTtcclxuICAgICQoXCIjXCIgKyBkaXZpZCkuY3NzKFwidG9wXCIsIHRvcCk7XHJcblxyXG4gICAgJChcIiNcIiArIGRpdmlkKS50b2dnbGUoKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS51c2VyKSB7XHJcbiAgICBVc2VyU3ZjLmxvZ2luKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgbG9naW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2dpblwiLCBmdW5jdGlvbiAoXywgdXNlcikge1xyXG4gICAgbG9naW4odXNlcik7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ2luKHVzZXIpIHtcclxuICAgIGlmICghJHNjb3BlLmxvZ2dlZEluKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlciA9IHVzZXIuX2lkO1xyXG4gICAgICAkc2NvcGUubG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgICAkc2NvcGUuJGJyb2FkY2FzdChcImxvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHNjb3BlLiRvbihcInVwZGF0ZVwiLCBmdW5jdGlvbiAoXywgdXNlcikge1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUgPSBuZXcgRGF0ZSgkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlKTtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIiNsb2FkaW5nLWljb25cIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbihcImxvYWRpbmdcIiwgZnVuY3Rpb24gKF8sIHVzZXIpIHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICQoXCIjbG9hZGluZy1pY29uXCIpLnNob3coKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbihcImxvYWRlZFwiLCBmdW5jdGlvbiAoXywgdXNlcikge1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUubG9nb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgZmlyZWJhc2VcclxuICAgICAgLmF1dGgoKVxyXG4gICAgICAuc2lnbk91dCgpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBTaWduLW91dCBzdWNjZXNzZnVsLlxyXG4gICAgICAgICRzY29wZS5sb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICAkc2NvcGUuJGJyb2FkY2FzdChcImxvZ291dFwiKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIC8vIEFuIGVycm9yIGhhcHBlbmVkLlxyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZm9ybWF0RGF0ZSA9IGZ1bmN0aW9uIChkYXRlKSB7XHJcbiAgICB2YXIgbW9udGhzID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpICsgXCItXCIgKyBtb250aHNbZGF0ZS5nZXRNb250aCgpXSArIFwiLVwiICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIH07XHJcblxyXG4gIFN0cmluZy5wcm90b3R5cGUuY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5zbGljZSgxKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdBc3Rlcm9pZHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgR2FtZVN2Yykge1xyXG5cclxuICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FzdGVyb2lkcy1wYWdlJyk7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIGN0eC5mb250ID0gXCIzMHB4IENvbWljIFNhbnMgTVNcIjtcclxuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICB2YXIgc2hvdHMgPSB7fTtcclxuICB2YXIgYXN0ZXJvaWRzID0ge307XHJcbiAgdmFyIHBvd2VydXBzID0ge307XHJcbiAgdmFyIGV4cGxvc2lvbnMgPSB7fTtcclxuICB2YXIgbWFwID0ge307XHJcbiAgdmFyIHNwYWNlcGljcyA9IDEwO1xyXG4gIHZhciBzcGFjZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwYWNlcGljcyk7XHJcbiAgdmFyIHBvd2VydXBUeXBlcyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3NwZWVkJyxcclxuICAgICAgYW5ub3VuY2VtZW50OiAnTWF4IFNwZWVkIOKHpycsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICAgIHNpemU6IFsxNCwgMzVdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbihzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAubWF4U3BlZWQgKz0gMTAwO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnY29vbGRvd24nLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6ICdDb29sZG93biDih6knLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogMyxcclxuICAgICAgICBzaXplOiBbMTcsIDE3XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5jb29sZG93blRpbWUgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdyYW5nZScsXHJcbiAgICAgIGFubm91bmNlbWVudDogJ0ZpcmluZyBSYW5nZSDih6cnLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDQsXHJcbiAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICBzaXplOiBbMzAsIDhdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbihzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAucmFuZ2UgKz0gNTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ3NoaWVsZCcsXHJcbiAgICAgIGFubm91bmNlbWVudDogJ1NoaWVsZCcsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogNSxcclxuICAgICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICAgIHNpemU6IFsxOSwgMTldLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbihzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAuc2hpZWxkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ251a2UnLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6ICdOdWtlJyxcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgICAgc2l6ZTogWzE1LCAxNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWVcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgICAgICBhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgICAgfVxyXG4gICAgfSwvKlxyXG4gICAgJ3NpZGVfY2Fubm9ucycsXHJcbiAgICAnbGFzZXInLFxyXG4gICAgJ3NoaWVsZCcsXHJcbiAgICAnbGlmZScsXHJcbiAgICAnbWlzc2lsZXMnLFxyXG4gICAgJ251a2UnXHJcbiAgICAqL1xyXG4gIF07XHJcbiAgcG93ZXJ1cFR5cGVzLmZvckVhY2goZnVuY3Rpb24ocG93ZXJ1cCwgaSwgYXJyYXkpIHtcclxuICAgIGFycmF5W2ldLmltZy5zcmMgPSAnYXN0ZXJvaWRzLycgKyBwb3dlcnVwLm5hbWUgKyAnLnBuZyc7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBleHBsb3Npb25JbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGV4cGxvc2lvbkltYWdlLnNyYyA9ICdhc3Rlcm9pZHMvZXhwbG9zaW9uLnBuZyc7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICBtYXBbZS5rZXlDb2RlIHx8IGUud2hpY2hdID0gdHJ1ZTtcclxuICB9LHRydWUpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgbWFwW2Uua2V5Q29kZSB8fCBlLndoaWNoXSA9IGZhbHNlO1xyXG4gIH0sdHJ1ZSk7XHJcblxyXG4gICRzY29wZS5oaWdoc2NvcmUgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBldmFsdWF0ZUtleXMoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICAvL1NwYWNlXHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNob290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzddKSB7XHJcbiAgICAgICAgLy9MZWZ0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMzYwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gLT0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOV0pIHtcclxuICAgICAgICAvL1JpZ2h0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMzYwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gKz0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOF0pIHtcclxuICAgICAgICAvL1VwIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA8PSBzcGFjZXNoaXAubWF4U3BlZWQpIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCArPSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkLS07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbNDBdKSB7XHJcbiAgICAgICAgLy9Eb3duIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCAtPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICBzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTcGFjZXNoaXAoKSB7XHJcbiAgICB0aGlzLndpZHRoID0gNTA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDUwO1xyXG4gICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgIHRoaXMucmFuZ2UgPSA4MDtcclxuICAgIHRoaXMuY2Fubm9uID0ge1xyXG4gICAgICB4OiB0aGlzLndpZHRoIC8gMiAtIDQuNSxcclxuICAgICAgeTogdGhpcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgKiAwLjA3ODEyNVxyXG4gICAgfTtcclxuICAgIHRoaXMuY29vbGRvd24gPSAwO1xyXG4gICAgdGhpcy5jb29sZG93blRpbWUgPSAyMDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbXHJcbiAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMixcclxuICAgICAgY2FudmFzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDJcclxuICAgIF07XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gJ2FzdGVyb2lkcy9zcGFjZXNoaXAucG5nJztcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5tYXhTcGVlZCA9IDEwMDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gMDtcclxuICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG5cclxuICAgIHRoaXMuc2hvb3QgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5jb29sZG93biA9IHRoaXMuY29vbGRvd25UaW1lO1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBzaG90c1tpZF0gPSBuZXcgU2hvdChpZCwgdGhpcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5zaGllbGQpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmFyYyh0aGlzLnBvc2l0aW9uWzBdICsgdGhpcy53aWR0aCAvIDIsIHRoaXMucG9zaXRpb25bMV0gKyB0aGlzLmhlaWdodCAvIDIsIDMwLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwicmdiKDM1LCAyMzcsIDg2LCAwLjUpXCI7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2IoNjYsIDE2OCwgMzYsIDAuOClcIjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICAgIHZhciBhc3Rlcm9pZCA9IGFzdGVyb2lkc1tpXTtcclxuICAgICAgICBpZiAoaGl0KGFzdGVyb2lkLCB0aGlzKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2hpZWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hpZWxkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGFzdGVyb2lkLmV4cGxvZGUoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBnYW1lT3ZlcigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFuZ2xlID0gdGhpcy5yb3RhdGlvbjtcclxuICAgICAgaWYgKHRoaXMuY29vbGRvd24gPiAwKSB7XHJcbiAgICAgICAgdGhpcy5jb29sZG93bi0tO1xyXG4gICAgICB9XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU2hvdChpZCwgc3BhY2VzaGlwKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW1xyXG4gICAgICBzcGFjZXNoaXAucG9zaXRpb25bMF0gKyBzcGFjZXNoaXAuY2Fubm9uLnggKyBzcGFjZXNoaXAuY2Fubm9uLnggKiBNYXRoLmNvcygoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSAvIDE4MCksXHJcbiAgICAgIHNwYWNlc2hpcC5wb3NpdGlvblsxXSArIHNwYWNlc2hpcC5jYW5ub24ueSArIHNwYWNlc2hpcC5jYW5ub24ueSAqIE1hdGguc2luKChzcGFjZXNoaXAucm90YXRpb24gLSA5MCkgKiBNYXRoLlBJIC8gMTgwKVxyXG4gICAgXTtcclxuICAgIHRoaXMud2lkdGggPSA5O1xyXG4gICAgdGhpcy5oZWlnaHQgPSAxNTtcclxuICAgIHRoaXMuYW5nbGUgPSBzcGFjZXNoaXAuYW5nbGU7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gc3BhY2VzaGlwLnJvdGF0aW9uO1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwYWNlc2hpcC5zcGVlZCArIDUwMDtcclxuICAgIHRoaXMubGlmZXNwYW4gPSBzcGFjZXNoaXAucmFuZ2U7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gJ2FzdGVyb2lkcy9zaG90LnBuZyc7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBBc3Rlcm9pZChpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy53aWR0aCA9IE1hdGgucmFuZG9tKCkgKiA1MCArIDIwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMucm90YXRpb25TcGVlZCA9IE1hdGgucmFuZG9tKCkgKiA2IC0gMztcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMzAwICsgMjtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSAnYXN0ZXJvaWRzL2FzdGVyb2lkJyArIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA2KSArIDEpICsgJy5wbmcnO1xyXG5cclxuICAgIHRoaXMuZXhwbG9kZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBleHBsb3Npb25zW3RoaXMuaWRdID0gbmV3IEV4cGxvc2lvbih0aGlzKTtcclxuICAgICAgcmV0dXJuIGRlbGV0ZSBhc3Rlcm9pZHNbdGhpcy5pZF07XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZDtcclxuICAgICAgaWYgKHRoaXMucm90YXRpb24gPiAzNjApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gdGhpcy5yb3RhdGlvbiAtIDM2MDtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnJvdGF0aW9uIDwgMCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSAzNjAgKyB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgICB2YXIgc2hvdCA9IHNob3RzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoc2hvdCwgdGhpcykpIHtcclxuICAgICAgICAgIHRoaXMuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgdmFyIHBvaW50cyA9IE1hdGguZmxvb3IoKHNob3Quc3BlZWQgLSA1MDApIC8gMTAgKyA3MCAtIHRoaXMud2lkdGgpO1xyXG4gICAgICAgICAgaWYgKE1hdGguZmxvb3IoKHBvaW50cyArICRzY29wZS5zY29yZSkgLyAxMDApID4gTWF0aC5mbG9vcigkc2NvcGUuc2NvcmUgLyAxMDApKSB7XHJcbiAgICAgICAgICAgIHNwYXduUG93ZXJ1cCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJHNjb3BlLnNjb3JlICs9IHBvaW50cztcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIGRlbGV0ZSBzaG90c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBFeHBsb3Npb24ob2JqZWN0KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW29iamVjdC5wb3NpdGlvblswXSwgb2JqZWN0LnBvc2l0aW9uWzFdXTtcclxuICAgIHRoaXMud2lkdGggPSBvYmplY3Qud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9iamVjdC5oZWlnaHQ7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5jeWNsZSA9IHtcclxuICAgICAgcm93czogNixcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgc2l6ZTogWzI1NiwgMjU2XSxcclxuICAgICAgaTogMCxcclxuICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDQ3O1xyXG4gICAgdGhpcy5pbWcgPSBleHBsb3Npb25JbWFnZTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAodGhpcy5jeWNsZS5kaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLmN5Y2xlLmkrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN5Y2xlLmktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFBvd2VydXAoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucG93ZXJ1cCA9IHBvd2VydXBUeXBlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3dlcnVwVHlwZXMubGVuZ3RoKV07XHJcbiAgICB0aGlzLmN5Y2xlID0gdGhpcy5wb3dlcnVwLmN5Y2xlO1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDEwMDA7XHJcbiAgICBpZiAodGhpcy5jeWNsZS5zaXplWzFdID4gdGhpcy5jeWNsZS5zaXplWzBdKSB7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gNDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSBNYXRoLnJvdW5kKHRoaXMuaGVpZ2h0IC8gdGhpcy5jeWNsZS5zaXplWzFdICogdGhpcy5jeWNsZS5zaXplWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSA0MDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLnJvdW5kKHRoaXMud2lkdGggLyB0aGlzLmN5Y2xlLnNpemVbMF0gKiB0aGlzLmN5Y2xlLnNpemVbMV0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5pbWcgPSB0aGlzLnBvd2VydXAuaW1nO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDE1MCArIDUwO1xyXG4gICAgdmFyIGRlbGF5ID0gNTtcclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBpZiAodGhpcy5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBwb3dlcnVwc1t0aGlzLmlkXTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaGl0KHNwYWNlc2hpcCwgdGhpcykpIHtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2UgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5hbm5vdW5jZW1lbnQgPSB0aGlzLnBvd2VydXAuYW5ub3VuY2VtZW50O1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgdGhpcy5wb3dlcnVwLmFjdGl2YXRlKHNwYWNlc2hpcCk7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBwb3dlcnVwc1t0aGlzLmlkXTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICAgIGlmIChkZWxheSA8PSAwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLmkrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGF5ID0gNTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWxheS0tO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbW92ZShvYmplY3QpIHtcclxuICAgICBvYmplY3QucG9zaXRpb25bMF0gKz0gb2JqZWN0LnNwZWVkIC8gMTAwICogTWF0aC5jb3MoKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgIG9iamVjdC5wb3NpdGlvblsxXSArPSBvYmplY3Quc3BlZWQgLyAxMDAgKiBNYXRoLnNpbigob2JqZWN0LmFuZ2xlIC0gOTApICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgaWYgKG9iamVjdC5wb3NpdGlvblswXSA+IGNhbnZhcy53aWR0aCkge1xyXG4gICAgICAgb2JqZWN0LnBvc2l0aW9uWzBdID0gLW9iamVjdC53aWR0aDtcclxuICAgICB9IGVsc2UgaWYgKG9iamVjdC5wb3NpdGlvblswXSA8IC1vYmplY3Qud2lkdGgpIHtcclxuICAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IGNhbnZhcy53aWR0aDtcclxuICAgICB9XHJcbiAgICAgaWYgKG9iamVjdC5wb3NpdGlvblsxXSA+IGNhbnZhcy5oZWlnaHQpIHtcclxuICAgICAgIG9iamVjdC5wb3NpdGlvblsxXSA9IC1vYmplY3QuaGVpZ2h0O1xyXG4gICAgIH0gZWxzZSBpZiAob2JqZWN0LnBvc2l0aW9uWzFdIDwgLW9iamVjdC5oZWlnaHQpIHtcclxuICAgICAgIG9iamVjdC5wb3NpdGlvblsxXSA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgfVxyXG4gICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgY3R4LnRyYW5zbGF0ZShvYmplY3QucG9zaXRpb25bMF0sIG9iamVjdC5wb3NpdGlvblsxXSk7XHJcbiAgICAgY3R4LnRyYW5zbGF0ZShvYmplY3Qud2lkdGggLyAyLCBvYmplY3QuaGVpZ2h0IC8gMik7XHJcbiAgICAgY3R4LnJvdGF0ZShvYmplY3Qucm90YXRpb24gKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICBpZiAob2JqZWN0LmN5Y2xlKSB7XHJcbiAgICAgICB2YXIgY29sdW1uID0gb2JqZWN0LmN5Y2xlLmkgJSBvYmplY3QuY3ljbGUuY29sdW1ucztcclxuICAgICAgIHZhciByb3cgPSBNYXRoLmZsb29yKG9iamVjdC5jeWNsZS5pIC8gb2JqZWN0LmN5Y2xlLmNvbHVtbnMpO1xyXG4gICAgICAgY3R4LmRyYXdJbWFnZShvYmplY3QuaW1nLCBvYmplY3QuY3ljbGUuc2l6ZVswXSAqIGNvbHVtbiwgb2JqZWN0LmN5Y2xlLnNpemVbMV0gKiByb3csIG9iamVjdC5jeWNsZS5zaXplWzBdLCBvYmplY3QuY3ljbGUuc2l6ZVsxXSwgLW9iamVjdC53aWR0aCAvIDIsIC1vYmplY3QuaGVpZ2h0IC8gMiwgb2JqZWN0LndpZHRoLCBvYmplY3QuaGVpZ2h0KTtcclxuXHJcbiAgICAgICBpZiAob2JqZWN0LmN5Y2xlLmkgPD0gMCkge1xyXG4gICAgICAgICBvYmplY3QuY3ljbGUuaSA9IDA7XHJcbiAgICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgfSBlbHNlIGlmIChvYmplY3QuY3ljbGUuaSA+PSBvYmplY3QuY3ljbGUuY29sdW1ucyAqIG9iamVjdC5jeWNsZS5yb3dzKSB7XHJcbiAgICAgICAgIG9iamVjdC5jeWNsZS5pID0gb2JqZWN0LmN5Y2xlLmNvbHVtbnMgKiBvYmplY3QuY3ljbGUucm93cyAtIDE7XHJcbiAgICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgIH1cclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgY3R4LmRyYXdJbWFnZShvYmplY3QuaW1nLCAtb2JqZWN0LndpZHRoIC8gMiwgLW9iamVjdC5oZWlnaHQgLyAyLCBvYmplY3Qud2lkdGgsIG9iamVjdC5oZWlnaHQpO1xyXG4gICAgIH1cclxuICAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHNwYWNlc2hpcDtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnQoKSB7XHJcbiAgICAkc2NvcGUucGxheWluZyA9IHRydWU7XHJcbiAgICAkc2NvcGUuc2NvcmUgPSAwO1xyXG4gICAgc3BhY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFjZXBpY3MpO1xyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgc3BhY2VzaGlwID0gbmV3IFNwYWNlc2hpcCgpO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYXduQXN0ZXJvaWRzKDUpO1xyXG4gICAgYXV0b1NwYXduKCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRFbnRyeVBvc2l0aW9uKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgIHZhciBncmlkWCA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIGdyaWRZID0gTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICB2YXIgeCwgeSA9IDA7XHJcbiAgICBpZiAoZ3JpZFggPj0gMSkge1xyXG4gICAgICB4ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgaWYgKHkgPj0gMSkge1xyXG4gICAgICAgIHkgPSAwIC0gaGVpZ2h0O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHkgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB5ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIGlmIChncmlkWSA+PSAxKSB7XHJcbiAgICAgICAgeCA9IDAgLSB3aWR0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB4ID0gY2FudmFzLndpZHRoO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3gsIHldO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGl0KG9iamVjdDEsIG9iamVjdDIpIHtcclxuICAgIHJldHVybiAob2JqZWN0MS5wb3NpdGlvblswXSA8IG9iamVjdDIucG9zaXRpb25bMF0gKyBvYmplY3QyLndpZHRoKSAmJlxyXG4gICAgICAgICAgIChvYmplY3QyLnBvc2l0aW9uWzBdIDwgb2JqZWN0MS5wb3NpdGlvblswXSArIG9iamVjdDEud2lkdGgpICYmXHJcbiAgICAgICAgICAgKG9iamVjdDEucG9zaXRpb25bMV0gPCBvYmplY3QyLnBvc2l0aW9uWzFdICsgb2JqZWN0Mi5oZWlnaHQpICYmXHJcbiAgICAgICAgICAgKG9iamVjdDIucG9zaXRpb25bMV0gPCBvYmplY3QxLnBvc2l0aW9uWzFdICsgb2JqZWN0MS5oZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYXV0b1NwYXduKCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKGFzdGVyb2lkcykubGVuZ3RoIDwgMjAwKSB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIGFzdGVyb2lkc1tpZF0gPSBuZXcgQXN0ZXJvaWQoaWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYXV0b1NwYXduKCk7XHJcbiAgICAgIH0sIHNwYXduSW50ZXJ2YWwoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkludGVydmFsKCkge1xyXG4gICAgaWYgKCRzY29wZS5zY29yZSA8IDEwMDApIHtcclxuICAgICAgcmV0dXJuIDEwMDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDIwMDApIHtcclxuICAgICAgcmV0dXJuIDkwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgMzAwMCkge1xyXG4gICAgICByZXR1cm4gODAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA0MDAwKSB7XHJcbiAgICAgIHJldHVybiA3MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDUwMDApIHtcclxuICAgICAgcmV0dXJuIDYwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNjAwMCkge1xyXG4gICAgICByZXR1cm4gNTAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA3MDAwKSB7XHJcbiAgICAgIHJldHVybiA0MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDgwMDApIHtcclxuICAgICAgcmV0dXJuIDMwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAyMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkFzdGVyb2lkcyhhbW91bnQpIHtcclxuICAgIHZhciBpID0gMDtcclxuICAgIGRvIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgYXN0ZXJvaWRzW2lkXSA9IG5ldyBBc3Rlcm9pZChpZCk7XHJcbiAgICB9IHdoaWxlIChpKysgPD0gYW1vdW50KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduUG93ZXJ1cCgpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhwb3dlcnVwcykubGVuZ3RoIDwgMykge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBwb3dlcnVwc1tpZF0gPSBuZXcgUG93ZXJ1cChpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnYW1lT3ZlcigpIHtcclxuICAgICRzY29wZS5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO1xyXG4gICAgfVxyXG4gICAgc2hvdHMgPSB7fTtcclxuICAgIGlmICgkc2NvcGUubG9nZ2VkSW4pIHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzIDwgJHNjb3BlLnNjb3JlKSB7XHJcbiAgICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyLmhpZ2hzY29yZS5hc3Rlcm9pZHMgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgICAgR2FtZVN2Yy5zZXRIaWdoc2NvcmUoJ2FzdGVyb2lkcycsICRzY29wZS5jdXJyZW50VXNlci5faWQsICRzY29wZS5zY29yZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaHNjb3JlIDwgJHNjb3BlLnNjb3JlKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hzY29yZSA9ICRzY29wZS5zY29yZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblx0Ly8gU3RhcnQgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgYW5kXHJcblx0Ly8gZHJhdyBjYW52YXMuXHJcblxyXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHQvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG5cdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHQvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG5cclxuXHRcdC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcblx0XHRyZXNpemVDYW52YXMoKTtcclxuXHR9XHJcblx0Ly8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG5cdC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG5cdC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG5cdGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuXHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTAgOiAxMDUpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuXHJcbiAgdmFyIHRhbGx5ID0gMDtcclxuICB2YXIgZGlyZWN0aW9uID0gdHJ1ZTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgaWYgKHNob3RzW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvdHNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgIGFzdGVyb2lkc1tpXS5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gcG93ZXJ1cHMpIHtcclxuICAgICAgcG93ZXJ1cHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGV4cGxvc2lvbnMpIHtcclxuICAgICAgaWYgKGV4cGxvc2lvbnNbaV0ubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBleHBsb3Npb25zW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV4cGxvc2lvbnNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBldmFsdWF0ZUtleXMoKTtcclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzcGFjZXNoaXAubW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIGNhbnZhcy53aWR0aCwgMCk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgnMCcsICdyZ2IoJyArIE1hdGguZmxvb3IoMjU2IC0gMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJyknKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKCcwLjI1JywgJ3JnYignICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigyNTYgLSAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnKScpO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoJzAuNScsICdyZ2IoJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMjU2IC0gMjU2ICogdGFsbHkgLyAxMDApICsgJyknKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKCcwLjc1JywgJ3JnYignICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigyNTYgLSAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnKScpO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoJzEuMCcsICdyZ2IoJyArIE1hdGguZmxvb3IoMjU2IC0gMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJyknKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgICBjdHguZm9udD0nNjBweCBNb25vdG9uJztcclxuICAgICAgY3R4LmZpbGxUZXh0KCdBc3Rlcm9pZHMnLCBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KCdBc3Rlcm9pZHMnKS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcclxuICAgICAgY3R4LmZvbnQ9JzIwcHggQWxkcmljaCc7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnUHJlc3Mgc3BhY2UgdG8gc3RhcnQnLCBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KCdQcmVzcyBzcGFjZSB0byBzdGFydCcpLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIgKyAyMCk7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyJywgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dCgnRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyJykud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC0gMzApO1xyXG4gICAgfVxyXG4gICAgdGFsbHkgKz0gZGlyZWN0aW9uID8gMSA6IC0xO1xyXG4gICAgaWYgKHRhbGx5ID4gMTAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMTAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAodGFsbHkgPCAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMDtcclxuICAgICAgZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuICB9XHJcblxyXG4gICRzY29wZS5zcGFjZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiYXN0ZXJvaWRzL3NwYWNlJyArIHNwYWNlICsgJy5qcGdcIiknXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG5cclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0J1YmJsZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1YmJsZXMtcGFnZScpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB2YXIgYnViYmxlcyA9IFtdO1xyXG4gIHZhciBjb2xvcnMgPSBbJyNmZmMzMDAnLCcjZmY1NzMzJywnI2M3MDAzOScsJyM5MDBjM2UnLCcjNTcxODQ1J107XHJcblxyXG4gIGZ1bmN0aW9uIEJ1YmJsZSgpIHtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAwO1xyXG4gICAgdGhpcy5yYWRpdXMgPSAxO1xyXG4gICAgdGhpcy5leHBhbmRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgdGhpcy5jaXJjdW1mZXJlbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNTApICsgNTtcclxuICAgIHRoaXMubWF4UmFkaXVzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjAwKSArIDIwO1xyXG4gICAgdGhpcy54ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoKTtcclxuICAgIHRoaXMueSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGhpcy52eCA9IChNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSk7XHJcbiAgICB0aGlzLnZ5ID0gKE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBidWJibGVzLmZvckVhY2goZnVuY3Rpb24oYnViYmxlKSB7XHJcbiAgICAgIHZhciBjb2xvciA9IGNvbG9yc1tNYXRoLnJvdW5kKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMoYnViYmxlLngsIGJ1YmJsZS55LCBidWJibGUucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbTWF0aC5yb3VuZChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3JzW2NvbG9ycy5sZW5ndGggLSBNYXRoLnJvdW5kKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gYnViYmxlLmNpcmN1bWZlcmVuY2UgKiBidWJibGUucmFkaXVzIC8gYnViYmxlLm1heFJhZGl1cztcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWx0ZXJCdWJibGVzKCkge1xyXG4gICAgYnViYmxlcy5wdXNoKG5ldyBCdWJibGUoKSk7XHJcbiAgICBidWJibGVzID0gYnViYmxlcy5maWx0ZXIoZnVuY3Rpb24gKGJ1YmJsZSkge1xyXG4gICAgICBpZiAoYnViYmxlLnJhZGl1cyA9PT0gYnViYmxlLm1heFJhZGl1cykge1xyXG4gICAgICAgIGJ1YmJsZS5leHBhbmRpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBidWJibGUueCArPSBidWJibGUudnggKiBidWJibGUuc3BlZWQ7XHJcbiAgICAgIGJ1YmJsZS55ICs9IGJ1YmJsZS52eSAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnJhZGl1cyArPSAoYnViYmxlLmV4cGFuZGluZyA/IDEgOiAtMSk7XHJcbiAgICAgIHJldHVybiBidWJibGUucmFkaXVzID4gMDtcclxuICAgIH0pO1xyXG4gICAgZHJhdygpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG5cclxuXHJcblx0KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRcdC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG5cdFx0Ly8gZHJhdyBjYW52YXMuXHJcblx0XHRpbml0aWFsaXplKCk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHRcdC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuXHRcdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0XHR9XHJcblx0XHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0XHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHRcdC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG5cdFx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG5cdFx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdFx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTUgOiAxMTEpO1xyXG5cdFx0fVxyXG5cclxuXHR9KSgpO1xyXG5cclxuXHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ0NoYXJhZGVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHQkc2NvcGUuc2VsZWN0V29yZCA9IGNhdGVnb3J5ID0+IHtcclxuXHRcdCRzY29wZS53b3JkID1cclxuXHRcdFx0JHNjb3BlLmNoYXJhZGVzW2NhdGVnb3J5XVtcclxuXHRcdFx0XHRNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldLmxlbmd0aClcclxuXHRcdFx0XTtcclxuXHRcdGNvbnNvbGUubG9nKCRzY29wZS53b3JkKTtcclxuXHR9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkNvbnRhY3RDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEVtYWlsU3ZjKSB7XHJcbiAgJHNjb3BlLm9wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU3BhbVwiLFxyXG4gICAgICB0ZXh0OiBcIkkgYW0gYSBzcGFtIGJvdCBhbmQgYXV0b21hdGljYWxseSBjaGVjayB0aGUgZmlyc3Qgb3B0aW9uIEkgZmluZCFcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiT3Bwb3J0dW5pdHlcIixcclxuICAgICAgdGV4dDogXCJZb3Ugc2VlbSB0byBoYXZlIHRoZSBza2lsbHMgSSBzZWVrLCBJJ2QgbGlrZSB0byB0YWxrIGFib3V0IHNvbWUgb3Bwb3J0dW5pdGllcy5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUmVzdW1lXCIsXHJcbiAgICAgIHRleHQ6IFwiSSBkaWcgdGhlIHJlc3VtZSwgaG93IGRpZCB5b3UgbWFrZSBpdD9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiT3RoZXJcIixcclxuICAgICAgdGV4dDogXCJTdW10aW4gZWxzZSFcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgJHNjb3BlLmNvbnRhY3QgPSB7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBwaG9uZTogXCJcIixcclxuICAgIGFib3V0OiBcIlwiLFxyXG4gICAgbWVzc2FnZTogXCJcIixcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS5zZW5kaW5nID0gdHJ1ZTtcclxuICAgIGNvbnNvbGUubG9nKFwiaGVyZVwiKTtcclxuICAgIEVtYWlsU3ZjLnNlbmQoe1xyXG4gICAgICBlbWFpbDogJHNjb3BlLmNvbnRhY3QuZW1haWwsXHJcbiAgICAgIG5hbWU6ICRzY29wZS5jb250YWN0Lm5hbWUsXHJcbiAgICAgIHBob25lOiAkc2NvcGUuY29udGFjdC5waG9uZSxcclxuICAgICAgYWJvdXQ6ICRzY29wZS5jb250YWN0LmFib3V0LFxyXG4gICAgICBtZXNzYWdlOiAkc2NvcGUuY29udGFjdC5tZXNzYWdlLFxyXG4gICAgfSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbnQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTUy4gc3RhdHVzPSVkLCB0ZXh0PSVzXCIsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UudGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbmRpbmcgPSBmYWxzZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZBSUxFRC4gZXJyb3I9XCIsIGVycik7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignRXhwZXJpZW5jZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICRzY29wZS5nZXRTa2lsbCA9IGZ1bmN0aW9uKHNraWxsQ29kZSkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2tpbGxzKSByZXR1cm47XHJcbiAgICByZXR1cm4gJHNjb3BlLnNraWxscy5maW5kKGZ1bmN0aW9uKHNraWxsKSB7XHJcbiAgICAgIHJldHVybiBza2lsbC5jb2RlID09PSBza2lsbENvZGU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignSG9iYmllc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAkLmdldEpTT04oJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vdXNlci9iZWxnb2NhbmFkaWFuL2Fib3V0Ly5qc29uJywgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRIb2JieSA9ICRzY29wZS5ob2JiaWVzWzBdO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0SG9iYnkgPSBmdW5jdGlvbiAoaG9iYnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gaG9iYnk7XHJcbiAgICAkc2NvcGUuaG9iYnlTZWxlY3RvclZpc2libGUgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd0hvYmJ5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpIHtcclxuICAgIGlmICghdmFsdWUuaW1hZ2VzKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdmFsdWUuaW1hZ2VzLmxlbmd0aCA+IDA7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignTGVtbWluZ3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgR2FtZVN2Yykge1xyXG5cclxuICB2YXIgTEVGVCA9IDA7XHJcbiAgdmFyIFJJR0hUID0gMTtcclxuXHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZW1taW5ncy1wYWdlJyk7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIHZhciBsZW1taW5nc0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgbGVtbWluZ3NJbWFnZS5zcmMgPSAnbGVtbWluZ3MvbGVtbWluZ3MucG5nJztcclxuICB2YXIgZGVjb3JJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGRlY29ySW1hZ2Uuc3JjID0gJ2xlbW1pbmdzL2RlY29yLnBuZyc7XHJcbiAgdmFyIGxlbW1pbmdzID0ge307XHJcbiAgdmFyIHN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgdmFyIGFjdGlvbnMgPSB7XHJcbiAgICB3YWxrOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMF0sXHJcbiAgICAgIGVuZDogWzMyMCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGh1aDoge1xyXG4gICAgICBzdGFydDogWzMyMCwgMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZmFsbDoge1xyXG4gICAgICBzdGFydDogWzAsIDgwXSxcclxuICAgICAgZW5kOiBbMTYwLCAxMDBdLFxyXG4gICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGZseToge1xyXG4gICAgICBzdGFydDogWzE2MCwgODBdLFxyXG4gICAgICBlbmQ6IFs0ODAsIDExMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc3RvcDoge1xyXG4gICAgICBzdGFydDogWzAsIDEyMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTQwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgY2xpbWI6IHtcclxuICAgICAgc3RhcnQ6IFswLCAxNjBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDE4NV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMjVdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwdW5jaDoge1xyXG4gICAgICBzdGFydDogWzAsIDI0MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMzAwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZGlnOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMzIwXSxcclxuICAgICAgZW5kOiBbMzIwLCAzNDVdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBMZW1taW5nKGluaXQpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNhbnZhcy53aWR0aCAtIDIwMCkpICsgMTAwLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLmhlaWdodCAtIDIwMCkpICsgMTAwXTtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSAqIDIgPiAxID8gTEVGVCA6IFJJR0hUO1xyXG4gICAgdGhpcy5hY3QgPSBmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb25zW2FjdGlvbl07XHJcbiAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gKDIwICogKHRoaXMuYWN0aW9uLnJvd3MgLSAxKSkpIC8gdGhpcy5hY3Rpb24ucm93cztcclxuICAgICAgdGhpcy5hbmltYXRpb24gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuYWN0KGluaXQpO1xyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSwgdGhpcy5wb3NpdGlvblsxXSk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gTEVGVCkge1xyXG4gICAgICAgIGN0eC5zY2FsZSgtMSwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UobGVtbWluZ3NJbWFnZSwgKHRoaXMud2lkdGggKiBjb2x1bW4pICsgdGhpcy5hY3Rpb24uc3RhcnRbMF0sICgodGhpcy5oZWlnaHQgKyAyMCkgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgaWYgKHRoaXMuYWN0aW9uLnJldmVyc2UpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlLS07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICF0aGlzLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICBpZiAodGhpcy5jeWNsZSA+PSB0aGlzLmFjdGlvbi5jb2x1bW5zICogdGhpcy5hY3Rpb24ucm93cykge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGF0Y2goKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gWzIwLCAyMF07XHJcbiAgICB0aGlzLmFjdGlvbiA9IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbODIsIDUwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgIHJvd3M6IDEwXHJcbiAgICB9XHJcbiAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICB0aGlzLmhlaWdodCA9ICh0aGlzLmFjdGlvbi5lbmRbMV0gLSB0aGlzLmFjdGlvbi5zdGFydFsxXSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICB0aGlzLm9wZW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgdmFyIGNvbHVtbiwgcm93O1xyXG4gICAgICBpZiAoc3RhcnRlZCkge1xyXG4gICAgICAgIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3IodGhpcy5jeWNsZSAvIHRoaXMuYWN0aW9uLmNvbHVtbnMpO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgOSkge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb2x1bW4gPSAwO1xyXG4gICAgICAgIHJvdyA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgY3R4LmRyYXdJbWFnZShkZWNvckltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKHRoaXMuaGVpZ2h0ICogcm93KSArIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gMSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25MZW1taW5nKCkge1xyXG4gICAgT2JqZWN0LmtleXMoYWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgbGVtbWluZ3NbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKV0gPSBuZXcgTGVtbWluZyhhY3Rpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdHJlc2l6ZUNhbnZhcygpO1xyXG5cdH1cclxuXHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0Ly8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcblx0Ly8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcblx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG5cdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1MCA6IDEwNSk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbiAgc3Bhd25MZW1taW5nKCk7XHJcbiAgbGV0IGhhdGNoID0gbmV3IEhhdGNoKClcclxuICBkcmF3KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBpZiAoIXN0YXJ0ZWQpIHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguZm9udD0nNDBweCBNb25vdG9uJztcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9ICcxMCc7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcclxuICAgICAgY3R4LnJlY3QoMTUsIGNhbnZhcy5oZWlnaHQgLSA0NSwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLndpZHRoICsgMjAsIGN0eC5tZWFzdXJlVGV4dCgnU3RhcnQnKS5oZWlnaHQgKyBjYW52YXMuaGVpZ2h0IC0gNDUpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ1N0YXJ0JywgMjAsIGNhbnZhcy5oZWlnaHQgLSA1MCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKHZhciBpIGluIGxlbW1pbmdzKSB7XHJcbiAgICAgICAgbGVtbWluZ3NbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYXRjaC5vcGVuKCk7XHJcbiAgICBzdGFydGVkID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGRyYXcoKTtcclxuICAgIH0sIDE1MCk7XHJcbiAgfVxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMaXN0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIENhdGVnb3JpZXNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IHRydWU7XHJcblxyXG4gICRzY29wZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5nZXRDYXRlZ29yaWVzKClcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICRzY29wZS50YXNrcyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpIGluICRzY29wZS5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaiBpbiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrcykge1xyXG4gICAgICAgICAgJHNjb3BlLnRhc2tzLnB1c2goe1xyXG4gICAgICAgICAgICBcImNhdGVnb3J5XCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUsXHJcbiAgICAgICAgICAgIFwidGFza1wiOiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrc1tqXS5uYW1lXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RDYXRlZ29yeSA9IGZ1bmN0aW9uKGNhdGVnb3J5KSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkVGFza3MgPSBbXTtcclxuICAgICRzY29wZS5zZWxlY3RhYmxlVGFza3MgPSBbXTtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcy5wdXNoKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgIH1cclxuICAgICRzY29wZS5zaG93Q2F0ZWdvcnkgPSBmYWxzZTtcclxuICAgICRzY29wZS5lbnRlcmVkQ2F0ZWdvcnkgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUubmV3Q2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSA9PT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkoJHNjb3BlLmNhdGVnb3JpZXNbaV0pO1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZENhdGVnb3J5KHtcclxuICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuaW5pdCgpO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0ubmFtZSA9PT0gdGFzaykge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0VGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5Lm5hbWUsIHtcclxuICAgICAgICB0YXNrOiB0YXNrXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLnB1c2goeyBuYW1lOiB0YXNrIH0pO1xyXG4gICAgICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1skc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRUYXNrID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUudW5zZWxlY3RUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RhYmxlVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5hZGRUYXNrID0gZnVuY3Rpb24odGFza0xpc3QsIHRhc2spIHtcclxuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnJlbW92ZVRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3Quc3BsaWNlKHRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zdGFydFByaW9yaXRpemluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5zZXRQcmlvcml0eUxpc3QoJHNjb3BlLnNlbGVjdGVkVGFza3MpO1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy9wcmlvcml0aXplJyk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldFF1ZXN0aW9ucyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2VsZWN0ZWRUYXNrcykgcmV0dXJuICcnO1xyXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9ICRzY29wZS5zZWxlY3RlZFRhc2tzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgY291bnRlciArPSBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignTG9naW5DdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgRmlyZWJhc2VVSSBXaWRnZXQgdXNpbmcgRmlyZWJhc2UuXHJcbiAgdmFyIHVpID0gbmV3IGZpcmViYXNldWkuYXV0aC5BdXRoVUkoZmlyZWJhc2UuYXV0aCgpKTtcclxuXHJcbiAgJHNjb3BlLiRvbignbG9nb3V0JywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB1aS5yZXNldCgpO1xyXG4gICAgc3RhcnRVSSgpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydFVJKCkge1xyXG4gICAgdWkuc3RhcnQoJyNmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyJywge1xyXG4gICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBzaWduSW5TdWNjZXNzOiBmdW5jdGlvbiAoY3VycmVudFVzZXIsIGNyZWRlbnRpYWwsIHJlZGlyZWN0VXJsKSB7XHJcbiAgICAgICAgICAvLyBObyByZWRpcmVjdC5cclxuICAgICAgICAgIGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5hdXRoKClcclxuICAgICAgICAgICAgLmN1cnJlbnRVc2VyLmdldElkVG9rZW4odHJ1ZSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGlkVG9rZW4pIHtcclxuICAgICAgICAgICAgICBVc2VyU3ZjLmF1dGhlbnRpY2F0ZSh7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogY3VycmVudFVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogY3VycmVudFVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwaG90b1VSTDogY3VycmVudFVzZXIucGhvdG9VUkwsXHJcbiAgICAgICAgICAgICAgICBlbWFpbFZlcmlmaWVkOiBjdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkLFxyXG4gICAgICAgICAgICAgICAgaWRUb2tlbjogaWRUb2tlbixcclxuICAgICAgICAgICAgICB9KS50aGVuKFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdCgnbG9naW4nLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgJCgnI21vZGFsLWxvZ2luJykubW9kYWwoJ2hpZGUnKTtcclxuICAgICAgICAgICAgICAgICAgLy8kbG9jYXRpb24ucGF0aCgnLycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KCdwb3B1cCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTG9naW4gRmFpbGVkJyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYWxlcnQtZGFuZ2VyJyxcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBzaWduSW5GYWlsdXJlIGNhbGxiYWNrIG11c3QgYmUgcHJvdmlkZWQgdG8gaGFuZGxlIG1lcmdlIGNvbmZsaWN0cyB3aGljaFxyXG4gICAgICAgIC8vIG9jY3VyIHdoZW4gYW4gZXhpc3RpbmcgY3JlZGVudGlhbCBpcyBsaW5rZWQgdG8gYW4gYW5vbnltb3VzIHVzZXIuXHJcbiAgICAgICAgc2lnbkluRmFpbHVyZTogZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBGb3IgbWVyZ2UgY29uZmxpY3RzLCB0aGUgZXJyb3IuY29kZSB3aWxsIGJlXHJcbiAgICAgICAgICAvLyAnZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdCcuXHJcbiAgICAgICAgICBpZiAoZXJyb3IuY29kZSAhPSAnZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gVGhlIGNyZWRlbnRpYWwgdGhlIHVzZXIgdHJpZWQgdG8gc2lnbiBpbiB3aXRoLlxyXG4gICAgICAgICAgdmFyIGNyZWQgPSBlcnJvci5jcmVkZW50aWFsO1xyXG4gICAgICAgICAgLy8gQ29weSBkYXRhIGZyb20gYW5vbnltb3VzIHVzZXIgdG8gcGVybWFuZW50IHVzZXIgYW5kIGRlbGV0ZSBhbm9ueW1vdXNcclxuICAgICAgICAgIC8vIHVzZXIuXHJcbiAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgIC8vIEZpbmlzaCBzaWduLWluIGFmdGVyIGRhdGEgaXMgY29waWVkLlxyXG4gICAgICAgICAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoQ3JlZGVudGlhbChjcmVkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVpU2hvd246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vIFRoZSB3aWRnZXQgaXMgcmVuZGVyZWQuXHJcbiAgICAgICAgICAvLyBIaWRlIHRoZSBsb2FkZXIuXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzaWduSW5TdWNjZXNzVXJsOiAnL2hvbWUnLFxyXG4gICAgICBzaWduSW5PcHRpb25zOiBbXHJcbiAgICAgICAgLy9maXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICAvLyBXaWxsIHVzZSBwb3B1cCBmb3IgSURQIFByb3ZpZGVycyBzaWduLWluIGZsb3cgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCwgcmVkaXJlY3QuXHJcbiAgICAgIHNpZ25JbkZsb3c6ICdwb3B1cCcsXHJcbiAgICAgIC8vIE90aGVyIGNvbmZpZyBvcHRpb25zLi4uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0VUkoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUG9zdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGZpbHRlciwgUG9zdHNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XHJcbiAgICAgIFBvc3RzU3ZjLmNyZWF0ZSh7XHJcbiAgICAgICAgYm9keTogJHNjb3BlLnBvc3RCb2R5XHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgICAgICAkc2NvcGUucG9zdEJvZHkgPSBudWxsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBQb3N0c1N2Yy5mZXRjaCgpXHJcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUucG9zdHMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKCd3czpuZXdfcG9zdCcsIGZ1bmN0aW9uIChfLCBwb3N0KSB7XHJcbiAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgUG9zdHNTdmMuZ2V0UG9zdChwb3N0KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUucG9zdHMudW5zaGlmdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1ByaW9yaXRpemVDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBDYXRlZ29yaWVzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5wcmlvcml0eUxpc3QgPSBDYXRlZ29yaWVzU3ZjLmdldFByaW9yaXR5TGlzdCgpO1xyXG5cclxuICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICRsb2NhdGlvbi5wYXRoKCcvbGlzdHMnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24gPSAxO1xyXG4gICAgJHNjb3BlLmN1cnJlbnRRdWVzdGlvbiA9IDE7XHJcbiAgICAkc2NvcGUuZG9uZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLm1ha2VDaG9pY2UgPSBmdW5jdGlvbihjaG9pY2UpIHtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5pZCA9PT0gJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24pIHtcclxuICAgICAgICAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA9IGNob2ljZSA9PT0gMSA/ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uZmlyc3RDaG9pY2UgOiAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLnNlY29uZENob2ljZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uID09PSAkc2NvcGUuY3VycmVudFF1ZXN0aW9uKSB7XHJcbiAgICAgICRzY29wZS5jdXJyZW50UXVlc3Rpb24gPSAkc2NvcGUuY3VycmVudFF1ZXN0aW9uID09PSAkc2NvcGUucHJpb3JpdHlMaXN0Lmxlbmd0aCA/IDEgOiAkc2NvcGUuY3VycmVudFF1ZXN0aW9uICsgMTtcclxuICAgIH1cclxuICAgICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uID0gJHNjb3BlLmN1cnJlbnRRdWVzdGlvbjtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yIChpIGluICRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlID09PSAnJykge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICAkKCcjcHJpb3JpdGl6ZUNob2ljZXMnKS5oaWRlKDMwMCk7XHJcbiAgICAgICRzY29wZS5kb25lID0gdHJ1ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0QnV0dG9uVmFsdWUgPSBmdW5jdGlvbihjaG9pY2UpIHtcclxuICAgIGlmICghJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5wcmlvcml0eUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uaWQgPT09ICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGNob2ljZSA9PT0gMSA/ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uZmlyc3RDaG9pY2UgOiAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLnNlY29uZENob2ljZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RRdWVzdGlvbiA9IGZ1bmN0aW9uKHF1ZXN0aW9uKSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbiA9IHF1ZXN0aW9uO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRGaWx0ZXJlZFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCEkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIHJldHVybiAkc2NvcGUucHJpb3JpdHlMaXN0XHJcbiAgICAgIC5zb3J0KGZ1bmN0aW9uKGEsIGIpeyByZXR1cm4gYS5pZC1iLmlkOyB9KVxyXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uKHF1ZXN0aW9uKSB7IHJldHVybiBxdWVzdGlvbi5jaG9pY2UgIT09ICcnIHx8IHF1ZXN0aW9uLmlkID09PSAkc2NvcGUuY3VycmVudFF1ZXN0aW9uOyB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0Q2hvaWNlc01hZGUgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICB2YXIgY2hvaWNlc01hZGUgPSAwO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSAhPT0gJycpIHtcclxuICAgICAgICBjaG9pY2VzTWFkZSsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2hvaWNlc01hZGU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldEJ1dHRvbkNsYXNzID0gZnVuY3Rpb24oY2hvaWNlKSB7XHJcbiAgICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmlkID09PSAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbikge1xyXG4gICAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA9PT0gJycpIHtcclxuICAgICAgICAgIHJldHVybiAnYnRuLXByaW1hcnknO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hvaWNlID09PSAxKSB7XHJcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5maXJzdENob2ljZSA9PT0gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgPyAnYnRuLXN1Y2Nlc3MnIDogJ2J0bi1kYW5nZXInO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5zZWNvbmRDaG9pY2UgPT09ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlID8gJ2J0bi1zdWNjZXNzJyA6ICdidG4tZGFuZ2VyJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd0Nob2ljZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICQoJyNwcmlvcml0aXplQ2hvaWNlcycpLnNob3coMTAwMCk7XHJcbiAgICAkKCcjcmV2aWV3Q2hvaWNlcycpLmhpZGUoKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhcnRDbGljayA9IGZ1bmN0aW9uKCBldmVudCApIHtcclxuICAgIGlmICggJHNjb3BlLmNoYXJ0ICkge1xyXG4gICAgICAvLyBEaWZmZXJlbnQgbWV0aG9kcyBkZXBlbmRpbmcgb24gY2hhcnQgdHlwZVxyXG4gICAgICAvL2NvbnNvbGUubG9nKCAkc2NvcGUuY2hhcnQuZ2V0UG9pbnRzQXRFdmVudCggZXZlbnQgKSApOyAvLyBmb3IgUG9pbnRzXHJcbiAgICAgIGNvbnNvbGUubG9nKCAkc2NvcGUuY2hhcnQuZ2V0U2VnbWVudHNBdEV2ZW50KCBldmVudCApICk7IC8vIGZvciBTZWdtZW50c1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zaG93UmVzdWx0cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICRzY29wZS5kYXRhID0gW107XHJcbiAgICAkc2NvcGUub3B0aW9ucyA9IHtcclxuICAgICAgLy8gU2V0cyB0aGUgY2hhcnQgdG8gYmUgcmVzcG9uc2l2ZVxyXG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG5cclxuICAgICAgLy9Cb29sZWFuIC0gV2hldGhlciB3ZSBzaG91bGQgc2hvdyBhIHN0cm9rZSBvbiBlYWNoIHNlZ21lbnRcclxuICAgICAgc2VnbWVudFNob3dTdHJva2UgOiB0cnVlLFxyXG5cclxuICAgICAgLy9TdHJpbmcgLSBUaGUgY29sb3VyIG9mIGVhY2ggc2VnbWVudCBzdHJva2VcclxuICAgICAgc2VnbWVudFN0cm9rZUNvbG9yIDogJyNmZmYnLFxyXG5cclxuICAgICAgLy9OdW1iZXIgLSBUaGUgd2lkdGggb2YgZWFjaCBzZWdtZW50IHN0cm9rZVxyXG4gICAgICBzZWdtZW50U3Ryb2tlV2lkdGggOiAyLFxyXG5cclxuICAgICAgLy9OdW1iZXIgLSBUaGUgcGVyY2VudGFnZSBvZiB0aGUgY2hhcnQgdGhhdCB3ZSBjdXQgb3V0IG9mIHRoZSBtaWRkbGVcclxuICAgICAgcGVyY2VudGFnZUlubmVyQ3V0b3V0IDogMCwgLy8gVGhpcyBpcyAwIGZvciBQaWUgY2hhcnRzXHJcblxyXG4gICAgICAvL051bWJlciAtIEFtb3VudCBvZiBhbmltYXRpb24gc3RlcHNcclxuICAgICAgYW5pbWF0aW9uU3RlcHMgOiAxMDAsXHJcblxyXG4gICAgICAvL1N0cmluZyAtIEFuaW1hdGlvbiBlYXNpbmcgZWZmZWN0XHJcbiAgICAgIGFuaW1hdGlvbkVhc2luZyA6ICdlYXNlT3V0Qm91bmNlJyxcclxuXHJcbiAgICAgIC8vQm9vbGVhbiAtIFdoZXRoZXIgd2UgYW5pbWF0ZSB0aGUgcm90YXRpb24gb2YgdGhlIERvdWdobnV0XHJcbiAgICAgIGFuaW1hdGVSb3RhdGUgOiB0cnVlLFxyXG5cclxuICAgICAgLy9Cb29sZWFuIC0gV2hldGhlciB3ZSBhbmltYXRlIHNjYWxpbmcgdGhlIERvdWdobnV0IGZyb20gdGhlIGNlbnRyZVxyXG4gICAgICBhbmltYXRlU2NhbGUgOiBmYWxzZSxcclxuXHJcbiAgICAgIC8vU3RyaW5nIC0gQSBsZWdlbmQgdGVtcGxhdGVcclxuICAgICAgbGVnZW5kVGVtcGxhdGUgOiAnPGgzIGNsYXNzPVwidGMtY2hhcnQtanMtbGVnZW5kXCIgc3R5bGU9XCJwYWRkaW5nOjVweFwiPjwlIGZvciAodmFyIGk9MDsgaTxzZWdtZW50cy5sZW5ndGg7IGkrKyl7JT48ZGl2IGNsYXNzPVwibGFiZWxcIiBzdHlsZT1cImZsb2F0OmxlZnQ7bWFyZ2luOjVweDtiYWNrZ3JvdW5kLWNvbG9yOjwlPXNlZ21lbnRzW2ldLmZpbGxDb2xvciU+XCI+PCVpZihzZWdtZW50c1tpXS5sYWJlbCl7JT48JT1zZWdtZW50c1tpXS5sYWJlbCU+PCV9JT48L2Rpdj48JX0lPjwvaDM+J1xyXG4gICAgfTtcclxuICAgIGZvciAodmFyIGkgaW4gQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuY2hvaWNlc1tpXS52b3RlcyA9IDA7XHJcbiAgICAgIGZvciAodmFyIGogaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICAgIGlmIChDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0ubmFtZSA9PT0gJHNjb3BlLnByaW9yaXR5TGlzdFtqXS5jaG9pY2UpIHtcclxuICAgICAgICAgIENhdGVnb3JpZXNTdmMuY2hvaWNlc1tpXS52b3RlcysrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYS52b3RlcyA8IGIudm90ZXM7IH0pO1xyXG4gICAgZm9yIChpIGluIENhdGVnb3JpZXNTdmMuY2hvaWNlcykge1xyXG4gICAgICAkc2NvcGUuZGF0YS5wdXNoKHtcclxuICAgICAgICB2YWx1ZTogQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLnZvdGVzLFxyXG4gICAgICAgIGxhYmVsOiBDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0ubmFtZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICQoJyNwcmlvcml0aXplUmVzdWx0JykuaGlkZSgpO1xyXG4gICAgJCgnI3ByaW9yaXRpemVDaG9pY2VzJykuaGlkZSgpO1xyXG4gICAgJCgnI3ByaW9yaXR5UmVzdWx0cycpLnNob3coMTAwMCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1Byb2ZpbGVDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcblxyXG4gIGlmICghJHNjb3BlLmN1cnJlbnRVc2VyKSB7XHJcbiAgICAkbG9jYXRpb24ucGF0aCgnLycpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkKCcjc2V4LWluZGljYXRvcicpLm9mZnNldCh7IGxlZnQ6ICgkc2NvcGUuY3VycmVudFVzZXIuZ2VuZGVyLnNleCAvIDIwMCAqICQoJyNzZXgnKS53aWR0aCgpKSArICQoJyNzZXgnKS5vZmZzZXQoKS5sZWZ0IH0pO1xyXG4gICAgJCgnI2lkZW50aXR5LWluZGljYXRvcicpLm9mZnNldCh7IGxlZnQ6ICgkc2NvcGUuY3VycmVudFVzZXIuZ2VuZGVyLmlkZW50aXR5IC8gMjAwICogJCgnI2lkZW50aXR5Jykud2lkdGgoKSkgKyAkKCcjaWRlbnRpdHknKS5vZmZzZXQoKS5sZWZ0IH0pO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLnNleGVzID0gW1xyXG4gICAgJ01hbGUnLFxyXG4gICAgJ0Z0TSBNYWxlJyxcclxuICAgICdJbnRlcnNleCcsXHJcbiAgICAnTXRGIEZlbWFsZScsXHJcbiAgICAnRmVtYWxlJ1xyXG4gIF07XHJcbiAgJHNjb3BlLmlkZW50aXRpZXMgPSBbXHJcbiAgICAnTWFuJyxcclxuICAgICdCaWdlbmRlcicsXHJcbiAgICAnUGFuZ2VuZGVyJyxcclxuICAgICdBZ2VuZGVyJyxcclxuICAgICdQb2x5Z2VuZGVyJyxcclxuICAgICdHZW5kZXJmbHVpZCcsXHJcbiAgICAnR2VuZGVycXVlZXInLFxyXG4gICAgJ1F1ZWVyJyxcclxuICAgICdXb21hbidcclxuICBdO1xyXG5cclxuICAkc2NvcGUuZGF0ZU9wdGlvbnMgPSB7XHJcbiAgICBtYXhEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgbWluRGF0ZTogbmV3IERhdGUoMTkwMCwgMSwgMSksXHJcbiAgICBpbml0RGF0ZTogbmV3IERhdGUoMjAwMCwgMSwgMSksXHJcbiAgICBkYXRlcGlja2VyTW9kZTogJ3llYXInXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdlbmRlciA9IGZ1bmN0aW9uKGFycmF5LCBwZXJjZW50YWdlKSB7XHJcbiAgICByZXR1cm4gYXJyYXlbTWF0aC5yb3VuZChwZXJjZW50YWdlIC8gMjAwICogKGFycmF5Lmxlbmd0aCAtIDEpKV07XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnN0YXJ0U2xpZGVyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIH07XHJcbiAgJHNjb3BlLmRyYWdTbGlkZXIgPSBmdW5jdGlvbihldmVudCwgdWksIHR5cGUpIHtcclxuICAgICRzY29wZS5jdXJyZW50VXNlci5nZW5kZXJbdHlwZV0gPSBNYXRoLnJvdW5kKCgkKCcjJyArIHR5cGUgKyAnLWluZGljYXRvcicpLm9mZnNldCgpLmxlZnQgLSAkKCcjJyArIHR5cGUpLm9mZnNldCgpLmxlZnQpIC8gKCQoJyMnICsgdHlwZSkud2lkdGgoKSAtICQoJyMnICsgdHlwZSArICctaW5kaWNhdG9yJykud2lkdGgoKSkgKiAyMDApO1xyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gIH07XHJcbiAgJHNjb3BlLnN0b3BTbGlkZXIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVzZXJuYW1lVG9nZ2xlID0gdHJ1ZTtcclxuICAkc2NvcGUucGFzc3dvcmRUb2dnbGUgPSB0cnVlO1xyXG5cclxuICAkc2NvcGUudG9nZ2xlVXNlcm5hbWUgPSBmdW5jdGlvbigpIHtcclxuICAgICRzY29wZS51c2VybmFtZVRvZ2dsZSA9ICEkc2NvcGUudXNlcm5hbWVUb2dnbGU7XHJcbiAgICAkc2NvcGUubmV3VXNlcm5hbWUgPSAkc2NvcGUuY3VycmVudFVzZXIudXNlcm5hbWU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkc2NvcGUubmV3UGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLmNvbmZpcm1QYXNzd29yZCA9IG51bGw7XHJcbiAgICAkc2NvcGUucGFzc3dvcmRUb2dnbGUgPSAhJHNjb3BlLnBhc3N3b3JkVG9nZ2xlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGVja1Bhc3N3b3JkID0gZnVuY3Rpb24gKHBhc3N3b3JkKSB7XHJcbiAgICBpZiAocGFzc3dvcmQpIHtcclxuICAgICAgdmFyIHVzZXIgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICBVc2VyU3ZjLmNoZWNrUGFzc3dvcmQodXNlciwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAkKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjZDMVwiIH0sIDIwMCkuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogb3JpZ2luYWxCZyB9LCAyMDApO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAob2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgIGlmIChuZXdQYXNzd29yZCkge1xyXG4gICAgICBpZiAobmV3UGFzc3dvcmQgPT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgdmFyIHVzZXIgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICAgIFVzZXJTdmMuY2hhbmdlUGFzc3dvcmQodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgJHNjb3BlLiRlbWl0KCdwb3B1cCcsIHtcclxuICAgICAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkIENoYW5nZWQnLFxyXG4gICAgICAgICAgICB0eXBlOiAnYWxlcnQtc3VjY2VzcydcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgJHNjb3BlLm9sZFBhc3N3b3JkID0gbnVsbDtcclxuICAgICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICRzY29wZS4kZW1pdCgncG9wdXAnLCB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCBDaGFuZ2UgRmFpbGVkJyxcclxuICAgICAgICAgICAgdHlwZTogJ2FsZXJ0LWRhbmdlcidcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBvcmlnaW5hbEJnID0gJChcIi5wYXNzd29yZFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIik7XHJcbiAgICAgICAgJChcIi5wYXNzd29yZFwiKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNGRkI2QzFcIiB9LCAyMDApLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG9yaWdpbmFsQmcgfSwgMjAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VybmFtZSkge1xyXG4gICAgJHNjb3BlLiRlbWl0KCdsb2FkaW5nJyk7XHJcbiAgICBVc2VyU3ZjLmNoYW5nZVVzZXJuYW1lKCRzY29wZS5jdXJyZW50VXNlci5faWQsIHVzZXJuYW1lKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICRzY29wZS4kZW1pdCgndXBkYXRlJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAkc2NvcGUuJGVtaXQoJ3BvcHVwJywge1xyXG4gICAgICAgIG1lc3NhZ2U6IHVzZXJuYW1lICsgJyBhbHJlYWR5IGluIHVzZScsXHJcbiAgICAgICAgdHlwZTogJ2FsZXJ0LWRhbmdlcidcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUudXBkYXRlVXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIpIHsgIFxyXG4gICAgICAkc2NvcGUuJGVtaXQoJ2xvYWRpbmcnKTtcclxuICAgICAgVXNlclN2Yy51cGRhdGVVc2VyKCRzY29wZS5jdXJyZW50VXNlcilcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KCd1cGRhdGUnLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gICRzY29wZS4kd2F0Y2goJ2N1cnJlbnRVc2VyLmZsYWdzLmxlbmd0aCcsIGZ1bmN0aW9uKGxlbmd0aCkge1xyXG4gICAgJHNjb3BlLnVwZGF0ZVVzZXIoKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmxvYWRDb3VudHJpZXMgPSBmdW5jdGlvbigkcXVlcnkpIHtcclxuICAgIHZhciBjb3VudHJpZXMgPSBbXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQW5kb3JyYVwiLCBcImZsYWdcIjogXCJmbGFnLWFkXCIsIFwidGlkYml0XCI6IFwiXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVbml0ZWQgQXJhYiBFbWlyYXRlc1wiLCBcImZsYWdcIjogXCJmbGFnLWFlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBZmdoYW5pc3RhblwiLCBcImZsYWdcIjogXCJmbGFnLWFmXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsIFwiZmxhZ1wiOiBcImZsYWctYWdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFuZ3VpbGxhXCIsIFwiZmxhZ1wiOiBcImZsYWctYWlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFsYmFuaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hbFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQXJtZW5pYVwiLCBcImZsYWdcIjogXCJmbGFnLWFtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbmdvbGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQW50YXJjdGljYVwiLCBcImZsYWdcIjogXCJmbGFnLWFxXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBcmdlbnRpbmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQW1lcmljYW4gU29tb2FcIiwgXCJmbGFnXCI6IFwiZmxhZy1hc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQXVzdHJpYVwiLCBcImZsYWdcIjogXCJmbGFnLWF0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBdXN0cmFsaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hdVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQXJ1YmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hd1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiw4VsYW5kIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1heFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQXplcmJhaWphblwiLCBcImZsYWdcIjogXCJmbGFnLWF6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctYmFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJhcmJhZG9zXCIsIFwiZmxhZ1wiOiBcImZsYWctYmJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJhbmdsYWRlc2hcIiwgXCJmbGFnXCI6IFwiZmxhZy1iZFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmVsZ2l1bVwiLCBcImZsYWdcIjogXCJmbGFnLWJlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCdXJraW5hIEZhc29cIiwgXCJmbGFnXCI6IFwiZmxhZy1iZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQnVsZ2FyaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1iZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmFocmFpblwiLCBcImZsYWdcIjogXCJmbGFnLWJoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCdXJ1bmRpXCIsIFwiZmxhZ1wiOiBcImZsYWctYmlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJlbmluXCIsIFwiZmxhZ1wiOiBcImZsYWctYmpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhaW50IEJhcnRow6lsZW15XCIsIFwiZmxhZ1wiOiBcImZsYWctYmxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJlcm11ZGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1ibVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQnJ1bmVpIFwiLCBcImZsYWdcIjogXCJmbGFnLWJuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCb2xpdmlhLCBQbHVyaW5hdGlvbmFsIFN0YXRlIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctYm9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCIsIFwiZmxhZ1wiOiBcImZsYWctYnFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJyYXppbFwiLCBcImZsYWdcIjogXCJmbGFnLWJyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCYWhhbWFzXCIsIFwiZmxhZ1wiOiBcImZsYWctYnNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJodXRhblwiLCBcImZsYWdcIjogXCJmbGFnLWJ0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCb3V2ZXQgSXNsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctYnZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJvdHN3YW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctYndcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJlbGFydXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1ieVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmVsaXplXCIsIFwiZmxhZ1wiOiBcImZsYWctYnpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNhbmFkYVwiLCBcImZsYWdcIjogXCJmbGFnLWNhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDb2NvcyAoS2VlbGluZykgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLWNjXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDb25nbywgdGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlXCIsIFwiZmxhZ1wiOiBcImZsYWctY2RcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpY1wiLCBcImZsYWdcIjogXCJmbGFnLWNmXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDb25nb1wiLCBcImZsYWdcIjogXCJmbGFnLWNnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTd2l0emVybGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWNoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDw7R0ZSBkJ0l2b2lyZVwiLCBcImZsYWdcIjogXCJmbGFnLWNpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDb29rIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1ja1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2hpbGVcIiwgXCJmbGFnXCI6IFwiZmxhZy1jbFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2FtZXJvb25cIiwgXCJmbGFnXCI6IFwiZmxhZy1jbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2hpbmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1jblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29sb21iaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1jb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29zdGEgUmljYVwiLCBcImZsYWdcIjogXCJmbGFnLWNyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDdWJhXCIsIFwiZmxhZ1wiOiBcImZsYWctY3VcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNhYm8gVmVyZGVcIiwgXCJmbGFnXCI6IFwiZmxhZy1jdlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ3VyYcOnYW9cIiwgXCJmbGFnXCI6IFwiZmxhZy1jd1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2hyaXN0bWFzIElzbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWN4XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDeXBydXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1jeVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ3plY2ggUmVwdWJsaWNcIiwgXCJmbGFnXCI6IFwiZmxhZy1jelwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR2VybWFueVwiLCBcImZsYWdcIjogXCJmbGFnLWRlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJEamlib3V0aVwiLCBcImZsYWdcIjogXCJmbGFnLWRqXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJEZW5tYXJrXCIsIFwiZmxhZ1wiOiBcImZsYWctZGtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkRvbWluaWNhXCIsIFwiZmxhZ1wiOiBcImZsYWctZG1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkRvbWluaWNhbiBSZXB1YmxpY1wiLCBcImZsYWdcIjogXCJmbGFnLWRvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbGdlcmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctZHpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkVjdWFkb3JcIiwgXCJmbGFnXCI6IFwiZmxhZy1lY1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRXN0b25pYVwiLCBcImZsYWdcIjogXCJmbGFnLWVlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJFZ3lwdFwiLCBcImZsYWdcIjogXCJmbGFnLWVnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJXZXN0ZXJuIFNhaGFyYVwiLCBcImZsYWdcIjogXCJmbGFnLWVoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJFcml0cmVhXCIsIFwiZmxhZ1wiOiBcImZsYWctZXJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNwYWluXCIsIFwiZmxhZ1wiOiBcImZsYWctZXNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkV0aGlvcGlhXCIsIFwiZmxhZ1wiOiBcImZsYWctZXRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkZpbmxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1maVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRmlqaVwiLCBcImZsYWdcIjogXCJmbGFnLWZqXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcylcIiwgXCJmbGFnXCI6IFwiZmxhZy1ma1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLWZtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGYXJvZSBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctZm9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkZyYW5jZVwiLCBcImZsYWdcIjogXCJmbGFnLWZyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHYWJvblwiLCBcImZsYWdcIjogXCJmbGFnLWdhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2JcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdyZW5hZGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1nZFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR2VvcmdpYVwiLCBcImZsYWdcIjogXCJmbGFnLWdlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGcmVuY2ggR3VpYW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2ZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkd1ZXJuc2V5XCIsIFwiZmxhZ1wiOiBcImZsYWctZ2dcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdoYW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2hcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdpYnJhbHRhclwiLCBcImZsYWdcIjogXCJmbGFnLWdpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHcmVlbmxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1nbFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR2FtYmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctZ21cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkd1aW5lYVwiLCBcImZsYWdcIjogXCJmbGFnLWduXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHdWFkZWxvdXBlXCIsIFwiZmxhZ1wiOiBcImZsYWctZ3BcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkVxdWF0b3JpYWwgR3VpbmVhXCIsIFwiZmxhZ1wiOiBcImZsYWctZ3FcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdyZWVjZVwiLCBcImZsYWdcIjogXCJmbGFnLWdyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLWdzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHdWF0ZW1hbGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1ndFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3VhbVwiLCBcImZsYWdcIjogXCJmbGFnLWd1XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHdWluZWEtQmlzc2F1XCIsIFwiZmxhZ1wiOiBcImZsYWctZ3dcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkd1eWFuYVwiLCBcImZsYWdcIjogXCJmbGFnLWd5XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJIb25nIEtvbmdcIiwgXCJmbGFnXCI6IFwiZmxhZy1oa1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctaG1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkhvbmR1cmFzXCIsIFwiZmxhZ1wiOiBcImZsYWctaG5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNyb2F0aWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1oclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSGFpdGlcIiwgXCJmbGFnXCI6IFwiZmxhZy1odFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSHVuZ2FyeVwiLCBcImZsYWdcIjogXCJmbGFnLWh1XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJbmRvbmVzaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1pZFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSXJlbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWllXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJc3JhZWxcIiwgXCJmbGFnXCI6IFwiZmxhZy1pbFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSXNsZSBvZiBNYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1pbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSW5kaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1pblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCIsIFwiZmxhZ1wiOiBcImZsYWctaW9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIklyYXFcIiwgXCJmbGFnXCI6IFwiZmxhZy1pcVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSXJhbiwgSXNsYW1pYyBSZXB1YmxpYyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLWlyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJY2VsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctaXNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkl0YWx5XCIsIFwiZmxhZ1wiOiBcImZsYWctaXRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkplcnNleVwiLCBcImZsYWdcIjogXCJmbGFnLWplXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJKYW1haWNhXCIsIFwiZmxhZ1wiOiBcImZsYWctam1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkpvcmRhblwiLCBcImZsYWdcIjogXCJmbGFnLWpvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJKYXBhblwiLCBcImZsYWdcIjogXCJmbGFnLWpwXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJLZW55YVwiLCBcImZsYWdcIjogXCJmbGFnLWtlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJLeXJneXpzdGFuXCIsIFwiZmxhZ1wiOiBcImZsYWcta2dcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNhbWJvZGlhXCIsIFwiZmxhZ1wiOiBcImZsYWcta2hcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIktpcmliYXRpXCIsIFwiZmxhZ1wiOiBcImZsYWcta2lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNvbW9yb3NcIiwgXCJmbGFnXCI6IFwiZmxhZy1rbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsIFwiZmxhZ1wiOiBcImZsYWcta25cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIktvcmVhLCBEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWcta3BcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIktvcmVhLCBSZXB1YmxpYyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLWtyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJLdXdhaXRcIiwgXCJmbGFnXCI6IFwiZmxhZy1rd1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2F5bWFuIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1reVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiS2F6YWtoc3RhblwiLCBcImZsYWdcIjogXCJmbGFnLWt6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wiLCBcImZsYWdcIjogXCJmbGFnLWxhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMZWJhbm9uXCIsIFwiZmxhZ1wiOiBcImZsYWctbGJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhaW50IEx1Y2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctbGNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxpZWNodGVuc3RlaW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1saVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3JpIExhbmthXCIsIFwiZmxhZ1wiOiBcImZsYWctbGtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxpYmVyaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1sclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGVzb3Rob1wiLCBcImZsYWdcIjogXCJmbGFnLWxzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMaXRodWFuaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1sdFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTHV4ZW1ib3VyZ1wiLCBcImZsYWdcIjogXCJmbGFnLWx1XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMYXR2aWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1sdlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGlieWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1seVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTW9yb2Njb1wiLCBcImZsYWdcIjogXCJmbGFnLW1hXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNb25hY29cIiwgXCJmbGFnXCI6IFwiZmxhZy1tY1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTW9sZG92YSwgUmVwdWJsaWMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1tZFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTW9udGVuZWdyb1wiLCBcImZsYWdcIjogXCJmbGFnLW1lXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KVwiLCBcImZsYWdcIjogXCJmbGFnLW1mXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWRhZ2FzY2FyXCIsIFwiZmxhZ1wiOiBcImZsYWctbWdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hcnNoYWxsIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1taFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFjZWRvbmlhLCB0aGUgZm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctbWtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hbGlcIiwgXCJmbGFnXCI6IFwiZmxhZy1tbFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTXlhbm1hclwiLCBcImZsYWdcIjogXCJmbGFnLW1tXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNb25nb2xpYVwiLCBcImZsYWdcIjogXCJmbGFnLW1uXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWNhb1wiLCBcImZsYWdcIjogXCJmbGFnLW1vXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1tcFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFydGluaXF1ZVwiLCBcImZsYWdcIjogXCJmbGFnLW1xXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYXVyaXRhbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbXJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vbnRzZXJyYXRcIiwgXCJmbGFnXCI6IFwiZmxhZy1tc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFsdGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1tdFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWF1cml0aXVzXCIsIFwiZmxhZ1wiOiBcImZsYWctbXVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hbGRpdmVzXCIsIFwiZmxhZ1wiOiBcImZsYWctbXZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hbGF3aVwiLCBcImZsYWdcIjogXCJmbGFnLW13XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNZXhpY29cIiwgXCJmbGFnXCI6IFwiZmxhZy1teFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFsYXlzaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1teVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTW96YW1iaXF1ZVwiLCBcImZsYWdcIjogXCJmbGFnLW16XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOYW1pYmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbmFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5ldyBDYWxlZG9uaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1uY1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmlnZXJcIiwgXCJmbGFnXCI6IFwiZmxhZy1uZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTm9yZm9sayBJc2xhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1uZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmlnZXJpYVwiLCBcImZsYWdcIjogXCJmbGFnLW5nXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOaWNhcmFndWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1uaVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmV0aGVybGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1ubFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTm9yd2F5XCIsIFwiZmxhZ1wiOiBcImZsYWctbm9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5lcGFsXCIsIFwiZmxhZ1wiOiBcImZsYWctbnBcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5hdXJ1XCIsIFwiZmxhZ1wiOiBcImZsYWctbnJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5pdWVcIiwgXCJmbGFnXCI6IFwiZmxhZy1udVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmV3IFplYWxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1uelwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiT21hblwiLCBcImZsYWdcIjogXCJmbGFnLW9tXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQYW5hbWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1wYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGVydVwiLCBcImZsYWdcIjogXCJmbGFnLXBlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGcmVuY2ggUG9seW5lc2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctcGZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBhcHVhIE5ldyBHdWluZWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1wZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGhpbGlwcGluZXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1waFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGFraXN0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1wa1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUG9sYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctcGxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIiwgXCJmbGFnXCI6IFwiZmxhZy1wbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGl0Y2Fpcm5cIiwgXCJmbGFnXCI6IFwiZmxhZy1wblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUHVlcnRvIFJpY29cIiwgXCJmbGFnXCI6IFwiZmxhZy1wclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwiLCBcImZsYWdcIjogXCJmbGFnLXBzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQb3J0dWdhbFwiLCBcImZsYWdcIjogXCJmbGFnLXB0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQYWxhdVwiLCBcImZsYWdcIjogXCJmbGFnLXB3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQYXJhZ3VheVwiLCBcImZsYWdcIjogXCJmbGFnLXB5XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJRYXRhclwiLCBcImZsYWdcIjogXCJmbGFnLXFhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJSw6l1bmlvblwiLCBcImZsYWdcIjogXCJmbGFnLXJlXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJSb21hbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctcm9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNlcmJpYVwiLCBcImZsYWdcIjogXCJmbGFnLXJzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJSdXNzaWFuIEZlZGVyYXRpb25cIiwgXCJmbGFnXCI6IFwiZmxhZy1ydVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUndhbmRhXCIsIFwiZmxhZ1wiOiBcImZsYWctcndcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhdWRpIEFyYWJpYVwiLCBcImZsYWdcIjogXCJmbGFnLXNhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTb2xvbW9uIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1zYlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2V5Y2hlbGxlc1wiLCBcImZsYWdcIjogXCJmbGFnLXNjXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTdWRhblwiLCBcImZsYWdcIjogXCJmbGFnLXNkXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTd2VkZW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1zZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2luZ2Fwb3JlXCIsIFwiZmxhZ1wiOiBcImZsYWctc2dcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhXCIsIFwiZmxhZ1wiOiBcImZsYWctc2hcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNsb3ZlbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctc2lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1zalwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2xvdmFraWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1za1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2llcnJhIExlb25lXCIsIFwiZmxhZ1wiOiBcImZsYWctc2xcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhbiBNYXJpbm9cIiwgXCJmbGFnXCI6IFwiZmxhZy1zbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2VuZWdhbFwiLCBcImZsYWdcIjogXCJmbGFnLXNuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTb21hbGlhXCIsIFwiZmxhZ1wiOiBcImZsYWctc29cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlN1cmluYW1lXCIsIFwiZmxhZ1wiOiBcImZsYWctc3JcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNvdXRoIFN1ZGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctc3NcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLCBcImZsYWdcIjogXCJmbGFnLXN0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJFbCBTYWx2YWRvclwiLCBcImZsYWdcIjogXCJmbGFnLXN2XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTaW50IE1hYXJ0ZW4gKER1dGNoIHBhcnQpXCIsIFwiZmxhZ1wiOiBcImZsYWctc3hcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlN5cmlhbiBBcmFiIFJlcHVibGljXCIsIFwiZmxhZ1wiOiBcImZsYWctc3lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlN3YXppbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLXN6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy10Y1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ2hhZFwiLCBcImZsYWdcIjogXCJmbGFnLXRkXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXNcIiwgXCJmbGFnXCI6IFwiZmxhZy10ZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVG9nb1wiLCBcImZsYWdcIjogXCJmbGFnLXRnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUaGFpbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLXRoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUYWppa2lzdGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctdGpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRva2VsYXVcIiwgXCJmbGFnXCI6IFwiZmxhZy10a1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVGltb3ItTGVzdGVcIiwgXCJmbGFnXCI6IFwiZmxhZy10bFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVHVya21lbmlzdGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctdG1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlR1bmlzaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy10blwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVG9uZ2FcIiwgXCJmbGFnXCI6IFwiZmxhZy10b1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVHVya2V5XCIsIFwiZmxhZ1wiOiBcImZsYWctdHJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIiwgXCJmbGFnXCI6IFwiZmxhZy10dFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVHV2YWx1XCIsIFwiZmxhZ1wiOiBcImZsYWctdHZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmFcIiwgXCJmbGFnXCI6IFwiZmxhZy10d1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLXR6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVa3JhaW5lXCIsIFwiZmxhZ1wiOiBcImZsYWctdWFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlVnYW5kYVwiLCBcImZsYWdcIjogXCJmbGFnLXVnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy11bVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIsIFwiZmxhZ1wiOiBcImZsYWctdXNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlVydWd1YXlcIiwgXCJmbGFnXCI6IFwiZmxhZy11eVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVXpiZWtpc3RhblwiLCBcImZsYWdcIjogXCJmbGFnLXV6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJIb2x5IFNlZVwiLCBcImZsYWdcIjogXCJmbGFnLXZhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLCBcImZsYWdcIjogXCJmbGFnLXZjXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJWZW5lenVlbGEsIEJvbGl2YXJpYW4gUmVwdWJsaWMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy12ZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVmlyZ2luIElzbGFuZHMsIEJyaXRpc2hcIiwgXCJmbGFnXCI6IFwiZmxhZy12Z1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVmlyZ2luIElzbGFuZHMsIFUuUy5cIiwgXCJmbGFnXCI6IFwiZmxhZy12aVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVmlldCBOYW1cIiwgXCJmbGFnXCI6IFwiZmxhZy12blwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVmFudWF0dVwiLCBcImZsYWdcIjogXCJmbGFnLXZ1XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJXYWxsaXMgYW5kIEZ1dHVuYVwiLCBcImZsYWdcIjogXCJmbGFnLXdmXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYW1vYVwiLCBcImZsYWdcIjogXCJmbGFnLXdzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJZZW1lblwiLCBcImZsYWdcIjogXCJmbGFnLXllXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYXlvdHRlXCIsIFwiZmxhZ1wiOiBcImZsYWcteXRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNvdXRoIEFmcmljYVwiLCBcImZsYWdcIjogXCJmbGFnLXphXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJaYW1iaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy16bVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiWmltYmFid2VcIiwgXCJmbGFnXCI6IFwiZmxhZy16d1wiIH0sXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIGNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24oY291bnRyeSkge1xyXG4gICAgICByZXR1cm4gY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigkcXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTE7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1NraWxsc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZFNraWxsID0gMDtcclxuICAkc2NvcGUuc2tpbGxzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICRzY29wZS5wcm9qZWN0cyA9IFtdO1xyXG5cclxuICAkc2NvcGUubGFiZWxzID0gW1wiRG93bmxvYWQgU2FsZXNcIiwgXCJJbi1TdG9yZSBTYWxlc1wiLCBcIk1haWwtT3JkZXIgU2FsZXNcIl07XHJcbiAgJHNjb3BlLmRhdGEgPSBbMzAwLCA1MDAsIDEwMF07XHJcblxyXG4gICQuZ2V0SlNPTignL2V4cGVyaWVuY2UuanNvbicsIGZ1bmN0aW9uKCBkYXRhICkge1xyXG4gICAgJHNjb3BlLnByb2plY3RzID0gZGF0YS5yZWR1Y2UoKHByb2plY3RzLCBlbXBsb3llcikgPT4ge1xyXG4gICAgICBpZiAoZW1wbG95ZXIucHJvamVjdHMpIHJldHVybiBlbXBsb3llci5wcm9qZWN0cy5jb25jYXQocHJvamVjdHMpO1xyXG4gICAgICBlbHNlIHJldHVybiBwcm9qZWN0cztcclxuICAgIH0sIHt9KTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmZpbHRlcmVkUHJvamVjdHMgPSAoKSA9PiAkc2NvcGUucHJvamVjdHNcclxuICAgIC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3Quc2tpbGxzICYmIHByb2plY3Quc2tpbGxzLmluY2x1ZGVzKCRzY29wZS5zZWxlY3RlZFNraWxsLmNvZGUpKVxyXG5cclxuICAkLmdldEpTT04oJy9za2lsbHMuanNvbicsIGZ1bmN0aW9uKCBkYXRhICkge1xyXG5cclxuICAgIGNvbnN0IHNraWxscyA9IGRhdGFcclxuICAgIC5maWx0ZXIoKHNraWxsKSA9PiBza2lsbC5lbmFibGVkKVxyXG5cclxuICAgICRzY29wZS5jYXRlZ29yaWVzID0gc2tpbGxzXHJcbiAgICAucmVkdWNlKGZ1bmN0aW9uKGNhdGVnb3JpZXMsIHNraWxsKSB7XHJcbiAgICAgIGlmICghY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0pIHtcclxuICAgICAgICBjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XSA9IFtza2lsbF1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XS5wdXNoKHNraWxsKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzO1xyXG4gICAgfSwge30pO1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZFNraWxsID0gZnVuY3Rpb24gKHNraWxsKSB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsID0gc2tpbGw7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsLmNoYXJ0T3B0aW9ucyA9IHtcclxuICAgICAgICBjdXRvdXRQZXJjZW50YWdlIDogODAsXHJcbiAgICAgICAgY2lyY3VtZmVyZW5jZTogMiAqIE1hdGguUEksXHJcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsLmNoYXJ0U3R5bGUgPSB7XHJcbiAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKC9za2lsbHMvJyArICRzY29wZS5zZWxlY3RlZFNraWxsLmltYWdlICsgJyknLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnNjAlJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICc1MCUgNTAlJ1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCgkc2NvcGUuc2tpbGxzWzBdKTtcclxuXHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBUZW5UaGluZ3NTdmMpIHtcclxuICAgICRzY29wZS5zZWFyY2ggPSB7XHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIHZhbHVlczogXCJcIixcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICRzY29wZS5hZGRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuYWRkVmFsdWUoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoJChcIiNuZXctdmFsdWVcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgJChcIiNuZXctYmx1cmJcIikuZm9jdXMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIH1cclxuICAgICAgLy8gdXNlIGUua2V5Q29kZVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoTmFtZSA9IFwiXCI7XHJcbiAgICAkc2NvcGUubmV3SXRlbSA9IHt9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeUZpbHRlciA9IChjYXRlZ29yeSkgPT4gKCRzY29wZS5jYXRlZ29yeUZpbHRlciA9IGNhdGVnb3J5KTtcclxuICAgICRzY29wZS5zZXRVc2VyRmlsdGVyID0gKHVzZXIpID0+ICgkc2NvcGUudXNlckZpbHRlciA9IHVzZXIpO1xyXG4gICAgJHNjb3BlLnNldFVwZGF0ZUZpbHRlciA9ICh0eXBlKSA9PiAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9IHR5cGUpO1xyXG4gICAgJHNjb3BlLnNldExhbmd1YWdlRmlsdGVyID0gKGxhbmd1YWdlKSA9PiAoJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0gbGFuZ3VhZ2UpO1xyXG5cclxuICAgICRzY29wZS5maWx0ZXJlZExpc3RzID0gKCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5saXN0cykgcmV0dXJuIFtdO1xyXG4gICAgICByZXR1cm4gJHNjb3BlLmxpc3RzXHJcbiAgICAgICAgLmZpbHRlcigoeyBpc0R5bmFtaWMgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCRzY29wZS51cGRhdGVGaWx0ZXIgIT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcInN0YXRpY1wiICYmIGlzRHluYW1pYyA9PT0gdHJ1ZSkgfHxcclxuICAgICAgICAgICAgICAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJkeW5hbWljXCIgJiYgaXNEeW5hbWljID09PSBmYWxzZSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbHRlcigoeyBjYXRlZ29yaWVzIH0pID0+IHtcclxuICAgICAgICAgIGlmICgkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPT09IFwiQWxsXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3JpZXMuaW5kZXhPZigkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpID49IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICRzY29wZS5jYXRlZ29yeUZpbHRlciA9PT0gXCJCbGFua1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZmlsdGVyKCh7IGNyZWF0b3IgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCRzY29wZS51c2VyRmlsdGVyID09PSBcIkFsbFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0b3IgPT09ICRzY29wZS51c2VyRmlsdGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbHRlcigoeyBsYW5ndWFnZSB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoJHNjb3BlLmxhbmd1YWdlRmlsdGVyLmNvZGUgPT09IFwiYWxsXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbGFuZ3VhZ2UgPT09ICRzY29wZS5sYW5ndWFnZUZpbHRlci5jb2RlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8pID0+IHtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVycyA9ICRzY29wZS5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IGNhdGVnb3J5KTtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJzLnB1c2goXCJBbGxcIik7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVycy5wdXNoKFwiQmxhbmtcIik7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0gXCJBbGxcIjtcclxuICAgICAgICAkc2NvcGUudXBkYXRlRmlsdGVyID0gXCJhbGxcIjtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcnMgPSAkc2NvcGUubGFuZ3VhZ2VzLm1hcCgobGFuZ3VhZ2UpID0+IGxhbmd1YWdlKTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJzLnB1c2goeyBuYW1lOiBcIkFsbFwiLCBjb2RlOiBcImFsbFwiIH0pO1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHsgbmFtZTogXCJBbGxcIiwgY29kZTogXCJhbGxcIiB9O1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0KSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdExpc3QoeyBfaWQ6ICRsb2NhdGlvbi5zZWFyY2goKS5saXN0IH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUubGlzdE9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJkYXRlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgbGFiZWw6IFwiQ3JlYXRpb24gRGF0ZVwiLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudmFsdWVPcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwidmFsdWVcIixcclxuICAgICAgZGlyZWN0aW9uOiBmYWxzZSxcclxuICAgICAgbGFiZWw6IFwiVmFsdWVcIixcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNvcnQgPSAoc29ydGVyLCBzb3J0RmllbGQsIHNvcnRMYWJlbCkgPT4ge1xyXG4gICAgICAkc2NvcGVbc29ydGVyXS5sYWJlbCA9IHNvcnRMYWJlbDtcclxuICAgICAgaWYgKCRzY29wZVtzb3J0ZXJdLmZpZWxkID09PSBzb3J0RmllbGQpIHtcclxuICAgICAgICAkc2NvcGVbc29ydGVyXS5kaXJlY3Rpb24gPSAhJHNjb3BlW3NvcnRlcl0uZGlyZWN0aW9uO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZVtzb3J0ZXJdLmZpZWxkID0gc29ydEZpZWxkO1xyXG4gICAgICAgICRzY29wZVtzb3J0ZXJdLmRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExhbmd1YWdlQ291bnQgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubGlzdHMpIHJldHVybiAwO1xyXG4gICAgICBjb25zdCBjb3VudCA9ICRzY29wZS5saXN0cy5maWx0ZXIoXHJcbiAgICAgICAgKGxpc3QpID0+XHJcbiAgICAgICAgICAoJHNjb3BlLmNhdGVnb3J5RmlsdGVyID09PSBcIkFsbFwiIHx8IGxpc3QuY2F0ZWdvcmllcy5pbmNsdWRlcygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpKSAmJlxyXG4gICAgICAgICAgKGxhbmd1YWdlLmNvZGUgPT09IFwiYWxsXCIgfHwgbGlzdC5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2UuY29kZSkgJiZcclxuICAgICAgICAgICgkc2NvcGUudXNlckZpbHRlciA9PT0gXCJBbGxcIiB8fCBsaXN0LmNyZWF0b3IgPT09ICRzY29wZS51c2VyRmlsdGVyKSAmJlxyXG4gICAgICAgICAgKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiYWxsXCIgfHwgbGlzdC5pc0R5bmFtaWMgPT09ICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImR5bmFtaWNcIikpLFxyXG4gICAgICApLmxlbmd0aDtcclxuICAgICAgcmV0dXJuIGAke2NvdW50fSAtICR7TWF0aC5yb3VuZCgoY291bnQgLyAkc2NvcGUubGlzdHMubGVuZ3RoKSAqIDEwMCl9JWA7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRDYXRlZ29yeUNvdW50ID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxpc3RzKSByZXR1cm4gMDtcclxuICAgICAgY29uc3QgY291bnQgPSAkc2NvcGUubGlzdHMuZmlsdGVyKFxyXG4gICAgICAgIChsaXN0KSA9PlxyXG4gICAgICAgICAgKGNhdGVnb3J5ID09PSBcIkFsbFwiIHx8IGxpc3QuY2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KSA+PSAwKSAmJlxyXG4gICAgICAgICAgKCRzY29wZS5sYW5ndWFnZUZpbHRlci5jb2RlID09PSBcImFsbFwiIHx8IGxpc3QubGFuZ3VhZ2UgPT09ICRzY29wZS5sYW5ndWFnZUZpbHRlci5jb2RlKSAmJlxyXG4gICAgICAgICAgKCRzY29wZS51c2VyRmlsdGVyID09PSBcIkFsbFwiIHx8IGxpc3QuY3JlYXRvciA9PT0gJHNjb3BlLnVzZXJGaWx0ZXIpICYmXHJcbiAgICAgICAgICAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJhbGxcIiB8fCBsaXN0LmlzRHluYW1pYyA9PT0gKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiZHluYW1pY1wiKSksXHJcbiAgICAgICkubGVuZ3RoO1xyXG4gICAgICByZXR1cm4gYCR7Y291bnR9IC0gJHtNYXRoLnJvdW5kKChjb3VudCAvICRzY29wZS5saXN0cy5sZW5ndGgpICogMTAwKX0lYDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldFVwZGF0ZUNvdW50ID0gKHR5cGUpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubGlzdHMpIHJldHVybiAwO1xyXG4gICAgICBjb25zdCBjb3VudCA9ICRzY29wZS5saXN0cy5maWx0ZXIoXHJcbiAgICAgICAgKGxpc3QpID0+IHR5cGUgPT09IFwiYWxsXCIgfHwgKGxpc3QuaXNEeW5hbWljICYmIHR5cGUgPT09IFwiZHluYW1pY1wiKSB8fCAoIWxpc3QuaXNEeW5hbWljICYmIHR5cGUgPT09IFwic3RhdGljXCIpLFxyXG4gICAgICApLmxlbmd0aDtcclxuICAgICAgcmV0dXJuIGAke2NvdW50fSAtICR7TWF0aC5yb3VuZCgoY291bnQgLyAkc2NvcGUubGlzdHMubGVuZ3RoKSAqIDEwMCl9JWA7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubG9hZGluZykge1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLmxpc3RzID0gZGF0YS5yZXN1bHQ7XHJcbiAgICAgICAgICAkc2NvcGUudXNlckZpbHRlcnMgPSB7fTtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVycy5BbGwgPSAkc2NvcGUubGlzdHMubGVuZ3RoO1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXJzID0gJHNjb3BlLmxpc3RzXHJcbiAgICAgICAgICAgIC5zb3J0KChsaXN0MSwgbGlzdDIpID0+IGxpc3QxLmNyZWF0b3IgPiBsaXN0Mi5jcmVhdG9yKVxyXG4gICAgICAgICAgICAucmVkdWNlKCh1c2VycywgeyBjcmVhdG9yIH0pID0+IHtcclxuICAgICAgICAgICAgICBpZiAoIXVzZXJzW2NyZWF0b3JdKSB1c2Vyc1tjcmVhdG9yXSA9IDA7XHJcbiAgICAgICAgICAgICAgdXNlcnNbY3JlYXRvcl0rKztcclxuICAgICAgICAgICAgICByZXR1cm4gdXNlcnM7XHJcbiAgICAgICAgICAgIH0sICRzY29wZS51c2VyRmlsdGVycyk7XHJcbiAgICAgICAgICAkc2NvcGUudXNlckNvdW50ID0gT2JqZWN0LmtleXMoJHNjb3BlLnVzZXJGaWx0ZXJzKS5sZW5ndGg7XHJcbiAgICAgICAgICAkc2NvcGUudXNlckZpbHRlcnMgPSBzb3J0T2JqZWN0KCRzY29wZS51c2VyRmlsdGVycywgZmFsc2UpO1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXIgPSBcIkFsbFwiO1xyXG4gICAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VsZWN0TGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0KGxpc3QpXHJcbiAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIGRhdGEuX2lkKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgICAkKFwiI2NhdGVnb3J5LXNlbGVjdFwiKS5oaWRlKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRDYXRlZ29yeUNsYXNzID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIHJldHVybiAkc2NvcGUuc2VsZWN0ZWRMaXN0ICYmICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KSA+PSAwXHJcbiAgICAgICAgPyBcImJ0bi1zdWNjZXNzXCJcclxuICAgICAgICA6IFwiYnRuLWRlZmF1bHRcIjtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUNhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3J5SW5kZXggPSAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSk7XHJcbiAgICAgIGlmIChjYXRlZ29yeUluZGV4ID49IDApIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuc3BsaWNlKGNhdGVnb3J5SW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VsZWN0TGFuZ3VhZ2UgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5sYW5ndWFnZSA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgIGNvbnN0IG5vbkVuZ2xpc2hJbmRleCA9ICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5pbmRleE9mKFwiTm9uLUVuZ2xpc2hcIik7XHJcbiAgICAgIGlmIChsYW5ndWFnZS5jb2RlICE9PSBcIkVOXCIgJiYgbm9uRW5nbGlzaEluZGV4IDwgMCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5wdXNoKFwiTm9uLUVuZ2xpc2hcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAobGFuZ3VhZ2UuY29kZSA9PT0gXCJFTlwiICYmIG5vbkVuZ2xpc2hJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLnNwbGljZShub25FbmdsaXNoSW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hZGRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50TGFuZ3VhZ2UgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0ID8gJHNjb3BlLnNlbGVjdGVkTGlzdC5sYW5ndWFnZSA6IFwiRU5cIjtcclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgXCJcIik7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBjcmVhdG9yOiAkc2NvcGUuY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgdmFsdWVzOiBbXSxcclxuICAgICAgICBhbnN3ZXJzOiAwLFxyXG4gICAgICAgIGlzRHluYW1pYzogdHJ1ZSxcclxuICAgICAgICBjYXRlZ29yeTogXCJcIixcclxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgICBsYW5ndWFnZTogY3VycmVudExhbmd1YWdlLFxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaGFzRHVwbGljYXRlID0gKCkgPT5cclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCAmJlxyXG4gICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSAmJlxyXG4gICAgICBfLnNvbWUoXHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMsXHJcbiAgICAgICAgKGFuc3dlcikgPT4gYW5zd2VyLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSA9PSAkc2NvcGUubmV3SXRlbS52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCksXHJcbiAgICAgICk7XHJcblxyXG4gICAgJHNjb3BlLmFkZFZhbHVlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm5ld0l0ZW0udmFsdWUpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBfLnNvbWUoXHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgICAgICAoYW5zd2VyKSA9PiBhbnN3ZXIudmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpID09ICRzY29wZS5uZXdJdGVtLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSxcclxuICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGFsZXJ0KGAkeyRzY29wZS5uZXdJdGVtLnZhbHVlfSBpcyBhbHJlYWR5IGluIHRoZSBsaXN0YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRzY29wZS5uZXdJdGVtLmNyZWF0b3IgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMudW5zaGlmdChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KCRzY29wZS5uZXdJdGVtKSkpO1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5hbnN3ZXJzKys7XHJcbiAgICAgICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAkc2NvcGUubmV3SXRlbS5ibHVyYiA9IFwiXCI7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCAmJlxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0Lm5hbWUgJiZcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDBcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2ZUxpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICQoXCIjbmV3LXZhbHVlXCIpLmZvY3VzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5yZXBvcnRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgbGlzdC5yZXBvcnRlZCA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5yZXBvcnRMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgbGlzdCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zYXZlTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLnNhdmluZykge1xyXG4gICAgICAgIGxpc3QudmFsdWVzID0gbGlzdC52YWx1ZXMuZmlsdGVyKCh7IHZhbHVlIH0pID0+IHZhbHVlKTtcclxuICAgICAgICBpZiAobGlzdC52YWx1ZXMubGVuZ3RoID49IDEwICYmIGxpc3QubmFtZSAmJiBsaXN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgJHNjb3BlLnNhdmluZyA9IHRydWU7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuc2F2ZUxpc3QoJHNjb3BlLmN1cnJlbnRVc2VyLCBsaXN0KS50aGVuKFxyXG4gICAgICAgICAgICAoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICBpZiAoISRzY29wZS5zZWxlY3RlZExpc3QuX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUubGlzdHMudW5zaGlmdChkYXRhKTtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RMaXN0KGRhdGEpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICRzY29wZS5saXN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmxpc3RzW2ldLl9pZCA9PT0gZGF0YS5faWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUubGlzdHNbaV0gPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0TGlzdChsaXN0KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsaXN0LnZhbHVlcy5sZW5ndGggPCAxMCkge1xyXG4gICAgICAgICAgYWxlcnQoXCJMaXN0cyBtdXN0IGNvbnRhaW4gMTAgb3IgbW9yZSB2YWx1ZXMhXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIWxpc3QubmFtZSkge1xyXG4gICAgICAgICAgZmxhc2goXCIjbGlzdC1uYW1lXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmbGFzaChcIi5saXN0LWNhdGVnb3J5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBmbGFzaChlbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGNvbG9yID0gJChlbGVtZW50KS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIpO1xyXG4gICAgICAkKGVsZW1lbnQpLmFuaW1hdGUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNGQTgwNzJcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMCxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAkKGVsZW1lbnQpLmFuaW1hdGUoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAxMDAsXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZUxpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBpZiAoIWxpc3QuX2lkKSB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gJHNjb3BlLmxpc3RzLmZpbHRlcigoeyBfaWQgfSkgPT4gX2lkKTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBsaXN0P1wiKSkge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3QobGlzdCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBudWxsO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5saXN0QnV0dG9uQ2xhc3MgPSAobGlzdCkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZXMgPSBsaXN0LnZhbHVlcy5sZW5ndGg7XHJcbiAgICAgIGNvbnN0IGJsdXJicyA9IGxpc3QuYmx1cmJzO1xyXG4gICAgICBpZiAodmFsdWVzID09PSBibHVyYnMgJiYgbGlzdC5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHJldHVybiBcImJ0bi1kZWZhdWx0XCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoYmx1cmJzID09PSAwICYmICFsaXN0LmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiYnRuLXdhcm5pbmdcIjtcclxuICAgICAgfSBlbHNlIGlmIChibHVyYnMgPT09IDAgJiYgbGlzdC5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHJldHVybiBcImJ0bi1pbmZvXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiYnRuLXByaW1hcnlcIjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Qmx1cmJzID0gKHR5cGUpID0+IHtcclxuICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Qmx1cmJzKCRzY29wZS5zZWxlY3RlZExpc3QsIHR5cGUpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdExpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCk7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4iLCIvKmpzbGludCBlc3ZlcnNpb246IDYqL1xyXG5hbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzQWRtaW5DdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIFRlblRoaW5nc1N2YywgVXNlclN2Yykge1xyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4pIHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInVzZXJuYW1lXCIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5yZXZlcnNlID0gISRzY29wZS5vcmRlci5yZXZlcnNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldFF1ZXVlID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRRdWV1ZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnF1ZXVlID0gcmVzcG9uc2UuZGF0YS5yZXBsYWNlKFwiL25cIiwgXCI8YnIvPlwiKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICAkc2NvcGUuZ2V0UXVldWUoKTtcclxuXHJcbiAgICBUZW5UaGluZ3NTdmMuZ2V0UGF1c2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAkc2NvcGUucGF1c2VkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coJHNjb3BlLnBhdXNlZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBnZXRVc2VycyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLmdldFVzZXJzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUudXNlcnMgPSByZXNwb25zZS5kYXRhLmZpbHRlcigodXNlcikgPT4gIXVzZXIuYWRtaW4pO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQmFuID0gKHVzZXIpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLnRvZ2dsZUJhbih1c2VyLl9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZVBhdXNlID0gKHVzZXIpID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLnRvZ2dsZVBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucGF1c2VkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUucGF1c2VkKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzQ3VyYXRlQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFRlblRoaW5nc1N2Yykge1xyXG4gICAgbGV0IHBhZ2UgPSAxO1xyXG4gICAgJHNjb3BlLmxpc3RzID0gW107XHJcbiAgICAkc2NvcGUuc2VhcmNoID0gXCJcIjtcclxuICAgICRzY29wZS5uZXdJdGVtID0ge307XHJcbiAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSB7fTtcclxuICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9IHt9O1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHVuZGVmaW5lZDtcclxuICAgIGxldCBleGhhdXN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAkc2NvcGUua2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgIGUgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICBpZiAoJChcIiNuZXctYmx1cmJcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLmFkZFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5hZGRWYWx1ZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICgkKFwiI25ldy12YWx1ZVwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkKFwiI25ldy1ibHVyYlwiKS5mb2N1cygpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgfVxyXG4gICAgICAvLyB1c2UgZS5rZXlDb2RlXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hZGRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50TGFuZ3VhZ2UgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0ID8gJHNjb3BlLnNlbGVjdGVkTGlzdC5sYW5ndWFnZSA6IFwiRU5cIjtcclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgXCJuZXdcIik7XHJcbiAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3Qoe1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgY3JlYXRvcjogJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHZhbHVlczogW10sXHJcbiAgICAgICAgYW5zd2VyczogMCxcclxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGN1cnJlbnRMYW5ndWFnZSxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBpZiAobGlzdCkge1xyXG4gICAgICAgIGlmIChsaXN0Ll9pZCAhPT0gJHNjb3BlLnNlbGVjdGVkTGlzdD8uX2lkKSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIWxpc3QuX2lkKSB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbGlzdDtcclxuICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIFwibmV3XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHt9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldENhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJlc2V0TGFuZ3VhZ2VGaWx0ZXIoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgcmVzZXRDYXRlZ29yeUZpbHRlcigpO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0KSB7XHJcbiAgICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCh7IF9pZDogJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QgfSk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcImRhdGVcIixcclxuICAgICAgcmV2ZXJzZTogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyQnkgPSAoZmllbGQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5vcmRlci5maWVsZCA9PT0gZmllbGQpIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIucmV2ZXJzZSA9ICEkc2NvcGUub3JkZXIucmV2ZXJzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TW9yZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxpc3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gJHNjb3BlLmxpc3RzLmNvbmNhdChsaXN0cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgICBwYWdlID0gMTtcclxuICAgICAgZXhoYXVzdGVkID0gZmFsc2U7XHJcbiAgICAgIGdldExpc3RzKCkudGhlbigobGlzdHMpID0+IHtcclxuICAgICAgICAkc2NvcGUubGlzdHMgPSBsaXN0cztcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0pIHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9ICEkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV07XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeUZpbHRlciA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0pIHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID0gISRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV07XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVDYXRlZ29yeUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcik7XHJcbiAgICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPVxyXG4gICAgICAgIGNhdGVnb3JpZXMubGVuZ3RoID09PSBjYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0pLmxlbmd0aDtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0gJHNjb3BlLmNhdGVnb3JpZXMucmVkdWNlKChmaWx0ZXIsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgZmlsdGVyW2NhdGVnb3J5XSA9ICFhbGxDYXRlZ29yaWVzO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldExpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxvYWRpbmcgfHwgZXhoYXVzdGVkKSByZXR1cm4gW107XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdHMoe1xyXG4gICAgICAgIHBhZ2UsXHJcbiAgICAgICAgc29ydEJ5OiAkc2NvcGUub3JkZXIuZmllbGQsXHJcbiAgICAgICAgb3JkZXJCeTogJHNjb3BlLm9yZGVyLnJldmVyc2UgPyAtMSA6IDEsXHJcbiAgICAgICAgbGltaXQ6IDEwMCxcclxuICAgICAgICBzZWFyY2g6ICRzY29wZS5zZWFyY2gsXHJcbiAgICAgICAgbGFuZ3VhZ2VzOiBPYmplY3Qua2V5cygkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIpLmZpbHRlcigobGFuZ3VhZ2UpID0+ICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZV0pLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlBhZ2UgXCIsIHBhZ2UsIFwiIHJlc3VsdHMgXCIsIGRhdGEucmVzdWx0Lmxlbmd0aCk7XHJcbiAgICAgIGlmIChkYXRhLnJlc3VsdC5sZW5ndGggPCAxMDApIGV4aGF1c3RlZCA9IHRydWU7XHJcbiAgICAgIGVsc2UgcGFnZSA9IGRhdGEubmV4dFBhZ2U7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0LnNsaWNlKDAsIDEwKSk7XHJcbiAgICAgIHJldHVybiBkYXRhLnJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmFkZFZhbHVlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm5ld0l0ZW0udmFsdWUpIHtcclxuICAgICAgICBpZiAoJHNjb3BlLmhhc0R1cGxpY2F0ZSgpICAgICAgICApIHtcclxuICAgICAgICAgIGFsZXJ0KGAkeyRzY29wZS5uZXdJdGVtLnZhbHVlfSBpcyBhbHJlYWR5IGluIHRoZSBsaXN0YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRzY29wZS5uZXdJdGVtLmNyZWF0b3IgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5sZW5ndGggPj0gMTAgJiZcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5uYW1lICYmXHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIFRlblRoaW5nc1N2Yy5zYXZlTGlzdCgkc2NvcGUuY3VycmVudFVzZXIsICRzY29wZS5zZWxlY3RlZExpc3QpLnRoZW4oXHJcbiAgICAgICAgICAgICAgKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0ID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIGRhdGEuX2lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMudW5zaGlmdChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KCRzY29wZS5uZXdJdGVtKSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyk7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuYW5zd2VycysrO1xyXG4gICAgICAgICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICRzY29wZS5uZXdJdGVtLmJsdXJiID0gXCJcIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJChcIiNuZXctdmFsdWVcIikuZm9jdXMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwZGF0ZUxpc3QgPSAobGlzdCwgdXBkYXRlcykgPT4ge1xyXG4gICAgICBpZiAobGlzdC52YWx1ZXMubGVuZ3RoID49IDEwICYmIGxpc3QubmFtZSAmJiBsaXN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIFRlblRoaW5nc1N2Yy51cGRhdGVMaXN0KHtcclxuICAgICAgICAgIF9pZDogbGlzdC5faWQsXHJcbiAgICAgICAgICAuLi51cGRhdGVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCFsaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGxpc3Q/XCIpKSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZGVsZXRlTGlzdChsaXN0KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBudWxsO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZSA9IChsaXN0LCBsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBsaXN0Lmxhbmd1YWdlID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgY29uc3Qgbm9uRW5nbGlzaEluZGV4ID0gbGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoXCJOb24tRW5nbGlzaFwiKTtcclxuICAgICAgaWYgKGxhbmd1YWdlLmNvZGUgIT09IFwiRU5cIiAmJiBub25FbmdsaXNoSW5kZXggPCAwKSB7XHJcbiAgICAgICAgbGlzdC5jYXRlZ29yaWVzLnB1c2goXCJOb24tRW5nbGlzaFwiKTtcclxuICAgICAgfSBlbHNlIGlmIChsYW5ndWFnZS5jb2RlID09PSBcIkVOXCIgJiYgbm9uRW5nbGlzaEluZGV4ID49IDApIHtcclxuICAgICAgICBsaXN0LmNhdGVnb3JpZXMuc3BsaWNlKG5vbkVuZ2xpc2hJbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgIF9pZDogbGlzdC5faWQsXHJcbiAgICAgICAgY2F0ZWdvcmllczogbGlzdC5jYXRlZ29yaWVzLFxyXG4gICAgICAgIGxhbmd1YWdlOiBsYW5ndWFnZS5jb2RlLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldERpZmZpY3VsdHkgPSAobGlzdCwgZGlmZmljdWx0eSkgPT4ge1xyXG4gICAgICBsaXN0LmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgX2lkOiBsaXN0Ll9pZCxcclxuICAgICAgICBkaWZmaWN1bHR5OiBkaWZmaWN1bHR5LFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5ID0gKGxpc3QsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3J5SW5kZXggPSBsaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSk7XHJcbiAgICAgIGlmIChjYXRlZ29yeUluZGV4ID49IDApIHtcclxuICAgICAgICBsaXN0LmNhdGVnb3JpZXMuc3BsaWNlKGNhdGVnb3J5SW5kZXgsIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgfVxyXG4gICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgX2lkOiBsaXN0Ll9pZCxcclxuICAgICAgICBjYXRlZ29yaWVzOiBsaXN0LmNhdGVnb3JpZXMsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaGFzRHVwbGljYXRlID0gKCkgPT5cclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCAmJlxyXG4gICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSAmJlxyXG4gICAgICBfLnNvbWUoXHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMsXHJcbiAgICAgICAgKGFuc3dlcikgPT4gYW5zd2VyLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSA9PSAkc2NvcGUubmV3SXRlbS52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCksXHJcbiAgICAgICk7XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuXHQubW9kdWxlKCdhcHAnKVxyXG5cdC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG5cdC5jb250cm9sbGVyKFxyXG5cdFx0J1RlblRoaW5nc0dhbWVDdHJsJyxcclxuXHRcdGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZVBhcmFtcywgVGVuVGhpbmdzU3ZjKSB7XHJcblx0XHRcdCRzY29wZS4kb24oJ2xvZ2luJywgXyA9PiB7XHJcblx0XHRcdFx0aWYgKCRzY29wZS5jdXJyZW50VXNlci5hZG1pbikge1xyXG5cdFx0XHRcdFx0Z2V0VXNlcnMoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0aWYgKCRzdGF0ZVBhcmFtcy5nYW1lKSB7XHJcblx0XHRcdFx0VGVuVGhpbmdzU3ZjLmdldEdhbWUoJHN0YXRlUGFyYW1zLmdhbWUpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdFx0JHNjb3BlLmdhbWUgPSByZXNwb25zZS5kYXRhO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJHNjb3BlLmdhbWUpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdXb3Jrb3V0Q3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICRzY29wZS50aW1lRXhlcmNpc2luZyA9IDMwO1xyXG4gICRzY29wZS50aW1lUmVzdGluZyA9IDEwO1xyXG4gICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcblxyXG4gIHZhciBzb3VuZHMgPSB7XHJcbiAgICBvbjogbmV3IEF1ZGlvKCdvbi53YXYnKSxcclxuICAgIG9mZjogbmV3IEF1ZGlvKCdvZmYud2F2JyksXHJcbiAgICBzd2l0Y2g6IG5ldyBBdWRpbygnc3dpdGNoLndhdicpLFxyXG4gIH07XHJcblxyXG5cclxuICB2YXIgZXhlcmNpc2VzID0gW1xyXG4gICAge25hbWU6ICdKdW1waW5nIEphY2tzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnV2FsbCBTaXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnQ3J1bmNoJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU3RlcC1VcCcsIHNwbGl0OiB0cnVlfSxcclxuICAgIHtuYW1lOiAnU3F1YXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdUcmljZXBzIERpcCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1BsYW5rJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnSGlnaCBLbmVlcycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0x1bmdlJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUHVzaC1VcCB3aXRoIFJvdGF0aW9uJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU2lkZSBQbGFuaycsIHNwbGl0OiB0cnVlfVxyXG4gIF07XHJcblxyXG4gIHZhciBleGVyY2lzaW5nO1xyXG5cclxuICAkc2NvcGUucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoZXhlcmNpc2VzLmxlbmd0aCAtIE1hdGguZmxvb3IoJHNjb3BlLnRpbWVSZW1haW5pbmcgLyAoJHNjb3BlLnRpbWVFeGVyY2lzaW5nICsgJHNjb3BlLnRpbWVSZXN0aW5nKSkpICsgJy8nICsgZXhlcmNpc2VzLmxlbmd0aDtcclxuICB9O1xyXG5cclxuICAkc2NvcGUud29ya291dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGV4Y2VyY2lzZVRpbWUgPSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3Rpbmc7XHJcbiAgICBpZiAoISRzY29wZS50aW1lUmVtYWluaW5nKSB7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gZXhlcmNpc2VzLmxlbmd0aCAqIGV4Y2VyY2lzZVRpbWU7XHJcbiAgICAgIGV4ZXJjaXNpbmcgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZy0tO1xyXG4gICAgICAgIGlmICgkc2NvcGUudGltZVJlbWFpbmluZyA9PT0gMCkge1xyXG4gICAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICdGaW5pc2hlZCEgQ29uZ3JhdHMhJywgc3BsaXQ6IGZhbHNlfTtcclxuICAgICAgICAgICRzY29wZS50aW1lciA9ICcnO1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VycmVudEV4ZXJjaXNlID0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvIGV4Y2VyY2lzZVRpbWUpO1xyXG4gICAgICAgIHZhciB0aW1lciA9ICRzY29wZS50aW1lUmVtYWluaW5nIC0gY3VycmVudEV4ZXJjaXNlICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgICAkc2NvcGUudGltZXIgPSB0aW1lciA+ICRzY29wZS50aW1lRXhlcmNpc2luZyA/IHRpbWVyIC0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nIDogdGltZXI7XHJcbiAgICAgICAgaWYgKHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nKSB7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS5leGVyY2lzZSA9IGV4ZXJjaXNlc1tleGVyY2lzZXMubGVuZ3RoIC0gY3VycmVudEV4ZXJjaXNlIC0gMV07XHJcbiAgICAgICAgaWYgKHRpbWVyID09PSAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgIHNvdW5kcy5vbi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aW1lciA9PT0gMCkge1xyXG4gICAgICAgICAgc291bmRzLm9mZi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkc2NvcGUuZXhlcmNpc2Uuc3BsaXQgJiYgdGltZXIgPT09IE1hdGguZmxvb3IoJHNjb3BlLnRpbWVFeGVyY2lzaW5nIC8gMikpIHtcclxuICAgICAgICAgIHNvdW5kcy5zd2l0Y2gucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChleGVyY2lzaW5nKTtcclxuICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICcnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuZGlyZWN0aXZlKFwiY2xpY2tPdXRzaWRlXCIsIGZ1bmN0aW9uICgkZG9jdW1lbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVzdHJpY3Q6IFwiQVwiLFxyXG4gICAgc2NvcGU6IHtcclxuICAgICAgY2xpY2tPdXRzaWRlOiBcIiZcIixcclxuICAgIH0sXHJcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRyKSB7XHJcbiAgICAgICRkb2N1bWVudC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGVsICE9PSBlLnRhcmdldCAmJiAhZWxbMF0uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL3Njb3BlLiRwYXJlbnQuc2V0U2VsZWN0ZWRMaXN0KCk7XHJcbiAgICAgICAgICAgIHNjb3BlLiRldmFsKHNjb3BlLmNsaWNrT3V0c2lkZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcblx0LmRpcmVjdGl2ZSgnaGVhZCcsIFtcclxuXHRcdCckcm9vdFNjb3BlJyxcclxuXHRcdCckc3RhdGUnLFxyXG5cdFx0JyRjb21waWxlJyxcclxuXHRcdCckaW50ZXJwb2xhdGUnLFxyXG5cdFx0ZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgJGNvbXBpbGUsICRpbnRlcnBvbGF0ZSkge1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlID0gZnVuY3Rpb24gZ2V0U3R5bGUodGVtcGxhdGVTdHlsZVVybCkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3R5bGUgPSB7XHJcblx0XHRcdFx0XHRocmVmOiB0ZW1wbGF0ZVN0eWxlVXJsLFxyXG5cdFx0XHRcdFx0cmVsOiAnc3R5bGVzaGVldCdcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRpZiAoc3R5bGUuaHJlZi5tYXRjaCgvXFwubGVzcyQvKSkge1xyXG5cdFx0XHRcdFx0c3R5bGUucmVsID0gJ3N0eWxlc2hlZXQvbGVzcyc7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIGdldFN0eWxlcyhzdGF0ZSkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3RhdGVzID0ge307XHJcblxyXG5cdFx0XHRcdC8vQ2hlY2sgc3RhdGUgZm9yIHN0eWxlc1xyXG5cdFx0XHRcdHdoaWxlIChzdGF0ZS5uYW1lICE9PSAnJykge1xyXG5cdFx0XHRcdFx0dmFyIHBhcmVudCA9ICRzdGF0ZS5nZXQoJ14nLCBzdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0Ly9Jbml0aWF0ZSBvdXIgdmlldyBsaXN0XHJcblx0XHRcdFx0XHRpZiAoIXN0YXRlc1twYXJlbnQubmFtZV0pIHtcclxuXHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXSA9IHt9O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ2hlY2sgdGhlIHRlbXBsYXRlU3R5bGVcclxuXHRcdFx0XHRcdGlmIChzdGF0ZS50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXVsnJ10pIHtcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSA9IGdldFN0eWxlKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB2aWV3c1xyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnZpZXdzKSB7XHJcblx0XHRcdFx0XHRcdF8uZm9yRWFjaChzdGF0ZS52aWV3cywgZnVuY3Rpb24gKHZpZXcsIGtleSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgYSBzdHlsZVxyXG5cdFx0XHRcdFx0XHRcdGlmICghdmlldy50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGFyZSB0YXJnZXRpbmcgc29tZSBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRpZiAoKGtleSA9IGtleS5zcGxpdCgnQCcpKVsxXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBoYXZlIHN0eWxlcyBmb3IgdGhhdCBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGVzW2tleVsxXV0gPSB7fTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBzb21lIHBhcmVudCdzIHZpZXdcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV1ba2V5WzBdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBvdXIgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1ba2V5WzBdXSA9IGdldFN0eWxlKHZpZXcudGVtcGxhdGVTdHlsZVVybCk7XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NvbnRpbnVlIHdpdGggdGhlIHBhcmVudFxyXG5cdFx0XHRcdFx0c3RhdGUgPSBwYXJlbnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL0ZsYXR0ZW4gdGhlIGxpc3RcclxuXHRcdFx0XHR2YXIgZmxhdCA9IFtdO1xyXG5cdFx0XHRcdF8uZm9yRWFjaChzdGF0ZXMsIGZ1bmN0aW9uICh2aWV3cykge1xyXG5cclxuXHRcdFx0XHRcdF8uZm9yRWFjaCh2aWV3cywgZnVuY3Rpb24gKHN0eWxlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIV8uaW5jbHVkZXMoZmxhdCwgc3R5bGUpKSB7XHJcblx0XHRcdFx0XHRcdFx0ZmxhdC5wdXNoKHN0eWxlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly9SZXZlcnNlIGl0IHNvIHdlIGhhdmUgYSBwcm9wZXIgaGllcmFyY2h5XHJcblx0XHRcdFx0ZmxhdC5yZXZlcnNlKCk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBmbGF0O1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdFx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0pIHtcclxuXHJcblx0XHRcdFx0XHRzY29wZS50ZW1wbGF0ZVN0eWxlcyA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdHZhciBodG1sID0gJzxsaW5rIG5nLWF0dHItcmVsPVwie3tzdHlsZS5yZWx9fVwiIG5nLXJlcGVhdD1cInN0eWxlIGluIHRlbXBsYXRlU3R5bGVzXCIgbmctaHJlZj1cInt7c3R5bGUuaHJlZn19XCI+JztcclxuXHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXHtcXHsvZywgJGludGVycG9sYXRlLnN0YXJ0U3ltYm9sKCkpO1xyXG5cdFx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvXFx9XFx9L2csICRpbnRlcnBvbGF0ZS5lbmRTeW1ib2woKSk7XHJcblxyXG5cdFx0XHRcdFx0ZWxlbS5hcHBlbmQoJGNvbXBpbGUoaHRtbCkoc2NvcGUpKTtcclxuXHJcblx0XHRcdFx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpIHtcclxuXHJcblx0XHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gZ2V0U3R5bGVzKHRvU3RhdGUpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0fVxyXG5cdF0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0NhdGVnb3JpZXNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VGFza3MgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nLCBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZFRhc2sgPSBmdW5jdGlvbiAoY2F0ZWdvcnksIHRhc2spIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5ICsgJy90YXNrcycsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICBzdmMuY2hvaWNlcyA9IGxpc3Q7XHJcbiAgICBzdmMucHJpb3JpdHlMaXN0ID0gW107XHJcbiAgICAvL01ha2UgYSBuZXcgY2hvaWNlIGxpc3RcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKHZhciBqID0gaSArIDE7IGogPCBsaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgc3ZjLnByaW9yaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgZmlyc3RDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaSA6IGpdLm5hbWUsXHJcbiAgICAgICAgICBzZWNvbmRDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaiA6IGldLm5hbWUsXHJcbiAgICAgICAgICBjaG9pY2U6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNodWZmbGUoc3ZjLnByaW9yaXR5TGlzdCk7XHJcbiAgICBmb3IgKGkgaW4gc3ZjLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBzdmMucHJpb3JpdHlMaXN0W2ldLmlkID0gaSArIDE7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHJldHVybiBzdmMucHJpb3JpdHlMaXN0O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcclxuICAgIHZhciBtID0gYXJyYXkubGVuZ3RoLCB0LCBpO1xyXG4gICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGXigKZcclxuICAgIHdoaWxlIChtKSB7XHJcbiAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudOKAplxyXG4gICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbS0tKTtcclxuICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAvL2FycmF5W21dLmZpcnN0Q2hvaWNlO1xyXG4gICAgICB0ID0gYXJyYXlbbV07XHJcbiAgICAgIGFycmF5W21dID0gYXJyYXlbaV07XHJcbiAgICAgIGFycmF5W2ldID0gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdFbWFpbFN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuc2VuZCA9IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZW1haWwnLCBlbWFpbCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuc2VydmljZSgnRmlsZVN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gICAgc3ZjLmdldEltYWdlcyA9IGZ1bmN0aW9uKGZvbGRlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2ZpbGVzL2ltYWdlcy8nICsgZm9sZGVyKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLmdldFNvdW5kcyA9IGZ1bmN0aW9uKGZvbGRlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2ZpbGVzL3NvdW5kcy8nICsgZm9sZGVyKTtcclxuICAgIH07XHJcblxyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnR2FtZVN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gICAgc3ZjLmdldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZ2FtZXMvJyArIGdhbWUgKyAnLycgKyB1c2VyICsgJy9oaWdoc2NvcmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLnNldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyLCBzY29yZSkge1xyXG4gICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9nYW1lcy8nICsgZ2FtZSArICcvJyArIHVzZXIgKyAnL2hpZ2hzY29yZScsIHtcclxuICAgICAgICBzY29yZTogc2NvcmVcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnTGFuZ3VhZ2VTdmMnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5sYW5ndWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkVOXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkVuZ2xpc2hcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWdiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIk5MXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIk5lZGVybGFuZHNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLW5sXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkZSXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkZyYW7Dp2Fpc1wiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tZnJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy50ZXh0ID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgc3ZjLnNlbGVjdGVkTGFuZ3VhZ2UgPSBzdmMubGFuZ3VhZ2VzWzBdO1xyXG5cclxuICBzdmMuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcclxuICAgIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICByZXR1cm4gbGFuZ3VhZ2U7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHN2Yy5zZWxlY3RlZExhbmd1YWdlO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZmV0Y2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJyk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQb3N0ID0gZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMvJyArIHBvc3QuX2lkKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJUZW5UaGluZ3NTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9ib3RzL3RlbnRoaW5ncy9xdWV1ZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0cyA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgIHZhciB1cmwgPVxyXG4gICAgICBgL2FwaS90ZW50aGluZ3MvbGlzdHM/YCArXHJcbiAgICAgIChvcHRpb25zLmxpbWl0ID8gYCZsaW1pdD0ke29wdGlvbnMubGltaXR9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMucGFnZSA/IGAmcGFnZT0ke29wdGlvbnMucGFnZX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zb3J0QnkgPyBgJnNvcnRfYnk9JHtvcHRpb25zLnNvcnRCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5vcmRlckJ5ID8gYCZvcmRlcl9ieT0ke29wdGlvbnMub3JkZXJCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5sYW5ndWFnZXMgJiYgb3B0aW9ucy5sYW5ndWFnZXMubGVuZ3RoID4gMCA/IGAmbGFuZ3VhZ2U9JHtvcHRpb25zLmxhbmd1YWdlcy5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5jYXRlZ29yaWVzICYmIG9wdGlvbnMuY2F0ZWdvcmllcy5sZW5ndGggPiAwID8gYCZjYXRlZ29yaWVzPSR7b3B0aW9ucy5jYXRlZ29yaWVzLmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnNlYXJjaCA/IGAmc2VhcmNoPSR7b3B0aW9ucy5zZWFyY2h9YCA6IFwiXCIpO1xyXG4gICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvY2F0ZWdvcmllc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9sYW5ndWFnZXNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkLCBsaXN0KTtcclxuICB9O1xyXG5cclxuICBzdmMuc2F2ZUxpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnB1dChcIi9hcGkvdGVudGhpbmdzL2xpc3RzXCIsIHtcclxuICAgICAgdXNlcjogdXNlcixcclxuICAgICAgbGlzdDogbGlzdCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5yZXBvcnRMaXN0ID0gZnVuY3Rpb24gKHVzZXIsIGxpc3QpIHtcclxuICAgICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi9yZXBvcnQvXCIgKyB1c2VyLl9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmRlbGV0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLmRlbGV0ZShcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRCbHVyYnMgPSBmdW5jdGlvbiAobGlzdCwgdHlwZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL2xpc3RzLyR7bGlzdC5faWR9L2JsdXJicy8ke3R5cGV9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvcGF1c2VgKTtcclxuICB9O1xyXG5cclxuICBzdmMudG9nZ2xlUGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvcGF1c2VgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0R2FtZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvZ2FtZS8ke2lkfWApO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiVXNlclN2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vyc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VXNlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9hbGxcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnRvZ2dsZUJhbiA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS91c2Vycy9iYW4vJHtpZH1gKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2V0VG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiWC1BdXRoXCJdID0gdG9rZW47XHJcbiAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICB9O1xyXG5cclxuICBzdmMuYXV0aGVudGljYXRlID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvYXV0aGVudGljYXRlXCIsIHtcclxuICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICByZXR1cm4gc3ZjLnNldFRva2VuKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMubG9naW4gPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvbG9naW5cIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS50b2tlbiA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlVXNlciA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlci5faWQsIHtcclxuICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGVja1Bhc3N3b3JkID0gZnVuY3Rpb24gKHVzZXIsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvdmVyaWZpY2F0aW9uXCIsIHtcclxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoYW5nZVBhc3N3b3JkID0gZnVuY3Rpb24gKHVzZXIsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL3Bhc3N3b3JkXCIsIHtcclxuICAgICAgb2xkUGFzc3dvcmQ6IG9sZFBhc3N3b3JkLFxyXG4gICAgICBuZXdQYXNzd29yZDogbmV3UGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlVXNlcm5hbWUgPSBmdW5jdGlvbiAodXNlciwgbmV3VXNlcm5hbWUpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvdXNlcm5hbWVcIiwge1xyXG4gICAgICAgIG5ld1VzZXJuYW1lOiBuZXdVc2VybmFtZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMubG9nb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSBcIlwiO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vyc1wiLCB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdmMubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5jb250cm9sbGVyKCdRdWl6QW5pbWFsc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIEZpbGVTdmMpIHtcclxuXHJcbiAgICBGaWxlU3ZjLmdldFNvdW5kcygnYW5pbWFscycpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLmFuaW1hbHMgPSBfLnNodWZmbGUocmVzcG9uc2UuZGF0YS5tYXAoYW5pbWFsID0+ICh7XHJcbiAgICAgICAgICBzb3VuZDogYW5pbWFsLFxyXG4gICAgICAgICAgbmFtZTogYW5pbWFsLnN1YnN0cmluZygwLCBhbmltYWwuaW5kZXhPZignLicpKS5yZXBsYWNlKCdfJywgJyAnKS5jYXBpdGFsaXplKClcclxuICAgICAgICB9KSkpO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW1hbCBvZiAkc2NvcGUuYW5pbWFscykge1xyXG4gICAgICAgICAgYW5pbWFsLmFuc3dlcnMgPSBfLnNodWZmbGUoW2FuaW1hbC5uYW1lLCAuLi5nZXRSYW5kb21BbmltYWxzKGFuaW1hbC5uYW1lKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuYW5pbWFscyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5ndWVzcyA9IChhbmltYWwsIGd1ZXNzKSA9PiB7XHJcbiAgICAgIGFuaW1hbC5ndWVzcyA9IGd1ZXNzO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRSYW5kb21BbmltYWxzID0gbmFtZSA9PiBfLnNodWZmbGUoJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBuYW1lICE9PSBhbmltYWwubmFtZSkubWFwKGFuaW1hbCA9PiBhbmltYWwubmFtZSkpLnNsaWNlKDAsIDUpO1xyXG5cclxuICAgICRzY29wZS5nZXRTY29yZSA9ICgpID0+IGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAgICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxuICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1F1aXpHb29nbGVDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdnb29nbGUnKVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpekxvZ29zQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnbG9nb3MnKVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpek1vdmllc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ21vdmllcycpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmNvbnRyb2xsZXIoJ1F1aXpTa2VsZXRvbnNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBGaWxlU3ZjKSB7XHJcblxyXG4gICAgRmlsZVN2Yy5nZXRJbWFnZXMoJ3NrZWxldG9ucycpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLmFuaW1hbHMgPSBfLnNodWZmbGUocmVzcG9uc2UuZGF0YS5tYXAoYW5pbWFsID0+ICh7XHJcbiAgICAgICAgICBpbWFnZTogYW5pbWFsLFxyXG4gICAgICAgICAgbmFtZTogYW5pbWFsLnN1YnN0cmluZygwLCBhbmltYWwuaW5kZXhPZignLicpKS5yZXBsYWNlKCdfJywgJyAnKS5jYXBpdGFsaXplKClcclxuICAgICAgICB9KSkpO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW1hbCBvZiAkc2NvcGUuYW5pbWFscykge1xyXG4gICAgICAgICAgYW5pbWFsLmFuc3dlcnMgPSBfLnNodWZmbGUoW2FuaW1hbC5uYW1lLCAuLi5nZXRSYW5kb21BbmltYWxzKGFuaW1hbC5uYW1lKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuYW5pbWFscyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5ndWVzcyA9IChhbmltYWwsIGd1ZXNzKSA9PiB7XHJcbiAgICAgIGFuaW1hbC5ndWVzcyA9IGd1ZXNzO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRSYW5kb21BbmltYWxzID0gbmFtZSA9PiBfLnNodWZmbGUoJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBuYW1lICE9PSBhbmltYWwubmFtZSkubWFwKGFuaW1hbCA9PiBhbmltYWwubmFtZSkpLnNsaWNlKDAsIDEwKTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0U2NvcmUgPSAoKSA9PiBgJHskc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IGFuaW1hbC5uYW1lID09PSBhbmltYWwuZ3Vlc3MpLmxlbmd0aH0vJHskc2NvcGUuYW5pbWFscy5sZW5ndGh9YDtcclxuXHJcbiAgICAkc2NvcGUuaXNTY29yZVZpc2libGUgPSAoKSA9PiAkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IGFuaW1hbC5ndWVzcykubGVuZ3RoID09PSAkc2NvcGUuYW5pbWFscy5sZW5ndGg7XHJcbiAgfSk7Il19
