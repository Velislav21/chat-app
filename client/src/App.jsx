import { Routes, Route } from 'react-router'

import Login from './components/login/Login'
import Register from './components/register/Register'
import ChatLayout from './components/chat/ChatLayout'
import AuthorizedRoutes from './components/route-guards/AuthorizedRoutes'
import UnAuthorizedRoutes from './components/route-guards/UnAuthorizedRoutes'

import { AuthContextProvider } from './contexts/AuthContext'
import { SocketContextProvider } from './contexts/SocketContext'

import { Toaster } from 'react-hot-toast'

console.log('test')

export default function App() {
    return (
        <AuthContextProvider>
            <SocketContextProvider>

                <Routes>

                    <Route element={<UnAuthorizedRoutes />}>
                        <Route path="/login" Component={Login} />
                        <Route path="/register" Component={Register} />
                    </Route>

                    <Route element={<AuthorizedRoutes />}>
                        <Route path="/" Component={ChatLayout} />
                    </Route>

                </Routes>

                <Toaster />
            </SocketContextProvider>
        </AuthContextProvider >
    )
}