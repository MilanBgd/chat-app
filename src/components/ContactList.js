import React from "react";
import Contact from "./Contact";

const List = [
  {
    name: "Bob",
    age: 45,
    avatar: "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    name: "Christina",
    age: 15,
    avatar: "https://randomuser.me/api/portraits/women/93.jpg"
  },
  {
    name: "Alexis",
    age: 27,
    avatar: "https://randomuser.me/api/portraits/men/83.jpg",
    online: true
  }
];

// display Array

const ContactList = () => {
  return (
    <div>
      {List.map((item, id) => {
        return (
          <Contact
            key={id}
            name={item.name}
            avatar={item.avatar}
            online={item.online}
          />
        );
      })}
    </div>
  );
};

export default ContactList;
