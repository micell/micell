export default function randomUniqueNumbers(start: number, end: number, length: number): number[] {
  if (end - start + 1 < length) {
    throw new RangeError('the result of end - start + 1 should be greater than length')
  }
  const obj: { [key: string]: boolean } = Object.create(null)
  const nums: number[] = []
  let count = 0
  let num: number
  while (count < length) {
    num = Math.floor(Math.random() * (end - start + 1)) + start
    if (num in obj) continue
    nums.push(num)
    count++
    obj[num] = true
  }
  return nums
}
