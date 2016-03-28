var app = angular.module("MyApp", []);
app.controller("MyCtrl", function($scope,$http) { 
    
    $scope.array = [];
    $http.get("http://backend-nosql.azurewebsites.net/api/turismo")
        .then(function(res){
          $scope.array = res.data;
        }, function(res){
          $scope.array = [{name: "Error!! " + res.status}];
          alert("Error al llamar api " + res.status);
        });
       
    
});
