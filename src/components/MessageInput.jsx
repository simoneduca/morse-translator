import React, { Component } from 'react';

const initialState = {
  morse: '',
  original: '',
};

class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      morse: props.messages.morse,
      original: props.messages.original,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.messages !== nextProps.messages) {
      this.setState(initialState);
    }
  }

  delete() {
    this.props.delete();
  }

  handleChange(e) {
    this.setState({
      original: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state.original);
  }

  render() {
    return (
      <div>
        <input
          autoFocus="true"
          className="input-field"
          onChange={this.handleChange}
          placeholder="ENTER YOUR MESSAGE HERE"
          type="text"
          value={this.props.messages.morse || this.state.original}
        />{' '}
        <button
          className="delete-button"
          onClick={this.delete}
        /><br />
        <div className="divider" />
        <button
          className="translate-button"
          onClick={this.handleSubmit}
        >
          TRANSLATE MY MESSAGE TO MORSE CODE
        </button>
      </div>
    );
  }
};

export default MessageInput;
