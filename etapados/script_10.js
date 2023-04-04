d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart_210 = Plot.plot({
    marks:[

    Plot.barY(
      data, 
      
      Plot.groupX(
      {y:"mean"},
      {y:'eva_mision_hs',
      x:'anio_mision', fill:'#FF9A76'
    }
      )),

    ],
    grid: true,
    color:{
      legend: true,
      scheme: 'set2',

    },
    y:{
      domain: [0,20],
      label: "Horas Extravehiculares"
    },
    x:{
      label: "Año de misión →"
    }
  }
  
  )
  d3.select('#chart_210').append(() => chart_210)
})