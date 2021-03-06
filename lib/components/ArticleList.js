import React from 'react';
import Article from './Article';

// note the functional nature of this declared object - does nore explicitly require a 'class' definition
const ArticleList = (props) => {
  return (
    <div>
      {Object.values(props.articles).map((article) =>
        <Article
          key={article.id}
          article={article}
          actions={props.articleActions}
        />
      )}
    </div>
  );
};

export default ArticleList;
