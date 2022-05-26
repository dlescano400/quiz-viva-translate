import './App.css'
import Login from './Components/pages/Login'
import Register from './Components/pages/Register'
import Home from './Components/pages/Home'
import ListOfQuest from './Components/pages/ListOfQuestionnaires'
import Game from './Components/pages/Game'
import NewQuest from './Components/pages/NewQuest'


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
            <Route path="/" element={<Home />}>
              <Route index element={<ListOfQuest />}/>
              <Route exact path="/game" element={<Game />} />
              <Route exact path="/add-quest" element={<NewQuest />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
