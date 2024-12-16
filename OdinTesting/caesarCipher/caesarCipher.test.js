import {caesarCipher, message, shifted, encodeLow, encodeUpp} from './caesarCipher.js';

describe('expect caesarCipher file to exist', function() {
    it('file should exist', function() {
        expect(require('./caesarCipher.js')).toBe.defined;
    });
});

describe('expect caesarCipher function to exist', () => {
    it('function should exist', function() {
        const input= 'lemon' ; 
        const shift = 5;
        expect(caesarCipher(input, shift)).toBe.defined;
    });
  });

describe('caesarCipher input', () => {
    test('func called with input', () => {
        const caesarCipher = jest.fn();
        caesarCipher('lemon', 5);
        expect(caesarCipher).toHaveBeenCalled();
    });
});

describe('expect caesarCipher inputs of correct type', () => {
    it('input should be string and shift a number', function() {
        const caesarCipher = jest.fn();
        let cipherText = caesarCipher('lemon', 5);
        expect(typeof message).toBe("string");
        expect(typeof shifted).toBe("number");
    });
  });

  
describe('encode lower case', () => {
    it('encodeLow works +shift', () => {
      const cipherText = encodeLow(108,5);
      expect(cipherText).toBe('q');
    });
  });
  
describe('encode uppercase', () => {
    it('encodeUpp works +shift', () => {
      const cipherText = encodeUpp(65,5);
      expect(cipherText).toBe('F');
    });
  });

describe ('caesarCipher ', () => {
    it('caesarCipher works +shift', () => {
        const cipherText = caesarCipher("_leMon Drizzle! @ noon .",5);
        expect(typeof cipherText).toBe("string");
    });
});

describe ('caesarCipher ', () => {
  it('caesarCipher works +shift & returns cipherText', () => {
      const cipherText = caesarCipher("leMon",5);
      expect(cipherText).toBe('qjRts');
  });
});

describe ('caesarCipher ', () => {
  it('caesarCipher works +shift', () => {
      const cipherText = caesarCipher("_leMon Drizzle! @ noon .",5);
      expect(typeof cipherText).toBe("string");
      expect(cipherText).toBe('_qjRts Iwneeqj! @ stts .');
  });
});

describe ('caesarCipher ', () => {
  it('caesarCipher works -shift & returns cipherText', () => {
      const cipherText = caesarCipher("leMon",-5);
      expect(cipherText).toBe('gzHji');
  });
});

describe ('caesarCipher ', () => {
  it('caesarCipher works -shift', () => {
      const cipherText = caesarCipher("_leMon Drizzle! @ noon .",-5);
      expect(typeof cipherText).toBe("string");
      expect(cipherText).toBe('_gzHji Ymduugz! @ ijji .');
  });
});

//'Hello, World!', 3  ->  'Khoor, Zruog!'
describe ('caesarCipher ', () => {
  it('caesarCipher works +shift & returns cipherText', () => {
      const cipherText = caesarCipher('Hello, World!', 3 );
      expect(cipherText).toBe('Khoor, Zruog!');
  });
});