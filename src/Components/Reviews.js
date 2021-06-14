import React from 'react'
import {Container , Card, CardGroup} from 'react-bootstrap'
function Reviews() {
    return (
        <div id='reviews' style={{marginBottom:0, padding:0}}>
            <Container>
            <h2><span style={{textAlign: 'center'}}>REVIEWS</span></h2>
            <br/>
            <CardGroup>
            <Card bg = 'success'>
                <Card.Body>
                <Card.Title><b>Marvin Sky ⭐⭐⭐⭐⭐ </b></Card.Title>
            <p style={{background: 'pink'}}>
            'Absolutely brilliant! From start to finish it was a seamless process and the qutility was OUTSTANDING!
Will never go anywhere else from now on!”'</p>
                </Card.Body>
            </Card>
            <Card bg = 'primary'>
            <Card.Body>
                <Card.Title><b>Mary Anne ⭐⭐⭐ </b></Card.Title>
            <p style={{background: 'lightgreen'}}>'Absolutely brilliant! From start to finish it was a seamless process and the qutility was OUTSTANDING!
Will never go anywhere else from now on!”'</p>
</Card.Body></Card>
            <Card bg = 'danger'>
            <Card.Body>
            <Card.Title><b>Sid Jackson ⭐⭐⭐⭐</b></Card.Title>
            <p  style={{background: 'lightyellow'}}>'Absolutely brilliant! From start to finish it was a seamless process and the qutility was OUTSTANDING!
Will never go anywhere else from now on!”'</p></Card.Body></Card>
            <Card bg = 'warning'>
            <Card.Body>
            <Card.Title><b>Jack Bean ⭐⭐⭐⭐</b></Card.Title>
            <p  style={{background: 'orange'}}>'Absolutely brilliant! From start to finish it was a seamless process and the qutility was OUTSTANDING!
Will never go anywhere else from now on!”'</p>
</Card.Body>
            </Card>
            </CardGroup>
            </Container>
        </div>
    )
}

export default Reviews
