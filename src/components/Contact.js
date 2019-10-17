import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  }

  render() {
    const { avatar, name } = this.props;
    return (
      <div class="Contact">
        <img src={avatar} alt="{avatar.name}" class="avatar" />
        <div>
          <p class="name">{name}</p>
          <div className="status">
            <span
              className={this.state.status ? "status-online" : "status-offline"}
              onClick={event => {
                const newStatus = !this.state.status; // true
                this.setState({ status: newStatus });
              }}
            ></span>

            {this.state.status ? (
              <span className="status-text">Online</span>
            ) : (
              <span className="status-text">Offline</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
