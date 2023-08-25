{ 
  NAME: "SPELL: ANIMATE OBJECTS", 
  DESCRIPTION: "",
  SEQUENCE: 2,
  COST: "5 FP",
  RANGE: "120 FEET",
  COMPONENTS: "V,S",
  DURATION: "CONCENTRATION, UP TO 1 MINUTE",
  CONCENTRATION: false,
  REQUIREMENTS: "SPELLCASTING: TRANSMUTATION",
  AVAILABLE: (f, c) => c.hasFeature("SPELLCASTING: TRANSMUTATION"),
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "SPELLCASTING", "TRANSMUTATION", "SPELL" ]
}
