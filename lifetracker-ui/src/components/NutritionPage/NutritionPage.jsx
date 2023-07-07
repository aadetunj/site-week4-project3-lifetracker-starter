export default function NutritionPage({ appState }) {
  return (
    <>
      {appState ? (
        <h1 style={{ paddingLeft: "180px", fontSize: "40px" }}>
          user's log in to nutrition stuffs{" "}
        </h1>
      ) : (
        <h1 style={{ paddingLeft: "180px", fontSize: "40px" }}>
          {" "}
          Log in to View nutrition data
        </h1>
      )}
    </>
  );
}
