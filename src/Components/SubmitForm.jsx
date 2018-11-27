import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyBr2N8bPGa3N9KITReUc6YGR1FNQrEFV6Y",
  authDomain: "cardad-kb001.firebaseapp.com",
  databaseURL: "https://cardad-kb001.firebaseio.com",
  projectId: "cardad-kb001",
  storageBucket: "cardad-kb001.appspot.com",
  messagingSenderId: "220813444480"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

class SubmitForm extends Component {
  state = {
    name: "",
    maintenace: [
      {
        name: "Maintenance1",
        duration: "10 - 20 min",
        interval: 6,
        materials: ["example-material", "example-material2"],
        tools: "example-tool",
        tip: "example-tips"
      }
    ]
  };

  handleSubmit(event) {
    console.log(event);
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("/api/form-submit-url", {
      method: "POST",
      body: data
    });
  }

  handleAddMainItm() {
    let thisDoc = this.state.maintenace[0].name;

    db.collection("newcollection")
      .doc(thisDoc)
      .set({
        name: this.state.maintenace[0].name,
        input: this.state.name,
        country: "USA"
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  }

  render() {
    return (
      <div className="Submit Form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Enter username</label>
          <input id="username" name="username" type="text" />

          <label htmlFor="email">Enter your email</label>
          <input id="email" name="email" type="email" />

          <label htmlFor="birthdate">Enter your birth date</label>
          <input id="birthdate" name="birthdate" type="text" />

          <button>Send data!</button>
        </form>
      </div>
    );
  }
}

export default SubmitForm;
