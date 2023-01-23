import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import '../card/card.css'
const Card = () => {
    const [posts, setPosts] = useState([]);
    
    const { lang, globalUrl} = useContext(Context);

    useEffect(() => {
       fetch(`${globalUrl}/`)
          .then((response) => response.json())
          .then((data) => {
             console.log(data);
             setPosts(data);
          })
          .catch((err) => {
             console.log(err.message);
          });
    }, []);
    const test = (id) =>{
        posts.map((a)=> (a.status = false ));
        const find = posts.find((e)=> e.id === id);
        find.status = !find.status;
        return setPosts([...posts]);
    }

  return (
    <div className="posts-container">
      {posts.map((e, index) => {
         return (
            <>
            <Link className="" key={index} to={`/posts/${e._id}`}>
                {

                }
            <div className="post-card">
                <img className="" src={globalUrl + "/" + e.photo} alt="" />
                <div className='card-desctiption'>

               <h2 className="card-name">{e[`name_${lang}`].split(" ").slice(0, 10).join(" ")}</h2>
               <span className="card-job">{e[`job_${lang}`].split(" ").slice(0, 10).join(" ")}</span>
               <span className="card-address">{e[`address_${lang}`].split(" ").slice(0, 10).join(" ")}</span>

               {
                a.body.map((a, index)=>{
                    a.href ? (
                        <a key={index} href={a.href}>
                            <i className='fa-solid fa-phone'></i>{a.text}
                        </a>
                    ):(
                        <p key={index}>
                            <i className=''></i>{a.text}
                        </p>

                    )
                })
               }
               </div>

            </div>
            </Link>
            </>
         );
      })}
   </div>
  )
}

export default Card

// import React, { useState,  } from "react";

// const Card = ({ isRectorat }) => {

//   return (
//     <div>
//       {/* <img src={photo} alt="" /> */}
//       <p>name</p>
//       <p>ishi</p>
//       {
//             isFamousSt && (
//                 <>
//                 <p>ish joyi</p>
//                 <p>bitirgan jafedrasi</p>
//                 <p>tugatgan yili</p>
//                 </>
//             )
//         }

//         {
//             isRectorat && (
//                 <>
//                 <p>qabulVaqti</p>
//                 </>
//             )
//         }
//       <p>{tel}</p>
//       <p>{email}</p>
//     </div>
//   );
// };

// const Famous = () => {
//   const [data, setData] = useState();
 
//   return (
//     <div>
//       {data.map((i) => (
//         <Card
//           isRectorat={false}
//           isFamousSt={true}
//           img={i`[photo]`}
//           name={i[`name_${lang}`]}
//           job={i[`job_${lang}`]}
//           ishJoyi={i[`ish_joyi_${lang}`]}
//           bitirganKafedra={i[`kafedra_name_${lang}`]}
//           tugatganYili={i[`finished_year`]}
//         />
//       ))}
//     </div>
//   );
// };

// const Rectorat = () => {
//   const [data, setData] = useState();
 
//   return (
//     <div>
//       {data.map((i) => (
//         <Card
//           img={i`[photo]`}
//           isRectorat
//           isFamousSt={false}
//           name={i[`name_${lang}`]}
//           job={i[`job_${lang}`]}
//           qabulVaqti={i[`address_uz_${lang}`]}
//           tugatganYili={i[`finished_year`]}
//         />
//       ))}
//     </div>
//   );
// };


// const RectordaChaqirish = () => {
//   const [data, setData] = useState();
//   let filteredData = data[0]
// //   const handleFilteredData = (arr) => {
// //     data.filter(lavozim => lavozim.id === arr.id)
// //   }
//   return (
//     <div style={{ display: "flex" }}>
//       <ul>
//         {data.map((i) => (
//           <li onClick={() => {
//           filteredData = data.filter(lavozim => lavozim.id === i.id)
//           }} >{i[`job_${lang}`]}</li>
//         ))}
//       </ul>

//       <div>
//         {filteredData.map((i) => (
//           <Card isRectorat={true} isFamousSt={false} qabnulVaqti={"ncdbhd"}/>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Card;
