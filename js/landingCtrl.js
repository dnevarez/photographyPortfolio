angular.module('photo').controller('landingCtrl',function($scope){

  $scope.showNav = () => {
    $scope.nav = !$scope.nav;
  }

  $(document).ready(function(){
    $('.your-class').slick({
      arrows: false,
      dots: true,
      draggable: true
    })
  })

})
