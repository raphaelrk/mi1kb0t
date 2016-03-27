// Respond to simple yes/no questions

var crypto = require('crypto');

module.exports = {listeners: [
{
	type: "startsWith",
	query: ".8",
	callback: function(reply, message){
		if(message.body === ".8")
			return reply("Ask the magic 8ball a question! Usage: .8 <question>");

		var messages = [
			"It is certain",
			"It is decidedly so",
			"Without a doubt",
			"Yes definitely",
			"You may rely on it",
			"As I see it yes",
			"Most likely",
			"Yes",
			"Signs point to yes",
			"Reply hazy try again",
			"Concentrate and ask again",
			"Don't count on it",
			"My reply is no",
			"God says no",
			"Very doubtful",
			"Outlook is terrible"
		];

		// Salt with the thread ID and some server-specific data
		// to make responses thread-specific and hard to guess.
		var str = message.body + message.thread_id + process.env.PATH;
		var hash = crypto.createHash('md5').update(str).digest('hex');
		var index = parseInt(hash.substr(0, 1), 16);
		reply(messages[index]);
	}
}, {
	type: "regex",
	query: /^Magic conch/i,
	callback: function(reply, message){
		if(message.body.length <= 11)
			return reply("Ask the magic conch shell a question! Usage: .8 <question>");

		var messages = [
			"Maybe someday.",
			"I don't think so.",
			"No.",
			"Yes.",
		];

		var generic = [
			"Follow the seahorse.",
			"Try asking again."
		]

		var decision = message.body.match(/(Should.*or|or.*Should)|which/i);
		var action = message.body.match(/what.*do|do.*what/i);
		var canSquidward = message.body.match(/Can.*Squidward/i);

		// "what to do?"
		if(action) {
			reply("Nothing.")
		}

		else {
			// "which"? Neither. or generic
			if(decision) {
				var neither = ["Neither.", "Neither."];
				generic = generic.concat(neither);
			}

			// can squidward have some krabby patty?
			if(canSquidward) {
				var no = ["No.", "No."];
				generic = generic.concat(no);
			}

			else {
				generic = generic.concat(messages);
			}
			
			var str = message.body + message.thread_id + process.env.PATH;
			var hash = crypto.createHash('md5').update(str).digest('hex');
			var index = parseInt(hash.substr(0, 1), 16);
			reply(generic[index % generic.length]);
		}
	}
}
]};
