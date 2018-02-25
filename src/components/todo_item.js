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
                <input type="text" className="textbox"
                    onChange={event => this.onInputChange(event.target.value)}
                    value={this.state.editedText === undefined ? this.props.item.text : this.state.editedText}
                    onBlur={() => this.props.handleEdit(this.props.item.id, this.state.editedText)}
                />
                <button className=".button-error"
                    onClick={() => this.props.handleDelete(this.props.item.id)}
                >{this.renderImage('delete')}</button>
                <span>{this.props.done ? this.renderImage('done') : this.renderImage('pending')}</span>

            </div>
        );
    }
    onInputChange(editedText) {
        console.log(editedText);
        this.setState({ editedText });
    }

    renderImage(comp) {
        switch (comp) {
            case 'done':
                return <img src="../img/ok.png" height="25" width="25" ></img>;
            case 'pending':
                return <img src="../img/pending.png" height="25" width="25" ></img>;
            case 'delete':
                return <img src="../img/delete.png" height="25" width="25" ></img>;

            default:
                break;
        }

    }

};

export default TodoItem;