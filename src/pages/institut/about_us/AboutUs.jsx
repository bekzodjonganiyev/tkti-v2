import {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {fetchUsers} from "../../../redux/about_us/actions"

const AboutUs = () => {
  const getDataFromStore = (store) => store.aboutUs
  const dsipatch = useDispatch()
  const {loading, users, error} = useSelector(getDataFromStore)
  useEffect(() => {
    dsipatch(fetchUsers())
  }, [])
  console.log(loading, users, error)
  if (loading) return <h1>Loading</h1>
  if (error) return <h1>Error</h1>
  return (
    <div>
      {
        users.map(item => (
          <pre>{item.name}</pre>
        ))
      }
    </div>
  )
}

export default AboutUs