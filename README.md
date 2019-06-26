# News Site Part II

## Initial Setup

Each day of the News Site app will build on the previous day's code. Today, we are going to create 1 new component, 2 pages, and a routing system to build up News Site II. A large majority of this code has already been written for you either here or in the previous day's code. We'll be moving quite a bit of code from one place to another.

1. Before beginning this challenge, copy over `src/components/Article`, `src/Components/ArticleTeaser`, and `src/Components/AppNav` from the `news-site` challenge from Day 4 into the `src/components` directory of this project.

2. Copy over `App.js` from `news-site` to `news-site-II`.

3. We are going to be adding some styling. There are many libraries out there but the one we are going to use is [reactstrap](https://reactstrap.github.io/). Reactstrap is a component library for React that uses Bootstrap styles under the hood. We need to install both `bootstrap` and `reactstrap`.
```sh
$ npm install bootstrap
$ npm install reactstrap
```

4. Add `import 'bootstrap/dist/css/bootstrap.min.css'` to your `src/index.js`. We'll come back to style this app a bit later - at this point, your code should operate exactly like it did with `news-site`. Do not move forward unless it's the same.
 
5. At the moment, the `<a>` links in your `ArticleTeaser` component appends a `#` to the URL when clicked. This can cause a problem when handling route/url changes later today. Let's modify the `onClick` event handler to alleviate this changing `onClick` to this:
```javascript
onClick={(event) => {
  event.preventDefault();
  this.props.handleTitleClick(this.props.id) // remove this.props if you went with functional components
}}
```
`event.preventDefault()` is the key line here - this will prevent the default behavior of the `<a>` tag. This default behavior is what's responsible for adding this hashtag to the URL.


## Component I: ArticleList
We have a new component today that has been stubbed out: the `ArticleList` component. Your mission is to create the content that the component should render, and handle the `props` that are being passed in appropriately. 

Props for `ArticleList`:
1. `articles` - an array of article objects
2. `handleTitleClick` - a function

The `ArticleList` `component` will receive an array of `articles`. `map` over this array and create an array of `ArticleTeaser`s. When you `map` over the `articles` array, it's good to use arrow functions. Take a look at what your `ArticleTeaser` component requires (you may want to utilize the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)):
- id (how can you use the indexes of the articles array to act as IDs?)
- title
- created_date
- handleTitleClick

Don't worry about this not doing anything yet - we will wire it up in the next section.

## React Router
[React Router](https://reacttraining.com/react-router/web/guides/philosophy) is a popular open source library that's used to control paging in a single page app. Using this library, you can load `component`s based on URL paths. For example, you can configure React Router to load ComponentX when the URL `http://localhost:3000/componentx` is requested.

To utilize React Router, let's install:
```sh
$ npm install react-router-dom --save
```

In `App.js`, bring in the necessary libraries from the package you just installed: 

```javascript
import { BrowserRouter as Router, Route } from 'react-router-dom'
```

Let's rewrite our `render`: 
```javascript
render() {
    return (
      <div>
        <h1>AppNav Component</h1>
        <hr />
        <AppNav navItems={this.state.navItems} handleNavClick={(clickedItem) => console.log(clickedItem)} />
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/articles/:articleID" component={ArticlePage} />
          </div>
        </Router>
      </div>
    );
  }
```

At this time, you may see a number of warnings and errors - how do you bring in `HomePage` and `ArticlePage` (found in `src/pages/`)?

Once the `HomePage` component is succesfully brought in, it's about 60% complete - once you've defined your route - and assuming you successfully built the `ArticleList` `component` in the step above - you should see a full list of articles at the `/` path (`http://localhost:3000/`).

You also should be able to see the `ArticlePage` `component` (`src/pages/ArticlePage`) by navigating to `http://localhost:3000/articles/1`. It should simply have the NavBar at the top and the words `Article Page` (boilerplate).

If you are seeing the behavior above, you may continue to the next step. If not, ask your classmates or instructional staff for help.

## HomePage Component

As mentioned above, the `HomePage` is largely complete - it simply renders the `ArticleList` `component`. The one piece of functionality you need to complete is the `handleTitleClick` function being passed into the `ArticleList` `component`. Ultimately, this function should trigger a page change. React Router automatically passes a series of routing-related props to the `HomePage` `component`. One of these is `this.props.history`. You can trigger a page change by calling `this.props.history.push(NEWURL)`. Ultimately, this url should look something like this: `this.props.history.push(/articles/${articleID})`

`articleID` corresponds to the index of an item in the articles array, and is a parameter already being passed into this function. You should be able to click links in your homepage and be able to hit different urls that correspond with the article that you clicked.

## ArticlePage Component
The `ArticlePage` `component` should render the `Article` `component`, and provide the necessary props to this `component`. If you remember, `Article` accepts a variety of props from a single article object in `src/data/News.json` array. In order to determine the array object to use, you can once again use some React Router functionality that's automatically being passed into this - the `ArticlePage` `component`. The index you'll want to target within the articles array will be contained within `this.props.match.params.articleID` - this variable corresponds to [ARTICLEID] in this URL: `http://localhost:3000/article/[ARTICLEID]`

Write the code necessary to find the news article and pass it into the `Article` component and render it all out on the screen. The Article page should render the article's:
- Title
- Created Date
- Byline
- Image (Note: Some moron changed the data structure that we are receiving for news articles. Look inside the JSON and see if you can find the URL for the images. Then, update your code to account for this)
- Abstract

As of right now, keep in mind that people are able to actually hit `/articles/0`, which is not REST-ful - all IDs should start at 1. How can we alter the code to both get the correct article in the JSON file and be REST-ful?

## Style with Bootstrap
Look into [this resource](https://reactstrap.github.io/components/navbar/) to style everything using Reactstrap! Let's make the Nav bar, the list of ArticleTeasers, and the Articles look nice. 
