import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class One extends Component {
  static propTypes = {};

  render() {
      console.log("you render one")
    return <div>
    {this.props.one.two}
    </div>;
  }
}

const mapStateToProps = state => ({
  one: {
    two: state.water.getIn(["totalContent", "table", "0"])
  }
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(One);
