import { randomNumber } from "./number";

export function randomItem<T>(arr: T[]) {
  return arr[randomNumber(arr.length - 1)];
}
