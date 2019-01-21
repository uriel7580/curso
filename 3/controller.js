angular.module("appcontroller", ['ngAnimate', 'ngSanitize', 'ui.bootstrap'])
    .controller("controlador", function ($scope, $window, $uibModal, $log, $http) {

        $scope.mensaje = "Ingresa los datos requeridos";
        $scope.datos = {};
        $scope.color = {};
        $scope.color.mensaje = 'alert-primary';
        $scope.tema;
        $scope.mostrar = false;
        var errores = 0;
        $http({
            method: 'GET',
            url: 'https://raw.githubusercontent.com/uriel7580/curso/v3m2/temasectotec.json'
        }).then(function (response) {
            $scope.Temas = response.data;
        });

        //muestra campos erroneos o faltantes
        $scope.validar = function () {
            errores = 0;
            var i, c, letra = 0, espacio = 0, punto = 0;
            var factual = new Date().getFullYear();
            var fnacimiento, edad;
            fnacimiento = new Date($scope.datos.Fecha_n).getFullYear();
            edad = factual - fnacimiento;
            //validacion de nombre
            if (($scope.datos.Nombre !== "" && $scope.datos.Nombre !== undefined)) {
                for (i = 0; i < $scope.datos.Nombre.length; i++) {
                    c = $scope.datos.Nombre[i];
                    c !== " " ? letra++ : espacio++;
                }

                if (espacio >= 2 && letra >= espacio && letra < $scope.datos.Nombre.length) {
                    $scope.mensaje = "Ingresa los datos requeridos";
                    $scope.color.Nombre = 'border-success';
                    errores === 0 ? errores = 0 : errores++;
                } else {
                    errores++;
                    $scope.color.Nombre = 'border-danger';
                    $scope.mensaje = "El nombre debe de tener al menos 3 palabras";
                }

            } else {
                $scope.color.Nombre = 'border-danger';
                errores++;
            }

            //validacion de edad
            if (($scope.datos.Fecha_n !== "" || $scope.datos.Fecha_n !== undefined) && errores === 0) {
                if (edad > 15 && edad < 120) {
                    $scope.color.Fecha_n = 'border-success';
                    $scope.mensaje = "Ingresa los datos requeridos";
                    errores === 0 ? errores = 0 : errores++;
                }
                else {
                    $scope.color.Fecha_n = 'border-danger';
                    $scope.mensaje = "debes de ser mayor de 15 años y menor de 120 años para poder usar este servicio";
                    errores++;
                }
            } else {
                $scope.color.Fecha_n = 'border-danger';
                errores++;
            }

            //validacion de correo
            if (($scope.datos.Correo !== "" && $scope.datos.Correo !== undefined)) {
                $scope.color.Correo = 'border-success';
                errores === 0 ? errores = 0 : errores++;
            } else {
                $scope.color.Correo = 'border-danger';
                if (errores === 0) $scope.mensaje = "Ingresa el correo correctamente mail@direccion.com";
                errores++;
            }

            //validacion de tema
           
            if (($scope.datos.tema !== "" && $scope.datos.tema !== undefined && $scope.datos.tema !== null)) {
                if (errores === 0) {
                    $scope.color.tema = 'border-success';
                    $scope.mensaje = "Ingresa los datos requeridos";
                    errores = 0;
                } else {
                    $scope.color.tema = 'border-success';
                    errores++;
                }
            } else {
                $scope.color.tema = 'border-danger';
                if (errores === 0) $scope.mensaje = "selecciona un tema";
                errores++;
            }

            if (($scope.datos.Comentario !== "" && $scope.datos.Comentario !== undefined && $scope.datos.Comentario !== null)) {
                $scope.color.Comentario = 'border-success';
                errores === 0 ? errores = 0 : errores++;

            } else {
                $scope.color.Comentario = 'border-danger';
                if (errores === 0) $scope.mensaje = "Igresa un comentario";
                errores++;
            }
            $scope.color.mensaje = errores === 0 ? 'alert-primary' : 'alert-danger';
        };

        $scope.enviar = function () {
            $scope.validar();
            $scope.mostrar = errores === 0 ? true : false;
        };

        $scope.confirmar = function () {
            $scope.mostrar = false;
        };
        $scope.Cancelar = function () {
            $scope.datos = {};
            $scope.mostrar = false;
        };
    });