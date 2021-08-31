import React, { Component } from "react";

class Homepage extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="container home_page_container">
          <div className="d-flex justify-content-center">
            <span style={{ fontSize: "60px", paddingTop: "10vh" }}>
              Ai Assisted Farming
            </span>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Homepage;
