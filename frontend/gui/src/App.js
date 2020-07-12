import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
import Routes from './Routes'
import 'antd/dist/antd.css';

import MyInfo from "./containers/MyInfo";
import * as actions from './store/actions/auth'



class App extends React.Component {

  componentDidMount(){
    this.props.onTryAutoSignUp()
  }

  render(){
    return (
      <div>
        <Router>
            <MyInfo {...this.props}>
              <Routes />
            </MyInfo>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated : state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp : () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
