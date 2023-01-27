import React from 'react';
import { Row, Col } from "react-bootstrap";

const footer = () => {
  return (
    <footer
        style={{
            width:"100%",
            position: "relative",
            bottom: 0,
            display: 'flex',
            justifyContent: "center"
        }}
    >
        <container fluid>
            <Row>
                <Col className ="text-center py-3" >Copyright &copy; Language Learning Platform</Col>
            </Row>
        </container>
    </footer>
  )
}

export default footer
