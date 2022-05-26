import { Link } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { loginSuccessful } from '../../features/login/loginSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { URL_API } from "../../config"
import axios from 'axios'

const LoginTemplate = () => {
  const [email, emailInput] = useInput("email")
  const [password, passwordInput] = useInput("password")
  const [user, setUser] = useState(null)
  const [isLogin, setIsLogin] = useState(false)
  const [loading, setLoading] = useState(false)

  let navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    setUser({
      username: email,
      password
    })
  }

  useEffect(() => {

    if(user && user.username && user.password){
      const url = `${URL_API}/user/login`
      setLoading(true)
      axios.post(url, user)
      .then((res) => {
        const { data } = res
        setIsLogin(data.result === 'successful')
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => setLoading(false))
    }
  }, [user])

  useEffect(() => {
    if(isLogin){
      navigate('/')
      dispatch(loginSuccessful(user.username))
    }
   }, [isLogin, dispatch, navigate, user])

  return (
    <div className="row col center">
      <div className='col-12 col-2-md card login-register margin-login'>
        Login
        <form onSubmit={handleSubmit}>
          {emailInput}
          <br />
          {passwordInput}
          <br />
          <button type="submit" disabled={loading}>login</button>
        </form>
        <p className='margin-create-user'>
          create new user <Link to="/register">register</Link>
        </p>
      </div>
    </div>
  )

}

export default LoginTemplate