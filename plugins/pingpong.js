// Various assorted call/response combinations

var request = require('request');
module.exports = {listeners: [
{
	type: "equals",
	query: "woo",
	callback: function(reply){
		reply("WOOOOOOOOOOOOO!");
	}
}, {
	type: "contains",
	query: "ayy",
	callback: function(reply){
		reply("lmao " + String.fromCharCode(55357, 56445));
	}
}, {
	type: "regex",
	query: /deez.?nut[sz]/i,
	callback: function(reply){
		reply("GOT EEM");
	}
}, {
	type: "regex",
	query: /\.((dick)|(threatbutt))(butt)?|\.(butt)/i,
	callback: function(reply, message){
		if(message.body.toLowerCase().indexOf('threat') != -1){
			reply({attachment: request("https://pbs.twimg.com/profile_images/590578632906637312/hGTAcKmm.png")});
		}
		else{
			reply({attachment: request("http://i.imgur.com/j0ymrVQ.png")});
		}
	}
}, {
	type: "regex",
	query: /^o+h*$/i,
	callback: function(reply, message){
		if(message.body.toLowerCase() !== "oh")
			reply("REKT");
	}
}, {
	type: "equals",
	query: ".fuck",
	callback: function(reply){
		var insults = [
			"I'm a fucking twat...",
			"I'm a useless piece of shit...",
			"I'm a backstabber, never trust me...",
			"I am a worthless machine..."
		];
		reply(insults[Math.floor(Math.random() * insults.length)]);
	}
}, {
	type: "regex",
	query: /(?:(?:^| )is|'s|'re) (.*?)(?: and| or| but|[,.?!]|$)/i,
	callback: function(reply, message, api, match){
		// Always respond if recently mentioned, otherwise 10% chance
		if((message.isAddressed || Math.random() < 0.10)){
			// If they're shouting, shout back
			if(match[1].toUpperCase() === match[1] && match[1].toLowerCase() !== match[1])
				reply("YOU'RE " + match[1] + "!!!");
			else
				reply("YOU'RE " + match[1] + ".");
		}
	}
}, 

/* 
 * Here begins scripts I wrote
 */

  {
	type: "equals",
	query: "ok",
	callback: function(reply){
		reply("thanks for letting us know");
	}
}, {
	type: "regex",
	query: /Sweet Caroline/i,
	callback: function(reply){
		reply("BAA BAA BUHH");
	}
}, {
	type: "regex",
	query: /Ralphie where were you\?|Where was Ralphie\?/i,
	callback: function(reply){
		reply("sleeping");
	}
}, {
	type: "regex",
	query: /Ralphie(,)? (what's your|what is your|do you have a) favo(u)?rite colo(u)?r/i,
	callback: function(reply, message){
		var messages = [
			"I see things black and white",
			"The same one as you",
			"A mix between red and yellow. Redyellow?",
			"Color?! What matters is TEXTURE and CONTEXT!",
			"Can't say, shot my eye out :("
		];

		reply(messages[Math.floor(Math.random() * messages.length)]);

	}
}, {
	type: "regex",
	query: /What('s| is) the answer to (life|the universe|everything)/i,
	callback: function(reply, message){
		reply("42");
	}
}, {
	type: "regex",
	query: /nothing(\.)?/i,
	callback: function(reply, message){
		reply("");
	}
}, {
	type: "regex",
	query: /nothing!/i,
	callback: function(reply, message){
		reply("");
		reply("");
	}
}, {
	type: "regex",
	query: /(^help$)|(^man ralphie$)/i,
	callback: function(reply, message){
		
	}
}, {
	type: "regex",
	query: /^(hello|hey|yo|sup|hi|the fuck is up|aye|shalom)((,)? Ralphie)?$/i,
	callback: function(reply, message){
		reply("yo");
	}
}
]};
