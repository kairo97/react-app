import { useState } from 'react';
import './Portfolio.css';
import Steam from '../images/Steam.png';
import Blog from '../images/CodeBlog.png';
import RegEx from '../images/RegEx.png';
import gamerPad from '../images/gamerPad.png';

function Portfolio() {
  const [isActive, setIsActive] = useState('');

  const projects = [
    {
      id: 0,
      photo: Steam,
      text: "Steam tracker",
    },
    {
      id: 1,
      photo: RegEx,
      text: 'Regex Gist',
    },
    {
      id: 2,
      photo: Blog,
      text: 'Blog Site',
    },
    {
      id: 3,
      photo: gamerPad,
      text: 'gamerPad)',
    },
  ];

  const handleItemClick = (projectText) => {
    setIsActive(projectText);
  };

  return (
    <div id='portfolio'>
      <ul className="projectList">
        {projects.map((project) => (
          <li className = "projectItem"key={project.id} onClick={() => handleItemClick(project.text)}>
            <p className='itemText'>{project.text}</p>
          </li>
        ))}
      </ul>
      {isActive && (
        <img
          className='activePhoto'
          src={projects.find((project) => project.text === isActive).photo}
          alt={isActive}
        />
      )}
    </div>
  );
}

export default Portfolio;
