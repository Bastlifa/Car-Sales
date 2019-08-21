import React from 'react';
import { useDispatch } from 'react-redux'
import { removeFeature } from '../actions'

const AddedFeature = props => {
  const dispatch = useDispatch()
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={_ => dispatch(removeFeature(props.feature))}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature

// const mapStateToProps = state =>
// {
//   // console.log('a', state)
//   return {
    
//   }
// }

// export default connect(mapStateToProps, {removeFeature})(AddedFeature)