// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular
  .module('feedstar', ['ionic', 'ngCordova'])

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('feed', {
      url: '/items',
      templateUrl: 'tmpl/feed.html',
      controller: 'FeedController',
      controllerAs: '$ctrl'
    });

    $stateProvider.state('item', {
      url: '/items/:id',
      templateUrl: 'tmpl/item.html',
      controller: 'ItemController',
      controllerAs: '$ctrl'
    });

    $urlRouterProvider.otherwise('/items');
  })

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        window.cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        // Light text
        window.StatusBar.styleLightContent();

        if($ionicPlatform.is('android')) {
          // Use the '700' tint for the status bar,
          // to match the material design guidelines.
          // Colour generated from http://mcg.mbitson.com/
          window.StatusBar.backgroundColorByHexString('#8A0302');
        }
      }
    });
  });
