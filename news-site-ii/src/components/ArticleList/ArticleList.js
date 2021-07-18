import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'
import { Row } from 'react-bootstrap';

class ArticleList extends Component {
    getArticleTeasers = (articles, handleTitleClick) => {
        const articleTeasers = articles.map((article, index) => {
            return < ArticleTeaser key={index} id={index + 1} title={article.title} created_date={article.created_date} handleTitleClick={handleTitleClick} />
        })
        return articleTeasers;
    }


    render() {
        const { articles, handleTitleClick } = this.props;  // destructure props inside render()

        return (
            <Row xs={1} md={5} className="g-4">
                {this.getArticleTeasers(articles, handleTitleClick)}
            </Row>
        )

    }
}

export default ArticleList;
