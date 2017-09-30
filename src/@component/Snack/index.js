import React, { Component } from "react";

const LeftControlStyle = {};

const RightControlStyle = {};

const defaultBtnStyle = {
  background: "transparent",
  border: "none",
  outline: "none",
  color: "red",
  "&:hover": {
    color: "gray"
  },
  "&:active": {
    color: "red"
  }
};

const DefaultCloseBtn = props => <button style={defaultBtnStyle}>关闭</button>;

class Snack extends Component {
  actionStyle = () => {
    var SnackStyle = {
      position: "fixed",
      left: 0,
      width: "100vw",
      height: "40px",
      lineHeight: "40px",
      background: "#222222",
      color: "white",
      padding: "0 15px",
      fontFamily: "Comic Sans MS",
      display: "flex",
      justifyContent: "space-between",
      transition: "all 0.3s",
      bottom: "-40px"
    };

    var { open } = this.props;
    if (open === true) {
      SnackStyle.bottom = "0";
    } else {
      SnackStyle.bottom = "-40px";
    }

    return SnackStyle;
  };

  render() {
    var LastestStyle = this.actionStyle();

    return (
      <div style={LastestStyle}>
        <div style={LeftControlStyle}>{this.props.leftControl || "默认提醒于"}</div>
        <div style={RightControlStyle}>
          {this.props.rightControl || <DefaultCloseBtn />}
        </div>
      </div>
    );
  }
}

export default Snack;
