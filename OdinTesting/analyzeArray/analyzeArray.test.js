
import { analyzeArray} from "./analyzeArray.js"
//import { numbersObj} from "./numbersObj.js"

describe('expect analyzeArray file to exist', function() {
    it('file should exist', function() {
        expect(require('./analyzeArray.js')).toBe.defined;
    });
});

describe('expect analyzeArray function to exist', () => {
    it('function should exist', function() {
        const arr = [1,8,3,4,2,6] ; 
        expect(analyzeArray(arr)).toBe.defined;
    });
  });

describe('analyzeArray input', () => {
    test('func called with input', () => {
        const analyzeArray = jest.fn();
        analyzeArray([1,8,3,4,2,6]);
        expect(analyzeArray).toHaveBeenCalled();
    });
});

describe('analyzeArray', () => {
    test('func returns object', () => {
        const analyzeArray = jest.fn();
        const retObj = analyzeArray([1,8,3,4,2,6]);
        expect(retObj).toBe.defined;
    });
});

describe('analyzeArray' , () => {
    it('object creation works', () => {
        let retObj = analyzeArray([1,8,3,4,2,6]);
        const obj = {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        };
        expect(retObj).toMatchObject(obj);
      });
});

/*
    constructor (array) {
        this.array = array;
        this.retObj = {
            average: this.average(),
            min: this.min(),
            max:this.max(),
            length:this.length()
        }
        return this.retObj;
    }
*/
/* works fine with object but problem testing within function 
describe('analyzeArray constructor' , () => {
        it('object creation works', () => {
            let retObj = new numbersObj([1,8,3,4,2,6]);
            const obj = {
                average: 4,
                min: 1,
                max: 8,
                length: 6
            };
            expect(retObj).toMatchObject(obj);
          });
});
*/

