angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    rating: 2,
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    rating: 4,
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    rating: 3,
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    rating: 5,
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    rating:1,
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }]

    for(var j = 0;j < chats.length;j++){
      var filling = "";
      for(var k = 0;k < chats.rating;k++){
        filling += '<div class = "col-' + (k+1) + '><i class="icon ion-android-star"></i> </div>'
      }
      chats.rating = filling;
    }

    chats.sort(function(chat1,chat2){
      return chat1.name-chat2.name;
    });



  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    getRating:function(chat){
      var filling = "";
      for(var k = 0;k < chats.indexOf(chat).rating;k++){
        filling += '<div class = "col-' + (k+1) + '><i class="icon ion-android-star"></i> </div>'
      }
      document.getElementById("rating").innerHTML = filling;
    }
  };
});
