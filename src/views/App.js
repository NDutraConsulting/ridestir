import { Component } from 'react';
import './_styles/index.css';
import RentalAnalyticsDashboard from './rental-analytics-view/RentalsAnalyticsDashboard';

class App extends Component {
  
  render() {
    console.log('render()');

    return (
            <div className="App">
              {/* LoadingAnimation is an event driven decoupling demonstration */}       
              <RentalAnalyticsDashboard />
            </div>
          );
  }
}

export default App;