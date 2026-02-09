function Banner () {
    return (
        <div className="flex justify-center items-center">
            <div className="flex justify-center items-center bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat w-310 h-55.75 top-40.75 left-25 rounded-3xl border bg-blend-darken bg-black/60 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <p className="text-white text-center text-5xl font-bold drop-shadow-[0_0_4px_rgba(0,0,0,1)]">Chez vous, partout et ailleurs</p>
            </div>
        </div>
    )
}

export default Banner