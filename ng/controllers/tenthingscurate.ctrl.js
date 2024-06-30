angular
  .module("app")
  //AngularJs can't have an arrow function here
  .controller("TenThingsCurateCtrl", function ($scope, $location, TenThingsSvc) {
    let page = 1;
    $scope.lists = [];
    $scope.search = "";
    $scope.languageFilter = "All";
    $scope.categoryFilter = {};
    $scope.selectedList = undefined;
    let exhausted = false;

    $scope.setSelectedList = (list) => {
      if (list) {
        if (list._id !== $scope.selectedList?._id) {
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

    const resetCategoryFilter = () => {
      $scope.categoryFilter = $scope.categories.reduce((filter, category) => {
        filter[category] = true;
        return filter;
      }, {});
    };

    $scope.$on("login", (_) => {
      TenThingsSvc.getLanguages().then((response) => {
        $scope.languages = response.data;
      });
      TenThingsSvc.getCategories().then((response) => {
        $scope.categories = response.data;
        resetCategoryFilter();
      });
      if ($location.search().list) {
        $scope.setSelectedList({ _id: $location.search().list });
      }
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
      $scope.languageFilter = language;
      $scope.getLists();
    };

    $scope.setCategoryFilter = (category) => {
      $scope.categoryFilter[category] = !$scope.categoryFilter[category];
      $scope.getLists();
    };

    $scope.toggleCategoryFilter = () => {
      const categories = Object.keys($scope.categoryFilter);
      if (categories.length === categories.filter((category) => $scope.categoryFilter[category]).length) {
        $scope.categoryFilter = {};
      } else {
        resetCategoryFilter();
      }
      $scope.getLists();
    };

    const getLists = async () => {
      if ($scope.loading || exhausted) return [];
      $scope.loading = true;
      const { data } = await TenThingsSvc.getLists({
        page,
        sortBy: $scope.order.field,
        orderBy: $scope.order.reverse ? -1 : 1,
        limit: 100,
        search: $scope.search,
        language: $scope.languageFilter === "All" ? undefined : $scope.languageFilter,
        categories: Object.keys($scope.categoryFilter).filter((category) => $scope.categoryFilter[category]),
      });
      console.log("Page ", page, " results ", data.result.length);
      if (data.result.length < 100) exhausted = true;
      else page = data.nextPage;
      $scope.loading = false;
      console.log(data.result.slice(0, 10));
      return data.result;
    };

    $scope.getLists();

    $scope.setDifficulty = (list, difficulty) => {
      list.difficulty = difficulty;
      TenThingsSvc.updateList({
        _id: list._id,
        difficulty: difficulty,
      });
    };
  });
