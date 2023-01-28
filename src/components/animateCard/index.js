import React from "react";
import { Link } from "react-router-dom";

const AnimateCard = ({animClass, animTime,refLink, refTitle, refId, key, mainTitle}) =>{
    return(
        <Link className={`facultetTitle wow ${animClass || ''}`} data-wow-delay={animTime} to={`/${refLink}/${refTitle.toLowerCase().split(' ').map(str => str.split('').filter(char => /[a-zA-Z]/.test(char)).join('')).join('-')}-${refId}`} key={key}>
                <h3 className="fakultet-inner">{mainTitle}</h3>
        </Link>
    )
}

export default AnimateCard;