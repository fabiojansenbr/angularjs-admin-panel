var adminControllers = angular.module('adminControllers', ['chart.js']);

adminControllers.controller('MainController', ['$rootScope', '$scope', '$location', '$window', 'AuthenticationService',
  function ($rootScope, $scope, $location, $window, AuthenticationService){
    $scope.logout = function(){
      AuthenticationService.isLogged = false;
      $location.path("/login");
    }
  }
]);

adminControllers.controller('SidebarController', ['$scope', '$location', 'AuthenticationService',
  function ($scope, $location, AuthenticationService) {
    $scope.isActive = function(viewRoute){
      var loc = $location.path().split('/');
      return viewRoute === "/"+loc[1]+"/"+loc[2];
    };
  }
]);

adminControllers.controller('LoginController', ['$scope', '$http', '$location', '$window', 'AuthenticationService',
  function ($scope, $http, $location, $window, AuthenticationService) {
    $scope.loginUser = function(){
      AuthenticationService.isLogged = true;
      $location.path("/app/dashboard");
    };
  }
]);

adminControllers.controller('DashboardController', ['$scope', function($scope){
  //Line Chart
  $scope.labelsLine = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.seriesLine = ['Series A', 'Series B'];
  $scope.dataLine = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  //Pie Chart
  $scope.labelsPie = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.dataPie = [300, 500, 100];
  //Bar Chart
  $scope.labelsBar = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.seriesBar = ['Series A', 'Series B'];
  $scope.dataBar = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
}]);

adminControllers.controller('ChartsController', ['$scope', function($scope){
  //Line Chart
  $scope.labelsLine = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.seriesLine = ['Series A', 'Series B'];
  $scope.dataLine = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  //Doughnut Chart
  $scope.labelsDoughnut = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.dataDoughnut = [300, 500, 100];
  //Bar Chart
  $scope.labelsBar = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.seriesBar = ['Series A', 'Series B'];
  $scope.dataBar = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  //Pie Chart
  $scope.labelsPie = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.dataPie = [300, 500, 100];
  //Polar Area Chart
  $scope.labelsPolarArea = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"];
  $scope.dataPolarArea = [300, 500, 100, 40, 120];
  //Radar Chart
  $scope.labelsRadar =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
  $scope.dataRadar = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
  ];
}]);

adminControllers.controller('DatatablesController', ['$scope', function ($scope) {
  $scope.columns = [
    { "title": "Engine" },
    { "title": "Browser" },
    { "title": "Platform" },
    { "title": "Version" },
    { "title": "Grade" }
  ];
$scope.dataSet = [
    ['Trident','Internet Explorer 4.0','Win 95+','4','X'],
    ['Trident','Internet Explorer 5.0','Win 95+','5','C'],
    ['Trident','Internet Explorer 5.5','Win 95+','5.5','A'],
    ['Trident','Internet Explorer 6','Win 98+','6','A'],
    ['Trident','Internet Explorer 7','Win XP SP2+','7','A'],
    ['Trident','AOL browser (AOL desktop)','Win XP','6','A'],
    ['Gecko','Firefox 1.0','Win 98+ / OSX.2+','1.7','A'],
    ['Gecko','Firefox 1.5','Win 98+ / OSX.2+','1.8','A'],
    ['Gecko','Firefox 2.0','Win 98+ / OSX.2+','1.8','A'],
    ['Gecko','Firefox 3.0','Win 2k+ / OSX.3+','1.9','A'],
    ['Gecko','Camino 1.0','OSX.2+','1.8','A'],
    ['Gecko','Camino 1.5','OSX.3+','1.8','A'],
    ['Gecko','Netscape 7.2','Win 95+ / Mac OS 8.6-9.2','1.7','A'],
    ['Gecko','Netscape Browser 8','Win 98SE+','1.7','A'],
    ['Gecko','Netscape Navigator 9','Win 98+ / OSX.2+','1.8','A'],
    ['Gecko','Mozilla 1.0','Win 95+ / OSX.1+',1,'A'],
    ['Gecko','Mozilla 1.1','Win 95+ / OSX.1+',1.1,'A'],
    ['Gecko','Mozilla 1.2','Win 95+ / OSX.1+',1.2,'A'],
    ['Gecko','Mozilla 1.3','Win 95+ / OSX.1+',1.3,'A'],
    ['Gecko','Mozilla 1.4','Win 95+ / OSX.1+',1.4,'A'],
    ['Gecko','Mozilla 1.5','Win 95+ / OSX.1+',1.5,'A'],
    ['Gecko','Mozilla 1.6','Win 95+ / OSX.1+',1.6,'A'],
    ['Gecko','Mozilla 1.7','Win 98+ / OSX.1+',1.7,'A'],
    ['Gecko','Mozilla 1.8','Win 98+ / OSX.1+',1.8,'A'],
    ['Gecko','Seamonkey 1.1','Win 98+ / OSX.2+','1.8','A']
  ];
}]);