// 'end' will not be returned, the returned value will always be less than 'end'
export function getRandomNumberByRange(start: number = 0, end: number): number {
  const difference = end - start
  let rand = Math.random()
  rand = Math.floor(rand * difference)
  rand = rand + start

  return rand
}
