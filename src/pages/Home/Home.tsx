import { ImageButton } from "../../components/ImageButton";

export const Home = () => {
  return (
    <section className="section">
      <div className="container">
        <h1>Welcome to Pole Moves App</h1>
        <p>
          Track your pole dancing progress, discover new moves, and join a
          community of passionate pole dancers.
        </p>
        <div className="cta-buttons">
          <ImageButton
            imageUrl="src/assets/apple_app.jpg"
            link="https://apps.apple.com/app/pole-moves/id123456789"
          />

          <ImageButton
            imageUrl="src/assets/google_play.png"
            link="https://play.google.com/store/apps/details?id=com.polemoves"
          />
        </div>

        <div className="section">
          <div className="container">
            <h2>Features</h2>
            <div className="features-grid">
              <div className="feature">
                <h3>Track Progress</h3>
                <p>Monitor your progress on various moves</p>
              </div>
              <div className="feature">
                <h3>Instagram Videos</h3>
                <p>Learn from pole dancers on Instagram</p>
              </div>
              <div className="feature">
                <h3>Customize Move Lists</h3>
                <p>Create your own move lists and combos</p>
              </div>
              <div className="feature">
                <h3>Cloud Backup</h3>
                <p>Back up and restore your data via iCloud or Google Drive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
