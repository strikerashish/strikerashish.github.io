const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req,res){
//res.send("<a href= __dirname+/index.html > click</a>");
res.sendFile(__dirname + "/student.html");
});
app.post("/", function(req, res){
	var n1 = Number(req.body.num1);
	var n2 = Number(req.body.num2);
	var n3= String(n1+n2);
	res.send("The answer is "+n3);
	//console.log(req.body);
	//console.log(req.body.num2)
});


app.listen(3000, function(){
console.log("server is started");
});
//console.log("striker")