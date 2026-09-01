import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export type SearchShiftProps = {
  locale: "de" | "en";
};

const palette = {
  paper: "#f4f0e8",
  paperSoft: "#fbf8f2",
  ink: "#1a1a1a",
  muted: "#68645d",
  line: "#d8d1c6",
  blue: "#4285f4",
  purple: "#8b5cf6",
  red: "#d74332",
  green: "#36d67e",
  greenDark: "#137a49",
  charcoal: "#20211f",
  charcoalSoft: "#2a2c29",
  cream: "#fffdf8",
};

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

const easeOut = Easing.bezier(0.16, 1, 0.3, 1);

const labels = {
  de: {
    dashboard: "Performance der letzten 3 Monate",
    clicks: "Klicks gesamt",
    impressions: "Impressionen gesamt",
    update: "Google Core Update",
    splitTitle: "Dieselbe Suche. Ein neues Ergebnis.",
    answer: "NordForm Packaging GmbH ist ein etablierter Anbieter nachhaltiger Industrieverpackungen in Deutschland. Das Unternehmen kombiniert recyclingfähige Materialien mit belastbaren Lieferketten und dokumentierten Umweltstandards.",
    source: "NordForm · Nachhaltige Industrieverpackungen",
    visibility: "Modell-Sichtbarkeit",
    citations: "Quellenanteil",
    mentions: "Markennennungen",
    optimized: "GEO-Sichtbarkeit: optimiert",
  },
  en: {
    dashboard: "Performance over the last 3 months",
    clicks: "Total clicks",
    impressions: "Total impressions",
    update: "Google Core Update",
    splitTitle: "The same search. A new result.",
    answer: "NordForm Packaging GmbH is an established supplier of sustainable industrial packaging in Germany, combining recyclable materials with resilient supply chains and documented environmental standards.",
    source: "NordForm · Sustainable industrial packaging",
    visibility: "Model visibility",
    citations: "Citation share",
    mentions: "Brand mentions",
    optimized: "GEO visibility: optimized",
  },
} as const;

