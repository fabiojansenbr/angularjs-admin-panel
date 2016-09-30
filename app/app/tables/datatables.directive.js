(function() {
    'use strict';

    angular
        .module('adminApp.tables')
        .directive('datatable', datatable);

    /* @ngInject */
    function datatable() {
        var datatable = {
            restrict: 'E',
            scope: {
              data: '='
            },
            replace: true,
            transclude: false,
            compile: function(element, attrs){
                var html = '<table class="table table-striped table-bordered" cellspacing="0" width="100%"></table>';
                var newElem = $(html);
                element.replaceWith(newElem);
                return function(scope, element, attrs, controller){
                    element.DataTable({
                        "data": scope.data.dataSet,
                        "columns": scope.data.columns
                    });
                };
            },
            link: linkFunc
        };

        return datatable;

        function linkFunc(scope, el, attr, ctrl) {
          
        }
    }

})();
