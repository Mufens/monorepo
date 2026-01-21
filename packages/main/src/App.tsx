import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { registerMicroApps, start } from 'qiankun'
import { formatDate, setStorage } from 'common'
import './App.scss'

function AppContent() {
  
  const handleNavigate = (path: string) => {
    window.location.assign(path)
  }

  useEffect(() => {
    // 1. 注册所有子应用配置
    registerMicroApps(
      [
        {
          name: 'react-app', // 唯一标识，必须和子应用package.json的name一致
          entry: 'http://localhost:7001', // JS Entry 模式：写子应用域名// 子应用运行端口
          container: '#micro-app-container', // 渲染容器ID
          activeRule: '/sub1', // 路由匹配规则，主应用路由到/sub1时加载该子应用
         // props: { userInfo: { name: '主应用用户' } }, // 主应用向子应用传参
        },
        {
          name: 'vue2-app',
          entry: 'http://localhost:7002',
          container: '#micro-app-container',
          activeRule: '/sub2',   
        },
        {
          name: 'vue3-app',
          entry: 'http://localhost:7003',
          container: '#micro-app-container',
          activeRule: '/sub3',
        },
      ],
    )

    //启动微前端框架 
    start({
      sandbox: { experimentalStyleIsolation: true }, // 开启实验性样式隔离
      singular: true, // 单实例模式：同一时间只加载一个子应用
    })
  }, [])


  const navItems = [
    { path: '/sub1', label: '子应用1: React+Umi4' },
    { path: '/sub2', label: '子应用2: Vue2+Webpack' },
    { path: '/sub3', label: '子应用3: Vue3+Vite' },
  ]

  useEffect(() => {
    // 使用公共工具库示例
    const currentDate = formatDate(new Date());
    console.log('主应用 - 当前时间:', currentDate);
    setStorage('main_app_data', { timestamp: Date.now() });
  }, []);

  return (
    <div className="main-app">
      <h1>主应用</h1>
      <div className="common-card" style={{ marginBottom: '20px', maxWidth: '500px', margin: '0 auto 20px' }}>
        <h3>公共工具库示例</h3>
        <p>当前时间：{formatDate(new Date())}</p>
      </div>
      {/* 主应用导航栏 - 切换子应用 */}
      <nav className="main-nav">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => handleNavigate(item.path)}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div id="micro-app-container" className="micro-container"></div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter 
      basename="/"
    >
      <AppContent />
    </BrowserRouter>
  )
}

export default App