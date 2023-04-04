
d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart_5 = Plot.plot({
    marginLeft: 150,
    marginRight: 120,
    marks: [
      Plot.barX(
        data,
        Plot.groupY(
          {
            x1: 'min',
            x2: 'max',
          },
          { x: 'edad_mision', y: 'nacionalidad', fill:'#FF9A76'},
        ),
      ),
    ],
    x: {
      label: '← Min edad . Max edad →',
      domain: [30,63],
      ticks: [30, 35, 40, 45, 50, 55, 60],
    },
    y:{
      label: "Nacionalidad",
    },

    grid: true,
    nice: true,
    line: true,
  })
  d3.select('#chart_5').append(() => chart_5)
})

