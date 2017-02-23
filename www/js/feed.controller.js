(function() {
  'use strict';

  angular
    .module('feedstar')
    .controller('FeedController', FeedController);

  function FeedController(FeedFactory, $scope, $ionicModal, $ionicLoading) {
    var $ctrl = this;

    $ctrl.feed = {};
    $ctrl.items = [];

    $ctrl.refreshFeed = refreshFeed;
    $ctrl.openFeedSettings = openFeedSettings;
    $ctrl.changeFeed = changeFeed;
    $ctrl.modal = null;
    $ctrl.feedUrl = FeedFactory.retrieveFeedUrl();

    createModal();
    loadFeed();

    function loadFeed() {
      $ionicLoading.show({
        template: '<ion-spinner icon="lines"></ion-spinner><br>Loading'
      });
      refreshFeed()
        .finally(function() {
          $ionicLoading.hide();
        });
    }

    function refreshFeed() {
      return FeedFactory
        .getItems($ctrl.feedUrl)
        .then(function(data) {
          $ctrl.feed = data.feed;
          $ctrl.items = data.items;
        })
        .finally(function() {
          $scope.$broadcast('scroll.refreshComplete');
        });
    }

    function createModal() {
      $ionicModal.fromTemplateUrl('tmpl/settings.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $ctrl.modal = modal;
      });
    }

    function openFeedSettings() {
      $ctrl.modal.show();
    }

    function changeFeed() {
      $ctrl.modal.hide();
      FeedFactory.rememberFeedUrl($ctrl.feedUrl);
      loadFeed();
    }
  }

})();
