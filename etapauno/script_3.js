d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart_3 = Plot.plot({
    
    marks: [
      Plot.dot(data, {
        x: "anio_mision",
        y: "nacionalidad",
        r: "edad_mision",
        fill: "anio_mision",
        symbol: "anio_mision",
      }),
    ],
    grid: true,
    line: true,
    nice: true,
    symbol: {
      legend: "true",
    },
    

  });

  d3.select("#chart_3").append(() => chart_3);
});
//SE PUDOOOO
//Hay que ver como hacer para que los paises no se choquen con el nombre del y-axis
