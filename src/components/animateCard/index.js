import React from "react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const AnimateCard = ({refLink, refTitle, refId, key, mainTitle}) =>{
    return(
        <Fade right>
            <Link className='facultetTitle'  to={`/${refLink}/${refTitle.toLowerCase().split(' ').map(str => str.split('').filter(char => /[a-zA-Z]/.test(char)).join('')).join('-')}-${refId}`} key={key}>
                <h3 className="fakultet-inner">{mainTitle}</h3>
            </Link>
        </Fade>
    )
}

export default AnimateCard;