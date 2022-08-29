import { useState } from "react"; //pakai state
import "./App.css";
import { Container } from "react-bootstrap";
import List from "./components/List";
import Add from "./components/Add";

function App() {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    const dataTodo = { todoName, status: false };
    setTodoList([dataTodo, ...todoList]);
    setTodoName("");
  };

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((value, idx) => index !== idx))
  }

  const finishTodo = (index) => {
    const cloneTodoList = [...todoList];
    cloneTodoList[index].status = !cloneTodoList[index].status;
    setTodoList(cloneTodoList);
  }

  const handleChangeTodoName = (e) => {
    const data = e.target.value;
    setTodoName(data);
  };


  return (
    <div className="App">
      <Container>
        <h1 className="text-center mt-4">TODO WEB APP</h1>

        <Add
          handleChangeTodoName={handleChangeTodoName}
          todoName={todoName}
          addTodo={addTodo}
        />

        <div className="mt-3">
          <List
            todoList={todoList}
            deleteTodo={deleteTodo}
            finishTodo={finishTodo}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
