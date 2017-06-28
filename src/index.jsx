// import React from "react";
// import ReactDOM from "react-dom";

// external store. internal toggle
// ======================================================/
const store = {
  state: ''
};

class RkFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prop1: ''
    };

    // binders
  }

  //lifecycle hooks
  componentDidMount() {
    console.log("componentDidMount");
  }

  fetchJSON() {
    // ajax load then inject
    store.state = "new message";
    this.changeMsg();
  }

  refreshItems() {
    this.setState(prevState => ({
      msg: store.state
    }));
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

ReactDOM.render(
  <RkFetcher />,
  document.getElementById('root')
);