angular.module('app')
  .controller('QuizAnimalsCtrl', function($scope, FileSvc) {

    FileSvc.getSounds('animals')
      .then(function(response) {
        $scope.animals = response.data.map(animal => ({
          sound: animal,
          name: animal.substring(0, animal.indexOf('.')).replace('_', ' ').capitalize()
        }));
        for (let animal of $scope.animals) {
          animal.answers = _.shuffle([animal.name, ...getRandomAnimals(animal.name)]);
        }
        console.log($scope.animals);
      });

    $scope.guess = (animal, guess) => {
      animal.guess = guess;
    };

    const getRandomAnimals = name => _.shuffle($scope.animals.filter(animal => name !== animal.name).map(animal => animal.name)).slice(0, 5);

    $scope.getScore = () => `${$scope.animals.filter(animal => animal.name === animal.guess).length}/${$scope.animals.length}`;

    $scope.isScoreVisible = () => $scope.animals.filter(animal => animal.guess).length === $scope.animals.length;
  });