var express = require('express');
var bodyParser = require('body-parser');
const dotenv = require("dotenv");
const mongoose =require('mongoose')
const API_PORT = 5000
const authRoute=require("./routes/auth")
const path=require('path')


var app = express();

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL,{
	useNewUrlParser:true,
    useUnifiedTopology:true,
	// useCreateIndex:true,
}).then(console.log("connected to mongoDB!!!!!!!"))
.catch((err)=>{console.log(err)});

app.use("/api/auth",authRoute);




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) //optional but useful for url encoded data
app.use(express.static(path.join(__dirname, 'public')));


// app.use(function(req,res,next){
//   res.header('Access-Control-Allow-Origin',"*");
//   res.header('Access-Control-Allow-Headers',"Origin,X-Requested-With,Content-Type,Accept");
//   res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
//   next();


// });

app.post('/code', function(req,res,next) {
	var result=""
	let code = req.body.code;

	// writetofile()
    // .then(() => executefile())
    // .then(res => compare(res))
	
   
		const fs = require('fs')
		
		fs.writeFile('./2.txt', code, err => {
		if (err) {
			console.error(err)
			return
		}
		})
		console.log("1")
	    
	
	// function executefile() {
	// 	return new Promise((resolve,reject)=>{
		   const { exec } = require('node:child_process')
	
		   const  command = exec('jshell -q 2.txt')
		
		   command.stdout.on('data', output => {
	      
		   result = result + output.toString().replace(/[\r\n]/g, "")
	
		   console.log(result.replace("jshell>",""))
		   console.log("2")


		   if (result.includes("jshell")) {
			console.log("3")
			result = result.replace("jshell>","").trim()
			console.log("result" +result+"result")
			if (result !=="Hello A Java Tutor!") {
				if (result == "") {
                    res.status(400).send("syntax mistake");
				} else {
					res.status(400).send("incorrect answer");
				}
				
				}
				else {
				res.status(200).send("right");
				}
				 
				
		   }
	
	       })
	    //    return result
	// 	})
	// }
	
	
	// async function compare() {
	// 	await executefile()
		

	// }
    // compare()
    
	//res.status(200).send('recieve code'); 
	//console.log(code);
});

// app.use(express.static('../client/public'));
// app.use(function(req,res,next){
// 	res.header('Access-Control-Allow-Origin',"*");
// 	res.header('Access-Control-Allow-Headers',"Origin,X-Requested-With,Content-Type,Accept");
// 	res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
// 	next();
  
  
//   });
  
  app.listen(API_PORT, () => {
	console.log(`backend is listening on localhost:${API_PORT}`)
});

// tell the server to listen on the given port and log a message to the console (so we can see our server is doing something!)
module.exports=app;