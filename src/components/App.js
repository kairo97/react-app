import {useState} from "react"

import './App.css';
import github from "../images/github-mark-white.png"
import gmail from "../images/Gmail.png"
import Portfolio from "./Portfolio"
import Resume from "./Resume"
import Email from "./Email"
import LinkedIn from "../images/LI-In-Bug.png"
import Me from "./Me"


function App() {
  const [clicked, setClicked] = useState("aboutMe");

  return (
    <div className="App">
      <header className="App-header" id="topHeader">
       <h1 id="kai"> Kai Ropp</h1>
       <nav id="navBar">
        <a href="#aboutMe" onClick={() => setClicked("aboutMe")}>About Me</a>
         <a href="#Portfolio" onClick={() => setClicked("portfolio")}>Portfolio</a>
        <a href="#foot" onClick={() => setClicked("contact")}>Contact</a>
        <a href="#Resume" onClick={() => setClicked("resume")}>Resume</a>
       </nav>
      </header>
       <div className="aboutMe">
      { clicked === "aboutMe" &&  <Me/> } 
       </div>
      <div id="Porfolio">
        {clicked === "portfolio" && <Portfolio/>}
      </div>
      <div className="resumeSection">
        {clicked === "resume" && <Resume/>}
      </div>
      <div className="emailSection">
        {clicked === "contact" && <Email/>}
      </div>
      <footer id="foot">
        <a className="imglink" href="https://github.com/kairo97" target="_blank" rel="noreferrer">
          <img id="Git"src={github}></img>
        </a>
        <a className="imglink"href="mailto:kai.ropp@gmail.com" target="_blank" rel="noreferrer">
          <img id="Gmail" src={gmail}></img>
        </a>
        <a className="imglink"href="https://www.linkedin.com/in/kai-ropp-7476a1267/" target="_blank" rel="noreferrer">
          <img id="In" src={LinkedIn}></img>
        </a>
      </footer>
    </div>
  );
}
export default App;
