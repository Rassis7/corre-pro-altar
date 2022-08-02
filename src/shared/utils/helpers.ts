export function getGenerateRandomValue(min: number, max: number) {
  const difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  return rand + min;
}
