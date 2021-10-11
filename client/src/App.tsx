import React, { useState, useEffect } from "react";
import "./App.css";
import { EventForm } from "./components/eventForm/EventForm";
import axios from "axios";
import EventsList from "./components/eventsList/EventsList";

export async function validate(
  firstName: string,
  lastName: string,
  email: string,
  date: string
) {
  const regex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
  const validationEffect = [];
  //firstName validation
  validationEffect.push(regex.test(String(firstName)));
  //lastName validation
  validationEffect.push(regex.test(String(lastName)));
  //email validatiion
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  validationEffect.push(emailRegex.test(String(email).toLowerCase()));
  //date valiation
  var timestamp = Date.parse(date);
  isNaN(timestamp) == false
    ? validationEffect.push(true)
    : validationEffect.push(false);
  if (validationEffect.includes(false)) {
    return false;
  } else {
    return true;
  }
}

function App() {
  const [events, setEvents] = useState([]);
  const [connetction, setConnection] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData();
  }, [updated]);

  function postAPI(
    firstName: string,
    lastName: string,
    email: string,
    date: string
  ) {
    axios
      .post("http://localhost:8080/api/events", {
        firstName,
        lastName,
        email,
        date,
      })
      .then((res) => {
        setUpdated(!updated);
        console.log(res);
      })
      .catch((err) => {
        alert("Cant send data - please check connection with server");
        console.log(err);
      });
  }
  async function getData() {
    axios
      .get("http://localhost:8080/api/events")
      .then((res) => {
        setConnection(true);
        setShowMessage(false);
        setEvents(res.data);
        console.log(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setShowMessage(true);
        alert("Cant fetch data from api - please check connection");
        setIsLoading(false);
        console.log(err);
      });
  }
  function submit(
    firstName: string,
    lastName: string,
    email: string,
    date: string
  ): void {
    if (!validate(firstName, lastName, email, date)) {
      alert("Invalid text in inputs");
    } else if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      date === ""
    ) {
      alert("All fields are required");
    } else {
      postAPI(firstName, lastName, email, date);
    }
  }
  return (
    <div data-testid="wraper" className="App">
      {isLoading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="container">
          {" "}
          <h1 className="title" data-testid="title">
            Events
          </h1>
          <EventForm connection={connetction} onSubmit={submit} />
          {showMessage ? (
            <h2 className="error">Can't connect to server</h2>
          ) : (
            <EventsList
              data-testid="test"
              connection={connetction}
              events={events}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
