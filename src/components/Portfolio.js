import React from 'react';
import "./Portfolio.css"
import Steam from './images/Steam.png'
import Blog from "./images/CodeBlog.png"
import RegEx from "./images/RegEx.png"
import WIP from "./images/WIP-image.png"
function Portfolio() {
    return (
        <div id="portfolio">
            <h3>Steam Sales Tracker</h3>
            <a href='https://kairo97.github.io/Steam-sale-tracker/' target="_blank" rel="noreferrer">
            <img id="steamTracker" src={Steam}/>
            </a>
            <h3>Code Blog</h3>
            <a href='https://thebestcodeblog.herokuapp.com/' target='_blank' rel="noreferrer">
            <img id="Blog" src ={Blog}/>
            </a>
            <h3> RegEx email tutorial Gist</h3>
            <a href='https://gist.github.com/kairo97/fd50d6f897ac6ebc597dc21a4a0e1cc1' target="_blank" rel="noreferrer">
                <img id="RegEx" src={RegEx}/>
            </a>
            <h3> gamerPad (WIP)</h3>
            <img id="WIP"src={WIP}></img>
        </div>
        
    )
}
export default Portfolio;