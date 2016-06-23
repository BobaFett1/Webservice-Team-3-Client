/**
 * Created by michelehmen on 22.06.16.
 */
var app = angular.module('app', [])

    app.controller('mainController', function($scope, $http) {
        $scope.massageData = {};
        // Get all messages

        $scope.login = function () {

            $http({
                method: 'GET',
                url: 'http://webservice-team-3.herokuapp.com/'+$scope.loginId
            })
                .success(function (data) {
                    $scope.messageData = data;
                })
                .error(function (data) {
                    alert('error')
                });
        }


        $scope.register = function () {

            $http({
                method: 'POST',
                url: 'http://webservice-team-3.herokuapp.com/'+$scope.registerId,
                data: {'saltMaster=':$scope.saltmaster, 'privKeyEnc=': $scope.privkeyenc, 'pubKey=': $scope.pubkey},
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .success(function (data) {
                    $scope.messageData = "Der Benutzer wurde erfolgreich registriert";
                })
                .error(function (data) {
                    $scope.messageData = "Der Benutzer konnte nicht registriert werden";
                })
        }
    });
        // $http.jsonp('https://httpbin.org/get')
        //     .success(function(data) {
        //         $scope.messageData = data;
        //         console.log(data);
        //     })
        //     .error(function(error) {
        //         $scope.messageData = "error";
        //         console.log('Error: ' + error);
        //     });
        //
        // // Create a new message
        // $scope.sendMessage = function() {
        //     $http.post('/1/message', $scope.formData)
        //         .success(function(data) {
        //             $scope.formData = {};
        //             $scope.messageData = data;
        //             console.log(data);
        //         })
        //         .error(function(error) {
        //             console.log('Error: ' + error);
        //         });
        // };
        //
        // // Delete a message
        // $scope.deleteMessage = function(targetUserID, messageID) {
        //     $http.delete('/'+targetUserID+'/' + messageID)
        //         .success(function(data) {
        //             $scope.messageData = data;
        //             console.log(data);
        //         })
        //         .error(function(data) {
        //             console.log('Error: ' + data);
        //         });
        // };

