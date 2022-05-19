import axios from "axios"
import { URL_API } from "../config"

const { useState, useEffect } = require("react")

const  useCreateUser = () => {

  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)
  const [value, setValue] = useState({
    username: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  
  const create = (username, password) => {
    setValue({username, password})
  }

  useEffect(() => {
    if(!!value.username && !!value.password){
      setLoading(true)
      const url = `${URL_API}/user`
      const { username, password } = value
      axios.post(url, { username, password })
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => {
        console.error(err)
        setError(err)
      })
      .finally(() => setLoading(false))
    }
    
  }, [value])

  return {user, error, loading, create}
}

export default useCreateUser