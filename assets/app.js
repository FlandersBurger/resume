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
    $mdToast.show($mdToast.simple().textContent(message).position("bottom right").hideDelay(3e3));
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
    if ($scope.currentUser.admin) {
      const {
        data: game
      } = await GameSvc.getTenthings();
      console.log("game", game), $scope.list = game.list, $scope.values = _.sampleSize(game.list.values, 10), console.log("list", $scope.list), console.log("value", $scope.values), $scope.$apply();
    }
  };
  $scope.checkAnswer = async () => {
    await GameSvc.answerTenthings(void 0, $scope.guess), $scope.guess = "";
  }, $scope.getHint = async () => {
    await GameSvc.getTenthingsHint();
  }, $scope.$watch("currentUser", getData), $scope.$on("ws:tenthings_message", function () {
    $scope.$apply(function () {
      getData();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJjb250cm9sbGVycy9hcHAuY3RybC5qcyIsImNvbnRyb2xsZXJzL2FzdGVyb2lkcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvYnViYmxlcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvY2hhcmFkZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NvbnRhY3QuY3RybC5qcyIsImNvbnRyb2xsZXJzL2V4cGVyaWVuY2UuY3RybC5qcyIsImNvbnRyb2xsZXJzL2hvYmJpZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xlbW1pbmdzLmN0cmwuanMiLCJjb250cm9sbGVycy9saXN0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbG9naW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3Bvc3RzLmN0cmwuanMiLCJjb250cm9sbGVycy9wcm9maWxlLmN0cmwuanMiLCJjb250cm9sbGVycy9za2lsbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvdGVudGhpbmdzYWRtaW4uY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2dhbWUuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc3BsYXkuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc3N0YXRzLmN0cmwuanMiLCJjb250cm9sbGVycy93b3Jrb3V0LmN0cmwuanMiLCJzZXJ2aWNlcy9jYXRlZ29yaWVzLnN2Yy5qcyIsInNlcnZpY2VzL2VtYWlsLnN2Yy5qcyIsInNlcnZpY2VzL2ZpbGUuc3ZjLmpzIiwic2VydmljZXMvZ2FtZS5zdmMuanMiLCJzZXJ2aWNlcy9sYW5ndWFnZS5zdmMuanMiLCJzZXJ2aWNlcy9wb3N0cy5zdmMuanMiLCJzZXJ2aWNlcy90ZW50aGluZ3Muc3ZjLmpzIiwic2VydmljZXMvdXNlci5zdmMuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2FuaW1hbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvZ29vZ2xlLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2xvZ29zLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL21vdmllcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9za2VsZXRvbnMuY3RybC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRvbWFpbnMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0cmluZyIsInByb3RvdHlwZSIsInZhbHVlIiwicmVkdWNlIiwicmVzdWx0IiwibGV0dGVyIiwicmVwbGFjZSIsInRoaXMiLCJTUEVDSUFMX0NIQVJBQ1RFUlMiLCJWT1dFTFMiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZURpYWNyaXRpY3MiLCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyIsImV4dHJhIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiY29uY2VhbCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJyZXBsYWNlQWxsIiwiZmluZCIsInJlcGxhY2VTdHJpbmciLCJpIiwicmVwbGFjZUFycmF5IiwiTnVtYmVyIiwidG9TdHJpbmciLCJkZWNpbWFscyIsInVuZGVmaW5lZCIsInRvRml4ZWQiLCJzb3J0T2JqZWN0Iiwib2JqIiwiZGlyZWN0aW9uIiwiYXJyIiwia2V5IiwicHVzaCIsInNvcnQiLCJhIiwiYiIsIm9ialNvcnRlZCIsImZvckVhY2giLCJpdGVtIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwiJHVybFNlcnZpY2VQcm92aWRlciIsIiRsb2NhdGlvblByb3ZpZGVyIiwib3RoZXJ3aXNlIiwic3RyaWN0TW9kZSIsInN0YXRlIiwidXJsIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIiwiaHRtbDVNb2RlIiwiZW5hYmxlZCIsInJlcXVpcmVCYXNlIiwic2VydmljZSIsIiRyb290U2NvcGUiLCIkdGltZW91dCIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiV2ViU29ja2V0Iiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3QiLCJvbm9wZW4iLCJjb25zb2xlIiwibG9nIiwib25jbG9zZSIsImUiLCJvbmVycm9yIiwicmVhZHlTdGF0ZSIsIm9ubWVzc2FnZSIsInBheWxvYWQiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiJGJyb2FkY2FzdCIsInRvcGljIiwic2VuZCIsImpzb24iLCJzdHJpbmdpZnkiLCJydW4iLCJXZWJTb2NrZXRTdmMiLCJkaXJlY3RpdmUiLCIkZG9jdW1lbnQiLCJyZXN0cmljdCIsInNjb3BlIiwiY2xpY2tPdXRzaWRlIiwibGluayIsImVsIiwiYXR0ciIsIm9uIiwidGFyZ2V0IiwiY29udGFpbnMiLCIkYXBwbHkiLCIkZXZhbCIsIiRzdGF0ZSIsIiRjb21waWxlIiwiJGludGVycG9sYXRlIiwiZ2V0U3R5bGUiLCJ0ZW1wbGF0ZVN0eWxlVXJsIiwic3R5bGUiLCJocmVmIiwicmVsIiwibWF0Y2giLCJlbGVtIiwidGVtcGxhdGVTdHlsZXMiLCJodG1sIiwic3RhcnRTeW1ib2wiLCJlbmRTeW1ib2wiLCJhcHBlbmQiLCIkb24iLCJldmVudCIsInRvU3RhdGUiLCJ0b1BhcmFtcyIsImZyb21TdGF0ZSIsImZyb21QYXJhbXMiLCJzdGF0ZXMiLCJuYW1lIiwicGFyZW50IiwiZ2V0Iiwidmlld3MiLCJfIiwidmlldyIsInNwbGl0IiwiZmxhdCIsImluY2x1ZGVzIiwicmV2ZXJzZSIsImdldFN0eWxlcyIsIiRzY29wZSIsIkxhbmd1YWdlU3ZjIiwiVXNlclN2YyIsIiRtZFRvYXN0IiwidG9hc3QiLCJtZXNzYWdlIiwic2hvdyIsInNpbXBsZSIsInRleHRDb250ZW50IiwicG9zaXRpb24iLCJoaWRlRGVsYXkiLCIkIiwibG9hZCIsImZhZGVPdXQiLCJmYWRlSW4iLCJjbG9zZXN0IiwidG9nZ2xlQ2xhc3MiLCJjaGVja2VkIiwiZG9jdW1lbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJ0aGVtZUNvdW50ZXIiLCJ0b2RheSIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJyYW5kb20iLCJNYXRoIiwiZmxvb3IiLCJmbGlwVGhlbWUiLCJoaWRlIiwic2V0VGltZW91dCIsImdldEpTT04iLCJza2lsbHMiLCJmaWx0ZXIiLCJza2lsbCIsImhvYmJpZXMiLCJqb2JzIiwiam9iIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImNoYXJhZGVzIiwiZ2V0VGltZVNwYW4iLCJsYW5ndWFnZXMiLCJzZWxlY3RlZExhbmd1YWdlIiwiZ2V0TGFuZ3VhZ2UiLCJzZWxlY3RMYW5ndWFnZSIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJob3ZlcmRpdiIsImRpdmlkIiwibGVmdCIsImNsaWVudFgiLCJ0b3AiLCJjbGllbnRZIiwiZ2V0RWxlbWVudEJ5SWQiLCJjc3MiLCJ0b2dnbGUiLCJsb2NhbFN0b3JhZ2UiLCJ1c2VyIiwibG9naW4iLCJ0aGVuIiwicmVzcG9uc2UiLCJsb2dnZWRJbiIsIl9pZCIsImN1cnJlbnRVc2VyIiwiYmlydGhEYXRlIiwibG9hZGluZyIsImxvZ291dCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25PdXQiLCJjbGVhciIsImNhdGNoIiwiZXJyb3IiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsIiRsb2NhdGlvbiIsIkdhbWVTdmMiLCJhbm5vdW5jZSIsImNhbnZhcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGF0aCIsImFsZXJ0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImZvbnQiLCJmaWxsU3R5bGUiLCJ0ZXh0QWxpZ24iLCJzaG90cyIsImFzdGVyb2lkcyIsInBvd2VydXBzIiwiZXhwbG9zaW9ucyIsIm1hcCIsInNwYWNlcGljcyIsInNwYWNlIiwicG93ZXJ1cFR5cGVzIiwiYW5ub3VuY2VtZW50IiwiY3ljbGUiLCJyb3dzIiwiY29sdW1ucyIsInNpemUiLCJpbWciLCJJbWFnZSIsImFjdGl2YXRlIiwic3BhY2VzaGlwIiwibWF4U3BlZWQiLCJjb29sZG93biIsImNvb2xkb3duVGltZSIsInJhbmdlIiwic2hpZWxkIiwiZXhwbG9kZSIsInNwYXduQXN0ZXJvaWRzIiwicG93ZXJ1cCIsImFycmF5Iiwic3JjIiwiZXhwbG9zaW9uSW1hZ2UiLCJldmFsdWF0ZUtleXMiLCJwbGF5aW5nIiwic2hvb3QiLCJyb3RhdGlvbiIsInNwZWVkIiwic2NvcmUiLCJTcGFjZXNoaXAiLCJhdXRvU3Bhd24iLCJ3aWR0aCIsImhlaWdodCIsImNhbm5vbiIsIngiLCJ5IiwiYW5nbGUiLCJpZCIsInJvdW5kIiwiU2hvdCIsIm1vdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZmlsbCIsImFzdGVyb2lkIiwiaGl0IiwiZ2FtZU92ZXIiLCJjb3MiLCJzaW4iLCJsaWZlc3BhbiIsIkFzdGVyb2lkIiwiZ2V0RW50cnlQb3NpdGlvbiIsInJvdGF0aW9uU3BlZWQiLCJFeHBsb3Npb24iLCJzaG90IiwicG9pbnRzIiwic3Bhd25Qb3dlcnVwIiwib2JqZWN0IiwiUG93ZXJ1cCIsImRlbGF5Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImNvbHVtbiIsInJvdyIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJncmlkWCIsImdyaWRZIiwib2JqZWN0MSIsIm9iamVjdDIiLCJrZXlzIiwiYW1vdW50IiwiaGlnaHNjb3JlIiwic2V0SGlnaHNjb3JlIiwicmVzaXplQ2FudmFzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleUNvZGUiLCJ3aGljaCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXciLCJjbGVhclJlY3QiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwidGFsbHkiLCJmaWxsVGV4dCIsIm1lYXN1cmVUZXh0IiwiYmFja2dyb3VuZEltYWdlIiwiYnViYmxlcyIsImNvbG9ycyIsIkJ1YmJsZSIsInJhZGl1cyIsImV4cGFuZGluZyIsImNpcmN1bWZlcmVuY2UiLCJtYXhSYWRpdXMiLCJ2eCIsInZ5IiwiZmlsdGVyQnViYmxlcyIsImJ1YmJsZSIsInNlbGVjdFdvcmQiLCJjYXRlZ29yeSIsIndvcmQiLCJFbWFpbFN2YyIsIm9wdGlvbnMiLCJ0ZXh0IiwiY29udGFjdCIsImVtYWlsIiwicGhvbmUiLCJhYm91dCIsInNlbmRpbmciLCJzZW50Iiwic3RhdHVzIiwiZXJyIiwiZ2V0U2tpbGwiLCJza2lsbENvZGUiLCJjb2RlIiwiJHdpbmRvdyIsImhvYmJ5U2VsZWN0b3JWaXNpYmxlIiwic2VsZWN0ZWRIb2JieSIsInNlbGVjdEhvYmJ5IiwiaG9iYnkiLCJzaG93SG9iYnkiLCJpbmRleCIsImltYWdlcyIsIkxFRlQiLCJSSUdIVCIsImxlbW1pbmdzSW1hZ2UiLCJkZWNvckltYWdlIiwibGVtbWluZ3MiLCJzdGFydGVkIiwiYWN0aW9ucyIsIndhbGsiLCJzdGFydCIsImVuZCIsImh1aCIsImZhbGwiLCJmbHkiLCJzdG9wIiwiY2xpbWIiLCJidWlsZCIsInB1bmNoIiwiZGlnIiwiTGVtbWluZyIsImluaXQiLCJhY3QiLCJhY3Rpb24iLCJhbmltYXRpb24iLCJzY2FsZSIsImhhdGNoIiwib3BlbiIsInJlY3QiLCJDYXRlZ29yaWVzU3ZjIiwic2hvd0NhdGVnb3J5IiwiZ2V0Q2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJ0YXNrcyIsImoiLCJ0YXNrIiwic2VsZWN0Q2F0ZWdvcnkiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2VsZWN0ZWRUYXNrcyIsInNlbGVjdGFibGVUYXNrcyIsImVudGVyZWRDYXRlZ29yeSIsIm5ld0NhdGVnb3J5IiwiZm91bmQiLCJhZGRDYXRlZ29yeSIsIm5ld1Rhc2siLCJzZWxlY3RUYXNrIiwiYWRkVGFzayIsImVudGVyZWRUYXNrIiwicmVtb3ZlVGFzayIsInVuc2VsZWN0VGFzayIsInRhc2tMaXN0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInN0YXJ0UHJpb3JpdGl6aW5nIiwic2V0UHJpb3JpdHlMaXN0IiwiZ2V0UXVlc3Rpb25zIiwiY291bnRlciIsInVpIiwiZmlyZWJhc2V1aSIsIkF1dGhVSSIsInN0YXJ0VUkiLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzIiwiY3JlZGVudGlhbCIsInJlZGlyZWN0VXJsIiwiZ2V0SWRUb2tlbiIsImlkVG9rZW4iLCJhdXRoZW50aWNhdGUiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWxWZXJpZmllZCIsIiRlbWl0IiwibW9kYWwiLCJzaWduSW5GYWlsdXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjcmVkIiwic2lnbkluV2l0aENyZWRlbnRpYWwiLCJ1aVNob3duIiwiZGlzcGxheSIsInNpZ25JblN1Y2Nlc3NVcmwiLCJzaWduSW5PcHRpb25zIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiUFJPVklERVJfSUQiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsInNpZ25JbkZsb3ciLCJyZXNldCIsIiRmaWx0ZXIiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsImJvZHkiLCJwb3N0IiwiZmV0Y2giLCJwb3N0cyIsImdldFBvc3QiLCJ1bnNoaWZ0IiwiY291bnRyaWVzIiwiZmxhZyIsInRpZGJpdCIsImRhdGVPcHRpb25zIiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJpbml0RGF0ZSIsImRhdGVwaWNrZXJNb2RlIiwidXNlcm5hbWVUb2dnbGUiLCJwYXNzd29yZFRvZ2dsZSIsInRvZ2dsZVVzZXJuYW1lIiwibmV3VXNlcm5hbWUiLCJ1c2VybmFtZSIsInRvZ2dsZVBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJjaGVja1Bhc3N3b3JkIiwicGFzc3dvcmQiLCJvcmlnaW5hbEJnIiwiYW5pbWF0ZSIsImJhY2tncm91bmRDb2xvciIsImNoYW5nZVBhc3N3b3JkIiwib2xkUGFzc3dvcmQiLCJjaGFuZ2VVc2VybmFtZSIsInVwZGF0ZVVzZXIiLCJmbGFncyIsInVzZXJGbGFncyIsImxvYWRDb3VudHJpZXMiLCIkcXVlcnkiLCJjb3VudHJ5IiwiJHdhdGNoIiwic2VsZWN0ZWRTa2lsbCIsInNraWxsc1Zpc2libGUiLCJwcm9qZWN0cyIsImxhYmVscyIsImVtcGxveWVyIiwiY29uY2F0IiwiZmlsdGVyZWRQcm9qZWN0cyIsInByb2plY3QiLCJzZXRTZWxlY3RlZFNraWxsIiwiY2hhcnRPcHRpb25zIiwiY3V0b3V0UGVyY2VudGFnZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJ0b29sdGlwcyIsImNoYXJ0U3R5bGUiLCJpbWFnZSIsIiRzY2UiLCJUZW5UaGluZ3NTdmMiLCJwYWdlIiwibGlzdHMiLCJzZWFyY2giLCJzZWFyY2hGaWVsZCIsIm5ld0l0ZW0iLCJsYW5ndWFnZUZpbHRlciIsImNhdGVnb3J5RmlsdGVyIiwic2VsZWN0ZWRMaXN0IiwiaGlnaGxpZ2h0ZWRMaXN0cyIsImhpZ2hsaWdodGVkTGlzdElkcyIsImxpc3RJZHNUb0RlbGV0ZSIsImNvbmZpcm1lZCIsImV4aGF1c3RlZCIsIm9iamVjdENhdGVnb3JpZXMiLCJibHVyYlR5cGVzIiwiYXBpIiwiYWRtaW5Pbmx5IiwiaGF2ZUNvbW1vbkl0ZW1zIiwiYXJyMSIsImFycjIiLCJzb21lIiwia2V5RG93biIsImlzIiwiY3JlYXRlVmFsdWUiLCJ0cmlnZ2VyIiwiYWRkTGlzdCIsImNyZWF0b3IiLCJ2YWx1ZXMiLCJhbnN3ZXJzIiwiaXNEeW5hbWljIiwic2V0U2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRMaXN0IiwibGlzdCIsImdldExpc3QiLCJyZWFkT25seSIsImFkbWluIiwiZ2V0RmlsdGVyQ291bnQiLCJzZWFyY2hMaXN0cyIsImFzeW5jIiwidmlld1ZhbHVlIiwiaGlnaGxpZ2h0ZWRTZWFyY2hUZXh0IiwicmVnZXgiLCJ2YWx1ZU9yZGVyIiwiZmllbGQiLCJvcmRlciIsIm9yZGVyQnkiLCJnZXRMaXN0cyIsImdldE1vcmVMaXN0cyIsInNldExhbmd1YWdlRmlsdGVyIiwic2V0Q2F0ZWdvcnlGaWx0ZXIiLCJ0b2dnbGVDYXRlZ29yeUZpbHRlciIsImFsbENhdGVnb3JpZXMiLCJnZXRDYXRlZ29yeUxhYmVsIiwic3ViY2F0ZWdvcmllcyIsInN1YmNhdGVnb3J5Iiwic3RhcnRzV2l0aCIsImxhYmVsIiwiam9pbiIsInNvcnRCeSIsImxpbWl0IiwibGFuZ3VhZ2VOb3QiLCJjYXRlZ29yaWVzTm90IiwiY291bnQiLCJuZXh0UGFnZSIsImdldExpc3ROYW1lIiwibGlzdElkIiwidXBkYXRlVmFsdWUiLCJ1cGRhdGVkSXRlbVJlc3BvbnNlIiwidXBkYXRlTGlzdFZhbHVlIiwiYmx1cmJUeXBlIiwiZGVsZXRlVmFsdWUiLCJoYXNEdXBsaWNhdGUiLCJjcmVhdGVkSXRlbVJlc3BvbnNlIiwiY3JlYXRlTGlzdFZhbHVlIiwidXBzZXJ0TGlzdCIsImJsdXJiIiwidmFsdWVUb0RlbGV0ZSIsImRlbGV0ZUxpc3RWYWx1ZSIsInVwZGF0ZUxpc3QiLCJ1cGRhdGVzIiwic2F2aW5nIiwibGlzdEluZGV4IiwiZmluZEluZGV4IiwiY2hhbmdlcyIsImNyZWF0ZUxpc3QiLCJhc3NpZ24iLCJkZWxldGVMaXN0IiwiZGVsZXRlTGlzdHMiLCJjb25maXJtTWVyZ2VMaXN0cyIsIm1lcmdlTGlzdHMiLCJjb25maXJtRGVsZXRlTGlzdHMiLCJ0b2dnbGVIaWdobGlnaHRlZExpc3RzIiwidG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0IiwiaGlnaGxpZ2h0ZWRMaXN0SWQiLCJzZXREaWZmaWN1bHR5IiwiZGlmZmljdWx0eSIsInNldEZyZXF1ZW5jeSIsImZyZXF1ZW5jeSIsImdldFVwZGF0ZWRDYXRlZ29yaWVzIiwibGlzdENhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJ1cGRhdGVkQ2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJsaXN0c1RvVXBkYXRlIiwiZXZlcnkiLCJhbGwiLCJsaXN0VG9VcGRhdGUiLCJ1cGRhdGVkTGlzdCIsImNhdGVnb3J5U3RhdHVzIiwiYW5zd2VyIiwicmVtb3ZlQWxsQnV0TGV0dGVycyIsImdldFNlbGVjdGVkTGlzdHNUaXRsZSIsImdldEJsdXJicyIsInR5cGUiLCJnZXR0aW5nQmx1cmJzIiwiZ2V0RW1iZWRVcmwiLCJ2aWRlb0lkIiwidHJpbSIsInRydXN0QXNSZXNvdXJjZVVybCIsImdldExhbmd1YWdlcyIsImxhbmd1YWdlU3RhdHMiLCJnZXRMaXN0TGFuZ3VhZ2VTdGF0cyIsImNhdGVnb3J5U3RhdHMiLCJnZXRMaXN0Q2F0ZWdvcnlTdGF0cyIsImdldFVzZXJzIiwiZ2V0UXVldWUiLCJxdWV1ZSIsImdldFBhdXNlIiwicGF1c2VkIiwidXNlcnMiLCJ0b2dnbGVCYW4iLCJ0b2dnbGVQYXVzZSIsIiRzdGF0ZVBhcmFtcyIsImRpc2FibGVkQ2F0ZWdvcmllcyIsInVwZGF0ZUdhbWVDYXRlZ29yeSIsImdhbWUiLCJjIiwiZ2V0R2FtZSIsImNoZWNrQW5zd2VyIiwiZ2V0RGF0YSIsImdldFRlbnRoaW5ncyIsInNhbXBsZVNpemUiLCJhbnN3ZXJUZW50aGluZ3MiLCJndWVzcyIsImdldEhpbnQiLCJnZXRUZW50aGluZ3NIaW50IiwiZGF0YXNldHMiLCJsaW5lQ2hhcnRPcHRpb25zIiwicmVzcG9uc2l2ZSIsInBsdWdpbnMiLCJsZWdlbmQiLCJ0aXRsZSIsImdldFBsYXlTdGF0cyIsInllYXJzIiwidW5pcSIsIm1vbnRocyIsInRpbWVzIiwicGxheVN0YXRzIiwic2VyaWVzIiwibW9udGgiLCJ1bmlxdWVQbGF5ZXJzIiwiZ2V0R2FtZVN0YXRzIiwiZ2FtZVN0YXRzIiwic29ydGVkRGF0YSIsInRpbWVSZW1haW5pbmciLCJ0aW1lRXhlcmNpc2luZyIsInRpbWVSZXN0aW5nIiwicmVzdCIsImV4ZXJjaXNpbmciLCJzb3VuZHMiLCJBdWRpbyIsIm9mZiIsInN3aXRjaCIsImV4ZXJjaXNlcyIsInByb2dyZXNzIiwid29ya291dCIsImV4Y2VyY2lzZVRpbWUiLCJjbGVhckludGVydmFsIiwidGltZXIiLCJleGVyY2lzZSIsInNldEludGVydmFsIiwiY3VycmVudEV4ZXJjaXNlIiwicGxheSIsIiRodHRwIiwic3ZjIiwiZ2V0VGFza3MiLCJjaG9pY2VzIiwicHJpb3JpdHlMaXN0IiwiZmlyc3RDaG9pY2UiLCJzZWNvbmRDaG9pY2UiLCJjaG9pY2UiLCJ0IiwibSIsInNodWZmbGUiLCJnZXRQcmlvcml0eUxpc3QiLCJnZXRRdWl6RmlsZXMiLCJxdWl6IiwiZ2V0SGlnaHNjb3JlIiwiZnV6enlNYXRjaCIsImdldFJhbmRvbUxpc3QiLCJwdXQiLCJkZWxldGUiLCJyZXBvcnRMaXN0IiwiZ2V0VXNlciIsInNldFRva2VuIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJjb21tb24iLCJjcmVhdGVVc2VyIiwiRmlsZVN2YyIsImFuaW1hbHMiLCJhbmltYWwiLCJzb3VuZCIsImNhcGl0YWxpemUiLCJnZXRSYW5kb21BbmltYWxzIiwiZ2V0U2NvcmUiLCJpc1Njb3JlVmlzaWJsZSJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBQUEsMkJBQUFBLEdBQUEsQ0FDQTtJQUNBQyxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQTtFQUdBQyxPQUFBQSxHQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxDQUFBO0FBR0FDLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsa0JBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFSLDJCQUFBQSxDQUFBUyxNQUFBQSxDQUFBLENBQUFDLE1BQUFBLEVBQUFDLE1BQUFBLEtBQ0FELE1BQUFBLENBQUFFLE9BQUFBLENBQUFELE1BQUFBLENBQUFULE9BQUFBLEVBQUFTLE1BQUFBLENBQUFWLElBQUFBLENBQUFBLEVBQ0FZLElBQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQTtBQUdBLE1BQUFDLGtCQUFBQSxHQUFBLHFDQUFBO0VBQ0FDLE1BQUFBLEdBQUEsd0VBQUE7QUFFQVgsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSx5QkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxJQUFBSSxNQUFBQSxDQUFBLElBQUFGLGtCQUFBQSxHQUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FWLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEscUJBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFJLFdBQUFBLEVBQUFBLENBQUFDLGdCQUFBQSxFQUFBQSxDQUFBQyx1QkFBQUEsRUFDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FmLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsU0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQVksS0FBQUEsRUFBQUE7SUFDQSxPQUFBUCxJQUFBQSxDQUFBRCxPQUFBQSxDQUFBLElBQUFJLE1BQUFBLENBQUEsS0FBQUYsa0JBQUFBLEdBQUFNLEtBQUFBLEdBQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsR0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWhCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsZUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQVksS0FBQUEsRUFBQUE7SUFDQSxPQUFBUCxJQUFBQSxDQUFBUSxNQUFBQSxHQUFBLENBQUEsR0FBQVIsSUFBQUEsR0FBQUEsSUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQUEsSUFBQUEsQ0FBQVMsU0FBQUEsQ0FBQSxDQUFBLEVBQUFULElBQUFBLENBQUFRLE1BQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUFFLE9BQUFBLENBQUFILEtBQUFBLENBQUFBLEdBQUFQLElBQUFBLENBQUFBLElBQUFBLENBQUFRLE1BQUFBLEdBQUEsQ0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWpCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsWUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQVcsTUFB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QSxFQUFBLFNBQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFlBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGFBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsUUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLFlBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxXQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsVUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsV0FBQTtJQUNBRSxVQUFBQSxFQUFBLGNBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE1BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLE9BQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsaUJBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsb0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGdCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxpQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxvQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsZ0JBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGlCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsbUJBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsWUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxpQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsZ0JBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxtQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxVQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxXQUFBO0lBQ0FFLFVBQUFBLEVBQUEsY0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLEVBR0FMLGlCQUFBQSxDQUFBTyxTQUFBQSxDQUFBO0lBQ0FDLE9BQUFBLEVBQUFBLENBQUEsQ0FBQTtJQUNBQyxXQUFBQSxFQUFBQSxDQUFBO0VBQUEsQ0FBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDeklBZixPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBZSxPQUFBQSxDQUFBLGNBQUEsRUFBQSxVQUFBQyxVQUFB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QUNBL0osSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBK0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FoSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUErSixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQWhLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQStKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxDQUFBLEVBRUFILFFBQUFBLENBQUFFLFlBQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsR0FDQS9KLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQStKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBaEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBK0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FoSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUErSixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLEtBQUEsRUFDQSxNQUFBLEdBQ0EvSixJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUErSixLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQWhLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQStKLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBaEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBK0osS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FDQSxNQUFBLEVBQ0EsTUFBQSxHQUNBL0os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QUE7UUFDQXRHLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUErTyxJQUFBQSxFQUFBO1FBQ0FILEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsRUFBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F0SSxPQUFBQSxFQUFBLENBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0F0RyxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBZ1AsR0FBQUEsRUFBQTtRQUNBSixLQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBdEksT0FBQUEsRUFBQSxDQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBdEcsT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQWlQLElBQUFBLEVBQUE7UUFDQUwsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXRJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQXRHLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFrUCxLQUFBQSxFQUFBO1FBQ0FOLEtBQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0FDLEdBQUFBLEVBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBO1FBQ0F0SSxPQUFBQSxFQUFBLEVBQUE7UUFDQUQsSUFBQUEsRUFBQSxDQUFBO1FBQ0F0RyxPQUFBQSxFQUFBQSxDQUFBO01BQUEsQ0FBQTtNQUVBbVAsS0FBQUEsRUFBQTtRQUNBUCxLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBdEksT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVB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RUFBQUE7RUFDQSxNQUFBZ1UsU0FBQUEsR0FBQSxDQUNBO0lBQUE3VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUEsU0FBQTtJQUFBQyxNQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUEvVSxJQUFBQSxFQUFBLHNCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEscUJBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsVUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxZQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFdBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsZ0JBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxXQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE9BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsZUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxZQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLHdCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsWUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsVUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsT0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxrQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsaUNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsa0NBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsZUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxVQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxRQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLHlCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLHVDQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLDBCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE9BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsYUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxlQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsT0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxVQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE9BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsVUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxZQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE1BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsWUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGtCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsZ0JBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxVQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsVUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxvQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGdCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsT0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxVQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsTUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSw2QkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxpQ0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxlQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsT0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxzREFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsZUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxVQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE9BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsV0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxXQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxZQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLG1CQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsOENBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsV0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxNQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxXQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLG1DQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsV0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsYUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGdDQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE1BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsMkJBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxRQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE9BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsT0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxZQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsVUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLHVCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLHdDQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLG9CQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsZ0JBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsWUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxrQ0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsZUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxXQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxXQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFlBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxzQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxZQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLDRCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFlBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsa0JBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsNENBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsTUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsT0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSwwQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxZQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFlBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsWUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFdBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsVUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxRQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsVUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxZQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsZUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGdCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsV0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxhQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsT0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE1BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsYUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxNQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsTUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxrQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxrQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxhQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSwyQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxVQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEscUJBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsVUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsT0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxvQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxRQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsaUJBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsWUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsV0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSw4Q0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxVQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLHdCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsY0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxZQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxVQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsdUJBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsYUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSwyQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxzQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxXQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLDBCQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLE1BQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsNkJBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsTUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxVQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFlBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxhQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLGNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxPQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEscUJBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsUUFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSwyQkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSw4QkFBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxTQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFFBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsc0NBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsMEJBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsU0FBQTtJQUFBOFUsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBOVUsSUFBQUEsRUFBQSxZQUFBO0lBQUE4VSxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUE5VSxJQUFBQSxFQUFBLFVBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsa0NBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEsbUNBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlVLElBQUFBLEVBQUEseUJBQUE7SUFBQThVLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQTlV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QUFBLENBQUFzaUIsTUFBQUEsSUFBQWxsQixJQUFBQSxLQUFBa2xCLE1BQUFBLENBQUFsbEIsSUFBQUEsQ0FBQUEsQ0FBQXlHLEdBQUFBLENBQUF5ZSxNQUFBQSxJQUFBQSxNQUFBQSxDQUFBbGxCLElBQUFBLENBQUFBLENBQUFBLENBQUF2RyxLQUFBQSxDQUFBLENBQUEsRUFBQSxFQUFBLENBQUE7RUFFQWtILE1BQUFBLENBQUEya0IsUUFBQUEsR0FBQSxNQUNBLEdBQUEza0IsTUFBQUEsQ0FBQXNrQixPQUFBQSxDQUFBcmlCLE1BQUFBLENBQUFzaUIsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQWxsQixJQUFBQSxLQUFBa2xCLE1BQUFBLENBQUFyRSxLQUFBQSxDQUFBQSxDQUFBem5CLE1BQUFBLElBQUF1SCxNQUFBQSxDQUFBc2tCLE9BQUFBLENBQUE3ckIsTUFBQUEsRUFBQUEsRUFFQXVILE1BQUFBLENBQUE0a0IsY0FBQUEsR0FBQSxNQUFBNWtCLE1BQUFBLENBQUFza0IsT0FBQUEsQ0FBQXJpQixNQUFBQSxDQUFBc2lCLE1BQUFBLElBQUFBLE1BQUFBLENBQUFyRSxLQUFBQSxDQUFBQSxDQUFBem5CLE1BQUFBLEtBQUF1SCxNQUFBQSxDQUFBc2tCLE9BQUFBLENBQUE3ckIsTUFDQTtBQUFBLENBQUEsQ0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAgPSBbXHJcbiAge1xyXG4gICAgYmFzZTogXCJBXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDFcXHUyNEI2XFx1RkYyMVxcdTAwQzBcXHUwMEMxXFx1MDBDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHUwMEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHUwMEM0XFx1MDFERVxcdTFFQTJcXHUwMEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFBXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFFXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwQzZcXHUwMUZDXFx1MDFFMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQU9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOFxcdUE3M0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0MlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJDXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDNcXHUyNEI4XFx1RkYyM1xcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMEM3XFx1MUUwOFxcdTAxODdcXHUwMjNCXFx1QTczRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ0XFx1MjRCOVxcdUZGMjRcXHUxRTBBXFx1MDEwRVxcdTFFMENcXHUxRTEwXFx1MUUxMlxcdTFFMEVcXHUwMTEwXFx1MDE4QlxcdTAxOEFcXHUwMTg5XFx1QTc3OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMVxcdTAxQzRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjJcXHUwMUM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJFXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDVcXHUyNEJBXFx1RkYyNVxcdTAwQzhcXHUwMEM5XFx1MDBDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHUwMENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ2XFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0N1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJIXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJJXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDlcXHUyNEJFXFx1RkYyOVxcdTAwQ0NcXHUwMENEXFx1MDBDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHUwMENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJKXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEFcXHUyNEJGXFx1RkYyQVxcdTAxMzRcXHUwMjQ4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJLXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNENcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTEpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDREXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRFXFx1MjRDM1xcdUZGMkVcXHUwMUY4XFx1MDE0M1xcdTAwRDFcXHUxRTQ0XFx1MDE0N1xcdTFFNDZcXHUwMTQ1XFx1MUU0QVxcdTFFNDhcXHUwMjIwXFx1MDE5RFxcdUE3OTBcXHVBN0E0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNEZcXHUyNEM0XFx1RkYyRlxcdTAwRDJcXHUwMEQzXFx1MDBENFxcdTFFRDJcXHUxRUQwXFx1MUVENlxcdTFFRDRcXHUwMEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx1MDBENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHUwMEQ4XFx1MDFGRVxcdTAxODZcXHUwMTlGXFx1QTc0QVxcdUE3NENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9JXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9PXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NEVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9VXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAyMjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlBcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1MFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUxXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlJcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1MlxcdTI0QzdcXHVGRjMyXFx1MDE1NFxcdTFFNThcXHUwMTU4XFx1MDIxMFxcdTAyMTJcXHUxRTVBXFx1MUU1Q1xcdTAxNTZcXHUxRTVFXFx1MDI0Q1xcdTJDNjRcXHVBNzVBXFx1QTdBNlxcdUE3ODJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlNcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1M1xcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJUWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJVXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTVcXHUyNENBXFx1RkYzNVxcdTAwRDlcXHUwMERBXFx1MDBEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx1MDBEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIldcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1N1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU4XFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU5XFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx1MDBERFxcdTAxNzZcXHUxRUY4XFx1MDIzMlxcdTFFOEVcXHUwMTc4XFx1MUVGNlxcdTFFRjRcXHUwMUIzXFx1MDI0RVxcdTFFRkVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1QVxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2MVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxcdTAwRTBcXHUwMEUxXFx1MDBFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHUwMEUzXFx1MDEwMVxcdTAxMDNcXHUxRUIxXFx1MUVBRlxcdTFFQjVcXHUxRUIzXFx1MDIyN1xcdTAxRTFcXHUwMEU0XFx1MDFERlxcdTFFQTNcXHUwMEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFhXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFlXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwRTZcXHUwMUZEXFx1MDFFM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYW9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOVxcdUE3M0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0RdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2MlxcdTI0RDFcXHVGRjQyXFx1MUUwM1xcdTFFMDVcXHUxRTA3XFx1MDE4MFxcdTAxODNcXHUwMjUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJjXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjNcXHUyNEQyXFx1RkY0M1xcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHUwMEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjNcXHUwMUM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJlXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjVcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJnXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjdcXHUyNEQ2XFx1RkY0N1xcdTAxRjVcXHUwMTFEXFx1MUUyMVxcdTAxMUZcXHUwMTIxXFx1MDFFN1xcdTAxMjNcXHUwMUU1XFx1MDI2MFxcdUE3QTFcXHUxRDc5XFx1QTc3Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY4XFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImh2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxOTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImlcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2OVxcdTI0RDhcXHVGRjQ5XFx1MDBFQ1xcdTAwRURcXHUwMEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx1MDBFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QVxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJrXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkJcXHUyNERBXFx1RkY0QlxcdTFFMzFcXHUwMUU5XFx1MUUzM1xcdTAxMzdcXHUxRTM1XFx1MDE5OVxcdTJDNkFcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBN0EzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJsXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkNcXHUyNERCXFx1RkY0Q1xcdTAxNDBcXHUwMTNBXFx1MDEzRVxcdTFFMzdcXHUxRTM5XFx1MDEzQ1xcdTFFM0RcXHUxRTNCXFx1MDE3RlxcdTAxNDJcXHUwMTlBXFx1MDI2QlxcdTJDNjFcXHVBNzQ5XFx1QTc4MVxcdUE3NDddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm1cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2RFxcdTI0RENcXHVGRjREXFx1MUUzRlxcdTFFNDFcXHUxRTQzXFx1MDI3MVxcdTAyNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RVxcdTI0RERcXHVGRjRFXFx1MDFGOVxcdTAxNDRcXHUwMEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RlxcdTI0REVcXHVGRjRGXFx1MDBGMlxcdTAwRjNcXHUwMEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxcdTAwRjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHUwMEY2XFx1MDIyQlxcdTFFQ0ZcXHUwMTUxXFx1MDFEMlxcdTAyMERcXHUwMjBGXFx1MDFBMVxcdTFFRERcXHUxRURCXFx1MUVFMVxcdTFFREZcXHUxRUUzXFx1MUVDRFxcdTFFRDlcXHUwMUVCXFx1MDFFRFxcdTAwRjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib2lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib3VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib29cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwicFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDcwXFx1MjRERlxcdUZGNTBcXHUxRTU1XFx1MUU1N1xcdTAxQTVcXHUxRDdEXFx1QTc1MVxcdUE3NTNcXHVBNzU1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJxXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiclwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDcyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwic1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDczXFx1MjRFMlxcdUZGNTNcXHUwMERGXFx1MDE1QlxcdTFFNjVcXHUwMTVEXFx1MUU2MVxcdTAxNjFcXHUxRTY3XFx1MUU2M1xcdTFFNjlcXHUwMjE5XFx1MDE1RlxcdTAyM0ZcXHVBN0E5XFx1QTc4NVxcdTFFOUJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTcyOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDc1XFx1MjRFNFxcdUZGNTVcXHUwMEY5XFx1MDBGQVxcdTAwRkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxcdTAwRkNcXHUwMURDXFx1MDFEOFxcdTAxRDZcXHUwMURBXFx1MUVFN1xcdTAxNkZcXHUwMTcxXFx1MDFENFxcdTAyMTVcXHUwMjE3XFx1MDFCMFxcdTFFRUJcXHUxRUU5XFx1MUVFRlxcdTFFRURcXHUxRUYxXFx1MUVFNVxcdTFFNzNcXHUwMTczXFx1MUU3N1xcdTFFNzVcXHUwMjg5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2eVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzYxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ3XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzdcXHUyNEU2XFx1RkY1N1xcdTFFODFcXHUxRTgzXFx1MDE3NVxcdTFFODdcXHUxRTg1XFx1MUU5OFxcdTFFODlcXHUyQzczXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ4XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzhcXHUyNEU3XFx1RkY1OFxcdTFFOEJcXHUxRThEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzlcXHUyNEU4XFx1RkY1OVxcdTFFRjNcXHUwMEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxcdTAwRkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3QVxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjNdL2csXHJcbiAgfSxcclxuXTtcclxuY29uc3QgZG9tYWlucyA9IFtcclxuICBcIi5jb21cIixcclxuICBcIi5vcmdcIixcclxuICBcIi5uZXRcIixcclxuICBcIi5hY1wiLFxyXG4gIFwiLmFkXCIsXHJcbiAgXCIuYWVcIixcclxuICBcIi5hZlwiLFxyXG4gIFwiLmFnXCIsXHJcbiAgXCIuYWlcIixcclxuICBcIi5hbFwiLFxyXG4gIFwiLmFtXCIsXHJcbiAgXCIuYW9cIixcclxuICBcIi5hcVwiLFxyXG4gIFwiLmFyXCIsXHJcbiAgXCIuYXNcIixcclxuICBcIi5hdFwiLFxyXG4gIFwiLmF1XCIsXHJcbiAgXCIuYXdcIixcclxuICBcIi5heFwiLFxyXG4gIFwiLmF6XCIsXHJcbiAgXCIuYmFcIixcclxuICBcIi5iYlwiLFxyXG4gIFwiLmJkXCIsXHJcbiAgXCIuYmVcIixcclxuICBcIi5iZlwiLFxyXG4gIFwiLmJnXCIsXHJcbiAgXCIuYmhcIixcclxuICBcIi5iaVwiLFxyXG4gIFwiLmJqXCIsXHJcbiAgXCIuYm1cIixcclxuICBcIi5iblwiLFxyXG4gIFwiLmJvXCIsXHJcbiAgXCIuYnFcIixcclxuICBcIi5iclwiLFxyXG4gIFwiLmJzXCIsXHJcbiAgXCIuYnRcIixcclxuICBcIi5id1wiLFxyXG4gIFwiLmJ5XCIsXHJcbiAgXCIuYnpcIixcclxuICBcIi5jYVwiLFxyXG4gIFwiLmNjXCIsXHJcbiAgXCIuY2RcIixcclxuICBcIi5jZlwiLFxyXG4gIFwiLmNnXCIsXHJcbiAgXCIuY2hcIixcclxuICBcIi5jaVwiLFxyXG4gIFwiLmNrXCIsXHJcbiAgXCIuY2xcIixcclxuICBcIi5jbVwiLFxyXG4gIFwiLmNuXCIsXHJcbiAgXCIuY29cIixcclxuICBcIi5jclwiLFxyXG4gIFwiLmN1XCIsXHJcbiAgXCIuY3ZcIixcclxuICBcIi5jd1wiLFxyXG4gIFwiLmN4XCIsXHJcbiAgXCIuY3lcIixcclxuICBcIi5jelwiLFxyXG4gIFwiLmRlXCIsXHJcbiAgXCIuZGpcIixcclxuICBcIi5ka1wiLFxyXG4gIFwiLmRtXCIsXHJcbiAgXCIuZG9cIixcclxuICBcIi5kelwiLFxyXG4gIFwiLmVjXCIsXHJcbiAgXCIuZWVcIixcclxuICBcIi5lZ1wiLFxyXG4gIFwiLmVoXCIsXHJcbiAgXCIuZXJcIixcclxuICBcIi5lc1wiLFxyXG4gIFwiLmV0XCIsXHJcbiAgXCIuZXVcIixcclxuICBcIi5maVwiLFxyXG4gIFwiLmZqXCIsXHJcbiAgXCIuZmtcIixcclxuICBcIi5mbVwiLFxyXG4gIFwiLmZvXCIsXHJcbiAgXCIuZnJcIixcclxuICBcIi5nYVwiLFxyXG4gIFwiLmdkXCIsXHJcbiAgXCIuZ2VcIixcclxuICBcIi5nZlwiLFxyXG4gIFwiLmdnXCIsXHJcbiAgXCIuZ2hcIixcclxuICBcIi5naVwiLFxyXG4gIFwiLmdsXCIsXHJcbiAgXCIuZ21cIixcclxuICBcIi5nblwiLFxyXG4gIFwiLmdwXCIsXHJcbiAgXCIuZ3FcIixcclxuICBcIi5nclwiLFxyXG4gIFwiLmdzXCIsXHJcbiAgXCIuZ3RcIixcclxuICBcIi5ndVwiLFxyXG4gIFwiLmd3XCIsXHJcbiAgXCIuZ3lcIixcclxuICBcIi5oa1wiLFxyXG4gIFwiLmhtXCIsXHJcbiAgXCIuaG5cIixcclxuICBcIi5oclwiLFxyXG4gIFwiLmh0XCIsXHJcbiAgXCIuaHVcIixcclxuICBcIi5pZFwiLFxyXG4gIFwiLmllXCIsXHJcbiAgXCIuaWxcIixcclxuICBcIi5pbVwiLFxyXG4gIFwiLmluXCIsXHJcbiAgXCIuaW9cIixcclxuICBcIi5pcVwiLFxyXG4gIFwiLmlyXCIsXHJcbiAgXCIuaXNcIixcclxuICBcIi5pdFwiLFxyXG4gIFwiLmplXCIsXHJcbiAgXCIuam1cIixcclxuICBcIi5qb1wiLFxyXG4gIFwiLmpwXCIsXHJcbiAgXCIua2VcIixcclxuICBcIi5rZ1wiLFxyXG4gIFwiLmtoXCIsXHJcbiAgXCIua2lcIixcclxuICBcIi5rbVwiLFxyXG4gIFwiLmtuXCIsXHJcbiAgXCIua3BcIixcclxuICBcIi5rclwiLFxyXG4gIFwiLmt3XCIsXHJcbiAgXCIua3lcIixcclxuICBcIi5relwiLFxyXG4gIFwiLmxhXCIsXHJcbiAgXCIubGJcIixcclxuICBcIi5sY1wiLFxyXG4gIFwiLmxpXCIsXHJcbiAgXCIubGtcIixcclxuICBcIi5sclwiLFxyXG4gIFwiLmxzXCIsXHJcbiAgXCIubHRcIixcclxuICBcIi5sdVwiLFxyXG4gIFwiLmx2XCIsXHJcbiAgXCIubHlcIixcclxuICBcIi5tYVwiLFxyXG4gIFwiLm1jXCIsXHJcbiAgXCIubWRcIixcclxuICBcIi5tZVwiLFxyXG4gIFwiLm1nXCIsXHJcbiAgXCIubWhcIixcclxuICBcIi5ta1wiLFxyXG4gIFwiLm1sXCIsXHJcbiAgXCIubW1cIixcclxuICBcIi5tblwiLFxyXG4gIFwiLm1vXCIsXHJcbiAgXCIubXBcIixcclxuICBcIi5tcVwiLFxyXG4gIFwiLm1yXCIsXHJcbiAgXCIubXNcIixcclxuICBcIi5tdFwiLFxyXG4gIFwiLm11XCIsXHJcbiAgXCIubXZcIixcclxuICBcIi5td1wiLFxyXG4gIFwiLm14XCIsXHJcbiAgXCIubXlcIixcclxuICBcIi5telwiLFxyXG4gIFwiLm5hXCIsXHJcbiAgXCIubmNcIixcclxuICBcIi5uZVwiLFxyXG4gIFwiLm5mXCIsXHJcbiAgXCIubmdcIixcclxuICBcIi5uaVwiLFxyXG4gIFwiLm5sXCIsXHJcbiAgXCIubm9cIixcclxuICBcIi5ucFwiLFxyXG4gIFwiLm5yXCIsXHJcbiAgXCIubnVcIixcclxuICBcIi5uelwiLFxyXG4gIFwiLm9tXCIsXHJcbiAgXCIucGFcIixcclxuICBcIi5wZVwiLFxyXG4gIFwiLnBmXCIsXHJcbiAgXCIucGdcIixcclxuICBcIi5waFwiLFxyXG4gIFwiLnBrXCIsXHJcbiAgXCIucGxcIixcclxuICBcIi5wbVwiLFxyXG4gIFwiLnBuXCIsXHJcbiAgXCIucHJcIixcclxuICBcIi5wc1wiLFxyXG4gIFwiLnB0XCIsXHJcbiAgXCIucHdcIixcclxuICBcIi5weVwiLFxyXG4gIFwiLnFhXCIsXHJcbiAgXCIucmVcIixcclxuICBcIi5yb1wiLFxyXG4gIFwiLnJzXCIsXHJcbiAgXCIucnVcIixcclxuICBcIi5yd1wiLFxyXG4gIFwiLnNhXCIsXHJcbiAgXCIuc2JcIixcclxuICBcIi5zY1wiLFxyXG4gIFwiLnNkXCIsXHJcbiAgXCIuc2VcIixcclxuICBcIi5zZ1wiLFxyXG4gIFwiLnNoXCIsXHJcbiAgXCIuc2lcIixcclxuICBcIi5za1wiLFxyXG4gIFwiLnNsXCIsXHJcbiAgXCIuc21cIixcclxuICBcIi5zblwiLFxyXG4gIFwiLnNvXCIsXHJcbiAgXCIuc3JcIixcclxuICBcIi5zc1wiLFxyXG4gIFwiLnN0XCIsXHJcbiAgXCIuc3VcIixcclxuICBcIi5zdlwiLFxyXG4gIFwiLnN4XCIsXHJcbiAgXCIuc3lcIixcclxuICBcIi5zelwiLFxyXG4gIFwiLnRjXCIsXHJcbiAgXCIudGRcIixcclxuICBcIi50ZlwiLFxyXG4gIFwiLnRnXCIsXHJcbiAgXCIudGhcIixcclxuICBcIi50alwiLFxyXG4gIFwiLnRrXCIsXHJcbiAgXCIudGxcIixcclxuICBcIi50bVwiLFxyXG4gIFwiLnRuXCIsXHJcbiAgXCIudG9cIixcclxuICBcIi50clwiLFxyXG4gIFwiLnR0XCIsXHJcbiAgXCIudHZcIixcclxuICBcIi50d1wiLFxyXG4gIFwiLnR6XCIsXHJcbiAgXCIudWFcIixcclxuICBcIi51Z1wiLFxyXG4gIFwiLnVrXCIsXHJcbiAgXCIudXNcIixcclxuICBcIi51eVwiLFxyXG4gIFwiLnV6XCIsXHJcbiAgXCIudmFcIixcclxuICBcIi52Y1wiLFxyXG4gIFwiLnZlXCIsXHJcbiAgXCIudmdcIixcclxuICBcIi52aVwiLFxyXG4gIFwiLnZuXCIsXHJcbiAgXCIudnVcIixcclxuICBcIi53ZlwiLFxyXG4gIFwiLndzXCIsXHJcbiAgXCIueWVcIixcclxuICBcIi55dFwiLFxyXG4gIFwiLnphXCIsXHJcbiAgXCIuem1cIixcclxuICBcIi56d1wiLFxyXG5dO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlRGlhY3JpdGljc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAucmVkdWNlKChyZXN1bHQsIGxldHRlcikgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzdWx0LnJlcGxhY2UobGV0dGVyLmxldHRlcnMsIGxldHRlci5iYXNlKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgU1BFQ0lBTF9DSEFSQUNURVJTID0gXCJcXFxcXFxcXC8gIT9AIyQlXiYqKClfKzoue30sO1xcXFwtJ2Bg4oCZ4oCYXFxcIlwiO1xyXG5jb25zdCBWT1dFTFMgPSBcImFlaW91QUVJT1XDoMOow6zDssO5w4DDiMOMw5LDmcOhw6nDrcOzw7rDvcOBw4nDjcOTw5rDncOiw6rDrsO0w7vDgsOKw47DlMObw6PDscO1w4PDkcOVw6TDq8Ovw7bDvMO/w4TDi8OPw5bDnMW4w6fDh8Ofw5jDuMOFw6XDhsOmxZNcIjtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbJHtTUEVDSUFMX0NIQVJBQ1RFUlN9XWAsIFwiZ2lcIiksIFwiXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlQWxsQnV0TGV0dGVyc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlKCkucmVtb3ZlRGlhY3JpdGljcygpLnJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzKCk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjb25jZWFsXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGV4dHJhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFteJHtTUEVDSUFMX0NIQVJBQ1RFUlN9JHtleHRyYX1dYCwgXCJnaVwiKSwgXCLigY5cIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjb25jZWFsTWlkZGxlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGV4dHJhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPCAzID8gdGhpcyA6IHRoaXNbMF0gKyB0aGlzLnN1YnN0cmluZygxLCB0aGlzLmxlbmd0aCAtIDEpLmNvbmNlYWwoZXh0cmEpICsgdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiY2FwaXRhbGl6ZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5zbGljZSgxKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZUhUTUxcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKFwiPlwiLCBcIlxcdTIyN0JcIikucmVwbGFjZShcIjxcIiwgXCJcXHUyMjdBXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicGFyc2VTeW1ib2xzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZUFsbChcIiZcIiwgXCImYW1wO1wiKS5yZXBsYWNlKFwiPFwiLCBcIiZsdDtcIikucmVwbGFjZShcIj5cIiwgXCImZ3Q7XCIpLnJlcGxhY2VBbGwoXCIjXCIsIFwiJm51bTtcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZXBsYWNlQXJyYXlcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZmluZCwgcmVwbGFjZSkge1xyXG4gICAgdmFyIHJlcGxhY2VTdHJpbmcgPSB0aGlzO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaW5kLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHJlcGxhY2VTdHJpbmcgPSByZXBsYWNlU3RyaW5nLnJlcGxhY2UoZmluZFtpXSwgcmVwbGFjZVtpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVwbGFjZVN0cmluZztcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcIm1hc2tVUkxzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZUFycmF5KFtcImh0dHBzOi8vXCIsIFwiaHR0cDovL1wiXSwgXCJub3BlOi8vXCIpLnJlcGxhY2VBcnJheShkb21haW5zLCBcIi5ub3BlXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwibWFrZVJlYWRhYmxlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJtYWtlUGVyY2VudGFnZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChkZWNpbWFscykge1xyXG4gICAgaWYgKGRlY2ltYWxzID09PSB1bmRlZmluZWQpIGRlY2ltYWxzID0gMjtcclxuICAgIHJldHVybiBgJHsodGhpcyAqIDEwMCkudG9GaXhlZChkZWNpbWFscyl9JWA7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzb3J0T2JqZWN0ID0gKG9iaiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgbGV0IGFyciA9IFtdO1xyXG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgYXJyLnB1c2goW2tleSwgb2JqW2tleV1dKTtcclxuICB9XHJcbiAgYXJyLnNvcnQoKGEsIGIpID0+IChkaXJlY3Rpb24gPyBhWzFdIC0gYlsxXSA6IGJbMV0gLSBhWzFdKSk7XHJcbiAgbGV0IG9ialNvcnRlZCA9IHt9O1xyXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiAob2JqU29ydGVkW2l0ZW1bMF1dID0gaXRlbVsxXSkpO1xyXG4gIC8vYXJyLnNvcnQoZnVuY3Rpb24oYSwgYikgeyBhLnZhbHVlLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLnZhbHVlLnRvTG93ZXJDYXNlKCkpOyB9KTsgLy91c2UgdGhpcyB0byBzb3J0IGFzIHN0cmluZ3NcclxuICByZXR1cm4gb2JqU29ydGVkOyAvLyByZXR1cm5zIGFycmF5XHJcbn07XHJcbiIsIi8qXHJcbiQgPSBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxudmFyIGJvb3RzdHJhcCA9IHJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxudmFyIGFuZ3VsYXJTYW5pdGl6ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItc2FuaXRpemUnKTtcclxudmFyIGFuZ3VsYXJBbmltYXRlID0gcmVxdWlyZSgnYW5ndWxhci1hbmltYXRlJyk7XHJcbiovXHJcbmFuZ3VsYXIubW9kdWxlKFwiYXBwXCIsIFtcclxuICBcInVpLnJvdXRlclwiLFxyXG4gIFwidWkuYm9vdHN0cmFwXCIsXHJcbiAgXCJuZ0FuaW1hdGVcIixcclxuICBcIm5nU2FuaXRpemVcIixcclxuICBcIm5nTWF0ZXJpYWxcIixcclxuICBcIm5nTWVzc2FnZXNcIixcclxuICBcIm5nRHJhZ0Ryb3BcIixcclxuICBcIm5nVGFnc0lucHV0XCIsXHJcbiAgXCJ2Y1JlY2FwdGNoYVwiLFxyXG4gIFwiY2hhcnQuanNcIixcclxuICBcInRjLmNoYXJ0anNcIixcclxuICBcImluZmluaXRlLXNjcm9sbFwiLFxyXG5dKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkdXJsU2VydmljZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xyXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvaG9tZVwiKTtcclxuICAkdXJsU2VydmljZVByb3ZpZGVyLmNvbmZpZy5zdHJpY3RNb2RlKGZhbHNlKTtcclxuXHJcbiAgJHN0YXRlUHJvdmlkZXJcclxuICAgIC5zdGF0ZShcImhvbWVcIiwge1xyXG4gICAgICB1cmw6IFwiL2hvbWVcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2hvbWUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInBvbGljeVwiLCB7XHJcbiAgICAgIHVybDogXCIvcG9saWN5XCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wb2xpY3kuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInByaW50XCIsIHtcclxuICAgICAgdXJsOiBcIi9wcmludFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcHJpbnQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImV4cGVyaWVuY2VcIiwge1xyXG4gICAgICB1cmw6IFwiL2V4cGVyaWVuY2VcIixcclxuICAgICAgY29udHJvbGxlcjogXCJFeHBlcmllbmNlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvZXhwZXJpZW5jZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwic2tpbGxzXCIsIHtcclxuICAgICAgdXJsOiBcIi9za2lsbHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJTa2lsbHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9za2lsbHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImhvYmJpZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2hvYmJpZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJIb2JiaWVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvaG9iYmllcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiY29udGFjdFwiLCB7XHJcbiAgICAgIHVybDogXCIvY29udGFjdFwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkNvbnRhY3RDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9jb250YWN0Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ3b3Jrb3V0XCIsIHtcclxuICAgICAgdXJsOiBcIi93b3Jrb3V0XCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiV29ya291dEN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3dvcmtvdXQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInBvc3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9wb3N0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlBvc3RzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcG9zdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInByb2ZpbGVcIiwge1xyXG4gICAgICB1cmw6IFwiL3Byb2ZpbGVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJQcm9maWxlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcHJvZmlsZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibGlzdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2xpc3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiTGlzdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImxpc3RzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJidWJibGVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9idWJibGVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQnViYmxlc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiYnViYmxlcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYXN0ZXJvaWRzXCIsIHtcclxuICAgICAgdXJsOiBcIi9hc3Rlcm9pZHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJBc3Rlcm9pZHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImFzdGVyb2lkcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibGVtbWluZ3NcIiwge1xyXG4gICAgICB1cmw6IFwiL2xlbW1pbmdzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiTGVtbWluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImxlbW1pbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJib3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9ib3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5nc1wiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1hZG1pblwiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLWFkbWluXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzQWRtaW5DdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1hZG1pbi5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLWdhbWVcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy86Z2FtZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0dhbWVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1nYW1lLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3Mtc3RhdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy1zdGF0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc1N0YXRzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3Mtc3RhdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1wbGF5XCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3MvcGxheVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc1BsYXlDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1wbGF5Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWdvb2dsZVwiLCB7XHJcbiAgICAgIHVybDogXCIvZ29vZ2xlXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekdvb2dsZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9nb29nbGUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotbG9nb3NcIiwge1xyXG4gICAgICB1cmw6IFwiL2xvZ29zXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekxvZ29zQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL2xvZ29zLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWFuaW1hbHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2FuaW1hbHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6QW5pbWFsc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9hbmltYWxzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LXNrZWxldG9uc1wiLCB7XHJcbiAgICAgIHVybDogXCIvc2tlbGV0b25zXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpelNrZWxldG9uc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9za2VsZXRvbnMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotbW92aWVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9tb3ZpZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6TW92aWVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL21vdmllcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiY2hhcmFkZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2NoYXJhZGVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQ2hhcmFkZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9jaGFyYWRlcy5odG1sXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHtcclxuICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICByZXF1aXJlQmFzZTogZmFsc2UsXHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ1dlYlNvY2tldFN2YycsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkdGltZW91dCkge1xyXG4gIGZ1bmN0aW9uIHdlYnNvY2tldEhvc3QoKSB7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6Jykge1xyXG4gICAgICByZXR1cm4gXCJ3c3M6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwid3M6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGNvbm5lY3Rpb247XHJcbiAgdmFyIGNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25uZWN0aW9uID0gbmV3IFdlYlNvY2tldCh3ZWJzb2NrZXRIb3N0KCkpO1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25vcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnV2Vic29ja2V0IGNvbm5lY3RlZCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9uY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnV2Vic29ja2V0IGNsb3NlZC4gUmVjb25uZWN0aW5nLi4uJyk7XHJcbiAgICAgICR0aW1lb3V0KGNvbm5lY3QsIDEwMDApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZSArIFwiIC0gU3RhdGU6IFwiICsgY29ubmVjdGlvbi5yZWFkeVN0YXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgcGF5bG9hZCA9IEpTT04ucGFyc2UoZS5kYXRhKTtcclxuICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCd3czonICsgcGF5bG9hZC50b3BpYywgcGF5bG9hZC5kYXRhKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5zZW5kID0gZnVuY3Rpb24gKHRvcGljLCBkYXRhKSB7XHJcbiAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KHt0b3BpYzogdG9waWMsIGRhdGE6IGRhdGF9KTtcclxuICAgIGNvbm5lY3Rpb24uc2VuZChqc29uKTtcclxuICB9O1xyXG5cclxuICB0aGlzLmNvbm5lY3QgPSBjb25uZWN0O1xyXG5cclxufSkucnVuKGZ1bmN0aW9uIChXZWJTb2NrZXRTdmMpIHtcclxuICBXZWJTb2NrZXRTdmMuY29ubmVjdCgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuZGlyZWN0aXZlKFwiY2xpY2tPdXRzaWRlXCIsIGZ1bmN0aW9uICgkZG9jdW1lbnQpIHtcclxuICByZXR1cm4ge1xyXG4gICAgcmVzdHJpY3Q6IFwiQVwiLFxyXG4gICAgc2NvcGU6IHtcclxuICAgICAgY2xpY2tPdXRzaWRlOiBcIiZcIixcclxuICAgIH0sXHJcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsLCBhdHRyKSB7XHJcbiAgICAgICRkb2N1bWVudC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgaWYgKGVsICE9PSBlLnRhcmdldCAmJiAhZWxbMF0uY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvL3Njb3BlLiRwYXJlbnQuc2V0U2VsZWN0ZWRMaXN0KCk7XHJcbiAgICAgICAgICAgIHNjb3BlLiRldmFsKHNjb3BlLmNsaWNrT3V0c2lkZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcblx0LmRpcmVjdGl2ZSgnaGVhZCcsIFtcclxuXHRcdCckcm9vdFNjb3BlJyxcclxuXHRcdCckc3RhdGUnLFxyXG5cdFx0JyRjb21waWxlJyxcclxuXHRcdCckaW50ZXJwb2xhdGUnLFxyXG5cdFx0ZnVuY3Rpb24gKCRyb290U2NvcGUsICRzdGF0ZSwgJGNvbXBpbGUsICRpbnRlcnBvbGF0ZSkge1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlID0gZnVuY3Rpb24gZ2V0U3R5bGUodGVtcGxhdGVTdHlsZVVybCkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3R5bGUgPSB7XHJcblx0XHRcdFx0XHRocmVmOiB0ZW1wbGF0ZVN0eWxlVXJsLFxyXG5cdFx0XHRcdFx0cmVsOiAnc3R5bGVzaGVldCdcclxuXHRcdFx0XHR9O1xyXG5cclxuXHRcdFx0XHRpZiAoc3R5bGUuaHJlZi5tYXRjaCgvXFwubGVzcyQvKSkge1xyXG5cdFx0XHRcdFx0c3R5bGUucmVsID0gJ3N0eWxlc2hlZXQvbGVzcyc7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0dmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIGdldFN0eWxlcyhzdGF0ZSkge1xyXG5cclxuXHRcdFx0XHR2YXIgc3RhdGVzID0ge307XHJcblxyXG5cdFx0XHRcdC8vQ2hlY2sgc3RhdGUgZm9yIHN0eWxlc1xyXG5cdFx0XHRcdHdoaWxlIChzdGF0ZS5uYW1lICE9PSAnJykge1xyXG5cdFx0XHRcdFx0dmFyIHBhcmVudCA9ICRzdGF0ZS5nZXQoJ14nLCBzdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0Ly9Jbml0aWF0ZSBvdXIgdmlldyBsaXN0XHJcblx0XHRcdFx0XHRpZiAoIXN0YXRlc1twYXJlbnQubmFtZV0pIHtcclxuXHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXSA9IHt9O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ2hlY2sgdGhlIHRlbXBsYXRlU3R5bGVcclxuXHRcdFx0XHRcdGlmIChzdGF0ZS50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXVsnJ10pIHtcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSA9IGdldFN0eWxlKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB2aWV3c1xyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnZpZXdzKSB7XHJcblx0XHRcdFx0XHRcdF8uZm9yRWFjaChzdGF0ZS52aWV3cywgZnVuY3Rpb24gKHZpZXcsIGtleSkge1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgYSBzdHlsZVxyXG5cdFx0XHRcdFx0XHRcdGlmICghdmlldy50ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGFyZSB0YXJnZXRpbmcgc29tZSBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRpZiAoKGtleSA9IGtleS5zcGxpdCgnQCcpKVsxXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9DaGVjayBpZiB3ZSBoYXZlIHN0eWxlcyBmb3IgdGhhdCBwYXJlbnRcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3RhdGVzW2tleVsxXV0gPSB7fTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBzb21lIHBhcmVudCdzIHZpZXdcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc3RhdGVzW2tleVsxXV1ba2V5WzBdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvL1BsYWNlIHRoZSBzdHlsZSBvbiBvdXIgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1ba2V5WzBdXSA9IGdldFN0eWxlKHZpZXcudGVtcGxhdGVTdHlsZVVybCk7XHJcblxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NvbnRpbnVlIHdpdGggdGhlIHBhcmVudFxyXG5cdFx0XHRcdFx0c3RhdGUgPSBwYXJlbnQ7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvL0ZsYXR0ZW4gdGhlIGxpc3RcclxuXHRcdFx0XHR2YXIgZmxhdCA9IFtdO1xyXG5cdFx0XHRcdF8uZm9yRWFjaChzdGF0ZXMsIGZ1bmN0aW9uICh2aWV3cykge1xyXG5cclxuXHRcdFx0XHRcdF8uZm9yRWFjaCh2aWV3cywgZnVuY3Rpb24gKHN0eWxlKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIV8uaW5jbHVkZXMoZmxhdCwgc3R5bGUpKSB7XHJcblx0XHRcdFx0XHRcdFx0ZmxhdC5wdXNoKHN0eWxlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly9SZXZlcnNlIGl0IHNvIHdlIGhhdmUgYSBwcm9wZXIgaGllcmFyY2h5XHJcblx0XHRcdFx0ZmxhdC5yZXZlcnNlKCk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBmbGF0O1xyXG5cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cmVzdHJpY3Q6ICdFJyxcclxuXHRcdFx0XHRsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW0pIHtcclxuXHJcblx0XHRcdFx0XHRzY29wZS50ZW1wbGF0ZVN0eWxlcyA9IFtdO1xyXG5cclxuXHRcdFx0XHRcdHZhciBodG1sID0gJzxsaW5rIG5nLWF0dHItcmVsPVwie3tzdHlsZS5yZWx9fVwiIG5nLXJlcGVhdD1cInN0eWxlIGluIHRlbXBsYXRlU3R5bGVzXCIgbmctaHJlZj1cInt7c3R5bGUuaHJlZn19XCI+JztcclxuXHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXHtcXHsvZywgJGludGVycG9sYXRlLnN0YXJ0U3ltYm9sKCkpO1xyXG5cdFx0XHRcdFx0aHRtbCA9IGh0bWwucmVwbGFjZSgvXFx9XFx9L2csICRpbnRlcnBvbGF0ZS5lbmRTeW1ib2woKSk7XHJcblxyXG5cdFx0XHRcdFx0ZWxlbS5hcHBlbmQoJGNvbXBpbGUoaHRtbCkoc2NvcGUpKTtcclxuXHJcblx0XHRcdFx0XHQkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3RhcnQnLCBmdW5jdGlvbiAoZXZlbnQsIHRvU3RhdGUsIHRvUGFyYW1zLCBmcm9tU3RhdGUsIGZyb21QYXJhbXMpIHtcclxuXHJcblx0XHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gZ2V0U3R5bGVzKHRvU3RhdGUpO1xyXG5cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0fVxyXG5cdF0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQXBwQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBMYW5ndWFnZVN2YywgVXNlclN2YywgJG1kVG9hc3QpIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiJWNZb3Ugc25lYWt5IGJ1Z2dlciFcIixcclxuICAgIFwiZm9udDogMmVtIHNhbnMtc2VyaWY7IGNvbG9yOiBEb2RnZXJCbHVlOyB0ZXh0LXNoYWRvdzogMnB4IDAgMCAjNDQ0LCAtMnB4IDAgMCAjNDQ0LCAwIDJweCAwICM0NDQsIDAgLTJweCAwICM0NDQsIDFweCAxcHggIzQ0NCwgLTFweCAtMXB4IDAgIzQ0NCwgMXB4IC0xcHggMCAjNDQ0LCAtMXB4IDFweCAwICM0NDQ7XCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiSSdtIGdsYWQgeW91J3JlIGN1cmlvdXMgd2hldGhlciBzb21ldGhpbmcgaXMgcG9wcGluZyB1cCBpbiBoZXJlLiBJJ20gYSBiaXQgb2YgYSBzdGlja2xlciB3aGVuIGl0IGNvbWVzIHRvIG1lc3NhZ2VzIGluIHRoZSBjb25zb2xlIHNvIEkgdHJ5IHRvIG1ha2Ugc3VyZSBvbmx5IHRoaW5ncyBJIHdhbnQgYXJlIHZpc2libGUuIFRoYXQgYmVpbmcgc2FpZCwgaWYgdGhlcmUgaXMgYSBiaWcgZXJyb3IgaGVyZSwgSSB3b3VsZCByZWFsbHkgYXBwcmVjaWF0ZSB5b3UgdGVsbGluZyBtZSBzbyBJIGNhbiBnZXQgcmlkIG9mIGl0IVwiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIlRoZSBjb2RlIGZvciBteSByZXN1bWUgaXMgaG9zdGVkIG9uIEdpdGh1YiBpZiB5b3UgcmVhbGx5IHdhbnQgdG8gZ28gaW50byBhbGwgdGhpcyEgPT4gaHR0cHM6Ly9naXRodWIuY29tL0ZsYW5kZXJzQnVyZ2VyL3Jlc3VtZVwiLFxyXG4gICk7XHJcblxyXG4gICRzY29wZS50b2FzdCA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAkbWRUb2FzdC5zaG93KCRtZFRvYXN0LnNpbXBsZSgpLnRleHRDb250ZW50KG1lc3NhZ2UpLnBvc2l0aW9uKFwiYm90dG9tIHJpZ2h0XCIpLmhpZGVEZWxheSgzMDAwKSk7XHJcbiAgfTtcclxuICAvKlxyXG4gICAgJChkb2N1bWVudCkuYmluZChcImtleXVwIGtleWRvd25cIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGlmKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT0gODApe1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgICovXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gICQod2luZG93KS5sb2FkKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICQoXCIuY29udGVudFwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLmNoZWNrYm94LW1lbnVcIikub24oXCJjaGFuZ2VcIiwgXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuY2xvc2VzdChcImxpXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIsIHRoaXMuY2hlY2tlZCk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuYWxsb3ctZm9jdXNcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS50aGVtZUNvdW50ZXIgPSA2O1xyXG4gICRzY29wZS50b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgJHNjb3BlLnllYXIgPSAkc2NvcGUudG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAkc2NvcGUucmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XHJcblxyXG4gICRzY29wZS5mbGlwVGhlbWUgPSAoKSA9PiB7XHJcbiAgICAkKFwiLmxvYWRpbmdcIikuc2hvdygpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmhpZGUoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLmxvYWRpbmdcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAgICQoXCIuY29udGVudFwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gICAgfSwgODAwKTtcclxuICAgICRzY29wZS50aGVtZUNvdW50ZXIgPSAkc2NvcGUudGhlbWVDb3VudGVyIDwgNiA/ICRzY29wZS50aGVtZUNvdW50ZXIgKyAxIDogKCRzY29wZS50aGVtZUNvdW50ZXIgPSAxKTtcclxuICB9O1xyXG5cclxuICAkLmdldEpTT04oXCIvc2tpbGxzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5za2lsbHMgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIHNraWxsLmVuYWJsZWQ7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2hvYmJpZXMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmhvYmJpZXMgPSBkYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvZXhwZXJpZW5jZS5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuam9icyA9IGRhdGE7XHJcbiAgICAkc2NvcGUuam9icy5mb3JFYWNoKChqb2IpID0+IHtcclxuICAgICAgam9iLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGpvYi5zdGFydERhdGUpO1xyXG4gICAgICBpZiAoam9iLmVuZERhdGUpIGpvYi5lbmREYXRlID0gbmV3IERhdGUoam9iLmVuZERhdGUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9jaGFyYWRlcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuY2hhcmFkZXMgPSBkYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZ2V0VGltZVNwYW4gPSAoam9iKSA9PiB7XHJcbiAgICByZXR1cm4gam9iLnN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpICsgKGpvYi5lbmREYXRlID8gXCIgLSBcIiArIGpvYi5lbmREYXRlLmdldEZ1bGxZZWFyKCkgOiBcIiAtIFRvZGF5XCIpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5sYW5ndWFnZXMgPSBMYW5ndWFnZVN2Yy5sYW5ndWFnZXM7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdExhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IExhbmd1YWdlU3ZjLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuaG92ZXJkaXYgPSAoZSwgZGl2aWQpID0+IHtcclxuICAgIHZhciBsZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xyXG4gICAgdmFyIHRvcCA9IGUuY2xpZW50WSArIDIwICsgXCJweFwiO1xyXG5cclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZpZCk7XHJcblxyXG4gICAgJChcIiNcIiArIGRpdmlkKS5jc3MoXCJsZWZ0XCIsIGxlZnQpO1xyXG4gICAgJChcIiNcIiArIGRpdmlkKS5jc3MoXCJ0b3BcIiwgdG9wKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLnRvZ2dsZSgpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpIHtcclxuICAgIFVzZXJTdmMubG9naW4od2luZG93LmxvY2FsU3RvcmFnZS51c2VyKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBsb2dpbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICBsb2dpbih1c2VyKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xyXG4gICAgaWYgKCEkc2NvcGUubG9nZ2VkSW4pIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS51c2VyID0gdXNlci5faWQ7XHJcbiAgICAgICRzY29wZS5sb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAgICRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUgPSBuZXcgRGF0ZSgkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlKTtcclxuICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dpblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuJG9uKFwidXBkYXRlXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUpO1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKFwibG9hZGluZ1wiLCAoXywgdXNlcikgPT4ge1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgJChcIiNsb2FkaW5nLWljb25cIikuc2hvdygpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKFwibG9hZGVkXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5sb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBmaXJlYmFzZVxyXG4gICAgICAuYXV0aCgpXHJcbiAgICAgIC5zaWduT3V0KClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXHJcbiAgICAgICAgJHNjb3BlLmxvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICRzY29wZS4kYnJvYWRjYXN0KFwibG9nb3V0XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5mb3JtYXREYXRlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IG1vbnRocyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIHJldHVybiBkYXRlLmdldERhdGUoKSArIFwiLVwiICsgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0gKyBcIi1cIiArIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkFzdGVyb2lkc0N0cmxcIiwgZnVuY3Rpb24gKCRsb2NhdGlvbiwgJHNjb3BlLCBHYW1lU3ZjKSB7XHJcbiAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XHJcbiAgaWYgKCFjYW52YXMpIHtcclxuICAgICRsb2NhdGlvbi5wYXRoKFwiL2hvbWVcIik7XHJcbiAgICByZXR1cm4gYWxlcnQoXCJcIik7XHJcbiAgfVxyXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgaWYgKCFjdHgpIHtcclxuICAgIHJldHVybiAkbG9jYXRpb24ucGF0aChcIi9ob21lXCIpO1xyXG4gIH1cclxuICBjdHguZm9udCA9IFwiMzBweCBDb21pYyBTYW5zIE1TXCI7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgbGV0IHNob3RzID0ge307XHJcbiAgY29uc3QgYXN0ZXJvaWRzID0ge307XHJcbiAgY29uc3QgcG93ZXJ1cHMgPSB7fTtcclxuICBjb25zdCBleHBsb3Npb25zID0ge307XHJcbiAgY29uc3QgbWFwID0ge307XHJcbiAgY29uc3Qgc3BhY2VwaWNzID0gMTA7XHJcbiAgbGV0IHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICBjb25zdCBwb3dlcnVwVHlwZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwic3BlZWRcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIk1heCBTcGVlZCDih6dcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgICAgc2l6ZTogWzE0LCAzNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLm1heFNwZWVkICs9IDEwMDtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiY29vbGRvd25cIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIkNvb2xkb3duIOKHqVwiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogMyxcclxuICAgICAgICBzaXplOiBbMTcsIDE3XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLmNvb2xkb3duVGltZSAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwicmFuZ2VcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIkZpcmluZyBSYW5nZSDih6dcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA0LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzMwLCA4XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAucmFuZ2UgKz0gNTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwic2hpZWxkXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJTaGllbGRcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA1LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzE5LCAxOV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnNoaWVsZCA9IHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIm51a2VcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIk51a2VcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgICAgc2l6ZTogWzE1LCAxNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICAgIGFzdGVyb2lkc1tpXS5leHBsb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYXduQXN0ZXJvaWRzKDUpO1xyXG4gICAgICB9LFxyXG4gICAgfSAvKlxyXG4gICAgJ3NpZGVfY2Fubm9ucycsXHJcbiAgICAnbGFzZXInLFxyXG4gICAgJ3NoaWVsZCcsXHJcbiAgICAnbGlmZScsXHJcbiAgICAnbWlzc2lsZXMnLFxyXG4gICAgJ251a2UnXHJcbiAgICAqLyxcclxuICBdO1xyXG4gIHBvd2VydXBUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChwb3dlcnVwLCBpLCBhcnJheSkge1xyXG4gICAgYXJyYXlbaV0uaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL1wiICsgcG93ZXJ1cC5uYW1lICsgXCIucG5nXCI7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBleHBsb3Npb25JbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGV4cGxvc2lvbkltYWdlLnNyYyA9IFwiYXN0ZXJvaWRzL2V4cGxvc2lvbi5wbmdcIjtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImtleWRvd25cIixcclxuICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIHRydWUsXHJcbiAgKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwia2V5dXBcIixcclxuICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB0cnVlLFxyXG4gICk7XHJcblxyXG4gICRzY29wZS5oaWdoc2NvcmUgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBldmFsdWF0ZUtleXMoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICAvL1NwYWNlXHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNob290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzddKSB7XHJcbiAgICAgICAgLy9MZWZ0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMzYwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gLT0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOV0pIHtcclxuICAgICAgICAvL1JpZ2h0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMzYwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gKz0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOF0pIHtcclxuICAgICAgICAvL1VwIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA8PSBzcGFjZXNoaXAubWF4U3BlZWQpIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCArPSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkLS07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbNDBdKSB7XHJcbiAgICAgICAgLy9Eb3duIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCAtPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICBzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTcGFjZXNoaXAoKSB7XHJcbiAgICB0aGlzLndpZHRoID0gNTA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDUwO1xyXG4gICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgIHRoaXMucmFuZ2UgPSA4MDtcclxuICAgIHRoaXMuY2Fubm9uID0ge1xyXG4gICAgICB4OiB0aGlzLndpZHRoIC8gMiAtIDQuNSxcclxuICAgICAgeTogdGhpcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgKiAwLjA3ODEyNSxcclxuICAgIH07XHJcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcclxuICAgIHRoaXMuY29vbGRvd25UaW1lID0gMjA7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW2NhbnZhcy53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDJdO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL3NwYWNlc2hpcC5wbmdcIjtcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5tYXhTcGVlZCA9IDEwMDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gMDtcclxuICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG5cclxuICAgIHRoaXMuc2hvb3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuY29vbGRvd24gPSB0aGlzLmNvb2xkb3duVGltZTtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgc2hvdHNbaWRdID0gbmV3IFNob3QoaWQsIHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguYXJjKHRoaXMucG9zaXRpb25bMF0gKyB0aGlzLndpZHRoIC8gMiwgdGhpcy5wb3NpdGlvblsxXSArIHRoaXMuaGVpZ2h0IC8gMiwgMzAsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMzUsIDIzNywgODYsIDAuNSlcIjtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYig2NiwgMTY4LCAzNiwgMC44KVwiO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgICAgdmFyIGFzdGVyb2lkID0gYXN0ZXJvaWRzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoYXN0ZXJvaWQsIHRoaXMpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zaGllbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYXN0ZXJvaWQuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdhbWVPdmVyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICBpZiAodGhpcy5jb29sZG93biA+IDApIHtcclxuICAgICAgICB0aGlzLmNvb2xkb3duLS07XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTaG90KGlkLCBzcGFjZXNoaXApIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbXHJcbiAgICAgIHNwYWNlc2hpcC5wb3NpdGlvblswXSArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi54ICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnggKiBNYXRoLmNvcygoKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKSxcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzFdICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnkgK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueSAqIE1hdGguc2luKCgoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSkgLyAxODApLFxyXG4gICAgXTtcclxuICAgIHRoaXMud2lkdGggPSA5O1xyXG4gICAgdGhpcy5oZWlnaHQgPSAxNTtcclxuICAgIHRoaXMuYW5nbGUgPSBzcGFjZXNoaXAuYW5nbGU7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gc3BhY2VzaGlwLnJvdGF0aW9uO1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwYWNlc2hpcC5zcGVlZCArIDUwMDtcclxuICAgIHRoaXMubGlmZXNwYW4gPSBzcGFjZXNoaXAucmFuZ2U7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvc2hvdC5wbmdcIjtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBBc3Rlcm9pZChpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy53aWR0aCA9IE1hdGgucmFuZG9tKCkgKiA1MCArIDIwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMucm90YXRpb25TcGVlZCA9IE1hdGgucmFuZG9tKCkgKiA2IC0gMztcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMzAwICsgMjtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBcImFzdGVyb2lkcy9hc3Rlcm9pZFwiICsgKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDYpICsgMSkgKyBcIi5wbmdcIjtcclxuXHJcbiAgICB0aGlzLmV4cGxvZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGV4cGxvc2lvbnNbdGhpcy5pZF0gPSBuZXcgRXhwbG9zaW9uKHRoaXMpO1xyXG4gICAgICByZXR1cm4gZGVsZXRlIGFzdGVyb2lkc1t0aGlzLmlkXTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZDtcclxuICAgICAgaWYgKHRoaXMucm90YXRpb24gPiAzNjApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gdGhpcy5yb3RhdGlvbiAtIDM2MDtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnJvdGF0aW9uIDwgMCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSAzNjAgKyB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgICB2YXIgc2hvdCA9IHNob3RzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoc2hvdCwgdGhpcykpIHtcclxuICAgICAgICAgIHRoaXMuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgdmFyIHBvaW50cyA9IE1hdGguZmxvb3IoKHNob3Quc3BlZWQgLSA1MDApIC8gMTAgKyA3MCAtIHRoaXMud2lkdGgpO1xyXG4gICAgICAgICAgaWYgKE1hdGguZmxvb3IoKHBvaW50cyArICRzY29wZS5zY29yZSkgLyAxMDApID4gTWF0aC5mbG9vcigkc2NvcGUuc2NvcmUgLyAxMDApKSB7XHJcbiAgICAgICAgICAgIHNwYXduUG93ZXJ1cCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJHNjb3BlLnNjb3JlICs9IHBvaW50cztcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIGRlbGV0ZSBzaG90c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBFeHBsb3Npb24ob2JqZWN0KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW29iamVjdC5wb3NpdGlvblswXSwgb2JqZWN0LnBvc2l0aW9uWzFdXTtcclxuICAgIHRoaXMud2lkdGggPSBvYmplY3Qud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9iamVjdC5oZWlnaHQ7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5jeWNsZSA9IHtcclxuICAgICAgcm93czogNixcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgc2l6ZTogWzI1NiwgMjU2XSxcclxuICAgICAgaTogMCxcclxuICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgfTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSA0NztcclxuICAgIHRoaXMuaW1nID0gZXhwbG9zaW9uSW1hZ2U7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuY3ljbGUuaSsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gUG93ZXJ1cChpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wb3dlcnVwID0gcG93ZXJ1cFR5cGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvd2VydXBUeXBlcy5sZW5ndGgpXTtcclxuICAgIHRoaXMuY3ljbGUgPSB0aGlzLnBvd2VydXAuY3ljbGU7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gMTAwMDtcclxuICAgIGlmICh0aGlzLmN5Y2xlLnNpemVbMV0gPiB0aGlzLmN5Y2xlLnNpemVbMF0pIHtcclxuICAgICAgdGhpcy5oZWlnaHQgPSA0MDtcclxuICAgICAgdGhpcy53aWR0aCA9IE1hdGgucm91bmQoKHRoaXMuaGVpZ2h0IC8gdGhpcy5jeWNsZS5zaXplWzFdKSAqIHRoaXMuY3ljbGUuc2l6ZVswXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndpZHRoID0gNDA7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5yb3VuZCgodGhpcy53aWR0aCAvIHRoaXMuY3ljbGUuc2l6ZVswXSkgKiB0aGlzLmN5Y2xlLnNpemVbMV0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5pbWcgPSB0aGlzLnBvd2VydXAuaW1nO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDE1MCArIDUwO1xyXG4gICAgdmFyIGRlbGF5ID0gNTtcclxuICAgIHRoaXMubW92ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhpdChzcGFjZXNoaXAsIHRoaXMpKSB7XHJcbiAgICAgICAgJHNjb3BlLmFubm91bmNlID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2VtZW50ID0gdGhpcy5wb3dlcnVwLmFubm91bmNlbWVudDtcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB0aGlzLnBvd2VydXAuYWN0aXZhdGUoc3BhY2VzaGlwKTtcclxuICAgICAgICByZXR1cm4gZGVsZXRlIHBvd2VydXBzW3RoaXMuaWRdO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKGRlbGF5IDw9IDApIHtcclxuICAgICAgICBpZiAodGhpcy5jeWNsZS5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLmktLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsYXkgPSA1O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGF5LS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlKG9iamVjdCkge1xyXG4gICAgb2JqZWN0LnBvc2l0aW9uWzBdICs9IChvYmplY3Quc3BlZWQgLyAxMDApICogTWF0aC5jb3MoKChvYmplY3QuYW5nbGUgLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBvYmplY3QucG9zaXRpb25bMV0gKz0gKG9iamVjdC5zcGVlZCAvIDEwMCkgKiBNYXRoLnNpbigoKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIGlmIChvYmplY3QucG9zaXRpb25bMF0gPiBjYW52YXMud2lkdGgpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzBdID0gLW9iamVjdC53aWR0aDtcclxuICAgIH0gZWxzZSBpZiAob2JqZWN0LnBvc2l0aW9uWzBdIDwgLW9iamVjdC53aWR0aCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMF0gPSBjYW52YXMud2lkdGg7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0LnBvc2l0aW9uWzFdID4gY2FudmFzLmhlaWdodCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMV0gPSAtb2JqZWN0LmhlaWdodDtcclxuICAgIH0gZWxzZSBpZiAob2JqZWN0LnBvc2l0aW9uWzFdIDwgLW9iamVjdC5oZWlnaHQpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzFdID0gY2FudmFzLmhlaWdodDtcclxuICAgIH1cclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHgudHJhbnNsYXRlKG9iamVjdC5wb3NpdGlvblswXSwgb2JqZWN0LnBvc2l0aW9uWzFdKTtcclxuICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LndpZHRoIC8gMiwgb2JqZWN0LmhlaWdodCAvIDIpO1xyXG4gICAgY3R4LnJvdGF0ZSgob2JqZWN0LnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgaWYgKG9iamVjdC5jeWNsZSkge1xyXG4gICAgICB2YXIgY29sdW1uID0gb2JqZWN0LmN5Y2xlLmkgJSBvYmplY3QuY3ljbGUuY29sdW1ucztcclxuICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3Iob2JqZWN0LmN5Y2xlLmkgLyBvYmplY3QuY3ljbGUuY29sdW1ucyk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgb2JqZWN0LmltZyxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVswXSAqIGNvbHVtbixcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVsxXSAqIHJvdyxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVswXSxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVsxXSxcclxuICAgICAgICAtb2JqZWN0LndpZHRoIC8gMixcclxuICAgICAgICAtb2JqZWN0LmhlaWdodCAvIDIsXHJcbiAgICAgICAgb2JqZWN0LndpZHRoLFxyXG4gICAgICAgIG9iamVjdC5oZWlnaHQsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAob2JqZWN0LmN5Y2xlLmkgPD0gMCkge1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5pID0gMDtcclxuICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChvYmplY3QuY3ljbGUuaSA+PSBvYmplY3QuY3ljbGUuY29sdW1ucyAqIG9iamVjdC5jeWNsZS5yb3dzKSB7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSBvYmplY3QuY3ljbGUuY29sdW1ucyAqIG9iamVjdC5jeWNsZS5yb3dzIC0gMTtcclxuICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2Uob2JqZWN0LmltZywgLW9iamVjdC53aWR0aCAvIDIsIC1vYmplY3QuaGVpZ2h0IC8gMiwgb2JqZWN0LndpZHRoLCBvYmplY3QuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgc3BhY2VzaGlwO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgICRzY29wZS5wbGF5aW5nID0gdHJ1ZTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGFjZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwYWNlcGljcyk7XHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICBzcGFjZXNoaXAgPSBuZXcgU3BhY2VzaGlwKCk7XHJcbiAgICAkc2NvcGUuc2NvcmUgPSAwO1xyXG4gICAgc3Bhd25Bc3Rlcm9pZHMoNSk7XHJcbiAgICBhdXRvU3Bhd24oKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEVudHJ5UG9zaXRpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIGdyaWRYID0gTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICB2YXIgZ3JpZFkgPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciB4LFxyXG4gICAgICB5ID0gMDtcclxuICAgIGlmIChncmlkWCA+PSAxKSB7XHJcbiAgICAgIHggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xyXG4gICAgICBpZiAoeSA+PSAxKSB7XHJcbiAgICAgICAgeSA9IDAgLSBoZWlnaHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeSA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcclxuICAgICAgaWYgKGdyaWRZID49IDEpIHtcclxuICAgICAgICB4ID0gMCAtIHdpZHRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHggPSBjYW52YXMud2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbeCwgeV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoaXQob2JqZWN0MSwgb2JqZWN0Mikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgb2JqZWN0MS5wb3NpdGlvblswXSA8IG9iamVjdDIucG9zaXRpb25bMF0gKyBvYmplY3QyLndpZHRoICYmXHJcbiAgICAgIG9iamVjdDIucG9zaXRpb25bMF0gPCBvYmplY3QxLnBvc2l0aW9uWzBdICsgb2JqZWN0MS53aWR0aCAmJlxyXG4gICAgICBvYmplY3QxLnBvc2l0aW9uWzFdIDwgb2JqZWN0Mi5wb3NpdGlvblsxXSArIG9iamVjdDIuaGVpZ2h0ICYmXHJcbiAgICAgIG9iamVjdDIucG9zaXRpb25bMV0gPCBvYmplY3QxLnBvc2l0aW9uWzFdICsgb2JqZWN0MS5oZWlnaHRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhdXRvU3Bhd24oKSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoYXN0ZXJvaWRzKS5sZW5ndGggPCAyMDApIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgYXN0ZXJvaWRzW2lkXSA9IG5ldyBBc3Rlcm9pZChpZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYXV0b1NwYXduKCk7XHJcbiAgICAgIH0sIHNwYXduSW50ZXJ2YWwoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkludGVydmFsKCkge1xyXG4gICAgaWYgKCRzY29wZS5zY29yZSA8IDEwMDApIHtcclxuICAgICAgcmV0dXJuIDEwMDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDIwMDApIHtcclxuICAgICAgcmV0dXJuIDkwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgMzAwMCkge1xyXG4gICAgICByZXR1cm4gODAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA0MDAwKSB7XHJcbiAgICAgIHJldHVybiA3MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDUwMDApIHtcclxuICAgICAgcmV0dXJuIDYwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNjAwMCkge1xyXG4gICAgICByZXR1cm4gNTAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA3MDAwKSB7XHJcbiAgICAgIHJldHVybiA0MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDgwMDApIHtcclxuICAgICAgcmV0dXJuIDMwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAyMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkFzdGVyb2lkcyhhbW91bnQpIHtcclxuICAgIHZhciBpID0gMDtcclxuICAgIGRvIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgYXN0ZXJvaWRzW2lkXSA9IG5ldyBBc3Rlcm9pZChpZCk7XHJcbiAgICB9IHdoaWxlIChpKysgPD0gYW1vdW50KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduUG93ZXJ1cCgpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhwb3dlcnVwcykubGVuZ3RoIDwgMykge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBwb3dlcnVwc1tpZF0gPSBuZXcgUG93ZXJ1cChpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnYW1lT3ZlcigpIHtcclxuICAgICRzY29wZS5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO1xyXG4gICAgfVxyXG4gICAgc2hvdHMgPSB7fTtcclxuICAgIGlmICgkc2NvcGUubG9nZ2VkSW4pIHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzIDwgJHNjb3BlLnNjb3JlKSB7XHJcbiAgICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyLmhpZ2hzY29yZS5hc3Rlcm9pZHMgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgICAgR2FtZVN2Yy5zZXRIaWdoc2NvcmUoXCJhc3Rlcm9pZHNcIiwgJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCwgJHNjb3BlLnNjb3JlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdoc2NvcmUgPCAkc2NvcGUuc2NvcmUpIHtcclxuICAgICAgICAkc2NvcGUuaGlnaHNjb3JlID0gJHNjb3BlLnNjb3JlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTdGFydCBsaXN0ZW5pbmcgdG8gcmVzaXplIGV2ZW50cyBhbmRcclxuICAvLyBkcmF3IGNhbnZhcy5cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgIC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcbiAgICAvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuICAgIC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuICAgIC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcbiAgICByZXNpemVDYW52YXMoKTtcclxuICB9XHJcbiAgLy8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG4gIC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG4gIC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG4gIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMTtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogNTkpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZSgpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuXHJcbiAgdmFyIHRhbGx5ID0gMDtcclxuICB2YXIgZGlyZWN0aW9uID0gdHJ1ZTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgaWYgKHNob3RzW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvdHNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgIGFzdGVyb2lkc1tpXS5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gcG93ZXJ1cHMpIHtcclxuICAgICAgcG93ZXJ1cHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGV4cGxvc2lvbnMpIHtcclxuICAgICAgaWYgKGV4cGxvc2lvbnNbaV0ubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBleHBsb3Npb25zW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV4cGxvc2lvbnNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBldmFsdWF0ZUtleXMoKTtcclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzcGFjZXNoaXAubW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIGNhbnZhcy53aWR0aCwgMCk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjBcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjI1XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMC41XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMC43NVwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjEuMFwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgICAgY3R4LmZvbnQgPSBcIjYwcHggTW9ub3RvblwiO1xyXG4gICAgICBjdHguZmlsbFRleHQoXCJBc3Rlcm9pZHNcIiwgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIkFzdGVyb2lkc1wiKS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcclxuICAgICAgY3R4LmZvbnQgPSBcIjIwcHggQWxkcmljaFwiO1xyXG4gICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgXCJQcmVzcyBzcGFjZSB0byBzdGFydFwiLFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoXCJQcmVzcyBzcGFjZSB0byBzdGFydFwiKS53aWR0aCAvIDIsXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCAvIDIgKyAyMCxcclxuICAgICAgKTtcclxuICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgIFwiRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyXCIsXHJcbiAgICAgICAgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIkRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlclwiKS53aWR0aCAvIDIsXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCAtIDMwLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGFsbHkgKz0gZGlyZWN0aW9uID8gMSA6IC0xO1xyXG4gICAgaWYgKHRhbGx5ID4gMTAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMTAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAodGFsbHkgPCAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMDtcclxuICAgICAgZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuICB9XHJcblxyXG4gICRzY29wZS5zcGFjZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImFzdGVyb2lkcy9zcGFjZScgKyBzcGFjZSArICcuanBnXCIpJyxcclxuICAgIH07XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJCdWJibGVzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnViYmxlcy1wYWdlXCIpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIHZhciBidWJibGVzID0gW107XHJcbiAgdmFyIGNvbG9ycyA9IFtcIiNmZmMzMDBcIiwgXCIjZmY1NzMzXCIsIFwiI2M3MDAzOVwiLCBcIiM5MDBjM2VcIiwgXCIjNTcxODQ1XCJdO1xyXG5cclxuICBmdW5jdGlvbiBCdWJibGUoKSB7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gMDtcclxuICAgIHRoaXMucmFkaXVzID0gMTtcclxuICAgIHRoaXMuZXhwYW5kaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgIHRoaXMuY2lyY3VtZmVyZW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDUwKSArIDU7XHJcbiAgICB0aGlzLm1heFJhZGl1cyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDIwMCkgKyAyMDtcclxuICAgIHRoaXMueCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aCk7XHJcbiAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0KTtcclxuICAgIHRoaXMudnggPSBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMTtcclxuICAgIHRoaXMudnkgPSBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBidWJibGVzLmZvckVhY2goZnVuY3Rpb24gKGJ1YmJsZSkge1xyXG4gICAgICB2YXIgY29sb3IgPSBjb2xvcnNbTWF0aC5yb3VuZCgoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMpIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMoYnViYmxlLngsIGJ1YmJsZS55LCBidWJibGUucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbTWF0aC5yb3VuZCgoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMpIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcnNbY29sb3JzLmxlbmd0aCAtIE1hdGgucm91bmQoKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzKSAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9IChidWJibGUuY2lyY3VtZmVyZW5jZSAqIGJ1YmJsZS5yYWRpdXMpIC8gYnViYmxlLm1heFJhZGl1cztcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWx0ZXJCdWJibGVzKCkge1xyXG4gICAgYnViYmxlcy5wdXNoKG5ldyBCdWJibGUoKSk7XHJcbiAgICBidWJibGVzID0gYnViYmxlcy5maWx0ZXIoZnVuY3Rpb24gKGJ1YmJsZSkge1xyXG4gICAgICBpZiAoYnViYmxlLnJhZGl1cyA9PT0gYnViYmxlLm1heFJhZGl1cykge1xyXG4gICAgICAgIGJ1YmJsZS5leHBhbmRpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBidWJibGUueCArPSBidWJibGUudnggKiBidWJibGUuc3BlZWQ7XHJcbiAgICAgIGJ1YmJsZS55ICs9IGJ1YmJsZS52eSAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnJhZGl1cyArPSBidWJibGUuZXhwYW5kaW5nID8gMSA6IC0xO1xyXG4gICAgICByZXR1cm4gYnViYmxlLnJhZGl1cyA+IDA7XHJcbiAgICB9KTtcclxuICAgIGRyYXcoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuXHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG4gICAgLy8gZHJhdyBjYW52YXMuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgLy8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuICAgICAgLy8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcbiAgICAgIC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG4gICAgICAvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG4gICAgICByZXNpemVDYW52YXMoKTtcclxuICAgIH1cclxuICAgIC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuICAgIC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG4gICAgLy8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcbiAgICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1NSA6IDU2KTtcclxuICAgIH1cclxuICB9KSgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkNoYXJhZGVzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgJHNjb3BlLnNlbGVjdFdvcmQgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICRzY29wZS53b3JkID0gJHNjb3BlLmNoYXJhZGVzW2NhdGVnb3J5XVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldLmxlbmd0aCldO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQ29udGFjdEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRW1haWxTdmMpIHtcclxuICAkc2NvcGUub3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTcGFtXCIsXHJcbiAgICAgIHRleHQ6IFwiSSBhbSBhIHNwYW0gYm90IGFuZCBhdXRvbWF0aWNhbGx5IGNoZWNrIHRoZSBmaXJzdCBvcHRpb24gSSBmaW5kIVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPcHBvcnR1bml0eVwiLFxyXG4gICAgICB0ZXh0OiBcIllvdSBzZWVtIHRvIGhhdmUgdGhlIHNraWxscyBJIHNlZWssIEknZCBsaWtlIHRvIHRhbGsgYWJvdXQgc29tZSBvcHBvcnR1bml0aWVzLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZXN1bWVcIixcclxuICAgICAgdGV4dDogXCJJIGRpZyB0aGUgcmVzdW1lLCBob3cgZGlkIHlvdSBtYWtlIGl0P1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPdGhlclwiLFxyXG4gICAgICB0ZXh0OiBcIlN1bXRpbiBlbHNlIVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICAkc2NvcGUuY29udGFjdCA9IHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gICAgYWJvdXQ6IFwiXCIsXHJcbiAgICBtZXNzYWdlOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnNlbmRpbmcgPSB0cnVlO1xyXG4gICAgRW1haWxTdmMuc2VuZCh7XHJcbiAgICAgIGVtYWlsOiAkc2NvcGUuY29udGFjdC5lbWFpbCxcclxuICAgICAgbmFtZTogJHNjb3BlLmNvbnRhY3QubmFtZSxcclxuICAgICAgcGhvbmU6ICRzY29wZS5jb250YWN0LnBob25lLFxyXG4gICAgICBhYm91dDogJHNjb3BlLmNvbnRhY3QuYWJvdXQsXHJcbiAgICAgIG1lc3NhZ2U6ICRzY29wZS5jb250YWN0Lm1lc3NhZ2UsXHJcbiAgICB9KS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUudG9hc3QoXCJNZXNzYWdlIHNlbnRcIik7XHJcbiAgICAgICAgJHNjb3BlLnNlbnQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTUy4gc3RhdHVzPSVkLCB0ZXh0PSVzXCIsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UudGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgJHNjb3BlLnRvYXN0KFwiTWVzc2FnZSBzZW5kIGZhaWxlZFwiKTtcclxuICAgICAgICAkc2NvcGUuc2VuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRkFJTEVELiBlcnJvcj1cIiwgZXJyKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignRXhwZXJpZW5jZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICRzY29wZS5nZXRTa2lsbCA9IGZ1bmN0aW9uKHNraWxsQ29kZSkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2tpbGxzKSByZXR1cm47XHJcbiAgICByZXR1cm4gJHNjb3BlLnNraWxscy5maW5kKGZ1bmN0aW9uKHNraWxsKSB7XHJcbiAgICAgIHJldHVybiBza2lsbC5jb2RlID09PSBza2lsbENvZGU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignSG9iYmllc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAkLmdldEpTT04oJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vdXNlci9iZWxnb2NhbmFkaWFuL2Fib3V0Ly5qc29uJywgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRIb2JieSA9ICRzY29wZS5ob2JiaWVzWzBdO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0SG9iYnkgPSBmdW5jdGlvbiAoaG9iYnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gaG9iYnk7XHJcbiAgICAkc2NvcGUuaG9iYnlTZWxlY3RvclZpc2libGUgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd0hvYmJ5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpIHtcclxuICAgIGlmICghdmFsdWUuaW1hZ2VzKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdmFsdWUuaW1hZ2VzLmxlbmd0aCA+IDA7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignTGVtbWluZ3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgR2FtZVN2Yykge1xyXG5cclxuICB2YXIgTEVGVCA9IDA7XHJcbiAgdmFyIFJJR0hUID0gMTtcclxuXHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZW1taW5ncy1wYWdlJyk7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIHZhciBsZW1taW5nc0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgbGVtbWluZ3NJbWFnZS5zcmMgPSAnbGVtbWluZ3MvbGVtbWluZ3MucG5nJztcclxuICB2YXIgZGVjb3JJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGRlY29ySW1hZ2Uuc3JjID0gJ2xlbW1pbmdzL2RlY29yLnBuZyc7XHJcbiAgdmFyIGxlbW1pbmdzID0ge307XHJcbiAgdmFyIHN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgdmFyIGFjdGlvbnMgPSB7XHJcbiAgICB3YWxrOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMF0sXHJcbiAgICAgIGVuZDogWzMyMCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGh1aDoge1xyXG4gICAgICBzdGFydDogWzMyMCwgMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZmFsbDoge1xyXG4gICAgICBzdGFydDogWzAsIDgwXSxcclxuICAgICAgZW5kOiBbMTYwLCAxMDBdLFxyXG4gICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGZseToge1xyXG4gICAgICBzdGFydDogWzE2MCwgODBdLFxyXG4gICAgICBlbmQ6IFs0ODAsIDExMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc3RvcDoge1xyXG4gICAgICBzdGFydDogWzAsIDEyMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTQwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgY2xpbWI6IHtcclxuICAgICAgc3RhcnQ6IFswLCAxNjBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDE4NV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMjVdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwdW5jaDoge1xyXG4gICAgICBzdGFydDogWzAsIDI0MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMzAwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZGlnOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMzIwXSxcclxuICAgICAgZW5kOiBbMzIwLCAzNDVdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBMZW1taW5nKGluaXQpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNhbnZhcy53aWR0aCAtIDIwMCkpICsgMTAwLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLmhlaWdodCAtIDIwMCkpICsgMTAwXTtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSAqIDIgPiAxID8gTEVGVCA6IFJJR0hUO1xyXG4gICAgdGhpcy5hY3QgPSBmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb25zW2FjdGlvbl07XHJcbiAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gKDIwICogKHRoaXMuYWN0aW9uLnJvd3MgLSAxKSkpIC8gdGhpcy5hY3Rpb24ucm93cztcclxuICAgICAgdGhpcy5hbmltYXRpb24gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuYWN0KGluaXQpO1xyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSwgdGhpcy5wb3NpdGlvblsxXSk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gTEVGVCkge1xyXG4gICAgICAgIGN0eC5zY2FsZSgtMSwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UobGVtbWluZ3NJbWFnZSwgKHRoaXMud2lkdGggKiBjb2x1bW4pICsgdGhpcy5hY3Rpb24uc3RhcnRbMF0sICgodGhpcy5oZWlnaHQgKyAyMCkgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgaWYgKHRoaXMuYWN0aW9uLnJldmVyc2UpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlLS07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICF0aGlzLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICBpZiAodGhpcy5jeWNsZSA+PSB0aGlzLmFjdGlvbi5jb2x1bW5zICogdGhpcy5hY3Rpb24ucm93cykge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGF0Y2goKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gWzIwLCAyMF07XHJcbiAgICB0aGlzLmFjdGlvbiA9IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbODIsIDUwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgIHJvd3M6IDEwXHJcbiAgICB9XHJcbiAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICB0aGlzLmhlaWdodCA9ICh0aGlzLmFjdGlvbi5lbmRbMV0gLSB0aGlzLmFjdGlvbi5zdGFydFsxXSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICB0aGlzLm9wZW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgdmFyIGNvbHVtbiwgcm93O1xyXG4gICAgICBpZiAoc3RhcnRlZCkge1xyXG4gICAgICAgIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3IodGhpcy5jeWNsZSAvIHRoaXMuYWN0aW9uLmNvbHVtbnMpO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgOSkge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb2x1bW4gPSAwO1xyXG4gICAgICAgIHJvdyA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgY3R4LmRyYXdJbWFnZShkZWNvckltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKHRoaXMuaGVpZ2h0ICogcm93KSArIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gMSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25MZW1taW5nKCkge1xyXG4gICAgT2JqZWN0LmtleXMoYWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgbGVtbWluZ3NbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKV0gPSBuZXcgTGVtbWluZyhhY3Rpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdHJlc2l6ZUNhbnZhcygpO1xyXG5cdH1cclxuXHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0Ly8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcblx0Ly8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcblx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG5cdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1MCA6IDEwNSk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbiAgc3Bhd25MZW1taW5nKCk7XHJcbiAgbGV0IGhhdGNoID0gbmV3IEhhdGNoKClcclxuICBkcmF3KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBpZiAoIXN0YXJ0ZWQpIHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguZm9udD0nNDBweCBNb25vdG9uJztcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9ICcxMCc7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcclxuICAgICAgY3R4LnJlY3QoMTUsIGNhbnZhcy5oZWlnaHQgLSA0NSwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLndpZHRoICsgMjAsIGN0eC5tZWFzdXJlVGV4dCgnU3RhcnQnKS5oZWlnaHQgKyBjYW52YXMuaGVpZ2h0IC0gNDUpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ1N0YXJ0JywgMjAsIGNhbnZhcy5oZWlnaHQgLSA1MCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKHZhciBpIGluIGxlbW1pbmdzKSB7XHJcbiAgICAgICAgbGVtbWluZ3NbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYXRjaC5vcGVuKCk7XHJcbiAgICBzdGFydGVkID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGRyYXcoKTtcclxuICAgIH0sIDE1MCk7XHJcbiAgfVxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMaXN0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIENhdGVnb3JpZXNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IHRydWU7XHJcblxyXG4gICRzY29wZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5nZXRDYXRlZ29yaWVzKClcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICRzY29wZS50YXNrcyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpIGluICRzY29wZS5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaiBpbiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrcykge1xyXG4gICAgICAgICAgJHNjb3BlLnRhc2tzLnB1c2goe1xyXG4gICAgICAgICAgICBcImNhdGVnb3J5XCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUsXHJcbiAgICAgICAgICAgIFwidGFza1wiOiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrc1tqXS5uYW1lXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RDYXRlZ29yeSA9IGZ1bmN0aW9uKGNhdGVnb3J5KSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkVGFza3MgPSBbXTtcclxuICAgICRzY29wZS5zZWxlY3RhYmxlVGFza3MgPSBbXTtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcy5wdXNoKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgIH1cclxuICAgICRzY29wZS5zaG93Q2F0ZWdvcnkgPSBmYWxzZTtcclxuICAgICRzY29wZS5lbnRlcmVkQ2F0ZWdvcnkgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUubmV3Q2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSA9PT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkoJHNjb3BlLmNhdGVnb3JpZXNbaV0pO1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZENhdGVnb3J5KHtcclxuICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuaW5pdCgpO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0ubmFtZSA9PT0gdGFzaykge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0VGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5Lm5hbWUsIHtcclxuICAgICAgICB0YXNrOiB0YXNrXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLnB1c2goeyBuYW1lOiB0YXNrIH0pO1xyXG4gICAgICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1skc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRUYXNrID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUudW5zZWxlY3RUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RhYmxlVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5hZGRUYXNrID0gZnVuY3Rpb24odGFza0xpc3QsIHRhc2spIHtcclxuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnJlbW92ZVRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3Quc3BsaWNlKHRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zdGFydFByaW9yaXRpemluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5zZXRQcmlvcml0eUxpc3QoJHNjb3BlLnNlbGVjdGVkVGFza3MpO1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy9wcmlvcml0aXplJyk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldFF1ZXN0aW9ucyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2VsZWN0ZWRUYXNrcykgcmV0dXJuICcnO1xyXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9ICRzY29wZS5zZWxlY3RlZFRhc2tzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgY291bnRlciArPSBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiTG9naW5DdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG4gIC8vIEluaXRpYWxpemUgdGhlIEZpcmViYXNlVUkgV2lkZ2V0IHVzaW5nIEZpcmViYXNlLlxyXG4gIHZhciB1aSA9IG5ldyBmaXJlYmFzZXVpLmF1dGguQXV0aFVJKGZpcmViYXNlLmF1dGgoKSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2dvdXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB1aS5yZXNldCgpO1xyXG4gICAgc3RhcnRVSSgpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydFVJKCkge1xyXG4gICAgdWkuc3RhcnQoXCIjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lclwiLCB7XHJcbiAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgIHNpZ25JblN1Y2Nlc3M6IGZ1bmN0aW9uIChjdXJyZW50VXNlciwgY3JlZGVudGlhbCwgcmVkaXJlY3RVcmwpIHtcclxuICAgICAgICAgIC8vIE5vIHJlZGlyZWN0LlxyXG4gICAgICAgICAgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmF1dGgoKVxyXG4gICAgICAgICAgICAuY3VycmVudFVzZXIuZ2V0SWRUb2tlbih0cnVlKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoaWRUb2tlbikge1xyXG4gICAgICAgICAgICAgIFVzZXJTdmMuYXV0aGVudGljYXRlKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBjdXJyZW50VXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBjdXJyZW50VXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHBob3RvVVJMOiBjdXJyZW50VXNlci5waG90b1VSTCxcclxuICAgICAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IGN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQsXHJcbiAgICAgICAgICAgICAgICBpZFRva2VuOiBpZFRva2VuLFxyXG4gICAgICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLiRlbWl0KFwibG9naW5cIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICQoXCIjbW9kYWwtbG9naW5cIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgICAvLyRsb2NhdGlvbi5wYXRoKCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUudG9hc3QoXCJMb2dpbiBGYWlsZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gc2lnbkluRmFpbHVyZSBjYWxsYmFjayBtdXN0IGJlIHByb3ZpZGVkIHRvIGhhbmRsZSBtZXJnZSBjb25mbGljdHMgd2hpY2hcclxuICAgICAgICAvLyBvY2N1ciB3aGVuIGFuIGV4aXN0aW5nIGNyZWRlbnRpYWwgaXMgbGlua2VkIHRvIGFuIGFub255bW91cyB1c2VyLlxyXG4gICAgICAgIHNpZ25JbkZhaWx1cmU6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgLy8gRm9yIG1lcmdlIGNvbmZsaWN0cywgdGhlIGVycm9yLmNvZGUgd2lsbCBiZVxyXG4gICAgICAgICAgLy8gJ2ZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3QnLlxyXG4gICAgICAgICAgaWYgKGVycm9yLmNvZGUgIT0gXCJmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gVGhlIGNyZWRlbnRpYWwgdGhlIHVzZXIgdHJpZWQgdG8gc2lnbiBpbiB3aXRoLlxyXG4gICAgICAgICAgdmFyIGNyZWQgPSBlcnJvci5jcmVkZW50aWFsO1xyXG4gICAgICAgICAgLy8gQ29weSBkYXRhIGZyb20gYW5vbnltb3VzIHVzZXIgdG8gcGVybWFuZW50IHVzZXIgYW5kIGRlbGV0ZSBhbm9ueW1vdXNcclxuICAgICAgICAgIC8vIHVzZXIuXHJcbiAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgIC8vIEZpbmlzaCBzaWduLWluIGFmdGVyIGRhdGEgaXMgY29waWVkLlxyXG4gICAgICAgICAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoQ3JlZGVudGlhbChjcmVkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVpU2hvd246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vIFRoZSB3aWRnZXQgaXMgcmVuZGVyZWQuXHJcbiAgICAgICAgICAvLyBIaWRlIHRoZSBsb2FkZXIuXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2lnbkluU3VjY2Vzc1VybDogXCIvaG9tZVwiLFxyXG4gICAgICBzaWduSW5PcHRpb25zOiBbXHJcbiAgICAgICAgLy9maXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICAvLyBXaWxsIHVzZSBwb3B1cCBmb3IgSURQIFByb3ZpZGVycyBzaWduLWluIGZsb3cgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCwgcmVkaXJlY3QuXHJcbiAgICAgIHNpZ25JbkZsb3c6IFwicG9wdXBcIixcclxuICAgICAgLy8gT3RoZXIgY29uZmlnIG9wdGlvbnMuLi5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRVSSgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkZmlsdGVyLCBQb3N0c1N2Yykge1xyXG5cclxuICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkc2NvcGUucG9zdEJvZHkpIHtcclxuICAgICAgUG9zdHNTdmMuY3JlYXRlKHtcclxuICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBvc3RzU3ZjLmZldGNoKClcclxuICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5wb3N0cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oJ3dzOm5ld19wb3N0JywgZnVuY3Rpb24gKF8sIHBvc3QpIHtcclxuICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICBQb3N0c1N2Yy5nZXRQb3N0KHBvc3QpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5wb3N0cy51bnNoaWZ0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJQcm9maWxlQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFVzZXJTdmMpIHtcclxuICBjb25zdCBjb3VudHJpZXMgPSBbXHJcbiAgICB7IG5hbWU6IFwiQW5kb3JyYVwiLCBmbGFnOiBcImZsYWctYWRcIiwgdGlkYml0OiBcIlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIiwgZmxhZzogXCJmbGFnLWFlXCIgfSxcclxuICAgIHsgbmFtZTogXCJBZmdoYW5pc3RhblwiLCBmbGFnOiBcImZsYWctYWZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIiwgZmxhZzogXCJmbGFnLWFnXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbmd1aWxsYVwiLCBmbGFnOiBcImZsYWctYWlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFsYmFuaWFcIiwgZmxhZzogXCJmbGFnLWFsXCIgfSxcclxuICAgIHsgbmFtZTogXCJBcm1lbmlhXCIsIGZsYWc6IFwiZmxhZy1hbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW5nb2xhXCIsIGZsYWc6IFwiZmxhZy1hb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW50YXJjdGljYVwiLCBmbGFnOiBcImZsYWctYXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFyZ2VudGluYVwiLCBmbGFnOiBcImZsYWctYXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFtZXJpY2FuIFNvbW9hXCIsIGZsYWc6IFwiZmxhZy1hc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXVzdHJpYVwiLCBmbGFnOiBcImZsYWctYXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF1c3RyYWxpYVwiLCBmbGFnOiBcImZsYWctYXVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFydWJhXCIsIGZsYWc6IFwiZmxhZy1hd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiw4VsYW5kIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWF4XCIgfSxcclxuICAgIHsgbmFtZTogXCJBemVyYmFpamFuXCIsIGZsYWc6IFwiZmxhZy1helwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBmbGFnOiBcImZsYWctYmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhcmJhZG9zXCIsIGZsYWc6IFwiZmxhZy1iYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFuZ2xhZGVzaFwiLCBmbGFnOiBcImZsYWctYmRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGdpdW1cIiwgZmxhZzogXCJmbGFnLWJlXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdXJraW5hIEZhc29cIiwgZmxhZzogXCJmbGFnLWJmXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdWxnYXJpYVwiLCBmbGFnOiBcImZsYWctYmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhaHJhaW5cIiwgZmxhZzogXCJmbGFnLWJoXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdXJ1bmRpXCIsIGZsYWc6IFwiZmxhZy1iaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVuaW5cIiwgZmxhZzogXCJmbGFnLWJqXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBCYXJ0aMOpbGVteVwiLCBmbGFnOiBcImZsYWctYmxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlcm11ZGFcIiwgZmxhZzogXCJmbGFnLWJtXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcnVuZWkgXCIsIGZsYWc6IFwiZmxhZy1iblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9saXZpYSwgUGx1cmluYXRpb25hbCBTdGF0ZSBvZlwiLCBmbGFnOiBcImZsYWctYm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCIsIGZsYWc6IFwiZmxhZy1icVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJhemlsXCIsIGZsYWc6IFwiZmxhZy1iclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFoYW1hc1wiLCBmbGFnOiBcImZsYWctYnNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJodXRhblwiLCBmbGFnOiBcImZsYWctYnRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvdXZldCBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLWJ2XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3Rzd2FuYVwiLCBmbGFnOiBcImZsYWctYndcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGFydXNcIiwgZmxhZzogXCJmbGFnLWJ5XCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxpemVcIiwgZmxhZzogXCJmbGFnLWJ6XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW5hZGFcIiwgZmxhZzogXCJmbGFnLWNhXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb2NvcyAoS2VlbGluZykgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctY2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbmdvLCB0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGVcIiwgZmxhZzogXCJmbGFnLWNkXCIgfSxcclxuICAgIHsgbmFtZTogXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWNmXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb25nb1wiLCBmbGFnOiBcImZsYWctY2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3aXR6ZXJsYW5kXCIsIGZsYWc6IFwiZmxhZy1jaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ8O0dGUgZCdJdm9pcmVcIiwgZmxhZzogXCJmbGFnLWNpXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb29rIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWNrXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGlsZVwiLCBmbGFnOiBcImZsYWctY2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbWVyb29uXCIsIGZsYWc6IFwiZmxhZy1jbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hpbmFcIiwgZmxhZzogXCJmbGFnLWNuXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb2xvbWJpYVwiLCBmbGFnOiBcImZsYWctY29cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvc3RhIFJpY2FcIiwgZmxhZzogXCJmbGFnLWNyXCIgfSxcclxuICAgIHsgbmFtZTogXCJDdWJhXCIsIGZsYWc6IFwiZmxhZy1jdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FibyBWZXJkZVwiLCBmbGFnOiBcImZsYWctY3ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN1cmHDp2FvXCIsIGZsYWc6IFwiZmxhZy1jd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hyaXN0bWFzIElzbGFuZFwiLCBmbGFnOiBcImZsYWctY3hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN5cHJ1c1wiLCBmbGFnOiBcImZsYWctY3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN6ZWNoIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1jelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2VybWFueVwiLCBmbGFnOiBcImZsYWctZGVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRqaWJvdXRpXCIsIGZsYWc6IFwiZmxhZy1kalwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGVubWFya1wiLCBmbGFnOiBcImZsYWctZGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRvbWluaWNhXCIsIGZsYWc6IFwiZmxhZy1kbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRG9taW5pY2FuIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1kb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWxnZXJpYVwiLCBmbGFnOiBcImZsYWctZHpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVjdWFkb3JcIiwgZmxhZzogXCJmbGFnLWVjXCIgfSxcclxuICAgIHsgbmFtZTogXCJFc3RvbmlhXCIsIGZsYWc6IFwiZmxhZy1lZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWd5cHRcIiwgZmxhZzogXCJmbGFnLWVnXCIgfSxcclxuICAgIHsgbmFtZTogXCJXZXN0ZXJuIFNhaGFyYVwiLCBmbGFnOiBcImZsYWctZWhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVyaXRyZWFcIiwgZmxhZzogXCJmbGFnLWVyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTcGFpblwiLCBmbGFnOiBcImZsYWctZXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkV0aGlvcGlhXCIsIGZsYWc6IFwiZmxhZy1ldFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmlubGFuZFwiLCBmbGFnOiBcImZsYWctZmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZpamlcIiwgZmxhZzogXCJmbGFnLWZqXCIgfSxcclxuICAgIHsgbmFtZTogXCJGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcylcIiwgZmxhZzogXCJmbGFnLWZrXCIgfSxcclxuICAgIHsgbmFtZTogXCJNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIG9mXCIsIGZsYWc6IFwiZmxhZy1mbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmFyb2UgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctZm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyYW5jZVwiLCBmbGFnOiBcImZsYWctZnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdhYm9uXCIsIGZsYWc6IFwiZmxhZy1nYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZFwiLCBmbGFnOiBcImZsYWctZ2JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZW5hZGFcIiwgZmxhZzogXCJmbGFnLWdkXCIgfSxcclxuICAgIHsgbmFtZTogXCJHZW9yZ2lhXCIsIGZsYWc6IFwiZmxhZy1nZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIEd1aWFuYVwiLCBmbGFnOiBcImZsYWctZ2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1ZXJuc2V5XCIsIGZsYWc6IFwiZmxhZy1nZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2hhbmFcIiwgZmxhZzogXCJmbGFnLWdoXCIgfSxcclxuICAgIHsgbmFtZTogXCJHaWJyYWx0YXJcIiwgZmxhZzogXCJmbGFnLWdpXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVlbmxhbmRcIiwgZmxhZzogXCJmbGFnLWdsXCIgfSxcclxuICAgIHsgbmFtZTogXCJHYW1iaWFcIiwgZmxhZzogXCJmbGFnLWdtXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWluZWFcIiwgZmxhZzogXCJmbGFnLWduXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWFkZWxvdXBlXCIsIGZsYWc6IFwiZmxhZy1ncFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXF1YXRvcmlhbCBHdWluZWFcIiwgZmxhZzogXCJmbGFnLWdxXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVlY2VcIiwgZmxhZzogXCJmbGFnLWdyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctZ3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YXRlbWFsYVwiLCBmbGFnOiBcImZsYWctZ3RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YW1cIiwgZmxhZzogXCJmbGFnLWd1XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWluZWEtQmlzc2F1XCIsIGZsYWc6IFwiZmxhZy1nd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3V5YW5hXCIsIGZsYWc6IFwiZmxhZy1neVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9uZyBLb25nXCIsIGZsYWc6IFwiZmxhZy1oa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1obVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9uZHVyYXNcIiwgZmxhZzogXCJmbGFnLWhuXCIgfSxcclxuICAgIHsgbmFtZTogXCJDcm9hdGlhXCIsIGZsYWc6IFwiZmxhZy1oclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSGFpdGlcIiwgZmxhZzogXCJmbGFnLWh0XCIgfSxcclxuICAgIHsgbmFtZTogXCJIdW5nYXJ5XCIsIGZsYWc6IFwiZmxhZy1odVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSW5kb25lc2lhXCIsIGZsYWc6IFwiZmxhZy1pZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJlbGFuZFwiLCBmbGFnOiBcImZsYWctaWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklzcmFlbFwiLCBmbGFnOiBcImZsYWctaWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklzbGUgb2YgTWFuXCIsIGZsYWc6IFwiZmxhZy1pbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSW5kaWFcIiwgZmxhZzogXCJmbGFnLWluXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnlcIiwgZmxhZzogXCJmbGFnLWlvXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmFxXCIsIGZsYWc6IFwiZmxhZy1pcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJhbiwgSXNsYW1pYyBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctaXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkljZWxhbmRcIiwgZmxhZzogXCJmbGFnLWlzXCIgfSxcclxuICAgIHsgbmFtZTogXCJJdGFseVwiLCBmbGFnOiBcImZsYWctaXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkplcnNleVwiLCBmbGFnOiBcImZsYWctamVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkphbWFpY2FcIiwgZmxhZzogXCJmbGFnLWptXCIgfSxcclxuICAgIHsgbmFtZTogXCJKb3JkYW5cIiwgZmxhZzogXCJmbGFnLWpvXCIgfSxcclxuICAgIHsgbmFtZTogXCJKYXBhblwiLCBmbGFnOiBcImZsYWctanBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktlbnlhXCIsIGZsYWc6IFwiZmxhZy1rZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS3lyZ3l6c3RhblwiLCBmbGFnOiBcImZsYWcta2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbWJvZGlhXCIsIGZsYWc6IFwiZmxhZy1raFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2lyaWJhdGlcIiwgZmxhZzogXCJmbGFnLWtpXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb21vcm9zXCIsIGZsYWc6IFwiZmxhZy1rbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsIGZsYWc6IFwiZmxhZy1rblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWtwXCIgfSxcclxuICAgIHsgbmFtZTogXCJLb3JlYSwgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWtyXCIgfSxcclxuICAgIHsgbmFtZTogXCJLdXdhaXRcIiwgZmxhZzogXCJmbGFnLWt3XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYXltYW4gSXNsYW5kc1wiLCBmbGFnOiBcImZsYWcta3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkthemFraHN0YW5cIiwgZmxhZzogXCJmbGFnLWt6XCIgfSxcclxuICAgIHsgbmFtZTogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctbGFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxlYmFub25cIiwgZmxhZzogXCJmbGFnLWxiXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBMdWNpYVwiLCBmbGFnOiBcImZsYWctbGNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpZWNodGVuc3RlaW5cIiwgZmxhZzogXCJmbGFnLWxpXCIgfSxcclxuICAgIHsgbmFtZTogXCJTcmkgTGFua2FcIiwgZmxhZzogXCJmbGFnLWxrXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWJlcmlhXCIsIGZsYWc6IFwiZmxhZy1sclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGVzb3Rob1wiLCBmbGFnOiBcImZsYWctbHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpdGh1YW5pYVwiLCBmbGFnOiBcImZsYWctbHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkx1eGVtYm91cmdcIiwgZmxhZzogXCJmbGFnLWx1XCIgfSxcclxuICAgIHsgbmFtZTogXCJMYXR2aWFcIiwgZmxhZzogXCJmbGFnLWx2XCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWJ5YVwiLCBmbGFnOiBcImZsYWctbHlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vcm9jY29cIiwgZmxhZzogXCJmbGFnLW1hXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb25hY29cIiwgZmxhZzogXCJmbGFnLW1jXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb2xkb3ZhLCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctbWRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbnRlbmVncm9cIiwgZmxhZzogXCJmbGFnLW1lXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KVwiLCBmbGFnOiBcImZsYWctbWZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hZGFnYXNjYXJcIiwgZmxhZzogXCJmbGFnLW1nXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXJzaGFsbCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1taFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFjZWRvbmlhLCB0aGUgZm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1ta1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsaVwiLCBmbGFnOiBcImZsYWctbWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk15YW5tYXJcIiwgZmxhZzogXCJmbGFnLW1tXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb25nb2xpYVwiLCBmbGFnOiBcImZsYWctbW5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hY2FvXCIsIGZsYWc6IFwiZmxhZy1tb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1tcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFydGluaXF1ZVwiLCBmbGFnOiBcImZsYWctbXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hdXJpdGFuaWFcIiwgZmxhZzogXCJmbGFnLW1yXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb250c2VycmF0XCIsIGZsYWc6IFwiZmxhZy1tc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsdGFcIiwgZmxhZzogXCJmbGFnLW10XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXVyaXRpdXNcIiwgZmxhZzogXCJmbGFnLW11XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxkaXZlc1wiLCBmbGFnOiBcImZsYWctbXZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGF3aVwiLCBmbGFnOiBcImZsYWctbXdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1leGljb1wiLCBmbGFnOiBcImZsYWctbXhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGF5c2lhXCIsIGZsYWc6IFwiZmxhZy1teVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW96YW1iaXF1ZVwiLCBmbGFnOiBcImZsYWctbXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hbWliaWFcIiwgZmxhZzogXCJmbGFnLW5hXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXcgQ2FsZWRvbmlhXCIsIGZsYWc6IFwiZmxhZy1uY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmlnZXJcIiwgZmxhZzogXCJmbGFnLW5lXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3Jmb2xrIElzbGFuZFwiLCBmbGFnOiBcImZsYWctbmZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pZ2VyaWFcIiwgZmxhZzogXCJmbGFnLW5nXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWNhcmFndWFcIiwgZmxhZzogXCJmbGFnLW5pXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXRoZXJsYW5kc1wiLCBmbGFnOiBcImZsYWctbmxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcndheVwiLCBmbGFnOiBcImZsYWctbm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5lcGFsXCIsIGZsYWc6IFwiZmxhZy1ucFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmF1cnVcIiwgZmxhZzogXCJmbGFnLW5yXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaXVlXCIsIGZsYWc6IFwiZmxhZy1udVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV3IFplYWxhbmRcIiwgZmxhZzogXCJmbGFnLW56XCIgfSxcclxuICAgIHsgbmFtZTogXCJPbWFuXCIsIGZsYWc6IFwiZmxhZy1vbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFuYW1hXCIsIGZsYWc6IFwiZmxhZy1wYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGVydVwiLCBmbGFnOiBcImZsYWctcGVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBQb2x5bmVzaWFcIiwgZmxhZzogXCJmbGFnLXBmXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYXB1YSBOZXcgR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1wZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGhpbGlwcGluZXNcIiwgZmxhZzogXCJmbGFnLXBoXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWtpc3RhblwiLCBmbGFnOiBcImZsYWctcGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBvbGFuZFwiLCBmbGFnOiBcImZsYWctcGxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIiwgZmxhZzogXCJmbGFnLXBtXCIgfSxcclxuICAgIHsgbmFtZTogXCJQaXRjYWlyblwiLCBmbGFnOiBcImZsYWctcG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlB1ZXJ0byBSaWNvXCIsIGZsYWc6IFwiZmxhZy1wclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwiLCBmbGFnOiBcImZsYWctcHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBvcnR1Z2FsXCIsIGZsYWc6IFwiZmxhZy1wdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFsYXVcIiwgZmxhZzogXCJmbGFnLXB3XCIgfSxcclxuICAgIHsgbmFtZTogXCJQYXJhZ3VheVwiLCBmbGFnOiBcImZsYWctcHlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlFhdGFyXCIsIGZsYWc6IFwiZmxhZy1xYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUsOpdW5pb25cIiwgZmxhZzogXCJmbGFnLXJlXCIgfSxcclxuICAgIHsgbmFtZTogXCJSb21hbmlhXCIsIGZsYWc6IFwiZmxhZy1yb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2VyYmlhXCIsIGZsYWc6IFwiZmxhZy1yc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUnVzc2lhbiBGZWRlcmF0aW9uXCIsIGZsYWc6IFwiZmxhZy1ydVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUndhbmRhXCIsIGZsYWc6IFwiZmxhZy1yd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2F1ZGkgQXJhYmlhXCIsIGZsYWc6IFwiZmxhZy1zYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU29sb21vbiBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1zYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2V5Y2hlbGxlc1wiLCBmbGFnOiBcImZsYWctc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN1ZGFuXCIsIGZsYWc6IFwiZmxhZy1zZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dlZGVuXCIsIGZsYWc6IFwiZmxhZy1zZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2luZ2Fwb3JlXCIsIGZsYWc6IFwiZmxhZy1zZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGFcIiwgZmxhZzogXCJmbGFnLXNoXCIgfSxcclxuICAgIHsgbmFtZTogXCJTbG92ZW5pYVwiLCBmbGFnOiBcImZsYWctc2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIiwgZmxhZzogXCJmbGFnLXNqXCIgfSxcclxuICAgIHsgbmFtZTogXCJTbG92YWtpYVwiLCBmbGFnOiBcImZsYWctc2tcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpZXJyYSBMZW9uZVwiLCBmbGFnOiBcImZsYWctc2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbiBNYXJpbm9cIiwgZmxhZzogXCJmbGFnLXNtXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZW5lZ2FsXCIsIGZsYWc6IFwiZmxhZy1zblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU29tYWxpYVwiLCBmbGFnOiBcImZsYWctc29cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN1cmluYW1lXCIsIGZsYWc6IFwiZmxhZy1zclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggU3VkYW5cIiwgZmxhZzogXCJmbGFnLXNzXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIiwgZmxhZzogXCJmbGFnLXN0XCIgfSxcclxuICAgIHsgbmFtZTogXCJFbCBTYWx2YWRvclwiLCBmbGFnOiBcImZsYWctc3ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIiwgZmxhZzogXCJmbGFnLXN4XCIgfSxcclxuICAgIHsgbmFtZTogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctc3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3YXppbGFuZFwiLCBmbGFnOiBcImZsYWctc3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctdGNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoYWRcIiwgZmxhZzogXCJmbGFnLXRkXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXNcIiwgZmxhZzogXCJmbGFnLXRmXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb2dvXCIsIGZsYWc6IFwiZmxhZy10Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGhhaWxhbmRcIiwgZmxhZzogXCJmbGFnLXRoXCIgfSxcclxuICAgIHsgbmFtZTogXCJUYWppa2lzdGFuXCIsIGZsYWc6IFwiZmxhZy10alwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9rZWxhdVwiLCBmbGFnOiBcImZsYWctdGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRpbW9yLUxlc3RlXCIsIGZsYWc6IFwiZmxhZy10bFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya21lbmlzdGFuXCIsIGZsYWc6IFwiZmxhZy10bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVuaXNpYVwiLCBmbGFnOiBcImZsYWctdG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRvbmdhXCIsIGZsYWc6IFwiZmxhZy10b1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya2V5XCIsIGZsYWc6IFwiZmxhZy10clwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wiLCBmbGFnOiBcImZsYWctdHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1dmFsdVwiLCBmbGFnOiBcImZsYWctdHZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmFcIiwgZmxhZzogXCJmbGFnLXR3XCIgfSxcclxuICAgIHsgbmFtZTogXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy10elwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVWtyYWluZVwiLCBmbGFnOiBcImZsYWctdWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVnYW5kYVwiLCBmbGFnOiBcImZsYWctdWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctdW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLCBmbGFnOiBcImZsYWctdXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVydWd1YXlcIiwgZmxhZzogXCJmbGFnLXV5XCIgfSxcclxuICAgIHsgbmFtZTogXCJVemJla2lzdGFuXCIsIGZsYWc6IFwiZmxhZy11elwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9seSBTZWVcIiwgZmxhZzogXCJmbGFnLXZhXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLCBmbGFnOiBcImZsYWctdmNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZlbmV6dWVsYSwgQm9saXZhcmlhbiBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctdmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzLCBCcml0aXNoXCIsIGZsYWc6IFwiZmxhZy12Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlyZ2luIElzbGFuZHMsIFUuUy5cIiwgZmxhZzogXCJmbGFnLXZpXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaWV0IE5hbVwiLCBmbGFnOiBcImZsYWctdm5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZhbnVhdHVcIiwgZmxhZzogXCJmbGFnLXZ1XCIgfSxcclxuICAgIHsgbmFtZTogXCJXYWxsaXMgYW5kIEZ1dHVuYVwiLCBmbGFnOiBcImZsYWctd2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbW9hXCIsIGZsYWc6IFwiZmxhZy13c1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiWWVtZW5cIiwgZmxhZzogXCJmbGFnLXllXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXlvdHRlXCIsIGZsYWc6IFwiZmxhZy15dFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggQWZyaWNhXCIsIGZsYWc6IFwiZmxhZy16YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiWmFtYmlhXCIsIGZsYWc6IFwiZmxhZy16bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiWmltYmFid2VcIiwgZmxhZzogXCJmbGFnLXp3XCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCB1cGRhdGVVc2VyRmxhZ3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUudXNlckZsYWdzID0gJHNjb3BlLmN1cnJlbnRVc2VyPy5mbGFnc1xyXG4gICAgICA/IGNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGNvdW50cnkpIHtcclxuICAgICAgICAgIHJldHVybiAkc2NvcGUuY3VycmVudFVzZXIuZmxhZ3MuaW5jbHVkZXMoY291bnRyeS5mbGFnKTtcclxuICAgICAgICB9KVxyXG4gICAgICA6IFtdO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5kYXRlT3B0aW9ucyA9IHtcclxuICAgIG1heERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZSgxOTAwLCAxLCAxKSxcclxuICAgIGluaXREYXRlOiBuZXcgRGF0ZSgyMDAwLCAxLCAxKSxcclxuICAgIGRhdGVwaWNrZXJNb2RlOiBcInllYXJcIixcclxuICB9O1xyXG5cclxuICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSB0cnVlO1xyXG4gICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9IHRydWU7XHJcblxyXG4gICRzY29wZS50b2dnbGVVc2VybmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS51c2VybmFtZVRvZ2dsZSA9ICEkc2NvcGUudXNlcm5hbWVUb2dnbGU7XHJcbiAgICAkc2NvcGUubmV3VXNlcm5hbWUgPSAkc2NvcGUuY3VycmVudFVzZXIudXNlcm5hbWU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLm5ld1Bhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5jb25maXJtUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gISRzY29wZS5wYXNzd29yZFRvZ2dsZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uIChwYXNzd29yZCkge1xyXG4gICAgaWYgKHBhc3N3b3JkKSB7XHJcbiAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgVXNlclN2Yy5jaGVja1Bhc3N3b3JkKHVzZXIsIHBhc3N3b3JkKS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAob2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgIGlmIChuZXdQYXNzd29yZCkge1xyXG4gICAgICBpZiAobmV3UGFzc3dvcmQgPT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgdmFyIHVzZXIgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICAgIFVzZXJTdmMuY2hhbmdlUGFzc3dvcmQodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKS50aGVuKFxyXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUudG9hc3QoXCJQYXNzd29yZCBjaGFuZ2VkXCIpO1xyXG4gICAgICAgICAgICAkc2NvcGUub2xkUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzY29wZS50b2FzdChcIlBhc3N3b3JkIGNoYW5nZSBmYWlsZWRcIik7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAkKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjZDMVwiIH0sIDIwMCkuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogb3JpZ2luYWxCZyB9LCAyMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXJuYW1lKSB7XHJcbiAgICAkc2NvcGUuJGVtaXQoXCJsb2FkaW5nXCIpO1xyXG4gICAgVXNlclN2Yy5jaGFuZ2VVc2VybmFtZSgkc2NvcGUuY3VycmVudFVzZXIuX2lkLCB1c2VybmFtZSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwidXBkYXRlXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLnRvYXN0KHVzZXJuYW1lICsgXCIgYWxyZWFkeSBpbiB1c2VcIik7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS51cGRhdGVVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLiRlbWl0KFwibG9hZGluZ1wiKTtcclxuICAgIFVzZXJTdmMudXBkYXRlVXNlcih7IC4uLiRzY29wZS5jdXJyZW50VXNlciwgZmxhZ3M6ICRzY29wZS51c2VyRmxhZ3MubWFwKCh7IGZsYWcgfSkgPT4gZmxhZykgfSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwidXBkYXRlXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUubG9hZENvdW50cmllcyA9IGZ1bmN0aW9uICgkcXVlcnkpIHtcclxuICAgIHJldHVybiBjb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChjb3VudHJ5KSB7XHJcbiAgICAgIHJldHVybiBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCRxdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCAoKSA9PiB7XHJcbiAgICB1cGRhdGVVc2VyRmxhZ3MoKTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignU2tpbGxzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR3aW5kb3cpIHtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkU2tpbGwgPSAwO1xyXG4gICRzY29wZS5za2lsbHNWaXNpYmxlID0gZmFsc2U7XHJcbiAgJHNjb3BlLnByb2plY3RzID0gW107XHJcblxyXG4gICRzY29wZS5sYWJlbHMgPSBbXCJEb3dubG9hZCBTYWxlc1wiLCBcIkluLVN0b3JlIFNhbGVzXCIsIFwiTWFpbC1PcmRlciBTYWxlc1wiXTtcclxuICAkc2NvcGUuZGF0YSA9IFszMDAsIDUwMCwgMTAwXTtcclxuXHJcbiAgJC5nZXRKU09OKCcvZXhwZXJpZW5jZS5qc29uJywgZnVuY3Rpb24oIGRhdGEgKSB7XHJcbiAgICAkc2NvcGUucHJvamVjdHMgPSBkYXRhLnJlZHVjZSgocHJvamVjdHMsIGVtcGxveWVyKSA9PiB7XHJcbiAgICAgIGlmIChlbXBsb3llci5wcm9qZWN0cykgcmV0dXJuIGVtcGxveWVyLnByb2plY3RzLmNvbmNhdChwcm9qZWN0cyk7XHJcbiAgICAgIGVsc2UgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgfSwge30pO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZmlsdGVyZWRQcm9qZWN0cyA9ICgpID0+ICRzY29wZS5wcm9qZWN0c1xyXG4gICAgLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5za2lsbHMgJiYgcHJvamVjdC5za2lsbHMuaW5jbHVkZXMoJHNjb3BlLnNlbGVjdGVkU2tpbGwuY29kZSkpXHJcblxyXG4gICQuZ2V0SlNPTignL3NraWxscy5qc29uJywgZnVuY3Rpb24oIGRhdGEgKSB7XHJcblxyXG4gICAgY29uc3Qgc2tpbGxzID0gZGF0YVxyXG4gICAgLmZpbHRlcigoc2tpbGwpID0+IHNraWxsLmVuYWJsZWQpXHJcblxyXG4gICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBza2lsbHNcclxuICAgIC5yZWR1Y2UoZnVuY3Rpb24oY2F0ZWdvcmllcywgc2tpbGwpIHtcclxuICAgICAgaWYgKCFjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldID0gW3NraWxsXVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldLnB1c2goc2tpbGwpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwgPSBmdW5jdGlvbiAoc2tpbGwpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwgPSBza2lsbDtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwuY2hhcnRPcHRpb25zID0ge1xyXG4gICAgICAgIGN1dG91dFBlcmNlbnRhZ2UgOiA4MCxcclxuICAgICAgICBjaXJjdW1mZXJlbmNlOiAyICogTWF0aC5QSSxcclxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwuY2hhcnRTdHlsZSA9IHtcclxuICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoL3NraWxscy8nICsgJHNjb3BlLnNlbGVjdGVkU2tpbGwuaW1hZ2UgKyAnKScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICc2MCUnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJzUwJSA1MCUnXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZFNraWxsKCRzY29wZS5za2lsbHNbMF0pO1xyXG5cclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkc2NlLCAkbG9jYXRpb24sIFRlblRoaW5nc1N2Yykge1xyXG4gICAgbGV0IHBhZ2UgPSAxO1xyXG4gICAgJHNjb3BlLmxpc3RzID0gW107XHJcbiAgICAkc2NvcGUuc2VhcmNoID0gXCJcIjtcclxuICAgICRzY29wZS5zZWFyY2hGaWVsZCA9IFwiYWxsXCI7XHJcbiAgICAkc2NvcGUubmV3SXRlbSA9IHt9O1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IFwiRU5cIjtcclxuICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gW107XHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW107XHJcbiAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICBsZXQgZXhoYXVzdGVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3Qgb2JqZWN0Q2F0ZWdvcmllcyA9IFtcImN1bHR1cmVcIiwgXCJuYXR1cmVcIiwgXCJtaXNjXCIsIFwic29jaWV0eVwiLCBcInNwb3J0c1wiXTtcclxuICAgICRzY29wZS5ibHVyYlR5cGVzID0gW1xyXG4gICAgICB7IGFwaTogXCJtb3ZpZXNcIiwgY2F0ZWdvcmllczogW1wibW92aWVzXCJdLCB0ZXh0OiBcIkdldCBtb3ZpZSBwb3N0ZXJzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwidHZcIiwgY2F0ZWdvcmllczogW1widGVsZXZpc2lvblwiXSwgdGV4dDogXCJHZXQgdHYgcG9zdGVyc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcImFjdG9yc1wiLCBjYXRlZ29yaWVzOiBbXCJtb3ZpZXNcIiwgXCJ0ZWxldmlzaW9uXCJdLCB0ZXh0OiBcIkdldCBhY3RvciBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwiYm9va3NcIiwgY2F0ZWdvcmllczogW1wibGl0ZXJhdHVyZVwiXSwgdGV4dDogXCJHZXQgYm9vayBjb3ZlcnNcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJtdXNpY3ZpZGVvc1wiLCBjYXRlZ29yaWVzOiBbXCJtdXNpY1wiXSwgdGV4dDogXCJHZXQgbXVzaWMgdmlkZW9zXCIsIGFkbWluT25seTogdHJ1ZSB9LFxyXG4gICAgICB7IGFwaTogXCJ1bnNwbGFzaFwiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBVbnNwbGFzaCBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwicGV4ZWxzXCIsIGNhdGVnb3JpZXM6IG9iamVjdENhdGVnb3JpZXMsIHRleHQ6IFwiR2V0IFBleGVscyBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwid2lraVwiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBXaWtpIHBpY3NcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgXTtcclxuXHJcbiAgICAkc2NvcGUuaGF2ZUNvbW1vbkl0ZW1zID0gKGFycjEsIGFycjIpID0+IHtcclxuICAgICAgcmV0dXJuIGFycjE/LnNvbWUoKGl0ZW0pID0+IGFycjIuaW5jbHVkZXMoaXRlbSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUua2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgLy8gVGFiXHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5jcmVhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICgkKFwiI25ldy12YWx1ZVwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAkKFwiI25ldy1ibHVyYlwiKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgfVxyXG4gICAgICAvLyB1c2UgZS5rZXlDb2RlXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hZGRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBcIm5ld1wiKTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNyZWF0b3I6ICRzY29wZS5jdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB2YWx1ZXM6IFtdLFxyXG4gICAgICAgIGFuc3dlcnM6IDAsXHJcbiAgICAgICAgaXNEeW5hbWljOiB0cnVlLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgIGxhbmd1YWdlOiAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgJHNjb3BlLnNlYXJjaCA9ICRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2g7XHJcbiAgICAgIGlmIChsaXN0KSB7XHJcbiAgICAgICAgaWYgKGxpc3QuX2lkID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAkc2NvcGUuYWRkTGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0Lmxhbmd1YWdlO1xyXG4gICAgICAgICAgICAgICRzY29wZS5yZWFkT25seSA9XHJcbiAgICAgICAgICAgICAgICAhJHNjb3BlLnNlbGVjdGVkTGlzdCB8fFxyXG4gICAgICAgICAgICAgICAgKCEkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4gJiZcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jcmVhdG9yLl9pZCAhPT0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCAmJlxyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHt9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldENhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldEZpbHRlckNvdW50ID0gKCkgPT5cclxuICAgICAgT2JqZWN0LnZhbHVlcygkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIpLmxlbmd0aCArIE9iamVjdC52YWx1ZXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKS5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY3VycmVudFVzZXIpIHJldHVybjtcclxuICAgICAgY29uc3QgeyBkYXRhOiBsYW5ndWFnZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKTtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IGxhbmd1YWdlcztcclxuICAgICAgcmVzZXRMYW5ndWFnZUZpbHRlcigpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3JpZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcclxuICAgICAgY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XHJcbiAgICAgIHJlc2V0Q2F0ZWdvcnlGaWx0ZXIoKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBsYW5ndWFnZVN0YXRzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMoKTtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBsYW5ndWFnZVN0YXRzLnJlZHVjZSgocmVzdWx0LCB7IF9pZCwgY291bnQgfSkgPT4ge1xyXG4gICAgICAgIHJlc3VsdFtfaWQubGFuZ3VhZ2VdID0gKHJlc3VsdFtfaWQubGFuZ3VhZ2VdIHx8IDApICsgY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSwge30pO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3J5U3RhdHMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cygpO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0cyA9IGNhdGVnb3J5U3RhdHMucmVkdWNlKChyZXN1bHQsIHsgX2lkLCBjb3VudCB9KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W19pZF0gPSBjb3VudDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCkge1xyXG4gICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoeyBfaWQ6ICRsb2NhdGlvbi5zZWFyY2goKS5saXN0IH0pO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5zZWFyY2ggPSAkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoIHx8IFwiXCI7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoTGlzdHMgPSBhc3luYyAodmlld1ZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2aWV3VmFsdWUubGVuZ3RoID49IDMpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5zZWFyY2hMaXN0cyh2aWV3VmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRTZWFyY2hUZXh0ID0gKHRleHQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5zZWFyY2gpIHtcclxuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCgkeyRzY29wZS5zZWFyY2h9KWAsIFwiZ2lcIik7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShyZWdleCwgXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz4kMTwvc3Bhbj5cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnZhbHVlT3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInZhbHVlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6ICRsb2NhdGlvbi5zZWFyY2goKS5zb3J0IHx8IFwiZGF0ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246ICRsb2NhdGlvbi5zZWFyY2goKS5vcmRlciA/ICRsb2NhdGlvbi5zZWFyY2goKS5vcmRlciA9PT0gXCJkZXNjXCIgOiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPSAhJHNjb3BlLm9yZGVyLmRpcmVjdGlvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcInNvcnRcIiwgZmllbGQpO1xyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwib3JkZXJcIiwgJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA/IFwiZGVzY1wiIDogXCJhc2NcIik7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TW9yZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxpc3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gJHNjb3BlLmxpc3RzLmNvbmNhdChsaXN0cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgIHBhZ2UgPSAxO1xyXG4gICAgICBleGhhdXN0ZWQgPSBmYWxzZTtcclxuICAgICAgZ2V0TGlzdHMoKS50aGVuKChsaXN0cykgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9IGxpc3RzO1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZUZpbHRlciA9IChsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9ICEkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsZXRlICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5RmlsdGVyID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmICgkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID09PSB0cnVlKSB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9ICEkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGV0ZSAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpO1xyXG4gICAgICBjb25zdCBhbGxDYXRlZ29yaWVzID1cclxuICAgICAgICBjYXRlZ29yaWVzLmxlbmd0aCA9PT0gY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldKS5sZW5ndGg7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlciA9ICRzY29wZS5jYXRlZ29yaWVzLnJlZHVjZSgoZmlsdGVyLCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgIGZpbHRlcltjYXRlZ29yeV0gPSAhYWxsQ2F0ZWdvcmllcztcclxuICAgICAgICByZXR1cm4gZmlsdGVyO1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Q2F0ZWdvcnlMYWJlbCA9IChjYXRlZ29yaWVzKSA9PiB7XHJcbiAgICAgIGlmICghY2F0ZWdvcmllcyB8fCBjYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFwiXCI7XHJcbiAgICAgIGNvbnN0IG1haW5DYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiAhY2F0ZWdvcnkuaW5jbHVkZXMoXCIuXCIpKTtcclxuICAgICAgcmV0dXJuIG1haW5DYXRlZ29yaWVzXHJcbiAgICAgICAgLnNvcnQoKVxyXG4gICAgICAgIC5tYXAoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBzdWJjYXRlZ29yaWVzID0gY2F0ZWdvcmllc1xyXG4gICAgICAgICAgICAuZmlsdGVyKChzdWJjYXRlZ29yeSkgPT4gc3ViY2F0ZWdvcnkuc3RhcnRzV2l0aChjYXRlZ29yeSkgJiYgc3ViY2F0ZWdvcnkgIT09IGNhdGVnb3J5KVxyXG4gICAgICAgICAgICAubWFwKFxyXG4gICAgICAgICAgICAgIChzdWJjYXRlZ29yeSkgPT5cclxuICAgICAgICAgICAgICAgICRzY29wZS5jYXRlZ29yaWVzXHJcbiAgICAgICAgICAgICAgICAgIC5maW5kKCh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBjYXRlZ29yeSlcclxuICAgICAgICAgICAgICAgICAgLnN1YmNhdGVnb3JpZXMuZmluZCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gc3ViY2F0ZWdvcnkpPy5sYWJlbCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICRzY29wZS5jYXRlZ29yaWVzLmZpbmQoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGNhdGVnb3J5KS5sYWJlbCArXHJcbiAgICAgICAgICAgIChzdWJjYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyBcIiAoXCIgKyBzdWJjYXRlZ29yaWVzLnNvcnQoKS5qb2luKFwiLCBcIikgKyBcIilcIiA6IFwiXCIpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmpvaW4oXCIsIFwiKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0TGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubG9hZGluZyB8fCBleGhhdXN0ZWQpIHJldHVybiBbXTtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLnNlYXJjaCAhPT0gJHNjb3BlLnNlYXJjaCkge1xyXG4gICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJzZWFyY2hcIiwgJHNjb3BlLnNlYXJjaCA/ICRzY29wZS5zZWFyY2ggOiBudWxsKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0cyh7XHJcbiAgICAgICAgcGFnZSxcclxuICAgICAgICBzb3J0Qnk6ICRzY29wZS5vcmRlci5maWVsZCxcclxuICAgICAgICBvcmRlckJ5OiAkc2NvcGUub3JkZXIuZGlyZWN0aW9uID8gLTEgOiAxLFxyXG4gICAgICAgIGxpbWl0OiAxMDAsXHJcbiAgICAgICAgLi4uKCRzY29wZS5zZWFyY2hGaWVsZCA9PT0gXCJhbGxcIiA/IHsgc2VhcmNoOiAkc2NvcGUuc2VhcmNoIH0gOiB7fSksXHJcbiAgICAgICAgLi4uKCRzY29wZS5zZWFyY2hGaWVsZCA9PT0gXCJuYW1lXCIgPyB7IG5hbWU6ICRzY29wZS5zZWFyY2ggfSA6IHt9KSxcclxuICAgICAgICBsYW5ndWFnZTogT2JqZWN0LmtleXMoJHNjb3BlLmxhbmd1YWdlRmlsdGVyKS5maWx0ZXIoKGxhbmd1YWdlKSA9PiAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2VdID09PSB0cnVlKSxcclxuICAgICAgICBjYXRlZ29yaWVzOiBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpLmZpbHRlcigoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPT09IHRydWUpLFxyXG4gICAgICAgIGxhbmd1YWdlTm90OiBPYmplY3Qua2V5cygkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIpLmZpbHRlcigobGFuZ3VhZ2UpID0+ICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZV0gPT09IGZhbHNlKSxcclxuICAgICAgICBjYXRlZ29yaWVzTm90OiBPYmplY3Qua2V5cygkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIpLmZpbHRlcihcclxuICAgICAgICAgIChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9PT0gZmFsc2UsXHJcbiAgICAgICAgKSxcclxuICAgICAgfSk7XHJcbiAgICAgICRzY29wZS5jb3VudCA9IGRhdGEuY291bnQ7XHJcbiAgICAgIGlmIChkYXRhLnJlc3VsdC5sZW5ndGggPCAxMDApIGV4aGF1c3RlZCA9IHRydWU7XHJcbiAgICAgIGVsc2UgcGFnZSA9IGRhdGEubmV4dFBhZ2U7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBQYWdlICR7cGFnZX0gbG9hZGVkLCAke2RhdGEucmVzdWx0Lmxlbmd0aH0gaXRlbXNgKTtcclxuICAgICAgcmV0dXJuIGRhdGEucmVzdWx0O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdE5hbWUgPSAobGlzdElkKSA9PiAkc2NvcGUubGlzdHMuZmluZCgoeyBfaWQgfSkgPT4gX2lkID09PSBsaXN0SWQpPy5uYW1lO1xyXG5cclxuICAgICRzY29wZS51cGRhdGVWYWx1ZSA9IGFzeW5jIChpdGVtKSA9PiB7XHJcbiAgICAgIGlmICghaXRlbS52YWx1ZSkge1xyXG4gICAgICAgICRzY29wZS5kZWxldGVWYWx1ZShpdGVtKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkSXRlbVJlc3BvbnNlID0gYXdhaXQgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKTtcclxuICAgICAgICBpdGVtLmJsdXJiVHlwZSA9IHVwZGF0ZWRJdGVtUmVzcG9uc2UuZGF0YS5ibHVyYlR5cGU7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jcmVhdGVWYWx1ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUubmV3SXRlbS52YWx1ZSkgcmV0dXJuO1xyXG4gICAgICBpZiAoJHNjb3BlLmhhc0R1cGxpY2F0ZSgpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KGAkeyRzY29wZS5uZXdJdGVtLnZhbHVlfSBpcyBhbHJlYWR5IGluIHRoZSBsaXN0YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoISRzY29wZS5zZWxlY3RlZExpc3QuX2lkKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMucHVzaCh7IC4uLiRzY29wZS5uZXdJdGVtIH0pO1xyXG4gICAgICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5sZW5ndGggPj0gMTApIHtcclxuICAgICAgICAgIGF3YWl0ICRzY29wZS51cHNlcnRMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVkSXRlbVJlc3BvbnNlID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmNyZWF0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCAkc2NvcGUubmV3SXRlbSk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMucHVzaChjcmVhdGVkSXRlbVJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5uZXdJdGVtLnZhbHVlKTtcclxuICAgICAgICAkc2NvcGUudG9hc3QoYFwiJHskc2NvcGUubmV3SXRlbS52YWx1ZX1cIiBhZGRlZGApO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlID0gXCJcIjtcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0uYmx1cmIgPSBcIlwiO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkKFwiI25ldy12YWx1ZVwiKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVWYWx1ZSA9IChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlVG9EZWxldGUgPSBpdGVtLnZhbHVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZGVsZXRlTGlzdFZhbHVlKCRzY29wZS5zZWxlY3RlZExpc3QsIGl0ZW0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzID0gJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUuX2lkICE9PSBpdGVtLl9pZCk7XHJcbiAgICAgICAgJHNjb3BlLnRvYXN0KGBcIiR7dmFsdWVUb0RlbGV0ZX1cIiByZW1vdmVkYCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudXBkYXRlTGlzdCA9IChsaXN0LCB1cGRhdGVzKSA9PiB7XHJcbiAgICAgIGlmIChsaXN0Ll9pZCAmJiBsaXN0Ll9pZCAhPT0gXCJuZXdcIikge1xyXG4gICAgICAgIFRlblRoaW5nc1N2Yy51cGRhdGVMaXN0KHtcclxuICAgICAgICAgIC4uLnVwZGF0ZXMsXHJcbiAgICAgICAgICBfaWQ6IGxpc3QuX2lkLFxyXG4gICAgICAgIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBjb25zdCBsaXN0SW5kZXggPSAkc2NvcGUubGlzdHMuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0Ll9pZCA9PT0gZGF0YS5faWQpO1xyXG4gICAgICAgICAgJHNjb3BlLmxpc3RzW2xpc3RJbmRleF0gPSBkYXRhO1xyXG4gICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS51cHNlcnRMaXN0ID0gKGxpc3QsIHVwZGF0ZXMpID0+IHtcclxuICAgICAgJHNjb3BlLnNhdmluZyA9IHRydWU7XHJcbiAgICAgIGlmIChsaXN0LnZhbHVlcy5sZW5ndGggPj0gMTAgJiYgbGlzdC5uYW1lICYmIGxpc3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaWYgKGxpc3QuX2lkICYmIGxpc3QuX2lkICE9PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICBsZXQgY2hhbmdlcyA9IHVwZGF0ZXMgPyB1cGRhdGVzIDogbGlzdDtcclxuICAgICAgICAgIGRlbGV0ZSBjaGFuZ2VzLl9pZDtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy51cGRhdGVMaXN0KHtcclxuICAgICAgICAgICAgLi4uY2hhbmdlcyxcclxuICAgICAgICAgICAgX2lkOiBsaXN0Ll9pZCxcclxuICAgICAgICAgIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgJHNjb3BlLmxpc3RzWyRzY29wZS5saXN0cy5maW5kSW5kZXgoKGxpc3QpID0+IGxpc3QuX2lkID09PSBkYXRhLl9pZCldID0gZGF0YTtcclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmNyZWF0ZUxpc3QoJHNjb3BlLmN1cnJlbnRVc2VyLCAkc2NvcGUuc2VsZWN0ZWRMaXN0KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QgPT09IFwibmV3XCIpIHtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQgPSBkYXRhLl9pZDtcclxuICAgICAgICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgJHNjb3BlLnRvYXN0KGBcIiR7ZGF0YS5uYW1lfVwiIGNyZWF0ZWRgKTtcclxuICAgICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKCRzY29wZS5zZWxlY3RlZExpc3QsIHVwZGF0ZXMpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCFsaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhsaXN0Ll9pZCkpIHtcclxuICAgICAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW2xpc3QuX2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5kZWxldGVMaXN0cyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHM7XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY29uZmlybU1lcmdlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgVGVuVGhpbmdzU3ZjLm1lcmdlTGlzdHMoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyk7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJHNjb3BlLnRvYXN0KFwiTWVyZ2VkXCIpO1xyXG4gICAgICAkKFwiI21vZGFsLW1lcmdlLWxpc3RzXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNvbmZpcm1EZWxldGVMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgZm9yIChjb25zdCBsaXN0SWQgb2YgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSkge1xyXG4gICAgICAgIGF3YWl0IFRlblRoaW5nc1N2Yy5kZWxldGVMaXN0KGxpc3RJZCk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBudWxsO1xyXG4gICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW107XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gW107XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSBbXTtcclxuICAgICAgJHNjb3BlLmNvbmZpcm1lZCA9IGZhbHNlO1xyXG4gICAgICAkc2NvcGUudG9hc3QoXCJMaXN0cyBkZWxldGVkXCIpO1xyXG4gICAgICAkKFwiI21vZGFsLWRlbGV0ZS1saXN0c1wiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVIaWdobGlnaHRlZExpc3RzID0gKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5sZW5ndGggPT09ICRzY29wZS5saXN0cy5sZW5ndGgpIHtcclxuICAgICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9ICRzY29wZS5saXN0cy5tYXAoKHsgX2lkIH0pID0+IF9pZCk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMgPSAkc2NvcGUubGlzdHMuZmlsdGVyKCh7IF9pZCB9KSA9PiAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmluY2x1ZGVzKF9pZCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMobGlzdC5faWQpKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuZmlsdGVyKFxyXG4gICAgICAgICAgKGhpZ2hsaWdodGVkTGlzdElkKSA9PiBoaWdobGlnaHRlZExpc3RJZCAhPT0gbGlzdC5faWQsXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLnB1c2gobGlzdC5faWQpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gJHNjb3BlLmxpc3RzLmZpbHRlcigoeyBfaWQgfSkgPT4gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhfaWQpKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldExhbmd1YWdlID0gKGxpc3QsIGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGxpc3QubGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHsgbGFuZ3VhZ2U6IGxhbmd1YWdlLmNvZGUgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXREaWZmaWN1bHR5ID0gKGxpc3QsIGRpZmZpY3VsdHkpID0+IHtcclxuICAgICAgbGlzdC5kaWZmaWN1bHR5ID0gZGlmZmljdWx0eTtcclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwgeyBkaWZmaWN1bHR5OiBkaWZmaWN1bHR5IH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0RnJlcXVlbmN5ID0gKGxpc3QsIGZyZXF1ZW5jeSkgPT4ge1xyXG4gICAgICBsaXN0LmZyZXF1ZW5jeSA9IGZyZXF1ZW5jeTtcclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwgeyBmcmVxdWVuY3k6IGZyZXF1ZW5jeSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0VXBkYXRlZENhdGVnb3JpZXMgPSAobGlzdCwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgbGV0IGNhdGVnb3JpZXMgPSBsaXN0LmNhdGVnb3JpZXM7XHJcbiAgICAgIGlmIChjYXRlZ29yaWVzLnNvbWUoKGxpc3RDYXRlZ29yeSkgPT4gbGlzdENhdGVnb3J5ID09PSBjYXRlZ29yeSkpIHtcclxuICAgICAgICBjYXRlZ29yaWVzID0gbGlzdC5jYXRlZ29yaWVzLmZpbHRlcigobGlzdENhdGVnb3J5KSA9PiBsaXN0Q2F0ZWdvcnkgIT09IGNhdGVnb3J5KTtcclxuICAgICAgICBpZiAoIWNhdGVnb3J5LmluY2x1ZGVzKFwiLlwiKSAmJiBjYXRlZ29yaWVzLnNvbWUoKGxpc3RDYXRlZ29yeSkgPT4gbGlzdENhdGVnb3J5LnN0YXJ0c1dpdGgoY2F0ZWdvcnkpKSkge1xyXG4gICAgICAgICAgY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKChsaXN0Q2F0ZWdvcnkpID0+ICFsaXN0Q2F0ZWdvcnkuc3RhcnRzV2l0aChjYXRlZ29yeSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkpO1xyXG4gICAgICAgIGlmIChjYXRlZ29yeS5pbmNsdWRlcyhcIi5cIikgJiYgIWNhdGVnb3JpZXMuZmluZCgobGlzdENhdGVnb3J5KSA9PiBsaXN0Q2F0ZWdvcnkgPT09IGNhdGVnb3J5LnNwbGl0KFwiLlwiKVswXSkpIHtcclxuICAgICAgICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeS5zcGxpdChcIi5cIilbMF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2F0ZWdvcmllcztcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5ID0gKGxpc3QsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRDYXRlZ29yaWVzID0gZ2V0VXBkYXRlZENhdGVnb3JpZXMobGlzdCwgY2F0ZWdvcnkpO1xyXG4gICAgICBpZiAodXBkYXRlZENhdGVnb3JpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgJHNjb3BlLnRvYXN0KGBZb3UgbXVzdCBoYXZlIGF0IGxlYXN0IDEgY2F0ZWdvcnkgZm9yICR7bGlzdC5uYW1lfWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHsgY2F0ZWdvcmllczogdXBkYXRlZENhdGVnb3JpZXMgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3JpZXMgPSBhc3luYyAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgJHNjb3BlLnNhdmluZyA9IHRydWU7XHJcbiAgICAgIGxldCBsaXN0c1RvVXBkYXRlID0gW107XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5ldmVyeSgoeyBjYXRlZ29yaWVzIH0pID0+IGNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSkge1xyXG4gICAgICAgIGxpc3RzVG9VcGRhdGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cztcclxuICAgICAgfSBlbHNlIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5zb21lKCh7IGNhdGVnb3JpZXMgfSkgPT4gY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgbGlzdHNUb1VwZGF0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RzLmZpbHRlcigoeyBjYXRlZ29yaWVzIH0pID0+ICFjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGlzdHNUb1VwZGF0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RzO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRMaXN0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgIGxpc3RzVG9VcGRhdGUubWFwKChsaXN0VG9VcGRhdGUpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDYXRlZ29yaWVzID0gZ2V0VXBkYXRlZENhdGVnb3JpZXMobGlzdFRvVXBkYXRlLCBjYXRlZ29yeSk7XHJcbiAgICAgICAgICBpZiAodXBkYXRlZENhdGVnb3JpZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICRzY29wZS50b2FzdChgWW91IG11c3QgaGF2ZSBhdCBsZWFzdCAxIGNhdGVnb3J5IGZvciAke2xpc3RUb1VwZGF0ZS5uYW1lfWApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFRlblRoaW5nc1N2Yy51cGRhdGVMaXN0KHtcclxuICAgICAgICAgICAgICBfaWQ6IGxpc3RUb1VwZGF0ZS5faWQsXHJcbiAgICAgICAgICAgICAgY2F0ZWdvcmllczogdXBkYXRlZENhdGVnb3JpZXMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICApO1xyXG4gICAgICB1cGRhdGVkTGlzdHMuZm9yRWFjaCgodXBkYXRlZExpc3QpID0+IHtcclxuICAgICAgICBjb25zdCBsaXN0SW5kZXggPSAkc2NvcGUubGlzdHMuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0Ll9pZCA9PT0gdXBkYXRlZExpc3QuX2lkKTtcclxuICAgICAgICAkc2NvcGUubGlzdHNbbGlzdEluZGV4XSA9IHVwZGF0ZWRMaXN0O1xyXG4gICAgICB9KTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMgPSAkc2NvcGUubGlzdHMuZmlsdGVyKCh7IF9pZCB9KSA9PiAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmluY2x1ZGVzKF9pZCkpO1xyXG4gICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jYXRlZ29yeVN0YXR1cyA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMuZXZlcnkoKHsgY2F0ZWdvcmllcyB9KSA9PiBjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICByZXR1cm4gXCJjaGVja2VkXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMuc29tZSgoeyBjYXRlZ29yaWVzIH0pID0+IGNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSkge1xyXG4gICAgICAgIHJldHVybiBcInBhcnRpYWxcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJ1bmNoZWNrZWRcIjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaGFzRHVwbGljYXRlID0gKCkgPT5cclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCAmJlxyXG4gICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSAmJlxyXG4gICAgICBfLnNvbWUoXHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMsXHJcbiAgICAgICAgKGFuc3dlcikgPT4gYW5zd2VyLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSA9PSAkc2NvcGUubmV3SXRlbS52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCksXHJcbiAgICAgICk7XHJcblxyXG4gICAgJHNjb3BlLmdldFNlbGVjdGVkTGlzdHNUaXRsZSA9ICgpID0+ICRzY29wZS5oaWdobGlnaHRlZExpc3RzLm1hcCgobGlzdCkgPT4gbGlzdC5uYW1lKS5qb2luKFwiIC8gXCIpO1xyXG5cclxuICAgICRzY29wZS5nZXRCbHVyYnMgPSAodHlwZSkgPT4ge1xyXG4gICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRCbHVyYnMoJHNjb3BlLnNlbGVjdGVkTGlzdCwgdHlwZSlcclxuICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KCRzY29wZS5zZWxlY3RlZExpc3QpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS50b2FzdChcIkJsdXJicyB1cGRhdGVkXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUudG9hc3QoXCJCbHVyYiB1cGRhdGUgZmFpbGVkXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0RW1iZWRVcmwgPSAodXJsKSA9PiB7XHJcbiAgICAgIGlmICh1cmwuaW5jbHVkZXMoXCJ5b3V0dWJlLmNvbVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL1s/Jl12PShbXiZdKykvKVsxXS50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsLmluY2x1ZGVzKFwieW91dHUuYmVcIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC95b3V0dVxcLmJlXFwvKFteJj9dKykvKVsxXS50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsLmluY2x1ZGVzKFwidmltZW8uY29tXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvdmltZW9cXC5jb21cXC8oXFxkKykvKVsxXS50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGBodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHVybC5pbmNsdWRlcyhcIm9wZW4uc3BvdGlmeVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL3RyYWNrXFwvKFteJj9dKykvKVsxXS50cmltKCk7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKGBodHRwczovL29wZW4uc3BvdGlmeS5jb20vZW1iZWQvdHJhY2svJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybCh1cmwpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybiBgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfT9hdXRvcGxheT0xYDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsIGdldERhdGEpO1xyXG4gIH0pO1xyXG4iLCIvKmpzbGludCBlc3ZlcnNpb246IDYqL1xyXG5hbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzQWRtaW5DdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIFRlblRoaW5nc1N2YywgVXNlclN2Yykge1xyXG4gICAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4pIHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInVzZXJuYW1lXCIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5yZXZlcnNlID0gISRzY29wZS5vcmRlci5yZXZlcnNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgIHJldmVyc2U6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldFF1ZXVlID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRRdWV1ZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnF1ZXVlID0gcmVzcG9uc2UuZGF0YS5yZXBsYWNlKFwiL25cIiwgXCI8YnIvPlwiKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICAkc2NvcGUuZ2V0UXVldWUoKTtcclxuXHJcbiAgICBUZW5UaGluZ3NTdmMuZ2V0UGF1c2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAkc2NvcGUucGF1c2VkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdldFVzZXJzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMuZ2V0VXNlcnMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS51c2VycyA9IHJlc3BvbnNlLmRhdGEuZmlsdGVyKCh1c2VyKSA9PiAhdXNlci5hZG1pbik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVCYW4gPSAodXNlcikgPT4ge1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIFVzZXJTdmMudG9nZ2xlQmFuKHVzZXIuX2lkKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlUGF1c2UgPSAodXNlcikgPT4ge1xyXG4gICAgICBUZW5UaGluZ3NTdmMudG9nZ2xlUGF1c2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5wYXVzZWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5wYXVzZWQpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NHYW1lQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkc3RhdGVQYXJhbXMsIFRlblRoaW5nc1N2YywgVXNlclN2Yykge1xyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5hZG1pbikge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogdXNlcnMgfSA9IGF3YWl0IFVzZXJTdmMuZ2V0VXNlcnMoKTtcclxuICAgICAgICAkc2NvcGUudXNlcnMgPSB1c2Vycy5maWx0ZXIoKHVzZXIpID0+ICF1c2VyLmFkbWluKTtcclxuICAgICAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3JpZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzO1xyXG4gICAgICAgIGlmICgkc3RhdGVQYXJhbXMuZ2FtZSkge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmdldEdhbWUoJHN0YXRlUGFyYW1zLmdhbWUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICRzY29wZS5nYW1lID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLmdhbWUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeSA9IGFzeW5jIChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGRpc2FibGVkQ2F0ZWdvcmllcyB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLnVwZGF0ZUdhbWVDYXRlZ29yeSgkc3RhdGVQYXJhbXMuZ2FtZSwgY2F0ZWdvcnkpO1xyXG4gICAgICAkc2NvcGUuZ2FtZS5kaXNhYmxlZENhdGVnb3JpZXMgPSBkaXNhYmxlZENhdGVnb3JpZXM7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRpc2FibGVkQ2F0ZWdvcmllcy5maW5kKChjKSA9PiBjID09PSBjYXRlZ29yeSkpO1xyXG4gICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCBnZXREYXRhKTtcclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc1BsYXlDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEdhbWVTdmMpIHtcclxuICAgICRzY29wZS5rZXlEb3duID0gKGUpID0+IHtcclxuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcclxuICAgICAgICAvLyBFbnRlclxyXG4gICAgICAgIGNhc2UgMTM6XHJcbiAgICAgICAgICAkc2NvcGUuY2hlY2tBbnN3ZXIoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIH1cclxuICAgICAgLy8gdXNlIGUua2V5Q29kZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiBnYW1lIH0gPSBhd2FpdCBHYW1lU3ZjLmdldFRlbnRoaW5ncygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZVwiLCBnYW1lKTtcclxuICAgICAgICAkc2NvcGUubGlzdCA9IGdhbWUubGlzdDtcclxuICAgICAgICAkc2NvcGUudmFsdWVzID0gXy5zYW1wbGVTaXplKGdhbWUubGlzdC52YWx1ZXMsIDEwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxpc3RcIiwgJHNjb3BlLmxpc3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWVcIiwgJHNjb3BlLnZhbHVlcyk7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGVja0Fuc3dlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgR2FtZVN2Yy5hbnN3ZXJUZW50aGluZ3ModW5kZWZpbmVkLCAkc2NvcGUuZ3Vlc3MpO1xyXG4gICAgICAkc2NvcGUuZ3Vlc3MgPSBcIlwiO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0SGludCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgR2FtZVN2Yy5nZXRUZW50aGluZ3NIaW50KCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCBnZXREYXRhKTtcclxuXHJcbiAgICAkc2NvcGUuJG9uKFwid3M6dGVudGhpbmdzX21lc3NhZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NTdGF0c0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IFtdO1xyXG4gICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSB7IGxhYmVsczogW10sIGRhdGFzZXRzOiBbXSB9O1xyXG5cclxuICAgIGNvbnN0IGxpbmVDaGFydE9wdGlvbnMgPSB7XHJcbiAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgdGV4dDogXCJDaGFydC5qcyBMaW5lIENoYXJ0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY3VycmVudFVzZXIpIHJldHVybjtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBbXTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExhbmd1YWdlcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldFBsYXlTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeWVhcnMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgeWVhciB9KSA9PiB5ZWFyKSkuc29ydCgpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRocyA9IF8udGltZXMoMTIsIChpKSA9PiBpICsgMSk7XHJcbiAgICAgICAgJHNjb3BlLnBsYXlTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogbW9udGhzLFxyXG4gICAgICAgICAgc2VyaWVzOiB5ZWFycyxcclxuICAgICAgICAgIGRhdGE6IHllYXJzLm1hcCgoeWVhcikgPT5cclxuICAgICAgICAgICAgbW9udGhzLm1hcCgobW9udGgpID0+IGRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5tb250aCA9PT0gbW9udGggJiYgaXRlbS55ZWFyID09PSB5ZWFyKT8udW5pcXVlUGxheWVycyB8fCAwKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBvcHRpb25zOiBsaW5lQ2hhcnRPcHRpb25zLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQueWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBsYW5ndWFnZXMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSkpLnNvcnQoKTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogeWVhcnMsXHJcbiAgICAgICAgICBzZXJpZXM6IGxhbmd1YWdlcyxcclxuICAgICAgICAgIGRhdGE6IGxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlKSA9PlxyXG4gICAgICAgICAgICB5ZWFycy5tYXAoKHllYXIpID0+IGRhdGEuZmluZCgoeyBfaWQgfSkgPT4gX2lkLmxhbmd1YWdlID09PSBsYW5ndWFnZSAmJiBfaWQueWVhciA9PT0geWVhcik/LmNvdW50IHx8IDApLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIG9wdGlvbnM6IGxpbmVDaGFydE9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRHYW1lU3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQueWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBsYW5ndWFnZXMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSkpLnNvcnQoKTtcclxuICAgICAgICAkc2NvcGUuZ2FtZVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiB5ZWFycyxcclxuICAgICAgICAgIHNlcmllczogbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgZGF0YTogbGFuZ3VhZ2VzLm1hcCgobGFuZ3VhZ2UpID0+XHJcbiAgICAgICAgICAgIHllYXJzLm1hcCgoeWVhcikgPT4gZGF0YS5maW5kKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UgPT09IGxhbmd1YWdlICYmIF9pZC55ZWFyID09PSB5ZWFyKT8uY291bnQgfHwgMCksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgb3B0aW9uczogbGluZUNoYXJ0T3B0aW9ucyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IF8uc29ydEJ5KGRhdGEsICh7IGNvdW50IH0pID0+IC1jb3VudCk7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IHNvcnRlZERhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQpLFxyXG4gICAgICAgICAgZGF0YTogW3NvcnRlZERhdGEubWFwKCh7IGNvdW50IH0pID0+IGNvdW50KV0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCAoKSA9PiB7XHJcbiAgICAgIGdldERhdGEoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1dvcmtvdXRDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgJHNjb3BlLnRpbWVFeGVyY2lzaW5nID0gMzA7XHJcbiAgJHNjb3BlLnRpbWVSZXN0aW5nID0gMTA7XHJcbiAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuXHJcbiAgdmFyIHNvdW5kcyA9IHtcclxuICAgIG9uOiBuZXcgQXVkaW8oJ29uLndhdicpLFxyXG4gICAgb2ZmOiBuZXcgQXVkaW8oJ29mZi53YXYnKSxcclxuICAgIHN3aXRjaDogbmV3IEF1ZGlvKCdzd2l0Y2gud2F2JyksXHJcbiAgfTtcclxuXHJcblxyXG4gIHZhciBleGVyY2lzZXMgPSBbXHJcbiAgICB7bmFtZTogJ0p1bXBpbmcgSmFja3MnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdXYWxsIFNpdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1B1c2gtVXAnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdDcnVuY2gnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTdGVwLVVwJywgc3BsaXQ6IHRydWV9LFxyXG4gICAge25hbWU6ICdTcXVhdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1RyaWNlcHMgRGlwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUGxhbmsnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdIaWdoIEtuZWVzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnTHVuZ2UnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwIHdpdGggUm90YXRpb24nLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTaWRlIFBsYW5rJywgc3BsaXQ6IHRydWV9XHJcbiAgXTtcclxuXHJcbiAgdmFyIGV4ZXJjaXNpbmc7XHJcblxyXG4gICRzY29wZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChleGVyY2lzZXMubGVuZ3RoIC0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvICgkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3RpbmcpKSkgKyAnLycgKyBleGVyY2lzZXMubGVuZ3RoO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS53b3Jrb3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZXhjZXJjaXNlVGltZSA9ICRzY29wZS50aW1lRXhlcmNpc2luZyArICRzY29wZS50aW1lUmVzdGluZztcclxuICAgIGlmICghJHNjb3BlLnRpbWVSZW1haW5pbmcpIHtcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSBleGVyY2lzZXMubGVuZ3RoICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgZXhlcmNpc2luZyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS50aW1lUmVtYWluaW5nLS07XHJcbiAgICAgICAgaWYgKCRzY29wZS50aW1lUmVtYWluaW5nID09PSAwKSB7XHJcbiAgICAgICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJ0ZpbmlzaGVkISBDb25ncmF0cyEnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdXJyZW50RXhlcmNpc2UgPSBNYXRoLmZsb29yKCRzY29wZS50aW1lUmVtYWluaW5nIC8gZXhjZXJjaXNlVGltZSk7XHJcbiAgICAgICAgdmFyIHRpbWVyID0gJHNjb3BlLnRpbWVSZW1haW5pbmcgLSBjdXJyZW50RXhlcmNpc2UgKiBleGNlcmNpc2VUaW1lO1xyXG4gICAgICAgICRzY29wZS50aW1lciA9IHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nID8gdGltZXIgLSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgOiB0aW1lcjtcclxuICAgICAgICBpZiAodGltZXIgPiAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0gZXhlcmNpc2VzW2V4ZXJjaXNlcy5sZW5ndGggLSBjdXJyZW50RXhlcmNpc2UgLSAxXTtcclxuICAgICAgICBpZiAodGltZXIgPT09ICRzY29wZS50aW1lRXhlcmNpc2luZykge1xyXG4gICAgICAgICAgc291bmRzLm9uLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRpbWVyID09PSAwKSB7XHJcbiAgICAgICAgICBzb3VuZHMub2ZmLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRzY29wZS5leGVyY2lzZS5zcGxpdCAmJiB0aW1lciA9PT0gTWF0aC5mbG9vcigkc2NvcGUudGltZUV4ZXJjaXNpbmcgLyAyKSkge1xyXG4gICAgICAgICAgc291bmRzLnN3aXRjaC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAkc2NvcGUudGltZXIgPSAnJztcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJycsIHNwbGl0OiBmYWxzZX07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0NhdGVnb3JpZXNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VGFza3MgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nLCBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZFRhc2sgPSBmdW5jdGlvbiAoY2F0ZWdvcnksIHRhc2spIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5ICsgJy90YXNrcycsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICBzdmMuY2hvaWNlcyA9IGxpc3Q7XHJcbiAgICBzdmMucHJpb3JpdHlMaXN0ID0gW107XHJcbiAgICAvL01ha2UgYSBuZXcgY2hvaWNlIGxpc3RcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3IgKHZhciBqID0gaSArIDE7IGogPCBsaXN0Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgdmFyIHJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgc3ZjLnByaW9yaXR5TGlzdC5wdXNoKHtcclxuICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgZmlyc3RDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaSA6IGpdLm5hbWUsXHJcbiAgICAgICAgICBzZWNvbmRDaG9pY2U6IGxpc3RbcmFuZG9tID09PSAwID8gaiA6IGldLm5hbWUsXHJcbiAgICAgICAgICBjaG9pY2U6ICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHNodWZmbGUoc3ZjLnByaW9yaXR5TGlzdCk7XHJcbiAgICBmb3IgKGkgaW4gc3ZjLnByaW9yaXR5TGlzdCkge1xyXG4gICAgICBzdmMucHJpb3JpdHlMaXN0W2ldLmlkID0gaSArIDE7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHJldHVybiBzdmMucHJpb3JpdHlMaXN0O1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcclxuICAgIHZhciBtID0gYXJyYXkubGVuZ3RoLCB0LCBpO1xyXG4gICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGXigKZcclxuICAgIHdoaWxlIChtKSB7XHJcbiAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudOKAplxyXG4gICAgICBpID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbS0tKTtcclxuICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxyXG4gICAgICAvL2FycmF5W21dLmZpcnN0Q2hvaWNlO1xyXG4gICAgICB0ID0gYXJyYXlbbV07XHJcbiAgICAgIGFycmF5W21dID0gYXJyYXlbaV07XHJcbiAgICAgIGFycmF5W2ldID0gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJheTtcclxuICB9XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdFbWFpbFN2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuc2VuZCA9IGZ1bmN0aW9uIChlbWFpbCkge1xyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvZW1haWwnLCBlbWFpbCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiRmlsZVN2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFF1aXpGaWxlcyA9IGZ1bmN0aW9uIChxdWl6KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS9xdWl6emVzL1wiICsgcXVpeik7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJHYW1lU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0VGVudGhpbmdzID0gZnVuY3Rpb24gKGlkID0gMSkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL3dlYi9cIiArIGlkKTtcclxuICB9O1xyXG5cclxuICBzdmMuYW5zd2VyVGVudGhpbmdzID0gZnVuY3Rpb24gKGlkID0gMSwgYW5zd2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL3dlYi9cIiArIGlkICsgXCIvYW5zd2VyXCIsIHsgYW5zd2VyIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRUZW50aGluZ3NIaW50ID0gZnVuY3Rpb24gKGlkID0gMSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy93ZWIvXCIgKyBpZCArIFwiL2hpbnRcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS9nYW1lcy9cIiArIGdhbWUgKyBcIi9cIiArIHVzZXIgKyBcIi9oaWdoc2NvcmVcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNldEhpZ2hzY29yZSA9IGZ1bmN0aW9uIChnYW1lLCB1c2VyLCBzY29yZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL2dhbWVzL1wiICsgZ2FtZSArIFwiL1wiICsgdXNlciArIFwiL2hpZ2hzY29yZVwiLCB7XHJcbiAgICAgIHNjb3JlOiBzY29yZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5mdXp6eU1hdGNoID0gZnVuY3Rpb24gKHZhbHVlcywgZ3Vlc3MpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS9nYW1lcy9mdXp6eV9tYXRjaFwiLCB7XHJcbiAgICAgIHZhbHVlcyxcclxuICAgICAgZ3Vlc3MsXHJcbiAgICB9KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdMYW5ndWFnZVN2YycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmxhbmd1YWdlcyA9IFtcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRU5cIixcclxuICAgICAgXCJuYW1lXCI6IFwiRW5nbGlzaFwiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tZ2JcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiTkxcIixcclxuICAgICAgXCJuYW1lXCI6IFwiTmVkZXJsYW5kc1wiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tbmxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRlJcIixcclxuICAgICAgXCJuYW1lXCI6IFwiRnJhbsOnYWlzXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1mclwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgc3ZjLnRleHQgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkVOXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIk5MXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkZSXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBzdmMuc2VsZWN0ZWRMYW5ndWFnZSA9IHN2Yy5sYW5ndWFnZXNbMF07XHJcblxyXG4gIHN2Yy5zZXRMYW5ndWFnZSA9IGZ1bmN0aW9uIChsYW5ndWFnZSkge1xyXG4gICAgc3ZjLnNlbGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgIHJldHVybiBsYW5ndWFnZTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gc3ZjLnNlbGVjdGVkTGFuZ3VhZ2U7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ1Bvc3RzU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5mZXRjaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMnKTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlID0gZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgcG9zdCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBvc3QgPSBmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cy8nICsgcG9zdC5faWQpO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlRlblRoaW5nc1N2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFF1ZXVlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2JvdHMvdGVudGhpbmdzL3F1ZXVlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3RzID0gZnVuY3Rpb24gKG9wdGlvbnMgPSB7fSkge1xyXG4gICAgdmFyIHVybCA9XHJcbiAgICAgIGAvYXBpL3RlbnRoaW5ncy9saXN0cz9gICtcclxuICAgICAgKG9wdGlvbnMubGltaXQgPyBgJmxpbWl0PSR7b3B0aW9ucy5saW1pdH1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5wYWdlID8gYCZwYWdlPSR7b3B0aW9ucy5wYWdlfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnNvcnRCeSA/IGAmc29ydF9ieT0ke29wdGlvbnMuc29ydEJ5fWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLm9yZGVyQnkgPyBgJm9yZGVyX2J5PSR7b3B0aW9ucy5vcmRlckJ5fWAgOiBcIlwiKSArXHJcbiAgICAgIC8vIGAmY3JlYXRvcj01YWUxNWYxNGI1Zjc4ODNmZjA0OTczMzlgICtcclxuICAgICAgKG9wdGlvbnMubGFuZ3VhZ2UgJiYgb3B0aW9ucy5sYW5ndWFnZS5sZW5ndGggPiAwID8gYCZsYW5ndWFnZT0ke29wdGlvbnMubGFuZ3VhZ2Uuam9pbihcIixcIil9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuY2F0ZWdvcmllcyAmJiBvcHRpb25zLmNhdGVnb3JpZXMubGVuZ3RoID4gMCA/IGAmY2F0ZWdvcmllcz0ke29wdGlvbnMuY2F0ZWdvcmllcy5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5sYW5ndWFnZU5vdCAmJiBvcHRpb25zLmxhbmd1YWdlTm90Lmxlbmd0aCA+IDAgPyBgJiFsYW5ndWFnZT0ke29wdGlvbnMubGFuZ3VhZ2VOb3Quam9pbihcIixcIil9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuY2F0ZWdvcmllc05vdCAmJiBvcHRpb25zLmNhdGVnb3JpZXNOb3QubGVuZ3RoID4gMFxyXG4gICAgICAgID8gYCYhY2F0ZWdvcmllcz0ke29wdGlvbnMuY2F0ZWdvcmllc05vdC5qb2luKFwiLFwiKX1gXHJcbiAgICAgICAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnNlYXJjaCA/IGAmc2VhcmNoPSR7b3B0aW9ucy5zZWFyY2h9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMubmFtZSA/IGAmbmFtZT0ke29wdGlvbnMubmFtZX1gIDogXCJcIik7XHJcblxyXG4gICAgcmV0dXJuICRodHRwLmdldCh1cmwpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRSYW5kb21MaXN0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL2xpc3RzL3JhbmRvbWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZWFyY2hMaXN0cyA9IChuYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9zZWFyY2gvbGlzdC1uYW1lcy8ke25hbWV9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldENhdGVnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9jYXRlZ29yaWVzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2xhbmd1YWdlc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucHV0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCwgbGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZUxpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0c1wiLCB7IHVzZXIsIGxpc3QgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLm1lcmdlTGlzdHMgPSBmdW5jdGlvbiAobGlzdHMpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvbWVyZ2VcIiwgeyBsaXN0czogbGlzdHMgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmRlbGV0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdElkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0SWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wdXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzL1wiICsgdmFsdWUuX2lkLCB2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzXCIsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBzdmMuZGVsZXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZGVsZXRlKFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3ZhbHVlcy9cIiArIHZhbHVlLl9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnJlcG9ydExpc3QgPSBmdW5jdGlvbiAodXNlciwgbGlzdCkge1xyXG4gICAgJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3JlcG9ydC9cIiArIHVzZXIuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvY2F0ZWdvcmllc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvbGFuZ3VhZ2VzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQbGF5U3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvcGxheVwiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0R2FtZVN0YXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL3N0YXRzL2dhbWVzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRCbHVyYnMgPSBmdW5jdGlvbiAobGlzdCwgdHlwZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL2xpc3RzLyR7bGlzdC5faWR9L2JsdXJicy8ke3R5cGV9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvcGF1c2VgKTtcclxuICB9O1xyXG5cclxuICBzdmMudG9nZ2xlUGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvcGF1c2VgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0R2FtZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvZ2FtZXMvJHtpZH1gKTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlR2FtZUNhdGVnb3J5ID0gZnVuY3Rpb24gKGlkLCBjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL2dhbWVzLyR7aWR9L2NhdGVnb3J5LyR7Y2F0ZWdvcnl9YCk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJVc2VyU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0VXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRVc2VycyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3VzZXJzL2FsbFwiKTtcclxuICB9O1xyXG5cclxuICBzdmMudG9nZ2xlQmFuID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS91c2Vycy9iYW4vJHtpZH1gKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2V0VG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiWC1BdXRoXCJdID0gdG9rZW47XHJcbiAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICB9O1xyXG5cclxuICBzdmMuYXV0aGVudGljYXRlID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvYXV0aGVudGljYXRlXCIsIHtcclxuICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICByZXR1cm4gc3ZjLnNldFRva2VuKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMubG9naW4gPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvbG9naW5cIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS50b2tlbiA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlVXNlciA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlci5faWQsIHtcclxuICAgICAgICB1c2VyOiB1c2VyLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGVja1Bhc3N3b3JkID0gZnVuY3Rpb24gKHVzZXIsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvdmVyaWZpY2F0aW9uXCIsIHtcclxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoYW5nZVBhc3N3b3JkID0gZnVuY3Rpb24gKHVzZXIsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlciArIFwiL3Bhc3N3b3JkXCIsIHtcclxuICAgICAgb2xkUGFzc3dvcmQ6IG9sZFBhc3N3b3JkLFxyXG4gICAgICBuZXdQYXNzd29yZDogbmV3UGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlVXNlcm5hbWUgPSBmdW5jdGlvbiAodXNlciwgbmV3VXNlcm5hbWUpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvdXNlcm5hbWVcIiwge1xyXG4gICAgICAgIG5ld1VzZXJuYW1lOiBuZXdVc2VybmFtZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMubG9nb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSBcIlwiO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vyc1wiLCB7XHJcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdmMubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJRdWl6QW5pbWFsc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gICRzY29wZS5hbmltYWxzID0gW107XHJcblxyXG4gIEZpbGVTdmMuZ2V0UXVpekZpbGVzKFwiYW5pbWFsc1wiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmFuaW1hbHMgPSBfLnNodWZmbGUoXHJcbiAgICAgIHJlc3BvbnNlLmRhdGEubWFwKChhbmltYWwpID0+ICh7XHJcbiAgICAgICAgc291bmQ6IGFuaW1hbCxcclxuICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKFwiLlwiKSkucmVwbGFjZShcIl9cIiwgXCIgXCIpLmNhcGl0YWxpemUoKSxcclxuICAgICAgfSkpLFxyXG4gICAgKTtcclxuICAgIGZvciAobGV0IGFuaW1hbCBvZiAkc2NvcGUuYW5pbWFscykge1xyXG4gICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5ndWVzcyA9IChhbmltYWwsIGd1ZXNzKSA9PiB7XHJcbiAgICBhbmltYWwuZ3Vlc3MgPSBndWVzcztcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRSYW5kb21BbmltYWxzID0gKG5hbWUpID0+XHJcbiAgICBfLnNodWZmbGUoJHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoKGFuaW1hbCkgPT4gYW5pbWFsLm5hbWUpKS5zbGljZSgwLCA1KTtcclxuXHJcbiAgJHNjb3BlLmdldFNjb3JlID0gKCkgPT5cclxuICAgIGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsKSA9PiBhbmltYWwubmFtZSA9PT0gYW5pbWFsLmd1ZXNzKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWA7XHJcblxyXG4gICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsKSA9PiBhbmltYWwuZ3Vlc3MpLmxlbmd0aCA9PT0gJHNjb3BlLmFuaW1hbHMubGVuZ3RoO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlF1aXpHb29nbGVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldFF1aXpGaWxlcyhcImdvb2dsZVwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUXVpekxvZ29zQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRRdWl6RmlsZXMoXCJsb2dvc1wiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUXVpek1vdmllc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0UXVpekZpbGVzKFwibW92aWVzXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJRdWl6U2tlbGV0b25zQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgJHNjb3BlLmFuaW1hbHMgPSBbXTtcclxuXHJcbiAgRmlsZVN2Yy5nZXRRdWl6RmlsZXMoXCJza2VsZXRvbnNcIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5hbmltYWxzID0gXy5zaHVmZmxlKFxyXG4gICAgICByZXNwb25zZS5kYXRhLm1hcCgoYW5pbWFsKSA9PiAoe1xyXG4gICAgICAgIGltYWdlOiBhbmltYWwsXHJcbiAgICAgICAgbmFtZTogYW5pbWFsLnN1YnN0cmluZygwLCBhbmltYWwuaW5kZXhPZihcIi5cIikpLnJlcGxhY2UoXCJfXCIsIFwiIFwiKS5jYXBpdGFsaXplKCksXHJcbiAgICAgIH0pKSxcclxuICAgICk7XHJcbiAgICBmb3IgKGxldCBhbmltYWwgb2YgJHNjb3BlLmFuaW1hbHMpIHtcclxuICAgICAgYW5pbWFsLmFuc3dlcnMgPSBfLnNodWZmbGUoW2FuaW1hbC5uYW1lLCAuLi5nZXRSYW5kb21BbmltYWxzKGFuaW1hbC5uYW1lKV0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZ3Vlc3MgPSAoYW5pbWFsLCBndWVzcykgPT4ge1xyXG4gICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UmFuZG9tQW5pbWFscyA9IChuYW1lKSA9PlxyXG4gICAgXy5zaHVmZmxlKCRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsKSA9PiBuYW1lICE9PSBhbmltYWwubmFtZSkubWFwKChhbmltYWwpID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgMTApO1xyXG5cclxuICAkc2NvcGUuZ2V0U2NvcmUgPSAoKSA9PlxyXG4gICAgYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IGFuaW1hbC5uYW1lID09PSBhbmltYWwuZ3Vlc3MpLmxlbmd0aH0vJHskc2NvcGUuYW5pbWFscy5sZW5ndGh9YDtcclxuXHJcbiAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IGFuaW1hbC5ndWVzcykubGVuZ3RoID09PSAkc2NvcGUuYW5pbWFscy5sZW5ndGg7XHJcbn0pO1xyXG4iXX0=
