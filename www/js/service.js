angular.module('starter.service', [])
.service('TestService', ['$http', TestService])

function TestService($http){
  return {
    getTest: function(){
      return $http.get('http://localhost:3000/')
        .then(function(response){
          console.log(response);
        }, function(error){
          console.log(error);
        });
    }
  };
}
