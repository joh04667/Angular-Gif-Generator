var app = angular.module('myApp', []);



app.controller("GifController", function($scope, $http) {

  $scope.gif = {};
  $scope.searchGif = {};

 // get random gif on button press
  $scope.getGif = function() {
    $http.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC").then(function(response) {
      $scope.gif = response.data.data;
      console.log($scope.gif);
    });
  };

// get searched gif
  $scope.gifSearch = function() {
    var randomSearch = $scope.searchText.replace(/\s/gi, "+");
    $http.get("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + randomSearch).then(function(response){
      $scope.searchGif = response.data.data;
    });
  };

}); //gifcontroller
