import React from "react";
import "./Contact.css";

const Contact = ({ name, avatar, online }) => {
  return (
    <div class="Contact">
      <img src={avatar} alt="{avatar.name}" class="avatar" />
      <div>
        <p class="name">{name}</p>
        <div class="status">
          {online ? (
            <div>
              <span class="status-online"></span>
              <span class="status-text">Online</span>
            </div>
          ) : (
            <div>
              <span class="status-offline"></span>
              <span class="status-text">Offline</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
