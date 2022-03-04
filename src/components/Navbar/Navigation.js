import { Navbar, Nav, Container } from 'react-bootstrap';
import { CartWidget } from './CartWidget';

const Navigation = () =>{
    return (
        <div>
        <Navbar collapseOnSelect  expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/houses'>Houses</Nav.Link>
                        <Nav.Link href='/lots'>Lots</Nav.Link>
                        <Nav.Link href='/apartments'>Apartments</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav.Link href='/cart'>
                    <CartWidget/>
                </Nav.Link>
            </Container>
        </Navbar>
        </div>
    )
}
export default Navigation