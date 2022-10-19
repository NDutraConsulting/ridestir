import { Component } from 'react';

// Styles
import './styles/RentalsDashboard.css';

import Navbar from './view-components/nav-bar/NavBar.component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Marketing from './pages/marketing';
import Logistics from './pages/logistics';
import Planning from './pages/planning';
import Home from './pages/home';
import LoadingAnimation from '../_components/loading-animation/LoadingAnimation.component';

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
                    <LoadingAnimation />
                    <Routes>
                      <Route path='/' exact element={<Home />} />
                      <Route path='/marketing' element={this.renderMarketing()} />
                      <Route path='/logistics' element={this.renderLogistics()} />
                      <Route path='/planning' element={this.renderPlanning()} />
                    </Routes>
                  </Router>



            </div>
          );
  }

}

export default RentalAnalyticsDashboard;