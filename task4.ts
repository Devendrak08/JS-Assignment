function capitalize(str: string): string {
  //to Capitalize first letter of string using this method
  const newStr: string = str.charAt(0).toUpperCase() + str.slice(1)

  return newStr
}
console.log(capitalize("deved"))
