angular
  .module("app")
  //AngularJs can't have an arrow function here
  .controller("TenThingsStatsCtrl", function ($scope, TenThingsSvc) {
    $scope.languageStats = [];
    $scope.categoryStats = { labels: [], datasets: [] };

    const lineChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Line Chart",
        },
      },
    };

    const getData = () => {
      if (!$scope.currentUser) return;
      $scope.languageStats = [];
      TenThingsSvc.getLanguages().then((response) => {
        $scope.languages = response.data;
      });
      TenThingsSvc.getCategories().then((response) => {
        $scope.categories = response.data;
      });
      TenThingsSvc.getPlayStats().then(({ data }) => {
        const years = _.uniq(data.map(({ year }) => year)).sort();
        const months = _.times(12, (i) => i + 1);
        $scope.playStats = {
          labels: months,
          series: years,
          data: years.map((year) =>
            months.map((month) => data.find((item) => item.month === month && item.year === year)?.uniquePlayers || 0),
          ),
          options: lineChartOptions,
        };
      });
      TenThingsSvc.getListLanguageStats().then(({ data }) => {
        const years = _.uniq(data.map(({ _id }) => _id.year)).sort();
        const languages = _.uniq(data.map(({ _id }) => _id.language)).sort();
        $scope.languageStats = {
          labels: years,
          series: languages,
          data: languages.map((language) =>
            years.map((year) => data.find(({ _id }) => _id.language === language && _id.year === year)?.count || 0),
          ),
          options: lineChartOptions,
        };
      });
      TenThingsSvc.getGameStats().then(({ data }) => {
        const years = _.uniq(data.map(({ _id }) => _id.year)).sort();
        const languages = _.uniq(data.map(({ _id }) => _id.language)).sort();
        $scope.gameStats = {
          labels: years,
          series: languages,
          data: languages.map((language) =>
            years.map((year) => data.find(({ _id }) => _id.language === language && _id.year === year)?.count || 0),
          ),
          options: lineChartOptions,
        };
      });

      TenThingsSvc.getListCategoryStats().then(({ data }) => {
        const sortedData = _.sortBy(data, ({ count }) => -count);
        $scope.categoryStats = {
          labels: sortedData.map(({ _id }) => _id),
          data: [sortedData.map(({ count }) => count)],
        };
      });
    };

    $scope.$watch("currentUser", () => {
      getData();
    });
  });
