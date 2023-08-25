{ 
  NAME: "SPELL: ANIMAL FRIENDSHIP", 
  DESCRIPTION: "",
  SEQUENCE: 2,
  COST: "1 FP",
  RANGE: "Self",
  COMPONENTS: "V,S,M",
  DURATION: "24 HOURS",
  CONCENTRATION: false,
  REQUIREMENTS: "SPELLCASTING: ECHANTMENT",
  AVAILABLE: (f, c) => hasFeature("SPELLCASTING: ENCHANTMENT"),
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "SPELLCASTING", "ECHANTMENT", "SPELL" ]
}