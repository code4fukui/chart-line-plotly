import "https://cdn.plot.ly/plotly-2.15.1.min.js";

const colors = [
  "#A4BBBD",
  "#98ADBF",
  "#EAB9AF",
  "#DD725A",
  "#EEB259",
  "#EEE358",
];

class ChartLine extends HTMLElement {
  constructor(data, options) {
    super();
    
    if (data !== undefined) {
      this.setData(data, options);
    } else {
      const txt = this.textContent.trim();
      this.textContent = "";
      this.setData(JSON.parse(txt), options);
    }
  }
  
  setData(data, options) {
    const lineDatas = Object.keys(data).map((key, index) => {
      if (!data[key]) {
        return {};
      }
      const labels = data[key].map((d) => {
        return d["name"];
      });
      const values = data[key].map((d) => {
        return d["value"];
      });
      
      return {
        type: "scatter",
        mode: "lines",
        name: key,
        x: labels,
        y: values,
        line: {
          color: colors[index % colors.length],
          width: 3
        },
        showlegend: options["showlegend"] == undefined ? true : options["showlegend"]
      };
    });
    
    const layout = {
      width: options["width"] || 320,
      margin: {
        l: 32,
        r: 32
      },
      xaxis: {
        // 日付型の場合のみこのフォーマットが適用される
        tickformat: "%Y/%m/%d"
      }
    };
    Plotly.newPlot(this, lineDatas, layout);
  }
}

customElements.define("chart-line", ChartLine);

export { ChartLine };
