var app = angular.module("ev1",[]);
app.controller("controlador",function($scope){
    
    $scope.accion="yomero";

    $scope.datos=[{"nombre":"Uriel","Apellidos":"Hernandez","Correo":"uriel@hotmail.com","Fecha_n":"05/07/1996","genero":"Masculino"}]
    $scope.editar=function(x){
        console.log("valor de x=",x);
    }
});
