{ 
  NAME: "ASI (4)", 
  DESCRIPTION: "Increase two stats by 1 or one stat by 2.",
  SEQUENCE: 0,
  REQUIREMENTS: "LEVEL 14",
  AVAILABLE: (f, c) => c.LEVEL >= 14,
  APPLY_STATS: (f, c) => { console.log("APPLY ASI"); c.STATS[f.FIRST_CHOICE] += 1; c.STATS[f.SECOND_CHOICE] += 1; },
  APPLY_FEATURE: (f, c) => {},
  TAGS: [ "COMMON", "ASI" ],
  FIRST_CHOICE: "STR",
  SECOND_CHOICE: "STR",
  CUSTOM_TILE: (f, c, e) => {
    var firstSelector = FACTORY.select(STATS_LIST);
    firstSelector.value = f.FIRST_CHOICE;
    firstSelector.onchange = () => { f.FIRST_CHOICE = firstSelector.value; SHEET.refresh(); }
    var secondSelector = FACTORY.select(STATS_LIST);
    secondSelector.value = f.SECOND_CHOICE;
    secondSelector.onchange = () => { f.SECOND_CHOICE = secondSelector.value; SHEET.refresh(); }
    e.appendChild(FACTORY.text("Choose first stat to increase:"));
    e.appendChild(firstSelector);
    e.appendChild(FACTORY.text("Choose second stat to increase:"));
    e.appendChild(secondSelector);
  }
}
