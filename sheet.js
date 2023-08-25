var SHEET = {     
    loadFeatures: function() {
      fetch ( "https://raw.githubusercontent.com/Blecki/TTRPG/main/proficiencies.json", {
        method: 'GET'
      })
      .then (response => {
        response.text().then(data => {
          PROFICIENCIES = JSON.parse(data);
          
          fetch ( "https://api.github.com/repos/Blecki/TTRPG/contents/features", {
            method: 'GET'
          })
          .then(response => {
                      
            response.json().then(function(data) {
              var count = 0;
              var expected = data.length;
              for (var feature of data) {
                fetch ("https://raw.githubusercontent.com/Blecki/TTRPG/main/features/" + feature.name, { 
                  method: 'GET'
                })
                .then(response => {
                  response.text().then(function(data) {
                    //var content = atob(data.content);
  
                    var funcCode = "return " + data;
                    var result = new Function(funcCode)();
                    console.log(result);
                    FEATURES.push(result);
  
                    count += 1;
                    if (count == expected) {
                      console.log("Loaded Features");
                      
                      var TAGS = [];
                      for (var feature of FEATURES) {
                        for (var tag of feature.TAGS)
                          TAGS.push(tag);
                      }
  
                      var UNIQUE_TAGS = TAGS.filter((value, index, array) => array.indexOf(value) === index);
                      UNIQUE_TAGS.sort();
  
                      for (var tag of UNIQUE_TAGS) {
                        document.getElementById("FILTER_TAG").innerHTML += `<option value="${tag}">${tag}</option>`;
                      }
                      
                      SHEET.refresh();
                    }
                  })
                });
              }
            });
          });
          
        });
      });
    },
  
  
    refresh: function() {
      console.log(CHARACTER_BASE);
      CHARACTER_BASE.build();
  
      document.getElementById("COUNT_AVAILABLE_FEATURES").innerText = CHARACTER_BASE.FEATURES_AVAILABLE;
      document.getElementById("FINAL_ARMOR_CLASS").innerText = CHARACTER_BASE.ARMOR_CLASS;
      document.getElementById("FINAL_HIT_POINTS").innerText = CHARACTER_BASE.HIT_POINTS;
      document.getElementById("FINAL_PROFICIENCY_BONUS").innerText = CHARACTER_BASE.PROFICIENCY_BONUS;
      document.getElementById("FINAL_FEATURE_POINTS").innerText = CHARACTER_BASE.FEATURE_POINTS;
      document.getElementById("FINAL_STR").innerText = CHARACTER_BASE.STATS.STR;
      document.getElementById("FINAL_DEX").innerText = CHARACTER_BASE.STATS.DEX;
      document.getElementById("FINAL_CON").innerText = CHARACTER_BASE.STATS.CON;
      document.getElementById("FINAL_INT").innerText = CHARACTER_BASE.STATS.INT;
      document.getElementById("FINAL_WIS").innerText = CHARACTER_BASE.STATS.WIS;
      document.getElementById("FINAL_CHA").innerText = CHARACTER_BASE.STATS.CHA;
  
      document.getElementById("MOD_STR").innerText = CHARACTER_BASE.MODIFIERS.STR;
      document.getElementById("MOD_DEX").innerText = CHARACTER_BASE.MODIFIERS.DEX;
      document.getElementById("MOD_CON").innerText = CHARACTER_BASE.MODIFIERS.CON;
      document.getElementById("MOD_INT").innerText = CHARACTER_BASE.MODIFIERS.INT;
      document.getElementById("MOD_WIS").innerText = CHARACTER_BASE.MODIFIERS.WIS;
      document.getElementById("MOD_CHA").innerText = CHARACTER_BASE.MODIFIERS.CHA;
      
      this.buildAvailableFeatureList(document.getElementById("FILTER_TAG").value, document.getElementById("SEARCH_FEATURE").value);
      this.buildSelectedFeatureList();
      this.buildAdditionalFeatureList();
  
      var prof_list = document.getElementById("PROFICIENCIES");
      prof_list.innerHTML = "";
      for (var prof of CHARACTER_BASE.PROFICIENCIES)
        if (prof.STAT != "")
          prof_list.innerHTML += `<div>${prof.NAME} (${prof.STAT}) - ${prof.BONUS}</div>`; 
  
      var other_prof_list = document.getElementById("OTHER_PROFICIENCIES");
      other_prof_list.innerHTML = "";
      for (var prof of CHARACTER_BASE.PROFICIENCIES)
        if (prof.STAT == "" && prof.MULTIPLIER > 0) {
          console.log(prof);
          var html = `<div>${prof.NAME}`;
          if (prof.hasOwnProperty('SPECIFICATION') && prof.SPECIFICATION != "")
            html += ` - ${prof.SPECIFICATION}`;
          html += `</div>`;        
          other_prof_list.innerHTML += html;
        }
    },
  
    buildFeatureTile: function(feature, removeButton, removeCallback) {
      var result = document.createElement('div');
      result.style.border = '3px solid green';
      result.style.borderRadius = '5px';
      result.style.margin = '5px';
  
      var table = document.createElement('div');
      table.innerHTML = `<table><tr><td>${feature.NAME}</td><td>${feature.REQUIREMENTS}</td></tr><tr><td colspan=2>${feature.DESCRIPTION}</td></tr></table>`;
  
      if (removeButton) {
        var r = document.createElement('button');
        r.innerText = "X";
        r.style.cssFloat = "right";
        r.onclick = () => removeCallback(feature);
        result.appendChild(r);
      }
  
      result.appendChild(table);
  
      return result;
    },
    
    buildAvailableFeatureList: function(filterTag, search) {
      var output = document.getElementById("AVAILABLE_FEATURES");
      this.clearElement(output);
      for (var feature of FEATURES) {
        if (search != "" && !feature.NAME.toUpperCase().includes(search.toUpperCase())) continue;
        if (filterTag != "" && !feature.TAGS.includes(filterTag)) continue;
        var tile = this.buildFeatureTile(feature, false);
        var available = true;
        if (available) available &= CHARACTER_BASE.CHOSEN_FEATURES.length < CHARACTER_BASE.FEATURES_AVAILABLE;
        if (available) available &= CHARACTER_BASE.meetsFeatureRequirements(feature);
        if (available && !feature.TAGS.includes("STACKABLE")) available &= !CHARACTER_BASE.hasFeature(feature.NAME);
        if (document.getElementById("FILTER_AVAILABLE").checked && !available) continue;
        if (available) {
          tile.onclick = (function(feature) { return () => {
            console.log("Clicked on feature:");
            console.log(feature);
            CHARACTER_BASE.addFeature(this.cloneFeature(feature));
          }; })(feature);
          output.appendChild(tile);
        }
        else {
          tile.disabled = true;
          tile.style.border = "1px solid gray";
          output.appendChild(tile);
        }
      }
    },
  
    buildSelectedFeatureList: function() {
      var output = document.getElementById("SELECTED_FEATURES");
      this.clearElement(output);
      for (var feature of CHARACTER_BASE.CHOSEN_FEATURES) {
        var tile = this.buildFeatureTile(feature, true, (feature) => {
          CHARACTER_BASE.removeFeature(feature);
        });
        if (feature.hasOwnProperty("CUSTOM_TILE") && feature.CUSTOM_TILE instanceof Function)
          feature.CUSTOM_TILE(feature, CHARACTER_BASE, tile);
        output.appendChild(tile);
      }
    },
  
    buildAdditionalFeatureList: function() {
      var output = document.getElementById("ADDITIONAL_FEATURES");
      this.clearElement(output);
      for (var feature of CHARACTER_BASE.ADDITIONAL_FEATURES) {
        output.appendChild(this.buildFeatureTile(feature, false));
      }
    },
      
    cloneFeature: function(feature) {
      return Object.assign({}, feature);
    },
  
    clearElement: function(element) {
      element.innerHTML = "";
    },
  
      
    statSelector: function(stat) {
      var select = document.getElementById(stat + "_SELECT");
      for (var x = 1; x <= 20; ++x)
        select.appendChild(FACTORY.option(x));
      select.value = 10;
    },
    
    load: function() {
      this.statSelector('STR');
      this.statSelector('DEX');
      this.statSelector('CON');
      this.statSelector('INT');
      this.statSelector('WIS');  
      this.statSelector('CHA');
      this.loadFeatures();
    }
  };