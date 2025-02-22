
import { lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound';
import ProtectedRoutes from "./routes/ProtectedRoutes"
import { routes } from './routes';
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/protected/home"));

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "")

  return (
    <div className='h-auto '>
      <Routes>
        <Route path="login" element={<Login setToken={setToken} />} />
        <Route element={<ProtectedRoutes setToken={setToken} token={token} />}>
          <Route index element={<Home />} />
          {routes.map(route => (
            <Route key={route.id} path={route.path} element={<route.element/>}/>
          ))}
          <Route path={"*"} element={<NotFound />} />
        </Route>
      </Routes>
      
    </div>
  )
}

export default App



