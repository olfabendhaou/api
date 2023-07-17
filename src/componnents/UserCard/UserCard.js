
import React from 'react'
import { Button, Card } from 'react-bootstrap'
function UserCard(user) {
    return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://www.flaticon.com/free-icon/profile_3135715?term=user&page=1&position=5&origin=search&related_id=3135715#.js/100px180" />
    <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>{user.phone}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card> 
    </div>
    )
}

export default UserCard
