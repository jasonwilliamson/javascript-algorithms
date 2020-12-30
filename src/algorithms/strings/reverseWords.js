/**
 * Accepts a single word string
 * Returns string where characters are in reverse order
 * @param {string} string
 * @return {string} 
 */
function reverse(string){
    let chars = string.split('');
    let reversed = [];
    for(let i = chars.length -1; i >= 0; i--){
        reversed.push(chars[i]);
    }
    return reversed.join('');
}

/**
 * Accepts string of words 
 * Returns a string where characters of each word is reversed
 * Note: Words in provided string remain in order, but the characters are reversed
 * @param {string} string 
 * @return {string}
 */
function reverseWords(string){
    let words = string.split(' ');
    let reversedWords = [];
    words.forEach(word => {
        reversedWords.push(reverse(word));
    });
    return reversedWords.join(' ');
}

console.log(reverseWords('this is a string of words'));
console.log(reverseWords('Coding Javascript'));