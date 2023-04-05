d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart_3 = Plot.plot({
    
    marks: [
      Plot.plot({
  x: {
    type: "band",
    tickFormat: d => d.toLocaleString("en", {month: "narrow"}),
    label: null
  },
  marks: [
    Plot.barY(data, {x: "anio_mision", y: "nacionalidad", fill: "nacionalidad"}),
    Plot.ruleY([0])
  ]
})
  d3.select("#chart_3").append(() => chart_3);
});

