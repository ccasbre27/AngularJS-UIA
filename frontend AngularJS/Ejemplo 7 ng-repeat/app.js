var app = angular.module("MyApp", []);
app.controller("MyCtrl", function($scope) { 
    
    $scope.names = [
        {"name":"Peter"},
        {"name":"Anton"},
        {"name":"John"}
    ];
    
});
