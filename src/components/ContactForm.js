import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  let [name, setName] = useState("");
  let [tel, setTel] = useState("");
  let dispatch = useDispatch();

  const createContact = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, tel } });
    setName("");
    setTel("");
  };
  return (
    <Form onSubmit={(e) => createContact(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>전화번호</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone Number"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        추가
      </Button>
    </Form>
  );
};

export default ContactForm;
