angular.module('app')
  .controller('QuizAnimalsCtrl', function($scope, FileSvc) {

    FileSvc.getSounds('animals')
      .then(function(response) {
        $scope.animals = response.data.map(animal => ({
          sound: animal,
          name: animal.substring(0, animal.indexOf('.')).replace('_', ' ').capitalize()
        }));
        for (let animal of $scope.animals) {
          animal.answers = [animal.name];
          randomAnimals = getRandomAnimals(animal.name);
          animal.answers.push(randomAnimals[0].name);
          animal.answers.push(randomAnimals[1].name);
        }
        console.log($scope.animals);
      });

    $scope.guess = (animal, guess) => {
      animal.guess = guess;
    };

    const getRandomAnimals = name => _.shuffle($scope.animals.filter(animal => name !== animal.name));


  });