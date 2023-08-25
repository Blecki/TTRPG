var CHARACTER_BASE = {
    LEVEL: 1,
    FEATURES_AVAILABLE: 5,
    CHOSEN_FEATURES: [],
    BASE_STATS: { STR: 10, DEX: 10, CON: 10, INT: 10, WIS: 10, CHA: 10 },
    STATS: { STR: 10, DEX: 10, CON: 10, INT: 10, WIS: 10, CHA: 10 },
    MODIFIERS: { STR: 0, DEX: 0, CON: 0, INT: 0, WIS: 0, CHA: 0 },
    HIT_POINTS: 10,
    PROFICIENCY_BONUS: 2,
    FEATURE_POINTS: 2,
    ARMOR_CLASS: 10,
    PROFICIENCIES: [],
    ADDITIONAL_FEATURES: [],
  
    findProficiency: function(name) {
      for (var prof of this.PROFICIENCIES)
        if (prof.NAME == name)
          return prof;
      return undefined;
    },
  
    reset: function() {
      this.STATS = { 
        STR: this.BASE_STATS.STR,
        DEX: this.BASE_STATS.DEX, 
        CON: this.BASE_STATS.CON, 
        INT: this.BASE_STATS.INT, 
        WIS: this.BASE_STATS.WIS, 
        CHA: this.BASE_STATS.CHA 
      };
      this.HIT_POINTS = (10 + this.MODIFIERS.CON) * this.LEVEL;
      this.ARMOR_CLASS = 10 + this.MODIFIERS.DEX;
      this.PROFICIENCY_BONUS = 2;
      this.FEATURE_POINTS = 2;
      this.PROFICIENCIES = makeBaseProficiencies();
      this.ADDITIONAL_FEATURES = [];
      this.FEATURES_AVAILABLE = 5 + (this.LEVEL * 2);
    },
  
    setLevel: function(level) {
      this.LEVEL = level;
      this.FEATURES_AVAILABLE = 5 + (this.LEVEL * 2);
      SHEET.refresh();
    },
  
    setStat: function(stat, value) {
      this.BASE_STATS[stat] = value;
      SHEET.refresh();
    },
  
    purgeFeatures: function() {
      while (true) {
        this.applyFeatures();
        valid_features = this.CHOSEN_FEATURES.filter(a => this.meetsFeatureRequirements(a));
        if (this.CHOSEN_FEATURES.length == valid_features.length)
          break;
        this.CHOSEN_FEATURES = valid_features;
      }
    },
  
    build: function() {
      // Get rid of any features that are not allowed.
      this.purgeFeatures();
      if (this.CHOSEN_FEATURES.length > this.FEATURES_AVAILABLE)
        this.CHOSEN_FEATURES.length = this.FEATURES_AVAILABLE;
      this.purgeFeatures();
    },    
    
    meetsFeatureRequirements: function(feature) {
      return this.checkPredicate(this, feature, feature.AVAILABLE);
    },
  
    
    checkPredicate: function(character, feature, predicate) {
      if (predicate instanceof Function) return predicate(feature, character);
      return predicate;
    },
  
    addFeature: function(feature) {
      this.CHOSEN_FEATURES.push(feature);
      SHEET.refresh();
    },
  
    removeFeature: function(feature) {
      this.CHOSEN_FEATURES = this.CHOSEN_FEATURES.filter(a => a !== feature);
      SHEET.refresh();
    },
  
    hasFeature: function(featureName) {
      for (var feature of this.CHOSEN_FEATURES)
        if (feature.NAME == featureName)
          return true;
      return false;
    },
  
    calculateModifier: function(stat) {
      if (stat >= 0 && stat < 2) return -5;
      if (stat >= 2 && stat < 4) return -4;
      if (stat >= 4 && stat < 6) return -3;
      if (stat >= 6 && stat < 8) return -2;
      if (stat >= 8 && stat < 10) return -1;
      if (stat >= 10 && stat < 12) return 0;
      if (stat >= 12 && stat < 14) return 1;
      if (stat >= 14 && stat < 16) return 2;
      if (stat >= 16 && stat < 18) return 3;
      if (stat >= 18 && stat < 20) return 4;
      if (stat >= 20 && stat < 22) return 5;
      if (stat >= 22 && stat < 24) return 6;
      if (stat >= 24 && stat < 26) return 7;
      if (stat >= 26 && stat < 28) return 8;
      if (stat >= 28 && stat < 30) return 9;
      if (stat >= 30 && stat < 32) return 10;
      if (stat >= 32 && stat < 34) return 11;
    },
  
    applyFeatures: function() {
      this.reset();
      this.CHOSEN_FEATURES.sort((a,b) => a.SEQUENCE - b.SEQUENCE);
      
      for (var feature of this.CHOSEN_FEATURES)
        if (feature.APPLY_STATS)
          feature.APPLY_STATS(feature, this);
  
      this.MODIFIERS = {
        STR: this.calculateModifier(this.STATS.STR),
        DEX: this.calculateModifier(this.STATS.DEX),
        CON: this.calculateModifier(this.STATS.CON),
        INT: this.calculateModifier(this.STATS.INT),
        WIS: this.calculateModifier(this.STATS.WIS),
        CHA: this.calculateModifier(this.STATS.CHA)      
      };
  
      this.HIT_POINTS = (10 + this.MODIFIERS.CON) * this.LEVEL;
      this.ARMOR_CLASS = 10 + this.MODIFIERS.DEX;
  
      for (var feature of this.CHOSEN_FEATURES)
        if (feature.APPLY_FEATURE)
          feature.APPLY_FEATURE(feature, this);
  
      for (var prof of this.PROFICIENCIES) {
        if (prof.STAT != "") {
          prof.BONUS = this.MODIFIERS[prof.STAT];
          prof.BONUS += (this.PROFICIENCY_BONUS * prof.MULTIPLIER);
        }
        else
          prof.BONUS = prof.MULTIPLIER;
      }
    }
  };
  