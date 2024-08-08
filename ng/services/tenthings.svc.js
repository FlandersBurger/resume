angular.module("app").service("TenThingsSvc", function ($http) {
  var svc = this;

  svc.getQueue = function () {
    return $http.get(`/bots/tenthings/queue`);
  };

  svc.getLists = function (options = {}) {
    var url =
      `/api/tenthings/lists?` +
      (options.limit ? `&limit=${options.limit}` : "") +
      (options.page ? `&page=${options.page}` : "") +
      (options.sortBy ? `&sort_by=${options.sortBy}` : "") +
      (options.orderBy ? `&order_by=${options.orderBy}` : "") +
      (options.languages && options.languages.length > 0 ? `&language=${options.languages.join(",")}` : "") +
      (options.categories && options.categories.length > 0 ? `&categories=${options.categories.join(",")}` : "") +
      (options.search ? `&search=${options.search}` : "");
    return $http.get(url);
  };

  svc.getCategories = () => {
    return $http.get(`/api/tenthings/categories`);
  };

  svc.getLanguages = () => {
    return $http.get(`/api/tenthings/languages`);
  };

  svc.getList = function (list) {
    return $http.get("/api/tenthings/lists/" + list._id);
  };

  svc.updateList = function (list) {
    return $http.put("/api/tenthings/lists/" + list._id, list);
  };

  svc.createList = function (user, list) {
    return $http.post("/api/tenthings/lists", {
      user: user,
      list: list,
    });
  };

  svc.deleteList = function (list) {
    return $http.delete("/api/tenthings/lists/" + list._id);
  };

  svc.updateListValue = function (list, value) {
    return $http.put("/api/tenthings/lists/" + list._id + "/values/" + value._id, value);
  };

  svc.createListValue = function (list, value) {
    return $http.post("/api/tenthings/lists/" + list._id + "/values", value);
  };

  svc.deleteListValue = function (list, value) {
    return $http.delete("/api/tenthings/lists/" + list._id + "/values/" + value._id);
  };

  svc.reportList = function (user, list) {
    $http.get("/api/tenthings/lists/" + list._id + "/report/" + user._id);
  };

  svc.getListCategoryStats = function () {
    return $http.get("/api/tenthings/stats/categories");
  };

  svc.getListLanguageStats = function () {
    return $http.get("/api/tenthings/stats/languages");
  };

  svc.getPlayStats = function () {
    return $http.get("/api/tenthings/stats/play");
  };

  svc.getBlurbs = function (list, type) {
    return $http.post(`/api/tenthings/lists/${list._id}/blurbs/${type}`);
  };

  svc.getPause = function () {
    return $http.get(`/api/tenthings/pause`);
  };

  svc.togglePause = function () {
    return $http.post(`/api/tenthings/pause`);
  };

  svc.getGame = function (id) {
    return $http.get(`/api/tenthings/game/${id}`);
  };
});
