import Produk_Es_Kacang_Ijo from './assets/Produk_Es_Kacang_Ijo.jpg'
import Produk_Es_Coklat from './assets/Produk_Es_Coklat.jpg'
import Produk_Es_Putih from './assets/Produk_Es_Putih.jpg'
import Produk_Es_Durian from './assets/Produk_Es_Durian.jpg'

export default function Produk() {

    return (
        <div className='container flex scroll-mt-15 overflow-hidden' id='produk'>
            <div className='card relative transition duration-500'>
                <img src={Produk_Es_Kacang_Ijo} alt='Es-Kacang-Ijo' width='1512' height='2156' />
            </div>

            <div className='card relative transition duration-500'>
                <img src={Produk_Es_Coklat} alt='Es-Kacang-Ijo' width='1512' height='2156' />
            </div>

            <div className='card relative transition duration-500'>
                <img src={Produk_Es_Putih} alt='Es-Kacang-Ijo' width='1512' height='2156' />
            </div>

            <div className='card relative transition duration-500'>
                <img src={Produk_Es_Durian} alt='Es-Kacang-Ijo' width='1512' height='2156' />
            </div>
        </div>
    )
}