const BrowserShell: React.FC<{
  children: React.ReactNode;
  dark?: boolean;
  title?: string;
  style?: React.CSSProperties;
}> = ({children, dark = false, title = "search.google.com", style}) => (
  <div
    style={{
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      border: `1px solid ${dark ? "#444741" : palette.line}`,
      borderRadius: 24,
      backgroundColor: dark ? palette.charcoal : palette.cream,
      boxShadow: "0 28px 80px rgba(37, 32, 25, 0.14)",
      ...style,
    }}
  >
    <div
      style={{
        height: 64,
        display: "flex",
        alignItems: "center",
        gap: 18,
        borderBottom: `1px solid ${dark ? "#3b3e39" : palette.line}`,
        padding: "0 26px",
        backgroundColor: dark ? "#252724" : "#f3efe8",
      }}
    >
      <div style={{display: "flex", gap: 9}}>
        {["#ee6a5f", "#e5b94c", "#62bd6b"].map((color) => (
          <span key={color} style={{width: 12, height: 12, borderRadius: "50%", backgroundColor: color}} />
        ))}
      </div>
      <div
        style={{
          minWidth: 0,
          flex: 1,
          overflow: "hidden",
          border: `1px solid ${dark ? "#474a45" : "#ddd6cb"}`,
          borderRadius: 9,
          backgroundColor: dark ? "#30322f" : palette.cream,
          padding: "9px 16px",
          color: dark ? "#b8bbb4" : palette.muted,
          fontSize: 17,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
      >
        {title}
      </div>
    </div>
    <div style={{height: "calc(100% - 64px)"}}>{children}</div>
  </div>
);

const GridLines: React.FC<{dark?: boolean}> = ({dark = false}) => (
  <svg viewBox="0 0 1000 440" preserveAspectRatio="none" style={{position: "absolute", inset: 0, width: "100%", height: "100%"}}>
    {Array.from({length: 6}).map((_, index) => (
      <line key={`h-${index}`} x1="0" x2="1000" y1={index * 88} y2={index * 88} stroke={dark ? "#3a3d38" : "#e3ddd3"} strokeWidth="1" />
    ))}
    {Array.from({length: 11}).map((_, index) => (
      <line key={`v-${index}`} y1="0" y2="440" x1={index * 100} x2={index * 100} stroke={dark ? "#343732" : "#ece7df"} strokeWidth="1" />
    ))}
  </svg>
);

const GscScene: React.FC<{locale: "de" | "en"; frame: number; opacity: number}> = ({locale, frame, opacity}) => {
  const text = labels[locale];
  const stableDraw = interpolate(frame, [0, 42], [0.02, 1], {...clamp, easing: easeOut});
  const crashDraw = interpolate(frame, [45, 88], [0, 1], {...clamp, easing: Easing.inOut(Easing.cubic)});
  const updateIn = interpolate(frame, [42, 48], [0, 1], clamp);
  const clickValue = Math.round(interpolate(frame, [45, 92], [4820, 2555], clamp));
  const badgePulse = interpolate(frame, [50, 57, 66, 76], [0.25, 1, 0.55, 1], clamp);

  return (
    <AbsoluteFill style={{backgroundColor: palette.paper, opacity, padding: 58, fontFamily: "Paternoga Sans, Arial, sans-serif"}}>
      <BrowserShell title="search.google.com/search-console/performance">
        <div style={{display: "grid", gridTemplateColumns: "210px minmax(0, 1fr)", height: "100%"}}>
          <aside style={{borderRight: `1px solid ${palette.line}`, backgroundColor: "#f5f2ec", padding: "34px 24px"}}>
            <div style={{display: "flex", alignItems: "center", gap: 12, marginBottom: 48, fontSize: 23, fontWeight: 700}}>
              <span style={{display: "grid", width: 36, height: 36, placeItems: "center", borderRadius: 9, backgroundColor: palette.blue, color: "white"}}>G</span>
              Search Console
            </div>
            {["Overview", "Performance", "URL inspection", "Indexing"].map((item, index) => (
              <div
                key={item}
                style={{
                  marginBottom: 12,
                  borderRadius: 9,
                  backgroundColor: index === 1 ? "#e3ecff" : "transparent",
                  padding: "13px 14px",
                  color: index === 1 ? "#225fbd" : palette.muted,
                  fontSize: 19,
                  fontWeight: index === 1 ? 700 : 400,
                }}
              >
                {item}
              </div>
            ))}
          </aside>
          <main style={{padding: "34px 42px 38px"}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24}}>
              <div>
                <div style={{fontSize: 31, fontWeight: 700, marginBottom: 7}}>Performance</div>
                <div style={{color: palette.muted, fontSize: 18}}>{text.dashboard}</div>
              </div>
              <div style={{border: `1px solid ${palette.line}`, borderRadius: 9, padding: "11px 16px", color: palette.muted, fontSize: 17}}>Date: Last 3 months</div>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 22}}>
              <div style={{borderRadius: 13, backgroundColor: palette.blue, padding: "20px 24px", color: "white"}}>
                <div style={{fontSize: 18, opacity: 0.9}}>{text.clicks}</div>
                <div style={{display: "flex", alignItems: "baseline", gap: 16, marginTop: 7}}>
                  <strong style={{fontSize: 48, lineHeight: 1}}>{clickValue.toLocaleString(locale === "de" ? "de-DE" : "en-US")}</strong>
                  <span style={{borderRadius: 999, backgroundColor: palette.red, padding: "7px 11px", fontSize: 18, fontWeight: 800, opacity: frame < 45 ? 0 : badgePulse}}>-47% Clicks</span>
                </div>
              </div>
              <div style={{borderRadius: 13, backgroundColor: palette.purple, padding: "20px 24px", color: "white"}}>
                <div style={{fontSize: 18, opacity: 0.9}}>{text.impressions}</div>
                <strong style={{display: "block", marginTop: 7, fontSize: 48, lineHeight: 1}}>184,300</strong>
              </div>
            </div>
            <div style={{position: "relative", height: 470, overflow: "hidden", border: `1px solid ${palette.line}`, borderRadius: 13, backgroundColor: "white", padding: 16}}>
              <GridLines />
              <svg viewBox="0 0 1000 440" preserveAspectRatio="none" style={{position: "absolute", inset: 16, width: "calc(100% - 32px)", height: "calc(100% - 32px)", overflow: "visible"}}>
                <path
                  d="M0 245 C65 225 110 255 170 226 S285 248 350 220 S470 252 540 222 S650 239 720 216"
                  fill="none"
                  stroke={palette.blue}
                  strokeWidth="6"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset={1 - stableDraw}
                />
                <path
                  d="M720 216 L748 255 L770 330 L808 350 L846 337 L878 372 L918 360 L958 382 L1000 368"
                  fill="none"
                  stroke={palette.blue}
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset={1 - crashDraw}
                />
                <path
                  d="M0 100 C80 89 130 110 200 94 S330 105 405 88 S540 100 620 87 S760 99 840 84 S940 94 1000 80"
                  fill="none"
                  stroke={palette.purple}
                  strokeWidth="6"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset={1 - stableDraw}
                />
                <line x1="720" x2="720" y1="20" y2="420" stroke={palette.red} strokeWidth="3" strokeDasharray="10 9" opacity={updateIn} />
              </svg>
              <div style={{position: "absolute", left: "70%", top: 26, borderRadius: 7, backgroundColor: palette.red, padding: "8px 12px", color: "white", fontSize: 16, fontWeight: 800, opacity: updateIn, translate: `0 ${interpolate(updateIn, [0, 1], ["-8px", "0px"])} `}}>
                {text.update}
              </div>
            </div>
          </main>
        </div>
      </BrowserShell>
    </AbsoluteFill>
  );
};

