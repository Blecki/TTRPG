{ 
  NAME: "PEERLESS SKILL", 
  DESCRIPTION: "When you make an ability check, you can roll a d8 and add it to your total.",
  SEQUENCE: 2,
  COST: "1 FP",
  REQUIREMENTS: "LEVEL 14, CHARISMA >= 14",
  AVAILABLE: (f, c) => c.LEVEL >= 14 && c.STATS.CHA >= 14,
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "BARD" ]
}
