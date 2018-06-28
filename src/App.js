import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    let props = this.props;
    let image_slow =
      "https://cdn.dribbble.com/users/594619/screenshots/2339770/full_speed.gif";
      let image_fast='https://s-media-cache-ak0.pinimg.com/originals/ed/0b/a5/ed0ba5b3956bddc53f19e601f0ce14f1.gif' ;

      {props.store.count  <=30 ?  undefined  :
        image_slow=image_fast
      }
    return (
      <div className="App">
        <div className="card">
          <div className="gif">

            <img src={image_slow} /> 
          </div>
          <div className="content">
            <div className="counter-value">
              <h2> {props.store.count}</h2>
              <h6>Km/Hr</h6>
            </div>
            <div className="buttonGroup">
              <button onClick={this.props.increment}>+</button>
              <button onClick={this.props.decrement}>-</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: state
  };
};

const mapStateToDispatch = dispatch => {
  return {
    increment: () => {
      dispatch({
        type: "INCREMENT",
        payload: 1
      });
    },
    decrement: () => {
      dispatch({
        type: "DECREMENT",
        payload: 1
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(App);
