var express = require('express')
var jade = require('jade')
var app = express()
var user = express.Router()
var pass = express.Router()
var tel = express.Router()
var txt=require('./2.js')
var mysql = require('mysql')
var bodyParser =require('body-parser')

app.use(bodyParser.urlencoded({}))
app.use('/user',user)
app.use('/pass',pass)
app.use('/tel',tel)
var pool =mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'123',
	database:'name',
	port:3306
})

user.use('',function(req,res){
  console.log(txt.user)
  var usd =req.query.usd //获取下标
  console.log(usd)
  var newArr=[]
  if(usd==undefined){
  	newArr=txt.user.slice(0,3)
  	usd=0
  }else{
  	newArr=txt.user.slice(usd*3,usd*3+3 )
  }
  var num = Math.ceil(txt.user.length/3)
  console.log(num)
	var str = 
	jade.renderFile('./1.jade',{pretty:true,titles:'新闻',txtArr:newArr,nums:num,color:usd,urld:'user'})
		res.send(str)
})



pass.use('',function(req,res){
	  console.log(txt.pass)
  var usd =req.query.usd //获取下标
  console.log(usd)
  var newArr=[]
  if(usd==undefined){
  	newArr=txt.pass.slice(0,3)
  	usd=0
  }else{
  	newArr=txt.pass.slice(usd*3,usd*3+3 )
  }
  var num = Math.ceil(txt.pass.length/3)
  console.log(num)
	var str = 
	jade.renderFile('./1.jade',{pretty:true,titles:'简讯',txtArr:newArr,nums:num,color:usd,urld:'pass'})
		res.send(str)
})




tel.use('',function(req,res){
	
	  console.log(txt.tel)
  var usd =req.query.usd //获取下标
  console.log(usd)
  var newArr=[]
  if(usd==undefined){
  	newArr=txt.tel.slice(0,3)
  	usd=0
  }else{
  	newArr=txt.tel.slice(usd*3,usd*3+3 )
  }
  var num = Math.ceil(txt.tel.length/3)
  console.log(num)
	var str = 
	jade.renderFile('./1.jade',{pretty:true,titles:'信息',txtArr:newArr,nums:num,color:usd,urld:'tel'})
		res.send(str)
})

app.listen(8000,function(){
	console.log('启动....')
})
