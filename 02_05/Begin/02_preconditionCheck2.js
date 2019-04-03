// Learning Functional Programming with Javascript
// Chapter 02, Video 05, Exercise 02

function createSafeVersion(func) {
	return function(n, message) {
	  if (n != null && typeof n === 'number') {
	    if (message != null && typeof message === 'string') {
	      return func(n, message)
	    }
	  }
	}
}

function printMessageNTimes(n, message) {
  for (var i = 0; i < n; i++) { console.log(message) }
}

function getNthLetter(n, string) {
  return string.charAt(n)
}

function getSubstringOfLength(n, string) {
  return string.substring(0, n)
}

var printMessageNTimesSafe = createSafeVersion(printMessageNTimes)
var getNthLetterSafe = createSafeVersion(getNthLetter)
var getSubstringOfLengthSafe = createSafeVersion(getSubstringOfLength)

printMessageNTimesSafe(4, "Banana")
getNthLetterSafe(2, "Javascript")
getSubstringOfLengthSafe(5, "Hello and welcome")
console.log("Print")

getNthLetterSafe("two", "Javascript")