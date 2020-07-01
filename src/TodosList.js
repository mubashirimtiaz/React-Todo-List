import React, { Component } from "react";
import Todos from "./Todos";
import TodosFrom from "./TodosForm";
import { v4 as uuidv4 } from "uuid";
import "./TodosList.css";

export default class TodosList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }
  addTodo = (task) => {
    let newTask = { ...task, id: uuidv4() };
    this.setState((currState) => ({
      todos: [...currState.todos, newTask],
    }));
  };
  removeTodo = (id) => {
    this.setState((currState) => ({
      todos: currState.todos.filter((todo) => todo.id !== id),
    }));
  };
  updateTodo = (id, updatedTask) => {
    const newUpdatedTask = this.state.todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, task: updatedTask };
      } else {
        return todo;
      }
    });
    this.setState((currState) => ({
      todos: newUpdatedTask,
    }));
  };

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todos
        key={todo.id}
        id={todo.id}
        task={todo.task}
        removeTodo={this.removeTodo}
        updateTodo={this.updateTodo}
      />
    ));
    return (
      <div className="TodosList">
        <ul className="TodosList-list">{todos}</ul>
        <TodosFrom addTodo={this.addTodo} />
      </div>
    );
  }
}
