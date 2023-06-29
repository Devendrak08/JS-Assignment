function Vowel(str) {
  //initialize vowel
  const vowels = ["a", "e", "i", "o", "u"]
  // for case-insensitive matching
  const newStr = str.toLowerCase()
  //create empty array to store vowels
  const newArr = []
  for (let i = 0; i < newStr.length; i++) {
    const char = newStr[i]
    //check if string includes vowels
    if (vowels.includes(char)) {
      //add vowel to new array
      newArr.push(char)
    }
  }
  return newArr
}

console.log(Vowel("devendra"))

//Output: [ 'e', 'e', 'a' ]
