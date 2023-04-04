d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart_12 = Plot.plot({
    marks:[

    Plot.barY(
      data, 
      Plot.groupX(
      {y:"mean"},
      {y:'eva_mision_hs',
      x:'anio_mision'
    }
      )),

    ],
    grid: true,
    color:{
      legend: true,
      scheme: 'set2',

    },
    y:{
      domain: [0,20]
    }
  }
  
  )
  d3.select('#chart_12').append(() => chart_12)
})