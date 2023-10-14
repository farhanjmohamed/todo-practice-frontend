import { useState, useEffect } from "react";
import axios from "axios";

export function Home() {
  const [currentId, setCurrentId] = useState();
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState([]);
  const [openField, setOpenField] = useState(false);
  const [updateField, setUpdateField] = useState(true);

  const handleTodosIndex = () => {
    axios.get("http://localhost:3000/todos").then((response) => {
      console.log(response.data);
      setTodos(response.data);
    });
  };

  const handleTodoPost = (e) => {
    e.preventDefault();
    let params = new FormData(e.target);
    axios.post("http://localhost:3000/todos", params).then((response) => {
      window.location.href = "/";
      console.log(response.data);
    });
  };

  const handleTodoShow = (id) => {
    axios.get(`http://localhost:3000/todos/${id}`).then((response) => {
      console.log(response.data);
      setCurrentTodo(response.data);
    });
  };

  useEffect(handleTodosIndex, []);

  const editNotCheckbox = document.getElementById("editNC");

  const editCompleteCheckbox = document.getElementById("editComp");


  return (
    <div className="bg-slate-700 h-auto min-h-screen w-screen">
      <div className="">
        {openField ? (
          <>
            <form onSubmit={handleTodoPost}>
              <input
                type="text"
                name="name"
                placeholder="Task Name"
                className="bg-gray-200 mb-1 rounded-lg p-2 text-black"
              />
              <br />

              <textarea name="note" id="text1" placeholder="note" className="bg-gray-200 text-black rounded-lg p-2" />
              <br />
              <label htmlFor="nc">Not Complete </label>
              <input id="nc" type="checkbox" className="ml-1 mr-1" name="status" value={"not complete"} />
              <label htmlFor="comp" className="ml-1 mr-1">
                Complete{" "}
              </label>
              <input id="comp" type="checkbox" name="status" value={"complete"} className="ml-1 mr-1" />
              <br />
              <br />
              <input type="date" name="date" className="mb-1" />
              <br />
              <button className="bg-gray-300 rounded-md w-20" type="submit">
                submit
              </button>
              <button
                className="bg-gray-300 ml-2 rounded-md w-20"
                onClick={() => {
                  setOpenField(false);
                }}
              >
                Cancel
              </button>
            </form>
          </>
        ) : (
          <>
            <div>
              <button
                className="mx-auto mt-10 text-white w-24 rounded-lg bg-slate-600"
                onClick={() => {
                  setOpenField(true);
                }}
              >
                Add Todo
              </button>
            </div>
          </>
        )}

        <div className="grid grid-cols-1 auto-cols-auto">
          {updateField ? (
            <>
              {todos.map((todo) => (
                <div key={todo.id} className="mt-10 p-4 rounded-xl h-auto w-auto bg-gray-200">
                  <div className="flex gap-4">
                    <p>Task:</p>
                    <p className="">{todo.name}</p>
                  </div>
                  <div className="flex gap-4">
                    <p>Date: </p>
                    <p>{todo.date}</p>
                  </div>
                  <div className="flex gap-4">
                    <p>Status:</p>
                    <p>{todo.status}</p>
                  </div>
                  <div className="flex gap-4">
                    <p>Notes: </p>
                    <p>{todo.note}</p>
                  </div>
                  <br />
                  <button
                    className="bg-gray-100 rounded-xl w-16"
                    onClick={() => {
                      setUpdateField(false);
                      setCurrentId(todo.id);
                      handleTodoShow(todo.id);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      axios.delete(`http://localhost:3000/todos/${todo.id}.json`).then((response) => {
                        console.log(response.data);
                        window.location.href = "/";
                      });
                    }}
                    className="bg-red-300 ml-1 rounded-xl w-16"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="ml-10 mt-10 bg-gray-200 h-3/4 w-3/4">
                <form
                  className="flex gap-2"
                  onSubmit={(event, successCallback) => {
                    event.preventDefault();
                    let formParams = new FormData(event.target);
                    axios.patch(`http://localhost:3000/todos/${currentId}.json`, formParams).then((response) => {
                      console.log(response);
                      window.location.href = "/";
                      successCallback();
                    });
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    defaultValue={currentTodo.name}
                    className="bg-gray-200 mb-1 rounded-lg p-2 text-black"
                  />
                  ;
                  <br />
                  <textarea
                    name="note"
                    id="text1"
                    defaultValue={currentTodo.note}
                    className="bg-gray-200 text-black rounded-lg p-2"
                  />
                  <br />
                  {
                    if (currentTodo.status === "complete") {
                      editCompleteCheckbox.value
                    }
                  }
                  <label htmlFor="nc">Not Complete </label>
                  <input id="editNC" type="checkbox" className="ml-1 mr-1" name="status" value={"not complete"} />
                  <label htmlFor="comp" className="ml-1 mr-1">
                    Complete{" "}
                  </label>
                  <input id="editComp" type="checkbox" name="status" value={"complete"} className="ml-1 mr-1" />
                  <br />
                  <br />
                  <input type="date" name="date" className="mb-1" defaultValue={currentTodo.date} />
                  <br />
                  <button className="bg-gray-300 rounded-md w-20" type="submit">
                    submit
                  </button>
                </form>

                <button
                  className="bg-gray-100 w-16 rounded-lg mt-1"
                  onClick={() => {
                    setUpdateField(true);
                  }}
                >
                  cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
