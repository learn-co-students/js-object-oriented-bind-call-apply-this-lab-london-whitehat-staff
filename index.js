//Your code here
function justInvoke(returnsThisAndArgs) {
    console.log(window)
     return returnsThisAndArgs.call(window)
}

function setThisWithCall(fn, thisValue, arg) {
    console.log(arguments)
    console.log(fn.call(thisValue,arg))
    return fn.call(thisValue,arg)
}

function setThisWithApply(fn, thisValue, args) {
    return fn.apply(thisValue, [...args])
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
    return functionToBeCopied.bind(thisValue)
}