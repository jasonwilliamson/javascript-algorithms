/**
 * @param {string} phrase 
 * @return {boolean}
 */
function isPalindrome(phrase){
    phrase = phrase.toLowerCase();
    let charArray = phrase.split('');
    
    //Filter out everything but letters
    let validCharacters = getValidCharacters(charArray);

    //Check character infront and at back until until front and back meet
    let endPos = validCharacters.length - 1;
    for(let i = 0; i < endPos; i++){
        if (validCharacters[i] != validCharacters[endPos]){
            return false;
        }
        --endPos;
    }

    return true;
}

/**
 * Accepts string and returns all valid characters within the string
 * @param {array} charArray 
 * @return {array} 
 */
function getValidCharacters(charArray) {
    let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    // Create hash map of valid characters
    let validMap = [];
    validCharacters.forEach(char => {
        validMap[char] = 1;
    });

    // Push only valid characters of charArray to validPhrase
    let validPhrase = [];
    charArray.forEach(char => {
        if (validMap[char]) {
            validPhrase.push(char);
        }
    });

    return validPhrase;
}

/**
 * 
 * @param {string} phrase 
 */
function isPalindromRecursive(phrase){
    phrase = phrase.toLowerCase();
    let charArray = phrase.split('');

    //Filter out everything but letters
    let validCharacters = getValidCharacters(charArray);

    let front = 0;
    let back = validCharacters.length -1;
    return isPalindromRecursiveHelper(validCharacters, front, back);
}

/**
 * 
 * @param {array} charactersArray 
 * @param {number} front 
 * @param {number} back 
 */
function isPalindromRecursiveHelper(charactersArray, front, back) {

    //Base case
    if (back <= front) {
        return true;
    } //Recursive cases
    else if (charactersArray[front] === charactersArray[back]) {
        return isPalindromRecursiveHelper(charactersArray, ++front, --back);
    } else {
        return false;
    }
}



let str = "Madam, I'm Adam";
let str2 = 'racecar'
let str3 = "Wrong"
console.log(isPalindrome(str));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));

console.log(isPalindromRecursive(str));
console.log(isPalindromRecursive(str2));
console.log(isPalindromRecursive(str3));