var express= require('express');
var mongoose= require('mongoose');
var bodyParser= require('body-parser');
var cors= require('cors');
var path= require('path');

//cust middleware
var router= require('./route');

//MongoDB connection
mongoose.connect('mongodb://localhost:27017/contactList');
mongoose.connection.on('connected', ()=>{
	console.log('connection to mongodb established!');
});
mongoose.connection.on('error', (err)=>{
	if(err){
		console.log(err);
	}else
		console.log('connection to mongodb was not established!');
});

//Configuratiuons
var app= express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Static files
app.use(express.static(path.join(__dirname,'pulic')));

app.use('/api', router);

var port= process.env.PORT || 3000;
app.listen(port, ()=>{
	console.log('I am listening @ port: '+ port);
});