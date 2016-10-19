angular.module('photo')
.controller('peopleCtrl', function($scope, mainSvc){

  $scope.showNav = () => {
    $scope.nav = !$scope.nav;
  }

  $scope.photos = mainSvc.peoplePage()
  // console.log($scope.photos)
})
