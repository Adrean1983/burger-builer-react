import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDraw from '../Navigation/SideDraw/SideDraw';

class Layout extends Component {
  state = {
    showSideDraw: false,
  };

  sideDrawClosedHandler = () => {
    this.setState({ showSideDraw: false });
  };

  render() {
    return (
      <Auxillary>
        <Toolbar />
        <SideDraw open={this.state.showSideDraw} closed={this.sideDrawClosedHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Auxillary>
    );
  }
}

export default Layout;
