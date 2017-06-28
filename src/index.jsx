// import React from "react";
// import ReactDOM from "react-dom";

// external store. internal toggle
// ======================================================/
import {store} from "./store.js";

class RkFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'default'
    };

    // binders
    this.refreshItems = this.refreshItems.bind(this);
  }

  //lifecycle hooks
  componentDidMount() {
    console.log("componentDidMount");
    store.state = "zzzz"
    this.refreshItems();
  }

  fetchJSON() {
    // ajax load then inject
  }

  refreshItems() {
    this.setState(prevState => ({
      msg: store.state
    }));
  }

  render() {
    return (
      <div>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <RkFetcher />,
  document.getElementById('root')
);