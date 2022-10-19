// Author Nikko Dutra Bouck
// Contains sorting and query logic for getting data

// Config
import {isTestMode} from '../../config.js';
import EventRegistry from '../../events/event-registry/EventRegistry.js';
import _EventBus from '../../events/_event-bus/_EventBus.js';

class RentalsModel {
  #getUrl;

  // Explore the style difference between Object Dictionaries and Maps
  #locationsDict = {};
  // #bikesMap = new Map();

  // Static cache to prevent unnecissary server requests
  static #cachedData = {};

  // View model data
  #checkoutsByLocation = {};
  #checkinsByLocation = {};

  // Server URLS
  #productionUrl = 'https://lo-interview.s3.us-west-2.amazonaws.com/trips.json';
  #testUrl = 'http://localhost:4000/bikes/small-data';

  constructor(testMode = false) {
    this.#getUrl = this.#productionUrl;
    if(isTestMode()) this.#getUrl = this.#testUrl;
  }

  /** Getters */
  getCachedData() {
    return RentalsModel.#cachedData;
  }

  getCheckouts() {
    return this.#checkoutsByLocation;
  }

  getCheckins() {
    return this.#checkinsByLocation;
  }

  getCheckoutsAtLocation(locationId) {
    return this.#checkoutsByLocation[locationId];
  }

  getCheckinsAtLocation(locationId) {
    return this.#checkinsByLocation[locationId];
  }
  
  getLocationsArray() {
    return Object.values(this.getLocationsDict());
  }

  getLocationsDict() {
    return this.#locationsDict;
  }

  getLocationFromDict(id) {
    return this.getLocationsDict()[id];
  }

  getDefaultLocationId(){
    if(this.getLocationsArray()[0] !== undefined) {
      return this.getLocationsArray()[0].id;
    }
    return "";
  }

  /**
   * Function used for testing the model
   * @param {*} response 
   */
  processFetchedData(response) {
      // Static cache to prevent unnecissary server requests
      RentalsModel.#cachedData = response;
      this.#sortLocations(response);
  }

  async fetchData() {
    _EventBus.publish(EventRegistry.isLoading);
    // Check the cache first
    if (this.getCachedData().length > 0) {
      console.log('Get Station Data from cache');
      this.#sortLocations(this.getCachedData());
      return this;
    }
    
    return await this.refreshData();
  }

  // Used to refresh the bikes cache as needed
  async refreshData() {

    console.log('Get Station Data from server');
    await fetch(this.#getUrl)
    .then((response) => response.json())
    .then((response) => {
      this.processFetchedData(response);
    })
    .catch((err) => 
      {
        console.log("Failed to fetch Rental Logs from server.");
        return {err: "Server Error please try again later."};
      }
    );
    return this;
  }

  /**
   * Private function for sorting 
   * into the checkout and checkin dictionary
   * @param {*} res 
   */
  #sortLocations(res) {

    // Reset the data cache to prevent data duplication;
    this.#checkoutsByLocation = {};
    this.#checkinsByLocation = {};
    this.#locationsDict = {};

    for (const entry of res) {
      const {start_station_name, start_station_id, end_station_name, end_station_id} = entry;
      // Add Start locations to checkouts    
      this.#addToLocation(
        entry, 
        start_station_id, 
        start_station_name, 
        entry.start_time, 
        this.#checkoutsByLocation
        );
      
      // Add Stop locations to checkins
      this.#addToLocation(
        entry, 
        end_station_id, 
        end_station_name, 
        entry.stop_time, 
        this.#checkinsByLocation
        );
    }
  }

  /**
   * Private function for 
   * adding to a local storage
   * @param {Object} entry 
   * @param {Number} id 
   * @param {String} name 
   * @param {DateTime} dateTime 
   * @param {Array} store 
   */
  #addToLocation(entry, id, name, dateTime, store) {
    
    const dateTimeObj = this.#makeDateTimeObj(dateTime);
    this.#addToLocationMap(id, name, dateTimeObj, this.getLocationsDict());

    if (store[id] === undefined) {
      store[id] = {};
    }

    const {date, hour} = dateTimeObj;

    if(store[id][date] === undefined) {
      store[id][date] = {};
    }

    if(store[id][date][hour] === undefined) {
      store[id][date][hour] = {
        id:id,
        name:name,
        dateTimeObj:dateTimeObj,
        logs:[]};
    }
    store[id][date][hour].logs.push(entry);
  }

  /**
   * Private function
   * @param {*} id 
   * @param {*} name 
   * @param {*} dateTimeObj 
   * @param {*} locationStore 
   */
  #addToLocationMap(id, name, dateTimeObj, locationStore) {

    if (locationStore[id] === undefined) {
      locationStore[id] = {
                              id:id, 
                              name:name, 
                              dates:{}
                            };
    }
    // dateTimeObj = {dateTimeKey:dateTimeKey, dateTime:time, hour:hour, date:YYYY-mm-dd};
    //locationStore[id].dateTimeKeys[dateTimeObj.dateTimeKey]=dateTimeObj;
    locationStore[id].dates[dateTimeObj.date]=dateTimeObj.date;

  }

  /**
   * Private function
   * @param {*} dateTime 
   * @returns 
   */
  #makeDateTimeObj(dateTime) {
    const dateTimeArray = dateTime.split(" ");
    const date = dateTimeArray[0];
    const time = dateTimeArray[1];

    const dateArr = (dateTimeArray[0]).split("-");
    const year = dateArr[0];
    const month = dateArr[1];
    const day = dateArr[2];

    const timeArr = dateTimeArray[1].split(":");
    const hour = timeArr[0];
    const min = timeArr[1];
    const dateTimeKey = this.getDateTimeKey(date, hour);
    return {
              dateTimeKey:dateTimeKey, 
              dateTime:dateTime, 
              time:time,
              date:date, 
              year:year,
              month:month,
              day:day,
              hour:hour,
              min:min
            };
  }

  getDateTimeKey(date, hour) {
    return `${date}-${hour}`;
  }

}

export default RentalsModel;
