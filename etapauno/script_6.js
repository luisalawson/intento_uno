
d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart_6 = Plot.plot({
    height: 300,
    x: {
      label: "Edad →",
      nice: true
    },
    y: {
      grid: true,
      label: "← Femenino · Masculino →",
      labelAnchor: "center",
      tickFormat: Math.abs
    },
    marks: [
      Plot.dot(data, Plot.stackY2({
        x: d => d.edad_mision,
        y: d => d.genero === "masculino" ? 1 : d.genero === "femenino" ? -1 : 0,
        fill: "genero"
      })),
      Plot.ruleY([0])
    ],
    
  })
  d3.select('#chart_6').append(() => chart_6)
})

