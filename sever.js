const express = require("express");
const res = require("express/lib/response");
const app = express();
var path = require("path");

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'','index.html'));
});

app.listen(8080,function(){
    console.log("Hello Cesium Log");
});