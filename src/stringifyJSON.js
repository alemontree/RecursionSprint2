// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  if(typeof obj === 'string'){
    return '"' + obj + '"';
  }
  if(Array.isArray(obj)) {
    var res = [];
    for (var i = 0; i < obj.length; i++){
      res.push(stringifyJSON(obj[i]));
    }
    return "[" + res.join(',') + "]";

  } 
  if(typeof obj === 'object' && obj !== null){
    var res = [];
    for(i in obj){
      if(typeof obj[i] === 'function' || typeof obj[i] === 'undefined') {
        continue;

      }
      res.push( stringifyJSON(i) + ":" + stringifyJSON(obj[i]) );
    }
    return "{"+ res.join(",")+ "}";
  }
  return "" + obj;
  // your code goes here
};
