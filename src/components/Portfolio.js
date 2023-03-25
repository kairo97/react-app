import {useState} from 'react';
import "./Portfolio.css"
import Steam from '../images/Steam.png'
import Blog from "../images/CodeBlog.png"
import RegEx from "../images/RegEx.png"
import gamerPad from "../images/gamerPad.png"
function Portfolio() {
    const [isActive, setIsActive] = useState(false);
    return (
        <div id="portfolio">
            <div className="accordianItem">
                <h3 className='accordianTitle' onClick={()=> setIsActive(!isActive)}>Steam Sales Tracker</h3>
                {isActive && <div className='accodianContent'>
                <a href='https://kairo97.github.io/Steam-sale-tracker/' target="_blank" rel="noreferrer">
                <img id="steamTracker" src={Steam}/>
                </a>
                </div>}
            </div>
            <div className="accordianItem">
                <h3 className='accordianTitle' onClick={()=> setIsActive(!isActive)}>Code Blog</h3>
                {isActive && <div className='accordianContent'>
                <a href='https://thebestcodeblog.herokuapp.com/' target='_blank' rel="noreferrer">
                <img id="Blog" src ={Blog}/>
                 </a>
                </div>}
            </div>
            <div className="accordianItem">
                <h3 className='accordianTitle' onClick={()=> setIsActive(!isActive)}> RegEx email tutorial Gist</h3>
                {isActive && <div className='accordianContent'>
                <a href='https://gist.github.com/kairo97/fd50d6f897ac6ebc597dc21a4a0e1cc1' target="_blank" rel="noreferrer">
                <img id="RegEx" src={RegEx}/>
                 </a>
                </div>}
            </div>
            <div className="accordianItem">
                <h3 className='accordianTitle' onClick={()=> setIsActive(!isActive)}>gamerPad</h3>
                {isActive && <div className='accordianContent'>
                <a href='https://gamerpad.herokuapp.com/' target="_blank" rel="noreferrer">
            <img id="WIP"src={gamerPad}></img>
            </a>
                </div>}
            </div>
        </div>
        
    )
}
export default Portfolio;