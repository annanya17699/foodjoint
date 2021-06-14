import React , {useState} from 'react'
import {Card, CardGroup , Button, Container, Modal, CloseButton} from 'react-bootstrap'
import cake from'./images/cake.jpeg'
import icecream from './images/icecream.jpg'
import chocolate from './images/chocolate.jpg'
import {useSelector, useDispatch} from 'react-redux'
import { buyChocolate, buyCake, buyIcecream } from '../redux/item/ItemAction'


function Items() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const numOfIceCream = useSelector(state => state.numOfIceCream)
    const numOfCake = useSelector(state => state.numOfCake)
    const numOfChocolate = useSelector(state => state.numOfChocolate)
    const dispatch = useDispatch()
    return (
        <div id='menu' style={{background: '#abcdef', marginBottom:0, paddingTop:30}}>
        <Container>
            <h2>ITEMS IN SHOP</h2>
        <CardGroup className='my-2'>
            <Card style={{ width: '18rem' }}>
                <center><Card.Img style={{height: 'auto', width:200, paddingTop:10}} src = {chocolate}/></center>
                <Card.Body>
                    <Card.Text>
                        CHOCOLATES $20<br/>
                        counter: {numOfChocolate}
                    </Card.Text>
                    <Button onClick= {() => dispatch(buyChocolate())}>Buy Chocolate</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <center><Card.Img style={{height: 'auto', width:200, paddingTop:10}} src = {cake}/></center>
                <Card.Body>
                    <Card.Text>
                        CAKES $100<br/>
                        counter: {numOfCake}
                    </Card.Text>
                    <Button onClick= {() => dispatch(buyCake())}>Buy Cake</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <center><Card.Img style={{height: 'auto', width:200, paddingTop:10}} src = {icecream}/></center>
                <Card.Body>
                    <Card.Text>
                        ICECREAMS $50<br/>
                        counter: {numOfIceCream}
                    </Card.Text>
                    <Button onClick= {() => dispatch(buyIcecream())}>Buy Icecream</Button>
                </Card.Body>
            </Card>
        </CardGroup>
        <Button variant='success' onClick={handleShow}>Payment</Button>
        <br/>
        <Modal  show={show} onHide={handleClose} aria-labelledby="modal-center" centered style={{textAlign: 'center'}} >
            <Modal.Body style={{background:'pink'}}>
                <CloseButton onClick={handleClose}/>
                <Modal.Title  id="modal-center" style={{color:'green'}}>Payment Registration!!!</Modal.Title>
                    <Modal.Footer>
                    Thanks For Shopping with Fudge Co. !!!<br/>
                    Enjoy Delicious cakes , chocolates and icecreams!!!
                    </Modal.Footer>
                <Button className="mx-1"variant='info' size='sm' href='#home'>
                Home</Button>
                    <Button className="mx-1"variant='success' size='sm' href='#menu'>
                Menu</Button>
                </Modal.Body> 
            </Modal>
        </Container>
        </div>
    )
}

export default Items
