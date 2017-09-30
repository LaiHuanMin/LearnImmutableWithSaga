import React, { Component } from "react";
import WaterTable from "@page/ImmutableTable/waterTable/index.js";
import TopNav from "@page/ImmutableTable/topNav/index.js";

class ImmutableTabl extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <WaterTable />
      </div>
    );
  }
}

export default ImmutableTabl;
