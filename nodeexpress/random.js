console.log("1.I will be executed first");

function doAsyncWork(){
    return new Promise(function(resolve,reject){
        setTimeout(()=> {
            console.log("2.Doing something in a timer...");
            resolve("Asynchronous result");
           // return"Asynchronus result";
        },3000);

    });

}
async function GetAsyncResult(){
    try{
        let asyncresult = await doAsyncWork();
        console.log("3.I am second :"+ asyncresult);
    }
    catch(err){
        console.log(err);
    }
 

}
//doAsyncWork();

GetAsyncResult();
console.log("4.Doing other works");



//let value = "Hello world"
//console.log("I am second : "+ value);