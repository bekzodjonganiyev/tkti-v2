import React, { useContext, useState, useEffect } from 'react'
import Card from '../../../components/card/Cards';
const RectoratInfo = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch(`${globalUrl}/rectorat/all`).then((res)=> res.json()).then((data)=>{
            setData(data)
        })
    })

  return (
    <div>
        <ul>
        {data.map((i)=>(
            <li onClick={()=>{
                filterData = data.filter(lavozim => lavozim.id === i.id)
            }}>{i[`job_${lang}`]}</li>
        ))}
        </ul>

        <div>
            {
                filterData.map((i)=>(
                    <Card isRectorat={true} isFamousSt={false} />
                ))
            }
        </div>
    </div>
  )
}

export default RectoratInfo