
 

let chart_4
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart_4 = Plot.plot({
  height: 280,
  x: {
    percent: true
  },
  facet: {
    data: data,
  },
  marks: [
    Plot.barX(data, Plot.stackX(Plot.groupZ({x: "anio_mision"}, {fill: "gender"}))),
    Plot.ruleX([0, 1])
  ]
});
  d3.select('#chart_4').append(() => chart_4)
})
