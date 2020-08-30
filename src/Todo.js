import React, { useState } from 'react'
import './Todo.css'
import { List, ListItem, ListItemText, ListItemAvatar, Modal, makeStyles, Button } from '@material-ui/core';
import db from './firebase'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');

    const updateTodo = () => {
        db.collection('todos').doc(props.text.id).set({
            todo: input
        }, {merge: true})
        setOpen(false);
    }

    return (
        <>
        <Modal
            open={open}
            onClose={e => setOpen(false) }
        >
            <div className = {classes.paper}>
                <h1>I am a Modal</h1>
                <input placeholder = {props.text.todo} value ={input} onChange = {e => setInput(e.target.value)} />
                <Button onClick ={updateTodo}>Update todo</Button>
            </div>
        </Modal>

        <List>
            <ListItem>
                <ListItemAvatar >
                </ListItemAvatar>
                <ListItemText primary={props.text.todo} secondary= "Dummy deadline" />
            </ListItem>
            <button onClick= {e => setOpen(true)}>Edit</button>
            <DeleteForeverIcon onClick = {event => db.collection('todos').doc(props.text.id).delete()}/>
        </List>
        </>
    )
}

export default Todo
