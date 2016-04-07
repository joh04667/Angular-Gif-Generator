var app = angular.module('myApp', []);



app.controller("GifController", function($scope, $http) {

  $scope.gif = {};

  $scope.getGif = function() {
    $http.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC").then(function(response) {
      $scope.buttonClicked = true;
      $scope.gif = response.data.data;
      console.log($scope.gif);
    });


  };


}); //gifcontroller
