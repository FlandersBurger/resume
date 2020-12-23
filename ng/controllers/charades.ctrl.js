angular.module('app').controller('CharadesCtrl', function ($scope) {
	$scope.loading = true;
	$.getJSON('/charades.json', function (data) {
		$scope.charades = data;
		$scope.loading = false;
	});

	$scope.selectWord = category => {
		$scope.word =
			$scope.charades[category][
				Math.floor(Math.random() * $scope.charades[category].length)
			];
		console.log($scope.word);
	};
});
