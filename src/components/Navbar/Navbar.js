import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import './Navbar.css';

function NavbarFunction() {


    return (
        <>

            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Travel destination</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/city/:id">Tour Details</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


        </>
    )
}

export default NavbarFunction;