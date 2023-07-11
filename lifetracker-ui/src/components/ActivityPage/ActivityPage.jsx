import "./ActivityPage.css";

export default function ActivityPage({ appState }) {
  return (
    <>
      {appState ? (
        <>
          <h1 style={{ paddingLeft: "180px", fontSize: "40px" }}>
            Activity Feed
          </h1>
          <div className="holder">
            <div className="d1">
              <h1 className="h123">Total Exercise Minutes</h1>
              <p className="p123">0.0</p>
              <p className="poss">+2.5%</p>
            </div>
            <div className="d2">
              <h1 className="h123">Average Hours of Sleep</h1>
              <p className="p123">0.0</p>

              <p className="poss">+5.5%</p>
            </div>
            <div className="d3">
              <h1 className="h123">Average Daily Calories</h1>
              <p className="p123">0.00</p>
              <p className="poss">-2.5%</p>
            </div>
          </div>
        </>
      ) : (
        <h1 style={{ paddingLeft: "180px", fontSize: "40px" }}>
          {" "}
          Log in to View activity data
        </h1>
      )}
    </>
  );
}
