function PrintOddNum(arr) {
    const oddNum = arr.filter((num) => num%2 ===1)
    return oddNum;
}

const res =  PrintOddNum([3, 6, 1, 66, 45, 22])
console.log(res)