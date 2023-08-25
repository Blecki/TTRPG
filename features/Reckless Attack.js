{ 
  NAME: "RECKLESS ATTACK", 
  DESCRIPTION: "When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.",
  COST: "1 FP",
  SEQUENCE: 2,
  REQUIREMENTS: "LEVEL 2",
  AVAILABLE: (f, c) => c.LEVEL >= 2,
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "BARBARIAN" ]
}
