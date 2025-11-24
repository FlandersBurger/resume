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
const SPECIAL_CHARACTERS = "\\\\/ !?@#$%^&*()_+:.{},;\\-'``’‘\"—",
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
}), angular.module("app").controller("AppCtrl", function ($scope, LanguageSvc, UserSvc, $mdToast) {
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
  function loginSuccessful(response) {
    $scope.$emit("login", response.data), $("#modal-login").modal("hide");
  }
  function loginFailed() {
    $scope.toast("Login Failed");
  }
  function startUI() {
    ui.start("#firebaseui-auth-container", {
      callbacks: {
        signInSuccess: function (currentUser, credential, redirectUrl) {
          return firebase.auth().currentUser.getIdToken(!0).then(function (idToken) {
            UserSvc.authenticate({
              authType: "firebase",
              displayName: currentUser.displayName,
              email: currentUser.email,
              photoURL: currentUser.photoURL,
              emailVerified: currentUser.emailVerified,
              idToken,
              data: currentUser
            }).then(loginSuccessful, loginFailed);
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
  }), $scope.telegramLogin = function (user) {
    UserSvc.authenticate({
      authType: "telegram",
      displayName: user.first_name + (user.last_name ? " " + user.last_name : ""),
      username: user.username,
      telegramId: user.id,
      photoURL: user.photo_url,
      idToken: user.hash,
      data: user
    }).then(loginSuccessful, loginFailed), $scope.$apply();
  }, startUI();
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
}), angular.module("app").controller("TenThingsCtrl", function ($scope, $sce, $location, TenThingsSvc, UserSvc) {
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
  }, $scope.linkTelegram = data => {
    UserSvc.linkTelegram($scope.currentUser._id, data).then(() => {
      $scope.toast("Telegram account linked"), $scope.getUser();
    }, () => {
      $scope.toast("Telegram account linking failed");
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
      $scope.game = game, console.log("game", game), $scope.$apply();
    }
  };
  $scope.checkAnswer = async () => {
    const answer = $scope.guess;
    $scope.guess = "", await GameSvc.answerTenthings(void 0, answer);
  }, $scope.getHint = async () => {
    await GameSvc.getTenthingsHint(), setTimeout(() => {
      $("#main-game").trigger("focus");
    });
  }, $scope.skipList = async () => {
    await GameSvc.skipTenthingsList(), setTimeout(() => {
      $("#main-game").trigger("focus");
    });
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
  }, svc.linkTelegram = function (userId, telegramData) {
    return $http.post(`/api/users/${userId}/telegram`, telegramData).then(function () {
      return svc.getUser();
    });
  }, svc.login = function (userId) {
    return $http.get("/api/users/" + userId + "/login").then(function (response) {
      return window.localStorage.token = response.data, svc.setToken(response.data);
    });
  }, svc.updateUser = function (user) {
    return $http.post("/api/users/" + user._id, {
      user
    }).then(function () {
      return svc.getUser();
    });
  }, svc.checkPassword = function (userId, password) {
    return $http.post("/api/users/" + userId + "/verification", {
      password
    });
  }, svc.changePassword = function (userId, oldPassword, newPassword) {
    return $http.post("/api/users/" + userId + "/password", {
      oldPassword,
      newPassword
    });
  }, svc.changeUsername = function (userId, newUsername) {
    return $http.post("/api/users/" + userId + "/username", {
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
}]), angular.module("app").controller("QuizAnimalsCtrl", function ($scope, FileSvc) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiY29udHJvbGxlcnMvYXBwLmN0cmwuanMiLCJjb250cm9sbGVycy9hc3Rlcm9pZHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2J1YmJsZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NoYXJhZGVzLmN0cmwuanMiLCJjb250cm9sbGVycy9jb250YWN0LmN0cmwuanMiLCJjb250cm9sbGVycy9leHBlcmllbmNlLmN0cmwuanMiLCJjb250cm9sbGVycy9ob2JiaWVzLmN0cmwuanMiLCJjb250cm9sbGVycy9sZW1taW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbGlzdHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xvZ2luLmN0cmwuanMiLCJjb250cm9sbGVycy9wb3N0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJvZmlsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvc2tpbGxzLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3MuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2FkbWluLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NnYW1lLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NwbGF5LmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NzdGF0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvd29ya291dC5jdHJsLmpzIiwic2VydmljZXMvY2F0ZWdvcmllcy5zdmMuanMiLCJzZXJ2aWNlcy9lbWFpbC5zdmMuanMiLCJzZXJ2aWNlcy9maWxlLnN2Yy5qcyIsInNlcnZpY2VzL2dhbWUuc3ZjLmpzIiwic2VydmljZXMvbGFuZ3VhZ2Uuc3ZjLmpzIiwic2VydmljZXMvcG9zdHMuc3ZjLmpzIiwic2VydmljZXMvdGVudGhpbmdzLnN2Yy5qcyIsInNlcnZpY2VzL3VzZXIuc3ZjLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2FuaW1hbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvZ29vZ2xlLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2xvZ29zLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL21vdmllcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9za2VsZXRvbnMuY3RybC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRvbWFpbnMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0cmluZyIsInByb3RvdHlwZSIsInZhbHVlIiwicmVkdWNlIiwicmVzdWx0IiwibGV0dGVyIiwicmVwbGFjZSIsInRoaXMiLCJTUEVDSUFMX0NIQVJBQ1RFUlMiLCJWT1dFTFMiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZURpYWNyaXRpY3MiLCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyIsImV4dHJhIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiY29uY2VhbCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJyZXBsYWNlQWxsIiwiZmluZCIsInJlcGxhY2VTdHJpbmciLCJpIiwicmVwbGFjZUFycmF5IiwiTnVtYmVyIiwidG9TdHJpbmciLCJkZWNpbWFscyIsInVuZGVmaW5lZCIsInRvRml4ZWQiLCJzb3J0T2JqZWN0Iiwib2JqIiwiZGlyZWN0aW9uIiwiYXJyIiwia2V5IiwicHVzaCIsInNvcnQiLCJhIiwiYiIsIm9ialNvcnRlZCIsImZvckVhY2giLCJpdGVtIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwiJHVybFNlcnZpY2VQcm92aWRlciIsIiRsb2NhdGlvblByb3ZpZGVyIiwib3RoZXJ3aXNlIiwic3RyaWN0TW9kZSIsInN0YXRlIiwidXJsIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIiwiaHRtbDVNb2RlIiwiZW5hYmxlZCIsInJlcXVpcmVCYXNlIiwic2VydmljZSIsIiRyb290U2NvcGUiLCIkdGltZW91dCIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiV2ViU29ja2V0Iiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3QiLCJvbm9wZW4iLCJjb25zb2xlIiwibG9nIiwib25jbG9zZSIsImUiLCJvbmVycm9yIiwicmVhZHlTdGF0ZSIsIm9ubWVzc2FnZSIsInBheWxvYWQiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiJGJyb2FkY2FzdCIsInRvcGljIiwic2VuZCIsImpzb24iLCJzdHJpbmdpZnkiLCJydW4iLCJXZWJTb2NrZXRTdmMiLCIkc2NvcGUiLCJMYW5ndWFnZVN2YyIsIlVzZXJTdmMiLCIkbWRUb2FzdCIsInRvYXN0IiwibWVzc2FnZSIsInNob3ciLCJzaW1wbGUiLCJwYXJlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0ZXh0Q29udGVudCIsInBvc2l0aW9uIiwiaGlkZURlbGF5IiwiJCIsImxvYWQiLCJmYWRlT3V0IiwiZmFkZUluIiwib24iLCJjbG9zZXN0IiwidG9nZ2xlQ2xhc3MiLCJjaGVja2VkIiwic3RvcFByb3BhZ2F0aW9uIiwidGhlbWVDb3VudGVyIiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiZmxpcFRoZW1lIiwiaGlkZSIsInNldFRpbWVvdXQiLCJnZXRKU09OIiwic2tpbGxzIiwiZmlsdGVyIiwic2tpbGwiLCJob2JiaWVzIiwiam9icyIsImpvYiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJjaGFyYWRlcyIsImdldFRpbWVTcGFuIiwibGFuZ3VhZ2VzIiwic2VsZWN0ZWRMYW5ndWFnZSIsImdldExhbmd1YWdlIiwic2VsZWN0TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaG92ZXJkaXYiLCJkaXZpZCIsImxlZnQiLCJjbGllbnRYIiwidG9wIiwiY2xpZW50WSIsImdldEVsZW1lbnRCeUlkIiwiY3NzIiwidG9nZ2xlIiwibG9jYWxTdG9yYWdlIiwidXNlciIsImxvZ2luIiwidGhlbiIsInJlc3BvbnNlIiwiJG9uIiwiXyIsImxvZ2dlZEluIiwiX2lkIiwiY3VycmVudFVzZXIiLCJiaXJ0aERhdGUiLCJsb2FkaW5nIiwibG9nb3V0IiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsImNsZWFyIiwiY2F0Y2giLCJlcnJvciIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiJGxvY2F0aW9uIiwiR2FtZVN2YyIsImFubm91bmNlIiwiY2FudmFzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXRoIiwiYWxlcnQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZm9udCIsImZpbGxTdHlsZSIsInRleHRBbGlnbiIsInNob3RzIiwiYXN0ZXJvaWRzIiwicG93ZXJ1cHMiLCJleHBsb3Npb25zIiwibWFwIiwic3BhY2VwaWNzIiwic3BhY2UiLCJwb3dlcnVwVHlwZXMiLCJuYW1lIiwiYW5ub3VuY2VtZW50IiwiY3ljbGUiLCJyb3dzIiwiY29sdW1ucyIsInNpemUiLCJpbWciLCJJbWFnZSIsImFjdGl2YXRlIiwic3BhY2VzaGlwIiwibWF4U3BlZWQiLCJjb29sZG93biIsImNvb2xkb3duVGltZSIsInJhbmdlIiwic2hpZWxkIiwiZXhwbG9kZSIsInNwYXduQXN0ZXJvaWRzIiwicG93ZXJ1cCIsImFycmF5Iiwic3JjIiwiZXhwbG9zaW9uSW1hZ2UiLCJldmFsdWF0ZUtleXMiLCJwbGF5aW5nIiwic2hvb3QiLCJyb3RhdGlvbiIsInNwZWVkIiwic2NvcmUiLCIkYXBwbHkiLCJTcGFjZXNoaXAiLCJhdXRvU3Bhd24iLCJ3aWR0aCIsImhlaWdodCIsImNhbm5vbiIsIngiLCJ5IiwiYW5nbGUiLCJpZCIsInJvdW5kIiwiU2hvdCIsIm1vdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZmlsbCIsImFzdGVyb2lkIiwiaGl0IiwiZ2FtZU92ZXIiLCJjb3MiLCJzaW4iLCJsaWZlc3BhbiIsIkFzdGVyb2lkIiwiZ2V0RW50cnlQb3NpdGlvbiIsInJvdGF0aW9uU3BlZWQiLCJFeHBsb3Npb24iLCJzaG90IiwicG9pbnRzIiwic3Bhd25Qb3dlcnVwIiwib2JqZWN0IiwiUG93ZXJ1cCIsImRlbGF5Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImNvbHVtbiIsInJvdyIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJncmlkWCIsImdyaWRZIiwib2JqZWN0MSIsIm9iamVjdDIiLCJrZXlzIiwiYW1vdW50IiwiaGlnaHNjb3JlIiwic2V0SGlnaHNjb3JlIiwicmVzaXplQ2FudmFzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleUNvZGUiLCJ3aGljaCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXciLCJjbGVhclJlY3QiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwidGFsbHkiLCJmaWxsVGV4dCIsIm1lYXN1cmVUZXh0IiwiYmFja2dyb3VuZEltYWdlIiwiYnViYmxlcyIsImNvbG9ycyIsIkJ1YmJsZSIsInJhZGl1cyIsImV4cGFuZGluZyIsImNpcmN1bWZlcmVuY2UiLCJtYXhSYWRpdXMiLCJ2eCIsInZ5IiwiZmlsdGVyQnViYmxlcyIsImJ1YmJsZSIsInNlbGVjdFdvcmQiLCJjYXRlZ29yeSIsIndvcmQiLCJFbWFpbFN2YyIsIm9wdGlvbnMiLCJ0ZXh0IiwiY29udGFjdCIsImVtYWlsIiwicGhvbmUiLCJhYm91dCIsInNlbmRpbmciLCJzZW50Iiwic3RhdHVzIiwiZXJyIiwiZ2V0U2tpbGwiLCJza2lsbENvZGUiLCJjb2RlIiwiJHdpbmRvdyIsImhvYmJ5U2VsZWN0b3JWaXNpYmxlIiwic2VsZWN0ZWRIb2JieSIsInNlbGVjdEhvYmJ5IiwiaG9iYnkiLCJzaG93SG9iYnkiLCJpbmRleCIsImltYWdlcyIsIkxFRlQiLCJSSUdIVCIsImxlbW1pbmdzSW1hZ2UiLCJkZWNvckltYWdlIiwibGVtbWluZ3MiLCJzdGFydGVkIiwiYWN0aW9ucyIsIndhbGsiLCJzdGFydCIsImVuZCIsInJldmVyc2UiLCJodWgiLCJmYWxsIiwiZmx5Iiwic3RvcCIsImNsaW1iIiwiYnVpbGQiLCJwdW5jaCIsImRpZyIsIkxlbW1pbmciLCJpbml0IiwiYWN0IiwiYWN0aW9uIiwiYW5pbWF0aW9uIiwic2NhbGUiLCJoYXRjaCIsIm9wZW4iLCJyZWN0IiwiQ2F0ZWdvcmllc1N2YyIsInNob3dDYXRlZ29yeSIsImdldENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidGFza3MiLCJqIiwidGFzayIsInNlbGVjdENhdGVnb3J5Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdGVkVGFza3MiLCJzZWxlY3RhYmxlVGFza3MiLCJlbnRlcmVkQ2F0ZWdvcnkiLCJuZXdDYXRlZ29yeSIsImZvdW5kIiwiYWRkQ2F0ZWdvcnkiLCJuZXdUYXNrIiwic2VsZWN0VGFzayIsImFkZFRhc2siLCJlbnRlcmVkVGFzayIsInJlbW92ZVRhc2siLCJ1bnNlbGVjdFRhc2siLCJ0YXNrTGlzdCIsInNwbGljZSIsImluZGV4T2YiLCJzdGFydFByaW9yaXRpemluZyIsInNldFByaW9yaXR5TGlzdCIsImdldFF1ZXN0aW9ucyIsImNvdW50ZXIiLCJ1aSIsImZpcmViYXNldWkiLCJBdXRoVUkiLCJsb2dpblN1Y2Nlc3NmdWwiLCIkZW1pdCIsIm1vZGFsIiwibG9naW5GYWlsZWQiLCJzdGFydFVJIiwiY2FsbGJhY2tzIiwic2lnbkluU3VjY2VzcyIsImNyZWRlbnRpYWwiLCJyZWRpcmVjdFVybCIsImdldElkVG9rZW4iLCJpZFRva2VuIiwiYXV0aGVudGljYXRlIiwiYXV0aFR5cGUiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWxWZXJpZmllZCIsInNpZ25JbkZhaWx1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNyZWQiLCJzaWduSW5XaXRoQ3JlZGVudGlhbCIsInVpU2hvd24iLCJzdHlsZSIsImRpc3BsYXkiLCJzaWduSW5TdWNjZXNzVXJsIiwic2lnbkluT3B0aW9ucyIsIkdvb2dsZUF1dGhQcm92aWRlciIsIlBST1ZJREVSX0lEIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJzaWduSW5GbG93IiwiZXZlbnQiLCJyZXNldCIsInRlbGVncmFtTG9naW4iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwidXNlcm5hbWUiLCJ0ZWxlZ3JhbUlkIiwicGhvdG9fdXJsIiwiaGFzaCIsIiRmaWx0ZXIiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsImJvZHkiLCJwb3N0IiwiZmV0Y2giLCJwb3N0cyIsImdldFBvc3QiLCJ1bnNoaWZ0IiwiY291bnRyaWVzIiwiZmxhZyIsInRpZGJpdCIsImRhdGVPcHRpb25zIiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJpbml0RGF0ZSIsImRhdGVwaWNrZXJNb2RlIiwidXNlcm5hbWVUb2dnbGUiLCJwYXNzd29yZFRvZ2dsZSIsInRvZ2dsZVVzZXJuYW1lIiwibmV3VXNlcm5hbWUiLCJ0b2dnbGVQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwib3JpZ2luYWxCZyIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiY2hhbmdlVXNlcm5hbWUiLCJ1cGRhdGVVc2VyIiwiZmxhZ3MiLCJ1c2VyRmxhZ3MiLCJsb2FkQ291bnRyaWVzIiwiJHF1ZXJ5IiwiY291bnRyeSIsIiR3YXRjaCIsImluY2x1ZGVzIiwic2VsZWN0ZWRTa2lsbCIsInNraWxsc1Zpc2libGUiLCJwcm9qZWN0cyIsImxhYmVscyIsImVtcGxveWVyIiwiY29uY2F0IiwiZmlsdGVyZWRQcm9qZWN0cyIsInByb2plY3QiLCJzZXRTZWxlY3RlZFNraWxsIiwiY2hhcnRPcHRpb25zIiwiY3V0b3V0UGVyY2VudGFnZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJ0b29sdGlwcyIsImNoYXJ0U3R5bGUiLCJpbWFnZSIsIiRzY2UiLCJUZW5UaGluZ3NTdmMiLCJwYWdlIiwibGlzdHMiLCJzZWFyY2giLCJzZWFyY2hGaWVsZCIsIm5ld0l0ZW0iLCJsYW5ndWFnZUZpbHRlciIsImNhdGVnb3J5RmlsdGVyIiwic2VsZWN0ZWRMaXN0IiwiaGlnaGxpZ2h0ZWRMaXN0cyIsImhpZ2hsaWdodGVkTGlzdElkcyIsImxpc3RJZHNUb0RlbGV0ZSIsImNvbmZpcm1lZCIsImV4aGF1c3RlZCIsIm9iamVjdENhdGVnb3JpZXMiLCJibHVyYlR5cGVzIiwiYXBpIiwiYWRtaW5Pbmx5IiwiaGF2ZUNvbW1vbkl0ZW1zIiwiYXJyMSIsImFycjIiLCJzb21lIiwia2V5RG93biIsImlzIiwiY3JlYXRlVmFsdWUiLCJ0cmlnZ2VyIiwiYWRkTGlzdCIsImNyZWF0b3IiLCJ2YWx1ZXMiLCJhbnN3ZXJzIiwiaXNEeW5hbWljIiwic2V0U2VsZWN0ZWRJdGVtIiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRMaXN0IiwibGlzdCIsImdldExpc3QiLCJyZWFkT25seSIsImFkbWluIiwiZ2V0RmlsdGVyQ291bnQiLCJzZWFyY2hMaXN0cyIsImFzeW5jIiwidmlld1ZhbHVlIiwiaGlnaGxpZ2h0ZWRTZWFyY2hUZXh0IiwicmVnZXgiLCJ2YWx1ZU9yZGVyIiwiZmllbGQiLCJvcmRlciIsIm9yZGVyQnkiLCJnZXRMaXN0cyIsImdldE1vcmVMaXN0cyIsImxpbmtUZWxlZ3JhbSIsImdldFVzZXIiLCJzZXRMYW5ndWFnZUZpbHRlciIsInNldENhdGVnb3J5RmlsdGVyIiwidG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIiLCJhbGxDYXRlZ29yaWVzIiwiZ2V0Q2F0ZWdvcnlMYWJlbCIsInN1YmNhdGVnb3JpZXMiLCJzdWJjYXRlZ29yeSIsInN0YXJ0c1dpdGgiLCJsYWJlbCIsImpvaW4iLCJzb3J0QnkiLCJsaW1pdCIsImxhbmd1YWdlTm90IiwiY2F0ZWdvcmllc05vdCIsImNvdW50IiwibmV4dFBhZ2UiLCJnZXRMaXN0TmFtZSIsImxpc3RJZCIsInVwZGF0ZVZhbHVlIiwidXBkYXRlZEl0ZW1SZXNwb25zZSIsInVwZGF0ZUxpc3RWYWx1ZSIsImJsdXJiVHlwZSIsImRlbGV0ZVZhbHVlIiwiaGFzRHVwbGljYXRlIiwiY3JlYXRlZEl0ZW1SZXNwb25zZSIsImNyZWF0ZUxpc3RWYWx1ZSIsInVwc2VydExpc3QiLCJibHVyYiIsInZhbHVlVG9EZWxldGUiLCJkZWxldGVMaXN0VmFsdWUiLCJ1cGRhdGVMaXN0IiwidXBkYXRlcyIsInNhdmluZyIsImxpc3RJbmRleCIsImZpbmRJbmRleCIsImNoYW5nZXMiLCJjcmVhdGVMaXN0IiwiYXNzaWduIiwiZGVsZXRlTGlzdCIsImRlbGV0ZUxpc3RzIiwiY29uZmlybU1lcmdlTGlzdHMiLCJtZXJnZUxpc3RzIiwiY29uZmlybURlbGV0ZUxpc3RzIiwidG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0cyIsInRvZ2dsZUhpZ2hsaWdodGVkTGlzdCIsImhpZ2hsaWdodGVkTGlzdElkIiwic2V0RGlmZmljdWx0eSIsImRpZmZpY3VsdHkiLCJzZXRGcmVxdWVuY3kiLCJmcmVxdWVuY3kiLCJnZXRVcGRhdGVkQ2F0ZWdvcmllcyIsImxpc3RDYXRlZ29yeSIsInNwbGl0Iiwic2V0Q2F0ZWdvcnkiLCJ1cGRhdGVkQ2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJsaXN0c1RvVXBkYXRlIiwiZXZlcnkiLCJhbGwiLCJsaXN0VG9VcGRhdGUiLCJ1cGRhdGVkTGlzdCIsImNhdGVnb3J5U3RhdHVzIiwiYW5zd2VyIiwicmVtb3ZlQWxsQnV0TGV0dGVycyIsImdldFNlbGVjdGVkTGlzdHNUaXRsZSIsImdldEJsdXJicyIsInR5cGUiLCJnZXR0aW5nQmx1cmJzIiwiZ2V0RW1iZWRVcmwiLCJ2aWRlb0lkIiwibWF0Y2giLCJ0cmltIiwidHJ1c3RBc1Jlc291cmNlVXJsIiwiZ2V0TGFuZ3VhZ2VzIiwibGFuZ3VhZ2VTdGF0cyIsImdldExpc3RMYW5ndWFnZVN0YXRzIiwiY2F0ZWdvcnlTdGF0cyIsImdldExpc3RDYXRlZ29yeVN0YXRzIiwiZ2V0VXNlcnMiLCJnZXRRdWV1ZSIsInF1ZXVlIiwiZ2V0UGF1c2UiLCJwYXVzZWQiLCJ1c2VycyIsInRvZ2dsZUJhbiIsInRvZ2dsZVBhdXNlIiwiJHN0YXRlUGFyYW1zIiwiZGlzYWJsZWRDYXRlZ29yaWVzIiwidXBkYXRlR2FtZUNhdGVnb3J5IiwiZ2FtZSIsImMiLCJnZXRHYW1lIiwiY2hlY2tBbnN3ZXIiLCJnZXREYXRhIiwiZ2V0VGVudGhpbmdzIiwiZ3Vlc3MiLCJhbnN3ZXJUZW50aGluZ3MiLCJnZXRIaW50IiwiZ2V0VGVudGhpbmdzSGludCIsInNraXBMaXN0Iiwic2tpcFRlbnRoaW5nc0xpc3QiLCJkYXRhc2V0cyIsImxpbmVDaGFydE9wdGlvbnMiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInRpdGxlIiwiZ2V0UGxheVN0YXRzIiwieWVhcnMiLCJ1bmlxIiwibW9udGhzIiwidGltZXMiLCJwbGF5U3RhdHMiLCJzZXJpZXMiLCJtb250aCIsInVuaXF1ZVBsYXllcnMiLCJnZXRHYW1lU3RhdHMiLCJnYW1lU3RhdHMiLCJzb3J0ZWREYXRhIiwidGltZVJlbWFpbmluZyIsInRpbWVFeGVyY2lzaW5nIiwidGltZVJlc3RpbmciLCJyZXN0IiwiZXhlcmNpc2luZyIsInNvdW5kcyIsIkF1ZGlvIiwib2ZmIiwic3dpdGNoIiwiZXhlcmNpc2VzIiwicHJvZ3Jlc3MiLCJ3b3Jrb3V0IiwiZXhjZXJjaXNlVGltZSIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lciIsImV4ZXJjaXNlIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50RXhlcmNpc2UiLCJwbGF5IiwiJGh0dHAiLCJzdmMiLCJnZXQiLCJnZXRUYXNrcyIsImNob2ljZXMiLCJwcmlvcml0eUxpc3QiLCJmaXJzdENob2ljZSIsInNlY29uZENob2ljZSIsImNob2ljZSIsInQiLCJtIiwic2h1ZmZsZSIsImdldFByaW9yaXR5TGlzdCIsImdldFF1aXpGaWxlcyIsInF1aXoiLCJnZXRIaWdoc2NvcmUiLCJmdXp6eU1hdGNoIiwiZ2V0UmFuZG9tTGlzdCIsInB1dCIsImRlbGV0ZSIsInJlcG9ydExpc3QiLCJzZXRUb2tlbiIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwidXNlcklkIiwidGVsZWdyYW1EYXRhIiwiY3JlYXRlVXNlciIsImRpcmVjdGl2ZSIsIiRkb2N1bWVudCIsInJlc3RyaWN0Iiwic2NvcGUiLCJjbGlja091dHNpZGUiLCJsaW5rIiwiZWwiLCJhdHRyIiwidGFyZ2V0IiwiY29udGFpbnMiLCIkZXZhbCIsIiRzdGF0ZSIsIiRjb21waWxlIiwiJGludGVycG9sYXRlIiwiZ2V0U3R5bGUiLCJ0ZW1wbGF0ZVN0eWxlVXJsIiwiaHJlZiIsInJlbCIsImVsZW0iLCJ0ZW1wbGF0ZVN0eWxlcyIsImh0bWwiLCJzdGFydFN5bWJvbCIsImVuZFN5bWJvbCIsImFwcGVuZCIsInRvU3RhdGUiLCJ0b1BhcmFtcyIsImZyb21TdGF0ZSIsImZyb21QYXJhbXMiLCJzdGF0ZXMiLCJ2aWV3cyIsInZpZXciLCJmbGF0IiwiZ2V0U3R5bGVzIiwiRmlsZVN2YyIsImFuaW1hbHMiLCJhbmltYWwiLCJzb3VuZCIsImNhcGl0YWxpemUiLCJnZXRSYW5kb21BbmltYWxzIiwiZ2V0U2NvcmUiLCJpc1Njb3JlVmlzaWJsZSJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBQUEsMkJBQUFBLEdBQUEsQ0FDQTtJQUNBQyxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFDQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLElBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBRCxJQUFBQSxFQUFBLEdBQUE7SUFDQUMsT0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQTtFQUdBQyxPQUFBQSxHQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxDQUFBO0FBR0FDLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsa0JBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFSLDJCQUFBQSxDQUFBUyxNQUFBQSxDQUFBLENBQUFDLE1BQUFBLEVBQUFDLE1BQUFBLEtBQ0FELE1BQUFBLENBQUFFLE9BQUFBLENBQUFELE1BQUFBLENBQUFULE9BQUFBLEVBQUFTLE1BQUFBLENBQUFWLElBQUFBLENBQUFBLEVBQ0FZLElBQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQTtBQUdBLE1BQUFDLGtCQUFBQSxHQUFBLHNDQUFBO0VBQ0FDLE1BQUFBLEdBQUEsd0VBQUE7QUFFQVgsTUFBQUEsQ0FBQUMsY0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQUMsU0FBQUEsRUFBQSx5QkFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxJQUFBSSxNQUFBQSxDQUFBLElBQUFGLGtCQUFBQSxHQUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FWLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEscUJBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFJLFdBQUFBLEVBQUFBLENBQUFDLGdCQUFBQSxFQUFBQSxDQUFBQyx1QkFBQUEsRUFDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FmLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsU0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQVksS0FBQUEsRUFBQUE7SUFDQSxPQUFBUCxJQUFBQSxDQUFBRCxPQUFBQSxDQUFBLElBQUFJLE1BQUFBLENBQUEsS0FBQUYsa0JBQUFBLEdBQUFNLEtBQUFBLEdBQUFBLEVBQUEsSUFBQSxDQUFBLEVBQUEsR0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQWhCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsZUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQVksS0FBQUEsRUFBQUE7SUFDQSxPQUFBUCxJQUFBQSxDQUFBUSxNQUFBQSxHQUFBLENBQUEsR0FBQVIsSUFBQUEsR0FBQUEsSUFBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQUEsSUFBQUEsQ0FBQVMsU0FBQUEsQ0FBQSxDQUFBLEVBQUFULElBQUFBLENBQUFRLE1BQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUFFLE9BQUFBLENBQUFILEtBQUFBLENBQUFBLEdB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QUFBLEVBQ0FGLG1CQUFBQSxDQUFBSCxNQUFBQSxDQUFBTSxVQUFBQSxDQUFBQSxDQUFBLENBQUEsQ0FBQSxFQUVBTCxjQUFBQSxDQUNBTSxLQUFBQSxDQUFBLE1BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLE9BQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUMsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFlBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGFBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsUUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLFlBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxXQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsT0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLFdBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsVUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsV0FBQTtJQUNBRSxVQUFBQSxFQUFBLGNBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE1BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLE9BQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxXQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsaUJBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsb0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGdCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxpQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxvQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsZ0JBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGlCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsbUJBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsWUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsUUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxpQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsZ0JBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFlBQUE7SUFDQUUsVUFBQUEsRUFBQSxtQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsYUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsU0FBQTtJQUNBRSxVQUFBQSxFQUFBLGdCQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxVQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxXQUFBO0lBQ0FFLFVBQUFBLEVBQUEsY0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxD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QSxDQUFBRCxHQUFBQSxFQUNBLE9BQUFQLFNBQUFBLENBQUFLLElBQUFBLENBQUEsT0FBQSxDQUFBO0VBRUFFLEdBQUFBLENBQUFFLElBQUFBLEdBQUEsb0JBQUEsRUFDQUYsR0FBQUEsQ0FBQUcsU0FBQUEsR0FBQSxLQUFBLEVBQ0FILEdBQUFBLENBQUFJLFNBQUFBLEdBQUEsUUFBQTtFQUNBLElBQUFDLEtBQUFBLEdBQUEsQ0FBQSxDQUFBO0VBQ0EsTUFBQUMsU0FBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsUUFBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsVUFBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsR0FBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsU0FBQUEsR0FBQSxFQUFBO0VBQ0EsSUFBQUMsS0FBQUEsR0FBQXhFLElBQUFBLENBQUFDLEtBQUFBLENBQUFELElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUF3RSxTQUFBQSxDQUFBQTtFQUNBLE1BQUFFLFlBQUFBLEdBQUEsQ0FDQTtJQUNBQyxJQUFBQSxFQUFBLE9BQUE7SUFDQUMsWUFBQUEsRUFBQSxhQUFBO0lBQ0FDLEtBQUFBLEVBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBO01BQ0FDLE9BQUFBLEVBQUEsQ0FBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLEVBQUEsQ0FBQTtNQUNBNUssQ0FBQUEsRUFBQSxDQUFBO01BQ0FTLFNBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBO0lBRUFvSyxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO0lBQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7TUFDQUEsU0FBQUEsQ0FBQUMsUUFBQUEsSUFBQSxHQUNBO0lBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQVYsSUFBQUEsRUFBQSxVQUFBO0lBQ0FDLFlBQUFBLEVBQUEsWUFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7TUFDQTVLLENBQUFBLEVBQUEsQ0FBQTtNQUNBUyxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBb0ssR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO01BQ0FBLFNBQUFBLENBQUFFLFFBQUFBLEdBQUEsQ0FBQSxLQUNBRixTQUFBQSxDQUFBRyxZQUFBQSxJQUFBLENBQUEsQ0FFQTtJQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FaLElBQUFBLEVBQUEsT0FBQTtJQUNBQyxZQUFBQSxFQUFBLGdCQUFBO0lBQ0FDLEtBQUFBLEVBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBO01BQ0FDLE9BQUFBLEVBQUEsQ0FBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBLENBQUEsQ0FBQTtNQUNBNUssQ0FBQUEsRUFBQSxDQUFBO01BQ0FTLFNBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBO0lBRUFvSyxHQUFBQSxFQUFBLElBQUFDLEtBQUFBO0lBQ0FDLFFBQUFBLEVBQUEsU0FBQUEsQ0FBQUMsU0FBQUEsRUFBQUE7TUFDQUEsU0FBQUEsQ0FBQUksS0FBQUEsSUFBQSxDQUNBO0lBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQWIsSUFBQUEsRUFBQSxRQUFBO0lBQ0FDLFlBQUFBLEVBQUEsUUFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7TUFDQTVLLENBQUFBLEVBQUEsQ0FBQTtNQUNBUyxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBb0ssR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO01BQ0FBLFNBQUFBLENBQUFLLE1BQUFBLEdBQUFBLENBQUEsQ0FDQTtJQUFBO0VBQUEsQ0FBQSxF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SyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFtSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEdBQ0FuSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFtSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXBLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQW1LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBcEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBbUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FDQSxLQUFBLEVBQ0EsTUFBQSxHQUNBbkssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBbUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FwSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFtSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXBLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQW1LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxDQUFBLEVBRUFILFFBQUFBLENBQUFFLFlBQUFBLENBQ0EsTUFBQSxFQUNBLE1BQUEsR0FDQW5LLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQW1LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBcEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQSxHQUFBbUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FwSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFtSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLEtBQUEsRUFDQSxNQUFBLEdBQ0FuSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUFtSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXBLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQW1LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBcEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBbUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQXZHLEdBQUFBLENBQUFHLFNBQUFBLEdBQUFpRyxRQUFBQSxFQUNBcEcsR0FBQUEsQ0FBQUUsSUFBQUEsR0FBQSxjQUFBLEVBQ0FGLEdBQUFBLENBQUF3RyxRQUFBQSxDQUFBLFdBQUEsRUFBQTVHLE1BQUFBLENBQUErQyxLQUFBQSxHQUFBLENBQUEsR0FBQTNDLEdBQUFBLENBQUF5RyxXQUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBOUQsS0FBQUEsR0FBQSxDQUFBLEVBQUEvQyxNQUFBQSxDQUFBZ0QsTUFBQUEsR0FBQSxDQUFBLENBQUEsRUFDQTVDLEdBQUFBLENBQUFFLElBQUFBLEdBQUEsY0FBQSxFQUNBRixHQUFBQSxDQUFBd0csUUFBQUEsQ0FDQSxzQkFBQSxFQUNBNUcsTUFBQUEsQ0FBQStDLEtBQUFBLEdBQUEsQ0FBQSxHQUFBM0MsR0FBQUEsQ0FBQXlHLFdBQUFBLENBQUEsc0JBQUEsQ0FBQSxDQUFBOUQsS0FBQUEsR0FBQSxDQUFBLEVBQ0EvQyxNQUFBQSxDQUFBZ0QsTUFBQUEsR0FBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLEVBRUE1QyxHQUFBQSxDQUFBd0csUUFBQUEsQ0FDQSw0Q0FBQSxFQUNBNUcsTUFBQUEsQ0FBQStDLEtBQUFBLEdBQUEsQ0FBQSxHQUFBM0MsR0FBQUEsQ0FBQXlHLFdBQUFBLENBQUEsNENBQUEsQ0FBQSxDQUFBOUQsS0FBQUEsR0FBQSxDQUFBLEVBQ0EvQyxNQUFBQSxDQUFBZ0QsTUFBQUEsR0FBQSxFQUFBLENBRUE7SUFBQTtJQUFBLENBQ0EyRCxLQUFBQSxJQUFBeFAsU0FBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQ0EsR0FBQSxJQUNBd1AsS0FBQUEsR0FBQSxHQUFBLEVBQ0F4UCxTQUFBQSxHQUFBQSxDQUFBLENBQUEsSUFDQXdQLEtBQUFBLEdBQUEsQ0FBQSxLQUNBQSxLQUFBQSxHQUFBLENBQUEsRUFDQXhQLFNBQUFBLEdBQUFBLENBQUEsQ0FBQSxDQUFBO0lBRUFrUCxxQkFBQUEsQ0FBQUMsSUFBQUEsQ0FDQTtFQUFBLENBQUEsQ0FBQTtFQXhHQSxJQUFBSyxLQUFBQSxHQUFBLENBQUE7SUFDQXhQLFNBQUFBLEdBQUFBLENBQUEsQ0FBQTtFQXlHQXVELE1BQUFBLENBQUFxRyxLQUFBQSxHQUFBLFlBQUE7SUFDQSxPQUFBO01BQ0ErRixlQUFBQSxFQUFBLHNCQUFBLEdBQUEvRixLQUFBQSxHQUFBO0lBQUEsQ0FFQTtFQUFBLENBQ0E7QUFBQSxDQUFBLENBQUEsRUMzcEJBbEosT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQVcsVUFBQUEsQ0FBQSxhQUFBLEVBQUEsVUFBQWlDLE1BQUFBLEVBQUFBO0VBQ0EsSUFBQXNGLE1BQUFBLEdBQUE3RSxRQUFBQSxDQUFBZ0QsY0FBQUEsQ0FBQSxjQUFBLENBQUE7SUFDQWlDLEdBQUFBLEdBQUFKLE1BQUFBLENBQUFLLFVBQUFBLENBQUEsSUFBQSxDQUFBO0lBQ0EwRyxPQUFBQSxHQUFBLEVBQUE7SUFDQUMsTUFBQUEsR0FBQSxDQUFBLFNBQUEsRUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQSxTQUFBLENBQUE7RUFFQSxTQUFBQyxNQUFBQSxDQUFBQSxFQUFBQTtJQUNBeFIsSUFBQUEsQ0FBQTRPLFFBQUFBLEdBQUEsQ0FBQSxFQUNBNU8sSUFBQUEsQ0FBQXlSLE1BQUFBLEdBQUEsQ0FBQSxFQUNBelIsSUFBQUEsQ0FBQTBSLFNBQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBMVIsSUFBQUEsQ0FBQWlOLEtBQUFBLEdBQUFuRyxJQUFBQSxDQUFBK0csS0FBQUEsQ0FBQSxDQUFBLEdBQUEvRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxDQUFBQSxFQUNBN0csSUFBQUEsQ0FBQTJSLGFBQUFBLEdBQUE3SyxJQUFBQSxDQUFBK0csS0FBQUEsQ0FBQSxFQUFBLEdBQUEvRyxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxDQUFBQSxHQUFBLENBQUEsRUFDQTdHLElBQUFBLENBQUE0UixTQUFBQSxHQUFBOUssSUFBQUEsQ0FBQStHLEtBQUFBLENBQUEsR0FBQSxHQUFBL0csSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsQ0FBQUEsR0FBQSxFQUFBLEVBQ0E3RyxJQUFBQSxDQUFBeU4sQ0FBQUEsR0FBQTNHLElBQUFBLENBQUErRyxLQUFBQSxDQUFBL0csSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsR0FBQTBELE1BQUFBLENBQUErQyxLQUFBQSxDQUFBQSxFQUNBdE4sSUFBQUEsQ0FBQTBOLENBQUFBLEdBQUE1RyxJQUFBQSxDQUFBK0csS0FBQUEsQ0FBQS9HLElBQUFBLENBQUFELE1BQUFBLEVBQUFBLEdBQUEwRCxNQUFBQSxDQUFBZ0QsTUFBQUEsQ0FBQUEsRUFDQXZOLElBQUFBLENBQUE2UixFQUFBQSxHQUFBL0ssSUFBQUEsQ0FBQUQsTUFBQUEsRUFBQUEsSUFBQSxFQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxFQUNBN0csSUFBQUEsQ0FBQThSLEVBQUFBLEdBQUFoTCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxJQUFBLEVBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUNBO0VBQUE7RUErQkErSixxQkFBQUEsQ0FmQSxTQUFBbUIsYUFBQUEsQ0FBQUEsRUFBQUE7SUFDQVQsT0FBQUEsQ0FBQXpQLElBQUFBLENBQUEsSUFBQTJQLE1BQUFBLEdBQUFBLEVBQ0FGLE9BQUFBLEdBQUFBLE9BQUFBLENBQUFqSyxNQUFBQSxDQUFBLFVBQUEySyxNQUFBQSxFQUFBQTtNQU9BLE9BTkFBLE1BQUFBLENBQUFQLE1BQUFBLEtBQUFPLE1BQUFBLENBQUFKLFNBQUFBLEtBQ0FJLE1BQUFBLENBQUFOLFNBQUFBLEdBQUFBLENBQUEsQ0FBQSxDQUFBLEVBRUFNLE1BQUFBLENBQUF2RSxDQUFBQSxJQUFBdUUsTUFBQUEsQ0FBQUgsRUFBQUEsR0FBQUcsTUFBQUEsQ0FBQS9FLEtBQUFBLEVBQ0ErRSxNQUFBQSxDQUFBdEUsQ0FBQUEsSUFBQXNFLE1BQUFBLENBQUFGLEVBQUFBLEdBQUFFLE1BQUFBLENBQUEvRSxLQUFBQSxFQUNBK0UsTUFBQUEsQ0FBQVAsTUFBQUEsSUFBQU8sTUFBQUEsQ0FBQU4sU0FBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLEVBQ0FNLE1BQUFBLENBQUFQLE1BQUFBLEdBQUEsQ0FDQTtJQUFBLENBQUEsQ0FBQSxFQXZCQTlHLEdBQUFBLENBQUFtRyxTQUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUF2RyxNQUFBQSxDQUFBK0MsS0FBQUEsRUFBQS9DLE1BQUFBLENBQUFnRCxNQUFBQSxDQUFBQSxFQUNBK0QsT0FBQUEsQ0FBQXBQLE9BQUFBLENBQUEsVUFBQThQLE1BQUFBLEVBQUFBO01BQ0FULE1BQUFBLENBQUF6SyxJQUFBQSxDQUFBK0csS0FBQUEsQ0FBQTBELE1BQUFBLENBQUEvUSxNQUFBQSxHQUFBd1IsTUFBQUEsQ0FBQVAsTUFBQUEsR0FBQU8sTUFBQUEsQ0FBQUosU0FBQUEsQ0FBQUEsQ0FBQUEsRUFDQWpILEdBQUFBLENBQUFxRCxTQUFBQSxFQUFBQSxFQUNBckQsR0FBQUEsQ0FBQXNELEdBQUFBLENBQUErRCxNQUFBQSxDQUFBdkUsQ0FBQUEsRUFBQXVFLE1BQUFBLENBQUF0RSxDQUFBQSxFQUFBc0UsTUFBQUEsQ0FBQVAsTUFBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBM0ssSUFBQUEsQ0FBQW9ILEVBQUFBLENBQUFBLEVBQ0F2RCxHQUFBQSxDQUFBRyxTQUFBQSxHQUFBeUcsTUFBQUEsQ0FBQXpLLElBQUFBLENBQUErRyxLQUFBQSxDQUFBMEQsTUFBQUEsQ0FBQS9RLE1BQUFBLEdBQUF3UixNQUFBQSxDQUFBUCxNQUFBQSxHQUFBTyxNQUFBQSxDQUFBSixTQUFBQSxDQUFBQSxDQUFBQSxFQUNBakgsR0FBQUEsQ0FBQTJELElBQUFBLEVBQUFBLEVBQ0EzRCxHQUFBQSxDQUFBd0QsV0FBQUEsR0FBQW9ELE1BQUFBLENBQUFBLE1BQUFBLENBQUEvUSxNQUFBQSxHQUFBc0csSUFBQUEsQ0FBQStHLEtBQUFBLENBQUEwRCxNQUFBQSxDQUFBL1EsTUFBQUEsR0FBQXdSLE1BQUFBLENBQUFQLE1BQUFBLEdBQUFPLE1BQUFBLENBQUFKLFNBQUFBLENBQUFBLENBQUFBLEVBQ0FqSCxHQUFBQSxDQUFBeUQsU0FBQUEsR0FBQTRELE1BQUFBLENBQUFMLGFBQUFBLEdBQUFLLE1BQUFBLENBQUFQLE1BQUFBLEdBQUFPLE1BQUFBLENBQUFKLFNBQUFBLEVBQ0FqSCxHQUFBQSxDQUFBMEQsTUFBQUEsRUFDQTtJQUFBLENBQUEsQ0FBQSxFQWVBdUMscUJBQUFBLENBQUFtQixhQUFBQSxDQUNBO0VBQUEsQ0FBQSxDQUFBLEVBSUEsWUFBQTtJQWlCQSxTQUFBekIsWUFBQUEsQ0FBQUEsRUFBQUE7TUFDQS9GLE1BQUFBLENBQUErQyxLQUFBQSxHQUFBNUosTUFBQUEsQ0FBQTZNLFVBQUFBLEVBQ0FoRyxNQUFBQSxDQUFBZ0QsTUFBQUEsR0FBQTdKLE1BQUFBLENBQUE4TSxXQUFBQSxJQUFBakcsTUFBQUEsQ0FBQStDLEtBQUFBLElBQUEsR0FBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLENBQ0E7SUFBQTtJQVhBNUosTUFBQUEsQ0FBQStNLGdCQUFBQSxDQUFBLFFBQUEsRUFBQUgsWUFBQUEsRUFBQUEsQ0FBQSxDQUFBLENBQUEsRUFHQUEsWUFBQUEsRUFTQTtFQUFBLENBckJBLEVBc0JBO0FBQUEsQ0FBQSxDQUFBLEVDeEVBbE8sT0FBQUEsQ0FBQUMsTUFBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQVcsVUFBQUEsQ0FBQSxjQUFBLEVBQUEsVUFBQWlDLE1BQUFBLEVBQUFBO0VBQ0FBLE1BQUFBLENBQUFnTixVQUFBQSxHQUFBQyxRQUFBQSxJQUFBQTtJQUNBak4sTUFBQUEsQ0FBQWtOLElBQUFBLEdBQUFsTixNQUFBQSxDQUFBMkMsUUFBQUEsQ0FBQXNLLFFBQUFBLENBQUFBLENBQUFwTCxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBNUIsTUFBQUEsQ0FBQTJDLFFBQUFBLENBQUFzSyxRQUFBQSxDQUFBQSxDQUFBMVIsTUFBQUEsQ0FBQUEsQ0FBQTtFQUFBLENBRUE7QUFBQSxDQUFBLENBQUEsRUNKQTRCLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQUFXLFVBQUFBLENBQUEsYUFBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBbU4sUUFBQUEsRUFBQUE7RUFDQW5OLE1BQUFBLENBQUFvTixPQUFBQSxHQUFBLENBQ0E7SUFDQTdHLElBQUFBLEVBQUEsTUFBQTtJQUNBOEcsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBOUcsSUFBQUEsRUFBQSxhQUFBO0lBQ0E4RyxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0E5RyxJQUFBQSxFQUFBLFFBQUE7SUFDQThHLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQTlHLElBQUFBLEVBQUEsT0FBQTtJQUNBOEcsSUFBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxFQUlBck4sTUFBQUEsQ0FBQXNOLE9BQUFBLEdBQUE7SUFDQUMsS0FBQUEsRUFBQSxFQUFBO0lBQ0FoSCxJQUFBQSxFQUFBLEVBQUE7SUFDQWlILEtBQUFBLEVBQUEsRUFBQTtJQUNBQyxLQUFBQSxFQUFBLEVBQUE7SUFDQXBOLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBR0FMLE1BQUFBLENBQUFMLElBQUFBLEdBQUEsWUFBQTtJQUNBSyxNQUFBQSxDQUFBME4sT0FBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0FQLFFBQUFBLENBQUF4TixJQUFBQSxDQUFBO01BQ0E0TixLQUFBQSxFQUFBdk4sTUFBQUEsQ0FBQXNOLE9BQUFBLENBQUFDLEtBQUFBO01BQ0FoSCxJQUFBQSxFQUFBdkcsTUFBQUEsQ0FBQXNOLE9BQUFBLENBQUEvRyxJQUFBQTtNQUNBaUgsS0FBQUEsRUFBQXhOLE1BQUFBLENBQUFzTixPQUFBQSxDQUFBRSxLQUFBQTtNQUNBQyxLQUFBQSxFQUFBek4sTUFBQUEsQ0FBQXNOLE9BQUFBLENBQUFHLEtBQUFBO01BQ0FwTixPQUFBQSxFQUFBTCxNQUFBQSxDQUFBc04sT0FBQUEsQ0FBQWpOO0lBQUFBLENBQUFBLENBQUFBLENBQ0EwRCxJQUFBQSxDQUNBLFVBQUFDLFFBQUFBLEVBQUFBO01BQ0FoRSxNQUFBQSxDQUFBSSxLQUFBQSxDQUFBLGNBQUEsQ0FBQSxFQUNBSixNQUFBQSxDQUFBMk4sSUFBQUEsR0FBQUEsQ0FBQSxDQUFBLEVBQ0E3TyxPQUFBQSxDQUFBQyxHQUFBQSxDQUFBLDZCQUFBLEVBQUFpRixRQUFBQSxDQUFBNEosTUFBQUEsRUFBQTVKLFFBQUFBLENBQUFxSixJQUFBQSxDQUFBQSxFQUNBdk8sT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQWlGLFFBQUFBLENBQ0E7SUFBQSxDQUFBLEVBQ0EsVUFBQTZKLEdBQUFBLEVBQUFBO01BQ0E3TixNQUFBQSxDQUFBSSxLQUFBQSxDQUFBLHFCQUFBLENBQUEsRUFDQUosTUFBQUEsQ0FBQTBOLE9BQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUNBNU8sT0FBQUEsQ0FBQUMsR0FBQUEsQ0FBQSxnQkFBQSxFQUFBOE8sR0FBQUEsQ0FDQTtJQUFBLENBQUEsQ0FFQTtFQUFBLENBQ0E7QUFBQSxDQUFBLENBQUEsRUNsREExUSxPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBVyxVQUFBQSxDQUFBLGdCQUFBLEVBQUEsVUFBQWlDLE1BQUFBLEVBQUFBO0VBRUFBLE1BQUFBLENBQUE4TixRQUFBQSxHQUFBLFVBQUFDLFNBQUFBLEVBQUFBO0lBQ0EsSUFBQS9OLE1BQUFBLENBQUFtQyxNQUFBQSxFQUNBLE9BQUFuQyxNQUFBQSxDQUFBbUMsTUFBQUEsQ0FBQXJHLElBQUFBLENBQUEsVUFBQXVHLEtBQUFBLEVBQUFBO01BQ0EsT0FBQUEsS0FBQUEsQ0FBQTJMLElBQUFBLEtBQUFELFNBQ0E7SUFBQSxDQUFBLENBQ0E7RUFBQSxDQUVBO0FBQUEsQ0FBQSxDQUFBLEVDVkE1USxPQUFBQSxDQUFBQyxNQUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUNBVyxVQUFBQSxDQUFBLGFBQUEsRUFBQSxVQUFBaUMsTUFBQUEsRUFBQWlPLE9BQUFBLEVBQUFBO0VBRUFqTyxNQUFBQSxDQUFBa08sb0JBQUFBLEdBQUFBLENBQUEsQ0FBQSxFQUVBcE4sQ0FBQUEsQ0FBQW9CLE9BQUFBLENBQUEsdURBQUEsRUFBQSxVQUFBOEIsUUFBQUEsRUFBQUEsQ0FFQSxDQUFBLENBQUEsRUFFQWhFLE1BQUFBLENBQUFtTyxhQUFBQSxHQUFBbk8sTUFBQUEsQ0FBQXNDLE9BQUFBLENBQUEsQ0FBQSxDQUFBLEVBRUF0QyxNQUFBQSxDQUFBb08sV0FBQUEsR0FBQSxVQUFBQyxLQUFBQSxFQUFBQTtJQUNBck8sTUFBQUEsQ0FBQW1PLGFBQUFBLEdBQUFFLEtBQUFBLEVBQ0FyTyxNQUFBQSxDQUFBa08sb0JBQUFBLEdBQUFBLENBQUEsQ0FDQTtFQUFBLENBQUEsRUFFQWxPLE1BQUFBLENBQUFzTyxTQUFBQSxHQUFBLFVBQUE1VCxLQUFBQSxFQUFBNlQsS0FBQUEsRUFBQTlHLEtBQUFBLEVBQUFBO0lBQ0EsT0FBQSxDQUFBLENBQUEvTSxLQUFBQSxDQUFBOFQsTUFBQUEsSUFDQTlULEtBQUFBLENBQUE4VCxNQUFBQSxDQUFBalQsTUFBQUEsR0FBQSxDQUNBO0VBQUEsQ0FDQTtBQUFBLENBQUEsQ0FBQSxFQ3BCQTRCLE9BQUFBLENBQUFDLE1BQUFBLENBQUEsS0FBQSxDQUFBLENBQ0FXLFVBQUFBLENBQUEsY0FBQSxFQUFBLFVBQUFpQyxNQUFBQSxFQUFBb0YsT0FBQUEsRUFBQUE7RUFFQSxJQUFBcUosSUFBQUEsR0FBQSxDQUFBO0lBQ0FDLEtBQUFBLEdBQUEsQ0FBQTtJQUVBcEosTUFBQUEsR0FBQTdFLFFBQUFBLENBQUFnRCxjQUFBQSxDQUFBLGVBQUEsQ0FBQTtJQUNBaUMsR0FBQUEsR0FBQUosTUFBQUEsQ0FBQUssVUFBQUEsQ0FBQSxJQUFBLENBQUE7SUFDQWdKLGFBQUFBLEdBQUEsSUFBQTdILEtBQUFBO0VBQ0E2SCxhQUFBQSxDQUFBakgsR0FBQUEsR0FBQSx1QkFBQTtFQUNBLElBQUFrSCxVQUFBQSxHQUFBLElBQUE5SCxLQUFBQTtFQUNBOEgsVUFBQUEsQ0FBQWxILEdBQUFBLEdBQUEsb0JBQUE7RUFDQSxJQUFBbUgsUUFBQUEsR0FBQSxDQUFBLENBQUE7SUFDQUMsT0FBQUEsR0FBQUEsQ0FBQSxDQUFBO0lBRUFDLE9BQUFBLEdBQUE7TUFDQUMsSUFBQUEsRUFBQTtRQUNBQyxLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBdkksT0FBQUEsRUFBQSxDQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBeUksT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQUMsR0FBQUEsRUFBQTtRQUNBSCxLQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLENBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBdkksT0FBQUEsRUFBQSxDQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBeUksT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQUUsSUFBQUEsRUFBQTtRQUNBSixLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBdkksT0FBQUEsRUFBQSxDQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBeUksT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQUcsR0FBQUEsRUFBQTtRQUNBTCxLQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEVBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBdkksT0FBQUEsRUFBQSxDQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBeUksT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQUksSUFBQUEsRUFBQTtRQUNBTixLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBdkksT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBeUksT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQUssS0FBQUEsRUFBQTtRQUNBUCxLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBdkksT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBeUksT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQU0sS0FBQUEsRUFBQTtRQUNBUixLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBdkksT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFBLEVBQUEsQ0FBQTtRQUNBeUksT0FBQUEsRUFBQUEsQ0FBQTtNQUFBLENBQUE7TUFFQU8sS0FBQUEsRUFBQTtRQUNBVCxLQUFBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBQyxHQUFBQSxFQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FBQTtRQUNBdkksT0FBQUEsRUFBQSxFQUFBO1FBQ0FELElBQUFB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O0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsV0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxnQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFdBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsT0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxlQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsd0JBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsVUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsY0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGtCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxpQ0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxrQ0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxlQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEseUJBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsdUNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsMEJBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsT0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxhQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsY0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsT0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsTUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsa0JBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxnQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLG9CQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsZ0JBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxNQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLDZCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGlDQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLHNEQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxlQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsT0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxXQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFdBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsbUJBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSw4Q0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxXQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE1BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsZUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFdBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsbUNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsVUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxXQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxhQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsZ0NBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsTUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSwyQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsT0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsVUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsdUJBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsd0NBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsb0JBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxnQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGtDQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsYUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxlQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFdBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFdBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsWUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLHNCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsNEJBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsWUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxrQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSw0Q0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxNQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsVUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLDBCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsWUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsV0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxlQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsZ0JBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxXQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsTUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxhQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE1BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxNQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGtCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGtCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsVUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLDJCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsYUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxxQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsVUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLG9CQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsY0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxpQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxXQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLDhDQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsd0JBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsVUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxjQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsYUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSx1QkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxhQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLDJCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLHNCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFdBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsMEJBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsTUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSw2QkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxNQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsWUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsY0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxxQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLDJCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLDhCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxzQ0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSwwQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsVUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxrQ0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxtQ0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSx5QkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxzQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsbUJBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsT0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsY0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEs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LE1BQUFBLENBQUE1aEIsSUFBQUEsQ0FBQUEsQ0FBQUosR0FBQUEsQ0FBQWdpQixNQUFBQSxJQUFBQSxNQUFBQSxDQUFBNWhCLElBQUFBLENBQUFBLENBQUFBLENBQUEzSyxLQUFBQSxDQUFBLENBQUEsRUFBQSxFQUFBLENBQUE7RUFFQW9FLE1BQUFBLENBQUF1b0IsUUFBQUEsR0FBQSxNQUNBLEdBQUF2b0IsTUFBQUEsQ0FBQWtvQixPQUFBQSxDQUFBOWxCLE1BQUFBLENBQUErbEIsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQTVoQixJQUFBQSxLQUFBNGhCLE1BQUFBLENBQUEzRyxLQUFBQSxDQUFBQSxDQUFBam1CLE1BQUFBLElBQUF5RSxNQUFBQSxDQUFBa29CLE9BQUFBLENBQUEzc0IsTUFBQUEsRUFBQUEsRUFFQXlFLE1BQUFBLENBQUF3b0IsY0FBQUEsR0FBQSxNQUFBeG9CLE1BQUFBLENBQUFrb0IsT0FBQUEsQ0FBQTlsQixNQUFBQSxDQUFBK2xCLE1BQUFBLElBQUFBLE1BQUFBLENBQUEzRyxLQUFBQSxDQUFBQSxDQUFBam1CLE1BQUFBLEtBQUF5RSxNQUFBQSxDQUFBa29CLE9BQUFBLENBQUEzc0IsTUFDQTtBQUFBLENBQUEsQ0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAgPSBbXHJcbiAge1xyXG4gICAgYmFzZTogXCJBXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDFcXHUyNEI2XFx1RkYyMVxcdTAwQzBcXHUwMEMxXFx1MDBDMlxcdTFFQTZcXHUxRUE0XFx1MUVBQVxcdTFFQThcXHUwMEMzXFx1MDEwMFxcdTAxMDJcXHUxRUIwXFx1MUVBRVxcdTFFQjRcXHUxRUIyXFx1MDIyNlxcdTAxRTBcXHUwMEM0XFx1MDFERVxcdTFFQTJcXHUwMEM1XFx1MDFGQVxcdTAxQ0RcXHUwMjAwXFx1MDIwMlxcdTFFQTBcXHUxRUFDXFx1MUVCNlxcdTFFMDBcXHUwMTA0XFx1MDIzQVxcdTJDNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFBXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFFXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwQzZcXHUwMUZDXFx1MDFFMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQU9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOFxcdUE3M0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkFZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0MlxcdTI0QjdcXHVGRjIyXFx1MUUwMlxcdTFFMDRcXHUxRTA2XFx1MDI0M1xcdTAxODJcXHUwMTgxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJDXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDNcXHUyNEI4XFx1RkYyM1xcdTAxMDZcXHUwMTA4XFx1MDEwQVxcdTAxMENcXHUwMEM3XFx1MUUwOFxcdTAxODdcXHUwMjNCXFx1QTczRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ0XFx1MjRCOVxcdUZGMjRcXHUxRTBBXFx1MDEwRVxcdTFFMENcXHUxRTEwXFx1MUUxMlxcdTFFMEVcXHUwMTEwXFx1MDE4QlxcdTAxOEFcXHUwMTg5XFx1QTc3OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRFpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMVxcdTAxQzRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjJcXHUwMUM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJFXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDVcXHUyNEJBXFx1RkYyNVxcdTAwQzhcXHUwMEM5XFx1MDBDQVxcdTFFQzBcXHUxRUJFXFx1MUVDNFxcdTFFQzJcXHUxRUJDXFx1MDExMlxcdTFFMTRcXHUxRTE2XFx1MDExNFxcdTAxMTZcXHUwMENCXFx1MUVCQVxcdTAxMUFcXHUwMjA0XFx1MDIwNlxcdTFFQjhcXHUxRUM2XFx1MDIyOFxcdTFFMUNcXHUwMTE4XFx1MUUxOFxcdTFFMUFcXHUwMTkwXFx1MDE4RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ2XFx1MjRCQlxcdUZGMjZcXHUxRTFFXFx1MDE5MVxcdUE3N0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0N1xcdTI0QkNcXHVGRjI3XFx1MDFGNFxcdTAxMUNcXHUxRTIwXFx1MDExRVxcdTAxMjBcXHUwMUU2XFx1MDEyMlxcdTAxRTRcXHUwMTkzXFx1QTdBMFxcdUE3N0RcXHVBNzdFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJIXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDhcXHUyNEJEXFx1RkYyOFxcdTAxMjRcXHUxRTIyXFx1MUUyNlxcdTAyMUVcXHUxRTI0XFx1MUUyOFxcdTFFMkFcXHUwMTI2XFx1MkM2N1xcdTJDNzVcXHVBNzhEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJJXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNDlcXHUyNEJFXFx1RkYyOVxcdTAwQ0NcXHUwMENEXFx1MDBDRVxcdTAxMjhcXHUwMTJBXFx1MDEyQ1xcdTAxMzBcXHUwMENGXFx1MUUyRVxcdTFFQzhcXHUwMUNGXFx1MDIwOFxcdTAyMEFcXHUxRUNBXFx1MDEyRVxcdTFFMkNcXHUwMTk3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJKXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEFcXHUyNEJGXFx1RkYyQVxcdTAxMzRcXHUwMjQ4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJLXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEJcXHUyNEMwXFx1RkYyQlxcdTFFMzBcXHUwMUU4XFx1MUUzMlxcdTAxMzZcXHUxRTM0XFx1MDE5OFxcdTJDNjlcXHVBNzQwXFx1QTc0MlxcdUE3NDRcXHVBN0EyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNENcXHUyNEMxXFx1RkYyQ1xcdTAxM0ZcXHUwMTM5XFx1MDEzRFxcdTFFMzZcXHUxRTM4XFx1MDEzQlxcdTFFM0NcXHUxRTNBXFx1MDE0MVxcdTAyM0RcXHUyQzYyXFx1MkM2MFxcdUE3NDhcXHVBNzQ2XFx1QTc4MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTEpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDREXFx1MjRDMlxcdUZGMkRcXHUxRTNFXFx1MUU0MFxcdTFFNDJcXHUyQzZFXFx1MDE5Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiTlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDRFXFx1MjRDM1xcdUZGMkVcXHUwMUY4XFx1MDE0M1xcdTAwRDFcXHUxRTQ0XFx1MDE0N1xcdTFFNDZcXHUwMTQ1XFx1MUU0QVxcdTFFNDhcXHUwMjIwXFx1MDE5RFxcdUE3OTBcXHVBN0E0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNBXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUNCXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJPXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNEZcXHUyNEM0XFx1RkYyRlxcdTAwRDJcXHUwMEQzXFx1MDBENFxcdTFFRDJcXHUxRUQwXFx1MUVENlxcdTFFRDRcXHUwMEQ1XFx1MUU0Q1xcdTAyMkNcXHUxRTRFXFx1MDE0Q1xcdTFFNTBcXHUxRTUyXFx1MDE0RVxcdTAyMkVcXHUwMjMwXFx1MDBENlxcdTAyMkFcXHUxRUNFXFx1MDE1MFxcdTAxRDFcXHUwMjBDXFx1MDIwRVxcdTAxQTBcXHUxRURDXFx1MUVEQVxcdTFFRTBcXHUxRURFXFx1MUVFMlxcdTFFQ0NcXHUxRUQ4XFx1MDFFQVxcdTAxRUNcXHUwMEQ4XFx1MDFGRVxcdTAxODZcXHUwMTlGXFx1QTc0QVxcdUE3NENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9JXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9PXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NEVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9VXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAyMjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlBcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1MFxcdTI0QzVcXHVGRjMwXFx1MUU1NFxcdTFFNTZcXHUwMUE0XFx1MkM2M1xcdUE3NTBcXHVBNzUyXFx1QTc1NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUxXFx1MjRDNlxcdUZGMzFcXHVBNzU2XFx1QTc1OFxcdTAyNEFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlJcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1MlxcdTI0QzdcXHVGRjMyXFx1MDE1NFxcdTFFNThcXHUwMTU4XFx1MDIxMFxcdTAyMTJcXHUxRTVBXFx1MUU1Q1xcdTAxNTZcXHUxRTVFXFx1MDI0Q1xcdTJDNjRcXHVBNzVBXFx1QTdBNlxcdUE3ODJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlNcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1M1xcdTI0QzhcXHVGRjMzXFx1MUU5RVxcdTAxNUFcXHUxRTY0XFx1MDE1Q1xcdTFFNjBcXHUwMTYwXFx1MUU2NlxcdTFFNjJcXHUxRTY4XFx1MDIxOFxcdTAxNUVcXHUyQzdFXFx1QTdBOFxcdUE3ODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NFxcdTI0QzlcXHVGRjM0XFx1MUU2QVxcdTAxNjRcXHUxRTZDXFx1MDIxQVxcdTAxNjJcXHUxRTcwXFx1MUU2RVxcdTAxNjZcXHUwMUFDXFx1MDFBRVxcdTAyM0VcXHVBNzg2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJUWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJVXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNTVcXHUyNENBXFx1RkYzNVxcdTAwRDlcXHUwMERBXFx1MDBEQlxcdTAxNjhcXHUxRTc4XFx1MDE2QVxcdTFFN0FcXHUwMTZDXFx1MDBEQ1xcdTAxREJcXHUwMUQ3XFx1MDFENVxcdTAxRDlcXHUxRUU2XFx1MDE2RVxcdTAxNzBcXHUwMUQzXFx1MDIxNFxcdTAyMTZcXHUwMUFGXFx1MUVFQVxcdTFFRThcXHUxRUVFXFx1MUVFQ1xcdTFFRjBcXHUxRUU0XFx1MUU3MlxcdTAxNzJcXHUxRTc2XFx1MUU3NFxcdTAyNDRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1NlxcdTI0Q0JcXHVGRjM2XFx1MUU3Q1xcdTFFN0VcXHUwMUIyXFx1QTc1RVxcdTAyNDVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlZZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIldcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1N1xcdTI0Q0NcXHVGRjM3XFx1MUU4MFxcdTFFODJcXHUwMTc0XFx1MUU4NlxcdTFFODRcXHUxRTg4XFx1MkM3Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU4XFx1MjRDRFxcdUZGMzhcXHUxRThBXFx1MUU4Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU5XFx1MjRDRVxcdUZGMzlcXHUxRUYyXFx1MDBERFxcdTAxNzZcXHUxRUY4XFx1MDIzMlxcdTFFOEVcXHUwMTc4XFx1MUVGNlxcdTFFRjRcXHUwMUIzXFx1MDI0RVxcdTFFRkVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA1QVxcdTI0Q0ZcXHVGRjNBXFx1MDE3OVxcdTFFOTBcXHUwMTdCXFx1MDE3RFxcdTFFOTJcXHUxRTk0XFx1MDFCNVxcdTAyMjRcXHUyQzdGXFx1MkM2QlxcdUE3NjJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2MVxcdTI0RDBcXHVGRjQxXFx1MUU5QVxcdTAwRTBcXHUwMEUxXFx1MDBFMlxcdTFFQTdcXHUxRUE1XFx1MUVBQlxcdTFFQTlcXHUwMEUzXFx1MDEwMVxcdTAxMDNcXHUxRUIxXFx1MUVBRlxcdTFFQjVcXHUxRUIzXFx1MDIyN1xcdTAxRTFcXHUwMEU0XFx1MDFERlxcdTFFQTNcXHUwMEU1XFx1MDFGQlxcdTAxQ0VcXHUwMjAxXFx1MDIwM1xcdTFFQTFcXHUxRUFEXFx1MUVCN1xcdTFFMDFcXHUwMTA1XFx1MkM2NVxcdTAyNTBdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFhXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImFlXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwRTZcXHUwMUZEXFx1MDFFM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYW9cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczN10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczOVxcdUE3M0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImF5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3M0RdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImJcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2MlxcdTI0RDFcXHVGRjQyXFx1MUUwM1xcdTFFMDVcXHUxRTA3XFx1MDE4MFxcdTAxODNcXHUwMjUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJjXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjNcXHUyNEQyXFx1RkY0M1xcdTAxMDdcXHUwMTA5XFx1MDEwQlxcdTAxMERcXHUwMEU3XFx1MUUwOVxcdTAxODhcXHUwMjNDXFx1QTczRlxcdTIxODRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NFxcdTI0RDNcXHVGRjQ0XFx1MUUwQlxcdTAxMEZcXHUxRTBEXFx1MUUxMVxcdTFFMTNcXHUxRTBGXFx1MDExMVxcdTAxOENcXHUwMjU2XFx1MDI1N1xcdUE3N0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImR6XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxRjNcXHUwMUM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJlXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNjVcXHUyNEQ0XFx1RkY0NVxcdTAwRThcXHUwMEU5XFx1MDBFQVxcdTFFQzFcXHUxRUJGXFx1MUVDNVxcdTFFQzNcXHUxRUJEXFx1MDExM1xcdTFFMTVcXHUxRTE3XFx1MDExNVxcdTAxMTdcXHUwMEVCXFx1MUVCQlxcdTAxMUJcXHUwMjA1XFx1MDIwN1xcdTFFQjlcXHUxRUM3XFx1MDIyOVxcdTFFMURcXHUwMTE5XFx1MUUxOVxcdTFFMUJcXHUwMjQ3XFx1MDI1QlxcdTAxRERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2NlxcdTI0RDVcXHVGRjQ2XFx1MUUxRlxcdTAxOTJcXHVBNzdDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJnXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjdcXHUyNEQ2XFx1RkY0N1xcdTAxRjVcXHUwMTFEXFx1MUUyMVxcdTAxMUZcXHUwMTIxXFx1MDFFN1xcdTAxMjNcXHUwMUU1XFx1MDI2MFxcdUE3QTFcXHUxRDc5XFx1QTc3Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY4XFx1MjREN1xcdUZGNDhcXHUwMTI1XFx1MUUyM1xcdTFFMjdcXHUwMjFGXFx1MUUyNVxcdTFFMjlcXHUxRTJCXFx1MUU5NlxcdTAxMjdcXHUyQzY4XFx1MkM3NlxcdTAyNjVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImh2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxOTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImlcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2OVxcdTI0RDhcXHVGRjQ5XFx1MDBFQ1xcdTAwRURcXHUwMEVFXFx1MDEyOVxcdTAxMkJcXHUwMTJEXFx1MDBFRlxcdTFFMkZcXHUxRUM5XFx1MDFEMFxcdTAyMDlcXHUwMjBCXFx1MUVDQlxcdTAxMkZcXHUxRTJEXFx1MDI2OFxcdTAxMzFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QVxcdTI0RDlcXHVGRjRBXFx1MDEzNVxcdTAxRjBcXHUwMjQ5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJrXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNkJcXHUyNERBXFx1RkY0QlxcdTFFMzFcXHUwMUU5XFx1MUUzM1xcdTAxMzdcXHUxRTM1XFx1MDE5OVxcdTJDNkFcXHVBNzQxXFx1QTc0M1xcdUE3NDVcXHVBN0EzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJsXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNkNcXHUyNERCXFx1RkY0Q1xcdTAxNDBcXHUwMTNBXFx1MDEzRVxcdTFFMzdcXHUxRTM5XFx1MDEzQ1xcdTFFM0RcXHUxRTNCXFx1MDE3RlxcdTAxNDJcXHUwMTlBXFx1MDI2QlxcdTJDNjFcXHVBNzQ5XFx1QTc4MVxcdUE3NDddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxqXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQzldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm1cIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2RFxcdTI0RENcXHVGRjREXFx1MUUzRlxcdTFFNDFcXHUxRTQzXFx1MDI3MVxcdTAyNkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RVxcdTI0RERcXHVGRjRFXFx1MDFGOVxcdTAxNDRcXHUwMEYxXFx1MUU0NVxcdTAxNDhcXHUxRTQ3XFx1MDE0NlxcdTFFNEJcXHUxRTQ5XFx1MDE5RVxcdTAyNzJcXHUwMTQ5XFx1QTc5MVxcdUE3QTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIm9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2RlxcdTI0REVcXHVGRjRGXFx1MDBGMlxcdTAwRjNcXHUwMEY0XFx1MUVEM1xcdTFFRDFcXHUxRUQ3XFx1MUVENVxcdTAwRjVcXHUxRTREXFx1MDIyRFxcdTFFNEZcXHUwMTREXFx1MUU1MVxcdTFFNTNcXHUwMTRGXFx1MDIyRlxcdTAyMzFcXHUwMEY2XFx1MDIyQlxcdTFFQ0ZcXHUwMTUxXFx1MDFEMlxcdTAyMERcXHUwMjBGXFx1MDFBMVxcdTFFRERcXHUxRURCXFx1MUVFMVxcdTFFREZcXHUxRUUzXFx1MUVDRFxcdTFFRDlcXHUwMUVCXFx1MDFFRFxcdTAwRjhcXHUwMUZGXFx1MDI1NFxcdUE3NEJcXHVBNzREXFx1MDI3NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib2lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib3VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib29cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwicFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDcwXFx1MjRERlxcdUZGNTBcXHUxRTU1XFx1MUU1N1xcdTAxQTVcXHUxRDdEXFx1QTc1MVxcdUE3NTNcXHVBNzU1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJxXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzFcXHUyNEUwXFx1RkY1MVxcdTAyNEJcXHVBNzU3XFx1QTc1OV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiclwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDcyXFx1MjRFMVxcdUZGNTJcXHUwMTU1XFx1MUU1OVxcdTAxNTlcXHUwMjExXFx1MDIxM1xcdTFFNUJcXHUxRTVEXFx1MDE1N1xcdTFFNUZcXHUwMjREXFx1MDI3RFxcdUE3NUJcXHVBN0E3XFx1QTc4M10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwic1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDczXFx1MjRFMlxcdUZGNTNcXHUwMERGXFx1MDE1QlxcdTFFNjVcXHUwMTVEXFx1MUU2MVxcdTAxNjFcXHUxRTY3XFx1MUU2M1xcdTFFNjlcXHUwMjE5XFx1MDE1RlxcdTAyM0ZcXHVBN0E5XFx1QTc4NVxcdTFFOUJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInRcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NFxcdTI0RTNcXHVGRjU0XFx1MUU2QlxcdTFFOTdcXHUwMTY1XFx1MUU2RFxcdTAyMUJcXHUwMTYzXFx1MUU3MVxcdTFFNkZcXHUwMTY3XFx1MDFBRFxcdTAyODhcXHUyQzY2XFx1QTc4N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTcyOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDc1XFx1MjRFNFxcdUZGNTVcXHUwMEY5XFx1MDBGQVxcdTAwRkJcXHUwMTY5XFx1MUU3OVxcdTAxNkJcXHUxRTdCXFx1MDE2RFxcdTAwRkNcXHUwMURDXFx1MDFEOFxcdTAxRDZcXHUwMURBXFx1MUVFN1xcdTAxNkZcXHUwMTcxXFx1MDFENFxcdTAyMTVcXHUwMjE3XFx1MDFCMFxcdTFFRUJcXHUxRUU5XFx1MUVFRlxcdTFFRURcXHUxRUYxXFx1MUVFNVxcdTFFNzNcXHUwMTczXFx1MUU3N1xcdTFFNzVcXHUwMjg5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzZcXHUyNEU1XFx1RkY1NlxcdTFFN0RcXHUxRTdGXFx1MDI4QlxcdUE3NUZcXHUwMjhDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ2eVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzYxXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ3XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzdcXHUyNEU2XFx1RkY1N1xcdTFFODFcXHUxRTgzXFx1MDE3NVxcdTFFODdcXHUxRTg1XFx1MUU5OFxcdTFFODlcXHUyQzczXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ4XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzhcXHUyNEU3XFx1RkY1OFxcdTFFOEJcXHUxRThEXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzlcXHUyNEU4XFx1RkY1OVxcdTFFRjNcXHUwMEZEXFx1MDE3N1xcdTFFRjlcXHUwMjMzXFx1MUU4RlxcdTAwRkZcXHUxRUY3XFx1MUU5OVxcdTFFRjVcXHUwMUI0XFx1MDI0RlxcdTFFRkZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3QVxcdTI0RTlcXHVGRjVBXFx1MDE3QVxcdTFFOTFcXHUwMTdDXFx1MDE3RVxcdTFFOTNcXHUxRTk1XFx1MDFCNlxcdTAyMjVcXHUwMjQwXFx1MkM2Q1xcdUE3NjNdL2csXHJcbiAgfSxcclxuXTtcclxuY29uc3QgZG9tYWlucyA9IFtcclxuICBcIi5jb21cIixcclxuICBcIi5vcmdcIixcclxuICBcIi5uZXRcIixcclxuICBcIi5hY1wiLFxyXG4gIFwiLmFkXCIsXHJcbiAgXCIuYWVcIixcclxuICBcIi5hZlwiLFxyXG4gIFwiLmFnXCIsXHJcbiAgXCIuYWlcIixcclxuICBcIi5hbFwiLFxyXG4gIFwiLmFtXCIsXHJcbiAgXCIuYW9cIixcclxuICBcIi5hcVwiLFxyXG4gIFwiLmFyXCIsXHJcbiAgXCIuYXNcIixcclxuICBcIi5hdFwiLFxyXG4gIFwiLmF1XCIsXHJcbiAgXCIuYXdcIixcclxuICBcIi5heFwiLFxyXG4gIFwiLmF6XCIsXHJcbiAgXCIuYmFcIixcclxuICBcIi5iYlwiLFxyXG4gIFwiLmJkXCIsXHJcbiAgXCIuYmVcIixcclxuICBcIi5iZlwiLFxyXG4gIFwiLmJnXCIsXHJcbiAgXCIuYmhcIixcclxuICBcIi5iaVwiLFxyXG4gIFwiLmJqXCIsXHJcbiAgXCIuYm1cIixcclxuICBcIi5iblwiLFxyXG4gIFwiLmJvXCIsXHJcbiAgXCIuYnFcIixcclxuICBcIi5iclwiLFxyXG4gIFwiLmJzXCIsXHJcbiAgXCIuYnRcIixcclxuICBcIi5id1wiLFxyXG4gIFwiLmJ5XCIsXHJcbiAgXCIuYnpcIixcclxuICBcIi5jYVwiLFxyXG4gIFwiLmNjXCIsXHJcbiAgXCIuY2RcIixcclxuICBcIi5jZlwiLFxyXG4gIFwiLmNnXCIsXHJcbiAgXCIuY2hcIixcclxuICBcIi5jaVwiLFxyXG4gIFwiLmNrXCIsXHJcbiAgXCIuY2xcIixcclxuICBcIi5jbVwiLFxyXG4gIFwiLmNuXCIsXHJcbiAgXCIuY29cIixcclxuICBcIi5jclwiLFxyXG4gIFwiLmN1XCIsXHJcbiAgXCIuY3ZcIixcclxuICBcIi5jd1wiLFxyXG4gIFwiLmN4XCIsXHJcbiAgXCIuY3lcIixcclxuICBcIi5jelwiLFxyXG4gIFwiLmRlXCIsXHJcbiAgXCIuZGpcIixcclxuICBcIi5ka1wiLFxyXG4gIFwiLmRtXCIsXHJcbiAgXCIuZG9cIixcclxuICBcIi5kelwiLFxyXG4gIFwiLmVjXCIsXHJcbiAgXCIuZWVcIixcclxuICBcIi5lZ1wiLFxyXG4gIFwiLmVoXCIsXHJcbiAgXCIuZXJcIixcclxuICBcIi5lc1wiLFxyXG4gIFwiLmV0XCIsXHJcbiAgXCIuZXVcIixcclxuICBcIi5maVwiLFxyXG4gIFwiLmZqXCIsXHJcbiAgXCIuZmtcIixcclxuICBcIi5mbVwiLFxyXG4gIFwiLmZvXCIsXHJcbiAgXCIuZnJcIixcclxuICBcIi5nYVwiLFxyXG4gIFwiLmdkXCIsXHJcbiAgXCIuZ2VcIixcclxuICBcIi5nZlwiLFxyXG4gIFwiLmdnXCIsXHJcbiAgXCIuZ2hcIixcclxuICBcIi5naVwiLFxyXG4gIFwiLmdsXCIsXHJcbiAgXCIuZ21cIixcclxuICBcIi5nblwiLFxyXG4gIFwiLmdwXCIsXHJcbiAgXCIuZ3FcIixcclxuICBcIi5nclwiLFxyXG4gIFwiLmdzXCIsXHJcbiAgXCIuZ3RcIixcclxuICBcIi5ndVwiLFxyXG4gIFwiLmd3XCIsXHJcbiAgXCIuZ3lcIixcclxuICBcIi5oa1wiLFxyXG4gIFwiLmhtXCIsXHJcbiAgXCIuaG5cIixcclxuICBcIi5oclwiLFxyXG4gIFwiLmh0XCIsXHJcbiAgXCIuaHVcIixcclxuICBcIi5pZFwiLFxyXG4gIFwiLmllXCIsXHJcbiAgXCIuaWxcIixcclxuICBcIi5pbVwiLFxyXG4gIFwiLmluXCIsXHJcbiAgXCIuaW9cIixcclxuICBcIi5pcVwiLFxyXG4gIFwiLmlyXCIsXHJcbiAgXCIuaXNcIixcclxuICBcIi5pdFwiLFxyXG4gIFwiLmplXCIsXHJcbiAgXCIuam1cIixcclxuICBcIi5qb1wiLFxyXG4gIFwiLmpwXCIsXHJcbiAgXCIua2VcIixcclxuICBcIi5rZ1wiLFxyXG4gIFwiLmtoXCIsXHJcbiAgXCIua2lcIixcclxuICBcIi5rbVwiLFxyXG4gIFwiLmtuXCIsXHJcbiAgXCIua3BcIixcclxuICBcIi5rclwiLFxyXG4gIFwiLmt3XCIsXHJcbiAgXCIua3lcIixcclxuICBcIi5relwiLFxyXG4gIFwiLmxhXCIsXHJcbiAgXCIubGJcIixcclxuICBcIi5sY1wiLFxyXG4gIFwiLmxpXCIsXHJcbiAgXCIubGtcIixcclxuICBcIi5sclwiLFxyXG4gIFwiLmxzXCIsXHJcbiAgXCIubHRcIixcclxuICBcIi5sdVwiLFxyXG4gIFwiLmx2XCIsXHJcbiAgXCIubHlcIixcclxuICBcIi5tYVwiLFxyXG4gIFwiLm1jXCIsXHJcbiAgXCIubWRcIixcclxuICBcIi5tZVwiLFxyXG4gIFwiLm1nXCIsXHJcbiAgXCIubWhcIixcclxuICBcIi5ta1wiLFxyXG4gIFwiLm1sXCIsXHJcbiAgXCIubW1cIixcclxuICBcIi5tblwiLFxyXG4gIFwiLm1vXCIsXHJcbiAgXCIubXBcIixcclxuICBcIi5tcVwiLFxyXG4gIFwiLm1yXCIsXHJcbiAgXCIubXNcIixcclxuICBcIi5tdFwiLFxyXG4gIFwiLm11XCIsXHJcbiAgXCIubXZcIixcclxuICBcIi5td1wiLFxyXG4gIFwiLm14XCIsXHJcbiAgXCIubXlcIixcclxuICBcIi5telwiLFxyXG4gIFwiLm5hXCIsXHJcbiAgXCIubmNcIixcclxuICBcIi5uZVwiLFxyXG4gIFwiLm5mXCIsXHJcbiAgXCIubmdcIixcclxuICBcIi5uaVwiLFxyXG4gIFwiLm5sXCIsXHJcbiAgXCIubm9cIixcclxuICBcIi5ucFwiLFxyXG4gIFwiLm5yXCIsXHJcbiAgXCIubnVcIixcclxuICBcIi5uelwiLFxyXG4gIFwiLm9tXCIsXHJcbiAgXCIucGFcIixcclxuICBcIi5wZVwiLFxyXG4gIFwiLnBmXCIsXHJcbiAgXCIucGdcIixcclxuICBcIi5waFwiLFxyXG4gIFwiLnBrXCIsXHJcbiAgXCIucGxcIixcclxuICBcIi5wbVwiLFxyXG4gIFwiLnBuXCIsXHJcbiAgXCIucHJcIixcclxuICBcIi5wc1wiLFxyXG4gIFwiLnB0XCIsXHJcbiAgXCIucHdcIixcclxuICBcIi5weVwiLFxyXG4gIFwiLnFhXCIsXHJcbiAgXCIucmVcIixcclxuICBcIi5yb1wiLFxyXG4gIFwiLnJzXCIsXHJcbiAgXCIucnVcIixcclxuICBcIi5yd1wiLFxyXG4gIFwiLnNhXCIsXHJcbiAgXCIuc2JcIixcclxuICBcIi5zY1wiLFxyXG4gIFwiLnNkXCIsXHJcbiAgXCIuc2VcIixcclxuICBcIi5zZ1wiLFxyXG4gIFwiLnNoXCIsXHJcbiAgXCIuc2lcIixcclxuICBcIi5za1wiLFxyXG4gIFwiLnNsXCIsXHJcbiAgXCIuc21cIixcclxuICBcIi5zblwiLFxyXG4gIFwiLnNvXCIsXHJcbiAgXCIuc3JcIixcclxuICBcIi5zc1wiLFxyXG4gIFwiLnN0XCIsXHJcbiAgXCIuc3VcIixcclxuICBcIi5zdlwiLFxyXG4gIFwiLnN4XCIsXHJcbiAgXCIuc3lcIixcclxuICBcIi5zelwiLFxyXG4gIFwiLnRjXCIsXHJcbiAgXCIudGRcIixcclxuICBcIi50ZlwiLFxyXG4gIFwiLnRnXCIsXHJcbiAgXCIudGhcIixcclxuICBcIi50alwiLFxyXG4gIFwiLnRrXCIsXHJcbiAgXCIudGxcIixcclxuICBcIi50bVwiLFxyXG4gIFwiLnRuXCIsXHJcbiAgXCIudG9cIixcclxuICBcIi50clwiLFxyXG4gIFwiLnR0XCIsXHJcbiAgXCIudHZcIixcclxuICBcIi50d1wiLFxyXG4gIFwiLnR6XCIsXHJcbiAgXCIudWFcIixcclxuICBcIi51Z1wiLFxyXG4gIFwiLnVrXCIsXHJcbiAgXCIudXNcIixcclxuICBcIi51eVwiLFxyXG4gIFwiLnV6XCIsXHJcbiAgXCIudmFcIixcclxuICBcIi52Y1wiLFxyXG4gIFwiLnZlXCIsXHJcbiAgXCIudmdcIixcclxuICBcIi52aVwiLFxyXG4gIFwiLnZuXCIsXHJcbiAgXCIudnVcIixcclxuICBcIi53ZlwiLFxyXG4gIFwiLndzXCIsXHJcbiAgXCIueWVcIixcclxuICBcIi55dFwiLFxyXG4gIFwiLnphXCIsXHJcbiAgXCIuem1cIixcclxuICBcIi56d1wiLFxyXG5dO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlRGlhY3JpdGljc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAucmVkdWNlKChyZXN1bHQsIGxldHRlcikgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzdWx0LnJlcGxhY2UobGV0dGVyLmxldHRlcnMsIGxldHRlci5iYXNlKTtcclxuICAgIH0sIHRoaXMpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgU1BFQ0lBTF9DSEFSQUNURVJTID0gXCJcXFxcXFxcXC8gIT9AIyQlXiYqKClfKzoue30sO1xcXFwtJ2Bg4oCZ4oCYXFxcIuKAlFwiO1xyXG5jb25zdCBWT1dFTFMgPSBcImFlaW91QUVJT1XDoMOow6zDssO5w4DDiMOMw5LDmcOhw6nDrcOzw7rDvcOBw4nDjcOTw5rDncOiw6rDrsO0w7vDgsOKw47DlMObw6PDscO1w4PDkcOVw6TDq8Ovw7bDvMO/w4TDi8OPw5bDnMW4w6fDh8Ofw5jDuMOFw6XDhsOmxZNcIjtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZShuZXcgUmVnRXhwKGBbJHtTUEVDSUFMX0NIQVJBQ1RFUlN9XWAsIFwiZ2lcIiksIFwiXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlQWxsQnV0TGV0dGVyc1wiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvTG93ZXJDYXNlKCkucmVtb3ZlRGlhY3JpdGljcygpLnJlbW92ZVNwZWNpYWxDaGFyYWN0ZXJzKCk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjb25jZWFsXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGV4dHJhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFteJHtTUEVDSUFMX0NIQVJBQ1RFUlN9JHtleHRyYX1dYCwgXCJnaVwiKSwgXCLigY5cIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjb25jZWFsTWlkZGxlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGV4dHJhKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sZW5ndGggPCAzID8gdGhpcyA6IHRoaXNbMF0gKyB0aGlzLnN1YnN0cmluZygxLCB0aGlzLmxlbmd0aCAtIDEpLmNvbmNlYWwoZXh0cmEpICsgdGhpc1t0aGlzLmxlbmd0aCAtIDFdO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwiY2FwaXRhbGl6ZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGhpcy5zbGljZSgxKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlbW92ZUhUTUxcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKFwiPlwiLCBcIlxcdTIyN0JcIikucmVwbGFjZShcIjxcIiwgXCJcXHUyMjdBXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicGFyc2VTeW1ib2xzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZUFsbChcIiZcIiwgXCImYW1wO1wiKS5yZXBsYWNlKFwiPFwiLCBcIiZsdDtcIikucmVwbGFjZShcIj5cIiwgXCImZ3Q7XCIpLnJlcGxhY2VBbGwoXCIjXCIsIFwiJm51bTtcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZXBsYWNlQXJyYXlcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZmluZCwgcmVwbGFjZSkge1xyXG4gICAgdmFyIHJlcGxhY2VTdHJpbmcgPSB0aGlzO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaW5kLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHJlcGxhY2VTdHJpbmcgPSByZXBsYWNlU3RyaW5nLnJlcGxhY2UoZmluZFtpXSwgcmVwbGFjZVtpXSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVwbGFjZVN0cmluZztcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcIm1hc2tVUkxzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZUFycmF5KFtcImh0dHBzOi8vXCIsIFwiaHR0cDovL1wiXSwgXCJub3BlOi8vXCIpLnJlcGxhY2VBcnJheShkb21haW5zLCBcIi5ub3BlXCIpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KE51bWJlci5wcm90b3R5cGUsIFwibWFrZVJlYWRhYmxlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJtYWtlUGVyY2VudGFnZVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChkZWNpbWFscykge1xyXG4gICAgaWYgKGRlY2ltYWxzID09PSB1bmRlZmluZWQpIGRlY2ltYWxzID0gMjtcclxuICAgIHJldHVybiBgJHsodGhpcyAqIDEwMCkudG9GaXhlZChkZWNpbWFscyl9JWA7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBzb3J0T2JqZWN0ID0gKG9iaiwgZGlyZWN0aW9uKSA9PiB7XHJcbiAgbGV0IGFyciA9IFtdO1xyXG4gIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgYXJyLnB1c2goW2tleSwgb2JqW2tleV1dKTtcclxuICB9XHJcbiAgYXJyLnNvcnQoKGEsIGIpID0+IChkaXJlY3Rpb24gPyBhWzFdIC0gYlsxXSA6IGJbMV0gLSBhWzFdKSk7XHJcbiAgbGV0IG9ialNvcnRlZCA9IHt9O1xyXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiAob2JqU29ydGVkW2l0ZW1bMF1dID0gaXRlbVsxXSkpO1xyXG4gIC8vYXJyLnNvcnQoZnVuY3Rpb24oYSwgYikgeyBhLnZhbHVlLnRvTG93ZXJDYXNlKCkubG9jYWxlQ29tcGFyZShiLnZhbHVlLnRvTG93ZXJDYXNlKCkpOyB9KTsgLy91c2UgdGhpcyB0byBzb3J0IGFzIHN0cmluZ3NcclxuICByZXR1cm4gb2JqU29ydGVkOyAvLyByZXR1cm5zIGFycmF5XHJcbn07XHJcbiIsIi8qXHJcbiQgPSBqUXVlcnkgPSByZXF1aXJlKCdqcXVlcnknKTtcclxudmFyIGJvb3RzdHJhcCA9IHJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxudmFyIGFuZ3VsYXJTYW5pdGl6ZSA9IHJlcXVpcmUoJ2FuZ3VsYXItc2FuaXRpemUnKTtcclxudmFyIGFuZ3VsYXJBbmltYXRlID0gcmVxdWlyZSgnYW5ndWxhci1hbmltYXRlJyk7XHJcbiovXHJcbmFuZ3VsYXIubW9kdWxlKFwiYXBwXCIsIFtcclxuICBcInVpLnJvdXRlclwiLFxyXG4gIFwidWkuYm9vdHN0cmFwXCIsXHJcbiAgXCJuZ0FuaW1hdGVcIixcclxuICBcIm5nU2FuaXRpemVcIixcclxuICBcIm5nTWF0ZXJpYWxcIixcclxuICBcIm5nTWVzc2FnZXNcIixcclxuICBcIm5nRHJhZ0Ryb3BcIixcclxuICBcIm5nVGFnc0lucHV0XCIsXHJcbiAgXCJ2Y1JlY2FwdGNoYVwiLFxyXG4gIFwiY2hhcnQuanNcIixcclxuICBcInRjLmNoYXJ0anNcIixcclxuICBcImluZmluaXRlLXNjcm9sbFwiLFxyXG5dKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkdXJsU2VydmljZVByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xyXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvaG9tZVwiKTtcclxuICAkdXJsU2VydmljZVByb3ZpZGVyLmNvbmZpZy5zdHJpY3RNb2RlKGZhbHNlKTtcclxuXHJcbiAgJHN0YXRlUHJvdmlkZXJcclxuICAgIC5zdGF0ZShcImhvbWVcIiwge1xyXG4gICAgICB1cmw6IFwiL2hvbWVcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2hvbWUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInBvbGljeVwiLCB7XHJcbiAgICAgIHVybDogXCIvcG9saWN5XCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wb2xpY3kuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInByaW50XCIsIHtcclxuICAgICAgdXJsOiBcIi9wcmludFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcHJpbnQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImV4cGVyaWVuY2VcIiwge1xyXG4gICAgICB1cmw6IFwiL2V4cGVyaWVuY2VcIixcclxuICAgICAgY29udHJvbGxlcjogXCJFeHBlcmllbmNlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvZXhwZXJpZW5jZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwic2tpbGxzXCIsIHtcclxuICAgICAgdXJsOiBcIi9za2lsbHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJTa2lsbHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9za2lsbHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImhvYmJpZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2hvYmJpZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJIb2JiaWVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvaG9iYmllcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiY29udGFjdFwiLCB7XHJcbiAgICAgIHVybDogXCIvY29udGFjdFwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkNvbnRhY3RDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9jb250YWN0Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ3b3Jrb3V0XCIsIHtcclxuICAgICAgdXJsOiBcIi93b3Jrb3V0XCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiV29ya291dEN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3dvcmtvdXQuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInBvc3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9wb3N0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlBvc3RzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcG9zdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInByb2ZpbGVcIiwge1xyXG4gICAgICB1cmw6IFwiL3Byb2ZpbGVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJQcm9maWxlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvcHJvZmlsZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibGlzdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2xpc3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiTGlzdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImxpc3RzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJidWJibGVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9idWJibGVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQnViYmxlc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiYnViYmxlcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiYXN0ZXJvaWRzXCIsIHtcclxuICAgICAgdXJsOiBcIi9hc3Rlcm9pZHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJBc3Rlcm9pZHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImFzdGVyb2lkcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwibGVtbWluZ3NcIiwge1xyXG4gICAgICB1cmw6IFwiL2xlbW1pbmdzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiTGVtbWluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcImxlbW1pbmdzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJib3RzXCIsIHtcclxuICAgICAgdXJsOiBcIi9ib3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5nc1wiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1hZG1pblwiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLWFkbWluXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzQWRtaW5DdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1hZG1pbi5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLWdhbWVcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy86Z2FtZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc0dhbWVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1nYW1lLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3Mtc3RhdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy1zdGF0c1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc1N0YXRzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW50aGluZ3Mtc3RhdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1wbGF5XCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3MvcGxheVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlRlblRoaW5nc1BsYXlDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1wbGF5Lmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWdvb2dsZVwiLCB7XHJcbiAgICAgIHVybDogXCIvZ29vZ2xlXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekdvb2dsZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9nb29nbGUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotbG9nb3NcIiwge1xyXG4gICAgICB1cmw6IFwiL2xvZ29zXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpekxvZ29zQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL2xvZ29zLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LWFuaW1hbHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2FuaW1hbHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6QW5pbWFsc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9hbmltYWxzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJxdWl6LXNrZWxldG9uc1wiLCB7XHJcbiAgICAgIHVybDogXCIvc2tlbGV0b25zXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUXVpelNrZWxldG9uc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwicXVpenplcy9za2VsZXRvbnMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotbW92aWVzXCIsIHtcclxuICAgICAgdXJsOiBcIi9tb3ZpZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6TW92aWVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL21vdmllcy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiY2hhcmFkZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2NoYXJhZGVzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQ2hhcmFkZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9jaGFyYWRlcy5odG1sXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHtcclxuICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICByZXF1aXJlQmFzZTogZmFsc2UsXHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ1dlYlNvY2tldFN2YycsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkdGltZW91dCkge1xyXG4gIGZ1bmN0aW9uIHdlYnNvY2tldEhvc3QoKSB7XHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6Jykge1xyXG4gICAgICByZXR1cm4gXCJ3c3M6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIFwid3M6Ly9cIiArIHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGNvbm5lY3Rpb247XHJcbiAgdmFyIGNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25uZWN0aW9uID0gbmV3IFdlYlNvY2tldCh3ZWJzb2NrZXRIb3N0KCkpO1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25vcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnV2Vic29ja2V0IGNvbm5lY3RlZCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9uY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygnV2Vic29ja2V0IGNsb3NlZC4gUmVjb25uZWN0aW5nLi4uJyk7XHJcbiAgICAgICR0aW1lb3V0KGNvbm5lY3QsIDEwMDApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbihlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZSArIFwiIC0gU3RhdGU6IFwiICsgY29ubmVjdGlvbi5yZWFkeVN0YXRlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgcGF5bG9hZCA9IEpTT04ucGFyc2UoZS5kYXRhKTtcclxuICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCd3czonICsgcGF5bG9hZC50b3BpYywgcGF5bG9hZC5kYXRhKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5zZW5kID0gZnVuY3Rpb24gKHRvcGljLCBkYXRhKSB7XHJcbiAgICB2YXIganNvbiA9IEpTT04uc3RyaW5naWZ5KHt0b3BpYzogdG9waWMsIGRhdGE6IGRhdGF9KTtcclxuICAgIGNvbm5lY3Rpb24uc2VuZChqc29uKTtcclxuICB9O1xyXG5cclxuICB0aGlzLmNvbm5lY3QgPSBjb25uZWN0O1xyXG5cclxufSkucnVuKGZ1bmN0aW9uIChXZWJTb2NrZXRTdmMpIHtcclxuICBXZWJTb2NrZXRTdmMuY29ubmVjdCgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkFwcEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgTGFuZ3VhZ2VTdmMsIFVzZXJTdmMsICRtZFRvYXN0KSB7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIiVjWW91IHNuZWFreSBidWdnZXIhXCIsXHJcbiAgICBcImZvbnQ6IDJlbSBzYW5zLXNlcmlmOyBjb2xvcjogRG9kZ2VyQmx1ZTsgdGV4dC1zaGFkb3c6IDJweCAwIDAgIzQ0NCwgLTJweCAwIDAgIzQ0NCwgMCAycHggMCAjNDQ0LCAwIC0ycHggMCAjNDQ0LCAxcHggMXB4ICM0NDQsIC0xcHggLTFweCAwICM0NDQsIDFweCAtMXB4IDAgIzQ0NCwgLTFweCAxcHggMCAjNDQ0O1wiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIkknbSBnbGFkIHlvdSdyZSBjdXJpb3VzIHdoZXRoZXIgc29tZXRoaW5nIGlzIHBvcHBpbmcgdXAgaW4gaGVyZS4gSSdtIGEgYml0IG9mIGEgc3RpY2tsZXIgd2hlbiBpdCBjb21lcyB0byBtZXNzYWdlcyBpbiB0aGUgY29uc29sZSBzbyBJIHRyeSB0byBtYWtlIHN1cmUgb25seSB0aGluZ3MgSSB3YW50IGFyZSB2aXNpYmxlLiBUaGF0IGJlaW5nIHNhaWQsIGlmIHRoZXJlIGlzIGEgYmlnIGVycm9yIGhlcmUsIEkgd291bGQgcmVhbGx5IGFwcHJlY2lhdGUgeW91IHRlbGxpbmcgbWUgc28gSSBjYW4gZ2V0IHJpZCBvZiBpdCFcIixcclxuICApO1xyXG4gIGNvbnNvbGUubG9nKFxyXG4gICAgXCJUaGUgY29kZSBmb3IgbXkgcmVzdW1lIGlzIGhvc3RlZCBvbiBHaXRodWIgaWYgeW91IHJlYWxseSB3YW50IHRvIGdvIGludG8gYWxsIHRoaXMhID0+IGh0dHBzOi8vZ2l0aHViLmNvbS9GbGFuZGVyc0J1cmdlci9yZXN1bWVcIixcclxuICApO1xyXG5cclxuICAkc2NvcGUudG9hc3QgPSAobWVzc2FnZSkgPT4ge1xyXG4gICAgJG1kVG9hc3Quc2hvdyhcclxuICAgICAgJG1kVG9hc3RcclxuICAgICAgICAuc2ltcGxlKClcclxuICAgICAgICAucGFyZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdG9hc3RcIikpXHJcbiAgICAgICAgLnRleHRDb250ZW50KG1lc3NhZ2UpXHJcbiAgICAgICAgLnBvc2l0aW9uKFwidG9wIHJpZ2h0XCIpXHJcbiAgICAgICAgLmhpZGVEZWxheSgzMDAwKSxcclxuICAgICk7XHJcbiAgfTtcclxuICAvKlxyXG4gICAgJChkb2N1bWVudCkuYmluZChcImtleXVwIGtleWRvd25cIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGlmKGUuY3RybEtleSAmJiBlLmtleUNvZGUgPT0gODApe1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgICovXHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gICQod2luZG93KS5sb2FkKGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICQoXCIuY29udGVudFwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiLmNoZWNrYm94LW1lbnVcIikub24oXCJjaGFuZ2VcIiwgXCJpbnB1dFt0eXBlPSdjaGVja2JveCddXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykuY2xvc2VzdChcImxpXCIpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIsIHRoaXMuY2hlY2tlZCk7XHJcbiAgfSk7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuYWxsb3ctZm9jdXNcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS50aGVtZUNvdW50ZXIgPSA2O1xyXG4gICRzY29wZS50b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgJHNjb3BlLnllYXIgPSAkc2NvcGUudG9kYXkuZ2V0RnVsbFllYXIoKTtcclxuICAkc2NvcGUucmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMCk7XHJcblxyXG4gICRzY29wZS5mbGlwVGhlbWUgPSAoKSA9PiB7XHJcbiAgICAkKFwiLmxvYWRpbmdcIikuc2hvdygpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmhpZGUoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiLmxvYWRpbmdcIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICAgICQoXCIuY29udGVudFwiKS5mYWRlSW4oXCJzbG93XCIpO1xyXG4gICAgfSwgODAwKTtcclxuICAgICRzY29wZS50aGVtZUNvdW50ZXIgPSAkc2NvcGUudGhlbWVDb3VudGVyIDwgNiA/ICRzY29wZS50aGVtZUNvdW50ZXIgKyAxIDogKCRzY29wZS50aGVtZUNvdW50ZXIgPSAxKTtcclxuICB9O1xyXG5cclxuICAkLmdldEpTT04oXCIvc2tpbGxzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5za2lsbHMgPSBkYXRhLmZpbHRlcihmdW5jdGlvbiAoc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIHNraWxsLmVuYWJsZWQ7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2hvYmJpZXMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLmhvYmJpZXMgPSBkYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvZXhwZXJpZW5jZS5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuam9icyA9IGRhdGE7XHJcbiAgICAkc2NvcGUuam9icy5mb3JFYWNoKChqb2IpID0+IHtcclxuICAgICAgam9iLnN0YXJ0RGF0ZSA9IG5ldyBEYXRlKGpvYi5zdGFydERhdGUpO1xyXG4gICAgICBpZiAoam9iLmVuZERhdGUpIGpvYi5lbmREYXRlID0gbmV3IERhdGUoam9iLmVuZERhdGUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9jaGFyYWRlcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuY2hhcmFkZXMgPSBkYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZ2V0VGltZVNwYW4gPSAoam9iKSA9PiB7XHJcbiAgICByZXR1cm4gam9iLnN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpICsgKGpvYi5lbmREYXRlID8gXCIgLSBcIiArIGpvYi5lbmREYXRlLmdldEZ1bGxZZWFyKCkgOiBcIiAtIFRvZGF5XCIpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5sYW5ndWFnZXMgPSBMYW5ndWFnZVN2Yy5sYW5ndWFnZXM7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdExhbmd1YWdlID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IExhbmd1YWdlU3ZjLnNldExhbmd1YWdlKGxhbmd1YWdlKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuaG92ZXJkaXYgPSAoZSwgZGl2aWQpID0+IHtcclxuICAgIHZhciBsZWZ0ID0gZS5jbGllbnRYICsgXCJweFwiO1xyXG4gICAgdmFyIHRvcCA9IGUuY2xpZW50WSArIDIwICsgXCJweFwiO1xyXG5cclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZpZCk7XHJcblxyXG4gICAgJChcIiNcIiArIGRpdmlkKS5jc3MoXCJsZWZ0XCIsIGxlZnQpO1xyXG4gICAgJChcIiNcIiArIGRpdmlkKS5jc3MoXCJ0b3BcIiwgdG9wKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLnRvZ2dsZSgpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpIHtcclxuICAgIFVzZXJTdmMubG9naW4od2luZG93LmxvY2FsU3RvcmFnZS51c2VyKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBsb2dpbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLiRvbihcImxvZ2luXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICBsb2dpbih1c2VyKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xyXG4gICAgaWYgKCEkc2NvcGUubG9nZ2VkSW4pIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS51c2VyID0gdXNlci5faWQ7XHJcbiAgICAgICRzY29wZS5sb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAgICRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUgPSBuZXcgRGF0ZSgkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlKTtcclxuICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dpblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuJG9uKFwidXBkYXRlXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUpO1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgIH0sIDEwMDApO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKFwibG9hZGluZ1wiLCAoXywgdXNlcikgPT4ge1xyXG4gICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgJChcIiNsb2FkaW5nLWljb25cIikuc2hvdygpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKFwibG9hZGVkXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5sb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBmaXJlYmFzZVxyXG4gICAgICAuYXV0aCgpXHJcbiAgICAgIC5zaWduT3V0KClcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIFNpZ24tb3V0IHN1Y2Nlc3NmdWwuXHJcbiAgICAgICAgJHNjb3BlLmxvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICRzY29wZS4kYnJvYWRjYXN0KFwibG9nb3V0XCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgLy8gQW4gZXJyb3IgaGFwcGVuZWQuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5mb3JtYXREYXRlID0gKGRhdGUpID0+IHtcclxuICAgIGNvbnN0IG1vbnRocyA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcclxuICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgIHJldHVybiBkYXRlLmdldERhdGUoKSArIFwiLVwiICsgbW9udGhzW2RhdGUuZ2V0TW9udGgoKV0gKyBcIi1cIiArIGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkFzdGVyb2lkc0N0cmxcIiwgZnVuY3Rpb24gKCRsb2NhdGlvbiwgJHNjb3BlLCBHYW1lU3ZjKSB7XHJcbiAgJHNjb3BlLmFubm91bmNlID0gZmFsc2U7XHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF07XHJcbiAgaWYgKCFjYW52YXMpIHtcclxuICAgICRsb2NhdGlvbi5wYXRoKFwiL2hvbWVcIik7XHJcbiAgICByZXR1cm4gYWxlcnQoXCJcIik7XHJcbiAgfVxyXG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgaWYgKCFjdHgpIHtcclxuICAgIHJldHVybiAkbG9jYXRpb24ucGF0aChcIi9ob21lXCIpO1xyXG4gIH1cclxuICBjdHguZm9udCA9IFwiMzBweCBDb21pYyBTYW5zIE1TXCI7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgbGV0IHNob3RzID0ge307XHJcbiAgY29uc3QgYXN0ZXJvaWRzID0ge307XHJcbiAgY29uc3QgcG93ZXJ1cHMgPSB7fTtcclxuICBjb25zdCBleHBsb3Npb25zID0ge307XHJcbiAgY29uc3QgbWFwID0ge307XHJcbiAgY29uc3Qgc3BhY2VwaWNzID0gMTA7XHJcbiAgbGV0IHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICBjb25zdCBwb3dlcnVwVHlwZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwic3BlZWRcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIk1heCBTcGVlZCDih6dcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgICAgc2l6ZTogWzE0LCAzNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLm1heFNwZWVkICs9IDEwMDtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiY29vbGRvd25cIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIkNvb2xkb3duIOKHqVwiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogMyxcclxuICAgICAgICBzaXplOiBbMTcsIDE3XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLmNvb2xkb3duVGltZSAtPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwicmFuZ2VcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIkZpcmluZyBSYW5nZSDih6dcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA0LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzMwLCA4XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAucmFuZ2UgKz0gNTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwic2hpZWxkXCIsXHJcbiAgICAgIGFubm91bmNlbWVudDogXCJTaGllbGRcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiA1LFxyXG4gICAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgICAgc2l6ZTogWzE5LCAxOV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgc3BhY2VzaGlwLnNoaWVsZCA9IHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIm51a2VcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIk51a2VcIixcclxuICAgICAgY3ljbGU6IHtcclxuICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgICAgc2l6ZTogWzE1LCAxNV0sXHJcbiAgICAgICAgaTogMCxcclxuICAgICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGltZzogbmV3IEltYWdlKCksXHJcbiAgICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoc3BhY2VzaGlwKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICAgIGFzdGVyb2lkc1tpXS5leHBsb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYXduQXN0ZXJvaWRzKDUpO1xyXG4gICAgICB9LFxyXG4gICAgfSAvKlxyXG4gICAgJ3NpZGVfY2Fubm9ucycsXHJcbiAgICAnbGFzZXInLFxyXG4gICAgJ3NoaWVsZCcsXHJcbiAgICAnbGlmZScsXHJcbiAgICAnbWlzc2lsZXMnLFxyXG4gICAgJ251a2UnXHJcbiAgICAqLyxcclxuICBdO1xyXG4gIHBvd2VydXBUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChwb3dlcnVwLCBpLCBhcnJheSkge1xyXG4gICAgYXJyYXlbaV0uaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL1wiICsgcG93ZXJ1cC5uYW1lICsgXCIucG5nXCI7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBleHBsb3Npb25JbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGV4cGxvc2lvbkltYWdlLnNyYyA9IFwiYXN0ZXJvaWRzL2V4cGxvc2lvbi5wbmdcIjtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImtleWRvd25cIixcclxuICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIHRydWUsXHJcbiAgKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwia2V5dXBcIixcclxuICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIG1hcFtlLmtleUNvZGUgfHwgZS53aGljaF0gPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB0cnVlLFxyXG4gICk7XHJcblxyXG4gICRzY29wZS5oaWdoc2NvcmUgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBldmFsdWF0ZUtleXMoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICAvL1NwYWNlXHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5jb29sZG93biA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNob290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbMzddKSB7XHJcbiAgICAgICAgLy9MZWZ0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnJvdGF0aW9uID0gMzYwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gLT0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOV0pIHtcclxuICAgICAgICAvL1JpZ2h0IEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5yb3RhdGlvbiA9PT0gMzYwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gKz0gMztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszOF0pIHtcclxuICAgICAgICAvL1VwIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA8PSBzcGFjZXNoaXAubWF4U3BlZWQpIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCArPSA1O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkLS07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChtYXBbNDBdKSB7XHJcbiAgICAgICAgLy9Eb3duIEFycm93XHJcbiAgICAgICAgaWYgKHNwYWNlc2hpcC5zcGVlZCA+IDApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5zcGVlZCAtPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKG1hcFszMl0pIHtcclxuICAgICAgICBzdGFydCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTcGFjZXNoaXAoKSB7XHJcbiAgICB0aGlzLndpZHRoID0gNTA7XHJcbiAgICB0aGlzLmhlaWdodCA9IDUwO1xyXG4gICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgIHRoaXMucmFuZ2UgPSA4MDtcclxuICAgIHRoaXMuY2Fubm9uID0ge1xyXG4gICAgICB4OiB0aGlzLndpZHRoIC8gMiAtIDQuNSxcclxuICAgICAgeTogdGhpcy5oZWlnaHQgLyAyIC0gdGhpcy5oZWlnaHQgKiAwLjA3ODEyNSxcclxuICAgIH07XHJcbiAgICB0aGlzLmNvb2xkb3duID0gMDtcclxuICAgIHRoaXMuY29vbGRvd25UaW1lID0gMjA7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW2NhbnZhcy53aWR0aCAvIDIgLSB0aGlzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAvIDJdO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL3NwYWNlc2hpcC5wbmdcIjtcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5tYXhTcGVlZCA9IDEwMDA7XHJcbiAgICB0aGlzLmFuZ2xlID0gMDtcclxuICAgIHRoaXMucm90YXRpb24gPSAwO1xyXG5cclxuICAgIHRoaXMuc2hvb3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuY29vbGRvd24gPSB0aGlzLmNvb2xkb3duVGltZTtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgc2hvdHNbaWRdID0gbmV3IFNob3QoaWQsIHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguYXJjKHRoaXMucG9zaXRpb25bMF0gKyB0aGlzLndpZHRoIC8gMiwgdGhpcy5wb3NpdGlvblsxXSArIHRoaXMuaGVpZ2h0IC8gMiwgMzAsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2IoMzUsIDIzNywgODYsIDAuNSlcIjtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYig2NiwgMTY4LCAzNiwgMC44KVwiO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgICAgdmFyIGFzdGVyb2lkID0gYXN0ZXJvaWRzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoYXN0ZXJvaWQsIHRoaXMpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zaGllbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGllbGQgPSBmYWxzZTtcclxuICAgICAgICAgICAgYXN0ZXJvaWQuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdhbWVPdmVyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICBpZiAodGhpcy5jb29sZG93biA+IDApIHtcclxuICAgICAgICB0aGlzLmNvb2xkb3duLS07XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBTaG90KGlkLCBzcGFjZXNoaXApIHtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbXHJcbiAgICAgIHNwYWNlc2hpcC5wb3NpdGlvblswXSArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi54ICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnggKiBNYXRoLmNvcygoKHNwYWNlc2hpcC5yb3RhdGlvbiAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKSxcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzFdICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnkgK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueSAqIE1hdGguc2luKCgoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSkgLyAxODApLFxyXG4gICAgXTtcclxuICAgIHRoaXMud2lkdGggPSA5O1xyXG4gICAgdGhpcy5oZWlnaHQgPSAxNTtcclxuICAgIHRoaXMuYW5nbGUgPSBzcGFjZXNoaXAuYW5nbGU7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gc3BhY2VzaGlwLnJvdGF0aW9uO1xyXG4gICAgdGhpcy5zcGVlZCA9IHNwYWNlc2hpcC5zcGVlZCArIDUwMDtcclxuICAgIHRoaXMubGlmZXNwYW4gPSBzcGFjZXNoaXAucmFuZ2U7XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvc2hvdC5wbmdcIjtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBBc3Rlcm9pZChpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy53aWR0aCA9IE1hdGgucmFuZG9tKCkgKiA1MCArIDIwO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLndpZHRoO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnJvdGF0aW9uID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMucm90YXRpb25TcGVlZCA9IE1hdGgucmFuZG9tKCkgKiA2IC0gMztcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMzAwICsgMjtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBcImFzdGVyb2lkcy9hc3Rlcm9pZFwiICsgKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDYpICsgMSkgKyBcIi5wbmdcIjtcclxuXHJcbiAgICB0aGlzLmV4cGxvZGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGV4cGxvc2lvbnNbdGhpcy5pZF0gPSBuZXcgRXhwbG9zaW9uKHRoaXMpO1xyXG4gICAgICByZXR1cm4gZGVsZXRlIGFzdGVyb2lkc1t0aGlzLmlkXTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnJvdGF0aW9uICs9IHRoaXMucm90YXRpb25TcGVlZDtcclxuICAgICAgaWYgKHRoaXMucm90YXRpb24gPiAzNjApIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gdGhpcy5yb3RhdGlvbiAtIDM2MDtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnJvdGF0aW9uIDwgMCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSAzNjAgKyB0aGlzLnJvdGF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgICB2YXIgc2hvdCA9IHNob3RzW2ldO1xyXG4gICAgICAgIGlmIChoaXQoc2hvdCwgdGhpcykpIHtcclxuICAgICAgICAgIHRoaXMuZXhwbG9kZSgpO1xyXG4gICAgICAgICAgdmFyIHBvaW50cyA9IE1hdGguZmxvb3IoKHNob3Quc3BlZWQgLSA1MDApIC8gMTAgKyA3MCAtIHRoaXMud2lkdGgpO1xyXG4gICAgICAgICAgaWYgKE1hdGguZmxvb3IoKHBvaW50cyArICRzY29wZS5zY29yZSkgLyAxMDApID4gTWF0aC5mbG9vcigkc2NvcGUuc2NvcmUgLyAxMDApKSB7XHJcbiAgICAgICAgICAgIHNwYXduUG93ZXJ1cCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJHNjb3BlLnNjb3JlICs9IHBvaW50cztcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIGRlbGV0ZSBzaG90c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBFeHBsb3Npb24ob2JqZWN0KSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gW29iamVjdC5wb3NpdGlvblswXSwgb2JqZWN0LnBvc2l0aW9uWzFdXTtcclxuICAgIHRoaXMud2lkdGggPSBvYmplY3Qud2lkdGg7XHJcbiAgICB0aGlzLmhlaWdodCA9IG9iamVjdC5oZWlnaHQ7XHJcbiAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIHRoaXMuYW5nbGUgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5jeWNsZSA9IHtcclxuICAgICAgcm93czogNixcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgc2l6ZTogWzI1NiwgMjU2XSxcclxuICAgICAgaTogMCxcclxuICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgfTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSA0NztcclxuICAgIHRoaXMuaW1nID0gZXhwbG9zaW9uSW1hZ2U7XHJcblxyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLmxpZmVzcGFuLS07XHJcbiAgICAgIG1vdmUodGhpcyk7XHJcbiAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuY3ljbGUuaSsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gUG93ZXJ1cChpZCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wb3dlcnVwID0gcG93ZXJ1cFR5cGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvd2VydXBUeXBlcy5sZW5ndGgpXTtcclxuICAgIHRoaXMuY3ljbGUgPSB0aGlzLnBvd2VydXAuY3ljbGU7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gMTAwMDtcclxuICAgIGlmICh0aGlzLmN5Y2xlLnNpemVbMV0gPiB0aGlzLmN5Y2xlLnNpemVbMF0pIHtcclxuICAgICAgdGhpcy5oZWlnaHQgPSA0MDtcclxuICAgICAgdGhpcy53aWR0aCA9IE1hdGgucm91bmQoKHRoaXMuaGVpZ2h0IC8gdGhpcy5jeWNsZS5zaXplWzFdKSAqIHRoaXMuY3ljbGUuc2l6ZVswXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndpZHRoID0gNDA7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gTWF0aC5yb3VuZCgodGhpcy53aWR0aCAvIHRoaXMuY3ljbGUuc2l6ZVswXSkgKiB0aGlzLmN5Y2xlLnNpemVbMV0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wb3NpdGlvbiA9IGdldEVudHJ5UG9zaXRpb24odGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgdGhpcy5pbWcgPSB0aGlzLnBvd2VydXAuaW1nO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLnNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDE1MCArIDUwO1xyXG4gICAgdmFyIGRlbGF5ID0gNTtcclxuICAgIHRoaXMubW92ZSA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGhpdChzcGFjZXNoaXAsIHRoaXMpKSB7XHJcbiAgICAgICAgJHNjb3BlLmFubm91bmNlID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2VtZW50ID0gdGhpcy5wb3dlcnVwLmFubm91bmNlbWVudDtcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB0aGlzLnBvd2VydXAuYWN0aXZhdGUoc3BhY2VzaGlwKTtcclxuICAgICAgICByZXR1cm4gZGVsZXRlIHBvd2VydXBzW3RoaXMuaWRdO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKGRlbGF5IDw9IDApIHtcclxuICAgICAgICBpZiAodGhpcy5jeWNsZS5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaSsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlLmktLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsYXkgPSA1O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGF5LS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBtb3ZlKG9iamVjdCkge1xyXG4gICAgb2JqZWN0LnBvc2l0aW9uWzBdICs9IChvYmplY3Quc3BlZWQgLyAxMDApICogTWF0aC5jb3MoKChvYmplY3QuYW5nbGUgLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBvYmplY3QucG9zaXRpb25bMV0gKz0gKG9iamVjdC5zcGVlZCAvIDEwMCkgKiBNYXRoLnNpbigoKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIGlmIChvYmplY3QucG9zaXRpb25bMF0gPiBjYW52YXMud2lkdGgpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzBdID0gLW9iamVjdC53aWR0aDtcclxuICAgIH0gZWxzZSBpZiAob2JqZWN0LnBvc2l0aW9uWzBdIDwgLW9iamVjdC53aWR0aCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMF0gPSBjYW52YXMud2lkdGg7XHJcbiAgICB9XHJcbiAgICBpZiAob2JqZWN0LnBvc2l0aW9uWzFdID4gY2FudmFzLmhlaWdodCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMV0gPSAtb2JqZWN0LmhlaWdodDtcclxuICAgIH0gZWxzZSBpZiAob2JqZWN0LnBvc2l0aW9uWzFdIDwgLW9iamVjdC5oZWlnaHQpIHtcclxuICAgICAgb2JqZWN0LnBvc2l0aW9uWzFdID0gY2FudmFzLmhlaWdodDtcclxuICAgIH1cclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHgudHJhbnNsYXRlKG9iamVjdC5wb3NpdGlvblswXSwgb2JqZWN0LnBvc2l0aW9uWzFdKTtcclxuICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LndpZHRoIC8gMiwgb2JqZWN0LmhlaWdodCAvIDIpO1xyXG4gICAgY3R4LnJvdGF0ZSgob2JqZWN0LnJvdGF0aW9uICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgaWYgKG9iamVjdC5jeWNsZSkge1xyXG4gICAgICB2YXIgY29sdW1uID0gb2JqZWN0LmN5Y2xlLmkgJSBvYmplY3QuY3ljbGUuY29sdW1ucztcclxuICAgICAgdmFyIHJvdyA9IE1hdGguZmxvb3Iob2JqZWN0LmN5Y2xlLmkgLyBvYmplY3QuY3ljbGUuY29sdW1ucyk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgICAgb2JqZWN0LmltZyxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVswXSAqIGNvbHVtbixcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVsxXSAqIHJvdyxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVswXSxcclxuICAgICAgICBvYmplY3QuY3ljbGUuc2l6ZVsxXSxcclxuICAgICAgICAtb2JqZWN0LndpZHRoIC8gMixcclxuICAgICAgICAtb2JqZWN0LmhlaWdodCAvIDIsXHJcbiAgICAgICAgb2JqZWN0LndpZHRoLFxyXG4gICAgICAgIG9iamVjdC5oZWlnaHQsXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAob2JqZWN0LmN5Y2xlLmkgPD0gMCkge1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5pID0gMDtcclxuICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmIChvYmplY3QuY3ljbGUuaSA+PSBvYmplY3QuY3ljbGUuY29sdW1ucyAqIG9iamVjdC5jeWNsZS5yb3dzKSB7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSBvYmplY3QuY3ljbGUuY29sdW1ucyAqIG9iamVjdC5jeWNsZS5yb3dzIC0gMTtcclxuICAgICAgICBvYmplY3QuY3ljbGUuZGlyZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2Uob2JqZWN0LmltZywgLW9iamVjdC53aWR0aCAvIDIsIC1vYmplY3QuaGVpZ2h0IC8gMiwgb2JqZWN0LndpZHRoLCBvYmplY3QuaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICB2YXIgc3BhY2VzaGlwO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydCgpIHtcclxuICAgICRzY29wZS5wbGF5aW5nID0gdHJ1ZTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGFjZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNwYWNlcGljcyk7XHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICBzcGFjZXNoaXAgPSBuZXcgU3BhY2VzaGlwKCk7XHJcbiAgICAkc2NvcGUuc2NvcmUgPSAwO1xyXG4gICAgc3Bhd25Bc3Rlcm9pZHMoNSk7XHJcbiAgICBhdXRvU3Bhd24oKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdldEVudHJ5UG9zaXRpb24od2lkdGgsIGhlaWdodCkge1xyXG4gICAgdmFyIGdyaWRYID0gTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICB2YXIgZ3JpZFkgPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciB4LFxyXG4gICAgICB5ID0gMDtcclxuICAgIGlmIChncmlkWCA+PSAxKSB7XHJcbiAgICAgIHggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoO1xyXG4gICAgICBpZiAoeSA+PSAxKSB7XHJcbiAgICAgICAgeSA9IDAgLSBoZWlnaHQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeSA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHkgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLmhlaWdodDtcclxuICAgICAgaWYgKGdyaWRZID49IDEpIHtcclxuICAgICAgICB4ID0gMCAtIHdpZHRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHggPSBjYW52YXMud2lkdGg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBbeCwgeV07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoaXQob2JqZWN0MSwgb2JqZWN0Mikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgb2JqZWN0MS5wb3NpdGlvblswXSA8IG9iamVjdDIucG9zaXRpb25bMF0gKyBvYmplY3QyLndpZHRoICYmXHJcbiAgICAgIG9iamVjdDIucG9zaXRpb25bMF0gPCBvYmplY3QxLnBvc2l0aW9uWzBdICsgb2JqZWN0MS53aWR0aCAmJlxyXG4gICAgICBvYmplY3QxLnBvc2l0aW9uWzFdIDwgb2JqZWN0Mi5wb3NpdGlvblsxXSArIG9iamVjdDIuaGVpZ2h0ICYmXHJcbiAgICAgIG9iamVjdDIucG9zaXRpb25bMV0gPCBvYmplY3QxLnBvc2l0aW9uWzFdICsgb2JqZWN0MS5oZWlnaHRcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhdXRvU3Bhd24oKSB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMoYXN0ZXJvaWRzKS5sZW5ndGggPCAyMDApIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgYXN0ZXJvaWRzW2lkXSA9IG5ldyBBc3Rlcm9pZChpZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoJHNjb3BlLnBsYXlpbmcpIHtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgYXV0b1NwYXduKCk7XHJcbiAgICAgIH0sIHNwYXduSW50ZXJ2YWwoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkludGVydmFsKCkge1xyXG4gICAgaWYgKCRzY29wZS5zY29yZSA8IDEwMDApIHtcclxuICAgICAgcmV0dXJuIDEwMDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDIwMDApIHtcclxuICAgICAgcmV0dXJuIDkwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgMzAwMCkge1xyXG4gICAgICByZXR1cm4gODAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA0MDAwKSB7XHJcbiAgICAgIHJldHVybiA3MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDUwMDApIHtcclxuICAgICAgcmV0dXJuIDYwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNjAwMCkge1xyXG4gICAgICByZXR1cm4gNTAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA3MDAwKSB7XHJcbiAgICAgIHJldHVybiA0MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDgwMDApIHtcclxuICAgICAgcmV0dXJuIDMwMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAyMDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkFzdGVyb2lkcyhhbW91bnQpIHtcclxuICAgIHZhciBpID0gMDtcclxuICAgIGRvIHtcclxuICAgICAgdmFyIGlkID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKTtcclxuICAgICAgYXN0ZXJvaWRzW2lkXSA9IG5ldyBBc3Rlcm9pZChpZCk7XHJcbiAgICB9IHdoaWxlIChpKysgPD0gYW1vdW50KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduUG93ZXJ1cCgpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhwb3dlcnVwcykubGVuZ3RoIDwgMykge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBwb3dlcnVwc1tpZF0gPSBuZXcgUG93ZXJ1cChpZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnYW1lT3ZlcigpIHtcclxuICAgICRzY29wZS5wbGF5aW5nID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICBhc3Rlcm9pZHNbaV0uZXhwbG9kZSgpO1xyXG4gICAgfVxyXG4gICAgc2hvdHMgPSB7fTtcclxuICAgIGlmICgkc2NvcGUubG9nZ2VkSW4pIHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5oaWdoc2NvcmUuYXN0ZXJvaWRzIDwgJHNjb3BlLnNjb3JlKSB7XHJcbiAgICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyLmhpZ2hzY29yZS5hc3Rlcm9pZHMgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgICAgR2FtZVN2Yy5zZXRIaWdoc2NvcmUoXCJhc3Rlcm9pZHNcIiwgJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCwgJHNjb3BlLnNjb3JlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdoc2NvcmUgPCAkc2NvcGUuc2NvcmUpIHtcclxuICAgICAgICAkc2NvcGUuaGlnaHNjb3JlID0gJHNjb3BlLnNjb3JlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTdGFydCBsaXN0ZW5pbmcgdG8gcmVzaXplIGV2ZW50cyBhbmRcclxuICAvLyBkcmF3IGNhbnZhcy5cclxuXHJcbiAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgIC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvXHJcbiAgICAvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuICAgIC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cclxuICAgIC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcbiAgICByZXNpemVDYW52YXMoKTtcclxuICB9XHJcbiAgLy8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG4gIC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG4gIC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxyXG4gIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gMTtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogNTkpO1xyXG4gIH1cclxuXHJcbiAgaW5pdGlhbGl6ZSgpO1xyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuXHJcbiAgdmFyIHRhbGx5ID0gMDtcclxuICB2YXIgZGlyZWN0aW9uID0gdHJ1ZTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGZvciAodmFyIGkgaW4gc2hvdHMpIHtcclxuICAgICAgaWYgKHNob3RzW2ldLmxpZmVzcGFuIDw9IDApIHtcclxuICAgICAgICBkZWxldGUgc2hvdHNbaV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvdHNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgIGFzdGVyb2lkc1tpXS5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gcG93ZXJ1cHMpIHtcclxuICAgICAgcG93ZXJ1cHNbaV0ubW92ZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChpIGluIGV4cGxvc2lvbnMpIHtcclxuICAgICAgaWYgKGV4cGxvc2lvbnNbaV0ubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBleHBsb3Npb25zW2ldO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV4cGxvc2lvbnNbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBldmFsdWF0ZUtleXMoKTtcclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzcGFjZXNoaXAubW92ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIGNhbnZhcy53aWR0aCwgMCk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjBcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjI1XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMC41XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMC43NVwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjEuMFwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgICAgY3R4LmZvbnQgPSBcIjYwcHggTW9ub3RvblwiO1xyXG4gICAgICBjdHguZmlsbFRleHQoXCJBc3Rlcm9pZHNcIiwgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIkFzdGVyb2lkc1wiKS53aWR0aCAvIDIsIGNhbnZhcy5oZWlnaHQgLyAyKTtcclxuICAgICAgY3R4LmZvbnQgPSBcIjIwcHggQWxkcmljaFwiO1xyXG4gICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgXCJQcmVzcyBzcGFjZSB0byBzdGFydFwiLFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSBjdHgubWVhc3VyZVRleHQoXCJQcmVzcyBzcGFjZSB0byBzdGFydFwiKS53aWR0aCAvIDIsXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCAvIDIgKyAyMCxcclxuICAgICAgKTtcclxuICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgIFwiRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyXCIsXHJcbiAgICAgICAgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIkRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgYnkgTGF1cmVudCBEZWJhY2tlclwiKS53aWR0aCAvIDIsXHJcbiAgICAgICAgY2FudmFzLmhlaWdodCAtIDMwLFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGFsbHkgKz0gZGlyZWN0aW9uID8gMSA6IC0xO1xyXG4gICAgaWYgKHRhbGx5ID4gMTAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMTAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAodGFsbHkgPCAwKSB7XHJcbiAgICAgIHRhbGx5ID0gMDtcclxuICAgICAgZGlyZWN0aW9uID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuICB9XHJcblxyXG4gICRzY29wZS5zcGFjZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChcImFzdGVyb2lkcy9zcGFjZScgKyBzcGFjZSArICcuanBnXCIpJyxcclxuICAgIH07XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJCdWJibGVzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnViYmxlcy1wYWdlXCIpO1xyXG4gIHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIHZhciBidWJibGVzID0gW107XHJcbiAgdmFyIGNvbG9ycyA9IFtcIiNmZmMzMDBcIiwgXCIjZmY1NzMzXCIsIFwiI2M3MDAzOVwiLCBcIiM5MDBjM2VcIiwgXCIjNTcxODQ1XCJdO1xyXG5cclxuICBmdW5jdGlvbiBCdWJibGUoKSB7XHJcbiAgICB0aGlzLmxpZmVzcGFuID0gMDtcclxuICAgIHRoaXMucmFkaXVzID0gMTtcclxuICAgIHRoaXMuZXhwYW5kaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAzKTtcclxuICAgIHRoaXMuY2lyY3VtZmVyZW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDUwKSArIDU7XHJcbiAgICB0aGlzLm1heFJhZGl1cyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDIwMCkgKyAyMDtcclxuICAgIHRoaXMueCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aCk7XHJcbiAgICB0aGlzLnkgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0KTtcclxuICAgIHRoaXMudnggPSBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMTtcclxuICAgIHRoaXMudnkgPSBNYXRoLnJhbmRvbSgpID49IDAuNSA/IDEgOiAtMTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBidWJibGVzLmZvckVhY2goZnVuY3Rpb24gKGJ1YmJsZSkge1xyXG4gICAgICB2YXIgY29sb3IgPSBjb2xvcnNbTWF0aC5yb3VuZCgoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMpIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5hcmMoYnViYmxlLngsIGJ1YmJsZS55LCBidWJibGUucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcnNbTWF0aC5yb3VuZCgoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMpIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcnNbY29sb3JzLmxlbmd0aCAtIE1hdGgucm91bmQoKGNvbG9ycy5sZW5ndGggKiBidWJibGUucmFkaXVzKSAvIGJ1YmJsZS5tYXhSYWRpdXMpXTtcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9IChidWJibGUuY2lyY3VtZmVyZW5jZSAqIGJ1YmJsZS5yYWRpdXMpIC8gYnViYmxlLm1heFJhZGl1cztcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaWx0ZXJCdWJibGVzKCkge1xyXG4gICAgYnViYmxlcy5wdXNoKG5ldyBCdWJibGUoKSk7XHJcbiAgICBidWJibGVzID0gYnViYmxlcy5maWx0ZXIoZnVuY3Rpb24gKGJ1YmJsZSkge1xyXG4gICAgICBpZiAoYnViYmxlLnJhZGl1cyA9PT0gYnViYmxlLm1heFJhZGl1cykge1xyXG4gICAgICAgIGJ1YmJsZS5leHBhbmRpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBidWJibGUueCArPSBidWJibGUudnggKiBidWJibGUuc3BlZWQ7XHJcbiAgICAgIGJ1YmJsZS55ICs9IGJ1YmJsZS52eSAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnJhZGl1cyArPSBidWJibGUuZXhwYW5kaW5nID8gMSA6IC0xO1xyXG4gICAgICByZXR1cm4gYnViYmxlLnJhZGl1cyA+IDA7XHJcbiAgICB9KTtcclxuICAgIGRyYXcoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuICB9XHJcblxyXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShmaWx0ZXJCdWJibGVzKTtcclxuXHJcbiAgKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG4gICAgLy8gZHJhdyBjYW52YXMuXHJcbiAgICBpbml0aWFsaXplKCk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgLy8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuICAgICAgLy8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcbiAgICAgIC8vIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG4gICAgICAvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG4gICAgICByZXNpemVDYW52YXMoKTtcclxuICAgIH1cclxuICAgIC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuICAgIC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxyXG4gICAgLy8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcbiAgICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcbiAgICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1NSA6IDU2KTtcclxuICAgIH1cclxuICB9KSgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkNoYXJhZGVzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcbiAgJHNjb3BlLnNlbGVjdFdvcmQgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICRzY29wZS53b3JkID0gJHNjb3BlLmNoYXJhZGVzW2NhdGVnb3J5XVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldLmxlbmd0aCldO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQ29udGFjdEN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRW1haWxTdmMpIHtcclxuICAkc2NvcGUub3B0aW9ucyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJTcGFtXCIsXHJcbiAgICAgIHRleHQ6IFwiSSBhbSBhIHNwYW0gYm90IGFuZCBhdXRvbWF0aWNhbGx5IGNoZWNrIHRoZSBmaXJzdCBvcHRpb24gSSBmaW5kIVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPcHBvcnR1bml0eVwiLFxyXG4gICAgICB0ZXh0OiBcIllvdSBzZWVtIHRvIGhhdmUgdGhlIHNraWxscyBJIHNlZWssIEknZCBsaWtlIHRvIHRhbGsgYWJvdXQgc29tZSBvcHBvcnR1bml0aWVzLlwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJSZXN1bWVcIixcclxuICAgICAgdGV4dDogXCJJIGRpZyB0aGUgcmVzdW1lLCBob3cgZGlkIHlvdSBtYWtlIGl0P1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJPdGhlclwiLFxyXG4gICAgICB0ZXh0OiBcIlN1bXRpbiBlbHNlIVwiLFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICAkc2NvcGUuY29udGFjdCA9IHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIixcclxuICAgIHBob25lOiBcIlwiLFxyXG4gICAgYWJvdXQ6IFwiXCIsXHJcbiAgICBtZXNzYWdlOiBcIlwiLFxyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnNlbmRpbmcgPSB0cnVlO1xyXG4gICAgRW1haWxTdmMuc2VuZCh7XHJcbiAgICAgIGVtYWlsOiAkc2NvcGUuY29udGFjdC5lbWFpbCxcclxuICAgICAgbmFtZTogJHNjb3BlLmNvbnRhY3QubmFtZSxcclxuICAgICAgcGhvbmU6ICRzY29wZS5jb250YWN0LnBob25lLFxyXG4gICAgICBhYm91dDogJHNjb3BlLmNvbnRhY3QuYWJvdXQsXHJcbiAgICAgIG1lc3NhZ2U6ICRzY29wZS5jb250YWN0Lm1lc3NhZ2UsXHJcbiAgICB9KS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUudG9hc3QoXCJNZXNzYWdlIHNlbnRcIik7XHJcbiAgICAgICAgJHNjb3BlLnNlbnQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU1VDQ0VTUy4gc3RhdHVzPSVkLCB0ZXh0PSVzXCIsIHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2UudGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgJHNjb3BlLnRvYXN0KFwiTWVzc2FnZSBzZW5kIGZhaWxlZFwiKTtcclxuICAgICAgICAkc2NvcGUuc2VuZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRkFJTEVELiBlcnJvcj1cIiwgZXJyKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignRXhwZXJpZW5jZUN0cmwnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XHJcblxyXG4gICRzY29wZS5nZXRTa2lsbCA9IGZ1bmN0aW9uKHNraWxsQ29kZSkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2tpbGxzKSByZXR1cm47XHJcbiAgICByZXR1cm4gJHNjb3BlLnNraWxscy5maW5kKGZ1bmN0aW9uKHNraWxsKSB7XHJcbiAgICAgIHJldHVybiBza2lsbC5jb2RlID09PSBza2lsbENvZGU7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignSG9iYmllc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG5cclxuICAkLmdldEpTT04oJ2h0dHBzOi8vd3d3LnJlZGRpdC5jb20vdXNlci9iZWxnb2NhbmFkaWFuL2Fib3V0Ly5qc29uJywgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRIb2JieSA9ICRzY29wZS5ob2JiaWVzWzBdO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0SG9iYnkgPSBmdW5jdGlvbiAoaG9iYnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gaG9iYnk7XHJcbiAgICAkc2NvcGUuaG9iYnlTZWxlY3RvclZpc2libGUgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2hvd0hvYmJ5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgYXJyYXkpIHtcclxuICAgIGlmICghdmFsdWUuaW1hZ2VzKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gdmFsdWUuaW1hZ2VzLmxlbmd0aCA+IDA7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignTGVtbWluZ3NDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgR2FtZVN2Yykge1xyXG5cclxuICB2YXIgTEVGVCA9IDA7XHJcbiAgdmFyIFJJR0hUID0gMTtcclxuXHJcbiAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZW1taW5ncy1wYWdlJyk7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gIHZhciBsZW1taW5nc0ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgbGVtbWluZ3NJbWFnZS5zcmMgPSAnbGVtbWluZ3MvbGVtbWluZ3MucG5nJztcclxuICB2YXIgZGVjb3JJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIGRlY29ySW1hZ2Uuc3JjID0gJ2xlbW1pbmdzL2RlY29yLnBuZyc7XHJcbiAgdmFyIGxlbW1pbmdzID0ge307XHJcbiAgdmFyIHN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgdmFyIGFjdGlvbnMgPSB7XHJcbiAgICB3YWxrOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMF0sXHJcbiAgICAgIGVuZDogWzMyMCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGh1aDoge1xyXG4gICAgICBzdGFydDogWzMyMCwgMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMjBdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgZmFsbDoge1xyXG4gICAgICBzdGFydDogWzAsIDgwXSxcclxuICAgICAgZW5kOiBbMTYwLCAxMDBdLFxyXG4gICAgICBjb2x1bW5zOiA0LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGZseToge1xyXG4gICAgICBzdGFydDogWzE2MCwgODBdLFxyXG4gICAgICBlbmQ6IFs0ODAsIDExMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgc3RvcDoge1xyXG4gICAgICBzdGFydDogWzAsIDEyMF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTQwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgY2xpbWI6IHtcclxuICAgICAgc3RhcnQ6IFswLCAxNjBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDE4NV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMjVdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBwdW5jaDoge1xyXG4gICAgICBzdGFydDogWzAsIDI0MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMzAwXSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDIsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZGlnOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMzIwXSxcclxuICAgICAgZW5kOiBbMzIwLCAzNDVdLFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBMZW1taW5nKGluaXQpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGNhbnZhcy53aWR0aCAtIDIwMCkpICsgMTAwLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLmhlaWdodCAtIDIwMCkpICsgMTAwXTtcclxuICAgIHRoaXMuZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSAqIDIgPiAxID8gTEVGVCA6IFJJR0hUO1xyXG4gICAgdGhpcy5hY3QgPSBmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb25zW2FjdGlvbl07XHJcbiAgICAgIHRoaXMuY3ljbGUgPSAwO1xyXG4gICAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gKDIwICogKHRoaXMuYWN0aW9uLnJvd3MgLSAxKSkpIC8gdGhpcy5hY3Rpb24ucm93cztcclxuICAgICAgdGhpcy5hbmltYXRpb24gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuYWN0KGluaXQpO1xyXG4gICAgdGhpcy5tb3ZlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5wb3NpdGlvblswXSwgdGhpcy5wb3NpdGlvblsxXSk7XHJcbiAgICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gTEVGVCkge1xyXG4gICAgICAgIGN0eC5zY2FsZSgtMSwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdmFyIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgIGN0eC5kcmF3SW1hZ2UobGVtbWluZ3NJbWFnZSwgKHRoaXMud2lkdGggKiBjb2x1bW4pICsgdGhpcy5hY3Rpb24uc3RhcnRbMF0sICgodGhpcy5oZWlnaHQgKyAyMCkgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0sIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCAwLCAwLCB0aGlzLndpZHRoICogMiwgdGhpcy5oZWlnaHQgKiAyKTtcclxuICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgICAgaWYgKHRoaXMuYWN0aW9uLnJldmVyc2UpIHtcclxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlLS07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbiA9ICF0aGlzLmFuaW1hdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3ljbGUrKztcclxuICAgICAgICBpZiAodGhpcy5jeWNsZSA+PSB0aGlzLmFjdGlvbi5jb2x1bW5zICogdGhpcy5hY3Rpb24ucm93cykge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gSGF0Y2goKSB7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gWzIwLCAyMF07XHJcbiAgICB0aGlzLmFjdGlvbiA9IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbODIsIDUwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDEsXHJcbiAgICAgIHJvd3M6IDEwXHJcbiAgICB9XHJcbiAgICB0aGlzLndpZHRoID0gKHRoaXMuYWN0aW9uLmVuZFswXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzBdKSAvIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICB0aGlzLmhlaWdodCA9ICh0aGlzLmFjdGlvbi5lbmRbMV0gLSB0aGlzLmFjdGlvbi5zdGFydFsxXSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICB0aGlzLm9wZW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgdmFyIGNvbHVtbiwgcm93O1xyXG4gICAgICBpZiAoc3RhcnRlZCkge1xyXG4gICAgICAgIGNvbHVtbiA9IHRoaXMuY3ljbGUgJSB0aGlzLmFjdGlvbi5jb2x1bW5zO1xyXG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3IodGhpcy5jeWNsZSAvIHRoaXMuYWN0aW9uLmNvbHVtbnMpO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlIDwgOSkge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb2x1bW4gPSAwO1xyXG4gICAgICAgIHJvdyA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgY3R4LmRyYXdJbWFnZShkZWNvckltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKHRoaXMuaGVpZ2h0ICogcm93KSArIHRoaXMuYWN0aW9uLnN0YXJ0WzFdIC0gMSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25MZW1taW5nKCkge1xyXG4gICAgT2JqZWN0LmtleXMoYWN0aW9ucykuZm9yRWFjaChmdW5jdGlvbihhY3Rpb24pIHtcclxuICAgICAgbGVtbWluZ3NbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwKV0gPSBuZXcgTGVtbWluZyhhY3Rpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHRmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG5cdFx0Ly8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuXHRcdC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG5cdFx0Ly8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xyXG5cdFx0Ly8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuXHRcdHJlc2l6ZUNhbnZhcygpO1xyXG5cdH1cclxuXHQvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcblx0Ly8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcblx0Ly8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcblx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG5cdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gKGNhbnZhcy53aWR0aCA8PSA3NjggPyA1MCA6IDEwNSk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplKCk7XHJcbiAgc3Bhd25MZW1taW5nKCk7XHJcbiAgbGV0IGhhdGNoID0gbmV3IEhhdGNoKClcclxuICBkcmF3KCk7XHJcblxyXG4gIGZ1bmN0aW9uIGRyYXcoKSB7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBpZiAoIXN0YXJ0ZWQpIHtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguZm9udD0nNDBweCBNb25vdG9uJztcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9ICcxMCc7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcclxuICAgICAgY3R4LnJlY3QoMTUsIGNhbnZhcy5oZWlnaHQgLSA0NSwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLndpZHRoICsgMjAsIGN0eC5tZWFzdXJlVGV4dCgnU3RhcnQnKS5oZWlnaHQgKyBjYW52YXMuaGVpZ2h0IC0gNDUpO1xyXG4gICAgICBjdHguZmlsbCgpO1xyXG4gICAgICBjdHguZmlsbFRleHQoJ1N0YXJ0JywgMjAsIGNhbnZhcy5oZWlnaHQgLSA1MCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3IgKHZhciBpIGluIGxlbW1pbmdzKSB7XHJcbiAgICAgICAgbGVtbWluZ3NbaV0ubW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoYXRjaC5vcGVuKCk7XHJcbiAgICBzdGFydGVkID0gdHJ1ZTtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIGRyYXcoKTtcclxuICAgIH0sIDE1MCk7XHJcbiAgfVxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMaXN0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIENhdGVnb3JpZXNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IHRydWU7XHJcblxyXG4gICRzY29wZS5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5nZXRDYXRlZ29yaWVzKClcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICRzY29wZS50YXNrcyA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpIGluICRzY29wZS5jYXRlZ29yaWVzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaiBpbiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrcykge1xyXG4gICAgICAgICAgJHNjb3BlLnRhc2tzLnB1c2goe1xyXG4gICAgICAgICAgICBcImNhdGVnb3J5XCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLm5hbWUsXHJcbiAgICAgICAgICAgIFwidGFza1wiOiAkc2NvcGUuY2F0ZWdvcmllc1tpXS50YXNrc1tqXS5uYW1lXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zZWxlY3RDYXRlZ29yeSA9IGZ1bmN0aW9uKGNhdGVnb3J5KSB7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkVGFza3MgPSBbXTtcclxuICAgICRzY29wZS5zZWxlY3RhYmxlVGFza3MgPSBbXTtcclxuICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcy5wdXNoKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgIH1cclxuICAgICRzY29wZS5zaG93Q2F0ZWdvcnkgPSBmYWxzZTtcclxuICAgICRzY29wZS5lbnRlcmVkQ2F0ZWdvcnkgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUubmV3Q2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAkc2NvcGUuY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAoJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSA9PT0gY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0Q2F0ZWdvcnkoJHNjb3BlLmNhdGVnb3JpZXNbaV0pO1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZENhdGVnb3J5KHtcclxuICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgICAgICAkc2NvcGUuaW5pdCgpO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgIHZhciBmb3VuZCA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0ubmFtZSA9PT0gdGFzaykge1xyXG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0VGFzaygkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgQ2F0ZWdvcmllc1N2Yy5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5Lm5hbWUsIHtcclxuICAgICAgICB0YXNrOiB0YXNrXHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLnB1c2goeyBuYW1lOiB0YXNrIH0pO1xyXG4gICAgICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RlZFRhc2tzLCAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1skc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcy5sZW5ndGggLSAxXSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLmVudGVyZWRUYXNrID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUudW5zZWxlY3RUYXNrID0gZnVuY3Rpb24gKHRhc2spIHtcclxuICAgICRzY29wZS5hZGRUYXNrKCRzY29wZS5zZWxlY3RhYmxlVGFza3MsIHRhc2spO1xyXG4gICAgJHNjb3BlLnJlbW92ZVRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsIHRhc2spO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5hZGRUYXNrID0gZnVuY3Rpb24odGFza0xpc3QsIHRhc2spIHtcclxuICAgIHRhc2tMaXN0LnB1c2godGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnJlbW92ZVRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3Quc3BsaWNlKHRhc2tMaXN0LmluZGV4T2YodGFzayksIDEpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zdGFydFByaW9yaXRpemluZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgQ2F0ZWdvcmllc1N2Yy5zZXRQcmlvcml0eUxpc3QoJHNjb3BlLnNlbGVjdGVkVGFza3MpO1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoJy9wcmlvcml0aXplJyk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmdldFF1ZXN0aW9ucyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCEkc2NvcGUuc2VsZWN0ZWRUYXNrcykgcmV0dXJuICcnO1xyXG4gICAgdmFyIGNvdW50ZXIgPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9ICRzY29wZS5zZWxlY3RlZFRhc2tzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgY291bnRlciArPSBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiTG9naW5DdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG4gIC8vIEluaXRpYWxpemUgdGhlIEZpcmViYXNlVUkgV2lkZ2V0IHVzaW5nIEZpcmViYXNlLlxyXG4gIHZhciB1aSA9IG5ldyBmaXJlYmFzZXVpLmF1dGguQXV0aFVJKGZpcmViYXNlLmF1dGgoKSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2dvdXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICB1aS5yZXNldCgpO1xyXG4gICAgc3RhcnRVSSgpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBsb2dpblN1Y2Nlc3NmdWwocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS4kZW1pdChcImxvZ2luXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgJChcIiNtb2RhbC1sb2dpblwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICAvLyRsb2NhdGlvbi5wYXRoKCcvJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBsb2dpbkZhaWxlZCgpIHtcclxuICAgICRzY29wZS50b2FzdChcIkxvZ2luIEZhaWxlZFwiKTtcclxuICB9XHJcblxyXG4gICRzY29wZS50ZWxlZ3JhbUxvZ2luID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIFVzZXJTdmMuYXV0aGVudGljYXRlKHtcclxuICAgICAgYXV0aFR5cGU6IFwidGVsZWdyYW1cIixcclxuICAgICAgZGlzcGxheU5hbWU6IHVzZXIuZmlyc3RfbmFtZSArICh1c2VyLmxhc3RfbmFtZSA/IFwiIFwiICsgdXNlci5sYXN0X25hbWUgOiBcIlwiKSxcclxuICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXHJcbiAgICAgIHRlbGVncmFtSWQ6IHVzZXIuaWQsXHJcbiAgICAgIHBob3RvVVJMOiB1c2VyLnBob3RvX3VybCxcclxuICAgICAgaWRUb2tlbjogdXNlci5oYXNoLFxyXG4gICAgICBkYXRhOiB1c2VyLFxyXG4gICAgfSkudGhlbihsb2dpblN1Y2Nlc3NmdWwsIGxvZ2luRmFpbGVkKTtcclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBzdGFydFVJKCkge1xyXG4gICAgdWkuc3RhcnQoXCIjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lclwiLCB7XHJcbiAgICAgIGNhbGxiYWNrczoge1xyXG4gICAgICAgIHNpZ25JblN1Y2Nlc3M6IGZ1bmN0aW9uIChjdXJyZW50VXNlciwgY3JlZGVudGlhbCwgcmVkaXJlY3RVcmwpIHtcclxuICAgICAgICAgIC8vIE5vIHJlZGlyZWN0LlxyXG4gICAgICAgICAgZmlyZWJhc2VcclxuICAgICAgICAgICAgLmF1dGgoKVxyXG4gICAgICAgICAgICAuY3VycmVudFVzZXIuZ2V0SWRUb2tlbih0cnVlKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoaWRUb2tlbikge1xyXG4gICAgICAgICAgICAgIFVzZXJTdmMuYXV0aGVudGljYXRlKHtcclxuICAgICAgICAgICAgICAgIGF1dGhUeXBlOiBcImZpcmViYXNlXCIsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5TmFtZTogY3VycmVudFVzZXIuZGlzcGxheU5hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogY3VycmVudFVzZXIuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwaG90b1VSTDogY3VycmVudFVzZXIucGhvdG9VUkwsXHJcbiAgICAgICAgICAgICAgICBlbWFpbFZlcmlmaWVkOiBjdXJyZW50VXNlci5lbWFpbFZlcmlmaWVkLFxyXG4gICAgICAgICAgICAgICAgaWRUb2tlbjogaWRUb2tlbixcclxuICAgICAgICAgICAgICAgIGRhdGE6IGN1cnJlbnRVc2VyLFxyXG4gICAgICAgICAgICAgIH0pLnRoZW4obG9naW5TdWNjZXNzZnVsLCBsb2dpbkZhaWxlZCk7XHJcbiAgICAgICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy8gc2lnbkluRmFpbHVyZSBjYWxsYmFjayBtdXN0IGJlIHByb3ZpZGVkIHRvIGhhbmRsZSBtZXJnZSBjb25mbGljdHMgd2hpY2hcclxuICAgICAgICAvLyBvY2N1ciB3aGVuIGFuIGV4aXN0aW5nIGNyZWRlbnRpYWwgaXMgbGlua2VkIHRvIGFuIGFub255bW91cyB1c2VyLlxyXG4gICAgICAgIHNpZ25JbkZhaWx1cmU6IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgLy8gRm9yIG1lcmdlIGNvbmZsaWN0cywgdGhlIGVycm9yLmNvZGUgd2lsbCBiZVxyXG4gICAgICAgICAgLy8gJ2ZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3QnLlxyXG4gICAgICAgICAgaWYgKGVycm9yLmNvZGUgIT0gXCJmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0XCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gVGhlIGNyZWRlbnRpYWwgdGhlIHVzZXIgdHJpZWQgdG8gc2lnbiBpbiB3aXRoLlxyXG4gICAgICAgICAgdmFyIGNyZWQgPSBlcnJvci5jcmVkZW50aWFsO1xyXG4gICAgICAgICAgLy8gQ29weSBkYXRhIGZyb20gYW5vbnltb3VzIHVzZXIgdG8gcGVybWFuZW50IHVzZXIgYW5kIGRlbGV0ZSBhbm9ueW1vdXNcclxuICAgICAgICAgIC8vIHVzZXIuXHJcbiAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgIC8vIEZpbmlzaCBzaWduLWluIGFmdGVyIGRhdGEgaXMgY29waWVkLlxyXG4gICAgICAgICAgcmV0dXJuIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoQ3JlZGVudGlhbChjcmVkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVpU2hvd246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIC8vIFRoZSB3aWRnZXQgaXMgcmVuZGVyZWQuXHJcbiAgICAgICAgICAvLyBIaWRlIHRoZSBsb2FkZXIuXHJcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRlclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgc2lnbkluU3VjY2Vzc1VybDogXCIvaG9tZVwiLFxyXG4gICAgICBzaWduSW5PcHRpb25zOiBbXHJcbiAgICAgICAgLy9maXJlYmFzZS5hdXRoLkVtYWlsQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICAgIGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICAvLyBXaWxsIHVzZSBwb3B1cCBmb3IgSURQIFByb3ZpZGVycyBzaWduLWluIGZsb3cgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCwgcmVkaXJlY3QuXHJcbiAgICAgIHNpZ25JbkZsb3c6IFwicG9wdXBcIixcclxuICAgICAgLy8gT3RoZXIgY29uZmlnIG9wdGlvbnMuLi5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRVSSgpO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdQb3N0c0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkZmlsdGVyLCBQb3N0c1N2Yykge1xyXG5cclxuICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkc2NvcGUucG9zdEJvZHkpIHtcclxuICAgICAgUG9zdHNTdmMuY3JlYXRlKHtcclxuICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgICAgICRzY29wZS5wb3N0Qm9keSA9IG51bGw7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFBvc3RzU3ZjLmZldGNoKClcclxuICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5wb3N0cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oJ3dzOm5ld19wb3N0JywgZnVuY3Rpb24gKF8sIHBvc3QpIHtcclxuICAgICRzY29wZS4kYXBwbHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICBQb3N0c1N2Yy5nZXRQb3N0KHBvc3QpXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS5wb3N0cy51bnNoaWZ0KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJQcm9maWxlQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkbG9jYXRpb24sIFVzZXJTdmMpIHtcclxuICBjb25zdCBjb3VudHJpZXMgPSBbXHJcbiAgICB7IG5hbWU6IFwiQW5kb3JyYVwiLCBmbGFnOiBcImZsYWctYWRcIiwgdGlkYml0OiBcIlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIiwgZmxhZzogXCJmbGFnLWFlXCIgfSxcclxuICAgIHsgbmFtZTogXCJBZmdoYW5pc3RhblwiLCBmbGFnOiBcImZsYWctYWZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIiwgZmxhZzogXCJmbGFnLWFnXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbmd1aWxsYVwiLCBmbGFnOiBcImZsYWctYWlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFsYmFuaWFcIiwgZmxhZzogXCJmbGFnLWFsXCIgfSxcclxuICAgIHsgbmFtZTogXCJBcm1lbmlhXCIsIGZsYWc6IFwiZmxhZy1hbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW5nb2xhXCIsIGZsYWc6IFwiZmxhZy1hb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW50YXJjdGljYVwiLCBmbGFnOiBcImZsYWctYXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFyZ2VudGluYVwiLCBmbGFnOiBcImZsYWctYXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFtZXJpY2FuIFNvbW9hXCIsIGZsYWc6IFwiZmxhZy1hc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXVzdHJpYVwiLCBmbGFnOiBcImZsYWctYXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF1c3RyYWxpYVwiLCBmbGFnOiBcImZsYWctYXVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFydWJhXCIsIGZsYWc6IFwiZmxhZy1hd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiw4VsYW5kIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWF4XCIgfSxcclxuICAgIHsgbmFtZTogXCJBemVyYmFpamFuXCIsIGZsYWc6IFwiZmxhZy1helwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLCBmbGFnOiBcImZsYWctYmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhcmJhZG9zXCIsIGZsYWc6IFwiZmxhZy1iYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFuZ2xhZGVzaFwiLCBmbGFnOiBcImZsYWctYmRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGdpdW1cIiwgZmxhZzogXCJmbGFnLWJlXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdXJraW5hIEZhc29cIiwgZmxhZzogXCJmbGFnLWJmXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdWxnYXJpYVwiLCBmbGFnOiBcImZsYWctYmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhaHJhaW5cIiwgZmxhZzogXCJmbGFnLWJoXCIgfSxcclxuICAgIHsgbmFtZTogXCJCdXJ1bmRpXCIsIGZsYWc6IFwiZmxhZy1iaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVuaW5cIiwgZmxhZzogXCJmbGFnLWJqXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBCYXJ0aMOpbGVteVwiLCBmbGFnOiBcImZsYWctYmxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlcm11ZGFcIiwgZmxhZzogXCJmbGFnLWJtXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcnVuZWkgXCIsIGZsYWc6IFwiZmxhZy1iblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9saXZpYSwgUGx1cmluYXRpb25hbCBTdGF0ZSBvZlwiLCBmbGFnOiBcImZsYWctYm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCIsIGZsYWc6IFwiZmxhZy1icVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJhemlsXCIsIGZsYWc6IFwiZmxhZy1iclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFoYW1hc1wiLCBmbGFnOiBcImZsYWctYnNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJodXRhblwiLCBmbGFnOiBcImZsYWctYnRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvdXZldCBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLWJ2XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3Rzd2FuYVwiLCBmbGFnOiBcImZsYWctYndcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGFydXNcIiwgZmxhZzogXCJmbGFnLWJ5XCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxpemVcIiwgZmxhZzogXCJmbGFnLWJ6XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW5hZGFcIiwgZmxhZzogXCJmbGFnLWNhXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb2NvcyAoS2VlbGluZykgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctY2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbmdvLCB0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGVcIiwgZmxhZzogXCJmbGFnLWNkXCIgfSxcclxuICAgIHsgbmFtZTogXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWNmXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb25nb1wiLCBmbGFnOiBcImZsYWctY2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3aXR6ZXJsYW5kXCIsIGZsYWc6IFwiZmxhZy1jaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ8O0dGUgZCdJdm9pcmVcIiwgZmxhZzogXCJmbGFnLWNpXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb29rIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWNrXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGlsZVwiLCBmbGFnOiBcImZsYWctY2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbWVyb29uXCIsIGZsYWc6IFwiZmxhZy1jbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hpbmFcIiwgZmxhZzogXCJmbGFnLWNuXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb2xvbWJpYVwiLCBmbGFnOiBcImZsYWctY29cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvc3RhIFJpY2FcIiwgZmxhZzogXCJmbGFnLWNyXCIgfSxcclxuICAgIHsgbmFtZTogXCJDdWJhXCIsIGZsYWc6IFwiZmxhZy1jdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FibyBWZXJkZVwiLCBmbGFnOiBcImZsYWctY3ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN1cmHDp2FvXCIsIGZsYWc6IFwiZmxhZy1jd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hyaXN0bWFzIElzbGFuZFwiLCBmbGFnOiBcImZsYWctY3hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN5cHJ1c1wiLCBmbGFnOiBcImZsYWctY3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN6ZWNoIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1jelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2VybWFueVwiLCBmbGFnOiBcImZsYWctZGVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRqaWJvdXRpXCIsIGZsYWc6IFwiZmxhZy1kalwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGVubWFya1wiLCBmbGFnOiBcImZsYWctZGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRvbWluaWNhXCIsIGZsYWc6IFwiZmxhZy1kbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRG9taW5pY2FuIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1kb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWxnZXJpYVwiLCBmbGFnOiBcImZsYWctZHpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVjdWFkb3JcIiwgZmxhZzogXCJmbGFnLWVjXCIgfSxcclxuICAgIHsgbmFtZTogXCJFc3RvbmlhXCIsIGZsYWc6IFwiZmxhZy1lZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWd5cHRcIiwgZmxhZzogXCJmbGFnLWVnXCIgfSxcclxuICAgIHsgbmFtZTogXCJXZXN0ZXJuIFNhaGFyYVwiLCBmbGFnOiBcImZsYWctZWhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVyaXRyZWFcIiwgZmxhZzogXCJmbGFnLWVyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTcGFpblwiLCBmbGFnOiBcImZsYWctZXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkV0aGlvcGlhXCIsIGZsYWc6IFwiZmxhZy1ldFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmlubGFuZFwiLCBmbGFnOiBcImZsYWctZmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZpamlcIiwgZmxhZzogXCJmbGFnLWZqXCIgfSxcclxuICAgIHsgbmFtZTogXCJGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcylcIiwgZmxhZzogXCJmbGFnLWZrXCIgfSxcclxuICAgIHsgbmFtZTogXCJNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIG9mXCIsIGZsYWc6IFwiZmxhZy1mbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmFyb2UgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctZm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyYW5jZVwiLCBmbGFnOiBcImZsYWctZnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdhYm9uXCIsIGZsYWc6IFwiZmxhZy1nYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIEtpbmdkb20gb2YgR3JlYXQgQnJpdGFpbiBhbmQgTm9ydGhlcm4gSXJlbGFuZFwiLCBmbGFnOiBcImZsYWctZ2JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZW5hZGFcIiwgZmxhZzogXCJmbGFnLWdkXCIgfSxcclxuICAgIHsgbmFtZTogXCJHZW9yZ2lhXCIsIGZsYWc6IFwiZmxhZy1nZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIEd1aWFuYVwiLCBmbGFnOiBcImZsYWctZ2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1ZXJuc2V5XCIsIGZsYWc6IFwiZmxhZy1nZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2hhbmFcIiwgZmxhZzogXCJmbGFnLWdoXCIgfSxcclxuICAgIHsgbmFtZTogXCJHaWJyYWx0YXJcIiwgZmxhZzogXCJmbGFnLWdpXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVlbmxhbmRcIiwgZmxhZzogXCJmbGFnLWdsXCIgfSxcclxuICAgIHsgbmFtZTogXCJHYW1iaWFcIiwgZmxhZzogXCJmbGFnLWdtXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWluZWFcIiwgZmxhZzogXCJmbGFnLWduXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWFkZWxvdXBlXCIsIGZsYWc6IFwiZmxhZy1ncFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXF1YXRvcmlhbCBHdWluZWFcIiwgZmxhZzogXCJmbGFnLWdxXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVlY2VcIiwgZmxhZzogXCJmbGFnLWdyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBHZW9yZ2lhIGFuZCB0aGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctZ3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YXRlbWFsYVwiLCBmbGFnOiBcImZsYWctZ3RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YW1cIiwgZmxhZzogXCJmbGFnLWd1XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWluZWEtQmlzc2F1XCIsIGZsYWc6IFwiZmxhZy1nd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3V5YW5hXCIsIGZsYWc6IFwiZmxhZy1neVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9uZyBLb25nXCIsIGZsYWc6IFwiZmxhZy1oa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1obVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9uZHVyYXNcIiwgZmxhZzogXCJmbGFnLWhuXCIgfSxcclxuICAgIHsgbmFtZTogXCJDcm9hdGlhXCIsIGZsYWc6IFwiZmxhZy1oclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSGFpdGlcIiwgZmxhZzogXCJmbGFnLWh0XCIgfSxcclxuICAgIHsgbmFtZTogXCJIdW5nYXJ5XCIsIGZsYWc6IFwiZmxhZy1odVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSW5kb25lc2lhXCIsIGZsYWc6IFwiZmxhZy1pZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJlbGFuZFwiLCBmbGFnOiBcImZsYWctaWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklzcmFlbFwiLCBmbGFnOiBcImZsYWctaWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklzbGUgb2YgTWFuXCIsIGZsYWc6IFwiZmxhZy1pbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSW5kaWFcIiwgZmxhZzogXCJmbGFnLWluXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnlcIiwgZmxhZzogXCJmbGFnLWlvXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmFxXCIsIGZsYWc6IFwiZmxhZy1pcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJhbiwgSXNsYW1pYyBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctaXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkljZWxhbmRcIiwgZmxhZzogXCJmbGFnLWlzXCIgfSxcclxuICAgIHsgbmFtZTogXCJJdGFseVwiLCBmbGFnOiBcImZsYWctaXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkplcnNleVwiLCBmbGFnOiBcImZsYWctamVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkphbWFpY2FcIiwgZmxhZzogXCJmbGFnLWptXCIgfSxcclxuICAgIHsgbmFtZTogXCJKb3JkYW5cIiwgZmxhZzogXCJmbGFnLWpvXCIgfSxcclxuICAgIHsgbmFtZTogXCJKYXBhblwiLCBmbGFnOiBcImZsYWctanBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktlbnlhXCIsIGZsYWc6IFwiZmxhZy1rZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS3lyZ3l6c3RhblwiLCBmbGFnOiBcImZsYWcta2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbWJvZGlhXCIsIGZsYWc6IFwiZmxhZy1raFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2lyaWJhdGlcIiwgZmxhZzogXCJmbGFnLWtpXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb21vcm9zXCIsIGZsYWc6IFwiZmxhZy1rbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsIGZsYWc6IFwiZmxhZy1rblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWtwXCIgfSxcclxuICAgIHsgbmFtZTogXCJLb3JlYSwgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWtyXCIgfSxcclxuICAgIHsgbmFtZTogXCJLdXdhaXRcIiwgZmxhZzogXCJmbGFnLWt3XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYXltYW4gSXNsYW5kc1wiLCBmbGFnOiBcImZsYWcta3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkthemFraHN0YW5cIiwgZmxhZzogXCJmbGFnLWt6XCIgfSxcclxuICAgIHsgbmFtZTogXCJMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctbGFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxlYmFub25cIiwgZmxhZzogXCJmbGFnLWxiXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBMdWNpYVwiLCBmbGFnOiBcImZsYWctbGNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpZWNodGVuc3RlaW5cIiwgZmxhZzogXCJmbGFnLWxpXCIgfSxcclxuICAgIHsgbmFtZTogXCJTcmkgTGFua2FcIiwgZmxhZzogXCJmbGFnLWxrXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWJlcmlhXCIsIGZsYWc6IFwiZmxhZy1sclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGVzb3Rob1wiLCBmbGFnOiBcImZsYWctbHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpdGh1YW5pYVwiLCBmbGFnOiBcImZsYWctbHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkx1eGVtYm91cmdcIiwgZmxhZzogXCJmbGFnLWx1XCIgfSxcclxuICAgIHsgbmFtZTogXCJMYXR2aWFcIiwgZmxhZzogXCJmbGFnLWx2XCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWJ5YVwiLCBmbGFnOiBcImZsYWctbHlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vcm9jY29cIiwgZmxhZzogXCJmbGFnLW1hXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb25hY29cIiwgZmxhZzogXCJmbGFnLW1jXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb2xkb3ZhLCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctbWRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbnRlbmVncm9cIiwgZmxhZzogXCJmbGFnLW1lXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KVwiLCBmbGFnOiBcImZsYWctbWZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hZGFnYXNjYXJcIiwgZmxhZzogXCJmbGFnLW1nXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXJzaGFsbCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1taFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFjZWRvbmlhLCB0aGUgZm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1ta1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsaVwiLCBmbGFnOiBcImZsYWctbWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk15YW5tYXJcIiwgZmxhZzogXCJmbGFnLW1tXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb25nb2xpYVwiLCBmbGFnOiBcImZsYWctbW5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hY2FvXCIsIGZsYWc6IFwiZmxhZy1tb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1tcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFydGluaXF1ZVwiLCBmbGFnOiBcImZsYWctbXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hdXJpdGFuaWFcIiwgZmxhZzogXCJmbGFnLW1yXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb250c2VycmF0XCIsIGZsYWc6IFwiZmxhZy1tc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsdGFcIiwgZmxhZzogXCJmbGFnLW10XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXVyaXRpdXNcIiwgZmxhZzogXCJmbGFnLW11XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxkaXZlc1wiLCBmbGFnOiBcImZsYWctbXZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGF3aVwiLCBmbGFnOiBcImZsYWctbXdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1leGljb1wiLCBmbGFnOiBcImZsYWctbXhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGF5c2lhXCIsIGZsYWc6IFwiZmxhZy1teVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW96YW1iaXF1ZVwiLCBmbGFnOiBcImZsYWctbXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hbWliaWFcIiwgZmxhZzogXCJmbGFnLW5hXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXcgQ2FsZWRvbmlhXCIsIGZsYWc6IFwiZmxhZy1uY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmlnZXJcIiwgZmxhZzogXCJmbGFnLW5lXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3Jmb2xrIElzbGFuZFwiLCBmbGFnOiBcImZsYWctbmZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pZ2VyaWFcIiwgZmxhZzogXCJmbGFnLW5nXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWNhcmFndWFcIiwgZmxhZzogXCJmbGFnLW5pXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXRoZXJsYW5kc1wiLCBmbGFnOiBcImZsYWctbmxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcndheVwiLCBmbGFnOiBcImZsYWctbm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5lcGFsXCIsIGZsYWc6IFwiZmxhZy1ucFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmF1cnVcIiwgZmxhZzogXCJmbGFnLW5yXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaXVlXCIsIGZsYWc6IFwiZmxhZy1udVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV3IFplYWxhbmRcIiwgZmxhZzogXCJmbGFnLW56XCIgfSxcclxuICAgIHsgbmFtZTogXCJPbWFuXCIsIGZsYWc6IFwiZmxhZy1vbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFuYW1hXCIsIGZsYWc6IFwiZmxhZy1wYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGVydVwiLCBmbGFnOiBcImZsYWctcGVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBQb2x5bmVzaWFcIiwgZmxhZzogXCJmbGFnLXBmXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYXB1YSBOZXcgR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1wZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGhpbGlwcGluZXNcIiwgZmxhZzogXCJmbGFnLXBoXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWtpc3RhblwiLCBmbGFnOiBcImZsYWctcGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBvbGFuZFwiLCBmbGFnOiBcImZsYWctcGxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIiwgZmxhZzogXCJmbGFnLXBtXCIgfSxcclxuICAgIHsgbmFtZTogXCJQaXRjYWlyblwiLCBmbGFnOiBcImZsYWctcG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlB1ZXJ0byBSaWNvXCIsIGZsYWc6IFwiZmxhZy1wclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwiLCBmbGFnOiBcImZsYWctcHNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBvcnR1Z2FsXCIsIGZsYWc6IFwiZmxhZy1wdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFsYXVcIiwgZmxhZzogXCJmbGFnLXB3XCIgfSxcclxuICAgIHsgbmFtZTogXCJQYXJhZ3VheVwiLCBmbGFnOiBcImZsYWctcHlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlFhdGFyXCIsIGZsYWc6IFwiZmxhZy1xYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUsOpdW5pb25cIiwgZmxhZzogXCJmbGFnLXJlXCIgfSxcclxuICAgIHsgbmFtZTogXCJSb21hbmlhXCIsIGZsYWc6IFwiZmxhZy1yb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2VyYmlhXCIsIGZsYWc6IFwiZmxhZy1yc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUnVzc2lhbiBGZWRlcmF0aW9uXCIsIGZsYWc6IFwiZmxhZy1ydVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUndhbmRhXCIsIGZsYWc6IFwiZmxhZy1yd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2F1ZGkgQXJhYmlhXCIsIGZsYWc6IFwiZmxhZy1zYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU29sb21vbiBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1zYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2V5Y2hlbGxlc1wiLCBmbGFnOiBcImZsYWctc2NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN1ZGFuXCIsIGZsYWc6IFwiZmxhZy1zZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dlZGVuXCIsIGZsYWc6IFwiZmxhZy1zZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2luZ2Fwb3JlXCIsIGZsYWc6IFwiZmxhZy1zZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGFcIiwgZmxhZzogXCJmbGFnLXNoXCIgfSxcclxuICAgIHsgbmFtZTogXCJTbG92ZW5pYVwiLCBmbGFnOiBcImZsYWctc2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIiwgZmxhZzogXCJmbGFnLXNqXCIgfSxcclxuICAgIHsgbmFtZTogXCJTbG92YWtpYVwiLCBmbGFnOiBcImZsYWctc2tcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpZXJyYSBMZW9uZVwiLCBmbGFnOiBcImZsYWctc2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbiBNYXJpbm9cIiwgZmxhZzogXCJmbGFnLXNtXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZW5lZ2FsXCIsIGZsYWc6IFwiZmxhZy1zblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU29tYWxpYVwiLCBmbGFnOiBcImZsYWctc29cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN1cmluYW1lXCIsIGZsYWc6IFwiZmxhZy1zclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggU3VkYW5cIiwgZmxhZzogXCJmbGFnLXNzXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIiwgZmxhZzogXCJmbGFnLXN0XCIgfSxcclxuICAgIHsgbmFtZTogXCJFbCBTYWx2YWRvclwiLCBmbGFnOiBcImZsYWctc3ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIiwgZmxhZzogXCJmbGFnLXN4XCIgfSxcclxuICAgIHsgbmFtZTogXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctc3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3YXppbGFuZFwiLCBmbGFnOiBcImZsYWctc3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctdGNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoYWRcIiwgZmxhZzogXCJmbGFnLXRkXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXNcIiwgZmxhZzogXCJmbGFnLXRmXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb2dvXCIsIGZsYWc6IFwiZmxhZy10Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGhhaWxhbmRcIiwgZmxhZzogXCJmbGFnLXRoXCIgfSxcclxuICAgIHsgbmFtZTogXCJUYWppa2lzdGFuXCIsIGZsYWc6IFwiZmxhZy10alwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9rZWxhdVwiLCBmbGFnOiBcImZsYWctdGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRpbW9yLUxlc3RlXCIsIGZsYWc6IFwiZmxhZy10bFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya21lbmlzdGFuXCIsIGZsYWc6IFwiZmxhZy10bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVuaXNpYVwiLCBmbGFnOiBcImZsYWctdG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRvbmdhXCIsIGZsYWc6IFwiZmxhZy10b1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya2V5XCIsIGZsYWc6IFwiZmxhZy10clwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wiLCBmbGFnOiBcImZsYWctdHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1dmFsdVwiLCBmbGFnOiBcImZsYWctdHZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmFcIiwgZmxhZzogXCJmbGFnLXR3XCIgfSxcclxuICAgIHsgbmFtZTogXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy10elwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVWtyYWluZVwiLCBmbGFnOiBcImZsYWctdWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVnYW5kYVwiLCBmbGFnOiBcImZsYWctdWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctdW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBTdGF0ZXMgb2YgQW1lcmljYVwiLCBmbGFnOiBcImZsYWctdXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVydWd1YXlcIiwgZmxhZzogXCJmbGFnLXV5XCIgfSxcclxuICAgIHsgbmFtZTogXCJVemJla2lzdGFuXCIsIGZsYWc6IFwiZmxhZy11elwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSG9seSBTZWVcIiwgZmxhZzogXCJmbGFnLXZhXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLCBmbGFnOiBcImZsYWctdmNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZlbmV6dWVsYSwgQm9saXZhcmlhbiBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctdmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzLCBCcml0aXNoXCIsIGZsYWc6IFwiZmxhZy12Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlyZ2luIElzbGFuZHMsIFUuUy5cIiwgZmxhZzogXCJmbGFnLXZpXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaWV0IE5hbVwiLCBmbGFnOiBcImZsYWctdm5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZhbnVhdHVcIiwgZmxhZzogXCJmbGFnLXZ1XCIgfSxcclxuICAgIHsgbmFtZTogXCJXYWxsaXMgYW5kIEZ1dHVuYVwiLCBmbGFnOiBcImZsYWctd2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbW9hXCIsIGZsYWc6IFwiZmxhZy13c1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiWWVtZW5cIiwgZmxhZzogXCJmbGFnLXllXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXlvdHRlXCIsIGZsYWc6IFwiZmxhZy15dFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggQWZyaWNhXCIsIGZsYWc6IFwiZmxhZy16YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiWmFtYmlhXCIsIGZsYWc6IFwiZmxhZy16bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiWmltYmFid2VcIiwgZmxhZzogXCJmbGFnLXp3XCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCB1cGRhdGVVc2VyRmxhZ3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUudXNlckZsYWdzID0gJHNjb3BlLmN1cnJlbnRVc2VyPy5mbGFnc1xyXG4gICAgICA/IGNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGNvdW50cnkpIHtcclxuICAgICAgICAgIHJldHVybiAkc2NvcGUuY3VycmVudFVzZXIuZmxhZ3MuaW5jbHVkZXMoY291bnRyeS5mbGFnKTtcclxuICAgICAgICB9KVxyXG4gICAgICA6IFtdO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5kYXRlT3B0aW9ucyA9IHtcclxuICAgIG1heERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICBtaW5EYXRlOiBuZXcgRGF0ZSgxOTAwLCAxLCAxKSxcclxuICAgIGluaXREYXRlOiBuZXcgRGF0ZSgyMDAwLCAxLCAxKSxcclxuICAgIGRhdGVwaWNrZXJNb2RlOiBcInllYXJcIixcclxuICB9O1xyXG5cclxuICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSB0cnVlO1xyXG4gICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9IHRydWU7XHJcblxyXG4gICRzY29wZS50b2dnbGVVc2VybmFtZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS51c2VybmFtZVRvZ2dsZSA9ICEkc2NvcGUudXNlcm5hbWVUb2dnbGU7XHJcbiAgICAkc2NvcGUubmV3VXNlcm5hbWUgPSAkc2NvcGUuY3VycmVudFVzZXIudXNlcm5hbWU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLm5ld1Bhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5jb25maXJtUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gISRzY29wZS5wYXNzd29yZFRvZ2dsZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uIChwYXNzd29yZCkge1xyXG4gICAgaWYgKHBhc3N3b3JkKSB7XHJcbiAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgVXNlclN2Yy5jaGVja1Bhc3N3b3JkKHVzZXIsIHBhc3N3b3JkKS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAob2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgIGlmIChuZXdQYXNzd29yZCkge1xyXG4gICAgICBpZiAobmV3UGFzc3dvcmQgPT0gY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgdmFyIHVzZXIgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICAgIFVzZXJTdmMuY2hhbmdlUGFzc3dvcmQodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKS50aGVuKFxyXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUudG9hc3QoXCJQYXNzd29yZCBjaGFuZ2VkXCIpO1xyXG4gICAgICAgICAgICAkc2NvcGUub2xkUGFzc3dvcmQgPSBudWxsO1xyXG4gICAgICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzY29wZS50b2FzdChcIlBhc3N3b3JkIGNoYW5nZSBmYWlsZWRcIik7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbmFsQmcgPSAkKFwiLnBhc3N3b3JkXCIpLmNzcyhcImJhY2tncm91bmRDb2xvclwiKTtcclxuICAgICAgICAkKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjZDMVwiIH0sIDIwMCkuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogb3JpZ2luYWxCZyB9LCAyMDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXJuYW1lKSB7XHJcbiAgICAkc2NvcGUuJGVtaXQoXCJsb2FkaW5nXCIpO1xyXG4gICAgVXNlclN2Yy5jaGFuZ2VVc2VybmFtZSgkc2NvcGUuY3VycmVudFVzZXIuX2lkLCB1c2VybmFtZSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwidXBkYXRlXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLnRvYXN0KHVzZXJuYW1lICsgXCIgYWxyZWFkeSBpbiB1c2VcIik7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS51cGRhdGVVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLiRlbWl0KFwibG9hZGluZ1wiKTtcclxuICAgIFVzZXJTdmMudXBkYXRlVXNlcih7IC4uLiRzY29wZS5jdXJyZW50VXNlciwgZmxhZ3M6ICRzY29wZS51c2VyRmxhZ3MubWFwKCh7IGZsYWcgfSkgPT4gZmxhZykgfSkudGhlbihcclxuICAgICAgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLiRlbWl0KFwidXBkYXRlXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUubG9hZENvdW50cmllcyA9IGZ1bmN0aW9uICgkcXVlcnkpIHtcclxuICAgIHJldHVybiBjb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChjb3VudHJ5KSB7XHJcbiAgICAgIHJldHVybiBjb3VudHJ5Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKCRxdWVyeS50b0xvd2VyQ2FzZSgpKSAhPSAtMTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCAoKSA9PiB7XHJcbiAgICB1cGRhdGVVc2VyRmxhZ3MoKTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignU2tpbGxzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR3aW5kb3cpIHtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkU2tpbGwgPSAwO1xyXG4gICRzY29wZS5za2lsbHNWaXNpYmxlID0gZmFsc2U7XHJcbiAgJHNjb3BlLnByb2plY3RzID0gW107XHJcblxyXG4gICRzY29wZS5sYWJlbHMgPSBbXCJEb3dubG9hZCBTYWxlc1wiLCBcIkluLVN0b3JlIFNhbGVzXCIsIFwiTWFpbC1PcmRlciBTYWxlc1wiXTtcclxuICAkc2NvcGUuZGF0YSA9IFszMDAsIDUwMCwgMTAwXTtcclxuXHJcbiAgJC5nZXRKU09OKCcvZXhwZXJpZW5jZS5qc29uJywgZnVuY3Rpb24oIGRhdGEgKSB7XHJcbiAgICAkc2NvcGUucHJvamVjdHMgPSBkYXRhLnJlZHVjZSgocHJvamVjdHMsIGVtcGxveWVyKSA9PiB7XHJcbiAgICAgIGlmIChlbXBsb3llci5wcm9qZWN0cykgcmV0dXJuIGVtcGxveWVyLnByb2plY3RzLmNvbmNhdChwcm9qZWN0cyk7XHJcbiAgICAgIGVsc2UgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgfSwge30pO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZmlsdGVyZWRQcm9qZWN0cyA9ICgpID0+ICRzY29wZS5wcm9qZWN0c1xyXG4gICAgLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5za2lsbHMgJiYgcHJvamVjdC5za2lsbHMuaW5jbHVkZXMoJHNjb3BlLnNlbGVjdGVkU2tpbGwuY29kZSkpXHJcblxyXG4gICQuZ2V0SlNPTignL3NraWxscy5qc29uJywgZnVuY3Rpb24oIGRhdGEgKSB7XHJcblxyXG4gICAgY29uc3Qgc2tpbGxzID0gZGF0YVxyXG4gICAgLmZpbHRlcigoc2tpbGwpID0+IHNraWxsLmVuYWJsZWQpXHJcblxyXG4gICAgJHNjb3BlLmNhdGVnb3JpZXMgPSBza2lsbHNcclxuICAgIC5yZWR1Y2UoZnVuY3Rpb24oY2F0ZWdvcmllcywgc2tpbGwpIHtcclxuICAgICAgaWYgKCFjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldID0gW3NraWxsXVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldLnB1c2goc2tpbGwpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwgPSBmdW5jdGlvbiAoc2tpbGwpIHtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwgPSBza2lsbDtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwuY2hhcnRPcHRpb25zID0ge1xyXG4gICAgICAgIGN1dG91dFBlcmNlbnRhZ2UgOiA4MCxcclxuICAgICAgICBjaXJjdW1mZXJlbmNlOiAyICogTWF0aC5QSSxcclxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gICAgICAgIHRvb2x0aXBzOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkU2tpbGwuY2hhcnRTdHlsZSA9IHtcclxuICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoL3NraWxscy8nICsgJHNjb3BlLnNlbGVjdGVkU2tpbGwuaW1hZ2UgKyAnKScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcmVwZWF0JzogJ25vLXJlcGVhdCcsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtc2l6ZSc6ICc2MCUnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogJzUwJSA1MCUnXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZFNraWxsKCRzY29wZS5za2lsbHNbMF0pO1xyXG5cclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCAkc2NlLCAkbG9jYXRpb24sIFRlblRoaW5nc1N2YywgVXNlclN2Yykge1xyXG4gICAgbGV0IHBhZ2UgPSAxO1xyXG4gICAgJHNjb3BlLmxpc3RzID0gW107XHJcbiAgICAkc2NvcGUuc2VhcmNoID0gXCJcIjtcclxuICAgICRzY29wZS5zZWFyY2hGaWVsZCA9IFwiYWxsXCI7XHJcbiAgICAkc2NvcGUubmV3SXRlbSA9IHt9O1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IFwiRU5cIjtcclxuICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gW107XHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW107XHJcbiAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICBsZXQgZXhoYXVzdGVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3Qgb2JqZWN0Q2F0ZWdvcmllcyA9IFtcImN1bHR1cmVcIiwgXCJuYXR1cmVcIiwgXCJtaXNjXCIsIFwic29jaWV0eVwiLCBcInNwb3J0c1wiXTtcclxuICAgICRzY29wZS5ibHVyYlR5cGVzID0gW1xyXG4gICAgICB7IGFwaTogXCJtb3ZpZXNcIiwgY2F0ZWdvcmllczogW1wibW92aWVzXCJdLCB0ZXh0OiBcIkdldCBtb3ZpZSBwb3N0ZXJzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwidHZcIiwgY2F0ZWdvcmllczogW1widGVsZXZpc2lvblwiXSwgdGV4dDogXCJHZXQgdHYgcG9zdGVyc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcImFjdG9yc1wiLCBjYXRlZ29yaWVzOiBbXCJtb3ZpZXNcIiwgXCJ0ZWxldmlzaW9uXCJdLCB0ZXh0OiBcIkdldCBhY3RvciBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwiYm9va3NcIiwgY2F0ZWdvcmllczogW1wibGl0ZXJhdHVyZVwiXSwgdGV4dDogXCJHZXQgYm9vayBjb3ZlcnNcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJtdXNpY3ZpZGVvc1wiLCBjYXRlZ29yaWVzOiBbXCJtdXNpY1wiXSwgdGV4dDogXCJHZXQgbXVzaWMgdmlkZW9zXCIsIGFkbWluT25seTogdHJ1ZSB9LFxyXG4gICAgICB7IGFwaTogXCJ1bnNwbGFzaFwiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBVbnNwbGFzaCBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwicGV4ZWxzXCIsIGNhdGVnb3JpZXM6IG9iamVjdENhdGVnb3JpZXMsIHRleHQ6IFwiR2V0IFBleGVscyBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwid2lraVwiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBXaWtpIHBpY3NcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgXTtcclxuXHJcbiAgICAkc2NvcGUuaGF2ZUNvbW1vbkl0ZW1zID0gKGFycjEsIGFycjIpID0+IHtcclxuICAgICAgcmV0dXJuIGFycjE/LnNvbWUoKGl0ZW0pID0+IGFycjIuaW5jbHVkZXMoaXRlbSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUua2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgLy8gVGFiXHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5jcmVhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICgkKFwiI25ldy12YWx1ZVwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAkKFwiI25ldy1ibHVyYlwiKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgfVxyXG4gICAgICAvLyB1c2UgZS5rZXlDb2RlXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hZGRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBcIm5ld1wiKTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNyZWF0b3I6ICRzY29wZS5jdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB2YWx1ZXM6IFtdLFxyXG4gICAgICAgIGFuc3dlcnM6IDAsXHJcbiAgICAgICAgaXNEeW5hbWljOiB0cnVlLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgIGxhbmd1YWdlOiAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgJHNjb3BlLnNlYXJjaCA9ICRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2g7XHJcbiAgICAgIGlmIChsaXN0KSB7XHJcbiAgICAgICAgaWYgKGxpc3QuX2lkID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAkc2NvcGUuYWRkTGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0Lmxhbmd1YWdlO1xyXG4gICAgICAgICAgICAgICRzY29wZS5yZWFkT25seSA9XHJcbiAgICAgICAgICAgICAgICAhJHNjb3BlLnNlbGVjdGVkTGlzdCB8fFxyXG4gICAgICAgICAgICAgICAgKCEkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4gJiZcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jcmVhdG9yLl9pZCAhPT0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCAmJlxyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHt9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldENhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldEZpbHRlckNvdW50ID0gKCkgPT5cclxuICAgICAgT2JqZWN0LnZhbHVlcygkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIpLmxlbmd0aCArIE9iamVjdC52YWx1ZXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKS5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY3VycmVudFVzZXIpIHJldHVybjtcclxuICAgICAgY29uc3QgeyBkYXRhOiBsYW5ndWFnZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKTtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IGxhbmd1YWdlcztcclxuICAgICAgcmVzZXRMYW5ndWFnZUZpbHRlcigpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3JpZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcclxuICAgICAgY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XHJcbiAgICAgIHJlc2V0Q2F0ZWdvcnlGaWx0ZXIoKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBsYW5ndWFnZVN0YXRzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMoKTtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBsYW5ndWFnZVN0YXRzLnJlZHVjZSgocmVzdWx0LCB7IF9pZCwgY291bnQgfSkgPT4ge1xyXG4gICAgICAgIHJlc3VsdFtfaWQubGFuZ3VhZ2VdID0gKHJlc3VsdFtfaWQubGFuZ3VhZ2VdIHx8IDApICsgY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSwge30pO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3J5U3RhdHMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cygpO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0cyA9IGNhdGVnb3J5U3RhdHMucmVkdWNlKChyZXN1bHQsIHsgX2lkLCBjb3VudCB9KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W19pZF0gPSBjb3VudDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCkge1xyXG4gICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoeyBfaWQ6ICRsb2NhdGlvbi5zZWFyY2goKS5saXN0IH0pO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5zZWFyY2ggPSAkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoIHx8IFwiXCI7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2VhcmNoTGlzdHMgPSBhc3luYyAodmlld1ZhbHVlKSA9PiB7XHJcbiAgICAgIGlmICh2aWV3VmFsdWUubGVuZ3RoID49IDMpIHtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5zZWFyY2hMaXN0cyh2aWV3VmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRTZWFyY2hUZXh0ID0gKHRleHQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5zZWFyY2gpIHtcclxuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoYCgkeyRzY29wZS5zZWFyY2h9KWAsIFwiZ2lcIik7XHJcbiAgICAgICAgcmV0dXJuIHRleHQucmVwbGFjZShyZWdleCwgXCI8c3BhbiBjbGFzcz0naGlnaGxpZ2h0Jz4kMTwvc3Bhbj5cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnZhbHVlT3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiBcInZhbHVlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6ICRsb2NhdGlvbi5zZWFyY2goKS5zb3J0IHx8IFwiZGF0ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246ICRsb2NhdGlvbi5zZWFyY2goKS5vcmRlciA/ICRsb2NhdGlvbi5zZWFyY2goKS5vcmRlciA9PT0gXCJkZXNjXCIgOiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXJCeSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLm9yZGVyLmZpZWxkID09PSBmaWVsZCkge1xyXG4gICAgICAgICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPSAhJHNjb3BlLm9yZGVyLmRpcmVjdGlvbjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcInNvcnRcIiwgZmllbGQpO1xyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwib3JkZXJcIiwgJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA/IFwiZGVzY1wiIDogXCJhc2NcIik7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TW9yZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxpc3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gJHNjb3BlLmxpc3RzLmNvbmNhdChsaXN0cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0TGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgIHBhZ2UgPSAxO1xyXG4gICAgICBleGhhdXN0ZWQgPSBmYWxzZTtcclxuICAgICAgZ2V0TGlzdHMoKS50aGVuKChsaXN0cykgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9IGxpc3RzO1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5saW5rVGVsZWdyYW0gPSAoZGF0YSkgPT4ge1xyXG4gICAgICBVc2VyU3ZjLmxpbmtUZWxlZ3JhbSgkc2NvcGUuY3VycmVudFVzZXIuX2lkLCBkYXRhKS50aGVuKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICRzY29wZS50b2FzdChcIlRlbGVncmFtIGFjY291bnQgbGlua2VkXCIpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldFVzZXIoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICRzY29wZS50b2FzdChcIlRlbGVncmFtIGFjY291bnQgbGlua2luZyBmYWlsZWRcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldExhbmd1YWdlRmlsdGVyID0gKGxhbmd1YWdlKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID09PSB0cnVlKSB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID0gISRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWxldGUgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnlGaWx0ZXIgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPT09IHRydWUpIHtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID0gISRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsZXRlICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV07XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVDYXRlZ29yeUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcik7XHJcbiAgICAgIGNvbnN0IGFsbENhdGVnb3JpZXMgPVxyXG4gICAgICAgIGNhdGVnb3JpZXMubGVuZ3RoID09PSBjYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0pLmxlbmd0aDtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0gJHNjb3BlLmNhdGVnb3JpZXMucmVkdWNlKChmaWx0ZXIsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgZmlsdGVyW2NhdGVnb3J5XSA9ICFhbGxDYXRlZ29yaWVzO1xyXG4gICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRDYXRlZ29yeUxhYmVsID0gKGNhdGVnb3JpZXMpID0+IHtcclxuICAgICAgaWYgKCFjYXRlZ29yaWVzIHx8IGNhdGVnb3JpZXMubGVuZ3RoID09PSAwKSByZXR1cm4gXCJcIjtcclxuICAgICAgY29uc3QgbWFpbkNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmZpbHRlcigoY2F0ZWdvcnkpID0+ICFjYXRlZ29yeS5pbmNsdWRlcyhcIi5cIikpO1xyXG4gICAgICByZXR1cm4gbWFpbkNhdGVnb3JpZXNcclxuICAgICAgICAuc29ydCgpXHJcbiAgICAgICAgLm1hcCgoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHN1YmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKHN1YmNhdGVnb3J5KSA9PiBzdWJjYXRlZ29yeS5zdGFydHNXaXRoKGNhdGVnb3J5KSAmJiBzdWJjYXRlZ29yeSAhPT0gY2F0ZWdvcnkpXHJcbiAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgKHN1YmNhdGVnb3J5KSA9PlxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXNcclxuICAgICAgICAgICAgICAgICAgLmZpbmQoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IGNhdGVnb3J5KVxyXG4gICAgICAgICAgICAgICAgICAuc3ViY2F0ZWdvcmllcy5maW5kKCh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBzdWJjYXRlZ29yeSk/LmxhYmVsLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMuZmluZCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gY2F0ZWdvcnkpLmxhYmVsICtcclxuICAgICAgICAgICAgKHN1YmNhdGVnb3JpZXMubGVuZ3RoID4gMCA/IFwiIChcIiArIHN1YmNhdGVnb3JpZXMuc29ydCgpLmpvaW4oXCIsIFwiKSArIFwiKVwiIDogXCJcIilcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuam9pbihcIiwgXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5sb2FkaW5nIHx8IGV4aGF1c3RlZCkgcmV0dXJuIFtdO1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoICE9PSAkc2NvcGUuc2VhcmNoKSB7XHJcbiAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcInNlYXJjaFwiLCAkc2NvcGUuc2VhcmNoID8gJHNjb3BlLnNlYXJjaCA6IG51bGwpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldExpc3RzKHtcclxuICAgICAgICBwYWdlLFxyXG4gICAgICAgIHNvcnRCeTogJHNjb3BlLm9yZGVyLmZpZWxkLFxyXG4gICAgICAgIG9yZGVyQnk6ICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPyAtMSA6IDEsXHJcbiAgICAgICAgbGltaXQ6IDEwMCxcclxuICAgICAgICAuLi4oJHNjb3BlLnNlYXJjaEZpZWxkID09PSBcImFsbFwiID8geyBzZWFyY2g6ICRzY29wZS5zZWFyY2ggfSA6IHt9KSxcclxuICAgICAgICAuLi4oJHNjb3BlLnNlYXJjaEZpZWxkID09PSBcIm5hbWVcIiA/IHsgbmFtZTogJHNjb3BlLnNlYXJjaCB9IDoge30pLFxyXG4gICAgICAgIGxhbmd1YWdlOiBPYmplY3Qua2V5cygkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIpLmZpbHRlcigobGFuZ3VhZ2UpID0+ICRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZV0gPT09IHRydWUpLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9PT0gdHJ1ZSksXHJcbiAgICAgICAgbGFuZ3VhZ2VOb3Q6IE9iamVjdC5rZXlzKCRzY29wZS5sYW5ndWFnZUZpbHRlcikuZmlsdGVyKChsYW5ndWFnZSkgPT4gJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlXSA9PT0gZmFsc2UpLFxyXG4gICAgICAgIGNhdGVnb3JpZXNOb3Q6IE9iamVjdC5rZXlzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikuZmlsdGVyKFxyXG4gICAgICAgICAgKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID09PSBmYWxzZSxcclxuICAgICAgICApLFxyXG4gICAgICB9KTtcclxuICAgICAgJHNjb3BlLmNvdW50ID0gZGF0YS5jb3VudDtcclxuICAgICAgaWYgKGRhdGEucmVzdWx0Lmxlbmd0aCA8IDEwMCkgZXhoYXVzdGVkID0gdHJ1ZTtcclxuICAgICAgZWxzZSBwYWdlID0gZGF0YS5uZXh0UGFnZTtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgY29uc29sZS5sb2coYFBhZ2UgJHtwYWdlfSBsb2FkZWQsICR7ZGF0YS5yZXN1bHQubGVuZ3RofSBpdGVtc2ApO1xyXG4gICAgICByZXR1cm4gZGF0YS5yZXN1bHQ7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMaXN0TmFtZSA9IChsaXN0SWQpID0+ICRzY29wZS5saXN0cy5maW5kKCh7IF9pZCB9KSA9PiBfaWQgPT09IGxpc3RJZCk/Lm5hbWU7XHJcblxyXG4gICAgJHNjb3BlLnVwZGF0ZVZhbHVlID0gYXN5bmMgKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKCFpdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgJHNjb3BlLmRlbGV0ZVZhbHVlKGl0ZW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRJdGVtUmVzcG9uc2UgPSBhd2FpdCBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdFZhbHVlKCRzY29wZS5zZWxlY3RlZExpc3QsIGl0ZW0pO1xyXG4gICAgICAgIGl0ZW0uYmx1cmJUeXBlID0gdXBkYXRlZEl0ZW1SZXNwb25zZS5kYXRhLmJsdXJiVHlwZTtcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNyZWF0ZVZhbHVlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoISRzY29wZS5uZXdJdGVtLnZhbHVlKSByZXR1cm47XHJcbiAgICAgIGlmICgkc2NvcGUuaGFzRHVwbGljYXRlKCkpIHtcclxuICAgICAgICByZXR1cm4gYWxlcnQoYCR7JHNjb3BlLm5ld0l0ZW0udmFsdWV9IGlzIGFscmVhZHkgaW4gdGhlIGxpc3RgKTtcclxuICAgICAgfSBlbHNlIGlmICghJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5wdXNoKHsgLi4uJHNjb3BlLm5ld0l0ZW0gfSk7XHJcbiAgICAgICAgaWYgKCRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCkge1xyXG4gICAgICAgICAgYXdhaXQgJHNjb3BlLnVwc2VydExpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRJdGVtUmVzcG9uc2UgPSBhd2FpdCBUZW5UaGluZ3NTdmMuY3JlYXRlTGlzdFZhbHVlKCRzY29wZS5zZWxlY3RlZExpc3QsICRzY29wZS5uZXdJdGVtKTtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5wdXNoKGNyZWF0ZWRJdGVtUmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLm5ld0l0ZW0udmFsdWUpO1xyXG4gICAgICAgICRzY29wZS50b2FzdChgXCIkeyRzY29wZS5uZXdJdGVtLnZhbHVlfVwiIGFkZGVkYCk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgICAkc2NvcGUubmV3SXRlbS5ibHVyYiA9IFwiXCI7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICQoXCIjbmV3LXZhbHVlXCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICAgICAgfSk7XHJcbiAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZVZhbHVlID0gKGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgdmFsdWVUb0RlbGV0ZSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5kZWxldGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgaXRlbSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcy5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5faWQgIT09IGl0ZW0uX2lkKTtcclxuICAgICAgICAkc2NvcGUudG9hc3QoYFwiJHt2YWx1ZVRvRGVsZXRlfVwiIHJlbW92ZWRgKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS51cGRhdGVMaXN0ID0gKGxpc3QsIHVwZGF0ZXMpID0+IHtcclxuICAgICAgaWYgKGxpc3QuX2lkICYmIGxpc3QuX2lkICE9PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgLi4udXBkYXRlcyxcclxuICAgICAgICAgIF9pZDogbGlzdC5faWQsXHJcbiAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICRzY29wZS5zYXZpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGNvbnN0IGxpc3RJbmRleCA9ICRzY29wZS5saXN0cy5maW5kSW5kZXgoKGxpc3QpID0+IGxpc3QuX2lkID09PSBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdHNbbGlzdEluZGV4XSA9IGRhdGE7XHJcbiAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwc2VydExpc3QgPSAobGlzdCwgdXBkYXRlcykgPT4ge1xyXG4gICAgICAkc2NvcGUuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKGxpc3QudmFsdWVzLmxlbmd0aCA+PSAxMCAmJiBsaXN0Lm5hbWUgJiYgbGlzdC5jYXRlZ29yaWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBpZiAobGlzdC5faWQgJiYgbGlzdC5faWQgIT09IFwibmV3XCIpIHtcclxuICAgICAgICAgIGxldCBjaGFuZ2VzID0gdXBkYXRlcyA/IHVwZGF0ZXMgOiBsaXN0O1xyXG4gICAgICAgICAgZGVsZXRlIGNoYW5nZXMuX2lkO1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgICAuLi5jaGFuZ2VzLFxyXG4gICAgICAgICAgICBfaWQ6IGxpc3QuX2lkLFxyXG4gICAgICAgICAgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkc2NvcGUubGlzdHNbJHNjb3BlLmxpc3RzLmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5faWQgPT09IGRhdGEuX2lkKV0gPSBkYXRhO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuY3JlYXRlTGlzdCgkc2NvcGUuY3VycmVudFVzZXIsICRzY29wZS5zZWxlY3RlZExpc3QpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCA9PT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIGRhdGEuX2lkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCA9IGRhdGEuX2lkO1xyXG4gICAgICAgICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAkc2NvcGUudG9hc3QoYFwiJHtkYXRhLm5hbWV9XCIgY3JlYXRlZGApO1xyXG4gICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oJHNjb3BlLnNlbGVjdGVkTGlzdCwgdXBkYXRlcyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZUxpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBpZiAoIWxpc3QuX2lkKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmNvbmZpcm1lZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmluY2x1ZGVzKGxpc3QuX2lkKSkge1xyXG4gICAgICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSBbbGlzdC5faWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI21vZGFsLWRlbGV0ZS1saXN0c1wiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmRlbGV0ZUxpc3RzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcztcclxuICAgICAgJHNjb3BlLmNvbmZpcm1lZCA9IGZhbHNlO1xyXG4gICAgICAkKFwiI21vZGFsLWRlbGV0ZS1saXN0c1wiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jb25maXJtTWVyZ2VMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBUZW5UaGluZ3NTdmMubWVyZ2VMaXN0cygkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzKTtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gW107XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSBbXTtcclxuICAgICAgJHNjb3BlLmNvbmZpcm1lZCA9IGZhbHNlO1xyXG4gICAgICAkc2NvcGUudG9hc3QoXCJNZXJnZWRcIik7XHJcbiAgICAgICQoXCIjbW9kYWwtbWVyZ2UtbGlzdHNcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY29uZmlybURlbGV0ZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBmb3IgKGNvbnN0IGxpc3RJZCBvZiAkc2NvcGUubGlzdElkc1RvRGVsZXRlKSB7XHJcbiAgICAgICAgYXdhaXQgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3QobGlzdElkKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IG51bGw7XHJcbiAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICRzY29wZS50b2FzdChcIkxpc3RzIGRlbGV0ZWRcIik7XHJcbiAgICAgICQoXCIjbW9kYWwtZGVsZXRlLWxpc3RzXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUhpZ2hsaWdodGVkTGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmxlbmd0aCA9PT0gJHNjb3BlLmxpc3RzLmxlbmd0aCkge1xyXG4gICAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSBbXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gJHNjb3BlLmxpc3RzLm1hcCgoeyBfaWQgfSkgPT4gX2lkKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9ICRzY29wZS5saXN0cy5maWx0ZXIoKHsgX2lkIH0pID0+ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMoX2lkKSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVIaWdobGlnaHRlZExpc3QgPSAobGlzdCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhsaXN0Ll9pZCkpIHtcclxuICAgICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5maWx0ZXIoXHJcbiAgICAgICAgICAoaGlnaGxpZ2h0ZWRMaXN0SWQpID0+IGhpZ2hsaWdodGVkTGlzdElkICE9PSBsaXN0Ll9pZCxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMucHVzaChsaXN0Ll9pZCk7XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMgPSAkc2NvcGUubGlzdHMuZmlsdGVyKCh7IF9pZCB9KSA9PiAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmluY2x1ZGVzKF9pZCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2UgPSAobGlzdCwgbGFuZ3VhZ2UpID0+IHtcclxuICAgICAgbGlzdC5sYW5ndWFnZSA9IGxhbmd1YWdlLmNvZGU7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwgeyBsYW5ndWFnZTogbGFuZ3VhZ2UuY29kZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldERpZmZpY3VsdHkgPSAobGlzdCwgZGlmZmljdWx0eSkgPT4ge1xyXG4gICAgICBsaXN0LmRpZmZpY3VsdHkgPSBkaWZmaWN1bHR5O1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7IGRpZmZpY3VsdHk6IGRpZmZpY3VsdHkgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRGcmVxdWVuY3kgPSAobGlzdCwgZnJlcXVlbmN5KSA9PiB7XHJcbiAgICAgIGxpc3QuZnJlcXVlbmN5ID0gZnJlcXVlbmN5O1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7IGZyZXF1ZW5jeTogZnJlcXVlbmN5IH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBnZXRVcGRhdGVkQ2F0ZWdvcmllcyA9IChsaXN0LCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBsZXQgY2F0ZWdvcmllcyA9IGxpc3QuY2F0ZWdvcmllcztcclxuICAgICAgaWYgKGNhdGVnb3JpZXMuc29tZSgobGlzdENhdGVnb3J5KSA9PiBsaXN0Q2F0ZWdvcnkgPT09IGNhdGVnb3J5KSkge1xyXG4gICAgICAgIGNhdGVnb3JpZXMgPSBsaXN0LmNhdGVnb3JpZXMuZmlsdGVyKChsaXN0Q2F0ZWdvcnkpID0+IGxpc3RDYXRlZ29yeSAhPT0gY2F0ZWdvcnkpO1xyXG4gICAgICAgIGlmICghY2F0ZWdvcnkuaW5jbHVkZXMoXCIuXCIpICYmIGNhdGVnb3JpZXMuc29tZSgobGlzdENhdGVnb3J5KSA9PiBsaXN0Q2F0ZWdvcnkuc3RhcnRzV2l0aChjYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgICBjYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5maWx0ZXIoKGxpc3RDYXRlZ29yeSkgPT4gIWxpc3RDYXRlZ29yeS5zdGFydHNXaXRoKGNhdGVnb3J5KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNhdGVnb3JpZXMucHVzaChjYXRlZ29yeSk7XHJcbiAgICAgICAgaWYgKGNhdGVnb3J5LmluY2x1ZGVzKFwiLlwiKSAmJiAhY2F0ZWdvcmllcy5maW5kKChsaXN0Q2F0ZWdvcnkpID0+IGxpc3RDYXRlZ29yeSA9PT0gY2F0ZWdvcnkuc3BsaXQoXCIuXCIpWzBdKSkge1xyXG4gICAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5LnNwbGl0KFwiLlwiKVswXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnkgPSAobGlzdCwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgY29uc3QgdXBkYXRlZENhdGVnb3JpZXMgPSBnZXRVcGRhdGVkQ2F0ZWdvcmllcyhsaXN0LCBjYXRlZ29yeSk7XHJcbiAgICAgIGlmICh1cGRhdGVkQ2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAkc2NvcGUudG9hc3QoYFlvdSBtdXN0IGhhdmUgYXQgbGVhc3QgMSBjYXRlZ29yeSBmb3IgJHtsaXN0Lm5hbWV9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLnVwc2VydExpc3QobGlzdCwgeyBjYXRlZ29yaWVzOiB1cGRhdGVkQ2F0ZWdvcmllcyB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcmllcyA9IGFzeW5jIChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2F2aW5nID0gdHJ1ZTtcclxuICAgICAgbGV0IGxpc3RzVG9VcGRhdGUgPSBbXTtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLmV2ZXJ5KCh7IGNhdGVnb3JpZXMgfSkgPT4gY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgbGlzdHNUb1VwZGF0ZSA9ICRzY29wZS5oaWdobGlnaHRlZExpc3RzO1xyXG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLnNvbWUoKHsgY2F0ZWdvcmllcyB9KSA9PiBjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICBsaXN0c1RvVXBkYXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMuZmlsdGVyKCh7IGNhdGVnb3JpZXMgfSkgPT4gIWNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaXN0c1RvVXBkYXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHM7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgdXBkYXRlZExpc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgbGlzdHNUb1VwZGF0ZS5tYXAoKGxpc3RUb1VwZGF0ZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdXBkYXRlZENhdGVnb3JpZXMgPSBnZXRVcGRhdGVkQ2F0ZWdvcmllcyhsaXN0VG9VcGRhdGUsIGNhdGVnb3J5KTtcclxuICAgICAgICAgIGlmICh1cGRhdGVkQ2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgJHNjb3BlLnRvYXN0KGBZb3UgbXVzdCBoYXZlIGF0IGxlYXN0IDEgY2F0ZWdvcnkgZm9yICR7bGlzdFRvVXBkYXRlLm5hbWV9YCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gVGVuVGhpbmdzU3ZjLnVwZGF0ZUxpc3Qoe1xyXG4gICAgICAgICAgICAgIF9pZDogbGlzdFRvVXBkYXRlLl9pZCxcclxuICAgICAgICAgICAgICBjYXRlZ29yaWVzOiB1cGRhdGVkQ2F0ZWdvcmllcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICk7XHJcbiAgICAgIHVwZGF0ZWRMaXN0cy5mb3JFYWNoKCh1cGRhdGVkTGlzdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3RJbmRleCA9ICRzY29wZS5saXN0cy5maW5kSW5kZXgoKGxpc3QpID0+IGxpc3QuX2lkID09PSB1cGRhdGVkTGlzdC5faWQpO1xyXG4gICAgICAgICRzY29wZS5saXN0c1tsaXN0SW5kZXhdID0gdXBkYXRlZExpc3Q7XHJcbiAgICAgIH0pO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9ICRzY29wZS5saXN0cy5maWx0ZXIoKHsgX2lkIH0pID0+ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMoX2lkKSk7XHJcbiAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNhdGVnb3J5U3RhdHVzID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5ldmVyeSgoeyBjYXRlZ29yaWVzIH0pID0+IGNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSkge1xyXG4gICAgICAgIHJldHVybiBcImNoZWNrZWRcIjtcclxuICAgICAgfSBlbHNlIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5zb21lKCh7IGNhdGVnb3JpZXMgfSkgPT4gY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgcmV0dXJuIFwicGFydGlhbFwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcInVuY2hlY2tlZFwiO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5oYXNEdXBsaWNhdGUgPSAoKSA9PlxyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ICYmXHJcbiAgICAgICRzY29wZS5uZXdJdGVtLnZhbHVlICYmXHJcbiAgICAgIF8uc29tZShcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyxcclxuICAgICAgICAoYW5zd2VyKSA9PiBhbnN3ZXIudmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpID09ICRzY29wZS5uZXdJdGVtLnZhbHVlLnJlbW92ZUFsbEJ1dExldHRlcnMoKSxcclxuICAgICAgKTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0U2VsZWN0ZWRMaXN0c1RpdGxlID0gKCkgPT4gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMubWFwKChsaXN0KSA9PiBsaXN0Lm5hbWUpLmpvaW4oXCIgLyBcIik7XHJcblxyXG4gICAgJHNjb3BlLmdldEJsdXJicyA9ICh0eXBlKSA9PiB7XHJcbiAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldEJsdXJicygkc2NvcGUuc2VsZWN0ZWRMaXN0LCB0eXBlKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoJHNjb3BlLnNlbGVjdGVkTGlzdCk7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLnRvYXN0KFwiQmx1cmJzIHVwZGF0ZWRcIik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS50b2FzdChcIkJsdXJiIHVwZGF0ZSBmYWlsZWRcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRFbWJlZFVybCA9ICh1cmwpID0+IHtcclxuICAgICAgaWYgKHVybC5pbmNsdWRlcyhcInlvdXR1YmUuY29tXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvWz8mXXY9KFteJl0rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJ5b3V0dS5iZVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL3lvdXR1XFwuYmVcXC8oW14mP10rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJ2aW1lby5jb21cIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC92aW1lb1xcLmNvbVxcLyhcXGQrKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsLmluY2x1ZGVzKFwib3Blbi5zcG90aWZ5XCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgvdHJhY2tcXC8oW14mP10rKS8pWzFdLnRyaW0oKTtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwoYGh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9lbWJlZC90cmFjay8ke3ZpZGVvSWR9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc1Jlc291cmNlVXJsKHVybCk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuIGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9P2F1dG9wbGF5PTFgO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgZ2V0RGF0YSk7XHJcbiAgfSk7XHJcbiIsIi8qanNsaW50IGVzdmVyc2lvbjogNiovXHJcbmFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NBZG1pbkN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgVGVuVGhpbmdzU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8pID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlci5hZG1pbikge1xyXG4gICAgICAgIGdldFVzZXJzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwidXNlcm5hbWVcIixcclxuICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLnJldmVyc2UgPSAhJHNjb3BlLm9yZGVyLnJldmVyc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgcmV2ZXJzZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0UXVldWUgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldFF1ZXVlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucXVldWUgPSByZXNwb25zZS5kYXRhLnJlcGxhY2UoXCIvblwiLCBcIjxici8+XCIpO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgICRzY29wZS5nZXRRdWV1ZSgpO1xyXG5cclxuICAgIFRlblRoaW5nc1N2Yy5nZXRQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICRzY29wZS5wYXVzZWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgZ2V0VXNlcnMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy5nZXRVc2VycygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJzID0gcmVzcG9uc2UuZGF0YS5maWx0ZXIoKHVzZXIpID0+ICF1c2VyLmFkbWluKTtcclxuICAgICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUJhbiA9ICh1c2VyKSA9PiB7XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgVXNlclN2Yy50b2dnbGVCYW4odXNlci5faWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS50b2dnbGVQYXVzZSA9ICh1c2VyKSA9PiB7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy50b2dnbGVQYXVzZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgY29uc29sZS5sb2coJHNjb3BlLnBhdXNlZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0dhbWVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRzdGF0ZVBhcmFtcywgVGVuVGhpbmdzU3ZjLCBVc2VyU3ZjKSB7XHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiB1c2VycyB9ID0gYXdhaXQgVXNlclN2Yy5nZXRVc2VycygpO1xyXG4gICAgICAgICRzY29wZS51c2VycyA9IHVzZXJzLmZpbHRlcigodXNlcikgPT4gIXVzZXIuYWRtaW4pO1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YTogY2F0ZWdvcmllcyB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKTtcclxuICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XHJcbiAgICAgICAgaWYgKCRzdGF0ZVBhcmFtcy5nYW1lKSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0R2FtZSgkc3RhdGVQYXJhbXMuZ2FtZSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLmdhbWUgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUuZ2FtZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldENhdGVnb3J5ID0gYXN5bmMgKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogZGlzYWJsZWRDYXRlZ29yaWVzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMudXBkYXRlR2FtZUNhdGVnb3J5KCRzdGF0ZVBhcmFtcy5nYW1lLCBjYXRlZ29yeSk7XHJcbiAgICAgICRzY29wZS5nYW1lLmRpc2FibGVkQ2F0ZWdvcmllcyA9IGRpc2FibGVkQ2F0ZWdvcmllcztcclxuICAgICAgY29uc29sZS5sb2coZGlzYWJsZWRDYXRlZ29yaWVzLmZpbmQoKGMpID0+IGMgPT09IGNhdGVnb3J5KSk7XHJcbiAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsIGdldERhdGEpO1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzUGxheUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgR2FtZVN2Yykge1xyXG4gICAgJHNjb3BlLmtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIC8vIEVudGVyXHJcbiAgICAgICAgY2FzZSAxMzpcclxuICAgICAgICAgICRzY29wZS5jaGVja0Fuc3dlcigpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgfVxyXG4gICAgICAvLyB1c2UgZS5rZXlDb2RlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXI/LmFkbWluKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiBnYW1lIH0gPSBhd2FpdCBHYW1lU3ZjLmdldFRlbnRoaW5ncygpO1xyXG4gICAgICAgICRzY29wZS5nYW1lID0gZ2FtZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdhbWVcIiwgZ2FtZSk7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaGVja0Fuc3dlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgYW5zd2VyID0gJHNjb3BlLmd1ZXNzO1xyXG4gICAgICAkc2NvcGUuZ3Vlc3MgPSBcIlwiO1xyXG4gICAgICBhd2FpdCBHYW1lU3ZjLmFuc3dlclRlbnRoaW5ncyh1bmRlZmluZWQsIGFuc3dlcik7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRIaW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBHYW1lU3ZjLmdldFRlbnRoaW5nc0hpbnQoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgJChcIiNtYWluLWdhbWVcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNraXBMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBhd2FpdCBHYW1lU3ZjLnNraXBUZW50aGluZ3NMaXN0KCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICQoXCIjbWFpbi1nYW1lXCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCBnZXREYXRhKTtcclxuXHJcbiAgICAkc2NvcGUuJG9uKFwid3M6dGVudGhpbmdzX21lc3NhZ2VcIiwgZnVuY3Rpb24gKF8sIGRhdGEpIHtcclxuICAgICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgaWYgKGRhdGEubWVzc2FnZSkgJHNjb3BlLnRvYXN0KGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgZ2V0RGF0YSgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzU3RhdHNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIFRlblRoaW5nc1N2Yykge1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBbXTtcclxuICAgICRzY29wZS5jYXRlZ29yeVN0YXRzID0geyBsYWJlbHM6IFtdLCBkYXRhc2V0czogW10gfTtcclxuXHJcbiAgICBjb25zdCBsaW5lQ2hhcnRPcHRpb25zID0ge1xyXG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICBwbHVnaW5zOiB7XHJcbiAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgIHRleHQ6IFwiQ2hhcnQuanMgTGluZSBDaGFydFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmN1cnJlbnRVc2VyKSByZXR1cm47XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZVN0YXRzID0gW107XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5sYW5ndWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldENhdGVnb3JpZXMoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRQbGF5U3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IHllYXIgfSkgPT4geWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBtb250aHMgPSBfLnRpbWVzKDEyLCAoaSkgPT4gaSArIDEpO1xyXG4gICAgICAgICRzY29wZS5wbGF5U3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IG1vbnRocyxcclxuICAgICAgICAgIHNlcmllczogeWVhcnMsXHJcbiAgICAgICAgICBkYXRhOiB5ZWFycy5tYXAoKHllYXIpID0+XHJcbiAgICAgICAgICAgIG1vbnRocy5tYXAoKG1vbnRoKSA9PiBkYXRhLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubW9udGggPT09IG1vbnRoICYmIGl0ZW0ueWVhciA9PT0geWVhcik/LnVuaXF1ZVBsYXllcnMgfHwgMCksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgb3B0aW9uczogbGluZUNoYXJ0T3B0aW9ucyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3RMYW5ndWFnZVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFycyA9IF8udW5pcShkYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkLnllYXIpKS5zb3J0KCk7XHJcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UpKS5zb3J0KCk7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IHllYXJzLFxyXG4gICAgICAgICAgc2VyaWVzOiBsYW5ndWFnZXMsXHJcbiAgICAgICAgICBkYXRhOiBsYW5ndWFnZXMubWFwKChsYW5ndWFnZSkgPT5cclxuICAgICAgICAgICAgeWVhcnMubWFwKCh5ZWFyKSA9PiBkYXRhLmZpbmQoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2UgJiYgX2lkLnllYXIgPT09IHllYXIpPy5jb3VudCB8fCAwKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBvcHRpb25zOiBsaW5lQ2hhcnRPcHRpb25zLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0R2FtZVN0YXRzKCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICBjb25zdCB5ZWFycyA9IF8udW5pcShkYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkLnllYXIpKS5zb3J0KCk7XHJcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2VzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UpKS5zb3J0KCk7XHJcbiAgICAgICAgJHNjb3BlLmdhbWVTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogeWVhcnMsXHJcbiAgICAgICAgICBzZXJpZXM6IGxhbmd1YWdlcyxcclxuICAgICAgICAgIGRhdGE6IGxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlKSA9PlxyXG4gICAgICAgICAgICB5ZWFycy5tYXAoKHllYXIpID0+IGRhdGEuZmluZCgoeyBfaWQgfSkgPT4gX2lkLmxhbmd1YWdlID09PSBsYW5ndWFnZSAmJiBfaWQueWVhciA9PT0geWVhcik/LmNvdW50IHx8IDApLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIG9wdGlvbnM6IGxpbmVDaGFydE9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSBfLnNvcnRCeShkYXRhLCAoeyBjb3VudCB9KSA9PiAtY291bnQpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiBzb3J0ZWREYXRhLm1hcCgoeyBfaWQgfSkgPT4gX2lkKSxcclxuICAgICAgICAgIGRhdGE6IFtzb3J0ZWREYXRhLm1hcCgoeyBjb3VudCB9KSA9PiBjb3VudCldLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgKCkgPT4ge1xyXG4gICAgICBnZXREYXRhKCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdXb3Jrb3V0Q3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICRzY29wZS50aW1lRXhlcmNpc2luZyA9IDMwO1xyXG4gICRzY29wZS50aW1lUmVzdGluZyA9IDEwO1xyXG4gICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcblxyXG4gIHZhciBzb3VuZHMgPSB7XHJcbiAgICBvbjogbmV3IEF1ZGlvKCdvbi53YXYnKSxcclxuICAgIG9mZjogbmV3IEF1ZGlvKCdvZmYud2F2JyksXHJcbiAgICBzd2l0Y2g6IG5ldyBBdWRpbygnc3dpdGNoLndhdicpLFxyXG4gIH07XHJcblxyXG5cclxuICB2YXIgZXhlcmNpc2VzID0gW1xyXG4gICAge25hbWU6ICdKdW1waW5nIEphY2tzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnV2FsbCBTaXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnQ3J1bmNoJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU3RlcC1VcCcsIHNwbGl0OiB0cnVlfSxcclxuICAgIHtuYW1lOiAnU3F1YXQnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdUcmljZXBzIERpcCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1BsYW5rJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnSGlnaCBLbmVlcycsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ0x1bmdlJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUHVzaC1VcCB3aXRoIFJvdGF0aW9uJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnU2lkZSBQbGFuaycsIHNwbGl0OiB0cnVlfVxyXG4gIF07XHJcblxyXG4gIHZhciBleGVyY2lzaW5nO1xyXG5cclxuICAkc2NvcGUucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoZXhlcmNpc2VzLmxlbmd0aCAtIE1hdGguZmxvb3IoJHNjb3BlLnRpbWVSZW1haW5pbmcgLyAoJHNjb3BlLnRpbWVFeGVyY2lzaW5nICsgJHNjb3BlLnRpbWVSZXN0aW5nKSkpICsgJy8nICsgZXhlcmNpc2VzLmxlbmd0aDtcclxuICB9O1xyXG5cclxuICAkc2NvcGUud29ya291dCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGV4Y2VyY2lzZVRpbWUgPSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3Rpbmc7XHJcbiAgICBpZiAoISRzY29wZS50aW1lUmVtYWluaW5nKSB7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gZXhlcmNpc2VzLmxlbmd0aCAqIGV4Y2VyY2lzZVRpbWU7XHJcbiAgICAgIGV4ZXJjaXNpbmcgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZy0tO1xyXG4gICAgICAgIGlmICgkc2NvcGUudGltZVJlbWFpbmluZyA9PT0gMCkge1xyXG4gICAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICdGaW5pc2hlZCEgQ29uZ3JhdHMhJywgc3BsaXQ6IGZhbHNlfTtcclxuICAgICAgICAgICRzY29wZS50aW1lciA9ICcnO1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICAgIHJldHVybiBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3VycmVudEV4ZXJjaXNlID0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvIGV4Y2VyY2lzZVRpbWUpO1xyXG4gICAgICAgIHZhciB0aW1lciA9ICRzY29wZS50aW1lUmVtYWluaW5nIC0gY3VycmVudEV4ZXJjaXNlICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgICAkc2NvcGUudGltZXIgPSB0aW1lciA+ICRzY29wZS50aW1lRXhlcmNpc2luZyA/IHRpbWVyIC0gJHNjb3BlLnRpbWVFeGVyY2lzaW5nIDogdGltZXI7XHJcbiAgICAgICAgaWYgKHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nKSB7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS5leGVyY2lzZSA9IGV4ZXJjaXNlc1tleGVyY2lzZXMubGVuZ3RoIC0gY3VycmVudEV4ZXJjaXNlIC0gMV07XHJcbiAgICAgICAgaWYgKHRpbWVyID09PSAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgIHNvdW5kcy5vbi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aW1lciA9PT0gMCkge1xyXG4gICAgICAgICAgc291bmRzLm9mZi5wbGF5KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICgkc2NvcGUuZXhlcmNpc2Uuc3BsaXQgJiYgdGltZXIgPT09IE1hdGguZmxvb3IoJHNjb3BlLnRpbWVFeGVyY2lzaW5nIC8gMikpIHtcclxuICAgICAgICAgIHNvdW5kcy5zd2l0Y2gucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbChleGVyY2lzaW5nKTtcclxuICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICRzY29wZS50aW1lUmVtYWluaW5nID0gMDtcclxuICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgJHNjb3BlLmV4ZXJjaXNlID0ge25hbWU6ICcnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdDYXRlZ29yaWVzU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRDYXRlZ29yaWVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9jYXRlZ29yaWVzJyk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFRhc2tzID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL2NhdGVnb3JpZXMvJyArIGNhdGVnb3J5KTtcclxuICB9O1xyXG5cclxuICBzdmMuYWRkQ2F0ZWdvcnkgPSBmdW5jdGlvbiAoY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2NhdGVnb3JpZXMvJywgY2F0ZWdvcnkpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hZGRUYXNrID0gZnVuY3Rpb24gKGNhdGVnb3J5LCB0YXNrKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9jYXRlZ29yaWVzLycgKyBjYXRlZ29yeSArICcvdGFza3MnLCB0YXNrKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2V0UHJpb3JpdHlMaXN0ID0gZnVuY3Rpb24obGlzdCkge1xyXG4gICAgc3ZjLmNob2ljZXMgPSBsaXN0O1xyXG4gICAgc3ZjLnByaW9yaXR5TGlzdCA9IFtdO1xyXG4gICAgLy9NYWtlIGEgbmV3IGNob2ljZSBsaXN0XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yICh2YXIgaiA9IGkgKyAxOyBqIDwgbGlzdC5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHZhciByYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgIHN2Yy5wcmlvcml0eUxpc3QucHVzaCh7XHJcbiAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgIGZpcnN0Q2hvaWNlOiBsaXN0W3JhbmRvbSA9PT0gMCA/IGkgOiBqXS5uYW1lLFxyXG4gICAgICAgICAgc2Vjb25kQ2hvaWNlOiBsaXN0W3JhbmRvbSA9PT0gMCA/IGogOiBpXS5uYW1lLFxyXG4gICAgICAgICAgY2hvaWNlOiAnJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzaHVmZmxlKHN2Yy5wcmlvcml0eUxpc3QpO1xyXG4gICAgZm9yIChpIGluIHN2Yy5wcmlvcml0eUxpc3QpIHtcclxuICAgICAgc3ZjLnByaW9yaXR5TGlzdFtpXS5pZCA9IGkgKyAxO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQcmlvcml0eUxpc3QgPSBmdW5jdGlvbihsaXN0KSB7XHJcbiAgICByZXR1cm4gc3ZjLnByaW9yaXR5TGlzdDtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBzaHVmZmxlKGFycmF5KSB7XHJcbiAgICB2YXIgbSA9IGFycmF5Lmxlbmd0aCwgdCwgaTtcclxuICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxl4oCmXHJcbiAgICB3aGlsZSAobSkge1xyXG4gICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnTigKZcclxuICAgICAgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG0tLSk7XHJcbiAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cclxuICAgICAgLy9hcnJheVttXS5maXJzdENob2ljZTtcclxuICAgICAgdCA9IGFycmF5W21dO1xyXG4gICAgICBhcnJheVttXSA9IGFycmF5W2ldO1xyXG4gICAgICBhcnJheVtpXSA9IHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnRW1haWxTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLnNlbmQgPSBmdW5jdGlvbiAoZW1haWwpIHtcclxuICAgIGNvbnNvbGUubG9nKGVtYWlsKTtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL2VtYWlsJywgZW1haWwpO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIkZpbGVTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRRdWl6RmlsZXMgPSBmdW5jdGlvbiAocXVpeikge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvcXVpenplcy9cIiArIHF1aXopO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiR2FtZVN2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFRlbnRoaW5ncyA9IGZ1bmN0aW9uIChpZCA9IDEpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy93ZWIvXCIgKyBpZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFuc3dlclRlbnRoaW5ncyA9IGZ1bmN0aW9uIChpZCA9IDEsIGFuc3dlcikge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy93ZWIvXCIgKyBpZCArIFwiL2Fuc3dlclwiLCB7IGFuc3dlciB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VGVudGhpbmdzSGludCA9IGZ1bmN0aW9uIChpZCA9IDEpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3Mvd2ViL1wiICsgaWQgKyBcIi9oaW50XCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5za2lwVGVudGhpbmdzTGlzdCA9IGZ1bmN0aW9uIChpZCA9IDEpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3Mvd2ViL1wiICsgaWQgKyBcIi9za2lwXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRIaWdoc2NvcmUgPSBmdW5jdGlvbiAoZ2FtZSwgdXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvZ2FtZXMvXCIgKyBnYW1lICsgXCIvXCIgKyB1c2VyICsgXCIvaGlnaHNjb3JlXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRIaWdoc2NvcmUgPSBmdW5jdGlvbiAoZ2FtZSwgdXNlciwgc2NvcmUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS9nYW1lcy9cIiArIGdhbWUgKyBcIi9cIiArIHVzZXIgKyBcIi9oaWdoc2NvcmVcIiwge1xyXG4gICAgICBzY29yZTogc2NvcmUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuZnV6enlNYXRjaCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGd1ZXNzKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvZ2FtZXMvZnV6enlfbWF0Y2hcIiwge1xyXG4gICAgICB2YWx1ZXMsXHJcbiAgICAgIGd1ZXNzLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnTGFuZ3VhZ2VTdmMnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5sYW5ndWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkVOXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkVuZ2xpc2hcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWdiXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIk5MXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIk5lZGVybGFuZHNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLW5sXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwiY29kZVwiOiBcIkZSXCIsXHJcbiAgICAgIFwibmFtZVwiOiBcIkZyYW7Dp2Fpc1wiLFxyXG4gICAgICBcImZsYWdcIjogXCJmbGFnLWljb24tZnJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy50ZXh0ID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgc3ZjLnNlbGVjdGVkTGFuZ3VhZ2UgPSBzdmMubGFuZ3VhZ2VzWzBdO1xyXG5cclxuICBzdmMuc2V0TGFuZ3VhZ2UgPSBmdW5jdGlvbiAobGFuZ3VhZ2UpIHtcclxuICAgIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gbGFuZ3VhZ2U7XHJcbiAgICByZXR1cm4gbGFuZ3VhZ2U7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExhbmd1YWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHN2Yy5zZWxlY3RlZExhbmd1YWdlO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5zZXJ2aWNlKCdQb3N0c1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZmV0Y2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzJyk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZSA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9wb3N0cycsIHBvc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQb3N0ID0gZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvcG9zdHMvJyArIHBvc3QuX2lkKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJUZW5UaGluZ3NTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9ib3RzL3RlbnRoaW5ncy9xdWV1ZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0cyA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICAgIHZhciB1cmwgPVxyXG4gICAgICBgL2FwaS90ZW50aGluZ3MvbGlzdHM/YCArXHJcbiAgICAgIChvcHRpb25zLmxpbWl0ID8gYCZsaW1pdD0ke29wdGlvbnMubGltaXR9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMucGFnZSA/IGAmcGFnZT0ke29wdGlvbnMucGFnZX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zb3J0QnkgPyBgJnNvcnRfYnk9JHtvcHRpb25zLnNvcnRCeX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5vcmRlckJ5ID8gYCZvcmRlcl9ieT0ke29wdGlvbnMub3JkZXJCeX1gIDogXCJcIikgK1xyXG4gICAgICAvLyBgJmNyZWF0b3I9NWFlMTVmMTRiNWY3ODgzZmYwNDk3MzM5YCArXHJcbiAgICAgIChvcHRpb25zLmxhbmd1YWdlICYmIG9wdGlvbnMubGFuZ3VhZ2UubGVuZ3RoID4gMCA/IGAmbGFuZ3VhZ2U9JHtvcHRpb25zLmxhbmd1YWdlLmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLmNhdGVnb3JpZXMgJiYgb3B0aW9ucy5jYXRlZ29yaWVzLmxlbmd0aCA+IDAgPyBgJmNhdGVnb3JpZXM9JHtvcHRpb25zLmNhdGVnb3JpZXMuam9pbihcIixcIil9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMubGFuZ3VhZ2VOb3QgJiYgb3B0aW9ucy5sYW5ndWFnZU5vdC5sZW5ndGggPiAwID8gYCYhbGFuZ3VhZ2U9JHtvcHRpb25zLmxhbmd1YWdlTm90LmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLmNhdGVnb3JpZXNOb3QgJiYgb3B0aW9ucy5jYXRlZ29yaWVzTm90Lmxlbmd0aCA+IDBcclxuICAgICAgICA/IGAmIWNhdGVnb3JpZXM9JHtvcHRpb25zLmNhdGVnb3JpZXNOb3Quam9pbihcIixcIil9YFxyXG4gICAgICAgIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5zZWFyY2ggPyBgJnNlYXJjaD0ke29wdGlvbnMuc2VhcmNofWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLm5hbWUgPyBgJm5hbWU9JHtvcHRpb25zLm5hbWV9YCA6IFwiXCIpO1xyXG5cclxuICAgIHJldHVybiAkaHR0cC5nZXQodXJsKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UmFuZG9tTGlzdCA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9saXN0cy9yYW5kb21gKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2VhcmNoTGlzdHMgPSAobmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3Mvc2VhcmNoL2xpc3QtbmFtZXMvJHtuYW1lfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRDYXRlZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvY2F0ZWdvcmllc2ApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9sYW5ndWFnZXNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdCA9IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUxpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnB1dChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQsIGxpc3QpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGVMaXN0ID0gZnVuY3Rpb24gKHVzZXIsIGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHNcIiwgeyB1c2VyLCBsaXN0IH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5tZXJnZUxpc3RzID0gZnVuY3Rpb24gKGxpc3RzKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL21lcmdlXCIsIHsgbGlzdHM6IGxpc3RzIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5kZWxldGVMaXN0ID0gZnVuY3Rpb24gKGxpc3RJZCkge1xyXG4gICAgcmV0dXJuICRodHRwLmRlbGV0ZShcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdElkKTtcclxuICB9O1xyXG5cclxuICBzdmMudXBkYXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucHV0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3ZhbHVlcy9cIiArIHZhbHVlLl9pZCwgdmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3MvbGlzdHMvXCIgKyBsaXN0Ll9pZCArIFwiL3ZhbHVlc1wiLCB2YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmRlbGV0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLmRlbGV0ZShcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXMvXCIgKyB2YWx1ZS5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5yZXBvcnRMaXN0ID0gZnVuY3Rpb24gKHVzZXIsIGxpc3QpIHtcclxuICAgICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi9yZXBvcnQvXCIgKyB1c2VyLl9pZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3RDYXRlZ29yeVN0YXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL3N0YXRzL2NhdGVnb3JpZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3RMYW5ndWFnZVN0YXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL3N0YXRzL2xhbmd1YWdlc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UGxheVN0YXRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL3N0YXRzL3BsYXlcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEdhbWVTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9nYW1lc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0Qmx1cmJzID0gZnVuY3Rpb24gKGxpc3QsIHR5cGUpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9saXN0cy8ke2xpc3QuX2lkfS9ibHVyYnMvJHt0eXBlfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnRvZ2dsZVBhdXNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdGVudGhpbmdzL3BhdXNlYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEdhbWUgPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2dhbWVzLyR7aWR9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUdhbWVDYXRlZ29yeSA9IGZ1bmN0aW9uIChpZCwgY2F0ZWdvcnkpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9nYW1lcy8ke2lkfS9jYXRlZ29yeS8ke2NhdGVnb3J5fWApO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiVXNlclN2Y1wiLCBmdW5jdGlvbiAoJGh0dHApIHtcclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmdldFVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vyc1wiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0VXNlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9hbGxcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnRvZ2dsZUJhbiA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdXNlcnMvYmFuLyR7aWR9YCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNldFRva2VuID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IHRva2VuO1xyXG4gICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmF1dGhlbnRpY2F0ZSA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzL2F1dGhlbnRpY2F0ZVwiLCB7XHJcbiAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS50b2tlbiA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmxpbmtUZWxlZ3JhbSA9IGZ1bmN0aW9uICh1c2VySWQsIHRlbGVncmFtRGF0YSkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoYC9hcGkvdXNlcnMvJHt1c2VySWR9L3RlbGVncmFtYCwgdGVsZWdyYW1EYXRhKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMubG9naW4gPSBmdW5jdGlvbiAodXNlcklkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9cIiArIHVzZXJJZCArIFwiL2xvZ2luXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICByZXR1cm4gc3ZjLnNldFRva2VuKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIuX2lkLCB7XHJcbiAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hlY2tQYXNzd29yZCA9IGZ1bmN0aW9uICh1c2VySWQsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VySWQgKyBcIi92ZXJpZmljYXRpb25cIiwge1xyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlcklkLCBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXJJZCArIFwiL3Bhc3N3b3JkXCIsIHtcclxuICAgICAgb2xkUGFzc3dvcmQ6IG9sZFBhc3N3b3JkLFxyXG4gICAgICBuZXdQYXNzd29yZDogbmV3UGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlVXNlcm5hbWUgPSBmdW5jdGlvbiAodXNlcklkLCBuZXdVc2VybmFtZSkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXJJZCArIFwiL3VzZXJuYW1lXCIsIHtcclxuICAgICAgICBuZXdVc2VybmFtZTogbmV3VXNlcm5hbWUsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICRodHRwLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uW1wiWC1BdXRoXCJdID0gXCJcIjtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlVXNlciA9IGZ1bmN0aW9uICh1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnNcIiwge1xyXG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmxvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5kaXJlY3RpdmUoXCJjbGlja091dHNpZGVcIiwgZnVuY3Rpb24gKCRkb2N1bWVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICByZXN0cmljdDogXCJBXCIsXHJcbiAgICBzY29wZToge1xyXG4gICAgICBjbGlja091dHNpZGU6IFwiJlwiLFxyXG4gICAgfSxcclxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgJGRvY3VtZW50Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZWwgIT09IGUudGFyZ2V0ICYmICFlbFswXS5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vc2NvcGUuJHBhcmVudC5zZXRTZWxlY3RlZExpc3QoKTtcclxuICAgICAgICAgICAgc2NvcGUuJGV2YWwoc2NvcGUuY2xpY2tPdXRzaWRlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuXHQuZGlyZWN0aXZlKCdoZWFkJywgW1xyXG5cdFx0JyRyb290U2NvcGUnLFxyXG5cdFx0JyRzdGF0ZScsXHJcblx0XHQnJGNvbXBpbGUnLFxyXG5cdFx0JyRpbnRlcnBvbGF0ZScsXHJcblx0XHRmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkY29tcGlsZSwgJGludGVycG9sYXRlKSB7XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGUgPSBmdW5jdGlvbiBnZXRTdHlsZSh0ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdHlsZSA9IHtcclxuXHRcdFx0XHRcdGhyZWY6IHRlbXBsYXRlU3R5bGVVcmwsXHJcblx0XHRcdFx0XHRyZWw6ICdzdHlsZXNoZWV0J1xyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmIChzdHlsZS5ocmVmLm1hdGNoKC9cXC5sZXNzJC8pKSB7XHJcblx0XHRcdFx0XHRzdHlsZS5yZWwgPSAnc3R5bGVzaGVldC9sZXNzJztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBzdHlsZTtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gZ2V0U3R5bGVzKHN0YXRlKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdGF0ZXMgPSB7fTtcclxuXHJcblx0XHRcdFx0Ly9DaGVjayBzdGF0ZSBmb3Igc3R5bGVzXHJcblx0XHRcdFx0d2hpbGUgKHN0YXRlLm5hbWUgIT09ICcnKSB7XHJcblx0XHRcdFx0XHR2YXIgcGFyZW50ID0gJHN0YXRlLmdldCgnXicsIHN0YXRlKTtcclxuXHJcblx0XHRcdFx0XHQvL0luaXRpYXRlIG91ciB2aWV3IGxpc3RcclxuXHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXSkge1xyXG5cdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdID0ge307XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB0aGUgdGVtcGxhdGVTdHlsZVxyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSkge1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1bJyddID0gZ2V0U3R5bGUoc3RhdGUudGVtcGxhdGVTdHlsZVVybCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NoZWNrIHZpZXdzXHJcblx0XHRcdFx0XHRpZiAoc3RhdGUudmlld3MpIHtcclxuXHRcdFx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlLnZpZXdzLCBmdW5jdGlvbiAodmlldywga2V5KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgaGF2ZSBhIHN0eWxlXHJcblx0XHRcdFx0XHRcdFx0aWYgKCF2aWV3LnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgYXJlIHRhcmdldGluZyBzb21lIHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdGlmICgoa2V5ID0ga2V5LnNwbGl0KCdAJykpWzFdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgc3R5bGVzIGZvciB0aGF0IHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXSA9IHt9O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIHNvbWUgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXVtrZXlbMF1dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlc1trZXlbMV1dW2tleVswXV0gPSBnZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIG91ciBwYXJlbnQncyB2aWV3XHJcblx0XHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ29udGludWUgd2l0aCB0aGUgcGFyZW50XHJcblx0XHRcdFx0XHRzdGF0ZSA9IHBhcmVudDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vRmxhdHRlbiB0aGUgbGlzdFxyXG5cdFx0XHRcdHZhciBmbGF0ID0gW107XHJcblx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlcywgZnVuY3Rpb24gKHZpZXdzKSB7XHJcblxyXG5cdFx0XHRcdFx0Xy5mb3JFYWNoKHZpZXdzLCBmdW5jdGlvbiAoc3R5bGUpIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghXy5pbmNsdWRlcyhmbGF0LCBzdHlsZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRmbGF0LnB1c2goc3R5bGUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvL1JldmVyc2UgaXQgc28gd2UgaGF2ZSBhIHByb3BlciBoaWVyYXJjaHlcclxuXHRcdFx0XHRmbGF0LnJldmVyc2UoKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGZsYXQ7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0XHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSkge1xyXG5cclxuXHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gW107XHJcblxyXG5cdFx0XHRcdFx0dmFyIGh0bWwgPSAnPGxpbmsgbmctYXR0ci1yZWw9XCJ7e3N0eWxlLnJlbH19XCIgbmctcmVwZWF0PVwic3R5bGUgaW4gdGVtcGxhdGVTdHlsZXNcIiBuZy1ocmVmPVwie3tzdHlsZS5ocmVmfX1cIj4nO1xyXG5cclxuXHRcdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xce1xcey9nLCAkaW50ZXJwb2xhdGUuc3RhcnRTeW1ib2woKSk7XHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXH1cXH0vZywgJGludGVycG9sYXRlLmVuZFN5bWJvbCgpKTtcclxuXHJcblx0XHRcdFx0XHRlbGVtLmFwcGVuZCgkY29tcGlsZShodG1sKShzY29wZSkpO1xyXG5cclxuXHRcdFx0XHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykge1xyXG5cclxuXHRcdFx0XHRcdFx0c2NvcGUudGVtcGxhdGVTdHlsZXMgPSBnZXRTdHlsZXModG9TdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHR9XHJcblx0XSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJRdWl6QW5pbWFsc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gICRzY29wZS5hbmltYWxzID0gW107XHJcblxyXG4gIEZpbGVTdmMuZ2V0UXVpekZpbGVzKFwiYW5pbWFsc1wiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmFuaW1hbHMgPSBfLnNodWZmbGUoXHJcbiAgICAgIHJlc3BvbnNlLmRhdGEubWFwKChhbmltYWwpID0+ICh7XHJcbiAgICAgICAgc291bmQ6IGFuaW1hbCxcclxuICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKFwiLlwiKSkucmVwbGFjZShcIl9cIiwgXCIgXCIpLmNhcGl0YWxpemUoKSxcclxuICAgICAgfSkpLFxyXG4gICAgKTtcclxuICAgIGZvciAobGV0IGFuaW1hbCBvZiAkc2NvcGUuYW5pbWFscykge1xyXG4gICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5ndWVzcyA9IChhbmltYWwsIGd1ZXNzKSA9PiB7XHJcbiAgICBhbmltYWwuZ3Vlc3MgPSBndWVzcztcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRSYW5kb21BbmltYWxzID0gKG5hbWUpID0+XHJcbiAgICBfLnNodWZmbGUoJHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoKGFuaW1hbCkgPT4gYW5pbWFsLm5hbWUpKS5zbGljZSgwLCA1KTtcclxuXHJcbiAgJHNjb3BlLmdldFNjb3JlID0gKCkgPT5cclxuICAgIGAkeyRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsKSA9PiBhbmltYWwubmFtZSA9PT0gYW5pbWFsLmd1ZXNzKS5sZW5ndGh9LyR7JHNjb3BlLmFuaW1hbHMubGVuZ3RofWA7XHJcblxyXG4gICRzY29wZS5pc1Njb3JlVmlzaWJsZSA9ICgpID0+ICRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsKSA9PiBhbmltYWwuZ3Vlc3MpLmxlbmd0aCA9PT0gJHNjb3BlLmFuaW1hbHMubGVuZ3RoO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlF1aXpHb29nbGVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldFF1aXpGaWxlcyhcImdvb2dsZVwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUXVpekxvZ29zQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRRdWl6RmlsZXMoXCJsb2dvc1wiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmltYWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUXVpek1vdmllc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0UXVpekZpbGVzKFwibW92aWVzXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJRdWl6U2tlbGV0b25zQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgJHNjb3BlLmFuaW1hbHMgPSBbXTtcclxuXHJcbiAgRmlsZVN2Yy5nZXRRdWl6RmlsZXMoXCJza2VsZXRvbnNcIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5hbmltYWxzID0gXy5zaHVmZmxlKFxyXG4gICAgICByZXNwb25zZS5kYXRhLm1hcCgoYW5pbWFsKSA9PiAoe1xyXG4gICAgICAgIGltYWdlOiBhbmltYWwsXHJcbiAgICAgICAgbmFtZTogYW5pbWFsLnN1YnN0cmluZygwLCBhbmltYWwuaW5kZXhPZihcIi5cIikpLnJlcGxhY2UoXCJfXCIsIFwiIFwiKS5jYXBpdGFsaXplKCksXHJcbiAgICAgIH0pKSxcclxuICAgICk7XHJcbiAgICBmb3IgKGxldCBhbmltYWwgb2YgJHNjb3BlLmFuaW1hbHMpIHtcclxuICAgICAgYW5pbWFsLmFuc3dlcnMgPSBfLnNodWZmbGUoW2FuaW1hbC5uYW1lLCAuLi5nZXRSYW5kb21BbmltYWxzKGFuaW1hbC5uYW1lKV0pO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuZ3Vlc3MgPSAoYW5pbWFsLCBndWVzcykgPT4ge1xyXG4gICAgYW5pbWFsLmd1ZXNzID0gZ3Vlc3M7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UmFuZG9tQW5pbWFscyA9IChuYW1lKSA9PlxyXG4gICAgXy5zaHVmZmxlKCRzY29wZS5hbmltYWxzLmZpbHRlcigoYW5pbWFsKSA9PiBuYW1lICE9PSBhbmltYWwubmFtZSkubWFwKChhbmltYWwpID0+IGFuaW1hbC5uYW1lKSkuc2xpY2UoMCwgMTApO1xyXG5cclxuICAkc2NvcGUuZ2V0U2NvcmUgPSAoKSA9PlxyXG4gICAgYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IGFuaW1hbC5uYW1lID09PSBhbmltYWwuZ3Vlc3MpLmxlbmd0aH0vJHskc2NvcGUuYW5pbWFscy5sZW5ndGh9YDtcclxuXHJcbiAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IGFuaW1hbC5ndWVzcykubGVuZ3RoID09PSAkc2NvcGUuYW5pbWFscy5sZW5ndGg7XHJcbn0pO1xyXG4iXX0=
