angular.module("appcontroller",[]).controller("controlador",function($scope, $window){
    
    $scope.accion="yomero";
    $scope.nuevo={};
    $scope.registros=[
        {"id":0,"nombre":"Uriel","Apellidos":"Hernandez","Correo":"uriel@hotmail.com","Fecha_n":"05/07/1996","genero":"Masculino"},
        {"id":1,"nombre":"Miguel","Apellidos":"Hernandez","Correo":"umhernandez@ectotec.com","Fecha_n":"05/07/1996","genero":"Masculino"},
        {"id":2,"nombre":"Miguel2","Apellidos":"Hernandez","Correo":"umhernandez@ectotec.com","Fecha_n":"05/07/1996","genero":"Masculino"},
        {"id":3,"nombre":"Miguel1","Apellidos":"Hernandez","Correo":"umhernandez@ectotec.com","Fecha_n":"05/07/1996","genero":"Masculino"}
    ];
    
    
    $scope.guardar=function(){
        $scope.registros.push($scope.nuevo);
        $scope.nuevo={};
    }

    $scope.borrar=function(x){
        $window.alert("posicion borrada: "+x);
        $scope.registros.splice(x,1);
    }
    $scope.agregar = function(){

    }
});