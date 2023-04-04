d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barY(data, Plot.binY({x:'count'},{y:'mision_hs'})),
    ],
    grid: true,
  })
  d3.select('#chart').append(() => chart)
})


