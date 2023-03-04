
import './App.css';
import github from "./github-mark-white.png"
import Portfolio from "./Portfolio"
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1> Kai Ropp</h1>
       <nav>
        <a>About Me</a>
        <a>Portfolio</a>
        <a>Contact</a>
        <a>Resume</a>
       </nav>
      </header>
      <section>
        <h2>About Me</h2>
        <p> I am a fullstack developer who is new to the industry, I have skills involving HTML, CSS, Javacript, Jquery, NodeJS React, MySql, sequelize,MongoDB, Mongoose, and React.
          In my personal life I am passionate about music, comic books, and nature. I grew up in the pacific northwest, and have traveled all over the north American continent but always come back home to Washington State.
          Technology is a passion for me and I am always attempting to learn all about new technology, lately I have been very interested in machine learning and the future between robotics and prothetics. 
        </p>
          <h2>Portfolio</h2>
          <Portfolio/>
      </section>
      <footer>
      <img src={github}></img>
      <image></image>
      <image></image>
      </footer>
    </div>
  );
}

export default App;
