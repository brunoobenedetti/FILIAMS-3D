import './Navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CartWidget from '../CartWidget/CartWidget';
export const Nav3D =() => {
    return (
        <>
        <Navbar  bg='info' expand='lg'>
        <Container >
            <Navbar.Brand href='#'>FILAM-3D</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' />
            <Navbar.Collapse id="navbarScroll">
                <Nav className='me-auto my0 my-lg-3' style={{ maxHeight: '100%' }}navbarScroll>
                    <Nav.Link href='#action1'>Inicio</Nav.Link>
                    <Nav.Link href='#action2'>soporte</Nav.Link>
                    <NavDropdown title='Impresoras-3D' id='navbarScrollingDropdown'>
                    <NavDropdown.Item href='#action3'>Impresoras 3D</NavDropdown.Item>
                    <NavDropdown.Item href='#action4'>Accesorios</NavDropdown.Item><NavDropdown.Item />
                    <NavDropdown.Item href='#action5'>Insumos</NavDropdown.Item></NavDropdown>
                    <Nav.Link href='#action6' >Modals</Nav.Link>
                </Nav>
                <Form className='d-flex'>
                    <Form.Control
                    type='search'
                    placeholder="busque su pruducto"
                    className='me-5'
                    aria-label='Search'
                    />
                </Form>
            
            <Button  className='BtnCarrito' ><CartWidget/></Button>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
    
}

export default Nav3D;