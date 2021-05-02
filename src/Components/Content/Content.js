import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
/**
 * This Component used for Content Page
 * @param {*} props 
 * @returns Content Details with its Fields
 */
function Content(props) {
    const [comment, setComment] = useState([]);
    const [author, setAuthor] = useState([]);
    /**
     * This is used for get the comments
     */
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('postObject'))
        axios.get(`https://jsonplaceholder.typicode.com/posts/${data.id}/comments`)
            .then((response) => {
                if (response.status === 200) {
                    console.log("comment", response);
                    setComment(response.data)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    /**
     * This used for get the Author Name
     */
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('postObject'))
        axios.get(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
            .then((response) => {
                if (response.status === 200) {
                    setAuthor(response.data.name)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    /**
     * contentData store the localStorage object
     */
    const contentData = JSON.parse(localStorage.getItem('postObject'));
    return (
        <>
            <Container>
                <Card>
                    <Card.Body>
                        <Card.Title>Title</Card.Title>
                        <Card.Text>
                            {contentData.title}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Body</Card.Title>
                        <Card.Text>
                            {contentData.body}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card >
                    <Card.Body>
                        <Card.Title>Comments</Card.Title>

                        {comment.map((item) => (
                            <Row key={item.id}>
                                <Col sm={12}>
                                    <Card.Text>
                                        {item.name}: {item.body}
                                    </Card.Text>
                                </Col>
                            </Row>
                        ))
                        }

                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Author</Card.Title>
                        <Card.Text>
                            {author}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>

    )
}
export default withRouter(Content);
