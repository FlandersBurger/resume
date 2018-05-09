angular.module('app')
.controller('PrioritizeCtrl', function ($scope, $location, CategoriesSvc) {

  $scope.priorityList = CategoriesSvc.getPriorityList();

  if (!$scope.priorityList) {
    $location.path('/lists');
  } else {
    $scope.selectedQuestion = 1;
    $scope.currentQuestion = 1;
    $scope.done = false;
  }

  $scope.makeChoice = function(choice) {
    for (var i in $scope.priorityList) {
      if ($scope.priorityList[i].id === $scope.selectedQuestion) {
        $scope.priorityList[i].choice = choice === 1 ? $scope.priorityList[i].firstChoice : $scope.priorityList[i].secondChoice;
      }
    }
    if ($scope.selectedQuestion === $scope.currentQuestion) {
      $scope.currentQuestion = $scope.currentQuestion === $scope.priorityList.length ? 1 : $scope.currentQuestion + 1;
    }
    $scope.selectedQuestion = $scope.currentQuestion;
    var found = false;
    for (i in $scope.priorityList) {
      if ($scope.priorityList[i].choice === '') {
        found = true;
        break;
      }
    }
    if (!found) {
      $('#prioritizeChoices').hide(300);
      $scope.done = true;
    }
  };

  $scope.getButtonValue = function(choice) {
    if (!$scope.priorityList) {
      return '';
    }
    for (var i = 0; i < $scope.priorityList.length; i++) {
      if ($scope.priorityList[i].id === $scope.selectedQuestion) {
        return choice === 1 ? $scope.priorityList[i].firstChoice : $scope.priorityList[i].secondChoice;
      }
    }
  };

  $scope.selectQuestion = function(question) {
    $scope.selectedQuestion = question;
  };

  $scope.getFilteredPriorityList = function() {
    if (!$scope.priorityList) {
      return [];
    }
    return $scope.priorityList
      .sort(function(a, b){ return a.id-b.id; })
      .filter(function(question) { return question.choice !== '' || question.id === $scope.currentQuestion; });
  };

  $scope.getChoicesMade = function() {
    if (!$scope.priorityList) {
      return '';
    }
    var choicesMade = 0;
    for (var i in $scope.priorityList) {
      if ($scope.priorityList[i].choice !== '') {
        choicesMade++;
      }
    }
    return choicesMade;
  };

  $scope.getButtonClass = function(choice) {
    if (!$scope.priorityList) {
      return '';
    }
    for (var i in $scope.priorityList) {
      if ($scope.priorityList[i].id === $scope.selectedQuestion) {
        if ($scope.priorityList[i].choice === '') {
          return 'btn-primary';
        }
        if (choice === 1) {
          return $scope.priorityList[i].firstChoice === $scope.priorityList[i].choice ? 'btn-success' : 'btn-danger';
        } else {
          return $scope.priorityList[i].secondChoice === $scope.priorityList[i].choice ? 'btn-success' : 'btn-danger';
        }
      }
    }
  };

  $scope.showChoices = function() {
    $('#prioritizeChoices').show(1000);
    $('#reviewChoices').hide();
  };

  $scope.chartClick = function( event ) {
    if ( $scope.chart ) {
      // Different methods depending on chart type
      //console.log( $scope.chart.getPointsAtEvent( event ) ); // for Points
      console.log( $scope.chart.getSegmentsAtEvent( event ) ); // for Segments
    }
  };

  $scope.showResults = function() {

    $scope.data = [];
    $scope.options = {
      // Sets the chart to be responsive
      responsive: true,

      //Boolean - Whether we should show a stroke on each segment
      segmentShowStroke : true,

      //String - The colour of each segment stroke
      segmentStrokeColor : '#fff',

      //Number - The width of each segment stroke
      segmentStrokeWidth : 2,

      //Number - The percentage of the chart that we cut out of the middle
      percentageInnerCutout : 0, // This is 0 for Pie charts

      //Number - Amount of animation steps
      animationSteps : 100,

      //String - Animation easing effect
      animationEasing : 'easeOutBounce',

      //Boolean - Whether we animate the rotation of the Doughnut
      animateRotate : true,

      //Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale : false,

      //String - A legend template
      legendTemplate : '<h3 class="tc-chart-js-legend" style="padding:5px"><% for (var i=0; i<segments.length; i++){%><div class="label" style="float:left;margin:5px;background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></div><%}%></h3>'
    };
    for (var i in CategoriesSvc.choices) {
      CategoriesSvc.choices[i].votes = 0;
      for (var j in $scope.priorityList) {
        if (CategoriesSvc.choices[i].name === $scope.priorityList[j].choice) {
          CategoriesSvc.choices[i].votes++;
        }
      }
    }
    CategoriesSvc.choices.sort(function(a, b) { return a.votes < b.votes; });
    for (i in CategoriesSvc.choices) {
      $scope.data.push({
        value: CategoriesSvc.choices[i].votes,
        label: CategoriesSvc.choices[i].name
      });
    }
    $('#prioritizeResult').hide();
    $('#prioritizeChoices').hide();
    $('#priorityResults').show(1000);
  };

});
