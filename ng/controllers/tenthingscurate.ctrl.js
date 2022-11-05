angular
	.module('app')
	//AngularJs can't have an arrow function here
	.controller(
		'TenThingsCurateCtrl',
		function ($scope, TenThingsSvc) {
			
			TenThingsSvc.getLanguages().then(response => {
				$scope.languages = response.data;
			});

			$scope.$on('login', _ => {
				$scope.getLists();
			});
			
			$scope.order = {
        field: 'name',
        reverse: false
   		};

			$scope.orderBy = (field) => {
				if ($scope.order.field === field) {
					$scope.order.reverse = !$scope.order.reverse;
				} else {					
					$scope.order = {
						field: field,
						reverse: false
					};
				}
			};

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
