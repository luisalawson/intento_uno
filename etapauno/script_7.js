d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart_7 = Plot.plot({
    
    marks: [
      Plot.dot(data, {
        x: "anio_mision",
        y: "mision_hs",
        r: 'eva_mision_hs',
        fill: 'nacionalidad',
      }),
    ],
    r: { range: [0, 10] },
    x: {
      grid: true,
      line: true,
      domain: [2009, 2019], 
      nice: false 
    },
    y: {
      zero: true,
      nice: true,
      line: true,
      grid: true,
    },
    color:{
      legend: true,
      scheme: 'paired',
    },
  });
  d3.select("#chart_7").append(() => chart_7);
});

