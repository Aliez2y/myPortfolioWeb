import React, { useState, useEffect } from 'react';
import { projects } from './Projects';

function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = [
    { name: 'Home', label: 'Home' },
    { name: 'About', label: 'About' },
    { name: 'Projects', label: 'Projects', count: projects.length },
    { name: 'Contact', label: 'Contact' },
  ];

  // 1. ส่วนการสอดแนมการ Scroll (ScrollSpy)
  useEffect(() => {
    // เปลี่ยนชื่อฟังก์ชันเป็น handleScrollSpy เพื่อไม่ให้ซ้ำกับตัวข้างล่าง
    const handleScrollSpy = () => {

      // ✅ เพิ่มทริคที่ 1: ถ้าเลื่อนอยู่บนสุด (ระยะไม่เกิน 50px) ให้บังคับเป็น Home ทันที
      if (window.scrollY < 50) {
        setActiveTab('Home');
        return; // จบการทำงานตรงนี้เลย ไม่ต้องไปเช็ค Section อื่นแล้ว
      }

      // วนลูปเช็คทีละ Section
      navLinks.forEach((link) => {
        const targetId = link.name.toLowerCase();
        const element = document.getElementById(targetId);

        if (element) {
          const rect = element.getBoundingClientRect();

          // เช็คระยะห่างจากขอบบนจอ
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(link.name);
          }
        }
      });

      // ทริคที่ 2: เช็คว่าเลื่อนลงมาล่างสุดหรือยัง (สำหรับหน้า Contact)
      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveTab('Contact');
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);


  // 2. ฟังก์ชันสำหรับจัดการการกดคลิกเมนู
  // ✅ เปลี่ยนชื่อเป็น handleNavClick เพื่อป้องกันการทำงานตีกัน
  const handleNavClick = (sectionName) => {
    setActiveTab(sectionName);

    const targetId = sectionName.toLowerCase();
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="transition-all duration-300">

      <nav className="bg-[#1C1C1C]/80 backdrop-blur-md rounded-full p-1.5 flex items-center gap-1 border border-white/10 shadow-lg">
        {navLinks.map((link) => (
          <button
            key={link.name}
            // ✅ เรียกใช้ชื่อฟังก์ชันใหม่
            onClick={() => handleNavClick(link.name)}
            className={`
              relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out
              ${activeTab === link.name
                ? 'bg-white text-black shadow-sm'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }
            `}
          >
            <div className="flex items-center gap-2">
              {link.name === 'Projects' && link.count && (
                <span className={`text-[10px] text-white w-5 h-5 flex items-center justify-center rounded-full transition-colors duration-300 ${activeTab === 'Projects' ? 'bg-black' : 'bg-gray-700'}`}>
                  {link.count}
                </span>
              )}
              <span>{link.label}</span>
            </div>
          </button>
        ))}
      </nav>

    </div>
  );
}

export default Navbar;