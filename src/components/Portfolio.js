import { useState } from 'react';
import './Portfolio.css';
import Steam from '../images/Steam.png';
import Blog from '../images/CodeBlog.png';
import RegEx from '../images/RegEx.png';
import gamerPad from '../images/gamerPad.png';

function Portfolio() {
  const [isActive, setIsActive] = useState(0);

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
        text: 'gamerPad',
        link: "https://gamerpad.herokuapp.com/"
    },
  ];
  const handleBackClick = () => {
    setIsActive((isActive -1 + projects.length) % projects.length);
  };
  const handleNextClick = () => {
    setIsActive((isActive + 1) % projects.length);
  };

  return (
    <div id='portfolio'>
      <div className='backBtnContainer btnContainer'>
     <button onClick={handleBackClick} className='backBtn btn'> Back</button>
      </div>
      <div className='imageContainer'>
      {isActive >= 0 && (
        <a className='projectLink' href={projects.find((project)=> project.id === isActive).link}
        target="_blank" rel="norefferer">
        <img
          className='activePhoto'
          src={projects.find((project) => project.id === isActive).photo}
          alt={projects.find((project) => project.id === isActive).text}
          />
          </a>
      )}
      <div className='imageTitleContainer'>
      {isActive >= 0 && (
        <p className='imageTitle'>{projects.find((project) => project.id === isActive).text}</p>
        )}
        </div>
        </div>
      <div className='nextBtnContainer btnContainer'>
        <button onClick={handleNextClick} className='nextBtn btn'> Next</button>
      </div>
    </div>
  );
}

export default Portfolio;
