import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Todo from "./Todo";

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {i < todos.length - 1 && <Divider key={"divider-" + todo.id} />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
};
export default TodoList;
