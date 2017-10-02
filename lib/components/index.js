import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    testVar: 'test'
  };

  asyncFunc = () => {
    return Promise.resolve('new test val');
  };

  async componentDidMount() {
    this.setState({ // NOTE: wrap in try/catch for error checking
      testVar: await this.asyncFunc() // requires babel-polyfill
    });
  }
  render() {
    return (
      <h2>Hello ReactJS Class Component - testVar:{this.state.testVar}</h2>
    );
  }
}


ReactDOM.render(<App/>,
  document.getElementById('root')
);
