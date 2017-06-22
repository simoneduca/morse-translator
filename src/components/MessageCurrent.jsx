import React, { Component } from 'react';
import SocialLinks from './SocialLinks';

class MessageCurrent extends Component {
  constructor() {
    super();
    this.delete = this.delete.bind(this);
  }

  delete() {
    this.props.delete();
  }

  render() {
    return (
      <div>
        <input
          className="input-field"
          readOnly="true"
          type="text"
          value={(this.props.messages) ? this.props.messages.morse : 'dio cane'}
        />{' '}
        <button
          className="delete-button"
          onClick={this.delete}
        /><br />
        <div className="divider" />
        <SocialLinks messages={this.props.messages} params={this.props.params} />
      </div>
    );
  }
}

export default MessageCurrent;
