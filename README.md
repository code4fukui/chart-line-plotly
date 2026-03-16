# chart-line-plotly

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom HTML element that renders a line chart using Plotly.js.

## Demo
You can see a demo of the `<chart-line>` tag in the `index.html` file.

## Features
- Renders a line chart from JSON data
- Supports multiple line series
- Configurable options for chart layout and legend

## Requirements
- [Plotly.js](https://plotly.com) library

## Usage
To use the `<chart-line>` element, import the `chart-line.js` file and define the element:

```html
<script type="module" src="./chart-line.js"></script>
<chart-line>
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

You can also pass options to the chart:

```html
<chart-line style="height:400px;width:600px;" options='{ "showlegend": false }'>
  ...
</chart-line>
```

## Data / API
This project uses the [Plotly.js](https://plotly.com) library to render the line charts.

## License
MIT License — see [LICENSE](LICENSE).