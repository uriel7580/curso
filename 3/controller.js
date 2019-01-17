angular.module("appcontroller", ['ngAnimate', 'ngSanitize', 'ui.bootstrap'])
    .controller("controlador", function ($scope, $window, $uibModal, $log, $http) {

        $scope.mensaje = "Ingresa los datos requeridos";
        $scope.datos = {};
        $scope.color = {};
        $scope.color.mensaje = 'alert-primary';
        $scope.tema;
        $scope.mostrar = false;
        var errores=0;

        $http({
            method: 'GET',
            url: 'http://cursos.ectotec.com/javascript/api/temas'
        }).then(function (response) {
            $scope.Temas = response.data;
        });

        //muestra campos erroneos o faltantes
        $scope.validar = function () {
            var i, c, letra = 0, espacio = 0;
            var factual = new Date().getFullYear();
            var fnacimiento, edad;
            
            $scope.color.Nombre = ($scope.datos.Nombre == "" || $scope.datos.Nombre == undefined) ? 'border-danger' : 'border-success';
            $scope.color.Correo = ($scope.datos.Correo == "" || $scope.datos.Correo == undefined) ? 'border-danger' : 'border-success';
            $scope.color.Fecha_n = ($scope.datos.Fecha_n == "" || $scope.datos.Fecha_n == undefined) ? 'border-danger' : 'border-success';
            $scope.color.tema = ($scope.datos.tema == "" || $scope.datos.tema == undefined) ? 'border-danger' : 'border-success';
            $scope.color.Comentario = ($scope.datos.Comentario == "" || $scope.datos.Comentario == undefined) ? 'border-danger' : 'border-success';


            //validacion de edad
            
            fnacimiento = new Date($scope.datos.Fecha_n).getFullYear();
            edad = factual - fnacimiento;
            if (edad > 15 && edad < 120) {
                $scope.color.Fecha_n='border-success';
                $scope.color.Nombre = 'border-success';
            }
            else{
                $scope.mensaje = "debes de ser mayor de 15 años y menor de 120 años para poder usar este servicio";
                $scope.color.mensaje = 'alert-danger';
            }
            
            //validacion de nombre
            if (($scope.datos.Nombre != "" && $scope.datos.Nombre != undefined)) {
                for (i = 0; i < $scope.datos.Nombre.length; i++) {
                    c = $scope.datos.Nombre[i];
                    c != " " ? letra++ : espacio++
                }

                if (espacio >= 2 && letra >= espacio && letra < $scope.datos.Nombre.length) {
                    $scope.color.mensaje = 'alert-primary';
                    $scope.mensaje = "Ingresa los datos requeridos";
                    $scope.color.Nombre = 'border-success';
                }
            } else {
                $scope.color.Nombre = 'border-danger';
                $scope.mensaje = "El nombre debe de tener al menos 3 palabras"
                $scope.color.mensaje = 'alert-danger';
            }
            angular.forEach($scope.registros, function (value, key) {
                if($scope.color[key]== 'alert-danger' || $scope.color[key]=='border-danger'){errores++;}
            });
        }

        $scope.enviar = function () {
            $scope.validar();
            $scope.mostrar=errores==0?true:false;
        }
        
        $scope.confirmar = function () {
            $http({
            method: 'post',
            url: "controller.php",
            data:$scope.datos
            }).then(function (response) {
                console.log(response);
            });
        }

    });