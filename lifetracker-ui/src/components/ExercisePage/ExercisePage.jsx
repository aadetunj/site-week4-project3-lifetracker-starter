export default function ExercisePage({ appState }) {
  return (
    <>
      {appState ? (
        <h1 style={{ paddingLeft: "180px", fontSize: "40px" }}>
          user's log in to exercise stuffs{" "}
        </h1>
      ) : (
        <h1 style={{ paddingLeft: "180px", fontSize: "40px" }}>
          {" "}
          Log in to View exercise data
        </h1>
      )}
    </>
  );
}
