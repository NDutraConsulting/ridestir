import React, { Component } from 'react';

import {DoubleBubbleGraph} from '../../../../_components/charts/double-bubble-graph/DoubleBubbleGraph.component';
import ViewModel from './RentalsByHour.view-model';
 
class RentalsByHour extends Component {

    render() {
      const {rentalLogs, locationId} = this.props;
      const checkins = ViewModel.createGraphData(rentalLogs.getCheckinsAtLocation(locationId));
      const checkouts = ViewModel.createGraphData(rentalLogs.getCheckoutsAtLocation(locationId));

      return (
          <div>   
              <DoubleBubbleGraph 
                redData={checkouts} 
                redLabel={"Checkouts"}
                blueData={checkins} 
                blueLabel={"Checkins"}
                options={ViewModel.options()}  
                />
          </div>
        );
    }
}

export default RentalsByHour;