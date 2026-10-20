import Button from "../components/Button.jsx";
import OrganicFrame from "../components/OrganicFrame.jsx";
import homeImg from "../assets/homeImg.png";
import ClientsCarousel from "../components/ClientsCarousel.jsx";

// Draft copy: edit the text below whenever you like.
export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero__text">
          <h1 className="hero__title">
            Norwegian Language Specialist
            <span className="hero__title-accent">with 10 years+ experience</span>
          </h1>

          <p className="hero__lead">
            I help brands communicate clearly in Norwegian. Reliable, versatile, and specialized in translation,
            copywriting, subtitling and digital content creation.
          </p>

          <Button to="/contact" arrow>
            Get in touch
          </Button>
        </div>

        <div className="hero__image">
          <OrganicFrame fill src={homeImg} alt="Illustrasjonsbilde av pc" />
        </div>
      </section>

      <ClientsCarousel />
    </>
  );
}
