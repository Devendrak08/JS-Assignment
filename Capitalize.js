function capitalize(str) {
  //to Capitalize first letter of string using this method
  const newStr = str.charAt(0).toUpperCase() + str.slice(1)

  return newStr
}
const Str = prompt("Enter a string: ")
const res = capitalize(Str)

console.log(res)

//input: "devendra"
//output: "Devendra"