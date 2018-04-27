angular.module('app')
.controller('LoginCtrl', function ($scope, $location, UserSvc) {

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start('#firebaseui-auth-container', {

    callbacks: {
      signInSuccess: function(currentUser, credential, redirectUrl) {
        // No redirect.
        firebase.auth().currentUser.getIdToken(true).then(function(idToken) {
          UserSvc.login({
            displayName: currentUser.displayName,
            email: currentUser.email,
            photoURL: currentUser.photoURL,
            emailVerified: currentUser.emailVerified,
            idToken: idToken
          })
          .then(function (response) {
            $scope.$emit('login', response.data);
            $('#modal-login').modal('hide');
            $location.path('/');
          }, function () {
            $scope.$emit('popup', {
              message: 'Login Failed',
              type: 'alert-danger'
            });
          });
          // ...
        }).catch(function(error) {
          // Handle error
        });
        return false;
      },

      // signInFailure callback must be provided to handle merge conflicts which
      // occur when an existing credential is linked to an anonymous user.
      signInFailure: function(error) {
        // For merge conflicts, the error.code will be
        // 'firebaseui/anonymous-upgrade-merge-conflict'.
        if (error.code != 'firebaseui/anonymous-upgrade-merge-conflict') {
          return Promise.resolve();
        }
        // The credential the user tried to sign in with.
        var cred = error.credential;
        // Copy data from anonymous user to permanent user and delete anonymous
        // user.
        // ...
        // Finish sign-in after data is copied.
        return firebase.auth().signInWithCredential(cred);
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    signInSuccessUrl: '/home',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],

    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    // Other config options...
  });

});
