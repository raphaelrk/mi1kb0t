// output fortune, fortune|cowsay and cowsay commands
// unix interfacing code via https://dzone.com/articles/execute-unix-command-nodejs

var exec = require('child_process').exec;
var child;

// turn 'hi";ls' into 'hi\";ls'
var escapeshellarg = function(arg) {
    return '"' + arg.replace(/"/g, '\\"') + '"';
};

module.exports = {listeners: [
{
    type: "regex",
    query: /(Ralphie(,)?|What('s| is)|tell me|give me).*fortune|horoscope|quote/i,
    callback: function(reply, message){
        
        var str = "fortune";
        if(message.body.match(/cow/i)) {
            str += '|cowsay -W 25'
        }

        function puts(error, stdout, stderr) { reply(stdout) }
        exec(str, puts);
    }
}, { 
    type: "regex",
    query: /Ralphie(,)? make a cow say/i,
    callback: function(reply, message){
        
        var index = message.body.indexOf("make a cow say")+14;
        var arg = message.body.substring(index).trim();
        var str = "echo " + escapeshellarg(arg) + " | cowsay -W 25";

        function puts(error, stdout, stderr) { reply(stdout) }
        exec(str, puts);
    }
}
]};
