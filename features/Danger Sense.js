{ 
  NAME: "DANGER SENSE", 
  DESCRIPTION: "You have an uncanny sense for when things are about to get hairy. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells.",
  SEQUENCE: 2,
  REQUIREMENTS: "LEVEL 2",
  AVAILABLE: (f, c) => c.LEVEL >= 2,
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "BARBARIAN" ]
}
