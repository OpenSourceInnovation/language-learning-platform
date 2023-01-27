import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './MainScreen.css'
import { Container, Row } from "react-bootstrap";
import french from '/workspaces/language-learning-platform/frontend/src/components/Courses/french.webp'
import english from '/workspaces/language-learning-platform/frontend/src/components/Courses/eng.webp'
import hindi from '/workspaces/language-learning-platform/frontend/src/components/Courses/hindi.jpg'
const Courses = () => {
  return (
    <div>
  <div className="mainback">
        <Container>
          <Row>
            <div className="page">
              <h1 className="heading">Welcome</h1>
              <hr />
              Learn a new language with ease on our interactive platform. Choose from a variety of languages, engage in interactive lessons, and track your progress with personalized study plans
            </div>
          </Row>
        </Container>
      </div>
    <div className='Courses'>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={english} />
        <Card.Body>
          <Card.Title>English Learning Course</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={french} style={{height:'13rem'}}/>
        <Card.Body>
          <Card.Title>French Learning Course</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={hindi} style={{height:'12rem'}}/>
        <Card.Body>
          <Card.Title>Hindi Learning Course</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>


    </div>
  )
}

export default Courses
