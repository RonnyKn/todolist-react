import { Row, Col, Card, Button } from "react-bootstrap";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { FiDelete, FiEdit } from "react-icons/fi";

const List = ({ deleteTodo, todoList, finishTodo }) => {
  return todoList.map((value, index) => {
    return (
      <Card className="text-left">
        <Card.Body className="mt-1">
          <Row>
            {/* nama todo */}
            <Col>
              <h5>{value.todoName}</h5>
            </Col>

            {/* button todo */}
            <Col xl="1">
              <Button
                onClick={() => finishTodo(index)}
                variant={value.status ? "secondary" : "success"}
              >
                {value.status ? <FaTimes /> : <FaCheckCircle />}
              </Button>
            </Col>
          </Row>
          <Button
            variant="danger"
            className="me-2"
            onClick={() => deleteTodo(index)}
          >
            <FiDelete /> Delete
          </Button>
          <Button
            variant="success"
            onClick={() => alert("fitur masih dalam perbaikan")}
          >
            <FiEdit /> Edit
          </Button>
        </Card.Body>
      </Card>
    );
  });
};
export default List;