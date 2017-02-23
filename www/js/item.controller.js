(function() {
  'use strict';

  angular
    .module('feedstar')
    .controller('ItemController', ItemController);

  function ItemController($stateParams, $cordovaInAppBrowser, FeedFactory, $ionicPlatform) {
    var $ctrl = this;

    $ctrl.item = null;
    $ctrl.openArticle = openArticle;
    $ctrl.handleDescriptionClick = handleDescriptionClick;

    $ctrl.item = FeedFactory.getItemById($stateParams.id);

    function openArticle(link) {
      // Open the link in the in-app-browser.
      $ionicPlatform.ready(function() {
        $cordovaInAppBrowser.open(link);
      });
    }

    function handleDescriptionClick($evt) {
      // Intercept links and open them
      // in the in-app browser.
      if($evt.target.tagName === 'A') {
        $evt.preventDefault();
        openArticle($evt.target.href);
      }
    }
  }

})();
