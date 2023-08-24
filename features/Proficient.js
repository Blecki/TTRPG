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
    var selector = makeSelector(PROFICIENCIES.map(p => p.NAME));
    selector.value = f.CHOICE;
    selector.onchange = () => { f.CHOICE = selector.value; refresh(); }
    e.appendChild(makeTextDiv("Choose skill:"));
    e.appendChild(selector);
    e.appendChild(makeTextDiv("Specify Instrument, Tool, or Language:"));
    var input = document.createElement('input');
    input.width = '100%';
    input.value = f.SPECIFICATION;
    input.onchange = () => { f.SPECIFICATION = input.value; refresh(); }
    e.appendChild(input);
  }
}
