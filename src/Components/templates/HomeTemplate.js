import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../features/login/loginSlice'
import './styles.css'

const HomeTemplate = () => {
  
  let navigate = useNavigate()
  const isLogout = !useSelector((state) => (state.login.user))

  useEffect(() => {
    isLogout && navigate("/login")
  }, [isLogout, navigate])

  const dispatch = useDispatch()
  return <div>
    <nav class="nav nav-styles">
      <div class="nav-left">
        <a class="brand" href="#">Home</a>
      </div>
      <div class="nav-right">
        <button onClick={() => dispatch(logoutUser())}>logout</button>
      </div>
    </nav>
  </div>

}

export default HomeTemplate