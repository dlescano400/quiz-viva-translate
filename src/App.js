import './App.css'
import Login from './Components/pages/Login'
import Register from './Components/pages/Register'
import Home from './Components/pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import store from './app/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
