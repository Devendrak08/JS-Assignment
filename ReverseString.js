function reverseStr(str) {
  //to store new reverse string create empty string
  let newStr = ""
  //iterate string to last element to reverse string
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr
}
const result = reverseStr("dev")
console.log(result)

//Output: ved
