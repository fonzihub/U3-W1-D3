import Card from "react-bootstrap/Card";

const SingleBook = ({ book }) => {
  return (
    <Card className="h-100">
      <Card.Img
        className="h-50"
        variant="top"
        src={book.img}
        alt={"immagine di  " + book.title}
      />
      <Card.Body className=" d-flex flex-column flex-grow-1">
        <Card.Title>{book.title}</Card.Title>
        <Card.Text className="d-flex flex-grow-1">{book.category}</Card.Text>
        <Card.Text className="d-flex flex-column justify-content-end">
          <strong>Price</strong>
          {book.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
