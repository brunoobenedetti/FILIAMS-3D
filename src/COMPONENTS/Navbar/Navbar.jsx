import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

const categorias =[
    {id : "IMPRESORA 3D" , path: "/categoria/IMPRESORA 3D", name:"IMPRESORA 3D "},
    {id : "FILAMENTOS-3D" , path: "/categoria/FILAMENTOS-3D", name:"Filamentos "}
]
export const Nav3D =() => {
    return (
        <>
        <Navbar  bg='info' expand='lg'>
        <Container >
            <Navbar.Brand href='#' >FILAM-3D</Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' />
            <Navbar.Collapse id="navbarScroll">
                <Nav className='me-auto my0 my-lg-3' style={{ maxHeight: '100%' }}navbarScroll>
                    <Link className='btn' to='/'>Inicio</Link>
                    {categorias.map(cat => <NavLink key={cat.id} className='btn' to={cat.path}>{cat.name}</NavLink >)}
                </Nav>   
                    
                <Form className='d-flex'>
                    <Form.Control
                    type='search'
                    placeholder="busque su pruducto"
                    className='me-5'
                    aria-label='Search'
                    />
                </Form>
                    <Link to ='/cart'>
                        <CartWidget/>
                    </Link>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
    
}

export default Nav3D;