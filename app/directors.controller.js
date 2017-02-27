
exampleApp.controller('directors.controller', ['$scope', 'directors', function ($scope, directors) {
    $scope.directors = directors.data;

}]);
