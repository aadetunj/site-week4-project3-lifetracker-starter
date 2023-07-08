import "./SleepPage.css";
import { useState } from "react";
import axios from "axios";

export default function SleepPage({ appState }) {
  const [sleepInfo, setSleepInfo] = useState({
    start_time: "",
    end_time: "",
  });

  console.log("start time", sleepInfo?.start_time);
  console.log("end time", sleepInfo?.end_time);
  const userId = localStorage.getItem("userId");

  const handleOnInputChange = (e) => {
    setSleepInfo({ ...sleepInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3007/auth/sleep", {
        userId: userId,
        sleepInfo: sleepInfo,
      })
      .then((response) => {
        console.log("Sleep data added successfully!", response.data);
      })
      .catch((error) => {
        console.error("Error logging in user:", error);
        // Handle error during login
      });
  };

  return (
    <>
      {appState ? (
        <div className="sleepHeader">
          <h1 style={{ paddingLeft: "180px", fontSize: "40px" }}>Sleep</h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="startDay">Start Time:</label>
              <input
                name="start_time"
                type="datetime-local"
                id="startDay"
                value={sleepInfo.start_time}
                onChange={handleOnInputChange}
              />
            </div>
            <div>
              <label htmlFor="startTime">End Time:</label>
              <input
                name="end_time"
                type="datetime-local"
                id="startTime"
                value={sleepInfo.end_time}
                onChange={handleOnInputChange}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <h1 style={{ paddingLeft: "180px", fontSize: "40px" }}>
          {" "}
          Log in to View Sleep data
        </h1>
      )}
    </>
  );
}
