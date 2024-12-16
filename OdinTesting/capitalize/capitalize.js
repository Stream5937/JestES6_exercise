//A capitalize function that takes a string and returns it with the first character capitalized.

const input = 'test string';
const result = capitalize(input);

function capitalize (input) { 
    
    let modifiedString = "";
    modifiedString += (input.charAt(0).toUpperCase());
    modifiedString += input.slice(1,input.length);
    
    return modifiedString
}

console.log('result is: ',result);

//module.exports = {capitalize , input, result}
export {capitalize, input, result}