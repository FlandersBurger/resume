angular.module('app')
.controller('ProfileCtrl', function ($scope, $location, UserSvc) {

  var genderSlider = $('#slider').CircularSlider({
      radius: 50,
      innerCircleRatio: '0.9',
      handleDist: 100,
      min: 0,
      max: 359,
      value: 0,
      clockwise: true,
      labelSuffix: "",
      labelPrefix: "",
      shape: "Circle",
      touch: true,
      animate: true,
      animateDuration : 360,
      selectable: false,
      slide: function(ui, value) {},
      onSlideEnd: function(ui, value) {},
      formLabel: undefined
  });

  if (!$scope.currentUser) {
    $location.path('/');
  } else {
    genderSlider.setValue($scope.currentUser.gender);
    $scope.tags = $scope.currentUser.flags;
  }

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
      var user = $scope.currentUser._id
      UserSvc.checkPassword(user, password)
      .then(function (response) {
        $scope.togglePassword()
      }, function () {
        var originalBg = $(".password").css("backgroundColor")
        $(".password").animate({ backgroundColor: "#FFB6C1" }, 200).animate({ backgroundColor: originalBg }, 200);
      })
    }
  }

  $scope.changePassword = function (oldPassword, newPassword, confirmPassword) {
    if (newPassword) {
      if (newPassword == confirmPassword) {
        var user = $scope.currentUser._id
        UserSvc.changePassword(user, oldPassword, newPassword)
        .then(function (response) {
          $scope.$emit('popup', {
            message: 'Password Changed',
            type: 'alert-success'
          })
          $scope.oldPassword = null;
          $scope.togglePassword()
        }, function () {
          $scope.$emit('popup', {
            message: 'Password Change Failed',
            type: 'alert-danger'
          })
        })
      } else {
        var originalBg = $(".password").css("backgroundColor")
        $(".password").animate({ backgroundColor: "#FFB6C1" }, 200).animate({ backgroundColor: originalBg }, 200);
      }
    }
  }

  $scope.changeUsername = function (username) {
    UserSvc.changeUsername($scope.currentUser._id, username)
    .then(function (response) {
      $scope.$emit('popup', {
        message: 'Username changed to ' + username,
        type: 'alert-success'
      })
      $scope.currentUser.username = username
    }, function(response) {
      $scope.$emit('popup', {
        message: username + ' already in use',
        type: 'alert-danger'
      })
    })
  }

  $scope.updateUser = function () {
    var gender = genderSlider.getValue()
    var flags = $scope.tags
    var user = $scope.currentUser._id
    UserSvc.updateUser(user, gender, flags)
    .then(function (response) {
      $scope.$emit('update', response.data)
      $scope.$emit('popup', {
        message: 'Profile updated',
        type: 'alert-success'
      })
    })
  }

  $scope.loadCountries = function($query) {
    var countries = [
      { "name": "Andorra", "flag": "flag-ad", "tidbit": "" },
      { "name": "United Arab Emirates", "flag": "flag-ae" },
      { "name": "Afghanistan", "flag": "flag-af" },
      { "name": "Antigua and Barbuda", "flag": "flag-ag" },
      { "name": "Anguilla", "flag": "flag-ai" },
      { "name": "Albania", "flag": "flag-al" },
      { "name": "Armenia", "flag": "flag-am" },
      { "name": "Angola", "flag": "flag-ao" },
      { "name": "Antarctica", "flag": "flag-aq" },
      { "name": "Argentina", "flag": "flag-ar" },
      { "name": "American Somoa", "flag": "flag-as" },
      { "name": "Austria", "flag": "flag-at" },
      { "name": "Australia", "flag": "flag-au" },
      { "name": "Aruba", "flag": "flag-aw" },
      { "name": "Åland Islands", "flag": "flag-ax" },
      { "name": "Azerbaijan", "flag": "flag-az" },
      { "name": "Bosnia and Herzegovina", "flag": "flag-ba" },
      { "name": "Barbados", "flag": "flag-bb" },
      { "name": "Bangladesh", "flag": "flag-bd" },
      { "name": "Belgium", "flag": "flag-be" },
      { "name": "Burkina Faso", "flag": "flag-bf" },
      { "name": "Bulgaria", "flag": "flag-bg" },
      { "name": "Bahrain", "flag": "flag-bh" },
      { "name": "Burundi", "flag": "flag-bi" },
      { "name": "Benin", "flag": "flag-bj" },
      { "name": "Saint Barthélemy", "flag": "flag-bl" },
      { "name": "Bermuda", "flag": "flag-bm" },
      { "name": "Brunei ", "flag": "flag-bn" },
      { "name": "Bolivia, Plurinational State of", "flag": "flag-bo" },
      { "name": "Bonaire, Sint Eustatius and Saba", "flag": "flag-bq" },
      { "name": "Brazil", "flag": "flag-br" },
      { "name": "Bahamas", "flag": "flag-bs" },
      { "name": "Bhutan", "flag": "flag-bt" },
      { "name": "Bouvet Island", "flag": "flag-bv" },
      { "name": "Botswana", "flag": "flag-bw" },
      { "name": "Belarus", "flag": "flag-by" },
      { "name": "Belize", "flag": "flag-bz" },
      { "name": "Canada", "flag": "flag-ca" },
      { "name": "Cocos (Keeling) Islands", "flag": "flag-cc" },
      { "name": "Congo, the Democratic Republic of the", "flag": "flag-cd" },
      { "name": "Central African Republic", "flag": "flag-cf" },
      { "name": "Congo", "flag": "flag-cg" },
      { "name": "Switzerland", "flag": "flag-ch" },
      { "name": "Côte d'Ivoire", "flag": "flag-ci" },
      { "name": "Cook Islands", "flag": "flag-ck" },
      { "name": "Chile", "flag": "flag-cl" },
      { "name": "Cameroon", "flag": "flag-cm" },
      { "name": "China", "flag": "flag-cn" },
      { "name": "Colombia", "flag": "flag-co" },
      { "name": "Costa Rica", "flag": "flag-cr" },
      { "name": "Cuba", "flag": "flag-cu" },
      { "name": "Cabo Verde", "flag": "flag-cv" },
      { "name": "Curaçao", "flag": "flag-cw" },
      { "name": "Christmas Island", "flag": "flag-cx" },
      { "name": "Cyprus", "flag": "flag-cy" },
      { "name": "Czech Republic", "flag": "flag-cz" },
      { "name": "Germany", "flag": "flag-de" },
      { "name": "Djibouti", "flag": "flag-dj" },
      { "name": "Denmark", "flag": "flag-dk" },
      { "name": "Dominica", "flag": "flag-dm" },
      { "name": "Dominican Republic", "flag": "flag-do" },
      { "name": "Algeria", "flag": "flag-dz" },
      { "name": "Ecuador", "flag": "flag-ec" },
      { "name": "Estonia", "flag": "flag-ee" },
      { "name": "Egypt", "flag": "flag-eg" },
      { "name": "Western Sahara", "flag": "flag-eh" },
      { "name": "Eritrea", "flag": "flag-er" },
      { "name": "Spain", "flag": "flag-es" },
      { "name": "Ethiopia", "flag": "flag-et" },
      { "name": "Finland", "flag": "flag-fi" },
      { "name": "Fiji", "flag": "flag-fj" },
      { "name": "Falkland Islands (Malvinas)", "flag": "flag-fk" },
      { "name": "Micronesia, Federated States of", "flag": "flag-fm" },
      { "name": "Faroe Islands", "flag": "flag-fo" },
      { "name": "France", "flag": "flag-fr" },
      { "name": "Gabon", "flag": "flag-ga" },
      { "name": "United Kingdom of Great Britain and Northern Ireland", "flag": "flag-gb" },
      { "name": "Grenada", "flag": "flag-gd" },
      { "name": "Georgia", "flag": "flag-ge" },
      { "name": "French Guiana", "flag": "flag-gf" },
      { "name": "Guernsey", "flag": "flag-gg" },
      { "name": "Ghana", "flag": "flag-gh" },
      { "name": "Gibraltar", "flag": "flag-gi" },
      { "name": "Greenland", "flag": "flag-gl" },
      { "name": "Gambia", "flag": "flag-gm" },
      { "name": "Guinea", "flag": "flag-gn" },
      { "name": "Guadeloupe", "flag": "flag-gp" },
      { "name": "Equatorial Guinea", "flag": "flag-gq" },
      { "name": "Greece", "flag": "flag-gr" },
      { "name": "South Georgia and the South Sandwich Islands", "flag": "flag-gs" },
      { "name": "Guatemala", "flag": "flag-gt" },
      { "name": "Guam", "flag": "flag-gu" },
      { "name": "Guinea-Bissau", "flag": "flag-gw" },
      { "name": "Guyana", "flag": "flag-gy" },
      { "name": "Hong Kong", "flag": "flag-hk" },
      { "name": "Heard Island and McDonald Islands", "flag": "flag-hm" },
      { "name": "Honduras", "flag": "flag-hn" },
      { "name": "Croatia", "flag": "flag-hr" },
      { "name": "Haiti", "flag": "flag-ht" },
      { "name": "Hungary", "flag": "flag-hu" },
      { "name": "Indonesia", "flag": "flag-id" },
      { "name": "Ireland", "flag": "flag-ie" },
      { "name": "Israel", "flag": "flag-il" },
      { "name": "Isle of Man", "flag": "flag-im" },
      { "name": "India", "flag": "flag-in" },
      { "name": "British Indian Ocean Territory", "flag": "flag-io" },
      { "name": "Iraq", "flag": "flag-iq" },
      { "name": "Iran, Islamic Republic of", "flag": "flag-ir" },
      { "name": "Iceland", "flag": "flag-is" },
      { "name": "Italy", "flag": "flag-it" },
      { "name": "Jersey", "flag": "flag-je" },
      { "name": "Jamaica", "flag": "flag-jm" },
      { "name": "Jordan", "flag": "flag-jo" },
      { "name": "Japan", "flag": "flag-jp" },
      { "name": "Kenya", "flag": "flag-ke" },
      { "name": "Kyrgyzstan", "flag": "flag-kg" },
      { "name": "Cambodia", "flag": "flag-kh" },
      { "name": "Kiribati", "flag": "flag-ki" },
      { "name": "Comoros", "flag": "flag-km" },
      { "name": "Saint Kitts and Nevis", "flag": "flag-kn" },
      { "name": "Korea, Democratic People's Republic of", "flag": "flag-kp" },
      { "name": "Korea, Republic of", "flag": "flag-kr" },
      { "name": "Kuwait", "flag": "flag-kw" },
      { "name": "Cayman Islands", "flag": "flag-ky" },
      { "name": "Kazakhstan", "flag": "flag-kz" },
      { "name": "Lao People's Democratic Republic", "flag": "flag-la" },
      { "name": "Lebanon", "flag": "flag-lb" },
      { "name": "Saint Lucia", "flag": "flag-lc" },
      { "name": "Liechtenstein", "flag": "flag-li" },
      { "name": "Sri Lanka", "flag": "flag-lk" },
      { "name": "Liberia", "flag": "flag-lr" },
      { "name": "Lesotho", "flag": "flag-ls" },
      { "name": "Lithuania", "flag": "flag-lt" },
      { "name": "Luxembourg", "flag": "flag-lu" },
      { "name": "Latvia", "flag": "flag-lv" },
      { "name": "Libya", "flag": "flag-ly" },
      { "name": "Morocco", "flag": "flag-ma" },
      { "name": "Monaco", "flag": "flag-mc" },
      { "name": "Moldova, Republic of", "flag": "flag-md" },
      { "name": "Montenegro", "flag": "flag-me" },
      { "name": "Saint Martin (French part)", "flag": "flag-mf" },
      { "name": "Madagascar", "flag": "flag-mg" },
      { "name": "Marshall Islands", "flag": "flag-mh" },
      { "name": "Macedonia, the former Yugoslav Republic of", "flag": "flag-mk" },
      { "name": "Mali", "flag": "flag-ml" },
      { "name": "Myanmar", "flag": "flag-mm" },
      { "name": "Mongolia", "flag": "flag-mn" },
      { "name": "Macao", "flag": "flag-mo" },
      { "name": "Northern Mariana Islands", "flag": "flag-mp" },
      { "name": "Martinique", "flag": "flag-mq" },
      { "name": "Mauritania", "flag": "flag-mr" },
      { "name": "Montserrat", "flag": "flag-ms" },
      { "name": "Malta", "flag": "flag-mt" },
      { "name": "Mauritius", "flag": "flag-mu" },
      { "name": "Maldives", "flag": "flag-mv" },
      { "name": "Malawi", "flag": "flag-mw" },
      { "name": "Mexico", "flag": "flag-mx" },
      { "name": "Malaysia", "flag": "flag-my" },
      { "name": "Mozambique", "flag": "flag-mz" },
      { "name": "Namibia", "flag": "flag-na" },
      { "name": "New Caledonia", "flag": "flag-nc" },
      { "name": "Niger", "flag": "flag-ne" },
      { "name": "Norfolk Island", "flag": "flag-nf" },
      { "name": "Nigeria", "flag": "flag-ng" },
      { "name": "Nicaragua", "flag": "flag-ni" },
      { "name": "Netherlands", "flag": "flag-nl" },
      { "name": "Norway", "flag": "flag-no" },
      { "name": "Nepal", "flag": "flag-np" },
      { "name": "Nauru", "flag": "flag-nr" },
      { "name": "Niue", "flag": "flag-nu" },
      { "name": "New Zealand", "flag": "flag-nz" },
      { "name": "Oman", "flag": "flag-om" },
      { "name": "Panama", "flag": "flag-pa" },
      { "name": "Peru", "flag": "flag-pe" },
      { "name": "French Polynesia", "flag": "flag-pf" },
      { "name": "Papua New Guinea", "flag": "flag-pg" },
      { "name": "Philippines", "flag": "flag-ph" },
      { "name": "Pakistan", "flag": "flag-pk" },
      { "name": "Poland", "flag": "flag-pl" },
      { "name": "Saint Pierre and Miquelon", "flag": "flag-pm" },
      { "name": "Pitcairn", "flag": "flag-pn" },
      { "name": "Puerto Rico", "flag": "flag-pr" },
      { "name": "Palestine, State of", "flag": "flag-ps" },
      { "name": "Portugal", "flag": "flag-pt" },
      { "name": "Palau", "flag": "flag-pw" },
      { "name": "Paraguay", "flag": "flag-py" },
      { "name": "Qatar", "flag": "flag-qa" },
      { "name": "Réunion", "flag": "flag-re" },
      { "name": "Romania", "flag": "flag-ro" },
      { "name": "Serbia", "flag": "flag-rs" },
      { "name": "Russian Federation", "flag": "flag-ru" },
      { "name": "Rwanda", "flag": "flag-rw" },
      { "name": "Saudi Arabia", "flag": "flag-sa" },
      { "name": "Solomon Islands", "flag": "flag-sb" },
      { "name": "Seychelles", "flag": "flag-sc" },
      { "name": "Sudan", "flag": "flag-sd" },
      { "name": "Sweden", "flag": "flag-se" },
      { "name": "Singapore", "flag": "flag-sg" },
      { "name": "Saint Helena, Ascension and Tristan da Cunha", "flag": "flag-sh" },
      { "name": "Slovenia", "flag": "flag-si" },
      { "name": "Svalbard and Jan Mayen", "flag": "flag-sj" },
      { "name": "Slovakia", "flag": "flag-sk" },
      { "name": "Sierra Leone", "flag": "flag-sl" },
      { "name": "San Marino", "flag": "flag-sm" },
      { "name": "Senegal", "flag": "flag-sn" },
      { "name": "Somalia", "flag": "flag-so" },
      { "name": "Suriname", "flag": "flag-sr" },
      { "name": "South Sudan", "flag": "flag-ss" },
      { "name": "Sao Tome and Principe", "flag": "flag-st" },
      { "name": "El Salvador", "flag": "flag-sv" },
      { "name": "Sint Maarten (Dutch part)", "flag": "flag-sx" },
      { "name": "Syrian Arab Republic", "flag": "flag-sy" },
      { "name": "Swaziland", "flag": "flag-sz" },
      { "name": "Turks and Caicos Islands", "flag": "flag-tc" },
      { "name": "Chad", "flag": "flag-td" },
      { "name": "French Southern Territories", "flag": "flag-tf" },
      { "name": "Togo", "flag": "flag-tg" },
      { "name": "Thailand", "flag": "flag-th" },
      { "name": "Tajikistan", "flag": "flag-tj" },
      { "name": "Tokelau", "flag": "flag-tk" },
      { "name": "Timor-Leste", "flag": "flag-tl" },
      { "name": "Turkmenistan", "flag": "flag-tm" },
      { "name": "Tunisia", "flag": "flag-tn" },
      { "name": "Tonga", "flag": "flag-to" },
      { "name": "Turkey", "flag": "flag-tr" },
      { "name": "Trinidad and Tobago", "flag": "flag-tt" },
      { "name": "Tuvalu", "flag": "flag-tv" },
      { "name": "Taiwan, Province of China", "flag": "flag-tw" },
      { "name": "Tanzania, United Republic of", "flag": "flag-tz" },
      { "name": "Ukraine", "flag": "flag-ua" },
      { "name": "Uganda", "flag": "flag-ug" },
      { "name": "United States Minor Outlying Islands", "flag": "flag-um" },
      { "name": "United States of America", "flag": "flag-us" },
      { "name": "Uruguay", "flag": "flag-uy" },
      { "name": "Uzbekistan", "flag": "flag-uz" },
      { "name": "Holy See", "flag": "flag-va" },
      { "name": "Saint Vincent and the Grenadines", "flag": "flag-vc" },
      { "name": "Venezuela, Bolivarian Republic of", "flag": "flag-ve" },
      { "name": "Virgin Islands, British", "flag": "flag-vg" },
      { "name": "Virgin Islands, U.S.", "flag": "flag-vi" },
      { "name": "Viet Nam", "flag": "flag-vn" },
      { "name": "Vanuatu", "flag": "flag-vu" },
      { "name": "Wallis and Futuna", "flag": "flag-wf" },
      { "name": "Samoa", "flag": "flag-ws" },
      { "name": "Yemen", "flag": "flag-ye" },
      { "name": "Mayotte", "flag": "flag-yt" },
      { "name": "South Africa", "flag": "flag-za" },
      { "name": "Zambia", "flag": "flag-zm" },
      { "name": "Zimbabwe", "flag": "flag-zw" },
    ]
    return countries.filter(function(country) {
      return country.name.toLowerCase().indexOf($query.toLowerCase()) != -1;
    });
  };

})
