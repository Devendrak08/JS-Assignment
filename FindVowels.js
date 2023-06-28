function Vowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
 
  const  newStr = str.toLowerCase();
  
  const newArr = [];
 
  for (let i = 0; i < newStr.length; i++) {
    const char = newStr[i];
    
    if (vowels.includes(char)) {
      newArr.push(char);
    }
  }
  return newArr;
}

console.log(Vowel('devendra'));