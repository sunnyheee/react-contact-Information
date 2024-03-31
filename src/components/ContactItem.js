import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col lg={2}>
        <img
          width={50}
          src="https://cdn-icons-png.flaticon.com/512/6393/6393630.png"
          alt="contact img"
        ></img>
      </Col>
      <Col lg={10}>
        <div>{item.name}</div>
        <div>{item.tel}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
