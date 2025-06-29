angular.module("app").controller("AppCtrl", function ($scope, LanguageSvc, UserSvc, $mdToast) {
  console.log(
    "%cYou sneaky bugger!",
    "font: 2em sans-serif; color: DodgerBlue; text-shadow: 2px 0 0 #444, -2px 0 0 #444, 0 2px 0 #444, 0 -2px 0 #444, 1px 1px #444, -1px -1px 0 #444, 1px -1px 0 #444, -1px 1px 0 #444;",
  );
  console.log(
    "I'm glad you're curious whether something is popping up in here. I'm a bit of a stickler when it comes to messages in the console so I try to make sure only things I want are visible. That being said, if there is a big error here, I would really appreciate you telling me so I can get rid of it!",
  );
  console.log(
    "The code for my resume is hosted on Github if you really want to go into all this! => https://github.com/FlandersBurger/resume",
  );

  $scope.toast = (message) => {
    $mdToast.show(
      $mdToast
        .simple()
        .parent(document.querySelectorAll("#toast"))
        .textContent(message)
        .position("top right")
        .hideDelay(3000),
    );
  };
  /*
    $(document).bind("keyup keydown", function(e){
      if(e.ctrlKey && e.keyCode == 80){
          return false;
      }
    });
    */
  // @ts-ignore
  $(window).load(function () {
    $(".loading").fadeOut("slow");
    $(".content").fadeIn("slow");
  });

  $(".checkbox-menu").on("change", "input[type='checkbox']", function () {
    $(this).closest("li").toggleClass("active", this.checked);
  });

  $(document).on("click", ".allow-focus", function (e) {
    e.stopPropagation();
  });

  $scope.themeCounter = 6;
  $scope.today = new Date();
  $scope.year = $scope.today.getFullYear();
  $scope.random = Math.floor(Math.random() * 1000000);

  $scope.flipTheme = () => {
    $(".loading").show();
    $(".content").hide();
    setTimeout(() => {
      $(".loading").fadeOut("slow");
      $(".content").fadeIn("slow");
    }, 800);
    $scope.themeCounter = $scope.themeCounter < 6 ? $scope.themeCounter + 1 : ($scope.themeCounter = 1);
  };

  $.getJSON("/skills.json", function (data) {
    $scope.skills = data.filter(function (skill) {
      return skill.enabled;
    });
  });

  $.getJSON("/hobbies.json", function (data) {
    $scope.hobbies = data;
  });

  $.getJSON("/experience.json", function (data) {
    $scope.jobs = data;
    $scope.jobs.forEach((job) => {
      job.startDate = new Date(job.startDate);
      if (job.endDate) job.endDate = new Date(job.endDate);
    });
  });

  $.getJSON("/charades.json", function (data) {
    $scope.charades = data;
  });

  $scope.getTimeSpan = (job) => {
    return job.startDate.getFullYear() + (job.endDate ? " - " + job.endDate.getFullYear() : " - Today");
  };

  $scope.languages = LanguageSvc.languages;

  $scope.selectedLanguage = LanguageSvc.getLanguage();

  $scope.selectLanguage = (language) => {
    $scope.selectedLanguage = LanguageSvc.setLanguage(language);
  };

  $scope.hoverdiv = (e, divid) => {
    var left = e.clientX + "px";
    var top = e.clientY + 20 + "px";

    var div = document.getElementById(divid);

    $("#" + divid).css("left", left);
    $("#" + divid).css("top", top);

    $("#" + divid).toggle();
    return false;
  };

  if (window.localStorage.user) {
    UserSvc.login(window.localStorage.user).then((response) => {
      login(response.data);
    });
  }

  $scope.$on("login", (_, user) => {
    login(user);
  });

  const login = (user) => {
    if (!$scope.loggedIn) {
      window.localStorage.user = user._id;
      $scope.loggedIn = true;
      $scope.currentUser = user;
      $scope.currentUser.birthDate = new Date($scope.currentUser.birthDate);
      $scope.$broadcast("login");
    }
  };

  $scope.$on("update", (_, user) => {
    $scope.currentUser = user;
    $scope.currentUser.birthDate = new Date($scope.currentUser.birthDate);
    $scope.loading = false;
    setTimeout(() => {
      $("#loading-icon").fadeOut("slow");
    }, 1000);
  });

  $scope.$on("loading", (_, user) => {
    $scope.loading = true;
    $("#loading-icon").show();
  });

  $scope.$on("loaded", (_, user) => {
    $scope.loading = false;
    setTimeout(function () {
      $("#loading-icon").fadeOut("slow");
    }, 1000);
  });

  $scope.logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        $scope.loggedIn = false;
        window.localStorage.clear();
        $scope.$broadcast("logout");
      })
      .catch((error) => {
        // An error happened.
        console.error(error);
      });
  };

  $scope.formatDate = (date) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    date = new Date(date);
    return date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear();
  };
});
