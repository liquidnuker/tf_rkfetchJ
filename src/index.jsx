// import React from "react";
// import ReactDOM from "react-dom";

// external store. internal toggle
// ======================================================/
import 'whatwg-fetch';
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

  // lifecycle hooks
  componentDidMount() {
    console.log("componentDidMount");
    store.state = "zzzz"
    this.refreshItems();
  }

  fetchJSON() {
    // fetch(jsonUrl)
    // .then(checkStatus)
    // .then(parseJSON)
    // .then(function (data) {

    // .then(function () {

    // .catch(function (error) {
    //   console.log('request failed', error);
    // });
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