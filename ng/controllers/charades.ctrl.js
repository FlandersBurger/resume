angular.module('app').controller('CharadesCtrl', function ($scope) {
	$.getJSON('/charades.json', function (data) {
		$scope.charades = data;
		$scope.categories = Object.keys($scope.charades);
	});

	$scope.selectWord = category => {
		$scope.word =
			$scope.charades[category][
				Math.floor(Math.random() * $scope.charades[category].length)
			];
		console.log($scope.word);
	};
});
