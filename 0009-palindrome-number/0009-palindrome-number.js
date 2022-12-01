/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let numToString = x.toString()
    let len = numToString.length
    let i = 0
    while (i < len){
      i++
      if(numToString[i] !== numToString[len - 1 - i]){
        return false
      }
    }
    return true
};