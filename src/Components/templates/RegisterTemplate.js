import useInput from '../../hooks/useInput'
import { loginSuccessful } from '../../features/login/loginSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const RegisterTemplate = () => {
  const [email, emailInput] = useInput("email")
  const [password, passwordInput] = useInput("password")
  const [password2, passwordInput2] = useInput("password")
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    if(!!email && (password === password2)){
      dispatch(loginSuccessful(email))
      navigate("/login")
    } else {
      alert('error register')
    }
  }

  return <div>
    Registro
    <form onSubmit={handleSubmit}>
      {emailInput}
      <br />
      {passwordInput}
      <br />
      {passwordInput2}
      <br />
      <button type="submit">signup</button>
    </form>
  </div>
}

export default RegisterTemplate