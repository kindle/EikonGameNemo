angular.module("nemoApp")
.factory("newsSvc", ['$http', '$q', function ($http, $q) {
    return {
        test: function (p1, p2) {
            var deferred = $q.defer();
            $http.get("/api/news/test", { params: { p1: p1, p2: p2 } })
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (data, status) {
                    deferred.reject(status);
                });

            return deferred.promise;
        }
    };
}]);