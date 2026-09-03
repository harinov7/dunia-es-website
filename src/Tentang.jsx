import Brand_Logo from './assets/Brand_Logo.png'

export default function Tentang() {

    return(
        <div className="bg-[#9dd5e0] h-dvh rounded-t-[8rem] p-20 flex flex-col items-center gap-8 font-utama tracking-widest scroll-mt-15" id='tentang'>
            <img src={Brand_Logo} width="500" className='w-24 rounded-full shadow-md'/>
            <p className='text-center px-100 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatibus, reiciendis, repellendus pariatur quae quaerat ut doloremque odio nulla necessitatibus vero nesciunt, ex beatae sit nobis dolor soluta dolore veniam?</p>
            <p className='text-center px-100 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quo doloribus asperiores commodi culpa dolore? Quidem ipsam eum quae explicabo blanditiis repellat ad porro aspernatur. Laborum minus vitae ut eius.</p>
            <p className='text-center px-100 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ipsum a dolorum ipsam amet, quibusdam id, ducimus repellendus sed voluptatibus est deleniti quaerat hic omnis voluptatum in aut officia nulla.</p>
        </div>
    )
}