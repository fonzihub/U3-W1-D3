import SingleBook from "/src/components/SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import books from "../data/fantasy.json";

const BookList = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <h1 className="text-center mt-1">Epibooks</h1>
          </Col>
        </Row>
        <Row>
          {books.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mt-3">
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BookList;
