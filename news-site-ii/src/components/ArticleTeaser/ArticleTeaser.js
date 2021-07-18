import React, { Component } from 'react';
import { Card, Button, Col } from 'react-bootstrap';

class ArticleTeaser extends Component {
    render() {
        /* Note: the { created_date: createdDate } syntax in this destructure is
            taking the value of created_date from this.props and setting it to
            a new variable called createdDate
        */
        const { id, title, created_date: createdDate, handleTitleClick } = this.props;
        return (
            <a href="" onClick={(event) => {
                event.preventDefault();
                handleTitleClick(id);
            }}>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {createdDate}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </a >
        )
    }
}

export default ArticleTeaser;


// Functional solution:
// function ArticleTeaser({ id, title, created_date: createdDate, handleTitleClick }) {
//   return (
//     <div>
//       <a onClick={ () => handleTitleClick(id) }>{ title }</a>
//       <p>{ createdDate }</p>
//     </div>
//   );
// }
