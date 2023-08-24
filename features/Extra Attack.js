{ 
  NAME: "EXTRA ATTACK", 
  DESCRIPTION: "When you take the attack action, you can make an additional attack.",
  SEQUENCE: 2,
  REQUIREMENTS: "LEVEL 5",
  AVAILABLE: (f, c) => c.LEVEL >= 5,
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "FIGHTER", "BARBARIAN" ]
}
