angular.module('photo').controller('landingCtrl',function($scope){

  $scope.showNav = () => {
    $scope.nav = !$scope.nav;
  }

  $(document).ready(function(){
    $('.your-class').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.multiple-items'
    })
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.your-class',
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });
  })


})
