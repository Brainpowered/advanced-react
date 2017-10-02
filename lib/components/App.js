import React from 'react';
import DataApi from '../DataApi';
import { data } from '../testData';
import ArticleList from './ArticleList';

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

  // NOTE App knows about Articles and Authors - therefore it should provide action to lookup AuthorId from Article
  // let article component invoke 'smart' action
  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}/>
    );
  }
}

export default App;
