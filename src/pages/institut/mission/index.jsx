import React from 'react';
import mission from '../../../assets/images/mission.jpg'
import i18next from "i18next";
import { useTranslation } from "react-i18next";
export const Mission = () => {
  const { t } = useTranslation();
  return (
    <div className='container mx-auto w-[90%]  lg:my-10 my-3'>
      {/* <h2 className="flex justify-center items-center mx-auto  text-3xl lg:my-8 my-6 font-semibold "> {t("Institute.2.name")}</h2>
      <div className='lg:flex justify-between'>

      
      <div className='lg:my-5'>
      {t("Mission.0.name")}

      </div>
      <img className='lg:w-[50%] sm:w-[100%]' src={mission} alt="" />
      </div> */}
<div className='lg:flex flex-col-2 justify-between mx-auto '>


      <div className='lg:grid mx-auto  lg:w-[32%] py-3 '>
<img src="https://tkti-backend-g6pbz.ondigitalocean.app/uploads/file-1685425766795.JPG" alt="" />
      </div>
      <div className='lg:grid mx-auto  lg:w-[32%] py-3  '>
<img src="https://tkti-backend-g6pbz.ondigitalocean.app/uploads/file-1685425766795.JPG" alt="" />
      </div>
      <div className='lg:grid mx-auto  lg:w-[32%] py-3 '>
<img src="https://tkti-backend-g6pbz.ondigitalocean.app/uploads/file-1685425766795.JPG" alt="" />
      </div>
      
      </div>
      <div className='lg:flex flex-col-2 justify-between mx-auto my-5'>


      <div className='lg:grid mx-auto  lg:w-[48%] py-3 '>
<img src="https://tkti-backend-g6pbz.ondigitalocean.app/uploads/file-1685425766795.JPG" alt="" />
      </div>
      <div className='lg:grid mx-auto   lg:w-[48%] py-3 '>
<img src="https://tkti-backend-g6pbz.ondigitalocean.app/uploads/file-1685425766795.JPG" alt="" />
      </div>
     
      





      <div class='container mx-auto w-[90%]  lg:my-10 my-3'>
<div class='lg:flex flex-col-2 justify-between mx-auto '>


      <div class='lg:grid mx-auto  lg:w-[32%] py-3 '>
<img src="https://tkti-backend-g6pbz.ondigitalocean.app/uploads/file-1685425766795.JPG" alt="" />
      </div>
      <div class='lg:grid mx-auto  lg:w-[32%] py-3  '>
<img src="https://tkti-backend-g6pbz.ondigitalocean.app/uploads/file-1685425766795.JPG" alt="" />
      </div>
      <div class='lg:grid mx-auto  lg:w-[32%] py-3 '>
<img src="https://tkti-backend-g6pbz.ondigitalocean.app/uploads/file-1685425766795.JPG" alt="" />
      </div>
      
      </div>
      <div class='lg:flex flex-col-2 justify-between mx-auto my-5'>


      <div class='lg:grid mx-auto  lg:w-[48%] py-3 '>
<img src="https://tkti-backend-g6pbz.ondigitalocean.app/uploads/file-1685425766795.JPG" alt="" />
      </div>
      <div class='lg:grid mx-auto   lg:w-[48%] py-3 '>
<img src="https://tkti-backend-g6pbz.ondigitalocean.app/uploads/file-1685425766795.JPG" alt="" />
      </div>
     
      
      </div>
    </div>




      </div>
    </div>

    
  )
}
