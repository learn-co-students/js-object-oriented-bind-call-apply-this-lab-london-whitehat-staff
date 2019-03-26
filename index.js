//Your code here

function justInvoke(fn) {
  return fn();
}

//this is a basic cb function which. fn (which has been given by the test) is a function. justInvoke() invokes the function which has been passed to it in the return.

function setThisWithCall(fn, name, age) {
  return fn.call(name, age);
}

//the call() function resets the meaning of this. The arguments have been provided by the tests. The first argument is what this will mean to that function, the other arguments will now be accesible to that function.

function setThisWithApply(fn, name, args) {
  return fn.apply(name, args);
}

//the same as above but apply lets you invoke the function with arguments as an array.

function returnNewFunctionOf(fn, name) {
  return fn.bind(name);
}

//bind() is binding fn to name, so now when fn uses this, it refers to name.









