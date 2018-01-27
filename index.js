var OSinfo = require('./modules/OSinfo.js');
var Time = require('./modules/time.js');


process.stdin.setEncoding('utf-8');
process.stdout.write("Hello to program.js\n"+
                            "functions You can use:\n"+
                            "  /ver - basic version informations\n"+
                            "  /getOSinfo - specific informations about your system\n"+
                            "  /time - convert time from sec to h+m+s\n"+
                            "  /exit - exit program\n");
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.trim();
        
            switch (instruction) {
                case "/exit": 
                    process.stdout.write("Quiting app!");
                    process.exit();
                    break;
                case "/ver":
                    OSinfo.ver();
                    break;
                case "/getOSinfo":
                    OSinfo.print();
                    break;
                case "/time":
                    process.stdin.on('readable', function () {
                        var data = process.stdin.read();
                        
                        Time.cal(data);    
                    });
                    break;
                
                default: 
                    process.stderr.write("Wrong instruction!\n");
                    break;

                    
            }
    }
});