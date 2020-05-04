import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "./actions/cartActions";
import Recipe from "./Recipe";
class Cart extends Component {
  //Remove the item completely
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //Add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };
  //Deduct the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <li className="collection-item avatar" key={item.id}>
            <div className="">
              <img
                src={item.image}
                alt={item.image}
                className=""
                width="300"
                height={300}
              />
            </div>
            <br />
            <div className="item-desc">
              <span className="title">{item.name}</span>

              <p>
                <b>Price: {item.price.display}₹</b>
              </p>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove">
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  >
                    <IndeterminateCheckBoxIcon
                      fontSize="large"
                      variant="filled"
                    />
                  </i>
                </Link>
                <Link to="/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleAddQuantity(item.id);
                    }}
                  >
                    <AddBoxIcon fontSize="large" />
                  </i>
                </Link>
              </div>
              <button
                className="waves-effect waves-light btn red remove"
                onClick={() => {
                  this.handleRemove(item.id);
                }}
              >
                Remove
              </button>
            </div>
          </li>
        );
      })
    ) : (
      <p>Your Shopping Cart is empty.</p>
    );
    return (
      <div className="container">
        <div className="cart">
          <h5>My Cart:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
        <Recipe />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
