var os = require('os');
var time = require('./time.js');
var colors = require('colors');

function getOSinfo() {
    var cpu = os.cpus()[0].model,
    type = os.type(),
    release = os.release(),
    uptime = os.uptime().toString(),
    userInfo = os.userInfo();
    
        if(type === 'Darwin') {
            type = 'OSX';
        } else if(type === 'Windows_NT') {
            type = 'Windows';
        }

    console.log('System: '.red, type);
    console.log('Release:'.grey, release);
    console.log('CPU:'.cyan, cpu);
    console.log('Uptime: '.yellow, time.cal(uptime).inverse);
    console.log('User name:'.green, userInfo.username);
    console.log('Home dir:'.rainbow, userInfo.homedir);

}

function ver() {
    var hostname = process.env.hostname.toString();
    var lang = process.env.lang.toString();
    var nodeversion = process.versions.node.toString();

        process.stdout.write(hostname+"\n");
        process.stdout.write(lang+"\n");
        process.stdout.write(nodeversion+"\n");
}
exports.print = getOSinfo;
exports.ver = ver;