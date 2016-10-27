angular.module('app')
.service('LanguageSvc', function() {

  var svc = this;

  svc.languages = [
    {
      "code": "EN",
      "name": "English",
      "flag": "flag-icon-gb"
    },
    {
      "code": "NL",
      "name": "Nederlands",
      "flag": "flag-icon-nl"
    },
    {
      "code": "FR",
      "name": "Français",
      "flag": "flag-icon-fr"
    }
  ];

  svc.text = [
    {
      "code": "EN"
    },
    {
      "code": "NL"
    },
    {
      "code": "FR"
    }
  ];

  svc.selectedLanguage = svc.languages[0];

  svc.setLanguage = function (language) {
    svc.selectedLanguage = language;
    return language;
  };

  svc.getLanguage = function () {
    return svc.selectedLanguage;
  };

});
