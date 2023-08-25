{ 
  NAME: "CUTTING WORDS", 
  DESCRIPTION: "Your words are particularly hurtful. When a creature that you can see and who can hear you, within 60 feet of you, makes an attack roll, an ability check, or a damage roll, you can roll 1d8 and subtract the number from the creature's roll.",
  SEQUENCE: 2,
  COST: "1 FP",
  REQUIREMENTS: "LEVEL 3, CHARISMA >= 14",
  AVAILABLE: (f, c) => c.LEVEL >= 3 && c.STATS.CHA >= 14,
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "BARD" ]
}
