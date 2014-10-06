angular.module("nemoApp", ['ui.router', 'ui.bootstrap', 'ngStorage', 'dialogs.main', 'pascalprecht.translate', 'ngGrid', 'angularFileUpload'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "/Templates/home.html",
            controller: "homeCtrl"
        })
        .state("news", {
            url: "/news",
            templateUrl: "/Templates/news.html",
            controller: "newsCtrl"
        });
    $httpProvider.defaults.withCredentials = true;
    $urlRouterProvider.otherwise("/home");
    $locationProvider.html5Mode(true);
}])
.controller("appCtrl", ['$scope', '$window', 'dialogs', '$modal', function ($scope, $window, dialogs, $modal) {
    $scope.setting = {
        activeTab: ""
    };
    $scope.$watch("setting.activeTab", function (newValue) {
        switch (newValue) {
            case 'home':
                $window.document.title = "Home - Eikon Game Nemo";
                break;
            case 'news':
                $window.document.title = "News - Eikon Game Nemo";
                break;
        }
    });
}]);