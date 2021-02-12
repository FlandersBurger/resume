angular
	.module('app')
	//AngularJs can't have an arrow function here
	.controller(
		'TenThingsGameCtrl',
		function ($scope, $stateParams, TenThingsSvc) {
			$scope.$on('login', _ => {
				if ($scope.currentUser.admin) {
					getUsers();
				}
			});

			if ($stateParams.game) {
				TenThingsSvc.getGame($stateParams.game).then(response => {
					$scope.game = response.data;
					console.log($scope.game);
				});
			}
		}
	);
