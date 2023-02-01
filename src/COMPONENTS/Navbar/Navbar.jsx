import './Navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Nav3D =() => {
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
            
            <Button  className='BtnCarrito' ><svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' className='bi bi-cart4' viewBox='0 0 16 16'>
<path d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z'/>
</svg><span children='contadorCarrito'>0</span></Button>


        <Button className='btnLogin'><svg xmlns='  http://www.w3.org/2000/svg'  fill='currentCol' viewBox='0 0 16 16'>
        <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z'/>
        <path fill='evenodd' d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'/>
</svg>
        </Button>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
    
}

export default Nav3D;