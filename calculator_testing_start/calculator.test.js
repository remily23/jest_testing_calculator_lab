const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => {
    expected = 1000
    actual = sum(600, 400);
    expect(actual).toBe(expected); 
    
  });

  test('can add two negative numbers', () => {
    expected = -50
    actual = sum(-40, -10);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 100;
    actual = sum(0, 100);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract two small positive numbers', () => {
    expected = 10;
    actual = subtract(30, 20);
    expect(actual).toBe(expected);
  });

  test('can subtract two larger positive numbers', () => {
    expected = 5000;
    actual = subtract(6000, 1000);
    expect(actual).toBe(expected);
  });
  
  test('can subtract two negative numbers', () => {
    expected = 1;
    actual = subtract(-3, -4);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 5;
    actual = subtract(5, 0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {
  test('can multiply two small positive numbers', () => {
    expected = 10;
    actual = multiply(1, 10);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => {
    expected = 10000;
    actual = multiply(100, 100);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 8;
    actual = multiply(-2, -4);
    expect(actual).toBe(expected);
  });

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(0, 1);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {
  test('can divide by two positive numbers', () => {
    expected = 5;
    actual = divide(100, 20);
    expect(actual).toBe(expected);
  });

  test('can divide by two large positive numbers', () => {
    expected = 100;
    actual = divide(10000, 100);
    expect(actual).toBe(expected);
  });

  test('can divide by two negative numbers', () => {
    expected = 2;
    actual = divide(-4, -2);
    expect(actual).toBe(expected);
  });

  test('can divide by zero', () => {
    expected = 0;
    actual = divide(0, 1);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {
  test('can calculate the modulus of a positive number by a positive number', () => {
    expected = 3;
    actual = modulus(3, 10);
    expect(actual).toBe(expected);
  });

  test('can calculate the modulus of a negative number by a negative number', () => {
    expected = -2;
    actual = modulus(-2, -5);
    expect(actual).toBe(expected);
  });

  test('can calculate the modulus of zero', () => {
    expected = 0;
    actual = modulus(0, 1);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {
  test ('can check a small positive even number', () => {
    expected = true;
    actual = even(2);
    expect(actual).toBe(expected);
  });

  test('can check a zero', () => {
    expected = true;
    actual = even(0);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {
  test('can check a small positive odd number', () => {
    expected = true;
    actual = odd(5);
    expect(actual).toBe(expected);
  });

  test('can check a zero', () => {
    expected = false;
    actual = odd(0);
    expect(actual).toBe(expected);
  });

});
