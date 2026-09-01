import {Composition} from "remotion";
import OverallScore from "./OverallScore";
import {SearchShift, type SearchShiftProps} from "./SearchShift";

const defaultProps: SearchShiftProps = {
  locale: "de",
};

export const PaternogaCompositions: React.FC = () => {
  return (
    <>
      <Composition
        id="PaternogaSearchShiftDe"
        component={SearchShift}
        durationInFrames={360}
        fps={30}
        width={1440}
        height={1080}
        defaultProps={defaultProps}
      />
      <Composition
        id="PaternogaSearchShiftEn"
        component={SearchShift}
        durationInFrames={360}
        fps={30}
        width={1440}
        height={1080}
        defaultProps={{locale: "en"}}
      />
      <Composition
        id="PaternogaOverallScore"
        component={OverallScore}
        durationInFrames={330}
        fps={30}
        width={1440}
        height={960}
      />
    </>
  );
};
