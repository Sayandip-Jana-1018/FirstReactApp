import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {

    // let [todos, setTodos] = useState([]);
    // let [newTodo, setNewTodo] = useState("");

    // let addNewTask = () => {
    //     setTodos([...todos, newTodo]);
    //     setNewTodo("");
    // };

    // let updateTodoValue = (event) => {
    //     setNewTodo(event.target.value);
    // }

    // return (
    //     <div>
    //         <h1>To-Do App</h1>
    //         <input placeholder="Write your To-Do List..." 
    //             value={newTodo} 
    //             onChange={updateTodoValue}>
    //         </input>
    //         <br></br><br></br>
    //         <button onClick={addNewTask}>Add Task</button>
    //         <br></br><br></br><br></br>
    //         <hr></hr>
    //         <h2>Todo List:</h2>
    //         <ul>
    //             {
    //                 todos.map((todo) => (
    //                     <li>{todo}</li>
    //                 ))
    //             }
    //         </ul>
    //     </div>
    // );

    let [todos, setTodos] = useState([{task:"Your Todo List", id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, {task: newTodo, id: uuidv4()}]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    return (
        <div>
            <h1>To-Do App</h1>
            <input placeholder="Write your To-Do List..." 
                value={newTodo} 
                onChange={updateTodoValue}>
            </input>
            <br></br><br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br><br></br><br></br>
            <hr></hr>
            <h2>Todo List:</h2>
            <ul>
                {
                    todos.map((todo) => (
                        <li key = {todo.id}>{todo.task}</li>
                    ))
                }
            </ul>
        </div>
    );

}