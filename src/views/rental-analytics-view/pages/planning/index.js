import { Component } from 'react';

// Styles
import '../../styles/RentalsDashboard.css';

class Planning extends Component {
  
  
  render() {
    console.log('render()');

    return (
            <div className="page-wrapper">

              <h3>Hourly checkins and checkouts.</h3>
              <p className='description'>Select a location from the dropdown menu to determine if a location may need more rentals.</p>

            </div>
          );
  }


}

export default Planning;