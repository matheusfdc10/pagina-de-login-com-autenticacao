import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

export default function HomePage() {
    const { authenticated, logout } = useContext(AuthContext)

    function handleLogout() {
        logout()
    }

    return (
        <>
            <h1>Home Page</h1>
            <p>{String(authenticated)}</p>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}