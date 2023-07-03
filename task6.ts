function PrintOddNum(arr: number[]): number[] {
  //using filter method to print odd places
  const oddNum: number[] = arr.filter((num) => num % 2 === 1)
  return oddNum
}

const res: number[] = PrintOddNum([3, 6, 1, 66, 45, 22])
console.log(res)

//Output: [ 3, 1, 45 ]
