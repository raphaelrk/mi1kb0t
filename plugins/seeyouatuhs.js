// blocking group-specific

module.exports = {listeners: [
{
	type: "regex",
	query: /Myles.*Dad|Dad.*Myles/i,
	callback: function(reply){
		reply("Myles's dad hasn't been seen for years");
	}
}, {
	type: "regex",
	query: /Where( is|'s) Uriel/i,
	callback: function(reply){
		reply("Uriel is sleeping");
	}
}, {
	type: "regex",
	query: /Ralphie.*(cs51|shieber|ocaml|functional)/i,
	callback: function(reply){
		reply("In the beginning God created the turing machine.");
		reply('And God said, "Let there be lambda calculus," and there was lambda calculus.');
	}
}, {
	type: "regex",
	query: /who('s| is) going to uhs next/i,
	callback: function(reply){
		reply("Jia.");
	}
}
]};
