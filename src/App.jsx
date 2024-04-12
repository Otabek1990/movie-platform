
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound';
import ProtectedRoutes from "./routes/ProtectedRoutes"
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/protected/Home"));

function App() {

  const token = true;
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedRoutes token={token}/>}>
        <Route index element={<Home />} />
        <Route path={"*"} element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

