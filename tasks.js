//task 1
function getClimbingTime() {
  const topHeight = 100
  const dayDistance = 50
  const nightDecline = 30
  let distance = 0
  let count = 0
  while (distance < topHeight) {
    count++
    distance += dayDistance
    if (distance >= topHeight) return count
    distance -= nightDecline
  }
}
//answer 4

//task 2
function getHandShakesQuantity() {
  const peopleQuantity = 10
  let res = 0
  for (let i = 2; i <= peopleQuantity; i++) {
    res += i - 1
  }
  return res
}
//answer 45

//task 3
function getUniqueString(str) {
  const arr = str.split(',')
  const uniqueArr = Array.from(new Set(arr))
  return uniqueArr.join(',')
}