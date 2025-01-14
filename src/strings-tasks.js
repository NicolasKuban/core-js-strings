/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Returns the length of the given string.
 *
 * @param {string} value - The input string to calculate the length of.
 * @return {number} - The length of the string.
 *
 * @example
 *   getStringLength('aaaaa') => 5
 *   getStringLength('b') => 1
 *   getStringLength('') => 0
 *   getStringLength() => 0
 *   getStringLength(null) => 0
 *   getStringLength(undefined) => 0
 */
function getStringLength(value) {
  if (typeof value === 'string') {
    return value.length;
  }
  return 0;
}
// console.log(getStringLength('aaaaa')) // => 5
// console.log(getStringLength('b')) // => 1
// console.log(getStringLength('')) // => 0
// console.log(getStringLength()) // => 0
// console.log(getStringLength(null)) // => 0
// console.log(getStringLength(undefined)) // => 0

/**
 * Returns true if the value is a string, otherwise returns false.
 *
 * @param {string} value - The value to check if it's a string.
 * @return {boolean} - True if the value is a string, false otherwise.
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1 - The first string to concatenate.
 * @param {string} value2 - The second string to concatenate.
 * @return {string} - The concatenated string.
 *
 * @example
 *   concatenateStrings('aa', 'bb') => 'aabb'
 *   concatenateStrings('aa', '') => 'aa'.
 *   concatenateStrings('', 'bb') => 'bb'
 */
function concatenateStrings(value1, value2) {
  return value1.concat(value2);
}
// console.log(concatenateStrings('aa', 'bb')) // => 'aabb'
// console.log(concatenateStrings('aa', '')) // => 'aa'.
// console.log(concatenateStrings('', 'bb')) // => 'bb'

/**
 * Returns the first character of the given string.
 *
 * @param {string} value - The input string to extract the first character from.
 * @return {string} - The first character of the string.
 *
 * @example
 *   getFirstChar('John Doe') => 'J'
 *   getFirstChar('cat') => 'c'
 *   getFirstChar('') => ''
 */
function getFirstChar(value) {
  return value.charAt(0);
}
// console.log(getFirstChar('John Doe')) // => 'J'
// console.log(getFirstChar('cat')) //  => 'c'
// console.log(getFirstChar('')) // => ''

/**
 * Removes leading and trailing whitespace characters from the string.
 *
 * @param {string} value - The input string to remove leading and trailing whitespaces from.
 * @return {string} - The string with leading and trailing whitespaces removed.
 *
 * @example
 *   removeLeadingAndTrailingWhitespaces('  Abracadabra') => 'Abracadabra'
 *   removeLeadingAndTrailingWhitespaces('cat ') => 'cat'
 *   removeLeadingAndTrailingWhitespaces('\t\t\tHello, World! ') => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

/**
 * Removes only leading whitespace characters from the string.
 *
 * @param {string} value - The input string to remove leading whitespaces from.
 * @return {string} - The string with leading whitespaces removed.
 *
 * @example
 *   removeLeadingWhitespaces('  Abracadabra') => 'Abracadabra'
 *   removeLeadingWhitespaces('cat ') => 'cat '
 *   removeLeadingWhitespaces('\t\t\tHello, World! ') => 'Hello, World! '
 */
function removeLeadingWhitespaces(value) {
  return value.trimStart();
}
// console.log(removeLeadingWhitespaces('  Abracadabra'))
// console.log(removeLeadingWhitespaces('cat  '))
// console.log(removeLeadingWhitespaces('\t\t\tHello, World! '))
/**
 * Removes only trailing whitespace characters from the string.
 *
 * @param {string} value - The input string to remove trailing whitespaces from.
 * @return {string} - The string with trailing whitespaces removed.
 *
 * @example
 *   removeTrailingWhitespaces('  Abracadabra') => '  Abracadabra'
 *   removeTrailingWhitespaces('cat ') => 'cat'
 *   removeTrailingWhitespaces('\t\t\tHello, World! ') => '\t\t\tHello, World!'
 */
