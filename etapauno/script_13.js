d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart_13 = 
      
      Plot.plot({
       
        grid: true,
        marks: [
          Plot.dot(data, {x: "anio_mision", y: "mision_hs", strokeOpacity: 0.2, r: 4}),
          Plot.linearRegressionY(data, {x: "anio_mision", y: "mision_hs", ci: 0.95})
        ],
        x:{
          domain:[2009.5,2019.5]
        },
        y:{
          domain: [-500,11000]
        }
      })
      
        d3.select('#chart_13').append(() => chart_13)
    })