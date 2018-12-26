const http = require('http'),
	fs=require("fs");

http.createServer(function(req, res){
	fs.readFile("./consultaajax.html",function(err,html){
		res.write(html);
		res.end();
		//console.log(`Server running at http://localhost:3000/`);
	});
	
}).listen(88);