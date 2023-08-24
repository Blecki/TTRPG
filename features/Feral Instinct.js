{ 
  NAME: "FERAL INSTINCT", 
  DESCRIPTION: "",
  SEQUENCE: 2,
  REQUIREMENTS: "LEVEL 7",
  AVAILABLE: (f, c) => c.LEVEL >= 7,
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "BARBARIAN" ]
}
