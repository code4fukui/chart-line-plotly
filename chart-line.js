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
  constructor(data) {
    super();
    
    if (data !== undefined) {
      this.setData(data);
    } else {
      const txt = this.textContent.trim();
      this.textContent = "";
      this.setData(JSON.parse(txt));
    }
  }

  setData(data) {
    const lineDatas = Object.keys(data).map((key, index) => {
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
        }
      };
    });
    
    const layout = {
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
