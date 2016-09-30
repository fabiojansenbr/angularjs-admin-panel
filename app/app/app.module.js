(function() {
  'use strict';

  angular
  .module('adminApp', [
    'adminApp.core',
    'adminApp.layout',
    'adminApp.dashboard',
    'adminApp.charts',
    'adminApp.tables'
  ])
  .run(['$window', '$location', '$rootScope', function($window, $location, $rootScope) {
    $rootScope.fields = {
      'headerfixed': true,
      'sidebarfixed': true,
      'theme': 'theme-1'
    };
    $rootScope.$on('$stateChangeSuccess', function (event, current, previous) {
      $rootScope.title = current.title;
    });
  }])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('app', {
      abstract: true,
      template: '<div ui-view></div>'
    }).
    state('app.login', {
      controller: function($location){
        var vm = this;
        vm.login = function(){
          $location.path("/app/dashboard");
        };
      },
      controllerAs: 'vm',
      templateUrl: 'login.html',
      title: 'AAP: Login',
      url: '^/login'
    }).
    state('app.main', {
      abstract: true,
      controller: function($location){
        var vm = this;
        vm.logout = function(){
          $location.path("/login");
        };
      },
      controllerAs: 'vm',
      templateUrl: 'main.html'
    }).
    state('app.main.dashboard', {
      controller: 'DashboardController',
      controllerAs: 'vm',
      templateUrl: 'app/dashboard/dashboard.html',
      title: 'AAP: Dashboard',
      url: '^/app/dashboard'
    }).
    state('app.main.elements', {
      templateUrl: 'app/ui-elements/elements.html',
      title: 'AAP: Elements',
      url: '^/app/ui/elements'
    }).
    state('app.main.icons', {
      templateUrl: 'app/ui-elements/icons.html',
      title: 'AAP: Icons',
      url: '^/app/ui/icons'
    }).
    state('app.main.buttons', {
      templateUrl: 'app/ui-elements/buttons.html',
      title: 'AAP: Icons',
      url: '^/app/ui/buttons'
    }).
    state('app.main.forms', {
      templateUrl: 'app/forms/forms.html',
      title: 'AAP: Form Elements',
      url: '^/app/forms/elements'
    }).
    state('app.main.tables', {
      templateUrl: 'app/tables/tables.html',
      title: 'AAP: Simple Tables',
      url: '^/app/tables/simple'
    }).
    state('app.main.datatables', {
      controller: 'DatatablesController',
      controllerAs: 'vm',
      templateUrl: 'app/tables/datatables.html',
      title: 'AAP: Datatables',
      url: '^/app/tables/datatables'
    }).
    state('app.main.charts', {
      controller: 'ChartsController',
      controllerAs: 'vm',
      templateUrl: 'app/charts/charts.html',
      title: 'AAP: Charts',
      url: '^/app/charts'
    });
    $urlRouterProvider.otherwise('/app/dashboard');
  });

})();
