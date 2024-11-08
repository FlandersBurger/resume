angular
  .module("app")
  //AngularJs can't have an arrow function here
  .controller("TenThingsCtrl", function ($scope, $sce, $location, $mdToast, TenThingsSvc) {
    let page = 1;
    $scope.lists = [];
    $scope.search = "";
    $scope.newItem = {};
    $scope.languageFilter = {};
    $scope.categoryFilter = {};
    $scope.selectedList = undefined;
    $scope.selectedLanguage = "EN";
    $scope.highlightedLists = [];
    $scope.highlightedListIds = [];
    $scope.listIdsToDelete = [];
    $scope.confirmed = false;
    let exhausted = false;

    const toast = (message) => {
      $mdToast.show($mdToast.simple().textContent(message).position("bottom right").hideDelay(3000));
    };

    const objectCategories = ["culture", "nature", "misc", "society", "sports"];
    $scope.blurbTypes = [
      { api: "movies", categories: ["movies"], text: "Get movie posters", adminOnly: false },
      { api: "tv", categories: ["television"], text: "Get tv posters", adminOnly: false },
      { api: "actors", categories: ["movies", "television"], text: "Get actor pics", adminOnly: false },
      { api: "books", categories: ["literature"], text: "Get book covers", adminOnly: false },
      { api: "musicvideos", categories: ["music"], text: "Get music videos", adminOnly: true },
      { api: "unsplash", categories: objectCategories, text: "Get Unsplash pics", adminOnly: false },
      { api: "pexels", categories: objectCategories, text: "Get Pexels pics", adminOnly: false },
      { api: "wiki", categories: objectCategories, text: "Get Wiki pics", adminOnly: false },
    ];

    $scope.haveCommonItems = (arr1, arr2) => {
      return arr1?.some((item) => arr2.includes(item));
    };

    $scope.keyDown = (e) => {
      switch (e.keyCode) {
        // Tab
        case 9:
          if ($("#new-blurb").is(":focus")) {
            $scope.createValue();
          } else if ($("#new-value").is(":focus")) {
            setTimeout(() => {
              $("#new-blurb").trigger("focus");
            });
          }
          break;
        default:
      }
      // use e.keyCode
    };

    $scope.addList = () => {
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
        language: $scope.selectedLanguage,
      };
    };

    $scope.setSelectedItem = (item) => {
      $scope.selectedItem = item;
    };

    $scope.setSelectedList = (list) => {
      $scope.search = $location.search().search;
      if (list) {
        if (list._id === "new") {
          $scope.addList();
        } else {
          TenThingsSvc.getList(list)
            .then(({ data }) => {
              $scope.selectedList = data;
              $location.search("list", data._id);
              $scope.selectedLanguage = $scope.selectedList.language;
              $scope.readOnly =
                !$scope.selectedList ||
                (!$scope.currentUser.admin &&
                  $scope.selectedList.creator._id !== $scope.currentUser._id &&
                  $scope.selectedList._id);
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

    const getData = async () => {
      if (!$scope.currentUser) return;
      const { data: languages } = await TenThingsSvc.getLanguages();
      $scope.languages = languages;
      resetLanguageFilter();
      const { data: categories } = await TenThingsSvc.getCategories();
      $scope.categories = categories;
      resetCategoryFilter();
      const { data: languageStats } = await TenThingsSvc.getListLanguageStats();
      $scope.languageStats = languageStats.reduce((result, { _id, count }) => {
        result[_id.language] = (result[_id.language] || 0) + count;
        return result;
      }, {});
      const { data: categoryStats } = await TenThingsSvc.getListCategoryStats();
      $scope.categoryStats = categoryStats.reduce((result, { _id, count }) => {
        result[_id] = count;
        return result;
      }, {});
      if ($location.search().list) {
        $scope.setSelectedList({ _id: $location.search().list });
      }
      $scope.search = $location.search().search || "";
      $scope.getLists();
    };

    $scope.searchLists = async (viewValue) => {
      if (viewValue.length >= 3) {
        const { data } = await TenThingsSvc.searchLists(viewValue);
        return data;
      } else {
        return [];
      }
    };

    $scope.highlightedSearchText = (text) => {
      if ($scope.search) {
        const regex = new RegExp(`(${$scope.search})`, "gi");
        return text.replace(regex, "<span class='highlight'>$1</span>");
      } else {
        return text;
      }
    };

    $scope.valueOrder = {
      field: "value",
      direction: false,
    };

    $scope.order = {
      field: $location.search().sort || "date",
      direction: $location.search().order ? $location.search().order === "desc" : true,
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
      $location.search("sort", field);
      $location.search("order", $scope.order.direction ? "desc" : "asc");
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
      $scope.highlightedListIds = [];
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

    $scope.getCategoryLabel = (categories) => {
      if (!categories || categories.length === 0) return "";
      const mainCategories = categories.filter((category) => !category.includes("."));
      return mainCategories
        .sort()
        .map((category) => {
          const subcategories = categories
            .filter((subcategory) => subcategory.startsWith(category) && subcategory !== category)
            .map(
              (subcategory) =>
                $scope.categories
                  .find(({ value }) => value === category)
                  .subcategories.find(({ value }) => value === subcategory)?.label,
            );
          return (
            $scope.categories.find(({ value }) => value === category).label +
            (subcategories.length > 0 ? " (" + subcategories.sort().join(", ") + ")" : "")
          );
        })
        .join(", ");
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
      $scope.count = data.count;
      if (data.result.length < 100) exhausted = true;
      else page = data.nextPage;
      $scope.loading = false;
      console.log(data.result.slice(0, 10));
      return data.result;
    };

    $scope.getListName = (listId) => $scope.lists.find(({ _id }) => _id === listId)?.name;

    $scope.updateValue = async (item) => {
      if (!item.value) {
        $scope.deleteValue(item);
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
        if ($scope.selectedList.values.length >= 10) {
          await $scope.upsertList($scope.selectedList);
        }
      } else {
        const createdItemResponse = await TenThingsSvc.createListValue($scope.selectedList, $scope.newItem);
        $scope.selectedList.values.push(createdItemResponse.data);
        console.log($scope.newItem.value);
        toast(`"${$scope.newItem.value}" added`);
      }
      $scope.newItem.value = "";
      $scope.newItem.blurb = "";
      setTimeout(() => {
        $("#new-value").trigger("focus");
      });
      $scope.$apply();
    };

    $scope.deleteValue = (item) => {
      TenThingsSvc.deleteListValue($scope.selectedList, item).then(() => {
        $scope.selectedList.values = $scope.selectedList.values.filter((value) => value._id !== item._id);
        toast(`"${item.value}" removed`);
      });
    };

    $scope.updateList = (list, updates) => {
      if (list._id && list._id !== "new") {
        TenThingsSvc.updateList({
          ...updates,
          _id: list._id,
        }).then(({ data }) => {
          $scope.saving = false;
          const listIndex = $scope.lists.findIndex((list) => list._id === data._id);
          $scope.lists[listIndex] = data;
        }, console.error);
      }
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
            $scope.lists[$scope.lists.findIndex((list) => list._id === data._id)] = data;
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
            toast(`"${data.name}" created`);
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
        $scope.confirmed = false;
        if ($scope.highlightedListIds.includes(list._id)) {
          $scope.listIdsToDelete = $scope.highlightedListIds;
        } else {
          $scope.listIdsToDelete = [list._id];
        }
        $("#modal-delete-lists").modal("show");
      }
    };

    $scope.deleteLists = () => {
      $scope.listIdsToDelete = $scope.highlightedListIds;
      $scope.confirmed = false;
      $("#modal-delete-lists").modal("show");
    };

    $scope.confirmMergeLists = async () => {
      const response = await TenThingsSvc.mergeLists($scope.highlightedListIds);
      $scope.getLists();
      $scope.setSelectedList(response.data);
      $scope.highlightedLists = [];
      $scope.highlightedListIds = [];
      $scope.confirmed = false;
      toast("Merged");
      $("#modal-merge-lists").modal("hide");
    };

    $scope.confirmDeleteLists = async () => {
      for (const listId of $scope.listIdsToDelete) {
        await TenThingsSvc.deleteList(listId);
      }
      $scope.getLists();
      $scope.selectedList = null;
      $scope.listIdsToDelete = [];
      $scope.highlightedLists = [];
      $scope.highlightedListIds = [];
      $scope.confirmed = false;
      toast("Lists deleted");
      $("#modal-delete-lists").modal("hide");
    };

    $scope.toggleHighlightedList = (list) => {
      if ($scope.highlightedListIds.includes(list._id)) {
        $scope.highlightedListIds = $scope.highlightedListIds.filter(
          (highlightedListId) => highlightedListId !== list._id,
        );
      } else {
        $scope.highlightedListIds.push(list._id);
      }
      $scope.highlightedLists = $scope.lists.filter(({ _id }) => $scope.highlightedListIds.includes(_id));
    };

    $scope.setLanguage = (list, language) => {
      list.language = language.code;
      $scope.selectedLanguage = language.code;
      $scope.upsertList(list, { language: language.code });
    };

    $scope.setDifficulty = (list, difficulty) => {
      list.difficulty = difficulty;
      $scope.upsertList(list, { difficulty: difficulty });
    };

    $scope.setFrequency = (list, frequency) => {
      list.frequency = frequency;
      $scope.upsertList(list, { frequency: frequency });
    };

    const getUpdatedCategories = (list, category) => {
      let categories = list.categories;
      if (categories.some((listCategory) => listCategory === category)) {
        categories = list.categories.filter((listCategory) => listCategory !== category);
        if (!category.includes(".") && categories.some((listCategory) => listCategory.startsWith(category))) {
          categories = categories.filter((listCategory) => !listCategory.startsWith(category));
        }
      } else {
        categories.push(category);
        if (category.includes(".") && !categories.find((listCategory) => listCategory === category.split(".")[0])) {
          categories.push(category.split(".")[0]);
        }
      }
      return categories;
    };

    $scope.setCategory = (list, category) => {
      const updatedCategories = getUpdatedCategories(list, category);
      if (updatedCategories.length === 0) {
        toast(`You must have at least 1 category for ${list.name}`);
      } else {
        $scope.upsertList(list, { categories: updatedCategories });
      }
    };

    $scope.setCategories = async (category) => {
      $scope.saving = true;
      let listsToUpdate = [];
      if ($scope.highlightedLists.every(({ categories }) => categories.includes(category))) {
        listsToUpdate = $scope.highlightedLists;
      } else if ($scope.highlightedLists.some(({ categories }) => categories.includes(category))) {
        listsToUpdate = $scope.highlightedLists.filter(({ categories }) => !categories.includes(category));
      } else {
        listsToUpdate = $scope.highlightedLists;
      }
      for (const listToUpdate of listsToUpdate) {
        const updatedCategories = getUpdatedCategories(listToUpdate, category);
        if (updatedCategories.length === 0) {
          toast(`You must have at least 1 category for ${listToUpdate.name}`);
        } else {
          const { data } = await TenThingsSvc.updateList({
            _id: listToUpdate._id,
            categories: updatedCategories,
          });
          const listIndex = $scope.lists.findIndex((list) => list._id === data._id);
          $scope.lists[listIndex] = data;
        }
      }
      $scope.highlightedLists = $scope.lists.filter(({ _id }) => $scope.highlightedListIds.includes(_id));
      $scope.$apply();
    };

    $scope.categoryStatus = (category) => {
      if ($scope.highlightedLists.every(({ categories }) => categories.includes(category))) {
        return "checked";
      } else if ($scope.highlightedLists.some(({ categories }) => categories.includes(category))) {
        return "partial";
      } else {
        return "unchecked";
      }
    };

    $scope.hasDuplicate = () =>
      $scope.selectedList &&
      $scope.newItem.value &&
      _.some(
        $scope.selectedList.values,
        (answer) => answer.value.removeAllButLetters() == $scope.newItem.value.removeAllButLetters(),
      );

    $scope.getSelectedListsTitle = () => $scope.highlightedLists.map((list) => list.name).join(" / ");

    $scope.getBlurbs = (type) => {
      $scope.gettingBlurbs = true;
      TenThingsSvc.getBlurbs($scope.selectedList, type)
        .then(() => {
          $scope.setSelectedList($scope.selectedList);
          $scope.gettingBlurbs = false;
          toast("Blurbs updated");
        })
        .catch((err) => {
          console.error(err);
          $scope.gettingBlurbs = false;
          toast("Blurb update failed");
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
    $(document).on("hidden.bs.modal", "#modal-update-multiple-lists", function () {
      $scope.getLists();
    });
  });
