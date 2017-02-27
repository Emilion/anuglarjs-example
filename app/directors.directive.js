/**
 * Directors directive
 *
 * example of usage:
 * <directors directors="directors"></directors>
 */
exampleApp.directive('directors', function ($state) {
    return {
        restrict: 'E',
        scope: {
            directors: '='
        },
        templateUrl: './app/directors-list-template.html',
        link: function (scope, iElement, iAttrs, ctrl) {
            console.log(scope.directors);

        }
    }
});
