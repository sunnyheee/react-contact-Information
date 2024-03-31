import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };

  return (
    <Form onSubmit={searchByName}>
      <p className="search-title">검색하기</p>
      <Row>
        <Col lg={10}>
          <Form.Control
            type="text"
            placeholder="이름을 압력해주세요"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button variant="primary" type="submit">
            검색
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
