import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      role: "Journeyman Industrial Mechanic",
      company: "Braya Renewable Fuels",
      period: "2021 - 2024",
      description: [
        "Diagnosed, repaired, and maintained different types of rotating equipment.",
        "Interpreted technical blueprints and schematics to rebuild mechanical seals.",
        "Executed monthly preventive maintenance schedules for grease and oil changes.",
        "Mentored apprentices and collaborated effectively within a teams.",
      ],
    },
    {
      role: "Journeyman Industrial Mechanic",
      company: "CME - Shipyard",
      period: "2019 - 2021",
      description: [
        "Performed major overhauls on vessel propulsion and steering systems.",
        "Diagnosed and repaired hydraulic steering and lifting mechanisms for operation.",
        "Took measurements and checked tolerances to one-thousandth of an inch.",
        "Repaired and tested many different types of valves.",
      ],
    },
    {
      role: "Journeyman Industrial Mechanic",
      company: "North Atlantic Refinery",
      period: "2017 - 2019",
      description: [
        "Diagnosed, repaired, and maintained different types of rotating equipment.",
        "Interpreted technical blueprints and schematics to rebuild mechanical seals.",
        "Executed monthly preventive maintenance schedules for grease and oil changes.",
        "Mentored apprentices and collaborated effectively within diverse teams.",
      ],
    },
    {
      role: "Apprentice Industrial Mechanic",
      company: "Newdock - Shipyard",
      period: "2012 - 2017 ",
      description: [
        "Performed major overhauls on vessel propulsion and steering systems.",
        "Diagnosed and repaired hydraulic steering and lifting mechanisms for operation.",
        "Took measurements and checked tolerances to one-thousandth of an inch.",
        "Repaired and tested many different types of valves.",
      ],
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <h2>Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>
                {exp.company} | <span className="date">{exp.period}</span>
              </h4>
              <ul>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
