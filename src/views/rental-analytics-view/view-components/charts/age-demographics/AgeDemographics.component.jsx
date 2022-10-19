import React, { Component } from 'react';
import ViewModel from './AgeDemographics.view-model';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
 
class AgeDemographics extends Component {

    render() {
      const {rentalLogs, locationId} = this.props;
      const graphData = ViewModel.createGraphData(rentalLogs, locationId);

      return (
          <div className="graph">   
            <Bar options={ViewModel.options()} data={graphData} />
          </div>
        );
    }
}

export default AgeDemographics;