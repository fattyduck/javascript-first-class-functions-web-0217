var receivesAFunction = function(func) {
  return func();
}

var returnsANamedFunction = function() {
  var temp = function() {};
  return temp;
}

var returnsAnAnonymousFunction = function(){
  return function(){};
}
