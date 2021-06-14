import React , { useEffect } from 'react'
import {Container , Card, CardDeck} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchUser } from '../redux/user/UserAction'

function Reviews({ userData, fetchUser }) {
useEffect(() => {
    fetchUser()
  }, [fetchUser])
return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div id='reviews' style={{marginBottom:0, padding:20}}>
      <Container>
        <h2><span style={{textAlign: 'center'}}>REVIEWS</span></h2>
        <br/>
          <CardDeck>
        {userData &&
          userData.users &&
          userData.users.map(user => 
            <Card bg = 'success' style={{marginBottom: 10}}> 
          <Card.Body><p style={{background: 'pink'}}><b>{user.name} ⭐⭐⭐⭐⭐ </b>
          <br/>
          'Absolutely brilliant! From start to finish it was a seamless process and the qutility was OUTSTANDING!
             Will never go anywhere else fr<p >om now on!”'</p></p></Card.Body>
            </Card>)}
          </CardDeck>
        </Container>
        </div> 
  )
}



const mapStateToProps = state => {
    return {
      userData: state.user
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchUser: () => dispatch(fetchUser())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Reviews)
