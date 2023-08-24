{ 
  NAME: "Unarmored Defense (CON)", 
  DESCRIPTION: "When not wearing armor, add your CON modifier to AC",
  SEQUENCE: 1,
  REQUIREMENTS: "CON > 14, Can't have Unarmored Defense (WIS)",
  AVAILABLE: (f, c) => c.STATS.CON > 14 && !hasFeature("Unarmored Defense (WIS)"),
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ARMOR_CLASS += c.MODIFIERS.CON; },
  TAGS: [ "COMMON", "ARMOR CLASS", "BARBARIAN" ]
}
