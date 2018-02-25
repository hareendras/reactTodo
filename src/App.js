import React, { Component } from 'react';
import ToDoList from './components/todo_list';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: [],
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Math.random().toString(36).substr(2, 9),
      done: false
    };
    this.setState({
      toDoItems: this.state.toDoItems.concat(newItem),
      text: ''
    });
    console.log(this.state);
  };

  handleDelete(itemId) {
    this.setState({
      toDoItems: this.state.toDoItems.filter(item => item.id !== itemId)
    });
  };

  handleEdit(itemId) {
    console.log("item to be edited", itemId);
  }

  toggleStatus(itemId) {
    console.log("Old state", this.state);
    const newState = JSON.parse(JSON.stringify(this.state));
    const todo = newState.toDoItems;
    const done2 = (_.find(todo, { id: itemId })).done;
    const newToDoList = _.uniq(_.chain(todo)
      .find({ id: itemId })
      .merge({ done: !done2 }).value());

    console.log("new State", newState);
    this.setState(newState);
  }


  render() {

    return (
      <div>
        <div>
          <ToDoList
            toDoItems={this.state.toDoItems}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            toggleStatus={this.toggleStatus}
            
          />
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Add Item"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <span>
              <button type="submit">Add To Do</button>
            </span>
          </form>
        </div>
      </div>

    );
  }
}

export default App;
