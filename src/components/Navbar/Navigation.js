import { Navbar, Nav, Container } from 'react-bootstrap';
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
                    <Nav.Link href="/">
                        <img src={logo} className="Cart-logo" alt="logo"></img>
                    </Nav.Link>
                        <Nav.Link href='/category/houses'>Houses</Nav.Link>
                        <Nav.Link href='/category/lots'>Lots</Nav.Link>
                        <Nav.Link href='/category/apartments'>Apartments</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link href='/cart'>
                    <CartWidget/>
                </Nav.Link>
            </Container>
        </Navbar>
        </header>
    )
}
export default Navigation