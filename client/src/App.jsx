import { Routes, Route } from 'react-router'

import Login from './components/login/Login'
import Register from './components/register/Register'
import ChatLayout from './components/chat/ChatLayout'
import { AuthContextProvider } from './components/contexts/AuthContext'

import { Toaster } from 'react-hot-toast'

export default function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/chat" Component={ChatLayout} />
      </Routes>
      <Toaster />
    </AuthContextProvider>
  )
}