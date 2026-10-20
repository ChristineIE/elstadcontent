import { useState } from "react";
import Button from "../components/Button.jsx";
import Placeholder from "../components/Placeholder.jsx";
import { siteConfig, isPlaceholder } from "../data/siteConfig.js";

// Same layout as the home page: text on the left, the framed form on the right.
export default function Contact() {
  const [status, setStatus] = useState("");

  // No backend yet: the form opens the visitor's email app with the message filled in.
  // Later you can swap this for a form service (Formspree, Netlify Forms, etc).
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const subject = encodeURIComponent(`Message from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`);

    if (isPlaceholder(siteConfig.email)) {
      setStatus("Add your email address in src/data/siteConfig.js to activate the form.");
      return;
    }

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email app…");
  }

  return (
    <section className="hero container">
      <div className="hero__text">
        <h1 className="hero__title">Let's work together</h1>

        <p className="hero__lead">Send me a message and I'll get back to you soon.</p>

        <dl className="contact__details">
          <div>
            <dt className="eyebrow">Email</dt>
            <dd>
              {isPlaceholder(siteConfig.email) ? (
                <Placeholder>{siteConfig.email}</Placeholder>
              ) : (
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              )}
            </dd>
          </div>

          {siteConfig.links.map((link) => (
            <div key={link.label}>
              <dt className="eyebrow">{link.label}</dt>
              <dd>{link.href ? <a href={link.href}>{link.display}</a> : <Placeholder>{link.display}</Placeholder>}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="hero__image">
        <div className="organic-wrap organic-wrap--lines organic-wrap--form">
          <form className="form" onSubmit={handleSubmit}>
            <label className="form__field">
              <span className="eyebrow">Name</span>
              <input type="text" name="name" required autoComplete="name" />
            </label>

            <label className="form__field">
              <span className="eyebrow">Email</span>
              <input type="email" name="email" required autoComplete="email" />
            </label>

            <label className="form__field form__field--grow">
              <span className="eyebrow">Message</span>
              <textarea name="message" required />
            </label>

            <div className="form__actions">
              <Button type="submit" arrow>
                Send message
              </Button>
              <p className="form__status" role="status">
                {status}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
