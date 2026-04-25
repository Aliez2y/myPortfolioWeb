import React from 'react'
import { motion } from 'framer-motion'
import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import javascript from '../assets/img/javascript.png'
import react from '../assets/img/react.png'
import vite from '../assets/img/vite.png'
import tailwind from '../assets/img/tailwind.png'
import nodejs from '../assets/img/node js.png'
import postgres from '../assets/img/postgreSQL.png'
import github from '../assets/img/github.png'
import vscode from '../assets/img/vs code.png'
import bootstrap from '../assets/img/bootstrap.png'
import antigravity from '../assets/img/antigravity.png'
import mysql from '../assets/img/mysql.png'

const techStackLogo = [html, css, javascript, react, vite, tailwind, nodejs, postgres, mysql, github, vscode, bootstrap, antigravity]

function Hero() {

    return (
        <div className="bg-black min-h-full text-white pb-20">

            {/* ส่วนที่ 3: เนื้อหา Hero */}
            <div className="mt-20 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-9xl font-bold tracking-tighter mb-6"
                >
                    Welcome to<br /> My website
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-gray-400 text-xl mx-auto mt-15"
                >
                    Welcome to my website! It's a space to express myself, and I hope you like it.
                </motion.p>

                {/* --- Tech Stack Carousel (Infinite Scroll) --- */}
                {/* Container หลักสำหรับ Mask และซ่อนส่วนเกิน */}
                <div className="mt-20 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">

                    {/* Wrapper ที่บังคับให้ลูกๆ เรียงเป็นแนวนอนยาวๆ ไม่มีการบีบ (flex-nowrap) */}
                    <div className="inline-flex flex-nowrap py-4">

                        {/* สร้าง Loop 4 ชุดไปเลย เพื่อให้แน่ใจว่ายาวพอสำหรับทุกหน้าจอ */}
                        {[...Array(4)].map((_, setIndex) => (
                            <ul
                                key={`set-${setIndex}`}
                                className="flex items-center animate-infinite-scroll shrink-0"
                            >
                                {techStackLogo.map((logo, index) => (
                                    <li key={`logo-${setIndex}-${index}`} className="shrink-0 mr-16">
                                        <img
                                            src={logo}
                                            alt="tech"
                                            className="h-10 w-auto object-contain transition-all duration-300"
                                        />
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero