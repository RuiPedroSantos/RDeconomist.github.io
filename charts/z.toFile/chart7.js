var Chart7 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "Coronavirus cases",
  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=region&metric=newCasesBySpecimenDateRollingSum&metric=newCasesBySpecimenDate&format=csv",
    "format": {"type": "csv"}
  },
  "height": 133.3,
  "width": 200,
  "mark": {"type": "line", "point": false, "color": ["green", "red"]},
  "transform": [
    
    {
      "filter": {
        "field": "date",
        "range": [
          {"year": 2020, "month": "feb", "date": 1},
          {"year": 2020, "month": "dec", "date": 20}
        ]
      }
    }
  ],
  "encoding": {
    "x": {"field": "date", "type": "temporal", "title": "Date"},
    "y": {
      "field": "newCasesBySpecimenDateRollingSum",
      "type": "quantitative",
      "title": "New cases (rolling sum)"
    },
    "facet": {
      "field": "areaName",
      "type": "nominal",
      "columns": 3,
      "title": "Region"
    },
    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {"field": "newCasesBySpecimenDateRollingSum", "type": "quantitative", "title": "Cases, rolling sum"},
      {"field": "newCasesBySpecimenDate", "type": "quantitative", "title": "Cases"}
    ],
    "color": {
  "field": "areaName",
  "type": "nominal",
  "legend":0,
  "scale": {"domain": ["East Midlands", "East of England", "London", "North East", "North West", "South East", "South West", "West Midlands", "Yorkshire and The Humber"], "range": ["green", "red", "red", "green", "green", "red", "green","green","green"]}
}

  }
};

vegaEmbed('#vis7', Chart7);
