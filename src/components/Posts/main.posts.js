import React from 'react'
import { Container } from 'react-bootstrap'
import PostsAPI from './api.posts'

const Posts = (props) => {
    return (
        <React.Fragment>
            <Container className='mt-4'>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='row'>
                        <PostsAPI />
                    </div>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Posts