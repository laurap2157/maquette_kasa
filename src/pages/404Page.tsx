import { NavLink } from "react-router-dom"

function Page404 () {
    return (
        <div className="flex justify-center items-center">
        <span className="w-149.25 h-65.75 text-[#ff6060]">404</span>
        <p className="text-[#ff6060] w-218 h-12.75">Oups ! La page que vous demandez n'existe pas</p>
        <NavLink to={"AccueilPage"} className='active:underline [&.active]:underline'>Retourner sur la page d'accueil</NavLink>
        </div>
    )
}

export default Page404