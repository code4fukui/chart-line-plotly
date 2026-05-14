# chart-line-plotly

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom HTML element for rendering interactive line charts using Plotly.js, with support for multiple data series and configurable layouts.

## Demo

A live demo is available at: [https://code4fukui.github.io/chart-line-plotly/](https://code4fukui.github.io/chart-line-plotly/)

## Features

-   Renders multiple line series from a single JSON data source.
-   Can be used declaratively in HTML or programmatically in JavaScript.
-   Configurable chart dimensions, legend, and other layout options.
-   Automatic color assignment for each series from a predefined palette.

## Requirements

-   [Plotly.js](https://plotly.com) (loaded automatically from a CDN)

## Usage

### Declarative (in HTML)

Import the module, then add the `<chart-line>` element to your HTML. Place your JSON data inside the tag.

```html
<script type="module" src="./chart-line.js"></script>

<chart-line style="height:400px; width:600px;">
{
  "Series 1": [
    { "name": "A", "value": 30 },
    { "name": "B", "value": 20 },
    { "name": "C", "value": 70 }
  ],
  "Series 2": [
    { "name": "A", "value": 70 },
    { "name": "B", "value": 50 },
    { "name": "C", "value": 30 }
  ]
}
</chart-line>
```

### Programmatic (in JavaScript)

You can also import the `ChartLine` class and instantiate it with data.

```html
<div id="chart-container"></div>

<script type="module">
  import { ChartLine } from "./chart-line.js";

  const data = {
    "Series 1": [
      { "name": "A", "value": 30 },
      { "name": "B", "value": 20 },
      { "name": "C", "value": 70 }
    ]
  };

  const chart = new ChartLine(data);
  document.getElementById("chart-container").appendChild(chart);
</script>
```

## Configuration

### Data Format

The component expects a JSON object where each key is a string representing the series name. The corresponding value must be an array of objects, each with a `name` (for the x-axis) and a `value` (for the y-axis).

```json
{
  "Series Name": [
    { "name": "x-axis-point-1", "value": 10 },
    { "name": "x-axis-point-2", "value": 20 }
  ]
}
```

### Attributes

-   `style`: Set the `height` and `width` of the chart container.
-   `options`: Pass a JSON string to configure the chart. This component supports a subset of [Plotly.js layout options](https://plotly.com/javascript/reference/layout/).

Example of hiding the legend:

```html
<chart-line options='{ "showlegend": false }'>
  ...
</chart-line>
```

## Data Attribution

The demo uses open data from data.go.jp.
-   DATA: [CC BY data_go_jp_format.csv data.go.jp データカタログサイト統計データ](https://github.com/code4fukui/discovery_datagojp/blob/main/data/data_go_jp_format.csv)

## License

MIT License