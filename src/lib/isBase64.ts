import assertString from './util/assertString.ts';

const notBase64: RegExp = /[^A-Z0-9+\/=]/i;

export default function isBase64(str: string): boolean {
  assertString(str);
  const len = str.length;
  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }
  const firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 ||
    firstPaddingChar === len - 1 ||
    (firstPaddingChar === len - 2 && str[len - 1] === '=');
}
