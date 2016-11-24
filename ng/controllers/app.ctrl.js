angular.module('app')
.controller('AppCtrl', function ($scope, $location, LanguageSvc) {


  $(window).load(function(){
    $(".loading").fadeOut("slow");
    $(".content").fadeIn("slow");
  });

  $scope.themeCounter = 1;

  $scope.flipTheme = function () {
      $(".loading").show();
      $(".content").hide();
      setTimeout(function(){
        $(".loading").fadeOut("slow");
        $(".content").fadeIn("slow");
      }, 800);
    $scope.themeCounter = $scope.themeCounter < 6 ? $scope.themeCounter + 1 : $scope.themeCounter = 1;
  };

  $scope.languages = LanguageSvc.languages;

  $scope.selectedLanguage = LanguageSvc.getLanguage();

  $scope.selectLanguage = function (language) {
    $scope.selectedLanguage = LanguageSvc.setLanguage(language);
  };

  $scope.socialMedia = [
    {
      "name": "facebook",
      "url": "https://www.facebook.com/flandersburger",
      "icon": "fa-facebook"
    },
    {
      "name": "twitter",
      "url": "https://twitter.com/BelgoCanadian",
      "icon": "fa-twitter"
    },
    {
      "name": "goodreads",
      "url": "https://www.goodreads.com/user/show/17070010-laurent",
      "icon": "fa-book"
    },
    {
      "name": "linkedin",
      "url": "https://www.linkedin.com/in/laurent-debacker-1633a916",
      "icon": "fa-linkedin"
    },
    {
      "name": "github",
      "url": "https://github.com/FlandersBurger",
      "icon": "fa-github"
    },
    {
      "name": "jsfiddle",
      "url": "https://jsfiddle.net/user/BelgoCanadian/fiddles/",
      "icon": "fa-jsfiddle"
    },
    {
      "name": "stackoverflow",
      "url": "http://stackoverflow.com/users/1083923/belgocanadian",
      "icon": "fa-stack-overflow"

    }
  ];
});
