import Header from "./Header/Header";
import ToDoItem from "./ToDoItem/ToDoItem";
import ToDoList from "./ToDoItem/ToDoItem";
import "./styles.css";
import { useState } from "react"

export default function App() {
  const [todoItems, setTodoItems] = useState([
    { todo: "Read SpringBoot", completed: false },
    { todo: "Complete assignments", completed: false },
    { todo: "Prepare breakfast", completed: false },
    { todo: "Sleep for 2 hours", completed: false },
    { todo: "Take a shower", completed: false }])

  const handleDoneClick = (indexPositionOfTodoItemClicked) => {
    todoItems[indexPositionOfTodoItemClicked].completed = !todoItems[indexPositionOfTodoItemClicked].completed
    setTodoItems([...todoItems]);
  }

  const handleRemoveCompletedClick = () => {
    setTodoItems(todoItems.filter((todoItem) => !todoItem.completed))
  }

  return (
    <div className="Application">
      <Header />
      <hr />


      <ul className="TodoList">
        { 
          todoItems.length > 0 ? 
          todoItems.map((todoItem, index) => {
            return <ToDoItem key={index} todo={todoItem} onTodoClick={handleDoneClick} id={index} />
          }) : 
          <h2>Nothing to do buddy. Sleep!</h2>
        }
      </ul>

      <div>
        <button onClick={handleRemoveCompletedClick} className="clear-all-button">
          Remove Completed
        </button>
      </div>

      {/* <ToDoList /> */}

    </div>
  );
}
