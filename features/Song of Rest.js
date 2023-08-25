{ 
  NAME: "SONG OF REST", 
  DESCRIPTION: "You can use soothing music or oration to revitalize your wounded allies during a rest. You and any friendly creatures who can hear your performance regain 1d8 hit points.",
  SEQUENCE: 2,
  COST: "1 FP",
  REQUIREMENTS: "LEVEL 2",
  AVAILABLE: (f, c) => c.LEVEL >= 2,
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "BARD" ]
}
