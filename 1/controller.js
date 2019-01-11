angular.module("appcontroller",[]).controller("controlador",function($scope, $window, $uibModal, $log){
    
    $scope.accion="yomero";
    $scope.nuevo={};
    $scope.registros=[
        {"nombre":"Uriel","Apellidos":"Hernandez","Correo":"uriel@hotmail.com","Fecha_n":"05/07/1996","genero":"Masculino"},
        {"nombre":"Miguel","Apellidos":"Hernandez","Correo":"umhernandez@ectotec.com","Fecha_n":"05/07/1996","genero":"Masculino"},
        {"nombre":"Jose","Apellidos":"Lopez","Correo":"j.l@ectotec.com","Fecha_n":"05/07/1996","genero":"Masculino"},
        {"nombre":"Miguel","Apellidos":"Hernandez","Correo":"umhernandez@ectotec.com","Fecha_n":"05/07/1996","genero":"Masculino"}
    ];
    
    
    $scope.guardar=function(){
        $scope.registros.push($scope.nuevo);
    }

    $scope.editar=function(x){
       
    }
    $scope.agregar = function(){

    }
});