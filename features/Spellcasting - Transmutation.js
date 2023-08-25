{ 
  NAME: "SPELLCASTING: TRANSMUTATION", 
  DESCRIPTION: "You are able to learn and cast spells of the school of transmutation.",
  SEQUENCE: 1,
  REQUIREMENTS: "INT > 14",
  AVAILABLE: (f, c) => c.STATS.INT > 14,
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "SPELLCASTING", "TRANSMUTATION" ]
}
