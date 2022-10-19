import React, { Component } from 'react';
import 'chartjs-adapter-moment';

import {
  Chart as ChartJS,
  LinearScale,
  TimeScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';


ChartJS.register(LinearScale, TimeScale, PointElement, Tooltip, Legend);

export class DoubleBubbleGraph extends Component {

    setupData(redData, redLabel, blueData, blueLabel) {

      const data = {
        datasets: [
          {
            label: redLabel,
            data: redData,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: blueLabel,
            data: blueData,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
      return data;
    }

    render() {
        const {redData, redLabel, blueData, blueLabel, options} = this.props;
        return (
            <div className="graph">
              <Bubble 
                options={options} 
                data={this.setupData(redData, redLabel, blueData, blueLabel)} />
            </div>
          );
    }
}

export default DoubleBubbleGraph;