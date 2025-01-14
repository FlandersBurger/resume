angular.module("app").controller("ContactCtrl", function ($scope, EmailSvc) {
  $scope.options = [
    {
      name: "Spam",
      text: "I am a spam bot and automatically check the first option I find!",
    },
    {
      name: "Opportunity",
      text: "You seem to have the skills I seek, I'd like to talk about some opportunities.",
    },
    {
      name: "Resume",
      text: "I dig the resume, how did you make it?",
    },
    {
      name: "Other",
      text: "Sumtin else!",
    },
  ];

  $scope.contact = {
    email: "",
    name: "",
    phone: "",
    about: "",
    message: "",
  };

  $scope.send = function () {
    $scope.sending = true;
    EmailSvc.send({
      email: $scope.contact.email,
      name: $scope.contact.name,
      phone: $scope.contact.phone,
      about: $scope.contact.about,
      message: $scope.contact.message,
    }).then(
      function (response) {
        $scope.toast("Message sent");
        $scope.sent = true;
        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        console.log(response);
      },
      function (err) {
        $scope.toast("Message send failed");
        $scope.sending = false;
        console.log("FAILED. error=", err);
      },
    );
  };
});
