export const parseRobots = (robotsText) => {
  const groups = [];
  let agents = [];
  let rules = [];
  const flush = () => {
    if (agents.length > 0) groups.push({ agents, rules });
    agents = [];
    rules = [];
  };

  for (const rawLine of robotsText.split(/\r?\n/)) {
    const line = rawLine.replace(/#.*$/, "").trim();
    if (!line) continue;
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const field = line.slice(0, separator).trim().toLowerCase();
    const value = line.slice(separator + 1).trim();
    if (field === "user-agent") {
      if (rules.length > 0) flush();
      agents.push(value.toLowerCase());
    } else if (agents.length > 0 && (field === "allow" || field === "disallow")) {
      rules.push({ type: field, pattern: value });
    }
  }
  flush();
  return groups;
};

const patternMatchesPath = (pattern, path) => {
  if (!pattern) return false;
  const escaped = pattern
    .replace(/[.+?^${}()|[\]\\]/g, "\\$&")
    .replaceAll("*", ".*")
    .replace(/\\\$$/, "$");
  try {
    return new RegExp(`^${escaped}`).test(path);
  } catch {
    return pattern === path;
  }
};

export const evaluateRobotsAccess = (groups, requestedAgent, path = "/") => {
  const agent = requestedAgent.toLowerCase();
  const candidates = groups
    .map((group) => {
      const specificity = Math.max(...group.agents.map((candidate) => candidate === "*" ? 0 : agent.includes(candidate) ? candidate.length : -1));
      return { ...group, specificity };
    })
    .filter((group) => group.specificity >= 0);
  if (candidates.length === 0) return "allowed";
  const bestSpecificity = Math.max(...candidates.map((group) => group.specificity));
  const matchingRules = candidates
    .filter((group) => group.specificity === bestSpecificity)
    .flatMap((group) => group.rules)
    .filter((rule) => patternMatchesPath(rule.pattern, path));
  if (matchingRules.length === 0) return "allowed";
  const longest = Math.max(...matchingRules.map((rule) => rule.pattern.length));
  return matchingRules.some((rule) => rule.pattern.length === longest && rule.type === "allow") ? "allowed" : "blocked";
};
