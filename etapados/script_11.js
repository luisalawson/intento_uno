d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart_211 = Plot.plot({
    marks:[
    Plot.barY(
      data, 
      Plot.groupX(
      {y:"mean"},
      {y:'mision_hs',
      x:'ocupacion', fill:'#FF9A76'
    }
      )),
    ],
    grid: true,
    color:{
      legend: true,
      scheme: 'set2',

    },
    y:{
      domain: [0,4500],
      label: "Horas por Misión"
    },
    x:{
      tickRotate:-15,
      label: "Ocupación"
    },
    marginBottom: 80
  }
  )
  d3.select('#chart_211').append(() => chart_211)
})