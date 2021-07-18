import React, { Component } from 'react';
import Article from '../components/Article/Article.js'
import News from '../data/news.json';

class ArticlePage extends Component {
    render() {
        const articleID = this.props.match.params.articleID;
        const article = News[articleID - 1];

        return (
            <Article {...article} />
        );
    }
}

export default ArticlePage;
