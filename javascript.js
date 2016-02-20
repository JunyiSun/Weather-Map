var publicIp = require('public-ip');

module.exports = {
     getLat: function(){
       getJSONP('http://ip-api.com/json/'+ip, function(data){
         console.log(data.lat);
       });
     },
     getLon: function(){
       getJSONP('http://ip-api.com/json/'+ip, function(data){
         console.log(data.lon);
       });
     },
     getIP: function(){
       var temp;
       publicIp.v4(function (err, ip) {
         temp = ip;
       });
       return temp;
        //  return '138.51.118.16';
     }

};

function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0]
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}
