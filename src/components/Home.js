import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Home extends Component {
  state = {
    counter: 0
  };

  render() {
    const { auth } = this.props;

    let user, friends;
    if (auth.isAuthenticate) {
      user = (
        <>
          <h3>{auth.user.firstName}</h3>
        </>
      );
      if (auth.user.friends.length) {
        friends = auth.user.friends.map((item, key) => (
          <li key={item}>{item}</li>
        ));
      } else {
        friends = <li>You have no friends.</li>;
      }
    }

    return (
      <div>
        <h1 className="text-center">Chat-rooms</h1>
        {user}
        <div>
          <ul>{friends}</ul>
        </div>
        <button
          className="btn btn-info"
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}
Home.propTypes = {
  auth: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticate: state.auth.isAuthenticate
});

export default connect(mapStateToProps)(Home);
