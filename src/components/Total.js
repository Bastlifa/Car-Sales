import React from 'react';
import { connect } from 'react-redux'

const Total = props => {
  console.log('total price, addprice', props.price, props.additionalPrice)
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state =>
{
  return {
    price: state.car.price,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {})(Total)