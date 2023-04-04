d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart_14 = 
    Plot.plot({
     
      grid: true,
      height: 320,
      x: {
        nice: true,
  
      },
      color: {
        scheme: "warm",
        nice: true,
        legend: true
      },
      facet: {
        data: data,
        x: "ocupacion",
        y: "genero"
      },
      marks: [
        Plot.frame(),
        Plot.dot(data, {x: "anio_mision", y: "mision_hs", fill: "eva_mision_hs", r: 1.5})
      ]
     })
      d3.select('#chart_14').append(() => chart_14)
  })