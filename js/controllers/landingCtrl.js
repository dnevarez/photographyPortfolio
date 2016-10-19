angular.module('photo').controller('landingCtrl',function($anchorScroll, $location,$scope){

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


  $scope.gotoAnchor = function(x) {
    // var newHash = 'anchor' + x;
    if ($location.hash() !== x) {
      // set the $location.hash to `newHash` and
      // $anchorScroll will automatically scroll to it
      $location.hash(x);
    } else {
      // call $anchorScroll() explicitly,
      // since $location.hash hasn't changed
      $anchorScroll();
    }
  }


})
