import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from "react-router-dom"

const Navigation = () => {

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">API Test</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink
                    to="/"
                    style={({ isActive }) => ({
                    color: isActive ? '#5bc0de' : '#FFF',
                    textDecoration: isActive ? 'none' : 'none',
                    borderBottom: isActive ? 'thin solid #5bc0de' : 'none',
                    })} className='me-3'
                    >
                        Home
                    </NavLink>
                    <NavLink
                    to="albums"
                    style={({ isActive }) => ({
                    color: isActive ? '#5bc0de' : '#FFF',
                    textDecoration: isActive ? 'none' : 'none',
                    borderBottom: isActive ? 'thin solid #5bc0de' : 'none',
                    })} className='me-3'
                    >
                        Albums
                    </NavLink>
                    <NavLink
                    to="posts"
                    style={({ isActive }) => ({
                    color: isActive ? '#5bc0de' : '#FFF',
                    textDecoration: isActive ? 'none' : 'none',
                    borderBottom: isActive ? 'thin solid #5bc0de' : 'none',
                    })}
                    >
                        Posts
                    </NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Navigation