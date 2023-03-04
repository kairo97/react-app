
import "./Resume.css"

function Resume() {
    return(
        <div id="resume">
            <h2 id="bootcamp">UW fullstack bootcamp</h2>
            <p id="dates">December 2022 - March 2023</p>
            <h3 id="GP">Group Projects</h3>
            <ul id="projects">
                <li>Steam Sales Tracker (Project team lead)</li>
                <li>Comic Bookies (Project team lead)</li>
                <li>gamerPad (currently in progress)</li>
            </ul>
            <h3 id="Skills">Skills</h3>
            <ul id="skillList">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>MYSQL/Sequelize</li>
                <li>MongoDB/Mongoose</li>
                <li>Variety of NPM packages</li>
            </ul>

        </div>
    )
}
export default Resume;