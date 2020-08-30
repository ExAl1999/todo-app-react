import React, {useState, useEffect} from 'react';
import './App.css';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import db from './firebase'
import firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //read from db
  // when app loads, we need to listen to the database and fetch new todos added/removed
   useEffect(() => {
     //fires whe app.js loads   
     db.collection('todos').orderBy('timestamp', 'desc').onSnapshot( snapshot => {
       setTodos(snapshot.docs.map(doc =>({id: doc.id, todo:doc.data().todo})))
     })   
   }, [])

  const addTodo = (event) => {
    event.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value = {input} onChange ={event => setInput(event.target.value)}/>
        </FormControl>

        <Button type = "submit" disabled = {!input} onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
      </form>
  
      <ul>
        {todos.map(todo => (
          <Todo text = {todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
