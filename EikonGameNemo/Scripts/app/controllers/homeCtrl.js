angular.module('nemoApp')
.controller('homeCtrl', ['$scope', 'homeSvc', 'dialogs',
function ($scope, homeSvc, dialogs) {
    $scope.setting.activeTab = 'home';

}]);