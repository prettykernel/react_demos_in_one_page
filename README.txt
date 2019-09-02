git clone https://github.com/prettykernel/react_demos_in_one_page

cd react-geek-time/

yarn

yarn start


# Demo 结构
左侧为所有代码，按课程顺序进行 Demo 的组织。右侧为演示界面，菜单显示了所有可运行的 Demo 链接。点击菜单可以看到运行的结果。


# Demo 列表
* 01 chat-app: 简单的 React 组件和交互演示
* 02 comment-box：评论框界面的组件拆分和实现
* 03 clock: JSX 语法演示
* 04 clock: 显示当前时间的组件，演示生命周期方法的调用
* 05 dom-diff：演示 DOM Diff 的算法原理
* 06 adv-tab-selector，withTimer: 高阶组件和函数作为子组件
* 07 locale-sample： 使用 Conext API 实现多语言切换
* 11 pure-reducer：纯 Redux 的使用
* 12 counter：在 React 中使用 Redux
* 13 async-action：Redux 异步 action，中间件的概念
* 14 org-action：如何组织 Redux 的 action 和 reducer
* 16 router-sample：路由不只是页面切换，更是代码组织方式
* 17.1 router-params：路由参数定义
* 17.2 nexted-route：嵌套路由
* 29.1 form-submit： 表单提交
* 29.2 form-submit-antd：使用 antd 的表单组件
* 30 dynamic-form：动态表单
* 31 list-page：列表页的翻页，搜索和缓存
* 33 multiple-request：页面多个请求的处理
* 35 wizard-sample：基于路由实现向导页面
* 36.1 layout1：常用布局的实现
* 36.2 layout2: 常用布局的实现
* 36.3 layout-resize：实现侧边栏可调整宽度
* 37.1 portal-example：使用 React Portals 实现的对话框
* 37.2 antd-dialog：使用 antd 实现对话框
* 40 dnd-sample：在 React 中实现拖放功能
* 43 reselect-sample：使用 reselect 避免重复计算
* 44 suspense：React 的异步渲染


单向数据流
React 组件可以理解为纯函数，输入是 props 和 state，输出是 View。
用户触发事件/action，传给 dispatch，调用 setState 产生新的 state，触发 render() 返回一个新的 View。

组件设计思路：
1. 创建静态 UI 
2. 考虑组件的状态组成 
3. 考虑组件的交互

数据状态管理g原则：
1. 能计算得到的状态就不要单独存储
2. 组件尽量无状态，所需数据通过 props 获取

getDerivedStateFromProps 用法：
1. 当 stae 需要从 props 初始化时使用 
2. 尽量不要使用：维护两者的状态一致性会增加复杂度？？？ antd 例子 
3. 每次 render 都会调用 
4. 典型场景：S表单控件获取默认值 

getSnapshotBeforeUpdate 用法：
1. 在页面 render 前调用，state 已更新
2. 典型场景：获取 render 前的 DOM 状态

componentDidUpdate
典型场景：页面需要根据 props 变化重新获取数据

shouldComponentUpdate
一般可以由 PureComponent 自动实现


VDOM diff
广度优先分层比较，算法复杂度为 O(n)。


Redux 特性：
single source of truth


