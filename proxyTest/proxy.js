


 
const http = require('http'), fs = require("fs");

const PORT=3000; 

const since = new Date('2016-12-16T17:00:00.123Z');

function handleRequest(request, response){
    var callback = function(data) {
     response.end(data.toString());
    };
    if(request.url == "/proxy/"){
        proxy(callback);
    } else if(request.url == "/"){
        
        fs.readFile("./getRequest.html","binary",function(err,file){
            if(err){
                console.log(err);
                return;
            }
            response.write(file,"binary");
            response.end();
        })
    }
    
	
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("curl http://localhost:%s", PORT);
});

function proxy(cb) {
    var url = "http://booksrun.com/api/price/sell/1464108730?key=31u8ebhn43otn4uwa9df";
    http.get(url, (resp) => {
        resp.on('data',cb);
   }); // end get
} // end proxy


