let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart = Plot.plot({
    grid: true,
    nice: true,
    zero: true,
    color: {
      legend: true,
    },
    facet: {
      data: data,
      x: "edad_mision",
    },
    marks: [
      Plot.dot(data, {
        x: "edad_mision",
        y: "genero",
        fill: "edad_mision",
        fillOpacity: 0.6,
        r: "anio_mision",
        title: "nombre",
      }),
    ],
  });
  d3.select('#chart').append(() => chart)
})
// Mi idea era mostrar cuantas mujeres y cuantos hombres habian hecho misiones y cuanto les tardo llegar a esa mision(edad)
//Ver como hacer para que queden más lindos los nombres de los ejes
