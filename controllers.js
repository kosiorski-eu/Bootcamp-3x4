angular.module('controllers.module',[])
    .controller('formCtrl', function($scope){
        $scope.send = function(e){
            e.preventDefault();
            alert("Wysyłanie form");
        }
    });

















