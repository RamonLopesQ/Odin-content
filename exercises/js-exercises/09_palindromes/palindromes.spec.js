const palindromes = require('./palindromes')

describe('palindromes', () => {
  test('works with single words', () => {
    expect(palindromes.palindromes('racecar')).toBe(true);
  });
  test('works with punctuation ', () => {
    expect(palindromes.palindromes('racecar!')).toBe(true);
  });
  test('works with upper-case letters ', () => {
    expect(palindromes.palindromes('Racecar!')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes.palindromes('A car, a man, a maraca.')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes.palindromes('Animal loots foliated detail of stool lamina.')).toBe(true);
  });
  test('doesn\'t just always return true', () => {
    expect(palindromes.palindromes('ZZZZ car, a man, a maracaz.')).toBe(false);
  });
  test('works with numbers in a string', () => {
    expect(palindromes.palindromes('rac3e3car')).toBe(true);
  });
  test('works with unevenly spaced numbers in a string', () => {
    expect(palindromes.palindromes('r3ace3car')).toBe(false);
  });
});