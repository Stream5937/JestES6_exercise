import {capitalize, input, result} from "./capitalize.js"
//const { capitalize ,input, result} = require('./capitalize.js');

describe('expect capitalize file to exist', function() {
    it('file should exist', function() {
        expect(require('./capitalize')).toBe.defined;
    });
});

describe('expect capitalize function to exist', () => {
    it('function should exist', function() {
        expect(capitalize(input)).toBe.defined;
    });
  });

describe('capitalize', () => {
    test('func called with input', () => {
        const capitalize  = jest.fn();
        capitalize('lemon');
        expect(capitalize).toHaveBeenCalled();
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
  
describe('expect result.charAt(0) to be uppercase', () => {
    it('result[0] is uppercase',() => {
        const result = capitalize('abc');
        expect(result).toBe('Abc');  
    });
});

  
