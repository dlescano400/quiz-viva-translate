import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../features/login/loginSlice'

const HomeTemplate = () => {
  
  let navigate = useNavigate()
  const isLogout = !useSelector((state) => (state.login.user))

  useEffect(() => {
    isLogout && navigate("/login")
  }, [isLogout, navigate])

  const dispatch = useDispatch()
  return <div>
    Home
    <button onClick={() => dispatch(logoutUser())}>logout</button>
  </div>

}

export default HomeTemplate