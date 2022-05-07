import { Link } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { isLoginSuccessful } from '../../features/login/loginSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const LoginTemplate = () => {
  const [email, emailInput] = useInput("email")
  const [password, passwordInput] = useInput("password")

  const isLogout = useSelector((state) => (state.login.isLogin))

  const dispatch = useDispatch()
  let navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(isLoginSuccessful(email))    
  }

  useEffect(()=>{
    console.log('---> ', isLogout)
    isLogout ? navigate('/') : alert('error login')
  }, [isLogout])

  return <div>
    Login
    <form onSubmit={handleSubmit}>
      {emailInput}
      <br />
      {passwordInput}
      <br />
      <button type="submit">login</button>
    </form>
    <p>
      create new user <Link to="/register">register</Link>
    </p>
  </div>
}

export default LoginTemplate