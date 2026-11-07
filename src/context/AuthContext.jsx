import { createContext, useState } from "react";

export const AuthContext = createContext(null)

export function AuthProvider ({children}) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    console.log(error)
    const login = (email, password) => {
        setError(null);
        if (email === "test@gmail.com" && password === "12345") {
            setUser({email})
            console.log(user)
        }
        
        else {
            setError("Invalid Email or password")
        }

    }

    const logout = () => setUser(null)

    const value = {user, error, login, logout}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}

