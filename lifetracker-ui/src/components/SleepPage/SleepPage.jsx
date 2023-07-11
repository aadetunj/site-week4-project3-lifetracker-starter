import "./SleepPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SleepGrid from "./SleepGrid";

export default function SleepPage({ appState }) {
  const [sleepState, setSleepState] = useState(false);
  const [sleepGrid, setSleepGrid] = useState([]);
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

  useEffect(() => {
    {
      axios
        .post("http://localhost:3008/auth/sleepdata", {
          userId: userId,
        })
        .then((response) => {
          console.log("Sleep data retrieved successfully:", response.data);
          console.log("sleep grid data---------", response.data.sleepInfo);
          setSleepGrid(response.data.sleepInfo);
        })
        .catch((error) => {
          console.error("Error retrieving sleep data:", error);
        });

      setSleepState(false);
    }
  }, [sleepState, setSleepState, userId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3008/auth/sleep", {
        userId: userId,
        sleepInfo: sleepInfo,
      })
      .then((response) => {
        console.log("Sleep data added successfully!", response.data);
        setSleepState(true);
        setSleepInfo(response.data); //?
      })
      .catch((error) => {
        console.error("Error logging in user:", error);
        // Handle error during login
      });
  };

  return (
    <>
      {appState ? (
        <>
          <h1 style={{ paddingLeft: "180px", fontSize: "40px" }}>Sleep</h1>
          <div className="sleepHeader">
            <form className="sleepForm" onSubmit={handleSubmit}>
              <div>
                <label className="startDay">Start Time:</label>
                <input
                  name="start_time"
                  type="datetime-local"
                  id="start"
                  value={sleepInfo?.start_time}
                  onChange={handleOnInputChange}
                />
              </div>
              <div>
                <label className="startTime">End Time:</label>
                <input
                  name="end_time"
                  type="datetime-local"
                  id="end"
                  value={sleepInfo?.end_time}
                  onChange={handleOnInputChange}
                />
              </div>

              <button type="submit">Submit</button>
            </form>

            <SleepGrid
              sleepState={sleepState}
              setSleepState={setSleepState}
              sleepGrid={sleepGrid}
              setSleepGrid={setSleepGrid}
            />
          </div>
        </>
      ) : (
        <h1 style={{ paddingLeft: "180px", fontSize: "40px" }}>
          {" "}
          Log in to View Sleep data
        </h1>
      )}
    </>
  );
}
