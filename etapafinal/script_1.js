let chart;
let data;

let selectElement = d3.select("#input");
selectElement.on("change", (event) => {
  let yearSelected = event.target.value;
  changeValueInput(yearSelected);
  createChart(yearSelected);
});

d3.csv("astronautas.csv", d3.autoType).then((dataChart) => {
  data = dataChart;
  let initYear = selectElement.attr("value");
  changeValueInput(initYear);
  createChart(initYear);
});

function changeValueInput(value) {
  const resultado = document.querySelector('#value-input');
  resultado.textContent = value;
}

function createChart(yearSelected) {
  let dataFilter = data.filter(d => d.anio_mision == yearSelected)
  chart = Plot.plot({
    grid: true,
    line: true,
    nice: true,
    zero: true,
    marks: [
      Plot.barY(
        dataFilter, 
        Plot.groupX(
        {y:"count"},
        {
        x:'nacionalidad', fill:'#FF9A76'
      }
        )),
              ],
    x:{
      label: "Nacionalidad",
    },
    y:{
      domain: [0,20]
    },
    color: {
      legend: true,
      className: 'legend-clusters',
    },
    
  })

  d3.select('#chart svg').remove()
  d3.select('#chart').append(() => chart)
}

