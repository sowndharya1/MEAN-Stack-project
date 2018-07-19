myMed.controller('myController',function($scope,$http){
       $http({
         url:"/listmed",
         method:"GET"
       }).then(function(response){
       $scope.medicines = response.data;

     });
    
   });
