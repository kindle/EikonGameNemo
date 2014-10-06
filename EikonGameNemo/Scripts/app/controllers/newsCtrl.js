angular.module('nemoApp')
.controller('newsCtrl', ['$scope', 'newsSvc', 'dialogs',
function ($scope, newsSvc, dialogs) {
    $scope.setting.activeTab = 'news';

}]);