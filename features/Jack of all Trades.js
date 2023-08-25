{ 
  NAME: "JACK OF ALL TRADES", 
  DESCRIPTION: "You can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus.",
  SEQUENCE: 2,
  REQUIREMENTS: "LEVEL 2",
  AVAILABLE: (f, c) => c.LEVEL >= 2,
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "BARD" ]
}
