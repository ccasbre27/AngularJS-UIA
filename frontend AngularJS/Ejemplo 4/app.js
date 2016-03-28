var app = angular.module("MyApp", []);
app.controller("MyCtrl", function($scope) { 
    $scope.value = 1;
    $scope.incrementValue = function() {
        return $scope.value += 1;
    };
});
