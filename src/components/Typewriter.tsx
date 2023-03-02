import { randomItem } from "../utils/array";

export default function Typewriter({ topics }: { topics: string[] }) {
  return <p>{randomItem(topics)}?</p>;
}
