import React from 'react'
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import logo from './logo.jpg'

function Footer() {
    return (
        <>
            <div className=" footer font-small" style={{background:'black' , marginTop:0 , paddingTop:0}}>
      <Container className="text-center text-md-left text-light">
        <Row>
          <Col className='col-md-3'>
          <Image src={logo} className='rounded-circle' style={{height: 150 , margin: 30, padding:0 , marginBottom:0}}/>
          </Col>
          <Col className='col-md-3 my-5'>
            <h4 className="title" id='about'>About Us</h4><hr/>
            <p>Fudge Co. is a top notch cake and cake shop in Mumbai. Ms. Proprietor Name, the Le Cordon Bleu prepared culinary specialist has fabricated the brand on two fundamental standards – quality and the client.</p>
          </Col>
          <Col className='col-md-3 my-5'>
            <h4 className="title">Contact</h4><hr/>
              <ul style={{listStyle: 'none' , textAlign: 'center'}}>
                <li style={{padding: 5 , background: '#000099' , marginBottom:10}}><a href='www.linkedin.com/in/annanya-ranjan-b021411b1'>LinkedIn</a></li>
                <li style={{padding: 5 , background: '#000099' , marginBottom:10}}><a href='https://t.me/annanya1718'>Telegram</a></li>
              </ul>
          </Col>
          <Col className='col-md-3 my-5'>
            <h4 className="title">Links</h4><hr/>
              <ul style={{listStyle: 'none' , textAlign: 'center'}}>
                <li style={{padding: 5 , background: '#000099' , marginBottom:10}}><a href='#home'>Home</a></li>
                <li style={{padding: 5 , background: '#000099' , marginBottom:10}}><a href='#about'>Menu</a></li>
              </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3 text-light" style={{background:'chocolate' , marginTop:0 , paddingTop:0}}>
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright: <b href="www.linkedin.com/in/annanya-ranjan-b021411b1"> Annanya Ranjan </b>
        </Container>
      </div>
    </div>
        </>
    )
}

export default Footer
