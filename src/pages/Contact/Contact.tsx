export const Contact = () => {
  return (
    <section className="section">
      <div className="container">
        <h1>Contact Us</h1>
        <p>
          Have questions, suggestions, or want to collaborate? We'd love to hear
          from you! Here's how you can reach us:
        </p>

        <div className="contact-methods">
          <div className="contact-method">
            <h2>Email</h2>
            <p>
              <a href="mailto:impolester.app@gmail.com">
                impolester.app@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-method">
            <h2>Social Media</h2>
            <p>
              Follow us on Instagram:{" "}
              <a
                href="https://www.instagram.com/polemovesapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                @polemovesapp
              </a>
            </p>
          </div>

          <div className="contact-method">
            <h2>Feature Requests</h2>
            <p>
              Have an idea for a new feature? Want to suggest new moves to add
              to our database? Please reach out through email or Instagram DM.
            </p>
          </div>

          <div className="contact-method">
            <h2>Bug Reports</h2>
            <p>
              If you've encountered a bug or technical issue, please include as
              much detail as possible, including your device model and
              iOS/Android version.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
