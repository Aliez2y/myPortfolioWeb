import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SiFacebook, SiGithub, SiInstagram } from 'react-icons/si'

function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            }).then((res) => res.json());

            if (res.success) {
                alert("Message sent successfully!");
                setIsModalOpen(false);
                event.target.reset(); // Reset form
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact" className='bg-black text-white py-20 md:py-20'>
            <div className='container mx-auto px-4'>

                {/* --- ส่วนเนื้อหาหลัก (Let's Talk) --- */}
                <div className='flex flex-col items-center justify-center min-h-[50vh]'>

                    {/* หัวข้อใหญ่สะใจ */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className='text-6xl md:text-8xl font-normal mb-12 tracking-tighter text-center'
                    >
                        Let’s talk!
                    </motion.h1>

                    {/* ปุ่ม เปิด Modal (ทรงแคปซูล) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className='group relative flex items-center gap-3 bg-[#1c1c1c] px-8 py-3 rounded-full text-lg md:text-xl hover:bg-[#2a2a2a] transition-all duration-300 border border-white/5 cursor-pointer'
                        >
                            <span className="text-gray-200">Send me a message</span>

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
                        </button>
                    </motion.div>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className='flex md:flex-row pt-9'
                    >
                        <li className='mr-6'><a className='text-white text-2xl' target="_blank" href="https://www.instagram.com/aliezx._/"><SiInstagram /></a></li>
                        <li className='mr-6'><a className='text-white text-2xl' target="_blank" href="https://www.facebook.com/isaranuwat.sonsakda/"><SiFacebook /></a></li>
                        <li className='mr-6'><a className='text-white text-2xl' target="_blank" href="https://github.com/Aliez2y"><SiGithub /></a></li>
                    </motion.ul>
                </div>


                {/* --- ส่วน Footer (ด้านล่างสุด) --- */}
                {/* ใช้ mt-20 เพื่อดันลงมา หรือถ้าอยากให้ติดขอบล่างจอเสมอ ให้จัด Layout อีกแบบ */}
                <div className='flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm mt-28 pt-8 border-t border-white/5'>

                    {/* Copyright (ซ้าย) */}
                    <div className='mb-4 md:mb-0'>
                        <p>2026 © — Made by Itsaranuwat</p>
                    </div>

                    {/* Social Links (ขวา) */}
                    <p>Khon Kaen, Thailand</p>

                </div>
            </div>

            {/* --- Modal Form --- */}
            <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    onClick={() => setIsModalOpen(false)}
                ></div>

                {/* Modal Content */}
                <div className={`relative bg-[#1c1c1c]/90 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 w-full max-w-md shadow-2xl transition-all duration-500 transform ${isModalOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-8 opacity-0'}`}>

                    {/* Close Button */}
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <h2 className="text-3xl font-bold mb-2">Get in touch</h2>
                    <p className="text-gray-400 mb-6 text-sm">Fill out the form below and I'll get back to you.</p>

                    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-gray-600"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-gray-600"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Message</label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none placeholder:text-gray-600 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20 active:[&::-webkit-scrollbar-thumb]:bg-white/30"
                                placeholder="How can I help you?"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`mt-2 group relative w-full flex justify-center items-center gap-2 bg-white text-black font-semibold py-3.5 rounded-2xl transition-all duration-300 overflow-hidden ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                        >
                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                            {!isSubmitting && (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            )}
                            {isSubmitting && (
                                <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            )}
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact