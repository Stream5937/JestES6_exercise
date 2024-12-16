/*
An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

const object = analyzeArray([1,8,3,4,2,6]);

object == {
   average: 4,
   min: 1,
   max: 8,
   length: 6
};
*/
import {numbersObj} from "./numbersObj.js";

function analyzeArray (numArray) {
    let num = new numbersObj(numArray);
    
    let retObj = {
        average: num.average(),
        min: num.min(),
        max: num.max(),
        length: num.length()
    }
    return retObj;
}

const obj = analyzeArray([1,8,3,4,2,6]);
console.log('obj: ',obj);

export {analyzeArray}