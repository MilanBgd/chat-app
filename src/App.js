import React from "react";
import "./App.css";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact
        name="Marie"
        avatar="https://randomuser.me/api/portraits/women/64.jpg"
        online={true}
      />
      <Contact
        name="John"
        avatar="https://randomuser.me/api/portraits/men/86.jpg"
        online={true}
      />
      <Contact
        name="Avery"
        avatar="https://randomuser.me/api/portraits/women/46.jpg"
        online={false}
      />
    </div>
  );
}

export default App;
