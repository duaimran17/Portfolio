// src/data/achievements.js
// Curated achievements and verified certifications.

export const achievements = [
  {
    id: 1,
    title: "1st Runner Up | OOTA Game Jam",
    category: "Game Jam / Competition",
    description: "Placed top among 60+ competing development teams during a 48-hour hackathon.",
    icon: "Trophy",
    // Asset slot: point to image, render, or 3D asset path when ready
    asset: null,
  },
  {
    id: 2,
    title: "1st Runner Up | UCP Sports Gala",
    category: "Athletics / University Gala",
    description: "Won silver medals and trophies in both the Futsal and Throwball university tournaments.",
    icon: "Medal",
    honors: [
      { label: "Medal", icon: "Medal" },
      { label: "Trophy", icon: "Trophy" },
    ],
    // Asset slot: ready to connect medal, trophy, or 3D/decorative element assets
    asset: null,
  },
];

export const certificates = [
  {
    id: 1,
    name: "Python Data Structures",
    institution: "University of Michigan",
    platform: "Coursera",
  },
  {
    id: 2,
    name: "AWS Academy Graduate - Cloud Foundations",
    institution: "AWS Academy",
    platform: null,
  },
  {
    id: 3,
    name: "IEEE Membership Student International",
    institution: "IEEE",
    platform: null,
  },
];
