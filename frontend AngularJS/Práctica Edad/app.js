var app = angular.module("MyApp", []);
app.controller("MyCtrl", function($scope) { 
    $scope.edad = 0;
    
    $scope.$watch("edad",function(newValue,oldValue){
        
        //if($scope.edad.length > 0)
        //{
            if ($scope.edad < 18) {
            $scope.mensaje = "Eres menor de edad";
            }
            else{
                $scope.mensaje = "Eres mayor de edad";
            }    
        //}
        //else    
        //{
          //  $scope.mensaje = "";
        //}
        
        
   
    }); 
  
});
