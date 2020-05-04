import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import Button from "@material-ui/core/Button";

class Home extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.raju.items.map(item => {
      return (
        <div className="card" key={item.id}>
          <div className="card-image">
            <div className="card-content">
              <p>
                <b>{item.name} </b>
              </p>
            </div>

            <img src={item.image} alt={item.name} height="300" />
          </div>

          <div className="card-content">
            <p>
              <b>Price: {item.price.display} ₹</b>
            </p>
            <div>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  this.handleClick(item.id);
                }}
              >
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h3 className="center">List of Items</h3>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    raju: state.raju
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
