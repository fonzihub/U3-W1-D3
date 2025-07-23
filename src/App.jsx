import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import MyFooter from "./components/MyFooter";
import Home from "./components/Home";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Welcome />
      <CustomNavbar />
      <Home />
      <MyFooter />
    </>
  );
}

export default App;
