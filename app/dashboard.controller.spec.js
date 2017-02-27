describe('dashboard.controller', function () {
    beforeEach(module('exampleApp'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('$scope.title', function () {
        it('it should be "Dashboard title"', function () {
            var $scope = {};
            var directors = {};
            var controller = $controller('dashboard.controller', { $scope: $scope, directors: directors });
            expect($scope.title).toEqual('Dashboard title');
        })
    })
});