d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart_26 = Plot.plot({
    height: 300,
    color:{
      scheme: "set2",
    },
    x: {
      label: "Edad en Misión →",
      nice: true
    },
    y: {
      grid: true,
      label: "← Femenino · Masculino →",
      labelAnchor: "center",
      tickFormat: Math.abs,
      domain: [-5, 12]
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
  d3.select('#chart_26').append(() => chart_26)
})