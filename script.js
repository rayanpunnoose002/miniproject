
const { response } = require("express")

let function1 =function()
{

  query = document.getElementById("textbox").value
var settings ={
     "async" : true,
     "crossDomain": true,
     "url" : "https://affliated-api.flipkart,net/affiliated/1.0/search/.json?query="+query+"&resultsCount=5",
     "method":"GET",

     "headers":{
         "Fk-Affiliated-Id": "pranamad1",
         "Fk-Affiliated-Token": "6fb8d5e82fac413a62639ca9db008b5",

         "Accept":"*/*",
         "Host": "affiliated-api.flipkart.net"
        
        }
    }

}
$.ajax(settings).done(function(response){
    console.log(response)

});