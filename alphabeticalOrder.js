function alphabeticalOrder(str) {
  //Sorting given string to alphabetical order
  return str.split("").sort().join("")
}
console.log(alphabeticalOrder("devendra"))

//output: "addeenrv"
