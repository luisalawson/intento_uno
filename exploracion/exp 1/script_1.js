d3.csv('astronautas.csv', d3.autoType).then(data => {
  /*console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'genero',
      }),
    ],
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)*/
  //con este script no se ve bien la magnitud de mujeres y hombres siendo astronautas que tenemos en el csv
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'anio_mision',
        y: 'nombre'
      }),
    ],
    grid: true,
    line: true,
    nice: true,
    color: {
      legend: true,
    },
  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
  //con este script no se ve bien la magnitud de misiones del año
  // Necesito ver como hacer para que crezca para arriba (sin 'nombre', con 'nombre' se nota mejor la cantidad de misiones)
  // Ver como hacer aparecer el color
})

