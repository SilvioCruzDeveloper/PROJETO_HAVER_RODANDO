import { Container, Nav, Navbar } from "react-bootstrap";
import { GerenciarLogin } from "./GerenciarLogin";

function NavBar(props) {
  return (
    <Container fluid style={{ padding: 0 }}>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        style={styles.navbar}
      >
        <Container>
          <Navbar.Brand href="/home" style={styles.brand}>
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/e-commerce-logo-design-template-5dcf2e4daab6379d4824c6dc04e26f17_screen.jpg?ts=1645336764"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="E-Commerce Logo"
              style={styles.logo}
            />
            E-Commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" style={styles.navLink}>
                Home
              </Nav.Link>
              <Nav.Link href="/produtos" style={styles.navLink}>
                Produtos
              </Nav.Link>
            </Nav>
            <Navbar.Text className="justify-content-end">
              <GerenciarLogin />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ marginTop: "70px" }}>{props.children}</div>
    </Container>
  );
}

const styles = {
  navbar: {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  brand: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    marginRight: "10px",
  },
  navLink: {
    margin: "0 10px",
    transition: "color 0.2s",
    color: "#ffffff",
  },
  navLinkHover: {
    color: "#f0ad4e",
  },
};

export default NavBar;
