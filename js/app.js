(function () {
    'use strict'

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$injector = ['$scope'];
    function LunchCheckController($scope){
        $scope.message = "";
        $scope.food = "";
        $scope.css = "black";
        
        $scope.checkIfTooMuch = function() {
            $scope.css = "green";

            if(!$scope.food){
                $scope.message = "Please enter data first";
                $scope.css = "red";
            } else {
                let foodArray = $scope.food.split(",").map(item => item.trim()).filter(item => item.length > 0);
                if(!foodArray.length){
                    $scope.css = "red";
                } else if(foodArray.length > 3){
                    $scope.message = "Too much!";
                } else {
                    $scope.message = "Enjoy!";
                }
            }
        }
    }


})();