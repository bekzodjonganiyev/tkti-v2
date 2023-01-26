import React,{useState} from 'react'

const RectoratItem = () => {
    const [data, setdata] = useState([]),
    let filterData = data[0]
  return (
    <div>
        <ul>
        {data.map((i) => (
          <li onClick={() => {
          filteredData = data.filter(lavozim => lavozim.id === i.id)
          }} >{i[`job_${lang}`]}</li>
        ))}
        </ul>

        <div>
        {filteredData.map((i) => (
          <Card isRectorat={true} isFamousSt={false} qabulVaqti={"ncdbhd"}/>
        ))}
      </div>
    </div>
  )
}

export default RectoratItem