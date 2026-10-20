import Button from "../components/Button.jsx";
import OrganicFrame from "../components/OrganicFrame.jsx";
import Placeholder from "../components/Placeholder.jsx";
import aboutImg from "../assets/about.png";

const timeline = [
  { year: "2016", text: "Got my first writing assignment" },
  { year: "2018", text: "Copywriting and translation became my full-time job" },
  { year: "2019", text: "Started working with subtitling" },
  { year: "2022", text: "A steady mix of translation, writing, QA and subtitling" },
  { year: "2024", text: "Began studying digital media and communication" },
  { year: "2025", text: "Implemented AI evaluation tasks" },
];

export default function About() {
  return (
    <>
      <section className="hero container">
        <div className="hero__text">
          <h1 className="hero__title"> About Me</h1>

          <p className="hero__lead">
            I provide professional content for clients in different industries: entertainment, tech, fashion, streaming,
            AI etc. Balancing different needs, guidelines and target audiences is part of my daily life.
          </p>

          <Button to="/contact" arrow>
            Get in touch
          </Button>
        </div>

        <div className="hero__image">
          <OrganicFrame fill src={aboutImg} alt="Christine Elstad" />
        </div>
      </section>

      <section className="timeline container" aria-labelledby="timeline-title">
        <h2 className="eyebrow timeline__title" id="timeline-title">
          Experience
        </h2>

        <ol className="timeline__list">
          {timeline.map((item) => (
            <li className="timeline__item" key={item.year}>
              <span className="timeline__year">{item.year}</span>
              <span className="timeline__dot" aria-hidden="true" />
              <span className="timeline__text">{item.text}</span>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
