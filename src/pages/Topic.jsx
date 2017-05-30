import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Actions from '../Redux/SpecRedux'
import Spinner from 'react-spinkit'

class Topic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentWillMount () {
    this.props.getSpec('http://petstore.swagger.io/v2/swagger.json')
  }

  componentWillReceiveProps (newProps) {}

  render () {
    return (
      <div>
        <Spinner name='ball-scale-ripple' />
        <pre>
          {JSON.stringify(this.props.specData, null, 2)}
        </pre>
      </div>
    )
  }
}

Topic.defaultProps = {

}

Topic.propTypes = {

}

function mapStateToProps (state, ownProps) {
  return {
    fetching: state.spec.fetching,
    isSuccess: state.spec.isSuccess,
    message: state.spec.message,
    specData: state.spec.specData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getSpec: bindActionCreators(Actions.getSpec, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)
