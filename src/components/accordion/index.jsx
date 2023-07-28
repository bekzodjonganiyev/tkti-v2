import React from "react";
import Fade from "react-reveal/Fade";




const AccordionComponent = ({ arr, setarr }) => {
  const test = (id) => {
    arr.map((a) => (a.status = false));
    const find = arr.find((e) => e.id === id);
    find.status = !find.status;
    return setarr([...arr]);
  };

  return arr.map((a, idx) => (
    <React.Fragment key={idx}>
      <Fade zoom>
        <li
          onClick={() => test(a.id)}
          className={`accordion__item ${a.status ? "active__accordion" : ""}`}
        >
          <h4>{a.title}</h4>
          <span
            className={
              a.status ? "fa-solid fa-angle-down" : "fa-solid fa-angle-right"
            }
          ></span>
        </li>
      </Fade>

      <Fade zoom >
        <div
          className={
            a.status ? "accordion__secret__item card__html__content" : "hidden"
          }
          dangerouslySetInnerHTML={{ __html: a["content"] }}
        ></div>
      </Fade>
    </React.Fragment>
  ));
};

const AccordionBest = ({ arr, setarr, xalqaro }) => {
  const test = (id) => {
    arr.map((a) => (a.status = false));
    const find = arr.find((e) => e.id === id);
    find.status = !find.status;
    return setarr([...arr]);
  };

  return (
    <div className="accordion__container__main">
      <div className="left">
        {arr.map((a, key) => (
          <div key={a.id}>
            <li
              onClick={() => test(a.id)}
              className={`accordion__item ${
                a.status ? "active__accordion" : ""
              }`}
            >
              <h4>{a.title}</h4>
              <span
                className={
                  a.status
                    ? "ms-4 fa-solid fa-angle-down"
                    : "fa-solid fa-angle-right"
                }
              ></span>
            </li>

            <div
              className={
                a.status
                  ? "accordion__secret__key card__html__content"
                  : "hidden"
              }
              dangerouslySetInnerHTML={{ __html: a["content"] }}
            ></div>
          </div>
        ))}
      </div>

      <div className="right">
        {arr.map((a) => (
          <Fade zoom key={a.id}>
            <div
              className={
                a.status
                  ? "accordion__secret__key__desk card__html__content"
                  : "hidden"
              }
              dangerouslySetInnerHTML={{ __html: a["content"] }}
            ></div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export { AccordionBest, AccordionComponent };
