angular.module('app')
.controller('AppCtrl', function ($scope, $location, LanguageSvc) {

  console.log("%cYou sneaky bugger!", "font: 2em sans-serif; color: DodgerBlue; text-shadow: 2px 0 0 #444, -2px 0 0 #444, 0 2px 0 #444, 0 -2px 0 #444, 1px 1px #444, -1px -1px 0 #444, 1px -1px 0 #444, -1px 1px 0 #444;");
  console.log("I'm glad you're curious whether something is popping up in here. I'm a bit of a stickler when it comes to messages in the console so I try to make sure only things I want are visible. That being said, if there is a big error here, I would really appreciate you telling me so I can get rid of it!");
  console.log("The code for my resume is hosted on Github if you really want to go into all this! => https://github.com/FlandersBurger/resume");

  $(window).load(function(){
    $(".loading").fadeOut("slow");
    $(".content").fadeIn("slow");
  });

  $scope.themeCounter = 6;

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

  $scope.hoverdiv = function (e,divid){
    console.log(divid);
    var left  = e.clientX  + "px";
    var top  = e.clientY  + "px";

    var div = document.getElementById(divid);

    $("#"+divid).css('left',left);
    $("#"+divid).css('top',top);

    $("#"+divid).toggle();
    return false;
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
