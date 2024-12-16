/*
A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. Read more about how a Caesar cipher works.

    Don’t forget to test wrapping from z to a. For example, caesarCipher('xyz', 3) should return 'abc'.
    Don’t forget to test case preservation. The shifted lettercase should follow the original lettercase. For example, caesarCipher('HeLLo', 3) should return 'KhOOr'.
    Don’t forget to test punctuation. Punctuations, spaces, and other non-alphabetical characters should remain unchanged. For example, caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'.
    For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

*/

/*
    NB js charCodeAt() returns the Unicode of the character at a specified position in a string.
    let text = "HELLO WORLD"; let code = text.charCodeAt(0); code  is 72
    The String.fromCharCode() method converts Unicode values to characters.
    eg let text = String.fromCharCode(72, 69, 76, 76, 79); text is HELLO
    A-Z  65 ->  90 decimal  uppercase
    a-z  97 -> 122 decimal  lowercase
*/

let message = 'lemon';
let shifted = 5;


function caesarCipher (message, shifted) {

    let cipherText = "";    //the returned encoded message
    let n ;                 // the unicode value of character

    for(let i=0; i < message.length; i++){
        n = message.charCodeAt(i);
        cipherText +=  encode(n, shifted);
    }

    return cipherText;
}

//generate alpha key
function alpha(n){
    //converts Unicode values to alpha characters (plain text)
    return String.fromCharCode(n);
}

//function generate cipherTextCharacter shifted by shift value from unicode value (n) of plaintext character
function encode (n, shift) {

    switch (true) {

        //out of range - high
        case (n > 122) : {
            return alpha(n);
        }

        //lowercase 97 -> 122
        case (n > 96) : {
            return encodeLow( n, shift ) ;
        }

        //out of range mid
        case (n > 90) : {
            return alpha(n);
        }

        //uppercase 65 -> 90
        case (n > 64) : {
            return encodeUpp( n, shift ) ;
        }

        //out of range -low
        default: {
            return  alpha(n);
        }
    }
}


//generate cipher text character for lowercase
function encodeLow(n,shift) {
    let cipherCode;
    //apply shift
    cipherCode = n + shift;
    //ensure shift wraps
    //cover shifted below 'a'
    if (cipherCode < 97) { cipherCode =  123 -(97-cipherCode); }
    else{
        //cover shifted above 'z'
        if (cipherCode > 122) { cipherCode =  96 +(cipherCode -122); }
    }
    //should now be in valid lowercase range so
    //convert Unicode value to alpha character (plain text)
    let text = String.fromCharCode(cipherCode);
    return text;
}


//generate cipher text character for uppercase
function encodeUpp(n,shift) {
    let cipherCode;
    //apply shift
    cipherCode = n + shift;
    //ensure shift wraps
    //cover shifted below 'a'
    if (cipherCode < 65) { cipherCode =  91 -(65-cipherCode); }
    //cover shifted above 'z'
    if (cipherCode > 90) { cipherCode =  64 +(cipherCode -90); }
    //should now be in valid lowercase range so
    //convert Unicode value to alpha character (plain text)
    return String.fromCharCode(cipherCode);
}

export {caesarCipher, message, shifted, encodeLow, encodeUpp};