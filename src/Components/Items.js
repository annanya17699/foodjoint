import React from 'react'
import {Card, CardGroup , Button, Container} from 'react-bootstrap'
import cake from'./images/cake.jpeg'
import icecream from './images/icecream.jpg'
import chocolate from './images/chocolate.jpg'
import {useSelector, useDispatch} from 'react-redux'
import { buyChocolate, buyCake, buyIcecream } from '../redux/item/ItemAction'

function Items() {
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
                        CHOCOLATES<br/>
                        counter: {numOfChocolate}
                    </Card.Text>
                    <Button onClick= {() => dispatch(buyChocolate())}>Buy Chocolate</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <center><Card.Img style={{height: 'auto', width:200, paddingTop:10}} src = {cake}/></center>
                <Card.Body>
                    <Card.Text>
                        CAKES<br/>
                        counter: {numOfCake}
                    </Card.Text>
                    <Button onClick= {() => dispatch(buyCake())}>Buy Cake</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <center><Card.Img style={{height: 'auto', width:200, paddingTop:10}} src = {icecream}/></center>
                <Card.Body>
                    <Card.Text>
                        ICECREAMS<br/>
                        counter: {numOfIceCream}
                    </Card.Text>
                    <Button onClick= {() => dispatch(buyIcecream())}>Buy Icecream</Button>
                </Card.Body>
            </Card>
        </CardGroup>
        <br/>
        </Container>
        </div>
    )
}

export default Items
