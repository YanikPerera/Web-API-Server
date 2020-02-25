var log = {
    logInfoMessage : function(message){
        console.log("Info : " + message)
    },

        ErrorMessageInfo : function(message){
            console.log("Error :"+ message)
        },
            
            logWorningMessage : function(message){
                console.log("Worning : " + message)
            }

}



    //ErrorMessageInfo("Application runing with error");
    //logInfoMessage("Application is starting up!");
    //logWorningMessage("Application is runing out os");

    module.exports = log;