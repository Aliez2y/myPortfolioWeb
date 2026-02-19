import React from 'react'
import { SiFacebook, SiGithub, SiInstagram } from 'react-icons/si'

function Contact() {
    return (
        <div id="contact" className='bg-black text-white py-20 md:py-20'>
            <div className='container mx-auto px-4'>

                {/* --- ส่วนเนื้อหาหลัก (Let's Talk) --- */}
                <div className='flex flex-col items-center justify-center min-h-[50vh]'>

                    {/* หัวข้อใหญ่สะใจ */}
                    <h1 className='text-6xl md:text-8xl font-normal mb-12 tracking-tighter text-center'>
                        Let’s talk!
                    </h1>

                    {/* ปุ่ม Email (ทรงแคปซูล) */}
                    <a
                        href="mailto:your.email@gmail.com"
                        className='group relative flex items-center gap-3 bg-[#1c1c1c] px-8 py-3 rounded-full text-lg md:text-xl hover:bg-[#2a2a2a] transition-all duration-300'
                    >
                        <span className="text-gray-200">hello@itsaranuwat.co</span> {/* เปลี่ยนเป็นอีเมลจริงของคุณ */}

                        {/* ไอคอนลูกศรเฉียง (Arrow Up Right) */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>
                    <ul className='flex md:flex-row pt-9'>
                        <li className='mr-6'><a className='text-white text-2xl' href="https://www.instagram.com/aliezx._/"><SiInstagram /></a></li>
                        <li className='mr-6'><a className='text-white text-2xl' href="https://www.facebook.com/isaranuwat.sonsakda/"><SiFacebook /></a></li>
                        <li className='mr-6'><a className='text-white text-2xl' href="https://github.com/Aliez2y"><SiGithub /></a></li>
                    </ul>
                </div>


                {/* --- ส่วน Footer (ด้านล่างสุด) --- */}
                {/* ใช้ mt-20 เพื่อดันลงมา หรือถ้าอยากให้ติดขอบล่างจอเสมอ ให้จัด Layout อีกแบบ */}
                <div className='flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm mt-28 pt-8 border-t border-white/5'>

                    {/* Copyright (ซ้าย) */}
                    <div className='mb-4 md:mb-0'>
                        <p>2026 © — Made by Itsaranuwat</p>
                    </div>

                    {/* Social Links (ขวา) */}
                    <p>315 Moo 12, Samran, Mueang Khon Kaen, Khon Kaen 40000, Thailand</p>

                </div>
            </div>
        </div>
    )
}

export default Contact