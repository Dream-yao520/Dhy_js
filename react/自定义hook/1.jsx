import { useState } from "react"

//自定义hook函数useToggle
function useToggle() {
    const [value, setValue] = useState(true)

    const toggle = () => setValue(!value)
    return {
        value,
        toggle
    }
}

function App() {
    const { value, toggle } = useToggle()
    return (
        <div className="">
            {value && <div>this is div</div>}
            <button onClick={toggle}>toggle</button>
        </div>
    )
}

export default App