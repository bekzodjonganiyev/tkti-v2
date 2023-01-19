import { Link } from "react-router-dom";
const Card = (props) => {
  const {
    isRectorat,
    ishJoyi,
    bitirganKafedra,
    tugatganYili,
    qabulVaqti,
    tel,
    email,
    img,
    name,
    job,
    isFamousStudent,
  } = props;
  return (
    <Link>
      <img src={img} alt="" />
      <p>{name}</p>
      <p>{job}</p>
      {isFamousStudent && (
        <>
          <p>{ishJoyi}</p>
          <p>{bitirganKafedra}</p>
          <p>{tugatganYili}</p>
        </>
      )}
      {isRectorat && (
        <>
          <p>{qabulVaqti}</p>
        </>
      )}
      <p>{tel}</p>
      <p>{email}</p>
    </Link>
  );
};

export default Card;
