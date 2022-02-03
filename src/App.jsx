import React from "react"
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home"
import Register from "./components/Register"
import { AuthProvider } from "./context/authContext"

function App() {
    return ( 
<div className="bg-slate-300 h-screen flex">
    <AuthProvider>
        <Routes>
            <Route path="11_SocialNetwork/*register" element={<Register/>} />
            <Route path="11_SocialNetwork/*" element={<Home />} />
        </Routes>
    </AuthProvider>
    </div>
    );
}

export default App;