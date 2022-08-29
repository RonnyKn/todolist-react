import {
  Form,
  Button,
  Stack,
  Card,
} from "react-bootstrap";
import { FaPlusCircle } from 'react-icons/fa';
// import "./App.css";

const Add = ({ handleChangeTodoName, todoName, addTodo }) => {
  return (
    <Card className="mt-4 text-center">
      <Card.Body>
        <Stack direction="horizontal" gap={4}>
          <Form.Control
            type="text"
            placeholder="Masukan todo.."
            onChange={handleChangeTodoName}
            value={todoName}
            require
          />
          <Button onClick={addTodo}><FaPlusCircle /></Button>
        </Stack>
      </Card.Body>
    </Card>
  )
}
export default Add;