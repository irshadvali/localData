var http = require('http');
    var app = http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify([
            {
               "userId":1,
               "id":1,
               "title":"sunt aut facere repellat provident",
               "body":"quia et suscipit"
            },
            {
                "userId":2,
                "id":2,
                "title":"qui est esse",
                "body":"est rerum tempore vitae"
             }
         ]));
    });
    app.listen(5000);