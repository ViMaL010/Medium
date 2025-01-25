import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'
import { DeletePost } from './components/DeletePost'

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/blogs/:id" element={<Blog/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path = "/publish" element={<Publish/>}/>
        <Route path = "/delete:id" element={<DeletePost/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
