import React from "react";
import "./Event.css";
interface Event {
  firstName: string;
  lastName: string;
  email: string;
  date: string;
}
interface Props {
  event: Event;
}

const Event = ({ event }: Props) => {
  return (
    <ul className="singleEvent card">
      <li data-testid="fNameTest">{event.firstName}</li>
      <li data-testid="lNameTest">{event.lastName}</li>
      <li data-testid="emailTest">{event.email}</li>
      <li data-testid="dateTest">{event.date}</li>
    </ul>
  );
};

export default Event;
