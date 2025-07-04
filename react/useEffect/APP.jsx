import { useEffect, useState } from "react";

const URL = 'https://www.baidu.com'

function App() {
    const [list, setList] = useState([])
    useEffect(() => {
        //额外的操作，获取频道列表
        async function getList() {
            const res = await fetch(URL)
            const jsonRes = await res.json()
            console.log(jsonRes)
            setList(jsonRes.data.channels)
        }
        getList()
    }, [])
    return (
        <div>
            this is app
            <ul>
                {list.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    )
}

export default App
