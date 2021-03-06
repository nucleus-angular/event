angular.module('app.home.home', [
  'app.core'
])
.config([
  '$stateProvider',
  function($stateProvider) {
    $stateProvider
    .state('app.home.home', {
      url: '',
      views: {
        '': {
          templateUrl: '/app/components/home/assets/templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    });
  }
])
.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.eventData;

  $scope.click = function($event) {
    $scope.eventData = 'click'
  };

  $scope.mouseOver = function($event) {
    $scope.eventData = 'mouseover'
  };
}]);
