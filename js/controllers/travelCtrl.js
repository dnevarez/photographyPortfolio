angular.module('photo')
.controller('travelCtrl', function($scope, mainSvc) {
  $scope.showNav = () => {
    $scope.nav = !$scope.nav;
  }

  $scope.photos = mainSvc.travelPage()

})
