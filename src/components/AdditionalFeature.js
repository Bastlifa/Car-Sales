import React from 'react';
import { connect } from 'react-redux'
import { addFeature } from '../actions'

const AdditionalFeature = props => {

  const addFeature = _ =>
  {
    let actionItem = props.store.filter(el => el.id === props.feature.id)[0]
    if(!actionItem) return
    props.addFeature(actionItem)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state =>
{
  // console.log('a', state)
  return {
    store: state.store
  }
}

export default connect(mapStateToProps, {addFeature})(AdditionalFeature)