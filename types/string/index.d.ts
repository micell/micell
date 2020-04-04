import countChars from './countChars';
import escapeRegexp from './escapeRegexp';
import isValidJSON from './isValidJSON';
import truncate from './truncate';
declare const _default: {
    countChars: typeof countChars;
    countLines: (text: string, newline?: string) => number;
    escapeRegexp: typeof escapeRegexp;
    firstChar: (str: string) => string;
    isValidJSON: typeof isValidJSON;
    lastChar: (str: string) => string;
    truncate: typeof truncate;
};
export default _default;
