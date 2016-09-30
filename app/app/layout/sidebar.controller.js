(function() {
    'use strict';

    angular
        .module('adminApp.layout')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$scope', '$location'];

    /* @ngInject */
    function SidebarController($scope, $location) {
      $scope.isActive = function(viewRoute){
        var loc = $location.path().split('/');
        return viewRoute === "/"+loc[1]+"/"+loc[2];
      };
    }
})();
