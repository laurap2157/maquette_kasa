import { Link } from "react-router-dom"

function Page404 () {
    return (
        <div className="flex flex-col justify-center items-center">
        <span className="text-9xl font-bold text-[#ff6060] p-20">404</span>
        <p className="text-[#ff6060] font-medium text-4xl p-20 text-center">Oups ! La page que vous demandez n'existe pas.</p>
        <Link to={"/"} className='underline p-20'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Page404