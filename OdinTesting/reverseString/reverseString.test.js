//const { reverseString ,input, result} = require('./reverseString.js');
import { reverseString ,input, result} from './reverseString.js';

describe('expect reverseString file to exist', function() {
    it('file should exist', function() {
        expect(require('./reverseString')).toBe.defined;
    });
});

describe('expect reverseString function to exist', () => {
    it('function should exist', function() {
        expect(reverseString(input)).toBe.defined;
    });
  });

describe('reverseString', () => {
    test('func called with input', () => {
        const reverseString  = jest.fn();
        reverseString('lemon');
        expect(reverseString).toHaveBeenCalled();
    });
});

describe('expect input to be string', () => {
    it('input is string',() => {
        expect(typeof input).toBe("string");
    });
  });

describe('expect input not to be null', () => {
    it('input is string',() => {
        expect(input).not.toBeNull();
    });
  });

describe('expect result to be string', () => {
    it('result is string',() => {
        expect(typeof result).toBe("string");
    });
  });


describe('expect result = input string reversed', () => {
    it('result is input reversed',() => {
        const result = reverseString('abcdefg');
        expect(result).toBe('gfedcba');  
    });
});
