(function() {
  'use strict';

  angular
    .module('feedstar')
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider.state('feed', {
      url: '/items',
      templateUrl: 'tmpl/feed/feed.html',
      controller: 'FeedController',
      controllerAs: '$ctrl'
    });

    $stateProvider.state('item', {
      url: '/items/:id',
      templateUrl: 'tmpl/feed/item.html',
      controller: 'ItemController',
      controllerAs: '$ctrl'
    });

    $urlRouterProvider.otherwise('/items');
  }

})();
