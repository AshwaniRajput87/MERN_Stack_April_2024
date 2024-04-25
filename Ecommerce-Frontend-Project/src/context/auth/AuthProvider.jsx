import { useState } from "react";
import AuthContext from "./AuthContext";
export const AuthProvider = ({ children }) => {
    const [user, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ user, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;