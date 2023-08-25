{ 
  NAME: "SAVANT", 
  DESCRIPTION: "Your proficiency bonus increases by 1.",
  SEQUENCE: 0,
  REQUIREMENTS: "LEVEL 8, TALENTED",
  AVAILABLE: (f, c) => c.LEVEL >= 8 && c.hasFeature('TALENTED'),
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.PROFICIENCY_BONUS += 1; },
  TAGS: [ "PROFICIENCY", "COMMON" ]
}
