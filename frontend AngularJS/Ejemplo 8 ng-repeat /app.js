var app = angular.module("MyApp", []);
app.controller("MyCtrl", function($scope) { 
    
    $scope.users = [
        {"name":"Peter","age":10},
        {"name":"Anton","age":11},
        {"name":"John","age":12}
    ];
    
});
