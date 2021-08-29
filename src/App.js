import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <ListGroup as="ul">
          <ListGroup.Item as="li" active>
            First Item
          </ListGroup.Item>
          <ListGroup.Item as="li">Second Item</ListGroup.Item>
          <ListGroup.Item as="li" disabled>
            Third Item
          </ListGroup.Item>
          <ListGroup.Item as="li">Fourth Item</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}

export default App;
