let logger = require("./log") //IMPORT LOCAL MODULE
let http = require('http');//IMPORT A CORE MODULE
let uppercase = require('upper-case')
let path = require('path');
const path = "C:\Web API\NodeJSWorked\node_modules\upper-case\dist.es2015";
console.log(path.extname(PATHVALUE));
var server = http.createServer((req,res)=>{
    if(req.url == '/' ){
res.write('Hello World');
res.end();

    }
    else if (req.url == '/animal'){
        res.write('Animal');
        res.end();
    }
    else if (req.url == '/api'){
        res.write(JSON.stringify(['yanik','nisal']));
        res.end();
    }
    else ;{
        var mynameicaps = "yanik perera";
        res.write(uppercase.upperCase(mynameicaps));
        res.end();
    }
});


/*var server = http.createServer(function(req,res){
    if(req.url == '/' ){
res.write('Hello World');
res.end();

    }
    else if (req.url == '/animal'){
        res.write('Animal');
        res.end();
    }
    else if (req.url == '/api'){
        res.write(JSON.stringify(['yanik','nisal']));
        res.end();
    }
    else ;{
        var mynameicaps = "yanik perera";
        res.write(uppercase.upperCase(mynameicaps));
        res.end();
    }
});*/
server.listen(5000);
console.log("listening on Port 5000");
server.on('connection',function (socket){
    console.log('conntected....')
})

logger.logInfoMessage("Application is starting up");
logger.ErrorMessageInfo("Application runing with error");
logger.logWorningMessage("Application is runing out os");