import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import routes from "@route/index.js";
import { Router, hashHistory } from "react-router";

export class App extends Component {
  static propTypes = {};

  render() {
    return <Router history={hashHistory} routes={routes} />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
