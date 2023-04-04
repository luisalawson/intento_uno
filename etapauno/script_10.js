
d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart_10 = Plot.plot({
      marks:[

      Plot.barY(
        data, 
        //fill:'anio_mision',
        Plot.groupX(
        {y:"mean"},
        {y:'edad_mision',
        x:'anio_mision'
      }
        )),
  
      ],
      grid: true,
      color:{
        legend: true,
        
 
      },
    }
    
    )
    d3.select('#chart_10').append(() => chart_10)
})

