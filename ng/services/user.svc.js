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

  svc.login = function (user) {
    return $http.get("/api/users/" + user + "/login").then(function (response) {
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

  svc.checkPassword = function (user, password) {
    return $http.post("/api/users/" + user + "/verification", {
      password: password,
    });
  };

  svc.changePassword = function (user, oldPassword, newPassword) {
    return $http.post("/api/users/" + user + "/password", {
      oldPassword: oldPassword,
      newPassword: newPassword,
    });
  };

  svc.changeUsername = function (user, newUsername) {
    return $http
      .post("/api/users/" + user + "/username", {
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
