import { Component } from 'react';

// Styles
import '../../styles/RentalsDashboard.css';


class Logistics extends Component {
  
  render() {
    console.log('render()');

    return (
            <div className="page-wrapper">

              <h3>End of day totals.</h3>
              <p className='description'>Use this graph to determine which locations need bikes and which locations have extra bikes.
               <br/><small>(Note: This would only work in a real world situation if you transfered surplus to deficits every night.)</small>
              </p>

            </div>
          );
  }

}

export default Logistics;