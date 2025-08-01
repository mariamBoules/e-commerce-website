import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import cart from "../../images/cart.png";
import login from "../../images/login.png";
import logo from "../../images/logo.png";
import { Navbar } from "react-bootstrap";
import useNavBarSearch from "../../useHook/Search/useNavBarSearch";

function NavBar() {
  const [onChangeKeyword] = useNavBarSearch();
  let word = "";
  if (localStorage.getItem("keyword")) word = localStorage.getItem("keyword");

  return (
    <Navbar expand="lg" className="px-3" variant="dark" bg="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} width="100" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex flex-grow-1 me-3">
            <Form.Control
              onChange={onChangeKeyword}
              value={word}
              type="search"
              placeholder="Search products..."
              className="me-2 w-100"
              aria-label="Search"
            />
          </Form>

          <div className="d-flex align-items-center gap-3 p-2">
            <a href="/login">
              <img src={login} alt="Login" width="30" height="30" />
            </a>
            <a href="/cart">
              <img src={cart} alt="Cart" width="30" height="30" />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
