import * as React from "react";
import { useState } from "react";
import "./eventForm.css";

type Props = {
  onSubmit: (
    firstName: string,
    lastName: string,
    email: string,
    date: string
  ) => void;
  connection: boolean;
};
export const EventForm = ({ onSubmit, connection }: Props) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const sendEvent = () => {
    onSubmit(firstName, lastName, email, date);
  };

  return (
    <div className="box">
      <h2>Add new event</h2>
      <div>
        <input
          placeholder="Your first name"
          required
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          disabled={!connection}
        />
      </div>
      <div>
        <input
          placeholder="Your last name"
          required
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          disabled={!connection}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          disabled={!connection}
        />
      </div>
      <div>
        <input
          type="date"
          placeholder="2021-10-04"
          required
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
          disabled={!connection}
        />
      </div>
      <div>
        <button type="submit" onClick={sendEvent} disabled={!connection}>
          Submit
        </button>
      </div>
    </div>
  );
};
