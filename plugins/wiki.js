
var request = require('request');

module.exports = {listeners: [
{
	type: "regex",
	query: /^wiki$/i,
	callback: function(reply, message){
		reply("");
		/*if(message.body.toLowerCase().indexOf('threat') != -1){
			reply({attachment: request("https://pbs.twimg.com/profile_images/590578632906637312/hGTAcKmm.png")});
		}
		else{
			reply({attachment: request("http://i.imgur.com/j0ymrVQ.png")});
		}*/
	}
}
]};
