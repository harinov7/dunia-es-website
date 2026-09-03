import HeaderSection from "./Header.jsx"
import './App.css'
import Beranda from "./Beranda.jsx"
import Info from "./Info.jsx"
import Tentang from "./Tentang.jsx"
import Produk from "./Produk.jsx"
import Footer from "./Footer.jsx"
import { useEffect, useState } from "react"

function App() {

  const [activeSection, setActiveSection] = useState("beranda");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        const name = entry.target.id
        setActiveSection(name)
      }
    })
    
  }, {threshold: 0.5})

  useEffect(() => {
    observer.observe(document.getElementById('beranda'))
    observer.observe(document.getElementById('tentang'))
    observer.observe(document.getElementById('produk'))
    observer.observe(document.getElementById('kontak'))
  }, [])

  return (
    <>
      <HeaderSection activeSection={activeSection} setActiveSection={setActiveSection} />
      <Beranda />
      <Info />
      <Tentang />
      <Produk />
      <Footer />
    </>
  )
}

export default App
