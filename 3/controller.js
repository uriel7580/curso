angular.module("appcontroller", ['ngAnimate', 'ngSanitize', 'ui.bootstrap'])
    .controller("controlador", function ($scope, $window, $uibModal, $log, $http) {

        $scope.mensaje = "Ingresa los datos requeridos";
        $scope.datos = {};
        $scope.color={};
        $scope.color.mensaje = 'alert-primary';
        $scope.tema;
        $scope.mostrar = "0";

        $http({
            method: 'GET',
            url: 'http://cursos.ectotec.com/javascript/api/temas'
        }).then(function (response) {
            $scope.Temas = response.data;
        });
        $scope.validar=function(){
            $scope.color.Nombre=($scope.datos.Nombre == "" || $scope.datos.Nombre == undefined) ? 'border-danger' : 'border-success';
            $scope.color.Correo=($scope.datos.Correo == "" || $scope.datos.Correo == undefined) ? 'border-danger' : 'border-success';
            $scope.color.Fecha_n=($scope.datos.Fecha_n == "" || $scope.datos.Fecha_n == undefined) ? 'border-danger' : 'border-success';
            $scope.color.tema=($scope.datos.tema == "" || $scope.datos.tema == undefined) ? 'border-danger' : 'border-success';
        }

        $scope.enviar = function () {
            var i, c, letra=0, espacio=0;
            var yactual = new Date().getFullYear();
            var a1 , totala;
            a1=new Date($scope.datos.Fecha_n).getFullYear();
            totala=yactual-a1;
            if(totala>15 && totala<120){
                console.log( a1+" "+a2+"años");
            }
            
            if (($scope.datos.Nombre != "" && $scope.datos.Nombre != undefined)) {
                for (i = 0; i < $scope.datos.Nombre.length; i++) {
                    c = $scope.datos.Nombre[i];
                    c != " " ? letra++ : espacio++
                }
                
                if(espacio >= 2 && letra >= espacio && letra <$scope.datos.Nombre.length){
                    $scope.color.mensaje = 'alert-primary';
                    $scope.mensaje = "Ingresa los datos requeridos";
                    $scope.color.Nombre='border-success';
                }
            } else {
                $scope.color.Nombre='border-danger';
                $scope.mensaje = "El nombre debe de tener al menos 3 palabras"
                $scope.color.mensaje = 'alert-danger';
            }
            
            $scope.validar();
        }


    });