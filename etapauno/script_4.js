let chart_4
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart_4 = Plot.plot({
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
    marginLeft: 80,
    marginRight: 80,
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
  d3.select('#chart_4').append(() => chart_4)
})
// Mi idea era mostrar cuantas mujeres y cuantos hombres habian hecho misiones y cuanto les tardo llegar a esa mision(edad)
//Ver como hacer para que queden más lindos los nombres de los ejes
