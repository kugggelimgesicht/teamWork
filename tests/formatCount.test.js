const formatCount = require('../src/formatCount');

test('test formatting of correct values', () => {
    expect(formatCount(1000)).toBe('1K');
    expect(formatCount(10**6)).toBe('1M');
    expect(formatCount(10**9)).toBe('1B');
})

test('test negative values', () =>{
    expect(() => formatCount(-5)).toThrow();
})

test('test bigInt', () => {
    expect(() => formatCount(10**15)).toThrow();
})

test('test not numeral argument', () => {
    expect(() => formatCount('собака')).toThrow();
})