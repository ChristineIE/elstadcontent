import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

// Each page is one <Route>. To add a portfolio later:
// 1. create src/pages/Work.jsx
// 2. add <Route path="work" element={<Work />} /> below
// 3. add { to: '/work', label: 'Work' } to the links list in components/Header.jsx
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
