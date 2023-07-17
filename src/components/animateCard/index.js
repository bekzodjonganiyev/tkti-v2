import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const AnimateCard = ({ refLink, refTitle, refId, key, mainTitle, isPdf }) => {
  const helper = (titl) => {
    return titl
      ? // link qisqardi
        // ${refTitle
        //   .toLowerCase()
        //   .split(" ")
        //   .map((str) =>
        //     str
        //       .split("")
        //       .filter((char) => /[a-zA-Z]/.test(char))
        //       .join("")
        //   )
        //   .join("-")}-
        `/${refLink}/${refId}`
      : refLink;
  };
  return (
    <Fade right>
      {isPdf ? (
        <a className="facultetTitle" href={refLink}>
          <h3 className="fakultet-inner">{mainTitle}</h3>
        </a>
      ) : (
        <Link className="facultetTitle" to={helper(refTitle)} key={key}>
          <h3 className="fakultet-inner">{mainTitle}</h3>
        </Link>
      )}
    </Fade>
  );
};

export default AnimateCard;
