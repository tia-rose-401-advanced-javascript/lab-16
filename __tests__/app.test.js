'use strict';


const event = require('../events/emit');
require('../events/logger');
require('../events/error.js');
const upper = require('../mod/upper');


const mocks = require('../__mocks__/fs.js');
jest.mock('../__mocks__/fs');

let readFile = mocks.readFile;
let writeFile = mocks.writeFile;

/**
 * log test
   * @desc logger test function
   */


describe('Upper', () => {
  it('should return a string in all uppercase', () => {
    let str = 'hello';
    str = upper(str);
    expect('str').toBe('HELLO');

  });
});

describe('logger emitter', () => {
  it('logs the event and the time', () => {
    let spy = jest.spyOn(console, 'log');
    event.emit('log', 'saved');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

/**
 * error test
   * @desc error test function
   */

describe('error emitter', () => {
  it('logs a custom error message', () => {
    let spy = jest.spyOn(console, 'error');
    event.emit('error');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

/**
 * readfile test
   * @desc readfile test function
   */

describe('Read File Module', () => {

  it('Should accept an file', () => {
    let file = 'file.txt';
    return readFile(file, (err, data) => {
      expect(err).toBeUndefined();
      expect(data).toEqual(Buffer.from(file));
    });
  });
});

/**
 * writefile test
   * @desc writefile test function
   */

describe('Write File Module', () => {

  it('Should accept a file', () => {
    let file = 'file.txt';
    return writeFile(file, (err, data) => {
      expect(err).toBeUndefined();
      expect(data).toEqual(Buffer.from(file));
    });
  });
});