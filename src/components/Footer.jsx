import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';

function Footer() {

    return (
        <div id="footer">
            <h3>Creado por:</h3>
            <p>Andy Pineda</p>
            <p>Para Dev.F Proyecto Kata Front-end</p>
            <div id="socialIcons">
                <div className="mediaIcon">
                    <GitHubIcon></GitHubIcon>
                </div>
                <div className="mediaIcon">
                    <LinkedInIcon></LinkedInIcon>
                </div>
                <div className="mediaIcon">
                    <RedditIcon></RedditIcon>
                </div>
            </div>
        </div>
    )
}

export{Footer}
