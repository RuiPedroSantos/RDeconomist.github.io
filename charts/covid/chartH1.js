var chartH1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Hospital admissions",

"title": {
    "text": "Hospitals Admissions",
    "subtitle":"Daily new hospital admissions",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },

  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=nation&metric=newAdmissions&format=csv",
    "format": {"type": "csv"}
  },

  "height": 130,
  
  "width": 120,
  
  "mark": {"type": "line", "color":"red"},
  
  "transform": [
     {
      "filter": {
        "field": "date",
        "range": [
          {"year": 2020, "month": "feb", "date": 1},
          {"year": 2050, "month": "dec", "date": 30}
        ]
      }
    }
  ],
  
  "encoding": {
    
    "x": {"field": "date", "type": "temporal", "title": null},
    
    "y": {
      "field": "newAdmissions",
      "type": "quantitative",
      "title": null
    
    },

    "facet": {
      "field": "areaName",
      "type": "nominal",
      "columns": 2,
      "title": null
    },
    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {"field": "newAdmissions","type": "quantitative","title": "New Admissions","format": ",.0f"}
    ]

    
  },
  "resolve": {"scale": {"y": "independent"}}
}

;

vegaEmbed('#chartH1', chartH1, {"actions":false});
