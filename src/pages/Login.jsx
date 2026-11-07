import { useState } from "react";
import { useAuth } from "../hook/useAuth";

export function LoginPage () {
    const { login, error } = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")   

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!email.trim() || !password.trim()) return
        console.log("submitted:", email, password); 
        return login(email.trim(), login)
        
    }

    return (
        <div className="main">
            <form className="userInput" onSubmit={handleSubmit}>
                <label className="email">Email:</label>
                <input value={email} type="email" placeholder="Alice@gmail.com" onChange={(event) => setEmail(event.target.value)}></input>
                
                <label className="password">Password:</label>
                <input value={password} type="text" placeholder="Alice@gmail.com" onChange={(event) => setPassword(event.target.value)}></input>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}
