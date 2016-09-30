(function() {
    'use strict';

    angular
        .module('adminApp.charts')
        .controller('ChartsController', ChartsController);

    ChartsController.$inject = [];

    /* @ngInject */
    function ChartsController() {
        var vm = this;

        activate();

        function activate() {
          vm.charts = {
            line: {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              series: ['Series A', 'Series B'],
              data: [ [65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 86, 27, 90] ]
            },
            doughnut: {
              labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
              data: [300, 500, 100]
            },
            bar: {
              labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
              series: ['Series A', 'Series B'],
              data: [ [65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 86, 27, 90] ]
            },
            pie: {
              labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
              data: [300, 500, 100]
            },
            polar: {
              labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
              data: [300, 500, 100, 40, 120]
            },
            radar: {
              labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
              series: ['Series A', 'Series B'],
              data: [ [65, 59, 90, 81, 56, 55, 40], [28, 48, 40, 19, 96, 27, 100] ]
            }
          };
        }
    }
})();
