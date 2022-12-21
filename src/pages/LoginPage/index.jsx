import { useState, useContext } from "react"
import { AuthContext } from '../../contexts/auth'
import "./style.css"

export default function LoginPage() {
    const { authenticated, login} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        const dadosLogin = {
            email,
            password
        }
        console.log(dadosLogin)
        login(email, password)
    }

    return (
        <div id="login">
            <h1 className="title">Login do sistema</h1>
            <p>{String(authenticated)}</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">E-mail</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={password} 
                    onChange={e => setPassword(e.target.value)}/>
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    )
}