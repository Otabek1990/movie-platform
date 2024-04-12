import Layout from "@/containers/Layout"
import { Navigate } from 'react-router-dom'
import {PropTypes} from "prop-types"

function ProtectedRoutes({ token }) {
    return token ? <Layout /> : <Navigate to="/login" />
}

export default ProtectedRoutes;
ProtectedRoutes.propTypes={
    token:PropTypes.bool
}