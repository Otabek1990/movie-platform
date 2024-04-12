import Layout from "@/containers/Layout"
import { Navigate } from 'react-router-dom'
import {PropTypes} from "prop-types"

function ProtectedRoutes({ token,setToken }) {
    return token ? <Layout setToken={setToken}/> : <Navigate to="/login" />
}

export default ProtectedRoutes;
ProtectedRoutes.propTypes={
    token:PropTypes.string,
    setToken:PropTypes.func
}