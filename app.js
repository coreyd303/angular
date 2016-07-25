angular.module('app', []);

//SERVICE example
angular.module('app').factory('messages', function(){
  var messages = {};

  messages.list = [];

  messages.add = function(message){
    messages.list.push({id: messages.list.length, text: message})
  };

  return messages;
});

angular.module('app').controller('ListCtrl', function(messages){
  var self = this;

  self.messages = messages.list;
});

angular.module('app').controller('PostCtrl', function(messages){
  var self = this;

  self.newMessage = 'Hello You!';

  self.addMessage = function(message){
    messages.add(message);
    self.newMessage = '';
  };
});

//CONTROLLER example
angular.module('app').controller('MainCtrl', function(){
  var self = this;

  self.message = "YO YOU";

  self.changeMessage = function(message){
    self.message = message;
  };
});
