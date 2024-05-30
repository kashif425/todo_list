import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] =useState(null);

  const handleSubmit = () => {
      if (editId !== null) {
        setTodos(todos.map(todo => todo.id === editId ? { id: editId, text: input } : todo));
        setEditId(null);
      } else {
        setTodos([...todos, { id: Date.now(), text: input }]);
      }
      setInput("")
    };

  const editItem = (id) => 
    {
      const todo = todos.find(todo => todo.id === id);
      setInput(todo.text);
      setEditId(id)
    };
  

  const deleteItem = (id) => {
    setTodos(todos.filter( todo => todo.id !== id))
  };


  return (
    <div className="App">
      <h1>Todo App</h1>

      <div className="container">

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="write here..."
        ></input>

        <button type="submit" onClick={handleSubmit}>
          Add
        </button>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              
              {todo.text}
            <button onClick={() => editItem(todo.id)}>Edit</button>
            <button onClick={() => deleteItem(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}

export default App;
