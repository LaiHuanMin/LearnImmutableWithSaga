import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from 'moment';

export class TopNav extends Component {
  static propTypes = {};

  render() {
    console.log("you render topNav");
    return (
      <div className="row col-md-12">
        <ol className="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">2013</a>
          </li>
          <li className="active">{moment(this.props.requestInfo.get("time")).format("YYYY-MM-DD HH:mm:ss")}</li>
        </ol>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  requestInfo: state.water.getIn(["totalContent", "requestInfo"])
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
