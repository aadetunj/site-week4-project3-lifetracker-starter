export default function SleepPage({ appState }) {
  return (
    <>
      {appState ? (
        <h1 style={{ paddingLeft: "180px", fontSize: "40px" }}>user's log in to sleep stuffs </h1>
      ) : (
        <h1 style={{ paddingLeft: "180px", fontSize: "40px" }}>
          {" "}
         Log in to View Sleep data
        </h1>
      )}
    </>
  );
}
