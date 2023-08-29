{ 
    NAME: "GEOMANCER", 
    STAGE: "CREATION",
    DESCRIPTION: "",
    SEQUENCE: 0,
    REQUIREMENTS: "Has not chosen an elemental power",
    AVAILABLE: (f, c) => (!c.hasTaggedFeature("ELEMENTAL AFFINITY", this) || c.hasFeature("GEOMANCER")),
    APPLY_STATS: (f, c) => {},
    APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
    TAGS: [ "ELEMENTAL AFFINITY" ]
  }
  