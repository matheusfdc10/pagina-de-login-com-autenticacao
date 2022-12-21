import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import { useContext } from 'react'
import { AuthProvider, AuthContext } from './contexts/auth'

import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'


export default function AppRoutes() {
    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext)

        if(loading){
            return <div className="loading">Carregando...</div>
        }

        if(!authenticated) {
            return <Navigate to='/login' />
        }

        return children
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route 
                        path='/login' 
                        element={<LoginPage />}
                    />
                    <Route 
                        path='/' 
                        element={<Private><HomePage /></Private>}
                    />
                </Routes>
            </AuthProvider>
        </Router>
    )
}