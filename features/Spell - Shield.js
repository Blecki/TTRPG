{ 
  NAME: "SPELL: SHIELD", 
  DESCRIPTION: "SHIELD SPELL",
  SEQUENCE: 2,
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
