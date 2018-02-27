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
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.setState({
      toDoItems: [
        {
          text: "Learn HTML",
          id: Math.random().toString(36).substr(2, 9),
          done: false
        },
        {
          text: "Learn CSS",
          id: Math.random().toString(36).substr(2, 9),
          done: false
        },
        {
          text: "Learn Javascript",
          id: Math.random().toString(36).substr(2, 9),
          done: false
        }
      ],
      text: ''
    });
  }
  handleChange(event) {
    this.setState({ text: event.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
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
  };

  handleDelete(itemId) {
    this.setState({
      toDoItems: this.state.toDoItems.filter(item => item.id !== itemId)
    });
  };

  handleEdit(itemId, newText) {
    const newState = JSON.parse(JSON.stringify(this.state));
    const todo = newState.toDoItems;
    const newToDoList = _.uniq(_.chain(todo)
      .find({ id: itemId })
      .merge({
        text: newText
      }).value()
    );
    this.setState(newState);
  }

  toggleStatus(itemId) {
    const newState = JSON.parse(JSON.stringify(this.state));
    const todo = newState.toDoItems;
    const newToDoList = _.uniq(_.chain(todo)
      .find({ id: itemId })
      .merge({
        done: !(_.find(todo, { id: itemId })).done
      }).value()
    );
    this.setState(newState);
  }

  render() {

    return (
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-3">
          <ToDoList
            toDoItems={this.state.toDoItems}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            toggleStatus={this.toggleStatus}

          />
          <form className="pure-form" onSubmit={this.handleSubmit}>
            <input
              placeholder="Type in item to be added"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <span >
              <button className="pure-button pure-button-primary" type="submit">Add To Do</button>
            </span>
          </form>
        </div>
        <div className="pure-u-1 pure-u-md-1-3">

        </div>
      </div>
    );
  }
}

export default App;
