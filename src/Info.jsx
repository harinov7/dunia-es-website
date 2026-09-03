

export default function Info() {

    return (
        <div className="flex justify-around font-utama tracking-wider m-5">
            <div className="text-center flex flex-col items-center">
                <div className="bg-[#F47174] rounded-full w-20 h-20 p-5 flex justify-center items-center shadow-md">
                    <h2 className="text-4xl font-bold text-white">43+</h2>
                </div>
                <p className="mt-5">Pelanggan Tetap</p>
            </div>
            <div className="text-center flex flex-col items-center">
                <div className="bg-[#F47174] rounded-full w-20 h-20 p-5 flex justify-center items-center shadow-md">
                    <h2 className="text-4xl font-bold text-white">4</h2>
                </div>
                <p className="mt-5">Varian Rasa</p>
            </div>
            <div className="text-center flex flex-col items-center">
                <div className="bg-[#F47174] rounded-full w-20 h-20 p-5 flex justify-center items-center shadow-md">
                    <h2 className="text-4xl font-bold text-white">1</h2>
                </div>
                <p className="mt-5">Tahun Beroperasi</p>
            </div>
        </div>
    )
}