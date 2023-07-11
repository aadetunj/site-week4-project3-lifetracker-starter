// import "./SleepGrid.css";
import { useState } from "react";
import axios from "axios";
import "./SleepGrid.css";

export default function SleepGrid({
  sleepState,
  setSleepState,
  sleepGrid,
  setSleepGrid,
}) {
  function formatDate(dateTime) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const formattedDateTime = new Date(dateTime).toLocaleDateString(
      undefined,
      options
    );
    return formattedDateTime;
  }

  function calculateHoursSlept(startDateTime, endDateTime) {
    const start = new Date(startDateTime);
    const end = new Date(endDateTime);
    const diffInMilliseconds = end - start;
    const diffInHours = diffInMilliseconds / (1000 * 60 * 60); // Convert milliseconds to hours
    return diffInHours;
  }

  console.log("hereeeeeeeeeeeeee", sleepGrid);
  return (
    <div className="sleep-wrapper">
      <h1>Sleep Log</h1>
      <div className="sleepGrid-container">
        {sleepGrid
          ?.sort((a, b) => b.id - a.id)
          ?.map((sleep, index) => (
            <div className="sleepGrid-item" key={index}>
              <div className="sleep-hours">
                <p>
                  {" "}
                  Hours Slept:{" "}
                  {calculateHoursSlept(sleep.start_time, sleep.end_time)}
                </p>
              </div>

              <h2 className="hTag">Start Time</h2>
              <p className="hTag">{formatDate(sleep.start_time)}</p>
              <h2 className="hTag">End Time</h2>
              <p className="hTag">{formatDate(sleep.end_time)}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
