/**
 * @param {string} phrase 
 * @return {boolean}
 */

function isPalindrome(phrase){
    phrase = phrase.toLowerCase();
    let charArr = phrase.split('');
    let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    // Create hash map with valid characters
    let validMap = [];
    validCharacters.forEach(char => {
        validMap[char] = 1;
    });

    // Push only valid characters of phrase to array
    let vCharArr = [];
    charArr.forEach(char => {
        if(validMap[char]){
            vCharArr.push(char);
        }
    });


    //Check character infront and at back until until front and back meet
    let endPos = vCharArr.length - 1;
    for(let i = 0; i < endPos; i++){
        if(vCharArr[i] != vCharArr[endPos]){
            return false;
        }
        --endPos;
    }

    return true;
}

let str = "Madam, I'm Adam";
let str2 = 'racecar'
let str3 = "Wrong"
console.log(isPalindrome(str));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));