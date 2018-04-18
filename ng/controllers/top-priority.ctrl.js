angular.module('app')
.controller('TopPriorityCtrl', function ($scope) {

  var choices;
  var choice;
  var players = [];
  var score;
  var currentAvatar = [];
  var AVATAR_WI = 800;
  var AVATAR_HI = 400;
  var AVATAR_COLS = 8;
  var AVATAR_ROWS = 4;

  $scope.defaultLists = {
    chores: {
      caption: 'Chores, ugh',
      message: 'What chores need to be done?',
      list: ['Laundry', 'Dishes', 'Sweeping', 'Groceries', 'Tidy']
    },
    restaurants: {
      caption: 'We\'re hungry',
      message: 'What do you want to eat?',
      list: ['Chinese', 'Japanese', 'American', 'Indian', 'Greek', 'Italian', 'Korean', 'Thai', 'Vietnamese', 'Mexican']
    },
    pokemon: {
      caption: 'I choose you',
      message: 'Which do you gotta catch?',
      list: ['Pikachu', 'Squirtle', 'Charmander', 'Bulbasaur', 'Pidgeotto', 'Snorlax']
    }
  };

  $scope.list = [];

  $scope.choose_type = function (name) {
    $('#TypeSection').hide();
    if (!name) {
      $scope.list = ['', ''];
      $('#InputTitle').text('What needs prioritizing?');
    } else {
      $scope.list = $scope.defaultLists[name].list;
      $('#InputTitle').text($scope.defaultLists[name].message);
    }
    $('#InputSection').show();
  };

  $scope.removeListItem = function(index) {
    $scope.list.splice(index, 1);
  };

  $scope.addListItem = function() {
    $scope.list.push('');
  };

  $scope.choose_avatar = function() {
    //Choosing an avatar creates a new player
    players[players.length] = new Player(currentAvatar[0], currentAvatar[1]);
    players[players.length - 1].setTasks(score.tasks);
    $scope.prioritize();
  };

  //Task Class
  function Task(name) {
    this.score = 0;
    this.name = name;

    this.choose = function () {
      this.score++;
    };
  }

  //Score Class (keeps track off overall score)
  function Score(list) {
    this.tasks = [];

    for (var i in list) {
      this.tasks[i] = new Task(list[i]);
    }

    this.choose = function(choice) {
      for (var i in this.tasks) {
        if (this.tasks[i].name == choice) {
          this.tasks[i].choose();
        }
      }
    };
  }

  //Player Class (keeps track of avatars and choices)
  function Player(x, y) {

    this.avatar = [x, y];
    this.name = '';
    this.tasks = [];

    this.setTasks = function(list) {
      for (var i = 0; i < list.length; i++) {
        this.tasks[i] = new Task(list[i].name);
      }
    };

    this.choose = function(choice) {
      for (var i in this.tasks) {
        if (this.tasks[i].name == choice) {
          this.tasks[i].choose();
        }
      }
    };

    this.score = function(choice) {
      for (var i in this.tasks) {
        if (this.tasks[i].name == choice) {
          return this.tasks[i].score;
        }
      }
    };
  }

  //Triggered by 'Start Prioritizing' button
  $scope.start = function () {
    var i, j, l, temp;
    t = 0;
    //Get rid of blanks
    $scope.list = $scope.list.filter(function(item) {
      return item;
    });
    l = $scope.list.length;
    //Check if all values are unique
    var unique = checkIfArrayIsUnique($scope.list);
    if (l < 2) {
        alert('Oi, there\'re 2 textboxes for a reason!');
        $scope.list = ['', ''];
        return false;
    } else if (unique !== true) {
        alert('Seems like you prefer ' + unique + '.');
        return false;
    }
    //Below is only reached when there are at least 2 tasks and all tasks are unique
    $('#InputSection').hide();
    //Create global variables for this prioritization
    players = [];
    score = new Score($scope.list);
    random_avatar();
    $('.Top').slideDown('slow');
    $('#AvatarSection').fadeIn();

  };

  //Triggered when an avatar is chosen
  $scope.prioritize = function () {
      var i, j, l, t;
      t = 0;
      l = score.tasks.length;
      choices = [];
      $('#AvatarSection').hide();
      //Make a new choice list
      for (i = 0; i < l - 1; i++) {
        for (j = i + 1; j < l; j++) {
          choices[t] = [];
          choices[t][0] = score.tasks[i].name;
          choices[t][1] = score.tasks[j].name;
          choices[t][2] = 0;
          t++;
        }
      }
      //Shuffle will randomize all choices before displaying
      shuffle(choices);
      $scope.new_choice();
      $('#PrioritizeSection').fadeIn();
  };

  //Triggered when 'Pass to Next Player' is chosen
  $scope.next_player = function () {
      $('#ResultSection').hide();
      $('#btnMultiplayer').val('Final results');
      random_avatar();
      $('#AvatarSection').fadeIn();
  };

  //Used to interprete the button on the results page -> final results page is useless with 1 player.
  $scope.multiplayer = function () {
    if (players.length === 1) {
      $scope.restart();
    } else {
      $scope.final_results();
    }
  };

  //Triggered when the 'Restart' button is clicked
  $scope.restart = function () {
      $('#ResultSection').hide();
      $('#FinalSection').hide();
      $('.Top').slideUp();
      //This will reset the textboxes to 2 and empty them
      $('.ListItem').val('');
      while ($('.ListItem').length > 2) {
          $('.ListItem').last().parent().remove();
      }
      //Clear the final results
      $('#FinalResultList th').remove();
      $('#FinalResultList tr').remove();
      $('#btnMultiplayer').val('Restart');
      $('#TypeSection').fadeIn();
      $('.ListItem').first().focus();
  };

  //Shuffles arrays
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  //Sorts 2 values
  function sortFunction(a, b) {
      if (a[0] === b[0]) {
          return 0;
      } else {
          return (a[0] < b[0]) ? -1 : 1;
      }
  }

  //Checks if all vales are unique in an array
  function checkIfArrayIsUnique(arr) {
      var map = {}, i, size;

      for (i = 0, size = arr.length; i < size; i++){
          if (map[arr[i]]){
              return arr[i];
          }

          map[arr[i]] = true;
      }

      return true;
  }

  //Triggered when the choice buttons need to be filled
  $scope.new_choice = function () {
      var i, percentage;
      for (i = 0; i < choices.length; i++) {
          //Changes the buttons to the next choice
          if (choices[i][2] === 0) {
              var randomChoice = Math.round(Math.random());
              document.getElementById('choice1').value = choices[i][randomChoice];
              document.getElementById('choice2').value = choices[i][1 - randomChoice];
              choice = i;
              //Increases the progress bar
              percentage = Math.round((i * 100 / choices.length));
              $('.progress-bar').css('width', percentage + '%').attr('aria-valuenow', percentage);
              document.getElementById('ChoicesLeft').innerHTML = percentage + '%';
              return false;
          }
      }
  };

  //Triggered when a choice is made
  $scope.choose = function (button) {
      var i;
      //Increase the scores for those buttons
      score.choose(choices[choice][button]);
      players[players.length - 1].choose(choices[choice][button]);
      //Mark the choice made
      choices[choice][2] = 1;
      //Check if it was the last choice, if so, go to results
      var finished = 1;
      for (i = 0; i < choices.length; i++) {
        if (choices[i][2] === 0) {
          finished = 0;
        }
      }
      if (finished == 1) {
        $scope.results();
      } else {
        $scope.new_choice();
      }
  };

  //Triggered when all choices are made
  $scope.results = function () {
      //Set progress bar to 100, this goes too quickly, perhaps I can find a way to delay the rest
      $('.progress-bar').css('width', '100%').attr('aria-valuenow', 100);
      document.getElementById('ChoicesLeft').innerHTML = '100%';
      document.getElementById('ResultList').innerHTML = '';
      $('#PrioritizeSection').hide();
      var i, j, total, player;
      player = players.length - 1;
      //Sort the players scores
      players[player].tasks.sort(function (b, a) {
          return a[0] - b[0];
      });
      //Make an unordered list with the player's scores
      for (i = 0; i < players[player].tasks.length; i++) {
          var node = document.createElement('LI');                 // Create a <li> node
          var textnode = document.createTextNode(players[player].tasks[i].name + ': ' + players[player].tasks[i].score + ' vote' + (players[player].tasks[i].score == 1 ? '' : 's'));     // Create a text node
          node.appendChild(textnode);
          document.getElementById('ResultList').appendChild(node);
      }
      $('#ResultSection').fadeIn();
  };

  //Triggered when 'Final Results' is clicked. Cannot be reached if there's only 1 player
  $scope.final_results = function () {
      $('#ResultSection').hide();
      $('.Top').slideUp();
      var i, j, total;
      //Sorts the final scores
      score.tasks.sort(function (b, a) {
          return a[0] - b[0];
      });
      //Create a header row that with all the players avatars
      var tableHead = document.createElement('THEAD');
      var headerRow = document.createElement('TR');
      headerRow.appendChild(document.createElement('TH'));
      for (i = 0; i < players.length; i++) {
          var th = 'th' + i;
          var colHeader = document.createElement('TH');
          colHeader.setAttribute('id', th);
          colHeader.style.backgroundImage = 'url(\'http://i.imgur.com/IcP5F1m.png\')';
          colHeader.style.width = 50;
          colHeader.style.height = 65;
          colHeader.style.backgroundPosition = (-players[i].avatar[0] * (AVATAR_WI/AVATAR_COLS)) + 'px ' + (-players[i].avatar[1] * (AVATAR_HI/AVATAR_ROWS)) + 'px';
          headerRow.appendChild(colHeader);
      }
      //Add a total column
      var colTotal = document.createElement('TD');
      colTotal.appendChild(document.createTextNode('Total'));
      colTotal.style.height = 65;
      headerRow.appendChild(colTotal);
      tableHead.appendChild(headerRow);
      document.getElementById('FinalResultList').appendChild(tableHead);
      var tableBody = document.createElement('TBODY');
      //Create all the rows for all the choices and add all the players' scores
      for (i = 0; i < score.tasks.length; i++) {
          var row = document.createElement('TR');
          var rowHeader = document.createElement('TD');
          rowHeader.appendChild(document.createTextNode(score.tasks[i].name));
          row.appendChild(rowHeader);
          for (j = 0; j < players.length; j++) {
              var cell = document.createElement('TD');
              cell.appendChild(document.createTextNode(players[j].score(score.tasks[i].name)));
              row.appendChild(cell);
          }
          //Fill the total row
          var rowTotal = document.createElement('TD');
          rowTotal.appendChild(document.createTextNode(score.tasks[i].score));
          row.appendChild(rowTotal);
          tableBody.appendChild(row);
      }
      document.getElementById('FinalResultList').appendChild(tableBody);
      $('#FinalSection').fadeIn();
  };

  //Triggered when the page is loaded
  $(document).ready(function () {
      var max_fields = 10; //maximum input boxes allowed

      $('.ListItem').first().focus();

      $('#Avatars').click(function(e) {
          var offset = $(this).offset();
          var img = document.getElementById('Avatars');
          //or however you get a handle to the IMG
          var width = img.clientWidth;
          var height = img.clientHeight;
          var locationX = (e.pageX - $(this).offset().left)/width*AVATAR_WI;
          locationX = Math.floor(locationX / (AVATAR_WI/AVATAR_COLS));
          var locationY = (e.pageY - $(this).offset().top)/height*AVATAR_HI;
          locationY = Math.floor(locationY / (AVATAR_HI/AVATAR_ROWS));
          check_avatar(locationX, locationY);
      });


  });

  function random_avatar() {
      var used = true;
      var x, y;
      while (used) {
          used = false;
          x = Math.floor(Math.random() * AVATAR_COLS);
          y = Math.floor(Math.random() * AVATAR_ROWS);
          for (var i = 0; i < players.length; i++) {
              if (players[i].avatar[0] == x && players[i].avatar[1] == y) {
                  used = true;
              }
          }
      }
      set_avatar('#Avatar', x, y);
  }

  function check_avatar(x, y) {
    for (var i = 0; i < players.length; i++) {
      if (players[i].avatar[0] == x && players[i].avatar[1] == y) {
        alert('Copycat!');
        random_avatar();
        return;
      }
    }
    set_avatar('#Avatar', x, y);
  }

  function set_avatar(location, x, y) {
      $(location).css('background-position-x', -x * (AVATAR_WI/AVATAR_COLS));
      $(location).css('background-position-y', -y * (AVATAR_HI/AVATAR_ROWS));
      currentAvatar[0] = x;
      currentAvatar[1] = y;
  }


});
