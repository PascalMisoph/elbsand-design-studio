import {
  AbsoluteFill,
  continueRender,
  delayRender,
  Easing,
  interpolate,
  interpolateColors,
  staticFile,
  useCurrentFrame,
} from "remotion";
import {loadFont} from "@remotion/fonts";

const interFontHandle = delayRender("Load Inter font");

void Promise.all([
  loadFont({
    family: "Inter",
    url: staticFile("fonts/Inter-Variable.woff2"),
    weight: "400",
    display: "block",
  }),
  loadFont({
    family: "Inter",
    url: staticFile("fonts/Inter-Variable.woff2"),
    weight: "700",
    display: "block",
  }),
]).then(() => continueRender(interFontHandle)).catch(() => continueRender(interFontHandle));

const WIDTH = 1440;
const HEIGHT = 960;
const GAUGE_CENTER_X = 720;
const GAUGE_CENTER_Y = 650;
const GAUGE_RADIUS = 500;
const START_SCORE = 72;
const TARGET_START = 90;
const TARGET_END = 95;

const colors = {
  background: "#050606",
  white: "#f1f1f3",
  muted: "#8a8b90",
  badge: "#3e3f42",
  red: "#e24a38",
  orange: "#ed8b3d",
  yellow: "#f0cb66",
  green: "#18b875",
};

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

const calmEase = Easing.bezier(0.16, 1, 0.3, 1);
const scoreEase = Easing.inOut(Easing.cubic);

const scoreAtFrame = (frame: number) => {
  if (frame <= 30) return START_SCORE;
  if (frame >= 270) return TARGET_END;

  return interpolate(frame, [30, 270], [START_SCORE, TARGET_END], {
    ...clamp,
    easing: scoreEase,
  });
};

const scoreAngle = (score: number) => Math.PI - (score / 100) * Math.PI;

const pointOnGauge = (score: number) => {
  const angle = scoreAngle(score);
  return {
    x: GAUGE_CENTER_X + GAUGE_RADIUS * Math.cos(angle),
    y: GAUGE_CENTER_Y - GAUGE_RADIUS * Math.sin(angle),
  };
};

const gaugePath = (fromScore: number, toScore: number) => {
  const start = pointOnGauge(fromScore);
  const end = pointOnGauge(toScore);
  return `M ${start.x} ${start.y} A ${GAUGE_RADIUS} ${GAUGE_RADIUS} 0 0 1 ${end.x} ${end.y}`;
};

const targetPath = gaugePath(TARGET_START, TARGET_END);

const OverallScore: React.FC = () => {
  const frame = useCurrentFrame();
  const scoreValue = scoreAtFrame(frame);
  const score = Math.round(scoreValue);
  const marker = pointOnGauge(scoreValue);
  const scoreColor = interpolateColors(
    scoreValue,
    [72, 78, 84, 89, 90, 95],
    [colors.red, colors.orange, colors.yellow, colors.white, colors.green, colors.green],
  );
  const markerScale = interpolate(frame, [0, 12, 30], [0.92, 1.02, 1], { ...clamp, easing: calmEase });
  const targetProgress = Math.max(0, Math.min(1, (scoreValue - TARGET_START) / (TARGET_END - TARGET_START)));
  const markerAngle = scoreValue * 1.8 - 180;

  return (
    <AbsoluteFill
      style={{
        width: WIDTH,
        height: HEIGHT,
        overflow: "hidden",
        backgroundColor: colors.background,
        color: colors.white,
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div style={{position: "absolute", top: 84, left: 104, color: colors.white, fontSize: 40, lineHeight: 1.1, fontWeight: 400}}>
        Overall Score
      </div>

      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} width={WIDTH} height={HEIGHT} style={{position: "absolute", inset: 0, display: "block"}}>
        <path d={gaugePath(0, 100)} fill="none" stroke={colors.white} strokeWidth={42} strokeLinecap="round" opacity={0.98} />

        {scoreValue < TARGET_START ? (
          <path d={gaugePath(0, scoreValue)} fill="none" stroke={scoreColor} strokeWidth={42} strokeLinecap="round" />
        ) : (
          <>
            <path d={gaugePath(0, TARGET_START)} fill="none" stroke={colors.white} strokeWidth={42} strokeLinecap="round" />
            {scoreValue > TARGET_START && (
              <path
                d={targetPath}
                fill="none"
                stroke={colors.green}
                strokeWidth={42}
                strokeLinecap="round"
                opacity={0.98}
                pathLength={1}
                strokeDasharray={`${targetProgress} 1`}
              />
            )}
          </>
        )}

        <g transform={`translate(${marker.x} ${marker.y}) rotate(${markerAngle})`}>
          <g style={{transformOrigin: "0 0", scale: markerScale}}>
            <rect
              x={-43}
              y={-18}
              width={86}
              height={36}
              rx={18}
              fill={scoreColor}
              stroke={colors.white}
              strokeWidth={8}
            />
          </g>
        </g>

        <line x1="80" x2="1360" y1="850" y2="850" stroke="#333438" strokeWidth="2" />
      </svg>

      <div
        style={{
          position: "absolute",
          top: 370,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: scoreColor,
        }}
      >
        <div style={{fontSize: 144, lineHeight: 0.96, fontWeight: 400, letterSpacing: "-0.06em"}}>{score}%</div>
        <div style={{display: "flex", alignItems: "center", gap: 14, marginTop: 22, color: colors.muted, fontSize: 34, lineHeight: 1}}>
          <span>Target Zone</span>
          <span style={{borderRadius: 12, backgroundColor: colors.badge, padding: "10px 14px 9px", color: colors.white, fontSize: 32, fontWeight: 700}}>90-95</span>
        </div>
      </div>

      <div style={{position: "absolute", top: 700, left: 0, right: 0, display: "flex", justifyContent: "center", alignItems: "center", gap: 26, color: colors.muted, fontSize: 34}}>
        <span>Average</span>
        <span style={{borderRadius: 12, backgroundColor: colors.badge, padding: "9px 12px 8px", color: colors.white, fontSize: 32, fontWeight: 700}}>79</span>
        <span>Top Score</span>
        <span style={{borderRadius: 12, backgroundColor: colors.badge, padding: "9px 12px 8px", color: colors.white, fontSize: 32, fontWeight: 700}}>98</span>
      </div>

    </AbsoluteFill>
  );
};

export default OverallScore;
