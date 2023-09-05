import React, { useState } from "react";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTask = (e) => {
    // console.log(e.code);
    if(!e.target.value.trim()) return;
    if (e.code === "Enter") {
      console.log(e.target.value);
      setTodoList([...todoList, { text: e.target.value, completed: false }]);
      e.target.value = "";
      console.log(todoList);
    }
  };

  const deleteTodo = (index) => {
    console.log(index);
    const temp = todoList;
    temp.splice(index, 1);
    setTodoList([...temp]);
  }
  const CompleteToDo =(index) =>{
    const temp=todoList;
    temp[index].completed=true;
    setTodoList([...temp]);
  }

  return (
    <div>
      <div className="container">
        <p className="display-4 fw-bold text-center">ToDo List</p>
        <hr />

        <div className="card">
          <div className="card-header">
            <input
              onKeyDown={addNewTask}
              className="form-control"
              placeholder="Add Task Here"
            />
          </div>
          <div className="card-body">
            <ul className="list-group">
              {todoList.map((obj, index) => {
                return <li className="list-group-item" key ={ index}>
                  { obj.completed ? <span className="badge text-bg-success">Completed</span>: <span className="badge text-bg-warning">Pending</span>}
                    <h3 style={{ textDecoration: obj.completed ? 'line-through':''}}>{obj.text}</h3>
                    <button onClick={() => { deleteTodo(index) }} className="btn btn-danger">Delete</button>
                    <button onClick={()=>{ CompleteToDo(index)}} className="btn btn-primary ms-2">Complete Task</button>
                </li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
              
          