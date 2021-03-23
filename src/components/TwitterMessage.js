import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars : 280,
      inputValue : ''
    };
  }

handleChange = (e) => {
    this.handleChars()
    this.setState({
      inputValue: e.target.value
    })
}

handleChars = () => {
  this.setState(previousState => {
    return {
      maxChars: previousState.maxChars - 1,
    }

  })
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={(e) => this.handleChange(e)} type="text" name="message" id="message" value= {this.state.inputValue} />
        <span>{this.state.maxChars}</span>
      </div>
    );
  }
}

export default TwitterMessage;
