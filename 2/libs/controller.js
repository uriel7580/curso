angular.module("appcontroller", ['ngAnimate', 'ngSanitize', 'ui.bootstrap'])
    .controller("controlador", function ($scope, $window, $uibModal, $log) {

        $scope.mensaje = "Ingresa los datos requeridos";
        $scope.nuevo = {};

        //Fecha=;
        $scope.mostrar = "0";
        $scope.registros = [
            { id: 0, Nombre: "Uriel", Apellidos: "Hernandez", Correo: "uriel@hotmail.com", Fecha_n: "07/05/1996", genero: "Masculino" },
            { id: 1, Nombre: "Miguel", Apellidos: "Hernandez", Correo: "miguel@mail.com", Fecha_n: "05/07/1996", genero: "Masculino" }
        ];

        $scope.accion = function (x) {
            $scope.mostrar = x;
        }
        $scope.cancelar = function () {
            $scope.mostrar = 0;
        }
        $scope.guardar = function () {
            var existe = null;
            var ok = 0;
            $scope.nuevo.id = ($scope.registros[$scope.registros.length - 1].id) + 1;

            $scope.mensaje = "Error en el campo: ";
            ($scope.nuevo.Correo == "" || $scope.nuevo.Correo == null) ? $scope.mensaje = $scope.mensaje + "Correo electronico " : ok++;
            ($scope.nuevo.Nombre == "" || $scope.nuevo.Nombre == null) ? $scope.mensaje = $scope.mensaje + "Nombre " : ok++;
            ($scope.nuevo.Apellidos == "" || $scope.nuevo.Apellidos == null) ? $scope.mensaje = $scope.mensaje + "Apellidos " : ok++;
            ($scope.nuevo.genero == "" || $scope.nuevo.genero == null) ? $scope.mensaje = $scope.mensaje + "Selecciona genero " : ok++;
            ($scope.nuevo.Fecha_n == "" || $scope.nuevo.Fecha_n == null) ? $scope.mensaje = $scope.mensaje + "Fecha de nacimiento " : ok++;
            if (ok >= 5) {

                angular.forEach($scope.registros, function (value, key) {

                    if ($scope.registros[key].Apellidos == $scope.nuevo.Apellidos) {
                        if ($scope.registros[key].Nombre != $scope.nuevo.Nombre) {
                            $scope.registros[key].Correo == $scope.nuevo.Correo ?
                                $scope.mensaje = "Error!!!, ya existe un usuario registrado con ese correo" :
                                existe = false;
                        } else {
                            $scope.registros[key].Correo == $scope.nuevo.Correo ?
                                $scope.mensaje = "Error!!!, este usuario ya registro este correo" :
                                existe = false;
                        }
                    } else {
                        $scope.registros[key].Correo == $scope.nuevo.Correo ?
                            $scope.mensaje = "Error!!!, ya existe un usuario registrado con ese correo" :
                            existe = false;
                    }

                });
                if (existe == false) {
                    $scope.registros.push($scope.nuevo);
                    $scope.mensaje = "Registro creado exitosamente";
                    $scope.nuevo = {};
                }

            }
        }

        $scope.borrar = function (id) {
            angular.forEach($scope.registros, function (value, key) {
                //this.push(key + ': ' + value);
                if ($scope.registros[key].id == id) {
                    $scope.registros.splice(key, 1);
                }
            });
        }
        $scope.editar = function (id) {
            var ft, fechainicial;

            angular.forEach($scope.registros, function (value, key) {
                if ($scope.registros[key].id == id) {
                    $scope.nuevo = $scope.registros[key];
                    fT = $scope.registros[key].Fecha_n.split("/");
                    ft = new Date(fT[2], fT[1] - 1, fT[0]);
                    $scope.nuevo.Fecha_n = ft;
                }
            });

            $scope.mostrar = 3;
            console.log($scope.nuevo);
        }
        $scope.actualizar = function (Nombre, Apellidos, genero, Fecha_n, Correo) {
            $scope.mensaje = "Error en el campo: ";
            var ok = 0;
            ($scope.nuevo.Correo == "" || $scope.nuevo.Correo == null) ? $scope.mensaje = $scope.mensaje + "Correo electronico " : ok++;
            ($scope.nuevo.Nombre == "" || $scope.nuevo.Nombre == null) ? $scope.mensaje = $scope.mensaje + "Nombre " : ok++;
            ($scope.nuevo.Apellidos == "" || $scope.nuevo.Apellidos == null) ? $scope.mensaje = $scope.mensaje + "Apellidos " : ok++;
            ($scope.nuevo.genero == "" || $scope.nuevo.genero == null) ? $scope.mensaje = $scope.mensaje + "Selecciona genero " : ok++;
            ($scope.nuevo.Fecha_n == "" || $scope.nuevo.Fecha_n == null) ? $scope.mensaje = $scope.mensaje + "Fecha de nacimiento " : ok++;
            if (ok >= 5) {

                angular.forEach($scope.registros, function (value, key) {
                    if ($scope.registros[key].Correo == $scope.nuevo.Correo) {
                        if ($scope.registros[key].id == $scope.nuevo.id) {
                            $scope.registros[key].Nombre = $scope.nuevo.Nombre;
                            $scope.registros[key].Apellidos = $scope.nuevo.Apellidos;
                            $scope.registros[key].genero = $scope.nuevo.genero;
                            $scope.registros[key].Fecha_n = $scope.nuevo.Fecha_n;
                            $scope.registros[key].Correo = $scope.nuevo.Correo;
                            $scope.mensaje = "ACTUALIZADO ";
                        }
                    } else {
                        if ($scope.registros[key].id == $scope.nuevo.id) {
                            $scope.registros[key].Nombre = $scope.nuevo.Nombre;
                            $scope.registros[key].Apellidos = $scope.nuevo.Apellidos;
                            $scope.registros[key].genero = $scope.nuevo.genero;
                            $scope.registros[key].Fecha_n = $scope.nuevo.Fecha_n;
                            $scope.registros[key].Correo = $scope.nuevo.Correo;
                            $scope.mensaje = "ACTUALIZADO ";
                        }
                    }
                });
                console.log($scope.nuevo);
            }
        }
    });