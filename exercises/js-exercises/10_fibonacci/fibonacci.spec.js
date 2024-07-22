const fibonacci = require('./fibonacci')

describe('fibonacci', () => {
  test('4th fibonacci number is 3', () => {
    expect(fibonacci.fibonacci(4)).toBe(3);
  });
  test('6th fibonacci number is 8', () => {
    expect(fibonacci.fibonacci(6)).toBe(8);
  });
  test('10th fibonacci number is 55', () => {
    expect(fibonacci.fibonacci(10)).toBe(55);
  });
  test('15th fibonacci number is 610', () => {
    expect(fibonacci.fibonacci(15)).toBe(610);
  });
  test('25th fibonacci number is 75025', () => {
    expect(fibonacci.fibonacci(25)).toBe(75025);
  });
  test('0th fibonacci number is 0', () => {
    expect(fibonacci.fibonacci(0)).toBe(0);
  });
  test('doesn\'t accept negatives', () => {
    expect(fibonacci.fibonacci(-25)).toBe("OOPS");
  });
  test('DOES accept strings', () => {
    expect(fibonacci.fibonacci("0")).toBe(0);
  });
  test('DOES accept strings', () => {
    expect(fibonacci.fibonacci("1")).toBe(1);
  });
  test('DOES accept strings', () => {
    expect(fibonacci.fibonacci("2")).toBe(1);
  });
  test('DOES accept strings', () => {
    expect(fibonacci.fibonacci("8")).toBe(21);
  });
});