import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import WaterTable from '@page/waterTable/index.js'

export class App extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className="container">
        <WaterTable/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)