export default function ActivityPage({ appState }) {
  return (
    <>
      {appState ? (
        <h1 style={{ paddingLeft: "180px", fontSize: "40px" }}>
          user's log in to activity stuffs{" "}
        </h1>
      ) : (
        <h1 style={{ paddingLeft: "180px", fontSize: "40px" }}>
          {" "}
          Log in to View activity data
        </h1>
      )}
    </>
  );
}
