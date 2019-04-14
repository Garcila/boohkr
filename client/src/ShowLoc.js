import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class ShowLoc extends Component {
  render() {
    const {match, location, history} = this.props;

    return <div>You are now at {location.pathname}</div>;
  }
}
const ShowTheLocationWithRouter = withRouter(ShowTheLocation);

export default withRouter();
