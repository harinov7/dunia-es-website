import Brand_Header from './assets/Brand_Header.png'
import Flag_of_Indonesia from './assets/Flag_of_Indonesia.webp'
import './App.css'

export default function HeaderSection({
    activeSection,
    setActiveSection
}) {

    function changeActiveSection(e) {
        setActiveSection(e.target.name)
    }

    return (
        <header className='z-50 sticky top-0 font-utama tracking-wider'>
            <nav className='shadow-md'>
                <div className='m-auto px-27 bg-white'>
                    <div className='flex items-center justify-between text-black font-semibold max-h-17'>
                        <div>
                            <a onClick={() => window.location.reload()}><img src={Brand_Header} width="500" className='w-24' /></a>
                        </div>
                        <div className='h-full flex gap-10 text-lg'>
                            <a className={activeSection === "beranda" ? 'active-section' : 'select-section'} name="beranda" href='#beranda' onClick={changeActiveSection} >Beranda</a>
                            <a className={activeSection === "tentang" ? 'active-section' : 'select-section'} name="tentang" href='#tentang' onClick={changeActiveSection}>Tentang Kami</a>
                            <a className={activeSection === "produk" ? 'active-section' : 'select-section'} name="produk" href='#produk' onClick={changeActiveSection}>Produk</a>
                            <a className={activeSection === "kontak" ? 'active-section' : 'select-section'} name="kontak" href='#kontak' onClick={changeActiveSection}>Kontak</a>
                        </div>

                        <div className='dropdown cursor-pointer select-none'>
                            <div className='langue flex gap-2'>
                                <img src={Flag_of_Indonesia} className='max-w-5' />
                                <small>Indonesia</small>
                                <i className="fa-solid fa-caret-down"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}