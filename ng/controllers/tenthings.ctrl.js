angular
  .module("app")
  //AngularJs can't have an arrow function here
  .controller("TenThingsCtrl", function ($scope, $sce, $location, TenThingsSvc) {
    let page = 1;
    $scope.lists = [];
    $scope.search = "";
    $scope.newItem = {};
    $scope.languageFilter = {};
    $scope.categoryFilter = {};
    $scope.selectedList = undefined;
    $scope.selectedList = undefined;
    let exhausted = false;

    $scope.keyDown = (e) => {
      e = e || window.event;
      switch (e.keyCode) {
        // Tab
        case 9:
          if ($("#new-blurb").is(":focus")) {
            $scope.createValue();
            $("#new-value").focus();
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

    $scope.setSelectedItem = (item) => {
      $scope.selectedItem = item;
    };

    $scope.setSelectedList = (list) => {
      if (list) {
        if (list._id === "new") {
          $scope.addList();
        } else {
          TenThingsSvc.getList(list)
            .then(({ data }) => {
              $scope.selectedList = data;
              $location.search("list", data._id);
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

    const getData = () => {
      if (!$scope.currentUser) return;
      TenThingsSvc.getLanguages().then((response) => {
        $scope.languages = response.data;
        resetLanguageFilter();
      });
      TenThingsSvc.getCategories().then((response) => {
        $scope.categories = response.data;
        resetCategoryFilter();
      });
      TenThingsSvc.getListLanguageStats().then(({ data }) => {
        $scope.languageStats = data.reduce((result, { _id, count }) => {
          result[_id] = count;
          return result;
        }, {});
      });
      TenThingsSvc.getListCategoryStats().then(({ data }) => {
        $scope.categoryStats = data.reduce((result, { _id, count }) => {
          result[_id] = count;
          return result;
        }, {});
      });
      if ($location.search().list) {
        $scope.setSelectedList({ _id: $location.search().list });
      }
      $scope.search = $location.search().search || "";
      $scope.getLists();
    };

    $scope.valueOrder = {
      field: "value",
      direction: false,
    };

    $scope.order = {
      field: "date",
      direction: true,
    };

    $scope.orderBy = (field) => {
      if ($scope.order.field === field) {
        $scope.order.direction = !$scope.order.direction;
      } else {
        $scope.order = {
          field: field,
          direction: false,
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
        orderBy: $scope.order.direction ? -1 : 1,
        limit: 100,
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

    $scope.updateValue = async (item) => {
      if (!item.value) {
        await TenThingsSvc.deleteListValue($scope.selectedList, item);
      } else {
        const updatedItemResponse = await TenThingsSvc.updateListValue($scope.selectedList, item);
        item.blurbType = updatedItemResponse.data.blurbType;
        $scope.$apply();
      }
    };

    $scope.createValue = async () => {
      if (!$scope.newItem.value) return;
      if ($scope.hasDuplicate()) {
        return alert(`${$scope.newItem.value} is already in the list`);
      } else if (!$scope.selectedList._id) {
        $scope.selectedList.values.push({ ...$scope.newItem });
        if ($scope.selectedList.values.length <= 10) {
          await $scope.upsertList($scope.selectedList);
        }
      } else {
        const createdItemResponse = await TenThingsSvc.createListValue($scope.selectedList, $scope.newItem);
        $scope.selectedList.values.push(createdItemResponse.data);
      }
      $scope.newItem.value = "";
      $scope.newItem.blurb = "";
      $("#new-value").focus();
      $scope.$apply();
    };

    $scope.deleteValue = (item) => {
      TenThingsSvc.deleteListValue($scope.selectedList, item).then(() => {
        $scope.selectedList.values = $scope.selectedList.values.filter((value) => value._id !== item._id);
      });
    };

    $scope.upsertList = (list, updates) => {
      $scope.saving = true;
      if (list.values.length >= 10 && list.name && list.categories.length > 0) {
        if (list._id && list._id !== "new") {
          let changes = updates ? updates : list;
          delete changes._id;
          TenThingsSvc.updateList({
            ...changes,
            _id: list._id,
          }).then(({ data }) => {
            $scope.saving = false;
            const listIndex = $scope.lists.findIndex((list) => list._id === data._id);
            $scope.lists[listIndex] = data;
            $scope.selectedList = data;
          }, console.error);
        } else {
          TenThingsSvc.createList($scope.currentUser, $scope.selectedList).then(({ data }) => {
            if ($location.search().list === "new") {
              $location.search("list", data._id);
            }
            $scope.selectedList._id = data._id;
            $scope.getLists();
            $scope.saving = false;
          }, console.error);
        }
      } else {
        Object.assign($scope.selectedList, updates);
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

    $scope.getBlurbs = (type) => {
      $scope.gettingBlurbs = true;
      TenThingsSvc.getBlurbs($scope.selectedList, type)
        .then(() => {
          $scope.setSelectedList($scope.selectedList);
          $scope.gettingBlurbs = false;
        })
        .catch((err) => {
          console.error(err);
          $scope.gettingBlurbs = false;
        });
    };

    $scope.getEmbedUrl = (url) => {
      if (url.includes("youtube.com")) {
        const videoId = url.match(/[?&]v=([^&]+)/)[1].trim();
        return $sce.trustAsResourceUrl(`https://www.youtube.com/embed/${videoId}`);
      } else if (url.includes("youtu.be")) {
        const videoId = url.match(/youtu\.be\/([^&?]+)/)[1].trim();
        return $sce.trustAsResourceUrl(`https://www.youtube.com/embed/${videoId}`);
      } else if (url.includes("vimeo.com")) {
        const videoId = url.match(/vimeo\.com\/(\d+)/)[1].trim();
        return $sce.trustAsResourceUrl(`https://player.vimeo.com/video/${videoId}`);
      } else if (url.includes("open.spotify")) {
        const videoId = url.match(/track\/([^&?]+)/)[1].trim();
        return $sce.trustAsResourceUrl(`https://open.spotify.com/embed/track/${videoId}`);
      } else {
        return $sce.trustAsResourceUrl(url);
      }
      // return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    };

    $scope.$watch("currentUser", getData);
  });
