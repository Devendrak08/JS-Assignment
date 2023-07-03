function reverseStr(str: string) {
  let newStr: string = ""

  //iterate string to last element to reverse string
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr
}
const result = reverseStr("dev")
console.log(result)

//Output: ved
