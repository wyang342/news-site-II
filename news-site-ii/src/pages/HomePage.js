import React, { Component } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js'
import News from '../data/news.json';

class HomePage extends Component {
    render() {
        return (
            <div>
                <ArticleList articles={News} handleTitleClick={(articleID) => {
                    this.props.history.push(`articles/${articleID}`)
                }} />
            </div>
        );
    }
}

export default HomePage;
