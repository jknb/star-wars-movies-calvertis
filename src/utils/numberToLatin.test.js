import { convertNumberToLatin } from './numberToLatin';


test('convertNumberToLatin using number in range [1-6]', () => {
    const result = convertNumberToLatin(1);
    expect(result).toEqual('I');
});

test('convertNumberToLatin using number in range [1-6]', () => {
    const result = convertNumberToLatin(6);
    expect(result).toEqual('VI');
});

test('convertNumberToLatin using number out of range [1-6]', () => {
    const result = convertNumberToLatin(7);
    expect(result).toEqual(null);
});

test('convertNumberToLatin using number out of range [1-6]', () => {
    const result = convertNumberToLatin(0);
    expect(result).toEqual(null);
});

test('convertNumberToLatin string', () => {
    const result = convertNumberToLatin('test');
    expect(result).toEqual(undefined);
});

test('convertNumberToLatin NaN', () => {
    const result = convertNumberToLatin(NaN);
    expect(result).toEqual(undefined);
});