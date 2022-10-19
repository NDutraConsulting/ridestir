
class RentalsByHourViewModel {

    static #radiusScaler = 4;

    static options() {
      const plugins = {
        tooltip: {
              callbacks: {
                label: function(context) {
                  const bikeCount = parseInt(context.raw.r)-RentalsByHourViewModel.#radiusScaler;
  
                  return `${context.dataset.label} - Bike Count: ${bikeCount} Date: ${context.raw.x} ${context.raw.y}:00`;
                }
              }
          }
        };
  
        const title = {
          display: true,
          text: 'Bike Usage by Location',
        };
  
        const scales = {
          x: {
            type: 'time',
            time: {
              unit: 'day'
            },
          },
          y: {
            beginAtZero: true,
          }
        };
  
        const options = {
          plugins:plugins,
          title: title,
          scales: scales
        };
  
        return options;
    }

  static createGraphData(location) {
    //console.log(location);
    const graphData = [];
    if(location !== undefined) {

      // Map data for the graph
      for(const date in location) {
        const dataByDate = location[date];

        for(const hourKey in dataByDate) {
          const data = dataByDate[hourKey];
          graphData.push({
                          y: data.dateTimeObj.hour,
                          x: data.dateTimeObj.date,
                          r: data.logs.length + RentalsByHourViewModel.#radiusScaler,
                          data: data.logs
                        });
        }
      }
    }

    //console.log(graphData);
    return graphData;
  }
}

export default RentalsByHourViewModel;