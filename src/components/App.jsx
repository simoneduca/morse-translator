import React from 'react';
import MessageInputContainer from '../containers/MessageInputContainer';
import SocialBanner from '../components/SocialBanner';

class App extends React.Component {
  render() {
    return (
      <div>
        <SocialBanner />
        <header className="site-header">
          <div className="title">
            TALK IN CODE <span className="smaller-font-size">- .- .-.. -.- / .. -. / -.-. --- -.. .</span>
          </div>
          <p>Translate your message into Morse Code and share it with your friends</p>
        </header>
        <span className="divider" />
        <section className="content-section">
          <MessageInputContainer props={this.props} />
        </section>
        <span className="divider" />
      </div>
    );
  }
}

export default App;
