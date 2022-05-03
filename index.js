function isPalindrome(word) {
  if (word != undefined) {
    let revWord = word.split('').reverse().join('')
    if (revWord === word){
      return true
    }
    else{
      return false
    }
  }
}

/* 
  func takes a word as arg
    reverse the word
    if word the word == word in reverse
      return true
    else return false
*/

/*
  First checks if (word) is not empty
  It reverses the (word)
  Checks if reverse(word) === (word)
  returns true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
