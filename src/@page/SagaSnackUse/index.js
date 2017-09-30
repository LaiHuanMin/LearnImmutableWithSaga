import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Snack from "@component/Snack/index.js";
import { fromJS } from "immutable";

export class SagaSnackUse extends Component {
  static propTypes = {};

  render() {
    var { snackInfo } = this.props;
    var jsSnackInfo = snackInfo.toJS();
    const controlGroup = [
      {
        name: "您好，helloworld"
      },
      {
        name: "12您好，helloworld"
      },
      {
        name: "您好，123helloworld"
      },
      {
        name: "您好2，helloworld"
      }
    ];
    console.log("you render me, SagaSnackUse");
    return (
      <div>
        {controlGroup.map((item, index) => {
          return (
            <div className="col-md-12 row" key={index}>
              <button
                onClick={() => {
                  this.props.showSnack({
                    value: {
                      leftControl: item.name
                    }
                  });
                }}
                className="btn btn-danger"
              >
                show snack
              </button>
              <button
                className="btn btn-warning"
                onClick={this.props.hideSnack}
              >
                close snack
              </button>
            </div>
          );
        })}

        <Snack
          open={jsSnackInfo.open}
          leftControl={jsSnackInfo.leftControl}
          rightControl={jsSnackInfo.rightControl}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  snackInfo: state.snack.get("status")
});

const mapDispatchToProps = {
  showSnack(info) {
    return {
      type: "SAGA_SNACK_STATUS_SHOW",
      payload: info
    };
  },
  hideSnack() {
    return {
      type: "SAGA_SNACK_STATUS_CLOSE"
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SagaSnackUse);
