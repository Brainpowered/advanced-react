import DataApi from '../DataApi';
import { data } from '../testData';

const api = new DataApi(data);

describe('DataApi', () => {
  it('exposes articles as an object', () => {
    const articles = api.getArticles();
    const articleId = data.articles[0].id; // we are not testing anything further here - just wan the raw value - no dependencies
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId); // the ID is used as the object property
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('exposes authors as an object', () => {
    const authors = api.getAuthors();
    const authorId = data.authors[0].id; // we are not testing anything further here - just wan the raw value - no dependencies
    const authorFirstName = data.authors[0].firstName;

    expect(authors).toHaveProperty(authorId); // the ID is used as the object property
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });
});
