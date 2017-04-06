angular.module('app')
.controller('ContactCtrl', function ($scope) {

  $scope.options = [
    {
      name: "Spam",
      text: "I am a spam bot and automatically check the first option I find!"
    },
    {
      name: "Opportunitiy",
      text: "You seem to have the skills I seek, I'd like to talk about some opportunities."
    },
    {
      name: "Resume",
      text: "I dig the resume, how did you make it?"
    },
    {
      name: "Other",
      text: "Sumtin else!"
    }

  ];

  $scope.contact = {
    email: "",
    name: "",
    phone: "",
    about: "",
    message: ""
  };

  $scope.send = function () {
    $scope.sending = true;
    emailjs.send("gmail", "resume", {
      "email": $scope.contact.email,
      "name": $scope.contact.name,
      "phone":  $scope.contact.phone,
      "about": $scope.contact.about,
      "message": $scope.contact.message
    })
    .then(function(response) {
      $scope.sent = true;
      $scope.$apply();
      console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    }, function(err) {
      $scope.sending = false;
      $scope.$apply();
      console.log("FAILED. error=", err);
    });
  };

});
