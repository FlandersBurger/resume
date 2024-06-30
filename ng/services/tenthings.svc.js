angular.module("app").service("TenThingsSvc", function ($http) {
  var svc = this;

  svc.getQueue = function () {
    return $http.get(`/bots/tenthings/queue`);
  };

  svc.getLists = function ({ page, sortBy, orderBy, limit, search, language, categories }) {
    var url =
      `/api/tenthings/lists?` +
      (limit ? `&limit=${limit}` : "") +
      (page ? `&page=${page}` : "") +
      (sortBy ? `&sort_by=${sortBy}` : "") +
      (orderBy ? `&order_by=${orderBy}` : "") +
      (language ? `&language=${language}` : "") +
      (categories.length > 0 ? `&categories=${categories.join(",")}` : "") +
      `&search=${search}`;
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
    return $http.post("/api/tenthings/lists/" + list._id, list);
  };

  svc.saveList = function (user, list) {
    return $http.put("/api/tenthings/lists", {
      user: user,
      list: list,
    });
  };

  svc.reportList = function (user, list) {
    $http.get("/api/tenthings/lists/" + list._id + "/report/" + user._id);
  };

  svc.deleteList = function (list) {
    return $http.delete("/api/tenthings/lists/" + list._id);
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
