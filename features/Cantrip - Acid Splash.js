{ 
  NAME: "CANTRIP: ACID SPLASH", 
  DESCRIPTION: "You hurl a bubble of acid at one creature within range. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.",
  SEQUENCE: 2,
  COST: "1 ACTION",
  RANGE: "60",
  COMPONENTS: "V,S",
  REQUIREMENTS: "SPELLCASTING: CONJURATION",
  AVAILABLE: (f, c) => hasFeature("SPELLCASTING: CONJURATION"),
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "SPELLCASTING", "CONJURATION", "CANTRIP" ]
}
