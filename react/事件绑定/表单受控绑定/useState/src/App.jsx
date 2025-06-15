import { useState } from 'react'
import './App.css'
import { useRef } from 'react'

function App() {
  // const [valuse, setValue] = useState('')
  const inputRef = useRef(null)
  //渲染完毕之后DOM生成之后才可用
  const showDom = () => {
    console.log(inputRef.current.value)
  }
  return (
    <>
      <input type="text"
        ref={inputRef}
      />
      <button onClick={showDom}>获取DOM</button>
      {/* <input type="text"
        value={valuse}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      /> */}

    </>
  )
}

export default App
