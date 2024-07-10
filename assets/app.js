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
    console.log($scope.newItem), $scope.newItem.value && (_.some($scope.selectedList.values, answer => answer.value.removeAllButLetters() == $scope.newItem.value.removeAllButLetters()) ? alert(`${$scope.newItem.value} is already in the list`) : ($scope.newItem.creator = $scope.currentUser._id, $scope.newItem.value = "", $scope.newItem.blurb = "", $scope.selectedList.values.length >= 10 && $scope.selectedList.name && $scope.selectedList.categories.length > 0 ? ($scope.saving = !0, TenThingsSvc.saveList($scope.currentUser, $scope.selectedList).then(({
      data
    }) => {
      $scope.setSelectedList(data), "new" === $location.search().list && $location.search("list", data._id);
    }, err => {
      console.error(err);
    })) : ($scope.selectedList.values.unshift(JSON.parse(JSON.stringify($scope.newItem))), console.log($scope.selectedList.values), $scope.selectedList.answers++))), $("#new-value").focus();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJjb250cm9sbGVycy9hcHAuY3RybC5qcyIsImNvbnRyb2xsZXJzL2FzdGVyb2lkcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvYnViYmxlcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvY2hhcmFkZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3QuY3RybC5qcyIsImNvbnRyb2xsZXJzL2V4cGVyaWVuY2UuY3RybC5qcyIsImNvbnRyb2xsZXJzL2hvYmJpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xlbW1pbmdzLmN0cmwuanMiLCJjb250cm9sbGVycy9saXN0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbG9naW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3Bvc3RzLmN0cmwuanMiLCJjb250cm9sbGVycy9wcmlvcml0aXplLmN0cmwuanMiLCJjb250cm9sbGVycy9wcm9maWxlLmN0cmwuanMiLCJjb250cm9sbGVycy9za2lsbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvdGVudGhpbmdzYWRtaW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2N1cmF0ZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvdGVudGhpbmdzZ2FtZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvd29ya291dC5jdHJsLmpzIiwic2VydmljZXMvY2F0ZWdvcmllcy5zdmMuanMiLCJzZXJ2aWNlcy9lbWFpbC5zdmMuanMiLCJzZXJ2aWNlcy9maWxlLnN2Yy5qcyIsInNlcnZpY2VzL2dhbWUuc3ZjLmpzIiwic2VydmljZXMvbGFuZ3VhZ2Uuc3ZjLmpzIiwic2VydmljZXMvcG9zdHMuc3ZjLmpzIiwic2VydmljZXMvdGVudGhpbmdzLnN2Yy5qcyIsInNlcnZpY2VzL3VzZXIuc3ZjLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9hbmltYWxzLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2dvb2dsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9sb2dvcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9tb3ZpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvc2tlbGV0b25zLmN0cmwuanMiXSwibmFtZXMiOlsiZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwIiwiYmFzZSIsImxldHRlcnMiLCJkb21haW5zIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJTdHJpbmciLCJwcm90b3R5cGUiLCJ2YWx1ZSIsInJlZHVjZSIsInJlc3VsdCIsImxldHRlciIsInJlcGxhY2UiLCJ0aGlzIiwiU1BFQ0lBTF9DSEFSQUNURVJTIiwiUmVnRXhwIiwidG9Mb3dlckNhc2UiLCJyZW1vdmVEaWFjcml0aWNzIiwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMiLCJleHRyYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsImRpcmVjdGl2ZSIsIiRkb2N1bWVudCIsInJlc3RyaWN0Iiwic2NvcGUiLCJjbGlja091dHNpZGUiLCJsaW5rIiwiZWwiLCJhdHRyIiwib24iLCJ0YXJnZXQiLCJjb250YWlucyIsIiRhcHBseSIsIiRldmFsIiwiJHN0YXRlIiwiJGNvbXBpbGUiLCIkaW50ZXJwb2xhdGUiLCJnZXRTdHlsZSIsInRlbXBsYXRlU3R5bGVVcmwiLCJzdHlsZSIsImhyZWYiLCJyZWwiLCJtYXRjaCIsImVsZW0iLCJ0ZW1wbGF0ZVN0eWxlcyIsImh0bWwiLCJzdGFydFN5bWJvbCIsImVuZFN5bWJvbCIsImFwcGVuZCIsIiRvbiIsImV2ZW50IiwidG9TdGF0ZSIsInRvUGFyYW1zIiwiZnJvbVN0YXRlIiwiZnJvbVBhcmFtcyIsInN0YXRlcyIsIm5hbWUiLCJwYXJlbnQiLCJnZXQiLCJ2aWV3cyIsIl8iLCJ2aWV3Iiwic3BsaXQiLCJmbGF0IiwiaW5jbHVkZXMiLCJyZXZlcnNlIiwiZ2V0U3R5bGVzIiwiJHNjb3BlIiwiJGxvY2F0aW9uIiwiTGFuZ3VhZ2VTdmMiLCJVc2VyU3ZjIiwibG9naW4iLCJ1c2VyIiwibG9nZ2VkSW4iLCJsb2NhbFN0b3JhZ2UiLCJfaWQiLCJjdXJyZW50VXNlciIsIiQiLCJsb2FkIiwiZmFkZU91dCIsImZhZGVJbiIsImNsb3Nlc3QiLCJ0b2dnbGVDbGFzcyIsImNoZWNrZWQiLCJkb2N1bWVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRoZW1lQ291bnRlciIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImZsaXBUaGVtZSIsInNob3ciLCJoaWRlIiwic2V0VGltZW91dCIsImdldEpTT04iLCJza2lsbHMiLCJmaWx0ZXIiLCJza2lsbCIsImhvYmJpZXMiLCJqb2JzIiwiam9iIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImNoYXJhZGVzIiwiZ2V0VGltZVNwYW4iLCJsYW5ndWFnZXMiLCJzZWxlY3RlZExhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJzZWxlY3RMYW5ndWFnZSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJob3ZlcmRpdiIsImRpdmlkIiwibGVmdCIsImNsaWVudFgiLCJ0b3AiLCJjbGllbnRZIiwiZ2V0RWxlbWVudEJ5SWQiLCJjc3MiLCJ0b2dnbGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJiaXJ0aERhdGUiLCJsb2FkaW5nIiwibG9nb3V0IiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsImNsZWFyIiwiY2F0Y2giLCJlcnJvciIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiY2FwaXRhbGl6ZSIsIkdhbWVTdmMiLCJhbm5vdW5jZSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJmb250IiwiZmlsbFN0eWxlIiwidGV4dEFsaWduIiwic2hvdHMiLCJhc3Rlcm9pZHMiLCJwb3dlcnVwcyIsImV4cGxvc2lvbnMiLCJtYXAiLCJzcGFjZXBpY3MiLCJzcGFjZSIsInBvd2VydXBUeXBlcyIsImFubm91bmNlbWVudCIsImN5Y2xlIiwicm93cyIsImNvbHVtbnMiLCJzaXplIiwiaW1nIiwiSW1hZ2UiLCJhY3RpdmF0ZSIsInNwYWNlc2hpcCIsIm1heFNwZWVkIiwiY29vbGRvd24iLCJjb29sZG93blRpbWUiLCJyYW5nZSIsInNoaWVsZCIsImV4cGxvZGUiLCJzcGF3bkFzdGVyb2lkcyIsInBvd2VydXAiLCJhcnJheSIsInNyYyIsImV4cGxvc2lvbkltYWdlIiwiZXZhbHVhdGVLZXlzIiwicGxheWluZyIsInNob290Iiwicm90YXRpb24iLCJzcGVlZCIsInNjb3JlIiwiU3BhY2VzaGlwIiwiYXV0b1NwYXduIiwid2lkdGgiLCJoZWlnaHQiLCJjYW5ub24iLCJ4IiwieSIsInBvc2l0aW9uIiwiYW5nbGUiLCJpZCIsInJvdW5kIiwiU2hvdCIsIm1vdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZmlsbCIsImFzdGVyb2lkIiwiaGl0IiwiZ2FtZU92ZXIiLCJjb3MiLCJzaW4iLCJsaWZlc3BhbiIsIkFzdGVyb2lkIiwiZ2V0RW50cnlQb3NpdGlvbiIsInJvdGF0aW9uU3BlZWQiLCJFeHBsb3Npb24iLCJzaG90IiwicG9pbnRzIiwic3Bhd25Qb3dlcnVwIiwib2JqZWN0IiwiUG93ZXJ1cCIsImRlbGF5Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImNvbHVtbiIsInJvdyIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJncmlkWCIsImdyaWRZIiwib2JqZWN0MSIsIm9iamVjdDIiLCJrZXlzIiwiYW1vdW50IiwiaGlnaHNjb3JlIiwic2V0SGlnaHNjb3JlIiwicmVzaXplQ2FudmFzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleUNvZGUiLCJ3aGljaCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXciLCJjbGVhclJlY3QiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwidGFsbHkiLCJmaWxsVGV4dCIsIm1lYXN1cmVUZXh0IiwiYmFja2dyb3VuZEltYWdlIiwiYnViYmxlcyIsImNvbG9ycyIsIkJ1YmJsZSIsInJhZGl1cyIsImV4cGFuZGluZyIsImNpcmN1bWZlcmVuY2UiLCJtYXhSYWRpdXMiLCJ2eCIsInZ5IiwiZmlsdGVyQnViYmxlcyIsImJ1YmJsZSIsInNlbGVjdFdvcmQiLCJjYXRlZ29yeSIsIndvcmQiLCJFbWFpbFN2YyIsIm9wdGlvbnMiLCJ0ZXh0IiwiY29udGFjdCIsImVtYWlsIiwicGhvbmUiLCJhYm91dCIsIm1lc3NhZ2UiLCJzZW5kaW5nIiwic2VudCIsInN0YXR1cyIsImVyciIsImdldFNraWxsIiwic2tpbGxDb2RlIiwiY29kZSIsIiR3aW5kb3ciLCJob2JieVNlbGVjdG9yVmlzaWJsZSIsInNlbGVjdGVkSG9iYnkiLCJzZWxlY3RIb2JieSIsImhvYmJ5Iiwic2hvd0hvYmJ5IiwiaW5kZXgiLCJpbWFnZXMiLCJMRUZUIiwiUklHSFQiLCJsZW1taW5nc0ltYWdlIiwiZGVjb3JJbWFnZSIsImxlbW1pbmdzIiwic3RhcnRlZCIsImFjdGlvbnMiLCJ3YWxrIiwic3RhcnQiLCJlbmQiLCJodWgiLCJmYWxsIiwiZmx5Iiwic3RvcCIsImNsaW1iIiwiYnVpbGQiLCJwdW5jaCIsImRpZyIsIkxlbW1pbmciLCJpbml0IiwiYWN0IiwiYWN0aW9uIiwiYW5pbWF0aW9uIiwic2NhbGUiLCJoYXRjaCIsIm9wZW4iLCJyZWN0IiwiQ2F0ZWdvcmllc1N2YyIsInNob3dDYXRlZ29yeSIsImdldENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidGFza3MiLCJqIiwidGFzayIsInNlbGVjdENhdGVnb3J5Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdGVkVGFza3MiLCJzZWxlY3RhYmxlVGFza3MiLCJlbnRlcmVkQ2F0ZWdvcnkiLCJuZXdDYXRlZ29yeSIsImZvdW5kIiwiYWRkQ2F0ZWdvcnkiLCJuZXdUYXNrIiwic2VsZWN0VGFzayIsImFkZFRhc2siLCJlbnRlcmVkVGFzayIsInJlbW92ZVRhc2siLCJ1bnNlbGVjdFRhc2siLCJ0YXNrTGlzdCIsInNwbGljZSIsImluZGV4T2YiLCJzdGFydFByaW9yaXRpemluZyIsInNldFByaW9yaXR5TGlzdCIsInBhdGgiLCJnZXRRdWVzdGlvbnMiLCJjb3VudGVyIiwidWkiLCJmaXJlYmFzZXVpIiwiQXV0aFVJIiwic3RhcnRVSSIsImNhbGxiYWNrcyIsInNpZ25JblN1Y2Nlc3MiLCJjcmVkZW50aWFsIiwicmVkaXJlY3RVcmwiLCJnZXRJZFRva2VuIiwiaWRUb2tlbiIsImF1dGhlbnRpY2F0ZSIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJlbWFpbFZlcmlmaWVkIiwiJGVtaXQiLCJtb2RhbCIsInR5cGUiLCJzaWduSW5GYWlsdXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjcmVkIiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJ1aVNob3duIiwiZGlzcGxheSIsInNpZ25JblN1Y2Nlc3NVcmwiLCJzaWduSW5PcHRpb25zIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiUFJPVklERVJfSUQiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsInNpZ25JbkZsb3ciLCJyZXNldCIsIiRmaWx0ZXIiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsImJvZHkiLCJwb3N0IiwiZmV0Y2giLCJwb3N0cyIsImdldFBvc3QiLCJ1bnNoaWZ0IiwicHJpb3JpdHlMaXN0IiwiZ2V0UHJpb3JpdHlMaXN0Iiwic2VsZWN0ZWRRdWVzdGlvbiIsImN1cnJlbnRRdWVzdGlvbiIsImRvbmUiLCJtYWtlQ2hvaWNlIiwiY2hvaWNlIiwiZmlyc3RDaG9pY2UiLCJzZWNvbmRDaG9pY2UiLCJnZXRCdXR0b25WYWx1ZSIsInNlbGVjdFF1ZXN0aW9uIiwicXVlc3Rpb24iLCJnZXRGaWx0ZXJlZFByaW9yaXR5TGlzdCIsImdldENob2ljZXNNYWRlIiwiY2hvaWNlc01hZGUiLCJnZXRCdXR0b25DbGFzcyIsInNob3dDaG9pY2VzIiwiY2hhcnRDbGljayIsImNoYXJ0IiwiZ2V0U2VnbWVudHNBdEV2ZW50Iiwic2hvd1Jlc3VsdHMiLCJyZXNwb25zaXZlIiwic2VnbWVudFNob3dTdHJva2UiLCJzZWdtZW50U3Ryb2tlQ29sb3IiLCJzZWdtZW50U3Ryb2tlV2lkdGgiLCJwZXJjZW50YWdlSW5uZXJDdXRvdXQiLCJhbmltYXRpb25TdGVwcyIsImFuaW1hdGlvbkVhc2luZyIsImFuaW1hdGVSb3RhdGUiLCJhbmltYXRlU2NhbGUiLCJsZWdlbmRUZW1wbGF0ZSIsImNob2ljZXMiLCJ2b3RlcyIsImxhYmVsIiwib2Zmc2V0IiwiZ2VuZGVyIiwic2V4IiwiaWRlbnRpdHkiLCJzZXhlcyIsImlkZW50aXRpZXMiLCJkYXRlT3B0aW9ucyIsIm1heERhdGUiLCJtaW5EYXRlIiwiaW5pdERhdGUiLCJkYXRlcGlja2VyTW9kZSIsInBlcmNlbnRhZ2UiLCJzdGFydFNsaWRlciIsImRyYWdTbGlkZXIiLCJzdG9wU2xpZGVyIiwidXNlcm5hbWVUb2dnbGUiLCJwYXNzd29yZFRvZ2dsZSIsInRvZ2dsZVVzZXJuYW1lIiwibmV3VXNlcm5hbWUiLCJ1c2VybmFtZSIsInRvZ2dsZVBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJjaGVja1Bhc3N3b3JkIiwicGFzc3dvcmQiLCJvcmlnaW5hbEJnIiwiYW5pbWF0ZSIsImJhY2tncm91bmRDb2xvciIsImNoYW5nZVBhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJjaGFuZ2VVc2VybmFtZSIsInVwZGF0ZVVzZXIiLCIkd2F0Y2giLCJsb2FkQ291bnRyaWVzIiwiJHF1ZXJ5IiwiZmxhZyIsInRpZGJpdCIsImNvdW50cnkiLCJzZWxlY3RlZFNraWxsIiwic2tpbGxzVmlzaWJsZSIsInByb2plY3RzIiwibGFiZWxzIiwiZW1wbG95ZXIiLCJjb25jYXQiLCJmaWx0ZXJlZFByb2plY3RzIiwicHJvamVjdCIsInNldFNlbGVjdGVkU2tpbGwiLCJjaGFydE9wdGlvbnMiLCJjdXRvdXRQZXJjZW50YWdlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRvb2x0aXBzIiwiY2hhcnRTdHlsZSIsImltYWdlIiwiVGVuVGhpbmdzU3ZjIiwiZmxhc2giLCJlbGVtZW50IiwiY29sb3IiLCJzZWFyY2giLCJ2YWx1ZXMiLCJrZXlEb3duIiwiaXMiLCJhZGRWYWx1ZSIsImZvY3VzIiwic2VhcmNoTmFtZSIsIm5ld0l0ZW0iLCJzZXRDYXRlZ29yeUZpbHRlciIsImNhdGVnb3J5RmlsdGVyIiwic2V0VXNlckZpbHRlciIsInVzZXJGaWx0ZXIiLCJzZXRVcGRhdGVGaWx0ZXIiLCJ1cGRhdGVGaWx0ZXIiLCJzZXRMYW5ndWFnZUZpbHRlciIsImxhbmd1YWdlRmlsdGVyIiwiZmlsdGVyZWRMaXN0cyIsImxpc3RzIiwiaXNEeW5hbWljIiwiY3JlYXRvciIsImdldExpc3RzIiwiY2F0ZWdvcnlGaWx0ZXJzIiwiZ2V0TGFuZ3VhZ2VzIiwibGFuZ3VhZ2VGaWx0ZXJzIiwibGlzdCIsInNlbGVjdExpc3QiLCJsaXN0T3JkZXIiLCJmaWVsZCIsInZhbHVlT3JkZXIiLCJzb3J0ZXIiLCJzb3J0RmllbGQiLCJzb3J0TGFiZWwiLCJnZXRMYW5ndWFnZUNvdW50IiwiY291bnQiLCJnZXRDYXRlZ29yeUNvdW50IiwiZ2V0VXBkYXRlQ291bnQiLCJ1c2VyRmlsdGVycyIsIkFsbCIsImxpc3QxIiwibGlzdDIiLCJ1c2VycyIsInVzZXJDb3VudCIsImdldExpc3QiLCJzZWxlY3RlZExpc3QiLCJnZXRDYXRlZ29yeUNsYXNzIiwidG9nZ2xlQ2F0ZWdvcnkiLCJjYXRlZ29yeUluZGV4Iiwibm9uRW5nbGlzaEluZGV4IiwiYWRkTGlzdCIsImN1cnJlbnRMYW5ndWFnZSIsImFuc3dlcnMiLCJoYXNEdXBsaWNhdGUiLCJzb21lIiwiYW5zd2VyIiwicmVtb3ZlQWxsQnV0TGV0dGVycyIsImFsZXJ0IiwiYmx1cmIiLCJzYXZlTGlzdCIsInJlcG9ydExpc3QiLCJyZXBvcnRlZCIsInNhdmluZyIsImRlbGV0ZUxpc3QiLCJjb25maXJtIiwibGlzdEJ1dHRvbkNsYXNzIiwiYmx1cmJzIiwiZGVzY3JpcHRpb24iLCJnZXRCbHVyYnMiLCJnZXR0aW5nQmx1cmJzIiwiYWRtaW4iLCJnZXRVc2VycyIsIm9yZGVyIiwib3JkZXJCeSIsImdldFF1ZXVlIiwicXVldWUiLCJnZXRQYXVzZSIsInBhdXNlZCIsInRvZ2dsZUJhbiIsInRvZ2dsZVBhdXNlIiwicGFnZSIsInVuZGVmaW5lZCIsImV4aGF1c3RlZCIsInNldFNlbGVjdGVkTGlzdCIsImdldE1vcmVMaXN0cyIsImFzeW5jIiwidG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIiLCJhbGxDYXRlZ29yaWVzIiwic29ydEJ5IiwibGltaXQiLCJuZXh0UGFnZSIsInVwZGF0ZUxpc3QiLCJ1cGRhdGVzIiwic2V0RGlmZmljdWx0eSIsImRpZmZpY3VsdHkiLCJzZXRDYXRlZ29yeSIsIiRzdGF0ZVBhcmFtcyIsImdhbWUiLCJnZXRHYW1lIiwidGltZVJlbWFpbmluZyIsInRpbWVFeGVyY2lzaW5nIiwidGltZVJlc3RpbmciLCJyZXN0IiwiZXhlcmNpc2luZyIsInNvdW5kcyIsIkF1ZGlvIiwib2ZmIiwic3dpdGNoIiwiZXhlcmNpc2VzIiwicHJvZ3Jlc3MiLCJ3b3Jrb3V0IiwiZXhjZXJjaXNlVGltZSIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lciIsImV4ZXJjaXNlIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50RXhlcmNpc2UiLCJwbGF5IiwiJGh0dHAiLCJzdmMiLCJnZXRUYXNrcyIsInQiLCJtIiwic2h1ZmZsZSIsImdldEltYWdlcyIsImZvbGRlciIsImdldFNvdW5kcyIsImdldEhpZ2hzY29yZSIsImpvaW4iLCJwdXQiLCJkZWxldGUiLCJnZXRVc2VyIiwic2V0VG9rZW4iLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsImNyZWF0ZVVzZXIiLCJGaWxlU3ZjIiwiYW5pbWFscyIsImFuaW1hbCIsInNvdW5kIiwic3Vic3RyaW5nIiwiZ2V0UmFuZG9tQW5pbWFscyIsImd1ZXNzIiwiZ2V0U2NvcmUiLCJpc1Njb3JlVmlzaWJsZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQUEsMkJBQUFBLEdBQUEsQ0FDQTtJQUNBQyxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQTtFQUdBQyxPQUFBQSxHQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxDQUFBO0FBR0FDLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsa0JBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFSLDJCQUFBQSxDQUFBUyxNQUFBQSxDQUFBLENBQUFDLE1BQUFBLEVBQUFDLE1BQUFBLEtBQ0FELE1BQUFBLENBQUFFLE9BQUFBLENBQUFELE1BQUFBLENBQUFULE9BQUFBLEVBQUFTLE1BQUFBLENBQUFWLElBQUFBLENBQUFBLEVB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QUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUUsVUFBQUEsRUFBQSxZQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxXQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxhQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsVUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsV0FBQTtJQUNBRSxVQUFBQSxFQUFBLGNBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE1BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLE9BQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsaUJBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsb0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGtCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxtQkFBQTtJQUNBRSxVQUFBQSxFQUFBLHFCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxtQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsY0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGlCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxhQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsRUFHQUwsaUJBQUFBLENBQUFPLFNBQUFBLENBQUE7SUFDQUMsT0FBQUEsRUFBQUEsQ0FBQSxDQUFBO0lBQ0FDLFdBQUFBLEVBQUFBLENBQUE7RUFBQSxDQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUNoSkFmLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FlLE9BQUFBLENBQUEsY0FBQSxFQUFBLFVBQUFDLFVBQUFBLEVBQUFDLFFBQUFBLEVBQUFBO0VBU0EsSUFBQUMsVUFBQUE7SUFDQUMsT0FBQUEsR0FBQSxTQUFBQSxDQUFBLEVBQUE7TUFBQSxDQUNBRCxVQUFBQSxHQUFBLElBQUFFLFNBQUFBLENBVEEsUUFBQSxLQUFBQyxNQUFBQSxDQUFBQyxRQUFBQSxDQUFBQyxRQUFBQSxHQUNBLFFBQUEsR0FBQUYsTUFBQUEsQ0FBQUMsUUFBQUEsQ0FBQUUsSUFBQUEsR0FFQSxPQUFBLEdBQUFILE1BQUFBLENBQUFDLFFBQUFBLENBQUFFLElBQUFBLENBQUFBLEVBUUFDLE1BQUFBLEdBQUEsWUFBQTtRQUNBQyxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBLHFCQUFBLENBQ0E7TUFBQSxDQUFBLEVBRUFULFVBQUFBLENBQUFVLE9BQUFBLEdBQUEsVUFBQUMsQ0FBQUEsRUFBQUE7UUFDQUgsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQSxtQ0FBQSxDQUFBLEVBQ0FWLFFBQUFBLENBQUFFLE9BQUFBLEVBQUEsR0FBQSxDQUNBO01BQUEsQ0FBQSxFQUVBRCxVQUFBQSxDQUFBWSxPQUFBQSxHQUFBLFVBQUFELENBQUFBLEVBQUFBO1FBQ0FILE9BQUFBLENBQUFDLEdBQUFBLENBQUEsU0FBQSxHQUFBRSxDQUFBQSxHQUFBLFlBQUEsR0FBQVgsVUFBQUEsQ0FBQWEsVUFBQUEsQ0FDQTtNQUFBLENBQUEsRUFFQWIsVUFBQUEsQ0FBQWMsU0FBQUEsR0FBQSxVQUFBSCxDQUFBQSxFQUFBQTtRQUNBLElBQUFJLE9BQUFBLEdBQUFDLElBQUFBLENBQUFDLEtBQUFBLENBQUFOLENBQUFBLENBQUFPLElBQUFBLENBQUFBO1FBQ0FwQixVQUFBQSxDQUFBcUIsVUFBQUEsQ0FBQSxLQUFBLEdBQUFKLE9BQUFBLENBQUFLLEtBQUFBLEVBQUFMLE9BQUFBLENBQUFHLElBQUFBLENBQ0E7TUFBQSxDQUNBO0lBQUEsQ0FBQTtFQUVBcEUsSUFBQUEsQ0FBQXVFLElBQUFBLEdBQUEsVUFBQUQsS0FBQUEsRUFBQUYsSUFBQUEsRUFBQUE7SUFDQSxJQUFBSSxJQUFBQSxHQUFBTixJQUFBQSxDQUFBTyxTQUFBQSxDQUFBO01BQUFILEtBQUFBO01BQUFGO0lBQUFBLENBQUFBLENBQUFBO0lBQ0FsQixVQUFBQSxDQUFBcUIsSUFBQUEsQ0FBQUMsSUFBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQXhFLElBQUFBLENBQUFtRCxPQUFBQSxHQUFBQSxPQUVBO0FBQUEsQ0FBQSxDQUFBLENBQUF1QixHQUFBQSxDQUFBLFVBQUFD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Q0FBQUMsS0FBQUEsQ0FBQUQsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQThELFNBQUFBLENBQUFBO0lBQ0FFLFlBQUFBLEdBQUEsQ0FDQTtNQUNBbkcsSUFBQUEsRUFBQSxPQUFBO01BQ0FvRyxZQUFBQSxFQUFBLGFBQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0EzTSxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQW1NLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBQSxTQUFBQSxDQUFBQyxRQUFBQSxJQUFBLEdBQ0E7TUFBQTtJQUFBLENBQUEsRUFFQTtNQUNBN0csSUFBQUEsRUFBQSxVQUFBO01BQ0FvRyxZQUFBQSxFQUFBLFlBQUE7TUFDQUMsS0FBQUEsRUFBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUE7UUFDQUMsT0FBQUEsRUFBQSxDQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0EzTSxDQUFBQSxFQUFBLENBQUE7UUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQW1NLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7TUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtRQUNBQSxTQUFBQSxDQUFBRSxRQUFBQSxHQUFBLENBQUEsS0FDQUYsU0FBQUEsQ0FBQUcsWUFBQUEsSUFBQSxDQUFBLENBRUE7TUFBQTtJQUFBLENBQUEsRUFFQTtNQUNBL0csSUFBQUEsRUFBQSxPQUFBO01BQ0FvRyxZQUFBQSxFQUFBLGdCQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQTtRQUNBM00sQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFtTSxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUksS0FBQUEsSUFBQSxDQUNBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQWhILElBQUFBLEVBQUEsUUFBQTtNQUNBb0csWUFBQUEsRUFBQSxRQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBM00sQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFtTSxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUssTUFBQUEsR0FBQUEsQ0FBQSxDQUNBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQWpILElBQUFBLEVBQUEsTUFBQTtNQUNBb0csWUFBQUEsRUFBQSxNQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBM00sQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFtTSxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQSxLQUFBLElBQUEvTSxDQUFBQSxJQUFBZ00sU0FBQUEsRUFDQUEsU0FBQUEsQ0FBQWhNLENBQUFBLENBQUFBLENBQUFxTixP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QUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FILFFBQUFBLENBQUFFLFlBQUFBLENBQUEsS0FBQSxFQUFBLE1BQUEsR0FBQXhKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXdKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBekosSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBd0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUF6SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUF3SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUFBLE1BQUEsRUFBQSxNQUFBLEdBQUF4SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUF3SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXpKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQXdKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBekosSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBd0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFDQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQSxHQUFBeEosSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBd0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUF6SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUF3SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXpKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQXdKLEtBQUFBLEdBQUEsR0FB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QSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsV0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxnQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFdBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsT0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxlQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsd0JBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsVUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxZQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsY0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxPQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGtCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxpQ0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxrQ0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxlQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFFBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEseUJBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsdUNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsMEJBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsT0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxhQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsY0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxPQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsT0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsTUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxZQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsa0JBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxnQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLG9CQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsZ0JBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxPQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxNQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLDZCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGlDQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxPQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLHNEQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxlQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsT0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxXQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFdBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsbUJBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSw4Q0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxXQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE1BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsZUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFdBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsbUNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsVUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxXQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxhQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsZ0NBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsTUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSwyQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFFBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsT0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxPQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsVUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsdUJBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsd0NBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsb0JBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxnQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxZQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGtDQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsYUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxlQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFdBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFdBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsWUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLHNCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsNEJBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsWUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxrQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSw0Q0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxNQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsVUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxPQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLDBCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsWUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxZQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsV0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFFBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxlQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsZ0JBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxXQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGFBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxPQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsTUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxhQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE1BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxNQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGtCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGtCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGFBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsVUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLDJCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsYUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxxQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsVUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxPQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLG9CQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFFBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsY0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxpQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxZQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxXQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLDhDQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsd0JBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsVUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxjQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsU0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsYUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSx1QkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxhQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLDJCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLHNCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFdBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsMEJBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsTUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSw2QkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxNQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFVBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsWUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLGFBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsY0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLE9BQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxxQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxRQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLDJCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLDhCQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsUUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxzQ0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSwwQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxTQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFlBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsVUFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxrQ0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxtQ0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSx5QkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxzQkFBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxVQUFBO01BQUE2WSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE3WSxJQUFBQSxFQUFBLFNBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsbUJBQUE7TUFBQTZZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTdZLElBQUFBLEVBQUEsT0FBQTtNQUFBNlksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBN1ksSUFBQUEsRUFBQSxPQUFB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LE1BQUFBLENBQUFJLEtBQUFBLEdBQUFBLEtBQUE7RUFBQSxDQUFBO0VBR0EsTUFBQUQsZ0JBQUFBLEdBQUFoakIsSUFBQUEsSUFBQUksQ0FBQUEsQ0FBQXdoQixPQUFBQSxDQUFBamhCLE1BQUFBLENBQUFpaUIsT0FBQUEsQ0FBQWhnQixNQUFBQSxDQUFBaWdCLE1BQUFBLElBQUE3aUIsSUFBQUEsS0FBQTZpQixNQUFBQSxDQUFBN2lCLElBQUFBLENBQUFBLENBQUFnRyxHQUFBQSxDQUFBNmMsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQTdpQixJQUFBQSxDQUFBQSxDQUFBQSxDQUFBdEcsS0FBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxDQUFBO0VBRUFpSCxNQUFBQSxDQUFBdWlCLFFBQUFBLEdBQUEsTUFBQSxHQUFBdmlCLE1BQUFBLENBQUFpaUIsT0FBQUEsQ0FBQWhnQixNQUFBQSxDQUFBaWdCLE1BQUFBLElBQUFBLE1BQUFBLENBQUE3aUIsSUFBQUEsS0FBQTZpQixNQUFBQSxDQUFBSSxLQUFBQSxDQUFBQSxDQUFBbnBCLE1BQUFBLElBQUE2RyxNQUFBQSxDQUFBaWlCLE9BQUFBLENBQUE5b0IsTUFBQUEsRUFBQUEsRUFFQTZHLE1BQUFBLENBQUF3aUIsY0FBQUEsR0FBQSxNQUFBeGlCLE1BQUFBLENBQUFpaUIsT0FBQUEsQ0FBQWhnQixNQUFBQSxDQUFBaWdCLE1BQUFBLElBQUFBLE1BQUFBLENBQUFJLEtBQUFBLENBQUFBLENBQUFucEIsTUFBQUEsS0FBQTZHLE1BQUFBLENBQUFpaUIsT0FBQUEsQ0FBQTlvQixNQUNBO0FBQUEsQ0FBQSxDQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAgPSBbXHJcbiAge1xyXG4gICAgYmFzZTogXCJBXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDFcXHUyNEI2XFx1RkYyMVxcdTAwQzBcXHUwMEMxXFx1MDBDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHUwMEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHUwMEM0XFx1MDFERVxcdTFFQTJcXHUwMEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFBXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFFXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwQzZcXHUwMUZDXFx1MDFFMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQU9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOFxcdUE3M0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0MlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJDXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDNcXHUyNEI4XFx1RkYyM1xcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMEM3XFx1MUUwOFxcdTAxODdcXHUwMjNCXFx1QTczRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ0XFx1MjRCOVxcdUZGMjRcXHUxRTBBXFx1MDEwRVxcdTFFMENcXHUxRTEwXFx1MUUxMlxcdTFFMEVcXHUwMTEwXFx1MDE4QlxcdTAxOEFcXHUwMTg5XFx1QTc3OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMVxcdTAxQzRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjJcXHUwMUM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJFXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDVcXHUyNEJBXFx1RkYyNVxcdTAwQzhcXHUwMEM5XFx1MDBDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHUwMENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ2XFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0N1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJIXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJJXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDlcXHUyNEJFXFx1RkYyOVxcdTAwQ0NcXHUwMENEXFx1MDBDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHUwMENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJKXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEFcXHUyNEJGXFx1RkYyQVxcdTAxMzRcXHUwMjQ4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJLXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNENcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTEpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDREXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRFXFx1MjRDM1xcdUZGMkVcXHUwMUY4XFx1MDE0M1xcdTAwRDFcXHUxRTQ0XFx1MDE0N1xcdTFFNDZcXHUwMTQ1XFx1MUU0QVxcdTFFNDhcXHUwMjIwXFx1MDE5RFxcdUE3OTBcXHVBN0E0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNEZcXHUyNEM0XFx1RkYyRlxcdTAwRDJcXHUwMEQzXFx1MDBENFxcdTFFRDJcXHUxRUQwXFx1MUVENlxcdTFFRDRcXHUwMEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx1MDBENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHUwMEQ4XFx1MDFGRVxcdTAxODZcXHUwMTlGXFx1QTc0QVxcdUE3NENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9JXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9PXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NEVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9VXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAyMjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlBcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1MFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUxXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlJcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1MlxcdTI0QzdcXHVGRjMyXFx1MDE1NFxcdTFFNThcXHUwMTU4XFx1MDIxMFxcdTAyMTJcXHUxRTVBXFx1MUU1Q1xcdTAxNTZcXHUxRTVFXFx1MDI0Q1xcdTJDNjRcXHVBNzVBXFx1QTdBNlxcdUE3ODJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlNcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1M1xcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJUWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJVXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTVcXHUyNENBXFx1RkYzNVxcdTAwRDlcXHUwMERBXFx1MDBEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx1MDBEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIldcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1N1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU4XFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU5XFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx1MDBERFxcdTAxNzZcXHUxRUY4XFx1MDIzMlxcdTFFOEVcXHUwMTc4XFx1MUVGNlxcdTFFRjRcXHUwMUIzXFx1MDI0RVxcdTFFRkVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1QVxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2MVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxcdTAwRTBcXHUwMEUxXFx1MDBFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHUwMEUzXFx1MDEwMVxcdTAxMDNcXHUxRUIxXFx1MUVBRlxcdTFFQjVcXHUxRUIzXFx1MDIyN1xcdTAxRTFcXHUwMEU0XFx1MDFERlxcdTFFQTNcXHUwMEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFhXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFlXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwRTZcXHUwMUZEXFx1MDFFM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYW9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOVxcdUE3M0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0RdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2MlxcdTI0RDFcXHVGRjQyXFx1MUUwM1xcdTFFMDVcXHUxRTA3XFx1MDE4MFxcdTAxODNcXHUwMjUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJjXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjNcXHUyNEQyXFx1RkY0M1xcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHUwMEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjNcXHUwMUM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJlXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjVcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJnXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjdcXHUyNEQ2XFx1RkY0N1xcdTAxRjVcXHUwMTFEXFx1MUUyMVxcdTAxMUZcXHUwMTIxXFx1MDFFN1xcdTAxMjNcXHUwMUU1XFx1MDI2MFxcdUE3QTFcXHUxRDc5XFx1QTc3Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY4XFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImh2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxOTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImlcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2OVxcdTI0RDhcXHVGRjQ5XFx1MDBFQ1xcdTAwRURcXHUwMEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx1MDBFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QVxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJrXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkJcXHUyNERBXFx1RkY0QlxcdTFFMzFcXHUwMUU5XFx1MUUzM1xcdTAxMzdcXHUxRTM1XFx1MDE5OVxcdTJDNkFcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBN0EzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJsXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkNcXHUyNERCXFx1RkY0Q1xcdTAxNDBcXHUwMTNBXFx1MDEzRVxcdTFFMzdcXHUxRTM5XFx1MDEzQ1xcdTFFM0RcXHUxRTNCXFx1MDE3RlxcdTAxNDJcXHUwMTlBXFx1MDI2QlxcdTJDNjFcXHVBNzQ5XFx1QTc4MVxcdUE3NDddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm1cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2RFxcdTI0RENcXHVGRjREXFx1MUUzRlxcdTFFNDFcXHUxRTQzXFx1MDI3MVxcdTAyNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RVxcdTI0RERcXHVGRjRFXFx1MDFGOVxcdTAxNDRcXHUwMEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RlxcdTI0REVcXHVGRjRGXFx1MDBGMlxcdTAwRjNcXHUwMEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxcdTAwRjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHUwMEY2XFx1MDIyQlxcdTFFQ0ZcXHUwMTUxXFx1MDFEMlxcdTAyMERcXHUwMjBGXFx1MDFBMVxcdTFFRERcXHUxRURCXFx1MUVFMVxcdTFFREZcXHUxRUUzXFx1MUVDRFxcdTFFRDlcXHUwMUVCXFx1MDFFRFxcdTAwRjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib2lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib3VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib29cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwicFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDcwXFx1MjRERlxcdUZGNTBcXHUxRTU1XFx1MUU1N1xcdTAxQTVcXHUxRDdEXFx1QTc1MVxcdUE3NTNcXHVBNzU1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJxXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiclwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDcyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwic1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDczXFx1MjRFMlxcdUZGNTNcXHUwMERGXFx1MDE1QlxcdTFFNjVcXHUwMTVEXFx1MUU2MVxcdTAxNjFcXHUxRTY3XFx1MUU2M1xcdTFFNjlcXHUwMjE5XFx1MDE1RlxcdTAyM0ZcXHVBN0E5XFx1QTc4NVxcdTFFOUJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTcyOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDc1XFx1MjRFNFxcdUZGNTVcXHUwMEY5XFx1MDBGQVxcdTAwRkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxcdTAwRkNcXHUwMURDXFx1MDFEOFxcdTAxRDZcXHUwMURBXFx1MUVFN1xcdTAxNkZcXHUwMTcxXFx1MDFENFxcdTAyMTVcXHUwMjE3XFx1MDFCMFxcdTFFRUJcXHUxRUU5XFx1MUVFRlxcdTFFRURcXHUxRUYxXFx1MUVFNVxcdTFFNzNcXHUwMTczXFx1MUU3N1xcdTFFNzVcXHUwMjg5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2eVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzYxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ3XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzdcXHUyNEU2XFx1RkY1N1xcdTFFODFcXHUxRTgzXFx1MDE3NVxcdTFFODdcXHUxRTg1XFx1MUU5OFxcdTFFODlcXHUyQzczXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ4XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzhcXHUyNEU3XFx1RkY1OFxcdTFFOEJcXHUxRThEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzlcXHUyNEU4XFx1RkY1OVxcdTFFRjNcXHUwMEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxcdTAwRkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3QVxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjNdL2csXHJcbiAgfSxcclxuXTtcclxudmFyIGRvbWFpbnMgPSBbXHJcbiAgXCIuY29tXCIsXHJcbiAgXCIub3JnXCIsXHJcbiAgXCIubmV0XCIsXHJcbiAgXCIuYWNcIixcclxuICBcIi5hZFwiLFxyXG4gIFwiLmFlXCIsXHJcbiAgXCIuYWZcIixcclxuICBcIi5hZ1wiLFxyXG4gIFwiLmFpXCIsXHJcbiAgXCIuYWxcIixcclxuICBcIi5hbVwiLFxyXG4gIFwiLmFvXCIsXHJcbiAgXCIuYXFcIixcclxuICBcIi5hclwiLFxyXG4gIFwiLmFzXCIsXHJcbiAgXCIuYXRcIixcclxuICBcIi5hdVwiLFxyXG4gIFwiLmF3XCIsXHJcbiAgXCIuYXhcIixcclxuICBcIi5helwiLFxyXG4gIFwiLmJhXCIsXHJcbiAgXCIuYmJcIixcclxuICBcIi5iZFwiLFxyXG4gIFwiLmJlXCIsXHJcbiAgXCIuYmZcIixcclxuICBcIi5iZ1wiLFxyXG4gIFwiLmJoXCIsXHJcbiAgXCIuYmlcIixcclxuICBcIi5ialwiLFxyXG4gIFwiLmJtXCIsXHJcbiAgXCIuYm5cIixcclxuICBcIi5ib1wiLFxyXG4gIFwiLmJxXCIsXHJcbiAgXCIuYnJcIixcclxuICBcIi5ic1wiLFxyXG4gIFwiLmJ0XCIsXHJcbiAgXCIuYndcIixcclxuICBcIi5ieVwiLFxyXG4gIFwiLmJ6XCIsXHJcbiAgXCIuY2FcIixcclxuICBcIi5jY1wiLFxyXG4gIFwiLmNkXCIsXHJcbiAgXCIuY2ZcIixcclxuICBcIi5jZ1wiLFxyXG4gIFwiLmNoXCIsXHJcbiAgXCIuY2lcIixcclxuICBcIi5ja1wiLFxyXG4gIFwiLmNsXCIsXHJcbiAgXCIuY21cIixcclxuICBcIi5jblwiLFxyXG4gIFwiLmNvXCIsXHJcbiAgXCIuY3JcIixcclxuICBcIi5jdVwiLFxyXG4gIFwiLmN2XCIsXHJcbiAgXCIuY3dcIixcclxuICBcIi5jeFwiLFxyXG4gIFwiLmN5XCIsXHJcbiAgXCIuY3pcIixcclxuICBcIi5kZVwiLFxyXG4gIFwiLmRqXCIsXHJcbiAgXCIuZGtcIixcclxuICBcIi5kbVwiLFxyXG4gIFwiLmRvXCIsXHJcbiAgXCIuZHpcIixcclxuICBcIi5lY1wiLFxyXG4gIFwiLmVlXCIsXHJcbiAgXCIuZWdcIixcclxuICBcIi5laFwiLFxyXG4gIFwiLmVyXCIsXHJcbiAgXCIuZXNcIixcclxuICBcIi5ldFwiLFxyXG4gIFwiLmV1XCIsXHJcbiAgXCIuZmlcIixcclxuICBcIi5malwiLFxyXG4gIFwiLmZrXCIsXHJcbiAgXCIuZm1cIixcclxuICBcIi5mb1wiLFxyXG4gIFwiLmZyXCIsXHJcbiAgXCIuZ2FcIixcclxuICBcIi5nZFwiLFxyXG4gIFwiLmdlXCIsXHJcbiAgXCIuZ2ZcIixcclxuICBcIi5nZ1wiLFxyXG4gIFwiLmdoXCIsXHJcbiAgXCIuZ2lcIixcclxuICBcIi5nbFwiLFxyXG4gIFwiLmdtXCIsXHJcbiAgXCIuZ25cIixcclxuICBcIi5ncFwiLFxyXG4gIFwiLmdxXCIsXHJcbiAgXCIuZ3JcIixcclxuICBcIi5nc1wiLFxyXG4gIFwiLmd0XCIsXHJcbiAgXCIuZ3VcIixcclxuICBcIi5nd1wiLFxyXG4gIFwiLmd5XCIsXHJcbiAgXCIuaGtcIixcclxuICBcIi5obVwiLFxyXG4gIFwiLmhuXCIsXHJcbiAgXCIuaHJcIixcclxuICBcIi5odFwiLFxyXG4gIFwiLmh1XCIsXHJcbiAgXCIuaWRcIixcclxuICBcIi5pZVwiLFxyXG4gIFwiLmlsXCIsXHJcbiAgXCIuaW1cIixcclxuICBcIi5pblwiLFxyXG4gIFwiLmlvXCIsXHJcbiAgXCIuaXFcIixcclxuICBcIi5pclwiLFxyXG4gIFwiLmlzXCIsXHJcbiAgXCIuaXRcIixcclxuICBcIi5qZVwiLFxyXG4gIFwiLmptXCIsXHJcbiAgXCIuam9cIixcclxuICBcIi5qcFwiLFxyXG4gIFwiLmtlXCIsXHJcbiAgXCIua2dcIixcclxuICBcIi5raFwiLFxyXG4gIFwiLmtpXCIsXHJcbiAgXCIua21cIixcclxuICBcIi5rblwiLFxyXG4gIFwiLmtwXCIsXHJcbiAgXCIua3JcIixcclxuICBcIi5rd1wiLFxyXG4gIFwiLmt5XCIsXHJcbiAgXCIua3pcIixcclxuICBcIi5sYVwiLFxyXG4gIFwiLmxiXCIsXHJcbiAgXCIubGNcIixcclxuICBcIi5saVwiLFxyXG4gIFwiLmxrXCIsXHJcbiAgXCIubHJcIixcclxuICBcIi5sc1wiLFxyXG4gIFwiLmx0XCIsXHJcbiAgXCIubHVcIixcclxuICBcIi5sdlwiLFxyXG4gIFwiLmx5XCIsXHJcbiAgXCIubWFcIixcclxuICBcIi5tY1wiLFxyXG4gIFwiLm1kXCIsXHJcbiAgXCIubWVcIixcclxuICBcIi5tZ1wiLFxyXG4gIFwiLm1oXCIsXHJcbiAgXCIubWtcIixcclxuICBcIi5tbFwiLFxyXG4gIFwiLm1tXCIsXHJcbiAgXCIubW5cIixcclxuICBcIi5tb1wiLFxyXG4gIFwiLm1wXCIsXHJcbiAgXCIubXFcIixcclxuICBcIi5tclwiLFxyXG4gIFwiLm1zXCIsXHJcbiAgXCIubXRcIixcclxuICBcIi5tdVwiLFxyXG4gIFwiLm12XCIsXHJcbiAgXCIubXdcIixcclxuICBcIi5teFwiLFxyXG4gIFwiLm15XCIsXHJcbiAgXCIubXpcIixcclxuICBcIi5uYVwiLFxyXG4gIFwiLm5jXCIsXHJcbiAgXCIubmVcIixcclxuICBcIi5uZlwiLFxyXG4gIFwiLm5nXCIsXHJcbiAgXCIubmlcIixcclxuICBcIi5ubFwiLFxyXG4gIFwiLm5vXCIsXHJcbiAgXCIubnBcIixcclxuICBcIi5uclwiLFxyXG4gIFwiLm51XCIsXHJcbiAgXCIubnpcIixcclxuICBcIi5vbVwiLFxyXG4gIFwiLnBhXCIsXHJcbiAgXCIucGVcIixcclxuICBcIi5wZlwiLFxyXG4gIFwiLnBnXCIsXHJcbiAgXCIucGhcIixcclxuICBcIi5wa1wiLFxyXG4gIFwiLnBsXCIsXHJcbiAgXCIucG1cIixcclxuICBcIi5wblwiLFxyXG4gIFwiLnByXCIsXHJcbiAgXCIucHNcIixcclxuICBcIi5wdFwiLFxyXG4gIFwiLnB3XCIsXHJcbiAgXCIucHlcIixcclxuICBcIi5xYVwiLFxyXG4gIFwiLnJlXCIsXHJcbiAgXCIucm9cIixcclxuICBcIi5yc1wiLFxyXG4gIFwiLnJ1XCIsXHJcbiAgXCIucndcIixcclxuICBcIi5zYVwiLFxyXG4gIFwiLnNiXCIsXHJcbiAgXCIuc2NcIixcclxuICBcIi5zZFwiLFxyXG4gIFwiLnNlXCIsXHJcbiAgXCIuc2dcIixcclxuICBcIi5zaFwiLFxyXG4gIFwiLnNpXCIsXHJcbiAgXCIuc2tcIixcclxuICBcIi5zbFwiLFxyXG4gIFwiLnNtXCIsXHJcbiAgXCIuc25cIixcclxuICBcIi5zb1wiLFxyXG4gIFwiLnNyXCIsXHJcbiAgXCIuc3NcIixcclxuICBcIi5zdFwiLFxyXG4gIFwiLnN1XCIsXHJcbiAgXCIuc3ZcIixcclxuICBcIi5zeFwiLFxyXG4gIFwiLnN5XCIsXHJcbiAgXCIuc3pcIixcclxuICBcIi50Y1wiLFxyXG4gIFwiLnRkXCIsXHJcbiAgXCIudGZcIixcclxuICBcIi50Z1wiLFxyXG4gIFwiLnRoXCIsXHJcbiAgXCIudGpcIixcclxuICBcIi50a1wiLFxyXG4gIFwiLnRsXCIsXHJcbiAgXCIudG1cIixcclxuICBcIi50blwiLFxyXG4gIFwiLnRvXCIsXHJcbiAgXCIudHJcIixcclxuICBcIi50dFwiLFxyXG4gIFwiLnR2XCIsXHJcbiAgXCIudHdcIixcclxuICBcIi50elwiLFxyXG4gIFwiLnVhXCIsXHJcbiAgXCIudWdcIixcclxuICBcIi51a1wiLFxyXG4gIFwiLnVzXCIsXHJcbiAgXCIudXlcIixcclxuICBcIi51elwiLFxyXG4gIFwiLnZhXCIsXHJcbiAgXCIudmNcIixcclxuICBcIi52ZVwiLFxyXG4gIFwiLnZnXCIsXHJcbiAgXCIudmlcIixcclxuICBcIi52blwiLFxyXG4gIFwiLnZ1XCIsXHJcbiAgXCIud2ZcIixcclxuICBcIi53c1wiLFxyXG4gIFwiLnllXCIsXHJcbiAgXCIueXRcIixcclxuICBcIi56YVwiLFxyXG4gIFwiLnptXCIsXHJcbiAgXCIuendcIixcclxuXTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZURpYWNyaXRpY3NcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwLnJlZHVjZSgocmVzdWx0LCBsZXR0ZXIpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKGxldHRlci5sZXR0ZXJzLCBsZXR0ZXIuYmFzZSk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IFNQRUNJQUxfQ0hBUkFDVEVSUyA9IFwiXFxcXFxcXFwvICE/QCMkJV4mKigpXys6Lnt9LDtcXFxcLSdgYOKAmeKAmFxcXCJcIjtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbJHtTUEVDSUFMX0NIQVJBQ1RFUlN9XWAsIFwiZ2lcIiksIFwiXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlQWxsQnV0TGV0dGVyc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlKCkucmVtb3ZlRGlhY3JpdGljcygpLnJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzKCk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjb25jZWFsXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGV4dHJhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFteJHtTUEVDSUFMX0NIQVJBQ1RFUlN9JHtleHRyYX1dYCwgXCJnaVwiKSwgXCLigY5cIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjYXBpdGFsaXplXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnNsaWNlKDEpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlSFRNTFwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoXCI+XCIsIFwiXFx1MjI3QlwiKS5yZXBsYWNlKFwiPFwiLCBcIlxcdTIyN0FcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJhbmdsZUJyYWNrZXRzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShcIjxcIiwgXCImbHQ7XCIpLnJlcGxhY2UoXCI+XCIsIFwiJmd0O1wiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlcGxhY2VBcnJheVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChmaW5kLCByZXBsYWNlKSB7XHJcbiAgICB2YXIgcmVwbGFjZVN0cmluZyA9IHRoaXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcmVwbGFjZVN0cmluZyA9IHJlcGxhY2VTdHJpbmcucmVwbGFjZShmaW5kW2ldLCByZXBsYWNlW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXBsYWNlU3RyaW5nO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwibWFza1VSTHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlQXJyYXkoW1wiaHR0cHM6Ly9cIiwgXCJodHRwOi8vXCJdLCBcIm5vcGU6Ly9cIikucmVwbGFjZUFycmF5KGRvbWFpbnMsIFwiLm5vcGVcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJtYWtlUmVhZGFibGVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VQZXJjZW50YWdlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGRlY2ltYWxzKSB7XHJcbiAgICBpZiAoIWRlY2ltYWxzKSBkZWNpbWFscyA9IDI7XHJcbiAgICByZXR1cm4gYCR7KHRoaXMgKiAxMDApLnRvRml4ZWQoZGVjaW1hbHMpfSVgO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc29ydE9iamVjdCA9IChvYmosIGRpcmVjdGlvbikgPT4ge1xyXG4gIGxldCBhcnIgPSBbXTtcclxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgIGFyci5wdXNoKFtrZXksIG9ialtrZXldXSk7XHJcbiAgfVxyXG4gIGFyci5zb3J0KChhLCBiKSA9PiAoZGlyZWN0aW9uID8gYVsxXSAtIGJbMV0gOiBiWzFdIC0gYVsxXSkpO1xyXG4gIGxldCBvYmpTb3J0ZWQgPSB7fTtcclxuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4gKG9ialNvcnRlZFtpdGVtWzBdXSA9IGl0ZW1bMV0pKTtcclxuICAvL2Fyci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgYS52YWx1ZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi52YWx1ZS50b0xvd2VyQ2FzZSgpKTsgfSk7IC8vdXNlIHRoaXMgdG8gc29ydCBhcyBzdHJpbmdzXHJcbiAgcmV0dXJuIG9ialNvcnRlZDsgLy8gcmV0dXJucyBhcnJheVxyXG59O1xyXG4iLCIvKlxyXG4kID0galF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbnZhciBib290c3RyYXAgPSByZXF1aXJlKCdib290c3RyYXAnKTtcclxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XHJcbnZhciBhbmd1bGFyU2FuaXRpemUgPSByZXF1aXJlKCdhbmd1bGFyLXNhbml0aXplJyk7XHJcbnZhciBhbmd1bGFyQW5pbWF0ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItYW5pbWF0ZScpO1xyXG4qL1xyXG5hbmd1bGFyLm1vZHVsZShcImFwcFwiLCBbXHJcbiAgXCJ1aS5yb3V0ZXJcIixcclxuICBcInVpLmJvb3RzdHJhcFwiLFxyXG4gIFwibmdBbmltYXRlXCIsXHJcbiAgXCJuZ1Nhbml0aXplXCIsXHJcbiAgXCJuZ0RyYWdEcm9wXCIsXHJcbiAgXCJuZ1RhZ3NJbnB1dFwiLFxyXG4gIFwidmNSZWNhcHRjaGFcIixcclxuICBcImNoYXJ0LmpzXCIsXHJcbiAgXCJ0Yy5jaGFydGpzXCIsXHJcbiAgXCJpbmZpbml0ZS1zY3JvbGxcIixcclxuXSk7XHJcbiIsImFuZ3VsYXJcclxuXHQubW9kdWxlKCdhcHAnKVxyXG5cdC5jb25maWcoZnVuY3Rpb24gKFxyXG5cdFx0JHN0YXRlUHJvdmlkZXIsXHJcblx0XHQkdXJsUm91dGVyUHJvdmlkZXIsXHJcblx0XHQkdXJsU2VydmljZVByb3ZpZGVyLFxyXG5cdFx0JGxvY2F0aW9uUHJvdmlkZXJcclxuXHQpIHtcclxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9ob21lJyk7XHJcblx0XHQkdXJsU2VydmljZVByb3ZpZGVyLmNvbmZpZy5zdHJpY3RNb2RlKGZhbHNlKTtcclxuXHJcblx0XHQkc3RhdGVQcm92aWRlclxyXG5cdFx0XHQuc3RhdGUoJ2hvbWUnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2hvbWUnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL2hvbWUuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgncG9saWN5Jywge1xyXG5cdFx0XHRcdHVybDogJy9wb2xpY3knLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3BvbGljeS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdwcmludCcsIHtcclxuXHRcdFx0XHR1cmw6ICcvcHJpbnQnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3ByaW50Lmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ2V4cGVyaWVuY2UnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2V4cGVyaWVuY2UnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdFeHBlcmllbmNlQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvZXhwZXJpZW5jZS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdza2lsbHMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3NraWxscycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1NraWxsc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3NraWxscy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdob2JiaWVzJywge1xyXG5cdFx0XHRcdHVybDogJy9ob2JiaWVzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnSG9iYmllc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL2hvYmJpZXMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnY29udGFjdCcsIHtcclxuXHRcdFx0XHR1cmw6ICcvY29udGFjdCcsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ0NvbnRhY3RDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9jb250YWN0Lmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3dvcmtvdXQnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3dvcmtvdXQnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdXb3Jrb3V0Q3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvd29ya291dC5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdwb3N0cycsIHtcclxuXHRcdFx0XHR1cmw6ICcvcG9zdHMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdQb3N0c0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL3Bvc3RzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3Byb2ZpbGUnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3Byb2ZpbGUnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdQcm9maWxlQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvcHJvZmlsZS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdsaXN0cycsIHtcclxuXHRcdFx0XHR1cmw6ICcvbGlzdHMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdMaXN0c0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnbGlzdHMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgncHJpb3JpdGl6ZScsIHtcclxuXHRcdFx0XHR1cmw6ICcvcHJpb3JpdGl6ZScsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1ByaW9yaXRpemVDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3ByaW9yaXRpemUuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnYnViYmxlcycsIHtcclxuXHRcdFx0XHR1cmw6ICcvYnViYmxlcycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ0J1YmJsZXNDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2J1YmJsZXMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnYXN0ZXJvaWRzJywge1xyXG5cdFx0XHRcdHVybDogJy9hc3Rlcm9pZHMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdBc3Rlcm9pZHNDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ2FzdGVyb2lkcy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdsZW1taW5ncycsIHtcclxuXHRcdFx0XHR1cmw6ICcvbGVtbWluZ3MnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdMZW1taW5nc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnbGVtbWluZ3MuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnYm90cycsIHtcclxuXHRcdFx0XHR1cmw6ICcvYm90cycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1RlblRoaW5nc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAndGVudGhpbmdzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3RlbnRoaW5ncycsIHtcclxuXHRcdFx0XHR1cmw6ICcvdGVudGhpbmdzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnVGVuVGhpbmdzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW50aGluZ3MuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgndGVudGhpbmdzLWFkbWluJywge1xyXG5cdFx0XHRcdHVybDogJy90ZW50aGluZ3MtYWRtaW4nLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdUZW5UaGluZ3NBZG1pbkN0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAndGVudGhpbmdzLWFkbWluLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3RlbnRoaW5ncy1jdXJhdGUnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3RlbnRoaW5ncy1jdXJhdGUnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdUZW5UaGluZ3NDdXJhdGVDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbnRoaW5ncy1jdXJhdGUuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgndGVudGhpbmdzLWdhbWUnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3RlbnRoaW5ncy86Z2FtZScsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1RlblRoaW5nc0dhbWVDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbnRoaW5ncy1nYW1lLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3F1aXotZ29vZ2xlJywge1xyXG5cdFx0XHRcdHVybDogJy9nb29nbGUnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdRdWl6R29vZ2xlQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdxdWl6emVzL2dvb2dsZS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdxdWl6LWxvZ29zJywge1xyXG5cdFx0XHRcdHVybDogJy9sb2dvcycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1F1aXpMb2dvc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAncXVpenplcy9sb2dvcy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdxdWl6LWFuaW1hbHMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2FuaW1hbHMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdRdWl6QW5pbWFsc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAncXVpenplcy9hbmltYWxzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3F1aXotc2tlbGV0b25zJywge1xyXG5cdFx0XHRcdHVybDogJy9za2VsZXRvbnMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdRdWl6U2tlbGV0b25zQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdxdWl6emVzL3NrZWxldG9ucy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdxdWl6LW1vdmllcycsIHtcclxuXHRcdFx0XHR1cmw6ICcvbW92aWVzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnUXVpek1vdmllc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAncXVpenplcy9tb3ZpZXMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnY2hhcmFkZXMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2NoYXJhZGVzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnQ2hhcmFkZXNDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9jaGFyYWRlcy5odG1sJyxcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0JGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHtcclxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcclxuXHRcdFx0cmVxdWlyZUJhc2U6IGZhbHNlLFxyXG5cdFx0fSk7XHJcblx0fSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnV2ViU29ja2V0U3ZjJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICR0aW1lb3V0KSB7XHJcbiAgZnVuY3Rpb24gd2Vic29ja2V0SG9zdCgpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonKSB7XHJcbiAgICAgIHJldHVybiBcIndzczovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJ3czovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgY29ubmVjdGlvbjtcclxuICB2YXIgY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KHdlYnNvY2tldEhvc3QoKSk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY29ubmVjdGVkJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY2xvc2VkLiBSZWNvbm5lY3RpbmcuLi4nKTtcclxuICAgICAgJHRpbWVvdXQoY29ubmVjdCwgMTAwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlICsgXCIgLSBTdGF0ZTogXCIgKyBjb25uZWN0aW9uLnJlYWR5U3RhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBwYXlsb2FkID0gSlNPTi5wYXJzZShlLmRhdGEpO1xyXG4gICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3dzOicgKyBwYXlsb2FkLnRvcGljLCBwYXlsb2FkLmRhdGEpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICB0aGlzLnNlbmQgPSBmdW5jdGlvbiAodG9waWMsIGRhdGEpIHtcclxuICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoe3RvcGljOiB0b3BpYywgZGF0YTogZGF0YX0pO1xyXG4gICAgY29ubmVjdGlvbi5zZW5kKGpzb24pO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuY29ubmVjdCA9IGNvbm5lY3Q7XHJcblxyXG59KS5ydW4oZnVuY3Rpb24gKFdlYlNvY2tldFN2Yykge1xyXG4gIFdlYlNvY2tldFN2Yy5jb25uZWN0KCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5kaXJlY3RpdmUoXCJjbGlja091dHNpZGVcIiwgZnVuY3Rpb24gKCRkb2N1bWVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICByZXN0cmljdDogXCJBXCIsXHJcbiAgICBzY29wZToge1xyXG4gICAgICBjbGlja091dHNpZGU6IFwiJlwiLFxyXG4gICAgfSxcclxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgJGRvY3VtZW50Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZWwgIT09IGUudGFyZ2V0ICYmICFlbFswXS5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vc2NvcGUuJHBhcmVudC5zZXRTZWxlY3RlZExpc3QoKTtcclxuICAgICAgICAgICAgc2NvcGUuJGV2YWwoc2NvcGUuY2xpY2tPdXRzaWRlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuXHQuZGlyZWN0aXZlKCdoZWFkJywgW1xyXG5cdFx0JyRyb290U2NvcGUnLFxyXG5cdFx0JyRzdGF0ZScsXHJcblx0XHQnJGNvbXBpbGUnLFxyXG5cdFx0JyRpbnRlcnBvbGF0ZScsXHJcblx0XHRmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkY29tcGlsZSwgJGludGVycG9sYXRlKSB7XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGUgPSBmdW5jdGlvbiBnZXRTdHlsZSh0ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdHlsZSA9IHtcclxuXHRcdFx0XHRcdGhyZWY6IHRlbXBsYXRlU3R5bGVVcmwsXHJcblx0XHRcdFx0XHRyZWw6ICdzdHlsZXNoZWV0J1xyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmIChzdHlsZS5ocmVmLm1hdGNoKC9cXC5sZXNzJC8pKSB7XHJcblx0XHRcdFx0XHRzdHlsZS5yZWwgPSAnc3R5bGVzaGVldC9sZXNzJztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBzdHlsZTtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gZ2V0U3R5bGVzKHN0YXRlKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdGF0ZXMgPSB7fTtcclxuXHJcblx0XHRcdFx0Ly9DaGVjayBzdGF0ZSBmb3Igc3R5bGVzXHJcblx0XHRcdFx0d2hpbGUgKHN0YXRlLm5hbWUgIT09ICcnKSB7XHJcblx0XHRcdFx0XHR2YXIgcGFyZW50ID0gJHN0YXRlLmdldCgnXicsIHN0YXRlKTtcclxuXHJcblx0XHRcdFx0XHQvL0luaXRpYXRlIG91ciB2aWV3IGxpc3RcclxuXHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXSkge1xyXG5cdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdID0ge307XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB0aGUgdGVtcGxhdGVTdHlsZVxyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSkge1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1bJyddID0gZ2V0U3R5bGUoc3RhdGUudGVtcGxhdGVTdHlsZVVybCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NoZWNrIHZpZXdzXHJcblx0XHRcdFx0XHRpZiAoc3RhdGUudmlld3MpIHtcclxuXHRcdFx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlLnZpZXdzLCBmdW5jdGlvbiAodmlldywga2V5KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgaGF2ZSBhIHN0eWxlXHJcblx0XHRcdFx0XHRcdFx0aWYgKCF2aWV3LnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgYXJlIHRhcmdldGluZyBzb21lIHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdGlmICgoa2V5ID0ga2V5LnNwbGl0KCdAJykpWzFdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgc3R5bGVzIGZvciB0aGF0IHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXSA9IHt9O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIHNvbWUgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXVtrZXlbMF1dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlc1trZXlbMV1dW2tleVswXV0gPSBnZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIG91ciBwYXJlbnQncyB2aWV3XHJcblx0XHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ29udGludWUgd2l0aCB0aGUgcGFyZW50XHJcblx0XHRcdFx0XHRzdGF0ZSA9IHBhcmVudDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vRmxhdHRlbiB0aGUgbGlzdFxyXG5cdFx0XHRcdHZhciBmbGF0ID0gW107XHJcblx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlcywgZnVuY3Rpb24gKHZpZXdzKSB7XHJcblxyXG5cdFx0XHRcdFx0Xy5mb3JFYWNoKHZpZXdzLCBmdW5jdGlvbiAoc3R5bGUpIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghXy5pbmNsdWRlcyhmbGF0LCBzdHlsZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRmbGF0LnB1c2goc3R5bGUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvL1JldmVyc2UgaXQgc28gd2UgaGF2ZSBhIHByb3BlciBoaWVyYXJjaHlcclxuXHRcdFx0XHRmbGF0LnJldmVyc2UoKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGZsYXQ7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0XHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSkge1xyXG5cclxuXHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gW107XHJcblxyXG5cdFx0XHRcdFx0dmFyIGh0bWwgPSAnPGxpbmsgbmctYXR0ci1yZWw9XCJ7e3N0eWxlLnJlbH19XCIgbmctcmVwZWF0PVwic3R5bGUgaW4gdGVtcGxhdGVTdHlsZXNcIiBuZy1ocmVmPVwie3tzdHlsZS5ocmVmfX1cIj4nO1xyXG5cclxuXHRcdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xce1xcey9nLCAkaW50ZXJwb2xhdGUuc3RhcnRTeW1ib2woKSk7XHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXH1cXH0vZywgJGludGVycG9sYXRlLmVuZFN5bWJvbCgpKTtcclxuXHJcblx0XHRcdFx0XHRlbGVtLmFwcGVuZCgkY29tcGlsZShodG1sKShzY29wZSkpO1xyXG5cclxuXHRcdFx0XHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykge1xyXG5cclxuXHRcdFx0XHRcdFx0c2NvcGUudGVtcGxhdGVTdHlsZXMgPSBnZXRTdHlsZXModG9TdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHR9XHJcblx0XSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJBcHBDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgTGFuZ3VhZ2VTdmMsIFVzZXJTdmMpIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiJWNZb3Ugc25lYWt5IGJ1Z2dlciFcIixcclxuICAgIFwiZm9udDogMmVtIHNhbnMtc2VyaWY7IGNvbG9yOiBEb2RnZXJCbHVlOyB0ZXh0LXNoYWRvdzogMnB4IDAgMCAjNDQ0LCAtMnB4IDAgMCAjNDQ0LCAwIDJweCAwICM0NDQsIDAgLTJweCAwICM0NDQsIDFweCAxcHggIzQ0NCwgLTFweCAtMXB4IDAgIzQ0NCwgMXB4IC0xcHggMCAjNDQ0LCAtMXB4IDFweCAwICM0NDQ7XCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiSSdtIGdsYWQgeW91J3JlIGN1cmlvdXMgd2hldGhlciBzb21ldGhpbmcgaXMgcG9wcGluZyB1cCBpbiBoZXJlLiBJJ20gYSBiaXQgb2YgYSBzdGlja2xlciB3aGVuIGl0IGNvbWVzIHRvIG1lc3NhZ2VzIGluIHRoZSBjb25zb2xlIHNvIEkgdHJ5IHRvIG1ha2Ugc3VyZSBvbmx5IHRoaW5ncyBJIHdhbnQgYXJlIHZpc2libGUuIFRoYXQgYmVpbmcgc2FpZCwgaWYgdGhlcmUgaXMgYSBiaWcgZXJyb3IgaGVyZSwgSSB3b3VsZCByZWFsbHkgYXBwcmVjaWF0ZSB5b3UgdGVsbGluZyBtZSBzbyBJIGNhbiBnZXQgcmlkIG9mIGl0IVwiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIlRoZSBjb2RlIGZvciBteSByZXN1bWUgaXMgaG9zdGVkIG9uIEdpdGh1YiBpZiB5b3UgcmVhbGx5IHdhbnQgdG8gZ28gaW50byBhbGwgdGhpcyEgPT4gaHR0cHM6Ly9naXRodWIuY29tL0ZsYW5kZXJzQnVyZ2VyL3Jlc3VtZVwiLFxyXG4gICk7XHJcblxyXG4gIC8qXHJcbiAgICAkKGRvY3VtZW50KS5iaW5kKFwia2V5dXAga2V5ZG93blwiLCBmdW5jdGlvbihlKXtcclxuICAgICAgaWYoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PSA4MCl7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgKi9cclxuXHJcbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5sb2FkaW5nXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuY2hlY2tib3gtbWVudVwiKS5vbihcImNoYW5nZVwiLCBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KFwibGlcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIiwgdGhpcy5jaGVja2VkKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5hbGxvdy1mb2N1c1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnRoZW1lQ291bnRlciA9IDY7XHJcbiAgJHNjb3BlLnRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAkc2NvcGUueWVhciA9ICRzY29wZS50b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICRzY29wZS5yYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcclxuXHJcbiAgJHNjb3BlLmZsaXBUaGVtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5zaG93KCk7XHJcbiAgICAkKFwiLmNvbnRlbnRcIikuaGlkZSgpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgICB9LCA4MDApO1xyXG4gICAgJHNjb3BlLnRoZW1lQ291bnRlciA9ICRzY29wZS50aGVtZUNvdW50ZXIgPCA2ID8gJHNjb3BlLnRoZW1lQ291bnRlciArIDEgOiAoJHNjb3BlLnRoZW1lQ291bnRlciA9IDEpO1xyXG4gIH07XHJcblxyXG4gICQuZ2V0SlNPTihcIi9za2lsbHMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLnNraWxscyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuZW5hYmxlZDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvaG9iYmllcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuaG9iYmllcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9leHBlcmllbmNlLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5qb2JzID0gZGF0YTtcclxuICAgICRzY29wZS5qb2JzLmZvckVhY2goZnVuY3Rpb24gKGpvYikge1xyXG4gICAgICBqb2Iuc3RhcnREYXRlID0gbmV3IERhdGUoam9iLnN0YXJ0RGF0ZSk7XHJcbiAgICAgIGlmIChqb2IuZW5kRGF0ZSkgam9iLmVuZERhdGUgPSBuZXcgRGF0ZShqb2IuZW5kRGF0ZSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2NoYXJhZGVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5jaGFyYWRlcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5nZXRUaW1lU3BhbiA9IGZ1bmN0aW9uIChqb2IpIHtcclxuICAgIHJldHVybiBqb2Iuc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyAoam9iLmVuZERhdGUgPyBcIiAtIFwiICsgam9iLmVuZERhdGUuZ2V0RnVsbFllYXIoKSA6IFwiIC0gVG9kYXlcIik7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmxhbmd1YWdlcyA9IExhbmd1YWdlU3ZjLmxhbmd1YWdlcztcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBMYW5ndWFnZVN2Yy5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5ob3ZlcmRpdiA9IGZ1bmN0aW9uIChlLCBkaXZpZCkge1xyXG4gICAgdmFyIGxlZnQgPSBlLmNsaWVudFggKyBcInB4XCI7XHJcbiAgICB2YXIgdG9wID0gZS5jbGllbnRZICsgMjAgKyBcInB4XCI7XHJcblxyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdmlkKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcImxlZnRcIiwgbGVmdCk7XHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcInRvcFwiLCB0b3ApO1xyXG5cclxuICAgICQoXCIjXCIgKyBkaXZpZCkudG9nZ2xlKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikge1xyXG4gICAgVXNlclN2Yy5sb2dpbih3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGxvZ2luKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuJG9uKFwibG9naW5cIiwgZnVuY3Rpb24gKF8sIHVzZXIpIHtcclxuICAgIGxvZ2luKHVzZXIpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBsb2dpbih1c2VyKSB7XHJcbiAgICBpZiAoISRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIgPSB1c2VyLl9pZDtcclxuICAgICAgJHNjb3BlLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dpblwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICRzY29wZS4kb24oXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKF8sIHVzZXIpIHtcclxuICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlID0gbmV3IERhdGUoJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSk7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkaW5nXCIsIGZ1bmN0aW9uIChfLCB1c2VyKSB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5zaG93KCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkZWRcIiwgZnVuY3Rpb24gKF8sIHVzZXIpIHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIiNsb2FkaW5nLWljb25cIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgIC5hdXRoKClcclxuICAgICAgLnNpZ25PdXQoKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dvdXRcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmZvcm1hdERhdGUgPSBmdW5jdGlvbiAoZGF0ZSkge1xyXG4gICAgdmFyIG1vbnRocyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIHJldHVybiBkYXRlLmdldERhdGUoKSArIFwiLVwiICsgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0gKyBcIi1cIiArIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB9O1xyXG5cclxuICBTdHJpbmcucHJvdG90eXBlLmNhcGl0YWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc2xpY2UoMSk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignQXN0ZXJvaWRzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEdhbWVTdmMpIHtcclxuXHJcbiAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhc3Rlcm9pZHMtcGFnZScpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICBjdHguZm9udCA9IFwiMzBweCBDb21pYyBTYW5zIE1TXCI7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgdmFyIHNob3RzID0ge307XHJcbiAgdmFyIGFzdGVyb2lkcyA9IHt9O1xyXG4gIHZhciBwb3dlcnVwcyA9IHt9O1xyXG4gIHZhciBleHBsb3Npb25zID0ge307XHJcbiAgdmFyIG1hcCA9IHt9O1xyXG4gIHZhciBzcGFjZXBpY3MgPSAxMDtcclxuICB2YXIgc3BhY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFjZXBpY3MpO1xyXG4gIHZhciBwb3dlcnVwVHlwZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdzcGVlZCcsXHJcbiAgICAgIGFubm91bmNlbWVudDogJ01heCBTcGVlZCDih6cnLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogNCxcclxuICAgICAgICBzaXplOiBbMTQsIDM1XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLm1heFNwZWVkICs9IDEwMDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2Nvb2xkb3duJyxcclxuICAgICAgYW5ub3VuY2VtZW50OiAnQ29vbGRvd24g4oepJyxcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDMsXHJcbiAgICAgICAgc2l6ZTogWzE3LCAxN10sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWVcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuY29vbGRvd25UaW1lIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAncmFuZ2UnLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6ICdGaXJpbmcgUmFuZ2Ug4oenJyxcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA0LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzMwLCA4XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnJhbmdlICs9IDU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdzaGllbGQnLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6ICdTaGllbGQnLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDUsXHJcbiAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICBzaXplOiBbMTksIDE5XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnNoaWVsZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdudWtlJyxcclxuICAgICAgYW5ub3VuY2VtZW50OiAnTnVrZScsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICAgIHNpemU6IFsxNSwgMTVdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbihzcGFjZXNoaXApIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bhd25Bc3Rlcm9pZHMoNSk7XHJcbiAgICAgIH1cclxuICAgIH0sLypcclxuICAgICdzaWRlX2Nhbm5vbnMnLFxyXG4gICAgJ2xhc2VyJyxcclxuICAgICdzaGllbGQnLFxyXG4gICAgJ2xpZmUnLFxyXG4gICAgJ21pc3NpbGVzJyxcclxuICAgICdudWtlJ1xyXG4gICAgKi9cclxuICBdO1xyXG4gIHBvd2VydXBUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHBvd2VydXAsIGksIGFycmF5KSB7XHJcbiAgICBhcnJheVtpXS5pbWcuc3JjID0gJ2FzdGVyb2lkcy8nICsgcG93ZXJ1cC5uYW1lICsgJy5wbmcnO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgZXhwbG9zaW9uSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBleHBsb3Npb25JbWFnZS5zcmMgPSAnYXN0ZXJvaWRzL2V4cGxvc2lvbi5wbmcnO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgbWFwW2Uua2V5Q29kZSB8fCBlLndoaWNoXSA9IHRydWU7XHJcbiAgfSx0cnVlKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSBmYWxzZTtcclxuICB9LHRydWUpO1xyXG5cclxuICAkc2NvcGUuaGlnaHNjb3JlID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gZXZhbHVhdGVLZXlzKCkge1xyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgLy9TcGFjZVxyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zaG9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM3XSkge1xyXG4gICAgICAgIC8vTGVmdCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiA9IDM2MDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uIC09IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzldKSB7XHJcbiAgICAgICAgLy9SaWdodCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDM2MCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uICs9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzhdKSB7XHJcbiAgICAgICAgLy9VcCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPD0gc3BhY2VzaGlwLm1heFNwZWVkKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgKz0gNTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzQwXSkge1xyXG4gICAgICAgIC8vRG93biBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgLT0gMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgc3RhcnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU3BhY2VzaGlwKCkge1xyXG4gICAgdGhpcy53aWR0aCA9IDUwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSA1MDtcclxuICAgIHRoaXMuc2hpZWxkID0gZmFsc2U7XHJcbiAgICB0aGlzLnJhbmdlID0gODA7XHJcbiAgICB0aGlzLmNhbm5vbiA9IHtcclxuICAgICAgeDogdGhpcy53aWR0aCAvIDIgLSA0LjUsXHJcbiAgICAgIHk6IHRoaXMuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0ICogMC4wNzgxMjVcclxuICAgIH07XHJcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcclxuICAgIHRoaXMuY29vbGRvd25UaW1lID0gMjA7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW1xyXG4gICAgICBjYW52YXMud2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIsXHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgLyAyXHJcbiAgICBdO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9ICdhc3Rlcm9pZHMvc3BhY2VzaGlwLnBuZyc7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMubWF4U3BlZWQgPSAxMDAwO1xyXG4gICAgdGhpcy5hbmdsZSA9IDA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuXHJcbiAgICB0aGlzLnNob290ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuY29vbGRvd24gPSB0aGlzLmNvb2xkb3duVGltZTtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgc2hvdHNbaWRdID0gbmV3IFNob3QoaWQsIHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuc2hpZWxkKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5hcmModGhpcy5wb3NpdGlvblswXSArIHRoaXMud2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uWzFdICsgdGhpcy5oZWlnaHQgLyAyLCAzMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigzNSwgMjM3LCA4NiwgMC41KVwiO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiKDY2LCAxNjgsIDM2LCAwLjgpXCI7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICB2YXIgYXN0ZXJvaWQgPSBhc3Rlcm9pZHNbaV07XHJcbiAgICAgICAgaWYgKGhpdChhc3Rlcm9pZCwgdGhpcykpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNoaWVsZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBhc3Rlcm9pZC5leHBsb2RlKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2FtZU92ZXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmdsZSA9IHRoaXMucm90YXRpb247XHJcbiAgICAgIGlmICh0aGlzLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgIHRoaXMuY29vbGRvd24tLTtcclxuICAgICAgfVxyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNob3QoaWQsIHNwYWNlc2hpcCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzBdICsgc3BhY2VzaGlwLmNhbm5vbi54ICsgc3BhY2VzaGlwLmNhbm5vbi54ICogTWF0aC5jb3MoKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkgLyAxODApLFxyXG4gICAgICBzcGFjZXNoaXAucG9zaXRpb25bMV0gKyBzcGFjZXNoaXAuY2Fubm9uLnkgKyBzcGFjZXNoaXAuY2Fubm9uLnkgKiBNYXRoLnNpbigoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSAvIDE4MClcclxuICAgIF07XHJcbiAgICB0aGlzLndpZHRoID0gOTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMTU7XHJcbiAgICB0aGlzLmFuZ2xlID0gc3BhY2VzaGlwLmFuZ2xlO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IHNwYWNlc2hpcC5yb3RhdGlvbjtcclxuICAgIHRoaXMuc3BlZWQgPSBzcGFjZXNoaXAuc3BlZWQgKyA1MDA7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gc3BhY2VzaGlwLnJhbmdlO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9ICdhc3Rlcm9pZHMvc2hvdC5wbmcnO1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQXN0ZXJvaWQoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMud2lkdGggPSBNYXRoLnJhbmRvbSgpICogNTAgKyAyMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy53aWR0aDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSBNYXRoLnJhbmRvbSgpICogNiAtIDM7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDMwMCArIDI7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gJ2FzdGVyb2lkcy9hc3Rlcm9pZCcgKyAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNikgKyAxKSArICcucG5nJztcclxuXHJcbiAgICB0aGlzLmV4cGxvZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgZXhwbG9zaW9uc1t0aGlzLmlkXSA9IG5ldyBFeHBsb3Npb24odGhpcyk7XHJcbiAgICAgIHJldHVybiBkZWxldGUgYXN0ZXJvaWRzW3RoaXMuaWRdO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XHJcbiAgICAgIGlmICh0aGlzLnJvdGF0aW9uID4gMzYwKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMucm90YXRpb24gLSAzNjA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5yb3RhdGlvbiA8IDApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMzYwICsgdGhpcy5yb3RhdGlvbjtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgICAgdmFyIHNob3QgPSBzaG90c1tpXTtcclxuICAgICAgICBpZiAoaGl0KHNob3QsIHRoaXMpKSB7XHJcbiAgICAgICAgICB0aGlzLmV4cGxvZGUoKTtcclxuICAgICAgICAgIHZhciBwb2ludHMgPSBNYXRoLmZsb29yKChzaG90LnNwZWVkIC0gNTAwKSAvIDEwICsgNzAgLSB0aGlzLndpZHRoKTtcclxuICAgICAgICAgIGlmIChNYXRoLmZsb29yKChwb2ludHMgKyAkc2NvcGUuc2NvcmUpIC8gMTAwKSA+IE1hdGguZmxvb3IoJHNjb3BlLnNjb3JlIC8gMTAwKSkge1xyXG4gICAgICAgICAgICBzcGF3blBvd2VydXAoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICRzY29wZS5zY29yZSArPSBwb2ludHM7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRXhwbG9zaW9uKG9iamVjdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtvYmplY3QucG9zaXRpb25bMF0sIG9iamVjdC5wb3NpdGlvblsxXV07XHJcbiAgICB0aGlzLndpZHRoID0gb2JqZWN0LndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvYmplY3QuaGVpZ2h0O1xyXG4gICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMuY3ljbGUgPSB7XHJcbiAgICAgIHJvd3M6IDYsXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHNpemU6IFsyNTYsIDI1Nl0sXHJcbiAgICAgIGk6IDAsXHJcbiAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgfTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSA0NztcclxuICAgIHRoaXMuaW1nID0gZXhwbG9zaW9uSW1hZ2U7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBQb3dlcnVwKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvd2VydXAgPSBwb3dlcnVwVHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG93ZXJ1cFR5cGVzLmxlbmd0aCldO1xyXG4gICAgdGhpcy5jeWNsZSA9IHRoaXMucG93ZXJ1cC5jeWNsZTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAxMDAwO1xyXG4gICAgaWYgKHRoaXMuY3ljbGUuc2l6ZVsxXSA+IHRoaXMuY3ljbGUuc2l6ZVswXSkge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IDQwO1xyXG4gICAgICB0aGlzLndpZHRoID0gTWF0aC5yb3VuZCh0aGlzLmhlaWdodCAvIHRoaXMuY3ljbGUuc2l6ZVsxXSAqIHRoaXMuY3ljbGUuc2l6ZVswXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndpZHRoID0gNDA7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5yb3VuZCh0aGlzLndpZHRoIC8gdGhpcy5jeWNsZS5zaXplWzBdICogdGhpcy5jeWNsZS5zaXplWzFdKTtcclxuICAgIH1cclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuaW1nID0gdGhpcy5wb3dlcnVwLmltZztcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAxNTAgKyA1MDtcclxuICAgIHZhciBkZWxheSA9IDU7XHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhpdChzcGFjZXNoaXAsIHRoaXMpKSB7XHJcbiAgICAgICAgJHNjb3BlLmFubm91bmNlID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2VtZW50ID0gdGhpcy5wb3dlcnVwLmFubm91bmNlbWVudDtcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICRzY29wZS5hbm5vdW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHRoaXMucG93ZXJ1cC5hY3RpdmF0ZShzcGFjZXNoaXApO1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAoZGVsYXkgPD0gMCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxheSA9IDU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsYXktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmUob2JqZWN0KSB7XHJcbiAgICAgb2JqZWN0LnBvc2l0aW9uWzBdICs9IG9iamVjdC5zcGVlZCAvIDEwMCAqIE1hdGguY29zKChvYmplY3QuYW5nbGUgLSA5MCkgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICBvYmplY3QucG9zaXRpb25bMV0gKz0gb2JqZWN0LnNwZWVkIC8gMTAwICogTWF0aC5zaW4oKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgIGlmIChvYmplY3QucG9zaXRpb25bMF0gPiBjYW52YXMud2lkdGgpIHtcclxuICAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IC1vYmplY3Qud2lkdGg7XHJcbiAgICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMF0gPCAtb2JqZWN0LndpZHRoKSB7XHJcbiAgICAgICBvYmplY3QucG9zaXRpb25bMF0gPSBjYW52YXMud2lkdGg7XHJcbiAgICAgfVxyXG4gICAgIGlmIChvYmplY3QucG9zaXRpb25bMV0gPiBjYW52YXMuaGVpZ2h0KSB7XHJcbiAgICAgICBvYmplY3QucG9zaXRpb25bMV0gPSAtb2JqZWN0LmhlaWdodDtcclxuICAgICB9IGVsc2UgaWYgKG9iamVjdC5wb3NpdGlvblsxXSA8IC1vYmplY3QuaGVpZ2h0KSB7XHJcbiAgICAgICBvYmplY3QucG9zaXRpb25bMV0gPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgIH1cclxuICAgICBjdHguc2F2ZSgpO1xyXG4gICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV0pO1xyXG4gICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LndpZHRoIC8gMiwgb2JqZWN0LmhlaWdodCAvIDIpO1xyXG4gICAgIGN0eC5yb3RhdGUob2JqZWN0LnJvdGF0aW9uICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgaWYgKG9iamVjdC5jeWNsZSkge1xyXG4gICAgICAgdmFyIGNvbHVtbiA9IG9iamVjdC5jeWNsZS5pICUgb2JqZWN0LmN5Y2xlLmNvbHVtbnM7XHJcbiAgICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcihvYmplY3QuY3ljbGUuaSAvIG9iamVjdC5jeWNsZS5jb2x1bW5zKTtcclxuICAgICAgIGN0eC5kcmF3SW1hZ2Uob2JqZWN0LmltZywgb2JqZWN0LmN5Y2xlLnNpemVbMF0gKiBjb2x1bW4sIG9iamVjdC5jeWNsZS5zaXplWzFdICogcm93LCBvYmplY3QuY3ljbGUuc2l6ZVswXSwgb2JqZWN0LmN5Y2xlLnNpemVbMV0sIC1vYmplY3Qud2lkdGggLyAyLCAtb2JqZWN0LmhlaWdodCAvIDIsIG9iamVjdC53aWR0aCwgb2JqZWN0LmhlaWdodCk7XHJcblxyXG4gICAgICAgaWYgKG9iamVjdC5jeWNsZS5pIDw9IDApIHtcclxuICAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSAwO1xyXG4gICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgIH0gZWxzZSBpZiAob2JqZWN0LmN5Y2xlLmkgPj0gb2JqZWN0LmN5Y2xlLmNvbHVtbnMgKiBvYmplY3QuY3ljbGUucm93cykge1xyXG4gICAgICAgICBvYmplY3QuY3ljbGUuaSA9IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MgLSAxO1xyXG4gICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICB9XHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgIGN0eC5kcmF3SW1hZ2Uob2JqZWN0LmltZywgLW9iamVjdC53aWR0aCAvIDIsIC1vYmplY3QuaGVpZ2h0IC8gMiwgb2JqZWN0LndpZHRoLCBvYmplY3QuaGVpZ2h0KTtcclxuICAgICB9XHJcbiAgICAgY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHZhciBzcGFjZXNoaXA7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIHNwYWNlc2hpcCA9IG5ldyBTcGFjZXNoaXAoKTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgIGF1dG9TcGF3bigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RW50cnlQb3NpdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB2YXIgZ3JpZFggPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciBncmlkWSA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIHgsIHkgPSAwO1xyXG4gICAgaWYgKGdyaWRYID49IDEpIHtcclxuICAgICAgeCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XHJcbiAgICAgIGlmICh5ID49IDEpIHtcclxuICAgICAgICB5ID0gMCAtIGhlaWdodDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeSA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICBpZiAoZ3JpZFkgPj0gMSkge1xyXG4gICAgICAgIHggPSAwIC0gd2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFt4LCB5XTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpdChvYmplY3QxLCBvYmplY3QyKSB7XHJcbiAgICByZXR1cm4gKG9iamVjdDEucG9zaXRpb25bMF0gPCBvYmplY3QyLnBvc2l0aW9uWzBdICsgb2JqZWN0Mi53aWR0aCkgJiZcclxuICAgICAgICAgICAob2JqZWN0Mi5wb3NpdGlvblswXSA8IG9iamVjdDEucG9zaXRpb25bMF0gKyBvYmplY3QxLndpZHRoKSAmJlxyXG4gICAgICAgICAgIChvYmplY3QxLnBvc2l0aW9uWzFdIDwgb2JqZWN0Mi5wb3NpdGlvblsxXSArIG9iamVjdDIuaGVpZ2h0KSAmJlxyXG4gICAgICAgICAgIChvYmplY3QyLnBvc2l0aW9uWzFdIDwgb2JqZWN0MS5wb3NpdGlvblsxXSArIG9iamVjdDEuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGF1dG9TcGF3bigpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhhc3Rlcm9pZHMpLmxlbmd0aCA8IDIwMCkge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH1cclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGF1dG9TcGF3bigpO1xyXG4gICAgICB9LCBzcGF3bkludGVydmFsKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25JbnRlcnZhbCgpIHtcclxuICAgIGlmICgkc2NvcGUuc2NvcmUgPCAxMDAwKSB7XHJcbiAgICAgIHJldHVybiAxMDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCAyMDAwKSB7XHJcbiAgICAgIHJldHVybiA5MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDMwMDApIHtcclxuICAgICAgcmV0dXJuIDgwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNDAwMCkge1xyXG4gICAgICByZXR1cm4gNzAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA1MDAwKSB7XHJcbiAgICAgIHJldHVybiA2MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDYwMDApIHtcclxuICAgICAgcmV0dXJuIDUwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNzAwMCkge1xyXG4gICAgICByZXR1cm4gNDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA4MDAwKSB7XHJcbiAgICAgIHJldHVybiAzMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25Bc3Rlcm9pZHMoYW1vdW50KSB7XHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICBkbyB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIGFzdGVyb2lkc1tpZF0gPSBuZXcgQXN0ZXJvaWQoaWQpO1xyXG4gICAgfSB3aGlsZSAoaSsrIDw9IGFtb3VudCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3blBvd2VydXAoKSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMocG93ZXJ1cHMpLmxlbmd0aCA8IDMpIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgcG93ZXJ1cHNbaWRdID0gbmV3IFBvd2VydXAoaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XHJcbiAgICAkc2NvcGUucGxheWluZyA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgIH1cclxuICAgIHNob3RzID0ge307XHJcbiAgICBpZiAoJHNjb3BlLmxvZ2dlZEluKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuaGlnaHNjb3JlLmFzdGVyb2lkcyA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzID0gJHNjb3BlLnNjb3JlO1xyXG4gICAgICAgIEdhbWVTdmMuc2V0SGlnaHNjb3JlKCdhc3Rlcm9pZHMnLCAkc2NvcGUuY3VycmVudFVzZXIuX2lkLCAkc2NvcGUuc2NvcmUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hzY29yZSA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5oaWdoc2NvcmUgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cdC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG5cdC8vIGRyYXcgY2FudmFzLlxyXG5cclxuXHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuXHJcblx0XHQvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG5cdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0fVxyXG5cdC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuXHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcblx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogMTA1KTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcblxyXG4gIHZhciB0YWxseSA9IDA7XHJcbiAgdmFyIGRpcmVjdGlvbiA9IHRydWU7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgIGlmIChzaG90c1tpXS5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIHNob3RzW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3RzW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIHBvd2VydXBzKSB7XHJcbiAgICAgIHBvd2VydXBzW2ldLm1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBleHBsb3Npb25zKSB7XHJcbiAgICAgIGlmIChleHBsb3Npb25zW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgZXhwbG9zaW9uc1tpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBleHBsb3Npb25zW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZhbHVhdGVLZXlzKCk7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgc3BhY2VzaGlwLm1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBjYW52YXMud2lkdGgsIDApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoJzAnLCAncmdiKCcgKyBNYXRoLmZsb29yKDI1NiAtIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcpJyk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgnMC4yNScsICdyZ2IoJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMjU2IC0gMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJyknKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKCcwLjUnLCAncmdiKCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDI1NiAtIDI1NiAqIHRhbGx5IC8gMTAwKSArICcpJyk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgnMC43NScsICdyZ2IoJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMjU2IC0gMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJyknKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKCcxLjAnLCAncmdiKCcgKyBNYXRoLmZsb29yKDI1NiAtIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcpJyk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgICAgY3R4LmZvbnQ9JzYwcHggTW9ub3Rvbic7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnQXN0ZXJvaWRzJywgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dCgnQXN0ZXJvaWRzJykud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGN0eC5mb250PScyMHB4IEFsZHJpY2gnO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ1ByZXNzIHNwYWNlIHRvIHN0YXJ0JywgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dCgnUHJlc3Mgc3BhY2UgdG8gc3RhcnQnKS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyICsgMjApO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ0Rlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlcicsIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoJ0Rlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlcicpLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAtIDMwKTtcclxuICAgIH1cclxuICAgIHRhbGx5ICs9IGRpcmVjdGlvbiA/IDEgOiAtMTtcclxuICAgIGlmICh0YWxseSA+IDEwMCkge1xyXG4gICAgICB0YWxseSA9IDEwMDtcclxuICAgICAgZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHRhbGx5IDwgMCkge1xyXG4gICAgICB0YWxseSA9IDA7XHJcbiAgICAgIGRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuc3BhY2UgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImFzdGVyb2lkcy9zcGFjZScgKyBzcGFjZSArICcuanBnXCIpJ1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuXHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdCdWJibGVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWJibGVzLXBhZ2UnKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgdmFyIGJ1YmJsZXMgPSBbXTtcclxuICB2YXIgY29sb3JzID0gWycjZmZjMzAwJywnI2ZmNTczMycsJyNjNzAwMzknLCcjOTAwYzNlJywnIzU3MTg0NSddO1xyXG5cclxuICBmdW5jdGlvbiBCdWJibGUoKSB7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gMDtcclxuICAgIHRoaXMucmFkaXVzID0gMTtcclxuICAgIHRoaXMuZXhwYW5kaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgIHRoaXMuY2lyY3VtZmVyZW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDUwKSArIDU7XHJcbiAgICB0aGlzLm1heFJhZGl1cyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDIwMCkgKyAyMDtcclxuICAgIHRoaXMueCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aCk7XHJcbiAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0KTtcclxuICAgIHRoaXMudnggPSAoTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTEpO1xyXG4gICAgdGhpcy52eSA9IChNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgYnViYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGJ1YmJsZSkge1xyXG4gICAgICB2YXIgY29sb3IgPSBjb2xvcnNbTWF0aC5yb3VuZChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKGJ1YmJsZS54LCBidWJibGUueSwgYnViYmxlLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3JzW01hdGgucm91bmQoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1tjb2xvcnMubGVuZ3RoIC0gTWF0aC5yb3VuZChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9IGJ1YmJsZS5jaXJjdW1mZXJlbmNlICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXM7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmlsdGVyQnViYmxlcygpIHtcclxuICAgIGJ1YmJsZXMucHVzaChuZXcgQnViYmxlKCkpO1xyXG4gICAgYnViYmxlcyA9IGJ1YmJsZXMuZmlsdGVyKGZ1bmN0aW9uIChidWJibGUpIHtcclxuICAgICAgaWYgKGJ1YmJsZS5yYWRpdXMgPT09IGJ1YmJsZS5tYXhSYWRpdXMpIHtcclxuICAgICAgICBidWJibGUuZXhwYW5kaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgYnViYmxlLnggKz0gYnViYmxlLnZ4ICogYnViYmxlLnNwZWVkO1xyXG4gICAgICBidWJibGUueSArPSBidWJibGUudnkgKiBidWJibGUuc3BlZWQ7XHJcbiAgICAgIGJ1YmJsZS5yYWRpdXMgKz0gKGJ1YmJsZS5leHBhbmRpbmcgPyAxIDogLTEpO1xyXG4gICAgICByZXR1cm4gYnViYmxlLnJhZGl1cyA+IDA7XHJcbiAgICB9KTtcclxuICAgIGRyYXcoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuXHJcblxyXG5cdChmdW5jdGlvbigpIHtcclxuXHJcblx0XHQvLyBTdGFydCBsaXN0ZW5pbmcgdG8gcmVzaXplIGV2ZW50cyBhbmRcclxuXHRcdC8vIGRyYXcgY2FudmFzLlxyXG5cdFx0aW5pdGlhbGl6ZSgpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHRcdC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcblx0XHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0XHQvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcblx0XHRcdC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcblx0XHRcdHJlc2l6ZUNhbnZhcygpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG5cdFx0Ly8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcblx0XHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRcdGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuXHRcdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDU1IDogMTExKTtcclxuXHRcdH1cclxuXHJcblx0fSkoKTtcclxuXHJcblxyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdDaGFyYWRlc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblx0JHNjb3BlLnNlbGVjdFdvcmQgPSBjYXRlZ29yeSA9PiB7XHJcblx0XHQkc2NvcGUud29yZCA9XHJcblx0XHRcdCRzY29wZS5jaGFyYWRlc1tjYXRlZ29yeV1bXHJcblx0XHRcdFx0TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogJHNjb3BlLmNoYXJhZGVzW2NhdGVnb3J5XS5sZW5ndGgpXHJcblx0XHRcdF07XHJcblx0XHRjb25zb2xlLmxvZygkc2NvcGUud29yZCk7XHJcblx0fTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJDb250YWN0Q3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBFbWFpbFN2Yykge1xyXG4gICRzY29wZS5vcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNwYW1cIixcclxuICAgICAgdGV4dDogXCJJIGFtIGEgc3BhbSBib3QgYW5kIGF1dG9tYXRpY2FsbHkgY2hlY2sgdGhlIGZpcnN0IG9wdGlvbiBJIGZpbmQhXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk9wcG9ydHVuaXR5XCIsXHJcbiAgICAgIHRleHQ6IFwiWW91IHNlZW0gdG8gaGF2ZSB0aGUgc2tpbGxzIEkgc2VlaywgSSdkIGxpa2UgdG8gdGFsayBhYm91dCBzb21lIG9wcG9ydHVuaXRpZXMuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJlc3VtZVwiLFxyXG4gICAgICB0ZXh0OiBcIkkgZGlnIHRoZSByZXN1bWUsIGhvdyBkaWQgeW91IG1ha2UgaXQ/XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk90aGVyXCIsXHJcbiAgICAgIHRleHQ6IFwiU3VtdGluIGVsc2UhXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gICRzY29wZS5jb250YWN0ID0ge1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgICBhYm91dDogXCJcIixcclxuICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUuc2VuZGluZyA9IHRydWU7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XHJcbiAgICBFbWFpbFN2Yy5zZW5kKHtcclxuICAgICAgZW1haWw6ICRzY29wZS5jb250YWN0LmVtYWlsLFxyXG4gICAgICBuYW1lOiAkc2NvcGUuY29udGFjdC5uYW1lLFxyXG4gICAgICBwaG9uZTogJHNjb3BlLmNvbnRhY3QucGhvbmUsXHJcbiAgICAgIGFib3V0OiAkc2NvcGUuY29udGFjdC5hYm91dCxcclxuICAgICAgbWVzc2FnZTogJHNjb3BlLmNvbnRhY3QubWVzc2FnZSxcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5zZW50ID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1MuIHN0YXR1cz0lZCwgdGV4dD0lc1wiLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICRzY29wZS5zZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGQUlMRUQuIGVycm9yPVwiLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0V4cGVyaWVuY2VDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUuZ2V0U2tpbGwgPSBmdW5jdGlvbihza2lsbENvZGUpIHtcclxuICAgIGlmICghJHNjb3BlLnNraWxscykgcmV0dXJuO1xyXG4gICAgcmV0dXJuICRzY29wZS5za2lsbHMuZmluZChmdW5jdGlvbihza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuY29kZSA9PT0gc2tpbGxDb2RlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0hvYmJpZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xyXG5cclxuICAkc2NvcGUuaG9iYnlTZWxlY3RvclZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgJC5nZXRKU09OKCdodHRwczovL3d3dy5yZWRkaXQuY29tL3VzZXIvYmVsZ29jYW5hZGlhbi9hYm91dC8uanNvbicsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkSG9iYnkgPSAkc2NvcGUuaG9iYmllc1swXTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdEhvYmJ5ID0gZnVuY3Rpb24gKGhvYmJ5KSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRIb2JieSA9IGhvYmJ5O1xyXG4gICAgJHNjb3BlLmhvYmJ5U2VsZWN0b3JWaXNpYmxlID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNob3dIb2JieSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICBpZiAoIXZhbHVlLmltYWdlcykgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHZhbHVlLmltYWdlcy5sZW5ndGggPiAwO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xlbW1pbmdzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEdhbWVTdmMpIHtcclxuXHJcbiAgdmFyIExFRlQgPSAwO1xyXG4gIHZhciBSSUdIVCA9IDE7XHJcblxyXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVtbWluZ3MtcGFnZScpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB2YXIgbGVtbWluZ3NJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGxlbW1pbmdzSW1hZ2Uuc3JjID0gJ2xlbW1pbmdzL2xlbW1pbmdzLnBuZyc7XHJcbiAgdmFyIGRlY29ySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBkZWNvckltYWdlLnNyYyA9ICdsZW1taW5ncy9kZWNvci5wbmcnO1xyXG4gIHZhciBsZW1taW5ncyA9IHt9O1xyXG4gIHZhciBzdGFydGVkID0gZmFsc2U7XHJcblxyXG4gIHZhciBhY3Rpb25zID0ge1xyXG4gICAgd2Fsazoge1xyXG4gICAgICBzdGFydDogWzAsIDBdLFxyXG4gICAgICBlbmQ6IFszMjAsIDIwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBodWg6IHtcclxuICAgICAgc3RhcnQ6IFszMjAsIDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDIwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZhbGw6IHtcclxuICAgICAgc3RhcnQ6IFswLCA4MF0sXHJcbiAgICAgIGVuZDogWzE2MCwgMTAwXSxcclxuICAgICAgY29sdW1uczogNCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBmbHk6IHtcclxuICAgICAgc3RhcnQ6IFsxNjAsIDgwXSxcclxuICAgICAgZW5kOiBbNDgwLCAxMTBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHN0b3A6IHtcclxuICAgICAgc3RhcnQ6IFswLCAxMjBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDE0MF0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGNsaW1iOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMTYwXSxcclxuICAgICAgZW5kOiBbNjQwLCAxODVdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBzdGFydDogWzAsIDIwMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMjI1XSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgcHVuY2g6IHtcclxuICAgICAgc3RhcnQ6IFswLCAyNDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDMwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAyLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGRpZzoge1xyXG4gICAgICBzdGFydDogWzAsIDMyMF0sXHJcbiAgICAgIGVuZDogWzMyMCwgMzQ1XSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gTGVtbWluZyhpbml0KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggLSAyMDApKSArIDEwMCwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNhbnZhcy5oZWlnaHQgLSAyMDApKSArIDEwMF07XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAyID4gMSA/IExFRlQgOiBSSUdIVDtcclxuICAgIHRoaXMuYWN0ID0gZnVuY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uc1thY3Rpb25dO1xyXG4gICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgdGhpcy53aWR0aCA9ICh0aGlzLmFjdGlvbi5lbmRbMF0gLSB0aGlzLmFjdGlvbi5zdGFydFswXSkgLyB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICB0aGlzLmhlaWdodCA9ICh0aGlzLmFjdGlvbi5lbmRbMV0gLSB0aGlzLmFjdGlvbi5zdGFydFsxXSAtICgyMCAqICh0aGlzLmFjdGlvbi5yb3dzIC0gMSkpKSAvIHRoaXMuYWN0aW9uLnJvd3M7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICB0aGlzLmFjdChpbml0KTtcclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25bMF0sIHRoaXMucG9zaXRpb25bMV0pO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IExFRlQpIHtcclxuICAgICAgICBjdHguc2NhbGUoLTEsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBjb2x1bW4gPSB0aGlzLmN5Y2xlICUgdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3IodGhpcy5jeWNsZSAvIHRoaXMuYWN0aW9uLmNvbHVtbnMpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKGxlbW1pbmdzSW1hZ2UsICh0aGlzLndpZHRoICogY29sdW1uKSArIHRoaXMuYWN0aW9uLnN0YXJ0WzBdLCAoKHRoaXMuaGVpZ2h0ICsgMjApICogcm93KSArIHRoaXMuYWN0aW9uLnN0YXJ0WzFdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgIGlmICh0aGlzLmFjdGlvbi5yZXZlcnNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgICBpZiAodGhpcy5jeWNsZSA+PSB0aGlzLmFjdGlvbi5jb2x1bW5zICogdGhpcy5hY3Rpb24ucm93cykge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICF0aGlzLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZS0tO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLS07XHJcbiAgICAgICAgICBpZiAodGhpcy5jeWNsZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSAhdGhpcy5hbmltYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPj0gdGhpcy5hY3Rpb24uY29sdW1ucyAqIHRoaXMuYWN0aW9uLnJvd3MpIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEhhdGNoKCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFsyMCwgMjBdO1xyXG4gICAgdGhpcy5hY3Rpb24gPSB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMF0sXHJcbiAgICAgIGVuZDogWzgyLCA1MDBdLFxyXG4gICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICByb3dzOiAxMFxyXG4gICAgfVxyXG4gICAgdGhpcy53aWR0aCA9ICh0aGlzLmFjdGlvbi5lbmRbMF0gLSB0aGlzLmFjdGlvbi5zdGFydFswXSkgLyB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAodGhpcy5hY3Rpb24uZW5kWzFdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMV0pIC8gdGhpcy5hY3Rpb24ucm93cztcclxuICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgdGhpcy5vcGVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSwgdGhpcy5wb3NpdGlvblsxXSk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIHZhciBjb2x1bW4sIHJvdztcclxuICAgICAgaWYgKHN0YXJ0ZWQpIHtcclxuICAgICAgICBjb2x1bW4gPSB0aGlzLmN5Y2xlICUgdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgICByb3cgPSBNYXRoLmZsb29yKHRoaXMuY3ljbGUgLyB0aGlzLmFjdGlvbi5jb2x1bW5zKTtcclxuICAgICAgICBpZiAodGhpcy5jeWNsZSA8IDkpIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29sdW1uID0gMDtcclxuICAgICAgICByb3cgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoZGVjb3JJbWFnZSwgKHRoaXMud2lkdGggKiBjb2x1bW4pICsgdGhpcy5hY3Rpb24uc3RhcnRbMF0sICh0aGlzLmhlaWdodCAqIHJvdykgKyB0aGlzLmFjdGlvbi5zdGFydFsxXSAtIDEsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduTGVtbWluZygpIHtcclxuICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2goZnVuY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgIGxlbW1pbmdzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCldID0gbmV3IExlbW1pbmcoYWN0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcblx0XHQvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuXHRcdC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHRcdC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcblx0XHRyZXNpemVDYW52YXMoKTtcclxuXHR9XHJcblx0Ly8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG5cdC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG5cdC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG5cdGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuXHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTAgOiAxMDUpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG4gIHNwYXduTGVtbWluZygpO1xyXG4gIGxldCBoYXRjaCA9IG5ldyBIYXRjaCgpXHJcbiAgZHJhdygpO1xyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgaWYgKCFzdGFydGVkKSB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmZvbnQ9JzQwcHggTW9ub3Rvbic7XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSAnMTAnO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XHJcbiAgICAgIGN0eC5yZWN0KDE1LCBjYW52YXMuaGVpZ2h0IC0gNDUsIGN0eC5tZWFzdXJlVGV4dCgnU3RhcnQnKS53aWR0aCArIDIwLCBjdHgubWVhc3VyZVRleHQoJ1N0YXJ0JykuaGVpZ2h0ICsgY2FudmFzLmhlaWdodCAtIDQ1KTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LmZpbGxUZXh0KCdTdGFydCcsIDIwLCBjYW52YXMuaGVpZ2h0IC0gNTApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yICh2YXIgaSBpbiBsZW1taW5ncykge1xyXG4gICAgICAgIGxlbW1pbmdzW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGF0Y2gub3BlbigpO1xyXG4gICAgc3RhcnRlZCA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBkcmF3KCk7XHJcbiAgICB9LCAxNTApO1xyXG4gIH1cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignTGlzdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBDYXRlZ29yaWVzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5zaG93Q2F0ZWdvcnkgPSB0cnVlO1xyXG5cclxuICAkc2NvcGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIENhdGVnb3JpZXNTdmMuZ2V0Q2F0ZWdvcmllcygpXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAkc2NvcGUudGFza3MgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuY2F0ZWdvcmllcykge1xyXG4gICAgICAgIGZvciAodmFyIGogaW4gJHNjb3BlLmNhdGVnb3JpZXNbaV0udGFza3MpIHtcclxuICAgICAgICAgICRzY29wZS50YXNrcy5wdXNoKHtcclxuICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiAkc2NvcGUuY2F0ZWdvcmllc1tpXS5uYW1lLFxyXG4gICAgICAgICAgICBcInRhc2tcIjogJHNjb3BlLmNhdGVnb3JpZXNbaV0udGFza3Nbal0ubmFtZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkgPSBmdW5jdGlvbihjYXRlZ29yeSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICRzY29wZS5zZWxlY3RlZFRhc2tzID0gW107XHJcbiAgICAkc2NvcGUuc2VsZWN0YWJsZVRhc2tzID0gW107XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzKSB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RhYmxlVGFza3MucHVzaCgkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuc2hvd0NhdGVnb3J5ID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuZW50ZXJlZENhdGVnb3J5ID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLm5ld0NhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUgPT09IGNhdGVnb3J5KSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5KCRzY29wZS5jYXRlZ29yaWVzW2ldKTtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5hZGRDYXRlZ29yeSh7XHJcbiAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5XHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgJHNjb3BlLmluaXQoKTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICRzY29wZS5lbnRlcmVkQ2F0ZWdvcnkgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUubmV3VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpIHtcclxuICAgICAgaWYgKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldLm5hbWUgPT09IHRhc2spIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdFRhc2soJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS5uYW1lLCB7XHJcbiAgICAgICAgdGFzazogdGFza1xyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcy5wdXNoKHsgbmFtZTogdGFzayB9KTtcclxuICAgICAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MubGVuZ3RoIC0gMV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICRzY29wZS5lbnRlcmVkVGFzayA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5yZW1vdmVUYXNrKCRzY29wZS5zZWxlY3RhYmxlVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLmVudGVyZWRUYXNrID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVuc2VsZWN0VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5yZW1vdmVUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCB0YXNrKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuYWRkVGFzayA9IGZ1bmN0aW9uKHRhc2tMaXN0LCB0YXNrKSB7XHJcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2spO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5yZW1vdmVUYXNrID0gZnVuY3Rpb24odGFza0xpc3QsIHRhc2spIHtcclxuICAgIHRhc2tMaXN0LnNwbGljZSh0YXNrTGlzdC5pbmRleE9mKHRhc2spLCAxKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc3RhcnRQcmlvcml0aXppbmcgPSBmdW5jdGlvbigpIHtcclxuICAgIENhdGVnb3JpZXNTdmMuc2V0UHJpb3JpdHlMaXN0KCRzY29wZS5zZWxlY3RlZFRhc2tzKTtcclxuICAgICRsb2NhdGlvbi5wYXRoKCcvcHJpb3JpdGl6ZScpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRRdWVzdGlvbnMgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghJHNjb3BlLnNlbGVjdGVkVGFza3MpIHJldHVybiAnJztcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAkc2NvcGUuc2VsZWN0ZWRUYXNrcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgIGNvdW50ZXIgKz0gaTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb3VudGVyO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG4gIC8vIEluaXRpYWxpemUgdGhlIEZpcmViYXNlVUkgV2lkZ2V0IHVzaW5nIEZpcmViYXNlLlxyXG4gIHZhciB1aSA9IG5ldyBmaXJlYmFzZXVpLmF1dGguQXV0aFVJKGZpcmViYXNlLmF1dGgoKSk7XHJcblxyXG4gICRzY29wZS4kb24oJ2xvZ291dCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdWkucmVzZXQoKTtcclxuICAgIHN0YXJ0VUkoKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRVSSgpIHtcclxuICAgIHVpLnN0YXJ0KCcjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lcicsIHtcclxuICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgc2lnbkluU3VjY2VzczogZnVuY3Rpb24gKGN1cnJlbnRVc2VyLCBjcmVkZW50aWFsLCByZWRpcmVjdFVybCkge1xyXG4gICAgICAgICAgLy8gTm8gcmVkaXJlY3QuXHJcbiAgICAgICAgICBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuYXV0aCgpXHJcbiAgICAgICAgICAgIC5jdXJyZW50VXNlci5nZXRJZFRva2VuKHRydWUpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChpZFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgVXNlclN2Yy5hdXRoZW50aWNhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGN1cnJlbnRVc2VyLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IGN1cnJlbnRVc2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGhvdG9VUkw6IGN1cnJlbnRVc2VyLnBob3RvVVJMLFxyXG4gICAgICAgICAgICAgICAgZW1haWxWZXJpZmllZDogY3VycmVudFVzZXIuZW1haWxWZXJpZmllZCxcclxuICAgICAgICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW4sXHJcbiAgICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNtb2RhbC1sb2dpbicpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgIC8vJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdCgncG9wdXAnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0xvZ2luIEZhaWxlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FsZXJ0LWRhbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gc2lnbkluRmFpbHVyZSBjYWxsYmFjayBtdXN0IGJlIHByb3ZpZGVkIHRvIGhhbmRsZSBtZXJnZSBjb25mbGljdHMgd2hpY2hcclxuICAgICAgICAvLyBvY2N1ciB3aGVuIGFuIGV4aXN0aW5nIGNyZWRlbnRpYWwgaXMgbGlua2VkIHRvIGFuIGFub255bW91cyB1c2VyLlxyXG4gICAgICAgIHNpZ25JbkZhaWx1cmU6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgLy8gRm9yIG1lcmdlIGNvbmZsaWN0cywgdGhlIGVycm9yLmNvZGUgd2lsbCBiZVxyXG4gICAgICAgICAgLy8gJ2ZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3QnLlxyXG4gICAgICAgICAgaWYgKGVycm9yLmNvZGUgIT0gJ2ZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFRoZSBjcmVkZW50aWFsIHRoZSB1c2VyIHRyaWVkIHRvIHNpZ24gaW4gd2l0aC5cclxuICAgICAgICAgIHZhciBjcmVkID0gZXJyb3IuY3JlZGVudGlhbDtcclxuICAgICAgICAgIC8vIENvcHkgZGF0YSBmcm9tIGFub255bW91cyB1c2VyIHRvIHBlcm1hbmVudCB1c2VyIGFuZCBkZWxldGUgYW5vbnltb3VzXHJcbiAgICAgICAgICAvLyB1c2VyLlxyXG4gICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAvLyBGaW5pc2ggc2lnbi1pbiBhZnRlciBkYXRhIGlzIGNvcGllZC5cclxuICAgICAgICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aENyZWRlbnRpYWwoY3JlZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1aVNob3duOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvLyBUaGUgd2lkZ2V0IGlzIHJlbmRlcmVkLlxyXG4gICAgICAgICAgLy8gSGlkZSB0aGUgbG9hZGVyLlxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2lnbkluU3VjY2Vzc1VybDogJy9ob21lJyxcclxuICAgICAgc2lnbkluT3B0aW9uczogW1xyXG4gICAgICAgIC8vZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICBdLFxyXG5cclxuICAgICAgLy8gV2lsbCB1c2UgcG9wdXAgZm9yIElEUCBQcm92aWRlcnMgc2lnbi1pbiBmbG93IGluc3RlYWQgb2YgdGhlIGRlZmF1bHQsIHJlZGlyZWN0LlxyXG4gICAgICBzaWduSW5GbG93OiAncG9wdXAnLFxyXG4gICAgICAvLyBPdGhlciBjb25maWcgb3B0aW9ucy4uLlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGFydFVJKCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRmaWx0ZXIsIFBvc3RzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5hZGRQb3N0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCRzY29wZS5wb3N0Qm9keSkge1xyXG4gICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xyXG4gICAgICAgIGJvZHk6ICRzY29wZS5wb3N0Qm9keVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUG9zdHNTdmMuZmV0Y2goKVxyXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLnBvc3RzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbignd3M6bmV3X3Bvc3QnLCBmdW5jdGlvbiAoXywgcG9zdCkge1xyXG4gICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIFBvc3RzU3ZjLmdldFBvc3QocG9zdClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RzLnVuc2hpZnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdQcmlvcml0aXplQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgQ2F0ZWdvcmllc1N2Yykge1xyXG5cclxuICAkc2NvcGUucHJpb3JpdHlMaXN0ID0gQ2F0ZWdvcmllc1N2Yy5nZXRQcmlvcml0eUxpc3QoKTtcclxuXHJcbiAgaWYgKCEkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAkbG9jYXRpb24ucGF0aCgnL2xpc3RzJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uID0gMTtcclxuICAgICRzY29wZS5jdXJyZW50UXVlc3Rpb24gPSAxO1xyXG4gICAgJHNjb3BlLmRvbmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gICRzY29wZS5tYWtlQ2hvaWNlID0gZnVuY3Rpb24oY2hvaWNlKSB7XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uaWQgPT09ICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgPSBjaG9pY2UgPT09IDEgPyAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmZpcnN0Q2hvaWNlIDogJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5zZWNvbmRDaG9pY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbiA9PT0gJHNjb3BlLmN1cnJlbnRRdWVzdGlvbikge1xyXG4gICAgICAkc2NvcGUuY3VycmVudFF1ZXN0aW9uID0gJHNjb3BlLmN1cnJlbnRRdWVzdGlvbiA9PT0gJHNjb3BlLnByaW9yaXR5TGlzdC5sZW5ndGggPyAxIDogJHNjb3BlLmN1cnJlbnRRdWVzdGlvbiArIDE7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbiA9ICRzY29wZS5jdXJyZW50UXVlc3Rpb247XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAoaSBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA9PT0gJycpIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgJCgnI3ByaW9yaXRpemVDaG9pY2VzJykuaGlkZSgzMDApO1xyXG4gICAgICAkc2NvcGUuZG9uZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldEJ1dHRvblZhbHVlID0gZnVuY3Rpb24oY2hvaWNlKSB7XHJcbiAgICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUucHJpb3JpdHlMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmlkID09PSAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbikge1xyXG4gICAgICAgIHJldHVybiBjaG9pY2UgPT09IDEgPyAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmZpcnN0Q2hvaWNlIDogJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5zZWNvbmRDaG9pY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0UXVlc3Rpb24gPSBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24gPSBxdWVzdGlvbjtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0RmlsdGVyZWRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJHNjb3BlLnByaW9yaXR5TGlzdFxyXG4gICAgICAuc29ydChmdW5jdGlvbihhLCBiKXsgcmV0dXJuIGEuaWQtYi5pZDsgfSlcclxuICAgICAgLmZpbHRlcihmdW5jdGlvbihxdWVzdGlvbikgeyByZXR1cm4gcXVlc3Rpb24uY2hvaWNlICE9PSAnJyB8fCBxdWVzdGlvbi5pZCA9PT0gJHNjb3BlLmN1cnJlbnRRdWVzdGlvbjsgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldENob2ljZXNNYWRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgdmFyIGNob2ljZXNNYWRlID0gMDtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgIT09ICcnKSB7XHJcbiAgICAgICAgY2hvaWNlc01hZGUrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNob2ljZXNNYWRlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRCdXR0b25DbGFzcyA9IGZ1bmN0aW9uKGNob2ljZSkge1xyXG4gICAgaWYgKCEkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5pZCA9PT0gJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24pIHtcclxuICAgICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgPT09ICcnKSB7XHJcbiAgICAgICAgICByZXR1cm4gJ2J0bi1wcmltYXJ5JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNob2ljZSA9PT0gMSkge1xyXG4gICAgICAgICAgcmV0dXJuICRzY29wZS5wcmlvcml0eUxpc3RbaV0uZmlyc3RDaG9pY2UgPT09ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlID8gJ2J0bi1zdWNjZXNzJyA6ICdidG4tZGFuZ2VyJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICRzY29wZS5wcmlvcml0eUxpc3RbaV0uc2Vjb25kQ2hvaWNlID09PSAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA/ICdidG4tc3VjY2VzcycgOiAnYnRuLWRhbmdlcic7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNob3dDaG9pY2VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcjcHJpb3JpdGl6ZUNob2ljZXMnKS5zaG93KDEwMDApO1xyXG4gICAgJCgnI3Jldmlld0Nob2ljZXMnKS5oaWRlKCk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYXJ0Q2xpY2sgPSBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICBpZiAoICRzY29wZS5jaGFydCApIHtcclxuICAgICAgLy8gRGlmZmVyZW50IG1ldGhvZHMgZGVwZW5kaW5nIG9uIGNoYXJ0IHR5cGVcclxuICAgICAgLy9jb25zb2xlLmxvZyggJHNjb3BlLmNoYXJ0LmdldFBvaW50c0F0RXZlbnQoIGV2ZW50ICkgKTsgLy8gZm9yIFBvaW50c1xyXG4gICAgICBjb25zb2xlLmxvZyggJHNjb3BlLmNoYXJ0LmdldFNlZ21lbnRzQXRFdmVudCggZXZlbnQgKSApOyAvLyBmb3IgU2VnbWVudHNcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd1Jlc3VsdHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAkc2NvcGUuZGF0YSA9IFtdO1xyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgIC8vIFNldHMgdGhlIGNoYXJ0IHRvIGJlIHJlc3BvbnNpdmVcclxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuXHJcbiAgICAgIC8vQm9vbGVhbiAtIFdoZXRoZXIgd2Ugc2hvdWxkIHNob3cgYSBzdHJva2Ugb24gZWFjaCBzZWdtZW50XHJcbiAgICAgIHNlZ21lbnRTaG93U3Ryb2tlIDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vU3RyaW5nIC0gVGhlIGNvbG91ciBvZiBlYWNoIHNlZ21lbnQgc3Ryb2tlXHJcbiAgICAgIHNlZ21lbnRTdHJva2VDb2xvciA6ICcjZmZmJyxcclxuXHJcbiAgICAgIC8vTnVtYmVyIC0gVGhlIHdpZHRoIG9mIGVhY2ggc2VnbWVudCBzdHJva2VcclxuICAgICAgc2VnbWVudFN0cm9rZVdpZHRoIDogMixcclxuXHJcbiAgICAgIC8vTnVtYmVyIC0gVGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGNoYXJ0IHRoYXQgd2UgY3V0IG91dCBvZiB0aGUgbWlkZGxlXHJcbiAgICAgIHBlcmNlbnRhZ2VJbm5lckN1dG91dCA6IDAsIC8vIFRoaXMgaXMgMCBmb3IgUGllIGNoYXJ0c1xyXG5cclxuICAgICAgLy9OdW1iZXIgLSBBbW91bnQgb2YgYW5pbWF0aW9uIHN0ZXBzXHJcbiAgICAgIGFuaW1hdGlvblN0ZXBzIDogMTAwLFxyXG5cclxuICAgICAgLy9TdHJpbmcgLSBBbmltYXRpb24gZWFzaW5nIGVmZmVjdFxyXG4gICAgICBhbmltYXRpb25FYXNpbmcgOiAnZWFzZU91dEJvdW5jZScsXHJcblxyXG4gICAgICAvL0Jvb2xlYW4gLSBXaGV0aGVyIHdlIGFuaW1hdGUgdGhlIHJvdGF0aW9uIG9mIHRoZSBEb3VnaG51dFxyXG4gICAgICBhbmltYXRlUm90YXRlIDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vQm9vbGVhbiAtIFdoZXRoZXIgd2UgYW5pbWF0ZSBzY2FsaW5nIHRoZSBEb3VnaG51dCBmcm9tIHRoZSBjZW50cmVcclxuICAgICAgYW5pbWF0ZVNjYWxlIDogZmFsc2UsXHJcblxyXG4gICAgICAvL1N0cmluZyAtIEEgbGVnZW5kIHRlbXBsYXRlXHJcbiAgICAgIGxlZ2VuZFRlbXBsYXRlIDogJzxoMyBjbGFzcz1cInRjLWNoYXJ0LWpzLWxlZ2VuZFwiIHN0eWxlPVwicGFkZGluZzo1cHhcIj48JSBmb3IgKHZhciBpPTA7IGk8c2VnbWVudHMubGVuZ3RoOyBpKyspeyU+PGRpdiBjbGFzcz1cImxhYmVsXCIgc3R5bGU9XCJmbG9hdDpsZWZ0O21hcmdpbjo1cHg7YmFja2dyb3VuZC1jb2xvcjo8JT1zZWdtZW50c1tpXS5maWxsQ29sb3IlPlwiPjwlaWYoc2VnbWVudHNbaV0ubGFiZWwpeyU+PCU9c2VnbWVudHNbaV0ubGFiZWwlPjwlfSU+PC9kaXY+PCV9JT48L2gzPidcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBpIGluIENhdGVnb3JpZXNTdmMuY2hvaWNlcykge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0udm90ZXMgPSAwO1xyXG4gICAgICBmb3IgKHZhciBqIGluICRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgICBpZiAoQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLm5hbWUgPT09ICRzY29wZS5wcmlvcml0eUxpc3Rbal0uY2hvaWNlKSB7XHJcbiAgICAgICAgICBDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0udm90ZXMrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIENhdGVnb3JpZXNTdmMuY2hvaWNlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEudm90ZXMgPCBiLnZvdGVzOyB9KTtcclxuICAgIGZvciAoaSBpbiBDYXRlZ29yaWVzU3ZjLmNob2ljZXMpIHtcclxuICAgICAgJHNjb3BlLmRhdGEucHVzaCh7XHJcbiAgICAgICAgdmFsdWU6IENhdGVnb3JpZXNTdmMuY2hvaWNlc1tpXS52b3RlcyxcclxuICAgICAgICBsYWJlbDogQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLm5hbWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkKCcjcHJpb3JpdGl6ZVJlc3VsdCcpLmhpZGUoKTtcclxuICAgICQoJyNwcmlvcml0aXplQ2hvaWNlcycpLmhpZGUoKTtcclxuICAgICQoJyNwcmlvcml0eVJlc3VsdHMnKS5zaG93KDEwMDApO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdQcm9maWxlQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG5cclxuICBpZiAoISRzY29wZS5jdXJyZW50VXNlcikge1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnI3NleC1pbmRpY2F0b3InKS5vZmZzZXQoeyBsZWZ0OiAoJHNjb3BlLmN1cnJlbnRVc2VyLmdlbmRlci5zZXggLyAyMDAgKiAkKCcjc2V4Jykud2lkdGgoKSkgKyAkKCcjc2V4Jykub2Zmc2V0KCkubGVmdCB9KTtcclxuICAgICQoJyNpZGVudGl0eS1pbmRpY2F0b3InKS5vZmZzZXQoeyBsZWZ0OiAoJHNjb3BlLmN1cnJlbnRVc2VyLmdlbmRlci5pZGVudGl0eSAvIDIwMCAqICQoJyNpZGVudGl0eScpLndpZHRoKCkpICsgJCgnI2lkZW50aXR5Jykub2Zmc2V0KCkubGVmdCB9KTtcclxuICB9XHJcblxyXG4gICRzY29wZS5zZXhlcyA9IFtcclxuICAgICdNYWxlJyxcclxuICAgICdGdE0gTWFsZScsXHJcbiAgICAnSW50ZXJzZXgnLFxyXG4gICAgJ010RiBGZW1hbGUnLFxyXG4gICAgJ0ZlbWFsZSdcclxuICBdO1xyXG4gICRzY29wZS5pZGVudGl0aWVzID0gW1xyXG4gICAgJ01hbicsXHJcbiAgICAnQmlnZW5kZXInLFxyXG4gICAgJ1BhbmdlbmRlcicsXHJcbiAgICAnQWdlbmRlcicsXHJcbiAgICAnUG9seWdlbmRlcicsXHJcbiAgICAnR2VuZGVyZmx1aWQnLFxyXG4gICAgJ0dlbmRlcnF1ZWVyJyxcclxuICAgICdRdWVlcicsXHJcbiAgICAnV29tYW4nXHJcbiAgXTtcclxuXHJcbiAgJHNjb3BlLmRhdGVPcHRpb25zID0ge1xyXG4gICAgbWF4RGF0ZTogbmV3IERhdGUoKSxcclxuICAgIG1pbkRhdGU6IG5ldyBEYXRlKDE5MDAsIDEsIDEpLFxyXG4gICAgaW5pdERhdGU6IG5ldyBEYXRlKDIwMDAsIDEsIDEpLFxyXG4gICAgZGF0ZXBpY2tlck1vZGU6ICd5ZWFyJ1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZW5kZXIgPSBmdW5jdGlvbihhcnJheSwgcGVyY2VudGFnZSkge1xyXG4gICAgcmV0dXJuIGFycmF5W01hdGgucm91bmQocGVyY2VudGFnZSAvIDIwMCAqIChhcnJheS5sZW5ndGggLSAxKSldO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zdGFydFNsaWRlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICB9O1xyXG4gICRzY29wZS5kcmFnU2xpZGVyID0gZnVuY3Rpb24oZXZlbnQsIHVpLCB0eXBlKSB7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIuZ2VuZGVyW3R5cGVdID0gTWF0aC5yb3VuZCgoJCgnIycgKyB0eXBlICsgJy1pbmRpY2F0b3InKS5vZmZzZXQoKS5sZWZ0IC0gJCgnIycgKyB0eXBlKS5vZmZzZXQoKS5sZWZ0KSAvICgkKCcjJyArIHR5cGUpLndpZHRoKCkgLSAkKCcjJyArIHR5cGUgKyAnLWluZGljYXRvcicpLndpZHRoKCkpICogMjAwKTtcclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICB9O1xyXG4gICRzY29wZS5zdG9wU2xpZGVyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIH07XHJcblxyXG4gICRzY29wZS51c2VybmFtZVRvZ2dsZSA9IHRydWU7XHJcbiAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gdHJ1ZTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVVzZXJuYW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSAhJHNjb3BlLnVzZXJuYW1lVG9nZ2xlO1xyXG4gICAgJHNjb3BlLm5ld1VzZXJuYW1lID0gJHNjb3BlLmN1cnJlbnRVc2VyLnVzZXJuYW1lO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS50b2dnbGVQYXNzd29yZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgJHNjb3BlLm5ld1Bhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5jb25maXJtUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gISRzY29wZS5wYXNzd29yZFRvZ2dsZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uIChwYXNzd29yZCkge1xyXG4gICAgaWYgKHBhc3N3b3JkKSB7XHJcbiAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgVXNlclN2Yy5jaGVja1Bhc3N3b3JkKHVzZXIsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvcmlnaW5hbEJnID0gJChcIi5wYXNzd29yZFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIik7XHJcbiAgICAgICAgJChcIi5wYXNzd29yZFwiKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNGRkI2QzFcIiB9LCAyMDApLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG9yaWdpbmFsQmcgfSwgMjAwKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVBhc3N3b3JkID0gZnVuY3Rpb24gKG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCwgY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICBpZiAobmV3UGFzc3dvcmQpIHtcclxuICAgICAgaWYgKG5ld1Bhc3N3b3JkID09IGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgICBVc2VyU3ZjLmNoYW5nZVBhc3N3b3JkKHVzZXIsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZClcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICRzY29wZS4kZW1pdCgncG9wdXAnLCB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCBDaGFuZ2VkJyxcclxuICAgICAgICAgICAgdHlwZTogJ2FsZXJ0LXN1Y2Nlc3MnXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICRzY29wZS5vbGRQYXNzd29yZCA9IG51bGw7XHJcbiAgICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkc2NvcGUuJGVtaXQoJ3BvcHVwJywge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGFzc3dvcmQgQ2hhbmdlIEZhaWxlZCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdhbGVydC1kYW5nZXInXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgb3JpZ2luYWxCZyA9ICQoXCIucGFzc3dvcmRcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIpO1xyXG4gICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlVXNlcm5hbWUgPSBmdW5jdGlvbiAodXNlcm5hbWUpIHtcclxuICAgICRzY29wZS4kZW1pdCgnbG9hZGluZycpO1xyXG4gICAgVXNlclN2Yy5jaGFuZ2VVc2VybmFtZSgkc2NvcGUuY3VycmVudFVzZXIuX2lkLCB1c2VybmFtZSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAkc2NvcGUuJGVtaXQoJ3VwZGF0ZScsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgJHNjb3BlLiRlbWl0KCdwb3B1cCcsIHtcclxuICAgICAgICBtZXNzYWdlOiB1c2VybmFtZSArICcgYWxyZWFkeSBpbiB1c2UnLFxyXG4gICAgICAgIHR5cGU6ICdhbGVydC1kYW5nZXInXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyKSB7ICBcclxuICAgICAgJHNjb3BlLiRlbWl0KCdsb2FkaW5nJyk7XHJcbiAgICAgIFVzZXJTdmMudXBkYXRlVXNlcigkc2NvcGUuY3VycmVudFVzZXIpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS4kZW1pdCgndXBkYXRlJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICAkc2NvcGUuJHdhdGNoKCdjdXJyZW50VXNlci5mbGFncy5sZW5ndGgnLCBmdW5jdGlvbihsZW5ndGgpIHtcclxuICAgICRzY29wZS51cGRhdGVVc2VyKCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5sb2FkQ291bnRyaWVzID0gZnVuY3Rpb24oJHF1ZXJ5KSB7XHJcbiAgICB2YXIgY291bnRyaWVzID0gW1xyXG4gICAgICB7IFwibmFtZVwiOiBcIkFuZG9ycmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hZFwiLCBcInRpZGJpdFwiOiBcIlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1hZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQWZnaGFuaXN0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1hZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLCBcImZsYWdcIjogXCJmbGFnLWFnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbmd1aWxsYVwiLCBcImZsYWdcIjogXCJmbGFnLWFpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbGJhbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctYWxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFybWVuaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQW5nb2xhXCIsIFwiZmxhZ1wiOiBcImZsYWctYW9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFudGFyY3RpY2FcIiwgXCJmbGFnXCI6IFwiZmxhZy1hcVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQXJnZW50aW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctYXJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFtZXJpY2FuIFNvbW9hXCIsIFwiZmxhZ1wiOiBcImZsYWctYXNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkF1c3RyaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hdFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQXVzdHJhbGlhXCIsIFwiZmxhZ1wiOiBcImZsYWctYXVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFydWJhXCIsIFwiZmxhZ1wiOiBcImZsYWctYXdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIsOFbGFuZCBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctYXhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkF6ZXJiYWlqYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1helwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBcImZsYWdcIjogXCJmbGFnLWJhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCYXJiYWRvc1wiLCBcImZsYWdcIjogXCJmbGFnLWJiXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCYW5nbGFkZXNoXCIsIFwiZmxhZ1wiOiBcImZsYWctYmRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJlbGdpdW1cIiwgXCJmbGFnXCI6IFwiZmxhZy1iZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQnVya2luYSBGYXNvXCIsIFwiZmxhZ1wiOiBcImZsYWctYmZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJ1bGdhcmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctYmdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJhaHJhaW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1iaFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQnVydW5kaVwiLCBcImZsYWdcIjogXCJmbGFnLWJpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCZW5pblwiLCBcImZsYWdcIjogXCJmbGFnLWJqXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBCYXJ0aMOpbGVteVwiLCBcImZsYWdcIjogXCJmbGFnLWJsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCZXJtdWRhXCIsIFwiZmxhZ1wiOiBcImZsYWctYm1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJydW5laSBcIiwgXCJmbGFnXCI6IFwiZmxhZy1iblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQm9saXZpYSwgUGx1cmluYXRpb25hbCBTdGF0ZSBvZlwiLCBcImZsYWdcIjogXCJmbGFnLWJvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYVwiLCBcImZsYWdcIjogXCJmbGFnLWJxXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCcmF6aWxcIiwgXCJmbGFnXCI6IFwiZmxhZy1iclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmFoYW1hc1wiLCBcImZsYWdcIjogXCJmbGFnLWJzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCaHV0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1idFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQm91dmV0IElzbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWJ2XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCb3Rzd2FuYVwiLCBcImZsYWdcIjogXCJmbGFnLWJ3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCZWxhcnVzXCIsIFwiZmxhZ1wiOiBcImZsYWctYnlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJlbGl6ZVwiLCBcImZsYWdcIjogXCJmbGFnLWJ6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDYW5hZGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1jYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1jY1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29uZ28sIHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZVwiLCBcImZsYWdcIjogXCJmbGFnLWNkXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIiwgXCJmbGFnXCI6IFwiZmxhZy1jZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29uZ29cIiwgXCJmbGFnXCI6IFwiZmxhZy1jZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3dpdHplcmxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1jaFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ8O0dGUgZCdJdm9pcmVcIiwgXCJmbGFnXCI6IFwiZmxhZy1jaVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29vayBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctY2tcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNoaWxlXCIsIFwiZmxhZ1wiOiBcImZsYWctY2xcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNhbWVyb29uXCIsIFwiZmxhZ1wiOiBcImZsYWctY21cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNoaW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctY25cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNvbG9tYmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctY29cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNvc3RhIFJpY2FcIiwgXCJmbGFnXCI6IFwiZmxhZy1jclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ3ViYVwiLCBcImZsYWdcIjogXCJmbGFnLWN1XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDYWJvIFZlcmRlXCIsIFwiZmxhZ1wiOiBcImZsYWctY3ZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkN1cmHDp2FvXCIsIFwiZmxhZ1wiOiBcImZsYWctY3dcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNocmlzdG1hcyBJc2xhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1jeFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ3lwcnVzXCIsIFwiZmxhZ1wiOiBcImZsYWctY3lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkN6ZWNoIFJlcHVibGljXCIsIFwiZmxhZ1wiOiBcImZsYWctY3pcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdlcm1hbnlcIiwgXCJmbGFnXCI6IFwiZmxhZy1kZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRGppYm91dGlcIiwgXCJmbGFnXCI6IFwiZmxhZy1kalwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRGVubWFya1wiLCBcImZsYWdcIjogXCJmbGFnLWRrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJEb21pbmljYVwiLCBcImZsYWdcIjogXCJmbGFnLWRtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJEb21pbmljYW4gUmVwdWJsaWNcIiwgXCJmbGFnXCI6IFwiZmxhZy1kb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQWxnZXJpYVwiLCBcImZsYWdcIjogXCJmbGFnLWR6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJFY3VhZG9yXCIsIFwiZmxhZ1wiOiBcImZsYWctZWNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkVzdG9uaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1lZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRWd5cHRcIiwgXCJmbGFnXCI6IFwiZmxhZy1lZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiV2VzdGVybiBTYWhhcmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1laFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRXJpdHJlYVwiLCBcImZsYWdcIjogXCJmbGFnLWVyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTcGFpblwiLCBcImZsYWdcIjogXCJmbGFnLWVzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJFdGhpb3BpYVwiLCBcImZsYWdcIjogXCJmbGFnLWV0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGaW5sYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctZmlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkZpamlcIiwgXCJmbGFnXCI6IFwiZmxhZy1malwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpXCIsIFwiZmxhZ1wiOiBcImZsYWctZmtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1mbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRmFyb2UgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLWZvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGcmFuY2VcIiwgXCJmbGFnXCI6IFwiZmxhZy1mclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR2Fib25cIiwgXCJmbGFnXCI6IFwiZmxhZy1nYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWdiXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHcmVuYWRhXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2RcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdlb3JnaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1nZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRnJlbmNoIEd1aWFuYVwiLCBcImZsYWdcIjogXCJmbGFnLWdmXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHdWVybnNleVwiLCBcImZsYWdcIjogXCJmbGFnLWdnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHaGFuYVwiLCBcImZsYWdcIjogXCJmbGFnLWdoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHaWJyYWx0YXJcIiwgXCJmbGFnXCI6IFwiZmxhZy1naVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3JlZW5sYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2xcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdhbWJpYVwiLCBcImZsYWdcIjogXCJmbGFnLWdtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHdWluZWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1nblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3VhZGVsb3VwZVwiLCBcImZsYWdcIjogXCJmbGFnLWdwXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJFcXVhdG9yaWFsIEd1aW5lYVwiLCBcImZsYWdcIjogXCJmbGFnLWdxXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHcmVlY2VcIiwgXCJmbGFnXCI6IFwiZmxhZy1nclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1nc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3VhdGVtYWxhXCIsIFwiZmxhZ1wiOiBcImZsYWctZ3RcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkd1YW1cIiwgXCJmbGFnXCI6IFwiZmxhZy1ndVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3VpbmVhLUJpc3NhdVwiLCBcImZsYWdcIjogXCJmbGFnLWd3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHdXlhbmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1neVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSG9uZyBLb25nXCIsIFwiZmxhZ1wiOiBcImZsYWctaGtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLWhtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJIb25kdXJhc1wiLCBcImZsYWdcIjogXCJmbGFnLWhuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDcm9hdGlhXCIsIFwiZmxhZ1wiOiBcImZsYWctaHJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkhhaXRpXCIsIFwiZmxhZ1wiOiBcImZsYWctaHRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkh1bmdhcnlcIiwgXCJmbGFnXCI6IFwiZmxhZy1odVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSW5kb25lc2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctaWRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIklyZWxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1pZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSXNyYWVsXCIsIFwiZmxhZ1wiOiBcImZsYWctaWxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIklzbGUgb2YgTWFuXCIsIFwiZmxhZ1wiOiBcImZsYWctaW1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkluZGlhXCIsIFwiZmxhZ1wiOiBcImZsYWctaW5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwiLCBcImZsYWdcIjogXCJmbGFnLWlvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJcmFxXCIsIFwiZmxhZ1wiOiBcImZsYWctaXFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIklyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1pclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSWNlbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWlzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJdGFseVwiLCBcImZsYWdcIjogXCJmbGFnLWl0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJKZXJzZXlcIiwgXCJmbGFnXCI6IFwiZmxhZy1qZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSmFtYWljYVwiLCBcImZsYWdcIjogXCJmbGFnLWptXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJKb3JkYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1qb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSmFwYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1qcFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiS2VueWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1rZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiS3lyZ3l6c3RhblwiLCBcImZsYWdcIjogXCJmbGFnLWtnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDYW1ib2RpYVwiLCBcImZsYWdcIjogXCJmbGFnLWtoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJLaXJpYmF0aVwiLCBcImZsYWdcIjogXCJmbGFnLWtpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDb21vcm9zXCIsIFwiZmxhZ1wiOiBcImZsYWcta21cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLCBcImZsYWdcIjogXCJmbGFnLWtuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJLb3JlYSwgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLWtwXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJLb3JlYSwgUmVwdWJsaWMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1rclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiS3V3YWl0XCIsIFwiZmxhZ1wiOiBcImZsYWcta3dcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNheW1hbiBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWcta3lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkthemFraHN0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1relwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWNcIiwgXCJmbGFnXCI6IFwiZmxhZy1sYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGViYW5vblwiLCBcImZsYWdcIjogXCJmbGFnLWxiXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBMdWNpYVwiLCBcImZsYWdcIjogXCJmbGFnLWxjXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMaWVjaHRlbnN0ZWluXCIsIFwiZmxhZ1wiOiBcImZsYWctbGlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNyaSBMYW5rYVwiLCBcImZsYWdcIjogXCJmbGFnLWxrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMaWJlcmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbHJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxlc290aG9cIiwgXCJmbGFnXCI6IFwiZmxhZy1sc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGl0aHVhbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbHRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkx1eGVtYm91cmdcIiwgXCJmbGFnXCI6IFwiZmxhZy1sdVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGF0dmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbHZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxpYnlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbHlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vcm9jY29cIiwgXCJmbGFnXCI6IFwiZmxhZy1tYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTW9uYWNvXCIsIFwiZmxhZ1wiOiBcImZsYWctbWNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vbGRvdmEsIFJlcHVibGljIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctbWRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vbnRlbmVncm9cIiwgXCJmbGFnXCI6IFwiZmxhZy1tZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIiwgXCJmbGFnXCI6IFwiZmxhZy1tZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFkYWdhc2NhclwiLCBcImZsYWdcIjogXCJmbGFnLW1nXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYXJzaGFsbCBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctbWhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hY2Vkb25pYSwgdGhlIGZvcm1lciBZdWdvc2xhdiBSZXB1YmxpYyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLW1rXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWxpXCIsIFwiZmxhZ1wiOiBcImZsYWctbWxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk15YW5tYXJcIiwgXCJmbGFnXCI6IFwiZmxhZy1tbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTW9uZ29saWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1tblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFjYW9cIiwgXCJmbGFnXCI6IFwiZmxhZy1tb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctbXBcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hcnRpbmlxdWVcIiwgXCJmbGFnXCI6IFwiZmxhZy1tcVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWF1cml0YW5pYVwiLCBcImZsYWdcIjogXCJmbGFnLW1yXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNb250c2VycmF0XCIsIFwiZmxhZ1wiOiBcImZsYWctbXNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hbHRhXCIsIFwiZmxhZ1wiOiBcImZsYWctbXRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hdXJpdGl1c1wiLCBcImZsYWdcIjogXCJmbGFnLW11XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWxkaXZlc1wiLCBcImZsYWdcIjogXCJmbGFnLW12XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWxhd2lcIiwgXCJmbGFnXCI6IFwiZmxhZy1td1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWV4aWNvXCIsIFwiZmxhZ1wiOiBcImZsYWctbXhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hbGF5c2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctbXlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vemFtYmlxdWVcIiwgXCJmbGFnXCI6IFwiZmxhZy1telwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmFtaWJpYVwiLCBcImZsYWdcIjogXCJmbGFnLW5hXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOZXcgQ2FsZWRvbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbmNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5pZ2VyXCIsIFwiZmxhZ1wiOiBcImZsYWctbmVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5vcmZvbGsgSXNsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctbmZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5pZ2VyaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1uZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmljYXJhZ3VhXCIsIFwiZmxhZ1wiOiBcImZsYWctbmlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5ldGhlcmxhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctbmxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5vcndheVwiLCBcImZsYWdcIjogXCJmbGFnLW5vXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOZXBhbFwiLCBcImZsYWdcIjogXCJmbGFnLW5wXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOYXVydVwiLCBcImZsYWdcIjogXCJmbGFnLW5yXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOaXVlXCIsIFwiZmxhZ1wiOiBcImZsYWctbnVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5ldyBaZWFsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctbnpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk9tYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1vbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGFuYW1hXCIsIFwiZmxhZ1wiOiBcImZsYWctcGFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBlcnVcIiwgXCJmbGFnXCI6IFwiZmxhZy1wZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRnJlbmNoIFBvbHluZXNpYVwiLCBcImZsYWdcIjogXCJmbGFnLXBmXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQYXB1YSBOZXcgR3VpbmVhXCIsIFwiZmxhZ1wiOiBcImZsYWctcGdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBoaWxpcHBpbmVzXCIsIFwiZmxhZ1wiOiBcImZsYWctcGhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBha2lzdGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctcGtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBvbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLXBsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCIsIFwiZmxhZ1wiOiBcImZsYWctcG1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBpdGNhaXJuXCIsIFwiZmxhZ1wiOiBcImZsYWctcG5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlB1ZXJ0byBSaWNvXCIsIFwiZmxhZ1wiOiBcImZsYWctcHJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBhbGVzdGluZSwgU3RhdGUgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1wc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUG9ydHVnYWxcIiwgXCJmbGFnXCI6IFwiZmxhZy1wdFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGFsYXVcIiwgXCJmbGFnXCI6IFwiZmxhZy1wd1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGFyYWd1YXlcIiwgXCJmbGFnXCI6IFwiZmxhZy1weVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUWF0YXJcIiwgXCJmbGFnXCI6IFwiZmxhZy1xYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUsOpdW5pb25cIiwgXCJmbGFnXCI6IFwiZmxhZy1yZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUm9tYW5pYVwiLCBcImZsYWdcIjogXCJmbGFnLXJvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTZXJiaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1yc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUnVzc2lhbiBGZWRlcmF0aW9uXCIsIFwiZmxhZ1wiOiBcImZsYWctcnVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlJ3YW5kYVwiLCBcImZsYWdcIjogXCJmbGFnLXJ3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYXVkaSBBcmFiaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1zYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU29sb21vbiBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctc2JcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNleWNoZWxsZXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1zY1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3VkYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1zZFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3dlZGVuXCIsIFwiZmxhZ1wiOiBcImZsYWctc2VcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNpbmdhcG9yZVwiLCBcImZsYWdcIjogXCJmbGFnLXNnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwiLCBcImZsYWdcIjogXCJmbGFnLXNoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTbG92ZW5pYVwiLCBcImZsYWdcIjogXCJmbGFnLXNpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCIsIFwiZmxhZ1wiOiBcImZsYWctc2pcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNsb3Zha2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctc2tcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNpZXJyYSBMZW9uZVwiLCBcImZsYWdcIjogXCJmbGFnLXNsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYW4gTWFyaW5vXCIsIFwiZmxhZ1wiOiBcImZsYWctc21cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNlbmVnYWxcIiwgXCJmbGFnXCI6IFwiZmxhZy1zblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU29tYWxpYVwiLCBcImZsYWdcIjogXCJmbGFnLXNvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTdXJpbmFtZVwiLCBcImZsYWdcIjogXCJmbGFnLXNyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTb3V0aCBTdWRhblwiLCBcImZsYWdcIjogXCJmbGFnLXNzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIiwgXCJmbGFnXCI6IFwiZmxhZy1zdFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRWwgU2FsdmFkb3JcIiwgXCJmbGFnXCI6IFwiZmxhZy1zdlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KVwiLCBcImZsYWdcIjogXCJmbGFnLXN4XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLCBcImZsYWdcIjogXCJmbGFnLXN5XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTd2F6aWxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1zelwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctdGNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNoYWRcIiwgXCJmbGFnXCI6IFwiZmxhZy10ZFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzXCIsIFwiZmxhZ1wiOiBcImZsYWctdGZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRvZ29cIiwgXCJmbGFnXCI6IFwiZmxhZy10Z1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVGhhaWxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy10aFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVGFqaWtpc3RhblwiLCBcImZsYWdcIjogXCJmbGFnLXRqXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUb2tlbGF1XCIsIFwiZmxhZ1wiOiBcImZsYWctdGtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRpbW9yLUxlc3RlXCIsIFwiZmxhZ1wiOiBcImZsYWctdGxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlR1cmttZW5pc3RhblwiLCBcImZsYWdcIjogXCJmbGFnLXRtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUdW5pc2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctdG5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRvbmdhXCIsIFwiZmxhZ1wiOiBcImZsYWctdG9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlR1cmtleVwiLCBcImZsYWdcIjogXCJmbGFnLXRyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsIFwiZmxhZ1wiOiBcImZsYWctdHRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlR1dmFsdVwiLCBcImZsYWdcIjogXCJmbGFnLXR2XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUYWl3YW4sIFByb3ZpbmNlIG9mIENoaW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctdHdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy10elwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVWtyYWluZVwiLCBcImZsYWdcIjogXCJmbGFnLXVhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVZ2FuZGFcIiwgXCJmbGFnXCI6IFwiZmxhZy11Z1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctdW1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLCBcImZsYWdcIjogXCJmbGFnLXVzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVcnVndWF5XCIsIFwiZmxhZ1wiOiBcImZsYWctdXlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlV6YmVraXN0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy11elwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSG9seSBTZWVcIiwgXCJmbGFnXCI6IFwiZmxhZy12YVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIiwgXCJmbGFnXCI6IFwiZmxhZy12Y1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVmVuZXp1ZWxhLCBCb2xpdmFyaWFuIFJlcHVibGljIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctdmVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlZpcmdpbiBJc2xhbmRzLCBCcml0aXNoXCIsIFwiZmxhZ1wiOiBcImZsYWctdmdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlZpcmdpbiBJc2xhbmRzLCBVLlMuXCIsIFwiZmxhZ1wiOiBcImZsYWctdmlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlZpZXQgTmFtXCIsIFwiZmxhZ1wiOiBcImZsYWctdm5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlZhbnVhdHVcIiwgXCJmbGFnXCI6IFwiZmxhZy12dVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiV2FsbGlzIGFuZCBGdXR1bmFcIiwgXCJmbGFnXCI6IFwiZmxhZy13ZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2Ftb2FcIiwgXCJmbGFnXCI6IFwiZmxhZy13c1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiWWVtZW5cIiwgXCJmbGFnXCI6IFwiZmxhZy15ZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWF5b3R0ZVwiLCBcImZsYWdcIjogXCJmbGFnLXl0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTb3V0aCBBZnJpY2FcIiwgXCJmbGFnXCI6IFwiZmxhZy16YVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiWmFtYmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctem1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlppbWJhYndlXCIsIFwiZmxhZ1wiOiBcImZsYWctendcIiB9LFxyXG4gICAgXTtcclxuICAgIHJldHVybiBjb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uKGNvdW50cnkpIHtcclxuICAgICAgcmV0dXJuIGNvdW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdTa2lsbHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IDA7XHJcbiAgJHNjb3BlLnNraWxsc1Zpc2libGUgPSBmYWxzZTtcclxuICAkc2NvcGUucHJvamVjdHMgPSBbXTtcclxuXHJcbiAgJHNjb3BlLmxhYmVscyA9IFtcIkRvd25sb2FkIFNhbGVzXCIsIFwiSW4tU3RvcmUgU2FsZXNcIiwgXCJNYWlsLU9yZGVyIFNhbGVzXCJdO1xyXG4gICRzY29wZS5kYXRhID0gWzMwMCwgNTAwLCAxMDBdO1xyXG5cclxuICAkLmdldEpTT04oJy9leHBlcmllbmNlLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuICAgICRzY29wZS5wcm9qZWN0cyA9IGRhdGEucmVkdWNlKChwcm9qZWN0cywgZW1wbG95ZXIpID0+IHtcclxuICAgICAgaWYgKGVtcGxveWVyLnByb2plY3RzKSByZXR1cm4gZW1wbG95ZXIucHJvamVjdHMuY29uY2F0KHByb2plY3RzKTtcclxuICAgICAgZWxzZSByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9LCB7fSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5maWx0ZXJlZFByb2plY3RzID0gKCkgPT4gJHNjb3BlLnByb2plY3RzXHJcbiAgICAuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNraWxscyAmJiBwcm9qZWN0LnNraWxscy5pbmNsdWRlcygkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jb2RlKSlcclxuXHJcbiAgJC5nZXRKU09OKCcvc2tpbGxzLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuXHJcbiAgICBjb25zdCBza2lsbHMgPSBkYXRhXHJcbiAgICAuZmlsdGVyKChza2lsbCkgPT4gc2tpbGwuZW5hYmxlZClcclxuXHJcbiAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHNraWxsc1xyXG4gICAgLnJlZHVjZShmdW5jdGlvbihjYXRlZ29yaWVzLCBza2lsbCkge1xyXG4gICAgICBpZiAoIWNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0gPSBbc2tpbGxdXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0ucHVzaChza2lsbClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2F0ZWdvcmllcztcclxuICAgIH0sIHt9KTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCA9IGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IHNraWxsO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydE9wdGlvbnMgPSB7XHJcbiAgICAgICAgY3V0b3V0UGVyY2VudGFnZSA6IDgwLFxyXG4gICAgICAgIGNpcmN1bWZlcmVuY2U6IDIgKiBNYXRoLlBJLFxyXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXHJcbiAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydFN0eWxlID0ge1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgvc2tpbGxzLycgKyAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5pbWFnZSArICcpJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJzYwJScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnNTAlIDUwJSdcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwoJHNjb3BlLnNraWxsc1swXSk7XHJcblxyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICAkc2NvcGUuc2VhcmNoID0ge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICB2YWx1ZXM6IFwiXCIsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5rZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuYWRkVmFsdWUoKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICBpZiAoJChcIiNuZXctYmx1cmJcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmFkZFZhbHVlKCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCQoXCIjbmV3LXZhbHVlXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIjbmV3LWJsdXJiXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICB9XHJcbiAgICAgIC8vIHVzZSBlLmtleUNvZGVcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaE5hbWUgPSBcIlwiO1xyXG4gICAgJHNjb3BlLm5ld0l0ZW0gPSB7fTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoY2F0ZWdvcnkpID0+ICgkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSBjYXRlZ29yeSk7XHJcbiAgICAkc2NvcGUuc2V0VXNlckZpbHRlciA9ICh1c2VyKSA9PiAoJHNjb3BlLnVzZXJGaWx0ZXIgPSB1c2VyKTtcclxuICAgICRzY29wZS5zZXRVcGRhdGVGaWx0ZXIgPSAodHlwZSkgPT4gKCRzY29wZS51cGRhdGVGaWx0ZXIgPSB0eXBlKTtcclxuICAgICRzY29wZS5zZXRMYW5ndWFnZUZpbHRlciA9IChsYW5ndWFnZSkgPT4gKCRzY29wZS5sYW5ndWFnZUZpbHRlciA9IGxhbmd1YWdlKTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyZWRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubGlzdHMpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuICRzY29wZS5saXN0c1xyXG4gICAgICAgIC5maWx0ZXIoKHsgaXNEeW5hbWljIH0pID0+IHtcclxuICAgICAgICAgIGlmICgkc2NvcGUudXBkYXRlRmlsdGVyICE9PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJzdGF0aWNcIiAmJiBpc0R5bmFtaWMgPT09IHRydWUpIHx8XHJcbiAgICAgICAgICAgICAgKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiZHluYW1pY1wiICYmIGlzRHluYW1pYyA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoKHsgY2F0ZWdvcmllcyB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoJHNjb3BlLmNhdGVnb3J5RmlsdGVyID09PSBcIkFsbFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yaWVzLmluZGV4T2YoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKSA+PSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPT09IFwiQmxhbmtcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbHRlcigoeyBjcmVhdG9yIH0pID0+IHtcclxuICAgICAgICAgIGlmICgkc2NvcGUudXNlckZpbHRlciA9PT0gXCJBbGxcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdG9yID09PSAkc2NvcGUudXNlckZpbHRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoKHsgbGFuZ3VhZ2UgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCRzY29wZS5sYW5ndWFnZUZpbHRlci5jb2RlID09PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlID09PSAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcnMgPSAkc2NvcGUuY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeSk7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVycy5wdXNoKFwiQWxsXCIpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcnMucHVzaChcIkJsYW5rXCIpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9IFwiQWxsXCI7XHJcbiAgICAgICAgJHNjb3BlLnVwZGF0ZUZpbHRlciA9IFwiYWxsXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJzID0gJHNjb3BlLmxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlKSA9PiBsYW5ndWFnZSk7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVycy5wdXNoKHsgbmFtZTogXCJBbGxcIiwgY29kZTogXCJhbGxcIiB9KTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSB7IG5hbWU6IFwiQWxsXCIsIGNvZGU6IFwiYWxsXCIgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RMaXN0KHsgX2lkOiAkbG9jYXRpb24uc2VhcmNoKCkubGlzdCB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmxpc3RPcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwiZGF0ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIGxhYmVsOiBcIkNyZWF0aW9uIERhdGVcIixcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnZhbHVlT3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInZhbHVlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICAgIGxhYmVsOiBcIlZhbHVlXCIsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zb3J0ID0gKHNvcnRlciwgc29ydEZpZWxkLCBzb3J0TGFiZWwpID0+IHtcclxuICAgICAgJHNjb3BlW3NvcnRlcl0ubGFiZWwgPSBzb3J0TGFiZWw7XHJcbiAgICAgIGlmICgkc2NvcGVbc29ydGVyXS5maWVsZCA9PT0gc29ydEZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlW3NvcnRlcl0uZGlyZWN0aW9uID0gISRzY29wZVtzb3J0ZXJdLmRpcmVjdGlvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGVbc29ydGVyXS5maWVsZCA9IHNvcnRGaWVsZDtcclxuICAgICAgICAkc2NvcGVbc29ydGVyXS5kaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMYW5ndWFnZUNvdW50ID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxpc3RzKSByZXR1cm4gMDtcclxuICAgICAgY29uc3QgY291bnQgPSAkc2NvcGUubGlzdHMuZmlsdGVyKFxyXG4gICAgICAgIChsaXN0KSA9PlxyXG4gICAgICAgICAgKCRzY29wZS5jYXRlZ29yeUZpbHRlciA9PT0gXCJBbGxcIiB8fCBsaXN0LmNhdGVnb3JpZXMuaW5jbHVkZXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKSkgJiZcclxuICAgICAgICAgIChsYW5ndWFnZS5jb2RlID09PSBcImFsbFwiIHx8IGxpc3QubGFuZ3VhZ2UgPT09IGxhbmd1YWdlLmNvZGUpICYmXHJcbiAgICAgICAgICAoJHNjb3BlLnVzZXJGaWx0ZXIgPT09IFwiQWxsXCIgfHwgbGlzdC5jcmVhdG9yID09PSAkc2NvcGUudXNlckZpbHRlcikgJiZcclxuICAgICAgICAgICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImFsbFwiIHx8IGxpc3QuaXNEeW5hbWljID09PSAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJkeW5hbWljXCIpKSxcclxuICAgICAgKS5sZW5ndGg7XHJcbiAgICAgIHJldHVybiBgJHtjb3VudH0gLSAke01hdGgucm91bmQoKGNvdW50IC8gJHNjb3BlLmxpc3RzLmxlbmd0aCkgKiAxMDApfSVgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Q2F0ZWdvcnlDb3VudCA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5saXN0cykgcmV0dXJuIDA7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gJHNjb3BlLmxpc3RzLmZpbHRlcihcclxuICAgICAgICAobGlzdCkgPT5cclxuICAgICAgICAgIChjYXRlZ29yeSA9PT0gXCJBbGxcIiB8fCBsaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSkgPj0gMCkgJiZcclxuICAgICAgICAgICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZSA9PT0gXCJhbGxcIiB8fCBsaXN0Lmxhbmd1YWdlID09PSAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZSkgJiZcclxuICAgICAgICAgICgkc2NvcGUudXNlckZpbHRlciA9PT0gXCJBbGxcIiB8fCBsaXN0LmNyZWF0b3IgPT09ICRzY29wZS51c2VyRmlsdGVyKSAmJlxyXG4gICAgICAgICAgKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiYWxsXCIgfHwgbGlzdC5pc0R5bmFtaWMgPT09ICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImR5bmFtaWNcIikpLFxyXG4gICAgICApLmxlbmd0aDtcclxuICAgICAgcmV0dXJuIGAke2NvdW50fSAtICR7TWF0aC5yb3VuZCgoY291bnQgLyAkc2NvcGUubGlzdHMubGVuZ3RoKSAqIDEwMCl9JWA7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRVcGRhdGVDb3VudCA9ICh0eXBlKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxpc3RzKSByZXR1cm4gMDtcclxuICAgICAgY29uc3QgY291bnQgPSAkc2NvcGUubGlzdHMuZmlsdGVyKFxyXG4gICAgICAgIChsaXN0KSA9PiB0eXBlID09PSBcImFsbFwiIHx8IChsaXN0LmlzRHluYW1pYyAmJiB0eXBlID09PSBcImR5bmFtaWNcIikgfHwgKCFsaXN0LmlzRHluYW1pYyAmJiB0eXBlID09PSBcInN0YXRpY1wiKSxcclxuICAgICAgKS5sZW5ndGg7XHJcbiAgICAgIHJldHVybiBgJHtjb3VudH0gLSAke01hdGgucm91bmQoKGNvdW50IC8gJHNjb3BlLmxpc3RzLmxlbmd0aCkgKiAxMDApfSVgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxvYWRpbmcpIHtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICRzY29wZS5saXN0cyA9IGRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXJzID0ge307XHJcbiAgICAgICAgICAkc2NvcGUudXNlckZpbHRlcnMuQWxsID0gJHNjb3BlLmxpc3RzLmxlbmd0aDtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVycyA9ICRzY29wZS5saXN0c1xyXG4gICAgICAgICAgICAuc29ydCgobGlzdDEsIGxpc3QyKSA9PiBsaXN0MS5jcmVhdG9yID4gbGlzdDIuY3JlYXRvcilcclxuICAgICAgICAgICAgLnJlZHVjZSgodXNlcnMsIHsgY3JlYXRvciB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCF1c2Vyc1tjcmVhdG9yXSkgdXNlcnNbY3JlYXRvcl0gPSAwO1xyXG4gICAgICAgICAgICAgIHVzZXJzW2NyZWF0b3JdKys7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXJzO1xyXG4gICAgICAgICAgICB9LCAkc2NvcGUudXNlckZpbHRlcnMpO1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJDb3VudCA9IE9iamVjdC5rZXlzKCRzY29wZS51c2VyRmlsdGVycykubGVuZ3RoO1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXJzID0gc29ydE9iamVjdCgkc2NvcGUudXNlckZpbHRlcnMsIGZhbHNlKTtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVyID0gXCJBbGxcIjtcclxuICAgICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgJChcIiNjYXRlZ29yeS1zZWxlY3RcIikuaGlkZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Q2F0ZWdvcnlDbGFzcyA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICByZXR1cm4gJHNjb3BlLnNlbGVjdGVkTGlzdCAmJiAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSkgPj0gMFxyXG4gICAgICAgID8gXCJidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgOiBcImJ0bi1kZWZhdWx0XCI7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeUluZGV4ID0gJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpO1xyXG4gICAgICBpZiAoY2F0ZWdvcnlJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLnNwbGljZShjYXRlZ29yeUluZGV4LCAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdExhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICBjb25zdCBub25FbmdsaXNoSW5kZXggPSAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICBpZiAobGFuZ3VhZ2UuY29kZSAhPT0gXCJFTlwiICYmIG5vbkVuZ2xpc2hJbmRleCA8IDApIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMucHVzaChcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGxhbmd1YWdlLmNvZGUgPT09IFwiRU5cIiAmJiBub25FbmdsaXNoSW5kZXggPj0gMCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5zcGxpY2Uobm9uRW5nbGlzaEluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWRkTGlzdCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudExhbmd1YWdlID0gJHNjb3BlLnNlbGVjdGVkTGlzdCA/ICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2UgOiBcIkVOXCI7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIFwiXCIpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgY3JlYXRvcjogJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHZhbHVlczogW10sXHJcbiAgICAgICAgYW5zd2VyczogMCxcclxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGN1cnJlbnRMYW5ndWFnZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmhhc0R1cGxpY2F0ZSA9ICgpID0+XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgJiZcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgJiZcclxuICAgICAgXy5zb21lKFxyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgIChhbnN3ZXIpID0+IGFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCkgPT0gJHNjb3BlLm5ld0l0ZW0udmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpLFxyXG4gICAgICApO1xyXG5cclxuICAgICRzY29wZS5hZGRWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5uZXdJdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgXy5zb21lKFxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyxcclxuICAgICAgICAgICAgKGFuc3dlcikgPT4gYW5zd2VyLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSA9PSAkc2NvcGUubmV3SXRlbS52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCksXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBhbGVydChgJHskc2NvcGUubmV3SXRlbS52YWx1ZX0gaXMgYWxyZWFkeSBpbiB0aGUgbGlzdGApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUubmV3SXRlbS5jcmVhdG9yID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnVuc2hpZnQoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSgkc2NvcGUubmV3SXRlbSkpKTtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuYW5zd2VycysrO1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0uYmx1cmIgPSBcIlwiO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5sZW5ndGggPj0gMTAgJiZcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5uYW1lICYmXHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmVMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAkKFwiI25ldy12YWx1ZVwiKS5mb2N1cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUucmVwb3J0TGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGxpc3QucmVwb3J0ZWQgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMucmVwb3J0TGlzdCgkc2NvcGUuY3VycmVudFVzZXIsIGxpc3QpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2F2ZUxpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5zYXZpbmcpIHtcclxuICAgICAgICBsaXN0LnZhbHVlcyA9IGxpc3QudmFsdWVzLmZpbHRlcigoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7XHJcbiAgICAgICAgaWYgKGxpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCAmJiBsaXN0Lm5hbWUgJiYgbGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICRzY29wZS5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLnNhdmVMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgbGlzdCkudGhlbihcclxuICAgICAgICAgICAgKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmxpc3RzLnVuc2hpZnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0TGlzdChkYXRhKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkc2NvcGUubGlzdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5saXN0c1tpXS5faWQgPT09IGRhdGEuX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxpc3RzW2ldID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdExpc3QobGlzdCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobGlzdC52YWx1ZXMubGVuZ3RoIDwgMTApIHtcclxuICAgICAgICAgIGFsZXJ0KFwiTGlzdHMgbXVzdCBjb250YWluIDEwIG9yIG1vcmUgdmFsdWVzIVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFsaXN0Lm5hbWUpIHtcclxuICAgICAgICAgIGZsYXNoKFwiI2xpc3QtbmFtZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmxhc2goXCIubGlzdC1jYXRlZ29yeVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZmxhc2goZWxlbWVudCkge1xyXG4gICAgICBjb25zdCBjb2xvciA9ICQoZWxlbWVudCkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiKTtcclxuICAgICAgJChlbGVtZW50KS5hbmltYXRlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkE4MDcyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMDAsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgJChlbGVtZW50KS5hbmltYXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCFsaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9ICRzY29wZS5saXN0cy5maWx0ZXIoKHsgX2lkIH0pID0+IF9pZCk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbGlzdD9cIikpIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5kZWxldGVMaXN0KGxpc3QpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUubGlzdEJ1dHRvbkNsYXNzID0gKGxpc3QpID0+IHtcclxuICAgICAgY29uc3QgdmFsdWVzID0gbGlzdC52YWx1ZXMubGVuZ3RoO1xyXG4gICAgICBjb25zdCBibHVyYnMgPSBsaXN0LmJsdXJicztcclxuICAgICAgaWYgKHZhbHVlcyA9PT0gYmx1cmJzICYmIGxpc3QuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gXCJidG4tZGVmYXVsdFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKGJsdXJicyA9PT0gMCAmJiAhbGlzdC5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHJldHVybiBcImJ0bi13YXJuaW5nXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoYmx1cmJzID09PSAwICYmIGxpc3QuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gXCJidG4taW5mb1wiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcImJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldEJsdXJicyA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldEJsdXJicygkc2NvcGUuc2VsZWN0ZWRMaXN0LCB0eXBlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9KTtcclxuIiwiLypqc2xpbnQgZXN2ZXJzaW9uOiA2Ki9cclxuYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0FkbWluQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBUZW5UaGluZ3NTdmMsIFVzZXJTdmMpIHtcclxuICAgICRzY29wZS4kb24oXCJsb2dpblwiLCAoXykgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyQnkgPSAoZmllbGQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5vcmRlci5maWVsZCA9PT0gZmllbGQpIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIucmV2ZXJzZSA9ICEkc2NvcGUub3JkZXIucmV2ZXJzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRRdWV1ZSA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0UXVldWUoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5xdWV1ZSA9IHJlc3BvbnNlLmRhdGEucmVwbGFjZShcIi9uXCIsIFwiPGJyLz5cIik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmdldFF1ZXVlKCk7XHJcblxyXG4gICAgVGVuVGhpbmdzU3ZjLmdldFBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5wYXVzZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy5nZXRVc2VycygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKHVzZXIpID0+ICF1c2VyLmFkbWluKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUJhbiA9ICh1c2VyKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy50b2dnbGVCYW4odXNlci5faWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVQYXVzZSA9ICh1c2VyKSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy50b2dnbGVQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLnBhdXNlZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0N1cmF0ZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBUZW5UaGluZ3NTdmMpIHtcclxuICAgIGxldCBwYWdlID0gMTtcclxuICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlYXJjaCA9IFwiXCI7XHJcbiAgICAkc2NvcGUubmV3SXRlbSA9IHt9O1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgZXhoYXVzdGVkID0gZmFsc2U7XHJcblxyXG4gICAgJHNjb3BlLmtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICRzY29wZS5hZGRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuYWRkVmFsdWUoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoJChcIiNuZXctdmFsdWVcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgJChcIiNuZXctYmx1cmJcIikuZm9jdXMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIH1cclxuICAgICAgLy8gdXNlIGUua2V5Q29kZVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWRkTGlzdCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudExhbmd1YWdlID0gJHNjb3BlLnNlbGVjdGVkTGlzdCA/ICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2UgOiBcIkVOXCI7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIFwibmV3XCIpO1xyXG4gICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNyZWF0b3I6ICRzY29wZS5jdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB2YWx1ZXM6IFtdLFxyXG4gICAgICAgIGFuc3dlcnM6IDAsXHJcbiAgICAgICAgaXNEeW5hbWljOiB0cnVlLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgIGxhbmd1YWdlOiBjdXJyZW50TGFuZ3VhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKGxpc3QpIHtcclxuICAgICAgICBpZiAobGlzdC5faWQgIT09ICRzY29wZS5zZWxlY3RlZExpc3Q/Ll9pZCkge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3QobGlzdClcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFsaXN0Ll9pZCkge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGxpc3Q7XHJcbiAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBcIm5ld1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldExhbmd1YWdlRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzZXRDYXRlZ29yeUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0ge307XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kb24oXCJsb2dpblwiLCAoXykgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICByZXNldExhbmd1YWdlRmlsdGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJlc2V0Q2F0ZWdvcnlGaWx0ZXIoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCkge1xyXG4gICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoeyBfaWQ6ICRsb2NhdGlvbi5zZWFyY2goKS5saXN0IH0pO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJkYXRlXCIsXHJcbiAgICAgIHJldmVyc2U6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLnJldmVyc2UgPSAhJHNjb3BlLm9yZGVyLnJldmVyc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldE1vcmVMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5saXN0cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgZ2V0TGlzdHMoKS50aGVuKChsaXN0cykgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9ICRzY29wZS5saXN0cy5jb25jYXQobGlzdHMpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExpc3RzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGlzdHMgPSBbXTtcclxuICAgICAgcGFnZSA9IDE7XHJcbiAgICAgIGV4aGF1c3RlZCA9IGZhbHNlO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gbGlzdHM7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldExhbmd1YWdlRmlsdGVyID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdKSB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPSAhJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9ICEkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpO1xyXG4gICAgICBjb25zdCBhbGxDYXRlZ29yaWVzID1cclxuICAgICAgICBjYXRlZ29yaWVzLmxlbmd0aCA9PT0gY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldKS5sZW5ndGg7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9ICRzY29wZS5jYXRlZ29yaWVzLnJlZHVjZSgoZmlsdGVyLCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgIGZpbHRlcltjYXRlZ29yeV0gPSAhYWxsQ2F0ZWdvcmllcztcclxuICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5sb2FkaW5nIHx8IGV4aGF1c3RlZCkgcmV0dXJuIFtdO1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldExpc3RzKHtcclxuICAgICAgICBwYWdlLFxyXG4gICAgICAgIHNvcnRCeTogJHNjb3BlLm9yZGVyLmZpZWxkLFxyXG4gICAgICAgIG9yZGVyQnk6ICRzY29wZS5vcmRlci5yZXZlcnNlID8gLTEgOiAxLFxyXG4gICAgICAgIGxpbWl0OiAxMDAsXHJcbiAgICAgICAgc2VhcmNoOiAkc2NvcGUuc2VhcmNoLFxyXG4gICAgICAgIGxhbmd1YWdlczogT2JqZWN0LmtleXMoJHNjb3BlLmxhbmd1YWdlRmlsdGVyKS5maWx0ZXIoKGxhbmd1YWdlKSA9PiAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2VdKSxcclxuICAgICAgICBjYXRlZ29yaWVzOiBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpLmZpbHRlcigoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0pLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJQYWdlIFwiLCBwYWdlLCBcIiByZXN1bHRzIFwiLCBkYXRhLnJlc3VsdC5sZW5ndGgpO1xyXG4gICAgICBpZiAoZGF0YS5yZXN1bHQubGVuZ3RoIDwgMTAwKSBleGhhdXN0ZWQgPSB0cnVlO1xyXG4gICAgICBlbHNlIHBhZ2UgPSBkYXRhLm5leHRQYWdlO1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnJlc3VsdC5zbGljZSgwLCAxMCkpO1xyXG4gICAgICByZXR1cm4gZGF0YS5yZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hZGRWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJHNjb3BlLm5ld0l0ZW0pO1xyXG4gICAgICBpZiAoJHNjb3BlLm5ld0l0ZW0udmFsdWUpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBfLnNvbWUoXHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgICAgICAoYW5zd2VyKSA9PiBhbnN3ZXIudmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpID09ICRzY29wZS5uZXdJdGVtLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSxcclxuICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGFsZXJ0KGAkeyRzY29wZS5uZXdJdGVtLnZhbHVlfSBpcyBhbHJlYWR5IGluIHRoZSBsaXN0YCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRzY29wZS5uZXdJdGVtLmNyZWF0b3IgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0uYmx1cmIgPSBcIlwiO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5sZW5ndGggPj0gMTAgJiZcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5uYW1lICYmXHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIFRlblRoaW5nc1N2Yy5zYXZlTGlzdCgkc2NvcGUuY3VycmVudFVzZXIsICRzY29wZS5zZWxlY3RlZExpc3QpLnRoZW4oXHJcbiAgICAgICAgICAgICAgKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0ID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIGRhdGEuX2lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMudW5zaGlmdChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KCRzY29wZS5uZXdJdGVtKSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyk7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuYW5zd2VycysrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAkKFwiI25ldy12YWx1ZVwiKS5mb2N1cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudXBkYXRlTGlzdCA9IChsaXN0LCB1cGRhdGVzKSA9PiB7XHJcbiAgICAgIGlmIChsaXN0LnZhbHVlcy5sZW5ndGggPj0gMTAgJiYgbGlzdC5uYW1lICYmIGxpc3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgX2lkOiBsaXN0Ll9pZCxcclxuICAgICAgICAgIC4uLnVwZGF0ZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZUxpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBpZiAoIWxpc3QuX2lkKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbGlzdD9cIikpIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5kZWxldGVMaXN0KGxpc3QpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldExhbmd1YWdlID0gKGxpc3QsIGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGxpc3QubGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICBjb25zdCBub25FbmdsaXNoSW5kZXggPSBsaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICBpZiAobGFuZ3VhZ2UuY29kZSAhPT0gXCJFTlwiICYmIG5vbkVuZ2xpc2hJbmRleCA8IDApIHtcclxuICAgICAgICBsaXN0LmNhdGVnb3JpZXMucHVzaChcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGxhbmd1YWdlLmNvZGUgPT09IFwiRU5cIiAmJiBub25FbmdsaXNoSW5kZXggPj0gMCkge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5zcGxpY2Uobm9uRW5nbGlzaEluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgX2lkOiBsaXN0Ll9pZCxcclxuICAgICAgICBjYXRlZ29yaWVzOiBsaXN0LmNhdGVnb3JpZXMsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlLmNvZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0RGlmZmljdWx0eSA9IChsaXN0LCBkaWZmaWN1bHR5KSA9PiB7XHJcbiAgICAgIGxpc3QuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy51cGRhdGVMaXN0KHtcclxuICAgICAgICBfaWQ6IGxpc3QuX2lkLFxyXG4gICAgICAgIGRpZmZpY3VsdHk6IGRpZmZpY3VsdHksXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnkgPSAobGlzdCwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcnlJbmRleCA9IGxpc3QuY2F0ZWdvcmllcy5pbmRleE9mKGNhdGVnb3J5KTtcclxuICAgICAgaWYgKGNhdGVnb3J5SW5kZXggPj0gMCkge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5zcGxpY2UoY2F0ZWdvcnlJbmRleCwgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdC5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xyXG4gICAgICB9XHJcbiAgICAgIFRlblRoaW5nc1N2Yy51cGRhdGVMaXN0KHtcclxuICAgICAgICBfaWQ6IGxpc3QuX2lkLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IGxpc3QuY2F0ZWdvcmllcyxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5oYXNEdXBsaWNhdGUgPSAoKSA9PlxyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ICYmXHJcbiAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlICYmXHJcbiAgICAgIF8uc29tZShcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyxcclxuICAgICAgICAoYW5zd2VyKSA9PiBhbnN3ZXIudmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpID09ICRzY29wZS5uZXdJdGVtLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSxcclxuICAgICAgKTtcclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG5cdC5tb2R1bGUoJ2FwcCcpXHJcblx0Ly9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcblx0LmNvbnRyb2xsZXIoXHJcblx0XHQnVGVuVGhpbmdzR2FtZUN0cmwnLFxyXG5cdFx0ZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlUGFyYW1zLCBUZW5UaGluZ3NTdmMpIHtcclxuXHRcdFx0JHNjb3BlLiRvbignbG9naW4nLCBfID0+IHtcclxuXHRcdFx0XHRpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcblx0XHRcdFx0XHRnZXRVc2VycygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoJHN0YXRlUGFyYW1zLmdhbWUpIHtcclxuXHRcdFx0XHRUZW5UaGluZ3NTdmMuZ2V0R2FtZSgkc3RhdGVQYXJhbXMuZ2FtZSkudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0XHQkc2NvcGUuZ2FtZSA9IHJlc3BvbnNlLmRhdGE7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygkc2NvcGUuZ2FtZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHQpO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1dvcmtvdXRDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgJHNjb3BlLnRpbWVFeGVyY2lzaW5nID0gMzA7XHJcbiAgJHNjb3BlLnRpbWVSZXN0aW5nID0gMTA7XHJcbiAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuXHJcbiAgdmFyIHNvdW5kcyA9IHtcclxuICAgIG9uOiBuZXcgQXVkaW8oJ29uLndhdicpLFxyXG4gICAgb2ZmOiBuZXcgQXVkaW8oJ29mZi53YXYnKSxcclxuICAgIHN3aXRjaDogbmV3IEF1ZGlvKCdzd2l0Y2gud2F2JyksXHJcbiAgfTtcclxuXHJcblxyXG4gIHZhciBleGVyY2lzZXMgPSBbXHJcbiAgICB7bmFtZTogJ0p1bXBpbmcgSmFja3MnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdXYWxsIFNpdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1B1c2gtVXAnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdDcnVuY2gnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTdGVwLVVwJywgc3BsaXQ6IHRydWV9LFxyXG4gICAge25hbWU6ICdTcXVhdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1RyaWNlcHMgRGlwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUGxhbmsnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdIaWdoIEtuZWVzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnTHVuZ2UnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwIHdpdGggUm90YXRpb24nLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTaWRlIFBsYW5rJywgc3BsaXQ6IHRydWV9XHJcbiAgXTtcclxuXHJcbiAgdmFyIGV4ZXJjaXNpbmc7XHJcblxyXG4gICRzY29wZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChleGVyY2lzZXMubGVuZ3RoIC0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvICgkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3RpbmcpKSkgKyAnLycgKyBleGVyY2lzZXMubGVuZ3RoO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS53b3Jrb3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZXhjZXJjaXNlVGltZSA9ICRzY29wZS50aW1lRXhlcmNpc2luZyArICRzY29wZS50aW1lUmVzdGluZztcclxuICAgIGlmICghJHNjb3BlLnRpbWVSZW1haW5pbmcpIHtcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSBleGVyY2lzZXMubGVuZ3RoICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgZXhlcmNpc2luZyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS50aW1lUmVtYWluaW5nLS07XHJcbiAgICAgICAgaWYgKCRzY29wZS50aW1lUmVtYWluaW5nID09PSAwKSB7XHJcbiAgICAgICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJ0ZpbmlzaGVkISBDb25ncmF0cyEnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdXJyZW50RXhlcmNpc2UgPSBNYXRoLmZsb29yKCRzY29wZS50aW1lUmVtYWluaW5nIC8gZXhjZXJjaXNlVGltZSk7XHJcbiAgICAgICAgdmFyIHRpbWVyID0gJHNjb3BlLnRpbWVSZW1haW5pbmcgLSBjdXJyZW50RXhlcmNpc2UgKiBleGNlcmNpc2VUaW1lO1xyXG4gICAgICAgICRzY29wZS50aW1lciA9IHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nID8gdGltZXIgLSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgOiB0aW1lcjtcclxuICAgICAgICBpZiAodGltZXIgPiAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0gZXhlcmNpc2VzW2V4ZXJjaXNlcy5sZW5ndGggLSBjdXJyZW50RXhlcmNpc2UgLSAxXTtcclxuICAgICAgICBpZiAodGltZXIgPT09ICRzY29wZS50aW1lRXhlcmNpc2luZykge1xyXG4gICAgICAgICAgc291bmRzLm9uLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRpbWVyID09PSAwKSB7XHJcbiAgICAgICAgICBzb3VuZHMub2ZmLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRzY29wZS5leGVyY2lzZS5zcGxpdCAmJiB0aW1lciA9PT0gTWF0aC5mbG9vcigkc2NvcGUudGltZUV4ZXJjaXNpbmcgLyAyKSkge1xyXG4gICAgICAgICAgc291bmRzLnN3aXRjaC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAkc2NvcGUudGltZXIgPSAnJztcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJycsIHNwbGl0OiBmYWxzZX07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0NhdGVnb3JpZXNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VGFza3MgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nLCBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZFRhc2sgPSBmdW5jdGlvbiAoY2F0ZWdvcnksIHRhc2spIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5ICsgJy90YXNrcycsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICBzdmMuY2hvaWNlcyA9IGxpc3Q7XHJcbiAgICBzdmMucHJpb3JpdHlMaXN0ID0gW107XHJcbiAgICAvL01ha2UgYSBuZXcgY2hvaWNlIGxpc3RcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKHZhciBqID0gaSArIDE7IGogPCBsaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgc3ZjLnByaW9yaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgZmlyc3RDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaSA6IGpdLm5hbWUsXHJcbiAgICAgICAgICBzZWNvbmRDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaiA6IGldLm5hbWUsXHJcbiAgICAgICAgICBjaG9pY2U6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNodWZmbGUoc3ZjLnByaW9yaXR5TGlzdCk7XHJcbiAgICBmb3IgKGkgaW4gc3ZjLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBzdmMucHJpb3JpdHlMaXN0W2ldLmlkID0gaSArIDE7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHJldHVybiBzdmMucHJpb3JpdHlMaXN0O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcclxuICAgIHZhciBtID0gYXJyYXkubGVuZ3RoLCB0LCBpO1xyXG4gICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGXigKZcclxuICAgIHdoaWxlIChtKSB7XHJcbiAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudOKAplxyXG4gICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbS0tKTtcclxuICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAvL2FycmF5W21dLmZpcnN0Q2hvaWNlO1xyXG4gICAgICB0ID0gYXJyYXlbbV07XHJcbiAgICAgIGFycmF5W21dID0gYXJyYXlbaV07XHJcbiAgICAgIGFycmF5W2ldID0gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdFbWFpbFN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuc2VuZCA9IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZW1haWwnLCBlbWFpbCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuc2VydmljZSgnRmlsZVN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gICAgc3ZjLmdldEltYWdlcyA9IGZ1bmN0aW9uKGZvbGRlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2ZpbGVzL2ltYWdlcy8nICsgZm9sZGVyKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLmdldFNvdW5kcyA9IGZ1bmN0aW9uKGZvbGRlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2ZpbGVzL3NvdW5kcy8nICsgZm9sZGVyKTtcclxuICAgIH07XHJcblxyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnR2FtZVN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gICAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gICAgc3ZjLmdldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZ2FtZXMvJyArIGdhbWUgKyAnLycgKyB1c2VyICsgJy9oaWdoc2NvcmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLnNldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyLCBzY29yZSkge1xyXG4gICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9nYW1lcy8nICsgZ2FtZSArICcvJyArIHVzZXIgKyAnL2hpZ2hzY29yZScsIHtcclxuICAgICAgICBzY29yZTogc2NvcmVcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnTGFuZ3VhZ2VTdmMnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5sYW5ndWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkVOXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkVuZ2xpc2hcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWdiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIk5MXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIk5lZGVybGFuZHNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLW5sXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkZSXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkZyYW7Dp2Fpc1wiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tZnJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy50ZXh0ID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgc3ZjLnNlbGVjdGVkTGFuZ3VhZ2UgPSBzdmMubGFuZ3VhZ2VzWzBdO1xyXG5cclxuICBzdmMuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcclxuICAgIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICByZXR1cm4gbGFuZ3VhZ2U7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHN2Yy5zZWxlY3RlZExhbmd1YWdlO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZmV0Y2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJyk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQb3N0ID0gZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMvJyArIHBvc3QuX2lkKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJUZW5UaGluZ3NTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9ib3RzL3RlbnRoaW5ncy9xdWV1ZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0cyA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgIHZhciB1cmwgPVxyXG4gICAgICBgL2FwaS90ZW50aGluZ3MvbGlzdHM/YCArXHJcbiAgICAgIChvcHRpb25zLmxpbWl0ID8gYCZsaW1pdD0ke29wdGlvbnMubGltaXR9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMucGFnZSA/IGAmcGFnZT0ke29wdGlvbnMucGFnZX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zb3J0QnkgPyBgJnNvcnRfYnk9JHtvcHRpb25zLnNvcnRCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5vcmRlckJ5ID8gYCZvcmRlcl9ieT0ke29wdGlvbnMub3JkZXJCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5sYW5ndWFnZXMgJiYgb3B0aW9ucy5sYW5ndWFnZXMubGVuZ3RoID4gMCA/IGAmbGFuZ3VhZ2U9JHtvcHRpb25zLmxhbmd1YWdlcy5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5jYXRlZ29yaWVzICYmIG9wdGlvbnMuY2F0ZWdvcmllcy5sZW5ndGggPiAwID8gYCZjYXRlZ29yaWVzPSR7b3B0aW9ucy5jYXRlZ29yaWVzLmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnNlYXJjaCA/IGAmc2VhcmNoPSR7b3B0aW9ucy5zZWFyY2h9YCA6IFwiXCIpO1xyXG4gICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvY2F0ZWdvcmllc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9sYW5ndWFnZXNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkLCBsaXN0KTtcclxuICB9O1xyXG5cclxuICBzdmMuc2F2ZUxpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnB1dChcIi9hcGkvdGVudGhpbmdzL2xpc3RzXCIsIHtcclxuICAgICAgdXNlcjogdXNlcixcclxuICAgICAgbGlzdDogbGlzdCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5yZXBvcnRMaXN0ID0gZnVuY3Rpb24gKHVzZXIsIGxpc3QpIHtcclxuICAgICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi9yZXBvcnQvXCIgKyB1c2VyLl9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmRlbGV0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLmRlbGV0ZShcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRCbHVyYnMgPSBmdW5jdGlvbiAobGlzdCwgdHlwZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL2xpc3RzLyR7bGlzdC5faWR9L2JsdXJicy8ke3R5cGV9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvcGF1c2VgKTtcclxuICB9O1xyXG5cclxuICBzdmMudG9nZ2xlUGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvcGF1c2VgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0R2FtZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvZ2FtZS8ke2lkfWApO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiVXNlclN2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vyc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VXNlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9hbGxcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnRvZ2dsZUJhbiA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS91c2Vycy9iYW4vJHtpZH1gKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2V0VG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiWC1BdXRoXCJdID0gdG9rZW47XHJcbiAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICB9O1xyXG5cclxuICBzdmMuYXV0aGVudGljYXRlID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvYXV0aGVudGljYXRlXCIsIHtcclxuICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICByZXR1cm4gc3ZjLnNldFRva2VuKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMubG9naW4gPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvbG9naW5cIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS50b2tlbiA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlVXNlciA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlci5faWQsIHtcclxuICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGVja1Bhc3N3b3JkID0gZnVuY3Rpb24gKHVzZXIsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvdmVyaWZpY2F0aW9uXCIsIHtcclxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoYW5nZVBhc3N3b3JkID0gZnVuY3Rpb24gKHVzZXIsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL3Bhc3N3b3JkXCIsIHtcclxuICAgICAgb2xkUGFzc3dvcmQ6IG9sZFBhc3N3b3JkLFxyXG4gICAgICBuZXdQYXNzd29yZDogbmV3UGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlVXNlcm5hbWUgPSBmdW5jdGlvbiAodXNlciwgbmV3VXNlcm5hbWUpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvdXNlcm5hbWVcIiwge1xyXG4gICAgICAgIG5ld1VzZXJuYW1lOiBuZXdVc2VybmFtZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMubG9nb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSBcIlwiO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vyc1wiLCB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdmMubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5jb250cm9sbGVyKCdRdWl6QW5pbWFsc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIEZpbGVTdmMpIHtcclxuXHJcbiAgICBGaWxlU3ZjLmdldFNvdW5kcygnYW5pbWFscycpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLmFuaW1hbHMgPSBfLnNodWZmbGUocmVzcG9uc2UuZGF0YS5tYXAoYW5pbWFsID0+ICh7XHJcbiAgICAgICAgICBzb3VuZDogYW5pbWFsLFxyXG4gICAgICAgICAgbmFtZTogYW5pbWFsLnN1YnN0cmluZygwLCBhbmltYWwuaW5kZXhPZignLicpKS5yZXBsYWNlKCdfJywgJyAnKS5jYXBpdGFsaXplKClcclxuICAgICAgICB9KSkpO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW1hbCBvZiAkc2NvcGUuYW5pbWFscykge1xyXG4gICAgICAgICAgYW5pbWFsLmFuc3dlcnMgPSBfLnNodWZmbGUoW2FuaW1hbC5uYW1lLCAuLi5nZXRSYW5kb21BbmltYWxzKGFuaW1hbC5uYW1lKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuYW5pbWFscyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5ndWVzcyA9IChhbmltYWwsIGd1ZXNzKSA9PiB7XHJcbiAgICAgIGFuaW1hbC5ndWVzcyA9IGd1ZXNzO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRSYW5kb21BbmltYWxzID0gbmFtZSA9PiBfLnNodWZmbGUoJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBuYW1lICE9PSBhbmltYWwubmFtZSkubWFwKGFuaW1hbCA9PiBhbmltYWwubmFtZSkpLnNsaWNlKDAsIDUpO1xyXG5cclxuICAgICRzY29wZS5nZXRTY29yZSA9ICgpID0+IGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAgICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxuICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1F1aXpHb29nbGVDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdnb29nbGUnKVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpekxvZ29zQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnbG9nb3MnKVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpek1vdmllc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ21vdmllcycpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmNvbnRyb2xsZXIoJ1F1aXpTa2VsZXRvbnNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBGaWxlU3ZjKSB7XHJcblxyXG4gICAgRmlsZVN2Yy5nZXRJbWFnZXMoJ3NrZWxldG9ucycpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLmFuaW1hbHMgPSBfLnNodWZmbGUocmVzcG9uc2UuZGF0YS5tYXAoYW5pbWFsID0+ICh7XHJcbiAgICAgICAgICBpbWFnZTogYW5pbWFsLFxyXG4gICAgICAgICAgbmFtZTogYW5pbWFsLnN1YnN0cmluZygwLCBhbmltYWwuaW5kZXhPZignLicpKS5yZXBsYWNlKCdfJywgJyAnKS5jYXBpdGFsaXplKClcclxuICAgICAgICB9KSkpO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW1hbCBvZiAkc2NvcGUuYW5pbWFscykge1xyXG4gICAgICAgICAgYW5pbWFsLmFuc3dlcnMgPSBfLnNodWZmbGUoW2FuaW1hbC5uYW1lLCAuLi5nZXRSYW5kb21BbmltYWxzKGFuaW1hbC5uYW1lKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuYW5pbWFscyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5ndWVzcyA9IChhbmltYWwsIGd1ZXNzKSA9PiB7XHJcbiAgICAgIGFuaW1hbC5ndWVzcyA9IGd1ZXNzO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRSYW5kb21BbmltYWxzID0gbmFtZSA9PiBfLnNodWZmbGUoJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBuYW1lICE9PSBhbmltYWwubmFtZSkubWFwKGFuaW1hbCA9PiBhbmltYWwubmFtZSkpLnNsaWNlKDAsIDEwKTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0U2NvcmUgPSAoKSA9PiBgJHskc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IGFuaW1hbC5uYW1lID09PSBhbmltYWwuZ3Vlc3MpLmxlbmd0aH0vJHskc2NvcGUuYW5pbWFscy5sZW5ndGh9YDtcclxuXHJcbiAgICAkc2NvcGUuaXNTY29yZVZpc2libGUgPSAoKSA9PiAkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IGFuaW1hbC5ndWVzcykubGVuZ3RoID09PSAkc2NvcGUuYW5pbWFscy5sZW5ndGg7XHJcbiAgfSk7Il19
