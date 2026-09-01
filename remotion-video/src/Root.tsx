import "./index.css";
import {loadFont} from "@remotion/fonts";
import {staticFile} from "remotion";
import {PaternogaCompositions} from "./Composition";

void loadFont({
  family: "Paternoga Sans",
  url: staticFile("fonts/ArialNova.ttf"),
  weight: "400",
});
void loadFont({
  family: "Paternoga Editorial",
  url: staticFile("fonts/Baskerville.ttf"),
  weight: "400",
});

export const RemotionRoot: React.FC = () => <PaternogaCompositions />;
