/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */
function romanToDecimal(roman) {
    let total =0;
    const converter = {
        'M' : 1000,
        'CM' : 900,
        'D'  : 500,
        'CD' : 400,
        'C'  : 100,
        'XC' : 90,
        'L'  : 50,
        'XL' : 40,
        'X'  : 10,
        'IX' : 9,
        'V' : 5,
        'IV' : 4,
        'I' : 1
    }
    for (let i = 0; i < roman.length; i++){
        let present = roman[i];
        let old = roman[i + 1];
        if (converter[old] > converter[present]){
            total += converter[old] - converter[present]
            i++;
        }
        else{
            total += converter[present]
        }
    }
    return total
}

module.exports = romanToDecimal;
