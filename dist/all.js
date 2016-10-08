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

angular.module('photo').controller('landingCtrl', function ($scope) {

  $scope.showNav = function () {
    $scope.nav = !$scope.nav;
  };
});