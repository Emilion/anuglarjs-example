
exampleApp.controller('dashboard.controller', ['$scope', 'directors', function($scope, directors) {
    $scope.directors = directors.data;
    $scope.title = 'Dashboard title';

}]);
