# Readux
-常用的集中状态管理工具，可以独立于框架运行
-通过集中管理的方式管理应用的状态
npm i @reduxjs/toolkit react_redux//安装依赖
    -reduxjs/toolkit 提供了创建store的简化方法
    -react_redux 提供了react和redux的绑定方法
## store 目录结构
-单独创建一个store 目录为集中管理不分
-应用会有很多子store模块，所有创建一个'modules'目录
-每个子模块都有自己的目录，目录名称为模块名称
-store中的入口文件index.js的作用是组合modules中所有子模块，并导出store


## 用redux在react实现count案例
-组件中使用useSelector()获取store中的状态
-组件中使用useDispatch()派发action
-如何得到要提交的action
    -执行store模块中导出的actionCreater方法
