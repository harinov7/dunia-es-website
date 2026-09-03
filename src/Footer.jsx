import { useState, useEffect } from "react"


export default function Footer() {

    const [form, setForm] = useState({
        username: "",
        email: "",
        number: "",
        about: "",
        description: ""
    });

    const [error, setError] = useState({});

    const [submittedForm, setSubmittedForm] = useState(null);

    const [successMsg, setsuccessMsg] = useState(false);
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        if (successMsg) {
            // Pemicu micro-task agar transisi berjalan dari posisi minus ke posisi tujuan
            const animationTimeout = setTimeout(() => {
                setAnimateIn(true);
            }, 50);

            // Mulai transisi naik/menghilang pada detik ke 2.7
            const leaveTimeout = setTimeout(() => {
                setAnimateIn(false);
            }, 2700);

            // Benar-benar menghapus dari DOM pada detik ke 3
            const removeTimeout = setTimeout(() => {
                setsuccessMsg(false);
            }, 3000);

            return () => {
                clearTimeout(animationTimeout);
                clearTimeout(leaveTimeout);
                clearTimeout(removeTimeout);
            };
        }
    }, [successMsg]);

    function handleChangeForm(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmitForm(e) {
        e.preventDefault()

        const newErrors = {}

        setsuccessMsg(false)

        if (form.username.trim().length === 0) {
            newErrors.username = "Username is required"
        }
        if (form.email.trim().length === 0) {
            newErrors.email = "Email is required"
        }
        if (form.number.trim().length < 9 || form.number.trim().length > 14) {
            newErrors.number = "Number must be 9 to 14 number"
        }
        if (form.about.trim().length === 0) {
            newErrors.about = "About is required"
        }
        if (form.description.trim().length === 0) {
            newErrors.description = "Description is required"
        }
        if (Object.keys(newErrors).length > 0) {
            setError(newErrors)
            console.log(error)
            return
        }
        setsuccessMsg(true)
        setError({})
        setSubmittedForm({
            username: form.username,
            email: form.email,
            number: form.number,
            about: form.about,
            description: form.description
        })
        setForm({
            username: "",
            email: "",
            number: "",
            about: "",
            description: ""
        })

    }

    return (
        <div id="kontak" className="scroll-mt-15">
            <div className="flex px-35 py-20 bg-[#007b80] text-white justify-between h-fit">
                <div className="flex flex-col gap-7 font-semibold">
                    <div>
                        <h5 className="text-4xl">Hubungi Kami!</h5>
                    </div>
                    <div>
                        <p className="text-2xl">Kami terbuka dengan saran.</p>
                    </div>
                    <div className="text-lg">
                        <div className="flex items-center gap-2">
                            <i className="fa-regular fa-envelope"></i>
                            <p>pusatbantuan@duniaes.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="fa-solid fa-location-dot"></i>
                            <p>Kec. Ciampea, Kab. Bogor, Jawa Barat 16620</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmitForm}>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-2 bg-white p-5 rounded-xl shadow-lg">
                            <div className="flex flex-col">
                                <input type="text" name="username" value={form.username} onChange={handleChangeForm} className="bg-white rounded-md caret-black text-black font-semibold placeholder:text-gray-400 p-1 border-2 border-[#00999e]" placeholder="Nama" />
                                <p className={`text-red-500 ${error.username ? "visible" : "invisible"}`}>Username is required</p>
                            </div>

                            <div className="flex gap-3">
                                <div className="flex flex-col">
                                    <input type="email" name="email" value={form.email} onChange={handleChangeForm} className="bg-white rounded-md caret-black text-black font-semibold placeholder:text-gray-400 p-1 border-2 border-[#00999e]" placeholder="Email Kamu" />
                                    <p className={`text-red-500 ${error.email ? "visible" : "invisible"}`}>Email is required</p>
                                </div>
                                <div className="flex flex-col">
                                    <input type="number" name="number" value={form.number} onChange={handleChangeForm} className="bg-white rounded-md caret-black text-black font-semibold placeholder:text-gray-400 p-1 border-2 border-[#00999e]" placeholder="Nomor Telepon" />
                                    <p className={`text-red-500 ${error.number ? "visible" : "invisible"}`}>Number must be 9 to 14 number</p>
                                </div>

                            </div>
                            <div className="flex flex-col">
                                <input type="text" name="about" value={form.about} onChange={handleChangeForm} className="bg-white rounded-md caret-black text-black font-semibold placeholder:text-gray-400 p-1 border-2 border-[#00999e]" placeholder="Tentang" />
                                <p className={`text-red-500 ${error.about ? "visible" : "invisible"}`}>About is required</p>
                            </div>
                            <div className="flex flex-col">
                                <textarea name="description" value={form.description} onChange={handleChangeForm} className="bg-white rounded-md caret-black text-black font-semibold placeholder:text-gray-400 p-1 border-2 border-[#00999e]" placeholder="Pesan" rows={4} />
                                <p className={`text-red-500 ${error.description ? "visible" : "invisible"}`}>Description is required</p>
                            </div>
                        </div>
                        <button className="cursor-pointer bg-[#3cb1c8] w-fit py-2 px-5 rounded-lg font-semibold transition-all duration-300 hover:scale-103 hover:-translate-y-1 hover:shadow-md">Send</button>
                    </div>
                </form>
            </div>
            <p className="text-center m-5 text-lg font-semibold">Copyright © Dunia Es 2026</p>
            {successMsg &&
                <p className={`fixed top-0 left-1/2 -translate-x-1/2 text-white font-semibold bg-green-500 px-10 py-3 rounded-md text-lg transition-all duration-300 ease-out shadow-lg z-50
                    ${animateIn ? 'top-10 opacity-100' : '-top-20 opacity-0'}`}>Pesan telah terkirim. Terimakasih!</p>
            }
        </div>
    )
}