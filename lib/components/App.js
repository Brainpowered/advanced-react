import React from 'react';
import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
    //console.log(this.state); // NOTE: use the React Developer Console (within Chrome DevTools) to view the 'state' object on the React page
  }
  render() {
    return (
      <div></div>
    );
  }
}

export default App;