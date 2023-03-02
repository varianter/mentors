import { createSignal } from "solid-js";
import { randomItem } from "../utils/array";
import { randomNumber } from "../utils/number";

const BASE_SPEED = 30;
const ADD_SPEED_FACTOR = 3;
const STAN_STILL_FACTOR = 40;

export default function Typewriter({ topics }: { topics: string[] }) {
  const [topic, setTopic] = createSignal(randomItem(topics));

  function updateText(reducing: boolean, fullWord: string) {
    const speed = BASE_SPEED + randomAddedTime();
    if (topic().length === 0) {
      const newWord = randomExceptPrevious(topics, fullWord);
      setTopic(newWord.at(0) ?? "");
      setTimeout(() => updateText(false, newWord), speed * ADD_SPEED_FACTOR);
    } else if (topic() !== fullWord && !reducing) {
      setTopic(topic() + fullWord?.at(topic().length));
      setTimeout(() => updateText(false, fullWord), speed * ADD_SPEED_FACTOR);
    } else if (topic() == fullWord && !reducing) {
      setTimeout(() => updateText(true, fullWord), speed * STAN_STILL_FACTOR);
    } else {
      setTopic(topic().substring(0, topic().length - 1));
      setTimeout(() => updateText(true, fullWord), speed);
    }
  }

  updateText(true, topic());

  return <p>{topic()}?</p>;
}

function randomAddedTime() {
  return randomNumber(30);
}

function randomExceptPrevious<T>(arr: T[], previous: string): T {
  const rand = randomItem(arr);
  if (rand === previous) return randomExceptPrevious(arr, previous);
  return rand;
}
