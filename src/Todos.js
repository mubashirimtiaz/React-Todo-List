import React, { Component } from "react";
import "./Todos.css";

export default class Todos extends Component {
  handleRemoveTodo = (evt) => {
    this.props.removeTodo(this.props.id);
  };
  render() {
    return (
      <div className="Todos">
        <li className="Todos-list">
          <span className="Todos-task">{this.props.task}</span>
          {/* <span>
          </span> */}
          <span>
            <i className="Todos-edit fa fa-edit"></i>
            <i
              onClick={this.handleRemoveTodo}
              className="Todos-delete fa fa-trash"
            ></i>
          </span>
        </li>
      </div>
    );
  }
}
