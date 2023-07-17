import { useEffect } from 'react';
import { useState } from 'react';
import YangiliklarComp from '../../components/news';
import Pagination from '../../components/pagination/Pagination';
import apiClient from '../../services/apiClient';

function Yangiliklar({myKey}) {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  const getMaxLength = async () => {
    const res = await apiClient.get(`${myKey}/all`)
    setData(res?.total)
  }
  useEffect(() => {
    getMaxLength()
  }, [])
  return (
    <>
      <div className="wrapped">
        <YangiliklarComp myKey={myKey} page={page} />
      </div>
      <Pagination maxLength={data.length} currentPage={page} setCurrentPage={setPage} />
    </>
  );
}
export default Yangiliklar;