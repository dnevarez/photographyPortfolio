'use strict';

angular.module('photo', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'views/landingView.html',
    controller: 'landingCtrl'
  }).state('travel', {
    url: '/travel',
    templateUrl: 'views/travelView.html',
    controller: 'travelCtrl'
  }).state('people', {
    url: '/people',
    templateUrl: 'views/peopleView.html',
    controller: 'peopleCtrl'
  }).state('events', {
    url: '/events',
    templateUrl: 'views/eventsView.html',
    controller: 'eventsCtrl'
  }).state('about', {
    url: '/about',
    templateUrl: 'views/aboutView.html',
    controller: 'aboutCtrl'
  }).state('contact', {
    url: '/contact',
    templateUrl: 'views/contactView.html',
    controller: 'contactCtrl'
  });
});
'use strict';

angular.module('photo').controller('eventsCtrl', function ($scope) {

  $scope.showNav = function () {
    $scope.nav = !$scope.nav;
  };
});
'use strict';

angular.module('photo').controller('landingCtrl', function ($anchorScroll, $location, $scope) {

  $scope.showNav = function () {
    $scope.nav = !$scope.nav;
  };

  $(document).ready(function () {
    $('.your-class').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.multiple-items'
    });
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.your-class',
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });
  });

  $scope.gotoAnchor = function (x) {
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
  };
});
'use strict';

angular.module('photo').controller('peopleCtrl', function ($scope, mainSvc) {

  $scope.showNav = function () {
    $scope.nav = !$scope.nav;
  };

  $scope.photos = mainSvc.peoplePage();
  // console.log($scope.photos)
});
'use strict';

angular.module('photo').controller('travelCtrl', function ($scope, mainSvc) {
  $scope.showNav = function () {
    $scope.nav = !$scope.nav;
  };

  $scope.photos = mainSvc.travelPage();
});
'use strict';

angular.module('photo').factory('mainSvc', function () {

  var eventsPageList = [{ coverImgURL: 'https://hd.unsplash.com/photo-1472589757312-2f192d867ee2', detail: 'weddings' }, { coverImgURL: 'https://hd.unsplash.com/photo-1431308305062-f218b6fe520a', detail: 'concerts' }, { coverImgURL: 'https://hd.unsplash.com/photo-1465487031582-bbc9519cc957', detail: 'concerts' }];

  var peoplePageList = [{ coverImgURL: 'https://hd.unsplash.com/photo-1460904577954-8fadb262612c', detail: 'eyes', photographer: 'Alexandru Zdrobău', unsplashURL: 'https://unsplash.com/@alexandruz' }, { coverImgURL: 'https://images.unsplash.com/photo-1474325874720-4b395be870c4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&s=c86e3e35fc53da7f20fbdb553b1eacd2', detail: 'canoe', photographer: 'Monica Gozalo', unsplashURL: 'https://unsplash.com/@monicagozalo' }, { coverImgURL: 'http://unsplash.com/photos/Sgthj0HW6ec/download', detail: 'music', photographer: 'Clem Onojeghuo', unsplashURL: 'https://unsplash.com/@clemono2' }];

  var travelPageList = [{ coverImgURL: 'https://hd.unsplash.com/photo-1444412667101-4eccfdeeff07', detail: 'amethyst on the water', photographer: 'hieu le', unsplashURL: 'https://unsplash.com/@lehieu' }, { coverImgURL: 'https://hd.unsplash.com/photo-1459184289964-e2d4cefe27af', detail: 'shells', photographer: 'Pura Comunicação', unsplashURL: 'https://unsplash.com/@puracomunicacao' }, { coverImgURL: 'https://hd.unsplash.com/photo-1470396346435-249d74f1ba5a', detail: 'above the city', photographer: 'Lee Key', unsplashURL: 'https://unsplash.com/@lee_key' }];

  return {

    eventsPage: function eventsPage() {
      return eventsPageList;
    },
    peoplePage: function peoplePage() {
      return peoplePageList;
    },
    travelPage: function travelPage() {
      return travelPageList;
    }
  };
});