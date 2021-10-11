import React from "react";
import Event from "../Event/Event";
import "./EventsList.css";

interface Props {
  events: Array<Event>;
  connection: Boolean;
}

const EventsList = ({ events, connection }: Props) => {
  return (
    <div data-testid="eventList">
      {connection ? (
        <div data-testid="orderedList" className="cardContainer">
          {events.map((value, index) => {
            return <Event event={value} key={index} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default EventsList;
