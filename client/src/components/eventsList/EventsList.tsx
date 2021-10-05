import React from "react";
import Event from "../Event/Event";
import "./EventsList.css";

interface Props {
  events: Array<Event>;
  connection: Boolean;
}

const EventsList = ({ events, connection }: Props) => {
  return (
    <div>
      {connection ? (
        <div data-testid="orderedList" className="cardContainer">
          {events.map((value) => {
            return (
              <Event
                event={value}
                key={Math.floor(Math.random() * (999999 - 1)) + 1}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default EventsList;