function removeTrailingWhitespaces(value) {
  return value.trimEnd();
}
// console.log(removeTrailingWhitespaces('  Abracadabra'))
// console.log(removeTrailingWhitespaces('cat  ') + 1)
// console.log(removeTrailingWhitespaces('\t\t\tHello, World!    ') + 1)

/**
 * Returns a string that is repeated the specified number of times.
 *
 * @param {string} str - The string to repeat.
 * @param {number} times - The number of times to repeat the string.
 * @return {string} - The result string.
 *
 * @example
 *   repeatString('A', 5) => 'AAAAA'
 *   repeatString('cat', 3) => 'catcatcat'
 *   repeatString('', 3) => ''
 *   repeatString('abc', -2) => ''
 */
function repeatString(str, times) {
  if (times < 0) {
    return '';
  }
  return str.repeat(times);
}
// console.log(repeatString('A', 5)) // => 'AAAAA'
// console.log(repeatString('cat', 3)) // => 'catcatcat'
// console.log(repeatString('', 3)) // => ''
// console.log(repeatString('abc', -2)) // => ''

/**
 * Remove the first occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the first occurrence of the substring removed.
 *
 * @example
 *   removeFirstOccurrences('To be or not to be', 'be') => 'To  or not to be'.
 *   removeFirstOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeFirstOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeFirstOccurrences(str, value) {
  const index = str.indexOf(value);
  // console.log(~index);
  if (index === -1) {
    return str;
  }
  return str.slice(0, index) + str.slice(index + value.length);
}
// console.log(removeFirstOccurrences('To be or not to be', 'be')) // => 'To  or not to be'.
// console.log(removeFirstOccurrences('I like legends', 'end')) // => 'I like legs'.
// console.log(removeFirstOccurrences('ABABAB', 'BA')) // => 'ABAB'.
// console.log(removeFirstOccurrences('The quick brown fox', 'dog')) // 'The quick brown fox', 'dog'
/**
 * Remove the last occurrence of a substring from a string.
 *
 * @param {string} str - The input string.
 * @param {string} value - The substring to remove from the string.
 * @return {string} - The string with the last occurrence of the substring removed.
 *
 * @example
 *   removeLastOccurrences('To be or not to be', 'be') => 'To be or not to '.
 *   removeLastOccurrences('I like legends', 'end') => 'I like legs'.
 *   removeLastOccurrences('ABABAB', 'BA') => 'ABAB'.
 */
function removeLastOccurrences(str, value) {
  const index = str.lastIndexOf(value);
  if (index === -1) {
    return str;
  }
  return str.slice(0, index) + str.slice(index + value.length);
}
// console.log(removeLastOccurrences('To be or not to be', 'be'))
// console.log(removeLastOccurrences('I like legends', 'end'))
// console.log(removeLastOccurrences('ABABAB', 'BA'))
// console.log(removeLastOccurrences('The quick brown fox', 'dog')) // 'The quick brown fox', 'dog'

/**
 * Calculate the sum of character codes of the given string.
 *
 * @param {string} str - The input string.
 * @return {number} - The sum of character codes of the string.
 *
 * @example
 *   sumOfCodes('My String') => 861 (77 + 121 + 32 + 83 + 116 + 114 + 105 + 110 + 103 = 861)
 *   sumOfCodes('12345') => 495 (9 + 50 + 51 + 52 + 53 = 495)
 *   sumOfCodes('') => 0
 *   sumOfCodes() => 0
 */
function sumOfCodes(str) {
  let result = 0;
  if (!str) {
    return 0;
  }
  for (let i = 0; i < str.length; i += 1) {
    // console.log(char.codePointAt());
    result += str.charCodeAt(i);
  }
  return result;
}
// console.log(sumOfCodes('My String'), "=======")
// console.log(sumOfCodes('12345'), "=======")
// console.log(sumOfCodes(''), "=======")
// console.log(sumOfCodes(), "=====")

/**
 * Checks if a string starts with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   startsWith('Hello World', 'World') => false
 *   startsWith('Hello World', 'Hello') => true
 */
