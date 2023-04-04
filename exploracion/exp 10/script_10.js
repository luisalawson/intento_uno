
d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart_10 = Plot.plot({
      marks:[
      Plot.barY(data, Plot.groupY({x:"mean"},{y:'mision_hs',x:'anio_mision'})),
      
      ]
    }
    )
    d3.select('#chart_10').append(() => chart_10)
})