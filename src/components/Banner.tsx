function Banner () {
    return (
        <div className="flex justify-center items-center pb-2 md:pb-10 pt-5">
            <div className="flex justify-center items-center bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat md:w-[95vw] md:h-[30vh] rounded-3xl border bg-blend-darken bg-black/60 md:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ml-6 mr-6">
                <p className="text-white m-4 md:text-center text-5xl font-bold drop-shadow-[0_0_4px_rgba(0,0,0,1)] p-4">Chez vous, partout et ailleurs</p>
            </div>
        </div>
    )
}

export default Banner