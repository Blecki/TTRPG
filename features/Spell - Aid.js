{ 
  NAME: "SPELL: AID", 
  DESCRIPTION: "Bolster your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.",
  SEQUENCE: 2,
  COST: "1 ACTION, 2 FP",
  RANGE: "30",
  COMPONENTS: "V,S,M",
  MATERIALS: "A TINY STRIP OF WHITE CLOTH",
  DURATION: "8 HOURS",
  REQUIREMENTS: "SPELLCASTING: ABJURATION",
  AVAILABLE: (f, c) => hasFeature("SPELLCASTING: ABJURATION"),
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "SPELLCASTING", "ABJURATION", "SPELL" ]
}
