// src/data/experience.js
// Unified Journey / Experience entries.
// Strict compliance: no invented dates, organizations, or claims.

export const experiences = [
  {
    id: 1,
    role: "MERN Intern",
    company: "10Pearls",
    project: "SHINE Notes",
    categoryTag: "PROFESSIONAL / INTERNSHIP",
    description: "Full-stack notes application built with React, Node.js, Express, and database integration.",
    tags: [
      "10Pearls",
      "Node.js",
      "React.js",
      "MongoDB",
      "Pino Logger",
      "Mocha",
      "Jest",
      "Logger",
      "SonarQube",
      "Git",
    ],
  },
  {
    id: 2,
    role: "Event Volunteer",
    event: "FYP Open House, CS Department, UCP FOIT",
    categoryTag: "VOLUNTEER",
    description: "Contributed to event coordination and technical project showcase management.",
    tags: ["Volunteer", "Event Volunteer"],
  },
  {
    id: 3,
    role: "IEEE UCP Student Branch",
    categoryTag: "LEADERSHIP",
    roles: [
      {
        role: "Joint Secretary",
        organization: "",
        description: "Helped organize society activities and hosted webinars on AI and Agentics.",
      },
      {
        role: "Co-Director",
        event: "Techathon 2.0",
        description: "Co-led an intra- and inter-university technical event with 11 competitions across 4 categories, including 2 robotics competitions.",
      },
      {
        role: "Organizer",
        event: "Taakra (National-Level Competition)",
        description: "Managed logistics and technical coordination for a national-level competition.",
      },
    ],
    tags: [
      "Leadership",
      "Techathon 2.0",
      "Taakra",
      "11 Competitions",
      "Robotics",
      "AI & Agentics Webinars",
    ],
  },
  {
    id: 6,
    role: "Head of Communication",
    organization: "International Students Association UCP",
    categoryTag: "LEADERSHIP",
    description: "Led communications, managing outreach and coordination initiatives.",
    tags: ["Communication", "Leadership"],
  },
  {
    id: 7,
    role: "Hackathon Executive Member",
    organization: "IEEE Computer Society UCP",
    categoryTag: "LEADERSHIP",
    description: "Supported hackathon operations and technical event execution.",
    tags: ["Hackathon", "Leadership"],
  },
  {
    id: 8,
    role: "1st Runner Up",
    event: "OOTA Game Jam",
    categoryTag: "ACHIEVEMENT",
    description: "Placed top among 60+ competing development teams during a 48-hour hackathon.",
    tags: ["Hackathon", "Game Jam"],
  },

];
