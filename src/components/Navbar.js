import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import StarIcon from "@material-ui/icons/Star";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav-wrapper">
        <div className="container">
          <ul className="left">
            <li>
              <Link to="/">
                <StarIcon />
              </Link>
            </li>
          </ul>

          <ul className="right">
            <li>
              <Link to="/cart">
                <ShoppingCartIcon fontSize="large" className="cartIcon" />(
                {this.props.items.length}) Cart
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.addedItems
  };
};

export default connect(mapStateToProps)(Navbar);
