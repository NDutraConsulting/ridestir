import { Component } from 'react';

// Styles
import '../../styles/RentalsDashboard.css';

// View Components
import EventBus from '../../../../events/_event-bus/_EventBus';
import EventRegistry from '../../../../events/event-registry/EventRegistry';

class Home extends Component {
  

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

}

export default Home;