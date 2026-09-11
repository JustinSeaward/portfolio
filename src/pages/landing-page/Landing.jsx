import "./Landing.css";

const Landing = () => {
  2;
  return (
    <section className="me-section" id="home">
      <h1>
        Hi, I'm <span className="highlight">Justin Seaward</span>
      </h1>
      <h3>Full Stack Developer looking for employment and new opportunities</h3>
      <p>
        I am currently building/refactoring projects to broaden my skills and understanding while seeking new challenges.
        I have been continuously learning since graduation and am looking for a position where I can contribute to a team and grow as a developer.
        I have an email form below if you would like to reach out to me. I am also available on GitHub, where you can view my projects and contributions.
      </p>
      <a
        href="https://github.com/JustinSeaward"
        target="_blank"
        className="btn"
      >
        View GitHub Here
      </a>
    </section>
  );
};

export default Landing;
