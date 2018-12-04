import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import ImgList from "./Components/ImgList";
import SubmitForm from "./Components/SubmitForm";
import Kelsey from "./Img/Kelsey.png";
import Pbh from "./Img/pbh.png";
import logo from "./logo.svg";
import {
  Grid,
  Row,
  Col,
  Clearfix,
  Alert,
  Badge,
  Button,
  Jumbotron
} from "react-bootstrap";
import "./App.css";
import Gunk from "./Img/gunkengine.png";
import Bushing from "./Img/suspensionbushing.png";
import Toolbox from "./Img/tools.png";
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBr2N8bPGa3N9KITReUc6YGR1FNQrEFV6Y",
    authDomain: "cardad-kb001.firebaseapp.com",
    databaseURL: "https://cardad-kb001.firebaseio.com",
    projectId: "cardad-kb001",
    storageBucket: "cardad-kb001.appspot.com",
    messagingSenderId: "220813444480"
  });
}

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

// Initialize Firebase
// TODO: Replace with your project's customized code snippet

class App extends Component {
  constructor() {
    super();
    this.state = {
      urls: [],
      array: ["1", "2", "3", "4", "21"],
      cats: []
    };
  }

  componentDidMount() {
    var docRef = db.collection("images").doc("cats");

    // Valid options for source are 'server', 'cache', or
    // 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
    // for more information.
    var getOptions = {
      source: "server"
    };

    // Get a document, forcing the SDK to fetch from the offline cache.
    docRef
      .get(getOptions)
      .then(response => {
        // Document was found in the cache. If no cached document exists,
        // an error will be returned to the 'catch' block below.
        console.log("Cached document data:", response.data());

        const catDocument = response.data();
        this.setState({ urls: catDocument.urls });

        const catDoc = response.data();
        this.setState({
          urls: catDoc.urls
        });
      })
      .catch(function(error) {
        console.log("Error getting cached document:", error);
      });
  }

  render() {
    console.log("urls: ", this.state.urls);
    return (
      <div className="App">
        <div className="App-header">
          <h1>Header</h1>
        </div>
        <div className="App-title">
          <h1>Title</h1>
        </div>
        <div className="App-body">
          <h1>Body</h1>
          <ImgList data={this.state.urls} array={this.state.urls} />
        </div>
      </div>
    );
  }
}

export default App;
