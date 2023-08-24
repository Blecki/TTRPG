{ 
  NAME: "TALENTED", 
  DESCRIPTION: "Your proficiency bonus increases by 1.",
  SEQUENCE: 0,
  REQUIREMENTS: "LEVEL 4",
  AVAILABLE: (f, c) => c.LEVEL >= 4,
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.PROFICIENCY_BONUS += 1; },
  TAGS: [ "PROFICIENCY", "COMMON" ]
}
