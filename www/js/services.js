angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [
    { id: 0, name: 'Ben Sparrow', lastText: 'You on your way?', face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png' },
    { id: 1, name: 'Max Lynx', lastText: 'Hey, it\'s me', face: 'https://pbs.twimg.com/profile_images/479740132258361344/KaYdH9hE.jpeg' },
    { id: 2, name: 'Andrew Jostlen', lastText: 'Did you get the ice cream?', face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg' },
    { id: 3, name: 'Adam Bradleyson', lastText: 'I should buy a boat', face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg' },
    { id: 4, name: 'Perry Governor', lastText: 'Look at my mukluks!', face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg' }
  ];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for(var i = 0; i < chats.length; i++) {
        if(chats[i].id === parseInt(chatId)) { return chats[i]; }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var friends = [
    { id: 0, name: 'Draven', notes: 'Enjoys drawing things', face: 'https://pbs.twimg.com/profile_images/496816911943233537/uAG7FJB-.jpeg' },
    { id: 1, name: 'Azir', notes: 'Odd obsession with everything', face: 'https://pbs.twimg.com/profile_images/518895427094331393/psA2XR21_400x400.jpeg' },
    { id: 2, name: 'Fiora', notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',face: 'https://pbs.twimg.com/profile_images/2324881483/fiora-lol_400x400.jpg'},
    { id: 3, name: 'Karma', notes: 'I think he needs to buy a boat', face: 'https://cdn.artstation.com/p/assets/images/images/000/513/338/20150301175413/smaller_square/jason-chan-karma.jpg?1425254054' },
    { id: 4, name: 'Jinx', notes: 'Just the nicest guy', face: 'https://pbs.twimg.com/profile_images/412411505737342976/VN9NN3EN_400x400.png' }
  ];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});