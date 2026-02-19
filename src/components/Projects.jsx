import React from 'react'

// สมมติว่า Import รูปโปรเจกต์เข้ามา (ถ้ายังไม่มีรูป ใช้ link placeholder ไปก่อนได้ครับ)
// import solarProjectImg from '../assets/img/solar-project.png' 

const projects = [
  {
    id: 1,
    title: "KKU Solar Cell Assessment",
    category: "Web Map Application",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=Solar+Project", // เปลี่ยนเป็นตัวแปรรูปจริงของคุณ
    description: "A web map application for assessing the suitability of solar cell installation sites at Khon Kaen University.",
    link: "https://github.com/Aliez2y/kku-solar-suitability-map.git" 
  },
  // ถ้ามีโปรเจกต์ที่ 2 ก็แค่ copy block นี้มาวางต่อได้เลย
]

function Projects() {
  return (
    <div id="projects" className='bg-black text-white py-20'>
      <div className='container mx-auto px-4'>
        
        {/* Header Section */}
        <div className='mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>Projects</h2>
            
        </div>

        {/* Grid Section (หัวใจสำคัญ) */}
        {/* grid-cols-1 md:grid-cols-2: มือถือเรียง 1 แถว, จอคอมเรียง 2 แถวเหมือน Ref */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
            
            {/* Loop ข้อมูลโปรเจกต์ออกมาแสดง */}
            {projects.map((project) => (
                <a href={project.link} key={project.id} className='group block cursor-pointer'>
                    
                    {/* ส่วนรูปภาพ (Card) */}
                    {/* ใช้ aspect-video หรือ aspect-[4/3] เพื่อให้สัดส่วนภาพสวยเหมือน Ref */}
                    <div className='relative overflow-hidden rounded-[2rem] border border-white/10 bg-gray-900 aspect-[4/3] mb-6'>
                        
                        {/* รูปภาพ */}
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                        />
                        
                        {/* Overlay ตอน Hover (ถ้าอยากให้มีลูกเล่นเพิ่ม) */}
                        <div className='absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300'></div>
                    </div>

                    {/* ส่วนข้อความ (ใต้ภาพ) */}
                    <div>
                        <h3 className='text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors'>
                            {project.title}
                        </h3>
                        <p className='text-gray-400 text-lg'>
                            {project.category}
                        </p>
                    </div>
                </a>
            ))}

            {/* --- (Optional) Coming Soon Card --- */}
            {/* ใส่ไว้เพื่อให้ Grid มันดูเต็ม ไม่เหงาที่มีแค่อันเดียว */}
            <div className='relative rounded-[2rem] border-2 border-dashed border-gray-800 bg-gray-900/30 aspect-[4/3] flex flex-col items-center justify-center text-center p-6 mb-6 opacity-50 hover:opacity-100 transition-opacity duration-300'>
                 <div className="text-6xl mb-4">🚧</div>
                 <h3 className='text-xl font-bold text-gray-500'>Coming Soon</h3>
                 <p className='text-gray-600'>New project is cooking...</p>
            </div>

        </div>

      </div>
    </div>
  )
}

export default Projects