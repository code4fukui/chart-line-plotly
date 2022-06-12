import * as d3 from "https://cdn.skypack.dev/d3@7";
import { CSV } from "https://js.sabae.cc/CSV.js";

class ChartLine extends HTMLElement {
  constructor(data, opt = {}) {
    super();
    for (const name in opt) {
      this.setAttribute(name, opt[name]);
    }
    if (data !== undefined) {
      /*
      if (!Array.isArray(data)) {
        data = Object.keys(data).map(name => {
          return { name, value: data[name] }
        });
      }
      */
      if (!Array.isArray(data[0])) {
        this.data = [data];
      } else {
        this.data = data;
      }
      //console.log(this.data);
      //this.setAttribute("value", data);
    } else {
      const txt = this.textContent.trim();
      const data = CSV.toJSON(CSV.decode(txt));
      //console.log(data)
      this.textContent = "";
      if (data.length > 0) {
        this.data = [data];
      }
    }
    this.style.display = this.style.display || "inline-block";
    this.init();
  }
  async init() {
    if (!this.data) {
      const fn = this.getAttribute("src");
      if (fn) {
        this.data = CSV.toJSON(await CSV.fetch(fn));
      }
    }
    window.addEventListener("resize", () => this.draw());
    this.draw();
  }
  draw() {
    if (!this.offsetWidth) {
      setTimeout(() => this.draw());
      return;
    }
    if (this.svg) {
      this.svg.remove();
    }
    const svg = this.svg = d3.select(this).append("svg");

    const dataset = this.data[0];
    const width = this.offsetWidth || 400;
    const height = this.offsetHeight || 400;
    const padding = 50; // margin for scale

    if (!dataset) {
      return;
    }

    svg.attr("width", width).attr("height", height);
    
    //const color = d3.scaleSequential((t) => d3.hsl(t / 12 * 360, 1, .6));
    const min = this.getAttribute("useMinValue") ? d3.min(dataset, d => parseFloat(d.value)) : 0;
    const xScale = d3.scaleBand()
      .rangeRound([padding, width])
      .padding(1)
      .domain(dataset.map(d => d.name));
    const yScale = d3.scaleLinear()
      .domain([min, d3.max(dataset, d => parseFloat(d.value) - min) + min])
      .range([height - padding, padding]);
   
    const yAxis = svg.append("g")
      .attr("transform", `translate(0, ${height - padding})`)
      .attr("writing-mode", "tb")
      .call(
        d3.axisBottom(xScale)
//          .tickSize(-height)
      );
    yAxis.selectAll("text")
      .attr("x", "0")
      .attr("y", "0")
      .attr("text-anchor", "start");

    svg.append("g")
      .attr("transform", `translate(${padding},0)`)
      .call(d3.axisLeft(yScale).tickSize(-width + padding));
    
    let idx = 0;
    for (const ds of this.data) {
      const hue = idx * 360 / (this.data.length + 1);
      svg.append("path")
        .datum(ds)
        .attr("fill", "none")
        .attr("stroke", `hsl(${hue},50%,50%`)
        //.attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
          .x(d => xScale(d.name))
          .y(d => yScale(d.value))
        );
      idx++;
    }
    /*
    svg.append("g")
      .selectAll("circle")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("cx", function(d) { return xScale(d.name); })
      .attr("cy", function(d) { return yScale(d.value); })
      .attr("fill", "steelblue")
      .attr("r", 4);
    */
  }
}

customElements.define("chart-line", ChartLine);

export { ChartLine };
