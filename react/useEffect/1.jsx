import { useEffect, useState } from "react"



function App() {
    //1.没有依赖项 组件初始化渲染 + 组件更新时执行
    // const [count, setCount] = useState(0)
    // useEffect(() => {
    //     console.log('副作用函数执行了')
    // })
    //2.传入特定依赖项，组件初始渲染 + 特性依赖项变化时执行
    useEffect(() => {
        console.log('副作用函数执行了')
    }, [count])//只有count更新才会执行
    return (
        <div>
            <h2>useEffect</h2>
            <button onClick={() => setCount(count + 1)}>+{count}</button>
        </div>
    )
}