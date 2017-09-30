import React, { Component } from "react";

const routeList = [
  {
    name: "Immutable测试数据",
    desc: "对比了一下，感觉Immutable这个性能的确提升很多",
    path: "/immutable"
  }
];

class Entry extends Component {
  render() {
    return (
      <div className="row col-md-12">
        <div className="list-group">
          <a href="#" className="list-group-item active">
            <h4 className="list-group-item-heading">Learn Saga And Imm</h4>
          </a>
          {routeList.map((item, index) => {
            return (
              <a href="/#/immutable" key={index} className="list-group-item">
                <h4 className="list-group-item-heading">{item.name}</h4>
                <p className="list-group-item-text">{item.desc}</p>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Entry;
