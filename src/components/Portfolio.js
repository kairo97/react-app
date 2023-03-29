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
      link:"https://kairo97.github.io/Steam-sale-tracker/"
      
    },
    {
        id: 1,
        photo: RegEx,
        text: 'Regex Gist',
        link: "https://github.com/kairo97/regex-tutorial/blob/main/RegEx-email-validation.gist.md"
    },
    {
        id: 2,
        photo: Blog,
        text: 'Blog Site',
        link: "https://thebestcodeblog.herokuapp.com/"
    },
    {
        id: 3,
        photo: gamerPad,
        text: 'gamerPad)',
        link: "https://gamerpad.herokuapp.com/"
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
       <a className='projectLink' href={projects.find((project)=> project.text === isActive).link}
       target="_blank" rel="norefferer">
        <img
          className='activePhoto'
          src={projects.find((project) => project.text === isActive).photo}
          alt={isActive}
          />
          </a>
      )}
    </div>
  );
}

export default Portfolio;
