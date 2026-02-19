import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-black min-h-screen text-white">
      
      {/* 1. ส่วนชื่อ (Header) - จะเลื่อนหายไปเมื่อไถลง */}
      <div className="flex justify-center pt-10 mb-8">
        <h1 className="text-3xl font-bold">Itsaranuwat</h1>
      </div>

      {/* 2. ส่วน Navbar (Sticky) - พระเอกของเรา */}
      {/* ย้ายมาอยู่ตรงนี้ มันจะเป็นพี่น้องกับ Hero, About ทำให้มันคุมได้หมด */}
      <div className="sticky top-4 z-50 flex justify-center mb-4">
         <Navbar />
      </div>

      {/* 3. ส่วนเนื้อหา (Components ต่างๆ) */}
      {/* เนื้อหาเหล่านี้จะไหลผ่านใต้ Navbar เมื่อเลื่อนลง */}
      <div className="flex flex-col gap-20"> {/* gap-20 เพื่อเว้นระยะระหว่าง section */}
          <div id="Home"><Hero /></div>
          <div id="About"><About /></div>
          <div id="Projects"><Projects /></div>
          <div id="Contact"><Contact /></div>
      </div>

    </div>
  )
}

export default App
