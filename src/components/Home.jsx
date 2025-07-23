import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import books from "../data/fantasy.json";

const Home = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <h1 className="text-center mt-1">Library</h1>
          </Col>
        </Row>
        <Row>
          {books.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3} className="mt-3">
              <Card className="h-100">
                <Card.Img
                  className="h-50"
                  variant="top"
                  src={book.img}
                  alt={"immagine di " + book.title}
                />
                <Card.Body className=" d-flex flex-column flex-grow-1">
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.category}</Card.Text>
                  <Card.Text>
                    <h6>Price</h6>${book.price}
                  </Card.Text>
                  <Button className="mt-auto" variant="primary">
                    Go to cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
