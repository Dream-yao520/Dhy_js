import { createSlice } from '@reduxjs/toolkit'

const counterState = createSlice({
    name: 'counter',
    //初始化state
    initialState: {
        count: 0
    },
    //修改数据的方法 同步方法 支持直接修改
    reducers: {
        //增方法
        inscrement(state) {
            state.count++
        },
        //减方法
        decrement(state) {
            state.count--
        }
    }
})

//解构出来actionCreater函数
const { inscrement, decrement } = counterState.actions
//获取reducer
const reducer = counterState.reducer

//以按需导出的方式导出actionCreater
export { inscrement, decrement }
//以默认导出的方式导出reducer
export default reducer