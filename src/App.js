
import './App.css';
import github from "./github-mark-white.png"
import gmail from "./Gmail.png"
import Portfolio from "./Portfolio"
import Resume from "./Resume"
import LinkedIn from "./LI-In-Bug.png"
import me from "./me.jpg"
function App() {
  return (
    <div className="App">
      <header className="App-header" id="topHeader">
       <h1 id="kai"> Kai Ropp</h1>
       <nav id="navBar">
        <a href="#aboutMe">About Me</a>
        <a href="#Portfolio">Portfolio</a>
        <a href="#foot">Contact</a>
        <a>Resume</a>
       </nav>
      </header>
       <img id="me" src={me}></img>
      <section>
        <h2 id="aboutMe">About Me</h2>
        <p id="myBio"> I am a fullstack developer who is new to the industry, I have skills involving HTML, CSS, JavaScript, Jquery, NodeJS, React, MySql, sequelize,MongoDB, Mongoose, handlebars, and React. </p>
         <p id='personal'> In my personal life I am passionate about music, comic books, and nature. I grew up in the pacific northwest, and have traveled all over the north American continent but always come back home to Washington State.
          Technology is a passion for me and I am always attempting to learn all about new technology, lately I have been very interested in machine learning and the future between robotics and prothetics. 
        </p>
          <h2 id="Portfolio">Portfolio</h2>
          <Portfolio/>
          <h2 id ="Resume">Resume</h2>
          <Resume/>
      </section>
      <footer id="foot">
        <h3>Contact Me</h3>
        <a href="https://www.linkedin.com/in/kai-ropp-7476a1267/" target="_blank" rel="noreferrer">
      <img id="Git"src={github}></img>
        </a>
      <img id="Gmail" src={gmail}></img>
      <a href="https://www.linkedin.com/in/kai-ropp-7476a1267/" target="_blank" rel="noreferrer">
      <img id="In" src={LinkedIn}></img>
      </a>
      </footer>
    </div>
  );
}

export default App;
