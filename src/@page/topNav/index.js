import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class TopNav extends Component {
  static propTypes = {};

  render() {
    console.log("you render topNav");
    return <div />;
  }
}

const mapStateToProps = state => ({
  time: state.water.getIn(["requestInfo", "time"])
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
