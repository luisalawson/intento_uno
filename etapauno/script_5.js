
d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart_5 = Plot.plot({
    
    marks: [
      Plot.barX(
        data,
        Plot.groupY(
          {
            x1: 'min',
            x2: 'max',
          },
          { x: 'edad_mision', y: 'nacionalidad'},
        ),
      ),
    ],
    x: {
      label: 'Min edad, Max edad',
    },
    
    height: 400,
    width: 1000,
    grid: true,
    nice: true,
    line: true,
  })
  d3.select('#chart_5').append(() => chart_5)
})

