import React, { Component } from "react";
import PropTypes from "prop-types";
import TableContent from "./component/table.js";
import { connect } from "react-redux";
import { Seq, List, fromJS } from "immutable";

export class WaterTable extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="row col-md-12">
        {this.props.tableData
          .map((val, key) => {
            return (
              <div key={key} className="panel panel-success">
                <div className="panel-heading">
                  <h3 className="panel-title">{key}</h3>
                </div>
                <div className="panel-body">
                  <div className="col-md-12 btn-group">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        var originData = val.toJS();
                        originData.map((item, index) => {
                          item.value.push(parseInt(Math.random() * 4));
                        });
                        this.props.updateTable({
                          entry: ["totalContent", "table", key],
                          value: fromJS(originData)
                        });
                      }}
                    > 
                      Add
                    </button>
                    <button className="btn btn-danger">Reduce</button>
                    <button className="btn btn-warning">CleanAll</button>
                  </div>
                  <TableContent data={val} name={key} />
                </div>
              </div>
            );
          })
          .toList()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tableData: state.water.getIn(["totalContent", "table"])
});

const mapDispatchToProps = {
  updateTable(payload) {
    return {
      type: "MUTABLE_ANYTHIN",
      payload
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(WaterTable);
