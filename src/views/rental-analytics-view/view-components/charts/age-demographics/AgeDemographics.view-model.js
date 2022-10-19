class AgeDemographicsViewModel {

    static createGraphData(rentalLogs, locationId) {
        
      const location = rentalLogs.getCheckoutsAtLocation(locationId);
      const graphData = [];
  
      let youngestBirthYear = 0;
      let oldestBirthYear = 9999999;
      const ageCounts = {};
  
      if(location !== undefined) {
  
        for(const date in location) {
          const dataByDate = location[date];
  
          for(const hourKey in dataByDate) {
            const data = dataByDate[hourKey];
  
            for(const log of data.logs) {
  
              const year = parseInt(log["birth year"]);
              if(year > 0) {
                const yearKey = log["birth year"];
                
                if(ageCounts[yearKey] === undefined) {
                  const count = 0;
                  ageCounts[yearKey] = {x:yearKey, y:count};
                }
                ageCounts[yearKey].y++;

  
                oldestBirthYear = Math.min(oldestBirthYear, year);
                youngestBirthYear = Math.max(youngestBirthYear, year);
              }
            }
          }
  
        }
        graphData.push({
          ageCounts: ageCounts,
          oldestBirthYear: oldestBirthYear,
          youngestBirthYear: youngestBirthYear,
          locationId:location.id,
          locationName:location.name,
        });
      }

      return AgeDemographicsViewModel.#wrapDataForChartJS(Object.values(ageCounts));
    }

    static #wrapDataForChartJS(data) {
        const rv = {
            datasets: [
              {
                label: "Age Demographics",
                data:data,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
            ],
          };
        return rv;
    }

    static options() {
      const plugins = {
        tooltip: {
              callbacks: {
                label: function(context) {  
                  return `Count: ${context.raw.y}`;
                }
              }
          }
        };
  
        const title = {
          display: true,
          text: 'Age Demographics',
        };
  
        const scales = {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'probability'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'hola'
            }
          }],
        };
  

        
        const options = {
          responsive: true,
          legend: {
            position: 'top',
          },
          plugins:plugins,
          title: title,
          scales: scales
        };
  
        return options;
    }

}

export default AgeDemographicsViewModel;