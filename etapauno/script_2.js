d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart_2 = Plot.plot({
    
    marks: [
      Plot.dot(data, {
        x: 'anio_mision',
        y: 'nacionalidad',
        r: "mision_hs",
        fill: "genero",
        opacity: 0.5,
      }), 
    ],
    
    x:{
      domain: [2009,2020],
    },
    grid: true,
    line: true,
    nice: true,
    color:{
      legend: true,
      
    },
  });
  d3.select("#chart_2").append(() => chart_2);
});
//Queda medio raro pero bueno hay color

