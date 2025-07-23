import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Welcome />
      <CustomNavbar />
      <BookList />
      <MyFooter />
    </>
  );
}

export default App;
