var chartR1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "title": {
    "text": "Risk hotspots: case rates and elderly population",
    "subtitle":"Case rate, per capita. Share of population 75+ years old. Source: my calcs",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },

  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/db_covidLocalRisk.csv"
  },
  
  "selection": {
    "paintbrush": {"type": "multi", "on": "mouseover", "nearest": true},
    "grid": {"type": "interval", "bind": "scales"}
  },

  "encoding": {
    "x": {
      "field": "risk_share",
      "type": "quantitative",
      "axis": {
        "title": "Elderly population",
        "grid": false,
        "tickCount": 14,
        "format": ".1%",
        "labelOverlap": "greedy"
      }
    },
    "y": {
      "field": "cases_pop",
      "type": "quantitative",
      "axis": {"title": "Case rate", "grid": false, "format": ".2%"}
    },
    
    "size": {
      "condition": {"selection": "paintbrush", "value": 300, "init":{"value":70}},
      "value": 70
    },
    "tooltip": [
      {"field": "areaname", "type": "ordinal", "title": "Location"},
      
      {
        "field": "cases_pop",
        "type": "nominal",
        "title": "Cases % population",
        "format": ".2%"
      },
      {
        "field": "risk_share",
        "type": "nominal",
        "title": "75+, % population",
        "format": ".2%"
      }
    ]
  },
  
  "xxconfig": {"background": "#FcFdFd"},
  "height": 300,
  "width": 280,
  "mark": {"type": "circle", "opacity": 0.4, "color":"blue"}
}
;

vegaEmbed('#chartR1', chartR1, {"actions":false});
