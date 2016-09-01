angular.module('app')
.controller('AppCtrl', function ($scope, $location) {

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
    }
  ]
})
