d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'anio_nacimiento',
        y: 'nacionalidad',
        r: "mision_hs",
        fill: "genero",
        opacity: 0.5,
      }), 
    ],
    grid: true,
    line: true,
    nice: true,
    color:{
      legend: true,
    },
  });
  d3.select("#chart").append(() => chart_2);
});
//Queda medio raro pero bueno hay color

