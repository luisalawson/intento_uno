d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barX(data, {
        x: 'mision_hs',
        y: 'anio_mision',
      }),
    ],
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.anio_mision),
    },
    x: {
      grid: true,
    },
    height: 400,
    marginLeft: 100,
  })
  d3.select('#chart').append(() => chart)
})