d3.csv('astronautas.csv', d3.autoType).then(data => {

  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart_1 = Plot.plot({
    
    marks: [
      Plot.dot(data, {
        x: 'anio_mision',
        y: 'nacionalidad'
      }),
    ],
    grid: true,
    line: true,
    nice: true,
    color: {
      legend: true,
    },
    
    x:{
      domain:[2009,2020]
    }
    
  })

  // Agregamos chart al div#chart de index.html
  d3.select('#chart_1').append(() => chart_1)
  //con este script no se ve bien la magnitud de misiones del año
  // Necesito ver como hacer para que crezca para arriba (sin 'nombre', con 'nombre' se nota mejor la cantidad de misiones)
  // Ver como hacer aparecer el color
})

