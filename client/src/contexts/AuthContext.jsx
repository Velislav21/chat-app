import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

function authReducer(state, action) {

    switch (action.type) {
        case "LOGIN":
            localStorage.setItem('user', JSON.stringify(action.payload));
            return { user: action.payload };

        case "LOGOUT":
            localStorage.removeItem("user")
            return { user: null };

        default:
            return state;
    }
}

export function AuthContextProvider({ children }) {

    const [state, dispatch] = useReducer(authReducer, { user: null });
    useEffect(() => {

        const user = localStorage.getItem("user");
        if (user) {
            dispatch({ type: "LOGIN", payload: JSON.parse(user) })
        };
    }, []);

    console.log("Auth Context state: ", state);
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );

};

