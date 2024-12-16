//A reverseString function that takes a string and returns it reversed.

const input = 'test string';
const result = reverseString(input);

function reverseString (input) { 
    
    let modifiedString = "";
    for(let i=input.length; i > -1 ; i--){
    modifiedString += (input.charAt(i));
   // modifiedString += input.slice(1,input.length);

    }
    
    return modifiedString
}

console.log('result is: ',result);

//module.exports = {reverseString , input, result}
export {reverseString, input, result}
