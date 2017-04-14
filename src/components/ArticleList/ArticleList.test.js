import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import sinon from 'sinon';
import ArticleListContainer from './ArticleList.js';
import ArticleList from '../ArticleTeaser/ArticleTeaser.js';
import News from '../../data/News.json';

it('renders without crashing', () => {
  const component = mount(<ArticleListContainer articles={News} />);
});

it('accepts this.props.articles (an array), and displays a list of ArticleTeaser\'s', () => {
  const component = mount(<ArticleListContainer articles={News} />);
  expect(component.find(ArticleList).length).toBeGreaterThan(0);
});

it('fires the this.props.handleTitleClick function', () => {
  const handleTitleClick = sinon.spy();
  const component = mount(<ArticleListContainer articles={News} handleTitleClick={handleTitleClick} />);
  component.find('a').first().simulate('click');
  expect(handleTitleClick).toHaveProperty('callCount', 1);
});
