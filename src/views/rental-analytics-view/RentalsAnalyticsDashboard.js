import { Component } from 'react';

// Styles
import './styles/RentalsDashboard.css';

import Navbar from './view-components/nav-bar/NavBar.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Marketing from './pages/marketing';
import Logistics from './pages/logistics';
import Planning from './pages/planning';

class RentalAnalyticsDashboard extends Component {

  renderMarketing = () => {
    return <Marketing />;
  }

  renderLogistics = () => {
    return <Logistics />;
  }
  
  renderPlanning = (rentalLogs) => {
    return <Planning />;
  }

  render() {
    console.log('render()');

    return (
            <div className="App">
              <h1>Bike Rental Analytics</h1>

              <Router>
                    <Navbar />
                    <Routes>
                      <Route path='/marketing' exact element={this.renderMarketing()} />
                      <Route path='/logistics' element={this.renderLogistics()} />
                      <Route path='/planning' element={this.renderPlanning()} />
                    </Routes>
                  </Router>
            </div>
          );
  }

}

export default RentalAnalyticsDashboard;