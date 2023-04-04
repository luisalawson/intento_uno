let chart_8
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart_8 = Plot.plot({
    marks: [
      Plot.barY(data, {
        x: "anio_nacimiento",
        y: data.length,
        fill: "genero",
        fillOpacity: 0.6,
        //: "genero",
        //title: "nacionalidad",
      }),
      Plot.frame(),
    ],
    grid: true,
    nice: true,
    
    width: 1000,
    height: 400,
    //r: { range: [0, 18] },
    facet: {
      data: data,
      x: "nacionalidad",
    },
    x: {ticks:3},
  });
  d3.select('#chart_8').append(() => chart_8)
})

  