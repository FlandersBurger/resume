angular.module('app')
.controller('ProfileCtrl', function ($scope, $location, UserSvc) {

  if (!$scope.currentUser) {
    $location.path('/');
  } else {
    $('#sex-indicator').offset({ left: ($scope.currentUser.gender.sex / 200 * $('#sex').width()) + $('#sex').offset().left });
    $('#identity-indicator').offset({ left: ($scope.currentUser.gender.identity / 200 * $('#identity').width()) + $('#identity').offset().left });
  }

  $scope.sexes = [
    'Male',
    'FtM Male',
    'Intersex',
    'MtF Female',
    'Female'
  ];
  $scope.identities = [
    'Man',
    'Bigender',
    'Pangender',
    'Agender',
    'Polygender',
    'Genderfluid',
    'Genderqueer',
    'Queer',
    'Woman'
  ];

  $scope.dateOptions = {
    maxDate: new Date(),
    minDate: new Date(1900, 1, 1),
    initDate: new Date(2000, 1, 1),
    datepickerMode: 'year'
  };

  $scope.gender = function(array, percentage) {
    return array[Math.round(percentage / 200 * (array.length - 1))];
  };

  $scope.startSlider = function() {

  };
  $scope.dragSlider = function(event, ui, type) {
    $scope.currentUser.gender[type] = Math.round(($('#' + type + '-indicator').offset().left - $('#' + type).offset().left) / ($('#' + type).width() - $('#' + type + '-indicator').width()) * 200);
    $scope.$apply();
  };
  $scope.stopSlider = function() {

  };

  $scope.usernameToggle = true;
  $scope.passwordToggle = true;

  $scope.toggleUsername = function() {
    $scope.usernameToggle = !$scope.usernameToggle;
    $scope.newUsername = $scope.currentUser.username;
  };

  $scope.togglePassword = function() {
    $scope.newPassword = null;
    $scope.confirmPassword = null;
    $scope.passwordToggle = !$scope.passwordToggle;
  };

  $scope.checkPassword = function (password) {
    if (password) {
      var user = $scope.currentUser._id;
      UserSvc.checkPassword(user, password)
      .then(function (response) {
        $scope.togglePassword();
      }, function () {
        var originalBg = $(".password").css("backgroundColor");
        $(".password").animate({ backgroundColor: "#FFB6C1" }, 200).animate({ backgroundColor: originalBg }, 200);
      });
    }
  };

  $scope.changePassword = function (oldPassword, newPassword, confirmPassword) {
    if (newPassword) {
      if (newPassword == confirmPassword) {
        var user = $scope.currentUser._id;
        UserSvc.changePassword(user, oldPassword, newPassword)
        .then(function (response) {
          $scope.$emit('popup', {
            message: 'Password Changed',
            type: 'alert-success'
          });
          $scope.oldPassword = null;
          $scope.togglePassword();
        }, function () {
          $scope.$emit('popup', {
            message: 'Password Change Failed',
            type: 'alert-danger'
          });
        });
      } else {
        var originalBg = $(".password").css("backgroundColor");
        $(".password").animate({ backgroundColor: "#FFB6C1" }, 200).animate({ backgroundColor: originalBg }, 200);
      }
    }
  };

  $scope.changeUsername = function (username) {
    $scope.$emit('loading');
    UserSvc.changeUsername($scope.currentUser._id, username)
    .then(function (response) {
      $scope.$emit('update', response.data);
    }, function(response) {
      $scope.$emit('popup', {
        message: username + ' already in use',
        type: 'alert-danger'
      });
    });
  };

  $scope.updateUser = function () {
    $scope.$emit('loading');
    UserSvc.updateUser($scope.currentUser)
    .then(function (response) {
      $scope.$emit('update', response.data);
    });
  };

});
