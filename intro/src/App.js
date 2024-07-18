import React from "react";
import Navi from './Navi';
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container,Row,ListGroup,ListGroupItem } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Container>
      <ListGroup>
        <ListGroupItem>
          Cras justo odio
        </ListGroupItem>
        <ListGroupItem>
          Dapibus ac facilisis in
        </ListGroupItem>
        <ListGroupItem>
          Morbi leo risus
        </ListGroupItem>
        <ListGroupItem>
          Porta ac consectetur ac
        </ListGroupItem>
        <ListGroupItem>
          Vestibulum at eros
        </ListGroupItem>
      </ListGroup>
      </Container>
    </div>
  );
}

export default App;
