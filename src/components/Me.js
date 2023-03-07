import React from "react";
import me from "./images/me.jpg"

function Me() {
  return(
  <div className="bio">
      <h2 id="aboutMe">About Me</h2>
     <img id="me" src={me}></img>
      <p id="myBio"> I am a fullstack developer who is new to the industry, I have skills involving HTML, CSS, JavaScript, Jquery, NodeJS, React, MySql, sequelize,MongoDB, Mongoose, handlebars, and React. </p>
       <p id='personal'> In my personal life I am passionate about music, comic books, and nature. I grew up in the pacific northwest, and have traveled all over the north American continent but always come back home to Washington State.
        Technology is a passion for me and I am always attempting to learn all about new technology, lately I have been very interested in machine learning and the future between robotics and prothetics. 
      </p>
      </div>
  )    
  }
export default Me;