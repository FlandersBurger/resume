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
    });
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
  $scope.getLists(), $scope.setDifficulty = (list, difficulty) => {
    list.difficulty = difficulty, TenThingsSvc.updateList({
      _id: list._id,
      difficulty
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
  }, svc.getLists = function ({
    page,
    sortBy,
    orderBy,
    limit,
    search,
    language,
    categories
  }) {
    var url = "/api/tenthings/lists?" + (limit ? `&limit=${limit}` : "") + (page ? `&page=${page}` : "") + (sortBy ? `&sort_by=${sortBy}` : "") + (orderBy ? `&order_by=${orderBy}` : "") + (language ? `&language=${language}` : "") + (categories.length > 0 ? `&categories=${categories.join(",")}` : "") + `&search=${search}`;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJjb250cm9sbGVycy9hcHAuY3RybC5qcyIsImNvbnRyb2xsZXJzL2FzdGVyb2lkcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvYnViYmxlcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvY2hhcmFkZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3QuY3RybC5qcyIsImNvbnRyb2xsZXJzL2V4cGVyaWVuY2UuY3RybC5qcyIsImNvbnRyb2xsZXJzL2hvYmJpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xlbW1pbmdzLmN0cmwuanMiLCJjb250cm9sbGVycy9saXN0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbG9naW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3Bvc3RzLmN0cmwuanMiLCJjb250cm9sbGVycy9wcmlvcml0aXplLmN0cmwuanMiLCJjb250cm9sbGVycy9wcm9maWxlLmN0cmwuanMiLCJjb250cm9sbGVycy9za2lsbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvdGVudGhpbmdzYWRtaW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2N1cmF0ZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvdGVudGhpbmdzZ2FtZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvd29ya291dC5jdHJsLmpzIiwic2VydmljZXMvY2F0ZWdvcmllcy5zdmMuanMiLCJzZXJ2aWNlcy9lbWFpbC5zdmMuanMiLCJzZXJ2aWNlcy9maWxlLnN2Yy5qcyIsInNlcnZpY2VzL2dhbWUuc3ZjLmpzIiwic2VydmljZXMvbGFuZ3VhZ2Uuc3ZjLmpzIiwic2VydmljZXMvcG9zdHMuc3ZjLmpzIiwic2VydmljZXMvdGVudGhpbmdzLnN2Yy5qcyIsInNlcnZpY2VzL3VzZXIuc3ZjLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9hbmltYWxzLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2dvb2dsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9sb2dvcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9tb3ZpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvc2tlbGV0b25zLmN0cmwuanMiXSwibmFtZXMiOlsiZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwIiwiYmFzZSIsImxldHRlcnMiLCJkb21haW5zIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJTdHJpbmciLCJwcm90b3R5cGUiLCJ2YWx1ZSIsInJlZHVjZSIsInJlc3VsdCIsImxldHRlciIsInJlcGxhY2UiLCJ0aGlzIiwiU1BFQ0lBTF9DSEFSQUNURVJTIiwiUmVnRXhwIiwidG9Mb3dlckNhc2UiLCJyZW1vdmVEaWFjcml0aWNzIiwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMiLCJleHRyYSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJmaW5kIiwicmVwbGFjZVN0cmluZyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQXJyYXkiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImRlY2ltYWxzIiwidG9GaXhlZCIsInNvcnRPYmplY3QiLCJvYmoiLCJkaXJlY3Rpb24iLCJhcnIiLCJrZXkiLCJwdXNoIiwic29ydCIsImEiLCJiIiwib2JqU29ydGVkIiwiZm9yRWFjaCIsIml0ZW0iLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkdXJsU2VydmljZVByb3ZpZGVyIiwiJGxvY2F0aW9uUHJvdmlkZXIiLCJvdGhlcndpc2UiLCJzdHJpY3RNb2RlIiwic3RhdGUiLCJ1cmwiLCJ0ZW1wbGF0ZVVybCIsImNvbnRyb2xsZXIiLCJodG1sNU1vZGUiLCJlbmFibGVkIiwicmVxdWlyZUJhc2UiLCJzZXJ2aWNlIiwiJHJvb3RTY29wZSIsIiR0aW1lb3V0IiwiY29ubmVjdGlvbiIsImNvbm5lY3QiLCJXZWJTb2NrZXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInByb3RvY29sIiwiaG9zdCIsIm9ub3BlbiIsImNvbnNvbGUiLCJsb2ciLCJvbmNsb3NlIiwiZSIsIm9uZXJyb3IiLCJyZWFkeVN0YXRlIiwib25tZXNzYWdlIiwicGF5bG9hZCIsIkpTT04iLCJwYXJzZSIsImRhdGEiLCIkYnJvYWRjYXN0IiwidG9waWMiLCJzZW5kIiwianNvbiIsInN0cmluZ2lmeSIsInJ1biIsIldlYlNvY2tldFN2YyIsImRpcmVjdGl2ZSIsIiRkb2N1bWVudCIsInJlc3RyaWN0Iiwic2NvcGUiLCJjbGlja091dHNpZGUiLCJsaW5rIiwiZWwiLCJhdHRyIiwib24iLCJ0YXJnZXQiLCJjb250YWlucyIsIiRhcHBseSIsIiRwYXJlbnQiLCJzZXRTZWxlY3RlZExpc3QiLCIkZXZhbCIsIiRzdGF0ZSIsIiRjb21waWxlIiwiJGludGVycG9sYXRlIiwiZ2V0U3R5bGUiLCJ0ZW1wbGF0ZVN0eWxlVXJsIiwic3R5bGUiLCJocmVmIiwicmVsIiwibWF0Y2giLCJlbGVtIiwidGVtcGxhdGVTdHlsZXMiLCJodG1sIiwic3RhcnRTeW1ib2wiLCJlbmRTeW1ib2wiLCJhcHBlbmQiLCIkb24iLCJldmVudCIsInRvU3RhdGUiLCJ0b1BhcmFtcyIsImZyb21TdGF0ZSIsImZyb21QYXJhbXMiLCJzdGF0ZXMiLCJuYW1lIiwicGFyZW50IiwiZ2V0Iiwidmlld3MiLCJfIiwidmlldyIsInNwbGl0IiwiZmxhdCIsImluY2x1ZGVzIiwicmV2ZXJzZSIsImdldFN0eWxlcyIsIiRzY29wZSIsIiRsb2NhdGlvbiIsIkxhbmd1YWdlU3ZjIiwiVXNlclN2YyIsImxvZ2luIiwidXNlciIsImxvZ2dlZEluIiwibG9jYWxTdG9yYWdlIiwiX2lkIiwiY3VycmVudFVzZXIiLCIkIiwibG9hZCIsImZhZGVPdXQiLCJmYWRlSW4iLCJjbG9zZXN0IiwidG9nZ2xlQ2xhc3MiLCJjaGVja2VkIiwiZG9jdW1lbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0aGVtZUNvdW50ZXIiLCJ0b2RheSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJmbGlwVGhlbWUiLCJzaG93IiwiaGlkZSIsInNldFRpbWVvdXQiLCJnZXRKU09OIiwic2tpbGxzIiwiZmlsdGVyIiwic2tpbGwiLCJob2JiaWVzIiwiam9icyIsImpvYiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJjaGFyYWRlcyIsImdldFRpbWVTcGFuIiwibGFuZ3VhZ2VzIiwic2VsZWN0ZWRMYW5ndWFnZSIsImdldExhbmd1YWdlIiwic2VsZWN0TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaG92ZXJkaXYiLCJkaXZpZCIsImxlZnQiLCJjbGllbnRYIiwidG9wIiwiY2xpZW50WSIsImdldEVsZW1lbnRCeUlkIiwiY3NzIiwidG9nZ2xlIiwic29jaWFsTWVkaWEiLCJpY29uIiwidGhlbiIsInJlc3BvbnNlIiwiYmlydGhEYXRlIiwibG9hZGluZyIsImxvZ291dCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJjbGVhciIsImNhdGNoIiwiZXJyb3IiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImNhcGl0YWxpemUiLCJHYW1lU3ZjIiwiYW5ub3VuY2UiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiZm9udCIsImZpbGxTdHlsZSIsInRleHRBbGlnbiIsInNob3RzIiwiYXN0ZXJvaWRzIiwicG93ZXJ1cHMiLCJleHBsb3Npb25zIiwibWFwIiwic3BhY2VwaWNzIiwic3BhY2UiLCJwb3dlcnVwVHlwZXMiLCJhbm5vdW5jZW1lbnQiLCJjeWNsZSIsInJvd3MiLCJjb2x1bW5zIiwic2l6ZSIsImltZyIsIkltYWdlIiwiYWN0aXZhdGUiLCJzcGFjZXNoaXAiLCJtYXhTcGVlZCIsImNvb2xkb3duIiwiY29vbGRvd25UaW1lIiwicmFuZ2UiLCJzaGllbGQiLCJleHBsb2RlIiwic3Bhd25Bc3Rlcm9pZHMiLCJwb3dlcnVwIiwiYXJyYXkiLCJzcmMiLCJleHBsb3Npb25JbWFnZSIsImV2YWx1YXRlS2V5cyIsInBsYXlpbmciLCJzaG9vdCIsInJvdGF0aW9uIiwic3BlZWQiLCJzY29yZSIsIlNwYWNlc2hpcCIsImF1dG9TcGF3biIsIndpZHRoIiwiaGVpZ2h0IiwiY2Fubm9uIiwieCIsInkiLCJwb3NpdGlvbiIsImFuZ2xlIiwiaWQiLCJyb3VuZCIsIlNob3QiLCJtb3ZlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImZpbGwiLCJhc3Rlcm9pZCIsImhpdCIsImdhbWVPdmVyIiwiY29zIiwic2luIiwibGlmZXNwYW4iLCJBc3Rlcm9pZCIsImdldEVudHJ5UG9zaXRpb24iLCJyb3RhdGlvblNwZWVkIiwiRXhwbG9zaW9uIiwic2hvdCIsInBvaW50cyIsInNwYXduUG93ZXJ1cCIsIm9iamVjdCIsIlBvd2VydXAiLCJkZWxheSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJjb2x1bW4iLCJyb3ciLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiZ3JpZFgiLCJncmlkWSIsIm9iamVjdDEiLCJvYmplY3QyIiwia2V5cyIsImFtb3VudCIsImhpZ2hzY29yZSIsInNldEhpZ2hzY29yZSIsInJlc2l6ZUNhbnZhcyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlDb2RlIiwid2hpY2giLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3IiwiY2xlYXJSZWN0IiwiZ3JhZGllbnQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsInRhbGx5IiwiZmlsbFRleHQiLCJtZWFzdXJlVGV4dCIsImJhY2tncm91bmRJbWFnZSIsImJ1YmJsZXMiLCJjb2xvcnMiLCJCdWJibGUiLCJyYWRpdXMiLCJleHBhbmRpbmciLCJjaXJjdW1mZXJlbmNlIiwibWF4UmFkaXVzIiwidngiLCJ2eSIsImZpbHRlckJ1YmJsZXMiLCJidWJibGUiLCJzZWxlY3RXb3JkIiwiY2F0ZWdvcnkiLCJ3b3JkIiwiRW1haWxTdmMiLCJvcHRpb25zIiwidGV4dCIsImNvbnRhY3QiLCJlbWFpbCIsInBob25lIiwiYWJvdXQiLCJtZXNzYWdlIiwic2VuZGluZyIsInNlbnQiLCJzdGF0dXMiLCJlcnIiLCJnZXRTa2lsbCIsInNraWxsQ29kZSIsImNvZGUiLCIkd2luZG93IiwiaG9iYnlTZWxlY3RvclZpc2libGUiLCJzZWxlY3RlZEhvYmJ5Iiwic2VsZWN0SG9iYnkiLCJob2JieSIsInNob3dIb2JieSIsImluZGV4IiwiaW1hZ2VzIiwiTEVGVCIsIlJJR0hUIiwibGVtbWluZ3NJbWFnZSIsImRlY29ySW1hZ2UiLCJsZW1taW5ncyIsInN0YXJ0ZWQiLCJhY3Rpb25zIiwid2FsayIsInN0YXJ0IiwiZW5kIiwiaHVoIiwiZmFsbCIsImZseSIsInN0b3AiLCJjbGltYiIsImJ1aWxkIiwicHVuY2giLCJkaWciLCJMZW1taW5nIiwiaW5pdCIsImFjdCIsImFjdGlvbiIsImFuaW1hdGlvbiIsInNjYWxlIiwiaGF0Y2giLCJvcGVuIiwicmVjdCIsIkNhdGVnb3JpZXNTdmMiLCJzaG93Q2F0ZWdvcnkiLCJnZXRDYXRlZ29yaWVzIiwiY2F0ZWdvcmllcyIsInRhc2tzIiwiaiIsInRhc2siLCJzZWxlY3RDYXRlZ29yeSIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWxlY3RlZFRhc2tzIiwic2VsZWN0YWJsZVRhc2tzIiwiZW50ZXJlZENhdGVnb3J5IiwibmV3Q2F0ZWdvcnkiLCJmb3VuZCIsImFkZENhdGVnb3J5IiwibmV3VGFzayIsInNlbGVjdFRhc2siLCJhZGRUYXNrIiwiZW50ZXJlZFRhc2siLCJyZW1vdmVUYXNrIiwidW5zZWxlY3RUYXNrIiwidGFza0xpc3QiLCJzcGxpY2UiLCJpbmRleE9mIiwic3RhcnRQcmlvcml0aXppbmciLCJzZXRQcmlvcml0eUxpc3QiLCJwYXRoIiwiZ2V0UXVlc3Rpb25zIiwiY291bnRlciIsInVpIiwiZmlyZWJhc2V1aSIsIkF1dGhVSSIsInN0YXJ0VUkiLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzIiwiY3JlZGVudGlhbCIsInJlZGlyZWN0VXJsIiwiZ2V0SWRUb2tlbiIsImlkVG9rZW4iLCJhdXRoZW50aWNhdGUiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWxWZXJpZmllZCIsIiRlbWl0IiwibW9kYWwiLCJ0eXBlIiwic2lnbkluRmFpbHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY3JlZCIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwidWlTaG93biIsImRpc3BsYXkiLCJzaWduSW5TdWNjZXNzVXJsIiwic2lnbkluT3B0aW9ucyIsIkdvb2dsZUF1dGhQcm92aWRlciIsIlBST1ZJREVSX0lEIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJzaWduSW5GbG93IiwicmVzZXQiLCIkZmlsdGVyIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJjcmVhdGUiLCJib2R5IiwicG9zdCIsImZldGNoIiwicG9zdHMiLCJnZXRQb3N0IiwidW5zaGlmdCIsInByaW9yaXR5TGlzdCIsImdldFByaW9yaXR5TGlzdCIsInNlbGVjdGVkUXVlc3Rpb24iLCJjdXJyZW50UXVlc3Rpb24iLCJkb25lIiwibWFrZUNob2ljZSIsImNob2ljZSIsImZpcnN0Q2hvaWNlIiwic2Vjb25kQ2hvaWNlIiwiZ2V0QnV0dG9uVmFsdWUiLCJzZWxlY3RRdWVzdGlvbiIsInF1ZXN0aW9uIiwiZ2V0RmlsdGVyZWRQcmlvcml0eUxpc3QiLCJnZXRDaG9pY2VzTWFkZSIsImNob2ljZXNNYWRlIiwiZ2V0QnV0dG9uQ2xhc3MiLCJzaG93Q2hvaWNlcyIsImNoYXJ0Q2xpY2siLCJjaGFydCIsImdldFNlZ21lbnRzQXRFdmVudCIsInNob3dSZXN1bHRzIiwicmVzcG9uc2l2ZSIsInNlZ21lbnRTaG93U3Ryb2tlIiwic2VnbWVudFN0cm9rZUNvbG9yIiwic2VnbWVudFN0cm9rZVdpZHRoIiwicGVyY2VudGFnZUlubmVyQ3V0b3V0IiwiYW5pbWF0aW9uU3RlcHMiLCJhbmltYXRpb25FYXNpbmciLCJhbmltYXRlUm90YXRlIiwiYW5pbWF0ZVNjYWxlIiwibGVnZW5kVGVtcGxhdGUiLCJjaG9pY2VzIiwidm90ZXMiLCJsYWJlbCIsIm9mZnNldCIsImdlbmRlciIsInNleCIsImlkZW50aXR5Iiwic2V4ZXMiLCJpZGVudGl0aWVzIiwiZGF0ZU9wdGlvbnMiLCJtYXhEYXRlIiwibWluRGF0ZSIsImluaXREYXRlIiwiZGF0ZXBpY2tlck1vZGUiLCJwZXJjZW50YWdlIiwic3RhcnRTbGlkZXIiLCJkcmFnU2xpZGVyIiwic3RvcFNsaWRlciIsInVzZXJuYW1lVG9nZ2xlIiwicGFzc3dvcmRUb2dnbGUiLCJ0b2dnbGVVc2VybmFtZSIsIm5ld1VzZXJuYW1lIiwidXNlcm5hbWUiLCJ0b2dnbGVQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwib3JpZ2luYWxCZyIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiY2hhbmdlVXNlcm5hbWUiLCJ1cGRhdGVVc2VyIiwiJHdhdGNoIiwibG9hZENvdW50cmllcyIsIiRxdWVyeSIsImZsYWciLCJ0aWRiaXQiLCJjb3VudHJ5Iiwic2VsZWN0ZWRTa2lsbCIsInNraWxsc1Zpc2libGUiLCJwcm9qZWN0cyIsImxhYmVscyIsImVtcGxveWVyIiwiY29uY2F0IiwiZmlsdGVyZWRQcm9qZWN0cyIsInByb2plY3QiLCJzZXRTZWxlY3RlZFNraWxsIiwiY2hhcnRPcHRpb25zIiwiY3V0b3V0UGVyY2VudGFnZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJ0b29sdGlwcyIsImNoYXJ0U3R5bGUiLCJpbWFnZSIsIlRlblRoaW5nc1N2YyIsImZsYXNoIiwiZWxlbWVudCIsImNvbG9yIiwic2VhcmNoIiwidmFsdWVzIiwia2V5RG93biIsImlzIiwiYWRkVmFsdWUiLCJmb2N1cyIsInNlYXJjaE5hbWUiLCJuZXdJdGVtIiwic2V0Q2F0ZWdvcnlGaWx0ZXIiLCJjYXRlZ29yeUZpbHRlciIsInNldFVzZXJGaWx0ZXIiLCJ1c2VyRmlsdGVyIiwic2V0VXBkYXRlRmlsdGVyIiwidXBkYXRlRmlsdGVyIiwic2V0TGFuZ3VhZ2VGaWx0ZXIiLCJsYW5ndWFnZUZpbHRlciIsImZpbHRlcmVkTGlzdHMiLCJsaXN0cyIsImlzRHluYW1pYyIsImNyZWF0b3IiLCJnZXRMaXN0cyIsImNhdGVnb3J5RmlsdGVycyIsImdldExhbmd1YWdlcyIsImxhbmd1YWdlRmlsdGVycyIsImxpc3QiLCJzZWxlY3RMaXN0IiwibGlzdE9yZGVyIiwiZmllbGQiLCJ2YWx1ZU9yZGVyIiwic29ydGVyIiwic29ydEZpZWxkIiwic29ydExhYmVsIiwiZ2V0TGFuZ3VhZ2VDb3VudCIsImNvdW50IiwiZ2V0Q2F0ZWdvcnlDb3VudCIsImdldFVwZGF0ZUNvdW50IiwidXNlckZpbHRlcnMiLCJBbGwiLCJsaXN0MSIsImxpc3QyIiwidXNlcnMiLCJ1c2VyQ291bnQiLCJnZXRMaXN0Iiwic2VsZWN0ZWRMaXN0IiwiZ2V0Q2F0ZWdvcnlDbGFzcyIsInRvZ2dsZUNhdGVnb3J5IiwiY2F0ZWdvcnlJbmRleCIsIm5vbkVuZ2xpc2hJbmRleCIsImFkZExpc3QiLCJjdXJyZW50TGFuZ3VhZ2UiLCJhbnN3ZXJzIiwiaGFzRHVwbGljYXRlIiwic29tZSIsImFuc3dlciIsInJlbW92ZUFsbEJ1dExldHRlcnMiLCJhbGVydCIsImJsdXJiIiwic2F2ZUxpc3QiLCJyZXBvcnRMaXN0IiwicmVwb3J0ZWQiLCJzYXZpbmciLCJkZWxldGVMaXN0IiwiY29uZmlybSIsImxpc3RCdXR0b25DbGFzcyIsImJsdXJicyIsImRlc2NyaXB0aW9uIiwiZ2V0Qmx1cmJzIiwiZ2V0dGluZ0JsdXJicyIsImFkbWluIiwiZ2V0VXNlcnMiLCJvcmRlciIsIm9yZGVyQnkiLCJnZXRRdWV1ZSIsInF1ZXVlIiwiZ2V0UGF1c2UiLCJwYXVzZWQiLCJ0b2dnbGVCYW4iLCJ0b2dnbGVQYXVzZSIsInBhZ2UiLCJ1bmRlZmluZWQiLCJleGhhdXN0ZWQiLCJyZXNldENhdGVnb3J5RmlsdGVyIiwiZ2V0TW9yZUxpc3RzIiwiYXN5bmMiLCJ0b2dnbGVDYXRlZ29yeUZpbHRlciIsInNvcnRCeSIsImxpbWl0IiwibmV4dFBhZ2UiLCJzZXREaWZmaWN1bHR5IiwiZGlmZmljdWx0eSIsInVwZGF0ZUxpc3QiLCIkc3RhdGVQYXJhbXMiLCJnYW1lIiwiZ2V0R2FtZSIsInRpbWVSZW1haW5pbmciLCJ0aW1lRXhlcmNpc2luZyIsInRpbWVSZXN0aW5nIiwicmVzdCIsImV4ZXJjaXNpbmciLCJzb3VuZHMiLCJBdWRpbyIsIm9mZiIsInN3aXRjaCIsImV4ZXJjaXNlcyIsInByb2dyZXNzIiwid29ya291dCIsImV4Y2VyY2lzZVRpbWUiLCJjbGVhckludGVydmFsIiwidGltZXIiLCJleGVyY2lzZSIsInNldEludGVydmFsIiwiY3VycmVudEV4ZXJjaXNlIiwicGxheSIsIiRodHRwIiwic3ZjIiwiZ2V0VGFza3MiLCJ0IiwibSIsInNodWZmbGUiLCJnZXRJbWFnZXMiLCJmb2xkZXIiLCJnZXRTb3VuZHMiLCJnZXRIaWdoc2NvcmUiLCJqb2luIiwicHV0IiwiZGVsZXRlIiwiZ2V0VXNlciIsInNldFRva2VuIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJjcmVhdGVVc2VyIiwiRmlsZVN2YyIsImFuaW1hbHMiLCJhbmltYWwiLCJzb3VuZCIsInN1YnN0cmluZyIsImdldFJhbmRvbUFuaW1hbHMiLCJndWVzcyIsImdldFNjb3JlIiwiaXNTY29yZVZpc2libGUiXSwibWFwcGluZ3MiOiJBQUFBLElBQUFBLDJCQUFBQSxHQUFBLENBQ0E7SUFDQUMsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLENBQUE7RUFHQUMsT0FBQUEsR0FBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsTUFBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsQ0FBQTtBQUdBQyxNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGtCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBUiwyQkFBQUEsQ0FBQVMsTUFBQUEsQ0FBQSxDQUFBQyxNQUFBQSxFQUFBQyxNQUFBQSxLQUNBRCxNQUFBQSxDQUFBRSxPQUFBQSxDQUFBRCxNQUFBQSxDQUFBVCxPQUFBQSxFQUFBUyxNQUFBQSxDQUFBVixJQUFBQSxDQUFBQSxFQUNBWSxJQUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUE7QUFHQSxNQUFBQyxrQkFBQUEsR0FBQSxxQ0FBQTtBQUVBVixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLHlCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBRCxPQUFBQSxDQUFBLElBQUFHLE1BQUFBLENBQUEsSUFBQUQsa0JBQUFBLEdBQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsRUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQVYsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxxQkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUcsV0FBQUEsRUFBQUEsQ0FBQUMsZ0JBQUFBLEVBQUFBLENBQUFDLHVCQUFBQSxFQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWQsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxTQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBVyxLQUFBQSxFQUFBQTtJQUNBLE9BQUFOLElBQUFBLENBQUFELE9BQUFBLENBQUEsSUFBQUcsTUFBQUEsQ0FBQSxLQUFBRCxrQkFBQUEsR0FBQUssS0FBQUEsR0FBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxHQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBZixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFlBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFPLE1BQUFBLENBQUEsQ0FBQSxDQUFBLENBQUFDLFdBQUFBLEVBQUFBLEdBQUFSLElBQUFBLENBQUFTLEtBQUFBLENBQUEsQ0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWxCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsWUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLENBQUFBLE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsZUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxDQUFBLENBQUFBLE9BQUFBLENBQUEsR0FBQSxFQUFBLE1BQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsY0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQWUsSUFBQUEsRUFBQVgsT0FBQUEsRUFBQUE7SUFFQSxLQURBLElBQUFZLGFBQUFBLEdBQUFYLElBQUFBLEVBQ0FZLENBQUFBLEdBQUEsQ0FBQSxFQUFBQSxDQUFBQSxHQUFBRixJQUFBQSxDQUFBRyxNQUFBQSxFQUFBRCxDQUFBQSxFQUFBQSxFQUNBRCxhQUFBQSxHQUFBQSxhQUFBQSxDQUFBWixPQUFBQSxDQUFBVyxJQUFBQSxDQUFBRSxDQUFBQSxDQUFBQSxFQUFBYixPQUFBQSxDQUFBYSxDQUFBQSxDQUFBQSxDQUFBQTtJQUVBLE9BQUFELGFBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBcEIsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSxVQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFB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QUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxRQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsWUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsWUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsYUFBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxNQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxPQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGlCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG9CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxrQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsbUJBQUE7SUFDQUUsVUFBQUEsRUFBQSxxQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsZ0JBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsbUJBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsWUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxpQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsZ0JBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxtQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxVQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxXQUFBO0lBQ0FFLFVBQUFBLEVBQUEsY0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLEVBR0FMLGlCQUFBQSxDQUFBTyxTQUFBQSxDQUFBO0lBQ0FDLE9BQUFBLEVBQUFBLENBQUEsQ0FBQTtJQUNBQyxXQUFBQSxFQUFBQSxDQUFBO0VBQUEsQ0FBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDaEpBZixPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBZSxPQUFBQSxDQUFBLGNBQUEsRUFBQSxVQUFBQyxVQUFBQSxFQUFBQyxRQUFBQSxFQUFBQTtFQVNBLElBQUFDLFVBQUFBO0lBQ0FDLE9BQUFBLEdBQUEsU0FBQUEsQ0FBQSxFQUFBO01BQUEsQ0FDQUQsVUFBQUEsR0FBQSxJQUFBRSxTQUFBQSxDQVRBLFFBQUEsS0FBQUMsTUFBQUEsQ0FBQUMsUUFBQUEsQ0FBQUMsUUFBQUEsR0FDQSxRQUFBLEdBQUFGLE1BQUFBLENBQUFDLFFBQUFB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LEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUMsUUFBQUEsSUFBQSxHQUNBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQS9HLElBQUFBLEVBQUEsVUFBQTtNQUNBc0csWUFBQUEsRUFBQSxZQUFBO01BQ0FDLEtBQUFBLEVBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBO1FBQ0FDLE9BQUFBLEVBQUEsQ0FBQTtRQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBL00sQ0FBQUEsRUFBQSxDQUFBO1FBQ0FTLFNBQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUF1TSxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO01BQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7UUFDQUEsU0FBQUEsQ0FBQUUsUUFBQUEsR0FBQSxDQUFBLEtBQ0FGLFNBQUFBLENBQUFHLFlBQUFBLElBQUEsQ0FBQSxDQUVBO01BQUE7SUFBQSxDQUFBLEVBRUE7TUFDQWpILElBQUFBLEVBQUEsT0FBQTtNQUNBc0csWUFBQUEsRUFBQSxnQkFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7UUFDQS9NLENBQUFBLEVBQUEsQ0FBQTtRQUNBUyxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBdU0sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0FBLFNBQUFBLENBQUFJLEtBQUFBLElBQUEsQ0FDQTtNQUFBO0lBQUEsQ0FBQSxFQUVBO01BQ0FsSCxJQUFBQSxFQUFBLFFBQUE7TUFDQXNHLFlBQUFBLEVBQUEsUUFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7UUFDQS9NLENBQUFBLEVBQUEsQ0FBQTtRQUNBUyxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBdU0sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0FBLFNBQUFBLENBQUFLLE1BQUFBLEdBQUFBLENBQUEsQ0FDQTtNQUFBO0lBQUEsQ0FBQSxFQUVBO01BQ0FuSCxJQUFBQSxFQUFBLE1BQUE7TUFDQXNHLFlBQUFBLEVBQUEsTUFBQTtNQUNBQyxLQUFBQSxFQUFBO1FBQ0FDLElBQUFBLEVBQUEsQ0FBQTtRQUNBQyxPQUFBQSxFQUFBLENBQUE7UUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7UUFDQS9NLENBQUFBLEVBQUEsQ0FBQTtRQUNBUyxTQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBdU0sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtNQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO1FBQ0EsS0FBQSxJQUFBbk4sQ0FBQUEsSUFBQW9NLFNBQUFBLEVBQ0FBLFNBQUFBLENBQUFwTSxDQUFBQSxDQUFBQSxDQUFBeU4sT0FBQUEsRUFBQUE7UUFFQUMsY0FBQUEsQ0FBQSxDQUFBLENBQ0E7TUFBQTtJQUFBLENBQUEsQ0FBQTtFQVVBaEIsWUFBQUEsQ0FBQXpMLE9BQUFBLENBQUEsVUFBQTBNLE9BQUFBLEVBQUEzTixDQUFBQSxFQUFBNE4sS0FBQUEsRUFBQUE7SUFDQUEsS0FBQUEsQ0FBQTVOLENBQUFBLENBQUFBLENBQUFnTixHQUFBQSxDQUFBYSxHQUFBQSxHQUFBLFlBQUEsR0FBQUYsT0FBQUEsQ0FBQXRILElBQUFBLEdBQUEsTUFDQTtFQUFBLENBQUEsQ0FBQTtFQUVBLElBK1JBOEcsU0FBQUE7SUEvUkFXLGNBQUFBLEdBQUEsSUFBQWIsS0FBQUE7RUFZQSxTQUFBYyxZQUFBQSxDQUFBQSxFQUFBQTtJQUNBL0csTUFBQUEsQ0FBQWdILE9BQUFBLElBQ0F6QixHQUFBQSxDQUFBLEVBQUEsQ0FBQSxJQUVBLENBQUEsS0FBQVksU0FBQUEsQ0FBQUUsUUFBQUEsSUFDQUYsU0FBQUEsQ0FBQWMsS0FBQUEsRUFBQUEsRUFHQTFCLEdBQUFBLENBQUEsRUFBQSxDQUFBLEtBRUEsQ0FBQSxLQUFBWSxTQUFBQSxDQUFBZSxRQUFBQSxHQUNBZixTQUFBQSxDQUFBZSxRQUFBQSxHQUFBLEdBQUEsR0FFQWYsU0FBQUEsQ0FBQWUsUUFBQUEsSUFBQSxDQUFBLENBQUEsRUFHQTNCLEdBQUFBLENBQUEsRUFBQSxDQUFBLEtBRUEsR0FBQSxLQUFBWSxTQUFBQSxDQUFBZSxRQUFBQSxHQUNBZixTQUFBQSxDQUFBZSxRQUFBQSxHQUFBLENBQUEsR0FFQWYsU0FBQUEsQ0FBQWUsUUFBQUEsSUFBQSxDQUFBLENBQUEsRUFHQTNCLEdBQUFBLENBQUEsRUFBQSxDQUFBLEdBRUFZLFNBQUFBLENBQUFnQixLQUFBQSxJQUFBaEIsU0FBQUEsQ0FBQUMsUUFBQUEsS0FDQUQsU0FBQUEsQ0FBQWdCLEtBQUFBLElBQUEsQ0FBQSxDQUFBLEdBR0FoQixTQUFBQSxDQUFBZ0IsS0FBQUEsR0FBQSxDQUFBLElBQ0FoQixTQUFBQSxDQUFBZ0IsS0FBQUEsRUFBQUEsRUFHQTVCLEdBQUFBLENBQUEsRUFBQSxDQUFBLElBRUFZLFNBQUFBLENBQUFnQixLQUFBQSxHQUFBLENBQUEsS0FDQWhCLFNBQUFBLENBQUFnQixLQUFBQSxJQUFBLENBQUEsQ0FBQSxJQUlBNUIsR0FBQUEsQ0FBQSxFQUFBLENBQUEsS0E2T0F2RixNQUFBQSxDQUFBZ0gsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0FoSCxNQUFBQSxDQUFBb0gsS0FBQUEsR0FBQSxDQUFBLEVBQ0EzQixLQUFBQSxHQUFBaEUsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQUQsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQWdFLFNBQUFBLENBQUFBLEVBQ0F4RixNQUFBQSxDQUFBckMsTUFBQUEsRUFBQUEsRUFDQXdJLFNBQUFBLEdBQUEsSUFBQWtCLFNBQUFBLElBQ0FySCxNQUFBQSxDQUFBb0gsS0FBQUEsR0FBQSxDQUFBLEVBQ0FWLGNBQUFBLENBQUEsQ0FBQSxDQUFBLEVBQ0FZLFNBQUFBLEVBQUFBLENBaFBBO0VBQUE7RUFFQSxTQUFBRCxTQUFBQSxDQUFBQSxFQUFBQTtJQUNBalAsSUFBQUEsQ0FBQW1QLEtBQUFBLEdBQUEsRUFBQSxFQUNBblAsSUFBQUEsQ0FBQW9QLE1BQUFBLEdBQUEsRUFBQSxFQUNBcFAsSUFBQUEsQ0FBQW9PLE1BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBcE8sSUFBQUEsQ0FBQW1PLEtBQUFBLEdBQUEsRUFBQSxFQUNBbk8sSUFBQUEsQ0FBQXFQLE1BQUFBLEdBQUE7TUFDQUMsQ0FBQUEsRUFBQXRQLElBQUFBLENBQUFtUCxLQUFBQSxHQUFBLENBQUEsR0FBQSxHQUFBO01BQ0FJLENBQUFBLEVBQUF2UCxJQUFBQSxDQUFBb1AsTUFBQUEsR0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBcFAsSUFBQUEsQ0FBQW9QO0lBQUFBLENBQUFBLEVBRUFwUCxJQUFBQSxDQUFBaU8sUUFBQUEsR0FBQSxDQUFBLEVBQ0FqTyxJQUFBQSxDQUFBa08sWUFBQUEsR0FBQSxFQUFBLEVBQ0FsTyxJQUFBQSxDQUFBd1AsUUFBQUEsR0FBQSxDQUNBL0MsTUFBQUEsQ0FBQTBDLEtBQUFBLEdBQUEsQ0FBQSxHQUFBblAsSUFBQUEsQ0FBQW1QLEtBQUFBLEdBQUEsQ0FBQSxFQUNBMUMsTUFBQUEsQ0FBQTJDLE1BQUFBLEdBQUEsQ0FBQSxHQUFBcFAsSUFBQUEsQ0FBQW9QLE1BQUFBLEdBQUEsQ0FBQSxDQUFBLEVBRUFwUCxJQUFBQSxDQUFBNE4sR0FBQUEsR0FBQSxJQUFBQyxLQUFBQSxJQUNBN04sSUFBQUEsQ0FBQTROLEdBQUFBLENBQUFhLEdBQUFBLEdBQUEseUJBQUEsRUFDQXpPLElBQUFBLENBQUErTyxLQUFBQSxHQUFBLENBQUEsRUFDQS9PLElBQUFBLENBQUFnTyxRQUFBQSxHQUFBLEdBQUEsRUFDQWhPLElBQUFBLENBQUF5UCxLQUFBQSxHQUFBLENBQUEsRUFDQXpQLElBQUFBLENBQUE4TyxRQUFBQSxHQUFBLENBQUEsRUFFQTlPLElBQUFBLENBQUE2TyxLQUFBQSxHQUFBLFlBQUE7TUFDQTdPLElBQUFBLENBQUFpTyxRQUFBQSxHQUFBak8sSUFBQUEsQ0FBQWtPLFlBQUFBO01BQ0EsSUFBQXdCLEVBQUFBLEdBQUFyRyxJQUFBQSxDQUFBc0csS0FBQUEsQ0FBQSxHQUFBLEdBQUF0RyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxDQUFBQTtNQUNBMkQsS0FBQUEsQ0FBQTJDLEVBQUFBLENBQUFBLEdBQUEsSUFBQUUsSUFBQUEsQ0FBQUYsRUFBQUEsRUFBQTFQLElBQUFBLENBQ0E7SUFBQSxDQUFBLEVBRUFBLElBQUFBLENBQUE2UCxJQUFBQSxHQUFBLFlBQUE7TUFVQSxLQUFBLElBQUFqUCxDQUFBQSxJQVRBWixJQUFBQSxDQUFBb08sTUFBQUEsS0FDQTFCLEdBQUFBLENBQUFvRCxTQUFBQSxFQUFBQSxFQUNBcEQsR0FBQUEsQ0FBQXFELEdBQUFBLENBQUEvUCxJQUFBQSxDQUFBd1AsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXhQLElBQUFBLENBQUFtUCxLQUFBQSxHQUFBLENBQUEsRUFBQW5QLElBQUFBLENBQUF3UCxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBeFAsSUFBQUEsQ0FBQW9QLE1BQUFBLEdBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBL0YsSUFBQUEsQ0FBQTJHLEVBQUFBLENBQUFBLEVBQ0F0RCxHQUFBQSxDQUFBRyxTQUFBQSxHQUFBLHVCQUFBLEVBQ0FILEdBQUFBLENBQUF1RCxXQUFBQSxHQUFBLHVCQUFBLEVBQ0F2RCxHQUFBQSxDQUFBd0QsU0FBQUEsR0FBQSxDQUFBLEVBQ0F4RCxHQUFBQSxDQUFBeUQsTUFBQUEsRUFBQUEsRUFDQXpELEdBQUFBLENBQUEwRCxJQUFBQSxFQUFBQSxDQUFBQSxFQUVBcEQsU0FBQUEsRUFBQTtRQUNBLElBQUFxRCxRQUFBQSxHQUFBckQsU0FBQUEsQ0FBQXBNLENBQUFBLENBQUFBO1FBQ0EsSUFBQTBQLEdBQUFBLENBQUFELFFBQUFBLEVBQUFyUSxJQUFBQSxDQUFBQSxFQUFBO1VBQ0EsSUFBQSxDQUFBQSxJQUFBQSxDQUFBb08sTUFBQUEsRUFJQSxPQUFBbUMsUUFBQUEsRUFBQUE7VUFIQXZRLElBQUFBLENBQUFvTyxNQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQWlDLFFBQUFBLENBQUFoQyxPQUFBQSxFQUlBO1FBQUE7TUFDQTtNQUNBck8sSUFBQUEsQ0FBQXlQLEtBQUFBLEdBQUF6UCxJQUFBQSxDQUFBOE8sUUFBQUEsRUFDQTlPLElBQUFBLENBQUFpTyxRQUFBQSxHQUFBLENBQUEsSUFDQWpPLElBQUFBLENBQUFpTyxRQUFBQSxFQUFBQSxFQUVBNEIsSUFBQUEsQ0FBQTdQLElBQUFBLENBQ0E7SUFBQSxDQUNBO0VBQUE7RUFFQSxTQUFBNFAsSUFBQUEsQ0FBQUYsRUFBQUEsRUFBQTNCLFNBQUFBLEVBQUFBO0lBQ0EvTixJQUFBQSxDQUFBMFAsRUFBQUEsR0FBQUEsRUFBQUEsRUFDQTFQLElBQUFBLENBQUF3UCxRQUFBQSxHQUFBLENBQ0F6QixTQUFBQSxDQUFBeUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXpCLFNBQUFBLENBQUFzQixNQUFBQSxDQUFBQyxDQUFBQSxHQUFBdkIsU0FBQUEsQ0FBQXNCLE1BQUFBLENBQUFDLENBQUFBLEdBQUFqRyxJQUFBQSxDQUFBbUgsR0FBQUEsQ0FBQUEsQ0FBQXpDLFNBQUFBLENBQUFlLFFBQUFBLEdBQUEsRUFBQSxJQUFBekYsSUFBQUEsQ0FBQTJHLEVBQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FqQyxTQUFBQSxDQUFBeUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXpCLFNBQUFBLENBQUFzQixNQUFBQSxDQUFBRSxDQUFBQSxHQUFBeEIsU0FBQUEsQ0FBQXNCLE1BQUFBLENBQUFFLENBQUFBLEdBQUFsRyxJQUFBQSxDQUFBb0gsR0FBQUEsQ0FBQUEsQ0FBQTFDLFNBQUFBLENBQUFlLFFBQUFBLEdBQUEsRUFBQSxJQUFBekYsSUFBQUEsQ0FBQTJHLEVBQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsRUFFQWhRLElBQUFBLENBQUFtUCxLQUFBQSxHQUFBLENBQUEsRUFDQW5QLElBQUFBLENBQUFvUCxNQUFBQSxHQUFBLEVBQUEsRUFDQXBQLElBQUFBLENBQUF5UCxLQUFBQSxHQUFBMUIsU0FBQUEsQ0FBQTBCLEtBQUFBLEVBQ0F6UCxJQUFBQSxDQUFBOE8sUUFBQUEsR0FBQWYsU0FBQUEsQ0FBQWUsUUFBQUEsRUFDQTlPLElBQUFBLENBQUErTyxLQUFBQSxHQUFBaEIsU0FBQUEsQ0FBQWdCLEtBQUFBLEdBQUEsR0FBQSxFQUNBL08sSUFBQUEsQ0FBQTBRLFFBQUFBLEdBQUEzQyxTQUFBQSxDQUFBSSxLQUFBQSxFQUNBbk8sSUFBQUEsQ0FBQTROLEdBQUFBLEdBQUEsSUFBQUMsS0FBQUEsSUFDQTdOLElBQUFBLENBQUE0TixHQUFBQSxDQUFBYSxHQUFBQSxHQUFBLG9CQUFBLEVBRUF6TyxJQUFBQSxDQUFBNlAsSUFBQUEsR0FBQSxZQUFBO01BQ0E3UCxJQUFBQSxDQUFBMFEsUUFBQUEsRUFBQUEsRUFDQWIsSUFBQUEsQ0FBQTdQLElBQUFBLENBQ0E7SUFBQSxDQUNBO0VBQUE7RUFFQSxTQUFBMlEsUUFBQUEsQ0FBQWpCLEVBQUFBLEVBQUFBO0lBQ0ExUCxJQUFBQSxDQUFBMFAsRUFBQUEsR0FBQUEsRUFBQUEsRUFDQTFQLElBQUFBLENBQUFtUCxLQUFBQSxHQUFBLEVBQUEsR0FBQTlGLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUEsRUFBQSxFQUNBcEosSUFBQUEsQ0FBQW9QLE1BQUFBLEdBQUFwUCxJQUFBQSxDQUFBbVAsS0FBQUEsRUFDQW5QLElBQUFBLENBQUF3UCxRQUFBQSxHQUFBb0IsZ0JBQUFBLENBQUE1USxJQUFBQSxDQUFBbVAsS0FBQUEsRUFBQW5QLElBQUFBLENBQUFvUCxNQUFBQSxDQUFBQSxFQUNBcFAsSUFBQUEsQ0FBQXlQLEtBQUFBLEdBQUEsR0FBQSxHQUFBcEcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsRUFDQXBKLElBQUFBLENBQUE4TyxRQUFBQSxHQUFBLEdBQUEsR0FBQXpGLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEVBQ0FwSixJQUFBQSxDQUFBNlEsYUFBQUEsR0FBQSxDQUFBLEdBQUF4SCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBLENBQUEsRUFDQXBKLElBQUFBLENBQUErTyxLQUFBQSxHQUFBLEdBQUEsR0FBQTFGLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUEsQ0FBQSxFQUNBcEosSUFBQUEsQ0FBQTROLEdBQUFBLEdBQUEsSUFBQUMsS0FBQUEsSUFDQTdOLElBQUFBLENBQUE0TixHQUFBQSxDQUFBYSxHQUFBQSxHQUFBLG9CQUFBLElBQUFwRixJQUFBQSxDQUFBc0csS0FBQUEsQ0FBQSxDQUFBLEdBQUF0RyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxDQUFBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLE1BQUEsRUFFQXBKLElBQUFBLENBQUFxTyxPQUFBQSxHQUFBLFlBQUE7TUFFQSxPQURBbkIsVUFBQUEsQ0FBQWxOLElBQUFBLENBQUEwUCxFQUFBQSxDQUFBQSxHQUFBLElBQUFvQixTQUFBQSxDQUFBOVEsSUFBQUEsQ0FBQUEsRUFBQUEsT0FDQWdOLFNBQUFBLENBQUFoTixJQUFBQSxDQUFBMFAsRUFBQUEsQ0FDQTtJQUFBLENBQUEsRUFFQTFQLElBQUFBLENBQUE2UCxJQUFBQSxHQUFBLFlBQUE7TUFPQSxLQUFBLElBQUFqUCxDQUFBQSxJQU5BWixJQUFBQSxDQUFBOE8sUUFBQUEsSUFBQTlPLElBQUFBLENBQUE2USxhQUFBQSxFQUNBN1EsSUFBQUEsQ0FBQThPLFFBQUFBLEdBQUEsR0FBQSxHQUNBOU8sSUFBQUEsQ0FBQThPLFFBQUFBLEdBQUE5TyxJQUFBQSxDQUFBOE8sUUFBQUEsR0FBQSxHQUFBLEdBQ0E5TyxJQUFBQSxDQUFBOE8sUUFBQUEsR0FBQSxDQUFBLEtBQ0E5TyxJQUFBQSxDQUFBOE8sUUFBQUEsR0FBQSxHQUFBLEdBQUE5TyxJQUFBQSxDQUFBOE8sUUFBQUEsQ0FBQUEsRUFFQS9CLEtBQUFBLEVBQUE7UUFDQSxJQUFBZ0UsSUFBQUEsR0FBQWhFLEtBQUFBLENBQUFuTSxDQUFBQSxDQUFBQTtRQUNBLElBQUEwUCxHQUFBQSxDQUFBUyxJQUFBQSxFQUFBL1EsSUFBQUEsQ0FBQUEsRUFBQTtVQUNBQSxJQUFBQSxDQUFBcU8sT0FBQUEsRUFBQUE7VUFDQSxJQUFBMkMsTUFBQUEsR0FBQTNILElBQUFBLENBQUFDLEtBQUFBLENBQUFBLENBQUF5SCxJQUFBQSxDQUFBaEMsS0FBQUEsR0FBQSxHQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQS9PLElBQUFBLENBQUFtUCxLQUFBQSxDQUFBQTtVQUNBOUYsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQUEsQ0FBQTBILE1BQUFBLEdBQUFwSixNQUFBQSxDQUFBb0gsS0FBQUEsSUFBQSxHQUFBLENBQUEsR0FBQTNGLElBQUFBLENBQUFDLEtBQUFBLENBQUExQixNQUFBQSxDQUFBb0gsS0FBQUEsR0FBQSxHQUFBLENBQUEsSUFDQWlDLFlBQUFBLEVBQUFBLEVBRUFySixNQUFBQSxDQUFBb0gsS0FBQUEsSUFBQWdDLE1BQUFBLEVBQ0FwSixNQUFBQSxDQUFBckMsTUFBQUEsRUFBQUEsRUFBQUEsT0FDQXdILEtBQUFBLENBQUFuTSxDQUFBQSxDQUNBO1FBQUE7TUFDQTtNQUNBaVAsSUFBQUEsQ0FBQTdQLElBQUFBLENBQ0E7SUFBQSxDQUNBO0VBQUE7RUFFQSxTQUFBOFEsU0FBQUEsQ0FBQUksTUFBQUEsRUFBQUE7SUFDQWxSLElBQUFBLENBQUF3UCxRQUFBQSxHQUFBLENBQUEwQixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQTBCLE1BQUFBLENBQUExQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQ0F4UCxJQUFBQSxDQUFBbVAsS0FBQUEsR0FBQStCLE1BQUFBLENBQUEvQixLQUFBQSxFQUNBblAsSUFBQUEsQ0FBQW9QLE1BQUFBLEdBQUE4QixNQUFBQSxDQUFBOUIsTUFBQUEsRUFDQXBQLElBQUFBLENBQUErTyxLQUFBQSxHQUFBLENBQUEsRUFDQS9PLElBQUFBLENBQUF5UCxLQUFBQSxHQUFBLEdBQUEsR0FBQXBHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEVBQ0FwSixJQUFBQSxDQUFBd04sS0FBQUEsR0FBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUE7TUFDQUMsT0FBQUEsRUFBQSxDQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO01BQ0EvTSxDQUFBQSxFQUFBLENBQUE7TUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFFQXJCLElBQUFBLENBQUEwUSxRQUFBQSxHQUFBLEVBQUEsRUFDQTFRLElBQUFBLENBQUE0TixHQUFBQSxHQUFBYyxjQUFBQSxFQUVBMU8sSUFBQUEsQ0FBQTZQLElBQUFBLEdBQUEsWUFBQTtNQUNBN1AsSUFBQUEsQ0FBQTBRLFFBQUFBLEVBQUFBLEVBQ0FiLElBQUFBLENBQUE3UCxJQUFBQSxDQUFBQSxFQUNBQSxJQUFBQSxDQUFBd04sS0FBQUEsQ0FBQW5NLFNBQUFBLEdBQ0FyQixJQUFBQSxDQUFBd04sS0FBQUEsQ0FBQTVNLENBQUFBLEVBQUFBLEdBRUFaLElBQUFBLENBQUF3TixLQUFBQSxDQUFBNU0sQ0FBQUEsRUFFQTtJQUFBLENBQ0E7RUFBQTtFQUVBLFNBQUF1USxPQUFBQSxDQUFBekIsRUFBQUEsRUFBQUE7SUFDQTFQLElBQUFBLENBQUEwUCxFQUFBQSxHQUFBQSxFQUFBQSxFQUNBMVAsSUFBQUEsQ0FBQXVPLE9BQUFBLEdBQUFqQixZQUFBQSxDQUFBakUsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQUQsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQWtFLFlBQUFBLENBQUF6TSxNQUFBQSxDQUFBQSxDQUFBQSxFQUNBYixJQUFBQSxDQUFBd04sS0FBQUEsR0FBQXhOLElBQUFBLENBQUF1TyxPQUFBQSxDQUFBZixLQUFBQSxFQUNBeE4sSUFBQUEsQ0FBQTBRLFFBQUFBLEdBQUEsR0FBQSxFQUNBMVEsSUFBQUEsQ0FBQXdOLEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEzTixJQUFBQSxDQUFBd04sS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsSUFDQTNOLElBQUFBLENBQUFvUCxNQUFBQSxHQUFBLEVBQUEsRUFDQXBQLElBQUFBLENBQUFtUCxLQUFBQSxHQUFBOUYsSUFBQUEsQ0FBQXNHLEtBQUFBLENBQUEzUCxJQUFBQSxDQUFBb1AsTUFBQUEsR0FBQXBQLElBQUFBLENBQUF3TixLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBM04sSUFBQUEsQ0FBQXdOLEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FFQTNOLElBQUFBLENBQUFtUCxLQUFBQSxHQUFBLEVBQUEsRUFDQW5QLElBQUFBLENBQUFvUCxNQUFBQSxHQUFBL0YsSUFBQUEsQ0FBQXNHLEtBQUFBLENBQUEzUCxJQUFBQSxDQUFBbVAsS0FBQUEsR0FBQW5QLElBQUFBLENBQUF3TixLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBM04sSUFBQUEsQ0FBQXdOLEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUVBM04sSUFBQUEsQ0FBQXdQLFFBQUFBLEdBQUFvQixnQkFBQUEsQ0FBQTVRLElBQUFBLENBQUFtUCxLQUFBQSxFQUFBblAsSUFBQUEsQ0FBQW9QLE1BQUFBLENBQUFBLEVBQ0FwUCxJQUFBQSxDQUFBNE4sR0FBQUEsR0FBQTVOLElBQUFBLENBQUF1TyxPQUFBQSxDQUFBWCxHQUFBQSxFQUNBNU4sSUFBQUEsQ0FBQXlQLEtBQUFBLEdBQUEsR0FBQSxHQUFBcEcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsRUFDQXBKLElBQUFBLENBQUErTyxLQUFBQSxHQUFBLEdBQUEsR0FBQTFGLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUEsRUFBQTtJQUNBLElBQUFnSSxLQUFBQSxHQUFBLENBQUE7SUFDQXBSLElBQUFBLENBQUE2UCxJQUFBQSxHQUFBLFlBQUE7TUFDQSxPQUFBN1AsSUFBQUEsQ0FBQTBRLFFBQUFBLElBQUEsQ0FBQSxHQUFBLE9BQ0F6RCxRQUFBQSxDQUFBak4sSUFBQUEsQ0FBQTBQLEVBQUFBLENBQUFBLEdBRUFZLEdBQUFBLENBQUF2QyxTQUFBQSxFQUFBL04sSUFBQUEsQ0FBQUEsSUFDQTRILE1BQUFBLENBQUE0RSxRQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQTVFLE1BQUFBLENBQUEyRixZQUFBQSxHQUFBdk4sSUFBQUEsQ0FBQXVPLE9BQUFBLENBQUFoQixZQUFBQSxFQUNBM0YsTUFBQUEsQ0FBQXJDLE1BQUFBLEVBQUFBLEVBQ0FtRSxVQUFBQSxDQUFBLFlBQUE7UUFDQTlCLE1BQUFBLENBQUE0RSxRQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQTVFLE1BQUFBLENBQUFyQyxNQUFBQSxFQUNBO01BQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQSxFQUNBdkYsSUFBQUEsQ0FBQXVPLE9BQUFBLENBQUFULFFBQUFBLENBQUFDLFNBQUFBLENBQUFBLEVBQUFBLE9BQ0FkLFFBQUFBLENBQUFqTixJQUFBQSxDQUFBMFAsRUFBQUEsQ0FBQUEsS0FFQTFQLElBQUFBLENBQUEwUSxRQUFBQSxFQUFBQSxFQUNBYixJQUFBQSxDQUFBN1AsSUFBQUEsQ0FBQUEsRUFBQUEsTUFDQW9SLEtBQUFBLElBQUEsQ0FBQSxJQUNBcFIsSUFBQUEsQ0FBQXdOLEtBQUFBLENBQUFuTSxTQUFBQSxHQUNBckIsSUFBQUEsQ0FBQXdOLEtBQUFBLENBQUE1TSxDQUFBQSxFQUFBQSxHQUVBWixJQUFBQSxDQUFBd04sS0FBQUEsQ0FBQTVNLENBQUFBLEVBQUFBLEVBRUF3USxLQUFBQSxHQUFBLENBQUEsSUFFQUEsS0FBQUEsRUFBQUEsQ0FBQUEsQ0FFQTtJQUFBLENBQ0E7RUFBQTtFQUVBLFNBQUF2QixJQUFBQSxDQUFBcUIsTUFBQUEsRUFBQUE7SUFpQkEsSUFoQkFBLE1BQUFBLENBQUExQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBMEIsTUFBQUEsQ0FBQW5DLEtBQUFBLEdBQUEsR0FBQSxHQUFBMUYsSUFBQUEsQ0FBQW1ILEdBQUFBLENBQUFBLENBQUFVLE1BQUFBLENBQUF6QixLQUFBQSxHQUFBLEVBQUEsSUFBQXBHLElBQUFBLENBQUEyRyxFQUFBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBa0IsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEwQixNQUFBQSxDQUFBbkMsS0FBQUEsR0FBQSxHQUFBLEdBQUExRixJQUFBQSxDQUFBb0gsR0FBQUEsQ0FBQUEsQ0FBQVMsTUFBQUEsQ0FBQXpCLEtBQUFBLEdBQUEsRUFBQSxJQUFBcEcsSUFBQUEsQ0FBQTJHLEVBQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FrQixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQS9DLE1BQUFBLENBQUEwQyxLQUFBQSxHQUNBK0IsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQTBCLE1BQUFBLENBQUEvQixLQUFBQSxHQUNBK0IsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQTBCLE1BQUFBLENBQUEvQixLQUFBQSxLQUNBK0IsTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEvQyxNQUFBQSxDQUFBMEMsS0FBQUEsQ0FBQUEsRUFFQStCLE1BQUFBLENBQUExQixRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBL0MsTUFBQUEsQ0FBQTJDLE1BQUFBLEdBQ0E4QixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBMEIsTUFBQUEsQ0FBQTlCLE1BQUFBLEdBQ0E4QixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBMEIsTUFBQUEsQ0FBQTlCLE1BQUFBLEtBQ0E4QixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQS9DLE1BQUFBLENBQUEyQyxNQUFBQSxDQUFBQSxFQUVBMUMsR0FBQUEsQ0FBQTJFLElBQUFBLEVBQUFBLEVBQ0EzRSxHQUFBQSxDQUFBNEUsU0FBQUEsQ0FBQUosTUFBQUEsQ0FBQTFCLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEwQixNQUFBQSxDQUFBMUIsUUFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNBOUMsR0FBQUEsQ0FBQTRFLFNBQUFBLENBQUFKLE1BQUFBLENBQUEvQixLQUFBQSxHQUFBLENBQUEsRUFBQStCLE1BQUFBLENBQUE5QixNQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBMUMsR0FBQUEsQ0FBQTZFLE1BQUFBLENBQUFMLE1BQUFBLENBQUFwQyxRQUFBQSxHQUFBekYsSUFBQUEsQ0FBQTJHLEVBQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FrQixNQUFBQSxDQUFBMUQsS0FBQUEsRUFBQTtNQUNBLElBQUFnRSxNQUFBQSxHQUFBTixNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQTVNLENBQUFBLEdBQUFzUSxNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQUUsT0FBQUE7UUFDQStELEdBQUFBLEdBQUFwSSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBNEgsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUE1TSxDQUFBQSxHQUFBc1EsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUFFLE9BQUFBLENBQUFBO01BQ0FoQixHQUFBQSxDQUFBZ0YsU0FBQUEsQ0FBQVIsTUFBQUEsQ0FBQXRELEdBQUFBLEVBQUFzRCxNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQTZELE1BQUFBLEVBQUFOLE1BQUFBLENBQUExRCxLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBOEQsR0FBQUEsRUFBQVAsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUF1RCxNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBdUQsTUFBQUEsQ0FBQS9CLEtBQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUErQixNQUFBQSxDQUFBOUIsTUFBQUEsR0FBQSxDQUFBLEVBQUE4QixNQUFBQSxDQUFBL0IsS0FBQUEsRUFBQStCLE1BQUFBLENBQUE5QixNQUFBQSxDQUFBQSxFQUVBOEIsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUE1TSxDQUFBQSxJQUFBLENBQUEsSUFDQXNRLE1BQUFBLENBQUExRCxLQUFBQSxDQUFBNU0sQ0FBQUEsR0FBQSxDQUFBLEVBQ0FzUSxNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQW5NLFNBQUFBLEdBQUFBLENBQUEsQ0FBQSxJQUNBNlAsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUE1TSxDQUFBQSxJQUFBc1EsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUFFLE9BQUFBLEdBQUF3RCxNQUFBQSxDQUFBMUQsS0FBQUEsQ0FBQUMsSUFBQUEsS0FDQXlELE1BQUFBLENBQUExRCxLQUFBQSxDQUFBNU0sQ0FBQUEsR0FBQXNRLE1BQUFBLENBQUExRCxLQUFBQSxDQUFBRSxPQUFBQSxHQUFBd0QsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUFDLElBQUFBLEdBQUEsQ0FBQSxFQUNBeUQsTUFBQUEsQ0FBQTFELEtBQUFBLENBQUFuTSxTQUFBQSxHQUFBQSxDQUFBLENBQUEsQ0FFQTtJQUFBLENBQUEsTUFDQXFMLEdBQUFBLENBQUFnRixTQUFBQSxDQUFBUixNQUFBQSxDQUFBdEQsR0FBQUEsRUFBQUEsQ0FBQXNELE1BQUFBLENBQUEvQixLQUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBK0IsTUFBQUEsQ0FBQTlCLE1BQUFBLEdBQUEsQ0FBQSxFQUFBOEIsTUFBQUEsQ0FBQS9CLEtBQUFBLEVBQUErQixNQUFBQSxDQUFBOUIsTUFBQUEsQ0FBQUE7SUFFQTFDLEdBQUFBLENBQUFpRixPQUFBQSxFQUNBO0VBQUE7RUFlQSxTQUFBZixnQkFBQUEsQ0FBQXpCLEtBQUFBLEVBQUFDLE1BQUFBLEVBQUFBO0lBQ0EsSUFFQUUsQ0FBQUE7TUFGQXNDLEtBQUFBLEdBQUEsQ0FBQSxHQUFBdkksSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUE7TUFDQXlJLEtBQUFBLEdBQUEsQ0FBQSxHQUFBeEksSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUE7TUFDQW1HLENBQUFBLEdBQUEsQ0FBQTtJQWdCQSxPQWZBcUMsS0FBQUEsSUFBQSxDQUFBLElBQ0F0QyxDQUFBQSxHQUFBakcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQXFELE1BQUFBLENBQUEwQyxLQUFBQSxFQUVBSSxDQUFBQSxHQURBQSxDQUFBQSxJQUFBLENBQUEsR0FDQSxDQUFBLEdBQUFILE1BQUFBLEdBRUEzQyxNQUFBQSxDQUFBMkMsTUFBQUEsS0FHQUcsQ0FBQUEsR0FBQWxHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUFxRCxNQUFBQSxDQUFBMkMsTUFBQUEsRUFFQUUsQ0FBQUEsR0FEQXVDLEtBQUFBLElBQUEsQ0FBQSxHQUNBLENBQUEsR0FBQTFDLEtBQUFBLEdBRUExQyxNQUFBQSxDQUFBMEMsS0FBQUEsQ0FBQUEsRUFHQSxDQUFBRyxDQUFBQSxFQUFBQyxDQUFBQSxDQUNBO0VBQUE7RUFFQSxTQUFBZSxHQUFBQSxDQUFBd0IsT0FBQUEsRUFBQUMsT0FBQUEsRUFBQUE7SUFDQSxPQUFBRCxPQUFBQSxDQUFBdEMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXVDLE9BQUFBLENBQUF2QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdUMsT0FBQUEsQ0FBQTVDLEtBQUFBLElBQ0E0QyxPQUFBQSxDQUFBdkMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXNDLE9BQUFBLENBQUF0QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBc0MsT0FBQUEsQ0FBQTNDLEtBQUFBLElBQ0EyQyxPQUFBQSxDQUFBdEMsUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXVDLE9BQUFBLENBQUF2QyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdUMsT0FBQUEsQ0FBQTNDLE1BQUFBLElBQ0EyQyxPQUFBQSxDQUFBdkMsUUFB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QTtNQUNBMEQsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FBQSxHQUFBLEVBQUEsTUFBQSxHQUFBMUosSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBMEosS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEzSixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEwSixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTNKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTBKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FILFFBQUFBLENBQUFFLFlBQUFBLENBQUEsTUFBQSxFQUFBLE1BQUEsR0FBQTFKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTBKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBM0osSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBMEosS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEzSixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEwSixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUFBLEtBQUEsRUFBQSxNQUFBLEdBQUExSixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEwSixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTNKLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQTBKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBM0osSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBMEosS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FBQSxHQUFBLENBQUEsRUFD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QUFBLEVBQUEsZ0JBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsU0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxXQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLE9BQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsZUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxZQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLHdCQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFVBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsWUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxTQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLGNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsVUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxTQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsT0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxrQkFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxTQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsaUNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsa0NBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsUUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxTQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFFBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsZUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxVQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsUUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxRQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLHlCQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLHVDQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLDBCQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLE9BQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsYUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxlQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLGNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsT0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxVQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLE9BQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsVUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxZQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLE1BQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsWUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxTQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLGtCQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFFBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsZ0JBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsU0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxVQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsVUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxvQkFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxTQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsU0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxPQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLGdCQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsT0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxVQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsTUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSw2QkFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxpQ0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxlQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFFBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsT0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxzREFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxTQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsZUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxVQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLE9BQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsV0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxXQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFFBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsUUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxZQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLG1CQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFFBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsOENBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsV0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxNQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLGVBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsUUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxXQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLG1DQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFVBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsU0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxPQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsV0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxTQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFFBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsYUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxPQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLGdDQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLE1BQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsMkJBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsU0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxPQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFFBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsU0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxRQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLE9BQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsT0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxZQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFVBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsVUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxTQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLHVCQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLHdDQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLG9CQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFFBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsZ0JBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsWUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxrQ0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxTQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLGFBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsZUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxXQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsU0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxXQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFlBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsUUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxPQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsUUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxzQkFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxZQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLDRCQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFlBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsa0JBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsNENBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsTUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxTQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFVBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsT0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSwwQkFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxZQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFlBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsWUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxPQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFdBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsVUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxRQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFFBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsVUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxZQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsZUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxPQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLGdCQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsV0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxhQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFFBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsT0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxPQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLE1BQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsYUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxNQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFFBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsTUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxrQkFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxrQkFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxhQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFVBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsUUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSwyQkFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxVQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLGFBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEscUJBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsVUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxPQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFVBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsT0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxTQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsUUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxvQkFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxRQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLGNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsaUJBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsWUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxPQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFFBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsV0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSw4Q0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxVQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLHdCQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFVBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsY0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxZQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsU0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxVQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLGFBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsdUJBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsYUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSwyQkFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxzQkFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxXQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLDBCQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLE1BQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsNkJBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsTUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxVQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFlBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsU0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxhQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLGNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsU0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxPQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFFBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEscUJBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsUUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSwyQkFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSw4QkFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxTQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFFBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsc0NBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsMEJBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsU0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxZQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLFVBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsa0NBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsbUNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEseUJBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsc0JBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsVUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxTQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLG1CQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLE9BQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsT0FBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxTQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUEvWSxJQUFBQSxFQUFBLGNBQUE7TUFBQStZLElBQUFBLEVBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQS9ZLElBQUFBLEVBQUEsUUFBQTtNQUFBK1ksSUFBQUEsRUFBQTtJQUFBLENBQUEsRUFDQTtNQUFBL1ksSUFBQUEsRUFBQSxVQUFBO01BQUErWSxJQUFBQSxFQUFBO0lBQUEsQ0FBQSxDQUFBLENBRUFuVyxNQUFBQSxDQUFBLFVBQUFxVyxPQUFBQSxFQUFBQTtNQUNBLE9BQUEsQ0FBQSxDQUFBLElBQUFBLE9BQUFBLENB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QUEsR0FBQS9pQixJQUFBQSxJQUFBSSxDQUFBQSxDQUFBdWhCLE9BQUFBLENBQUFoaEIsTUFBQUEsQ0FBQWdpQixPQUFBQSxDQUFBL2YsTUFBQUEsQ0FBQWdnQixNQUFBQSxJQUFBNWlCLElBQUFBLEtBQUE0aUIsTUFBQUEsQ0FBQTVpQixJQUFBQSxDQUFBQSxDQUFBa0csR0FBQUEsQ0FBQTBjLE1BQUFBLElBQUFBLE1BQUFBLENBQUE1aUIsSUFBQUEsQ0FBQUEsQ0FBQUEsQ0FBQXhHLEtBQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQTtFQUVBbUgsTUFBQUEsQ0FBQXNpQixRQUFBQSxHQUFBLE1BQUEsR0FBQXRpQixNQUFBQSxDQUFBZ2lCLE9BQUFBLENBQUEvZixNQUFBQSxDQUFBZ2dCLE1BQUFBLElBQUFBLE1BQUFBLENBQUE1aUIsSUFBQUEsS0FBQTRpQixNQUFBQSxDQUFBSSxLQUFBQSxDQUFBQSxDQUFBcHBCLE1BQUFBLElBQUErRyxNQUFBQSxDQUFBZ2lCLE9BQUFBLENBQUEvb0IsTUFBQUEsRUFBQUEsRUFFQStHLE1BQUFBLENBQUF1aUIsY0FBQUEsR0FBQSxNQUFBdmlCLE1BQUFBLENBQUFnaUIsT0FBQUEsQ0FBQS9mLE1BQUFBLENBQUFnZ0IsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQUksS0FBQUEsQ0FBQUEsQ0FBQXBwQixNQUFBQSxLQUFBK0csTUFBQUEsQ0FBQWdpQixPQUFBQSxDQUFBL29CLE1BQ0E7QUFBQSxDQUFBLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcCA9IFtcclxuICB7XHJcbiAgICBiYXNlOiBcIkFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0MVxcdTI0QjZcXHVGRjIxXFx1MDBDMFxcdTAwQzFcXHUwMEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxcdTAwQzNcXHUwMTAwXFx1MDEwMlxcdTFFQjBcXHUxRUFFXFx1MUVCNFxcdTFFQjJcXHUwMjI2XFx1MDFFMFxcdTAwQzRcXHUwMURFXFx1MUVBMlxcdTAwQzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBDNlxcdTAxRkNcXHUwMUUyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBT1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM4XFx1QTczQV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQyXFx1MjRCN1xcdUZGMjJcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUwMjQzXFx1MDE4MlxcdTAxODFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0M1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYxXFx1MDFDNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMlxcdTAxQzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0NVxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJGXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDZcXHUyNEJCXFx1RkYyNlxcdTFFMUVcXHUwMTkxXFx1QTc3Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiR1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ3XFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0OFxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIklcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0OVxcdTI0QkVcXHVGRjI5XFx1MDBDQ1xcdTAwQ0RcXHUwMENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxcdTAwQ0ZcXHUxRTJFXFx1MUVDOFxcdTAxQ0ZcXHUwMjA4XFx1MDIwQVxcdTFFQ0FcXHUwMTJFXFx1MUUyQ1xcdTAxOTddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIktcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QlxcdTI0QzBcXHVGRjJCXFx1MUUzMFxcdTAxRThcXHUxRTMyXFx1MDEzNlxcdTFFMzRcXHUwMTk4XFx1MkM2OVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3QTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0Q1xcdTI0QzFcXHVGRjJDXFx1MDEzRlxcdTAxMzlcXHUwMTNEXFx1MUUzNlxcdTFFMzhcXHUwMTNCXFx1MUUzQ1xcdTFFM0FcXHUwMTQxXFx1MDIzRFxcdTJDNjJcXHUyQzYwXFx1QTc0OFxcdUE3NDZcXHVBNzgwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJNXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNERcXHUyNEMyXFx1RkYyRFxcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTJDNkVcXHUwMTlDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5KXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0RlxcdTI0QzRcXHVGRjJGXFx1MDBEMlxcdTAwRDNcXHUwMEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxcdTAwRDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHUwMEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xcdTAwRDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT0lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT09cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT1VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUwXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJRXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTFcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUlwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUyXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiU1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUzXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU0XFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MjhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1NVxcdTI0Q0FcXHVGRjM1XFx1MDBEOVxcdTAwREFcXHUwMERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHUwMERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU2XFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVllcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc2MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiV1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU3XFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJYXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNThcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTlcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHUwMEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDVBXFx1MjRDRlxcdUZGM0FcXHUwMTc5XFx1MUU5MFxcdTAxN0JcXHUwMTdEXFx1MUU5MlxcdTFFOTRcXHUwMUI1XFx1MDIyNFxcdTJDN0ZcXHUyQzZCXFx1QTc2Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDYxXFx1MjREMFxcdUZGNDFcXHUxRTlBXFx1MDBFMFxcdTAwRTFcXHUwMEUyXFx1MUVBN1xcdTFFQTVcXHUxRUFCXFx1MUVBOVxcdTAwRTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxcdTAwRTRcXHUwMURGXFx1MUVBM1xcdTAwRTVcXHUwMUZCXFx1MDFDRVxcdTAyMDFcXHUwMjAzXFx1MUVBMVxcdTFFQURcXHUxRUI3XFx1MUUwMVxcdTAxMDVcXHUyQzY1XFx1MDI1MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBFNlxcdTAxRkRcXHUwMUUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM5XFx1QTczQl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczRF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDYyXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2M1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxcdTAwRTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY0XFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGM1xcdTAxQzZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2NVxcdTI0RDRcXHVGRjQ1XFx1MDBFOFxcdTAwRTlcXHUwMEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xcdTAwRUJcXHUxRUJCXFx1MDExQlxcdTAyMDVcXHUwMjA3XFx1MUVCOVxcdTFFQzdcXHUwMjI5XFx1MUUxRFxcdTAxMTlcXHUxRTE5XFx1MUUxQlxcdTAyNDdcXHUwMjVCXFx1MDFERF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY2XFx1MjRENVxcdUZGNDZcXHUxRTFGXFx1MDE5MlxcdUE3N0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2N1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJoXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaHZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDE5NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDY5XFx1MjREOFxcdUZGNDlcXHUwMEVDXFx1MDBFRFxcdTAwRUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHUwMEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwialwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZBXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImtcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QlxcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZEXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiblwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZFXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxcdTAwRjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibmpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZGXFx1MjRERVxcdUZGNEZcXHUwMEYyXFx1MDBGM1xcdTAwRjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx1MDBGNVxcdTFFNERcXHUwMjJEXFx1MUU0RlxcdTAxNERcXHUxRTUxXFx1MUU1M1xcdTAxNEZcXHUwMjJGXFx1MDIzMVxcdTAwRjZcXHUwMjJCXFx1MUVDRlxcdTAxNTFcXHUwMUQyXFx1MDIwRFxcdTAyMEZcXHUwMUExXFx1MUVERFxcdTFFREJcXHUxRUUxXFx1MUVERlxcdTFFRTNcXHUxRUNEXFx1MUVEOVxcdTAxRUJcXHUwMUVEXFx1MDBGOFxcdTAxRkZcXHUwMjU0XFx1QTc0QlxcdUE3NERcXHUwMjc1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvaVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUEzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMjIzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzRGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJwXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3MVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJyXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJzXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzNcXHUyNEUyXFx1RkY1M1xcdTAwREZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ0elwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ1XCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzVcXHUyNEU0XFx1RkY1NVxcdTAwRjlcXHUwMEZBXFx1MDBGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx1MDBGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIndcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3N1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OVxcdTI0RThcXHVGRjU5XFx1MUVGM1xcdTAwRkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx1MDBGRlxcdTFFRjdcXHUxRTk5XFx1MUVGNVxcdTAxQjRcXHUwMjRGXFx1MUVGRl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwielwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDdBXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M10vZyxcclxuICB9LFxyXG5dO1xyXG52YXIgZG9tYWlucyA9IFtcclxuICBcIi5jb21cIixcclxuICBcIi5vcmdcIixcclxuICBcIi5uZXRcIixcclxuICBcIi5hY1wiLFxyXG4gIFwiLmFkXCIsXHJcbiAgXCIuYWVcIixcclxuICBcIi5hZlwiLFxyXG4gIFwiLmFnXCIsXHJcbiAgXCIuYWlcIixcclxuICBcIi5hbFwiLFxyXG4gIFwiLmFtXCIsXHJcbiAgXCIuYW9cIixcclxuICBcIi5hcVwiLFxyXG4gIFwiLmFyXCIsXHJcbiAgXCIuYXNcIixcclxuICBcIi5hdFwiLFxyXG4gIFwiLmF1XCIsXHJcbiAgXCIuYXdcIixcclxuICBcIi5heFwiLFxyXG4gIFwiLmF6XCIsXHJcbiAgXCIuYmFcIixcclxuICBcIi5iYlwiLFxyXG4gIFwiLmJkXCIsXHJcbiAgXCIuYmVcIixcclxuICBcIi5iZlwiLFxyXG4gIFwiLmJnXCIsXHJcbiAgXCIuYmhcIixcclxuICBcIi5iaVwiLFxyXG4gIFwiLmJqXCIsXHJcbiAgXCIuYm1cIixcclxuICBcIi5iblwiLFxyXG4gIFwiLmJvXCIsXHJcbiAgXCIuYnFcIixcclxuICBcIi5iclwiLFxyXG4gIFwiLmJzXCIsXHJcbiAgXCIuYnRcIixcclxuICBcIi5id1wiLFxyXG4gIFwiLmJ5XCIsXHJcbiAgXCIuYnpcIixcclxuICBcIi5jYVwiLFxyXG4gIFwiLmNjXCIsXHJcbiAgXCIuY2RcIixcclxuICBcIi5jZlwiLFxyXG4gIFwiLmNnXCIsXHJcbiAgXCIuY2hcIixcclxuICBcIi5jaVwiLFxyXG4gIFwiLmNrXCIsXHJcbiAgXCIuY2xcIixcclxuICBcIi5jbVwiLFxyXG4gIFwiLmNuXCIsXHJcbiAgXCIuY29cIixcclxuICBcIi5jclwiLFxyXG4gIFwiLmN1XCIsXHJcbiAgXCIuY3ZcIixcclxuICBcIi5jd1wiLFxyXG4gIFwiLmN4XCIsXHJcbiAgXCIuY3lcIixcclxuICBcIi5jelwiLFxyXG4gIFwiLmRlXCIsXHJcbiAgXCIuZGpcIixcclxuICBcIi5ka1wiLFxyXG4gIFwiLmRtXCIsXHJcbiAgXCIuZG9cIixcclxuICBcIi5kelwiLFxyXG4gIFwiLmVjXCIsXHJcbiAgXCIuZWVcIixcclxuICBcIi5lZ1wiLFxyXG4gIFwiLmVoXCIsXHJcbiAgXCIuZXJcIixcclxuICBcIi5lc1wiLFxyXG4gIFwiLmV0XCIsXHJcbiAgXCIuZXVcIixcclxuICBcIi5maVwiLFxyXG4gIFwiLmZqXCIsXHJcbiAgXCIuZmtcIixcclxuICBcIi5mbVwiLFxyXG4gIFwiLmZvXCIsXHJcbiAgXCIuZnJcIixcclxuICBcIi5nYVwiLFxyXG4gIFwiLmdkXCIsXHJcbiAgXCIuZ2VcIixcclxuICBcIi5nZlwiLFxyXG4gIFwiLmdnXCIsXHJcbiAgXCIuZ2hcIixcclxuICBcIi5naVwiLFxyXG4gIFwiLmdsXCIsXHJcbiAgXCIuZ21cIixcclxuICBcIi5nblwiLFxyXG4gIFwiLmdwXCIsXHJcbiAgXCIuZ3FcIixcclxuICBcIi5nclwiLFxyXG4gIFwiLmdzXCIsXHJcbiAgXCIuZ3RcIixcclxuICBcIi5ndVwiLFxyXG4gIFwiLmd3XCIsXHJcbiAgXCIuZ3lcIixcclxuICBcIi5oa1wiLFxyXG4gIFwiLmhtXCIsXHJcbiAgXCIuaG5cIixcclxuICBcIi5oclwiLFxyXG4gIFwiLmh0XCIsXHJcbiAgXCIuaHVcIixcclxuICBcIi5pZFwiLFxyXG4gIFwiLmllXCIsXHJcbiAgXCIuaWxcIixcclxuICBcIi5pbVwiLFxyXG4gIFwiLmluXCIsXHJcbiAgXCIuaW9cIixcclxuICBcIi5pcVwiLFxyXG4gIFwiLmlyXCIsXHJcbiAgXCIuaXNcIixcclxuICBcIi5pdFwiLFxyXG4gIFwiLmplXCIsXHJcbiAgXCIuam1cIixcclxuICBcIi5qb1wiLFxyXG4gIFwiLmpwXCIsXHJcbiAgXCIua2VcIixcclxuICBcIi5rZ1wiLFxyXG4gIFwiLmtoXCIsXHJcbiAgXCIua2lcIixcclxuICBcIi5rbVwiLFxyXG4gIFwiLmtuXCIsXHJcbiAgXCIua3BcIixcclxuICBcIi5rclwiLFxyXG4gIFwiLmt3XCIsXHJcbiAgXCIua3lcIixcclxuICBcIi5relwiLFxyXG4gIFwiLmxhXCIsXHJcbiAgXCIubGJcIixcclxuICBcIi5sY1wiLFxyXG4gIFwiLmxpXCIsXHJcbiAgXCIubGtcIixcclxuICBcIi5sclwiLFxyXG4gIFwiLmxzXCIsXHJcbiAgXCIubHRcIixcclxuICBcIi5sdVwiLFxyXG4gIFwiLmx2XCIsXHJcbiAgXCIubHlcIixcclxuICBcIi5tYVwiLFxyXG4gIFwiLm1jXCIsXHJcbiAgXCIubWRcIixcclxuICBcIi5tZVwiLFxyXG4gIFwiLm1nXCIsXHJcbiAgXCIubWhcIixcclxuICBcIi5ta1wiLFxyXG4gIFwiLm1sXCIsXHJcbiAgXCIubW1cIixcclxuICBcIi5tblwiLFxyXG4gIFwiLm1vXCIsXHJcbiAgXCIubXBcIixcclxuICBcIi5tcVwiLFxyXG4gIFwiLm1yXCIsXHJcbiAgXCIubXNcIixcclxuICBcIi5tdFwiLFxyXG4gIFwiLm11XCIsXHJcbiAgXCIubXZcIixcclxuICBcIi5td1wiLFxyXG4gIFwiLm14XCIsXHJcbiAgXCIubXlcIixcclxuICBcIi5telwiLFxyXG4gIFwiLm5hXCIsXHJcbiAgXCIubmNcIixcclxuICBcIi5uZVwiLFxyXG4gIFwiLm5mXCIsXHJcbiAgXCIubmdcIixcclxuICBcIi5uaVwiLFxyXG4gIFwiLm5sXCIsXHJcbiAgXCIubm9cIixcclxuICBcIi5ucFwiLFxyXG4gIFwiLm5yXCIsXHJcbiAgXCIubnVcIixcclxuICBcIi5uelwiLFxyXG4gIFwiLm9tXCIsXHJcbiAgXCIucGFcIixcclxuICBcIi5wZVwiLFxyXG4gIFwiLnBmXCIsXHJcbiAgXCIucGdcIixcclxuICBcIi5waFwiLFxyXG4gIFwiLnBrXCIsXHJcbiAgXCIucGxcIixcclxuICBcIi5wbVwiLFxyXG4gIFwiLnBuXCIsXHJcbiAgXCIucHJcIixcclxuICBcIi5wc1wiLFxyXG4gIFwiLnB0XCIsXHJcbiAgXCIucHdcIixcclxuICBcIi5weVwiLFxyXG4gIFwiLnFhXCIsXHJcbiAgXCIucmVcIixcclxuICBcIi5yb1wiLFxyXG4gIFwiLnJzXCIsXHJcbiAgXCIucnVcIixcclxuICBcIi5yd1wiLFxyXG4gIFwiLnNhXCIsXHJcbiAgXCIuc2JcIixcclxuICBcIi5zY1wiLFxyXG4gIFwiLnNkXCIsXHJcbiAgXCIuc2VcIixcclxuICBcIi5zZ1wiLFxyXG4gIFwiLnNoXCIsXHJcbiAgXCIuc2lcIixcclxuICBcIi5za1wiLFxyXG4gIFwiLnNsXCIsXHJcbiAgXCIuc21cIixcclxuICBcIi5zblwiLFxyXG4gIFwiLnNvXCIsXHJcbiAgXCIuc3JcIixcclxuICBcIi5zc1wiLFxyXG4gIFwiLnN0XCIsXHJcbiAgXCIuc3VcIixcclxuICBcIi5zdlwiLFxyXG4gIFwiLnN4XCIsXHJcbiAgXCIuc3lcIixcclxuICBcIi5zelwiLFxyXG4gIFwiLnRjXCIsXHJcbiAgXCIudGRcIixcclxuICBcIi50ZlwiLFxyXG4gIFwiLnRnXCIsXHJcbiAgXCIudGhcIixcclxuICBcIi50alwiLFxyXG4gIFwiLnRrXCIsXHJcbiAgXCIudGxcIixcclxuICBcIi50bVwiLFxyXG4gIFwiLnRuXCIsXHJcbiAgXCIudG9cIixcclxuICBcIi50clwiLFxyXG4gIFwiLnR0XCIsXHJcbiAgXCIudHZcIixcclxuICBcIi50d1wiLFxyXG4gIFwiLnR6XCIsXHJcbiAgXCIudWFcIixcclxuICBcIi51Z1wiLFxyXG4gIFwiLnVrXCIsXHJcbiAgXCIudXNcIixcclxuICBcIi51eVwiLFxyXG4gIFwiLnV6XCIsXHJcbiAgXCIudmFcIixcclxuICBcIi52Y1wiLFxyXG4gIFwiLnZlXCIsXHJcbiAgXCIudmdcIixcclxuICBcIi52aVwiLFxyXG4gIFwiLnZuXCIsXHJcbiAgXCIudnVcIixcclxuICBcIi53ZlwiLFxyXG4gIFwiLndzXCIsXHJcbiAgXCIueWVcIixcclxuICBcIi55dFwiLFxyXG4gIFwiLnphXCIsXHJcbiAgXCIuem1cIixcclxuICBcIi56d1wiLFxyXG5dO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlRGlhY3JpdGljc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAucmVkdWNlKChyZXN1bHQsIGxldHRlcikgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzdWx0LnJlcGxhY2UobGV0dGVyLmxldHRlcnMsIGxldHRlci5iYXNlKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgU1BFQ0lBTF9DSEFSQUNURVJTID0gXCJcXFxcXFxcXC8gIT9AIyQlXiYqKClfKzoue30sO1xcXFwtJ2Bg4oCZ4oCYXFxcIlwiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFske1NQRUNJQUxfQ0hBUkFDVEVSU31dYCwgXCJnaVwiKSwgXCJcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVBbGxCdXRMZXR0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9Mb3dlckNhc2UoKS5yZW1vdmVEaWFjcml0aWNzKCkucmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMoKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNvbmNlYWxcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZXh0cmEpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChgW14ke1NQRUNJQUxfQ0hBUkFDVEVSU30ke2V4dHJhfV1gLCBcImdpXCIpLCBcIuKBjlwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNhcGl0YWxpemVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc2xpY2UoMSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVIVE1MXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShcIj5cIiwgXCJcXHUyMjdCXCIpLnJlcGxhY2UoXCI8XCIsIFwiXFx1MjI3QVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImFuZ2xlQnJhY2tldHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKFwiPFwiLCBcIiZsdDtcIikucmVwbGFjZShcIj5cIiwgXCImZ3Q7XCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVwbGFjZUFycmF5XCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGZpbmQsIHJlcGxhY2UpIHtcclxuICAgIHZhciByZXBsYWNlU3RyaW5nID0gdGhpcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmluZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICByZXBsYWNlU3RyaW5nID0gcmVwbGFjZVN0cmluZy5yZXBsYWNlKGZpbmRbaV0sIHJlcGxhY2VbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcGxhY2VTdHJpbmc7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJtYXNrVVJMc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2VBcnJheShbXCJodHRwczovL1wiLCBcImh0dHA6Ly9cIl0sIFwibm9wZTovL1wiKS5yZXBsYWNlQXJyYXkoZG9tYWlucywgXCIubm9wZVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VSZWFkYWJsZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwibWFrZVBlcmNlbnRhZ2VcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZGVjaW1hbHMpIHtcclxuICAgIGlmICghZGVjaW1hbHMpIGRlY2ltYWxzID0gMjtcclxuICAgIHJldHVybiBgJHsodGhpcyAqIDEwMCkudG9GaXhlZChkZWNpbWFscyl9JWA7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzb3J0T2JqZWN0ID0gKG9iaiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgbGV0IGFyciA9IFtdO1xyXG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgYXJyLnB1c2goW2tleSwgb2JqW2tleV1dKTtcclxuICB9XHJcbiAgYXJyLnNvcnQoKGEsIGIpID0+IChkaXJlY3Rpb24gPyBhWzFdIC0gYlsxXSA6IGJbMV0gLSBhWzFdKSk7XHJcbiAgbGV0IG9ialNvcnRlZCA9IHt9O1xyXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiAob2JqU29ydGVkW2l0ZW1bMF1dID0gaXRlbVsxXSkpO1xyXG4gIC8vYXJyLnNvcnQoZnVuY3Rpb24oYSwgYikgeyBhLnZhbHVlLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLnZhbHVlLnRvTG93ZXJDYXNlKCkpOyB9KTsgLy91c2UgdGhpcyB0byBzb3J0IGFzIHN0cmluZ3NcclxuICByZXR1cm4gb2JqU29ydGVkOyAvLyByZXR1cm5zIGFycmF5XHJcbn07XHJcbiIsIi8qXHJcbiQgPSBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxudmFyIGJvb3RzdHJhcCA9IHJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxudmFyIGFuZ3VsYXJTYW5pdGl6ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItc2FuaXRpemUnKTtcclxudmFyIGFuZ3VsYXJBbmltYXRlID0gcmVxdWlyZSgnYW5ndWxhci1hbmltYXRlJyk7XHJcbiovXHJcbmFuZ3VsYXIubW9kdWxlKFwiYXBwXCIsIFtcclxuICBcInVpLnJvdXRlclwiLFxyXG4gIFwidWkuYm9vdHN0cmFwXCIsXHJcbiAgXCJuZ0FuaW1hdGVcIixcclxuICBcIm5nU2FuaXRpemVcIixcclxuICBcIm5nRHJhZ0Ryb3BcIixcclxuICBcIm5nVGFnc0lucHV0XCIsXHJcbiAgXCJ2Y1JlY2FwdGNoYVwiLFxyXG4gIFwiY2hhcnQuanNcIixcclxuICBcInRjLmNoYXJ0anNcIixcclxuICBcImluZmluaXRlLXNjcm9sbFwiLFxyXG5dKTtcclxuIiwiYW5ndWxhclxyXG5cdC5tb2R1bGUoJ2FwcCcpXHJcblx0LmNvbmZpZyhmdW5jdGlvbiAoXHJcblx0XHQkc3RhdGVQcm92aWRlcixcclxuXHRcdCR1cmxSb3V0ZXJQcm92aWRlcixcclxuXHRcdCR1cmxTZXJ2aWNlUHJvdmlkZXIsXHJcblx0XHQkbG9jYXRpb25Qcm92aWRlclxyXG5cdCkge1xyXG5cdFx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2hvbWUnKTtcclxuXHRcdCR1cmxTZXJ2aWNlUHJvdmlkZXIuY29uZmlnLnN0cmljdE1vZGUoZmFsc2UpO1xyXG5cclxuXHRcdCRzdGF0ZVByb3ZpZGVyXHJcblx0XHRcdC5zdGF0ZSgnaG9tZScsIHtcclxuXHRcdFx0XHR1cmw6ICcvaG9tZScsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvaG9tZS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdwb2xpY3knLCB7XHJcblx0XHRcdFx0dXJsOiAnL3BvbGljeScsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvcG9saWN5Lmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3ByaW50Jywge1xyXG5cdFx0XHRcdHVybDogJy9wcmludCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvcHJpbnQuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnZXhwZXJpZW5jZScsIHtcclxuXHRcdFx0XHR1cmw6ICcvZXhwZXJpZW5jZScsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ0V4cGVyaWVuY2VDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9leHBlcmllbmNlLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3NraWxscycsIHtcclxuXHRcdFx0XHR1cmw6ICcvc2tpbGxzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnU2tpbGxzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvc2tpbGxzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ2hvYmJpZXMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2hvYmJpZXMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdIb2JiaWVzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvaG9iYmllcy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdjb250YWN0Jywge1xyXG5cdFx0XHRcdHVybDogJy9jb250YWN0JyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnQ29udGFjdEN0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL2NvbnRhY3QuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgnd29ya291dCcsIHtcclxuXHRcdFx0XHR1cmw6ICcvd29ya291dCcsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1dvcmtvdXRDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy93b3Jrb3V0Lmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3Bvc3RzJywge1xyXG5cdFx0XHRcdHVybDogJy9wb3N0cycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1Bvc3RzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICcvcG9zdHMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgncHJvZmlsZScsIHtcclxuXHRcdFx0XHR1cmw6ICcvcHJvZmlsZScsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1Byb2ZpbGVDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJy9wcm9maWxlLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ2xpc3RzJywge1xyXG5cdFx0XHRcdHVybDogJy9saXN0cycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ0xpc3RzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdsaXN0cy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdwcmlvcml0aXplJywge1xyXG5cdFx0XHRcdHVybDogJy9wcmlvcml0aXplJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnUHJpb3JpdGl6ZUN0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAncHJpb3JpdGl6ZS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdidWJibGVzJywge1xyXG5cdFx0XHRcdHVybDogJy9idWJibGVzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnQnViYmxlc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnYnViYmxlcy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdhc3Rlcm9pZHMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2FzdGVyb2lkcycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ0FzdGVyb2lkc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnYXN0ZXJvaWRzLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ2xlbW1pbmdzJywge1xyXG5cdFx0XHRcdHVybDogJy9sZW1taW5ncycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ0xlbW1pbmdzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdsZW1taW5ncy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdib3RzJywge1xyXG5cdFx0XHRcdHVybDogJy9ib3RzJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnVGVuVGhpbmdzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW50aGluZ3MuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgndGVudGhpbmdzJywge1xyXG5cdFx0XHRcdHVybDogJy90ZW50aGluZ3MnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdUZW5UaGluZ3NDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3RlbnRoaW5ncy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCd0ZW50aGluZ3MtYWRtaW4nLCB7XHJcblx0XHRcdFx0dXJsOiAnL3RlbnRoaW5ncy1hZG1pbicsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1RlblRoaW5nc0FkbWluQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICd0ZW50aGluZ3MtYWRtaW4uaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgndGVudGhpbmdzLWN1cmF0ZScsIHtcclxuXHRcdFx0XHR1cmw6ICcvdGVudGhpbmdzLWN1cmF0ZScsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1RlblRoaW5nc0N1cmF0ZUN0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAndGVudGhpbmdzLWN1cmF0ZS5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCd0ZW50aGluZ3MtZ2FtZScsIHtcclxuXHRcdFx0XHR1cmw6ICcvdGVudGhpbmdzLzpnYW1lJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnVGVuVGhpbmdzR2FtZUN0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAndGVudGhpbmdzLWdhbWUuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgncXVpei1nb29nbGUnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2dvb2dsZScsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1F1aXpHb29nbGVDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3F1aXp6ZXMvZ29vZ2xlLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3F1aXotbG9nb3MnLCB7XHJcblx0XHRcdFx0dXJsOiAnL2xvZ29zJyxcclxuXHRcdFx0XHRjb250cm9sbGVyOiAnUXVpekxvZ29zQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdxdWl6emVzL2xvZ29zLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3F1aXotYW5pbWFscycsIHtcclxuXHRcdFx0XHR1cmw6ICcvYW5pbWFscycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1F1aXpBbmltYWxzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdxdWl6emVzL2FuaW1hbHMuaHRtbCcsXHJcblx0XHRcdH0pXHJcblx0XHRcdC5zdGF0ZSgncXVpei1za2VsZXRvbnMnLCB7XHJcblx0XHRcdFx0dXJsOiAnL3NrZWxldG9ucycsXHJcblx0XHRcdFx0Y29udHJvbGxlcjogJ1F1aXpTa2VsZXRvbnNDdHJsJyxcclxuXHRcdFx0XHR0ZW1wbGF0ZVVybDogJ3F1aXp6ZXMvc2tlbGV0b25zLmh0bWwnLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHQuc3RhdGUoJ3F1aXotbW92aWVzJywge1xyXG5cdFx0XHRcdHVybDogJy9tb3ZpZXMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdRdWl6TW92aWVzQ3RybCcsXHJcblx0XHRcdFx0dGVtcGxhdGVVcmw6ICdxdWl6emVzL21vdmllcy5odG1sJyxcclxuXHRcdFx0fSlcclxuXHRcdFx0LnN0YXRlKCdjaGFyYWRlcycsIHtcclxuXHRcdFx0XHR1cmw6ICcvY2hhcmFkZXMnLFxyXG5cdFx0XHRcdGNvbnRyb2xsZXI6ICdDaGFyYWRlc0N0cmwnLFxyXG5cdFx0XHRcdHRlbXBsYXRlVXJsOiAnL2NoYXJhZGVzLmh0bWwnLFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHQkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoe1xyXG5cdFx0XHRlbmFibGVkOiB0cnVlLFxyXG5cdFx0XHRyZXF1aXJlQmFzZTogZmFsc2UsXHJcblx0XHR9KTtcclxuXHR9KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdXZWJTb2NrZXRTdmMnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcclxuICBmdW5jdGlvbiB3ZWJzb2NrZXRIb3N0KCkge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcclxuICAgICAgcmV0dXJuIFwid3NzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIndzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBjb25uZWN0aW9uO1xyXG4gIHZhciBjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQod2Vic29ja2V0SG9zdCgpKTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjb25uZWN0ZWQnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjbG9zZWQuIFJlY29ubmVjdGluZy4uLicpO1xyXG4gICAgICAkdGltZW91dChjb25uZWN0LCAxMDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUgKyBcIiAtIFN0YXRlOiBcIiArIGNvbm5lY3Rpb24ucmVhZHlTdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnd3M6JyArIHBheWxvYWQudG9waWMsIHBheWxvYWQuZGF0YSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc2VuZCA9IGZ1bmN0aW9uICh0b3BpYywgZGF0YSkge1xyXG4gICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh7dG9waWM6IHRvcGljLCBkYXRhOiBkYXRhfSk7XHJcbiAgICBjb25uZWN0aW9uLnNlbmQoanNvbik7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5jb25uZWN0ID0gY29ubmVjdDtcclxuXHJcbn0pLnJ1bihmdW5jdGlvbiAoV2ViU29ja2V0U3ZjKSB7XHJcbiAgV2ViU29ja2V0U3ZjLmNvbm5lY3QoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmRpcmVjdGl2ZShcImNsaWNrT3V0c2lkZVwiLCBmdW5jdGlvbiAoJGRvY3VtZW50KSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6IFwiQVwiLFxuICAgIHNjb3BlOiB7XG4gICAgICBjbGlja091dHNpZGU6IFwiJlwiLFxuICAgIH0sXG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cikge1xuICAgICAgJGRvY3VtZW50Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGVsICE9PSBlLnRhcmdldCAmJiAhZWxbMF0uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNjb3BlLiRwYXJlbnQuc2V0U2VsZWN0ZWRMaXN0KCk7XG4gICAgICAgICAgICBzY29wZS4kZXZhbChzY29wZS5jbGlja091dHNpZGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICB9O1xufSk7XG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuXHQuZGlyZWN0aXZlKCdoZWFkJywgW1xyXG5cdFx0JyRyb290U2NvcGUnLFxyXG5cdFx0JyRzdGF0ZScsXHJcblx0XHQnJGNvbXBpbGUnLFxyXG5cdFx0JyRpbnRlcnBvbGF0ZScsXHJcblx0XHRmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkY29tcGlsZSwgJGludGVycG9sYXRlKSB7XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGUgPSBmdW5jdGlvbiBnZXRTdHlsZSh0ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdHlsZSA9IHtcclxuXHRcdFx0XHRcdGhyZWY6IHRlbXBsYXRlU3R5bGVVcmwsXHJcblx0XHRcdFx0XHRyZWw6ICdzdHlsZXNoZWV0J1xyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmIChzdHlsZS5ocmVmLm1hdGNoKC9cXC5sZXNzJC8pKSB7XHJcblx0XHRcdFx0XHRzdHlsZS5yZWwgPSAnc3R5bGVzaGVldC9sZXNzJztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBzdHlsZTtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gZ2V0U3R5bGVzKHN0YXRlKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdGF0ZXMgPSB7fTtcclxuXHJcblx0XHRcdFx0Ly9DaGVjayBzdGF0ZSBmb3Igc3R5bGVzXHJcblx0XHRcdFx0d2hpbGUgKHN0YXRlLm5hbWUgIT09ICcnKSB7XHJcblx0XHRcdFx0XHR2YXIgcGFyZW50ID0gJHN0YXRlLmdldCgnXicsIHN0YXRlKTtcclxuXHJcblx0XHRcdFx0XHQvL0luaXRpYXRlIG91ciB2aWV3IGxpc3RcclxuXHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXSkge1xyXG5cdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdID0ge307XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB0aGUgdGVtcGxhdGVTdHlsZVxyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSkge1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1bJyddID0gZ2V0U3R5bGUoc3RhdGUudGVtcGxhdGVTdHlsZVVybCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NoZWNrIHZpZXdzXHJcblx0XHRcdFx0XHRpZiAoc3RhdGUudmlld3MpIHtcclxuXHRcdFx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlLnZpZXdzLCBmdW5jdGlvbiAodmlldywga2V5KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgaGF2ZSBhIHN0eWxlXHJcblx0XHRcdFx0XHRcdFx0aWYgKCF2aWV3LnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgYXJlIHRhcmdldGluZyBzb21lIHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdGlmICgoa2V5ID0ga2V5LnNwbGl0KCdAJykpWzFdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgc3R5bGVzIGZvciB0aGF0IHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXSA9IHt9O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIHNvbWUgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXVtrZXlbMF1dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlc1trZXlbMV1dW2tleVswXV0gPSBnZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIG91ciBwYXJlbnQncyB2aWV3XHJcblx0XHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ29udGludWUgd2l0aCB0aGUgcGFyZW50XHJcblx0XHRcdFx0XHRzdGF0ZSA9IHBhcmVudDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vRmxhdHRlbiB0aGUgbGlzdFxyXG5cdFx0XHRcdHZhciBmbGF0ID0gW107XHJcblx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlcywgZnVuY3Rpb24gKHZpZXdzKSB7XHJcblxyXG5cdFx0XHRcdFx0Xy5mb3JFYWNoKHZpZXdzLCBmdW5jdGlvbiAoc3R5bGUpIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghXy5pbmNsdWRlcyhmbGF0LCBzdHlsZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRmbGF0LnB1c2goc3R5bGUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvL1JldmVyc2UgaXQgc28gd2UgaGF2ZSBhIHByb3BlciBoaWVyYXJjaHlcclxuXHRcdFx0XHRmbGF0LnJldmVyc2UoKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGZsYXQ7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0XHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSkge1xyXG5cclxuXHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gW107XHJcblxyXG5cdFx0XHRcdFx0dmFyIGh0bWwgPSAnPGxpbmsgbmctYXR0ci1yZWw9XCJ7e3N0eWxlLnJlbH19XCIgbmctcmVwZWF0PVwic3R5bGUgaW4gdGVtcGxhdGVTdHlsZXNcIiBuZy1ocmVmPVwie3tzdHlsZS5ocmVmfX1cIj4nO1xyXG5cclxuXHRcdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xce1xcey9nLCAkaW50ZXJwb2xhdGUuc3RhcnRTeW1ib2woKSk7XHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXH1cXH0vZywgJGludGVycG9sYXRlLmVuZFN5bWJvbCgpKTtcclxuXHJcblx0XHRcdFx0XHRlbGVtLmFwcGVuZCgkY29tcGlsZShodG1sKShzY29wZSkpO1xyXG5cclxuXHRcdFx0XHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykge1xyXG5cclxuXHRcdFx0XHRcdFx0c2NvcGUudGVtcGxhdGVTdHlsZXMgPSBnZXRTdHlsZXModG9TdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHR9XHJcblx0XSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJBcHBDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgTGFuZ3VhZ2VTdmMsIFVzZXJTdmMpIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiJWNZb3Ugc25lYWt5IGJ1Z2dlciFcIixcclxuICAgIFwiZm9udDogMmVtIHNhbnMtc2VyaWY7IGNvbG9yOiBEb2RnZXJCbHVlOyB0ZXh0LXNoYWRvdzogMnB4IDAgMCAjNDQ0LCAtMnB4IDAgMCAjNDQ0LCAwIDJweCAwICM0NDQsIDAgLTJweCAwICM0NDQsIDFweCAxcHggIzQ0NCwgLTFweCAtMXB4IDAgIzQ0NCwgMXB4IC0xcHggMCAjNDQ0LCAtMXB4IDFweCAwICM0NDQ7XCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiSSdtIGdsYWQgeW91J3JlIGN1cmlvdXMgd2hldGhlciBzb21ldGhpbmcgaXMgcG9wcGluZyB1cCBpbiBoZXJlLiBJJ20gYSBiaXQgb2YgYSBzdGlja2xlciB3aGVuIGl0IGNvbWVzIHRvIG1lc3NhZ2VzIGluIHRoZSBjb25zb2xlIHNvIEkgdHJ5IHRvIG1ha2Ugc3VyZSBvbmx5IHRoaW5ncyBJIHdhbnQgYXJlIHZpc2libGUuIFRoYXQgYmVpbmcgc2FpZCwgaWYgdGhlcmUgaXMgYSBiaWcgZXJyb3IgaGVyZSwgSSB3b3VsZCByZWFsbHkgYXBwcmVjaWF0ZSB5b3UgdGVsbGluZyBtZSBzbyBJIGNhbiBnZXQgcmlkIG9mIGl0IVwiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIlRoZSBjb2RlIGZvciBteSByZXN1bWUgaXMgaG9zdGVkIG9uIEdpdGh1YiBpZiB5b3UgcmVhbGx5IHdhbnQgdG8gZ28gaW50byBhbGwgdGhpcyEgPT4gaHR0cHM6Ly9naXRodWIuY29tL0ZsYW5kZXJzQnVyZ2VyL3Jlc3VtZVwiLFxyXG4gICk7XHJcblxyXG4gIC8qXHJcbiAgICAkKGRvY3VtZW50KS5iaW5kKFwia2V5dXAga2V5ZG93blwiLCBmdW5jdGlvbihlKXtcclxuICAgICAgaWYoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PSA4MCl7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgKi9cclxuXHJcbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5sb2FkaW5nXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuY2hlY2tib3gtbWVudVwiKS5vbihcImNoYW5nZVwiLCBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KFwibGlcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIiwgdGhpcy5jaGVja2VkKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5hbGxvdy1mb2N1c1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnRoZW1lQ291bnRlciA9IDY7XHJcbiAgJHNjb3BlLnRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAkc2NvcGUueWVhciA9ICRzY29wZS50b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICRzY29wZS5yYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcclxuXHJcbiAgJHNjb3BlLmZsaXBUaGVtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5zaG93KCk7XHJcbiAgICAkKFwiLmNvbnRlbnRcIikuaGlkZSgpO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgICB9LCA4MDApO1xyXG4gICAgJHNjb3BlLnRoZW1lQ291bnRlciA9ICRzY29wZS50aGVtZUNvdW50ZXIgPCA2ID8gJHNjb3BlLnRoZW1lQ291bnRlciArIDEgOiAoJHNjb3BlLnRoZW1lQ291bnRlciA9IDEpO1xyXG4gIH07XHJcblxyXG4gICQuZ2V0SlNPTihcIi9za2lsbHMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLnNraWxscyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuZW5hYmxlZDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvaG9iYmllcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuaG9iYmllcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9leHBlcmllbmNlLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5qb2JzID0gZGF0YTtcclxuICAgICRzY29wZS5qb2JzLmZvckVhY2goZnVuY3Rpb24gKGpvYikge1xyXG4gICAgICBqb2Iuc3RhcnREYXRlID0gbmV3IERhdGUoam9iLnN0YXJ0RGF0ZSk7XHJcbiAgICAgIGlmIChqb2IuZW5kRGF0ZSkgam9iLmVuZERhdGUgPSBuZXcgRGF0ZShqb2IuZW5kRGF0ZSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2NoYXJhZGVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5jaGFyYWRlcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5nZXRUaW1lU3BhbiA9IGZ1bmN0aW9uIChqb2IpIHtcclxuICAgIHJldHVybiBqb2Iuc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyAoam9iLmVuZERhdGUgPyBcIiAtIFwiICsgam9iLmVuZERhdGUuZ2V0RnVsbFllYXIoKSA6IFwiIC0gVG9kYXlcIik7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmxhbmd1YWdlcyA9IExhbmd1YWdlU3ZjLmxhbmd1YWdlcztcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBMYW5ndWFnZVN2Yy5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5ob3ZlcmRpdiA9IGZ1bmN0aW9uIChlLCBkaXZpZCkge1xyXG4gICAgdmFyIGxlZnQgPSBlLmNsaWVudFggKyBcInB4XCI7XHJcbiAgICB2YXIgdG9wID0gZS5jbGllbnRZICsgMjAgKyBcInB4XCI7XHJcblxyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdmlkKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcImxlZnRcIiwgbGVmdCk7XHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcInRvcFwiLCB0b3ApO1xyXG5cclxuICAgICQoXCIjXCIgKyBkaXZpZCkudG9nZ2xlKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNvY2lhbE1lZGlhID0gW1xyXG4gICAgLypcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiZmFjZWJvb2tcIixcclxuICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZmxhbmRlcnNidXJnZXJcIixcclxuICAgICAgICAgICAgXCJpY29uXCI6IFwiZmEtZmFjZWJvb2stZlwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJ0d2l0dGVyXCIsXHJcbiAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9CZWxnb0NhbmFkaWFuXCIsXHJcbiAgICAgICAgICAgIFwiaWNvblwiOiBcImZhLXR3aXR0ZXJcIlxyXG4gICAgICAgICAgfSwqL1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImluc3RhZ3JhbVwiLFxyXG4gICAgICB1cmw6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9mbGFuZGVyc2J1cmdlci9cIixcclxuICAgICAgaWNvbjogXCJmYS1pbnN0YWdyYW1cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwibGlua2VkaW5cIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9sYXVyZW50LWRlYmFja2VyLTE2MzNhOTE2XCIsXHJcbiAgICAgIGljb246IFwiZmEtbGlua2VkaW5cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiZ2l0aHViXCIsXHJcbiAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vRmxhbmRlcnNCdXJnZXJcIixcclxuICAgICAgaWNvbjogXCJmYS1naXRodWJcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwianNmaWRkbGVcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vanNmaWRkbGUubmV0L3VzZXIvQmVsZ29DYW5hZGlhbi9maWRkbGVzL1wiLFxyXG4gICAgICBpY29uOiBcImZhLWpzZmlkZGxlXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcInN0YWNrb3ZlcmZsb3dcIixcclxuICAgICAgdXJsOiBcImh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS91c2Vycy8xMDgzOTIzL2JlbGdvY2FuYWRpYW5cIixcclxuICAgICAgaWNvbjogXCJmYS1zdGFjay1vdmVyZmxvd1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJnb29kcmVhZHNcIixcclxuICAgICAgdXJsOiBcImh0dHBzOi8vd3d3Lmdvb2RyZWFkcy5jb20vdXNlci9zaG93LzE3MDcwMDEwLWxhdXJlbnRcIixcclxuICAgICAgaWNvbjogXCJmYS1nb29kcmVhZHNcIixcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikge1xyXG4gICAgVXNlclN2Yy5sb2dpbih3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGxvZ2luKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuJG9uKFwibG9naW5cIiwgZnVuY3Rpb24gKF8sIHVzZXIpIHtcclxuICAgIGxvZ2luKHVzZXIpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBsb2dpbih1c2VyKSB7XHJcbiAgICBpZiAoISRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIgPSB1c2VyLl9pZDtcclxuICAgICAgJHNjb3BlLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dpblwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICRzY29wZS4kb24oXCJ1cGRhdGVcIiwgZnVuY3Rpb24gKF8sIHVzZXIpIHtcclxuICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlID0gbmV3IERhdGUoJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSk7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkaW5nXCIsIGZ1bmN0aW9uIChfLCB1c2VyKSB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5zaG93KCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkZWRcIiwgZnVuY3Rpb24gKF8sIHVzZXIpIHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIiNsb2FkaW5nLWljb25cIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgIC5hdXRoKClcclxuICAgICAgLnNpZ25PdXQoKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dvdXRcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmZvcm1hdERhdGUgPSBmdW5jdGlvbiAoZGF0ZSkge1xyXG4gICAgdmFyIG1vbnRocyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIHJldHVybiBkYXRlLmdldERhdGUoKSArIFwiLVwiICsgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0gKyBcIi1cIiArIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB9O1xyXG5cclxuICBTdHJpbmcucHJvdG90eXBlLmNhcGl0YWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc2xpY2UoMSk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignQXN0ZXJvaWRzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEdhbWVTdmMpIHtcclxuXHJcbiAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhc3Rlcm9pZHMtcGFnZScpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICBjdHguZm9udCA9IFwiMzBweCBDb21pYyBTYW5zIE1TXCI7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgdmFyIHNob3RzID0ge307XHJcbiAgdmFyIGFzdGVyb2lkcyA9IHt9O1xyXG4gIHZhciBwb3dlcnVwcyA9IHt9O1xyXG4gIHZhciBleHBsb3Npb25zID0ge307XHJcbiAgdmFyIG1hcCA9IHt9O1xyXG4gIHZhciBzcGFjZXBpY3MgPSAxMDtcclxuICB2YXIgc3BhY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFjZXBpY3MpO1xyXG4gIHZhciBwb3dlcnVwVHlwZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdzcGVlZCcsXHJcbiAgICAgIGFubm91bmNlbWVudDogJ01heCBTcGVlZCDih6cnLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogNCxcclxuICAgICAgICBzaXplOiBbMTQsIDM1XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLm1heFNwZWVkICs9IDEwMDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ2Nvb2xkb3duJyxcclxuICAgICAgYW5ub3VuY2VtZW50OiAnQ29vbGRvd24g4oepJyxcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDMsXHJcbiAgICAgICAgc2l6ZTogWzE3LCAxN10sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWVcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuY29vbGRvd25UaW1lIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAncmFuZ2UnLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6ICdGaXJpbmcgUmFuZ2Ug4oenJyxcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA0LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzMwLCA4XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnJhbmdlICs9IDU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdzaGllbGQnLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6ICdTaGllbGQnLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDUsXHJcbiAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICBzaXplOiBbMTksIDE5XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24oc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnNoaWVsZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdudWtlJyxcclxuICAgICAgYW5ub3VuY2VtZW50OiAnTnVrZScsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICAgIHNpemU6IFsxNSwgMTVdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbihzcGFjZXNoaXApIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bhd25Bc3Rlcm9pZHMoNSk7XHJcbiAgICAgIH1cclxuICAgIH0sLypcclxuICAgICdzaWRlX2Nhbm5vbnMnLFxyXG4gICAgJ2xhc2VyJyxcclxuICAgICdzaGllbGQnLFxyXG4gICAgJ2xpZmUnLFxyXG4gICAgJ21pc3NpbGVzJyxcclxuICAgICdudWtlJ1xyXG4gICAgKi9cclxuICBdO1xyXG4gIHBvd2VydXBUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHBvd2VydXAsIGksIGFycmF5KSB7XHJcbiAgICBhcnJheVtpXS5pbWcuc3JjID0gJ2FzdGVyb2lkcy8nICsgcG93ZXJ1cC5uYW1lICsgJy5wbmcnO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgZXhwbG9zaW9uSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBleHBsb3Npb25JbWFnZS5zcmMgPSAnYXN0ZXJvaWRzL2V4cGxvc2lvbi5wbmcnO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgbWFwW2Uua2V5Q29kZSB8fCBlLndoaWNoXSA9IHRydWU7XHJcbiAgfSx0cnVlKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSBmYWxzZTtcclxuICB9LHRydWUpO1xyXG5cclxuICAkc2NvcGUuaGlnaHNjb3JlID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gZXZhbHVhdGVLZXlzKCkge1xyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgLy9TcGFjZVxyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zaG9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM3XSkge1xyXG4gICAgICAgIC8vTGVmdCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiA9IDM2MDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uIC09IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzldKSB7XHJcbiAgICAgICAgLy9SaWdodCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAucm90YXRpb24gPT09IDM2MCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uICs9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzhdKSB7XHJcbiAgICAgICAgLy9VcCBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPD0gc3BhY2VzaGlwLm1heFNwZWVkKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgKz0gNTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzQwXSkge1xyXG4gICAgICAgIC8vRG93biBBcnJvd1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQgLT0gMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChtYXBbMzJdKSB7XHJcbiAgICAgICAgc3RhcnQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gU3BhY2VzaGlwKCkge1xyXG4gICAgdGhpcy53aWR0aCA9IDUwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSA1MDtcclxuICAgIHRoaXMuc2hpZWxkID0gZmFsc2U7XHJcbiAgICB0aGlzLnJhbmdlID0gODA7XHJcbiAgICB0aGlzLmNhbm5vbiA9IHtcclxuICAgICAgeDogdGhpcy53aWR0aCAvIDIgLSA0LjUsXHJcbiAgICAgIHk6IHRoaXMuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0ICogMC4wNzgxMjVcclxuICAgIH07XHJcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcclxuICAgIHRoaXMuY29vbGRvd25UaW1lID0gMjA7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW1xyXG4gICAgICBjYW52YXMud2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIsXHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgLyAyXHJcbiAgICBdO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9ICdhc3Rlcm9pZHMvc3BhY2VzaGlwLnBuZyc7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMubWF4U3BlZWQgPSAxMDAwO1xyXG4gICAgdGhpcy5hbmdsZSA9IDA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gMDtcclxuXHJcbiAgICB0aGlzLnNob290ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuY29vbGRvd24gPSB0aGlzLmNvb2xkb3duVGltZTtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgc2hvdHNbaWRdID0gbmV3IFNob3QoaWQsIHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuc2hpZWxkKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5hcmModGhpcy5wb3NpdGlvblswXSArIHRoaXMud2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uWzFdICsgdGhpcy5oZWlnaHQgLyAyLCAzMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigzNSwgMjM3LCA4NiwgMC41KVwiO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiKDY2LCAxNjgsIDM2LCAwLjgpXCI7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICB2YXIgYXN0ZXJvaWQgPSBhc3Rlcm9pZHNbaV07XHJcbiAgICAgICAgaWYgKGhpdChhc3Rlcm9pZCwgdGhpcykpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNoaWVsZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBhc3Rlcm9pZC5leHBsb2RlKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2FtZU92ZXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmdsZSA9IHRoaXMucm90YXRpb247XHJcbiAgICAgIGlmICh0aGlzLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgIHRoaXMuY29vbGRvd24tLTtcclxuICAgICAgfVxyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNob3QoaWQsIHNwYWNlc2hpcCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzBdICsgc3BhY2VzaGlwLmNhbm5vbi54ICsgc3BhY2VzaGlwLmNhbm5vbi54ICogTWF0aC5jb3MoKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkgLyAxODApLFxyXG4gICAgICBzcGFjZXNoaXAucG9zaXRpb25bMV0gKyBzcGFjZXNoaXAuY2Fubm9uLnkgKyBzcGFjZXNoaXAuY2Fubm9uLnkgKiBNYXRoLnNpbigoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSAvIDE4MClcclxuICAgIF07XHJcbiAgICB0aGlzLndpZHRoID0gOTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gMTU7XHJcbiAgICB0aGlzLmFuZ2xlID0gc3BhY2VzaGlwLmFuZ2xlO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IHNwYWNlc2hpcC5yb3RhdGlvbjtcclxuICAgIHRoaXMuc3BlZWQgPSBzcGFjZXNoaXAuc3BlZWQgKyA1MDA7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gc3BhY2VzaGlwLnJhbmdlO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9ICdhc3Rlcm9pZHMvc2hvdC5wbmcnO1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQXN0ZXJvaWQoaWQpIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMud2lkdGggPSBNYXRoLnJhbmRvbSgpICogNTAgKyAyMDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy53aWR0aDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uU3BlZWQgPSBNYXRoLnJhbmRvbSgpICogNiAtIDM7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDMwMCArIDI7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gJ2FzdGVyb2lkcy9hc3Rlcm9pZCcgKyAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNikgKyAxKSArICcucG5nJztcclxuXHJcbiAgICB0aGlzLmV4cGxvZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgZXhwbG9zaW9uc1t0aGlzLmlkXSA9IG5ldyBFeHBsb3Npb24odGhpcyk7XHJcbiAgICAgIHJldHVybiBkZWxldGUgYXN0ZXJvaWRzW3RoaXMuaWRdO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5yb3RhdGlvbiArPSB0aGlzLnJvdGF0aW9uU3BlZWQ7XHJcbiAgICAgIGlmICh0aGlzLnJvdGF0aW9uID4gMzYwKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMucm90YXRpb24gLSAzNjA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5yb3RhdGlvbiA8IDApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gMzYwICsgdGhpcy5yb3RhdGlvbjtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgICAgdmFyIHNob3QgPSBzaG90c1tpXTtcclxuICAgICAgICBpZiAoaGl0KHNob3QsIHRoaXMpKSB7XHJcbiAgICAgICAgICB0aGlzLmV4cGxvZGUoKTtcclxuICAgICAgICAgIHZhciBwb2ludHMgPSBNYXRoLmZsb29yKChzaG90LnNwZWVkIC0gNTAwKSAvIDEwICsgNzAgLSB0aGlzLndpZHRoKTtcclxuICAgICAgICAgIGlmIChNYXRoLmZsb29yKChwb2ludHMgKyAkc2NvcGUuc2NvcmUpIC8gMTAwKSA+IE1hdGguZmxvb3IoJHNjb3BlLnNjb3JlIC8gMTAwKSkge1xyXG4gICAgICAgICAgICBzcGF3blBvd2VydXAoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICRzY29wZS5zY29yZSArPSBwb2ludHM7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gRXhwbG9zaW9uKG9iamVjdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtvYmplY3QucG9zaXRpb25bMF0sIG9iamVjdC5wb3NpdGlvblsxXV07XHJcbiAgICB0aGlzLndpZHRoID0gb2JqZWN0LndpZHRoO1xyXG4gICAgdGhpcy5oZWlnaHQgPSBvYmplY3QuaGVpZ2h0O1xyXG4gICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMuY3ljbGUgPSB7XHJcbiAgICAgIHJvd3M6IDYsXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHNpemU6IFsyNTYsIDI1Nl0sXHJcbiAgICAgIGk6IDAsXHJcbiAgICAgIGRpcmVjdGlvbjogdHJ1ZVxyXG4gICAgfTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSA0NztcclxuICAgIHRoaXMuaW1nID0gZXhwbG9zaW9uSW1hZ2U7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBQb3dlcnVwKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvd2VydXAgPSBwb3dlcnVwVHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG93ZXJ1cFR5cGVzLmxlbmd0aCldO1xyXG4gICAgdGhpcy5jeWNsZSA9IHRoaXMucG93ZXJ1cC5jeWNsZTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAxMDAwO1xyXG4gICAgaWYgKHRoaXMuY3ljbGUuc2l6ZVsxXSA+IHRoaXMuY3ljbGUuc2l6ZVswXSkge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IDQwO1xyXG4gICAgICB0aGlzLndpZHRoID0gTWF0aC5yb3VuZCh0aGlzLmhlaWdodCAvIHRoaXMuY3ljbGUuc2l6ZVsxXSAqIHRoaXMuY3ljbGUuc2l6ZVswXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndpZHRoID0gNDA7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5yb3VuZCh0aGlzLndpZHRoIC8gdGhpcy5jeWNsZS5zaXplWzBdICogdGhpcy5jeWNsZS5zaXplWzFdKTtcclxuICAgIH1cclxuICAgIHRoaXMucG9zaXRpb24gPSBnZXRFbnRyeVBvc2l0aW9uKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIHRoaXMuaW1nID0gdGhpcy5wb3dlcnVwLmltZztcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAxNTAgKyA1MDtcclxuICAgIHZhciBkZWxheSA9IDU7XHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgaWYgKHRoaXMubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhpdChzcGFjZXNoaXAsIHRoaXMpKSB7XHJcbiAgICAgICAgJHNjb3BlLmFubm91bmNlID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2VtZW50ID0gdGhpcy5wb3dlcnVwLmFubm91bmNlbWVudDtcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICRzY29wZS5hbm5vdW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHRoaXMucG93ZXJ1cC5hY3RpdmF0ZShzcGFjZXNoaXApO1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAoZGVsYXkgPD0gMCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxheSA9IDU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsYXktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmUob2JqZWN0KSB7XHJcbiAgICAgb2JqZWN0LnBvc2l0aW9uWzBdICs9IG9iamVjdC5zcGVlZCAvIDEwMCAqIE1hdGguY29zKChvYmplY3QuYW5nbGUgLSA5MCkgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICBvYmplY3QucG9zaXRpb25bMV0gKz0gb2JqZWN0LnNwZWVkIC8gMTAwICogTWF0aC5zaW4oKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgIGlmIChvYmplY3QucG9zaXRpb25bMF0gPiBjYW52YXMud2lkdGgpIHtcclxuICAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IC1vYmplY3Qud2lkdGg7XHJcbiAgICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMF0gPCAtb2JqZWN0LndpZHRoKSB7XHJcbiAgICAgICBvYmplY3QucG9zaXRpb25bMF0gPSBjYW52YXMud2lkdGg7XHJcbiAgICAgfVxyXG4gICAgIGlmIChvYmplY3QucG9zaXRpb25bMV0gPiBjYW52YXMuaGVpZ2h0KSB7XHJcbiAgICAgICBvYmplY3QucG9zaXRpb25bMV0gPSAtb2JqZWN0LmhlaWdodDtcclxuICAgICB9IGVsc2UgaWYgKG9iamVjdC5wb3NpdGlvblsxXSA8IC1vYmplY3QuaGVpZ2h0KSB7XHJcbiAgICAgICBvYmplY3QucG9zaXRpb25bMV0gPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgIH1cclxuICAgICBjdHguc2F2ZSgpO1xyXG4gICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV0pO1xyXG4gICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LndpZHRoIC8gMiwgb2JqZWN0LmhlaWdodCAvIDIpO1xyXG4gICAgIGN0eC5yb3RhdGUob2JqZWN0LnJvdGF0aW9uICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgaWYgKG9iamVjdC5jeWNsZSkge1xyXG4gICAgICAgdmFyIGNvbHVtbiA9IG9iamVjdC5jeWNsZS5pICUgb2JqZWN0LmN5Y2xlLmNvbHVtbnM7XHJcbiAgICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcihvYmplY3QuY3ljbGUuaSAvIG9iamVjdC5jeWNsZS5jb2x1bW5zKTtcclxuICAgICAgIGN0eC5kcmF3SW1hZ2Uob2JqZWN0LmltZywgb2JqZWN0LmN5Y2xlLnNpemVbMF0gKiBjb2x1bW4sIG9iamVjdC5jeWNsZS5zaXplWzFdICogcm93LCBvYmplY3QuY3ljbGUuc2l6ZVswXSwgb2JqZWN0LmN5Y2xlLnNpemVbMV0sIC1vYmplY3Qud2lkdGggLyAyLCAtb2JqZWN0LmhlaWdodCAvIDIsIG9iamVjdC53aWR0aCwgb2JqZWN0LmhlaWdodCk7XHJcblxyXG4gICAgICAgaWYgKG9iamVjdC5jeWNsZS5pIDw9IDApIHtcclxuICAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSAwO1xyXG4gICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgIH0gZWxzZSBpZiAob2JqZWN0LmN5Y2xlLmkgPj0gb2JqZWN0LmN5Y2xlLmNvbHVtbnMgKiBvYmplY3QuY3ljbGUucm93cykge1xyXG4gICAgICAgICBvYmplY3QuY3ljbGUuaSA9IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MgLSAxO1xyXG4gICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICB9XHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgIGN0eC5kcmF3SW1hZ2Uob2JqZWN0LmltZywgLW9iamVjdC53aWR0aCAvIDIsIC1vYmplY3QuaGVpZ2h0IC8gMiwgb2JqZWN0LndpZHRoLCBvYmplY3QuaGVpZ2h0KTtcclxuICAgICB9XHJcbiAgICAgY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHZhciBzcGFjZXNoaXA7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIHNwYWNlc2hpcCA9IG5ldyBTcGFjZXNoaXAoKTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgIGF1dG9TcGF3bigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RW50cnlQb3NpdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB2YXIgZ3JpZFggPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciBncmlkWSA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIHgsIHkgPSAwO1xyXG4gICAgaWYgKGdyaWRYID49IDEpIHtcclxuICAgICAgeCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XHJcbiAgICAgIGlmICh5ID49IDEpIHtcclxuICAgICAgICB5ID0gMCAtIGhlaWdodDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeSA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICBpZiAoZ3JpZFkgPj0gMSkge1xyXG4gICAgICAgIHggPSAwIC0gd2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFt4LCB5XTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpdChvYmplY3QxLCBvYmplY3QyKSB7XHJcbiAgICByZXR1cm4gKG9iamVjdDEucG9zaXRpb25bMF0gPCBvYmplY3QyLnBvc2l0aW9uWzBdICsgb2JqZWN0Mi53aWR0aCkgJiZcclxuICAgICAgICAgICAob2JqZWN0Mi5wb3NpdGlvblswXSA8IG9iamVjdDEucG9zaXRpb25bMF0gKyBvYmplY3QxLndpZHRoKSAmJlxyXG4gICAgICAgICAgIChvYmplY3QxLnBvc2l0aW9uWzFdIDwgb2JqZWN0Mi5wb3NpdGlvblsxXSArIG9iamVjdDIuaGVpZ2h0KSAmJlxyXG4gICAgICAgICAgIChvYmplY3QyLnBvc2l0aW9uWzFdIDwgb2JqZWN0MS5wb3NpdGlvblsxXSArIG9iamVjdDEuaGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGF1dG9TcGF3bigpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhhc3Rlcm9pZHMpLmxlbmd0aCA8IDIwMCkge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH1cclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGF1dG9TcGF3bigpO1xyXG4gICAgICB9LCBzcGF3bkludGVydmFsKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25JbnRlcnZhbCgpIHtcclxuICAgIGlmICgkc2NvcGUuc2NvcmUgPCAxMDAwKSB7XHJcbiAgICAgIHJldHVybiAxMDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCAyMDAwKSB7XHJcbiAgICAgIHJldHVybiA5MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDMwMDApIHtcclxuICAgICAgcmV0dXJuIDgwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNDAwMCkge1xyXG4gICAgICByZXR1cm4gNzAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA1MDAwKSB7XHJcbiAgICAgIHJldHVybiA2MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDYwMDApIHtcclxuICAgICAgcmV0dXJuIDUwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNzAwMCkge1xyXG4gICAgICByZXR1cm4gNDAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA4MDAwKSB7XHJcbiAgICAgIHJldHVybiAzMDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gMjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25Bc3Rlcm9pZHMoYW1vdW50KSB7XHJcbiAgICB2YXIgaSA9IDA7XHJcbiAgICBkbyB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIGFzdGVyb2lkc1tpZF0gPSBuZXcgQXN0ZXJvaWQoaWQpO1xyXG4gICAgfSB3aGlsZSAoaSsrIDw9IGFtb3VudCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3blBvd2VydXAoKSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMocG93ZXJ1cHMpLmxlbmd0aCA8IDMpIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgcG93ZXJ1cHNbaWRdID0gbmV3IFBvd2VydXAoaWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2FtZU92ZXIoKSB7XHJcbiAgICAkc2NvcGUucGxheWluZyA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgIH1cclxuICAgIHNob3RzID0ge307XHJcbiAgICBpZiAoJHNjb3BlLmxvZ2dlZEluKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuaGlnaHNjb3JlLmFzdGVyb2lkcyA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzID0gJHNjb3BlLnNjb3JlO1xyXG4gICAgICAgIEdhbWVTdmMuc2V0SGlnaHNjb3JlKCdhc3Rlcm9pZHMnLCAkc2NvcGUuY3VycmVudFVzZXIuX2lkLCAkc2NvcGUuc2NvcmUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hzY29yZSA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5oaWdoc2NvcmUgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cdC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG5cdC8vIGRyYXcgY2FudmFzLlxyXG5cclxuXHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuXHJcblx0XHQvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG5cdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0fVxyXG5cdC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuXHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcblx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogMTA1KTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcblxyXG4gIHZhciB0YWxseSA9IDA7XHJcbiAgdmFyIGRpcmVjdGlvbiA9IHRydWU7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBmb3IgKHZhciBpIGluIHNob3RzKSB7XHJcbiAgICAgIGlmIChzaG90c1tpXS5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIHNob3RzW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3RzW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIHBvd2VydXBzKSB7XHJcbiAgICAgIHBvd2VydXBzW2ldLm1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBleHBsb3Npb25zKSB7XHJcbiAgICAgIGlmIChleHBsb3Npb25zW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgZXhwbG9zaW9uc1tpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBleHBsb3Npb25zW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXZhbHVhdGVLZXlzKCk7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgc3BhY2VzaGlwLm1vdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHZhciBncmFkaWVudCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCBjYW52YXMud2lkdGgsIDApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoJzAnLCAncmdiKCcgKyBNYXRoLmZsb29yKDI1NiAtIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcpJyk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgnMC4yNScsICdyZ2IoJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMjU2IC0gMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJyknKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKCcwLjUnLCAncmdiKCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDAgKyAyNTYgKiB0YWxseSAvIDEwMCkgKyAnLCcgKyBNYXRoLmZsb29yKDI1NiAtIDI1NiAqIHRhbGx5IC8gMTAwKSArICcpJyk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgnMC43NScsICdyZ2IoJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMjU2IC0gMjU2ICogdGFsbHkgLyAxMDApICsgJywnICsgTWF0aC5mbG9vcigwICsgMjU2ICogdGFsbHkgLyAxMDApICsgJyknKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKCcxLjAnLCAncmdiKCcgKyBNYXRoLmZsb29yKDI1NiAtIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcsJyArIE1hdGguZmxvb3IoMCArIDI1NiAqIHRhbGx5IC8gMTAwKSArICcpJyk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgICAgY3R4LmZvbnQ9JzYwcHggTW9ub3Rvbic7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnQXN0ZXJvaWRzJywgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dCgnQXN0ZXJvaWRzJykud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGN0eC5mb250PScyMHB4IEFsZHJpY2gnO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ1ByZXNzIHNwYWNlIHRvIHN0YXJ0JywgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dCgnUHJlc3Mgc3BhY2UgdG8gc3RhcnQnKS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyICsgMjApO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ0Rlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlcicsIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoJ0Rlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlcicpLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAtIDMwKTtcclxuICAgIH1cclxuICAgIHRhbGx5ICs9IGRpcmVjdGlvbiA/IDEgOiAtMTtcclxuICAgIGlmICh0YWxseSA+IDEwMCkge1xyXG4gICAgICB0YWxseSA9IDEwMDtcclxuICAgICAgZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHRhbGx5IDwgMCkge1xyXG4gICAgICB0YWxseSA9IDA7XHJcbiAgICAgIGRpcmVjdGlvbiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuc3BhY2UgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImFzdGVyb2lkcy9zcGFjZScgKyBzcGFjZSArICcuanBnXCIpJ1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuXHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdCdWJibGVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidWJibGVzLXBhZ2UnKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgdmFyIGJ1YmJsZXMgPSBbXTtcclxuICB2YXIgY29sb3JzID0gWycjZmZjMzAwJywnI2ZmNTczMycsJyNjNzAwMzknLCcjOTAwYzNlJywnIzU3MTg0NSddO1xyXG5cclxuICBmdW5jdGlvbiBCdWJibGUoKSB7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gMDtcclxuICAgIHRoaXMucmFkaXVzID0gMTtcclxuICAgIHRoaXMuZXhwYW5kaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgIHRoaXMuY2lyY3VtZmVyZW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDUwKSArIDU7XHJcbiAgICB0aGlzLm1heFJhZGl1cyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDIwMCkgKyAyMDtcclxuICAgIHRoaXMueCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aCk7XHJcbiAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0KTtcclxuICAgIHRoaXMudnggPSAoTWF0aC5yYW5kb20oKSA+PSAwLjUgPyAxIDogLTEpO1xyXG4gICAgdGhpcy52eSA9IChNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgYnViYmxlcy5mb3JFYWNoKGZ1bmN0aW9uKGJ1YmJsZSkge1xyXG4gICAgICB2YXIgY29sb3IgPSBjb2xvcnNbTWF0aC5yb3VuZChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKGJ1YmJsZS54LCBidWJibGUueSwgYnViYmxlLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gY29sb3JzW01hdGgucm91bmQoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1tjb2xvcnMubGVuZ3RoIC0gTWF0aC5yb3VuZChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9IGJ1YmJsZS5jaXJjdW1mZXJlbmNlICogYnViYmxlLnJhZGl1cyAvIGJ1YmJsZS5tYXhSYWRpdXM7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmlsdGVyQnViYmxlcygpIHtcclxuICAgIGJ1YmJsZXMucHVzaChuZXcgQnViYmxlKCkpO1xyXG4gICAgYnViYmxlcyA9IGJ1YmJsZXMuZmlsdGVyKGZ1bmN0aW9uIChidWJibGUpIHtcclxuICAgICAgaWYgKGJ1YmJsZS5yYWRpdXMgPT09IGJ1YmJsZS5tYXhSYWRpdXMpIHtcclxuICAgICAgICBidWJibGUuZXhwYW5kaW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgYnViYmxlLnggKz0gYnViYmxlLnZ4ICogYnViYmxlLnNwZWVkO1xyXG4gICAgICBidWJibGUueSArPSBidWJibGUudnkgKiBidWJibGUuc3BlZWQ7XHJcbiAgICAgIGJ1YmJsZS5yYWRpdXMgKz0gKGJ1YmJsZS5leHBhbmRpbmcgPyAxIDogLTEpO1xyXG4gICAgICByZXR1cm4gYnViYmxlLnJhZGl1cyA+IDA7XHJcbiAgICB9KTtcclxuICAgIGRyYXcoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuXHJcblxyXG5cdChmdW5jdGlvbigpIHtcclxuXHJcblx0XHQvLyBTdGFydCBsaXN0ZW5pbmcgdG8gcmVzaXplIGV2ZW50cyBhbmRcclxuXHRcdC8vIGRyYXcgY2FudmFzLlxyXG5cdFx0aW5pdGlhbGl6ZSgpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHRcdC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcblx0XHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0XHQvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcblx0XHRcdC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcblx0XHRcdHJlc2l6ZUNhbnZhcygpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG5cdFx0Ly8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcblx0XHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRcdGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuXHRcdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDU1IDogMTExKTtcclxuXHRcdH1cclxuXHJcblx0fSkoKTtcclxuXHJcblxyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdDaGFyYWRlc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblx0JHNjb3BlLnNlbGVjdFdvcmQgPSBjYXRlZ29yeSA9PiB7XHJcblx0XHQkc2NvcGUud29yZCA9XHJcblx0XHRcdCRzY29wZS5jaGFyYWRlc1tjYXRlZ29yeV1bXHJcblx0XHRcdFx0TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogJHNjb3BlLmNoYXJhZGVzW2NhdGVnb3J5XS5sZW5ndGgpXHJcblx0XHRcdF07XHJcblx0XHRjb25zb2xlLmxvZygkc2NvcGUud29yZCk7XHJcblx0fTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJDb250YWN0Q3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBFbWFpbFN2Yykge1xyXG4gICRzY29wZS5vcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNwYW1cIixcclxuICAgICAgdGV4dDogXCJJIGFtIGEgc3BhbSBib3QgYW5kIGF1dG9tYXRpY2FsbHkgY2hlY2sgdGhlIGZpcnN0IG9wdGlvbiBJIGZpbmQhXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk9wcG9ydHVuaXR5XCIsXHJcbiAgICAgIHRleHQ6IFwiWW91IHNlZW0gdG8gaGF2ZSB0aGUgc2tpbGxzIEkgc2VlaywgSSdkIGxpa2UgdG8gdGFsayBhYm91dCBzb21lIG9wcG9ydHVuaXRpZXMuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJlc3VtZVwiLFxyXG4gICAgICB0ZXh0OiBcIkkgZGlnIHRoZSByZXN1bWUsIGhvdyBkaWQgeW91IG1ha2UgaXQ/XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk90aGVyXCIsXHJcbiAgICAgIHRleHQ6IFwiU3VtdGluIGVsc2UhXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gICRzY29wZS5jb250YWN0ID0ge1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgICBhYm91dDogXCJcIixcclxuICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUuc2VuZGluZyA9IHRydWU7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlcmVcIik7XHJcbiAgICBFbWFpbFN2Yy5zZW5kKHtcclxuICAgICAgZW1haWw6ICRzY29wZS5jb250YWN0LmVtYWlsLFxyXG4gICAgICBuYW1lOiAkc2NvcGUuY29udGFjdC5uYW1lLFxyXG4gICAgICBwaG9uZTogJHNjb3BlLmNvbnRhY3QucGhvbmUsXHJcbiAgICAgIGFib3V0OiAkc2NvcGUuY29udGFjdC5hYm91dCxcclxuICAgICAgbWVzc2FnZTogJHNjb3BlLmNvbnRhY3QubWVzc2FnZSxcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5zZW50ID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNVQ0NFU1MuIHN0YXR1cz0lZCwgdGV4dD0lc1wiLCByZXNwb25zZS5zdGF0dXMsIHJlc3BvbnNlLnRleHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICRzY29wZS5zZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGQUlMRUQuIGVycm9yPVwiLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0V4cGVyaWVuY2VDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUuZ2V0U2tpbGwgPSBmdW5jdGlvbihza2lsbENvZGUpIHtcclxuICAgIGlmICghJHNjb3BlLnNraWxscykgcmV0dXJuO1xyXG4gICAgcmV0dXJuICRzY29wZS5za2lsbHMuZmluZChmdW5jdGlvbihza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuY29kZSA9PT0gc2tpbGxDb2RlO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0hvYmJpZXNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xyXG5cclxuICAkc2NvcGUuaG9iYnlTZWxlY3RvclZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgJC5nZXRKU09OKCdodHRwczovL3d3dy5yZWRkaXQuY29tL3VzZXIvYmVsZ29jYW5hZGlhbi9hYm91dC8uanNvbicsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkSG9iYnkgPSAkc2NvcGUuaG9iYmllc1swXTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdEhvYmJ5ID0gZnVuY3Rpb24gKGhvYmJ5KSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRIb2JieSA9IGhvYmJ5O1xyXG4gICAgJHNjb3BlLmhvYmJ5U2VsZWN0b3JWaXNpYmxlID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNob3dIb2JieSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIGFycmF5KSB7XHJcbiAgICBpZiAoIXZhbHVlLmltYWdlcykgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHZhbHVlLmltYWdlcy5sZW5ndGggPiAwO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xlbW1pbmdzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEdhbWVTdmMpIHtcclxuXHJcbiAgdmFyIExFRlQgPSAwO1xyXG4gIHZhciBSSUdIVCA9IDE7XHJcblxyXG4gIHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVtbWluZ3MtcGFnZScpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICB2YXIgbGVtbWluZ3NJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGxlbW1pbmdzSW1hZ2Uuc3JjID0gJ2xlbW1pbmdzL2xlbW1pbmdzLnBuZyc7XHJcbiAgdmFyIGRlY29ySW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBkZWNvckltYWdlLnNyYyA9ICdsZW1taW5ncy9kZWNvci5wbmcnO1xyXG4gIHZhciBsZW1taW5ncyA9IHt9O1xyXG4gIHZhciBzdGFydGVkID0gZmFsc2U7XHJcblxyXG4gIHZhciBhY3Rpb25zID0ge1xyXG4gICAgd2Fsazoge1xyXG4gICAgICBzdGFydDogWzAsIDBdLFxyXG4gICAgICBlbmQ6IFszMjAsIDIwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBodWg6IHtcclxuICAgICAgc3RhcnQ6IFszMjAsIDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDIwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGZhbGw6IHtcclxuICAgICAgc3RhcnQ6IFswLCA4MF0sXHJcbiAgICAgIGVuZDogWzE2MCwgMTAwXSxcclxuICAgICAgY29sdW1uczogNCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBmbHk6IHtcclxuICAgICAgc3RhcnQ6IFsxNjAsIDgwXSxcclxuICAgICAgZW5kOiBbNDgwLCAxMTBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHN0b3A6IHtcclxuICAgICAgc3RhcnQ6IFswLCAxMjBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDE0MF0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGNsaW1iOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMTYwXSxcclxuICAgICAgZW5kOiBbNjQwLCAxODVdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBzdGFydDogWzAsIDIwMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMjI1XSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgcHVuY2g6IHtcclxuICAgICAgc3RhcnQ6IFswLCAyNDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDMwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAyLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGRpZzoge1xyXG4gICAgICBzdGFydDogWzAsIDMyMF0sXHJcbiAgICAgIGVuZDogWzMyMCwgMzQ1XSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gTGVtbWluZyhpbml0KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjYW52YXMud2lkdGggLSAyMDApKSArIDEwMCwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNhbnZhcy5oZWlnaHQgLSAyMDApKSArIDEwMF07XHJcbiAgICB0aGlzLmRpcmVjdGlvbiA9IE1hdGgucmFuZG9tKCkgKiAyID4gMSA/IExFRlQgOiBSSUdIVDtcclxuICAgIHRoaXMuYWN0ID0gZnVuY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uc1thY3Rpb25dO1xyXG4gICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgdGhpcy53aWR0aCA9ICh0aGlzLmFjdGlvbi5lbmRbMF0gLSB0aGlzLmFjdGlvbi5zdGFydFswXSkgLyB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICB0aGlzLmhlaWdodCA9ICh0aGlzLmFjdGlvbi5lbmRbMV0gLSB0aGlzLmFjdGlvbi5zdGFydFsxXSAtICgyMCAqICh0aGlzLmFjdGlvbi5yb3dzIC0gMSkpKSAvIHRoaXMuYWN0aW9uLnJvd3M7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICB0aGlzLmFjdChpbml0KTtcclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25bMF0sIHRoaXMucG9zaXRpb25bMV0pO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IExFRlQpIHtcclxuICAgICAgICBjdHguc2NhbGUoLTEsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBjb2x1bW4gPSB0aGlzLmN5Y2xlICUgdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3IodGhpcy5jeWNsZSAvIHRoaXMuYWN0aW9uLmNvbHVtbnMpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKGxlbW1pbmdzSW1hZ2UsICh0aGlzLndpZHRoICogY29sdW1uKSArIHRoaXMuYWN0aW9uLnN0YXJ0WzBdLCAoKHRoaXMuaGVpZ2h0ICsgMjApICogcm93KSArIHRoaXMuYWN0aW9uLnN0YXJ0WzFdLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICAgIGlmICh0aGlzLmFjdGlvbi5yZXZlcnNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgICBpZiAodGhpcy5jeWNsZSA+PSB0aGlzLmFjdGlvbi5jb2x1bW5zICogdGhpcy5hY3Rpb24ucm93cykge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICF0aGlzLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZS0tO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLS07XHJcbiAgICAgICAgICBpZiAodGhpcy5jeWNsZSA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSAhdGhpcy5hbmltYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPj0gdGhpcy5hY3Rpb24uY29sdW1ucyAqIHRoaXMuYWN0aW9uLnJvd3MpIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEhhdGNoKCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFsyMCwgMjBdO1xyXG4gICAgdGhpcy5hY3Rpb24gPSB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMF0sXHJcbiAgICAgIGVuZDogWzgyLCA1MDBdLFxyXG4gICAgICBjb2x1bW5zOiAxLFxyXG4gICAgICByb3dzOiAxMFxyXG4gICAgfVxyXG4gICAgdGhpcy53aWR0aCA9ICh0aGlzLmFjdGlvbi5lbmRbMF0gLSB0aGlzLmFjdGlvbi5zdGFydFswXSkgLyB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAodGhpcy5hY3Rpb24uZW5kWzFdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMV0pIC8gdGhpcy5hY3Rpb24ucm93cztcclxuICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgdGhpcy5vcGVuID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSwgdGhpcy5wb3NpdGlvblsxXSk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIHZhciBjb2x1bW4sIHJvdztcclxuICAgICAgaWYgKHN0YXJ0ZWQpIHtcclxuICAgICAgICBjb2x1bW4gPSB0aGlzLmN5Y2xlICUgdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgICByb3cgPSBNYXRoLmZsb29yKHRoaXMuY3ljbGUgLyB0aGlzLmFjdGlvbi5jb2x1bW5zKTtcclxuICAgICAgICBpZiAodGhpcy5jeWNsZSA8IDkpIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29sdW1uID0gMDtcclxuICAgICAgICByb3cgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoZGVjb3JJbWFnZSwgKHRoaXMud2lkdGggKiBjb2x1bW4pICsgdGhpcy5hY3Rpb24uc3RhcnRbMF0sICh0aGlzLmhlaWdodCAqIHJvdykgKyB0aGlzLmFjdGlvbi5zdGFydFsxXSAtIDEsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduTGVtbWluZygpIHtcclxuICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2goZnVuY3Rpb24oYWN0aW9uKSB7XHJcbiAgICAgIGxlbW1pbmdzW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCldID0gbmV3IExlbW1pbmcoYWN0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblx0ZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuXHRcdC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcblx0XHQvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuXHRcdC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHRcdC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcblx0XHRyZXNpemVDYW52YXMoKTtcclxuXHR9XHJcblx0Ly8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG5cdC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG5cdC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG5cdGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuXHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cdFx0Y2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTAgOiAxMDUpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZSgpO1xyXG4gIHNwYXduTGVtbWluZygpO1xyXG4gIGxldCBoYXRjaCA9IG5ldyBIYXRjaCgpXHJcbiAgZHJhdygpO1xyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgaWYgKCFzdGFydGVkKSB7XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmZvbnQ9JzQwcHggTW9ub3Rvbic7XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSAnMTAnO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmx1ZSc7XHJcbiAgICAgIGN0eC5yZWN0KDE1LCBjYW52YXMuaGVpZ2h0IC0gNDUsIGN0eC5tZWFzdXJlVGV4dCgnU3RhcnQnKS53aWR0aCArIDIwLCBjdHgubWVhc3VyZVRleHQoJ1N0YXJ0JykuaGVpZ2h0ICsgY2FudmFzLmhlaWdodCAtIDQ1KTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgY3R4LmZpbGxUZXh0KCdTdGFydCcsIDIwLCBjYW52YXMuaGVpZ2h0IC0gNTApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZm9yICh2YXIgaSBpbiBsZW1taW5ncykge1xyXG4gICAgICAgIGxlbW1pbmdzW2ldLm1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGF0Y2gub3BlbigpO1xyXG4gICAgc3RhcnRlZCA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBkcmF3KCk7XHJcbiAgICB9LCAxNTApO1xyXG4gIH1cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignTGlzdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBDYXRlZ29yaWVzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5zaG93Q2F0ZWdvcnkgPSB0cnVlO1xyXG5cclxuICAkc2NvcGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIENhdGVnb3JpZXNTdmMuZ2V0Q2F0ZWdvcmllcygpXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAkc2NvcGUudGFza3MgPSBbXTtcclxuICAgICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuY2F0ZWdvcmllcykge1xyXG4gICAgICAgIGZvciAodmFyIGogaW4gJHNjb3BlLmNhdGVnb3JpZXNbaV0udGFza3MpIHtcclxuICAgICAgICAgICRzY29wZS50YXNrcy5wdXNoKHtcclxuICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiAkc2NvcGUuY2F0ZWdvcmllc1tpXS5uYW1lLFxyXG4gICAgICAgICAgICBcInRhc2tcIjogJHNjb3BlLmNhdGVnb3JpZXNbaV0udGFza3Nbal0ubmFtZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkgPSBmdW5jdGlvbihjYXRlZ29yeSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICRzY29wZS5zZWxlY3RlZFRhc2tzID0gW107XHJcbiAgICAkc2NvcGUuc2VsZWN0YWJsZVRhc2tzID0gW107XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzKSB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RhYmxlVGFza3MucHVzaCgkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuc2hvd0NhdGVnb3J5ID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuZW50ZXJlZENhdGVnb3J5ID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLm5ld0NhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHNjb3BlLmNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKCRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUgPT09IGNhdGVnb3J5KSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5KCRzY29wZS5jYXRlZ29yaWVzW2ldKTtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5hZGRDYXRlZ29yeSh7XHJcbiAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5XHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgJHNjb3BlLmluaXQoKTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICRzY29wZS5lbnRlcmVkQ2F0ZWdvcnkgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUubmV3VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpIHtcclxuICAgICAgaWYgKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldLm5hbWUgPT09IHRhc2spIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdFRhc2soJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS5uYW1lLCB7XHJcbiAgICAgICAgdGFzazogdGFza1xyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcy5wdXNoKHsgbmFtZTogdGFzayB9KTtcclxuICAgICAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MubGVuZ3RoIC0gMV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgICRzY29wZS5lbnRlcmVkVGFzayA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5yZW1vdmVUYXNrKCRzY29wZS5zZWxlY3RhYmxlVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLmVudGVyZWRUYXNrID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVuc2VsZWN0VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5yZW1vdmVUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCB0YXNrKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuYWRkVGFzayA9IGZ1bmN0aW9uKHRhc2tMaXN0LCB0YXNrKSB7XHJcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2spO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5yZW1vdmVUYXNrID0gZnVuY3Rpb24odGFza0xpc3QsIHRhc2spIHtcclxuICAgIHRhc2tMaXN0LnNwbGljZSh0YXNrTGlzdC5pbmRleE9mKHRhc2spLCAxKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc3RhcnRQcmlvcml0aXppbmcgPSBmdW5jdGlvbigpIHtcclxuICAgIENhdGVnb3JpZXNTdmMuc2V0UHJpb3JpdHlMaXN0KCRzY29wZS5zZWxlY3RlZFRhc2tzKTtcclxuICAgICRsb2NhdGlvbi5wYXRoKCcvcHJpb3JpdGl6ZScpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRRdWVzdGlvbnMgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghJHNjb3BlLnNlbGVjdGVkVGFza3MpIHJldHVybiAnJztcclxuICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAkc2NvcGUuc2VsZWN0ZWRUYXNrcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgIGNvdW50ZXIgKz0gaTtcclxuICAgIH1cclxuICAgIHJldHVybiBjb3VudGVyO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG4gIC8vIEluaXRpYWxpemUgdGhlIEZpcmViYXNlVUkgV2lkZ2V0IHVzaW5nIEZpcmViYXNlLlxyXG4gIHZhciB1aSA9IG5ldyBmaXJlYmFzZXVpLmF1dGguQXV0aFVJKGZpcmViYXNlLmF1dGgoKSk7XHJcblxyXG4gICRzY29wZS4kb24oJ2xvZ291dCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgdWkucmVzZXQoKTtcclxuICAgIHN0YXJ0VUkoKTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRVSSgpIHtcclxuICAgIHVpLnN0YXJ0KCcjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lcicsIHtcclxuICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgc2lnbkluU3VjY2VzczogZnVuY3Rpb24gKGN1cnJlbnRVc2VyLCBjcmVkZW50aWFsLCByZWRpcmVjdFVybCkge1xyXG4gICAgICAgICAgLy8gTm8gcmVkaXJlY3QuXHJcbiAgICAgICAgICBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuYXV0aCgpXHJcbiAgICAgICAgICAgIC5jdXJyZW50VXNlci5nZXRJZFRva2VuKHRydWUpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChpZFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgVXNlclN2Yy5hdXRoZW50aWNhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGN1cnJlbnRVc2VyLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IGN1cnJlbnRVc2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGhvdG9VUkw6IGN1cnJlbnRVc2VyLnBob3RvVVJMLFxyXG4gICAgICAgICAgICAgICAgZW1haWxWZXJpZmllZDogY3VycmVudFVzZXIuZW1haWxWZXJpZmllZCxcclxuICAgICAgICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW4sXHJcbiAgICAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuJGVtaXQoJ2xvZ2luJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICQoJyNtb2RhbC1sb2dpbicpLm1vZGFsKCdoaWRlJyk7XHJcbiAgICAgICAgICAgICAgICAgIC8vJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS4kZW1pdCgncG9wdXAnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0xvZ2luIEZhaWxlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FsZXJ0LWRhbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gc2lnbkluRmFpbHVyZSBjYWxsYmFjayBtdXN0IGJlIHByb3ZpZGVkIHRvIGhhbmRsZSBtZXJnZSBjb25mbGljdHMgd2hpY2hcclxuICAgICAgICAvLyBvY2N1ciB3aGVuIGFuIGV4aXN0aW5nIGNyZWRlbnRpYWwgaXMgbGlua2VkIHRvIGFuIGFub255bW91cyB1c2VyLlxyXG4gICAgICAgIHNpZ25JbkZhaWx1cmU6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgLy8gRm9yIG1lcmdlIGNvbmZsaWN0cywgdGhlIGVycm9yLmNvZGUgd2lsbCBiZVxyXG4gICAgICAgICAgLy8gJ2ZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3QnLlxyXG4gICAgICAgICAgaWYgKGVycm9yLmNvZGUgIT0gJ2ZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFRoZSBjcmVkZW50aWFsIHRoZSB1c2VyIHRyaWVkIHRvIHNpZ24gaW4gd2l0aC5cclxuICAgICAgICAgIHZhciBjcmVkID0gZXJyb3IuY3JlZGVudGlhbDtcclxuICAgICAgICAgIC8vIENvcHkgZGF0YSBmcm9tIGFub255bW91cyB1c2VyIHRvIHBlcm1hbmVudCB1c2VyIGFuZCBkZWxldGUgYW5vbnltb3VzXHJcbiAgICAgICAgICAvLyB1c2VyLlxyXG4gICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAvLyBGaW5pc2ggc2lnbi1pbiBhZnRlciBkYXRhIGlzIGNvcGllZC5cclxuICAgICAgICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aENyZWRlbnRpYWwoY3JlZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1aVNob3duOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvLyBUaGUgd2lkZ2V0IGlzIHJlbmRlcmVkLlxyXG4gICAgICAgICAgLy8gSGlkZSB0aGUgbG9hZGVyLlxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2lnbkluU3VjY2Vzc1VybDogJy9ob21lJyxcclxuICAgICAgc2lnbkluT3B0aW9uczogW1xyXG4gICAgICAgIC8vZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICBdLFxyXG5cclxuICAgICAgLy8gV2lsbCB1c2UgcG9wdXAgZm9yIElEUCBQcm92aWRlcnMgc2lnbi1pbiBmbG93IGluc3RlYWQgb2YgdGhlIGRlZmF1bHQsIHJlZGlyZWN0LlxyXG4gICAgICBzaWduSW5GbG93OiAncG9wdXAnLFxyXG4gICAgICAvLyBPdGhlciBjb25maWcgb3B0aW9ucy4uLlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGFydFVJKCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRmaWx0ZXIsIFBvc3RzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5hZGRQb3N0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCRzY29wZS5wb3N0Qm9keSkge1xyXG4gICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xyXG4gICAgICAgIGJvZHk6ICRzY29wZS5wb3N0Qm9keVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUG9zdHNTdmMuZmV0Y2goKVxyXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLnBvc3RzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbignd3M6bmV3X3Bvc3QnLCBmdW5jdGlvbiAoXywgcG9zdCkge1xyXG4gICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIFBvc3RzU3ZjLmdldFBvc3QocG9zdClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RzLnVuc2hpZnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdQcmlvcml0aXplQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgQ2F0ZWdvcmllc1N2Yykge1xyXG5cclxuICAkc2NvcGUucHJpb3JpdHlMaXN0ID0gQ2F0ZWdvcmllc1N2Yy5nZXRQcmlvcml0eUxpc3QoKTtcclxuXHJcbiAgaWYgKCEkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAkbG9jYXRpb24ucGF0aCgnL2xpc3RzJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uID0gMTtcclxuICAgICRzY29wZS5jdXJyZW50UXVlc3Rpb24gPSAxO1xyXG4gICAgJHNjb3BlLmRvbmUgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gICRzY29wZS5tYWtlQ2hvaWNlID0gZnVuY3Rpb24oY2hvaWNlKSB7XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgaWYgKCRzY29wZS5wcmlvcml0eUxpc3RbaV0uaWQgPT09ICRzY29wZS5zZWxlY3RlZFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgPSBjaG9pY2UgPT09IDEgPyAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmZpcnN0Q2hvaWNlIDogJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5zZWNvbmRDaG9pY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbiA9PT0gJHNjb3BlLmN1cnJlbnRRdWVzdGlvbikge1xyXG4gICAgICAkc2NvcGUuY3VycmVudFF1ZXN0aW9uID0gJHNjb3BlLmN1cnJlbnRRdWVzdGlvbiA9PT0gJHNjb3BlLnByaW9yaXR5TGlzdC5sZW5ndGggPyAxIDogJHNjb3BlLmN1cnJlbnRRdWVzdGlvbiArIDE7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbiA9ICRzY29wZS5jdXJyZW50UXVlc3Rpb247XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAoaSBpbiAkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA9PT0gJycpIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgJCgnI3ByaW9yaXRpemVDaG9pY2VzJykuaGlkZSgzMDApO1xyXG4gICAgICAkc2NvcGUuZG9uZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldEJ1dHRvblZhbHVlID0gZnVuY3Rpb24oY2hvaWNlKSB7XHJcbiAgICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUucHJpb3JpdHlMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICgkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmlkID09PSAkc2NvcGUuc2VsZWN0ZWRRdWVzdGlvbikge1xyXG4gICAgICAgIHJldHVybiBjaG9pY2UgPT09IDEgPyAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmZpcnN0Q2hvaWNlIDogJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5zZWNvbmRDaG9pY2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0UXVlc3Rpb24gPSBmdW5jdGlvbihxdWVzdGlvbikge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24gPSBxdWVzdGlvbjtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0RmlsdGVyZWRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbigpIHtcclxuICAgIGlmICghJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJHNjb3BlLnByaW9yaXR5TGlzdFxyXG4gICAgICAuc29ydChmdW5jdGlvbihhLCBiKXsgcmV0dXJuIGEuaWQtYi5pZDsgfSlcclxuICAgICAgLmZpbHRlcihmdW5jdGlvbihxdWVzdGlvbikgeyByZXR1cm4gcXVlc3Rpb24uY2hvaWNlICE9PSAnJyB8fCBxdWVzdGlvbi5pZCA9PT0gJHNjb3BlLmN1cnJlbnRRdWVzdGlvbjsgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldENob2ljZXNNYWRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoISRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgdmFyIGNob2ljZXNNYWRlID0gMDtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgIT09ICcnKSB7XHJcbiAgICAgICAgY2hvaWNlc01hZGUrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNob2ljZXNNYWRlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZXRCdXR0b25DbGFzcyA9IGZ1bmN0aW9uKGNob2ljZSkge1xyXG4gICAgaWYgKCEkc2NvcGUucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5pZCA9PT0gJHNjb3BlLnNlbGVjdGVkUXVlc3Rpb24pIHtcclxuICAgICAgICBpZiAoJHNjb3BlLnByaW9yaXR5TGlzdFtpXS5jaG9pY2UgPT09ICcnKSB7XHJcbiAgICAgICAgICByZXR1cm4gJ2J0bi1wcmltYXJ5JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNob2ljZSA9PT0gMSkge1xyXG4gICAgICAgICAgcmV0dXJuICRzY29wZS5wcmlvcml0eUxpc3RbaV0uZmlyc3RDaG9pY2UgPT09ICRzY29wZS5wcmlvcml0eUxpc3RbaV0uY2hvaWNlID8gJ2J0bi1zdWNjZXNzJyA6ICdidG4tZGFuZ2VyJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICRzY29wZS5wcmlvcml0eUxpc3RbaV0uc2Vjb25kQ2hvaWNlID09PSAkc2NvcGUucHJpb3JpdHlMaXN0W2ldLmNob2ljZSA/ICdidG4tc3VjY2VzcycgOiAnYnRuLWRhbmdlcic7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNob3dDaG9pY2VzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcjcHJpb3JpdGl6ZUNob2ljZXMnKS5zaG93KDEwMDApO1xyXG4gICAgJCgnI3Jldmlld0Nob2ljZXMnKS5oaWRlKCk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYXJ0Q2xpY2sgPSBmdW5jdGlvbiggZXZlbnQgKSB7XHJcbiAgICBpZiAoICRzY29wZS5jaGFydCApIHtcclxuICAgICAgLy8gRGlmZmVyZW50IG1ldGhvZHMgZGVwZW5kaW5nIG9uIGNoYXJ0IHR5cGVcclxuICAgICAgLy9jb25zb2xlLmxvZyggJHNjb3BlLmNoYXJ0LmdldFBvaW50c0F0RXZlbnQoIGV2ZW50ICkgKTsgLy8gZm9yIFBvaW50c1xyXG4gICAgICBjb25zb2xlLmxvZyggJHNjb3BlLmNoYXJ0LmdldFNlZ21lbnRzQXRFdmVudCggZXZlbnQgKSApOyAvLyBmb3IgU2VnbWVudHNcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd1Jlc3VsdHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAkc2NvcGUuZGF0YSA9IFtdO1xyXG4gICAgJHNjb3BlLm9wdGlvbnMgPSB7XHJcbiAgICAgIC8vIFNldHMgdGhlIGNoYXJ0IHRvIGJlIHJlc3BvbnNpdmVcclxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuXHJcbiAgICAgIC8vQm9vbGVhbiAtIFdoZXRoZXIgd2Ugc2hvdWxkIHNob3cgYSBzdHJva2Ugb24gZWFjaCBzZWdtZW50XHJcbiAgICAgIHNlZ21lbnRTaG93U3Ryb2tlIDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vU3RyaW5nIC0gVGhlIGNvbG91ciBvZiBlYWNoIHNlZ21lbnQgc3Ryb2tlXHJcbiAgICAgIHNlZ21lbnRTdHJva2VDb2xvciA6ICcjZmZmJyxcclxuXHJcbiAgICAgIC8vTnVtYmVyIC0gVGhlIHdpZHRoIG9mIGVhY2ggc2VnbWVudCBzdHJva2VcclxuICAgICAgc2VnbWVudFN0cm9rZVdpZHRoIDogMixcclxuXHJcbiAgICAgIC8vTnVtYmVyIC0gVGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGNoYXJ0IHRoYXQgd2UgY3V0IG91dCBvZiB0aGUgbWlkZGxlXHJcbiAgICAgIHBlcmNlbnRhZ2VJbm5lckN1dG91dCA6IDAsIC8vIFRoaXMgaXMgMCBmb3IgUGllIGNoYXJ0c1xyXG5cclxuICAgICAgLy9OdW1iZXIgLSBBbW91bnQgb2YgYW5pbWF0aW9uIHN0ZXBzXHJcbiAgICAgIGFuaW1hdGlvblN0ZXBzIDogMTAwLFxyXG5cclxuICAgICAgLy9TdHJpbmcgLSBBbmltYXRpb24gZWFzaW5nIGVmZmVjdFxyXG4gICAgICBhbmltYXRpb25FYXNpbmcgOiAnZWFzZU91dEJvdW5jZScsXHJcblxyXG4gICAgICAvL0Jvb2xlYW4gLSBXaGV0aGVyIHdlIGFuaW1hdGUgdGhlIHJvdGF0aW9uIG9mIHRoZSBEb3VnaG51dFxyXG4gICAgICBhbmltYXRlUm90YXRlIDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vQm9vbGVhbiAtIFdoZXRoZXIgd2UgYW5pbWF0ZSBzY2FsaW5nIHRoZSBEb3VnaG51dCBmcm9tIHRoZSBjZW50cmVcclxuICAgICAgYW5pbWF0ZVNjYWxlIDogZmFsc2UsXHJcblxyXG4gICAgICAvL1N0cmluZyAtIEEgbGVnZW5kIHRlbXBsYXRlXHJcbiAgICAgIGxlZ2VuZFRlbXBsYXRlIDogJzxoMyBjbGFzcz1cInRjLWNoYXJ0LWpzLWxlZ2VuZFwiIHN0eWxlPVwicGFkZGluZzo1cHhcIj48JSBmb3IgKHZhciBpPTA7IGk8c2VnbWVudHMubGVuZ3RoOyBpKyspeyU+PGRpdiBjbGFzcz1cImxhYmVsXCIgc3R5bGU9XCJmbG9hdDpsZWZ0O21hcmdpbjo1cHg7YmFja2dyb3VuZC1jb2xvcjo8JT1zZWdtZW50c1tpXS5maWxsQ29sb3IlPlwiPjwlaWYoc2VnbWVudHNbaV0ubGFiZWwpeyU+PCU9c2VnbWVudHNbaV0ubGFiZWwlPjwlfSU+PC9kaXY+PCV9JT48L2gzPidcclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBpIGluIENhdGVnb3JpZXNTdmMuY2hvaWNlcykge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0udm90ZXMgPSAwO1xyXG4gICAgICBmb3IgKHZhciBqIGluICRzY29wZS5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgICBpZiAoQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLm5hbWUgPT09ICRzY29wZS5wcmlvcml0eUxpc3Rbal0uY2hvaWNlKSB7XHJcbiAgICAgICAgICBDYXRlZ29yaWVzU3ZjLmNob2ljZXNbaV0udm90ZXMrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIENhdGVnb3JpZXNTdmMuY2hvaWNlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEudm90ZXMgPCBiLnZvdGVzOyB9KTtcclxuICAgIGZvciAoaSBpbiBDYXRlZ29yaWVzU3ZjLmNob2ljZXMpIHtcclxuICAgICAgJHNjb3BlLmRhdGEucHVzaCh7XHJcbiAgICAgICAgdmFsdWU6IENhdGVnb3JpZXNTdmMuY2hvaWNlc1tpXS52b3RlcyxcclxuICAgICAgICBsYWJlbDogQ2F0ZWdvcmllc1N2Yy5jaG9pY2VzW2ldLm5hbWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkKCcjcHJpb3JpdGl6ZVJlc3VsdCcpLmhpZGUoKTtcclxuICAgICQoJyNwcmlvcml0aXplQ2hvaWNlcycpLmhpZGUoKTtcclxuICAgICQoJyNwcmlvcml0eVJlc3VsdHMnKS5zaG93KDEwMDApO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdQcm9maWxlQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG5cclxuICBpZiAoISRzY29wZS5jdXJyZW50VXNlcikge1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnI3NleC1pbmRpY2F0b3InKS5vZmZzZXQoeyBsZWZ0OiAoJHNjb3BlLmN1cnJlbnRVc2VyLmdlbmRlci5zZXggLyAyMDAgKiAkKCcjc2V4Jykud2lkdGgoKSkgKyAkKCcjc2V4Jykub2Zmc2V0KCkubGVmdCB9KTtcclxuICAgICQoJyNpZGVudGl0eS1pbmRpY2F0b3InKS5vZmZzZXQoeyBsZWZ0OiAoJHNjb3BlLmN1cnJlbnRVc2VyLmdlbmRlci5pZGVudGl0eSAvIDIwMCAqICQoJyNpZGVudGl0eScpLndpZHRoKCkpICsgJCgnI2lkZW50aXR5Jykub2Zmc2V0KCkubGVmdCB9KTtcclxuICB9XHJcblxyXG4gICRzY29wZS5zZXhlcyA9IFtcclxuICAgICdNYWxlJyxcclxuICAgICdGdE0gTWFsZScsXHJcbiAgICAnSW50ZXJzZXgnLFxyXG4gICAgJ010RiBGZW1hbGUnLFxyXG4gICAgJ0ZlbWFsZSdcclxuICBdO1xyXG4gICRzY29wZS5pZGVudGl0aWVzID0gW1xyXG4gICAgJ01hbicsXHJcbiAgICAnQmlnZW5kZXInLFxyXG4gICAgJ1BhbmdlbmRlcicsXHJcbiAgICAnQWdlbmRlcicsXHJcbiAgICAnUG9seWdlbmRlcicsXHJcbiAgICAnR2VuZGVyZmx1aWQnLFxyXG4gICAgJ0dlbmRlcnF1ZWVyJyxcclxuICAgICdRdWVlcicsXHJcbiAgICAnV29tYW4nXHJcbiAgXTtcclxuXHJcbiAgJHNjb3BlLmRhdGVPcHRpb25zID0ge1xyXG4gICAgbWF4RGF0ZTogbmV3IERhdGUoKSxcclxuICAgIG1pbkRhdGU6IG5ldyBEYXRlKDE5MDAsIDEsIDEpLFxyXG4gICAgaW5pdERhdGU6IG5ldyBEYXRlKDIwMDAsIDEsIDEpLFxyXG4gICAgZGF0ZXBpY2tlck1vZGU6ICd5ZWFyJ1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5nZW5kZXIgPSBmdW5jdGlvbihhcnJheSwgcGVyY2VudGFnZSkge1xyXG4gICAgcmV0dXJuIGFycmF5W01hdGgucm91bmQocGVyY2VudGFnZSAvIDIwMCAqIChhcnJheS5sZW5ndGggLSAxKSldO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zdGFydFNsaWRlciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICB9O1xyXG4gICRzY29wZS5kcmFnU2xpZGVyID0gZnVuY3Rpb24oZXZlbnQsIHVpLCB0eXBlKSB7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIuZ2VuZGVyW3R5cGVdID0gTWF0aC5yb3VuZCgoJCgnIycgKyB0eXBlICsgJy1pbmRpY2F0b3InKS5vZmZzZXQoKS5sZWZ0IC0gJCgnIycgKyB0eXBlKS5vZmZzZXQoKS5sZWZ0KSAvICgkKCcjJyArIHR5cGUpLndpZHRoKCkgLSAkKCcjJyArIHR5cGUgKyAnLWluZGljYXRvcicpLndpZHRoKCkpICogMjAwKTtcclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICB9O1xyXG4gICRzY29wZS5zdG9wU2xpZGVyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIH07XHJcblxyXG4gICRzY29wZS51c2VybmFtZVRvZ2dsZSA9IHRydWU7XHJcbiAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gdHJ1ZTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVVzZXJuYW1lID0gZnVuY3Rpb24oKSB7XHJcbiAgICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSAhJHNjb3BlLnVzZXJuYW1lVG9nZ2xlO1xyXG4gICAgJHNjb3BlLm5ld1VzZXJuYW1lID0gJHNjb3BlLmN1cnJlbnRVc2VyLnVzZXJuYW1lO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS50b2dnbGVQYXNzd29yZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgJHNjb3BlLm5ld1Bhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5jb25maXJtUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gISRzY29wZS5wYXNzd29yZFRvZ2dsZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uIChwYXNzd29yZCkge1xyXG4gICAgaWYgKHBhc3N3b3JkKSB7XHJcbiAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgVXNlclN2Yy5jaGVja1Bhc3N3b3JkKHVzZXIsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBvcmlnaW5hbEJnID0gJChcIi5wYXNzd29yZFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIik7XHJcbiAgICAgICAgJChcIi5wYXNzd29yZFwiKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNGRkI2QzFcIiB9LCAyMDApLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG9yaWdpbmFsQmcgfSwgMjAwKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVBhc3N3b3JkID0gZnVuY3Rpb24gKG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCwgY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICBpZiAobmV3UGFzc3dvcmQpIHtcclxuICAgICAgaWYgKG5ld1Bhc3N3b3JkID09IGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgICBVc2VyU3ZjLmNoYW5nZVBhc3N3b3JkKHVzZXIsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZClcclxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICRzY29wZS4kZW1pdCgncG9wdXAnLCB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCBDaGFuZ2VkJyxcclxuICAgICAgICAgICAgdHlwZTogJ2FsZXJ0LXN1Y2Nlc3MnXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgICRzY29wZS5vbGRQYXNzd29yZCA9IG51bGw7XHJcbiAgICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkc2NvcGUuJGVtaXQoJ3BvcHVwJywge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiAnUGFzc3dvcmQgQ2hhbmdlIEZhaWxlZCcsXHJcbiAgICAgICAgICAgIHR5cGU6ICdhbGVydC1kYW5nZXInXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgb3JpZ2luYWxCZyA9ICQoXCIucGFzc3dvcmRcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIpO1xyXG4gICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlVXNlcm5hbWUgPSBmdW5jdGlvbiAodXNlcm5hbWUpIHtcclxuICAgICRzY29wZS4kZW1pdCgnbG9hZGluZycpO1xyXG4gICAgVXNlclN2Yy5jaGFuZ2VVc2VybmFtZSgkc2NvcGUuY3VycmVudFVzZXIuX2lkLCB1c2VybmFtZSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAkc2NvcGUuJGVtaXQoJ3VwZGF0ZScsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgJHNjb3BlLiRlbWl0KCdwb3B1cCcsIHtcclxuICAgICAgICBtZXNzYWdlOiB1c2VybmFtZSArICcgYWxyZWFkeSBpbiB1c2UnLFxyXG4gICAgICAgIHR5cGU6ICdhbGVydC1kYW5nZXInXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyKSB7ICBcclxuICAgICAgJHNjb3BlLiRlbWl0KCdsb2FkaW5nJyk7XHJcbiAgICAgIFVzZXJTdmMudXBkYXRlVXNlcigkc2NvcGUuY3VycmVudFVzZXIpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS4kZW1pdCgndXBkYXRlJywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICAkc2NvcGUuJHdhdGNoKCdjdXJyZW50VXNlci5mbGFncy5sZW5ndGgnLCBmdW5jdGlvbihsZW5ndGgpIHtcclxuICAgICRzY29wZS51cGRhdGVVc2VyKCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5sb2FkQ291bnRyaWVzID0gZnVuY3Rpb24oJHF1ZXJ5KSB7XHJcbiAgICB2YXIgY291bnRyaWVzID0gW1xyXG4gICAgICB7IFwibmFtZVwiOiBcIkFuZG9ycmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hZFwiLCBcInRpZGJpdFwiOiBcIlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1hZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQWZnaGFuaXN0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1hZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLCBcImZsYWdcIjogXCJmbGFnLWFnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbmd1aWxsYVwiLCBcImZsYWdcIjogXCJmbGFnLWFpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJBbGJhbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctYWxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFybWVuaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQW5nb2xhXCIsIFwiZmxhZ1wiOiBcImZsYWctYW9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFudGFyY3RpY2FcIiwgXCJmbGFnXCI6IFwiZmxhZy1hcVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQXJnZW50aW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctYXJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFtZXJpY2FuIFNvbW9hXCIsIFwiZmxhZ1wiOiBcImZsYWctYXNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkF1c3RyaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1hdFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQXVzdHJhbGlhXCIsIFwiZmxhZ1wiOiBcImZsYWctYXVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkFydWJhXCIsIFwiZmxhZ1wiOiBcImZsYWctYXdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIsOFbGFuZCBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctYXhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkF6ZXJiYWlqYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1helwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBcImZsYWdcIjogXCJmbGFnLWJhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCYXJiYWRvc1wiLCBcImZsYWdcIjogXCJmbGFnLWJiXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCYW5nbGFkZXNoXCIsIFwiZmxhZ1wiOiBcImZsYWctYmRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJlbGdpdW1cIiwgXCJmbGFnXCI6IFwiZmxhZy1iZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQnVya2luYSBGYXNvXCIsIFwiZmxhZ1wiOiBcImZsYWctYmZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJ1bGdhcmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctYmdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJhaHJhaW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1iaFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQnVydW5kaVwiLCBcImZsYWdcIjogXCJmbGFnLWJpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCZW5pblwiLCBcImZsYWdcIjogXCJmbGFnLWJqXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBCYXJ0aMOpbGVteVwiLCBcImZsYWdcIjogXCJmbGFnLWJsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCZXJtdWRhXCIsIFwiZmxhZ1wiOiBcImZsYWctYm1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJydW5laSBcIiwgXCJmbGFnXCI6IFwiZmxhZy1iblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQm9saXZpYSwgUGx1cmluYXRpb25hbCBTdGF0ZSBvZlwiLCBcImZsYWdcIjogXCJmbGFnLWJvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYVwiLCBcImZsYWdcIjogXCJmbGFnLWJxXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCcmF6aWxcIiwgXCJmbGFnXCI6IFwiZmxhZy1iclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQmFoYW1hc1wiLCBcImZsYWdcIjogXCJmbGFnLWJzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCaHV0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1idFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQm91dmV0IElzbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWJ2XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCb3Rzd2FuYVwiLCBcImZsYWdcIjogXCJmbGFnLWJ3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJCZWxhcnVzXCIsIFwiZmxhZ1wiOiBcImZsYWctYnlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJlbGl6ZVwiLCBcImZsYWdcIjogXCJmbGFnLWJ6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDYW5hZGFcIiwgXCJmbGFnXCI6IFwiZmxhZy1jYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1jY1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29uZ28sIHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZVwiLCBcImZsYWdcIjogXCJmbGFnLWNkXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIiwgXCJmbGFnXCI6IFwiZmxhZy1jZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29uZ29cIiwgXCJmbGFnXCI6IFwiZmxhZy1jZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3dpdHplcmxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1jaFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ8O0dGUgZCdJdm9pcmVcIiwgXCJmbGFnXCI6IFwiZmxhZy1jaVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ29vayBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctY2tcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNoaWxlXCIsIFwiZmxhZ1wiOiBcImZsYWctY2xcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNhbWVyb29uXCIsIFwiZmxhZ1wiOiBcImZsYWctY21cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNoaW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctY25cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNvbG9tYmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctY29cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNvc3RhIFJpY2FcIiwgXCJmbGFnXCI6IFwiZmxhZy1jclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ3ViYVwiLCBcImZsYWdcIjogXCJmbGFnLWN1XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDYWJvIFZlcmRlXCIsIFwiZmxhZ1wiOiBcImZsYWctY3ZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkN1cmHDp2FvXCIsIFwiZmxhZ1wiOiBcImZsYWctY3dcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNocmlzdG1hcyBJc2xhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1jeFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQ3lwcnVzXCIsIFwiZmxhZ1wiOiBcImZsYWctY3lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkN6ZWNoIFJlcHVibGljXCIsIFwiZmxhZ1wiOiBcImZsYWctY3pcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdlcm1hbnlcIiwgXCJmbGFnXCI6IFwiZmxhZy1kZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRGppYm91dGlcIiwgXCJmbGFnXCI6IFwiZmxhZy1kalwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRGVubWFya1wiLCBcImZsYWdcIjogXCJmbGFnLWRrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJEb21pbmljYVwiLCBcImZsYWdcIjogXCJmbGFnLWRtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJEb21pbmljYW4gUmVwdWJsaWNcIiwgXCJmbGFnXCI6IFwiZmxhZy1kb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiQWxnZXJpYVwiLCBcImZsYWdcIjogXCJmbGFnLWR6XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJFY3VhZG9yXCIsIFwiZmxhZ1wiOiBcImZsYWctZWNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkVzdG9uaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1lZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRWd5cHRcIiwgXCJmbGFnXCI6IFwiZmxhZy1lZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiV2VzdGVybiBTYWhhcmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1laFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRXJpdHJlYVwiLCBcImZsYWdcIjogXCJmbGFnLWVyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTcGFpblwiLCBcImZsYWdcIjogXCJmbGFnLWVzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJFdGhpb3BpYVwiLCBcImZsYWdcIjogXCJmbGFnLWV0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGaW5sYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctZmlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkZpamlcIiwgXCJmbGFnXCI6IFwiZmxhZy1malwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpXCIsIFwiZmxhZ1wiOiBcImZsYWctZmtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1mbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRmFyb2UgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLWZvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJGcmFuY2VcIiwgXCJmbGFnXCI6IFwiZmxhZy1mclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR2Fib25cIiwgXCJmbGFnXCI6IFwiZmxhZy1nYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWdiXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHcmVuYWRhXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2RcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdlb3JnaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1nZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRnJlbmNoIEd1aWFuYVwiLCBcImZsYWdcIjogXCJmbGFnLWdmXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHdWVybnNleVwiLCBcImZsYWdcIjogXCJmbGFnLWdnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHaGFuYVwiLCBcImZsYWdcIjogXCJmbGFnLWdoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHaWJyYWx0YXJcIiwgXCJmbGFnXCI6IFwiZmxhZy1naVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3JlZW5sYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctZ2xcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkdhbWJpYVwiLCBcImZsYWdcIjogXCJmbGFnLWdtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHdWluZWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1nblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3VhZGVsb3VwZVwiLCBcImZsYWdcIjogXCJmbGFnLWdwXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJFcXVhdG9yaWFsIEd1aW5lYVwiLCBcImZsYWdcIjogXCJmbGFnLWdxXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHcmVlY2VcIiwgXCJmbGFnXCI6IFwiZmxhZy1nclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIiwgXCJmbGFnXCI6IFwiZmxhZy1nc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3VhdGVtYWxhXCIsIFwiZmxhZ1wiOiBcImZsYWctZ3RcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkd1YW1cIiwgXCJmbGFnXCI6IFwiZmxhZy1ndVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiR3VpbmVhLUJpc3NhdVwiLCBcImZsYWdcIjogXCJmbGFnLWd3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJHdXlhbmFcIiwgXCJmbGFnXCI6IFwiZmxhZy1neVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSG9uZyBLb25nXCIsIFwiZmxhZ1wiOiBcImZsYWctaGtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wiLCBcImZsYWdcIjogXCJmbGFnLWhtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJIb25kdXJhc1wiLCBcImZsYWdcIjogXCJmbGFnLWhuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDcm9hdGlhXCIsIFwiZmxhZ1wiOiBcImZsYWctaHJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkhhaXRpXCIsIFwiZmxhZ1wiOiBcImZsYWctaHRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkh1bmdhcnlcIiwgXCJmbGFnXCI6IFwiZmxhZy1odVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSW5kb25lc2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctaWRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIklyZWxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1pZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSXNyYWVsXCIsIFwiZmxhZ1wiOiBcImZsYWctaWxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIklzbGUgb2YgTWFuXCIsIFwiZmxhZ1wiOiBcImZsYWctaW1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkluZGlhXCIsIFwiZmxhZ1wiOiBcImZsYWctaW5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwiLCBcImZsYWdcIjogXCJmbGFnLWlvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJcmFxXCIsIFwiZmxhZ1wiOiBcImZsYWctaXFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIklyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1pclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSWNlbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLWlzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJJdGFseVwiLCBcImZsYWdcIjogXCJmbGFnLWl0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJKZXJzZXlcIiwgXCJmbGFnXCI6IFwiZmxhZy1qZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSmFtYWljYVwiLCBcImZsYWdcIjogXCJmbGFnLWptXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJKb3JkYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1qb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSmFwYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1qcFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiS2VueWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1rZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiS3lyZ3l6c3RhblwiLCBcImZsYWdcIjogXCJmbGFnLWtnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDYW1ib2RpYVwiLCBcImZsYWdcIjogXCJmbGFnLWtoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJLaXJpYmF0aVwiLCBcImZsYWdcIjogXCJmbGFnLWtpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJDb21vcm9zXCIsIFwiZmxhZ1wiOiBcImZsYWcta21cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLCBcImZsYWdcIjogXCJmbGFnLWtuXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJLb3JlYSwgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLWtwXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJLb3JlYSwgUmVwdWJsaWMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1rclwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiS3V3YWl0XCIsIFwiZmxhZ1wiOiBcImZsYWcta3dcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNheW1hbiBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWcta3lcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkthemFraHN0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1relwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWNcIiwgXCJmbGFnXCI6IFwiZmxhZy1sYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGViYW5vblwiLCBcImZsYWdcIjogXCJmbGFnLWxiXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBMdWNpYVwiLCBcImZsYWdcIjogXCJmbGFnLWxjXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMaWVjaHRlbnN0ZWluXCIsIFwiZmxhZ1wiOiBcImZsYWctbGlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNyaSBMYW5rYVwiLCBcImZsYWdcIjogXCJmbGFnLWxrXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJMaWJlcmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbHJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxlc290aG9cIiwgXCJmbGFnXCI6IFwiZmxhZy1sc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGl0aHVhbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbHRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkx1eGVtYm91cmdcIiwgXCJmbGFnXCI6IFwiZmxhZy1sdVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTGF0dmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbHZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkxpYnlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbHlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vcm9jY29cIiwgXCJmbGFnXCI6IFwiZmxhZy1tYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTW9uYWNvXCIsIFwiZmxhZ1wiOiBcImZsYWctbWNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vbGRvdmEsIFJlcHVibGljIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctbWRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vbnRlbmVncm9cIiwgXCJmbGFnXCI6IFwiZmxhZy1tZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIiwgXCJmbGFnXCI6IFwiZmxhZy1tZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFkYWdhc2NhclwiLCBcImZsYWdcIjogXCJmbGFnLW1nXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYXJzaGFsbCBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctbWhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hY2Vkb25pYSwgdGhlIGZvcm1lciBZdWdvc2xhdiBSZXB1YmxpYyBvZlwiLCBcImZsYWdcIjogXCJmbGFnLW1rXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWxpXCIsIFwiZmxhZ1wiOiBcImZsYWctbWxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk15YW5tYXJcIiwgXCJmbGFnXCI6IFwiZmxhZy1tbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTW9uZ29saWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1tblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWFjYW9cIiwgXCJmbGFnXCI6IFwiZmxhZy1tb1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctbXBcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hcnRpbmlxdWVcIiwgXCJmbGFnXCI6IFwiZmxhZy1tcVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWF1cml0YW5pYVwiLCBcImZsYWdcIjogXCJmbGFnLW1yXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNb250c2VycmF0XCIsIFwiZmxhZ1wiOiBcImZsYWctbXNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hbHRhXCIsIFwiZmxhZ1wiOiBcImZsYWctbXRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hdXJpdGl1c1wiLCBcImZsYWdcIjogXCJmbGFnLW11XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWxkaXZlc1wiLCBcImZsYWdcIjogXCJmbGFnLW12XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJNYWxhd2lcIiwgXCJmbGFnXCI6IFwiZmxhZy1td1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWV4aWNvXCIsIFwiZmxhZ1wiOiBcImZsYWctbXhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1hbGF5c2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctbXlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk1vemFtYmlxdWVcIiwgXCJmbGFnXCI6IFwiZmxhZy1telwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmFtaWJpYVwiLCBcImZsYWdcIjogXCJmbGFnLW5hXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOZXcgQ2FsZWRvbmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctbmNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5pZ2VyXCIsIFwiZmxhZ1wiOiBcImZsYWctbmVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5vcmZvbGsgSXNsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctbmZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5pZ2VyaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1uZ1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTmljYXJhZ3VhXCIsIFwiZmxhZ1wiOiBcImZsYWctbmlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5ldGhlcmxhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctbmxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5vcndheVwiLCBcImZsYWdcIjogXCJmbGFnLW5vXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOZXBhbFwiLCBcImZsYWdcIjogXCJmbGFnLW5wXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOYXVydVwiLCBcImZsYWdcIjogXCJmbGFnLW5yXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJOaXVlXCIsIFwiZmxhZ1wiOiBcImZsYWctbnVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk5ldyBaZWFsYW5kXCIsIFwiZmxhZ1wiOiBcImZsYWctbnpcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIk9tYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1vbVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGFuYW1hXCIsIFwiZmxhZ1wiOiBcImZsYWctcGFcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBlcnVcIiwgXCJmbGFnXCI6IFwiZmxhZy1wZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRnJlbmNoIFBvbHluZXNpYVwiLCBcImZsYWdcIjogXCJmbGFnLXBmXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJQYXB1YSBOZXcgR3VpbmVhXCIsIFwiZmxhZ1wiOiBcImZsYWctcGdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBoaWxpcHBpbmVzXCIsIFwiZmxhZ1wiOiBcImZsYWctcGhcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBha2lzdGFuXCIsIFwiZmxhZ1wiOiBcImZsYWctcGtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBvbGFuZFwiLCBcImZsYWdcIjogXCJmbGFnLXBsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCIsIFwiZmxhZ1wiOiBcImZsYWctcG1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBpdGNhaXJuXCIsIFwiZmxhZ1wiOiBcImZsYWctcG5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlB1ZXJ0byBSaWNvXCIsIFwiZmxhZ1wiOiBcImZsYWctcHJcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlBhbGVzdGluZSwgU3RhdGUgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy1wc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUG9ydHVnYWxcIiwgXCJmbGFnXCI6IFwiZmxhZy1wdFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGFsYXVcIiwgXCJmbGFnXCI6IFwiZmxhZy1wd1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUGFyYWd1YXlcIiwgXCJmbGFnXCI6IFwiZmxhZy1weVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUWF0YXJcIiwgXCJmbGFnXCI6IFwiZmxhZy1xYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUsOpdW5pb25cIiwgXCJmbGFnXCI6IFwiZmxhZy1yZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUm9tYW5pYVwiLCBcImZsYWdcIjogXCJmbGFnLXJvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTZXJiaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1yc1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiUnVzc2lhbiBGZWRlcmF0aW9uXCIsIFwiZmxhZ1wiOiBcImZsYWctcnVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlJ3YW5kYVwiLCBcImZsYWdcIjogXCJmbGFnLXJ3XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYXVkaSBBcmFiaWFcIiwgXCJmbGFnXCI6IFwiZmxhZy1zYVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU29sb21vbiBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctc2JcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNleWNoZWxsZXNcIiwgXCJmbGFnXCI6IFwiZmxhZy1zY1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3VkYW5cIiwgXCJmbGFnXCI6IFwiZmxhZy1zZFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU3dlZGVuXCIsIFwiZmxhZ1wiOiBcImZsYWctc2VcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNpbmdhcG9yZVwiLCBcImZsYWdcIjogXCJmbGFnLXNnXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwiLCBcImZsYWdcIjogXCJmbGFnLXNoXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTbG92ZW5pYVwiLCBcImZsYWdcIjogXCJmbGFnLXNpXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCIsIFwiZmxhZ1wiOiBcImZsYWctc2pcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNsb3Zha2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctc2tcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNpZXJyYSBMZW9uZVwiLCBcImZsYWdcIjogXCJmbGFnLXNsXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYW4gTWFyaW5vXCIsIFwiZmxhZ1wiOiBcImZsYWctc21cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlNlbmVnYWxcIiwgXCJmbGFnXCI6IFwiZmxhZy1zblwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU29tYWxpYVwiLCBcImZsYWdcIjogXCJmbGFnLXNvXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTdXJpbmFtZVwiLCBcImZsYWdcIjogXCJmbGFnLXNyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTb3V0aCBTdWRhblwiLCBcImZsYWdcIjogXCJmbGFnLXNzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIiwgXCJmbGFnXCI6IFwiZmxhZy1zdFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRWwgU2FsdmFkb3JcIiwgXCJmbGFnXCI6IFwiZmxhZy1zdlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KVwiLCBcImZsYWdcIjogXCJmbGFnLXN4XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLCBcImZsYWdcIjogXCJmbGFnLXN5XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTd2F6aWxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy1zelwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctdGNcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIkNoYWRcIiwgXCJmbGFnXCI6IFwiZmxhZy10ZFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzXCIsIFwiZmxhZ1wiOiBcImZsYWctdGZcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRvZ29cIiwgXCJmbGFnXCI6IFwiZmxhZy10Z1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVGhhaWxhbmRcIiwgXCJmbGFnXCI6IFwiZmxhZy10aFwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVGFqaWtpc3RhblwiLCBcImZsYWdcIjogXCJmbGFnLXRqXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUb2tlbGF1XCIsIFwiZmxhZ1wiOiBcImZsYWctdGtcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRpbW9yLUxlc3RlXCIsIFwiZmxhZ1wiOiBcImZsYWctdGxcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlR1cmttZW5pc3RhblwiLCBcImZsYWdcIjogXCJmbGFnLXRtXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUdW5pc2lhXCIsIFwiZmxhZ1wiOiBcImZsYWctdG5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRvbmdhXCIsIFwiZmxhZ1wiOiBcImZsYWctdG9cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlR1cmtleVwiLCBcImZsYWdcIjogXCJmbGFnLXRyXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsIFwiZmxhZ1wiOiBcImZsYWctdHRcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlR1dmFsdVwiLCBcImZsYWdcIjogXCJmbGFnLXR2XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJUYWl3YW4sIFByb3ZpbmNlIG9mIENoaW5hXCIsIFwiZmxhZ1wiOiBcImZsYWctdHdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlRhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2ZcIiwgXCJmbGFnXCI6IFwiZmxhZy10elwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVWtyYWluZVwiLCBcImZsYWdcIjogXCJmbGFnLXVhXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVZ2FuZGFcIiwgXCJmbGFnXCI6IFwiZmxhZy11Z1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzXCIsIFwiZmxhZ1wiOiBcImZsYWctdW1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLCBcImZsYWdcIjogXCJmbGFnLXVzXCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJVcnVndWF5XCIsIFwiZmxhZ1wiOiBcImZsYWctdXlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlV6YmVraXN0YW5cIiwgXCJmbGFnXCI6IFwiZmxhZy11elwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiSG9seSBTZWVcIiwgXCJmbGFnXCI6IFwiZmxhZy12YVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIiwgXCJmbGFnXCI6IFwiZmxhZy12Y1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiVmVuZXp1ZWxhLCBCb2xpdmFyaWFuIFJlcHVibGljIG9mXCIsIFwiZmxhZ1wiOiBcImZsYWctdmVcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlZpcmdpbiBJc2xhbmRzLCBCcml0aXNoXCIsIFwiZmxhZ1wiOiBcImZsYWctdmdcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlZpcmdpbiBJc2xhbmRzLCBVLlMuXCIsIFwiZmxhZ1wiOiBcImZsYWctdmlcIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlZpZXQgTmFtXCIsIFwiZmxhZ1wiOiBcImZsYWctdm5cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlZhbnVhdHVcIiwgXCJmbGFnXCI6IFwiZmxhZy12dVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiV2FsbGlzIGFuZCBGdXR1bmFcIiwgXCJmbGFnXCI6IFwiZmxhZy13ZlwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiU2Ftb2FcIiwgXCJmbGFnXCI6IFwiZmxhZy13c1wiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiWWVtZW5cIiwgXCJmbGFnXCI6IFwiZmxhZy15ZVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiTWF5b3R0ZVwiLCBcImZsYWdcIjogXCJmbGFnLXl0XCIgfSxcclxuICAgICAgeyBcIm5hbWVcIjogXCJTb3V0aCBBZnJpY2FcIiwgXCJmbGFnXCI6IFwiZmxhZy16YVwiIH0sXHJcbiAgICAgIHsgXCJuYW1lXCI6IFwiWmFtYmlhXCIsIFwiZmxhZ1wiOiBcImZsYWctem1cIiB9LFxyXG4gICAgICB7IFwibmFtZVwiOiBcIlppbWJhYndlXCIsIFwiZmxhZ1wiOiBcImZsYWctendcIiB9LFxyXG4gICAgXTtcclxuICAgIHJldHVybiBjb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uKGNvdW50cnkpIHtcclxuICAgICAgcmV0dXJuIGNvdW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdTa2lsbHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IDA7XHJcbiAgJHNjb3BlLnNraWxsc1Zpc2libGUgPSBmYWxzZTtcclxuICAkc2NvcGUucHJvamVjdHMgPSBbXTtcclxuXHJcbiAgJHNjb3BlLmxhYmVscyA9IFtcIkRvd25sb2FkIFNhbGVzXCIsIFwiSW4tU3RvcmUgU2FsZXNcIiwgXCJNYWlsLU9yZGVyIFNhbGVzXCJdO1xyXG4gICRzY29wZS5kYXRhID0gWzMwMCwgNTAwLCAxMDBdO1xyXG5cclxuICAkLmdldEpTT04oJy9leHBlcmllbmNlLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuICAgICRzY29wZS5wcm9qZWN0cyA9IGRhdGEucmVkdWNlKChwcm9qZWN0cywgZW1wbG95ZXIpID0+IHtcclxuICAgICAgaWYgKGVtcGxveWVyLnByb2plY3RzKSByZXR1cm4gZW1wbG95ZXIucHJvamVjdHMuY29uY2F0KHByb2plY3RzKTtcclxuICAgICAgZWxzZSByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9LCB7fSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5maWx0ZXJlZFByb2plY3RzID0gKCkgPT4gJHNjb3BlLnByb2plY3RzXHJcbiAgICAuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNraWxscyAmJiBwcm9qZWN0LnNraWxscy5pbmNsdWRlcygkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jb2RlKSlcclxuXHJcbiAgJC5nZXRKU09OKCcvc2tpbGxzLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuXHJcbiAgICBjb25zdCBza2lsbHMgPSBkYXRhXHJcbiAgICAuZmlsdGVyKChza2lsbCkgPT4gc2tpbGwuZW5hYmxlZClcclxuXHJcbiAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHNraWxsc1xyXG4gICAgLnJlZHVjZShmdW5jdGlvbihjYXRlZ29yaWVzLCBza2lsbCkge1xyXG4gICAgICBpZiAoIWNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0gPSBbc2tpbGxdXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0ucHVzaChza2lsbClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2F0ZWdvcmllcztcclxuICAgIH0sIHt9KTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCA9IGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IHNraWxsO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydE9wdGlvbnMgPSB7XHJcbiAgICAgICAgY3V0b3V0UGVyY2VudGFnZSA6IDgwLFxyXG4gICAgICAgIGNpcmN1bWZlcmVuY2U6IDIgKiBNYXRoLlBJLFxyXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXHJcbiAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydFN0eWxlID0ge1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgvc2tpbGxzLycgKyAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5pbWFnZSArICcpJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJzYwJScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnNTAlIDUwJSdcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwoJHNjb3BlLnNraWxsc1swXSk7XHJcblxyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICAkc2NvcGUuc2VhcmNoID0ge1xyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICB2YWx1ZXM6IFwiXCIsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5rZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgZSA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuYWRkVmFsdWUoKTtcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICBpZiAoJChcIiNuZXctYmx1cmJcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmFkZFZhbHVlKCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKCQoXCIjbmV3LXZhbHVlXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICQoXCIjbmV3LWJsdXJiXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICB9XHJcbiAgICAgIC8vIHVzZSBlLmtleUNvZGVcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaE5hbWUgPSBcIlwiO1xyXG4gICAgJHNjb3BlLm5ld0l0ZW0gPSB7fTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoY2F0ZWdvcnkpID0+ICgkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSBjYXRlZ29yeSk7XHJcbiAgICAkc2NvcGUuc2V0VXNlckZpbHRlciA9ICh1c2VyKSA9PiAoJHNjb3BlLnVzZXJGaWx0ZXIgPSB1c2VyKTtcclxuICAgICRzY29wZS5zZXRVcGRhdGVGaWx0ZXIgPSAodHlwZSkgPT4gKCRzY29wZS51cGRhdGVGaWx0ZXIgPSB0eXBlKTtcclxuICAgICRzY29wZS5zZXRMYW5ndWFnZUZpbHRlciA9IChsYW5ndWFnZSkgPT4gKCRzY29wZS5sYW5ndWFnZUZpbHRlciA9IGxhbmd1YWdlKTtcclxuXHJcbiAgICAkc2NvcGUuZmlsdGVyZWRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubGlzdHMpIHJldHVybiBbXTtcclxuICAgICAgcmV0dXJuICRzY29wZS5saXN0c1xyXG4gICAgICAgIC5maWx0ZXIoKHsgaXNEeW5hbWljIH0pID0+IHtcclxuICAgICAgICAgIGlmICgkc2NvcGUudXBkYXRlRmlsdGVyICE9PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJzdGF0aWNcIiAmJiBpc0R5bmFtaWMgPT09IHRydWUpIHx8XHJcbiAgICAgICAgICAgICAgKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiZHluYW1pY1wiICYmIGlzRHluYW1pYyA9PT0gZmFsc2UpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoKHsgY2F0ZWdvcmllcyB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAoJHNjb3BlLmNhdGVnb3J5RmlsdGVyID09PSBcIkFsbFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yaWVzLmluZGV4T2YoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKSA+PSAwO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPT09IFwiQmxhbmtcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmZpbHRlcigoeyBjcmVhdG9yIH0pID0+IHtcclxuICAgICAgICAgIGlmICgkc2NvcGUudXNlckZpbHRlciA9PT0gXCJBbGxcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdG9yID09PSAkc2NvcGUudXNlckZpbHRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5maWx0ZXIoKHsgbGFuZ3VhZ2UgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCRzY29wZS5sYW5ndWFnZUZpbHRlci5jb2RlID09PSBcImFsbFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxhbmd1YWdlID09PSAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcnMgPSAkc2NvcGUuY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5KSA9PiBjYXRlZ29yeSk7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVycy5wdXNoKFwiQWxsXCIpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcnMucHVzaChcIkJsYW5rXCIpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9IFwiQWxsXCI7XHJcbiAgICAgICAgJHNjb3BlLnVwZGF0ZUZpbHRlciA9IFwiYWxsXCI7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJzID0gJHNjb3BlLmxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlKSA9PiBsYW5ndWFnZSk7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVycy5wdXNoKHsgbmFtZTogXCJBbGxcIiwgY29kZTogXCJhbGxcIiB9KTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSB7IG5hbWU6IFwiQWxsXCIsIGNvZGU6IFwiYWxsXCIgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RMaXN0KHsgX2lkOiAkbG9jYXRpb24uc2VhcmNoKCkubGlzdCB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLmxpc3RPcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwiZGF0ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIGxhYmVsOiBcIkNyZWF0aW9uIERhdGVcIixcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnZhbHVlT3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInZhbHVlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICAgIGxhYmVsOiBcIlZhbHVlXCIsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zb3J0ID0gKHNvcnRlciwgc29ydEZpZWxkLCBzb3J0TGFiZWwpID0+IHtcclxuICAgICAgJHNjb3BlW3NvcnRlcl0ubGFiZWwgPSBzb3J0TGFiZWw7XHJcbiAgICAgIGlmICgkc2NvcGVbc29ydGVyXS5maWVsZCA9PT0gc29ydEZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlW3NvcnRlcl0uZGlyZWN0aW9uID0gISRzY29wZVtzb3J0ZXJdLmRpcmVjdGlvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGVbc29ydGVyXS5maWVsZCA9IHNvcnRGaWVsZDtcclxuICAgICAgICAkc2NvcGVbc29ydGVyXS5kaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMYW5ndWFnZUNvdW50ID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxpc3RzKSByZXR1cm4gMDtcclxuICAgICAgY29uc3QgY291bnQgPSAkc2NvcGUubGlzdHMuZmlsdGVyKFxyXG4gICAgICAgIChsaXN0KSA9PlxyXG4gICAgICAgICAgKCRzY29wZS5jYXRlZ29yeUZpbHRlciA9PT0gXCJBbGxcIiB8fCBsaXN0LmNhdGVnb3JpZXMuaW5jbHVkZXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKSkgJiZcclxuICAgICAgICAgIChsYW5ndWFnZS5jb2RlID09PSBcImFsbFwiIHx8IGxpc3QubGFuZ3VhZ2UgPT09IGxhbmd1YWdlLmNvZGUpICYmXHJcbiAgICAgICAgICAoJHNjb3BlLnVzZXJGaWx0ZXIgPT09IFwiQWxsXCIgfHwgbGlzdC5jcmVhdG9yID09PSAkc2NvcGUudXNlckZpbHRlcikgJiZcclxuICAgICAgICAgICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImFsbFwiIHx8IGxpc3QuaXNEeW5hbWljID09PSAoJHNjb3BlLnVwZGF0ZUZpbHRlciA9PT0gXCJkeW5hbWljXCIpKSxcclxuICAgICAgKS5sZW5ndGg7XHJcbiAgICAgIHJldHVybiBgJHtjb3VudH0gLSAke01hdGgucm91bmQoKGNvdW50IC8gJHNjb3BlLmxpc3RzLmxlbmd0aCkgKiAxMDApfSVgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Q2F0ZWdvcnlDb3VudCA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5saXN0cykgcmV0dXJuIDA7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gJHNjb3BlLmxpc3RzLmZpbHRlcihcclxuICAgICAgICAobGlzdCkgPT5cclxuICAgICAgICAgIChjYXRlZ29yeSA9PT0gXCJBbGxcIiB8fCBsaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSkgPj0gMCkgJiZcclxuICAgICAgICAgICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZSA9PT0gXCJhbGxcIiB8fCBsaXN0Lmxhbmd1YWdlID09PSAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIuY29kZSkgJiZcclxuICAgICAgICAgICgkc2NvcGUudXNlckZpbHRlciA9PT0gXCJBbGxcIiB8fCBsaXN0LmNyZWF0b3IgPT09ICRzY29wZS51c2VyRmlsdGVyKSAmJlxyXG4gICAgICAgICAgKCRzY29wZS51cGRhdGVGaWx0ZXIgPT09IFwiYWxsXCIgfHwgbGlzdC5pc0R5bmFtaWMgPT09ICgkc2NvcGUudXBkYXRlRmlsdGVyID09PSBcImR5bmFtaWNcIikpLFxyXG4gICAgICApLmxlbmd0aDtcclxuICAgICAgcmV0dXJuIGAke2NvdW50fSAtICR7TWF0aC5yb3VuZCgoY291bnQgLyAkc2NvcGUubGlzdHMubGVuZ3RoKSAqIDEwMCl9JWA7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRVcGRhdGVDb3VudCA9ICh0eXBlKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxpc3RzKSByZXR1cm4gMDtcclxuICAgICAgY29uc3QgY291bnQgPSAkc2NvcGUubGlzdHMuZmlsdGVyKFxyXG4gICAgICAgIChsaXN0KSA9PiB0eXBlID09PSBcImFsbFwiIHx8IChsaXN0LmlzRHluYW1pYyAmJiB0eXBlID09PSBcImR5bmFtaWNcIikgfHwgKCFsaXN0LmlzRHluYW1pYyAmJiB0eXBlID09PSBcInN0YXRpY1wiKSxcclxuICAgICAgKS5sZW5ndGg7XHJcbiAgICAgIHJldHVybiBgJHtjb3VudH0gLSAke01hdGgucm91bmQoKGNvdW50IC8gJHNjb3BlLmxpc3RzLmxlbmd0aCkgKiAxMDApfSVgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmxvYWRpbmcpIHtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICRzY29wZS5saXN0cyA9IGRhdGEucmVzdWx0O1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXJzID0ge307XHJcbiAgICAgICAgICAkc2NvcGUudXNlckZpbHRlcnMuQWxsID0gJHNjb3BlLmxpc3RzLmxlbmd0aDtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVycyA9ICRzY29wZS5saXN0c1xyXG4gICAgICAgICAgICAuc29ydCgobGlzdDEsIGxpc3QyKSA9PiBsaXN0MS5jcmVhdG9yID4gbGlzdDIuY3JlYXRvcilcclxuICAgICAgICAgICAgLnJlZHVjZSgodXNlcnMsIHsgY3JlYXRvciB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCF1c2Vyc1tjcmVhdG9yXSkgdXNlcnNbY3JlYXRvcl0gPSAwO1xyXG4gICAgICAgICAgICAgIHVzZXJzW2NyZWF0b3JdKys7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXJzO1xyXG4gICAgICAgICAgICB9LCAkc2NvcGUudXNlckZpbHRlcnMpO1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJDb3VudCA9IE9iamVjdC5rZXlzKCRzY29wZS51c2VyRmlsdGVycykubGVuZ3RoO1xyXG4gICAgICAgICAgJHNjb3BlLnVzZXJGaWx0ZXJzID0gc29ydE9iamVjdCgkc2NvcGUudXNlckZpbHRlcnMsIGZhbHNlKTtcclxuICAgICAgICAgICRzY29wZS51c2VyRmlsdGVyID0gXCJBbGxcIjtcclxuICAgICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcnkgPSBjYXRlZ29yeTtcclxuICAgICAgJChcIiNjYXRlZ29yeS1zZWxlY3RcIikuaGlkZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Q2F0ZWdvcnlDbGFzcyA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICByZXR1cm4gJHNjb3BlLnNlbGVjdGVkTGlzdCAmJiAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSkgPj0gMFxyXG4gICAgICAgID8gXCJidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgOiBcImJ0bi1kZWZhdWx0XCI7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yeUluZGV4ID0gJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLmluZGV4T2YoY2F0ZWdvcnkpO1xyXG4gICAgICBpZiAoY2F0ZWdvcnlJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jYXRlZ29yaWVzLnNwbGljZShjYXRlZ29yeUluZGV4LCAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlbGVjdExhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICBjb25zdCBub25FbmdsaXNoSW5kZXggPSAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMuaW5kZXhPZihcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICBpZiAobGFuZ3VhZ2UuY29kZSAhPT0gXCJFTlwiICYmIG5vbkVuZ2xpc2hJbmRleCA8IDApIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LmNhdGVnb3JpZXMucHVzaChcIk5vbi1FbmdsaXNoXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKGxhbmd1YWdlLmNvZGUgPT09IFwiRU5cIiAmJiBub25FbmdsaXNoSW5kZXggPj0gMCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5zcGxpY2Uobm9uRW5nbGlzaEluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWRkTGlzdCA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudExhbmd1YWdlID0gJHNjb3BlLnNlbGVjdGVkTGlzdCA/ICRzY29wZS5zZWxlY3RlZExpc3QubGFuZ3VhZ2UgOiBcIkVOXCI7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIFwiXCIpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0ge1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgY3JlYXRvcjogJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCxcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHZhbHVlczogW10sXHJcbiAgICAgICAgYW5zd2VyczogMCxcclxuICAgICAgICBpc0R5bmFtaWM6IHRydWUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgbGFuZ3VhZ2U6IGN1cnJlbnRMYW5ndWFnZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmhhc0R1cGxpY2F0ZSA9ICgpID0+XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgJiZcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgJiZcclxuICAgICAgXy5zb21lKFxyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgIChhbnN3ZXIpID0+IGFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCkgPT0gJHNjb3BlLm5ld0l0ZW0udmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpLFxyXG4gICAgICApO1xyXG5cclxuICAgICRzY29wZS5hZGRWYWx1ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5uZXdJdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgXy5zb21lKFxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyxcclxuICAgICAgICAgICAgKGFuc3dlcikgPT4gYW5zd2VyLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSA9PSAkc2NvcGUubmV3SXRlbS52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCksXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBhbGVydChgJHskc2NvcGUubmV3SXRlbS52YWx1ZX0gaXMgYWxyZWFkeSBpbiB0aGUgbGlzdGApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUubmV3SXRlbS5jcmVhdG9yID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnVuc2hpZnQoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSgkc2NvcGUubmV3SXRlbSkpKTtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuYW5zd2VycysrO1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgJHNjb3BlLm5ld0l0ZW0uYmx1cmIgPSBcIlwiO1xyXG4gICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5sZW5ndGggPj0gMTAgJiZcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5uYW1lICYmXHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmVMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAkKFwiI25ldy12YWx1ZVwiKS5mb2N1cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUucmVwb3J0TGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGxpc3QucmVwb3J0ZWQgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMucmVwb3J0TGlzdCgkc2NvcGUuY3VycmVudFVzZXIsIGxpc3QpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2F2ZUxpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5zYXZpbmcpIHtcclxuICAgICAgICBsaXN0LnZhbHVlcyA9IGxpc3QudmFsdWVzLmZpbHRlcigoeyB2YWx1ZSB9KSA9PiB2YWx1ZSk7XHJcbiAgICAgICAgaWYgKGxpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCAmJiBsaXN0Lm5hbWUgJiYgbGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICRzY29wZS5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLnNhdmVMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgbGlzdCkudGhlbihcclxuICAgICAgICAgICAgKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKCEkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmxpc3RzLnVuc2hpZnQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0TGlzdChkYXRhKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAkc2NvcGUubGlzdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5saXN0c1tpXS5faWQgPT09IGRhdGEuX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmxpc3RzW2ldID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdExpc3QobGlzdCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobGlzdC52YWx1ZXMubGVuZ3RoIDwgMTApIHtcclxuICAgICAgICAgIGFsZXJ0KFwiTGlzdHMgbXVzdCBjb250YWluIDEwIG9yIG1vcmUgdmFsdWVzIVwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFsaXN0Lm5hbWUpIHtcclxuICAgICAgICAgIGZsYXNoKFwiI2xpc3QtbmFtZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZmxhc2goXCIubGlzdC1jYXRlZ29yeVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZmxhc2goZWxlbWVudCkge1xyXG4gICAgICBjb25zdCBjb2xvciA9ICQoZWxlbWVudCkuY3NzKFwiYmFja2dyb3VuZC1jb2xvclwiKTtcclxuICAgICAgJChlbGVtZW50KS5hbmltYXRlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkE4MDcyXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMDAsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgJChlbGVtZW50KS5hbmltYXRlKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMTAwLFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCFsaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9ICRzY29wZS5saXN0cy5maWx0ZXIoKHsgX2lkIH0pID0+IF9pZCk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgbGlzdD9cIikpIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5kZWxldGVMaXN0KGxpc3QpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUubGlzdEJ1dHRvbkNsYXNzID0gKGxpc3QpID0+IHtcclxuICAgICAgY29uc3QgdmFsdWVzID0gbGlzdC52YWx1ZXMubGVuZ3RoO1xyXG4gICAgICBjb25zdCBibHVyYnMgPSBsaXN0LmJsdXJicztcclxuICAgICAgaWYgKHZhbHVlcyA9PT0gYmx1cmJzICYmIGxpc3QuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gXCJidG4tZGVmYXVsdFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKGJsdXJicyA9PT0gMCAmJiAhbGlzdC5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHJldHVybiBcImJ0bi13YXJuaW5nXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoYmx1cmJzID09PSAwICYmIGxpc3QuZGVzY3JpcHRpb24pIHtcclxuICAgICAgICByZXR1cm4gXCJidG4taW5mb1wiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcImJ0bi1wcmltYXJ5XCI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldEJsdXJicyA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldEJsdXJicygkc2NvcGUuc2VsZWN0ZWRMaXN0LCB0eXBlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5zZWxlY3RMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9KTtcclxuIiwiLypqc2xpbnQgZXN2ZXJzaW9uOiA2Ki9cclxuYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0FkbWluQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBUZW5UaGluZ3NTdmMsIFVzZXJTdmMpIHtcclxuICAgICRzY29wZS4kb24oXCJsb2dpblwiLCAoXykgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyQnkgPSAoZmllbGQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5vcmRlci5maWVsZCA9PT0gZmllbGQpIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIucmV2ZXJzZSA9ICEkc2NvcGUub3JkZXIucmV2ZXJzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRRdWV1ZSA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0UXVldWUoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5xdWV1ZSA9IHJlc3BvbnNlLmRhdGEucmVwbGFjZShcIi9uXCIsIFwiPGJyLz5cIik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmdldFF1ZXVlKCk7XHJcblxyXG4gICAgVGVuVGhpbmdzU3ZjLmdldFBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5wYXVzZWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy5nZXRVc2VycygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKHVzZXIpID0+ICF1c2VyLmFkbWluKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUJhbiA9ICh1c2VyKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy50b2dnbGVCYW4odXNlci5faWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVQYXVzZSA9ICh1c2VyKSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy50b2dnbGVQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLnBhdXNlZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0N1cmF0ZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBUZW5UaGluZ3NTdmMpIHtcclxuICAgIGxldCBwYWdlID0gMTtcclxuICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlYXJjaCA9IFwiXCI7XHJcbiAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSBcIkFsbFwiO1xyXG4gICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgbGV0IGV4aGF1c3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBpZiAobGlzdCkge1xyXG4gICAgICAgIGlmIChsaXN0Ll9pZCAhPT0gJHNjb3BlLnNlbGVjdGVkTGlzdD8uX2lkKSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9ICRzY29wZS5jYXRlZ29yaWVzLnJlZHVjZSgoZmlsdGVyLCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgIGZpbHRlcltjYXRlZ29yeV0gPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICByZXNldENhdGVnb3J5RmlsdGVyKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QpIHtcclxuICAgICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KHsgX2lkOiAkbG9jYXRpb24uc2VhcmNoKCkubGlzdCB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJkYXRlXCIsXHJcbiAgICAgIHJldmVyc2U6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLnJldmVyc2UgPSAhJHNjb3BlLm9yZGVyLnJldmVyc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldE1vcmVMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5saXN0cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgZ2V0TGlzdHMoKS50aGVuKChsaXN0cykgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9ICRzY29wZS5saXN0cy5jb25jYXQobGlzdHMpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExpc3RzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGlzdHMgPSBbXTtcclxuICAgICAgcGFnZSA9IDE7XHJcbiAgICAgIGV4aGF1c3RlZCA9IGZhbHNlO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gbGlzdHM7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldExhbmd1YWdlRmlsdGVyID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IGxhbmd1YWdlO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5RmlsdGVyID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSAhJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XTtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVDYXRlZ29yeUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcik7XHJcbiAgICAgIGlmIChjYXRlZ29yaWVzLmxlbmd0aCA9PT0gY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldKS5sZW5ndGgpIHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXNldENhdGVnb3J5RmlsdGVyKCk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldExpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxvYWRpbmcgfHwgZXhoYXVzdGVkKSByZXR1cm4gW107XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdHMoe1xyXG4gICAgICAgIHBhZ2UsXHJcbiAgICAgICAgc29ydEJ5OiAkc2NvcGUub3JkZXIuZmllbGQsXHJcbiAgICAgICAgb3JkZXJCeTogJHNjb3BlLm9yZGVyLnJldmVyc2UgPyAtMSA6IDEsXHJcbiAgICAgICAgbGltaXQ6IDEwMCxcclxuICAgICAgICBzZWFyY2g6ICRzY29wZS5zZWFyY2gsXHJcbiAgICAgICAgbGFuZ3VhZ2U6ICRzY29wZS5sYW5ndWFnZUZpbHRlciA9PT0gXCJBbGxcIiA/IHVuZGVmaW5lZCA6ICRzY29wZS5sYW5ndWFnZUZpbHRlcixcclxuICAgICAgICBjYXRlZ29yaWVzOiBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpLmZpbHRlcigoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0pLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJQYWdlIFwiLCBwYWdlLCBcIiByZXN1bHRzIFwiLCBkYXRhLnJlc3VsdC5sZW5ndGgpO1xyXG4gICAgICBpZiAoZGF0YS5yZXN1bHQubGVuZ3RoIDwgMTAwKSBleGhhdXN0ZWQgPSB0cnVlO1xyXG4gICAgICBlbHNlIHBhZ2UgPSBkYXRhLm5leHRQYWdlO1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnJlc3VsdC5zbGljZSgwLCAxMCkpO1xyXG4gICAgICByZXR1cm4gZGF0YS5yZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG5cclxuICAgICRzY29wZS5zZXREaWZmaWN1bHR5ID0gKGxpc3QsIGRpZmZpY3VsdHkpID0+IHtcclxuICAgICAgbGlzdC5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgIF9pZDogbGlzdC5faWQsXHJcbiAgICAgICAgZGlmZmljdWx0eTogZGlmZmljdWx0eSxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyXHJcblx0Lm1vZHVsZSgnYXBwJylcclxuXHQvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuXHQuY29udHJvbGxlcihcclxuXHRcdCdUZW5UaGluZ3NHYW1lQ3RybCcsXHJcblx0XHRmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGVQYXJhbXMsIFRlblRoaW5nc1N2Yykge1xyXG5cdFx0XHQkc2NvcGUuJG9uKCdsb2dpbicsIF8gPT4ge1xyXG5cdFx0XHRcdGlmICgkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4pIHtcclxuXHRcdFx0XHRcdGdldFVzZXJzKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGlmICgkc3RhdGVQYXJhbXMuZ2FtZSkge1xyXG5cdFx0XHRcdFRlblRoaW5nc1N2Yy5nZXRHYW1lKCRzdGF0ZVBhcmFtcy5nYW1lKS50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHRcdCRzY29wZS5nYW1lID0gcmVzcG9uc2UuZGF0YTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCRzY29wZS5nYW1lKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdCk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignV29ya291dEN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAkc2NvcGUudGltZUV4ZXJjaXNpbmcgPSAzMDtcclxuICAkc2NvcGUudGltZVJlc3RpbmcgPSAxMDtcclxuICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG5cclxuICB2YXIgc291bmRzID0ge1xyXG4gICAgb246IG5ldyBBdWRpbygnb24ud2F2JyksXHJcbiAgICBvZmY6IG5ldyBBdWRpbygnb2ZmLndhdicpLFxyXG4gICAgc3dpdGNoOiBuZXcgQXVkaW8oJ3N3aXRjaC53YXYnKSxcclxuICB9O1xyXG5cclxuXHJcbiAgdmFyIGV4ZXJjaXNlcyA9IFtcclxuICAgIHtuYW1lOiAnSnVtcGluZyBKYWNrcycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1dhbGwgU2l0Jywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUHVzaC1VcCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0NydW5jaCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1N0ZXAtVXAnLCBzcGxpdDogdHJ1ZX0sXHJcbiAgICB7bmFtZTogJ1NxdWF0Jywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnVHJpY2VwcyBEaXAnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQbGFuaycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0hpZ2ggS25lZXMnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdMdW5nZScsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1B1c2gtVXAgd2l0aCBSb3RhdGlvbicsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1NpZGUgUGxhbmsnLCBzcGxpdDogdHJ1ZX1cclxuICBdO1xyXG5cclxuICB2YXIgZXhlcmNpc2luZztcclxuXHJcbiAgJHNjb3BlLnByb2dyZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKGV4ZXJjaXNlcy5sZW5ndGggLSBNYXRoLmZsb29yKCRzY29wZS50aW1lUmVtYWluaW5nIC8gKCRzY29wZS50aW1lRXhlcmNpc2luZyArICRzY29wZS50aW1lUmVzdGluZykpKSArICcvJyArIGV4ZXJjaXNlcy5sZW5ndGg7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLndvcmtvdXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBleGNlcmNpc2VUaW1lID0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nICsgJHNjb3BlLnRpbWVSZXN0aW5nO1xyXG4gICAgaWYgKCEkc2NvcGUudGltZVJlbWFpbmluZykge1xyXG4gICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IGV4ZXJjaXNlcy5sZW5ndGggKiBleGNlcmNpc2VUaW1lO1xyXG4gICAgICBleGVyY2lzaW5nID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmctLTtcclxuICAgICAgICBpZiAoJHNjb3BlLnRpbWVSZW1haW5pbmcgPT09IDApIHtcclxuICAgICAgICAgICRzY29wZS5leGVyY2lzZSA9IHtuYW1lOiAnRmluaXNoZWQhIENvbmdyYXRzIScsIHNwbGl0OiBmYWxzZX07XHJcbiAgICAgICAgICAkc2NvcGUudGltZXIgPSAnJztcclxuICAgICAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbChleGVyY2lzaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN1cnJlbnRFeGVyY2lzZSA9IE1hdGguZmxvb3IoJHNjb3BlLnRpbWVSZW1haW5pbmcgLyBleGNlcmNpc2VUaW1lKTtcclxuICAgICAgICB2YXIgdGltZXIgPSAkc2NvcGUudGltZVJlbWFpbmluZyAtIGN1cnJlbnRFeGVyY2lzZSAqIGV4Y2VyY2lzZVRpbWU7XHJcbiAgICAgICAgJHNjb3BlLnRpbWVyID0gdGltZXIgPiAkc2NvcGUudGltZUV4ZXJjaXNpbmcgPyB0aW1lciAtICRzY29wZS50aW1lRXhlcmNpc2luZyA6IHRpbWVyO1xyXG4gICAgICAgIGlmICh0aW1lciA+ICRzY29wZS50aW1lRXhlcmNpc2luZykge1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc2NvcGUuZXhlcmNpc2UgPSBleGVyY2lzZXNbZXhlcmNpc2VzLmxlbmd0aCAtIGN1cnJlbnRFeGVyY2lzZSAtIDFdO1xyXG4gICAgICAgIGlmICh0aW1lciA9PT0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nKSB7XHJcbiAgICAgICAgICBzb3VuZHMub24ucGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGltZXIgPT09IDApIHtcclxuICAgICAgICAgIHNvdW5kcy5vZmYucGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmV4ZXJjaXNlLnNwbGl0ICYmIHRpbWVyID09PSBNYXRoLmZsb29yKCRzY29wZS50aW1lRXhlcmNpc2luZyAvIDIpKSB7XHJcbiAgICAgICAgICBzb3VuZHMuc3dpdGNoLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyk7XHJcbiAgICAgICRzY29wZS50aW1lciA9ICcnO1xyXG4gICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICRzY29wZS5leGVyY2lzZSA9IHtuYW1lOiAnJywgc3BsaXQ6IGZhbHNlfTtcclxuICAgIH1cclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnQ2F0ZWdvcmllc1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0Q2F0ZWdvcmllcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcycpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRUYXNrcyA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9jYXRlZ29yaWVzLycgKyBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZENhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9jYXRlZ29yaWVzLycsIGNhdGVnb3J5KTtcclxuICB9O1xyXG5cclxuICBzdmMuYWRkVGFzayA9IGZ1bmN0aW9uIChjYXRlZ29yeSwgdGFzaykge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkgKyAnL3Rhc2tzJywgdGFzayk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHN2Yy5jaG9pY2VzID0gbGlzdDtcclxuICAgIHN2Yy5wcmlvcml0eUxpc3QgPSBbXTtcclxuICAgIC8vTWFrZSBhIG5ldyBjaG9pY2UgbGlzdFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IGxpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICBzdmMucHJpb3JpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICBmaXJzdENob2ljZTogbGlzdFtyYW5kb20gPT09IDAgPyBpIDogal0ubmFtZSxcclxuICAgICAgICAgIHNlY29uZENob2ljZTogbGlzdFtyYW5kb20gPT09IDAgPyBqIDogaV0ubmFtZSxcclxuICAgICAgICAgIGNob2ljZTogJydcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2h1ZmZsZShzdmMucHJpb3JpdHlMaXN0KTtcclxuICAgIGZvciAoaSBpbiBzdmMucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHN2Yy5wcmlvcml0eUxpc3RbaV0uaWQgPSBpICsgMTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UHJpb3JpdHlMaXN0ID0gZnVuY3Rpb24obGlzdCkge1xyXG4gICAgcmV0dXJuIHN2Yy5wcmlvcml0eUxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xyXG4gICAgdmFyIG0gPSBhcnJheS5sZW5ndGgsIHQsIGk7XHJcbiAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZeKAplxyXG4gICAgd2hpbGUgKG0pIHtcclxuICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW504oCmXHJcbiAgICAgIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtLS0pO1xyXG4gICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcbiAgICAgIC8vYXJyYXlbbV0uZmlyc3RDaG9pY2U7XHJcbiAgICAgIHQgPSBhcnJheVttXTtcclxuICAgICAgYXJyYXlbbV0gPSBhcnJheVtpXTtcclxuICAgICAgYXJyYXlbaV0gPSB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0VtYWlsU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5zZW5kID0gZnVuY3Rpb24gKGVtYWlsKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9lbWFpbCcsIGVtYWlsKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5zZXJ2aWNlKCdGaWxlU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgICBzdmMuZ2V0SW1hZ2VzID0gZnVuY3Rpb24oZm9sZGVyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZmlsZXMvaW1hZ2VzLycgKyBmb2xkZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdmMuZ2V0U291bmRzID0gZnVuY3Rpb24oZm9sZGVyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvZmlsZXMvc291bmRzLycgKyBmb2xkZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgfSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdHYW1lU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgICBzdmMuZ2V0SGlnaHNjb3JlID0gZnVuY3Rpb24gKGdhbWUsIHVzZXIpIHtcclxuICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9nYW1lcy8nICsgZ2FtZSArICcvJyArIHVzZXIgKyAnL2hpZ2hzY29yZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdmMuc2V0SGlnaHNjb3JlID0gZnVuY3Rpb24gKGdhbWUsIHVzZXIsIHNjb3JlKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2dhbWVzLycgKyBnYW1lICsgJy8nICsgdXNlciArICcvaGlnaHNjb3JlJywge1xyXG4gICAgICAgIHNjb3JlOiBzY29yZVxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdMYW5ndWFnZVN2YycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmxhbmd1YWdlcyA9IFtcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRU5cIixcclxuICAgICAgXCJuYW1lXCI6IFwiRW5nbGlzaFwiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tZ2JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiTkxcIixcclxuICAgICAgXCJuYW1lXCI6IFwiTmVkZXJsYW5kc1wiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tbmxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRlJcIixcclxuICAgICAgXCJuYW1lXCI6IFwiRnJhbsOnYWlzXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1mclwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgc3ZjLnRleHQgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkVOXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIk5MXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkZSXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBzdmMuc2VsZWN0ZWRMYW5ndWFnZSA9IHN2Yy5sYW5ndWFnZXNbMF07XHJcblxyXG4gIHN2Yy5zZXRMYW5ndWFnZSA9IGZ1bmN0aW9uIChsYW5ndWFnZSkge1xyXG4gICAgc3ZjLnNlbGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgIHJldHVybiBsYW5ndWFnZTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gc3ZjLnNlbGVjdGVkTGFuZ3VhZ2U7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ1Bvc3RzU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5mZXRjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlID0gZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgcG9zdCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBvc3QgPSBmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cy8nICsgcG9zdC5faWQpO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlRlblRoaW5nc1N2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFF1ZXVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2JvdHMvdGVudGhpbmdzL3F1ZXVlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3RzID0gZnVuY3Rpb24gKHsgcGFnZSwgc29ydEJ5LCBvcmRlckJ5LCBsaW1pdCwgc2VhcmNoLCBsYW5ndWFnZSwgY2F0ZWdvcmllcyB9KSB7XHJcbiAgICB2YXIgdXJsID1cclxuICAgICAgYC9hcGkvdGVudGhpbmdzL2xpc3RzP2AgK1xyXG4gICAgICAobGltaXQgPyBgJmxpbWl0PSR7bGltaXR9YCA6IFwiXCIpICtcclxuICAgICAgKHBhZ2UgPyBgJnBhZ2U9JHtwYWdlfWAgOiBcIlwiKSArXHJcbiAgICAgIChzb3J0QnkgPyBgJnNvcnRfYnk9JHtzb3J0Qnl9YCA6IFwiXCIpICtcclxuICAgICAgKG9yZGVyQnkgPyBgJm9yZGVyX2J5PSR7b3JkZXJCeX1gIDogXCJcIikgK1xyXG4gICAgICAobGFuZ3VhZ2UgPyBgJmxhbmd1YWdlPSR7bGFuZ3VhZ2V9YCA6IFwiXCIpICtcclxuICAgICAgKGNhdGVnb3JpZXMubGVuZ3RoID4gMCA/IGAmY2F0ZWdvcmllcz0ke2NhdGVnb3JpZXMuam9pbihcIixcIil9YCA6IFwiXCIpICtcclxuICAgICAgYCZzZWFyY2g9JHtzZWFyY2h9YDtcclxuICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2NhdGVnb3JpZXNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGFuZ3VhZ2VzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvbGFuZ3VhZ2VzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCwgbGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNhdmVMaXN0ID0gZnVuY3Rpb24gKHVzZXIsIGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wdXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0c1wiLCB7XHJcbiAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIGxpc3Q6IGxpc3QsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMucmVwb3J0TGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvcmVwb3J0L1wiICsgdXNlci5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5kZWxldGVMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0Qmx1cmJzID0gZnVuY3Rpb24gKGxpc3QsIHR5cGUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9saXN0cy8ke2xpc3QuX2lkfS9ibHVyYnMvJHt0eXBlfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnRvZ2dsZVBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEdhbWUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2dhbWUvJHtpZH1gKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLnNlcnZpY2UoJ1VzZXJTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICAgIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICAgIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvdXNlcnMnKTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLmdldFVzZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvdXNlcnMvYWxsJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy50b2dnbGVCYW4gPSBmdW5jdGlvbihpZCkge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3VzZXJzL2Jhbi8ke2lkfWApO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdmMuc2V0VG9rZW4gPSBmdW5jdGlvbih0b2tlbikge1xyXG4gICAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnWC1BdXRoJ10gPSB0b2tlbjtcclxuICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3VzZXJzL2F1dGhlbnRpY2F0ZScsIHtcclxuICAgICAgICB1c2VyOiB1c2VyXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICByZXR1cm4gc3ZjLnNldFRva2VuKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLmxvZ2luID0gZnVuY3Rpb24odXNlcikge1xyXG4gICAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3VzZXJzLycgKyB1c2VyICsgJy9sb2dpbicpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3VzZXJzLycgKyB1c2VyLl9pZCwge1xyXG4gICAgICAgIHVzZXI6IHVzZXJcclxuICAgICAgfSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy5jaGVja1Bhc3N3b3JkID0gZnVuY3Rpb24odXNlciwgcGFzc3dvcmQpIHtcclxuICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvdXNlcnMvJyArIHVzZXIgKyAnL3ZlcmlmaWNhdGlvbicsIHtcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN2Yy5jaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uKHVzZXIsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCkge1xyXG4gICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS91c2Vycy8nICsgdXNlciArICcvcGFzc3dvcmQnLCB7XHJcbiAgICAgICAgb2xkUGFzc3dvcmQ6IG9sZFBhc3N3b3JkLFxyXG4gICAgICAgIG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24odXNlciwgbmV3VXNlcm5hbWUpIHtcclxuICAgICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvdXNlcnMvJyArIHVzZXIgKyAnL3VzZXJuYW1lJywge1xyXG4gICAgICAgIG5ld1VzZXJuYW1lOiBuZXdVc2VybmFtZVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgc3ZjLmxvZ291dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUF1dGgnXSA9ICcnO1xyXG4gICAgfTtcclxuXHJcbiAgICBzdmMuY3JlYXRlVXNlciA9IGZ1bmN0aW9uKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS91c2VycycsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gIH0pOyIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4gIC5jb250cm9sbGVyKCdRdWl6QW5pbWFsc0N0cmwnLCBmdW5jdGlvbigkc2NvcGUsIEZpbGVTdmMpIHtcclxuXHJcbiAgICBGaWxlU3ZjLmdldFNvdW5kcygnYW5pbWFscycpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLmFuaW1hbHMgPSBfLnNodWZmbGUocmVzcG9uc2UuZGF0YS5tYXAoYW5pbWFsID0+ICh7XHJcbiAgICAgICAgICBzb3VuZDogYW5pbWFsLFxyXG4gICAgICAgICAgbmFtZTogYW5pbWFsLnN1YnN0cmluZygwLCBhbmltYWwuaW5kZXhPZignLicpKS5yZXBsYWNlKCdfJywgJyAnKS5jYXBpdGFsaXplKClcclxuICAgICAgICB9KSkpO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW1hbCBvZiAkc2NvcGUuYW5pbWFscykge1xyXG4gICAgICAgICAgYW5pbWFsLmFuc3dlcnMgPSBfLnNodWZmbGUoW2FuaW1hbC5uYW1lLCAuLi5nZXRSYW5kb21BbmltYWxzKGFuaW1hbC5uYW1lKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuYW5pbWFscyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5ndWVzcyA9IChhbmltYWwsIGd1ZXNzKSA9PiB7XHJcbiAgICAgIGFuaW1hbC5ndWVzcyA9IGd1ZXNzO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRSYW5kb21BbmltYWxzID0gbmFtZSA9PiBfLnNodWZmbGUoJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBuYW1lICE9PSBhbmltYWwubmFtZSkubWFwKGFuaW1hbCA9PiBhbmltYWwubmFtZSkpLnNsaWNlKDAsIDUpO1xyXG5cclxuICAgICRzY29wZS5nZXRTY29yZSA9ICgpID0+IGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAgICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcihhbmltYWwgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxuICB9KTsiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1F1aXpHb29nbGVDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0SW1hZ2VzKCdnb29nbGUnKVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpekxvZ29zQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldEltYWdlcygnbG9nb3MnKVxyXG4gIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUXVpek1vdmllc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRJbWFnZXMoJ21vdmllcycpXHJcbiAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbiAgLmNvbnRyb2xsZXIoJ1F1aXpTa2VsZXRvbnNDdHJsJywgZnVuY3Rpb24oJHNjb3BlLCBGaWxlU3ZjKSB7XHJcblxyXG4gICAgRmlsZVN2Yy5nZXRJbWFnZXMoJ3NrZWxldG9ucycpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLmFuaW1hbHMgPSBfLnNodWZmbGUocmVzcG9uc2UuZGF0YS5tYXAoYW5pbWFsID0+ICh7XHJcbiAgICAgICAgICBpbWFnZTogYW5pbWFsLFxyXG4gICAgICAgICAgbmFtZTogYW5pbWFsLnN1YnN0cmluZygwLCBhbmltYWwuaW5kZXhPZignLicpKS5yZXBsYWNlKCdfJywgJyAnKS5jYXBpdGFsaXplKClcclxuICAgICAgICB9KSkpO1xyXG4gICAgICAgIGZvciAobGV0IGFuaW1hbCBvZiAkc2NvcGUuYW5pbWFscykge1xyXG4gICAgICAgICAgYW5pbWFsLmFuc3dlcnMgPSBfLnNodWZmbGUoW2FuaW1hbC5uYW1lLCAuLi5nZXRSYW5kb21BbmltYWxzKGFuaW1hbC5uYW1lKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuYW5pbWFscyk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5ndWVzcyA9IChhbmltYWwsIGd1ZXNzKSA9PiB7XHJcbiAgICAgIGFuaW1hbC5ndWVzcyA9IGd1ZXNzO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRSYW5kb21BbmltYWxzID0gbmFtZSA9PiBfLnNodWZmbGUoJHNjb3BlLmFuaW1hbHMuZmlsdGVyKGFuaW1hbCA9PiBuYW1lICE9PSBhbmltYWwubmFtZSkubWFwKGFuaW1hbCA9PiBhbmltYWwubmFtZSkpLnNsaWNlKDAsIDEwKTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0U2NvcmUgPSAoKSA9PiBgJHskc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IGFuaW1hbC5uYW1lID09PSBhbmltYWwuZ3Vlc3MpLmxlbmd0aH0vJHskc2NvcGUuYW5pbWFscy5sZW5ndGh9YDtcclxuXHJcbiAgICAkc2NvcGUuaXNTY29yZVZpc2libGUgPSAoKSA9PiAkc2NvcGUuYW5pbWFscy5maWx0ZXIoYW5pbWFsID0+IGFuaW1hbC5ndWVzcykubGVuZ3RoID09PSAkc2NvcGUuYW5pbWFscy5sZW5ndGg7XHJcbiAgfSk7Il19