function startsWith(str, substr) {
  return str.startsWith(substr);
}
// console.log(startsWith('Hello World', 'World'))
// console.log(startsWith('Hello World', 'Hello'))

/**
 * Checks if a string ends with a specific substring.
 *
 * @param {string} str - The input string.
 * @param {string} substr - The substring to check.
 * @return {boolean} - Returns true if str starts with substr, false otherwise.
 *
 * @example:
 *   endsWith('Hello World', 'World') => true
 *   endsWith('Hello World', 'Hello') => false
 */
function endsWith(str, substr) {
  return str.endsWith(substr);
}
// console.log(endsWith('Hello World', 'World'))
// console.log(endsWith('Hello World', 'Hello'))

/**
 * Returns a time string in the "mm:ss" format.
 *
 * @param {number} minutes - The number of minutes (non-negative integer).
 * @param {number} seconds - The number of seconds (non-negative integer).
 * @return {string} - The time string in the "mm:ss" format.
 *
 * @example
 *   formatTime(5, 30) => "05:30"
 *   formatTime(1, 15) => "01:15"
 *   formatTime(0, 45) => "00:45"
 *   formatTime(0, 0) => "00:00"
 */
function formatTime(minutes, seconds) {
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
    2,
    '0'
  )}`;
}
// console.log(formatTime(5, 30))
// console.log(formatTime(1, 30))
// console.log(formatTime(0, 30))
// console.log(formatTime(0, 0))

/**
 * Returns a string in reverse order.
 *
 * @param {string} str - The input string.
 * @return {string} - The string in reverse order.
 *
 * @example:
 *   reverseString('abcdef') => 'fedcba'
 *   reverseString('12345') => '54321'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}
// console.log(reverseString('abcdef'))
// console.log(reverseString('12345'))

/**
 * Returns a string with characters in alphabetical order.
 *
 * @param {string} str - The input string.
 * @return {string} - The string in alphabetical order.
 *
 * @example:
 *   orderAlphabetically('webmaster') => 'abeemrstw'
 *   orderAlphabetically('textbook') => 'bekoottx'
 *   orderAlphabetically('abc123xyz') => '123abcxyz'
 */
function orderAlphabetically(str) {
  return str.split('').sort().join('');
}
// console.log(orderAlphabetically('webmaster'))
// console.log(orderAlphabetically('textbook'))
// console.log(orderAlphabetically('abc123xyz'))

/**
 * Checks if a given string contains a specified substring.
 *
 * @param {string} str - The input string to search within.
 * @param {string} substring - The substring to check for in the input string.
 * @returns {boolean} - True if the input string contains the specified substring, false otherwise.
 *
 * @example
 *   containsSubstring('Hello, World!', 'World') => true
 *   containsSubstring('JavaScript is Fun', 'Python') => false
 *   containsSubstring('12345', '34') => true
 */
function containsSubstring(str, substring) {
  return str.includes(substring);
}
// console.log(containsSubstring('Hello, World!', 'World'))
// console.log(containsSubstring('Hello, World!', 'Python'))

/**
 * Returns the number of vowels in the string.
 * Vowels: 'a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'.
 *
 * @param {string} str - The input string.
 * @return {number} - The number of vowels in the string.
 *
 * @example:
 *   countVowels('apple')  => 2
 *   countVowels('banana') => 3
 *   countVowels('cherry') => 2
 *   countVowels('aEiOu') => 5
 *   countVowels('XYZ') => 1
 */
function countVowels(str) {
  const vowels = 'aeiouy';
  let result = 0;
  // for (const char of str) {
  //   if (vowels.includes(char.toLowerCase())) {
  //     result += 1;
  //   }
  // }
  for (let i = 0; i < str.length; i += 1) {
    if (vowels.includes(str[i].toLowerCase())) {
      result += 1;
    }
  }
  return result;
}
// console.log(countVowels('cherry'))
// console.log(countVowels('banana'))

/**
 * Returns true if the string is a palindrome; otherwise false.
 * https://en.wikipedia.org/wiki/Palindrome
 *
 * @param {string} str - The input string.
 * @return {bool} - True if the string is a palindrome, false otherwise.
 *
 * @example:
 *   isPalindrome('madam') => true
 *   isPalindrome('racecar') => true
 *   isPalindrome('apple') => false
 *   isPalindrome('No lemon, no melon') => true
 */
function isPalindrome(str) {
  let strOnlyAlfa = '';
  // for (const char of str.toLowerCase()) {
  //   // if (char.match(/[a-z]/i))
  //   // str.match(/[a-z]/i)
  //   if (/[a-z]/.test(char)) {
  //     strOnlyAlfa += char;
  //   }
  //   // console.log(char, /[a-z]/.test(char))
  // }
  for (let i = 0; i < str.length; i += 1) {
    if (/[a-z]/.test(str[i].toLowerCase())) {
      strOnlyAlfa += str[i].toLowerCase();
    }
  }

  // console.log(strOnlyAlfa)
  return strOnlyAlfa === strOnlyAlfa.split('').reverse().join('');
}
// console.log(isPalindrome('madam'))
// console.log(isPalindrome('racecar'))
// console.log(isPalindrome('apple'))
// console.log(isPalindrome('No lemon, no melon'))

/**
 * Find the longest word in the sentence. If there are multiple longest words,
 * the function returns the first one encountered.
 *
 * @param {string} sentence - The input sentence.
 * @returns {string} - The longest word in the sentence.
 *
 * @example:
 *   findLongestWord('The quick brown fox') => 'quick'
 *   findLongestWord('A long and winding road') => 'winding'
 *   findLongestWord('No words here') => 'words'
 */
function findLongestWord(sentence) {
  const words = sentence.split(' ');
  const result = [0, ''];
  // for (const word of words) {
  //   if (word.length > result[0]) {
  //     result[0] = word.length;
  //     result[1] = word;
  //   }
  // }
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > result[0]) {
      result[0] = words[i].length;
      result[1] = words[i];
    }
  }

  return result[1];
}
// console.log(findLongestWord('The quick brown fox')) // => 'quick'
// console.log(findLongestWord('A long and winding road')) // => 'winding'
// console.log(findLongestWord('No words here')) // => 'words'

/**
 * Returns the string where each word is reversed.
 *
 * @param {string} str - The input string.
 * @return {string} - The string where each word is reversed.
 *
 * @example:
 *   reverseWords('Hello World') => 'olleH dlroW'
 *   reverseWords('The Quick Brown Fox') => 'ehT kciuQ nworB xoF'
 */
function reverseWords(str) {
  // let words = str.split(' ')
  // words = words.map(word => word.split('').reverse().join(''))
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}
// console.log(reverseWords('Hello World')) // => 'olleH dlroW'
// console.log(reverseWords('The Quick Brown Fox')) // => 'ehT kciuQ nworB xoF'

/**
 * Inverts the case of each character in the given string.
 *
 * @param {string} str - The input string.
 * @returns {string} - The string with the case of each character inverted.
 *
 * @example
 *   invertCase('Hello, World!') =>  'hELLO, wORLD!'
 *   invertCase('JavaScript is Fun') => 'jAVASCRIPT IS fUN'
 *   invertCase('12345') => '12345'
 */
function invertCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result +=
      str[i] === str[i].toLowerCase()
        ? str[i].toUpperCase()
        : str[i].toLowerCase();
    // console.log(char)
  }
  // for (const char of str) {
  //   result +=
  //     char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
  //   // console.log(char)
  // }
  return result;
}
// console.log(invertCase('Hello, World!')) // =>  'hELLO, wORLD!'
// console.log(invertCase('JavaScript is Fun')) // => 'jAVASCRIPT IS fUN'
// console.log(invertCase('12345')) // => '12345'

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName - The first name to include in the template.
 * @param {string} lastName - The last name to include in the template.
 * @return {string} - The formatted string generated from the template.
 *
 * @example
 *   getStringFromTemplate('John','Doe') => 'Hello, John Doe!'
 *   getStringFromTemplate('Chuck','Norris') => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}
// console.log(getStringFromTemplate('John','Doe')) // => 'Hello, John Doe!'
// console.log(getStringFromTemplate('Chuck','Norris')) // => 'Hello, Chuck Norris!'

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value - The input value.
 * @return {string} - The name extracted from the template.
 *
 * @example
 *   extractNameFromTemplate('Hello, John Doe!') => 'John Doe'
 *   extractNameFromTemplate('Hello, Chuck Norris!') => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  const index = value.indexOf(',') + 2;
  return value.slice(index, -1);
}
// console.log(extractNameFromTemplate('Hello, John Doe!')) // => 'John Doe'
// console.log(extractNameFromTemplate('Hello, Chuck Norris!')) // => 'Chuck Norris'

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str - The input tag.
 * @return {string} - The tag without the first and last angle brackets.
 *
 * @example
 *   unbracketTag('<div>') => 'div'
 *   unbracketTag('<span>') => 'span'
 *   unbracketTag('<a>') => 'a'
 */
function unbracketTag(str) {
  return str.slice(1, -1);
}
// console.log(unbracketTag('<div>')) // => 'div'
// console.log(unbracketTag('<span>')) // => 'span'
// console.log(unbracketTag('<a>')) // => 'a'

/**
 * Extracts e-mails from single string with e-mails list delimited by semicolons
 *
 * @param {string} str - The input string.
 * @return {array} - The list of e-mails extracted from the string.
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  return str.split(';');
}
// console.log(extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'))
// //  *   => [
// //  *      'angus.young@gmail.com',
// //  *      'brian.johnson@hotmail.com',
// //  *      'bon.scott@yahoo.com'
// //  *   ],
// console.log(extractEmails('info@gmail.com')) // => ['info@gmail.com']

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str - The input string.
 * @return {string} - The ROT13 encoded string.
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  let result = '';
  // for (const char of str) {
  //   let shift = 0;
  //   const codeChar = char.codePointAt();
  //   if (codeChar >= 65 && codeChar <= 90) {
  //     shift = 65;
  //   }
  //   if (codeChar >= 97 && codeChar <= 122) {
  //     shift = 97;
  //   }
  //   // (codeChar - shift + 13) % 26 + shift
  //   // console.log(shift, Boolean(shift))
  //   if (shift) {
  //     result += String.fromCharCode(((codeChar - shift + 13) % 26) + shift);
  //   } else {
  //     result += char;
  //   }
  // }
  for (let i = 0; i < str.length; i += 1) {
    let shift = 0;
    const codeChar = str[i].codePointAt();
    if (codeChar >= 65 && codeChar <= 90) {
      shift = 65;
    }
    if (codeChar >= 97 && codeChar <= 122) {
      shift = 97;
    }
    // (codeChar - shift + 13) % 26 + shift
    // console.log(shift, Boolean(shift))
    if (shift) {
      result += String.fromCharCode(((codeChar - shift + 13) % 26) + shift);
    } else {
      result += str[i];
    }
  }
  return result;
  // for (let i = 65; i < 122; i++) {
  //   console.log( i, String.fromCharCode(i))
  // }

  // console.log("a".codePointAt(), "z".codePointAt());
  // console.log("A".codePointAt(), "Z".codePointAt());
}
// console.log(encodeToRot13('Hello')) // => 'uryyb'
// console.log(encodeToRot13('Why did the chicken cross the road?')) // => 'Jul qvq gur puvpxra pebff gur ebnq?'
// console.log(encodeToRot13('Gb trg gb gur bgure fvqr!')) // => 'To get to the other side!'
// console.log(encodeToRot13('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'))
//  *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'

/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value - The card value.
 * @return {number} - The zero-based index.
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  const range = 'A234567891JQK';
  const suit = '♣♦♥♠';
  const indexRange = range.indexOf(value.charAt(0));
  const indexSuit = suit.indexOf(value.slice(-1));
  return indexRange + 13 * indexSuit;
}
// console.log(getCardId('A♣')) // => 0
// console.log(getCardId('2♣')) // => 1
// console.log(getCardId('3♣')) // => 2
// console.log(getCardId('Q♠')) // => 50
// console.log(getCardId('K♠')) // => 51

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
