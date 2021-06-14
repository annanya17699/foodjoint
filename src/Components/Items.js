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

    const [numCake, setnumCake] = useState(1)
    const [numChocolate, setnumChocolate] = useState(1)
    const [numIcecream, setnumIcecream] = useState(1)

    const [cost] = useState( {
        cake: 200 ,
        chocolate : 20 ,
        icecream : 50
    })

    const numOfIceCream = useSelector(state => state.item.numOfIceCream)
    const numOfCake = useSelector(state => state.item.numOfCake)
    const numOfChocolate = useSelector(state => state.item.numOfChocolate)

    const dispatch = useDispatch()
    return (
        <div id='menu' style={{background: '#abcdef', marginBottom:0, paddingTop:30}}>
        <Container>
            <h2>ITEMS IN SHOP</h2>
        <CardGroup className='my-2'>
            <Card style={{ width: '18rem' , margin:'10px' , background:'#F4C7AB' }}>
                <center><Card.Img style={{height: 100, width:200, paddingTop:10}} src = {chocolate}/></center>
                <Card.Body>
                    <Card.Text>
                        CHOCOLATES<br/>
                         ${cost.chocolate}<br/>
                        Inventory : {numOfChocolate}<br/>
                        Amount : <input type='text' value={numChocolate} onChange= {e => setnumChocolate(e.target.value)}></input><hr/>
                        <Card.Footer>
                            Total Cost : {`${cost.chocolate} * ${numChocolate}`} = <span style={{background:'lightgreen' , padding: '5px'}}>{`${cost.chocolate}` * numChocolate}</span> 
                        </Card.Footer>
                    </Card.Text>
                    <Button variant='danger' onClick= {() => dispatch(buyChocolate(numChocolate))}>Buy {numChocolate} Chocolate</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' , margin:'10px' , background:'#F4C7AB'}}>
                <center><Card.Img style={{height: 100, width:200, paddingTop:10}} src = {cake}/></center>
                <Card.Body>
                    <Card.Text>
                        CAKES<br/>
                         ${cost.cake}<br/>
                        Inventory : {numOfCake}<br/>
                        Amount : <input type='text' value={numCake} onChange= {e => setnumCake(e.target.value)}></input><hr/>
                    
                    <Card.Footer>
                            Total Cost : {`${cost.cake} * ${numCake}`} = <span style={{background:'lightgreen' , padding: '5px'}}>{`${cost.cake}` * numCake}</span>
                        </Card.Footer>
                        </Card.Text>
                    <Button variant='danger' onClick= {() => dispatch(buyCake(numCake))}>Buy {numCake} Cake</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' , margin:'10px' , background:'#F4C7AB'}}>
                <center><Card.Img style={{height: 100, width:200, paddingTop:10}} src = {icecream}/></center>
                <Card.Body>
                    <Card.Text>
                        ICECREAMS <br/>
                        ${cost.icecream}<br/>
                        Inventory : {numOfIceCream}<br/>
                        Amount : <input type='text' value={numIcecream} onChange= {e => setnumIcecream(e.target.value)}></input><hr/>
                    
                    <Card.Footer>
                            Total Cost : {`${cost.icecream} * ${numIcecream}`} = <span style={{background:'lightgreen' , padding: '5px'}}>{`${cost.icecream}` * numIcecream}</span>
                        </Card.Footer>
                        </Card.Text>
                    <Button variant='danger' onClick= {() => dispatch(buyIcecream(numIcecream))}>Buy {numIcecream} Icecream</Button>
                </Card.Body>
            </Card>
        </CardGroup>
        <Button variant='success my-5' onClick={handleShow}>Payment</Button>
        <br/>
        <Modal  show={show} onHide={handleClose} aria-labelledby="modal-center" centered style={{textAlign: 'center'}} >
            <Modal.Body style={{background:'pink'}}>
                <CloseButton onClick={handleClose}/>
                <Modal.Title  id="modal-center" style={{color:'green'}}>Payment Successful!!!</Modal.Title>
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
