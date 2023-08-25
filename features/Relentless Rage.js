{ 
  NAME: "RELENTLESS RAGE", 
  DESCRIPTION: "",
  SEQUENCE: 2,
  REQUIREMENTS: "LEVEL 11, RAGE",
  AVAILABLE: (f, c) => c.LEVEL >= 11 && c.hasFeature("RAGE"),
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "BARBARIAN" ]
}
