angular.module('app')
.service('CategoriesSvc', function($http) {

  var svc = this;

  svc.getCategories = function () {
    return $http.get('/api/categories');
  };

  svc.getTasks = function (category) {
    return $http.get('/api/categories/' + category);
  };

  svc.addCategory = function (category) {
    return $http.post('/api/categories/', category);
  };

  svc.addTask = function (category, task) {
    return $http.post('/api/categories/' + category + '/tasks', task);
  };

  svc.setPriorityList = function(list) {
    svc.choices = list;
    svc.priorityList = [];
    //Make a new choice list
    for (var i = 0; i < list.length; i++) {
      for (var j = i + 1; j < list.length; j++) {
        var random = Math.round(Math.random());
        svc.priorityList.push({
          id: 0,
          firstChoice: list[random === 0 ? i : j].name,
          secondChoice: list[random === 0 ? j : i].name,
          choice: ''
        });
      }
    }
    shuffle(svc.priorityList);
    for (i in svc.priorityList) {
      svc.priorityList[i].id = i + 1;
    }
  };

  svc.getPriorityList = function(list) {
    return svc.priorityList;
  };

  function shuffle(array) {
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      //array[m].firstChoice;
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

});
