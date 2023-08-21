import { useContext } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import { Context } from "../../context";

const AnimateCard = ({ refLink, refTitle, refId, key, mainTitle, isPdf }) => {
  const { setParamsId } = useContext(Context);
  const helper = (titl) =>
    titl
      ? `/${refLink}/${refTitle
          .toLowerCase()
          .split(" ")
          .map((str) =>
            str
              .split("")
              .filter((char) => /[a-zA-Z]/.test(char))
              .join("")
          )
          .join("-")}`
      : refLink;

  return (
    <Fade right oncli>
      <div onClick={() => setParamsId({ id: refId, isGetByTitle: true })}>
        {isPdf ? (
          <a className="facultetTitle" href={refLink}>
            <h3 className="fakultet-inner">{mainTitle}</h3>
          </a>
        ) : (
          <Link className="facultetTitle" to={helper(refTitle)} key={key}>
            <h3 className="fakultet-inner">{mainTitle}</h3>
          </Link>
        )}
      </div>
    </Fade>
  );
};

export default AnimateCard;
