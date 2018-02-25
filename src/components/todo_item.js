import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editedText: undefined
        };
    }
    render() {
        return (
            <div>
                <input type="checkbox"
                    onClick={() => this.props.toggleStatus(this.props.item.id)}
                />
                <input type="text"
                    onChange={event => this.onInputChange(event.target.value)}
                    value={this.state.editedText === undefined ? this.props.item.text : this.state.editedText}
                    onBlur={() => this.props.handleEdit(this.props.item.id, this.state.editedText)}
                />
                <button
                    onClick={() => this.props.handleDelete(this.props.item.id)}
                >delete</button>
                <span>{this.props.done ? 'Completed' : 'Not Complete'}</span>
            </div>
        );
    }
    onInputChange(editedText) {
        console.log(editedText);
        this.setState({ editedText });
    }

};

export default TodoItem;