import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as messagesActions from '../ducks/messages';
import MessageInput from '../components/MessageInput';
import MessageCurrent from '../components/MessageCurrent';

const propTypes = {
  messages: PropTypes.object,
  placeholder: PropTypes.string,
};

const defaultProps = {
  placeholder: 'ENTER YOUR MESSAGE HERE',
};

class MessageInputContainer extends Component {
  componentDidMount() {
    const { actions, props } = this.props;
    const id = (props.params) ? props.params.message_id : null;
    actions.fetchCurrent(id);
  }

  render() {
    const { actions, messages, props } = this.props;
    const path = props.location.pathname;
    return (
      <div>
        {(path.indexOf('message') === -1)
        ? <MessageInput
          delete={actions.clearField}
          messages={messages}
          location={props.location}
          params={props.params}
          submit={actions.translate}
        />
        : <MessageCurrent
          delete={actions.clearField}
          messages={messages}
          params={props.params}
        />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(messagesActions, dispatch),
});

MessageInputContainer.propTypes = propTypes;

MessageInputContainer.defaultProps = defaultProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageInputContainer);
