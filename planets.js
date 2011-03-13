// Just a simple helper for using the planets.py service
var planets = (function() {
 
  //Lightweight JSONP fetcher - www.nonobtrusive.com
  var JSONP=(function(){var a=0,c,f,b,d=this;function e(j){var i=document.createElement("script"),h=false;i.src=j;i.async=true;i.onload=i.onreadystatechange=function(){if(!h&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){h=true;i.onload=i.onreadystatechange=null;if(i&&i.parentNode){i.parentNode.removeChild(i)}}};if(!c){c=document.getElementsByTagName("head")[0]}c.appendChild(i)}function g(h,j,k){f="?";j=j||{};for(b in j){if(j.hasOwnProperty(b)){f+=b+"="+j[b]+"&"}}var i="json"+(++a);d[i]=function(l){k(l);d[i]=null;try{delete d[i]}catch(m){}};e(h+f+"callback="+i);return i}return{get:g}}());

  function helio(args, callback) {
    var callback = callback || (args && args.callback);
    var url = (args && args.url) || (planets.url + 'helio');
    var get = {};
    if (args && args.start) get.d = args.start;
    if (args && args.span) get.s = args.span;
    JSONP.get(url, get, callback);
  }

  return {
    'helio': helio,
  };

}());
