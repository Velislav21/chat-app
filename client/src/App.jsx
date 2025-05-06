import { Routes, Route } from 'react-router'
import Login from './components/login/Login'
import Register from './components/register/Register'
import ChatLayout from './components/chat/ChatLayout'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/chat" Component={ChatLayout} />
      </Routes>
    </>
  )
}