import {Composition} from "remotion";
import {SearchShift, type SearchShiftProps} from "./SearchShift";

const defaultProps: SearchShiftProps = {
  locale: "de",
};

export const ElbsandCompositions: React.FC = () => {
  return (
    <>
      <Composition
        id="ElbsandSearchShiftDe"
        component={SearchShift}
        durationInFrames={360}
        fps={30}
        width={1440}
        height={1080}
        defaultProps={defaultProps}
      />
      <Composition
        id="ElbsandSearchShiftEn"
        component={SearchShift}
        durationInFrames={360}
        fps={30}
        width={1440}
        height={1080}
        defaultProps={{locale: "en"}}
      />
    </>
  );
};