const SearchBar: React.FC<{query: string; dark?: boolean}> = ({query, dark = false}) => (
  <div style={{height: 62, display: "flex", alignItems: "center", gap: 14, border: `1px solid ${dark ? "#4a4d47" : palette.line}`, borderRadius: 31, backgroundColor: dark ? "#30322f" : "white", padding: "0 22px", color: dark ? "#f1f2ee" : palette.ink, fontSize: 19}}>
    <span style={{fontSize: 24, color: dark ? "#a9ada5" : palette.muted}}>⌕</span>
    <span style={{overflow: "hidden", whiteSpace: "nowrap"}}>{query}</span>
    <span style={{opacity: 0.65}}>|</span>
  </div>
);

const SearchSplitScene: React.FC<{locale: "de" | "en"; frame: number; opacity: number}> = ({locale, frame, opacity}) => {
  const text = labels[locale];
  const local = frame - 120;
  const query = "Sustainable Industry Packaging Supplier Germany";
  const visibleQuery = query.slice(0, Math.floor(interpolate(local, [3, 31], [0, query.length], clamp)));
  const contentScroll = interpolate(local, [40, 112], [0, -285], {...clamp, easing: Easing.inOut(Easing.cubic)});
  const citationsIn = interpolate(local, [36, 55], [0, 1], {...clamp, easing: easeOut});
  const answerChars = Math.floor(interpolate(local, [46, 112], [0, text.answer.length], clamp));
  const visibleAnswer = text.answer.slice(0, answerChars);
  const brandStart = text.answer.indexOf("NordForm Packaging GmbH");
  const brandVisible = answerChars >= brandStart + "NordForm Packaging GmbH".length;
  const connector = interpolate(local, [68, 88], [0, 1], {...clamp, easing: easeOut});
  const wipe = interpolate(local, [0, 10], [0, 100], {...clamp, easing: easeOut});

  return (
    <AbsoluteFill style={{backgroundColor: palette.paper, opacity, clipPath: `inset(0 ${100 - wipe}% 0 0)`, padding: 58, fontFamily: "Paternoga Sans, Arial, sans-serif"}}>
      <div style={{position: "absolute", top: 20, left: 0, right: 0, textAlign: "center", color: palette.muted, fontSize: 18, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase"}}>{text.splitTitle}</div>
      <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, width: "100%", height: "100%"}}>
        <BrowserShell title="google.com/search">
          <div style={{padding: "28px 28px 0"}}>
            <div style={{display: "flex", alignItems: "center", gap: 16, marginBottom: 24}}>
              <div style={{fontSize: 34, fontWeight: 800, letterSpacing: "-0.04em"}}><span style={{color: palette.blue}}>G</span>oogle</div>
              <div style={{flex: 1}}><SearchBar query={visibleQuery} /></div>
            </div>
            <div style={{height: 730, overflow: "hidden", borderTop: `1px solid ${palette.line}`}}>
              <div style={{translate: `0 ${contentScroll}px`, padding: "26px 10px 60px"}}>
                <div style={{border: `1px solid ${palette.line}`, borderRadius: 12, padding: 20, marginBottom: 22, backgroundColor: "#fffaf0"}}>
                  <div style={{display: "inline-block", marginBottom: 10, borderRadius: 4, backgroundColor: "#f1dfbd", padding: "4px 7px", fontSize: 13, fontWeight: 800}}>Sponsored</div>
                  <div style={{color: "#1a0dab", fontSize: 25, lineHeight: 1.2}}>Industrial packaging solutions for global supply chains</div>
                  <div style={{marginTop: 8, color: "#188038", fontSize: 15}}>packaging-network.example</div>
                </div>
                <div style={{border: `1px solid ${palette.line}`, borderRadius: 12, padding: 18, marginBottom: 25}}>
                  <div style={{fontSize: 23, fontWeight: 700, marginBottom: 14}}>Businesses near Germany</div>
                  <div style={{height: 128, borderRadius: 8, background: "linear-gradient(135deg, #d8e3d1, #e8dfcf)", marginBottom: 14, position: "relative", overflow: "hidden"}}>
                    {[18, 46, 72].map((left) => <span key={left} style={{position: "absolute", left: `${left}%`, top: `${25 + (left % 20)}%`, width: 12, height: 12, borderRadius: "50% 50% 50% 0", rotate: "-45deg", backgroundColor: palette.red}} />)}
                  </div>
                  {["EcoPack Europe", "GreenBox Systems", "Circular Cargo"].map((item) => <div key={item} style={{padding: "10px 0", borderTop: `1px solid ${palette.line}`, fontSize: 18}}>{item}</div>)}
                </div>
                {["Sustainable packaging manufacturers in Germany", "Industrial packaging suppliers · Market overview", "Recyclable transport packaging solutions"].map((headline, index) => (
                  <div key={headline} style={{marginBottom: 30}}>
                    <div style={{color: "#1a0dab", fontSize: 24, lineHeight: 1.25}}>{headline}</div>
                    <div style={{margin: "6px 0", color: "#188038", fontSize: 15}}>industry-source-{index + 1}.example</div>
                    <div style={{color: palette.muted, fontSize: 17, lineHeight: 1.45}}>Compare suppliers, material standards and documented environmental performance across industrial packaging categories.</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </BrowserShell>

        <BrowserShell dark title="answer.engine/search">
          <div style={{padding: 28, color: "#f4f5f1"}}>
            <SearchBar query={visibleQuery} dark />
            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 24, opacity: citationsIn, translate: `0 ${interpolate(citationsIn, [0, 1], ["14px", "0px"])} `}}>
              {["NordForm", "EcoChain", "EU Materials"].map((source, index) => (
                <div key={source} style={{border: "1px solid #474a45", borderRadius: 10, backgroundColor: palette.charcoalSoft, padding: 14}}>
                  <div style={{display: "flex", alignItems: "center", gap: 8, marginBottom: 8}}>
                    <span style={{display: "grid", width: 24, height: 24, placeItems: "center", borderRadius: 6, backgroundColor: index === 0 ? palette.green : "#555951", color: palette.charcoal, fontSize: 13, fontWeight: 900}}>{index + 1}</span>
                    <span style={{fontSize: 16, fontWeight: 700}}>{source}</span>
                  </div>
                  <div style={{height: 6, width: `${78 - index * 13}%`, borderRadius: 3, backgroundColor: "#5d6159"}} />
                </div>
              ))}
            </div>
            <div style={{position: "relative", marginTop: 34, borderTop: "1px solid #3d403b", paddingTop: 28}}>
              <div style={{marginBottom: 17, color: "#aeb2aa", fontSize: 16, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase"}}>Answer with sources</div>
              <div style={{fontSize: 26, lineHeight: 1.56, letterSpacing: "-0.012em"}}>
                {visibleAnswer.includes("NordForm Packaging GmbH") ? (
                  <>
                    <span
                      style={{
                        position: "relative",
                        display: "inline",
                        background: `linear-gradient(transparent 72%, rgba(54,214,126,${0.72 * connector}) 72%)`,
                        fontWeight: 800,
                      }}
                    >NordForm Packaging GmbH</span>
                    {visibleAnswer.slice("NordForm Packaging GmbH".length)}
                  </>
                ) : visibleAnswer}
                <span style={{opacity: local > 46 && local < 112 && Math.floor(local / 6) % 2 === 0 ? 0.8 : 0}}>|</span>
              </div>
              <svg viewBox="0 0 520 230" style={{position: "absolute", left: 0, top: -126, width: 520, height: 230, overflow: "visible", pointerEvents: "none", opacity: brandVisible ? 1 : 0}}>
                <path d="M74 28 C74 92 145 90 145 182" fill="none" stroke={palette.green} strokeWidth="3" strokeDasharray="1" pathLength="1" strokeDashoffset={1 - connector} />
                <circle cx="74" cy="28" r="5" fill={palette.green} opacity={connector} />
                <circle cx="145" cy="182" r="5" fill={palette.green} opacity={connector} />
              </svg>
              <div style={{marginTop: 30, border: "1px solid #444741", borderRadius: 10, backgroundColor: palette.charcoalSoft, padding: "15px 17px", color: "#c5c8c1", fontSize: 17, opacity: connector}}>
                <span style={{color: palette.green, fontWeight: 800}}>Source 1</span> · {text.source}
              </div>
            </div>
          </div>
        </BrowserShell>
      </div>
    </AbsoluteFill>
  );
};

const MetricCard: React.FC<{label: string; value: string; progress: number}> = ({label, value, progress}) => (
  <div style={{border: "1px solid #41443f", borderRadius: 15, backgroundColor: palette.charcoalSoft, padding: "22px 24px", boxShadow: progress > 0.8 ? "0 0 34px rgba(54,214,126,.1)" : "none"}}>
    <div style={{color: "#a8aca4", fontSize: 18, marginBottom: 12}}>{label}</div>
    <div style={{display: "flex", alignItems: "baseline", gap: 10}}>
      <strong style={{color: progress > 0.6 ? palette.green : "#71766d", fontSize: 42, lineHeight: 1}}>{value}</strong>
      <span style={{color: palette.green, fontSize: 18, opacity: progress}}>↑</span>
    </div>
  </div>
);

const GeoDashboardScene: React.FC<{locale: "de" | "en"; frame: number; opacity: number}> = ({locale, frame, opacity}) => {
  const {fps} = useVideoConfig();
  const text = labels[locale];
  const local = frame - 240;
  const settle = interpolate(local, [0, 15], [0, 1], {...clamp, easing: easeOut});
  const metric1 = interpolate(local, [10, 25], [0, 1], {...clamp, easing: easeOut});
  const metric2 = interpolate(local, [20, 35], [0, 1], {...clamp, easing: easeOut});
  const metric3 = interpolate(local, [30, 45], [0, 1], {...clamp, easing: easeOut});
  const lineSpring = spring({frame: local - 18, fps, config: {damping: 10, mass: 0.5}});
  const guideProgress = interpolate(local, [48, 66], [0, 1], {...clamp, easing: easeOut});
  const success = interpolate(local, [61, 76], [0, 1], {...clamp, easing: easeOut});
  const dim = interpolate(local, [90, 105], [1, 0.85], clamp);
  const sweepX = interpolate(local, [88, 108], [125, -30], clamp);

  return (
    <AbsoluteFill style={{backgroundColor: palette.paper, opacity, padding: 58, fontFamily: "Paternoga Sans, Arial, sans-serif"}}>
      <div style={{position: "relative", width: "100%", height: "100%", opacity: dim, scale: interpolate(settle, [0, 1], [1.08, 1]), filter: `blur(${interpolate(settle, [0, 1], [7, 0])}px)`, borderRadius: 24, overflow: "hidden", backgroundColor: palette.charcoal, boxShadow: "0 30px 90px rgba(31,27,21,.2)"}}>
        <div style={{height: 78, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #3b3e39", padding: "0 34px", color: "white"}}>
          <div style={{fontSize: 23, fontWeight: 800, letterSpacing: "0.12em"}}>PATERNOGA <span style={{color: "#91968d", fontWeight: 400}}>GEO TRACKING</span></div>
          <div style={{display: "flex", alignItems: "center", gap: 10, color: "#b9bdb5", fontSize: 17}}><span style={{width: 9, height: 9, borderRadius: "50%", backgroundColor: palette.green, boxShadow: "0 0 16px rgba(54,214,126,.7)"}} />Live model monitoring</div>
        </div>
        <div style={{padding: "30px 34px"}}>
          <div style={{position: "relative"}}>
          <div style={{position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16}}>
            <MetricCard label={text.citations} value="38%" progress={metric2} />
            <MetricCard label={text.mentions} value="126" progress={metric3} />
            <MetricCard label={text.visibility} value="74%" progress={metric1} />
          </div>
          <div
            style={{
              position: "absolute",
              zIndex: 1,
              right: "16.66%",
              top: 112,
              height: 48,
              borderLeft: `2px dashed ${palette.green}`,
              opacity: guideProgress * 0.82,
              transformOrigin: "bottom",
              scale: `1 ${guideProgress}`,
            }}
          />
          <div style={{position: "relative", height: 655, marginTop: 40, overflow: "hidden", border: "1px solid #41443f", borderRadius: 16, backgroundColor: "#252724", padding: 28}}>
            <div
              style={{
                position: "absolute",
                right: "16.66%",
                top: 0,
                height: 76,
                borderLeft: `2px dashed ${palette.green}`,
                opacity: guideProgress * 0.82,
                transformOrigin: "bottom",
                scale: `1 ${guideProgress}`,
              }}
            />
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20}}>
              <div style={{color: "white", fontSize: 25, fontWeight: 700}}>Share of model voice</div>
              <div style={{display: "flex", gap: 20, color: "#a8aca4", fontSize: 15}}><span><b style={{color: palette.green}}>●</b> NordForm</span><span>● Competitor A</span><span>● Competitor B</span></div>
            </div>
            <div style={{position: "relative", height: 530}}>
              <GridLines dark />
              <svg viewBox="0 0 1000 440" preserveAspectRatio="none" style={{position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible"}}>
                <path d="M0 336 C170 326 310 350 470 330 S770 338 1000 318" fill="none" stroke="#646960" strokeWidth="4" />
                <path d="M0 376 C180 360 330 382 500 362 S770 372 1000 350" fill="none" stroke="#50554e" strokeWidth="4" />
                <path d="M0 410 C120 404 220 388 318 360 C444 324 522 276 618 212 C710 148 782 74 850 0" fill="none" stroke={palette.green} strokeWidth="5" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - Math.min(1, lineSpring)} style={{filter: "drop-shadow(0 0 6px rgba(54,214,126,.38))"}} />
              </svg>
              <div style={{position: "absolute", right: 20, top: 24, border: `1px solid ${palette.green}`, borderRadius: 999, backgroundColor: "rgba(54,214,126,.12)", padding: "12px 17px", color: palette.green, fontSize: 19, fontWeight: 800, opacity: success, scale: interpolate(success, [0, 1], [0.86, 1])}}>
                {text.optimized} (+120%)
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div style={{position: "absolute", inset: 0, opacity: interpolate(local, [86, 96, 108], [0, 0.72, 0], clamp), background: `linear-gradient(118deg, transparent 35%, rgba(255,255,255,.42) 49%, transparent 61%)`, translate: `${sweepX}% 0`}} />
      <div style={{position: "absolute", left: -120, bottom: -160, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle, rgba(54,214,126,.22), transparent 68%)", opacity: interpolate(local, [90, 108], [0, 1], clamp)}} />
    </AbsoluteFill>
  );
};

export const SearchShift: React.FC<SearchShiftProps> = ({locale}) => {
  const frame = useCurrentFrame();

  const scene1Opacity = frame < 120
    ? 1
    : interpolate(frame, [120, 125], [1, 0], clamp);
  const scene2Opacity = frame < 120 || frame >= 242
    ? 0
    : interpolate(frame, [120, 126, 234, 242], [0, 1, 1, 0], clamp);
  const scene3Opacity = frame < 234
    ? 0
    : interpolate(frame, [234, 242, 344, 359], [0, 1, 1, 0], clamp);
  const loopReturnOpacity = frame < 344
    ? 0
    : interpolate(frame, [344, 359], [0, 1], {...clamp, easing: Easing.inOut(Easing.cubic)});

  return (
    <AbsoluteFill style={{backgroundColor: palette.paper}}>
      <GscScene locale={locale} frame={frame <= 120 ? frame : 0} opacity={scene1Opacity} />
      <SearchSplitScene locale={locale} frame={frame} opacity={scene2Opacity} />
      <GeoDashboardScene locale={locale} frame={frame} opacity={scene3Opacity} />
      {frame >= 344 ? <GscScene locale={locale} frame={0} opacity={loopReturnOpacity} /> : null}
    </AbsoluteFill>
  );
};
