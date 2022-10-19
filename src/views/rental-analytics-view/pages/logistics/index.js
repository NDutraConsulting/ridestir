import { Component } from 'react';

// Styles
import '../../styles/RentalsDashboard.css';

// Models
import rentalLogsModel from '../../../../models/rentals/RentalLogsModel';

// View Components
import EndOfDayTotals from '../../view-components/charts/end-of-day-totals/EndOfDayTotals.component';
import EventBus from '../../../../events/_event-bus/_EventBus';
import EventRegistry from '../../../../events/event-registry/EventRegistry';

class Logistics extends Component {
  
  constructor(props) {
    super(props);

    const rentalLogs = new rentalLogsModel();

    this.state = {
      searchField:"",
      selectedLocationId:"",
      locationOptions:[],
      rentalLogs: rentalLogs
    };
  }

  componentDidMount() {
    this.state.rentalLogs.fetchData().then(
      (model) => {
        this.setState(
          {locationOptions: model.getLocationsArray(), 
            selectedLocationId: model.getDefaultLocationId()}
            );
            EventBus.publish(EventRegistry.finishedLoading, {});
      }
    );
  }


  render() {

    return (
            <div className="page-wrapper">

              <h3>End of day totals.</h3>
              <p className='description'>Use this graph to determine which locations need bikes and which locations have extra bikes.
               <br/><small>(Note: This would only work in a real world situation if you transfered surplus to deficits every night.)</small>
              </p>

              <EndOfDayTotals rentalLogs={this.state.rentalLogs}/>

            </div>
          );
  }

  /**
   * Usage example: onChangeHandler={this.onSelectLocation.bind(this)}
   * @param {*} event 
   */
   onSelectLocation(event) {
    const selectLocationId = event.target.value.toLocaleLowerCase();
    this.setState({selectedLocationId:selectLocationId});
  }
  
  /**
   * # tells javascript that this is a private function
   * The Arrow function definition does not need .bind(this)
   * Usage example: onChangeHandler={this.#onSelectLocation}
   * @param {*} event 
   */
  #onSelectLocation = (event) => {
    const selectLocationId = event.target.value.toLocaleLowerCase();
    this.setState({selectedLocationId:selectLocationId});
  }

}

export default Logistics;