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
  

  componentDidMount() {
    EventBus.publish(EventRegistry.finishedLoading, {});
  }


  render() {

    return (
            <div className="page-wrapper">

              <h3>Ridestir</h3>
              <p className='description'>Welcome to the rental analytics dashboard.
              </p>


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