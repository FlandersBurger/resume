angular
	.module('app')
	//AngularJs can't have an arrow function here
	.controller(
		'TenThingsCurateCtrl',
		function ($scope, TenThingsSvc) {

			$scope.$on('login', _ => {
				getLists();
			});

			const getLists = () => {
				TenThingsSvc.getLists().then(({ data }) => {				
					$scope.lists = data;
					console.log(data);
					
				});
			};
		}
	);
