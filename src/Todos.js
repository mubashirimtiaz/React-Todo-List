import React, { Component } from "react";
import "./Todos.css";

export default class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdited: false,
      task: this.props.task,
    };
  }

  handleRemoveTodo = (evt) => {
    this.props.removeTodo(this.props.id);
  };
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState((currState) => ({
      isEdited: !currState.isEdited,
    }));
  };
  showUpdateInput = () => {
    this.setState((currState) => ({
      isEdited: !currState.isEdited,
    }));
  };
  handleCompletion = () => {
    this.props.toggleCompletion(this.props.id);
  };
  // componentDidUpdate(prevProps, PrevState) {
  //   console.log("prevProps", prevProps.task);
  //   console.log("presentProps", this.props.task);
  // }

  componentWillUnmount() {
    console.log("In the ComponentWilUnmount");
  }
  render() {
    const showLiOrInput = this.state.isEdited;
    let result;
    if (showLiOrInput) {
      result = (
        <form className="Todos-list-form" onSubmit={this.handleSubmit}>
          <div className="Todos-list-form-div">
            <input
              type="text"
              name="task"
              id="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>save</button>
          </div>
        </form>
      );
    } else {
      result = (
        <li className="Todos-list">
          <span
            className={`Todos-task ${this.props.completed ? "completed" : ""}`}
            onClick={this.handleCompletion}
          >
            {this.props.task}
          </span>
          <span>
            <i
              className="Todos-edit fa fa-edit"
              onClick={this.showUpdateInput}
            ></i>
            <i
              onClick={this.handleRemoveTodo}
              className="Todos-delete fa fa-trash"
            ></i>
          </span>
        </li>
      );
      return result;
    }
    return <div className="Todos">{result}</div>;
  }
}
