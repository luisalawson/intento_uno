d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart_7 = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: "anio_mision",
        y: "mision_hs",
        r: 'eva_mision_hs',
      }),
    ],
    r: { range: [0, 10] },
    x: {
      grid: true,
      line: true,
      domain: [2008, 2020], // establecer el rango de valores en el eje X
      nice: false // desactivar la opción 'nice'
    },
    y: {
      zero: true,
      nice: true,
      line: true,
      grid: true,
    },
  });
  d3.select("#chart_7").append(() => chart_7);
});

