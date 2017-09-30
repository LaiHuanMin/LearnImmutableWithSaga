import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class TableContent extends Component {
  static propTypes = {};

  render() {
      console.log("you render me!",this.props.name)
    var renderData = this.props.data.toJS();
    return (
      <table className="table">
        <thead>
          <tr>
            {
                renderData.map((item,index)=>{
                    return <td key={index}>{item.label}</td>
                })
            }
          </tr>
        </thead>
        <tbody>
            {
                (()=>{
                    if(renderData.length !== 0 && renderData[0].value !== undefined){
                        return renderData[0].value.map((rowItem,rowIndex)=>{
                            return <tr key={rowIndex} className={["active","success","warning"][parseInt(Math.random() * 3)]}>
                                {
                                    renderData.map((colItem,colIndex)=>{ 
                                        return <td key={colIndex}>
                                                {renderData[colIndex].value[rowIndex]}
                                            </td>
                                    })
                                }
                            </tr>
                        })
                    }
                })() 
            }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TableContent);
