import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
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
    <nav className="nav nav-styles">
      <div className="nav-left">
        <h6 className="home">Quiz</h6>
      </div>
      <div className="nav-right">
        <button className='logount-link' onClick={() => dispatch(logoutUser())}>logout</button>
      </div>
    </nav>


    <div className='container-quiz'>
      <aside>
        <header></header>
        <nav>
          <ul>
            <li>
              <NavLink to='/'className={({ isActive }) => isActive ? 'active' : undefined }> 
                home
              </NavLink>
            </li>
            <li>
              <NavLink to='/game' className={({ isActive }) => isActive ? 'active' : undefined }> 
                Jugar
              </NavLink>
            </li>
            <li>
              <NavLink to='/add-quest' className={({ isActive }) => isActive ? 'active' : undefined }> 
                crear preguntas
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  </div>

}

export default HomeTemplate