import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from './components/App';

function Parent() {
  const [showMe, setShowMe] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showResume, setShowResume] = useState(false);

  return (
    <React.StrictMode>
      <App
        showMe={() => setShowMe(true)}
        showPortfolio={() => setShowPortfolio(true)}
        showResume={() => setShowResume(true)}
       
      />
    </React.StrictMode>
  );
}

ReactDOM.render(<Parent />, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

