{ 
  NAME: "DANGER SENSE", 
  DESCRIPTION: "",
  SEQUENCE: 2,
  REQUIREMENTS: "LEVEL 2",
  AVAILABLE: (f, c) => c.LEVEL >= 2,
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "BARBARIAN" ]
}
