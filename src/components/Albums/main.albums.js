import React from 'react'
import { Container } from 'react-bootstrap'
import Collection from './collections.albums'

const Albums = (props) => {

    return (
        <React.Fragment>
            <Container className="mt-4">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <Collection />
            </Container>
        </React.Fragment>
    )
}

export default Albums