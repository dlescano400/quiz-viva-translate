const { useState } = require("react")

const  useInput = (type) => {
  const [value, setValue] = useState("")
  const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />
  const resetInput = () => {
    setValue('')
  }
  return [value, input, resetInput]
}

export default useInput