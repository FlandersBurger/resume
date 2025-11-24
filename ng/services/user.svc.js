angular.module("app").service("UserSvc", function ($http) {
  var svc = this;

  svc.getUser = function () {
    return $http.get("/api/users");
  };

  svc.getUsers = function () {
    return $http.get("/api/users/all");
  };

  svc.toggleBan = function (id) {
    return $http.post(`/api/users/ban/${id}`);
  };

  svc.setToken = function (token) {
    $http.defaults.headers.common["X-Auth"] = token;
    return svc.getUser();
  };

  svc.authenticate = function (user) {
    return $http
      .post("/api/users/authenticate", {
        user: user,
      })
      .then(function (response) {
        window.localStorage.token = response.data;
        return svc.setToken(response.data);
      });
  };

  svc.linkTelegram = function (userId, telegramData) {
    return $http.post(`/api/users/${userId}/telegram`, telegramData).then(function () {
      return svc.getUser();
    });
  };

  svc.login = function (userId) {
    return $http.get("/api/users/" + userId + "/login").then(function (response) {
      window.localStorage.token = response.data;
      return svc.setToken(response.data);
    });
  };

  svc.updateUser = function (user) {
    return $http
      .post("/api/users/" + user._id, {
        user: user,
      })
      .then(function () {
        return svc.getUser();
      });
  };

  svc.checkPassword = function (userId, password) {
    return $http.post("/api/users/" + userId + "/verification", {
      password: password,
    });
  };

  svc.changePassword = function (userId, oldPassword, newPassword) {
    return $http.post("/api/users/" + userId + "/password", {
      oldPassword: oldPassword,
      newPassword: newPassword,
    });
  };

  svc.changeUsername = function (userId, newUsername) {
    return $http
      .post("/api/users/" + userId + "/username", {
        newUsername: newUsername,
      })
      .then(function () {
        return svc.getUser();
      });
  };

  svc.logout = function () {
    window.localStorage.clear();
    $http.defaults.headers.common["X-Auth"] = "";
  };

  svc.createUser = function (username, password) {
    return $http
      .post("/api/users", {
        username: username,
        password: password,
      })
      .then(function () {
        return svc.login(username, password);
      });
  };
});
