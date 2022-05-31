angular
	.module('app')
	//AngularJs can't have an arrow function here
	.controller(
		'TenThingsCurateCtrl',
		function ($scope, TenThingsSvc) {

			$scope.$on('login', _ => {
				$scope.getLists();
			});

			$scope.getLists = () => {
				$scope.loading = true;
				TenThingsSvc.getLists().then(({ data }) => {				
					$scope.lists = data;
					console.log(data);
					$scope.loading = false;
				});
			};

			$scope.setDifficulty = (list, difficulty) => {
				list.difficulty = difficulty;
				TenThingsSvc.updateList({
					_id: list._id,
					difficulty: difficulty,
				});
			}
		}
	);
