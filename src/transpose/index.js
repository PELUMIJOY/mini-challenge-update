const { resolveConfig } = require("prettier");

/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let number = [];
    let row = array.length;
    let column = array[0].length;
    if ((row >=1 && row <=10)&& (column >= 1 && column <=10)){
        for(let i=0; i < array[0].length; i++){
            let num = [];
            for(let j=0; j < array.length; j++){
                num.push(array[j][i]);
            }
            number.push(num);
        }
        return number;
    }
};
console.log(transpose([  [5, 12, 17, 9, 3],
    [13, 4, 8, 14, 1],
    [9, 6, 3, 7, 21],])
    
);
module.exports = transpose;
