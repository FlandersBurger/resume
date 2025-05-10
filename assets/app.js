const defaultDiacriticsRemovalMap = [{
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
const SPECIAL_CHARACTERS = "\\\\/ !?@#$%^&*()_+:.{},;\\-'``’‘\"",
  VOWELS = "aeiouAEIOUàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ";
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
}), Object.defineProperty(String.prototype, "concealMiddle", {
  value: function (extra) {
    return this.length < 3 ? this : this[0] + this.substring(1, this.length - 1).conceal(extra) + this[this.length - 1];
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
  }).state("tenthings-play", {
    url: "/tenthings/play",
    controller: "TenThingsPlayCtrl",
    templateUrl: "tenthings-play.html"
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
}]), angular.module("app").controller("AppCtrl", function ($scope, LanguageSvc, UserSvc, $mdToast) {
  console.log("%cYou sneaky bugger!", "font: 2em sans-serif; color: DodgerBlue; text-shadow: 2px 0 0 #444, -2px 0 0 #444, 0 2px 0 #444, 0 -2px 0 #444, 1px 1px #444, -1px -1px 0 #444, 1px -1px 0 #444, -1px 1px 0 #444;"), console.log("I'm glad you're curious whether something is popping up in here. I'm a bit of a stickler when it comes to messages in the console so I try to make sure only things I want are visible. That being said, if there is a big error here, I would really appreciate you telling me so I can get rid of it!"), console.log("The code for my resume is hosted on Github if you really want to go into all this! => https://github.com/FlandersBurger/resume"), $scope.toast = message => {
    $mdToast.show($mdToast.simple().parent(document.querySelectorAll("#toast")).textContent(message).position("top right").hideDelay(3e3));
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
    const valueToDelete = item.value;
    TenThingsSvc.deleteListValue($scope.selectedList, item).then(() => {
      $scope.selectedList.values = $scope.selectedList.values.filter(value => value._id !== item._id), $scope.toast(`"${valueToDelete}" removed`);
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
}), angular.module("app").controller("TenThingsPlayCtrl", function ($scope, GameSvc) {
  $scope.keyDown = e => {
    if (13 === e.keyCode) $scope.checkAnswer();
  };
  const getData = async () => {
    if ($scope.currentUser?.admin) {
      const {
        data: game
      } = await GameSvc.getTenthings();
      $scope.list = game.list, $scope.values = game.list.values, console.log("value", $scope.values), $scope.$apply();
    }
  };
  $scope.checkAnswer = async () => {
    const answer = $scope.guess;
    $scope.guess = "", await GameSvc.answerTenthings(void 0, answer);
  }, $scope.getHint = async () => {
    await GameSvc.getTenthingsHint();
  }, $scope.skipList = async () => {
    await GameSvc.skipTenthingsList();
  }, $scope.$watch("currentUser", getData), $scope.$on("ws:tenthings_message", function (_, data) {
    $scope.$apply(function () {
      console.log(data), data.message && $scope.toast(data.message), getData();
    });
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
  this.getQuizFiles = function (quiz) {
    return $http.get("/api/quizzes/" + quiz);
  };
}), angular.module("app").service("GameSvc", function ($http) {
  this.getTenthings = function (id = 1) {
    return $http.get("/api/tenthings/web/" + id);
  }, this.answerTenthings = function (id = 1, answer) {
    return $http.post("/api/tenthings/web/" + id + "/answer", {
      answer
    });
  }, this.getTenthingsHint = function (id = 1) {
    return $http.post("/api/tenthings/web/" + id + "/hint");
  }, this.skipTenthingsList = function (id = 1) {
    return $http.post("/api/tenthings/web/" + id + "/skip");
  }, this.getHighscore = function (game, user) {
    return $http.get("/api/games/" + game + "/" + user + "/highscore");
  }, this.setHighscore = function (game, user, score) {
    return $http.post("/api/games/" + game + "/" + user + "/highscore", {
      score
    });
  }, this.fuzzyMatch = function (values, guess) {
    return $http.post("/api/games/fuzzy_match", {
      values,
      guess
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
  }, svc.getRandomList = () => $http.post("/api/tenthings/lists/random"), svc.searchLists = name => $http.get(`/api/tenthings/search/list-names/${name}`), svc.getCategories = () => $http.get("/api/tenthings/categories"), svc.getLanguages = () => $http.get("/api/tenthings/languages"), svc.getList = function (list) {
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
}), angular.module("app").controller("QuizAnimalsCtrl", function ($scope, FileSvc) {
  $scope.animals = [], FileSvc.getQuizFiles("animals").then(function (response) {
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
  FileSvc.getQuizFiles("google").then(function (response) {
    $scope.images = response.data;
  });
}), angular.module("app").controller("QuizLogosCtrl", function ($scope, FileSvc) {
  FileSvc.getQuizFiles("logos").then(function (response) {
    $scope.images = response.data;
  });
}), angular.module("app").controller("QuizMoviesCtrl", function ($scope, FileSvc) {
  FileSvc.getQuizFiles("movies").then(function (response) {
    $scope.images = response.data;
  });
}), angular.module("app").controller("QuizSkeletonsCtrl", function ($scope, FileSvc) {
  $scope.animals = [], FileSvc.getQuizFiles("skeletons").then(function (response) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJjb250cm9sbGVycy9hcHAuY3RybC5qcyIsImNvbnRyb2xsZXJzL2FzdGVyb2lkcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvYnViYmxlcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvY2hhcmFkZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3QuY3RybC5qcyIsImNvbnRyb2xsZXJzL2V4cGVyaWVuY2UuY3RybC5qcyIsImNvbnRyb2xsZXJzL2hvYmJpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xlbW1pbmdzLmN0cmwuanMiLCJjb250cm9sbGVycy9saXN0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbG9naW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3Bvc3RzLmN0cmwuanMiLCJjb250cm9sbGVycy9wcm9maWxlLmN0cmwuanMiLCJjb250cm9sbGVycy9za2lsbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvdGVudGhpbmdzYWRtaW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2dhbWUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc3BsYXkuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc3N0YXRzLmN0cmwuanMiLCJjb250cm9sbGVycy93b3Jrb3V0LmN0cmwuanMiLCJzZXJ2aWNlcy9jYXRlZ29yaWVzLnN2Yy5qcyIsInNlcnZpY2VzL2VtYWlsLnN2Yy5qcyIsInNlcnZpY2VzL2ZpbGUuc3ZjLmpzIiwic2VydmljZXMvZ2FtZS5zdmMuanMiLCJzZXJ2aWNlcy9sYW5ndWFnZS5zdmMuanMiLCJzZXJ2aWNlcy9wb3N0cy5zdmMuanMiLCJzZXJ2aWNlcy90ZW50aGluZ3Muc3ZjLmpzIiwic2VydmljZXMvdXNlci5zdmMuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2FuaW1hbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvZ29vZ2xlLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2xvZ29zLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL21vdmllcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9za2VsZXRvbnMuY3RybC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRvbWFpbnMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0cmluZyIsInByb3RvdHlwZSIsInZhbHVlIiwicmVkdWNlIiwicmVzdWx0IiwibGV0dGVyIiwicmVwbGFjZSIsInRoaXMiLCJTUEVDSUFMX0NIQVJBQ1RFUlMiLCJWT1dFTFMiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZURpYWNyaXRpY3MiLCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyIsImV4dHJhIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiY29uY2VhbCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJyZXBsYWNlQWxsIiwiZmluZCIsInJlcGxhY2VTdHJpbmciLCJpIiwicmVwbGFjZUFycmF5IiwiTnVtYmVyIiwidG9TdHJpbmciLCJkZWNpbWFscyIsInVuZGVmaW5lZCIsInRvRml4ZWQiLCJzb3J0T2JqZWN0Iiwib2JqIiwiZGlyZWN0aW9uIiwiYXJyIiwia2V5IiwicHVzaCIsInNvcnQiLCJhIiwiYiIsIm9ialNvcnRlZCIsImZvckVhY2giLCJpdGVtIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwiJHVybFNlcnZpY2VQcm92aWRlciIsIiRsb2NhdGlvblByb3ZpZGVyIiwib3RoZXJ3aXNlIiwic3RyaWN0TW9kZSIsInN0YXRlIiwidXJsIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIiwiaHRtbDVNb2RlIiwiZW5hYmxlZCIsInJlcXVpcmVCYXNlIiwic2VydmljZSIsIiRyb290U2NvcGUiLCIkdGltZW91dCIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiV2ViU29ja2V0Iiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3QiLCJvbm9wZW4iLCJjb25zb2xlIiwibG9nIiwib25jbG9zZSIsImUiLCJvbmVycm9yIiwicmVhZHlTdGF0ZSIsIm9ubWVzc2FnZSIsInBheWxvYWQiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiJGJyb2FkY2FzdCIsInRvcGljIiwic2VuZCIsImpzb24iLCJzdHJpbmdpZnkiLCJydW4iLCJXZWJTb2NrZXRTdmMiLCJkaXJlY3RpdmUiLCIkZG9jdW1lbnQiLCJyZXN0cmljdCIsInNjb3BlIiwiY2xpY2tPdXRzaWRlIiwibGluayIsImVsIiwiYXR0ciIsIm9uIiwidGFyZ2V0IiwiY29udGFpbnMiLCIkYXBwbHkiLCIkZXZhbCIsIiRzdGF0ZSIsIiRjb21waWxlIiwiJGludGVycG9sYXRlIiwiZ2V0U3R5bGUiLCJ0ZW1wbGF0ZVN0eWxlVXJsIiwic3R5bGUiLCJocmVmIiwicmVsIiwibWF0Y2giLCJlbGVtIiwidGVtcGxhdGVTdHlsZXMiLCJodG1sIiwic3RhcnRTeW1ib2wiLCJlbmRTeW1ib2wiLCJhcHBlbmQiLCIkb24iLCJldmVudCIsInRvU3RhdGUiLCJ0b1BhcmFtcyIsImZyb21TdGF0ZSIsImZyb21QYXJhbXMiLCJzdGF0ZXMiLCJuYW1lIiwicGFyZW50IiwiZ2V0Iiwidmlld3MiLCJfIiwidmlldyIsInNwbGl0IiwiZmxhdCIsImluY2x1ZGVzIiwicmV2ZXJzZSIsImdldFN0eWxlcyIsIiRzY29wZSIsIkxhbmd1YWdlU3ZjIiwiVXNlclN2YyIsIiRtZFRvYXN0IiwidG9hc3QiLCJtZXNzYWdlIiwic2hvdyIsInNpbXBsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInRleHRDb250ZW50IiwicG9zaXRpb24iLCJoaWRlRGVsYXkiLCIkIiwibG9hZCIsImZhZGVPdXQiLCJmYWRlSW4iLCJjbG9zZXN0IiwidG9nZ2xlQ2xhc3MiLCJjaGVja2VkIiwic3RvcFByb3BhZ2F0aW9uIiwidGhlbWVDb3VudGVyIiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiZmxpcFRoZW1lIiwiaGlkZSIsInNldFRpbWVvdXQiLCJnZXRKU09OIiwic2tpbGxzIiwiZmlsdGVyIiwic2tpbGwiLCJob2JiaWVzIiwiam9icyIsImpvYiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJjaGFyYWRlcyIsImdldFRpbWVTcGFuIiwibGFuZ3VhZ2VzIiwic2VsZWN0ZWRMYW5ndWFnZSIsImdldExhbmd1YWdlIiwic2VsZWN0TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaG92ZXJkaXYiLCJkaXZpZCIsImxlZnQiLCJjbGllbnRYIiwidG9wIiwiY2xpZW50WSIsImdldEVsZW1lbnRCeUlkIiwiY3NzIiwidG9nZ2xlIiwibG9jYWxTdG9yYWdlIiwidXNlciIsImxvZ2luIiwidGhlbiIsInJlc3BvbnNlIiwibG9nZ2VkSW4iLCJfaWQiLCJjdXJyZW50VXNlciIsImJpcnRoRGF0ZSIsImxvYWRpbmciLCJsb2dvdXQiLCJmaXJlYmFzZSIsImF1dGgiLCJzaWduT3V0IiwiY2xlYXIiLCJjYXRjaCIsImVycm9yIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCIkbG9jYXRpb24iLCJHYW1lU3ZjIiwiYW5ub3VuY2UiLCJjYW52YXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhdGgiLCJhbGVydCIsImN0eCIsImdldENvbnRleHQiLCJmb250IiwiZmlsbFN0eWxlIiwidGV4dEFsaWduIiwic2hvdHMiLCJhc3Rlcm9pZHMiLCJwb3dlcnVwcyIsImV4cGxvc2lvbnMiLCJtYXAiLCJzcGFjZXBpY3MiLCJzcGFjZSIsInBvd2VydXBUeXBlcyIsImFubm91bmNlbWVudCIsImN5Y2xlIiwicm93cyIsImNvbHVtbnMiLCJzaXplIiwiaW1nIiwiSW1hZ2UiLCJhY3RpdmF0ZSIsInNwYWNlc2hpcCIsIm1heFNwZWVkIiwiY29vbGRvd24iLCJjb29sZG93blRpbWUiLCJyYW5nZSIsInNoaWVsZCIsImV4cGxvZGUiLCJzcGF3bkFzdGVyb2lkcyIsInBvd2VydXAiLCJhcnJheSIsInNyYyIsImV4cGxvc2lvbkltYWdlIiwiZXZhbHVhdGVLZXlzIiwicGxheWluZyIsInNob290Iiwicm90YXRpb24iLCJzcGVlZCIsInNjb3JlIiwiU3BhY2VzaGlwIiwiYXV0b1NwYXduIiwid2lkdGgiLCJoZWlnaHQiLCJjYW5ub24iLCJ4IiwieSIsImFuZ2xlIiwiaWQiLCJyb3VuZCIsIlNob3QiLCJtb3ZlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInN0cm9rZSIsImZpbGwiLCJhc3Rlcm9pZCIsImhpdCIsImdhbWVPdmVyIiwiY29zIiwic2luIiwibGlmZXNwYW4iLCJBc3Rlcm9pZCIsImdldEVudHJ5UG9zaXRpb24iLCJyb3RhdGlvblNwZWVkIiwiRXhwbG9zaW9uIiwic2hvdCIsInBvaW50cyIsInNwYXduUG93ZXJ1cCIsIm9iamVjdCIsIlBvd2VydXAiLCJkZWxheSIsInNhdmUiLCJ0cmFuc2xhdGUiLCJyb3RhdGUiLCJjb2x1bW4iLCJyb3ciLCJkcmF3SW1hZ2UiLCJyZXN0b3JlIiwiZ3JpZFgiLCJncmlkWSIsIm9iamVjdDEiLCJvYmplY3QyIiwia2V5cyIsImFtb3VudCIsImhpZ2hzY29yZSIsInNldEhpZ2hzY29yZSIsInJlc2l6ZUNhbnZhcyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlDb2RlIiwid2hpY2giLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3IiwiY2xlYXJSZWN0IiwiZ3JhZGllbnQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsImFkZENvbG9yU3RvcCIsInRhbGx5IiwiZmlsbFRleHQiLCJtZWFzdXJlVGV4dCIsImJhY2tncm91bmRJbWFnZSIsImJ1YmJsZXMiLCJjb2xvcnMiLCJCdWJibGUiLCJyYWRpdXMiLCJleHBhbmRpbmciLCJjaXJjdW1mZXJlbmNlIiwibWF4UmFkaXVzIiwidngiLCJ2eSIsImZpbHRlckJ1YmJsZXMiLCJidWJibGUiLCJzZWxlY3RXb3JkIiwiY2F0ZWdvcnkiLCJ3b3JkIiwiRW1haWxTdmMiLCJvcHRpb25zIiwidGV4dCIsImNvbnRhY3QiLCJlbWFpbCIsInBob25lIiwiYWJvdXQiLCJzZW5kaW5nIiwic2VudCIsInN0YXR1cyIsImVyciIsImdldFNraWxsIiwic2tpbGxDb2RlIiwiY29kZSIsIiR3aW5kb3ciLCJob2JieVNlbGVjdG9yVmlzaWJsZSIsInNlbGVjdGVkSG9iYnkiLCJzZWxlY3RIb2JieSIsImhvYmJ5Iiwic2hvd0hvYmJ5IiwiaW5kZXgiLCJpbWFnZXMiLCJMRUZUIiwiUklHSFQiLCJsZW1taW5nc0ltYWdlIiwiZGVjb3JJbWFnZSIsImxlbW1pbmdzIiwic3RhcnRlZCIsImFjdGlvbnMiLCJ3YWxrIiwic3RhcnQiLCJlbmQiLCJodWgiLCJmYWxsIiwiZmx5Iiwic3RvcCIsImNsaW1iIiwiYnVpbGQiLCJwdW5jaCIsImRpZyIsIkxlbW1pbmciLCJpbml0IiwiYWN0IiwiYWN0aW9uIiwiYW5pbWF0aW9uIiwic2NhbGUiLCJoYXRjaCIsIm9wZW4iLCJyZWN0IiwiQ2F0ZWdvcmllc1N2YyIsInNob3dDYXRlZ29yeSIsImdldENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidGFza3MiLCJqIiwidGFzayIsInNlbGVjdENhdGVnb3J5Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdGVkVGFza3MiLCJzZWxlY3RhYmxlVGFza3MiLCJlbnRlcmVkQ2F0ZWdvcnkiLCJuZXdDYXRlZ29yeSIsImZvdW5kIiwiYWRkQ2F0ZWdvcnkiLCJuZXdUYXNrIiwic2VsZWN0VGFzayIsImFkZFRhc2siLCJlbnRlcmVkVGFzayIsInJlbW92ZVRhc2siLCJ1bnNlbGVjdFRhc2siLCJ0YXNrTGlzdCIsInNwbGljZSIsImluZGV4T2YiLCJzdGFydFByaW9yaXRpemluZyIsInNldFByaW9yaXR5TGlzdCIsImdldFF1ZXN0aW9ucyIsImNvdW50ZXIiLCJ1aSIsImZpcmViYXNldWkiLCJBdXRoVUkiLCJzdGFydFVJIiwiY2FsbGJhY2tzIiwic2lnbkluU3VjY2VzcyIsImNyZWRlbnRpYWwiLCJyZWRpcmVjdFVybCIsImdldElkVG9rZW4iLCJpZFRva2VuIiwiYXV0aGVudGljYXRlIiwiZGlzcGxheU5hbWUiLCJwaG90b1VSTCIsImVtYWlsVmVyaWZpZWQiLCIkZW1pdCIsIm1vZGFsIiwic2lnbkluRmFpbHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY3JlZCIsInNpZ25JbldpdGhDcmVkZW50aWFsIiwidWlTaG93biIsImRpc3BsYXkiLCJzaWduSW5TdWNjZXNzVXJsIiwic2lnbkluT3B0aW9ucyIsIkdvb2dsZUF1dGhQcm92aWRlciIsIlBST1ZJREVSX0lEIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJzaWduSW5GbG93IiwicmVzZXQiLCIkZmlsdGVyIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJjcmVhdGUiLCJib2R5IiwicG9zdCIsImZldGNoIiwicG9zdHMiLCJnZXRQb3N0IiwidW5zaGlmdCIsImNvdW50cmllcyIsImZsYWciLCJ0aWRiaXQiLCJkYXRlT3B0aW9ucyIsIm1heERhdGUiLCJtaW5EYXRlIiwiaW5pdERhdGUiLCJkYXRlcGlja2VyTW9kZSIsInVzZXJuYW1lVG9nZ2xlIiwicGFzc3dvcmRUb2dnbGUiLCJ0b2dnbGVVc2VybmFtZSIsIm5ld1VzZXJuYW1lIiwidXNlcm5hbWUiLCJ0b2dnbGVQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwib3JpZ2luYWxCZyIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiY2hhbmdlVXNlcm5hbWUiLCJ1cGRhdGVVc2VyIiwiZmxhZ3MiLCJ1c2VyRmxhZ3MiLCJsb2FkQ291bnRyaWVzIiwiJHF1ZXJ5IiwiY291bnRyeSIsIiR3YXRjaCIsInNlbGVjdGVkU2tpbGwiLCJza2lsbHNWaXNpYmxlIiwicHJvamVjdHMiLCJsYWJlbHMiLCJlbXBsb3llciIsImNvbmNhdCIsImZpbHRlcmVkUHJvamVjdHMiLCJwcm9qZWN0Iiwic2V0U2VsZWN0ZWRTa2lsbCIsImNoYXJ0T3B0aW9ucyIsImN1dG91dFBlcmNlbnRhZ2UiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidG9vbHRpcHMiLCJjaGFydFN0eWxlIiwiaW1hZ2UiLCIkc2NlIiwiVGVuVGhpbmdzU3ZjIiwicGFnZSIsImxpc3RzIiwic2VhcmNoIiwic2VhcmNoRmllbGQiLCJuZXdJdGVtIiwibGFuZ3VhZ2VGaWx0ZXIiLCJjYXRlZ29yeUZpbHRlciIsInNlbGVjdGVkTGlzdCIsImhpZ2hsaWdodGVkTGlzdHMiLCJoaWdobGlnaHRlZExpc3RJZHMiLCJsaXN0SWRzVG9EZWxldGUiLCJjb25maXJtZWQiLCJleGhhdXN0ZWQiLCJvYmplY3RDYXRlZ29yaWVzIiwiYmx1cmJUeXBlcyIsImFwaSIsImFkbWluT25seSIsImhhdmVDb21tb25JdGVtcyIsImFycjEiLCJhcnIyIiwic29tZSIsImtleURvd24iLCJpcyIsImNyZWF0ZVZhbHVlIiwidHJpZ2dlciIsImFkZExpc3QiLCJjcmVhdG9yIiwidmFsdWVzIiwiYW5zd2VycyIsImlzRHluYW1pYyIsInNldFNlbGVjdGVkSXRlbSIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkTGlzdCIsImxpc3QiLCJnZXRMaXN0IiwicmVhZE9ubHkiLCJhZG1pbiIsImdldEZpbHRlckNvdW50Iiwic2VhcmNoTGlzdHMiLCJhc3luYyIsInZpZXdWYWx1ZSIsImhpZ2hsaWdodGVkU2VhcmNoVGV4dCIsInJlZ2V4IiwidmFsdWVPcmRlciIsImZpZWxkIiwib3JkZXIiLCJvcmRlckJ5IiwiZ2V0TGlzdHMiLCJnZXRNb3JlTGlzdHMiLCJzZXRMYW5ndWFnZUZpbHRlciIsInNldENhdGVnb3J5RmlsdGVyIiwidG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIiLCJhbGxDYXRlZ29yaWVzIiwiZ2V0Q2F0ZWdvcnlMYWJlbCIsInN1YmNhdGVnb3JpZXMiLCJzdWJjYXRlZ29yeSIsInN0YXJ0c1dpdGgiLCJsYWJlbCIsImpvaW4iLCJzb3J0QnkiLCJsaW1pdCIsImxhbmd1YWdlTm90IiwiY2F0ZWdvcmllc05vdCIsImNvdW50IiwibmV4dFBhZ2UiLCJnZXRMaXN0TmFtZSIsImxpc3RJZCIsInVwZGF0ZVZhbHVlIiwidXBkYXRlZEl0ZW1SZXNwb25zZSIsInVwZGF0ZUxpc3RWYWx1ZSIsImJsdXJiVHlwZSIsImRlbGV0ZVZhbHVlIiwiaGFzRHVwbGljYXRlIiwiY3JlYXRlZEl0ZW1SZXNwb25zZSIsImNyZWF0ZUxpc3RWYWx1ZSIsInVwc2VydExpc3QiLCJibHVyYiIsInZhbHVlVG9EZWxldGUiLCJkZWxldGVMaXN0VmFsdWUiLCJ1cGRhdGVMaXN0IiwidXBkYXRlcyIsInNhdmluZyIsImxpc3RJbmRleCIsImZpbmRJbmRleCIsImNoYW5nZXMiLCJjcmVhdGVMaXN0IiwiYXNzaWduIiwiZGVsZXRlTGlzdCIsImRlbGV0ZUxpc3RzIiwiY29uZmlybU1lcmdlTGlzdHMiLCJtZXJnZUxpc3RzIiwiY29uZmlybURlbGV0ZUxpc3RzIiwidG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0cyIsInRvZ2dsZUhpZ2hsaWdodGVkTGlzdCIsImhpZ2hsaWdodGVkTGlzdElkIiwic2V0RGlmZmljdWx0eSIsImRpZmZpY3VsdHkiLCJzZXRGcmVxdWVuY3kiLCJmcmVxdWVuY3kiLCJnZXRVcGRhdGVkQ2F0ZWdvcmllcyIsImxpc3RDYXRlZ29yeSIsInNldENhdGVnb3J5IiwidXBkYXRlZENhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwibGlzdHNUb1VwZGF0ZSIsImV2ZXJ5IiwiYWxsIiwibGlzdFRvVXBkYXRlIiwidXBkYXRlZExpc3QiLCJjYXRlZ29yeVN0YXR1cyIsImFuc3dlciIsInJlbW92ZUFsbEJ1dExldHRlcnMiLCJnZXRTZWxlY3RlZExpc3RzVGl0bGUiLCJnZXRCbHVyYnMiLCJ0eXBlIiwiZ2V0dGluZ0JsdXJicyIsImdldEVtYmVkVXJsIiwidmlkZW9JZCIsInRyaW0iLCJ0cnVzdEFzUmVzb3VyY2VVcmwiLCJnZXRMYW5ndWFnZXMiLCJsYW5ndWFnZVN0YXRzIiwiZ2V0TGlzdExhbmd1YWdlU3RhdHMiLCJjYXRlZ29yeVN0YXRzIiwiZ2V0TGlzdENhdGVnb3J5U3RhdHMiLCJnZXRVc2VycyIsImdldFF1ZXVlIiwicXVldWUiLCJnZXRQYXVzZSIsInBhdXNlZCIsInVzZXJzIiwidG9nZ2xlQmFuIiwidG9nZ2xlUGF1c2UiLCIkc3RhdGVQYXJhbXMiLCJkaXNhYmxlZENhdGVnb3JpZXMiLCJ1cGRhdGVHYW1lQ2F0ZWdvcnkiLCJnYW1lIiwiYyIsImdldEdhbWUiLCJjaGVja0Fuc3dlciIsImdldERhdGEiLCJnZXRUZW50aGluZ3MiLCJndWVzcyIsImFuc3dlclRlbnRoaW5ncyIsImdldEhpbnQiLCJnZXRUZW50aGluZ3NIaW50Iiwic2tpcExpc3QiLCJza2lwVGVudGhpbmdzTGlzdCIsImRhdGFzZXRzIiwibGluZUNoYXJ0T3B0aW9ucyIsInJlc3BvbnNpdmUiLCJwbHVnaW5zIiwibGVnZW5kIiwidGl0bGUiLCJnZXRQbGF5U3RhdHMiLCJ5ZWFycyIsInVuaXEiLCJtb250aHMiLCJ0aW1lcyIsInBsYXlTdGF0cyIsInNlcmllcyIsIm1vbnRoIiwidW5pcXVlUGxheWVycyIsImdldEdhbWVTdGF0cyIsImdhbWVTdGF0cyIsInNvcnRlZERhdGEiLCJ0aW1lUmVtYWluaW5nIiwidGltZUV4ZXJjaXNpbmciLCJ0aW1lUmVzdGluZyIsInJlc3QiLCJleGVyY2lzaW5nIiwic291bmRzIiwiQXVkaW8iLCJvZmYiLCJzd2l0Y2giLCJleGVyY2lzZXMiLCJwcm9ncmVzcyIsIndvcmtvdXQiLCJleGNlcmNpc2VUaW1lIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVyIiwiZXhlcmNpc2UiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnRFeGVyY2lzZSIsInBsYXkiLCIkaHR0cCIsInN2YyIsImdldFRhc2tzIiwiY2hvaWNlcyIsInByaW9yaXR5TGlzdCIsImZpcnN0Q2hvaWNlIiwic2Vjb25kQ2hvaWNlIiwiY2hvaWNlIiwidCIsIm0iLCJzaHVmZmxlIiwiZ2V0UHJpb3JpdHlMaXN0IiwiZ2V0UXVpekZpbGVzIiwicXVpeiIsImdldEhpZ2hzY29yZSIsImZ1enp5TWF0Y2giLCJnZXRSYW5kb21MaXN0IiwicHV0IiwiZGVsZXRlIiwicmVwb3J0TGlzdCIsImdldFVzZXIiLCJzZXRUb2tlbiIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiY3JlYXRlVXNlciIsIkZpbGVTdmMiLCJhbmltYWxzIiwiYW5pbWFsIiwic291bmQiLCJjYXBpdGFsaXplIiwiZ2V0UmFuZG9tQW5pbWFscyIsImdldFNjb3JlIiwiaXNTY29yZVZpc2libGUiXSwibWFwcGluZ3MiOiJBQUFBLE1BQUFBLDJCQUFBQSxHQUFBLENBQ0E7SUFDQUMsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLENBQUE7RUFHQUMsT0FBQUEsR0FBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsTUFBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsQ0FBQTtBQUdBQyxNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGtCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBUiwyQkFBQUEsQ0FBQVMsTUFBQUEsQ0FBQSxDQUFBQyxNQUFBQSxFQUFBQyxNQUFBQSxLQUNBRCxNQUFBQSxDQUFBRSxPQUFBQSxDQUFBRCxNQUFBQSxDQUFBVCxPQUFBQSxFQUFBUyxNQUFBQSxDQUFBVixJQUFBQSxDQUFBQSxFQUNBWSxJQUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUE7QUFHQSxNQUFBQyxrQkFBQUEsR0FBQSxxQ0FBQTtFQUNBQyxNQUFBQSxHQUFBLHdFQUFBO0FBRUFYLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEseUJBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFELE9BQUFBLENBQUEsSUFBQUksTUFBQUEsQ0FBQSxJQUFBRixrQkFBQUEsR0FBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxFQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBVixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLHFCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBSSxXQUFBQSxFQUFBQSxDQUFBQyxnQkFBQUEsRUFBQUEsQ0FBQUMsdUJBQUFBLEVBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBZixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFNBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUFZLEtBQUFBLEVBQUFBO0lBQ0EsT0FBQVAsSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxJQUFBSSxNQUFBQSxDQUFBLEtBQUFGLGtCQUFBQSxHQUFBTSxLQUFBQSxHQUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FoQixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGVBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUFZLEtBQUFBLEVBQUFBO0lBQ0EsT0FBQVAsSUFBQUEsQ0FBQVEsTUFBQUEsR0FBQSxDQUFBLEdBQUFSLElBQUFBLEdBQUFBLElBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUFBLElBQUFBLENBQUFTLFNBQUFBLENBQUEsQ0FBQSxFQUFBVCxJQUFBQSxDQUFBUSxNQUFBQSxHQUFBLENBQUEsQ0FBQSxDQUFBRSxPQUFBQSxDQUFBSCxLQUFBQSxDQUFBQSxHQUFBUCxJQUFBQSxDQUFBQSxJQUFBQSxDQUFBUSxNQUFBQSxHQUFBLENBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FqQixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFlBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFXLE1BQUFBLENBQUEsQ0FBQSxDQUFBLENBQUFDLFdBQUFBLEVBQUFBLEdBQUFaLElBQUFBLENBQUFhLEtBQUFBLENBQUEsQ0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQXRCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsWUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLENBQUFBLE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsY0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQWMsVUFBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxDQUFBLENBQUFmLE9BQUFBLENBQUEsR0FBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBQSxPQUFBQSxDQUFBLEdBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQWUsVUFBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQXZCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsY0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQW9CLElBQUFBLEVBQUFoQixPQUFBQSxFQUFBQTtJQUVBLEtBREEsSUFBQWlCLGFBQUFBLEdBQUFoQixJQUFBQSxFQUNBaUIsQ0FBQUEsR0FBQSxDQUFBLEVBQUFBLENBQUFBLEdBQUFGLElBQUFBLENBQUFQLE1BQUFBLEVBQUFTLENBQUFBLEVBQUFBLEVBQ0FELGFBQUFBLEdBQUFBLGFBQUFBLENBQUFqQixPQUFBQSxDQUFBZ0IsSUFB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Q0FFQUYsS0FBQUEsQ0FBQSxRQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FDLFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FDLFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxhQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUUsVUFBQUEsRUFBQSxZQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxXQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxNQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxPQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGlCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG9CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxtQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsaUJBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsb0JBQUE7SUFDQUQsV0FBQUEs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QSxDQUFBO0lBRUE2TSxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO0lBQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7TUFDQUEsU0FBQUEsQ0FBQUMsUUFBQUEsSUFBQSxHQUNBO0lBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQXZILElBQUFBLEVBQUEsVUFBQTtJQUNBOEcsWUFBQUEsRUFBQSxZQUFBO0lBQ0FDLEtBQUFBLEVBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBO01BQ0FDLE9BQUFBLEVBQUEsQ0FBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtNQUNBck4sQ0FBQUEsRUFBQSxDQUFBO01BQ0FTLFNBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBO0lBRUE2TSxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO0lBQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7TUFDQUEsU0FBQUEsQ0FBQUUsUUFBQUEsR0FBQSxDQUFBLEtBQ0FGLFNBQUFBLENBQUFHLFlBQUFBLElBQUEsQ0FBQSxDQUVBO0lBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQXpILElBQUFBLEVBQUEsT0FBQTtJQUNBOEcsWUFBQUEsRUFBQSxnQkFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7TUFDQXJOLENBQUFBLEVBQUEsQ0FBQTtNQUNBUyxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBNk0sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO01BQ0FBLFNBQUFBLENBQUFJLEtBQUFBLElBQUEsQ0FDQTtJQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0ExSCxJQUFBQSxFQUFBLFFBQUE7SUFDQThHLFlBQUFBLEVBQUEsUUFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7TUFDQXJOLENBQUFBLEVBQUEsQ0FBQTtNQUNBUyxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBNk0sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO01BQ0FBLFNBQUFBLENBQUFLLE1BQUFBLEdBQUFBLENBQUEsQ0FDQTtJQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0EzSCxJQUFBQSxFQUFBLE1BQUE7SUFDQThHLFlBQUFBLEVBQUEsTUFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7TUFDQXJOLENBQUFBLEVBQUEsQ0FBQTtNQUNBUyxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBNk0sR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO01BQ0EsS0FBQSxJQUFBek4sQ0FBQUEsSUFBQTBNLFNBQUFBLEVBQ0FBLFNBQUFBLENBQUExTSxDQUFBQSxDQUFBQSxDQUFBK04sT0FBQUEsRUFBQUE7TUFFQUMsY0FBQUEsQ0FBQSxDQUFBLENBQ0E7SUFBQTtFQUFBLENBQUEsQ0FBQTtFQVVBaEIsWUFBQUEsQ0FBQS9MLE9BQUFBLENBQUEsVUFBQWdOLE9BQUFBLEVBQUFqTyxDQUFBQSxFQUFBa08sS0FBQUEsRUFBQUE7SUFDQUEsS0FBQUEsQ0FBQWxPLENBQUFBLENBQUFBLENBQUFzTixHQUFBQSxDQUFBYSxHQUFBQSxHQUFBLFlBQUEsR0FBQUYsT0FBQUEsQ0FBQTlILElBQUFBLEdBQUEsTUFDQTtFQUFBLENBQUEsQ0FBQTtFQUVBLElBa1RBc0gsU0FBQUE7SUFsVEFXLGNBQUFBLEdBQUEsSUFBQWIsS0FBQUE7RUFvQkEsU0FBQWMsWUFBQUEsQ0FBQUEsRUFBQUE7SUFDQXZILE1BQUFBLENBQUF3SCxPQUFBQSxJQUNBekIsR0FBQUEsQ0FBQSxFQUFBLENBQUEsSUFFQSxDQUFBLEtBQUFZLFNBQUFBLENBQUFFLFFBQUFBLElBQ0FGLFNBQUFBLENBQUFjLEtBQUFBLEVBQUFBLEVBR0ExQixHQUFBQSxDQUFBLEVBQUEsQ0FBQSxLQUVBLENBQUEsS0FBQVksU0FBQUEsQ0FBQWUsUUFBQUEsR0FDQWYsU0FBQUEsQ0FBQWUsUUFBQUEsR0FBQSxHQUFBLEdBRUFmLFNBQUFBLENBQUFlLFFBQUFBLElBQUEsQ0FBQSxDQUFBLEVBR0EzQixHQUFBQSxDQUFBLEVBQUEsQ0FBQSxLQUVBLEdBQUEsS0FBQVksU0FBQUEsQ0FBQWUsUUFBQUEsR0FDQWYsU0FBQUEsQ0FBQWUsUUFBQUEsR0FBQSxDQUFBLEdBRUFmLFNBQUFBLENBQUFlLFFBQUFBLElBQUEsQ0FBQSxDQUFBLEVBR0EzQixHQUFBQSxDQUFBLEVBQUEsQ0FBQSxHQUVBWSxTQUFBQSxDQUFBZ0IsS0FBQUEsSUFBQWhCLFNBQUFBLENBQUFDLFFBQUFBLEtBQ0FELFNBQUFBLENBQUFnQixLQUFBQSxJQUFBLENBQUEsQ0FBQSxHQUdBaEIsU0FBQUEsQ0FBQWdCLEtBQUFBLEdBQUEsQ0FBQSxJQUNBaEIsU0FBQUEsQ0FBQWdCLEtBQUFBLEVBQUFBLEVBR0E1QixHQUFBQSxDQUFBLEVBQUEsQ0FBQSxJQUVBWSxTQUFBQSxDQUFBZ0IsS0FBQUEsR0FBQSxDQUFBLEtBQ0FoQixTQUFBQSxDQUFBZ0IsS0FBQUEsSUFBQSxDQUFBLENBQUEsSUFJQTVCLEdBQUFBLENBQUEsRUFBQSxDQUFBLEtBd1BBL0YsTUFBQUEsQ0FBQXdILE9BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBeEgsTUFBQUEsQ0FBQTRILEtBQUFBLEdBQUEsQ0FBQSxFQUNBM0IsS0FBQUEsR0FBQXRFLElBQUFBLENBQUFDLEtBQUFBLENBQUFELElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUFzRSxTQUFBQSxDQUFBQSxFQUNBaEcsTUFBQUEsQ0FBQW5DLE1BQUFBLEVBQUFBLEVBQ0E4SSxTQUFBQSxHQUFBLElBQUFrQixTQUFBQSxJQUNBN0gsTUFBQUEsQ0FBQTRILEtBQUFBLEdBQUEsQ0FBQSxFQUNBVixjQUFBQSxDQUFBLENBQUEsQ0FBQSxFQUNBWSxTQUFBQSxFQUFBQSxDQTNQQTtFQUFBO0VBRUEsU0FBQUQsU0FBQUEsQ0FBQUEsRUFBQUE7SUFDQTVQLElBQUFBLENBQUE4UCxLQUFBQSxHQUFBLEVBQUEsRUFDQTlQLElBQUFBLENBQUErUCxNQUFBQSxHQUFBLEVBQUEsRUFDQS9QLElBQUFBLENBQUErTyxNQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQS9PLElBQUFBLENBQUE4TyxLQUFBQSxHQUFBLEVBQUEsRUFDQTlPLElBQUFBLENBQUFnUSxNQUFBQSxHQUFBO01BQ0FDLENBQUFBLEVBQUFqUSxJQUFBQSxDQUFBOFAsS0FBQUEsR0FBQSxDQUFBLEdBQUEsR0FBQTtNQUNBSSxDQUFBQSxFQUFBbFEsSUFBQUEsQ0FBQStQLE1BQUFBLEdBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQS9QLElBQUFBLENBQUErUDtJQUFBQSxDQUFBQSxFQUVBL1AsSUFBQUEsQ0FBQTRPLFFBQUFBLEdBQUEsQ0FBQSxFQUNBNU8sSUFBQUEsQ0FBQTZPLFlBQUFBLEdBQUEsRUFBQSxFQUNBN08sSUFBQUEsQ0FBQTBJLFFBQUFBLEdBQUEsQ0FBQXVFLE1BQUFBLENBQUE2QyxLQUFBQSxHQUFBLENBQUEsR0FBQTlQLElBQUFBLENBQUE4UCxLQUFBQSxHQUFBLENBQUEsRUFBQTdDLE1BQUFBLENBQUE4QyxNQUFBQSxHQUFBLENBQUEsR0FBQS9QLElBQUFBLENBQUErUCxNQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBL1AsSUFBQUEsQ0FBQXVPLEdBQUFBLEdBQUEsSUFBQUMsS0FBQUEsSUFDQXhPLElBQUFBLENBQUF1TyxHQUFBQSxDQUFBYSxHQUFBQSxHQUFBLHlCQUFBLEVBQ0FwUCxJQUFBQSxDQUFBMFAsS0FBQUEsR0FBQSxDQUFBLEVBQ0ExUCxJQUFBQSxDQUFBMk8sUUFBQUEsR0FBQSxHQUFBLEVBQ0EzTyxJQUFBQSxDQUFBbVEsS0FBQUEsR0FBQSxDQUFBLEVBQ0FuUSxJQUFBQSxDQUFBeVAsUUFBQUEsR0FBQSxDQUFBLEVBRUF6UCxJQUFBQSxDQUFBd1AsS0FBQUEsR0FBQSxZQUFBO01BQ0F4UCxJQUFBQSxDQUFBNE8sUUFBQUEsR0FBQTVPLElBQUFBLENBQUE2TyxZQUFBQTtNQUNBLElBQUF1QixFQUFBQSxHQUFBMUcsSUFBQUEsQ0FBQTJHLEtBQUFBLENBQUEsR0FBQSxHQUFBM0csSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsQ0FBQUE7TUFDQWlFLEtBQUFBLENBQUEwQyxFQUFBQSxDQUFBQSxHQUFBLElBQUFFLElBQUFBLENBQUFGLEVBQUFBLEVBQUFwUSxJQUFBQSxDQUNBO0lBQUEsQ0FBQSxFQUVBQSxJQUFBQSxDQUFBdVEsSUFBQUEsR0FBQSxZQUFBO01BVUEsS0FBQSxJQUFBdFAsQ0FBQUEsSUFUQWpCLElBQUFBLENBQUErTyxNQUFBQSxLQUNBMUIsR0FBQUEsQ0FBQW1ELFNBQUFBLEVBQUFBLEVBQ0FuRCxHQUFBQSxDQUFBb0QsR0FBQUEsQ0FBQXpRLElBQUFBLENBQUEwSSxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBMUksSUFBQUEsQ0FBQThQLEtBQUFBLEdBQUEsQ0FBQSxFQUFBOVAsSUFBQUEsQ0FBQTBJLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUExSSxJQUFBQSxDQUFBK1AsTUFBQUEsR0FBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEdBQUFyRyxJQUFBQSxDQUFBZ0gsRUFBQUEsQ0FBQUEsRUFDQXJELEdBQUFBLENBQUFHLFNBQUFBLEdBQUEsdUJBQUEsRUFDQUgsR0FBQUEsQ0FBQXNELFdBQUFBLEdBQUEsdUJBQUEsRUFDQXRELEdBQUFBLENBQUF1RCxTQUFBQSxHQUFBLENBQUEsRUFDQXZELEdBQUFBLENBQUF3RCxNQUFBQSxFQUFBQSxFQUNBeEQsR0FBQUEsQ0FBQXlELElBQUFBLEVBQUFBLENBQUFBLEVBRUFuRCxTQUFBQSxFQUFBO1FBQ0EsSUFBQW9ELFFBQUFBLEdBQUFwRCxTQUFBQSxDQUFBMU0sQ0FBQUEsQ0FBQUE7UUFDQSxJQUFBK1AsR0FBQUEsQ0FBQUQsUUFBQUEsRUFBQS9RLElBQUFBLENBQUFBLEVBQUE7VUFDQSxJQUFBLENBQUFBLElBQUFBLENBQUErTyxNQUFBQSxFQUlBLE9BQUFrQyxRQUFBQSxFQUFBQTtVQUhBalIsSUFBQUEsQ0FBQStPLE1BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBZ0MsUUFBQUEsQ0FBQS9CLE9BQUFBLEVBSUE7UUFBQTtNQUNBO01BQ0FoUCxJQUFBQSxDQUFBbVEsS0FBQUEsR0FBQW5RLElBQUFBLENBQUF5UCxRQUFBQSxFQUNBelAsSUFBQUEsQ0FBQTRPLFFBQUFBLEdBQUEsQ0FBQSxJQUNBNU8sSUFBQUEsQ0FBQTRPLFFBQUFBLEVBQUFBLEVBRUEyQixJQUFBQSxDQUFBdlEsSUFBQUEsQ0FDQTtJQUFBLENBQ0E7RUFBQTtFQUVBLFNBQUFzUSxJQUFBQSxDQUFBRixFQUFBQSxFQUFBMUIsU0FBQUEsRUFBQUE7SUFDQTFPLElBQUFBLENBQUFvUSxFQUFBQSxHQUFBQSxFQUFBQSxFQUNBcFEsSUFBQUEsQ0FBQTBJLFFBQUFBLEdBQUEsQ0FDQWdHLFNBQUFBLENBQUFoRyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUNBZ0csU0FBQUEsQ0FBQXNCLE1BQUFBLENBQUFDLENBQUFBLEdBQ0F2QixTQUFBQSxDQUFBc0IsTUFBQUEsQ0FBQUMsQ0FBQUEsR0FBQXZHLElBQUFBLENBQUF3SCxHQUFBQSxDQUFBQSxDQUFBeEMsU0FBQUEsQ0FBQWUsUUFBQUEsR0FBQSxFQUFBLElBQUEvRixJQUFBQSxDQUFBZ0gsRUFBQUEsR0FBQSxHQUFBLENBQUEsRUFDQWhDLFNBQUFBLENBQUFoRyxRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUNBZ0csU0FBQUEsQ0FBQXNCLE1BQUFBLENBQUFFLENBQUFBLEdBQ0F4QixTQUFBQSxDQUFBc0IsTUFBQUEsQ0FBQUUsQ0FBQUEsR0FBQXhHLElBQUFBLENBQUF5SCxHQUFBQSxDQUFBQSxDQUFBekMsU0FBQUEsQ0FBQWUsUUFBQUEsR0FBQSxFQUFBLElBQUEvRixJQUFBQSxDQUFBZ0gsRUFBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxFQUVBMVEsSUFBQUEsQ0FBQThQLEtBQUFBLEdBQUEsQ0FBQSxFQUNBOVAsSUFBQUEsQ0FBQStQLE1BQUFBLEdBQUEsRUFBQSxFQUNBL1AsSUFBQUEsQ0FBQW1RLEtBQUFBLEdBQUF6QixTQUFBQSxDQUFBeUIsS0FBQUEsRUFDQW5RLElBQUFBLENBQUF5UCxRQUFBQSxHQUFBZixTQUFBQSxDQUFBZSxRQUFBQSxFQUNBelAsSUFBQUEsQ0FBQTBQLEtBQUFBLEdBQUFoQixTQUFBQSxDQUFBZ0IsS0FBQUEsR0FBQSxHQUFBLEVBQ0ExUCxJQUFBQSxDQUFBb1IsUUFBQUEsR0FBQTFDLFNBQUFBLENBQUFJLEtBQUFBLEVBQ0E5TyxJQUFBQSxDQUFBdU8sR0FBQUEsR0FBQSxJQUFBQyxLQUFBQSxJQUNBeE8sSUFBQUEsQ0FBQXVPLEdBQUFBLENBQUFhLEdBQUFBLEdBQUEsb0JBQUEsRUFFQXBQLElBQUFBLENBQUF1USxJQUFBQSxHQUFBLFlBQUE7TUFDQXZRLElBQUFBLENBQUFvUixRQUFBQSxFQUFBQSxFQUNBYixJQUFBQSxDQUFBdlEsSUFBQUEsQ0FDQTtJQUFBLENBQ0E7RUFBQTtFQUVBLFNBQUFxUixRQUFBQSxDQUFBakIsRUFBQUEsRUFBQUE7SUFDQXBRLElBQUFBLENBQUFvUSxFQUFBQSxHQUFBQSxFQUFBQSxFQUNBcFEsSUFBQUEsQ0FBQThQLEtBQUFBLEdBQUEsRUFBQSxHQUFBcEcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQSxFQUFBLEVBQ0F6SixJQUFBQSxDQUFBK1AsTUFBQUEsR0FBQS9QLElBQUFBLENBQUE4UCxLQUFBQSxFQUNBOVAsSUFBQUEsQ0FBQTBJLFFBQUFBLEdBQUE0SSxnQkFBQUEsQ0FBQXRSLElBQUFBLENBQUE4UCxLQUFBQSxFQUFBOVAsSUFBQUEsQ0FBQStQLE1BQUFBLENBQUFBLEVBQ0EvUCxJQUFBQSxDQUFBbVEsS0FBQUEsR0FBQSxHQUFBLEdBQUF6RyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxFQUNBekosSUFBQUEsQ0FBQXlQLFFBQUFBLEdBQUEsR0FBQSxHQUFBL0YsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsRUFDQXpKLElBQUFBLENBQUF1UixhQUFBQSxHQUFBLENBQUEsR0FBQTdILElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUEsQ0FBQSxFQUNBekosSUFBQUEsQ0FBQTBQLEtBQUFBLEdBQUEsR0FBQSxHQUFBaEcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQSxDQUFBLEVBQ0F6SixJQUFBQSxDQUFBdU8sR0FBQUEsR0FBQSxJQUFBQyxLQUFBQSxJQUNBeE8sSUFBQUEsQ0FBQXVPLEdBQUFBLENBQUFhLEdBQUFBLEdBQUEsb0JBQUEsSUFBQTFGLElBQUFBLENBQUEyRyxLQUFBQSxDQUFBLENBQUEsR0FBQTNHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLENBQUFBLEdBQUEsQ0FBQSxDQUFBLEdBQUEsTUFBQSxFQUVBekosSUFBQUEsQ0FBQWdQLE9BQUFBLEdBQUEsWUFBQTtNQUVBLE9BREFuQixVQUFBQSxDQUFBN04sSUFBQUEsQ0FBQW9RLEVBQUFBLENBQUFBLEdBQUEsSUFBQW9CLFNBQUFBLENBQUF4UixJQUFBQSxDQUFBQSxFQUFBQSxPQUNBMk4sU0FBQUEsQ0FBQTNOLElBQUFBLENBQUFvUSxFQUFBQSxDQUNBO0lBQUEsQ0FBQSxFQUVBcFEsSUFBQUEsQ0FBQXVRLElBQUFBLEdBQUEsWUFBQTtNQU9BLEtBQUEsSUFBQXRQLENBQUFBLElBTkFqQixJQUFBQSxDQUFBeVAsUUFBQUEsSUFBQXpQLElBQUFBLENBQUF1UixhQUFBQSxFQUNBdlIsSUFBQUEsQ0FBQXlQLFFBQUFBLEdBQUEsR0FBQSxHQUNBelAsSUFBQUEsQ0FBQXlQLFFBQUFBLEdBQUF6UCxJQUFBQSxDQUFBeVAsUUFBQUEsR0FBQSxHQUFBLEdBQ0F6UCxJQUFBQSxDQUFBeVAsUUFBQUEsR0FBQSxDQUFBLEtBQ0F6UCxJQUFBQSxDQUFBeVAsUUFBQUEsR0FBQSxHQUFBLEdBQUF6UCxJQUFBQSxDQUFBeVAsUUFBQUEsQ0FBQUEsRUFFQS9CLEtBQUFBLEVBQUE7UUFDQSxJQUFBK0QsSUFBQUEsR0FBQS9ELEtBQUFBLENBQUF6TSxDQUFBQSxDQUFBQTtRQUNBLElBQUErUCxHQUFBQSxDQUFBUyxJQUFBQSxFQUFBelIsSUFBQUEsQ0FBQUEsRUFBQTtVQUNBQSxJQUFBQSxDQUFBZ1AsT0FBQUEsRUFBQUE7VUFDQSxJQUFBMEMsTUFBQUEsR0FBQWhJLElBQUFBLENBQUFDLEtBQUFBLENBQUFBLENBQUE4SCxJQUFBQSxDQUFBL0IsS0FBQUEsR0FBQSxHQUFBLElBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQTFQLElBQUFBLENBQUE4UCxLQUFBQSxDQUFBQTtVQUNBcEcsSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQUEsQ0FBQStILE1BQUFBLEdBQUEzSixNQUFBQSxDQUFBNEgsS0FBQUEsSUFBQSxHQUFBLENBQUEsR0FBQWpHLElBQUFBLENBQUFDLEtBQUFBLENBQUE1QixNQUFBQSxDQUFBNEgsS0FBQUEsR0FBQSxHQUFBLENBQUEsSUFDQWdDLFlBQUFBLEVBQUFBLEVBRUE1SixNQUFBQSxDQUFBNEgsS0FBQUEsSUFBQStCLE1BQUFBLEVBQ0EzSixNQUFBQSxDQUFBbkMsTUFBQUEsRUFBQUEsRUFBQUEsT0FDQThILEtBQUFBLENBQUF6TSxDQUFBQSxDQUNBO1FBQUE7TUFDQTtNQUNBc1AsSUFBQUEsQ0FBQXZRLElBQUFBLENBQ0E7SUFBQSxDQUNBO0VBQUE7RUFFQSxTQUFBd1IsU0FBQUEsQ0FBQUksTUFBQUEsRUFBQUE7SUFDQTVSLElBQUFBLENBQUEwSSxRQUFBQSxHQUFBLENBQUFrSixNQUFBQSxDQUFBbEosUUFBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQWtKLE1BQUFBLENBQUFsSixRQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQ0ExSSxJQUFBQSxDQUFBOFAsS0FBQUEsR0FBQThCLE1BQUFBLENBQUE5QixLQUFBQSxFQUNBOVAsSUFBQUEsQ0FBQStQLE1BQUFBLEdBQUE2QixNQUFBQSxDQUFBN0IsTUFBQUEsRUFDQS9QLElBQUFBLENBQUEwUCxLQUFBQSxHQUFBLENBQUEsRUFDQTFQLElBQUFBLENBQUFtUSxLQUFBQSxHQUFBLEdBQUEsR0FBQXpHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEVBQ0F6SixJQUFBQSxDQUFBbU8sS0FBQUEsR0FBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUE7TUFDQUMsT0FBQUEsRUFBQSxDQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO01BQ0FyTixDQUFBQSxFQUFBLENBQUE7TUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFFQTFCLElBQUFBLENBQUFvUixRQUFBQSxHQUFBLEVBQUEsRUFDQXBSLElBQUFBLENBQUF1TyxHQUFBQSxHQUFBYyxjQUFBQSxFQUVBclAsSUFBQUEsQ0FBQXVRLElBQUFBLEdBQUEsWUFBQTtNQUNBdlEsSUFBQUEsQ0FBQW9SLFFBQUFBLEVBQUFBLEVBQ0FiLElBQUFBLENBQUF2USxJQUFBQSxDQUFBQSxFQUNBQSxJQUFBQSxDQUFBbU8sS0FBQUEsQ0FBQXpNLFNBQUFBLEdBQ0ExQixJQUFBQSxDQUFBbU8sS0FBQUEsQ0FBQWxOLENBQUFBLEVBQUFBLEdBRUFqQixJQUFBQSxDQUFBbU8sS0FBQUEsQ0FBQWxOLENBQUFBLEVBRUE7SUFBQSxDQUNBO0VBQUE7RUFFQSxTQUFBNFEsT0FBQUEsQ0FBQXpCLEVBQUFBLEVBQUFBO0lBQ0FwUSxJQUFBQSxDQUFBb1EsRUFBQUEsR0FBQUEsRUFBQUEsRUFDQXBRLElBQUFBLENBQUFrUCxPQUFBQSxHQUFBakIsWUFBQUEsQ0FBQXZFLElBQUFBLENBQUFDLEtBQUFBLENBQUFELElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUF3RSxZQUFBQSxDQUFBek4sTUFBQUEsQ0FBQUEsQ0FBQUEsRUFDQVIsSUFBQUEsQ0FBQW1PLEtBQUFBLEdBQUFuTyxJQUFBQSxDQUFBa1AsT0FBQUEsQ0FBQWYsS0FBQUEsRUFDQW5PLElBQUFBLENBQUFvUixRQUFBQSxHQUFBLEdBQUEsRUFDQXBSLElBQUFBLENBQUFtTyxLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdE8sSUFBQUEsQ0FBQW1PLEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLElBQ0F0TyxJQUFBQSxDQUFBK1AsTUFBQUEsR0FBQSxFQUFBLEVBQ0EvUCxJQUFBQSxDQUFBOFAsS0FBQUEsR0FBQXBHLElBQUFBLENBQUEyRyxLQUFBQSxDQUFBclEsSUFBQUEsQ0FBQStQLE1BQUFBLEdBQUEvUCxJQUFBQSxDQUFBbU8sS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXRPLElBQUFBLENBQUFtTyxLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBRUF0TyxJQUFBQSxDQUFBOFAsS0FBQUEsR0FBQSxFQUFBLEVBQ0E5UCxJQUFBQSxDQUFBK1AsTUFBQUEsR0FBQXJHLElBQUFBLENBQUEyRyxLQUFBQSxDQUFBclEsSUFBQUEsQ0FBQThQLEtBQUFBLEdBQUE5UCxJQUFBQSxDQUFBbU8sS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXRPLElBQUFBLENBQUFtTyxLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFFQXRPLElBQUFBLENBQUEwSSxRQUFBQSxHQUFBNEksZ0JBQUFBLENBQUF0UixJQUFBQSxDQUFBOFAsS0FBQUEsRUFBQTlQLElBQUFBLENBQUErUCxNQUFBQSxDQUFBQSxFQUNBL1AsSUFBQUEsQ0FBQXVPLEdBQUFBLEdBQUF2TyxJQUFBQSxDQUFBa1AsT0FBQUEsQ0FBQVgsR0FBQUEsRUFDQXZPLElBQUFBLENBQUFtUSxLQUFBQSxHQUFBLEdBQUEsR0FBQXpHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEVBQ0F6SixJQUFBQSxDQUFBMFAsS0FBQUEsR0FBQSxHQUFBLEdBQUFoRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBLEVBQUE7SUFDQSxJQUFBcUksS0FBQUEsR0FBQSxDQUFBO0lBQ0E5UixJQUFBQSxDQUFBdVEsSUFBQUEsR0FBQSxNQUNBdlEsSUFBQUEsQ0FBQW9SLFFBQUFBLElBQUEsQ0FBQSxHQUFBLE9BQ0F4RCxRQUFBQSxDQUFBNU4sSUFBQUEsQ0FBQW9RLEVBQUFBLENBQUFBLEdBRUFZLEdBQUFBLENBQUF0QyxTQUFBQSxFQUFBMU8sSUFBQUEsQ0FBQUEsSUFDQStILE1BQUFBLENBQUFpRixRQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQWpGLE1BQUFBLENBQUFtRyxZQUFBQSxHQUFBbE8sSUFBQUEsQ0FBQWtQLE9BQUFBLENBQUFoQixZQUFBQSxFQUNBbkcsTUFBQUEsQ0FBQW5DLE1BQUFBLEVBQUFBLEVBQ0FrRSxVQUFBQSxDQUFBLE1BQUE7TUFDQS9CLE1BQUFBLENBQUFpRixRQUFBQSxHQUFBQSxDQUFBLENBQUEsRUFDQWpGLE1BQUFBLENBQUFuQyxNQUFBQSxFQUFBO0lBQUEsQ0FBQSxFQUNBLEdBQUEsQ0FBQSxFQUNBNUYsSUFBQUEsQ0FBQWtQLE9BQUFBLENBQUFULFFBQUFBLENBQUFDLFNBQUFBLENBQUFBLEVBQUFBLE9BQ0FkLFFBQUFBLENBQUE1TixJQUFBQSxDQUFBb1EsRUFBQUEsQ0FBQUEsS0FFQXBRLElBQUFBLENBQUFvUixRQUFBQSxFQUFBQSxFQUNBYixJQUFBQSxDQUFBdlEsSUFBQUEsQ0FBQUEsRUFBQUEsTUFDQThSLEtBQUFBLElBQUEsQ0FBQSxJQUNBOVIsSUFBQUEsQ0FBQW1PLEtBQUFBLENBQUF6TSxTQUFBQSxHQUNBMUIsSUFBQUEsQ0FBQW1PLEtBQUFBLENBQUFsTixDQUFBQSxFQUFBQSxHQUVBakIsSUFBQUEsQ0FBQW1PLEtBQUFBLENBQUFsTixDQUFBQSxFQUFBQSxFQUVBNlEsS0FBQUEsR0FBQSxDQUFBLElBRUFBLEtBQUFBLEVBQUFBLENBQUFBLENBR0E7RUFBQTtFQUVBLFNBQUF2QixJQUFBQSxDQUFBcUIsTUFBQUEsRUFBQUE7SUFpQkEsSUFoQkFBLE1BQUFBLENBQUFsSixRQUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBa0osTUFBQUEsQ0FBQWxDLEtBQUFBLEdBQUEsR0FBQSxHQUFBaEcsSUFBQUEsQ0FBQXdILEdBQUFBLENBQUFBLENBQUFVLE1BQUFBLENBQUF6QixLQUFBQSxHQUFBLEVBQUEsSUFBQXpHLElBQUFBLENBQUFnSCxFQUFBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBa0IsTUFBQUEsQ0FBQWxKLFFBQUFBLENBQUEsQ0FBQSxDQUFBLElBQUFrSixNQUFBQSxDQUFBbEMsS0FBQUEsR0FBQSxHQUFBLEdBQUFoRyxJQUFBQSxDQUFBeUgsR0FBQUEsQ0FBQUEsQ0FBQVMsTUFBQUEsQ0FBQXpCLEtBQUFBLEdBQUEsRUFBQSxJQUFBekcsSUFBQUEsQ0FBQWdILEVBQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FrQixNQUFBQSxDQUFBbEosUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXVFLE1BQUFBLENBQUE2QyxLQUFBQSxHQUNBOEIsTUFBQUEsQ0FBQWxKLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQWtKLE1BQUFBLENBQUE5QixLQUFBQSxHQUNBOEIsTUFBQUEsQ0FBQWxKLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQWtKLE1BQUFBLENBQUE5QixLQUFBQSxLQUNBOEIsTUFBQUEsQ0FBQWxKLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUF1RSxNQUFBQSxDQUFBNkMsS0FBQUEsQ0FBQUEsRUFFQThCLE1BQUFBLENBQUFsSixRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBdUUsTUFBQUEsQ0FBQThDLE1BQUFBLEdBQ0E2QixNQUFBQSxDQUFBbEosUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBa0osTUFBQUEsQ0FBQTdCLE1BQUFBLEdBQ0E2QixNQUFBQSxDQUFBbEosUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBa0osTUFBQUEsQ0FBQTdCLE1BQUFBLEtBQ0E2QixNQUFBQSxDQUFBbEosUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQXVFLE1BQUFBLENBQUE4QyxNQUFBQSxDQUFBQSxFQUVBMUMsR0FBQUEsQ0FBQTBFLElBQUFBLEVBQUFBLEVBQ0ExRSxHQUFBQSxDQUFBMkUsU0FBQUEsQ0FBQUosTUFBQUEsQ0FBQWxKLFFBQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUFrSixNQUFBQSxDQUFBbEosUUFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUNBMkUsR0FBQUEsQ0FBQTJFLFNBQUFBLENBQUFKLE1BQUFBLENBQUE5QixLQUFBQSxHQUFBLENBQUEsRUFBQThCLE1BQUFBLENBQUE3QixNQUFBQSxHQUFBLENBQUEsQ0FBQSxFQUNBMUMsR0FBQUEsQ0FBQTRFLE1BQUFBLENBQUFMLE1BQUFBLENBQUFuQyxRQUFBQSxHQUFBL0YsSUFBQUEsQ0FBQWdILEVBQUFBLEdBQUEsR0FBQSxDQUFBLEVBQ0FrQixNQUFBQSxDQUFBekQsS0FBQUEsRUFBQTtNQUNBLElBQUErRCxNQUFBQSxHQUFBTixNQUFBQSxDQUFBekQsS0FBQUEsQ0FBQWxOLENBQUFBLEdBQUEyUSxNQUFBQSxDQUFBekQsS0FBQUEsQ0FBQUUsT0FBQUE7UUFDQThELEdBQUFBLEdBQUF6SSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBaUksTUFBQUEsQ0FBQXpELEtBQUFBLENBQUFsTixDQUFBQSxHQUFBMlEsTUFBQUEsQ0FBQXpELEtBQUFBLENBQUFFLE9BQUFBLENBQUFBO01BQ0FoQixHQUFBQSxDQUFBK0UsU0FBQUEsQ0FDQVIsTUFBQUEsQ0FBQXJELEdBQUFBLEVBQ0FxRCxNQUFBQSxDQUFBekQsS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQTRELE1BQUFBLEVBQ0FOLE1BQUFBLENBQUF6RCxLQUFBQSxDQUFBRyxJQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBNkQsR0FBQUEsRUFDQVAsTUFBQUEsQ0FBQXpELEtBQUFBLENBQUFHLElBQUFBLENBQUEsQ0FBQSxDQUFBLEVBQ0FzRCxNQUFBQSxDQUFBekQsS0FBQUEsQ0FBQUcsSUFBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxDQUNBc0QsTUFBQUEsQ0FBQTlCLEtBQUFBLEdBQUEsQ0FBQSxFQUFBLENBQ0E4QixNQUFBQSxDQUFBN0IsTUFBQUEsR0FBQSxDQUFBLEVBQ0E2QixNQUFBQSxDQUFBOUIsS0FBQUEsRUFDQThCLE1BQUFBLENBQUE3QixNQUFBQSxDQUFBQSxFQUdBNkIsTUFBQUEsQ0FBQXpELEtBQUFBLENBQUFsTixDQUFBQSxJQUFBLENBQUEsSUFDQTJRLE1BQUFBLENBQUF6RCxLQUFBQSxDQUFBbE4sQ0FBQUEsR0FBQSxDQUFBLEVBQ0EyUSxNQUFBQSxDQUFBekQsS0FBQUEsQ0FBQXpNLFNBQUFBLEdBQUFBLENBQUEsQ0FBQSxJQUNBa1EsTUFBQUEsQ0FBQXpELEtBQUFBLENBQUFsTixDQUFBQSxJQUFBMlEsTUFBQUEsQ0FBQXpELEtBQUFBLENBQUFFLE9BQUFBLEdBQUF1RCxNQUFBQSxDQUFBekQsS0FBQUEsQ0FBQUMsSUFBQUEsS0FDQXdELE1BQUFBLENBQUF6RCxLQUFBQSxDQUFBbE4sQ0FBQUEsR0FBQTJRLE1BQUFBLENBQUF6RCxLQUFBQSxDQUFBRSxPQUFBQSxHQUFBdUQsTUFBQUEsQ0FBQXpELEtBQUFBLENBQUFDLElBQUFBLEdBQUEsQ0FBQSxFQUNBd0QsTUFBQUEsQ0FBQXpELEtBQUFBLENBQUF6TSxTQUFBQSxHQUFBQSxDQUFBLENBQUEsQ0FFQTtJQUFBLENBQUEsTUFDQTJMLEdBQUFBLENBQUErRSxTQUFBQSxDQUFBUixNQUFBQSxDQUFBckQsR0FBQUEsRUFBQUEsQ0FBQXFELE1BQUFBLENBQUE5QixLQUFBQSxHQUFBLENBQUEsRUFBQSxDQUFBOEIsTUFBQUEsQ0FBQTdCLE1BQUFBLEdBQUEsQ0FBQSxFQUFBNkIsTUFBQUEsQ0FBQTlCLEtBQUFBLEVBQUE4QixNQUFBQSxDQUFBN0IsTUFBQUEsQ0FBQUE7SUFFQTFDLEdBQUFBLENBQUFnRixPQUFBQSxFQUNBO0VBQUE7RUFlQSxTQUFBZixnQkFBQUEsQ0FBQXhCLEtBQUFBLEVBQUFDLE1BQUFBLEVBQUFBO0lBQ0EsSUFFQUUsQ0FBQUE7TUFGQXFDLEtBQUFBLEdBQUEsQ0FBQSxHQUFBNUksSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUE7TUFDQThJLEtBQUFBLEdBQUEsQ0FBQSxHQUFBN0ksSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUE7TUFFQXlHLENBQUFBLEdBQUEsQ0FBQTtJQWdCQSxPQWZBb0MsS0FBQUEsSUFBQSxDQUFBLElBQ0FyQyxDQUFBQSxHQUFBdkcsSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQXdELE1BQUFBLENBQUE2QyxLQUFBQSxFQUVBSSxDQUFBQSxHQURBQSxDQUFBQSxJQUFBLENBQUEsR0FDQSxDQUFBLEdBQUFILE1BQUFBLEdBRUE5QyxNQUFBQSxDQUFBOEMsTUFBQUEsS0FHQUcsQ0FBQUEsR0FBQXhHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUF3RCxNQUFBQSxDQUFBOEMsTUFBQUEsRUFFQUUsQ0FBQUEsR0FEQXNDLEtBQUFBLElBQUEsQ0FBQSxHQUNBLENBQUEsR0FBQXpDLEtBQUFBLEdBRUE3QyxNQUFBQSxDQUFBNkMsS0FBQUEsQ0FBQUEsRUFHQSxDQUFBRyxDQUFBQSxFQUFBQyxDQUFBQSxDQUNBO0VBQUE7RUFFQSxTQUFBYyxHQUFBQSxDQUFBd0IsT0FBQUEsRUFBQUMsT0FBQUEsRUFBQUE7SUFDQSxPQUNBRCxPQUFBQSxDQUFBOUosUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQStKLE9BQUFBLENBQUEvSixRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBK0osT0FBQUEsQ0FBQTNDLEtBQUFBLElBQ0EyQyxPQUFBQSxDQUFBL0osUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQThKLE9BQUFBLENBQUE5SixRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBOEosT0FBQUEsQ0FBQTFDLEtBQUFBLElBQ0EwQyxPQUFBQSxDQUFBOUosUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQStKLE9BQUFBLENBQUEvSixRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBK0osT0FBQUEsQ0FBQTFDLE1BQUFBLElBQ0EwQyxPQUFBQSxDQUFBL0osUUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQThKLE9BQUFBLENBQUE5SixRQUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBOEosT0FBQUEsQ0FBQXpDLE1BRUE7RUFBQTtFQUVBLFNBQUFGLFNBQUFBLENBQUFBLEVBQUFBO0lBQ0EsSUFBQXRRLE1BQUFBLENBQUFtVCxJQUFBQSxDQUFBL0UsU0FBQUEsQ0FBQUEsQ0FBQW5OLE1BQUFBLEdBQUEsR0FBQSxFQUFBO01BQ0EsSUFBQTRQLEVBQUFBLEdBQUExRyxJQUFBQSxDQUFBMkcsS0FBQUEsQ0FBQSxHQUFBLEdBQUEzRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxDQUFBQTtNQUNBa0UsU0FBQUEsQ0FBQXlDLEVBQUFBLENBQUFBLEdBQUEsSUFBQWlCLFFBQUFBLENBQUFqQixFQUFBQSxDQUNBO0lBQUE7SUFDQXJJLE1BQUFBLENBQUF3SCxPQUFBQSxJQUNBekYsVUFBQUEsQ0FBQSxZQUFBO01BQ0ErRixTQUFBQSxFQUNBO0lBQUEsQ0FBQSxFQUtBOUgsTUFBQUEsQ0FBQTRILEtBQUFBLEdBQUEsR0FBQSxHQUNBLEdBQUEsR0FDQTVILE1BQUFBLENBQUE0SCxLQUFBQSxHQUFBLEdBQUEsR0FDQSxHQUFBLEdBQ0E1SCxNQUFBQSxDQUFBNEgsS0FBQUEsR0FBQSxHQUFBLEdBQ0EsR0FBQSxHQUNBNUgsTUFBQUEsQ0FBQTRILEtBQUFBLEdBQUEsR0FBQSxHQUNBLEdBQUEsR0FDQTVILE1BQUFBLENBQUE0SCxLQUFBQSxHQUFBLEdBQUEsR0FDQSxHQUFBLEdBQ0E1SCxNQUFBQSxDQUFBNEgsS0FBQUEsR0FBQSxHQUFBLEdBQ0EsR0FBQSxHQUNBNUgsTUFBQUEsQ0FBQTRILEtBQUFBLEdBQUEsR0FBQSxHQUNBLEdBQUEsR0FDQTVILE1BQUFBLENBQUE0SCxLQUFBQSxHQUFBLEdBQUEsR0FDQSxHQUFBLEdBRUEsR0FBQSxDQXBCQTtFQUFBO0VBd0JBLFNBQUFWLGNBQUFBLENBQUEwRCxNQUFBQSxFQUFBQTtJQUNBLElBQUExUixDQUFBQSxHQUFBLENBQUE7SUFDQSxHQUFBO01BQ0EsSUFBQW1QLEVBQUFBLEdBQUExRyxJQUFBQSxDQUFBMkcsS0FBQUEsQ0FBQSxHQUFBLEdBQUEzRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxDQUFBQTtNQUNBa0UsU0FBQUEsQ0FBQXlDLEVBQUFBLENBQUFBLEdBQUEsSUFBQWlCLFFBQUFBLENBQUFqQixFQUFBQSxDQUNBO0lBQUEsQ0FBQSxRQUFBblAsQ0FBQUEsRUFBQUEsSUFBQTBSLE1BQUFBO0VBQ0E7RUFFQSxTQUFBaEIsWUFBQUEsQ0FBQUEsRUFBQUE7SUFDQSxJQUFBcFMsTUFBQUEsQ0FBQW1ULElBQUFBLENBQUE5RSxRQUFBQSxDQUFBQSxDQUFBcE4sTUFBQUEsR0FBQSxDQUFBLEVBQUE7TUFDQSxJQUFBNFAsRUFBQUEsR0FBQTFHLElBQUFBLENBQUEyRyxLQUFBQSxDQUFBLEdBQUEsR0FBQTNHLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLENBQUFBO01BQ0FtRSxRQUFBQSxDQUFBd0MsRUFBQUEsQ0FBQUEsR0FBQSxJQUFBeUIsT0FBQUEsQ0FBQXpCLEVBQUFBLENBQ0E7SUFBQTtFQUNBO0VBRUEsU0FBQWEsUUFBQUEsQ0FBQUEsRUFBQUE7SUFFQSxLQUFBLElBQUFoUSxDQUFBQSxJQURBOEcsTUFBQUEsQ0FBQXdILE9BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBNUIsU0FBQUEsRUFDQUEsU0FBQUEsQ0FBQTFNLENBQUFBLENBQUFBLENBQUErTixPQUFBQSxFQUFBQTtJQUVBdEIsS0FBQUEsR0FBQSxDQUFBLENBQUEsRUFDQTNGLE1BQUFBLENBQUErRCxRQUFBQSxHQUNBL0QsTUFBQUEsQ0FBQWlFLFdBQUFBLENBQUE0RyxTQUFBQSxDQUFBakYsU0FBQUEsR0FBQTVGLE1BQUFBLENBQUE0SCxLQUFBQSxLQUNBNUgsTUFBQUEsQ0FBQWlFLFdBQUFBLENBQUE0RyxTQUFBQSxDQUFBakYsU0FBQUEsR0FBQTVGLE1BQUFBLENBQUE0SCxLQUFBQSxFQUNBNUMsT0FBQUEsQ0FBQThGLFlBQUFBLENBQUEsV0FBQSxFQUFBOUssTUFBQUEsQ0FBQWlFLFdBQUFBLENBQUFELEdBQUFBLEVBQUFoRSxNQUFBQSxDQUFBNEgsS0FBQUEsQ0FBQUEsQ0FBQUEsR0FHQTVILE1BQUFBLENBQUE2SyxTQUFBQSxHQUFBN0ssTUFBQUEsQ0FBQTRILEtBQUFBLEtBQ0E1SCxNQUFBQSxDQUFBNkssU0FBQUEsR0FBQTdLLE1BQUFBLENBQUE0SCxLQUFBQSxDQUdBO0VBQUE7RUFpQkEsU0FBQW1ELFlBQUFBLENBQUFBLEVBQUFBO0lBQ0EvTyxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBTixNQUFBQSxDQUFBcVAsVUFBQUEsQ0FBQUEsRUFDQTlGLE1BQUFBLENBQUE2QyxLQUFBQSxHQUFBcE0sTUFBQUEsQ0FBQXFQLFVBQUFBLEdBQUEsQ0FBQSxFQUNBOUYsTUFBQUEsQ0FBQThDLE1BQUFBLEdBQUFyTSxNQUFBQSxDQUFBc1AsV0FBQUEsSUFBQS9GLE1BQUFBLENBQUE2QyxLQUFBQSxJQUFBLEdBQUEsR0FBQSxFQUFBLEdBQUEsRUFBQSxDQUNBO0VBQUE7RUFwYkFULGNBQUFBLENBQUFELEdBQUFBLEdBQUEseUJBQUEsRUFFQTFMLE1BQUFBLENBQUF1UCxnQkFBQUEsQ0FDQSxTQUFBLEVBQ0EsVUFBQS9PLENBQUFBLEVBQUFBO0lBQ0E0SixHQUFBQSxDQUFBNUosQ0FBQUEsQ0FBQWdQLE9BQUFBLElBQUFoUCxDQUFBQSxDQUFBaVAsS0FBQUEsQ0FBQUEsR0FBQUEsQ0FBQSxDQUNBO0VBQUEsQ0FBQSxFQUFBLENBQ0EsQ0FBQSxDQUFBLEVBRUF6UCxNQUFBQSxDQUFBdVAsZ0JBQUFBLENBQ0EsT0FBQSxFQUNBLFVBQUEvTyxDQUFBQSxFQUFBQTtJQUNBNEosR0FBQUEsQ0FBQTVKLENBQUFBLENBQUFnUCxPQUFBQSxJQUFBaFAsQ0FBQUEsQ0FBQWlQLEtBQUFBLENBQUFBLEdBQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsRUFBQSxDQUNBLENBQUEsQ0FBQSxFQUdBcEwsTUFBQUEsQ0FBQTZLLFNBQUFBLEdBQUEsQ0FBQSxFQXVaQWxQLE1BQUFBLENBQUF1UCxnQkFBQUEsQ0FBQSxRQUFBLEVBQUFILFlBQUFBLEVBQUFBLENBQUEsQ0FBQSxDQUFBLEVBR0FBLFlBQUFBLEVBQUFBLEVBWUFNLHFCQUFBQSxDQUtBLFNBQUFDLElBQUFBLENBQUFBLEVBQUFBO0lBRUEsS0FBQSxJQUFBcFMsQ0FBQUEsSUFEQW9NLEdBQUFBLENBQUFpRyxTQUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUFyRyxNQUFBQSxDQUFBNkMsS0FBQUEsRUFBQTdDLE1BQUFBLENBQUE4QyxNQUFBQSxDQUFBQSxFQUNBckMsS0FBQUEsRUFDQUEsS0FBQUEsQ0FBQXpNLENBQUFBLENBQUFBLENBQUFtUSxRQUFBQSxJQUFBLENBQUEsR0FBQSxPQUNBMUQsS0FBQUEsQ0FBQXpNLENBQUFBLENBQUFBLEdBRUF5TSxLQUFBQSxDQUFBek0sQ0FBQUEsQ0FBQUEsQ0FBQXNQLElBQUFBLEVBQUFBO0lBR0EsS0FBQXRQLENBQUFBLElBQUEwTSxTQUFBQSxFQUNBQSxTQUFBQSxDQUFBMU0sQ0FBQUEsQ0FBQUEsQ0FBQXNQLElBQUFBLEVBQUFBO0lBRUEsS0FBQXRQLENBQUFBLElBQUEyTSxRQUFBQSxFQUNBQSxRQUFBQSxDQUFBM00sQ0FBQUEsQ0FBQUEsQ0FBQXNQLElBQUFBLEVBQUFBO0lBRUEsS0FBQXRQLENBQUFBLElBQUE0TSxVQUFBQSxFQUNBQSxVQUFBQSxDQUFBNU0sQ0FBQUEsQ0FBQUEsQ0FBQW1RLFFBQUFBLElBQUEsQ0FBQSxHQUFBLE9BQ0F2RCxVQUFBQSxDQUFBNU0sQ0FBQUEsQ0FBQUEsR0FFQTRNLFVBQUFBLENBQUE1TSxDQUFBQSxDQUFBQSxDQUFBc1AsSUFBQUEsRUFBQUE7SUFJQSxJQURBakIsWUFBQUEsRUFBQUEsRUFDQXZILE1BQUFBLENBQUF3SCxPQUFBQSxFQUNBYixTQUFBQSxDQUFBNkIsSUFBQUEsRUFBQUEsQ0FBQUEsS0FDQTtNQUNBLElBQUFnRCxRQUFBQSxHQUFBbEcsR0FBQUEsQ0FBQW1HLG9CQUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUF2RyxNQUFBQSxDQUFBNkMsS0FBQUEsRUFBQSxDQUFBLENBQUE7TUFDQXlELFFBQUFBLENBQUFFLFlBQUFBLENBQ0EsR0FBQSxFQUNBLE1BQUEsR0FDQS9KLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQStKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBaEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBK0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FoSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUErSixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEdBQ0EvSixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUErSixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQWhLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQStKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBaEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBK0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FDQSxLQUFBLEVBQ0EsTUFBQSxHQUNBL0osSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBK0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FoSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUErSixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQWhLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdB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QUEsQ0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0F0SSxPQUFBQSxFQUFBLENBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0F2RyxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBZ1AsSUFBQUEsRUFBQTtRQUNBSCxLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBdEksT0FBQUEsRUFBQSxDQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBdkcsT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQWlQLEdBQUFBLEVBQUE7UUFDQUosS0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxFQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXRJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQXZHLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFrUCxJQUFBQSxFQUFBO1FBQ0FMLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F0SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0F2RyxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBbVAsS0FBQUEsRUFBQTtRQUNBTixLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBdEksT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBdkcsT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQW9QLEtBQUFBLEVBQUE7UUFDQVAsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXRJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQXZHLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFxUCxLQUFBQSxFQUFBO1FBQ0FSLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F0SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0F2RyxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBc1AsR0FBQUEsRUFBQTtRQUNBVCxLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBdEksT0FBQUEsRUFBQSxDQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBdkcsT0FBQUEsRUFBQUEsQ0FBQTtNQUFBO0lBQUEsQ0FBQTtFQUlBLFNBQUF1UCxPQUFBQSxDQUFBQyxJQUFBQSxFQUFBQTtJQUNBclgsSUFBQUEsQ0FBQTBJLFFBQUFBLEdBQUEsQ0FBQWdCLElBQUFBLENBQUFDLEtBQUFBLENBQUFELElBQUFBLENBQUFELE1BQUFBLEVBQUFBLElBQUF3RCxNQUFBQSxDQUFBNkMsS0FBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsRUFBQXBHLElBQUFBLENBQUFDLEtBQUFBLENBQUFELElBQUFBLENBQUFELE1BQUFBLEVBQUFBLElBQUF3RCxNQUFBQSxDQUFBOEMsTUFBQUEsR0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQSxFQUNBL1AsSUFBQUEsQ0FBQTBCLFNBQUFBLEdBQUEsQ0FBQSxHQUFBZ0ksSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQSxDQUFBLEdBQUF5TSxJQUFBQSxHQUFBQyxLQUFB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QUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQUFXLFVBQUFBLENBQUEsYUFBQSxFQUFBLFVBQUErRSxNQUFBQSxFQUFBK0UsU0FBQUEsRUFBQTdFLE9BQUFBLEVBQUFBO0VBQ0EsTUFBQWlVLFNBQUFBLEdBQUEsQ0FDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUErVSxJQUFBQSxFQUFBLFNBQUE7SUFBQUMsTUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFYsSUFBQUEsRUFBQSxzQkFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxhQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLHFCQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFVBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsU0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxTQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFFBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsWUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxXQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGdCQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFNBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsV0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxPQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGVBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsWUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSx3QkFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxVQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFlBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsU0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxjQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFVBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsU0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxTQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLE9BQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsa0JBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsU0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxTQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGlDQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGtDQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFFBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsU0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxRQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGVBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsVUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxTQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFFBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsUUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSx5QkFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSx1Q0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSwwQkFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxPQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGFBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsZUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxjQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLE9BQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsVUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxPQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFVBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsWUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxNQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFlBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsU0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxrQkFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxRQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGdCQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFNBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsVUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxTQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFVBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsb0JBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsU0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxTQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFNBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsT0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxnQkFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxTQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLE9BQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsVUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxTQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLE1BQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsNkJBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsaUNBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsZUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxRQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLE9BQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsc0RBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsU0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxTQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGVBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsVUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxPQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFdBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsV0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxRQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFFBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsWUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxtQkFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxRQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLDhDQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFdBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsTUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxlQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFFBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsV0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxtQ0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxVQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFNBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsT0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxTQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFdBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsU0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxRQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGFBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsT0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxnQ0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxNQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLDJCQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFNBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsT0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxRQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFNBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsUUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxPQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLE9BQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsWUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxVQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFVBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsU0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSx1QkFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSx3Q0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxvQkFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxRQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGdCQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFlBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsa0NBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsU0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxhQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGVBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsV0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxTQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFNBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsV0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxZQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFFBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsT0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxTQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFFBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsc0JBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsWUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSw0QkFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxZQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGtCQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLDRDQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLE1BQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsU0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxVQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLE9BQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsMEJBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsWUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxZQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFlBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsT0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxXQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFVBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsUUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxRQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFVBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsWUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxTQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGVBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsT0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxnQkFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxTQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFdBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsYUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxRQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLE9BQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsT0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxNQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGFBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsTUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxRQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLE1BQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsa0JBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsa0JBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsYUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxVQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFFBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsMkJBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsVUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxhQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLHFCQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFVBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsT0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxVQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLE9BQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsU0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxTQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFFBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsb0JBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsUUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxjQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGlCQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFlBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsT0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxRQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFdBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsOENBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsVUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSx3QkFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxVQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGNBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsWUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxTQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFNBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsVUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxhQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLHVCQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGFBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsMkJBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsc0JBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsV0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSwwQkFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxNQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLDZCQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLE1BQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsVUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxZQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFNBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsYUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxjQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFNBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsT0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxRQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLHFCQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFFBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsMkJBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsOEJBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsU0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxRQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLHNDQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLDBCQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFNBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsWUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxVQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLGtDQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLG1DQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLHlCQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLHNCQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFVBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsU0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxtQkFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxPQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLE9BQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsU0FBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBL1UsSUFBQUEsRUFBQSxjQUFBO0lBQUErVSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLFFBQUE7SUFBQStVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQS9VLElBQUFBLEVBQUEsVUFBQTtJQUFBK1UsSUFBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQTtFQVdBcFUsTUFBQUEsQ0FBQXNVLFdBQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQSxJQUFBaFQsSUFBQUE7SUFDQWlULE9BQUFBLEVBQUEsSUFBQWpULElBQUFBLENBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxDQUFBLENBQUE7SUFDQWtULFFBQUFBLEVBQUEsSUFBQWxULElBQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLENBQUE7SUFDQW1ULGNBQUFBLEVBQUE7RUFBQSxDQUFBLEVBR0ExVSxNQUFBQSxDQUFBMlUsY0FBQUEs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QUFBQSxDQUFBLENBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwID0gW1xyXG4gIHtcclxuICAgIGJhc2U6IFwiQVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQxXFx1MjRCNlxcdUZGMjFcXHUwMEMwXFx1MDBDMVxcdTAwQzJcXHUxRUE2XFx1MUVBNFxcdTFFQUFcXHUxRUE4XFx1MDBDM1xcdTAxMDBcXHUwMTAyXFx1MUVCMFxcdTFFQUVcXHUxRUI0XFx1MUVCMlxcdTAyMjZcXHUwMUUwXFx1MDBDNFxcdTAxREVcXHUxRUEyXFx1MDBDNVxcdTAxRkFcXHUwMUNEXFx1MDIwMFxcdTAyMDJcXHUxRUEwXFx1MUVBQ1xcdTFFQjZcXHUxRTAwXFx1MDEwNFxcdTAyM0FcXHUyQzZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBQVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzMyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBRVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMEM2XFx1MDFGQ1xcdTAxRTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFPXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFVXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFWXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzhcXHVBNzNBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzNDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJCXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDJcXHUyNEI3XFx1RkYyMlxcdTFFMDJcXHUxRTA0XFx1MUUwNlxcdTAyNDNcXHUwMTgyXFx1MDE4MV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQ1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQzXFx1MjRCOFxcdUZGMjNcXHUwMTA2XFx1MDEwOFxcdTAxMEFcXHUwMTBDXFx1MDBDN1xcdTFFMDhcXHUwMTg3XFx1MDIzQlxcdUE3M0VdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0NFxcdTI0QjlcXHVGRjI0XFx1MUUwQVxcdTAxMEVcXHUxRTBDXFx1MUUxMFxcdTFFMTJcXHUxRTBFXFx1MDExMFxcdTAxOEJcXHUwMThBXFx1MDE4OVxcdUE3NzldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkRaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjFcXHUwMUM0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEelwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYyXFx1MDFDNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQ1XFx1MjRCQVxcdUZGMjVcXHUwMEM4XFx1MDBDOVxcdTAwQ0FcXHUxRUMwXFx1MUVCRVxcdTFFQzRcXHUxRUMyXFx1MUVCQ1xcdTAxMTJcXHUxRTE0XFx1MUUxNlxcdTAxMTRcXHUwMTE2XFx1MDBDQlxcdTFFQkFcXHUwMTFBXFx1MDIwNFxcdTAyMDZcXHUxRUI4XFx1MUVDNlxcdTAyMjhcXHUxRTFDXFx1MDExOFxcdTFFMThcXHUxRTFBXFx1MDE5MFxcdTAxOEVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0NlxcdTI0QkJcXHVGRjI2XFx1MUUxRVxcdTAxOTFcXHVBNzdCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJHXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDdcXHUyNEJDXFx1RkYyN1xcdTAxRjRcXHUwMTFDXFx1MUUyMFxcdTAxMUVcXHUwMTIwXFx1MDFFNlxcdTAxMjJcXHUwMUU0XFx1MDE5M1xcdUE3QTBcXHVBNzdEXFx1QTc3RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ4XFx1MjRCRFxcdUZGMjhcXHUwMTI0XFx1MUUyMlxcdTFFMjZcXHUwMjFFXFx1MUUyNFxcdTFFMjhcXHUxRTJBXFx1MDEyNlxcdTJDNjdcXHUyQzc1XFx1QTc4RF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDQ5XFx1MjRCRVxcdUZGMjlcXHUwMENDXFx1MDBDRFxcdTAwQ0VcXHUwMTI4XFx1MDEyQVxcdTAxMkNcXHUwMTMwXFx1MDBDRlxcdTFFMkVcXHUxRUM4XFx1MDFDRlxcdTAyMDhcXHUwMjBBXFx1MUVDQVxcdTAxMkVcXHUxRTJDXFx1MDE5N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRBXFx1MjRCRlxcdUZGMkFcXHUwMTM0XFx1MDI0OF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiS1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRCXFx1MjRDMFxcdUZGMkJcXHUxRTMwXFx1MDFFOFxcdTFFMzJcXHUwMTM2XFx1MUUzNFxcdTAxOThcXHUyQzY5XFx1QTc0MFxcdUE3NDJcXHVBNzQ0XFx1QTdBMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTFwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDRDXFx1MjRDMVxcdUZGMkNcXHUwMTNGXFx1MDEzOVxcdTAxM0RcXHUxRTM2XFx1MUUzOFxcdTAxM0JcXHUxRTNDXFx1MUUzQVxcdTAxNDFcXHUwMjNEXFx1MkM2MlxcdTJDNjBcXHVBNzQ4XFx1QTc0NlxcdUE3ODBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxKXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk1cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0RFxcdTI0QzJcXHVGRjJEXFx1MUUzRVxcdTFFNDBcXHUxRTQyXFx1MkM2RVxcdTAxOUNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0RVxcdTI0QzNcXHVGRjJFXFx1MDFGOFxcdTAxNDNcXHUwMEQxXFx1MUU0NFxcdTAxNDdcXHUxRTQ2XFx1MDE0NVxcdTFFNEFcXHUxRTQ4XFx1MDIyMFxcdTAxOURcXHVBNzkwXFx1QTdBNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTkpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTmpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDRGXFx1MjRDNFxcdUZGMkZcXHUwMEQyXFx1MDBEM1xcdTAwRDRcXHUxRUQyXFx1MUVEMFxcdTFFRDZcXHUxRUQ0XFx1MDBENVxcdTFFNENcXHUwMjJDXFx1MUU0RVxcdTAxNENcXHUxRTUwXFx1MUU1MlxcdTAxNEVcXHUwMjJFXFx1MDIzMFxcdTAwRDZcXHUwMjJBXFx1MUVDRVxcdTAxNTBcXHUwMUQxXFx1MDIwQ1xcdTAyMEVcXHUwMUEwXFx1MUVEQ1xcdTFFREFcXHUxRUUwXFx1MUVERVxcdTFFRTJcXHUxRUNDXFx1MUVEOFxcdTAxRUFcXHUwMUVDXFx1MDBEOFxcdTAxRkVcXHUwMTg2XFx1MDE5RlxcdUE3NEFcXHVBNzRDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPSVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUEyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPT1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzRFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPVVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMjIyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJQXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTBcXHUyNEM1XFx1RkYzMFxcdTFFNTRcXHUxRTU2XFx1MDFBNFxcdTJDNjNcXHVBNzUwXFx1QTc1MlxcdUE3NTRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1MVxcdTI0QzZcXHVGRjMxXFx1QTc1NlxcdUE3NThcXHUwMjRBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJSXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTJcXHUyNEM3XFx1RkYzMlxcdTAxNTRcXHUxRTU4XFx1MDE1OFxcdTAyMTBcXHUwMjEyXFx1MUU1QVxcdTFFNUNcXHUwMTU2XFx1MUU1RVxcdTAyNENcXHUyQzY0XFx1QTc1QVxcdUE3QTZcXHVBNzgyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJTXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTNcXHUyNEM4XFx1RkYzM1xcdTFFOUVcXHUwMTVBXFx1MUU2NFxcdTAxNUNcXHUxRTYwXFx1MDE2MFxcdTFFNjZcXHUxRTYyXFx1MUU2OFxcdTAyMThcXHUwMTVFXFx1MkM3RVxcdUE3QThcXHVBNzg0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJUXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTRcXHUyNEM5XFx1RkYzNFxcdTFFNkFcXHUwMTY0XFx1MUU2Q1xcdTAyMUFcXHUwMTYyXFx1MUU3MFxcdTFFNkVcXHUwMTY2XFx1MDFBQ1xcdTAxQUVcXHUwMjNFXFx1QTc4Nl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVFpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTcyOF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDU1XFx1MjRDQVxcdUZGMzVcXHUwMEQ5XFx1MDBEQVxcdTAwREJcXHUwMTY4XFx1MUU3OFxcdTAxNkFcXHUxRTdBXFx1MDE2Q1xcdTAwRENcXHUwMURCXFx1MDFEN1xcdTAxRDVcXHUwMUQ5XFx1MUVFNlxcdTAxNkVcXHUwMTcwXFx1MDFEM1xcdTAyMTRcXHUwMjE2XFx1MDFBRlxcdTFFRUFcXHUxRUU4XFx1MUVFRVxcdTFFRUNcXHUxRUYwXFx1MUVFNFxcdTFFNzJcXHUwMTcyXFx1MUU3NlxcdTFFNzRcXHUwMjQ0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJWXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTZcXHUyNENCXFx1RkYzNlxcdTFFN0NcXHUxRTdFXFx1MDFCMlxcdUE3NUVcXHUwMjQ1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJWWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzYwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJXXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTdcXHUyNENDXFx1RkYzN1xcdTFFODBcXHUxRTgyXFx1MDE3NFxcdTFFODZcXHUxRTg0XFx1MUU4OFxcdTJDNzJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1OFxcdTI0Q0RcXHVGRjM4XFx1MUU4QVxcdTFFOENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIllcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1OVxcdTI0Q0VcXHVGRjM5XFx1MUVGMlxcdTAwRERcXHUwMTc2XFx1MUVGOFxcdTAyMzJcXHUxRThFXFx1MDE3OFxcdTFFRjZcXHUxRUY0XFx1MDFCM1xcdTAyNEVcXHUxRUZFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNUFcXHUyNENGXFx1RkYzQVxcdTAxNzlcXHUxRTkwXFx1MDE3QlxcdTAxN0RcXHUxRTkyXFx1MUU5NFxcdTAxQjVcXHUwMjI0XFx1MkM3RlxcdTJDNkJcXHVBNzYyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjFcXHUyNEQwXFx1RkY0MVxcdTFFOUFcXHUwMEUwXFx1MDBFMVxcdTAwRTJcXHUxRUE3XFx1MUVBNVxcdTFFQUJcXHUxRUE5XFx1MDBFM1xcdTAxMDFcXHUwMTAzXFx1MUVCMVxcdTFFQUZcXHUxRUI1XFx1MUVCM1xcdTAyMjdcXHUwMUUxXFx1MDBFNFxcdTAxREZcXHUxRUEzXFx1MDBFNVxcdTAxRkJcXHUwMUNFXFx1MDIwMVxcdTAyMDNcXHUxRUExXFx1MUVBRFxcdTFFQjdcXHUxRTAxXFx1MDEwNVxcdTJDNjVcXHUwMjUwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhYVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzMzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhZVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMEU2XFx1MDFGRFxcdTAxRTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFvXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF1XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzlcXHVBNzNCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJheVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzNEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJiXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjJcXHUyNEQxXFx1RkY0MlxcdTFFMDNcXHUxRTA1XFx1MUUwN1xcdTAxODBcXHUwMTgzXFx1MDI1M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiY1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDYzXFx1MjREMlxcdUZGNDNcXHUwMTA3XFx1MDEwOVxcdTAxMEJcXHUwMTBEXFx1MDBFN1xcdTFFMDlcXHUwMTg4XFx1MDIzQ1xcdUE3M0ZcXHUyMTg0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJkXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjRcXHUyNEQzXFx1RkY0NFxcdTFFMEJcXHUwMTBGXFx1MUUwRFxcdTFFMTFcXHUxRTEzXFx1MUUwRlxcdTAxMTFcXHUwMThDXFx1MDI1NlxcdTAyNTdcXHVBNzdBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJkelwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYzXFx1MDFDNl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDY1XFx1MjRENFxcdUZGNDVcXHUwMEU4XFx1MDBFOVxcdTAwRUFcXHUxRUMxXFx1MUVCRlxcdTFFQzVcXHUxRUMzXFx1MUVCRFxcdTAxMTNcXHUxRTE1XFx1MUUxN1xcdTAxMTVcXHUwMTE3XFx1MDBFQlxcdTFFQkJcXHUwMTFCXFx1MDIwNVxcdTAyMDdcXHUxRUI5XFx1MUVDN1xcdTAyMjlcXHUxRTFEXFx1MDExOVxcdTFFMTlcXHUxRTFCXFx1MDI0N1xcdTAyNUJcXHUwMUREXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJmXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjZcXHUyNEQ1XFx1RkY0NlxcdTFFMUZcXHUwMTkyXFx1QTc3Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZ1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY3XFx1MjRENlxcdUZGNDdcXHUwMUY1XFx1MDExRFxcdTFFMjFcXHUwMTFGXFx1MDEyMVxcdTAxRTdcXHUwMTIzXFx1MDFFNVxcdTAyNjBcXHVBN0ExXFx1MUQ3OVxcdUE3N0ZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2OFxcdTI0RDdcXHVGRjQ4XFx1MDEyNVxcdTFFMjNcXHUxRTI3XFx1MDIxRlxcdTFFMjVcXHUxRTI5XFx1MUUyQlxcdTFFOTZcXHUwMTI3XFx1MkM2OFxcdTJDNzZcXHUwMjY1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJodlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMTk1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJpXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjlcXHUyNEQ4XFx1RkY0OVxcdTAwRUNcXHUwMEVEXFx1MDBFRVxcdTAxMjlcXHUwMTJCXFx1MDEyRFxcdTAwRUZcXHUxRTJGXFx1MUVDOVxcdTAxRDBcXHUwMjA5XFx1MDIwQlxcdTFFQ0JcXHUwMTJGXFx1MUUyRFxcdTAyNjhcXHUwMTMxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkFcXHUyNEQ5XFx1RkY0QVxcdTAxMzVcXHUwMUYwXFx1MDI0OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwia1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZCXFx1MjREQVxcdUZGNEJcXHUxRTMxXFx1MDFFOVxcdTFFMzNcXHUwMTM3XFx1MUUzNVxcdTAxOTlcXHUyQzZBXFx1QTc0MVxcdUE3NDNcXHVBNzQ1XFx1QTdBM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibFwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZDXFx1MjREQlxcdUZGNENcXHUwMTQwXFx1MDEzQVxcdTAxM0VcXHUxRTM3XFx1MUUzOVxcdTAxM0NcXHUxRTNEXFx1MUUzQlxcdTAxN0ZcXHUwMTQyXFx1MDE5QVxcdTAyNkJcXHUyQzYxXFx1QTc0OVxcdUE3ODFcXHVBNzQ3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJsalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJtXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkRcXHUyNERDXFx1RkY0RFxcdTFFM0ZcXHUxRTQxXFx1MUU0M1xcdTAyNzFcXHUwMjZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJuXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkVcXHUyNEREXFx1RkY0RVxcdTAxRjlcXHUwMTQ0XFx1MDBGMVxcdTFFNDVcXHUwMTQ4XFx1MUU0N1xcdTAxNDZcXHUxRTRCXFx1MUU0OVxcdTAxOUVcXHUwMjcyXFx1MDE0OVxcdUE3OTFcXHVBN0E1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJualwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkZcXHUyNERFXFx1RkY0RlxcdTAwRjJcXHUwMEYzXFx1MDBGNFxcdTFFRDNcXHUxRUQxXFx1MUVEN1xcdTFFRDVcXHUwMEY1XFx1MUU0RFxcdTAyMkRcXHUxRTRGXFx1MDE0RFxcdTFFNTFcXHUxRTUzXFx1MDE0RlxcdTAyMkZcXHUwMjMxXFx1MDBGNlxcdTAyMkJcXHUxRUNGXFx1MDE1MVxcdTAxRDJcXHUwMjBEXFx1MDIwRlxcdTAxQTFcXHUxRUREXFx1MUVEQlxcdTFFRTFcXHUxRURGXFx1MUVFM1xcdTFFQ0RcXHUxRUQ5XFx1MDFFQlxcdTAxRURcXHUwMEY4XFx1MDFGRlxcdTAyNTRcXHVBNzRCXFx1QTc0RFxcdTAyNzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9pXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm91XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAyMjNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9vXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NEZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInBcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3MFxcdTI0REZcXHVGRjUwXFx1MUU1NVxcdTFFNTdcXHUwMUE1XFx1MUQ3RFxcdUE3NTFcXHVBNzUzXFx1QTc1NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwicVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDcxXFx1MjRFMFxcdUZGNTFcXHUwMjRCXFx1QTc1N1xcdUE3NTldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInJcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3MlxcdTI0RTFcXHVGRjUyXFx1MDE1NVxcdTFFNTlcXHUwMTU5XFx1MDIxMVxcdTAyMTNcXHUxRTVCXFx1MUU1RFxcdTAxNTdcXHUxRTVGXFx1MDI0RFxcdTAyN0RcXHVBNzVCXFx1QTdBN1xcdUE3ODNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInNcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3M1xcdTI0RTJcXHVGRjUzXFx1MDBERlxcdTAxNUJcXHUxRTY1XFx1MDE1RFxcdTFFNjFcXHUwMTYxXFx1MUU2N1xcdTFFNjNcXHUxRTY5XFx1MDIxOVxcdTAxNUZcXHUwMjNGXFx1QTdBOVxcdUE3ODVcXHUxRTlCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ0XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzRcXHUyNEUzXFx1RkY1NFxcdTFFNkJcXHUxRTk3XFx1MDE2NVxcdTFFNkRcXHUwMjFCXFx1MDE2M1xcdTFFNzFcXHUxRTZGXFx1MDE2N1xcdTAxQURcXHUwMjg4XFx1MkM2NlxcdUE3ODddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MjldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA3NVxcdTI0RTRcXHVGRjU1XFx1MDBGOVxcdTAwRkFcXHUwMEZCXFx1MDE2OVxcdTFFNzlcXHUwMTZCXFx1MUU3QlxcdTAxNkRcXHUwMEZDXFx1MDFEQ1xcdTAxRDhcXHUwMUQ2XFx1MDFEQVxcdTFFRTdcXHUwMTZGXFx1MDE3MVxcdTAxRDRcXHUwMjE1XFx1MDIxN1xcdTAxQjBcXHUxRUVCXFx1MUVFOVxcdTFFRUZcXHUxRUVEXFx1MUVGMVxcdTFFRTVcXHUxRTczXFx1MDE3M1xcdTFFNzdcXHUxRTc1XFx1MDI4OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc2XFx1MjRFNVxcdUZGNTZcXHUxRTdEXFx1MUU3RlxcdTAyOEJcXHVBNzVGXFx1MDI4Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidnlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc2MV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwid1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc3XFx1MjRFNlxcdUZGNTdcXHUxRTgxXFx1MUU4M1xcdTAxNzVcXHUxRTg3XFx1MUU4NVxcdTFFOThcXHUxRTg5XFx1MkM3M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwieFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc4XFx1MjRFN1xcdUZGNThcXHUxRThCXFx1MUU4RF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwieVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc5XFx1MjRFOFxcdUZGNTlcXHUxRUYzXFx1MDBGRFxcdTAxNzdcXHUxRUY5XFx1MDIzM1xcdTFFOEZcXHUwMEZGXFx1MUVGN1xcdTFFOTlcXHUxRUY1XFx1MDFCNFxcdTAyNEZcXHUxRUZGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwN0FcXHUyNEU5XFx1RkY1QVxcdTAxN0FcXHUxRTkxXFx1MDE3Q1xcdTAxN0VcXHUxRTkzXFx1MUU5NVxcdTAxQjZcXHUwMjI1XFx1MDI0MFxcdTJDNkNcXHVBNzYzXS9nLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IGRvbWFpbnMgPSBbXHJcbiAgXCIuY29tXCIsXHJcbiAgXCIub3JnXCIsXHJcbiAgXCIubmV0XCIsXHJcbiAgXCIuYWNcIixcclxuICBcIi5hZFwiLFxyXG4gIFwiLmFlXCIsXHJcbiAgXCIuYWZcIixcclxuICBcIi5hZ1wiLFxyXG4gIFwiLmFpXCIsXHJcbiAgXCIuYWxcIixcclxuICBcIi5hbVwiLFxyXG4gIFwiLmFvXCIsXHJcbiAgXCIuYXFcIixcclxuICBcIi5hclwiLFxyXG4gIFwiLmFzXCIsXHJcbiAgXCIuYXRcIixcclxuICBcIi5hdVwiLFxyXG4gIFwiLmF3XCIsXHJcbiAgXCIuYXhcIixcclxuICBcIi5helwiLFxyXG4gIFwiLmJhXCIsXHJcbiAgXCIuYmJcIixcclxuICBcIi5iZFwiLFxyXG4gIFwiLmJlXCIsXHJcbiAgXCIuYmZcIixcclxuICBcIi5iZ1wiLFxyXG4gIFwiLmJoXCIsXHJcbiAgXCIuYmlcIixcclxuICBcIi5ialwiLFxyXG4gIFwiLmJtXCIsXHJcbiAgXCIuYm5cIixcclxuICBcIi5ib1wiLFxyXG4gIFwiLmJxXCIsXHJcbiAgXCIuYnJcIixcclxuICBcIi5ic1wiLFxyXG4gIFwiLmJ0XCIsXHJcbiAgXCIuYndcIixcclxuICBcIi5ieVwiLFxyXG4gIFwiLmJ6XCIsXHJcbiAgXCIuY2FcIixcclxuICBcIi5jY1wiLFxyXG4gIFwiLmNkXCIsXHJcbiAgXCIuY2ZcIixcclxuICBcIi5jZ1wiLFxyXG4gIFwiLmNoXCIsXHJcbiAgXCIuY2lcIixcclxuICBcIi5ja1wiLFxyXG4gIFwiLmNsXCIsXHJcbiAgXCIuY21cIixcclxuICBcIi5jblwiLFxyXG4gIFwiLmNvXCIsXHJcbiAgXCIuY3JcIixcclxuICBcIi5jdVwiLFxyXG4gIFwiLmN2XCIsXHJcbiAgXCIuY3dcIixcclxuICBcIi5jeFwiLFxyXG4gIFwiLmN5XCIsXHJcbiAgXCIuY3pcIixcclxuICBcIi5kZVwiLFxyXG4gIFwiLmRqXCIsXHJcbiAgXCIuZGtcIixcclxuICBcIi5kbVwiLFxyXG4gIFwiLmRvXCIsXHJcbiAgXCIuZHpcIixcclxuICBcIi5lY1wiLFxyXG4gIFwiLmVlXCIsXHJcbiAgXCIuZWdcIixcclxuICBcIi5laFwiLFxyXG4gIFwiLmVyXCIsXHJcbiAgXCIuZXNcIixcclxuICBcIi5ldFwiLFxyXG4gIFwiLmV1XCIsXHJcbiAgXCIuZmlcIixcclxuICBcIi5malwiLFxyXG4gIFwiLmZrXCIsXHJcbiAgXCIuZm1cIixcclxuICBcIi5mb1wiLFxyXG4gIFwiLmZyXCIsXHJcbiAgXCIuZ2FcIixcclxuICBcIi5nZFwiLFxyXG4gIFwiLmdlXCIsXHJcbiAgXCIuZ2ZcIixcclxuICBcIi5nZ1wiLFxyXG4gIFwiLmdoXCIsXHJcbiAgXCIuZ2lcIixcclxuICBcIi5nbFwiLFxyXG4gIFwiLmdtXCIsXHJcbiAgXCIuZ25cIixcclxuICBcIi5ncFwiLFxyXG4gIFwiLmdxXCIsXHJcbiAgXCIuZ3JcIixcclxuICBcIi5nc1wiLFxyXG4gIFwiLmd0XCIsXHJcbiAgXCIuZ3VcIixcclxuICBcIi5nd1wiLFxyXG4gIFwiLmd5XCIsXHJcbiAgXCIuaGtcIixcclxuICBcIi5obVwiLFxyXG4gIFwiLmhuXCIsXHJcbiAgXCIuaHJcIixcclxuICBcIi5odFwiLFxyXG4gIFwiLmh1XCIsXHJcbiAgXCIuaWRcIixcclxuICBcIi5pZVwiLFxyXG4gIFwiLmlsXCIsXHJcbiAgXCIuaW1cIixcclxuICBcIi5pblwiLFxyXG4gIFwiLmlvXCIsXHJcbiAgXCIuaXFcIixcclxuICBcIi5pclwiLFxyXG4gIFwiLmlzXCIsXHJcbiAgXCIuaXRcIixcclxuICBcIi5qZVwiLFxyXG4gIFwiLmptXCIsXHJcbiAgXCIuam9cIixcclxuICBcIi5qcFwiLFxyXG4gIFwiLmtlXCIsXHJcbiAgXCIua2dcIixcclxuICBcIi5raFwiLFxyXG4gIFwiLmtpXCIsXHJcbiAgXCIua21cIixcclxuICBcIi5rblwiLFxyXG4gIFwiLmtwXCIsXHJcbiAgXCIua3JcIixcclxuICBcIi5rd1wiLFxyXG4gIFwiLmt5XCIsXHJcbiAgXCIua3pcIixcclxuICBcIi5sYVwiLFxyXG4gIFwiLmxiXCIsXHJcbiAgXCIubGNcIixcclxuICBcIi5saVwiLFxyXG4gIFwiLmxrXCIsXHJcbiAgXCIubHJcIixcclxuICBcIi5sc1wiLFxyXG4gIFwiLmx0XCIsXHJcbiAgXCIubHVcIixcclxuICBcIi5sdlwiLFxyXG4gIFwiLmx5XCIsXHJcbiAgXCIubWFcIixcclxuICBcIi5tY1wiLFxyXG4gIFwiLm1kXCIsXHJcbiAgXCIubWVcIixcclxuICBcIi5tZ1wiLFxyXG4gIFwiLm1oXCIsXHJcbiAgXCIubWtcIixcclxuICBcIi5tbFwiLFxyXG4gIFwiLm1tXCIsXHJcbiAgXCIubW5cIixcclxuICBcIi5tb1wiLFxyXG4gIFwiLm1wXCIsXHJcbiAgXCIubXFcIixcclxuICBcIi5tclwiLFxyXG4gIFwiLm1zXCIsXHJcbiAgXCIubXRcIixcclxuICBcIi5tdVwiLFxyXG4gIFwiLm12XCIsXHJcbiAgXCIubXdcIixcclxuICBcIi5teFwiLFxyXG4gIFwiLm15XCIsXHJcbiAgXCIubXpcIixcclxuICBcIi5uYVwiLFxyXG4gIFwiLm5jXCIsXHJcbiAgXCIubmVcIixcclxuICBcIi5uZlwiLFxyXG4gIFwiLm5nXCIsXHJcbiAgXCIubmlcIixcclxuICBcIi5ubFwiLFxyXG4gIFwiLm5vXCIsXHJcbiAgXCIubnBcIixcclxuICBcIi5uclwiLFxyXG4gIFwiLm51XCIsXHJcbiAgXCIubnpcIixcclxuICBcIi5vbVwiLFxyXG4gIFwiLnBhXCIsXHJcbiAgXCIucGVcIixcclxuICBcIi5wZlwiLFxyXG4gIFwiLnBnXCIsXHJcbiAgXCIucGhcIixcclxuICBcIi5wa1wiLFxyXG4gIFwiLnBsXCIsXHJcbiAgXCIucG1cIixcclxuICBcIi5wblwiLFxyXG4gIFwiLnByXCIsXHJcbiAgXCIucHNcIixcclxuICBcIi5wdFwiLFxyXG4gIFwiLnB3XCIsXHJcbiAgXCIucHlcIixcclxuICBcIi5xYVwiLFxyXG4gIFwiLnJlXCIsXHJcbiAgXCIucm9cIixcclxuICBcIi5yc1wiLFxyXG4gIFwiLnJ1XCIsXHJcbiAgXCIucndcIixcclxuICBcIi5zYVwiLFxyXG4gIFwiLnNiXCIsXHJcbiAgXCIuc2NcIixcclxuICBcIi5zZFwiLFxyXG4gIFwiLnNlXCIsXHJcbiAgXCIuc2dcIixcclxuICBcIi5zaFwiLFxyXG4gIFwiLnNpXCIsXHJcbiAgXCIuc2tcIixcclxuICBcIi5zbFwiLFxyXG4gIFwiLnNtXCIsXHJcbiAgXCIuc25cIixcclxuICBcIi5zb1wiLFxyXG4gIFwiLnNyXCIsXHJcbiAgXCIuc3NcIixcclxuICBcIi5zdFwiLFxyXG4gIFwiLnN1XCIsXHJcbiAgXCIuc3ZcIixcclxuICBcIi5zeFwiLFxyXG4gIFwiLnN5XCIsXHJcbiAgXCIuc3pcIixcclxuICBcIi50Y1wiLFxyXG4gIFwiLnRkXCIsXHJcbiAgXCIudGZcIixcclxuICBcIi50Z1wiLFxyXG4gIFwiLnRoXCIsXHJcbiAgXCIudGpcIixcclxuICBcIi50a1wiLFxyXG4gIFwiLnRsXCIsXHJcbiAgXCIudG1cIixcclxuICBcIi50blwiLFxyXG4gIFwiLnRvXCIsXHJcbiAgXCIudHJcIixcclxuICBcIi50dFwiLFxyXG4gIFwiLnR2XCIsXHJcbiAgXCIudHdcIixcclxuICBcIi50elwiLFxyXG4gIFwiLnVhXCIsXHJcbiAgXCIudWdcIixcclxuICBcIi51a1wiLFxyXG4gIFwiLnVzXCIsXHJcbiAgXCIudXlcIixcclxuICBcIi51elwiLFxyXG4gIFwiLnZhXCIsXHJcbiAgXCIudmNcIixcclxuICBcIi52ZVwiLFxyXG4gIFwiLnZnXCIsXHJcbiAgXCIudmlcIixcclxuICBcIi52blwiLFxyXG4gIFwiLnZ1XCIsXHJcbiAgXCIud2ZcIixcclxuICBcIi53c1wiLFxyXG4gIFwiLnllXCIsXHJcbiAgXCIueXRcIixcclxuICBcIi56YVwiLFxyXG4gIFwiLnptXCIsXHJcbiAgXCIuendcIixcclxuXTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZURpYWNyaXRpY3NcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdERpYWNyaXRpY3NSZW1vdmFsTWFwLnJlZHVjZSgocmVzdWx0LCBsZXR0ZXIpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKGxldHRlci5sZXR0ZXJzLCBsZXR0ZXIuYmFzZSk7XHJcbiAgICB9LCB0aGlzKTtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IFNQRUNJQUxfQ0hBUkFDVEVSUyA9IFwiXFxcXFxcXFwvICE/QCMkJV4mKigpXys6Lnt9LDtcXFxcLSdgYOKAmeKAmFxcXCJcIjtcclxuY29uc3QgVk9XRUxTID0gXCJhZWlvdUFFSU9Vw6DDqMOsw7LDucOAw4jDjMOSw5nDocOpw63Ds8O6w73DgcOJw43Dk8Oaw53DosOqw67DtMO7w4LDisOOw5TDm8Ojw7HDtcODw5HDlcOkw6vDr8O2w7zDv8OEw4vDj8OWw5zFuMOnw4fDn8OYw7jDhcOlw4bDpsWTXCI7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVyc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChgWyR7U1BFQ0lBTF9DSEFSQUNURVJTfV1gLCBcImdpXCIpLCBcIlwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZUFsbEJ1dExldHRlcnNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b0xvd2VyQ2FzZSgpLnJlbW92ZURpYWNyaXRpY3MoKS5yZW1vdmVTcGVjaWFsQ2hhcmFjdGVycygpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiY29uY2VhbFwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChleHRyYSkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbXiR7U1BFQ0lBTF9DSEFSQUNURVJTfSR7ZXh0cmF9XWAsIFwiZ2lcIiksIFwi4oGOXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiY29uY2VhbE1pZGRsZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChleHRyYSkge1xyXG4gICAgcmV0dXJuIHRoaXMubGVuZ3RoIDwgMyA/IHRoaXMgOiB0aGlzWzBdICsgdGhpcy5zdWJzdHJpbmcoMSwgdGhpcy5sZW5ndGggLSAxKS5jb25jZWFsKGV4dHJhKSArIHRoaXNbdGhpcy5sZW5ndGggLSAxXTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNhcGl0YWxpemVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRoaXMuc2xpY2UoMSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVIVE1MXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShcIj5cIiwgXCJcXHUyMjdCXCIpLnJlcGxhY2UoXCI8XCIsIFwiXFx1MjI3QVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInBhcnNlU3ltYm9sc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2VBbGwoXCImXCIsIFwiJmFtcDtcIikucmVwbGFjZShcIjxcIiwgXCImbHQ7XCIpLnJlcGxhY2UoXCI+XCIsIFwiJmd0O1wiKS5yZXBsYWNlQWxsKFwiI1wiLCBcIiZudW07XCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVwbGFjZUFycmF5XCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGZpbmQsIHJlcGxhY2UpIHtcclxuICAgIHZhciByZXBsYWNlU3RyaW5nID0gdGhpcztcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmluZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICByZXBsYWNlU3RyaW5nID0gcmVwbGFjZVN0cmluZy5yZXBsYWNlKGZpbmRbaV0sIHJlcGxhY2VbaV0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlcGxhY2VTdHJpbmc7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJtYXNrVVJMc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2VBcnJheShbXCJodHRwczovL1wiLCBcImh0dHA6Ly9cIl0sIFwibm9wZTovL1wiKS5yZXBsYWNlQXJyYXkoZG9tYWlucywgXCIubm9wZVwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VSZWFkYWJsZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwibWFrZVBlcmNlbnRhZ2VcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZGVjaW1hbHMpIHtcclxuICAgIGlmIChkZWNpbWFscyA9PT0gdW5kZWZpbmVkKSBkZWNpbWFscyA9IDI7XHJcbiAgICByZXR1cm4gYCR7KHRoaXMgKiAxMDApLnRvRml4ZWQoZGVjaW1hbHMpfSVgO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qgc29ydE9iamVjdCA9IChvYmosIGRpcmVjdGlvbikgPT4ge1xyXG4gIGxldCBhcnIgPSBbXTtcclxuICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgIGFyci5wdXNoKFtrZXksIG9ialtrZXldXSk7XHJcbiAgfVxyXG4gIGFyci5zb3J0KChhLCBiKSA9PiAoZGlyZWN0aW9uID8gYVsxXSAtIGJbMV0gOiBiWzFdIC0gYVsxXSkpO1xyXG4gIGxldCBvYmpTb3J0ZWQgPSB7fTtcclxuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4gKG9ialNvcnRlZFtpdGVtWzBdXSA9IGl0ZW1bMV0pKTtcclxuICAvL2Fyci5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgYS52YWx1ZS50b0xvd2VyQ2FzZSgpLmxvY2FsZUNvbXBhcmUoYi52YWx1ZS50b0xvd2VyQ2FzZSgpKTsgfSk7IC8vdXNlIHRoaXMgdG8gc29ydCBhcyBzdHJpbmdzXHJcbiAgcmV0dXJuIG9ialNvcnRlZDsgLy8gcmV0dXJucyBhcnJheVxyXG59O1xyXG4iLCIvKlxyXG4kID0galF1ZXJ5ID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbnZhciBib290c3RyYXAgPSByZXF1aXJlKCdib290c3RyYXAnKTtcclxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XHJcbnZhciBhbmd1bGFyU2FuaXRpemUgPSByZXF1aXJlKCdhbmd1bGFyLXNhbml0aXplJyk7XHJcbnZhciBhbmd1bGFyQW5pbWF0ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItYW5pbWF0ZScpO1xyXG4qL1xyXG5hbmd1bGFyLm1vZHVsZShcImFwcFwiLCBbXHJcbiAgXCJ1aS5yb3V0ZXJcIixcclxuICBcInVpLmJvb3RzdHJhcFwiLFxyXG4gIFwibmdBbmltYXRlXCIsXHJcbiAgXCJuZ1Nhbml0aXplXCIsXHJcbiAgXCJuZ01hdGVyaWFsXCIsXHJcbiAgXCJuZ01lc3NhZ2VzXCIsXHJcbiAgXCJuZ0RyYWdEcm9wXCIsXHJcbiAgXCJuZ1RhZ3NJbnB1dFwiLFxyXG4gIFwidmNSZWNhcHRjaGFcIixcclxuICBcImNoYXJ0LmpzXCIsXHJcbiAgXCJ0Yy5jaGFydGpzXCIsXHJcbiAgXCJpbmZpbml0ZS1zY3JvbGxcIixcclxuXSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJHVybFNlcnZpY2VQcm92aWRlciwgJGxvY2F0aW9uUHJvdmlkZXIpIHtcclxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwiL2hvbWVcIik7XHJcbiAgJHVybFNlcnZpY2VQcm92aWRlci5jb25maWcuc3RyaWN0TW9kZShmYWxzZSk7XHJcblxyXG4gICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAuc3RhdGUoXCJob21lXCIsIHtcclxuICAgICAgdXJsOiBcIi9ob21lXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9ob21lLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwb2xpY3lcIiwge1xyXG4gICAgICB1cmw6IFwiL3BvbGljeVwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcG9saWN5Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwcmludFwiLCB7XHJcbiAgICAgIHVybDogXCIvcHJpbnRcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3ByaW50Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJleHBlcmllbmNlXCIsIHtcclxuICAgICAgdXJsOiBcIi9leHBlcmllbmNlXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiRXhwZXJpZW5jZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2V4cGVyaWVuY2UuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInNraWxsc1wiLCB7XHJcbiAgICAgIHVybDogXCIvc2tpbGxzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiU2tpbGxzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvc2tpbGxzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJob2JiaWVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9ob2JiaWVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiSG9iYmllc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2hvYmJpZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImNvbnRhY3RcIiwge1xyXG4gICAgICB1cmw6IFwiL2NvbnRhY3RcIixcclxuICAgICAgY29udHJvbGxlcjogXCJDb250YWN0Q3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvY29udGFjdC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwid29ya291dFwiLCB7XHJcbiAgICAgIHVybDogXCIvd29ya291dFwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIldvcmtvdXRDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi93b3Jrb3V0Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwb3N0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvcG9zdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJQb3N0c0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3Bvc3RzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJwcm9maWxlXCIsIHtcclxuICAgICAgdXJsOiBcIi9wcm9maWxlXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUHJvZmlsZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3Byb2ZpbGUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImxpc3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9saXN0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkxpc3RzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJsaXN0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYnViYmxlc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYnViYmxlc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkJ1YmJsZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImJ1YmJsZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImFzdGVyb2lkc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYXN0ZXJvaWRzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQXN0ZXJvaWRzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJhc3Rlcm9pZHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImxlbW1pbmdzXCIsIHtcclxuICAgICAgdXJsOiBcIi9sZW1taW5nc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkxlbW1pbmdzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJsZW1taW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYm90c1wiLCB7XHJcbiAgICAgIHVybDogXCIvYm90c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3NcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5nc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3MtYWRtaW5cIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy1hZG1pblwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0FkbWluQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MtYWRtaW4uaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1nYW1lXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3MvOmdhbWVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NHYW1lQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MtZ2FtZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLXN0YXRzXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3Mtc3RhdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NTdGF0c0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLXN0YXRzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3MtcGxheVwiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzL3BsYXlcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NQbGF5Q3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MtcGxheS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1nb29nbGVcIiwge1xyXG4gICAgICB1cmw6IFwiL2dvb2dsZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpHb29nbGVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvZ29vZ2xlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWxvZ29zXCIsIHtcclxuICAgICAgdXJsOiBcIi9sb2dvc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpMb2dvc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9sb2dvcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1hbmltYWxzXCIsIHtcclxuICAgICAgdXJsOiBcIi9hbmltYWxzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekFuaW1hbHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvYW5pbWFscy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1za2VsZXRvbnNcIiwge1xyXG4gICAgICB1cmw6IFwiL3NrZWxldG9uc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpTa2VsZXRvbnNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvc2tlbGV0b25zLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LW1vdmllc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbW92aWVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpek1vdmllc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9tb3ZpZXMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImNoYXJhZGVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9jaGFyYWRlc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkNoYXJhZGVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvY2hhcmFkZXMuaHRtbFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7XHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgcmVxdWlyZUJhc2U6IGZhbHNlLFxyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdXZWJTb2NrZXRTdmMnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQpIHtcclxuICBmdW5jdGlvbiB3ZWJzb2NrZXRIb3N0KCkge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicpIHtcclxuICAgICAgcmV0dXJuIFwid3NzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIndzOi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBjb25uZWN0aW9uO1xyXG4gIHZhciBjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQod2Vic29ja2V0SG9zdCgpKTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjb25uZWN0ZWQnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1dlYnNvY2tldCBjbG9zZWQuIFJlY29ubmVjdGluZy4uLicpO1xyXG4gICAgICAkdGltZW91dChjb25uZWN0LCAxMDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUgKyBcIiAtIFN0YXRlOiBcIiArIGNvbm5lY3Rpb24ucmVhZHlTdGF0ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25tZXNzYWdlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcbiAgICAgICRyb290U2NvcGUuJGJyb2FkY2FzdCgnd3M6JyArIHBheWxvYWQudG9waWMsIHBheWxvYWQuZGF0YSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHRoaXMuc2VuZCA9IGZ1bmN0aW9uICh0b3BpYywgZGF0YSkge1xyXG4gICAgdmFyIGpzb24gPSBKU09OLnN0cmluZ2lmeSh7dG9waWM6IHRvcGljLCBkYXRhOiBkYXRhfSk7XHJcbiAgICBjb25uZWN0aW9uLnNlbmQoanNvbik7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5jb25uZWN0ID0gY29ubmVjdDtcclxuXHJcbn0pLnJ1bihmdW5jdGlvbiAoV2ViU29ja2V0U3ZjKSB7XHJcbiAgV2ViU29ja2V0U3ZjLmNvbm5lY3QoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmRpcmVjdGl2ZShcImNsaWNrT3V0c2lkZVwiLCBmdW5jdGlvbiAoJGRvY3VtZW50KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc3RyaWN0OiBcIkFcIixcclxuICAgIHNjb3BlOiB7XHJcbiAgICAgIGNsaWNrT3V0c2lkZTogXCImXCIsXHJcbiAgICB9LFxyXG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbCwgYXR0cikge1xyXG4gICAgICAkZG9jdW1lbnQub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGlmIChlbCAhPT0gZS50YXJnZXQgJiYgIWVsWzBdLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy9zY29wZS4kcGFyZW50LnNldFNlbGVjdGVkTGlzdCgpO1xyXG4gICAgICAgICAgICBzY29wZS4kZXZhbChzY29wZS5jbGlja091dHNpZGUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG5cdC5kaXJlY3RpdmUoJ2hlYWQnLCBbXHJcblx0XHQnJHJvb3RTY29wZScsXHJcblx0XHQnJHN0YXRlJyxcclxuXHRcdCckY29tcGlsZScsXHJcblx0XHQnJGludGVycG9sYXRlJyxcclxuXHRcdGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkc3RhdGUsICRjb21waWxlLCAkaW50ZXJwb2xhdGUpIHtcclxuXHJcblx0XHRcdHZhciBnZXRTdHlsZSA9IGZ1bmN0aW9uIGdldFN0eWxlKHRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHJcblx0XHRcdFx0dmFyIHN0eWxlID0ge1xyXG5cdFx0XHRcdFx0aHJlZjogdGVtcGxhdGVTdHlsZVVybCxcclxuXHRcdFx0XHRcdHJlbDogJ3N0eWxlc2hlZXQnXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0aWYgKHN0eWxlLmhyZWYubWF0Y2goL1xcLmxlc3MkLykpIHtcclxuXHRcdFx0XHRcdHN0eWxlLnJlbCA9ICdzdHlsZXNoZWV0L2xlc3MnO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIHN0eWxlO1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiBnZXRTdHlsZXMoc3RhdGUpIHtcclxuXHJcblx0XHRcdFx0dmFyIHN0YXRlcyA9IHt9O1xyXG5cclxuXHRcdFx0XHQvL0NoZWNrIHN0YXRlIGZvciBzdHlsZXNcclxuXHRcdFx0XHR3aGlsZSAoc3RhdGUubmFtZSAhPT0gJycpIHtcclxuXHRcdFx0XHRcdHZhciBwYXJlbnQgPSAkc3RhdGUuZ2V0KCdeJywgc3RhdGUpO1xyXG5cclxuXHRcdFx0XHRcdC8vSW5pdGlhdGUgb3VyIHZpZXcgbGlzdFxyXG5cdFx0XHRcdFx0aWYgKCFzdGF0ZXNbcGFyZW50Lm5hbWVdKSB7XHJcblx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV0gPSB7fTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NoZWNrIHRoZSB0ZW1wbGF0ZVN0eWxlXHJcblx0XHRcdFx0XHRpZiAoc3RhdGUudGVtcGxhdGVTdHlsZVVybCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1twYXJlbnQubmFtZV1bJyddKSB7XHJcblx0XHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXVsnJ10gPSBnZXRTdHlsZShzdGF0ZS50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ2hlY2sgdmlld3NcclxuXHRcdFx0XHRcdGlmIChzdGF0ZS52aWV3cykge1xyXG5cdFx0XHRcdFx0XHRfLmZvckVhY2goc3RhdGUudmlld3MsIGZ1bmN0aW9uICh2aWV3LCBrZXkpIHtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBoYXZlIGEgc3R5bGVcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXZpZXcudGVtcGxhdGVTdHlsZVVybCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBhcmUgdGFyZ2V0aW5nIHNvbWUgcGFyZW50XHJcblx0XHRcdFx0XHRcdFx0aWYgKChrZXkgPSBrZXkuc3BsaXQoJ0AnKSlbMV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgaGF2ZSBzdHlsZXMgZm9yIHRoYXQgcGFyZW50XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1trZXlbMV1dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlc1trZXlbMV1dID0ge307XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0Ly9QbGFjZSB0aGUgc3R5bGUgb24gc29tZSBwYXJlbnQncyB2aWV3XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXN0YXRlc1trZXlbMV1dW2tleVswXV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGVzW2tleVsxXV1ba2V5WzBdXSA9IGdldFN0eWxlKHZpZXcudGVtcGxhdGVTdHlsZVVybCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0Ly9QbGFjZSB0aGUgc3R5bGUgb24gb3VyIHBhcmVudCdzIHZpZXdcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdW2tleVswXV0gPSBnZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9Db250aW51ZSB3aXRoIHRoZSBwYXJlbnRcclxuXHRcdFx0XHRcdHN0YXRlID0gcGFyZW50O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly9GbGF0dGVuIHRoZSBsaXN0XHJcblx0XHRcdFx0dmFyIGZsYXQgPSBbXTtcclxuXHRcdFx0XHRfLmZvckVhY2goc3RhdGVzLCBmdW5jdGlvbiAodmlld3MpIHtcclxuXHJcblx0XHRcdFx0XHRfLmZvckVhY2godmlld3MsIGZ1bmN0aW9uIChzdHlsZSkge1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCFfLmluY2x1ZGVzKGZsYXQsIHN0eWxlKSkge1xyXG5cdFx0XHRcdFx0XHRcdGZsYXQucHVzaChzdHlsZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdC8vUmV2ZXJzZSBpdCBzbyB3ZSBoYXZlIGEgcHJvcGVyIGhpZXJhcmNoeVxyXG5cdFx0XHRcdGZsYXQucmV2ZXJzZSgpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gZmxhdDtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRcdFx0bGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtKSB7XHJcblxyXG5cdFx0XHRcdFx0c2NvcGUudGVtcGxhdGVTdHlsZXMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHR2YXIgaHRtbCA9ICc8bGluayBuZy1hdHRyLXJlbD1cInt7c3R5bGUucmVsfX1cIiBuZy1yZXBlYXQ9XCJzdHlsZSBpbiB0ZW1wbGF0ZVN0eWxlc1wiIG5nLWhyZWY9XCJ7e3N0eWxlLmhyZWZ9fVwiPic7XHJcblxyXG5cdFx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvXFx7XFx7L2csICRpbnRlcnBvbGF0ZS5zdGFydFN5bWJvbCgpKTtcclxuXHRcdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xcfVxcfS9nLCAkaW50ZXJwb2xhdGUuZW5kU3ltYm9sKCkpO1xyXG5cclxuXHRcdFx0XHRcdGVsZW0uYXBwZW5kKCRjb21waWxlKGh0bWwpKHNjb3BlKSk7XHJcblxyXG5cdFx0XHRcdFx0JHJvb3RTY29wZS4kb24oJyRzdGF0ZUNoYW5nZVN0YXJ0JywgZnVuY3Rpb24gKGV2ZW50LCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRzY29wZS50ZW1wbGF0ZVN0eWxlcyA9IGdldFN0eWxlcyh0b1N0YXRlKTtcclxuXHJcblx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdH1cclxuXHRdKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkFwcEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgTGFuZ3VhZ2VTdmMsIFVzZXJTdmMsICRtZFRvYXN0KSB7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIiVjWW91IHNuZWFreSBidWdnZXIhXCIsXHJcbiAgICBcImZvbnQ6IDJlbSBzYW5zLXNlcmlmOyBjb2xvcjogRG9kZ2VyQmx1ZTsgdGV4dC1zaGFkb3c6IDJweCAwIDAgIzQ0NCwgLTJweCAwIDAgIzQ0NCwgMCAycHggMCAjNDQ0LCAwIC0ycHggMCAjNDQ0LCAxcHggMXB4ICM0NDQsIC0xcHggLTFweCAwICM0NDQsIDFweCAtMXB4IDAgIzQ0NCwgLTFweCAxcHggMCAjNDQ0O1wiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIkknbSBnbGFkIHlvdSdyZSBjdXJpb3VzIHdoZXRoZXIgc29tZXRoaW5nIGlzIHBvcHBpbmcgdXAgaW4gaGVyZS4gSSdtIGEgYml0IG9mIGEgc3RpY2tsZXIgd2hlbiBpdCBjb21lcyB0byBtZXNzYWdlcyBpbiB0aGUgY29uc29sZSBzbyBJIHRyeSB0byBtYWtlIHN1cmUgb25seSB0aGluZ3MgSSB3YW50IGFyZSB2aXNpYmxlLiBUaGF0IGJlaW5nIHNhaWQsIGlmIHRoZXJlIGlzIGEgYmlnIGVycm9yIGhlcmUsIEkgd291bGQgcmVhbGx5IGFwcHJlY2lhdGUgeW91IHRlbGxpbmcgbWUgc28gSSBjYW4gZ2V0IHJpZCBvZiBpdCFcIixcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCJUaGUgY29kZSBmb3IgbXkgcmVzdW1lIGlzIGhvc3RlZCBvbiBHaXRodWIgaWYgeW91IHJlYWxseSB3YW50IHRvIGdvIGludG8gYWxsIHRoaXMhID0+IGh0dHBzOi8vZ2l0aHViLmNvbS9GbGFuZGVyc0J1cmdlci9yZXN1bWVcIixcclxuICApO1xyXG5cclxuICAkc2NvcGUudG9hc3QgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgJG1kVG9hc3Quc2hvdyhcclxuICAgICAgJG1kVG9hc3RcclxuICAgICAgICAuc2ltcGxlKClcclxuICAgICAgICAucGFyZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdG9hc3RcIikpXHJcbiAgICAgICAgLnRleHRDb250ZW50KG1lc3NhZ2UpXHJcbiAgICAgICAgLnBvc2l0aW9uKFwidG9wIHJpZ2h0XCIpXHJcbiAgICAgICAgLmhpZGVEZWxheSgzMDAwKSxcclxuICAgICk7XHJcbiAgfTtcclxuICAvKlxyXG4gICAgJChkb2N1bWVudCkuYmluZChcImtleXVwIGtleWRvd25cIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGlmKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT0gODApe1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgICovXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gICQod2luZG93KS5sb2FkKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICQoXCIuY29udGVudFwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLmNoZWNrYm94LW1lbnVcIikub24oXCJjaGFuZ2VcIiwgXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuY2xvc2VzdChcImxpXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIsIHRoaXMuY2hlY2tlZCk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuYWxsb3ctZm9jdXNcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS50aGVtZUNvdW50ZXIgPSA2O1xyXG4gICRzY29wZS50b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgJHNjb3BlLnllYXIgPSAkc2NvcGUudG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAkc2NvcGUucmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XHJcblxyXG4gICRzY29wZS5mbGlwVGhlbWUgPSAoKSA9PiB7XHJcbiAgICAkKFwiLmxvYWRpbmdcIikuc2hvdygpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmhpZGUoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLmxvYWRpbmdcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAgICQoXCIuY29udGVudFwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gICAgfSwgODAwKTtcclxuICAgICRzY29wZS50aGVtZUNvdW50ZXIgPSAkc2NvcGUudGhlbWVDb3VudGVyIDwgNiA/ICRzY29wZS50aGVtZUNvdW50ZXIgKyAxIDogKCRzY29wZS50aGVtZUNvdW50ZXIgPSAxKTtcclxuICB9O1xyXG5cclxuICAkLmdldEpTT04oXCIvc2tpbGxzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5za2lsbHMgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIHNraWxsLmVuYWJsZWQ7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2hvYmJpZXMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmhvYmJpZXMgPSBkYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvZXhwZXJpZW5jZS5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuam9icyA9IGRhdGE7XHJcbiAgICAkc2NvcGUuam9icy5mb3JFYWNoKChqb2IpID0+IHtcclxuICAgICAgam9iLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGpvYi5zdGFydERhdGUpO1xyXG4gICAgICBpZiAoam9iLmVuZERhdGUpIGpvYi5lbmREYXRlID0gbmV3IERhdGUoam9iLmVuZERhdGUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9jaGFyYWRlcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuY2hhcmFkZXMgPSBkYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZ2V0VGltZVNwYW4gPSAoam9iKSA9PiB7XHJcbiAgICByZXR1cm4gam9iLnN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpICsgKGpvYi5lbmREYXRlID8gXCIgLSBcIiArIGpvYi5lbmREYXRlLmdldEZ1bGxZZWFyKCkgOiBcIiAtIFRvZGF5XCIpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5sYW5ndWFnZXMgPSBMYW5ndWFnZVN2Yy5sYW5ndWFnZXM7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdExhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IExhbmd1YWdlU3ZjLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuaG92ZXJkaXYgPSAoZSwgZGl2aWQpID0+IHtcclxuICAgIHZhciBsZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xyXG4gICAgdmFyIHRvcCA9IGUuY2xpZW50WSArIDIwICsgXCJweFwiO1xyXG5cclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZpZCk7XHJcblxyXG4gICAgJChcIiNcIiArIGRpdmlkKS5jc3MoXCJsZWZ0XCIsIGxlZnQpO1xyXG4gICAgJChcIiNcIiArIGRpdmlkKS5jc3MoXCJ0b3BcIiwgdG9wKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLnRvZ2dsZSgpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpIHtcclxuICAgIFVzZXJTdmMubG9naW4od2luZG93LmxvY2FsU3RvcmFnZS51c2VyKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBsb2dpbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICBsb2dpbih1c2VyKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xyXG4gICAgaWYgKCEkc2NvcGUubG9nZ2VkSW4pIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS51c2VyID0gdXNlci5faWQ7XHJcbiAgICAgICRzY29wZS5sb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAgICRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUgPSBuZXcgRGF0ZSgkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlKTtcclxuICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dpblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuJG9uKFwidXBkYXRlXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUpO1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKFwibG9hZGluZ1wiLCAoXywgdXNlcikgPT4ge1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgJChcIiNsb2FkaW5nLWljb25cIikuc2hvdygpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKFwibG9hZGVkXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5sb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBmaXJlYmFzZVxyXG4gICAgICAuYXV0aCgpXHJcbiAgICAgIC5zaWduT3V0KClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXHJcbiAgICAgICAgJHNjb3BlLmxvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICRzY29wZS4kYnJvYWRjYXN0KFwibG9nb3V0XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5mb3JtYXREYXRlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IG1vbnRocyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIHJldHVybiBkYXRlLmdldERhdGUoKSArIFwiLVwiICsgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0gKyBcIi1cIiArIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkFzdGVyb2lkc0N0cmxcIiwgZnVuY3Rpb24gKCRsb2NhdGlvbiwgJHNjb3BlLCBHYW1lU3ZjKSB7XHJcbiAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XHJcbiAgaWYgKCFjYW52YXMpIHtcclxuICAgICRsb2NhdGlvbi5wYXRoKFwiL2hvbWVcIik7XHJcbiAgICByZXR1cm4gYWxlcnQoXCJcIik7XHJcbiAgfVxyXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgaWYgKCFjdHgpIHtcclxuICAgIHJldHVybiAkbG9jYXRpb24ucGF0aChcIi9ob21lXCIpO1xyXG4gIH1cclxuICBjdHguZm9udCA9IFwiMzBweCBDb21pYyBTYW5zIE1TXCI7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgbGV0IHNob3RzID0ge307XHJcbiAgY29uc3QgYXN0ZXJvaWRzID0ge307XHJcbiAgY29uc3QgcG93ZXJ1cHMgPSB7fTtcclxuICBjb25zdCBleHBsb3Npb25zID0ge307XHJcbiAgY29uc3QgbWFwID0ge307XHJcbiAgY29uc3Qgc3BhY2VwaWNzID0gMTA7XHJcbiAgbGV0IHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICBjb25zdCBwb3dlcnVwVHlwZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwic3BlZWRcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIk1heCBTcGVlZCDih6dcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgICAgc2l6ZTogWzE0LCAzNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLm1heFNwZWVkICs9IDEwMDtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiY29vbGRvd25cIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIkNvb2xkb3duIOKHqVwiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogMyxcclxuICAgICAgICBzaXplOiBbMTcsIDE3XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLmNvb2xkb3duVGltZSAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwicmFuZ2VcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIkZpcmluZyBSYW5nZSDih6dcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA0LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzMwLCA4XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAucmFuZ2UgKz0gNTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwic2hpZWxkXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJTaGllbGRcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA1LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzE5LCAxOV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnNoaWVsZCA9IHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIm51a2VcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIk51a2VcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgICAgc2l6ZTogWzE1LCAxNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICAgIGFzdGVyb2lkc1tpXS5leHBsb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYXduQXN0ZXJvaWRzKDUpO1xyXG4gICAgICB9LFxyXG4gICAgfSAvKlxyXG4gICAgJ3NpZGVfY2Fubm9ucycsXHJcbiAgICAnbGFzZXInLFxyXG4gICAgJ3NoaWVsZCcsXHJcbiAgICAnbGlmZScsXHJcbiAgICAnbWlzc2lsZXMnLFxyXG4gICAgJ251a2UnXHJcbiAgICAqLyxcclxuICBdO1xyXG4gIHBvd2VydXBUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChwb3dlcnVwLCBpLCBhcnJheSkge1xyXG4gICAgYXJyYXlbaV0uaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL1wiICsgcG93ZXJ1cC5uYW1lICsgXCIucG5nXCI7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBleHBsb3Npb25JbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGV4cGxvc2lvbkltYWdlLnNyYyA9IFwiYXN0ZXJvaWRzL2V4cGxvc2lvbi5wbmdcIjtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImtleWRvd25cIixcclxuICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIHRydWUsXHJcbiAgKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwia2V5dXBcIixcclxuICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB0cnVlLFxyXG4gICk7XHJcblxyXG4gICRzY29wZS5oaWdoc2NvcmUgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBldmFsdWF0ZUtleXMoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICAvL1NwYWNlXHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNob290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzddKSB7XHJcbiAgICAgICAgLy9MZWZ0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMzYwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gLT0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOV0pIHtcclxuICAgICAgICAvL1JpZ2h0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMzYwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gKz0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOF0pIHtcclxuICAgICAgICAvL1VwIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA8PSBzcGFjZXNoaXAubWF4U3BlZWQpIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCArPSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkLS07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbNDBdKSB7XHJcbiAgICAgICAgLy9Eb3duIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCAtPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICBzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTcGFjZXNoaXAoKSB7XHJcbiAgICB0aGlzLndpZHRoID0gNTA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDUwO1xyXG4gICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgIHRoaXMucmFuZ2UgPSA4MDtcclxuICAgIHRoaXMuY2Fubm9uID0ge1xyXG4gICAgICB4OiB0aGlzLndpZHRoIC8gMiAtIDQuNSxcclxuICAgICAgeTogdGhpcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgKiAwLjA3ODEyNSxcclxuICAgIH07XHJcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcclxuICAgIHRoaXMuY29vbGRvd25UaW1lID0gMjA7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW2NhbnZhcy53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDJdO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL3NwYWNlc2hpcC5wbmdcIjtcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5tYXhTcGVlZCA9IDEwMDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gMDtcclxuICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG5cclxuICAgIHRoaXMuc2hvb3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuY29vbGRvd24gPSB0aGlzLmNvb2xkb3duVGltZTtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgc2hvdHNbaWRdID0gbmV3IFNob3QoaWQsIHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguYXJjKHRoaXMucG9zaXRpb25bMF0gKyB0aGlzLndpZHRoIC8gMiwgdGhpcy5wb3NpdGlvblsxXSArIHRoaXMuaGVpZ2h0IC8gMiwgMzAsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMzUsIDIzNywgODYsIDAuNSlcIjtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYig2NiwgMTY4LCAzNiwgMC44KVwiO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgICAgdmFyIGFzdGVyb2lkID0gYXN0ZXJvaWRzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoYXN0ZXJvaWQsIHRoaXMpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zaGllbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYXN0ZXJvaWQuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdhbWVPdmVyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICBpZiAodGhpcy5jb29sZG93biA+IDApIHtcclxuICAgICAgICB0aGlzLmNvb2xkb3duLS07XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTaG90KGlkLCBzcGFjZXNoaXApIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbXHJcbiAgICAgIHNwYWNlc2hpcC5wb3NpdGlvblswXSArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi54ICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnggKiBNYXRoLmNvcygoKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKSxcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzFdICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnkgK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueSAqIE1hdGguc2luKCgoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSkgLyAxODApLFxyXG4gICAgXTtcclxuICAgIHRoaXMud2lkdGggPSA5O1xyXG4gICAgdGhpcy5oZWlnaHQgPSAxNTtcclxuICAgIHRoaXMuYW5nbGUgPSBzcGFjZXNoaXAuYW5nbGU7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gc3BhY2VzaGlwLnJvdGF0aW9uO1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwYWNlc2hpcC5zcGVlZCArIDUwMDtcclxuICAgIHRoaXMubGlmZXNwYW4gPSBzcGFjZXNoaXAucmFuZ2U7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvc2hvdC5wbmdcIjtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBBc3Rlcm9pZChpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy53aWR0aCA9IE1hdGgucmFuZG9tKCkgKiA1MCArIDIwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMucm90YXRpb25TcGVlZCA9IE1hdGgucmFuZG9tKCkgKiA2IC0gMztcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMzAwICsgMjtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBcImFzdGVyb2lkcy9hc3Rlcm9pZFwiICsgKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDYpICsgMSkgKyBcIi5wbmdcIjtcclxuXHJcbiAgICB0aGlzLmV4cGxvZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGV4cGxvc2lvbnNbdGhpcy5pZF0gPSBuZXcgRXhwbG9zaW9uKHRoaXMpO1xyXG4gICAgICByZXR1cm4gZGVsZXRlIGFzdGVyb2lkc1t0aGlzLmlkXTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZDtcclxuICAgICAgaWYgKHRoaXMucm90YXRpb24gPiAzNjApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gdGhpcy5yb3RhdGlvbiAtIDM2MDtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnJvdGF0aW9uIDwgMCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSAzNjAgKyB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgICB2YXIgc2hvdCA9IHNob3RzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoc2hvdCwgdGhpcykpIHtcclxuICAgICAgICAgIHRoaXMuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgdmFyIHBvaW50cyA9IE1hdGguZmxvb3IoKHNob3Quc3BlZWQgLSA1MDApIC8gMTAgKyA3MCAtIHRoaXMud2lkdGgpO1xyXG4gICAgICAgICAgaWYgKE1hdGguZmxvb3IoKHBvaW50cyArICRzY29wZS5zY29yZSkgLyAxMDApID4gTWF0aC5mbG9vcigkc2NvcGUuc2NvcmUgLyAxMDApKSB7XHJcbiAgICAgICAgICAgIHNwYXduUG93ZXJ1cCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJHNjb3BlLnNjb3JlICs9IHBvaW50cztcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIGRlbGV0ZSBzaG90c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBFeHBsb3Npb24ob2JqZWN0KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW29iamVjdC5wb3NpdGlvblswXSwgb2JqZWN0LnBvc2l0aW9uWzFdXTtcclxuICAgIHRoaXMud2lkdGggPSBvYmplY3Qud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9iamVjdC5oZWlnaHQ7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5jeWNsZSA9IHtcclxuICAgICAgcm93czogNixcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgc2l6ZTogWzI1NiwgMjU2XSxcclxuICAgICAgaTogMCxcclxuICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgfTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSA0NztcclxuICAgIHRoaXMuaW1nID0gZXhwbG9zaW9uSW1hZ2U7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuY3ljbGUuaSsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gUG93ZXJ1cChpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wb3dlcnVwID0gcG93ZXJ1cFR5cGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvd2VydXBUeXBlcy5sZW5ndGgpXTtcclxuICAgIHRoaXMuY3ljbGUgPSB0aGlzLnBvd2VydXAuY3ljbGU7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gMTAwMDtcclxuICAgIGlmICh0aGlzLmN5Y2xlLnNpemVbMV0gPiB0aGlzLmN5Y2xlLnNpemVbMF0pIHtcclxuICAgICAgdGhpcy5oZWlnaHQgPSA0MDtcclxuICAgICAgdGhpcy53aWR0aCA9IE1hdGgucm91bmQoKHRoaXMuaGVpZ2h0IC8gdGhpcy5jeWNsZS5zaXplWzFdKSAqIHRoaXMuY3ljbGUuc2l6ZVswXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndpZHRoID0gNDA7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5yb3VuZCgodGhpcy53aWR0aCAvIHRoaXMuY3ljbGUuc2l6ZVswXSkgKiB0aGlzLmN5Y2xlLnNpemVbMV0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5pbWcgPSB0aGlzLnBvd2VydXAuaW1nO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDE1MCArIDUwO1xyXG4gICAgdmFyIGRlbGF5ID0gNTtcclxuICAgIHRoaXMubW92ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhpdChzcGFjZXNoaXAsIHRoaXMpKSB7XHJcbiAgICAgICAgJHNjb3BlLmFubm91bmNlID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2VtZW50ID0gdGhpcy5wb3dlcnVwLmFubm91bmNlbWVudDtcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB0aGlzLnBvd2VydXAuYWN0aXZhdGUoc3BhY2VzaGlwKTtcclxuICAgICAgICByZXR1cm4gZGVsZXRlIHBvd2VydXBzW3RoaXMuaWRdO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKGRlbGF5IDw9IDApIHtcclxuICAgICAgICBpZiAodGhpcy5jeWNsZS5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLmktLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsYXkgPSA1O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGF5LS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlKG9iamVjdCkge1xyXG4gICAgb2JqZWN0LnBvc2l0aW9uWzBdICs9IChvYmplY3Quc3BlZWQgLyAxMDApICogTWF0aC5jb3MoKChvYmplY3QuYW5nbGUgLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBvYmplY3QucG9zaXRpb25bMV0gKz0gKG9iamVjdC5zcGVlZCAvIDEwMCkgKiBNYXRoLnNpbigoKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIGlmIChvYmplY3QucG9zaXRpb25bMF0gPiBjYW52YXMud2lkdGgpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzBdID0gLW9iamVjdC53aWR0aDtcclxuICAgIH0gZWxzZSBpZiAob2JqZWN0LnBvc2l0aW9uWzBdIDwgLW9iamVjdC53aWR0aCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMF0gPSBjYW52YXMud2lkdGg7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0LnBvc2l0aW9uWzFdID4gY2FudmFzLmhlaWdodCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMV0gPSAtb2JqZWN0LmhlaWdodDtcclxuICAgIH0gZWxzZSBpZiAob2JqZWN0LnBvc2l0aW9uWzFdIDwgLW9iamVjdC5oZWlnaHQpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzFdID0gY2FudmFzLmhlaWdodDtcclxuICAgIH1cclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHgudHJhbnNsYXRlKG9iamVjdC5wb3NpdGlvblswXSwgb2JqZWN0LnBvc2l0aW9uWzFdKTtcclxuICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LndpZHRoIC8gMiwgb2JqZWN0LmhlaWdodCAvIDIpO1xyXG4gICAgY3R4LnJvdGF0ZSgob2JqZWN0LnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgaWYgKG9iamVjdC5jeWNsZSkge1xyXG4gICAgICB2YXIgY29sdW1uID0gb2JqZWN0LmN5Y2xlLmkgJSBvYmplY3QuY3ljbGUuY29sdW1ucztcclxuICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3Iob2JqZWN0LmN5Y2xlLmkgLyBvYmplY3QuY3ljbGUuY29sdW1ucyk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgb2JqZWN0LmltZyxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVswXSAqIGNvbHVtbixcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVsxXSAqIHJvdyxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVswXSxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVsxXSxcclxuICAgICAgICAtb2JqZWN0LndpZHRoIC8gMixcclxuICAgICAgICAtb2JqZWN0LmhlaWdodCAvIDIsXHJcbiAgICAgICAgb2JqZWN0LndpZHRoLFxyXG4gICAgICAgIG9iamVjdC5oZWlnaHQsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAob2JqZWN0LmN5Y2xlLmkgPD0gMCkge1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5pID0gMDtcclxuICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChvYmplY3QuY3ljbGUuaSA+PSBvYmplY3QuY3ljbGUuY29sdW1ucyAqIG9iamVjdC5jeWNsZS5yb3dzKSB7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSBvYmplY3QuY3ljbGUuY29sdW1ucyAqIG9iamVjdC5jeWNsZS5yb3dzIC0gMTtcclxuICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2Uob2JqZWN0LmltZywgLW9iamVjdC53aWR0aCAvIDIsIC1vYmplY3QuaGVpZ2h0IC8gMiwgb2JqZWN0LndpZHRoLCBvYmplY3QuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgc3BhY2VzaGlwO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgICRzY29wZS5wbGF5aW5nID0gdHJ1ZTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGFjZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwYWNlcGljcyk7XHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICBzcGFjZXNoaXAgPSBuZXcgU3BhY2VzaGlwKCk7XHJcbiAgICAkc2NvcGUuc2NvcmUgPSAwO1xyXG4gICAgc3Bhd25Bc3Rlcm9pZHMoNSk7XHJcbiAgICBhdXRvU3Bhd24oKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEVudHJ5UG9zaXRpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIGdyaWRYID0gTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICB2YXIgZ3JpZFkgPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciB4LFxyXG4gICAgICB5ID0gMDtcclxuICAgIGlmIChncmlkWCA+PSAxKSB7XHJcbiAgICAgIHggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xyXG4gICAgICBpZiAoeSA+PSAxKSB7XHJcbiAgICAgICAgeSA9IDAgLSBoZWlnaHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeSA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcclxuICAgICAgaWYgKGdyaWRZID49IDEpIHtcclxuICAgICAgICB4ID0gMCAtIHdpZHRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHggPSBjYW52YXMud2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbeCwgeV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoaXQob2JqZWN0MSwgb2JqZWN0Mikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgb2JqZWN0MS5wb3NpdGlvblswXSA8IG9iamVjdDIucG9zaXRpb25bMF0gKyBvYmplY3QyLndpZHRoICYmXHJcbiAgICAgIG9iamVjdDIucG9zaXRpb25bMF0gPCBvYmplY3QxLnBvc2l0aW9uWzBdICsgb2JqZWN0MS53aWR0aCAmJlxyXG4gICAgICBvYmplY3QxLnBvc2l0aW9uWzFdIDwgb2JqZWN0Mi5wb3NpdGlvblsxXSArIG9iamVjdDIuaGVpZ2h0ICYmXHJcbiAgICAgIG9iamVjdDIucG9zaXRpb25bMV0gPCBvYmplY3QxLnBvc2l0aW9uWzFdICsgb2JqZWN0MS5oZWlnaHRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhdXRvU3Bhd24oKSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoYXN0ZXJvaWRzKS5sZW5ndGggPCAyMDApIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgYXN0ZXJvaWRzW2lkXSA9IG5ldyBBc3Rlcm9pZChpZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYXV0b1NwYXduKCk7XHJcbiAgICAgIH0sIHNwYXduSW50ZXJ2YWwoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkludGVydmFsKCkge1xyXG4gICAgaWYgKCRzY29wZS5zY29yZSA8IDEwMDApIHtcclxuICAgICAgcmV0dXJuIDEwMDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDIwMDApIHtcclxuICAgICAgcmV0dXJuIDkwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgMzAwMCkge1xyXG4gICAgICByZXR1cm4gODAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA0MDAwKSB7XHJcbiAgICAgIHJldHVybiA3MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDUwMDApIHtcclxuICAgICAgcmV0dXJuIDYwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNjAwMCkge1xyXG4gICAgICByZXR1cm4gNTAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA3MDAwKSB7XHJcbiAgICAgIHJldHVybiA0MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDgwMDApIHtcclxuICAgICAgcmV0dXJuIDMwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAyMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkFzdGVyb2lkcyhhbW91bnQpIHtcclxuICAgIHZhciBpID0gMDtcclxuICAgIGRvIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgYXN0ZXJvaWRzW2lkXSA9IG5ldyBBc3Rlcm9pZChpZCk7XHJcbiAgICB9IHdoaWxlIChpKysgPD0gYW1vdW50KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduUG93ZXJ1cCgpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhwb3dlcnVwcykubGVuZ3RoIDwgMykge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBwb3dlcnVwc1tpZF0gPSBuZXcgUG93ZXJ1cChpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnYW1lT3ZlcigpIHtcclxuICAgICRzY29wZS5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO1xyXG4gICAgfVxyXG4gICAgc2hvdHMgPSB7fTtcclxuICAgIGlmICgkc2NvcGUubG9nZ2VkSW4pIHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzIDwgJHNjb3BlLnNjb3JlKSB7XHJcbiAgICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyLmhpZ2hzY29yZS5hc3Rlcm9pZHMgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgICAgR2FtZVN2Yy5zZXRIaWdoc2NvcmUoXCJhc3Rlcm9pZHNcIiwgJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCwgJHNjb3BlLnNjb3JlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdoc2NvcmUgPCAkc2NvcGUuc2NvcmUpIHtcclxuICAgICAgICAkc2NvcGUuaGlnaHNjb3JlID0gJHNjb3BlLnNjb3JlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTdGFydCBsaXN0ZW5pbmcgdG8gcmVzaXplIGV2ZW50cyBhbmRcclxuICAvLyBkcmF3IGNhbnZhcy5cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgIC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcbiAgICAvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuICAgIC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuICAgIC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcbiAgICByZXNpemVDYW52YXMoKTtcclxuICB9XHJcbiAgLy8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG4gIC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG4gIC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG4gIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMTtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogNTkpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZSgpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuXHJcbiAgdmFyIHRhbGx5ID0gMDtcclxuICB2YXIgZGlyZWN0aW9uID0gdHJ1ZTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgaWYgKHNob3RzW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvdHNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgIGFzdGVyb2lkc1tpXS5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gcG93ZXJ1cHMpIHtcclxuICAgICAgcG93ZXJ1cHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGV4cGxvc2lvbnMpIHtcclxuICAgICAgaWYgKGV4cGxvc2lvbnNbaV0ubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBleHBsb3Npb25zW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV4cGxvc2lvbnNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBldmFsdWF0ZUtleXMoKTtcclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzcGFjZXNoaXAubW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIGNhbnZhcy53aWR0aCwgMCk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjBcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjI1XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMC41XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMC43NVwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjEuMFwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgICAgY3R4LmZvbnQgPSBcIjYwcHggTW9ub3RvblwiO1xyXG4gICAgICBjdHguZmlsbFRleHQoXCJBc3Rlcm9pZHNcIiwgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIkFzdGVyb2lkc1wiKS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcclxuICAgICAgY3R4LmZvbnQgPSBcIjIwcHggQWxkcmljaFwiO1xyXG4gICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgXCJQcmVzcyBzcGFjZSB0byBzdGFydFwiLFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoXCJQcmVzcyBzcGFjZSB0byBzdGFydFwiKS53aWR0aCAvIDIsXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCAvIDIgKyAyMCxcclxuICAgICAgKTtcclxuICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgIFwiRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyXCIsXHJcbiAgICAgICAgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIkRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlclwiKS53aWR0aCAvIDIsXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCAtIDMwLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGFsbHkgKz0gZGlyZWN0aW9uID8gMSA6IC0xO1xyXG4gICAgaWYgKHRhbGx5ID4gMTAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMTAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAodGFsbHkgPCAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMDtcclxuICAgICAgZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuICB9XHJcblxyXG4gICRzY29wZS5zcGFjZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImFzdGVyb2lkcy9zcGFjZScgKyBzcGFjZSArICcuanBnXCIpJyxcclxuICAgIH07XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJCdWJibGVzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnViYmxlcy1wYWdlXCIpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIHZhciBidWJibGVzID0gW107XHJcbiAgdmFyIGNvbG9ycyA9IFtcIiNmZmMzMDBcIiwgXCIjZmY1NzMzXCIsIFwiI2M3MDAzOVwiLCBcIiM5MDBjM2VcIiwgXCIjNTcxODQ1XCJdO1xyXG5cclxuICBmdW5jdGlvbiBCdWJibGUoKSB7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gMDtcclxuICAgIHRoaXMucmFkaXVzID0gMTtcclxuICAgIHRoaXMuZXhwYW5kaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgIHRoaXMuY2lyY3VtZmVyZW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDUwKSArIDU7XHJcbiAgICB0aGlzLm1heFJhZGl1cyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDIwMCkgKyAyMDtcclxuICAgIHRoaXMueCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aCk7XHJcbiAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0KTtcclxuICAgIHRoaXMudnggPSBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMTtcclxuICAgIHRoaXMudnkgPSBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBidWJibGVzLmZvckVhY2goZnVuY3Rpb24gKGJ1YmJsZSkge1xyXG4gICAgICB2YXIgY29sb3IgPSBjb2xvcnNbTWF0aC5yb3VuZCgoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMpIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMoYnViYmxlLngsIGJ1YmJsZS55LCBidWJibGUucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbTWF0aC5yb3VuZCgoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMpIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcnNbY29sb3JzLmxlbmd0aCAtIE1hdGgucm91bmQoKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzKSAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9IChidWJibGUuY2lyY3VtZmVyZW5jZSAqIGJ1YmJsZS5yYWRpdXMpIC8gYnViYmxlLm1heFJhZGl1cztcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWx0ZXJCdWJibGVzKCkge1xyXG4gICAgYnViYmxlcy5wdXNoKG5ldyBCdWJibGUoKSk7XHJcbiAgICBidWJibGVzID0gYnViYmxlcy5maWx0ZXIoZnVuY3Rpb24gKGJ1YmJsZSkge1xyXG4gICAgICBpZiAoYnViYmxlLnJhZGl1cyA9PT0gYnViYmxlLm1heFJhZGl1cykge1xyXG4gICAgICAgIGJ1YmJsZS5leHBhbmRpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBidWJibGUueCArPSBidWJibGUudnggKiBidWJibGUuc3BlZWQ7XHJcbiAgICAgIGJ1YmJsZS55ICs9IGJ1YmJsZS52eSAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnJhZGl1cyArPSBidWJibGUuZXhwYW5kaW5nID8gMSA6IC0xO1xyXG4gICAgICByZXR1cm4gYnViYmxlLnJhZGl1cyA+IDA7XHJcbiAgICB9KTtcclxuICAgIGRyYXcoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuXHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG4gICAgLy8gZHJhdyBjYW52YXMuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgLy8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuICAgICAgLy8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcbiAgICAgIC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG4gICAgICAvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG4gICAgICByZXNpemVDYW52YXMoKTtcclxuICAgIH1cclxuICAgIC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuICAgIC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG4gICAgLy8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcbiAgICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1NSA6IDU2KTtcclxuICAgIH1cclxuICB9KSgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkNoYXJhZGVzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgJHNjb3BlLnNlbGVjdFdvcmQgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICRzY29wZS53b3JkID0gJHNjb3BlLmNoYXJhZGVzW2NhdGVnb3J5XVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldLmxlbmd0aCldO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQ29udGFjdEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRW1haWxTdmMpIHtcclxuICAkc2NvcGUub3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTcGFtXCIsXHJcbiAgICAgIHRleHQ6IFwiSSBhbSBhIHNwYW0gYm90IGFuZCBhdXRvbWF0aWNhbGx5IGNoZWNrIHRoZSBmaXJzdCBvcHRpb24gSSBmaW5kIVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPcHBvcnR1bml0eVwiLFxyXG4gICAgICB0ZXh0OiBcIllvdSBzZWVtIHRvIGhhdmUgdGhlIHNraWxscyBJIHNlZWssIEknZCBsaWtlIHRvIHRhbGsgYWJvdXQgc29tZSBvcHBvcnR1bml0aWVzLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZXN1bWVcIixcclxuICAgICAgdGV4dDogXCJJIGRpZyB0aGUgcmVzdW1lLCBob3cgZGlkIHlvdSBtYWtlIGl0P1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPdGhlclwiLFxyXG4gICAgICB0ZXh0OiBcIlN1bXRpbiBlbHNlIVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICAkc2NvcGUuY29udGFjdCA9IHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gICAgYWJvdXQ6IFwiXCIsXHJcbiAgICBtZXNzYWdlOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnNlbmRpbmcgPSB0cnVlO1xyXG4gICAgRW1haWxTdmMuc2VuZCh7XHJcbiAgICAgIGVtYWlsOiAkc2NvcGUuY29udGFjdC5lbWFpbCxcclxuICAgICAgbmFtZTogJHNjb3BlLmNvbnRhY3QubmFtZSxcclxuICAgICAgcGhvbmU6ICRzY29wZS5jb250YWN0LnBob25lLFxyXG4gICAgICBhYm91dDogJHNjb3BlLmNvbnRhY3QuYWJvdXQsXHJcbiAgICAgIG1lc3NhZ2U6ICRzY29wZS5jb250YWN0Lm1lc3NhZ2UsXHJcbiAgICB9KS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUudG9hc3QoXCJNZXNzYWdlIHNlbnRcIik7XHJcbiAgICAgICAgJHNjb3BlLnNlbnQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTUy4gc3RhdHVzPSVkLCB0ZXh0PSVzXCIsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UudGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgJHNjb3BlLnRvYXN0KFwiTWVzc2FnZSBzZW5kIGZhaWxlZFwiKTtcclxuICAgICAgICAkc2NvcGUuc2VuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRkFJTEVELiBlcnJvcj1cIiwgZXJyKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignRXhwZXJpZW5jZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICRzY29wZS5nZXRTa2lsbCA9IGZ1bmN0aW9uKHNraWxsQ29kZSkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2tpbGxzKSByZXR1cm47XHJcbiAgICByZXR1cm4gJHNjb3BlLnNraWxscy5maW5kKGZ1bmN0aW9uKHNraWxsKSB7XHJcbiAgICAgIHJldHVybiBza2lsbC5jb2RlID09PSBza2lsbENvZGU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignSG9iYmllc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAkLmdldEpTT04oJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vdXNlci9iZWxnb2NhbmFkaWFuL2Fib3V0Ly5qc29uJywgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRIb2JieSA9ICRzY29wZS5ob2JiaWVzWzBdO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0SG9iYnkgPSBmdW5jdGlvbiAoaG9iYnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gaG9iYnk7XHJcbiAgICAkc2NvcGUuaG9iYnlTZWxlY3RvclZpc2libGUgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd0hvYmJ5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpIHtcclxuICAgIGlmICghdmFsdWUuaW1hZ2VzKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdmFsdWUuaW1hZ2VzLmxlbmd0aCA+IDA7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignTGVtbWluZ3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgR2FtZVN2Yykge1xyXG5cclxuICB2YXIgTEVGVCA9IDA7XHJcbiAgdmFyIFJJR0hUID0gMTtcclxuXHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZW1taW5ncy1wYWdlJyk7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIHZhciBsZW1taW5nc0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgbGVtbWluZ3NJbWFnZS5zcmMgPSAnbGVtbWluZ3MvbGVtbWluZ3MucG5nJztcclxuICB2YXIgZGVjb3JJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGRlY29ySW1hZ2Uuc3JjID0gJ2xlbW1pbmdzL2RlY29yLnBuZyc7XHJcbiAgdmFyIGxlbW1pbmdzID0ge307XHJcbiAgdmFyIHN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgdmFyIGFjdGlvbnMgPSB7XHJcbiAgICB3YWxrOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMF0sXHJcbiAgICAgIGVuZDogWzMyMCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGh1aDoge1xyXG4gICAgICBzdGFydDogWzMyMCwgMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZmFsbDoge1xyXG4gICAgICBzdGFydDogWzAsIDgwXSxcclxuICAgICAgZW5kOiBbMTYwLCAxMDBdLFxyXG4gICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGZseToge1xyXG4gICAgICBzdGFydDogWzE2MCwgODBdLFxyXG4gICAgICBlbmQ6IFs0ODAsIDExMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc3RvcDoge1xyXG4gICAgICBzdGFydDogWzAsIDEyMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTQwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgY2xpbWI6IHtcclxuICAgICAgc3RhcnQ6IFswLCAxNjBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDE4NV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMjVdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwdW5jaDoge1xyXG4gICAgICBzdGFydDogWzAsIDI0MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMzAwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZGlnOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMzIwXSxcclxuICAgICAgZW5kOiBbMzIwLCAzNDVdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBMZW1taW5nKGluaXQpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNhbnZhcy53aWR0aCAtIDIwMCkpICsgMTAwLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLmhlaWdodCAtIDIwMCkpICsgMTAwXTtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSAqIDIgPiAxID8gTEVGVCA6IFJJR0hUO1xyXG4gICAgdGhpcy5hY3QgPSBmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb25zW2FjdGlvbl07XHJcbiAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gKDIwICogKHRoaXMuYWN0aW9uLnJvd3MgLSAxKSkpIC8gdGhpcy5hY3Rpb24ucm93cztcclxuICAgICAgdGhpcy5hbmltYXRpb24gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuYWN0KGluaXQpO1xyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSwgdGhpcy5wb3NpdGlvblsxXSk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gTEVGVCkge1xyXG4gICAgICAgIGN0eC5zY2FsZSgtMSwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UobGVtbWluZ3NJbWFnZSwgKHRoaXMud2lkdGggKiBjb2x1bW4pICsgdGhpcy5hY3Rpb24uc3RhcnRbMF0sICgodGhpcy5oZWlnaHQgKyAyMCkgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgaWYgKHRoaXMuYWN0aW9uLnJldmVyc2UpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlLS07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICF0aGlzLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICBpZiAodGhpcy5jeWNsZSA+PSB0aGlzLmFjdGlvbi5jb2x1bW5zICogdGhpcy5hY3Rpb24ucm93cykge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGF0Y2goKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gWzIwLCAyMF07XHJcbiAgICB0aGlzLmFjdGlvbiA9IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbODIsIDUwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgIHJvd3M6IDEwXHJcbiAgICB9XHJcbiAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICB0aGlzLmhlaWdodCA9ICh0aGlzLmFjdGlvbi5lbmRbMV0gLSB0aGlzLmFjdGlvbi5zdGFydFsxXSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICB0aGlzLm9wZW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgdmFyIGNvbHVtbiwgcm93O1xyXG4gICAgICBpZiAoc3RhcnRlZCkge1xyXG4gICAgICAgIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3IodGhpcy5jeWNsZSAvIHRoaXMuYWN0aW9uLmNvbHVtbnMpO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgOSkge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb2x1bW4gPSAwO1xyXG4gICAgICAgIHJvdyA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgY3R4LmRyYXdJbWFnZShkZWNvckltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKHRoaXMuaGVpZ2h0ICogcm93KSArIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gMSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25MZW1taW5nKCkge1xyXG4gICAgT2JqZWN0LmtleXMoYWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgbGVtbWluZ3NbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKV0gPSBuZXcgTGVtbWluZyhhY3Rpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdHJlc2l6ZUNhbnZhcygpO1xyXG5cdH1cclxuXHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0Ly8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcblx0Ly8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcblx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG5cdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1MCA6IDEwNSk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbiAgc3Bhd25MZW1taW5nKCk7XHJcbiAgbGV0IGhhdGNoID0gbmV3IEhhdGNoKClcclxuICBkcmF3KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBpZiAoIXN0YXJ0ZWQpIHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguZm9udD0nNDBweCBNb25vdG9uJztcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9ICcxMCc7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcclxuICAgICAgY3R4LnJlY3QoMTUsIGNhbnZhcy5oZWlnaHQgLSA0NSwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLndpZHRoICsgMjAsIGN0eC5tZWFzdXJlVGV4dCgnU3RhcnQnKS5oZWlnaHQgKyBjYW52YXMuaGVpZ2h0IC0gNDUpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ1N0YXJ0JywgMjAsIGNhbnZhcy5oZWlnaHQgLSA1MCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKHZhciBpIGluIGxlbW1pbmdzKSB7XHJcbiAgICAgICAgbGVtbWluZ3NbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYXRjaC5vcGVuKCk7XHJcbiAgICBzdGFydGVkID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGRyYXcoKTtcclxuICAgIH0sIDE1MCk7XHJcbiAgfVxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMaXN0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIENhdGVnb3JpZXNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IHRydWU7XHJcblxyXG4gICRzY29wZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5nZXRDYXRlZ29yaWVzKClcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICRzY29wZS50YXNrcyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpIGluICRzY29wZS5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaiBpbiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrcykge1xyXG4gICAgICAgICAgJHNjb3BlLnRhc2tzLnB1c2goe1xyXG4gICAgICAgICAgICBcImNhdGVnb3J5XCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUsXHJcbiAgICAgICAgICAgIFwidGFza1wiOiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrc1tqXS5uYW1lXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RDYXRlZ29yeSA9IGZ1bmN0aW9uKGNhdGVnb3J5KSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkVGFza3MgPSBbXTtcclxuICAgICRzY29wZS5zZWxlY3RhYmxlVGFza3MgPSBbXTtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcy5wdXNoKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgIH1cclxuICAgICRzY29wZS5zaG93Q2F0ZWdvcnkgPSBmYWxzZTtcclxuICAgICRzY29wZS5lbnRlcmVkQ2F0ZWdvcnkgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUubmV3Q2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSA9PT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkoJHNjb3BlLmNhdGVnb3JpZXNbaV0pO1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZENhdGVnb3J5KHtcclxuICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuaW5pdCgpO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0ubmFtZSA9PT0gdGFzaykge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0VGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5Lm5hbWUsIHtcclxuICAgICAgICB0YXNrOiB0YXNrXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLnB1c2goeyBuYW1lOiB0YXNrIH0pO1xyXG4gICAgICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1skc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRUYXNrID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUudW5zZWxlY3RUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RhYmxlVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5hZGRUYXNrID0gZnVuY3Rpb24odGFza0xpc3QsIHRhc2spIHtcclxuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnJlbW92ZVRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3Quc3BsaWNlKHRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zdGFydFByaW9yaXRpemluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5zZXRQcmlvcml0eUxpc3QoJHNjb3BlLnNlbGVjdGVkVGFza3MpO1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy9wcmlvcml0aXplJyk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldFF1ZXN0aW9ucyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2VsZWN0ZWRUYXNrcykgcmV0dXJuICcnO1xyXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9ICRzY29wZS5zZWxlY3RlZFRhc2tzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgY291bnRlciArPSBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiTG9naW5DdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG4gIC8vIEluaXRpYWxpemUgdGhlIEZpcmViYXNlVUkgV2lkZ2V0IHVzaW5nIEZpcmViYXNlLlxyXG4gIHZhciB1aSA9IG5ldyBmaXJlYmFzZXVpLmF1dGguQXV0aFVJKGZpcmViYXNlLmF1dGgoKSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2dvdXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB1aS5yZXNldCgpO1xyXG4gICAgc3RhcnRVSSgpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydFVJKCkge1xyXG4gICAgdWkuc3RhcnQoXCIjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lclwiLCB7XHJcbiAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgIHNpZ25JblN1Y2Nlc3M6IGZ1bmN0aW9uIChjdXJyZW50VXNlciwgY3JlZGVudGlhbCwgcmVkaXJlY3RVcmwpIHtcclxuICAgICAgICAgIC8vIE5vIHJlZGlyZWN0LlxyXG4gICAgICAgICAgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmF1dGgoKVxyXG4gICAgICAgICAgICAuY3VycmVudFVzZXIuZ2V0SWRUb2tlbih0cnVlKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoaWRUb2tlbikge1xyXG4gICAgICAgICAgICAgIFVzZXJTdmMuYXV0aGVudGljYXRlKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBjdXJyZW50VXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBjdXJyZW50VXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHBob3RvVVJMOiBjdXJyZW50VXNlci5waG90b1VSTCxcclxuICAgICAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IGN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQsXHJcbiAgICAgICAgICAgICAgICBpZFRva2VuOiBpZFRva2VuLFxyXG4gICAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwibG9naW5cIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWwtbG9naW5cIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAvLyRsb2NhdGlvbi5wYXRoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUudG9hc3QoXCJMb2dpbiBGYWlsZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gc2lnbkluRmFpbHVyZSBjYWxsYmFjayBtdXN0IGJlIHByb3ZpZGVkIHRvIGhhbmRsZSBtZXJnZSBjb25mbGljdHMgd2hpY2hcclxuICAgICAgICAvLyBvY2N1ciB3aGVuIGFuIGV4aXN0aW5nIGNyZWRlbnRpYWwgaXMgbGlua2VkIHRvIGFuIGFub255bW91cyB1c2VyLlxyXG4gICAgICAgIHNpZ25JbkZhaWx1cmU6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgLy8gRm9yIG1lcmdlIGNvbmZsaWN0cywgdGhlIGVycm9yLmNvZGUgd2lsbCBiZVxyXG4gICAgICAgICAgLy8gJ2ZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3QnLlxyXG4gICAgICAgICAgaWYgKGVycm9yLmNvZGUgIT0gXCJmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gVGhlIGNyZWRlbnRpYWwgdGhlIHVzZXIgdHJpZWQgdG8gc2lnbiBpbiB3aXRoLlxyXG4gICAgICAgICAgdmFyIGNyZWQgPSBlcnJvci5jcmVkZW50aWFsO1xyXG4gICAgICAgICAgLy8gQ29weSBkYXRhIGZyb20gYW5vbnltb3VzIHVzZXIgdG8gcGVybWFuZW50IHVzZXIgYW5kIGRlbGV0ZSBhbm9ueW1vdXNcclxuICAgICAgICAgIC8vIHVzZXIuXHJcbiAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgIC8vIEZpbmlzaCBzaWduLWluIGFmdGVyIGRhdGEgaXMgY29waWVkLlxyXG4gICAgICAgICAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoQ3JlZGVudGlhbChjcmVkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVpU2hvd246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vIFRoZSB3aWRnZXQgaXMgcmVuZGVyZWQuXHJcbiAgICAgICAgICAvLyBIaWRlIHRoZSBsb2FkZXIuXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2lnbkluU3VjY2Vzc1VybDogXCIvaG9tZVwiLFxyXG4gICAgICBzaWduSW5PcHRpb25zOiBbXHJcbiAgICAgICAgLy9maXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICAvLyBXaWxsIHVzZSBwb3B1cCBmb3IgSURQIFByb3ZpZGVycyBzaWduLWluIGZsb3cgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCwgcmVkaXJlY3QuXHJcbiAgICAgIHNpZ25JbkZsb3c6IFwicG9wdXBcIixcclxuICAgICAgLy8gT3RoZXIgY29uZmlnIG9wdGlvbnMuLi5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRVSSgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkZmlsdGVyLCBQb3N0c1N2Yykge1xyXG5cclxuICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkc2NvcGUucG9zdEJvZHkpIHtcclxuICAgICAgUG9zdHNTdmMuY3JlYXRlKHtcclxuICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBvc3RzU3ZjLmZldGNoKClcclxuICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5wb3N0cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oJ3dzOm5ld19wb3N0JywgZnVuY3Rpb24gKF8sIHBvc3QpIHtcclxuICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICBQb3N0c1N2Yy5nZXRQb3N0KHBvc3QpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5wb3N0cy51bnNoaWZ0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJQcm9maWxlQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFVzZXJTdmMpIHtcclxuICBjb25zdCBjb3VudHJpZXMgPSBbXHJcbiAgICB7IG5hbWU6IFwiQW5kb3JyYVwiLCBmbGFnOiBcImZsYWctYWRcIiwgdGlkYml0OiBcIlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIiwgZmxhZzogXCJmbGFnLWFlXCIgfSxcclxuICAgIHsgbmFtZTogXCJBZmdoYW5pc3RhblwiLCBmbGFnOiBcImZsYWctYWZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIiwgZmxhZzogXCJmbGFnLWFnXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbmd1aWxsYVwiLCBmbGFnOiBcImZsYWctYWlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFsYmFuaWFcIiwgZmxhZzogXCJmbGFnLWFsXCIgfSxcclxuICAgIHsgbmFtZTogXCJBcm1lbmlhXCIsIGZsYWc6IFwiZmxhZy1hbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW5nb2xhXCIsIGZsYWc6IFwiZmxhZy1hb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW50YXJjdGljYVwiLCBmbGFnOiBcImZsYWctYXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFyZ2VudGluYVwiLCBmbGFnOiBcImZsYWctYXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFtZXJpY2FuIFNvbW9hXCIsIGZsYWc6IFwiZmxhZy1hc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXVzdHJpYVwiLCBmbGFnOiBcImZsYWctYXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF1c3RyYWxpYVwiLCBmbGFnOiBcImZsYWctYXVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFydWJhXCIsIGZsYWc6IFwiZmxhZy1hd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiw4VsYW5kIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWF4XCIgfSxcclxuICAgIHsgbmFtZTogXCJBemVyYmFpamFuXCIsIGZsYWc6IFwiZmxhZy1helwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBmbGFnOiBcImZsYWctYmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhcmJhZG9zXCIsIGZsYWc6IFwiZmxhZy1iYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFuZ2xhZGVzaFwiLCBmbGFnOiBcImZsYWctYmRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGdpdW1cIiwgZmxhZzogXCJmbGFnLWJlXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdXJraW5hIEZhc29cIiwgZmxhZzogXCJmbGFnLWJmXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdWxnYXJpYVwiLCBmbGFnOiBcImZsYWctYmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhaHJhaW5cIiwgZmxhZzogXCJmbGFnLWJoXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdXJ1bmRpXCIsIGZsYWc6IFwiZmxhZy1iaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVuaW5cIiwgZmxhZzogXCJmbGFnLWJqXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBCYXJ0aMOpbGVteVwiLCBmbGFnOiBcImZsYWctYmxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlcm11ZGFcIiwgZmxhZzogXCJmbGFnLWJtXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcnVuZWkgXCIsIGZsYWc6IFwiZmxhZy1iblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9saXZpYSwgUGx1cmluYXRpb25hbCBTdGF0ZSBvZlwiLCBmbGFnOiBcImZsYWctYm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCIsIGZsYWc6IFwiZmxhZy1icVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJhemlsXCIsIGZsYWc6IFwiZmxhZy1iclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFoYW1hc1wiLCBmbGFnOiBcImZsYWctYnNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJodXRhblwiLCBmbGFnOiBcImZsYWctYnRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvdXZldCBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLWJ2XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3Rzd2FuYVwiLCBmbGFnOiBcImZsYWctYndcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGFydXNcIiwgZmxhZzogXCJmbGFnLWJ5XCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxpemVcIiwgZmxhZzogXCJmbGFnLWJ6XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW5hZGFcIiwgZmxhZzogXCJmbGFnLWNhXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb2NvcyAoS2VlbGluZykgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctY2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbmdvLCB0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGVcIiwgZmxhZzogXCJmbGFnLWNkXCIgfSxcclxuICAgIHsgbmFtZTogXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWNmXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb25nb1wiLCBmbGFnOiBcImZsYWctY2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3aXR6ZXJsYW5kXCIsIGZsYWc6IFwiZmxhZy1jaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ8O0dGUgZCdJdm9pcmVcIiwgZmxhZzogXCJmbGFnLWNpXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb29rIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWNrXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGlsZVwiLCBmbGFnOiBcImZsYWctY2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbWVyb29uXCIsIGZsYWc6IFwiZmxhZy1jbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hpbmFcIiwgZmxhZzogXCJmbGFnLWNuXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb2xvbWJpYVwiLCBmbGFnOiBcImZsYWctY29cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvc3RhIFJpY2FcIiwgZmxhZzogXCJmbGFnLWNyXCIgfSxcclxuICAgIHsgbmFtZTogXCJDdWJhXCIsIGZsYWc6IFwiZmxhZy1jdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FibyBWZXJkZVwiLCBmbGFnOiBcImZsYWctY3ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN1cmHDp2FvXCIsIGZsYWc6IFwiZmxhZy1jd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hyaXN0bWFzIElzbGFuZFwiLCBmbGFnOiBcImZsYWctY3hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN5cHJ1c1wiLCBmbGFnOiBcImZsYWctY3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN6ZWNoIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1jelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2VybWFueVwiLCBmbGFnOiBcImZsYWctZGVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRqaWJvdXRpXCIsIGZsYWc6IFwiZmxhZy1kalwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGVubWFya1wiLCBmbGFnOiBcImZsYWctZGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRvbWluaWNhXCIsIGZsYWc6IFwiZmxhZy1kbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRG9taW5pY2FuIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1kb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWxnZXJpYVwiLCBmbGFnOiBcImZsYWctZHpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVjdWFkb3JcIiwgZmxhZzogXCJmbGFnLWVjXCIgfSxcclxuICAgIHsgbmFtZTogXCJFc3RvbmlhXCIsIGZsYWc6IFwiZmxhZy1lZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWd5cHRcIiwgZmxhZzogXCJmbGFnLWVnXCIgfSxcclxuICAgIHsgbmFtZTogXCJXZXN0ZXJuIFNhaGFyYVwiLCBmbGFnOiBcImZsYWctZWhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVyaXRyZWFcIiwgZmxhZzogXCJmbGFnLWVyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTcGFpblwiLCBmbGFnOiBcImZsYWctZXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkV0aGlvcGlhXCIsIGZsYWc6IFwiZmxhZy1ldFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmlubGFuZFwiLCBmbGFnOiBcImZsYWctZmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZpamlcIiwgZmxhZzogXCJmbGFnLWZqXCIgfSxcclxuICAgIHsgbmFtZTogXCJGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcylcIiwgZmxhZzogXCJmbGFnLWZrXCIgfSxcclxuICAgIHsgbmFtZTogXCJNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIG9mXCIsIGZsYWc6IFwiZmxhZy1mbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmFyb2UgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctZm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyYW5jZVwiLCBmbGFnOiBcImZsYWctZnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdhYm9uXCIsIGZsYWc6IFwiZmxhZy1nYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZFwiLCBmbGFnOiBcImZsYWctZ2JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZW5hZGFcIiwgZmxhZzogXCJmbGFnLWdkXCIgfSxcclxuICAgIHsgbmFtZTogXCJHZW9yZ2lhXCIsIGZsYWc6IFwiZmxhZy1nZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIEd1aWFuYVwiLCBmbGFnOiBcImZsYWctZ2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1ZXJuc2V5XCIsIGZsYWc6IFwiZmxhZy1nZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2hhbmFcIiwgZmxhZzogXCJmbGFnLWdoXCIgfSxcclxuICAgIHsgbmFtZTogXCJHaWJyYWx0YXJcIiwgZmxhZzogXCJmbGFnLWdpXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVlbmxhbmRcIiwgZmxhZzogXCJmbGFnLWdsXCIgfSxcclxuICAgIHsgbmFtZTogXCJHYW1iaWFcIiwgZmxhZzogXCJmbGFnLWdtXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWluZWFcIiwgZmxhZzogXCJmbGFnLWduXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWFkZWxvdXBlXCIsIGZsYWc6IFwiZmxhZy1ncFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXF1YXRvcmlhbCBHdWluZWFcIiwgZmxhZzogXCJmbGFnLWdxXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVlY2VcIiwgZmxhZzogXCJmbGFnLWdyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctZ3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YXRlbWFsYVwiLCBmbGFnOiBcImZsYWctZ3RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YW1cIiwgZmxhZzogXCJmbGFnLWd1XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWluZWEtQmlzc2F1XCIsIGZsYWc6IFwiZmxhZy1nd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3V5YW5hXCIsIGZsYWc6IFwiZmxhZy1neVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9uZyBLb25nXCIsIGZsYWc6IFwiZmxhZy1oa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1obVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9uZHVyYXNcIiwgZmxhZzogXCJmbGFnLWhuXCIgfSxcclxuICAgIHsgbmFtZTogXCJDcm9hdGlhXCIsIGZsYWc6IFwiZmxhZy1oclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSGFpdGlcIiwgZmxhZzogXCJmbGFnLWh0XCIgfSxcclxuICAgIHsgbmFtZTogXCJIdW5nYXJ5XCIsIGZsYWc6IFwiZmxhZy1odVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSW5kb25lc2lhXCIsIGZsYWc6IFwiZmxhZy1pZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJlbGFuZFwiLCBmbGFnOiBcImZsYWctaWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklzcmFlbFwiLCBmbGFnOiBcImZsYWctaWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklzbGUgb2YgTWFuXCIsIGZsYWc6IFwiZmxhZy1pbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSW5kaWFcIiwgZmxhZzogXCJmbGFnLWluXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnlcIiwgZmxhZzogXCJmbGFnLWlvXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmFxXCIsIGZsYWc6IFwiZmxhZy1pcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJhbiwgSXNsYW1pYyBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctaXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkljZWxhbmRcIiwgZmxhZzogXCJmbGFnLWlzXCIgfSxcclxuICAgIHsgbmFtZTogXCJJdGFseVwiLCBmbGFnOiBcImZsYWctaXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkplcnNleVwiLCBmbGFnOiBcImZsYWctamVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkphbWFpY2FcIiwgZmxhZzogXCJmbGFnLWptXCIgfSxcclxuICAgIHsgbmFtZTogXCJKb3JkYW5cIiwgZmxhZzogXCJmbGFnLWpvXCIgfSxcclxuICAgIHsgbmFtZTogXCJKYXBhblwiLCBmbGFnOiBcImZsYWctanBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktlbnlhXCIsIGZsYWc6IFwiZmxhZy1rZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS3lyZ3l6c3RhblwiLCBmbGFnOiBcImZsYWcta2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbWJvZGlhXCIsIGZsYWc6IFwiZmxhZy1raFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2lyaWJhdGlcIiwgZmxhZzogXCJmbGFnLWtpXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb21vcm9zXCIsIGZsYWc6IFwiZmxhZy1rbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsIGZsYWc6IFwiZmxhZy1rblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWtwXCIgfSxcclxuICAgIHsgbmFtZTogXCJLb3JlYSwgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWtyXCIgfSxcclxuICAgIHsgbmFtZTogXCJLdXdhaXRcIiwgZmxhZzogXCJmbGFnLWt3XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYXltYW4gSXNsYW5kc1wiLCBmbGFnOiBcImZsYWcta3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkthemFraHN0YW5cIiwgZmxhZzogXCJmbGFnLWt6XCIgfSxcclxuICAgIHsgbmFtZTogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctbGFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxlYmFub25cIiwgZmxhZzogXCJmbGFnLWxiXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBMdWNpYVwiLCBmbGFnOiBcImZsYWctbGNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpZWNodGVuc3RlaW5cIiwgZmxhZzogXCJmbGFnLWxpXCIgfSxcclxuICAgIHsgbmFtZTogXCJTcmkgTGFua2FcIiwgZmxhZzogXCJmbGFnLWxrXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWJlcmlhXCIsIGZsYWc6IFwiZmxhZy1sclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGVzb3Rob1wiLCBmbGFnOiBcImZsYWctbHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpdGh1YW5pYVwiLCBmbGFnOiBcImZsYWctbHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkx1eGVtYm91cmdcIiwgZmxhZzogXCJmbGFnLWx1XCIgfSxcclxuICAgIHsgbmFtZTogXCJMYXR2aWFcIiwgZmxhZzogXCJmbGFnLWx2XCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWJ5YVwiLCBmbGFnOiBcImZsYWctbHlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vcm9jY29cIiwgZmxhZzogXCJmbGFnLW1hXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb25hY29cIiwgZmxhZzogXCJmbGFnLW1jXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb2xkb3ZhLCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctbWRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbnRlbmVncm9cIiwgZmxhZzogXCJmbGFnLW1lXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KVwiLCBmbGFnOiBcImZsYWctbWZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hZGFnYXNjYXJcIiwgZmxhZzogXCJmbGFnLW1nXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXJzaGFsbCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1taFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFjZWRvbmlhLCB0aGUgZm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1ta1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsaVwiLCBmbGFnOiBcImZsYWctbWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk15YW5tYXJcIiwgZmxhZzogXCJmbGFnLW1tXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb25nb2xpYVwiLCBmbGFnOiBcImZsYWctbW5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hY2FvXCIsIGZsYWc6IFwiZmxhZy1tb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1tcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFydGluaXF1ZVwiLCBmbGFnOiBcImZsYWctbXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hdXJpdGFuaWFcIiwgZmxhZzogXCJmbGFnLW1yXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb250c2VycmF0XCIsIGZsYWc6IFwiZmxhZy1tc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsdGFcIiwgZmxhZzogXCJmbGFnLW10XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXVyaXRpdXNcIiwgZmxhZzogXCJmbGFnLW11XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxkaXZlc1wiLCBmbGFnOiBcImZsYWctbXZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGF3aVwiLCBmbGFnOiBcImZsYWctbXdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1leGljb1wiLCBmbGFnOiBcImZsYWctbXhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGF5c2lhXCIsIGZsYWc6IFwiZmxhZy1teVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW96YW1iaXF1ZVwiLCBmbGFnOiBcImZsYWctbXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hbWliaWFcIiwgZmxhZzogXCJmbGFnLW5hXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXcgQ2FsZWRvbmlhXCIsIGZsYWc6IFwiZmxhZy1uY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmlnZXJcIiwgZmxhZzogXCJmbGFnLW5lXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3Jmb2xrIElzbGFuZFwiLCBmbGFnOiBcImZsYWctbmZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pZ2VyaWFcIiwgZmxhZzogXCJmbGFnLW5nXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWNhcmFndWFcIiwgZmxhZzogXCJmbGFnLW5pXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXRoZXJsYW5kc1wiLCBmbGFnOiBcImZsYWctbmxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcndheVwiLCBmbGFnOiBcImZsYWctbm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5lcGFsXCIsIGZsYWc6IFwiZmxhZy1ucFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmF1cnVcIiwgZmxhZzogXCJmbGFnLW5yXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaXVlXCIsIGZsYWc6IFwiZmxhZy1udVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV3IFplYWxhbmRcIiwgZmxhZzogXCJmbGFnLW56XCIgfSxcclxuICAgIHsgbmFtZTogXCJPbWFuXCIsIGZsYWc6IFwiZmxhZy1vbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFuYW1hXCIsIGZsYWc6IFwiZmxhZy1wYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGVydVwiLCBmbGFnOiBcImZsYWctcGVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBQb2x5bmVzaWFcIiwgZmxhZzogXCJmbGFnLXBmXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYXB1YSBOZXcgR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1wZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGhpbGlwcGluZXNcIiwgZmxhZzogXCJmbGFnLXBoXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWtpc3RhblwiLCBmbGFnOiBcImZsYWctcGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBvbGFuZFwiLCBmbGFnOiBcImZsYWctcGxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIiwgZmxhZzogXCJmbGFnLXBtXCIgfSxcclxuICAgIHsgbmFtZTogXCJQaXRjYWlyblwiLCBmbGFnOiBcImZsYWctcG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlB1ZXJ0byBSaWNvXCIsIGZsYWc6IFwiZmxhZy1wclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwiLCBmbGFnOiBcImZsYWctcHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBvcnR1Z2FsXCIsIGZsYWc6IFwiZmxhZy1wdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFsYXVcIiwgZmxhZzogXCJmbGFnLXB3XCIgfSxcclxuICAgIHsgbmFtZTogXCJQYXJhZ3VheVwiLCBmbGFnOiBcImZsYWctcHlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlFhdGFyXCIsIGZsYWc6IFwiZmxhZy1xYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUsOpdW5pb25cIiwgZmxhZzogXCJmbGFnLXJlXCIgfSxcclxuICAgIHsgbmFtZTogXCJSb21hbmlhXCIsIGZsYWc6IFwiZmxhZy1yb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2VyYmlhXCIsIGZsYWc6IFwiZmxhZy1yc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUnVzc2lhbiBGZWRlcmF0aW9uXCIsIGZsYWc6IFwiZmxhZy1ydVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUndhbmRhXCIsIGZsYWc6IFwiZmxhZy1yd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2F1ZGkgQXJhYmlhXCIsIGZsYWc6IFwiZmxhZy1zYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU29sb21vbiBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1zYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2V5Y2hlbGxlc1wiLCBmbGFnOiBcImZsYWctc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN1ZGFuXCIsIGZsYWc6IFwiZmxhZy1zZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dlZGVuXCIsIGZsYWc6IFwiZmxhZy1zZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2luZ2Fwb3JlXCIsIGZsYWc6IFwiZmxhZy1zZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGFcIiwgZmxhZzogXCJmbGFnLXNoXCIgfSxcclxuICAgIHsgbmFtZTogXCJTbG92ZW5pYVwiLCBmbGFnOiBcImZsYWctc2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIiwgZmxhZzogXCJmbGFnLXNqXCIgfSxcclxuICAgIHsgbmFtZTogXCJTbG92YWtpYVwiLCBmbGFnOiBcImZsYWctc2tcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpZXJyYSBMZW9uZVwiLCBmbGFnOiBcImZsYWctc2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbiBNYXJpbm9cIiwgZmxhZzogXCJmbGFnLXNtXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZW5lZ2FsXCIsIGZsYWc6IFwiZmxhZy1zblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU29tYWxpYVwiLCBmbGFnOiBcImZsYWctc29cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN1cmluYW1lXCIsIGZsYWc6IFwiZmxhZy1zclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggU3VkYW5cIiwgZmxhZzogXCJmbGFnLXNzXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIiwgZmxhZzogXCJmbGFnLXN0XCIgfSxcclxuICAgIHsgbmFtZTogXCJFbCBTYWx2YWRvclwiLCBmbGFnOiBcImZsYWctc3ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIiwgZmxhZzogXCJmbGFnLXN4XCIgfSxcclxuICAgIHsgbmFtZTogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctc3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3YXppbGFuZFwiLCBmbGFnOiBcImZsYWctc3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctdGNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoYWRcIiwgZmxhZzogXCJmbGFnLXRkXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXNcIiwgZmxhZzogXCJmbGFnLXRmXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb2dvXCIsIGZsYWc6IFwiZmxhZy10Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGhhaWxhbmRcIiwgZmxhZzogXCJmbGFnLXRoXCIgfSxcclxuICAgIHsgbmFtZTogXCJUYWppa2lzdGFuXCIsIGZsYWc6IFwiZmxhZy10alwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9rZWxhdVwiLCBmbGFnOiBcImZsYWctdGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRpbW9yLUxlc3RlXCIsIGZsYWc6IFwiZmxhZy10bFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya21lbmlzdGFuXCIsIGZsYWc6IFwiZmxhZy10bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVuaXNpYVwiLCBmbGFnOiBcImZsYWctdG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRvbmdhXCIsIGZsYWc6IFwiZmxhZy10b1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya2V5XCIsIGZsYWc6IFwiZmxhZy10clwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wiLCBmbGFnOiBcImZsYWctdHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1dmFsdVwiLCBmbGFnOiBcImZsYWctdHZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmFcIiwgZmxhZzogXCJmbGFnLXR3XCIgfSxcclxuICAgIHsgbmFtZTogXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy10elwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVWtyYWluZVwiLCBmbGFnOiBcImZsYWctdWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVnYW5kYVwiLCBmbGFnOiBcImZsYWctdWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctdW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLCBmbGFnOiBcImZsYWctdXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVydWd1YXlcIiwgZmxhZzogXCJmbGFnLXV5XCIgfSxcclxuICAgIHsgbmFtZTogXCJVemJla2lzdGFuXCIsIGZsYWc6IFwiZmxhZy11elwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9seSBTZWVcIiwgZmxhZzogXCJmbGFnLXZhXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLCBmbGFnOiBcImZsYWctdmNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZlbmV6dWVsYSwgQm9saXZhcmlhbiBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctdmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzLCBCcml0aXNoXCIsIGZsYWc6IFwiZmxhZy12Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlyZ2luIElzbGFuZHMsIFUuUy5cIiwgZmxhZzogXCJmbGFnLXZpXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaWV0IE5hbVwiLCBmbGFnOiBcImZsYWctdm5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZhbnVhdHVcIiwgZmxhZzogXCJmbGFnLXZ1XCIgfSxcclxuICAgIHsgbmFtZTogXCJXYWxsaXMgYW5kIEZ1dHVuYVwiLCBmbGFnOiBcImZsYWctd2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbW9hXCIsIGZsYWc6IFwiZmxhZy13c1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiWWVtZW5cIiwgZmxhZzogXCJmbGFnLXllXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXlvdHRlXCIsIGZsYWc6IFwiZmxhZy15dFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggQWZyaWNhXCIsIGZsYWc6IFwiZmxhZy16YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiWmFtYmlhXCIsIGZsYWc6IFwiZmxhZy16bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiWmltYmFid2VcIiwgZmxhZzogXCJmbGFnLXp3XCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCB1cGRhdGVVc2VyRmxhZ3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUudXNlckZsYWdzID0gJHNjb3BlLmN1cnJlbnRVc2VyPy5mbGFnc1xyXG4gICAgICA/IGNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGNvdW50cnkpIHtcclxuICAgICAgICAgIHJldHVybiAkc2NvcGUuY3VycmVudFVzZXIuZmxhZ3MuaW5jbHVkZXMoY291bnRyeS5mbGFnKTtcclxuICAgICAgICB9KVxyXG4gICAgICA6IFtdO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5kYXRlT3B0aW9ucyA9IHtcclxuICAgIG1heERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZSgxOTAwLCAxLCAxKSxcclxuICAgIGluaXREYXRlOiBuZXcgRGF0ZSgyMDAwLCAxLCAxKSxcclxuICAgIGRhdGVwaWNrZXJNb2RlOiBcInllYXJcIixcclxuICB9O1xyXG5cclxuICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSB0cnVlO1xyXG4gICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9IHRydWU7XHJcblxyXG4gICRzY29wZS50b2dnbGVVc2VybmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS51c2VybmFtZVRvZ2dsZSA9ICEkc2NvcGUudXNlcm5hbWVUb2dnbGU7XHJcbiAgICAkc2NvcGUubmV3VXNlcm5hbWUgPSAkc2NvcGUuY3VycmVudFVzZXIudXNlcm5hbWU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLm5ld1Bhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5jb25maXJtUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gISRzY29wZS5wYXNzd29yZFRvZ2dsZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uIChwYXNzd29yZCkge1xyXG4gICAgaWYgKHBhc3N3b3JkKSB7XHJcbiAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgVXNlclN2Yy5jaGVja1Bhc3N3b3JkKHVzZXIsIHBhc3N3b3JkKS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAob2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgIGlmIChuZXdQYXNzd29yZCkge1xyXG4gICAgICBpZiAobmV3UGFzc3dvcmQgPT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgdmFyIHVzZXIgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICAgIFVzZXJTdmMuY2hhbmdlUGFzc3dvcmQodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKS50aGVuKFxyXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUudG9hc3QoXCJQYXNzd29yZCBjaGFuZ2VkXCIpO1xyXG4gICAgICAgICAgICAkc2NvcGUub2xkUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzY29wZS50b2FzdChcIlBhc3N3b3JkIGNoYW5nZSBmYWlsZWRcIik7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAkKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjZDMVwiIH0sIDIwMCkuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogb3JpZ2luYWxCZyB9LCAyMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXJuYW1lKSB7XHJcbiAgICAkc2NvcGUuJGVtaXQoXCJsb2FkaW5nXCIpO1xyXG4gICAgVXNlclN2Yy5jaGFuZ2VVc2VybmFtZSgkc2NvcGUuY3VycmVudFVzZXIuX2lkLCB1c2VybmFtZSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwidXBkYXRlXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLnRvYXN0KHVzZXJuYW1lICsgXCIgYWxyZWFkeSBpbiB1c2VcIik7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS51cGRhdGVVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLiRlbWl0KFwibG9hZGluZ1wiKTtcclxuICAgIFVzZXJTdmMudXBkYXRlVXNlcih7IC4uLiRzY29wZS5jdXJyZW50VXNlciwgZmxhZ3M6ICRzY29wZS51c2VyRmxhZ3MubWFwKCh7IGZsYWcgfSkgPT4gZmxhZykgfSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwidXBkYXRlXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUubG9hZENvdW50cmllcyA9IGZ1bmN0aW9uICgkcXVlcnkpIHtcclxuICAgIHJldHVybiBjb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChjb3VudHJ5KSB7XHJcbiAgICAgIHJldHVybiBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCRxdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCAoKSA9PiB7XHJcbiAgICB1cGRhdGVVc2VyRmxhZ3MoKTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignU2tpbGxzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR3aW5kb3cpIHtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkU2tpbGwgPSAwO1xyXG4gICRzY29wZS5za2lsbHNWaXNpYmxlID0gZmFsc2U7XHJcbiAgJHNjb3BlLnByb2plY3RzID0gW107XHJcblxyXG4gICRzY29wZS5sYWJlbHMgPSBbXCJEb3dubG9hZCBTYWxlc1wiLCBcIkluLVN0b3JlIFNhbGVzXCIsIFwiTWFpbC1PcmRlciBTYWxlc1wiXTtcclxuICAkc2NvcGUuZGF0YSA9IFszMDAsIDUwMCwgMTAwXTtcclxuXHJcbiAgJC5nZXRKU09OKCcvZXhwZXJpZW5jZS5qc29uJywgZnVuY3Rpb24oIGRhdGEgKSB7XHJcbiAgICAkc2NvcGUucHJvamVjdHMgPSBkYXRhLnJlZHVjZSgocHJvamVjdHMsIGVtcGxveWVyKSA9PiB7XHJcbiAgICAgIGlmIChlbXBsb3llci5wcm9qZWN0cykgcmV0dXJuIGVtcGxveWVyLnByb2plY3RzLmNvbmNhdChwcm9qZWN0cyk7XHJcbiAgICAgIGVsc2UgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgfSwge30pO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZmlsdGVyZWRQcm9qZWN0cyA9ICgpID0+ICRzY29wZS5wcm9qZWN0c1xyXG4gICAgLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5za2lsbHMgJiYgcHJvamVjdC5za2lsbHMuaW5jbHVkZXMoJHNjb3BlLnNlbGVjdGVkU2tpbGwuY29kZSkpXHJcblxyXG4gICQuZ2V0SlNPTignL3NraWxscy5qc29uJywgZnVuY3Rpb24oIGRhdGEgKSB7XHJcblxyXG4gICAgY29uc3Qgc2tpbGxzID0gZGF0YVxyXG4gICAgLmZpbHRlcigoc2tpbGwpID0+IHNraWxsLmVuYWJsZWQpXHJcblxyXG4gICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBza2lsbHNcclxuICAgIC5yZWR1Y2UoZnVuY3Rpb24oY2F0ZWdvcmllcywgc2tpbGwpIHtcclxuICAgICAgaWYgKCFjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldID0gW3NraWxsXVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldLnB1c2goc2tpbGwpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwgPSBmdW5jdGlvbiAoc2tpbGwpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwgPSBza2lsbDtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwuY2hhcnRPcHRpb25zID0ge1xyXG4gICAgICAgIGN1dG91dFBlcmNlbnRhZ2UgOiA4MCxcclxuICAgICAgICBjaXJjdW1mZXJlbmNlOiAyICogTWF0aC5QSSxcclxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwuY2hhcnRTdHlsZSA9IHtcclxuICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoL3NraWxscy8nICsgJHNjb3BlLnNlbGVjdGVkU2tpbGwuaW1hZ2UgKyAnKScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICc2MCUnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJzUwJSA1MCUnXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZFNraWxsKCRzY29wZS5za2lsbHNbMF0pO1xyXG5cclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkc2NlLCAkbG9jYXRpb24sIFRlblRoaW5nc1N2Yykge1xyXG4gICAgbGV0IHBhZ2UgPSAxO1xyXG4gICAgJHNjb3BlLmxpc3RzID0gW107XHJcbiAgICAkc2NvcGUuc2VhcmNoID0gXCJcIjtcclxuICAgICRzY29wZS5zZWFyY2hGaWVsZCA9IFwiYWxsXCI7XHJcbiAgICAkc2NvcGUubmV3SXRlbSA9IHt9O1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IFwiRU5cIjtcclxuICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gW107XHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW107XHJcbiAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICBsZXQgZXhoYXVzdGVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3Qgb2JqZWN0Q2F0ZWdvcmllcyA9IFtcImN1bHR1cmVcIiwgXCJuYXR1cmVcIiwgXCJtaXNjXCIsIFwic29jaWV0eVwiLCBcInNwb3J0c1wiXTtcclxuICAgICRzY29wZS5ibHVyYlR5cGVzID0gW1xyXG4gICAgICB7IGFwaTogXCJtb3ZpZXNcIiwgY2F0ZWdvcmllczogW1wibW92aWVzXCJdLCB0ZXh0OiBcIkdldCBtb3ZpZSBwb3N0ZXJzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwidHZcIiwgY2F0ZWdvcmllczogW1widGVsZXZpc2lvblwiXSwgdGV4dDogXCJHZXQgdHYgcG9zdGVyc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcImFjdG9yc1wiLCBjYXRlZ29yaWVzOiBbXCJtb3ZpZXNcIiwgXCJ0ZWxldmlzaW9uXCJdLCB0ZXh0OiBcIkdldCBhY3RvciBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwiYm9va3NcIiwgY2F0ZWdvcmllczogW1wibGl0ZXJhdHVyZVwiXSwgdGV4dDogXCJHZXQgYm9vayBjb3ZlcnNcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJtdXNpY3ZpZGVvc1wiLCBjYXRlZ29yaWVzOiBbXCJtdXNpY1wiXSwgdGV4dDogXCJHZXQgbXVzaWMgdmlkZW9zXCIsIGFkbWluT25seTogdHJ1ZSB9LFxyXG4gICAgICB7IGFwaTogXCJ1bnNwbGFzaFwiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBVbnNwbGFzaCBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwicGV4ZWxzXCIsIGNhdGVnb3JpZXM6IG9iamVjdENhdGVnb3JpZXMsIHRleHQ6IFwiR2V0IFBleGVscyBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwid2lraVwiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBXaWtpIHBpY3NcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgXTtcclxuXHJcbiAgICAkc2NvcGUuaGF2ZUNvbW1vbkl0ZW1zID0gKGFycjEsIGFycjIpID0+IHtcclxuICAgICAgcmV0dXJuIGFycjE/LnNvbWUoKGl0ZW0pID0+IGFycjIuaW5jbHVkZXMoaXRlbSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUua2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgLy8gVGFiXHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5jcmVhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICgkKFwiI25ldy12YWx1ZVwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAkKFwiI25ldy1ibHVyYlwiKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgfVxyXG4gICAgICAvLyB1c2UgZS5rZXlDb2RlXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hZGRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBcIm5ld1wiKTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNyZWF0b3I6ICRzY29wZS5jdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB2YWx1ZXM6IFtdLFxyXG4gICAgICAgIGFuc3dlcnM6IDAsXHJcbiAgICAgICAgaXNEeW5hbWljOiB0cnVlLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgIGxhbmd1YWdlOiAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgJHNjb3BlLnNlYXJjaCA9ICRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2g7XHJcbiAgICAgIGlmIChsaXN0KSB7XHJcbiAgICAgICAgaWYgKGxpc3QuX2lkID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAkc2NvcGUuYWRkTGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0Lmxhbmd1YWdlO1xyXG4gICAgICAgICAgICAgICRzY29wZS5yZWFkT25seSA9XHJcbiAgICAgICAgICAgICAgICAhJHNjb3BlLnNlbGVjdGVkTGlzdCB8fFxyXG4gICAgICAgICAgICAgICAgKCEkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4gJiZcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jcmVhdG9yLl9pZCAhPT0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCAmJlxyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHt9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldENhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldEZpbHRlckNvdW50ID0gKCkgPT5cclxuICAgICAgT2JqZWN0LnZhbHVlcygkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIpLmxlbmd0aCArIE9iamVjdC52YWx1ZXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKS5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY3VycmVudFVzZXIpIHJldHVybjtcclxuICAgICAgY29uc3QgeyBkYXRhOiBsYW5ndWFnZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKTtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IGxhbmd1YWdlcztcclxuICAgICAgcmVzZXRMYW5ndWFnZUZpbHRlcigpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3JpZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcclxuICAgICAgY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XHJcbiAgICAgIHJlc2V0Q2F0ZWdvcnlGaWx0ZXIoKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBsYW5ndWFnZVN0YXRzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMoKTtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBsYW5ndWFnZVN0YXRzLnJlZHVjZSgocmVzdWx0LCB7IF9pZCwgY291bnQgfSkgPT4ge1xyXG4gICAgICAgIHJlc3VsdFtfaWQubGFuZ3VhZ2VdID0gKHJlc3VsdFtfaWQubGFuZ3VhZ2VdIHx8IDApICsgY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSwge30pO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3J5U3RhdHMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cygpO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0cyA9IGNhdGVnb3J5U3RhdHMucmVkdWNlKChyZXN1bHQsIHsgX2lkLCBjb3VudCB9KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W19pZF0gPSBjb3VudDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCkge1xyXG4gICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoeyBfaWQ6ICRsb2NhdGlvbi5zZWFyY2goKS5saXN0IH0pO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5zZWFyY2ggPSAkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoIHx8IFwiXCI7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoTGlzdHMgPSBhc3luYyAodmlld1ZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2aWV3VmFsdWUubGVuZ3RoID49IDMpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5zZWFyY2hMaXN0cyh2aWV3VmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRTZWFyY2hUZXh0ID0gKHRleHQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5zZWFyY2gpIHtcclxuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCgkeyRzY29wZS5zZWFyY2h9KWAsIFwiZ2lcIik7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShyZWdleCwgXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz4kMTwvc3Bhbj5cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnZhbHVlT3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInZhbHVlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6ICRsb2NhdGlvbi5zZWFyY2goKS5zb3J0IHx8IFwiZGF0ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246ICRsb2NhdGlvbi5zZWFyY2goKS5vcmRlciA/ICRsb2NhdGlvbi5zZWFyY2goKS5vcmRlciA9PT0gXCJkZXNjXCIgOiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPSAhJHNjb3BlLm9yZGVyLmRpcmVjdGlvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcInNvcnRcIiwgZmllbGQpO1xyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwib3JkZXJcIiwgJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA/IFwiZGVzY1wiIDogXCJhc2NcIik7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TW9yZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxpc3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gJHNjb3BlLmxpc3RzLmNvbmNhdChsaXN0cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgIHBhZ2UgPSAxO1xyXG4gICAgICBleGhhdXN0ZWQgPSBmYWxzZTtcclxuICAgICAgZ2V0TGlzdHMoKS50aGVuKChsaXN0cykgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9IGxpc3RzO1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZUZpbHRlciA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9ICEkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsZXRlICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5RmlsdGVyID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmICgkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID09PSB0cnVlKSB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9ICEkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGV0ZSAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpO1xyXG4gICAgICBjb25zdCBhbGxDYXRlZ29yaWVzID1cclxuICAgICAgICBjYXRlZ29yaWVzLmxlbmd0aCA9PT0gY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldKS5sZW5ndGg7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9ICRzY29wZS5jYXRlZ29yaWVzLnJlZHVjZSgoZmlsdGVyLCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgIGZpbHRlcltjYXRlZ29yeV0gPSAhYWxsQ2F0ZWdvcmllcztcclxuICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Q2F0ZWdvcnlMYWJlbCA9IChjYXRlZ29yaWVzKSA9PiB7XHJcbiAgICAgIGlmICghY2F0ZWdvcmllcyB8fCBjYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFwiXCI7XHJcbiAgICAgIGNvbnN0IG1haW5DYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiAhY2F0ZWdvcnkuaW5jbHVkZXMoXCIuXCIpKTtcclxuICAgICAgcmV0dXJuIG1haW5DYXRlZ29yaWVzXHJcbiAgICAgICAgLnNvcnQoKVxyXG4gICAgICAgIC5tYXAoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBzdWJjYXRlZ29yaWVzID0gY2F0ZWdvcmllc1xyXG4gICAgICAgICAgICAuZmlsdGVyKChzdWJjYXRlZ29yeSkgPT4gc3ViY2F0ZWdvcnkuc3RhcnRzV2l0aChjYXRlZ29yeSkgJiYgc3ViY2F0ZWdvcnkgIT09IGNhdGVnb3J5KVxyXG4gICAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICAgIChzdWJjYXRlZ29yeSkgPT5cclxuICAgICAgICAgICAgICAgICRzY29wZS5jYXRlZ29yaWVzXHJcbiAgICAgICAgICAgICAgICAgIC5maW5kKCh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBjYXRlZ29yeSlcclxuICAgICAgICAgICAgICAgICAgLnN1YmNhdGVnb3JpZXMuZmluZCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gc3ViY2F0ZWdvcnkpPy5sYWJlbCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICRzY29wZS5jYXRlZ29yaWVzLmZpbmQoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGNhdGVnb3J5KS5sYWJlbCArXHJcbiAgICAgICAgICAgIChzdWJjYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyBcIiAoXCIgKyBzdWJjYXRlZ29yaWVzLnNvcnQoKS5qb2luKFwiLCBcIikgKyBcIilcIiA6IFwiXCIpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmpvaW4oXCIsIFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0TGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubG9hZGluZyB8fCBleGhhdXN0ZWQpIHJldHVybiBbXTtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLnNlYXJjaCAhPT0gJHNjb3BlLnNlYXJjaCkge1xyXG4gICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJzZWFyY2hcIiwgJHNjb3BlLnNlYXJjaCA/ICRzY29wZS5zZWFyY2ggOiBudWxsKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0cyh7XHJcbiAgICAgICAgcGFnZSxcclxuICAgICAgICBzb3J0Qnk6ICRzY29wZS5vcmRlci5maWVsZCxcclxuICAgICAgICBvcmRlckJ5OiAkc2NvcGUub3JkZXIuZGlyZWN0aW9uID8gLTEgOiAxLFxyXG4gICAgICAgIGxpbWl0OiAxMDAsXHJcbiAgICAgICAgLi4uKCRzY29wZS5zZWFyY2hGaWVsZCA9PT0gXCJhbGxcIiA/IHsgc2VhcmNoOiAkc2NvcGUuc2VhcmNoIH0gOiB7fSksXHJcbiAgICAgICAgLi4uKCRzY29wZS5zZWFyY2hGaWVsZCA9PT0gXCJuYW1lXCIgPyB7IG5hbWU6ICRzY29wZS5zZWFyY2ggfSA6IHt9KSxcclxuICAgICAgICBsYW5ndWFnZTogT2JqZWN0LmtleXMoJHNjb3BlLmxhbmd1YWdlRmlsdGVyKS5maWx0ZXIoKGxhbmd1YWdlKSA9PiAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2VdID09PSB0cnVlKSxcclxuICAgICAgICBjYXRlZ29yaWVzOiBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpLmZpbHRlcigoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPT09IHRydWUpLFxyXG4gICAgICAgIGxhbmd1YWdlTm90OiBPYmplY3Qua2V5cygkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIpLmZpbHRlcigobGFuZ3VhZ2UpID0+ICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZV0gPT09IGZhbHNlKSxcclxuICAgICAgICBjYXRlZ29yaWVzTm90OiBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpLmZpbHRlcihcclxuICAgICAgICAgIChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9PT0gZmFsc2UsXHJcbiAgICAgICAgKSxcclxuICAgICAgfSk7XHJcbiAgICAgICRzY29wZS5jb3VudCA9IGRhdGEuY291bnQ7XHJcbiAgICAgIGlmIChkYXRhLnJlc3VsdC5sZW5ndGggPCAxMDApIGV4aGF1c3RlZCA9IHRydWU7XHJcbiAgICAgIGVsc2UgcGFnZSA9IGRhdGEubmV4dFBhZ2U7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBQYWdlICR7cGFnZX0gbG9hZGVkLCAke2RhdGEucmVzdWx0Lmxlbmd0aH0gaXRlbXNgKTtcclxuICAgICAgcmV0dXJuIGRhdGEucmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdE5hbWUgPSAobGlzdElkKSA9PiAkc2NvcGUubGlzdHMuZmluZCgoeyBfaWQgfSkgPT4gX2lkID09PSBsaXN0SWQpPy5uYW1lO1xyXG5cclxuICAgICRzY29wZS51cGRhdGVWYWx1ZSA9IGFzeW5jIChpdGVtKSA9PiB7XHJcbiAgICAgIGlmICghaXRlbS52YWx1ZSkge1xyXG4gICAgICAgICRzY29wZS5kZWxldGVWYWx1ZShpdGVtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkSXRlbVJlc3BvbnNlID0gYXdhaXQgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKTtcclxuICAgICAgICBpdGVtLmJsdXJiVHlwZSA9IHVwZGF0ZWRJdGVtUmVzcG9uc2UuZGF0YS5ibHVyYlR5cGU7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGVWYWx1ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubmV3SXRlbS52YWx1ZSkgcmV0dXJuO1xyXG4gICAgICBpZiAoJHNjb3BlLmhhc0R1cGxpY2F0ZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KGAkeyRzY29wZS5uZXdJdGVtLnZhbHVlfSBpcyBhbHJlYWR5IGluIHRoZSBsaXN0YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoISRzY29wZS5zZWxlY3RlZExpc3QuX2lkKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMucHVzaCh7IC4uLiRzY29wZS5uZXdJdGVtIH0pO1xyXG4gICAgICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5sZW5ndGggPj0gMTApIHtcclxuICAgICAgICAgIGF3YWl0ICRzY29wZS51cHNlcnRMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVkSXRlbVJlc3BvbnNlID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmNyZWF0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCAkc2NvcGUubmV3SXRlbSk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMucHVzaChjcmVhdGVkSXRlbVJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5uZXdJdGVtLnZhbHVlKTtcclxuICAgICAgICAkc2NvcGUudG9hc3QoYFwiJHskc2NvcGUubmV3SXRlbS52YWx1ZX1cIiBhZGRlZGApO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlID0gXCJcIjtcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0uYmx1cmIgPSBcIlwiO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkKFwiI25ldy12YWx1ZVwiKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVWYWx1ZSA9IChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlVG9EZWxldGUgPSBpdGVtLnZhbHVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZGVsZXRlTGlzdFZhbHVlKCRzY29wZS5zZWxlY3RlZExpc3QsIGl0ZW0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzID0gJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUuX2lkICE9PSBpdGVtLl9pZCk7XHJcbiAgICAgICAgJHNjb3BlLnRvYXN0KGBcIiR7dmFsdWVUb0RlbGV0ZX1cIiByZW1vdmVkYCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudXBkYXRlTGlzdCA9IChsaXN0LCB1cGRhdGVzKSA9PiB7XHJcbiAgICAgIGlmIChsaXN0Ll9pZCAmJiBsaXN0Ll9pZCAhPT0gXCJuZXdcIikge1xyXG4gICAgICAgIFRlblRoaW5nc1N2Yy51cGRhdGVMaXN0KHtcclxuICAgICAgICAgIC4uLnVwZGF0ZXMsXHJcbiAgICAgICAgICBfaWQ6IGxpc3QuX2lkLFxyXG4gICAgICAgIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBjb25zdCBsaXN0SW5kZXggPSAkc2NvcGUubGlzdHMuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0Ll9pZCA9PT0gZGF0YS5faWQpO1xyXG4gICAgICAgICAgJHNjb3BlLmxpc3RzW2xpc3RJbmRleF0gPSBkYXRhO1xyXG4gICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS51cHNlcnRMaXN0ID0gKGxpc3QsIHVwZGF0ZXMpID0+IHtcclxuICAgICAgJHNjb3BlLnNhdmluZyA9IHRydWU7XHJcbiAgICAgIGlmIChsaXN0LnZhbHVlcy5sZW5ndGggPj0gMTAgJiYgbGlzdC5uYW1lICYmIGxpc3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaWYgKGxpc3QuX2lkICYmIGxpc3QuX2lkICE9PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICBsZXQgY2hhbmdlcyA9IHVwZGF0ZXMgPyB1cGRhdGVzIDogbGlzdDtcclxuICAgICAgICAgIGRlbGV0ZSBjaGFuZ2VzLl9pZDtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy51cGRhdGVMaXN0KHtcclxuICAgICAgICAgICAgLi4uY2hhbmdlcyxcclxuICAgICAgICAgICAgX2lkOiBsaXN0Ll9pZCxcclxuICAgICAgICAgIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgJHNjb3BlLmxpc3RzWyRzY29wZS5saXN0cy5maW5kSW5kZXgoKGxpc3QpID0+IGxpc3QuX2lkID09PSBkYXRhLl9pZCldID0gZGF0YTtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmNyZWF0ZUxpc3QoJHNjb3BlLmN1cnJlbnRVc2VyLCAkc2NvcGUuc2VsZWN0ZWRMaXN0KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QgPT09IFwibmV3XCIpIHtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQgPSBkYXRhLl9pZDtcclxuICAgICAgICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgJHNjb3BlLnRvYXN0KGBcIiR7ZGF0YS5uYW1lfVwiIGNyZWF0ZWRgKTtcclxuICAgICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKCRzY29wZS5zZWxlY3RlZExpc3QsIHVwZGF0ZXMpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCFsaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhsaXN0Ll9pZCkpIHtcclxuICAgICAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW2xpc3QuX2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0cyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHM7XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY29uZmlybU1lcmdlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgVGVuVGhpbmdzU3ZjLm1lcmdlTGlzdHMoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyk7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJHNjb3BlLnRvYXN0KFwiTWVyZ2VkXCIpO1xyXG4gICAgICAkKFwiI21vZGFsLW1lcmdlLWxpc3RzXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNvbmZpcm1EZWxldGVMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgZm9yIChjb25zdCBsaXN0SWQgb2YgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSkge1xyXG4gICAgICAgIGF3YWl0IFRlblRoaW5nc1N2Yy5kZWxldGVMaXN0KGxpc3RJZCk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBudWxsO1xyXG4gICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW107XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gW107XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSBbXTtcclxuICAgICAgJHNjb3BlLmNvbmZpcm1lZCA9IGZhbHNlO1xyXG4gICAgICAkc2NvcGUudG9hc3QoXCJMaXN0cyBkZWxldGVkXCIpO1xyXG4gICAgICAkKFwiI21vZGFsLWRlbGV0ZS1saXN0c1wiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVIaWdobGlnaHRlZExpc3RzID0gKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5sZW5ndGggPT09ICRzY29wZS5saXN0cy5sZW5ndGgpIHtcclxuICAgICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9ICRzY29wZS5saXN0cy5tYXAoKHsgX2lkIH0pID0+IF9pZCk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMgPSAkc2NvcGUubGlzdHMuZmlsdGVyKCh7IF9pZCB9KSA9PiAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmluY2x1ZGVzKF9pZCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMobGlzdC5faWQpKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuZmlsdGVyKFxyXG4gICAgICAgICAgKGhpZ2hsaWdodGVkTGlzdElkKSA9PiBoaWdobGlnaHRlZExpc3RJZCAhPT0gbGlzdC5faWQsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLnB1c2gobGlzdC5faWQpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gJHNjb3BlLmxpc3RzLmZpbHRlcigoeyBfaWQgfSkgPT4gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhfaWQpKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldExhbmd1YWdlID0gKGxpc3QsIGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGxpc3QubGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHsgbGFuZ3VhZ2U6IGxhbmd1YWdlLmNvZGUgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXREaWZmaWN1bHR5ID0gKGxpc3QsIGRpZmZpY3VsdHkpID0+IHtcclxuICAgICAgbGlzdC5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwgeyBkaWZmaWN1bHR5OiBkaWZmaWN1bHR5IH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0RnJlcXVlbmN5ID0gKGxpc3QsIGZyZXF1ZW5jeSkgPT4ge1xyXG4gICAgICBsaXN0LmZyZXF1ZW5jeSA9IGZyZXF1ZW5jeTtcclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwgeyBmcmVxdWVuY3k6IGZyZXF1ZW5jeSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0VXBkYXRlZENhdGVnb3JpZXMgPSAobGlzdCwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgbGV0IGNhdGVnb3JpZXMgPSBsaXN0LmNhdGVnb3JpZXM7XHJcbiAgICAgIGlmIChjYXRlZ29yaWVzLnNvbWUoKGxpc3RDYXRlZ29yeSkgPT4gbGlzdENhdGVnb3J5ID09PSBjYXRlZ29yeSkpIHtcclxuICAgICAgICBjYXRlZ29yaWVzID0gbGlzdC5jYXRlZ29yaWVzLmZpbHRlcigobGlzdENhdGVnb3J5KSA9PiBsaXN0Q2F0ZWdvcnkgIT09IGNhdGVnb3J5KTtcclxuICAgICAgICBpZiAoIWNhdGVnb3J5LmluY2x1ZGVzKFwiLlwiKSAmJiBjYXRlZ29yaWVzLnNvbWUoKGxpc3RDYXRlZ29yeSkgPT4gbGlzdENhdGVnb3J5LnN0YXJ0c1dpdGgoY2F0ZWdvcnkpKSkge1xyXG4gICAgICAgICAgY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKChsaXN0Q2F0ZWdvcnkpID0+ICFsaXN0Q2F0ZWdvcnkuc3RhcnRzV2l0aChjYXRlZ29yeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xyXG4gICAgICAgIGlmIChjYXRlZ29yeS5pbmNsdWRlcyhcIi5cIikgJiYgIWNhdGVnb3JpZXMuZmluZCgobGlzdENhdGVnb3J5KSA9PiBsaXN0Q2F0ZWdvcnkgPT09IGNhdGVnb3J5LnNwbGl0KFwiLlwiKVswXSkpIHtcclxuICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeS5zcGxpdChcIi5cIilbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2F0ZWdvcmllcztcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5ID0gKGxpc3QsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRDYXRlZ29yaWVzID0gZ2V0VXBkYXRlZENhdGVnb3JpZXMobGlzdCwgY2F0ZWdvcnkpO1xyXG4gICAgICBpZiAodXBkYXRlZENhdGVnb3JpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgJHNjb3BlLnRvYXN0KGBZb3UgbXVzdCBoYXZlIGF0IGxlYXN0IDEgY2F0ZWdvcnkgZm9yICR7bGlzdC5uYW1lfWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHsgY2F0ZWdvcmllczogdXBkYXRlZENhdGVnb3JpZXMgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3JpZXMgPSBhc3luYyAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgJHNjb3BlLnNhdmluZyA9IHRydWU7XHJcbiAgICAgIGxldCBsaXN0c1RvVXBkYXRlID0gW107XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5ldmVyeSgoeyBjYXRlZ29yaWVzIH0pID0+IGNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSkge1xyXG4gICAgICAgIGxpc3RzVG9VcGRhdGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cztcclxuICAgICAgfSBlbHNlIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5zb21lKCh7IGNhdGVnb3JpZXMgfSkgPT4gY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgbGlzdHNUb1VwZGF0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RzLmZpbHRlcigoeyBjYXRlZ29yaWVzIH0pID0+ICFjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdHNUb1VwZGF0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RzO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRMaXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgIGxpc3RzVG9VcGRhdGUubWFwKChsaXN0VG9VcGRhdGUpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDYXRlZ29yaWVzID0gZ2V0VXBkYXRlZENhdGVnb3JpZXMobGlzdFRvVXBkYXRlLCBjYXRlZ29yeSk7XHJcbiAgICAgICAgICBpZiAodXBkYXRlZENhdGVnb3JpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICRzY29wZS50b2FzdChgWW91IG11c3QgaGF2ZSBhdCBsZWFzdCAxIGNhdGVnb3J5IGZvciAke2xpc3RUb1VwZGF0ZS5uYW1lfWApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFRlblRoaW5nc1N2Yy51cGRhdGVMaXN0KHtcclxuICAgICAgICAgICAgICBfaWQ6IGxpc3RUb1VwZGF0ZS5faWQsXHJcbiAgICAgICAgICAgICAgY2F0ZWdvcmllczogdXBkYXRlZENhdGVnb3JpZXMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICApO1xyXG4gICAgICB1cGRhdGVkTGlzdHMuZm9yRWFjaCgodXBkYXRlZExpc3QpID0+IHtcclxuICAgICAgICBjb25zdCBsaXN0SW5kZXggPSAkc2NvcGUubGlzdHMuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0Ll9pZCA9PT0gdXBkYXRlZExpc3QuX2lkKTtcclxuICAgICAgICAkc2NvcGUubGlzdHNbbGlzdEluZGV4XSA9IHVwZGF0ZWRMaXN0O1xyXG4gICAgICB9KTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMgPSAkc2NvcGUubGlzdHMuZmlsdGVyKCh7IF9pZCB9KSA9PiAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmluY2x1ZGVzKF9pZCkpO1xyXG4gICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jYXRlZ29yeVN0YXR1cyA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMuZXZlcnkoKHsgY2F0ZWdvcmllcyB9KSA9PiBjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICByZXR1cm4gXCJjaGVja2VkXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMuc29tZSgoeyBjYXRlZ29yaWVzIH0pID0+IGNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSkge1xyXG4gICAgICAgIHJldHVybiBcInBhcnRpYWxcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJ1bmNoZWNrZWRcIjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaGFzRHVwbGljYXRlID0gKCkgPT5cclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCAmJlxyXG4gICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSAmJlxyXG4gICAgICBfLnNvbWUoXHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMsXHJcbiAgICAgICAgKGFuc3dlcikgPT4gYW5zd2VyLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSA9PSAkc2NvcGUubmV3SXRlbS52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCksXHJcbiAgICAgICk7XHJcblxyXG4gICAgJHNjb3BlLmdldFNlbGVjdGVkTGlzdHNUaXRsZSA9ICgpID0+ICRzY29wZS5oaWdobGlnaHRlZExpc3RzLm1hcCgobGlzdCkgPT4gbGlzdC5uYW1lKS5qb2luKFwiIC8gXCIpO1xyXG5cclxuICAgICRzY29wZS5nZXRCbHVyYnMgPSAodHlwZSkgPT4ge1xyXG4gICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRCbHVyYnMoJHNjb3BlLnNlbGVjdGVkTGlzdCwgdHlwZSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS50b2FzdChcIkJsdXJicyB1cGRhdGVkXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUudG9hc3QoXCJCbHVyYiB1cGRhdGUgZmFpbGVkXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0RW1iZWRVcmwgPSAodXJsKSA9PiB7XHJcbiAgICAgIGlmICh1cmwuaW5jbHVkZXMoXCJ5b3V0dWJlLmNvbVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL1s/Jl12PShbXiZdKykvKVsxXS50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsLmluY2x1ZGVzKFwieW91dHUuYmVcIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC95b3V0dVxcLmJlXFwvKFteJj9dKykvKVsxXS50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsLmluY2x1ZGVzKFwidmltZW8uY29tXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvdmltZW9cXC5jb21cXC8oXFxkKykvKVsxXS50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGBodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHVybC5pbmNsdWRlcyhcIm9wZW4uc3BvdGlmeVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL3RyYWNrXFwvKFteJj9dKykvKVsxXS50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGBodHRwczovL29wZW4uc3BvdGlmeS5jb20vZW1iZWQvdHJhY2svJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybCh1cmwpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybiBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfT9hdXRvcGxheT0xYDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsIGdldERhdGEpO1xyXG4gIH0pO1xyXG4iLCIvKmpzbGludCBlc3ZlcnNpb246IDYqL1xyXG5hbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzQWRtaW5DdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIFRlblRoaW5nc1N2YywgVXNlclN2Yykge1xyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4pIHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInVzZXJuYW1lXCIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5yZXZlcnNlID0gISRzY29wZS5vcmRlci5yZXZlcnNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldFF1ZXVlID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRRdWV1ZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnF1ZXVlID0gcmVzcG9uc2UuZGF0YS5yZXBsYWNlKFwiL25cIiwgXCI8YnIvPlwiKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICAkc2NvcGUuZ2V0UXVldWUoKTtcclxuXHJcbiAgICBUZW5UaGluZ3NTdmMuZ2V0UGF1c2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAkc2NvcGUucGF1c2VkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdldFVzZXJzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMuZ2V0VXNlcnMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS51c2VycyA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKCh1c2VyKSA9PiAhdXNlci5hZG1pbik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVCYW4gPSAodXNlcikgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMudG9nZ2xlQmFuKHVzZXIuX2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlUGF1c2UgPSAodXNlcikgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMudG9nZ2xlUGF1c2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5wYXVzZWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5wYXVzZWQpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NHYW1lQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGVQYXJhbXMsIFRlblRoaW5nc1N2YywgVXNlclN2Yykge1xyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5hZG1pbikge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogdXNlcnMgfSA9IGF3YWl0IFVzZXJTdmMuZ2V0VXNlcnMoKTtcclxuICAgICAgICAkc2NvcGUudXNlcnMgPSB1c2Vycy5maWx0ZXIoKHVzZXIpID0+ICF1c2VyLmFkbWluKTtcclxuICAgICAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3JpZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xyXG4gICAgICAgIGlmICgkc3RhdGVQYXJhbXMuZ2FtZSkge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmdldEdhbWUoJHN0YXRlUGFyYW1zLmdhbWUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICRzY29wZS5nYW1lID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmdhbWUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeSA9IGFzeW5jIChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGRpc2FibGVkQ2F0ZWdvcmllcyB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLnVwZGF0ZUdhbWVDYXRlZ29yeSgkc3RhdGVQYXJhbXMuZ2FtZSwgY2F0ZWdvcnkpO1xyXG4gICAgICAkc2NvcGUuZ2FtZS5kaXNhYmxlZENhdGVnb3JpZXMgPSBkaXNhYmxlZENhdGVnb3JpZXM7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRpc2FibGVkQ2F0ZWdvcmllcy5maW5kKChjKSA9PiBjID09PSBjYXRlZ29yeSkpO1xyXG4gICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCBnZXREYXRhKTtcclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc1BsYXlDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEdhbWVTdmMpIHtcclxuICAgICRzY29wZS5rZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAvLyBFbnRlclxyXG4gICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICAkc2NvcGUuY2hlY2tBbnN3ZXIoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIH1cclxuICAgICAgLy8gdXNlIGUua2V5Q29kZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyPy5hZG1pbikge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogZ2FtZSB9ID0gYXdhaXQgR2FtZVN2Yy5nZXRUZW50aGluZ3MoKTtcclxuICAgICAgICAkc2NvcGUubGlzdCA9IGdhbWUubGlzdDtcclxuICAgICAgICAkc2NvcGUudmFsdWVzID0gZ2FtZS5saXN0LnZhbHVlcztcclxuICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlXCIsICRzY29wZS52YWx1ZXMpO1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2hlY2tBbnN3ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFuc3dlciA9ICRzY29wZS5ndWVzcztcclxuICAgICAgJHNjb3BlLmd1ZXNzID0gXCJcIjtcclxuICAgICAgYXdhaXQgR2FtZVN2Yy5hbnN3ZXJUZW50aGluZ3ModW5kZWZpbmVkLCBhbnN3ZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0SGludCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgR2FtZVN2Yy5nZXRUZW50aGluZ3NIaW50KCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5za2lwTGlzdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgR2FtZVN2Yy5za2lwVGVudGhpbmdzTGlzdCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgZ2V0RGF0YSk7XHJcblxyXG4gICAgJHNjb3BlLiRvbihcIndzOnRlbnRoaW5nc19tZXNzYWdlXCIsIGZ1bmN0aW9uIChfLCBkYXRhKSB7XHJcbiAgICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIGlmIChkYXRhLm1lc3NhZ2UpICRzY29wZS50b2FzdChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgIGdldERhdGEoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc1N0YXRzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBUZW5UaGluZ3NTdmMpIHtcclxuICAgICRzY29wZS5sYW5ndWFnZVN0YXRzID0gW107XHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0cyA9IHsgbGFiZWxzOiBbXSwgZGF0YXNldHM6IFtdIH07XHJcblxyXG4gICAgY29uc3QgbGluZUNoYXJ0T3B0aW9ucyA9IHtcclxuICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgcGx1Z2luczoge1xyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICB0ZXh0OiBcIkNoYXJ0LmpzIExpbmUgQ2hhcnRcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXREYXRhID0gKCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5jdXJyZW50VXNlcikgcmV0dXJuO1xyXG4gICAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IFtdO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0UGxheVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFycyA9IF8udW5pcShkYXRhLm1hcCgoeyB5ZWFyIH0pID0+IHllYXIpKS5zb3J0KCk7XHJcbiAgICAgICAgY29uc3QgbW9udGhzID0gXy50aW1lcygxMiwgKGkpID0+IGkgKyAxKTtcclxuICAgICAgICAkc2NvcGUucGxheVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiBtb250aHMsXHJcbiAgICAgICAgICBzZXJpZXM6IHllYXJzLFxyXG4gICAgICAgICAgZGF0YTogeWVhcnMubWFwKCh5ZWFyKSA9PlxyXG4gICAgICAgICAgICBtb250aHMubWFwKChtb250aCkgPT4gZGF0YS5maW5kKChpdGVtKSA9PiBpdGVtLm1vbnRoID09PSBtb250aCAmJiBpdGVtLnllYXIgPT09IHllYXIpPy51bmlxdWVQbGF5ZXJzIHx8IDApLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIG9wdGlvbnM6IGxpbmVDaGFydE9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0TGFuZ3VhZ2VTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeWVhcnMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC55ZWFyKSkuc29ydCgpO1xyXG4gICAgICAgIGNvbnN0IGxhbmd1YWdlcyA9IF8udW5pcShkYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkLmxhbmd1YWdlKSkuc29ydCgpO1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiB5ZWFycyxcclxuICAgICAgICAgIHNlcmllczogbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgZGF0YTogbGFuZ3VhZ2VzLm1hcCgobGFuZ3VhZ2UpID0+XHJcbiAgICAgICAgICAgIHllYXJzLm1hcCgoeWVhcikgPT4gZGF0YS5maW5kKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UgPT09IGxhbmd1YWdlICYmIF9pZC55ZWFyID09PSB5ZWFyKT8uY291bnQgfHwgMCksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgb3B0aW9uczogbGluZUNoYXJ0T3B0aW9ucyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldEdhbWVTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeWVhcnMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC55ZWFyKSkuc29ydCgpO1xyXG4gICAgICAgIGNvbnN0IGxhbmd1YWdlcyA9IF8udW5pcShkYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkLmxhbmd1YWdlKSkuc29ydCgpO1xyXG4gICAgICAgICRzY29wZS5nYW1lU3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IHllYXJzLFxyXG4gICAgICAgICAgc2VyaWVzOiBsYW5ndWFnZXMsXHJcbiAgICAgICAgICBkYXRhOiBsYW5ndWFnZXMubWFwKChsYW5ndWFnZSkgPT5cclxuICAgICAgICAgICAgeWVhcnMubWFwKCh5ZWFyKSA9PiBkYXRhLmZpbmQoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2UgJiYgX2lkLnllYXIgPT09IHllYXIpPy5jb3VudCB8fCAwKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBvcHRpb25zOiBsaW5lQ2hhcnRPcHRpb25zLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RDYXRlZ29yeVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gXy5zb3J0QnkoZGF0YSwgKHsgY291bnQgfSkgPT4gLWNvdW50KTtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogc29ydGVkRGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZCksXHJcbiAgICAgICAgICBkYXRhOiBbc29ydGVkRGF0YS5tYXAoKHsgY291bnQgfSkgPT4gY291bnQpXSxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsICgpID0+IHtcclxuICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignV29ya291dEN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAkc2NvcGUudGltZUV4ZXJjaXNpbmcgPSAzMDtcclxuICAkc2NvcGUudGltZVJlc3RpbmcgPSAxMDtcclxuICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG5cclxuICB2YXIgc291bmRzID0ge1xyXG4gICAgb246IG5ldyBBdWRpbygnb24ud2F2JyksXHJcbiAgICBvZmY6IG5ldyBBdWRpbygnb2ZmLndhdicpLFxyXG4gICAgc3dpdGNoOiBuZXcgQXVkaW8oJ3N3aXRjaC53YXYnKSxcclxuICB9O1xyXG5cclxuXHJcbiAgdmFyIGV4ZXJjaXNlcyA9IFtcclxuICAgIHtuYW1lOiAnSnVtcGluZyBKYWNrcycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1dhbGwgU2l0Jywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUHVzaC1VcCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0NydW5jaCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1N0ZXAtVXAnLCBzcGxpdDogdHJ1ZX0sXHJcbiAgICB7bmFtZTogJ1NxdWF0Jywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnVHJpY2VwcyBEaXAnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQbGFuaycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0hpZ2ggS25lZXMnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdMdW5nZScsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1B1c2gtVXAgd2l0aCBSb3RhdGlvbicsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1NpZGUgUGxhbmsnLCBzcGxpdDogdHJ1ZX1cclxuICBdO1xyXG5cclxuICB2YXIgZXhlcmNpc2luZztcclxuXHJcbiAgJHNjb3BlLnByb2dyZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKGV4ZXJjaXNlcy5sZW5ndGggLSBNYXRoLmZsb29yKCRzY29wZS50aW1lUmVtYWluaW5nIC8gKCRzY29wZS50aW1lRXhlcmNpc2luZyArICRzY29wZS50aW1lUmVzdGluZykpKSArICcvJyArIGV4ZXJjaXNlcy5sZW5ndGg7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLndvcmtvdXQgPSBmdW5jdGlvbigpIHtcclxuICAgIHZhciBleGNlcmNpc2VUaW1lID0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nICsgJHNjb3BlLnRpbWVSZXN0aW5nO1xyXG4gICAgaWYgKCEkc2NvcGUudGltZVJlbWFpbmluZykge1xyXG4gICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IGV4ZXJjaXNlcy5sZW5ndGggKiBleGNlcmNpc2VUaW1lO1xyXG4gICAgICBleGVyY2lzaW5nID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmctLTtcclxuICAgICAgICBpZiAoJHNjb3BlLnRpbWVSZW1haW5pbmcgPT09IDApIHtcclxuICAgICAgICAgICRzY29wZS5leGVyY2lzZSA9IHtuYW1lOiAnRmluaXNoZWQhIENvbmdyYXRzIScsIHNwbGl0OiBmYWxzZX07XHJcbiAgICAgICAgICAkc2NvcGUudGltZXIgPSAnJztcclxuICAgICAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbChleGVyY2lzaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN1cnJlbnRFeGVyY2lzZSA9IE1hdGguZmxvb3IoJHNjb3BlLnRpbWVSZW1haW5pbmcgLyBleGNlcmNpc2VUaW1lKTtcclxuICAgICAgICB2YXIgdGltZXIgPSAkc2NvcGUudGltZVJlbWFpbmluZyAtIGN1cnJlbnRFeGVyY2lzZSAqIGV4Y2VyY2lzZVRpbWU7XHJcbiAgICAgICAgJHNjb3BlLnRpbWVyID0gdGltZXIgPiAkc2NvcGUudGltZUV4ZXJjaXNpbmcgPyB0aW1lciAtICRzY29wZS50aW1lRXhlcmNpc2luZyA6IHRpbWVyO1xyXG4gICAgICAgIGlmICh0aW1lciA+ICRzY29wZS50aW1lRXhlcmNpc2luZykge1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc2NvcGUuZXhlcmNpc2UgPSBleGVyY2lzZXNbZXhlcmNpc2VzLmxlbmd0aCAtIGN1cnJlbnRFeGVyY2lzZSAtIDFdO1xyXG4gICAgICAgIGlmICh0aW1lciA9PT0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nKSB7XHJcbiAgICAgICAgICBzb3VuZHMub24ucGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGltZXIgPT09IDApIHtcclxuICAgICAgICAgIHNvdW5kcy5vZmYucGxheSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmV4ZXJjaXNlLnNwbGl0ICYmIHRpbWVyID09PSBNYXRoLmZsb29yKCRzY29wZS50aW1lRXhlcmNpc2luZyAvIDIpKSB7XHJcbiAgICAgICAgICBzb3VuZHMuc3dpdGNoLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyk7XHJcbiAgICAgICRzY29wZS50aW1lciA9ICcnO1xyXG4gICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICRzY29wZS5leGVyY2lzZSA9IHtuYW1lOiAnJywgc3BsaXQ6IGZhbHNlfTtcclxuICAgIH1cclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnQ2F0ZWdvcmllc1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0Q2F0ZWdvcmllcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcycpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRUYXNrcyA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9jYXRlZ29yaWVzLycgKyBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZENhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9jYXRlZ29yaWVzLycsIGNhdGVnb3J5KTtcclxuICB9O1xyXG5cclxuICBzdmMuYWRkVGFzayA9IGZ1bmN0aW9uIChjYXRlZ29yeSwgdGFzaykge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkgKyAnL3Rhc2tzJywgdGFzayk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHN2Yy5jaG9pY2VzID0gbGlzdDtcclxuICAgIHN2Yy5wcmlvcml0eUxpc3QgPSBbXTtcclxuICAgIC8vTWFrZSBhIG5ldyBjaG9pY2UgbGlzdFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IGxpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICBzdmMucHJpb3JpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICBmaXJzdENob2ljZTogbGlzdFtyYW5kb20gPT09IDAgPyBpIDogal0ubmFtZSxcclxuICAgICAgICAgIHNlY29uZENob2ljZTogbGlzdFtyYW5kb20gPT09IDAgPyBqIDogaV0ubmFtZSxcclxuICAgICAgICAgIGNob2ljZTogJydcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2h1ZmZsZShzdmMucHJpb3JpdHlMaXN0KTtcclxuICAgIGZvciAoaSBpbiBzdmMucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHN2Yy5wcmlvcml0eUxpc3RbaV0uaWQgPSBpICsgMTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UHJpb3JpdHlMaXN0ID0gZnVuY3Rpb24obGlzdCkge1xyXG4gICAgcmV0dXJuIHN2Yy5wcmlvcml0eUxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xyXG4gICAgdmFyIG0gPSBhcnJheS5sZW5ndGgsIHQsIGk7XHJcbiAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZeKAplxyXG4gICAgd2hpbGUgKG0pIHtcclxuICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW504oCmXHJcbiAgICAgIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtLS0pO1xyXG4gICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcbiAgICAgIC8vYXJyYXlbbV0uZmlyc3RDaG9pY2U7XHJcbiAgICAgIHQgPSBhcnJheVttXTtcclxuICAgICAgYXJyYXlbbV0gPSBhcnJheVtpXTtcclxuICAgICAgYXJyYXlbaV0gPSB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0VtYWlsU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5zZW5kID0gZnVuY3Rpb24gKGVtYWlsKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9lbWFpbCcsIGVtYWlsKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJGaWxlU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0UXVpekZpbGVzID0gZnVuY3Rpb24gKHF1aXopIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3F1aXp6ZXMvXCIgKyBxdWl6KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIkdhbWVTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRUZW50aGluZ3MgPSBmdW5jdGlvbiAoaWQgPSAxKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvd2ViL1wiICsgaWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hbnN3ZXJUZW50aGluZ3MgPSBmdW5jdGlvbiAoaWQgPSAxLCBhbnN3ZXIpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3Mvd2ViL1wiICsgaWQgKyBcIi9hbnN3ZXJcIiwgeyBhbnN3ZXIgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFRlbnRoaW5nc0hpbnQgPSBmdW5jdGlvbiAoaWQgPSAxKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL3dlYi9cIiArIGlkICsgXCIvaGludFwiKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2tpcFRlbnRoaW5nc0xpc3QgPSBmdW5jdGlvbiAoaWQgPSAxKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL3dlYi9cIiArIGlkICsgXCIvc2tpcFwiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0SGlnaHNjb3JlID0gZnVuY3Rpb24gKGdhbWUsIHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL2dhbWVzL1wiICsgZ2FtZSArIFwiL1wiICsgdXNlciArIFwiL2hpZ2hzY29yZVwiKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2V0SGlnaHNjb3JlID0gZnVuY3Rpb24gKGdhbWUsIHVzZXIsIHNjb3JlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvZ2FtZXMvXCIgKyBnYW1lICsgXCIvXCIgKyB1c2VyICsgXCIvaGlnaHNjb3JlXCIsIHtcclxuICAgICAgc2NvcmU6IHNjb3JlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmZ1enp5TWF0Y2ggPSBmdW5jdGlvbiAodmFsdWVzLCBndWVzcykge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL2dhbWVzL2Z1enp5X21hdGNoXCIsIHtcclxuICAgICAgdmFsdWVzLFxyXG4gICAgICBndWVzcyxcclxuICAgIH0pO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0xhbmd1YWdlU3ZjJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMubGFuZ3VhZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJFbmdsaXNoXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1nYlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJOZWRlcmxhbmRzXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1ubFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJGcmFuw6dhaXNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWZyXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBzdmMudGV4dCA9IFtcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRU5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiTkxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRlJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gc3ZjLmxhbmd1YWdlc1swXTtcclxuXHJcbiAgc3ZjLnNldExhbmd1YWdlID0gZnVuY3Rpb24gKGxhbmd1YWdlKSB7XHJcbiAgICBzdmMuc2VsZWN0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBzdmMuc2VsZWN0ZWRMYW5ndWFnZTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnUG9zdHNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmZldGNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cycpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGUgPSBmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCBwb3N0KTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UG9zdCA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzLycgKyBwb3N0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiVGVuVGhpbmdzU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0UXVldWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYm90cy90ZW50aGluZ3MvcXVldWVgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdHMgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7XHJcbiAgICB2YXIgdXJsID1cclxuICAgICAgYC9hcGkvdGVudGhpbmdzL2xpc3RzP2AgK1xyXG4gICAgICAob3B0aW9ucy5saW1pdCA/IGAmbGltaXQ9JHtvcHRpb25zLmxpbWl0fWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnBhZ2UgPyBgJnBhZ2U9JHtvcHRpb25zLnBhZ2V9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuc29ydEJ5ID8gYCZzb3J0X2J5PSR7b3B0aW9ucy5zb3J0Qnl9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMub3JkZXJCeSA/IGAmb3JkZXJfYnk9JHtvcHRpb25zLm9yZGVyQnl9YCA6IFwiXCIpICtcclxuICAgICAgLy8gYCZjcmVhdG9yPTVhZTE1ZjE0YjVmNzg4M2ZmMDQ5NzMzOWAgK1xyXG4gICAgICAob3B0aW9ucy5sYW5ndWFnZSAmJiBvcHRpb25zLmxhbmd1YWdlLmxlbmd0aCA+IDAgPyBgJmxhbmd1YWdlPSR7b3B0aW9ucy5sYW5ndWFnZS5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5jYXRlZ29yaWVzICYmIG9wdGlvbnMuY2F0ZWdvcmllcy5sZW5ndGggPiAwID8gYCZjYXRlZ29yaWVzPSR7b3B0aW9ucy5jYXRlZ29yaWVzLmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLmxhbmd1YWdlTm90ICYmIG9wdGlvbnMubGFuZ3VhZ2VOb3QubGVuZ3RoID4gMCA/IGAmIWxhbmd1YWdlPSR7b3B0aW9ucy5sYW5ndWFnZU5vdC5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5jYXRlZ29yaWVzTm90ICYmIG9wdGlvbnMuY2F0ZWdvcmllc05vdC5sZW5ndGggPiAwXHJcbiAgICAgICAgPyBgJiFjYXRlZ29yaWVzPSR7b3B0aW9ucy5jYXRlZ29yaWVzTm90LmpvaW4oXCIsXCIpfWBcclxuICAgICAgICA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuc2VhcmNoID8gYCZzZWFyY2g9JHtvcHRpb25zLnNlYXJjaH1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5uYW1lID8gYCZuYW1lPSR7b3B0aW9ucy5uYW1lfWAgOiBcIlwiKTtcclxuXHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFJhbmRvbUxpc3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvbGlzdHMvcmFuZG9tYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNlYXJjaExpc3RzID0gKG5hbWUpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL3NlYXJjaC9saXN0LW5hbWVzLyR7bmFtZX1gKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2NhdGVnb3JpZXNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGFuZ3VhZ2VzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvbGFuZ3VhZ2VzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wdXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkLCBsaXN0KTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlTGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzXCIsIHsgdXNlciwgbGlzdCB9KTtcclxuICB9O1xyXG5cclxuICBzdmMubWVyZ2VMaXN0cyA9IGZ1bmN0aW9uIChsaXN0cykge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9tZXJnZVwiLCB7IGxpc3RzOiBsaXN0cyB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuZGVsZXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0SWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3RJZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnB1dChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXMvXCIgKyB2YWx1ZS5faWQsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXNcIiwgdmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5kZWxldGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzL1wiICsgdmFsdWUuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMucmVwb3J0TGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvcmVwb3J0L1wiICsgdXNlci5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9jYXRlZ29yaWVzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0TGFuZ3VhZ2VTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9sYW5ndWFnZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBsYXlTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9wbGF5XCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRHYW1lU3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvZ2FtZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEJsdXJicyA9IGZ1bmN0aW9uIChsaXN0LCB0eXBlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvbGlzdHMvJHtsaXN0Ll9pZH0vYmx1cmJzLyR7dHlwZX1gKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRHYW1lID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9nYW1lcy8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVHYW1lQ2F0ZWdvcnkgPSBmdW5jdGlvbiAoaWQsIGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvZ2FtZXMvJHtpZH0vY2F0ZWdvcnkvJHtjYXRlZ29yeX1gKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlVzZXJTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFVzZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnMvYWxsXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVCYW4gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3VzZXJzL2Jhbi8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSB0b2tlbjtcclxuICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hdXRoZW50aWNhdGVcIiwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9sb2dpblwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyLl9pZCwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi92ZXJpZmljYXRpb25cIiwge1xyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvcGFzc3dvcmRcIiwge1xyXG4gICAgICBvbGRQYXNzd29yZDogb2xkUGFzc3dvcmQsXHJcbiAgICAgIG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VyLCBuZXdVc2VybmFtZSkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi91c2VybmFtZVwiLCB7XHJcbiAgICAgICAgbmV3VXNlcm5hbWU6IG5ld1VzZXJuYW1lLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlF1aXpBbmltYWxzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgJHNjb3BlLmFuaW1hbHMgPSBbXTtcclxuXHJcbiAgRmlsZVN2Yy5nZXRRdWl6RmlsZXMoXCJhbmltYWxzXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShcclxuICAgICAgcmVzcG9uc2UuZGF0YS5tYXAoKGFuaW1hbCkgPT4gKHtcclxuICAgICAgICBzb3VuZDogYW5pbWFsLFxyXG4gICAgICAgIG5hbWU6IGFuaW1hbC5zdWJzdHJpbmcoMCwgYW5pbWFsLmluZGV4T2YoXCIuXCIpKS5yZXBsYWNlKFwiX1wiLCBcIiBcIikuY2FwaXRhbGl6ZSgpLFxyXG4gICAgICB9KSksXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgIGFuaW1hbC5hbnN3ZXJzID0gXy5zaHVmZmxlKFthbmltYWwubmFtZSwgLi4uZ2V0UmFuZG9tQW5pbWFscyhhbmltYWwubmFtZSldKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgIGFuaW1hbC5ndWVzcyA9IGd1ZXNzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSAobmFtZSkgPT5cclxuICAgIF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gbmFtZSAhPT0gYW5pbWFsLm5hbWUpLm1hcCgoYW5pbWFsKSA9PiBhbmltYWwubmFtZSkpLnNsaWNlKDAsIDUpO1xyXG5cclxuICAkc2NvcGUuZ2V0U2NvcmUgPSAoKSA9PlxyXG4gICAgYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IGFuaW1hbC5uYW1lID09PSBhbmltYWwuZ3Vlc3MpLmxlbmd0aH0vJHskc2NvcGUuYW5pbWFscy5sZW5ndGh9YDtcclxuXHJcbiAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IGFuaW1hbC5ndWVzcykubGVuZ3RoID09PSAkc2NvcGUuYW5pbWFscy5sZW5ndGg7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUXVpekdvb2dsZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0UXVpekZpbGVzKFwiZ29vZ2xlXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJRdWl6TG9nb3NDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldFF1aXpGaWxlcyhcImxvZ29zXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJRdWl6TW92aWVzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRRdWl6RmlsZXMoXCJtb3ZpZXNcIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlF1aXpTa2VsZXRvbnNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICAkc2NvcGUuYW5pbWFscyA9IFtdO1xyXG5cclxuICBGaWxlU3ZjLmdldFF1aXpGaWxlcyhcInNrZWxldG9uc1wiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmFuaW1hbHMgPSBfLnNodWZmbGUoXHJcbiAgICAgIHJlc3BvbnNlLmRhdGEubWFwKChhbmltYWwpID0+ICh7XHJcbiAgICAgICAgaW1hZ2U6IGFuaW1hbCxcclxuICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKFwiLlwiKSkucmVwbGFjZShcIl9cIiwgXCIgXCIpLmNhcGl0YWxpemUoKSxcclxuICAgICAgfSkpLFxyXG4gICAgKTtcclxuICAgIGZvciAobGV0IGFuaW1hbCBvZiAkc2NvcGUuYW5pbWFscykge1xyXG4gICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5ndWVzcyA9IChhbmltYWwsIGd1ZXNzKSA9PiB7XHJcbiAgICBhbmltYWwuZ3Vlc3MgPSBndWVzcztcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRSYW5kb21BbmltYWxzID0gKG5hbWUpID0+XHJcbiAgICBfLnNodWZmbGUoJHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoKGFuaW1hbCkgPT4gYW5pbWFsLm5hbWUpKS5zbGljZSgwLCAxMCk7XHJcblxyXG4gICRzY29wZS5nZXRTY29yZSA9ICgpID0+XHJcbiAgICBgJHskc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAkc2NvcGUuaXNTY29yZVZpc2libGUgPSAoKSA9PiAkc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxufSk7XHJcbiJdfQ==
