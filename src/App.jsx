import Home from "./pages/Home"
import Layout from "./pages/Layout"
import { Route ,Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Preview from "./pages/Preview"
import Login from "./pages/Login"
import ResumeBuilder from "./pages/ResumeBuilder"

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="app" element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="builder/:resumeId" element={<ResumeBuilder/>}/>
        </Route>

        <Route path="view/:resumeId" element={<Preview/>}/>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
