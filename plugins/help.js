
module.exports = {listeners: [
{
	type: "regex",
	query: /(^help$)|(^man ralphie$)/i,
	callback: function(reply, message) {
		reply("features: .8, conch, .cat, fortune, cowsay, images, " + 
			  "pingpong, random, reddit, .ud\n\n" +
			  "type \"man <feature>\" for more information on " +
			  "a specific feature");
	}
}, {
	type: "equals",
	query: "man asdfsdfasdf",
	callback: function(reply, message) {
		reply("features: .8, conch, .cat, fortune, cowsay, images, " + 
			  "pingpong, random, reddit, .ud\n\n" +
			  "type \"man <feature>\" for more information on " +
			  "a specific feature");
	}
}
]};
