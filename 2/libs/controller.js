angular.module("appcontroller",['ngAnimate', 'ngSanitize', 'ui.bootstrap'])
.controller("controlador",function($scope, $window,$uibModal, $log){
    
    var mensaje="";
    $scope.nuevo={};
    $scope.registros=[
        {id:0,Nombre:"Uriel",Apellidos:"Hernandez",Correo:"uriel@hotmail.com",Fecha_n:"05/07/1996",genero:"Masculino"},
        {id:1,Nombre:"Miguel",Apellidos:"Hernandez",Correo:"miguel@mail.com",Fecha_n:"05/07/1996",genero:"Masculino"},
        {id:2,Nombre:"Miguel2",Apellidos:"Hernandez",Correo:"migue2l@mail.com",Fecha_n:"05/07/1996",genero:"Masculino"},
        {id:3,Nombre:"Miguel1",Apellidos:"Hernandez",Correo:"miguel1@mail.com",Fecha_n:"05/07/1996",genero:"Masculino"}
    ];
    
    $scope.guardar=function(){
        var existe=null;
        $scope.nuevo.id=$scope.registros[$scope.registros.length-1].id+1;
        while(existe==false){

        }
        angular.forEach($scope.registros, function(value, key) {
            if($scope.registros[key].Correo==$scope.nuevo.Correo){
                existe=true;
                
            }else{
                existe=false;
                $scope.nuevo={};
                mensaje="Error!!!, ya existe un usuario registrado con ese correo"
            }
        });
        existe==false?$scope.registros.push($scope.nuevo):mensaje="Error!!!, ya existe un usuario registrado con ese correo";
        console.log
    }

    $scope.borrar = function (id) {
        angular.forEach($scope.registros, function(value, key) {
            //this.push(key + ': ' + value);
            if ($scope.registros[key].id == id) {
                $scope.registros.splice(key, 1);
            }
        });
    }
        // $scope.nuevo.nombre == "" || $scope.nuevo.nombre == null ? alert("Ingresa un nombre"):  
        //     if ($scope.nuevo.apellidos == "" || $scope.nuevo.apellidos == null) { alert("Ingresa apellidos") } else
        //         if ($scope.nuevo.genero == "" || $scope.nuevo.genero == null) { alert("Selecciona genero") } else
        //             if ($scope.nuevo.fech_nac == "" || $scope.nuevo.fech_nac == null) { alert("Ingresa fecha de nacimiento") } else
        //                 if ($scope.nuevo.correo == "" || $scope.nuevo.correo == null) { alert("Ingresa correo electronico") }
        //                 else {
        //                     $scope.nuevo.id = datoid++;
        //                     $scope.datos.push($scope.nuevo);
        //                 }
    
});