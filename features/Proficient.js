{ 
  NAME: "PROFICIENT", 
  DESCRIPTION: "Gain proficiency in a skill.",
  SEQUENCE: 1,
  REQUIREMENTS: "",
  AVAILABLE: (f, c) => true,
  APPLY_STATS: (f, c) => {},
  APPLY_FEATURE: (f, c) => { 
    var prof = findProf(c, f.CHOICE); 
    if (prof) {
      prof.MULTIPLIER += 1;
      prof.SPECIFICATION = f.SPECIFICATION;
    } 
  },
  TAGS: [ "PROFICIENCY", "COMMON", "STACKABLE" ],
  CHOICE: "",
  SPECIFICATION: "",
  CUSTOM_TILE: (f, c, e) => {
    var selector = FACTORY.select(PROFICIENCIES.map(p => p.NAME));
    selector.value = f.CHOICE;
    selector.onchange = () => { f.CHOICE = selector.value; SHEET.refresh(); }
    e.appendChild(FACTORY.text("Choose skill:"));
    e.appendChild(selector);
    e.appendChild(FACTORY.text("Specify Instrument, Tool, or Language:"));
    var input = document.createElement('input');
    input.width = '100%';
    input.value = f.SPECIFICATION;
    input.onchange = () => { f.SPECIFICATION = input.value; SHEET.refresh(); }
    e.appendChild(input);
  }
}
