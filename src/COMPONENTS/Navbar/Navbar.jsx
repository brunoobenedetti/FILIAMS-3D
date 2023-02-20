import './Navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
export const Nav3D =() => {
    return (
        <>
        <Navbar  bg='info' expand='lg'>
        <Container >
            <Navbar.Brand href='#'>FILAM-3D</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' />
            <Navbar.Collapse id="navbarScroll">
                <Nav className='me-auto my0 my-lg-3' style={{ maxHeight: '100%' }}navbarScroll>
                    <Link to='/'>Inicio</Link>
                    <NavLink className={({isActive})=>isActive ? 'btn btn-dark' : 'btn btn-outline-dark'} to='/categoria/impresoras 3d'>Impresoras 3D</NavLink>
                    <Nav.Link href='#action6' >Models</Nav.Link>
                </Nav>
                <Form className='d-flex'>
                    <Form.Control
                    type='search'
                    placeholder="busque su pruducto"
                    className='me-5'
                    aria-label='Search'
                    />
                </Form>
                    <Link to ='/detalle'>
                        <CartWidget/>
                    </Link>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
    
}

export default Nav3D;