import React, { useState, useEffect } from 'react';
import '../HomeComponent/HomeComponent.css'
import axios from 'axios';
import HomeCard from '../Common/HomeCard/HomeCard';
import { withRouter } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';


function HomeComponent(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if (response.status === 200) {
                    console.log('Posts', response);
                    setData(response.data)
                }

            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    const handleClick = (id) => {
        console.log('postDetails', id);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            if(response.status===200){
                localStorage.setItem('postObject', JSON.stringify(response.data))
                props.history.push('/content')
            }
        })
        .catch((err) => {
            console.log(err);
        });
        
    }
    return (
        <div>
            <div>
                <h1>Posts</h1>
            </div>
            <Container>
                {data.map((item) => (
                    <Row key={item.id}>
                        <Col sm={12}>
                            <HomeCard
                                title={item.title}
                                handleClick={handleClick}
                                postId={item.id}
                            />
                        </Col>
                    </Row>
                ))
                }
            </Container>
        </div>
    )
}
export default withRouter(HomeComponent);