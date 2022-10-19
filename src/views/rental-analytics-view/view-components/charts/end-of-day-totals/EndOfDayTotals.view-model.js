class EndOfDayTotalsViewModel {

    static #radiusScaler = 3;

    static createGraphData(rentalLogs) {
  
      console.log("--createEndOfDay--");
      const rScaler = EndOfDayTotalsViewModel.#radiusScaler;

      const graphData = EndOfDayTotalsViewModel.sumData(rentalLogs);

      //console.log(graphData);

      let deficit = JSON.parse(JSON.stringify(graphData.filter(e => e.r < 0)));
      console.log(deficit);

      for(const log of deficit) {
        log.r *= -1;
        log.r += rScaler;

        log.type = "deficit";
      }
      console.log(deficit);


      const surplus = graphData.filter(e => (e.r > 0));
      for(const log of surplus) {
        log.r += rScaler;
        log.type = "surplus";
      }

      return EndOfDayTotalsViewModel.#wrapDataForChartJS(surplus, deficit);

    }



    static sumData(rentalLogs) {
      const graphData = [];
  
      //use the checkin and checkout arrays
      const rentalsStorage1 = EndOfDayTotalsViewModel.#makeCountDictionary(rentalLogs, rentalLogs.getCheckins());      
      const rentalsStorage2 = EndOfDayTotalsViewModel.#makeCountDictionary(rentalLogs, rentalLogs.getCheckouts());
      const dictionary = rentalsStorage2.dictionary;
  
      // Add entries that dont exist
      for(const entry of rentalsStorage1.keys) {
  
        if(dictionary[entry.locationKey][entry.date] === undefined) {
          const newEntry = {y:entry.locationKey, x:entry.date, r:((entry.count*-1))};
          graphData.push(newEntry);
        }
      }
  
      for(const entry of rentalsStorage1.keys) {
        if(dictionary[entry.locationKey] !== undefined) {
          if(dictionary[entry.locationKey][entry.date] !== undefined) {
  
            const dataByHour = dictionary[entry.locationKey][entry.date];
            const newCount = (dataByHour.count - entry.count);
            const newEntry = {y:entry.locationKey, x:entry.date, r:newCount};
            graphData.push(newEntry);
            
          }
        }
      }
      return graphData;
    }


  // # makes this a private
  static #makeCountDictionary(rentalLogs, store) {

    const dictionary = [];
    const keys = [];
    for(const locationKey of Object.keys(rentalLogs.getLocationsDict())) {
        
      const dataByDateAndHour = store[locationKey];

      if(dictionary[locationKey] === undefined) {
        dictionary[locationKey] = [];
      }

      if(dataByDateAndHour !== undefined) {
        
        for(const date in dataByDateAndHour) {

          if(dictionary[locationKey][date] === undefined) {
            dictionary[locationKey][date] = [];
          }

          const dataByHour = dataByDateAndHour[date];
          let count = 0;

          for(const hourKey in dataByHour) {
            count += dataByHour[hourKey].logs.length;
          }
          const entry = {locationKey:locationKey, date:date, count:count};
          dictionary[locationKey][date] = entry;
          keys.push(entry);
        }
        
      }

    }

    return {dictionary:dictionary, keys:keys};
  }

    static #wrapDataForChartJS(surplus, deficit) {
        const rv = {
            
            datasets: [
              {
                label: "End of day deficit.",
                data:deficit,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
              {
                label: "End of day surplus.",
                data:surplus,
                backgroundColor: 'rgba(132, 255, 99, 0.5)',
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

                let isDeficit = 1;
                if(context.raw.type === 'deficit') {
                  isDeficit = -1;
                }
                let bikeCount = (parseInt(context.raw.r)-EndOfDayTotalsViewModel.#radiusScaler);
                bikeCount *= isDeficit;


                return `${context.dataset.label} StationId: ${context.raw.y} | Bike Count: ${bikeCount} | Date: ${context.raw.x}`;
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
          beginAtZero: false,
        }
      };

      const options = {
        plugins:plugins,
        title: title,
        scales: scales
      };

      return options;
  }

}

export default EndOfDayTotalsViewModel;

















/**
 
 This needs a new component

    static createGraphDataOverlap(rentalLogs, locationId) {
  
      console.log("--createEndOfDay--");
      const checkins = EndOfDayTotalsViewModel.#makeGraphData(rentalLogs.getCheckins(), "checkin");      
      const checkouts = EndOfDayTotalsViewModel.#makeGraphData(rentalLogs.getCheckouts(), "checkout");

      return EndOfDayTotalsViewModel.#wrapDataForChartJS(checkins, checkouts);

    }


    static #makeGraphData(store, isCheckout){

      const rScaler = EndOfDayTotalsViewModel.#radiusScaler;
      const graphData = [];
  
      for (const location of Object.values(store)) {
        for (const dataForDate of Object.values(location)) {
          let locationId = "";
          let date = ""
          let count = 0;
          for (const dataForHour of Object.values(dataForDate)) {
            locationId = dataForHour.id;
            date = dataForHour.dateTimeObj.date; 
            count +=dataForHour.logs.length;
          }
          graphData.push({x:locationId, y:date, r:count+rScaler, type:isCheckout});
        }
      }
  
      return graphData;
    }  

 */