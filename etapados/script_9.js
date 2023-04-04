d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart_29 = 
  Plot.plot({
    marginLeft:150,
    color: {
      
      scheme: "set2",
      //legend: true
    },
    marks: [
      Plot.circle(
        data,
        Plot.hexbin(
          { r: "count" },
          { x: "anio_mision", y: "ocupacion", stroke: "ocupacion", fill: "ocupacion"}
        )
      )
    ],
    grid:true,
    
    y:{
      tickRotate:-20,
      label: "Ocupación"
    },
    x:{
      domain:[2009,2020],
      label: "Año Misión →" 
    }
  })
  d3.select('#chart_29').append(() => chart_29)
})


