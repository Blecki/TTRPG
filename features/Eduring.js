{ 
  NAME: "ENDURING", 
  DESCRIPTION: "Increase your feature pool by 2 points.",
  SEQUENCE: 2,
  REQUIREMENTS: "",
  AVAILABLE: (f, c) => true,
  APPLY_STATS: (f, c) => { c.FEATURE_POINTS += 2; },
  APPLY_FEATURE: (f, c) => { },
  TAGS: [ "COMMON", "STACKABLE" ]
}
