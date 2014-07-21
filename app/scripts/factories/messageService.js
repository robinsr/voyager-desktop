'use-strict'

angular.module('voyagerDesktopApp')
.factory('MessageService',function(){
	return {
		// an array of all messages
		messages: [],

		// method for adding messages
		addMessage: function(messageObject) {
			this.messages.push({
				severity: messageObject.severity || "danger",
				title: messageObject.title,
				text: messageObject.text
			})
		},

		// method for removes messages
		removeMessage: function(messageObject){
			var self = this;
			angular.forEach(this.messages,function(message, index){
				if (message.text == messageObject.text) {
					self.messages.splice(index,1)
				}
			})
		}
	}
})