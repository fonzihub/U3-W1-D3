import Alert from "react-bootstrap/Alert";

function BasicExample() {
  return (
    <>
      {["info"].map((variant) => (
        <Alert className=" mb-0" key={variant} variant={variant}>
          This is my library —check it out!
        </Alert>
      ))}
    </>
  );
}

export default BasicExample;
