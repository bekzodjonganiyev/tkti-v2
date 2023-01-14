import React from "react";
import "./style.css";
const AccordionComponent = ({ arr, setarr }) => {
  const test = (id) => {
    arr.map((a) => (a.status = false));
    const find = arr.find((e) => e.id === id);
    find.status = !find.status;
    return setarr([...arr]);
  };

  return arr.map((a, idx) => (
    <React.Fragment key={idx}>
      <li  onClick={() => test(a.id)} className={`accordion__item ${a.status ? 'active__accordion' : ''}`}>
        <h4>{a.title}</h4>
        <span  className={a.status ? 'fa-solid fa-angle-down' : 'fa-solid fa-angle-right'}></span>
      </li>

      <div 
        className={a.status ? "accordion__secret__item" : "d-none"}
        dangerouslySetInnerHTML={{ __html: a["content"] }}
      ></div>
    </React.Fragment>
  ));
};

const AccordionBest = ({ arr, setarr }) => {
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
          <React.Fragment key={key}>
            <li onClick={() => test(a.id)} className={`accordion__item ${a.status ? 'active__accordion' : ''}`}>
            <h4>{a.title}</h4>
              <span className={a.status ? 'ms-4 fa-solid fa-angle-down' : 'fa-solid fa-angle-right'}></span>
            </li>

            <div
              className={a.status ? "accordion__secret__key" : "d-none"}
              dangerouslySetInnerHTML={{ __html: a["content"] }}
            ></div>
          </React.Fragment>
        ))}
      </div>

      <div className="right">
        {arr.map((a, index) => (
            <div
              key={index}
              className={a.status ? "accordion__secret__key__desk" : "d-none"}
              dangerouslySetInnerHTML={{ __html: a["content"] }}
            ></div>
        ))}
      </div>
    </div>
  );
};

export { AccordionBest, AccordionComponent };