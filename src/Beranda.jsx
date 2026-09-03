import Bg_Beranda from './assets/Bg_Beranda.png'
import Tagline from './assets/Tagline.png'

export default function Beranda() {

    return (
        <div id='beranda' className='scroll-mt-15'>
            <div className="beranda h-dvh bg-cover"
                style={{ backgroundImage: `url(${Bg_Beranda})` }}>
                <div className='absolute right-10 bottom-35'>
                    <img src={Tagline} />
                </div>
            </div>
        </div>
    )
}