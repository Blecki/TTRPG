var FACTORY = {
    option: function(value) {
      var r = document.createElement('option');
      r.value = value;
      r.innerText = value;
      return r;
    },
  
    text: function(text) {
      var r = document.createElement("div");
      r.innerText = text;
      return r;
    },
  
    select: function(options) {
      var r = document.createElement("select");
      for (var option of options)
        r.appendChild(FACTORY.option(option));
      return r;
    }
  };