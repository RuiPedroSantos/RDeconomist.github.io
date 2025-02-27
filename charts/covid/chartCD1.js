var chartCD1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "Coronavirus cases",

  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=overview&metric=newCasesByPublishDate&metric=newDeaths28DaysByPublishDate&format=csv",
    "format": {"type": "csv"}
  },

  "title": {
    "text": "Cases vs Deaths",
    "subtitle":"New cases and new deaths, by publish date.",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },

  "height": 300,

  "width": 230,

  "config": {"background": "#ffFfFf"},


  "mark": {"type": "circle", "size":75},
  
    "transform": [
    {
      "window": [
        {"field": "newCasesByPublishDate",
         "op": "mean", 
         "as": "rolling_meanx"
         },
         {"field": "newDeaths28DaysByPublishDate",
         "op": "mean", 
         "as": "rolling_meany"
         }
      ],
      "frame": [-7, 1]
    }],

  "encoding": {
    "x": {"field": "rolling_meanx", "type": "quantitative", "title": "Cases"},
  
    "y": {
      "field": "rolling_meany",
      "type": "quantitative",
      "title": "Deaths"
    },

    "color":{
      "timeUnit":"month",
      "field":"date",
      "type": "ordinal",
      "title":null,
      "scale": {"scheme": "turbo"},
      "xxlegend":{"orient":"top"}
    },

    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {
        "field": "newDeaths28DaysByPublishDate",
        "type": "quantitative",
        "title": "Deaths",
        "format": ",.0f"
      },
      {
        "field": "newCasesByPublishDate",
        "type": "quantitative",
        "title": "Cases",
        "format": ",.0f"
      }
    ]
  },
  "resolve": {"scale": {"y": "independent", "x": "independent"}}
}
;

vegaEmbed('#chartCD1', chartCD1, {"actions":false});
