{ 
  NAME: "BARDIC INSPIRATION", 
  DESCRIPTION: "You can inspire others through stirring words or music. To do so, use a bonus action and choose one creature other than yourself within 60 feet that can hear you. The creature gains one bardic inspiration die, a d8. Once within the next ten minutes the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. Once the die is rolled it is lost, and a creature can have only one bardic inspiration die at a time.",
  SEQUENCE: 2,
  COST: "1 FP",
  REQUIREMENTS: "",
  AVAILABLE: (f, c) => true,
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { c.ADDITIONAL_FEATURES.push(f); },
  TAGS: [ "BARD" ]
}
