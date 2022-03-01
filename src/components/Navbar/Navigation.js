import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../../src/shopping-cart.svg';

const Navigation = () =>{
    return (
        <div>
        <Navbar collapseOnSelect  expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/buy'>Buy</Nav.Link>
                        <Nav.Link href='/sell'>Sell</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link href='/cart'>
                    <img src={logo} className="Cart-logo" alt="logo" /> 
                </Nav.Link>
            </Container>
        </Navbar>
        </div>
    )
}
export default Navigation