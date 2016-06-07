var adminDirectives = angular.module('adminDirectives', []);

adminControllers.directive('datatable', function($parse){
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        compile: function(element,attrs){
            var html = '<table class="table table-striped table-bordered" cellspacing="0" width="100%"></table>';
            var newElem = $(html);
            element.replaceWith(newElem);
            return function(scope, element, attrs, controller){
                element.DataTable({
                    "data": scope.dataSet,
                    "columns": scope.columns
                });
            };
        }
    };
});