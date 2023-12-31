{ 
  NAME: "RAGE", 
  DESCRIPTION: "Use your bonus action to enter a rage. While raging, you have advantage on strength based saving throws and checks, you gain resistence to bludgeoning, piercing, and slashing damage, and you can add your proficiency bonus to the damage of melee attacks.",
  SEQUENCE: 2,
  COST: "1 FP",
  REQUIREMENTS: "",
  AVAILABLE: (f, c) => true,
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "BARBARIAN" ]
}
