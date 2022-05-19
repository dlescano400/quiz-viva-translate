import useInput from '../../hooks/useInput'
import { Link } from 'react-router-dom'
import useCreateUser from '../../hooks/useCreateUser'

const RegisterTemplate = () => {
  const [email, emailInput, resetInputEmail] = useInput("email")
  const [password, passwordInput, resetInputPass] = useInput("password")
  const [password2, passwordInput2, resetInputPass2] = useInput("password")
  const user = useCreateUser()

  const handleSubmit = (event) => {
    event.preventDefault()
    if(!!email && (password === password2)){
      user.create(email, password)
      resetInputEmail()
      resetInputPass()
      resetInputPass2()
    } else {
      alert('error register')
    }
  }

  return <div className="row col center">
    <div className='col-12 col-2-md card margin-login'>
    Registro
      <form onSubmit={handleSubmit}>
        {emailInput}
        <br />
        {passwordInput}
        <br />
        {passwordInput2}
        <br />
        <button style={{marginRight: '20px'}} type="submit" disabled={user.loading}>{ user.loading ? 'new user...' : 'signup'}</button>
        <Link to="/login">Login</Link>
      </form>
      <br />
      <div>
        {
          user.user && 'usuario creado con exito'
        }
      </div>
    </div>
  </div>
}

export default RegisterTemplate