import { configureStore } from '@reduxjs/toolkit'
//导入子模块reducer
import counterReducer from './modules/counterStore'

//创建store
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

//导出store
export default store