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
  }), document.getElementsByClassName("tgme_widget_login_button")[0].innerHTML = "Sign in with Telegram", $scope.telegramLogin = function (user) {
    UserSvc.authenticate({
      authType: "telegram",
      displayName: user.first_name + (user.last_name ? " " + user.last_name : ""),
      username: user.username,
      telegramId: user.id,
      photoURL: user.photo_url,
      idToken: user.hash,
      data: user
    }).then(loginSuccessful, loginFailed);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiY29udHJvbGxlcnMvYXBwLmN0cmwuanMiLCJjb250cm9sbGVycy9hc3Rlcm9pZHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2J1YmJsZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NoYXJhZGVzLmN0cmwuanMiLCJjb250cm9sbGVycy9jb250YWN0LmN0cmwuanMiLCJjb250cm9sbGVycy9leHBlcmllbmNlLmN0cmwuanMiLCJjb250cm9sbGVycy9ob2JiaWVzLmN0cmwuanMiLCJjb250cm9sbGVycy9sZW1taW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbGlzdHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xvZ2luLmN0cmwuanMiLCJjb250cm9sbGVycy9wb3N0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJvZmlsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvc2tpbGxzLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3MuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2FkbWluLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NnYW1lLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NwbGF5LmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NzdGF0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvd29ya291dC5jdHJsLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJzZXJ2aWNlcy9jYXRlZ29yaWVzLnN2Yy5qcyIsInNlcnZpY2VzL2VtYWlsLnN2Yy5qcyIsInNlcnZpY2VzL2ZpbGUuc3ZjLmpzIiwic2VydmljZXMvZ2FtZS5zdmMuanMiLCJzZXJ2aWNlcy9sYW5ndWFnZS5zdmMuanMiLCJzZXJ2aWNlcy9wb3N0cy5zdmMuanMiLCJzZXJ2aWNlcy90ZW50aGluZ3Muc3ZjLmpzIiwic2VydmljZXMvdXNlci5zdmMuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2FuaW1hbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvZ29vZ2xlLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2xvZ29zLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL21vdmllcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9za2VsZXRvbnMuY3RybC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRvbWFpbnMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0cmluZyIsInByb3RvdHlwZSIsInZhbHVlIiwicmVkdWNlIiwicmVzdWx0IiwibGV0dGVyIiwicmVwbGFjZSIsInRoaXMiLCJTUEVDSUFMX0NIQVJBQ1RFUlMiLCJWT1dFTFMiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZURpYWNyaXRpY3MiLCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyIsImV4dHJhIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiY29uY2VhbCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJyZXBsYWNlQWxsIiwiZmluZCIsInJlcGxhY2VTdHJpbmciLCJpIiwicmVwbGFjZUFycmF5IiwiTnVtYmVyIiwidG9TdHJpbmciLCJkZWNpbWFscyIsInVuZGVmaW5lZCIsInRvRml4ZWQiLCJzb3J0T2JqZWN0Iiwib2JqIiwiZGlyZWN0aW9uIiwiYXJyIiwia2V5IiwicHVzaCIsInNvcnQiLCJhIiwiYiIsIm9ialNvcnRlZCIsImZvckVhY2giLCJpdGVtIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwiJHVybFNlcnZpY2VQcm92aWRlciIsIiRsb2NhdGlvblByb3ZpZGVyIiwib3RoZXJ3aXNlIiwic3RyaWN0TW9kZSIsInN0YXRlIiwidXJsIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIiwiaHRtbDVNb2RlIiwiZW5hYmxlZCIsInJlcXVpcmVCYXNlIiwic2VydmljZSIsIiRyb290U2NvcGUiLCIkdGltZW91dCIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiV2ViU29ja2V0Iiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3QiLCJvbm9wZW4iLCJjb25zb2xlIiwibG9nIiwib25jbG9zZSIsImUiLCJvbmVycm9yIiwicmVhZHlTdGF0ZSIsIm9ubWVzc2FnZSIsInBheWxvYWQiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiJGJyb2FkY2FzdCIsInRvcGljIiwic2VuZCIsImpzb24iLCJzdHJpbmdpZnkiLCJydW4iLCJXZWJTb2NrZXRTdmMiLCIkc2NvcGUiLCJMYW5ndWFnZVN2YyIsIlVzZXJTdmMiLCIkbWRUb2FzdCIsInRvYXN0IiwibWVzc2FnZSIsInNob3ciLCJzaW1wbGUiLCJwYXJlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0ZXh0Q29udGVudCIsInBvc2l0aW9uIiwiaGlkZURlbGF5IiwiJCIsImxvYWQiLCJmYWRlT3V0IiwiZmFkZUluIiwib24iLCJjbG9zZXN0IiwidG9nZ2xlQ2xhc3MiLCJjaGVja2VkIiwic3RvcFByb3BhZ2F0aW9uIiwidGhlbWVDb3VudGVyIiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiZmxpcFRoZW1lIiwiaGlkZSIsInNldFRpbWVvdXQiLCJnZXRKU09OIiwic2tpbGxzIiwiZmlsdGVyIiwic2tpbGwiLCJob2JiaWVzIiwiam9icyIsImpvYiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJjaGFyYWRlcyIsImdldFRpbWVTcGFuIiwibGFuZ3VhZ2VzIiwic2VsZWN0ZWRMYW5ndWFnZSIsImdldExhbmd1YWdlIiwic2VsZWN0TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaG92ZXJkaXYiLCJkaXZpZCIsImxlZnQiLCJjbGllbnRYIiwidG9wIiwiY2xpZW50WSIsImdldEVsZW1lbnRCeUlkIiwiY3NzIiwidG9nZ2xlIiwibG9jYWxTdG9yYWdlIiwidXNlciIsImxvZ2luIiwidGhlbiIsInJlc3BvbnNlIiwiJG9uIiwiXyIsImxvZ2dlZEluIiwiX2lkIiwiY3VycmVudFVzZXIiLCJiaXJ0aERhdGUiLCJsb2FkaW5nIiwibG9nb3V0IiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsImNsZWFyIiwiY2F0Y2giLCJlcnJvciIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiJGxvY2F0aW9uIiwiR2FtZVN2YyIsImFubm91bmNlIiwiY2FudmFzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXRoIiwiYWxlcnQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZm9udCIsImZpbGxTdHlsZSIsInRleHRBbGlnbiIsInNob3RzIiwiYXN0ZXJvaWRzIiwicG93ZXJ1cHMiLCJleHBsb3Npb25zIiwibWFwIiwic3BhY2VwaWNzIiwic3BhY2UiLCJwb3dlcnVwVHlwZXMiLCJuYW1lIiwiYW5ub3VuY2VtZW50IiwiY3ljbGUiLCJyb3dzIiwiY29sdW1ucyIsInNpemUiLCJpbWciLCJJbWFnZSIsImFjdGl2YXRlIiwic3BhY2VzaGlwIiwibWF4U3BlZWQiLCJjb29sZG93biIsImNvb2xkb3duVGltZSIsInJhbmdlIiwic2hpZWxkIiwiZXhwbG9kZSIsInNwYXduQXN0ZXJvaWRzIiwicG93ZXJ1cCIsImFycmF5Iiwic3JjIiwiZXhwbG9zaW9uSW1hZ2UiLCJldmFsdWF0ZUtleXMiLCJwbGF5aW5nIiwic2hvb3QiLCJyb3RhdGlvbiIsInNwZWVkIiwic2NvcmUiLCIkYXBwbHkiLCJTcGFjZXNoaXAiLCJhdXRvU3Bhd24iLCJ3aWR0aCIsImhlaWdodCIsImNhbm5vbiIsIngiLCJ5IiwiYW5nbGUiLCJpZCIsInJvdW5kIiwiU2hvdCIsIm1vdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZmlsbCIsImFzdGVyb2lkIiwiaGl0IiwiZ2FtZU92ZXIiLCJjb3MiLCJzaW4iLCJsaWZlc3BhbiIsIkFzdGVyb2lkIiwiZ2V0RW50cnlQb3NpdGlvbiIsInJvdGF0aW9uU3BlZWQiLCJFeHBsb3Npb24iLCJzaG90IiwicG9pbnRzIiwic3Bhd25Qb3dlcnVwIiwib2JqZWN0IiwiUG93ZXJ1cCIsImRlbGF5Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImNvbHVtbiIsInJvdyIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJncmlkWCIsImdyaWRZIiwib2JqZWN0MSIsIm9iamVjdDIiLCJrZXlzIiwiYW1vdW50IiwiaGlnaHNjb3JlIiwic2V0SGlnaHNjb3JlIiwicmVzaXplQ2FudmFzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleUNvZGUiLCJ3aGljaCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXciLCJjbGVhclJlY3QiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwidGFsbHkiLCJmaWxsVGV4dCIsIm1lYXN1cmVUZXh0IiwiYmFja2dyb3VuZEltYWdlIiwiYnViYmxlcyIsImNvbG9ycyIsIkJ1YmJsZSIsInJhZGl1cyIsImV4cGFuZGluZyIsImNpcmN1bWZlcmVuY2UiLCJtYXhSYWRpdXMiLCJ2eCIsInZ5IiwiZmlsdGVyQnViYmxlcyIsImJ1YmJsZSIsInNlbGVjdFdvcmQiLCJjYXRlZ29yeSIsIndvcmQiLCJFbWFpbFN2YyIsIm9wdGlvbnMiLCJ0ZXh0IiwiY29udGFjdCIsImVtYWlsIiwicGhvbmUiLCJhYm91dCIsInNlbmRpbmciLCJzZW50Iiwic3RhdHVzIiwiZXJyIiwiZ2V0U2tpbGwiLCJza2lsbENvZGUiLCJjb2RlIiwiJHdpbmRvdyIsImhvYmJ5U2VsZWN0b3JWaXNpYmxlIiwic2VsZWN0ZWRIb2JieSIsInNlbGVjdEhvYmJ5IiwiaG9iYnkiLCJzaG93SG9iYnkiLCJpbmRleCIsImltYWdlcyIsIkxFRlQiLCJSSUdIVCIsImxlbW1pbmdzSW1hZ2UiLCJkZWNvckltYWdlIiwibGVtbWluZ3MiLCJzdGFydGVkIiwiYWN0aW9ucyIsIndhbGsiLCJzdGFydCIsImVuZCIsInJldmVyc2UiLCJodWgiLCJmYWxsIiwiZmx5Iiwic3RvcCIsImNsaW1iIiwiYnVpbGQiLCJwdW5jaCIsImRpZyIsIkxlbW1pbmciLCJpbml0IiwiYWN0IiwiYWN0aW9uIiwiYW5pbWF0aW9uIiwic2NhbGUiLCJoYXRjaCIsIm9wZW4iLCJyZWN0IiwiQ2F0ZWdvcmllc1N2YyIsInNob3dDYXRlZ29yeSIsImdldENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidGFza3MiLCJqIiwidGFzayIsInNlbGVjdENhdGVnb3J5Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdGVkVGFza3MiLCJzZWxlY3RhYmxlVGFza3MiLCJlbnRlcmVkQ2F0ZWdvcnkiLCJuZXdDYXRlZ29yeSIsImZvdW5kIiwiYWRkQ2F0ZWdvcnkiLCJuZXdUYXNrIiwic2VsZWN0VGFzayIsImFkZFRhc2siLCJlbnRlcmVkVGFzayIsInJlbW92ZVRhc2siLCJ1bnNlbGVjdFRhc2siLCJ0YXNrTGlzdCIsInNwbGljZSIsImluZGV4T2YiLCJzdGFydFByaW9yaXRpemluZyIsInNldFByaW9yaXR5TGlzdCIsImdldFF1ZXN0aW9ucyIsImNvdW50ZXIiLCJ1aSIsImZpcmViYXNldWkiLCJBdXRoVUkiLCJsb2dpblN1Y2Nlc3NmdWwiLCIkZW1pdCIsIm1vZGFsIiwibG9naW5GYWlsZWQiLCJzdGFydFVJIiwiY2FsbGJhY2tzIiwic2lnbkluU3VjY2VzcyIsImNyZWRlbnRpYWwiLCJyZWRpcmVjdFVybCIsImdldElkVG9rZW4iLCJpZFRva2VuIiwiYXV0aGVudGljYXRlIiwiYXV0aFR5cGUiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWxWZXJpZmllZCIsInNpZ25JbkZhaWx1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNyZWQiLCJzaWduSW5XaXRoQ3JlZGVudGlhbCIsInVpU2hvd24iLCJzdHlsZSIsImRpc3BsYXkiLCJzaWduSW5TdWNjZXNzVXJsIiwic2lnbkluT3B0aW9ucyIsIkdvb2dsZUF1dGhQcm92aWRlciIsIlBST1ZJREVSX0lEIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJzaWduSW5GbG93IiwiZXZlbnQiLCJyZXNldCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbm5lckhUTUwiLCJ0ZWxlZ3JhbUxvZ2luIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInVzZXJuYW1lIiwidGVsZWdyYW1JZCIsInBob3RvX3VybCIsImhhc2giLCIkZmlsdGVyIiwiUG9zdHNTdmMiLCJhZGRQb3N0IiwicG9zdEJvZHkiLCJjcmVhdGUiLCJib2R5IiwicG9zdCIsImZldGNoIiwicG9zdHMiLCJnZXRQb3N0IiwidW5zaGlmdCIsImNvdW50cmllcyIsImZsYWciLCJ0aWRiaXQiLCJkYXRlT3B0aW9ucyIsIm1heERhdGUiLCJtaW5EYXRlIiwiaW5pdERhdGUiLCJkYXRlcGlja2VyTW9kZSIsInVzZXJuYW1lVG9nZ2xlIiwicGFzc3dvcmRUb2dnbGUiLCJ0b2dnbGVVc2VybmFtZSIsIm5ld1VzZXJuYW1lIiwidG9nZ2xlUGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImNoZWNrUGFzc3dvcmQiLCJwYXNzd29yZCIsIm9yaWdpbmFsQmciLCJhbmltYXRlIiwiYmFja2dyb3VuZENvbG9yIiwiY2hhbmdlUGFzc3dvcmQiLCJvbGRQYXNzd29yZCIsImNoYW5nZVVzZXJuYW1lIiwidXBkYXRlVXNlciIsImZsYWdzIiwidXNlckZsYWdzIiwibG9hZENvdW50cmllcyIsIiRxdWVyeSIsImNvdW50cnkiLCIkd2F0Y2giLCJpbmNsdWRlcyIsInNlbGVjdGVkU2tpbGwiLCJza2lsbHNWaXNpYmxlIiwicHJvamVjdHMiLCJsYWJlbHMiLCJlbXBsb3llciIsImNvbmNhdCIsImZpbHRlcmVkUHJvamVjdHMiLCJwcm9qZWN0Iiwic2V0U2VsZWN0ZWRTa2lsbCIsImNoYXJ0T3B0aW9ucyIsImN1dG91dFBlcmNlbnRhZ2UiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwidG9vbHRpcHMiLCJjaGFydFN0eWxlIiwiaW1hZ2UiLCIkc2NlIiwiVGVuVGhpbmdzU3ZjIiwicGFnZSIsImxpc3RzIiwic2VhcmNoIiwic2VhcmNoRmllbGQiLCJuZXdJdGVtIiwibGFuZ3VhZ2VGaWx0ZXIiLCJjYXRlZ29yeUZpbHRlciIsInNlbGVjdGVkTGlzdCIsImhpZ2hsaWdodGVkTGlzdHMiLCJoaWdobGlnaHRlZExpc3RJZHMiLCJsaXN0SWRzVG9EZWxldGUiLCJjb25maXJtZWQiLCJleGhhdXN0ZWQiLCJvYmplY3RDYXRlZ29yaWVzIiwiYmx1cmJUeXBlcyIsImFwaSIsImFkbWluT25seSIsImhhdmVDb21tb25JdGVtcyIsImFycjEiLCJhcnIyIiwic29tZSIsImtleURvd24iLCJpcyIsImNyZWF0ZVZhbHVlIiwidHJpZ2dlciIsImFkZExpc3QiLCJjcmVhdG9yIiwidmFsdWVzIiwiYW5zd2VycyIsImlzRHluYW1pYyIsInNldFNlbGVjdGVkSXRlbSIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkTGlzdCIsImxpc3QiLCJnZXRMaXN0IiwicmVhZE9ubHkiLCJhZG1pbiIsImdldEZpbHRlckNvdW50Iiwic2VhcmNoTGlzdHMiLCJhc3luYyIsInZpZXdWYWx1ZSIsImhpZ2hsaWdodGVkU2VhcmNoVGV4dCIsInJlZ2V4IiwidmFsdWVPcmRlciIsImZpZWxkIiwib3JkZXIiLCJvcmRlckJ5IiwiZ2V0TGlzdHMiLCJnZXRNb3JlTGlzdHMiLCJzZXRMYW5ndWFnZUZpbHRlciIsInNldENhdGVnb3J5RmlsdGVyIiwidG9nZ2xlQ2F0ZWdvcnlGaWx0ZXIiLCJhbGxDYXRlZ29yaWVzIiwiZ2V0Q2F0ZWdvcnlMYWJlbCIsInN1YmNhdGVnb3JpZXMiLCJzdWJjYXRlZ29yeSIsInN0YXJ0c1dpdGgiLCJsYWJlbCIsImpvaW4iLCJzb3J0QnkiLCJsaW1pdCIsImxhbmd1YWdlTm90IiwiY2F0ZWdvcmllc05vdCIsImNvdW50IiwibmV4dFBhZ2UiLCJnZXRMaXN0TmFtZSIsImxpc3RJZCIsInVwZGF0ZVZhbHVlIiwidXBkYXRlZEl0ZW1SZXNwb25zZSIsInVwZGF0ZUxpc3RWYWx1ZSIsImJsdXJiVHlwZSIsImRlbGV0ZVZhbHVlIiwiaGFzRHVwbGljYXRlIiwiY3JlYXRlZEl0ZW1SZXNwb25zZSIsImNyZWF0ZUxpc3RWYWx1ZSIsInVwc2VydExpc3QiLCJibHVyYiIsInZhbHVlVG9EZWxldGUiLCJkZWxldGVMaXN0VmFsdWUiLCJ1cGRhdGVMaXN0IiwidXBkYXRlcyIsInNhdmluZyIsImxpc3RJbmRleCIsImZpbmRJbmRleCIsImNoYW5nZXMiLCJjcmVhdGVMaXN0IiwiYXNzaWduIiwiZGVsZXRlTGlzdCIsImRlbGV0ZUxpc3RzIiwiY29uZmlybU1lcmdlTGlzdHMiLCJtZXJnZUxpc3RzIiwiY29uZmlybURlbGV0ZUxpc3RzIiwidG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0cyIsInRvZ2dsZUhpZ2hsaWdodGVkTGlzdCIsImhpZ2hsaWdodGVkTGlzdElkIiwic2V0RGlmZmljdWx0eSIsImRpZmZpY3VsdHkiLCJzZXRGcmVxdWVuY3kiLCJmcmVxdWVuY3kiLCJnZXRVcGRhdGVkQ2F0ZWdvcmllcyIsImxpc3RDYXRlZ29yeSIsInNwbGl0Iiwic2V0Q2F0ZWdvcnkiLCJ1cGRhdGVkQ2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJsaXN0c1RvVXBkYXRlIiwiZXZlcnkiLCJhbGwiLCJsaXN0VG9VcGRhdGUiLCJ1cGRhdGVkTGlzdCIsImNhdGVnb3J5U3RhdHVzIiwiYW5zd2VyIiwicmVtb3ZlQWxsQnV0TGV0dGVycyIsImdldFNlbGVjdGVkTGlzdHNUaXRsZSIsImdldEJsdXJicyIsInR5cGUiLCJnZXR0aW5nQmx1cmJzIiwiZ2V0RW1iZWRVcmwiLCJ2aWRlb0lkIiwibWF0Y2giLCJ0cmltIiwidHJ1c3RBc1Jlc291cmNlVXJsIiwiZ2V0TGFuZ3VhZ2VzIiwibGFuZ3VhZ2VTdGF0cyIsImdldExpc3RMYW5ndWFnZVN0YXRzIiwiY2F0ZWdvcnlTdGF0cyIsImdldExpc3RDYXRlZ29yeVN0YXRzIiwiZ2V0VXNlcnMiLCJnZXRRdWV1ZSIsInF1ZXVlIiwiZ2V0UGF1c2UiLCJwYXVzZWQiLCJ1c2VycyIsInRvZ2dsZUJhbiIsInRvZ2dsZVBhdXNlIiwiJHN0YXRlUGFyYW1zIiwiZGlzYWJsZWRDYXRlZ29yaWVzIiwidXBkYXRlR2FtZUNhdGVnb3J5IiwiZ2FtZSIsImMiLCJnZXRHYW1lIiwiY2hlY2tBbnN3ZXIiLCJnZXREYXRhIiwiZ2V0VGVudGhpbmdzIiwiZ3Vlc3MiLCJhbnN3ZXJUZW50aGluZ3MiLCJnZXRIaW50IiwiZ2V0VGVudGhpbmdzSGludCIsInNraXBMaXN0Iiwic2tpcFRlbnRoaW5nc0xpc3QiLCJkYXRhc2V0cyIsImxpbmVDaGFydE9wdGlvbnMiLCJyZXNwb25zaXZlIiwicGx1Z2lucyIsImxlZ2VuZCIsInRpdGxlIiwiZ2V0UGxheVN0YXRzIiwieWVhcnMiLCJ1bmlxIiwibW9udGhzIiwidGltZXMiLCJwbGF5U3RhdHMiLCJzZXJpZXMiLCJtb250aCIsInVuaXF1ZVBsYXllcnMiLCJnZXRHYW1lU3RhdHMiLCJnYW1lU3RhdHMiLCJzb3J0ZWREYXRhIiwidGltZVJlbWFpbmluZyIsInRpbWVFeGVyY2lzaW5nIiwidGltZVJlc3RpbmciLCJyZXN0IiwiZXhlcmNpc2luZyIsInNvdW5kcyIsIkF1ZGlvIiwib2ZmIiwic3dpdGNoIiwiZXhlcmNpc2VzIiwicHJvZ3Jlc3MiLCJ3b3Jrb3V0IiwiZXhjZXJjaXNlVGltZSIsImNsZWFySW50ZXJ2YWwiLCJ0aW1lciIsImV4ZXJjaXNlIiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50RXhlcmNpc2UiLCJwbGF5IiwiZGlyZWN0aXZlIiwiJGRvY3VtZW50IiwicmVzdHJpY3QiLCJzY29wZSIsImNsaWNrT3V0c2lkZSIsImxpbmsiLCJlbCIsImF0dHIiLCJ0YXJnZXQiLCJjb250YWlucyIsIiRldmFsIiwiJHN0YXRlIiwiJGNvbXBpbGUiLCIkaW50ZXJwb2xhdGUiLCJnZXRTdHlsZSIsInRlbXBsYXRlU3R5bGVVcmwiLCJocmVmIiwicmVsIiwiZWxlbSIsInRlbXBsYXRlU3R5bGVzIiwiaHRtbCIsInN0YXJ0U3ltYm9sIiwiZW5kU3ltYm9sIiwiYXBwZW5kIiwidG9TdGF0ZSIsInRvUGFyYW1zIiwiZnJvbVN0YXRlIiwiZnJvbVBhcmFtcyIsInN0YXRlcyIsImdldCIsInZpZXdzIiwidmlldyIsImZsYXQiLCJnZXRTdHlsZXMiLCIkaHR0cCIsInN2YyIsImdldFRhc2tzIiwiY2hvaWNlcyIsInByaW9yaXR5TGlzdCIsImZpcnN0Q2hvaWNlIiwic2Vjb25kQ2hvaWNlIiwiY2hvaWNlIiwidCIsIm0iLCJzaHVmZmxlIiwiZ2V0UHJpb3JpdHlMaXN0IiwiZ2V0UXVpekZpbGVzIiwicXVpeiIsImdldEhpZ2hzY29yZSIsImZ1enp5TWF0Y2giLCJnZXRSYW5kb21MaXN0IiwicHV0IiwiZGVsZXRlIiwicmVwb3J0TGlzdCIsImdldFVzZXIiLCJzZXRUb2tlbiIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiY3JlYXRlVXNlciIsIkZpbGVTdmMiLCJhbmltYWxzIiwiYW5pbWFsIiwic291bmQiLCJjYXBpdGFsaXplIiwiZ2V0UmFuZG9tQW5pbWFscyIsImdldFNjb3JlIiwiaXNTY29yZVZpc2libGUiXSwibWFwcGluZ3MiOiJBQUFBLE1BQUFBLDJCQUFBQSxHQUFBLENBQ0E7SUFDQUMsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLENBQUE7RUFHQUMsT0FBQUEsR0FBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsTUFBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsQ0FBQTtBQUdBQyxNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGtCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBUiwyQkFBQUEsQ0FBQVMsTUFBQUEsQ0FBQSxDQUFBQyxNQUFBQSxFQUFBQyxNQUFBQSxLQUNBRCxNQUFBQSxDQUFBRSxPQUFBQSxDQUFBRCxNQUFBQSxDQUFBVCxPQUFBQSxFQUFBUyxNQUFBQSxDQUFBVixJQUFBQSxDQUFBQSxFQUNBWSxJQUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUE7QUFHQSxNQUFBQyxrQkFBQUEsR0FBQSxzQ0FBQTtFQUNBQyxNQUFBQSxHQUFBLHdFQUFBO0FBRUFYLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEseUJBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFELE9BQUFBLENBQUEsSUFBQUksTUFBQUEsQ0FBQSxJQUFBRixrQkFBQUEsR0FBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxFQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBVixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLHFCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBSSxXQUFBQSxFQUFBQSxDQUFBQyxnQkFBQUEsRUFBQUEsQ0FBQUMsdUJBQUFBLEVBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBZixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFNBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUFZLEtBQUFBLEVBQUFBO0lBQ0EsT0FBQVAsSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxJQUFBSSxNQUFBQSxDQUFBLEtBQUFGLGtCQUFBQSxHQUFBTSxLQUFBQSxHQUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FoQixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGVBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUFZLEtBQUFBLEVBQUFBO0lBQ0EsT0FBQVAsSUFBQUEsQ0FBQVEsTUFBQUEsR0FBQSxDQUFBLEdBQUFSLElBQUFBLEdBQUFBLElBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUFBLElBQUFBLENBQUFTLFNBQUFBLENBQUEsQ0FBQSxFQUFBVCxJQUFBQSxDQUFBUSxNQUFBQSxHQUFBLENBQUEsQ0FBQSxDQUFBRSxPQUFBQSxDQUFBSCxLQUFBQSxDQUFBQSxHQUFB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QSxFQUNBRixtQkFBQUEsQ0FBQUgsTUFBQUEsQ0FBQU0sVUFBQUEsQ0FBQUEsQ0FBQSxDQUFBLENBQUEsRUFFQUwsY0FBQUEsQ0FDQU0sS0FBQUEsQ0FBQSxNQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxPQUFBO0lBQ0FDLFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxRQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FDLFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FDLFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxhQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUUsVUFBQUEsRUFBQSxZQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxXQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxNQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxPQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGlCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG9CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxtQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsaUJBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsb0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGdCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxpQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxhQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFlBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxjQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsaUJBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGdCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsbUJBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsVUFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsV0FBQTtJQUNBRSxVQUFBQSxFQUFBLGNBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FB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Q0FBQUQsR0FBQUEsRUFDQSxPQUFBUCxTQUFBQSxDQUFBSyxJQUFBQSxDQUFBLE9BQUEsQ0FBQTtFQUVBRSxHQUFBQSxDQUFBRSxJQUFBQSxHQUFBLG9CQUFBLEVBQ0FGLEdBQUFBLENBQUFHLFNBQUFBLEdBQUEsS0FBQSxFQUNBSCxHQUFBQSxDQUFBSSxTQUFBQSxHQUFBLFFBQUE7RUFDQSxJQUFBQyxLQUFBQSxHQUFBLENBQUEsQ0FBQTtFQUNBLE1BQUFDLFNBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFFBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFVBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLEdBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFNBQUFBLEdBQUEsRUFBQTtFQUNBLElBQUFDLEtBQUFBLEdBQUF4RSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBd0UsU0FBQUEsQ0FBQUE7RUFDQSxNQUFBRSxZQUFBQSxHQUFBLENBQ0E7SUFDQUMsSUFBQUEsRUFBQSxPQUFBO0lBQ0FDLFlBQUFBLEVBQUEsYUFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7TUFDQTVLLENBQUFBLEVBQUEsQ0FBQTtNQUNBUyxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBb0ssR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO01BQ0FBLFNBQUFBLENBQUFDLFFBQUFBLElBQUEsR0FDQTtJQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FWLElBQUFBLEVBQUEsVUFBQTtJQUNBQyxZQUFBQSxFQUFBLFlBQUE7SUFDQUMsS0FBQUEsRUFBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUE7TUFDQUMsT0FBQUEsRUFBQSxDQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO01BQ0E1SyxDQUFBQSxFQUFBLENBQUE7TUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUE7SUFFQW9LLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7SUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtNQUNBQSxTQUFBQSxDQUFBRSxRQUFBQSxHQUFBLENBQUEsS0FDQUYsU0FBQUEsQ0FBQUcsWUFBQUEsSUFBQSxDQUFBLENBRUE7SUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBWixJQUFBQSxFQUFBLE9BQUE7SUFDQUMsWUFBQUEsRUFBQSxnQkFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7TUFDQTVLLENBQUFBLEVBQUEsQ0FBQTtNQUNBUyxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBb0ssR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO01BQ0FBLFNBQUFBLENBQUFJLEtBQUFBLElBQUEsQ0FDQTtJQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FiLElBQUFBLEVBQUEsUUFBQTtJQUNBQyxZQUFBQSxFQUFBLFFBQUE7SUFDQUMsS0FBQUEsRUFBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUE7TUFDQUMsT0FBQUEsRUFBQSxDQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO01BQ0E1SyxDQUFBQSxFQUFBLENBQUE7TUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUE7SUFFQW9LLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7SUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtNQUNBQSxTQUFBQSxDQUFBSyxNQUFBQSxHQUFBQSxDQUFBLENBQ0E7SUFBQTtFQUFBLENBQUEsRUFF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SUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBbUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FDQSxNQUFBLEVBQ0EsTUFBQSxHQUNBbkssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBbUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FwSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUFtSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXBLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQW1LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxDQUFBLEVBRUFILFFBQUFBLENBQUFFLFlBQUFBLENBQ0EsS0FBQSxFQUNBLE1BQUEsR0FDQW5LLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQW1LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBcEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBbUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FwSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUFtSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEdBQ0FuSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFtSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXBLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsR0FBQSxHQUFBLEdBQUEsR0FBQW1LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBcEssSUFBQUEs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QUFBLENBQUE7UUFDQXlJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFHLEdBQUFBLEVBQUE7UUFDQUwsS0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxFQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXZJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQXlJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFJLElBQUFBLEVBQUE7UUFDQU4sS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXZJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQXlJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFLLEtBQUFBLEVBQUE7UUFDQVAsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXZJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQXlJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFNLEtBQUFBLEVBQUE7UUFDQVIsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXZJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQXlJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFPLEtBQUFBLEVBQUE7UUFDQVQsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXZJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxF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LEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsUUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFdBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsZ0JBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsU0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxXQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsZUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLHdCQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsWUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLGNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsVUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsT0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxrQkFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsaUNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsa0NBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsUUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsZUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsUUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLHlCQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLHVDQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLDBCQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsYUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxlQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLGNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsT0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsVUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLE1BQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsWUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLGtCQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsZ0JBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsU0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsVUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxvQkFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsU0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLGdCQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsT0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsTUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSw2QkFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxpQ0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxlQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsT0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxzREFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsZUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsV0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxXQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsUUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLG1CQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsOENBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsV0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxNQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLGVBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsUUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxXQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLG1DQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsU0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsV0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsYUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLGdDQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLE1BQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsMkJBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsU0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsU0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsT0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsVUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLHVCQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLHdDQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLG9CQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsZ0JBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsWUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxrQ0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLGFBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsZUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxXQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsU0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxXQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsUUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsUUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxzQkFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLDRCQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsa0JBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsNENBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsTUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsT0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSwwQkFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsWUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFdBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsVUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsVUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsZUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLGdCQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsV0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxhQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsT0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLE1BQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsYUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxNQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsTUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxrQkFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxrQkFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxhQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsUUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSwyQkFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLGFBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEscUJBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsVUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsT0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsUUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxvQkFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLGNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsaUJBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsWUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsV0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSw4Q0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLHdCQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsY0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsU0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLGFBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsdUJBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsYUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSwyQkFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxzQkFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxXQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLDBCQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLE1BQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsNkJBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsTUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsU0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxhQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLGNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsU0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEscUJBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsUUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSwyQkFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSw4QkFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsc0NBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsMEJBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsU0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsa0NBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsbUNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEseUJBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsc0JBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsVUFBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLG1CQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWxQLElBQUFBLEVBQUEsT0FBQTtJQUFBa1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBbFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFrUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFsUCxJQUFBQSxFQUFBLGNBQUE7SUFBQWtQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7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T0FBQUEsQ0FBQTFzQixNQUNBO0FBQUEsQ0FBQSxDQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcCA9IFtcclxuICB7XHJcbiAgICBiYXNlOiBcIkFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0MVxcdTI0QjZcXHVGRjIxXFx1MDBDMFxcdTAwQzFcXHUwMEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxcdTAwQzNcXHUwMTAwXFx1MDEwMlxcdTFFQjBcXHUxRUFFXFx1MUVCNFxcdTFFQjJcXHUwMjI2XFx1MDFFMFxcdTAwQzRcXHUwMURFXFx1MUVBMlxcdTAwQzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBDNlxcdTAxRkNcXHUwMUUyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBT1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM4XFx1QTczQV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQyXFx1MjRCN1xcdUZGMjJcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUwMjQzXFx1MDE4MlxcdTAxODFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0M1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYxXFx1MDFDNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMlxcdTAxQzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0NVxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJGXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDZcXHUyNEJCXFx1RkYyNlxcdTFFMUVcXHUwMTkxXFx1QTc3Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiR1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ3XFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0OFxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIklcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0OVxcdTI0QkVcXHVGRjI5XFx1MDBDQ1xcdTAwQ0RcXHUwMENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxcdTAwQ0ZcXHUxRTJFXFx1MUVDOFxcdTAxQ0ZcXHUwMjA4XFx1MDIwQVxcdTFFQ0FcXHUwMTJFXFx1MUUyQ1xcdTAxOTddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIktcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QlxcdTI0QzBcXHVGRjJCXFx1MUUzMFxcdTAxRThcXHUxRTMyXFx1MDEzNlxcdTFFMzRcXHUwMTk4XFx1MkM2OVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3QTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0Q1xcdTI0QzFcXHVGRjJDXFx1MDEzRlxcdTAxMzlcXHUwMTNEXFx1MUUzNlxcdTFFMzhcXHUwMTNCXFx1MUUzQ1xcdTFFM0FcXHUwMTQxXFx1MDIzRFxcdTJDNjJcXHUyQzYwXFx1QTc0OFxcdUE3NDZcXHVBNzgwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJNXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNERcXHUyNEMyXFx1RkYyRFxcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTJDNkVcXHUwMTlDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5KXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0RlxcdTI0QzRcXHVGRjJGXFx1MDBEMlxcdTAwRDNcXHUwMEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxcdTAwRDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHUwMEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xcdTAwRDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT0lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT09cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT1VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUwXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJRXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTFcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUlwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUyXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiU1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUzXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU0XFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MjhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1NVxcdTI0Q0FcXHVGRjM1XFx1MDBEOVxcdTAwREFcXHUwMERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHUwMERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU2XFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVllcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc2MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiV1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU3XFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJYXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNThcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTlcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHUwMEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDVBXFx1MjRDRlxcdUZGM0FcXHUwMTc5XFx1MUU5MFxcdTAxN0JcXHUwMTdEXFx1MUU5MlxcdTFFOTRcXHUwMUI1XFx1MDIyNFxcdTJDN0ZcXHUyQzZCXFx1QTc2Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDYxXFx1MjREMFxcdUZGNDFcXHUxRTlBXFx1MDBFMFxcdTAwRTFcXHUwMEUyXFx1MUVBN1xcdTFFQTVcXHUxRUFCXFx1MUVBOVxcdTAwRTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxcdTAwRTRcXHUwMURGXFx1MUVBM1xcdTAwRTVcXHUwMUZCXFx1MDFDRVxcdTAyMDFcXHUwMjAzXFx1MUVBMVxcdTFFQURcXHUxRUI3XFx1MUUwMVxcdTAxMDVcXHUyQzY1XFx1MDI1MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBFNlxcdTAxRkRcXHUwMUUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM5XFx1QTczQl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczRF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDYyXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2M1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxcdTAwRTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY0XFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGM1xcdTAxQzZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2NVxcdTI0RDRcXHVGRjQ1XFx1MDBFOFxcdTAwRTlcXHUwMEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xcdTAwRUJcXHUxRUJCXFx1MDExQlxcdTAyMDVcXHUwMjA3XFx1MUVCOVxcdTFFQzdcXHUwMjI5XFx1MUUxRFxcdTAxMTlcXHUxRTE5XFx1MUUxQlxcdTAyNDdcXHUwMjVCXFx1MDFERF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY2XFx1MjRENVxcdUZGNDZcXHUxRTFGXFx1MDE5MlxcdUE3N0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2N1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJoXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaHZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDE5NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDY5XFx1MjREOFxcdUZGNDlcXHUwMEVDXFx1MDBFRFxcdTAwRUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHUwMEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwialwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZBXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImtcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QlxcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZEXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiblwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZFXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxcdTAwRjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibmpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZGXFx1MjRERVxcdUZGNEZcXHUwMEYyXFx1MDBGM1xcdTAwRjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx1MDBGNVxcdTFFNERcXHUwMjJEXFx1MUU0RlxcdTAxNERcXHUxRTUxXFx1MUU1M1xcdTAxNEZcXHUwMjJGXFx1MDIzMVxcdTAwRjZcXHUwMjJCXFx1MUVDRlxcdTAxNTFcXHUwMUQyXFx1MDIwRFxcdTAyMEZcXHUwMUExXFx1MUVERFxcdTFFREJcXHUxRUUxXFx1MUVERlxcdTFFRTNcXHUxRUNEXFx1MUVEOVxcdTAxRUJcXHUwMUVEXFx1MDBGOFxcdTAxRkZcXHUwMjU0XFx1QTc0QlxcdUE3NERcXHUwMjc1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvaVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUEzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMjIzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzRGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJwXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3MVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJyXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJzXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzNcXHUyNEUyXFx1RkY1M1xcdTAwREZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ0elwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ1XCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzVcXHUyNEU0XFx1RkY1NVxcdTAwRjlcXHUwMEZBXFx1MDBGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx1MDBGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIndcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3N1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OVxcdTI0RThcXHVGRjU5XFx1MUVGM1xcdTAwRkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx1MDBGRlxcdTFFRjdcXHUxRTk5XFx1MUVGNVxcdTAxQjRcXHUwMjRGXFx1MUVGRl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwielwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDdBXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M10vZyxcclxuICB9LFxyXG5dO1xyXG5jb25zdCBkb21haW5zID0gW1xyXG4gIFwiLmNvbVwiLFxyXG4gIFwiLm9yZ1wiLFxyXG4gIFwiLm5ldFwiLFxyXG4gIFwiLmFjXCIsXHJcbiAgXCIuYWRcIixcclxuICBcIi5hZVwiLFxyXG4gIFwiLmFmXCIsXHJcbiAgXCIuYWdcIixcclxuICBcIi5haVwiLFxyXG4gIFwiLmFsXCIsXHJcbiAgXCIuYW1cIixcclxuICBcIi5hb1wiLFxyXG4gIFwiLmFxXCIsXHJcbiAgXCIuYXJcIixcclxuICBcIi5hc1wiLFxyXG4gIFwiLmF0XCIsXHJcbiAgXCIuYXVcIixcclxuICBcIi5hd1wiLFxyXG4gIFwiLmF4XCIsXHJcbiAgXCIuYXpcIixcclxuICBcIi5iYVwiLFxyXG4gIFwiLmJiXCIsXHJcbiAgXCIuYmRcIixcclxuICBcIi5iZVwiLFxyXG4gIFwiLmJmXCIsXHJcbiAgXCIuYmdcIixcclxuICBcIi5iaFwiLFxyXG4gIFwiLmJpXCIsXHJcbiAgXCIuYmpcIixcclxuICBcIi5ibVwiLFxyXG4gIFwiLmJuXCIsXHJcbiAgXCIuYm9cIixcclxuICBcIi5icVwiLFxyXG4gIFwiLmJyXCIsXHJcbiAgXCIuYnNcIixcclxuICBcIi5idFwiLFxyXG4gIFwiLmJ3XCIsXHJcbiAgXCIuYnlcIixcclxuICBcIi5ielwiLFxyXG4gIFwiLmNhXCIsXHJcbiAgXCIuY2NcIixcclxuICBcIi5jZFwiLFxyXG4gIFwiLmNmXCIsXHJcbiAgXCIuY2dcIixcclxuICBcIi5jaFwiLFxyXG4gIFwiLmNpXCIsXHJcbiAgXCIuY2tcIixcclxuICBcIi5jbFwiLFxyXG4gIFwiLmNtXCIsXHJcbiAgXCIuY25cIixcclxuICBcIi5jb1wiLFxyXG4gIFwiLmNyXCIsXHJcbiAgXCIuY3VcIixcclxuICBcIi5jdlwiLFxyXG4gIFwiLmN3XCIsXHJcbiAgXCIuY3hcIixcclxuICBcIi5jeVwiLFxyXG4gIFwiLmN6XCIsXHJcbiAgXCIuZGVcIixcclxuICBcIi5kalwiLFxyXG4gIFwiLmRrXCIsXHJcbiAgXCIuZG1cIixcclxuICBcIi5kb1wiLFxyXG4gIFwiLmR6XCIsXHJcbiAgXCIuZWNcIixcclxuICBcIi5lZVwiLFxyXG4gIFwiLmVnXCIsXHJcbiAgXCIuZWhcIixcclxuICBcIi5lclwiLFxyXG4gIFwiLmVzXCIsXHJcbiAgXCIuZXRcIixcclxuICBcIi5ldVwiLFxyXG4gIFwiLmZpXCIsXHJcbiAgXCIuZmpcIixcclxuICBcIi5ma1wiLFxyXG4gIFwiLmZtXCIsXHJcbiAgXCIuZm9cIixcclxuICBcIi5mclwiLFxyXG4gIFwiLmdhXCIsXHJcbiAgXCIuZ2RcIixcclxuICBcIi5nZVwiLFxyXG4gIFwiLmdmXCIsXHJcbiAgXCIuZ2dcIixcclxuICBcIi5naFwiLFxyXG4gIFwiLmdpXCIsXHJcbiAgXCIuZ2xcIixcclxuICBcIi5nbVwiLFxyXG4gIFwiLmduXCIsXHJcbiAgXCIuZ3BcIixcclxuICBcIi5ncVwiLFxyXG4gIFwiLmdyXCIsXHJcbiAgXCIuZ3NcIixcclxuICBcIi5ndFwiLFxyXG4gIFwiLmd1XCIsXHJcbiAgXCIuZ3dcIixcclxuICBcIi5neVwiLFxyXG4gIFwiLmhrXCIsXHJcbiAgXCIuaG1cIixcclxuICBcIi5oblwiLFxyXG4gIFwiLmhyXCIsXHJcbiAgXCIuaHRcIixcclxuICBcIi5odVwiLFxyXG4gIFwiLmlkXCIsXHJcbiAgXCIuaWVcIixcclxuICBcIi5pbFwiLFxyXG4gIFwiLmltXCIsXHJcbiAgXCIuaW5cIixcclxuICBcIi5pb1wiLFxyXG4gIFwiLmlxXCIsXHJcbiAgXCIuaXJcIixcclxuICBcIi5pc1wiLFxyXG4gIFwiLml0XCIsXHJcbiAgXCIuamVcIixcclxuICBcIi5qbVwiLFxyXG4gIFwiLmpvXCIsXHJcbiAgXCIuanBcIixcclxuICBcIi5rZVwiLFxyXG4gIFwiLmtnXCIsXHJcbiAgXCIua2hcIixcclxuICBcIi5raVwiLFxyXG4gIFwiLmttXCIsXHJcbiAgXCIua25cIixcclxuICBcIi5rcFwiLFxyXG4gIFwiLmtyXCIsXHJcbiAgXCIua3dcIixcclxuICBcIi5reVwiLFxyXG4gIFwiLmt6XCIsXHJcbiAgXCIubGFcIixcclxuICBcIi5sYlwiLFxyXG4gIFwiLmxjXCIsXHJcbiAgXCIubGlcIixcclxuICBcIi5sa1wiLFxyXG4gIFwiLmxyXCIsXHJcbiAgXCIubHNcIixcclxuICBcIi5sdFwiLFxyXG4gIFwiLmx1XCIsXHJcbiAgXCIubHZcIixcclxuICBcIi5seVwiLFxyXG4gIFwiLm1hXCIsXHJcbiAgXCIubWNcIixcclxuICBcIi5tZFwiLFxyXG4gIFwiLm1lXCIsXHJcbiAgXCIubWdcIixcclxuICBcIi5taFwiLFxyXG4gIFwiLm1rXCIsXHJcbiAgXCIubWxcIixcclxuICBcIi5tbVwiLFxyXG4gIFwiLm1uXCIsXHJcbiAgXCIubW9cIixcclxuICBcIi5tcFwiLFxyXG4gIFwiLm1xXCIsXHJcbiAgXCIubXJcIixcclxuICBcIi5tc1wiLFxyXG4gIFwiLm10XCIsXHJcbiAgXCIubXVcIixcclxuICBcIi5tdlwiLFxyXG4gIFwiLm13XCIsXHJcbiAgXCIubXhcIixcclxuICBcIi5teVwiLFxyXG4gIFwiLm16XCIsXHJcbiAgXCIubmFcIixcclxuICBcIi5uY1wiLFxyXG4gIFwiLm5lXCIsXHJcbiAgXCIubmZcIixcclxuICBcIi5uZ1wiLFxyXG4gIFwiLm5pXCIsXHJcbiAgXCIubmxcIixcclxuICBcIi5ub1wiLFxyXG4gIFwiLm5wXCIsXHJcbiAgXCIubnJcIixcclxuICBcIi5udVwiLFxyXG4gIFwiLm56XCIsXHJcbiAgXCIub21cIixcclxuICBcIi5wYVwiLFxyXG4gIFwiLnBlXCIsXHJcbiAgXCIucGZcIixcclxuICBcIi5wZ1wiLFxyXG4gIFwiLnBoXCIsXHJcbiAgXCIucGtcIixcclxuICBcIi5wbFwiLFxyXG4gIFwiLnBtXCIsXHJcbiAgXCIucG5cIixcclxuICBcIi5wclwiLFxyXG4gIFwiLnBzXCIsXHJcbiAgXCIucHRcIixcclxuICBcIi5wd1wiLFxyXG4gIFwiLnB5XCIsXHJcbiAgXCIucWFcIixcclxuICBcIi5yZVwiLFxyXG4gIFwiLnJvXCIsXHJcbiAgXCIucnNcIixcclxuICBcIi5ydVwiLFxyXG4gIFwiLnJ3XCIsXHJcbiAgXCIuc2FcIixcclxuICBcIi5zYlwiLFxyXG4gIFwiLnNjXCIsXHJcbiAgXCIuc2RcIixcclxuICBcIi5zZVwiLFxyXG4gIFwiLnNnXCIsXHJcbiAgXCIuc2hcIixcclxuICBcIi5zaVwiLFxyXG4gIFwiLnNrXCIsXHJcbiAgXCIuc2xcIixcclxuICBcIi5zbVwiLFxyXG4gIFwiLnNuXCIsXHJcbiAgXCIuc29cIixcclxuICBcIi5zclwiLFxyXG4gIFwiLnNzXCIsXHJcbiAgXCIuc3RcIixcclxuICBcIi5zdVwiLFxyXG4gIFwiLnN2XCIsXHJcbiAgXCIuc3hcIixcclxuICBcIi5zeVwiLFxyXG4gIFwiLnN6XCIsXHJcbiAgXCIudGNcIixcclxuICBcIi50ZFwiLFxyXG4gIFwiLnRmXCIsXHJcbiAgXCIudGdcIixcclxuICBcIi50aFwiLFxyXG4gIFwiLnRqXCIsXHJcbiAgXCIudGtcIixcclxuICBcIi50bFwiLFxyXG4gIFwiLnRtXCIsXHJcbiAgXCIudG5cIixcclxuICBcIi50b1wiLFxyXG4gIFwiLnRyXCIsXHJcbiAgXCIudHRcIixcclxuICBcIi50dlwiLFxyXG4gIFwiLnR3XCIsXHJcbiAgXCIudHpcIixcclxuICBcIi51YVwiLFxyXG4gIFwiLnVnXCIsXHJcbiAgXCIudWtcIixcclxuICBcIi51c1wiLFxyXG4gIFwiLnV5XCIsXHJcbiAgXCIudXpcIixcclxuICBcIi52YVwiLFxyXG4gIFwiLnZjXCIsXHJcbiAgXCIudmVcIixcclxuICBcIi52Z1wiLFxyXG4gIFwiLnZpXCIsXHJcbiAgXCIudm5cIixcclxuICBcIi52dVwiLFxyXG4gIFwiLndmXCIsXHJcbiAgXCIud3NcIixcclxuICBcIi55ZVwiLFxyXG4gIFwiLnl0XCIsXHJcbiAgXCIuemFcIixcclxuICBcIi56bVwiLFxyXG4gIFwiLnp3XCIsXHJcbl07XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVEaWFjcml0aWNzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcC5yZWR1Y2UoKHJlc3VsdCwgbGV0dGVyKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXN1bHQucmVwbGFjZShsZXR0ZXIubGV0dGVycywgbGV0dGVyLmJhc2UpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBTUEVDSUFMX0NIQVJBQ1RFUlMgPSBcIlxcXFxcXFxcLyAhP0AjJCVeJiooKV8rOi57fSw7XFxcXC0nYGDigJnigJhcXFwi4oCUXCI7XHJcbmNvbnN0IFZPV0VMUyA9IFwiYWVpb3VBRUlPVcOgw6jDrMOyw7nDgMOIw4zDksOZw6HDqcOtw7PDusO9w4HDicONw5PDmsOdw6LDqsOuw7TDu8OCw4rDjsOUw5vDo8Oxw7XDg8ORw5XDpMOrw6/DtsO8w7/DhMOLw4/DlsOcxbjDp8OHw5/DmMO4w4XDpcOGw6bFk1wiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFske1NQRUNJQUxfQ0hBUkFDVEVSU31dYCwgXCJnaVwiKSwgXCJcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVBbGxCdXRMZXR0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9Mb3dlckNhc2UoKS5yZW1vdmVEaWFjcml0aWNzKCkucmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMoKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNvbmNlYWxcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZXh0cmEpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChgW14ke1NQRUNJQUxfQ0hBUkFDVEVSU30ke2V4dHJhfV1gLCBcImdpXCIpLCBcIuKBjlwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNvbmNlYWxNaWRkbGVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZXh0cmEpIHtcclxuICAgIHJldHVybiB0aGlzLmxlbmd0aCA8IDMgPyB0aGlzIDogdGhpc1swXSArIHRoaXMuc3Vic3RyaW5nKDEsIHRoaXMubGVuZ3RoIC0gMSkuY29uY2VhbChleHRyYSkgKyB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjYXBpdGFsaXplXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnNsaWNlKDEpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlSFRNTFwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoXCI+XCIsIFwiXFx1MjI3QlwiKS5yZXBsYWNlKFwiPFwiLCBcIlxcdTIyN0FcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJwYXJzZVN5bWJvbHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlQWxsKFwiJlwiLCBcIiZhbXA7XCIpLnJlcGxhY2UoXCI8XCIsIFwiJmx0O1wiKS5yZXBsYWNlKFwiPlwiLCBcIiZndDtcIikucmVwbGFjZUFsbChcIiNcIiwgXCImbnVtO1wiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlcGxhY2VBcnJheVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChmaW5kLCByZXBsYWNlKSB7XHJcbiAgICB2YXIgcmVwbGFjZVN0cmluZyA9IHRoaXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcmVwbGFjZVN0cmluZyA9IHJlcGxhY2VTdHJpbmcucmVwbGFjZShmaW5kW2ldLCByZXBsYWNlW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXBsYWNlU3RyaW5nO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwibWFza1VSTHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlQXJyYXkoW1wiaHR0cHM6Ly9cIiwgXCJodHRwOi8vXCJdLCBcIm5vcGU6Ly9cIikucmVwbGFjZUFycmF5KGRvbWFpbnMsIFwiLm5vcGVcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJtYWtlUmVhZGFibGVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VQZXJjZW50YWdlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGRlY2ltYWxzKSB7XHJcbiAgICBpZiAoZGVjaW1hbHMgPT09IHVuZGVmaW5lZCkgZGVjaW1hbHMgPSAyO1xyXG4gICAgcmV0dXJuIGAkeyh0aGlzICogMTAwKS50b0ZpeGVkKGRlY2ltYWxzKX0lYDtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHNvcnRPYmplY3QgPSAob2JqLCBkaXJlY3Rpb24pID0+IHtcclxuICBsZXQgYXJyID0gW107XHJcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICBhcnIucHVzaChba2V5LCBvYmpba2V5XV0pO1xyXG4gIH1cclxuICBhcnIuc29ydCgoYSwgYikgPT4gKGRpcmVjdGlvbiA/IGFbMV0gLSBiWzFdIDogYlsxXSAtIGFbMV0pKTtcclxuICBsZXQgb2JqU29ydGVkID0ge307XHJcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IChvYmpTb3J0ZWRbaXRlbVswXV0gPSBpdGVtWzFdKSk7XHJcbiAgLy9hcnIuc29ydChmdW5jdGlvbihhLCBiKSB7IGEudmFsdWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIudmFsdWUudG9Mb3dlckNhc2UoKSk7IH0pOyAvL3VzZSB0aGlzIHRvIHNvcnQgYXMgc3RyaW5nc1xyXG4gIHJldHVybiBvYmpTb3J0ZWQ7IC8vIHJldHVybnMgYXJyYXlcclxufTtcclxuIiwiLypcclxuJCA9IGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG52YXIgYm9vdHN0cmFwID0gcmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG52YXIgYW5ndWxhclNhbml0aXplID0gcmVxdWlyZSgnYW5ndWxhci1zYW5pdGl6ZScpO1xyXG52YXIgYW5ndWxhckFuaW1hdGUgPSByZXF1aXJlKCdhbmd1bGFyLWFuaW1hdGUnKTtcclxuKi9cclxuYW5ndWxhci5tb2R1bGUoXCJhcHBcIiwgW1xyXG4gIFwidWkucm91dGVyXCIsXHJcbiAgXCJ1aS5ib290c3RyYXBcIixcclxuICBcIm5nQW5pbWF0ZVwiLFxyXG4gIFwibmdTYW5pdGl6ZVwiLFxyXG4gIFwibmdNYXRlcmlhbFwiLFxyXG4gIFwibmdNZXNzYWdlc1wiLFxyXG4gIFwibmdEcmFnRHJvcFwiLFxyXG4gIFwibmdUYWdzSW5wdXRcIixcclxuICBcInZjUmVjYXB0Y2hhXCIsXHJcbiAgXCJjaGFydC5qc1wiLFxyXG4gIFwidGMuY2hhcnRqc1wiLFxyXG4gIFwiaW5maW5pdGUtc2Nyb2xsXCIsXHJcbl0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICR1cmxTZXJ2aWNlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XHJcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcIi9ob21lXCIpO1xyXG4gICR1cmxTZXJ2aWNlUHJvdmlkZXIuY29uZmlnLnN0cmljdE1vZGUoZmFsc2UpO1xyXG5cclxuICAkc3RhdGVQcm92aWRlclxyXG4gICAgLnN0YXRlKFwiaG9tZVwiLCB7XHJcbiAgICAgIHVybDogXCIvaG9tZVwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvaG9tZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicG9saWN5XCIsIHtcclxuICAgICAgdXJsOiBcIi9wb2xpY3lcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3BvbGljeS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicHJpbnRcIiwge1xyXG4gICAgICB1cmw6IFwiL3ByaW50XCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wcmludC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiZXhwZXJpZW5jZVwiLCB7XHJcbiAgICAgIHVybDogXCIvZXhwZXJpZW5jZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkV4cGVyaWVuY2VDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9leHBlcmllbmNlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJza2lsbHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3NraWxsc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlNraWxsc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3NraWxscy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiaG9iYmllc1wiLCB7XHJcbiAgICAgIHVybDogXCIvaG9iYmllc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkhvYmJpZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9ob2JiaWVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJjb250YWN0XCIsIHtcclxuICAgICAgdXJsOiBcIi9jb250YWN0XCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQ29udGFjdEN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2NvbnRhY3QuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcIndvcmtvdXRcIiwge1xyXG4gICAgICB1cmw6IFwiL3dvcmtvdXRcIixcclxuICAgICAgY29udHJvbGxlcjogXCJXb3Jrb3V0Q3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvd29ya291dC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicG9zdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3Bvc3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUG9zdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wb3N0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicHJvZmlsZVwiLCB7XHJcbiAgICAgIHVybDogXCIvcHJvZmlsZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlByb2ZpbGVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wcm9maWxlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJsaXN0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvbGlzdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJMaXN0c0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwibGlzdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImJ1YmJsZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2J1YmJsZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJCdWJibGVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJidWJibGVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJhc3Rlcm9pZHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2FzdGVyb2lkc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkFzdGVyb2lkc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiYXN0ZXJvaWRzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJsZW1taW5nc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbGVtbWluZ3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJMZW1taW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwibGVtbWluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImJvdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2JvdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLWFkbWluXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3MtYWRtaW5cIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NBZG1pbkN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLWFkbWluLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3MtZ2FtZVwiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLzpnYW1lXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzR2FtZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLWdhbWUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1zdGF0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLXN0YXRzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzU3RhdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1zdGF0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLXBsYXlcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy9wbGF5XCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzUGxheUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLXBsYXkuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotZ29vZ2xlXCIsIHtcclxuICAgICAgdXJsOiBcIi9nb29nbGVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6R29vZ2xlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL2dvb2dsZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1sb2dvc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbG9nb3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6TG9nb3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvbG9nb3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotYW5pbWFsc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYW5pbWFsc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpBbmltYWxzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL2FuaW1hbHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotc2tlbGV0b25zXCIsIHtcclxuICAgICAgdXJsOiBcIi9za2VsZXRvbnNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6U2tlbGV0b25zQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL3NrZWxldG9ucy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1tb3ZpZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL21vdmllc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpNb3ZpZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvbW92aWVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJjaGFyYWRlc1wiLCB7XHJcbiAgICAgIHVybDogXCIvY2hhcmFkZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJDaGFyYWRlc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2NoYXJhZGVzLmh0bWxcIixcclxuICAgIH0pO1xyXG5cclxuICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoe1xyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIHJlcXVpcmVCYXNlOiBmYWxzZSxcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnV2ViU29ja2V0U3ZjJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICR0aW1lb3V0KSB7XHJcbiAgZnVuY3Rpb24gd2Vic29ja2V0SG9zdCgpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonKSB7XHJcbiAgICAgIHJldHVybiBcIndzczovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJ3czovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgY29ubmVjdGlvbjtcclxuICB2YXIgY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KHdlYnNvY2tldEhvc3QoKSk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY29ubmVjdGVkJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY2xvc2VkLiBSZWNvbm5lY3RpbmcuLi4nKTtcclxuICAgICAgJHRpbWVvdXQoY29ubmVjdCwgMTAwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlICsgXCIgLSBTdGF0ZTogXCIgKyBjb25uZWN0aW9uLnJlYWR5U3RhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBwYXlsb2FkID0gSlNPTi5wYXJzZShlLmRhdGEpO1xyXG4gICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3dzOicgKyBwYXlsb2FkLnRvcGljLCBwYXlsb2FkLmRhdGEpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICB0aGlzLnNlbmQgPSBmdW5jdGlvbiAodG9waWMsIGRhdGEpIHtcclxuICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoe3RvcGljOiB0b3BpYywgZGF0YTogZGF0YX0pO1xyXG4gICAgY29ubmVjdGlvbi5zZW5kKGpzb24pO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuY29ubmVjdCA9IGNvbm5lY3Q7XHJcblxyXG59KS5ydW4oZnVuY3Rpb24gKFdlYlNvY2tldFN2Yykge1xyXG4gIFdlYlNvY2tldFN2Yy5jb25uZWN0KCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQXBwQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBMYW5ndWFnZVN2YywgVXNlclN2YywgJG1kVG9hc3QpIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiJWNZb3Ugc25lYWt5IGJ1Z2dlciFcIixcclxuICAgIFwiZm9udDogMmVtIHNhbnMtc2VyaWY7IGNvbG9yOiBEb2RnZXJCbHVlOyB0ZXh0LXNoYWRvdzogMnB4IDAgMCAjNDQ0LCAtMnB4IDAgMCAjNDQ0LCAwIDJweCAwICM0NDQsIDAgLTJweCAwICM0NDQsIDFweCAxcHggIzQ0NCwgLTFweCAtMXB4IDAgIzQ0NCwgMXB4IC0xcHggMCAjNDQ0LCAtMXB4IDFweCAwICM0NDQ7XCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiSSdtIGdsYWQgeW91J3JlIGN1cmlvdXMgd2hldGhlciBzb21ldGhpbmcgaXMgcG9wcGluZyB1cCBpbiBoZXJlLiBJJ20gYSBiaXQgb2YgYSBzdGlja2xlciB3aGVuIGl0IGNvbWVzIHRvIG1lc3NhZ2VzIGluIHRoZSBjb25zb2xlIHNvIEkgdHJ5IHRvIG1ha2Ugc3VyZSBvbmx5IHRoaW5ncyBJIHdhbnQgYXJlIHZpc2libGUuIFRoYXQgYmVpbmcgc2FpZCwgaWYgdGhlcmUgaXMgYSBiaWcgZXJyb3IgaGVyZSwgSSB3b3VsZCByZWFsbHkgYXBwcmVjaWF0ZSB5b3UgdGVsbGluZyBtZSBzbyBJIGNhbiBnZXQgcmlkIG9mIGl0IVwiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIlRoZSBjb2RlIGZvciBteSByZXN1bWUgaXMgaG9zdGVkIG9uIEdpdGh1YiBpZiB5b3UgcmVhbGx5IHdhbnQgdG8gZ28gaW50byBhbGwgdGhpcyEgPT4gaHR0cHM6Ly9naXRodWIuY29tL0ZsYW5kZXJzQnVyZ2VyL3Jlc3VtZVwiLFxyXG4gICk7XHJcblxyXG4gICRzY29wZS50b2FzdCA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAkbWRUb2FzdC5zaG93KFxyXG4gICAgICAkbWRUb2FzdFxyXG4gICAgICAgIC5zaW1wbGUoKVxyXG4gICAgICAgIC5wYXJlbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b2FzdFwiKSlcclxuICAgICAgICAudGV4dENvbnRlbnQobWVzc2FnZSlcclxuICAgICAgICAucG9zaXRpb24oXCJ0b3AgcmlnaHRcIilcclxuICAgICAgICAuaGlkZURlbGF5KDMwMDApLFxyXG4gICAgKTtcclxuICB9O1xyXG4gIC8qXHJcbiAgICAkKGRvY3VtZW50KS5iaW5kKFwia2V5dXAga2V5ZG93blwiLCBmdW5jdGlvbihlKXtcclxuICAgICAgaWYoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PSA4MCl7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgKi9cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5sb2FkaW5nXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuY2hlY2tib3gtbWVudVwiKS5vbihcImNoYW5nZVwiLCBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KFwibGlcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIiwgdGhpcy5jaGVja2VkKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5hbGxvdy1mb2N1c1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnRoZW1lQ291bnRlciA9IDY7XHJcbiAgJHNjb3BlLnRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAkc2NvcGUueWVhciA9ICRzY29wZS50b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICRzY29wZS5yYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcclxuXHJcbiAgJHNjb3BlLmZsaXBUaGVtZSA9ICgpID0+IHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5zaG93KCk7XHJcbiAgICAkKFwiLmNvbnRlbnRcIikuaGlkZSgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgICB9LCA4MDApO1xyXG4gICAgJHNjb3BlLnRoZW1lQ291bnRlciA9ICRzY29wZS50aGVtZUNvdW50ZXIgPCA2ID8gJHNjb3BlLnRoZW1lQ291bnRlciArIDEgOiAoJHNjb3BlLnRoZW1lQ291bnRlciA9IDEpO1xyXG4gIH07XHJcblxyXG4gICQuZ2V0SlNPTihcIi9za2lsbHMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLnNraWxscyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuZW5hYmxlZDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvaG9iYmllcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuaG9iYmllcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9leHBlcmllbmNlLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5qb2JzID0gZGF0YTtcclxuICAgICRzY29wZS5qb2JzLmZvckVhY2goKGpvYikgPT4ge1xyXG4gICAgICBqb2Iuc3RhcnREYXRlID0gbmV3IERhdGUoam9iLnN0YXJ0RGF0ZSk7XHJcbiAgICAgIGlmIChqb2IuZW5kRGF0ZSkgam9iLmVuZERhdGUgPSBuZXcgRGF0ZShqb2IuZW5kRGF0ZSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2NoYXJhZGVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5jaGFyYWRlcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5nZXRUaW1lU3BhbiA9IChqb2IpID0+IHtcclxuICAgIHJldHVybiBqb2Iuc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyAoam9iLmVuZERhdGUgPyBcIiAtIFwiICsgam9iLmVuZERhdGUuZ2V0RnVsbFllYXIoKSA6IFwiIC0gVG9kYXlcIik7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmxhbmd1YWdlcyA9IExhbmd1YWdlU3ZjLmxhbmd1YWdlcztcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBMYW5ndWFnZVN2Yy5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0TGFuZ3VhZ2UgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5ob3ZlcmRpdiA9IChlLCBkaXZpZCkgPT4ge1xyXG4gICAgdmFyIGxlZnQgPSBlLmNsaWVudFggKyBcInB4XCI7XHJcbiAgICB2YXIgdG9wID0gZS5jbGllbnRZICsgMjAgKyBcInB4XCI7XHJcblxyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdmlkKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcImxlZnRcIiwgbGVmdCk7XHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcInRvcFwiLCB0b3ApO1xyXG5cclxuICAgICQoXCIjXCIgKyBkaXZpZCkudG9nZ2xlKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikge1xyXG4gICAgVXNlclN2Yy5sb2dpbih3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGxvZ2luKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8sIHVzZXIpID0+IHtcclxuICAgIGxvZ2luKHVzZXIpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XHJcbiAgICBpZiAoISRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIgPSB1c2VyLl9pZDtcclxuICAgICAgJHNjb3BlLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUpO1xyXG4gICAgICAkc2NvcGUuJGJyb2FkY2FzdChcImxvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS4kb24oXCJ1cGRhdGVcIiwgKF8sIHVzZXIpID0+IHtcclxuICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlID0gbmV3IERhdGUoJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSk7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkaW5nXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5zaG93KCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkZWRcIiwgKF8sIHVzZXIpID0+IHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIiNsb2FkaW5nLWljb25cIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmxvZ291dCA9ICgpID0+IHtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgIC5hdXRoKClcclxuICAgICAgLnNpZ25PdXQoKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dvdXRcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgbW9udGhzID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpICsgXCItXCIgKyBtb250aHNbZGF0ZS5nZXRNb250aCgpXSArIFwiLVwiICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQXN0ZXJvaWRzQ3RybFwiLCBmdW5jdGlvbiAoJGxvY2F0aW9uLCAkc2NvcGUsIEdhbWVTdmMpIHtcclxuICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcclxuICBpZiAoIWNhbnZhcykge1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoXCIvaG9tZVwiKTtcclxuICAgIHJldHVybiBhbGVydChcIlwiKTtcclxuICB9XHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICBpZiAoIWN0eCkge1xyXG4gICAgcmV0dXJuICRsb2NhdGlvbi5wYXRoKFwiL2hvbWVcIik7XHJcbiAgfVxyXG4gIGN0eC5mb250ID0gXCIzMHB4IENvbWljIFNhbnMgTVNcIjtcclxuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBsZXQgc2hvdHMgPSB7fTtcclxuICBjb25zdCBhc3Rlcm9pZHMgPSB7fTtcclxuICBjb25zdCBwb3dlcnVwcyA9IHt9O1xyXG4gIGNvbnN0IGV4cGxvc2lvbnMgPSB7fTtcclxuICBjb25zdCBtYXAgPSB7fTtcclxuICBjb25zdCBzcGFjZXBpY3MgPSAxMDtcclxuICBsZXQgc3BhY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFjZXBpY3MpO1xyXG4gIGNvbnN0IHBvd2VydXBUeXBlcyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJzcGVlZFwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiTWF4IFNwZWVkIOKHp1wiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogNCxcclxuICAgICAgICBzaXplOiBbMTQsIDM1XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAubWF4U3BlZWQgKz0gMTAwO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJjb29sZG93blwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiQ29vbGRvd24g4oepXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiAzLFxyXG4gICAgICAgIHNpemU6IFsxNywgMTddLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuY29vbGRvd25UaW1lIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJyYW5nZVwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiRmlyaW5nIFJhbmdlIOKHp1wiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDQsXHJcbiAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICBzaXplOiBbMzAsIDhdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5yYW5nZSArPSA1O1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJzaGllbGRcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIlNoaWVsZFwiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDUsXHJcbiAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICBzaXplOiBbMTksIDE5XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAuc2hpZWxkID0gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwibnVrZVwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiTnVrZVwiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogOCxcclxuICAgICAgICBzaXplOiBbMTUsIDE1XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bhd25Bc3Rlcm9pZHMoNSk7XHJcbiAgICAgIH0sXHJcbiAgICB9IC8qXHJcbiAgICAnc2lkZV9jYW5ub25zJyxcclxuICAgICdsYXNlcicsXHJcbiAgICAnc2hpZWxkJyxcclxuICAgICdsaWZlJyxcclxuICAgICdtaXNzaWxlcycsXHJcbiAgICAnbnVrZSdcclxuICAgICovLFxyXG4gIF07XHJcbiAgcG93ZXJ1cFR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHBvd2VydXAsIGksIGFycmF5KSB7XHJcbiAgICBhcnJheVtpXS5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvXCIgKyBwb3dlcnVwLm5hbWUgKyBcIi5wbmdcIjtcclxuICB9KTtcclxuXHJcbiAgdmFyIGV4cGxvc2lvbkltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgZXhwbG9zaW9uSW1hZ2Uuc3JjID0gXCJhc3Rlcm9pZHMvZXhwbG9zaW9uLnBuZ1wiO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwia2V5ZG93blwiLFxyXG4gICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgbWFwW2Uua2V5Q29kZSB8fCBlLndoaWNoXSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgdHJ1ZSxcclxuICApO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJrZXl1cFwiLFxyXG4gICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgbWFwW2Uua2V5Q29kZSB8fCBlLndoaWNoXSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHRydWUsXHJcbiAgKTtcclxuXHJcbiAgJHNjb3BlLmhpZ2hzY29yZSA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGV2YWx1YXRlS2V5cygpIHtcclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBpZiAobWFwWzMyXSkge1xyXG4gICAgICAgIC8vU3BhY2VcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLmNvb2xkb3duID09PSAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc2hvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszN10pIHtcclxuICAgICAgICAvL0xlZnQgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnJvdGF0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gPSAzNjA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiAtPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM5XSkge1xyXG4gICAgICAgIC8vUmlnaHQgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnJvdGF0aW9uID09PSAzNjApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiArPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM4XSkge1xyXG4gICAgICAgIC8vVXAgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkIDw9IHNwYWNlc2hpcC5tYXhTcGVlZCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkICs9IDU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQtLTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFs0MF0pIHtcclxuICAgICAgICAvL0Rvd24gQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkIC09IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobWFwWzMyXSkge1xyXG4gICAgICAgIHN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNwYWNlc2hpcCgpIHtcclxuICAgIHRoaXMud2lkdGggPSA1MDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gNTA7XHJcbiAgICB0aGlzLnNoaWVsZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yYW5nZSA9IDgwO1xyXG4gICAgdGhpcy5jYW5ub24gPSB7XHJcbiAgICAgIHg6IHRoaXMud2lkdGggLyAyIC0gNC41LFxyXG4gICAgICB5OiB0aGlzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAqIDAuMDc4MTI1LFxyXG4gICAgfTtcclxuICAgIHRoaXMuY29vbGRvd24gPSAwO1xyXG4gICAgdGhpcy5jb29sZG93blRpbWUgPSAyMDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbY2FudmFzLndpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0IC8gMl07XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvc3BhY2VzaGlwLnBuZ1wiO1xyXG4gICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB0aGlzLm1heFNwZWVkID0gMTAwMDtcclxuICAgIHRoaXMuYW5nbGUgPSAwO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcblxyXG4gICAgdGhpcy5zaG9vdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5jb29sZG93biA9IHRoaXMuY29vbGRvd25UaW1lO1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBzaG90c1tpZF0gPSBuZXcgU2hvdChpZCwgdGhpcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHRoaXMuc2hpZWxkKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5hcmModGhpcy5wb3NpdGlvblswXSArIHRoaXMud2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uWzFdICsgdGhpcy5oZWlnaHQgLyAyLCAzMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigzNSwgMjM3LCA4NiwgMC41KVwiO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiKDY2LCAxNjgsIDM2LCAwLjgpXCI7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICB2YXIgYXN0ZXJvaWQgPSBhc3Rlcm9pZHNbaV07XHJcbiAgICAgICAgaWYgKGhpdChhc3Rlcm9pZCwgdGhpcykpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNoaWVsZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBhc3Rlcm9pZC5leHBsb2RlKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2FtZU92ZXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmdsZSA9IHRoaXMucm90YXRpb247XHJcbiAgICAgIGlmICh0aGlzLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgIHRoaXMuY29vbGRvd24tLTtcclxuICAgICAgfVxyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNob3QoaWQsIHNwYWNlc2hpcCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzBdICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnggK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueCAqIE1hdGguY29zKCgoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSkgLyAxODApLFxyXG4gICAgICBzcGFjZXNoaXAucG9zaXRpb25bMV0gK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueSArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi55ICogTWF0aC5zaW4oKChzcGFjZXNoaXAucm90YXRpb24gLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCksXHJcbiAgICBdO1xyXG4gICAgdGhpcy53aWR0aCA9IDk7XHJcbiAgICB0aGlzLmhlaWdodCA9IDE1O1xyXG4gICAgdGhpcy5hbmdsZSA9IHNwYWNlc2hpcC5hbmdsZTtcclxuICAgIHRoaXMucm90YXRpb24gPSBzcGFjZXNoaXAucm90YXRpb247XHJcbiAgICB0aGlzLnNwZWVkID0gc3BhY2VzaGlwLnNwZWVkICsgNTAwO1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IHNwYWNlc2hpcC5yYW5nZTtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBcImFzdGVyb2lkcy9zaG90LnBuZ1wiO1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEFzdGVyb2lkKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLndpZHRoID0gTWF0aC5yYW5kb20oKSAqIDUwICsgMjA7XHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMud2lkdGg7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RW50cnlQb3NpdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5yb3RhdGlvblNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDYgLSAzO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAzMDAgKyAyO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL2FzdGVyb2lkXCIgKyAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNikgKyAxKSArIFwiLnBuZ1wiO1xyXG5cclxuICAgIHRoaXMuZXhwbG9kZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgZXhwbG9zaW9uc1t0aGlzLmlkXSA9IG5ldyBFeHBsb3Npb24odGhpcyk7XHJcbiAgICAgIHJldHVybiBkZWxldGUgYXN0ZXJvaWRzW3RoaXMuaWRdO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xyXG4gICAgICBpZiAodGhpcy5yb3RhdGlvbiA+IDM2MCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSB0aGlzLnJvdGF0aW9uIC0gMzYwO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucm90YXRpb24gPCAwKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDM2MCArIHRoaXMucm90YXRpb247XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSBpbiBzaG90cykge1xyXG4gICAgICAgIHZhciBzaG90ID0gc2hvdHNbaV07XHJcbiAgICAgICAgaWYgKGhpdChzaG90LCB0aGlzKSkge1xyXG4gICAgICAgICAgdGhpcy5leHBsb2RlKCk7XHJcbiAgICAgICAgICB2YXIgcG9pbnRzID0gTWF0aC5mbG9vcigoc2hvdC5zcGVlZCAtIDUwMCkgLyAxMCArIDcwIC0gdGhpcy53aWR0aCk7XHJcbiAgICAgICAgICBpZiAoTWF0aC5mbG9vcigocG9pbnRzICsgJHNjb3BlLnNjb3JlKSAvIDEwMCkgPiBNYXRoLmZsb29yKCRzY29wZS5zY29yZSAvIDEwMCkpIHtcclxuICAgICAgICAgICAgc3Bhd25Qb3dlcnVwKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkc2NvcGUuc2NvcmUgKz0gcG9pbnRzO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgZGVsZXRlIHNob3RzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEV4cGxvc2lvbihvYmplY3QpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbb2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV1dO1xyXG4gICAgdGhpcy53aWR0aCA9IG9iamVjdC53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gb2JqZWN0LmhlaWdodDtcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLmN5Y2xlID0ge1xyXG4gICAgICByb3dzOiA2LFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICBzaXplOiBbMjU2LCAyNTZdLFxyXG4gICAgICBpOiAwLFxyXG4gICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDQ3O1xyXG4gICAgdGhpcy5pbWcgPSBleHBsb3Npb25JbWFnZTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBQb3dlcnVwKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvd2VydXAgPSBwb3dlcnVwVHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG93ZXJ1cFR5cGVzLmxlbmd0aCldO1xyXG4gICAgdGhpcy5jeWNsZSA9IHRoaXMucG93ZXJ1cC5jeWNsZTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAxMDAwO1xyXG4gICAgaWYgKHRoaXMuY3ljbGUuc2l6ZVsxXSA+IHRoaXMuY3ljbGUuc2l6ZVswXSkge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IDQwO1xyXG4gICAgICB0aGlzLndpZHRoID0gTWF0aC5yb3VuZCgodGhpcy5oZWlnaHQgLyB0aGlzLmN5Y2xlLnNpemVbMV0pICogdGhpcy5jeWNsZS5zaXplWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSA0MDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLnJvdW5kKCh0aGlzLndpZHRoIC8gdGhpcy5jeWNsZS5zaXplWzBdKSAqIHRoaXMuY3ljbGUuc2l6ZVsxXSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RW50cnlQb3NpdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmltZyA9IHRoaXMucG93ZXJ1cC5pbWc7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMTUwICsgNTA7XHJcbiAgICB2YXIgZGVsYXkgPSA1O1xyXG4gICAgdGhpcy5tb3ZlID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBwb3dlcnVwc1t0aGlzLmlkXTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaGl0KHNwYWNlc2hpcCwgdGhpcykpIHtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2UgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5hbm5vdW5jZW1lbnQgPSB0aGlzLnBvd2VydXAuYW5ub3VuY2VtZW50O1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5hbm5vdW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHRoaXMucG93ZXJ1cC5hY3RpdmF0ZShzcGFjZXNoaXApO1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAoZGVsYXkgPD0gMCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxheSA9IDU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsYXktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmUob2JqZWN0KSB7XHJcbiAgICBvYmplY3QucG9zaXRpb25bMF0gKz0gKG9iamVjdC5zcGVlZCAvIDEwMCkgKiBNYXRoLmNvcygoKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIG9iamVjdC5wb3NpdGlvblsxXSArPSAob2JqZWN0LnNwZWVkIC8gMTAwKSAqIE1hdGguc2luKCgob2JqZWN0LmFuZ2xlIC0gOTApICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgaWYgKG9iamVjdC5wb3NpdGlvblswXSA+IGNhbnZhcy53aWR0aCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMF0gPSAtb2JqZWN0LndpZHRoO1xyXG4gICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMF0gPCAtb2JqZWN0LndpZHRoKSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IGNhbnZhcy53aWR0aDtcclxuICAgIH1cclxuICAgIGlmIChvYmplY3QucG9zaXRpb25bMV0gPiBjYW52YXMuaGVpZ2h0KSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblsxXSA9IC1vYmplY3QuaGVpZ2h0O1xyXG4gICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMV0gPCAtb2JqZWN0LmhlaWdodCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMV0gPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV0pO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShvYmplY3Qud2lkdGggLyAyLCBvYmplY3QuaGVpZ2h0IC8gMik7XHJcbiAgICBjdHgucm90YXRlKChvYmplY3Qucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBpZiAob2JqZWN0LmN5Y2xlKSB7XHJcbiAgICAgIHZhciBjb2x1bW4gPSBvYmplY3QuY3ljbGUuaSAlIG9iamVjdC5jeWNsZS5jb2x1bW5zO1xyXG4gICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcihvYmplY3QuY3ljbGUuaSAvIG9iamVjdC5jeWNsZS5jb2x1bW5zKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICBvYmplY3QuaW1nLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzBdICogY29sdW1uLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzFdICogcm93LFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzBdLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzFdLFxyXG4gICAgICAgIC1vYmplY3Qud2lkdGggLyAyLFxyXG4gICAgICAgIC1vYmplY3QuaGVpZ2h0IC8gMixcclxuICAgICAgICBvYmplY3Qud2lkdGgsXHJcbiAgICAgICAgb2JqZWN0LmhlaWdodCxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChvYmplY3QuY3ljbGUuaSA8PSAwKSB7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSAwO1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKG9iamVjdC5jeWNsZS5pID49IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MpIHtcclxuICAgICAgICBvYmplY3QuY3ljbGUuaSA9IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MgLSAxO1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3R4LmRyYXdJbWFnZShvYmplY3QuaW1nLCAtb2JqZWN0LndpZHRoIC8gMiwgLW9iamVjdC5oZWlnaHQgLyAyLCBvYmplY3Qud2lkdGgsIG9iamVjdC5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHZhciBzcGFjZXNoaXA7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIHNwYWNlc2hpcCA9IG5ldyBTcGFjZXNoaXAoKTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgIGF1dG9TcGF3bigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RW50cnlQb3NpdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB2YXIgZ3JpZFggPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciBncmlkWSA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIHgsXHJcbiAgICAgIHkgPSAwO1xyXG4gICAgaWYgKGdyaWRYID49IDEpIHtcclxuICAgICAgeCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XHJcbiAgICAgIGlmICh5ID49IDEpIHtcclxuICAgICAgICB5ID0gMCAtIGhlaWdodDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeSA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICBpZiAoZ3JpZFkgPj0gMSkge1xyXG4gICAgICAgIHggPSAwIC0gd2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFt4LCB5XTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpdChvYmplY3QxLCBvYmplY3QyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBvYmplY3QxLnBvc2l0aW9uWzBdIDwgb2JqZWN0Mi5wb3NpdGlvblswXSArIG9iamVjdDIud2lkdGggJiZcclxuICAgICAgb2JqZWN0Mi5wb3NpdGlvblswXSA8IG9iamVjdDEucG9zaXRpb25bMF0gKyBvYmplY3QxLndpZHRoICYmXHJcbiAgICAgIG9iamVjdDEucG9zaXRpb25bMV0gPCBvYmplY3QyLnBvc2l0aW9uWzFdICsgb2JqZWN0Mi5oZWlnaHQgJiZcclxuICAgICAgb2JqZWN0Mi5wb3NpdGlvblsxXSA8IG9iamVjdDEucG9zaXRpb25bMV0gKyBvYmplY3QxLmhlaWdodFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGF1dG9TcGF3bigpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhhc3Rlcm9pZHMpLmxlbmd0aCA8IDIwMCkge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH1cclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhdXRvU3Bhd24oKTtcclxuICAgICAgfSwgc3Bhd25JbnRlcnZhbCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduSW50ZXJ2YWwoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnNjb3JlIDwgMTAwMCkge1xyXG4gICAgICByZXR1cm4gMTAwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgMjAwMCkge1xyXG4gICAgICByZXR1cm4gOTAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCAzMDAwKSB7XHJcbiAgICAgIHJldHVybiA4MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDQwMDApIHtcclxuICAgICAgcmV0dXJuIDcwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNTAwMCkge1xyXG4gICAgICByZXR1cm4gNjAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA2MDAwKSB7XHJcbiAgICAgIHJldHVybiA1MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDcwMDApIHtcclxuICAgICAgcmV0dXJuIDQwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgODAwMCkge1xyXG4gICAgICByZXR1cm4gMzAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDIwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduQXN0ZXJvaWRzKGFtb3VudCkge1xyXG4gICAgdmFyIGkgPSAwO1xyXG4gICAgZG8ge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH0gd2hpbGUgKGkrKyA8PSBhbW91bnQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25Qb3dlcnVwKCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHBvd2VydXBzKS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIHBvd2VydXBzW2lkXSA9IG5ldyBQb3dlcnVwKGlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdhbWVPdmVyKCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgIGFzdGVyb2lkc1tpXS5leHBsb2RlKCk7XHJcbiAgICB9XHJcbiAgICBzaG90cyA9IHt9O1xyXG4gICAgaWYgKCRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmhpZ2hzY29yZS5hc3Rlcm9pZHMgPCAkc2NvcGUuc2NvcmUpIHtcclxuICAgICAgICAkc2NvcGUuY3VycmVudFVzZXIuaGlnaHNjb3JlLmFzdGVyb2lkcyA9ICRzY29wZS5zY29yZTtcclxuICAgICAgICBHYW1lU3ZjLnNldEhpZ2hzY29yZShcImFzdGVyb2lkc1wiLCAkc2NvcGUuY3VycmVudFVzZXIuX2lkLCAkc2NvcGUuc2NvcmUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hzY29yZSA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5oaWdoc2NvcmUgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG4gIC8vIGRyYXcgY2FudmFzLlxyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgLy8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuICAgIC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG4gICAgLy8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuICAgIHJlc2l6ZUNhbnZhcygpO1xyXG4gIH1cclxuICAvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcbiAgLy8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcbiAgLy8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcbiAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSAxO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTAgOiA1OSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplKCk7XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG5cclxuICB2YXIgdGFsbHkgPSAwO1xyXG4gIHZhciBkaXJlY3Rpb24gPSB0cnVlO1xyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgZm9yICh2YXIgaSBpbiBzaG90cykge1xyXG4gICAgICBpZiAoc2hvdHNbaV0ubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBzaG90c1tpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG90c1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgYXN0ZXJvaWRzW2ldLm1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBwb3dlcnVwcykge1xyXG4gICAgICBwb3dlcnVwc1tpXS5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gZXhwbG9zaW9ucykge1xyXG4gICAgICBpZiAoZXhwbG9zaW9uc1tpXS5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIGV4cGxvc2lvbnNbaV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXhwbG9zaW9uc1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGV2YWx1YXRlS2V5cygpO1xyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIHNwYWNlc2hpcC5tb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgY2FudmFzLndpZHRoLCAwKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMFwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjAuMjVcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjVcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjc1XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMS4wXCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgICBjdHguZm9udCA9IFwiNjBweCBNb25vdG9uXCI7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcIkFzdGVyb2lkc1wiLCBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KFwiQXN0ZXJvaWRzXCIpLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpO1xyXG4gICAgICBjdHguZm9udCA9IFwiMjBweCBBbGRyaWNoXCI7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICBcIlByZXNzIHNwYWNlIHRvIHN0YXJ0XCIsXHJcbiAgICAgICAgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIlByZXNzIHNwYWNlIHRvIHN0YXJ0XCIpLndpZHRoIC8gMixcclxuICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMiArIDIwLFxyXG4gICAgICApO1xyXG4gICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgXCJEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5IExhdXJlbnQgRGViYWNrZXJcIixcclxuICAgICAgICBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KFwiRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyXCIpLndpZHRoIC8gMixcclxuICAgICAgICBjYW52YXMuaGVpZ2h0IC0gMzAsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0YWxseSArPSBkaXJlY3Rpb24gPyAxIDogLTE7XHJcbiAgICBpZiAodGFsbHkgPiAxMDApIHtcclxuICAgICAgdGFsbHkgPSAxMDA7XHJcbiAgICAgIGRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICh0YWxseSA8IDApIHtcclxuICAgICAgdGFsbHkgPSAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLnNwYWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiYXN0ZXJvaWRzL3NwYWNlJyArIHNwYWNlICsgJy5qcGdcIiknLFxyXG4gICAgfTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkJ1YmJsZXNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWJibGVzLXBhZ2VcIik7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgdmFyIGJ1YmJsZXMgPSBbXTtcclxuICB2YXIgY29sb3JzID0gW1wiI2ZmYzMwMFwiLCBcIiNmZjU3MzNcIiwgXCIjYzcwMDM5XCIsIFwiIzkwMGMzZVwiLCBcIiM1NzE4NDVcIl07XHJcblxyXG4gIGZ1bmN0aW9uIEJ1YmJsZSgpIHtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAwO1xyXG4gICAgdGhpcy5yYWRpdXMgPSAxO1xyXG4gICAgdGhpcy5leHBhbmRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgdGhpcy5jaXJjdW1mZXJlbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNTApICsgNTtcclxuICAgIHRoaXMubWF4UmFkaXVzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjAwKSArIDIwO1xyXG4gICAgdGhpcy54ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoKTtcclxuICAgIHRoaXMueSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGhpcy52eCA9IE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xO1xyXG4gICAgdGhpcy52eSA9IE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGJ1YmJsZXMuZm9yRWFjaChmdW5jdGlvbiAoYnViYmxlKSB7XHJcbiAgICAgIHZhciBjb2xvciA9IGNvbG9yc1tNYXRoLnJvdW5kKChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cykgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyhidWJibGUueCwgYnViYmxlLnksIGJ1YmJsZS5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yc1tNYXRoLnJvdW5kKChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cykgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1tjb2xvcnMubGVuZ3RoIC0gTWF0aC5yb3VuZCgoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMpIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gKGJ1YmJsZS5jaXJjdW1mZXJlbmNlICogYnViYmxlLnJhZGl1cykgLyBidWJibGUubWF4UmFkaXVzO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbHRlckJ1YmJsZXMoKSB7XHJcbiAgICBidWJibGVzLnB1c2gobmV3IEJ1YmJsZSgpKTtcclxuICAgIGJ1YmJsZXMgPSBidWJibGVzLmZpbHRlcihmdW5jdGlvbiAoYnViYmxlKSB7XHJcbiAgICAgIGlmIChidWJibGUucmFkaXVzID09PSBidWJibGUubWF4UmFkaXVzKSB7XHJcbiAgICAgICAgYnViYmxlLmV4cGFuZGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1YmJsZS54ICs9IGJ1YmJsZS52eCAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnkgKz0gYnViYmxlLnZ5ICogYnViYmxlLnNwZWVkO1xyXG4gICAgICBidWJibGUucmFkaXVzICs9IGJ1YmJsZS5leHBhbmRpbmcgPyAxIDogLTE7XHJcbiAgICAgIHJldHVybiBidWJibGUucmFkaXVzID4gMDtcclxuICAgIH0pO1xyXG4gICAgZHJhdygpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG5cclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gU3RhcnQgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgYW5kXHJcbiAgICAvLyBkcmF3IGNhbnZhcy5cclxuICAgIGluaXRpYWxpemUoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgICAvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG4gICAgICAvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuICAgICAgLy8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcbiAgICAgIC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcbiAgICAgIHJlc2l6ZUNhbnZhcygpO1xyXG4gICAgfVxyXG4gICAgLy8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG4gICAgLy8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcbiAgICAvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuICAgIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDU1IDogNTYpO1xyXG4gICAgfVxyXG4gIH0pKCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQ2hhcmFkZXNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAkc2NvcGUuc2VsZWN0V29yZCA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgJHNjb3BlLndvcmQgPSAkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICRzY29wZS5jaGFyYWRlc1tjYXRlZ29yeV0ubGVuZ3RoKV07XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJDb250YWN0Q3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBFbWFpbFN2Yykge1xyXG4gICRzY29wZS5vcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNwYW1cIixcclxuICAgICAgdGV4dDogXCJJIGFtIGEgc3BhbSBib3QgYW5kIGF1dG9tYXRpY2FsbHkgY2hlY2sgdGhlIGZpcnN0IG9wdGlvbiBJIGZpbmQhXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk9wcG9ydHVuaXR5XCIsXHJcbiAgICAgIHRleHQ6IFwiWW91IHNlZW0gdG8gaGF2ZSB0aGUgc2tpbGxzIEkgc2VlaywgSSdkIGxpa2UgdG8gdGFsayBhYm91dCBzb21lIG9wcG9ydHVuaXRpZXMuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJlc3VtZVwiLFxyXG4gICAgICB0ZXh0OiBcIkkgZGlnIHRoZSByZXN1bWUsIGhvdyBkaWQgeW91IG1ha2UgaXQ/XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk90aGVyXCIsXHJcbiAgICAgIHRleHQ6IFwiU3VtdGluIGVsc2UhXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gICRzY29wZS5jb250YWN0ID0ge1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgICBhYm91dDogXCJcIixcclxuICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUuc2VuZGluZyA9IHRydWU7XHJcbiAgICBFbWFpbFN2Yy5zZW5kKHtcclxuICAgICAgZW1haWw6ICRzY29wZS5jb250YWN0LmVtYWlsLFxyXG4gICAgICBuYW1lOiAkc2NvcGUuY29udGFjdC5uYW1lLFxyXG4gICAgICBwaG9uZTogJHNjb3BlLmNvbnRhY3QucGhvbmUsXHJcbiAgICAgIGFib3V0OiAkc2NvcGUuY29udGFjdC5hYm91dCxcclxuICAgICAgbWVzc2FnZTogJHNjb3BlLmNvbnRhY3QubWVzc2FnZSxcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS50b2FzdChcIk1lc3NhZ2Ugc2VudFwiKTtcclxuICAgICAgICAkc2NvcGUuc2VudCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTLiBzdGF0dXM9JWQsIHRleHQ9JXNcIiwgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS50ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAkc2NvcGUudG9hc3QoXCJNZXNzYWdlIHNlbmQgZmFpbGVkXCIpO1xyXG4gICAgICAgICRzY29wZS5zZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGQUlMRUQuIGVycm9yPVwiLCBlcnIpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdFeHBlcmllbmNlQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLmdldFNraWxsID0gZnVuY3Rpb24oc2tpbGxDb2RlKSB7XHJcbiAgICBpZiAoISRzY29wZS5za2lsbHMpIHJldHVybjtcclxuICAgIHJldHVybiAkc2NvcGUuc2tpbGxzLmZpbmQoZnVuY3Rpb24oc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIHNraWxsLmNvZGUgPT09IHNraWxsQ29kZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdIb2JiaWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR3aW5kb3cpIHtcclxuXHJcbiAgJHNjb3BlLmhvYmJ5U2VsZWN0b3JWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICQuZ2V0SlNPTignaHR0cHM6Ly93d3cucmVkZGl0LmNvbS91c2VyL2JlbGdvY2FuYWRpYW4vYWJvdXQvLmpzb24nLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gJHNjb3BlLmhvYmJpZXNbMF07XHJcblxyXG4gICRzY29wZS5zZWxlY3RIb2JieSA9IGZ1bmN0aW9uIChob2JieSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkSG9iYnkgPSBob2JieTtcclxuICAgICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zaG93SG9iYnkgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnJheSkge1xyXG4gICAgaWYgKCF2YWx1ZS5pbWFnZXMpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB2YWx1ZS5pbWFnZXMubGVuZ3RoID4gMDtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMZW1taW5nc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBHYW1lU3ZjKSB7XHJcblxyXG4gIHZhciBMRUZUID0gMDtcclxuICB2YXIgUklHSFQgPSAxO1xyXG5cclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlbW1pbmdzLXBhZ2UnKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgdmFyIGxlbW1pbmdzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBsZW1taW5nc0ltYWdlLnNyYyA9ICdsZW1taW5ncy9sZW1taW5ncy5wbmcnO1xyXG4gIHZhciBkZWNvckltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgZGVjb3JJbWFnZS5zcmMgPSAnbGVtbWluZ3MvZGVjb3IucG5nJztcclxuICB2YXIgbGVtbWluZ3MgPSB7fTtcclxuICB2YXIgc3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICB2YXIgYWN0aW9ucyA9IHtcclxuICAgIHdhbGs6IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbMzIwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgaHVoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMzIwLCAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IHRydWVcclxuICAgIH0sXHJcbiAgICBmYWxsOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgODBdLFxyXG4gICAgICBlbmQ6IFsxNjAsIDEwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZmx5OiB7XHJcbiAgICAgIHN0YXJ0OiBbMTYwLCA4MF0sXHJcbiAgICAgIGVuZDogWzQ4MCwgMTEwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzdG9wOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMTIwXSxcclxuICAgICAgZW5kOiBbNjQwLCAxNDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBjbGltYjoge1xyXG4gICAgICBzdGFydDogWzAsIDE2MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTg1XSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgc3RhcnQ6IFswLCAyMDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDIyNV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHB1bmNoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjQwXSxcclxuICAgICAgZW5kOiBbNjQwLCAzMDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMixcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBkaWc6IHtcclxuICAgICAgc3RhcnQ6IFswLCAzMjBdLFxyXG4gICAgICBlbmQ6IFszMjAsIDM0NV0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIExlbW1pbmcoaW5pdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLndpZHRoIC0gMjAwKSkgKyAxMDAsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjYW52YXMuaGVpZ2h0IC0gMjAwKSkgKyAxMDBdO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogMiA+IDEgPyBMRUZUIDogUklHSFQ7XHJcbiAgICB0aGlzLmFjdCA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbnNbYWN0aW9uXTtcclxuICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgdGhpcy5oZWlnaHQgPSAodGhpcy5hY3Rpb24uZW5kWzFdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAoMjAgKiAodGhpcy5hY3Rpb24ucm93cyAtIDEpKSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5hY3QoaW5pdCk7XHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBMRUZUKSB7XHJcbiAgICAgICAgY3R4LnNjYWxlKC0xLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHZhciByb3cgPSBNYXRoLmZsb29yKHRoaXMuY3ljbGUgLyB0aGlzLmFjdGlvbi5jb2x1bW5zKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZShsZW1taW5nc0ltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKCh0aGlzLmhlaWdodCArIDIwKSAqIHJvdykgKyB0aGlzLmFjdGlvbi5zdGFydFsxXSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICBpZiAodGhpcy5hY3Rpb24ucmV2ZXJzZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPj0gdGhpcy5hY3Rpb24uY29sdW1ucyAqIHRoaXMuYWN0aW9uLnJvd3MpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSAhdGhpcy5hbmltYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS0tO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBIYXRjaCgpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbMjAsIDIwXTtcclxuICAgIHRoaXMuYWN0aW9uID0ge1xyXG4gICAgICBzdGFydDogWzAsIDBdLFxyXG4gICAgICBlbmQ6IFs4MiwgNTAwXSxcclxuICAgICAgY29sdW1uczogMSxcclxuICAgICAgcm93czogMTBcclxuICAgIH1cclxuICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdKSAvIHRoaXMuYWN0aW9uLnJvd3M7XHJcbiAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgIHRoaXMub3BlbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25bMF0sIHRoaXMucG9zaXRpb25bMV0pO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICB2YXIgY29sdW1uLCByb3c7XHJcbiAgICAgIGlmIChzdGFydGVkKSB7XHJcbiAgICAgICAgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgICAgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCA5KSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbHVtbiA9IDA7XHJcbiAgICAgICAgcm93ID0gMDtcclxuICAgICAgfVxyXG4gICAgICBjdHguZHJhd0ltYWdlKGRlY29ySW1hZ2UsICh0aGlzLndpZHRoICogY29sdW1uKSArIHRoaXMuYWN0aW9uLnN0YXJ0WzBdLCAodGhpcy5oZWlnaHQgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAxLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkxlbW1pbmcoKSB7XHJcbiAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICBsZW1taW5nc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApXSA9IG5ldyBMZW1taW5nKGFjdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHQvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG5cdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHQvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblx0XHQvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG5cdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0fVxyXG5cdC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuXHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcblx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogMTA1KTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxuICBzcGF3bkxlbW1pbmcoKTtcclxuICBsZXQgaGF0Y2ggPSBuZXcgSGF0Y2goKVxyXG4gIGRyYXcoKTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGlmICghc3RhcnRlZCkge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5mb250PSc0MHB4IE1vbm90b24nO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gJzEwJztcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xyXG4gICAgICBjdHgucmVjdCgxNSwgY2FudmFzLmhlaWdodCAtIDQ1LCBjdHgubWVhc3VyZVRleHQoJ1N0YXJ0Jykud2lkdGggKyAyMCwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLmhlaWdodCArIGNhbnZhcy5oZWlnaHQgLSA0NSk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnU3RhcnQnLCAyMCwgY2FudmFzLmhlaWdodCAtIDUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAodmFyIGkgaW4gbGVtbWluZ3MpIHtcclxuICAgICAgICBsZW1taW5nc1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGhhdGNoLm9wZW4oKTtcclxuICAgIHN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgZHJhdygpO1xyXG4gICAgfSwgMTUwKTtcclxuICB9XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xpc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgQ2F0ZWdvcmllc1N2Yykge1xyXG5cclxuICAkc2NvcGUuc2hvd0NhdGVnb3J5ID0gdHJ1ZTtcclxuXHJcbiAgJHNjb3BlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLmdldENhdGVnb3JpZXMoKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgJHNjb3BlLnRhc2tzID0gW107XHJcbiAgICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICBmb3IgKHZhciBqIGluICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzKSB7XHJcbiAgICAgICAgICAkc2NvcGUudGFza3MucHVzaCh7XHJcbiAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSxcclxuICAgICAgICAgICAgXCJ0YXNrXCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzW2pdLm5hbWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdENhdGVnb3J5ID0gZnVuY3Rpb24oY2F0ZWdvcnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRUYXNrcyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLnB1c2goJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY2F0ZWdvcmllc1tpXS5uYW1lID09PSBjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeSgkc2NvcGUuY2F0ZWdvcmllc1tpXSk7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuYWRkQ2F0ZWdvcnkoe1xyXG4gICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5pbml0KCk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZENhdGVnb3J5ID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLm5ld1Rhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXS5uYW1lID09PSB0YXNrKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSwge1xyXG4gICAgICAgIHRhc2s6IHRhc2tcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MucHVzaCh7IG5hbWU6IHRhc2sgfSk7XHJcbiAgICAgICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzWyRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5lbnRlcmVkVGFzayA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS51bnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmFkZFRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3QucHVzaCh0YXNrKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUucmVtb3ZlVGFzayA9IGZ1bmN0aW9uKHRhc2tMaXN0LCB0YXNrKSB7XHJcbiAgICB0YXNrTGlzdC5zcGxpY2UodGFza0xpc3QuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnN0YXJ0UHJpb3JpdGl6aW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLnNldFByaW9yaXR5TGlzdCgkc2NvcGUuc2VsZWN0ZWRUYXNrcyk7XHJcbiAgICAkbG9jYXRpb24ucGF0aCgnL3ByaW9yaXRpemUnKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0UXVlc3Rpb25zID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoISRzY29wZS5zZWxlY3RlZFRhc2tzKSByZXR1cm4gJyc7XHJcbiAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gJHNjb3BlLnNlbGVjdGVkVGFza3MubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICBjb3VudGVyICs9IGk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY291bnRlcjtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJMb2dpbkN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgRmlyZWJhc2VVSSBXaWRnZXQgdXNpbmcgRmlyZWJhc2UuXHJcbiAgdmFyIHVpID0gbmV3IGZpcmViYXNldWkuYXV0aC5BdXRoVUkoZmlyZWJhc2UuYXV0aCgpKTtcclxuXHJcbiAgJHNjb3BlLiRvbihcImxvZ291dFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHVpLnJlc2V0KCk7XHJcbiAgICBzdGFydFVJKCk7XHJcbiAgfSk7XHJcblxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0Z21lX3dpZGdldF9sb2dpbl9idXR0b25cIilbMF0uaW5uZXJIVE1MID0gXCJTaWduIGluIHdpdGggVGVsZWdyYW1cIjtcclxuXHJcbiAgZnVuY3Rpb24gbG9naW5TdWNjZXNzZnVsKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuJGVtaXQoXCJsb2dpblwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICQoXCIjbW9kYWwtbG9naW5cIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgLy8kbG9jYXRpb24ucGF0aCgnLycpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbG9naW5GYWlsZWQoKSB7XHJcbiAgICAkc2NvcGUudG9hc3QoXCJMb2dpbiBGYWlsZWRcIik7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUudGVsZWdyYW1Mb2dpbiA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICBVc2VyU3ZjLmF1dGhlbnRpY2F0ZSh7XHJcbiAgICAgIGF1dGhUeXBlOiBcInRlbGVncmFtXCIsXHJcbiAgICAgIGRpc3BsYXlOYW1lOiB1c2VyLmZpcnN0X25hbWUgKyAodXNlci5sYXN0X25hbWUgPyBcIiBcIiArIHVzZXIubGFzdF9uYW1lIDogXCJcIiksXHJcbiAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4gICAgICB0ZWxlZ3JhbUlkOiB1c2VyLmlkLFxyXG4gICAgICBwaG90b1VSTDogdXNlci5waG90b191cmwsXHJcbiAgICAgIGlkVG9rZW46IHVzZXIuaGFzaCxcclxuICAgICAgZGF0YTogdXNlcixcclxuICAgIH0pLnRoZW4obG9naW5TdWNjZXNzZnVsLCBsb2dpbkZhaWxlZCk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gc3RhcnRVSSgpIHtcclxuICAgIHVpLnN0YXJ0KFwiI2ZpcmViYXNldWktYXV0aC1jb250YWluZXJcIiwge1xyXG4gICAgICBjYWxsYmFja3M6IHtcclxuICAgICAgICBzaWduSW5TdWNjZXNzOiBmdW5jdGlvbiAoY3VycmVudFVzZXIsIGNyZWRlbnRpYWwsIHJlZGlyZWN0VXJsKSB7XHJcbiAgICAgICAgICAvLyBObyByZWRpcmVjdC5cclxuICAgICAgICAgIGZpcmViYXNlXHJcbiAgICAgICAgICAgIC5hdXRoKClcclxuICAgICAgICAgICAgLmN1cnJlbnRVc2VyLmdldElkVG9rZW4odHJ1ZSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGlkVG9rZW4pIHtcclxuICAgICAgICAgICAgICBVc2VyU3ZjLmF1dGhlbnRpY2F0ZSh7XHJcbiAgICAgICAgICAgICAgICBhdXRoVHlwZTogXCJmaXJlYmFzZVwiLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IGN1cnJlbnRVc2VyLmRpc3BsYXlOYW1lLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IGN1cnJlbnRVc2VyLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGhvdG9VUkw6IGN1cnJlbnRVc2VyLnBob3RvVVJMLFxyXG4gICAgICAgICAgICAgICAgZW1haWxWZXJpZmllZDogY3VycmVudFVzZXIuZW1haWxWZXJpZmllZCxcclxuICAgICAgICAgICAgICAgIGlkVG9rZW46IGlkVG9rZW4sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBjdXJyZW50VXNlcixcclxuICAgICAgICAgICAgICB9KS50aGVuKGxvZ2luU3VjY2Vzc2Z1bCwgbG9naW5GYWlsZWQpO1xyXG4gICAgICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yXHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8vIHNpZ25JbkZhaWx1cmUgY2FsbGJhY2sgbXVzdCBiZSBwcm92aWRlZCB0byBoYW5kbGUgbWVyZ2UgY29uZmxpY3RzIHdoaWNoXHJcbiAgICAgICAgLy8gb2NjdXIgd2hlbiBhbiBleGlzdGluZyBjcmVkZW50aWFsIGlzIGxpbmtlZCB0byBhbiBhbm9ueW1vdXMgdXNlci5cclxuICAgICAgICBzaWduSW5GYWlsdXJlOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgIC8vIEZvciBtZXJnZSBjb25mbGljdHMsIHRoZSBlcnJvci5jb2RlIHdpbGwgYmVcclxuICAgICAgICAgIC8vICdmaXJlYmFzZXVpL2Fub255bW91cy11cGdyYWRlLW1lcmdlLWNvbmZsaWN0Jy5cclxuICAgICAgICAgIGlmIChlcnJvci5jb2RlICE9IFwiZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdFwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIFRoZSBjcmVkZW50aWFsIHRoZSB1c2VyIHRyaWVkIHRvIHNpZ24gaW4gd2l0aC5cclxuICAgICAgICAgIHZhciBjcmVkID0gZXJyb3IuY3JlZGVudGlhbDtcclxuICAgICAgICAgIC8vIENvcHkgZGF0YSBmcm9tIGFub255bW91cyB1c2VyIHRvIHBlcm1hbmVudCB1c2VyIGFuZCBkZWxldGUgYW5vbnltb3VzXHJcbiAgICAgICAgICAvLyB1c2VyLlxyXG4gICAgICAgICAgLy8gLi4uXHJcbiAgICAgICAgICAvLyBGaW5pc2ggc2lnbi1pbiBhZnRlciBkYXRhIGlzIGNvcGllZC5cclxuICAgICAgICAgIHJldHVybiBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aENyZWRlbnRpYWwoY3JlZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1aVNob3duOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvLyBUaGUgd2lkZ2V0IGlzIHJlbmRlcmVkLlxyXG4gICAgICAgICAgLy8gSGlkZSB0aGUgbG9hZGVyLlxyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHNpZ25JblN1Y2Nlc3NVcmw6IFwiL2hvbWVcIixcclxuICAgICAgc2lnbkluT3B0aW9uczogW1xyXG4gICAgICAgIC8vZmlyZWJhc2UuYXV0aC5FbWFpbEF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgICBmaXJlYmFzZS5hdXRoLkZhY2Vib29rQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxyXG4gICAgICBdLFxyXG5cclxuICAgICAgLy8gV2lsbCB1c2UgcG9wdXAgZm9yIElEUCBQcm92aWRlcnMgc2lnbi1pbiBmbG93IGluc3RlYWQgb2YgdGhlIGRlZmF1bHQsIHJlZGlyZWN0LlxyXG4gICAgICBzaWduSW5GbG93OiBcInBvcHVwXCIsXHJcbiAgICAgIC8vIE90aGVyIGNvbmZpZyBvcHRpb25zLi4uXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHN0YXJ0VUkoKTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uY29udHJvbGxlcignUG9zdHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJGZpbHRlciwgUG9zdHNTdmMpIHtcclxuXHJcbiAgJHNjb3BlLmFkZFBvc3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XHJcbiAgICAgIFBvc3RzU3ZjLmNyZWF0ZSh7XHJcbiAgICAgICAgYm9keTogJHNjb3BlLnBvc3RCb2R5XHJcbiAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHBvc3QpIHtcclxuICAgICAgICAkc2NvcGUucG9zdEJvZHkgPSBudWxsO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBQb3N0c1N2Yy5mZXRjaCgpXHJcbiAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUucG9zdHMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG5cclxuICAkc2NvcGUuJG9uKCd3czpuZXdfcG9zdCcsIGZ1bmN0aW9uIChfLCBwb3N0KSB7XHJcbiAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgUG9zdHNTdmMuZ2V0UG9zdChwb3N0KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUucG9zdHMudW5zaGlmdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUHJvZmlsZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcbiAgY29uc3QgY291bnRyaWVzID0gW1xyXG4gICAgeyBuYW1lOiBcIkFuZG9ycmFcIiwgZmxhZzogXCJmbGFnLWFkXCIsIHRpZGJpdDogXCJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBBcmFiIEVtaXJhdGVzXCIsIGZsYWc6IFwiZmxhZy1hZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWZnaGFuaXN0YW5cIiwgZmxhZzogXCJmbGFnLWFmXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsIGZsYWc6IFwiZmxhZy1hZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW5ndWlsbGFcIiwgZmxhZzogXCJmbGFnLWFpXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbGJhbmlhXCIsIGZsYWc6IFwiZmxhZy1hbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXJtZW5pYVwiLCBmbGFnOiBcImZsYWctYW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFuZ29sYVwiLCBmbGFnOiBcImZsYWctYW9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFudGFyY3RpY2FcIiwgZmxhZzogXCJmbGFnLWFxXCIgfSxcclxuICAgIHsgbmFtZTogXCJBcmdlbnRpbmFcIiwgZmxhZzogXCJmbGFnLWFyXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbWVyaWNhbiBTb21vYVwiLCBmbGFnOiBcImZsYWctYXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF1c3RyaWFcIiwgZmxhZzogXCJmbGFnLWF0XCIgfSxcclxuICAgIHsgbmFtZTogXCJBdXN0cmFsaWFcIiwgZmxhZzogXCJmbGFnLWF1XCIgfSxcclxuICAgIHsgbmFtZTogXCJBcnViYVwiLCBmbGFnOiBcImZsYWctYXdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIsOFbGFuZCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1heFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXplcmJhaWphblwiLCBmbGFnOiBcImZsYWctYXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIiwgZmxhZzogXCJmbGFnLWJhXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYXJiYWRvc1wiLCBmbGFnOiBcImZsYWctYmJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhbmdsYWRlc2hcIiwgZmxhZzogXCJmbGFnLWJkXCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxnaXVtXCIsIGZsYWc6IFwiZmxhZy1iZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnVya2luYSBGYXNvXCIsIGZsYWc6IFwiZmxhZy1iZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnVsZ2FyaWFcIiwgZmxhZzogXCJmbGFnLWJnXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYWhyYWluXCIsIGZsYWc6IFwiZmxhZy1iaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnVydW5kaVwiLCBmbGFnOiBcImZsYWctYmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbmluXCIsIGZsYWc6IFwiZmxhZy1ialwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgQmFydGjDqWxlbXlcIiwgZmxhZzogXCJmbGFnLWJsXCIgfSxcclxuICAgIHsgbmFtZTogXCJCZXJtdWRhXCIsIGZsYWc6IFwiZmxhZy1ibVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJ1bmVpIFwiLCBmbGFnOiBcImZsYWctYm5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvbGl2aWEsIFBsdXJpbmF0aW9uYWwgU3RhdGUgb2ZcIiwgZmxhZzogXCJmbGFnLWJvXCIgfSxcclxuICAgIHsgbmFtZTogXCJCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYVwiLCBmbGFnOiBcImZsYWctYnFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJyYXppbFwiLCBmbGFnOiBcImZsYWctYnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJhaGFtYXNcIiwgZmxhZzogXCJmbGFnLWJzXCIgfSxcclxuICAgIHsgbmFtZTogXCJCaHV0YW5cIiwgZmxhZzogXCJmbGFnLWJ0XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3V2ZXQgSXNsYW5kXCIsIGZsYWc6IFwiZmxhZy1idlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm90c3dhbmFcIiwgZmxhZzogXCJmbGFnLWJ3XCIgfSxcclxuICAgIHsgbmFtZTogXCJCZWxhcnVzXCIsIGZsYWc6IFwiZmxhZy1ieVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVsaXplXCIsIGZsYWc6IFwiZmxhZy1ielwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FuYWRhXCIsIGZsYWc6IFwiZmxhZy1jYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb25nbywgdGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlXCIsIGZsYWc6IFwiZmxhZy1jZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1jZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29uZ29cIiwgZmxhZzogXCJmbGFnLWNnXCIgfSxcclxuICAgIHsgbmFtZTogXCJTd2l0emVybGFuZFwiLCBmbGFnOiBcImZsYWctY2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkPDtHRlIGQnSXZvaXJlXCIsIGZsYWc6IFwiZmxhZy1jaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29vayBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1ja1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hpbGVcIiwgZmxhZzogXCJmbGFnLWNsXCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW1lcm9vblwiLCBmbGFnOiBcImZsYWctY21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoaW5hXCIsIGZsYWc6IFwiZmxhZy1jblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29sb21iaWFcIiwgZmxhZzogXCJmbGFnLWNvXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb3N0YSBSaWNhXCIsIGZsYWc6IFwiZmxhZy1jclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3ViYVwiLCBmbGFnOiBcImZsYWctY3VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhYm8gVmVyZGVcIiwgZmxhZzogXCJmbGFnLWN2XCIgfSxcclxuICAgIHsgbmFtZTogXCJDdXJhw6dhb1wiLCBmbGFnOiBcImZsYWctY3dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNocmlzdG1hcyBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLWN4XCIgfSxcclxuICAgIHsgbmFtZTogXCJDeXBydXNcIiwgZmxhZzogXCJmbGFnLWN5XCIgfSxcclxuICAgIHsgbmFtZTogXCJDemVjaCBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctY3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdlcm1hbnlcIiwgZmxhZzogXCJmbGFnLWRlXCIgfSxcclxuICAgIHsgbmFtZTogXCJEamlib3V0aVwiLCBmbGFnOiBcImZsYWctZGpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRlbm1hcmtcIiwgZmxhZzogXCJmbGFnLWRrXCIgfSxcclxuICAgIHsgbmFtZTogXCJEb21pbmljYVwiLCBmbGFnOiBcImZsYWctZG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkRvbWluaWNhbiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctZG9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFsZ2VyaWFcIiwgZmxhZzogXCJmbGFnLWR6XCIgfSxcclxuICAgIHsgbmFtZTogXCJFY3VhZG9yXCIsIGZsYWc6IFwiZmxhZy1lY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXN0b25pYVwiLCBmbGFnOiBcImZsYWctZWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVneXB0XCIsIGZsYWc6IFwiZmxhZy1lZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiV2VzdGVybiBTYWhhcmFcIiwgZmxhZzogXCJmbGFnLWVoXCIgfSxcclxuICAgIHsgbmFtZTogXCJFcml0cmVhXCIsIGZsYWc6IFwiZmxhZy1lclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3BhaW5cIiwgZmxhZzogXCJmbGFnLWVzXCIgfSxcclxuICAgIHsgbmFtZTogXCJFdGhpb3BpYVwiLCBmbGFnOiBcImZsYWctZXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZpbmxhbmRcIiwgZmxhZzogXCJmbGFnLWZpXCIgfSxcclxuICAgIHsgbmFtZTogXCJGaWppXCIsIGZsYWc6IFwiZmxhZy1malwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpXCIsIGZsYWc6IFwiZmxhZy1ma1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcyBvZlwiLCBmbGFnOiBcImZsYWctZm1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZhcm9lIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWZvXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmFuY2VcIiwgZmxhZzogXCJmbGFnLWZyXCIgfSxcclxuICAgIHsgbmFtZTogXCJHYWJvblwiLCBmbGFnOiBcImZsYWctZ2FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVuaXRlZCBLaW5nZG9tIG9mIEdyZWF0IEJyaXRhaW4gYW5kIE5vcnRoZXJuIElyZWxhbmRcIiwgZmxhZzogXCJmbGFnLWdiXCIgfSxcclxuICAgIHsgbmFtZTogXCJHcmVuYWRhXCIsIGZsYWc6IFwiZmxhZy1nZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2VvcmdpYVwiLCBmbGFnOiBcImZsYWctZ2VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBHdWlhbmFcIiwgZmxhZzogXCJmbGFnLWdmXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWVybnNleVwiLCBmbGFnOiBcImZsYWctZ2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdoYW5hXCIsIGZsYWc6IFwiZmxhZy1naFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2licmFsdGFyXCIsIGZsYWc6IFwiZmxhZy1naVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3JlZW5sYW5kXCIsIGZsYWc6IFwiZmxhZy1nbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2FtYmlhXCIsIGZsYWc6IFwiZmxhZy1nbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1nblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VhZGVsb3VwZVwiLCBmbGFnOiBcImZsYWctZ3BcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVxdWF0b3JpYWwgR3VpbmVhXCIsIGZsYWc6IFwiZmxhZy1ncVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3JlZWNlXCIsIGZsYWc6IFwiZmxhZy1nclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWdzXCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWF0ZW1hbGFcIiwgZmxhZzogXCJmbGFnLWd0XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdWFtXCIsIGZsYWc6IFwiZmxhZy1ndVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VpbmVhLUJpc3NhdVwiLCBmbGFnOiBcImZsYWctZ3dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1eWFuYVwiLCBmbGFnOiBcImZsYWctZ3lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhvbmcgS29uZ1wiLCBmbGFnOiBcImZsYWctaGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctaG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhvbmR1cmFzXCIsIGZsYWc6IFwiZmxhZy1oblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3JvYXRpYVwiLCBmbGFnOiBcImZsYWctaHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhhaXRpXCIsIGZsYWc6IFwiZmxhZy1odFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSHVuZ2FyeVwiLCBmbGFnOiBcImZsYWctaHVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkluZG9uZXNpYVwiLCBmbGFnOiBcImZsYWctaWRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklyZWxhbmRcIiwgZmxhZzogXCJmbGFnLWllXCIgfSxcclxuICAgIHsgbmFtZTogXCJJc3JhZWxcIiwgZmxhZzogXCJmbGFnLWlsXCIgfSxcclxuICAgIHsgbmFtZTogXCJJc2xlIG9mIE1hblwiLCBmbGFnOiBcImZsYWctaW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkluZGlhXCIsIGZsYWc6IFwiZmxhZy1pblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCIsIGZsYWc6IFwiZmxhZy1pb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXJhcVwiLCBmbGFnOiBcImZsYWctaXFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIklyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLWlyXCIgfSxcclxuICAgIHsgbmFtZTogXCJJY2VsYW5kXCIsIGZsYWc6IFwiZmxhZy1pc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXRhbHlcIiwgZmxhZzogXCJmbGFnLWl0XCIgfSxcclxuICAgIHsgbmFtZTogXCJKZXJzZXlcIiwgZmxhZzogXCJmbGFnLWplXCIgfSxcclxuICAgIHsgbmFtZTogXCJKYW1haWNhXCIsIGZsYWc6IFwiZmxhZy1qbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSm9yZGFuXCIsIGZsYWc6IFwiZmxhZy1qb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiSmFwYW5cIiwgZmxhZzogXCJmbGFnLWpwXCIgfSxcclxuICAgIHsgbmFtZTogXCJLZW55YVwiLCBmbGFnOiBcImZsYWcta2VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkt5cmd5enN0YW5cIiwgZmxhZzogXCJmbGFnLWtnXCIgfSxcclxuICAgIHsgbmFtZTogXCJDYW1ib2RpYVwiLCBmbGFnOiBcImZsYWcta2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktpcmliYXRpXCIsIGZsYWc6IFwiZmxhZy1raVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29tb3Jvc1wiLCBmbGFnOiBcImZsYWcta21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLCBmbGFnOiBcImZsYWcta25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIktvcmVhLCBEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1rcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS29yZWEsIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1rclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS3V3YWl0XCIsIGZsYWc6IFwiZmxhZy1rd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2F5bWFuIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWt5XCIgfSxcclxuICAgIHsgbmFtZTogXCJLYXpha2hzdGFuXCIsIGZsYWc6IFwiZmxhZy1relwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWxhXCIgfSxcclxuICAgIHsgbmFtZTogXCJMZWJhbm9uXCIsIGZsYWc6IFwiZmxhZy1sYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgTHVjaWFcIiwgZmxhZzogXCJmbGFnLWxjXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaWVjaHRlbnN0ZWluXCIsIGZsYWc6IFwiZmxhZy1saVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3JpIExhbmthXCIsIGZsYWc6IFwiZmxhZy1sa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGliZXJpYVwiLCBmbGFnOiBcImZsYWctbHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxlc290aG9cIiwgZmxhZzogXCJmbGFnLWxzXCIgfSxcclxuICAgIHsgbmFtZTogXCJMaXRodWFuaWFcIiwgZmxhZzogXCJmbGFnLWx0XCIgfSxcclxuICAgIHsgbmFtZTogXCJMdXhlbWJvdXJnXCIsIGZsYWc6IFwiZmxhZy1sdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGF0dmlhXCIsIGZsYWc6IFwiZmxhZy1sdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGlieWFcIiwgZmxhZzogXCJmbGFnLWx5XCIgfSxcclxuICAgIHsgbmFtZTogXCJNb3JvY2NvXCIsIGZsYWc6IFwiZmxhZy1tYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9uYWNvXCIsIGZsYWc6IFwiZmxhZy1tY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9sZG92YSwgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLW1kXCIgfSxcclxuICAgIHsgbmFtZTogXCJNb250ZW5lZ3JvXCIsIGZsYWc6IFwiZmxhZy1tZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgTWFydGluIChGcmVuY2ggcGFydClcIiwgZmxhZzogXCJmbGFnLW1mXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWRhZ2FzY2FyXCIsIGZsYWc6IFwiZmxhZy1tZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFyc2hhbGwgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctbWhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hY2Vkb25pYSwgdGhlIGZvcm1lciBZdWdvc2xhdiBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctbWtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGlcIiwgZmxhZzogXCJmbGFnLW1sXCIgfSxcclxuICAgIHsgbmFtZTogXCJNeWFubWFyXCIsIGZsYWc6IFwiZmxhZy1tbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9uZ29saWFcIiwgZmxhZzogXCJmbGFnLW1uXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWNhb1wiLCBmbGFnOiBcImZsYWctbW9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctbXBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hcnRpbmlxdWVcIiwgZmxhZzogXCJmbGFnLW1xXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXVyaXRhbmlhXCIsIGZsYWc6IFwiZmxhZy1tclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9udHNlcnJhdFwiLCBmbGFnOiBcImZsYWctbXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbHRhXCIsIGZsYWc6IFwiZmxhZy1tdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWF1cml0aXVzXCIsIGZsYWc6IFwiZmxhZy1tdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsZGl2ZXNcIiwgZmxhZzogXCJmbGFnLW12XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxhd2lcIiwgZmxhZzogXCJmbGFnLW13XCIgfSxcclxuICAgIHsgbmFtZTogXCJNZXhpY29cIiwgZmxhZzogXCJmbGFnLW14XCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxheXNpYVwiLCBmbGFnOiBcImZsYWctbXlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vemFtYmlxdWVcIiwgZmxhZzogXCJmbGFnLW16XCIgfSxcclxuICAgIHsgbmFtZTogXCJOYW1pYmlhXCIsIGZsYWc6IFwiZmxhZy1uYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV3IENhbGVkb25pYVwiLCBmbGFnOiBcImZsYWctbmNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pZ2VyXCIsIGZsYWc6IFwiZmxhZy1uZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9yZm9sayBJc2xhbmRcIiwgZmxhZzogXCJmbGFnLW5mXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWdlcmlhXCIsIGZsYWc6IFwiZmxhZy1uZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmljYXJhZ3VhXCIsIGZsYWc6IFwiZmxhZy1uaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmV0aGVybGFuZHNcIiwgZmxhZzogXCJmbGFnLW5sXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3J3YXlcIiwgZmxhZzogXCJmbGFnLW5vXCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXBhbFwiLCBmbGFnOiBcImZsYWctbnBcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5hdXJ1XCIsIGZsYWc6IFwiZmxhZy1uclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTml1ZVwiLCBmbGFnOiBcImZsYWctbnVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5ldyBaZWFsYW5kXCIsIGZsYWc6IFwiZmxhZy1uelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiT21hblwiLCBmbGFnOiBcImZsYWctb21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhbmFtYVwiLCBmbGFnOiBcImZsYWctcGFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBlcnVcIiwgZmxhZzogXCJmbGFnLXBlXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggUG9seW5lc2lhXCIsIGZsYWc6IFwiZmxhZy1wZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFwdWEgTmV3IEd1aW5lYVwiLCBmbGFnOiBcImZsYWctcGdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBoaWxpcHBpbmVzXCIsIGZsYWc6IFwiZmxhZy1waFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFraXN0YW5cIiwgZmxhZzogXCJmbGFnLXBrXCIgfSxcclxuICAgIHsgbmFtZTogXCJQb2xhbmRcIiwgZmxhZzogXCJmbGFnLXBsXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCIsIGZsYWc6IFwiZmxhZy1wbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGl0Y2Fpcm5cIiwgZmxhZzogXCJmbGFnLXBuXCIgfSxcclxuICAgIHsgbmFtZTogXCJQdWVydG8gUmljb1wiLCBmbGFnOiBcImZsYWctcHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhbGVzdGluZSwgU3RhdGUgb2ZcIiwgZmxhZzogXCJmbGFnLXBzXCIgfSxcclxuICAgIHsgbmFtZTogXCJQb3J0dWdhbFwiLCBmbGFnOiBcImZsYWctcHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhbGF1XCIsIGZsYWc6IFwiZmxhZy1wd1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUGFyYWd1YXlcIiwgZmxhZzogXCJmbGFnLXB5XCIgfSxcclxuICAgIHsgbmFtZTogXCJRYXRhclwiLCBmbGFnOiBcImZsYWctcWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlLDqXVuaW9uXCIsIGZsYWc6IFwiZmxhZy1yZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUm9tYW5pYVwiLCBmbGFnOiBcImZsYWctcm9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNlcmJpYVwiLCBmbGFnOiBcImZsYWctcnNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlJ1c3NpYW4gRmVkZXJhdGlvblwiLCBmbGFnOiBcImZsYWctcnVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlJ3YW5kYVwiLCBmbGFnOiBcImZsYWctcndcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhdWRpIEFyYWJpYVwiLCBmbGFnOiBcImZsYWctc2FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvbG9tb24gSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctc2JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNleWNoZWxsZXNcIiwgZmxhZzogXCJmbGFnLXNjXCIgfSxcclxuICAgIHsgbmFtZTogXCJTdWRhblwiLCBmbGFnOiBcImZsYWctc2RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN3ZWRlblwiLCBmbGFnOiBcImZsYWctc2VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNpbmdhcG9yZVwiLCBmbGFnOiBcImZsYWctc2dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhXCIsIGZsYWc6IFwiZmxhZy1zaFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2xvdmVuaWFcIiwgZmxhZzogXCJmbGFnLXNpXCIgfSxcclxuICAgIHsgbmFtZTogXCJTdmFsYmFyZCBhbmQgSmFuIE1heWVuXCIsIGZsYWc6IFwiZmxhZy1zalwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2xvdmFraWFcIiwgZmxhZzogXCJmbGFnLXNrXCIgfSxcclxuICAgIHsgbmFtZTogXCJTaWVycmEgTGVvbmVcIiwgZmxhZzogXCJmbGFnLXNsXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW4gTWFyaW5vXCIsIGZsYWc6IFwiZmxhZy1zbVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2VuZWdhbFwiLCBmbGFnOiBcImZsYWctc25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvbWFsaWFcIiwgZmxhZzogXCJmbGFnLXNvXCIgfSxcclxuICAgIHsgbmFtZTogXCJTdXJpbmFtZVwiLCBmbGFnOiBcImZsYWctc3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvdXRoIFN1ZGFuXCIsIGZsYWc6IFwiZmxhZy1zc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FvIFRvbWUgYW5kIFByaW5jaXBlXCIsIGZsYWc6IFwiZmxhZy1zdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWwgU2FsdmFkb3JcIiwgZmxhZzogXCJmbGFnLXN2XCIgfSxcclxuICAgIHsgbmFtZTogXCJTaW50IE1hYXJ0ZW4gKER1dGNoIHBhcnQpXCIsIGZsYWc6IFwiZmxhZy1zeFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3lyaWFuIEFyYWIgUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLXN5XCIgfSxcclxuICAgIHsgbmFtZTogXCJTd2F6aWxhbmRcIiwgZmxhZzogXCJmbGFnLXN6XCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLXRjXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGFkXCIsIGZsYWc6IFwiZmxhZy10ZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzXCIsIGZsYWc6IFwiZmxhZy10ZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9nb1wiLCBmbGFnOiBcImZsYWctdGdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRoYWlsYW5kXCIsIGZsYWc6IFwiZmxhZy10aFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGFqaWtpc3RhblwiLCBmbGFnOiBcImZsYWctdGpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRva2VsYXVcIiwgZmxhZzogXCJmbGFnLXRrXCIgfSxcclxuICAgIHsgbmFtZTogXCJUaW1vci1MZXN0ZVwiLCBmbGFnOiBcImZsYWctdGxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmttZW5pc3RhblwiLCBmbGFnOiBcImZsYWctdG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1bmlzaWFcIiwgZmxhZzogXCJmbGFnLXRuXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb25nYVwiLCBmbGFnOiBcImZsYWctdG9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlR1cmtleVwiLCBmbGFnOiBcImZsYWctdHJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIiwgZmxhZzogXCJmbGFnLXR0XCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXZhbHVcIiwgZmxhZzogXCJmbGFnLXR2XCIgfSxcclxuICAgIHsgbmFtZTogXCJUYWl3YW4sIFByb3ZpbmNlIG9mIENoaW5hXCIsIGZsYWc6IFwiZmxhZy10d1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWctdHpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlVrcmFpbmVcIiwgZmxhZzogXCJmbGFnLXVhXCIgfSxcclxuICAgIHsgbmFtZTogXCJVZ2FuZGFcIiwgZmxhZzogXCJmbGFnLXVnXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLXVtXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgU3RhdGVzIG9mIEFtZXJpY2FcIiwgZmxhZzogXCJmbGFnLXVzXCIgfSxcclxuICAgIHsgbmFtZTogXCJVcnVndWF5XCIsIGZsYWc6IFwiZmxhZy11eVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVXpiZWtpc3RhblwiLCBmbGFnOiBcImZsYWctdXpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkhvbHkgU2VlXCIsIGZsYWc6IFwiZmxhZy12YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIiwgZmxhZzogXCJmbGFnLXZjXCIgfSxcclxuICAgIHsgbmFtZTogXCJWZW5lenVlbGEsIEJvbGl2YXJpYW4gUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLXZlXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaXJnaW4gSXNsYW5kcywgQnJpdGlzaFwiLCBmbGFnOiBcImZsYWctdmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpcmdpbiBJc2xhbmRzLCBVLlMuXCIsIGZsYWc6IFwiZmxhZy12aVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlldCBOYW1cIiwgZmxhZzogXCJmbGFnLXZuXCIgfSxcclxuICAgIHsgbmFtZTogXCJWYW51YXR1XCIsIGZsYWc6IFwiZmxhZy12dVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiV2FsbGlzIGFuZCBGdXR1bmFcIiwgZmxhZzogXCJmbGFnLXdmXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYW1vYVwiLCBmbGFnOiBcImZsYWctd3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlllbWVuXCIsIGZsYWc6IFwiZmxhZy15ZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWF5b3R0ZVwiLCBmbGFnOiBcImZsYWcteXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvdXRoIEFmcmljYVwiLCBmbGFnOiBcImZsYWctemFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlphbWJpYVwiLCBmbGFnOiBcImZsYWctem1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlppbWJhYndlXCIsIGZsYWc6IFwiZmxhZy16d1wiIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgdXBkYXRlVXNlckZsYWdzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnVzZXJGbGFncyA9ICRzY29wZS5jdXJyZW50VXNlcj8uZmxhZ3NcclxuICAgICAgPyBjb3VudHJpZXMuZmlsdGVyKGZ1bmN0aW9uIChjb3VudHJ5KSB7XHJcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLmN1cnJlbnRVc2VyLmZsYWdzLmluY2x1ZGVzKGNvdW50cnkuZmxhZyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgOiBbXTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZGF0ZU9wdGlvbnMgPSB7XHJcbiAgICBtYXhEYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgbWluRGF0ZTogbmV3IERhdGUoMTkwMCwgMSwgMSksXHJcbiAgICBpbml0RGF0ZTogbmV3IERhdGUoMjAwMCwgMSwgMSksXHJcbiAgICBkYXRlcGlja2VyTW9kZTogXCJ5ZWFyXCIsXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVzZXJuYW1lVG9nZ2xlID0gdHJ1ZTtcclxuICAkc2NvcGUucGFzc3dvcmRUb2dnbGUgPSB0cnVlO1xyXG5cclxuICAkc2NvcGUudG9nZ2xlVXNlcm5hbWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUudXNlcm5hbWVUb2dnbGUgPSAhJHNjb3BlLnVzZXJuYW1lVG9nZ2xlO1xyXG4gICAgJHNjb3BlLm5ld1VzZXJuYW1lID0gJHNjb3BlLmN1cnJlbnRVc2VyLnVzZXJuYW1lO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS50b2dnbGVQYXNzd29yZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS5uZXdQYXNzd29yZCA9IG51bGw7XHJcbiAgICAkc2NvcGUuY29uZmlybVBhc3N3b3JkID0gbnVsbDtcclxuICAgICRzY29wZS5wYXNzd29yZFRvZ2dsZSA9ICEkc2NvcGUucGFzc3dvcmRUb2dnbGU7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAocGFzc3dvcmQpIHtcclxuICAgIGlmIChwYXNzd29yZCkge1xyXG4gICAgICB2YXIgdXNlciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgIFVzZXJTdmMuY2hlY2tQYXNzd29yZCh1c2VyLCBwYXNzd29yZCkudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHZhciBvcmlnaW5hbEJnID0gJChcIi5wYXNzd29yZFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIik7XHJcbiAgICAgICAgICAkKFwiLnBhc3N3b3JkXCIpLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0ZGQjZDMVwiIH0sIDIwMCkuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogb3JpZ2luYWxCZyB9LCAyMDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmNoYW5nZVBhc3N3b3JkID0gZnVuY3Rpb24gKG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCwgY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICBpZiAobmV3UGFzc3dvcmQpIHtcclxuICAgICAgaWYgKG5ld1Bhc3N3b3JkID09IGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgIHZhciB1c2VyID0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZDtcclxuICAgICAgICBVc2VyU3ZjLmNoYW5nZVBhc3N3b3JkKHVzZXIsIG9sZFBhc3N3b3JkLCBuZXdQYXNzd29yZCkudGhlbihcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnRvYXN0KFwiUGFzc3dvcmQgY2hhbmdlZFwiKTtcclxuICAgICAgICAgICAgJHNjb3BlLm9sZFBhc3N3b3JkID0gbnVsbDtcclxuICAgICAgICAgICAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkc2NvcGUudG9hc3QoXCJQYXNzd29yZCBjaGFuZ2UgZmFpbGVkXCIpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBvcmlnaW5hbEJnID0gJChcIi5wYXNzd29yZFwiKS5jc3MoXCJiYWNrZ3JvdW5kQ29sb3JcIik7XHJcbiAgICAgICAgJChcIi5wYXNzd29yZFwiKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNGRkI2QzFcIiB9LCAyMDApLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG9yaWdpbmFsQmcgfSwgMjAwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VybmFtZSkge1xyXG4gICAgJHNjb3BlLiRlbWl0KFwibG9hZGluZ1wiKTtcclxuICAgIFVzZXJTdmMuY2hhbmdlVXNlcm5hbWUoJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCwgdXNlcm5hbWUpLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS4kZW1pdChcInVwZGF0ZVwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSxcclxuICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICRzY29wZS50b2FzdCh1c2VybmFtZSArIFwiIGFscmVhZHkgaW4gdXNlXCIpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUudXBkYXRlVXNlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS4kZW1pdChcImxvYWRpbmdcIik7XHJcbiAgICBVc2VyU3ZjLnVwZGF0ZVVzZXIoeyAuLi4kc2NvcGUuY3VycmVudFVzZXIsIGZsYWdzOiAkc2NvcGUudXNlckZsYWdzLm1hcCgoeyBmbGFnIH0pID0+IGZsYWcpIH0pLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS4kZW1pdChcInVwZGF0ZVwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmxvYWRDb3VudHJpZXMgPSBmdW5jdGlvbiAoJHF1ZXJ5KSB7XHJcbiAgICByZXR1cm4gY291bnRyaWVzLmZpbHRlcihmdW5jdGlvbiAoY291bnRyeSkge1xyXG4gICAgICByZXR1cm4gY291bnRyeS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigkcXVlcnkudG9Mb3dlckNhc2UoKSkgIT0gLTE7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgKCkgPT4ge1xyXG4gICAgdXBkYXRlVXNlckZsYWdzKCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1NraWxsc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCAkd2luZG93KSB7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZFNraWxsID0gMDtcclxuICAkc2NvcGUuc2tpbGxzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICRzY29wZS5wcm9qZWN0cyA9IFtdO1xyXG5cclxuICAkc2NvcGUubGFiZWxzID0gW1wiRG93bmxvYWQgU2FsZXNcIiwgXCJJbi1TdG9yZSBTYWxlc1wiLCBcIk1haWwtT3JkZXIgU2FsZXNcIl07XHJcbiAgJHNjb3BlLmRhdGEgPSBbMzAwLCA1MDAsIDEwMF07XHJcblxyXG4gICQuZ2V0SlNPTignL2V4cGVyaWVuY2UuanNvbicsIGZ1bmN0aW9uKCBkYXRhICkge1xyXG4gICAgJHNjb3BlLnByb2plY3RzID0gZGF0YS5yZWR1Y2UoKHByb2plY3RzLCBlbXBsb3llcikgPT4ge1xyXG4gICAgICBpZiAoZW1wbG95ZXIucHJvamVjdHMpIHJldHVybiBlbXBsb3llci5wcm9qZWN0cy5jb25jYXQocHJvamVjdHMpO1xyXG4gICAgICBlbHNlIHJldHVybiBwcm9qZWN0cztcclxuICAgIH0sIHt9KTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmZpbHRlcmVkUHJvamVjdHMgPSAoKSA9PiAkc2NvcGUucHJvamVjdHNcclxuICAgIC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3Quc2tpbGxzICYmIHByb2plY3Quc2tpbGxzLmluY2x1ZGVzKCRzY29wZS5zZWxlY3RlZFNraWxsLmNvZGUpKVxyXG5cclxuICAkLmdldEpTT04oJy9za2lsbHMuanNvbicsIGZ1bmN0aW9uKCBkYXRhICkge1xyXG5cclxuICAgIGNvbnN0IHNraWxscyA9IGRhdGFcclxuICAgIC5maWx0ZXIoKHNraWxsKSA9PiBza2lsbC5lbmFibGVkKVxyXG5cclxuICAgICRzY29wZS5jYXRlZ29yaWVzID0gc2tpbGxzXHJcbiAgICAucmVkdWNlKGZ1bmN0aW9uKGNhdGVnb3JpZXMsIHNraWxsKSB7XHJcbiAgICAgIGlmICghY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0pIHtcclxuICAgICAgICBjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XSA9IFtza2lsbF1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXRlZ29yaWVzW3NraWxsLmNhdGVnb3J5XS5wdXNoKHNraWxsKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzO1xyXG4gICAgfSwge30pO1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZFNraWxsID0gZnVuY3Rpb24gKHNraWxsKSB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsID0gc2tpbGw7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsLmNoYXJ0T3B0aW9ucyA9IHtcclxuICAgICAgICBjdXRvdXRQZXJjZW50YWdlIDogODAsXHJcbiAgICAgICAgY2lyY3VtZmVyZW5jZTogMiAqIE1hdGguUEksXHJcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZSxcclxuICAgICAgICB0b29sdGlwczoge1xyXG4gICAgICAgICAgZW5hYmxlZDogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZFNraWxsLmNoYXJ0U3R5bGUgPSB7XHJcbiAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKC9za2lsbHMvJyArICRzY29wZS5zZWxlY3RlZFNraWxsLmltYWdlICsgJyknLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXJlcGVhdCc6ICduby1yZXBlYXQnLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kLXNpemUnOiAnNjAlJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6ICc1MCUgNTAlJ1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCgkc2NvcGUuc2tpbGxzWzBdKTtcclxuXHJcbiAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJHNjZSwgJGxvY2F0aW9uLCBUZW5UaGluZ3NTdmMpIHtcclxuICAgIGxldCBwYWdlID0gMTtcclxuICAgICRzY29wZS5saXN0cyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlYXJjaCA9IFwiXCI7XHJcbiAgICAkc2NvcGUuc2VhcmNoRmllbGQgPSBcImFsbFwiO1xyXG4gICAgJHNjb3BlLm5ld0l0ZW0gPSB7fTtcclxuICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHt9O1xyXG4gICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBcIkVOXCI7XHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9IFtdO1xyXG4gICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9IFtdO1xyXG4gICAgJHNjb3BlLmNvbmZpcm1lZCA9IGZhbHNlO1xyXG4gICAgbGV0IGV4aGF1c3RlZCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0IG9iamVjdENhdGVnb3JpZXMgPSBbXCJjdWx0dXJlXCIsIFwibmF0dXJlXCIsIFwibWlzY1wiLCBcInNvY2lldHlcIiwgXCJzcG9ydHNcIl07XHJcbiAgICAkc2NvcGUuYmx1cmJUeXBlcyA9IFtcclxuICAgICAgeyBhcGk6IFwibW92aWVzXCIsIGNhdGVnb3JpZXM6IFtcIm1vdmllc1wiXSwgdGV4dDogXCJHZXQgbW92aWUgcG9zdGVyc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcInR2XCIsIGNhdGVnb3JpZXM6IFtcInRlbGV2aXNpb25cIl0sIHRleHQ6IFwiR2V0IHR2IHBvc3RlcnNcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJhY3RvcnNcIiwgY2F0ZWdvcmllczogW1wibW92aWVzXCIsIFwidGVsZXZpc2lvblwiXSwgdGV4dDogXCJHZXQgYWN0b3IgcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcImJvb2tzXCIsIGNhdGVnb3JpZXM6IFtcImxpdGVyYXR1cmVcIl0sIHRleHQ6IFwiR2V0IGJvb2sgY292ZXJzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwibXVzaWN2aWRlb3NcIiwgY2F0ZWdvcmllczogW1wibXVzaWNcIl0sIHRleHQ6IFwiR2V0IG11c2ljIHZpZGVvc1wiLCBhZG1pbk9ubHk6IHRydWUgfSxcclxuICAgICAgeyBhcGk6IFwidW5zcGxhc2hcIiwgY2F0ZWdvcmllczogb2JqZWN0Q2F0ZWdvcmllcywgdGV4dDogXCJHZXQgVW5zcGxhc2ggcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcInBleGVsc1wiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBQZXhlbHMgcGljc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcIndpa2lcIiwgY2F0ZWdvcmllczogb2JqZWN0Q2F0ZWdvcmllcywgdGV4dDogXCJHZXQgV2lraSBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgIF07XHJcblxyXG4gICAgJHNjb3BlLmhhdmVDb21tb25JdGVtcyA9IChhcnIxLCBhcnIyKSA9PiB7XHJcbiAgICAgIHJldHVybiBhcnIxPy5zb21lKChpdGVtKSA9PiBhcnIyLmluY2x1ZGVzKGl0ZW0pKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xyXG4gICAgICAgIC8vIFRhYlxyXG4gICAgICAgIGNhc2UgOTpcclxuICAgICAgICAgIGlmICgkKFwiI25ldy1ibHVyYlwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICAkc2NvcGUuY3JlYXRlVmFsdWUoKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoJChcIiNuZXctdmFsdWVcIikuaXMoXCI6Zm9jdXNcIikpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgJChcIiNuZXctYmx1cmJcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIH1cclxuICAgICAgLy8gdXNlIGUua2V5Q29kZVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuYWRkTGlzdCA9ICgpID0+IHtcclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgXCJuZXdcIik7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBjcmVhdG9yOiAkc2NvcGUuY3VycmVudFVzZXIuX2lkLFxyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgdmFsdWVzOiBbXSxcclxuICAgICAgICBhbnN3ZXJzOiAwLFxyXG4gICAgICAgIGlzRHluYW1pYzogdHJ1ZSxcclxuICAgICAgICBjYXRlZ29yeTogXCJcIixcclxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgICBsYW5ndWFnZTogJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UsXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRTZWxlY3RlZEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWFyY2ggPSAkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoO1xyXG4gICAgICBpZiAobGlzdCkge1xyXG4gICAgICAgIGlmIChsaXN0Ll9pZCA9PT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgJHNjb3BlLmFkZExpc3QoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgVGVuVGhpbmdzU3ZjLmdldExpc3QobGlzdClcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gJHNjb3BlLnNlbGVjdGVkTGlzdC5sYW5ndWFnZTtcclxuICAgICAgICAgICAgICAkc2NvcGUucmVhZE9ubHkgPVxyXG4gICAgICAgICAgICAgICAgISRzY29wZS5zZWxlY3RlZExpc3QgfHxcclxuICAgICAgICAgICAgICAgICghJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluICYmXHJcbiAgICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuY3JlYXRvci5faWQgIT09ICRzY29wZS5jdXJyZW50VXNlci5faWQgJiZcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5faWQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJsaXN0XCIsIG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldExhbmd1YWdlRmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzZXRDYXRlZ29yeUZpbHRlciA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyID0ge307XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRGaWx0ZXJDb3VudCA9ICgpID0+XHJcbiAgICAgIE9iamVjdC52YWx1ZXMoJHNjb3BlLmxhbmd1YWdlRmlsdGVyKS5sZW5ndGggKyBPYmplY3QudmFsdWVzKCRzY29wZS5jYXRlZ29yeUZpbHRlcikubGVuZ3RoO1xyXG5cclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLmN1cnJlbnRVc2VyKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogbGFuZ3VhZ2VzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGFuZ3VhZ2VzKCk7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZXMgPSBsYW5ndWFnZXM7XHJcbiAgICAgIHJlc2V0TGFuZ3VhZ2VGaWx0ZXIoKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBjYXRlZ29yaWVzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpO1xyXG4gICAgICByZXNldENhdGVnb3J5RmlsdGVyKCk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YTogbGFuZ3VhZ2VTdGF0cyB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLmdldExpc3RMYW5ndWFnZVN0YXRzKCk7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZVN0YXRzID0gbGFuZ3VhZ2VTdGF0cy5yZWR1Y2UoKHJlc3VsdCwgeyBfaWQsIGNvdW50IH0pID0+IHtcclxuICAgICAgICByZXN1bHRbX2lkLmxhbmd1YWdlXSA9IChyZXN1bHRbX2lkLmxhbmd1YWdlXSB8fCAwKSArIGNvdW50O1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0sIHt9KTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBjYXRlZ29yeVN0YXRzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdENhdGVnb3J5U3RhdHMoKTtcclxuICAgICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSBjYXRlZ29yeVN0YXRzLnJlZHVjZSgocmVzdWx0LCB7IF9pZCwgY291bnQgfSkgPT4ge1xyXG4gICAgICAgIHJlc3VsdFtfaWRdID0gY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSwge30pO1xyXG4gICAgICBpZiAoJGxvY2F0aW9uLnNlYXJjaCgpLmxpc3QpIHtcclxuICAgICAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0KHsgX2lkOiAkbG9jYXRpb24uc2VhcmNoKCkubGlzdCB9KTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuc2VhcmNoID0gJGxvY2F0aW9uLnNlYXJjaCgpLnNlYXJjaCB8fCBcIlwiO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNlYXJjaExpc3RzID0gYXN5bmMgKHZpZXdWYWx1ZSkgPT4ge1xyXG4gICAgICBpZiAodmlld1ZhbHVlLmxlbmd0aCA+PSAzKSB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuc2VhcmNoTGlzdHModmlld1ZhbHVlKTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmhpZ2hsaWdodGVkU2VhcmNoVGV4dCA9ICh0ZXh0KSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuc2VhcmNoKSB7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKGAoJHskc2NvcGUuc2VhcmNofSlgLCBcImdpXCIpO1xyXG4gICAgICAgIHJldHVybiB0ZXh0LnJlcGxhY2UocmVnZXgsIFwiPHNwYW4gY2xhc3M9J2hpZ2hsaWdodCc+JDE8L3NwYW4+XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS52YWx1ZU9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJ2YWx1ZVwiLFxyXG4gICAgICBkaXJlY3Rpb246IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgIGZpZWxkOiAkbG9jYXRpb24uc2VhcmNoKCkuc29ydCB8fCBcImRhdGVcIixcclxuICAgICAgZGlyZWN0aW9uOiAkbG9jYXRpb24uc2VhcmNoKCkub3JkZXIgPyAkbG9jYXRpb24uc2VhcmNoKCkub3JkZXIgPT09IFwiZGVzY1wiIDogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyQnkgPSAoZmllbGQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5vcmRlci5maWVsZCA9PT0gZmllbGQpIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIuZGlyZWN0aW9uID0gISRzY29wZS5vcmRlci5kaXJlY3Rpb247XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgZGlyZWN0aW9uOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJzb3J0XCIsIGZpZWxkKTtcclxuICAgICAgJGxvY2F0aW9uLnNlYXJjaChcIm9yZGVyXCIsICRzY29wZS5vcmRlci5kaXJlY3Rpb24gPyBcImRlc2NcIiA6IFwiYXNjXCIpO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldE1vcmVMaXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5saXN0cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgICAgZ2V0TGlzdHMoKS50aGVuKChsaXN0cykgPT4ge1xyXG4gICAgICAgICRzY29wZS5saXN0cyA9ICRzY29wZS5saXN0cy5jb25jYXQobGlzdHMpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExpc3RzID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUubGlzdHMgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICBwYWdlID0gMTtcclxuICAgICAgZXhoYXVzdGVkID0gZmFsc2U7XHJcbiAgICAgIGdldExpc3RzKCkudGhlbigobGlzdHMpID0+IHtcclxuICAgICAgICAkc2NvcGUubGlzdHMgPSBsaXN0cztcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPT09IHRydWUpIHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPSAhJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGV0ZSAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV07XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeUZpbHRlciA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSAhJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWxldGUgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUNhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKTtcclxuICAgICAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9XHJcbiAgICAgICAgY2F0ZWdvcmllcy5sZW5ndGggPT09IGNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSkubGVuZ3RoO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSAkc2NvcGUuY2F0ZWdvcmllcy5yZWR1Y2UoKGZpbHRlciwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICBmaWx0ZXJbY2F0ZWdvcnldID0gIWFsbENhdGVnb3JpZXM7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgICAgfSwge30pO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldENhdGVnb3J5TGFiZWwgPSAoY2F0ZWdvcmllcykgPT4ge1xyXG4gICAgICBpZiAoIWNhdGVnb3JpZXMgfHwgY2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHJldHVybiBcIlwiO1xyXG4gICAgICBjb25zdCBtYWluQ2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4gIWNhdGVnb3J5LmluY2x1ZGVzKFwiLlwiKSk7XHJcbiAgICAgIHJldHVybiBtYWluQ2F0ZWdvcmllc1xyXG4gICAgICAgIC5zb3J0KClcclxuICAgICAgICAubWFwKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc3ViY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXNcclxuICAgICAgICAgICAgLmZpbHRlcigoc3ViY2F0ZWdvcnkpID0+IHN1YmNhdGVnb3J5LnN0YXJ0c1dpdGgoY2F0ZWdvcnkpICYmIHN1YmNhdGVnb3J5ICE9PSBjYXRlZ29yeSlcclxuICAgICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgICAoc3ViY2F0ZWdvcnkpID0+XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2F0ZWdvcmllc1xyXG4gICAgICAgICAgICAgICAgICAuZmluZCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gY2F0ZWdvcnkpXHJcbiAgICAgICAgICAgICAgICAgIC5zdWJjYXRlZ29yaWVzLmZpbmQoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IHN1YmNhdGVnb3J5KT8ubGFiZWwsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcy5maW5kKCh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBjYXRlZ29yeSkubGFiZWwgK1xyXG4gICAgICAgICAgICAoc3ViY2F0ZWdvcmllcy5sZW5ndGggPiAwID8gXCIgKFwiICsgc3ViY2F0ZWdvcmllcy5zb3J0KCkuam9pbihcIiwgXCIpICsgXCIpXCIgOiBcIlwiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5qb2luKFwiLCBcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldExpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxvYWRpbmcgfHwgZXhoYXVzdGVkKSByZXR1cm4gW107XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2ggIT09ICRzY29wZS5zZWFyY2gpIHtcclxuICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwic2VhcmNoXCIsICRzY29wZS5zZWFyY2ggPyAkc2NvcGUuc2VhcmNoIDogbnVsbCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdHMoe1xyXG4gICAgICAgIHBhZ2UsXHJcbiAgICAgICAgc29ydEJ5OiAkc2NvcGUub3JkZXIuZmllbGQsXHJcbiAgICAgICAgb3JkZXJCeTogJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA/IC0xIDogMSxcclxuICAgICAgICBsaW1pdDogMTAwLFxyXG4gICAgICAgIC4uLigkc2NvcGUuc2VhcmNoRmllbGQgPT09IFwiYWxsXCIgPyB7IHNlYXJjaDogJHNjb3BlLnNlYXJjaCB9IDoge30pLFxyXG4gICAgICAgIC4uLigkc2NvcGUuc2VhcmNoRmllbGQgPT09IFwibmFtZVwiID8geyBuYW1lOiAkc2NvcGUuc2VhcmNoIH0gOiB7fSksXHJcbiAgICAgICAgbGFuZ3VhZ2U6IE9iamVjdC5rZXlzKCRzY29wZS5sYW5ndWFnZUZpbHRlcikuZmlsdGVyKChsYW5ndWFnZSkgPT4gJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlXSA9PT0gdHJ1ZSksXHJcbiAgICAgICAgY2F0ZWdvcmllczogT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKS5maWx0ZXIoKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID09PSB0cnVlKSxcclxuICAgICAgICBsYW5ndWFnZU5vdDogT2JqZWN0LmtleXMoJHNjb3BlLmxhbmd1YWdlRmlsdGVyKS5maWx0ZXIoKGxhbmd1YWdlKSA9PiAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2VdID09PSBmYWxzZSksXHJcbiAgICAgICAgY2F0ZWdvcmllc05vdDogT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKS5maWx0ZXIoXHJcbiAgICAgICAgICAoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPT09IGZhbHNlLFxyXG4gICAgICAgICksXHJcbiAgICAgIH0pO1xyXG4gICAgICAkc2NvcGUuY291bnQgPSBkYXRhLmNvdW50O1xyXG4gICAgICBpZiAoZGF0YS5yZXN1bHQubGVuZ3RoIDwgMTAwKSBleGhhdXN0ZWQgPSB0cnVlO1xyXG4gICAgICBlbHNlIHBhZ2UgPSBkYXRhLm5leHRQYWdlO1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhgUGFnZSAke3BhZ2V9IGxvYWRlZCwgJHtkYXRhLnJlc3VsdC5sZW5ndGh9IGl0ZW1zYCk7XHJcbiAgICAgIHJldHVybiBkYXRhLnJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExpc3ROYW1lID0gKGxpc3RJZCkgPT4gJHNjb3BlLmxpc3RzLmZpbmQoKHsgX2lkIH0pID0+IF9pZCA9PT0gbGlzdElkKT8ubmFtZTtcclxuXHJcbiAgICAkc2NvcGUudXBkYXRlVmFsdWUgPSBhc3luYyAoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoIWl0ZW0udmFsdWUpIHtcclxuICAgICAgICAkc2NvcGUuZGVsZXRlVmFsdWUoaXRlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW1SZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy51cGRhdGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgaXRlbSk7XHJcbiAgICAgICAgaXRlbS5ibHVyYlR5cGUgPSB1cGRhdGVkSXRlbVJlc3BvbnNlLmRhdGEuYmx1cmJUeXBlO1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlVmFsdWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLm5ld0l0ZW0udmFsdWUpIHJldHVybjtcclxuICAgICAgaWYgKCRzY29wZS5oYXNEdXBsaWNhdGUoKSkge1xyXG4gICAgICAgIHJldHVybiBhbGVydChgJHskc2NvcGUubmV3SXRlbS52YWx1ZX0gaXMgYWxyZWFkeSBpbiB0aGUgbGlzdGApO1xyXG4gICAgICB9IGVsc2UgaWYgKCEkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnB1c2goeyAuLi4kc2NvcGUubmV3SXRlbSB9KTtcclxuICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMubGVuZ3RoID49IDEwKSB7XHJcbiAgICAgICAgICBhd2FpdCAkc2NvcGUudXBzZXJ0TGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlZEl0ZW1SZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5jcmVhdGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgJHNjb3BlLm5ld0l0ZW0pO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnB1c2goY3JlYXRlZEl0ZW1SZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUubmV3SXRlbS52YWx1ZSk7XHJcbiAgICAgICAgJHNjb3BlLnRvYXN0KGBcIiR7JHNjb3BlLm5ld0l0ZW0udmFsdWV9XCIgYWRkZWRgKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICRzY29wZS5uZXdJdGVtLmJsdXJiID0gXCJcIjtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgJChcIiNuZXctdmFsdWVcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlVmFsdWUgPSAoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZVRvRGVsZXRlID0gaXRlbS52YWx1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKS50aGVuKCgpID0+IHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyA9ICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLl9pZCAhPT0gaXRlbS5faWQpO1xyXG4gICAgICAgICRzY29wZS50b2FzdChgXCIke3ZhbHVlVG9EZWxldGV9XCIgcmVtb3ZlZGApO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwZGF0ZUxpc3QgPSAobGlzdCwgdXBkYXRlcykgPT4ge1xyXG4gICAgICBpZiAobGlzdC5faWQgJiYgbGlzdC5faWQgIT09IFwibmV3XCIpIHtcclxuICAgICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAuLi51cGRhdGVzLFxyXG4gICAgICAgICAgX2lkOiBsaXN0Ll9pZCxcclxuICAgICAgICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgY29uc3QgbGlzdEluZGV4ID0gJHNjb3BlLmxpc3RzLmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5faWQgPT09IGRhdGEuX2lkKTtcclxuICAgICAgICAgICRzY29wZS5saXN0c1tsaXN0SW5kZXhdID0gZGF0YTtcclxuICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudXBzZXJ0TGlzdCA9IChsaXN0LCB1cGRhdGVzKSA9PiB7XHJcbiAgICAgICRzY29wZS5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAobGlzdC52YWx1ZXMubGVuZ3RoID49IDEwICYmIGxpc3QubmFtZSAmJiBsaXN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmIChsaXN0Ll9pZCAmJiBsaXN0Ll9pZCAhPT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgbGV0IGNoYW5nZXMgPSB1cGRhdGVzID8gdXBkYXRlcyA6IGxpc3Q7XHJcbiAgICAgICAgICBkZWxldGUgY2hhbmdlcy5faWQ7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAgIC4uLmNoYW5nZXMsXHJcbiAgICAgICAgICAgIF9pZDogbGlzdC5faWQsXHJcbiAgICAgICAgICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICRzY29wZS5saXN0c1skc2NvcGUubGlzdHMuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0Ll9pZCA9PT0gZGF0YS5faWQpXSA9IGRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5jcmVhdGVMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgJHNjb3BlLnNlbGVjdGVkTGlzdCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0ID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuX2lkID0gZGF0YS5faWQ7XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICRzY29wZS50b2FzdChgXCIke2RhdGEubmFtZX1cIiBjcmVhdGVkYCk7XHJcbiAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbigkc2NvcGUuc2VsZWN0ZWRMaXN0LCB1cGRhdGVzKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICghbGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMobGlzdC5faWQpKSB7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9IFtsaXN0Ll9pZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjbW9kYWwtZGVsZXRlLWxpc3RzXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICQoXCIjbW9kYWwtZGVsZXRlLWxpc3RzXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNvbmZpcm1NZXJnZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5tZXJnZUxpc3RzKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMpO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICRzY29wZS50b2FzdChcIk1lcmdlZFwiKTtcclxuICAgICAgJChcIiNtb2RhbC1tZXJnZS1saXN0c1wiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jb25maXJtRGVsZXRlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgbGlzdElkIG9mICRzY29wZS5saXN0SWRzVG9EZWxldGUpIHtcclxuICAgICAgICBhd2FpdCBUZW5UaGluZ3NTdmMuZGVsZXRlTGlzdChsaXN0SWQpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJHNjb3BlLnRvYXN0KFwiTGlzdHMgZGVsZXRlZFwiKTtcclxuICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMubGVuZ3RoID09PSAkc2NvcGUubGlzdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSAkc2NvcGUubGlzdHMubWFwKCh7IF9pZCB9KSA9PiBfaWQpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gJHNjb3BlLmxpc3RzLmZpbHRlcigoeyBfaWQgfSkgPT4gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhfaWQpKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUhpZ2hsaWdodGVkTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmluY2x1ZGVzKGxpc3QuX2lkKSkge1xyXG4gICAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmZpbHRlcihcclxuICAgICAgICAgIChoaWdobGlnaHRlZExpc3RJZCkgPT4gaGlnaGxpZ2h0ZWRMaXN0SWQgIT09IGxpc3QuX2lkLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5wdXNoKGxpc3QuX2lkKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9ICRzY29wZS5saXN0cy5maWx0ZXIoKHsgX2lkIH0pID0+ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMoX2lkKSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZSA9IChsaXN0LCBsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBsaXN0Lmxhbmd1YWdlID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7IGxhbmd1YWdlOiBsYW5ndWFnZS5jb2RlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0RGlmZmljdWx0eSA9IChsaXN0LCBkaWZmaWN1bHR5KSA9PiB7XHJcbiAgICAgIGxpc3QuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHsgZGlmZmljdWx0eTogZGlmZmljdWx0eSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldEZyZXF1ZW5jeSA9IChsaXN0LCBmcmVxdWVuY3kpID0+IHtcclxuICAgICAgbGlzdC5mcmVxdWVuY3kgPSBmcmVxdWVuY3k7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHsgZnJlcXVlbmN5OiBmcmVxdWVuY3kgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFVwZGF0ZWRDYXRlZ29yaWVzID0gKGxpc3QsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGxldCBjYXRlZ29yaWVzID0gbGlzdC5jYXRlZ29yaWVzO1xyXG4gICAgICBpZiAoY2F0ZWdvcmllcy5zb21lKChsaXN0Q2F0ZWdvcnkpID0+IGxpc3RDYXRlZ29yeSA9PT0gY2F0ZWdvcnkpKSB7XHJcbiAgICAgICAgY2F0ZWdvcmllcyA9IGxpc3QuY2F0ZWdvcmllcy5maWx0ZXIoKGxpc3RDYXRlZ29yeSkgPT4gbGlzdENhdGVnb3J5ICE9PSBjYXRlZ29yeSk7XHJcbiAgICAgICAgaWYgKCFjYXRlZ29yeS5pbmNsdWRlcyhcIi5cIikgJiYgY2F0ZWdvcmllcy5zb21lKChsaXN0Q2F0ZWdvcnkpID0+IGxpc3RDYXRlZ29yeS5zdGFydHNXaXRoKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICAgIGNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmZpbHRlcigobGlzdENhdGVnb3J5KSA9PiAhbGlzdENhdGVnb3J5LnN0YXJ0c1dpdGgoY2F0ZWdvcnkpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgICBpZiAoY2F0ZWdvcnkuaW5jbHVkZXMoXCIuXCIpICYmICFjYXRlZ29yaWVzLmZpbmQoKGxpc3RDYXRlZ29yeSkgPT4gbGlzdENhdGVnb3J5ID09PSBjYXRlZ29yeS5zcGxpdChcIi5cIilbMF0pKSB7XHJcbiAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkuc3BsaXQoXCIuXCIpWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeSA9IChsaXN0LCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCB1cGRhdGVkQ2F0ZWdvcmllcyA9IGdldFVwZGF0ZWRDYXRlZ29yaWVzKGxpc3QsIGNhdGVnb3J5KTtcclxuICAgICAgaWYgKHVwZGF0ZWRDYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICRzY29wZS50b2FzdChgWW91IG11c3QgaGF2ZSBhdCBsZWFzdCAxIGNhdGVnb3J5IGZvciAke2xpc3QubmFtZX1gKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7IGNhdGVnb3JpZXM6IHVwZGF0ZWRDYXRlZ29yaWVzIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yaWVzID0gYXN5bmMgKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICRzY29wZS5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICBsZXQgbGlzdHNUb1VwZGF0ZSA9IFtdO1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMuZXZlcnkoKHsgY2F0ZWdvcmllcyB9KSA9PiBjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICBsaXN0c1RvVXBkYXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHM7XHJcbiAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMuc29tZSgoeyBjYXRlZ29yaWVzIH0pID0+IGNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSkge1xyXG4gICAgICAgIGxpc3RzVG9VcGRhdGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5maWx0ZXIoKHsgY2F0ZWdvcmllcyB9KSA9PiAhY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3RzVG9VcGRhdGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB1cGRhdGVkTGlzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICBsaXN0c1RvVXBkYXRlLm1hcCgobGlzdFRvVXBkYXRlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVkQ2F0ZWdvcmllcyA9IGdldFVwZGF0ZWRDYXRlZ29yaWVzKGxpc3RUb1VwZGF0ZSwgY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgaWYgKHVwZGF0ZWRDYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAkc2NvcGUudG9hc3QoYFlvdSBtdXN0IGhhdmUgYXQgbGVhc3QgMSBjYXRlZ29yeSBmb3IgJHtsaXN0VG9VcGRhdGUubmFtZX1gKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAgICAgX2lkOiBsaXN0VG9VcGRhdGUuX2lkLFxyXG4gICAgICAgICAgICAgIGNhdGVnb3JpZXM6IHVwZGF0ZWRDYXRlZ29yaWVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgKTtcclxuICAgICAgdXBkYXRlZExpc3RzLmZvckVhY2goKHVwZGF0ZWRMaXN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdEluZGV4ID0gJHNjb3BlLmxpc3RzLmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5faWQgPT09IHVwZGF0ZWRMaXN0Ll9pZCk7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzW2xpc3RJbmRleF0gPSB1cGRhdGVkTGlzdDtcclxuICAgICAgfSk7XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gJHNjb3BlLmxpc3RzLmZpbHRlcigoeyBfaWQgfSkgPT4gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhfaWQpKTtcclxuICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0dXMgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLmV2ZXJ5KCh7IGNhdGVnb3JpZXMgfSkgPT4gY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiY2hlY2tlZFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLnNvbWUoKHsgY2F0ZWdvcmllcyB9KSA9PiBjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICByZXR1cm4gXCJwYXJ0aWFsXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwidW5jaGVja2VkXCI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmhhc0R1cGxpY2F0ZSA9ICgpID0+XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgJiZcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgJiZcclxuICAgICAgXy5zb21lKFxyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgIChhbnN3ZXIpID0+IGFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCkgPT0gJHNjb3BlLm5ld0l0ZW0udmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpLFxyXG4gICAgICApO1xyXG5cclxuICAgICRzY29wZS5nZXRTZWxlY3RlZExpc3RzVGl0bGUgPSAoKSA9PiAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5tYXAoKGxpc3QpID0+IGxpc3QubmFtZSkuam9pbihcIiAvIFwiKTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Qmx1cmJzID0gKHR5cGUpID0+IHtcclxuICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Qmx1cmJzKCRzY29wZS5zZWxlY3RlZExpc3QsIHR5cGUpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUudG9hc3QoXCJCbHVyYnMgdXBkYXRlZFwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLnRvYXN0KFwiQmx1cmIgdXBkYXRlIGZhaWxlZFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldEVtYmVkVXJsID0gKHVybCkgPT4ge1xyXG4gICAgICBpZiAodXJsLmluY2x1ZGVzKFwieW91dHViZS5jb21cIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC9bPyZddj0oW14mXSspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHVybC5pbmNsdWRlcyhcInlvdXR1LmJlXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgveW91dHVcXC5iZVxcLyhbXiY/XSspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHVybC5pbmNsdWRlcyhcInZpbWVvLmNvbVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL3ZpbWVvXFwuY29tXFwvKFxcZCspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJvcGVuLnNwb3RpZnlcIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC90cmFja1xcLyhbXiY/XSspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2VtYmVkL3RyYWNrLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwodXJsKTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZXR1cm4gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH0/YXV0b3BsYXk9MWA7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCBnZXREYXRhKTtcclxuICB9KTtcclxuIiwiLypqc2xpbnQgZXN2ZXJzaW9uOiA2Ki9cclxuYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0FkbWluQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBUZW5UaGluZ3NTdmMsIFVzZXJTdmMpIHtcclxuICAgICRzY29wZS4kb24oXCJsb2dpblwiLCAoXykgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyQnkgPSAoZmllbGQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5vcmRlci5maWVsZCA9PT0gZmllbGQpIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIucmV2ZXJzZSA9ICEkc2NvcGUub3JkZXIucmV2ZXJzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRRdWV1ZSA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0UXVldWUoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5xdWV1ZSA9IHJlc3BvbnNlLmRhdGEucmVwbGFjZShcIi9uXCIsIFwiPGJyLz5cIik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmdldFF1ZXVlKCk7XHJcblxyXG4gICAgVGVuVGhpbmdzU3ZjLmdldFBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBnZXRVc2VycyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLmdldFVzZXJzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUudXNlcnMgPSByZXNwb25zZS5kYXRhLmZpbHRlcigodXNlcikgPT4gIXVzZXIuYWRtaW4pO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQmFuID0gKHVzZXIpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLnRvZ2dsZUJhbih1c2VyLl9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZVBhdXNlID0gKHVzZXIpID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLnRvZ2dsZVBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucGF1c2VkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUucGF1c2VkKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzR2FtZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlUGFyYW1zLCBUZW5UaGluZ3NTdmMsIFVzZXJTdmMpIHtcclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4pIHtcclxuICAgICAgICBjb25zdCB7IGRhdGE6IHVzZXJzIH0gPSBhd2FpdCBVc2VyU3ZjLmdldFVzZXJzKCk7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJzID0gdXNlcnMuZmlsdGVyKCh1c2VyKSA9PiAhdXNlci5hZG1pbik7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiBjYXRlZ29yaWVzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcclxuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLmdhbWUpIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5nZXRHYW1lKCRzdGF0ZVBhcmFtcy5nYW1lKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ2FtZSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5nYW1lKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnkgPSBhc3luYyAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhOiBkaXNhYmxlZENhdGVnb3JpZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy51cGRhdGVHYW1lQ2F0ZWdvcnkoJHN0YXRlUGFyYW1zLmdhbWUsIGNhdGVnb3J5KTtcclxuICAgICAgJHNjb3BlLmdhbWUuZGlzYWJsZWRDYXRlZ29yaWVzID0gZGlzYWJsZWRDYXRlZ29yaWVzO1xyXG4gICAgICBjb25zb2xlLmxvZyhkaXNhYmxlZENhdGVnb3JpZXMuZmluZCgoYykgPT4gYyA9PT0gY2F0ZWdvcnkpKTtcclxuICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgZ2V0RGF0YSk7XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NQbGF5Q3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBHYW1lU3ZjKSB7XHJcbiAgICAkc2NvcGUua2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgLy8gRW50ZXJcclxuICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgJHNjb3BlLmNoZWNrQW5zd2VyKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICB9XHJcbiAgICAgIC8vIHVzZSBlLmtleUNvZGVcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlcj8uYWRtaW4pIHtcclxuICAgICAgICBjb25zdCB7IGRhdGE6IGdhbWUgfSA9IGF3YWl0IEdhbWVTdmMuZ2V0VGVudGhpbmdzKCk7XHJcbiAgICAgICAgJHNjb3BlLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZVwiLCBnYW1lKTtcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoZWNrQW5zd2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBhbnN3ZXIgPSAkc2NvcGUuZ3Vlc3M7XHJcbiAgICAgICRzY29wZS5ndWVzcyA9IFwiXCI7XHJcbiAgICAgIGF3YWl0IEdhbWVTdmMuYW5zd2VyVGVudGhpbmdzKHVuZGVmaW5lZCwgYW5zd2VyKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldEhpbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IEdhbWVTdmMuZ2V0VGVudGhpbmdzSGludCgpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkKFwiI21haW4tZ2FtZVwiKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2tpcExpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IEdhbWVTdmMuc2tpcFRlbnRoaW5nc0xpc3QoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgJChcIiNtYWluLWdhbWVcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsIGdldERhdGEpO1xyXG5cclxuICAgICRzY29wZS4kb24oXCJ3czp0ZW50aGluZ3NfbWVzc2FnZVwiLCBmdW5jdGlvbiAoXywgZGF0YSkge1xyXG4gICAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBpZiAoZGF0YS5tZXNzYWdlKSAkc2NvcGUudG9hc3QoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NTdGF0c0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IFtdO1xyXG4gICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSB7IGxhYmVsczogW10sIGRhdGFzZXRzOiBbXSB9O1xyXG5cclxuICAgIGNvbnN0IGxpbmVDaGFydE9wdGlvbnMgPSB7XHJcbiAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgdGV4dDogXCJDaGFydC5qcyBMaW5lIENoYXJ0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY3VycmVudFVzZXIpIHJldHVybjtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBbXTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExhbmd1YWdlcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldFBsYXlTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeWVhcnMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgeWVhciB9KSA9PiB5ZWFyKSkuc29ydCgpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRocyA9IF8udGltZXMoMTIsIChpKSA9PiBpICsgMSk7XHJcbiAgICAgICAgJHNjb3BlLnBsYXlTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogbW9udGhzLFxyXG4gICAgICAgICAgc2VyaWVzOiB5ZWFycyxcclxuICAgICAgICAgIGRhdGE6IHllYXJzLm1hcCgoeWVhcikgPT5cclxuICAgICAgICAgICAgbW9udGhzLm1hcCgobW9udGgpID0+IGRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5tb250aCA9PT0gbW9udGggJiYgaXRlbS55ZWFyID09PSB5ZWFyKT8udW5pcXVlUGxheWVycyB8fCAwKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBvcHRpb25zOiBsaW5lQ2hhcnRPcHRpb25zLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQueWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBsYW5ndWFnZXMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSkpLnNvcnQoKTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogeWVhcnMsXHJcbiAgICAgICAgICBzZXJpZXM6IGxhbmd1YWdlcyxcclxuICAgICAgICAgIGRhdGE6IGxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlKSA9PlxyXG4gICAgICAgICAgICB5ZWFycy5tYXAoKHllYXIpID0+IGRhdGEuZmluZCgoeyBfaWQgfSkgPT4gX2lkLmxhbmd1YWdlID09PSBsYW5ndWFnZSAmJiBfaWQueWVhciA9PT0geWVhcik/LmNvdW50IHx8IDApLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIG9wdGlvbnM6IGxpbmVDaGFydE9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRHYW1lU3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQueWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBsYW5ndWFnZXMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSkpLnNvcnQoKTtcclxuICAgICAgICAkc2NvcGUuZ2FtZVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiB5ZWFycyxcclxuICAgICAgICAgIHNlcmllczogbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgZGF0YTogbGFuZ3VhZ2VzLm1hcCgobGFuZ3VhZ2UpID0+XHJcbiAgICAgICAgICAgIHllYXJzLm1hcCgoeWVhcikgPT4gZGF0YS5maW5kKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UgPT09IGxhbmd1YWdlICYmIF9pZC55ZWFyID09PSB5ZWFyKT8uY291bnQgfHwgMCksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgb3B0aW9uczogbGluZUNoYXJ0T3B0aW9ucyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IF8uc29ydEJ5KGRhdGEsICh7IGNvdW50IH0pID0+IC1jb3VudCk7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IHNvcnRlZERhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQpLFxyXG4gICAgICAgICAgZGF0YTogW3NvcnRlZERhdGEubWFwKCh7IGNvdW50IH0pID0+IGNvdW50KV0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCAoKSA9PiB7XHJcbiAgICAgIGdldERhdGEoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1dvcmtvdXRDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgJHNjb3BlLnRpbWVFeGVyY2lzaW5nID0gMzA7XHJcbiAgJHNjb3BlLnRpbWVSZXN0aW5nID0gMTA7XHJcbiAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuXHJcbiAgdmFyIHNvdW5kcyA9IHtcclxuICAgIG9uOiBuZXcgQXVkaW8oJ29uLndhdicpLFxyXG4gICAgb2ZmOiBuZXcgQXVkaW8oJ29mZi53YXYnKSxcclxuICAgIHN3aXRjaDogbmV3IEF1ZGlvKCdzd2l0Y2gud2F2JyksXHJcbiAgfTtcclxuXHJcblxyXG4gIHZhciBleGVyY2lzZXMgPSBbXHJcbiAgICB7bmFtZTogJ0p1bXBpbmcgSmFja3MnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdXYWxsIFNpdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1B1c2gtVXAnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdDcnVuY2gnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTdGVwLVVwJywgc3BsaXQ6IHRydWV9LFxyXG4gICAge25hbWU6ICdTcXVhdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1RyaWNlcHMgRGlwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUGxhbmsnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdIaWdoIEtuZWVzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnTHVuZ2UnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwIHdpdGggUm90YXRpb24nLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTaWRlIFBsYW5rJywgc3BsaXQ6IHRydWV9XHJcbiAgXTtcclxuXHJcbiAgdmFyIGV4ZXJjaXNpbmc7XHJcblxyXG4gICRzY29wZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChleGVyY2lzZXMubGVuZ3RoIC0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvICgkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3RpbmcpKSkgKyAnLycgKyBleGVyY2lzZXMubGVuZ3RoO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS53b3Jrb3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZXhjZXJjaXNlVGltZSA9ICRzY29wZS50aW1lRXhlcmNpc2luZyArICRzY29wZS50aW1lUmVzdGluZztcclxuICAgIGlmICghJHNjb3BlLnRpbWVSZW1haW5pbmcpIHtcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSBleGVyY2lzZXMubGVuZ3RoICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgZXhlcmNpc2luZyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS50aW1lUmVtYWluaW5nLS07XHJcbiAgICAgICAgaWYgKCRzY29wZS50aW1lUmVtYWluaW5nID09PSAwKSB7XHJcbiAgICAgICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJ0ZpbmlzaGVkISBDb25ncmF0cyEnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdXJyZW50RXhlcmNpc2UgPSBNYXRoLmZsb29yKCRzY29wZS50aW1lUmVtYWluaW5nIC8gZXhjZXJjaXNlVGltZSk7XHJcbiAgICAgICAgdmFyIHRpbWVyID0gJHNjb3BlLnRpbWVSZW1haW5pbmcgLSBjdXJyZW50RXhlcmNpc2UgKiBleGNlcmNpc2VUaW1lO1xyXG4gICAgICAgICRzY29wZS50aW1lciA9IHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nID8gdGltZXIgLSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgOiB0aW1lcjtcclxuICAgICAgICBpZiAodGltZXIgPiAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0gZXhlcmNpc2VzW2V4ZXJjaXNlcy5sZW5ndGggLSBjdXJyZW50RXhlcmNpc2UgLSAxXTtcclxuICAgICAgICBpZiAodGltZXIgPT09ICRzY29wZS50aW1lRXhlcmNpc2luZykge1xyXG4gICAgICAgICAgc291bmRzLm9uLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRpbWVyID09PSAwKSB7XHJcbiAgICAgICAgICBzb3VuZHMub2ZmLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRzY29wZS5leGVyY2lzZS5zcGxpdCAmJiB0aW1lciA9PT0gTWF0aC5mbG9vcigkc2NvcGUudGltZUV4ZXJjaXNpbmcgLyAyKSkge1xyXG4gICAgICAgICAgc291bmRzLnN3aXRjaC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAkc2NvcGUudGltZXIgPSAnJztcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJycsIHNwbGl0OiBmYWxzZX07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5kaXJlY3RpdmUoXCJjbGlja091dHNpZGVcIiwgZnVuY3Rpb24gKCRkb2N1bWVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICByZXN0cmljdDogXCJBXCIsXHJcbiAgICBzY29wZToge1xyXG4gICAgICBjbGlja091dHNpZGU6IFwiJlwiLFxyXG4gICAgfSxcclxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgJGRvY3VtZW50Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZWwgIT09IGUudGFyZ2V0ICYmICFlbFswXS5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vc2NvcGUuJHBhcmVudC5zZXRTZWxlY3RlZExpc3QoKTtcclxuICAgICAgICAgICAgc2NvcGUuJGV2YWwoc2NvcGUuY2xpY2tPdXRzaWRlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuXHQuZGlyZWN0aXZlKCdoZWFkJywgW1xyXG5cdFx0JyRyb290U2NvcGUnLFxyXG5cdFx0JyRzdGF0ZScsXHJcblx0XHQnJGNvbXBpbGUnLFxyXG5cdFx0JyRpbnRlcnBvbGF0ZScsXHJcblx0XHRmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkY29tcGlsZSwgJGludGVycG9sYXRlKSB7XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGUgPSBmdW5jdGlvbiBnZXRTdHlsZSh0ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdHlsZSA9IHtcclxuXHRcdFx0XHRcdGhyZWY6IHRlbXBsYXRlU3R5bGVVcmwsXHJcblx0XHRcdFx0XHRyZWw6ICdzdHlsZXNoZWV0J1xyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmIChzdHlsZS5ocmVmLm1hdGNoKC9cXC5sZXNzJC8pKSB7XHJcblx0XHRcdFx0XHRzdHlsZS5yZWwgPSAnc3R5bGVzaGVldC9sZXNzJztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBzdHlsZTtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gZ2V0U3R5bGVzKHN0YXRlKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdGF0ZXMgPSB7fTtcclxuXHJcblx0XHRcdFx0Ly9DaGVjayBzdGF0ZSBmb3Igc3R5bGVzXHJcblx0XHRcdFx0d2hpbGUgKHN0YXRlLm5hbWUgIT09ICcnKSB7XHJcblx0XHRcdFx0XHR2YXIgcGFyZW50ID0gJHN0YXRlLmdldCgnXicsIHN0YXRlKTtcclxuXHJcblx0XHRcdFx0XHQvL0luaXRpYXRlIG91ciB2aWV3IGxpc3RcclxuXHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXSkge1xyXG5cdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdID0ge307XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB0aGUgdGVtcGxhdGVTdHlsZVxyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSkge1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1bJyddID0gZ2V0U3R5bGUoc3RhdGUudGVtcGxhdGVTdHlsZVVybCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NoZWNrIHZpZXdzXHJcblx0XHRcdFx0XHRpZiAoc3RhdGUudmlld3MpIHtcclxuXHRcdFx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlLnZpZXdzLCBmdW5jdGlvbiAodmlldywga2V5KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgaGF2ZSBhIHN0eWxlXHJcblx0XHRcdFx0XHRcdFx0aWYgKCF2aWV3LnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgYXJlIHRhcmdldGluZyBzb21lIHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdGlmICgoa2V5ID0ga2V5LnNwbGl0KCdAJykpWzFdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgc3R5bGVzIGZvciB0aGF0IHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXSA9IHt9O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIHNvbWUgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXVtrZXlbMF1dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlc1trZXlbMV1dW2tleVswXV0gPSBnZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIG91ciBwYXJlbnQncyB2aWV3XHJcblx0XHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ29udGludWUgd2l0aCB0aGUgcGFyZW50XHJcblx0XHRcdFx0XHRzdGF0ZSA9IHBhcmVudDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vRmxhdHRlbiB0aGUgbGlzdFxyXG5cdFx0XHRcdHZhciBmbGF0ID0gW107XHJcblx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlcywgZnVuY3Rpb24gKHZpZXdzKSB7XHJcblxyXG5cdFx0XHRcdFx0Xy5mb3JFYWNoKHZpZXdzLCBmdW5jdGlvbiAoc3R5bGUpIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghXy5pbmNsdWRlcyhmbGF0LCBzdHlsZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRmbGF0LnB1c2goc3R5bGUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvL1JldmVyc2UgaXQgc28gd2UgaGF2ZSBhIHByb3BlciBoaWVyYXJjaHlcclxuXHRcdFx0XHRmbGF0LnJldmVyc2UoKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGZsYXQ7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0XHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSkge1xyXG5cclxuXHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gW107XHJcblxyXG5cdFx0XHRcdFx0dmFyIGh0bWwgPSAnPGxpbmsgbmctYXR0ci1yZWw9XCJ7e3N0eWxlLnJlbH19XCIgbmctcmVwZWF0PVwic3R5bGUgaW4gdGVtcGxhdGVTdHlsZXNcIiBuZy1ocmVmPVwie3tzdHlsZS5ocmVmfX1cIj4nO1xyXG5cclxuXHRcdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xce1xcey9nLCAkaW50ZXJwb2xhdGUuc3RhcnRTeW1ib2woKSk7XHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXH1cXH0vZywgJGludGVycG9sYXRlLmVuZFN5bWJvbCgpKTtcclxuXHJcblx0XHRcdFx0XHRlbGVtLmFwcGVuZCgkY29tcGlsZShodG1sKShzY29wZSkpO1xyXG5cclxuXHRcdFx0XHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykge1xyXG5cclxuXHRcdFx0XHRcdFx0c2NvcGUudGVtcGxhdGVTdHlsZXMgPSBnZXRTdHlsZXModG9TdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHR9XHJcblx0XSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnQ2F0ZWdvcmllc1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0Q2F0ZWdvcmllcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcycpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRUYXNrcyA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9jYXRlZ29yaWVzLycgKyBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZENhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9jYXRlZ29yaWVzLycsIGNhdGVnb3J5KTtcclxuICB9O1xyXG5cclxuICBzdmMuYWRkVGFzayA9IGZ1bmN0aW9uIChjYXRlZ29yeSwgdGFzaykge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkgKyAnL3Rhc2tzJywgdGFzayk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHN2Yy5jaG9pY2VzID0gbGlzdDtcclxuICAgIHN2Yy5wcmlvcml0eUxpc3QgPSBbXTtcclxuICAgIC8vTWFrZSBhIG5ldyBjaG9pY2UgbGlzdFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IGxpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICBzdmMucHJpb3JpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICBmaXJzdENob2ljZTogbGlzdFtyYW5kb20gPT09IDAgPyBpIDogal0ubmFtZSxcclxuICAgICAgICAgIHNlY29uZENob2ljZTogbGlzdFtyYW5kb20gPT09IDAgPyBqIDogaV0ubmFtZSxcclxuICAgICAgICAgIGNob2ljZTogJydcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2h1ZmZsZShzdmMucHJpb3JpdHlMaXN0KTtcclxuICAgIGZvciAoaSBpbiBzdmMucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHN2Yy5wcmlvcml0eUxpc3RbaV0uaWQgPSBpICsgMTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UHJpb3JpdHlMaXN0ID0gZnVuY3Rpb24obGlzdCkge1xyXG4gICAgcmV0dXJuIHN2Yy5wcmlvcml0eUxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xyXG4gICAgdmFyIG0gPSBhcnJheS5sZW5ndGgsIHQsIGk7XHJcbiAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZeKAplxyXG4gICAgd2hpbGUgKG0pIHtcclxuICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW504oCmXHJcbiAgICAgIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtLS0pO1xyXG4gICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcbiAgICAgIC8vYXJyYXlbbV0uZmlyc3RDaG9pY2U7XHJcbiAgICAgIHQgPSBhcnJheVttXTtcclxuICAgICAgYXJyYXlbbV0gPSBhcnJheVtpXTtcclxuICAgICAgYXJyYXlbaV0gPSB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0VtYWlsU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5zZW5kID0gZnVuY3Rpb24gKGVtYWlsKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9lbWFpbCcsIGVtYWlsKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJGaWxlU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0UXVpekZpbGVzID0gZnVuY3Rpb24gKHF1aXopIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3F1aXp6ZXMvXCIgKyBxdWl6KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIkdhbWVTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRUZW50aGluZ3MgPSBmdW5jdGlvbiAoaWQgPSAxKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvd2ViL1wiICsgaWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hbnN3ZXJUZW50aGluZ3MgPSBmdW5jdGlvbiAoaWQgPSAxLCBhbnN3ZXIpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3Mvd2ViL1wiICsgaWQgKyBcIi9hbnN3ZXJcIiwgeyBhbnN3ZXIgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFRlbnRoaW5nc0hpbnQgPSBmdW5jdGlvbiAoaWQgPSAxKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL3dlYi9cIiArIGlkICsgXCIvaGludFwiKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2tpcFRlbnRoaW5nc0xpc3QgPSBmdW5jdGlvbiAoaWQgPSAxKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL3dlYi9cIiArIGlkICsgXCIvc2tpcFwiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0SGlnaHNjb3JlID0gZnVuY3Rpb24gKGdhbWUsIHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL2dhbWVzL1wiICsgZ2FtZSArIFwiL1wiICsgdXNlciArIFwiL2hpZ2hzY29yZVwiKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2V0SGlnaHNjb3JlID0gZnVuY3Rpb24gKGdhbWUsIHVzZXIsIHNjb3JlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvZ2FtZXMvXCIgKyBnYW1lICsgXCIvXCIgKyB1c2VyICsgXCIvaGlnaHNjb3JlXCIsIHtcclxuICAgICAgc2NvcmU6IHNjb3JlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmZ1enp5TWF0Y2ggPSBmdW5jdGlvbiAodmFsdWVzLCBndWVzcykge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL2dhbWVzL2Z1enp5X21hdGNoXCIsIHtcclxuICAgICAgdmFsdWVzLFxyXG4gICAgICBndWVzcyxcclxuICAgIH0pO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0xhbmd1YWdlU3ZjJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMubGFuZ3VhZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJFbmdsaXNoXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1nYlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJOZWRlcmxhbmRzXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1ubFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJGcmFuw6dhaXNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWZyXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBzdmMudGV4dCA9IFtcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRU5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiTkxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRlJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gc3ZjLmxhbmd1YWdlc1swXTtcclxuXHJcbiAgc3ZjLnNldExhbmd1YWdlID0gZnVuY3Rpb24gKGxhbmd1YWdlKSB7XHJcbiAgICBzdmMuc2VsZWN0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBzdmMuc2VsZWN0ZWRMYW5ndWFnZTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnUG9zdHNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmZldGNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cycpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGUgPSBmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCBwb3N0KTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UG9zdCA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzLycgKyBwb3N0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiVGVuVGhpbmdzU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0UXVldWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYm90cy90ZW50aGluZ3MvcXVldWVgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdHMgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7XHJcbiAgICB2YXIgdXJsID1cclxuICAgICAgYC9hcGkvdGVudGhpbmdzL2xpc3RzP2AgK1xyXG4gICAgICAob3B0aW9ucy5saW1pdCA/IGAmbGltaXQ9JHtvcHRpb25zLmxpbWl0fWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnBhZ2UgPyBgJnBhZ2U9JHtvcHRpb25zLnBhZ2V9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuc29ydEJ5ID8gYCZzb3J0X2J5PSR7b3B0aW9ucy5zb3J0Qnl9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMub3JkZXJCeSA/IGAmb3JkZXJfYnk9JHtvcHRpb25zLm9yZGVyQnl9YCA6IFwiXCIpICtcclxuICAgICAgLy8gYCZjcmVhdG9yPTVhZTE1ZjE0YjVmNzg4M2ZmMDQ5NzMzOWAgK1xyXG4gICAgICAob3B0aW9ucy5sYW5ndWFnZSAmJiBvcHRpb25zLmxhbmd1YWdlLmxlbmd0aCA+IDAgPyBgJmxhbmd1YWdlPSR7b3B0aW9ucy5sYW5ndWFnZS5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5jYXRlZ29yaWVzICYmIG9wdGlvbnMuY2F0ZWdvcmllcy5sZW5ndGggPiAwID8gYCZjYXRlZ29yaWVzPSR7b3B0aW9ucy5jYXRlZ29yaWVzLmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLmxhbmd1YWdlTm90ICYmIG9wdGlvbnMubGFuZ3VhZ2VOb3QubGVuZ3RoID4gMCA/IGAmIWxhbmd1YWdlPSR7b3B0aW9ucy5sYW5ndWFnZU5vdC5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5jYXRlZ29yaWVzTm90ICYmIG9wdGlvbnMuY2F0ZWdvcmllc05vdC5sZW5ndGggPiAwXHJcbiAgICAgICAgPyBgJiFjYXRlZ29yaWVzPSR7b3B0aW9ucy5jYXRlZ29yaWVzTm90LmpvaW4oXCIsXCIpfWBcclxuICAgICAgICA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuc2VhcmNoID8gYCZzZWFyY2g9JHtvcHRpb25zLnNlYXJjaH1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5uYW1lID8gYCZuYW1lPSR7b3B0aW9ucy5uYW1lfWAgOiBcIlwiKTtcclxuXHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFJhbmRvbUxpc3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvbGlzdHMvcmFuZG9tYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNlYXJjaExpc3RzID0gKG5hbWUpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL3NlYXJjaC9saXN0LW5hbWVzLyR7bmFtZX1gKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2NhdGVnb3JpZXNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGFuZ3VhZ2VzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvbGFuZ3VhZ2VzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wdXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkLCBsaXN0KTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlTGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzXCIsIHsgdXNlciwgbGlzdCB9KTtcclxuICB9O1xyXG5cclxuICBzdmMubWVyZ2VMaXN0cyA9IGZ1bmN0aW9uIChsaXN0cykge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9tZXJnZVwiLCB7IGxpc3RzOiBsaXN0cyB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuZGVsZXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0SWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3RJZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnB1dChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXMvXCIgKyB2YWx1ZS5faWQsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXNcIiwgdmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5kZWxldGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzL1wiICsgdmFsdWUuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMucmVwb3J0TGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvcmVwb3J0L1wiICsgdXNlci5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9jYXRlZ29yaWVzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0TGFuZ3VhZ2VTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9sYW5ndWFnZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBsYXlTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9wbGF5XCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRHYW1lU3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvZ2FtZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEJsdXJicyA9IGZ1bmN0aW9uIChsaXN0LCB0eXBlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvbGlzdHMvJHtsaXN0Ll9pZH0vYmx1cmJzLyR7dHlwZX1gKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRHYW1lID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9nYW1lcy8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVHYW1lQ2F0ZWdvcnkgPSBmdW5jdGlvbiAoaWQsIGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvZ2FtZXMvJHtpZH0vY2F0ZWdvcnkvJHtjYXRlZ29yeX1gKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlVzZXJTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFVzZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnMvYWxsXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVCYW4gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3VzZXJzL2Jhbi8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSB0b2tlbjtcclxuICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hdXRoZW50aWNhdGVcIiwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dpbiA9IGZ1bmN0aW9uICh1c2VyKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi9sb2dpblwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyLl9pZCwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgcGFzc3dvcmQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi92ZXJpZmljYXRpb25cIiwge1xyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuY2hhbmdlUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlciwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyICsgXCIvcGFzc3dvcmRcIiwge1xyXG4gICAgICBvbGRQYXNzd29yZDogb2xkUGFzc3dvcmQsXHJcbiAgICAgIG5ld1Bhc3N3b3JkOiBuZXdQYXNzd29yZCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jaGFuZ2VVc2VybmFtZSA9IGZ1bmN0aW9uICh1c2VyLCBuZXdVc2VybmFtZSkge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9cIiArIHVzZXIgKyBcIi91c2VybmFtZVwiLCB7XHJcbiAgICAgICAgbmV3VXNlcm5hbWU6IG5ld1VzZXJuYW1lLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlF1aXpBbmltYWxzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgJHNjb3BlLmFuaW1hbHMgPSBbXTtcclxuXHJcbiAgRmlsZVN2Yy5nZXRRdWl6RmlsZXMoXCJhbmltYWxzXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShcclxuICAgICAgcmVzcG9uc2UuZGF0YS5tYXAoKGFuaW1hbCkgPT4gKHtcclxuICAgICAgICBzb3VuZDogYW5pbWFsLFxyXG4gICAgICAgIG5hbWU6IGFuaW1hbC5zdWJzdHJpbmcoMCwgYW5pbWFsLmluZGV4T2YoXCIuXCIpKS5yZXBsYWNlKFwiX1wiLCBcIiBcIikuY2FwaXRhbGl6ZSgpLFxyXG4gICAgICB9KSksXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgIGFuaW1hbC5hbnN3ZXJzID0gXy5zaHVmZmxlKFthbmltYWwubmFtZSwgLi4uZ2V0UmFuZG9tQW5pbWFscyhhbmltYWwubmFtZSldKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgIGFuaW1hbC5ndWVzcyA9IGd1ZXNzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSAobmFtZSkgPT5cclxuICAgIF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gbmFtZSAhPT0gYW5pbWFsLm5hbWUpLm1hcCgoYW5pbWFsKSA9PiBhbmltYWwubmFtZSkpLnNsaWNlKDAsIDUpO1xyXG5cclxuICAkc2NvcGUuZ2V0U2NvcmUgPSAoKSA9PlxyXG4gICAgYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IGFuaW1hbC5uYW1lID09PSBhbmltYWwuZ3Vlc3MpLmxlbmd0aH0vJHskc2NvcGUuYW5pbWFscy5sZW5ndGh9YDtcclxuXHJcbiAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IGFuaW1hbC5ndWVzcykubGVuZ3RoID09PSAkc2NvcGUuYW5pbWFscy5sZW5ndGg7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUXVpekdvb2dsZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0UXVpekZpbGVzKFwiZ29vZ2xlXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJRdWl6TG9nb3NDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldFF1aXpGaWxlcyhcImxvZ29zXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJRdWl6TW92aWVzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRRdWl6RmlsZXMoXCJtb3ZpZXNcIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlF1aXpTa2VsZXRvbnNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICAkc2NvcGUuYW5pbWFscyA9IFtdO1xyXG5cclxuICBGaWxlU3ZjLmdldFF1aXpGaWxlcyhcInNrZWxldG9uc1wiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmFuaW1hbHMgPSBfLnNodWZmbGUoXHJcbiAgICAgIHJlc3BvbnNlLmRhdGEubWFwKChhbmltYWwpID0+ICh7XHJcbiAgICAgICAgaW1hZ2U6IGFuaW1hbCxcclxuICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKFwiLlwiKSkucmVwbGFjZShcIl9cIiwgXCIgXCIpLmNhcGl0YWxpemUoKSxcclxuICAgICAgfSkpLFxyXG4gICAgKTtcclxuICAgIGZvciAobGV0IGFuaW1hbCBvZiAkc2NvcGUuYW5pbWFscykge1xyXG4gICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5ndWVzcyA9IChhbmltYWwsIGd1ZXNzKSA9PiB7XHJcbiAgICBhbmltYWwuZ3Vlc3MgPSBndWVzcztcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRSYW5kb21BbmltYWxzID0gKG5hbWUpID0+XHJcbiAgICBfLnNodWZmbGUoJHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoKGFuaW1hbCkgPT4gYW5pbWFsLm5hbWUpKS5zbGljZSgwLCAxMCk7XHJcblxyXG4gICRzY29wZS5nZXRTY29yZSA9ICgpID0+XHJcbiAgICBgJHskc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAkc2NvcGUuaXNTY29yZVZpc2libGUgPSAoKSA9PiAkc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxufSk7XHJcbiJdfQ==
