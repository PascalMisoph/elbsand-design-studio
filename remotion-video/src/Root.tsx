import "./index.css";
import {loadFont} from "@remotion/fonts";
import {staticFile} from "remotion";
import {ElbsandCompositions} from "./Composition";

void loadFont({
  family: "Elbsand Sans",
  url: staticFile("fonts/ArialNova.ttf"),
  weight: "400",
});
void loadFont({
  family: "Elbsand Editorial",
  url: staticFile("fonts/Baskerville.ttf"),
  weight: "400",
});

export const RemotionRoot: React.FC = () => <ElbsandCompositions />;
