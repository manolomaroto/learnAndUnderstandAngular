var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$filter',function($scope, $filter) {
    $scope.twit = '';
    $scope.copleteUrl = function(){
        return $filter('lowercase')($scope.twit);
    }
}]);