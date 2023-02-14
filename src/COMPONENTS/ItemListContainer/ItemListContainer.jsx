
import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const ItemLisContainer = () => {

const [count, setCount ] = useState(0);
/* const [boleano, setBoleano] = useState (true) */
/* 
useEffect(() => {
    console.log('simulacion a una tarea pesada o async - EJ.:fetch(), etc - 1')
}) */

let fecha = Date(); 

const hanldeCount = () => {
    console.log(count)
    setCount(count + 1)
}

console.log('renderin de componente container 2')
    return (
        <>
        <h2>contador: {count}</h2>
        <h2>fecha de ultimo Click: {fecha}</h2>
        
        <div className='cards'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src=" " />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={ hanldeCount }>Go somewhere</Button>
        </Card.Body>
    </Card>
        </div>
        
        </>
    )
}

export default ItemLisContainer