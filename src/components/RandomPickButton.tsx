import { randomItem } from "../utils/array";
import GraduationIcon from "./GraduationIcon";

export default function RandomPickButton({
  topicUrls,
}: {
  topicUrls: string[];
}) {
  const item = randomItem(topicUrls);

  return (
    <a
      href={item}
      class="js-random rounded-full px-2 py-2 bg-gradient-to-r text-white transition duration-200 from-indigo-500 to-pink-500 hover:hue-rotate-30 active:-hue-rotate-30 active:scale-90 w-9 h-9 block">
      <GraduationIcon class=" block max-w-full max-h-full aspect-square fill-current" />
    </a>
  );
}
