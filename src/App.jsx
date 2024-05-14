import Layout from './Layout'
import { HashRouter, useRoutes,useLocation } from 'react-router-dom';
import Router from './router/index.jsx'
import './App.css'
function BeforeRouterEnter() {
  const outlet = useRoutes(Router)
  return outlet
}
function App() {
  return (
    <div>
      <HashRouter>
        <BeforeRouterEnter></BeforeRouterEnter>
      </HashRouter>
    </div>
  )
}

export default App
