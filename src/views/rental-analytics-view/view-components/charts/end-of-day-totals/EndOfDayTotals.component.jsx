import React, { Component } from 'react';
import ViewModel from './EndOfDayTotals.view-model';

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export class EndOfDayTotals extends Component {

    render() {
      const {rentalLogs} = this.props;
      const graphData = ViewModel.createGraphData(rentalLogs);

      return (
          <div className="graph">   
            <Bubble options={ViewModel.options()} data={graphData} />
          </div>
        );
    }
}

export default EndOfDayTotals;