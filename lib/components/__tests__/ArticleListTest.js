import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

import 'babel-polyfill'; // needed for Node v6 (possible bug: https://github.com/facebook/jest/issues/3687)

describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: { id: 'a'},
      b: { id: 'b'}
    },
    articleActions:{
      lookupAuthor: jest.fn(() => ({}))
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(
      <ArticleList
        {...testProps}
      />
    ).toJSON();

    expect(tree.children.length).toBe(2);

    expect(tree).toMatchSnapshot();
  });

});
