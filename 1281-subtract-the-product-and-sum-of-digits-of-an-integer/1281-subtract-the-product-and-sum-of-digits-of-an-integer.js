/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
        let product = 1;
        let sum = 0;
        let numbers = n.toString().split('');
        for (let i = 0; i < numbers.length; i++){
             product *= numbers[i] 
             sum += parseInt(numbers[i]) 
        }
    return product - sum
};