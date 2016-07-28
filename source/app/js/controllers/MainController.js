app.controller('MainController', ['$scope', 'WeaponsService', function ($scope, WeaponsService) {
    $scope.weapons = WeaponsService.getData();

    $scope.fight = function (weapon) {
        game.fight(weapon, WeaponsService.getData());
    }
}]);