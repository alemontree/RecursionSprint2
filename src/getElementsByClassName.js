// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node, results){
  // your code here
  var node = node || document.body;
  var results = results || [];
  if (node.classList.contains(className)) {
    results.push(node);
  }
  for (var i = 0, children = node.children, childrenLen = children.length; i < childrenLen; i ++) {
    getElementsByClassName(className, children[i], results);
  }

  return results;
    // base case: if node has className

};
