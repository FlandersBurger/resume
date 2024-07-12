angular
  .module("app")
  //AngularJs can't have an arrow function here
  .controller("TenThingsCurateCtrl", function ($scope, $location, TenThingsSvc) {
    let page = 1;
    $scope.lists = [];
    $scope.search = "";
    $scope.newItem = {};
    $scope.languageFilter = {};
    $scope.categoryFilter = {};
    $scope.selectedList = undefined;
    let exhausted = false;

    $scope.keyDown = (e) => {
      e = e || window.event;
      switch (e.keyCode) {
        case 9:
          if ($("#new-blurb").is(":focus")) {
            setTimeout(() => {
              $scope.addValue();
            }, 100);
          }
          break;
        case 13:
          if ($("#new-blurb").is(":focus")) {
            $scope.addValue();
          } else if ($("#new-value").is(":focus")) {
            $("#new-blurb").focus();
          }
          break;
        default:
      }
      // use e.keyCode
    };

    $scope.addList = () => {
      const currentLanguage = $scope.selectedList ? $scope.selectedList.language : "EN";
      $location.search("list", "new");
      $scope.selectedList = {
        name: "",
        creator: $scope.currentUser._id,
        date: new Date(),
        values: [],
        answers: 0,
        isDynamic: true,
        category: "",
        categories: [],
        language: currentLanguage,
      };
    };

    $scope.setSelectedList = (list) => {
      if (list) {
        if (list._id === "new") {
          $scope.addList();
        } else if (!$scope.selectedList || list._id !== $scope.selectedList._id) {
          TenThingsSvc.getList(list)
            .then(({ data }) => {
              $scope.selectedList = data;
              $location.search("list", data._id);
              console.log(data);
            })
            .catch((err) => console.error(err));
        }
      } else {
        {
          $scope.selectedList = undefined;
          $location.search("list", null);
        }
      }
    };

    const resetLanguageFilter = () => {
      $scope.languageFilter = {};
    };

    const resetCategoryFilter = () => {
      $scope.categoryFilter = {};
    };

    $scope.$on("login", (_) => {
      TenThingsSvc.getLanguages().then((response) => {
        $scope.languages = response.data;
        resetLanguageFilter();
      });
      TenThingsSvc.getCategories().then((response) => {
        $scope.categories = response.data;
        resetCategoryFilter();
      });
      if ($location.search().list) {
        $scope.setSelectedList({ _id: $location.search().list });
      }
      $scope.search = $location.search().search || "";
      $scope.getLists();
    });

    $scope.order = {
      field: "date",
      reverse: true,
    };

    $scope.orderBy = (field) => {
      if ($scope.order.field === field) {
        $scope.order.reverse = !$scope.order.reverse;
      } else {
        $scope.order = {
          field: field,
          reverse: false,
        };
      }
      $scope.getLists();
    };

    $scope.getMoreLists = async () => {
      if ($scope.lists.length === 0) return;
      getLists().then((lists) => {
        $scope.lists = $scope.lists.concat(lists);
      });
    };

    $scope.getLists = () => {
      $scope.lists = [];
      page = 1;
      exhausted = false;
      getLists().then((lists) => {
        $scope.lists = lists;
        $scope.$apply();
      });
    };

    $scope.setLanguageFilter = (language) => {
      if (!$scope.languageFilter[language.code]) {
        $scope.languageFilter[language.code] = true;
      } else {
        $scope.languageFilter[language.code] = !$scope.languageFilter[language.code];
      }
      $scope.getLists();
    };

    $scope.setCategoryFilter = (category) => {
      if (!$scope.categoryFilter[category]) {
        $scope.categoryFilter[category] = true;
      } else {
        $scope.categoryFilter[category] = !$scope.categoryFilter[category];
      }
      $scope.getLists();
    };

    $scope.toggleCategoryFilter = () => {
      const categories = Object.keys($scope.categoryFilter);
      const allCategories =
        categories.length === categories.filter((category) => $scope.categoryFilter[category]).length;
      $scope.categoryFilter = $scope.categories.reduce((filter, category) => {
        filter[category] = !allCategories;
        return filter;
      }, {});
      $scope.getLists();
    };

    const getLists = async () => {
      if ($scope.loading || exhausted) return [];
      $scope.loading = true;
      if ($location.search().search !== $scope.search) {
        $location.search("search", $scope.search ? $scope.search : null);
      }
      const { data } = await TenThingsSvc.getLists({
        page,
        sortBy: $scope.order.field,
        orderBy: $scope.order.reverse ? -1 : 1,
        limit: 200,
        search: $scope.search,
        languages: Object.keys($scope.languageFilter).filter((language) => $scope.languageFilter[language]),
        categories: Object.keys($scope.categoryFilter).filter((category) => $scope.categoryFilter[category]),
      });
      console.log("Page ", page, " results ", data.result.length);
      if (data.result.length < 100) exhausted = true;
      else page = data.nextPage;
      $scope.loading = false;
      console.log(data.result.slice(0, 10));
      return data.result;
    };

    $scope.addValue = () => {
      if ($scope.newItem.value) {
        if ($scope.hasDuplicate()) {
          alert(`${$scope.newItem.value} is already in the list`);
        } else {
          $scope.newItem.creator = $scope.currentUser._id;
          $scope.selectedList.values.unshift(JSON.parse(JSON.stringify($scope.newItem)));
          $scope.selectedList.answers++;
          $scope.upsertList($scope.selectedList);
          $scope.newItem.value = "";
          $scope.newItem.blurb = "";
        }
      }
      $("#new-value").focus();
    };

    $scope.upsertList = (list, updates) => {
      $scope.saving = true;
      if (list.values.length >= 10 && list.name && list.categories.length > 0) {
        if (list._id !== "new") {
          TenThingsSvc.updateList({
            _id: list._id,
            ...(updates ? updates : list),
          }).then(({ data }) => {
            console.log(data);
            $scope.saving = false;
          }, console.error);
        } else {
          TenThingsSvc.saveList($scope.currentUser, $scope.selectedList).then(({ data }) => {
            if ($location.search().list === "new") {
              $location.search("list", data._id);
            }
            $scope.getLists();
            $scope.saving = false;
          }, console.error);
        }
      }
    };

    $scope.deleteList = (list) => {
      if (!list._id) {
        $scope.selectedList = null;
      } else {
        if (confirm("Are you sure you want to delete this list?")) {
          TenThingsSvc.deleteList(list).then(() => {
            $scope.getLists();
            $scope.selectedList = null;
          });
        }
      }
    };

    $scope.setLanguage = (list, language) => {
      list.language = language.code;
      const nonEnglishIndex = list.categories.indexOf("Non-English");
      if (language.code !== "EN" && nonEnglishIndex < 0) {
        list.categories.push("Non-English");
      } else if (language.code === "EN" && nonEnglishIndex >= 0) {
        list.categories.splice(nonEnglishIndex, 1);
      }
      $scope.upsertList(list, {
        categories: list.categories,
        language: language.code,
      });
    };

    $scope.setDifficulty = (list, difficulty) => {
      list.difficulty = difficulty;
      $scope.upsertList(list, {
        difficulty: difficulty,
      });
    };

    $scope.setFrequency = (list, frequency) => {
      list.frequency = frequency;
      $scope.upsertList(list, {
        frequency: frequency,
      });
    };

    $scope.setCategory = (list, category) => {
      const categoryIndex = list.categories.indexOf(category);
      if (categoryIndex >= 0) {
        list.categories.splice(categoryIndex, 1);
      } else {
        list.categories.push(category);
      }
      $scope.upsertList(list, {
        categories: list.categories,
      });
    };

    $scope.hasDuplicate = () =>
      $scope.selectedList &&
      $scope.newItem.value &&
      _.some(
        $scope.selectedList.values,
        (answer) => answer.value.removeAllButLetters() == $scope.newItem.value.removeAllButLetters(),
      );
  });
