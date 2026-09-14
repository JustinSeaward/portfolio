import "./Project.css";

const Projects = () => {
  const projectList = [
    {
      title: "Steem-App",
      description:
        "E-Commerce Web Application where you can browse and add games to a shopping cart. There is a Log-in page with three different users and each with there own wallet amounts.",
      tech: ["React", "Vite", "CSS"],
      link: "https://github.com/JustinSeaward/S2_Sprint_Final",
    },
    {
      title: "Portfolio Site",
      description:
        "This website! Built to showcase my journey as a developer. This site will grow with me as long as im developing and learning new ways to code new ideas.",
      tech: ["React", "Vite", "CSS"],
      link: "https://github.com/JustinSeaward/Portfolio",
    },
    {
      title: "The One Stop Insurance Company.",
      description:
        "The One Stope Insurance company needs a program to enter and calculate new insurance policy information for its customers.",
      tech: ["Python"],
      link: "https://github.com/JustinSeaward/QAP4-Python",
    },
    {
      title: "Mo's Lawn Care Service.",
      description:
        "Mo's Lawncare Services is a company that will perform maintenance on your lawn by appointment. Allow the user to enter the Customer name, street address, city, phone number (999-999-9999), and the total number of square feet forthe property (#####).",
      tech: ["Javascript", "HTML", "CSS"],
      link: "https://github.com/JustinSeaward/QAP-3-Files-JS",
    },
    {
      title: "Hab Taxi Service",
      description:
        "A Python script that processes data files. Stores and retrieves information for employees, car rentals, payments, revenue, expenses and finances.",
      tech: ["Python"],
      link: "https://github.com/JustinSeaward/HAB_TAXI_SERVICE",
    },
    {
      title: "More projects to come!",
      description:
        "This is a placeholder for other projects that have not been added yet!",
      tech: ["Python", "HTML", "CSS", "React"],
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" className="project-link">
              View Code &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
