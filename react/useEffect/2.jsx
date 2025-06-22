import { useState, useEffect } from "react";

function Son() {
    //渲染时开启一个定时器
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('定时器执行中');
        }, 1000)
        //清除副作用函数
        return () => {
            clearInterval(timer)
        }
    }, [])
    return <div className="">this is son</div>
}

function App() {
    const [show, setShow] = useState(true)
    return (
        <div className="">
            {show && <Son />}
            <button onClick={() => setShow(false)}>卸载Son组件</button>
        </div>
    )
}