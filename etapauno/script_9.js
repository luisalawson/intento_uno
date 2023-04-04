



d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart_9 = 
  // Plot.plot({
  //   marginBottom: 90,
  //   x: {
  //     type: "band",
  //     tickFormat: d => d.toLocaleString("en", {month: "narrow"}),
  //     label: null,
  //     tickRotate: -30,
  //   },
  //   marks: [
  //     Plot.barY(data, Plot.groupX({y:"mean"},{y:'mision_hs',x:'ocupacion'})),
  //     Plot.ruleY([0])
  //   ]
  // })
  Plot.plot({
    
 
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
    
   
    x:{
      domain:[2009,2020],
      
    }
  })
  d3.select('#chart_9').append(() => chart_9)
})


