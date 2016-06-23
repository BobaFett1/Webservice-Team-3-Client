/**
 * Created by michelehmen on 22.06.16.
 */
var app = angular.module('app', [])

    app.controller('mainController', function($scope, $http) {
        $scope.formData = {};
        //$scope.messageData = {};
        $scope.test ="hallo";

        // Get all messages

        $http({
            method: 'GET',
            url: 'http://webservice-team-3.herokuapp.com/1',
        }).success(function(data){
            $scope.messageData = data;
        })
            .error(function(data){
                alert('error')
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

    });