import React from 'react'
import { motion } from 'framer-motion'
import myImage from '../assets/img/myImage.JPG'

// สร้างรายการ Skill ไว้ตรงนี้เพื่อให้แก้ไขง่าย
const skills = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap",
    "Node.js", "Express.js", "PostgreSQL", "MySQL", "Git", "GitHub", "VS Code", "Antigravity"
]

const gisSkills = [
    "QGIS", "ArcGIS Pro"
]

function About() {
    return (
        // เพิ่ม id="about" เพื่อให้ Navbar ลิงก์มาหาเจอ
        // เพิ่ม py-20 เพื่อไม่ให้เนื้อหาชิดขอบบน/ล่างเกินไป
        <div id="about" className='bg-black text-white py-20 flex justify-center'>

            <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-20'>

                {/* ส่วนข้อความ (ซ้าย) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className='order-2 md:order-1'
                >
                    <div className="mb-6">
                        <span className="text-purple-400 font-medium tracking-wider uppercase">About Me</span>
                        <h1 className='text-4xl md:text-5xl font-bold mt-2'>
                            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Itsaranuwat Sonsakda</span>
                        </h1>
                    </div>

                    <p className='text-gray-400 leading-relaxed text-lg mb-10'>
                        A graduate in Geo-Informatics from the College of Computing at Khon Kaen University, I am deeply passionate about creating visually stunning websites. To me, web development is just like crafting a work of art.
                        <br /><br />
                        Currently focusing on building modern web applications with React and Tailwind CSS.
                    </p>

                    {/* --- ส่วนแสดง Skills (New!) --- */}
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-6 border-l-4 border-purple-500 pl-3">My Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:bg-white/10 hover:border-purple-500 hover:text-white transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* --- ส่วนแสดง GIS Skills --- */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 border-l-4 border-pink-500 pl-3">GIS Software & Tools</h3>
                        <div className="flex flex-wrap gap-3">
                            {gisSkills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:bg-white/10 hover:border-pink-500 hover:text-white transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </motion.div>

                {/* ส่วนรูปภาพ (ขวา) */}
                {/* order-1 md:order-2: ในมือถือให้รูปขึ้นก่อน แต่จอคอมให้รูปอยู่ขวา */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className='order-1 md:order-2 flex justify-center md:justify-end'
                >
                    <div className="relative group">
                        {/* กรอบเรืองแสงด้านหลัง */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

                        {/* ตัวรูปภาพ */}
                        <img
                            src={myImage}
                            alt="Profile"
                            className="relative w-72 h-72 lg:w-136 lg:h-[40rem] object-cover rounded-2xl shadow-2xl ring-1 ring-white/10 grayscale group-hover:grayscale-0 transition duration-500"
                        />
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default About