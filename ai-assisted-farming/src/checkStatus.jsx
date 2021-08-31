import React, { Component } from "react";
import Loader from "./asserts/loaderGif1.gif";
import Active from "./asserts/online.gif";
import axios from "axios";

// const URL = "http://localhost:5000";
const URL = "https://sprinkle-foamy-soy.glitch.me";

class CheckStatus extends Component {
  state = { statusFlag: null };
  verifyServer = () => {
    axios
      .get(URL + "/status")
      .then((res) => {
        console.log(res);
        if (res.data == "Active") this.setState({ statusFlag: true });
        else console.log("Server is not Active");
      })
      .catch((err) => {
        console.log("Server is not Active");
      });
  };
  renderScreen = () => {
    if (this.state.statusFlag == null) {
      this.verifyServer();
    }
    if (!this.state.statusFlag) return <img src={Loader} alt="Loading..." />;
    else if (this.state.statusFlag) {
      return <img src={Active} alt="Loading..." />;
    }
  };
  render() {
    return (
      <div
        style={{ paddingTop: "24vh" }}
        className="container-fluid d-flex justify-content-center"
      >
        {this.renderScreen()}
      </div>
    );
  }
}

export default CheckStatus;
