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
    list ? "new" === list._id ? $scope.addList() : $scope.selectedList && list._id === $scope.selectedList._id || TenThingsSvc.getList(list).then(({
      data
    }) => {
      $scope.selectedList = data, $location.search("list", data._id), console.log(data);
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
    $scope.loading = !0, $location.search().search !== $scope.search && $location.search("search", $scope.search ? $scope.search : null);
    const {
      data
    } = await TenThingsSvc.getLists({
      page,
      sortBy: $scope.order.field,
      orderBy: $scope.order.reverse ? -1 : 1,
      limit: 200,
      search: $scope.search,
      languages: Object.keys($scope.languageFilter).filter(language => $scope.languageFilter[language]),
      categories: Object.keys($scope.categoryFilter).filter(category => $scope.categoryFilter[category])
    });
    return console.log("Page ", page, " results ", data.result.length), data.result.length < 100 ? exhausted = !0 : page = data.nextPage, $scope.loading = !1, console.log(data.result.slice(0, 10)), data.result;
  };
  $scope.addValue = () => {
    $scope.newItem.value && ($scope.hasDuplicate() ? alert(`${$scope.newItem.value} is already in the list`) : ($scope.newItem.creator = $scope.currentUser._id, $scope.selectedList.values.unshift(JSON.parse(JSON.stringify($scope.newItem))), $scope.selectedList.answers++, $scope.upsertList($scope.selectedList), $scope.newItem.value = "", $scope.newItem.blurb = "")), $("#new-value").focus();
  }, $scope.upsertList = (list, updates) => {
    $scope.saving = !0, list.values.length >= 10 && list.name && list.categories.length > 0 && ("new" !== list._id ? TenThingsSvc.updateList({
      _id: list._id,
      ...(updates || list)
    }).then(({
      data
    }) => {
      console.log(data), $scope.saving = !1;
    }, console.error) : TenThingsSvc.saveList($scope.currentUser, $scope.selectedList).then(({
      data
    }) => {
      "new" === $location.search().list && $location.search("list", data._id), $scope.getLists(), $scope.saving = !1;
    }, console.error));
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiY29udHJvbGxlcnMvYXBwLmN0cmwuanMiLCJjb250cm9sbGVycy9hc3Rlcm9pZHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2J1YmJsZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NoYXJhZGVzLmN0cmwuanMiLCJjb250cm9sbGVycy9jb250YWN0LmN0cmwuanMiLCJjb250cm9sbGVycy9leHBlcmllbmNlLmN0cmwuanMiLCJjb250cm9sbGVycy9ob2JiaWVzLmN0cmwuanMiLCJjb250cm9sbGVycy9sZW1taW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbGlzdHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xvZ2luLmN0cmwuanMiLCJjb250cm9sbGVycy9wb3N0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJpb3JpdGl6ZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJvZmlsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvc2tpbGxzLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3MuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2FkbWluLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NjdXJhdGUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2dhbWUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3dvcmtvdXQuY3RybC5qcyIsImRpcmVjdGl2ZXMvY2xpY2stb3V0c2lkZS5kaXIuanMiLCJkaXJlY3RpdmVzL3VpLXJvdXRlci1zdHlsZXMuZGlyLmpzIiwic2VydmljZXMvY2F0ZWdvcmllcy5zdmMuanMiLCJzZXJ2aWNlcy9lbWFpbC5zdmMuanMiLCJzZXJ2aWNlcy9maWxlLnN2Yy5qcyIsInNlcnZpY2VzL2dhbWUuc3ZjLmpzIiwic2VydmljZXMvbGFuZ3VhZ2Uuc3ZjLmpzIiwic2VydmljZXMvcG9zdHMuc3ZjLmpzIiwic2VydmljZXMvdGVudGhpbmdzLnN2Yy5qcyIsInNlcnZpY2VzL3VzZXIuc3ZjLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9hbmltYWxzLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2dvb2dsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9sb2dvcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9tb3ZpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvc2tlbGV0b25zLmN0cmwuanMiXSwibmFtZXMiOlsiZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwIiwiYmFzZSIsImxldHRlcnMiLCJkb21haW5zIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJTdHJpbmciLCJwcm90b3R5cGUiLCJ2YWx1ZSIsInJlZHVjZSIsInJlc3VsdCIsImxldHRlciIsInJlcGxhY2UiLCJ0aGlzIiwiU1BFQ0lBTF9DSEFSQUNURVJTIiwiUmVnRXhwIiwidG9Mb3dlckNhc2UiLCJyZW1vdmVEaWFjcml0aWNzIiwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMiLCJleHRyYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsIiRzY29wZSIsIiRsb2NhdGlvbiIsIkxhbmd1YWdlU3ZjIiwiVXNlclN2YyIsImxvZ2luIiwidXNlciIsImxvZ2dlZEluIiwibG9jYWxTdG9yYWdlIiwiX2lkIiwiY3VycmVudFVzZXIiLCIkIiwibG9hZCIsImZhZGVPdXQiLCJmYWRlSW4iLCJvbiIsImNsb3Nlc3QiLCJ0b2dnbGVDbGFzcyIsImNoZWNrZWQiLCJkb2N1bWVudCIsInN0b3BQcm9wYWdhdGlvbiIsInRoZW1lQ291bnRlciIsInRvZGF5IiwiRGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsImZsaXBUaGVtZSIsInNob3ciLCJoaWRlIiwic2V0VGltZW91dCIsImdldEpTT04iLCJza2lsbHMiLCJmaWx0ZXIiLCJza2lsbCIsImhvYmJpZXMiLCJqb2JzIiwiam9iIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImNoYXJhZGVzIiwiZ2V0VGltZVNwYW4iLCJsYW5ndWFnZXMiLCJzZWxlY3RlZExhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJzZWxlY3RMYW5ndWFnZSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJob3ZlcmRpdiIsImRpdmlkIiwibGVmdCIsImNsaWVudFgiLCJ0b3AiLCJjbGllbnRZIiwiZ2V0RWxlbWVudEJ5SWQiLCJjc3MiLCJ0b2dnbGUiLCJ0aGVuIiwicmVzcG9uc2UiLCIkb24iLCJfIiwiYmlydGhEYXRlIiwibG9hZGluZyIsImxvZ291dCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJjbGVhciIsImNhdGNoIiwiZXJyb3IiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImNhcGl0YWxpemUiLCJHYW1lU3ZjIiwiYW5ub3VuY2UiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZm9udCIsImZpbGxTdHlsZSIsInRleHRBbGlnbiIsInNob3RzIiwiYXN0ZXJvaWRzIiwicG93ZXJ1cHMiLCJleHBsb3Npb25zIiwibWFwIiwic3BhY2VwaWNzIiwic3BhY2UiLCJwb3dlcnVwVHlwZXMiLCJuYW1lIiwiYW5ub3VuY2VtZW50IiwiY3ljbGUiLCJyb3dzIiwiY29sdW1ucyIsInNpemUiLCJpbWciLCJJbWFnZSIsImFjdGl2YXRlIiwic3BhY2VzaGlwIiwibWF4U3BlZWQiLCJjb29sZG93biIsImNvb2xkb3duVGltZSIsInJhbmdlIiwic2hpZWxkIiwiZXhwbG9kZSIsInNwYXduQXN0ZXJvaWRzIiwicG93ZXJ1cCIsImFycmF5Iiwic3JjIiwiZXhwbG9zaW9uSW1hZ2UiLCJldmFsdWF0ZUtleXMiLCJwbGF5aW5nIiwic2hvb3QiLCJyb3RhdGlvbiIsInNwZWVkIiwic2NvcmUiLCIkYXBwbHkiLCJTcGFjZXNoaXAiLCJhdXRvU3Bhd24iLCJ3aWR0aCIsImhlaWdodCIsImNhbm5vbiIsIngiLCJ5IiwicG9zaXRpb24iLCJhbmdsZSIsImlkIiwicm91bmQiLCJTaG90IiwibW92ZSIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2UiLCJmaWxsIiwiYXN0ZXJvaWQiLCJoaXQiLCJnYW1lT3ZlciIsImNvcyIsInNpbiIsImxpZmVzcGFuIiwiQXN0ZXJvaWQiLCJnZXRFbnRyeVBvc2l0aW9uIiwicm90YXRpb25TcGVlZCIsIkV4cGxvc2lvbiIsInNob3QiLCJwb2ludHMiLCJzcGF3blBvd2VydXAiLCJvYmplY3QiLCJQb3dlcnVwIiwiZGVsYXkiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiY29sdW1uIiwicm93IiwiZHJhd0ltYWdlIiwicmVzdG9yZSIsImdyaWRYIiwiZ3JpZFkiLCJvYmplY3QxIiwib2JqZWN0MiIsImtleXMiLCJhbW91bnQiLCJoaWdoc2NvcmUiLCJzZXRIaWdoc2NvcmUiLCJyZXNpemVDYW52YXMiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5Q29kZSIsIndoaWNoIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsImNsZWFyUmVjdCIsImdyYWRpZW50IiwiY3JlYXRlTGluZWFyR3JhZGllbnQiLCJhZGRDb2xvclN0b3AiLCJ0YWxseSIsImZpbGxUZXh0IiwibWVhc3VyZVRleHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJidWJibGVzIiwiY29sb3JzIiwiQnViYmxlIiwicmFkaXVzIiwiZXhwYW5kaW5nIiwiY2lyY3VtZmVyZW5jZSIsIm1heFJhZGl1cyIsInZ4IiwidnkiLCJmaWx0ZXJCdWJibGVzIiwiYnViYmxlIiwic2VsZWN0V29yZCIsImNhdGVnb3J5Iiwid29yZCIsIkVtYWlsU3ZjIiwib3B0aW9ucyIsInRleHQiLCJjb250YWN0IiwiZW1haWwiLCJwaG9uZSIsImFib3V0IiwibWVzc2FnZSIsInNlbmRpbmciLCJzZW50Iiwic3RhdHVzIiwiZXJyIiwiZ2V0U2tpbGwiLCJza2lsbENvZGUiLCJjb2RlIiwiJHdpbmRvdyIsImhvYmJ5U2VsZWN0b3JWaXNpYmxlIiwic2VsZWN0ZWRIb2JieSIsInNlbGVjdEhvYmJ5IiwiaG9iYnkiLCJzaG93SG9iYnkiLCJpbmRleCIsImltYWdlcyIsIkxFRlQiLCJSSUdIVCIsImxlbW1pbmdzSW1hZ2UiLCJkZWNvckltYWdlIiwibGVtbWluZ3MiLCJzdGFydGVkIiwiYWN0aW9ucyIsIndhbGsiLCJzdGFydCIsImVuZCIsInJldmVyc2UiLCJodWgiLCJmYWxsIiwiZmx5Iiwic3RvcCIsImNsaW1iIiwiYnVpbGQiLCJwdW5jaCIsImRpZyIsIkxlbW1pbmciLCJpbml0IiwiYWN0IiwiYWN0aW9uIiwiYW5pbWF0aW9uIiwic2NhbGUiLCJoYXRjaCIsIm9wZW4iLCJyZWN0IiwiQ2F0ZWdvcmllc1N2YyIsInNob3dDYXRlZ29yeSIsImdldENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidGFza3MiLCJqIiwidGFzayIsInNlbGVjdENhdGVnb3J5Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdGVkVGFza3MiLCJzZWxlY3RhYmxlVGFza3MiLCJlbnRlcmVkQ2F0ZWdvcnkiLCJuZXdDYXRlZ29yeSIsImZvdW5kIiwiYWRkQ2F0ZWdvcnkiLCJuZXdUYXNrIiwic2VsZWN0VGFzayIsImFkZFRhc2siLCJlbnRlcmVkVGFzayIsInJlbW92ZVRhc2siLCJ1bnNlbGVjdFRhc2siLCJ0YXNrTGlzdCIsInNwbGljZSIsImluZGV4T2YiLCJzdGFydFByaW9yaXRpemluZyIsInNldFByaW9yaXR5TGlzdCIsInBhdGgiLCJnZXRRdWVzdGlvbnMiLCJjb3VudGVyIiwidWkiLCJmaXJlYmFzZXVpIiwiQXV0aFVJIiwic3RhcnRVSSIsImNhbGxiYWNrcyIsInNpZ25JblN1Y2Nlc3MiLCJjcmVkZW50aWFsIiwicmVkaXJlY3RVcmwiLCJnZXRJZFRva2VuIiwiaWRUb2tlbiIsImF1dGhlbnRpY2F0ZSIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJlbWFpbFZlcmlmaWVkIiwiJGVtaXQiLCJtb2RhbCIsInR5cGUiLCJzaWduSW5GYWlsdXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjcmVkIiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJ1aVNob3duIiwic3R5bGUiLCJkaXNwbGF5Iiwic2lnbkluU3VjY2Vzc1VybCIsInNpZ25Jbk9wdGlvbnMiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJQUk9WSURFUl9JRCIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwic2lnbkluRmxvdyIsImV2ZW50IiwicmVzZXQiLCIkZmlsdGVyIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJjcmVhdGUiLCJib2R5IiwicG9zdCIsImZldGNoIiwicG9zdHMiLCJnZXRQb3N0IiwidW5zaGlmdCIsInByaW9yaXR5TGlzdCIsImdldFByaW9yaXR5TGlzdCIsInNlbGVjdGVkUXVlc3Rpb24iLCJjdXJyZW50UXVlc3Rpb24iLCJkb25lIiwibWFrZUNob2ljZSIsImNob2ljZSIsImZpcnN0Q2hvaWNlIiwic2Vjb25kQ2hvaWNlIiwiZ2V0QnV0dG9uVmFsdWUiLCJzZWxlY3RRdWVzdGlvbiIsInF1ZXN0aW9uIiwiZ2V0RmlsdGVyZWRQcmlvcml0eUxpc3QiLCJnZXRDaG9pY2VzTWFkZSIsImNob2ljZXNNYWRlIiwiZ2V0QnV0dG9uQ2xhc3MiLCJzaG93Q2hvaWNlcyIsImNoYXJ0Q2xpY2siLCJjaGFydCIsImdldFNlZ21lbnRzQXRFdmVudCIsInNob3dSZXN1bHRzIiwicmVzcG9uc2l2ZSIsInNlZ21lbnRTaG93U3Ryb2tlIiwic2VnbWVudFN0cm9rZUNvbG9yIiwic2VnbWVudFN0cm9rZVdpZHRoIiwicGVyY2VudGFnZUlubmVyQ3V0b3V0IiwiYW5pbWF0aW9uU3RlcHMiLCJhbmltYXRpb25FYXNpbmciLCJhbmltYXRlUm90YXRlIiwiYW5pbWF0ZVNjYWxlIiwibGVnZW5kVGVtcGxhdGUiLCJjaG9pY2VzIiwidm90ZXMiLCJsYWJlbCIsIm9mZnNldCIsImdlbmRlciIsInNleCIsImlkZW50aXR5Iiwic2V4ZXMiLCJpZGVudGl0aWVzIiwiZGF0ZU9wdGlvbnMiLCJtYXhEYXRlIiwibWluRGF0ZSIsImluaXREYXRlIiwiZGF0ZXBpY2tlck1vZGUiLCJwZXJjZW50YWdlIiwic3RhcnRTbGlkZXIiLCJkcmFnU2xpZGVyIiwic3RvcFNsaWRlciIsInVzZXJuYW1lVG9nZ2xlIiwicGFzc3dvcmRUb2dnbGUiLCJ0b2dnbGVVc2VybmFtZSIsIm5ld1VzZXJuYW1lIiwidXNlcm5hbWUiLCJ0b2dnbGVQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwib3JpZ2luYWxCZyIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiY2hhbmdlVXNlcm5hbWUiLCJ1cGRhdGVVc2VyIiwiJHdhdGNoIiwibG9hZENvdW50cmllcyIsIiRxdWVyeSIsImZsYWciLCJ0aWRiaXQiLCJjb3VudHJ5Iiwic2VsZWN0ZWRTa2lsbCIsInNraWxsc1Zpc2libGUiLCJwcm9qZWN0cyIsImxhYmVscyIsImVtcGxveWVyIiwiY29uY2F0IiwiZmlsdGVyZWRQcm9qZWN0cyIsInByb2plY3QiLCJpbmNsdWRlcyIsInNldFNlbGVjdGVkU2tpbGwiLCJjaGFydE9wdGlvbnMiLCJjdXRvdXRQZXJjZW50YWdlIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInRvb2x0aXBzIiwiY2hhcnRTdHlsZSIsImltYWdlIiwiVGVuVGhpbmdzU3ZjIiwiZmxhc2giLCJlbGVtZW50IiwiY29sb3IiLCJzZWFyY2giLCJ2YWx1ZXMiLCJrZXlEb3duIiwiaXMiLCJhZGRWYWx1ZSIsImZvY3VzIiwic2VhcmNoTmFtZSIsIm5ld0l0ZW0iLCJzZXRDYXRlZ29yeUZpbHRlciIsImNhdGVnb3J5RmlsdGVyIiwic2V0VXNlckZpbHRlciIsInVzZXJGaWx0ZXIiLCJzZXRVcGRhdGVGaWx0ZXIiLCJ1cGRhdGVGaWx0ZXIiLCJzZXRMYW5ndWFnZUZpbHRlciIsImxhbmd1YWdlRmlsdGVyIiwiZmlsdGVyZWRMaXN0cyIsImxpc3RzIiwiaXNEeW5hbWljIiwiY3JlYXRvciIsImdldExpc3RzIiwiY2F0ZWdvcnlGaWx0ZXJzIiwiZ2V0TGFuZ3VhZ2VzIiwibGFuZ3VhZ2VGaWx0ZXJzIiwibGlzdCIsInNlbGVjdExpc3QiLCJsaXN0T3JkZXIiLCJmaWVsZCIsInZhbHVlT3JkZXIiLCJzb3J0ZXIiLCJzb3J0RmllbGQiLCJzb3J0TGFiZWwiLCJnZXRMYW5ndWFnZUNvdW50IiwiY291bnQiLCJnZXRDYXRlZ29yeUNvdW50IiwiZ2V0VXBkYXRlQ291bnQiLCJ1c2VyRmlsdGVycyIsIkFsbCIsImxpc3QxIiwibGlzdDIiLCJ1c2VycyIsInVzZXJDb3VudCIsImdldExpc3QiLCJzZWxlY3RlZExpc3QiLCJnZXRDYXRlZ29yeUNsYXNzIiwidG9nZ2xlQ2F0ZWdvcnkiLCJjYXRlZ29yeUluZGV4Iiwibm9uRW5nbGlzaEluZGV4IiwiYWRkTGlzdCIsImN1cnJlbnRMYW5ndWFnZSIsImFuc3dlcnMiLCJoYXNEdXBsaWNhdGUiLCJzb21lIiwiYW5zd2VyIiwicmVtb3ZlQWxsQnV0TGV0dGVycyIsImFsZXJ0IiwiYmx1cmIiLCJzYXZlTGlzdCIsInJlcG9ydExpc3QiLCJyZXBvcnRlZCIsInNhdmluZyIsImRlbGV0ZUxpc3QiLCJjb25maXJtIiwibGlzdEJ1dHRvbkNsYXNzIiwiYmx1cmJzIiwiZGVzY3JpcHRpb24iLCJnZXRCbHVyYnMiLCJnZXR0aW5nQmx1cmJzIiwiYWRtaW4iLCJnZXRVc2VycyIsIm9yZGVyIiwib3JkZXJCeSIsImdldFF1ZXVlIiwicXVldWUiLCJnZXRQYXVzZSIsInBhdXNlZCIsInRvZ2dsZUJhbiIsInRvZ2dsZVBhdXNlIiwicGFnZSIsInVuZGVmaW5lZCIsImV4aGF1c3RlZCIsInNldFNlbGVjdGVkTGlzdCIsImdldE1vcmVMaXN0cyIsImFzeW5jIiwidG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIiLCJhbGxDYXRlZ29yaWVzIiwic29ydEJ5IiwibGltaXQiLCJuZXh0UGFnZSIsInVwc2VydExpc3QiLCJ1cGRhdGVzIiwidXBkYXRlTGlzdCIsInNldERpZmZpY3VsdHkiLCJkaWZmaWN1bHR5Iiwic2V0RnJlcXVlbmN5IiwiZnJlcXVlbmN5Iiwic2V0Q2F0ZWdvcnkiLCIkc3RhdGVQYXJhbXMiLCJnYW1lIiwiZ2V0R2FtZSIsInRpbWVSZW1haW5pbmciLCJ0aW1lRXhlcmNpc2luZyIsInRpbWVSZXN0aW5nIiwicmVzdCIsImV4ZXJjaXNpbmciLCJzb3VuZHMiLCJBdWRpbyIsIm9mZiIsInN3aXRjaCIsImV4ZXJjaXNlcyIsInNwbGl0IiwicHJvZ3Jlc3MiLCJ3b3Jrb3V0IiwiZXhjZXJjaXNlVGltZSIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lciIsImV4ZXJjaXNlIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50RXhlcmNpc2UiLCJwbGF5IiwiZGlyZWN0aXZlIiwiJGRvY3VtZW50IiwicmVzdHJpY3QiLCJzY29wZSIsImNsaWNrT3V0c2lkZSIsImxpbmsiLCJlbCIsImF0dHIiLCJ0YXJnZXQiLCJjb250YWlucyIsIiRldmFsIiwiJHN0YXRlIiwiJGNvbXBpbGUiLCIkaW50ZXJwb2xhdGUiLCJnZXRTdHlsZSIsInRlbXBsYXRlU3R5bGVVcmwiLCJocmVmIiwicmVsIiwibWF0Y2giLCJlbGVtIiwidGVtcGxhdGVTdHlsZXMiLCJodG1sIiwic3RhcnRTeW1ib2wiLCJlbmRTeW1ib2wiLCJhcHBlbmQiLCJ0b1N0YXRlIiwidG9QYXJhbXMiLCJmcm9tU3RhdGUiLCJmcm9tUGFyYW1zIiwic3RhdGVzIiwicGFyZW50IiwiZ2V0Iiwidmlld3MiLCJ2aWV3IiwiZmxhdCIsImdldFN0eWxlcyIsIiRodHRwIiwic3ZjIiwiZ2V0VGFza3MiLCJ0IiwibSIsInNodWZmbGUiLCJnZXRJbWFnZXMiLCJmb2xkZXIiLCJnZXRTb3VuZHMiLCJnZXRIaWdoc2NvcmUiLCJqb2luIiwicHV0IiwiZGVsZXRlIiwiZ2V0VXNlciIsInNldFRva2VuIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJjcmVhdGVVc2VyIiwiRmlsZVN2YyIsImFuaW1hbHMiLCJhbmltYWwiLCJzb3VuZCIsInN1YnN0cmluZyIsImdldFJhbmRvbUFuaW1hbHMiLCJndWVzcyIsImdldFNjb3JlIiwiaXNTY29yZVZpc2libGUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUFBLDJCQUFBQSxHQUFBLENBQ0E7SUFDQUMsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLENBQUE7RUFHQUMsT0FBQUEsR0FBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsTUFBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsQ0FBQTtBQUdBQyxNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGtCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBUiwyQkFBQUEsQ0FBQVMsTUFBQUEsQ0FBQSxDQUFBQyxNQUFBQSxFQUFBQyxNQUFBQSxLQUNBRCxNQUFBQSxDQUFBRSxPQUFBQSxDQUFBRCxNQUFBQSxDQUFBVCxPQUFBQSxFQUFBUyxNQUFBQSxDQUFBVixJQUFBQSxDQUFBQSxFQUNBWSxJQUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUE7QUFHQSxNQUFBQyxrQkFBQUEsR0FBQSxxQ0FBQTtBQUVBVixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLHlCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBRCxPQUFBQSxDQUFBLElBQUFHLE1BQUFBLENBQUEsSUFBQUQsa0JBQUFBLEdBQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsRUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQVYsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxxQkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUcsV0FBQUEsRUFBQUEsQ0FBQUMsZ0JBQUFBLEVBQUFBLENBQUFDLHVCQUFBQSxFQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWQsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxTQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBVyxLQUFBQSxFQUFBQTtJQUNBLE9BQUFOLElBQUFBLENBQUFELE9BQUFBLENBQUEsSUFBQUcsTUFBQUEsQ0FBQSxLQUFBRCxrQkFBQUEsR0FBQUssS0FBQUEsR0FBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxHQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBZixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFlBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFPLE1BQUFBLENBQUEsQ0FBQSxDQUFBLENBQUFDLFdBQUFBLEVBQUFBLEdBQUFSLElBQUFBLENBQUFTLEtBQUFBLENBQUEsQ0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWxCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsWUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLENBQUFBLE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsZUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLENBQUFBLE9BQUFBLENBQUEsR0FBQSxFQUFBLE1BQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsY0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQWUsSUFBQUEsRUFBQVgsT0FBQUEsRUFBQUE7SUFFQSxLQURBLElBQUFZLGFBQUFBLEdBQUFYLElBQUFBLEVBQ0FZLENBQUFBLEdBQUEsQ0FBQSxFQUFBQSxDQUFBQSxHQUFBRixJQUFBQSxDQUFBRyxNQUFBQSxFQUFBRCxDQUFBQSxFQUFBQSxFQUNBRCxhQUFBQSxHQUFBQSxhQUFBQSxDQUFBWixPQUFBQSxDQUFBVyxJQUFBQSxDQUFBRSxDQUFBQSxDQUFBQSxFQUFBYixPQUFBQSxDQUFBYSxDQUFBQSxDQUFBQSxDQUFBQTtJQUVBLE9BQUFELGFBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBcEIsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxVQUFB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Q0FDLEdBQUFBLEVBQUEsYUFBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxRQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsWUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsWUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsYUFBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxNQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxPQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGlCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG9CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxrQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsbUJBQUE7SUFDQUUsVUFBQUEsRUFBQSxxQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsZ0JBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsbUJBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsWUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxpQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsZ0JBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxtQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxVQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxXQUFBO0lBQ0FFLFVBQUFBLEVBQUEsY0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLEVBR0FMLGlCQUFBQSxDQUFBTyxTQUFBQSxDQUFBO0lBQ0FDLE9BQUFBLEVBQUFBLENBQUEsQ0FBQTtJQUNBQyxXQUFBQSxFQUFBQSxDQUFBO0VBQUEsQ0FBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDaEpBZixPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBZSxPQUFBQSxDQUFBLGNBQUEsRUFBQSxVQUFBQyxVQUFBQSxFQUFBQyxRQUFBQSxFQUFBQTtFQVNBLElBQUFDLFVBQUFBO0lBQ0FDLE9BQUFBLEdBQUEsU0FBQUEsQ0FBQSxFQUFBO01BQUEsQ0FDQUQsVUFBQUEsR0FBQSxJQUFBRSxTQUFBQSxDQVRBLFFBQUEsS0FBQUMsTUFBQUEsQ0FBQUMsUUFBQUEsQ0FBQUMsUUFBQUEsR0FDQSxR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QUEsQ0FBQSxJQUVBLENBQUEsS0FBQWEsU0FBQUEsQ0FBQUUsUUFBQUEsSUFDQUYsU0FBQUEsQ0FBQWMsS0FBQUEsRUFBQUEsRUFHQTNCLEdBQUFBLENBQUEsRUFBQSxDQUFBLEtBRUEsQ0FBQSxLQUFBYSxTQUFBQSxDQUFBZSxRQUFBQSxHQUNBZixTQUFBQSxDQUFBZSxRQUFBQSxHQUFBLEdBQUEsR0FFQWYsU0FBQUEsQ0FBQWUsUUFBQUEsSUFBQSxDQUFBLENBQUEsRUFHQTVCLEdBQUFBLENBQUEsRUFBQSxDQUFBLEtBRUEsR0FBQSxLQUFBYSxTQUFBQSxDQUFBZSxRQUFBQSxHQUNBZixTQUFBQSxDQUFBZSxRQUFBQSxHQUFBLENBQUEsR0FFQWYsU0FBQUEsQ0FBQWUsUUFBQUEsSUFBQSxDQUFBLENBQUEsRUFHQTVCLEdBQUFBLENBQUEsRUFBQSxDQUFBLEdBRUFhLFNBQUFBLENBQUFnQixLQUFBQSxJQUFBaEIsU0FBQUEsQ0FBQUMsUUFBQUEsS0FDQUQsU0FBQUEsQ0FBQWdCLEtBQUFBLElBQUEsQ0FBQSxDQUFBLEdBR0FoQixTQUFBQSxDQUFBZ0IsS0FBQUEsR0FBQSxDQUFBLElBQ0FoQixTQUFBQSxDQUFBZ0IsS0FBQUEsRUFBQUEsRUFHQTdCLEdBQUFBLENBQUEsRUFBQSxDQUFBLElBRUFhLFNBQUFBLENBQUFnQixLQUFBQSxHQUFBLENBQUEsS0FDQWhCLFNBQUFBLENBQUFnQixLQUFBQSxJQUFBLENBQUEsQ0FBQSxJQUlBN0IsR0FBQUEsQ0FBQSxFQUFBLENBQUEsS0E2T0F4RixNQUFBQSxDQUFBa0gsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0FsSCxNQUFBQSxDQUFBc0gsS0FBQUEsR0FBQSxDQUFBLEVBQ0E1QixLQUFBQSxHQUFBaEUsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQUQsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQWdFLFNBQUFBLENBQUFBLEVBQ0F6RixNQUFBQSxDQUFBdUgsTUFBQUEsRUFBQUEsRUFDQWxCLFNBQUFBLEdBQUEsSUFBQW1CLFNBQUFBLElBQ0F4SCxNQUFB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TUFDQTJJLEtBQUFBLEdBQUEsQ0FBQSxHQUFBMUksSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUE7TUFDQXFHLENBQUFBLEdBQUEsQ0FBQTtJQWdCQSxPQWZBcUMsS0FBQUEsSUFBQSxDQUFBLElBQ0F0QyxDQUFBQSxHQUFBbkcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQXFELE1BQUFBLENBQUE0QyxLQUFBQSxFQUVBSSxDQUFBQSxHQURBQSxDQUFBQSxJQUFBLENBQUEsR0FDQSxDQUFBLEdBQUFILE1BQUFBLEdBRUE3QyxNQUFBQSxDQUFBNkMsTUFBQUEsS0FHQUcsQ0FBQUEsR0FBQXBHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUFxRCxNQUFBQSxDQUFBNkMsTUFBQUEsRUFFQUUsQ0FBQUEsR0FEQXVDLEtBQUFBLElBQUEsQ0FBQSxHQUNBLENBQUEsR0FBQTFDLEtBQUFBLEdBRUE1QyxNQUFBQSxDQUFBNEMsS0FBQUEsQ0FBQUEsRUFHQSxDQUFBRyxDQUFBQSxFQUFBQyxDQUFBQSxDQUNBO0VBQUE7RUFFQSxTQUFBZSxHQUFBQSxDQUFBd0IsT0FBQUEsRUFBQUMsT0FBQUEsRUFBQUE7SUFDQSxPQUFBRCxPQUFBQSxDQUFBdEMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXVDLE9BQUFBLENBQUF2QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdUMsT0FBQUEsQ0FBQTVDLEtBQUFBLElBQ0E0QyxPQUFBQSxDQUFBdkMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXNDLE9BQUFBLENBQUF0QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBc0MsT0FBQUEsQ0FBQTNDLEtBQUFBLElBQ0EyQyxPQUFBQSxDQUFBdEMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXVDLE9BQUFBLENBQUF2QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdUMsT0FBQUEsQ0FBQTNDLE1BQUFBLElBQ0EyQyxPQUFBQSxDQUFBdkMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXNDLE9BQUFBLENBQUF0QyxRQUFBQSxD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QSxHQUFBNUosSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBNEosS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE3SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE0SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTdKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTRKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FILFFBQUFBLENBQUFFLFlBQUFBLENBQUEsTUFBQSxFQUFBLE1BQUEsR0FBQTVKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTRKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBN0osSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBNEosS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE3SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE0SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUFBLEtBQUEsRUFBQSxNQUFBLEdBQUE1SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE0SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTdKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTRKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBN0osSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBNEosS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFDQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FBQSxNQUFBLEVBQUEsTUFBQSxHQUFBNUosSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBNEosS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE3SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUE0SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTdKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTRKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FILFFBQUFBLENBQUFFLFlBQUFBLENBQUEsS0FBQSxFQUFBLE1BQUEsR0FBQTVKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQTRKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBN0osSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBNEosS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE3SixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUE0SixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBeEcsR0FBQUEsQ0FBQUcsU0FBQUEsR0FBQWtHLFFBQUFBLEVBQ0FyRyxHQUFBQSxDQUFBRSxJQUFBQSxHQUFBLGNBQUEsRUFDQUYsR0FBQUEsQ0FBQXlHLFFBQUFBLENBQUEsV0FBQSxFQUFBMUcsTUFBQUEsQ0FBQTRDLEtBQUFBLEdBQUEsQ0FBQSxHQUFBM0MsR0FBQUEsQ0FBQTBHLFdBQUFBLENBQUEsV0FBQSxDQUFBLENBQUEvRCxLQUFBQSxHQUFBLENBQUEsRUFBQTVDLE1BQUFBLENBQUE2QyxNQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBNUMsR0FBQUEsQ0FBQUUsSUFBQUEsR0FBQSxjQUFBLEVBQ0FGLEdBQUFBLENBQUF5RyxRQUFBQSxDQUFBLHNCQUFBLEVBQUExRyxNQUFBQSxDQUFBNEMsS0FBQUEsR0FBQSxD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UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EySSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBRSxJQUFBQSxFQUFBO1FBQ0FKLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F6SSxPQUFBQSxFQUFBLENBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EySSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBRyxHQUFBQSxFQUFBO1FBQ0FMLEtBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F6SSxPQUFBQSxFQUFBLENBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EySSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBSSxJQUFBQSxFQUFBO1FBQ0FOLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F6SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EySSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBSyxLQUFBQSxFQUFBO1FBQ0FQLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F6SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EySSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBTSxLQUFBQSxFQUFBO1FBQ0FSLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F6SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EySSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBTyxLQUFBQSxFQUFBO1FBQ0FULEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F6SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EySSxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBUSxHQUFBQSxFQUFBO1FBQ0FWLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F6SSxPQUFBQSxFQUFBLENBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0EySSxPQUFBQSxFQUFBQSxDQUFBO01BQUE7SUFBQSxDQUFBO0VBSUEsU0FBQVMsT0FBQUEsQ0FBQUMsSUFBQUEsRUFBQUE7SUFDQWhVLElBQUFBLENBQUEyTSxRQUFBQSxHQUFBLENBQUFyRyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxJQUFBcUQsTUFBQUEsQ0FBQTRDLEtBQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEVBQUFoRyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxJQUFBcUQsTUFBQUEsQ0FBQTZDLE1BQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFDQXZNLElBQUFBLENBQUFxQixTQUFBQSxHQUFBLENBQUEsR0FBQWlGLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUEsQ0FBQSxHQUFBdU0sSUFBQUEsR0FBQUMsS0FBQUEsRUFDQTdTLElBQUFBLENBQUFpVSxHQUFBQSxHQUFBLFVBQUFDLE1BQUFBLEVBQUFBO01BQ0FsVSxJQUFBQSxDQUFBa1UsTUFBQUEsR0FBQWhCLE9B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QUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFdBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsT0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxlQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFlBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsd0JBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxZQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsY0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxVQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxPQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGtCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxpQ0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxrQ0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxlQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEseUJBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsdUNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsMEJBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsT0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxhQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsY0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxPQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsT0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxVQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFlBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsTUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxZQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsa0JBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxnQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxVQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLG9CQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsZ0JBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxPQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxNQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLDZCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGlDQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxPQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLHNEQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxlQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsT0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxXQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFdBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFlBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsbUJBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSw4Q0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxXQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE1BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsZUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFdBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsbUNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxXQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxhQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsZ0NBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsTUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSwyQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsT0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxPQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFlBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxVQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsdUJBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsd0NBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsb0JBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxnQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxZQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGtDQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsYUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxlQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFdBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFdBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsWUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLHNCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFlBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsNEJBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsWUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxrQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSw0Q0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxNQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxPQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLDBCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFlBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsWUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxZQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsV0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxVQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxVQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFlBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxlQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsZ0JBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxXQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxPQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsTUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxhQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE1BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxNQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGtCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGtCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLDJCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsYUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxxQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxVQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxPQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLG9CQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsY0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxpQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxZQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxXQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLDhDQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsd0JBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxjQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFlBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsU0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsYUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSx1QkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxhQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLDJCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLHNCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFdBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsMEJBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsTUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSw2QkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxNQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsWUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLGFBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsY0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLE9BQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxxQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLDJCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLDhCQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsUUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxzQ0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSwwQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxTQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFlBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsVUFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxrQ0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxtQ0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSx5QkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxzQkFBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxVQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsbUJBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsT0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxPQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFNBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQTlTLElBQUFBLEVBQUEsY0FBQTtNQUFBOFMsSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBOVMsSUFBQUEsRUFBQSxRQUFBO01BQUE4UyxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUE5UyxJQUFBQSxFQUFBLFVBQUE7TUFBQThTLElBQUFBLEVBQUE7SUFBQSxDQUFBLENBQUEsQ0FFQXhXLE1BQUFBLENBQUEsVUFBQTBXLE9BQUFBLEVBQUFBO01BQ0EsT0FBQSxDQUFBLENBQUEsSUFBQUEsT0FBQUEsQ0FBQWhULElBQUFBLENBQUFySyxXQUFBQSxFQUFBQSxDQUFBNFYsT0FBQUEsQ0FBQXNILE1BQUFBLENBQUFsZCxXQUFBQSxFQUFBQSxDQUNBO0lBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FHQTtBQUFBLENBQUEsQ0FBQSxFQ3JZQTRCLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FXLFVBQUFBLENBQUEsWUFBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBd04sT0FBQUEsRUFBQUE7RUFFQXhOLE1BQUFBLENBQUE2WSxhQUFBQSxHQUFBLENBQUEsRUFDQTdZLE1BQUFBLENBQUE4WSxhQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQTlZLE1BQUFBLENBQUErWSxRQUFBQSxHQUFBLEVBQUEsRUFFQS9ZLE1BQUFBLENBQUFnWixNQUFBQSxHQUFBLENBQUEsZ0JBQUEsRUFBQSxnQkFBQSxFQUFBLGtCQUFBLENBQUEsRUFDQWhaLE1BQUFBLENBQUFSLElBQUFBLEdBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQSxFQUVBa0IsQ0FBQUEsQ0FBQXNCLE9BQUFBLENBQUEsa0JBQUEsRUFBQSxVQUFBeEMsSUFBQUEsRUFBQUE7SUFDQVEsTUFBQUEsQ0FBQStZLFFBQUFBLEdBQUF2WixJQUFBQSxDQUFBeEUsTUFBQUEsQ0FBQSxDQUFBK2QsUUFBQUEsRUFBQUUsUUFBQUEsS0FDQUEsUUFBQUEsQ0FBQUYsUUFBQUEsR0FBQUUsUUFBQUEsQ0FBQUYsUUFBQUEsQ0FBQUcsTUFBQUEsQ0FBQUgsUUFBQUEsQ0FBQUEsR0FDQUEsUUFBQUEsRUFDQSxDQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsQ0FBQSxFQUVBL1ksTUFBQUEsQ0FBQW1aLGdCQUFBQSxHQUFBLE1BQUFuWixNQUFBQSxDQUFBK1ksUUFBQUEsQ0FDQTdXLE1BQUFBLENBQUFrWCxPQUFBQSxJQUFBQSxPQUFBQSxDQUFBblgsTUFBQUEsSUFBQW1YLE9BQUFBLENBQUFuWCxNQUFBQSxDQUFBb1gsUUFBQUEsQ0FBQXJaLE1BQUFBLENBQUE2WSxhQUFBQSxDQUFBdEwsSUFBQUEsQ0FBQUEsQ0FBQUEsRUFFQTdNLENBQUFBLENBQUFzQixPQUFBQSxDQUFBLGNBQUEsRUFBQSxVQUFBeEMsSUFBQUEsRUFBQUE7SUFFQSxNQUFBeUMsTUFBQUEsR0FBQXpDLElBQUFBLENBQ0EwQyxNQUFBQSxDQUFBQyxLQUFBQSxJQUFBQSxLQUFBQSxDQUFBbEUsT0FBQUEsQ0FBQUE7SUFFQStCLE1BQUFBLENBQUErUCxVQUFBQSxHQUFBOU4sTUFBQUEsQ0FDQWpILE1BQUFBLENBQUEsVUFBQStVLFVBQUFBLEVBQUE1TixLQUFBQSxFQUFBQTtNQU1BLE9BTEE0TixVQUFBQSxDQUFBNU4sS0FBQUEsQ0FBQW9LLFFBQUFBLENBQUFBLEdBR0F3RCxVQUFBQSxDQUFBNU4sS0FBQUEsQ0FBQW9LLFFBQUFBLENBQUFBLENBQUEzUCxJQUFBQSxDQUFBdUYsS0FBQUEsQ0FBQUEsR0FGQTROLFVBQUFBLENBQUE1TixLQUFBQSxDQUFBb0ssUUFBQUEsQ0FBQUEsR0FBQSxDQUFBcEssS0FBQUEsQ0FBQUEsRUFJQTROLFVBQ0E7SUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsRUFFQS9QLE1BQUFBLENBQUFzWixnQkFBQUEsR0FBQSxVQUFBblgsS0FBQUEsRUFBQUE7TUFDQW5DLE1BQUFBLENBQUE2WSxhQUFBQSxHQUFBMVcsS0FBQUEsRUFDQW5DLE1BQUFBLENBQUE2WSxhQUFBQSxDQUFBVSxZQUFBQSxHQUFBO1FBQ0FDLGdCQUFBQSxFQUFBLEVBQUE7UUFDQXhOLGFBQUFBLEVBQUEsQ0FBQSxHQUFBdEssSUFBQUEsQ0FBQTZHLEVBQUFBO1FBQ0FrUixtQkFBQUEsRUFBQUEsQ0FBQSxDQUFBO1FBQ0FDLFFBQUFBLEVBQUE7VUFDQXpiLE9BQUFBLEVBQUFBLENBQUE7UUFBQTtNQUFBLENBQUEsRUFHQStCLE1BQUFBLENBQUE2WSxhQUFBQSxDQUFBYyxVQUFBQSxHQUFBO1FBQ0Esa0JBQUEsRUFBQSxjQUFBLEdBQUEzWixNQUFBQSxDQUFBNlksYUFBQUEsQ0FBQWUsS0FBQUEsR0FBQSxHQUFBO1FBQ0EsbUJBQUEsRUFBQSxXQUFBO1FBQ0EsaUJBQUEsRUFBQSxLQUFBO1FBQ0EscUJBQUEsRUFBQTtNQUFBLENBRUE7SUFBQSxDQUFBLEVBRUE1WixNQUFBQSxDQUFBc1osZ0JBQUFBLENBQUF0WixNQUFBQSxDQUFBaUMsTUFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUVBakMsTUFBQUEsQ0FBQXVILE1BQUFBLEVBQ0E7RUFBQSxDQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUMxREFwSyxPQUFBQSxDQUNBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUVBVyxVQUFBQSxDQUFBLGVBQUEsRUFBQSxVQUFBaUMsTUFBQUEsRUFBQUMsU0FBQUEsRUFBQTRaLFlBQUFBLEVBQUFBO0VBZ1RBLFNBQUFDLEtBQUFBLENBQUFDLE9BQUFBLEVBQUFBO0lBQ0EsTUFBQUMsS0FBQUEsR0FBQXRaLENBQUFBLENBQUFxWixPQUFBQSxDQUFBQSxDQUFBdlcsR0FBQUEsQ0FBQSxrQkFBQSxDQUFBO0lBQ0E5QyxDQUFBQSxDQUFBcVosT0FBQUEsQ0FBQUEsQ0FBQTlCLE9BQUFBLENBQ0E7TUFDQUMsZUFBQUEsRUFBQTtJQUFBLENBQUEsRUFFQSxHQUFBLEVBQ0EsTUFBQTtNQUNBeFgsQ0FBQUEsQ0FBQXFaLE9BQUFBLENBQUFBLENBQUE5QixPQUFBQSxDQUNBO1FBQ0FDLGVBQUFBLEVBQUE4QjtNQUFBQSxDQUFBQSxFQUVBLEdBQUEsQ0FDQTtJQUFBLENBQUEsQ0FHQTtFQUFBO0VBL1RBaGEsTUFBQUEsQ0FBQWlhLE1BQUFBLEdBQUE7SUFDQXJVLElBQUFBLEVBQUEsRUFBQTtJQUNBc1UsTUFBQUEsRUFBQTtFQUFBLENBQUEsRUFHQWxhLE1BQUFBLENBQUFtYSxPQUFBQSxHQUFBbGIsQ0FBQUEsSUFBQUE7SUFFQSxRQUFBLENBREFBLENBQUFBLEdBQUFBLENBQUFBLElBQUFSLE1BQUFBLENBQUErVSxLQUFBQSxFQUNBekksT0FBQUE7TUFDQSxLQUFBLENBQUE7UUFDQXJLLENBQUFBLENBQUEsWUFBQSxDQUFBLENBQUEwWixFQUFBQSxDQUFBLFFBQUEsQ0FBQSxJQUNBclksVUFBQUEsQ0FBQSxNQUFBO1VBQ0EvQixNQUFBQSxDQUFBcWEsUUFBQUEsRUFBQTtRQUFBLENBQUEsRUFDQSxHQUFBLENBQUE7UUFFQTtNQUNBLEtBQUEsRUFBQTtRQUNBM1osQ0FBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQTBaLEVBQUFBLENBQUEsUUFBQSxDQUFBLEdBQ0FwYSxNQUFBQSxDQUFBcWEsUUFBQUEsRUFBQUEsR0FDQTNaLENBQUFBLENBQUEsWUFBQSxDQUFBLENBQUEwWixFQUFBQSxDQUFBLFFBQUEsQ0FBQSxJQUNBMVosQ0FBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQTRaLEtBQUFBLEVBQUFBO0lBQUFBO0VBSUEsQ0FBQSxFQUlBdGEsTUFBQUEsQ0FBQXVhLFVBQUFBLEdBQUEsRUFBQSxFQUNBdmEsTUFBQUEsQ0FBQXdhLE9BQUFBLEdBQUEsQ0FBQSxDQUFBLEVBRUF4YSxNQUFBQSxDQUFBeWEsaUJBQUFBLEdBQUFsTyxRQUFBQSxJQUFBdk0sTUFBQUEsQ0FBQTBhLGNBQUFBLEdBQUFuTyxRQUFBQSxFQUNBdk0sTUFBQUEsQ0FBQTJhLGFBQUFBLEdBQUF0YSxJQUFBQSxJQUFBTCxNQUFBQSxDQUFBNGEsVUFBQUEsR0FBQXZhLElBQUFBLEVBQ0FMLE1BQUFBLENBQUE2YSxlQUFBQSxHQUFBcEksSUFBQUEsSUFBQXpTLE1BQUFBLENBQUE4YSxZQUFBQSxHQUFBckksSUFBQUEsRUFDQXpTLE1BQUFBLENBQUErYSxpQkFBQUEsR0FBQWhZLFFBQUFBLElBQUEvQyxNQUFBQSxDQUFBZ2IsY0FBQUEsR0FBQWpZLFFBQUFBLEVBRUEvQyxNQUFBQSxDQUFBaWIsYUFBQUEsR0FBQSxNQUNBamIsTUFBQUEsQ0FBQWtiLEtBQUFBLEdBQ0FsYixNQUFBQSxDQUFBa2IsS0FBQUEsQ0FDQWhaLE1BQUFBLENBQUEsQ0FBQTtJQUFBaVo7RUFBQUEsQ0FBQUEsS0FDQSxLQUFBLEtBQUFuYixNQUFBQSxDQUFBOGEsWUFBQUEsSUFBQUEsRUFFQSxRQUFBLEtBQUE5YSxNQUFBQSxDQUFBOGEsWUFBQUEsSUFBQUEsQ0FBQSxDQUFBLEtBQUFLLFNBQUFBLElBQ0EsU0FBQSxLQUFBbmIsTUFBQUEsQ0FBQThhLFlBQUFBLElBQUFBLENBQUEsQ0FBQSxLQUFBSyxTQUFBQSxDQUFBQSxDQUFBQSxDQU1BalosTUFBQUEsQ0FBQSxDQUFBO0lBQUE2TjtFQUFBQSxDQUFBQSxLQUNBLEtBQUEsS0FBQS9QLE1BQUFBLENBQUEwYSxjQUFBQSxLQUdBM0ssVUFBQUEsQ0FBQTlULE1BQUFBLEdBQUEsQ0FBQSxHQUNBOFQsVUFBQUEsQ0FBQW9CLE9BQUFBLENBQUFuUixNQUFBQSxDQUFBMGEsY0FBQUEsQ0FBQUEsSUFBQSxDQUFBLEdBRUEsT0FBQSxLQUFBMWEsTUFBQUEsQ0FBQTBhLGNBQUFBLENBQUFBLENBQUFBLENBSUF4WSxNQUFBQSxDQUFBLENBQUE7SUFBQWtaO0VBQUFBLENBQUFBLEtBQ0EsS0FBQSxLQUFBcGIsTUFBQUEsQ0FBQTRhLFVBQUFBLElBR0FRLE9BQUFBLEtBQUFwYixNQUFBQSxDQUFBNGEsVUFBQUEsQ0FBQUEsQ0FHQTFZLE1BQUFBLENBQUEsQ0FBQTtJQUFBYTtFQUFBQSxDQUFBQSxLQUNBLEtBQUEsS0FBQS9DLE1BQUFBLENBQUFnYixjQUFBQSxDQUFBek4sSUFBQUEsSUFHQXhLLFFBQUFBLEtBQUEvQyxNQUFBQSxDQUFBZ2IsY0FBQUEsQ0FBQXpOLElBQUFBLENBQUFBLEdBbENBLEVBQUEsRUF1Q0F2TixNQUFBQSxDQUFBNEQsR0FBQUEsQ0FBQSxPQUFBLEVBQUFDLENBQUFBLElBQUFBO0lBQ0E3RCxNQUFBQSxDQUFBcWIsUUFBQUEsRUFBQUEsRUFDQXhCLFlBQUFBLENBQUEvSixhQUFBQSxFQUFBQSxDQUFBcE0sSUFBQUEsQ0FBQUMsUUFBQUEsSUFBQUE7TUFDQTNELE1BQUFBLENBQUErUCxVQUFBQSxHQUFBcE0sUUFBQUEsQ0FBQW5FLElBQUFBLEVBQ0FRLE1BQUFBLENBQUFzYixlQUFBQSxHQUFBdGIsTUFBQUEsQ0FBQStQLFVBQUFBLENBQUF2SyxHQUFBQSxDQUFBK0csUUFBQUEsSUFBQUEsUUFBQUEsQ0FBQUEsRUFDQXZNLE1BQUFBLENBQUFzYixlQUFBQSxDQUFBMWUsSUFBQUEsQ0FBQSxLQUFBLENBQUEsRUFDQW9ELE1BQUFBLENBQUFzYixlQUFBQSxDQUFBMWUsSUFBQUEsQ0FBQSxPQUFBLENBQUEsRUFDQW9ELE1BQUFBLENBQUEwYSxjQUFBQSxHQUFBLEtBQUEsRUFDQTFhLE1BQUFBLENBQUE4YSxZQUFBQSxHQUFBLEtBQUE7SUFBQSxDQUFBLENBQUEsRUFFQWpCLFlBQUFBLENBQUEwQixZQUFBQSxFQUFBQSxDQUFBN1gsSUFBQUEsQ0FBQUMsUUFBQUEsSUFBQUE7TUFDQTNELE1BQUFBLENBQUEyQyxTQUFBQSxHQUFBZ0IsUUFBQUEsQ0FBQW5FLElBQUFBLEVBQ0FRLE1BQUFBLENBQUF3YixlQUFBQSxHQUFBeGIsTUFBQUEsQ0FBQTJDLFNBQUFBLENBQUE2QyxHQUFBQSxDQUFBekMsUUFBQUEsSUFBQUEsUUFBQUEsQ0FBQUEsRUFDQS9DLE1BQUFBLENBQUF3YixlQUFBQSxDQUFBNWUsSUFBQUEsQ0FBQTtRQUFBZ0osSUFBQUEsRUFBQSxLQUFBO1FBQUEySCxJQUFBQSxFQUFBO01BQUEsQ0FBQSxDQUFBLEVBQ0F2TixNQUFBQSxDQUFBZ2IsY0FBQUEsR0FBQTtRQUFBcFYsSUFBQUEsRUFBQSxLQUFBO1FBQUEySCxJQUFBQSxFQUFBO01BQUEsQ0FBQTtJQUFBLENBQUEsQ0FBQSxFQUVBdE4sU0FBQUEsQ0FBQWdhLE1BQUFBLEVBQUFBLENBQUF3QixJQUFBQSxJQUNBemIsTUFBQUEsQ0FBQTBiLFVBQUFBLENBQUE7TUFBQWxiLEdBQUFBLEVBQUFQLFNBQUFBLENBQUFnYSxNQUFBQSxFQUFBQSxDQUFBd0I7SUFBQUEsQ0FBQUEsQ0FDQTtFQUFBLENBQUEsQ0FBQSxFQUdBemIsTUFBQUEsQ0FBQTJiLFNBQUFBLEdBQUE7SUFDQUMsS0FBQUEsRUFBQSxNQUFBO0lBQ0FuZixTQUFBQSxFQUFBQSxDQUFBLENBQUE7SUFDQTZaLEtBQUFBLEVBQUE7RUFBQSxDQUFBLEVBR0F0VyxNQUFBQSxDQUFBNmIsVUFBQUEsR0FBQTtJQUNBRCxLQUFBQSxFQUFBLE9BQUE7SUFDQW5mLFNBQUFBLEVBQUFBLENBQUEsQ0FBQTtJQUNBNlosS0FBQUEsRUFBQTtFQUFBLENBQUEsRUFHQXRXLE1BQUFBLENBQUFuRCxJQUFBQSxHQUFBLENBQUFpZixNQUFBQSxFQUFBQyxTQUFBQSxFQUFBQyxTQUFBQSxLQUFBQTtJQUNBaGMsTUFBQUEsQ0FBQThiLE1BQUFBLENBQUFBLENBQUF4RixLQUFBQSxHQUFBMEYsU0FBQUEsRUFDQWhjLE1BQUFBLENBQUE4YixNQUFBQSxDQUFBQSxDQUFBRixLQUFBQSxLQUFBRyxTQUFBQSxHQUNBL2IsTUFBQUEsQ0FBQThiLE1BQUFBLENBQUFBLENBQUFyZixTQUFBQSxHQUFBQSxDQUFBdUQsTUFBQUEsQ0FBQThiLE1BQUFBLENBQUFBLENBQUFyZixTQUFBQSxJQUVBdUQsTUFBQUEsQ0FBQThiLE1BQUFBLENBQUFBLENBQUFGLEtBQUFBLEdBQUFHLFNBQUFBLEVBQ0EvYixNQUFBQSxDQUFBOGIsTUFBQUEsQ0FBQUEsQ0FBQXJmLFNBQUFBLEdBQUFBLENBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxFQUdBdUQsTUFBQUEsQ0FBQWljLGdCQUFBQSxHQUFBbFosUUFBQUEsSUFBQUE7SUFDQSxJQUFBLENBQUEvQyxNQUFBQSxDQUFBa2IsS0FBQUEsRUFBQSxPQUFBLENBQUE7SUFDQSxNQUFBZ0IsS0FBQUEsR0FBQWxjLE1BQUFBLENBQUFrYixLQUFBQSxDQUFBaFosTUFBQUEsQ0FDQXVaLElBQUFBLElBQUFBLENBQ0EsS0FBQSxLQUFBemIsTUFBQUEsQ0FBQTBhLGNBQUFBLElBQUFlLElBQUFBLENBQUExTCxVQUFBQSxDQUFBc0osUUFBQUEsQ0FBQXJaLE1BQUFBLENBQUEwYSxjQUFBQSxDQUFBQSxNQUNBLEtBQUEsS0FBQTNYLFFBQUFBLENBQUF3SyxJQUFBQSxJQUFBa08sSUFBQUEsQ0FBQTFZLFFBQUFBLEtBQUFBLFFBQUFBLENBQUF3SyxJQUFBQSxDQUFBQSxLQUNBLEtBQUEsS0FBQXZOLE1BQUFBLENBQUE0YSxVQUFBQSxJQUFBYSxJQUFBQSxDQUFBTCxPQUFBQSxLQUFBcGIsTUFBQUEsQ0FBQTRhLFVBQUFBLENBQUFBLEtBQ0EsS0FBQSxLQUFBNWEsTUFBQUEsQ0FBQThhLFlBQUFBLElBQUFXLElBQUFBLENBQUFOLFNBQUFBLE1BQUEsU0FBQSxLQUFBbmIsTUFBQUEsQ0FBQThhLFlBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQ0E3ZSxNQUFBQTtJQUNBLE9BQUEsR0FBQWlnQixLQUFBQSxNQUFBeGEsSUFBQUEsQ0FBQXdHLEtBQUFBLENBQUFnVSxLQUFBQSxHQUFBbGMsTUFBQUEsQ0FBQWtiLEtBQUFBLENBQUFqZixNQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBO0VBQUEsQ0FBQSxFQUdBK0QsTUFBQUEsQ0FBQW1jLGdCQUFBQSxHQUFBNVAsUUFBQUEsSUFBQUE7SUFDQSxJQUFBLENBQUF2TSxNQUFBQSxDQUFBa2IsS0FBQUEsRUFBQSxPQUFBLENBQUE7SUFDQSxNQUFBZ0IsS0FBQUEsR0FBQWxjLE1BQUFBLENBQUFrYixLQUFBQSxDQUFBaFosTUFBQUEsQ0FDQXVaLElBQUFBLElBQUFBLEVBQUFBLEVBQ0EsS0FBQSxLQUFBbFAsUUFBQUEsSUFBQWtQLElBQUFBLENBQUExTCxVQUFBQSxDQUFBb0IsT0FBQUEsQ0FBQTVFLFFBQUFBLENBQUFBLElBQUEsQ0FBQSxDQUFBLElBQ0EsS0FBQSxLQUFBdk0sTUFBQUEsQ0FBQWdiLGNBQUFBLENBQUF6TixJQUFBQSxJQUFBa08sSUFBQUEsQ0FBQTFZLFFBQUFBLEtBQUEvQyxNQUFBQSxDQUFBZ2IsY0FBQUEsQ0FBQXpOLElBQUFBLElBQ0EsS0FBQSxLQUFBdk4sTUFBQUEsQ0FBQTRhLFVBQUFBLElBQUFhLElBQUFBLENBQUFMLE9BQUFBLEtBQUFwYixNQUFBQSxDQUFBNGEsVUFBQUEsSUFDQSxLQUFBLEtBQUE1YSxNQUFBQSxDQUFBOGEsWUFBQUEsSUFBQVcsSUFBQUEsQ0FBQU4sU0FBQUEsTUFBQSxTQUFBLEtBQUFuYixNQUFBQSxDQUFBOGEsWUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsQ0FDQTdlLE1BQUFBO0lBQ0EsT0FBQSxHQUFBaWdCLEtBQUFBLE1BQUF4YSxJQUFBQSxDQUFBd0csS0FBQUEsQ0FBQWdVLEtBQUFBLEdBQUFsYyxNQUFBQSxDQUFBa2IsS0FBQUEsQ0FBQWpmLE1BQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUE7RUFBQSxDQUFBLEVBR0ErRCxNQUFBQSxDQUFBb2MsY0FBQUEsR0FBQTNKLElBQUFBLElBQUFBO0lBQ0EsSUFBQSxDQUFBelMsTUFBQUEsQ0FBQWtiLEtBQUFBLEVBQUEsT0FBQSxDQUFBO0lBQ0EsTUFBQWdCLEtBQUFBLEdBQUFsYyxNQUFBQSxDQUFBa2IsS0FBQUEsQ0FBQWhaLE1BQUFBLENBQ0F1WixJQUFBQSxJQUFBLEtBQUEsS0FBQWhKLElBQUFBLElBQUFnSixJQUFBQSxDQUFBTixTQUFBQSxJQUFBLFNBQUEsS0FBQTFJLElBQUFBLElBQUFBLENBQUFnSixJQUFBQSxDQUFBTixTQUFBQSxJQUFBLFFBQUEsS0FBQTFJLElBQUFBLENBQUFBLENBQ0F4VyxNQUFBQTtJQUNBLE9BQUEsR0FBQWlnQixLQUFBQSxNQUFBeGEsSUFBQUEsQ0FBQXdHLEtBQUFBLENBQUFnVSxLQUFBQSxHQUFBbGMsTUFBQUEsQ0FBQWtiLEtBQUFBLENBQUFqZixNQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBO0VBQUEsQ0FBQSxFQUdBK0QsTUFBQUEsQ0FBQXFiLFFBQUFBLEdBQUEsTUFBQTtJQUNBcmIsTUFBQUEsQ0FBQStELE9BQUFBLEtBQ0EvRCxNQUFBQSxDQUFBK0QsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0E4VixZQUFBQSxDQUFBd0IsUUFBQUEsRUFBQUEsQ0FBQTNYLElBQUFBLENBQUEsQ0FBQTtNQUFBbEU7SUFBQUEsQ0FBQUEsS0FBQUE7TUFDQVEsTUFBQUEsQ0FBQWtiLEtBQUFBLEdBQUExYixJQUFBQSxDQUFBdkUsTUFBQUEsRUFDQStFLE1BQUFBLENBQUFxYyxXQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBcmMsTUFBQUEsQ0FBQXFjLFdBQUFBLENBQUFDLEdBQUFBLEdBQUF0YyxNQUFBQSxDQUFBa2IsS0FBQUEsQ0FBQWpmLE1BQUFBLEVBQ0ErRCxNQUFBQSxDQUFBcWMsV0FBQUEsR0FBQXJjLE1BQUFBLENBQUFrYixLQUFBQSxDQUNBcmUsSUFBQUEsQ0FBQSxDQUFBMGYsS0FBQUEsRUFBQUMsS0FBQUEsS0FBQUQsS0FBQUEsQ0FBQW5CLE9BQUFBLEdBQUFvQixLQUFBQSxDQUFBcEIsT0FBQUEsQ0FBQUEsQ0FDQXBnQixNQUFBQSxDQUFBLENBQUF5aEIsS0FBQUEsRUFBQUE7UUFBQXJCO01BQUFBLENBQUFBLE1BQ0FxQixLQUFBQSxDQUFBckIsT0FBQUEsQ0FBQUEsS0FBQXFCLEtBQUFBLENBQUFyQixPQUFBQSxDQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBcUIsS0FBQUEsQ0FBQXJCLE9BQUFBLENBQUFBLEVBQUFBLEVBQ0FxQixLQUFBQSxDQUFBQSxFQUNBemMsTUFBQUEsQ0FBQXFjLFdBQUFBLENBQUFBLEVBQ0FyYyxNQUFBQSxDQUFBMGMsU0FBQUEsR0FBQS9oQixNQUFBQSxDQUFBNFAsSUFBQUEsQ0FBQXZLLE1BQUFBLENBQUFxYyxXQUFBQSxDQUFBQSxDQUFBcGdCLE1BQUFBLEVBQ0ErRCxNQUFBQSxDQUFBcWMsV0FBQUEsR0FBQTlmLFVBQUFBLENBQUF5RCxNQUFBQSxDQUFBcWMsV0FBQUEsRUFBQUEsQ0FBQSxDQUFBLENBQUEsRUFDQXJjLE1BQUFBLENBQUE0YSxVQUFBQSxHQUFBLEtBQUEsRUFDQTVhLE1BQUFBLENBQUErRCxPQUFBQSxHQUFBQSxDQUFBLENBQUE7SUFBQSxDQUFBLENBQUEsQ0FFQTtFQUFBLENBQUEsRUFHQS9ELE1BQUFBLENBQUEwYixVQUFBQSxHQUFBRCxJQUFBQSxJQUFBQTtJQUNBNUIsWUFBQUEsQ0FBQThDLE9BQUFBLENBQUFsQixJQUFBQSxDQUFBQSxDQUNBL1gsSUFBQUEsQ0FBQSxDQUFBO01BQUFsRTtJQUFBQSxDQUFBQSxLQUFBQTtNQUNBUSxNQUFBQSxDQUFBNGMsWUFBQUEsR0FBQXBkLElBQUFBLEVBQ0FTLFNBQUFBLENBQUFnYSxNQUFBQSxDQUFBLE1BQUEsRUFBQXphLElBQUFBLENBQUFnQixHQUFBQSxDQUFBO0lBQUEsQ0FBQSxDQUFBLENBRUE2RCxLQUFBQSxDQUFBK0ksR0FBQUEsSUFBQXRPLE9BQUFBLENBQUF3RixLQUFBQSxDQUFBOEksR0FBQUEsQ0FBQUEsQ0FBQTtFQUFBLENBQUEsRUFHQXBOLE1BQUFBLENBQUFtUSxjQUFBQSxHQUFBNUQsUUFBQUEsSUFBQUE7SUFDQXZNLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBclEsUUFBQUEsR0FBQUEsUUFBQUEsRUFDQTdMLENBQUFBLENBQUEsa0JBQUEsQ0FBQSxDQUFBb0IsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFHQTlCLE1BQUFBLENBQUE2YyxnQkFBQUEsR0FBQXRRLFFBQUFBLElBQ0F2TSxNQUFBQSxDQUFBNGMsWUFBQUEsSUFBQTVjLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBN00sVUFBQUEsQ0FBQW9CLE9BQUFBLENBQUE1RSxRQUFBQSxDQUFBQSxJQUFBLENBQUEsR0FDQSxhQUFBLEdBQ0EsYUFBQSxFQUdBdk0sTUFBQUEsQ0FBQThjLGNBQUFBLEdBQUF2USxRQUFBQSxJQUFBQTtJQUNBLE1BQUF3USxhQUFBQSxHQUFBL2MsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUE3TSxVQUFBQSxDQUFBb0IsT0FBQUEsQ0FBQTVFLFFBQUFBLENBQUFBO0lBQ0F3USxhQUFBQSxJQUFBLENBQUEsR0FDQS9jLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBN00sVUFBQUEsQ0FBQW1CLE1BQUFBLENBQUE2TCxhQUFBQSxFQUFBLENBQUEsQ0FBQSxHQUVBL2MsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUE3TSxVQUFBQSxDQUFBblQsSUFBQUEsQ0FBQTJQLFFBQUFBLENBQ0E7RUFBQSxDQUFBLEVBR0F2TSxNQUFBQSxDQUFBOEMsY0FBQUEsR0FBQUMsUUFBQUEsSUFBQUE7SUFDQS9DLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBN1osUUFBQUEsR0FBQUEsUUFBQUEsQ0FBQXdLLElBQUFBO0lBQ0EsTUFBQXlQLGVBQUFBLEdBQUFoZCxNQUFBQSxDQUFBNGMsWUFBQUEsQ0FBQTdNLFVBQUFBLENBQUFvQixPQUFBQSxDQUFBLGFBQUEsQ0FBQTtJQUNBLElBQUEsS0FBQXBPLFFBQUFBLENBQUF3SyxJQUFBQSxJQUFBeVAsZUFBQUEsR0FBQSxDQUFBLEdBQ0FoZCxNQUFBQSxDQUFBNGMsWUFBQUEsQ0FBQTdNLFVBQUFBLENBQUFuVCxJQUFBQSxDQUFBLGFBQUEsQ0FBQSxHQUNBLElBQUEsS0FBQW1HLFFBQUFBLENBQUF3SyxJQUFBQSxJQUFBeVAsZUFBQUEsSUFBQSxDQUFBLElBQ0FoZCxNQUFBQSxDQUFBNGMsWUFBQUEsQ0FBQTdNLFVBQUFBLENBQUFtQixNQUFBQSxDQUFBOEwsZUFBQUEsRUFBQSxDQUFBLENBQ0E7RUFBQSxDQUFBLEVBR0FoZCxNQUFBQSxDQUFBaWQsT0FBQUEsR0FBQSxNQUFBO0lBQ0EsTUFBQUMsZUFBQUEsR0FBQWxkLE1BQUFBLENBQUE0YyxZQUFBQSxHQUFBNWMsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUE3WixRQUFBQSxHQUFBLElBQUE7SUFDQTlDLFNBQUFBLENBQUFnYSxNQUFBQSxDQUFBLE1BQUEsRUFBQSxFQUFBLENBQUEsRUFDQWphLE1BQUFBLENBQUE0YyxZQUFBQSxHQUFBO01BQ0FoWCxJQUFBQSxFQUFBLEVBQUE7TUFDQXdWLE9BQUFBLEVBQUFwYixNQUFBQSxDQUFBUyxXQUFBQSxDQUFBRCxHQUFBQTtNQUNBZ0UsSUFBQUEsRUFBQSxJQUFBbEQsSUFBQUE7TUFDQTRZLE1BQUFBLEVBQUEsRUFBQTtNQUNBaUQsT0FBQUEsRUFBQSxDQUFBO01BQ0FoQyxTQUFBQSxFQUFBQSxDQUFBLENBQUE7TUFDQTVPLFFBQUFBLEVBQUEsRUFBQTtNQUNBd0QsVUFBQUEsRUFBQSxFQUFBO01BQ0FoTixRQUFBQSxFQUFBbWE7SUFBQUEsQ0FDQTtFQUFBLENBQUEsRUFHQWxkLE1BQUFBLENBQUFvZCxZQUFBQSxHQUFBLE1BQ0FwZCxNQUFBQSxDQUFBNGMsWUFBQUEsSUFDQTVjLE1BQUFBLENBQUF3YSxPQUFBQSxDQUFBemYsS0FBQUEsSUFDQThJLENBQUFBLENBQUF3WixJQUFBQSxDQUNBcmQsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUExQyxNQUFBQSxFQUNBb0QsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQXZpQixLQUFBQSxDQUFBd2lCLG1CQUFBQSxFQUFBQSxJQUFBdmQsTUFBQUEsQ0FBQXdhLE9BQUFBLENBQUF6ZixLQUFBQSxDQUFBd2lCLG1CQUFBQSxFQUFBQSxDQUFBQSxFQUdBdmQsTUFBQUEsQ0FBQXFhLFFBQUFBLEdBQUEsTUFBQTtJQUNBcmEsTUFBQUEsQ0FBQXdhLE9BQUFBLENBQUF6ZixLQUFBQSxLQUVBOEksQ0FBQUEsQ0FBQXdaLElBQUFBLENBQ0FyZCxNQUFBQSxDQUFBNGMsWUFBQUEsQ0FBQTFDLE1BQUFBLEVBQ0FvRCxNQUFBQSxJQUFBQSxNQUFBQSxDQUFBdmlCLEtBQUFBLENBQUF3aUIsbUJBQUFBLEVBQUFBLElBQUF2ZCxNQUFBQSxDQUFBd2EsT0FBQUEsQ0FBQXpmLEtBQUFBLENBQUF3aUIsbUJBQUFBLEVBQUFBLENBQUFBLEdBR0FDLEtBQUFBLENBQUEsR0FBQXhkLE1BQUFBLENBQUF3YSxPQUFBQSxDQUFBemYsS0FBQUEseUJBQUFBLENBQUFBLElBRUFpRixNQUFBQSxDQUFBd2EsT0FBQUEsQ0FBQVksT0FBQUEsR0FBQXBiLE1BQUFBLENBQUFTLFdBQUFBLENBQUFELEdBQUFBLEVBQ0FSLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBMUMsTUFBQUEsQ0FBQTlGLE9BQUFBLENBQUE5VSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBTyxTQUFBQSxDQUFBRyxNQUFBQSxDQUFBd2EsT0FBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsRUFDQXhhLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBTyxPQUFBQSxFQUFBQSxFQUNBbmQsTUFBQUEsQ0FBQXdhLE9BQUFBLENBQUF6ZixLQUFBQSxHQUFBLEVBQUEsRUFDQWlGLE1BQUFBLENBQUF3YSxPQUFBQSxDQUFBaUQsS0FBQUEsR0FBQSxFQUFBLEVBRUF6ZCxNQUFBQSxDQUFBNGMsWUFBQUEsQ0FBQTFDLE1BQUFBLENBQUFqZSxNQUFBQSxJQUFBLEVBQUEsSUFDQStELE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBaFgsSUFBQUEsSUFDQTVGLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBN00sVUFBQUEsQ0FBQTlULE1BQUFBLEdBQUEsQ0FBQSxJQUVBK0QsTUFBQUEsQ0FBQTBkLFFBQUFBLENBQUExZCxNQUFBQSxDQUFBNGMsWUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBQUEsRUFJQWxjLENBQUFBLENBQUEsWUFBQSxDQUFBLENBQUE0WixLQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUdBdGEsTUFBQUEsQ0FBQTJkLFVBQUFBLEdBQUFsQyxJQUFBQSxJQUFBQTtJQUNBQSxJQUFBQSxDQUFBbUMsUUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0EvRCxZQUFBQSxDQUFBOEQsVUFBQUEsQ0FBQTNkLE1BQUFBLENBQUFTLFdBQUFBLEVBQUFnYixJQUFBQSxDQUFBO0VBQUEsQ0FBQSxFQUdBemIsTUFBQUEsQ0FBQTBkLFFBQUFBLEdBQUFqQyxJQUFBQSxJQUFBQTtJQUNBemIsTUFBQUEsQ0FBQTZkLE1BQUFBLEtBQ0FwQyxJQUFBQSxDQUFBdkIsTUFBQUEsR0FBQXVCLElBQUFBLENBQUF2QixNQUFBQSxDQUFBaFksTUFBQUEsQ0FBQSxDQUFBO01BQUFuSDtJQUFBQSxDQUFBQSxLQUFBQSxLQUFBQSxDQUFBQSxFQUNBMGdCLElBQUFBLENBQUF2QixNQUFBQSxDQUFBamUsTUFBQUEsSUFBQSxFQUFBLElBQUF3ZixJQUFBQSxDQUFBN1YsSUFBQUEsSUFBQTZWLElBQUFBLENBQUExTCxVQUFBQSxDQUFBOVQsTUFBQUEsR0FBQSxDQUFBLElBQ0ErRCxNQUFBQSxDQUFBNmQsTUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0FoRSxZQUFBQSxDQUFBNkQsUUFBQUEsQ0FBQTFkLE1BQUFBLENBQUFTLFdBQUFBLEVBQUFnYixJQUFBQSxDQUFBQSxDQUFBL1gsSUFBQUEsQ0FDQSxDQUFBO01BQUFsRTtJQUFBQSxDQUFBQSxLQUFBQTtNQUNBLElBQUFRLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBcGMsR0FBQUEsRUFHQTtRQUNBLEtBQUEsSUFBQXhFLENBQUFBLEdBQUEsQ0FBQSxFQUFBQSxDQUFBQSxHQUFBZ0UsTUFBQUEsQ0FBQWtiLEtBQUFBLENBQUFqZixNQUFBQSxFQUFBRCxDQUFBQSxFQUFBQSxFQUNBLElBQUFnRSxNQUFBQSxDQUFBa2IsS0FBQUEsQ0FBQWxmLENBQUFBLENBQUFBLENBQUF3RSxHQUFBQSxLQUFBaEIsSUFBQUEsQ0FBQWdCLEdBQUFBLEVBQUE7VUFDQVIsTUFBQUEsQ0FBQWtiLEtBQUFBLENBQUFsZixDQUFBQSxDQUFBQSxHQUFBd0QsSUFBQUE7VUFDQTtRQUNBO1FBRUFRLE1BQUFBLENBQUEwYixVQUFBQSxDQUFBRCxJQUFBQSxDQUNBO01BQUEsQ0FBQSxNQVZBemIsTUFBQUEsQ0FBQWtiLEtBQUFBLENBQUE5RyxPQUFBQSxDQUFBNVUsSUFBQUEsQ0FBQUEsRUFDQVEsTUFBQUEsQ0FBQTBiLFVBQUFBLENBQUFsYyxJQUFBQSxDQUFBQTtNQVVBUSxNQUFBQSxDQUFBNmQsTUFBQUEsR0FBQUEsQ0FBQSxDQUFBO0lBQUEsQ0FBQSxFQUVBelEsR0FBQUEsSUFBQUE7TUFDQXRPLE9BQUFBLENBQUF3RixLQUFBQSxDQUFBOEksR0FBQUEsQ0FBQUEsRUFDQXBOLE1BQUFBLENBQUE2ZCxNQUFBQSxHQUFBQSxDQUFBLENBQUE7SUFBQSxDQUFBLENBQUEsSUFHQXBDLElBQUFBLENBQUF2QixNQUFBQSxDQUFBamUsTUFBQUEsR0FBQSxFQUFBLEdBQ0F1aEIsS0FBQUEsQ0FBQSx1Q0FBQSxDQUFBLEdBQ0EvQixJQUFBQSxDQUFBN1YsSUFBQUEsR0FHQWtVLEtBQUFBLENBQUEsZ0JBQUEsQ0FBQSxHQUZBQSxLQUFBQSxDQUFBLFlBQUEsQ0FBQSxDQUlBO0VBQUEsQ0FBQSxFQXFCQTlaLE1BQUFBLENBQUE4ZCxVQUFBQSxHQUFBckMsSUFBQUEsSUFBQUE7SUFDQUEsSUFBQUEsQ0FBQWpiLEdBQUFBLEdBSUF1ZCxPQUFBQSxDQUFBLDRDQUFBLENBQUEsSUFDQWxFLFlBQUFBLENBQUFpRSxVQUFBQSxDQUFBckMsSUFBQUEsQ0FBQUEsQ0FBQS9YLElBQUFBLENBQUFDLFFBQUFBLElBQUFBO01BQ0EzRCxNQUFBQSxDQUFBcWIsUUFBQUEsRUFBQUEsRUFDQXJiLE1BQUFBLENBQUE0YyxZQUFBQSxHQUFBLElBQUE7SUFBQSxDQUFBLENBQUEsSUFOQTVjLE1BQUFBLENBQUFrYixLQUFBQSxHQUFBbGIsTUFBQUEsQ0FBQWtiLEtBQUFBLENBQUFoWixNQUFBQSxDQUFBLENBQUE7TUFBQTFCO0lBQUFBLENBQUFBLEtBQUFBLEdBQUFBLENBQUFBLEVBQ0FSLE1BQUFBLENBQUE0YyxZQUFBQSxHQUFBLElBQUEsQ0FRQTtFQUFBLENBQUEsRUFHQTVjLE1BQUFBLENBQUFnZSxlQUFBQSxHQUFBdkMsSUFBQUEsSUFBQUE7SUFDQSxNQUFBdkIsTUFBQUEsR0FBQXVCLElBQUFBLENBQUF2QixNQUFBQSxDQUFBamUsTUFBQUE7TUFDQWdpQixNQUFBQSxHQUFBeEMsSUFBQUEsQ0FBQXdDLE1BQUFBO0lBQ0EsT0FBQS9ELE1BQUFBLEtBQUErRCxNQUFBQSxJQUFBeEMsSUFBQUEsQ0FBQXlDLFdBQUFBLEdBQ0EsYUFBQSxHQUNBLENBQUEsS0FBQUQsTUFBQUEsSUFBQXhDLElBQUFBLENBQUF5QyxXQUFBQSxHQUVBLENBQUEsS0FBQUQsTUFBQUEsSUFBQXhDLElBQUFBLENBQUF5QyxXQUFBQSxHQUNBLFVBQUEsR0FFQSxhQUFBLEdBSkEsYUFLQTtFQUFBLENBQUEsRUFHQWxlLE1BQUFBLENBQUFtZSxTQUFBQSxHQUFBMUwsSUFBQUEsSUFBQUE7SUFDQXpTLE1BQUFBLENBQUFvZSxhQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQXZFLFlBQUFBLENBQUFzRSxTQUFBQSxDQUFBbmUsTUFBQUEsQ0FBQTRjLFlBQUFBLEVBQUFuSyxJQUFBQSxDQUFBQSxDQUNBL08sSUFBQUEsQ0FBQSxNQUFBO01BQ0ExRCxNQUFBQSxDQUFBMGIsVUFBQUEsQ0FBQTFiLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBQSxFQUNBNWMsTUFBQUEsQ0FBQW9lLGFBQUFBLEdBQUFBLENBQUEsQ0FBQTtJQUFBLENBQUEsQ0FBQSxDQUVBL1osS0FBQUEsQ0FBQStJLEdBQUFBLElBQUFBO01BQ0F0TyxPQUFBQSxDQUFBd0YsS0FBQUEsQ0FBQThJLEdBQUFBLENBQUFBLEVBQ0FwTixNQUFBQSxDQUFBb2UsYUFBQUEsR0FBQUEsQ0FBQSxDQUFBO0lBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FFQTtBQUFBLENBQUEsQ0FBQSxFQzVXQWpoQixPQUFBQSxDQUNBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUVBVyxVQUFBQSxDQUFBLG9CQUFBLEVBQUEsVUFBQWlDLE1BQUFBLEVBQUE2WixZQUFBQSxFQUFBMVosT0FBQUEsRUFBQUE7RUFDQUgsTUFBQUEsQ0FBQTRELEdBQUFBLENBQUEsT0FBQSxFQUFBQyxDQUFBQSxJQUFBQTtJQUNBN0QsTUFBQUEsQ0FBQVMsV0FBQUEsQ0FBQTRkLEtBQUFBLElBQ0FDLFFBQUFBLEVBQ0E7RUFBQSxDQUFBLENBQUEsRUFHQXRlLE1BQUFBLENBQUF1ZSxLQUFBQSxHQUFBO0lBQ0EzQyxLQUFBQSxFQUFBLFVBQUE7SUFDQWxOLE9BQUFBLEVBQUFBLENBQUE7RUFBQSxDQUFBLEVBR0ExTyxNQUFBQSxDQUFBd2UsT0FBQUEsR0FBQTVDLEtBQUFBLElBQUFBO0lBQ0E1YixNQUFBQSxDQUFBdWUsS0FBQUEsQ0FBQTNDLEtBQUFBLEtBQUFBLEtBQUFBLEdBQ0E1YixNQUFBQSxDQUFBdWUsS0FBQUEsQ0FBQTdQLE9BQUFBLEdBQUFBLENBQUExTyxNQUFBQSxDQUFBdWUsS0FBQUEsQ0FBQTdQLE9BQUFBLEdBRUExTyxNQUFBQSxDQUFBdWUsS0FBQUEsR0FBQTtNQUNBM0MsS0FBQUE7TUFDQWxOLE9BQUFBLEVBQUFBLENBQUE7SUFBQSxDQUVBO0VBQUEsQ0FBQSxFQUdBMU8sTUFBQUEsQ0FBQXllLFFBQUFBLEdBQUEsTUFBQTtJQUNBemUsTUFBQUEsQ0FBQStELE9BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBOFYsWUFBQUEsQ0FBQTRFLFFBQUFBLEVBQUFBLENBQUEvYSxJQUFBQSxDQUFBQyxRQUFBQSxJQUFBQTtNQUNBM0QsTUFBQUEsQ0FBQTBlLEtBQUFBLEdBQUEvYSxRQUFBQSxDQUFBbkUsSUFBQUEsQ0FBQXJFLE9BQUFBLENBQUEsSUFBQSxFQUFBLE9BQUEsQ0FBQSxFQUNBNkUsTUFBQUEsQ0FBQStELE9BQUFBLEdBQUFBLENBQUEsQ0FBQTtJQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQS9ELE1BQUFBLENBQUF5ZSxRQUFBQSxFQUFBQSxFQUVBNUUsWUFBQUEsQ0FBQThFLFFBQUFBLEVBQUFBLENBQUFqYixJQUFBQSxDQUFBQyxRQUFBQSxJQUFBQTtJQUNBM0QsTUFBQUEsQ0FBQTRlLE1BQUFBLEdBQUFqYixRQUFBQSxDQUFBbkUsSUFBQUEsRUFDQVYsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQWlCLE1BQUFBLENBQUE0ZSxNQUFBQSxDQUFBO0VBQUEsQ0FBQSxDQUFBO0VBR0EsTUFBQU4sUUFBQUEsR0FBQUEsQ0FBQSxLQUFBO0lBQ0F0ZSxNQUFBQSxDQUFBK0QsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0E1RCxPQUFBQSxDQUFBbWUsUUFBQUEsRUFBQUEsQ0FBQTVhLElBQUFBLENBQUFDLFFBQUFBLElBQUFBO01BQ0EzRCxNQUFBQSxDQUFBeWMsS0FBQUEsR0FBQTlZLFFBQUFBLENBQUFuRSxJQUFBQSxDQUFBMEMsTUFBQUEsQ0FBQTdCLElBQUFBLElBQUFBLENBQUFBLElBQUFBLENBQUFnZSxLQUFBQSxDQUFBQSxFQUNBcmUsTUFBQUEsQ0FBQStELE9BQUFBLEdBQUFBLENBQUEsQ0FBQTtJQUFBLENBQUEsQ0FDQTtFQUFBLENBQUE7RUFHQS9ELE1BQUFBLENBQUE2ZSxTQUFBQSxHQUFBeGUsSUFBQUEsSUFBQUE7SUFDQUwsTUFBQUEsQ0FBQStELE9BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBNUQsT0FBQUEsQ0FBQTBlLFNBQUFBLENBQUF4ZSxJQUFBQSxDQUFBRyxHQUFBQSxDQUFBQSxDQUFBa0QsSUFBQUEsQ0FBQUMsUUFBQUEsSUFBQUE7TUFDQTJhLFFBQUFBLEVBQUE7SUFBQSxDQUFBLENBQ0E7RUFBQSxDQUFBLEVBR0F0ZSxNQUFBQSxDQUFBOGUsV0FBQUEsR0FBQXplLElBQUFBLElBQUFBO0lBQ0F3WixZQUFBQSxDQUFBaUYsV0FBQUEsRUFBQUEsQ0FBQXBiLElBQUFBLENBQUFDLFFBQUFBLElBQUFBO01BQ0EzRCxNQUFBQSxDQUFBNGUsTUFBQUEsR0FBQWpiLFFBQUFBLENBQUFuRSxJQUFBQSxFQUNBVixPQUFBQSxDQUFBQyxHQUFBQSxDQUFBaUIsTUFBQUEsQ0FBQTRlLE1BQUFBLENBQUE7SUFBQSxDQUFBLENBQ0E7RUFBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDOURBemhCLE9BQUFBLENBQ0FDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBRUFXLFVBQUFBLENBQUEscUJBQUEsRUFBQSxVQUFBaUMsTUFBQUEsRUFBQUMsU0FBQUEsRUFBQTRaLFlBQUFBLEVBQUFBO0VBQ0EsSUFBQWtGLElBQUFBLEdBQUEsQ0FBQTtFQUNBL2UsTUFBQUEsQ0FBQWtiLEtBQUFBLEdBQUEsRUFBQSxFQUNBbGIsTUFBQUEsQ0FBQWlhLE1BQUFBLEdBQUEsRUFBQSxFQUNBamEsTUFBQUEsQ0FBQXdhLE9BQUFBLEdBQUEsQ0FBQSxDQUFBLEVBQ0F4YSxNQUFBQSxDQUFBZ2IsY0FBQUEsR0FBQSxDQUFBLENBQUEsRUFDQWhiLE1BQUFBLENBQUEwYSxjQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBMWEsTUFBQUEsQ0FBQTRjLFlBQUFBLEdBQUFBLEtBQUFvQyxDQUFBQTtFQUNBLElBQUFDLFNBQUFBLEdBQUFBLENBQUEsQ0FBQTtFQUVBamYsTUFBQUEsQ0FBQW1hLE9BQUFBLEdBQUFsYixDQUFBQSxJQUFBQTtJQUVBLFFBQUEsQ0FEQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsSUFBQVIsTUFBQUEsQ0FBQStVLEtBQUFBLEVBQ0F6SSxPQUFBQTtNQUNBLEtBQUEsQ0FBQTtRQUNBckssQ0FBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQTBaLEVBQUFBLENBQUEsUUFBQSxDQUFBLElBQ0FyWSxVQUFBQSxDQUFBLE1BQUE7VUFDQS9CLE1BQUFBLENBQUFxYSxRQUFBQSxFQUFBO1FBQUEsQ0FBQSxFQUNBLEdBQUEsQ0FBQTtRQUVBO01BQ0EsS0FBQSxFQUFBO1FBQ0EzWixDQUFBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBMFosRUFBQUEsQ0FBQSxRQUFBLENBQUEsR0FDQXBhLE1BQUFBLENBQUFxYSxRQUFBQSxFQUFBQSxHQUNBM1osQ0FBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQTBaLEVBQUFBLENBQUEsUUFBQSxDQUFBLElBQ0ExWixDQUFBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBNFosS0FBQUEsRUFBQUE7SUFBQUE7RUFJQSxDQUFBLEVBSUF0YSxNQUFBQSxDQUFBaWQsT0FBQUEsR0FBQSxNQUFBO0lBQ0EsTUFBQUMsZUFBQUEsR0FBQWxkLE1BQUFBLENBQUE0YyxZQUFBQSxHQUFBNWMsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUE3WixRQUFBQSxHQUFBLElBQUE7SUFDQTlDLFNBQUFBLENBQUFnYSxNQUFBQSxDQUFBLE1BQUEsRUFBQSxLQUFBLENBQUEsRUFDQWphLE1BQUFBLENBQUE0YyxZQUFBQSxHQUFBO01BQ0FoWCxJQUFBQSxFQUFBLEVBQUE7TUFDQXdWLE9BQUFBLEVBQUFwYixNQUFBQSxDQUFBUyxXQUFBQSxDQUFBRCxHQUFBQTtNQUNBZ0UsSUFBQUEsRUFBQSxJQUFBbEQsSUFBQUE7TUFDQTRZLE1BQUFBLEVBQUEsRUFBQTtNQUNBaUQsT0FBQUEsRUFBQSxDQUFBO01BQ0FoQyxTQUFBQSxFQUFBQSxDQUFBLENBQUE7TUFDQTVPLFFBQUFBLEVBQUEsRUFBQTtNQUNBd0QsVUFBQUEsRUFBQSxFQUFBO01BQ0FoTixRQUFBQSxFQUFBbWE7SUFBQUEsQ0FDQTtFQUFBLENBQUEsRUFHQWxkLE1BQUFBLENBQUFrZixlQUFBQSxHQUFBekQsSUFBQUEsSUFBQUE7SUFDQUEsSUFBQUEsR0FDQSxLQUFBLEtBQUFBLElBQUFBLENBQUFqYixHQUFBQSxHQUNBUixNQUFBQSxDQUFBaWQsT0FBQUEsRUFBQUEsR0FDQWpkLE1BQUFBLENBQUE0YyxZQUFBQSxJQUFBbkIsSUFBQUEsQ0FBQWpiLEdBQUFBLEtBQUFSLE1BQUFBLENBQUE0YyxZQUFBQSxDQUFBcGMsR0FBQUEsSUFDQXFaLFlBQUFBLENBQUE4QyxPQUFBQSxDQUFBbEIsSUFBQUEsQ0FBQUEsQ0FDQS9YLElBQUFBLENBQUEsQ0FBQTtNQUFBbEU7SUFBQUEsQ0FBQUEsS0FBQUE7TUFDQVEsTUFBQUEsQ0FBQTRjLFlBQUFBLEdBQUFwZCxJQUFBQSxFQUNBUyxTQUFBQSxDQUFBZ2EsTUFBQUEsQ0FBQSxNQUFBLEVBQUF6YSxJQUFBQSxDQUFBZ0IsR0FBQUEsQ0FBQUEsRUFDQTFCLE9BQUFBLENBQUFDLEdBQUFBLENBQUFTLElBQUFBLENBQUE7SUFBQSxDQUFBLENBQUEsQ0FFQTZFLEtBQUFBLENBQUErSSxHQUFBQSxJQUFBdE8sT0FBQUEsQ0FBQXdGLEtBQUFBLENBQUE4SSxHQUFBQSxDQUFBQSxDQUFBQSxJQUlBcE4sTUFBQUEsQ0FBQTRjLFlBQUFBLEdBQUFBLEtBQUFvQyxDQUFBQSxFQUNBL2UsU0FBQUEsQ0FBQWdhLE1BQUFBLENBQUEsTUFBQSxFQUFBLElBQUEsQ0FBQSxDQUVBO0VBQUEsQ0FBQTtFQVdBamEsTUFBQUEsQ0FBQTRELEdBQUFBLENBQUEsT0FBQSxFQUFBQyxDQUFBQSxJQUFBQTtJQUNBZ1csWUFBQUEsQ0FBQTBCLFlBQUFBLEVBQUFBLENBQUE3WCxJQUFBQSxDQUFBQyxRQUFBQSxJQUFBQTtNQUNBM0QsTUFBQUEsQ0FBQTJDLFNBQUFBLEdBQUFnQixRQUFBQSxDQUFBbkUsSUFBQUEsRUFUQVEsTUFBQUEsQ0FBQWdiLGNBQUFBLEdBQUEsQ0FBQSxDQVVBO0lBQUEsQ0FBQSxDQUFBLEVBRUFuQixZQUFBQSxDQUFBL0osYUFBQUEsRUFBQUEsQ0FBQXBNLElBQUFBLENBQUFDLFFBQUFBLElBQUFBO01BQ0EzRCxNQUFBQSxDQUFBK1AsVUFBQUEsR0FBQXBNLFFBQUFBLENBQUFuRSxJQUFBQSxFQVRBUSxNQUFBQSxDQUFBMGEsY0FBQUEsR0FBQSxDQUFBLENBVUE7SUFBQSxDQUFBLENBQUEsRUFFQXphLFNBQUFBLENBQUFnYSxNQUFBQSxFQUFBQSxDQUFBd0IsSUFBQUEsSUFDQXpiLE1BQUFBLENBQUFrZixlQUFBQSxDQUFBO01BQUExZSxHQUFBQSxFQUFBUCxTQUFBQSxDQUFBZ2EsTUFBQUEsRUFBQUEsQ0FBQXdCO0lBQUFBLENBQUFBLENBQUFBLEVBRUF6YixNQUFBQSxDQUFBaWEsTUFBQUEsR0FBQWhhLFNBQUFBLENBQUFnYSxNQUFBQSxFQUFBQSxDQUFBQSxNQUFBQSxJQUFBLEVBQUEsRUFDQWphLE1BQUFBLENBQUFxYixRQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLEVBR0FyYixNQUFBQSxDQUFBdWUsS0FBQUEsR0FBQTtJQUNBM0MsS0FBQUEsRUFBQSxNQUFBO0lBQ0FsTixPQUFBQSxFQUFBQSxDQUFBO0VBQUEsQ0FBQSxFQUdBMU8sTUFBQUEsQ0FBQXdlLE9BQUFBLEdBQUE1QyxLQUFBQSxJQUFBQTtJQUNBNWIsTUFBQUEsQ0FBQXVlLEtBQUFBLENBQUEzQyxLQUFBQSxLQUFBQSxLQUFBQSxHQUNBNWIsTUFBQUEsQ0FBQXVlLEtBQUFBLENBQUE3UCxPQUFBQSxHQUFBQSxDQUFBMU8sTUFBQUEsQ0FBQXVlLEtBQUFBLENBQUE3UCxPQUFBQSxHQUVBMU8sTUFBQUEsQ0FBQXVlLEtBQUFBLEdBQUE7TUFDQTNDLEtBQUFBO01BQ0FsTixPQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUdBMU8sTUFBQUEsQ0FBQXFiLFFBQUFBLEVBQUE7RUFBQSxDQUFBLEVBR0FyYixNQUFBQSxDQUFBbWYsWUFBQUEsR0FBQUMsWUFBQUE7SUFDQSxDQUFBLEtBQUFwZixNQUFBQSxDQUFBa2IsS0FBQUEsQ0FBQWpmLE1BQUFBLElBQ0FvZixRQUFBQSxFQUFBQSxDQUFBM1gsSUFBQUEsQ0FBQXdYLEtBQUFBLElBQUFBO01BQ0FsYixNQUFBQSxDQUFBa2IsS0FBQUEsR0FBQWxiLE1BQUFBLENBQUFrYixLQUFBQSxDQUFBaEMsTUFBQUEsQ0FBQWdDLEtBQUFBLENBQUE7SUFBQSxDQUFBLENBQ0E7RUFBQSxDQUFBLEVBR0FsYixNQUFBQSxDQUFBcWIsUUFBQUEsR0FBQSxNQUFBO0lBQ0FyYixNQUFBQSxDQUFBa2IsS0FBQUEsR0FBQSxFQUFBLEVBQ0E2RCxJQUFBQSxHQUFBLENBQUEsRUFDQUUsU0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0E1RCxRQUFBQSxFQUFBQSxDQUFBM1gsSUFBQUEsQ0FBQXdYLEtBQUFBLElBQUFBO01BQ0FsYixNQUFBQSxDQUFBa2IsS0FBQUEsR0FBQUEsS0FBQUEsRUFDQWxiLE1BQUFBLENBQUF1SCxNQUFBQSxFQUFBO0lBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxFQUdBdkgsTUFBQUEsQ0FBQSthLGlCQUFBQSxHQUFBaFksUUFBQUEsSUFBQUE7SUFDQS9DLE1BQUFBLENBQUFnYixjQUFBQSxDQUFBalksUUFBQUEsQ0FBQXdLLElBQUFBLENBQUFBLEdBR0F2TixNQUFBQSxDQUFBZ2IsY0FBQUEsQ0FBQWpZLFFBQUFBLENBQUF3SyxJQUFBQSxDQUFBQSxHQUFBQSxDQUFBdk4sTUFBQUEsQ0FBQWdiLGNBQUFBLENBQUFqWSxRQUFBQSxDQUFBd0ssSUFBQUEsQ0FBQUEsR0FGQXZOLE1BQUFBLENBQUFnYixjQUFBQSxDQUFBalksUUFBQUEsQ0FBQXdLLElBQUFBLENBQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUlBdk4sTUFBQUEsQ0FBQXFiLFFBQUFBLEVBQUE7RUFBQSxDQUFBLEVBR0FyYixNQUFBQSxDQUFBeWEsaUJBQUFBLEdBQUFsTyxRQUFBQSxJQUFBQTtJQUNBdk0sTUFBQUEsQ0FBQTBhLGNBQUFBLENBQUFuTyxRQUFBQSxDQUFBQSxHQUdBdk0sTUFBQUEsQ0FBQTBhLGNBQUFBLENBQUFuTyxRQUFBQSxDQUFBQSxHQUFBQSxDQUFBdk0sTUFBQUEsQ0FBQTBhLGNBQUFBLENBQUFuTyxRQUFBQSxDQUFBQSxHQUZBdk0sTUFBQUEsQ0FBQTBhLGNBQUFBLENBQUFuTyxRQUFBQSxDQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFJQXZNLE1BQUFBLENBQUFxYixRQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUdBcmIsTUFBQUEsQ0FBQXFmLG9CQUFBQSxHQUFBLE1BQUE7SUFDQSxNQUFBdFAsVUFBQUEsR0FBQXBWLE1BQUFBLENBQUE0UCxJQUFBQSxDQUFBdkssTUFBQUEsQ0FBQTBhLGNBQUFBLENBQUFBO01BQ0E0RSxhQUFBQSxHQUNBdlAsVUFBQUEsQ0FBQTlULE1BQUFBLEtBQUE4VCxVQUFBQSxDQUFBN04sTUFBQUEsQ0FBQXFLLFFBQUFBLElBQUF2TSxNQUFBQSxDQUFBMGEsY0FBQUEsQ0FBQW5PLFFBQUFBLENBQUFBLENBQUFBLENBQUF0USxNQUFBQTtJQUNBK0QsTUFBQUEsQ0FBQTBhLGNBQUFBLEdBQUExYSxNQUFBQSxDQUFBK1AsVUFBQUEsQ0FBQS9VLE1BQUFBLENBQUEsQ0FBQWtILE1BQUFBLEVBQUFxSyxRQUFBQSxNQUNBckssTUFBQUEsQ0FBQXFLLFFBQUFBLENBQUFBLEdBQUFBLENBQUErUyxhQUFBQSxFQUNBcGQsTUFBQUEsQ0FBQUEsRUFDQSxDQUFBLENBQUEsQ0FBQSxFQUNBbEMsTUFBQUEsQ0FBQXFiLFFBQUFBLEVBQUE7RUFBQSxDQUFBO0VBR0EsTUFBQUEsUUFBQUEsR0FBQStELE1BQUFBLENBQUFBLEtBQUFBO0lBQ0EsSUFBQXBmLE1BQUFBLENBQUErRCxPQUFBQSxJQUFBa2IsU0FBQUEsRUFBQSxPQUFBLEVBQUE7SUFDQWpmLE1BQUFBLENBQUErRCxPQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQTlELFNBQUFBLENBQUFnYSxNQUFBQSxFQUFBQSxDQUFBQSxNQUFBQSxLQUFBamEsTUFBQUEsQ0FBQWlhLE1BQUFBLElBQ0FoYSxTQUFBQSxDQUFBZ2EsTUFBQUEsQ0FBQSxRQUFBLEVBQUFqYSxNQUFBQSxDQUFBaWEsTUFBQUEsR0FBQWphLE1BQUFBLENBQUFpYSxNQUFBQSxHQUFBLElBQUEsQ0FBQTtJQUVBLE1BQUE7TUFBQXphO0lBQUFBLENBQUFBLEdBQUFBLE1BQUFxYSxZQUFBQSxDQUFBd0IsUUFBQUEsQ0FBQTtNQUNBMEQsSUFBQUE7TUFDQVEsTUFBQUEsRUFBQXZmLE1BQUFBLENBQUF1ZSxLQUFBQSxDQUFBM0MsS0FBQUE7TUFDQTRDLE9BQUFBLEVBQUF4ZSxNQUFBQSxDQUFBdWUsS0FBQUEsQ0FBQTdQLE9BQUFBLEdBQUFBLENBQUEsQ0FBQSxHQUFBLENBQUE7TUFDQThRLEtBQUFBLEVBQUEsR0FBQTtNQUNBdkYsTUFBQUEsRUFBQWphLE1BQUFBLENBQUFpYSxNQUFBQTtNQUNBdFgsU0FBQUEsRUFBQWhJLE1BQUFBLENBQUE0UCxJQUFBQSxDQUFBdkssTUFBQUEsQ0FBQWdiLGNBQUFBLENBQUFBLENBQUE5WSxNQUFBQSxDQUFBYSxRQUFBQSxJQUFBL0MsTUFBQUEsQ0FBQWdiLGNBQUFBLENBQUFqWSxRQUFBQSxDQUFBQSxDQUFBQTtNQUNBZ04sVUFBQUEsRUFBQXBWLE1BQUFBLENBQUE0UCxJQUFBQSxDQUFBdkssTUFBQUEsQ0FBQTBhLGNBQUFBLENBQUFBLENBQUF4WSxNQUFBQSxDQUFBcUssUUFBQUEsSUFBQXZNLE1BQUFBLENBQUEwYSxjQUFBQSxDQUFBbk8sUUFBQUEsQ0FBQUE7SUFBQUEsQ0FBQUEsQ0FBQUE7SUFPQSxPQUxBek4sT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQSxPQUFBLEVBQUFnZ0IsSUFBQUEsRUFBQSxXQUFBLEVBQUF2ZixJQUFBQSxDQUFBdkUsTUFBQUEsQ0FBQWdCLE1BQUFBLENBQUFBLEVBQ0F1RCxJQUFBQSxDQUFBdkUsTUFBQUEsQ0FBQWdCLE1BQUFBLEdBQUEsR0FBQSxHQUFBZ2pCLFNBQUFBLEdBQUFBLENBQUEsQ0FBQSxHQUNBRixJQUFBQSxHQUFBdmYsSUFBQUEsQ0FBQWlnQixRQUFBQSxFQUNBemYsTUFBQUEsQ0FBQStELE9BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBakYsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQVMsSUFBQUEsQ0FBQXZFLE1BQUFBLENBQUFZLEtBQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQ0EyRCxJQUFBQSxDQUFBdkUsTUFBQTtFQUFBLENBQUE7RUFHQStFLE1BQUFBLENBQUFxYSxRQUFBQSxHQUFBLE1BQUE7SUFDQXJhLE1BQUFBLENBQUF3YSxPQUFBQSxDQUFBemYsS0FBQUEsS0FDQWlGLE1BQUFBLENBQUFvZCxZQUFBQSxFQUFBQSxHQUNBSSxLQUFBQSxDQUFBLEdBQUF4ZCxNQUFBQSxDQUFBd2EsT0FBQUEsQ0FBQXpmLEtBQUFBLHlCQUFBQSxDQUFBQSxJQUVBaUYsTUFBQUEsQ0FBQXdhLE9BQUFBLENBQUFZLE9BQUFBLEdBQUFwYixNQUFBQSxDQUFBUyxXQUFBQSxDQUFBRCxHQUFBQSxFQUNBUixNQUFBQSxDQUFBNGMsWUFBQUEsQ0FBQTFDLE1BQUFBLENBQUE5RixPQUFBQSxDQUFBOVUsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQUQsSUFBQUEsQ0FBQU8sU0FBQUEsQ0FBQUcsTUFBQUEsQ0FBQXdhLE9BQUFBLENBQUFBLENBQUFBLENBQUFBLEVBQ0F4YSxNQUFBQSxDQUFBNGMsWUFBQUEsQ0FBQU8sT0FBQUEsRUFBQUEsRUFDQW5kLE1BQUFBLENBQUEwZixVQUFBQSxDQUFBMWYsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUFBLEVBQ0E1YyxNQUFBQSxDQUFBd2EsT0FBQUEsQ0FBQXpmLEtBQUFBLEdBQUEsRUFBQSxFQUNBaUYsTUFBQUEsQ0FBQXdhLE9BQUFBLENBQUFpRCxLQUFBQSxHQUFBLEVBQUEsQ0FBQSxDQUFBLEVBR0EvYyxDQUFBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBNFosS0FBQUEsRUFBQTtFQUFBLENBQUEsRUFHQXRhLE1BQUFBLENBQUEwZixVQUFBQSxHQUFBLENBQUFqRSxJQUFBQSxFQUFBa0UsT0FBQUEsS0FBQUE7SUFDQTNmLE1BQUFBLENBQUE2ZCxNQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQXBDLElBQUFBLENBQUF2QixNQUFBQSxDQUFBamUsTUFBQUEsSUFBQSxFQUFBLElBQUF3ZixJQUFBQSxDQUFBN1YsSUFBQUEsSUFBQTZWLElBQUFBLENBQUExTCxVQUFBQSxDQUFBOVQsTUFBQUEsR0FBQSxDQUFBLEtBQ0EsS0FBQSxLQUFBd2YsSUFBQUEsQ0FBQWpiLEdBQUFBLEdBQ0FxWixZQUFBQSxDQUFBK0YsVUFBQUEsQ0FBQTtNQUNBcGYsR0FBQUEsRUFBQWliLElBQUFBLENBQUFqYixHQUFBQTtNQUFBQSxJQUNBbWYsT0FBQUEsSUFBQWxFLElBQUFBO0lBQUFBLENBQUFBLENBQUFBLENBQ0EvWCxJQUFBQSxDQUFBLENBQUE7TUFBQWxFO0lBQUFBLENBQUFBLEtBQUFBO01BQ0FWLE9BQUFBLENBQUFDLEdBQUFBLENBQUFTLElBQUFBLENBQUFBLEVBQ0FRLE1BQUFBLENBQUE2ZCxNQUFBQSxHQUFBQSxDQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0EvZSxPQUFBQSxDQUFBd0YsS0FBQUEsQ0FBQUEsR0FFQXVWLFlBQUFBLENBQUE2RCxRQUFBQSxDQUFBMWQsTUFBQUEsQ0FBQVMsV0FBQUEsRUFBQVQsTUFBQUEsQ0FBQTRjLFlBQUFBLENBQUFBLENBQUFsWixJQUFBQSxDQUFBLENBQUE7TUFBQWxFO0lBQUFBLENBQUFBLEtBQUFBO01BQ0EsS0FBQSxLQUFBUyxTQUFBQSxDQUFBZ2EsTUFBQUEsRUFBQUEsQ0FBQXdCLElBQUFBLElBQ0F4YixTQUFBQSxDQUFBZ2EsTUFBQUEsQ0FBQSxNQUFBLEVBQUF6YSxJQUFBQSxDQUFBZ0IsR0FBQUEsQ0FBQUEsRUFFQVIsTUFBQUEsQ0FBQXFiLFFBQUFBLEVBQUFBLEVBQ0FyYixNQUFBQSxDQUFBNmQsTUFBQUEsR0FBQUEsQ0FBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBL2UsT0FBQUEsQ0FBQXdGLEtBQUFBLENBQUFBLENBRUE7RUFBQSxDQUFBLEVBR0F0RSxNQUFBQSxDQUFBOGQsVUFBQUEsR0FBQXJDLElBQUFBLElBQUFBO0lBQ0FBLElBQUFBLENBQUFqYixHQUFBQSxHQUdBdWQsT0FBQUEsQ0FBQSw0Q0FBQSxDQUFBLElBQ0FsRSxZQUFBQSxDQUFBaUUsVUFBQUEsQ0FBQXJDLElBQUFBLENBQUFBLENBQUEvWCxJQUFBQSxDQUFBLE1BQUE7TUFDQTFELE1BQUFBLENBQUFxYixRQUFBQSxFQUFBQSxFQUNBcmIsTUFBQUEsQ0FBQTRjLFlBQUFBLEdBQUEsSUFBQTtJQUFBLENBQUEsQ0FBQSxHQUxBNWMsTUFBQUEsQ0FBQTRjLFlBQUFBLEdBQUEsSUFRQTtFQUFBLENBQUEsRUFHQTVjLE1BQUFBLENBQUFnRCxXQUFBQSxHQUFBLENBQUF5WSxJQUFBQSxFQUFBMVksUUFBQUEsS0FBQUE7SUFDQTBZLElBQUFBLENBQUExWSxRQUFBQSxHQUFBQSxRQUFBQSxDQUFBd0ssSUFBQUE7SUFDQSxNQUFBeVAsZUFBQUEsR0FBQXZCLElBQUFBLENBQUExTCxVQUFBQSxDQUFBb0IsT0FBQUEsQ0FBQSxhQUFBLENBQUE7SUFDQSxJQUFBLEtBQUFwTyxRQUFBQSxDQUFBd0ssSUFBQUEsSUFBQXlQLGVBQUFBLEdBQUEsQ0FBQSxHQUNBdkIsSUFBQUEsQ0FBQTFMLFVBQUFBLENBQUFuVCxJQUFBQSxDQUFBLGFBQUEsQ0FBQSxHQUNBLElBQUEsS0FBQW1HLFFBQUFBLENBQUF3SyxJQUFBQSxJQUFBeVAsZUFBQUEsSUFBQSxDQUFBLElBQ0F2QixJQUFBQSxDQUFBMUwsVUFBQUEsQ0FBQW1CLE1BQUFBLENBQUE4TCxlQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUVBaGQsTUFBQUEsQ0FBQTBmLFVBQUFBLENBQUFqRSxJQUFBQSxFQUFBO01BQ0ExTCxVQUFBQSxFQUFBMEwsSUFBQUEsQ0FBQTFMLFVBQUFBO01BQ0FoTixRQUFBQSxFQUFBQSxRQUFBQSxDQUFBd0s7SUFBQUEsQ0FBQUEsQ0FDQTtFQUFBLENBQUEsRUFHQXZOLE1BQUFBLENBQUE2ZixhQUFBQSxHQUFBLENBQUFwRSxJQUFBQSxFQUFBcUUsVUFBQUEsS0FBQUE7SUFDQXJFLElBQUFBLENBQUFxRSxVQUFBQSxHQUFBQSxVQUFBQSxFQUNBOWYsTUFBQUEsQ0FBQTBmLFVBQUFBLENBQUFqRSxJQUFBQSxFQUFBO01BQ0FxRTtJQUFBQSxDQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUdBOWYsTUFBQUEsQ0FBQStmLFlBQUFBLEdBQUEsQ0FBQXRFLElBQUFBLEVBQUF1RSxTQUFBQSxLQUFBQTtJQUNBdkUsSUFBQUEsQ0FBQXVFLFNBQUFBLEdBQUFBLFNBQUFBLEVBQ0FoZ0IsTUFBQUEsQ0FBQTBmLFVBQUFBLENBQUFqRSxJQUFBQSxFQUFBO01BQ0F1RTtJQUFBQSxDQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUdBaGdCLE1BQUFBLENBQUFpZ0IsV0FBQUEsR0FBQSxDQUFBeEUsSUFBQUEsRUFBQWxQLFFBQUFBLEtBQUFBO0lBQ0EsTUFBQXdRLGFBQUFBLEdBQUF0QixJQUFBQSxDQUFBMUwsVUFBQUEsQ0FBQW9CLE9BQUFBLENBQUE1RSxRQUFBQSxDQUFBQTtJQUNBd1EsYUFBQUEsSUFBQSxDQUFBLEdBQ0F0QixJQUFBQSxDQUFBMUwsVUFBQUEsQ0FBQW1CLE1BQUFBLENBQUE2TCxhQUFBQSxFQUFBLENBQUEsQ0FBQSxHQUVBdEIsSUFBQUEsQ0FBQTFMLFVBQUFBLENBQUFuVCxJQUFBQSxDQUFBMlAsUUFBQUEsQ0FBQUEsRUFFQXZNLE1BQUFBLENBQUEwZixVQUFBQSxDQUFBakUsSUFBQUEsRUFBQTtNQUNBMUwsVUFBQUEsRUFBQTBMLElBQUFBLENBQUExTDtJQUFBQSxDQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUdBL1AsTUFBQUEsQ0FBQW9kLFlBQUFBLEdBQUEsTUFDQXBkLE1BQUFBLENBQUE0YyxZQUFBQSxJQUNBNWMsTUFBQUEsQ0FBQXdhLE9BQUFBLENBQUF6ZixLQUFBQSxJQUNBOEksQ0FBQUEsQ0FBQXdaLElBQUFBLENBQ0FyZCxNQUFBQSxDQUFBNGMsWUFBQUEsQ0FBQTFDLE1BQUFBLEVBQ0FvRCxNQUFBQSxJQUFBQSxNQUFBQSxDQUFBdmlCLEtBQUFBLENBQUF3aUIsbUJBQUFBLEVBQUFBLElBQUF2ZCxNQUFBQSxDQUFBd2EsT0FBQUEsQ0FBQXpmLEtBQUFBLENBQUF3aUIsbUJBQUFBLEVBQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUN6UkFwZ0IsT0FBQUEsQ0FDQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FFQVcsVUFBQUEsQ0FDQSxtQkFBQSxFQUNBLFVBQUFpQyxNQUFBQSxFQUFBa2dCLFlBQUFBLEVBQUFyRyxZQUFBQSxFQUFBQTtFQUNBN1osTUFBQUEsQ0FBQTRELEdBQUFBLENBQUEsT0FBQSxFQUFBQyxDQUFBQSxJQUFBQTtJQUNBN0QsTUFBQUEsQ0FBQVMsV0FBQUEsQ0FBQTRkLEtBQUFBLElBQ0FDLFFBQUFBLEVBQ0E7RUFBQSxDQUFBLENBQUEsRUFHQTRCLFlBQUFBLENBQUFDLElBQUFBLElBQ0F0RyxZQUFBQSxDQUFBdUcsT0FBQUEsQ0FBQUYsWUFBQUEsQ0FBQUMsSUFBQUEsQ0FBQUEsQ0FBQXpjLElBQUFBLENBQUFDLFFBQUFBLElBQUFBO0lBQ0EzRCxNQUFBQSxDQUFBbWdCLElBQUFBLEdBQUF4YyxRQUFBQSxDQUFBbkUsSUFBQUEsRUFDQVYsT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQWlCLE1BQUFBLENBQUFtZ0IsSUFBQUEsQ0FBQTtFQUFBLENBQUEsQ0FHQTtBQUFBLENBQUEsQ0FBQSxFQ2xCQWhqQixPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBVyxVQUFBQSxDQUFBLGFBQUEsRUFBQSxVQUFBaUMsTUFBQUEsRUFBQUE7RUFFQUEsTUFBQUEsQ0FBQXFnQixhQUFBQSxHQUFBLENBQUEsRUFDQXJnQixNQUFBQSxDQUFBc2dCLGNBQUFBLEdBQUEsRUFBQSxFQUNBdGdCLE1BQUFBLENBQUF1Z0IsV0FBQUEsR0FBQSxFQUFBLEVBQ0F2Z0IsTUFBQUEsQ0FBQXdnQixJQUFBQSxHQUFBQSxDQUFBLENBQUE7RUFFQSxJQXNCQUMsVUFBQUE7SUF0QkFDLE1BQUFBLEdBQUE7TUFDQTVmLEVBQUFBLEVBQUEsSUFBQTZmLEtBQUFBLENBQUEsUUFBQSxDQUFBO01BQ0FDLEdBQUFBLEVBQUEsSUFBQUQsS0FBQUEsQ0FBQSxTQUFBLENBQUE7TUFDQUUsTUFBQUEsRUFBQSxJQUFBRixLQUFBQSxDQUFBLFlBQUE7SUFBQSxDQUFBO0lBSUFHLFNBQUFBLEdBQUEsQ0FDQTtNQUFBbGIsSUFBQUEsRUFBQSxlQUFBO01BQUFtYixLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFuYixJQUFBQSxFQUFBLFVBQUE7TUFBQW1iLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQW5iLElBQUFBLEVBQUEsU0FBQTtNQUFBbWIsS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBbmIsSUFBQUEsRUFBQSxRQUFBO01BQUFtYixLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFuYixJQUFBQSxFQUFBLFNBQUE7TUFBQW1iLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQW5iLElBQUFBLEVBQUEsT0FBQTtNQUFBbWIsS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBbmIsSUFBQUEsRUFBQSxhQUFBO01BQUFtYixLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFuYixJQUFBQSxFQUFBLE9BQUE7TUFBQW1iLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQW5iLElBQUFBLEVBQUEsWUFBQTtNQUFBbWIsS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBbmIsSUFBQUEsRUFBQSxPQUFBO01BQUFtYixLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFuYixJQUFBQSxFQUFBLHVCQUFBO01BQUFtYixLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUFuYixJQUFBQSxFQUFBLFlBQUE7TUFBQW1iLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLENBQUE7RUFLQS9nQixNQUFBQSxDQUFBZ2hCLFFBQUFBLEdBQUEsWUFBQTtJQUNBLE9BQUFGLFNBQUFBLENBQUE3a0IsTUFBQUEsR0FBQXlGLElBQUFBLENBQUFDLEtBQUFBLENBQUEzQixNQUFBQSxDQUFBcWdCLGFBQUFBLElBQUFyZ0IsTUFBQUEsQ0FBQXNnQixjQUFBQSxHQUFBdGdCLE1BQUFBLENBQUF1Z0IsV0FBQUEsQ0FBQUEsQ0FBQUEsR0FBQSxHQUFBLEdBQUFPLFNBQUFBLENBQUE3a0IsTUFDQTtFQUFBLENBQUEsRUFFQStELE1BQUFBLENBQUFpaEIsT0FBQUEsR0FBQSxZQUFBO0lBQ0EsSUFBQUMsYUFBQUEsR0FBQWxoQixNQUFBQSxDQUFBc2dCLGNBQUFBLEdBQUF0Z0IsTUFBQUEsQ0FBQXVnQixXQUFBQTtJQUNBdmdCLE1BQUFBLENBQUFxZ0IsYUFBQUEsSUErQkFjLGFBQUFBLENBQUFWLFVBQUFBLENBQUFBLEVBQ0F6Z0IsTUFBQUEsQ0FBQW9oQixLQUFBQSxHQUFBLEVBQUEsRUFDQXBoQixNQUFBQSxDQUFBcWdCLGFBQUFBLEdBQUEsQ0FBQSxFQUNBcmdCLE1BQUFBLENBQUF3Z0IsSUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0F4Z0IsTUFBQUEsQ0FBQXFoQixRQUFBQSxHQUFBO01BQUF6YixJQUFBQSxFQUFBLEVBQUE7TUFBQW1iLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEtBbENBL2dCLE1BQUFBLENBQUFxZ0IsYUFBQUEsR0FBQVMsU0FBQUEsQ0FBQTdrQixNQUFBQSxHQUFBaWxCLGFBQUFBLEVBQ0FULFVBQUFBLEdBQUFhLFdBQUFBLENBQUEsWUFBQTtNQUVBLElBREF0aEIsTUFBQUEsQ0FBQXFnQixhQUFBQSxFQUFBQSxFQUNBLENBQUEsS0FBQXJnQixNQUFBQSxDQUFBcWdCLGFBQUFBLEVBTUEsT0FMQXJnQixNQUFBQSxDQUFBcWhCLFFBQUFBLEdBQUE7UUFBQXpiLElBQUFBLEVBQUEscUJBQUE7UUFBQW1iLEtBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBLEVBQ0EvZ0IsTUFBQUEsQ0FBQW9oQixLQUFBQSxHQUFBLEVBQUEsRUFDQXBoQixNQUFBQSxDQUFBcWdCLGFBQUFBLEdBQUEsQ0FBQSxFQUNBcmdCLE1BQUFBLENBQUF3Z0IsSUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0F4Z0IsTUFBQUEsQ0FBQXVILE1BQUFBLEVBQUFBLEVBQ0E0WixhQUFBQSxDQUFBVixVQUFBQSxDQUFBQTtNQUVBLElBQUFjLGVBQUFBLEdBQUE3ZixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBM0IsTUFBQUEsQ0FBQXFnQixhQUFBQSxHQUFBYSxhQUFBQSxDQUFBQTtRQUNBRSxLQUFBQSxHQUFBcGhCLE1BQUFBLENBQUFxZ0IsYUFBQUEsR0FBQWtCLGVBQUFBLEdBQUFMLGFBQUFBO01BQ0FsaEIsTUFBQUEsQ0FBQW9oQixLQUFBQSxHQUFBQSxLQUFBQSxHQUFBcGhCLE1BQUFBLENBQUFzZ0IsY0FBQUEsR0FBQWMsS0FBQUEsR0FBQXBoQixNQUFBQSxDQUFBc2dCLGNBQUFBLEdBQUFjLEtBQUFBLEVBQ0FBLEtBQUFBLEdBQUFwaEIsTUFBQUEsQ0FBQXNnQixjQUFBQSxHQUNBdGdCLE1BQUFBLENBQUF3Z0IsSUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEdBRUF4Z0IsTUFBQUEsQ0FBQXdnQixJQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFFQXhnQixNQUFBQSxDQUFBcWhCLFFBQUFBLEdBQUFQLFNBQUFBLENBQUFBLFNBQUFBLENBQUE3a0IsTUFBQUEsR0FBQXNsQixlQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBSCxLQUFBQSxLQUFBcGhCLE1BQUFBLENBQUFzZ0IsY0FBQUEsR0FDQUksTUFBQUEsQ0FBQTVmLEVBQUFBLENBQUEwZ0IsSUFBQUEsRUFBQUEsR0FDQSxDQUFBLEtBQUFKLEtBQUFBLEdBQ0FWLE1BQUFBLENBQUFFLEdBQUFBLENBQUFZLElBQUFBLEVBQUFBLEdBQ0F4aEIsTUFBQUEsQ0FBQXFoQixRQUFBQSxDQUFBTixLQUFBQSxJQUFBSyxLQUFBQSxLQUFBMWYsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQTNCLE1BQUFBLENBQUFzZ0IsY0FBQUEsR0FBQSxDQUFBLENBQUEsSUFDQUksTUFBQUEsQ0FBQUcsTUFBQUEsQ0FBQVcsSUFBQUEsRUFBQUEsRUFFQXhoQixNQUFBQSxDQUFBdUgsTUFBQUEsRUFDQTtJQUFBLENBQUEsRUFBQSxHQUFBLENBQUEsQ0FRQTtFQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUM3RUFwSyxPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBcWtCLFNBQUFBLENBQUEsY0FBQSxFQUFBLFVBQUFDLFNBQUFBLEVBQUFBO0VBQ0EsT0FBQTtJQUNBQyxRQUFBQSxFQUFBLEdBQUE7SUFDQUMsS0FBQUEsRUFBQTtNQUNBQyxZQUFBQSxFQUFBO0lBQUEsQ0FBQTtJQUVBQyxJQUFBQSxFQUFBLFNBQUFBLENBQUFGLEtBQUFBLEVBQUFHLEVBQUFBLEVBQUFDLElBQUFBLEVBQUFBO01BQ0FOLFNBQUFBLENBQUE1Z0IsRUFBQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQTdCLENBQUFBLEVBQUFBO1FBQ0E4aUIsRUFBQUEsS0FBQTlpQixDQUFBQSxDQUFBZ2pCLE1BQUFBLElBQUFGLEVBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUFHLFFBQUFBLENBQUFqakIsQ0FBQUEsQ0FBQWdqQixNQUFBQSxDQUFBQSxJQUNBTCxLQUFBQSxDQUFBcmEsTUFBQUEsQ0FBQSxZQUFBO1VBRUFxYSxLQUFBQSxDQUFBTyxLQUFBQSxDQUFBUCxLQUFBQSxDQUFBQyxZQUFBQSxDQUNBO1FBQUEsQ0FBQSxDQUVBO01BQUEsQ0FBQSxDQUNBO0lBQUE7RUFBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDakJBMWtCLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0Fxa0IsU0FBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FDQSxZQUFBLEVBQ0EsUUFBQSxFQUNBLFVBQUEsRUFDQSxjQUFBLEVBQ0EsVUFBQXJqQixVQUFBQSxFQUFBZ2tCLE1BQUFBLEVBQUFDLFFBQUFBLEVBQUFDLFlBQUFBLEVBQUFBO0VBRUEsSUFBQUMsUUFBQUEsR0FBQSxTQUFBQSxDQUFBQyxnQkFBQUEsRUFBQUE7SUFFQSxJQUFBeFAsS0FBQUEsR0FBQTtNQUNBeVAsSUFBQUEsRUFBQUQsZ0JBQUFBO01BQ0FFLEdBQUFBLEVBQUE7SUFBQSxDQUFBO0lBT0EsT0FKQTFQLEtBQUFBLENBQUF5UCxJQUFBQSxDQUFBRSxLQUFBQSxDQUFBLFNBQUEsQ0FBQSxLQUNBM1AsS0FBQUEsQ0FBQTBQLEdBQUFBLEdBQUEsaUJBQUEsQ0FBQSxFQUdBMVAsS0FFQTtFQUFBLENBQUE7RUE2RUEsT0FBQTtJQUNBMk8sUUFBQUEsRUFBQSxHQUFBO0lBQ0FHLElBQUFBLEVBQUEsU0FBQUEsQ0FBQUYsS0FBQUEsRUFBQWdCLElBQUFBLEVBQUFBO01BRUFoQixLQUFBQSxDQUFBaUIsY0FBQUEsR0FBQSxFQUFBO01BRUEsSUFBQUMsSUFBQUEsR0FBQSxpR0FBQTtNQUdBQSxJQUFBQSxHQUFBQSxDQURBQSxJQUFBQSxHQUFBQSxJQUFBQSxDQUFBM25CLE9BQUFBLENBQUEsT0FBQSxFQUFBbW5CLFlBQUFBLENBQUFTLFdBQUFBLEVBQUFBLENBQUFBLEVBQ0E1bkIsT0FBQUEsQ0FBQSxPQUFBLEVBQUFtbkIsWUFBQUEsQ0FBQVUsU0FBQUEsRUFBQUEsQ0FBQUEsRUFFQUosSUFBQUEsQ0FBQUssTUFBQUEsQ0FBQVosUUFBQUEsQ0FBQVMsSUFBQUEsQ0FBQVQsQ0FBQVQsS0FBQUEsQ0FBQUEsQ0FBQUEsRUFFQXhqQixVQUFBQSxDQUFBd0YsR0FBQUEsQ0FBQSxtQkFBQSxFQUFBLFVBQUE0UCxLQUFBQSxFQUFBMFAsT0FBQUEsRUFBQUMsUUFBQUEsRUFBQUMsU0FBQUEsRUFBQUMsVUFBQUEsRUFBQUE7UUFFQXpCLEtBQUFBLENBQUFpQixjQUFBQSxHQTFGQSxVQUFBamxCLEtBQUFBLEVBQUFBO1VBS0EsS0FIQSxJQUFBMGxCLE1BQUFBLEdBQUEsQ0FBQSxDQUFBLEVBR0EsRUFBQSxLQUFBMWxCLEtBQUFBLENBQUFnSSxJQUFBQSxHQUFBO1lBQ0EsSUFBQTJkLE1BQUFBLEdBQUFuQixNQUFBQSxDQUFBb0IsR0FBQUEsQ0FBQSxHQUFBLEVBQUE1bEIsS0FBQUEsQ0FBQUE7WUFHQTBsQixNQUFBQSxDQUFBQyxNQUFBQSxDQUFBM2QsSUFBQUEsQ0FBQUEsS0FDQTBkLE1BQUFBLENBQUFDLE1BQUFBLENBQUEzZCxJQUFBQSxDQUFBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLEVBSUFoSSxLQUFBQSxDQUFBNGtCLGdCQUFBQSxLQUNBYyxNQUFBQSxDQUFBQyxNQUFBQSxDQUFBM2QsSUFBQUEsQ0FBQUEsQ0FBQSxFQUFBLENBQUEsS0FDQTBkLE1BQUFBLENBQUFDLE1BQUFBLENBQUEzZCxJQUFBQSxDQUFBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBMmMsUUFBQUEsQ0FBQTNrQixLQUFBQSxDQUFBNGtCLGdCQUFBQSxDQUFBQSxDQUFBQSxDQUFBQSxFQUtBNWtCLEtBQUFBLENBQUE2bEIsS0FBQUEsSUFDQTVmLENBQUFBLENBQUE1RyxPQUFBQSxDQUFBVyxLQUFBQSxDQUFBNmxCLEtBQUFBLEVBQUEsVUFBQUMsSUFBQUEsRUFBQS9tQixHQUFBQSxFQUFBQTtjQUdBLElBQUErbUIsSUFBQUEsQ0FBQWxCLGdCQUFBQSxFQUtBLE9BQUEsQ0FBQTdsQixHQUFBQSxHQUFBQSxHQUFBQSxDQUFBb2tCLEtBQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLElBRUF1QyxNQUFBQSxDQUFBM21CLEdBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FDQTJtQixNQUFBQSxDQUFBM21CLEdBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLE1BSUEybUIsTUFBQUEsQ0FBQTNtQixHQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUFBLEdBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FDQTJtQixNQUFBQSxDQUFBM21CLEdBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQUEsR0FBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBNGxCLFFBQUFBLENBQUFtQixJQUFBQSxDQUFBbEIsZ0JBQUFBLENBQUFBLENBQUFBLENBQUFBLElBQUFBLE1BT0FjLE1BQUFBLENBQUFDLE1BQUFBLENBQUEzZCxJQUFBQSxDQUFBQSxDQUFBakosR0FBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBNGxCLFFBQUFBLENBQUFtQixJQUFBQSxDQUFBbEIsZ0JBQUFBLENBQUFBLENBRUE7WUFBQSxDQUFBLENBQUEsRUFJQTVrQixLQUFBQSxHQUFBMmxCLE1BQ0E7VUFBQTtVQUdBLElBQUFJLElBQUFBLEdBQUEsRUFBQTtVQWdCQSxPQWZBOWYsQ0FBQUEsQ0FBQTVHLE9BQUFBLENBQUFxbUIsTUFBQUEsRUFBQSxVQUFBRyxLQUFBQSxFQUFBQTtZQUVBNWYsQ0FBQUEsQ0FBQTVHLE9BQUFBLENBQUF3bUIsS0FBQUEsRUFBQSxVQUFBelEsS0FBQUEsRUFBQUE7Y0FFQW5QLENBQUFBLENBQUF3VixRQUFBQSxDQUFBc0ssSUFBQUEsRUFBQTNRLEtBQUFBLENBQUFBLElBQ0EyUSxJQUFBQSxDQUFBL21CLElBQUFBLENBQUFvVyxLQUFBQSxDQUdBO1lBQUEsQ0FBQSxDQUVBO1VBQUEsQ0FBQSxDQUFBLEVBR0EyUSxJQUFBQSxDQUFBalYsT0FBQUEsRUFBQUEsRUFFQWlWLElBRUE7UUFBQSxDQWlCQUMsQ0FBQVYsT0FBQUEsQ0FFQTtNQUFBLENBQUEsQ0FFQTtJQUFBO0VBQUEsQ0FHQTtBQUFBLENBQUEsQ0FBQSxDQUFBLEVDeEhBL2xCLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FlLE9BQUFBLENBQUEsZUFBQSxFQUFBLFVBQUEwbEIsS0FBQUEsRUFBQUE7RUFFQSxJQUFBQyxHQUFBQSxHQUFBMW9CLElBQUFBO0VBRUEwb0IsR0FBQUEsQ0FBQWhVLGFBQUFBLEdBQUEsWUFBQTtJQUNBLE9BQUErVCxLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLGlCQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFNLEdBQUFBLENBQUFDLFFBQUFBLEdBQUEsVUFBQXhYLFFBQUFBLEVBQUFBO0lBQ0EsT0FBQXNYLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsa0JBQUEsR0FBQWpYLFFBQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUF1WCxHQUFBQSxDQUFBcFQsV0FBQUEsR0FBQSxVQUFBbkUsUUFBQUEsRUFBQUE7SUFDQSxPQUFBc1gsS0FBQUEsQ0FBQTdQLElBQUFBLENBQUEsa0JBQUEsRUFBQXpILFFBQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUF1WCxHQUFBQSxDQUFBalQsT0FBQUEsR0FBQSxVQUFBdEUsUUFBQUEsRUFBQTJELElBQUFBLEVBQUFBO0lBQ0EsT0FBQTJULEtBQUFBLENBQUE3UCxJQUFBQSxDQUFBLGtCQUFBLEdBQUF6SCxRQUFBQSxHQUFBLFFBQUEsRUFBQTJELElBQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUE0VCxHQUFBQSxDQUFBelMsZUFBQUEsR0FBQSxVQUFBb0ssSUFBQUEsRUFBQUE7SUFDQXFJLEdBQUFBLENBQUExTixPQUFBQSxHQUFBcUYsSUFBQUEsRUFDQXFJLEdBQUFBLENBQUF6UCxZQUFBQSxHQUFBLEVBQUE7SUFFQSxLQUFBLElBQUFyWSxDQUFBQSxHQUFBLENBQUEsRUFBQUEsQ0FBQUEsR0FBQXlmLElBQUFBLENBQUF4ZixNQUFBQSxFQUFBRCxDQUFBQSxFQUFBQSxFQUNBLEtBQUEsSUFBQWlVLENBQUFBLEdBQUFqVSxDQUFBQSxHQUFBLENBQUEsRUFBQWlVLENBQUFBLEdBQUF3TCxJQUFBQSxDQUFBeGYsTUFBQUEsRUFBQWdVLENBQUFBLEVBQUFBLEVBQUE7TUFDQSxJQUFBeE8sTUFBQUEsR0FBQUMsSUFBQUEsQ0FBQXdHLEtBQUFBLENBQUF4RyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxDQUFBQTtNQUNBcWlCLEdBQUFBLENBQUF6UCxZQUFBQSxDQUFBelgsSUFBQUEsQ0FBQTtRQUNBcUwsRUFBQUEsRUFBQSxDQUFBO1FBQ0EyTSxXQUFBQSxFQUFBNkcsSUFBQUEsQ0FBQSxDQUFBLEtBQUFoYSxNQUFBQSxHQUFBekYsQ0FBQUEsR0FBQWlVLENBQUFBLENBQUFBLENBQUFySyxJQUFBQTtRQUNBaVAsWUFBQUEsRUFBQTRHLElBQUFBLENBQUEsQ0FBQSxLQUFBaGEsTUFBQUEsR0FBQXdPLENBQUFBLEdBQUFqVSxDQUFBQSxDQUFBQSxDQUFBNEosSUFBQUE7UUFDQStPLE1BQUFBLEVBQUE7TUFBQSxDQUFBLENBRUE7SUFBQTtJQUdBLEtBQUEzWSxDQUFBQSxJQVNBLFVBQUE4SyxLQUFBQSxFQUFBQTtNQUNBLElBQUFrZCxDQUFBQTtRQUFBaG9CLENBQUFBO1FBQUFpb0IsQ0FBQUEsR0FBQW5kLEtBQUFBLENBQUE3SyxNQUFBQTtNQUVBLE9BQUFnb0IsQ0FBQUEsR0FFQWpvQixDQUFBQSxHQUFBMEYsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQUQsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQXdpQixDQUFBQSxFQUFBQSxDQUFBQSxFQUdBRCxDQUFBQSxHQUFBbGQsS0FBQUEsQ0FBQW1kLENBQUFBLENBQUFBLEVBQ0FuZCxLQUFBQSxDQUFBbWQsQ0FBQUEsQ0FBQUEsR0FBQW5kLEtBQUFBLENBQUE5SyxDQUFBQSxDQUFBQSxFQUNBOEssS0FBQUEsQ0FBQTlLLENBQUFBLENBQUFBLEdBQUFnb0IsQ0FHQTtJQUFBLENBdkJBRSxDQUFBSixHQUFBQSxDQUFBelAsWUFBQUEsQ0FBQUEsRUFDQXlQLEdBQUFBLENBQUF6UCxZQUFBQSxFQUNBeVAsR0FBQUEsQ0FBQXpQLFlBQUFBLENBQUFyWSxDQUFBQSxDQUFBQSxDQUFBaU0sRUFBQUEsR0FBQWpNLENBQUFBLEdBQUEsQ0FFQTtFQUFBLENBQUEsRUFFQThuQixHQUFBQSxDQUFBeFAsZUFBQUEsR0FBQSxVQUFBbUgsSUFBQUEsRUFBQUE7SUFDQSxPQUFBcUksR0FBQUEsQ0FBQXpQLFlBQ0E7RUFBQSxDQWlCQTtBQUFBLENBQUEsQ0FBQSxFQzdEQWxYLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FlLE9BQUFBLENBQUEsVUFBQSxFQUFBLFVBQUEwbEIsS0FBQUEsRUFBQUE7RUFFQXpvQixJQUFBQSxDQUVBdUUsSUFBQUEsR0FBQSxVQUFBa04sS0FBQUEsRUFBQUE7SUFFQSxPQURBL04sT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQThOLEtBQUFBLENBQUFBLEVBQ0FnWCxLQUFBQSxDQUFBN1AsSUFBQUEsQ0FBQSxZQUFBLEVBQUFuSCxLQUFBQSxDQUNBO0VBQUEsQ0FFQTtBQUFBLENBQUEsQ0FBQSxFQ1ZBMVAsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQWUsT0FBQUEsQ0FBQSxTQUFBLEVBQUEsVUFBQTBsQixLQUFBQSxFQUFBQTtFQUVBem9CLElBQUFBLENBRUErb0IsU0FBQUEsR0FBQSxVQUFBQyxNQUFBQSxFQUFBQTtJQUNBLE9BQUFQLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsb0JBQUEsR0FBQVksTUFBQUEsQ0FDQTtFQUFBLENBQUEsRUFKQWhwQixJQUFBQSxDQU1BaXBCLFNBQUFBLEdBQUEsVUFBQUQsTUFBQUEsRUFBQUE7SUFDQSxPQUFBUCxLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLG9CQUFBLEdBQUFZLE1BQUFBLENBQ0E7RUFBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDYkFqbkIsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQWUsT0FBQUEsQ0FBQSxTQUFBLEVBQUEsVUFBQTBsQixLQUFBQSxFQUFBQTtFQUVBem9CLElBQUFBLENBRUFrcEIsWUFBQUEsR0FBQSxVQUFBbkUsSUFBQUEsRUFBQTlmLElBQUFBLEVBQUFBO0lBQ0EsT0FBQXdqQixLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLGFBQUEsR0FBQXJELElBQUFBLEdBQUEsR0FBQSxHQUFBOWYsSUFBQUEsR0FBQSxZQUFBLENBQ0E7RUFBQSxDQUFBLEVBSkFqRixJQUFBQSxDQU1Bc1AsWUFBQUEsR0FBQSxVQUFBeVYsSUFBQUEsRUFBQTlmLElBQUFBLEVBQUFpSCxLQUFBQSxFQUFBQTtJQUNBLE9BQUF1YyxLQUFBQSxDQUFBN1AsSUFBQUEsQ0FBQSxhQUFBLEdBQUFtTSxJQUFBQSxHQUFBLEdBQUEsR0FBQTlmLElBQUFBLEdBQUEsWUFBQSxFQUFBO01BQ0FpSDtJQUFBQSxDQUFBQSxDQUVBO0VBQUEsQ0FFQTtBQUFBLENBQUEsQ0FBQSxFQ2ZBbkssT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQWUsT0FBQUEsQ0FBQSxhQUFBLEVBQUEsWUFBQTtFQUVBLElBQUEybEIsR0FBQUEsR0FBQTFvQixJQUFBQTtFQUVBMG9CLEdBQUFBLENBQUFuaEIsU0FBQUEsR0FBQSxDQUNBO0lBQ0E0SyxJQUFBQSxFQUFBLElBQUE7SUFDQTNILElBQUFBLEVBQUEsU0FBQTtJQUNBOFMsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBbkwsSUFBQUEsRUFBQSxJQUFBO0lBQ0EzSCxJQUFBQSxFQUFBLFlBQUE7SUFDQThTLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQW5MLElBQUFBLEVBQUEsSUFBQTtJQUNBM0gsSUFBQUEsRUFBQSxVQUFBO0lBQ0E4UyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLEVBSUFvTCxHQUFBQSxDQUFBblgsSUFBQUEsR0FBQSxDQUNBO0lBQ0FZLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUEsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBQSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLEVBSUF1VyxHQUFBQSxDQUFBbGhCLGdCQUFBQSxHQUFBa2hCLEdBQUFBLENBQUFuaEIsU0FBQUEsQ0FBQSxDQUFBLENBQUEsRUFFQW1oQixHQUFBQSxDQUFBOWdCLFdBQUFBLEdBQUEsVUFBQUQsUUFBQUEsRUFBQUE7SUFFQSxPQURBK2dCLEdBQUFBLENBQUFsaEIsZ0JBQUFBLEdBQUFHLFFBQUFBLEVBQ0FBLFFBQ0E7RUFBQSxDQUFBLEVBRUErZ0IsR0FBQUEsQ0FBQWpoQixXQUFBQSxHQUFBLFlBQUE7SUFDQSxPQUFBaWhCLEdBQUFBLENBQUFsaEIsZ0JBQ0E7RUFBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDOUNBekYsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQWUsT0FBQUEsQ0FBQSxVQUFBLEVBQUEsVUFBQTBsQixLQUFBQSxFQUFBQTtFQUVBem9CLElBQUFBLENBRUE2WSxLQUFBQSxHQUFBLFlBQUE7SUFDQSxPQUFBNFAsS0FBQUEsQ0FBQUwsR0FBQUEsQ0FBQSxZQUFBLENBQ0E7RUFBQSxDQUFBLEVBSkFwb0IsSUFBQUEsQ0FNQTBZLE1BQUFBLEdBQUEsVUFBQUUsSUFBQUEsRUFBQUE7SUFDQSxPQUFBNlAsS0FBQUEsQ0FBQTdQLElBQUFBLENBQUEsWUFBQSxFQUFBQSxJQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQVJBNVksSUFBQUEsQ0FVQStZLE9BQUFBLEdBQUEsVUFBQUgsSUFBQUEsRUFBQUE7SUFDQSxPQUFBNlAsS0FBQUEsQ0FBQUwsR0FBQUEsQ0FBQSxhQUFBLEdBQUF4UCxJQUFBQSxDQUFBeFQsR0FBQUEsQ0FDQTtFQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUNqQkFyRCxPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBZSxPQUFBQSxDQUFBLGNBQUEsRUFBQSxVQUFBMGxCLEtBQUFBLEVBQUFBO0VBQ0EsSUFBQUMsR0FBQUEsR0FBQTFvQixJQUFBQTtFQUVBMG9CLEdBQUFBLENBQUFyRixRQUFBQSxHQUFBLFlBQUE7SUFDQSxPQUFBb0YsS0FBQUEsQ0FBQUwsR0FBQUEsQ0FBQSx1QkFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBTSxHQUFBQSxDQUFBekksUUFBQUEsR0FBQSxVQUFBM08sT0FBQUEsR0FBQSxDQUFBLENBQUEsRUFBQTtJQUNBLElBQUE3TyxHQUFBQSxHQUNBLHVCQUFBLElBQ0E2TyxPQUFBQSxDQUFBOFMsS0FBQUEsR0FBQSxVQUFBOVMsT0FBQUEsQ0FBQThTLEtBQUFBLEVBQUFBLEdBQUEsRUFBQSxDQUFBLElBQ0E5UyxPQUFBQSxDQUFBcVMsSUFBQUEsR0FBQSxTQUFBclMsT0FBQUEsQ0FBQXFTLElBQUFBLEVBQUFBLEdBQUEsRUFBQSxDQUFBLElBQ0FyUyxPQUFBQSxDQUFBNlMsTUFBQUEsR0FBQSxZQUFBN1MsT0FBQUEsQ0FBQTZTLE1BQUFBLEVBQUFBLEdBQUEsRUFBQSxDQUFBLElBQ0E3UyxPQUFBQSxDQUFBOFIsT0FBQUEsR0FBQSxhQUFBOVIsT0FBQUEsQ0FBQThSLE9BQUFBLEVBQUFBLEdBQUEsRUFBQSxDQUFBLElBQ0E5UixPQUFBQSxDQUFBL0osU0FBQUEsSUFBQStKLE9BQUFBLENBQUEvSixTQUFBQSxDQUFBMUcsTUFBQUEsR0FBQSxDQUFBLEdBQUEsYUFBQXlRLE9BQUFBLENBQUEvSixTQUFBQSxDQUFBNGhCLElBQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsR0FBQSxFQUFBLENBQUEsSUFDQTdYLE9BQUFBLENBQUFxRCxVQUFBQSxJQUFBckQsT0FBQUEsQ0FBQXFELFVBQUFBLENBQUE5VCxNQUFBQSxHQUFBLENBQUEsR0FBQSxlQUFBeVEsT0FBQUEsQ0FBQXFELFVBQUFBLENBQUF3VSxJQUFBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLEdBQUEsRUFBQSxDQUFBLElBQ0E3WCxPQUFBQSxDQUFBdU4sTUFBQUEsR0FBQSxXQUFBdk4sT0FBQUEsQ0FBQXVOLE1BQUFBLEVBQUFBLEdBQUEsRUFBQSxDQUFBO0lBQ0EsT0FBQTRKLEtBQUFBLENBQUFMLEdBQUFBLENBQUEzbEIsR0FBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQWltQixHQUFBQSxDQUFBaFUsYUFBQUEsR0FBQSxNQUNBK1QsS0FBQUEsQ0FBQUwsR0FBQUEsQ0FBQSwyQkFBQSxDQUFBLEVBR0FNLEdBQUFBLENBQUF2SSxZQUFBQSxHQUFBLE1BQ0FzSSxLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLDBCQUFBLENBQUEsRUFHQU0sR0FBQUEsQ0FBQW5ILE9BQUFBLEdBQUEsVUFBQWxCLElBQUFBLEVBQUFBO0lBQ0EsT0FBQW9JLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsdUJBQUEsR0FBQS9ILElBQUFBLENBQUFqYixHQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBc2pCLEdBQUFBLENBQUFsRSxVQUFBQSxHQUFBLFVBQUFuRSxJQUFBQSxFQUFBQTtJQUNBLE9BQUFvSSxLQUFBQSxDQUFBN1AsSUFBQUEsQ0FBQSx1QkFBQSxHQUFBeUgsSUFBQUEsQ0FBQWpiLEdBQUFBLEVBQUFpYixJQUFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBcUksR0FBQUEsQ0FBQXBHLFFBQUFBLEdBQUEsVUFBQXJkLElBQUFBLEVBQUFvYixJQUFBQSxFQUFBQTtJQUNBLE9BQUFvSSxLQUFBQSxDQUFBVyxHQUFBQSxDQUFBLHNCQUFBLEVBQUE7TUFDQW5rQixJQUFBQTtNQUNBb2I7SUFBQUEsQ0FBQUEsQ0FFQTtFQUFBLENBQUEsRUFFQXFJLEdBQUFBLENBQUFuRyxVQUFBQSxHQUFBLFVBQUF0ZCxJQUFBQSxFQUFBb2IsSUFBQUEsRUFBQUE7SUFDQW9JLEtBQUFBLENBQUFMLEdBQUFBLENBQUEsdUJBQUEsR0FBQS9ILElBQUFBLENBQUFqYixHQUFBQSxHQUFBLFVBQUEsR0FBQUgsSUFBQUEsQ0FBQUcsR0FBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQXNqQixHQUFBQSxDQUFBaEcsVUFBQUEsR0FBQSxVQUFBckMsSUFBQUEsRUFBQUE7SUFDQSxPQUFBb0ksS0FBQUEsQ0FBQVksTUFBQUEsQ0FBQSx1QkFBQSxHQUFBaEosSUFBQUEsQ0FBQWpiLEdBQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFzakIsR0FBQUEsQ0FBQTNGLFNBQUFBLEdBQUEsVUFBQTFDLElBQUFBLEVBQUFoSixJQUFBQSxFQUFBQTtJQUNBLE9BQUFvUixLQUFBQSxDQUFBN1AsSUFBQUEsQ0FBQSx3QkFBQXlILElBQUFBLENBQUFqYixHQUFBQSxXQUFBaVMsSUFBQUEsRUFBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQXFSLEdBQUFBLENBQUFuRixRQUFBQSxHQUFBLFlBQUE7SUFDQSxPQUFBa0YsS0FBQUEsQ0FBQUwsR0FBQUEsQ0FBQSxzQkFBQSxDQUNBO0VBQUEsQ0FBQSxFQUVBTSxHQUFBQSxDQUFBaEYsV0FBQUEsR0FBQSxZQUFBO0lBQ0EsT0FBQStFLEtBQUFBLENBQUE3UCxJQUFBQSxDQUFBLHNCQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUE4UCxHQUFBQSxDQUFBMUQsT0FBQUEsR0FBQSxVQUFBblksRUFBQUEsRUFBQUE7SUFDQSxPQUFBNGIsS0FBQUEsQ0FBQUwsR0FBQUEsQ0FBQSx1QkFBQXZiLEVBQUFBLEVBQUFBLENBQ0E7RUFBQSxDQUNBO0FBQUEsQ0FBQSxDQUFBLEVDbEVBOUssT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQWUsT0FBQUEsQ0FBQSxTQUFBLEVBQUEsVUFBQTBsQixLQUFBQSxFQUFBQTtFQUNBLElBQUFDLEdBQUFBLEdBQUExb0IsSUFBQUE7RUFFQTBvQixHQUFBQSxDQUFBWSxPQUFBQSxHQUFBLFlBQUE7SUFDQSxPQUFBYixLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLFlBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQU0sR0FBQUEsQ0FBQXhGLFFBQUFBLEdBQUEsWUFBQTtJQUNBLE9BQUF1RixLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLGdCQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFNLEdBQUFBLENBQUFqRixTQUFBQSxHQUFBLFVBQUE1VyxFQUFBQSxFQUFBQTtJQUNBLE9BQUE0YixLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLGtCQUFBdmIsRUFBQUEsRUFBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQTZiLEdBQUFBLENBQUFhLFFBQUFBLEdBQUEsVUFBQUMsS0FBQUEsRUFBQUE7SUFFQSxPQURBZixLQUFBQSxDQUFBZ0IsUUFBQUEsQ0FBQUMsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQUgsS0FBQUEsRUFDQWQsR0FBQUEsQ0FBQVksT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQVosR0FBQUEsQ0FBQTNSLFlBQUFBLEdBQUEsVUFBQTlSLElBQUFBLEVBQUFBO0lBQ0EsT0FBQXdqQixLQUFBQSxDQUNBN1AsSUFBQUEsQ0FBQSx5QkFBQSxFQUFBO01BQ0EzVDtJQUFBQSxDQUFBQSxDQUFBQSxDQUVBcUQsSUFBQUEsQ0FBQSxVQUFBQyxRQUFBQSxFQUFBQTtNQUVBLE9BREFsRixNQUFBQSxDQUFBOEIsWUFBQUEsQ0FBQXFrQixLQUFBQSxHQUFBamhCLFFBQUFBLENBQUFuRSxJQUFBQSxFQUNBc2tCLEdBQUFBLENBQUFhLFFBQUFBLENBQUFoaEIsUUFBQUEsQ0FBQW5FLElBQUFBLENBQ0E7SUFBQSxDQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFza0IsR0FBQUEsQ0FBQTFqQixLQUFBQSxHQUFBLFVBQUFDLElBQUFBLEVBQUFBO0lBQ0EsT0FBQXdqQixLQUFBQSxDQUFBTCxHQUFBQSxDQUFBLGFBQUEsR0FBQW5qQixJQUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBcUQsSUFBQUEsQ0FBQSxVQUFBQyxRQUFBQSxFQUFBQTtNQUVBLE9BREFsRixNQUFBQSxDQUFBOEIsWUFBQUEsQ0FBQXFrQixLQUFBQSxHQUFBamhCLFFBQUFBLENBQUFuRSxJQUFBQSxFQUNBc2tCLEdBQUFBLENBQUFhLFFBQUFBLENBQUFoaEIsUUFBQUEsQ0FBQW5FLElBQUFBLENBQ0E7SUFBQSxDQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFza0IsR0FBQUEsQ0FBQXhMLFVBQUFBLEdBQUEsVUFBQWpZLElBQUFBLEVBQUFBO0lBQ0EsT0FBQXdqQixLQUFBQSxDQUNBN1AsSUFBQUEsQ0FBQSxhQUFBLEdBQUEzVCxJQUFBQSxDQUFBRyxHQUFBQSxFQUFBO01BQ0FIO0lBQUFBLENBQUFBLENBQUFBLENBRUFxRCxJQUFBQSxDQUFBLFlBQUE7TUFDQSxPQUFBb2dCLEdBQUFBLENBQUFZLE9BQUFBLEVBQ0E7SUFBQSxDQUFBLENBQ0E7RUFBQSxDQUFBLEVBRUFaLEdBQUFBLENBQUFoTSxhQUFBQSxHQUFBLFVBQUF6WCxJQUFBQSxFQUFBMFgsUUFBQUEsRUFBQUE7SUFDQSxPQUFBOEwsS0FBQUEsQ0FBQTdQLElBQUFBLENBQUEsYUFBQSxHQUFBM1QsSUFBQUEsR0FBQSxlQUFBLEVBQUE7TUFDQTBYO0lBQUFBLENBQUFBLENBRUE7RUFBQSxDQUFBLEVBRUErTCxHQUFBQSxDQUFBM0wsY0FBQUEsR0FBQSxVQUFBOVgsSUFBQUEsRUFBQStYLFdBQUFBLEVBQUFSLFdBQUFBLEVBQUFBO0lBQ0EsT0FBQWlNLEtBQUFBLENBQUE3UCxJQUFBQSxDQUFBLGFBQUEsR0FBQTNULElBQUFBLEdBQUEsV0FBQSxFQUFBO01BQ0ErWCxXQUFBQTtNQUNBUjtJQUFBQSxDQUFBQSxDQUVBO0VBQUEsQ0FBQSxFQUVBa00sR0FBQUEsQ0FBQXpMLGNBQUFBLEdBQUEsVUFBQWhZLElBQUFBLEVBQUFvWCxXQUFBQSxFQUFBQTtJQUNBLE9BQUFvTSxLQUFBQSxDQUNBN1AsSUFBQUEsQ0FBQSxhQUFBLEdBQUEzVCxJQUFBQSxHQUFBLFdBQUEsRUFBQTtNQUNBb1g7SUFBQUEsQ0FBQUEsQ0FBQUEsQ0FFQS9ULElBQUFBLENBQUEsWUFBQTtNQUNBLE9BQUFvZ0IsR0FBQUEsQ0FBQVksT0FBQUEsRUFDQTtJQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQVosR0FBQUEsQ0FBQTlmLE1BQUFBLEdBQUEsWUFBQTtJQUNBdkYsTUFBQUEsQ0FBQThCLFlBQUFBLENBQUE2RCxLQUFBQSxFQUFBQSxFQUNBeWYsS0FBQUEsQ0FBQWdCLFFBQUFBLENBQUFDLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsRUFDQTtFQUFBLENBQUEsRUFFQWpCLEdBQUFBLENBQUFrQixVQUFBQSxHQUFBLFVBQUF0TixRQUFBQSxFQUFBSyxRQUFBQSxFQUFBQTtJQUNBLE9BQUE4TCxLQUFBQSxDQUNBN1AsSUFBQUEsQ0FBQSxZQUFBLEVBQUE7TUFDQTBELFFBQUFBO01BQ0FLO0lBQUFBLENBQUFBLENBQUFBLENBRUFyVSxJQUFBQSxDQUFBLFlBQUE7TUFDQSxPQUFBb2dCLEdBQUFBLENBQUExakIsS0FBQUEsQ0FBQXNYLFFBQUFBLEVBQUFLLFFBQUFBLENBQ0E7SUFBQSxDQUFBLENBQ0E7RUFBQSxDQUNBO0FBQUEsQ0FBQSxDQUFBLEVDdEZBNWEsT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FDQVcsVUFBQUEsQ0FBQSxpQkFBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBaWxCLE9BQUFBLEVBQUFBO0VBRUFBLE9BQUFBLENBQUFaLFNBQUFBLENBQUEsU0FBQSxDQUFBLENBQ0EzZ0IsSUFBQUEsQ0FBQSxVQUFBQyxRQUFBQSxFQUFBQTtJQUNBM0QsTUFBQUEsQ0FBQWtsQixPQUFBQSxHQUFBcmhCLENBQUFBLENBQUFxZ0IsT0FBQUEsQ0FBQXZnQixRQUFBQSxDQUFBbkUsSUFBQUEsQ0FBQWdHLEdBQUFBLENBQUEyZixNQUFBQSxLQUFBO01BQ0FDLEtBQUFBLEVBQUFELE1BQUFBO01BQ0F2ZixJQUFBQSxFQUFBdWYsTUFBQUEsQ0FBQUUsU0FBQUEsQ0FBQSxDQUFBLEVBQUFGLE1BQUFBLENBQUFoVSxPQUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUFoVyxPQUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUEsQ0FBQXdKLFVBQUFBO0lBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBO0lBRUEsS0FBQSxJQUFBd2dCLE1BQUFBLElBQUFubEIsTUFBQUEsQ0FBQWtsQixPQUFBQSxFQUNBQyxNQUFBQSxDQUFBaEksT0FBQUEsR0FBQXRaLENBQUFBLENBQUFxZ0IsT0FBQUEsQ0FBQSxDQUFBaUIsTUFBQUEsQ0FBQXZmLElBQUFBLEVBQUFBLEdBQUEwZixnQkFBQUEsQ0FBQUgsTUFBQUEsQ0FBQXZmLElBQUFBLENBQUFBLENBQUFBLENBQUFBO0lBRUE5RyxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBaUIsTUFBQUEsQ0FBQWtsQixPQUFBQSxDQUNBO0VBQUEsQ0FBQSxDQUFBLEVBRUFsbEIsTUFBQUEsQ0FBQXVsQixLQUFBQSxHQUFBLENBQUFKLE1BQUFBLEVBQUFJLEtBQUFBLEtBQUFBO0lBQ0FKLE1BQUFBLENBQUFJLEtBQUFBLEdBQUFBLEtBQUE7RUFBQSxDQUFBO0VBR0EsTUFBQUQsZ0JBQUFBLEdBQUExZixJQUFBQSxJQUFBL0IsQ0FBQUEsQ0FBQXFnQixPQUFBQSxDQUFBbGtCLE1BQUFBLENBQUFrbEIsT0FBQUEsQ0FBQWhqQixNQUFBQSxDQUFBaWpCLE1BQUFBLElBQUF2ZixJQUFBQSxLQUFBdWYsTUFBQUEsQ0FBQXZmLElBQUFBLENBQUFBLENBQUFKLEdBQUFBLENBQUEyZixNQUFBQSxJQUFBQSxNQUFBQSxDQUFBdmYsSUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBQS9KLEtBQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQTtFQUVBbUUsTUFBQUEsQ0FBQXdsQixRQUFBQSxHQUFBLE1BQUEsR0FBQXhsQixNQUFBQSxDQUFBa2xCLE9BQUFBLENBQUFoakIsTUFBQUEsQ0FBQWlqQixNQUFBQSxJQUFBQSxNQUFBQSxDQUFBdmYsSUFBQUEsS0FBQXVmLE1BQUFBLENBQUFJLEtBQUFBLENBQUFBLENBQUF0cEIsTUFBQUEsSUFBQStELE1BQUFBLENBQUFrbEIsT0FBQUEsQ0FBQWpwQixNQUFBQSxFQUFBQSxFQUVBK0QsTUFBQUEsQ0FBQXlsQixjQUFBQSxHQUFBLE1BQUF6bEIsTUFBQUEsQ0FBQWtsQixPQUFBQSxDQUFBaGpCLE1BQUFBLENBQUFpakIsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQUksS0FBQUEsQ0FBQUEsQ0FBQXRwQixNQUFBQSxLQUFBK0QsTUFBQUEsQ0FBQWtsQixPQUFBQSxDQUFBanBCLE1BQ0E7QUFBQSxDQUFBLENBQUEsRUN4QkFrQixPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBVyxVQUFBQSxDQUFBLGdCQUFBLEVBQUEsVUFBQWlDLE1BQUFBLEVBQUFpbEIsT0FBQUEsRUFBQUE7RUFDQUEsT0FBQUEsQ0FBQWQsU0FBQUEsQ0FBQSxRQUFBLENBQUEsQ0FDQXpnQixJQUFBQSxDQUFBLFVBQUFDLFFBQUFBLEVBQUFBO0lBQ0EzRCxNQUFBQSxDQUFBK04sTUFBQUEsR0FBQXBLLFFBQUFBLENBQUFuRSxJQUNBO0VBQUEsQ0FBQSxDQUNBO0FBQUEsQ0FBQSxDQUFBLEVDTkFyQyxPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBVyxVQUFBQSxDQUFBLGVBQUEsRUFBQSxVQUFBaUMsTUFBQUEsRUFBQWlsQixPQUFBQSxFQUFBQTtFQUNBQSxPQUFBQSxDQUFBZCxTQUFBQSxDQUFBLE9BQUEsQ0FBQSxDQUNBemdCLElBQUFBLENBQUEsVUFBQUMsUUFBQUEsRUFBQUE7SUFDQTNELE1BQUFBLENBQUErTixNQUFBQSxHQUFBcEssUUFBQUEsQ0FBQW5FLElBQ0E7RUFBQSxDQUFBLENBQ0E7QUFBQSxDQUFBLENBQUEsRUNOQXJDLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FXLFVBQUFBLENBQUEsZ0JBQUEsRUFBQSxVQUFBaUMsTUFBQUEsRUFBQWlsQixPQUFBQSxFQUFBQTtFQUNBQSxPQUFBQSxDQUFBZCxTQUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUNBemdCLElBQUFBLENBQUEsVUFBQUMsUUFBQUEsRUFBQUE7SUFDQTNELE1BQUFBLENBQUErTixNQUFBQSxHQUFBcEssUUFBQUEsQ0FBQW5FLElBQ0E7RUFBQSxDQUFBLENBQ0E7QUFBQSxDQUFBLENBQUEsRUNOQXJDLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FXLFVBQUFBLENBQUEsbUJBQUEsRUFBQSxVQUFBaUMsTUFBQUEsRUFBQWlsQixPQUFBQSxFQUFBQTtFQUVBQSxPQUFBQSxDQUFBZCxTQUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUNBemdCLElBQUFBLENBQUEsVUFBQUMsUUFBQUEsRUFBQUE7SUFDQTNELE1BQUFBLENBQUFrbEIsT0FBQUEsR0FBQXJoQixDQUFBQSxDQUFBcWdCLE9BQUFBLENBQUF2Z0IsUUFBQUEsQ0FBQW5FLElBQUFBLENBQUFnRyxHQUFBQSxDQUFBMmYsTUFBQUEsS0FBQTtNQUNBdkwsS0FBQUEsRUFBQXVMLE1BQUFBO01BQ0F2ZixJQUFBQSxFQUFBdWYsTUFBQUEsQ0FBQUUsU0FBQUEsQ0FBQSxDQUFBLEVBQUFGLE1BQUFBLENBQUFoVSxPQUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUFoVyxPQUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUEsQ0FBQXdKLFVBQUFBO0lBQUFBLENBQUFBLENBQUFBLENBQUFBLENBQUFBO0lBRUEsS0FBQSxJQUFBd2dCLE1BQUFBLElBQUFubEIsTUFBQUEsQ0FBQWtsQixPQUFBQSxFQUNBQyxNQUFBQSxDQUFBaEksT0FBQUEsR0FBQXRaLENBQUFBLENBQUFxZ0IsT0FBQUEsQ0FBQSxDQUFBaUIsTUFBQUEsQ0FBQXZmLElBQUFBLEVBQUFBLEdBQUEwZixnQkFBQUEsQ0FBQUgsTUFBQUEsQ0FBQXZmLElBQUFBLENBQUFBLENBQUFBLENBQUFBO0lBRUE5RyxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBaUIsTUFBQUEsQ0FBQWtsQixPQUFBQSxDQUNBO0VBQUEsQ0FBQSxDQUFBLEVBRUFsbEIsTUFBQUEsQ0FBQXVsQixLQUFBQSxHQUFBLENBQUFKLE1BQUFBLEVBQUFJLEtBQUFBLEtBQUFBO0lBQ0FKLE1BQUFBLENBQUFJLEtBQUFBLEdBQUFBLEtBQUE7RUFBQSxDQUFBO0VBR0EsTUFBQUQsZ0JBQUFBLEdBQUExZixJQUFBQSxJQUFBL0IsQ0FBQUEsQ0FBQXFnQixPQUFBQSxDQUFBbGtCLE1BQUFBLENBQUFrbEIsT0FBQUEsQ0FBQWhqQixNQUFBQSxDQUFBaWpCLE1BQUFBLElBQUF2ZixJQUFBQSxLQUFBdWYsTUFBQUEsQ0FBQXZmLElBQUFBLENBQUFBLENBQUFKLEdBQUFBLENBQUEyZixNQUFBQSxJQUFBQSxNQUFBQSxDQUFBdmYsSUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBQS9KLEtBQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQTtFQUVBbUUsTUFBQUEsQ0FBQXdsQixRQUFBQSxHQUFBLE1BQUEsR0FBQXhsQixNQUFBQSxDQUFBa2xCLE9BQUFBLENBQUFoakIsTUFBQUEsQ0FBQWlqQixNQUFBQSxJQUFBQSxNQUFBQSxDQUFBdmYsSUFBQUEsS0FBQXVmLE1BQUFBLENBQUFJLEtBQUFBLENBQUFBLENBQUF0cEIsTUFBQUEsSUFBQStELE1BQUFBLENBQUFrbEIsT0FBQUEsQ0FBQWpwQixNQUFBQSxFQUFBQSxFQUVBK0QsTUFBQUEsQ0FBQXlsQixjQUFBQSxHQUFBLE1BQUF6bEIsTUFBQUEsQ0FBQWtsQixPQUFBQSxDQUFBaGpCLE1BQUFBLENBQUFpakIsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQUksS0FBQUEsQ0FBQUEsQ0FBQXRwQixNQUFBQSxLQUFBK0QsTUFBQUEsQ0FBQWtsQixPQUFBQSxDQUFBanBCLE1BQ0E7QUFBQSxDQUFBLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcCA9IFtcclxuICB7XHJcbiAgICBiYXNlOiBcIkFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0MVxcdTI0QjZcXHVGRjIxXFx1MDBDMFxcdTAwQzFcXHUwMEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxcdTAwQzNcXHUwMTAwXFx1MDEwMlxcdTFFQjBcXHUxRUFFXFx1MUVCNFxcdTFFQjJcXHUwMjI2XFx1MDFFMFxcdTAwQzRcXHUwMURFXFx1MUVBMlxcdTAwQzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBDNlxcdTAxRkNcXHUwMUUyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBT1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM4XFx1QTczQV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQyXFx1MjRCN1xcdUZGMjJcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUwMjQzXFx1MDE4MlxcdTAxODFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0M1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYxXFx1MDFDNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMlxcdTAxQzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0NVxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJGXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDZcXHUyNEJCXFx1RkYyNlxcdTFFMUVcXHUwMTkxXFx1QTc3Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiR1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ3XFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0OFxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIklcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0OVxcdTI0QkVcXHVGRjI5XFx1MDBDQ1xcdTAwQ0RcXHUwMENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxcdTAwQ0ZcXHUxRTJFXFx1MUVDOFxcdTAxQ0ZcXHUwMjA4XFx1MDIwQVxcdTFFQ0FcXHUwMTJFXFx1MUUyQ1xcdTAxOTddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIktcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QlxcdTI0QzBcXHVGRjJCXFx1MUUzMFxcdTAxRThcXHUxRTMyXFx1MDEzNlxcdTFFMzRcXHUwMTk4XFx1MkM2OVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3QTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0Q1xcdTI0QzFcXHVGRjJDXFx1MDEzRlxcdTAxMzlcXHUwMTNEXFx1MUUzNlxcdTFFMzhcXHUwMTNCXFx1MUUzQ1xcdTFFM0FcXHUwMTQxXFx1MDIzRFxcdTJDNjJcXHUyQzYwXFx1QTc0OFxcdUE3NDZcXHVBNzgwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJNXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNERcXHUyNEMyXFx1RkYyRFxcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTJDNkVcXHUwMTlDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5KXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0RlxcdTI0QzRcXHVGRjJGXFx1MDBEMlxcdTAwRDNcXHUwMEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxcdTAwRDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHUwMEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xcdTAwRDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT0lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT09cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT1VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUwXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJRXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTFcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUlwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUyXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiU1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUzXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU0XFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MjhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1NVxcdTI0Q0FcXHVGRjM1XFx1MDBEOVxcdTAwREFcXHUwMERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHUwMERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU2XFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVllcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc2MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiV1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU3XFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJYXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNThcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTlcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHUwMEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDVBXFx1MjRDRlxcdUZGM0FcXHUwMTc5XFx1MUU5MFxcdTAxN0JcXHUwMTdEXFx1MUU5MlxcdTFFOTRcXHUwMUI1XFx1MDIyNFxcdTJDN0ZcXHUyQzZCXFx1QTc2Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDYxXFx1MjREMFxcdUZGNDFcXHUxRTlBXFx1MDBFMFxcdTAwRTFcXHUwMEUyXFx1MUVBN1xcdTFFQTVcXHUxRUFCXFx1MUVBOVxcdTAwRTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxcdTAwRTRcXHUwMURGXFx1MUVBM1xcdTAwRTVcXHUwMUZCXFx1MDFDRVxcdTAyMDFcXHUwMjAzXFx1MUVBMVxcdTFFQURcXHUxRUI3XFx1MUUwMVxcdTAxMDVcXHUyQzY1XFx1MDI1MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBFNlxcdTAxRkRcXHUwMUUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM5XFx1QTczQl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczRF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDYyXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2M1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxcdTAwRTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY0XFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGM1xcdTAxQzZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2NVxcdTI0RDRcXHVGRjQ1XFx1MDBFOFxcdTAwRTlcXHUwMEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xcdTAwRUJcXHUxRUJCXFx1MDExQlxcdTAyMDVcXHUwMjA3XFx1MUVCOVxcdTFFQzdcXHUwMjI5XFx1MUUxRFxcdTAxMTlcXHUxRTE5XFx1MUUxQlxcdTAyNDdcXHUwMjVCXFx1MDFERF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY2XFx1MjRENVxcdUZGNDZcXHUxRTFGXFx1MDE5MlxcdUE3N0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2N1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJoXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaHZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDE5NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDY5XFx1MjREOFxcdUZGNDlcXHUwMEVDXFx1MDBFRFxcdTAwRUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHUwMEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwialwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZBXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImtcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QlxcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZEXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiblwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZFXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxcdTAwRjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibmpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZGXFx1MjRERVxcdUZGNEZcXHUwMEYyXFx1MDBGM1xcdTAwRjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx1MDBGNVxcdTFFNERcXHUwMjJEXFx1MUU0RlxcdTAxNERcXHUxRTUxXFx1MUU1M1xcdTAxNEZcXHUwMjJGXFx1MDIzMVxcdTAwRjZcXHUwMjJCXFx1MUVDRlxcdTAxNTFcXHUwMUQyXFx1MDIwRFxcdTAyMEZcXHUwMUExXFx1MUVERFxcdTFFREJcXHUxRUUxXFx1MUVERlxcdTFFRTNcXHUxRUNEXFx1MUVEOVxcdTAxRUJcXHUwMUVEXFx1MDBGOFxcdTAxRkZcXHUwMjU0XFx1QTc0QlxcdUE3NERcXHUwMjc1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvaVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUEzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMjIzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzRGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJwXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3MVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJyXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJzXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzNcXHUyNEUyXFx1RkY1M1xcdTAwREZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ0elwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ1XCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzVcXHUyNEU0XFx1RkY1NVxcdTAwRjlcXHUwMEZBXFx1MDBGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx1MDBGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIndcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3N1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OVxcdTI0RThcXHVGRjU5XFx1MUVGM1xcdTAwRkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx1MDBGRlxcdTFFRjdcXHUxRTk5XFx1MUVGNVxcdTAxQjRcXHUwMjRGXFx1MUVGRl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwielwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDdBXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M10vZyxcclxuICB9LFxyXG5dO1xyXG52YXIgZG9tYWlucyA9IFtcclxuICBcIi5jb21cIixcclxuICBcIi5vcmdcIixcclxuICBcIi5uZXRcIixcclxuICBcIi5hY1wiLFxyXG4gIFwiLmFkXCIsXHJcbiAgXCIuYWVcIixcclxuICBcIi5hZlwiLFxyXG4gIFwiLmFnXCIsXHJcbiAgXCIuYWlcIixcclxuICBcIi5hbFwiLFxyXG4gIFwiLmFtXCIsXHJcbiAgXCIuYW9cIixcclxuICBcIi5hcVwiLFxyXG4gIFwiLmFyXCIsXHJcbiAgXCIuYXNcIixcclxuICBcIi5hdFwiLFxyXG4gIFwiLmF1XCIsXHJcbiAgXCIuYXdcIixcclxuICBcIi5heFwiLFxyXG4gIFwiLmF6XCIsXHJcbiAgXCIuYmFcIixcclxuICBcIi5iYlwiLFxyXG4gIFwiLmJkXCIsXHJcbiAgXCIuYmVcIixcclxuICBcIi5iZlwiLFxyXG4gIFwiLmJnXCIsXHJcbiAgXCIuYmhcIixcclxuICBcIi5iaVwiLFxyXG4gIFwiLmJqXCIsXHJcbiAgXCIuYm1cIixcclxuICBcIi5iblwiLFxyXG4gIFwiLmJvXCIsXHJcbiAgXCIuYnFcIixcclxuICBcIi5iclwiLFxyXG4gIFwiLmJzXCIsXHJcbiAgXCIuYnRcIixcclxuICBcIi5id1wiLFxyXG4gIFwiLmJ5XCIsXHJcbiAgXCIuYnpcIixcclxuICBcIi5jYVwiLFxyXG4gIFwiLmNjXCIsXHJcbiAgXCIuY2RcIixcclxuICBcIi5jZlwiLFxyXG4gIFwiLmNnXCIsXHJcbiAgXCIuY2hcIixcclxuICBcIi5jaVwiLFxyXG4gIFwiLmNrXCIsXHJcbiAgXCIuY2xcIixcclxuICBcIi5jbVwiLFxyXG4gIFwiLmNuXCIsXHJcbiAgXCIuY29cIixcclxuICBcIi5jclwiLFxyXG4gIFwiLmN1XCIsXHJcbiAgXCIuY3ZcIixcclxuICBcIi5jd1wiLFxyXG4gIFwiLmN4XCIsXHJcbiAgXCIuY3lcIixcclxuICBcIi5jelwiLFxyXG4gIFwiLmRlXCIsXHJcbiAgXCIuZGpcIixcclxuICBcIi5ka1wiLFxyXG4gIFwiLmRtXCIsXHJcbiAgXCIuZG9cIixcclxuICBcIi5kelwiLFxyXG4gIFwiLmVjXCIsXHJcbiAgXCIuZWVcIixcclxuICBcIi5lZ1wiLFxyXG4gIFwiLmVoXCIsXHJcbiAgXCIuZXJcIixcclxuICBcIi5lc1wiLFxyXG4gIFwiLmV0XCIsXHJcbiAgXCIuZXVcIixcclxuICBcIi5maVwiLFxyXG4gIFwiLmZqXCIsXHJcbiAgXCIuZmtcIixcclxuICBcIi5mbVwiLFxyXG4gIFwiLmZvXCIsXHJcbiAgXCIuZnJcIixcclxuICBcIi5nYVwiLFxyXG4gIFwiLmdkXCIsXHJcbiAgXCIuZ2VcIixcclxuICBcIi5nZlwiLFxyXG4gIFwiLmdnXCIsXHJcbiAgXCIuZ2hcIixcclxuICBcIi5naVwiLFxyXG4gIFwiLmdsXCIsXHJcbiAgXCIuZ21cIixcclxuICBcIi5nblwiLFxyXG4gIFwiLmdwXCIsXHJcbiAgXCIuZ3FcIixcclxuICBcIi5nclwiLFxyXG4gIFwiLmdzXCIsXHJcbiAgXCIuZ3RcIixcclxuICBcIi5ndVwiLFxyXG4gIFwiLmd3XCIsXHJcbiAgXCIuZ3lcIixcclxuICBcIi5oa1wiLFxyXG4gIFwiLmhtXCIsXHJcbiAgXCIuaG5cIixcclxuICBcIi5oclwiLFxyXG4gIFwiLmh0XCIsXHJcbiAgXCIuaHVcIixcclxuICBcIi5pZFwiLFxyXG4gIFwiLmllXCIsXHJcbiAgXCIuaWxcIixcclxuICBcIi5pbVwiLFxyXG4gIFwiLmluXCIsXHJcbiAgXCIuaW9cIixcclxuICBcIi5pcVwiLFxyXG4gIFwiLmlyXCIsXHJcbiAgXCIuaXNcIixcclxuICBcIi5pdFwiLFxyXG4gIFwiLmplXCIsXHJcbiAgXCIuam1cIixcclxuICBcIi5qb1wiLFxyXG4gIFwiLmpwXCIsXHJcbiAgXCIua2VcIixcclxuICBcIi5rZ1wiLFxyXG4gIFwiLmtoXCIsXHJcbiAgXCIua2lcIixcclxuICBcIi5rbVwiLFxyXG4gIFwiLmtuXCIsXHJcbiAgXCIua3BcIixcclxuICBcIi5rclwiLFxyXG4gIFwiLmt3XCIsXHJcbiAgXCIua3lcIixcclxuICBcIi5relwiLFxyXG4gIFwiLmxhXCIsXHJcbiAgXCIubGJcIixcclxuICBcIi5sY1wiLFxyXG4gIFwiLmxpXCIsXHJcbiAgXCIubGtcIixcclxuICBcIi5sclwiLFxyXG4gIFwiLmxzXCIsXHJcbiAgXCIubHRcIixcclxuICBcIi5sdVwiLFxyXG4gIFwiLmx2XCIsXHJcbiAgXCIubHlcIixcclxuICBcIi5tYVwiLFxyXG4gIFwiLm1jXCIsXHJcbiAgXCIubWRcIixcclxuICBcIi5tZVwiLFxyXG4gIFwiLm1nXCIsXHJcbiAgXCIubWhcIixcclxuICBcIi5ta1wiLFxyXG4gIFwiLm1sXCIsXHJcbiAgXCIubW1cIixcclxuICBcIi5tblwiLFxyXG4gIFwiLm1vXCIsXHJcbiAgXCIubXBcIixcclxuICBcIi5tcVwiLFxyXG4gIFwiLm1yXCIsXHJcbiAgXCIubXNcIixcclxuICBcIi5tdFwiLFxyXG4gIFwiLm11XCIsXHJcbiAgXCIubXZcIixcclxuICBcIi5td1wiLFxyXG4gIFwiLm14XCIsXHJcbiAgXCIubXlcIixcclxuICBcIi5telwiLFxyXG4gIFwiLm5hXCIsXHJcbiAgXCIubmNcIixcclxuICBcIi5uZVwiLFxyXG4gIFwiLm5mXCIsXHJcbiAgXCIubmdcIixcclxuICBcIi5uaVwiLFxyXG4gIFwiLm5sXCIsXHJcbiAgXCIubm9cIixcclxuICBcIi5ucFwiLFxyXG4gIFwiLm5yXCIsXHJcbiAgXCIubnVcIixcclxuICBcIi5uelwiLFxyXG4gIFwiLm9tXCIsXHJcbiAgXCIucGFcIixcclxuICBcIi5wZVwiLFxyXG4gIFwiLnBmXCIsXHJcbiAgXCIucGdcIixcclxuICBcIi5waFwiLFxyXG4gIFwiLnBrXCIsXHJcbiAgXCIucGxcIixcclxuICBcIi5wbVwiLFxyXG4gIFwiLnBuXCIsXHJcbiAgXCIucHJcIixcclxuICBcIi5wc1wiLFxyXG4gIFwiLnB0XCIsXHJcbiAgXCIucHdcIixcclxuICBcIi5weVwiLFxyXG4gIFwiLnFhXCIsXHJcbiAgXCIucmVcIixcclxuICBcIi5yb1wiLFxyXG4gIFwiLnJzXCIsXHJcbiAgXCIucnVcIixcclxuICBcIi5yd1wiLFxyXG4gIFwiLnNhXCIsXHJcbiAgXCIuc2JcIixcclxuICBcIi5zY1wiLFxyXG4gIFwiLnNkXCIsXHJcbiAgXCIuc2VcIixcclxuICBcIi5zZ1wiLFxyXG4gIFwiLnNoXCIsXHJcbiAgXCIuc2lcIixcclxuICBcIi5za1wiLFxyXG4gIFwiLnNsXCIsXHJcbiAgXCIuc21cIixcclxuICBcIi5zblwiLFxyXG4gIFwiLnNvXCIsXHJcbiAgXCIuc3JcIixcclxuICBcIi5zc1wiLFxyXG4gIFwiLnN0XCIsXHJcbiAgXCIuc3VcIixcclxuICBcIi5zdlwiLFxyXG4gIFwiLnN4XCIsXHJcbiAgXCIuc3lcIixcclxuICBcIi5zelwiLFxyXG4gIFwiLnRjXCIsXHJcbiAgXCIudGRcIixcclxuICBcIi50ZlwiLFxyXG4gIFwiLnRnXCIsXHJcbiAgXCIudGhcIixcclxuICBcIi50alwiLFxyXG4gIFwiLnRrXCIsXHJcbiAgXCIudGxcIixcclxuICBcIi50bVwiLFxyXG4gIFwiLnRuXCIsXHJcbiAgXCIudG9cIixcclxuICBcIi50clwiLFxyXG4gIFwiLnR0XCIsXHJcbiAgXCIudHZcIixcclxuICBcIi50d1wiLFxyXG4gIFwiLnR6XCIsXHJcbiAgXCIudWFcIixcclxuICBcIi51Z1wiLFxyXG4gIFwiLnVrXCIsXHJcbiAgXCIudXNcIixcclxuICBcIi51eVwiLFxyXG4gIFwiLnV6XCIsXHJcbiAgXCIudmFcIixcclxuICBcIi52Y1wiLFxyXG4gIFwiLnZlXCIsXHJcbiAgXCIudmdcIixcclxuICBcIi52aVwiLFxyXG4gIFwiLnZuXCIsXHJcbiAgXCIudnVcIixcclxuICBcIi53ZlwiLFxyXG4gIFwiLndzXCIsXHJcbiAgXCIueWVcIixcclxuICBcIi55dFwiLFxyXG4gIFwiLnphXCIsXHJcbiAgXCIuem1cIixcclxuICBcIi56d1wiLFxyXG5dO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlRGlhY3JpdGljc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAucmVkdWNlKChyZXN1bHQsIGxldHRlcikgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzdWx0LnJlcGxhY2UobGV0dGVyLmxldHRlcnMsIGxldHRlci5iYXNlKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgU1BFQ0lBTF9DSEFSQUNURVJTID0gXCJcXFxcXFxcXC8gIT9AIyQlXiYqKClfKzoue30sO1xcXFwtJ2Bg4oCZ4oCYXFxcIlwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFske1NQRUNJQUxfQ0hBUkFDVEVSU31dYCwgXCJnaVwiKSwgXCJcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVBbGxCdXRMZXR0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9Mb3dlckNhc2UoKS5yZW1vdmVEaWFjcml0aWNzKCkucmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMoKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNvbmNlYWxcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZXh0cmEpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChgW14ke1NQRUNJQUxfQ0hBUkFDVEVSU30ke2V4dHJhfV1gLCBcImdpXCIpLCBcIuKBjlwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNhcGl0YWxpemVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc2xpY2UoMSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVIVE1MXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShcIj5cIiwgXCJcXHUyMjdCXCIpLnJlcGxhY2UoXCI8XCIsIFwiXFx1MjI3QVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImFuZ2xlQnJhY2tldHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKFwiPFwiLCBcIiZsdDtcIikucmVwbGFjZShcIj5cIiwgXCImZ3Q7XCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVwbGFjZUFycmF5XCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGZpbmQsIHJlcGxhY2UpIHtcclxuICAgIHZhciByZXBsYWNlU3RyaW5nID0gdGhpcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmluZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICByZXBsYWNlU3RyaW5nID0gcmVwbGFjZVN0cmluZy5yZXBsYWNlKGZpbmRbaV0sIHJlcGxhY2VbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcGxhY2VTdHJpbmc7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJtYXNrVVJMc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2VBcnJheShbXCJodHRwczovL1wiLCBcImh0dHA6Ly9cIl0sIFwibm9wZTovL1wiKS5yZXBsYWNlQXJyYXkoZG9tYWlucywgXCIubm9wZVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VSZWFkYWJsZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwibWFrZVBlcmNlbnRhZ2VcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZGVjaW1hbHMpIHtcclxuICAgIGlmICghZGVjaW1hbHMpIGRlY2ltYWxzID0gMjtcclxuICAgIHJldHVybiBgJHsodGhpcyAqIDEwMCkudG9GaXhlZChkZWNpbWFscyl9JWA7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzb3J0T2JqZWN0ID0gKG9iaiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgbGV0IGFyciA9IFtdO1xyXG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgYXJyLnB1c2goW2tleSwgb2JqW2tleV1dKTtcclxuICB9XHJcbiAgYXJyLnNvcnQoKGEsIGIpID0+IChkaXJlY3Rpb24gPyBhWzFdIC0gYlsxXSA6IGJbMV0gLSBhWzFdKSk7XHJcbiAgbGV0IG9ialNvcnRlZCA9IHt9O1xyXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiAob2JqU29ydGVkW2l0ZW1bMF1dID0gaXRlbVsxXSkpO1xyXG4gIC8vYXJyLnNvcnQoZnVuY3Rpb24oYSwgYikgeyBhLnZhbHVlLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLnZhbHVlLnRvTG93ZXJDYXNlKCkpOyB9KTsgLy91c2UgdGhpcyB0byBzb3J0IGFzIHN0cmluZ3NcclxuICByZXR1cm4gb2JqU29ydGVkOyAvLyByZXR1cm5zIGFycmF5XHJcbn07XHJcbiIsIi8qXHJcbiQgPSBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxudmFyIGJvb3RzdHJhcCA9IHJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxudmFyIGFuZ3VsYXJTYW5pdGl6ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItc2FuaXRpemUnKTtcclxudmFyIGFuZ3VsYXJBbmltYXRlID0gcmVxdWlyZSgnYW5ndWxhci1hbmltYXRlJyk7XHJcbiovXHJcbmFuZ3VsYXIubW9kdWxlKFwiYXBwXCIsIFtcclxuICBcInVpLnJvdXRlclwiLFxyXG4gIFwidWkuYm9vdHN0cmFwXCIsXHJcbiAgXCJuZ0FuaW1hdGVcIixcclxuICBcIm5nU2FuaXRpemVcIixcclxuICBcIm5nRHJhZ0Ryb3BcIixcclxuICBcIm5nVGFnc0lucHV0XCIsXHJcbiAgXCJ2Y1JlY2FwdGNoYVwiLFxyXG4gIFwiY2hhcnQuanNcIixcclxuICBcInRjLmNoYXJ0anNcIixcclxuICBcImluZmluaXRlLXNjcm9sbFwiLFxyXG5dKTtcclxuIiwiYW5ndWxhclxyXG5cdC5tb2R1bGUoJ2FwcCcpXHJcblx0LmNvbmZpZyhmdW5jdGlvbiAoXHJcblx0XHQkc3RhdGVQcm92aWRlcixcclxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlcixcclxuXHRcdCR1cmxTZXJ2aWNlUHJvdmlkZXIsXHJcblx0XHQkbG9jYXRpb25Qcm92aWRlclxyXG5cdCkge1xyXG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2hvbWUnKTtcclxuXHRcdCR1cmxTZXJ2aWNlUHJvdmlkZXIuY29uZmlnLnN0cmljdE1vZGUoZmFsc2UpO1xyXG5cclxuXHRcdCRzdGF0ZVByb3ZpZGVyXHJcblx0XHRcdC5zdGF0ZSgnaG9tZScsIHtcclxuXHRcdFx0XHR1cmw6ICcvaG9tZScsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvaG9tZS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdwb2xpY3knLCB7XHJcblx0XHRcdFx0dXJsOiAnL3BvbGljeScsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvcG9saWN5Lmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3ByaW50Jywge1xyXG5cdFx0XHRcdHVybDogJy9wcmludCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvcHJpbnQuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnZXhwZXJpZW5jZScsIHtcclxuXHRcdFx0XHR1cmw6ICcvZXhwZXJpZW5jZScsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ0V4cGVyaWVuY2VDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9leHBlcmllbmNlLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3NraWxscycsIHtcclxuXHRcdFx0XHR1cmw6ICcvc2tpbGxzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnU2tpbGxzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvc2tpbGxzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ2hvYmJpZXMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2hvYmJpZXMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdIb2JiaWVzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvaG9iYmllcy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdjb250YWN0Jywge1xyXG5cdFx0XHRcdHVybDogJy9jb250YWN0JyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnQ29udGFjdEN0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL2NvbnRhY3QuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnd29ya291dCcsIHtcclxuXHRcdFx0XHR1cmw6ICcvd29ya291dCcsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1dvcmtvdXRDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy93b3Jrb3V0Lmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3Bvc3RzJywge1xyXG5cdFx0XHRcdHVybDogJy9wb3N0cycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1Bvc3RzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvcG9zdHMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgncHJvZmlsZScsIHtcclxuXHRcdFx0XHR1cmw6ICcvcHJvZmlsZScsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1Byb2ZpbGVDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9wcm9maWxlLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ2xpc3RzJywge1xyXG5cdFx0XHRcdHVybDogJy9saXN0cycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ0xpc3RzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdsaXN0cy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdwcmlvcml0aXplJywge1xyXG5cdFx0XHRcdHVybDogJy9wcmlvcml0aXplJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnUHJpb3JpdGl6ZUN0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAncHJpb3JpdGl6ZS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdidWJibGVzJywge1xyXG5cdFx0XHRcdHVybDogJy9idWJibGVzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnQnViYmxlc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnYnViYmxlcy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdhc3Rlcm9pZHMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2FzdGVyb2lkcycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ0FzdGVyb2lkc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnYXN0ZXJvaWRzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ2xlbW1pbmdzJywge1xyXG5cdFx0XHRcdHVybDogJy9sZW1taW5ncycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ0xlbW1pbmdzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdsZW1taW5ncy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdib3RzJywge1xyXG5cdFx0XHRcdHVybDogJy9ib3RzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnVGVuVGhpbmdzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW50aGluZ3MuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgndGVudGhpbmdzJywge1xyXG5cdFx0XHRcdHVybDogJy90ZW50aGluZ3MnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdUZW5UaGluZ3NDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbnRoaW5ncy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCd0ZW50aGluZ3MtYWRtaW4nLCB7XHJcblx0XHRcdFx0dXJsOiAnL3RlbnRoaW5ncy1hZG1pbicsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1RlblRoaW5nc0FkbWluQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW50aGluZ3MtYWRtaW4uaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgndGVudGhpbmdzLWN1cmF0ZScsIHtcclxuXHRcdFx0XHR1cmw6ICcvdGVudGhpbmdzLWN1cmF0ZScsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1RlblRoaW5nc0N1cmF0ZUN0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAndGVudGhpbmdzLWN1cmF0ZS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCd0ZW50aGluZ3MtZ2FtZScsIHtcclxuXHRcdFx0XHR1cmw6ICcvdGVudGhpbmdzLzpnYW1lJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnVGVuVGhpbmdzR2FtZUN0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAndGVudGhpbmdzLWdhbWUuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgncXVpei1nb29nbGUnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2dvb2dsZScsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1F1aXpHb29nbGVDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3F1aXp6ZXMvZ29vZ2xlLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3F1aXotbG9nb3MnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2xvZ29zJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnUXVpekxvZ29zQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdxdWl6emVzL2xvZ29zLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3F1aXotYW5pbWFscycsIHtcclxuXHRcdFx0XHR1cmw6ICcvYW5pbWFscycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1F1aXpBbmltYWxzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdxdWl6emVzL2FuaW1hbHMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgncXVpei1za2VsZXRvbnMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3NrZWxldG9ucycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1F1aXpTa2VsZXRvbnNDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3F1aXp6ZXMvc2tlbGV0b25zLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3F1aXotbW92aWVzJywge1xyXG5cdFx0XHRcdHVybDogJy9tb3ZpZXMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdRdWl6TW92aWVzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdxdWl6emVzL21vdmllcy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdjaGFyYWRlcycsIHtcclxuXHRcdFx0XHR1cmw6ICcvY2hhcmFkZXMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdDaGFyYWRlc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL2NoYXJhZGVzLmh0bWwnLFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHQkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoe1xyXG5cdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRyZXF1aXJlQmFzZTogZmFsc2UsXHJcblx0XHR9KTtcclxuXHR9KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdXZWJTb2NrZXRTdmMnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcclxuICBmdW5jdGlvbiB3ZWJzb2NrZXRIb3N0KCkge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcclxuICAgICAgcmV0dXJuIFwid3NzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIndzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBjb25uZWN0aW9uO1xyXG4gIHZhciBjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQod2Vic29ja2V0SG9zdCgpKTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjb25uZWN0ZWQnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjbG9zZWQuIFJlY29ubmVjdGluZy4uLicpO1xyXG4gICAgICAkdGltZW91dChjb25uZWN0LCAxMDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUgKyBcIiAtIFN0YXRlOiBcIiArIGNvbm5lY3Rpb24ucmVhZHlTdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnd3M6JyArIHBheWxvYWQudG9waWMsIHBheWxvYWQuZGF0YSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc2VuZCA9IGZ1bmN0aW9uICh0b3BpYywgZGF0YSkge1xyXG4gICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh7dG9waWM6IHRvcGljLCBkYXRhOiBkYXRhfSk7XHJcbiAgICBjb25uZWN0aW9uLnNlbmQoanNvbik7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5jb25uZWN0ID0gY29ubmVjdDtcclxuXHJcbn0pLnJ1bihmdW5jdGlvbiAoV2ViU29ja2V0U3ZjKSB7XHJcbiAgV2ViU29ja2V0U3ZjLmNvbm5lY3QoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJBcHBDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgTGFuZ3VhZ2VTdmMsIFVzZXJTdmMpIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiJWNZb3Ugc25lYWt5IGJ1Z2dlciFcIixcclxuICAgIFwiZm9udDogMmVtIHNhbnMtc2VyaWY7IGNvbG9yOiBEb2RnZXJCbHVlOyB0ZXh0LXNoYWRvdzogMnB4IDAgMCAjNDQ0LCAtMnB4IDAgMCAjNDQ0LCAwIDJweCAwICM0NDQsIDAgLTJweCAwICM0NDQsIDFweCAxcHggIzQ0NCwgLTFweCAtMXB4IDAgIzQ0NCwgMXB4IC0xcHggMCAjNDQ0LCAtMXB4IDFweCAwICM0NDQ7XCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiSSdtIGdsYWQgeW91J3JlIGN1cmlvdXMgd2hldGhlciBzb21ldGhpbmcgaXMgcG9wcGluZyB1cCBpbiBoZXJlLiBJJ20gYSBiaXQgb2YgYSBzdGlja2xlciB3aGVuIGl0IGNvbWVzIHRvIG1lc3NhZ2VzIGluIHRoZSBjb25zb2xlIHNvIEkgdHJ5IHRvIG1ha2Ugc3VyZSBvbmx5IHRoaW5ncyBJIHdhbnQgYXJlIHZpc2libGUuIFRoYXQgYmVpbmcgc2FpZCwgaWYgdGhlcmUgaXMgYSBiaWcgZXJyb3IgaGVyZSwgSSB3b3VsZCByZWFsbHkgYXBwcmVjaWF0ZSB5b3UgdGVsbGluZyBtZSBzbyBJIGNhbiBnZXQgcmlkIG9mIGl0IVwiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIlRoZSBjb2RlIGZvciBteSByZXN1bWUgaXMgaG9zdGVkIG9uIEdpdGh1YiBpZiB5b3UgcmVhbGx5IHdhbnQgdG8gZ28gaW50byBhbGwgdGhpcyEgPT4gaHR0cHM6Ly9naXRodWIuY29tL0ZsYW5kZXJzQnVyZ2VyL3Jlc3VtZVwiLFxyXG4gICk7XHJcblxyXG4gIC8qXHJcbiAgICAkKGRvY3VtZW50KS5iaW5kKFwia2V5dXAga2V5ZG93blwiLCBmdW5jdGlvbihlKXtcclxuICAgICAgaWYoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PSA4MCl7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgKi9cclxuXHJcbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5sb2FkaW5nXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuY2hlY2tib3gtbWVudVwiKS5vbihcImNoYW5nZVwiLCBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KFwibGlcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIiwgdGhpcy5jaGVja2VkKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5hbGxvdy1mb2N1c1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnRoZW1lQ291bnRlciA9IDY7XHJcbiAgJHNjb3BlLnRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAkc2NvcGUueWVhciA9ICRzY29wZS50b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICRzY29wZS5yYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcclxuXHJcbiAgJHNjb3BlLmZsaXBUaGVtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5zaG93KCk7XHJcbiAgICAkKFwiLmNvbnRlbnRcIikuaGlkZSgpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgICB9LCA4MDApO1xyXG4gICAgJHNjb3BlLnRoZW1lQ291bnRlciA9ICRzY29wZS50aGVtZUNvdW50ZXIgPCA2ID8gJHNjb3BlLnRoZW1lQ291bnRlciArIDEgOiAoJHNjb3BlLnRoZW1lQ291bnRlciA9IDEpO1xyXG4gIH07XHJcblxyXG4gICQuZ2V0SlNPTihcIi9za2lsbHMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLnNraWxscyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuZW5hYmxlZDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvaG9iYmllcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuaG9iYmllcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9leHBlcmllbmNlLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5qb2JzID0gZGF0YTtcclxuICAgICRzY29wZS5qb2JzLmZvckVhY2goZnVuY3Rpb24gKGpvYikge1xyXG4gICAgICBqb2Iuc3RhcnREYXRlID0gbmV3IERhdGUoam9iLnN0YXJ0RGF0ZSk7XHJcbiAgICAgIGlmIChqb2IuZW5kRGF0ZSkgam9iLmVuZERhdGUgPSBuZXcgRGF0ZShqb2IuZW5kRGF0ZSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2NoYXJhZGVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5jaGFyYWRlcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5nZXRUaW1lU3BhbiA9IGZ1bmN0aW9uIChqb2IpIHtcclxuICAgIHJldHVybiBqb2Iuc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyAoam9iLmVuZERhdGUgPyBcIiAtIFwiICsgam9iLmVuZERhdGUuZ2V0RnVsbFllYXIoKSA6IFwiIC0gVG9kYXlcIik7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmxhbmd1YWdlcyA9IExhbmd1YWdlU3ZjLmxhbmd1YWdlcztcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBMYW5ndWFnZVN2Yy5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5ob3ZlcmRpdiA9IGZ1bmN0aW9uIChlLCBkaXZpZCkge1xyXG4gICAgdmFyIGxlZnQgPSBlLmNsaWVudFggKyBcInB4XCI7XHJcbiAgICB2YXIgdG9wID0gZS5jbGllbnRZICsgMjAgKyBcInB4XCI7XHJcblxyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdmlkKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcImxlZnRcIiwgbGVmdCk7XHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcInRvcFwiLCB0b3ApO1xyXG5cclxuICAgICQoXCIjXCIgKyBkaXZpZCkudG9nZ2xlKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikge1xyXG4gICAgVXNlclN2Yy5sb2dpbih3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGxvZ2luKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuJG9uKFwibG9naW5cIiwgZnVuY3Rpb24gKF8sIHVzZXIpIHtcclxuICAgIGxvZ2luKHVzZXIpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBsb2dpbih1c2VyKSB7XHJcbiAgICBpZiAoISRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIgPSB1c2VyLl9pZDtcclxuICAgICAgJHNjb3BlLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dpblwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICRzY29wZS4kb24oXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKF8sIHVzZXIpIHtcclxuICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlID0gbmV3IERhdGUoJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSk7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkaW5nXCIsIGZ1bmN0aW9uIChfLCB1c2VyKSB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5zaG93KCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkZWRcIiwgZnVuY3Rpb24gKF8sIHVzZXIpIHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIiNsb2FkaW5nLWljb25cIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgIC5hdXRoKClcclxuICAgICAgLnNpZ25PdXQoKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dvdXRcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmZvcm1hdERhdGUgPSBmdW5jdGlvbiAoZGF0ZSkge1xyXG4gICAgdmFyIG1vbnRocyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIHJldHVybiBkYXRlLmdldERhdGUoKSArIFwiLVwiICsgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0gKyBcIi1cIiArIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB9O1xyXG5cclxuICBTdHJpbmcucHJvdG90eXBlLmNhcGl0YWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc2xpY2UoMSk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignQXN0ZXJvaWRzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEdhbWVTdmMpIHtcclxuXHJcbiAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhc3Rlcm9pZHMtcGFnZScpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICBjdHguZm9udCA9IFwiMzBweCBDb21pYyBTYW5zIE1TXCI7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgdmFyIHNob3RzID0ge307XHJcbiAgdmFyIGFzdGVyb2lkcyA9IHt9O1xyXG4gIHZhciBwb3dlcnVwcyA9IHt9O1xyXG4gIHZhciBleHBsb3Npb25zID0ge307XHJcbiAgdmFyIG1hcCA9IHt9O1xyXG4gIHZhciBzcGFjZXBpY3MgPSAxMDtcclxuICB2YXIgc3BhY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFjZXBpY3MpO1xyXG4gIHZhciBwb3dlcnVwVHlwZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdzcGVlZCcsXHJcbiAgICAgIGFubm91bmNlbWVudDogJ01heCBTcGVlZCDih6cnLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogNCxcclxuICAgICAgICBzaXplOiBbMTQsIDM1XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLm1heFNwZWVkICs9IDEwMDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2Nvb2xkb3duJyxcclxuICAgICAgYW5ub3VuY2VtZW50OiAnQ29vbGRvd24g4oepJyxcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDMsXHJcbiAgICAgICAgc2l6ZTogWzE3LCAxN10sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWVcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuY29vbGRvd25UaW1lIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAncmFuZ2UnLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6ICdGaXJpbmcgUmFuZ2Ug4oenJyxcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA0LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzMwLCA4XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnJhbmdlICs9IDU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdzaGllbGQnLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6ICdTaGllbGQnLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDUsXHJcbiAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICBzaXplOiBbMTksIDE5XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnNoaWVsZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdudWtlJyxcclxuICAgICAgYW5ub3VuY2VtZW50OiAnTnVrZScsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICAgIHNpemU6IFsxNSwgMTVdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbihzcGFjZXNoaXApIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bhd25Bc3Rlcm9pZHMoNSk7XHJcbiAgICAgIH1cclxuICAgIH0sLypcclxuICAgICdzaWRlX2Nhbm5vbnMnLFxyXG4gICAgJ2xhc2VyJyxcclxuICAgICdzaGllbGQnLFxyXG4gICAgJ2xpZmUnLFxyXG4gICAgJ21pc3NpbGVzJyxcclxuICAgICdudWtlJ1xyXG4gICAgKi9cclxuICBdO1xyXG4gIHBvd2VydXBUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHBvd2VydXAsIGksIGFycmF5KSB7XHJcbiAgICBhcnJheVtpXS5pbWcuc3JjID0gJ2FzdGVyb2lkcy8nICsgcG93ZXJ1cC5uYW1lICsgJy5wbmcnO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgZXhwbG9zaW9uSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBleHBsb3Npb25JbWFnZS5zcmMgPSAnYXN0ZXJvaWRzL2V4cGxvc2lvbi5wbmcnO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgbWFwW2Uua2V5Q29kZSB8fCBlLndoaWNoXSA9IHRydWU7XHJcbiAgfSx0cnVlKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSBmYWxzZTtcclxuICB9LHRydWUpO1xyXG5cclxuICAkc2NvcGUuaGlnaHNjb3JlID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gZXZhbHVhdGVLZXlzKCkge1xyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgLy9TcGFjZVxyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zaG9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM3XSkge1xyXG4gICAgICAgIC8vTGVmdCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiA9IDM2MDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uIC09IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzldKSB7XHJcbiAgICAgICAgLy9SaWdodCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDM2MCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uICs9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzhdKSB7XHJcbiAgICAgICAgLy9VcCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPD0gc3BhY2VzaGlwLm1heFNwZWVkKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgKz0gNTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzQwXSkge1xyXG4gICAgICAgIC8vRG93biBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgLT0gMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgc3RhcnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU3BhY2VzaGlwKCkge1xyXG4gICAgdGhpcy53aWR0aCA9IDUwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSA1MDtcclxuICAgIHRoaXMuc2hpZWxkID0gZmFsc2U7XHJcbiAgICB0aGlzLnJhbmdlID0gODA7XHJcbiAgICB0aGlzLmNhbm5vbiA9IHtcclxuICAgICAgeDogdGhpcy53aWR0aCAvIDIgLSA0LjUsXHJcbiAgICAgIHk6IHRoaXMuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0ICogMC4wNzgxMjVcclxuICAgIH07XHJcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcclxuICAgIHRoaXMuY29vbGRvd25UaW1lID0gMjA7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW1xyXG4gICAgICBjYW52YXMud2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIsXHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgLyAyXHJcbiAgICBdO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9ICdhc3Rlcm9pZHMvc3BhY2VzaGlwLnBuZyc7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMubWF4U3BlZWQgPSAxMDAwO1xyXG4gICAgdGhpcy5hbmdsZSA9IDA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuXHJcbiAgICB0aGlzLnNob290ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuY29vbGRvd24gPSB0aGlzLmNvb2xkb3duVGltZTtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgc2hvdHNbaWRdID0gbmV3IFNob3QoaWQsIHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuc2hpZWxkKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5hcmModGhpcy5wb3NpdGlvblswXSArIHRoaXMud2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uWzFdICsgdGhpcy5oZWlnaHQgLyAyLCAzMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigzNSwgMjM3LCA4NiwgMC41KVwiO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiKDY2LCAxNjgsIDM2LCAwLjgpXCI7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICB2YXIgYXN0ZXJvaWQgPSBhc3Rlcm9pZHNbaV07XHJcbiAgICAgICAgaWYgKGhpdChhc3Rlcm9pZCwgdGhpcykpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNoaWVsZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBhc3Rlcm9pZC5leHBsb2RlKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2FtZU92ZXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmdsZSA9IHRoaXMucm90YXRpb247XHJcbiAgICAgIGlmICh0aGlzLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgIHRoaXMuY29vbGRvd24tLTtcclxuICAgICAgfVxyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNob3QoaWQsIHNwYWNlc2hpcCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzBdICsgc3BhY2VzaGlwLmNhbm5vbi54ICsgc3BhY2VzaGlwLmNhbm5vbi54ICogTWF0aC5jb3MoKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkgLyAxODApLFxyXG4gICAgICBzcGFjZXNoaXAucG9zaXRpb25bMV0gKyBzcGFjZXNoaXAuY2Fubm9uLnkgKyBzcGFjZXNoaXAuY2Fubm9uLnkgKiBNYXRoLnNpbigoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSAvIDE4MClcclxuICAgIF07XHJcbiAgICB0aGlzLndpZHRoID0gOTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMTU7XHJcbiAgICB0aGlzLmFuZ2xlID0gc3BhY2VzaGlwLmFuZ2xlO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IHNwYWNlc2hpcC5yb3RhdGlvbjtcclxuICAgIHRoaXMuc3BlZWQgPSBzcGFjZXNoaXAuc3BlZWQgKyA1MDA7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gc3BhY2VzaGlwLnJhbmdlO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9ICdhc3Rlcm9pZHMvc2hvdC5wbmcnO1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQXN0ZXJvaWQoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMud2lkdGggPSBNYXRoLnJhbmRvbSgpICogNTAgKyAyMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy53aWR0aDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSBNYXRoLnJhbmRvbSgpICogNiAtIDM7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDMwMCArIDI7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gJ2FzdGVyb2lkcy9hc3Rlcm9pZCcgKyAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNikgKyAxKSArICcucG5nJztcclxuXHJcbiAgICB0aGlzLmV4cGxvZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgZXhwbG9zaW9uc1t0aGlzLmlkXSA9IG5ldyBFeHBsb3Npb24odGhpcyk7XHJcbiAgICAgIHJldHVybiBkZWxldGUgYXN0ZXJvaWRzW3RoaXMuaWRdO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XHJcbiAgICAgIGlmICh0aGlzLnJvdGF0aW9uID4gMzYwKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMucm90YXRpb24gLSAzNjA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5yb3RhdGlvbiA8IDApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMzYwICsgdGhpcy5yb3RhdGlvbjtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgICAgdmFyIHNob3QgPSBzaG90c1tpXTtcclxuICAgICAgICBpZiAoaGl0KHNob3QsIHRoaXMpKSB7XHJcbiAgICAgICAgICB0aGlzLmV4cGxvZGUoKTtcclxuICAgICAgICAgIHZhciBwb2ludHMgPSBNYXRoLmZsb29yKChzaG90LnNwZWVkIC0gNTAwKSAvIDEwICsgNzAgLSB0aGlzLndpZHRoKTtcclxuICAgICAgICAgIGlmIChNYXRoLmZsb29yKChwb2ludHMgKyAkc2NvcGUuc2NvcmUpIC8gMTAwKSA+IE1hdGguZmxvb3IoJHNjb3BlLnNjb3JlIC8gMTAwKSkge1xyXG4gICAgICAgICAgICBzcGF3blBvd2VydXAoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICRzY29wZS5zY29yZSArPSBwb2ludHM7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRXhwbG9zaW9uKG9iamVjdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtvYmplY3QucG9zaXRpb25bMF0sIG9iamVjdC5wb3NpdGlvblsxXV07XHJcbiAgICB0aGlzLndpZHRoID0gb2JqZWN0LndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvYmplY3QuaGVpZ2h0O1xyXG4gICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMuY3ljbGUgPSB7XHJcbiAgICAgIHJvd3M6IDYsXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHNpemU6IFsyNTYsIDI1Nl0sXHJcbiAgICAgIGk6IDAsXHJcbiAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgfTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSA0NztcclxuICAgIHRoaXMuaW1nID0gZXhwbG9zaW9uSW1hZ2U7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBQb3dlcnVwKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvd2VydXAgPSBwb3dlcnVwVHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG93ZXJ1cFR5cGVzLmxlbmd0aCldO1xyXG4gICAgdGhpcy5jeWNsZSA9IHRoaXMucG93ZXJ1cC5jeWNsZTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAxMDAwO1xyXG4gICAgaWYgKHRoaXMuY3ljbGUuc2l6ZVsxXSA+IHRoaXMuY3ljbGUuc2l6ZVswXSkge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IDQwO1xyXG4gICAgICB0aGlzLndpZHRoID0gTWF0aC5yb3VuZCh0aGlzLmhlaWdodCAvIHRoaXMuY3ljbGUuc2l6ZVsxXSAqIHRoaXMuY3ljbGUuc2l6ZVswXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndpZHRoID0gNDA7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5yb3VuZCh0aGlzLndpZHRoIC8gdGhpcy5jeWNsZS5zaXplWzBdICogdGhpcy5jeWNsZS5zaXplWzFdKTtcclxuICAgIH1cclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuaW1nID0gdGhpcy5wb3dlcnVwLmltZztcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAxNTAgKyA1MDtcclxuICAgIHZhciBkZWxheSA9IDU7XHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhpdChzcGFjZXNoaXAsIHRoaXMpKSB7XHJcbiAgICAgICAgJHNjb3BlLmFubm91bmNlID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2VtZW50ID0gdGhpcy5wb3dlcnVwLmFubm91bmNlbWVudDtcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICRzY29wZS5hbm5vdW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHRoaXMucG93ZXJ1cC5hY3RpdmF0ZShzcGFjZXNoaXApO1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAoZGVsYXkgPD0gMCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxheSA9IDU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsYXktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmUob2JqZWN0KSB7XHJcbiAgICAgb2JqZWN0LnBvc2l0aW9uWzBdICs9IG9iamVjdC5zcGVlZCAvIDEwMCAqIE1hdGguY29zKChvYmplY3QuYW5nbGUgLSA5MCkgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICBvYmplY3QucG9zaXRpb25bMV0gKz0gb2JqZWN0LnNwZWVkIC8gMTAwICogTWF0aC5zaW4oKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgIGlmIChvYmplY3QucG9zaXRpb25bMF0gPiBjYW52YXMud2lkdGgpIHtcclxuICAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IC1vYmplY3Qud2lkdGg7XHJcbiAgICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMF0gPCAtb2JqZWN0LndpZHRoKSB7XHJcbiAgICAgICBvYmplY3QucG9zaXRpb25bMF0gPSBjYW52YXMud2lkdGg7XHJcbiAgICAgfVxyXG4gICAgIGlmIChvYmplY3QucG9zaXRpb25bMV0gPiBjYW52YXMuaGVpZ2h0KSB7XHJcbiAgICAgICBvYmplY3QucG9zaXRpb25bMV0gPSAtb2JqZWN0LmhlaWdodDtcclxuICAgICB9IGVsc2UgaWYgKG9iamVjdC5wb3NpdGlvblsxXSA8IC1vYmplY3QuaGVpZ2h0KSB7XHJcbiAgICAgICBvYmplY3QucG9zaXRpb25bMV0gPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgIH1cclxuICAgICBjdHguc2F2ZSgpO1xyXG4gICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV0pO1xyXG4gICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LndpZHRoIC8gMiwgb2JqZWN0LmhlaWdodCAvIDIpO1xyXG4gICAgIGN0eC5yb3RhdGUob2JqZWN0LnJvdGF0aW9uICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgaWYgKG9iamVjdC5jeWNsZSkge1xyXG4gICAgICAgdmFyIGNvbHVtbiA9IG9iamVjdC5jeWNsZS5pICUgb2JqZWN0LmN5Y2xlLmNvbHVtbnM7XHJcbiAgICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcihvYmplY3QuY3ljbGUuaSAvIG9iamVjdC5jeWNsZS5jb2x1bW5zKTtcclxuICAgICAgIGN0eC5kcmF3SW1hZ2Uob2JqZWN0LmltZywgb2JqZWN0LmN5Y2xlLnNpemVbMF0gKiBjb2x1bW4sIG9iamVjdC5jeWNsZS5zaXplWzFdICogcm93LCBvYmplY3QuY3ljbGUuc2l6ZVswXSwgb2JqZWN0LmN5Y2xlLnNpemVbMV0sIC1vYmplY3Qud2lkdGggLyAyLCAtb2JqZWN0LmhlaWdodCAvIDIsIG9iamVjdC53aWR0aCwgb2JqZWN0LmhlaWdodCk7XHJcblxyXG4gICAgICAgaWYgKG9iamVjdC5jeWNsZS5pIDw9IDApIHtcclxuICAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSAwO1xyXG4gICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgIH0gZWxzZSBpZiAob2JqZWN0LmN5Y2xlLmkgPj0gb2JqZWN0LmN5Y2xlLmNvbHVtbnMgKiBvYmplY3QuY3ljbGUucm93cykge1xyXG4gICAgICAgICBvYmplY3QuY3ljbGUuaSA9IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MgLSAxO1xyXG4gICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICB9XHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgIGN0eC5kcmF3SW1hZ2Uob2JqZWN0LmltZywgLW9iamVjdC53aWR0aCAvIDIsIC1vYmplY3QuaGVpZ2h0IC8gMiwgb2JqZWN0LndpZHRoLCBvYmplY3QuaGVpZ2h0KTtcclxuICAgICB9XHJcbiAgICAgY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHZhciBzcGFjZXNoaXA7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIHNwYWNlc2hpcCA9IG5ldyBTcGFjZXNoaXAoKTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgIGF1dG9TcGF3bigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RW50cnlQb3NpdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB2YXIgZ3JpZFggPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciBncmlkWSA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIHgsIHkgPSAwO1xyXG4gICAgaWYgKGdyaWRYID49IDEpIHtcclxuICAgICAgeCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XHJcbiAgICAgIGlmICh5ID49IDEpIHtcclxuICAgICAgICB5ID0gMCAtIGhlaWdodDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeSA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICBpZiAoZ3JpZFkgPj0gMSkge1xyXG4gICAgICAgIHggPSAwIC0gd2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFt4LCB5XTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpdChvYmplY3QxLCBvYmplY3QyKSB7XHJcbiAgICByZXR1cm4gKG9iamVjdDEucG9zaXRpb25bMF0gPCBvYmplY3QyLnBvc2l0aW9uWzBdICsgb2JqZWN0Mi53aWR0aCkgJiZcclxuICAgICAgICAgICAob2JqZWN0Mi5wb3NpdGlvblswXSA8IG9iamVjdDEucG9zaXRpb25bMF0gKyBvYmplY3QxLndpZHRoKSAmJlxyXG4gICAgICAgICAgIChvYmplY3QxLnBvc2l0aW9uWzFdIDwgb2JqZWN0Mi5wb3NpdGlvblsxXSArIG9iamVjdDIuaGVpZ2h0KSAmJlxyXG4gICAgICAgICAgIChvYmplY3QyLnBvc2l0aW9uWzFdIDwgb2JqZWN0MS5wb3NpdGlvblsxXSArIG9iamVjdDEuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGF1dG9TcGF3bigpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhhc3Rlcm9pZHMpLmxlbmd0aCA8IDIwMCkge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH1cclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGF1dG9TcGF3bigpO1xyXG4gICAgICB9LCBzcGF3bkludGVydmFsKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25JbnRlcnZhbCgpIHtcclxuICAgIGlmICgkc2NvcGUuc2NvcmUgPCAxMDAwKSB7XHJcbiAgICAgIHJldHVybiAxMDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCAyMDAwKSB7XHJcbiAgICAgIHJldHVybiA5MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDMwMDApIHtcclxuICAgICAgcmV0dXJuIDgwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNDAwMCkge1xyXG4gICAgICByZXR1cm4gNzAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA1MDAwKSB7XHJcbiAgICAgIHJldHVybiA2MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDYwMDApIHtcclxuICAgICAgcmV0dXJuIDUwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNzAwMCkge1xyXG4gICAgICByZXR1cm4gNDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA4MDAwKSB7XHJcbiAgICAgIHJldHVybiAzMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25Bc3Rlcm9pZHMoYW1vdW50KSB7XHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICBkbyB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIGFzdGVyb2lkc1tpZF0gPSBuZXcgQXN0ZXJvaWQoaWQpO1xyXG4gICAgfSB3aGlsZSAoaSsrIDw9IGFtb3VudCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3blBvd2VydXAoKSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMocG93ZXJ1cHMpLmxlbmd0aCA8IDMpIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgcG93ZXJ1cHNbaWRdID0gbmV3IFBvd2VydXAoaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XHJcbiAgICAkc2NvcGUucGxheWluZyA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgIH1cclxuICAgIHNob3RzID0ge307XHJcbiAgICBpZiAoJHNjb3BlLmxvZ2dlZEluKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuaGlnaHNjb3JlLmFzdGVyb2lkcyA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzID0gJHNjb3BlLnNjb3JlO1xyXG4gICAgICAgIEdhbWVTdmMuc2V0SGlnaHNjb3JlKCdhc3Rlcm9pZHMnLCAkc2NvcGUuY3VycmVudFVzZXIuX2lkLCAkc2NvcGUuc2NvcmUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hzY29yZSA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5oaWdoc2NvcmUgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cdC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG5cdC8vIGRyYXcgY2FudmFzLlxyXG5cclxuXHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuXHJcblx0XHQvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG5cdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0fVxyXG5cdC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuXHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcblx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogMTA1KTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcblxyXG4gIHZhciB0YWxseSA9IDA7XHJcbiAgdmFyIGRpcmVjdGlvbiA9IHRydWU7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgIGlmIChzaG90c1tpXS5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIHNob3RzW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3RzW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIHBvd2VydXBzKSB7XHJcbiAgICAgIHBvd2VydXBzW2ldLm1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBleHBsb3Npb25zKSB7XHJcbiAgICAgIGlmIChleHBsb3Npb25zW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgZXhwbG9zaW9uc1tpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBleHBsb3Npb25zW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZhbHVhdGVLZXlzKCk7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgc3BhY2VzaGlwLm1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBjYW52YXMud2lkdGgsIDApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoJzAnLCAncmdiKCcgKyBNYXRoLmZsb29yKDI1NiAtIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcpJyk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgnMC4yNScsICdyZ2IoJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMjU2IC0gMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJyknKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKCcwLjUnLCAncmdiKCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDI1NiAtIDI1NiAqIHRhbGx5IC8gMTAwKSArICcpJyk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgnMC43NScsICdyZ2IoJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMjU2IC0gMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJyknKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKCcxLjAnLCAncmdiKCcgKyBNYXRoLmZsb29yKDI1NiAtIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcpJyk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgICAgY3R4LmZvbnQ9JzYwcHggTW9ub3Rvbic7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnQXN0ZXJvaWRzJywgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dCgnQXN0ZXJvaWRzJykud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGN0eC5mb250PScyMHB4IEFsZHJpY2gnO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ1ByZXNzIHNwYWNlIHRvIHN0YXJ0JywgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dCgnUHJlc3Mgc3BhY2UgdG8gc3RhcnQnKS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyICsgMjApO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ0Rlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlcicsIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoJ0Rlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlcicpLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAtIDMwKTtcclxuICAgIH1cclxuICAgIHRhbGx5ICs9IGRpcmVjdGlvbiA/IDEgOiAtMTtcclxuICAgIGlmICh0YWxseSA+IDEwMCkge1xyXG4gICAgICB0YWxseSA9IDEwMDtcclxuICAgICAgZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHRhbGx5IDwgMCkge1xyXG4gICAgICB0YWxseSA9IDA7XHJcbiAgICAgIGRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuc3BhY2UgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImFzdGVyb2lkcy9zcGFjZScgKyBzcGFjZSArICcuanBnXCIpJ1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuXHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdCdWJibGVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWJibGVzLXBhZ2UnKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgdmFyIGJ1YmJsZXMgPSBbXTtcclxuICB2YXIgY29sb3JzID0gWycjZmZjMzAwJywnI2ZmNTczMycsJyNjNzAwMzknLCcjOTAwYzNlJywnIzU3MTg0NSddO1xyXG5cclxuICBmdW5jdGlvbiBCdWJibGUoKSB7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gMDtcclxuICAgIHRoaXMucmFkaXVzID0gMTtcclxuICAgIHRoaXMuZXhwYW5kaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgIHRoaXMuY2lyY3VtZmVyZW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDUwKSArIDU7XHJcbiAgICB0aGlzLm1heFJhZGl1cyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDIwMCkgKyAyMDtcclxuICAgIHRoaXMueCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aCk7XHJcbiAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0KTtcclxuICAgIHRoaXMudnggPSAoTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTEpO1xyXG4gICAgdGhpcy52eSA9IChNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgYnViYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGJ1YmJsZSkge1xyXG4gICAgICB2YXIgY29sb3IgPSBjb2xvcnNbTWF0aC5yb3VuZChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKGJ1YmJsZS54LCBidWJibGUueSwgYnViYmxlLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3JzW01hdGgucm91bmQoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1tjb2xvcnMubGVuZ3RoIC0gTWF0aC5yb3VuZChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9IGJ1YmJsZS5jaXJjdW1mZXJlbmNlICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXM7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmlsdGVyQnViYmxlcygpIHtcclxuICAgIGJ1YmJsZXMucHVzaChuZXcgQnViYmxlKCkpO1xyXG4gICAgYnViYmxlcyA9IGJ1YmJsZXMuZmlsdGVyKGZ1bmN0aW9uIChidWJibGUpIHtcclxuICAgICAgaWYgKGJ1YmJsZS5yYWRpdXMgPT09IGJ1YmJsZS5tYXhSYWRpdXMpIHtcclxuICAgICAgICBidWJibGUuZXhwYW5kaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgYnViYmxlLnggKz0gYnViYmxlLnZ4ICogYnViYmxlLnNwZWVkO1xyXG4gICAgICBidWJibGUueSArPSBidWJibGUudnkgKiBidWJibGUuc3BlZWQ7XHJcbiAgICAgIGJ1YmJsZS5yYWRpdXMgKz0gKGJ1YmJsZS5leHBhbmRpbmcgPyAxIDogLTEpO1xyXG4gICAgICByZXR1cm4gYnViYmxlLnJhZGl1cyA+IDA7XHJcbiAgICB9KTtcclxuICAgIGRyYXcoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuXHJcblxyXG5cdChmdW5jdGlvbigpIHtcclxuXHJcblx0XHQvLyBTdGFydCBsaXN0ZW5pbmcgdG8gcmVzaXplIGV2ZW50cyBhbmRcclxuXHRcdC8vIGRyYXcgY2FudmFzLlxyXG5cdFx0aW5pdGlhbGl6ZSgpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHRcdC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcblx0XHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0XHQvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcblx0XHRcdC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcblx0XHRcdHJlc2l6ZUNhbnZhcygpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG5cdFx0Ly8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcblx0XHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRcdGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuXHRcdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDU1IDogMTExKTtcclxuXHRcdH1cclxuXHJcblx0fSkoKTtcclxuXHJcblxyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdDaGFyYWRlc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblx0JHNjb3BlLnNlbGVjdFdvcmQgPSBjYXRlZ29yeSA9PiB7XHJcblx0XHQkc2NvcGUud29yZCA9XHJcblx0XHRcdCRzY29wZS5jaGFyYWRlc1tjYXRlZ29yeV1bXHJcblx0XHRcdFx0TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogJHNjb3BlLmNoYXJhZGVzW2NhdGVnb3J5XS5sZW5ndGgpXHJcblx0XHRcdF07XHJcblx0XHRjb25zb2xlLmxvZygkc2NvcGUud29yZCk7XHJcblx0fTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJDb250YWN0Q3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBFbWFpbFN2Yykge1xyXG4gICRzY29wZS5vcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNwYW1cIixcclxuICAgICAgdGV4dDogXCJJIGFtIGEgc3BhbSBib3QgYW5kIGF1dG9tYXRpY2FsbHkgY2hlY2sgdGhlIGZpcnN0IG9wdGlvbiBJIGZpbmQhXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk9wcG9ydHVuaXR5XCIsXHJcbiAgICAgIHRleHQ6IFwiWW91IHNlZW0gdG8gaGF2ZSB0aGUgc2tpbGxzIEkgc2VlaywgSSdkIGxpa2UgdG8gdGFsayBhYm91dCBzb21lIG9wcG9ydHVuaXRpZXMuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJlc3VtZVwiLFxyXG4gICAgICB0ZXh0OiBcIkkgZGlnIHRoZSByZXN1bWUsIGhvdyBkaWQgeW91IG1ha2UgaXQ/XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk90aGVyXCIsXHJcbiAgICAgIHRleHQ6IFwiU3VtdGluIGVsc2UhXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gICRzY29wZS5jb250YWN0ID0ge1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgICBhYm91dDogXCJcIixcclxuICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUuc2VuZGluZyA9IHRydWU7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XHJcbiAgICBFbWFpbFN2Yy5zZW5kKHtcclxuICAgICAgZW1haWw6ICRzY29wZS5jb250YWN0LmVtYWlsLFxyXG4gICAgICBuYW1lOiAkc2NvcGUuY29udGFjdC5uYW1lLFxyXG4gICAgICBwaG9uZTogJHNjb3BlLmNvbnRhY3QucGhvbmUsXHJcbiAgICAgIGFib3V0OiAkc2NvcGUuY29udGFjdC5hYm91dCxcclxuICAgICAgbWVzc2FnZTogJHNjb3BlLmNvbnRhY3QubWVzc2FnZSxcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5zZW50ID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1MuIHN0YXR1cz0lZCwgdGV4dD0lc1wiLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICRzY29wZS5zZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGQUlMRUQuIGVycm9yPVwiLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0V4cGVyaWVuY2VDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUuZ2V0U2tpbGwgPSBmdW5jdGlvbihza2lsbENvZGUpIHtcclxuICAgIGlmICghJHNjb3BlLnNraWxscykgcmV0dXJuO1xyXG4gICAgcmV0dXJuICRzY29wZS5za2lsbHMuZmluZChmdW5jdGlvbihza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuY29kZSA9PT0gc2tpbGxDb2RlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0hvYmJpZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xyXG5cclxuICAkc2NvcGUuaG9iYnlTZWxlY3RvclZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgJC5nZXRKU09OKCdodHRwczovL3d3dy5yZWRkaXQuY29tL3VzZXIvYmVsZ29jYW5hZGlhbi9hYm91dC8uanNvbicsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkSG9iYnkgPSAkc2NvcGUuaG9iYmllc1swXTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdEhvYmJ5ID0gZnVuY3Rpb24gKGhvYmJ5KSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRIb2JieSA9IGhvYmJ5O1xyXG4gICAgJHNjb3BlLmhvYmJ5U2VsZWN0b3JWaXNpYmxlID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNob3dIb2JieSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICBpZiAoIXZhbHVlLmltYWdlcykgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHZhbHVlLmltYWdlcy5sZW5ndGggPiAwO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xlbW1pbmdzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEdhbWVTdmMpIHtcclxuXHJcbiAgdmFyIExFRlQgPSAwO1xyXG4gIHZhciBSSUdIVCA9IDE7XHJcblxyXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVtbWluZ3MtcGFnZScpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB2YXIgbGVtbWluZ3NJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGxlbW1pbmdzSW1hZ2Uuc3JjID0gJ2xlbW1pbmdzL2xlbW1pbmdzLnBuZyc7XHJcbiAgdmFyIGRlY29ySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBkZWNvckltYWdlLnNyYyA9ICdsZW1taW5ncy9kZWNvci5wbmcnO1xyXG4gIHZhciBsZW1taW5ncyA9IHt9O1xyXG4gIHZhciBzdGFydGVkID0gZmFsc2U7XHJcblxyXG4gIHZhciBhY3Rpb25zID0ge1xyXG4gICAgd2Fsazoge1xyXG4gICAgICBzdGFydDogWzAsIDBdLFxyXG4gICAgICBlbmQ6IFszMjAsIDIwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBodWg6IHtcclxuICAgICAgc3RhcnQ6IFszMjAsIDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDIwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZhbGw6IHtcclxuICAgICAgc3RhcnQ6IFswLCA4MF0sXHJcbiAgICAgIGVuZDogWzE2MCwgMTAwXSxcclxuICAgICAgY29sdW1uczogNCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBmbHk6IHtcclxuICAgICAgc3RhcnQ6IFsxNjAsIDgwXSxcclxuICAgICAgZW5kOiBbNDgwLCAxMTBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHN0b3A6IHtcclxuICAgICAgc3RhcnQ6IFswLCAxMjBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDE0MF0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGNsaW1iOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMTYwXSxcclxuICAgICAgZW5kOiBbNjQwLCAxODVdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBzdGFydDogWzAsIDIwMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMjI1XSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgcHVuY2g6IHtcclxuICAgICAgc3RhcnQ6IFswLCAyNDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDMwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAyLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGRpZzoge1xyXG4gICAgICBzdGFydDogWzAsIDMyMF0sXHJcbiAgICAgIGVuZDogWzMyMCwgMzQ1XSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gTGVtbWluZyhpbml0KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggLSAyMDApKSArIDEwMCwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNhbnZhcy5oZWlnaHQgLSAyMDApKSArIDEwMF07XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAyID4gMSA/IExFRlQgOiBSSUdIVDtcclxuICAgIHRoaXMuYWN0ID0gZnVuY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uc1thY3Rpb25dO1xyXG4gICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgdGhpcy53aWR0aCA9ICh0aGlzLmFjdGlvbi5lbmRbMF0gLSB0aGlzLmFjdGlvbi5zdGFydFswXSkgLyB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICB0aGlzLmhlaWdodCA9ICh0aGlzLmFjdGlvbi5lbmRbMV0gLSB0aGlzLmFjdGlvbi5zdGFydFsxXSAtICgyMCAqICh0aGlzLmFjdGlvbi5yb3dzIC0gMSkpKSAvIHRoaXMuYWN0aW9uLnJvd3M7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICB0aGlzLmFjdChpbml0KTtcclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25bMF0sIHRoaXMucG9zaXRpb25bMV0pO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IExFRlQpIHtcclxuICAgICAgICBjdHguc2NhbGUoLTEsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBjb2x1bW4gPSB0aGlzLmN5Y2xlICUgdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3IodGhpcy5jeWNsZSAvIHRoaXMuYWN0aW9uLmNvbHVtbnMpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKGxlbW1pbmdzSW1hZ2UsICh0aGlzLndpZHRoICogY29sdW1uKSArIHRoaXMuYWN0aW9uLnN0YXJ0WzBdLCAoKHRoaXMuaGVpZ2h0ICsgMjApICogcm93KSArIHRoaXMuYWN0aW9uLnN0YXJ0WzFdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgIGlmICh0aGlzLmFjdGlvbi5yZXZlcnNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgICBpZiAodGhpcy5jeWNsZSA+PSB0aGlzLmFjdGlvbi5jb2x1bW5zICogdGhpcy5hY3Rpb24ucm93cykge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICF0aGlzLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZS0tO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLS07XHJcbiAgICAgICAgICBpZiAodGhpcy5jeWNsZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSAhdGhpcy5hbmltYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPj0gdGhpcy5hY3Rpb24uY29sdW1ucyAqIHRoaXMuYWN0aW9uLnJvd3MpIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEhhdGNoKCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFsyMCwgMjBdO1xyXG4gICAgdGhpcy5hY3Rpb24gPSB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMF0sXHJcbiAgICAgIGVuZDogWzgyLCA1MDBdLFxyXG4gICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICByb3dzOiAxMFxyXG4gICAgfVxyXG4gICAgdGhpcy53aWR0aCA9ICh0aGlzLmFjdGlvbi5lbmRbMF0gLSB0aGlzLmFjdGlvbi5zdGFydFswXSkgLyB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAodGhpcy5hY3Rpb24uZW5kWzFdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMV0pIC8gdGhpcy5hY3Rpb24ucm93cztcclxuICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgdGhpcy5vcGVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSwgdGhpcy5wb3NpdGlvblsxXSk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIHZhciBjb2x1bW4sIHJvdztcclxuICAgICAgaWYgKHN0YXJ0ZWQpIHtcclxuICAgICAgICBjb2x1bW4gPSB0aGlzLmN5Y2xlICUgdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgICByb3cgPSBNYXRoLmZsb29yKHRoaXMuY3ljbGUgLyB0aGlzLmFjdGlvbi5jb2x1bW5zKTtcclxuICAgICAgICBpZiAodGhpcy5jeWNsZSA8IDkpIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29sdW1uID0gMDtcclxuICAgICAgICByb3cgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoZGVjb3JJbWFnZSwgKHRoaXMud2lkdGggKiBjb2x1bW4pICsgdGhpcy5hY3Rpb24uc3RhcnRbMF0sICh0aGlzLmhlaWdodCAqIHJvdykgKyB0aGlzLmFjdGlvbi5zdGFydFsxXSAtIDEsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduTGVtbWluZygpIHtcclxuICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2goZnVuY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgIGxlbW1pbmdzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCldID0gbmV3IExlbW1pbmcoYWN0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcblx0XHQvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuXHRcdC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHRcdC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcblx0XHRyZXNpemVDYW52YXMoKTtcclxuXHR9XHJcblx0Ly8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG5cdC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG5cdC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG5cdGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuXHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTAgOiAxMDUpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG4gIHNwYXduTGVtbWluZygpO1xyXG4gIGxldCBoYXRjaCA9IG5ldyBIYXRjaCgpXHJcbiAgZHJhdygpO1xyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgaWYgKCFzdGFydGVkKSB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmZvbnQ9JzQwcHggTW9ub3Rvbic7XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSAnMTAnO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XHJcbiAgICAgIGN0eC5yZWN0KDE1LCBjYW52YXMuaGVpZ2h0IC0gNDUsIGN0eC5tZWFzdXJlVGV4dCgnU3RhcnQnKS53aWR0aCArIDIwLCBjdHgubWVhc3VyZVRleHQoJ1N0YXJ0JykuaGVpZ2h0ICsgY2FudmFzLmhlaWdodCAtIDQ1KTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LmZpbGxUZXh0KCdTdGFydCcsIDIwLCBjYW52YXMuaGVpZ2h0IC0gNTApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yICh2YXIgaSBpbiBsZW1taW5ncykge1xyXG4gICAgICAgIGxlbW1pbmdzW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGF0Y2gub3BlbigpO1xyXG4gICAgc3RhcnRlZCA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBkcmF3KCk7XHJcbiAgICB9LCAxNTApO1xyXG4gIH1cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignTGlzdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBDYXRlZ29yaWVzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5zaG93Q2F0ZWdvcnkgPSB0cnVlO1xyXG5cclxuICAkc2NvcGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIENhdGVnb3JpZXNTdmMuZ2V0Q2F0ZWdvcmllcygpXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAkc2NvcGUudGFza3MgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuY2F0ZWdvcmllcykge1xyXG4gICAgICAgIGZvciAodmFyIGogaW4gJHNjb3BlLmNhdGVnb3JpZXNbaV0udGFza3MpIHtcclxuICAgICAgICAgICRzY29wZS50YXNrcy5wdXNoKHtcclxuICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiAkc2NvcGUuY2F0ZWdvcmllc1tpXS5uYW1lLFxyXG4gICAgICAgICAgICBcInRhc2tcIjogJHNjb3BlLmNhdGVnb3JpZXNbaV0udGFza3Nbal0ubmFtZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkgPSBmdW5jdGlvbihjYXRlZ29yeSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICRzY29wZS5zZWxlY3RlZFRhc2tzID0gW107XHJcbiAgICAkc2NvcGUuc2VsZWN0YWJsZVRhc2tzID0gW107XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzKSB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RhYmxlVGFza3MucHVzaCgkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuc2hvd0NhdGVnb3J5ID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuZW50ZXJlZENhdGVnb3J5ID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLm5ld0NhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUgPT09IGNhdGVnb3J5KSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5KCRzY29wZS5jYXRlZ29yaWVzW2ldKTtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5hZGRDYXRlZ29yeSh7XHJcbiAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5XHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgJHNjb3BlLmluaXQoKTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICRzY29wZS5lbnRlcmVkQ2F0ZWdvcnkgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUubmV3VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpIHtcclxuICAgICAgaWYgKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldLm5hbWUgPT09IHRhc2spIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdFRhc2soJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS5uYW1lLCB7XHJcbiAgICAgICAgdGFzazogdGFza1xyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcy5wdXNoKHsgbmFtZTogdGFzayB9KTtcclxuICAgICAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MubGVuZ3RoIC0gMV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICRzY29wZS5lbnRlcmVkVGFzayA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5yZW1vdmVUYXNrKCRzY29wZS5zZWxlY3RhYmxlVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLmVudGVyZWRUYXNrID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVuc2VsZWN0VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5yZW1vdmVUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCB0YXNrKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuYWRkVGFzayA9IGZ1bmN0aW9uKHRhc2tMaXN0LCB0YXNrKSB7XHJcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2spO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5yZW1vdmVUYXNrID0gZnVuY3Rpb24odGFza0xpc3QsIHRhc2spIHtcclxuICAgIHRhc2tMaXN0LnNwbGljZSh0YXNrTGlzdC5pbmRleE9mKHRhc2spLCAxKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc3RhcnRQcmlvcml0aXppbmcgPSBmdW5jdGlvbigpIHtcclxuICAgIENhdGVnb3JpZXNTdmMuc2V0UHJpb3JpdHlMaXN0KCRzY29wZS5zZWxlY3RlZFRhc2tzKTtcclxuICAgICRsb2NhdGlvbi5wYXRoKCcvcHJpb3JpdGl6ZScpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRRdWVzdGlvbnMgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghJHNjb3BlLnNlbGVjdGVkVGFza3MpIHJldHVybiAnJztcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAkc2NvcGUuc2VsZWN0ZWRUYXNrcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgIGNvdW50ZXIgKz0gaTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb3VudGVyO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG4gIC8vIEluaXRpYWxpemUgdGhlIEZpcmViYXNlVUkgV2lkZ2V0IHVzaW5nIEZpcmViYXNlLlxyXG4gIHZhciB1aSA9IG5ldyBmaXJlYmFzZXVpLmF1dGguQXV0aFVJKGZpcmViYXNlLmF1dGgoKSk7XHJcblxyXG4gICRzY29wZS4kb24oJ2xvZ291dCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdWkucmVzZXQoKTtcclxuICAgIHN0YXJ0VUkoKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRVSSgpIHtcclxuICAgIHVpLnN0YXJ0KCcjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lcicsIHtcclxuICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgc2lnbkluU3VjY2VzczogZnVuY3Rpb24gKGN1cnJlbnRVc2VyLCBjcmVkZW50aWFsLCByZWRpcmVjdFVybCkge1xyXG4gICAgICAgICAgLy8gTm8gcmVkaXJlY3QuXHJcbiAgICAgICAgICBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuYXV0aCgpXHJcbiAgICAgICAgICAgIC5jdXJyZW50VXNlci5nZXRJZFRva2VuKHRydWUpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChpZFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgVXNlclN2Yy5hdXRoZW50aWNhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGN1cnJlbnRVc2VyLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IGN1cnJlbnRVc2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGhvdG9VUkw6IGN1cnJlbnRVc2VyLnBob3RvVVJMLFxyXG4gICAgICAgICAgICAgICAgZW1haWxWZXJpZmllZDogY3VycmVudFVzZXIuZW1haWxWZXJpZmllZCxcclxuICAgICAgICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW4sXHJcbiAgICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNtb2RhbC1sb2dpbicpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgIC8vJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdCgncG9wdXAnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0xvZ2luIEZhaWxlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FsZXJ0LWRhbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gc2lnbkluRmFpbHVyZSBjYWxsYmFjayBtdXN0IGJlIHByb3ZpZGVkIHRvIGhhbmRsZSBtZXJnZSBjb25mbGljdHMgd2hpY2hcclxuICAgICAgICAvLyBvY2N1ciB3aGVuIGFuIGV4aXN0aW5nIGNyZWRlbnRpYWwgaXMgbGlua2VkIHRvIGFuIGFub255bW91cyB1c2VyLlxyXG4gICAgICAgIHNpZ25JbkZhaWx1cmU6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgLy8gRm9yIG1lcmdlIGNvbmZsaWN0cywgdGhlIGVycm9yLmNvZGUgd2lsbCBiZVxyXG4gICAgICAgICAgLy8gJ2ZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3QnLlxyXG4gICAgICAgICAgaWYgKGVycm9yLmNvZGUgIT0gJ2ZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFRoZSBjcmVkZW50aWFsIHRoZSB1c2VyIHRyaWVkIHRvIHNpZ24gaW4gd2l0aC5cclxuICAgICAgICAgIHZhciBjcmVkID0gZXJyb3IuY3JlZGVudGlhbDtcclxuICAgICAgICAgIC8vIENvcHkgZGF0YSBmcm9tIGFub255bW91cyB1c2VyIHRvIHBlcm1hbmVudCB1c2VyIGFuZCBkZWxldGUgYW5vbnltb3VzXHJcbiAgICAgICAgICAvLyB1c2VyLlxyXG4gICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAvLyBGaW5pc2ggc2lnbi1pbiBhZnRlciBkYXRhIGlzIGNvcGllZC5cclxuICAgICAgICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aENyZWRlbnRpYWwoY3JlZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1aVNob3duOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvLyBUaGUgd2lkZ2V0IGlzIHJlbmRlcmVkLlxyXG4gICAgICAgICAgLy8gSGlkZSB0aGUgbG9hZGVyLlxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2lnbkluU3VjY2Vzc1VybDogJy9ob21lJyxcclxuICAgICAgc2lnbkluT3B0aW9uczogW1xyXG4gICAgICAgIC8vZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICBdLFxyXG5cclxuICAgICAgLy8gV2lsbCB1c2UgcG9wdXAgZm9yIElEUCBQcm92aWRlcnMgc2lnbi1pbiBmbG93IGluc3RlYWQgb2YgdGhlIGRlZmF1bHQsIHJlZGlyZWN0LlxyXG4gICAgICBzaWduSW5GbG93OiAncG9wdXAnLFxyXG4gICAgICAvLyBPdGhlciBjb25maWcgb3B0aW9ucy4uLlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGFydFVJKCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRmaWx0ZXIsIFBvc3RzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5hZGRQb3N0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCRzY29wZS5wb3N0Qm9keSkge1xyXG4gICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xyXG4gICAgICAgIGJvZHk6ICRzY29wZS5wb3N0Qm9keVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUG9zdHNTdmMuZmV0Y2goKVxyXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLnBvc3RzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbignd3M6bmV3X3Bvc3QnLCBmdW5jdGlvbiAoXywgcG9zdCkge1xyXG4gICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIFBvc3RzU3ZjLmdldFBvc3QocG9zdClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RzLnVuc2hpZnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdQcmlvcml0aXplQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgQ2F0ZWdvcmllc1N2Yykge1xyXG5cclxuICAkc2NvcGUucHJpb3JpdHlMaXN0ID0gQ2F0ZWdvcmllc1N2Yy5nZXRQcmlvcml0eUxpc3QoKTtcclxuXHJcbiAgaWYgKCEkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAkbG9jYXRpb24ucGF0aCgnL2xpc3RzJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uID0gMTtcclxuICAgICRzY29wZS5jdXJyZW50UXVlc3Rpb24gPSAxO1xyXG4gICAgJHNjb3BlLmRvbmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gICRzY29wZS5tYWtlQ2hvaWNlID0gZnVuY3Rpb24oY2hvaWNlKSB7XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uaWQgPT09ICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgPSBjaG9pY2UgPT09IDEgPyAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmZpcnN0Q2hvaWNlIDogJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5zZWNvbmRDaG9pY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbiA9PT0gJHNjb3BlLmN1cnJlbnRRdWVzdGlvbikge1xyXG4gICAgICAkc2NvcGUuY3VycmVudFF1ZXN0aW9uID0gJHNjb3BlLmN1cnJlbnRRdWVzdGlvbiA9PT0gJHNjb3BlLnByaW9yaXR5TGlzdC5sZW5ndGggPyAxIDogJHNjb3BlLmN1cnJlbnRRdWVzdGlvbiArIDE7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbiA9ICRzY29wZS5jdXJyZW50UXVlc3Rpb247XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAoaSBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA9PT0gJycpIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgJCgnI3ByaW9yaXRpemVDaG9pY2VzJykuaGlkZSgzMDApO1xyXG4gICAgICAkc2NvcGUuZG9uZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldEJ1dHRvblZhbHVlID0gZnVuY3Rpb24oY2hvaWNlKSB7XHJcbiAgICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUucHJpb3JpdHlMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmlkID09PSAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbikge1xyXG4gICAgICAgIHJldHVybiBjaG9pY2UgPT09IDEgPyAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmZpcnN0Q2hvaWNlIDogJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5zZWNvbmRDaG9pY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0UXVlc3Rpb24gPSBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24gPSBxdWVzdGlvbjtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0RmlsdGVyZWRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJHNjb3BlLnByaW9yaXR5TGlzdFxyXG4gICAgICAuc29ydChmdW5jdGlvbihhLCBiKXsgcmV0dXJuIGEuaWQtYi5pZDsgfSlcclxuICAgICAgLmZpbHRlcihmdW5jdGlvbihxdWVzdGlvbikgeyByZXR1cm4gcXVlc3Rpb24uY2hvaWNlICE9PSAnJyB8fCBxdWVzdGlvbi5pZCA9PT0gJHNjb3BlLmN1cnJlbnRRdWVzdGlvbjsgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldENob2ljZXNNYWRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgdmFyIGNob2ljZXNNYWRlID0gMDtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgIT09ICcnKSB7XHJcbiAgICAgICAgY2hvaWNlc01hZGUrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNob2ljZXNNYWRlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRCdXR0b25DbGFzcyA9IGZ1bmN0aW9uKGNob2ljZSkge1xyXG4gICAgaWYgKCEkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5pZCA9PT0gJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24pIHtcclxuICAgICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgPT09ICcnKSB7XHJcbiAgICAgICAgICByZXR1cm4gJ2J0bi1wcmltYXJ5JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNob2ljZSA9PT0gMSkge1xyXG4gICAgICAgICAgcmV0dXJuICRzY29wZS5wcmlvcml0eUxpc3RbaV0uZmlyc3RDaG9pY2UgPT09ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlID8gJ2J0bi1zdWNjZXNzJyA6ICdidG4tZGFuZ2VyJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICRzY29wZS5wcmlvcml0eUxpc3RbaV0uc2Vjb25kQ2hvaWNlID09PSAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA/ICdidG4tc3VjY2VzcycgOiAnYnRuLWRhbmdlcic7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNob3dDaG9pY2VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcjcHJpb3JpdGl6ZUNob2ljZXMnKS5zaG93KDEwMDApO1xyXG4gICAgJCgnI3Jldmlld0Nob2ljZXMnKS5oaWRlKCk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYXJ0Q2xpY2sgPSBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICBpZiAoICRzY29wZS5jaGFydCApIHtcclxuICAgICAgLy8gRGlmZmVyZW50IG1ldGhvZHMgZGVwZW5kaW5nIG9uIGNoYXJ0IHR5cGVcclxuICAgICAgLy9jb25zb2xlLmxvZyggJHNjb3BlLmNoYXJ0LmdldFBvaW50c0F0RXZlbnQoIGV2ZW50ICkgKTsgLy8gZm9yIFBvaW50c1xyXG4gICAgICBjb25zb2xlLmxvZyggJHNjb3BlLmNoYXJ0LmdldFNlZ21lbnRzQXRFdmVudCggZXZlbnQgKSApOyAvLyBmb3IgU2VnbWVudHNcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd1Jlc3VsdHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAkc2NvcGUuZGF0YSA9IFtdO1xyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgIC8vIFNldHMgdGhlIGNoYXJ0IHRvIGJlIHJlc3BvbnNpdmVcclxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuXHJcbiAgICAgIC8vQm9vbGVhbiAtIFdoZXRoZXIgd2Ugc2hvdWxkIHNob3cgYSBzdHJva2Ugb24gZWFjaCBzZWdtZW50XHJcbiAgICAgIHNlZ21lbnRTaG93U3Ryb2tlIDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vU3RyaW5nIC0gVGhlIGNvbG91ciBvZiBlYWNoIHNlZ21lbnQgc3Ryb2tlXHJcbiAgICAgIHNlZ21lbnRTdHJva2VDb2xvciA6ICcjZmZmJyxcclxuXHJcbiAgICAgIC8vTnVtYmVyIC0gVGhlIHdpZHRoIG9mIGVhY2ggc2VnbWVudCBzdHJva2VcclxuICAgICAgc2VnbWVudFN0cm9rZVdpZHRoIDogMixcclxuXHJcbiAgICAgIC8vTnVtYmVyIC0gVGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGNoYXJ0IHRoYXQgd2UgY3V0IG91dCBvZiB0aGUgbWlkZGxlXHJcbiAgICAgIHBlcmNlbnRhZ2VJbm5lckN1dG91dCA6IDAsIC8vIFRoaXMgaXMgMCBmb3IgUGllIGNoYXJ0c1xyXG5cclxuICAgICAgLy9OdW1iZXIgLSBBbW91bnQgb2YgYW5pbWF0aW9uIHN0ZXBzXHJcbiAgICAgIGFuaW1hdGlvblN0ZXBzIDogMTAwLFxyXG5cclxuICAgICAgLy9TdHJpbmcgLSBBbmltYXRpb24gZWFzaW5nIGVmZmVjdFxyXG4gICAgICBhbmltYXRpb25FYXNpbmcgOiAnZWFzZU91dEJvdW5jZScsXHJcblxyXG4gICAgICAvL0Jvb2xlYW4gLSBXaGV0aGVyIHdlIGFuaW1hdGUgdGhlIHJvdGF0aW9uIG9mIHRoZSBEb3VnaG51dFxyXG4gICAgICBhbmltYXRlUm90YXRlIDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vQm9vbGVhbiAtIFdoZXRoZXIgd2UgYW5pbWF0ZSBzY2FsaW5nIHRoZSBEb3VnaG51dCBmcm9tIHRoZSBjZW50cmVcclxuICAgICAgYW5pbWF0ZVNjYWxlIDogZmFsc2UsXHJcblxyXG4gICAgICAvL1N0cmluZyAtIEEgbGVnZW5kIHRlbXBsYXRlXHJcbiAgICAgIGxlZ2VuZFRlbXBsYXRlIDogJzxoMyBjbGFzcz1cInRjLWNoYXJ0LWpzLWxlZ2VuZFwiIHN0eWxlPVwicGFkZGluZzo1cHhcIj48JSBmb3IgKHZhciBpPTA7IGk8c2VnbWVudHMubGVuZ3RoOyBpKyspeyU+PGRpdiBjbGFzcz1cImxhYmVsXCIgc3R5bGU9XCJmbG9hdDpsZWZ0O21hcmdpbjo1cHg7YmFja2dyb3VuZC1jb2xvcjo8JT1zZWdtZW50c1tpXS5maWxsQ29sb3IlPlwiPjwlaWYoc2VnbWVudHNbaV0ubGFiZWwpeyU+PCU9c2VnbWVudHNbaV0ubGFiZWwlPjwlfSU+PC9kaXY+PCV9JT48L2gzPidcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBpIGluIENhdGVnb3JpZXNTdmMuY2hvaWNlcykge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0udm90ZXMgPSAwO1xyXG4gICAgICBmb3IgKHZhciBqIGluICRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgICBpZiAoQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLm5hbWUgPT09ICRzY29wZS5wcmlvcml0eUxpc3Rbal0uY2hvaWNlKSB7XHJcbiAgICAgICAgICBDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0udm90ZXMrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIENhdGVnb3JpZXNTdmMuY2hvaWNlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEudm90ZXMgPCBiLnZvdGVzOyB9KTtcclxuICAgIGZvciAoaSBpbiBDYXRlZ29yaWVzU3ZjLmNob2ljZXMpIHtcclxuICAgICAgJHNjb3BlLmRhdGEucHVzaCh7XHJcbiAgICAgICAgdmFsdWU6IENhdGVnb3JpZXNTdmMuY2hvaWNlc1tpXS52b3RlcyxcclxuICAgICAgICBsYWJlbDogQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLm5hbWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkKCcjcHJpb3JpdGl6ZVJlc3VsdCcpLmhpZGUoKTtcclxuICAgICQoJyNwcmlvcml0aXplQ2hvaWNlcycpLmhpZGUoKTtcclxuICAgICQoJyNwcmlvcml0eVJlc3VsdHMnKS5zaG93KDEwMDApO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdQcm9maWxlQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG5cclxuICBpZiAoISRzY29wZS5jdXJyZW50VXNlcikge1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnI3NleC1pbmRpY2F0b3InKS5vZmZzZXQoeyBsZWZ0OiAoJHNjb3BlLmN1cnJlbnRVc2VyLmdlbmRlci5zZXggLyAyMDAgKiAkKCcjc2V4Jykud2lkdGgoKSkgKyAkKCcjc2V4Jykub2Zmc2V0KCkubGVmdCB9KTtcclxuICAgICQoJyNpZGVudGl0eS1pbmRpY2F0b3InKS5vZmZzZXQoeyBsZWZ0OiAoJHNjb3BlLmN1cnJlbnRVc2VyLmdlbmRlci5pZGVudGl0eSAvIDIwMCAqICQoJyNpZGVudGl0eScpLndpZHRoKCkpICsgJCgnI2lkZW50aXR5Jykub2Zmc2V0KCkubGVmdCB9KTtcclxuICB9XHJcblxyXG4gICRzY29wZS5zZXhlcyA9IFtcclxuICAgICdNYWxlJyxcclxuICAgICdGdE0gTWFsZScsXHJcbiAgICAnSW50ZXJzZXgnLFxyXG4gICAgJ010RiBGZW1hbGUnLFxyXG4gICAgJ0ZlbWFsZSdcclxuICBdO1xyXG4gICRzY29wZS5pZGVudGl0aWVzID0gW1xyXG4gICAgJ01hbicsXHJcbiAgICAnQmlnZW5kZXInLFxyXG4gICAgJ1BhbmdlbmRlcicsXHJcbiAgICAnQWdlbmRlcicsXHJcbiAgICAnUG9seWdlbmRlcicsXHJcbiAgICAnR2VuZGVyZmx1aWQnLFxyXG4gICAgJ0dlbmRlcnF1ZWVyJyxcclxuICAgICdRdWVlcicsXHJcbiAgICAnV29tYW4nXHJcbiAgXTtcclxuXHJcbiAgJHNjb3BlLmRhdGVPcHRpb25zID0ge1xyXG4gICAgbWF4RGF0ZTogbmV3IERhdGUoKSxcclxuICAgIG1pbkRhdGU6IG5ldyBEYXRlKDE5MDAsIDEsIDEpLFxyXG4gICAgaW5pdERhdGU6IG5ldyBEYXRlKDIwMDAsIDEsIDEpLFxyXG4gICAgZGF0ZXBpY2tlck1vZGU6ICd5ZWFyJ1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZW5kZXIgPSBmdW5jdGlvbihhcnJheSwgcGVyY2VudGFnZSkge1xyXG4gICAgcmV0dXJuIGFycmF5W01hdGgucm91bmQocGVyY2VudGFnZSAvIDIwMCAqIChhcnJheS5sZW5ndGggLSAxKSldO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zdGFydFNsaWRlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICB9O1xyXG4gICRzY29wZS5kcmFnU2xpZGVyID0gZnVuY3Rpb24oZXZlbnQsIHVpLCB0eXBlKSB7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIuZ2VuZGVyW3R5cGVdID0gTWF0aC5yb3VuZCgoJCgnIycgKyB0eXBlICsgJy1pbmRpY2F0b3InKS5vZmZzZXQoKS5sZWZ0IC0gJCgnIycgKyB0eXBlKS5vZmZzZXQoKS5sZWZ0KSAvICgkKCcjJyArIHR5cGUpLndpZHRoKCkgLSAkKCcjJyArIHR5cGUgKyAnLWluZGljYXRvcicpLndpZHRoKCkpICogMjAwKTtcclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICB9O1xyXG4gICRzY29wZS5zdG9wU2xpZGVyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIH07XHJcblxyXG4gICRzY29wZS51c2VybmFtZVRvZ2dsZSA9IHRydWU7XHJcbiAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gdHJ1ZTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVVzZXJuYW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSAhJHNjb3BlLnVzZXJuYW1lVG9nZ2xlO1xyXG4gICAgJHNjb3BlLm5ld1VzZXJuYW1lID0gJHNjb3BlLmN1cnJlbnRVc2VyLnVzZXJuYW1lO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS50b2dnbGVQYXNzd29yZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgJHNjb3BlLm5ld1Bhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5jb25maXJtUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gISRzY29wZS5wYXNzd29yZFRvZ2dsZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uIChwYXNzd29yZCkge1xyXG4gICAgaWYgKHBhc3N3b3JkKSB7XHJcbiAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgVXNlclN2Yy5jaGVja1Bhc3N3b3JkKHVzZXIsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvcmlnaW5hbEJnID0gJChcIi5wYXNzd29yZFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIik7XHJcbiAgICAgICAgJChcIi5wYXNzd29yZFwiKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNGRkI2QzFcIiB9LCAyMDApLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG9yaWdpbmFsQmcgfSwgMjAwKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVBhc3N3b3JkID0gZnVuY3Rpb24gKG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCwgY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICBpZiAobmV3UGFzc3dvcmQpIHtcclxuICAgICAgaWYgKG5ld1Bhc3N3b3JkID09IGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgICBVc2VyU3ZjLmNoYW5nZVBhc3N3b3JkKHVzZXIsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZClcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICRzY29wZS4kZW1pdCgncG9wdXAnLCB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCBDaGFuZ2VkJyxcclxuICAgICAgICAgICAgdHlwZTogJ2FsZXJ0LXN1Y2Nlc3MnXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICRzY29wZS5vbGRQYXNzd29yZCA9IG51bGw7XHJcbiAgICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkc2NvcGUuJGVtaXQoJ3BvcHVwJywge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGFzc3dvcmQgQ2hhbmdlIEZhaWxlZCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdhbGVydC1kYW5nZXInXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgb3JpZ2luYWxCZyA9ICQoXCIucGFzc3dvcmRcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIpO1xyXG4gICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlVXNlcm5hbWUgPSBmdW5jdGlvbiAodXNlcm5hbWUpIHtcclxuICAgICRzY29wZS4kZW1pdCgnbG9hZGluZycpO1xyXG4gICAgVXNlclN2Yy5jaGFuZ2VVc2VybmFtZSgkc2NvcGUuY3VycmVudFVzZXIuX2lkLCB1c2VybmFtZSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAkc2NvcGUuJGVtaXQoJ3VwZGF0ZScsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgJHNjb3BlLiRlbWl0KCdwb3B1cCcsIHtcclxuICAgICAgICBtZXNzYWdlOiB1c2VybmFtZSArICcgYWxyZWFkeSBpbiB1c2UnLFxyXG4gICAgICAgIHR5cGU6ICdhbGVydC1kYW5nZXInXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyKSB7ICBcclxuICAgICAgJHNjb3BlLiRlbWl0KCdsb2FkaW5nJyk7XHJcbiAgICAgIFVzZXJTdmMudXBkYXRlVXNlcigkc2NvcGUuY3VycmVudFVzZXIpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS4kZW1pdCgndXBkYXRlJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICAkc2NvcGUuJHdhdGNoKCdjdXJyZW50VXNlci5mbGFncy5sZW5ndGgnLCBmdW5jdGlvbihsZW5ndGgpIHtcclxuICAgICRzY29wZS51cGRhdGVVc2VyKCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5sb2FkQ291bnRyaWVzID0gZnVuY3Rpb24oJHF1ZXJ5KSB7XHJcbiAgICB2YXIgY291bnRyaWVzID0gW1xyXG4gICAgICB7IFwibmFtZVwiOiBcIkFuZG9ycmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hZFwiLCBcInRpZGJpdFwiOiBcIlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1hZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQWZnaGFuaXN0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1hZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLCBcImZsYWdcIjogXCJmbGFnLWFnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbmd1aWxsYVwiLCBcImZsYWdcIjogXCJmbGFnLWFpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbGJhbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctYWxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFybWVuaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQW5nb2xhXCIsIFwiZmxhZ1wiOiBcImZsYWctYW9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFudGFyY3RpY2FcIiwgXCJmbGFnXCI6IFwiZmxhZy1hcVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQXJnZW50aW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctYXJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFtZXJpY2FuIFNvbW9hXCIsIFwiZmxhZ1wiOiBcImZsYWctYXNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkF1c3RyaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hdFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQXVzdHJhbGlhXCIsIFwiZmxhZ1wiOiBcImZsYWctYXVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFydWJhXCIsIFwiZmxhZ1wiOiBcImZsYWctYXdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIsOFbGFuZCBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctYXhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkF6ZXJiYWlqYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1helwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBcImZsYWdcIjogXCJmbGFnLWJhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCYXJiYWRvc1wiLCBcImZsYWdcIjogXCJmbGFnLWJiXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCYW5nbGFkZXNoXCIsIFwiZmxhZ1wiOiBcImZsYWctYmRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJlbGdpdW1cIiwgXCJmbGFnXCI6IFwiZmxhZy1iZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQnVya2luYSBGYXNvXCIsIFwiZmxhZ1wiOiBcImZsYWctYmZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJ1bGdhcmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctYmdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJhaHJhaW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1iaFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQnVydW5kaVwiLCBcImZsYWdcIjogXCJmbGFnLWJpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCZW5pblwiLCBcImZsYWdcIjogXCJmbGFnLWJqXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBCYXJ0aMOpbGVteVwiLCBcImZsYWdcIjogXCJmbGFnLWJsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCZXJtdWRhXCIsIFwiZmxhZ1wiOiBcImZsYWctYm1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJydW5laSBcIiwgXCJmbGFnXCI6IFwiZmxhZy1iblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQm9saXZpYSwgUGx1cmluYXRpb25hbCBTdGF0ZSBvZlwiLCBcImZsYWdcIjogXCJmbGFnLWJvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYVwiLCBcImZsYWdcIjogXCJmbGFnLWJxXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCcmF6aWxcIiwgXCJmbGFnXCI6IFwiZmxhZy1iclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmFoYW1hc1wiLCBcImZsYWdcIjogXCJmbGFnLWJzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCaHV0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1idFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQm91dmV0IElzbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWJ2XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCb3Rzd2FuYVwiLCBcImZsYWdcIjogXCJmbGFnLWJ3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCZWxhcnVzXCIsIFwiZmxhZ1wiOiBcImZsYWctYnlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJlbGl6ZVwiLCBcImZsYWdcIjogXCJmbGFnLWJ6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDYW5hZGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1jYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1jY1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29uZ28sIHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZVwiLCBcImZsYWdcIjogXCJmbGFnLWNkXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIiwgXCJmbGFnXCI6IFwiZmxhZy1jZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29uZ29cIiwgXCJmbGFnXCI6IFwiZmxhZy1jZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3dpdHplcmxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1jaFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ8O0dGUgZCdJdm9pcmVcIiwgXCJmbGFnXCI6IFwiZmxhZy1jaVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29vayBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctY2tcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNoaWxlXCIsIFwiZmxhZ1wiOiBcImZsYWctY2xcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNhbWVyb29uXCIsIFwiZmxhZ1wiOiBcImZsYWctY21cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNoaW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctY25cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNvbG9tYmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctY29cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNvc3RhIFJpY2FcIiwgXCJmbGFnXCI6IFwiZmxhZy1jclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ3ViYVwiLCBcImZsYWdcIjogXCJmbGFnLWN1XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDYWJvIFZlcmRlXCIsIFwiZmxhZ1wiOiBcImZsYWctY3ZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkN1cmHDp2FvXCIsIFwiZmxhZ1wiOiBcImZsYWctY3dcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNocmlzdG1hcyBJc2xhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1jeFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ3lwcnVzXCIsIFwiZmxhZ1wiOiBcImZsYWctY3lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkN6ZWNoIFJlcHVibGljXCIsIFwiZmxhZ1wiOiBcImZsYWctY3pcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdlcm1hbnlcIiwgXCJmbGFnXCI6IFwiZmxhZy1kZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRGppYm91dGlcIiwgXCJmbGFnXCI6IFwiZmxhZy1kalwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRGVubWFya1wiLCBcImZsYWdcIjogXCJmbGFnLWRrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJEb21pbmljYVwiLCBcImZsYWdcIjogXCJmbGFnLWRtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJEb21pbmljYW4gUmVwdWJsaWNcIiwgXCJmbGFnXCI6IFwiZmxhZy1kb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQWxnZXJpYVwiLCBcImZsYWdcIjogXCJmbGFnLWR6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJFY3VhZG9yXCIsIFwiZmxhZ1wiOiBcImZsYWctZWNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkVzdG9uaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1lZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRWd5cHRcIiwgXCJmbGFnXCI6IFwiZmxhZy1lZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiV2VzdGVybiBTYWhhcmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1laFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRXJpdHJlYVwiLCBcImZsYWdcIjogXCJmbGFnLWVyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTcGFpblwiLCBcImZsYWdcIjogXCJmbGFnLWVzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJFdGhpb3BpYVwiLCBcImZsYWdcIjogXCJmbGFnLWV0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGaW5sYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctZmlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkZpamlcIiwgXCJmbGFnXCI6IFwiZmxhZy1malwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpXCIsIFwiZmxhZ1wiOiBcImZsYWctZmtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1mbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRmFyb2UgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLWZvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGcmFuY2VcIiwgXCJmbGFnXCI6IFwiZmxhZy1mclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR2Fib25cIiwgXCJmbGFnXCI6IFwiZmxhZy1nYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWdiXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHcmVuYWRhXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2RcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdlb3JnaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1nZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRnJlbmNoIEd1aWFuYVwiLCBcImZsYWdcIjogXCJmbGFnLWdmXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHdWVybnNleVwiLCBcImZsYWdcIjogXCJmbGFnLWdnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHaGFuYVwiLCBcImZsYWdcIjogXCJmbGFnLWdoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHaWJyYWx0YXJcIiwgXCJmbGFnXCI6IFwiZmxhZy1naVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3JlZW5sYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2xcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdhbWJpYVwiLCBcImZsYWdcIjogXCJmbGFnLWdtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHdWluZWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1nblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3VhZGVsb3VwZVwiLCBcImZsYWdcIjogXCJmbGFnLWdwXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJFcXVhdG9yaWFsIEd1aW5lYVwiLCBcImZsYWdcIjogXCJmbGFnLWdxXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHcmVlY2VcIiwgXCJmbGFnXCI6IFwiZmxhZy1nclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1nc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3VhdGVtYWxhXCIsIFwiZmxhZ1wiOiBcImZsYWctZ3RcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkd1YW1cIiwgXCJmbGFnXCI6IFwiZmxhZy1ndVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3VpbmVhLUJpc3NhdVwiLCBcImZsYWdcIjogXCJmbGFnLWd3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHdXlhbmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1neVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSG9uZyBLb25nXCIsIFwiZmxhZ1wiOiBcImZsYWctaGtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLWhtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJIb25kdXJhc1wiLCBcImZsYWdcIjogXCJmbGFnLWhuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDcm9hdGlhXCIsIFwiZmxhZ1wiOiBcImZsYWctaHJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkhhaXRpXCIsIFwiZmxhZ1wiOiBcImZsYWctaHRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkh1bmdhcnlcIiwgXCJmbGFnXCI6IFwiZmxhZy1odVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSW5kb25lc2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctaWRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIklyZWxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1pZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSXNyYWVsXCIsIFwiZmxhZ1wiOiBcImZsYWctaWxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIklzbGUgb2YgTWFuXCIsIFwiZmxhZ1wiOiBcImZsYWctaW1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkluZGlhXCIsIFwiZmxhZ1wiOiBcImZsYWctaW5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwiLCBcImZsYWdcIjogXCJmbGFnLWlvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJcmFxXCIsIFwiZmxhZ1wiOiBcImZsYWctaXFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIklyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1pclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSWNlbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWlzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJdGFseVwiLCBcImZsYWdcIjogXCJmbGFnLWl0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJKZXJzZXlcIiwgXCJmbGFnXCI6IFwiZmxhZy1qZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSmFtYWljYVwiLCBcImZsYWdcIjogXCJmbGFnLWptXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJKb3JkYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1qb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSmFwYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1qcFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiS2VueWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1rZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiS3lyZ3l6c3RhblwiLCBcImZsYWdcIjogXCJmbGFnLWtnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDYW1ib2RpYVwiLCBcImZsYWdcIjogXCJmbGFnLWtoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJLaXJpYmF0aVwiLCBcImZsYWdcIjogXCJmbGFnLWtpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDb21vcm9zXCIsIFwiZmxhZ1wiOiBcImZsYWcta21cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLCBcImZsYWdcIjogXCJmbGFnLWtuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJLb3JlYSwgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLWtwXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJLb3JlYSwgUmVwdWJsaWMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1rclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiS3V3YWl0XCIsIFwiZmxhZ1wiOiBcImZsYWcta3dcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNheW1hbiBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWcta3lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkthemFraHN0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1relwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWNcIiwgXCJmbGFnXCI6IFwiZmxhZy1sYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGViYW5vblwiLCBcImZsYWdcIjogXCJmbGFnLWxiXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBMdWNpYVwiLCBcImZsYWdcIjogXCJmbGFnLWxjXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMaWVjaHRlbnN0ZWluXCIsIFwiZmxhZ1wiOiBcImZsYWctbGlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNyaSBMYW5rYVwiLCBcImZsYWdcIjogXCJmbGFnLWxrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMaWJlcmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbHJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxlc290aG9cIiwgXCJmbGFnXCI6IFwiZmxhZy1sc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGl0aHVhbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbHRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkx1eGVtYm91cmdcIiwgXCJmbGFnXCI6IFwiZmxhZy1sdVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGF0dmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbHZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxpYnlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbHlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vcm9jY29cIiwgXCJmbGFnXCI6IFwiZmxhZy1tYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTW9uYWNvXCIsIFwiZmxhZ1wiOiBcImZsYWctbWNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vbGRvdmEsIFJlcHVibGljIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctbWRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vbnRlbmVncm9cIiwgXCJmbGFnXCI6IFwiZmxhZy1tZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIiwgXCJmbGFnXCI6IFwiZmxhZy1tZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFkYWdhc2NhclwiLCBcImZsYWdcIjogXCJmbGFnLW1nXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYXJzaGFsbCBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctbWhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hY2Vkb25pYSwgdGhlIGZvcm1lciBZdWdvc2xhdiBSZXB1YmxpYyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLW1rXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWxpXCIsIFwiZmxhZ1wiOiBcImZsYWctbWxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk15YW5tYXJcIiwgXCJmbGFnXCI6IFwiZmxhZy1tbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTW9uZ29saWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1tblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFjYW9cIiwgXCJmbGFnXCI6IFwiZmxhZy1tb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctbXBcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hcnRpbmlxdWVcIiwgXCJmbGFnXCI6IFwiZmxhZy1tcVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWF1cml0YW5pYVwiLCBcImZsYWdcIjogXCJmbGFnLW1yXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNb250c2VycmF0XCIsIFwiZmxhZ1wiOiBcImZsYWctbXNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hbHRhXCIsIFwiZmxhZ1wiOiBcImZsYWctbXRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hdXJpdGl1c1wiLCBcImZsYWdcIjogXCJmbGFnLW11XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWxkaXZlc1wiLCBcImZsYWdcIjogXCJmbGFnLW12XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWxhd2lcIiwgXCJmbGFnXCI6IFwiZmxhZy1td1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWV4aWNvXCIsIFwiZmxhZ1wiOiBcImZsYWctbXhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hbGF5c2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctbXlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vemFtYmlxdWVcIiwgXCJmbGFnXCI6IFwiZmxhZy1telwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmFtaWJpYVwiLCBcImZsYWdcIjogXCJmbGFnLW5hXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOZXcgQ2FsZWRvbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbmNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5pZ2VyXCIsIFwiZmxhZ1wiOiBcImZsYWctbmVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5vcmZvbGsgSXNsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctbmZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5pZ2VyaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1uZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmljYXJhZ3VhXCIsIFwiZmxhZ1wiOiBcImZsYWctbmlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5ldGhlcmxhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctbmxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5vcndheVwiLCBcImZsYWdcIjogXCJmbGFnLW5vXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOZXBhbFwiLCBcImZsYWdcIjogXCJmbGFnLW5wXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOYXVydVwiLCBcImZsYWdcIjogXCJmbGFnLW5yXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOaXVlXCIsIFwiZmxhZ1wiOiBcImZsYWctbnVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5ldyBaZWFsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctbnpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk9tYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1vbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGFuYW1hXCIsIFwiZmxhZ1wiOiBcImZsYWctcGFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBlcnVcIiwgXCJmbGFnXCI6IFwiZmxhZy1wZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRnJlbmNoIFBvbHluZXNpYVwiLCBcImZsYWdcIjogXCJmbGFnLXBmXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQYXB1YSBOZXcgR3VpbmVhXCIsIFwiZmxhZ1wiOiBcImZsYWctcGdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBoaWxpcHBpbmVzXCIsIFwiZmxhZ1wiOiBcImZsYWctcGhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBha2lzdGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctcGtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBvbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLXBsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCIsIFwiZmxhZ1wiOiBcImZsYWctcG1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBpdGNhaXJuXCIsIFwiZmxhZ1wiOiBcImZsYWctcG5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlB1ZXJ0byBSaWNvXCIsIFwiZmxhZ1wiOiBcImZsYWctcHJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBhbGVzdGluZSwgU3RhdGUgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1wc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUG9ydHVnYWxcIiwgXCJmbGFnXCI6IFwiZmxhZy1wdFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGFsYXVcIiwgXCJmbGFnXCI6IFwiZmxhZy1wd1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGFyYWd1YXlcIiwgXCJmbGFnXCI6IFwiZmxhZy1weVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUWF0YXJcIiwgXCJmbGFnXCI6IFwiZmxhZy1xYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUsOpdW5pb25cIiwgXCJmbGFnXCI6IFwiZmxhZy1yZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUm9tYW5pYVwiLCBcImZsYWdcIjogXCJmbGFnLXJvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTZXJiaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1yc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUnVzc2lhbiBGZWRlcmF0aW9uXCIsIFwiZmxhZ1wiOiBcImZsYWctcnVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlJ3YW5kYVwiLCBcImZsYWdcIjogXCJmbGFnLXJ3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYXVkaSBBcmFiaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1zYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU29sb21vbiBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctc2JcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNleWNoZWxsZXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1zY1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3VkYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1zZFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3dlZGVuXCIsIFwiZmxhZ1wiOiBcImZsYWctc2VcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNpbmdhcG9yZVwiLCBcImZsYWdcIjogXCJmbGFnLXNnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwiLCBcImZsYWdcIjogXCJmbGFnLXNoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTbG92ZW5pYVwiLCBcImZsYWdcIjogXCJmbGFnLXNpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCIsIFwiZmxhZ1wiOiBcImZsYWctc2pcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNsb3Zha2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctc2tcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNpZXJyYSBMZW9uZVwiLCBcImZsYWdcIjogXCJmbGFnLXNsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYW4gTWFyaW5vXCIsIFwiZmxhZ1wiOiBcImZsYWctc21cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNlbmVnYWxcIiwgXCJmbGFnXCI6IFwiZmxhZy1zblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU29tYWxpYVwiLCBcImZsYWdcIjogXCJmbGFnLXNvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTdXJpbmFtZVwiLCBcImZsYWdcIjogXCJmbGFnLXNyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTb3V0aCBTdWRhblwiLCBcImZsYWdcIjogXCJmbGFnLXNzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIiwgXCJmbGFnXCI6IFwiZmxhZy1zdFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRWwgU2FsdmFkb3JcIiwgXCJmbGFnXCI6IFwiZmxhZy1zdlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KVwiLCBcImZsYWdcIjogXCJmbGFnLXN4XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLCBcImZsYWdcIjogXCJmbGFnLXN5XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTd2F6aWxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1zelwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctdGNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNoYWRcIiwgXCJmbGFnXCI6IFwiZmxhZy10ZFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzXCIsIFwiZmxhZ1wiOiBcImZsYWctdGZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRvZ29cIiwgXCJmbGFnXCI6IFwiZmxhZy10Z1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVGhhaWxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy10aFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVGFqaWtpc3RhblwiLCBcImZsYWdcIjogXCJmbGFnLXRqXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUb2tlbGF1XCIsIFwiZmxhZ1wiOiBcImZsYWctdGtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRpbW9yLUxlc3RlXCIsIFwiZmxhZ1wiOiBcImZsYWctdGxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlR1cmttZW5pc3RhblwiLCBcImZsYWdcIjogXCJmbGFnLXRtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUdW5pc2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctdG5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRvbmdhXCIsIFwiZmxhZ1wiOiBcImZsYWctdG9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlR1cmtleVwiLCBcImZsYWdcIjogXCJmbGFnLXRyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsIFwiZmxhZ1wiOiBcImZsYWctdHRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlR1dmFsdVwiLCBcImZsYWdcIjogXCJmbGFnLXR2XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUYWl3YW4sIFByb3ZpbmNlIG9mIENoaW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctdHdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy10elwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVWtyYWluZVwiLCBcImZsYWdcIjogXCJmbGFnLXVhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVZ2FuZGFcIiwgXCJmbGFnXCI6IFwiZmxhZy11Z1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctdW1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLCBcImZsYWdcIjogXCJmbGFnLXVzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVcnVndWF5XCIsIFwiZmxhZ1wiOiBcImZsYWctdXlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlV6YmVraXN0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy11elwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSG9seSBTZWVcIiwgXCJmbGFnXCI6IFwiZmxhZy12YVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIiwgXCJmbGFnXCI6IFwiZmxhZy12Y1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVmVuZXp1ZWxhLCBCb2xpdmFyaWFuIFJlcHVibGljIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctdmVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlZpcmdpbiBJc2xhbmRzLCBCcml0aXNoXCIsIFwiZmxhZ1wiOiBcImZsYWctdmdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlZpcmdpbiBJc2xhbmRzLCBVLlMuXCIsIFwiZmxhZ1wiOiBcImZsYWctdmlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlZpZXQgTmFtXCIsIFwiZmxhZ1wiOiBcImZsYWctdm5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlZhbnVhdHVcIiwgXCJmbGFnXCI6IFwiZmxhZy12dVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiV2FsbGlzIGFuZCBGdXR1bmFcIiwgXCJmbGFnXCI6IFwiZmxhZy13ZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2Ftb2FcIiwgXCJmbGFnXCI6IFwiZmxhZy13c1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiWWVtZW5cIiwgXCJmbGFnXCI6IFwiZmxhZy15ZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWF5b3R0ZVwiLCBcImZsYWdcIjogXCJmbGFnLXl0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTb3V0aCBBZnJpY2FcIiwgXCJmbGFnXCI6IFwiZmxhZy16YVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiWmFtYmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctem1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlppbWJhYndlXCIsIFwiZmxhZ1wiOiBcImZsYWctendcIiB9LFxyXG4gICAgXTtcclxuICAgIHJldHVybiBjb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uKGNvdW50cnkpIHtcclxuICAgICAgcmV0dXJuIGNvdW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdTa2lsbHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IDA7XHJcbiAgJHNjb3BlLnNraWxsc1Zpc2libGUgPSBmYWxzZTtcclxuICAkc2NvcGUucHJvamVjdHMgPSBbXTtcclxuXHJcbiAgJHNjb3BlLmxhYmVscyA9IFtcIkRvd25sb2FkIFNhbGVzXCIsIFwiSW4tU3RvcmUgU2FsZXNcIiwgXCJNYWlsLU9yZGVyIFNhbGVzXCJdO1xyXG4gICRzY29wZS5kYXRhID0gWzMwMCwgNTAwLCAxMDBdO1xyXG5cclxuICAkLmdldEpTT04oJy9leHBlcmllbmNlLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuICAgICRzY29wZS5wcm9qZWN0cyA9IGRhdGEucmVkdWNlKChwcm9qZWN0cywgZW1wbG95ZXIpID0+IHtcclxuICAgICAgaWYgKGVtcGxveWVyLnByb2plY3RzKSByZXR1cm4gZW1wbG95ZXIucHJvamVjdHMuY29uY2F0KHByb2plY3RzKTtcclxuICAgICAgZWxzZSByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9LCB7fSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5maWx0ZXJlZFByb2plY3RzID0gKCkgPT4gJHNjb3BlLnByb2plY3RzXHJcbiAgICAuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNraWxscyAmJiBwcm9qZWN0LnNraWxscy5pbmNsdWRlcygkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jb2RlKSlcclxuXHJcbiAgJC5nZXRKU09OKCcvc2tpbGxzLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuXHJcbiAgICBjb25zdCBza2lsbHMgPSBkYXRhXHJcbiAgICAuZmlsdGVyKChza2lsbCkgPT4gc2tpbGwuZW5hYmxlZClcclxuXHJcbiAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHNraWxsc1xyXG4gICAgLnJlZHVjZShmdW5jdGlvbihjYXRlZ29yaWVzLCBza2lsbCkge1xyXG4gICAgICBpZiAoIWNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0gPSBbc2tpbGxdXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0ucHVzaChza2lsbClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2F0ZWdvcmllcztcclxuICAgIH0sIHt9KTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCA9IGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IHNraWxsO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydE9wdGlvbnMgPSB7XHJcbiAgICAgICAgY3V0b3V0UGVyY2VudGFnZSA6IDgwLFxyXG4gICAgICAgIGNpcmN1bWZlcmVuY2U6IDIgKiBNYXRoLlBJLFxyXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXHJcbiAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydFN0eWxlID0ge1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgvc2tpbGxzLycgKyAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5pbWFnZSArICcpJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJzYwJScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnNTAlIDUwJSdcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwoJHNjb3BlLnNraWxsc1swXSk7XHJcblxyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICAkc2NvcGUuc2VhcmNoID0ge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICB2YWx1ZXM6IFwiXCIsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5rZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuYWRkVmFsdWUoKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICBpZiAoJChcIiNuZXctYmx1cmJcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmFkZFZhbHVlKCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCQoXCIjbmV3LXZhbHVlXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIjbmV3LWJsdXJiXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICB9XHJcbiAgICAgIC8vIHVzZSBlLmtleUNvZGVcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaE5hbWUgPSBcIlwiO1xyXG4gICAgJHNjb3BlLm5ld0l0ZW0gPSB7fTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoY2F0ZWdvcnkpID0+ICgkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSBjYXRlZ29yeSk7XHJcbiAgICAkc2NvcGUuc2V0VXNlckZpbHRlciA9ICh1c2VyKSA9PiAoJHNjb3BlLnVzZXJGaWx0ZXIgPSB1c2VyKTtcclxuICAgICRzY29wZS5zZXRVcGRhdGVGaWx0ZXIgPSAodHlwZSkgPT4gKCRzY29wZS51cGRhdGVGaWx0ZXIgPSB0eXBlKTtcclxuICAgICRzY29wZS5zZXRMYW5ndWFnZUZpbHRlciA9IChsYW5ndWFnZSkgPT4gKCRzY29wZS5sYW5ndWFnZUZpbHRlciA9IGxhbmd1YWdlKTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyZWRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubGlzdHMpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuICRzY29wZS5saXN0c1xyXG4gICAgICAgIC5maWx0ZXIoKHsgaXNEeW5hbWljIH0pID0+IHtcclxuICAgICAgICAgIGlmICgkc2NvcGUudXBkYXRlRmlsdGVyICE9PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJzdGF0aWNcIiAmJiBpc0R5bmFtaWMgPT09IHRydWUpIHx8XHJcbiAgICAgICAgICAgICAgKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiZHluYW1pY1wiICYmIGlzRHluYW1pYyA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoKHsgY2F0ZWdvcmllcyB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoJHNjb3BlLmNhdGVnb3J5RmlsdGVyID09PSBcIkFsbFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yaWVzLmluZGV4T2YoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKSA+PSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPT09IFwiQmxhbmtcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbHRlcigoeyBjcmVhdG9yIH0pID0+IHtcclxuICAgICAgICAgIGlmICgkc2NvcGUudXNlckZpbHRlciA9PT0gXCJBbGxcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdG9yID09PSAkc2NvcGUudXNlckZpbHRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoKHsgbGFuZ3VhZ2UgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCRzY29wZS5sYW5ndWFnZUZpbHRlci5jb2RlID09PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlID09PSAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcnMgPSAkc2NvcGUuY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeSk7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVycy5wdXNoKFwiQWxsXCIpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcnMucHVzaChcIkJsYW5rXCIpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9IFwiQWxsXCI7XHJcbiAgICAgICAgJHNjb3BlLnVwZGF0ZUZpbHRlciA9IFwiYWxsXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJzID0gJHNjb3BlLmxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlKSA9PiBsYW5ndWFnZSk7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVycy5wdXNoKHsgbmFtZTogXCJBbGxcIiwgY29kZTogXCJhbGxcIiB9KTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSB7IG5hbWU6IFwiQWxsXCIsIGNvZGU6IFwiYWxsXCIgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RMaXN0KHsgX2lkOiAkbG9jYXRpb24uc2VhcmNoKCkubGlzdCB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmxpc3RPcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwiZGF0ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIGxhYmVsOiBcIkNyZWF0aW9uIERhdGVcIixcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnZhbHVlT3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInZhbHVlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICAgIGxhYmVsOiBcIlZhbHVlXCIsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zb3J0ID0gKHNvcnRlciwgc29ydEZpZWxkLCBzb3J0TGFiZWwpID0+IHtcclxuICAgICAgJHNjb3BlW3NvcnRlcl0ubGFiZWwgPSBzb3J0TGFiZWw7XHJcbiAgICAgIGlmICgkc2NvcGVbc29ydGVyXS5maWVsZCA9PT0gc29ydEZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlW3NvcnRlcl0uZGlyZWN0aW9uID0gISRzY29wZVtzb3J0ZXJdLmRpcmVjdGlvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGVbc29ydGVyXS5maWVsZCA9IHNvcnRGaWVsZDtcclxuICAgICAgICAkc2NvcGVbc29ydGVyXS5kaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMYW5ndWFnZUNvdW50ID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxpc3RzKSByZXR1cm4gMDtcclxuICAgICAgY29uc3QgY291bnQgPSAkc2NvcGUubGlzdHMuZmlsdGVyKFxyXG4gICAgICAgIChsaXN0KSA9PlxyXG4gICAgICAgICAgKCRzY29wZS5jYXRlZ29yeUZpbHRlciA9PT0gXCJBbGxcIiB8fCBsaXN0LmNhdGVnb3JpZXMuaW5jbHVkZXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKSkgJiZcclxuICAgICAgICAgIChsYW5ndWFnZS5jb2RlID09PSBcImFsbFwiIHx8IGxpc3QubGFuZ3VhZ2UgPT09IGxhbmd1YWdlLmNvZGUpICYmXHJcbiAgICAgICAgICAoJHNjb3BlLnVzZXJGaWx0ZXIgPT09IFwiQWxsXCIgfHwgbGlzdC5jcmVhdG9yID09PSAkc2NvcGUudXNlckZpbHRlcikgJiZcclxuICAgICAgICAgICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImFsbFwiIHx8IGxpc3QuaXNEeW5hbWljID09PSAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJkeW5hbWljXCIpKSxcclxuICAgICAgKS5sZW5ndGg7XHJcbiAgICAgIHJldHVybiBgJHtjb3VudH0gLSAke01hdGgucm91bmQoKGNvdW50IC8gJHNjb3BlLmxpc3RzLmxlbmd0aCkgKiAxMDApfSVgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Q2F0ZWdvcnlDb3VudCA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5saXN0cykgcmV0dXJuIDA7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gJHNjb3BlLmxpc3RzLmZpbHRlcihcclxuICAgICAgICAobGlzdCkgPT5cclxuICAgICAgICAgIChjYXRlZ29yeSA9PT0gXCJBbGxcIiB8fCBsaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSkgPj0gMCkgJiZcclxuICAgICAgICAgICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZSA9PT0gXCJhbGxcIiB8fCBsaXN0Lmxhbmd1YWdlID09PSAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZSkgJiZcclxuICAgICAgICAgICgkc2NvcGUudXNlckZpbHRlciA9PT0gXCJBbGxcIiB8fCBsaXN0LmNyZWF0b3IgPT09ICRzY29wZS51c2VyRmlsdGVyKSAmJlxyXG4gICAgICAgICAgKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiYWxsXCIgfHwgbGlzdC5pc0R5bmFtaWMgPT09ICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImR5bmFtaWNcIikpLFxyXG4gICAgICApLmxlbmd0aDtcclxuICAgICAgcmV0dXJuIGAke2NvdW50fSAtICR7TWF0aC5yb3VuZCgoY291bnQgLyAkc2NvcGUubGlzdHMubGVuZ3RoKSAqIDEwMCl9JWA7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRVcGRhdGVDb3VudCA9ICh0eXBlKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxpc3RzKSByZXR1cm4gMDtcclxuICAgICAgY29uc3QgY291bnQgPSAkc2NvcGUubGlzdHMuZmlsdGVyKFxyXG4gICAgICAgIChsaXN0KSA9PiB0eXBlID09PSBcImFsbFwiIHx8IChsaXN0LmlzRHluYW1pYyAmJiB0eXBlID09PSBcImR5bmFtaWNcIikgfHwgKCFsaXN0LmlzRHluYW1pYyAmJiB0eXBlID09PSBcInN0YXRpY1wiKSxcclxuICAgICAgKS5sZW5ndGg7XHJcbiAgICAgIHJldHVybiBgJHtjb3VudH0gLSAke01hdGgucm91bmQoKGNvdW50IC8gJHNjb3BlLmxpc3RzLmxlbmd0aCkgKiAxMDApfSVgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxvYWRpbmcpIHtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICRzY29wZS5saXN0cyA9IGRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXJzID0ge307XHJcbiAgICAgICAgICAkc2NvcGUudXNlckZpbHRlcnMuQWxsID0gJHNjb3BlLmxpc3RzLmxlbmd0aDtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVycyA9ICRzY29wZS5saXN0c1xyXG4gICAgICAgICAgICAuc29ydCgobGlzdDEsIGxpc3QyKSA9PiBsaXN0MS5jcmVhdG9yID4gbGlzdDIuY3JlYXRvcilcclxuICAgICAgICAgICAgLnJlZHVjZSgodXNlcnMsIHsgY3JlYXRvciB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCF1c2Vyc1tjcmVhdG9yXSkgdXNlcnNbY3JlYXRvcl0gPSAwO1xyXG4gICAgICAgICAgICAgIHVzZXJzW2NyZWF0b3JdKys7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXJzO1xyXG4gICAgICAgICAgICB9LCAkc2NvcGUudXNlckZpbHRlcnMpO1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJDb3VudCA9IE9iamVjdC5rZXlzKCRzY29wZS51c2VyRmlsdGVycykubGVuZ3RoO1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXJzID0gc29ydE9iamVjdCgkc2NvcGUudXNlckZpbHRlcnMsIGZhbHNlKTtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVyID0gXCJBbGxcIjtcclxuICAgICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgJChcIiNjYXRlZ29yeS1zZWxlY3RcIikuaGlkZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Q2F0ZWdvcnlDbGFzcyA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICByZXR1cm4gJHNjb3BlLnNlbGVjdGVkTGlzdCAmJiAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSkgPj0gMFxyXG4gICAgICAgID8gXCJidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgOiBcImJ0bi1kZWZhdWx0XCI7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeUluZGV4ID0gJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpO1xyXG4gICAgICBpZiAoY2F0ZWdvcnlJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLnNwbGljZShjYXRlZ29yeUluZGV4LCAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdExhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICBjb25zdCBub25FbmdsaXNoSW5kZXggPSAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICBpZiAobGFuZ3VhZ2UuY29kZSAhPT0gXCJFTlwiICYmIG5vbkVuZ2xpc2hJbmRleCA8IDApIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMucHVzaChcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGxhbmd1YWdlLmNvZGUgPT09IFwiRU5cIiAmJiBub25FbmdsaXNoSW5kZXggPj0gMCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5zcGxpY2Uobm9uRW5nbGlzaEluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWRkTGlzdCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudExhbmd1YWdlID0gJHNjb3BlLnNlbGVjdGVkTGlzdCA/ICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2UgOiBcIkVOXCI7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIFwiXCIpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgY3JlYXRvcjogJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHZhbHVlczogW10sXHJcbiAgICAgICAgYW5zd2VyczogMCxcclxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGN1cnJlbnRMYW5ndWFnZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmhhc0R1cGxpY2F0ZSA9ICgpID0+XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgJiZcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgJiZcclxuICAgICAgXy5zb21lKFxyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgIChhbnN3ZXIpID0+IGFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCkgPT0gJHNjb3BlLm5ld0l0ZW0udmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpLFxyXG4gICAgICApO1xyXG5cclxuICAgICRzY29wZS5hZGRWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5uZXdJdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgXy5zb21lKFxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyxcclxuICAgICAgICAgICAgKGFuc3dlcikgPT4gYW5zd2VyLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSA9PSAkc2NvcGUubmV3SXRlbS52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCksXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBhbGVydChgJHskc2NvcGUubmV3SXRlbS52YWx1ZX0gaXMgYWxyZWFkeSBpbiB0aGUgbGlzdGApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUubmV3SXRlbS5jcmVhdG9yID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnVuc2hpZnQoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSgkc2NvcGUubmV3SXRlbSkpKTtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuYW5zd2VycysrO1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0uYmx1cmIgPSBcIlwiO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5sZW5ndGggPj0gMTAgJiZcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5uYW1lICYmXHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmVMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAkKFwiI25ldy12YWx1ZVwiKS5mb2N1cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUucmVwb3J0TGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGxpc3QucmVwb3J0ZWQgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMucmVwb3J0TGlzdCgkc2NvcGUuY3VycmVudFVzZXIsIGxpc3QpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2F2ZUxpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5zYXZpbmcpIHtcclxuICAgICAgICBsaXN0LnZhbHVlcyA9IGxpc3QudmFsdWVzLmZpbHRlcigoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7XHJcbiAgICAgICAgaWYgKGxpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCAmJiBsaXN0Lm5hbWUgJiYgbGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICRzY29wZS5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLnNhdmVMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgbGlzdCkudGhlbihcclxuICAgICAgICAgICAgKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmxpc3RzLnVuc2hpZnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0TGlzdChkYXRhKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkc2NvcGUubGlzdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5saXN0c1tpXS5faWQgPT09IGRhdGEuX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxpc3RzW2ldID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdExpc3QobGlzdCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobGlzdC52YWx1ZXMubGVuZ3RoIDwgMTApIHtcclxuICAgICAgICAgIGFsZXJ0KFwiTGlzdHMgbXVzdCBjb250YWluIDEwIG9yIG1vcmUgdmFsdWVzIVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFsaXN0Lm5hbWUpIHtcclxuICAgICAgICAgIGZsYXNoKFwiI2xpc3QtbmFtZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmxhc2goXCIubGlzdC1jYXRlZ29yeVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZmxhc2goZWxlbWVudCkge1xyXG4gICAgICBjb25zdCBjb2xvciA9ICQoZWxlbWVudCkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiKTtcclxuICAgICAgJChlbGVtZW50KS5hbmltYXRlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkE4MDcyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMDAsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgJChlbGVtZW50KS5hbmltYXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCFsaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9ICRzY29wZS5saXN0cy5maWx0ZXIoKHsgX2lkIH0pID0+IF9pZCk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbGlzdD9cIikpIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5kZWxldGVMaXN0KGxpc3QpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUubGlzdEJ1dHRvbkNsYXNzID0gKGxpc3QpID0+IHtcclxuICAgICAgY29uc3QgdmFsdWVzID0gbGlzdC52YWx1ZXMubGVuZ3RoO1xyXG4gICAgICBjb25zdCBibHVyYnMgPSBsaXN0LmJsdXJicztcclxuICAgICAgaWYgKHZhbHVlcyA9PT0gYmx1cmJzICYmIGxpc3QuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gXCJidG4tZGVmYXVsdFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKGJsdXJicyA9PT0gMCAmJiAhbGlzdC5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHJldHVybiBcImJ0bi13YXJuaW5nXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoYmx1cmJzID09PSAwICYmIGxpc3QuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gXCJidG4taW5mb1wiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcImJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldEJsdXJicyA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldEJsdXJicygkc2NvcGUuc2VsZWN0ZWRMaXN0LCB0eXBlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9KTtcclxuIiwiLypqc2xpbnQgZXN2ZXJzaW9uOiA2Ki9cclxuYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0FkbWluQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBUZW5UaGluZ3NTdmMsIFVzZXJTdmMpIHtcclxuICAgICRzY29wZS4kb24oXCJsb2dpblwiLCAoXykgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyQnkgPSAoZmllbGQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5vcmRlci5maWVsZCA9PT0gZmllbGQpIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIucmV2ZXJzZSA9ICEkc2NvcGUub3JkZXIucmV2ZXJzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRRdWV1ZSA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0UXVldWUoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5xdWV1ZSA9IHJlc3BvbnNlLmRhdGEucmVwbGFjZShcIi9uXCIsIFwiPGJyLz5cIik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmdldFF1ZXVlKCk7XHJcblxyXG4gICAgVGVuVGhpbmdzU3ZjLmdldFBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5wYXVzZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy5nZXRVc2VycygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKHVzZXIpID0+ICF1c2VyLmFkbWluKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUJhbiA9ICh1c2VyKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy50b2dnbGVCYW4odXNlci5faWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVQYXVzZSA9ICh1c2VyKSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy50b2dnbGVQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLnBhdXNlZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0N1cmF0ZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBUZW5UaGluZ3NTdmMpIHtcclxuICAgIGxldCBwYWdlID0gMTtcclxuICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlYXJjaCA9IFwiXCI7XHJcbiAgICAkc2NvcGUubmV3SXRlbSA9IHt9O1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgZXhoYXVzdGVkID0gZmFsc2U7XHJcblxyXG4gICAgJHNjb3BlLmtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICRzY29wZS5hZGRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuYWRkVmFsdWUoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoJChcIiNuZXctdmFsdWVcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgJChcIiNuZXctYmx1cmJcIikuZm9jdXMoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIH1cclxuICAgICAgLy8gdXNlIGUua2V5Q29kZVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWRkTGlzdCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudExhbmd1YWdlID0gJHNjb3BlLnNlbGVjdGVkTGlzdCA/ICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2UgOiBcIkVOXCI7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIFwibmV3XCIpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgY3JlYXRvcjogJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHZhbHVlczogW10sXHJcbiAgICAgICAgYW5zd2VyczogMCxcclxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGN1cnJlbnRMYW5ndWFnZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmIChsaXN0KSB7XHJcbiAgICAgICAgaWYgKGxpc3QuX2lkID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAkc2NvcGUuYWRkTGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoISRzY29wZS5zZWxlY3RlZExpc3QgfHwgbGlzdC5faWQgIT09ICRzY29wZS5zZWxlY3RlZExpc3QuX2lkKSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHt9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldENhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJlc2V0TGFuZ3VhZ2VGaWx0ZXIoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgcmVzZXRDYXRlZ29yeUZpbHRlcigpO1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0KSB7XHJcbiAgICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCh7IF9pZDogJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QgfSk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLnNlYXJjaCA9ICRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2ggfHwgXCJcIjtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcImRhdGVcIixcclxuICAgICAgcmV2ZXJzZTogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyQnkgPSAoZmllbGQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5vcmRlci5maWVsZCA9PT0gZmllbGQpIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIucmV2ZXJzZSA9ICEkc2NvcGUub3JkZXIucmV2ZXJzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TW9yZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxpc3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gJHNjb3BlLmxpc3RzLmNvbmNhdChsaXN0cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgICBwYWdlID0gMTtcclxuICAgICAgZXhoYXVzdGVkID0gZmFsc2U7XHJcbiAgICAgIGdldExpc3RzKCkudGhlbigobGlzdHMpID0+IHtcclxuICAgICAgICAkc2NvcGUubGlzdHMgPSBsaXN0cztcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0pIHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9ICEkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV07XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeUZpbHRlciA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0pIHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID0gISRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV07XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVDYXRlZ29yeUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcik7XHJcbiAgICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPVxyXG4gICAgICAgIGNhdGVnb3JpZXMubGVuZ3RoID09PSBjYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0pLmxlbmd0aDtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0gJHNjb3BlLmNhdGVnb3JpZXMucmVkdWNlKChmaWx0ZXIsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgZmlsdGVyW2NhdGVnb3J5XSA9ICFhbGxDYXRlZ29yaWVzO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldExpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxvYWRpbmcgfHwgZXhoYXVzdGVkKSByZXR1cm4gW107XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2ggIT09ICRzY29wZS5zZWFyY2gpIHtcclxuICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwic2VhcmNoXCIsICRzY29wZS5zZWFyY2ggPyAkc2NvcGUuc2VhcmNoIDogbnVsbCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdHMoe1xyXG4gICAgICAgIHBhZ2UsXHJcbiAgICAgICAgc29ydEJ5OiAkc2NvcGUub3JkZXIuZmllbGQsXHJcbiAgICAgICAgb3JkZXJCeTogJHNjb3BlLm9yZGVyLnJldmVyc2UgPyAtMSA6IDEsXHJcbiAgICAgICAgbGltaXQ6IDIwMCxcclxuICAgICAgICBzZWFyY2g6ICRzY29wZS5zZWFyY2gsXHJcbiAgICAgICAgbGFuZ3VhZ2VzOiBPYmplY3Qua2V5cygkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIpLmZpbHRlcigobGFuZ3VhZ2UpID0+ICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZV0pLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSksXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlBhZ2UgXCIsIHBhZ2UsIFwiIHJlc3VsdHMgXCIsIGRhdGEucmVzdWx0Lmxlbmd0aCk7XHJcbiAgICAgIGlmIChkYXRhLnJlc3VsdC5sZW5ndGggPCAxMDApIGV4aGF1c3RlZCA9IHRydWU7XHJcbiAgICAgIGVsc2UgcGFnZSA9IGRhdGEubmV4dFBhZ2U7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0LnNsaWNlKDAsIDEwKSk7XHJcbiAgICAgIHJldHVybiBkYXRhLnJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmFkZFZhbHVlID0gKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm5ld0l0ZW0udmFsdWUpIHtcclxuICAgICAgICBpZiAoJHNjb3BlLmhhc0R1cGxpY2F0ZSgpKSB7XHJcbiAgICAgICAgICBhbGVydChgJHskc2NvcGUubmV3SXRlbS52YWx1ZX0gaXMgYWxyZWFkeSBpbiB0aGUgbGlzdGApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUubmV3SXRlbS5jcmVhdG9yID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnVuc2hpZnQoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSgkc2NvcGUubmV3SXRlbSkpKTtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuYW5zd2VycysrO1xyXG4gICAgICAgICAgJHNjb3BlLnVwc2VydExpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCk7XHJcbiAgICAgICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAkc2NvcGUubmV3SXRlbS5ibHVyYiA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICQoXCIjbmV3LXZhbHVlXCIpLmZvY3VzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS51cHNlcnRMaXN0ID0gKGxpc3QsIHVwZGF0ZXMpID0+IHtcclxuICAgICAgJHNjb3BlLnNhdmluZyA9IHRydWU7XHJcbiAgICAgIGlmIChsaXN0LnZhbHVlcy5sZW5ndGggPj0gMTAgJiYgbGlzdC5uYW1lICYmIGxpc3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaWYgKGxpc3QuX2lkICE9PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAgIF9pZDogbGlzdC5faWQsXHJcbiAgICAgICAgICAgIC4uLih1cGRhdGVzID8gdXBkYXRlcyA6IGxpc3QpLFxyXG4gICAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuc2F2ZUxpc3QoJHNjb3BlLmN1cnJlbnRVc2VyLCAkc2NvcGUuc2VsZWN0ZWRMaXN0KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QgPT09IFwibmV3XCIpIHtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICghbGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBsaXN0P1wiKSkge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3QobGlzdCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2UgPSAobGlzdCwgbGFuZ3VhZ2UpID0+IHtcclxuICAgICAgbGlzdC5sYW5ndWFnZSA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgIGNvbnN0IG5vbkVuZ2xpc2hJbmRleCA9IGxpc3QuY2F0ZWdvcmllcy5pbmRleE9mKFwiTm9uLUVuZ2xpc2hcIik7XHJcbiAgICAgIGlmIChsYW5ndWFnZS5jb2RlICE9PSBcIkVOXCIgJiYgbm9uRW5nbGlzaEluZGV4IDwgMCkge1xyXG4gICAgICAgIGxpc3QuY2F0ZWdvcmllcy5wdXNoKFwiTm9uLUVuZ2xpc2hcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAobGFuZ3VhZ2UuY29kZSA9PT0gXCJFTlwiICYmIG5vbkVuZ2xpc2hJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgbGlzdC5jYXRlZ29yaWVzLnNwbGljZShub25FbmdsaXNoSW5kZXgsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHtcclxuICAgICAgICBjYXRlZ29yaWVzOiBsaXN0LmNhdGVnb3JpZXMsXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGxhbmd1YWdlLmNvZGUsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0RGlmZmljdWx0eSA9IChsaXN0LCBkaWZmaWN1bHR5KSA9PiB7XHJcbiAgICAgIGxpc3QuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHtcclxuICAgICAgICBkaWZmaWN1bHR5OiBkaWZmaWN1bHR5LFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldEZyZXF1ZW5jeSA9IChsaXN0LCBmcmVxdWVuY3kpID0+IHtcclxuICAgICAgbGlzdC5mcmVxdWVuY3kgPSBmcmVxdWVuY3k7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHtcclxuICAgICAgICBmcmVxdWVuY3k6IGZyZXF1ZW5jeSxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeSA9IChsaXN0LCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeUluZGV4ID0gbGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpO1xyXG4gICAgICBpZiAoY2F0ZWdvcnlJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgbGlzdC5jYXRlZ29yaWVzLnNwbGljZShjYXRlZ29yeUluZGV4LCAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaXN0LmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwge1xyXG4gICAgICAgIGNhdGVnb3JpZXM6IGxpc3QuY2F0ZWdvcmllcyxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5oYXNEdXBsaWNhdGUgPSAoKSA9PlxyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ICYmXHJcbiAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlICYmXHJcbiAgICAgIF8uc29tZShcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyxcclxuICAgICAgICAoYW5zd2VyKSA9PiBhbnN3ZXIudmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpID09ICRzY29wZS5uZXdJdGVtLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSxcclxuICAgICAgKTtcclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG5cdC5tb2R1bGUoJ2FwcCcpXHJcblx0Ly9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcblx0LmNvbnRyb2xsZXIoXHJcblx0XHQnVGVuVGhpbmdzR2FtZUN0cmwnLFxyXG5cdFx0ZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlUGFyYW1zLCBUZW5UaGluZ3NTdmMpIHtcclxuXHRcdFx0JHNjb3BlLiRvbignbG9naW4nLCBfID0+IHtcclxuXHRcdFx0XHRpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcblx0XHRcdFx0XHRnZXRVc2VycygpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRpZiAoJHN0YXRlUGFyYW1zLmdhbWUpIHtcclxuXHRcdFx0XHRUZW5UaGluZ3NTdmMuZ2V0R2FtZSgkc3RhdGVQYXJhbXMuZ2FtZSkudGhlbihyZXNwb25zZSA9PiB7XHJcblx0XHRcdFx0XHQkc2NvcGUuZ2FtZSA9IHJlc3BvbnNlLmRhdGE7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygkc2NvcGUuZ2FtZSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHQpO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1dvcmtvdXRDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgJHNjb3BlLnRpbWVFeGVyY2lzaW5nID0gMzA7XHJcbiAgJHNjb3BlLnRpbWVSZXN0aW5nID0gMTA7XHJcbiAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuXHJcbiAgdmFyIHNvdW5kcyA9IHtcclxuICAgIG9uOiBuZXcgQXVkaW8oJ29uLndhdicpLFxyXG4gICAgb2ZmOiBuZXcgQXVkaW8oJ29mZi53YXYnKSxcclxuICAgIHN3aXRjaDogbmV3IEF1ZGlvKCdzd2l0Y2gud2F2JyksXHJcbiAgfTtcclxuXHJcblxyXG4gIHZhciBleGVyY2lzZXMgPSBbXHJcbiAgICB7bmFtZTogJ0p1bXBpbmcgSmFja3MnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdXYWxsIFNpdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1B1c2gtVXAnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdDcnVuY2gnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTdGVwLVVwJywgc3BsaXQ6IHRydWV9LFxyXG4gICAge25hbWU6ICdTcXVhdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1RyaWNlcHMgRGlwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUGxhbmsnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdIaWdoIEtuZWVzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnTHVuZ2UnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwIHdpdGggUm90YXRpb24nLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTaWRlIFBsYW5rJywgc3BsaXQ6IHRydWV9XHJcbiAgXTtcclxuXHJcbiAgdmFyIGV4ZXJjaXNpbmc7XHJcblxyXG4gICRzY29wZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChleGVyY2lzZXMubGVuZ3RoIC0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvICgkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3RpbmcpKSkgKyAnLycgKyBleGVyY2lzZXMubGVuZ3RoO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS53b3Jrb3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZXhjZXJjaXNlVGltZSA9ICRzY29wZS50aW1lRXhlcmNpc2luZyArICRzY29wZS50aW1lUmVzdGluZztcclxuICAgIGlmICghJHNjb3BlLnRpbWVSZW1haW5pbmcpIHtcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSBleGVyY2lzZXMubGVuZ3RoICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgZXhlcmNpc2luZyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS50aW1lUmVtYWluaW5nLS07XHJcbiAgICAgICAgaWYgKCRzY29wZS50aW1lUmVtYWluaW5nID09PSAwKSB7XHJcbiAgICAgICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJ0ZpbmlzaGVkISBDb25ncmF0cyEnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdXJyZW50RXhlcmNpc2UgPSBNYXRoLmZsb29yKCRzY29wZS50aW1lUmVtYWluaW5nIC8gZXhjZXJjaXNlVGltZSk7XHJcbiAgICAgICAgdmFyIHRpbWVyID0gJHNjb3BlLnRpbWVSZW1haW5pbmcgLSBjdXJyZW50RXhlcmNpc2UgKiBleGNlcmNpc2VUaW1lO1xyXG4gICAgICAgICRzY29wZS50aW1lciA9IHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nID8gdGltZXIgLSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgOiB0aW1lcjtcclxuICAgICAgICBpZiAodGltZXIgPiAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0gZXhlcmNpc2VzW2V4ZXJjaXNlcy5sZW5ndGggLSBjdXJyZW50RXhlcmNpc2UgLSAxXTtcclxuICAgICAgICBpZiAodGltZXIgPT09ICRzY29wZS50aW1lRXhlcmNpc2luZykge1xyXG4gICAgICAgICAgc291bmRzLm9uLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRpbWVyID09PSAwKSB7XHJcbiAgICAgICAgICBzb3VuZHMub2ZmLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRzY29wZS5leGVyY2lzZS5zcGxpdCAmJiB0aW1lciA9PT0gTWF0aC5mbG9vcigkc2NvcGUudGltZUV4ZXJjaXNpbmcgLyAyKSkge1xyXG4gICAgICAgICAgc291bmRzLnN3aXRjaC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAkc2NvcGUudGltZXIgPSAnJztcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJycsIHNwbGl0OiBmYWxzZX07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5kaXJlY3RpdmUoXCJjbGlja091dHNpZGVcIiwgZnVuY3Rpb24gKCRkb2N1bWVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICByZXN0cmljdDogXCJBXCIsXHJcbiAgICBzY29wZToge1xyXG4gICAgICBjbGlja091dHNpZGU6IFwiJlwiLFxyXG4gICAgfSxcclxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgJGRvY3VtZW50Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZWwgIT09IGUudGFyZ2V0ICYmICFlbFswXS5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vc2NvcGUuJHBhcmVudC5zZXRTZWxlY3RlZExpc3QoKTtcclxuICAgICAgICAgICAgc2NvcGUuJGV2YWwoc2NvcGUuY2xpY2tPdXRzaWRlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuXHQuZGlyZWN0aXZlKCdoZWFkJywgW1xyXG5cdFx0JyRyb290U2NvcGUnLFxyXG5cdFx0JyRzdGF0ZScsXHJcblx0XHQnJGNvbXBpbGUnLFxyXG5cdFx0JyRpbnRlcnBvbGF0ZScsXHJcblx0XHRmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkY29tcGlsZSwgJGludGVycG9sYXRlKSB7XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGUgPSBmdW5jdGlvbiBnZXRTdHlsZSh0ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdHlsZSA9IHtcclxuXHRcdFx0XHRcdGhyZWY6IHRlbXBsYXRlU3R5bGVVcmwsXHJcblx0XHRcdFx0XHRyZWw6ICdzdHlsZXNoZWV0J1xyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmIChzdHlsZS5ocmVmLm1hdGNoKC9cXC5sZXNzJC8pKSB7XHJcblx0XHRcdFx0XHRzdHlsZS5yZWwgPSAnc3R5bGVzaGVldC9sZXNzJztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBzdHlsZTtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gZ2V0U3R5bGVzKHN0YXRlKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdGF0ZXMgPSB7fTtcclxuXHJcblx0XHRcdFx0Ly9DaGVjayBzdGF0ZSBmb3Igc3R5bGVzXHJcblx0XHRcdFx0d2hpbGUgKHN0YXRlLm5hbWUgIT09ICcnKSB7XHJcblx0XHRcdFx0XHR2YXIgcGFyZW50ID0gJHN0YXRlLmdldCgnXicsIHN0YXRlKTtcclxuXHJcblx0XHRcdFx0XHQvL0luaXRpYXRlIG91ciB2aWV3IGxpc3RcclxuXHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXSkge1xyXG5cdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdID0ge307XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB0aGUgdGVtcGxhdGVTdHlsZVxyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSkge1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1bJyddID0gZ2V0U3R5bGUoc3RhdGUudGVtcGxhdGVTdHlsZVVybCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NoZWNrIHZpZXdzXHJcblx0XHRcdFx0XHRpZiAoc3RhdGUudmlld3MpIHtcclxuXHRcdFx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlLnZpZXdzLCBmdW5jdGlvbiAodmlldywga2V5KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgaGF2ZSBhIHN0eWxlXHJcblx0XHRcdFx0XHRcdFx0aWYgKCF2aWV3LnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgYXJlIHRhcmdldGluZyBzb21lIHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdGlmICgoa2V5ID0ga2V5LnNwbGl0KCdAJykpWzFdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgc3R5bGVzIGZvciB0aGF0IHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXSA9IHt9O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIHNvbWUgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXVtrZXlbMF1dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlc1trZXlbMV1dW2tleVswXV0gPSBnZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIG91ciBwYXJlbnQncyB2aWV3XHJcblx0XHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ29udGludWUgd2l0aCB0aGUgcGFyZW50XHJcblx0XHRcdFx0XHRzdGF0ZSA9IHBhcmVudDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vRmxhdHRlbiB0aGUgbGlzdFxyXG5cdFx0XHRcdHZhciBmbGF0ID0gW107XHJcblx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlcywgZnVuY3Rpb24gKHZpZXdzKSB7XHJcblxyXG5cdFx0XHRcdFx0Xy5mb3JFYWNoKHZpZXdzLCBmdW5jdGlvbiAoc3R5bGUpIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghXy5pbmNsdWRlcyhmbGF0LCBzdHlsZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRmbGF0LnB1c2goc3R5bGUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvL1JldmVyc2UgaXQgc28gd2UgaGF2ZSBhIHByb3BlciBoaWVyYXJjaHlcclxuXHRcdFx0XHRmbGF0LnJldmVyc2UoKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGZsYXQ7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0XHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSkge1xyXG5cclxuXHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gW107XHJcblxyXG5cdFx0XHRcdFx0dmFyIGh0bWwgPSAnPGxpbmsgbmctYXR0ci1yZWw9XCJ7e3N0eWxlLnJlbH19XCIgbmctcmVwZWF0PVwic3R5bGUgaW4gdGVtcGxhdGVTdHlsZXNcIiBuZy1ocmVmPVwie3tzdHlsZS5ocmVmfX1cIj4nO1xyXG5cclxuXHRcdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xce1xcey9nLCAkaW50ZXJwb2xhdGUuc3RhcnRTeW1ib2woKSk7XHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXH1cXH0vZywgJGludGVycG9sYXRlLmVuZFN5bWJvbCgpKTtcclxuXHJcblx0XHRcdFx0XHRlbGVtLmFwcGVuZCgkY29tcGlsZShodG1sKShzY29wZSkpO1xyXG5cclxuXHRcdFx0XHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykge1xyXG5cclxuXHRcdFx0XHRcdFx0c2NvcGUudGVtcGxhdGVTdHlsZXMgPSBnZXRTdHlsZXModG9TdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHR9XHJcblx0XSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnQ2F0ZWdvcmllc1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0Q2F0ZWdvcmllcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcycpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRUYXNrcyA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9jYXRlZ29yaWVzLycgKyBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZENhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9jYXRlZ29yaWVzLycsIGNhdGVnb3J5KTtcclxuICB9O1xyXG5cclxuICBzdmMuYWRkVGFzayA9IGZ1bmN0aW9uIChjYXRlZ29yeSwgdGFzaykge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkgKyAnL3Rhc2tzJywgdGFzayk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHN2Yy5jaG9pY2VzID0gbGlzdDtcclxuICAgIHN2Yy5wcmlvcml0eUxpc3QgPSBbXTtcclxuICAgIC8vTWFrZSBhIG5ldyBjaG9pY2UgbGlzdFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IGxpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICBzdmMucHJpb3JpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICBmaXJzdENob2ljZTogbGlzdFtyYW5kb20gPT09IDAgPyBpIDogal0ubmFtZSxcclxuICAgICAgICAgIHNlY29uZENob2ljZTogbGlzdFtyYW5kb20gPT09IDAgPyBqIDogaV0ubmFtZSxcclxuICAgICAgICAgIGNob2ljZTogJydcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2h1ZmZsZShzdmMucHJpb3JpdHlMaXN0KTtcclxuICAgIGZvciAoaSBpbiBzdmMucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHN2Yy5wcmlvcml0eUxpc3RbaV0uaWQgPSBpICsgMTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UHJpb3JpdHlMaXN0ID0gZnVuY3Rpb24obGlzdCkge1xyXG4gICAgcmV0dXJuIHN2Yy5wcmlvcml0eUxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xyXG4gICAgdmFyIG0gPSBhcnJheS5sZW5ndGgsIHQsIGk7XHJcbiAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZeKAplxyXG4gICAgd2hpbGUgKG0pIHtcclxuICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW504oCmXHJcbiAgICAgIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtLS0pO1xyXG4gICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcbiAgICAgIC8vYXJyYXlbbV0uZmlyc3RDaG9pY2U7XHJcbiAgICAgIHQgPSBhcnJheVttXTtcclxuICAgICAgYXJyYXlbbV0gPSBhcnJheVtpXTtcclxuICAgICAgYXJyYXlbaV0gPSB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0VtYWlsU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5zZW5kID0gZnVuY3Rpb24gKGVtYWlsKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9lbWFpbCcsIGVtYWlsKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5zZXJ2aWNlKCdGaWxlU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgICBzdmMuZ2V0SW1hZ2VzID0gZnVuY3Rpb24oZm9sZGVyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZmlsZXMvaW1hZ2VzLycgKyBmb2xkZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdmMuZ2V0U291bmRzID0gZnVuY3Rpb24oZm9sZGVyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZmlsZXMvc291bmRzLycgKyBmb2xkZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdHYW1lU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgICBzdmMuZ2V0SGlnaHNjb3JlID0gZnVuY3Rpb24gKGdhbWUsIHVzZXIpIHtcclxuICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9nYW1lcy8nICsgZ2FtZSArICcvJyArIHVzZXIgKyAnL2hpZ2hzY29yZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdmMuc2V0SGlnaHNjb3JlID0gZnVuY3Rpb24gKGdhbWUsIHVzZXIsIHNjb3JlKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2dhbWVzLycgKyBnYW1lICsgJy8nICsgdXNlciArICcvaGlnaHNjb3JlJywge1xyXG4gICAgICAgIHNjb3JlOiBzY29yZVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdMYW5ndWFnZVN2YycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmxhbmd1YWdlcyA9IFtcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRU5cIixcclxuICAgICAgXCJuYW1lXCI6IFwiRW5nbGlzaFwiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tZ2JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiTkxcIixcclxuICAgICAgXCJuYW1lXCI6IFwiTmVkZXJsYW5kc1wiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tbmxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRlJcIixcclxuICAgICAgXCJuYW1lXCI6IFwiRnJhbsOnYWlzXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1mclwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgc3ZjLnRleHQgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkVOXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIk5MXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkZSXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBzdmMuc2VsZWN0ZWRMYW5ndWFnZSA9IHN2Yy5sYW5ndWFnZXNbMF07XHJcblxyXG4gIHN2Yy5zZXRMYW5ndWFnZSA9IGZ1bmN0aW9uIChsYW5ndWFnZSkge1xyXG4gICAgc3ZjLnNlbGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgIHJldHVybiBsYW5ndWFnZTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gc3ZjLnNlbGVjdGVkTGFuZ3VhZ2U7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ1Bvc3RzU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5mZXRjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlID0gZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgcG9zdCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBvc3QgPSBmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cy8nICsgcG9zdC5faWQpO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlRlblRoaW5nc1N2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFF1ZXVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2JvdHMvdGVudGhpbmdzL3F1ZXVlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3RzID0gZnVuY3Rpb24gKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgdmFyIHVybCA9XHJcbiAgICAgIGAvYXBpL3RlbnRoaW5ncy9saXN0cz9gICtcclxuICAgICAgKG9wdGlvbnMubGltaXQgPyBgJmxpbWl0PSR7b3B0aW9ucy5saW1pdH1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5wYWdlID8gYCZwYWdlPSR7b3B0aW9ucy5wYWdlfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnNvcnRCeSA/IGAmc29ydF9ieT0ke29wdGlvbnMuc29ydEJ5fWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLm9yZGVyQnkgPyBgJm9yZGVyX2J5PSR7b3B0aW9ucy5vcmRlckJ5fWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLmxhbmd1YWdlcyAmJiBvcHRpb25zLmxhbmd1YWdlcy5sZW5ndGggPiAwID8gYCZsYW5ndWFnZT0ke29wdGlvbnMubGFuZ3VhZ2VzLmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLmNhdGVnb3JpZXMgJiYgb3B0aW9ucy5jYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyBgJmNhdGVnb3JpZXM9JHtvcHRpb25zLmNhdGVnb3JpZXMuam9pbihcIixcIil9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuc2VhcmNoID8gYCZzZWFyY2g9JHtvcHRpb25zLnNlYXJjaH1gIDogXCJcIik7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9jYXRlZ29yaWVzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2xhbmd1YWdlc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQsIGxpc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zYXZlTGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucHV0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHNcIiwge1xyXG4gICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICBsaXN0OiBsaXN0LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnJlcG9ydExpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3JlcG9ydC9cIiArIHVzZXIuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMuZGVsZXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEJsdXJicyA9IGZ1bmN0aW9uIChsaXN0LCB0eXBlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvbGlzdHMvJHtsaXN0Ll9pZH0vYmx1cmJzLyR7dHlwZX1gKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRHYW1lID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9nYW1lLyR7aWR9YCk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJVc2VyU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRVc2VycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzL2FsbFwiKTtcclxuICB9O1xyXG5cclxuICBzdmMudG9nZ2xlQmFuID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3VzZXJzL2Jhbi8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSB0b2tlbjtcclxuICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hdXRoZW50aWNhdGVcIiwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9sb2dpblwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyLl9pZCwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi92ZXJpZmljYXRpb25cIiwge1xyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvcGFzc3dvcmRcIiwge1xyXG4gICAgICBvbGRQYXNzd29yZDogb2xkUGFzc3dvcmQsXHJcbiAgICAgIG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VyLCBuZXdVc2VybmFtZSkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi91c2VybmFtZVwiLCB7XHJcbiAgICAgICAgbmV3VXNlcm5hbWU6IG5ld1VzZXJuYW1lLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmNvbnRyb2xsZXIoJ1F1aXpBbmltYWxzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgRmlsZVN2Yykge1xyXG5cclxuICAgIEZpbGVTdmMuZ2V0U291bmRzKCdhbmltYWxzJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIHNvdW5kOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgNSk7XHJcblxyXG4gICAgJHNjb3BlLmdldFNjb3JlID0gKCkgPT4gYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwubmFtZSA9PT0gYW5pbWFsLmd1ZXNzKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWA7XHJcblxyXG4gICAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBhbmltYWwuZ3Vlc3MpLmxlbmd0aCA9PT0gJHNjb3BlLmFuaW1hbHMubGVuZ3RoO1xyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpekdvb2dsZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ2dvb2dsZScpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TG9nb3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdsb2dvcycpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdRdWl6TW92aWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnbW92aWVzJylcclxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuICAuY29udHJvbGxlcignUXVpelNrZWxldG9uc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIEZpbGVTdmMpIHtcclxuXHJcbiAgICBGaWxlU3ZjLmdldEltYWdlcygnc2tlbGV0b25zJylcclxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShyZXNwb25zZS5kYXRhLm1hcChhbmltYWwgPT4gKHtcclxuICAgICAgICAgIGltYWdlOiBhbmltYWwsXHJcbiAgICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKCcuJykpLnJlcGxhY2UoJ18nLCAnICcpLmNhcGl0YWxpemUoKVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5hbmltYWxzKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSBuYW1lID0+IF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoYW5pbWFsID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgMTApO1xyXG5cclxuICAgICRzY29wZS5nZXRTY29yZSA9ICgpID0+IGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAgICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxuICB9KTsiXX0=
