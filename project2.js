var koa = require('koa');
var app = koa();
var parse = require('co-body');
var views = require('co-views');
//var render = views('public', {map : {html:'jade'}});

var router = require('kroute')();
var render = require('koa-render-jade')(__dirname+'/public');
var publicIp = require('public-ip');
//var tools = require('./javascript');

app.use(router);

// var pubIP = tools.getIP();
// var lat=tools.getLat();
// var lon=tools.getLon();

router.get('/', function *(next){
  this.body = yield render('home');
})


app.listen(3000);
console.log("Server is running on port 3000");
