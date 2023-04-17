import React from 'react'

const Requipments = () => {
  const document2022_1 =
    {
      uz: [
        {pdf: "https://backend.tkti.uz/uploads/file-1681725604067.pdf"},
        {docx: "https://backend.tkti.uz/uploads/file-1681724945664.docx"}
      ],
      ru: [
        {pdf: "https://backend.tkti.uz/uploads/file-1681725552652.pdf"},
        {docx: "https://backend.tkti.uz/uploads/file-1681724976741.docx"}
      ],
      en: [
        {pdf: "https://backend.tkti.uz/uploads/file-1681725501323.pdf"},
        {docx: "https://backend.tkti.uz/uploads/file-1681724997427.docx"}
      ]
    }

    const document2022_2 =
    {
      uz: [
        {pdf: "https://backend.tkti.uz/uploads/file-1681725893780.pdf"},
        {docx: "https://backend.tkti.uz/uploads/file-1681725799485.docx"}
      ],
      ru: [
        {pdf: "https://backend.tkti.uz/uploads/file-1681725861520.pdf"},
        {docx: "https://backend.tkti.uz/uploads/file-1681725731720.docx"}
      ],
      en: [
        {pdf: "https://backend.tkti.uz/uploads/file-1681725836460.pdf"},
        {docx: "https://backend.tkti.uz/uploads/file-1681725682990.docx"}
      ]
    }

    const document2023_1 =
    {
      uz: [
        {pdf: "https://backend.tkti.uz/uploads/file-1681726175937.pdf"},
        {docx: "https://backend.tkti.uz/uploads/file-1681726144575.docx"}
      ],
      ru: [
        {pdf: "https://backend.tkti.uz/uploads/file-1681726082654.pdf"},
        {docx: "https://backend.tkti.uz/uploads/file-1681726046905.docx"}
      ],
      en: [
        {pdf: "https://backend.tkti.uz/uploads/file-1681726009830.pdf"},
        {docx: "https://backend.tkti.uz/uploads/file-1681725958545.docx"}
      ]
    }
  console.log(document2022_1.uz[0])

  return (
    <div>
      <h1 className='text-3xl font-bold text-center mb-10'>Bizning majburiyatlarimiz</h1>
      <div className='w-[1000px] mx-auto mb-12'>
        <h2 className='text-2xl font-bold text-center'>Institutning 2022 yil 1-yarim yillik ish rejasi</h2>
        <div className='flex w-full'>
          <div className='w-1/3 m-4 rounded-md bg-[#eff5fb]  pb-4 pt-4'>
            <h3 className='text-center text-5xl mb-4'>UZ</h3>
            <div className='flex justify-between px-4'>
            <a className='text-2xl' href={document2022_1.uz[0].pdf} download>pdf</a>
            <a className='text-2xl' href={document2022_1.uz[1].docx} download>docx</a>
            </div>
          </div>
          <div className='w-1/3 m-4 rounded-md bg-[#eff5fb]  pb-4 pt-4'>
            <h3 className='text-center text-5xl mb-4'>RU</h3>
            <div className='flex justify-between px-4'>
            <a className='text-2xl' href={document2022_1.ru[0].pdf} download>pdf</a>
            <a className='text-2xl' href={document2022_1.ru[1].docx} download>docx</a>
            </div>
          </div>
          <div className='w-1/3 m-4 rounded-md bg-[#eff5fb]  pb-4 pt-4'>
            <h3 className='text-center text-5xl mb-4'>EN</h3>
            <div className='flex justify-between px-4'>
            <a className='text-2xl' href={document2022_1.en[0].pdf} download>pdf</a>
            <a className='text-2xl' href={document2022_1.en[1].docx} download>docx</a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[1000px] mx-auto mb-12'>
        <h2 className='text-2xl font-bold text-center'>Institutning 2022 yil 2-yarim yillik ish rejasi</h2>
        <div className='flex w-full'>
          <div className='w-1/3 m-4 rounded-md bg-[#eff5fb]  pb-4 pt-4'>
            <h3 className='text-center text-5xl mb-4'>UZ</h3>
            <div className='flex justify-between px-4'>
            <a className='text-2xl' href={document2022_2.uz[0].pdf} download>pdf</a>
            <a className='text-2xl' href={document2022_2.uz[1].docx} download>docx</a>
            </div>
          </div>
          <div className='w-1/3 m-4 rounded-md bg-[#eff5fb]  pb-4 pt-4'>
            <h3 className='text-center text-5xl mb-4'>RU</h3>
            <div className='flex justify-between px-4'>
            <a className='text-2xl' href={document2022_2.ru[0].pdf} download>pdf</a>
            <a className='text-2xl' href={document2022_2.ru[1].docx} download>docx</a>
            </div>
          </div>
          <div className='w-1/3 m-4 rounded-md bg-[#eff5fb]  pb-4 pt-4'>
            <h3 className='text-center text-5xl mb-4'>EN</h3>
            <div className='flex justify-between px-4'>
            <a className='text-2xl' href={document2022_2.en[0].pdf} download>pdf</a>
            <a className='text-2xl' href={document2022_2.en[1].docx} download>docx</a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[1000px] mx-auto mb-12'>
        <h2 className='text-2xl font-bold text-center'>Institutning 2023 yil 1-yarim yillik ish rejasi</h2>
        <div className='flex w-full'>
          <div className='w-1/3 m-4 rounded-md bg-[#eff5fb]  pb-4 pt-4'>
            <h3 className='text-center text-5xl mb-4'>UZ</h3>
            <div className='flex justify-between px-4'>
            <a className='text-2xl' href={document2023_1.uz[0].pdf} download>pdf</a>
            <a className='text-2xl' href={document2023_1.uz[1].docx} download>docx</a>
            </div>
          </div>
          <div className='w-1/3 m-4 rounded-md bg-[#eff5fb]  pb-4 pt-4'>
            <h3 className='text-center text-5xl mb-4'>RU</h3>
            <div className='flex justify-between px-4'>
            <a className='text-2xl' href={document2023_1.ru[0].pdf} download>pdf</a>
            <a className='text-2xl' href={document2023_1.ru[1].docx} download>docx</a>
            </div>
          </div>
          <div className='w-1/3 m-4 rounded-md bg-[#eff5fb]  pb-4 pt-4'>
            <h3 className='text-center text-5xl mb-4'>EN</h3>
            <div className='flex justify-between px-4'>
            <a className='text-2xl' href={document2023_1.en[0].pdf} download>pdf</a>
            <a className='text-2xl' href={document2023_1.en[1].docx} download>docx</a>
            </div>
          </div>
         
 
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Requipments