{ 
  NAME: "Toughness", 
  DESCRIPTION: "Your HP increases by CON modifer points per level.",
  SEQUENCE: 1,
  REQUIREMENTS: "",
  AVAILABLE: true,
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.HIT_POINTS += (c.MODIFIERS.CON * c.LEVEL); },
  TAGS: [ "COMMON", "HIT POINTS" ]
}
