{ 
  NAME: "FAST MOVEMENT", 
  DESCRIPTION: "",
  SEQUENCE: 2,
  REQUIREMENTS: "LEVEL 5",
  AVAILABLE: (f, c) => c.LEVEL >= 5,
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "BARBARIAN" ]
}
