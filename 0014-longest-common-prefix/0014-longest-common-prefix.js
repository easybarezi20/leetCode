/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    for (let i = 0; i < strs[0].length; i++){
        let currentChar = strs[0][i]
        for (let j = 0;j < strs.length; j++){
            if(strs[j][i] !== currentChar) return prefix;
        }
        prefix += currentChar;
    }
    return prefix
};