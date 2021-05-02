import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

function Content(props) {
    const [comment, setComment] = useState([]);
    const [author, setAuthor] = useState([])

    // const onHandleContent = () => {
    //     props.history.push('/homepage')
    //   }
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('postObject'))
        axios.get(`https://jsonplaceholder.typicode.com/posts/${data.id}/comments`)
            .then((response) => {
                if (response.status === 200) {
                    setComment(response.data)
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

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
    const contentData = JSON.parse(localStorage.getItem('postObject'));

    return (
        <>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>Title</Card.Title>
                        <Card.Text>
                            {contentData.title}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <CardGroup>
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

                                            {item.body}
                                        </Card.Text>
                                    </Col>
                                </Row>
                            ))
                            }

                        </Card.Body>
                    </Card>

                </CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>Author</Card.Title>
                        <Card.Text>
                            {author}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </>

    )
}
export default withRouter(Content);
