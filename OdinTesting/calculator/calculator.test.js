//const { calculator } = require('./calculator.js');
import { calculator } from './calculator.js';

describe('expect calculator file to exist', function() {
    it('file should exist', function() {
        expect(require('./calculator')).toBe.defined;
    });
});

describe('expect calculator  object to be defined', () => {
    it('calculator object should be defined', ()  =>  {
        expect(calculator).toBe.defined;
    });
  });

describe('expect calculator.add to be defined', () => {
    it('calculator function add should be defined', ()  =>  {
        expect(calculator.add).toBe.defined;
    });
  });

  describe('expect calculator.subtract to be defined', () => {
    it('calculator function add should be defined', ()  =>  {
        expect(calculator.add).toBe.defined;
    });
  });

  describe('expect calculator.divide to be defined', () => {
    it('calculator function add should be defined', ()  =>  {
        expect(calculator.add).toBe.defined;
    });
  });

  describe('expect calculator.multiply to be defined', () => {
    it('calculator function add should be defined', ()  =>  {
        expect(calculator.add).toBe.defined;
    });
  });


describe('calculator', () => {
  it('add works', () => {
    const obj = calculator.add(1.2, 2);
    expect(obj).toBeCloseTo(3.2, 5);
  });
});

describe('calculator', () => {
  it('subtract works', () => {
    const obj = calculator.subtract(14.5, 2.25);
    expect(obj).toBeCloseTo(12.25, 5);
  });
});

describe('calculator', () => {
  it('divide works', () => {
    const obj = calculator.divide(7, 2);
    expect(obj).toBeCloseTo(3.5, 5);
  });
});

describe('calculator', () => {
  it('multiply works', () => {
    const obj = calculator.multiply(1.5, 2);
    expect(obj).toBeCloseTo(3, 5);
  });
});