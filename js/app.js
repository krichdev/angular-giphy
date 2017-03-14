console.log('loaded')
var app = angular.module('GiphyApp', []);

app.controller('gifSearch', ['$scope', '$http', function($scope, $http){

  $scope.searchTerm = '';
  $scope.gifs = [];

  $scope.$watch('searchTerm', function(newVal, oldVal){
      var req = {
        url: "http://api.giphy.com/v1/gifs/search?q=" + $scope.searchTerm + "&api_key=dc6zaTOxFJmzC",
      }

      $http(req).then(function success(res){
           $scope.gifs = res.data.data
      }, function error(req){
        console.log("There was an error");
      })
    });

  $scope.myPagingFunction = function (){
       $scope.watch();
  };

}]);
