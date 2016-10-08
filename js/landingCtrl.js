angular.module('photo').controller('landingCtrl',function($scope){

  $scope.showNav = () => {
    $scope.nav = !$scope.nav;
  }

})
