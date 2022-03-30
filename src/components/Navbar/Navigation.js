import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../logo.png"
import { CartWidget } from './CartWidget';

const Navigation = () =>{
    return (
        <header>
        <Navbar collapseOnSelect  expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                    <Nav.Link as={Link} to="/">
                        <img src={logo} className="Cart-logo" alt="logo"></img>
                    </Nav.Link>
                        <Nav.Link as={Link} to='/category/houses'>Houses</Nav.Link>
                        <Nav.Link as={Link} to='/category/lots'>Lots</Nav.Link>
                        <Nav.Link as={Link} to='/category/apartments'>Apartments</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link as={Link} to='/cart'>
                    <CartWidget/>
                </Nav.Link>
            </Container>
        </Navbar>
        </header>
    )
}
export default Navigation