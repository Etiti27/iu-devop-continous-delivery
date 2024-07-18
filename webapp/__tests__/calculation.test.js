const calculate = require('../Calculation');
// import calculate from '../Calculation';
// adition test
test('adds 1 + 2 to equal 3', () => {
  expect(calculate.addition(1, 2)).toBe(3);
});

test('adds -1 + -1 to equal -2', () => {
  expect(calculate.addition(-1, -1)).toBe(-2);
});

test('adds 0 + 0 to equal 0', () => {
  expect(calculate.addition(0, 0)).toBe(0);
});

// substraction test

test('adds 2-1 to equal 3', () => {
    expect(calculate.substraction(2, 1)).toBe(1);
  });
  
  test('adds -1 - -1 to equal -2', () => {
    expect(calculate.substraction(-1, -1)).toBe(0);
  });
  
  test('adds 0 - 0 to equal 0', () => {
    expect(calculate.substraction(0, 0)).toBe(0);
  });

  test('adds 1 - 2 to equal -1', () => {
    expect(calculate.substraction(1, 2)).toBe(-1);
  });