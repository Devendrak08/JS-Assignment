function LeapYear(year: number): boolean {
  //comparing year is leap year or not
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) return true
  return false
}
console.log(LeapYear(2016))

//Output: [true]
