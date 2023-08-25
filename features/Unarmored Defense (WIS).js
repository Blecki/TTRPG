{ 
  NAME: "Unarmored Defense (WIS)", 
  DESCRIPTION: "When not wearing armor, add your WIS modifier to AC",
  SEQUENCE: 1,
  REQUIREMENTS: "WIS > 14, Can't have Unarmored Defense (CON)",
  AVAILABLE: (f, c) => c.STATS.WIS > 14 && !c.hasFeature("Unarmored Defense (CON)"),
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ARMOR_CLASS += c.MODIFIERS.WIS; },
  TAGS: [ "COMMON", "ARMOR CLASS", "MONK" ]
}
