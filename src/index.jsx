// import React from "react";
// import ReactDOM from "react-dom";

import 'whatwg-fetch';
import {store} from "./js/store.js";
import {checkStatus, parseJSON} from "./js/fetchutils.js";

class RkFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'default'
    };

    // binders
    this.fetchJSON = this.fetchJSON.bind(this);
    this.refreshItems = this.refreshItems.bind(this);
  }

  // lifecycle hooks
  componentDidMount() {
    console.log("componentDidMount");
    this.fetchJSON();
    
  }

  // methods

  fetchJSON() {
    const jsonUrl = "./src/js/ajax/ui.json";
    let self = this;
    fetch(jsonUrl)
    .then(checkStatus)
    .then(parseJSON)
    .then(function (data) {
      store.msg = data.ui;
      self.refreshItems();
    })
    .catch(function (error) {
      console.log('request failed', error);
    });
  }

  refreshItems() {
    this.setState(prevState => ({
      msg: store.msg
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