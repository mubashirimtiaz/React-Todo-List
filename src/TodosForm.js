import React, { Component } from "react";
import "./TodosForm.css";

export default class TodosForm extends Component {
  constructor(props) {
    super(props);

    this.state = { task: "" };
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      task: "",
    });
  };
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  render() {
    return (
      <div className="TodosFrom-form">
        <form
          className="TodosForm-form"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <label htmlFor="task">Add Task</label>
          <input
            type="text"
            value={this.state.task}
            name="task"
            id="task"
            onChange={this.handleChange}
            required={true}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}
