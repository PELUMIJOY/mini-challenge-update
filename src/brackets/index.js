/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    if(str.length % 2 != 0)
        return "invalid";
    let stack = [];

    for(let i = 0; i < str.length; i++) {
        if (str[i] == '(' || str[i] == '{' || str[i] == '['){
            stack.push(str[i]);
         
        }else if(str[i] == ')' || str[i] == '}' || str[i] == ']') {
            if (str[i] == ')' && stack[stack.length-1] == '(')
                stack.pop();
            else if(str[i] == '}' && stack[stack.length-1] == '{')
                stack.pop();
            else if(str[i] == ']' && stack[stack.length-1] == '[')
                stack.pop();
            else return 'invalid'
        }
        
       
       
       
        // else if ((correctBracket == '(' && str[i]== ')') ||  (correctBracket =='{' && str[i]=='}') || (correctBracket =='[' && str[i]==']')){
        //     stack.pop();
        // } 
        else {
            return 'inValid';
        }

}
if (stack.length === 0){
    return 'valid';
} else {
    return 'invalid';
}
}
// console.log(isValid(`[(])`));
module.exports = isValid;
