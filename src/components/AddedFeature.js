import React from 'react';
import { connect } from 'react-redux'
import { removeFeature } from '../actions'

const AddedFeature = props => {
  console.log('b',props.feature)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={_ => props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state =>
{
  console.log('a', state)
  return {
    
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeature)