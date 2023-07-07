import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="content">
        <div className="intro">
          <h1 className="h1">Hey There!</h1>
          <p id="hero-paragraph">
          LifeTracker will help you take back conch of your Life!
          </p>
        </div>
        <div className="media">
          <img
            src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"
            alt="hero-icon"
            id="hero-img"
          />
        </div>
      </div>
    </div>
  );
}
