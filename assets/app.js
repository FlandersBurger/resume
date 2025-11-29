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
}), angular.module("app").controller("TenThingsCtrl", function ($scope, $sce, $location, TenThingsSvc, TelegramSvc) {
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
    TelegramSvc.linkAccount($scope.currentUser._id, data).then(() => {
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
    }), $scope.search = $location.search().search || "", $scope.getLists(), TelegramSvc.getGames($scope.currentUser._id).then(({
      data
    }) => {
      $scope.telegramGames = data, console.log(data);
    }, () => {
      $scope.telegramGames = [];
    });
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
}), angular.module("app").service("TelegramSvc", function ($http, UserSvc) {
  this.getGames = function (userId) {
    return $http.get(`/api/telegram/${userId}/games`);
  }, this.linkAccount = function (userId, telegramData) {
    return $http.post(`/api/telegram/${userId}/link`, telegramData).then(function () {
      return UserSvc.getUser();
    });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZXMuanMiLCJtb2R1bGUuanMiLCJyb3V0ZXMuanMiLCJ3ZWJzb2NrZXRzLmpzIiwiY29udHJvbGxlcnMvYXBwLmN0cmwuanMiLCJjb250cm9sbGVycy9hc3Rlcm9pZHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2J1YmJsZXMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2NoYXJhZGVzLmN0cmwuanMiLCJjb250cm9sbGVycy9jb250YWN0LmN0cmwuanMiLCJjb250cm9sbGVycy9leHBlcmllbmNlLmN0cmwuanMiLCJjb250cm9sbGVycy9ob2JiaWVzLmN0cmwuanMiLCJjb250cm9sbGVycy9sZW1taW5ncy5jdHJsLmpzIiwiY29udHJvbGxlcnMvbGlzdHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL2xvZ2luLmN0cmwuanMiLCJjb250cm9sbGVycy9wb3N0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcHJvZmlsZS5jdHJsLmpzIiwiY29udHJvbGxlcnMvc2tpbGxzLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3MuY3RybC5qcyIsImNvbnRyb2xsZXJzL3RlbnRoaW5nc2FkbWluLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NnYW1lLmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NwbGF5LmN0cmwuanMiLCJjb250cm9sbGVycy90ZW50aGluZ3NzdGF0cy5jdHJsLmpzIiwiY29udHJvbGxlcnMvd29ya291dC5jdHJsLmpzIiwiZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpci5qcyIsImRpcmVjdGl2ZXMvdWktcm91dGVyLXN0eWxlcy5kaXIuanMiLCJzZXJ2aWNlcy9jYXRlZ29yaWVzLnN2Yy5qcyIsInNlcnZpY2VzL2VtYWlsLnN2Yy5qcyIsInNlcnZpY2VzL2ZpbGUuc3ZjLmpzIiwic2VydmljZXMvZ2FtZS5zdmMuanMiLCJzZXJ2aWNlcy9sYW5ndWFnZS5zdmMuanMiLCJzZXJ2aWNlcy9wb3N0cy5zdmMuanMiLCJzZXJ2aWNlcy90ZWxlZ3JhbS5zdmMuanMiLCJzZXJ2aWNlcy90ZW50aGluZ3Muc3ZjLmpzIiwic2VydmljZXMvdXNlci5zdmMuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2FuaW1hbHMuY3RybC5qcyIsImNvbnRyb2xsZXJzL3F1aXp6ZXMvZ29vZ2xlLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL2xvZ29zLmN0cmwuanMiLCJjb250cm9sbGVycy9xdWl6emVzL21vdmllcy5jdHJsLmpzIiwiY29udHJvbGxlcnMvcXVpenplcy9za2VsZXRvbnMuY3RybC5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RGlhY3JpdGljc1JlbW92YWxNYXAiLCJiYXNlIiwibGV0dGVycyIsImRvbWFpbnMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIlN0cmluZyIsInByb3RvdHlwZSIsInZhbHVlIiwicmVkdWNlIiwicmVzdWx0IiwibGV0dGVyIiwicmVwbGFjZSIsInRoaXMiLCJTUEVDSUFMX0NIQVJBQ1RFUlMiLCJWT1dFTFMiLCJSZWdFeHAiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZURpYWNyaXRpY3MiLCJyZW1vdmVTcGVjaWFsQ2hhcmFjdGVycyIsImV4dHJhIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiY29uY2VhbCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJyZXBsYWNlQWxsIiwiZmluZCIsInJlcGxhY2VTdHJpbmciLCJpIiwicmVwbGFjZUFycmF5IiwiTnVtYmVyIiwidG9TdHJpbmciLCJkZWNpbWFscyIsInVuZGVmaW5lZCIsInRvRml4ZWQiLCJzb3J0T2JqZWN0Iiwib2JqIiwiZGlyZWN0aW9uIiwiYXJyIiwia2V5IiwicHVzaCIsInNvcnQiLCJhIiwiYiIsIm9ialNvcnRlZCIsImZvckVhY2giLCJpdGVtIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbmZpZyIsIiRzdGF0ZVByb3ZpZGVyIiwiJHVybFJvdXRlclByb3ZpZGVyIiwiJHVybFNlcnZpY2VQcm92aWRlciIsIiRsb2NhdGlvblByb3ZpZGVyIiwib3RoZXJ3aXNlIiwic3RyaWN0TW9kZSIsInN0YXRlIiwidXJsIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIiwiaHRtbDVNb2RlIiwiZW5hYmxlZCIsInJlcXVpcmVCYXNlIiwic2VydmljZSIsIiRyb290U2NvcGUiLCIkdGltZW91dCIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiV2ViU29ja2V0Iiwid2luZG93IiwibG9jYXRpb24iLCJwcm90b2NvbCIsImhvc3QiLCJvbm9wZW4iLCJjb25zb2xlIiwibG9nIiwib25jbG9zZSIsImUiLCJvbmVycm9yIiwicmVhZHlTdGF0ZSIsIm9ubWVzc2FnZSIsInBheWxvYWQiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwiJGJyb2FkY2FzdCIsInRvcGljIiwic2VuZCIsImpzb24iLCJzdHJpbmdpZnkiLCJydW4iLCJXZWJTb2NrZXRTdmMiLCIkc2NvcGUiLCJMYW5ndWFnZVN2YyIsIlVzZXJTdmMiLCIkbWRUb2FzdCIsInRvYXN0IiwibWVzc2FnZSIsInNob3ciLCJzaW1wbGUiLCJwYXJlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0ZXh0Q29udGVudCIsInBvc2l0aW9uIiwiaGlkZURlbGF5IiwiJCIsImxvYWQiLCJmYWRlT3V0IiwiZmFkZUluIiwib24iLCJjbG9zZXN0IiwidG9nZ2xlQ2xhc3MiLCJjaGVja2VkIiwic3RvcFByb3BhZ2F0aW9uIiwidGhlbWVDb3VudGVyIiwidG9kYXkiLCJEYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwiZmxpcFRoZW1lIiwiaGlkZSIsInNldFRpbWVvdXQiLCJnZXRKU09OIiwic2tpbGxzIiwiZmlsdGVyIiwic2tpbGwiLCJob2JiaWVzIiwiam9icyIsImpvYiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJjaGFyYWRlcyIsImdldFRpbWVTcGFuIiwibGFuZ3VhZ2VzIiwic2VsZWN0ZWRMYW5ndWFnZSIsImdldExhbmd1YWdlIiwic2VsZWN0TGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwiaG92ZXJkaXYiLCJkaXZpZCIsImxlZnQiLCJjbGllbnRYIiwidG9wIiwiY2xpZW50WSIsImdldEVsZW1lbnRCeUlkIiwiY3NzIiwidG9nZ2xlIiwibG9jYWxTdG9yYWdlIiwidXNlciIsImxvZ2luIiwidGhlbiIsInJlc3BvbnNlIiwiJG9uIiwiXyIsImxvZ2dlZEluIiwiX2lkIiwiY3VycmVudFVzZXIiLCJiaXJ0aERhdGUiLCJsb2FkaW5nIiwibG9nb3V0IiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbk91dCIsImNsZWFyIiwiY2F0Y2giLCJlcnJvciIsImZvcm1hdERhdGUiLCJkYXRlIiwiZ2V0RGF0ZSIsImdldE1vbnRoIiwiJGxvY2F0aW9uIiwiR2FtZVN2YyIsImFubm91bmNlIiwiY2FudmFzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXRoIiwiYWxlcnQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZm9udCIsImZpbGxTdHlsZSIsInRleHRBbGlnbiIsInNob3RzIiwiYXN0ZXJvaWRzIiwicG93ZXJ1cHMiLCJleHBsb3Npb25zIiwibWFwIiwic3BhY2VwaWNzIiwic3BhY2UiLCJwb3dlcnVwVHlwZXMiLCJuYW1lIiwiYW5ub3VuY2VtZW50IiwiY3ljbGUiLCJyb3dzIiwiY29sdW1ucyIsInNpemUiLCJpbWciLCJJbWFnZSIsImFjdGl2YXRlIiwic3BhY2VzaGlwIiwibWF4U3BlZWQiLCJjb29sZG93biIsImNvb2xkb3duVGltZSIsInJhbmdlIiwic2hpZWxkIiwiZXhwbG9kZSIsInNwYXduQXN0ZXJvaWRzIiwicG93ZXJ1cCIsImFycmF5Iiwic3JjIiwiZXhwbG9zaW9uSW1hZ2UiLCJldmFsdWF0ZUtleXMiLCJwbGF5aW5nIiwic2hvb3QiLCJyb3RhdGlvbiIsInNwZWVkIiwic2NvcmUiLCIkYXBwbHkiLCJTcGFjZXNoaXAiLCJhdXRvU3Bhd24iLCJ3aWR0aCIsImhlaWdodCIsImNhbm5vbiIsIngiLCJ5IiwiYW5nbGUiLCJpZCIsInJvdW5kIiwiU2hvdCIsIm1vdmUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwic3Ryb2tlIiwiZmlsbCIsImFzdGVyb2lkIiwiaGl0IiwiZ2FtZU92ZXIiLCJjb3MiLCJzaW4iLCJsaWZlc3BhbiIsIkFzdGVyb2lkIiwiZ2V0RW50cnlQb3NpdGlvbiIsInJvdGF0aW9uU3BlZWQiLCJFeHBsb3Npb24iLCJzaG90IiwicG9pbnRzIiwic3Bhd25Qb3dlcnVwIiwib2JqZWN0IiwiUG93ZXJ1cCIsImRlbGF5Iiwic2F2ZSIsInRyYW5zbGF0ZSIsInJvdGF0ZSIsImNvbHVtbiIsInJvdyIsImRyYXdJbWFnZSIsInJlc3RvcmUiLCJncmlkWCIsImdyaWRZIiwib2JqZWN0MSIsIm9iamVjdDIiLCJrZXlzIiwiYW1vdW50IiwiaGlnaHNjb3JlIiwic2V0SGlnaHNjb3JlIiwicmVzaXplQ2FudmFzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleUNvZGUiLCJ3aGljaCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXciLCJjbGVhclJlY3QiLCJncmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwidGFsbHkiLCJmaWxsVGV4dCIsIm1lYXN1cmVUZXh0IiwiYmFja2dyb3VuZEltYWdlIiwiYnViYmxlcyIsImNvbG9ycyIsIkJ1YmJsZSIsInJhZGl1cyIsImV4cGFuZGluZyIsImNpcmN1bWZlcmVuY2UiLCJtYXhSYWRpdXMiLCJ2eCIsInZ5IiwiZmlsdGVyQnViYmxlcyIsImJ1YmJsZSIsInNlbGVjdFdvcmQiLCJjYXRlZ29yeSIsIndvcmQiLCJFbWFpbFN2YyIsIm9wdGlvbnMiLCJ0ZXh0IiwiY29udGFjdCIsImVtYWlsIiwicGhvbmUiLCJhYm91dCIsInNlbmRpbmciLCJzZW50Iiwic3RhdHVzIiwiZXJyIiwiZ2V0U2tpbGwiLCJza2lsbENvZGUiLCJjb2RlIiwiJHdpbmRvdyIsImhvYmJ5U2VsZWN0b3JWaXNpYmxlIiwic2VsZWN0ZWRIb2JieSIsInNlbGVjdEhvYmJ5IiwiaG9iYnkiLCJzaG93SG9iYnkiLCJpbmRleCIsImltYWdlcyIsIkxFRlQiLCJSSUdIVCIsImxlbW1pbmdzSW1hZ2UiLCJkZWNvckltYWdlIiwibGVtbWluZ3MiLCJzdGFydGVkIiwiYWN0aW9ucyIsIndhbGsiLCJzdGFydCIsImVuZCIsInJldmVyc2UiLCJodWgiLCJmYWxsIiwiZmx5Iiwic3RvcCIsImNsaW1iIiwiYnVpbGQiLCJwdW5jaCIsImRpZyIsIkxlbW1pbmciLCJpbml0IiwiYWN0IiwiYWN0aW9uIiwiYW5pbWF0aW9uIiwic2NhbGUiLCJoYXRjaCIsIm9wZW4iLCJyZWN0IiwiQ2F0ZWdvcmllc1N2YyIsInNob3dDYXRlZ29yeSIsImdldENhdGVnb3JpZXMiLCJjYXRlZ29yaWVzIiwidGFza3MiLCJqIiwidGFzayIsInNlbGVjdENhdGVnb3J5Iiwic2VsZWN0ZWRDYXRlZ29yeSIsInNlbGVjdGVkVGFza3MiLCJzZWxlY3RhYmxlVGFza3MiLCJlbnRlcmVkQ2F0ZWdvcnkiLCJuZXdDYXRlZ29yeSIsImZvdW5kIiwiYWRkQ2F0ZWdvcnkiLCJuZXdUYXNrIiwic2VsZWN0VGFzayIsImFkZFRhc2siLCJlbnRlcmVkVGFzayIsInJlbW92ZVRhc2siLCJ1bnNlbGVjdFRhc2siLCJ0YXNrTGlzdCIsInNwbGljZSIsImluZGV4T2YiLCJzdGFydFByaW9yaXRpemluZyIsInNldFByaW9yaXR5TGlzdCIsImdldFF1ZXN0aW9ucyIsImNvdW50ZXIiLCJ1aSIsImZpcmViYXNldWkiLCJBdXRoVUkiLCJsb2dpblN1Y2Nlc3NmdWwiLCIkZW1pdCIsIm1vZGFsIiwibG9naW5GYWlsZWQiLCJzdGFydFVJIiwiY2FsbGJhY2tzIiwic2lnbkluU3VjY2VzcyIsImNyZWRlbnRpYWwiLCJyZWRpcmVjdFVybCIsImdldElkVG9rZW4iLCJpZFRva2VuIiwiYXV0aGVudGljYXRlIiwiYXV0aFR5cGUiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiZW1haWxWZXJpZmllZCIsInNpZ25JbkZhaWx1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNyZWQiLCJzaWduSW5XaXRoQ3JlZGVudGlhbCIsInVpU2hvd24iLCJzdHlsZSIsImRpc3BsYXkiLCJzaWduSW5TdWNjZXNzVXJsIiwic2lnbkluT3B0aW9ucyIsIkdvb2dsZUF1dGhQcm92aWRlciIsIlBST1ZJREVSX0lEIiwiRmFjZWJvb2tBdXRoUHJvdmlkZXIiLCJzaWduSW5GbG93IiwiZXZlbnQiLCJyZXNldCIsInRlbGVncmFtTG9naW4iLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwidXNlcm5hbWUiLCJ0ZWxlZ3JhbUlkIiwicGhvdG9fdXJsIiwiaGFzaCIsIiRmaWx0ZXIiLCJQb3N0c1N2YyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsImJvZHkiLCJwb3N0IiwiZmV0Y2giLCJwb3N0cyIsImdldFBvc3QiLCJ1bnNoaWZ0IiwiY291bnRyaWVzIiwiZmxhZyIsInRpZGJpdCIsImRhdGVPcHRpb25zIiwibWF4RGF0ZSIsIm1pbkRhdGUiLCJpbml0RGF0ZSIsImRhdGVwaWNrZXJNb2RlIiwidXNlcm5hbWVUb2dnbGUiLCJwYXNzd29yZFRvZ2dsZSIsInRvZ2dsZVVzZXJuYW1lIiwibmV3VXNlcm5hbWUiLCJ0b2dnbGVQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwib3JpZ2luYWxCZyIsImFuaW1hdGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGFuZ2VQYXNzd29yZCIsIm9sZFBhc3N3b3JkIiwiY2hhbmdlVXNlcm5hbWUiLCJ1cGRhdGVVc2VyIiwiZmxhZ3MiLCJ1c2VyRmxhZ3MiLCJsb2FkQ291bnRyaWVzIiwiJHF1ZXJ5IiwiY291bnRyeSIsIiR3YXRjaCIsImluY2x1ZGVzIiwic2VsZWN0ZWRTa2lsbCIsInNraWxsc1Zpc2libGUiLCJwcm9qZWN0cyIsImxhYmVscyIsImVtcGxveWVyIiwiY29uY2F0IiwiZmlsdGVyZWRQcm9qZWN0cyIsInByb2plY3QiLCJzZXRTZWxlY3RlZFNraWxsIiwiY2hhcnRPcHRpb25zIiwiY3V0b3V0UGVyY2VudGFnZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJ0b29sdGlwcyIsImNoYXJ0U3R5bGUiLCJpbWFnZSIsIiRzY2UiLCJUZW5UaGluZ3NTdmMiLCJUZWxlZ3JhbVN2YyIsInBhZ2UiLCJsaXN0cyIsInNlYXJjaCIsInNlYXJjaEZpZWxkIiwibmV3SXRlbSIsImxhbmd1YWdlRmlsdGVyIiwiY2F0ZWdvcnlGaWx0ZXIiLCJzZWxlY3RlZExpc3QiLCJoaWdobGlnaHRlZExpc3RzIiwiaGlnaGxpZ2h0ZWRMaXN0SWRzIiwibGlzdElkc1RvRGVsZXRlIiwiY29uZmlybWVkIiwiZXhoYXVzdGVkIiwib2JqZWN0Q2F0ZWdvcmllcyIsImJsdXJiVHlwZXMiLCJhcGkiLCJhZG1pbk9ubHkiLCJoYXZlQ29tbW9uSXRlbXMiLCJhcnIxIiwiYXJyMiIsInNvbWUiLCJrZXlEb3duIiwiaXMiLCJjcmVhdGVWYWx1ZSIsInRyaWdnZXIiLCJhZGRMaXN0IiwiY3JlYXRvciIsInZhbHVlcyIsImFuc3dlcnMiLCJpc0R5bmFtaWMiLCJzZXRTZWxlY3RlZEl0ZW0iLCJzZWxlY3RlZEl0ZW0iLCJzZXRTZWxlY3RlZExpc3QiLCJsaXN0IiwiZ2V0TGlzdCIsInJlYWRPbmx5IiwiYWRtaW4iLCJnZXRGaWx0ZXJDb3VudCIsInNlYXJjaExpc3RzIiwiYXN5bmMiLCJ2aWV3VmFsdWUiLCJoaWdobGlnaHRlZFNlYXJjaFRleHQiLCJyZWdleCIsInZhbHVlT3JkZXIiLCJmaWVsZCIsIm9yZGVyIiwib3JkZXJCeSIsImdldExpc3RzIiwiZ2V0TW9yZUxpc3RzIiwibGlua1RlbGVncmFtIiwibGlua0FjY291bnQiLCJnZXRVc2VyIiwic2V0TGFuZ3VhZ2VGaWx0ZXIiLCJzZXRDYXRlZ29yeUZpbHRlciIsInRvZ2dsZUNhdGVnb3J5RmlsdGVyIiwiYWxsQ2F0ZWdvcmllcyIsImdldENhdGVnb3J5TGFiZWwiLCJzdWJjYXRlZ29yaWVzIiwic3ViY2F0ZWdvcnkiLCJzdGFydHNXaXRoIiwibGFiZWwiLCJqb2luIiwic29ydEJ5IiwibGltaXQiLCJsYW5ndWFnZU5vdCIsImNhdGVnb3JpZXNOb3QiLCJjb3VudCIsIm5leHRQYWdlIiwiZ2V0TGlzdE5hbWUiLCJsaXN0SWQiLCJ1cGRhdGVWYWx1ZSIsInVwZGF0ZWRJdGVtUmVzcG9uc2UiLCJ1cGRhdGVMaXN0VmFsdWUiLCJibHVyYlR5cGUiLCJkZWxldGVWYWx1ZSIsImhhc0R1cGxpY2F0ZSIsImNyZWF0ZWRJdGVtUmVzcG9uc2UiLCJjcmVhdGVMaXN0VmFsdWUiLCJ1cHNlcnRMaXN0IiwiYmx1cmIiLCJ2YWx1ZVRvRGVsZXRlIiwiZGVsZXRlTGlzdFZhbHVlIiwidXBkYXRlTGlzdCIsInVwZGF0ZXMiLCJzYXZpbmciLCJsaXN0SW5kZXgiLCJmaW5kSW5kZXgiLCJjaGFuZ2VzIiwiY3JlYXRlTGlzdCIsImFzc2lnbiIsImRlbGV0ZUxpc3QiLCJkZWxldGVMaXN0cyIsImNvbmZpcm1NZXJnZUxpc3RzIiwibWVyZ2VMaXN0cyIsImNvbmZpcm1EZWxldGVMaXN0cyIsInRvZ2dsZUhpZ2hsaWdodGVkTGlzdHMiLCJ0b2dnbGVIaWdobGlnaHRlZExpc3QiLCJoaWdobGlnaHRlZExpc3RJZCIsInNldERpZmZpY3VsdHkiLCJkaWZmaWN1bHR5Iiwic2V0RnJlcXVlbmN5IiwiZnJlcXVlbmN5IiwiZ2V0VXBkYXRlZENhdGVnb3JpZXMiLCJsaXN0Q2F0ZWdvcnkiLCJzcGxpdCIsInNldENhdGVnb3J5IiwidXBkYXRlZENhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwibGlzdHNUb1VwZGF0ZSIsImV2ZXJ5IiwiYWxsIiwibGlzdFRvVXBkYXRlIiwidXBkYXRlZExpc3QiLCJjYXRlZ29yeVN0YXR1cyIsImFuc3dlciIsInJlbW92ZUFsbEJ1dExldHRlcnMiLCJnZXRTZWxlY3RlZExpc3RzVGl0bGUiLCJnZXRCbHVyYnMiLCJ0eXBlIiwiZ2V0dGluZ0JsdXJicyIsImdldEVtYmVkVXJsIiwidmlkZW9JZCIsIm1hdGNoIiwidHJpbSIsInRydXN0QXNSZXNvdXJjZVVybCIsImdldExhbmd1YWdlcyIsImxhbmd1YWdlU3RhdHMiLCJnZXRMaXN0TGFuZ3VhZ2VTdGF0cyIsImNhdGVnb3J5U3RhdHMiLCJnZXRMaXN0Q2F0ZWdvcnlTdGF0cyIsImdldEdhbWVzIiwidGVsZWdyYW1HYW1lcyIsImdldFVzZXJzIiwiZ2V0UXVldWUiLCJxdWV1ZSIsImdldFBhdXNlIiwicGF1c2VkIiwidXNlcnMiLCJ0b2dnbGVCYW4iLCJ0b2dnbGVQYXVzZSIsIiRzdGF0ZVBhcmFtcyIsImRpc2FibGVkQ2F0ZWdvcmllcyIsInVwZGF0ZUdhbWVDYXRlZ29yeSIsImdhbWUiLCJjIiwiZ2V0R2FtZSIsImNoZWNrQW5zd2VyIiwiZ2V0RGF0YSIsImdldFRlbnRoaW5ncyIsImd1ZXNzIiwiYW5zd2VyVGVudGhpbmdzIiwiZ2V0SGludCIsImdldFRlbnRoaW5nc0hpbnQiLCJza2lwTGlzdCIsInNraXBUZW50aGluZ3NMaXN0IiwiZGF0YXNldHMiLCJsaW5lQ2hhcnRPcHRpb25zIiwicmVzcG9uc2l2ZSIsInBsdWdpbnMiLCJsZWdlbmQiLCJ0aXRsZSIsImdldFBsYXlTdGF0cyIsInllYXJzIiwidW5pcSIsIm1vbnRocyIsInRpbWVzIiwicGxheVN0YXRzIiwic2VyaWVzIiwibW9udGgiLCJ1bmlxdWVQbGF5ZXJzIiwiZ2V0R2FtZVN0YXRzIiwiZ2FtZVN0YXRzIiwic29ydGVkRGF0YSIsInRpbWVSZW1haW5pbmciLCJ0aW1lRXhlcmNpc2luZyIsInRpbWVSZXN0aW5nIiwicmVzdCIsImV4ZXJjaXNpbmciLCJzb3VuZHMiLCJBdWRpbyIsIm9mZiIsInN3aXRjaCIsImV4ZXJjaXNlcyIsInByb2dyZXNzIiwid29ya291dCIsImV4Y2VyY2lzZVRpbWUiLCJjbGVhckludGVydmFsIiwidGltZXIiLCJleGVyY2lzZSIsInNldEludGVydmFsIiwiY3VycmVudEV4ZXJjaXNlIiwicGxheSIsImRpcmVjdGl2ZSIsIiRkb2N1bWVudCIsInJlc3RyaWN0Iiwic2NvcGUiLCJjbGlja091dHNpZGUiLCJsaW5rIiwiZWwiLCJhdHRyIiwidGFyZ2V0IiwiY29udGFpbnMiLCIkZXZhbCIsIiRzdGF0ZSIsIiRjb21waWxlIiwiJGludGVycG9sYXRlIiwiZ2V0U3R5bGUiLCJ0ZW1wbGF0ZVN0eWxlVXJsIiwiaHJlZiIsInJlbCIsImVsZW0iLCJ0ZW1wbGF0ZVN0eWxlcyIsImh0bWwiLCJzdGFydFN5bWJvbCIsImVuZFN5bWJvbCIsImFwcGVuZCIsInRvU3RhdGUiLCJ0b1BhcmFtcyIsImZyb21TdGF0ZSIsImZyb21QYXJhbXMiLCJzdGF0ZXMiLCJnZXQiLCJ2aWV3cyIsInZpZXciLCJmbGF0IiwiZ2V0U3R5bGVzIiwiJGh0dHAiLCJzdmMiLCJnZXRUYXNrcyIsImNob2ljZXMiLCJwcmlvcml0eUxpc3QiLCJmaXJzdENob2ljZSIsInNlY29uZENob2ljZSIsImNob2ljZSIsInQiLCJtIiwic2h1ZmZsZSIsImdldFByaW9yaXR5TGlzdCIsImdldFF1aXpGaWxlcyIsInF1aXoiLCJnZXRIaWdoc2NvcmUiLCJmdXp6eU1hdGNoIiwidXNlcklkIiwidGVsZWdyYW1EYXRhIiwiZ2V0UmFuZG9tTGlzdCIsInB1dCIsImRlbGV0ZSIsInJlcG9ydExpc3QiLCJzZXRUb2tlbiIsInRva2VuIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiY3JlYXRlVXNlciIsIkZpbGVTdmMiLCJhbmltYWxzIiwiYW5pbWFsIiwic291bmQiLCJjYXBpdGFsaXplIiwiZ2V0UmFuZG9tQW5pbWFscyIsImdldFNjb3JlIiwiaXNTY29yZVZpc2libGUiXSwibWFwcGluZ3MiOiJBQUFBLE1BQUFBLDJCQUFBQSxHQUFBLENBQ0E7SUFDQUMsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQ0E7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxJQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLEVBRUE7SUFDQUQsSUFBQUEsRUFBQSxHQUFBO0lBQ0FDLE9BQUFBLEVBQUE7RUFBQSxDQUFBLENBQUE7RUFHQUMsT0FBQUEsR0FBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEVBQ0EsTUFBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsRUFDQSxLQUFBLEVBQ0EsS0FBQSxFQUNBLEtBQUEsQ0FBQTtBQUdBQyxNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGtCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBUiwyQkFBQUEsQ0FBQVMsTUFBQUEsQ0FBQSxDQUFBQyxNQUFBQSxFQUFBQyxNQUFBQSxLQUNBRCxNQUFBQSxDQUFBRSxPQUFBQSxDQUFBRCxNQUFBQSxDQUFBVCxPQUFBQSxFQUFBUyxNQUFBQSxDQUFBVixJQUFBQSxDQUFBQSxFQUNBWSxJQUFBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUE7QUFHQSxNQUFBQyxrQkFBQUEsR0FBQSxzQ0FBQTtFQUNBQyxNQUFBQSxHQUFBLHdFQUFBO0FBRUFYLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEseUJBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFELE9BQUFBLENBQUEsSUFBQUksTUFBQUEsQ0FBQSxJQUFBRixrQkFBQUEsR0FBQUEsRUFBQSxJQUFBLENBQUEsRUFBQSxFQUFBLENBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBVixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLHFCQUFBLEVBQUE7RUFDQUMsS0FBQUEsRUFBQSxTQUFBQSxDQUFBLEVBQUE7SUFDQSxPQUFBSyxJQUFBQSxDQUFBSSxXQUFBQSxFQUFBQSxDQUFBQyxnQkFBQUEsRUFBQUEsQ0FBQUMsdUJBQUFBLEVBQ0E7RUFBQTtBQUFBLENBQUEsQ0FBQSxFQUdBZixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFNBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUFZLEtBQUFBLEVBQUFBO0lBQ0EsT0FBQVAsSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxJQUFBSSxNQUFBQSxDQUFBLEtBQUFGLGtCQUFBQSxHQUFBTSxLQUFBQSxHQUFBQSxFQUFBLElBQUEsQ0FBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FoQixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLGVBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUFZLEtBQUFBLEVBQUFBO0lBQ0EsT0FBQVAsSUFBQUEsQ0FBQVEsTUFBQUEsR0FBQSxDQUFBLEdBQUFSLElBQUFBLEdBQUFBLElBQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUFBLElBQUFBLENBQUFTLFNBQUFBLENBQUEsQ0FBQSxFQUFBVCxJQUFBQSxDQUFBUSxNQUFBQSxHQUFBLENBQUEsQ0FBQSxDQUFBRSxPQUFBQSxDQUFBSCxLQUFBQSxDQUFBQSxHQUFBUCxJQUFBQSxDQUFBQSxJQUFBQSxDQUFBUSxNQUFBQSxHQUFBLENBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FqQixNQUFBQSxDQUFBQyxjQUFBQSxDQUFBQyxNQUFBQSxDQUFBQyxTQUFBQSxFQUFBLFlBQUEsRUFBQTtFQUNBQyxLQUFBQSxFQUFBLFNBQUFBLENBQUEsRUFBQTtJQUNBLE9BQUFLLElBQUFBLENBQUFXLE1BQUFBLENBQUEsQ0FBQSxDQUFBLENBQUFDLFdBQUFBLEVBQUFBLEdBQUFaLElBQUFBLENBQUFhLEtBQUFBLENBQUEsQ0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQXRCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsWUFBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQUQsT0FBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLENBQUFBLE9BQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsQ0FDQTtFQUFBO0FBQUEsQ0FBQSxDQUFBLEVBR0FSLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFDLFNBQUFBLEVBQUEsY0FBQSxFQUFBO0VBQ0FDLEtBQUFBLEVBQUEsU0FBQUEsQ0FBQSxFQUFBO0lBQ0EsT0FBQUssSUFBQUEsQ0FBQWMsVUFBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxDQUFBLENBQUFmLE9BQUFBLENBQUEsR0FBQSxFQUFBLE1BQUEsQ0FBQSxDQUFBQSxPQUFBQSxDQUFBLEdBQUEsRUFBQSxNQUFBLENBQUEsQ0FBQWUsVUFBQUEsQ0FBQSxHQUFBLEVBQUEsT0FBQSxDQUNBO0VBQUE7QUFBQSxDQUFBLENBQUEsRUFHQXZCLE1BQUFBLENBQUFDLGNBQUFBLENBQUFDLE1BQUFBLENBQUFD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LEVBQUFDLGtCQUFBQSxFQUFBQyxtQkFBQUEsRUFBQUMsaUJBQUFBLEVBQUFBO0VBQ0FGLGtCQUFBQSxDQUFBRyxTQUFBQSxDQUFBLE9BQUEsQ0FBQSxFQUNBRixtQkFBQUEsQ0FBQUgsTUFBQUEsQ0FBQU0sVUFBQUEsQ0FBQUEsQ0FBQSxDQUFBLENBQUEsRUFFQUwsY0FBQUEsQ0FDQU0sS0FBQUEsQ0FBQSxNQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxPQUFBO0lBQ0FDLFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxRQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FDLFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FDLFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxZQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxhQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUUsVUFBQUEsRUFBQSxZQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFNBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFVBQUE7SUFDQUUsVUFBQUEsRUFBQSxhQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxPQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxRQUFBO0lBQ0FFLFVBQUFBLEVBQUEsV0FBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsU0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsVUFBQTtJQUNBRSxVQUFBQSxFQUFBLGFBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLE9BQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxXQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxTQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsYUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFVBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFdBQUE7SUFDQUUsVUFBQUEsRUFBQSxjQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxNQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxPQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZUFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsV0FBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsWUFBQTtJQUNBRSxVQUFBQSxFQUFBLGVBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGlCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxrQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG9CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxnQkFBQSxFQUFBO0lBQ0FDLEdBQUFBLEVBQUEsa0JBQUE7SUFDQUUsVUFBQUEsRUFBQSxtQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEsaUJBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLGtCQUFBO0lBQ0FFLFVBQUFBLEVBQUEsb0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGdCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxpQkFBQTtJQUNBRSxVQUFBQSxFQUFBLG1CQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxhQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxTQUFBO0lBQ0FFLFVBQUFBLEVBQUEsZ0JBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLFlBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFFBQUE7SUFDQUUsVUFBQUEsRUFBQSxlQUFBO0lBQ0FELFdBQUFBLEVBQUE7RUFBQSxDQUFBLENBQUEsQ0FFQUYsS0FBQUEsQ0FBQSxjQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxVQUFBO0lBQ0FFLFVBQUFBLEVBQUEsaUJBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGdCQUFBLEVBQUE7SUFDQUMsR0FBQUEsRUFBQSxZQUFBO0lBQ0FFLFVBQUFBLEVBQUEsbUJBQUE7SUFDQUQsV0FBQUEsRUFBQTtFQUFBLENBQUEsQ0FBQSxDQUVBRixLQUFBQSxDQUFBLGFBQUEsRUFBQTtJQUNBQyxHQUFBQSxFQUFBLFNBQUE7SUFDQUUsVUFBQUEsRUFBQSxnQkFBQTtJQUNBRCxXQUFBQSxFQUFBO0VBQUEsQ0FBQSxDQUFBLENBRUFGLEtBQUFBLENBQUEs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QUEsQ0FBQSxFQUFBLENBQUE7RUFFQSxNQUFBQyxHQUFBQSxHQUFBSixNQUFBQSxDQUFBSyxVQUFBQSxDQUFBLElBQUEsQ0FBQTtFQUNBLElBQUEsQ0FBQUQsR0FBQUEsRUFDQSxPQUFBUCxTQUFBQSxDQUFBSyxJQUFBQSxDQUFBLE9BQUEsQ0FBQTtFQUVBRSxHQUFBQSxDQUFBRSxJQUFBQSxHQUFBLG9CQUFBLEVBQ0FGLEdBQUFBLENBQUFHLFNBQUFBLEdBQUEsS0FBQSxFQUNBSCxHQUFBQSxDQUFBSSxTQUFBQSxHQUFBLFFBQUE7RUFDQSxJQUFBQyxLQUFBQSxHQUFBLENBQUEsQ0FBQTtFQUNBLE1BQUFDLFNBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFFBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFVBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLEdBQUFBLEdBQUEsQ0FBQSxDQUFBO0lBQ0FDLFNBQUFBLEdBQUEsRUFBQTtFQUNBLElBQUFDLEtBQUFBLEdBQUF4RSxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBRCxJQUFBQSxDQUFBRCxNQUFBQSxFQUFBQSxHQUFBd0UsU0FBQUEsQ0FBQUE7RUFDQSxNQUFBRSxZQUFBQSxHQUFBLENBQ0E7SUFDQUMsSUFBQUEsRUFBQSxPQUFBO0lBQ0FDLFlBQUFBLEVBQUEsYUFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxFQUFBLENBQUE7TUFDQTVLLENBQUFBLEVBQUEsQ0FBQTtNQUNBUyxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBb0ssR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO01BQ0FBLFNBQUFBLENBQUFDLFFBQUFBLElBQUEsR0FDQTtJQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FWLElBQUFBLEVBQUEsVUFBQTtJQUNBQyxZQUFBQSxFQUFBLFlBQUE7SUFDQUMsS0FBQUEsRUFBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUE7TUFDQUMsT0FBQUEsRUFBQSxDQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO01BQ0E1SyxDQUFBQSxFQUFBLENBQUE7TUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUE7SUFFQW9LLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7SUFDQUMsUUFBQUEsRUFBQSxTQUFBQSxDQUFBQyxTQUFBQSxFQUFBQTtNQUNBQSxTQUFBQSxDQUFBRSxRQUFBQSxHQUFBLENBQUEsS0FDQUYsU0FBQUEsQ0FBQUcsWUFBQUEsSUFBQSxDQUFBLENBRUE7SUFBQTtFQUFBLENBQUEsRUFFQTtJQUNBWixJQUFBQSxFQUFBLE9BQUE7SUFDQUMsWUFBQUEsRUFBQSxnQkFBQTtJQUNBQyxLQUFBQSxFQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQTtNQUNBQyxPQUFBQSxFQUFBLENBQUE7TUFDQUMsSUFBQUEsRUFBQSxDQUFBLEVBQUEsRUFBQSxDQUFBLENBQUE7TUFDQTVLLENBQUFBLEVBQUEsQ0FBQTtNQUNBUyxTQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQTtJQUVBb0ssR0FBQUEsRUFBQSxJQUFBQyxLQUFBQTtJQUNBQyxRQUFBQSxFQUFBLFNBQUFBLENBQUFDLFNBQUFBLEVBQUFBO01BQ0FBLFNBQUFBLENBQUFJLEtBQUFBLElBQUEsQ0FDQTtJQUFBO0VBQUEsQ0FBQSxFQUVBO0lBQ0FiLElBQUFBLEVBQUEsUUFBQTtJQUNBQyxZQUFBQSxFQUFBLFFBQUE7SUFDQUMsS0FBQUEsRUFBQTtNQUNBQyxJQUFBQSxFQUFBLENBQUE7TUFDQUMsT0FBQUEsRUFBQSxDQUFBO01BQ0FDLElBQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUEsRUFBQSxDQUFBO01BQ0E1SyxDQUFBQSxFQUFBLENBQUE7TUFDQVMsU0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUE7SUFFQW9LLEdBQUFBLEVBQUEsSUFBQUMsS0FBQUE7SUFDQUMsUUFBQUEsRUFB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LElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQW1LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBcEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBbUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLENBQUEsRUFFQUgsUUFBQUEsQ0FBQUUsWUFBQUEsQ0FDQSxNQUFBLEVBQ0EsTUFBQSxHQUNBbkssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBbUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FwSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUFtSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXBLLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQW1LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxDQUFBLEVBRUFILFFBQUFBLENBQUFFLFlBQUFBLENBQ0EsS0FBQSxFQUNBLE1BQUEsR0FDQW5LLElBQUFBLENBQUFDLEtBQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsR0FBQW1LLEtBQUFBLEdBQUEsR0FBQSxDQUFBLEdBQ0EsR0FBQSxHQUNBcEssSUFBQUEsQ0FBQUMsS0FBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBbUssS0FBQUEsR0FBQSxHQUFBLENBQUEsR0FDQSxHQUFBLEdBQ0FwSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLEdBQUFtSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsQ0FBQSxFQUVBSCxRQUFBQSxDQUFBRSxZQUFBQSxDQUNBLE1BQUEsRUFDQSxNQUFBLEdBQ0FuSyxJQUFBQSxDQUFBQyxLQUFBQSxDQUFBLENBQUEsR0FBQSxHQUFBLEdBQUFtSyxLQUFBQSxHQUFBLEdBQUEsQ0FBQSxHQUNBLEdBQUEsR0FDQXBLLElBQUFB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LENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXZJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQXlJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFHLEdBQUFBLEVBQUE7UUFDQUwsS0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxFQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXZJLE9BQUFBLEVBQUEsQ0FBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQXlJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFJLElBQUFBLEVBQUE7UUFDQU4sS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXZJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQXlJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFLLEtBQUFBLEVBQUE7UUFDQVAsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXZJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQXlJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFNLEtBQUFBLEVBQUE7UUFDQVIsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFBLENBQUE7UUFDQUMsR0FBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLENBQUE7UUFDQXZJLE9BQUFBLEVBQUEsRUFBQTtRQUNBRCxJQUFBQSxFQUFBLENBQUE7UUFDQXlJLE9BQUFBLEVBQUFBLENBQUE7TUFBQSxDQUFBO01BRUFPLEtBQUFBLEVBQUE7UUFDQVQsS0FBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxHQUFB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QUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFdBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsZ0JBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxXQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsZUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLHdCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsWUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsVUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsT0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxrQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsaUNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsa0NBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsZUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLHlCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLHVDQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLDBCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsYUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxlQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsT0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsVUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE1BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsWUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGtCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsZ0JBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsVUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxvQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGdCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsT0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsTUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSw2QkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxpQ0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxlQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsT0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxzREFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsZUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsV0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxXQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLG1CQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsOENBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsV0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxNQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxXQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLG1DQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsV0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsYUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGdDQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE1BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsMkJBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsT0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsVUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLHVCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLHdDQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLG9CQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsZ0JBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsWUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxrQ0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsZUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxXQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxXQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxzQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLDRCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsa0JBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsNENBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsTUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsT0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSwwQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsWUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFdBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsVUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsVUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsZUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGdCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsV0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxhQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsT0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE1BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsYUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxNQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsTUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxrQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxrQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxhQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSwyQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEscUJBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsVUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsT0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxvQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxRQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsaUJBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsWUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsV0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSw4Q0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLHdCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsY0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsdUJBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsYUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSwyQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxzQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxXQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLDBCQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE1BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsNkJBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsTUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxVQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFlBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxhQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxPQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEscUJBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsUUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSwyQkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSw4QkFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFFBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsc0NBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsMEJBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsU0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxZQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLFVBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsa0NBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsbUNBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEseUJBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsc0JBQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsVUFBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLG1CQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLE9BQUE7SUFBQWdQLElBQUFBLEVBQUE7RUFBQSxDQUFBLEVBQ0E7SUFBQWhQLElBQUFBLEVBQUEsT0FBQTtJQUFBZ1AsSUFBQUEsRUFBQTtFQUFBLENBQUEsRUFDQTtJQUFBaFAsSUFBQUEsRUFBQSxTQUFBO0lBQUFnUCxJQUFBQSxFQUFBO0VBQUEsQ0FBQSxFQUNBO0lBQUFoUCxJQUFBQSxFQUFBLGNB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QUFBLFNBQUEsQ0FBQTtNQUNBRSxNQUFBQSxFQUFBLElBQUFGLEtBQUFBLENBQUEsWUFBQTtJQUFBLENBQUE7SUFJQUcsU0FBQUEsR0FBQSxDQUNBO01BQUF0ZCxJQUFBQSxFQUFBLGVBQUE7TUFBQXdZLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQXhZLElBQUFBLEVBQUEsVUFBQTtNQUFBd1ksS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBeFksSUFBQUEsRUFBQSxTQUFBO01BQUF3WSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUF4WSxJQUFBQSxFQUFBLFFBQUE7TUFBQXdZLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQXhZLElBQUFBLEVBQUEsU0FBQTtNQUFBd1ksS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBeFksSUFBQUEsRUFBQSxPQUFBO01BQUF3WSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUF4WSxJQUFBQSxFQUFBLGFBQUE7TUFBQXdZLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQXhZLElBQUFBLEVBQUEsT0FBQTtNQUFBd1ksS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsRUFDQTtNQUFBeFksSUFBQUEsRUFBQSxZQUFBO01BQUF3WSxLQUFBQSxFQUFBQSxDQUFBO0lBQUEsQ0FBQSxFQUNBO01BQUF4WSxJQUFBQSxFQUFBLE9BQUE7TUFBQXdZLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQXhZLElBQUFBLEVBQUEsdUJBQUE7TUFBQXdZLEtBQUFBLEVBQUFBLENBQUE7SUFBQSxDQUFBLEVBQ0E7TUFBQXhZLElBQUFBLEVBQUEsWUFBQTtNQUFBd1ksS0FBQUEsRUFBQUEsQ0FBQTtJQUFBLENBQUEsQ0FBQTtFQUtBL2UsTUFBQUEsQ0FBQThqQixRQUFBQSxHQUFBLFlBQUE7SUFDQSxPQUFBRCxTQUFBQSxDQUFBdG9CLE1BQUFBLEdB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QUEsQ0FBQUEsQ0FBQUEsQ0FBQTNLLEtBQUFBLENBQUEsQ0FBQSxFQUFBLEVBQUEsQ0FBQTtFQUVBb0UsTUFBQUEsQ0FBQTJvQixRQUFBQSxHQUFBLE1BQ0EsR0FBQTNvQixNQUFBQSxDQUFBc29CLE9BQUFBLENBQUFsbUIsTUFBQUEsQ0FBQW1tQixNQUFBQSxJQUFBQSxNQUFBQSxDQUFBaGlCLElBQUFBLEtBQUFnaUIsTUFBQUEsQ0FBQTNHLEtBQUFBLENBQUFBLENBQUFybUIsTUFBQUEsSUFBQXlFLE1BQUFBLENBQUFzb0IsT0FBQUEsQ0FBQS9zQixNQUFBQSxFQUFBQSxFQUVBeUUsTUFBQUEsQ0FBQTRvQixjQUFBQSxHQUFBLE1BQUE1b0IsTUFBQUEsQ0FBQXNvQixPQUFBQSxDQUFBbG1CLE1BQUFBLENBQUFtbUIsTUFBQUEsSUFBQUEsTUFBQUEsQ0FBQTNHLEtBQUFBLENBQUFBLENBQUFybUIsTUFBQUEsS0FBQXlFLE1BQUFBLENBQUFzb0IsT0FBQUEsQ0FBQS9zQixNQUNBO0FBQUEsQ0FBQSxDQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcCA9IFtcclxuICB7XHJcbiAgICBiYXNlOiBcIkFcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0MVxcdTI0QjZcXHVGRjIxXFx1MDBDMFxcdTAwQzFcXHUwMEMyXFx1MUVBNlxcdTFFQTRcXHUxRUFBXFx1MUVBOFxcdTAwQzNcXHUwMTAwXFx1MDEwMlxcdTFFQjBcXHUxRUFFXFx1MUVCNFxcdTFFQjJcXHUwMjI2XFx1MDFFMFxcdTAwQzRcXHUwMURFXFx1MUVBMlxcdTAwQzVcXHUwMUZBXFx1MDFDRFxcdTAyMDBcXHUwMjAyXFx1MUVBMFxcdTFFQUNcXHUxRUI2XFx1MUUwMFxcdTAxMDRcXHUwMjNBXFx1MkM2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQUVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBDNlxcdTAxRkNcXHUwMUUyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBT1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM2XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJBVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM4XFx1QTczQV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQVlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiQlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQyXFx1MjRCN1xcdUZGMjJcXHUxRTAyXFx1MUUwNFxcdTFFMDZcXHUwMjQzXFx1MDE4MlxcdTAxODFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0M1xcdTI0QjhcXHVGRjIzXFx1MDEwNlxcdTAxMDhcXHUwMTBBXFx1MDEwQ1xcdTAwQzdcXHUxRTA4XFx1MDE4N1xcdTAyM0JcXHVBNzNFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDRcXHUyNEI5XFx1RkYyNFxcdTFFMEFcXHUwMTBFXFx1MUUwQ1xcdTFFMTBcXHUxRTEyXFx1MUUwRVxcdTAxMTBcXHUwMThCXFx1MDE4QVxcdTAxODlcXHVBNzc5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJEWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUYxXFx1MDFDNF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiRHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGMlxcdTAxQzVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0NVxcdTI0QkFcXHVGRjI1XFx1MDBDOFxcdTAwQzlcXHUwMENBXFx1MUVDMFxcdTFFQkVcXHUxRUM0XFx1MUVDMlxcdTFFQkNcXHUwMTEyXFx1MUUxNFxcdTFFMTZcXHUwMTE0XFx1MDExNlxcdTAwQ0JcXHUxRUJBXFx1MDExQVxcdTAyMDRcXHUwMjA2XFx1MUVCOFxcdTFFQzZcXHUwMjI4XFx1MUUxQ1xcdTAxMThcXHUxRTE4XFx1MUUxQVxcdTAxOTBcXHUwMThFXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJGXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNDZcXHUyNEJCXFx1RkYyNlxcdTFFMUVcXHUwMTkxXFx1QTc3Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiR1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDQ3XFx1MjRCQ1xcdUZGMjdcXHUwMUY0XFx1MDExQ1xcdTFFMjBcXHUwMTFFXFx1MDEyMFxcdTAxRTZcXHUwMTIyXFx1MDFFNFxcdTAxOTNcXHVBN0EwXFx1QTc3RFxcdUE3N0VdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0OFxcdTI0QkRcXHVGRjI4XFx1MDEyNFxcdTFFMjJcXHUxRTI2XFx1MDIxRVxcdTFFMjRcXHUxRTI4XFx1MUUyQVxcdTAxMjZcXHUyQzY3XFx1MkM3NVxcdUE3OERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIklcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0OVxcdTI0QkVcXHVGRjI5XFx1MDBDQ1xcdTAwQ0RcXHUwMENFXFx1MDEyOFxcdTAxMkFcXHUwMTJDXFx1MDEzMFxcdTAwQ0ZcXHUxRTJFXFx1MUVDOFxcdTAxQ0ZcXHUwMjA4XFx1MDIwQVxcdTFFQ0FcXHUwMTJFXFx1MUUyQ1xcdTAxOTddL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QVxcdTI0QkZcXHVGRjJBXFx1MDEzNFxcdTAyNDhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIktcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA0QlxcdTI0QzBcXHVGRjJCXFx1MUUzMFxcdTAxRThcXHUxRTMyXFx1MDEzNlxcdTFFMzRcXHUwMTk4XFx1MkM2OVxcdUE3NDBcXHVBNzQyXFx1QTc0NFxcdUE3QTJdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIkxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0Q1xcdTI0QzFcXHVGRjJDXFx1MDEzRlxcdTAxMzlcXHUwMTNEXFx1MUUzNlxcdTFFMzhcXHUwMTNCXFx1MUUzQ1xcdTFFM0FcXHUwMTQxXFx1MDIzRFxcdTJDNjJcXHUyQzYwXFx1QTc0OFxcdUE3NDZcXHVBNzgwXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMSlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJMalwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUM4XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJNXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNERcXHUyNEMyXFx1RkYyRFxcdTFFM0VcXHUxRTQwXFx1MUU0MlxcdTJDNkVcXHUwMTlDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJOXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNEVcXHUyNEMzXFx1RkYyRVxcdTAxRjhcXHUwMTQzXFx1MDBEMVxcdTFFNDRcXHUwMTQ3XFx1MUU0NlxcdTAxNDVcXHUxRTRBXFx1MUU0OFxcdTAyMjBcXHUwMTlEXFx1QTc5MFxcdUE3QTRdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5KXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0FdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk5qXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAxQ0JdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIk9cIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA0RlxcdTI0QzRcXHVGRjJGXFx1MDBEMlxcdTAwRDNcXHUwMEQ0XFx1MUVEMlxcdTFFRDBcXHUxRUQ2XFx1MUVENFxcdTAwRDVcXHUxRTRDXFx1MDIyQ1xcdTFFNEVcXHUwMTRDXFx1MUU1MFxcdTFFNTJcXHUwMTRFXFx1MDIyRVxcdTAyMzBcXHUwMEQ2XFx1MDIyQVxcdTFFQ0VcXHUwMTUwXFx1MDFEMVxcdTAyMENcXHUwMjBFXFx1MDFBMFxcdTFFRENcXHUxRURBXFx1MUVFMFxcdTFFREVcXHUxRUUyXFx1MUVDQ1xcdTFFRDhcXHUwMUVBXFx1MDFFQ1xcdTAwRDhcXHUwMUZFXFx1MDE4NlxcdTAxOUZcXHVBNzRBXFx1QTc0Q10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT0lcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFBMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT09cIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc0RV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiT1VcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDIyMl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDUwXFx1MjRDNVxcdUZGMzBcXHUxRTU0XFx1MUU1NlxcdTAxQTRcXHUyQzYzXFx1QTc1MFxcdUE3NTJcXHVBNzU0XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJRXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTFcXHUyNEM2XFx1RkYzMVxcdUE3NTZcXHVBNzU4XFx1MDI0QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiUlwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUyXFx1MjRDN1xcdUZGMzJcXHUwMTU0XFx1MUU1OFxcdTAxNThcXHUwMjEwXFx1MDIxMlxcdTFFNUFcXHUxRTVDXFx1MDE1NlxcdTFFNUVcXHUwMjRDXFx1MkM2NFxcdUE3NUFcXHVBN0E2XFx1QTc4Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiU1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDUzXFx1MjRDOFxcdUZGMzNcXHUxRTlFXFx1MDE1QVxcdTFFNjRcXHUwMTVDXFx1MUU2MFxcdTAxNjBcXHUxRTY2XFx1MUU2MlxcdTFFNjhcXHUwMjE4XFx1MDE1RVxcdTJDN0VcXHVBN0E4XFx1QTc4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU0XFx1MjRDOVxcdUZGMzRcXHUxRTZBXFx1MDE2NFxcdTFFNkNcXHUwMjFBXFx1MDE2MlxcdTFFNzBcXHUxRTZFXFx1MDE2NlxcdTAxQUNcXHUwMUFFXFx1MDIzRVxcdUE3ODZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlRaXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3MjhdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIlVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA1NVxcdTI0Q0FcXHVGRjM1XFx1MDBEOVxcdTAwREFcXHUwMERCXFx1MDE2OFxcdTFFNzhcXHUwMTZBXFx1MUU3QVxcdTAxNkNcXHUwMERDXFx1MDFEQlxcdTAxRDdcXHUwMUQ1XFx1MDFEOVxcdTFFRTZcXHUwMTZFXFx1MDE3MFxcdTAxRDNcXHUwMjE0XFx1MDIxNlxcdTAxQUZcXHUxRUVBXFx1MUVFOFxcdTFFRUVcXHUxRUVDXFx1MUVGMFxcdTFFRTRcXHUxRTcyXFx1MDE3MlxcdTFFNzZcXHUxRTc0XFx1MDI0NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU2XFx1MjRDQlxcdUZGMzZcXHUxRTdDXFx1MUU3RVxcdTAxQjJcXHVBNzVFXFx1MDI0NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiVllcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTc2MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiV1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDU3XFx1MjRDQ1xcdUZGMzdcXHUxRTgwXFx1MUU4MlxcdTAxNzRcXHUxRTg2XFx1MUU4NFxcdTFFODhcXHUyQzcyXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJYXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNThcXHUyNENEXFx1RkYzOFxcdTFFOEFcXHUxRThDXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJZXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNTlcXHUyNENFXFx1RkYzOVxcdTFFRjJcXHUwMEREXFx1MDE3NlxcdTFFRjhcXHUwMjMyXFx1MUU4RVxcdTAxNzhcXHUxRUY2XFx1MUVGNFxcdTAxQjNcXHUwMjRFXFx1MUVGRV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiWlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDVBXFx1MjRDRlxcdUZGM0FcXHUwMTc5XFx1MUU5MFxcdTAxN0JcXHUwMTdEXFx1MUU5MlxcdTFFOTRcXHUwMUI1XFx1MDIyNFxcdTJDN0ZcXHUyQzZCXFx1QTc2Ml0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDYxXFx1MjREMFxcdUZGNDFcXHUxRTlBXFx1MDBFMFxcdTAwRTFcXHUwMEUyXFx1MUVBN1xcdTFFQTVcXHUxRUFCXFx1MUVBOVxcdTAwRTNcXHUwMTAxXFx1MDEwM1xcdTFFQjFcXHUxRUFGXFx1MUVCNVxcdTFFQjNcXHUwMjI3XFx1MDFFMVxcdTAwRTRcXHUwMURGXFx1MUVBM1xcdTAwRTVcXHUwMUZCXFx1MDFDRVxcdTAyMDFcXHUwMjAzXFx1MUVBMVxcdTFFQURcXHUxRUI3XFx1MUUwMVxcdTAxMDVcXHUyQzY1XFx1MDI1MF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczM10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYWVcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDBFNlxcdTAxRkRcXHUwMUUzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJhdlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzM5XFx1QTczQl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYXlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1QTczRF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiYlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDYyXFx1MjREMVxcdUZGNDJcXHUxRTAzXFx1MUUwNVxcdTFFMDdcXHUwMTgwXFx1MDE4M1xcdTAyNTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImNcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2M1xcdTI0RDJcXHVGRjQzXFx1MDEwN1xcdTAxMDlcXHUwMTBCXFx1MDEwRFxcdTAwRTdcXHUxRTA5XFx1MDE4OFxcdTAyM0NcXHVBNzNGXFx1MjE4NF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY0XFx1MjREM1xcdUZGNDRcXHUxRTBCXFx1MDEwRlxcdTFFMERcXHUxRTExXFx1MUUxM1xcdTFFMEZcXHUwMTExXFx1MDE4Q1xcdTAyNTZcXHUwMjU3XFx1QTc3QV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZHpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFGM1xcdTAxQzZdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImVcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2NVxcdTI0RDRcXHVGRjQ1XFx1MDBFOFxcdTAwRTlcXHUwMEVBXFx1MUVDMVxcdTFFQkZcXHUxRUM1XFx1MUVDM1xcdTFFQkRcXHUwMTEzXFx1MUUxNVxcdTFFMTdcXHUwMTE1XFx1MDExN1xcdTAwRUJcXHUxRUJCXFx1MDExQlxcdTAyMDVcXHUwMjA3XFx1MUVCOVxcdTFFQzdcXHUwMjI5XFx1MUUxRFxcdTAxMTlcXHUxRTE5XFx1MUUxQlxcdTAyNDdcXHUwMjVCXFx1MDFERF0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiZlwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDY2XFx1MjRENVxcdUZGNDZcXHUxRTFGXFx1MDE5MlxcdUE3N0NdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImdcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2N1xcdTI0RDZcXHVGRjQ3XFx1MDFGNVxcdTAxMURcXHUxRTIxXFx1MDExRlxcdTAxMjFcXHUwMUU3XFx1MDEyM1xcdTAxRTVcXHUwMjYwXFx1QTdBMVxcdTFENzlcXHVBNzdGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJoXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNjhcXHUyNEQ3XFx1RkY0OFxcdTAxMjVcXHUxRTIzXFx1MUUyN1xcdTAyMUZcXHUxRTI1XFx1MUUyOVxcdTFFMkJcXHUxRTk2XFx1MDEyN1xcdTJDNjhcXHUyQzc2XFx1MDI2NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaHZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDE5NV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiaVwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDY5XFx1MjREOFxcdUZGNDlcXHUwMEVDXFx1MDBFRFxcdTAwRUVcXHUwMTI5XFx1MDEyQlxcdTAxMkRcXHUwMEVGXFx1MUUyRlxcdTFFQzlcXHUwMUQwXFx1MDIwOVxcdTAyMEJcXHUxRUNCXFx1MDEyRlxcdTFFMkRcXHUwMjY4XFx1MDEzMV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwialwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZBXFx1MjREOVxcdUZGNEFcXHUwMTM1XFx1MDFGMFxcdTAyNDldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImtcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA2QlxcdTI0REFcXHVGRjRCXFx1MUUzMVxcdTAxRTlcXHUxRTMzXFx1MDEzN1xcdTFFMzVcXHUwMTk5XFx1MkM2QVxcdUE3NDFcXHVBNzQzXFx1QTc0NVxcdUE3QTNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcImxcIixcclxuICAgIGxldHRlcnM6XHJcbiAgICAgIC9bXFx1MDA2Q1xcdTI0REJcXHVGRjRDXFx1MDE0MFxcdTAxM0FcXHUwMTNFXFx1MUUzN1xcdTFFMzlcXHUwMTNDXFx1MUUzRFxcdTFFM0JcXHUwMTdGXFx1MDE0MlxcdTAxOUFcXHUwMjZCXFx1MkM2MVxcdUE3NDlcXHVBNzgxXFx1QTc0N10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibGpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDOV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDZEXFx1MjREQ1xcdUZGNERcXHUxRTNGXFx1MUU0MVxcdTFFNDNcXHUwMjcxXFx1MDI2Rl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwiblwiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZFXFx1MjRERFxcdUZGNEVcXHUwMUY5XFx1MDE0NFxcdTAwRjFcXHUxRTQ1XFx1MDE0OFxcdTFFNDdcXHUwMTQ2XFx1MUU0QlxcdTFFNDlcXHUwMTlFXFx1MDI3MlxcdTAxNDlcXHVBNzkxXFx1QTdBNV0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwibmpcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDFDQ10vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwib1wiLFxyXG4gICAgbGV0dGVyczpcclxuICAgICAgL1tcXHUwMDZGXFx1MjRERVxcdUZGNEZcXHUwMEYyXFx1MDBGM1xcdTAwRjRcXHUxRUQzXFx1MUVEMVxcdTFFRDdcXHUxRUQ1XFx1MDBGNVxcdTFFNERcXHUwMjJEXFx1MUU0RlxcdTAxNERcXHUxRTUxXFx1MUU1M1xcdTAxNEZcXHUwMjJGXFx1MDIzMVxcdTAwRjZcXHUwMjJCXFx1MUVDRlxcdTAxNTFcXHUwMUQyXFx1MDIwRFxcdTAyMEZcXHUwMUExXFx1MUVERFxcdTFFREJcXHUxRUUxXFx1MUVERlxcdTFFRTNcXHUxRUNEXFx1MUVEOVxcdTAxRUJcXHUwMUVEXFx1MDBGOFxcdTAxRkZcXHUwMjU0XFx1QTc0QlxcdUE3NERcXHUwMjc1XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvaVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMUEzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvdVwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMjIzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJvb1wiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzRGXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJwXCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdTAwNzBcXHUyNERGXFx1RkY1MFxcdTFFNTVcXHUxRTU3XFx1MDFBNVxcdTFEN0RcXHVBNzUxXFx1QTc1M1xcdUE3NTVdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInFcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3MVxcdTI0RTBcXHVGRjUxXFx1MDI0QlxcdUE3NTdcXHVBNzU5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJyXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzJcXHUyNEUxXFx1RkY1MlxcdTAxNTVcXHUxRTU5XFx1MDE1OVxcdTAyMTFcXHUwMjEzXFx1MUU1QlxcdTFFNURcXHUwMTU3XFx1MUU1RlxcdTAyNERcXHUwMjdEXFx1QTc1QlxcdUE3QTdcXHVBNzgzXS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJzXCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzNcXHUyNEUyXFx1RkY1M1xcdTAwREZcXHUwMTVCXFx1MUU2NVxcdTAxNURcXHUxRTYxXFx1MDE2MVxcdTFFNjdcXHUxRTYzXFx1MUU2OVxcdTAyMTlcXHUwMTVGXFx1MDIzRlxcdUE3QTlcXHVBNzg1XFx1MUU5Ql0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwidFwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDc0XFx1MjRFM1xcdUZGNTRcXHUxRTZCXFx1MUU5N1xcdTAxNjVcXHUxRTZEXFx1MDIxQlxcdTAxNjNcXHUxRTcxXFx1MUU2RlxcdTAxNjdcXHUwMUFEXFx1MDI4OFxcdTJDNjZcXHVBNzg3XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ0elwiLFxyXG4gICAgbGV0dGVyczogL1tcXHVBNzI5XS9nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgYmFzZTogXCJ1XCIsXHJcbiAgICBsZXR0ZXJzOlxyXG4gICAgICAvW1xcdTAwNzVcXHUyNEU0XFx1RkY1NVxcdTAwRjlcXHUwMEZBXFx1MDBGQlxcdTAxNjlcXHUxRTc5XFx1MDE2QlxcdTFFN0JcXHUwMTZEXFx1MDBGQ1xcdTAxRENcXHUwMUQ4XFx1MDFENlxcdTAxREFcXHUxRUU3XFx1MDE2RlxcdTAxNzFcXHUwMUQ0XFx1MDIxNVxcdTAyMTdcXHUwMUIwXFx1MUVFQlxcdTFFRTlcXHUxRUVGXFx1MUVFRFxcdTFFRjFcXHUxRUU1XFx1MUU3M1xcdTAxNzNcXHUxRTc3XFx1MUU3NVxcdTAyODldL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3NlxcdTI0RTVcXHVGRjU2XFx1MUU3RFxcdTFFN0ZcXHUwMjhCXFx1QTc1RlxcdTAyOENdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInZ5XCIsXHJcbiAgICBsZXR0ZXJzOiAvW1xcdUE3NjFdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcIndcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3N1xcdTI0RTZcXHVGRjU3XFx1MUU4MVxcdTFFODNcXHUwMTc1XFx1MUU4N1xcdTFFODVcXHUxRTk4XFx1MUU4OVxcdTJDNzNdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInhcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OFxcdTI0RTdcXHVGRjU4XFx1MUU4QlxcdTFFOERdL2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBiYXNlOiBcInlcIixcclxuICAgIGxldHRlcnM6IC9bXFx1MDA3OVxcdTI0RThcXHVGRjU5XFx1MUVGM1xcdTAwRkRcXHUwMTc3XFx1MUVGOVxcdTAyMzNcXHUxRThGXFx1MDBGRlxcdTFFRjdcXHUxRTk5XFx1MUVGNVxcdTAxQjRcXHUwMjRGXFx1MUVGRl0vZyxcclxuICB9LFxyXG4gIHtcclxuICAgIGJhc2U6IFwielwiLFxyXG4gICAgbGV0dGVyczogL1tcXHUwMDdBXFx1MjRFOVxcdUZGNUFcXHUwMTdBXFx1MUU5MVxcdTAxN0NcXHUwMTdFXFx1MUU5M1xcdTFFOTVcXHUwMUI2XFx1MDIyNVxcdTAyNDBcXHUyQzZDXFx1QTc2M10vZyxcclxuICB9LFxyXG5dO1xyXG5jb25zdCBkb21haW5zID0gW1xyXG4gIFwiLmNvbVwiLFxyXG4gIFwiLm9yZ1wiLFxyXG4gIFwiLm5ldFwiLFxyXG4gIFwiLmFjXCIsXHJcbiAgXCIuYWRcIixcclxuICBcIi5hZVwiLFxyXG4gIFwiLmFmXCIsXHJcbiAgXCIuYWdcIixcclxuICBcIi5haVwiLFxyXG4gIFwiLmFsXCIsXHJcbiAgXCIuYW1cIixcclxuICBcIi5hb1wiLFxyXG4gIFwiLmFxXCIsXHJcbiAgXCIuYXJcIixcclxuICBcIi5hc1wiLFxyXG4gIFwiLmF0XCIsXHJcbiAgXCIuYXVcIixcclxuICBcIi5hd1wiLFxyXG4gIFwiLmF4XCIsXHJcbiAgXCIuYXpcIixcclxuICBcIi5iYVwiLFxyXG4gIFwiLmJiXCIsXHJcbiAgXCIuYmRcIixcclxuICBcIi5iZVwiLFxyXG4gIFwiLmJmXCIsXHJcbiAgXCIuYmdcIixcclxuICBcIi5iaFwiLFxyXG4gIFwiLmJpXCIsXHJcbiAgXCIuYmpcIixcclxuICBcIi5ibVwiLFxyXG4gIFwiLmJuXCIsXHJcbiAgXCIuYm9cIixcclxuICBcIi5icVwiLFxyXG4gIFwiLmJyXCIsXHJcbiAgXCIuYnNcIixcclxuICBcIi5idFwiLFxyXG4gIFwiLmJ3XCIsXHJcbiAgXCIuYnlcIixcclxuICBcIi5ielwiLFxyXG4gIFwiLmNhXCIsXHJcbiAgXCIuY2NcIixcclxuICBcIi5jZFwiLFxyXG4gIFwiLmNmXCIsXHJcbiAgXCIuY2dcIixcclxuICBcIi5jaFwiLFxyXG4gIFwiLmNpXCIsXHJcbiAgXCIuY2tcIixcclxuICBcIi5jbFwiLFxyXG4gIFwiLmNtXCIsXHJcbiAgXCIuY25cIixcclxuICBcIi5jb1wiLFxyXG4gIFwiLmNyXCIsXHJcbiAgXCIuY3VcIixcclxuICBcIi5jdlwiLFxyXG4gIFwiLmN3XCIsXHJcbiAgXCIuY3hcIixcclxuICBcIi5jeVwiLFxyXG4gIFwiLmN6XCIsXHJcbiAgXCIuZGVcIixcclxuICBcIi5kalwiLFxyXG4gIFwiLmRrXCIsXHJcbiAgXCIuZG1cIixcclxuICBcIi5kb1wiLFxyXG4gIFwiLmR6XCIsXHJcbiAgXCIuZWNcIixcclxuICBcIi5lZVwiLFxyXG4gIFwiLmVnXCIsXHJcbiAgXCIuZWhcIixcclxuICBcIi5lclwiLFxyXG4gIFwiLmVzXCIsXHJcbiAgXCIuZXRcIixcclxuICBcIi5ldVwiLFxyXG4gIFwiLmZpXCIsXHJcbiAgXCIuZmpcIixcclxuICBcIi5ma1wiLFxyXG4gIFwiLmZtXCIsXHJcbiAgXCIuZm9cIixcclxuICBcIi5mclwiLFxyXG4gIFwiLmdhXCIsXHJcbiAgXCIuZ2RcIixcclxuICBcIi5nZVwiLFxyXG4gIFwiLmdmXCIsXHJcbiAgXCIuZ2dcIixcclxuICBcIi5naFwiLFxyXG4gIFwiLmdpXCIsXHJcbiAgXCIuZ2xcIixcclxuICBcIi5nbVwiLFxyXG4gIFwiLmduXCIsXHJcbiAgXCIuZ3BcIixcclxuICBcIi5ncVwiLFxyXG4gIFwiLmdyXCIsXHJcbiAgXCIuZ3NcIixcclxuICBcIi5ndFwiLFxyXG4gIFwiLmd1XCIsXHJcbiAgXCIuZ3dcIixcclxuICBcIi5neVwiLFxyXG4gIFwiLmhrXCIsXHJcbiAgXCIuaG1cIixcclxuICBcIi5oblwiLFxyXG4gIFwiLmhyXCIsXHJcbiAgXCIuaHRcIixcclxuICBcIi5odVwiLFxyXG4gIFwiLmlkXCIsXHJcbiAgXCIuaWVcIixcclxuICBcIi5pbFwiLFxyXG4gIFwiLmltXCIsXHJcbiAgXCIuaW5cIixcclxuICBcIi5pb1wiLFxyXG4gIFwiLmlxXCIsXHJcbiAgXCIuaXJcIixcclxuICBcIi5pc1wiLFxyXG4gIFwiLml0XCIsXHJcbiAgXCIuamVcIixcclxuICBcIi5qbVwiLFxyXG4gIFwiLmpvXCIsXHJcbiAgXCIuanBcIixcclxuICBcIi5rZVwiLFxyXG4gIFwiLmtnXCIsXHJcbiAgXCIua2hcIixcclxuICBcIi5raVwiLFxyXG4gIFwiLmttXCIsXHJcbiAgXCIua25cIixcclxuICBcIi5rcFwiLFxyXG4gIFwiLmtyXCIsXHJcbiAgXCIua3dcIixcclxuICBcIi5reVwiLFxyXG4gIFwiLmt6XCIsXHJcbiAgXCIubGFcIixcclxuICBcIi5sYlwiLFxyXG4gIFwiLmxjXCIsXHJcbiAgXCIubGlcIixcclxuICBcIi5sa1wiLFxyXG4gIFwiLmxyXCIsXHJcbiAgXCIubHNcIixcclxuICBcIi5sdFwiLFxyXG4gIFwiLmx1XCIsXHJcbiAgXCIubHZcIixcclxuICBcIi5seVwiLFxyXG4gIFwiLm1hXCIsXHJcbiAgXCIubWNcIixcclxuICBcIi5tZFwiLFxyXG4gIFwiLm1lXCIsXHJcbiAgXCIubWdcIixcclxuICBcIi5taFwiLFxyXG4gIFwiLm1rXCIsXHJcbiAgXCIubWxcIixcclxuICBcIi5tbVwiLFxyXG4gIFwiLm1uXCIsXHJcbiAgXCIubW9cIixcclxuICBcIi5tcFwiLFxyXG4gIFwiLm1xXCIsXHJcbiAgXCIubXJcIixcclxuICBcIi5tc1wiLFxyXG4gIFwiLm10XCIsXHJcbiAgXCIubXVcIixcclxuICBcIi5tdlwiLFxyXG4gIFwiLm13XCIsXHJcbiAgXCIubXhcIixcclxuICBcIi5teVwiLFxyXG4gIFwiLm16XCIsXHJcbiAgXCIubmFcIixcclxuICBcIi5uY1wiLFxyXG4gIFwiLm5lXCIsXHJcbiAgXCIubmZcIixcclxuICBcIi5uZ1wiLFxyXG4gIFwiLm5pXCIsXHJcbiAgXCIubmxcIixcclxuICBcIi5ub1wiLFxyXG4gIFwiLm5wXCIsXHJcbiAgXCIubnJcIixcclxuICBcIi5udVwiLFxyXG4gIFwiLm56XCIsXHJcbiAgXCIub21cIixcclxuICBcIi5wYVwiLFxyXG4gIFwiLnBlXCIsXHJcbiAgXCIucGZcIixcclxuICBcIi5wZ1wiLFxyXG4gIFwiLnBoXCIsXHJcbiAgXCIucGtcIixcclxuICBcIi5wbFwiLFxyXG4gIFwiLnBtXCIsXHJcbiAgXCIucG5cIixcclxuICBcIi5wclwiLFxyXG4gIFwiLnBzXCIsXHJcbiAgXCIucHRcIixcclxuICBcIi5wd1wiLFxyXG4gIFwiLnB5XCIsXHJcbiAgXCIucWFcIixcclxuICBcIi5yZVwiLFxyXG4gIFwiLnJvXCIsXHJcbiAgXCIucnNcIixcclxuICBcIi5ydVwiLFxyXG4gIFwiLnJ3XCIsXHJcbiAgXCIuc2FcIixcclxuICBcIi5zYlwiLFxyXG4gIFwiLnNjXCIsXHJcbiAgXCIuc2RcIixcclxuICBcIi5zZVwiLFxyXG4gIFwiLnNnXCIsXHJcbiAgXCIuc2hcIixcclxuICBcIi5zaVwiLFxyXG4gIFwiLnNrXCIsXHJcbiAgXCIuc2xcIixcclxuICBcIi5zbVwiLFxyXG4gIFwiLnNuXCIsXHJcbiAgXCIuc29cIixcclxuICBcIi5zclwiLFxyXG4gIFwiLnNzXCIsXHJcbiAgXCIuc3RcIixcclxuICBcIi5zdVwiLFxyXG4gIFwiLnN2XCIsXHJcbiAgXCIuc3hcIixcclxuICBcIi5zeVwiLFxyXG4gIFwiLnN6XCIsXHJcbiAgXCIudGNcIixcclxuICBcIi50ZFwiLFxyXG4gIFwiLnRmXCIsXHJcbiAgXCIudGdcIixcclxuICBcIi50aFwiLFxyXG4gIFwiLnRqXCIsXHJcbiAgXCIudGtcIixcclxuICBcIi50bFwiLFxyXG4gIFwiLnRtXCIsXHJcbiAgXCIudG5cIixcclxuICBcIi50b1wiLFxyXG4gIFwiLnRyXCIsXHJcbiAgXCIudHRcIixcclxuICBcIi50dlwiLFxyXG4gIFwiLnR3XCIsXHJcbiAgXCIudHpcIixcclxuICBcIi51YVwiLFxyXG4gIFwiLnVnXCIsXHJcbiAgXCIudWtcIixcclxuICBcIi51c1wiLFxyXG4gIFwiLnV5XCIsXHJcbiAgXCIudXpcIixcclxuICBcIi52YVwiLFxyXG4gIFwiLnZjXCIsXHJcbiAgXCIudmVcIixcclxuICBcIi52Z1wiLFxyXG4gIFwiLnZpXCIsXHJcbiAgXCIudm5cIixcclxuICBcIi52dVwiLFxyXG4gIFwiLndmXCIsXHJcbiAgXCIud3NcIixcclxuICBcIi55ZVwiLFxyXG4gIFwiLnl0XCIsXHJcbiAgXCIuemFcIixcclxuICBcIi56bVwiLFxyXG4gIFwiLnp3XCIsXHJcbl07XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVEaWFjcml0aWNzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHREaWFjcml0aWNzUmVtb3ZhbE1hcC5yZWR1Y2UoKHJlc3VsdCwgbGV0dGVyKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXN1bHQucmVwbGFjZShsZXR0ZXIubGV0dGVycywgbGV0dGVyLmJhc2UpO1xyXG4gICAgfSwgdGhpcyk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBTUEVDSUFMX0NIQVJBQ1RFUlMgPSBcIlxcXFxcXFxcLyAhP0AjJCVeJiooKV8rOi57fSw7XFxcXC0nYGDigJnigJhcXFwi4oCUXCI7XHJcbmNvbnN0IFZPV0VMUyA9IFwiYWVpb3VBRUlPVcOgw6jDrMOyw7nDgMOIw4zDksOZw6HDqcOtw7PDusO9w4HDicONw5PDmsOdw6LDqsOuw7TDu8OCw4rDjsOUw5vDo8Oxw7XDg8ORw5XDpMOrw6/DtsO8w7/DhMOLw4/DlsOcxbjDp8OHw5/DmMO4w4XDpcOGw6bFk1wiO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlU3BlY2lhbENoYXJhY3RlcnNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlKG5ldyBSZWdFeHAoYFske1NQRUNJQUxfQ0hBUkFDVEVSU31dYCwgXCJnaVwiKSwgXCJcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJyZW1vdmVBbGxCdXRMZXR0ZXJzXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9Mb3dlckNhc2UoKS5yZW1vdmVEaWFjcml0aWNzKCkucmVtb3ZlU3BlY2lhbENoYXJhY3RlcnMoKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNvbmNlYWxcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZXh0cmEpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UobmV3IFJlZ0V4cChgW14ke1NQRUNJQUxfQ0hBUkFDVEVSU30ke2V4dHJhfV1gLCBcImdpXCIpLCBcIuKBjlwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcImNvbmNlYWxNaWRkbGVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoZXh0cmEpIHtcclxuICAgIHJldHVybiB0aGlzLmxlbmd0aCA8IDMgPyB0aGlzIDogdGhpc1swXSArIHRoaXMuc3Vic3RyaW5nKDEsIHRoaXMubGVuZ3RoIC0gMSkuY29uY2VhbChleHRyYSkgKyB0aGlzW3RoaXMubGVuZ3RoIC0gMV07XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJjYXBpdGFsaXplXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnNsaWNlKDEpO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwicmVtb3ZlSFRNTFwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlcGxhY2UoXCI+XCIsIFwiXFx1MjI3QlwiKS5yZXBsYWNlKFwiPFwiLCBcIlxcdTIyN0FcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU3RyaW5nLnByb3RvdHlwZSwgXCJwYXJzZVN5bWJvbHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlQWxsKFwiJlwiLCBcIiZhbXA7XCIpLnJlcGxhY2UoXCI8XCIsIFwiJmx0O1wiKS5yZXBsYWNlKFwiPlwiLCBcIiZndDtcIikucmVwbGFjZUFsbChcIiNcIiwgXCImbnVtO1wiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBcInJlcGxhY2VBcnJheVwiLCB7XHJcbiAgdmFsdWU6IGZ1bmN0aW9uIChmaW5kLCByZXBsYWNlKSB7XHJcbiAgICB2YXIgcmVwbGFjZVN0cmluZyA9IHRoaXM7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcmVwbGFjZVN0cmluZyA9IHJlcGxhY2VTdHJpbmcucmVwbGFjZShmaW5kW2ldLCByZXBsYWNlW2ldKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXBsYWNlU3RyaW5nO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0cmluZy5wcm90b3R5cGUsIFwibWFza1VSTHNcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlQXJyYXkoW1wiaHR0cHM6Ly9cIiwgXCJodHRwOi8vXCJdLCBcIm5vcGU6Ly9cIikucmVwbGFjZUFycmF5KGRvbWFpbnMsIFwiLm5vcGVcIik7XHJcbiAgfSxcclxufSk7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoTnVtYmVyLnByb3RvdHlwZSwgXCJtYWtlUmVhZGFibGVcIiwge1xyXG4gIHZhbHVlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuICB9LFxyXG59KTtcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShOdW1iZXIucHJvdG90eXBlLCBcIm1ha2VQZXJjZW50YWdlXCIsIHtcclxuICB2YWx1ZTogZnVuY3Rpb24gKGRlY2ltYWxzKSB7XHJcbiAgICBpZiAoZGVjaW1hbHMgPT09IHVuZGVmaW5lZCkgZGVjaW1hbHMgPSAyO1xyXG4gICAgcmV0dXJuIGAkeyh0aGlzICogMTAwKS50b0ZpeGVkKGRlY2ltYWxzKX0lYDtcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHNvcnRPYmplY3QgPSAob2JqLCBkaXJlY3Rpb24pID0+IHtcclxuICBsZXQgYXJyID0gW107XHJcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICBhcnIucHVzaChba2V5LCBvYmpba2V5XV0pO1xyXG4gIH1cclxuICBhcnIuc29ydCgoYSwgYikgPT4gKGRpcmVjdGlvbiA/IGFbMV0gLSBiWzFdIDogYlsxXSAtIGFbMV0pKTtcclxuICBsZXQgb2JqU29ydGVkID0ge307XHJcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IChvYmpTb3J0ZWRbaXRlbVswXV0gPSBpdGVtWzFdKSk7XHJcbiAgLy9hcnIuc29ydChmdW5jdGlvbihhLCBiKSB7IGEudmFsdWUudG9Mb3dlckNhc2UoKS5sb2NhbGVDb21wYXJlKGIudmFsdWUudG9Mb3dlckNhc2UoKSk7IH0pOyAvL3VzZSB0aGlzIHRvIHNvcnQgYXMgc3RyaW5nc1xyXG4gIHJldHVybiBvYmpTb3J0ZWQ7IC8vIHJldHVybnMgYXJyYXlcclxufTtcclxuIiwiLypcclxuJCA9IGpRdWVyeSA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG52YXIgYm9vdHN0cmFwID0gcmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG52YXIgYW5ndWxhclNhbml0aXplID0gcmVxdWlyZSgnYW5ndWxhci1zYW5pdGl6ZScpO1xyXG52YXIgYW5ndWxhckFuaW1hdGUgPSByZXF1aXJlKCdhbmd1bGFyLWFuaW1hdGUnKTtcclxuKi9cclxuYW5ndWxhci5tb2R1bGUoXCJhcHBcIiwgW1xyXG4gIFwidWkucm91dGVyXCIsXHJcbiAgXCJ1aS5ib290c3RyYXBcIixcclxuICBcIm5nQW5pbWF0ZVwiLFxyXG4gIFwibmdTYW5pdGl6ZVwiLFxyXG4gIFwibmdNYXRlcmlhbFwiLFxyXG4gIFwibmdNZXNzYWdlc1wiLFxyXG4gIFwibmdEcmFnRHJvcFwiLFxyXG4gIFwibmdUYWdzSW5wdXRcIixcclxuICBcInZjUmVjYXB0Y2hhXCIsXHJcbiAgXCJjaGFydC5qc1wiLFxyXG4gIFwidGMuY2hhcnRqc1wiLFxyXG4gIFwiaW5maW5pdGUtc2Nyb2xsXCIsXHJcbl0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICR1cmxTZXJ2aWNlUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XHJcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcIi9ob21lXCIpO1xyXG4gICR1cmxTZXJ2aWNlUHJvdmlkZXIuY29uZmlnLnN0cmljdE1vZGUoZmFsc2UpO1xyXG5cclxuICAkc3RhdGVQcm92aWRlclxyXG4gICAgLnN0YXRlKFwiaG9tZVwiLCB7XHJcbiAgICAgIHVybDogXCIvaG9tZVwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvaG9tZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicG9saWN5XCIsIHtcclxuICAgICAgdXJsOiBcIi9wb2xpY3lcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3BvbGljeS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicHJpbnRcIiwge1xyXG4gICAgICB1cmw6IFwiL3ByaW50XCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wcmludC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiZXhwZXJpZW5jZVwiLCB7XHJcbiAgICAgIHVybDogXCIvZXhwZXJpZW5jZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkV4cGVyaWVuY2VDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9leHBlcmllbmNlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJza2lsbHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3NraWxsc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlNraWxsc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL3NraWxscy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwiaG9iYmllc1wiLCB7XHJcbiAgICAgIHVybDogXCIvaG9iYmllc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkhvYmJpZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9ob2JiaWVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJjb250YWN0XCIsIHtcclxuICAgICAgdXJsOiBcIi9jb250YWN0XCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiQ29udGFjdEN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2NvbnRhY3QuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcIndvcmtvdXRcIiwge1xyXG4gICAgICB1cmw6IFwiL3dvcmtvdXRcIixcclxuICAgICAgY29udHJvbGxlcjogXCJXb3Jrb3V0Q3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCIvd29ya291dC5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicG9zdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL3Bvc3RzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiUG9zdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wb3N0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicHJvZmlsZVwiLCB7XHJcbiAgICAgIHVybDogXCIvcHJvZmlsZVwiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlByb2ZpbGVDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcIi9wcm9maWxlLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJsaXN0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvbGlzdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJMaXN0c0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwibGlzdHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImJ1YmJsZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL2J1YmJsZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJCdWJibGVzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJidWJibGVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJhc3Rlcm9pZHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2FzdGVyb2lkc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIkFzdGVyb2lkc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiYXN0ZXJvaWRzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJsZW1taW5nc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbGVtbWluZ3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJMZW1taW5nc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwibGVtbWluZ3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcImJvdHNcIiwge1xyXG4gICAgICB1cmw6IFwiL2JvdHNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLWFkbWluXCIsIHtcclxuICAgICAgdXJsOiBcIi90ZW50aGluZ3MtYWRtaW5cIixcclxuICAgICAgY29udHJvbGxlcjogXCJUZW5UaGluZ3NBZG1pbkN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLWFkbWluLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJ0ZW50aGluZ3MtZ2FtZVwiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLzpnYW1lXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzR2FtZUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLWdhbWUuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInRlbnRoaW5ncy1zdGF0c1wiLCB7XHJcbiAgICAgIHVybDogXCIvdGVudGhpbmdzLXN0YXRzXCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzU3RhdHNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInRlbnRoaW5ncy1zdGF0cy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwidGVudGhpbmdzLXBsYXlcIiwge1xyXG4gICAgICB1cmw6IFwiL3RlbnRoaW5ncy9wbGF5XCIsXHJcbiAgICAgIGNvbnRyb2xsZXI6IFwiVGVuVGhpbmdzUGxheUN0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwidGVudGhpbmdzLXBsYXkuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotZ29vZ2xlXCIsIHtcclxuICAgICAgdXJsOiBcIi9nb29nbGVcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6R29vZ2xlQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL2dvb2dsZS5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1sb2dvc1wiLCB7XHJcbiAgICAgIHVybDogXCIvbG9nb3NcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6TG9nb3NDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvbG9nb3MuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotYW5pbWFsc1wiLCB7XHJcbiAgICAgIHVybDogXCIvYW5pbWFsc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpBbmltYWxzQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL2FuaW1hbHMuaHRtbFwiLFxyXG4gICAgfSlcclxuICAgIC5zdGF0ZShcInF1aXotc2tlbGV0b25zXCIsIHtcclxuICAgICAgdXJsOiBcIi9za2VsZXRvbnNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJRdWl6U2tlbGV0b25zQ3RybFwiLFxyXG4gICAgICB0ZW1wbGF0ZVVybDogXCJxdWl6emVzL3NrZWxldG9ucy5odG1sXCIsXHJcbiAgICB9KVxyXG4gICAgLnN0YXRlKFwicXVpei1tb3ZpZXNcIiwge1xyXG4gICAgICB1cmw6IFwiL21vdmllc1wiLFxyXG4gICAgICBjb250cm9sbGVyOiBcIlF1aXpNb3ZpZXNDdHJsXCIsXHJcbiAgICAgIHRlbXBsYXRlVXJsOiBcInF1aXp6ZXMvbW92aWVzLmh0bWxcIixcclxuICAgIH0pXHJcbiAgICAuc3RhdGUoXCJjaGFyYWRlc1wiLCB7XHJcbiAgICAgIHVybDogXCIvY2hhcmFkZXNcIixcclxuICAgICAgY29udHJvbGxlcjogXCJDaGFyYWRlc0N0cmxcIixcclxuICAgICAgdGVtcGxhdGVVcmw6IFwiL2NoYXJhZGVzLmh0bWxcIixcclxuICAgIH0pO1xyXG5cclxuICAkbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUoe1xyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIHJlcXVpcmVCYXNlOiBmYWxzZSxcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnV2ViU29ja2V0U3ZjJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICR0aW1lb3V0KSB7XHJcbiAgZnVuY3Rpb24gd2Vic29ja2V0SG9zdCgpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonKSB7XHJcbiAgICAgIHJldHVybiBcIndzczovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJ3czovL1wiICsgd2luZG93LmxvY2F0aW9uLmhvc3Q7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgY29ubmVjdGlvbjtcclxuICB2YXIgY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KHdlYnNvY2tldEhvc3QoKSk7XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY29ubmVjdGVkJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdXZWJzb2NrZXQgY2xvc2VkLiBSZWNvbm5lY3RpbmcuLi4nKTtcclxuICAgICAgJHRpbWVvdXQoY29ubmVjdCwgMTAwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbm5lY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJFcnJvcjogXCIgKyBlICsgXCIgLSBTdGF0ZTogXCIgKyBjb25uZWN0aW9uLnJlYWR5U3RhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBwYXlsb2FkID0gSlNPTi5wYXJzZShlLmRhdGEpO1xyXG4gICAgICAkcm9vdFNjb3BlLiRicm9hZGNhc3QoJ3dzOicgKyBwYXlsb2FkLnRvcGljLCBwYXlsb2FkLmRhdGEpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICB0aGlzLnNlbmQgPSBmdW5jdGlvbiAodG9waWMsIGRhdGEpIHtcclxuICAgIHZhciBqc29uID0gSlNPTi5zdHJpbmdpZnkoe3RvcGljOiB0b3BpYywgZGF0YTogZGF0YX0pO1xyXG4gICAgY29ubmVjdGlvbi5zZW5kKGpzb24pO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuY29ubmVjdCA9IGNvbm5lY3Q7XHJcblxyXG59KS5ydW4oZnVuY3Rpb24gKFdlYlNvY2tldFN2Yykge1xyXG4gIFdlYlNvY2tldFN2Yy5jb25uZWN0KCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQXBwQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBMYW5ndWFnZVN2YywgVXNlclN2YywgJG1kVG9hc3QpIHtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiJWNZb3Ugc25lYWt5IGJ1Z2dlciFcIixcclxuICAgIFwiZm9udDogMmVtIHNhbnMtc2VyaWY7IGNvbG9yOiBEb2RnZXJCbHVlOyB0ZXh0LXNoYWRvdzogMnB4IDAgMCAjNDQ0LCAtMnB4IDAgMCAjNDQ0LCAwIDJweCAwICM0NDQsIDAgLTJweCAwICM0NDQsIDFweCAxcHggIzQ0NCwgLTFweCAtMXB4IDAgIzQ0NCwgMXB4IC0xcHggMCAjNDQ0LCAtMXB4IDFweCAwICM0NDQ7XCIsXHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhcclxuICAgIFwiSSdtIGdsYWQgeW91J3JlIGN1cmlvdXMgd2hldGhlciBzb21ldGhpbmcgaXMgcG9wcGluZyB1cCBpbiBoZXJlLiBJJ20gYSBiaXQgb2YgYSBzdGlja2xlciB3aGVuIGl0IGNvbWVzIHRvIG1lc3NhZ2VzIGluIHRoZSBjb25zb2xlIHNvIEkgdHJ5IHRvIG1ha2Ugc3VyZSBvbmx5IHRoaW5ncyBJIHdhbnQgYXJlIHZpc2libGUuIFRoYXQgYmVpbmcgc2FpZCwgaWYgdGhlcmUgaXMgYSBiaWcgZXJyb3IgaGVyZSwgSSB3b3VsZCByZWFsbHkgYXBwcmVjaWF0ZSB5b3UgdGVsbGluZyBtZSBzbyBJIGNhbiBnZXQgcmlkIG9mIGl0IVwiLFxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coXHJcbiAgICBcIlRoZSBjb2RlIGZvciBteSByZXN1bWUgaXMgaG9zdGVkIG9uIEdpdGh1YiBpZiB5b3UgcmVhbGx5IHdhbnQgdG8gZ28gaW50byBhbGwgdGhpcyEgPT4gaHR0cHM6Ly9naXRodWIuY29tL0ZsYW5kZXJzQnVyZ2VyL3Jlc3VtZVwiLFxyXG4gICk7XHJcblxyXG4gICRzY29wZS50b2FzdCA9IChtZXNzYWdlKSA9PiB7XHJcbiAgICAkbWRUb2FzdC5zaG93KFxyXG4gICAgICAkbWRUb2FzdFxyXG4gICAgICAgIC5zaW1wbGUoKVxyXG4gICAgICAgIC5wYXJlbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b2FzdFwiKSlcclxuICAgICAgICAudGV4dENvbnRlbnQobWVzc2FnZSlcclxuICAgICAgICAucG9zaXRpb24oXCJ0b3AgcmlnaHRcIilcclxuICAgICAgICAuaGlkZURlbGF5KDMwMDApLFxyXG4gICAgKTtcclxuICB9O1xyXG4gIC8qXHJcbiAgICAkKGRvY3VtZW50KS5iaW5kKFwia2V5dXAga2V5ZG93blwiLCBmdW5jdGlvbihlKXtcclxuICAgICAgaWYoZS5jdHJsS2V5ICYmIGUua2V5Q29kZSA9PSA4MCl7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgKi9cclxuICAvLyBAdHMtaWdub3JlXHJcbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24gKCkge1xyXG4gICAgJChcIi5sb2FkaW5nXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIuY2hlY2tib3gtbWVudVwiKS5vbihcImNoYW5nZVwiLCBcImlucHV0W3R5cGU9J2NoZWNrYm94J11cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS5jbG9zZXN0KFwibGlcIikudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIiwgdGhpcy5jaGVja2VkKTtcclxuICB9KTtcclxuXHJcbiAgJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5hbGxvdy1mb2N1c1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLnRoZW1lQ291bnRlciA9IDY7XHJcbiAgJHNjb3BlLnRvZGF5ID0gbmV3IERhdGUoKTtcclxuICAkc2NvcGUueWVhciA9ICRzY29wZS50b2RheS5nZXRGdWxsWWVhcigpO1xyXG4gICRzY29wZS5yYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwKTtcclxuXHJcbiAgJHNjb3BlLmZsaXBUaGVtZSA9ICgpID0+IHtcclxuICAgICQoXCIubG9hZGluZ1wiKS5zaG93KCk7XHJcbiAgICAkKFwiLmNvbnRlbnRcIikuaGlkZSgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIubG9hZGluZ1wiKS5mYWRlT3V0KFwic2xvd1wiKTtcclxuICAgICAgJChcIi5jb250ZW50XCIpLmZhZGVJbihcInNsb3dcIik7XHJcbiAgICB9LCA4MDApO1xyXG4gICAgJHNjb3BlLnRoZW1lQ291bnRlciA9ICRzY29wZS50aGVtZUNvdW50ZXIgPCA2ID8gJHNjb3BlLnRoZW1lQ291bnRlciArIDEgOiAoJHNjb3BlLnRoZW1lQ291bnRlciA9IDEpO1xyXG4gIH07XHJcblxyXG4gICQuZ2V0SlNPTihcIi9za2lsbHMuanNvblwiLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgJHNjb3BlLnNraWxscyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICByZXR1cm4gc2tpbGwuZW5hYmxlZDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAkLmdldEpTT04oXCIvaG9iYmllcy5qc29uXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAkc2NvcGUuaG9iYmllcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICQuZ2V0SlNPTihcIi9leHBlcmllbmNlLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5qb2JzID0gZGF0YTtcclxuICAgICRzY29wZS5qb2JzLmZvckVhY2goKGpvYikgPT4ge1xyXG4gICAgICBqb2Iuc3RhcnREYXRlID0gbmV3IERhdGUoam9iLnN0YXJ0RGF0ZSk7XHJcbiAgICAgIGlmIChqb2IuZW5kRGF0ZSkgam9iLmVuZERhdGUgPSBuZXcgRGF0ZShqb2IuZW5kRGF0ZSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgJC5nZXRKU09OKFwiL2NoYXJhZGVzLmpzb25cIiwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICRzY29wZS5jaGFyYWRlcyA9IGRhdGE7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5nZXRUaW1lU3BhbiA9IChqb2IpID0+IHtcclxuICAgIHJldHVybiBqb2Iuc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyAoam9iLmVuZERhdGUgPyBcIiAtIFwiICsgam9iLmVuZERhdGUuZ2V0RnVsbFllYXIoKSA6IFwiIC0gVG9kYXlcIik7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmxhbmd1YWdlcyA9IExhbmd1YWdlU3ZjLmxhbmd1YWdlcztcclxuXHJcbiAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBMYW5ndWFnZVN2Yy5nZXRMYW5ndWFnZSgpO1xyXG5cclxuICAkc2NvcGUuc2VsZWN0TGFuZ3VhZ2UgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICRzY29wZS5zZWxlY3RlZExhbmd1YWdlID0gTGFuZ3VhZ2VTdmMuc2V0TGFuZ3VhZ2UobGFuZ3VhZ2UpO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5ob3ZlcmRpdiA9IChlLCBkaXZpZCkgPT4ge1xyXG4gICAgdmFyIGxlZnQgPSBlLmNsaWVudFggKyBcInB4XCI7XHJcbiAgICB2YXIgdG9wID0gZS5jbGllbnRZICsgMjAgKyBcInB4XCI7XHJcblxyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdmlkKTtcclxuXHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcImxlZnRcIiwgbGVmdCk7XHJcbiAgICAkKFwiI1wiICsgZGl2aWQpLmNzcyhcInRvcFwiLCB0b3ApO1xyXG5cclxuICAgICQoXCIjXCIgKyBkaXZpZCkudG9nZ2xlKCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikge1xyXG4gICAgVXNlclN2Yy5sb2dpbih3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGxvZ2luKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkc2NvcGUuJG9uKFwibG9naW5cIiwgKF8sIHVzZXIpID0+IHtcclxuICAgIGxvZ2luKHVzZXIpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBsb2dpbiA9ICh1c2VyKSA9PiB7XHJcbiAgICBpZiAoISRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnVzZXIgPSB1c2VyLl9pZDtcclxuICAgICAgJHNjb3BlLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICAgJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSA9IG5ldyBEYXRlKCRzY29wZS5jdXJyZW50VXNlci5iaXJ0aERhdGUpO1xyXG4gICAgICAkc2NvcGUuJGJyb2FkY2FzdChcImxvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS4kb24oXCJ1cGRhdGVcIiwgKF8sIHVzZXIpID0+IHtcclxuICAgICRzY29wZS5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAkc2NvcGUuY3VycmVudFVzZXIuYmlydGhEYXRlID0gbmV3IERhdGUoJHNjb3BlLmN1cnJlbnRVc2VyLmJpcnRoRGF0ZSk7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICQoXCIjbG9hZGluZy1pY29uXCIpLmZhZGVPdXQoXCJzbG93XCIpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkaW5nXCIsIChfLCB1c2VyKSA9PiB7XHJcbiAgICAkc2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAkKFwiI2xvYWRpbmctaWNvblwiKS5zaG93KCk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS4kb24oXCJsb2FkZWRcIiwgKF8sIHVzZXIpID0+IHtcclxuICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJChcIiNsb2FkaW5nLWljb25cIikuZmFkZU91dChcInNsb3dcIik7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmxvZ291dCA9ICgpID0+IHtcclxuICAgIGZpcmViYXNlXHJcbiAgICAgIC5hdXRoKClcclxuICAgICAgLnNpZ25PdXQoKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gU2lnbi1vdXQgc3VjY2Vzc2Z1bC5cclxuICAgICAgICAkc2NvcGUubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgJHNjb3BlLiRicm9hZGNhc3QoXCJsb2dvdXRcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmZvcm1hdERhdGUgPSAoZGF0ZSkgPT4ge1xyXG4gICAgY29uc3QgbW9udGhzID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xyXG4gICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpICsgXCItXCIgKyBtb250aHNbZGF0ZS5nZXRNb250aCgpXSArIFwiLVwiICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQXN0ZXJvaWRzQ3RybFwiLCBmdW5jdGlvbiAoJGxvY2F0aW9uLCAkc2NvcGUsIEdhbWVTdmMpIHtcclxuICAkc2NvcGUuYW5ub3VuY2UgPSBmYWxzZTtcclxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXTtcclxuICBpZiAoIWNhbnZhcykge1xyXG4gICAgJGxvY2F0aW9uLnBhdGgoXCIvaG9tZVwiKTtcclxuICAgIHJldHVybiBhbGVydChcIlwiKTtcclxuICB9XHJcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICBpZiAoIWN0eCkge1xyXG4gICAgcmV0dXJuICRsb2NhdGlvbi5wYXRoKFwiL2hvbWVcIik7XHJcbiAgfVxyXG4gIGN0eC5mb250ID0gXCIzMHB4IENvbWljIFNhbnMgTVNcIjtcclxuICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBsZXQgc2hvdHMgPSB7fTtcclxuICBjb25zdCBhc3Rlcm9pZHMgPSB7fTtcclxuICBjb25zdCBwb3dlcnVwcyA9IHt9O1xyXG4gIGNvbnN0IGV4cGxvc2lvbnMgPSB7fTtcclxuICBjb25zdCBtYXAgPSB7fTtcclxuICBjb25zdCBzcGFjZXBpY3MgPSAxMDtcclxuICBsZXQgc3BhY2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzcGFjZXBpY3MpO1xyXG4gIGNvbnN0IHBvd2VydXBUeXBlcyA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJzcGVlZFwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiTWF4IFNwZWVkIOKHp1wiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogNCxcclxuICAgICAgICBzaXplOiBbMTQsIDM1XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAubWF4U3BlZWQgKz0gMTAwO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJjb29sZG93blwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiQ29vbGRvd24g4oepXCIsXHJcbiAgICAgIGN5Y2xlOiB7XHJcbiAgICAgICAgcm93czogMSxcclxuICAgICAgICBjb2x1bW5zOiAzLFxyXG4gICAgICAgIHNpemU6IFsxNywgMTddLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuY29vbGRvd24gPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuY29vbGRvd25UaW1lIC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJyYW5nZVwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiRmlyaW5nIFJhbmdlIOKHp1wiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDQsXHJcbiAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICBzaXplOiBbMzAsIDhdLFxyXG4gICAgICAgIGk6IDAsXHJcbiAgICAgICAgZGlyZWN0aW9uOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBpbWc6IG5ldyBJbWFnZSgpLFxyXG4gICAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKHNwYWNlc2hpcCkge1xyXG4gICAgICAgIHNwYWNlc2hpcC5yYW5nZSArPSA1O1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJzaGllbGRcIixcclxuICAgICAgYW5ub3VuY2VtZW50OiBcIlNoaWVsZFwiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDUsXHJcbiAgICAgICAgY29sdW1uczogMSxcclxuICAgICAgICBzaXplOiBbMTksIDE5XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBzcGFjZXNoaXAuc2hpZWxkID0gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwibnVrZVwiLFxyXG4gICAgICBhbm5vdW5jZW1lbnQ6IFwiTnVrZVwiLFxyXG4gICAgICBjeWNsZToge1xyXG4gICAgICAgIHJvd3M6IDEsXHJcbiAgICAgICAgY29sdW1uczogOCxcclxuICAgICAgICBzaXplOiBbMTUsIDE1XSxcclxuICAgICAgICBpOiAwLFxyXG4gICAgICAgIGRpcmVjdGlvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgaW1nOiBuZXcgSW1hZ2UoKSxcclxuICAgICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChzcGFjZXNoaXApIHtcclxuICAgICAgICBmb3IgKHZhciBpIGluIGFzdGVyb2lkcykge1xyXG4gICAgICAgICAgYXN0ZXJvaWRzW2ldLmV4cGxvZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bhd25Bc3Rlcm9pZHMoNSk7XHJcbiAgICAgIH0sXHJcbiAgICB9IC8qXHJcbiAgICAnc2lkZV9jYW5ub25zJyxcclxuICAgICdsYXNlcicsXHJcbiAgICAnc2hpZWxkJyxcclxuICAgICdsaWZlJyxcclxuICAgICdtaXNzaWxlcycsXHJcbiAgICAnbnVrZSdcclxuICAgICovLFxyXG4gIF07XHJcbiAgcG93ZXJ1cFR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHBvd2VydXAsIGksIGFycmF5KSB7XHJcbiAgICBhcnJheVtpXS5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvXCIgKyBwb3dlcnVwLm5hbWUgKyBcIi5wbmdcIjtcclxuICB9KTtcclxuXHJcbiAgdmFyIGV4cGxvc2lvbkltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgZXhwbG9zaW9uSW1hZ2Uuc3JjID0gXCJhc3Rlcm9pZHMvZXhwbG9zaW9uLnBuZ1wiO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwia2V5ZG93blwiLFxyXG4gICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgbWFwW2Uua2V5Q29kZSB8fCBlLndoaWNoXSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgdHJ1ZSxcclxuICApO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgXCJrZXl1cFwiLFxyXG4gICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgbWFwW2Uua2V5Q29kZSB8fCBlLndoaWNoXSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHRydWUsXHJcbiAgKTtcclxuXHJcbiAgJHNjb3BlLmhpZ2hzY29yZSA9IDA7XHJcblxyXG4gIGZ1bmN0aW9uIGV2YWx1YXRlS2V5cygpIHtcclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBpZiAobWFwWzMyXSkge1xyXG4gICAgICAgIC8vU3BhY2VcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLmNvb2xkb3duID09PSAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc2hvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFszN10pIHtcclxuICAgICAgICAvL0xlZnQgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnJvdGF0aW9uID09PSAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAucm90YXRpb24gPSAzNjA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiAtPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM5XSkge1xyXG4gICAgICAgIC8vUmlnaHQgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnJvdGF0aW9uID09PSAzNjApIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNwYWNlc2hpcC5yb3RhdGlvbiArPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWFwWzM4XSkge1xyXG4gICAgICAgIC8vVXAgQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkIDw9IHNwYWNlc2hpcC5tYXhTcGVlZCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkICs9IDU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChzcGFjZXNoaXAuc3BlZWQgPiAwKSB7XHJcbiAgICAgICAgICBzcGFjZXNoaXAuc3BlZWQtLTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1hcFs0MF0pIHtcclxuICAgICAgICAvL0Rvd24gQXJyb3dcclxuICAgICAgICBpZiAoc3BhY2VzaGlwLnNwZWVkID4gMCkge1xyXG4gICAgICAgICAgc3BhY2VzaGlwLnNwZWVkIC09IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAobWFwWzMyXSkge1xyXG4gICAgICAgIHN0YXJ0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNwYWNlc2hpcCgpIHtcclxuICAgIHRoaXMud2lkdGggPSA1MDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gNTA7XHJcbiAgICB0aGlzLnNoaWVsZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yYW5nZSA9IDgwO1xyXG4gICAgdGhpcy5jYW5ub24gPSB7XHJcbiAgICAgIHg6IHRoaXMud2lkdGggLyAyIC0gNC41LFxyXG4gICAgICB5OiB0aGlzLmhlaWdodCAvIDIgLSB0aGlzLmhlaWdodCAqIDAuMDc4MTI1LFxyXG4gICAgfTtcclxuICAgIHRoaXMuY29vbGRvd24gPSAwO1xyXG4gICAgdGhpcy5jb29sZG93blRpbWUgPSAyMDtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbY2FudmFzLndpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiAtIHRoaXMuaGVpZ2h0IC8gMl07XHJcbiAgICB0aGlzLmltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdGhpcy5pbWcuc3JjID0gXCJhc3Rlcm9pZHMvc3BhY2VzaGlwLnBuZ1wiO1xyXG4gICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICB0aGlzLm1heFNwZWVkID0gMTAwMDtcclxuICAgIHRoaXMuYW5nbGUgPSAwO1xyXG4gICAgdGhpcy5yb3RhdGlvbiA9IDA7XHJcblxyXG4gICAgdGhpcy5zaG9vdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5jb29sZG93biA9IHRoaXMuY29vbGRvd25UaW1lO1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBzaG90c1tpZF0gPSBuZXcgU2hvdChpZCwgdGhpcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHRoaXMuc2hpZWxkKSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5hcmModGhpcy5wb3NpdGlvblswXSArIHRoaXMud2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uWzFdICsgdGhpcy5oZWlnaHQgLyAyLCAzMCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYigzNSwgMjM3LCA4NiwgMC41KVwiO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiKDY2LCAxNjgsIDM2LCAwLjgpXCI7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgICB2YXIgYXN0ZXJvaWQgPSBhc3Rlcm9pZHNbaV07XHJcbiAgICAgICAgaWYgKGhpdChhc3Rlcm9pZCwgdGhpcykpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnNoaWVsZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNoaWVsZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBhc3Rlcm9pZC5leHBsb2RlKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZ2FtZU92ZXIoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5hbmdsZSA9IHRoaXMucm90YXRpb247XHJcbiAgICAgIGlmICh0aGlzLmNvb2xkb3duID4gMCkge1xyXG4gICAgICAgIHRoaXMuY29vbGRvd24tLTtcclxuICAgICAgfVxyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIFNob3QoaWQsIHNwYWNlc2hpcCkge1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtcclxuICAgICAgc3BhY2VzaGlwLnBvc2l0aW9uWzBdICtcclxuICAgICAgICBzcGFjZXNoaXAuY2Fubm9uLnggK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueCAqIE1hdGguY29zKCgoc3BhY2VzaGlwLnJvdGF0aW9uIC0gOTApICogTWF0aC5QSSkgLyAxODApLFxyXG4gICAgICBzcGFjZXNoaXAucG9zaXRpb25bMV0gK1xyXG4gICAgICAgIHNwYWNlc2hpcC5jYW5ub24ueSArXHJcbiAgICAgICAgc3BhY2VzaGlwLmNhbm5vbi55ICogTWF0aC5zaW4oKChzcGFjZXNoaXAucm90YXRpb24gLSA5MCkgKiBNYXRoLlBJKSAvIDE4MCksXHJcbiAgICBdO1xyXG4gICAgdGhpcy53aWR0aCA9IDk7XHJcbiAgICB0aGlzLmhlaWdodCA9IDE1O1xyXG4gICAgdGhpcy5hbmdsZSA9IHNwYWNlc2hpcC5hbmdsZTtcclxuICAgIHRoaXMucm90YXRpb24gPSBzcGFjZXNoaXAucm90YXRpb247XHJcbiAgICB0aGlzLnNwZWVkID0gc3BhY2VzaGlwLnNwZWVkICsgNTAwO1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IHNwYWNlc2hpcC5yYW5nZTtcclxuICAgIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLmltZy5zcmMgPSBcImFzdGVyb2lkcy9zaG90LnBuZ1wiO1xyXG5cclxuICAgIHRoaXMubW92ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEFzdGVyb2lkKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLndpZHRoID0gTWF0aC5yYW5kb20oKSAqIDUwICsgMjA7XHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMud2lkdGg7XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RW50cnlQb3NpdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMucm90YXRpb24gPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgdGhpcy5yb3RhdGlvblNwZWVkID0gTWF0aC5yYW5kb20oKSAqIDYgLSAzO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucmFuZG9tKCkgKiAzMDAgKyAyO1xyXG4gICAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuaW1nLnNyYyA9IFwiYXN0ZXJvaWRzL2FzdGVyb2lkXCIgKyAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNikgKyAxKSArIFwiLnBuZ1wiO1xyXG5cclxuICAgIHRoaXMuZXhwbG9kZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgZXhwbG9zaW9uc1t0aGlzLmlkXSA9IG5ldyBFeHBsb3Npb24odGhpcyk7XHJcbiAgICAgIHJldHVybiBkZWxldGUgYXN0ZXJvaWRzW3RoaXMuaWRdO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy5yb3RhdGlvblNwZWVkO1xyXG4gICAgICBpZiAodGhpcy5yb3RhdGlvbiA+IDM2MCkge1xyXG4gICAgICAgIHRoaXMucm90YXRpb24gPSB0aGlzLnJvdGF0aW9uIC0gMzYwO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMucm90YXRpb24gPCAwKSB7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IDM2MCArIHRoaXMucm90YXRpb247XHJcbiAgICAgIH1cclxuICAgICAgZm9yICh2YXIgaSBpbiBzaG90cykge1xyXG4gICAgICAgIHZhciBzaG90ID0gc2hvdHNbaV07XHJcbiAgICAgICAgaWYgKGhpdChzaG90LCB0aGlzKSkge1xyXG4gICAgICAgICAgdGhpcy5leHBsb2RlKCk7XHJcbiAgICAgICAgICB2YXIgcG9pbnRzID0gTWF0aC5mbG9vcigoc2hvdC5zcGVlZCAtIDUwMCkgLyAxMCArIDcwIC0gdGhpcy53aWR0aCk7XHJcbiAgICAgICAgICBpZiAoTWF0aC5mbG9vcigocG9pbnRzICsgJHNjb3BlLnNjb3JlKSAvIDEwMCkgPiBNYXRoLmZsb29yKCRzY29wZS5zY29yZSAvIDEwMCkpIHtcclxuICAgICAgICAgICAgc3Bhd25Qb3dlcnVwKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkc2NvcGUuc2NvcmUgKz0gcG9pbnRzO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgZGVsZXRlIHNob3RzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEV4cGxvc2lvbihvYmplY3QpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbb2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV1dO1xyXG4gICAgdGhpcy53aWR0aCA9IG9iamVjdC53aWR0aDtcclxuICAgIHRoaXMuaGVpZ2h0ID0gb2JqZWN0LmhlaWdodDtcclxuICAgIHRoaXMuc3BlZWQgPSAwO1xyXG4gICAgdGhpcy5hbmdsZSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICB0aGlzLmN5Y2xlID0ge1xyXG4gICAgICByb3dzOiA2LFxyXG4gICAgICBjb2x1bW5zOiA4LFxyXG4gICAgICBzaXplOiBbMjU2LCAyNTZdLFxyXG4gICAgICBpOiAwLFxyXG4gICAgICBkaXJlY3Rpb246IHRydWUsXHJcbiAgICB9O1xyXG4gICAgdGhpcy5saWZlc3BhbiA9IDQ3O1xyXG4gICAgdGhpcy5pbWcgPSBleHBsb3Npb25JbWFnZTtcclxuXHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMubGlmZXNwYW4tLTtcclxuICAgICAgbW92ZSh0aGlzKTtcclxuICAgICAgaWYgKHRoaXMuY3ljbGUuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZS5pLS07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBQb3dlcnVwKGlkKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLnBvd2VydXAgPSBwb3dlcnVwVHlwZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG93ZXJ1cFR5cGVzLmxlbmd0aCldO1xyXG4gICAgdGhpcy5jeWNsZSA9IHRoaXMucG93ZXJ1cC5jeWNsZTtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAxMDAwO1xyXG4gICAgaWYgKHRoaXMuY3ljbGUuc2l6ZVsxXSA+IHRoaXMuY3ljbGUuc2l6ZVswXSkge1xyXG4gICAgICB0aGlzLmhlaWdodCA9IDQwO1xyXG4gICAgICB0aGlzLndpZHRoID0gTWF0aC5yb3VuZCgodGhpcy5oZWlnaHQgLyB0aGlzLmN5Y2xlLnNpemVbMV0pICogdGhpcy5jeWNsZS5zaXplWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud2lkdGggPSA0MDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBNYXRoLnJvdW5kKCh0aGlzLndpZHRoIC8gdGhpcy5jeWNsZS5zaXplWzBdKSAqIHRoaXMuY3ljbGUuc2l6ZVsxXSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnBvc2l0aW9uID0gZ2V0RW50cnlQb3NpdGlvbih0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB0aGlzLmltZyA9IHRoaXMucG93ZXJ1cC5pbWc7XHJcbiAgICB0aGlzLmFuZ2xlID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgIHRoaXMuc3BlZWQgPSBNYXRoLnJhbmRvbSgpICogMTUwICsgNTA7XHJcbiAgICB2YXIgZGVsYXkgPSA1O1xyXG4gICAgdGhpcy5tb3ZlID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBwb3dlcnVwc1t0aGlzLmlkXTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaGl0KHNwYWNlc2hpcCwgdGhpcykpIHtcclxuICAgICAgICAkc2NvcGUuYW5ub3VuY2UgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5hbm5vdW5jZW1lbnQgPSB0aGlzLnBvd2VydXAuYW5ub3VuY2VtZW50O1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICRzY29wZS5hbm5vdW5jZSA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHRoaXMucG93ZXJ1cC5hY3RpdmF0ZShzcGFjZXNoaXApO1xyXG4gICAgICAgIHJldHVybiBkZWxldGUgcG93ZXJ1cHNbdGhpcy5pZF07XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5saWZlc3Bhbi0tO1xyXG4gICAgICBtb3ZlKHRoaXMpO1xyXG4gICAgICBpZiAoZGVsYXkgPD0gMCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlLmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS5pKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY3ljbGUuaS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxheSA9IDU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVsYXktLTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG1vdmUob2JqZWN0KSB7XHJcbiAgICBvYmplY3QucG9zaXRpb25bMF0gKz0gKG9iamVjdC5zcGVlZCAvIDEwMCkgKiBNYXRoLmNvcygoKG9iamVjdC5hbmdsZSAtIDkwKSAqIE1hdGguUEkpIC8gMTgwKTtcclxuICAgIG9iamVjdC5wb3NpdGlvblsxXSArPSAob2JqZWN0LnNwZWVkIC8gMTAwKSAqIE1hdGguc2luKCgob2JqZWN0LmFuZ2xlIC0gOTApICogTWF0aC5QSSkgLyAxODApO1xyXG4gICAgaWYgKG9iamVjdC5wb3NpdGlvblswXSA+IGNhbnZhcy53aWR0aCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMF0gPSAtb2JqZWN0LndpZHRoO1xyXG4gICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMF0gPCAtb2JqZWN0LndpZHRoKSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblswXSA9IGNhbnZhcy53aWR0aDtcclxuICAgIH1cclxuICAgIGlmIChvYmplY3QucG9zaXRpb25bMV0gPiBjYW52YXMuaGVpZ2h0KSB7XHJcbiAgICAgIG9iamVjdC5wb3NpdGlvblsxXSA9IC1vYmplY3QuaGVpZ2h0O1xyXG4gICAgfSBlbHNlIGlmIChvYmplY3QucG9zaXRpb25bMV0gPCAtb2JqZWN0LmhlaWdodCkge1xyXG4gICAgICBvYmplY3QucG9zaXRpb25bMV0gPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgfVxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC50cmFuc2xhdGUob2JqZWN0LnBvc2l0aW9uWzBdLCBvYmplY3QucG9zaXRpb25bMV0pO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShvYmplY3Qud2lkdGggLyAyLCBvYmplY3QuaGVpZ2h0IC8gMik7XHJcbiAgICBjdHgucm90YXRlKChvYmplY3Qucm90YXRpb24gKiBNYXRoLlBJKSAvIDE4MCk7XHJcbiAgICBpZiAob2JqZWN0LmN5Y2xlKSB7XHJcbiAgICAgIHZhciBjb2x1bW4gPSBvYmplY3QuY3ljbGUuaSAlIG9iamVjdC5jeWNsZS5jb2x1bW5zO1xyXG4gICAgICB2YXIgcm93ID0gTWF0aC5mbG9vcihvYmplY3QuY3ljbGUuaSAvIG9iamVjdC5jeWNsZS5jb2x1bW5zKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZShcclxuICAgICAgICBvYmplY3QuaW1nLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzBdICogY29sdW1uLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzFdICogcm93LFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzBdLFxyXG4gICAgICAgIG9iamVjdC5jeWNsZS5zaXplWzFdLFxyXG4gICAgICAgIC1vYmplY3Qud2lkdGggLyAyLFxyXG4gICAgICAgIC1vYmplY3QuaGVpZ2h0IC8gMixcclxuICAgICAgICBvYmplY3Qud2lkdGgsXHJcbiAgICAgICAgb2JqZWN0LmhlaWdodCxcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChvYmplY3QuY3ljbGUuaSA8PSAwKSB7XHJcbiAgICAgICAgb2JqZWN0LmN5Y2xlLmkgPSAwO1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKG9iamVjdC5jeWNsZS5pID49IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MpIHtcclxuICAgICAgICBvYmplY3QuY3ljbGUuaSA9IG9iamVjdC5jeWNsZS5jb2x1bW5zICogb2JqZWN0LmN5Y2xlLnJvd3MgLSAxO1xyXG4gICAgICAgIG9iamVjdC5jeWNsZS5kaXJlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3R4LmRyYXdJbWFnZShvYmplY3QuaW1nLCAtb2JqZWN0LndpZHRoIC8gMiwgLW9iamVjdC5oZWlnaHQgLyAyLCBvYmplY3Qud2lkdGgsIG9iamVjdC5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHZhciBzcGFjZXNoaXA7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSB0cnVlO1xyXG4gICAgJHNjb3BlLnNjb3JlID0gMDtcclxuICAgIHNwYWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3BhY2VwaWNzKTtcclxuICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgIHNwYWNlc2hpcCA9IG5ldyBTcGFjZXNoaXAoKTtcclxuICAgICRzY29wZS5zY29yZSA9IDA7XHJcbiAgICBzcGF3bkFzdGVyb2lkcyg1KTtcclxuICAgIGF1dG9TcGF3bigpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0RW50cnlQb3NpdGlvbih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICB2YXIgZ3JpZFggPSBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgIHZhciBncmlkWSA9IE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgdmFyIHgsXHJcbiAgICAgIHkgPSAwO1xyXG4gICAgaWYgKGdyaWRYID49IDEpIHtcclxuICAgICAgeCA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGg7XHJcbiAgICAgIGlmICh5ID49IDEpIHtcclxuICAgICAgICB5ID0gMCAtIGhlaWdodDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB5ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgeSA9IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0O1xyXG4gICAgICBpZiAoZ3JpZFkgPj0gMSkge1xyXG4gICAgICAgIHggPSAwIC0gd2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFt4LCB5XTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhpdChvYmplY3QxLCBvYmplY3QyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBvYmplY3QxLnBvc2l0aW9uWzBdIDwgb2JqZWN0Mi5wb3NpdGlvblswXSArIG9iamVjdDIud2lkdGggJiZcclxuICAgICAgb2JqZWN0Mi5wb3NpdGlvblswXSA8IG9iamVjdDEucG9zaXRpb25bMF0gKyBvYmplY3QxLndpZHRoICYmXHJcbiAgICAgIG9iamVjdDEucG9zaXRpb25bMV0gPCBvYmplY3QyLnBvc2l0aW9uWzFdICsgb2JqZWN0Mi5oZWlnaHQgJiZcclxuICAgICAgb2JqZWN0Mi5wb3NpdGlvblsxXSA8IG9iamVjdDEucG9zaXRpb25bMV0gKyBvYmplY3QxLmhlaWdodFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGF1dG9TcGF3bigpIHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhhc3Rlcm9pZHMpLmxlbmd0aCA8IDIwMCkge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH1cclxuICAgIGlmICgkc2NvcGUucGxheWluZykge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhdXRvU3Bhd24oKTtcclxuICAgICAgfSwgc3Bhd25JbnRlcnZhbCgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduSW50ZXJ2YWwoKSB7XHJcbiAgICBpZiAoJHNjb3BlLnNjb3JlIDwgMTAwMCkge1xyXG4gICAgICByZXR1cm4gMTAwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgMjAwMCkge1xyXG4gICAgICByZXR1cm4gOTAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCAzMDAwKSB7XHJcbiAgICAgIHJldHVybiA4MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDQwMDApIHtcclxuICAgICAgcmV0dXJuIDcwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgNTAwMCkge1xyXG4gICAgICByZXR1cm4gNjAwO1xyXG4gICAgfSBlbHNlIGlmICgkc2NvcGUuc2NvcmUgPCA2MDAwKSB7XHJcbiAgICAgIHJldHVybiA1MDA7XHJcbiAgICB9IGVsc2UgaWYgKCRzY29wZS5zY29yZSA8IDcwMDApIHtcclxuICAgICAgcmV0dXJuIDQwMDtcclxuICAgIH0gZWxzZSBpZiAoJHNjb3BlLnNjb3JlIDwgODAwMCkge1xyXG4gICAgICByZXR1cm4gMzAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIDIwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNwYXduQXN0ZXJvaWRzKGFtb3VudCkge1xyXG4gICAgdmFyIGkgPSAwO1xyXG4gICAgZG8ge1xyXG4gICAgICB2YXIgaWQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApO1xyXG4gICAgICBhc3Rlcm9pZHNbaWRdID0gbmV3IEFzdGVyb2lkKGlkKTtcclxuICAgIH0gd2hpbGUgKGkrKyA8PSBhbW91bnQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3Bhd25Qb3dlcnVwKCkge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHBvd2VydXBzKS5sZW5ndGggPCAzKSB7XHJcbiAgICAgIHZhciBpZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMCk7XHJcbiAgICAgIHBvd2VydXBzW2lkXSA9IG5ldyBQb3dlcnVwKGlkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdhbWVPdmVyKCkge1xyXG4gICAgJHNjb3BlLnBsYXlpbmcgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgaW4gYXN0ZXJvaWRzKSB7XHJcbiAgICAgIGFzdGVyb2lkc1tpXS5leHBsb2RlKCk7XHJcbiAgICB9XHJcbiAgICBzaG90cyA9IHt9O1xyXG4gICAgaWYgKCRzY29wZS5sb2dnZWRJbikge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmhpZ2hzY29yZS5hc3Rlcm9pZHMgPCAkc2NvcGUuc2NvcmUpIHtcclxuICAgICAgICAkc2NvcGUuY3VycmVudFVzZXIuaGlnaHNjb3JlLmFzdGVyb2lkcyA9ICRzY29wZS5zY29yZTtcclxuICAgICAgICBHYW1lU3ZjLnNldEhpZ2hzY29yZShcImFzdGVyb2lkc1wiLCAkc2NvcGUuY3VycmVudFVzZXIuX2lkLCAkc2NvcGUuc2NvcmUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hzY29yZSA8ICRzY29wZS5zY29yZSkge1xyXG4gICAgICAgICRzY29wZS5oaWdoc2NvcmUgPSAkc2NvcGUuc2NvcmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFN0YXJ0IGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIGFuZFxyXG4gIC8vIGRyYXcgY2FudmFzLlxyXG5cclxuICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgLy8gUmVnaXN0ZXIgYW4gZXZlbnQgbGlzdGVuZXIgdG9cclxuICAgIC8vIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIGVhY2ggdGltZVxyXG4gICAgLy8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gRHJhdyBjYW52YXMgYm9yZGVyIGZvciB0aGUgZmlyc3QgdGltZS5cclxuICAgIHJlc2l6ZUNhbnZhcygpO1xyXG4gIH1cclxuICAvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXHJcbiAgLy8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcbiAgLy8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXHJcbiAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG4gICAgY29uc29sZS5sb2cod2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSAxO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChjYW52YXMud2lkdGggPD0gNzY4ID8gNTAgOiA1OSk7XHJcbiAgfVxyXG5cclxuICBpbml0aWFsaXplKCk7XHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG5cclxuICB2YXIgdGFsbHkgPSAwO1xyXG4gIHZhciBkaXJlY3Rpb24gPSB0cnVlO1xyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgZm9yICh2YXIgaSBpbiBzaG90cykge1xyXG4gICAgICBpZiAoc2hvdHNbaV0ubGlmZXNwYW4gPD0gMCkge1xyXG4gICAgICAgIGRlbGV0ZSBzaG90c1tpXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG90c1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBhc3Rlcm9pZHMpIHtcclxuICAgICAgYXN0ZXJvaWRzW2ldLm1vdmUoKTtcclxuICAgIH1cclxuICAgIGZvciAoaSBpbiBwb3dlcnVwcykge1xyXG4gICAgICBwb3dlcnVwc1tpXS5tb3ZlKCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgaW4gZXhwbG9zaW9ucykge1xyXG4gICAgICBpZiAoZXhwbG9zaW9uc1tpXS5saWZlc3BhbiA8PSAwKSB7XHJcbiAgICAgICAgZGVsZXRlIGV4cGxvc2lvbnNbaV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZXhwbG9zaW9uc1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGV2YWx1YXRlS2V5cygpO1xyXG4gICAgaWYgKCRzY29wZS5wbGF5aW5nKSB7XHJcbiAgICAgIHNwYWNlc2hpcC5tb3ZlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YXIgZ3JhZGllbnQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgY2FudmFzLndpZHRoLCAwKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMFwiLFxyXG4gICAgICAgIFwicmdiKFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMjU2IC0gKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIpXCIsXHJcbiAgICAgICk7XHJcbiAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChcclxuICAgICAgICBcIjAuMjVcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiLFwiICtcclxuICAgICAgICAgIE1hdGguZmxvb3IoMCArICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjVcIixcclxuICAgICAgICBcInJnYihcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDI1NiAtICgyNTYgKiB0YWxseSkgLyAxMDApICtcclxuICAgICAgICAgIFwiKVwiLFxyXG4gICAgICApO1xyXG4gICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXHJcbiAgICAgICAgXCIwLjc1XCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigwICsgKDI1NiAqIHRhbGx5KSAvIDEwMCkgK1xyXG4gICAgICAgICAgXCIsXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKFxyXG4gICAgICAgIFwiMS4wXCIsXHJcbiAgICAgICAgXCJyZ2IoXCIgK1xyXG4gICAgICAgICAgTWF0aC5mbG9vcigyNTYgLSAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIixcIiArXHJcbiAgICAgICAgICBNYXRoLmZsb29yKDAgKyAoMjU2ICogdGFsbHkpIC8gMTAwKSArXHJcbiAgICAgICAgICBcIilcIixcclxuICAgICAgKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgICBjdHguZm9udCA9IFwiNjBweCBNb25vdG9uXCI7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcIkFzdGVyb2lkc1wiLCBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KFwiQXN0ZXJvaWRzXCIpLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIpO1xyXG4gICAgICBjdHguZm9udCA9IFwiMjBweCBBbGRyaWNoXCI7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICBcIlByZXNzIHNwYWNlIHRvIHN0YXJ0XCIsXHJcbiAgICAgICAgY2FudmFzLndpZHRoIC8gMiAtIGN0eC5tZWFzdXJlVGV4dChcIlByZXNzIHNwYWNlIHRvIHN0YXJ0XCIpLndpZHRoIC8gMixcclxuICAgICAgICBjYW52YXMuaGVpZ2h0IC8gMiArIDIwLFxyXG4gICAgICApO1xyXG4gICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgXCJEZXNpZ25lZCBhbmQgZGV2ZWxvcGVkIGJ5IExhdXJlbnQgRGViYWNrZXJcIixcclxuICAgICAgICBjYW52YXMud2lkdGggLyAyIC0gY3R4Lm1lYXN1cmVUZXh0KFwiRGVzaWduZWQgYW5kIGRldmVsb3BlZCBieSBMYXVyZW50IERlYmFja2VyXCIpLndpZHRoIC8gMixcclxuICAgICAgICBjYW52YXMuaGVpZ2h0IC0gMzAsXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICB0YWxseSArPSBkaXJlY3Rpb24gPyAxIDogLTE7XHJcbiAgICBpZiAodGFsbHkgPiAxMDApIHtcclxuICAgICAgdGFsbHkgPSAxMDA7XHJcbiAgICAgIGRpcmVjdGlvbiA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIGlmICh0YWxseSA8IDApIHtcclxuICAgICAgdGFsbHkgPSAwO1xyXG4gICAgICBkaXJlY3Rpb24gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLnNwYWNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKFwiYXN0ZXJvaWRzL3NwYWNlJyArIHNwYWNlICsgJy5qcGdcIiknLFxyXG4gICAgfTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIkJ1YmJsZXNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWJibGVzLXBhZ2VcIik7XHJcbiAgdmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgdmFyIGJ1YmJsZXMgPSBbXTtcclxuICB2YXIgY29sb3JzID0gW1wiI2ZmYzMwMFwiLCBcIiNmZjU3MzNcIiwgXCIjYzcwMDM5XCIsIFwiIzkwMGMzZVwiLCBcIiM1NzE4NDVcIl07XHJcblxyXG4gIGZ1bmN0aW9uIEJ1YmJsZSgpIHtcclxuICAgIHRoaXMubGlmZXNwYW4gPSAwO1xyXG4gICAgdGhpcy5yYWRpdXMgPSAxO1xyXG4gICAgdGhpcy5leHBhbmRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5zcGVlZCA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDMpO1xyXG4gICAgdGhpcy5jaXJjdW1mZXJlbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNTApICsgNTtcclxuICAgIHRoaXMubWF4UmFkaXVzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMjAwKSArIDIwO1xyXG4gICAgdGhpcy54ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoKTtcclxuICAgIHRoaXMueSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgdGhpcy52eCA9IE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xO1xyXG4gICAgdGhpcy52eSA9IE1hdGgucmFuZG9tKCkgPj0gMC41ID8gMSA6IC0xO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGJ1YmJsZXMuZm9yRWFjaChmdW5jdGlvbiAoYnViYmxlKSB7XHJcbiAgICAgIHZhciBjb2xvciA9IGNvbG9yc1tNYXRoLnJvdW5kKChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cykgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyhidWJibGUueCwgYnViYmxlLnksIGJ1YmJsZS5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yc1tNYXRoLnJvdW5kKChjb2xvcnMubGVuZ3RoICogYnViYmxlLnJhZGl1cykgLyBidWJibGUubWF4UmFkaXVzKV07XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbG9yc1tjb2xvcnMubGVuZ3RoIC0gTWF0aC5yb3VuZCgoY29sb3JzLmxlbmd0aCAqIGJ1YmJsZS5yYWRpdXMpIC8gYnViYmxlLm1heFJhZGl1cyldO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gKGJ1YmJsZS5jaXJjdW1mZXJlbmNlICogYnViYmxlLnJhZGl1cykgLyBidWJibGUubWF4UmFkaXVzO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbHRlckJ1YmJsZXMoKSB7XHJcbiAgICBidWJibGVzLnB1c2gobmV3IEJ1YmJsZSgpKTtcclxuICAgIGJ1YmJsZXMgPSBidWJibGVzLmZpbHRlcihmdW5jdGlvbiAoYnViYmxlKSB7XHJcbiAgICAgIGlmIChidWJibGUucmFkaXVzID09PSBidWJibGUubWF4UmFkaXVzKSB7XHJcbiAgICAgICAgYnViYmxlLmV4cGFuZGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1YmJsZS54ICs9IGJ1YmJsZS52eCAqIGJ1YmJsZS5zcGVlZDtcclxuICAgICAgYnViYmxlLnkgKz0gYnViYmxlLnZ5ICogYnViYmxlLnNwZWVkO1xyXG4gICAgICBidWJibGUucmFkaXVzICs9IGJ1YmJsZS5leHBhbmRpbmcgPyAxIDogLTE7XHJcbiAgICAgIHJldHVybiBidWJibGUucmFkaXVzID4gMDtcclxuICAgIH0pO1xyXG4gICAgZHJhdygpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG4gIH1cclxuXHJcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZpbHRlckJ1YmJsZXMpO1xyXG5cclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gU3RhcnQgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgYW5kXHJcbiAgICAvLyBkcmF3IGNhbnZhcy5cclxuICAgIGluaXRpYWxpemUoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gICAgICAvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG4gICAgICAvLyBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBlYWNoIHRpbWVcclxuICAgICAgLy8gdGhlIHdpbmRvdyBpcyByZXNpemVkLlxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcbiAgICAgIC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXHJcbiAgICAgIHJlc2l6ZUNhbnZhcygpO1xyXG4gICAgfVxyXG4gICAgLy8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxyXG4gICAgLy8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXHJcbiAgICAvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuICAgIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDU1IDogNTYpO1xyXG4gICAgfVxyXG4gIH0pKCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiQ2hhcmFkZXNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuICAkc2NvcGUuc2VsZWN0V29yZCA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgJHNjb3BlLndvcmQgPSAkc2NvcGUuY2hhcmFkZXNbY2F0ZWdvcnldW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICRzY29wZS5jaGFyYWRlc1tjYXRlZ29yeV0ubGVuZ3RoKV07XHJcbiAgfTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJDb250YWN0Q3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBFbWFpbFN2Yykge1xyXG4gICRzY29wZS5vcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNwYW1cIixcclxuICAgICAgdGV4dDogXCJJIGFtIGEgc3BhbSBib3QgYW5kIGF1dG9tYXRpY2FsbHkgY2hlY2sgdGhlIGZpcnN0IG9wdGlvbiBJIGZpbmQhXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk9wcG9ydHVuaXR5XCIsXHJcbiAgICAgIHRleHQ6IFwiWW91IHNlZW0gdG8gaGF2ZSB0aGUgc2tpbGxzIEkgc2VlaywgSSdkIGxpa2UgdG8gdGFsayBhYm91dCBzb21lIG9wcG9ydHVuaXRpZXMuXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlJlc3VtZVwiLFxyXG4gICAgICB0ZXh0OiBcIkkgZGlnIHRoZSByZXN1bWUsIGhvdyBkaWQgeW91IG1ha2UgaXQ/XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk90aGVyXCIsXHJcbiAgICAgIHRleHQ6IFwiU3VtdGluIGVsc2UhXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gICRzY29wZS5jb250YWN0ID0ge1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgcGhvbmU6IFwiXCIsXHJcbiAgICBhYm91dDogXCJcIixcclxuICAgIG1lc3NhZ2U6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUuc2VuZGluZyA9IHRydWU7XHJcbiAgICBFbWFpbFN2Yy5zZW5kKHtcclxuICAgICAgZW1haWw6ICRzY29wZS5jb250YWN0LmVtYWlsLFxyXG4gICAgICBuYW1lOiAkc2NvcGUuY29udGFjdC5uYW1lLFxyXG4gICAgICBwaG9uZTogJHNjb3BlLmNvbnRhY3QucGhvbmUsXHJcbiAgICAgIGFib3V0OiAkc2NvcGUuY29udGFjdC5hYm91dCxcclxuICAgICAgbWVzc2FnZTogJHNjb3BlLmNvbnRhY3QubWVzc2FnZSxcclxuICAgIH0pLnRoZW4oXHJcbiAgICAgIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICRzY29wZS50b2FzdChcIk1lc3NhZ2Ugc2VudFwiKTtcclxuICAgICAgICAkc2NvcGUuc2VudCA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTLiBzdGF0dXM9JWQsIHRleHQ9JXNcIiwgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS50ZXh0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAkc2NvcGUudG9hc3QoXCJNZXNzYWdlIHNlbmQgZmFpbGVkXCIpO1xyXG4gICAgICAgICRzY29wZS5zZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGQUlMRUQuIGVycm9yPVwiLCBlcnIpO1xyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdFeHBlcmllbmNlQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcclxuXHJcbiAgJHNjb3BlLmdldFNraWxsID0gZnVuY3Rpb24oc2tpbGxDb2RlKSB7XHJcbiAgICBpZiAoISRzY29wZS5za2lsbHMpIHJldHVybjtcclxuICAgIHJldHVybiAkc2NvcGUuc2tpbGxzLmZpbmQoZnVuY3Rpb24oc2tpbGwpIHtcclxuICAgICAgcmV0dXJuIHNraWxsLmNvZGUgPT09IHNraWxsQ29kZTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdIb2JiaWVzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR3aW5kb3cpIHtcclxuXHJcbiAgJHNjb3BlLmhvYmJ5U2VsZWN0b3JWaXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICQuZ2V0SlNPTignaHR0cHM6Ly93d3cucmVkZGl0LmNvbS91c2VyL2JlbGdvY2FuYWRpYW4vYWJvdXQvLmpzb24nLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5zZWxlY3RlZEhvYmJ5ID0gJHNjb3BlLmhvYmJpZXNbMF07XHJcblxyXG4gICRzY29wZS5zZWxlY3RIb2JieSA9IGZ1bmN0aW9uIChob2JieSkge1xyXG4gICAgJHNjb3BlLnNlbGVjdGVkSG9iYnkgPSBob2JieTtcclxuICAgICRzY29wZS5ob2JieVNlbGVjdG9yVmlzaWJsZSA9IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5zaG93SG9iYnkgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBhcnJheSkge1xyXG4gICAgaWYgKCF2YWx1ZS5pbWFnZXMpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB2YWx1ZS5pbWFnZXMubGVuZ3RoID4gMDtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdMZW1taW5nc0N0cmwnLCBmdW5jdGlvbiAoJHNjb3BlLCBHYW1lU3ZjKSB7XHJcblxyXG4gIHZhciBMRUZUID0gMDtcclxuICB2YXIgUklHSFQgPSAxO1xyXG5cclxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlbW1pbmdzLXBhZ2UnKTtcclxuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgdmFyIGxlbW1pbmdzSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICBsZW1taW5nc0ltYWdlLnNyYyA9ICdsZW1taW5ncy9sZW1taW5ncy5wbmcnO1xyXG4gIHZhciBkZWNvckltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgZGVjb3JJbWFnZS5zcmMgPSAnbGVtbWluZ3MvZGVjb3IucG5nJztcclxuICB2YXIgbGVtbWluZ3MgPSB7fTtcclxuICB2YXIgc3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICB2YXIgYWN0aW9ucyA9IHtcclxuICAgIHdhbGs6IHtcclxuICAgICAgc3RhcnQ6IFswLCAwXSxcclxuICAgICAgZW5kOiBbMzIwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgaHVoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMzIwLCAwXSxcclxuICAgICAgZW5kOiBbNjQwLCAyMF0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IHRydWVcclxuICAgIH0sXHJcbiAgICBmYWxsOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgODBdLFxyXG4gICAgICBlbmQ6IFsxNjAsIDEwMF0sXHJcbiAgICAgIGNvbHVtbnM6IDQsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgZmx5OiB7XHJcbiAgICAgIHN0YXJ0OiBbMTYwLCA4MF0sXHJcbiAgICAgIGVuZDogWzQ4MCwgMTEwXSxcclxuICAgICAgY29sdW1uczogOCxcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBzdG9wOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMTIwXSxcclxuICAgICAgZW5kOiBbNjQwLCAxNDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMSxcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBjbGltYjoge1xyXG4gICAgICBzdGFydDogWzAsIDE2MF0sXHJcbiAgICAgIGVuZDogWzY0MCwgMTg1XSxcclxuICAgICAgY29sdW1uczogMTYsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgc3RhcnQ6IFswLCAyMDBdLFxyXG4gICAgICBlbmQ6IFs2NDAsIDIyNV0sXHJcbiAgICAgIGNvbHVtbnM6IDE2LFxyXG4gICAgICByb3dzOiAxLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHB1bmNoOiB7XHJcbiAgICAgIHN0YXJ0OiBbMCwgMjQwXSxcclxuICAgICAgZW5kOiBbNjQwLCAzMDBdLFxyXG4gICAgICBjb2x1bW5zOiAxNixcclxuICAgICAgcm93czogMixcclxuICAgICAgcmV2ZXJzZTogZmFsc2VcclxuICAgIH0sXHJcbiAgICBkaWc6IHtcclxuICAgICAgc3RhcnQ6IFswLCAzMjBdLFxyXG4gICAgICBlbmQ6IFszMjAsIDM0NV0sXHJcbiAgICAgIGNvbHVtbnM6IDgsXHJcbiAgICAgIHJvd3M6IDEsXHJcbiAgICAgIHJldmVyc2U6IGZhbHNlXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIExlbW1pbmcoaW5pdCkge1xyXG4gICAgdGhpcy5wb3NpdGlvbiA9IFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoY2FudmFzLndpZHRoIC0gMjAwKSkgKyAxMDAsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChjYW52YXMuaGVpZ2h0IC0gMjAwKSkgKyAxMDBdO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpICogMiA+IDEgPyBMRUZUIDogUklHSFQ7XHJcbiAgICB0aGlzLmFjdCA9IGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbnNbYWN0aW9uXTtcclxuICAgICAgdGhpcy5jeWNsZSA9IDA7XHJcbiAgICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgICAgdGhpcy5oZWlnaHQgPSAodGhpcy5hY3Rpb24uZW5kWzFdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAoMjAgKiAodGhpcy5hY3Rpb24ucm93cyAtIDEpKSkgLyB0aGlzLmFjdGlvbi5yb3dzO1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5hY3QoaW5pdCk7XHJcbiAgICB0aGlzLm1vdmUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uWzBdLCB0aGlzLnBvc2l0aW9uWzFdKTtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLndpZHRoIC8gMiwgdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBMRUZUKSB7XHJcbiAgICAgICAgY3R4LnNjYWxlKC0xLCAxKTtcclxuICAgICAgfVxyXG4gICAgICB2YXIgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgIHZhciByb3cgPSBNYXRoLmZsb29yKHRoaXMuY3ljbGUgLyB0aGlzLmFjdGlvbi5jb2x1bW5zKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZShsZW1taW5nc0ltYWdlLCAodGhpcy53aWR0aCAqIGNvbHVtbikgKyB0aGlzLmFjdGlvbi5zdGFydFswXSwgKCh0aGlzLmhlaWdodCArIDIwKSAqIHJvdykgKyB0aGlzLmFjdGlvbi5zdGFydFsxXSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIDAsIDAsIHRoaXMud2lkdGggKiAyLCB0aGlzLmhlaWdodCAqIDIpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgICBpZiAodGhpcy5hY3Rpb24ucmV2ZXJzZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFuaW1hdGlvbikge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPj0gdGhpcy5hY3Rpb24uY29sdW1ucyAqIHRoaXMuYWN0aW9uLnJvd3MpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24gPSAhdGhpcy5hbmltYXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuY3ljbGUtLTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jeWNsZS0tO1xyXG4gICAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uID0gIXRoaXMuYW5pbWF0aW9uO1xyXG4gICAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jeWNsZSsrO1xyXG4gICAgICAgIGlmICh0aGlzLmN5Y2xlID49IHRoaXMuYWN0aW9uLmNvbHVtbnMgKiB0aGlzLmFjdGlvbi5yb3dzKSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBIYXRjaCgpIHtcclxuICAgIHRoaXMucG9zaXRpb24gPSBbMjAsIDIwXTtcclxuICAgIHRoaXMuYWN0aW9uID0ge1xyXG4gICAgICBzdGFydDogWzAsIDBdLFxyXG4gICAgICBlbmQ6IFs4MiwgNTAwXSxcclxuICAgICAgY29sdW1uczogMSxcclxuICAgICAgcm93czogMTBcclxuICAgIH1cclxuICAgIHRoaXMud2lkdGggPSAodGhpcy5hY3Rpb24uZW5kWzBdIC0gdGhpcy5hY3Rpb24uc3RhcnRbMF0pIC8gdGhpcy5hY3Rpb24uY29sdW1ucztcclxuICAgIHRoaXMuaGVpZ2h0ID0gKHRoaXMuYWN0aW9uLmVuZFsxXSAtIHRoaXMuYWN0aW9uLnN0YXJ0WzFdKSAvIHRoaXMuYWN0aW9uLnJvd3M7XHJcbiAgICB0aGlzLmN5Y2xlID0gMDtcclxuICAgIHRoaXMub3BlbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMucG9zaXRpb25bMF0sIHRoaXMucG9zaXRpb25bMV0pO1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICB2YXIgY29sdW1uLCByb3c7XHJcbiAgICAgIGlmIChzdGFydGVkKSB7XHJcbiAgICAgICAgY29sdW1uID0gdGhpcy5jeWNsZSAlIHRoaXMuYWN0aW9uLmNvbHVtbnM7XHJcbiAgICAgICAgcm93ID0gTWF0aC5mbG9vcih0aGlzLmN5Y2xlIC8gdGhpcy5hY3Rpb24uY29sdW1ucyk7XHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGUgPCA5KSB7XHJcbiAgICAgICAgICB0aGlzLmN5Y2xlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbHVtbiA9IDA7XHJcbiAgICAgICAgcm93ID0gMDtcclxuICAgICAgfVxyXG4gICAgICBjdHguZHJhd0ltYWdlKGRlY29ySW1hZ2UsICh0aGlzLndpZHRoICogY29sdW1uKSArIHRoaXMuYWN0aW9uLnN0YXJ0WzBdLCAodGhpcy5oZWlnaHQgKiByb3cpICsgdGhpcy5hY3Rpb24uc3RhcnRbMV0gLSAxLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCwgMCwgMCwgdGhpcy53aWR0aCAqIDIsIHRoaXMuaGVpZ2h0ICogMik7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzcGF3bkxlbW1pbmcoKSB7XHJcbiAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uKGFjdGlvbikge1xyXG4gICAgICBsZW1taW5nc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDApXSA9IG5ldyBMZW1taW5nKGFjdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cdGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcblx0XHQvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0b1xyXG5cdFx0Ly8gY2FsbCB0aGUgcmVzaXplQ2FudmFzKCkgZnVuY3Rpb24gZWFjaCB0aW1lXHJcblx0XHQvLyB0aGUgd2luZG93IGlzIHJlc2l6ZWQuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblx0XHQvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxyXG5cdFx0cmVzaXplQ2FudmFzKCk7XHJcblx0fVxyXG5cdC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cclxuXHQvLyBSZXNldHMgdGhlIGNhbnZhcyBkaW1lbnNpb25zIHRvIG1hdGNoIHdpbmRvdyxcclxuXHQvLyB0aGVuIGRyYXdzIHRoZSBuZXcgYm9yZGVycyBhY2NvcmRpbmdseS5cclxuXHRmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XHJcblx0XHRjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoY2FudmFzLndpZHRoIDw9IDc2OCA/IDUwIDogMTA1KTtcclxuXHR9XHJcblxyXG5cdGluaXRpYWxpemUoKTtcclxuICBzcGF3bkxlbW1pbmcoKTtcclxuICBsZXQgaGF0Y2ggPSBuZXcgSGF0Y2goKVxyXG4gIGRyYXcoKTtcclxuXHJcbiAgZnVuY3Rpb24gZHJhdygpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGlmICghc3RhcnRlZCkge1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5mb250PSc0MHB4IE1vbm90b24nO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gJzEwJztcclxuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xyXG4gICAgICBjdHgucmVjdCgxNSwgY2FudmFzLmhlaWdodCAtIDQ1LCBjdHgubWVhc3VyZVRleHQoJ1N0YXJ0Jykud2lkdGggKyAyMCwgY3R4Lm1lYXN1cmVUZXh0KCdTdGFydCcpLmhlaWdodCArIGNhbnZhcy5oZWlnaHQgLSA0NSk7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgIGN0eC5maWxsVGV4dCgnU3RhcnQnLCAyMCwgY2FudmFzLmhlaWdodCAtIDUwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZvciAodmFyIGkgaW4gbGVtbWluZ3MpIHtcclxuICAgICAgICBsZW1taW5nc1tpXS5tb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGhhdGNoLm9wZW4oKTtcclxuICAgIHN0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgZHJhdygpO1xyXG4gICAgfSwgMTUwKTtcclxuICB9XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ0xpc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgQ2F0ZWdvcmllc1N2Yykge1xyXG5cclxuICAkc2NvcGUuc2hvd0NhdGVnb3J5ID0gdHJ1ZTtcclxuXHJcbiAgJHNjb3BlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLmdldENhdGVnb3JpZXMoKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgJHNjb3BlLnRhc2tzID0gW107XHJcbiAgICAgIGZvciAodmFyIGkgaW4gJHNjb3BlLmNhdGVnb3JpZXMpIHtcclxuICAgICAgICBmb3IgKHZhciBqIGluICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzKSB7XHJcbiAgICAgICAgICAkc2NvcGUudGFza3MucHVzaCh7XHJcbiAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogJHNjb3BlLmNhdGVnb3JpZXNbaV0ubmFtZSxcclxuICAgICAgICAgICAgXCJ0YXNrXCI6ICRzY29wZS5jYXRlZ29yaWVzW2ldLnRhc2tzW2pdLm5hbWVcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnNlbGVjdENhdGVnb3J5ID0gZnVuY3Rpb24oY2F0ZWdvcnkpIHtcclxuICAgICRzY29wZS5zZWxlY3RlZENhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRUYXNrcyA9IFtdO1xyXG4gICAgJHNjb3BlLnNlbGVjdGFibGVUYXNrcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSBpbiAkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrcykge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLnB1c2goJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3NbaV0pO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLnNob3dDYXRlZ29yeSA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmVudGVyZWRDYXRlZ29yeSA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5uZXdDYXRlZ29yeSA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRzY29wZS5jYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuY2F0ZWdvcmllc1tpXS5uYW1lID09PSBjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RDYXRlZ29yeSgkc2NvcGUuY2F0ZWdvcmllc1tpXSk7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgIENhdGVnb3JpZXNTdmMuYWRkQ2F0ZWdvcnkoe1xyXG4gICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgICAgICRzY29wZS5pbml0KCk7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdENhdGVnb3J5KGNhdGVnb3J5KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZENhdGVnb3J5ID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLm5ld1Rhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IgKHZhciBpIGluICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzKSB7XHJcbiAgICAgIGlmICgkc2NvcGUuc2VsZWN0ZWRDYXRlZ29yeS50YXNrc1tpXS5uYW1lID09PSB0YXNrKSB7XHJcbiAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RUYXNrKCRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzW2ldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKCFmb3VuZCkge1xyXG4gICAgICBDYXRlZ29yaWVzU3ZjLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSwge1xyXG4gICAgICAgIHRhc2s6IHRhc2tcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkQ2F0ZWdvcnkudGFza3MucHVzaCh7IG5hbWU6IHRhc2sgfSk7XHJcbiAgICAgICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGVkVGFza3MsICRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzWyRzY29wZS5zZWxlY3RlZENhdGVnb3J5LnRhc2tzLmxlbmd0aCAtIDFdKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuZW50ZXJlZFRhc2sgPSAnJztcclxuICB9O1xyXG5cclxuICAkc2NvcGUuc2VsZWN0VGFzayA9IGZ1bmN0aW9uICh0YXNrKSB7XHJcbiAgICAkc2NvcGUuYWRkVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0YWJsZVRhc2tzLCB0YXNrKTtcclxuICAgICRzY29wZS5lbnRlcmVkVGFzayA9ICcnO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS51bnNlbGVjdFRhc2sgPSBmdW5jdGlvbiAodGFzaykge1xyXG4gICAgJHNjb3BlLmFkZFRhc2soJHNjb3BlLnNlbGVjdGFibGVUYXNrcywgdGFzayk7XHJcbiAgICAkc2NvcGUucmVtb3ZlVGFzaygkc2NvcGUuc2VsZWN0ZWRUYXNrcywgdGFzayk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmFkZFRhc2sgPSBmdW5jdGlvbih0YXNrTGlzdCwgdGFzaykge1xyXG4gICAgdGFza0xpc3QucHVzaCh0YXNrKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUucmVtb3ZlVGFzayA9IGZ1bmN0aW9uKHRhc2tMaXN0LCB0YXNrKSB7XHJcbiAgICB0YXNrTGlzdC5zcGxpY2UodGFza0xpc3QuaW5kZXhPZih0YXNrKSwgMSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnN0YXJ0UHJpb3JpdGl6aW5nID0gZnVuY3Rpb24oKSB7XHJcbiAgICBDYXRlZ29yaWVzU3ZjLnNldFByaW9yaXR5TGlzdCgkc2NvcGUuc2VsZWN0ZWRUYXNrcyk7XHJcbiAgICAkbG9jYXRpb24ucGF0aCgnL3ByaW9yaXRpemUnKTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUuZ2V0UXVlc3Rpb25zID0gZnVuY3Rpb24oKSB7XHJcbiAgICBpZiAoISRzY29wZS5zZWxlY3RlZFRhc2tzKSByZXR1cm4gJyc7XHJcbiAgICB2YXIgY291bnRlciA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gJHNjb3BlLnNlbGVjdGVkVGFza3MubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICBjb3VudGVyICs9IGk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY291bnRlcjtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJMb2dpbkN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJGxvY2F0aW9uLCBVc2VyU3ZjKSB7XHJcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgRmlyZWJhc2VVSSBXaWRnZXQgdXNpbmcgRmlyZWJhc2UuXHJcbiAgdmFyIHVpID0gbmV3IGZpcmViYXNldWkuYXV0aC5BdXRoVUkoZmlyZWJhc2UuYXV0aCgpKTtcclxuXHJcbiAgJHNjb3BlLiRvbihcImxvZ291dFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIHVpLnJlc2V0KCk7XHJcbiAgICBzdGFydFVJKCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ2luU3VjY2Vzc2Z1bChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLiRlbWl0KFwibG9naW5cIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAkKFwiI21vZGFsLWxvZ2luXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgIC8vJGxvY2F0aW9uLnBhdGgoJy8nKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxvZ2luRmFpbGVkKCkge1xyXG4gICAgJHNjb3BlLnRvYXN0KFwiTG9naW4gRmFpbGVkXCIpO1xyXG4gIH1cclxuXHJcbiAgJHNjb3BlLnRlbGVncmFtTG9naW4gPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgVXNlclN2Yy5hdXRoZW50aWNhdGUoe1xyXG4gICAgICBhdXRoVHlwZTogXCJ0ZWxlZ3JhbVwiLFxyXG4gICAgICBkaXNwbGF5TmFtZTogdXNlci5maXJzdF9uYW1lICsgKHVzZXIubGFzdF9uYW1lID8gXCIgXCIgKyB1c2VyLmxhc3RfbmFtZSA6IFwiXCIpLFxyXG4gICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgdGVsZWdyYW1JZDogdXNlci5pZCxcclxuICAgICAgcGhvdG9VUkw6IHVzZXIucGhvdG9fdXJsLFxyXG4gICAgICBpZFRva2VuOiB1c2VyLmhhc2gsXHJcbiAgICAgIGRhdGE6IHVzZXIsXHJcbiAgICB9KS50aGVuKGxvZ2luU3VjY2Vzc2Z1bCwgbG9naW5GYWlsZWQpO1xyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0VUkoKSB7XHJcbiAgICB1aS5zdGFydChcIiNmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyXCIsIHtcclxuICAgICAgY2FsbGJhY2tzOiB7XHJcbiAgICAgICAgc2lnbkluU3VjY2VzczogZnVuY3Rpb24gKGN1cnJlbnRVc2VyLCBjcmVkZW50aWFsLCByZWRpcmVjdFVybCkge1xyXG4gICAgICAgICAgLy8gTm8gcmVkaXJlY3QuXHJcbiAgICAgICAgICBmaXJlYmFzZVxyXG4gICAgICAgICAgICAuYXV0aCgpXHJcbiAgICAgICAgICAgIC5jdXJyZW50VXNlci5nZXRJZFRva2VuKHRydWUpXHJcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChpZFRva2VuKSB7XHJcbiAgICAgICAgICAgICAgVXNlclN2Yy5hdXRoZW50aWNhdGUoe1xyXG4gICAgICAgICAgICAgICAgYXV0aFR5cGU6IFwiZmlyZWJhc2VcIixcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBjdXJyZW50VXNlci5kaXNwbGF5TmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiBjdXJyZW50VXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHBob3RvVVJMOiBjdXJyZW50VXNlci5waG90b1VSTCxcclxuICAgICAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IGN1cnJlbnRVc2VyLmVtYWlsVmVyaWZpZWQsXHJcbiAgICAgICAgICAgICAgICBpZFRva2VuOiBpZFRva2VuLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogY3VycmVudFVzZXIsXHJcbiAgICAgICAgICAgICAgfSkudGhlbihsb2dpblN1Y2Nlc3NmdWwsIGxvZ2luRmFpbGVkKTtcclxuICAgICAgICAgICAgICAvLyAuLi5cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvclxyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvLyBzaWduSW5GYWlsdXJlIGNhbGxiYWNrIG11c3QgYmUgcHJvdmlkZWQgdG8gaGFuZGxlIG1lcmdlIGNvbmZsaWN0cyB3aGljaFxyXG4gICAgICAgIC8vIG9jY3VyIHdoZW4gYW4gZXhpc3RpbmcgY3JlZGVudGlhbCBpcyBsaW5rZWQgdG8gYW4gYW5vbnltb3VzIHVzZXIuXHJcbiAgICAgICAgc2lnbkluRmFpbHVyZTogZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAvLyBGb3IgbWVyZ2UgY29uZmxpY3RzLCB0aGUgZXJyb3IuY29kZSB3aWxsIGJlXHJcbiAgICAgICAgICAvLyAnZmlyZWJhc2V1aS9hbm9ueW1vdXMtdXBncmFkZS1tZXJnZS1jb25mbGljdCcuXHJcbiAgICAgICAgICBpZiAoZXJyb3IuY29kZSAhPSBcImZpcmViYXNldWkvYW5vbnltb3VzLXVwZ3JhZGUtbWVyZ2UtY29uZmxpY3RcIikge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyBUaGUgY3JlZGVudGlhbCB0aGUgdXNlciB0cmllZCB0byBzaWduIGluIHdpdGguXHJcbiAgICAgICAgICB2YXIgY3JlZCA9IGVycm9yLmNyZWRlbnRpYWw7XHJcbiAgICAgICAgICAvLyBDb3B5IGRhdGEgZnJvbSBhbm9ueW1vdXMgdXNlciB0byBwZXJtYW5lbnQgdXNlciBhbmQgZGVsZXRlIGFub255bW91c1xyXG4gICAgICAgICAgLy8gdXNlci5cclxuICAgICAgICAgIC8vIC4uLlxyXG4gICAgICAgICAgLy8gRmluaXNoIHNpZ24taW4gYWZ0ZXIgZGF0YSBpcyBjb3BpZWQuXHJcbiAgICAgICAgICByZXR1cm4gZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhDcmVkZW50aWFsKGNyZWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdWlTaG93bjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgLy8gVGhlIHdpZGdldCBpcyByZW5kZXJlZC5cclxuICAgICAgICAgIC8vIEhpZGUgdGhlIGxvYWRlci5cclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBzaWduSW5TdWNjZXNzVXJsOiBcIi9ob21lXCIsXHJcbiAgICAgIHNpZ25Jbk9wdGlvbnM6IFtcclxuICAgICAgICAvL2ZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aC5GYWNlYm9va0F1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcclxuICAgICAgXSxcclxuXHJcbiAgICAgIC8vIFdpbGwgdXNlIHBvcHVwIGZvciBJRFAgUHJvdmlkZXJzIHNpZ24taW4gZmxvdyBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0LCByZWRpcmVjdC5cclxuICAgICAgc2lnbkluRmxvdzogXCJwb3B1cFwiLFxyXG4gICAgICAvLyBPdGhlciBjb25maWcgb3B0aW9ucy4uLlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGFydFVJKCk7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICRmaWx0ZXIsIFBvc3RzU3ZjKSB7XHJcblxyXG4gICRzY29wZS5hZGRQb3N0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCRzY29wZS5wb3N0Qm9keSkge1xyXG4gICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xyXG4gICAgICAgIGJvZHk6ICRzY29wZS5wb3N0Qm9keVxyXG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUG9zdHNTdmMuZmV0Y2goKVxyXG4gIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLnBvc3RzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLiRvbignd3M6bmV3X3Bvc3QnLCBmdW5jdGlvbiAoXywgcG9zdCkge1xyXG4gICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIFBvc3RzU3ZjLmdldFBvc3QocG9zdClcclxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgJHNjb3BlLnBvc3RzLnVuc2hpZnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlByb2ZpbGVDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRsb2NhdGlvbiwgVXNlclN2Yykge1xyXG4gIGNvbnN0IGNvdW50cmllcyA9IFtcclxuICAgIHsgbmFtZTogXCJBbmRvcnJhXCIsIGZsYWc6IFwiZmxhZy1hZFwiLCB0aWRiaXQ6IFwiXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgQXJhYiBFbWlyYXRlc1wiLCBmbGFnOiBcImZsYWctYWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFmZ2hhbmlzdGFuXCIsIGZsYWc6IFwiZmxhZy1hZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiLCBmbGFnOiBcImZsYWctYWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFuZ3VpbGxhXCIsIGZsYWc6IFwiZmxhZy1haVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQWxiYW5pYVwiLCBmbGFnOiBcImZsYWctYWxcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkFybWVuaWFcIiwgZmxhZzogXCJmbGFnLWFtXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbmdvbGFcIiwgZmxhZzogXCJmbGFnLWFvXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbnRhcmN0aWNhXCIsIGZsYWc6IFwiZmxhZy1hcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXJnZW50aW5hXCIsIGZsYWc6IFwiZmxhZy1hclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQW1lcmljYW4gU29tb2FcIiwgZmxhZzogXCJmbGFnLWFzXCIgfSxcclxuICAgIHsgbmFtZTogXCJBdXN0cmlhXCIsIGZsYWc6IFwiZmxhZy1hdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXVzdHJhbGlhXCIsIGZsYWc6IFwiZmxhZy1hdVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQXJ1YmFcIiwgZmxhZzogXCJmbGFnLWF3XCIgfSxcclxuICAgIHsgbmFtZTogXCLDhWxhbmQgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctYXhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkF6ZXJiYWlqYW5cIiwgZmxhZzogXCJmbGFnLWF6XCIgfSxcclxuICAgIHsgbmFtZTogXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsIGZsYWc6IFwiZmxhZy1iYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFyYmFkb3NcIiwgZmxhZzogXCJmbGFnLWJiXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYW5nbGFkZXNoXCIsIGZsYWc6IFwiZmxhZy1iZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVsZ2l1bVwiLCBmbGFnOiBcImZsYWctYmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1cmtpbmEgRmFzb1wiLCBmbGFnOiBcImZsYWctYmZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1bGdhcmlhXCIsIGZsYWc6IFwiZmxhZy1iZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmFocmFpblwiLCBmbGFnOiBcImZsYWctYmhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJ1cnVuZGlcIiwgZmxhZzogXCJmbGFnLWJpXCIgfSxcclxuICAgIHsgbmFtZTogXCJCZW5pblwiLCBmbGFnOiBcImZsYWctYmpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEJhcnRow6lsZW15XCIsIGZsYWc6IFwiZmxhZy1ibFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVybXVkYVwiLCBmbGFnOiBcImZsYWctYm1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJydW5laSBcIiwgZmxhZzogXCJmbGFnLWJuXCIgfSxcclxuICAgIHsgbmFtZTogXCJCb2xpdmlhLCBQbHVyaW5hdGlvbmFsIFN0YXRlIG9mXCIsIGZsYWc6IFwiZmxhZy1ib1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmFcIiwgZmxhZzogXCJmbGFnLWJxXCIgfSxcclxuICAgIHsgbmFtZTogXCJCcmF6aWxcIiwgZmxhZzogXCJmbGFnLWJyXCIgfSxcclxuICAgIHsgbmFtZTogXCJCYWhhbWFzXCIsIGZsYWc6IFwiZmxhZy1ic1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmh1dGFuXCIsIGZsYWc6IFwiZmxhZy1idFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQm91dmV0IElzbGFuZFwiLCBmbGFnOiBcImZsYWctYnZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJvdHN3YW5hXCIsIGZsYWc6IFwiZmxhZy1id1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQmVsYXJ1c1wiLCBmbGFnOiBcImZsYWctYnlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJlbGl6ZVwiLCBmbGFnOiBcImZsYWctYnpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNhbmFkYVwiLCBmbGFnOiBcImZsYWctY2FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1jY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29uZ28sIHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZVwiLCBmbGFnOiBcImZsYWctY2RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpY1wiLCBmbGFnOiBcImZsYWctY2ZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbmdvXCIsIGZsYWc6IFwiZmxhZy1jZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dpdHplcmxhbmRcIiwgZmxhZzogXCJmbGFnLWNoXCIgfSxcclxuICAgIHsgbmFtZTogXCJDw7R0ZSBkJ0l2b2lyZVwiLCBmbGFnOiBcImZsYWctY2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvb2sgSXNsYW5kc1wiLCBmbGFnOiBcImZsYWctY2tcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNoaWxlXCIsIGZsYWc6IFwiZmxhZy1jbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FtZXJvb25cIiwgZmxhZzogXCJmbGFnLWNtXCIgfSxcclxuICAgIHsgbmFtZTogXCJDaGluYVwiLCBmbGFnOiBcImZsYWctY25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbG9tYmlhXCIsIGZsYWc6IFwiZmxhZy1jb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ29zdGEgUmljYVwiLCBmbGFnOiBcImZsYWctY3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkN1YmFcIiwgZmxhZzogXCJmbGFnLWN1XCIgfSxcclxuICAgIHsgbmFtZTogXCJDYWJvIFZlcmRlXCIsIGZsYWc6IFwiZmxhZy1jdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3VyYcOnYW9cIiwgZmxhZzogXCJmbGFnLWN3XCIgfSxcclxuICAgIHsgbmFtZTogXCJDaHJpc3RtYXMgSXNsYW5kXCIsIGZsYWc6IFwiZmxhZy1jeFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3lwcnVzXCIsIGZsYWc6IFwiZmxhZy1jeVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ3plY2ggUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWN6XCIgfSxcclxuICAgIHsgbmFtZTogXCJHZXJtYW55XCIsIGZsYWc6IFwiZmxhZy1kZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRGppYm91dGlcIiwgZmxhZzogXCJmbGFnLWRqXCIgfSxcclxuICAgIHsgbmFtZTogXCJEZW5tYXJrXCIsIGZsYWc6IFwiZmxhZy1ka1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRG9taW5pY2FcIiwgZmxhZzogXCJmbGFnLWRtXCIgfSxcclxuICAgIHsgbmFtZTogXCJEb21pbmljYW4gUmVwdWJsaWNcIiwgZmxhZzogXCJmbGFnLWRvXCIgfSxcclxuICAgIHsgbmFtZTogXCJBbGdlcmlhXCIsIGZsYWc6IFwiZmxhZy1kelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRWN1YWRvclwiLCBmbGFnOiBcImZsYWctZWNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVzdG9uaWFcIiwgZmxhZzogXCJmbGFnLWVlXCIgfSxcclxuICAgIHsgbmFtZTogXCJFZ3lwdFwiLCBmbGFnOiBcImZsYWctZWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIldlc3Rlcm4gU2FoYXJhXCIsIGZsYWc6IFwiZmxhZy1laFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXJpdHJlYVwiLCBmbGFnOiBcImZsYWctZXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNwYWluXCIsIGZsYWc6IFwiZmxhZy1lc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRXRoaW9waWFcIiwgZmxhZzogXCJmbGFnLWV0XCIgfSxcclxuICAgIHsgbmFtZTogXCJGaW5sYW5kXCIsIGZsYWc6IFwiZmxhZy1maVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRmlqaVwiLCBmbGFnOiBcImZsYWctZmpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZhbGtsYW5kIElzbGFuZHMgKE1hbHZpbmFzKVwiLCBmbGFnOiBcImZsYWctZmtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2ZcIiwgZmxhZzogXCJmbGFnLWZtXCIgfSxcclxuICAgIHsgbmFtZTogXCJGYXJvZSBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1mb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJhbmNlXCIsIGZsYWc6IFwiZmxhZy1mclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR2Fib25cIiwgZmxhZzogXCJmbGFnLWdhXCIgfSxcclxuICAgIHsgbmFtZTogXCJVbml0ZWQgS2luZ2RvbSBvZiBHcmVhdCBCcml0YWluIGFuZCBOb3J0aGVybiBJcmVsYW5kXCIsIGZsYWc6IFwiZmxhZy1nYlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3JlbmFkYVwiLCBmbGFnOiBcImZsYWctZ2RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdlb3JnaWFcIiwgZmxhZzogXCJmbGFnLWdlXCIgfSxcclxuICAgIHsgbmFtZTogXCJGcmVuY2ggR3VpYW5hXCIsIGZsYWc6IFwiZmxhZy1nZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3Vlcm5zZXlcIiwgZmxhZzogXCJmbGFnLWdnXCIgfSxcclxuICAgIHsgbmFtZTogXCJHaGFuYVwiLCBmbGFnOiBcImZsYWctZ2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdpYnJhbHRhclwiLCBmbGFnOiBcImZsYWctZ2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZWVubGFuZFwiLCBmbGFnOiBcImZsYWctZ2xcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdhbWJpYVwiLCBmbGFnOiBcImZsYWctZ21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1aW5lYVwiLCBmbGFnOiBcImZsYWctZ25cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1YWRlbG91cGVcIiwgZmxhZzogXCJmbGFnLWdwXCIgfSxcclxuICAgIHsgbmFtZTogXCJFcXVhdG9yaWFsIEd1aW5lYVwiLCBmbGFnOiBcImZsYWctZ3FcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkdyZWVjZVwiLCBmbGFnOiBcImZsYWctZ3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNvdXRoIEdlb3JnaWEgYW5kIHRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1nc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VhdGVtYWxhXCIsIGZsYWc6IFwiZmxhZy1ndFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiR3VhbVwiLCBmbGFnOiBcImZsYWctZ3VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkd1aW5lYS1CaXNzYXVcIiwgZmxhZzogXCJmbGFnLWd3XCIgfSxcclxuICAgIHsgbmFtZTogXCJHdXlhbmFcIiwgZmxhZzogXCJmbGFnLWd5XCIgfSxcclxuICAgIHsgbmFtZTogXCJIb25nIEtvbmdcIiwgZmxhZzogXCJmbGFnLWhrXCIgfSxcclxuICAgIHsgbmFtZTogXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLWhtXCIgfSxcclxuICAgIHsgbmFtZTogXCJIb25kdXJhc1wiLCBmbGFnOiBcImZsYWctaG5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNyb2F0aWFcIiwgZmxhZzogXCJmbGFnLWhyXCIgfSxcclxuICAgIHsgbmFtZTogXCJIYWl0aVwiLCBmbGFnOiBcImZsYWctaHRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkh1bmdhcnlcIiwgZmxhZzogXCJmbGFnLWh1XCIgfSxcclxuICAgIHsgbmFtZTogXCJJbmRvbmVzaWFcIiwgZmxhZzogXCJmbGFnLWlkXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmVsYW5kXCIsIGZsYWc6IFwiZmxhZy1pZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXNyYWVsXCIsIGZsYWc6IFwiZmxhZy1pbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSXNsZSBvZiBNYW5cIiwgZmxhZzogXCJmbGFnLWltXCIgfSxcclxuICAgIHsgbmFtZTogXCJJbmRpYVwiLCBmbGFnOiBcImZsYWctaW5cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwiLCBmbGFnOiBcImZsYWctaW9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIklyYXFcIiwgZmxhZzogXCJmbGFnLWlxXCIgfSxcclxuICAgIHsgbmFtZTogXCJJcmFuLCBJc2xhbWljIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1pclwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSWNlbGFuZFwiLCBmbGFnOiBcImZsYWctaXNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkl0YWx5XCIsIGZsYWc6IFwiZmxhZy1pdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSmVyc2V5XCIsIGZsYWc6IFwiZmxhZy1qZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiSmFtYWljYVwiLCBmbGFnOiBcImZsYWctam1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkpvcmRhblwiLCBmbGFnOiBcImZsYWctam9cIiB9LFxyXG4gICAgeyBuYW1lOiBcIkphcGFuXCIsIGZsYWc6IFwiZmxhZy1qcFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2VueWFcIiwgZmxhZzogXCJmbGFnLWtlXCIgfSxcclxuICAgIHsgbmFtZTogXCJLeXJneXpzdGFuXCIsIGZsYWc6IFwiZmxhZy1rZ1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2FtYm9kaWFcIiwgZmxhZzogXCJmbGFnLWtoXCIgfSxcclxuICAgIHsgbmFtZTogXCJLaXJpYmF0aVwiLCBmbGFnOiBcImZsYWcta2lcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNvbW9yb3NcIiwgZmxhZzogXCJmbGFnLWttXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIiwgZmxhZzogXCJmbGFnLWtuXCIgfSxcclxuICAgIHsgbmFtZTogXCJLb3JlYSwgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWcta3BcIiB9LFxyXG4gICAgeyBuYW1lOiBcIktvcmVhLCBSZXB1YmxpYyBvZlwiLCBmbGFnOiBcImZsYWcta3JcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkt1d2FpdFwiLCBmbGFnOiBcImZsYWcta3dcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkNheW1hbiBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy1reVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiS2F6YWtoc3RhblwiLCBmbGFnOiBcImZsYWcta3pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1sYVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGViYW5vblwiLCBmbGFnOiBcImZsYWctbGJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IEx1Y2lhXCIsIGZsYWc6IFwiZmxhZy1sY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGllY2h0ZW5zdGVpblwiLCBmbGFnOiBcImZsYWctbGlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNyaSBMYW5rYVwiLCBmbGFnOiBcImZsYWctbGtcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpYmVyaWFcIiwgZmxhZzogXCJmbGFnLWxyXCIgfSxcclxuICAgIHsgbmFtZTogXCJMZXNvdGhvXCIsIGZsYWc6IFwiZmxhZy1sc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTGl0aHVhbmlhXCIsIGZsYWc6IFwiZmxhZy1sdFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTHV4ZW1ib3VyZ1wiLCBmbGFnOiBcImZsYWctbHVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxhdHZpYVwiLCBmbGFnOiBcImZsYWctbHZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkxpYnlhXCIsIGZsYWc6IFwiZmxhZy1seVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9yb2Njb1wiLCBmbGFnOiBcImZsYWctbWFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbmFjb1wiLCBmbGFnOiBcImZsYWctbWNcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbGRvdmEsIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy1tZFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTW9udGVuZWdyb1wiLCBmbGFnOiBcImZsYWctbWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IE1hcnRpbiAoRnJlbmNoIHBhcnQpXCIsIGZsYWc6IFwiZmxhZy1tZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFkYWdhc2NhclwiLCBmbGFnOiBcImZsYWctbWdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hcnNoYWxsIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLW1oXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWNlZG9uaWEsIHRoZSBmb3JtZXIgWXVnb3NsYXYgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLW1rXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWxpXCIsIGZsYWc6IFwiZmxhZy1tbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTXlhbm1hclwiLCBmbGFnOiBcImZsYWctbW1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbmdvbGlhXCIsIGZsYWc6IFwiZmxhZy1tblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFjYW9cIiwgZmxhZzogXCJmbGFnLW1vXCIgfSxcclxuICAgIHsgbmFtZTogXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLW1wXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYXJ0aW5pcXVlXCIsIGZsYWc6IFwiZmxhZy1tcVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWF1cml0YW5pYVwiLCBmbGFnOiBcImZsYWctbXJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1vbnRzZXJyYXRcIiwgZmxhZzogXCJmbGFnLW1zXCIgfSxcclxuICAgIHsgbmFtZTogXCJNYWx0YVwiLCBmbGFnOiBcImZsYWctbXRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hdXJpdGl1c1wiLCBmbGFnOiBcImZsYWctbXVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1hbGRpdmVzXCIsIGZsYWc6IFwiZmxhZy1tdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsYXdpXCIsIGZsYWc6IFwiZmxhZy1td1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWV4aWNvXCIsIGZsYWc6IFwiZmxhZy1teFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTWFsYXlzaWFcIiwgZmxhZzogXCJmbGFnLW15XCIgfSxcclxuICAgIHsgbmFtZTogXCJNb3phbWJpcXVlXCIsIGZsYWc6IFwiZmxhZy1telwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmFtaWJpYVwiLCBmbGFnOiBcImZsYWctbmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5ldyBDYWxlZG9uaWFcIiwgZmxhZzogXCJmbGFnLW5jXCIgfSxcclxuICAgIHsgbmFtZTogXCJOaWdlclwiLCBmbGFnOiBcImZsYWctbmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5vcmZvbGsgSXNsYW5kXCIsIGZsYWc6IFwiZmxhZy1uZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmlnZXJpYVwiLCBmbGFnOiBcImZsYWctbmdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pY2FyYWd1YVwiLCBmbGFnOiBcImZsYWctbmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5ldGhlcmxhbmRzXCIsIGZsYWc6IFwiZmxhZy1ubFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiTm9yd2F5XCIsIGZsYWc6IFwiZmxhZy1ub1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiTmVwYWxcIiwgZmxhZzogXCJmbGFnLW5wXCIgfSxcclxuICAgIHsgbmFtZTogXCJOYXVydVwiLCBmbGFnOiBcImZsYWctbnJcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk5pdWVcIiwgZmxhZzogXCJmbGFnLW51XCIgfSxcclxuICAgIHsgbmFtZTogXCJOZXcgWmVhbGFuZFwiLCBmbGFnOiBcImZsYWctbnpcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk9tYW5cIiwgZmxhZzogXCJmbGFnLW9tXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYW5hbWFcIiwgZmxhZzogXCJmbGFnLXBhXCIgfSxcclxuICAgIHsgbmFtZTogXCJQZXJ1XCIsIGZsYWc6IFwiZmxhZy1wZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiRnJlbmNoIFBvbHluZXNpYVwiLCBmbGFnOiBcImZsYWctcGZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhcHVhIE5ldyBHdWluZWFcIiwgZmxhZzogXCJmbGFnLXBnXCIgfSxcclxuICAgIHsgbmFtZTogXCJQaGlsaXBwaW5lc1wiLCBmbGFnOiBcImZsYWctcGhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBha2lzdGFuXCIsIGZsYWc6IFwiZmxhZy1wa1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUG9sYW5kXCIsIGZsYWc6IFwiZmxhZy1wbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwiLCBmbGFnOiBcImZsYWctcG1cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBpdGNhaXJuXCIsIGZsYWc6IFwiZmxhZy1wblwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUHVlcnRvIFJpY29cIiwgZmxhZzogXCJmbGFnLXByXCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWxlc3RpbmUsIFN0YXRlIG9mXCIsIGZsYWc6IFwiZmxhZy1wc1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiUG9ydHVnYWxcIiwgZmxhZzogXCJmbGFnLXB0XCIgfSxcclxuICAgIHsgbmFtZTogXCJQYWxhdVwiLCBmbGFnOiBcImZsYWctcHdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlBhcmFndWF5XCIsIGZsYWc6IFwiZmxhZy1weVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiUWF0YXJcIiwgZmxhZzogXCJmbGFnLXFhXCIgfSxcclxuICAgIHsgbmFtZTogXCJSw6l1bmlvblwiLCBmbGFnOiBcImZsYWctcmVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlJvbWFuaWFcIiwgZmxhZzogXCJmbGFnLXJvXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZXJiaWFcIiwgZmxhZzogXCJmbGFnLXJzXCIgfSxcclxuICAgIHsgbmFtZTogXCJSdXNzaWFuIEZlZGVyYXRpb25cIiwgZmxhZzogXCJmbGFnLXJ1XCIgfSxcclxuICAgIHsgbmFtZTogXCJSd2FuZGFcIiwgZmxhZzogXCJmbGFnLXJ3XCIgfSxcclxuICAgIHsgbmFtZTogXCJTYXVkaSBBcmFiaWFcIiwgZmxhZzogXCJmbGFnLXNhXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb2xvbW9uIElzbGFuZHNcIiwgZmxhZzogXCJmbGFnLXNiXCIgfSxcclxuICAgIHsgbmFtZTogXCJTZXljaGVsbGVzXCIsIGZsYWc6IFwiZmxhZy1zY1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3VkYW5cIiwgZmxhZzogXCJmbGFnLXNkXCIgfSxcclxuICAgIHsgbmFtZTogXCJTd2VkZW5cIiwgZmxhZzogXCJmbGFnLXNlXCIgfSxcclxuICAgIHsgbmFtZTogXCJTaW5nYXBvcmVcIiwgZmxhZzogXCJmbGFnLXNnXCIgfSxcclxuICAgIHsgbmFtZTogXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwiLCBmbGFnOiBcImZsYWctc2hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNsb3ZlbmlhXCIsIGZsYWc6IFwiZmxhZy1zaVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3ZhbGJhcmQgYW5kIEphbiBNYXllblwiLCBmbGFnOiBcImZsYWctc2pcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNsb3Zha2lhXCIsIGZsYWc6IFwiZmxhZy1za1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2llcnJhIExlb25lXCIsIGZsYWc6IFwiZmxhZy1zbFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2FuIE1hcmlub1wiLCBmbGFnOiBcImZsYWctc21cIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNlbmVnYWxcIiwgZmxhZzogXCJmbGFnLXNuXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb21hbGlhXCIsIGZsYWc6IFwiZmxhZy1zb1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3VyaW5hbWVcIiwgZmxhZzogXCJmbGFnLXNyXCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBTdWRhblwiLCBmbGFnOiBcImZsYWctc3NcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLCBmbGFnOiBcImZsYWctc3RcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkVsIFNhbHZhZG9yXCIsIGZsYWc6IFwiZmxhZy1zdlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KVwiLCBmbGFnOiBcImZsYWctc3hcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlN5cmlhbiBBcmFiIFJlcHVibGljXCIsIGZsYWc6IFwiZmxhZy1zeVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU3dhemlsYW5kXCIsIGZsYWc6IFwiZmxhZy1zelwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy10Y1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiQ2hhZFwiLCBmbGFnOiBcImZsYWctdGRcIiB9LFxyXG4gICAgeyBuYW1lOiBcIkZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllc1wiLCBmbGFnOiBcImZsYWctdGZcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRvZ29cIiwgZmxhZzogXCJmbGFnLXRnXCIgfSxcclxuICAgIHsgbmFtZTogXCJUaGFpbGFuZFwiLCBmbGFnOiBcImZsYWctdGhcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhamlraXN0YW5cIiwgZmxhZzogXCJmbGFnLXRqXCIgfSxcclxuICAgIHsgbmFtZTogXCJUb2tlbGF1XCIsIGZsYWc6IFwiZmxhZy10a1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGltb3ItTGVzdGVcIiwgZmxhZzogXCJmbGFnLXRsXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXJrbWVuaXN0YW5cIiwgZmxhZzogXCJmbGFnLXRtXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdW5pc2lhXCIsIGZsYWc6IFwiZmxhZy10blwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVG9uZ2FcIiwgZmxhZzogXCJmbGFnLXRvXCIgfSxcclxuICAgIHsgbmFtZTogXCJUdXJrZXlcIiwgZmxhZzogXCJmbGFnLXRyXCIgfSxcclxuICAgIHsgbmFtZTogXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsIGZsYWc6IFwiZmxhZy10dFwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVHV2YWx1XCIsIGZsYWc6IFwiZmxhZy10dlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVGFpd2FuLCBQcm92aW5jZSBvZiBDaGluYVwiLCBmbGFnOiBcImZsYWctdHdcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlRhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2ZcIiwgZmxhZzogXCJmbGFnLXR6XCIgfSxcclxuICAgIHsgbmFtZTogXCJVa3JhaW5lXCIsIGZsYWc6IFwiZmxhZy11YVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVWdhbmRhXCIsIGZsYWc6IFwiZmxhZy11Z1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzXCIsIGZsYWc6IFwiZmxhZy11bVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVW5pdGVkIFN0YXRlcyBvZiBBbWVyaWNhXCIsIGZsYWc6IFwiZmxhZy11c1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVXJ1Z3VheVwiLCBmbGFnOiBcImZsYWctdXlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlV6YmVraXN0YW5cIiwgZmxhZzogXCJmbGFnLXV6XCIgfSxcclxuICAgIHsgbmFtZTogXCJIb2x5IFNlZVwiLCBmbGFnOiBcImZsYWctdmFcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsIGZsYWc6IFwiZmxhZy12Y1wiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmVuZXp1ZWxhLCBCb2xpdmFyaWFuIFJlcHVibGljIG9mXCIsIGZsYWc6IFwiZmxhZy12ZVwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmlyZ2luIElzbGFuZHMsIEJyaXRpc2hcIiwgZmxhZzogXCJmbGFnLXZnXCIgfSxcclxuICAgIHsgbmFtZTogXCJWaXJnaW4gSXNsYW5kcywgVS5TLlwiLCBmbGFnOiBcImZsYWctdmlcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlZpZXQgTmFtXCIsIGZsYWc6IFwiZmxhZy12blwiIH0sXHJcbiAgICB7IG5hbWU6IFwiVmFudWF0dVwiLCBmbGFnOiBcImZsYWctdnVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIldhbGxpcyBhbmQgRnV0dW5hXCIsIGZsYWc6IFwiZmxhZy13ZlwiIH0sXHJcbiAgICB7IG5hbWU6IFwiU2Ftb2FcIiwgZmxhZzogXCJmbGFnLXdzXCIgfSxcclxuICAgIHsgbmFtZTogXCJZZW1lblwiLCBmbGFnOiBcImZsYWcteWVcIiB9LFxyXG4gICAgeyBuYW1lOiBcIk1heW90dGVcIiwgZmxhZzogXCJmbGFnLXl0XCIgfSxcclxuICAgIHsgbmFtZTogXCJTb3V0aCBBZnJpY2FcIiwgZmxhZzogXCJmbGFnLXphXCIgfSxcclxuICAgIHsgbmFtZTogXCJaYW1iaWFcIiwgZmxhZzogXCJmbGFnLXptXCIgfSxcclxuICAgIHsgbmFtZTogXCJaaW1iYWJ3ZVwiLCBmbGFnOiBcImZsYWctendcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVVzZXJGbGFncyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICRzY29wZS51c2VyRmxhZ3MgPSAkc2NvcGUuY3VycmVudFVzZXI/LmZsYWdzXHJcbiAgICAgID8gY291bnRyaWVzLmZpbHRlcihmdW5jdGlvbiAoY291bnRyeSkge1xyXG4gICAgICAgICAgcmV0dXJuICRzY29wZS5jdXJyZW50VXNlci5mbGFncy5pbmNsdWRlcyhjb3VudHJ5LmZsYWcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIDogW107XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLmRhdGVPcHRpb25zID0ge1xyXG4gICAgbWF4RGF0ZTogbmV3IERhdGUoKSxcclxuICAgIG1pbkRhdGU6IG5ldyBEYXRlKDE5MDAsIDEsIDEpLFxyXG4gICAgaW5pdERhdGU6IG5ldyBEYXRlKDIwMDAsIDEsIDEpLFxyXG4gICAgZGF0ZXBpY2tlck1vZGU6IFwieWVhclwiLFxyXG4gIH07XHJcblxyXG4gICRzY29wZS51c2VybmFtZVRvZ2dsZSA9IHRydWU7XHJcbiAgJHNjb3BlLnBhc3N3b3JkVG9nZ2xlID0gdHJ1ZTtcclxuXHJcbiAgJHNjb3BlLnRvZ2dsZVVzZXJuYW1lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJHNjb3BlLnVzZXJuYW1lVG9nZ2xlID0gISRzY29wZS51c2VybmFtZVRvZ2dsZTtcclxuICAgICRzY29wZS5uZXdVc2VybmFtZSA9ICRzY29wZS5jdXJyZW50VXNlci51c2VybmFtZTtcclxuICB9O1xyXG5cclxuICAkc2NvcGUudG9nZ2xlUGFzc3dvcmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUubmV3UGFzc3dvcmQgPSBudWxsO1xyXG4gICAgJHNjb3BlLmNvbmZpcm1QYXNzd29yZCA9IG51bGw7XHJcbiAgICAkc2NvcGUucGFzc3dvcmRUb2dnbGUgPSAhJHNjb3BlLnBhc3N3b3JkVG9nZ2xlO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGVja1Bhc3N3b3JkID0gZnVuY3Rpb24gKHBhc3N3b3JkKSB7XHJcbiAgICBpZiAocGFzc3dvcmQpIHtcclxuICAgICAgdmFyIHVzZXIgPSAkc2NvcGUuY3VycmVudFVzZXIuX2lkO1xyXG4gICAgICBVc2VyU3ZjLmNoZWNrUGFzc3dvcmQodXNlciwgcGFzc3dvcmQpLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJHNjb3BlLnRvZ2dsZVBhc3N3b3JkKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgb3JpZ2luYWxCZyA9ICQoXCIucGFzc3dvcmRcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIpO1xyXG4gICAgICAgICAgJChcIi5wYXNzd29yZFwiKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBcIiNGRkI2QzFcIiB9LCAyMDApLmFuaW1hdGUoeyBiYWNrZ3JvdW5kQ29sb3I6IG9yaWdpbmFsQmcgfSwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gICRzY29wZS5jaGFuZ2VQYXNzd29yZCA9IGZ1bmN0aW9uIChvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgaWYgKG5ld1Bhc3N3b3JkKSB7XHJcbiAgICAgIGlmIChuZXdQYXNzd29yZCA9PSBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICB2YXIgdXNlciA9ICRzY29wZS5jdXJyZW50VXNlci5faWQ7XHJcbiAgICAgICAgVXNlclN2Yy5jaGFuZ2VQYXNzd29yZCh1c2VyLCBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQpLnRoZW4oXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRzY29wZS50b2FzdChcIlBhc3N3b3JkIGNoYW5nZWRcIik7XHJcbiAgICAgICAgICAgICRzY29wZS5vbGRQYXNzd29yZCA9IG51bGw7XHJcbiAgICAgICAgICAgICRzY29wZS50b2dnbGVQYXNzd29yZCgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHNjb3BlLnRvYXN0KFwiUGFzc3dvcmQgY2hhbmdlIGZhaWxlZFwiKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgb3JpZ2luYWxCZyA9ICQoXCIucGFzc3dvcmRcIikuY3NzKFwiYmFja2dyb3VuZENvbG9yXCIpO1xyXG4gICAgICAgICQoXCIucGFzc3dvcmRcIikuYW5pbWF0ZSh7IGJhY2tncm91bmRDb2xvcjogXCIjRkZCNkMxXCIgfSwgMjAwKS5hbmltYXRlKHsgYmFja2dyb3VuZENvbG9yOiBvcmlnaW5hbEJnIH0sIDIwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAkc2NvcGUuY2hhbmdlVXNlcm5hbWUgPSBmdW5jdGlvbiAodXNlcm5hbWUpIHtcclxuICAgICRzY29wZS4kZW1pdChcImxvYWRpbmdcIik7XHJcbiAgICBVc2VyU3ZjLmNoYW5nZVVzZXJuYW1lKCRzY29wZS5jdXJyZW50VXNlci5faWQsIHVzZXJuYW1lKS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoXCJ1cGRhdGVcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkc2NvcGUudG9hc3QodXNlcm5hbWUgKyBcIiBhbHJlYWR5IGluIHVzZVwiKTtcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLnVwZGF0ZVVzZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkc2NvcGUuJGVtaXQoXCJsb2FkaW5nXCIpO1xyXG4gICAgVXNlclN2Yy51cGRhdGVVc2VyKHsgLi4uJHNjb3BlLmN1cnJlbnRVc2VyLCBmbGFnczogJHNjb3BlLnVzZXJGbGFncy5tYXAoKHsgZmxhZyB9KSA9PiBmbGFnKSB9KS50aGVuKFxyXG4gICAgICBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAkc2NvcGUuJGVtaXQoXCJ1cGRhdGVcIiwgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0sXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS5sb2FkQ291bnRyaWVzID0gZnVuY3Rpb24gKCRxdWVyeSkge1xyXG4gICAgcmV0dXJuIGNvdW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGNvdW50cnkpIHtcclxuICAgICAgcmV0dXJuIGNvdW50cnkubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9IC0xO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsICgpID0+IHtcclxuICAgIHVwZGF0ZVVzZXJGbGFncygpO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXHJcbi5jb250cm9sbGVyKCdTa2lsbHNDdHJsJywgZnVuY3Rpb24gKCRzY29wZSwgJHdpbmRvdykge1xyXG5cclxuICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IDA7XHJcbiAgJHNjb3BlLnNraWxsc1Zpc2libGUgPSBmYWxzZTtcclxuICAkc2NvcGUucHJvamVjdHMgPSBbXTtcclxuXHJcbiAgJHNjb3BlLmxhYmVscyA9IFtcIkRvd25sb2FkIFNhbGVzXCIsIFwiSW4tU3RvcmUgU2FsZXNcIiwgXCJNYWlsLU9yZGVyIFNhbGVzXCJdO1xyXG4gICRzY29wZS5kYXRhID0gWzMwMCwgNTAwLCAxMDBdO1xyXG5cclxuICAkLmdldEpTT04oJy9leHBlcmllbmNlLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuICAgICRzY29wZS5wcm9qZWN0cyA9IGRhdGEucmVkdWNlKChwcm9qZWN0cywgZW1wbG95ZXIpID0+IHtcclxuICAgICAgaWYgKGVtcGxveWVyLnByb2plY3RzKSByZXR1cm4gZW1wbG95ZXIucHJvamVjdHMuY29uY2F0KHByb2plY3RzKTtcclxuICAgICAgZWxzZSByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9LCB7fSk7XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5maWx0ZXJlZFByb2plY3RzID0gKCkgPT4gJHNjb3BlLnByb2plY3RzXHJcbiAgICAuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNraWxscyAmJiBwcm9qZWN0LnNraWxscy5pbmNsdWRlcygkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jb2RlKSlcclxuXHJcbiAgJC5nZXRKU09OKCcvc2tpbGxzLmpzb24nLCBmdW5jdGlvbiggZGF0YSApIHtcclxuXHJcbiAgICBjb25zdCBza2lsbHMgPSBkYXRhXHJcbiAgICAuZmlsdGVyKChza2lsbCkgPT4gc2tpbGwuZW5hYmxlZClcclxuXHJcbiAgICAkc2NvcGUuY2F0ZWdvcmllcyA9IHNraWxsc1xyXG4gICAgLnJlZHVjZShmdW5jdGlvbihjYXRlZ29yaWVzLCBza2lsbCkge1xyXG4gICAgICBpZiAoIWNhdGVnb3JpZXNbc2tpbGwuY2F0ZWdvcnldKSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0gPSBbc2tpbGxdXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2F0ZWdvcmllc1tza2lsbC5jYXRlZ29yeV0ucHVzaChza2lsbClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2F0ZWdvcmllcztcclxuICAgIH0sIHt9KTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRTa2lsbCA9IGZ1bmN0aW9uIChza2lsbCkge1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbCA9IHNraWxsO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydE9wdGlvbnMgPSB7XHJcbiAgICAgICAgY3V0b3V0UGVyY2VudGFnZSA6IDgwLFxyXG4gICAgICAgIGNpcmN1bWZlcmVuY2U6IDIgKiBNYXRoLlBJLFxyXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IHRydWUsXHJcbiAgICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5jaGFydFN0eWxlID0ge1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgvc2tpbGxzLycgKyAkc2NvcGUuc2VsZWN0ZWRTa2lsbC5pbWFnZSArICcpJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1yZXBlYXQnOiAnbm8tcmVwZWF0JyxcclxuICAgICAgICAnYmFja2dyb3VuZC1zaXplJzogJzYwJScsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiAnNTAlIDUwJSdcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkU2tpbGwoJHNjb3BlLnNraWxsc1swXSk7XHJcblxyXG4gICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsICRzY2UsICRsb2NhdGlvbiwgVGVuVGhpbmdzU3ZjLCBUZWxlZ3JhbVN2Yykge1xyXG4gICAgbGV0IHBhZ2UgPSAxO1xyXG4gICAgJHNjb3BlLmxpc3RzID0gW107XHJcbiAgICAkc2NvcGUuc2VhcmNoID0gXCJcIjtcclxuICAgICRzY29wZS5zZWFyY2hGaWVsZCA9IFwiYWxsXCI7XHJcbiAgICAkc2NvcGUubmV3SXRlbSA9IHt9O1xyXG4gICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyID0ge307XHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSB1bmRlZmluZWQ7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSA9IFwiRU5cIjtcclxuICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gW107XHJcbiAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gW107XHJcbiAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICBsZXQgZXhoYXVzdGVkID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3Qgb2JqZWN0Q2F0ZWdvcmllcyA9IFtcImN1bHR1cmVcIiwgXCJuYXR1cmVcIiwgXCJtaXNjXCIsIFwic29jaWV0eVwiLCBcInNwb3J0c1wiXTtcclxuICAgICRzY29wZS5ibHVyYlR5cGVzID0gW1xyXG4gICAgICB7IGFwaTogXCJtb3ZpZXNcIiwgY2F0ZWdvcmllczogW1wibW92aWVzXCJdLCB0ZXh0OiBcIkdldCBtb3ZpZSBwb3N0ZXJzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwidHZcIiwgY2F0ZWdvcmllczogW1widGVsZXZpc2lvblwiXSwgdGV4dDogXCJHZXQgdHYgcG9zdGVyc1wiLCBhZG1pbk9ubHk6IGZhbHNlIH0sXHJcbiAgICAgIHsgYXBpOiBcImFjdG9yc1wiLCBjYXRlZ29yaWVzOiBbXCJtb3ZpZXNcIiwgXCJ0ZWxldmlzaW9uXCJdLCB0ZXh0OiBcIkdldCBhY3RvciBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwiYm9va3NcIiwgY2F0ZWdvcmllczogW1wibGl0ZXJhdHVyZVwiXSwgdGV4dDogXCJHZXQgYm9vayBjb3ZlcnNcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgICB7IGFwaTogXCJtdXNpY3ZpZGVvc1wiLCBjYXRlZ29yaWVzOiBbXCJtdXNpY1wiXSwgdGV4dDogXCJHZXQgbXVzaWMgdmlkZW9zXCIsIGFkbWluT25seTogdHJ1ZSB9LFxyXG4gICAgICB7IGFwaTogXCJ1bnNwbGFzaFwiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBVbnNwbGFzaCBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwicGV4ZWxzXCIsIGNhdGVnb3JpZXM6IG9iamVjdENhdGVnb3JpZXMsIHRleHQ6IFwiR2V0IFBleGVscyBwaWNzXCIsIGFkbWluT25seTogZmFsc2UgfSxcclxuICAgICAgeyBhcGk6IFwid2lraVwiLCBjYXRlZ29yaWVzOiBvYmplY3RDYXRlZ29yaWVzLCB0ZXh0OiBcIkdldCBXaWtpIHBpY3NcIiwgYWRtaW5Pbmx5OiBmYWxzZSB9LFxyXG4gICAgXTtcclxuXHJcbiAgICAkc2NvcGUuaGF2ZUNvbW1vbkl0ZW1zID0gKGFycjEsIGFycjIpID0+IHtcclxuICAgICAgcmV0dXJuIGFycjE/LnNvbWUoKGl0ZW0pID0+IGFycjIuaW5jbHVkZXMoaXRlbSkpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUua2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgLy8gVGFiXHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgaWYgKCQoXCIjbmV3LWJsdXJiXCIpLmlzKFwiOmZvY3VzXCIpKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5jcmVhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICgkKFwiI25ldy12YWx1ZVwiKS5pcyhcIjpmb2N1c1wiKSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAkKFwiI25ldy1ibHVyYlwiKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgfVxyXG4gICAgICAvLyB1c2UgZS5rZXlDb2RlXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5hZGRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBcIm5ld1wiKTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdCA9IHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNyZWF0b3I6ICRzY29wZS5jdXJyZW50VXNlci5faWQsXHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB2YWx1ZXM6IFtdLFxyXG4gICAgICAgIGFuc3dlcnM6IDAsXHJcbiAgICAgICAgaXNEeW5hbWljOiB0cnVlLFxyXG4gICAgICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICAgIGxhbmd1YWdlOiAkc2NvcGUuc2VsZWN0ZWRMYW5ndWFnZSxcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldFNlbGVjdGVkSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0U2VsZWN0ZWRMaXN0ID0gKGxpc3QpID0+IHtcclxuICAgICAgJHNjb3BlLnNlYXJjaCA9ICRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2g7XHJcbiAgICAgIGlmIChsaXN0KSB7XHJcbiAgICAgICAgaWYgKGxpc3QuX2lkID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAkc2NvcGUuYWRkTGlzdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdChsaXN0KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gZGF0YTtcclxuICAgICAgICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwibGlzdFwiLCBkYXRhLl9pZCk7XHJcbiAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSAkc2NvcGUuc2VsZWN0ZWRMaXN0Lmxhbmd1YWdlO1xyXG4gICAgICAgICAgICAgICRzY29wZS5yZWFkT25seSA9XHJcbiAgICAgICAgICAgICAgICAhJHNjb3BlLnNlbGVjdGVkTGlzdCB8fFxyXG4gICAgICAgICAgICAgICAgKCEkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4gJiZcclxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkTGlzdC5jcmVhdG9yLl9pZCAhPT0gJHNjb3BlLmN1cnJlbnRVc2VyLl9pZCAmJlxyXG4gICAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5sYW5ndWFnZUZpbHRlciA9IHt9O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXNldENhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSB7fTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldEZpbHRlckNvdW50ID0gKCkgPT5cclxuICAgICAgT2JqZWN0LnZhbHVlcygkc2NvcGUubGFuZ3VhZ2VGaWx0ZXIpLmxlbmd0aCArIE9iamVjdC52YWx1ZXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKS5sZW5ndGg7XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY3VycmVudFVzZXIpIHJldHVybjtcclxuICAgICAgY29uc3QgeyBkYXRhOiBsYW5ndWFnZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMYW5ndWFnZXMoKTtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IGxhbmd1YWdlcztcclxuICAgICAgcmVzZXRMYW5ndWFnZUZpbHRlcigpO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3JpZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRDYXRlZ29yaWVzKCk7XHJcbiAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcclxuICAgICAgY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XHJcbiAgICAgIHJlc2V0Q2F0ZWdvcnlGaWx0ZXIoKTtcclxuICAgICAgY29uc3QgeyBkYXRhOiBsYW5ndWFnZVN0YXRzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMoKTtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBsYW5ndWFnZVN0YXRzLnJlZHVjZSgocmVzdWx0LCB7IF9pZCwgY291bnQgfSkgPT4ge1xyXG4gICAgICAgIHJlc3VsdFtfaWQubGFuZ3VhZ2VdID0gKHJlc3VsdFtfaWQubGFuZ3VhZ2VdIHx8IDApICsgY291bnQ7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgfSwge30pO1xyXG4gICAgICBjb25zdCB7IGRhdGE6IGNhdGVnb3J5U3RhdHMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cygpO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0cyA9IGNhdGVnb3J5U3RhdHMucmVkdWNlKChyZXN1bHQsIHsgX2lkLCBjb3VudCB9KSA9PiB7XHJcbiAgICAgICAgcmVzdWx0W19pZF0gPSBjb3VudDtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9LCB7fSk7XHJcbiAgICAgIGlmICgkbG9jYXRpb24uc2VhcmNoKCkubGlzdCkge1xyXG4gICAgICAgICRzY29wZS5zZXRTZWxlY3RlZExpc3QoeyBfaWQ6ICRsb2NhdGlvbi5zZWFyY2goKS5saXN0IH0pO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5zZWFyY2ggPSAkbG9jYXRpb24uc2VhcmNoKCkuc2VhcmNoIHx8IFwiXCI7XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICBUZWxlZ3JhbVN2Yy5nZXRHYW1lcygkc2NvcGUuY3VycmVudFVzZXIuX2lkKS50aGVuKFxyXG4gICAgICAgICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnRlbGVncmFtR2FtZXMgPSBkYXRhO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAkc2NvcGUudGVsZWdyYW1HYW1lcyA9IFtdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZWFyY2hMaXN0cyA9IGFzeW5jICh2aWV3VmFsdWUpID0+IHtcclxuICAgICAgaWYgKHZpZXdWYWx1ZS5sZW5ndGggPj0gMykge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgVGVuVGhpbmdzU3ZjLnNlYXJjaExpc3RzKHZpZXdWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5oaWdobGlnaHRlZFNlYXJjaFRleHQgPSAodGV4dCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLnNlYXJjaCkge1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgKCR7JHNjb3BlLnNlYXJjaH0pYCwgXCJnaVwiKTtcclxuICAgICAgICByZXR1cm4gdGV4dC5yZXBsYWNlKHJlZ2V4LCBcIjxzcGFuIGNsYXNzPSdoaWdobGlnaHQnPiQxPC9zcGFuPlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGV4dDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudmFsdWVPcmRlciA9IHtcclxuICAgICAgZmllbGQ6IFwidmFsdWVcIixcclxuICAgICAgZGlyZWN0aW9uOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogJGxvY2F0aW9uLnNlYXJjaCgpLnNvcnQgfHwgXCJkYXRlXCIsXHJcbiAgICAgIGRpcmVjdGlvbjogJGxvY2F0aW9uLnNlYXJjaCgpLm9yZGVyID8gJGxvY2F0aW9uLnNlYXJjaCgpLm9yZGVyID09PSBcImRlc2NcIiA6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5vcmRlckJ5ID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUub3JkZXIuZmllbGQgPT09IGZpZWxkKSB7XHJcbiAgICAgICAgJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA9ICEkc2NvcGUub3JkZXIuZGlyZWN0aW9uO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5vcmRlciA9IHtcclxuICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgIGRpcmVjdGlvbjogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICAkbG9jYXRpb24uc2VhcmNoKFwic29ydFwiLCBmaWVsZCk7XHJcbiAgICAgICRsb2NhdGlvbi5zZWFyY2goXCJvcmRlclwiLCAkc2NvcGUub3JkZXIuZGlyZWN0aW9uID8gXCJkZXNjXCIgOiBcImFzY1wiKTtcclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRNb3JlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUubGlzdHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgIGdldExpc3RzKCkudGhlbigobGlzdHMpID0+IHtcclxuICAgICAgICAkc2NvcGUubGlzdHMgPSAkc2NvcGUubGlzdHMuY29uY2F0KGxpc3RzKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxpc3RzID0gW107XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSBbXTtcclxuICAgICAgcGFnZSA9IDE7XHJcbiAgICAgIGV4aGF1c3RlZCA9IGZhbHNlO1xyXG4gICAgICBnZXRMaXN0cygpLnRoZW4oKGxpc3RzKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzID0gbGlzdHM7XHJcbiAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmxpbmtUZWxlZ3JhbSA9IChkYXRhKSA9PiB7XHJcbiAgICAgIFRlbGVncmFtU3ZjLmxpbmtBY2NvdW50KCRzY29wZS5jdXJyZW50VXNlci5faWQsIGRhdGEpLnRoZW4oXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnRvYXN0KFwiVGVsZWdyYW0gYWNjb3VudCBsaW5rZWRcIik7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0VXNlcigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnRvYXN0KFwiVGVsZWdyYW0gYWNjb3VudCBsaW5raW5nIGZhaWxlZFwiKTtcclxuICAgICAgICB9LFxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0TGFuZ3VhZ2VGaWx0ZXIgPSAobGFuZ3VhZ2UpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5sYW5ndWFnZUZpbHRlcltsYW5ndWFnZS5jb2RlXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIGlmICgkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPT09IHRydWUpIHtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV0gPSAhJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlLmNvZGVdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRlbGV0ZSAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2UuY29kZV07XHJcbiAgICAgIH1cclxuICAgICAgJHNjb3BlLmdldExpc3RzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeUZpbHRlciA9IChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPSAhJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBkZWxldGUgJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUNhdGVnb3J5RmlsdGVyID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKTtcclxuICAgICAgY29uc3QgYWxsQ2F0ZWdvcmllcyA9XHJcbiAgICAgICAgY2F0ZWdvcmllcy5sZW5ndGggPT09IGNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4gJHNjb3BlLmNhdGVnb3J5RmlsdGVyW2NhdGVnb3J5XSkubGVuZ3RoO1xyXG4gICAgICAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXIgPSAkc2NvcGUuY2F0ZWdvcmllcy5yZWR1Y2UoKGZpbHRlciwgY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICBmaWx0ZXJbY2F0ZWdvcnldID0gIWFsbENhdGVnb3JpZXM7XHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgICAgfSwge30pO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldENhdGVnb3J5TGFiZWwgPSAoY2F0ZWdvcmllcykgPT4ge1xyXG4gICAgICBpZiAoIWNhdGVnb3JpZXMgfHwgY2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHJldHVybiBcIlwiO1xyXG4gICAgICBjb25zdCBtYWluQ2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4gIWNhdGVnb3J5LmluY2x1ZGVzKFwiLlwiKSk7XHJcbiAgICAgIHJldHVybiBtYWluQ2F0ZWdvcmllc1xyXG4gICAgICAgIC5zb3J0KClcclxuICAgICAgICAubWFwKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc3ViY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXNcclxuICAgICAgICAgICAgLmZpbHRlcigoc3ViY2F0ZWdvcnkpID0+IHN1YmNhdGVnb3J5LnN0YXJ0c1dpdGgoY2F0ZWdvcnkpICYmIHN1YmNhdGVnb3J5ICE9PSBjYXRlZ29yeSlcclxuICAgICAgICAgICAgLm1hcChcclxuICAgICAgICAgICAgICAoc3ViY2F0ZWdvcnkpID0+XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2F0ZWdvcmllc1xyXG4gICAgICAgICAgICAgICAgICAuZmluZCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gY2F0ZWdvcnkpXHJcbiAgICAgICAgICAgICAgICAgIC5zdWJjYXRlZ29yaWVzLmZpbmQoKHsgdmFsdWUgfSkgPT4gdmFsdWUgPT09IHN1YmNhdGVnb3J5KT8ubGFiZWwsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAkc2NvcGUuY2F0ZWdvcmllcy5maW5kKCh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBjYXRlZ29yeSkubGFiZWwgK1xyXG4gICAgICAgICAgICAoc3ViY2F0ZWdvcmllcy5sZW5ndGggPiAwID8gXCIgKFwiICsgc3ViY2F0ZWdvcmllcy5zb3J0KCkuam9pbihcIiwgXCIpICsgXCIpXCIgOiBcIlwiKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5qb2luKFwiLCBcIik7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldExpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmxvYWRpbmcgfHwgZXhoYXVzdGVkKSByZXR1cm4gW107XHJcbiAgICAgICRzY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5zZWFyY2ggIT09ICRzY29wZS5zZWFyY2gpIHtcclxuICAgICAgICAkbG9jYXRpb24uc2VhcmNoKFwic2VhcmNoXCIsICRzY29wZS5zZWFyY2ggPyAkc2NvcGUuc2VhcmNoIDogbnVsbCk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0TGlzdHMoe1xyXG4gICAgICAgIHBhZ2UsXHJcbiAgICAgICAgc29ydEJ5OiAkc2NvcGUub3JkZXIuZmllbGQsXHJcbiAgICAgICAgb3JkZXJCeTogJHNjb3BlLm9yZGVyLmRpcmVjdGlvbiA/IC0xIDogMSxcclxuICAgICAgICBsaW1pdDogMTAwLFxyXG4gICAgICAgIC4uLigkc2NvcGUuc2VhcmNoRmllbGQgPT09IFwiYWxsXCIgPyB7IHNlYXJjaDogJHNjb3BlLnNlYXJjaCB9IDoge30pLFxyXG4gICAgICAgIC4uLigkc2NvcGUuc2VhcmNoRmllbGQgPT09IFwibmFtZVwiID8geyBuYW1lOiAkc2NvcGUuc2VhcmNoIH0gOiB7fSksXHJcbiAgICAgICAgbGFuZ3VhZ2U6IE9iamVjdC5rZXlzKCRzY29wZS5sYW5ndWFnZUZpbHRlcikuZmlsdGVyKChsYW5ndWFnZSkgPT4gJHNjb3BlLmxhbmd1YWdlRmlsdGVyW2xhbmd1YWdlXSA9PT0gdHJ1ZSksXHJcbiAgICAgICAgY2F0ZWdvcmllczogT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKS5maWx0ZXIoKGNhdGVnb3J5KSA9PiAkc2NvcGUuY2F0ZWdvcnlGaWx0ZXJbY2F0ZWdvcnldID09PSB0cnVlKSxcclxuICAgICAgICBsYW5ndWFnZU5vdDogT2JqZWN0LmtleXMoJHNjb3BlLmxhbmd1YWdlRmlsdGVyKS5maWx0ZXIoKGxhbmd1YWdlKSA9PiAkc2NvcGUubGFuZ3VhZ2VGaWx0ZXJbbGFuZ3VhZ2VdID09PSBmYWxzZSksXHJcbiAgICAgICAgY2F0ZWdvcmllc05vdDogT2JqZWN0LmtleXMoJHNjb3BlLmNhdGVnb3J5RmlsdGVyKS5maWx0ZXIoXHJcbiAgICAgICAgICAoY2F0ZWdvcnkpID0+ICRzY29wZS5jYXRlZ29yeUZpbHRlcltjYXRlZ29yeV0gPT09IGZhbHNlLFxyXG4gICAgICAgICksXHJcbiAgICAgIH0pO1xyXG4gICAgICAkc2NvcGUuY291bnQgPSBkYXRhLmNvdW50O1xyXG4gICAgICBpZiAoZGF0YS5yZXN1bHQubGVuZ3RoIDwgMTAwKSBleGhhdXN0ZWQgPSB0cnVlO1xyXG4gICAgICBlbHNlIHBhZ2UgPSBkYXRhLm5leHRQYWdlO1xyXG4gICAgICAkc2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhgUGFnZSAke3BhZ2V9IGxvYWRlZCwgJHtkYXRhLnJlc3VsdC5sZW5ndGh9IGl0ZW1zYCk7XHJcbiAgICAgIHJldHVybiBkYXRhLnJlc3VsdDtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldExpc3ROYW1lID0gKGxpc3RJZCkgPT4gJHNjb3BlLmxpc3RzLmZpbmQoKHsgX2lkIH0pID0+IF9pZCA9PT0gbGlzdElkKT8ubmFtZTtcclxuXHJcbiAgICAkc2NvcGUudXBkYXRlVmFsdWUgPSBhc3luYyAoaXRlbSkgPT4ge1xyXG4gICAgICBpZiAoIWl0ZW0udmFsdWUpIHtcclxuICAgICAgICAkc2NvcGUuZGVsZXRlVmFsdWUoaXRlbSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW1SZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy51cGRhdGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgaXRlbSk7XHJcbiAgICAgICAgaXRlbS5ibHVyYlR5cGUgPSB1cGRhdGVkSXRlbVJlc3BvbnNlLmRhdGEuYmx1cmJUeXBlO1xyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY3JlYXRlVmFsdWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICghJHNjb3BlLm5ld0l0ZW0udmFsdWUpIHJldHVybjtcclxuICAgICAgaWYgKCRzY29wZS5oYXNEdXBsaWNhdGUoKSkge1xyXG4gICAgICAgIHJldHVybiBhbGVydChgJHskc2NvcGUubmV3SXRlbS52YWx1ZX0gaXMgYWxyZWFkeSBpbiB0aGUgbGlzdGApO1xyXG4gICAgICB9IGVsc2UgaWYgKCEkc2NvcGUuc2VsZWN0ZWRMaXN0Ll9pZCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnB1c2goeyAuLi4kc2NvcGUubmV3SXRlbSB9KTtcclxuICAgICAgICBpZiAoJHNjb3BlLnNlbGVjdGVkTGlzdC52YWx1ZXMubGVuZ3RoID49IDEwKSB7XHJcbiAgICAgICAgICBhd2FpdCAkc2NvcGUudXBzZXJ0TGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlZEl0ZW1SZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5jcmVhdGVMaXN0VmFsdWUoJHNjb3BlLnNlbGVjdGVkTGlzdCwgJHNjb3BlLm5ld0l0ZW0pO1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLnB1c2goY3JlYXRlZEl0ZW1SZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUubmV3SXRlbS52YWx1ZSk7XHJcbiAgICAgICAgJHNjb3BlLnRvYXN0KGBcIiR7JHNjb3BlLm5ld0l0ZW0udmFsdWV9XCIgYWRkZWRgKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUubmV3SXRlbS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICRzY29wZS5uZXdJdGVtLmJsdXJiID0gXCJcIjtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgJChcIiNuZXctdmFsdWVcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICB9KTtcclxuICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlVmFsdWUgPSAoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCB2YWx1ZVRvRGVsZXRlID0gaXRlbS52YWx1ZTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmRlbGV0ZUxpc3RWYWx1ZSgkc2NvcGUuc2VsZWN0ZWRMaXN0LCBpdGVtKS50aGVuKCgpID0+IHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0LnZhbHVlcyA9ICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLl9pZCAhPT0gaXRlbS5faWQpO1xyXG4gICAgICAgICRzY29wZS50b2FzdChgXCIke3ZhbHVlVG9EZWxldGV9XCIgcmVtb3ZlZGApO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnVwZGF0ZUxpc3QgPSAobGlzdCwgdXBkYXRlcykgPT4ge1xyXG4gICAgICBpZiAobGlzdC5faWQgJiYgbGlzdC5faWQgIT09IFwibmV3XCIpIHtcclxuICAgICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAuLi51cGRhdGVzLFxyXG4gICAgICAgICAgX2lkOiBsaXN0Ll9pZCxcclxuICAgICAgICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNhdmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgY29uc3QgbGlzdEluZGV4ID0gJHNjb3BlLmxpc3RzLmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5faWQgPT09IGRhdGEuX2lkKTtcclxuICAgICAgICAgICRzY29wZS5saXN0c1tsaXN0SW5kZXhdID0gZGF0YTtcclxuICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudXBzZXJ0TGlzdCA9IChsaXN0LCB1cGRhdGVzKSA9PiB7XHJcbiAgICAgICRzY29wZS5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICBpZiAobGlzdC52YWx1ZXMubGVuZ3RoID49IDEwICYmIGxpc3QubmFtZSAmJiBsaXN0LmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGlmIChsaXN0Ll9pZCAmJiBsaXN0Ll9pZCAhPT0gXCJuZXdcIikge1xyXG4gICAgICAgICAgbGV0IGNoYW5nZXMgPSB1cGRhdGVzID8gdXBkYXRlcyA6IGxpc3Q7XHJcbiAgICAgICAgICBkZWxldGUgY2hhbmdlcy5faWQ7XHJcbiAgICAgICAgICBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAgIC4uLmNoYW5nZXMsXHJcbiAgICAgICAgICAgIF9pZDogbGlzdC5faWQsXHJcbiAgICAgICAgICB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICRzY29wZS5saXN0c1skc2NvcGUubGlzdHMuZmluZEluZGV4KChsaXN0KSA9PiBsaXN0Ll9pZCA9PT0gZGF0YS5faWQpXSA9IGRhdGE7XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgPSBkYXRhO1xyXG4gICAgICAgICAgfSwgY29uc29sZS5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5jcmVhdGVMaXN0KCRzY29wZS5jdXJyZW50VXNlciwgJHNjb3BlLnNlbGVjdGVkTGlzdCkudGhlbigoeyBkYXRhIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCRsb2NhdGlvbi5zZWFyY2goKS5saXN0ID09PSBcIm5ld1wiKSB7XHJcbiAgICAgICAgICAgICAgJGxvY2F0aW9uLnNlYXJjaChcImxpc3RcIiwgZGF0YS5faWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QuX2lkID0gZGF0YS5faWQ7XHJcbiAgICAgICAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAgICAgICAkc2NvcGUuc2F2aW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICRzY29wZS50b2FzdChgXCIke2RhdGEubmFtZX1cIiBjcmVhdGVkYCk7XHJcbiAgICAgICAgICB9LCBjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbigkc2NvcGUuc2VsZWN0ZWRMaXN0LCB1cGRhdGVzKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICghbGlzdC5faWQpIHtcclxuICAgICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMobGlzdC5faWQpKSB7XHJcbiAgICAgICAgICAkc2NvcGUubGlzdElkc1RvRGVsZXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9IFtsaXN0Ll9pZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoXCIjbW9kYWwtZGVsZXRlLWxpc3RzXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuZGVsZXRlTGlzdHMgPSAoKSA9PiB7XHJcbiAgICAgICRzY29wZS5saXN0SWRzVG9EZWxldGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICQoXCIjbW9kYWwtZGVsZXRlLWxpc3RzXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNvbmZpcm1NZXJnZUxpc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IFRlblRoaW5nc1N2Yy5tZXJnZUxpc3RzKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMpO1xyXG4gICAgICAkc2NvcGUuZ2V0TGlzdHMoKTtcclxuICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdChyZXNwb25zZS5kYXRhKTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMgPSBbXTtcclxuICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICAkc2NvcGUuY29uZmlybWVkID0gZmFsc2U7XHJcbiAgICAgICRzY29wZS50b2FzdChcIk1lcmdlZFwiKTtcclxuICAgICAgJChcIiNtb2RhbC1tZXJnZS1saXN0c1wiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jb25maXJtRGVsZXRlTGlzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3QgbGlzdElkIG9mICRzY29wZS5saXN0SWRzVG9EZWxldGUpIHtcclxuICAgICAgICBhd2FpdCBUZW5UaGluZ3NTdmMuZGVsZXRlTGlzdChsaXN0SWQpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5nZXRMaXN0cygpO1xyXG4gICAgICAkc2NvcGUuc2VsZWN0ZWRMaXN0ID0gbnVsbDtcclxuICAgICAgJHNjb3BlLmxpc3RJZHNUb0RlbGV0ZSA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9IFtdO1xyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzID0gW107XHJcbiAgICAgICRzY29wZS5jb25maXJtZWQgPSBmYWxzZTtcclxuICAgICAgJHNjb3BlLnRvYXN0KFwiTGlzdHMgZGVsZXRlZFwiKTtcclxuICAgICAgJChcIiNtb2RhbC1kZWxldGUtbGlzdHNcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlSGlnaGxpZ2h0ZWRMaXN0cyA9ICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMubGVuZ3RoID09PSAkc2NvcGUubGlzdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcyA9IFtdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSAkc2NvcGUubGlzdHMubWFwKCh7IF9pZCB9KSA9PiBfaWQpO1xyXG4gICAgICB9XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gJHNjb3BlLmxpc3RzLmZpbHRlcigoeyBfaWQgfSkgPT4gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhfaWQpKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZUhpZ2hsaWdodGVkTGlzdCA9IChsaXN0KSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmluY2x1ZGVzKGxpc3QuX2lkKSkge1xyXG4gICAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0SWRzLmZpbHRlcihcclxuICAgICAgICAgIChoaWdobGlnaHRlZExpc3RJZCkgPT4gaGlnaGxpZ2h0ZWRMaXN0SWQgIT09IGxpc3QuX2lkLFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5wdXNoKGxpc3QuX2lkKTtcclxuICAgICAgfVxyXG4gICAgICAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cyA9ICRzY29wZS5saXN0cy5maWx0ZXIoKHsgX2lkIH0pID0+ICRzY29wZS5oaWdobGlnaHRlZExpc3RJZHMuaW5jbHVkZXMoX2lkKSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRMYW5ndWFnZSA9IChsaXN0LCBsYW5ndWFnZSkgPT4ge1xyXG4gICAgICBsaXN0Lmxhbmd1YWdlID0gbGFuZ3VhZ2UuY29kZTtcclxuICAgICAgJHNjb3BlLnNlbGVjdGVkTGFuZ3VhZ2UgPSBsYW5ndWFnZS5jb2RlO1xyXG4gICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7IGxhbmd1YWdlOiBsYW5ndWFnZS5jb2RlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0RGlmZmljdWx0eSA9IChsaXN0LCBkaWZmaWN1bHR5KSA9PiB7XHJcbiAgICAgIGxpc3QuZGlmZmljdWx0eSA9IGRpZmZpY3VsdHk7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHsgZGlmZmljdWx0eTogZGlmZmljdWx0eSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnNldEZyZXF1ZW5jeSA9IChsaXN0LCBmcmVxdWVuY3kpID0+IHtcclxuICAgICAgbGlzdC5mcmVxdWVuY3kgPSBmcmVxdWVuY3k7XHJcbiAgICAgICRzY29wZS51cHNlcnRMaXN0KGxpc3QsIHsgZnJlcXVlbmN5OiBmcmVxdWVuY3kgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGdldFVwZGF0ZWRDYXRlZ29yaWVzID0gKGxpc3QsIGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGxldCBjYXRlZ29yaWVzID0gbGlzdC5jYXRlZ29yaWVzO1xyXG4gICAgICBpZiAoY2F0ZWdvcmllcy5zb21lKChsaXN0Q2F0ZWdvcnkpID0+IGxpc3RDYXRlZ29yeSA9PT0gY2F0ZWdvcnkpKSB7XHJcbiAgICAgICAgY2F0ZWdvcmllcyA9IGxpc3QuY2F0ZWdvcmllcy5maWx0ZXIoKGxpc3RDYXRlZ29yeSkgPT4gbGlzdENhdGVnb3J5ICE9PSBjYXRlZ29yeSk7XHJcbiAgICAgICAgaWYgKCFjYXRlZ29yeS5pbmNsdWRlcyhcIi5cIikgJiYgY2F0ZWdvcmllcy5zb21lKChsaXN0Q2F0ZWdvcnkpID0+IGxpc3RDYXRlZ29yeS5zdGFydHNXaXRoKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICAgIGNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLmZpbHRlcigobGlzdENhdGVnb3J5KSA9PiAhbGlzdENhdGVnb3J5LnN0YXJ0c1dpdGgoY2F0ZWdvcnkpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgICBpZiAoY2F0ZWdvcnkuaW5jbHVkZXMoXCIuXCIpICYmICFjYXRlZ29yaWVzLmZpbmQoKGxpc3RDYXRlZ29yeSkgPT4gbGlzdENhdGVnb3J5ID09PSBjYXRlZ29yeS5zcGxpdChcIi5cIilbMF0pKSB7XHJcbiAgICAgICAgICBjYXRlZ29yaWVzLnB1c2goY2F0ZWdvcnkuc3BsaXQoXCIuXCIpWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNhdGVnb3JpZXM7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yeSA9IChsaXN0LCBjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBjb25zdCB1cGRhdGVkQ2F0ZWdvcmllcyA9IGdldFVwZGF0ZWRDYXRlZ29yaWVzKGxpc3QsIGNhdGVnb3J5KTtcclxuICAgICAgaWYgKHVwZGF0ZWRDYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICRzY29wZS50b2FzdChgWW91IG11c3QgaGF2ZSBhdCBsZWFzdCAxIGNhdGVnb3J5IGZvciAke2xpc3QubmFtZX1gKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUudXBzZXJ0TGlzdChsaXN0LCB7IGNhdGVnb3JpZXM6IHVwZGF0ZWRDYXRlZ29yaWVzIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5zZXRDYXRlZ29yaWVzID0gYXN5bmMgKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICRzY29wZS5zYXZpbmcgPSB0cnVlO1xyXG4gICAgICBsZXQgbGlzdHNUb1VwZGF0ZSA9IFtdO1xyXG4gICAgICBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMuZXZlcnkoKHsgY2F0ZWdvcmllcyB9KSA9PiBjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICBsaXN0c1RvVXBkYXRlID0gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHM7XHJcbiAgICAgIH0gZWxzZSBpZiAoJHNjb3BlLmhpZ2hsaWdodGVkTGlzdHMuc29tZSgoeyBjYXRlZ29yaWVzIH0pID0+IGNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0ZWdvcnkpKSkge1xyXG4gICAgICAgIGxpc3RzVG9VcGRhdGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5maWx0ZXIoKHsgY2F0ZWdvcmllcyB9KSA9PiAhY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3RzVG9VcGRhdGUgPSAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cztcclxuICAgICAgfVxyXG4gICAgICBjb25zdCB1cGRhdGVkTGlzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgICAgICBsaXN0c1RvVXBkYXRlLm1hcCgobGlzdFRvVXBkYXRlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVkQ2F0ZWdvcmllcyA9IGdldFVwZGF0ZWRDYXRlZ29yaWVzKGxpc3RUb1VwZGF0ZSwgY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgaWYgKHVwZGF0ZWRDYXRlZ29yaWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAkc2NvcGUudG9hc3QoYFlvdSBtdXN0IGhhdmUgYXQgbGVhc3QgMSBjYXRlZ29yeSBmb3IgJHtsaXN0VG9VcGRhdGUubmFtZX1gKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBUZW5UaGluZ3NTdmMudXBkYXRlTGlzdCh7XHJcbiAgICAgICAgICAgICAgX2lkOiBsaXN0VG9VcGRhdGUuX2lkLFxyXG4gICAgICAgICAgICAgIGNhdGVnb3JpZXM6IHVwZGF0ZWRDYXRlZ29yaWVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgKTtcclxuICAgICAgdXBkYXRlZExpc3RzLmZvckVhY2goKHVwZGF0ZWRMaXN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdEluZGV4ID0gJHNjb3BlLmxpc3RzLmZpbmRJbmRleCgobGlzdCkgPT4gbGlzdC5faWQgPT09IHVwZGF0ZWRMaXN0Ll9pZCk7XHJcbiAgICAgICAgJHNjb3BlLmxpc3RzW2xpc3RJbmRleF0gPSB1cGRhdGVkTGlzdDtcclxuICAgICAgfSk7XHJcbiAgICAgICRzY29wZS5oaWdobGlnaHRlZExpc3RzID0gJHNjb3BlLmxpc3RzLmZpbHRlcigoeyBfaWQgfSkgPT4gJHNjb3BlLmhpZ2hsaWdodGVkTGlzdElkcy5pbmNsdWRlcyhfaWQpKTtcclxuICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuY2F0ZWdvcnlTdGF0dXMgPSAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLmV2ZXJ5KCh7IGNhdGVnb3JpZXMgfSkgPT4gY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiY2hlY2tlZFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKCRzY29wZS5oaWdobGlnaHRlZExpc3RzLnNvbWUoKHsgY2F0ZWdvcmllcyB9KSA9PiBjYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkpIHtcclxuICAgICAgICByZXR1cm4gXCJwYXJ0aWFsXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwidW5jaGVja2VkXCI7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmhhc0R1cGxpY2F0ZSA9ICgpID0+XHJcbiAgICAgICRzY29wZS5zZWxlY3RlZExpc3QgJiZcclxuICAgICAgJHNjb3BlLm5ld0l0ZW0udmFsdWUgJiZcclxuICAgICAgXy5zb21lKFxyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExpc3QudmFsdWVzLFxyXG4gICAgICAgIChhbnN3ZXIpID0+IGFuc3dlci52YWx1ZS5yZW1vdmVBbGxCdXRMZXR0ZXJzKCkgPT0gJHNjb3BlLm5ld0l0ZW0udmFsdWUucmVtb3ZlQWxsQnV0TGV0dGVycygpLFxyXG4gICAgICApO1xyXG5cclxuICAgICRzY29wZS5nZXRTZWxlY3RlZExpc3RzVGl0bGUgPSAoKSA9PiAkc2NvcGUuaGlnaGxpZ2h0ZWRMaXN0cy5tYXAoKGxpc3QpID0+IGxpc3QubmFtZSkuam9pbihcIiAvIFwiKTtcclxuXHJcbiAgICAkc2NvcGUuZ2V0Qmx1cmJzID0gKHR5cGUpID0+IHtcclxuICAgICAgJHNjb3BlLmdldHRpbmdCbHVyYnMgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Qmx1cmJzKCRzY29wZS5zZWxlY3RlZExpc3QsIHR5cGUpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgJHNjb3BlLnNldFNlbGVjdGVkTGlzdCgkc2NvcGUuc2VsZWN0ZWRMaXN0KTtcclxuICAgICAgICAgICRzY29wZS5nZXR0aW5nQmx1cmJzID0gZmFsc2U7XHJcbiAgICAgICAgICAkc2NvcGUudG9hc3QoXCJCbHVyYnMgdXBkYXRlZFwiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAkc2NvcGUuZ2V0dGluZ0JsdXJicyA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLnRvYXN0KFwiQmx1cmIgdXBkYXRlIGZhaWxlZFwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldEVtYmVkVXJsID0gKHVybCkgPT4ge1xyXG4gICAgICBpZiAodXJsLmluY2x1ZGVzKFwieW91dHViZS5jb21cIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC9bPyZddj0oW14mXSspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHVybC5pbmNsdWRlcyhcInlvdXR1LmJlXCIpKSB7XHJcbiAgICAgICAgY29uc3QgdmlkZW9JZCA9IHVybC5tYXRjaCgveW91dHVcXC5iZVxcLyhbXiY/XSspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0lkfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKHVybC5pbmNsdWRlcyhcInZpbWVvLmNvbVwiKSkge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSB1cmwubWF0Y2goL3ZpbWVvXFwuY29tXFwvKFxcZCspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIGlmICh1cmwuaW5jbHVkZXMoXCJvcGVuLnNwb3RpZnlcIikpIHtcclxuICAgICAgICBjb25zdCB2aWRlb0lkID0gdXJsLm1hdGNoKC90cmFja1xcLyhbXiY/XSspLylbMV0udHJpbSgpO1xyXG4gICAgICAgIHJldHVybiAkc2NlLnRydXN0QXNSZXNvdXJjZVVybChgaHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2VtYmVkL3RyYWNrLyR7dmlkZW9JZH1gKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJHNjZS50cnVzdEFzUmVzb3VyY2VVcmwodXJsKTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZXR1cm4gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9JZH0/YXV0b3BsYXk9MWA7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCBnZXREYXRhKTtcclxuICB9KTtcclxuIiwiLypqc2xpbnQgZXN2ZXJzaW9uOiA2Ki9cclxuYW5ndWxhclxyXG4gIC5tb2R1bGUoXCJhcHBcIilcclxuICAvL0FuZ3VsYXJKcyBjYW4ndCBoYXZlIGFuIGFycm93IGZ1bmN0aW9uIGhlcmVcclxuICAuY29udHJvbGxlcihcIlRlblRoaW5nc0FkbWluQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBUZW5UaGluZ3NTdmMsIFVzZXJTdmMpIHtcclxuICAgICRzY29wZS4kb24oXCJsb2dpblwiLCAoXykgPT4ge1xyXG4gICAgICBpZiAoJHNjb3BlLmN1cnJlbnRVc2VyLmFkbWluKSB7XHJcbiAgICAgICAgZ2V0VXNlcnMoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyID0ge1xyXG4gICAgICBmaWVsZDogXCJ1c2VybmFtZVwiLFxyXG4gICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLm9yZGVyQnkgPSAoZmllbGQpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5vcmRlci5maWVsZCA9PT0gZmllbGQpIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIucmV2ZXJzZSA9ICEkc2NvcGUub3JkZXIucmV2ZXJzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkc2NvcGUub3JkZXIgPSB7XHJcbiAgICAgICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgICAgICByZXZlcnNlOiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5nZXRRdWV1ZSA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0UXVldWUoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICRzY29wZS5xdWV1ZSA9IHJlc3BvbnNlLmRhdGEucmVwbGFjZShcIi9uXCIsIFwiPGJyLz5cIik7XHJcbiAgICAgICAgJHNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmdldFF1ZXVlKCk7XHJcblxyXG4gICAgVGVuVGhpbmdzU3ZjLmdldFBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgJHNjb3BlLnBhdXNlZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBnZXRVc2VycyA9ICgpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLmdldFVzZXJzKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUudXNlcnMgPSByZXNwb25zZS5kYXRhLmZpbHRlcigodXNlcikgPT4gIXVzZXIuYWRtaW4pO1xyXG4gICAgICAgICRzY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUudG9nZ2xlQmFuID0gKHVzZXIpID0+IHtcclxuICAgICAgJHNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBVc2VyU3ZjLnRvZ2dsZUJhbih1c2VyLl9pZCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBnZXRVc2VycygpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLnRvZ2dsZVBhdXNlID0gKHVzZXIpID0+IHtcclxuICAgICAgVGVuVGhpbmdzU3ZjLnRvZ2dsZVBhdXNlKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAkc2NvcGUucGF1c2VkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICBjb25zb2xlLmxvZygkc2NvcGUucGF1c2VkKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyXHJcbiAgLm1vZHVsZShcImFwcFwiKVxyXG4gIC8vQW5ndWxhckpzIGNhbid0IGhhdmUgYW4gYXJyb3cgZnVuY3Rpb24gaGVyZVxyXG4gIC5jb250cm9sbGVyKFwiVGVuVGhpbmdzR2FtZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgJHN0YXRlUGFyYW1zLCBUZW5UaGluZ3NTdmMsIFVzZXJTdmMpIHtcclxuICAgIGNvbnN0IGdldERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICgkc2NvcGUuY3VycmVudFVzZXIuYWRtaW4pIHtcclxuICAgICAgICBjb25zdCB7IGRhdGE6IHVzZXJzIH0gPSBhd2FpdCBVc2VyU3ZjLmdldFVzZXJzKCk7XHJcbiAgICAgICAgJHNjb3BlLnVzZXJzID0gdXNlcnMuZmlsdGVyKCh1c2VyKSA9PiAhdXNlci5hZG1pbik7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhOiBjYXRlZ29yaWVzIH0gPSBhd2FpdCBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgICRzY29wZS5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcztcclxuICAgICAgICBpZiAoJHN0YXRlUGFyYW1zLmdhbWUpIHtcclxuICAgICAgICAgIFRlblRoaW5nc1N2Yy5nZXRHYW1lKCRzdGF0ZVBhcmFtcy5nYW1lKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAkc2NvcGUuZ2FtZSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5nYW1lKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2V0Q2F0ZWdvcnkgPSBhc3luYyAoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgY29uc3QgeyBkYXRhOiBkaXNhYmxlZENhdGVnb3JpZXMgfSA9IGF3YWl0IFRlblRoaW5nc1N2Yy51cGRhdGVHYW1lQ2F0ZWdvcnkoJHN0YXRlUGFyYW1zLmdhbWUsIGNhdGVnb3J5KTtcclxuICAgICAgJHNjb3BlLmdhbWUuZGlzYWJsZWRDYXRlZ29yaWVzID0gZGlzYWJsZWRDYXRlZ29yaWVzO1xyXG4gICAgICBjb25zb2xlLmxvZyhkaXNhYmxlZENhdGVnb3JpZXMuZmluZCgoYykgPT4gYyA9PT0gY2F0ZWdvcnkpKTtcclxuICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuJHdhdGNoKFwiY3VycmVudFVzZXJcIiwgZ2V0RGF0YSk7XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NQbGF5Q3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBHYW1lU3ZjKSB7XHJcbiAgICAkc2NvcGUua2V5RG93biA9IChlKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XHJcbiAgICAgICAgLy8gRW50ZXJcclxuICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgJHNjb3BlLmNoZWNrQW5zd2VyKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICB9XHJcbiAgICAgIC8vIHVzZSBlLmtleUNvZGVcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKCRzY29wZS5jdXJyZW50VXNlcj8uYWRtaW4pIHtcclxuICAgICAgICBjb25zdCB7IGRhdGE6IGdhbWUgfSA9IGF3YWl0IEdhbWVTdmMuZ2V0VGVudGhpbmdzKCk7XHJcbiAgICAgICAgJHNjb3BlLmdhbWUgPSBnYW1lO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2FtZVwiLCBnYW1lKTtcclxuICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmNoZWNrQW5zd2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBhbnN3ZXIgPSAkc2NvcGUuZ3Vlc3M7XHJcbiAgICAgICRzY29wZS5ndWVzcyA9IFwiXCI7XHJcbiAgICAgIGF3YWl0IEdhbWVTdmMuYW5zd2VyVGVudGhpbmdzKHVuZGVmaW5lZCwgYW5zd2VyKTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLmdldEhpbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IEdhbWVTdmMuZ2V0VGVudGhpbmdzSGludCgpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAkKFwiI21haW4tZ2FtZVwiKS50cmlnZ2VyKFwiZm9jdXNcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAkc2NvcGUuc2tpcExpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGF3YWl0IEdhbWVTdmMuc2tpcFRlbnRoaW5nc0xpc3QoKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgJChcIiNtYWluLWdhbWVcIikudHJpZ2dlcihcImZvY3VzXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgJHNjb3BlLiR3YXRjaChcImN1cnJlbnRVc2VyXCIsIGdldERhdGEpO1xyXG5cclxuICAgICRzY29wZS4kb24oXCJ3czp0ZW50aGluZ3NfbWVzc2FnZVwiLCBmdW5jdGlvbiAoXywgZGF0YSkge1xyXG4gICAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBpZiAoZGF0YS5tZXNzYWdlKSAkc2NvcGUudG9hc3QoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICBnZXREYXRhKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiIsImFuZ3VsYXJcclxuICAubW9kdWxlKFwiYXBwXCIpXHJcbiAgLy9Bbmd1bGFySnMgY2FuJ3QgaGF2ZSBhbiBhcnJvdyBmdW5jdGlvbiBoZXJlXHJcbiAgLmNvbnRyb2xsZXIoXCJUZW5UaGluZ3NTdGF0c0N0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgVGVuVGhpbmdzU3ZjKSB7XHJcbiAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IFtdO1xyXG4gICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSB7IGxhYmVsczogW10sIGRhdGFzZXRzOiBbXSB9O1xyXG5cclxuICAgIGNvbnN0IGxpbmVDaGFydE9wdGlvbnMgPSB7XHJcbiAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICBsZWdlbmQ6IHtcclxuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgdGV4dDogXCJDaGFydC5qcyBMaW5lIENoYXJ0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgICAgaWYgKCEkc2NvcGUuY3VycmVudFVzZXIpIHJldHVybjtcclxuICAgICAgJHNjb3BlLmxhbmd1YWdlU3RhdHMgPSBbXTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldExhbmd1YWdlcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmxhbmd1YWdlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0Q2F0ZWdvcmllcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3JpZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgICAgVGVuVGhpbmdzU3ZjLmdldFBsYXlTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeWVhcnMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgeWVhciB9KSA9PiB5ZWFyKSkuc29ydCgpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRocyA9IF8udGltZXMoMTIsIChpKSA9PiBpICsgMSk7XHJcbiAgICAgICAgJHNjb3BlLnBsYXlTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogbW9udGhzLFxyXG4gICAgICAgICAgc2VyaWVzOiB5ZWFycyxcclxuICAgICAgICAgIGRhdGE6IHllYXJzLm1hcCgoeWVhcikgPT5cclxuICAgICAgICAgICAgbW9udGhzLm1hcCgobW9udGgpID0+IGRhdGEuZmluZCgoaXRlbSkgPT4gaXRlbS5tb250aCA9PT0gbW9udGggJiYgaXRlbS55ZWFyID09PSB5ZWFyKT8udW5pcXVlUGxheWVycyB8fCAwKSxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBvcHRpb25zOiBsaW5lQ2hhcnRPcHRpb25zLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pO1xyXG4gICAgICBUZW5UaGluZ3NTdmMuZ2V0TGlzdExhbmd1YWdlU3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQueWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBsYW5ndWFnZXMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSkpLnNvcnQoKTtcclxuICAgICAgICAkc2NvcGUubGFuZ3VhZ2VTdGF0cyA9IHtcclxuICAgICAgICAgIGxhYmVsczogeWVhcnMsXHJcbiAgICAgICAgICBzZXJpZXM6IGxhbmd1YWdlcyxcclxuICAgICAgICAgIGRhdGE6IGxhbmd1YWdlcy5tYXAoKGxhbmd1YWdlKSA9PlxyXG4gICAgICAgICAgICB5ZWFycy5tYXAoKHllYXIpID0+IGRhdGEuZmluZCgoeyBfaWQgfSkgPT4gX2lkLmxhbmd1YWdlID09PSBsYW5ndWFnZSAmJiBfaWQueWVhciA9PT0geWVhcik/LmNvdW50IHx8IDApLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIG9wdGlvbnM6IGxpbmVDaGFydE9wdGlvbnMsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRHYW1lU3RhdHMoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHllYXJzID0gXy51bmlxKGRhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQueWVhcikpLnNvcnQoKTtcclxuICAgICAgICBjb25zdCBsYW5ndWFnZXMgPSBfLnVuaXEoZGF0YS5tYXAoKHsgX2lkIH0pID0+IF9pZC5sYW5ndWFnZSkpLnNvcnQoKTtcclxuICAgICAgICAkc2NvcGUuZ2FtZVN0YXRzID0ge1xyXG4gICAgICAgICAgbGFiZWxzOiB5ZWFycyxcclxuICAgICAgICAgIHNlcmllczogbGFuZ3VhZ2VzLFxyXG4gICAgICAgICAgZGF0YTogbGFuZ3VhZ2VzLm1hcCgobGFuZ3VhZ2UpID0+XHJcbiAgICAgICAgICAgIHllYXJzLm1hcCgoeWVhcikgPT4gZGF0YS5maW5kKCh7IF9pZCB9KSA9PiBfaWQubGFuZ3VhZ2UgPT09IGxhbmd1YWdlICYmIF9pZC55ZWFyID09PSB5ZWFyKT8uY291bnQgfHwgMCksXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgb3B0aW9uczogbGluZUNoYXJ0T3B0aW9ucyxcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIFRlblRoaW5nc1N2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cygpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IF8uc29ydEJ5KGRhdGEsICh7IGNvdW50IH0pID0+IC1jb3VudCk7XHJcbiAgICAgICAgJHNjb3BlLmNhdGVnb3J5U3RhdHMgPSB7XHJcbiAgICAgICAgICBsYWJlbHM6IHNvcnRlZERhdGEubWFwKCh7IF9pZCB9KSA9PiBfaWQpLFxyXG4gICAgICAgICAgZGF0YTogW3NvcnRlZERhdGEubWFwKCh7IGNvdW50IH0pID0+IGNvdW50KV0sXHJcbiAgICAgICAgfTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS4kd2F0Y2goXCJjdXJyZW50VXNlclwiLCAoKSA9PiB7XHJcbiAgICAgIGdldERhdGEoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLmNvbnRyb2xsZXIoJ1dvcmtvdXRDdHJsJywgZnVuY3Rpb24gKCRzY29wZSkge1xyXG5cclxuICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgJHNjb3BlLnRpbWVFeGVyY2lzaW5nID0gMzA7XHJcbiAgJHNjb3BlLnRpbWVSZXN0aW5nID0gMTA7XHJcbiAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuXHJcbiAgdmFyIHNvdW5kcyA9IHtcclxuICAgIG9uOiBuZXcgQXVkaW8oJ29uLndhdicpLFxyXG4gICAgb2ZmOiBuZXcgQXVkaW8oJ29mZi53YXYnKSxcclxuICAgIHN3aXRjaDogbmV3IEF1ZGlvKCdzd2l0Y2gud2F2JyksXHJcbiAgfTtcclxuXHJcblxyXG4gIHZhciBleGVyY2lzZXMgPSBbXHJcbiAgICB7bmFtZTogJ0p1bXBpbmcgSmFja3MnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdXYWxsIFNpdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1B1c2gtVXAnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdDcnVuY2gnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTdGVwLVVwJywgc3BsaXQ6IHRydWV9LFxyXG4gICAge25hbWU6ICdTcXVhdCcsIHNwbGl0OiBmYWxzZX0sXHJcbiAgICB7bmFtZTogJ1RyaWNlcHMgRGlwJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnUGxhbmsnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdIaWdoIEtuZWVzJywgc3BsaXQ6IGZhbHNlfSxcclxuICAgIHtuYW1lOiAnTHVuZ2UnLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdQdXNoLVVwIHdpdGggUm90YXRpb24nLCBzcGxpdDogZmFsc2V9LFxyXG4gICAge25hbWU6ICdTaWRlIFBsYW5rJywgc3BsaXQ6IHRydWV9XHJcbiAgXTtcclxuXHJcbiAgdmFyIGV4ZXJjaXNpbmc7XHJcblxyXG4gICRzY29wZS5wcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChleGVyY2lzZXMubGVuZ3RoIC0gTWF0aC5mbG9vcigkc2NvcGUudGltZVJlbWFpbmluZyAvICgkc2NvcGUudGltZUV4ZXJjaXNpbmcgKyAkc2NvcGUudGltZVJlc3RpbmcpKSkgKyAnLycgKyBleGVyY2lzZXMubGVuZ3RoO1xyXG4gIH07XHJcblxyXG4gICRzY29wZS53b3Jrb3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgZXhjZXJjaXNlVGltZSA9ICRzY29wZS50aW1lRXhlcmNpc2luZyArICRzY29wZS50aW1lUmVzdGluZztcclxuICAgIGlmICghJHNjb3BlLnRpbWVSZW1haW5pbmcpIHtcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSBleGVyY2lzZXMubGVuZ3RoICogZXhjZXJjaXNlVGltZTtcclxuICAgICAgZXhlcmNpc2luZyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS50aW1lUmVtYWluaW5nLS07XHJcbiAgICAgICAgaWYgKCRzY29wZS50aW1lUmVtYWluaW5nID09PSAwKSB7XHJcbiAgICAgICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJ0ZpbmlzaGVkISBDb25ncmF0cyEnLCBzcGxpdDogZmFsc2V9O1xyXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gJyc7XHJcbiAgICAgICAgICAkc2NvcGUudGltZVJlbWFpbmluZyA9IDA7XHJcbiAgICAgICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xyXG4gICAgICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwoZXhlcmNpc2luZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdXJyZW50RXhlcmNpc2UgPSBNYXRoLmZsb29yKCRzY29wZS50aW1lUmVtYWluaW5nIC8gZXhjZXJjaXNlVGltZSk7XHJcbiAgICAgICAgdmFyIHRpbWVyID0gJHNjb3BlLnRpbWVSZW1haW5pbmcgLSBjdXJyZW50RXhlcmNpc2UgKiBleGNlcmNpc2VUaW1lO1xyXG4gICAgICAgICRzY29wZS50aW1lciA9IHRpbWVyID4gJHNjb3BlLnRpbWVFeGVyY2lzaW5nID8gdGltZXIgLSAkc2NvcGUudGltZUV4ZXJjaXNpbmcgOiB0aW1lcjtcclxuICAgICAgICBpZiAodGltZXIgPiAkc2NvcGUudGltZUV4ZXJjaXNpbmcpIHtcclxuICAgICAgICAgICRzY29wZS5yZXN0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHNjb3BlLnJlc3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHNjb3BlLmV4ZXJjaXNlID0gZXhlcmNpc2VzW2V4ZXJjaXNlcy5sZW5ndGggLSBjdXJyZW50RXhlcmNpc2UgLSAxXTtcclxuICAgICAgICBpZiAodGltZXIgPT09ICRzY29wZS50aW1lRXhlcmNpc2luZykge1xyXG4gICAgICAgICAgc291bmRzLm9uLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRpbWVyID09PSAwKSB7XHJcbiAgICAgICAgICBzb3VuZHMub2ZmLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCRzY29wZS5leGVyY2lzZS5zcGxpdCAmJiB0aW1lciA9PT0gTWF0aC5mbG9vcigkc2NvcGUudGltZUV4ZXJjaXNpbmcgLyAyKSkge1xyXG4gICAgICAgICAgc291bmRzLnN3aXRjaC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRzY29wZS4kYXBwbHkoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGVhckludGVydmFsKGV4ZXJjaXNpbmcpO1xyXG4gICAgICAkc2NvcGUudGltZXIgPSAnJztcclxuICAgICAgJHNjb3BlLnRpbWVSZW1haW5pbmcgPSAwO1xyXG4gICAgICAkc2NvcGUucmVzdCA9IGZhbHNlO1xyXG4gICAgICAkc2NvcGUuZXhlcmNpc2UgPSB7bmFtZTogJycsIHNwbGl0OiBmYWxzZX07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5kaXJlY3RpdmUoXCJjbGlja091dHNpZGVcIiwgZnVuY3Rpb24gKCRkb2N1bWVudCkge1xyXG4gIHJldHVybiB7XHJcbiAgICByZXN0cmljdDogXCJBXCIsXHJcbiAgICBzY29wZToge1xyXG4gICAgICBjbGlja091dHNpZGU6IFwiJlwiLFxyXG4gICAgfSxcclxuICAgIGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWwsIGF0dHIpIHtcclxuICAgICAgJGRvY3VtZW50Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZWwgIT09IGUudGFyZ2V0ICYmICFlbFswXS5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vc2NvcGUuJHBhcmVudC5zZXRTZWxlY3RlZExpc3QoKTtcclxuICAgICAgICAgICAgc2NvcGUuJGV2YWwoc2NvcGUuY2xpY2tPdXRzaWRlKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuXHQuZGlyZWN0aXZlKCdoZWFkJywgW1xyXG5cdFx0JyRyb290U2NvcGUnLFxyXG5cdFx0JyRzdGF0ZScsXHJcblx0XHQnJGNvbXBpbGUnLFxyXG5cdFx0JyRpbnRlcnBvbGF0ZScsXHJcblx0XHRmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHN0YXRlLCAkY29tcGlsZSwgJGludGVycG9sYXRlKSB7XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGUgPSBmdW5jdGlvbiBnZXRTdHlsZSh0ZW1wbGF0ZVN0eWxlVXJsKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdHlsZSA9IHtcclxuXHRcdFx0XHRcdGhyZWY6IHRlbXBsYXRlU3R5bGVVcmwsXHJcblx0XHRcdFx0XHRyZWw6ICdzdHlsZXNoZWV0J1xyXG5cdFx0XHRcdH07XHJcblxyXG5cdFx0XHRcdGlmIChzdHlsZS5ocmVmLm1hdGNoKC9cXC5sZXNzJC8pKSB7XHJcblx0XHRcdFx0XHRzdHlsZS5yZWwgPSAnc3R5bGVzaGVldC9sZXNzJztcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiBzdHlsZTtcclxuXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHR2YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gZ2V0U3R5bGVzKHN0YXRlKSB7XHJcblxyXG5cdFx0XHRcdHZhciBzdGF0ZXMgPSB7fTtcclxuXHJcblx0XHRcdFx0Ly9DaGVjayBzdGF0ZSBmb3Igc3R5bGVzXHJcblx0XHRcdFx0d2hpbGUgKHN0YXRlLm5hbWUgIT09ICcnKSB7XHJcblx0XHRcdFx0XHR2YXIgcGFyZW50ID0gJHN0YXRlLmdldCgnXicsIHN0YXRlKTtcclxuXHJcblx0XHRcdFx0XHQvL0luaXRpYXRlIG91ciB2aWV3IGxpc3RcclxuXHRcdFx0XHRcdGlmICghc3RhdGVzW3BhcmVudC5uYW1lXSkge1xyXG5cdFx0XHRcdFx0XHRzdGF0ZXNbcGFyZW50Lm5hbWVdID0ge307XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly9DaGVjayB0aGUgdGVtcGxhdGVTdHlsZVxyXG5cdFx0XHRcdFx0aWYgKHN0YXRlLnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNbcGFyZW50Lm5hbWVdWycnXSkge1xyXG5cdFx0XHRcdFx0XHRcdHN0YXRlc1twYXJlbnQubmFtZV1bJyddID0gZ2V0U3R5bGUoc3RhdGUudGVtcGxhdGVTdHlsZVVybCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL0NoZWNrIHZpZXdzXHJcblx0XHRcdFx0XHRpZiAoc3RhdGUudmlld3MpIHtcclxuXHRcdFx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlLnZpZXdzLCBmdW5jdGlvbiAodmlldywga2V5KSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgaGF2ZSBhIHN0eWxlXHJcblx0XHRcdFx0XHRcdFx0aWYgKCF2aWV3LnRlbXBsYXRlU3R5bGVVcmwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vQ2hlY2sgaWYgd2UgYXJlIHRhcmdldGluZyBzb21lIHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdGlmICgoa2V5ID0ga2V5LnNwbGl0KCdAJykpWzFdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQvL0NoZWNrIGlmIHdlIGhhdmUgc3R5bGVzIGZvciB0aGF0IHBhcmVudFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZXNba2V5WzFdXSA9IHt9O1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIHNvbWUgcGFyZW50J3Mgdmlld1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzdGF0ZXNba2V5WzFdXVtrZXlbMF1dKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlc1trZXlbMV1dW2tleVswXV0gPSBnZXRTdHlsZSh2aWV3LnRlbXBsYXRlU3R5bGVVcmwpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC8vUGxhY2UgdGhlIHN0eWxlIG9uIG91ciBwYXJlbnQncyB2aWV3XHJcblx0XHRcdFx0XHRcdFx0c3RhdGVzW3BhcmVudC5uYW1lXVtrZXlbMF1dID0gZ2V0U3R5bGUodmlldy50ZW1wbGF0ZVN0eWxlVXJsKTtcclxuXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vQ29udGludWUgd2l0aCB0aGUgcGFyZW50XHJcblx0XHRcdFx0XHRzdGF0ZSA9IHBhcmVudDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vRmxhdHRlbiB0aGUgbGlzdFxyXG5cdFx0XHRcdHZhciBmbGF0ID0gW107XHJcblx0XHRcdFx0Xy5mb3JFYWNoKHN0YXRlcywgZnVuY3Rpb24gKHZpZXdzKSB7XHJcblxyXG5cdFx0XHRcdFx0Xy5mb3JFYWNoKHZpZXdzLCBmdW5jdGlvbiAoc3R5bGUpIHtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghXy5pbmNsdWRlcyhmbGF0LCBzdHlsZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRmbGF0LnB1c2goc3R5bGUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHQvL1JldmVyc2UgaXQgc28gd2UgaGF2ZSBhIHByb3BlciBoaWVyYXJjaHlcclxuXHRcdFx0XHRmbGF0LnJldmVyc2UoKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIGZsYXQ7XHJcblxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRyZXN0cmljdDogJ0UnLFxyXG5cdFx0XHRcdGxpbms6IGZ1bmN0aW9uIChzY29wZSwgZWxlbSkge1xyXG5cclxuXHRcdFx0XHRcdHNjb3BlLnRlbXBsYXRlU3R5bGVzID0gW107XHJcblxyXG5cdFx0XHRcdFx0dmFyIGh0bWwgPSAnPGxpbmsgbmctYXR0ci1yZWw9XCJ7e3N0eWxlLnJlbH19XCIgbmctcmVwZWF0PVwic3R5bGUgaW4gdGVtcGxhdGVTdHlsZXNcIiBuZy1ocmVmPVwie3tzdHlsZS5ocmVmfX1cIj4nO1xyXG5cclxuXHRcdFx0XHRcdGh0bWwgPSBodG1sLnJlcGxhY2UoL1xce1xcey9nLCAkaW50ZXJwb2xhdGUuc3RhcnRTeW1ib2woKSk7XHJcblx0XHRcdFx0XHRodG1sID0gaHRtbC5yZXBsYWNlKC9cXH1cXH0vZywgJGludGVycG9sYXRlLmVuZFN5bWJvbCgpKTtcclxuXHJcblx0XHRcdFx0XHRlbGVtLmFwcGVuZCgkY29tcGlsZShodG1sKShzY29wZSkpO1xyXG5cclxuXHRcdFx0XHRcdCRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uIChldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykge1xyXG5cclxuXHRcdFx0XHRcdFx0c2NvcGUudGVtcGxhdGVTdHlsZXMgPSBnZXRTdHlsZXModG9TdGF0ZSk7XHJcblxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHR9XHJcblx0XSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnQ2F0ZWdvcmllc1N2YycsIGZ1bmN0aW9uKCRodHRwKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0Q2F0ZWdvcmllcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoJy9hcGkvY2F0ZWdvcmllcycpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRUYXNrcyA9IGZ1bmN0aW9uIChjYXRlZ29yeSkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9jYXRlZ29yaWVzLycgKyBjYXRlZ29yeSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmFkZENhdGVnb3J5ID0gZnVuY3Rpb24gKGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9jYXRlZ29yaWVzLycsIGNhdGVnb3J5KTtcclxuICB9O1xyXG5cclxuICBzdmMuYWRkVGFzayA9IGZ1bmN0aW9uIChjYXRlZ29yeSwgdGFzaykge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvY2F0ZWdvcmllcy8nICsgY2F0ZWdvcnkgKyAnL3Rhc2tzJywgdGFzayk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNldFByaW9yaXR5TGlzdCA9IGZ1bmN0aW9uKGxpc3QpIHtcclxuICAgIHN2Yy5jaG9pY2VzID0gbGlzdDtcclxuICAgIHN2Yy5wcmlvcml0eUxpc3QgPSBbXTtcclxuICAgIC8vTWFrZSBhIG5ldyBjaG9pY2UgbGlzdFxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IGxpc3QubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICBzdmMucHJpb3JpdHlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICBmaXJzdENob2ljZTogbGlzdFtyYW5kb20gPT09IDAgPyBpIDogal0ubmFtZSxcclxuICAgICAgICAgIHNlY29uZENob2ljZTogbGlzdFtyYW5kb20gPT09IDAgPyBqIDogaV0ubmFtZSxcclxuICAgICAgICAgIGNob2ljZTogJydcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2h1ZmZsZShzdmMucHJpb3JpdHlMaXN0KTtcclxuICAgIGZvciAoaSBpbiBzdmMucHJpb3JpdHlMaXN0KSB7XHJcbiAgICAgIHN2Yy5wcmlvcml0eUxpc3RbaV0uaWQgPSBpICsgMTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UHJpb3JpdHlMaXN0ID0gZnVuY3Rpb24obGlzdCkge1xyXG4gICAgcmV0dXJuIHN2Yy5wcmlvcml0eUxpc3Q7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gc2h1ZmZsZShhcnJheSkge1xyXG4gICAgdmFyIG0gPSBhcnJheS5sZW5ndGgsIHQsIGk7XHJcbiAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZeKAplxyXG4gICAgd2hpbGUgKG0pIHtcclxuICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW504oCmXHJcbiAgICAgIGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtLS0pO1xyXG4gICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXHJcbiAgICAgIC8vYXJyYXlbbV0uZmlyc3RDaG9pY2U7XHJcbiAgICAgIHQgPSBhcnJheVttXTtcclxuICAgICAgYXJyYXlbbV0gPSBhcnJheVtpXTtcclxuICAgICAgYXJyYXlbaV0gPSB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFycmF5O1xyXG4gIH1cclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0VtYWlsU3ZjJywgZnVuY3Rpb24oJGh0dHApIHtcclxuXHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5zZW5kID0gZnVuY3Rpb24gKGVtYWlsKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9lbWFpbCcsIGVtYWlsKTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLnNlcnZpY2UoXCJGaWxlU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0UXVpekZpbGVzID0gZnVuY3Rpb24gKHF1aXopIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3F1aXp6ZXMvXCIgKyBxdWl6KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIkdhbWVTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRUZW50aGluZ3MgPSBmdW5jdGlvbiAoaWQgPSAxKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvd2ViL1wiICsgaWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hbnN3ZXJUZW50aGluZ3MgPSBmdW5jdGlvbiAoaWQgPSAxLCBhbnN3ZXIpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KFwiL2FwaS90ZW50aGluZ3Mvd2ViL1wiICsgaWQgKyBcIi9hbnN3ZXJcIiwgeyBhbnN3ZXIgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFRlbnRoaW5nc0hpbnQgPSBmdW5jdGlvbiAoaWQgPSAxKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL3dlYi9cIiArIGlkICsgXCIvaGludFwiKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2tpcFRlbnRoaW5nc0xpc3QgPSBmdW5jdGlvbiAoaWQgPSAxKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL3dlYi9cIiArIGlkICsgXCIvc2tpcFwiKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0SGlnaHNjb3JlID0gZnVuY3Rpb24gKGdhbWUsIHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL2dhbWVzL1wiICsgZ2FtZSArIFwiL1wiICsgdXNlciArIFwiL2hpZ2hzY29yZVwiKTtcclxuICB9O1xyXG5cclxuICBzdmMuc2V0SGlnaHNjb3JlID0gZnVuY3Rpb24gKGdhbWUsIHVzZXIsIHNjb3JlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvZ2FtZXMvXCIgKyBnYW1lICsgXCIvXCIgKyB1c2VyICsgXCIvaGlnaHNjb3JlXCIsIHtcclxuICAgICAgc2NvcmU6IHNjb3JlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmZ1enp5TWF0Y2ggPSBmdW5jdGlvbiAodmFsdWVzLCBndWVzcykge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL2dhbWVzL2Z1enp5X21hdGNoXCIsIHtcclxuICAgICAgdmFsdWVzLFxyXG4gICAgICBndWVzcyxcclxuICAgIH0pO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcclxuLnNlcnZpY2UoJ0xhbmd1YWdlU3ZjJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMubGFuZ3VhZ2VzID0gW1xyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJFTlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJFbmdsaXNoXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1nYlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJOTFwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJOZWRlcmxhbmRzXCIsXHJcbiAgICAgIFwiZmxhZ1wiOiBcImZsYWctaWNvbi1ubFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImNvZGVcIjogXCJGUlwiLFxyXG4gICAgICBcIm5hbWVcIjogXCJGcmFuw6dhaXNcIixcclxuICAgICAgXCJmbGFnXCI6IFwiZmxhZy1pY29uLWZyXCJcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBzdmMudGV4dCA9IFtcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRU5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiTkxcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJjb2RlXCI6IFwiRlJcIlxyXG4gICAgfVxyXG4gIF07XHJcblxyXG4gIHN2Yy5zZWxlY3RlZExhbmd1YWdlID0gc3ZjLmxhbmd1YWdlc1swXTtcclxuXHJcbiAgc3ZjLnNldExhbmd1YWdlID0gZnVuY3Rpb24gKGxhbmd1YWdlKSB7XHJcbiAgICBzdmMuc2VsZWN0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlO1xyXG4gICAgcmV0dXJuIGxhbmd1YWdlO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMYW5ndWFnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBzdmMuc2VsZWN0ZWRMYW5ndWFnZTtcclxuICB9O1xyXG5cclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxyXG4uc2VydmljZSgnUG9zdHNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xyXG5cclxuICB2YXIgc3ZjID0gdGhpcztcclxuXHJcbiAgc3ZjLmZldGNoID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cycpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5jcmVhdGUgPSBmdW5jdGlvbiAocG9zdCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoJy9hcGkvcG9zdHMnLCBwb3N0KTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UG9zdCA9IGZ1bmN0aW9uIChwb3N0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KCcvYXBpL3Bvc3RzLycgKyBwb3N0Ll9pZCk7XHJcbiAgfTtcclxuXHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiVGVsZWdyYW1TdmNcIiwgZnVuY3Rpb24gKCRodHRwLCBVc2VyU3ZjKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRHYW1lcyA9IGZ1bmN0aW9uICh1c2VySWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVsZWdyYW0vJHt1c2VySWR9L2dhbWVzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmxpbmtBY2NvdW50ID0gZnVuY3Rpb24gKHVzZXJJZCwgdGVsZWdyYW1EYXRhKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZWxlZ3JhbS8ke3VzZXJJZH0vbGlua2AsIHRlbGVncmFtRGF0YSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiBVc2VyU3ZjLmdldFVzZXIoKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5zZXJ2aWNlKFwiVGVuVGhpbmdzU3ZjXCIsIGZ1bmN0aW9uICgkaHR0cCkge1xyXG4gIHZhciBzdmMgPSB0aGlzO1xyXG5cclxuICBzdmMuZ2V0UXVldWUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYm90cy90ZW50aGluZ3MvcXVldWVgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGlzdHMgPSBmdW5jdGlvbiAob3B0aW9ucyA9IHt9KSB7XHJcbiAgICB2YXIgdXJsID1cclxuICAgICAgYC9hcGkvdGVudGhpbmdzL2xpc3RzP2AgK1xyXG4gICAgICAob3B0aW9ucy5saW1pdCA/IGAmbGltaXQ9JHtvcHRpb25zLmxpbWl0fWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLnBhZ2UgPyBgJnBhZ2U9JHtvcHRpb25zLnBhZ2V9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuc29ydEJ5ID8gYCZzb3J0X2J5PSR7b3B0aW9ucy5zb3J0Qnl9YCA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMub3JkZXJCeSA/IGAmb3JkZXJfYnk9JHtvcHRpb25zLm9yZGVyQnl9YCA6IFwiXCIpICtcclxuICAgICAgLy8gYCZjcmVhdG9yPTVhZTE1ZjE0YjVmNzg4M2ZmMDQ5NzMzOWAgK1xyXG4gICAgICAob3B0aW9ucy5sYW5ndWFnZSAmJiBvcHRpb25zLmxhbmd1YWdlLmxlbmd0aCA+IDAgPyBgJmxhbmd1YWdlPSR7b3B0aW9ucy5sYW5ndWFnZS5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5jYXRlZ29yaWVzICYmIG9wdGlvbnMuY2F0ZWdvcmllcy5sZW5ndGggPiAwID8gYCZjYXRlZ29yaWVzPSR7b3B0aW9ucy5jYXRlZ29yaWVzLmpvaW4oXCIsXCIpfWAgOiBcIlwiKSArXHJcbiAgICAgIChvcHRpb25zLmxhbmd1YWdlTm90ICYmIG9wdGlvbnMubGFuZ3VhZ2VOb3QubGVuZ3RoID4gMCA/IGAmIWxhbmd1YWdlPSR7b3B0aW9ucy5sYW5ndWFnZU5vdC5qb2luKFwiLFwiKX1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5jYXRlZ29yaWVzTm90ICYmIG9wdGlvbnMuY2F0ZWdvcmllc05vdC5sZW5ndGggPiAwXHJcbiAgICAgICAgPyBgJiFjYXRlZ29yaWVzPSR7b3B0aW9ucy5jYXRlZ29yaWVzTm90LmpvaW4oXCIsXCIpfWBcclxuICAgICAgICA6IFwiXCIpICtcclxuICAgICAgKG9wdGlvbnMuc2VhcmNoID8gYCZzZWFyY2g9JHtvcHRpb25zLnNlYXJjaH1gIDogXCJcIikgK1xyXG4gICAgICAob3B0aW9ucy5uYW1lID8gYCZuYW1lPSR7b3B0aW9ucy5uYW1lfWAgOiBcIlwiKTtcclxuXHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KHVybCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFJhbmRvbUxpc3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvbGlzdHMvcmFuZG9tYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnNlYXJjaExpc3RzID0gKG5hbWUpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL3NlYXJjaC9saXN0LW5hbWVzLyR7bmFtZX1gKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoYC9hcGkvdGVudGhpbmdzL2NhdGVnb3JpZXNgKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0TGFuZ3VhZ2VzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChgL2FwaS90ZW50aGluZ3MvbGFuZ3VhZ2VzYCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldExpc3QgPSBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVMaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgIHJldHVybiAkaHR0cC5wdXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkLCBsaXN0KTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlTGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzXCIsIHsgdXNlciwgbGlzdCB9KTtcclxuICB9O1xyXG5cclxuICBzdmMubWVyZ2VMaXN0cyA9IGZ1bmN0aW9uIChsaXN0cykge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9tZXJnZVwiLCB7IGxpc3RzOiBsaXN0cyB9KTtcclxuICB9O1xyXG5cclxuICBzdmMuZGVsZXRlTGlzdCA9IGZ1bmN0aW9uIChsaXN0SWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3RJZCk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLnVwZGF0ZUxpc3RWYWx1ZSA9IGZ1bmN0aW9uIChsaXN0LCB2YWx1ZSkge1xyXG4gICAgcmV0dXJuICRodHRwLnB1dChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXMvXCIgKyB2YWx1ZS5faWQsIHZhbHVlKTtcclxuICB9O1xyXG5cclxuICBzdmMuY3JlYXRlTGlzdFZhbHVlID0gZnVuY3Rpb24gKGxpc3QsIHZhbHVlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdGVudGhpbmdzL2xpc3RzL1wiICsgbGlzdC5faWQgKyBcIi92YWx1ZXNcIiwgdmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5kZWxldGVMaXN0VmFsdWUgPSBmdW5jdGlvbiAobGlzdCwgdmFsdWUpIHtcclxuICAgIHJldHVybiAkaHR0cC5kZWxldGUoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvdmFsdWVzL1wiICsgdmFsdWUuX2lkKTtcclxuICB9O1xyXG5cclxuICBzdmMucmVwb3J0TGlzdCA9IGZ1bmN0aW9uICh1c2VyLCBsaXN0KSB7XHJcbiAgICAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9saXN0cy9cIiArIGxpc3QuX2lkICsgXCIvcmVwb3J0L1wiICsgdXNlci5faWQpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0Q2F0ZWdvcnlTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9jYXRlZ29yaWVzXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRMaXN0TGFuZ3VhZ2VTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9sYW5ndWFnZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFBsYXlTdGF0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5nZXQoXCIvYXBpL3RlbnRoaW5ncy9zdGF0cy9wbGF5XCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRHYW1lU3RhdHMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KFwiL2FwaS90ZW50aGluZ3Mvc3RhdHMvZ2FtZXNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldEJsdXJicyA9IGZ1bmN0aW9uIChsaXN0LCB0eXBlKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvbGlzdHMvJHtsaXN0Ll9pZH0vYmx1cmJzLyR7dHlwZX1gKTtcclxuICB9O1xyXG5cclxuICBzdmMuZ2V0UGF1c2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3RlbnRoaW5ncy9wYXVzZWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5nZXRHYW1lID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAuZ2V0KGAvYXBpL3RlbnRoaW5ncy9nYW1lcy8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVHYW1lQ2F0ZWdvcnkgPSBmdW5jdGlvbiAoaWQsIGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChgL2FwaS90ZW50aGluZ3MvZ2FtZXMvJHtpZH0vY2F0ZWdvcnkvJHtjYXRlZ29yeX1gKTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuc2VydmljZShcIlVzZXJTdmNcIiwgZnVuY3Rpb24gKCRodHRwKSB7XHJcbiAgdmFyIHN2YyA9IHRoaXM7XHJcblxyXG4gIHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnNcIik7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmdldFVzZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnMvYWxsXCIpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy50b2dnbGVCYW4gPSBmdW5jdGlvbiAoaWQpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3VzZXJzL2Jhbi8ke2lkfWApO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5zZXRUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgJGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJYLUF1dGhcIl0gPSB0b2tlbjtcclxuICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5hdXRoZW50aWNhdGUgPSBmdW5jdGlvbiAodXNlcikge1xyXG4gICAgcmV0dXJuICRodHRwXHJcbiAgICAgIC5wb3N0KFwiL2FwaS91c2Vycy9hdXRoZW50aWNhdGVcIiwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UudG9rZW4gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIHJldHVybiBzdmMuc2V0VG9rZW4ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5saW5rVGVsZWdyYW0gPSBmdW5jdGlvbiAodXNlcklkLCB0ZWxlZ3JhbURhdGEpIHtcclxuICAgIHJldHVybiAkaHR0cC5wb3N0KGAvYXBpL3VzZXJzLyR7dXNlcklkfS90ZWxlZ3JhbWAsIHRlbGVncmFtRGF0YSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiBzdmMuZ2V0VXNlcigpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJJZCkge1xyXG4gICAgcmV0dXJuICRodHRwLmdldChcIi9hcGkvdXNlcnMvXCIgKyB1c2VySWQgKyBcIi9sb2dpblwiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnRva2VuID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgcmV0dXJuIHN2Yy5zZXRUb2tlbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy51cGRhdGVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VyLl9pZCwge1xyXG4gICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gc3ZjLmdldFVzZXIoKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoZWNrUGFzc3dvcmQgPSBmdW5jdGlvbiAodXNlcklkLCBwYXNzd29yZCkge1xyXG4gICAgcmV0dXJuICRodHRwLnBvc3QoXCIvYXBpL3VzZXJzL1wiICsgdXNlcklkICsgXCIvdmVyaWZpY2F0aW9uXCIsIHtcclxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoYW5nZVBhc3N3b3JkID0gZnVuY3Rpb24gKHVzZXJJZCwgb2xkUGFzc3dvcmQsIG5ld1Bhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VySWQgKyBcIi9wYXNzd29yZFwiLCB7XHJcbiAgICAgIG9sZFBhc3N3b3JkOiBvbGRQYXNzd29yZCxcclxuICAgICAgbmV3UGFzc3dvcmQ6IG5ld1Bhc3N3b3JkLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNoYW5nZVVzZXJuYW1lID0gZnVuY3Rpb24gKHVzZXJJZCwgbmV3VXNlcm5hbWUpIHtcclxuICAgIHJldHVybiAkaHR0cFxyXG4gICAgICAucG9zdChcIi9hcGkvdXNlcnMvXCIgKyB1c2VySWQgKyBcIi91c2VybmFtZVwiLCB7XHJcbiAgICAgICAgbmV3VXNlcm5hbWU6IG5ld1VzZXJuYW1lLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5nZXRVc2VyKCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHN2Yy5sb2dvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAkaHR0cC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbltcIlgtQXV0aFwiXSA9IFwiXCI7XHJcbiAgfTtcclxuXHJcbiAgc3ZjLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gJGh0dHBcclxuICAgICAgLnBvc3QoXCIvYXBpL3VzZXJzXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN2Yy5sb2dpbih1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlF1aXpBbmltYWxzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgJHNjb3BlLmFuaW1hbHMgPSBbXTtcclxuXHJcbiAgRmlsZVN2Yy5nZXRRdWl6RmlsZXMoXCJhbmltYWxzXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuYW5pbWFscyA9IF8uc2h1ZmZsZShcclxuICAgICAgcmVzcG9uc2UuZGF0YS5tYXAoKGFuaW1hbCkgPT4gKHtcclxuICAgICAgICBzb3VuZDogYW5pbWFsLFxyXG4gICAgICAgIG5hbWU6IGFuaW1hbC5zdWJzdHJpbmcoMCwgYW5pbWFsLmluZGV4T2YoXCIuXCIpKS5yZXBsYWNlKFwiX1wiLCBcIiBcIikuY2FwaXRhbGl6ZSgpLFxyXG4gICAgICB9KSksXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgYW5pbWFsIG9mICRzY29wZS5hbmltYWxzKSB7XHJcbiAgICAgIGFuaW1hbC5hbnN3ZXJzID0gXy5zaHVmZmxlKFthbmltYWwubmFtZSwgLi4uZ2V0UmFuZG9tQW5pbWFscyhhbmltYWwubmFtZSldKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJHNjb3BlLmd1ZXNzID0gKGFuaW1hbCwgZ3Vlc3MpID0+IHtcclxuICAgIGFuaW1hbC5ndWVzcyA9IGd1ZXNzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFJhbmRvbUFuaW1hbHMgPSAobmFtZSkgPT5cclxuICAgIF8uc2h1ZmZsZSgkc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gbmFtZSAhPT0gYW5pbWFsLm5hbWUpLm1hcCgoYW5pbWFsKSA9PiBhbmltYWwubmFtZSkpLnNsaWNlKDAsIDUpO1xyXG5cclxuICAkc2NvcGUuZ2V0U2NvcmUgPSAoKSA9PlxyXG4gICAgYCR7JHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IGFuaW1hbC5uYW1lID09PSBhbmltYWwuZ3Vlc3MpLmxlbmd0aH0vJHskc2NvcGUuYW5pbWFscy5sZW5ndGh9YDtcclxuXHJcbiAgJHNjb3BlLmlzU2NvcmVWaXNpYmxlID0gKCkgPT4gJHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IGFuaW1hbC5ndWVzcykubGVuZ3RoID09PSAkc2NvcGUuYW5pbWFscy5sZW5ndGg7XHJcbn0pO1xyXG4iLCJhbmd1bGFyLm1vZHVsZShcImFwcFwiKS5jb250cm9sbGVyKFwiUXVpekdvb2dsZUN0cmxcIiwgZnVuY3Rpb24gKCRzY29wZSwgRmlsZVN2Yykge1xyXG4gIEZpbGVTdmMuZ2V0UXVpekZpbGVzKFwiZ29vZ2xlXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJRdWl6TG9nb3NDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICBGaWxlU3ZjLmdldFF1aXpGaWxlcyhcImxvZ29zXCIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAkc2NvcGUuaW1hZ2VzID0gcmVzcG9uc2UuZGF0YTtcclxuICB9KTtcclxufSk7XHJcbiIsImFuZ3VsYXIubW9kdWxlKFwiYXBwXCIpLmNvbnRyb2xsZXIoXCJRdWl6TW92aWVzQ3RybFwiLCBmdW5jdGlvbiAoJHNjb3BlLCBGaWxlU3ZjKSB7XHJcbiAgRmlsZVN2Yy5nZXRRdWl6RmlsZXMoXCJtb3ZpZXNcIikudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICRzY29wZS5pbWFnZXMgPSByZXNwb25zZS5kYXRhO1xyXG4gIH0pO1xyXG59KTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJhcHBcIikuY29udHJvbGxlcihcIlF1aXpTa2VsZXRvbnNDdHJsXCIsIGZ1bmN0aW9uICgkc2NvcGUsIEZpbGVTdmMpIHtcclxuICAkc2NvcGUuYW5pbWFscyA9IFtdO1xyXG5cclxuICBGaWxlU3ZjLmdldFF1aXpGaWxlcyhcInNrZWxldG9uc1wiKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgJHNjb3BlLmFuaW1hbHMgPSBfLnNodWZmbGUoXHJcbiAgICAgIHJlc3BvbnNlLmRhdGEubWFwKChhbmltYWwpID0+ICh7XHJcbiAgICAgICAgaW1hZ2U6IGFuaW1hbCxcclxuICAgICAgICBuYW1lOiBhbmltYWwuc3Vic3RyaW5nKDAsIGFuaW1hbC5pbmRleE9mKFwiLlwiKSkucmVwbGFjZShcIl9cIiwgXCIgXCIpLmNhcGl0YWxpemUoKSxcclxuICAgICAgfSkpLFxyXG4gICAgKTtcclxuICAgIGZvciAobGV0IGFuaW1hbCBvZiAkc2NvcGUuYW5pbWFscykge1xyXG4gICAgICBhbmltYWwuYW5zd2VycyA9IF8uc2h1ZmZsZShbYW5pbWFsLm5hbWUsIC4uLmdldFJhbmRvbUFuaW1hbHMoYW5pbWFsLm5hbWUpXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICRzY29wZS5ndWVzcyA9IChhbmltYWwsIGd1ZXNzKSA9PiB7XHJcbiAgICBhbmltYWwuZ3Vlc3MgPSBndWVzcztcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRSYW5kb21BbmltYWxzID0gKG5hbWUpID0+XHJcbiAgICBfLnNodWZmbGUoJHNjb3BlLmFuaW1hbHMuZmlsdGVyKChhbmltYWwpID0+IG5hbWUgIT09IGFuaW1hbC5uYW1lKS5tYXAoKGFuaW1hbCkgPT4gYW5pbWFsLm5hbWUpKS5zbGljZSgwLCAxMCk7XHJcblxyXG4gICRzY29wZS5nZXRTY29yZSA9ICgpID0+XHJcbiAgICBgJHskc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gYW5pbWFsLm5hbWUgPT09IGFuaW1hbC5ndWVzcykubGVuZ3RofS8keyRzY29wZS5hbmltYWxzLmxlbmd0aH1gO1xyXG5cclxuICAkc2NvcGUuaXNTY29yZVZpc2libGUgPSAoKSA9PiAkc2NvcGUuYW5pbWFscy5maWx0ZXIoKGFuaW1hbCkgPT4gYW5pbWFsLmd1ZXNzKS5sZW5ndGggPT09ICRzY29wZS5hbmltYWxzLmxlbmd0aDtcclxufSk7XHJcbiJdfQ==
