angular.module('app')
.service('LanguageSvc', function() {

  var svc = this;

  svc.languages = [
    {
      "code": "EN",
      "name": "English"
    },
    {
      "code": "NL",
      "name": "Nederlands"
    },
    {
      "code": "FR",
      "name": "Français"
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
