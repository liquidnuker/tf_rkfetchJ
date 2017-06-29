// import React from "react";
// import ReactDOM from "react-dom";

import 'whatwg-fetch';
import {store} from "./js/store.js";
import {checkStatus, parseJSON} from "./js/fetchutils.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: store.msg
    };

    // binders
  }

  // lifecycle hooks
  componentDidMount() {
    console.log("componentDidMount");
    this.fetchJSON();
  }
  
  componentWillUnmount() {
    // abort
  }

  // methods  
  fetchJSON() {
    let self = this;
    const jsonUrl = "./src/js/ajax/ui.json";
    
    fetch(jsonUrl)
    .then(checkStatus)
    .then(parseJSON)
    .then(function (data) {
     // inject to external
     store.msg = data.ui
    })
    .then(function() {
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

      <ul>
      {this.state.msg.map((i) =>
        <li key={i.id}>
        {i.id} | {i.src}
        <hr />
        </li>
        )}
      </ul> 

      <ul>
      {this.state.msg.map((i) =>
        <li key={i.id}>
        {i.type}
        </li>
        )}
      </ul>

      </div> 
      );
    }  
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

