angular.module('photo').controller('eventsCtrl', function($scope){

  $scope.showNav = () => {
    $scope.nav = !$scope.nav;
  }

})
