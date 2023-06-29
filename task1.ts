function Vowel(str: string): string[] {
  // initialize vowels
  const vowels: any = ["a", "e", "i", "o", "u"];
  // for case-insensitive matching
  const newStr: string = str.toLowerCase();
  // create empty array to store vowels
  const newArr: string[] = [];
  for (let i = 0; i < newStr.length; i++) {
    const char: string = newStr[i];
    // check if string includes vowels
    if (vowels.includes(char)) {
      // add vowel to new array
      newArr.push(char);
    }
  }
  return newArr;
}

console.log(Vowel("devendra"));

// Output: [ 'e', 'e', 'a' ]
