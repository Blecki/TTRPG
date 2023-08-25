{ 
  NAME: "ENDLESS STANIMA", 
  DESCRIPTION: "When you roll initiative, regain one feature point, unless you are already at your maximum.",
  SEQUENCE: 2,
  REQUIREMENTS: "LEVEL 15",
  AVAILABLE: (f, c) => c.LEVEL >= 15,
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "COMMON" ]
}
