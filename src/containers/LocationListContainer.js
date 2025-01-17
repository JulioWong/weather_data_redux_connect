import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LocationList from '../components/LocationList'
import { connect } from 'react-redux'
import { setSelectedCity } from '../actions'

class LocationListContainer extends Component {
  handleSelectedLocation = city => {
    this.props.setCity(city)
  }

  render() {
    return (
      <LocationList cities={this.props.cities} 
        onSelectedLocation={this.handleSelectedLocation} ></LocationList>
    )
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  city: PropTypes.array.isRequired,
}

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value))
})

export default connect(null, mapDispatchToPropsActions)(LocationListContainer)