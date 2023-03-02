export function randomItem<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * (arr.length - 1))];
}
