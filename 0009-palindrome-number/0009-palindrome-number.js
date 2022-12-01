/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let numToString = x.toString()
        for(i = 0; i < numToString.length; i++){
          if(numToString[i] !== numToString[numToString.length - 1 - i]){
            return false
          }
        }
    return true
};