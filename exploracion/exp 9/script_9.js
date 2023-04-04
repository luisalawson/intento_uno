d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barY(data, {x:'anio_mision', y:'mision_hs', fill:'nacionalidad'}),
    ],
    color:{
      legend: true,
      scheme: 'warm',
    },
  })
  d3.select('#chart').append(() => chart)
})