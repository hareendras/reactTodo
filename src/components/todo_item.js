import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editedText: ''
        };
    }
    render() {
        return (
            <div>
                {/*props.item.text*/}
                <input type="checkbox"
                 onClick={()=>this.props.toggleStatus(this.props.item.id)}
                 />
                <input type="text"
                    onChange={event => this.onInputChange(event.target.value)}
                    value={this.props.item.text}
                />
                <button>edit</button>
                <button
                    onClick={() => this.props.handleDelete(this.props.item.id)}
                >delete</button>
                <span>{this.props.done?'Completed':'Not Complete'}</span>
            </div>
        );
    }
    onInputChange(editedText) {
        this.setState({ editedText });
    }
    editComplete() {
        this.props.handleEdit(this.state.editedText);
    }
   
};

export default TodoItem;