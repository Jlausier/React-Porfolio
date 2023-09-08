import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'AFK',
    description: 'This application lets users search their favorite video game and get activity recommendations from Yelp',
    image: 'src/images/project1.png', // Add the image file path
    liveLink: 'https://jlausier.github.io/AFK-Coop/',
    githubLink: 'https://github.com/Jlausier/AFK-Coop',
  },
  {
    title: 'Project 2',
    description: 'A money managing app that will account all your bills, and goals you have. Then you can input your income to see how much you have left in your budget and how much is spent in which places.',
    image: 'src/images/project2.png', // Add the image file path
    liveLink: 'https://still-spire-90353-025f487cfe63.herokuapp.com/',
    githubLink: 'https://github.com/Jlausier/WalletWizzard',
  },
  // Add more project objects as needed
];

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;




