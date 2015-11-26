angular.module('starter.controllers', ['ionic'])

  .controller('SignInCtrl', function($scope, $state) {

    $scope.signIn = function() {
      console.log('Sign-In');
      $state.go('tab.dash');
    };

  })

.controller('DashCtrl', function($scope) {
  })

  .controller('NewRouteCtrl', function($scope,$state,Chats){
    $scope.routes = Chats.allRoutes();
    $scope.buddies = Chats.getContactCheckList();
    $scope.currentRoute = ({
      name: '',
      start: '',
      end: '',
      buddies: []
    });
    $scope.addNewRoute = function(route,buddies){
      if(!Chats.isEmpty(route.name) && !Chats.isEmpty(route.start) && !Chats.isEmpty(route.end) ) {
        for(var i = 0;i < buddies.length;i++){
          if(buddies[i].checked){
            route.buddies.push(buddies[i]);
          }
        }
        Chats.addRoute(route);
        $state.go('tab.account'); //TODO a bit buggy
      }
    };
})

  .controller('ChatsCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $scope.doSomething = function(){
      return true;
    };
    $scope.chats = Chats.all();
    $scope.data = {
      showDelete: false,
      showReorder: true
    };
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  })




  .controller('ChatDetailCtrl', function($scope, $stateParams,$state, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
    $scope.addToRoute = function(chatId){
      $state.go('tab.buddy-route');
    }
  })

.controller('AccountCtrl', function($scope, Chats) {
  $scope.routes = Chats.allRoutes();
    $scope.data = {
      showDelete: false,
    }
  $scope.remove = function(route){
    Chats.removeRoute(route);
  }
})

.controller('RouteCtrl', function($scope,$stateParams,Chats){
    $scope.route = Chats.getRoute($stateParams.routeId);
})

.controller('BuddyRouteCtrl', function($scope,Chats){
  $scope.routes = Chats.allRoutes();

})

;



