import React from "react"

function Email() {
    return (
      <form id="emailForm">
        <p>Leave your email for me</p>
        <input type="text" placeholder="email" name="email"></input>
        <button type="submit">Submit</button>    
      </form>
    );
  }
  
  
  const handleFormSubmit = (e) => {
      e.preventDefault();
      const email = e.target.elements.email.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
          alert('Please enter a valid email address');
          return;
        }
        
    }
    document.querySelector("#emailForm").addEventListener('submit', handleFormSubmit);
  export default Email;
  
